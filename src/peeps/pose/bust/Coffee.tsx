import React from 'react';
import { PieceType } from '../../types';

export const Coffee: React.FC<PieceType> = ({
	strokeColor,
	backgroundColor,
}) => {
	return (
		<g transform='translate(0 459)'>
			<path
				d='M0 0L229 0L229 282L0 282L0 0Z'
				transform='translate(461.0002 279.0005)'
				fill={backgroundColor || '#FFFFFF'}
				stroke='none'
			/>
			<path
				d='M478.211 10.0224C451.865 -8.07661 389.892 0.376388 365.207 19.1734C356.456 26.3498 355.931 33.1891 355.374 40.4577C355.242 42.1706 355.109 43.9073 354.866 45.6779L354.767 46.3589C353.545 54.3223 348.01 62.9897 347.416 73.2604C344.894 71.7809 342.429 70.0796 340.065 68.448C334.969 64.931 330.341 61.7376 326.628 61.7864C310.167 62.0024 303.499 85.0831 287.852 97.5744C273.939 106.231 256.205 106.914 240.293 109.036L238.784 109.242C184.365 116.975 137.006 151.343 104.703 194.751C30.0336 301.118 23.2206 439.036 3.89459 563.687C3.51865 568.088 3.03488 572.695 2.53696 577.436C-1.08157 611.896 -5.44748 653.472 25.3946 674.547C24.9744 674.671 23.8897 674.626 22.6448 674.575C19.7156 674.454 15.8999 674.298 17.7716 676.204C55.8956 687.781 96.5396 685.24 134.772 675.142C133.245 685.592 131.782 696.042 130.205 706.487C129.422 711.675 132.293 716.934 138.157 716.926C299.797 715.874 461.421 711.909 623.054 709.897L627.427 709.84C659.499 709.433 691.588 709.3 723.648 710.413C735.213 710.844 746.61 712.224 758.121 713.235C767.014 713.646 772.693 703.027 768.284 695.525C766.444 691.309 764.454 687.759 761.93 684.107C775.906 601.796 756.571 521.285 737.335 441.184C729.909 410.263 722.498 379.404 717.024 348.525C702.166 239.267 683.425 143.029 559.983 123.38C557.146 116.649 556.961 102.581 552.847 97.5744C549.53 86.9584 530.636 79.2318 519.195 84.6268C507.069 57.5889 504.233 28.1974 478.211 10.0224ZM504.14 341.178C506.191 339.828 595.804 327.719 630.495 351.819C638.217 357.183 635.98 395.299 633.465 430.706L632.445 444.949C627.844 453.928 618.904 482.876 611.188 494.352C596.721 515.867 553.337 525.782 528.438 516.226C516.42 512.206 498.344 506.177 492.334 494.352C486.604 481.129 493.076 467.857 499.621 454.433C503.44 446.602 507.284 438.72 508.745 430.766C509.367 427.379 507.561 423.658 505.775 419.979C504.359 417.06 502.955 414.168 502.787 411.49C502.8 410.094 502.916 408.386 503.041 406.552C503.34 402.15 503.688 397.021 502.787 393.741C501.452 388.882 499.431 384.487 497.476 380.233C493.673 371.959 490.117 364.223 492.334 354.663C486.754 356.783 483.174 350.841 488.005 349.263C490.413 348.921 492.823 348.589 495.235 348.269C497.678 344.411 499.623 344.149 504.14 341.178Z'
				transform='translate(29.00043 -16)'
				fill={backgroundColor || '#FFFFFF'}
				fillRule='evenodd'
				stroke='none'
			/>
			<path
				d='M335.273 6.09217L325.345 0C309.808 1.36287 303.086 23.5621 287.852 35.7237C274.381 44.1051 257.328 45.0119 241.814 46.987L240.293 47.185L238.784 47.3917C184.365 55.1247 137.006 89.4927 104.703 132.901C30.0336 239.268 23.2206 377.186 3.89459 501.837C3.51865 506.237 3.03488 510.844 2.53696 515.586C-1.08157 550.045 -5.44748 591.622 25.3946 612.697C24.9744 612.82 23.8897 612.775 22.6449 612.724C19.7156 612.604 15.8999 612.447 17.7716 614.354C55.8956 625.931 96.5396 623.39 134.772 613.292C133.245 623.742 131.782 634.192 130.205 644.637C129.422 649.825 132.293 655.084 138.157 655.075C299.797 654.024 461.421 650.059 623.054 648.047L627.427 647.99C659.499 647.582 691.588 647.449 723.648 648.563C735.213 648.994 746.61 650.374 758.121 651.385C767.014 651.796 772.693 641.177 768.284 633.675C766.444 629.459 764.454 625.909 761.93 622.257C775.906 539.945 756.571 459.434 737.335 379.333C729.909 348.413 722.498 317.553 717.024 286.675C702.166 177.417 683.425 81.1781 559.983 61.5291C557.146 54.7981 556.961 40.7307 552.847 35.7237C550.379 27.8239 539.285 21.5242 529.055 21.0407L530.824 26.4205L514.233 42.0403C476.31 68.1505 457.348 83.186 457.348 87.1467C457.348 90.8295 458.27 98.121 460.114 109.021L460.548 111.551L441.166 130.873Q409.698 99.3027 409.698 90.3662L409.698 45.8471Q409.698 39.2888 392.931 34.5943L335.273 6.09217ZM463.502 261.306Q455.019 261.306 428.756 287.652L427.214 288.365C406.049 298.196 392.028 306.724 385.15 313.948L384.905 314.209Q374.484 325.389 343.63 373.669L313.843 391.284L302.573 391.284L294.549 449.487L313.843 491.047L357.547 476.325L428.756 457.556L469.618 416.101L492.668 408.362C489.872 416.442 488.858 424.48 492.334 432.501C498.344 444.326 516.42 450.356 528.438 454.376C553.337 463.932 596.721 454.016 611.188 432.501C618.904 421.025 627.844 392.077 632.445 383.098L633.765 364.595C636.143 330.451 637.908 295.118 630.495 289.968C595.804 265.868 506.191 277.978 504.14 279.327C499.623 282.298 497.678 282.561 495.235 286.419L493.97 286.588L501.082 276.943L498.564 275.598C480.596 266.07 468.909 261.306 463.502 261.306ZM497.476 318.383C493.673 310.109 490.117 302.373 492.334 292.813C492.043 292.923 491.758 293.012 491.479 293.08L491.479 309.457L502.253 330.081C500.945 325.93 499.186 322.102 497.476 318.383Z'
				transform='translate(29.00043 45.85067)'
				fill={backgroundColor || '#FFFFFF'}
				fillRule='evenodd'
				stroke='none'
			/>
			<path
				d='M358.545 5.71615C357.95 -1.93685 369.861 -1.87385 370.451 5.71615C371.738 22.2861 368.009 38.6992 359.983 53.2261C359.924 53.3321 359.859 53.4261 359.797 53.5261C364.817 56.1381 369.894 58.6441 375.084 60.8841C381.723 63.7501 388.487 66.3601 395.372 68.5742C401.6 70.5781 409.273 71.3691 414.509 75.5391C424.898 83.8119 421.839 100.455 419.672 112.245C419.536 112.985 419.403 113.706 419.278 114.404L418.946 116.271C417.889 122.357 417.124 128.601 419.69 134.442C422.43 140.681 427.971 145.309 432.914 149.773L433.912 150.678C438.291 154.668 443.295 159.515 446.507 164.923C449.439 158.861 453.436 153.907 457.662 148.33C460.101 145.111 459.162 143.637 457.568 141.133C457.192 140.542 456.779 139.893 456.365 139.15C454.28 135.408 453.262 131.419 453.914 127.15C455.117 119.266 461.418 113.571 467.69 109.292C475.097 104.241 483.364 100.499 491.021 95.8001C506.755 86.1461 522.078 75.1082 535.883 62.8491C536.264 62.5102 536.924 62.9542 536.619 63.4171C525.714 80.0041 512.927 94.3371 497.212 106.503C490.84 111.436 484.146 115.528 477.407 119.83L475.47 121.073C472.764 122.826 469.389 125.168 468.166 128.152C467.228 130.439 468.528 132.298 469.826 134.154C470.231 134.734 470.636 135.313 470.973 135.905C475.46 143.8 473.295 151.166 467.976 157.861L467.728 158.169C462.442 164.683 458.436 170.741 456.52 179.063C452.403 196.94 458.137 215.561 464.14 232.344L464.377 233.005C467.624 242.051 471.075 251.031 473.896 260.222L474.672 262.763C477.228 271.22 479.321 279.561 476.454 288.254C475.479 291.211 471.446 291.91 469.771 289.127C463.862 279.313 462.389 267.503 458.685 256.713C455.075 246.197 450.93 235.871 447.443 225.312C442.953 211.717 439.948 197.083 441.579 182.823C441.531 182.74 441.478 182.662 441.438 182.574L440.295 180.074C437.178 173.304 434.168 167.392 428.5 161.996C422.588 156.367 416.171 151.384 411.519 144.57C403.803 133.268 405.623 120.996 407.458 108.62C408.026 104.788 408.595 100.946 408.884 97.1201L409.024 95.1356C409.245 91.7754 409.367 87.2088 407.172 84.8831C404.703 82.2652 398.913 81.5971 395.637 80.4381C387.171 77.4421 378.828 73.9511 370.882 69.7591C363.318 65.7691 355.991 61.3611 349.169 56.1971L345.711 53.5959C340.255 49.4796 334.598 44.9844 330.942 39.3811C330.52 38.7361 331.237 37.6951 332.001 38.0041C338.105 40.4811 343.682 44.4212 349.393 47.8491C349.482 47.6401 349.585 47.4291 349.702 47.2172C356.768 34.4291 359.674 20.2612 358.545 5.71615ZM522.707 22.9541C524.349 15.6912 513.078 12.6607 511.172 20.0094C507.045 35.9265 512.426 53.5115 525.361 63.8635C531.286 68.6065 539.764 60.2345 533.78 55.4454L533.432 55.1629C523.973 47.3855 519.542 35.1721 522.653 23.1754L522.707 22.9541ZM330.002 40.1074C331.524 37.2424 327.98 34.5774 325.585 36.6984C315.595 45.5504 305.288 55.1304 294.142 62.4944C290.83 64.6824 289.141 69.4454 291.109 72.9734C275.552 79.8134 257.949 81.2054 241.272 83.4754C224.851 85.7104 208.715 89.3035 193.016 94.6655C177.334 100.023 162.138 107.033 148.666 116.769C134.286 127.16 123.528 140.234 113.351 154.654C92.0759 184.795 76.7975 218.372 63.6021 252.681L62.3515 255.95C48.0715 293.486 36.2105 331.941 27.2285 371.092C22.1815 393.09 17.8465 415.302 14.1155 437.561C12.2675 448.583 10.6335 459.639 9.15452 470.717C8.87012 472.849 8.55188 474.998 8.23191 477.159C6.84855 486.502 5.43295 496.063 6.58052 505.325C6.87952 507.739 8.01152 509.688 9.55152 511.047C6.55752 522.988 4.61652 535.282 3.01152 547.348C0.620517 565.323 -0.351483 583.731 0.112517 601.862C0.488517 616.552 1.48952 631.886 8.57152 645.092C15.7685 658.513 29.2125 666.747 43.5965 670.64C76.1507 679.448 109.339 668.568 139.217 655.648L141.98 654.444L144.076 653.507C141.434 661.367 140.353 669.7 137.492 677.508C136.328 680.685 138.263 684.684 141.069 686.298L141.477 686.532L141.719 686.666C143.843 687.778 146.513 687.793 148.588 686.532L148.92 686.319C149.181 686.137 149.437 685.926 149.686 685.698L149.663 685.716L149.731 685.659L149.933 685.474L149.929 685.502L150.156 685.293C152.31 683.251 153.048 680.635 152.502 677.508L152.305 676.306C151.027 667.882 151.649 659.253 149.948 650.884C178.288 638.146 206.124 624.103 233.375 609.216C250.318 599.96 267.025 590.278 283.39 580.032C291.44 574.993 299.425 569.849 307.341 564.601L307.864 564.256C315.911 558.975 324.875 554.276 330.079 546.017C331.942 543.059 331.044 539.906 328.924 537.915C330.448 536.629 331.399 534.665 331.634 532.578C343.654 525.488 357.554 521.819 371.172 518.831L372.433 518.557C390.522 514.64 408.868 511.688 425.97 504.298C434.223 500.732 441.917 496.094 448.669 490.13C456.128 483.542 461.658 475.157 468.787 468.253C472.163 464.984 475.897 462.206 480.304 460.485C481.348 460.076 482.409 459.715 483.477 459.375C485.81 467.93 488.658 476.53 494.066 483.646C500.335 491.894 509.223 496.441 519.367 498.051C530.757 499.859 542.51 499.943 554.01 500.522C556.346 500.64 558.722 500.809 561.119 500.979C570.862 501.672 580.964 502.391 590.273 499.784C609.486 494.405 622.067 473.249 630.004 456.086L630.484 455.04C638.931 436.521 643.413 416.698 645.167 396.47C647.2 373.036 645.199 349.407 640.706 326.366C640.389 324.74 638.886 323.502 637.38 323.042C598.168 311.046 553.536 306.351 513.352 316.57C513.701 314.784 513.585 312.943 512.836 311.169C510.944 306.687 505.993 305.498 501.762 304.139L501.177 303.947C495.503 302.062 489.838 300.145 484.154 298.288L484.024 298.246C474.659 295.188 465.086 292.061 455.978 297.656C451.799 300.224 448.19 303.878 445.023 307.581C443.155 309.768 441.315 312.002 439.527 314.253C439.228 314.63 438.367 316.065 437.528 317.49L435.992 320.115C435.958 320.055 435.908 319.999 435.825 319.958C434.78 319.455 434.203 319.742 433.394 320.571C433.076 320.897 432.9 321.387 432.966 321.847C417.219 326.236 402.209 333.227 390.102 344.456C375.201 358.277 365.831 376.948 354.8 393.738C348.81 402.854 341.939 411.945 333.827 419.297C329.863 422.89 325.495 425.725 320.817 427.825C320.72 427.715 320.627 427.603 320.518 427.499C316.823 424.048 310.957 422.363 306.651 424.729C306.643 424.729 306.634 424.728 306.625 424.728L306.392 424.738C306.351 424.739 306.311 424.743 306.271 424.749L306.037 424.782C304.409 422.339 301.28 420.883 297.988 422.736C267.399 439.952 235.979 455.863 203.886 470.081C193.904 474.503 183.873 478.837 173.798 483.061C173.826 481.026 172.93 478.952 171.378 477.105C170.115 475.603 168.007 475.603 166.448 476.514C177.597 462.893 178.068 444.51 178.669 426.808L178.838 422.101C179.18 413.069 179.629 404.046 180.079 395.025C181.057 375.389 182.035 355.763 181.906 336.074C181.898 334.905 179.983 334.55 179.788 335.788C176.134 358.969 173.728 382.321 171.455 405.676L170.163 419.021C168.42 436.996 170.075 461.372 153.778 473.441C152.297 474.538 151.256 476.409 151.055 478.272C145.493 476.891 139.78 475.831 134.191 474.846L130.855 474.261C128.866 473.914 126.829 473.511 124.764 473.103C117.608 471.69 110.112 470.209 103.083 470.696C102.479 470.737 102.132 471.599 102.752 471.919C110.811 476.075 120.498 477.804 129.12 480.557C138.41 483.523 147.808 487.046 157.28 489.332C157.61 489.411 157.926 489.453 158.231 489.47L155.577 490.551C139.426 497.017 122.963 502.939 107.051 509.96C106.119 510.371 106.828 511.66 107.701 511.502C124.028 508.547 140.2 503.663 155.994 498.493L159.373 497.381C176.042 491.87 192.484 485.856 208.718 479.167C240.389 466.118 271.243 451.43 301.256 434.937C300.866 437.269 300.611 439.632 300.277 441.841C299.432 447.433 298.618 453.04 297.959 458.657C297.776 460.212 297.587 461.768 297.398 463.326C296.231 472.927 295.059 482.579 295.435 492.254C295.976 506.185 300.602 523.402 311.717 533.05C310.139 535.458 310.98 538.216 312.864 539.97C309.019 542.243 305.44 545.052 301.663 547.614C295.069 552.087 288.425 556.489 281.734 560.818C268.099 569.637 254.288 578.206 240.326 586.499C212.91 602.783 184.821 617.798 155.943 631.325C154.793 631.864 153.64 632.405 152.482 632.949C125.4 645.662 96.1017 659.416 65.7135 659.019C52.1085 658.842 36.5855 655.751 26.4915 645.921C16.7445 636.43 14.4965 621.866 13.4905 608.904L13.3092 606.482C12.029 588.722 11.8286 570.975 12.2705 553.177C12.5369 542.473 13.3256 531.832 14.1715 521.194L14.8095 513.215C17.9505 513.362 21.0885 511.634 22.4175 507.47C25.5175 497.754 25.7865 487.358 26.9575 477.253C28.0545 467.79 29.3035 458.348 30.7095 448.926C33.6305 429.363 37.1845 409.936 41.5605 390.646C50.1645 352.723 60.8225 315.245 73.5645 278.503C85.8155 243.179 99.7315 208.279 119.526 176.423C128.375 162.184 138.043 147.624 150.465 136.224C162.167 125.482 176.297 117.599 190.663 110.998C206.957 103.51 224.232 98.5164 241.6 94.2164L243.493 93.7477C260.84 89.4508 277.9 85.0758 292.846 75.0214C302.531 83.4644 311.347 91.9874 319.535 101.966C327.815 112.058 335.753 122.368 345.207 131.43C354.677 140.507 365.395 147.619 377.69 152.24C390.418 157.024 404.157 158.48 415.85 165.72C418.096 167.111 420.768 164.357 419.441 162.128C412.711 150.825 399.952 145.165 388.014 140.974L385.614 140.141C373.73 135.942 363.901 129.646 355.013 120.638C346 111.505 338.409 101.101 330.38 91.1205C324.101 83.3165 317.452 74.9894 309.699 68.2824C312.72 65.0544 315.701 61.7904 318.484 58.3394C323.074 52.6474 326.582 46.5464 330.002 40.1074ZM536.927 52.289C536.627 51.368 537.771 50.492 538.58 51.018C543.271 54.0719 547.336 58.1069 551.663 61.644C556.464 65.5679 561.3 69.4119 566.211 73.197C573.37 78.716 565.067 88.8759 558.765 82.847C550.141 74.6 540.696 63.816 536.927 52.289ZM566.602 95.1013C567.044 87.1774 555.96 86.6624 553.528 93.3314C551.598 98.6224 551.064 104.261 548.715 109.45C546.387 114.591 543.692 119.579 540.738 124.385C534.921 133.85 528.551 143.583 521.63 152.276C515.001 160.602 504.432 164.179 494.133 160.944C492.086 160.301 489.924 159.05 487.709 157.769C482.53 154.772 477.057 151.605 472.056 155.631C471.539 156.046 472.097 156.922 472.695 156.728C476.923 155.354 480.72 158.798 484.249 161.998C485.882 163.478 487.457 164.907 488.99 165.781C493.071 168.107 497.772 169.292 502.429 169.635C513.482 170.449 523.074 165.55 530.382 157.538C538.443 148.701 545.99 139.337 552.433 129.247C555.805 123.969 558.623 118.562 561.063 112.803L561.315 112.211C563.679 106.684 566.263 101.189 566.602 95.1013ZM567.483 100.423C565.915 100.05 565.419 102.191 566.835 102.773C602.303 117.38 638.614 132.479 663.979 162.46C688.974 192.002 701.259 230.972 709.592 268.174L710.097 270.449C718.612 309.118 726.148 348.065 733.539 386.978L738.47 412.966C741.77 430.323 745.077 447.679 748.285 465.053L748.886 468.279C752.717 488.706 757.046 509.04 759.95 529.63C763.401 554.097 765.716 578.672 766.838 603.355C767.959 628.033 766.799 652.527 765.179 677.15C764.618 685.667 778.964 687.814 780.279 679.193C786.927 635.618 783.262 590.652 777.17 547.19L776.736 544.125C770.695 501.861 762.496 460.067 753.812 418.298L752.069 409.944C742.684 365.097 734.213 320.072 724.909 275.211C716.537 234.839 705.932 194.429 680.412 161.178C667.284 144.072 650.762 130.161 631.247 120.843C611.745 111.53 591.229 106.108 570.335 101.103L567.483 100.423ZM475.483 308.104C476.113 308.34 476.735 308.574 477.346 308.79C481.501 310.263 485.681 311.661 489.857 313.075L489.899 313.09C490.512 313.309 494.392 314.803 497.667 315.961L499.195 316.49L498.527 317.202C498.414 317.319 498.3 317.435 498.181 317.546C496.943 318.819 495.807 319.98 494.827 321.468C494.792 321.521 494.768 321.574 494.737 321.627C482.6 312.434 463.452 315.428 448.992 318.207L446.167 318.756C451.794 314.194 458.122 307.267 465.233 306.115C468.692 305.555 472.197 306.87 475.483 308.104ZM320.892 317.662C321.841 317.469 322.818 317.222 323.81 316.97C327.351 316.074 331.083 315.129 334.423 316.44C336.621 317.304 337.707 319.984 335.85 321.847C332.626 325.079 327.94 325.259 323.597 326.021L323.215 326.09C318.08 327.04 312.936 327.941 307.785 328.795C298.094 330.4 288.38 331.819 278.632 333.025C268.62 334.264 258.58 335.367 248.526 336.197L244.634 336.516C236.141 337.195 227.304 337.708 218.971 336.407C217.76 336.218 217.955 334.455 218.971 334.146C228.1 331.383 238.114 330.642 247.552 329.473C257.586 328.228 267.603 326.913 277.594 325.353C287.569 323.795 297.531 322.123 307.456 320.275C311.942 319.441 316.421 318.57 320.892 317.662ZM573.684 318.788C553.514 316.621 533.315 317.078 513.085 317.66C511.467 322.952 505.835 327.462 500.378 327.632C504.652 334.137 505.093 342.941 502.096 349.84C508.459 352.373 513.941 356.923 517.268 363.403C521.884 372.386 521.28 382.382 516.719 390.684C520.612 394.208 522.909 399.931 522.679 405.325C522.422 411.34 518.837 416.478 515.858 421.458C512.639 426.844 512.531 431.586 511.542 437.618C510.095 446.446 504.141 451.8 496.48 455.144L496.887 456.746C498.862 464.435 501.319 472.547 506.965 478.168C514.226 485.401 525.492 485.334 535.087 485.792L535.549 485.814C544.335 486.254 553.117 486.768 561.899 487.266L568.487 487.634C578.599 488.19 588.31 488.258 596.565 481.572C610.042 470.66 619.281 452.602 625.129 436.614C637.403 403.058 637.55 366.233 631.916 331.285C613.021 325.195 593.416 320.908 573.684 318.788ZM490.062 336.137C486.776 328.373 474.676 328.536 467.806 329C450.506 330.169 431.788 334.546 416.395 342.632C400.436 351.015 389.686 364.447 380.068 379.3L379.618 379.997C370.243 394.57 361.214 411.821 346.534 421.841C339.057 426.946 330.326 431.607 321.254 433.626C320.631 434.721 319.622 435.588 318.299 435.903L317.684 436.044C315.1 436.615 311.086 437.246 307.619 436.868C307.642 438.564 307.624 440.247 307.667 441.854C307.789 446.459 307.841 451.084 307.841 455.692C307.841 459.178 307.774 462.666 307.707 466.154C307.588 472.329 307.469 478.507 307.727 484.675C308.084 493.214 309.29 502.136 313.39 509.769C316.397 515.369 320.366 519.075 325.157 522.613C336.943 515.43 350.27 511.052 363.796 507.76C380.154 503.779 396.903 501.122 412.889 495.724C420.583 493.125 427.98 489.724 434.682 485.105C441.794 480.2 447.228 473.564 452.818 467.073L453.691 466.065C459.396 459.522 465.621 453.262 473.684 449.714C480.627 446.658 489.778 446.114 495.849 441.386C499.023 438.912 499.289 435.322 499.622 431.646C496.597 432.079 493.433 431.635 490.352 431.203C489.474 431.08 488.603 430.958 487.744 430.857L485.736 430.622C482.072 430.186 478.492 429.708 474.885 428.775C474.215 428.602 474.215 427.592 474.885 427.419C479.148 426.318 483.372 425.849 487.744 425.337L488.77 425.209C489.275 425.143 489.782 425.073 490.292 425.002C493.78 424.518 497.376 424.019 500.76 424.778C501.456 422.13 502.461 419.602 503.871 417.07C505.849 413.513 509.595 409.48 510.101 405.325C510.252 404.084 509.963 402.621 509.378 401.524L509.176 401.151C508.93 400.709 508.639 400.265 508.213 399.989C508.166 400.044 508.065 400.107 507.849 400.175C504.864 401.115 502.26 399.654 500.878 397.402C496.993 397.884 492.873 397.94 488.935 397.993C486.926 398.02 484.964 398.046 483.106 398.128L477.543 398.398C471.598 398.67 465.384 398.789 459.799 397.588C459.019 397.421 458.783 396.123 459.564 395.789C466.431 392.852 474.76 391.915 482.112 390.787C486.219 390.156 490.354 389.676 494.473 389.121C497.215 388.751 500.125 388.14 502.966 387.993C510.089 379.126 506.25 365.138 496.338 361.32C493.476 362.578 490.843 362.259 487.909 361.904C487.141 361.811 486.353 361.716 485.535 361.645C481.596 361.307 477.648 361.078 473.695 361.095C470.477 361.11 467.181 361.462 463.875 361.815C459.042 362.332 454.189 362.85 449.53 362.317C448.254 362.17 447.068 360.472 448.337 359.436C454.342 354.535 462.95 352.937 470.573 351.893L472.154 351.681C474.71 351.346 477.818 350.857 481.042 350.566C481.771 349.144 483.078 348.069 485.044 347.802C485.628 347.722 486.215 347.675 486.801 347.625L486.792 347.567C491.583 347.337 491.375 339.243 490.062 336.137ZM682.39 356.92C682.857 356.211 683.966 356.659 683.761 357.498C678.34 379.707 673.251 401.961 669.928 424.594C664.405 462.209 664.903 500.277 665.399 538.2C665.442 541.461 665.485 544.72 665.523 547.978L665.548 550.107C665.8 572.273 666.15 594.441 666.883 616.598C666.972 619.297 667.083 622.002 667.193 624.711C667.54 633.241 667.889 641.804 667.587 650.308C667.37 656.386 665.75 662.135 665.176 668.14C664.758 672.502 664.997 676.919 665.233 681.304C665.282 682.198 665.33 683.09 665.372 683.981C665.54 687.477 660.38 687.328 660.029 683.981L659.58 679.652C658.997 674.173 658.277 668.728 656.481 663.484C654.322 657.177 653.286 650.983 652.537 644.361C651.39 634.213 650.88 623.964 650.437 613.746L650.134 606.678C648.285 563.974 648.35 521.069 651.343 478.409L651.562 475.363C654.526 435.039 659.669 391.47 682.39 356.92ZM406.093 374.471L405.945 374.46C404.586 374.428 403.931 376.166 404.509 377.23C406.117 380.183 405.066 383.707 404.014 387.233C403.29 389.66 402.565 392.089 402.708 394.334C402.893 397.244 403.472 400.041 404.625 402.718C405.789 405.419 407.849 407.663 408.966 410.346C410.055 412.96 409.999 415.955 409.942 418.969C409.894 421.534 409.846 424.112 410.503 426.482C412.157 432.449 417.101 437.167 423.504 435.119C425.469 434.491 426.423 432.965 426.636 431.006C426.869 428.858 426.486 426.931 426.017 424.93L425.575 423.054C424.966 420.376 425.066 417.647 424.848 414.911C424.317 408.262 422.071 403.953 418.418 398.571C414.867 393.337 415.591 388.095 414.115 382.297C413.099 378.308 410.246 374.945 406.093 374.471ZM161.717 487.937C161.815 487.818 161.908 487.693 161.993 487.562L162.353 487.793L161.565 488.113L161.717 487.937ZM474.668 497.371C475.278 496.012 477.412 496.161 478.068 497.371C480.639 502.113 480.924 508.167 481.41 513.521L481.461 514.072C482.079 520.605 482.626 527.16 482.961 533.714C483.596 546.153 483.9 558.576 483.861 571.031C483.821 583.795 483.564 596.544 482.876 609.289L482.69 612.704C482.062 623.779 481.008 636.133 475.745 645.816C473.832 649.337 468.629 648.302 467.521 644.742C464.352 634.564 465.371 622.736 466.3 611.952C466.435 610.386 466.568 608.842 466.686 607.328L467.409 598.013C468.125 588.696 468.808 579.377 469.349 570.05C470.091 557.289 470.703 544.517 471.292 531.75C471.484 527.603 471.691 523.455 471.909 519.308L472.245 513.09C472.532 507.888 472.508 502.18 474.668 497.371ZM68.1275 512.338L66.5205 513.89C61.0399 519.222 55.9461 524.845 51.2398 530.884C46.5208 536.937 41.1168 543.494 38.0308 550.582C36.4248 554.271 36.1598 557.912 40.4078 559.254C40.8988 559.409 41.3918 558.801 41.0958 558.359L41.0379 558.255C40.1633 556.357 46.6599 550.003 49.7642 546.967C50.435 546.311 50.9474 545.809 51.1928 545.542L52.6337 543.98C56.4875 539.83 60.436 535.806 64.5418 531.893C69.1698 527.48 73.8068 523.109 78.7268 519.02C83.2178 515.286 89.4568 512.112 90.7448 505.996C91.3478 503.135 89.4948 500.721 86.5868 500.537C80.2125 500.134 74.6471 505.763 70.0522 510.411C69.3903 511.081 68.7486 511.73 68.1275 512.338Z'
				transform='translate(24 7.000038)'
				fill={strokeColor || '#000000'}
				fillRule='evenodd'
				stroke='none'
			/>
		</g>
	);
};
