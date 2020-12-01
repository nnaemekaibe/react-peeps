import React from 'react';
import { PieceType } from '../types';

export const GlassButterflyOutline: React.FC<PieceType> = ({ strokeColor, backgroundColor }) => {
	return (
		<g>
			<path
				d='M314.024 93.4625C333.15 107.282 369.087 94.5517 378.267 83.0828C386.399 72.922 391.327 59.0269 390.695 41.7577C390.616 38.7724 391.502 36.6176 392.907 34.8843C394.48 32.9455 398.905 29.4027 401.506 28.0201C404.775 26.2828 400.579 0.816439 400.301 0.786495C367.066 -2.79457 334.253 6.30769 303.477 18.8718C286.742 25.1834 247.226 16.4545 235.621 13.8907C234.318 13.6029 233.366 13.3928 232.839 13.2904C196.359 7.0863 157.13 3.16601 123.036 17.9269C122.764 18.0449 118.906 18.993 117.774 18.8718C95.2701 16.4619 56.425 17.1006 30.2932 28.0201C9.16148 36.8503 -0.130007 55.4079 0.00420779 63.6069C0.16202 65.3484 9.07173 59.7484 14.2199 56.5126C15.2594 55.8592 16.1455 55.3023 16.7753 54.9216C44.4742 34.6206 83.8064 38.2989 114.906 44.0692C116.631 44.3894 132.384 46.3174 135.238 48.4816C138.249 50.7646 141.687 61.6144 141.687 61.6144C145.066 86.0741 159.927 103.848 178.713 112.159C188.519 116.497 221.713 115.097 240.062 105.261C250.421 98.1247 256.035 87.5178 261.736 76.9756C266.79 67.6283 271.892 58.3049 279.773 50.9847C281.18 49.6774 284.51 50.9021 284.782 52.7434C287.339 70.0118 294.897 79.6428 314.024 93.4625ZM377.122 45.7609C376.456 55.7782 372.083 65.8885 365.507 73.6601C359.234 81.0725 350.979 86.3271 342.101 87.5358C334.263 88.6029 325.889 86.58 317.868 79.9721C311.83 74.9808 306.878 68.4389 303.991 61.2326C301.333 54.5986 300.421 47.4073 301.958 40.3207L301.965 39.4865C302.931 37.1465 304.04 36.0556 305.234 35.4291C310.307 29.9706 325.522 21.5188 340.23 17.7369C351.605 14.812 362.418 14.8991 368.537 20.1513C375.287 27.6141 377.728 36.6444 377.122 45.7609ZM251.728 67.6737C255.63 62.0286 256.862 49.3476 255.228 40.0964C254.4 35.4123 252.794 31.6838 250.778 29.8278C249.438 28.5941 247.91 28.0133 246.242 28.0995C245.328 28.1468 244.338 28.4068 243.29 28.9721C229.096 21.2945 211.902 18.5302 195.603 19.3252C182.629 19.3228 173.371 22.3853 167.094 27.1525C159.54 32.8887 156.137 41.1349 155.94 50.0778C155.706 60.6894 160.065 72.2986 167.216 81.4845C174.061 90.2767 183.423 96.7948 193.581 98.2987C205.111 100.588 216.862 98.3732 227.078 92.9563C237.556 87.4007 246.407 78.4781 251.728 67.6737Z'
				transform='translate(-7.999279 10.99843)'
				fill={backgroundColor || '#FFFFFF'}
				fillRule='evenodd'
				stroke='none'
			/>
			<path
				d='M403.623 0.802188C369.897 -2.83181 336.584 6.33919 305.419 19.0632C287.397 25.8602 269.822 21.4413 252.221 17.0159C246.936 15.6871 241.649 14.3577 236.346 13.3312C199.28 7.02819 160.279 4.95419 125.661 19.9422C125.135 18.9992 123.574 18.9052 122.843 19.6622C84.5652 15.5632 -0.904759 18.9992 0.00724127 66.7622C0.397241 71.5532 3.94324 78.4762 9.69924 77.3582C14.9532 73.3192 15.2452 64.0232 21.4632 60.4072C50.0518 39.3764 91.3849 44.8718 122.424 50.9872L124.311 51.3622C136.258 51.3103 139.154 53.9214 141.576 64.4521L141.733 65.1502C148.949 116.75 205.131 139.715 244.764 110.73C264.411 97.1952 267.924 71.8702 284.602 56.3072L284.815 56.1812C296.407 134.479 399.502 121.38 396.694 44.6772C396.564 39.7211 399.997 37.8963 403.857 35.8443C410.652 32.2323 418.771 27.9164 411.11 4.57919C409.874 0.635188 406.412 -0.258812 403.623 0.802188ZM400.52 9.62019C381.819 8.68519 364.521 9.70819 346.165 14.2032C336.491 16.5372 329.067 19.4882 319.807 23.0372C292.474 35.1468 276.584 31.3393 253.706 25.8574C228.241 19.7554 194.118 11.579 125.919 20.9712C127.594 28.1452 127.902 35.2482 127.992 41.9882C146.097 41.2586 148.883 52.8689 152.022 65.9542C153.467 71.9747 154.986 78.3074 158.107 83.8943L158.412 84.4292C172.846 110.297 206.906 122.363 234.381 105.205C257.303 91.8452 259.539 57.9602 282.361 44.5122C294.295 44.0429 296.154 53.5723 298.115 63.6171C299.404 70.2241 300.737 77.054 305.008 81.4082C320.162 101.629 352.373 104.456 371.375 85.4362C380.29 76.2842 385.028 64.6642 385.29 52.1802C385.39 50.5796 385.415 48.9737 385.439 47.3839C385.536 41.0516 385.629 34.9734 390.449 30.4892C394.676 26.1952 402.186 27.6282 403.048 21.1372C403.596 17.2992 402 13.1362 400.52 9.62019ZM374.329 19.94C358.586 6.30099 313.421 27.555 304.559 38.048C303.559 38.454 302.711 39.244 302.24 40.481C301.974 40.791 301.928 40.7343 301.92 40.983L301.914 41.669C298.254 58.034 306.617 74.934 319.329 85.541C357.495 117.274 403.062 52.141 374.329 19.94ZM251.464 31.4965C235.513 22.3855 215.857 19.1595 197.28 20.0745C128.44 20.0055 155.952 97.7685 195.438 103.49C220.749 108.534 247.036 93.3455 258.327 70.2435C266.164 59.4425 263.271 22.1005 251.464 31.4965ZM101.641 24.192C111.382 23.6992 118.918 23.3178 122.171 22.2162C121.221 26.718 120.698 31.3064 120.203 36.2112L119.741 40.8352C97.3982 36.3662 74.8612 33.9072 52.2002 38.1542C35.5402 41.2762 17.0082 47.0292 8.06024 61.5262C14.5494 28.5988 69.8428 25.801 101.641 24.192ZM373.928 57.565C383.104 7.79689 347.276 23.0718 315.206 36.7443C313.409 37.5105 311.624 38.2716 309.859 39.016C311.644 40.647 311.636 42.874 311.123 44.704C307.615 83.7 355.012 105.798 373.928 57.565ZM250.33 34.0005L249.319 33.8528C247.008 33.5002 244.159 32.9745 240.915 32.3759C220.142 28.5431 183.185 21.7238 167.641 38.2375C150.2 69.9065 194.447 123.1 240.492 80.7305C253.307 67.6835 258.274 51.8625 250.33 34.0005Z'
				transform='translate(-10.99964 8.000212)'
				fill={strokeColor || '#000000'}
				fillRule='evenodd'
				stroke='none'
			/>
		</g>
	);
};
