import React from "react";
import "./CustomerDashboard.css";
import { FaSearch, FaRegClock, FaRegUser } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";


const CustomerDashboard = () => {
    const { user, logout, isAuthenticated } = useAuth0();

  const requests = [
    {
      id: "#IDHT78935",
      from: "PARIS",
      to: "FRANCE",
      date: "Aug 18, 2013, 2:10 pm",
      weight: "1000Kgs",
      price: "120/Kgs",
      status: "Query received",
      statusType: "pending",
    },
    {
      id: "#IDHT78935",
      from: "PARIS",
      to: "FRANCE",
      date: "Aug 18, 2013, 2:10 pm",
      weight: "1000Kgs",
      price: "120/Kgs",
      status: "Query received",
      statusType: "pending",
    },
    {
      id: "#IDHT78935",
      from: "FRANCE",
      to: "GERMANY",
      date: "Aug 18, 2013, 8:40 am",
      weight: "1000Kgs",
      price: "INR 120/Kg",
      status: "Confirmed Price",
      statusType: "confirmed",
    },
    {
      id: "#IDHT78935",
      from: "FRANCE",
      to: "GERMANY",
      date: "Aug 18, 2013, 8:40 am",
      weight: "3000Kgs",
      price: "INR 135/Kg",
      status: "Request Closed",
      statusType: "closed",
    },
    {
      id: "#IDHT78935",
      from: "FRANCE",
      to: "GERMANY",
      date: "Aug 18, 2013, 8:40 am",
      weight: "1000Kgs",
      price: "INR 120/Kg",
      status: "Confirmed Price",
      statusType: "confirmed",
    },
  ];

  return (
    isAuthenticated && (
    <div className="customer-dashboard">
      <header className="dashboard-header">
        <h1>FreightOrbit</h1>
        <div className="header-right">
          <button className="icon-btn">
            <FaRegClock />
          </button>
          <button className="icon-btn">
            <FaRegUser />
          </button>
          <span className="customer-name">Customer</span>
        </div>
      </header>

      <div className="filter-section">
        <select>
          <option>All Consols</option>
        </select>
        <input type="date" />
        <input type="text" placeholder="Search console by name" />
        <button className="search-btn">
          <FaSearch />
        </button>
      </div>

      <div className="requests-container">
        {requests.map((req, index) => (
          <div className={`request-card ${req.statusType}`} key={index}>
            <p className="console-id">{req.id}</p>
            <div className="route">
              <h3>{req.from}</h3>
              <span>→</span>
              <h3>{req.to}</h3>
            </div>
            <p className="date">{req.date}</p>
            <p className="weight">Total Consol Weight: {req.weight}</p>
            <p className="price">Price Per Kg: {req.price}</p>

            <div className="status">
              {req.statusType === "pending" && <FaRegClock />}
              <span>{req.status}</span>
            </div>

            {req.statusType === "confirmed" && (
              <div className="actions">
                <button className="update-btn">Update</button>
                <button className="cancel-btn">Cancel</button>
              </div>
            )}

            {req.statusType === "closed" && <button className="closed-btn">Resubmit</button>}
          </div>
        ))}
      </div>

      <button className="load-more">Load More</button>
      <button onClick={() => logout({ returnTo: "http://localhost:5173/customer-dashboard" })}>LogOut</button>

    </div>
    
    )
  );
};

export default CustomerDashboard;
