/**
 * DeleteService component
 *
 * A dialog that allows users to delete a service
 *
 * @param {{ id: string }} props - the id of the service to delete
 * @return {JSX.Element} the delete service component
 */
import { databases } from "@/appwite/config";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";

const DeleteService = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  /**
   * Handles the deletion of the service
   */
  const deleteService = async () => {
    try {
      await databases.deleteDocument(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_COLLECTION_ID,
        id
      );
      queryClient.invalidateQueries({ queryKey: ["allService"] });
      toast({
        title: "Service Deleted",
        description: "Service Deleted Successfully",
        variant: "destructive",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-red-500 px-3 py-2 rounded-md text-white">
        Delete
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={deleteService}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteService;
