import { Link } from "react-router-dom";

export default function Personal() {
    return (
      <div className='bg1 flex items-center justify-center '>
      <form className="w-[70rem] form1">
        <div className="space-y-12  mx-auto p-5">
        <h2 className="text-5xl font-semibold bg-violet-600  text-center rounded-lg text-white p-5">Personal Information</h2>
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 flex flex-col col-apan-1 gap-x-6 gap-y-8 sm:col-span-6 justify-center ">
              <div className="sm:col-span-4">
                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                First name:
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    autoComplete="given-number"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-4">
                <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                Last name:
                </label>
                <div className="mt-2">
                  <input
                    id=" Last-name"
                    name=" Last-name"
                    autoComplete=" Last-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-4">
                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                Date of Birth:
                </label>
                <div className="mt-2">
                  <input
                    id="  Age "
                    name="  Age "
                    type="number"
                    autoComplete="  Age "
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-4">
                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                Contact Number
  
                </label>
                <div className="mt-2">
                  <input
                    id="Contact-Number"
                    name="Contact-Number"
                    type="number"
                    autoComplete="Contact-Number"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-4">
                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                Address
                </label>
                <div className="mt-2">
                  <input
                    id="Address"
                    name=" Address"
                    type="text"
                    autoComplete=" Address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
               </div>
          </div>
          <div className="border-b border-gray-900/10 pb-12">
          <label htmlFor="label" className="block text-2xl  font-bold text-gray-900">
          Medical History:
                </label>
            <div className="mt-10 flex flex-col col-apan-1 gap-x-6 gap-y-8 sm:col-span-6 justify-center ">
              <div className="sm:col-span-4">
                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                Personal and Family Medical History:
                </label>
                <div className="mt-2">
                  <input
                    id=" Medical History"
                    name=" Medical History"
                    autoComplete="Medical History"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-4">
                <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                Surgeries Performed:
                </label>
                <div className="mt-2">
                  <input
                    id=" Surgeries Performed"
                    name="Surgeries Performed"
                    autoComplete=" Surgeries Performed"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-4">
                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                Allergies:
                </label>
                <div className="mt-2">
                  <input
                    id="  Allergies "
                    name="  Allergies "
                    autoComplete="  Allergies "
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
               </div>
          </div>
        </div>
  
        <div className="mt-6 flex items-center justify-center  col-span-full">
          <button
            type="submit"
            className="block w-full  border-0  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm/6    rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-violet-400"
          >
             <Link to="/Prediction">
             Nex
            </Link>
            
          </button>
        </div>
      </form>
      </div>
    )
  }
  