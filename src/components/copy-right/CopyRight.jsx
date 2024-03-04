import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    );
  }
