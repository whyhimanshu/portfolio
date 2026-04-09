import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThreeScene from "../components/ThreeScene";
import { personalInfo, achievements, certifications, education } from "../data/mock";
import {
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  Trophy,
  Award,
  ChevronDown,
} from "lucide-react";
import { LinkedinIcon } from "../components/BrandIcons";

export default function Home() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section
        id="hero-section"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <ThreeScene variant="hero" />

        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 700,
            background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1200,
            margin: "0 auto",
            padding: "120px 24px 80px",
            width: "100%",
          }}
        >
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(40px)",
              transition: "all 0.8s cubic-bezier(.16,1,.3,1)",
            }}
          >
            {/* Tag */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 16px",
                borderRadius: 50,
                background: "rgba(59,130,246,0.1)",
                border: "1px solid rgba(59,130,246,0.25)",
                fontSize: 13,
                color: "#60a5fa",
                marginBottom: 28,
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#3b82f6", animation: "pulse 2s infinite" }} />
              Available for opportunities
            </div>

            {/* Heading */}
            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 72px)",
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: -2,
                margin: 0,
              }}
            >
              Hi, I'm{" "}
              <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
              <br />
              <span style={{ color: "rgba(255,255,255,0.85)" }}>
                {personalInfo.title}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                color: "rgba(255,255,255,0.55)",
                maxWidth: 560,
                lineHeight: 1.7,
                marginTop: 24,
              }}
            >
              {personalInfo.resumeTagline}
            </p>

            {/* Info chips */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginTop: 32,
              }}
            >
              {[
                { icon: <MapPin size={14} />, text: personalInfo.location, href: null },
                { icon: <Mail size={14} />, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: <Phone size={14} />, text: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
              ].map((c, i) => {
                const chipStyle = {
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.5)",
                  padding: "6px 14px",
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                };
                const content = (
                  <>
                    <span style={{ color: "#60a5fa" }}>{c.icon}</span>
                    {c.text}
                  </>
                );
                return c.href ? (
                  <a
                    key={i}
                    href={c.href}
                    style={chipStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
                      e.currentTarget.style.color = "#93c5fd";
                      e.currentTarget.style.background = "rgba(59,130,246,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    }}
                  >
                    {content}
                  </a>
                ) : (
                  <span key={i} style={chipStyle}>
                    {content}
                  </span>
                );
              })}
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 40 }}>
              <Link
                to="/projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 32px",
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: "none",
                  boxShadow: "0 8px 32px rgba(59,130,246,0.3)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(59,130,246,0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(59,130,246,0.3)";
                }}
              >
                View Projects <ArrowRight size={16} />
              </Link>

              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 32px",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(59,130,246,0.3)",
                  color: "#93c5fd",
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(59,130,246,0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Get in Touch
              </Link>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 24px",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.6)",
                  fontWeight: 500,
                  fontSize: 15,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
                  e.currentTarget.style.color = "#60a5fa";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                }}
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => {
            const el = document.getElementById("education-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            opacity: 0.8,
            animation: "float 3s ease-in-out infinite",
            background: "none",
            border: "none",
            cursor: "pointer",
            outline: "none"
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = 0.8; }}
        >
          <span style={{ fontSize: 11, color: "#60a5fa", letterSpacing: 2 }}>SCROLL</span>
          <ChevronDown size={18} color="#60a5fa" />
        </button>
      </section>

      {/* ═══════════════════════ EDUCATION ═══════════════════════ */}
      <section id="education-section" style={{ padding: "100px 24px", position: "relative" }} className="grid-pattern">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionTitle icon={<GraduationCap size={20} />} title="Education" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24, marginTop: 40 }}>
            {education.map((e, i) => (
              <GlassCard key={i}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{e.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", margin: 0 }}>{e.degree}</h3>
                <p style={{ color: "#93c5fd", fontSize: 14, marginTop: 6 }}>{e.institution}</p>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16, fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
                  <span>{e.duration}</span>
                  <span style={{ color: "#60a5fa", fontWeight: 600 }}>{e.score}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ ACHIEVEMENTS ═══════════════════════ */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionTitle icon={<Trophy size={20} />} title="Achievements" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24, marginTop: 40 }}>
            {achievements.map((a, i) => (
              <GlassCard key={i}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{a.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", margin: 0 }}>{a.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, marginTop: 8, lineHeight: 1.6 }}>{a.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CERTIFICATIONS ═══════════════════════ */}
      <section style={{ padding: "100px 24px" }} className="grid-pattern">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionTitle icon={<Award size={20} />} title="Certifications" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 40 }}>
            {certifications.map((c, i) => (
              <GlassCard key={i} small>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 28 }}>{c.icon}</span>
                  <div>
                    <h4 style={{ fontSize: 15, fontWeight: 600, color: "#fff", margin: 0 }}>{c.title}</h4>
                    <p style={{ fontSize: 12, color: "#60a5fa", margin: "4px 0 0" }}>{c.code}</p>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 14, fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
                  <span>{c.date}</span>
                  {c.score && <span style={{ color: "#60a5fa", fontWeight: 600 }}>Score: {c.score}</span>}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA ═══════════════════════ */}
      <section style={{ padding: "100px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1, margin: 0 }}>
            Let's build something{" "}
            <span className="gradient-text">amazing</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", marginTop: 16, fontSize: 16, lineHeight: 1.7 }}>
            I'm always excited to collaborate on interesting projects and explore new opportunities.
          </p>
          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 32,
              padding: "16px 36px",
              borderRadius: 14,
              background: "linear-gradient(135deg, #2563eb, #3b82f6)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 16,
              textDecoration: "none",
              boxShadow: "0 8px 32px rgba(59,130,246,0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 44px rgba(59,130,246,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(59,130,246,0.3)";
            }}
          >
            Contact Me <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}

/* ─── Reusable sub-components ─────────────────────────── */
function SectionTitle({ icon, title }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 12,
          background: "rgba(59,130,246,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#60a5fa",
        }}
      >
        {icon}
      </div>
      <h2
        style={{
          fontSize: 28,
          fontWeight: 800,
          letterSpacing: -0.5,
          margin: 0,
          background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function GlassCard({ children, small }) {
  return (
    <div
      className="card-hover"
      style={{
        padding: small ? 20 : 28,
        borderRadius: 16,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(59,130,246,0.12)",
        backdropFilter: "blur(8px)",
      }}
    >
      {children}
    </div>
  );
}
