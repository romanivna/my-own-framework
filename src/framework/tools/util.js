const _ = {
    delay(ms = 1000) {
        return new Promise( function (resolve, reject) {
            setTimeout( () => {
                resolve()
        }, ms)
        })
    },

    isUndefined(d){
        return typeof d == 'undefined'
    }
};

export { _ }