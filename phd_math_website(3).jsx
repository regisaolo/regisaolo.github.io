import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, FileText, GraduationCap } from "lucide-react";

export default function MathPhDWebsite() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 space-y-10">
      {/* Header */}
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Régis AOLO</h1>
        <p className="text-lg text-gray-600">PhD Candidate in Mathematics</p>
        <p className="text-md text-gray-500">Laboratoire d'analyse mathématiques et application; LAMA-UPEC</p>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center space-x-4">
        <a href="#research" className="text-blue-600 hover:underline">Research</a>
        <a href="#publications" className="text-blue-600 hover:underline">Publications</a>
        <a href="#teaching" className="text-blue-600 hover:underline">Teaching</a>
        <a href="#cv" className="text-blue-600 hover:underline">CV</a>
        <a href="#contact" className="text-blue-600 hover:underline">Contact</a>
        <a href="#contact" className="text-blue-600 hover:underline">More on me </a>
    
      </nav>

      {/* Research */}
      <section id="research">
        <h2 className="text-2xl font-semibold mb-4">Research</h2>
        <p>
          My research interests lie in [your research areas]. I'm particularly focused on [specific topics], and I work under the supervision of [advisor's name].
        </p>
      </section>

      {/* Publications */}
      <section id="publications">
        <h2 className="text-2xl font-semibold mb-4">Publications</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>[Paper Title]</strong> – [Journal/Conference], [Year].</li>
          <li><strong>[Another Paper]</strong> – [Journal/Conference], [Year].</li>
        </ul>
      </section>

      {/* Teaching */}
      <section id="teaching">
        <h2 className="text-2xl font-semibold mb-4">Teaching</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>[Calculs 2] – [Semester, Year], [Role]</li>
          <li>[Linear algebra] – [Semester, Year], [Role]</li>
        </ul>
      </section>

      {/* CV */}
      <section id="cv">
        <h2 className="text-2xl font-semibold mb-4">CV</h2>
        <Button variant="outline" className="flex items-center gap-2">
          <FileText className="w-4 h-4" />
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
        </Button>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <a >sewanou (dot) aolo (at) u-pec (dot) fr ( replace "dot" by "." and "at" by"@")</a>
        </p>
      </section>
    </main>
  );
}
