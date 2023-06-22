import React from "react";
import Image from "next/image";
import Link from "next/link";
import TeamMemberCard from "@/components/TeamMemberCard";

export const metadata = {
  title: "Arbitrary Team",
  description: "The leading figures behind arbitrary group,",
};
export default function Page() {
    const staffList=[
        {
            image:"/image/mdpic.png",
            name:"Bipin Nakarmi",
            position:"Founder, MD",
            description:[`Bipin has been in this industry since the glory days of “The Factory, Thamel”.`,
            "He joined this industry as DJ BPM.",
            "Later he also took the role as an event coordinator and programmer in early 2011.",
            "Bipin received good appraisal for his DJ-ing skills and even toured Nepal & India multiple times.",
            `After “The Factory, Thamel” Bipin joined “ZOUK, Babarmahal” as a DJ M.D and PR Manager.`,
            `In 2015, Bipin took on a role as Managing Director of “The Victory Lounge, Durbarmarg”`,
        ]
        },
        {
            image:"/image/edpic.png",
            name:"Abiral Shakya",
            position:"EXECUTIVE DIRECTOR",
            description:[
                `After High School in 2017 Abiral joined the management and marketing team of “Club Deja vu” the biggest club in Nepal back then.`,
                `Later in 2018 Abiral was invited to the Events, PR and Management team of “Club Fahrenheit”.`,
                ` He along with his team played an important role in shaping the glory days of Club Fahrenheit.`,
                `Gaining knowledge of events & management he joined “Arbitrary Digital Marketing” under “The Arbitrary Group” as a client manager and content creator.`,
                `Later on he also took on the roles and responsibilities as an event manager and event planner. Helping Execute the events like “1974 AD Nirantarta”, “Arbitrary Fest” and “Arbitrary Colors”.`,
                `In late 2019 he Co-founded “Vela” a Nepalese cuisine restaurant at Durbarmarg`,
            ]
        
        }
    ]
  return (
    <div className="bg-white h-min-content pb-12">
      <div className="relative h-[115px] w-[175px] left-2 top-2 hover:animate-pulse">
        <Link href="/">
          <Image src={"/image/logoBlack.png"} alt="logo" fill={true} />
        </Link>
      </div>
      <div className="mt-8 py-4 flex flex-col gap-y-12">
        {staffList.map((staff)=><TeamMemberCard data={staff}/>)}
      </div>
    </div>
  );
}
