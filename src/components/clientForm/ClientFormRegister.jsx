import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Tag, Divider } from "antd";
import "./style.css";

export default function ClientFormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [regData, setRegData] = useState({});
  const onSubmit = async (data) => {
    console.log(data);
    await setRegData(data);
  };
  console.log(errors);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First name: </label>
        <h1>New Client Registrating</h1>
        <input
          type="text"
          placeholder="First name"
          {...register("Firstname", { required: true, maxLength: 20 })}
        />
        <label>Last name: </label>

        <input
          type="text"
          placeholder="Last name"
          {...register("Lastname", { required: true, maxLength: 20 })}
        />
        <label>Email: </label>

        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: false, pattern: /^\S+@\S+$/i })}
        />
        <label>Mobile number: </label>

        <input
          type="tel"
          placeholder="Mobile number"
          {...register("Mobilenumber", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        <label>Szolgáltatás: </label>

        <select {...register("Services", { required: true })}>
          <option value="Edzés">Edzés</option>
          <option value="Étrend">Étrend</option>
          <option value="Masszázs">Masszázs</option>
          <option value="Edzés, Étrend">Edzés + Étrend</option>
          <option value="Masszázs, Edzés">Edzés + Masszázs</option>
          <option value="Masszázs,Edzés, Étrend">
            Masszázs + Edzés + Étrend
          </option>
        </select>
        <input type="url" placeholder="Image" {...register("Image", {})} />

        <input id="submitbtn" type="submit" />
      </form>
      {/* Ez Toast message-ban érkezik hogy elkészült */}
      {regData.Firstname !== undefined && (
        <div className="clientregdata">
          <div className="imgcontainer">
            <img
              className="clientimg"
              width="128"
              src={
                regData.Image ||
                "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
              }
              alt=""
            />
          </div>
          <div className="datacontainer">
            <div className="name">
              <h3 style={{ marginRight: "4px" }}>{regData.Lastname} </h3>
              <h3>{`${regData.Firstname} `}</h3>
            </div>
            <div className="email">
              <h5>{`${regData.Email} `}</h5>
            </div>
            <div className="phone">
              <h5>{`${regData.Mobilenumber} `}</h5>
            </div>
            {regData.Services && (
              <div className="services">
                {regData.Services.includes("Edzés") && (
                  <Tag onClick={() => console.log("Edzés")} color="magenta">
                    Edzés
                  </Tag>
                )}
                {regData.Services.includes("Étrend") && (
                  <Tag onClick={() => console.log("Étrend")} color="green">
                    Étrend
                  </Tag>
                )}
                {regData.Services.includes("Masszázs") && (
                  <Tag onClick={(a) => console.log("Masszázs")} color="blue">
                    Masszázs
                  </Tag>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
