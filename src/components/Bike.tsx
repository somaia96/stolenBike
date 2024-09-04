import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

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

  return (
    <Card className="overflow-hidden w-full max-w-[48rem] my-3 sm:max-w-[100%] h-56 flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-1/4 shrink-0 rounded-r-none bg-cover bg-center bg-gray-100"
      >
        <img
          src={bike.large_img ? bike.large_img : "src/assets/images/bike.svg"}
          alt="card-image"
          className="h-full w-full object-cover bg-transparent"
        />
      </CardHeader>
      <CardBody className="w-1/2">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {bike.title}
        </Typography>

        <Typography color="gray" className="mb-3 font-normal">
          {bike.description ? bike.description : "No Description"}
        </Typography>
       
      </CardBody>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-1 uppercase">
          Date Stolen : <br />
        </Typography>
    
        <Typography variant="h6" color="gray" className="mt-3 mb-1 uppercase">
          Location :
        </Typography>
    
      </CardBody>
    </Card>
  );
}