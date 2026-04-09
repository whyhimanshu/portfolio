import { useEffect, useRef, useState } from "react";
import { skillCategories } from "../data/mock";
import { Code2 } from "lucide-react";
import ThreeScene from "../components/ThreeScene";

export default function Skills() {
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
              <Code2 size={22} />
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
              Skills & Technologies
            </h1>
          </div>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, maxWidth: 520, lineHeight: 1.7 }}>
            My technical toolkit — from frontend frameworks to AI/ML and devops.
          </p>
        </div>
      </section>

      {/* Skill Categories */}
      <section style={{ padding: "40px 24px 100px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 28,
          }}
        >
          {skillCategories.map((cat, i) => (
            <SkillCategoryCard key={i} category={cat} delay={i * 100} />
          ))}
        </div>
      </section>
    </div>
  );
}

function SkillCategoryCard({ category, delay }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="card-hover"
      style={{
        padding: 28,
        borderRadius: 18,
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(59,130,246,0.1)",
        backdropFilter: "blur(8px)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `all 0.6s cubic-bezier(.16,1,.3,1) ${delay}ms`,
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <span style={{ fontSize: 28 }}>{category.icon}</span>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", margin: 0 }}>
          {category.category}
        </h3>
      </div>

      {/* Skill bars */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {category.skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} animate={inView} />
        ))}
      </div>
    </div>
  );
}

function SkillBar({ skill, animate }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: hovered ? "#fff" : "rgba(255,255,255,0.7)",
            transition: "color 0.2s ease",
          }}
        >
          {skill.name}
        </span>
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "#60a5fa",
            opacity: hovered ? 1 : 0.6,
            transition: "opacity 0.2s ease",
          }}
        >
          {skill.level}%
        </span>
      </div>
      <div
        style={{
          height: 6,
          borderRadius: 3,
          background: "rgba(255,255,255,0.06)",
          overflow: "hidden",
        }}
      >
        <div
          className="skill-bar-fill"
          style={{
            height: "100%",
            borderRadius: 3,
            width: animate ? `${skill.level}%` : "0%",
            background: hovered
              ? "linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)"
              : "linear-gradient(90deg, #2563eb, #3b82f6)",
            boxShadow: hovered ? "0 0 16px rgba(59,130,246,0.5)" : "none",
            transition: "width 1.2s cubic-bezier(.16,1,.3,1), background 0.3s ease, box-shadow 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}
