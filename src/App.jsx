import React, { useState, useEffect, useRef } from "react";
import "./style.css";

// --- ÍCONES SVG INLINE ---
const IconShield = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IconX = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF007F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const IconHeart = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>;
const IconAlert = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
const IconZap = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF007F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
const IconRepeat = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF007F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>;
const IconBot = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF007F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"></path><rect x="4" y="8" width="16" height="12" rx="2" ry="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>;
const IconLock = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF007F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>;
const IconCheckCircle = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
const IconCircle = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>;

export default function App() {
  const [theme, setTheme] = useState("theme-dark");
  const [navStyle, setNavStyle] = useState({ bg: "rgba(10,10,10,0.6)", color: "#FFFFFF" });

  // --- INTERSECTION OBSERVER CORES DO BACKROUND ---
  useEffect(() => {
    const handleScroll = () => {
      const scrollRatio = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      
      if (scrollRatio < 0.20) {
        setTheme("theme-dark");
        setNavStyle({ bg: "rgba(10,10,10,0.6)", color: "#FFFFFF" });
      } else if (scrollRatio >= 0.20 && scrollRatio < 0.65) {
        setTheme("theme-tech");
        setNavStyle({ bg: "rgba(8,15,38,0.7)", color: "#FFFFFF" });
      } else {
        setTheme("theme-light");
        setNavStyle({ bg: "rgba(255,255,255,0.8)", color: "#0A0A0A" });
      }

      // Efeito de reveal nas seções
      document.querySelectorAll(".reveal").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add("active");
        }
      });
    };

    setTimeout(handleScroll, 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={theme}>
      {/* MENU SUPERIOR */}
      <nav className="navbar" style={{ backgroundColor: navStyle.bg, color: navStyle.color, borderColor: theme === "theme-light" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)" }}>
        <div className="max-width-container nav-container">
          <a href="#hero" className="nav-logo" style={{ color: navStyle.color }}>
            <IconShield /> SMART SAVE
          </a>
          <div className="nav-links">
            <a href="#problema" className="nav-link" style={{ color: navStyle.color }}>Problema</a>
            <a href="#solucoes" className="nav-link" style={{ color: navStyle.color }}>Soluções</a>
            <a href="#smart-save" className="nav-link" style={{ color: navStyle.color }}>Smart Save</a>
            <a href="#roadmap" className="nav-link" style={{ color: navStyle.color }}>Roadmap</a>
          </div>
          <a href="#cta" className="btn-cta" style={{ borderRadius: "50px", padding: "10px 20px" }}>Manifesto</a>
        </div>
      </nav>

      {/* SEÇÃO HERO */}
      <section id="hero" className="noise-overlay">
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1753884352272-ab20357a4971?crop=entropy&cs=srgb&fm=jpg&q=85" alt="Background" />
        </div>
        <div className="max-width-container grid-12">
          <div className="col-8">
            <p className="section-label" style={{ color: "rgba(255,255,255,0.6)" }}>Projeto Smart Save · Tecnologia que protege vidas</p>
            <h1>A cada <span className="highlight">06 horas</span><br />uma mulher é<br />morta no Brasil.</h1>
            <p className="hero-desc">Medidas protetivas falham. Botões do pânico chegam tarde. Tornozeleiras alertam apenas o Estado. Construímos uma bolha digital de proteção que age <strong style={{ color: "white" }}>antes</strong> da agressão acontecer.</p>
            <div style={{ marginTop: "64px", display: "flex", alignItems: "center", gap: "12px", color: "rgba(255,255,255,0.4)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px" }}>
              <span style={{ fontSize: "16px" }}>+</span> Role para entender
            </div>
          </div>
          <div className="col-4 hero-stat">
            <p className="stat-big-number">+1.450</p>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", marginTop: "12px", lineHeight: "1.6" }}>Feminicídios registrados em 2024. Muitos deles cometidos por agressores que <em>já tinham</em> medida protetiva.</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO PROBLEMA */}
      <section id="problema" className="reveal noise-overlay">
        <div className="max-width-container">
          <p className="section-label">01 · O Problema</p>
          <h2 style={{ fontSize: "56px", fontWeight: 900, maxWidth: "800px", lineHeight: 1.1, marginBottom: "32px" }}>
            A violência de gênero é<br/><span style={{ color: "rgba(255,255,255,0.4)" }}>estrutural, histórica</span><br/>e ainda <span className="highlight">invisível</span> ao sistema.
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.7)", lineHeight: "1.8", maxWidth: "800px" }}>
            A Lei Maria da Penha completa quase 20 anos, mas a fiscalização das medidas protetivas permanece falha. Agressores violam perímetros mesmo usando tornozeleira eletrônica. Mulheres descobrem o perigo no momento em que ele já está na porta.
          </p>
          <div className="grid-3" style={{ marginTop: "96px" }}>
            <div className="stat-box"><h3>70%</h3><p style={{ opacity: 0.6, marginTop: "24px", fontSize: "16px" }}>dos feminicídios ocorrem dentro de casa</p></div>
            <div className="stat-box"><h3>60%</h3><p style={{ opacity: 0.6, marginTop: "24px", fontSize: "16px" }}>das vítimas já haviam denunciado o agressor</p></div>
            <div className="stat-box"><h3>1 em 4</h3><p style={{ opacity: 0.6, marginTop: "24px", fontSize: "16px" }}>mulheres brasileiras já sofreu violência</p></div>
          </div>
        </div>
      </section>

      {/* SEÇÃO SOLUÇÕES */}
      <section id="solucoes" className="reveal">
        <div className="max-width-container">
          <p className="section-label">02 · O que já existe</p>
          <h2 style={{ fontSize: "56px", fontWeight: 900, marginBottom: "80px", lineHeight: 1.1 }}>Soluções atuais reagem.<br /><span style={{ color: "rgba(255,255,255,0.4)" }}>Smart Save antecipa.</span></h2>
          <div className="grid-cards">
            <div className="card">
              <div className="card-header"><span style={{ color: "rgba(255,255,255,0.8)", opacity: 0.8 }}><IconAlert /></span><span className="card-badge">Reativo</span></div>
              <h4 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "16px" }}>Botão do Pânico</h4>
              <p style={{ opacity: 0.6, fontSize: "14px", lineHeight: "1.6", marginBottom: "32px" }}>Exige que a vítima perceba a ameaça e tenha tempo/lucidez de acioná-lo. Em 70% dos casos, o agressor já está a poucos metros.</p>
              <div className="card-fail"><IconX /> <p>Chega tarde.</p></div>
            </div>
            <div className="card">
              <div className="card-header"><span style={{ color: "rgba(255,255,255,0.8)", opacity: 0.8 }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 16v-2.38C4 11.5 5.11 9.52 7 8.33V5a3 3 0 0 1 6 0v3.33c1.89 1.19 3 3.17 3 5.29V16"/><path d="M4 16h12"/><path d="M8 20h4"/><path d="M10 16v4"/></svg></span><span className="card-badge">Unilateral</span></div>
              <h4 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "16px" }}>Tornozeleira Eletrônica</h4>
              <p style={{ opacity: 0.6, fontSize: "14px", lineHeight: "1.6", marginBottom: "32px" }}>Alerta primeiro o Estado e depois a vítima. O tempo entre a violação do perímetro e a resposta pode chegar a horas.</p>
              <div className="card-fail"><IconX /> <p>Resposta lenta.</p></div>
            </div>
            <div className="card">
              <div className="card-header"><span style={{ color: "rgba(255,255,255,0.8)", opacity: 0.8 }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg></span><span className="card-badge">Apoio</span></div>
              <h4 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "16px" }}>Aplicativo PenhaS</h4>
              <p style={{ opacity: 0.6, fontSize: "14px", lineHeight: "1.6", marginBottom: "32px" }}>Excelente para suporte psicossocial e rede de acolhimento, mas não se conecta ao GPS do agressor. Não previne, acompanha.</p>
              <div className="card-fail"><IconX /> <p>Sem integração com hardware.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO SMART SAVE */}
      <section id="smart-save" className="reveal">
        <div className="max-width-container grid-12">
          <div className="col-7">
            <p className="section-label" style={{ display: "flex", alignItems: "center", gap: "8px" }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg> 03 · A Solução</p>
            <h2 style={{ fontSize: "56px", fontWeight: 900, lineHeight: 1.1, marginBottom: "40px" }}>Uma <span className="highlight">bolha digital</span><br/> de proteção <br/>em tempo real.</h2>
            <div style={{ opacity: 0.8, marginBottom: "48px", fontSize: "18px", lineHeight: "1.8", maxWidth: "600px" }}>
              <p style={{ marginBottom: "16px" }}>Smart Save é uma plataforma de monitoramento inteligente que cruza, 24 horas por dia, os dados de geolocalização do <strong>smartphone/smartwatch da vítima</strong> com a <strong>tornozeleira eletrônica do agressor</strong>.</p>
              <p>Se a distância mínima de segurança é violada, o sistema emite alertas discretos para a vítima — <strong>antes do contato físico</strong> — e aciona as autoridades imediatamente, sem depender de a vítima estar lúcida, livre ou com o celular nas mãos.</p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {["Proativo", "Bidirecional 24/7", "Automático", "Discreto"].map(tag => (
                <span key={tag} style={{ border: "1px solid rgba(255,0,127,0.4)", color: "#FF007F", borderRadius: "50px", padding: "8px 16px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px" }}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="col-5">
            <div className="aspect-square-box">
              <img className="map-bg-img" src="https://images.unsplash.com/photo-1634743556192-d19f0c69ff3a?crop=entropy&cs=srgb&fm=jpg&q=85" alt="Map View" />
              <div className="radar-overlay" style={{ background: "linear-gradient(to top right, rgba(255,0,127,0.3), transparent)" }}>
                <div className="center-node"></div>
              </div>
              <div className="map-floating-panel">
                <p style={{ fontSize: "10px", opacity: 0.5, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "4px" }}>Raio ativo</p>
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Bolha 500m</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DEMONSTRAÇÃO INTERATIVA (BUBBLESIM) */}
      <BubbleSimulation theme={theme} />

      {/* SEÇÃO COMO FUNCIONA */}
      <section id="como-funciona" className="reveal">
        <div className="max-width-container">
            <div style={{ maxWidth: "800px", marginBottom: "80px" }}>
                <p className="section-label">04 · Como funciona</p>
                <h2 style={{ fontSize: "56px", fontWeight: 900, lineHeight: 1.1 }}>Quatro passos para<br />transformar a fiscalização<br />em <span className="highlight">prevenção</span>.</h2>
            </div>
            
            <div className="grid-2-col" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
                <div className="step-card" style={{ padding: "40px", border: theme === "theme-light" ? "1px solid rgba(0,0,0,0.1)" : "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", transition: "all 0.3s" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "32px" }}>
                        <span style={{ fontSize: "56px", fontWeight: 900, color: "rgba(255,0,127,0.3)", lineHeight: 1, letterSpacing: "-2px" }}>01</span>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ opacity: 0.7 }}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                    </div>
                    <h3 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "12px" }}>Cadastro seguro</h3>
                    <p style={{ opacity: 0.7, fontSize: "16px", lineHeight: "1.6" }}>Vítima protegida por medida judicial cadastra seu dispositivo (smartphone ou smartwatch). O sistema é vinculado à tornozeleira do agressor.</p>
                </div>
                
                <div className="step-card" style={{ padding: "40px", border: theme === "theme-light" ? "1px solid rgba(0,0,0,0.1)" : "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", transition: "all 0.3s" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "32px" }}>
                        <span style={{ fontSize: "56px", fontWeight: 900, color: "rgba(255,0,127,0.3)", lineHeight: 1, letterSpacing: "-2px" }}>02</span>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ opacity: 0.7 }}><path d="M12 2v20"/><path d="M2 12h20"/><circle cx="12" cy="12" r="10"/></svg>
                    </div>
                    <h3 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "12px" }}>Monitoramento contínuo</h3>
                    <p style={{ opacity: 0.7, fontSize: "16px", lineHeight: "1.6" }}>GPS cruzado a cada segundo. Big Data e IoT processam dados em nuvem, mantendo a bolha digital ativa 24 horas por dia.</p>
                </div>

                <div className="step-card" style={{ padding: "40px", border: theme === "theme-light" ? "1px solid rgba(0,0,0,0.1)" : "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", transition: "all 0.3s" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "32px" }}>
                        <span style={{ fontSize: "56px", fontWeight: 900, color: "rgba(255,0,127,0.3)", lineHeight: 1, letterSpacing: "-2px" }}>03</span>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ opacity: 0.7 }}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                    </div>
                    <h3 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "12px" }}>Alerta antecipado</h3>
                    <p style={{ opacity: 0.7, fontSize: "16px", lineHeight: "1.6" }}>Quando o agressor se aproxima do raio de proteção, a vítima recebe um aviso silencioso, mesmo antes de detectar o perigo.</p>
                </div>

                <div className="step-card" style={{ padding: "40px", border: theme === "theme-light" ? "1px solid rgba(0,0,0,0.1)" : "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", transition: "all 0.3s" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "32px" }}>
                        <span style={{ fontSize: "56px", fontWeight: 900, color: "rgba(255,0,127,0.3)", lineHeight: 1, letterSpacing: "-2px" }}>04</span>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ opacity: 0.7 }}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                    </div>
                    <h3 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "12px" }}>Resposta automática</h3>
                    <p style={{ opacity: 0.7, fontSize: "16px", lineHeight: "1.6" }}>Polícia, Judiciário e rede de apoio são acionados automaticamente. O tempo de resposta cai de horas para segundos.</p>
                </div>
            </div>
        </div>
      </section>

      {/* SEÇÃO DIFERENCIAIS */}
      <section id="diferenciais" className="reveal">
        <div className="max-width-container">
          <div style={{ maxWidth: "800px", marginBottom: "80px" }}>
            <p className="section-label">05 · Diferenciais</p>
            <h2 style={{ fontSize: "56px", fontWeight: 900, lineHeight: 1.1 }}>O que muda<br />quando a tecnologia<br />chega <span className="highlight">antes</span>.</h2>
          </div>
          <div className="grid-cards" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            <div className="card diff-card" style={{ padding: "32px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "rgba(255,0,127,0.1)", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "24px" }}><IconZap /></div>
                <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "12px" }}>Proativo</h3>
                <p style={{ opacity: 0.7, fontSize: "14px", lineHeight: "1.6" }}>Antecipa o risco. Age antes do contato físico — não depois do impacto.</p>
            </div>
            <div className="card diff-card" style={{ padding: "32px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "rgba(255,0,127,0.1)", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "24px" }}><IconRepeat /></div>
                <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "12px" }}>Bidirecional 24/7</h3>
                <p style={{ opacity: 0.7, fontSize: "14px", lineHeight: "1.6" }}>Vigia agressor e vítima ao mesmo tempo, sem pausa, em qualquer lugar.</p>
            </div>
            <div className="card diff-card" style={{ padding: "32px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "rgba(255,0,127,0.1)", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "24px" }}><IconBot /></div>
                <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "12px" }}>Automação</h3>
                <p style={{ opacity: 0.7, fontSize: "14px", lineHeight: "1.6" }}>Tira do ombro da vítima a responsabilidade de pedir socorro em momentos de pânico.</p>
            </div>
            <div className="card diff-card" style={{ padding: "32px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "rgba(255,0,127,0.1)", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "24px" }}><IconLock /></div>
                <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "12px" }}>Independência</h3>
                <p style={{ opacity: 0.7, fontSize: "14px", lineHeight: "1.6" }}>Não depende de ação manual: protege mesmo se a vítima estiver dormindo, ferida ou desligada do app.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO ROADMAP */}
      <section id="roadmap" className="reveal">
        <div className="max-width-container">
          <p className="section-label">06 · Roadmap</p>
          <h2 style={{ fontSize: "56px", fontWeight: 900, marginBottom: "80px", lineHeight: 1.1 }}>Construindo o futuro,<br /> <span className="highlight">um marco por vez.</span></h2>
          <div className="roadmap-timeline">
            
            <div className="roadmap-row" style={{ alignItems: "center" }}>
              <div className="roadmap-node roadmap-node-done" style={{ backgroundColor: "#FF007F", color: "white" }}><IconCheckCircle /></div>
              <div style={{ textAlign: "right", paddingRight: "48px" }}>
                <span style={{ color: "#FF007F", fontSize: "12px", fontWeight: "bold", letterSpacing: "2px", textTransform: "uppercase" }}>Fase 01 · Em desenvolvimento</span>
                <h3 style={{ fontSize: "36px", fontWeight: 900, marginTop: "8px", marginBottom: "16px" }}>MVP</h3>
                <ul style={{ listStyle: "none", opacity: 0.7, fontSize: "16px", lineHeight: 1.8 }}>
                    <li>Cadastro de vítimas</li>
                    <li>Geolocalização contínua</li>
                    <li>Alertas básicos via push</li>
                </ul>
              </div>
              <div></div> {/* Empty for grid layout */}
            </div>

            <div className="roadmap-row" style={{ alignItems: "center" }}>
              <div className="roadmap-node roadmap-node-pending" style={{ backgroundColor: "transparent", border: theme === "theme-light" ? "2px solid rgba(0,0,0,0.2)" : "2px solid rgba(255,255,255,0.2)", color: theme === "theme-light" ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)" }}><IconCircle /></div>
              <div></div> {/* Empty for grid layout */}
              <div style={{ paddingLeft: "48px" }}>
                <span style={{ color: "#FF007F", fontSize: "12px", fontWeight: "bold", letterSpacing: "2px", textTransform: "uppercase" }}>Fase 02 · Próximo passo</span>
                <h3 style={{ fontSize: "36px", fontWeight: 900, marginTop: "8px", marginBottom: "16px" }}>Integração de hardware</h3>
                <ul style={{ listStyle: "none", opacity: 0.7, fontSize: "16px", lineHeight: 1.8 }}>
                    <li>Conexão com tornozeleiras eletrônicas</li>
                    <li>Infraestrutura em nuvem (Big Data)</li>
                    <li>API para órgãos públicos</li>
                </ul>
              </div>
            </div>

            <div className="roadmap-row" style={{ alignItems: "center" }}>
              <div className="roadmap-node roadmap-node-pending" style={{ backgroundColor: "transparent", border: theme === "theme-light" ? "2px solid rgba(0,0,0,0.2)" : "2px solid rgba(255,255,255,0.2)", color: theme === "theme-light" ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)" }}><IconCircle /></div>
              <div style={{ textAlign: "right", paddingRight: "48px" }}>
                <span style={{ color: "#FF007F", fontSize: "12px", fontWeight: "bold", letterSpacing: "2px", textTransform: "uppercase" }}>Fase 03 · Validação institucional</span>
                <h3 style={{ fontSize: "36px", fontWeight: 900, marginTop: "8px", marginBottom: "16px" }}>Piloto regional</h3>
                <ul style={{ listStyle: "none", opacity: 0.7, fontSize: "16px", lineHeight: 1.8 }}>
                    <li>Parceria com Judiciário e Segurança Pública</li>
                    <li>Testes em uma capital</li>
                    <li>Métricas de impacto social</li>
                </ul>
              </div>
              <div></div>
            </div>

            <div className="roadmap-row" style={{ alignItems: "center" }}>
              <div className="roadmap-node roadmap-node-pending" style={{ backgroundColor: "transparent", border: theme === "theme-light" ? "2px solid rgba(0,0,0,0.2)" : "2px solid rgba(255,255,255,0.2)", color: theme === "theme-light" ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)" }}><IconCircle /></div>
              <div></div>
              <div style={{ paddingLeft: "48px" }}>
                <span style={{ color: "#FF007F", fontSize: "12px", fontWeight: "bold", letterSpacing: "2px", textTransform: "uppercase" }}>Fase 04 · Visão de longo prazo</span>
                <h3 style={{ fontSize: "36px", fontWeight: 900, marginTop: "8px", marginBottom: "16px" }}>Escala nacional</h3>
                <ul style={{ listStyle: "none", opacity: 0.7, fontSize: "16px", lineHeight: 1.8 }}>
                    <li>Integração com Lei Maria da Penha digital</li>
                    <li>Política pública nacional</li>
                    <li>Modelo replicável para LATAM</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO TECNOLOGIA */}
      <section id="tecnologias" className="reveal">
        <div className="max-width-container">
          <p className="section-label">07 · Tecnologia</p>
          <h2 style={{ fontSize: "56px", fontWeight: 900, marginBottom: "80px", lineHeight: 1.1 }}>Construído com o que<br />há de mais avançado.</h2>
          <div className="tech-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            <div className="tech-item"><h4 style={{ fontSize: "32px", fontWeight: 900, marginBottom: "12px", letterSpacing: "-1px" }}>IoT</h4><p style={{ fontSize: "14px", opacity: 0.7, lineHeight: 1.6 }}>Comunicação direta com tornozeleiras e dispositivos vestíveis.</p></div>
            <div className="tech-item"><h4 style={{ fontSize: "32px", fontWeight: 900, marginBottom: "12px", letterSpacing: "-1px" }}>Sistemas Ciberfísicos</h4><p style={{ fontSize: "14px", opacity: 0.7, lineHeight: 1.6 }}>Integração entre hardware (sensores) e software de decisão.</p></div>
            <div className="tech-item"><h4 style={{ fontSize: "32px", fontWeight: 900, marginBottom: "12px", letterSpacing: "-1px" }}>Big Data</h4><p style={{ fontSize: "14px", opacity: 0.7, lineHeight: 1.6 }}>Processamento contínuo de geolocalização e detecção de padrões.</p></div>
            <div className="tech-item"><h4 style={{ fontSize: "32px", fontWeight: 900, marginBottom: "12px", letterSpacing: "-1px" }}>Cloud</h4><p style={{ fontSize: "14px", opacity: 0.7, lineHeight: 1.6 }}>Infraestrutura escalável, segura e disponível 24/7.</p></div>
            <div className="tech-item"><h4 style={{ fontSize: "32px", fontWeight: 900, marginBottom: "12px", letterSpacing: "-1px" }}>Machine Learning</h4><p style={{ fontSize: "14px", opacity: 0.7, lineHeight: 1.6 }}>Detecção preditiva de comportamento de risco do agressor.</p></div>
            <div className="tech-item"><h4 style={{ fontSize: "32px", fontWeight: 900, marginBottom: "12px", letterSpacing: "-1px" }}>Scrum/Kanban</h4><p style={{ fontSize: "14px", opacity: 0.7, lineHeight: 1.6 }}>Entregas incrementais e ciclos curtos para validação com instituições.</p></div>
          </div>
        </div>
      </section>

      {/* SEÇÃO FINAL (CLOSING/CTA) */}
      <section id="cta" className="reveal" style={{ paddingBottom: "160px" }}>
        <div className="max-width-container grid-12" style={{ alignItems: "center" }}>
          <div className="col-7">
            <p className="section-label">Manifesto · Smart Save</p>
            <h2 style={{ fontSize: "72px", fontWeight: 900, lineHeight: 0.95, marginBottom: "32px", letterSpacing: "-3px" }}>Tecnologia que<br />devolve a <span className="highlight">liberdade.</span></h2>
            <p style={{ opacity: 0.75, margin: "0 0 40px 0", fontSize: "20px", lineHeight: "1.6", maxWidth: "600px" }}>Nenhuma mulher deveria viver olhando para trás. O Smart Save existe para que ela possa voltar a olhar para frente — com o sistema vigiando por ela.</p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a href="#smart-save" className="btn-cta" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "16px 32px", fontSize: "14px", boxShadow: "0 8px 32px rgba(255,0,127,0.3)", borderRadius: "50px" }}>
                    Conheça o projeto <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
                <a href="#simulacao" className="btn-cta-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "12px", padding: "16px 32px", border: "2px solid currentColor", borderRadius: "50px", fontSize: "14px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", textDecoration: "none", color: "inherit" }}>
                    Ver simulação
                </a>
            </div>
          </div>
          <div className="col-5">
            <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: "24px", overflow: "hidden" }}>
                <img src="https://images.unsplash.com/photo-1583719231629-b4b1bf6a4f35?crop=entropy&cs=srgb&fm=jpg&q=85" alt="Liberdade feminina" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(255,0,127,0.4), transparent)", mixBlendMode: "multiply" }}></div>
                <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px", backdropFilter: "blur(20px)", backgroundColor: "rgba(255,255,255,0.7)", borderRadius: "16px", padding: "20px", boxShadow: "0 8px 32px rgba(255,0,127,0.15)", color: "#1E2022" }}>
                    <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "2.5px", color: "#FF007F", fontWeight: "bold", marginBottom: "4px" }}>+1.450 vidas</p>
                    <p style={{ fontSize: "20px", fontWeight: 900, lineHeight: 1.1 }}>Cada uma delas merecia chegar até aqui.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer style={{ backgroundColor: theme === "theme-light" ? "#FFFFFF" : "#FFFFFF", color: "#1E2022", padding: "64px 0" }}>
        <div className="max-width-container">
            <div className="grid-12" style={{ alignItems: "flex-start", marginBottom: "64px", gap: "48px" }}>
                <div className="col-5">
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 900, fontSize: "20px", marginBottom: "16px", letterSpacing: "-0.5px" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF007F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        SMART SAVE
                    </div>
                    <p style={{ fontSize: "14px", color: "#52525B", lineHeight: "1.6", maxWidth: "400px" }}>
                        Plataforma de monitoramento inteligente que cria uma bolha digital de proteção em tempo real para mulheres com medida protetiva.
                    </p>
                </div>
                <div className="col-3">
                    <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "2.5px", fontWeight: "bold", color: "#A1A1AA", marginBottom: "16px" }}>Projeto</p>
                    <ul style={{ listStyle: "none", fontSize: "14px", lineHeight: "2.5" }}>
                        <li><a href="#problema" style={{ color: "inherit", textDecoration: "none" }}>O problema</a></li>
                        <li><a href="#smart-save" style={{ color: "inherit", textDecoration: "none" }}>A solução</a></li>
                        <li><a href="#roadmap" style={{ color: "inherit", textDecoration: "none" }}>Roadmap</a></li>
                    </ul>
                </div>
                <div className="col-4">
                    <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "2.5px", fontWeight: "bold", color: "#A1A1AA", marginBottom: "16px" }}>Emergência</p>
                    <ul style={{ listStyle: "none", fontSize: "14px", lineHeight: "2.5" }}>
                        <li><strong style={{ color: "#FF007F" }}>190</strong> · Polícia Militar</li>
                        <li><strong style={{ color: "#FF007F" }}>180</strong> · Central de Atendimento à Mulher</li>
                        <li><strong style={{ color: "#FF007F" }}>181</strong> · Disque Denúncia</li>
                    </ul>
                </div>
            </div>
            
            <div style={{ borderTop: "1px solid #E4E4E7", paddingTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px", fontSize: "12px", color: "#71717A" }}>
                <p>© 2026 Smart Save · Projeto acadêmico</p>
                <p>Construído com tecnologia. Movido por urgência.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}

// --- SUBCOMPONENTE DE SIMULAÇÃO RECONSTRUÍDO COM JS PURO ---
function BubbleSimulation({ theme }) {
  const [aggressor, setAggressor] = useState({ x: 20, y: 75 });
  const [auto, setAuto] = useState(true);
  const containerRef = useRef(null);

  const victim = { x: 50, y: 50 };
  const radius = 28; // Percentual no canvas

  const dx = aggressor.x - victim.x;
  const dy = aggressor.y - victim.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const isViolated = distance < radius;
  const meters = Math.max(0, Math.round((distance / radius) * 500));

  useEffect(() => {
    if (!auto) return;
    let frame;
    let time = 0;
    const run = () => {
      time += 0.006;
      const wave = (Math.sin(time) + 1) / 2;
      setAggressor({
        x: 20 + wave * 32,
        y: 75 - wave * 28
      });
      frame = requestAnimationFrame(run);
    };
    frame = requestAnimationFrame(run);
    return () => cancelAnimationFrame(frame);
  }, [auto]);

  const handlePointerMove = (e) => {
    if (!containerRef.current) return;
    setAuto(false);
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    const posX = ((clientX - rect.left) / rect.width) * 100;
    const posY = ((clientY - rect.top) / rect.height) * 100;
    
    setAggressor({
      x: Math.max(0, Math.min(100, posX)),
      y: Math.max(0, Math.min(100, posY))
    });
  };

  return (
    <section id="simulacao" className="reveal">
      <div className="max-width-container">
        <div style={{ textAlign: "center", marginBottom: "64px", maxWidth: "800px", margin: "0 auto 64px auto" }}>
          <p className="section-label">Demonstração Interativa</p>
          <h2 style={{ fontSize: "56px", fontWeight: 900, lineHeight: 1.05, marginBottom: "24px" }}>Veja a bolha em ação.</h2>
          <p style={{ opacity: 0.7, fontSize: "18px", lineHeight: "1.6" }}>Arraste o ponto preto (agressor) e observe como a bolha digital reage. Quando o perímetro é violado, alertas são disparados automaticamente.</p>
        </div>

        <div className="grid-12" style={{ alignItems: "stretch" }}>
          <div className="col-8">
            <div ref={containerRef} onMouseMove={handlePointerMove} onTouchMove={handlePointerMove} className="simulation-viewport" style={{ background: theme === "theme-light" ? "radial-gradient(circle at 30% 20%, rgba(255,0,127,0.03), transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,0,127,0.02), transparent 50%)" : "radial-gradient(circle at 30% 20%, rgba(255,0,127,0.08), transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,0,127,0.06), transparent 50%)", backgroundColor: theme === "theme-light" ? "rgba(0,0,0,0.02)" : "rgba(127,127,127,0.05)" }}>
              
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.2 }}>
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* Linha guia de conexão */}
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
                <line x1={`${victim.x}%`} y1={`${victim.y}%`} x2={`${aggressor.x}%`} y2={`${aggressor.y}%`} stroke={isViolated ? "#FF007F" : (theme === "theme-light" ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.4)")} strokeWidth="1.5" strokeDasharray="4 4" />
              </svg>

              {/* Raio Dinâmico da Bolha */}
              <div className="bubble-perimeter" style={{
                left: `${victim.x}%`, top: `${victim.y}%`,
                width: `${radius * 2}%`, height: `${radius * 2}%`,
                border: isViolated ? "2px solid #FF007F" : "2px dashed rgba(255, 0, 127, 0.5)",
                background: isViolated ? "radial-gradient(circle, rgba(255,0,127,0.25), rgba(255,0,127,0.05))" : "radial-gradient(circle, rgba(255,0,127,0.15), rgba(255,0,127,0.02))",
                boxShadow: isViolated ? "0 0 60px rgba(255,0,127,0.4)" : "none"
              }} />

              {/* Pulsing rings on victim */}
              <div style={{ position: "absolute", left: `${victim.x}%`, top: `${victim.y}%`, width: "10%", height: "10%", borderRadius: "50%", transform: "translate(-50%, -50%)", border: "2px solid rgba(255,0,127,0.6)", pointerEvents: "none", animation: "pulse-radar 3s linear infinite" }}></div>

              {/* Vítima */}
              <div className="marker" style={{ left: `${victim.x}%`, top: `${victim.y}%` }}>
                <div className="marker-icon-wrapper" style={{ backgroundColor: "#FF007F", boxShadow: "0 0 30px rgba(255,0,127,0.6)" }}><IconHeart /></div>
                <p className="marker-label">Vítima</p>
              </div>

              {/* Agressor */}
              <div className="marker" style={{ left: `${aggressor.x}%`, top: `${aggressor.y}%`, transition: auto ? "none" : "left 0.1s ease, top 0.1s ease" }}>
                <div className="marker-icon-wrapper" style={{ backgroundColor: isViolated ? "#DC2626" : (theme === "theme-light" ? "#1E2022" : "#27272A"), boxShadow: isViolated ? "0 0 30px rgba(220,38,38,0.7)" : (theme === "theme-light" ? "none" : "0 0 0 1px rgba(255,255,255,0.2)") }}><IconAlert /></div>
                <p className="marker-label">Agressor</p>
              </div>

              {auto && (
                 <div style={{ position: "absolute", top: "16px", left: "16px", fontSize: "10px", textTransform: "uppercase", letterSpacing: "2.5px", fontWeight: "bold", opacity: 0.6, backdropFilter: "blur(12px)", backgroundColor: theme === "theme-light" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)", padding: "6px 12px", borderRadius: "50px" }}>
                   Modo automático · interaja para controlar
                 </div>
              )}
            </div>
          </div>

          <div className="col-4" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div className="side-status-panel" style={{ borderColor: isViolated ? "#DC2626" : (theme === "theme-light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"), backgroundColor: isViolated ? "rgba(220,38,38,0.1)" : "" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "2.5px", fontWeight: "bold", opacity: 0.6 }}>STATUS</span>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: isViolated ? "#DC2626" : "#10B981", animation: isViolated ? "pulse-radar 1s infinite" : "none" }}></span>
              </div>
              <h3 style={{ fontSize: "24px", fontWeight: 900, color: isViolated ? "#DC2626" : "inherit" }}>
                {isViolated ? "PERÍMETRO VIOLADO" : "ÁREA SEGURA"}
              </h3>
              <p style={{ fontSize: "14px", marginTop: "8px", opacity: 0.6 }}>Distância: <strong>{meters}m</strong> · Raio: 500m</p>
            </div>

            <div className="side-status-panel">
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF007F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg>
                    <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "2.5px", fontWeight: "bold", opacity: 0.6 }}>Alertas em tempo real</span>
                </div>
                <ul style={{ listStyle: "none", fontSize: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <span style={{ color: isViolated ? "#DC2626" : "inherit", opacity: isViolated ? 1 : 0.3 }}><IconShield /></span>
                        <span style={{ opacity: isViolated ? 1 : 0.5 }}>Notificação discreta enviada à vítima</span>
                    </li>
                    <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <span style={{ color: isViolated ? "#DC2626" : "inherit", opacity: isViolated ? 1 : 0.3 }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg></span>
                        <span style={{ opacity: isViolated ? 1 : 0.5 }}>Polícia Militar acionada automaticamente</span>
                    </li>
                    <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <span style={{ color: isViolated ? "#DC2626" : "inherit", opacity: isViolated ? 1 : 0.3 }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></span>
                        <span style={{ opacity: isViolated ? 1 : 0.5 }}>Judiciário notificado (registro automático)</span>
                    </li>
                </ul>
            </div>

            <button onClick={() => { setAuto(true); setAggressor({ x: 20, y: 75 }); }} className="btn-cta-secondary" style={{ width: "100%", padding: "12px 0", border: "1px solid #FF007F", backgroundColor: "transparent", color: "#FF007F", cursor: "pointer", borderRadius: "50px", textTransform: "uppercase", fontSize: "12px", fontWeight: "bold", letterSpacing: "2px", transition: "all 0.3s" }} onMouseEnter={(e) => { e.target.style.backgroundColor = "#FF007F"; e.target.style.color = "white"; }} onMouseLeave={(e) => { e.target.style.backgroundColor = "transparent"; e.target.style.color = "#FF007F"; }}>Resetar simulação</button>
          </div>
        </div>
      </div>
    </section>
  );
}
