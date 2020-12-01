import React from 'react';
import { PieceType } from '../types';

export const Concerned: React.FC<PieceType> = ({ strokeColor }) => {
	return (
		<g>
			<path
				d='M72.3912 5.46691C68.9442 -0.427091 62.3832 -1.12909 56.6582 1.34191C51.3222 3.64391 46.4642 7.78491 41.4462 10.7759C36.6152 13.6559 31.7452 16.4919 26.8622 19.2819C22.0322 22.0409 17.1582 24.7539 12.2132 27.3019C8.36217 29.2849 2.36017 30.8449 0.0991739 34.7599C-0.108826 35.1199 0.024174 35.5689 0.369174 35.7859C3.50094 37.7662 8.02079 37.0595 11.9162 36.4503C12.8518 36.304 13.7515 36.1634 14.5872 36.0669L16.2477 35.8706C21.7797 35.1996 27.2801 34.3583 32.7392 33.2219C38.5812 32.0059 44.2412 30.4499 49.8972 28.5469L50.5414 28.3322C56.3772 26.4042 63.1901 24.5711 68.2652 21.1999C73.4332 17.7679 75.6542 11.0449 72.3912 5.46691ZM126.557 0.390556C130.229 0.360199 132.636 2.32915 135.243 4.4622C135.783 4.90416 136.332 5.35318 136.903 5.79291C140.326 8.43191 144.453 10.5369 148.454 12.1489C152.626 13.8279 157.086 15.1609 161.478 16.1119C166.031 17.0959 170.22 16.6349 174.74 17.4679C186.722 19.6769 183.886 39.6559 171.871 38.6679C161.057 37.7789 149.448 31.1349 141.247 24.2459C137.328 20.9546 134.02 17.1823 130.801 13.24L130.198 12.4989C127.34 8.97291 124.671 5.36391 126.105 0.734909C126.167 0.534909 126.345 0.392909 126.557 0.390556ZM39.5243 37.7624C30.3442 37.7624 26.6302 52.322 26.6162 58.6988L26.6175 58.9241C26.7044 65.3867 31.0718 78.5339 39.5243 78.5339C47.8883 78.5339 49.6311 64.6528 49.3649 58.3023L49.3439 57.8858C48.7412 47.6712 45.2593 37.7624 39.5243 37.7624ZM161.774 58.6988C161.76 52.322 158.046 37.7624 148.866 37.7624C143.274 37.7624 139.825 47.182 139.097 57.1204L139.046 57.8858C138.684 64.0219 140.314 78.5339 148.866 78.5339C157.318 78.5339 161.686 65.3867 161.773 58.9241L161.774 58.6988ZM120.748 94.0398C128.872 82.6605 117.366 71.9574 109.814 67.3674C107.836 65.9474 109.406 61.2436 113.634 61.9706C152.031 68.5676 132.136 134.708 83.1122 98.413C77.2756 93.7047 84.3436 83.3341 90.6344 87.3663C90.9534 87.611 91.2878 87.8696 91.6366 88.1392C98.7042 93.6035 111.636 103.601 120.748 94.0398ZM129.321 133.417C129.62 133.744 128.961 134.184 128.632 133.946C124.823 131.185 118.823 132.752 115.146 134.002C115.146 134.002 113.802 177.317 115.289 178.343C116.776 179.37 137.733 178.76 137.733 181.33C137.733 189.731 125.13 192.885 118.289 192.385C116.048 192.222 113.794 192.026 111.53 191.83C102.914 191.081 94.1792 190.323 85.6607 191.308C83.5704 191.55 81.0233 192.004 78.1901 192.509C66.4447 194.602 49.782 197.573 40.359 189.93C26.4088 178.616 28.295 160.022 39.902 147.883C47.2187 140.232 57.9854 135.641 68.6013 132.24C84.136 127.263 120.748 124.05 129.321 133.417ZM104.944 135.191C89.7009 137.667 56.784 148.831 52.055 154.773C59.241 153.643 99.3321 148.831 103.855 148.831C104.512 145.333 104.077 139.2 104.944 135.191ZM60.377 178.343C67.0308 176.659 95.0349 167.41 100.668 165.217C101.764 164.79 101.337 171.583 100.668 174.284C94.7074 177.168 68.1537 177.785 60.377 178.343Z'
				transform='translate(60.99982 69.99979)'
				fill={strokeColor || '#000000'}
				fillRule='evenodd'
				stroke='none'
			/>
		</g>
	);
};
