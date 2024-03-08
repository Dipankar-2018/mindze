import React from 'react'
import { AppBar, Avatar, Box, Tab, Tabs, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        //   flexGrow: 1,
        padding:13,
        "& .logo-img": {
            width: "130px",
        },
        "& .headerTop": {
            display: "flex",
            height: '10vh',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: "10px 0",
            "& .typo-text": {
                fontFamily: "Montserrat",
                marginTop:13
            },
        },

        "& .profile": {
            position: 'absolute',
            right: "3.5vw",
            top: "5.5vh",
            cursor: "pointer",
            // padding:'6px',
            // borderRadius:"50%",
            // backgroundColor: "#3f51b5",
            "& .p-icon": {
                "& svg": {
                    fontSize: '26px',
                    // backgroundColor: "#3f51b5",
                }
            }
        }
    },

    avatar: {
        margin: theme.spacing(0),
        // backgroundColor: theme.palette.primary.main
        backgroundColor: "#000",
    },
}));

const Navbar = () => {
    const classes = useStyles();


    return (
        <Box className={classes.root}>
            <Box
                className='headerTop'
            >
                <img src="/src/assets/logo.png" alt="logo" className="logo-img" />
                <Typography className='typo-text'>Blending Ancient Wisdom with Modern Mindcare</Typography>

                <div className="profile">
                    <div className="p-icon" title='Profile'>
                        <Avatar className={classes.avatar}>
                            <Link to="login">
                                <PermIdentityIcon />
                            </Link>
                        </Avatar>
                    </div>
                </div>

            </Box>

        </Box>
    )
}

export default Navbar
