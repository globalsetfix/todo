// Core
import createSagaMiddleware from 'redux-saga';
// Middleware

const dev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'local';
const sagaMiddleWare = createSagaMiddleware();
const middleware = [sagaMiddleWare];

export { dev, middleware, sagaMiddleWare };
