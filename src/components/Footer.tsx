const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
        <p>© {
          // Get the current year dynamically
          new Date().getFullYear()
          } Anas Ibn Belal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;