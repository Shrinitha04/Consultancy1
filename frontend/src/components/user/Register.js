import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, clearAuthError } from "../../actions/userActions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { axios } from "axios";

export default function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phoneno: "",
    address: "",
    password: "",
  });
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    "/images/default_avatar.png"
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.authState
  );

  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(e.target.files[0]);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("phoneno", userData.phoneno);
    formData.append("address", userData.address);
    formData.append("password", userData.password);
    formData.append("avatar", avatar);
    dispatch(register(formData));
  };






  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
      return;
    }
    if (error) {
      toast(error, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: "error",
        onOpen: () => {
          dispatch(clearAuthError);
        },
      });
      return;
    }
  }, [error, isAuthenticated, dispatch, navigate]);

  return (
    <div className="row wrapper">
      <div className="col-10 col-lg-5">
        <form
          onSubmit={submitHandler}
          className="shadow-lg"
          encType="multipart/form-data"
        >
          <h1 className="mb-3">Register</h1>

          <div className="form-group">
            <label htmlFor="email_field">Name</label>
            <input
              name="name"
              onChange={onChange}
              type="name"
              id="name_field"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email_field">Email</label>
            <input
              type="email"
              id="email_field"
              name="email"
              onChange={onChange}
              className="form-control"
            />

            <button >SendOTP</button>
          </div>
          <div className="form-group">
            <label htmlFor="phone_field">phoneNo</label>
            <input
              name="phoneno"
              onChange={onChange}
              type="tel"
              id="tel_field"
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="address_field">Address</label>
            <textarea
              name="address"
              onChange={onChange}
              id="address_field"
              className="form-control"
              rows="4" // You can adjust the number of rows as needed
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="password_field">Password</label>
            <input
              name="password"
              onChange={onChange}
              type="password"
              id="password_field"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="avatar_upload">Avatar</label>
            <div className="d-flex align-items-center">
              <div>
                <figure className="avatar mr-3 item-rtl">
                  <img
                    src={avatarPreview}
                    className="rounded-circle"
                    alt="Avatar"
                  />
                </figure>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  name="avatar"
                  onChange={onChange}
                  className="custom-file-input"
                  id="customFile"
                />
                <label className="custom-file-label" htmlFor="customFile">
                  Choose Avatar
                </label>
              </div>
            </div>
          </div>

          <button
            id="register_button"
            type="submit"
            className="btn btn-block py-3"
            disabled={loading}
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
}





// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { register, clearAuthError } from "../../actions/userActions";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";


// import axios from 'axios';


