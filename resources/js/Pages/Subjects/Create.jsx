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
        post(route("subject.store"), { onSuccess: () => reset() });
        console.log("subject created");
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Add Subject
                </h2>
            }
        >
            <Head title="Create Subject" />
            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={submit}>
                                <div className="mb-4">
                                    <label htmlFor="sub_code">
                                        Subject Code:{" "}
                                    </label>
                                    <input
                                        type="number"
                                        name="sub_code"
                                        id="sub_code"
                                        placeholder="0"
                                        className="w-20 px-4 py-2"
                                        onChange={(e) =>
                                            setData("sub_code", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.sub_code}
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="sub_name">
                                        Subject Name:{" "}
                                    </label>
                                    <input
                                        type="text"
                                        name="sub_name"
                                        id="sub_name"
                                        className="px-4 py-2"
                                        onChange={(e) =>
                                            setData("sub_name", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.sub_name}
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="start_date">
                                        Start Date:{" "}
                                    </label>
                                    <input
                                        type="date"
                                        name="start_date"
                                        id="start_date"
                                        className="px-4 py-2"
                                        onChange={(e) =>
                                            setData(
                                                "start_date",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.start_date}
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="credits">Credits: </label>
                                    <input
                                        type="number"
                                        name="credits"
                                        id="credits"
                                        placeholder="0"
                                        className="w-20 px-4 py-2"
                                        onChange={(e) =>
                                            setData("credits", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.credits}
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
