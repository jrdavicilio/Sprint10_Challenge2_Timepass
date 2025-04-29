const hourMiddleware = (req,res,next) => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const arrangedDate = `${hours}:${minutes}`

    req.dateType = `Son las ${arrangedDate}`
    req.hour = hours
    req.minutes = minutes

    next()
}

module.exports = hourMiddleware