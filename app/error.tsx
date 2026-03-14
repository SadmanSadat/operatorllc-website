'use client';

export default function Error({ reset }: { error: Error; reset: () => void }): JSX.Element {
  return (
    <div className="grid min-h-screen place-items-center bg-operator-navy px-6 text-center text-operator-cream">
      <div>
        <h2 className="font-serif text-3xl">Something went wrong</h2>
        <p className="mt-2 text-operator-steel">Please retry. If this persists, contact OperatorLLC support.</p>
        <button onClick={reset} className="mt-4 rounded-full bg-operator-orange px-5 py-2 text-white">Try again</button>
      </div>
    </div>
  );
}
