import ExternalLink from "@/components/ExternalLinks";
import TextElement from "@/components/TextElement";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="mx-auto w-full flex-1 p-6">
        <section
          id="hero"
          className="mt-12 md:mt-24 flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl font-black">Welcome to my playground</h1>
          <p className="mt-2">
            If you&apos;re wondering what you&apos;re about to find, that makes
            two of us.
          </p>
        </section>

        <section className="mt-24">
          <TextElement />
        </section>
      </main>
      <footer className="mt-12 md:mt-24 py-6 md:py-12 border-t border-gray-700">
        <div className="px-12 md:px-24 flex flex-col items-start space-y-6 md:flex-row md:justify-between md:space-y-0">
          <div className="flex flex-col space-y-2">
            <p className="font-bold">Pedro&apos;s Playground</p>
            <p className="text-sm">
              Copyright &copy; 2025 - All Rights Reserved
            </p>
            <p className="text-sm">
              Made with love and curiosity by{" "}
              <ExternalLink
                href="https://pedrogregor.io"
                text="Pedro Gregório"
              />{" "}
              ❤️
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-sm">Other projects</p>
            <ExternalLink href="https://loopcost.app" text="LoopCost" />
            <ExternalLink href="https://tubemod.dev" text="TubeMod" />
          </div>
        </div>
      </footer>
    </div>
  );
}
