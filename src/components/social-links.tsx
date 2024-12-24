import { Github, Instagram, Twitter } from "lucide-react";

export function SocialLinks() {
  return (
    <footer className="mt-12 flex justify-center gap-6 py-8 border-t border-gray-800">
      <a
        href="https://github.com/Jeanikt"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
        title="GitHub Profile"
      >
        <Github className="h-6 w-6" />
        <span className="sr-only">GitHub Profile</span>
      </a>
      <a
        href="https://instagram.com/jewknd"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
        title="Instagram Profile"
      >
        <Instagram className="h-6 w-6" />
        <span className="sr-only">Instagram Profile</span>
      </a>
      <a
        href="https://twitter.com/peahpeh"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
        title="Twitter Profile"
      >
        <Twitter className="h-6 w-6" />
        <span className="sr-only">Twitter Profile</span>
      </a>
    </footer>
  );
}
