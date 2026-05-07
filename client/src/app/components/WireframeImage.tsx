import clsx from "clsx";

interface WireframeImageProps {
  className?: string;
  text?: string;
}

export const WireframeImage = ({ className, text }: WireframeImageProps) => {
  return (
    <div className={clsx("relative bg-gray-200 border-2 border-gray-400 flex items-center justify-center overflow-hidden", className)}>
      <svg className="absolute inset-0 w-full h-full text-gray-400" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="2" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="2" />
      </svg>
      {text && <span className="relative z-10 bg-white/80 px-2 py-1 text-xs font-mono text-gray-600 border border-gray-400">{text}</span>}
    </div>
  );
};
