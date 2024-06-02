const Home = (req, res) => {
    res.render('index.ejs')
}

const Dashboard = (req, res) => {
    res.render('dashboard.ejs')
}


module.exports = {
   Home,
   Dashboard
}
