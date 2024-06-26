import { Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { mentalTestData } from "../../data/mentalTest";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '30px',
        "& p":{
          textAlign:'center',
          marginBottom:'20px',
        },
        "& .mentaltest-container": {
            display: "flex",
            flexWrap: "wrap",
            width: '100%',
            gap: '10px',
            "& .test-box": {
                padding: "20px",
                // display:"block",
                // minWidth: 476,
                minWidth: "31vw",
                height: "33vh",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderRadius: '6px',
                // border: '3px solid #000',
                display: "flex",
                justifyContent: 'center',
                alignItems: 'end',
                [theme.breakpoints.down(760)]: {
                    minWidth: "43vw",
                },
                [theme.breakpoints.down(500)]: {
                    width: "100%",
                },
                "& .test-title": {
                    color: "#fff",
                    "& h3": {
                        fontSize: "1.3rem",
                        "&:hover": {
                            borderBottom: `3px solid ${theme.palette.primary.main}`,
                            cursor: 'pointer',
                            
                        }
                    }
                }
            },
        },
    },
}));


export const MentalTest = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography>Mental Health Test</Typography>
            <div className="mentaltest-container">
                {
                    mentalTestData.map((e, i) => (
                        <div className="test-box" key={i} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${e.img})` }}>
                            <div className="test-title" >
                                <Link to={`/mentaltest/:369`} state={e} ><h3>{e.title}</h3></Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
