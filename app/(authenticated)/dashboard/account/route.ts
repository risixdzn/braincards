import { redirect } from "next/navigation";

export async function GET() {
    redirect("/dashboard/settings/account");
}
