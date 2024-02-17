import { BBSCardData } from "@/app/components/types/types";
import Link from "next/link";
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
  const bbsCardData = await getDetailBBS(params.bbsId);
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* ヘッダーセクション */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{bbsCardData.title}</h1>
        <p className="text-gray-700">{bbsCardData.username}</p>
      </div>

      {/* コンテンツセクション */}
      <div className="mb-8">
        <p className="text-gray-900">{bbsCardData.content}</p>
      </div>

      <Link
        href={"/"}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        戻る
      </Link>
    </div>
  );
};

export default BBSDetailPage;
