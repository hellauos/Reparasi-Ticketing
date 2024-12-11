/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { useLogoutMutation } from "@/api/authApiSlice";

export function AccessDenied() {
    const [logout, { isLoading }] = useLogoutMutation();

    return (
        <Sheet open>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Access Denied !!!</SheetTitle>
                    <SheetDescription>Silahkan login kembali</SheetDescription>
                    <div></div>
                    <button
                        disabled={isLoading}
                        onClick={logout}
                        className="flex justify-center items-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                        <span>Ok</span>
                    </button>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
