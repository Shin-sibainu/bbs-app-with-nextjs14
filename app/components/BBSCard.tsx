import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { BBSCardData } from "./types/types";

interface BBSCardProps {
  bbsCard: BBSCardData;
}

const BSSCard = ({ bbsCard }: BBSCardProps) => {
  const { id, username, title, content } = bbsCard;
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{username}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
        <CardFooter>
          <Link
            href={`/bbs-posts/${id}`}
            className="text-blue-400 hover:text-blue-600 duration-200"
          >
            More Read
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BSSCard;
