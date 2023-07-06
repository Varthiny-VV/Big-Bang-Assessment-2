import React, { useEffect, useState } from "react";
import "./ApproveStatus.css";
import { Link, useNavigate } from "react-router-dom";
import AdminMenu from "./AdminMenu";

function ApproveStatus() {
  const [data, setData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    GetAllDoctors();
  }, []);

  var GetAllDoctors = () => {
    fetch(
      "http://localhost:5273/api/User/GetDoctors",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
      .then(async (data) => {
        var myData = await data.json();
        setData(myData);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

  var changeStatus = (updateStatus) => {
    console.log(updateStatus);
    fetch("http://localhost:5273/api/User/UpdateDoctorStatus", {
      method: "PUT",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        name: updateStatus.name,
        status: updateStatus.status,
      }),
    })
      .then(async (response) => {
        if (response.ok) {
          setData((prevData) =>
            prevData.map((item) =>
              item.name === updateStatus.name
                ? { ...item, user: { ...item.user, status: updateStatus.status } }
                : item
            )
          );
          console.log("Status updated successfully");
           localStorage.setItem(updateStatus.name, updateStatus.status);
           setShowPopup(true);
        } else {
          console.log("Failed to update status");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="approvebackground">
      <AdminMenu />
      <div >
        <table className="table">
          <thead>
            <tr className="table-header">
              <th scope="col">Doctor ID</th>
              <th scope="col">Doctor Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>              
              <th scope="col">Status change</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((d) => d.user?.status !== "Delete" && d.user?.status !== null)
              .map((item, index) => (
                <tr key={index} className="table-row">
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.gender}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>{item.speciality}</td>
                  
                  <td>
                    <div className="select-container">
                      <select
                        value={item.user?.status ? "true" : "false"}
                        onChange={(event) => {
                          const newStatus = event.target.value === "true";
                          changeStatus({
                            name: item.name,
                            status: newStatus,
                          });
                        }}
                      >
                        <option value="true">Activate</option>
                        <option value="false">Deactivate</option>
                        

                      </select>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        

      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Status updated successfully!</p>
            <button className="close-button" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default ApproveStatus;
