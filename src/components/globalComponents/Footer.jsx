export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* <div className="flex flex-col sm:flex-row justify-between items-start mb-16 gap-6">
          <div className="text-sm">
            <span className="text-gray-900">Speak to our expert at </span>
            <a
              href="tel:1-800-453-6744"
              className="text-blue-600 hover:text-blue-700"
            >
              1-800-453-6744
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-900">Follow Us</span>
          </div>
        </div> */}

        {/* <div
          className="w-full h-px mb-16"
          style={{ backgroundColor: "#EB662B26" }}
        ></div> */}

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Contact */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6">Contact</h3>
            <div className="space-y-3">
              <p className="text-sm text-gray-600 leading-relaxed">
                328 Queensberry Street, North Melbourne VIC3051, Australia.
              </p>
              <p className="text-sm text-gray-600">hi@viatours.com</p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                 Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                   About Us
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Data Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Cookie Policy
                </a>
              </li> */}
              {/* <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Legal
                </a>
              </li> */}
              {/* <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Sitemap
                </a>
              </li> */}
            </ul>
          </div>

          {/* Support */}
          {/* <div>
            <h3 className="text-gray-900 font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Get in Touch
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Help center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Live chat
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  How it works
                </a>
              </li>
            </ul>
          </div> */}

          {/* Newsletter */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Subscribe to the free newsletter and stay up to date
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
                Send
              </button>
            </div>
            <div className="mt-8">
              <h4 className="text-gray-900 font-semibold mb-4">Mobile Apps</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors block"
                >
                  iOS App
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors block"
                >
                  Android App
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">© Copyright Viatours 2024</p>
          <div className="flex gap-2 flex-wrap">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
              alt="American Express"
              className="h-8"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}