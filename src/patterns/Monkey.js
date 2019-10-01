import React, { useState, useContext } from 'react';
import { DrawingContext } from '../App';

// #F0F5FF, #d2dcec
function Monkey(props) {
    const [colorMap, setColorMap] = useState({});
    let drawing = useContext(DrawingContext);
    function fill(clss) {
        return colorMap[clss] ? colorMap[clss] : "#d2dcec";
    }
    function stroke(id) {
        return colorMap[id] ? "black" : "#d2dcec";
    }
    function formatInfo(target, color) {
        let targets = target.split("_");
        let info = "You colored monkey's ";
        targets.forEach((t, i) => {
            info += `${t} `;
        });
        info += color;
        return info;
    }  
    return (
        <div>
            <svg 
                onClick={(e) => { 
                    let target = e.target.classList[0];
                    if (!target) // if a part of the svg without a class was pressed, exit early
                        return;
                    let map = colorMap; 
                    map[target] = props.colorCode; 
                    setColorMap(map); 
                    props.setMessage(formatInfo(target, props.colorName));
                    // let nextTask = drawing.getNextTask();
                    // if drawing.isCompleted() // do something miraculous
                    if (drawing.hasCompletedNextTask(target, props.colorName)) {
                        console.log("TASK COMPLETE!")
                    }
                }}
                style={{ width: `${props.size}`, marginLeft: `${props.offset}` }} 
                viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" 
                fillRule="evenodd" 
                clipRule="evenodd" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeMiterlimit="1.5"
            >
                <path className="arms" fill={fill("arms")} stroke={stroke("arms")} d="M418.517 359.885c-16.11-4.208-46.914-24.757-38.102-32.298 8.811-7.541 65.885-16.506 90.969-12.948 22.674 3.215 44.293 30.402 59.534 34.292 10.897 2.781 25.561-10.955 31.911-10.955 4.194 0 6.747 8.335 6.192 10.955-.556 2.619-10.637 2.54-9.526 4.762 1.111 2.223 14.368 5.581 16.193 8.573 1.826 2.993-2.778 7.821-5.239 9.385-2.46 1.564-9.128-1.849-9.525 0-.397 1.849 6.985 7.976 7.144 11.095.159 3.12-2.919 7.551-6.192 7.621-3.73.079-11.748-6.033-16.193-7.144-3.392-.848-8.811-2.32-10.478.476-1.667 2.796 2.381 13.584.476 16.301-1.905 2.717-9.129 2.32-11.907 0-2.778-2.32-1.353-10.395-4.763-13.92-7.541-7.797-23.734-28.497-40.483-32.863-16.749-4.366-43.659 10.94-60.011 6.668z" strokeWidth="5.16" transform="matrix(1.519 0 0 1.58752 -158.507 -180.265)"/>
                <path className="arms" fill={fill("arms")} stroke={stroke("arms")} d="M418.517 359.885c-16.11-4.208-46.914-24.757-38.102-32.298 8.811-7.541 65.885-16.506 90.969-12.948 22.674 3.215 44.293 30.402 59.534 34.292 10.897 2.781 25.561-10.955 31.911-10.955 4.194 0 6.747 8.335 6.192 10.955-.556 2.619-10.637 2.54-9.526 4.762 1.111 2.223 14.368 5.581 16.193 8.573 1.826 2.993-2.778 7.821-5.239 9.385-2.46 1.564-9.128-1.849-9.525 0-.397 1.849 6.985 7.976 7.144 11.095.159 3.12-2.919 7.551-6.192 7.621-3.73.079-11.748-6.033-16.193-7.144-3.392-.848-8.811-2.32-10.478.476-1.667 2.796 2.381 13.584.476 16.301-1.905 2.717-9.129 2.32-11.907 0-2.778-2.32-1.353-10.395-4.763-13.92-7.541-7.797-23.734-28.497-40.483-32.863-16.749-4.366-43.659 10.94-60.011 6.668z" strokeWidth="5.16" transform="matrix(-1.26832 .83172 .87799 1.32553 434.202 -347.64)"/>
                <path className="legs" fill={fill("legs")} stroke={stroke("legs")} d="M308.233 519.848c6.782-3.983 28.068 1.097 32.462 7.315 4.394 6.219-7.2 19.852-6.096 29.994 1.259 11.583 17.273 29.751 13.655 39.505-3.617 9.754-25.523 13.005-35.358 19.02-8.295 5.073-17.802 16.339-23.654 17.07-5.654.707-9.673-9.469-11.461-12.68-1.075-1.929 1.503-4.633.731-6.584-.772-1.951-4.958-3.17-5.365-5.121-.406-1.951 2.859-4.184 2.927-6.584.081-2.886-3.687-7.281-2.439-10.73 1.382-3.82 5.644-10.567 10.73-12.193 5.085-1.625 17.174 7.072 19.781 2.439 2.606-4.633-4.818-20.087-4.143-30.238.682-10.242 1.448-27.23 8.23-31.213z" strokeWidth="5.16" transform="matrix(1.48318 0 0 1.47577 -138.581 -145.629)"/>
                <path className="legs" fill={fill("legs")} stroke={stroke("legs")} d="M308.233 519.848c6.782-3.983 28.068 1.097 32.462 7.315 4.394 6.219-7.2 19.852-6.096 29.994 1.259 11.583 17.273 29.751 13.655 39.505-3.617 9.754-25.523 13.005-35.358 19.02-8.295 5.073-17.802 16.339-23.654 17.07-5.654.707-9.673-9.469-11.461-12.68-1.075-1.929 1.503-4.633.731-6.584-.772-1.951-4.958-3.17-5.365-5.121-.406-1.951 2.859-4.184 2.927-6.584.081-2.886-3.687-7.281-2.439-10.73 1.382-3.82 5.644-10.567 10.73-12.193 5.085-1.625 17.174 7.072 19.781 2.439 2.606-4.633-4.818-20.087-4.143-30.238.682-10.242 1.448-27.23 8.23-31.213z" strokeWidth="5.16" transform="matrix(-1.2043 .8614 .86573 1.19828 419.16 -325.45)"/>
                <path className="tail" fill={fill("tail")} stroke={stroke("tail")} strokeWidth="5.41"  d="M436.702 466.042c38.418 2.858 169.505-14.127 182.538-81.985 11.1-57.798-2.437-108.715-37.3-127.319-44.747-23.879-70.415-24.48-68.9-55.028.622-12.534 9.272-24.417 19.34-24.414 28.01.01 21.58 29.976 44.921 25.96 4.598-.791 3.885-8.143 3.161-12.498-2.151-12.951-12.549-24.044-26.602-30.435-12.866-5.851-25.27-5.503-37.165-.752-26.15 10.444-30.186 45.504-17.699 67.736 12.948 23.055 41.663 31.571 63.145 43.064 30.632 16.389 40.11 51.328 38.09 85.308-5.453 91.719-150.43 84.392-159.081 86.407-6.046 1.408-7.665 23.717-4.448 23.956z" transform="matrix(1.48318 0 0 1.47577 -138.581 -145.629)"/>
                <g>
                    <ellipse className="body" fill={fill("body")} stroke={stroke("body")} cx="355.659" cy="488.637" rx="120.737" ry="116.986" strokeWidth="5.65" transform="matrix(1.32953 -.24166 .26653 1.45174 -236.426 -148.45)"/>
                    <ellipse className="stomach" fill={fill("stomach")} stroke={stroke("stomach")} cx="355.659" cy="488.637" rx="120.737" ry="116.986" strokeWidth="8.51" transform="matrix(.80093 -.21496 .27129 1.00072 -62.307 45.213)"/>
                </g>
                <g transform="matrix(1.48318 0 0 1.47577 -144.762 -143.401)">
                    <path className="head" fill={fill("head")} d="M322.838 138.218c3.787-18.833 20.859-33.063 41.319-33.063 23.237 0 42.103 18.354 42.103 40.96 0 13.409-6.638 25.322-16.888 32.796 10.58 12.801 18.239 27.925 21.966 44.808 13.948 63.189-32.444 127.231-103.534 142.923-71.09 15.692-140.13-22.87-154.079-86.059a105.13 105.13 0 0 1-1.758-34.961c-21.655-1.681-38.714-19.332-38.714-40.829 0-22.607 18.866-40.96 42.103-40.96 12.053 0 22.929 4.937 30.607 12.844 18.264-18.663 42.795-32.726 71.296-39.017 22.639-4.997 45.069-4.493 65.579.558z"/>
                    <clipPath id="a">
                        <path d="M322.838 138.218c3.787-18.833 20.859-33.063 41.319-33.063 23.237 0 42.103 18.354 42.103 40.96 0 13.409-6.638 25.322-16.888 32.796 10.58 12.801 18.239 27.925 21.966 44.808 13.948 63.189-32.444 127.231-103.534 142.923-71.09 15.692-140.13-22.87-154.079-86.059a105.13 105.13 0 0 1-1.758-34.961c-21.655-1.681-38.714-19.332-38.714-40.829 0-22.607 18.866-40.96 42.103-40.96 12.053 0 22.929 4.937 30.607 12.844 18.264-18.663 42.795-32.726 71.296-39.017 22.639-4.997 45.069-4.493 65.579.558z"/>
                    </clipPath>
                    <g clipPath="url(#a)">
                        <path className="face" fill={fill("face")} d="M169.645 316.623c-2.335-11.25 4.072-27.754 12.298-30.164 21.867-6.409 26.647 5.26 29.233.444 2.586-4.815-11.894-16.178-13.717-29.338-3.081-22.249.953-24.735 5.716-33.53 4.743-8.759 13.524-15.797 22.861-19.242 22.611-8.343 34.476.179 41.069-1.128 9.699-1.924 12.239-19.027 39.327-23.829 11.264-1.997 25.846 2.032 33.53 7.239 7.478 5.068 10.101 15.317 12.574 24.005 2.476 8.7.42 25.625 2.286 28.196 1.866 2.57 3.313-9.004 8.911-12.775 6.481-4.367 30.779-7.442 42.527 12.775 8.393 14.442-.456 40.687-12.135 62.002-5.439 9.925-11.49 18.782-16.701 24.881-12.584 14.729-69.294 44.782-102.476 42.68-9.771-.619-93.688 3.746-105.303-52.216z" strokeWidth="5.23" transform="matrix(1.01979 0 0 1.04719 .849 -9.993)"/>
                        <ellipse cx="450.84" cy="237.104" rx="8.23" ry="8.649" transform="translate(-195.489 22.187)"/>
                        <ellipse cx="450.84" cy="237.104" rx="8.23" ry="8.649" fill="#fff" transform="matrix(.38209 0 0 .38209 86.955 172)"/>
                        <ellipse cx="450.84" cy="237.104" rx="8.23" ry="8.649" transform="translate(-146.67 .545)"/>
                        <ellipse cx="450.84" cy="237.104" rx="8.23" ry="8.649" fill="#fff" transform="matrix(.38209 0 0 .38209 135.691 150.358)"/>
                        <ellipse cx="450.84" cy="237.104" rx="8.23" ry="8.649" fill="#fff" transform="matrix(.12415 0 0 .12199 253.364 208.283)"/>
                        <ellipse cx="450.84" cy="237.104" rx="8.23" ry="8.649" fill="#fff" transform="matrix(.1122 0 0 .0976 209.81 235.863)"/>
                        <path className="mouth" stroke={fill("mouth")} d="M249.695 322.408c4.222 5.854 12.665 17.564 30.651 13.662 8.556-1.857 20.321-8.65 23.824-15.85 4.597-9.448-8.27-31.663-8.23-32.952.096-3.028 6.211 21.243 13.364 27.16 6.2 5.127 18.797 5.537 25.91 4.267 6.743-1.204 13.401-6.884 16.764-11.888 3.363-5.004 3.395-13.758 3.412-18.135" fill="none" strokeWidth="6.06"/>
                        <ellipse className="nose" fill={fill("nose")} cx="289.158" cy="291.857" rx="19.075" ry="8.535" transform="matrix(1.01839 -.3068 .33527 1.11292 -99.12 43.366)"/>
                        <g>
                            <path className="ear" fill={fill("ear")} d="M340.085 148.256a25.47 25.47 0 0 1-.22-3.354c0-14.41 12.058-26.11 26.911-26.11 14.852 0 26.911 11.7 26.911 26.11 0 12.412-8.946 22.813-20.919 25.458-4.503-12.857-17.03-22.116-31.763-22.116-.308 0-.614.004-.92.012z"/>
                        </g>
                        <g>
                            <path className="ear" fill={fill("ear")} d="M177.059 190.066a25.47 25.47 0 0 0-1.747-2.872c-8.279-11.795-24.87-14.443-37.028-5.91-12.156 8.534-15.305 25.038-7.026 36.832 7.132 10.16 20.43 13.532 31.749 8.82-3.7-13.112 1.233-27.887 13.291-36.35.253-.178.505-.35.76-.52z" />
                        </g>
                    </g>
                    <path stroke={(colorMap["head"] ? "black" : "transparent")} d="M322.838 138.218c3.787-18.833 20.859-33.063 41.319-33.063 23.237 0 42.103 18.354 42.103 40.96 0 13.409-6.638 25.322-16.888 32.796 10.58 12.801 18.239 27.925 21.966 44.808 13.948 63.189-32.444 127.231-103.534 142.923-71.09 15.692-140.13-22.87-154.079-86.059a105.13 105.13 0 0 1-1.758-34.961c-21.655-1.681-38.714-19.332-38.714-40.829 0-22.607 18.866-40.96 42.103-40.96 12.053 0 22.929 4.937 30.607 12.844 18.264-18.663 42.795-32.726 71.296-39.017 22.639-4.997 45.069-4.493 65.579.558z" fill="none" strokeWidth="5.41"/>
                </g>
            </svg>
        </div>
    )
}

export default Monkey;