import { useState } from "react";
import { projects } from "../data/mock";
import ThreeScene from "../components/ThreeScene";
import { ExternalLink, ChevronDown, ChevronUp, FolderOpen } from "lucide-react";
import { GithubIcon } from "../components/BrandIcons";

export default function Projects() {
  return (
    <div style={{ paddingTop: 90 }}>
      {/* Header */}
      <section style={{ position: "relative", padding: "60px 24px 80px", overflow: "hidden" }}>
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
              <FolderOpen size={22} />
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
              Projects
            </h1>
          </div>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, maxWidth: 520, lineHeight: 1.7 }}>
            A collection of things I've built — from AI-powered dashboards to full-stack applications.
          </p>
        </div>
      </section>

      {/* Project cards */}
      <section style={{ padding: "0 24px 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 32 }}>
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const p = project;

  return (
    <div
      className="card-hover"
      style={{
        borderRadius: 20,
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(59,130,246,0.12)",
        overflow: "hidden",
        transition: "all 0.4s ease",
      }}
    >
      {/* Color accent bar */}
      <div style={{ height: 4, background: `linear-gradient(90deg, ${p.color}, transparent)` }} />

      <div style={{ padding: "32px 36px" }}>
        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
          <div>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#60a5fa", letterSpacing: 1.5, textTransform: "uppercase" }}>
              Project {String(index + 1).padStart(2, "0")}
            </span>
            <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: -0.5, margin: "8px 0 0", color: "#fff" }}>
              {p.title}
            </h2>
            <p style={{ color: "#93c5fd", fontSize: 15, margin: "6px 0 0" }}>{p.tagline}</p>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: 10 }}>
            {p.liveUrl && p.liveUrl !== "#" && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 18px",
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <ExternalLink size={14} /> Live
              </a>
            )}
            <a
              href={p.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 18px",
                borderRadius: 10,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.7)",
                fontSize: 13,
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
                e.currentTarget.style.color = "#60a5fa";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = "rgba(255,255,255,0.7)";
              }}
            >
              <GithubIcon size={14} /> Code
            </a>
          </div>
        </div>

        {/* Description */}
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, lineHeight: 1.7, marginTop: 20 }}>
          {p.description}
        </p>

        {/* Expand / collapse */}
        {p.details && (
          <>
            <div
              style={{
                maxHeight: expanded ? 300 : 0,
                overflow: "hidden",
                transition: "max-height 0.4s ease",
              }}
            >
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, lineHeight: 1.7, marginTop: 8 }}>
                {p.details}
              </p>
            </div>
            <button
              onClick={() => setExpanded(!expanded)}
              style={{
                background: "none",
                border: "none",
                color: "#60a5fa",
                fontSize: 13,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 4,
                marginTop: 8,
                padding: 0,
              }}
            >
              {expanded ? "Show less" : "Read more"}
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </>
        )}

        {/* Tech stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
          {p.techStack.map((t) => (
            <span
              key={t}
              style={{
                padding: "5px 14px",
                borderRadius: 50,
                fontSize: 12,
                fontWeight: 500,
                background: "rgba(59,130,246,0.08)",
                border: "1px solid rgba(59,130,246,0.2)",
                color: "#93c5fd",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
