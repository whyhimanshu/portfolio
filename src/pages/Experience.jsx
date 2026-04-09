import { experience, interests } from "../data/mock";
import { Briefcase, Heart } from "lucide-react";
import ThreeScene from "../components/ThreeScene";

export default function Experience() {
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
              <Briefcase size={22} />
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
              Experience
            </h1>
          </div>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, maxWidth: 520, lineHeight: 1.7 }}>
            My professional journey and extra-curricular activities.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "40px 24px 100px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 22,
              top: 0,
              bottom: 0,
              width: 2,
              background: "linear-gradient(180deg, rgba(59,130,246,0.4), rgba(59,130,246,0.05))",
            }}
          />

          {experience.map((exp, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                paddingLeft: 60,
                marginBottom: 48,
              }}
            >
              {/* Dot */}
              <div
                style={{
                  position: "absolute",
                  left: 12,
                  top: 6,
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: "#0a0a0a",
                  border: "3px solid #3b82f6",
                  boxShadow: "0 0 18px rgba(59,130,246,0.35)",
                  zIndex: 2,
                }}
              />

              {/* Card */}
              <div
                className="card-hover"
                style={{
                  padding: 32,
                  borderRadius: 18,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(59,130,246,0.12)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#60a5fa",
                    letterSpacing: 1.2,
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  {exp.duration}
                </span>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: "#fff", margin: 0 }}>
                  {exp.role}
                </h3>
                <p style={{ color: "#93c5fd", fontSize: 15, marginTop: 4 }}>
                  {exp.organization}
                </p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, marginTop: 14 }}>
                  {exp.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18 }}>
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "4px 14px",
                        borderRadius: 50,
                        fontSize: 12,
                        fontWeight: 500,
                        background: "rgba(59,130,246,0.08)",
                        border: "1px solid rgba(59,130,246,0.2)",
                        color: "#93c5fd",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section style={{ padding: "60px 24px 100px" }} className="grid-pattern">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
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
              <Heart size={20} />
            </div>
            <h2
              style={{
                fontSize: 26,
                fontWeight: 800,
                letterSpacing: -0.5,
                margin: 0,
                color: "#fff",
              }}
            >
              Interests
            </h2>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {interests.map((interest, i) => (
              <span
                key={i}
                style={{
                  padding: "10px 22px",
                  borderRadius: 50,
                  fontSize: 14,
                  fontWeight: 500,
                  background: "rgba(59,130,246,0.06)",
                  border: "1px solid rgba(59,130,246,0.18)",
                  color: "rgba(255,255,255,0.7)",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(59,130,246,0.15)";
                  e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(59,130,246,0.06)";
                  e.currentTarget.style.borderColor = "rgba(59,130,246,0.18)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
