import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Create({ auth }) {
    const { data, setData, post, errors } = useForm({
        name: '',
        email: '',
        logo: null,
        website: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route('companies.store'));
    }

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Company</h2>}>
            <Head title="Create Company" />
            
            <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                <input 
                                    value={data.name} 
                                    onChange={e => setData('name', e.target.value)} 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    placeholder="Company Name" 
                                />
                                {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input 
                                    value={data.email} 
                                    onChange={e => setData('email', e.target.value)} 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    placeholder="Company Email" 
                                    type="email"
                                />
                                {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Logo</label>
                                <input 
                                    type="file" 
                                    onChange={e => setData('logo', e.target.files[0])} 
                                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:border-blue-500"
                                />
                                {errors.logo && <p className="text-red-500 text-xs italic">{errors.logo}</p>}
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Website</label>
                                <input 
                                    value={data.website} 
                                    onChange={e => setData('website', e.target.value)} 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    placeholder="Company Website" 
                                    type="url"
                                />
                                {errors.website && <p className="text-red-500 text-xs italic">{errors.website}</p>}
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
