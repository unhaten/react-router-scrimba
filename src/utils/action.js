import { loginUser } from "../api";
import { redirect } from "./redirectUtil";

export async function loginAction({ request }) {
    try {
        const formData = await request.formData();
        const email = formData.get("email");
        const password = formData.get("password");
        const data = await loginUser({ email, password });
        localStorage.setItem("isLoggedIn", true);
        return redirect("/host");
    } catch (e) {
        return e.message;
    }
}
