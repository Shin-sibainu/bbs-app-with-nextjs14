import Image from "next/image";
import Link from "next/link";
import BBSCardList from "./components/BBSCardList";
import { BBSCardData } from "./components/types/types";

async function getBBSCardList() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post`, {
    cache: "no-store",
  });
  // response.json() を使用して、レスポンスボディを JSON として解析
  const bbsCardListData: BBSCardData[] = await response.json();

  return bbsCardListData;
}

export default async function Home() {
  const bbsCardListData = await getBBSCardList();

  return (
    <div>
      <BBSCardList bbsCardListData={bbsCardListData} />
    </div>
  );
}
