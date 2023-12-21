import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Collapse } from "antd";
import Link from "next/link";

function FAQs() {
  const socialMediaLink =
    "https://instagram.com/nubis_logistics?igshid=YTQwZjQ0NmI0OA==";

  return (
    <div className="FAQs-container max-w-7xl mx-auto p-4">
      <div className="page-wrapper py-10">
        <div className="page-title font-black text-2xl mb-6">
          Frequently Ask Questions
        </div>

        <div className="flex gap-6">
          <div className="questions-list flex-grow">
            <Collapse
              accordion
              items={items.map((item) => ({
                key: item.Question,
                label: item.Question,
                children: item.Answer,
              }))}
            />
          </div>
          <div className="newsletter bg-primaryColor text-white p-4">
            <div className="tag bg-black/50 p-2 w-max">
              <h6>Let's Talk</h6>
            </div>

            <h3 className="text-xl my-4">
              Can’t find answers to your <br /> question? Send us a message.
            </h3>
            <div className="callus">
              <div className="wrap">
                <div className="text-lg">
                  Have Any Questions <br />
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    fontSize={18}
                    icon={faPhone}
                    className="call"
                  />
                  <p className="SubText">+234 906 416 3807</p>
                </div>
              </div>
              <div className="mt-4">
                <Link href={socialMediaLink}>
                  <FontAwesomeIcon icon={faInstagram} className="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const items = [
  {
    Question: "How can I pay for your logistics services?",
    Answer: " Payments can be made on the app before completing an order.",
  },
  {
    Question: "What payment methods are supported?",
    Answer:
      " Card and wallet options are available to make payments on the Nubis App.",
  },
  {
    Question: "What options for logistics plans are available?",
    Answer: "Orders can either be same day or scheduled on the Nubis App.",
  },
  {
    Question: "Can i specify a delivery date when ordering?",
    Answer: "Yes, a delivery date can be specified for scheduled deliveries.",
  },
];

export default FAQs;
