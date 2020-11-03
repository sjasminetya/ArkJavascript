const getmonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['January', 'February','March','April','May','Juni','July','August','September','Oktober','November','Desember'];
        if(!error) {
            callback(null,month);
        } else {
            callback(new Error('Sorry Data Not Found', []));
        }
    }, 4000)
}


getmonth((error, month) => {
    if (!error) {
        month.map(item => {
            console.log(item);
        })
    } else {
        console.log(error.message);
    }
    
})