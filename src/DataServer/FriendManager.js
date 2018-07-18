
import { findUserURL, unFollowURL, getFollowURL,followURL} from './URLConfig';
class FriendManager {
    async findUser(nickname) {
        try {
           const user={
               nickname
           }
           const res=await fetch(findUserURL,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content/Type':'application/json'
            },
            body:JSON.stringify(user)
           });
           const result=await res.json();
           if(result.success===true){
               localStorage.access_token=result.data.access_token
           }
            return result;
        } catch (error) {
            return {
                success: false,
                errorMessage: '网络错误'
            }
        }
    }
    async FollowUser(userId) {
        try {
            const user={
                userId
            }
            const res=await fetch(followURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content/Type':'application/json'
                },
                body:JSON.stringify(user)
            });
         
            body:JSON.stringify(user)
            const result=await res.json();
            if(result.success===true){
                localStorage.access_token=result.data.access_token
            }
             return result;
        } catch (error) {
            return {
                success: false,
                errorMessage: '网络错误'
            }
        }
    }
    async unFollowUser(userId) {
        try {
            const user={
                userId
            }
            const res=await fetch(unFollowURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content/Type':'application/json'
                },
                body:JSON.stringify(user)
            });
            const result=await res.json();
            if(result.success===true){
                localStorage.access_token=result.data.access_token
            }
             return result;
        } catch (error) {
            return {
                success: false,
                errorMessage: '网络错误'
            }
        }
    }
    async getFollow(){
        try {
            const access_token=localStorage.access_token;
            const res=await fetch(getFollowURL,{
                method:'POST',
                headers:{
                    'Accept':'appliaction/json',
                    'Content/Type':'application/json'
                },
                access_token,
            });
            const result=await res.json();
            return result;
        } catch (error) {
            return {
                success: false,
                errorMessage: '网络错误'
            }
        }
    }

}
export default new FriendManager();