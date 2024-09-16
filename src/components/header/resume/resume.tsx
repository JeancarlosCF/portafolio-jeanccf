import { Button } from "@mui/material";
import { MdOutlineFileDownload } from "react-icons/md";

const ResumeBtn = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      endIcon={<MdOutlineFileDownload />}
      sx={{ textTransform: "capitalize" }}
    >
      descargar CV
    </Button>
  );
};

export default ResumeBtn;
