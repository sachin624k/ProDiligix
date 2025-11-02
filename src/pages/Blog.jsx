import { useLocation, useNavigate } from "react-router-dom";

function Blog() {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Destructure data safely
  const { result } = location.state || {};  // in case state is undefined

  if (!result) {
    return (
      <div style={{ padding: "2rem" }}>
        <h3>No data found. Please go back.</h3>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Fetched Result</h2>

      {/* You can see what data looks like */}
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}

export default Blog;
