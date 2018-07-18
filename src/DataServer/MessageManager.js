import {
    postMessageURL,
    getMessageURL,
    homeMessageURL,
    deleteMessageURL,
} from './URLConfig';

class MessageManager {
    async postMessage(content,images){
        try {
            const access_token = localStorage.access_token;
            console.log(access_token);
            const formData = new FormData();
            formData.append('access_token',access_token);
            formData.append('content',content);
            images.map((image,index)=>{
                formData.append(`image${index}`,image.file);
            })
            console.log(content);
            const res = await fetch(postMessageURL,{
                method:'POST',
                body:formData
            })
            const result=await res.json();
            return result;

        } catch (error) {
            return {
                success:false,
                errorMessage:'网络错误'
            }
        }
    }
    async deleteMessage(messageId){
        try {
            const access_token = localStorage.access_token;
            const res = await fetch.post(deleteMessageURL,{
                access_token,
                messageId
            })
            return res.data;
        } catch (error) {
            return {
                success:false,
                errorMessage:'网络错误'
            }
        }  
    }
    async homeMessage(minId){
        try {
            const access_token = localStorage.access_token;
            const user={
                access_token,
                minId
            }
            const res=await fetch(homeMessageURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user)
            })
            const result=await res.json();
            return result;
        } catch (error) {
            return {
                success:false,
                errorMessage:'网络错误'
            }
        }  
    }
    async getMessage(userId){
        try {
            const user={
                access_token:localStorage.access_token,
                userId,  
            }
            console.log(user);
            
            const res = await fetch(getMessageURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user)
            })
            const result=await res.json();
            console.log(result);
            return result;
        } catch (error) {
            return {
                success:false,
                errorMessage:'网络错误'
            }
        }  
    }
}

export default new MessageManager();