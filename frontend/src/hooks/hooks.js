import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Backend_Url } from "../config";

export const useUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserDetails = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                setLoading(false);
                navigate("/signin");
                return;
            }
            try {
                const response = await axios.get(`${Backend_Url}/api/user/home`, {
                    headers: {
                        Authorization: token,
                    },
                });
                setUser(response.data);
            } catch (err) {
                console.error(err);
                toast.error("Authentication failed. Please sign in again.");
                localStorage.removeItem("token");
                navigate("/signin");
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, []);

    return { user, loading };
}