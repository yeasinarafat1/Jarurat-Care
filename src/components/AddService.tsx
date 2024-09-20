/**
 * A dialog that allows users to add a new service
 * @return {React.ReactElement} The component
 */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddServiceForm from "./form/AddServiceForm";
import { useState } from "react";

/**
 * The component
 * @return {React.ReactElement} The component
 */
const AddService = () => {
  const [open, setopen] = useState(false);
  /**
   * Opens the dialog
   */
  const handleOpen = () => {
    setopen(true);
  };
  /**
   * Closes the dialog
   */
  const handleClose = () => {
    setopen(false);
  };
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogTrigger
        className="bg-primary text-white px-3 py-2 rounded-md"
        onClick={handleOpen}
      >
        Add Service
      </DialogTrigger>
      <DialogContent aria-describedby="dialog-description">
        <DialogHeader>
          <DialogTitle>Add Service</DialogTitle>
          <p id="dialog-description"></p>
        </DialogHeader>
        <AddServiceForm setOpen={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default AddService;
