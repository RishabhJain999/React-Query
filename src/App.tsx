import PostsPage from "./Pages/PostsPage";
const App = () => {
  return (
    <div className="min-h-screen">
      <div>
        <h1 className="mb-6 text-2xl font-semibold text-gray-800">
          Posts Using React-Query
        </h1>
        <PostsPage />
      </div>
    </div>
  );
};

export default App;
