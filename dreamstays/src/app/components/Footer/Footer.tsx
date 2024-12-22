import { Instagram, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <div className="bg-[#455d58] p-20 flex justify-between text-white items-center">
      <div>
        <img src="./logo-02.png" alt="Logo" className="h-[170px]" />
      </div>
      <div>
        <p className="text-white text-xl max-w-xl">
          401, Gali Number 2, Raja Park, Jaipur, Rajasthan 302004
        </p>
      </div>
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl">Contact Us</h2>
        <div className="flex gap-2 text-xl pt-5">
          <Phone className="w-[20px]" />
          <p>+919602065754</p>
        </div>
        <div className="flex gap-3 pt-5">
          <Link
            href="https://www.instagram.com/the_cozycorner_jaipur?igsh=NjZyZzJwOXFlZTcx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.airbnb.com/slink/gM3mgLqP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              viewBox="0 0 48 48"
              className="w-6 h-6"
            >
              <path
                fill="#ff5252"
                d="M42.459,32.519c-1.037-3.336-9.539-19.596-12.12-24.5l-0.026-0.048C29.153,5.559,26.676,4,24,4 s-5.153,1.559-6.291,3.929L17.661,8.02C15.08,12.923,6.578,29.183,5.542,32.518C5.261,33.421,5,34.407,5,35.5 c0,4.687,3.813,8.5,8.5,8.5c4.654,0,7.612-1.949,10.5-5.184C26.888,42.051,29.846,44,34.5,44c4.687,0,8.5-3.813,8.5-8.5 C43,34.407,42.739,33.421,42.459,32.519z M23.999,34.662C22.33,32.515,20,28.881,20,26c0-2.206,1.794-4,4-4s4,1.794,4,4 C28,28.872,25.668,32.511,23.999,34.662z M34.5,41c-3.287,0-5.521-1.107-8.325-4.258C27.878,34.596,31,30.104,31,26 c0-3.86-3.141-7-7-7s-7,3.14-7,7c0,4.104,3.122,8.596,4.825,10.742C19.021,39.893,16.787,41,13.5,41C10.468,41,8,38.533,8,35.5 c0-0.653,0.162-1.308,0.406-2.09C9.17,30.95,15.3,18.948,20.316,9.417l0.076-0.146C21.055,7.891,22.471,7,24,7 s2.945,0.891,3.615,2.285l0.068,0.132C32.7,18.948,38.83,30.95,39.595,33.411C39.838,34.192,40,34.847,40,35.5 C40,38.533,37.532,41,34.5,41z"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
