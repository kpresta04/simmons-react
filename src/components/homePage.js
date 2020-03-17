import React from "react";

import { connect } from "react-redux";
import ImageCarousel from "./ImageCarousel";
import MainContent from "./MainContent";

const ExpenseDashboardPage = () => (
  <div>
    <ImageCarousel />
    <MainContent />
  </div>
);

export default ExpenseDashboardPage;
