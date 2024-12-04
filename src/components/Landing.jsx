import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Landing = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Selamat datang ke Toko Reparasi APL
        </h1>
        <p className="text-xl text-gray-600">
          Your trusted repair tracking system
        </p>
      </div>

      <div className="grid gap-8 mb-12 md:grid-cols-2">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Kontak:</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-gray-600">
              <Phone className="w-5 h-5 text-indigo-600" />
              <span>(+62) 812-3456-7890</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Mail className="w-5 h-5 text-indigo-600" />
              <span>contact@friday.com</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <MapPin className="w-5 h-5 text-indigo-600" />
              <span>APL Tower Lt. 37, Jakarta Barat</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Clock className="w-5 h-5 text-indigo-600" />
              <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Layanan kami:
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li>✓ Computer Repair</li>
            <li>✓ Smartphone Service</li>
            <li>✓ Network Solutions</li>
            <li>✓ Data Recovery</li>
            <li>✓ Hardware Upgrades</li>
            <li>✓ Software Installation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Landing;