// export default function Register() {
//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     phoneno: "",
//     address: "",
//     password: "",
//   });
//   const [avatar, setAvatar] = useState("");
//   const [avatarPreview, setAvatarPreview] = useState(
//     "/images/default_avatar.png"
//   );
//   const [otp, setOtp] = useState("");
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [isVerified, setIsVerified] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, error, isAuthenticated } = useSelector(
//     (state) => state.authState
//   );

//   const onChange = (e) => {
//     if (e.target.name === "avatar") {
//       const reader = new FileReader();
//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setAvatarPreview(reader.result);
//           setAvatar(e.target.files[0]);
//         }
//       };

//       reader.readAsDataURL(e.target.files[0]);
//     } else {
//       setUserData({ ...userData, [e.target.name]: e.target.value });
//     }
//   };



//   const sendOtp = async () => {
//     try {
//       // Make an HTTP POST request to your backend API endpoint
//       const response = await axios.post('/api/send-otp', {
//         email: userData.email, // Assuming you have the user's email in userData state
//       });
  
//       // Check if the OTP was sent successfully
//       if (response.status === 200) {
//         // OTP sent successfully
//         setIsOtpSent(true);
//         toast.success('OTP sent successfully!');
//       } else {
//         // Handle error if OTP sending failed
//         toast.error('Failed to send OTP. Please try again later.');
//       }
//     } catch (error) {
//       // Handle any network errors or server errors
//       console.error('Error sending OTP:', error);
//       toast.error('Failed to send OTP. Please try again later.');
//     }
//   };
  

//   const verifyOtp = async () => {
//     try {
//       const response = await axios.post('/api/verify-otp', {
//         email: userData.email,
//         otp: otp,
//       });

//       if (response.status === 200) {
//         setIsVerified(true);
//         toast.success('OTP verified successfully!');
//       } else {
//         toast.error('Invalid OTP. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error verifying OTP:', error);
//       toast.error('Failed to verify OTP. Please try again later.');
//     }
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", userData.name);
//     formData.append("email", userData.email);
//     formData.append("phoneno", userData.phoneno);
//     formData.append("address", userData.address);
//     formData.append("password", userData.password);
//     formData.append("avatar", avatar);
//     dispatch(register(formData));
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate("/");
//       return;
//     }
//     if (error) {
//       toast(error, {
//         position: toast.POSITION.BOTTOM_CENTER,
//         type: "error",
//         onOpen: () => {
//           dispatch(clearAuthError);
//         },
//       });
//       return;
//     }
//   }, [error, isAuthenticated, dispatch, navigate]);

//   return (
//     <div className="row wrapper">
//       <div className="col-10 col-lg-5">
//         <form
//           onSubmit={submitHandler}
//           className="shadow-lg"
//           encType="multipart/form-data"
//         >
//           <h1 className="mb-3">Register</h1>

//           <div className="form-group">
//             <label htmlFor="email_field">Name</label>
//             <input
//               name="name"
//               onChange={onChange}
//               type="name"
//               id="name_field"
//               className="form-control"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email_field">Email</label>
//             <input
//               type="email"
//               id="email_field"
//               name="email"
//               onChange={onChange}
//               className="form-control"
//             />
//           </div>
//           {!isOtpSent ? (
//             <button
//               className="btn btn-primary"
//               type="button"
//               onClick={sendOtp}
//             >
//               Send OTP
//             </button>
//           ) : (
//             <div className="form-group">
//               <label htmlFor="otp_field">Enter OTP</label>
//               <input
//                 type="text"
//                 id="otp_field"
//                 name="otp"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 className="form-control"
//               />
//               <button
//                 className="btn btn-primary mt-2"
//                 type="button"
//                 onClick={verifyOtp}
//               >
//                 Verify OTP
//               </button>
//             </div>
//           )}
//           {isVerified && (
//             <div>
//               {/* Display other form fields after OTP verification */}
//               <div className="form-group">
//                 <label htmlFor="phone_field">phoneNo</label>
//                 <input
//                   name="phoneno"
//                   onChange={onChange}
//                   type="tel"
//                   id="tel_field"
//                   className="form-control"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="address_field">Address</label>
//                 <textarea
//                   name="address"
//                   onChange={onChange}
//                   id="address_field"
//                   className="form-control"
//                   rows="4"
//                 ></textarea>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password_field">Password</label>
//                 <input
//                   name="password"
//                   onChange={onChange}
//                   type="password"
//                   id="password_field"
//                   className="form-control"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="avatar_upload">Avatar</label>
//                 <div className="d-flex align-items-center">
//                   <div>
//                     <figure className="avatar mr-3 item-rtl">
//                       <img
//                         src={avatarPreview}
//                         className="rounded-circle"
//                         alt="Avatar"
//                       />
//                     </figure>
//                   </div>
//                   <div className="custom-file">
//                     <input
//                       type="file"
//                       name="avatar"
//                       onChange={onChange}
//                       className="custom-file-input"
//                       id="customFile"
//                     />
//                     <label className="custom-file-label" htmlFor="customFile">
//                       Choose Avatar
//                     </label>
//                   </div>
//                 </div>
//               </div>

//               <button
//                 id="register_button"
//                 type="submit"
//                 className="btn btn-block py-3"
//                 disabled={loading}
//               >
//                 REGISTER
//               </button>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }


