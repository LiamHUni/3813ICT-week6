module.exports = {
    listen: function(app, PORT){
        app.listen(PORT, ()=>{
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            console.log(`Server has been started on port ${PORT} at ${hours}:${minutes}`);
        })
    }
}