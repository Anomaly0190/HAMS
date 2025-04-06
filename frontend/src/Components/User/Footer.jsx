import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
 
      <footer class="bg-white text-gray-800  mt-4 border-t-1 ">
        <div class="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 class="text-2xl font-bold text-blue-600">HAMs</h2>
              <p class="mt-2 text-sm text-gray-600">
                Your trusted partner for easy and efficient healthcare
                appointments.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-700 mb-3">
                Quick Links
              </h3>
              <ul class="space-y-2 text-sm">
                <li>
                  <Link to="#" class="hover:text-blue-600 transition">
                    Home
                  </Link>
                </li>
               
                <li>
                  <Link to="#" class="hover:text-blue-600 transition">
                    Find a Doctor
                  </Link>
                </li>
                <li>
                  <Link to="#" class="hover:text-blue-600 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-700 mb-3">Services</h3>
              <ul class="space-y-2 text-sm">
                <li>
                  <Link to="#" class="hover:text-blue-600 transition">
                    Doctor Booking
                  </Link>
                </li>
             
                <li>
                  <Link to="#" class="hover:text-blue-600 transition">
                    Medical History
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-700 mb-3">Contact</h3>
              <p class="text-sm text-gray-600">Email: support@hams.com</p>
              <p class="text-sm text-gray-600">Phone: 977 9812821234</p>
              <p class="text-sm text-gray-600">Location: Kathmandu, Nepal</p>
            </div>
          </div>

          <div class="border-t border-gray-200 mt-10 pt-6 text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} HAMs. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
