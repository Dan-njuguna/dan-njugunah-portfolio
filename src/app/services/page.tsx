import Link from "next/link";

export default function ComingSoon() {
  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}
    >
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>Coming Soon</h1>
        <p>This page is under construction. Stay tuned for updates!</p>
        <Link href="/" passHref>
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              cursor: "pointer",
              border: "none",
              backgroundColor: "#0070f3",
              color: "white",
              borderRadius: "5px",
            }}
          >
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
} 