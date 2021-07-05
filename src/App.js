import './App.css';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';
import { LoginForm } from './LoginForm';
import { Products } from './Products';
import { CardItem } from './CardItem';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">

      <header className={classNames("header", isLogin && "header--loged")}>
        <div className="header__login-page login-page">
          <div className="login-page__logo">
            <Link to="/">
              Логотип
            </Link>
          </div>

          {isLogin ? (
            <div className="login-page__sign-in">
              <Link to="/products">
                Продукция
              </Link>
            </div>
          ) : (
            <div className="login-page__sign-in">
              <Link to="/login-form">
                Войти в аккаунт
              </Link>
            </div>
          )}
        </div>

        {isLogin && (
          <div className="logout">
            <Link to="/" onClick={() => setIsLogin(false)}>
              Выйти из аккаунта
            </Link>
          </div>
        )}

      </header>

      <main className="main">
        <Switch>
          <Route path="/login-form">
            <LoginForm onLogin={setIsLogin} isLogin={isLogin} />
          </Route>

          <Route path="/products">
            <Products isLogin={isLogin} />
          </Route>

          <Route path="/cardItem">
            <CardItem isLogin={isLogin} />
          </Route>
        </Switch>

      </main>

      <footer className="footer">
      </footer>
    </div>
  );
}

export default App;
