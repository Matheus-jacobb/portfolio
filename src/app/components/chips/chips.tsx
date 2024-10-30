export function Chips({ className, title }: { className?: string, title: string }) {
  return (
    <span className={className + ` bg-accent text-text py-1 px-3 rounded-full`}>{ title }</span>
  );
}
