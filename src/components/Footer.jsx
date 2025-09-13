// src/components/Footer.jsx
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-blue-500">FurEver Care</h2>
                    <p className="mt-2 text-gray-400 text-sm">
                        They Deserve Forever Love ❤️
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                    <ul className="mt-3 space-y-2">
                        <li className="hover:text-blue-400 cursor-pointer transition">PetOwner</li>
                        <li className="hover:text-blue-400 cursor-pointer transition">Veterinarian</li>
                        <li className="hover:text-blue-400 cursor-pointer transition">Animal Shelter</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold text-white">Contact</h3>
                    <p className="mt-3 text-gray-400 text-sm">
                        Email: support@furevercare.com
                    </p>
                    <p className="text-gray-400 text-sm">Phone: +234 800 000 0000</p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} FurEver Care. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
