import { Mail, Phone, MapPin, Home, BadgeDollarSign, Building2, ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Tammy Marlowe Homes</h1>
      <p>Luxury Real Estate in Southern Maryland</p>
      <p>Buying • Selling • Relocating</p>

      <div style={{ marginTop: "20px" }}>
        <p><strong>📞</strong> 410-610-1018</p>
        <p><strong>📧</strong> tmarlowe01@gmail.com</p>
      </div>

      <button style={{
        marginTop: "20px",
        padding: "10px 20px",
        background: "#cf2030",
        color: "white",
        border: "none",
        borderRadius: "8px"
      }}>
        View Homes
      </button>
    </main>
  );
}
