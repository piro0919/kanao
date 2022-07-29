import BusinessContent from "components/BusinessContent";
import Seo from "components/Seo";
import SubLayout from "components/SubLayout";
import { ReactElement } from "react";

function Services(): JSX.Element {
  return (
    <>
      <Seo title="業務内容" />
      <BusinessContent />
    </>
  );
}

Services.getLayout = function getLayout(page: ReactElement): JSX.Element {
  return <SubLayout heading="業務内容">{page}</SubLayout>;
};

export default Services;
