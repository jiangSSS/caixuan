import axios from "axios"

const env = process.env.NODE_ENV  
                                     
    // let baseURL = env == "development" ? "/api" :"/"
    const baseURL = "http://localhost:8181"
    const instance = axios.create({
    baseURL,
    timeout:15000,
    // 'Content-Type':"application/x-www-form-urlencoded;charset=UTF-8",
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        // "Access-Control-Allow-Origin": "*",
        // 'Accept': 'application/json'
    }
    
})
const xhr = {
    fetch(url,data,config,methods){
        return new Promise((resolve,reject)=>{
            instance[methods](url,data,config).then(res=>{
                // let res = JSON.parse(ress.data);
                resolve(res.data)
            })
        })
    },
    get(url,data,config){
        return new Promise((resolve,reject)=>{
            instance.get(url,{params:data},config).then(res=>{
                // let res = JSON.parse(ress.data);
                resolve(res.data)
            })
        })
    },
    put(url,data,config){
        return this.fetch(url,data,config,"put")
    },
    post(url,data,config){
        return this.fetch(url,data,config,"post")
    }
}
export const $axios = xhr