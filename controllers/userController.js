import Users from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";


export const register = async(req, res)=>{
   try {
    const {name, email, password, phone}= req.body;

    const userExists =await Users.findOne({email})
    if (userExists) {
        res.status(400).json({message:'user already exists'})
    }
    else{ 
        const user = Users.create({
            name, email, password,phone
        })
    
        if (user) {
            res.status(201).json({
               _id: user._id,
               name: user.name,
               email: user.email,
               password: user.password,
               phone: user.phone,   
               token:generateToken(user._id)
    
            })
    }
    else{
        res.status(401).json({message:'Invalid User Data'});
    }

    
        
    }
   } catch (error) {
    res.status(500).json({error: error.message})
   }
}


export const login =async(req, res)=>{
  try {
    const {email, password} = req.body;


    const user = await Users.findOne({email});

    if (user && password == user.password) {
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            password:user.password,
            phone:user.phone,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)
 
         })
    }else{
        res.status(404).json({message:'Invalid Email or Password'});
    }
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}



export const getUserProfile = async(req, res)=>{

   try {
    const {id, token} = req.body;

    const user = await Users.findById(id).populate('cart.product').populate('wishlist.product');
    if (user) {
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            password:user.password,
            phone:user.phone,
            isAdmin:user.isAdmin,
            token,
    
 
         })
        
    }
    else{
        res.status(404).json({message:'Invalid Data'});
    }

   } catch (error) {
    res.status(500).json({error: error.message})
   }
}









