
function attendiInternal(parametro, callback) {
    console.log("inizio attendiInternal, parametro: ", parametro)
    setTimeout(() => {
        callback(null, "tutto ok");
    }, 2000)
    console.log("fine attendiInternal")
}

module.exports = attendiInternal;