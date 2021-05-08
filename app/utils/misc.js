import AsyncStorage from '@react-native-async-storage/async-storage';

export const FIREBASEURL    = `https://rn-nba-app-55fbb-default-rtdb.firebaseio.com`;
export const APIKEY         = `AIzaSyDGhTzt85OZBlpkKrG_XeWohjL14CcQn-c`;
export const SIGNUP         = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`;
export const SIGNIN         = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`;
export const REFRESH        = `https://securetoken.googleapis.com/v1/token?key=${APIKEY}`;


export const getTokens = (cb) => {
    AsyncStorage.multiGet([
        '@ReactNative_NBA_App@token',
        '@ReactNative_NBA_App@refreshToken',
        '@ReactNative_NBA_App@expireToken',
        '@ReactNative_NBA_App@uid',
    ]).then( value => {
        cb(value);
    });  
}

export const setTokens = (values, cb) => {
    const dateNow = new Date();
    const expiration = dateNow.getTime() + (3600 * 1000);

    AsyncStorage.multiSet([
        ['@ReactNative_NBA_App@token', values.token],
        ['@ReactNative_NBA_App@refreshToken', values.refToken],
        ['@ReactNative_NBA_App@expireToken', expiration.toString()],
        ['@ReactNative_NBA_App@uid', values.uid]
    ]).then( response => {
        cb();
    });
}