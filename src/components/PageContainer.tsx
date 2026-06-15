import React from "react";
import { useShop } from "../context/ShopContext";
import { ReturnPolicyPage } from "./pages/ReturnPolicyPage";
import { BrandFAQPage } from "./pages/BrandFAQPage";
import { TermsPage } from "./pages/TermsPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { JournalPage } from "./pages/JournalPage";

export const PageContainer: React.FC = () => {
  const { activePage } = useShop();

  switch (activePage) {
    case "returns":
      return <ReturnPolicyPage />;
    case "faq":
      return <BrandFAQPage />;
    case "terms":
      return <TermsPage />;
    case "privacy":
      return <PrivacyPage />;
    case "about":
      return <AboutUsPage />;
    case "journal":
      return <JournalPage />;
    default:
      return null;
  }
};
export default PageContainer;
