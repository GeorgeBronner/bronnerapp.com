const projects = [
  {
    name: "Golf Mapper",
    description: "Track and map all of the golf courses you have played.",
    href: "https://golf.bronnerapp.com",
  },
  {
    name: "Sports Passport",
    description: "Track all of the sporting events you have attended.",
    href: "https://sportspassport2.bronnerapp.com",
  },
  {
    name: "PokerNightCap",
    description:
      "Real-time multiplayer Texas Hold'em — join with a room code, no accounts needed.",
    href: "https://poker.bronnerapp.com",
  },
  {
    name: "NamePocket",
    description: "An iOS app for remembering names.",
    href: "https://apps.apple.com/gb/app/namepocket/id6756529321",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-xl w-full space-y-10">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
            Welcome to bronnerapp.com
          </h1>
          <p className="text-stone-500 leading-relaxed">
            The personal website of George Bronner. It&apos;s not much yet, but
            please check out some of my current projects below.
          </p>
        </div>

        <ul className="space-y-4">
          {projects.map((project) => (
            <li key={project.href}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-stone-200 bg-white px-5 py-4 transition-colors hover:border-stone-400 hover:bg-stone-100"
              >
                <span className="font-medium text-stone-900">{project.name}</span>
                <span className="block text-sm text-stone-500 mt-0.5">
                  {project.description}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
