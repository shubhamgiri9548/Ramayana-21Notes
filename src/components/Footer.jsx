// components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10 text-center">
      <p>&copy; {new Date().getFullYear()} Ramayana Channel. All rights reserved.</p>
      <p className="text-sm mt-2">Follow us on social media!</p>
    </footer>
  );
};

export default Footer;
