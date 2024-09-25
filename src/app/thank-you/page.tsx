// import { Suspense } from 'react'
// import ThankYou from './ThankYou'

// const Page = () => {
//   return (
//     <Suspense>
//       <ThankYou />
//     </Suspense>
//   )
// }

// export default Page
import React from "react";

const page = () => {
  return (
    <div className="w-1/2 mx-auto">
      {" "}
      <div className="mt-10 border-t border-zinc-200">
        <div className="mt-10 flex flex-auto flex-col">
          <h4 className="font-semibold text-zinc-900">
            You made a great choice!
          </h4>
          <p className="mt-2 text-sm text-zinc-600">
            We at CaseCobra believe that a phone case doesn't only need to look
            good, but also last you for the years to come. We offer a 5-year
            print guarantee: If you case isn't of the highest quality, we'll
            replace it for free.
          </p>
        </div>
      </div>
      <div className="flex space-x-6 overflow-hidden mt-4 rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl"></div>
    </div>
  );
};

export default page;
