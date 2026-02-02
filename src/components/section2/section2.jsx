import React from 'react';
import './section2.css';

const Section = () => {
  return (
    <div className="landing-container">
      {}
      <section className="projects-section">
        <div className="section-header">
          <h2>РЕАЛИЗОВАЛИ <span className="highlight-text">БОЛЕЕ 500 ПРОЕКТОВ</span></h2>
          <div className="header-buttons">
            <button className="btn-outline">Бесплатный замер</button>
            <button className="btn-outline">Все проекты →</button>
          </div>
        </div>

        <div className="projects-grid">
          <div className="project-card card-1">
            <div className="card-overlay">
              <h3>Квартира в Санкт-Петербурге</h3>
              <a href="#">Подробнее ↗</a>
            </div>
          </div>
          <div className="project-card card-2">
            <div className="card-overlay">
              <h3>Оформление стены</h3>
              <a href="#">Подробнее ↗</a>
            </div>
          </div>
        </div>
        <div className="slider-controls">
           <span className="arrow">←</span>
           <div className="dots">
             <span className="dot active"></span>
             {[...Array(5)].map((_, i) => <span key={i} className="dot"></span>)}
           </div>
           <span className="arrow">→</span>
        </div>
      </section>

      {}
      <section className="youtube-section">
        <div className="section-header">
          <h2>СМОТРИТЕ НАС <span>НА YOUTUBE</span></h2>
          <button className="btn-red">Перейти в канал</button>
        </div>
        <div className="video-placeholder">
          <div className="play-button">▶</div>
          <span className="watermark">AMBARWOOD.RU</span>
        </div>
      </section>

      {}
      <section className="map-section">
        <h2 className="main-title">РАБОТАЕМ <span className="light-text">ПО ВСЕЙ РОССИИ</span></h2>
        
        <div className="location-toggle">
          <p>Выберите интересующий шоурум:</p>
          <div className="toggle-btns">
            <button className="toggle-btn active">Москва</button>
            <button className="toggle-btn">Санкт-Петербург</button>
          </div>
        </div>

        <div className="map-container">
          <div className="map-image">
            {}
            <div className="map-mock">Map View: Тимирязевская, д. 1</div>
          </div>
          <div className="contact-info">
            <h3>Москва</h3>
            <p>ул. Тимирязевская, д. 1, стр. 2</p>
            <p className="phone">+7 (929) 590 82-87 <span className="wa-icon">WP</span></p>
            <a href="mailto:we@ambarwood.ru" className="email">we@ambarwood.ru</a>
            <p className="subtext">По вопросам сотрудничества</p>
            <div className="social-links">
              <span>Подписывайтесь на наши соц.сети:</span>
              <div className="icons">
                <span className="icon-vk">VK</span>
                <span className="icon-yt">YT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <div className="subscription-bar">
        <h3>ОСТАВЬТЕ <span className="light-text">ВАШ E-MAIL</span></h3>
        <p>И будьте в курсе наших <b>секретных акций</b></p>
        <div className="sub-inputs">
          <input type="email" placeholder="Ваш e-mail" />
          <button className="btn-gold">Подписаться</button>
        </div>
      </div>

      {}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>AMBAR WOOD</h2>
            <p>© 2023. Все права защищены</p>
          </div>
          
          <div className="footer-links">
            <h4>МЕНЮ</h4>
            <ul>
              <li>Каталог</li>
              <li>Об амбарной доске</li>
              <li>Наши работы</li>
              <li>О нас</li>
              <li>Контакты</li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>ИНФОРМАЦИЯ</h4>
            <ul>
              <li>Политика конфиденциальности</li>
              <li>Публичная оферта</li>
              <li>Доставка</li>
              <li>Оплата</li>
            </ul>
          </div>

          <div className="footer-contacts">
            <h4>КОНТАКТЫ</h4>
            <p>Москва, ул. Тимирязевская, д.1, стр.2</p>
            <p>Санкт-Петербург, ул. Швецова, д.41К</p>
            <p className="footer-phone">+7 (929) 590 82-87</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Section;