
import { findUserURL, unFollowURL, getFollowURL,followURL} from './URLConfig';
class FriendManager {
    async findUser(nickname) {
        try {
           const user={
               access_token:localStorage.access_token,
               nickname
           }
           const res=await fetch(findUserURL,{
               method:'POST',
               headers:{
                   'Accept':'appliaction/json',
                   'Content-Type':'application/json'
               },
               body:JSON.stringify(user)
           });
           const result=await res.json();
           console.log(result);
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
                userId,
                access_token:localStorage.access_token
            }
            const res=await fetch(followURL,{
                method:'POST',
                headers:{
                    'Accept':'appliaction/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user)
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
    async unFollowUser(userId) {
        try {
            const user={
                userId,
                access_token:localStorage.access_token
            }
            const res=await fetch(unFollowURL,{
                method:'POST',
                headers:{
                    'Accept':'appliaction/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user)
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
    async getFollow(){
        try {
            const user={
                access_token:localStorage.access_token
            }
            const res=await fetch(getFollowURL,{
                method:'POST',
                headers:{
                    'Accept':'appliaction/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user)
            });
            const result=await res.json();
            console.log(result);
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