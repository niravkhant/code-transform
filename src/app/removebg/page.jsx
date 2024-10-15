import React from "react";

const removeBgPage = () => {
  return (
    <div
  className="flex items-center justify-center overflow-x-clip"
  style={{ minHeight: "calc(-72px + 100vh)" }}
>
  <div className="py-4 md:py-8">
    <div className="mx-auto w-full px-8 max-w-5xl relative">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center md:gap-4">
        <div className="flex flex-col md:flex-row lg:flex-col items-center lg:items-start gap-6 md:gap-8 md:max-w-2xl lg:max-w-lg">
          <video
            preload="auto"
            className="w-full h-auto rounded-4xl max-w-[320px] lg:max-w-[420px]"
            poster="https://sb.kaleidousercontent.com/67418/840x560/d749ed76de/manuel-poster.jpg"
            autoPlay=""
            playsInline="true"
            src="https://sb.kaleidousercontent.com/67418/x/9289c7b8dd/manuel_compressed.mp4"
          />
          <div className="flex flex-col gap-4">
            <h1 className="font-display font-bold text-typo m-0 text-4xl md:text-5xl lg:text-6xl text-center md:!text-left">
              Remove Image Background
            </h1>
            <p className="text-typo-tertiary font-bold text-xl m-0 !text-typo text-center md:!text-left">
              100% Automatically and
              <span className="!py-1 !px-4 bg-brush bg-no-repeat bg-cover bg-center">
                Free
              </span>
            </p>
          </div>
        </div>
        <div className="relative group flex flex-col gap-4 md:gap-8 max-w-md mt-8 md:mt-28">
          <div className="dropzone-enabled" />
          <div className="w-full flex flex-col sm:justify-center sm:items-center sm:gap-8 sm:pt-36 sm:pb-16 rounded-4xl bg-white shadow-2xl">
            <button
              type="button"
              className="!border !border-transparent rounded-full font-bold transition ease-in-out text-center font-body no-underline hover:no-underline inline-flex items-center justify-center text-2xl px-8 py-2.5 text-white !bg-primary hover:!bg-primary-hover active:!bg-primary-hover active:scale-[0.98] focus:outline-none focus-visible:outline-none focus:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-hover"
            >
              Upload Image
            </button>
            <div className="hidden sm:flex flex-col gap-1.5">
              <p className="m-0 font-bold text-xl text-typo-secondary">
                or drop a file,
              </p>
              <span className="text-xs text-typo-secondary text-center">
                paste image or{"{"}" "{"}"}
                <a
                  href="#"
                  className="text-typo-secondary select-photo-url-btn underline"
                >
                  URL
                </a>
                {"{"}" "{"}"}​{"{"}" "{"}"}
              </span>
            </div>
          </div>
          <div className="max-w-md">
            <div className="flex flex-col gap-2 sm:flex-row justify-between items-center">
              <div className="flex flex-row sm:!flex-col sm:justify-center">
                <span className="font-bold text-typo-secondary !mr-1 sm:!mr-0">
                  No image?
                </span>
                <span className="font-bold text-typo-secondary">
                  Try one of these:
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  data-v-f16f3f3b=""
                  className="btn-image !rounded-lg overflow-hidden select-none shrink-0 relative focus:outline-none focus:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-hover focus-visible:outline-none h-12 w-12 sm:w-16 sm:h-16 transition ease-in-out active:scale-[0.98] border-1 !border-secondary hover:!border-secondary-hover active:!border-secondary-active"
                  ondragstart="return false;"
                >
                  <div
                    data-v-f16f3f3b=""
                    className="w-full h-full hover:opacity-80 hover:!border-secondary-hover active:opacity-60 active:!border-secondary-active"
                  >
                    <figure className="!m-0">
                      <picture>
                        <img
                          src="https://static.remove.bg/uploader-examples/person/7_thumbnail.jpg"
                          alt="Example image"
                          className="w-full h-auto"
                          loading="lazy"
                          draggable="false"
                        />
                      </picture>
                    </figure>
                  </div>
                </button>
                <button
                  data-v-f16f3f3b=""
                  className="btn-image !rounded-lg overflow-hidden select-none shrink-0 relative focus:outline-none focus:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-hover focus-visible:outline-none h-12 w-12 sm:w-16 sm:h-16 transition ease-in-out active:scale-[0.98] border-1 !border-secondary hover:!border-secondary-hover active:!border-secondary-active"
                  ondragstart="return false;"
                >
                  <div
                    data-v-f16f3f3b=""
                    className="w-full h-full hover:opacity-80 hover:!border-secondary-hover active:opacity-60 active:!border-secondary-active"
                  >
                    <figure className="!m-0">
                      <picture>
                        <img
                          src="https://static.remove.bg/uploader-examples/animal/3_thumbnail.jpg"
                          alt="Example image"
                          className="w-full h-auto"
                          loading="lazy"
                          draggable="false"
                        />
                      </picture>
                    </figure>
                  </div>
                </button>
                <button
                  data-v-f16f3f3b=""
                  className="btn-image !rounded-lg overflow-hidden select-none shrink-0 relative focus:outline-none focus:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-hover focus-visible:outline-none h-12 w-12 sm:w-16 sm:h-16 transition ease-in-out active:scale-[0.98] border-1 !border-secondary hover:!border-secondary-hover active:!border-secondary-active"
                  ondragstart="return false;"
                >
                  <div
                    data-v-f16f3f3b=""
                    className="w-full h-full hover:opacity-80 hover:!border-secondary-hover active:opacity-60 active:!border-secondary-active"
                  >
                    <figure className="!m-0">
                      <picture>
                        <img
                          src="https://static.remove.bg/uploader-examples/car/4_thumbnail.jpg"
                          alt="Example image"
                          className="w-full h-auto"
                          loading="lazy"
                          draggable="false"
                        />
                      </picture>
                    </figure>
                  </div>
                </button>
                <button
                  data-v-f16f3f3b=""
                  className="btn-image !rounded-lg overflow-hidden select-none shrink-0 relative focus:outline-none focus:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-hover focus-visible:outline-none h-12 w-12 sm:w-16 sm:h-16 transition ease-in-out active:scale-[0.98] border-1 !border-secondary hover:!border-secondary-hover active:!border-secondary-active"
                  ondragstart="return false;"
                >
                  <div
                    data-v-f16f3f3b=""
                    className="w-full h-full hover:opacity-80 hover:!border-secondary-hover active:opacity-60 active:!border-secondary-active"
                  >
                    <figure className="!m-0">
                      <picture>
                        <img
                          src="https://static.remove.bg/uploader-examples/product/1_thumbnail.jpg"
                          alt="Example image"
                          className="w-full h-auto"
                          loading="lazy"
                          draggable="false"
                        />
                      </picture>
                    </figure>
                  </div>
                </button>
              </div>
            </div>
            <p className="text-2xs text-typo-secondary text-center sm:!text-left !mt-4">
              By uploading an image or URL you agree to our{"{"}" "{"}"}
              <a
                target="_blank"
                className="text-typo-secondary underline"
                draggable="false"
                href="/tos"
              >
                Terms of Service
              </a>
              . To learn more about how remove.bg handles your personal data,
              check our{"{"}" "{"}"}
              <a
                target="_blank"
                rel="noopener"
                className="underline"
                style={{ color: "inherit" }}
                href="/privacy"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
          <svg
            width={184}
            height={192}
            viewBox="0 0 184 192"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-brand absolute hidden md:block -top-16 -right-[40%] xl:-right-1/2 transition ease-in-out transform-gpu"
          >
            <path
              d="M182.648 183.128C178.597 187.405 171.028 191.799 163.237 191.977C157.571 192.103 152.323 190.012 148.058 185.927C139.232 177.468 138.372 158.735 137.621 142.22C137.204 133.157 136.747 122.877 134.696 119.768C131.836 115.376 124.509 108.471 107.735 111.458C94.4152 113.834 81.7884 115.329 73.6959 107.665C64.5031 98.9588 66.3544 85.5644 68.5325 76.244C69.271 73.0119 70.4408 69.8949 72.0105 66.9765C67.2371 63.1964 63.8062 58.7353 62.4015 54.3978C60.8072 49.4882 61.1485 43.5448 61.4696 37.8066C61.9457 29.5112 62.3974 21.6751 57.4255 18.3185C52.9599 15.3123 37.4838 14.4287 30.2947 16.7929C23.7769 18.9234 13.5899 18.9589 1.99423 6.93367C1.6401 6.5666 1.36158 6.13357 1.17454 5.65932C0.987495 5.18506 0.895589 4.67887 0.904109 4.16963C0.912629 3.66038 1.02138 3.15807 1.22417 2.69136C1.42696 2.22466 1.71981 1.80269 2.086 1.44957C2.45218 1.09646 2.88452 0.819116 3.35835 0.63335C3.83218 0.447587 4.33822 0.357049 4.84756 0.366916C5.3569 0.376784 5.85958 0.486848 6.32689 0.690842C6.7942 0.894836 7.21699 1.18879 7.57112 1.55585C12.4264 6.59173 19.8904 12.0448 27.8628 9.42376C35.8352 6.80273 54.2649 6.8425 61.7549 11.8939C70.3895 17.7206 69.7629 28.6339 69.2095 38.2642C68.9095 43.5287 68.6214 48.5014 69.7664 52.0262C70.775 55.1189 73.3834 58.1558 76.531 60.6768C76.9819 60.2006 77.4049 59.754 77.8356 59.3765C82.0627 55.4357 86.9774 53.4477 91.2962 53.9361C96.6192 54.5284 100.113 58.7801 100.195 64.7704C100.25 70.0573 97.3594 73.7039 92.4487 74.5175C88.6575 75.1291 83.6402 73.9231 78.5462 71.2419C77.4414 73.3904 76.607 75.6679 76.0619 78.0227C73.2511 90.0426 74.1576 97.4483 79.0031 102.037C84.4653 107.21 95.0526 105.831 106.352 103.814C122.037 101.019 134.401 105.177 141.174 115.524C144.395 120.438 144.815 129.89 145.362 141.875C146.018 156.197 146.832 174.017 153.401 180.345C156.233 183.027 159.368 184.313 163.024 184.23C168.933 184.098 174.615 180.307 176.996 177.793C177.702 177.048 178.675 176.614 179.703 176.588C180.73 176.561 181.727 176.944 182.474 177.651C183.221 178.359 183.657 179.333 183.687 180.361C183.716 181.388 183.336 182.384 182.63 183.129L182.648 183.128ZM83.3056 64.9216C86.4005 66.4052 89.3016 67.1611 91.1914 66.8526C91.9094 66.7359 92.4752 66.6434 92.4525 64.8379C92.4131 61.8384 91.0498 61.6861 90.4681 61.6233C88.7028 61.4381 85.9689 62.5013 83.2972 64.9304L83.3056 64.9216Z"
              fill="currentColor"
            />
          </svg>
          <svg
            width={34}
            height={27}
            viewBox="0 0 34 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-brand absolute hidden md:block -right-24 top-32 transition ease-in-out rotate-6 group-hover:rotate-[35deg] group-hover:-translate-x-4 transform-gpu"
          >
            <path
              d="M33.8167 1.68928C33.68 1.41639 33.4726 1.1859 33.2164 1.0223C32.9602 0.858703 32.6649 0.768091 32.3618 0.760085L1.71198 0H1.67137C1.37184 0.00107942 1.07808 0.0829958 0.820576 0.237246C0.563072 0.391496 0.351224 0.612448 0.207062 0.877146C0.0629004 1.14184 -0.00833251 1.44064 0.000775816 1.74247C0.00988414 2.04431 0.098999 2.33817 0.258855 2.59355L15.055 26.2114C15.2027 26.4471 15.4059 26.6423 15.6464 26.7799C15.887 26.9175 16.1575 26.9931 16.4339 27H16.4745C16.7443 26.9999 17.01 26.9342 17.2492 26.8083C17.4884 26.6825 17.6938 26.5003 17.8482 26.2773L33.7019 3.42128C33.8743 3.16991 33.9761 2.87618 33.9963 2.57124C34.0165 2.2663 33.9544 1.96153 33.8167 1.68928Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <svg
        width={98}
        height={132}
        viewBox="0 0 98 132"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-brand absolute hidden md:block -left-12 xl:-left-24 -bottom-32 xl:-bottom-44 transition ease-in-out transform-gpu"
      >
        <path
          d="M46.9684 132C46.3582 132 45.7557 132 45.1494 131.951C44.6766 131.926 44.2134 131.808 43.7861 131.603C43.3589 131.398 42.976 131.111 42.6593 130.758C42.3426 130.405 42.0982 129.993 41.9403 129.545C41.7824 129.098 41.7139 128.623 41.7388 128.149C41.7637 127.675 41.8815 127.21 42.0854 126.781C42.2893 126.353 42.5753 125.969 42.9272 125.651C43.2791 125.333 43.6899 125.088 44.1362 124.93C44.5825 124.771 45.0556 124.702 45.5283 124.727C59.2502 125.488 80.2707 113.551 88.494 95.2532C90.3887 91.0295 92.8253 83.1715 87.7777 78.0241C85.4623 75.6671 82.4724 74.3669 79.3953 73.7016C78.8117 74.5912 78.1978 75.458 77.546 76.3057C70.2663 85.7757 55.3659 99.5491 44.1982 98.6861C40.3329 98.3896 37.2785 96.4051 35.3686 92.9076C33.7959 90.0412 33.8528 86.6729 35.5278 83.4262C36.8428 80.8829 39.1126 78.3929 42.2807 76.0282C50.4888 69.8924 63.7825 65.2924 75.5111 65.95C79.9145 56.9515 80.4943 46.5046 76.269 41.2051C74.1355 38.5211 70.2057 34.8601 60.7584 34.0465C57.9495 33.8716 55.1304 33.9607 52.3381 34.3127C48.954 44.6038 40.4238 53.7999 32.5492 57.6548C25.6295 61.0421 19.7141 60.046 16.7317 54.9936C13.4121 49.3672 14.837 44.8052 16.6104 41.9654C21.4042 34.3089 34.9517 29.8381 46.4605 27.8993C46.8775 25.1558 46.5865 22.3509 45.6155 19.7523C43.6866 14.8102 39.3741 10.826 33.7846 8.82636C26.1677 6.10057 16.1709 6.92552 4.8781 11.2328C4.43594 11.401 3.96514 11.4803 3.49246 11.466C3.01978 11.4517 2.55454 11.3441 2.12329 11.1494C1.25236 10.7562 0.572784 10.032 0.234084 9.13617C-0.104616 8.24033 -0.0747715 7.24622 0.317165 6.3725C0.709101 5.49878 1.43098 4.81707 2.32397 4.47729C15.4206 -0.510484 26.8195 -1.33547 36.2062 2.02519C43.7549 4.72817 49.6286 10.2292 52.3192 17.1178C53.5254 20.2528 54.0299 23.6155 53.7971 26.9678C56.3162 26.7255 58.8507 26.6861 61.3761 26.85C70.5506 27.6408 77.2656 30.8607 81.9039 36.7039C87.5693 43.8358 87.6603 56.1151 82.8893 67.1666C86.6655 68.1971 90.111 70.1919 92.8898 72.9565C98.8621 79.0391 99.6276 88.0187 95.0385 98.2223C87.5883 114.893 66.7497 132 46.9684 132ZM70.8423 73.1922C69.8684 73.2568 68.9665 73.3519 68.1707 73.4583C60.4022 74.4848 52.1373 77.6934 46.6008 81.822C43.6298 84.0383 40.5641 87.3648 41.6744 89.4253C42.4096 90.7597 43.3266 91.3755 44.7514 91.4858C50.6972 91.961 62.3766 83.6885 70.8423 73.196V73.1922ZM44.0504 35.6889C34.8987 37.6619 25.622 41.2165 22.742 45.8165C21.9841 47.0482 21.3928 48.6639 22.9617 51.3213C24.163 53.359 27.5091 52.1044 29.4266 51.173C34.8722 48.5157 40.7611 42.4938 44.058 35.6927L44.0504 35.6889Z"
          fill="currentColor"
        />
      </svg>
    </div>
  </div>
</div>

  );
};

export default removeBgPage;
