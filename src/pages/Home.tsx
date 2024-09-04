import { useEffect, useState } from "react"
import Bike from "../components/Bike"
const Home = () => {
  const [data, setData] = useState<Bike[]>([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(`https://bikeindex.org/api/v3/search?page=${page}&per_page=10`)
      .then(data => data.json())
      .then(data => setData(data.bikes))
  }, [page])
  return <main className="container px-2 my-6">
          {data!.map((bike, i) => (
              <Bike key={i} bike={bike} />
          ))}
  </main>
}

export default Home
