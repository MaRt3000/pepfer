import React from "react";
import FeatureCard from "./FeatureCard";
import termshero from "../assets/termshero.svg";
import bvector1 from "../assets/bvector1.svg";
import bvector2 from "../assets/bvector2.svg";
import bvector3 from "../assets/bvector3.svg";
import bvector4 from "../assets/bvector4.svg";
import bvector5 from "../assets/bvector5.svg";

const TermsOfUse = () => {
  return (
    <div className="relative">
      {/* HERO SECTION */}
      <div className="bg-[#EDF8F0] pt-24  flex flex-col px-4 items-center md:px-6 lg:py-18 ">
        <img
          src={termshero}
          alt="Hero"
          className="w-full  max-w-md md:max-w-lg lg:max-w-xl mb-6 lg:hidden "
        />

        <FeatureCard
          title="Vibe360 Virtual Space App Terms of Use"
          description="Effective Date: November 1, 2024"
          image={termshero}
        />
      </div>
      <img
        className="hidden lg:block absolute top-[50rem] w-[17%]"
        src={bvector1}
      />
      {/*INTRODUCTION SECTION  */}
      <div className="space-y-4 pt-10 lg:space-y-8 w-full  p-4 lg:p-18 ">
        <h2 className="text-2xl lg:text-5xl text-[var(--Color-Green-500,#2E6F40)] font-['Inter']">
          Introduction
        </h2>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          Welcome to the Vibe360 Virtual Space App (the "App"), provided by 360
          Health Systems Development Initiative ("360HSDI") in partnership with
          PEPFAR ("we," "us," or "our"). These Terms of Use (the "Terms") govern
          your access to and use of the App and its services (the "Services").
          By accessing or using the App, you agree to comply with and be bound
          by these Terms. If you do not agree, you should not use the App.
        </p>
      </div>
      <img
        className="hidden lg:block absolute top-[72rem] right-0 w-[17%]"
        src={bvector2}
      />
      {/* USE OF THE APP SECTION */}
      <div className="bg-[#EDF8F0] space-y-4 pt-10 lg:space-y-8 w-full  p-4 lg:p-18">
        <h2 className="text-2xl lg:text-5xl text-[var(--Color-Green-500,#2E6F40)] font-['Inter'] ">
          Use of the App
        </h2>
        <h3 className="text-[#027A48] text-lg lg:text-2xl font-['Inter'] pt-4 lg:pt-12 border-b border-[#027A48] w-[100px] lg:w-[125px]">
          1.1 Eligibility
        </h3>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="text-[#027A48]">●</span> You must be 15 years or
          older to use the App.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="text-[#027A48]">●</span> By using the App, you
          confirm that you meet this age requirement and that you have the legal
          capacity to enter into these Terms.
        </p>

        <h3 className="text-[#027A48] text-lg lg:text-2xl font-['Inter'] pt-4 lg:pt-12 border-b border-[#027A48] w-[160px] lg:w-[208px]">
          1.2 Permitted Uses
        </h3>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          You may use the App for the following purposes:
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="text-[#027A48]">●</span> Accessing virtual spaces and
          engagement features.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="text-[#027A48]">●</span> Interacting with community
          discussions
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="text-[#027A48]">●</span> Participating in educational
          and awareness programs
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="text-[#027A48]">●</span> Receiving personalized
          content and recommendations
        </p>

        <h3 className="text-[#027A48] text-lg lg:text-2xl font-['Inter'] pt-4 lg:pt-12 border-b border-[#027A48] w-[200px] lg:w-[258px]">
          1.3 Prohibited Activities
        </h3>

        <p className="text-lg lg:text-2xl leading-8 text-[#1D2939] font-['Inter']">
          You must not:
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="text-[#027A48]">●</span> Use the App for any unlawful
          or fraudulent purpose.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="text-[#027A48]">●</span> Harass, abuse, or threaten
          other users.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="text-[#027A48]">●</span> Interfere with the normal
          operation of the App (e.g., hacking, spreading malware).
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="text-[#027A48]">●</span> Impersonate any person or
          misrepresent your identity.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="text-[#027A48]">●</span> Use automated scripts or
          bots to collect information from the App.
        </p>
      </div>
      <img
        className="hidden lg:block absolute top-[171rem] text-[#DAF1E099] right-0 w-[17%]"
        src={bvector3}
      />
      {/* USER ACCOUNT SECTION */}
      <div className="border-[#D0D5DD] border-b mx-4 lg:mx-18 pb-16">
        <div className=" space-y-4 pt-10 lg:space-y-8 w-full  ">
          <h2 className="text-2xl lg:text-5xl text-[var(--Color-Green-500,#2E6F40)] font-['Inter'] ">
            User Accounts
          </h2>
          <h3 className="text-[#027A48] text-lg lg:text-2xl font-['Inter'] pt-4 lg:pt-12 border-b border-[#027A48] w-[240px] lg:w-[310px]">
            2.1 Registration and Security
          </h3>
          <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
            To access certain features, you may need to create an account. When
            doing so:
          </p>
          <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
            <span className="text-[#027A48]">●</span> Provide accurate and
            truthful information.
          </p>
          <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
            <span className="text-[#027A48]">●</span> Keep your login
            credentials secure.
          </p>
          <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
            <span className="text-[#027A48]">●</span> Notify us immediately if
            you suspect unauthorized account access.
          </p>
          <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
            We reserve the right to suspend or terminate accounts that violate
            these Terms.
          </p>
        </div>
      </div>

      {/*Privacy and Data Collection SECTION  */}
      <div className="border-[#D0D5DD] border-b mx-4 lg:mx-18 pb-16">
        <div className="space-y-4 pt-10 lg:space-y-8 w-full   ">
          <h2 className="text-2xl lg:text-5xl text-[var(--Color-Green-500,#2E6F40)] font-['Inter']">
            Privacy and Data Collection
          </h2>
          <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
            Your use of the App is also governed by our Privacy Policy, which
            explains how we collect, use, and protect your personal information.
            By using the App, you consent to these practices.
          </p>
        </div>
      </div>

      {/* Intellectual Property Rights SECTION */}
      <div className=" space-y-4 pt-10 lg:space-y-8 w-full  p-4 lg:p-18">
        <h3 className="text-[#027A48] text-lg lg:text-2xl font-['Inter'] pt-4 lg:pt-12 border-b border-[#027A48] w-[120px] lg:w-[154px]">
          4.1 Ownership
        </h3>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          All content, trademarks, logos, and materials in the App belong to
          360HSDI, PEPFAR, or licensed third parties. You do not acquire any
          ownership rights by using the App.
        </p>

        <h3 className="text-[#027A48] text-lg lg:text-2xl font-['Inter'] pt-4 lg:pt-12 border-b border-[#027A48] w-[167px] lg:w-[211px]">
          4.2 Limited License
        </h3>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          We grant you a non-exclusive, non-transferable, revocable license to
          use the App for personal, non-commercial purposes. You may not:
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="text-[#027A48]">●</span> Copy, distribute, or modify
          any content without permission.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="text-[#027A48]">●</span> Reverse engineer or attempt
          to extract source code.
        </p>
      </div>
      <img
        className="hidden lg:block absolute bottom-[127rem] right-0 w-[17%]"
        src={bvector4}
      />
      <div className="bg-[#EDF8F0]">
        {/*Third-Party Services SECTION  */}
        <div className=" border-[#D0D5DD] border-b mx-4 lg:mx-18 pb-16">
          <div className="space-y-4 pt-10 lg:space-y-8 w-full   ">
            <h2 className="text-2xl lg:text-5xl text-[var(--Color-Green-500,#2E6F40)] font-['Inter']">
              Third-Party Services
            </h2>
            <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
              The App may contain links to third-party websites or services. We
              do not endorse or control these third-party services and are not
              responsible for their content, privacy practices, or policies.
            </p>
          </div>
        </div>

        {/* Disclaimers and Limitations of Liability SECTION */}
        <div className=" bg-[#EDF8F0] space-y-4 pt-10 lg:space-y-8 w-full  border-[#D0D5DD] border-b mx-4 lg:mx-18 pb-16">
          <h2 className="text-2xl lg:text-5xl text-[var(--Color-Green-500,#2E6F40)] font-['Inter']">
            Disclaimers and Limitations of Liability
          </h2>
          <h3 className="text-[#027A48] text-lg lg:text-2xl font-['Inter'] pt-4 lg:pt-12 border-b border-[#027A48] w-[125px] lg:w-[160px]">
            6.1 Disclaimers
          </h3>
          <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
            <span className="text-[#027A48]">●</span> The App is provided "as
            is" and "as available" without warranties of any kind.
          </p>
          <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
            <span className="text-[#027A48]">●</span> We do not
            guarantee uninterrupted or error-free operation of the App.
          </p>
          <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
            <span className="text-[#027A48]">●</span> We do not provide medical,
            legal, or professional advice through the App.
          </p>

          <h3 className="text-[#027A48] text-lg lg:text-2xl font-['Inter'] pt-4 lg:pt-12 border-b border-[#027A48] w-[207px] lg:w-[267px]">
            6.2 Limitation of Liability
          </h3>

          <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
            To the fullest extent permitted by law:
          </p>
          <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
            <span className="text-[#027A48]">●</span> We are not liable for any
            indirect, incidental, or consequential damages resulting from your
            use of the App.
          </p>
          <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
            <span className="text-[#027A48]">●</span> Our total liability for
            any claims shall not exceed the amount you paid (if any) to use the
            App.
          </p>
        </div>
        {/*Termination SECTION  */}
        <div className=" space-y-4 pt-0 lg:pt-10 lg:space-y-8 w-full  p-4 lg:p-18">
          <div className="space-y-4 pt-10 lg:space-y-8 w-full   ">
            <h2 className="text-2xl lg:text-5xl text-[var(--Color-Green-500,#2E6F40)] font-['Inter']">
              Termination
            </h2>
            <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
              We reserve the right to suspend or terminate your access at any
              time if you violate these Terms or engage in prohibited
              activities.
            </p>
          </div>
        </div>
      </div>
      <img
        className="hidden lg:block absolute bottom-[35rem] right-0 w-[17%]"
        src={bvector5}
      />
      {/*Changes to These Terms SECTION  */}
      <div className="border-[#D0D5DD] border-b mx-4 lg:mx-18 pb-16">
        <div className="space-y-4 pt-10 lg:space-y-8 w-full   ">
          <h2 className="text-2xl lg:text-5xl text-[var(--Color-Green-500,#2E6F40)] font-['Inter']">
            Changes to These Terms
          </h2>
          <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
            We may update these Terms periodically. We will notify users of
            significant changes by posting updates within the App. Your
            continued use of the App after changes are made signifies your
            acceptance of the revised Terms.
          </p>
        </div>
      </div>
      {/*Governing Law SECTION  */}
      <div className="border-[#D0D5DD] border-b mx-4 lg:mx-18 pb-16">
        <div className="space-y-4 pt-10 lg:space-y-8 w-full   ">
          <h2 className="text-2xl lg:text-5xl text-[var(--Color-Green-500,#2E6F40)] font-['Inter']">
            Governing Law
          </h2>
          <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
            These Terms are governed by the laws of Nigeria, without regard to
            conflict of law principles.
          </p>
        </div>
      </div>
      {/*Contact Us SECTION  */}
      <div className="mx-4 lg:mx-18 pb-16 ">
        <div className="space-y-4 pt-10 lg:space-y-8 w-full   ">
          <h2 className="text-2xl lg:text-5xl text-[var(--Color-Green-500,#2E6F40)] font-['Inter']">
            Contact Us
          </h2>
          <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
            If you have questions or concerns regarding these Terms, contact us
            at: <br></br>
            <span className="hover:underline hover:cursor-pointer hover:text-blue-900 ">
              Email:info@360hsdi.org
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
