import {writable} from 'svelte/store';

//ข้อมูลของบัญชีผู้ใช้งาน
let data = {
   "1111":{
      "name":"jonathan joestar",
      "username":"1111",
      "password":"1111",
      "admin":false,
      "subject":[
         {id: "SF220", section: "760001"}
      ]
   },
   "2222":{
      "name":"jotaro joestar",
      "username":"2222",
      "password":"2222",
      "admin":true,
      "subject":[]
   },
}

//ข้อมูลของวิชา
let subject_data = [
  {
    name: "วิศวกรรมซอฟต์แวร์เบื้องต้น",
    id: "SF220",
    quota: 72,
    submitted: 5,
    section: "760001",
    period: "9:30-12:30",
    date: "วันจันทร์"
    
  },
  {
    name: "ทักษะดิจิทัลกับการแก้ปัญหา",
    id: "TU107",
    quota: 72,
    submitted: 5,
    section: "760001",
    period: "13:30-16:30",
    date: "วันพฤหัสบดี"
  },
  {
    name: "การพัฒนาการเขียนโปรแกรมคอมพิวเตอร์ 1",
    id: "SF210",
    quota: 72,
    submitted: 4,
    section: "760001",
    period: "9:30-12:30",
    date: "วันอังคาร"
  },
  {
    name: "การพัฒนาการเขียนโปรแกรมคอมพิวเตอร์ 1",
    id: "SF210",
    quota: 72,
    submitted: 72,
    section: "760002",
    period: "13:30-16:30",
    date: "วันอังคาร",
  },
  {
    name: "การพัฒนาการเขียนโปรแกรมคอมพิวเตอร์ 1",
    id: "SF210",
    quota: 72,
    submitted: 36,
    section: "760003",
    period: "13:30-16:30",
    date: "วันอังคาร",
  },
  
]

export const accounts = writable(data);
export const isLogin = writable(false);
export const subject = writable(subject_data)
export const subject_mode = writable("list")
export const mode = writable('');
export const account = writable('');
export const update = writable(false);