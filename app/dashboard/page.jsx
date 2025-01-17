import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getMovies } from "../libs/apis/server";
import Image from "next/image";

export default async function DashboardPage() {
  const movies = await getMovies();
  console.log("Movies :", movies);

  return (
    <main>
      <nav className="bg-blue-300 w-full h-16 flex px-4 justify-start items-center">
        <div className="container">
          <h1 className="text-black font-bold text-xl ">Mflix Dashboard</h1>
        </div>
      </nav>
      {/* body section */}
      <div className="container mt-8">
        <div className="grid grid-cols-4 gap-4">
          {movies?.length &&
            movies.map((movie) => (
              <div key={movie?._id} className="h-96">
                <Card>
                  <CardHeader>
                    <CardTitle>{movie?.title}</CardTitle>
                    <CardDescription>{movie?.plot}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center bg-black w-full h-[276px] mb-4 rounded">
                      <Image
                        src={movie?.poster}
                        alt={movie?.title}
                        width={200}
                        height={400}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
