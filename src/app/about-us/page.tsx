// import Image from "next/image";
// import { Metadata } from "next"

// export const metadata: Metadata = {
//     title: "H&H | About-us",
//     description: "about us"
// }
// export default function AboutUs() {
//     return(
//     <>
//     <div>
//         <div className="flex justify-center items-center">
//             <h1 className="mt-10 text-4xl font-bold pb-5">About Us</h1>
//         </div>

//         <div className="flex w-full flex-col px-20 py-10 ">
//         <div className="text-center">
//             <p></p>
//         </div>

//         <div className="flex flex-wrap bg-base-300 items-center">
//         <Image src="/eating.jpg" alt="people eating" width={400} height={500} className="pl-10"></Image>
//             <div className="pt-4 pb-4 w-[400px] lg:w-[450px] mx-auto">
//                 <p className="pb-5 font-semibold">Vision</p>
//                 <p className="pb-5 text-sm w-[200px]">To revolutionize the way people experience healthy eating by making nutritious, delicious, and convenient meals accessible to everyone, fostering a culture of wellness and balanced living.</p>
//                 </div>
//                 </div>


//         <div className="flex flex-wrap bg-base-300 items-center">
//         <div className="pl-10 pt-4 pb-4 w-[400px] lg:w-[450px] mx-auto">
//                 <p className="pb-5 font-semibold">Mission</p>
//                 <p className="pb-5 text-sm w-[300px]">To provide high-quality, chef-crafted healthy meals that support our customers’ health and well-being. <br />
//             We are committed to using fresh, locally-sourced ingredients, creating diverse and flavorful menu options, and delivering exceptional service to help our clients achieve their wellness goals and enjoy a balanced lifestyle.</p>
//             </div>
//             <Image src="/chef.jpg" alt="chef" width={300} height={200} className="pr-10"></Image>
            
//                 </div>


//         <div>
//         <h4 className="mt-5 text-2xl font-bold">Team</h4>
//         <ul>
//             <li>Alexandra Bell</li>
//             <li>Louise Wyatt</li>
//             <li>Barron Rogers</li>
//         </ul>

// Nutritionist

// Chef

// R&D Lead
//         </div>

//         <div>
//             <h4 className="mt-5 text-2xl font-bold">Culture</h4>
// <p>H&H prides itself on cultivating a dynamic and supportive work culture that aligns with our core values of
// health, creativity, and sustainability. Our company culture fosters an environment where innovation thrives,

// and every team member is encouraged to contribute to our mission of delivering exceptional, health-
// conscious catering experiences.</p>
// </div>
// <div>
// <h4 className="mt-5 text-2xl font-bold">Core Values</h4>
// <br />
// <ol className="list-decimal">
//     <li>Health and Well-Being: At the heart of our culture is a commitment to promoting health and
// wellness. We prioritize not only the well-being of our customers but also that of our team. We offer a
// balanced work environment, health-focused programs, and nutritious meals, ensuring that everyone
// is energized and motivated to perform their best.</li>
//     <li>Creativity and Excellence: We celebrate creativity and strive for excellence in everything we do.
// Our team members are encouraged to think outside the box, experiment with new flavors, and push
// the boundaries of traditional catering. This culture of innovation helps us deliver unique and
// memorable culinary experiences.</li>
//     <li>Sustainability and Responsibility: Environmental stewardship is a cornerstone of our values. We
// are dedicated to using sustainable practices, from sourcing local organic ingredients to
// implementing zero-waste policies. Our commitment to reducing our ecological footprint is reflected
// in our daily operations and inspires our team to make responsible choices.</li>
//     <li>Collaboration and Respect: We foster a collaborative and respectful workplace where diverse
// perspectives are valued. Teamwork and open communication are key to our success, and we
// ensure that all voices are heard and respected. This inclusive culture enhances our creativity and
// drives our collective success.</li>
//     <li>Customer-Centric Approach: Our customers are at the center of everything we do. We are
// dedicated to understanding their needs, exceeding their expectations, and delivering exceptional
// service. Our culture emphasizes responsiveness, attention to detail, and a commitment to creating
// outstanding catering experiences.</li>
//     <li>Continuous Growth: We are committed to the professional development of our team. Through
// ongoing training, learning opportunities, and support for personal growth, we empower our
// employees to advance their skills and careers. This culture of continuous improvement drives our
// success and innovation.</li>
// </ol>
// <br />
// <p>At H&H, our company culture and values guide every aspect of our work, ensuring a positive, fulfilling, and
// inspiring environment for our team while delivering top-notch, health-conscious catering services to our
// customers.</p></div>        
// {/* 


    

  
        
//     </div>
//             </div>
        
