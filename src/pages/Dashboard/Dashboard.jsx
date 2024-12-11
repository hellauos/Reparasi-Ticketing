import { format } from "date-fns";
import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { selectCurrentUsername } from "../../api/authSlice";

export const Dashboard = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    // const username = useSelector(selectCurrentUsername);

    useEffect(() => {
        // Update waktu setiap detik
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-12rem)]">
            <div className="space-y-6 text-center">
                <h1 className="text-4xl font-bold text-gray-900">
                    {/* Hello, {username ? username : "Guest"} ... ! */}Hello !
                </h1>
                <p className="text-2xl text-gray-600">
                    {format(currentTime, "EEEE, MMMM do yyyy")}
                </p>
                <p className="text-5xl font-semibold text-blue-600">
                    {format(currentTime, "HH:mm:ss")}
                </p>
            </div>
        </div>
    );
};
