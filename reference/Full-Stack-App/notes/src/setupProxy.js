const { createProxyMiddleware } = require('http-proxy-middleware'); //Create Prox Server

module.exports = function (app) { //Add Proxy Server
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:3001',
            changeOrigin: true,
        })
    );
};
