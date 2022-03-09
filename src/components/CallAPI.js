import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = "http://localhost:3000/todo/get";
export default function CallAPI() {
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    });

    if (!post) return null;
    //   ---------------------------------------------
    return (
        <div>
            
                <table class="table-fixed mx-auto" style={{ "width": "950px" }}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>Country</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                    {post.map(item => (
                        <tr key={item.id}>
                            <td className='text-center'>{item.id}</td>
                            <td className='text-center'>{item.firstName} {item.lastName}</td>
                            <td className='text-center'>{item.email}</td>
                            <td className='text-center'>{item.phone}</td>
                            <td className='text-center'>{item.city}</td>
                            <td className='text-center'>{item.country}</td>
                            <td className='text-center'>
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                    Update
                                </button>
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                    Delete
                                </button>
                            </td>
                        </tr>
                          ))}
                          
                    </tbody>
                </table>
          
        </div>
    )
}
