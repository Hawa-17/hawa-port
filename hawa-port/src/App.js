import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("Ana Sayfa");

  return (
    <div className="app-background">
      {/* Menü */}
      <nav className="menu">
        {["Ana Sayfa", "Ben Kimim?", "Neler Yapabilirim?", "Portfolyo", "İletişim"].map(
          (item, index) => (
            <button
              key={index}
              className={`menu-item ${activeSection === item ? "active" : ""}`}
              onClick={() => setActiveSection(item)}
            >
              {item}
            </button>
          )
        )}
      </nav>

      {/* Profil Kartı */}
      <div className="card">
        <img
          src={`${process.env.PUBLIC_URL}/heroImage.png`}
          alt="hero"
          className="hero-image"
        />

        {/* İçerik */}
        <div className="card-content">
          {activeSection === "Ana Sayfa" && (
            <>
              <h1 className="name">Havva Nur Akman</h1>
              <h2 className="title">Bilgisayar Mühendisliği Öğrencisi</h2>
              <p className="description">
                Merhaba! Ben Havva Nur. Bilgisayar mühendisliği öğrencisiyim. Şu an için bir
                deneyimim yok fakat front-end alanına büyük bir ilgim var ve kendimi
                geliştirmek istiyorum.
              </p>
            </>
          )}

          {activeSection === "Ben Kimim?" && (
            <>
              <h2 className="section-title">Ben Kimim?</h2>
              <p>
                Yazılım dünyasına ilgi duyan, kendini geliştirmeyi seven ve teknolojiyle iç içe yaşamayı hedefleyen bir mühendislik öğrencisiyim.
              </p>
            </>
          )}

          {activeSection === "Neler Yapabilirim?" && (
            <>
              <h3 className="section-title">İlgi Alanlarım</h3>
              <ul className="skills">
                <li>HTML, CSS, JavaScript, Python, C#</li>
                <li>React.js ile arayüz geliştirme</li>
                <li>Responsive web tasarımı</li>
              </ul>
            </>
          )}

          {activeSection === "Portfolyo" && (
            <>
              <h3 className="section-title">Portfolyo</h3>
              <p>İleride buraya projelerimi ekleyeceğim.</p>
            </>
          )}

          {activeSection === "İletişim" && (
            <>
              <h3 className="section-title">Bana Ulaşın</h3>
              <form className="contact-form">
                <input type="text" placeholder="Adınız" required />
                <input type="email" placeholder="E-posta" required />
                <textarea placeholder="Mesajınız..." rows="4" required></textarea>
                <button type="submit">Gönder</button>
              </form>
            </>
          )}
        </div>

        {/* Butonlar */}
        <div className="buttons">
          <a
            href="https://www.linkedin.com/in/havva-nur-a-3336ab2a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="button linkedin"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/hawa-17"
            target="_blank"
            rel="noopener noreferrer"
            className="button github"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
