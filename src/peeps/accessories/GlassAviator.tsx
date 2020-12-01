import React from 'react';
import { PieceType } from '../types';

export const GlassAviator: React.FC<PieceType> = ({ strokeColor }) => {
	return (
		<g>
			<path
				d='M400.241 22.4717C406.555 19.4817 413.812 19.6607 420.603 20.5487C434.349 26.9267 404.861 34.3147 401.349 27.5287C404.801 52.9717 394.935 94.8897 366.724 108.133C334.13 124.07 298.773 99.8287 300.056 60.9787C293.067 59.2817 297.925 39.7137 300.739 31.7647C288.447 29.8527 276.738 28.7257 264.894 32.4797C271.42 50.8857 248.187 106.288 225.854 117.325C208.541 129.283 169.496 123.951 153.944 105.365C142.844 91.1707 137.3 58.2287 143.442 35.3387C143.388 35.3147 143.332 35.2967 143.279 35.2697C142.912 38.8697 118.056 38.4687 119.298 32.3037C83.5946 32.9447 49.0266 38.4207 13.6856 42.2807C9.41771 42.6777 9.20869 45.7037 9.00443 48.6607C8.82951 51.1931 8.65807 53.675 5.94363 54.4117C-4.52237 54.6617 0.226628 36.3637 9.44663 34.6657C18.2509 33.7459 27.1162 32.5506 36.011 31.3514C64.1217 27.5615 92.5269 23.7319 120.232 28.4287C124.112 23.4993 131.1 25.2524 136.795 26.6809C138.398 27.083 139.898 27.4593 141.198 27.6537C145.902 -0.109269 221.595 1.54173 246.677 12.8057C273.452 9.72473 301.309 7.96173 327.861 5.72573C344.673 0.333732 364.25 -2.44827 381.745 2.80973C384.166 2.67632 384.439 3.06209 384.978 3.82285C385.074 3.95736 385.177 4.10358 385.303 4.26073C392.194 7.30073 398.297 14.2087 400.241 22.4717ZM391.09 53.2827C381.556 117.772 315.002 124.904 303.177 60.8817C305.075 60.0507 306.44 58.4147 306.155 55.2387C306.088 41.2867 310.419 26.5407 323.005 18.7817C336.011 10.7757 351.232 9.98173 366.283 10.1837C395.005 9.49973 394.401 33.5067 391.09 53.2827ZM264.265 30.6657C272.34 25.1737 283.744 24.8557 292.758 25.2357C295.861 25.4177 300.059 25.2717 302.99 26.8347C306.149 20.6497 311.009 15.2997 316.233 11.7387C313.192 11.9693 310.141 12.2092 307.085 12.4496C288.207 13.9342 269.092 15.4374 250.449 14.8917C256.277 18.3047 262.045 24.6877 264.265 30.6657ZM253.026 60.1197C228.031 146.156 165.64 108.656 158.838 97.6297C146.569 79.3837 144.261 35.0297 154.948 23.1707C167.469 14.393 184.251 14.6491 199.84 14.8869C203.297 14.9396 206.695 14.9915 209.975 14.9437C243.176 15.3917 266.756 25.3237 253.026 60.1197Z'
				transform='translate(-1.999528 9.999668)'
				fill={strokeColor || '#000000'}
				fillRule='evenodd'
				stroke='none'
			/>
		</g>
	);
};