//       </>
//     )
// }

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Homepage: React.FC = () => {
  return (
    <div className="container mx-auto p-4  bg-stone-50">
            <div className="flex justify-center items-center mb-10">
                <h1 className="mt-5 pt-20 text-4xl font-bold">About Us</h1>
            </div>
            <section className="w-full py-2">
            <h3 className="text-2xl font-semibold mb-4 text-center">Our History</h3>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center  text-gray-700">
            <div>
            <p>In 2018, amidst a growing awareness of health & sustainability, our founder, Louise Wyatt, a nutritionist with a passion for culinary arts & Alexandra Bell, a chef with a knack for creating flavorful, nutrient-dense dishes, embarked on a mission to revolutionize the catering industry. Their journey began with a shared vision: to offer a catering service that not only satisfies the palate but also supports a healthier lifestyle and a more sustainable planet. </p>
<br />
<p>They realized that while many people wanted to eat healthier, they often struggled to find catering options that met their needs. Determined to bridge this gap, Louise & Alexandra launched H&H in early 2019. They focused on creating menus that were not only rich in flavor but also packed with nutrients. Their approach was simple yet revolutionary: each dish had to be crafted with ingredients that were organic, locally sourced, and seasonally appropriate. As word spread about their unique approach to catering, H&H quickly gained a reputation for excellence.</p>
<br />
<p>Their innovative menu options catered to a variety of dietary needs, including vegan, gluten-free & low-carb diets. To further their mission, they introduced a range of eco-friendly practices, including compostable packaging & a zero-waste policy.</p>
          </div></div></div></section>
    
    
    {/* <div className="pt-4 flex flex-col px-4">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className=" text-gray-700">
              To inspire & nourish communities with wholesome, delicious meals that celebrate health, sustainability & the joy of eating well.
              </p>
            </div>

            <div className="md:w-1/2 mb-4 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className=" text-gray-700">
              To provide exceptional catering services that prioritize nutritious, balanced ingredients while minimizing environmental impact. <br />
              We are committed to delivering flavorful & satisfying meals that support our customers' health goals & promote a culture of wellness & sustainability.
              </p>
            </div>
          </div>
        </div> */}

{/* Founders */}
<div className='pt-8 px-4'>
<section className="py-6">
<div className="flex w-full flex-col">
<div className="divider text-2xl font-semibold text-center mb-8">Meet Our Founders</div>
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


    {/* Culture  */}
            <div className='pt-8 px-4'>
            <div className="flex w-full flex-col">
            <div className="divider text-2xl font-semibold text-center mb-6 text-gray-700">Our Culture</div>
                <p className='text-gray-700'><strong>H&H</strong> prides itself on cultivating a dynamic & supportive work culture that aligns with our core values of
health, creativity & sustainability. Our company culture fosters an environment where innovation thrives & every team member is encouraged to contribute to our mission of delivering exceptional, health-conscious catering experiences.</p>
            </div>
            </div>

    {/* Core Values */}
            <div className='pt-8 px-4'>
            <div className="flex w-full flex-col">
            <div className="divider text-2xl font-semibold text-center mb-6 text-gray-700">Core Values</div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Health & Well-Being</strong>: At the heart of our culture is a commitment to promoting health &
wellness. We prioritize not only the well-being of our customers but also that of our team. We offer a
balanced work environment, health-focused programs & nutritious meals, ensuring that everyone
is energized & motivated to perform their best.</li>
            <li><strong>Creativity & Excellence</strong>: We celebrate creativity & strive for excellence in everything we do.
Our team members are encouraged to think outside the box, experiment with new flavors & push
the boundaries of traditional catering. This culture of innovation helps us deliver unique &
memorable culinary experiences.</li>
            <li><strong>Sustainability & Responsibility</strong>: Environmental stewardship is a cornerstone of our values. We
are dedicated to using sustainable practices, from sourcing local organic ingredients to
implementing zero-waste policies. Our commitment to reducing our ecological footprint is reflected
in our daily operations & inspires our team to make responsible choices.</li>
            <li><strong>Collaboration & Respect</strong>: We foster a collaborative & respectful workplace where diverse
perspectives are valued. Teamwork & open communication are key to our success & we
ensure that all voices are heard & respected. This inclusive culture enhances our creativity &
drives our collective success.</li>
            <li><strong>Customer-Centric Approach</strong>: Our customers are at the center of everything we do. We are
dedicated to understanding their needs, exceeding their expectations & delivering exceptional
service. Our culture emphasizes responsiveness, attention to detail & a commitment to creating
outstanding catering experiences.</li>
            <li><strong>Continuous Growth</strong>: We are committed to the professional development of our team. Through
ongoing training, learning opportunities & support for personal growth, we empower our
employees to advance their skills & careers. This culture of continuous improvement drives our
success & innovation.</li>
              </ul>
              <p className='mt-5 pb-10'>At <strong>H&H</strong>, our company culture & values guide every aspect of our work, ensuring a positive, fulfilling &
inspiring environment for our team while delivering top-notch, health-conscious catering services to our
customers.</p>
            </div>
            </div>
          
    </div>
  );
}

export default Homepage;
