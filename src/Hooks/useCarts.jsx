import { useQuery } from "@tanstack/react-query";
import { axiosSec } from "./useAxiosSec";
import useAuth from "./useAuth";

const useCarts = () => {
  const { user } = useAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSec.get(`/my-carts?email=${user?.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCarts;
