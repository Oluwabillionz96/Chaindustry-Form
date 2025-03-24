import React, { useEffect, useRef, useState } from "react";
import {
  LaptopAndComputerLiteracy,
  EmailAndName,
  PhoneAndPhoneNumber,
  MasterClasses,
  WhatsappAndTelegram,
  SocialMediaExposureAndSite,
  Upload,
  SubmitOrClear,
} from "../InputFields/InputFields";
import { move } from "../Movements/movement";
import "./form.css";
import Successful from "../Successful/Successful";

function changeTo(e) {
  return e.target.value;
}

const info = {
  name: "",
  email: "",
  phone: "Yes",
  phoneNumber: "",
  whatsappNumber: "",
  telegram: "",
  laptop: "Yes",
  computerLiteracyLevel: "Basic Level",
  SocialMediaExposure: "Basic Level",
  site: "Onsite",
  classes: [],
  payment: "Yes",
  image: "",
};

const Form = () => {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(sessionStorage.getItem("userInfo")) || info
  );
  const [loadinging, setLoading] = useState(false);
  function handleCheck(e, warning) {
    let next = [...userInfo.classes];
    if (next.includes(e.target.value) === false) {
      next = [...next, e.target.value];
      warning.current.style.display = "none";
    } else {
      const index = next.indexOf(e.target.value);
      next.splice(index, 1);
      console.log(index);
    }
    setUserInfo({ ...userInfo, classes: next });
  }
  const [dragOver, setDragOver] = useState(false);

  const hidden1 = useRef(null);
  const hidden2 = useRef(null);
  const hidden3 = useRef(null);
  const hidden4 = useRef(null);
  const hidden5 = useRef(null);
  const hidden6 = useRef(null);
  const hidden7 = useRef(null);

  async function uploader(file) {
    if (!file) return;
    setLoading(true);
    if (
      file.type === "image/png" ||
      file.type === "image/jpg" ||
      file.type === "image/jpeg" ||
      file.type === "image/webp"
    ) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "chaindustry_form");
      data.append("cloud_name", "dconfftvp");
      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dconfftvp/image/upload",
          {
            method: "POST",
            body: data,
          }
        );

        if (!response.ok) {
          throw new Error(`${response.status}: error`);
        }

        const uploadedImageUrl = await response.json();
        setUserInfo({ ...userInfo, image: uploadedImageUrl.url });
        // console.log(uploadedImageUrl);
      } catch (err) {
        console.error(err.message);
        hidden7.current.style.display = "block";
        hidden7.current.textContent =
          "Network error: check your internet connection";
        console.log(file.size / 1024 / 1024);
      }
    } else {
      hidden7.current.style.display = "block";
      hidden7.current.textContent = "file must be a png or jpg image";
      console.log(file);
    }
    setLoading(false);
  }

  function handleFileUpload(event) {
    const file = event.target.files[0];
    uploader(file);
  }

  async function draggedfile(e) {
    const file = e.dataTransfer.files[0];
    uploader(file);
    console.log(file);
  }

  const inputs = [
    <EmailAndName
      onChange1={(e) => {
        setUserInfo({
          ...userInfo,
          email: changeTo(e),
        });
      }}
      value1={userInfo.email}
      onChange2={(e) => {
        setUserInfo({
          ...userInfo,
          name: changeTo(e),
        });
      }}
      value2={userInfo.name}
      reff1={hidden1}
      reff2={hidden2}
      press1={() => {
        hidden1.current.style.display = "none";
      }}
      press2={() => {
        hidden2.current.style.display = "none";
      }}
    />,
    <PhoneAndPhoneNumber
      reff={hidden3}
      check={userInfo.phone === "Yes"}
      check2={userInfo.phone === "No"}
      onChange1={(e) => {
        setUserInfo({ ...userInfo, phone: changeTo(e) });
      }}
      onChange2={(e) => {
        setUserInfo({ ...userInfo, phone: changeTo(e) });
      }}
      value1={userInfo.phoneNumber}
      onChange3={(e) => {
        setUserInfo({ ...userInfo, phoneNumber: changeTo(e) });
      }}
      press={() => {
        hidden3.current.style.display = "none";
      }}
    />,
    <WhatsappAndTelegram
      reff1={hidden4}
      reff2={hidden5}
      onChange1={(e) => {
        setUserInfo({ ...userInfo, whatsappNumber: changeTo(e) });
      }}
      onChange2={(e) => {
        setUserInfo({ ...userInfo, telegram: changeTo(e) });
      }}
      press1={() => {
        hidden4.current.style.display = "none";
      }}
      press2={() => {
        hidden5.current.style.display = "none";
      }}
      value1={userInfo.whatsappNumber}
      value2={userInfo.telegram}
    />,
    <LaptopAndComputerLiteracy
      check1={userInfo.laptop === "Yes"}
      check2={userInfo.laptop === "No"}
      check3={userInfo.computerLiteracyLevel === "Novice"}
      check4={userInfo.computerLiteracyLevel === "Basic Level"}
      check5={userInfo.computerLiteracyLevel === "Mid-level"}
      check6={userInfo.computerLiteracyLevel === "Expert"}
      onChange1={(e) => {
        setUserInfo({ ...userInfo, laptop: changeTo(e) });
      }}
      onChange2={(e) => {
        setUserInfo({ ...userInfo, laptop: changeTo(e) });
      }}
      onChange3={(e) => {
        setUserInfo({ ...userInfo, computerLiteracyLevel: changeTo(e) });
      }}
      onChange4={(e) => {
        setUserInfo({ ...userInfo, computerLiteracyLevel: changeTo(e) });
      }}
      onChange5={(e) => {
        setUserInfo({ ...userInfo, computerLiteracyLevel: changeTo(e) });
      }}
      onChange6={(e) => {
        setUserInfo({ ...userInfo, computerLiteracyLevel: changeTo(e) });
      }}
    />,
    <SocialMediaExposureAndSite
      check1={userInfo.SocialMediaExposure === "Novice"}
      check2={userInfo.SocialMediaExposure === "Basic Level"}
      check3={userInfo.SocialMediaExposure === "Mid-level"}
      check4={userInfo.SocialMediaExposure === "Expert"}
      check5={userInfo.site === "Onsite"}
      check6={userInfo.site === "Online"}
      onChange1={(e) => {
        setUserInfo({ ...userInfo, SocialMediaExposure: changeTo(e) });
      }}
      onChange2={(e) => {
        setUserInfo({ ...userInfo, SocialMediaExposure: changeTo(e) });
      }}
      onChange3={(e) => {
        setUserInfo({ ...userInfo, SocialMediaExposure: changeTo(e) });
      }}
      onChange4={(e) => {
        setUserInfo({ ...userInfo, SocialMediaExposure: changeTo(e) });
      }}
      onChange5={(e) => {
        setUserInfo({ ...userInfo, site: changeTo(e) });
      }}
      onChange6={(e) => {
        setUserInfo({ ...userInfo, site: changeTo(e) });
      }}
    />,
    <MasterClasses
      arr={userInfo.classes}
      onChange={(e) => handleCheck(e, hidden6)}
      reff={hidden6}
    />,
    <Upload
      loader={loadinging}
      check1={userInfo.payment === "Yes"}
      check2={userInfo.payment == "No"}
      onChange1={(e) => {
        setUserInfo({ ...userInfo, payment: changeTo(e) });
      }}
      onChange2={(e) => {
        setUserInfo({ ...userInfo, payment: changeTo(e) });
      }}
      onChange3={handleFileUpload}
      value1={userInfo.image}
      reff={hidden7}
      click={() => {
        hidden7.current.style.display = "none";
      }}
      handleFile={draggedfile}
      dragOver={dragOver}
      setDragOver={setDragOver}
    />,
    <SubmitOrClear
      onclick2={() => {
        window.location.reload();
        sessionStorage.clear();
        setUserInfo(info);
      }}
    />,
  ];
  const [next, setNext] = useState(
    Number(sessionStorage.getItem("index")) || 0
  );
  const [status, setStatus] = useState(
    sessionStorage.getItem("Status") || "typing"
  );
  useEffect(() => {
    sessionStorage.setItem("index", next.toString());
    sessionStorage.setItem("Status", status);
  }, [next, status]);
  const isEqual = next === inputs.length - 1;
  const lesser = next === 0;
  const argu = [
    [hidden1, hidden2, userInfo.email, userInfo.name],
    [hidden3, userInfo.phoneNumber],
    [userInfo.whatsappNumber, hidden4, userInfo.telegram, hidden5],
    [],
    [],
    [userInfo.classes, hidden6],
    [userInfo.image, hidden7],
  ];

  async function submit(e) {
    e.preventDefault();

    const formData = userInfo;

    setStatus("Submitting");
    try {
      const response = await fetch(
        "https://chaindustry-form-backend.onrender.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (data.message === "Registration successful") {
        setStatus("submitted");
        console.log("Successfull");
      } else {
        setStatus("failed");
      }
      console.log("Response: ", data);
    } catch (error) {
      console.error("Error: ", error);
      setStatus("Submitting");
      setStatus("failed");
    }
  }
  return (
    <form
      className="flexs col"
      onKeyDown={(e) => {
        if (e.key.toLowerCase() === "enter") {
          e.preventDefault();
          move[next](argu[next]) && setNext((next) => next + 1);
        }
      }}
      onSubmit={submit}
      onDragOver={() => setDragOver(false)}
    >
      {status === "Submitting" ? (
        <div className="modal">
          <h1>Submitting...</h1>
        </div>
      ) : status === "submitted" ? (
        <Successful
          click={() => {
            setNext(0);
            setStatus("typing");
            setUserInfo(info);
          }}
        />
      ) : status === "failed" ? (
        <div className="modal status flexs">
          <h1>Failed</h1>
          <button
            id="btnn"
            onClick={() => {
              setStatus("typing");
            }}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
      ) : null}
      <div className="flexs col input-container" style={{ gap: "1.5rem" }}>
        {inputs[next]}
      </div>
      <div className="flexs" style={{ gap: "2rem" }}>
        <div className="btn-contain flexs">
          <button
            type="button"
            onClick={(e) => {
              // e.preventDefault();
              setNext(next - 1);
            }}
            disabled={lesser}
          >
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
              move[next](argu[next]) && setNext((next) => next + 1);
            }}
            disabled={isEqual}
          >
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
