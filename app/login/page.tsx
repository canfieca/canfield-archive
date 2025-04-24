import { Button } from "@mui/material";
import Link from "next/link";

export default function Login() {
    return (
        <div className="w-full h-[100vh]">
            <form className="absolute p-24 text-black top-[50%] left-[50%] rounded-xl bg-white shadow-xl -translate-y-[50%] -translate-x-[50%]">
                <div className="mb-4">
                    <label className="pr-2" htmlFor="email">Email:</label>
                    <input className="border border-black" type="text" id="email" name="email"></input>
                </div>
                <div className="mb-4">
                    <label className="pr-2" htmlFor="password">Password:</label>
                    <input className="border border-black" type="password" id="password" name="password"></input>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Button variant="contained">Log In</Button>
                    <Link href="/signup" passHref>
                        <Button variant="contained" component="a">
                            Sign Up
                        </Button>
                    </Link>
                </div>
            </form>
        </div>
    );
}