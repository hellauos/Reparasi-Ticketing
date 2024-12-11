/* eslint-disable no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import { useForm } from "react-hook-form";
import { ticketSchema } from "../../schema/Ticket";
import { useCreateTicketMutation } from "@/api/ticketApiSlice";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUserId } from "@/api/authSlice";

export function CreateTicketDrawer() {
    const userId = useSelector(selectCurrentUserId);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ resolver: zodResolver(ticketSchema) });

    const [createTicket, { isLoading, isError, isSuccess, error }] =
        useCreateTicketMutation();

    const [isOpen, setIsOpen] = useState(false);

    const onSubmit = async (payload) => {
        try {
            const p = await createTicket({
                title: payload.title,
                desc: payload.desc,
                user: String(userId),
            });

            reset();
            setIsOpen(false);
            window.location.reload();
        } catch (error) {
            console.log("gagal membuat ticket baru", error);
        }
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Tambah Ticket
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Buat Ticket Baru</SheetTitle>
                    <SheetDescription>
                        Menambahkan Ticket baru ke db
                    </SheetDescription>
                </SheetHeader>

                <form
                    className="mt-4 space-y-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {/* username */}
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="title"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            {...register("title", { required: true })}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        {errors.title && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.title.message}
                            </p>
                        )}
                    </div>

                    {/* pwd */}
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="description"
                        >
                            Description
                        </label>
                        <input
                            type="text"
                            id="desc"
                            {...register("desc", { required: true })}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        {errors.desc && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.desc.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        onClick={() => console.log("Submit button clicked")}
                        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </form>
            </SheetContent>
        </Sheet>
    );
}
