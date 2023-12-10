import { rest } from "msw";

const baseURL = "https://home-shots-backend-ed9334030b78.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        "pk": 25,
        "username": "wewe",
        "email": "",
        "first_name": "",
        "last_name": "",
        "profile_id": 15,
        "profile_image": "https://res.cloudinary.com/dvhr2waye/image/upload/v1/media/../default_user_profile_npgdiu",
      })
    );
  }),
  rest.get(`${baseURL}posts/`, (res) => {
    return res();
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];