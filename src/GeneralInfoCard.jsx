import React from "react";
import Card from "./Card";

const GeneralInfoCard = ({ totalFiles, database }) => {
  return (
    <div className="card">
      <Card heading="Codebase name:" content="sample-express-codebase" />
      <Card heading="Primary tech stack:" content="JavaScript, Express.js" />
      <Card heading="Total files scanned:" content={totalFiles} />
      <Card heading="Database used:" content="MongoDB" />
    </div>
  );
};

export default GeneralInfoCard;
