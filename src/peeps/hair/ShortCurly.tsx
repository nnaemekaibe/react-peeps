import React from 'react';
import { PieceType } from '../types';

export const ShortCurly: React.FC<PieceType> = ({ strokeColor, backgroundColor }) => {
	return (
		<g>
			<path
				d='M364.424 212.603C358.153 167.36 343.81 123.432 341.751 77.5101C340.526 57.8591 339.301 38.2071 338.077 18.5541C337.612 6.28011 321.668 2.13911 315.578 13.0131C301.735 -2.33889 276.947 -0.0778906 258.036 0.388109C146.708 4.33311 40.9142 79.6031 2.69821 184.552C1.77921 187.054 2.05721 189.717 3.09621 192.1C-14.7168 251.5 48.2782 289.749 91.2422 316.233C108.671 334.651 129.158 349.953 152.291 360.433C178.902 372.952 208.524 379.932 237.925 380.6C244.379 380.748 248.256 375.53 248.722 370.129C258.102 367.946 274.153 370.466 279.113 360.854C335.68 336.285 372.537 274.013 364.424 212.603L364.424 212.603Z'
				transform='translate(54 125.0003)'
				fill={backgroundColor || '#FFFFFF'}
				stroke='none'
			/>
			<path
				d='M187.799 3.91891L188.851 3.75731C230.651 -2.60369 274.631 -2.15269 313.921 15.0973C321.451 18.4063 328.821 22.3963 335.761 27.0263C340.732 26.5073 345.732 26.0863 350.642 26.0173C356.821 25.9363 362.851 29.1463 363.611 35.3963C369.401 36.1163 374.732 38.2463 378.142 42.5073C379.471 44.1663 380.361 46.0863 380.812 48.0863C384.371 48.9273 387.861 50.2163 391.171 51.9163C395.191 53.9863 397.511 59.7463 396.091 64.0073C395.763 64.9745 395.391 65.9167 394.973 66.8386L394.651 67.5263L394.841 67.7863C398.051 72.9463 395.821 79.7163 390.901 82.7963C387.211 85.1063 383.091 86.9463 378.851 87.8363C379.201 89.5363 379.521 91.2463 379.781 92.9763C379.881 93.6773 378.982 94.1773 378.581 93.4863C378.581 93.4863 380.101 98.2163 382.392 103.427C383.291 105.476 380.411 107.296 379.312 105.226C376.392 99.7063 374.581 94.0463 371.931 88.3563C369.482 88.1963 367.041 87.6363 364.691 86.5663C363.151 85.8663 361.982 84.6863 361.142 83.2763C361.091 83.3363 361.062 83.4063 361.011 83.4763C353.121 93.6263 337.701 97.1863 325.781 100.396C312.982 103.847 299.881 105.976 286.732 107.546C263.771 110.276 240.631 110.786 217.562 111.847C216.034 111.916 214.509 111.993 212.983 112.067C203.613 120.287 191.544 125.395 179.164 126.948C172.891 127.734 165.471 127.534 158.437 125.932C155.891 128.532 152.674 130.458 149.162 131.447C148.53 144.546 141.226 156.948 130.184 164.177L130.38 164.956C133.124 176.141 133.089 188.368 123.252 196.142C121.919 197.194 120.464 198.096 118.934 198.844L119.271 199.617C124.351 211.491 125.974 224.607 116.423 234.46C112.551 238.454 105.752 237.508 102.848 232.925L102.706 232.692C102.545 232.419 102.371 232.157 102.204 231.889C101.945 232.419 101.549 232.866 100.961 233.116C97.7343 234.504 96.2301 233.748 93.6103 232.432C93.2832 232.268 92.9387 232.095 92.5713 231.916C89.5113 230.416 86.2813 229.296 82.9823 228.427C80.2913 227.726 77.6113 227.226 74.9113 226.936C57.8513 233.456 46.8313 253.456 49.4513 272.226C50.8713 282.446 56.4823 292.566 66.2613 296.806C70.5413 298.666 75.5713 299.446 80.2013 298.816C82.3721 298.522 84.3691 297.856 86.3218 297.205C90.0092 295.976 93.5384 294.799 97.7813 296.276C100.341 297.166 101.942 299.177 102.081 301.927C102.312 306.246 100.781 309.486 98.2013 311.886C102.751 315.686 106.421 320.966 110.371 325.177C115.312 330.446 120.321 335.716 125.661 340.576C130.701 345.186 136.062 349.466 141.741 353.267L142.338 353.66C149.454 358.294 158.421 362.409 158.761 372.097C158.871 375.017 157.101 377.696 154.701 379.186C145.732 384.746 135.971 377.446 128.941 372.097C126.111 369.946 123.361 367.716 120.711 365.406C118.941 365.546 117.011 365.257 115.001 364.366C113.711 363.806 112.451 363.146 111.211 362.446C107.181 363.456 103.381 362.566 100.251 360.456C95.7413 361.566 90.9613 361.696 86.9013 360.806C83.1923 359.986 79.8813 358.236 77.1513 355.886C71.4513 357.706 65.1213 357.366 59.5013 353.916C56.1313 351.847 53.5013 348.896 52.0713 345.446C51.3433 344.307 50.8775 342.977 50.8422 341.512L50.8413 340.956C45.9413 341.066 41.0313 339.386 37.2413 335.507C33.7613 331.946 32.0623 327.507 31.8713 322.996C26.9413 321.597 22.4313 318.725 19.0013 314.296C13.3213 306.956 12.5623 297.886 15.4823 289.786C15.2913 289.356 15.1213 288.916 14.9713 288.476C10.4413 282.086 7.45132 274.376 7.69132 266.646C7.72132 265.446 7.88132 264.267 8.12132 263.097C3.66132 260.726 0.381323 256.566 0.0313228 251.276C-0.238677 247.126 1.25132 243.066 3.94132 239.996C2.63132 236.866 2.05132 233.466 2.45132 230.066C2.86132 226.576 4.09132 223.546 5.89232 221.017C5.85132 220.097 5.90132 219.166 6.05132 218.216C5.87132 217.286 5.72132 216.326 5.64232 215.347C4.79132 204.626 12.1913 195.246 21.2013 190.296C23.5713 188.996 26.1313 187.936 28.6913 187.036C30.5513 186.376 33.3513 186.156 34.9913 184.946C34.961 184.925 35.0713 184.748 35.2159 184.515C35.4052 184.212 35.6533 183.813 35.7213 183.546C35.8513 182.966 35.9913 182.396 36.0623 181.806C36.2666 179.923 36.2004 178 36.1349 176.093C36.1141 175.489 36.0934 174.886 36.0813 174.286C35.8613 162.986 36.2113 151.636 37.4013 140.396C39.6113 119.556 45.0623 99.1663 55.6813 80.9563C64.5913 65.6963 76.7913 52.8063 90.7813 42.1163C118.647 20.8335 153.421 9.26146 187.799 3.91891ZM382.351 108.83C381.915 107.642 379.797 107.687 379.957 109.154C381.752 125.599 383.207 141.952 385.634 158.328C388.118 175.088 390.181 191.919 391.806 208.784C392.076 211.585 392.35 214.394 392.626 217.208C395.536 246.966 398.512 277.393 396.607 307.167C394.734 336.429 382.006 361.8 360.293 381.403C341.614 398.267 317.701 409.468 293.087 414.324C279.551 416.994 265.321 417.462 251.627 415.693C245.055 414.843 238.508 413.306 232.178 411.335C228.873 410.305 225.648 409.089 222.429 407.827C218.301 406.209 214.485 405.506 210.101 404.945C201.826 403.884 199.09 415.122 203.77 420.228C212.67 429.937 228.246 433.802 241.117 436.136L242.855 436.446C256.804 438.883 270.889 439.421 284.953 437.714C313.917 434.201 340.76 423.332 363.616 405.142C386.973 386.554 405.841 360.199 411.786 330.62C413.317 323.002 414.131 315.317 414.468 307.606C415.809 306.789 416.939 305.679 417.693 304.298C421.015 300.193 423.297 295.649 424.818 290.763C429.193 286.795 428.061 280.877 430.089 275.621C432.798 268.597 434.781 262.15 431.074 254.951C430.892 254.599 430.699 254.267 430.504 253.937C433.065 248.404 433.985 242.316 431.13 236.516C430.046 234.314 428.553 232.396 426.796 230.841C427.618 228.539 428.303 226.189 428.863 223.827C429.561 220.883 428.447 217.088 425.537 215.653C419.336 212.593 412.751 212.951 407.716 216.883C405.36 200.4 402.512 183.97 399.2 167.66C397.203 157.832 395.231 147.962 392.493 138.311C389.653 128.297 385.936 118.597 382.351 108.83ZM76.6251 254.697C72.1099 254.283 55.0327 254.369 58.66 263.087C58.885 263.629 59.78 263.628 59.765 262.938C59.6297 256.703 76.3322 263.676 80.2465 265.452L80.832 265.724C81.16 265.88 81.479 266.056 81.803 266.218C81.396 267.128 81.116 268.082 80.955 269.125C80.413 272.66 81.109 276.076 82.847 279.189C86.111 285.04 94.906 278.097 89.988 273.679L89.7421 273.447C88.6987 272.415 87.9469 271.033 87.477 269.537C88.369 270.144 89.245 270.773 90.085 271.447C93.288 274.014 95.526 276.948 99.517 278.314C103.594 279.71 108.689 275.109 106.968 270.864C102.81 260.609 86.921 255.721 76.758 254.71L76.6251 254.697Z'
				transform='translate(11.99988 68.00089)'
				fill={strokeColor || '#000000'}
				fillRule='evenodd'
				stroke='none'
			/>
		</g>
	);
};
