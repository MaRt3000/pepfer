import React from "react";
import FeatureCard from "./FeatureCard";
import privacyhero from "../assets/privacyhero.svg";
import bvector1 from "../assets/bvector1.svg";
import bvector2 from "../assets/bvector2.svg";
import bvector3 from "../assets/bvector3.svg";
import bvector4 from "../assets/bvector4.svg";
import bvector5 from "../assets/bvector5.svg";

const PrivacyPolicy = () => {
  return (
    <div className="relative">
      {/* HERO SECTION */}
      <div className="bg-[#EDF8F0] pt-24   flex flex-col px-4 items-center md:px-6 lg:py-10 ">
        <img
          src={privacyhero}
          alt="Hero"
          className="w-full  max-w-md md:max-w-lg lg:max-w-xl mb-6 lg:hidden "
        />

        <FeatureCard
          title="Vibe360 Mobile App Privacy Policy"
          description="Effective Date: November 1, 2024"
          image={privacyhero}
        />
      </div>
      <img
        className="hidden lg:block absolute top-[49rem] w-[17%]"
        src={bvector1}
      />
      {/*INTRODUCTION SECTION  */}
      <div className="space-y-4 pt-10 lg:space-y-8 w-full  p-4 lg:p-18 ">
        <h2 className="text-2xl lg:text-5xl text-[var(--Color-Green-500,#2E6F40)] font-['Inter']">
          Introduction
        </h2>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          Welcome to Vibe360! We value your privacy and are committed to
          safeguarding the personal information you provide. This Privacy Policy
          explains how 360 Health Systems Development Initiative ("360HSDI,"
          "we," "us," or "our") collects, processes, uses, stores, and shares
          your personal information when you use the Vibe360 mobile application
          ("App") and associated services ("Services"). By using our App or
          Services, you agree to the terms outlined in this Privacy Policy. If
          you do not agree, please discontinue use of the App.
        </p>
      </div>
      <img
        className="hidden lg:block absolute top-[74rem] right-0 w-[17%]"
        src={bvector2}
      />
      {/* Information We Collect SECTION */}
      <div className="bg-[#EDF8F0] space-y-4 pt-10 lg:space-y-8 w-full  p-4 lg:p-18">
        <h2 className="text-2xl lg:text-5xl text-[var(--Color-Green-500,#2E6F40)] font-['Inter'] ">
          Information We Collect
        </h2>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          We collect various types of information, either directly from you,
          automatically from your device, or from third-party services, when you
          interact with the App. These include
        </p>
        <h3 className="text-[#027A48] text-lg lg:text-2xl font-['Inter'] pt-4 lg:pt-12">
          1. Personal Information:
        </h3>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="text-[#027A48]">.</span> Personal data that
          identifies you, such as:
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">. Full Name:</span>  Collected during
          account registration or profile updates.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">. Email Address:</span>  For account
          creation, identity verification, and communication.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">. Phone Number:</span>  Used for
          two-factor authentication and communication.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">. Date of Birth:</span>  Required for age
          verification and access to certain features.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">.Location Data:</span>  If enabled, we
          collect your real-time location to provide location-specific features
          or promotions. You can disable location services in your device
          settings.
        </p>
        <h3 className="text-[#027A48] text-lg lg:text-2xl font-['Inter'] pt-4 lg:pt-12 ">
          2. Account Information:
        </h3>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          We collect and store information that allows us to manage your profile
          securely:
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">. Username:</span> Chosen during
          registration and used for login.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">· Password:</span> Stored securely using
          encryption. We do not store passwords in plain text.
        </p>
        <h3 className="text-[#027A48] text-lg lg:text-2xl font-['Inter'] pt-4 lg:pt-12 ">
          3. Usage Data:
        </h3>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          Automatically collected information about your interaction with the
          App, such as:
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">· Feature Usage:</span> How you use
          various features or functionalities.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">· App Activity:</span> Data on time spent,
          clicks, navigation patterns, and engagement with features or
          promotions.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">· Crash Reports:</span> Diagnostics to
          identify and fix technical issues.
        </p>

        <h3 className="text-[#027A48] text-lg lg:text-2xl font-['Inter'] pt-4 lg:pt-12 ">
          4. Device Information:
        </h3>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          Details about the device used to access the App, which helps enhance
          security and optimize the experience:
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">· Device Type:</span> Smartphone, tablet,
          etc.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">· Operating System and Version:</span>
           Your device’s OS (e.g., iOS, Android).
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">· IP Address:</span> For identifying the
          location of your session and ensuring security.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">· Unique Device Identifiers:</span> Device
          IDs, advertising IDs, and similar identifiers for analytics and fraud
          prevention.
        </p>
      </div>
      <img
        className="hidden lg:block absolute top-[198rem] text-[#DAF1E099] right-0 w-[17%]"
        src={bvector3}
      />
      {/* How We Use Your Information SECTION */}
      <div className=" space-y-4 pt-10 lg:space-y-8 w-full  p-4 lg:p-18">
        <h2 className="text-2xl lg:text-5xl text-[var(--Color-Green-500,#2E6F40)] font-['Inter'] ">
          How We Use Your Information
        </h2>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          We use the information we collect for the following purposes:
        </p>
        <h3 className="text-[#027A48] text-lg lg:text-2xl font-['Inter'] pt-4 lg:pt-12">
          1. Providing and Operating the App:
        </h3>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          Your data helps us ensure that the App functions correctly by:
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="text-[#027A48]">.</span> Managing your account,
          login, and authentication.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">.</span> Offering location-based services
          and personalized content.
        </p>

        <h3 className="text-[#027A48] text-lg lg:text-2xl font-['Inter'] pt-4 lg:pt-12 ">
          2. Communication:
        </h3>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          We use your contact details to send you:
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">.</span> Account-related
          updates: Including password resets, security alerts, and changes to
          your account.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">·</span> Promotional offers: You can opt
          out of these at any time.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">·</span> Customer support messages: For
          resolving any issues you may encounter.
        </p>
        <h3 className="text-[#027A48] text-lg lg:text-2xl font-['Inter'] pt-4 lg:pt-12 ">
          3. Improving and Personalizing the App:
        </h3>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          We use usage data to:
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">·</span> Personalize your experience by
          recommending content or promotions.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">·</span> Conduct analytics to improve app
          performance, usability, and engagement.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">·</span> Identify and address technical
          problems.
        </p>

        <h3 className="text-[#027A48] text-lg lg:text-2xl font-['Inter'] pt-4 lg:pt-12 ">
          4. Compliance with Legal Obligations:
        </h3>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          We may process your data to:
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">·</span> Comply with legal requirements or
          respond to legal proceedings.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">·</span>
          Provide necessary information to law enforcement or regulators.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">·</span> Retain data for auditing and
          compliance purposes.
        </p>
      </div>
      <img
        className="hidden lg:block absolute bottom-[143rem] right-0 w-[17%]"
        src={bvector4}
      />

      {/* Sharing Your Information SECTION */}
      <div className="bg-[#EDF8F0] space-y-4 pt-10 lg:space-y-8 w-full  p-4 lg:p-18">
        <h2 className="text-2xl lg:text-5xl text-[var(--Color-Green-500,#2E6F40)] font-['Inter'] ">
          Sharing Your Information
        </h2>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          We do not sell or rent your personal information. However, we may
          share your data under the following circumstances:
        </p>
        <h3 className="text-[#027A48] text-lg lg:text-2xl font-['Inter'] pt-4 lg:pt-8">
          1. Service Providers:
        </h3>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          We use third-party service providers to support our operations, such
          as:
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">. Cloud Storage Providers:</span> For
          secure storage and processing.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">.Analytics Providers: </span> To help
          analyze app usage and performance.
        </p>

        <h3 className="text-[#027A48] text-lg lg:text-2xl font-['Inter'] pt-4 lg:pt-8 ">
          2. Legal Obligations:
        </h3>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          We may disclose your information if required by law or if we believe
          it is necessary to:
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">.</span> Comply with a legal obligation,
          such as a court order.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">·</span> Protect our rights or property.
        </p>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          <span className="font-bold">·</span>  Prevent or investigate potential
          wrongdoing in connection with the App.
        </p>
      </div>

      {/* Your Choices and Rights SECTION */}
      <div className=" space-y-4 pt-10 lg:space-y-8 w-full  p-4 lg:p-18">
        <h2 className="text-2xl lg:text-5xl text-[var(--Color-Green-500,#2E6F40)] font-['Inter'] ">
          Your Choices and Rights
        </h2>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          You have control over how your information is used and shared:
        </p>
        <h3 className="text-[#027A48] text-lg lg:text-2xl font-['Inter'] pt-4 lg:pt-4">
          1. Access and Update Your Information:
        </h3>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          You can access and modify your account details directly within the
          App. If you need assistance, contact our support team.
        </p>

        <h3 className="text-[#027A48] text-lg lg:text-2xl font-['Inter'] pt-4 lg:pt-2 ">
          2. Control Location Services:
        </h3>
        <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
          You can enable or disable location tracking in your device settings.
          However, disabling this feature may limit certain functionalities of
          the App.
        </p>
      </div>
      <div className="bg-[#EDF8F0]">
        {/* Data Security SECTION */}
        <div className=" bg-[#EDF8F0] space-y-4 pt-10 lg:space-y-8 w-full px-4 lg:px-18 pb-16">
          <h2 className="text-2xl lg:text-5xl text-[var(--Color-Green-500,#2E6F40)] font-['Inter']">
            Data Security
          </h2>
          <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
            We prioritize the security of your data by implementing several
            safeguards:
          </p>
          <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
            <span className="text-[#027A48]">· Encryption:</span> We encrypt
            sensitive information, such as passwords, during transmission and
            storage.
          </p>
          <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
            <span className="text-[#027A48]">· Access Controls:</span> Only
            authorized personnel have access to sensitive data, and we regularly
            review our security practices.
          </p>
          <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
            <span className="text-[#027A48]">· Regular Audits:</span> We conduct
            regular security audits and vulnerability assessments.
          </p>
          <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
            · While we strive to protect your data, no system is completely
            secure, and we cannot guarantee absolute security.
          </p>
        </div>
      </div>
      {/*Children’s Privacy SECTION  */}
      <div className=" space-y-4 pt-0 lg:pt-10 lg:space-y-8 w-full  p-4 lg:p-18">
        <div className="space-y-4 pt-10 lg:space-y-8 w-full   ">
          <h2 className="text-2xl lg:text-5xl text-[var(--Color-Green-500,#2E6F40)] font-['Inter']">
            Children’s Privacy
          </h2>
          <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
            Our App is not intended for children under 15. We do not knowingly
            collect personal information from anyone under 15. If you believe
            your child has provided us with personal data, please contact us,
            and we will delete the information.
          </p>
        </div>
      </div>
      <img
        className="hidden lg:block absolute bottom-[50rem] right-0 w-[17%]"
        src={bvector5}
      />
      <div className="bg-[#EDF8F0]">
        {/* Changes to This Privacy Policy SECTION */}
        <div className=" bg-[#EDF8F0] space-y-4 pt-10 lg:space-y-8 w-full px-4 lg:px-18 pb-16">
          <h2 className="text-2xl lg:text-5xl text-[var(--Color-Green-500,#2E6F40)] font-['Inter']">
            Changes to This Privacy Policy
          </h2>
          <p className="text-lg lg:text-2xl leading-8 lg:leading-12 text-[#1D2939] font-['Inter']">
            We may update this Privacy Policy periodically. When changes are
            made, we will notify you by posting the revised policy within the
            App and updating the "Effective Date" at the top of this page.
            Continued use of the App signifies your acceptance of the updated
            Privacy Policy.
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
export default PrivacyPolicy;
