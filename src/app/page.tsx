"use client";

import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
type City = string;
type ServiceKey = "Passageiro" | "Encomenda" | "Aeroporto" | "Hospital";

// ─── Data ─────────────────────────────────────────────────────────────────────
const CITIES: City[] = [
  "Tangará da Serra",
  "Arenápolis",
  "Santo Afonso",
  "Nova Marilândia",
  "Nortelândia",
];

const SERVICES: { key: ServiceKey; label: string; icon: string }[] = [
  { key: "Passageiro", label: "Passageiro", icon: "🚗" },
  { key: "Encomenda", label: "Encomenda", icon: "📦" },
  { key: "Aeroporto", label: "Aeroporto", icon: "✈️" },
  { key: "Hospital", label: "Hospital / Consulta", icon: "🏥" },
];

const WHATSAPP_NUMBER = "5565996595006";

// ─── Message Builder ──────────────────────────────────────────────────────────
function buildMessage(city: City | null, service: ServiceKey | null): string {
  const c = city ?? "[CIDADE]";

  switch (service) {
    case "Passageiro":
      return `Olá André, quero reservar uma viagem para ${c}.

Serviço: Passageiro
Dia:
Horário:
Nome:
Ponto de saída:`;

    case "Encomenda":
      return `Olá André, quero enviar uma encomenda para ${c}.

Serviço: Encomenda
Origem:
Destino:
Tipo de encomenda:
Nome:`;

    case "Aeroporto":
      return `Olá André, quero consultar uma viagem para aeroporto.

Destino: ${c}
Dia:
Horário:
Quantidade de pessoas:
Nome:`;

    case "Hospital":
      return `Olá André, quero reservar uma viagem para consulta/hospital.

Cidade: ${c}
Dia:
Horário da consulta:
Nome:
Ponto de saída:`;

    default:
      return city
        ? `Olá André, tenho interesse em uma corrida para ${c}. Pode me ajudar?`
        : "Olá André, tenho interesse em seus serviços. Pode me ajudar?";
  }
}

// ─── Icons (SVG puro — sem Lucide) ───────────────────────────────────────────
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
    </svg>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function HeroBadge() {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
      style={{ background: "rgba(34,197,94,0.12)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.25)" }}>
      <span className="badge-dot w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
      Online para reservas
    </span>
  );
}

