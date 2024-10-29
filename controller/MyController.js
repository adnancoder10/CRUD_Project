const UserModel = require("../db/DefingSchema")

class AllController{
    static HomePageGetRequestController = async (req, res)=>{
        const data = await UserModel.find()
        res.render('home.ejs', {
            data: data,
            Fname: true,
            Lname: true,
            Email: true,
            Age: true,
            title: 'Home Pgae'
        })

    }    
    static HomePagePostRequestController = async (req, res)=>{
        const data = await UserModel.find()
        const {Fname, Lname, Email, Age} = req.body
        // Errer hendling

        if (!Fname || !Lname || !Email || !Age) {
            res.render('home.ejs', {
                data: data,
                Fname: Fname,
                Lname: Lname,
                Email: Email,
                Age: Age,
            })
        }else {
            console.log('You can add date base code here');
            const result = await UserModel.create({
                Fname,
                Lname,
                Email,
                Age,
            })
            res.redirect('/')       
    }
    }
    static DeleteUser = async (req, res,)=>{
        const id = req.params.id
        await UserModel.deleteOne({ _id: id })

        res.redirect('/')
    }
    static UpdateUser = async (req, res)=>{
        console.log('Update user id: '+req.params.id);
        const id = req.params.id

        try {
            const finduser = await UserModel.find({ _id: id })
            if (finduser) {
                res.render('update.ejs', {
                    finduser: finduser,
                    title: 'update user'
                })
            }
        } catch (error) {
            res.send('User not found')
            
        }  
    }
    static UpdateUsingByID = async (req, res)=>{
        const id = req.params.id

        const {Fname, Lname, Email, Age} = req.body
        
        try {
            const result = await UserModel.findByIdAndUpdate(id, {
                Fname: Fname,
                Lname: Lname,
                Email: Email,
                Age: Age})
            if (result) {
                res.redirect('/')
            }

        } catch (error) {
            res.send('plz')
            
        }



    }

}



module.exports = AllController