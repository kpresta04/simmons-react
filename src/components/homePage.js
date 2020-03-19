import React from "react";

import { connect } from "react-redux";
import ImageCarousel from "./ImageCarousel";
import MainContent from "./MainContent";
import ResCarousel from "./ResCarousel";

const ExpenseDashboardPage = () => (
  <div>
    <ResCarousel />
    <MainContent />
  </div>
);

export default ExpenseDashboardPage;
