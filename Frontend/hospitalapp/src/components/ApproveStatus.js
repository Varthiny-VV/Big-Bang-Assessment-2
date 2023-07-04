import React, { useEffect, useState } from "react";
import "./ApproveStatus.css";
import { Link, useNavigate } from "react-router-dom";
import AdminMenu from "./AdminMenu";

function ApproveStatus() {
  const [data, setData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [doctorToDelete, setDoctorToDelete] = useState(null);

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
  var deleteDoctor = (doctorName) => {
    fetch(`http://localhost:5273/api/User/DeleteDoctor/${doctorName}`, {
      method: "DELETE",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then(async (response) => {
        if (response.ok) {
          setData((prevData) => prevData.filter((item) => item.name !== doctorName));
          console.log("Doctor deleted successfully");
          setShowPopup(false);
        } else {
          console.log("Failed to delete doctor");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const openDeletePopup = (doctorName) => {
    setDoctorToDelete(doctorName);
    setShowPopup(true);
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
              <th scope="col">Speciality</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
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
                        <option value="false">Deactivate</option>
                        <option value="true">Activate</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <button className="deletebtn" onClick={() => openDeletePopup(item.name)}>Delete</button>
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

{showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Are you sure you want to delete this doctor?</p>
            <div>
              <button  onClick={deleteDoctor}>Delete</button>
              <button onClick={closePopup}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ApproveStatus;
