import { socialLinks, personalInfo } from "../data/mock";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
};

export default function Footer() {
  return (
    <footer
      id="site-footer"
      style={{
        borderTop: "1px solid rgba(59,130,246,0.12)",
        background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(5,10,20,1) 100%)",
        padding: "48px 24px 28px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        {/* Left */}
        <div>
          <span
            style={{
              fontWeight: 800,
              fontSize: 20,
              background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {"<HV />"}
          </span>
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: 13,
              marginTop: 6,
              maxWidth: 320,
            }}
          >
            {personalInfo.bio.slice(0, 100)}…
          </p>
        </div>

        {/* Social icons */}
        <div style={{ display: "flex", gap: 16 }}>
          {socialLinks.map((s) => {
            const Icon = iconMap[s.icon] || Mail;
            return (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(59,130,246,0.25)",
                  background: "rgba(59,130,246,0.06)",
                  color: "#60a5fa",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(59,130,246,0.2)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(59,130,246,0.06)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Bottom line */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          marginTop: 32,
          paddingTop: 16,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          textAlign: "center",
          color: "rgba(255,255,255,0.35)",
          fontSize: 13,
        }}
      >
        © {new Date().getFullYear()} {personalInfo.name}. Crafted with{" "}
        <Heart
          size={13}
          style={{ display: "inline", verticalAlign: "middle", color: "#3b82f6" }}
        />{" "}
        using React & Three.js
      </div>
    </footer>
  );
}
