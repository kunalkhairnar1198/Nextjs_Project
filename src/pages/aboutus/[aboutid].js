import { useRouter } from "next/router"
import { Fragment } from "react";

const DevelopersPage = () => {
  const router = useRouter()  
  console.log(router.query.aboutid);
 const aboutusid = router.query.aboutid
  //sent the request to the backend api to fetch the news item with newsid
  
  const details = [

    { id : 1, name: 'Yash', role: 'Senior Developer'},
    
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    
    { id : 3, name: 'Suresh', role: 'Frontend Developer'},

    { id : 4, name: 'kunal', role: 'Frontend React Developer'},
    
    ]

    
    const datafind = details.find((item)=> item.id === parseInt(aboutusid))
    console.log('find data in the component',datafind)

      if(datafind){
        <h1>
          Loading...
        </h1>
      }

  return (
    <h1>
      {datafind && `Hiii... ${datafind.name} ${datafind.role}!`}
    </h1>
  )
}

export default DevelopersPage
