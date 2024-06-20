import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./lib/auth";

export default async function Page() {
  // getServerSession -> used in server components, to obtain session objects,
  // which tell whether a user is logged in or not
  // only checks for authenticated cookies, otherwise returns null

  // useSession -> used in client components, to obtain session objects,
  // whether or not cookies are present
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect("/dashboard");
  } else {
    redirect("/api/auth/signin");
  }
}
