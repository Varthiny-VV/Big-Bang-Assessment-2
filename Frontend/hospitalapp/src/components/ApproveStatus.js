import React, { useEffect, useState } from "react";
// import "./Approve.css";
import { Link, useNavigate } from "react-router-dom";

function ApproveStatus() {
  const [data, setData] = useState([]);
  useEffect(() => {
    GetAllDoctors();
  }, []);

  var GetAllDoctors = () => {
    fetch(
      "http://localhost:5273/api/User/GetDoctors",
      {
        method: "GET",
        headers: {
          accept: "text/plain",
          "Content-Type": "application/json",
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
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateStatus),
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData);
        GetAllDoctors();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Manager">
     
      <div>
        <table className="table">
          <thead>
            <tr className="tr">
              <th scope="col">Doctor ID</th>
              <th scope="col">Doctor Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col">Speciality</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((d) => d.user.status != "Delete")
              .map((item, index) => (
                <tr key={index}>
                  <th>{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.gender}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>{item.speciality}</td>   
                  <td>
                    <select
                      value={item.user.status}
                      onChange={(event) => {
                        changeStatus({
                          name: item.name,
                          status: event.target.value,
                        });
                      }}
                    >
                      <option value="DeActivate">DeActivate</option>
                      <option value="Activate">Activate</option>
                      <option value="Delete">Delete</option>
                    </select>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ApproveStatus;
