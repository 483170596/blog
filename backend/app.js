const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// const expressJWT = require('express-jwt');
// const config = require('./config');
// const userRouter = require('./router/user');
// const userInfoRouter = require('./router/userinfo');
// const { sendErr, globalErrHandler } = require('./router_handler/errh');

//创建express服务器应用
const app = express();

// app.use(sendErr) // 优化错误返回，综合为 sendErr 函数
// app.use(globalErrHandler); // 全局错误处理函数

// 使用morgan中间件记录请求日志
app.use(morgan('combined'));

// 使用CORS全局中间件, 允许跨域请求
app.use(cors());

// 配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件
// app.use(express.urlencoded({ limit: '100mb', extended: false }));

// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
// app.use(expressJWT.expressjwt({ secret: config.jwtSecretKey, algorithms: ["HS256"] }).unless({ path: [/^\/api\//, /^\//] }))

// app.use('/api', userRouter);
// app.use('/my', userInfoRouter); // 路由前缀是 /my, 需要进行身份认证

app.get('/utils/check-network', (req, res) => {
    res.send({
        code: 0,
        message: '测试接口成功',
    });
});
app.listen(5005, '0.0.0.0', () => {
    console.log('服务器启动成功: http://localhost:5005');
})