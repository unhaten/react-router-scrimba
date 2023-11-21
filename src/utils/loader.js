import { getVans } from "../api";
import { getHostVans } from "../api";
import { requireAuth } from "./requireAuth";

export function loader() {
    return getVans();
}

export function detailedLoader({ params }) {
    return getVans(params.id);
}

export async function hostLoader() {
    await requireAuth();
    return getHostVans();
}

export async function detailedHostLoader({ params }) {
    await requireAuth();
    return getHostVans(params.id);
}

export function loginLoader({ request }) {
    return new URL(request.url).searchParams.get("message");
}
