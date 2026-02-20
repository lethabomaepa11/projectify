import {  useProjectState } from "../providers/projectsProvider";
import { getAxiosInstance } from "./axiosInstance";

export default async(projectId: string) => {

    const { projects } = useProjectState();
    
    
    const project = projects?.find((project) => project.id === projectId);
    if(!project) {
        return null;
    }

    const instance = getAxiosInstance();
    await instance
        .get("/users")
        .then((response) => {
            const user = response.data.find((user) => user.id === project.user_id);
            if(!user) {
                return null;
            }
            return user;
        })
        .catch((error) => {
            console.error("Error fetching user:", error);
            return null;
        });

}