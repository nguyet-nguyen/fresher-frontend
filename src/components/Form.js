import React,{ useState }  from 'react';
import axios from 'axios';
const Form = () => {

  const [formValue, setformValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    country: '',
  });
  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
    
  }

  const onHandleSubmit = async(e) => {
    e.preventDefault()
    const url = `http://localhost:3000/todo/create/`;
    axios.post(url, {
      firstName: formValue.firstName,
      lastName: formValue.firstName,
      email: formValue.email,
      phone: formValue.phone,
      city: formValue.city,
      country: formValue.country, 
    })
        .then(res => {
            console.log(res);
            console.log(res.data);
            
        })
        .catch(err => {
          console.log(err)
        })
  }
  const onHandDel = async(event)=>{

  }
  return (
    <div className="w-full max-w-md flex mx-auto mb-8">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onHandleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-0">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
             border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
             id="firstName"
             name='firstName'
             type="text"
             placeholder="firstName"
             onChange={handleChange}
              />
            <p className="text-red-500 text-xs italic"></p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
             border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
             id="lastName"
             name='lastName'
             type="text"
             placeholder='lastName'
             onChange={handleChange}
             />
            <p className="text-red-500 text-xs italic"></p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-0">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
             border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
             id="email"
             name='email'
             type="email"
             placeholder="email"
             onChange={handleChange}
             />
            <p className="text-red-500 text-xs italic"></p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
              Phone
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
             border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
             id="phone"
             name='phone'
             type="number"
             placeholder='phone'
             onChange={handleChange}
              />
            <p className="text-red-500 text-xs italic"></p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-0">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="city">
            City
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
             border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
             id="city"
             name='city'
             type="text"
             placeholder="city"
             onChange={handleChange}
              />
            <p className="text-red-500 text-xs italic"></p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="country">
            Country
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
             border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
             id="country"
             name='country'
             type="text"
             placeholder='country'
             onChange={handleChange}
              />
            <p className="text-red-500 text-xs italic"></p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
             >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
