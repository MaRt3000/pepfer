import React, { useState } from "react";
import MinusOutlineIcon from "./svgs/MinusOutlineIcon";
import AddOutlineIcon from "./svgs/AddOutlineIcon";

const Faq = () => {
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const faqs = [
    {
      question: "Is Vibe360 free?",
      answer: (
        <div>
          <p className="text-gray-500">
            Yes, Vibe360 is completely free to download and use.
          </p>
        </div>
      ),
    },
    {
      question: "How is my privacy protected? ",
      answer: (
        <div>
          <p className="text-gray-500">
            Your data is secure, and all interactions are confidential.
          </p>
        </div>
      ),
    },
    {
      question: "What services can I access? ",
      answer: (
        <div>
          <p className="text-gray-500">
            HIV prevention, testing, treatment, and peer counselling services,
            among others.
          </p>
        </div>
      ),
    },
    {
      question: "Who can use Vibe360?",
      answer: (
        <div>
          <p className="text-gray-500">
            Adolescents and young people aged 15-24 and other Key Populations.
          </p>
        </div>
      ),
    },
    {
      question: "Can I use the app offline? ",
      answer: (
        <div>
          <p className="text-gray-500">
            Yes, you can access critical features even without internet
            connectivity.
          </p>
        </div>
      ),
    },
  ];

  const toggleQuestion = (index) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [index]: prev[index] === undefined ? true : !prev[index],
    }));
  };

  return (
    <div className="p-2 pt-8 pb-8 lg:p-8 space-y-4 bg-[#F8FCF9] font-['Inter'] ">
      <div className="space-y-4 mx-4 lg:mx-5  pb-4 border-b border-[#D0D5DD]">
        <h2 className="text-[#2E6F40] text-2xl md:text-3xl lg:text-4xl font-bold">
          FAQs
        </h2>
        <p className="text-lg ">Frequently Asked Questions</p>
      </div>

      <div className="flex-1 flex flex-col gap-4 rounded-lg p-4 lg:p-6">
        {faqs.map((faq, index) => (
          <div key={index}>
            <div className="py-4  flex flex-col gap-4 pb-4 border-b border-[#D0D5DD]">
              <button
                className="w-full flex justify-between items-center text-left focus:outline-none  "
                onClick={() => toggleQuestion(index)}
              >
                <span>{faq.question}</span>
                <span className="">
                  {expandedQuestions[index] ? (
                    <MinusOutlineIcon />
                  ) : (
                    <AddOutlineIcon />
                  )}
                </span>
              </button>
              {expandedQuestions[index] && (
                <div className="text-sm text-black font-Matter font-normal leading-[25.2px]">
                  {faq.answer}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
