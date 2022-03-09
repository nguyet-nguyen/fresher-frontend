import React  from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
const FormHook = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    //this.formState({errors: false });
  const onSubmit = async(data) => {
    //data.preventDefault()
    console.log(data.firstName);
    const url = `http://localhost:3000/todo/create/`;
    axios.post(url, {
      firstName: data.firstName,
      lastName: data.firstName,
      email: data.email,
      phone: data.phone,
      city: data.city,
      country: data.country, 
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
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
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
            
             {...register("firstName", {required: true, minLength: 3 ,maxLength: 5})}
              />
            {errors.firstName && errors.firstName.type==="required" && <p style={{ color: 'red' }}>khong duoc de trong</p>}
            {errors.firstName && errors.firstName.type ==='minLength' && <p style={{ color: 'red' }}>Khong duoc nho hon 3 ky tu</p>}
            {errors.firstName && errors.firstName.type ==='maxLength' && <p style={{ color: 'red' }}>Khong duoc lon hon 5 ky tu</p>}
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
             {...register("lastName", {required: true})}
             />
             {errors.firstName && <p style={{ color: 'red' }}>Test required</p>}
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
             type="text"
             placeholder="email"
             {...register("email", {required: true, email: true})}
             />
             {errors.email && errors.email.type==='required' && <p style={{ color: 'red' }}>Test required</p>}
             {errors.email && errors.email.type==='email' && <p style={{ color: 'red' }}>Email type</p>}
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
             {...register("phone", {required: true})}
              />
              {errors.phone && <p style={{ color: 'red' }}>Test required</p>}
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
             {...register("city", {required: true})}
              />
              {errors.city && <p style={{ color: 'red' }}>Test required</p>}
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
             {...register("country", {required: true})}
              />
              {errors.country && <p style={{ color: 'red' }}>Test required</p>}
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
export default FormHook;
