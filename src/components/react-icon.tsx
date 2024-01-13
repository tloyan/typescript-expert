import React from "react"

type ReactIconProps = React.SVGProps<SVGSVGElement>

const ReactIcon = ({ ...props }: ReactIconProps) => (
  <svg
    version="1.1"
    viewBox="0 0 426 426"
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    {...props}
  >
    <g strokeWidth={0.8} transform="translate(2.5 .5)"></g>
    <path
      d="M412.5,214.3c-9.2,58.5-27.1,75.6-58.8,114.9c-31.7,33.3-77.3,88.9-141.9,85.8c-58.5-9.2-75.6-27.1-114.9-58.8  C63.6,324.5,8,278.9,11.1,214.3c9.2-58.5,27.1-75.6,58.8-114.9c31.7-33.3,77.3-88.9,141.9-85.8c58.5,9.2,75.6,27.1,114.9,58.8  C360,104.1,415.6,149.7,412.5,214.3z"
      className="fill-[#90A7B2] dark:fill-[#3F51B5]"
    ></path>
    <g>
      <circle
        cx="211.8"
        cy="214"
        r="25.1"
        className="fill-[#90A7B2] dark:fill-[#3F51B5]"
      ></circle>
      <path
        d="M337.7,189c-8.7-7.2-20.9-13.7-35.5-18.7c-2.9-1-5.9-2-9-2.8c0.5-2.1,1-4.2,1.4-6.2c7-33.8,2-60.1-12.9-68.7   c-7.3-4.2-17.3-4.2-28.8,0c-10.6,3.9-22.3,11.3-33.9,21.4c-2.3,2-4.7,4.2-7,6.4c-1.6-1.5-3.1-2.9-4.7-4.3   c-25.8-22.9-51.1-31.8-66-23.2c-7.3,4.2-12.3,12.9-14.4,25c-1.9,11.1-1.3,25,1.6,40.1c0.6,3,1.3,6.2,2.1,9.3   c-3.6,1-7.1,2.1-10.4,3.3c-30.5,10.6-48.7,26.8-48.7,43.4c0,8.6,5.1,17.6,14.7,25.8c9,7.7,21.7,14.5,36.7,19.6   c2.5,0.8,5,1.6,7.6,2.4c-0.8,3.4-1.6,6.7-2.2,10c-6,31.7-1,55.6,13.3,63.9c3.8,2.2,8.3,3.3,13.4,3.3c4.9,0,10.4-1,16.2-3.1   c11.2-3.9,23.4-11.5,35.3-21.9c1.9-1.7,3.9-3.5,5.8-5.4c2.5,2.4,5.1,4.7,7.6,6.9c18,15.5,35.2,23.7,48.8,23.7   c4.9,0,9.4-1.1,13.1-3.3c7.5-4.3,12.7-13.2,15-25.6c2.1-11.7,1.6-26.1-1.4-41.6c-0.5-2.5-1-5-1.7-7.5c1.8-0.5,3.5-1.1,5.2-1.6   c32.8-10.8,53.1-28.3,53.1-45.5C352.1,205.6,347.1,196.9,337.7,189z M257,103.9c8-2.9,14.6-3.2,18.7-0.9c8,4.6,13.7,24.1,7.1,55.9   c-0.4,1.8-0.8,3.7-1.3,5.5c-11.7-2.7-24.3-4.7-37.6-5.9c-7.7-11-15.7-20.9-23.7-29.5c2.1-2.1,4.3-4,6.4-5.9   C237.3,114,247.8,107.3,257,103.9z M251,236.9c-4.4,7.6-8.9,14.9-13.4,21.7c-8.3,0.6-16.9,0.9-25.7,0.9c-8.8,0-17.3-0.3-25.4-0.8   c-4.8-7-9.4-14.3-13.7-21.7c-4.3-7.5-8.3-15.1-12-22.6c3.6-7.6,7.6-15.2,11.9-22.6l0,0c4.3-7.5,8.9-14.8,13.6-21.7   c8.4-0.6,16.9-1,25.5-1c8.7,0,17.2,0.3,25.6,1c4.6,6.9,9.2,14.1,13.5,21.6c4.4,7.7,8.5,15.2,12.1,22.5   C259.4,221.7,255.4,229.3,251,236.9z M269.5,228c3.8,8.6,6.9,16.8,9.4,24.7c-8.1,1.9-16.9,3.4-26.2,4.5c2.9-4.6,5.8-9.4,8.6-14.3   C264.3,237.9,267,232.9,269.5,228z M212.3,291.4c-5.7-6.1-11.4-12.9-16.9-20.2c5.3,0.2,10.8,0.3,16.4,0.3c5.7,0,11.4-0.1,17-0.4   C223.3,278.5,217.8,285.3,212.3,291.4z M171.2,257.3c-9.2-1-17.9-2.4-25.8-4.2c2.5-8,5.5-16.3,9.1-24.7c2.5,4.8,5.2,9.7,8,14.5   C165.2,247.9,168.1,252.7,171.2,257.3z M162.4,185.7c-2.8,4.8-5.4,9.7-8,14.5c-3.5-8.3-6.5-16.4-8.9-24.3c8-1.8,16.6-3.3,25.5-4.4   C168,176.2,165.1,180.9,162.4,185.7z M212,137.6c5.5,6,11,12.6,16.5,19.9c-5.5-0.3-11.1-0.4-16.7-0.4c-5.5,0-11,0.1-16.4,0.4   C200.8,150.3,206.4,143.6,212,137.6z M261.3,185.6c-2.8-4.8-5.6-9.5-8.5-14c8.9,1.1,17.5,2.6,25.6,4.5c-2.4,7.8-5.4,15.9-9,24.2   C266.9,195.4,264.2,190.5,261.3,185.6z M140.3,155.7c-2.7-13.6-3.2-26-1.5-35.7c1.4-8.4,4.5-14.3,8.6-16.7c8-4.6,27.7,0.2,52,21.8   c1.4,1.2,2.8,2.5,4.2,3.9c-8.2,8.8-16.2,18.7-23.8,29.5c-13.2,1.2-25.8,3.2-37.5,5.8C141.5,161.4,140.9,158.6,140.3,155.7z    M126.7,248.1c-29.7-10.1-43.2-24.8-43.2-34.1c0-8.9,12.6-22.3,40.7-32.1c3.1-1.1,6.3-2.1,9.6-3c3.5,11.5,8.1,23.4,13.7,35.5   c-5.6,12.2-10.3,24.3-13.8,35.9C131.3,249.6,129,248.8,126.7,248.1z M155,327c-3,0-5.5-0.6-7.4-1.7c-7.7-4.4-13-22-7.5-51.2   c0.6-3,1.3-6.1,2-9.3c11.4,2.5,24.1,4.4,37.8,5.5c7.8,10.9,15.9,21,24.1,29.8c-1.8,1.7-3.6,3.4-5.3,4.9   C180.5,320.7,164.9,327,155,327z M283.8,271c6.1,30.8,0.2,49.8-7.8,54.4c-7.7,4.5-25.6,0.3-48.1-19.1c-2.3-2-4.7-4.2-7.1-6.4   c7.9-8.6,15.8-18.6,23.5-29.9c13.6-1.2,26.4-3.2,38-5.9C282.8,266.5,283.3,268.8,283.8,271z M295.3,248.1c-1.5,0.5-3.1,1-4.7,1.5   c-3.5-11.2-8.3-23.1-14.2-35.5c5.6-12.1,10.2-23.9,13.7-35.1c2.9,0.8,5.7,1.7,8.4,2.6c13.1,4.5,24.1,10.3,31.7,16.6   c6.5,5.4,10.1,11,10.1,15.8C340.2,223.3,326.1,237.9,295.3,248.1z"
        className="fill-white"
      ></path>
    </g>
  </svg>
)
ReactIcon.prototype

export default ReactIcon
