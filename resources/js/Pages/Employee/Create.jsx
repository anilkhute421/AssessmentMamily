import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm ,usePage} from '@inertiajs/react';

export default function Create({ auth }) {
    const { companies } = usePage().props;
    const { data, setData, post, errors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        company_id: ''
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route('employees.store'));
    }

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Employee</h2>}>
            <Head title="Create Company" />
            
            <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
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
                    <label  className="block text-gray-700 text-sm font-bold mb-2">Company</label>
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
