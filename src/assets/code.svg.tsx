interface myProps {
  width?: number;
  height?: number;
  strokeWidth?: number;
}

export default ({ width = 20, height = 20, strokeWidth = 1 }: myProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-code"
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
      <polyline points="7 8 3 12 7 16" />
      <polyline points="17 8 21 12 17 16" />
      <line x1={14} y1={4} x2={10} y2={20} />
    </svg>
  );
};
