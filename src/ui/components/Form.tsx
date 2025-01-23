import { useState } from "react";

export const Form = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    github: "",
    linkedin: "",
    twitter: "",
    phone: "",
  });

  const FormTitles = ["User Info", "Personal Info", "Social Profiles", "Result"];

  const StepDisplay = () => {
    if (step === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (step === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (step === 2) {
      return <SocialProfiles formData={formData} setFormData={setFormData} />;
    } else {
      return <Result formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="users-form">
      <p className="steps">
        Step <span>{step + 1}</span> of {FormTitles.length}
      </p>
      <div className="progressbar">
        <div
          style={{
            transition: "all 300ms linear",
            width:
              step === 0
                ? "0%"
                : step === 1
                ? "33%"
                : step === 2
                ? "66%"
                : "100%",
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[step]}</h1>
        </div>
        <div className="body">{StepDisplay()}</div>
        <div className="footer">
          <button
            disabled={step === 0}
            onClick={() => {
              setStep((currStep) => currStep - 1);
            }}
          >
            Prev
          </button>
          {step !== FormTitles.length - 1 && (
            <>
              <button
                onClick={() => {
                  if (step === FormTitles.length - 1) {
                    alert("Success");

                    console.log(formData);
                  } else {
                    setStep((currStep) => currStep + 1);
                  }
                }}
              >
                {step === FormTitles.length - 2 ? "Confirm" : "Next"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const SignUpInfo = ({ formData, setFormData }: any) => {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(event) =>
          setFormData({ ...formData, username: event.target.value })
        }
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
    </div>
  );
};

// ==================================================================================== //

const PersonalInfo = ({ formData, setFormData }: any) => {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="First Name..."
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Last Name..."
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => {
          setFormData({ ...formData, phone: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Nationality"
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
      />
    </div>
  );
};
// ==================================================================================== //
const SocialProfiles = ({ formData, setFormData }: any) => {
  return (
    <div className="social-info-container">
      <input
        type="text"
        placeholder="Github"
        value={formData.github}
        onChange={(e) => {
          setFormData({ ...formData, github: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="LinkedIn"
        value={formData.linkedin}
        onChange={(e) => {
          setFormData({ ...formData, linkedin: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Twitter"
        value={formData.twitter}
        onChange={(e) => {
          setFormData({ ...formData, twitter: e.target.value });
        }}
      />
    </div>
  );
};
const Result = ({ formData }: any) => {
  return (
    <div className="result-container">
      <label>Username</label>
      <input
        readOnly
        placeholder="none"
        type="text"
        value={formData.username}
      />
      <label>Email</label>
      <input readOnly placeholder="none" type="email" value={formData.email} />
      <label>Password</label>
      <input
        readOnly
        placeholder="none"
        type="password"
        value={formData.password}
      />
      <label>First Name</label>
      <input
        readOnly
        placeholder="none"
        type="text"
        value={formData.firstName}
      />
      <label>Last Name</label>
      <input
        readOnly
        placeholder="none"
        type="text"
        value={formData.lastName}
      />
      <label>Phone Number</label>
      <input readOnly placeholder="none" type="text" value={formData.phone} />
      <label>Nationality</label>
      <input
        readOnly
        placeholder="none"
        type="text"
        value={formData.nationality}
      />
      <label>Github</label>
      <input readOnly placeholder="none" type="text" value={formData.github} />
      <label>LinkedIn</label>
      <input
        readOnly
        placeholder="none"
        type="text"
        value={formData.linkedin}
      />
      <label>Twitter</label>
      <input readOnly placeholder="none" type="text" value={formData.twitter} />
    </div>
  );
};
