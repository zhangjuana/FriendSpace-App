import {loginURL,registerURL,changePasswordURL,createUserURL,findUserURL} from './URLConfig';
class UserManager{
    async login(email,password){
        try {
            const user ={
                email,
                password
            }
            const res=await fetch(loginURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user)
            })
            const result=await res.json();
            if(result.success===true){
                localStorage.access_token=result.data.access_token;
            }
            return result;
        } catch (error) {
            return{
                success:false,
                errorMessage:'网络错误'
            }           
        }
    }
    async register(email,password){
        try {
            const user={
                email,
                password
            }
            console.log(user);
            const res=await fetch(registerURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user)
            });

            const result=await res.json();
            if(result.success===true){
                localStorage.access_token=result.data.access_token;
            }
            return result;
        } catch (error) {
            return{
                success:false,
                errorMessage:'网络错误'
            }
        }
    }
     logout(){
         localStorage.access_token='';
     }
     isLogin(){
         if(localStorage.access_token === '' || !localStorage.access_token){
             return false;
         }else{
             return true;
         }
     }
     async changePassword(old_password,new_password){
         try {
             const access_token=localStorage.access_token;
             const user={
                old_password,
                new_password,
                access_token   
             }
             console.log(user);
             const res=await fetch(changePasswordURL,{
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
            return{
                success:false,
                errorMessage:'网络错误'
            }
         }
     }




    async createUser(nickname,sign,image){
        try {
            const access_token=localStorage.access_token;
            const formData=new FormData();
            formData.append('access_token',access_token);
            formData.append('nickname',nickname);
            formData.append('sign',sign);
            formData.append('image',image.file);

            const res=await fetch(createUserURL,{
                method:'POST',
                body:formData
            });
            const result=await res.json();
            return result.data;
        } catch (error) {
            return{
                success:false,
                errorMessage:'网络错误'
            }
        }
    }
    async findUser(nickname){
        try {
            const access_token=localStorage.access_token;
            const user={
                nickname,
                access_token
            }
            const res=await fetch(findUserURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content/Type':'application/json'
                },
                body:JSON.stringify(user)
            })
            const result=await res.json();
            return result.data;
        } catch (error) {
            return{
                success:false,
                errorMessage:'网络错误'
            }
        }
    }
    

}
export default new UserManager()