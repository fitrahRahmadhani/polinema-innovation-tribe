import React from "react";

const Forms:React.FC = () => {
  return(
    <section className={"w-full py-2 md:py-16 flex flex-col items-center justify-center relative gap-2"}>
      <div className="gradient-01 -z-[99] absolute h-[50%] w-[50%] bottom-0 left-0 opacity-100 md:opacity-20 rounded-full" />
      <form className={"rounded-lg md:w-[50%] p-8 h-full w-full bg-purple-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-purple-800"}>
        <h1 className={"text-white text-4xl text-center font-bold mb-8"}>
          Give Us Your Feedback!
        </h1>
        <p className={"text-red-500 text-center mb-8"}>
          The form is not working at this time. To help improve it, please see our GitHub repository and contact the owner.
        </p>
        <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="floating_text" id="floating_text"
                 className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                 placeholder=" " required/>
          <label htmlFor="floating_text"
                 className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Lengkap</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="floating_suggestion" id="floating_suggestion"
                 className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                 placeholder=" " required/>
          <label htmlFor="floating_suggestion"
                 className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Saran / Kritik</label>
        </div>
        <button type="submit"
                className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-purple-600 hover:bg-purple-700 focus:ring-purple-800">Submit
        </button>
      </form>

    </section>
  )
}

export default Forms