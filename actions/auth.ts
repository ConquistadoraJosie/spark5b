"use server";
// every server action must be async and include 'use server' at the top to 
// indicate that it is a server action/ server side

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
// import { headers } from "next/headers";
// import { userAgent } from "next/server";


// Define the type for sign up form data
interface SignUpFormData {
    guardianFirstName: string;
    guardianLastName: string;
    phoneNumber: string;
    email: string;
    childFirstName: string;
    childLastName: string;
    childBirthday: string;
    childAge: string;
    schoolName: string;
    username: string;
    password: string;
    subscribe: string;
}

//Sign up function for the user to create an account
export async function signUp(formData: FormData) {
    const supabase = await createClient();

    // Extract all fields from the FormData object
    const credentials: SignUpFormData = {
        guardianFirstName: formData.get("guardianFirstName") as string,
        guardianLastName: formData.get("guardianLastName") as string,
        phoneNumber: formData.get("phoneNumber") as string,
        email: formData.get("email") as string,
        childFirstName: formData.get("childFirstName") as string,
        childLastName: formData.get("childLastName") as string,
        childBirthday: formData.get("childBirthday") as string,
        childAge: formData.get("childAge") as string,
        schoolName: formData.get("schoolName") as string,
        username: formData.get("username") as string,
        password: formData.get("password") as string,
        subscribe: formData.get("subscribe") as string,
    };

    const { data, error } = await supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
        options: {
            data: {
                username: credentials.username,
                guardian_first_name: credentials.guardianFirstName,
                guardian_last_name: credentials.guardianLastName,
                phone_number: credentials.phoneNumber,
                child_first_name: credentials.childFirstName,
                child_last_name: credentials.childLastName,
                child_birthday: credentials.childBirthday,
                child_age: credentials.childAge,
                school_name: credentials.schoolName,
                subscribe_newsletter: credentials.subscribe === 'yes', // Convert 'yes'/'no' to boolean
            },
        },

    });

    if (error) {
        return {
            status: error?.message,
            user: null,
        };
    }

    if (data?.user?.identities?.length === 0) {
        return {
            status: "User with this email already exists",
            user: null
        };
    }


    revalidatePath("https://spark5b.vercel.app/");
    return { status: "success", user: data.user };
}
//Sign in function for the user to log in to their account
export async function signIn(formData: FormData) {
    const supabase = await createClient();
    const credentials = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        // Validate credentials with the sign-up form tsx
    };
    const { data, error } = await supabase.auth.signInWithPassword(credentials);

    // Check if the user types the correct password
    if (error) {
        return {
            status: error?.message,
            user: null,
        } // return the error message if there is an error
    }
    // TODO: create a user instance in user_profiles table 
    const { data: existingUser } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("email", credentials?.email)
        .limit(1)
        .single();

    // if user does NOT exist, create a new user profile
    if (!existingUser) {
        const { error: insertError } = await supabase.from("user_profiles").insert({
            email: data?.user.email,
            username: data?.user?.user_metadata?.username,
        });
        if (insertError) {
            return {
                status: insertError?.message,
                user: null
            };
        }
    }
    revalidatePath("/dashboard", "layout");
    return { status: "success", user: data.user };
}
//Logout function for the user to log out of their account
export async function signOut() {
    const Supabase = await createClient();
    const { error } = await Supabase.auth.signOut();

    if (error) {
        redirect("/error"); // if there is an error, redirect to the error page
    }

    revalidatePath("/dashboard", "layout");
    redirect("/dashboard");
}

