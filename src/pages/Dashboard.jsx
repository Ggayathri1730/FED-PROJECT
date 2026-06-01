import { useState } from "react";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const [score, setScore] = useState(0);
  const [originality, setOriginality] = useState(100);
  const [words, setWords] = useState(0);
  const [sources, setSources] = useState(0);

  const [matchedContent, setMatchedContent] =
    useState([]);

  const handleCheck = () => {
    // Validation
    if (
      text.trim() === "" &&
      !file
    ) {
      alert(
        "Please enter text or upload a file!"
      );
      return;
    }

    setLoading(true);
    setShowResult(false);
    setProgress(0);

    let currentProgress = 0;

    const interval =
      setInterval(() => {
        currentProgress += 10;
        setProgress(
          currentProgress
        );

        if (
          currentProgress >=
          100
        ) {
          clearInterval(
            interval
          );

          // Word count
          const wordCount =
            text.trim() === ""
              ? 120
              : text
                  .trim()
                  .split(/\s+/)
                  .length;

          const lowerText =
            text.toLowerCase();

          let plagiarismScore =
            0;

          let matched = [];

          // Keywords to detect copied content
          const copiedKeywords =
            [
              "according to",
              "research",
              "study",
              "wikipedia",
              "article",
              "artificial intelligence",
              "machine learning",
              "technology",
              "internet",
              "source",
              "data science",
            ];

          let copiedDetected =
            false;

          copiedKeywords.forEach(
            (word) => {
              if (
                lowerText.includes(
                  word
                )
              ) {
                copiedDetected =
                  true;
              }
            }
          );

          // Smart Logic
          if (
            wordCount < 50
          ) {
            plagiarismScore =
              copiedDetected
                ? 30
                : 0;
          } else if (
            wordCount >= 50 &&
            wordCount <=
              100
          ) {
            plagiarismScore =
              copiedDetected
                ? 55
                : 25;
          } else {
            plagiarismScore =
              copiedDetected
                ? 100
                : 70;
          }

          // If uploaded file
          if (
            file &&
            text.trim() === ""
          ) {
            plagiarismScore = 65;
          }

          // Matched Content
          if (
            plagiarismScore ===
            0
          ) {
            matched = [
              {
                text:
                  "No copied content found. Looks original.",
                level:
                  "Original Content",
              },
            ];
          } else if (
            plagiarismScore <
            60
          ) {
            matched = [
              {
                text:
                  "Some copied content detected.",
                level:
                  "Medium Similarity",
              },
            ];
          } else {
            matched = [
              {
                text:
                  "Highly copied content detected.",
                level:
                  "High Similarity",
              },
            ];
          }

          setScore(
            plagiarismScore
          );

          setOriginality(
            100 -
              plagiarismScore
          );

          setWords(
            wordCount
          );

          setSources(
            plagiarismScore ===
              0
              ? 0
              : plagiarismScore <
                60
              ? 3
              : 8
          );

          setMatchedContent(
            matched
          );

          setLoading(false);
          setShowResult(true);
        }
      }, 200);
  };

  return (
    <div className="dashboard-page">
      <Navbar />

      <div className="dashboard-container">
        <h1>
          Dashboard 👋
        </h1>

        <p>
          Welcome back!
          Analyze your content
          for originality.
        </p>

        {/* Check Box */}
        <div className="text-check-box">
          <h2>
            Check Plagiarism
          </h2>

          <textarea
            placeholder="Paste your content here..."
            value={text}
            onChange={(e) =>
              setText(
                e.target.value
              )
            }
          ></textarea>

          <h3
            style={{
              marginTop:
                "20px",
            }}
          >
            Upload Document:
          </h3>

          <input
            type="file"
            accept=".txt,.pdf,.doc,.docx"
            onChange={(e) =>
              setFile(
                e.target
                  .files[0]
              )
            }
          />

          <button
            className="check-btn"
            onClick={
              handleCheck
            }
          >
            Check
            Plagiarism
          </button>

          {loading && (
            <div
              style={{
                marginTop:
                  "20px",
              }}
            >
              <p>
                Checking
                plagiarism...
              </p>

              <progress
                value={
                  progress
                }
                max="100"
                style={{
                  width:
                    "100%",
                }}
              />
            </div>
          )}
        </div>

        {/* Result */}
        {showResult && (
          <>
            <div className="stats-container">
              <div className="stat-card">
                <h3>
                  Plagiarism
                  Score
                </h3>
                <h2>
                  {score}%
                </h2>
              </div>

              <div className="stat-card">
                <h3>
                  Originality
                  Score
                </h3>
                <h2>
                  {
                    originality
                  }
                  %
                </h2>
              </div>

              <div className="stat-card">
                <h3>
                  Total Words
                </h3>
                <h2>
                  {words}
                </h2>
              </div>

              <div className="stat-card">
                <h3>
                  Matched
                  Sources
                </h3>
                <h2>
                  {
                    sources
                  }
                </h2>
              </div>
            </div>

            {/* Matched Content */}
            <div className="matched-section">
              <h2>
                Matched
                Content
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
                    className="match-card"
                  >
                    <p>
                      {
                        item.text
                      }
                    </p>

                    <strong>
                      {
                        item.level
                      }
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