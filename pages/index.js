import { getConfig } from "@builtjs/theme";
import Page from "../theme/page";

export default Page;

export async function getStaticProps() {
  const config = await getConfig("home");
  return {
    props: { config }
  };
}
