import { FunctionComponent, ReactNode } from "react";

const Faq: FunctionComponent = () => {
  const faqs = [
    {
      id: 1, question: "What's the best thing about ERC4626?", answer: "Lorem ipsum dolor sit amet consectetur."
    }, {
      id: 2, question: "What's the best thing about ERC4626?", answer: "Lorem ipsum dolor sit amet consectetur."
    }, {
      id: 3, question: "What's the best thing about ERC4626?", answer: "Lorem ipsum dolor sit amet consectetur."
    }, {
      id: 4, question: "What's the best thing about ERC4626?", answer: "Lorem ipsum dolor sit amet consectetur."
    }, {
      id: 5, question: "What's the best thing about ERC4626?", answer: "Lorem ipsum dolor sit amet consectetur."
    }, {
      id: 6, question: "What's the best thing about ERC4626?", answer: "Lorem ipsum dolor sit amet consectetur."
    }, {
      id: 7, question: "What's the best thing about ERC4626?", answer: "Lorem ipsum dolor sit amet consectetur."
    }, {
      id: 8, question: "What's the best thing about ERC4626?", answer: "Lorem ipsum dolor sit amet consectetur."
    }, {
      id: 9, question: "What's the best thing about ERC4626?", answer: "Lorem ipsum dolor sit amet consectetur."
    }, {
      id: 10, question: "What's the best thing about ERC4626?", answer: "Lorem ipsum dolor sit amet consectetur."
    }, {
      id: 11, question: "What's the best thing about ERC4626?", answer: "Lorem ipsum dolor sit amet consectetur."
    }
    // More questions...
  ];

  return (
    <div aria-labelledby="faq-heading" className="bg-gradient-to-t from-pink-50">
      <a id="faq"/>
      <section className="max-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div>
          <h2 className="text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="-mb-1 pb-1 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent">
                ERC-4626 FAQs
              </span>
          </h2>
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
          {faqs.map((faq) => (<div key={faq.id}>
            <dt className="text-base font-medium text-gray-900">
              {faq.question}
            </dt>
            <dd className="mt-3 text-sm text-gray-500">{faq.answer}</dd>
          </div>))}
        </dl>
      </section>
    </div>
  );
};

export default Faq;
