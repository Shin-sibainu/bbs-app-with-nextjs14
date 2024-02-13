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

const BSSCard = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>BBS Title</CardTitle>
          <CardDescription>BBS Post UserName</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            BBS Content Example Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Cum consequatur dolorem fugit quos mollitia itaque
            voluptates, similique repellat, molestiae
          </p>
        </CardContent>
        <CardFooter>
          <Link
            href="/bbs-posts/1"
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
