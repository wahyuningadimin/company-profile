import Image from "next/image";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "H&H | About-us",
    description: "about us"
}
export default function AboutUs() {
    return(
    <>
    <div>
        {/* <div className="flex justify-center items-center">
            <h1 className="mt-5 text-4xl font-bold">About Us</h1>
        </div> */}

        <div className="flex w-full flex-col">
        <div className="divider divider-neutral mt-5 text-4xl font-bold">About Us</div>


        <div className="flex flex-wrap bg-base-300 items-center">
        <Image src="/eating.jpg" alt="people eating" width={400} height={500} className="pl-10"></Image>
            <div className="text-black pt-4 pb-4 w-[400px] lg:w-[450px] mx-auto ">
                <p className="pb-5 font-semibold">Vision</p>
                <p className="pb-5 text-sm w-[300px]">To revolutionize the way people experience healthy eating by making nutritious, delicious, and convenient meals accessible to everyone, fostering a culture of wellness and balanced living.</p>
                </div>
                </div>


        <div className="flex flex-wrap bg-base-300 items-center">
        <div className="text-black pl-10 pt-4 pb-4 w-[400px] lg:w-[450px] mx-auto ">
                <p className="pb-5 font-semibold">Vision</p>
                <p className="pb-5 text-sm w-[300px]">To provide high-quality, chef-crafted healthy meals that support our customers’ health and well-being. <br />
            We are committed to using fresh, locally-sourced ingredients, creating diverse and flavorful menu options, and delivering exceptional service to help our clients achieve their wellness goals and enjoy a balanced lifestyle.</p>
            </div>
            <Image src="/chef.jpg" alt="chef" width={300} height={200} className="pr-10"></Image>
            
                </div>
{/* 





        <div className="flex flex-col lg:flex-row lg:space-x-4">
            <div className="card bg-base-300 rounded-box grid h-32 place-items-center">
            <h2>Vision</h2>
            <p>To revolutionize the way people experience healthy eating by making nutritious, delicious, and convenient meals accessible to everyone, fostering a culture of wellness and balanced living.</p>
            </div>
        <Image src="/eating.jpg" alt="people eating" width={400} height={500}></Image>
        </div>

        <div>
            <div className="card bg-base-300 p-4 flex-1 flex flex-col justify-center">
            <h2>Mission</h2>
            <p>To provide high-quality, chef-crafted healthy meals that support our customers’ health and well-being. <br />
            We are committed to using fresh, locally-sourced ingredients, creating diverse and flavorful menu options, and delivering exceptional service to help our clients achieve their wellness goals and enjoy a balanced lifestyle.</p>
            </div>
        <Image src="/chef.jpg" alt="chef" width={400} height={500}></Image>
        </div>
    
        <div className="flex w-full flex-col lg:flex-row">
            <div className="grid h-32 flex-grow place-items-center">
            <h2>Why Us?</h2>
          <ul>
            <li>Nutritional Balance: We ensure that you get well-rounded, nutrient-dense meals that provide the essential vitamins, minerals, and macronutrients your body needs.</li>
            <li>Convenience: Save time on meal planning, grocery shopping, and cooking. Eliminate the stress of preparing healthy meals daily, especially if you have a busy schedule. We take care of everything, making it easier to stick to your nutritional goals.</li>
            <li>Consistent Quality: Meals are prepared by chefs who understand the principles of nutrition and healthy cooking, ensuring high-quality and delicious dishes. Also, we properly portioned meals to help you manage calorie intake and maintain a healthy weight.</li>
            <li>Customization and Flexibility: We offer customizable options to accommodate various dietary needs. You can often select from a diverse menu or change your choices based on personal preferences or specific health goals.</li>
            <li>Health Benefits: Nutrient-rich meals can boost your energy levels and improve overall vitality. Eating a balanced diet supports mental clarity, better digestion, and a stronger immune system.</li>
            <li>Sustainable Choices: We emphasize sustainable sourcing and eco-friendly packaging, aligning with our commitment to environmental responsibility.</li>
          </ul>
            </div>
        </div> */}
  
        
    </div>
            </div>
        
      </>
    )
}