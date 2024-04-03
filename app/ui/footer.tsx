
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white text-center p-5">
      <p>&copy; {currentYear} Next-Commerce. All rights reserved.</p>
    </footer>
  );
}