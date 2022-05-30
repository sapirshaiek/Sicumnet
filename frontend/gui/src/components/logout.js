import React, {useEffect } from 'react';
import axiosInstance from './axios';
import { useNavigate } from 'react-router-dom';

function Logout(){
    const navigate = useNavigate();

	useEffect(() => {
		const response = axiosInstance.post('logout', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		if (response != null){
			axiosInstance.defaults.headers['Authorization'] = null;
			navigate('/');

		}
	});
    return <div>Logout</div>;

    

}

export default Logout;