const validateHour = (req, res, next) => {
    const { hour } = req;

    if (hour < 12) {
        res.locals.mensaje = 'Aún no es la hora, espera hasta las 12:00 para entrar';
        return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }

    next();
};

module.exports = validateHour;

