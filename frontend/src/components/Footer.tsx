export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12 rounded-xl px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">Sheffield Anime Group</h3>
          <p className="text-sm text-gray-400">
            Celebrating anime, culture, and community.
          </p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} Sheffield Anime Group. All rights
        reserved.
      </div>
    </footer>
  );
}
