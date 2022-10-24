interface myProps {
  width?: number;
  height?: number;
  strokeWidth?: number;
}

export default ({ width = 20, height = 20, strokeWidth = 1.5 }: myProps) => {
  return (
    <svg
      aria-haspopup="true"
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-chevron-down"
      width={width}
      height={height}
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
};
