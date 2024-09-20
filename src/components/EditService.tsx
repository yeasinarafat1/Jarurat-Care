import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import EditServiceForm from "./form/EditServiceForm";

const EditService = ({
  id,
  name,
  description,
  price,
}: {
  id: string;
  name: string;
  description: string;
  price: number;
}) => {
  const [open, setopen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setopen}>
      <DialogTrigger className="bg-primary text-white px-3 py-2 rounded-md">
        Edit
      </DialogTrigger>
      <DialogContent aria-describedby="dialog-description">
        <DialogHeader>
          <DialogTitle>Add Service</DialogTitle>
        </DialogHeader>
        <EditServiceForm
          setOpen={setopen}
          id={id}
          name={name}
          description={description}
          price={price}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditService;
