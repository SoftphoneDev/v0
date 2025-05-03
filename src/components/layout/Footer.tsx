export default function Footer() {
  return (
    <footer className="border-t-8 border-black bg-black text-white mt-auto">
      <div className="w-4/5 mx-auto py-8 flex justify-center items-center"> {/* Apply w-4/5 and mx-auto */}
        <p className="text-lg font-mono">
          Bauhaus-Brutalism Design System &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
