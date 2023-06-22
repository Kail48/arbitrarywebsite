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
  return (
    <div className='flex px-8 gap-x-12'>
        <div className='relative md:w-72 md:h-72'>
            <Image
            src={data.image}
            alt={data.name+" image"}
            fill={true}
            />
        </div>
        <div className='font-nexalight text-black w-full'>
            <h1 className='md:text-4xl font-[800]'>{data.name}</h1>
            <h1 className='md:text-xl font-[600] mt-4 mb-6 pl-4'>{data.position}</h1>
            <ul className='pl-6 list-disc text-black'>
                {data.description.map((point)=><li><h1 className='text-justify w-11/12 tracking-wide'>{point}</h1></li>
                )}
            </ul>
        </div>
    </div>
  )
}
