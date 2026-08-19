import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DecorIcon } from "@/components/decor-icon";

export function FaqsSection() {
  return (
    <section className="mx-auto grid min-h-120 w-full max-w-4xl grid-cols-1 md:grid-cols-2 lg:border-x">
      <div className="px-4 pt-12 pb-6">
        <div className="space-y-5">
          <h2 className="text-balance font-bold text-3xl lg:font-black">
            Questions, <br /> Answered
          </h2>
          <p className="text-muted-foreground">Quick answers to common questions about Flowmatic. Open any question to learn more.</p>
          <p className="text-muted-foreground">
            {"Can't find what you're looking for? "}
            <a className="text-primary hover:underline" href="#">
              Contact Us
            </a>
          </p>
        </div>
      </div>
      <div className="relative place-content-center">
        {/* vertical guide line */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-3 h-full w-px bg-border" />

        <Accordion className="rounded-none border-x-0 border-y">
          {faqs.map((item) => (
            <AccordionItem className="group relative pl-5" key={item.id} value={item.id}>
              <DecorIcon className="left-[13px] size-3 group-last:hidden" position="bottom-left" />

              <AccordionTrigger className="px-4 py-4 hover:no-underline focus-visible:underline focus-visible:ring-0">{item.title}</AccordionTrigger>

              <AccordionContent className="px-4 pb-4 text-muted-foreground">{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

const faqs = [
  {
    id: "item-1",
    title: 'What counts as a "run"?',
    content: "A run is counted every time a workflow executes — whether it succeeds or fails. Creating and editing workflows is always unlimited; only running them counts against your plan.",
  },
  {
    id: "item-2",
    title: "Do unused runs roll over to the next month?",
    content: "No — plan run limits reset each billing period. The Free plan is the one exception: its 10 runs are a one-time lifetime allowance, not monthly.",
  },
  {
    id: "item-3",
    title: "Can I cancel anytime?",
    content: "Yes. There are no contracts or lock-in periods. Cancel from your dashboard whenever you'd like, and you won't be charged again.",
  },
  {
    id: "item-4",
    title: "What happens to my workflows if I downgrade or cancel?",
    content: "Your workflows and their history are untouched. If a lower run limit means you're over your new plan's allowance, you'll simply need to upgrade again before running more workflows.",
  },
  {
    id: "item-5",
    title: "Do I need to know how to code?",
    content:
      "No. Flowmatic's visual builder is designed so anyone can automate a process without writing a line of code — while still giving technical users direct control when they want it (HTTP requests, data transforms, and more).",
  },
  {
    id: "item-6",
    title: "Is my data secure?",
    content:
      "Yes. Integrations connect through secure OAuth — Flowmatic never asks for or stores your third-party passwords, and payment details are handled entirely by Stripe's hosted checkout, never touching our servers.",
  },
];
