import React, { useEffect, useState } from "react";
import getTrendingTerms from "../../services/getTrendingTermsService";
import Category from "../Category/Category";

const TrendingSearches = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTerms().then(setTrends);
  }, []);

  return <Category name="Tendencias" options={trends} />;
};

export default TrendingSearches;
