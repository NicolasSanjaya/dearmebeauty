import Circle from "@/components/Circle";
import React from "react";

const Profile = () => {
  return (
    <div className="overflow-hidden w-full">
      <Circle className="absolute -top-44 -left-12 opacity-30 blur-xl w-[350px] h-[350px] z-50" />
      {/* Hero */}
      <section className="w-full bg-gradient-to-t from-softpink to-softwhite p-12 relative z-10">
        <div>
          {/* Our History */}
          <div className="bg-white w-[80px] h-[3px] mb-4"></div>
          <p>Know</p>
          <p className="font-semibold text-lg">Our History</p>
          <div className="mt-4 bg-slate-600 w-full h-[400px] rounded-md"></div>
        </div>
        <p className="text-white font-semibold text-xl mt-12">
          Our Success <span className="font-normal">Numbers</span>
        </p>
        {/* Info */}
        <div className="flex justify-around bg-pink bg-opacity-50 p-12 rounded-lg w-[70%] mt-6 mx-auto gap-8 text-white">
          <div className="flex flex-col gap-2 justify-center items-center">
            <h5 className="font-bold text-4xl">6,500,00</h5>
            <p>total products sold</p>
          </div>
          {/* Divider */}
          <div className="w-[3px] bg-white rounded"></div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <h5 className="font-bold text-4xl">+1,000</h5>
            <p>Average start review 4,5 stars</p>
          </div>
          {/* Divider */}
          <div className="w-[3px] bg-white rounded"></div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <h5 className="font-bold text-4xl">+20,000</h5>
            <p>Number of clients served</p>
          </div>
        </div>
      </section>
      {/* Section 2 */}
      <section className="mt-12 p-12 relative">
        {/* Our Vision */}
        <Circle className="absolute -top-32 -left-12 opacity-30 blur-xl w-[450px] h-[450px]" />
        <div className="relative">
          <div className="bg-white w-[80px] h-[3px] mb-4"></div>
          <p>Our</p>
          <p className="font-semibold text-lg">Vision</p>
          <div className="mt-4 bg-slate-600 w-full h-[500px] rounded-md"></div>
        </div>
      </section>
      {/* Section 3 */}
      <section className="bg-gradient-to-t from-softpink via-softwhite to-softpink p-12">
        <div>
          <div className="bg-white w-[80px] h-[3px] mb-4"></div>
          <p>Our</p>
          <p className="font-semibold text-lg">Vision</p>
        </div>
        {/* Timeline */}
        <div className="flex justify-center items-center">
          <ul className="timeline">
            <li>
              <div className="timeline-start timeline-box">Bold</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">Empowered</div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box">Authentic</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">Unique</div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start timeline-box flex flex-col text-wrap w-[200px]">
                <h4 className="font-bold text-xl">Timeless</h4>
                <p className="mt-2">
                  We inspire boldness and confidence in everyone who uses our
                  products.
                </p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-end timeline-box">Youtful</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Profile;
