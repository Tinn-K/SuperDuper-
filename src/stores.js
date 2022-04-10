import {writable} from 'svelte/store';

let data ={1111:{username: "1111", password:"1111", admin:false},
           2222:{username: "2222", password:"2222", admin: true}};

export const accounts = writable(data);
export const isLogin = writable(false);
export const mode = writable('');
export const account = writable('');