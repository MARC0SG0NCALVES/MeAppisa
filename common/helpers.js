module.exports.Sleep = (time, paused) => {
    return new Promise(resolve => {
        var wait = () => {
            setTimeout(paused ? wait : resolve, time);
        }
    })
}