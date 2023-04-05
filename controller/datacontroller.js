const User = require('../model/usertable');

module.exports.postdata =async(req,res)=>{
    const name = req.body.name;
    const description= req.body.description;
    const price= req.body.price;
    const quantity =req.body.quantity;
    console.log(name,description,price,quantity)

    const data =await User.create({name:name,description:description,price:price,quantity:quantity});
    res.status(201).json({newuser:data})
};

module.exports.getuser=async(req,res)=>{
    try{
        const users = await User.findAll();
        res.status(200).json({alluser:users})
        }
        catch(err){
            console.log('error in geting request',JSON.stringify(err))
            res.status(500).json({err:err})
        }
}

module.exports.decrese1=(req,res)=>{
    const prodId = req.params.id;
    console.log(req.params)

    User.findByPk(prodId)
      .then(user => {
        
        user.quantity=user.quantity-1;
       
        return user.save();
      })
      .then(result => {
        res.json(result)
        console.log('UPDATED user!');
      })
      .catch(err => console.log(err));
}

module.exports.decrese2=(req,res)=>{
    const prodId = req.params.id;
    console.log(req.params)

    User.findByPk(prodId)
      .then(user => {
        
        user.quantity=user.quantity-2;
       
        return user.save();
      })
      .then(result => {
        res.json(result)
        console.log('UPDATED user!');
      })
      .catch(err => console.log(err));
}
module.exports.decrese3=(req,res)=>{
    const prodId = req.params.id;
    console.log(req.params)

    User.findByPk(prodId)
      .then(user => {
        
        user.quantity=user.quantity-3;
       
        return user.save();
      })
      .then(result => {
        res.json(result)
        console.log('UPDATED user!');
      })
      .catch(err => console.log(err));
}