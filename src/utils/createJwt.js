const createJwt =async ({payload}) => {
    try{
        const res = await fetch('/api/auth',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const data = res.json();
        return data;
    }
    catch{
        console.log(error.message)
    }

}
export default createJwt;