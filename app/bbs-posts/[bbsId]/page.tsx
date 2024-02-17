import { BBSCardData } from "@/app/components/types/types";
import React from "react";

async function getDetailBBS(id: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${id}`,
    {
      cache: "no-store",
    }
  );
  // response.json() を使用して、レスポンスボディを JSON として解析
  const bbsDetailData: BBSCardData = await response.json();

  return bbsDetailData;
}
const BBSDetailPage = async ({ params }: { params: { bbsId: number } }) => {
  const bbsCardListData = await getDetailBBS(params.bbsId);
  console.log(bbsCardListData);
  return <div>BBSDetailPage</div>;
};

export default BBSDetailPage;
