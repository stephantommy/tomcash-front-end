module.exports = {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8080,

    login: 'http://' + (process.env.LOGIN_SERVICE_HOST || 'localhost') + ':' + (process.env.LOGIN_SERVICE_PORT || '3002') + '/api/login',
    cashpointList: 'http://' + (process.env.CASHPOINT_SERVICE_HOST || 'localhost') + ':' + (process.env.CASHPOINT_SERVICE_PORT || '3001') + '/api/cashpoint',
    cashpointAdd: 'http://' + (process.env.CASHPOINT_SERVICE_HOST || 'localhost') + ':' + (process.env.CASHPOINT_SERVICE_PORT || '3001') + '/api/cashpoint/addCashpoint',
    deleteAllCashpoint: 'http://' + (process.env.CASHPOINT_SERVICE_HOST || 'localhost') + ':' + (process.env.CASHPOINT_SERVICE_PORT || '3001') + '/api/cashpoint/deleteAllCashpoint'
}