// there is no module.exports on purpose
// if there is an exports it automatically is run when the app starts
// you only want this code run when you're using this environment

process.env['mode'] = "production";
process.env['port'] = "3000";