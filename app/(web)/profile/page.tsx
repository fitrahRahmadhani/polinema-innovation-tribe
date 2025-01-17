import React from "react";
import Image from "next/image";

type Profile = {
  "information": {
    email: string,
    phone: string,
    aboutme: string,
  },
  "socialMedia"?: {
    instagram?: string,
    linkedin?: string,
    github?: string,
  },
}

const informationHeader = ['About Me', 'Email', 'Phone']
const infoForType = informationHeader.map((data) => data.split(" ").join("").toLowerCase())
const mySkills = ['UI UX Design', 'Front-end Web', 'Video Editing']

const myProfile: any = {
    aboutme: "Hai namaku adalah abcd! Salam kenal :)",
    email: "alizulfikar032@gmail.com",
    phone: "+628123456789"
} // sementara aja

const ProfilePage: React.FC = () => {
  // @ts-ignore
  return (
    <div className={"w-full md:items-center justify-center md:px-56 gap-12 text-white flex flex-col"}>
      <div className={"flex gap-4 flex-col lg:max-w-[92rem] w-full"}>
        <div className={"flex flex-col md:items-center md:flex-row md:justify-between gap-2"}>
          <div id={"user-profile"} className={"items-center flex gap-4"}>
            <div className={"bg-gradient-to-tr from-blue-400 to-fuchsia-600 w-fit rounded-full p-[0.15rem]"}>
              <img className={"w-16 rounded-full"} src={"https://i.pravatar.cc/300"} />
            </div>
            <div className={"text-start"}>
              <p className={"font-bold text-base"}>
                Ali Zulfikar
              </p>
              <p className={"text-gray-500 font-regular text-sm"}>
                @alizul01
              </p>
            </div>
          </div>
          <div className={"p-2 flex gap-4 items-center"}>
            <span className={"fill-current text-slate-500 hover:text-slate-300 cursor-pointer"}>
              <svg xmlns="http://www.w3.org/2000/svg" className={"w-8"}  viewBox="0 0 30 30">    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"/></svg>
            </span>
            <span className={"fill-current text-slate-500 hover:text-slate-300 cursor-pointer"}>
              <svg xmlns="http://www.w3.org/2000/svg" className={"w-9"}  viewBox="0 0 30 30" >    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"/></svg>
            </span>
          </div>
        </div>
        <section className={"flex flex-col gap-2"}>
          <div className={"flex flex-col gap-4 md:flex-row"}>
            <div id={"Information"} className={"bg-slate-800 p-5 rounded-md w-full md:w-[30%]"}>
              <h1 className={"font-bold py-2 text-xl"}>
                Information
              </h1>
                <section className={"py-2 flex flex-col gap-4"}>
                  {informationHeader.map((data, index) => (
                    <div id={data}>
                      <h4 className={"text-gray-500"}>
                        {data}
                      </h4>
                      <p>
                        {myProfile[data.split(" ").join("").toLowerCase()]}
                      </p>
                    </div>
                  ))}
                </section>
              </div>
            <div id={"My Idea"} className={"bg-slate-800 p-5 rounded-md w-full md:w-full"}>
                <div className="border-b border-gray-700">
                  <h1 className={"font-bold py-2"}>
                    My Idea
                  </h1>
                </div>
                <div className={"py-2"}>
                  <p>
                    There is no Idea Available
                  </p>
                </div>
              </div>
          </div>
        </section>
        <section className={"flex flex-col gap-2"}>
          <div className={"flex flex-col gap-4 md:flex-row"}>
            <div id={"Skills"} className={"bg-slate-800 p-5 rounded-md w-full md:w-[40%]"}>
              <h1 className={"font-bold py-2 text-xl"}>
                My Skills
              </h1>
              <section className={"py-2 flex flex-wrap gap-2 md:gap-4"}>
                {mySkills.map((data) => (
                  <div className={"bg-violet-600 w-fit p-2 rounded-lg font-semibold"}>
                    {data}
                  </div>
                ))}
              </section>
            </div>
            <div id={"My Idea"} className={"bg-slate-800 p-5 rounded-md w-full md:w-full"}>
              <div className="border-b border-gray-700">
                <h1 className={"font-bold py-2"}>
                  Experience
                </h1>
              </div>
              <div className={"py-2"}>
                <p>
                  There is no Past Experience Available
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProfilePage