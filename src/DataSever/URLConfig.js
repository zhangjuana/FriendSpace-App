const host = 'http://192.168.1.30:';
const port = 60004;
const loginURL = host+port+'/api/login';
const registerURL = host+port+'/api/register';
const createUserURL = host+port+'/api/createUser';
const postMessageURL = host+port+'/api/postMessage';
const deleteMessageURL = host+port+'/api/deleteMessage';
const followURL = host+port+'/api/follow';
const unFollowURL = host+port+'/api/unFollow';
const getFollowURL = host+port+'/api/getFollow';
const getUserURL = host+port+'/api/getUser';
const updateUserURL = host+port+'/api/updateUser';
const findUserURL = host+port+'/api/findUser';
const getMessageURL = host+port+'/api/getMessage';
const homeMessageURL = host+port+'/api/homeMessage';
const changePasswordURL = host+port+'/api/changePassword';

const imageBaseURL = host+port+'/resource/image/';

export {
    loginURL,
    registerURL,
    createUserURL,
    postMessageURL,
    deleteMessageURL,
    followURL,
    unFollowURL,
    getFollowURL,
    getUserURL,
    updateUserURL,
    findUserURL,
    getMessageURL,
    homeMessageURL,
    changePasswordURL,
    imageBaseURL,
}