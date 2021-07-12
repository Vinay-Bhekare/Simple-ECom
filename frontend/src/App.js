import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';


function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Easy2Choice - The Gifting Galore</Link>
          </div>
          <div className="header-links">
            <a href="cart">Cart</a>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  
                   <li> <Link to="/">Dashboard</Link> </li>
                   <li> <Link to="/products">Products</Link> </li>
                   <li> <Link to="/orders" >Orders</Link> </li>
                   <li> <a href="https://vb-designs.ueniweb.com/#message_request" target="_blank">Support </a> </li>
                   <li> <a href="https://vb-designs.ueniweb.com" target="_blank"> VBDesigns™ </a> </li>
                   
                    

                </ul>
              </div>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <h3>Gifting Item Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <li>
              <Link to="/category/Birthday Gifts">Birthday Gifts</Link>
            </li>

            <li>
              <Link to="/category/Anniversary Gifts">Anniversary Gifts</Link>
            </li>

            <li>
              <Link to="/category/Cakes">Cakes</Link>
            </li>

            <li>
              <Link to="/category/Jewellery">Jewellery</Link>
            </li>

            <li>
              <Link to="/category/Perfumes">Perfumes</Link>
            </li>

            <li>
              <Link to="/category/Home Decor and Baskets">Home Decor and Baskets</Link>
            </li>

            <li>
              <Link to="/category/Greeting Cards">Greeting Cards</Link>
            </li>

            <li>
              <Link to="/category/Chocolates and Cookies">Chocolates and Cookies</Link>
            </li>

            <li>
              <Link to="/category/Mugs and Photo Prints">Mugs and Photo Prints</Link>
            </li>

            <li>
              <Link to="/category/Customized Keychains">Customized Keychains</Link>
            </li>



            <li>
              <Link to="/category/Jewellery">Beauty and Personal Care</Link>
            </li>

          
            <li>
              <Link to="/category/Cakes">Flowers and Teddy</Link>
            </li>


            <li>
              <Link to="/category/Anniversary Gifts">Dry Fruits</Link>
            </li>

            <li>
              <Link to="/category/Birthday Gifts">Sweets</Link>
            </li>


            <li>
              <Link to="/category/Perfumes">Magazines</Link>
            </li> 

           

            

          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">All rights and trademarks are reserved to Easy2Choice & VBDesigns™ Partners.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
