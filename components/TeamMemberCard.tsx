import React from 'react'
import Image from 'next/image'
type staffProps={
    data:{
    name:string
    image:string
    description:string[]
    position:string
}}
export default function TeamMemberCard(props:staffProps) {
    const data=props.data
    console.log("at team")
  return (
    <div className='md:flex px-8 md:gap-x-12'>
        <div className='relative h-96 md:w-72 md:h-72 md:mt-6'>
            <Image
            src={data.image}
            alt={data.name+" image"}
            fill={true}
            />
        </div>
        <div className='font-nexalight text-black w-full'>
            <h1 className='text-xl mt-4 md:text-4xl font-[800]'>{data.name}</h1>
            <h1 className='text-lg md:text-xl font-[600] mt-4 mb-6 pl-4'>{data.position}</h1>
            <ul className='pl-6 list-disc text-black'>
                {data.description.map((point,index)=>{
               
                console.log(index," :index")
                return (
                <li key={index}><h1 className='text-justify w-11/12 tracking-wide'>{point}</h1></li>)}
                )}
            </ul>
        </div>
    </div>
  )
}
