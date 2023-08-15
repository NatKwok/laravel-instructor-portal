import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import AuthenticatedLayout_v2 from "@/Layouts/AuthenticatedLayout";

import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head, usePage } from "@inertiajs/react";
import DangerButton from "@/components/DangerButton";
import SecondaryButton from "@/components/SecondaryButton";

export default function Index({ auth, books }) {
    const { data, setData, post, processing, reset, errors, get, patch } =
        useForm({});
    const { message } = usePage().props;

    const createBook = (e) => {
        e.preventDefault();
        get(route("book.create"), { onSuccess: () => reset() });
    };

    const editSub = (e) => {
        e.preventDefault();
        get(route("book.edit"), {
            onSuccess: () => reset(),
        });
        console.log("edit_sub passed");
    };

    const deleteBook = (e) => {
        console.log('book_delete')
        e.preventDefault();
        patch(route("book.destroy"), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Books
                </h2>
            }
        >
            <Head title="Books" />

            {message && (
                <div
                    className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md my-3"
                    role="alert"
                >
                    <div className="flex">
                        <div>
                            <p className="text-sm">{message}</p>
                        </div>
                    </div>
                </div>
            )}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div
                            className="p-7 bg-white border-b border-gray-200"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <div className="form">
                                <PrimaryButton
                                    className="mt-4  bg-green-500"
                                    style={{ textAlign: "center" }}
                                    disabled={processing}
                                    onClick={createBook}
                                >
                                    Add New Book
                                </PrimaryButton>
                                <br />
                                <br />
                                <table
                                    className="table-fixed w-full"
                                    width="100%"
                                    border={1}
                                    style={{ borderCollapse: "collapse" }}
                                >
                                    <thead>
                                        <tr className="bg-gray-200">
                                            <th className="px-4 py-2 w-40">
                                                <strong>ISBN</strong>
                                            </th>
                                            <th className="px-4 py-2 w-40">
                                                <strong>Title</strong>
                                            </th>
                                            <th className="px-4 py-2 w-40">
                                                <strong>Price</strong>
                                            </th>
                                            <th className="px-4 py-2 w-40">
                                                <strong>
                                                    Author
                                                </strong>
                                            </th>
                                            <th className="px-4 py-2 w-40">
                                                <strong>
                                                    Publication Date
                                                </strong>
                                            </th>
                                            <th className="px-4 py-2 w-40">
                                                <strong>Actions</strong>
                                            </th>
                                        </tr>
                                    </thead>

                                    {books.map((item, index) => (
                                        <tbody key={index.isbn}>
                                            <tr>
                                            <td
                                                    className="border px-4 py-2"
                                                    align="center"
                                                >
                                                    {item.isbn}
                                                </td>
                                                <td
                                                    className="border px-4 py-2"
                                                    align="center"
                                                >
                                                    {item.title}
                                                </td>
                                                <td
                                                    className="border px-4 py-2"
                                                    align="center"
                                                >
                                                    ${item.price}
                                                </td>
                                                <td
                                                    className="border px-4 py-2"
                                                    align="center"
                                                >
                                                    {item.author}
                                                </td>
                                                <td
                                                    className="border px-4 py-2"
                                                    align="center"
                                                >
                                                    {item.pubdate}
                                                </td>
                                                <td
                                                    className="border px-4 py-2"
                                                    align="center"
                                                >
                                                    {/* <form onSubmit={editSub}>

                                            <PrimaryButton
                                                className="mt-1"
                                                disabled={processing}
                                                onClick={() => {
                                                    setData(
                                                        "sub_code",
                                                        item.sub_code
                                                    );
                                                }}
                                            >
                                                Edit
                                            </PrimaryButton>
                                       </form> */}
                                                    <a
                                                        href={route(
                                                            "book.edit",
                                                            {
                                                                isbn:
                                                                    item.isbn,
                                                            }
                                                        )}
                                                    >
                                                        <PrimaryButton className="mt-2 bg-blue-500">
                                                            Edit
                                                        </PrimaryButton>
                                                    </a>

                                                    {/* <a
                                            href={route("subject.destroy", {
                                                sub_code: item.sub_code,
                                            })}
                                        >
                                            <PrimaryButton className="mt-2">
                                                Delete
                                            </PrimaryButton>
                                        </a> */}
                                                    <form onSubmit={deleteBook}>
                                                        <DangerButton
                                                            className="mt-1"
                                                            disabled={
                                                                processing
                                                            }
                                                            onClick={() => {
                                                                setData(
                                                                    "isbn",
                                                                    item.isbn
                                                                );
                                                            }}
                                                        >
                                                            Delete
                                                        </DangerButton>
                                                    </form>
                                                </td>
                                            </tr>
                                        </tbody>
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
