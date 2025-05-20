<file name=Reflections.tsx path=/Users/deandreminor/code/teacher-portfolio/src/components/Reflections.tsx>import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

export function Reflections() {
  return (
    <section id="reflections" className="my-12">
      <h2 className="text-2xl font-bold mb-6">Reflections</h2>
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-4xl border border-muted p-4 rounded-md shadow-sm bg-white dark:bg-zinc-900 space-y-2"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>What I learned</AccordionTrigger>
          <AccordionContent className="transition-all duration-300 ease-in-out overflow-hidden">
            <p>I learned a lot about React and TypeScript.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Challenges faced</AccordionTrigger>
          <AccordionContent className="transition-all duration-300 ease-in-out overflow-hidden">
            <p>Managing state across components was challenging.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Future improvements</AccordionTrigger>
          <AccordionContent className="transition-all duration-300 ease-in-out overflow-hidden">
            <p>I plan to optimize performance and accessibility.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
</file>
