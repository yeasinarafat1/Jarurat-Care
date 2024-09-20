import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormFeield from "../CustomFormFeild";
import { createService } from "@/appwite/appwriteFuctions";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
  price: z.coerce.number().gte(1).lte(1000),
});

const AddServiceForm = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
    },
  });
  const createServiceMutation = useMutation({
    mutationFn: createService,
    onSuccess: async () => {
      toast({
        title: "Success",
        description: "Service Added Successfully",
      });
      await queryClient.refetchQueries({ queryKey: ["allService"] });
      setOpen(false);
      window.location.reload();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to add service. Please try again.",
        variant: "destructive",
      });
      console.error("Error creating service:", error);
    },
  });
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { name, description, price } = values;
    createServiceMutation.mutate({ name, description, price });
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default AddServiceForm;
