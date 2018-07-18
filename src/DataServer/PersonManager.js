import {createUserURL,updateUserURL,getUserURL} from "./URLConfig";
class PersonManager
{
    async createUser(nickName,sign,image)
    {
        try {
            const access_token=localStorage.access_token;
            const formData=new FormData();
            formData.append("access_token",access_token);
            formData.append("nickName",nickName);
            formData.append("sign",sign);
            formData.append("image",image.file);
            const res=await fetch(createUserURL,{
                method:'POST',
                body:formData
            });
            const result=await res.json();
            console.log(result);
            return result;
        } catch (error) {
            return{
                success:false,
                errorMessage:'网络错误'
            }
        }

    }
    async updateUser(userInfo)
    {
        try {
            const access_token=localStorage.access_token;
            const formData=new FormData();
            formData.append("access_token",access_token);
            if(userInfo.nickName)
            {
                formData.append("nickName",userInfo.nickName);
            }
            if(userInfo.sign)
            {
                formData.append("sign",userInfo.sign);
            }
            if(userInfo.image)
            {
                formData.append("image",userInfo.image.file);
            }
            const res=await fetch(updateUserURL,{
                method:'POST',
                body:formData
            });
            const result=res.json();
            console.log(result);
            return result;
        } catch (error) {
            return{
                success:false,
                errorMessage:'网络错误'
            }
        }
        
    }
    async getUser(userId=0)
    {
        try {
            const access_token = localStorage.access_token;
            const user={
                access_token,
                userId
            }
            const res=await fetch(getUserURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user)
            })
            const result=res.json();
            return result;
        } catch (error) {
            return {
                success:false,
                errorMessage:'网络错误'
            }
        }
    }

}
export default new PersonManager()