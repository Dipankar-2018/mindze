import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import QuickExercises from "../pages/quickExc/QuickExercises";
import { MentalTest } from "../pages/mental-test/MentalTest";
import YogaMeditations from "../pages/yoga-meditations/YogaMeditations";
import Books from "../pages/bookSummery/Books";
import PhilosophicalPerspective from "../pages/philosophical-pers/PhilosophicalPerspective";
import BlogsMain from "../pages/Blogs/BlogsMain";
import SpiritualCounslr from "../pages/counselors/spiritual/SpiritualCounslr";
import PsychologicalCounslr from "../pages/counselors/psychological/PsychologicalCounslr";
import Login from "../pages/auth/login-out/Login";
import Techniques from "../pages/quickExc/quick-meditation/Techniques";
import Test from "../pages/mental-test/Test";
import BlogDetails from "../pages/Blogs/blog-details/BlogDetails";
import BookDetails from "../pages/bookSummery/BookDetails";
import PhilosopherDetails from "../pages/philosophical-pers/philosopher-details/PhilosopherDetails";
import CounselorDetails from "../pages/counselors/counselor-details/CounselorDetails";
import LoginUser from "../pages/auth/login-user/LoginUser";
import Layout from "../layout/Layout";
// import YogaMediDetails from "../pages/yoga-meditations/yoga-details-page/YogaMediDetails";
import Meditation from "../pages/yoga-meditations/inerr-pages/Meditation";
import ContactUs from "../pages/auth/contact-us/ContactUs";
import JoinCounselor from "../pages/auth/join-counselor/JoinCounselor";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement:"Error 404 not found the page",
        children: [
          {
            path: "/",
            element: <Home/>,
          },
          {
            path: "/quickExercises",
            element: <QuickExercises/>,
          },
          {
            path: "/mentalTest",
            element: <MentalTest/>,
          },
          {
            path: "/yogaMeditations",
            element: <YogaMeditations/>,
          },

          {
            path: "/yogaMeditations/:id",
            element: <Meditation/>,
          },
         
          
          {
            path: "/books",
            element: <Books/>,
          },
          
          {
            path: "/philosophers",
            element: <PhilosophicalPerspective/>,
          },
          {
            path: "/blogs",
            element: <BlogsMain/>,
          },
          {
            path: "/spiritualCounselors",
            element: <SpiritualCounslr/>,
          },
          {
            path: "/philosophicalCounselors",
            element: <PsychologicalCounslr/>,
          },
          {
            path: "/login",
            element: <Login/>,
          },
          {
            path: "/techniques/:id",
            element: <Techniques/>,
          },
          {
            path:"/mentaltest/:id",
             element:<Test />
          },
          {
            path: "/blog/:id",
            element: <BlogDetails/>,
          },
          {
            path: "/philosophers/:id",
            element: <PhilosopherDetails/>,
          },
          {
            path: "/booksummery/:id",
            element: <BookDetails/>,
          },
          
          {
            path: "/counselor/:id",
            element: <CounselorDetails/>,
          },
          
          {
            path: "/login-user",
            element: <LoginUser/>,
          },
          {
            path: "/contact-us",
            element: <ContactUs/>,
          },
          {
            path: "/join-counselor",
            element: <JoinCounselor/>,
          },
        
          
        ],
      },
])
