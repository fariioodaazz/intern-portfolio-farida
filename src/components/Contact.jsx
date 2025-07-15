import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <footer className="bg-background text-foreground py-8 mt-10 border-t border-border">
      <div className="text-center space-y-4">
        <p className="text-sm">
          © 2025 <span className="font-semibold text-primary">Farida Ashraf Hanafy</span>. All rights reserved.
        </p>

        <div className="flex justify-center gap-6 text-sm text-primary">
          <a
            href="mailto:Fariida.hanafy@gmail.com"
            className="flex items-center gap-2 hover:text-purple-500 transition"
          >
            <Mail size={18} /> Email
          </a>

          <a
            href="https://github.com/fariioodaazz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-purple-500 transition"
          >
            <Github size={18} /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/farida-ashraf-0091a0301"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-purple-500 transition"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
