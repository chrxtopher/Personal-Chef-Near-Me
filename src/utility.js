import axios from "axios";
const RENDER_URL = process.env.REACT_APP_RENDER_URL;

export const sendBookingEmail = async ({ requestInformation }) => {
  await axios
    .post(RENDER_URL, requestInformation)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};
