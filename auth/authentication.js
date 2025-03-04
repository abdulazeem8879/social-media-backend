import bcrypt from "bcrypt"

let saltRound=10

export const hashCreating=async(password)=>{

    try {
        let hashPass=await bcrypt.hash(password,saltRound)
        return hashPass

    } catch (error) {
        
console.log(`error while creating hash password ${error}`)

    }

}

