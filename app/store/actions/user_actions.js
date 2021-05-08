import axios from 'axios';

export function signUp() {


    return {
        type:'SIGN_UP',
        payload: {
            user: 'francis@gmail.com',
            token: 'fdnkjlsanfkljsdanfla'
        }
    }
}

export function signIn() {
 
    return {
        type:'SIGN_IN',
        payload: {
            user: 'francis@gmail.com',
            token: 'fdnkjlsanfkljsdanfla'
        }
    }   
}