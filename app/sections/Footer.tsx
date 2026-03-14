export default function Footer(): JSX.Element {
  return (
    <footer className="border-t border-operator-steel/20 bg-operator-navy py-10 text-operator-steel">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-xl text-operator-cream">Operator LLC</h3>
          <p className="mt-2 text-sm">Austin, Texas, USA</p>
        </div>
        <div>
          <p className="text-sm">Services</p>
          <ul className="mt-2 space-y-1 text-sm"><li>Corporate Growth</li><li>Local Growth</li><li>AI Integration</li></ul>
        </div>
        <div>
          <p className="text-sm">Social</p>
          <ul className="mt-2 space-y-1 text-sm"><li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li><li><a href="https://facebook.com" target="_blank">Facebook</a></li></ul>
        </div>
      </div>
    </footer>
  );
}
