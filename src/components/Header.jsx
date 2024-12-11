import { useLogoutMutation } from "@/api/authApiSlice";
import { LogOut, User as UserIcon } from "lucide-react";
import { selectCurrentUsername, selectCurrentRoles } from "../api/authSlice";
import { useSelector } from "react-redux";

export const Header = () => {
    const [logout, { isLoading }] = useLogoutMutation();
    const username = useSelector(selectCurrentUsername);
    const roles = useSelector(selectCurrentRoles);
    return (
        <header className="bg-white shadow-md">
            <div className="px-4 py-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Toko Reparasi APL
                    </h1>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <UserIcon className="w-5 h-5 text-gray-600" />
                            <span className="text-sm text-gray-600">
                                {username}
                            </span>
                            <span className="px-2 py-1 text-xs text-blue-800 bg-blue-100 rounded">
                                {roles}
                            </span>
                        </div>
                        <button
                            disabled={isLoading}
                            onClick={logout}
                            className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                        >
                            <LogOut className="w-5 h-5" />
                            <span>{isLoading ? "logging out" : "logout"}</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
