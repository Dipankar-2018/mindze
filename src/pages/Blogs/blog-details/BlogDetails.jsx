import { makeStyles } from '@material-ui/core';
import BackCurrent from '../../../components/back-current/BackCurrent';
import { useLocation } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        padding: '30px 10px',
        "& .blog-container": {
            position: 'relative',
            padding: '3rem 10px',
            "& .blog-title": {
                fontSize: "24px",
                textAlign: "center",
                marginTop: 24,
                marginBottom: 30,
                paddingBottom: 20,
                color: "#333",
                fontWeight: 500,
            },
            "& .blog-content": {
                // padding: " 1rem 0",
                // fontSize: " 3.5rem",
                margin: '20px 10px',
                padding: '10px 3.5rem',
                [theme.breakpoints.down("sm")]: {
                    padding: '10px 0',
                },
                "& .b-sub-title": {
                    fontSize: 20,
                    color: "#555",
                    fontWeight:400,
                    lineHeight: 1.6,
                },
                "& p": {
                    marginTop: '1rem',
                    marginBottom: '1.63rem',
                    fontSize: 16,
                    color: "#555",
                    lineHeight: 1.6,

                }
            },
        },
    }

}));

const BlogDetails = () => {

    const classes = useStyles()
    const location = useLocation();
    const data = location.state;
    // console.log(data, "data", "ajksdgjhasfghgasdf");

    return (
        <div className={classes.root}>
            <BackCurrent link="/blogs" name="Blogs" />

            <div className="blog-container">
                <h1 className="blog-title">{data.subTile}</h1>
                <div className="blog-content">
                    {
                        data.data.map((item, index) => (
                            <div key={index}>
                                <h2 className="b-sub-title">{item.h2}</h2>
                                <p className="desc">{item.p}</p>
                                {
                                    item.desc && <p className="desc">{item.desc}</p>
                                }
                            </div>
                        ))
                    }
                    {
                        data.desc && <p>{data.desc}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogDetails
