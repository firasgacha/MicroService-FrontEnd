interface myProps {
  width?: number;
  height?: number;
  strokeWidth?: number;
}

export default ({ width = 20, height = 20, strokeWidth = 1.5 }: myProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-compass"
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
      <polyline points="8 16 10 10 16 8 14 14 8 16" />
      <circle cx={12} cy={12} r={9} />
    </svg>
  );
};
