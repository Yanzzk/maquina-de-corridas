"use client";

import { useState, useEffect } from "react";

// ---- ICONS ----
const IconLocation = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);
const IconPerson = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>
  </svg>
);
const IconDoc = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);
const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IconChevron = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);
const IconWhatsApp = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
const IconCopy = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
  </svg>
);
const IconClose = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const IconPresent = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>
  </svg>
);

// ---- SERVICE ICONS ----
const IconTaxi = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="#FACC15"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>;
const IconPackage = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FB923C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>;
const IconPlane = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="#60A5FA"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>;
const IconHospital = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F87171" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6v4"/><path d="M14 8h-4"/><path d="M18 10h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Z"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M2 18h2"/><path d="M20 18h2"/></svg>;

// ---- INPUT FIELD COMPONENT ----
function Field({ label, value, onChange, type = "text", placeholder }: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label style={{ fontSize: "12px", fontWeight: 600, color: "#94A3B8", letterSpacing: "0.03em", textTransform: "uppercase" }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder || label}
        className="input-glass"
      />
    </div>
  );
}

// ---- MAIN COMPONENT ----
export default function MaquinaLocalCorridas() {
  const [selectedCity, setSelectedCity] = useState("Tangara da Serra");
  const [selectedService, setSelectedService] = useState("Passageiro");
  const [copied, setCopied] = useState(false);
  const [showArte, setShowArte] = useState(false);
  const [activeChipModal, setActiveChipModal] = useState<string | null>(null);
  const [showProfilePhoto, setShowProfilePhoto] = useState(false);

  useEffect(() => {
    if (showArte || activeChipModal || showProfilePhoto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showArte, activeChipModal, showProfilePhoto]);

  // Dynamic fields
  const [nome, setNome] = useState("");
  const [dia, setDia] = useState("");
  const [horario, setHorario] = useState("");
  const [pontoSaida, setPontoSaida] = useState("");
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [tipoEncomenda, setTipoEncomenda] = useState("");
  const [qtdPessoas, setQtdPessoas] = useState("");

  const cities = [
    "Tangara da Serra", "Arenapolis", "Santo Afonso", "Nova Marilandia", "Nortelandia",
  ];

  const services = [
    { name: "Passageiro", icon: <IconTaxi /> },
    { name: "Encomenda", icon: <IconPackage /> },
    { name: "Aeroporto", icon: <IconPlane /> },
    { name: "Hospital / Consulta", icon: <IconHospital /> },
  ];

  const getMessage = () => {
    const city = selectedCity;
    const n = nome ? `*${nome}*` : "[Nome]";
    const d = dia ? `*${dia}*` : "[Dia]";
    const h = horario ? `*${horario}*` : "[Horário]";
    const ps = pontoSaida ? `*${pontoSaida}*` : "[Ponto de saída]";

    if (selectedService === "Passageiro") {
      return `Olá André, quero reservar uma viagem para *${city}*.\n\nServiço: *Passageiro*\nDia: ${d}\nHorário: ${h}\nNome: ${n}\nPonto de saída: ${ps}`;
    }
    if (selectedService === "Encomenda") {
      const or = origem ? `*${origem}*` : "[Origem]";
      const de = destino ? `*${destino}*` : "[Destino]";
      const te = tipoEncomenda ? `*${tipoEncomenda}*` : "[Tipo]";
      return `Olá André, quero enviar uma encomenda para *${city}*.\n\nServiço: *Encomenda*\nOrigem: ${or}\nDestino: ${de}\nTipo: ${te}\nNome: ${n}`;
    }
    if (selectedService === "Aeroporto") {
      const qp = qtdPessoas ? `*${qtdPessoas}*` : "[Qtd]";
      return `Olá André, quero uma viagem para o aeroporto.\n\nDestino: *${city}*\nDia: ${d}\nHorário: ${h}\nQuantidade de pessoas: ${qp}\nNome: ${n}`;
    }
    if (selectedService === "Hospital / Consulta") {
      return `Olá André, quero reservar uma viagem para consulta.\n\nCidade: *${city}*\nDia: ${d}\nHorário da consulta: ${h}\nNome: ${n}\nPonto de saída: ${ps}`;
    }
    return "";
  };

  const message = getMessage();
  const whatsappLink = `https://wa.me/5565996595006?text=${encodeURIComponent(message)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* noop */ }
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
  };

  const handleServiceChange = (svc: string) => {
    setSelectedService(svc);
    // Reset fields when service changes
    setNome(""); setDia(""); setHorario(""); setPontoSaida("");
    setOrigem(""); setDestino(""); setTipoEncomenda(""); setQtdPessoas("");
  };

  // Dynamic fields renderer
  const renderFields = () => {
    if (selectedService === "Passageiro") return (
      <>
        <Field label="Seu nome" value={nome} onChange={setNome} placeholder="Ex: Maria Silva" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          <Field label="Dia" value={dia} onChange={setDia} placeholder="Ex: Segunda" />
          <Field label="Horario" value={horario} onChange={setHorario} type="time" placeholder="--:--" />
        </div>
        <Field label="Ponto de saida" value={pontoSaida} onChange={setPontoSaida} placeholder="Ex: Praca Central" />
      </>
    );
    if (selectedService === "Encomenda") return (
      <>
        <Field label="Seu nome" value={nome} onChange={setNome} placeholder="Ex: Maria Silva" />
        <Field label="Origem (de onde sai)" value={origem} onChange={setOrigem} placeholder="Ex: Arenapolis" />
        <Field label="Destino (para onde vai)" value={destino} onChange={setDestino} placeholder="Ex: Tangara da Serra" />
        <Field label="Tipo de encomenda" value={tipoEncomenda} onChange={setTipoEncomenda} placeholder="Ex: Caixa pequena" />
      </>
    );
    if (selectedService === "Aeroporto") return (
      <>
        <Field label="Seu nome" value={nome} onChange={setNome} placeholder="Ex: Maria Silva" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          <Field label="Dia" value={dia} onChange={setDia} placeholder="Ex: Sexta" />
          <Field label="Horario do voo" value={horario} onChange={setHorario} type="time" placeholder="--:--" />
        </div>
        <Field label="Quantidade de pessoas" value={qtdPessoas} onChange={setQtdPessoas} type="number" placeholder="Ex: 2" />
      </>
    );
    if (selectedService === "Hospital / Consulta") return (
      <>
        <Field label="Seu nome" value={nome} onChange={setNome} placeholder="Ex: Maria Silva" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          <Field label="Dia" value={dia} onChange={setDia} placeholder="Ex: Terca" />
          <Field label="Horario da consulta" value={horario} onChange={setHorario} type="time" placeholder="--:--" />
        </div>
        <Field label="Ponto de saida" value={pontoSaida} onChange={setPontoSaida} placeholder="Ex: Rua das Flores, 10" />
      </>
    );
    return null;
  };

  // Check if all fields are filled (for CTA state)
  const isReady = nome.trim().length > 0;

  return (
    <>
      {/* ---- MODAL DA ARTE ---- */}
      {showArte && (
        <div
          onClick={() => setShowArte(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.96)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "16px",
            cursor: "zoom-out",
          }}
        >
          <button
            onClick={() => setShowArte(false)}
            style={{
              position: "absolute", top: "16px", right: "16px",
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "50%", width: "44px", height: "44px",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", cursor: "pointer",
            }}
          >
            <IconClose />
          </button>
          <img
            src="/arte-demo1.png"
            alt="Arte - Maquina Local de Corridas"
            style={{ maxWidth: "100%", maxHeight: "100vh", objectFit: "contain", borderRadius: "12px" }}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      {/* ---- MODAL DA FOTO DE PERFIL ---- */}
      {showProfilePhoto && (
        <div
          onClick={() => setShowProfilePhoto(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.96)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "16px",
            cursor: "zoom-out",
          }}
        >
          <button
            onClick={() => setShowProfilePhoto(false)}
            style={{
              position: "absolute", top: "16px", right: "16px",
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "50%", width: "44px", height: "44px",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", cursor: "pointer",
            }}
          >
            <IconClose />
          </button>
          <img
            src="/logo-andre-luiz-uber.webp"
            alt="Andrezinho Uber"
            style={{ maxWidth: "100%", maxHeight: "80vh", objectFit: "contain", borderRadius: "50%" }}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      {/* ---- MODAL DOS CHIPS ---- */}
      {activeChipModal && (
        <div
          onClick={() => setActiveChipModal(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 9998,
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(8px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "24px",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "rgba(15, 23, 42, 0.95)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "24px",
              padding: "32px 24px",
              width: "100%",
              maxWidth: "380px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "16px",
              boxShadow: "0 20px 60px rgba(0, 107, 255, 0.15)",
              position: "relative"
            }}
          >
            <button
              onClick={() => setActiveChipModal(null)}
              style={{
                position: "absolute", top: "16px", right: "16px",
                background: "transparent", border: "none", color: "#94A3B8",
                cursor: "pointer", padding: "4px"
              }}
            >
              <IconClose />
            </button>

            {activeChipModal === "QR Code" && (
              <>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>QR Code para Panfletos</h3>
                <p style={{ fontSize: "14px", color: "#94A3B8", lineHeight: 1.5, marginBottom: "8px" }}>
                  Cole este QR code no vidro do carro e em cartoes de visita. O cliente escaneia e cai direto neste seu app de reservas!
                </p>
                <div style={{ background: "#fff", padding: "16px", borderRadius: "16px" }}>
                  <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(whatsappLink)}&color=000000`} alt="QR Code" style={{ display: "block", width: "200px", height: "200px" }} />
                </div>
              </>
            )}

            {activeChipModal === "Instagram" && (
              <>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>Link na Bio</h3>
                <p style={{ fontSize: "14px", color: "#94A3B8", lineHeight: 1.5 }}>
                  Adicione o link do seu app na bio do Instagram. Seus seguidores viram passageiros com apenas 1 clique!
                </p>
                <div style={{ width: "100%", background: "rgba(0,0,0,0.4)", borderRadius: "12px", padding: "16px", marginTop: "8px", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <p style={{ color: "#fff", fontWeight: 600, fontSize: "14px", marginBottom: "4px" }}>@andrezinho_uber</p>
                  <p style={{ color: "#006BFF", fontSize: "14px" }}>andrezinho-uber.app</p>
                </div>
              </>
            )}

            {activeChipModal === "Google" && (
              <>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>Base para Google</h3>
                <p style={{ fontSize: "14px", color: "#94A3B8", lineHeight: 1.5 }}>
                  Cadastre-se no Google Meu Negocio. Quando pesquisarem "Motorista em Tangara", acham voce e clicam direto no seu app.
                </p>
                <div style={{ width: "100%", background: "rgba(0,0,0,0.4)", borderRadius: "12px", padding: "16px", marginTop: "8px", border: "1px solid rgba(255,255,255,0.05)", textAlign: "left" }}>
                  <p style={{ color: "#fff", fontWeight: 600, fontSize: "15px", marginBottom: "2px" }}>Andrezinho Uber</p>
                  <p style={{ color: "#FACC15", fontSize: "12px", marginBottom: "8px" }}>&#9733;&#9733;&#9733;&#9733;&#9733; 5.0 (42)</p>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <span style={{ padding: "6px 12px", background: "#006BFF", borderRadius: "100px", fontSize: "12px", color: "#fff", fontWeight: 600 }}>Fazer reserva</span>
                  </div>
                </div>
              </>
            )}

            {(activeChipModal === "WhatsApp" || activeChipModal === "Status") && (
              <>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>Compartilhe Facil</h3>
                <p style={{ fontSize: "14px", color: "#94A3B8", lineHeight: 1.5 }}>
                  Mande o link do seu app nas listas de transmissao e poste no Status. Acabe com as perguntas repetidas!
                </p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ width: "100%", padding: "14px", background: "#22C55E", borderRadius: "12px", color: "#fff", textDecoration: "none", fontWeight: 700, marginTop: "8px" }}>
                  Testar envio no WhatsApp
                </a>
              </>
            )}
          </div>
        </div>
      )}

      {/* ---- BOTÃO FLUTUANTE: VER ARTE ---- */}
      <button
        onClick={() => setShowArte(true)}
        style={{
          position: "fixed", bottom: "24px", right: "16px", zIndex: 999,
          background: "linear-gradient(135deg, #006BFF, #003B8F)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "100px",
          color: "#fff",
          padding: "12px 20px",
          fontSize: "13px", fontWeight: 700,
          display: "flex", alignItems: "center", gap: "8px",
          cursor: "pointer",
          boxShadow: "0 8px 24px rgba(0,107,255,0.4)",
          transition: "all 0.2s ease",
        }}
      >
        <IconPresent />
        Ver Apresentacao
      </button>

      {/* ---- APP ---- */}
      <div className="app-wrapper">
        <div className="app-container">

          {/* HEADER */}
          <header className="app-header">
            <div className="header-profile">
              <div className="header-avatar" onClick={() => setShowProfilePhoto(true)} style={{ cursor: "pointer" }}>
                <img src="/logo-andre-luiz-uber.webp" alt="Andrezinho Uber" width={64} height={64} />
              </div>
              <div className="header-info">
                <h1 className="header-name">Andrezinho Uber</h1>
                <p className="header-role">Motorista Particular</p>
                <p className="header-services">Uber &bull; Encomendas &bull; Viagens</p>
                <span className="badge-online">
                  <span className="badge-dot" />
                  Online para reservas
                </span>
              </div>
            </div>
            <p className="header-subtitle">
              Preencha os dados abaixo e chame o Andre com a mensagem ja pronta - sem precisar digitar nada no WhatsApp.
            </p>
          </header>

          {/* HORARIOS */}
          <section className="card">
            <div className="card-title"><IconClock />Horarios de saida</div>
            <div className="schedule-grid">
              <div className="schedule-item"><span className="schedule-time">05h20</span><span className="schedule-label">Saida manha</span></div>
              <div className="schedule-item"><span className="schedule-time">12h00</span><span className="schedule-label">Retorno manha</span></div>
              <div className="schedule-item"><span className="schedule-time">13h00</span><span className="schedule-label">Saida tarde</span></div>
              <div className="schedule-item"><span className="schedule-time">16h30</span><span className="schedule-label">Retorno tarde</span></div>
            </div>
            <p className="schedule-days">Segunda a sabado</p>
          </section>

          {/* CIDADES */}
          <section className="card">
            <div className="card-title"><IconLocation />1. Para onde voce vai?</div>
            <div className="options-list">
              {cities.map(city => (
                <button
                  key={city}
                  className={`option-btn${selectedCity === city ? " selected" : ""}`}
                  onClick={() => handleCityChange(city)}
                >
                  {city}
                  <span className="chevron"><IconChevron /></span>
                </button>
              ))}
            </div>
          </section>

          {/* SERVICOS */}
          <section className="card">
            <div className="card-title"><IconPerson />2. O que voce precisa?</div>
            <div className="options-list">
              {services.map(svc => (
                <button
                  key={svc.name}
                  className={`option-btn${selectedService === svc.name ? " selected" : ""}`}
                  onClick={() => handleServiceChange(svc.name)}
                >
                  {svc.icon}
                  {svc.name}
                  <span className="chevron"><IconChevron /></span>
                </button>
              ))}
            </div>
          </section>

          {/* MENSAGEM PRONTA (com inputs inteligentes) */}
          <section className="card">
            <div className="card-title"><IconDoc />3. Seus dados para a viagem</div>
            
            {/* Inputs dinâmicos */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {renderFields()}
            </div>

            {/* Separador */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", margin: "4px 0" }} />

            {/* Preview da mensagem */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "11px", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Preview - mensagem que sera enviada
              </span>
              <div className="message-preview">{message}</div>
              <button className={`btn-copy${copied ? " copied" : ""}`} onClick={handleCopy}>
                <IconCopy />
                {copied ? "Copiado!" : "Copiar mensagem"}
              </button>
            </div>
          </section>

          {/* CTA WHATSAPP */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={!isReady ? { opacity: 0.6, pointerEvents: "none" } : {}}
            >
              <IconWhatsApp />
              {isReady ? "Chamar Andre no WhatsApp" : "Preencha seu nome para continuar"}
            </a>
            {!isReady && (
              <p style={{ textAlign: "center", fontSize: "12px", color: "#64748B" }}>
                Digite seu nome na secao acima para ativar o botao
              </p>
            )}
          </div>

          {/* FOOTER CHIPS */}
          <div className="footer-chips" style={{ paddingBottom: "80px" }}>
            {["Google", "Instagram", "Status", "QR Code", "WhatsApp"].map(chip => (
              <button
                key={chip}
                className="chip"
                onClick={() => setActiveChipModal(chip)}
              >
                {chip}
              </button>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
