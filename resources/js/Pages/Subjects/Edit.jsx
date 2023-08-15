import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head, usePage } from "@inertiajs/react";

export default function Index({ auth, subject }) {
    const { data, setData, post, processing, reset, errors, patch, put } =
        useForm({
            sub_code: subject.sub_code || "",
        });

    const submit = (e) => {
        e.preventDefault();
        console.log("submitButton");
        patch(route("subject.update", data.sub_code), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}
                    header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Subject
                </h2>
            }
        >
            <Head title="Edit Subject" />
            <div className="py-12">
                <div className="max-w-xl mx-auto p-4 sm:p-6 lg:p-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={submit}>
                                {/* <div className="mb-4">
                                    <label htmlFor="sub_code">
                                        Subject Code:{" "}
                                    </label>
                                    <input
                                        type="number"
                                        name="sub_code"
                                        id="sub_code"
                                        defaultValue={subject.sub_code}
                                        onChange={(e) =>
                                            setData("sub_code", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.sub_code}
                                    </span>
                                </div> */}
                                <div className="mb-4">
                                    <label htmlFor="sub_name">
                                        Subject Name:{" "}
                                    </label>
                                    <input
                                        type="text"
                                        name="sub_name"
                                        id="sub_name"
                                        defaultValue={subject.sub_name}
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
                                        defaultValue={subject.start_date}
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
                                        defaultValue={subject.credits}
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
                                {/* <a
                                            href={route("subject.update", {
                                                sub_code: data.sub_code
                                            })}
                                        >
                                            <PrimaryButton className="mt-2">
                                                Edit
                                            </PrimaryButton>
                                        </a> */}
                                <PrimaryButton
                                    className="mt-4"
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
