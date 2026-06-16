import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Features() {
  const features = [
    {
      title:
        "AI Plagiarism Detection",
      desc:
        "Advanced AI-powered system to identify copied content with smart similarity analysis.",
    },
    {
      title:
        "Originality Score",
      desc:
        "Receive accurate originality and plagiarism percentage instantly.",
    },
    {
      title:
        "Secure Document Analysis",
      desc:
        "Your uploaded files remain private with secure document processing.",
    },
    {
      title:
        "Real-Time Dashboard",
      desc:
        "Track plagiarism score, matched sources, and word count in one dashboard.",
    },
    {
      title:
        "Multi-Account Access",
      desc:
        "Manage and switch between multiple accounts similar to Gmail profiles.",
    },
    {
      title:
        "Fast Report Generation",
      desc:
        "Generate plagiarism reports quickly with efficient processing.",
    },
  ];

  return (
    <div
      style={{
        background:
          "#020617",
        minHeight:
          "100vh",
        color:
          "white",
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          padding:
            "100px 80px 50px",
          textAlign:
            "center",
        }}
      >
        <h1
          style={{
            fontSize:
              "55px",
            fontWeight:
              "700",
            marginBottom:
              "20px",
          }}
        >
          Powerful{" "}
          <span
            style={{
              color:
                "#8b5cf6",
            }}
          >
            Features
          </span>
        </h1>

        <p
          style={{
            fontSize:
              "20px",
            color:
              "#94a3b8",
            maxWidth:
              "850px",
            margin:
              "auto",
            lineHeight:
              "1.8",
          }}
        >
          Our plagiarism
          checker provides
          intelligent
          document analysis,
          secure reports,
          real-time scoring,
          and advanced AI
          detection designed
          for students,
          researchers, and
          professionals.
        </p>
      </section>

      {/* Features Grid */}
      <section
        style={{
          display:
            "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(320px,1fr))",
          gap:
            "30px",
          padding:
            "40px 80px",
        }}
      >
        {features.map(
          (
            feature,
            index
          ) => (
            <div
              key={index}
              style={{
                background:
                  "#0f172a",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                borderRadius:
                  "18px",
                padding:
                  "35px",
                transition:
                  "0.3s",
              }}
            >
              <div
                style={{
                  width:
                    "60px",
                  height:
                    "60px",
                  background:
                    "#8b5cf6",
                  borderRadius:
                    "15px",
                  marginBottom:
                    "20px",
                }}
              ></div>

              <h2
                style={{
                  fontSize:
                    "24px",
                  marginBottom:
                    "15px",
                }}
              >
                {
                  feature.title
                }
              </h2>

              <p
                style={{
                  color:
                    "#94a3b8",
                  lineHeight:
                    "1.8",
                  fontSize:
                    "17px",
                }}
              >
                {
                  feature.desc
                }
              </p>
            </div>
          )
        )}
      </section>

      {/* Bottom Section */}
      <section
        style={{
          padding:
            "80px",
          textAlign:
            "center",
        }}
      >
        <h2
          style={{
            fontSize:
              "42px",
            marginBottom:
              "20px",
          }}
        >
          Why Use Our
          Platform?
        </h2>

        <p
          style={{
            maxWidth:
              "900px",
            margin:
              "auto",
            color:
              "#94a3b8",
            fontSize:
              "20px",
            lineHeight:
              "1.9",
          }}
        >
          Our platform is
          built to provide a
          smooth plagiarism
          checking experience
          with modern UI,
          secure data
          handling,
          intelligent AI
          detection, and
          detailed reporting
          for academic and
          professional use.
        </p>
      </section>

      <Footer />
    </div>
  );
}

export default Features;