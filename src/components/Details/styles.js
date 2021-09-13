import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    income:{
        borderBottom: "10px solid rgba(0, 255, 0, 0.5)",
        backgroundColor: "rgba(255, 255, 255, .15);",
        backdropFilter: "blur(5px)",
        borderRadius: "20px"
    },
    expense: {
        borderBottom: "10px solid rgba(255, 0 ,0, 0.5)",
        backgroundColor: "rgba(255, 255, 255, .15);",
        backdropFilter: "blur(5px)",
        borderRadius: "20px"
    }
}))