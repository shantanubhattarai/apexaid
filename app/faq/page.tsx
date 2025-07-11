import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-teal-900 bg-noise bg-blend-soft-light text-center">
        <h2 className="max-w-xl text-4xl tracking-wide font-current-serif font-medium mb-4">
          Frequently Asked Questions
        </h2>
      </section>
      <section className="py-12 max-w-xl mx-auto">
        <Accordion type="multiple" className="border rounded-md px-6">
          <AccordionItem value="faq-1">
            <AccordionTrigger>Do you provide this service?</AccordionTrigger>
            <AccordionContent>
              This is the answer to the first question
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>
              How do you guarantee your workings?
            </AccordionTrigger>
            <AccordionContent>
              This is the answer to the question.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger>
              How do you guarantee your workings?
            </AccordionTrigger>
            <AccordionContent>
              This is the answer to the question.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4">
            <AccordionTrigger>
              How do you guarantee your workings?
            </AccordionTrigger>
            <AccordionContent>
              This is the answer to the question.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-5">
            <AccordionTrigger>
              How do you guarantee your workings?
            </AccordionTrigger>
            <AccordionContent>
              This is the answer to the question.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-6">
            <AccordionTrigger>
              How do you guarantee your workings?
            </AccordionTrigger>
            <AccordionContent>
              This is the answer to the question.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-7">
            <AccordionTrigger>
              How do you guarantee your workings?
            </AccordionTrigger>
            <AccordionContent>
              This is the answer to the question.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-8">
            <AccordionTrigger>
              How do you guarantee your workings?
            </AccordionTrigger>
            <AccordionContent>
              This is the answer to the question.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </article>
  );
};

export default FAQ;
