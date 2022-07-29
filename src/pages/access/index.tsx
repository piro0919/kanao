import AccessTop from "components/AccessTop";
import Seo from "components/Seo";
import SubLayout from "components/SubLayout";
import { ReactElement } from "react";

function Access(): JSX.Element {
  return (
    <>
      <Seo title="アクセス" />
      <AccessTop />
    </>
  );
}

Access.getLayout = function getLayout(page: ReactElement): JSX.Element {
  return <SubLayout heading="アクセス">{page}</SubLayout>;
};

export default Access;
