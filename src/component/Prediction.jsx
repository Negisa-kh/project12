
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Example() {
  return (
    <div className='bg1 flex items-center justify-center '>
    <form className="w-[70rem] form1">
      <div className="space-y-12  mx-auto p-5">

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-5xl font-semibold bg-pink-500  text-center rounded-lg text-white p-5">IVF Success Prediction CDSS</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                Female Age(years)
              </label>
              <div className="mt-2">
                <input
                  id="Female-Age"
                  name="Female-Age"
                  autoComplete="given-number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
               oocyte number(MI)
              </label>
              <div className="mt-2">
                <input
                  id=" oocyte-number"
                  name="oocyte-number"
                  autoComplete="oocyte-number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                FSH (mu/mI)
              </label>
              <div className="mt-2">
                <input
                  id="  FSH "
                  name="  FSH "
                  type="text"
                  autoComplete="  FSH "
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
              oocyte number(MII)

              </label>
              <div className="mt-2">
                <input
                  id="oocyte-number(MII)"
                  name="foocyte-number(MII)"
                  type="text"
                  autoComplete="oocyte-number(MII)"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                AMH(ng/ml)
              </label>
              <div className="mt-2">
                <input
                  id=" AMH(ng/ml)"
                  name=" AMH(ng/ml)"
                  type="text"
                  autoComplete=" AMH(ng/ml)"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
               Sperm Count(m/mI)
              </label>
              <div className="mt-2">
                <input
                  id=" Sperm-Count(m/mI)"
                  name=" Sperm-Count(m/mI)"
                  type="text"
                  autoComplete="Sperm-Count(m/mI)"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                Endometrial Thickness(mm)
              </label>
              <div className="mt-2">
                <input
                  id="Endometrial-Thickness(mm)"
                  name="Endometrial-Thickness(mm)"
                  type="text"
                  autoComplete="Endometrial-Thickness(mm)"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                Sperm Morphology
              </label>
              <div className="mt-2">
                <input
                  id="Sperm-Morphology"
                  name="Sperm-Morphology"
                  type="text"
                  autoComplete="Sperm-Morphology"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                Follicle Size
              </label>
              <div className="mt-2">
                <input
                  id=" Follicle-Size"
                  name=" Follicle-Size"
                  type="text"
                  autoComplete=" Follicle-Size"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                Embryo number
              </label>
              <div className="mt-2">
                <input
                  id=" Embryo-number"
                  name=" Embryo-number"
                  type="text"
                  autoComplete=" Embryo-number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                Number of Retrieved oocytes
              </label>
              <div className="mt-2">
                <input
                  id="Number of Retrieved oocytes"
                  name="Number of Retrieved oocytes"
                  type="text"
                  autoComplete="Number of Retrieved oocytes"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
              Embryo Quality
              </label>
              <div className="mt-2">
                <select
                  id=" Embryo Quality"
                  name=" Embryo Quality"
                  autoComplete=" Embryo Quality"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
                >
                  <option>choose an option</option>
                  <option>AA</option>
                  <option>BB</option>
                  <option>CC</option>
                  <option>CD</option>
                  <option>DD</option>

                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center  col-span-full">
        <button
          type="submit"
          className="block w-full  border-0  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-500 sm:text-sm/6    rounded-md bg-pink-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
        >
          Predict
        </button>
      </div>
    </form>
    </div>
  )
}
