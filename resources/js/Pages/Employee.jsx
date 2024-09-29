import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link, usePage } from '@inertiajs/react';

export default function Employee({ auth ,success}) {
    const { employees  } = usePage().props;
    

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Employee List</h2>}
        >
            <Head title="Employee List" />

            <div className="py-6">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <Link
                                href={route('employees.create')}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block"
                            >
                                Create Employee
                            </Link>

                            <div className="overflow-x-auto">
                                <table className="min-w-full table-auto text-sm text-left text-gray-700 border-collapse">
                                    <thead>
                                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                            <th className="py-3 px-6">First Name</th>
                                            <th className="py-3 px-6">Last Name</th>
                                            <th className="py-3 px-6">Email</th>
                                            <th className="py-3 px-6">Phone</th>
                                            <th className="py-3 px-6">Company</th>
                                            <th className="py-3 px-6">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-600 text-sm">
                                        {employees?.data?.map((employee) => (
                                            <tr key={employee.id} className="border-b border-gray-200 hover:bg-gray-100">
                                                <td className="py-3 px-6">{employee.first_name}</td>
                                                <td className="py-3 px-6">{employee.last_name}</td>
                                                <td className="py-3 px-6">{employee.email}</td>
                                                <td className="py-3 px-6">{employee.phone}</td>
                                                <td className="py-3 px-6">{employee.company.name}</td>
                                                <td className="py-3 px-6">
                                                    <Link
                                                        href={route('employees.edit', employee.id)}
                                                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded mr-2"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <Link
                                                        href={route('employees.destroy', employee.id)}
                                                        method="delete"
                                                        as="button"
                                                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                                                    >
                                                        Delete
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="mt-4 flex justify-center">
                                {employees.links.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.url}
                                        className={`px-4 py-2 mx-1 border rounded-md ${
                                            link.active
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-white text-gray-700 hover:bg-gray-200'
                                        }`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
