export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-100">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-5xl font-bold text-gray-900">
          Static Stack
        </h1>
        <p className="text-xl text-gray-600 max-w-md">
          Your static website is live. Built with Next.js and deployed by{" "}
          <a
            href="https://deploybox.io"
            className="text-cyan-600 hover:text-cyan-800 underline"
          >
            Deploy Box
          </a>
          .
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <a
            href="https://nextjs.org/docs"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
          >
            Next.js Docs
          </a>
          <a
            href="https://deploybox.io/docs"
            className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 transition"
          >
            Deploy Box Docs
          </a>
        </div>
      </div>
    </main>
  );
}
