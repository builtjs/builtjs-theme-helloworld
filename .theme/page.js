import React, { useEffect, useState } from "react";
import { getPage } from "../.theme/getPage";
import Layout from "../components/layout/layout";

const Page = ({ config }) => {
  const [page, setPage] = useState({});

  useEffect(() => {
    init();
  }, []);

  async function init() {
    if (!config) {
      return;
    }
    const page = await getPage(config);
    setPage(page);
  }

  return (
    <>
      <Layout page={page}>
        {config && (
          <>
            {page.sections &&
              page.sections.map((section, i) => {
                return <section.component key={i} content={section.content} />;
              })}
          </>
        )}
      </Layout>
    </>
  );
};

export default Page;