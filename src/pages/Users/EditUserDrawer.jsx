/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

import {
    useUpdateUserMutation,
    useDeleteUserMutation,
} from "@/api/usersApiSlice";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ROLES } from "@/config/roles";

export function EditUserDrawer({ selectedUser }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: selectedUser,
    });
    const [updateUser, { isLoading, isSuccess, isError, error }] =
        useUpdateUserMutation();
    const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

    const onSubmit = async (payload) => {
        try {
            await updateUser({
                ...selectedUser,
                username: payload.username,
                roles: payload.roles,
            });
            reset();
            window.location.reload();
        } catch (err) {
            console.error("Failed to create user:", err);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteUser({ id: selectedUser.id });
            console.log("User deleted successfully");
        } catch (err) {
            console.error("Failed to delete user:", err);
        }
    };
    return (
        <Sheet>
            <SheetTrigger>
                <div className="mr-4 text-indigo-600 hover:text-indigo-900">
                    Edit
                </div>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit User</SheetTitle>
                    <SheetDescription>
                        edit{" "}
                        <span className="font-bold capitalize">
                            {" "}
                            {selectedUser.username}
                        </span>{" "}
                        user data
                    </SheetDescription>
                </SheetHeader>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-4 space-y-4"
                >
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            {...register("username")}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        {errors.username && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.username.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...register("password")}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* roles */}
                    <div>
                        <label
                            htmlFor="role"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Role
                        </label>
                        <select
                            id="roles"
                            {...register("roles")}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            multiple={true}
                            size="3"
                            value={updateUser.roles}
                        >
                            {Object.values(ROLES).map((role) => (
                                <option key={role} value={role}>
                                    {role}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Delete */}
                    <div className="flex gap-3">
                        <button
                            onClick={handleDelete}
                            disabled={isDeleting}
                            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            {isDeleting ? "Deleting..." : "Delete User"}
                        </button>
                        <button
                            type="submit"
                            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Save User
                        </button>
                    </div>
                </form>
            </SheetContent>
        </Sheet>
    );
}
