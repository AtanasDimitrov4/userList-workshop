const baseURL = 'http://lochalhost3030/jsonstore/users';

export default {
   async getAll() {
    try {
    const response = await fetch(baseURL);
    const result =  await response.json();
    const users = Object.values(result);

    return users

    } catch (err){
       console.log(err)
    }
    
  
    }
      
    }
