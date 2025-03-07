import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Link from "next/link";
import MovieData from "./movie-data";
import { Shell } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function MoviesPage() {
  

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Link href="/movies">
          <Button variant="outline">
            <Eye /> View as user
          </Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Movies Management</CardTitle>
          <CardDescription>
            View and manage all the listed movie entries.
          </CardDescription>
        </CardHeader>
        <CardContent>
        <Suspense
            fallback={
              <div className="flex justify-center items-center h-[186px]">
                <Shell className="animate-spin duration-1000 text-green-600" />
              </div>
            }
          >
            <MovieData />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
