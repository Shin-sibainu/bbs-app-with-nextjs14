import Image from "next/image";
import Link from "next/link";
import BBSCardList from "./components/BBSCardList";
import { BBSCardData } from "./components/types/types";

export default async function Home() {
  const bbsCardListData: BBSCardData[] = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/post`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  console.log(bbsCardListData);

  return (
    <div>
      <BBSCardList bbsCardListData={bbsCardListData} />
    </div>
  );
}
