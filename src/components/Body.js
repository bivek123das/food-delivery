import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listRestro, setListRestro] = useState([]);
    const [filterRestro, setFilterRestro] = useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus(); // Call hook first
    const { loggedInUser, setUserName } = useContext(UserContext); // Call context hook first

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await response.json();
            const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setListRestro(restaurants);
            setFilterRestro(restaurants);
        };

        fetchData();
    }, []);

    // Check online status before rendering
    if (!onlineStatus) {
        return <h1>Looks like you're offline!! Please check your internet connection...</h1>;
    }

    const RestaurantPromotedCard = withPromotedLabel(RestaurantCard);

    // If no restaurants found, show shimmer effect
    if (listRestro.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="filter flex items-center">
                <div className="search m-4 p-4">
                    <input
                        className="border border-solid border-black text-black rounded p-1 px-4"
                        type="text"
                        value={searchText} 
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button className="px-4 py-1.5 bg-green-100 mx-4 rounded" onClick={() => {
                        const filteredResults = listRestro.filter((res) =>
                            res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilterRestro(filteredResults);
                    }}>Search</button>
                </div>
                <div>
                    <button className="first-button px-4 py-1.5 rounded bg-gray-100" onClick={() => {
                        const topRatedList = listRestro.filter((res) => res?.info?.avgRating > 4);
                        setFilterRestro(topRatedList);
                    }}>Top Rated Restaurant</button>
                </div>
                <div className="search m-4 p-4">
                    <input
                        className="border border-solid border-black rounded p-1 px-4"
                        type="text"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                        
                    />
                </div>
            </div>
            <div className="flex flex-wrap">
                {filterRestro.map((restro) => (
                    <Link key={restro?.info?.id} to={"/restaurant/" + restro?.info?.id}>
                        {restro.info.avgRating < 4.4 ? <RestaurantPromotedCard resData={restro} /> : <RestaurantCard resData={restro} />}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;

