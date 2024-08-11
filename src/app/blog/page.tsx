// import { CardBlog } from "@/component/card";
// import { getBlogs } from "@/lib/blog";
// import { IBlogs } from "@/type/blog";

// export default async function Blogpost() {
//   const blogs = await getBlogs()
//   return (
//     <div className="mx-auto p-4 bg-stone-50">
//             <div className="flex justify-center items-center mb-10">
//                 <h1 className="mt-5 pt-20 text-4xl font-bold">Blog Posts</h1>
//             </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-10">
//         {
//           blogs.map((items: IBlogs) => {
//             return (
//               <CardBlog
//                 key={items.sys.id}
//                 title={items.fields.title} 
//                 slug={items.fields.slug} 
//                 image={items.fields.image.fields.file.url}
//                 avatar={items.fields.author.fields.avatar.fields.file.url}
//                 author={items.fields.author.fields.name}
//                 email={items.fields.author.fields.email}
//               />
//             )
//           })
//         }
//       </div>
//       </div>
//   );
// }

import { CardBlog } from "@/component/card";
import { getBlogs } from "@/lib/blog";
import { IBlogs } from "@/type/blog";

export default async function Blogpost() {
  const blogs = await getBlogs()
  return (
    <div className="mx-auto px-10 py-8 bg-stone-50 max-w-screen-xl">
             <div className="flex justify-center items-center mb-10">
                 <h1 className="mt-5 pt-20 text-4xl font-bold">Blog Posts</h1>
             </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 pb-8">
        {
          blogs.map((item: IBlogs) => (
            <CardBlog
              key={item.sys.id}
              title={item.fields.title} 
              slug={item.fields.slug} 
              image={item.fields.image.fields.file.url}
              avatar={item.fields.author.fields.avatar.fields.file.url}
              author={item.fields.author.fields.name}
              email={item.fields.author.fields.email}
            />
          ))
        }
      </div>
    </div>
  );
}