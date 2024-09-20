/**
 * EditService component
 *
 * This component renders a dialog with an edit form for the given service
 *
 * @param {string} id - the id of the service to edit
 * @param {string} name - the name of the service to edit
 * @param {string} description - the description of the service to edit
 * @param {number} price - the price of the service to edit
 * @returns {JSX.Element} the edit service component
 */
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

  /**
   * Handles the open state of the dialog
   * @param {boolean} open - whether the dialog should be open or not
   */
  const handleOpenChange = (open: boolean) => {
    setopen(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger className="bg-primary text-white px-3 py-2 rounded-md">
        Edit
      </DialogTrigger>
      <DialogContent aria-describedby="dialog-description">
        <DialogHeader>
          <DialogTitle>Edit Service</DialogTitle>
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
