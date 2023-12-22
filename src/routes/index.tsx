import { component$,useSignal,$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import ImgCppRemovebgPreview from '~/media/cpp-removebg-preview.png?jsx'
import ReactLogo from '~/media/react logo.png?jsx'
import QwikLogo from '~/media/qwik_logo-removebg-preview.png?jsx'
import SqlLogo from '~/media/sqllogo-removebg-preview.png?jsx'
export default component$(() => {
  const show = useSignal<boolean>(false);
  const ak=$(()=>{
    show.value= !show.value;
  });
  return (
    <> 



  {/* navbar */}
  <div class="bg-slate-800 min-h-screen flex flex-col gap-8  "> 
    <div class="list-none flex justify-center  gap-10 p-5   ">
        
        <li class="text-3xl font-mono font-bold text-indigo-700 pl-32  ">PORTFOLIO</li>
          
          <div class=" lg:grow"></div>
          <div class="lg:flex gap-10  hidden sm:flex xl:flex lg:p-3 p-1 text-white ">
            
        <Link href="/"  class="text-xl font-mono hover:text-indigo-500 cursor-pointer transition-all ease-in-out duration-300 hover:font-semibold  ">Home
        
        </Link>
        <Link href="/about" class="text-xl font-mono hover:text-indigo-500 cursor-pointer transition-all ease-in-out duration-300 hover:font-semibold ">About
  
        </Link>

        <Link href="/contact" class="text-xl font-mono hover:text-indigo-500 cursor-pointer transition-all ease-in-out duration-300 hover:font-semibold ">Contact
        
        </Link>
        <Link href="/project" class="text-xl font-mono hover:text-indigo-500 cursor-pointer transition-all ease-in-out duration-300 hover:font-semibold ">Projects
       
        </Link>
        <div class="bg-indigo-600 rounded-full h-10 w-10 relative "onClick$={ak}></div>

        {show.value? (
        <div class="h-72 w-72  absolute bg-transparent shadow-2xl shadow-indigo-800 top-20 rounded-lg"></div>
):null}
          </div>
         </div>
         {/* Home page */}
<div class="flex flex-col lg:flex-row sm:flex-row ">

         <div class=" lg:flex  flex-col  justify-center p-24 px-40 gap-3">

<p class="text-8xl text-indigo-600">HI...</p>
<p class="text-3xl font-semibold text-white ">My name is priyanshu Bhatt </p>
<p class="text-3xl font-semibold text-white ">Iam a FullStack Developer, And i live in chandigarh </p>

 </div>
<div class="flex justify-center items-center ">
  <a href="/src/media/Priyanshuresumetop.pdf" class=" text-white p-4 rounded-lg text-center   m-10 mt-44  border-2 border-indigo-600 hover:shadow-[0_0_1px_#fff,inset_0_0_3px_#fff,0_0_3px_#5934eb,0_0_5px_#5934eb,0_0_10px_#5934eb,0_0_15px_#5934eb] hover:bg-indigo-800" target="_blank" >Download Cv</a>
  <a href="" class=" text-white p-4 rounded-lg text-center  shadow-2xl m-10 mt-44 active:bg-teal-600 border-2 border-indigo-600 hover:shadow-[0_0_1px_#fff,inset_0_0_3px_#fff,0_0_3px_#5934eb,0_0_5px_#5934eb,0_0_10px_#5934eb,0_0_15px_#5934eb] hover:bg-indigo-800" target="_blank">Simple button</a>
</div>

</div>
         {/* About page */}
        {/* <div><Slot/></div> */}
        
        
{/* Home */}
     


{/* middle section */}
{/* Skills */}
       <div class="flex flex-col items-center gap-10 mb-40 bg-slate-800 mt-32 ">
        <div class="text-indigo-600 text-5xl font-sans font-semibold">Skills</div>
        <div class="text-xl font-sans text-center text-white">Following tech are my skills and iam confident in them </div>
     
        <div class="flex flex-col gap-5">

<div class="flex gap-5 flex-wrap"> 
<div class="shadow-2xl shadow-indigo-600 hover:shadow-[0_0_1px_#fff,inset_0_0_3px_#fff,0_0_3px_#5934eb,0_0_5px_#5934eb,0_0_10px_#5934eb,0_0_15px_#5934eb]  h-52 w-52 hover:shadow-teal-600 rounded-full">
  <ImgCppRemovebgPreview/>
</div>
<div class="shadow-2xl shadow-indigo-600 hover:shadow-[0_0_1px_#fff,inset_0_0_3px_#fff,0_0_3px_#5934eb,0_0_5px_#5934eb,0_0_10px_#5934eb,0_0_15px_#5934eb] h-52 w-52 hover:shadow-teal-600 rounded-full">
  <ReactLogo></ReactLogo></div> 
<div class="shadow-2xl shadow-indigo-600 hover:shadow-[0_0_1px_#fff,inset_0_0_3px_#fff,0_0_3px_#5934eb,0_0_5px_#5934eb,0_0_10px_#5934eb,0_0_15px_#5934eb] h-52 w-52 hover:shadow-teal-600 rounded-full">
  <QwikLogo class="pt-3"/ >
</div>
<div class="shadow-2xl shadow-indigo-600 hover:shadow-[0_0_1px_#fff,inset_0_0_3px_#fff,0_0_3px_#5934eb,0_0_5px_#5934eb,0_0_10px_#5934eb,0_0_15px_#5934eb] h-52 w-52 hover:shadow-teal-600 rounded-full">
<SqlLogo />
</div>
<div class="shadow-2xl shadow-indigo-600 hover:shadow-[0_0_1px_#fff,inset_0_0_3px_#fff,0_0_3px_#5934eb,0_0_5px_#5934eb,0_0_10px_#5934eb,0_0_15px_#5934eb] h-52 w-52 hover:shadow-teal-600"></div>
<div class="shadow-2xl shadow-indigo-600 hover:shadow-[0_0_1px_#fff,inset_0_0_3px_#fff,0_0_3px_#5934eb,0_0_5px_#5934eb,0_0_10px_#5934eb,0_0_15px_#5934eb] h-52 w-52 hover:shadow-teal-600"></div>
</div>
<div class="flex gap-5 flex-wrap"> 
<div class="shadow-2xl shadow-indigo-600 hover:shadow-[0_0_1px_#fff,inset_0_0_3px_#fff,0_0_3px_#5934eb,0_0_5px_#5934eb,0_0_10px_#5934eb,0_0_15px_#5934eb]  h-52 w-52 hover:shadow-teal-600"></div>
<div class="shadow-2xl shadow-indigo-600 hover:shadow-[0_0_1px_#fff,inset_0_0_3px_#fff,0_0_3px_#5934eb,0_0_5px_#5934eb,0_0_10px_#5934eb,0_0_15px_#5934eb] h-52 w-52 hover:shadow-teal-600"></div>
<div class="shadow-2xl shadow-indigo-600 hover:shadow-[0_0_1px_#fff,inset_0_0_3px_#fff,0_0_3px_#5934eb,0_0_5px_#5934eb,0_0_10px_#5934eb,0_0_15px_#5934eb] h-52 w-52 hover:shadow-teal-600"></div>
<div class="shadow-2xl shadow-indigo-600 hover:shadow-[0_0_1px_#fff,inset_0_0_3px_#fff,0_0_3px_#5934eb,0_0_5px_#5934eb,0_0_10px_#5934eb,0_0_15px_#5934eb] h-52 w-52 hover:shadow-teal-600"></div>
<div class="shadow-2xl shadow-indigo-600 hover:shadow-[0_0_1px_#fff,inset_0_0_3px_#fff,0_0_3px_#5934eb,0_0_5px_#5934eb,0_0_10px_#5934eb,0_0_15px_#5934eb] h-52 w-52 hover:shadow-teal-600"></div>
<div class="shadow-2xl shadow-indigo-600 hover:shadow-[0_0_1px_#fff,inset_0_0_3px_#fff,0_0_3px_#5934eb,0_0_5px_#5934eb,0_0_10px_#5934eb,0_0_15px_#5934eb] h-52 w-52 hover:shadow-teal-600"></div>
</div>

        </div>
       </div>


{/* footer */}
       <div>
       <footer class="bg-indigo-700 text-white py-12">
        <div class="container mx-auto text-center">
            <p class="text-lg">&copy; 2023 Your Company. All rights reserved.</p>
            <p class="text-lg">Designed with <span class="text-red-500">&#10084;</span> by Your Name</p>

           
            <div class="mt-4">
                <p class="text-sm">Follow us on social media:</p>
                <div class="flex justify-center mt-2">
                    <a href="#" class="text-white mr-4 hover:text-gray-500">Facebook</a>
                    <a href="#" class="text-white mr-4 hover:text-gray-500">Twitter</a>
                    <a href="#" class="text-white hover:text-gray-500">Instagram</a>
                </div>
            </div>
        </div>
    </footer>
       </div>
    </div>

    </>
  );
});

