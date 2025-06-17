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
                    Merhaba! Ben Havva Nur. Bilgisayar mühendisliği öğrencisiyim.Şu an için bir
                    deneyimim yok fakat front-end alanına ilgim var ve kendimi
                    geliştirmek istiyorum.
                  </p>
                </>
            )}

            {activeSection === "Ben Kimim?" && (
                <>
                  <h2 className="section-title">Ben Kimim?</h2>
                  <p>
                    21 yaşındayım ve Balıkesir'de yaşıyorum. Yazılım dünyasına ilgi duyan, kendini geliştirmeyi seven ve teknolojiyle iç içe yaşamayı hedefleyen bir mühendislik öğrencisiyim.
                  </p>
                  <h3 className="section-title">Bana Ulaşın</h3>
                  <a
                      href="mailto:17havva05@gmail.com"
                      className="icon-button"
                      title="Mail Gönder"
                  >
                    <img src={`${process.env.PUBLIC_URL}/gmail.png`} alt="Mail" />

                  </a>

                </>
            )}


            {activeSection === "Neler Yapabilirim?" && (            <>
                  <ul className="skills">
                    <li className="skill-item">
                      <img src={`${process.env.PUBLIC_URL}/html.png`} alt="HTML" />
                      HTML
                    </li>
                    <li className="skill-item">
                      <img src={`${process.env.PUBLIC_URL}/css.png`} alt="CSS" />
                      CSS
                    </li>
                    <li className="skill-item">
                      <img src={`${process.env.PUBLIC_URL}/javascript.png`} alt="JavaScript" />
                      JavaScript
                    </li>
                    <li className="skill-item">
                      <img src={`${process.env.PUBLIC_URL}/python.png`} alt="Python" />
                      Python
                    </li>
                    <li className="skill-item">
                      <img src={`${process.env.PUBLIC_URL}/csrp.png`} alt="C#" />
                      C#
                    </li>
                    <li className="skill-item">
                      <img src={`${process.env.PUBLIC_URL}/react.png`} alt="React" />
                      React.js
                    </li>
                  </ul>


                </>
            )}

            {activeSection === "Portfolyo" && (
                <>
                  <h3 className="section-title">Portfolyo</h3>
                  <p>

                    <a
                        href="https://github.com/hawa-17?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#0077cc", fontWeight: "bold" }}
                    >

                    </a>
                    Veteriner Hasta ve ilaç Kayıt Sistemi
                  </p>
                  <div className="portfolio-item">
                    <a
                        href="https://github.com/Hawa-17/veteriner"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Veteriner Projesini Görüntüle"
                    >
                      <img
                          src={`${process.env.PUBLIC_URL}/pythonfile.png`}
                          alt="Veteriner Projesi"
                          className="project-image"
                          style={{
                            maxWidth: "300px",
                            borderRadius: "12px",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                            cursor: "pointer",
                            marginTop: "20px"
                          }}
                      />
                    </a>
                  </div>
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
              <img src ={`${process.env.PUBLIC_URL}/linkedın.png`}  alt="LinkedIn" />
            </a>
            <a
                href="https://github.com/hawa-17"
                target="_blank"
                rel="noopener noreferrer"
                className="button github"
            >
              <img src ={`${process.env.PUBLIC_URL}/github.png`}  alt="Github" />
            </a>

          </div>
        </div>
      </div>
  );
}

export default App;
