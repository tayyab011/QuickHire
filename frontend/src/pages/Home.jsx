import { useEffect, useState } from "react";
import Hero from "../components/Hero";

import FeaturedJobs from "../components/FeaturedJobs";
import LatestJobs from "../components/LatestJobs";
import { getJobs } from "../services/jobService";
import Marque from "../components/Marque";
import ExploreByCategory from "../components/ExploredByCategory";
import StartPosting from "../components/StartPostingJobs";

export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then((res) => {
      setJobs(res.data);
    });
  }, []);

  return (
    <>
      <Hero />
      <Marque />
      <ExploreByCategory />
      <StartPosting />
      <FeaturedJobs jobs={jobs} />
      <LatestJobs jobs={jobs} />
    </>
  );
}
