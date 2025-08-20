export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="border-b text-center">
        Flat 33% discount for next 3 days
      </div>
      {children}
    </div>
  );
}
