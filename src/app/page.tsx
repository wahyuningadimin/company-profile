import Link from "next/link";
import HeroCarousel from "./herocarousel/page";
import Image from "next/image";
export default function Hero() {
  return (
    <div>
      {/* Hero Section */}
      {/* <div
        className="hero min-h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-50 absolute inset-0"></div>
        <div className="hero-content text-neutral-content relative z-10 text-center">
          <div className="max-w-md mx-auto px-4">
            <h1 className="mb-5 pt-12 text-5xl font-extrabold text-white">Healthy & Hearty</h1>
            <p className="mb-5 text-lg text-white">
              Savor the flavor of wellness! We present more than 1000+ menu variations as if enjoying restaurant-style dishes every day!
            </p>
            <button className="btn btn-light"><Link href={'/about-us'}>More Info</Link></button>
          </div>
        </div>
      </div> */}
      <HeroCarousel />

      {/* Overview */}
      <div className="bg-stone-50">
      <section className="w-full py-5">
        <div className="py-8 px-4">
       <div className="flex w-full flex-col">
       <div className="divider text-2xl font-semibold text-center mb-6 mt-5 text-gray-700">Overview</div>
              </div>
              <div className="max-w-6xl mx-auto px-4 ">
          <div className="flex flex-wrap justify-center">
              <p className="pt-6 text-gray-700">
              <strong>H&H</strong> is a trailblazer in the realm of health-conscious dining, committed to transforming events with
                delicious, nutrient-rich meals that prioritize well-being & sustainability. Founded in 2019 by nutritionist
                Louise Wyatt & chef Alexandra Bell, <strong>H&H</strong> emerged from a shared vision to offer catering solutions that go
                beyond mere sustenance, focusing instead on enhancing health & delighting the palate.
                At <strong>H&H</strong>, we believe that great food can be both nutritious & indulgent. Our menus feature a diverse array
                of dishes crafted from fresh, organic & locally sourced ingredients.
                Our commitment extends beyond health to environmental responsibility. We employ eco-friendly practices,
                including zero-waste policies & sustainable packaging, to minimize our impact on the planet. <strong>H&H</strong> prides itself on cultivating a dynamic & supportive work culture that aligns with our core values of
                health, creativity & sustainability.
              </p>
          </div>
        </div>
        </div>
      </section>

        {/* Vision */}
        <section className="w-full py-2">
          <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
        <Image
                  src="/vision.jpg" // Replace with your image path or URL
                  alt="Vision"
                  layout="responsive"
                  width={250} // Replace with your image width
                  height={125} // Replace with your image height
                  className="rounded-lg"
                />
        </div>
              <div className="w-full md:w-1/2 text-right md:text-right">
                <h3 className="text-2xl font-semibold mb-4 text-gray-700">Vision</h3>
                <p className="text-gray-700">
                  To inspire & nourish communities with wholesome, delicious meals that celebrate health, sustainability,
                  & the joy of eating well.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Mission */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-1/2 text-left md:text-left">
                <h3 className="text-2xl font-semibold mb-4 text-gray-700">Mission</h3>
                <p className="text-gray-700">
                To provide exceptional catering services that prioritize nutritious, balanced ingredients while minimizing
        environmental impact. We are committed to delivering flavorful & satisfying meals that support our
        customers' health goals & promote a culture of wellness & sustainability.
                </p>
              </div>
              {/* Image Container */}
              <div className="md:w-1/2 mb-6 md:mb-0">
              <Image
                        src="/mission.jpg"
                        alt="Mission"
                        layout="responsive"
                        width={250}
                        height={125}
                        className="rounded-lg"
                      />
              </div>
            </div>
          </div>
        </section>


        {/* Why Us */}
      <section className="py-8 px-4">
      <div className='px-10'>
              <h3 className="text-2xl font-semibold mb-4 text-center text-gray-700">Why Us?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Nutritional Balance</strong>: You will get well-rounded, nutrient-dense meals that provide the essential vitamins, minerals & macronutrients your body needs.</li>
            <li><strong>Convenience</strong>: Save time on meal planning, grocery shopping & cooking. We take care of everything, making it easier to stick to your nutritional goals.</li>
            <li><strong>Consistent Quality</strong>: Meals are prepared by chefs who understand the principles of nutrition & healthy cooking, ensuring high-quality & delicious dishes.</li>
            <li><strong>Health Benefits</strong>: Nutrient-rich meals can boost your energy levels & improve overall vitality. </li>
            <li><strong>Sustainable Choices</strong>: We emphasize sustainable sourcing & eco-friendly packaging, aligning with our commitment to environmental responsibility.</li>
              </ul>
            </div>
      </section>


      
      {/* Product */}
      <div className="py-8 px-4">
       <div className="flex w-full flex-col">
       <div className="divider text-2xl font-semibold text-center mb-10 mt-5">Products</div>
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
                        <h4 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-white">
                            Clean Eating
                        </h4>
                        <h2 className="mb-2 text-md font-bold tracking-tight text-gray-700 dark:text-white">
                            500-550kcal/meal
                        </h2>
                    <button className="btn btn-light py-2 px-4 rounded">
                      <Link href="/products">Learn More</Link>
                    </button>
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
                        <h4 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-white">
                            Fat Loss
                        </h4>
                        <h2 className="mb-2 text-md font-bold tracking-tight text-gray-700 dark:text-white">
                            Less than 500kcal/meal
                        </h2>
                    <button className="btn btn-light py-2 px-4 rounded">
                      <Link href="/products">Learn More</Link>
                    </button>
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
                        <h4 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-white">
                            High Protein
                        </h4>
                        <h2 className="mb-2 text-md font-bold tracking-tight text-gray-700 dark:text-white">
                            550-650kcal/meal
                        </h2>
                    <button className="btn btn-light py-2 px-4 rounded">
                      <Link href="/products">Learn More</Link>
                    </button>
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
                        <h4 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-white">
                            Vegan Option
                        </h4>
                        <h2 className="mb-2 text-md font-bold tracking-tight text-gray-700 dark:text-white">
                            500-550kcal/meal
                        </h2>
                    <button className="btn btn-light py-2 px-4 rounded">
                      <Link href="/products">Learn More</Link>
                    </button>
                </div>
            </div>
        </div>
    </div>

       </div>
       </div>

      {/* Customer Review */}
       <div className="py-8 px-4">
       <div className="flex w-full flex-col">
       <div className="divider text-2xl font-semibold text-center mb-10 mt-5">Customer Reviews</div>
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-6 mb-4">
                        <div className="flex items-center mb-4">
                            <img
                                className="w-12 h-12 rounded-full object-cover mr-4"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Customer"
                            />
                            <div>
                                <h3 className="text-md font-semibold text-gray-900">Jane Doe</h3>
                                <p className="text-yellow-500">★★★★★</p>
                            </div>
                        </div>
                        <p className="text-gray-700">
                            "I’m glad I found this healthy catering that offers a lot of varieties, hence why I don’t get easily bored with the
                            menu & I can stick to my diet. Highly recommend!"
                        </p>
                    </div>

                    <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-6 mb-4">
                        <div className="flex items-center mb-4">
                            <img
                                className="w-12 h-12 rounded-full object-cover mr-4"
                                src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNzEyOXwwfDF8c2VhcmNofDF8fGJ1eXxlbnwwfHx8fDE2NzQ0MjcyNjA&ixlib=rb-1.2.1&q=80&w=400"
                                alt="Customer"
                            />
                            <div>
                                <h3 className="text-md font-semibold text-gray-900">Ben Wong</h3>
                                <p className="text-yellow-500">★★★★☆</p>
                            </div>
                        </div>
                        <p className="text-gray-700">
                            "Ever since I started the Fat Loss package 4 months ago, I’ve lost around 5kgs. My energy also has improved,
                            I feel less tired & more focused now."
                        </p>
                    </div>

                    <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-6">
                        <div className="flex items-center mb-4">
                            <img
                                className="w-12 h-12 rounded-full object-cover mr-4"
                                src="https://images.unsplash.com/photo-1706885093487-7eda37b48a60?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Customer"
                            />
                            <div>
                                <h3 className="text-md font-semibold text-gray-900">Indiana Johnson</h3>
                                <p className="text-yellow-500">★★★★★</p>
                            </div>
                        </div>
                        <p className="text-gray-700">
                            "The High Protein package was exactly what I needed to boost my fitness journey. Thank you for changing my mindset about healthy food, I used to think healthy food taste bland, but
                            apparently H&H proves me wrong."
                        </p>
                    </div>
                </div>
            </div>



      
      </div>
      

      {/* Founders */}
      <div className='py-8 px-4'>
<section >
<div className="flex w-full flex-col">
<div className="divider text-2xl font-semibold text-center mb-8 text-gray-700">Meet Our Founders</div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Profile 1 */}
          <div className="flex flex-col items-center bg-white border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image
              src="/founder.jpg" 
              alt="Louise Wyatt"
              width={400} 
              height={400}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Louise Wyatt</h3>
            <p className="text-gray-600">CEO & Founder, Nutritionist</p>
          </div>
          {/* Profile 2 */}
          <div className="flex flex-col items-center bg-white border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image
              src="/founder2.jpg" 
              alt="Alexandra Bell"
              width={400} 
              height={400} 
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Alexandra Bell</h3>
            <p className="text-gray-600">CEO & Founder, Chef</p>
          </div>
        </div>
        <div className="flex justify-center pt-6">
        <button className="btn btn-light py-2 px-4 rounded">
        <Link href="/our-team">Our Team</Link>
        </button>
      </div>
      </div>
      </div>
      
    </section>
      
</div>


      {/* Blog */}
      <div className="py-8 px-4">
      <div className="flex w-full flex-col">
      <div className="divider text-2xl font-semibold text-center mb-6 mt-5 text-gray-700">Blog</div>
        <p>Blog Posts</p>
        </div>
      </div>
    </div>
    </div>
  );
}
