"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.DocSurgery = function (_a) {
    var strokeColor = _a.strokeColor, backgroundColor = _a.backgroundColor;
    return (react_1.default.createElement("g", null,
        react_1.default.createElement("path", { d: 'M321.785 513.983C285.628 513.983 238.842 486.173 210.862 469.535C210.626 469.389 210.237 469.156 209.82 468.906C209.31 468.6 208.751 468.266 208.482 468.094L207.181 467.262L203.675 467.032C200.302 466.816 196.883 466.46 193.212 465.941L192.146 465.79L191.095 466.019C190.809 466.082 190.495 466.16 190.167 466.244C189.954 466.298 189.654 466.376 189.467 466.415L189.46 466.415C189.284 466.345 188.852 466.143 188.107 465.597L187.114 464.871L185.916 464.592C178.354 462.841 172.866 460.799 168.123 457.971L167.199 457.42L166.141 457.224C155.997 455.35 144.849 434.247 138.86 422.91C137.912 421.116 137.039 419.463 136.248 418.017L133.518 413.026L128.389 415.486C121.32 418.878 113.893 420.597 106.316 420.598C80.3552 420.6 55.1572 400.355 46.4002 372.46L46.3672 372.357C42.3402 360.29 42.2402 347.381 42.1662 335.976C42.8442 319.48 40.6022 301.143 19.1682 289.905C4.19418 280.963 -2.34482 269.837 0.751178 258.563C4.78518 243.879 23.7152 232.805 44.7842 232.805C45.8662 232.805 46.9662 232.834 48.0542 232.889L53.6202 233.175L54.3152 227.645C55.4542 218.581 56.4202 215.928 62.6362 212.693L65.8742 211.007L65.8652 207.356C65.8182 188.615 59.5572 171.28 53.5032 154.516C44.6762 130.075 36.3382 106.988 48.2962 82.163C62.0652 56.398 85.2312 35.14 115.298 20.679C143.427 7.151 176.177 0 210.008 0C237.16 0 263.635 4.751 286.571 13.737L286.722 13.795C345.152 34.891 413.047 87.287 424.094 152.492C428.016 180.117 423.698 208.403 419.496 229.967L419.422 230.346C419.086 230.785 418.39 231.484 417.946 231.93C417.175 232.706 416.377 233.506 415.685 234.444L413.968 236.767L414.714 239.559C422.908 270.214 425.878 298.251 423.543 322.889L423.408 324.309L423.927 325.636C427.406 334.553 426.838 343.341 426.181 353.516C425.864 358.416 425.537 363.481 425.671 368.823C425.736 404.421 416.626 439.989 400.673 466.411C387.678 487.935 363.723 513.657 323.399 513.965C322.808 513.978 322.295 513.983 321.785 513.983', transform: 'translate(-12.00008 19)', fill: '#8FA7DF', stroke: 'none' }),
        react_1.default.createElement("path", { d: 'M291.131 190.298C283.895 150.268 292.247 90.0164 263.836 58.8164C257.143 29.9004 250.642 7.2514 217.46 1.5704C154.025 -7.2216 85.632 21.6474 43.869 69.5264C-2.67003 115.92 -27.884 305.908 49.962 330.823C54.365 332.194 60.713 329.995 62.761 325.614C82.895 286.729 93.878 244.629 104.569 202.507C137.656 210.859 170.303 195.923 202.835 191.327C221.342 188.249 240.266 189.074 258.334 194.185C265.61 196.243 274.508 200.634 281.435 196.089C285.456 197.854 291.772 195.541 291.131 190.298', transform: 'translate(119.449 151.7207)', fill: backgroundColor || '#FFFFFF', stroke: 'none' }),
        react_1.default.createElement("path", { d: 'M373.119 140.417C372.536 135.589 371.539 130.428 368.199 126.684C365.607 117.414 351.973 118.6 344.373 115.733C321.55 110.917 297.893 109.122 274.829 113.309C258.89 115.303 243.608 120.014 228.098 123.92C213.359 127.507 196.86 123.382 182.927 129.845C143.785 109.583 108.402 83.7484 72.8831 57.8174C50.6851 42.5354 26.6881 28.9184 9.83013 7.37439C11.5911 2.50439 5.44613 -3.25561 2.13713 2.23339C-3.34287 13.0374 2.05313 29.4384 14.4661 32.4174C17.7711 36.9844 21.5771 44.5864 27.8951 44.6694C37.2331 53.1064 44.4011 63.9294 56.7001 68.5394C72.3441 78.5174 87.7481 88.7734 103.41 98.7074C103.41 98.7064 119.273 108.728 119.273 108.728C123.839 111.612 129.571 116.81 135.283 115.102C148.293 123.061 161.94 129.931 175.286 137.302C172.345 163.036 171.199 189.188 159.408 212.915C157.297 221.295 141.136 238.558 145.359 244.931C144 245.018 137.485 245.988 138.985 247.374C146.015 247.987 152.032 252.504 158.269 255.458C194.041 271.706 249.19 313.615 288.627 291.663C310.035 291.352 322.943 274.296 336.328 260.293C351.507 245.332 358.788 225.003 363.705 204.72C369.077 183.77 375.04 162.232 373.119 140.417', transform: 'translate(42.67087 232.59)', fill: '#FFFFFF', stroke: 'none' }),
        react_1.default.createElement("path", { d: 'M48.4111 84.2474C94.4521 2.11938 208.617 -16.9506 291.731 13.9964C354.355 37.7914 418.464 86.7874 431.684 155.82C435.412 181.908 432.075 208.994 427.067 234.701C426.549 237.365 424.031 239.209 421.408 239.598C429.366 268.371 433.97 298.178 431.089 328.002L431.104 328.037C433.459 327.704 435.499 328.258 436.473 330.578C437.034 331.917 436.794 333.704 436.58 335.293C436.51 335.813 436.442 336.312 436.407 336.767C436.205 339.379 436.031 341.994 435.819 344.606C435.595 347.377 434.988 349.904 434.142 352.398C434.042 354.561 433.906 356.725 433.771 358.865C433.469 363.682 433.174 368.372 433.313 372.623C432.461 431.192 410.494 504.268 346.314 519.837C297.298 529.297 250.279 499.956 209.437 474.469C206.16 472.423 202.922 470.403 199.726 468.429C198.722 470.029 197.465 471.5 196.57 472.591C192.534 477.51 185.835 471.331 188.344 466.224L188.24 466.163C196.875 455.877 204.024 444.66 209.916 432.815C212.888 420.548 219.09 409.336 223.113 397.255C225.703 389.48 227.568 381.471 228.028 373.271C228.248 369.359 228.13 365.448 228.012 361.533C227.955 359.673 227.899 357.812 227.879 355.95C227.54 355.484 227.192 355.025 226.832 354.574C218.681 354.156 209.299 347.267 201.753 344.52C181.369 334.722 161.6 323.645 142.591 311.391C142.194 319.722 141.334 328.234 140.468 336.806C137.313 368.034 134.077 400.059 152.844 427.057C157.757 435.318 163.554 443.02 169.943 450.189C172.228 452.918 172.767 455.057 173.82 458.285C174.955 461.766 171.103 466.207 167.419 464.686C154.646 460.71 140.929 433.299 135.4 421.189C112.508 436.281 81.7951 426.69 64.3401 407.938C47.427 390.851 41.1783 366.607 41.8031 343.113L41.8241 342.401C42.5921 313.919 37.5451 307.178 13.8091 292.553C-5.91888 279.265 -3.83388 253.961 15.7591 241.689C27.0811 234.863 42.2761 231.337 55.4071 233.938C53.3611 226.224 55.8741 214.974 64.9991 214.111C64.2201 209.441 64.0421 204.48 64.6491 199.736C62.909 186.277 58.1839 173.174 53.4946 160.17C44.4562 135.106 35.5511 110.412 48.4111 84.2474ZM102.264 40.8444C162.334 0.662383 242.797 1.49138 308.392 31.8484C302.372 32.1784 296.423 33.4174 291.42 35.4754C290.987 35.6524 291.035 36.2664 291.533 36.3034C297.43 36.7344 303.33 36.5454 309.236 36.8284C313.082 37.0124 316.879 37.5824 320.69 37.9944C366.213 62.3874 402.97 101.537 417.994 151.257C422.091 172.448 419.445 193.692 416.343 214.788L415.535 220.24C409.81 202.798 403.025 185.802 396.039 168.833C394.288 163.805 392.269 158.621 389.691 153.848C391.086 154.916 392.49 155.976 393.924 156.999C396.013 158.489 398.276 155.286 396.594 153.539C392.683 149.477 387.878 146.405 382.754 143.978C378.69 139.647 373.63 136.385 367.139 135.02C270.124 111.502 159.092 176.497 139.146 275.783C118.939 260.992 99.2091 245.548 79.3471 230.289C76.3491 225.722 73.2951 221.002 72.0621 215.935C71.3203 212.883 70.8313 209.774 70.3732 206.657L69.8591 203.15C71.2441 185.742 67.4491 170.086 60.5371 153.523C38.0511 104.875 60.1551 67.7654 102.264 40.8444ZM145.319 65.8771L143.199 66.9399C108.221 84.9979 77.1128 116.392 69.2468 155.93C69.1398 156.483 69.8798 156.858 70.1888 156.329C88.6408 124.115 114.033 94.3709 148.231 78.4559L149.122 78.0346C160.154 72.9184 172.91 70.6847 183.092 63.9809C185.674 62.2799 185.764 57.3129 182.14 56.6979C169.476 54.5465 156.559 60.2783 145.319 65.8771ZM228.866 104.162C254.937 94.5234 283.774 87.4954 311.628 90.4494C314.734 91.2754 315.04 96.4134 311.628 97.0494C307.145 97.8836 302.406 97.8214 297.691 97.7596C294.669 97.72 291.656 97.6805 288.728 97.8774C224.619 100.645 167.354 141.468 129.939 187.293C151.343 148.786 188.227 120.16 228.866 104.162ZM372.739 147.571C336.832 133.168 294.381 140.008 258.635 152.23C212.783 168.645 176.884 204.149 154.437 246.692C153.646 248.732 152.863 250.774 152.113 252.83C152.52 256.33 151.321 260.17 150.2 263.761C149.753 265.192 149.319 266.584 149.003 267.898C148.094 271.689 147.822 275.34 147.559 279.205L147.501 280.213C147.465 280.754 147.409 281.262 147.253 281.734C176.243 302.771 206.782 321.584 237.058 340.56C258.713 341.476 279.517 335.627 300.284 329.789C324.95 322.855 349.561 315.936 375.475 320.387C391.093 322.789 406.138 328.906 422.036 329.417C427.851 274.382 407.422 221.824 386.978 171.695L384.549 165.74C381.825 158.998 379.048 151.691 372.739 147.571ZM66.2735 223.137L66.8221 223.709C67.5371 225.724 68.6491 227.623 70.4861 228.545C70.5561 228.58 70.6251 228.604 70.6951 228.631C73.3151 232.128 76.7111 234.963 80.6851 237.605C125.415 281.098 177.92 316.996 231.853 347.803C231.601 348.029 231.316 348.215 231.016 348.372C230.737 348.457 230.441 348.514 230.134 348.549C228.5 346.734 225.831 345.188 223.957 344.68C170.215 321.855 120.868 289.684 76.0221 252.451C66.8121 245.231 54.2731 231.502 60.7721 219.453C60.8701 219.557 61.0381 219.588 61.1711 219.479L61.2467 219.429C62.1288 218.967 64.6449 221.448 66.2735 223.137ZM56.8431 238.618C37.9961 238.479 11.8191 247.276 10.9581 267.27C12.2511 284.362 33.8451 286.934 43.4741 298.291C55.0487 311.596 56.0499 327.563 57.0722 343.869C58.2928 363.335 59.5435 383.283 78.8521 399.758C93.4871 413.271 113.022 416.627 130.127 405.619C125.999 387.125 127.557 368.238 130.777 349.51C130.786 344.695 130.969 339.883 131.398 335.079C131.803 330.533 132.387 326.031 133.084 321.526L133.52 318.742C134.105 314.889 134.614 310.805 136.396 307.338C125.13 299.895 114.178 291.922 103.618 283.563C103.488 285.493 103.395 287.422 103.319 289.351C103.722 292.988 103.592 296.759 103.126 300.244C103.179 318.938 105.013 337.578 105.863 356.26C105.877 359.424 101.448 359.832 100.522 356.982C96.4771 344.523 96.1541 331.416 96.6751 318.416C96.8611 313.778 97.2271 309.133 97.7851 304.508C97.0101 299.578 96.9071 294.711 96.3441 289.709C95.8121 284.988 94.4391 280.412 93.7801 275.725L82.5171 266.668C72.6371 258.727 61.5881 250.771 56.8431 238.618ZM309.609 339.569C331.458 334.318 353.352 329.057 375.504 333.938C381.017 334.999 386.384 336.49 391.738 337.979C401.855 340.791 411.927 343.59 422.853 343.441C422.804 345.158 422.739 346.871 422.702 348.574C422.246 368.057 421.703 387.62 418.74 406.911C408.902 481.474 353.702 534.633 277.9 500.451C251.947 490.089 227.966 475.291 201.89 465.227C216.827 443.166 228.498 417.639 233.465 391.121C235.356 383.706 236.82 375.259 236.025 367.448C236.122 363.762 236.076 360.07 235.872 356.381C236.197 355.49 236.086 354.665 236.236 353.421C236.471 351.469 237.302 349.723 238.616 348.272C239.707 347.069 241.049 346.36 242.431 345.725L243.819 345.098C265.848 350.085 287.706 344.832 309.609 339.569Z', transform: 'translate(-16.00022 14.99972)', fill: strokeColor || '#000000', "fill-rule": 'evenodd', stroke: 'none' })));
};
//# sourceMappingURL=DocSurgery.js.map