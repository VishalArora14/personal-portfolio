import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import Link from 'next/link'

const CodingProfiles = () => {
  return (
    <>
    <Wrapper>
      <div className="flex flex-col p-40 items-center text-center">
        <div className="font-semibold text-3xl mt-1 text-White uppercase">
          Coding Profiles
        </div>
        <div className="flex flex-row pt-20 items-center text-center">
          <Link className='mr-10' href={"https://www.leetcode.com/vishalarora14"} target="_blank" rel="noopener noreferrer">
            <Image src={"/leetcode.png"} width={250} height={250} alt='Leetcode-Profile-Link'/>
          </Link>
          <Link href={"https://www.github.com/vishalarora14"} target="_blank" rel="noopener noreferrer"> 
            <Image src={"/github.png"} width={150} height={150} alt='Github-Profile-Link'/>
          </Link>
        </div>
      </div>
    </Wrapper>
    </>
  )
}

export default CodingProfiles