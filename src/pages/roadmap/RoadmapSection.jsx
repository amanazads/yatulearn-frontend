import React, { useState } from "react";
import api from "./api"; // use Axios instance
import "./roadmapsection.css";

const RoadmapSection = () => {
  const [skill, setSkill] = useState("");
  const [roadmap, setRoadmap] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!skill.trim()) return;
    setLoading(true);
    setError("");
    setRoadmap([]);

    try {
      const { data } = await api.post("/roadmap", { skill }); // use api instance
      setRoadmap(data.roadmap || []); // default to empty array
    } catch (err) {
      console.error("Error generating roadmap:", err);
      setError(err.response?.data?.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="roadmap-section">
      <h2>AI Roadmap Generator</h2>

      <div className="roadmap-input-container">
        <input
          type="text"
          placeholder="Enter a skill (e.g., Python, Web Dev)"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          className="roadmap-input"
        />
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="roadmap-button"
        >
          {loading ? "Generating..." : "Generate Roadmap"}
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {roadmap.length > 0 && (
        <div className="roadmap-cards-container">
          {roadmap.map((item, index) => (
            <div className="roadmap-card" key={index}>
              <div className="roadmap-step">
                {index + 1}. {item.step}
              </div>
              {item.platform && item.platformLink && (
                <div className="roadmap-platform">
                  Platform:{" "}
                  <a
                    href={item.platformLink}
                    target="_blank"
                    rel="noreferrer"
                    className="roadmap-link"
                  >
                    {item.platform}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoadmapSection;
