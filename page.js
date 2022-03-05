import React, { useEffect, useState } from "react";
import { transformPage } from "./lib/transform-page";
import Layout from "./components/layout/layout";

const Page = ({ config }) => {
  const [page, setPage] = useState({});

  useEffect(() => {
    init();
  }, [page]);

  async function init() {
    if (!page.sections) {
      const newPage = await transformPage(config);
      if (newPage.sections) {
        setPage(newPage);
      }
    }
  }

  return (
    <>
      <Layout page={page}>
        {config && (
          <>
            {page.sections &&
              page.sections.map((section, i) => {
                return <section.template key={i} content={section.content} />;
              })}
          </>
        )}
      </Layout>
    </>
  );
};

export default Page;
