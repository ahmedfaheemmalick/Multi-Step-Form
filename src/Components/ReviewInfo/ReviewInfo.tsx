import { FC } from "react";
import { Button, Typography } from "@material-ui/core";
import Props from "../../Interfaces/Review.interface";
import styles from "./ReviewInfo.module.css";

const ReviewInfo: FC<Props> = ({ handleReset, handleBack, formValues }) => {
  return (
    <div className={styles.container}>
      <div className={styles.review_section}>
        <div>
          <Typography>First Name: </Typography>
          <Typography>{formValues[0].firstName}</Typography>
        </div>
        <div>
          <Typography>Last Name: </Typography>
          <Typography>{formValues[0].lastName}</Typography>
        </div>
        <div>
          <Typography>Email: </Typography>
          <Typography>{formValues[0].email}</Typography>
        </div>
        <div>
          <Typography>Username: </Typography>
          <Typography>{formValues[0].userName}</Typography>
        </div>
        <div>
          <Typography>Password: </Typography>
          <Typography>{formValues[0].password}</Typography>
        </div>
        <div>
          <Typography>Confirm Password: </Typography>
          <Typography>{formValues[0].confirmPassword}</Typography>
        </div>
      </div>
      <div className={styles.btn_div}>
        <Button className={styles.btn} type="submit" onClick={handleBack}>
          BACK
        </Button>
        <span></span>
        <Button className={styles.btn} type="submit" onClick={handleReset}>
          RESET
        </Button>
      </div>
    </div>
  );
};

export default ReviewInfo;
