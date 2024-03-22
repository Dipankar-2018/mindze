
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Philosophers from './philosophers/Philosophers';
import { useMediaQuery } from '@material-ui/core';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
          flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        "& .MuiTab-root": {
            padding: 0,
            [theme.breakpoints.down(600)]: {
               width:'163px',
            }
        }

    },
}));

const PhilosophicalPerspective = () => {

    const theme = useTheme();
    const mobileDevice = useMediaQuery(theme.breakpoints.down('md'));


    const philosophicalTabData = [
        "Modern Spirituality Thinkers",
        "Stoicism",
        "Hindunism",
        "Buddhism",
        "Taoism",
        "Existentialism",
        "Sufism",
        "Christian Mysticism",
    ]


    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar
                position="static"

            >
                <Tabs value={value} onChange={handleChange}
                    centered
                    // fullWidth={true}
                    // centered={mobileDevice ? true : false}
                    // scrollButtons="auto"
                    // scrollButtons="on"
                    aria-label="scrollable auto tabs example"
                    // variant="fullWidth" 
                    variant={mobileDevice ? "scrollable" : ""}
                // scrollButtons="auto"
                >
                    {/* <Tab label="Short Exercises/Affirmations" {...a11yProps(0)} />
                    <Tab label="Quotations" {...a11yProps(1)} />
                    <Tab label="Quick Meditation Techniques" {...a11yProps(2)} />
                    <Tab label="Music" {...a11yProps(3)} /> */}
                    {
                        philosophicalTabData.map((e, i) => (
                            <Tab label={e} {...a11yProps(i)} key={i} />
                        ))
                    }
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Philosophers />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Philosophers />

            </TabPanel>
            <TabPanel value={value} index={2}>
                <Philosophers />
            </TabPanel>
        </div>
    );

}

export default PhilosophicalPerspective;
