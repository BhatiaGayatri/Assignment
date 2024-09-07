import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Home Page</h1>
      <Link
        to="/services/new"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Go to Services New Page
      </Link>
    </div>
  );
}

export default HomePage;
