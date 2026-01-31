import React from 'react';
import { ArrowUpRight, Truck, Palette, Warehouse } from 'lucide-react';
import './section.css';

import logo from '../../assets/logo.png';
import car from '../../assets/car.png';
import home from '../../assets/home.png';
import m from '../../assets/m.png';
import shop from '../../assets/shop.png';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.png';
import img7 from '../../assets/7.png';
import img8 from '../../assets/8.png';
import img9 from '../../assets/9.png';
import img10 from '../../assets/10.png';

const Section = () => {
  return (
    <div className="main-wrapper">
      <section className="hero-container">
        <header className="header">
          <div className="logo">
             <img src={logo} alt="Ambar Wood Logo" />
          </div>
          <nav className="nav-menu">
            <a href="#catalog">Каталог</a>
            <a href="#about-board">Об амбарной доске</a>
            <a href="#works">Наши работы</a>
            <a href="#about-us">О нас</a>
            <a href="#blog">Блог</a>
            <a href="#contacts">Контакты</a>
          </nav>
          <div className="header-contact">
            <div className="phone-info">
              <span>+7 (821) 550-82-87</span>
              <small>Москва и Санкт-Петербург</small>
            </div>
            <button className="consult-btn">Консультация</button>
          </div>
        </header>

        <div className="hero-banner" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${home})`}}>
          <div className="hero-content">
            <div className="badge-wrapper">
               <div className="badge-text">Красота, созданная природой</div>
            </div>
            <h1>КАЧЕСТВЕННЫЕ <br /> <span>АМБАРНЫЕ ДОСКИ</span> <br /> ОТ ПРОИЗВОДИТЕЛЯ</h1>
            
            <div className="hero-features">
              <div className="f-item"><img src={car} width="25" alt="" /> Быстрая доставка по РФ</div>
              <div className="f-item"><img src={m} width="20" alt="" /> Все оттенки в наличии</div>
              <div className="f-item"><img src={shop} width="20" alt="" /> Шоурумы в Мск и СПб</div>
            </div>

            <div className="hero-btns">
              <button className="btn-gold">Перейти в каталог</button>
              <button className="btn-glass">Рассчитать стоимость</button>
            </div>
          </div>
        </div>
      </section>

      <section className="categories" id="catalog">
        <div className="cat-header">
          <h2>КАТЕГОРИИ <span>ТОВАРОВ</span></h2>
          <button className="all-btn">Все товары →</button>
        </div>

        <div className="bento-grid">
          <div className="card card-1" style={{backgroundImage: `url(${img1})`}}>
            <div className="card-label">Амбарная доска для стен <ArrowUpRight size={18} /></div>
          </div>
          
          <div className="card card-2" style={{backgroundImage: `url(${img2})`}}>
            <div className="card-label">Старая половая доска <ArrowUpRight size={18} /></div>
          </div>
          
          <div className="card card-3" style={{backgroundImage: `url(${img3})`}}>
            <div className="card-label">Двери <ArrowUpRight size={18} /></div>
          </div>
          
          <div className="card card-4" style={{backgroundImage: `url(${img4})`}}>
            <div className="card-label">Старые балки и фальшбалки <ArrowUpRight size={18} /></div>
          </div>
          
          <div className="card card-5" style={{backgroundImage: `url(${img5})`}}>
            <div className="card-label">Мебель из старых лодок <ArrowUpRight size={18} /></div>
          </div>
          
          <div className="card card-6" style={{backgroundImage: `url(${img6})`}}>
            <div className="card-label">Зеркала <ArrowUpRight size={18} /></div>
          </div>
          
          <div className="card card-7" style={{backgroundImage: `url(${img7})`}}>
            <div className="card-label">Стеновые панели <ArrowUpRight size={18} /></div>
          </div>
          
          <div className="card card-8" style={{backgroundImage: `url(${img8})`}}>
            <div className="card-label">Ковры (винтажные) <ArrowUpRight size={18} /></div>
          </div>
          
          <div className="card card-9" style={{backgroundImage: `url(${img9})`}}>
            <div className="card-label">Старинный кирпич <ArrowUpRight size={18} /></div>
          </div>
        </div>
      </section>

      <section className="contact-footer" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${img10})`}} id="contacts">
        <div className="footer-overlay">
          <h2>ЕСТЬ ВОПРОСЫ? <br /> <span>С РАДОСТЬЮ ОТВЕТИМ НА НИХ!</span></h2>
          <form className="form-row">
            <input type="text" placeholder="Ваше имя" required />
            <input type="tel" placeholder="+7 (___) ___ __ __" required />
            <button type="submit" className="submit-btn">Оставить заявку</button>
          </form>
          <p className="footer-phone">Оставьте заявку или позвоните нам: <strong>+7 (821) 550-82-87</strong></p>
        </div>
      </section>
    </div>
  );
};

export default Section;