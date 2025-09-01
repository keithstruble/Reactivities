import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import agent from "../api/agent";

// fetching data: useQuery
export const useActivities = () => {
    const queryClient = useQueryClient();

    const {data: activities, isPending} = useQuery({
    queryKey: ['activities'],
    queryFn: async () => {
      const response = await agent.get<Activity[]>('/activities');
      return response.data;
    }
  })

  // updating data: useMutation
  const updateActivity = useMutation({
    mutationFn: async (activity: Activity) => {
        await agent.put('/activities', activity)
    },
    onSuccess: async () => {
      // Invalidate and refetch
      await queryClient.invalidateQueries({
        queryKey: ['activities']
      });
    }
  })

  // creating data: useMutation
  const createActivity = useMutation({
    mutationFn: async (activity: Activity) => {
      await agent.post('/activities', activity)
    },
    onSuccess: async () => {
      // Invalidate and refetch
      await queryClient.invalidateQueries({
        queryKey: ['activities']
      });
    }
  })

  // deleting data: useMutation
  const deleteActivity = useMutation({
    mutationFn: async (id: string) => {
      await agent.delete(`/activities/${id}`)
    },
    onSuccess: async () => {
      // Invalidate and refetch
      await queryClient.invalidateQueries({
        queryKey: ['activities']
      });
    }
  })

  return { 
    activities, 
    isPending, 
    updateActivity,
    createActivity,
    deleteActivity
  }
}