function ScheduleBlock() {
  const schedules = [
    { label: "Saída manhã", time: "05h20" },
    { label: "Retorno manhã", time: "12h00" },
    { label: "Saída tarde", time: "13h00" },
    { label: "Retorno tarde", time: "16h30" },
  ];

  return (
    <div className="glass-card p-4">
      <div className="flex items-center gap-2 mb-3">
        <ClockIcon />
        <span className="text-sm font-semibold" style={{ color: "#006BFF" }}>
          Horários — Seg a Sáb
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {schedules.map((s) => (
          <div key={s.label} className="rounded-xl p-2.5 text-center"
            style={{ background: "rgba(0,107,255,0.08)", border: "1px solid rgba(0,107,255,0.15)" }}>
            <div className="text-xs text-white/50 mb-0.5">{s.label}</div>
            <div className="text-base font-bold tracking-wider" style={{ color: "#006BFF" }}>
              {s.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface CityCardProps {
  cities: City[];
  selected: City | null;
  onSelect: (city: City) => void;
}

function CityCard({ cities, selected, onSelect }: CityCardProps) {
  return (
    <div className="glass-card p-5">
      <h2 className="text-base font-bold mb-1 text-white">📍 Para onde você vai?</h2>
      <p className="text-xs text-white/50 mb-4">Selecione a cidade de destino</p>
      <div className="flex flex-col gap-2.5">
        {cities.map((city) => {
          const isSelected = selected === city;
          return (
            <button
              key={city}
              onClick={() => onSelect(city)}
              className="btn-option w-full text-left px-4 py-3.5 rounded-2xl font-semibold text-sm transition-all"
              style={{
                background: isSelected
                  ? "linear-gradient(135deg, #006BFF, #003B8F)"
                  : "rgba(255,255,255,0.05)",
                border: isSelected
                  ? "1px solid rgba(0,107,255,0.6)"
                  : "1px solid rgba(255,255,255,0.08)",
                color: isSelected ? "#FFFFFF" : "rgba(255,255,255,0.7)",
                boxShadow: isSelected ? "0 4px 20px rgba(0,107,255,0.35)" : "none",
                transform: isSelected ? "scale(1.01)" : "scale(1)",
              }}
            >
              <span className="flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: isSelected ? "#FFFFFF" : "rgba(255,255,255,0.3)" }}
                />
                {city}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface ServiceCardProps {
  services: typeof SERVICES;
  selected: ServiceKey | null;
  onSelect: (service: ServiceKey) => void;
}

function ServiceCard({ services, selected, onSelect }: ServiceCardProps) {
  return (
    <div className="glass-card p-5">
      <h2 className="text-base font-bold mb-1 text-white">⚡ O que você precisa?</h2>
      <p className="text-xs text-white/50 mb-4">Selecione o tipo de serviço</p>
      <div className="grid grid-cols-2 gap-2.5">
        {services.map((s) => {
          const isSelected = selected === s.key;
          return (
            <button
              key={s.key}
              onClick={() => onSelect(s.key)}
              className="btn-option flex flex-col items-center gap-2 px-3 py-4 rounded-2xl font-semibold text-xs transition-all"
              style={{
                background: isSelected
                  ? "linear-gradient(135deg, #006BFF, #003B8F)"
                  : "rgba(255,255,255,0.05)",
                border: isSelected
                  ? "1px solid rgba(0,107,255,0.6)"
                  : "1px solid rgba(255,255,255,0.08)",
                color: isSelected ? "#FFFFFF" : "rgba(255,255,255,0.65)",
                boxShadow: isSelected ? "0 4px 20px rgba(0,107,255,0.35)" : "none",
                transform: isSelected ? "scale(1.03)" : "scale(1)",
              }}
            >
              <span className="text-xl">{s.icon}</span>
              <span className="text-center leading-tight">{s.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface MessagePreviewCardProps {
  message: string;
  onCopy: () => void;
  copied: boolean;
}

function MessagePreviewCard({ message, onCopy, copied }: MessagePreviewCardProps) {
  return (
    <div className="glass-card p-5">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-base font-bold text-white">💬 Mensagem pronta</h2>
          <p className="text-xs text-white/50 mt-0.5">Enviada automaticamente ao clicar</p>
        </div>
        <button
          onClick={onCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all"
          style={{
            background: copied ? "rgba(34,197,94,0.15)" : "rgba(0,107,255,0.12)",
            border: copied ? "1px solid rgba(34,197,94,0.4)" : "1px solid rgba(0,107,255,0.3)",
            color: copied ? "#22C55E" : "#006BFF",
          }}
        >
          <CopyIcon />
          {copied ? "Copiado!" : "Copiar"}
        </button>
      </div>
      <div
        className="rounded-2xl p-4 font-mono text-xs leading-relaxed whitespace-pre-wrap"
        style={{
          background: "rgba(0,0,0,0.35)",
          border: "1px solid rgba(255,255,255,0.06)",
          color: "rgba(255,255,255,0.85)",
          minHeight: "120px",
        }}
      >
        {message}
      </div>
    </div>
  );
}

function WhatsAppButton({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-base transition-all"
      style={{
        background: disabled
          ? "rgba(255,255,255,0.06)"
          : "linear-gradient(135deg, #22C55E, #16a34a)",
        border: disabled ? "1px solid rgba(255,255,255,0.08)" : "none",
        color: disabled ? "rgba(255,255,255,0.3)" : "#FFFFFF",
        boxShadow: disabled ? "none" : "0 6px 30px rgba(34,197,94,0.4)",
        animation: disabled ? "none" : undefined,
      }}
    >
      <WhatsAppIcon />
      <span className={disabled ? "" : "btn-whatsapp-pulse"}>
        {disabled ? "Escolha cidade e serviço primeiro" : "Chamar André no WhatsApp"}
      </span>
    </button>
  );
}

function ChannelChips() {
  const chips = [
    { label: "Google", color: "#4285F4" },
    { label: "Instagram", color: "#E1306C" },
    { label: "Status", color: "#25D366" },
    { label: "QR Code", color: "#FF6B35" },
    { label: "WhatsApp", color: "#22C55E" },
  ];

  return (
    <div className="glass-card p-5">
      <p className="text-xs text-white/50 mb-3 text-center">
        Funciona para Instagram, Status, Flyer com QR Code e base para Google.
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {chips.map((chip) => (
          <span
            key={chip.label}
            className="px-3 py-1.5 rounded-full text-xs font-semibold"
            style={{
              background: `${chip.color}18`,
              border: `1px solid ${chip.color}40`,
              color: chip.color,
            }}
          >
            {chip.label}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function MaquinaDeCorridas() {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceKey | null>(null);
  const [copied, setCopied] = useState(false);

  const message = buildMessage(selectedCity, selectedService);
  const isReady = selectedCity !== null && selectedService !== null;

  function handleWhatsApp() {
    if (!isReady) return;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback silencioso
    }
  }

  return (
    <div className="mesh-bg min-h-screen flex items-start justify-center py-6 px-4">
      {/* Container simulando mini app */}
      <div className="w-full max-w-sm flex flex-col gap-4">

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <div className="text-center pt-2 pb-1">
          {/* Logo / avatar */}
          <div className="relative inline-flex mb-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #006BFF, #003B8F)",
                boxShadow: "0 8px 32px rgba(0,107,255,0.5)",
              }}
            >
              <CarIcon />
            </div>
            <span
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2"
              style={{ background: "#22C55E", borderColor: "#111111" }}
            />
          </div>

          <HeroBadge />

          <h1
            className="mt-3 text-2xl font-black tracking-tight leading-tight"
            style={{
              background: "linear-gradient(135deg, #FFFFFF 60%, rgba(255,255,255,0.6))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Máquina Local<br />de Corridas
          </h1>

          <p className="mt-1 text-sm font-semibold" style={{ color: "#006BFF" }}>
            Andrezinho Uber · Motorista Particular
          </p>
          <p className="mt-1 text-xs text-white/45 px-4 leading-relaxed">
            Escolha a cidade, selecione o serviço e chame o André com a mensagem pronta.
          </p>
          <p className="mt-0.5 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            Uber · Encomendas · Viagens
          </p>
        </div>

        {/* ── Horários ─────────────────────────────────────────────── */}
        <ScheduleBlock />

        {/* ── Cidades ──────────────────────────────────────────────── */}
        <CityCard cities={CITIES} selected={selectedCity} onSelect={setSelectedCity} />

        {/* ── Serviços ─────────────────────────────────────────────── */}
        <ServiceCard services={SERVICES} selected={selectedService} onSelect={setSelectedService} />

        {/* ── Mensagem Preview ─────────────────────────────────────── */}
        <MessagePreviewCard message={message} onCopy={handleCopy} copied={copied} />

        {/* ── Botão WhatsApp ────────────────────────────────────────── */}
        <WhatsAppButton onClick={handleWhatsApp} disabled={!isReady} />

        {/* ── Chips de canais ───────────────────────────────────────── */}
        <ChannelChips />

        {/* Footer */}
        <p className="text-center text-xs text-white/20 pb-4">
          © 2025 Andrezinho Uber · Tangará da Serra – MT
        </p>
      </div>
    </div>
  );
}
