import { useEffect, useState } from "react"
import Bike from "../components/Bike"
import Pagination from "../components/Pagination"
import NoBike from "../components/NoBike"

const Home = () => {
  const [data, setData] = useState<Bike[]>([])
  const [page, setPage] = useState(1)
  const [title, setTitle] = useState("")
  const [range, setRange] = useState("")

  useEffect(() => {
    fetch(`https://bikeindex.org/api/v3/search?query=${title}&page=${page}&per_page=10`)
      .then(data => data.json())
      .then(data => setData(data.bikes))
      .catch(error => console.error('Error fetching data:', error));
  }, [title,page])

  return <main className="container px-2 my-6">
    {
      data.length ?
        <> <div className="w-full flex gap-2 items-center justify-between max-h-24 h-20">
          <div className="w-full sm:w-11/12 flex flex-col justify-between">
            <input className="w-full h-10 outline-none border rounded-sm px-3 border-1 mb-2 border-gray-200"
              type="text"
              placeholder="Search Bike Title"
              value={title}
              onChange={e => {
                setPage(1)
                return setTitle(e.target.value)
              }}
            />
            <input className="w-full h-10 outline-none border rounded-sm px-3 border-1 border-gray-200"
              type="text"
              placeholder="Search By Date Range"
              value={range}
              onChange={e => setRange(e.target.value)}
            />
          </div>
          <div className="hidden sm:flex justify-center text-sm items-center w-32 p-11 bg-blue-gray-50 rounded-sm h-full">
            <i className="w-full fa-solid p-3 fa-search h-10"></i>
          </div>
        </div>
          {data!.map((bike, i) => (
            <Bike key={i} bike={bike} />
          ))}
        </> : <NoBike />
    }
    <Pagination setPage={setPage} />
  </main>
}

export default Home
