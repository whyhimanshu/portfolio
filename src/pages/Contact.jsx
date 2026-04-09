import { useState } from "react";
import { personalInfo, socialLinks } from "../data/mock";
import { Send, MapPin, Mail, Phone, CheckCircle } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "../components/BrandIcons";
import ThreeScene from "../components/ThreeScene";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto link as a simple fallback
    const mailTo = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
    window.open(mailTo, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: 12,
    border: "1px solid rgba(59,130,246,0.15)",
    background: "rgba(255,255,255,0.04)",
    color: "#fff",
    fontSize: 15,
    fontFamily: "'Figtree', sans-serif",
    outline: "none",
    transition: "all 0.3s ease",
  };

  const focusStyle = (e) => {
    e.target.style.borderColor = "rgba(59,130,246,0.5)";
    e.target.style.background = "rgba(59,130,246,0.06)";
    e.target.style.boxShadow = "0 0 20px rgba(59,130,246,0.1)";
  };
  const blurStyle = (e) => {
    e.target.style.borderColor = "rgba(59,130,246,0.15)";
    e.target.style.background = "rgba(255,255,255,0.04)";
    e.target.style.boxShadow = "none";
  };

  return (
    <div style={{ paddingTop: 90 }}>
      {/* Header */}
      <section style={{ position: "relative", padding: "60px 24px 20px", overflow: "hidden" }}>
        <ThreeScene variant="subtle" />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 14,
                background: "rgba(59,130,246,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#60a5fa",
              }}
            >
              <Send size={22} />
            </div>
            <h1
              style={{
                fontSize: 40,
                fontWeight: 900,
                letterSpacing: -1.5,
                margin: 0,
                background: "linear-gradient(135deg, #fff, rgba(255,255,255,0.7))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Get in Touch
            </h1>
          </div>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, maxWidth: 520, lineHeight: 1.7 }}>
            Have a project idea or want to collaborate? I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section style={{ padding: "40px 24px 100px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gap: 40,
          }}
        >
          {/* Left — Info */}
          <div>
            {/* Contact cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: <Mail size={20} />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: <Phone size={20} />, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
                { icon: <MapPin size={20} />, label: "Location", value: personalInfo.location, href: null },
              ].map((item, i) => (
                <div
                  key={i}
                  className="card-hover"
                  style={{
                    padding: "20px 24px",
                    borderRadius: 16,
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(59,130,246,0.1)",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    cursor: item.href ? "pointer" : "default",
                  }}
                  onClick={() => item.href && window.open(item.href)}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(59,130,246,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#60a5fa",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", margin: 0, fontWeight: 500 }}>{item.label}</p>
                    <p style={{ fontSize: 15, color: "#fff", margin: "2px 0 0", fontWeight: 500 }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ marginTop: 32 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 16 }}>Connect</h3>
              <div style={{ display: "flex", gap: 14 }}>
                {[
                  { icon: <LinkedinIcon size={20} />, url: personalInfo.linkedin, label: "LinkedIn" },
                  { icon: <GithubIcon size={20} />, url: personalInfo.github, label: "GitHub" },
                  { icon: <Mail size={20} />, url: `mailto:${personalInfo.email}`, label: "Email" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(59,130,246,0.2)",
                      background: "rgba(59,130,246,0.05)",
                      color: "#60a5fa",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(59,130,246,0.2)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(59,130,246,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(59,130,246,0.05)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div
            style={{
              padding: 36,
              borderRadius: 20,
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(59,130,246,0.1)",
              backdropFilter: "blur(8px)",
            }}
          >
            <h3 style={{ fontSize: 22, fontWeight: 700, color: "#fff", margin: "0 0 24px" }}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 6, display: "block" }}>Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 6, display: "block" }}>Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    style={inputStyle}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 6, display: "block" }}>Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  style={inputStyle}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                />
              </div>

              <div>
                <label style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 6, display: "block" }}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea…"
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                />
              </div>

              <button
                type="submit"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "14px 32px",
                  borderRadius: 12,
                  border: "none",
                  background: sent
                    ? "linear-gradient(135deg, #059669, #10b981)"
                    : "linear-gradient(135deg, #2563eb, #3b82f6)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 15,
                  cursor: "pointer",
                  boxShadow: sent
                    ? "0 8px 32px rgba(16,185,129,0.3)"
                    : "0 8px 32px rgba(59,130,246,0.3)",
                  transition: "all 0.4s ease",
                  fontFamily: "'Figtree', sans-serif",
                }}
                onMouseEnter={(e) => {
                  if (!sent) {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(59,130,246,0.45)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = sent
                    ? "0 8px 32px rgba(16,185,129,0.3)"
                    : "0 8px 32px rgba(59,130,246,0.3)";
                }}
              >
                {sent ? (
                  <>
                    <CheckCircle size={16} /> Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
