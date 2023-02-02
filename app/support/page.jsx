import React from "react";
import Razorpay from 'razorpay'


const page = () => {
var instance = new Razorpay({
  key_id:process.env.RAZOR_KEY,
  key_secret:process.env.RAZOR_SECRET
})


  return (
    <div className="h-full w-full flex items-center justify-center">
      Suport Page
    </div>
  );
};

export default page;
