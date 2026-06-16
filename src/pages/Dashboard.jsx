import React, {
  useState,
} from "react";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [text,
    setText] =
    useState("");

  const [fileName,
    setFileName] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

  const [score,
    setScore] =
    useState(0);

  const [originality,
    setOriginality] =
    useState(100);

  const [words,
    setWords] =
    useState(0);

  const [sources,
    setSources] =
    useState(0);

  const [matchedContent,
    setMatchedContent] =
    useState([]);

  const [showResult,
    setShowResult] =
    useState(false);

  // Upload file
  const handleFileUpload =
    (e) => {
      const file =
        e.target.files[0];

      if (!file)
        return;

      setFileName(
        file.name
      );

      const reader =
        new FileReader();

      reader.onload =
        (event) => {
          setText(
            event.target
              .result
          );
        };

      reader.readAsText(
        file
      );
    };

  // Fake plagiarism check
  const handleCheck =
    async () => {
      if (
        text.trim() ===
        ""
      ) {
        alert(
          "Please enter text or upload file!"
        );
        return;
      }

      setLoading(
        true
      );
      setShowResult(
        false
      );

      setTimeout(
        () => {
          const randomScore =
            Math.floor(
              Math.random() *
                60
            );

          const originalityScore =
            100 -
            randomScore;

          setScore(
            randomScore
          );

          setOriginality(
            originalityScore
          );

          setWords(
            text
              .trim()
              .split(
                /\s+/
              ).length
          );

          const fakeSources =
            [
              {
                sentence:
                  "Wikipedia Reference",
                ratio:
                  randomScore,
              },
              {
                sentence:
                  "Research Paper Match",
                ratio:
                  randomScore -
                  10,
              },
            ];

          setSources(
            fakeSources.length
          );

          setMatchedContent(
            fakeSources
          );

          setShowResult(
            true
          );

          setLoading(
            false
          );
        },
        2500
      );
    };

  return (
    <div className="dashboard-page">
      <Navbar />

      <div
        className="dashboard-container"
        style={{
          padding:
            "40px",
          color:
            "white",
          background:
            "#020617",
          minHeight:
            "100vh",
        }}
      >
        <h1
          style={{
            fontSize:
              "50px",
            marginBottom:
              "20px",
          }}
        >
          Check
          Plagiarism
        </h1>

        {/* Upload Section */}
        <div
          style={{
            background:
              "#0f172a",
            padding:
              "25px",
            borderRadius:
              "15px",
            border:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h3>
            Upload
            Document
          </h3>

          <input
            type="file"
            accept=".txt,.pdf,.doc,.docx"
            onChange={
              handleFileUpload
            }
            style={{
              marginTop:
                "15px",
              marginBottom:
                "20px",
              color:
                "white",
            }}
          />

          {fileName && (
            <p
              style={{
                color:
                  "#8b5cf6",
              }}
            >
              Uploaded:
              {" "}
              {
                fileName
              }
            </p>
          )}

          <textarea
            placeholder="Paste content here or upload a document..."
            value={text}
            onChange={(
              e
            ) =>
              setText(
                e.target
                  .value
              )
            }
            rows="10"
            style={{
              width:
                "100%",
              padding:
                "20px",
              borderRadius:
                "12px",
              background:
                "#111827",
              color:
                "white",
              border:
                "1px solid #8b5cf6",
              marginTop:
                "20px",
            }}
          />

          <button
            onClick={
              handleCheck
            }
            style={{
              marginTop:
                "20px",
              width:
                "100%",
              padding:
                "16px",
              border:
                "none",
              borderRadius:
                "12px",
              background:
                "#8b5cf6",
              color:
                "white",
              fontSize:
                "20px",
              cursor:
                "pointer",
            }}
          >
            {loading
              ? "Analyzing..."
              : "Check Plagiarism"}
          </button>
        </div>

        {/* Result */}
        {showResult && (
          <>
            <div
              style={{
                display:
                  "grid",
                gridTemplateColumns:
                  "repeat(4,1fr)",
                gap:
                  "20px",
                marginTop:
                  "40px",
              }}
            >
              <div
                style={{
                  background:
                    "#0f172a",
                  padding:
                    "20px",
                  borderRadius:
                    "15px",
                }}
              >
                <h3>
                  Plagiarism
                  Score
                </h3>
                <h1>
                  {
                    score
                  }
                  %
                </h1>
              </div>

              <div
                style={{
                  background:
                    "#0f172a",
                  padding:
                    "20px",
                  borderRadius:
                    "15px",
                }}
              >
                <h3>
                  Originality
                </h3>
                <h1>
                  {
                    originality
                  }
                  %
                </h1>
              </div>

              <div
                style={{
                  background:
                    "#0f172a",
                  padding:
                    "20px",
                  borderRadius:
                    "15px",
                }}
              >
                <h3>
                  Total
                  Words
                </h3>
                <h1>
                  {
                    words
                  }
                </h1>
              </div>

              <div
                style={{
                  background:
                    "#0f172a",
                  padding:
                    "20px",
                  borderRadius:
                    "15px",
                }}
              >
                <h3>
                  Sources
                </h3>
                <h1>
                  {
                    sources
                  }
                </h1>
              </div>
            </div>

            {/* Matched Content */}
            <div
              style={{
                marginTop:
                  "40px",
              }}
            >
              <h2>
                Matched
                Sources
              </h2>

              {matchedContent.map(
                (
                  item,
                  index
                ) => (
                  <div
                    key={
                      index
                    }
                    style={{
                      background:
                        "#0f172a",
                      border:
                        "1px solid #8b5cf6",
                      padding:
                        "15px",
                      marginTop:
                        "15px",
                      borderRadius:
                        "12px",
                    }}
                  >
                    <p>
                      {
                        item.sentence
                      }
                    </p>

                    <strong>
                      Similarity:
                      {" "}
                      {
                        item.ratio
                      }
                      %
                    </strong>
                  </div>
                )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;