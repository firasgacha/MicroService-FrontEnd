interface myProps {
  width?: number;
  height?: number;
  strokeWidth?: number;
}

export default ({ width = 30, height = 30, strokeWidth = 1.5 }: myProps) => {
  return (
    <svg
      aria-label="Main Menu"
      aria-haspopup="true"
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-menu cursor-pointer"
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
      <line x1={4} y1={8} x2={20} y2={8} />
      <line x1={4} y1={16} x2={20} y2={16} />
    </svg>
  );
};
