import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "H&H | Products",
    description: "products"
};

export default function Products() {
    return (
        <div className="container mx-auto p-4 bg-stone-50">
            <div className="flex justify-center items-center mb-10">
                <h1 className="mt-5 pt-20 text-4xl font-bold">Products</h1>
            </div>

            <div className="py-8 px-4 bg-gray-50">
    <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {/* Product 1 */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img
                        className="rounded-t-lg w-full h-50 object-cover"
                        src="https://images.unsplash.com/photo-1670816978291-a5cf23d87968?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Clean Eating"
                    />
                <div className="p-5">
                        <h4 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Clean Eating
                        </h4>
                        <h2 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                            500-550kcal/meal
                        </h2>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Suitable for customers who want to start/maintain a healthy lifestyle by eating healthy & delicious food.
                    </p>
                    
                </div>
            </div>

            {/* Product 2 */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img
                        className="rounded-t-lg w-full h-50 object-cover"
                        src="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Fat Loss"
                    />
                <div className="p-5">
                        <h4 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Fat Loss
                        </h4>
                        <h2 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                            Less than 500kcal/meal
                        </h2>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Suitable for customers who want to run a calorie deficit & reduce fat levels without reducing muscle mass.
                    </p>
                </div>
            </div>

            {/* Product 3 */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <img
                        className="rounded-t-lg w-full h-50 object-cover"
                        src="https://images.unsplash.com/photo-1614597134736-a8e0616933d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="High Protein"
                    />
                <div className="p-5">
                        <h4 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            High Protein
                        </h4>
                        <h2 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                            550-650kcal/meal
                        </h2>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Suitable for customers who want to increase weight gain by focusing more on protein intake.
                    </p>
                </div>
            </div>

            {/* Product 4 */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <img
                        className="rounded-t-lg w-full h-50 object-cover"
                        src="https://images.unsplash.com/photo-1528696353932-be229661fd48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Vegan"
                    />
                <div className="p-5">
                        <h4 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Vegan Option
                        </h4>
                        <h2 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                            500-550kcal/meal
                        </h2>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Suitable for customers who are vegan yet still want to keep count of their daily calorie intake.
                    </p>
                </div>
            </div>


        </div>
    </div>
</div>


            {/* Pricelist Section */}
            <div className="py-8 px-4">
            <div className="flex w-full flex-col">
            <div className="divider text-2xl font-semibold text-center mb-6">Pricelist</div>
                
                <p className="mt-6 pb-3 text-xl font-semibold text-center">Lunch / Dinner Package</p>
                <div className="max-w-4xl mx-auto">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border border-gray-300 rounded-lg">
                            <thead className="bg-gray-200 text-gray-700">
                                <tr>
                                    <th className="py-3 px-4 border-b text-lg">Days</th>
                                    <th className="py-3 px-4 border-b text-lg">Price</th>
                                    <th className="py-3 px-4 border-b text-lg">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-3 px-3 border-b text-md">Weekly (5 Days)</td>
                                    <td className="py-3 px-4 border-b text-md">$60</td>
                                    <td className="py-3 px-4 border-b text-md">Trial Package. You pick either Lunch/Dinner from Monday-Friday.</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-3 border-b">Monthly (20 Days)</td>
                                    <td className="py-3 px-4 border-b">$220</td>
                                    <td className="py-3 px-4 border-b">You pick either Lunch/Dinner from Monday-Friday for a whole month.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <p className="mt-6 py-4 pb-3 text-xl font-semibold text-center">Lunch & Dinner Package</p>
                <div className="max-w-4xl mx-auto">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border border-gray-300 rounded-lg">
                            <thead className="bg-gray-200 text-gray-700">
                                <tr>
                                <th className="py-3 px-4 border-b text-lg">Days</th>
                                    <th className="py-3 px-4 border-b text-lg">Price</th>
                                    <th className="py-3 px-4 border-b text-lg">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                    <td className="py-3 px-3 border-b text-md">Weekly (5 Days)</td>
                                    <td className="py-3 px-4 border-b text-md">$120</td>
                                    <td className="py-3 px-4 border-b text-md">Trial Package. You get both Lunch & Dinner from Monday-Friday.</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-3 border-b text-md">Monthly (20 Days)</td>
                                    <td className="py-3 px-4 border-b text-md">$450</td>
                                    <td className="py-3 px-4 border-b text-md">You get both Lunch & Dinner from Monday-Friday for a whole month.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>


            {/* Customer Reviews Section */}
            <div className="py-8 px-4">
            <div className="flex w-full flex-col">
            <div className="divider text-2xl font-semibold text-center mb-6 mt-5">Customer Reviews</div>
    <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
                <img className="w-12 h-12 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Customer"/>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Jane Doe</h3>
                    <p className="text-yellow-500">★★★★★</p>
                </div>
            </div>
            <p className="text-gray-700">"I’m glad I found this healthy catering that offers a lot of varieties, hence why I don’t get easily bored with the menu & I can stick to my diet. Highly recommend!"</p>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
                <img className="w-12 h-12 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNzEyOXwwfDF8c2VhcmNofDF8fGJ1eXxlbnwwfHx8fDE2NzQ0MjcyNjA&ixlib=rb-1.2.1&q=80&w=400" alt="Customer"/>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Ben Wong</h3>
                    <p className="text-yellow-500">★★★★★</p>
                </div>
            </div>
            <p className="text-gray-700">"Ever since I started the Fat Loss package 4 months ago, I’ve lost around 5kgs. My energy also has improved, I feel less tired & more focused now."</p>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
                <img className="w-12 h-12 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1706885093487-7eda37b48a60?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Customer"/>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Indiana Johnson</h3>
                    <p className="text-yellow-500">★★★★☆</p>
                </div>
            </div>
            <p className="text-gray-700">"The High Protein package was exactly what I needed to boost my fitness journey. Thank you for changing my mindset about healthy food, I used to think healthy food taste bland, but apparently H&H proves me wrong."</p>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
                <img className="w-12 h-12 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1486326658981-ed68abe5868e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Customer"/>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Alex Smith</h3>
                    <p className="text-yellow-500">★★★★★</p>
                </div>
            </div>
            <p className="text-gray-700">"This catering is fantastic! The food is delicious & healthy. I’m very pleased with my experience & would recommend it to anyone looking for a nutritious option."</p>
        </div>
    </div>
</div>
</div>




        </div>
    );
}
