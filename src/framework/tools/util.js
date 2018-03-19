const wfm = {
    delay(ms = 1000) {
        return new Promise( function (resolve, reject) {
            setTimeout( () => {
                resolve()
        }, ms)
        })
    }
};

export { wfm }