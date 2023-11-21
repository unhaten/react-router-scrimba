import { redirect } from "./redirectUtil.js";

export async function requireAuth() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        throw redirect("/login?message=You must log in first!");
    }

    return null;
}
