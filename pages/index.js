import { fetchPage } from "../lib/fetch";
import Page from "../page";

export default Page;

export async function getStaticProps() {
  const config = await fetchPage("home");
  return {
    props: { config }
  };
}
