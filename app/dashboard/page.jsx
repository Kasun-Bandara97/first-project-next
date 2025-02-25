import { getMovies } from "../../lib/apis/server";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { IoIosStarHalf } from "react-icons/io";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


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
              <div key={movie?._id} className="h-[500px]  ">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="">{movie?.title} </CardTitle>
                    <CardDescription className="text-xs ">
                      {movie?.year ?? "N/A"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center bg-black w-full h-[220px] mb-4 rounded">
                      <Image
                        src={movie?.poster}
                        alt={movie?.title}
                        width={200}
                        height={400}
                        className="h-full w-auto object-contain"
                        priority={true}
                      />
                    </div>
                    <div className="flex flex-col justify-between h-[154px]">
                      <p className="line-clamp-3">{movie?.plot}</p>
                      <div className="text-sm text-blue-900 font-semibold">
                        {movie?.genres?.length && movie?.genres?.join(" / ")}
                      </div>
                      <div className="flex flex-row justify-between items-center">
                        <Badge variant="success" className="font-medium">
                          Rated: {movie?.rated ?? "N/A"}
                        </Badge>
                        <div className="flex flex-row gap-1 items-center" title="Imdb Rating">
                          <IoIosStarHalf className="text-yellow-700"/>
                          <span className="text-sm font-semibold">{movie?.imdb?.rating ?? 0}/10</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  {/* <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter> */}
                </Card>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
