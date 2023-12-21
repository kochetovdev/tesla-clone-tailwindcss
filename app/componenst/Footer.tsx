const footerData = [
  "Privacy & Legal",
  "Contact",
  "Careers",
  "News",
  "Engage",
  "Location",
];

const Footer = () => {
  const hideForMobile = ["Engage", "Location"];
  return (
    <footer className="flex h-28 md:h-10 justify-center items-center">
      <ul className="flex flex-col justify-center items-center md:flex-row md:space-x-4 text-[12px] text-gray-500">
        <li className="link">Tesla &copy; 2023</li>
        {footerData.map((footerItem) => (
          <li
            key={footerItem}
            className={`${
              hideForMobile.includes(footerItem)
                ? "link hidden md:inline"
                : "link"
            }`}
          >
            {footerItem}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
