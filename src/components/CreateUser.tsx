import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";

interface FormData {
  name: string;
  job: string;
}

const CreateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const toast = useToast();

  const onSubmit = (data: FormData) => {
    // Simulate an API call
    console.log(data);
    toast({
      title: "User Created",
      description: "You have created a user successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="lg"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={Boolean(errors.name)} mb={4}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.job)} mb={4}>
          <FormLabel htmlFor="job">Job</FormLabel>
          <Input
            id="job"
            placeholder="Job"
            {...register("job", { required: "Job is required" })}
          />
          <FormErrorMessage>
            {errors.job && errors.job.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          colorScheme="blue"
          isLoading={isSubmitting}
          type="submit"
        >
          Create User
        </Button>
      </form>
    </Box>
  );
};

export default CreateUser;
