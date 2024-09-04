import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { txtSlicer } from "../utils/functions";
import BikeSvg from "../assets/SVG/BikeSvg";

interface IProps {
  bike: {
    title: string;
    description: string;
    stolen_location: string;
    large_img: string;
    date_stolen: number | null;
  }
}

export default function Bike({ bike }: IProps) {

  let timestamp = new Date(bike.date_stolen!);
  return (
    <Card className="overflow-hidden w-full max-w-[48rem] my-3 md:max-w-[100%] md:h-56 flex-col md:flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-full md:w-1/4 shrink-0 rounded-r-none bg-cover bg-center bg-gray-100 flex justify-center items-center"
      >
       {bike.large_img? <img
          src={bike.large_img}
          alt="card-image"
          className="h-full w-full object-cover bg-transparent"
        />:<BikeSvg/>}
      </CardHeader>
      <CardBody className="w-full md:w-1/2 pb-0 md:p-6">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {txtSlicer(bike.title,30)}
        </Typography>

        <Typography color="gray" className="md:mb-3 font-normal">
          {bike.description ? txtSlicer(bike.description) : "No Description"}
        </Typography>
       
      </CardBody>
      <CardBody className="w-auto" >
        <Typography variant="h6" color="gray" className="mb-1 uppercase">
          Date Stolen : <br />
        </Typography>
        <p>
          {timestamp.toUTCString() ? timestamp.toUTCString() : "No Date"}
        </p>
       
        <Typography variant="h6" color="gray" className="mt-3 mb-1 uppercase">
          Location :
        </Typography>
        <p>
          {bike.stolen_location ? bike.stolen_location : "No Location"}
        </p>

      </CardBody>
    </Card>
  );
}