import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSec from "./useAxiosSec";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSec = useAxiosSec();
  const { data: isAdmin, isPending: adminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSec.get(`/users/admin/${user?.email}`);
      console.log(res.data);
      return res.data?.admin;
    },
  });
  return [isAdmin, adminLoading];
};

export default useAdmin;
