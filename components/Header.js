export default function Header() {
  const DesktopHeader = () => {
    return (
      <header>
        <nav className="hidden min-[1200px]:block fixed top-0 left-0 right-0 bg-[#fff] border-b border-gray-400 z-50">
          <div className="flex max-w-[1300px] h-[60px] mx-auto px-[25px] justify-between items-center">
            <a href="/">
              <img src="/images/logo.png" alt="" className="w-[220px]" />
            </a>

            <ul className="text-[#3c4043] flex font-bold items-center">
              <li>
                <a
                  href="#"
                  className="text-[15px] hover:bg-orange-600 hover:text-white px-[15px] py-[20px] "
                >
                  Giới thiệu
                </a>
              </li>
              <div className="inline-block group">
                <a
                  href="#"
                  className="text-[15px] hover:bg-orange-600 hover:text-white px-[15px] py-[20px] "
                >
                  Thiết bị
                </a>
                {/* <div className="absolute -left-0 hidden group-hover:block bg-[#f2f2f2] w-full items-center justify-center mt-4">
                <div className="flex">
                  <div className="w-1/4 border-r border-gray-300 my-[20px]">
                    <ul className="flex-row space-y-[10px] my-[20px]">
                      <li>
                        <a
                          href="#"
                          className="text-[15px] pl-[50px] py-[10px] block hover:bg-gray-200"
                        >
                          Thiết bị theo giải pháp
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[15px] pl-[50px] py-[10px] block hover:bg-gray-200"
                        >
                          Thiết bị trung tâm
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[15px] pl-[50px] py-[10px] block hover:bg-gray-200"
                        >
                          Thiết bị độc lập
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[15px] pl-[50px] py-[10px] block hover:bg-gray-200"
                        >
                          Thiết bị kết hợp
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-1/4 border-r border-gray-300 my-[20px]">
                    <ul className="flex-row my-[20px]">
                      <li>
                        <a
                          href="#"
                          className="text-[15px] pl-[50px] py-[10px] block hover:bg-gray-200"
                        >
                          Thiết bị theo giải pháp
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[15px] pl-[50px] py-[10px] block hover:bg-gray-200"
                        >
                          Thiết bị trung tâm
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[15px] pl-[50px] py-[10px] block hover:bg-gray-200"
                        >
                          Thiết bị độc lập
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[15px] pl-[50px] py-[10px] block hover:bg-gray-200"
                        >
                          Thiết bị kết hợp
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-1/4"></div>
                  <div className="w-1/4"></div>
                </div>
              </div> */}
              </div>
              <div className="relative inline-block group">
                <a
                  href="#"
                  className="text-[15px] hover:bg-orange-600 hover:text-white px-[15px] py-[20px] "
                >
                  Giải pháp
                </a>
                {/* <ul className="absolute -left-4 hidden group-hover:block bg-[#f2f2f2] rounded-md w-[190px] p-[10px] mt-4">
                <li>
                  <a
                    href="#"
                    className="text-[15px] ml-[10px] py-[5px] block hover:text-gray-400"
                  >
                    Giải pháp điều khiển
                  </a>
                  <hr className="border-gray-400" />
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[15px] ml-[10px] py-[5px] block hover:text-gray-400"
                  >
                    Giải pháp chiếu sáng
                  </a>
                  <hr className="border-gray-400" />
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[15px] ml-[10px] py-[5px] block hover:text-gray-400"
                  >
                    Giải pháp an ninh
                  </a>
                  <hr className="border-gray-400" />
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[15px] ml-[10px] py-[5px] block hover:text-gray-400"
                  >
                    Giải pháp truyền hình
                  </a>
                </li>
              </ul> */}
              </div>
              <li>
                <a
                  href="#"
                  className="text-[15px] hover:bg-orange-600 hover:text-white px-[15px] py-[20px] "
                >
                  Căn hộ mẫu
                </a>
              </li>
              <div className="relative inline-block group">
                <a
                  href="#"
                  className="text-[15px] hover:bg-orange-600 hover:text-white px-[15px] py-[20px] "
                >
                  Tin tức
                </a>

                {/* <ul className="absolute -left-4 hidden group-hover:block bg-[#f2f2f2] rounded-md w-[160px] p-[10px] mt-4">
                <li>
                  <a
                    href="#"
                    className="text-[15px] ml-[10px] py-[5px] block hover:text-gray-400"
                  >
                    Khuyến mãi
                  </a>
                  <hr className="border-gray-400" />
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[15px] ml-[10px] py-[5px] block hover:text-gray-400"
                  >
                    Hướng dẫn
                  </a>
                  <hr className="border-gray-400" />
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[15px] ml-[10px] py-[5px] block hover:text-gray-400"
                  >
                    Kiến thức
                  </a>
                  <hr className="border-gray-400" />
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[15px] ml-[10px] py-[5px] block hover:text-gray-400"
                  >
                    Thư viện
                  </a>
                  <hr className="border-gray-400" />
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[15px] ml-[10px] py-[5px] block hover:text-gray-400"
                  >
                    Công trình
                  </a>
                  <hr className="border-gray-400" />
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[15px] ml-[10px] py-[5px] block hover:text-gray-400"
                  >
                    Catalog
                  </a>
                </li>
              </ul> */}
              </div>
              <div className="relative inline-block group">
                <a
                  href="#"
                  className="text-[15px] hover:bg-orange-600 hover:text-white px-[15px] py-[20px] "
                >
                  Hỗ trợ
                </a>

                {/* <ul className="absolute -left-4 hidden group-hover:block bg-[#f2f2f2] rounded-md w-[160px] p-[10px] mt-4">
                <li>
                  <a
                    href="#"
                    className="text-[15px] ml-[10px] py-[5px] block hover:text-gray-400"
                  >
                    Đối tác
                  </a>
                  <hr className="border-gray-400" />
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[15px] ml-[10px] py-[5px] block hover:text-gray-400"
                  >
                    Liên hệ
                  </a>
                  <hr className="border-gray-400" />
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[15px] ml-[10px] py-[5px] block hover:text-gray-400"
                  >
                    BrandShop
                  </a>
                </li>
              </ul> */}
              </div>
              <li>
                <a className="text-[15px] hover:bg-orange-600 hover:text-white px-[15px] py-[20px]">
                  <svg
                    className="inline-block"
                    width="26"
                    height="26"
                    viewBox="0 0 39.057 42.761"
                  >
                    <path
                      id="shopping-bag"
                      d="M57.039,40.975,54.167,12a1.638,1.638,0,0,0-1.687-1.4H46.559V8.18c0-4.51-4.049-8.18-9.026-8.18s-9.026,3.669-9.026,8.18V10.6H22.581A1.638,1.638,0,0,0,20.895,12L18.012,41.089a1.447,1.447,0,0,0,.437,1.173,1.778,1.778,0,0,0,1.25.5H55.368a1.62,1.62,0,0,0,1.694-1.535A1.421,1.421,0,0,0,57.039,40.975ZM31.895,8.18a5.4,5.4,0,0,1,5.638-5.11,5.4,5.4,0,0,1,5.639,5.11V10.6H31.895ZM21.551,39.692,24.13,13.67h4.377v2.745a1.7,1.7,0,0,0,3.387,0V13.67H43.172v2.745a1.7,1.7,0,0,0,3.387,0V13.67h4.373l2.579,26.022Z"
                      transform="translate(-18.005)"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a className="text-[15px] hover:bg-orange-600 hover:text-white px-[15px] py-[20px]">
                  <svg
                    className="inline-block"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9.65904 19.3111C11.804 19.3111 13.8881 18.5952 15.5803 17.2769L21.9651 23.6627C22.4423 24.1236 23.2022 24.1104 23.663 23.6332C24.1125 23.1676 24.1125 22.4302 23.663 21.9646L17.2781 15.5788C20.549 11.3678 19.7873 5.30171 15.577 2.03026C11.3667 -1.24119 5.30155 -0.478883 2.03061 3.73209C-1.24033 7.94306 -0.478611 14.0092 3.7317 17.2806C5.4267 18.5975 7.51264 19.312 9.65904 19.3111ZM4.52905 4.52581C7.36217 1.69224 11.9559 1.69177 14.7895 4.52581C17.6226 7.35937 17.6231 11.9538 14.7895 14.7879C11.9564 17.6214 7.36264 17.6219 4.52905 14.7879C1.69592 11.9745 1.67904 7.39688 4.49154 4.56331C4.5042 4.55065 4.51639 4.53846 4.52905 4.52581Z"
                      fill="black"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[15px] hover:bg-orange-600 hover:text-white px-[15px] py-[20px]"
                >
                  Đăng nhập
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  };

  const MobileHeader = () => {
    return (
      <header>
        <nav className="block min-[1200px]:hidden top-0 left-0 right-0 bg-[#fff] border-b border-gray-400 z-50">
          <div className="h-[4px] bg-orange-500"></div>
          <div className="flex relative h-[56px] mx-auto p-[20px] justify-between items-center">
            <a href="/">
              <img src="/images/logo.png" alt="" className="w-[160px]" />
            </a>

            <ul className="flex space-x-[20px]">
              <li>
                <a href="#">
                  <svg
                    className="inline-block"
                    width="24"
                    height="24"
                    viewBox="0 0 39.057 42.761"
                  >
                    <path
                      d="M57.039,40.975,54.167,12a1.638,1.638,0,0,0-1.687-1.4H46.559V8.18c0-4.51-4.049-8.18-9.026-8.18s-9.026,3.669-9.026,8.18V10.6H22.581A1.638,1.638,0,0,0,20.895,12L18.012,41.089a1.447,1.447,0,0,0,.437,1.173,1.778,1.778,0,0,0,1.25.5H55.368a1.62,1.62,0,0,0,1.694-1.535A1.421,1.421,0,0,0,57.039,40.975ZM31.895,8.18a5.4,5.4,0,0,1,5.638-5.11,5.4,5.4,0,0,1,5.639,5.11V10.6H31.895ZM21.551,39.692,24.13,13.67h4.377v2.745a1.7,1.7,0,0,0,3.387,0V13.67H43.172v2.745a1.7,1.7,0,0,0,3.387,0V13.67h4.373l2.579,26.022Z"
                      transform="translate(-18.005)"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <svg
                  className="inline-block"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.65904 19.3111C11.804 19.3111 13.8881 18.5952 15.5803 17.2769L21.9651 23.6627C22.4423 24.1236 23.2022 24.1104 23.663 23.6332C24.1125 23.1676 24.1125 22.4302 23.663 21.9646L17.2781 15.5788C20.549 11.3678 19.7873 5.30171 15.577 2.03026C11.3667 -1.24119 5.30155 -0.478883 2.03061 3.73209C-1.24033 7.94306 -0.478611 14.0092 3.7317 17.2806C5.4267 18.5975 7.51264 19.312 9.65904 19.3111ZM4.52905 4.52581C7.36217 1.69224 11.9559 1.69177 14.7895 4.52581C17.6226 7.35937 17.6231 11.9538 14.7895 14.7879C11.9564 17.6214 7.36264 17.6219 4.52905 14.7879C1.69592 11.9745 1.67904 7.39688 4.49154 4.56331C4.5042 4.55065 4.51639 4.53846 4.52905 4.52581Z"
                    fill="black"
                  ></path>
                </svg>
              </li>

              <li>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 44.17 37.976"
                  className="inline-block"
                >
                  <g transform="translate(-2720.804 -221.234)">
                    <g>
                      <path
                        d="M2762.3,226.584h-28.051a2.675,2.675,0,0,1,0-5.35H2762.3a2.675,2.675,0,1,1,0,5.35Z"
                        fill="#1a1a1a"
                      ></path>
                    </g>
                    <g>
                      <path
                        d="M2762.3,259.21h-38.82a2.675,2.675,0,1,1,0-5.35h38.82a2.675,2.675,0,1,1,0,5.35Z"
                        fill="#1a1a1a"
                      ></path>
                    </g>
                    <g>
                      <path
                        d="M2762.3,242.879h-14.025a2.674,2.674,0,1,1,0-5.349H2762.3a2.674,2.674,0,1,1,0,5.349Z"
                        fill="#1a1a1a"
                      ></path>
                    </g>
                  </g>
                </svg>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  };

  return (
    <div>
      <MobileHeader />
      <DesktopHeader />
    </div>
  );
}
