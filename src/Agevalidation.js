import React, { useState } from "react";

function Agevalidation() {
  const [ageValid, setAgeValid] = useState(false);
  //   if (ageValid) return <div>You can vote</div>;
  //   else return <div> You can't Vote</div>;

//   let age;
//   if(ageValid)
//   {
//     age=<div>You can vote</div>
//   }
//   else{
//     age=<div>You can't vote</div>
//   }
//   return (
//     <>{age}</>
//   )


return(
    <>
    {
        /*ageValid ? <div>You can vote</div> : <div>You can't vote</div>*/
    }

    {
        //Short circuit = only true condition will show output else no output will show
        ageValid && <div>You can Vote</div>
    }
    </>
)
}

export default Agevalidation;
