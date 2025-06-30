import { signIn } from "@/auth";
import Image from "next/image";

export default function LoginSpotify() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("spotify");
      }}
    >
      <button
        type="submit"
        className="flex cursor-pointer items-center gap-1 text-green-400"
      >
        Sign in with
        <Image src="/spotify.svg" width={100} height={100} alt="Spotify logo" />
      </button>
    </form>
  );
}
