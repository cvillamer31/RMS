const { users } = require("../../../models")


const dashboard = async (req, res) => {
    try {

        res.render("admin/admin", {
            success: req.flash('success'),
            errors: req.flash('errors'),
        })
        
    } catch (error) {
        
    }
}



module.exports = {
    dashboard,
};