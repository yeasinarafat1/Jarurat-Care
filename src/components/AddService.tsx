import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddServiceForm from "./form/AddServiceForm";
import { useState } from "react";

const AddService = () => {
  const [open, setopen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setopen}>
      <DialogTrigger className="bg-primary text-white px-3 py-2 rounded-md">
        Add Service
      </DialogTrigger>
      <DialogContent aria-describedby="dialog-description">
        <DialogHeader>
          <DialogTitle>Add Service</DialogTitle>
          <p id="dialog-description"></p>
        </DialogHeader>
        <AddServiceForm setOpen={setopen} />
      </DialogContent>
    </Dialog>
  );
};

export default AddService;
