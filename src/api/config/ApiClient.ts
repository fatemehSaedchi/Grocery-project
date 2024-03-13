import axios from "axios";
import {toast} from "react-toastify";


const ApiClient = axios.create({
    baseURL: "http://nest.navaxcollege.com/api",
    timeout: 0
})

export default ApiClient;

ApiClient.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    if (error.response){
        if (error.response.status === 404){
            toast.error('منابع درخواستی وجود ندارد.')
        }else if (error.response.status === 400){
            toast.error('پارامترهای ارسالی صحیح نمی باشد.')
        }else if (error.response.status === 401){
            toast.error('لطفا وارد شوید.')
        }else if (error.response.status === 403){
        toast.error('شما دسترسی به این منابع ندارید.')
    }else {
            toast.error("خطایی رخ داده است")
        }
    }else if (error.request){
        toast.error("ارتباط با سرور برقرار نیست.")
    }else {
        toast.error("خطای نامعلوم")
    }
    return Promise.reject(error);
});