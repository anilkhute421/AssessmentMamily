import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Edit({ auth }) {
    const { companies, employee, flash } = usePage().props;
    const { data, setData, put, errors } = useForm({
        first_name: employee.first_name,
        last_name: employee.last_name,
        email: employee.email,
        phone: employee.phone,
        company_id: employee.company_id
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route('employees.update', employee));
    }

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Employee</h2>}>
            <Head title="Edit Employee" />
            
            <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">

                {/* Display success message */}
                {flash?.success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                        <span className="block sm:inline">{flash.success}</span>
                    </div>
                )}

                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                                <input 
                                    value={data.first_name} 
                                    onChange={e => setData('first_name', e.target.value)} 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    placeholder="First Name" 
                                />
                                {errors.first_name && <p className="text-red-500 text-xs italic">{errors.first_name}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                                <input 
                                    value={data.last_name} 
                                    onChange={e => setData('last_name', e.target.value)} 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    placeholder="Last Name" 
                                />
                                {errors.last_name && <p className="text-red-500 text-xs italic">{errors.last_name}</p>}
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input 
                                    value={data.email} 
                                    onChange={e => setData('email', e.target.value)} 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    placeholder="Email" 
                                    type="email"
                                />
                                {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                                <input 
                                    value={data.phone} 
                                    onChange={e => setData('phone', e.target.value)} 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    placeholder="Phone" 
                                    type="text"
                                />
                                {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Company</label>
                                <select
                                    value={data.company_id}
                                    onChange={e => setData('company_id', e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                >
                                    <option value="">Select Company</option>
                                    {companies?.map((company) => (
                                        <option key={company?.id} value={company?.id}>
                                            {company?.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.company_id && <p className="text-red-500 text-xs italic">{errors.company_id}</p>}
                            </div>
                        </div>

                        <div className="mt-6">
                            <button 
                                type="submit" 
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
