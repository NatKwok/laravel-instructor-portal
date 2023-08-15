import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/react";

export default function Index({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("book.store"), { onSuccess: () => reset() });
        console.log("book created");
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Add Book
                </h2>
            }
        >
            <Head title="Add Book" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={submit}>
                                <div className="mb-4">
                                    <label htmlFor="isbn">
                                        ISBN:{" "}
                                    </label>
                                    <input
                                        type="number"
                                        name="isbn"
                                        id="isbn"
                                        placeholder="0"
                                        className="w-20 px-4 py-2"
                                        onChange={(e) =>
                                            setData("isbn", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.isbn}
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="title">
                                        Title:{" "}
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="px-4 py-2"
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.title}
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="price">
                                        Price:{" "}
                                    </label>
                                    <input
                                        type="number"
                                        step="any"
                                        name="price"
                                        id="price"
                                        placeholder="0"
                                        className="w-20 px-4 py-2"
                                        onChange={(e) =>
                                            setData(
                                                "price",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.price}
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="author">Author: </label>
                                    <input
                                        type="text"
                                        name="author"
                                        id="author"
                                        className="px-4 py-2"
                                        onChange={(e) =>
                                            setData("author", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.author}
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="pubdate">Publication Date: </label>
                                    <input
                                        type="date"
                                        name="pubdate"
                                        id="pubdate"
                                        placeholder="0"
                                        className="px-4 py-2"
                                        onChange={(e) =>
                                            setData("pubdate", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.pubdate}
                                    </span>
                                </div>
                                <InputError
                                    message={errors.message}
                                    className="mt-2"
                                />
                                <PrimaryButton
                                    className="mt-4 bg-green-500"
                                    disabled={processing}
                                >
                                    Submit
                                </PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
