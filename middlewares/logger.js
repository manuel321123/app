const logger = (message) => (req, res, next) => {
    const date = new Date();
    console.log(`[${date.toLocaleString()}] ${message}`);
    next();
};

module.exports = logger;