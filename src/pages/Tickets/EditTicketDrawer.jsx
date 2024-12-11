/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    useDeleteTicketMutation,
    useUpdateTicketMutation,
} from "@/api/ticketApiSlice";

export function EditTicketDrawer({ selectedTicket }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: selectedTicket,
    });
    const [deleteTicket, { isLoading: isDeleting }] = useDeleteTicketMutation();
    const [updateTicket, { isLoading, isSuccess, isError, error }] =
        useUpdateTicketMutation();

    const onSubmit = async (payload) => {
        try {
            await updateTicket({
                ...selectedTicket,
                title: payload.title,
                desc: payload.desc,
                isFixed: String(selectedTicket.isFixed),
            });
            reset();
            window.location.reload();
        } catch (error) {
            console.log("gagal update", error);
        }
    };
    const handleDelete = async () => {
        try {
            await deleteTicket({ id: selectedTicket.id });
            console.log("Tiket deleted successfully");
        } catch (error) {
            console.error("gagal melakukan delete", error);
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
                    <SheetTitle>Edit Tiket</SheetTitle>
                    <SheetDescription>
                        edit{" "}
                        <span className="font-bold capitalize">
                            {" "}
                            {selectedTicket.title}
                        </span>{" "}
                    </SheetDescription>
                </SheetHeader>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-4 space-y-4"
                >
                    <div>
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            {...register("title")}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        {errors.title && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.title.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="desc"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Description
                        </label>
                        <input
                            type="text"
                            id="desc"
                            {...register("desc")}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        {errors.desc && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.desc.message}
                            </p>
                        )}
                    </div>

                    {/* Delete */}
                    <div className="flex gap-3">
                        <button
                            onClick={handleDelete}
                            disabled={isDeleting}
                            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            {isDeleting ? "Deleting..." : "Delete Ticket"}
                        </button>
                        <button
                            type="submit"
                            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Save Ticket
                        </button>
                    </div>
                </form>
            </SheetContent>
        </Sheet>
    );
}
