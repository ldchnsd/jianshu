import { actionTypes } from "./index";
import axios from "axios";

const detailData = (title, content) => ({
  type: actionTypes.ADD_DETAIL,
  title,
  content,
});

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get("/api/detail.json/" + id).then((res) => {
      const result = res.data.data;
      dispatch(detailData(result.title, result.content));
    });
  };
};
