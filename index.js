require('dotenv').config()
const axios=require('axios')

let results=[]

const getter=async (startPage)=>{

    if(startPage===0){
        return results 
    }else {
        try {
            let res=await axios.get(`greenixpestcontrol.freshservice.com/helpdesk/tickets/filter/all_tickets.json?page=${startPage}`)
            getter(startPage-1)
           console.log(results)
            
        } catch (error) {
            console.log(error)
        }
    }
}


getter(2)


//request 


//enviornemnt vars


//create big array 


//from array, create csv. 


