import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#0b0c0e",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "#e7e9ec",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#b6f36a", letterSpacing: 3 }}>
          {`${site.role.toUpperCase()} · ${site.location.toUpperCase()}`}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 700, letterSpacing: -4 }}>
            {site.name}
            <span style={{ color: "#b6f36a" }}>.</span>
          </div>
          <div style={{ display: "flex", fontSize: 40, color: "#a3a8b0", marginTop: 16 }}>
            I engineer AI products people actually use.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#7d838c" }}>nareshrajesh.vercel.app</div>
      </div>
    ),
    size,
  );
}
