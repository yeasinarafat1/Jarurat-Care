import AddService from "../AddService";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllService } from "@/appwite/appwriteFuctions";
import { Loader } from "../Loader";
import { useQuery } from "@tanstack/react-query";
import DeleteService from "../DeleteService";
import EditService from "../EditService";

const ServiceTable = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["allService"],
    queryFn: async () => {
      const res = await getAllService();

      return res;
    },
  });

  return (
    <div className="container mx-auto ">
      <div className="flex items-center justify-between w-full h-16">
        <h2 className="font-medium text-3xl">Service List</h2>
        <AddService />
      </div>
      {/* @ts-ignore */}
      {data?.length < 1 && (
        <p className="w-full h-2/3 flex items-center justify-center text-2xl font-medium">
          No service found
        </p>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        // @ts-ignore
        data?.length > 0 && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">No</TableHead>
                <TableHead className="">Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* @ts-ignore */}
              {data?.map(
                (
                  {
                    $id,
                    name,
                    description,
                    price,
                  }: {
                    $id: string;
                    name: string;
                    description: string;
                    price: number;
                  },
                  index: number
                ) => (
                  <TableRow key={$id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell className="font-medium">{name}</TableCell>
                    <TableCell>{description}</TableCell>
                    <TableCell>{price}$</TableCell>
                    <TableCell>
                      <EditService
                        id={$id}
                        name={name}
                        description={description}
                        price={price}
                      />
                    </TableCell>
                    <TableCell>
                      <DeleteService id={$id} />
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        )
      )}
    </div>
  );
};

export default ServiceTable;
