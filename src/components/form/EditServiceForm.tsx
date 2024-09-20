/**
 * EditServiceForm component
 *
 * A form to edit a service
 *
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setOpen - a function to open or close the dialog
 * @param {string} id - the id of the service to edit
 * @param {string} name - the name of the service to edit
 * @param {string} description - the description of the service to edit
 * @param {number} price - the price of the service to edit
 * @returns {JSX.Element} the form component
 */
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormFeield from "../CustomFormFeild";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { databases } from "@/appwite/config";

/**
 * The schema for the form
 */
const formSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
  price: z.coerce.number().gte(1).lte(1000),
});

const EditServiceForm = ({
  setOpen,
  id,
  name,
  description,
  price,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  name: string;
  description: string;
  price: number;
}) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name,
      description: description,
      price: price,
    },
  });

  // 2. Define a submit handler.
  /**
   * Handles the form submission
   * @param {z.infer<typeof formSchema>} values - the form values
   */
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { name, description, price } = values;
    try {
      await databases.updateDocument(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_COLLECTION_ID,
        id,
        { name, description, price }
      );

      queryClient.invalidateQueries({ queryKey: ["allService"] });
      toast({
        title: "Success",
        description: "Service Added Successfully",
        variant: "default",
      });
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomFormFeield
          name="name"
          control={form.control}
          label="Service Name"
          placeholder="Dental"
        />
        <CustomFormFeield
          name="description"
          control={form.control}
          label="Service Description"
          placeholder="Description"
          type="text"
        />
        <CustomFormFeield
          name="price"
          control={form.control}
          label="Service price"
          placeholder="10$"
          type="number"
        />
        <Button type="submit">Edit</Button>
      </form>
    </Form>
  );
};

export default EditServiceForm;

