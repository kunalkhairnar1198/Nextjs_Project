import Link from 'next/link'
import React, { Fragment } from 'react'

const AboutusPage = () => {
  const details = [

    { id : 1, name: 'Yash', role: 'Senior Developer'},
    
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    
    { id : 3, name: 'Suresh', role: 'Frontend Developer'},

    { id : 4, name: 'kunal', role: 'Frontend React Developer'},
    
    ]

    const detailData = details.map((item)=>(
      <Link href={`/aboutus/${item.id}`}>
          <li>{item.name}- {item.role}-{item.id}</li>
      </Link>
    ))
    console.log(detailData)

    if(detailData){
      <>
      <h1>Loading...  </h1>
      </>
    }


  return (
    <Fragment>
        <h1>About us</h1>
        <ul>
          <li><Link href='/aboutus/nextjs-is-a-great-framework'>Nextjs is A Great Framework </Link></li>
          <li><a href=''>Something else its directly fetch new request to ssr side and respond new html page in anchor tag i.e it refresh the page </a></li>
          {detailData}

        </ul>
    </Fragment>
  )
}

export default AboutusPage
