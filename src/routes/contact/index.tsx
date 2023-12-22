import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import GoBacklLogo from '~/media/gobacklogo-removebg-preview.png?jsx'
export default component$(() => {
  return (
    <>
<div class="flex items-center p-10 bg-slate-200 min-h-screen flex-col gap-20">

<Link href="/" class="text-2xl font-semibold text-indigo-800 \"> 

<GoBacklLogo class="h-10 w-10"/>
 </Link>


<div class= "py-5 flex items-center h-96 w-96 lg:h-[500px] lg:w-[500px] flex-col border-black shadow-2xl shadow-indigo-700  gap-20 transition-all ease-in-out duration-300 hover:shadow-indigo-900 ">
   <div class="text-2xl font-semibold">CONTACT ME</div>
   <div class="lg:flex flex gap-32 sm:gap-32 lg:gap-32">
   <a href="https://www.linkedin.com/in/bhatt-priyanshu-06b2b8261/" target="_blank" class="bg-blue-600 text-white font-bold p-4 lg:px-10 sm:px-8 rounded-xl hover:shadow-xl">Linkden</a>
   <a href="https://github.com/Priyanshubhatt8/restrauntwebsite/settings/pages" target="_blank"  class="bg-black text-white font-bold p-4 sm:px-8 lg:px-10 rounded-xl hover:shadow-xl">Github</a>
   </div>
   <div class="lg:flex flex gap-32 sm:gap-32 lg:gap-32">
   <a href="https://twitter.com/priyans49685270" target="_blank"  class="bg-black text-white font-bold p-4 rounded-xl sm:px-8 lg:px-10 hover:shadow-xl">Twitter</a>
   <a href=""class="bg-green-600 text-white font-bold p-4 rounded-xl sm:px-8 lg:px-10 hover:shadow-xl">Contact</a>
   </div>
</div>
   </div>
    </>
  );
});
