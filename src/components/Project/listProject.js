import imgTikTok from '../../assets/img/projects/clone_tiktok.png';
import imgMimiPlayer from '../../assets/img/projects/mini_player.png';
import imgCoupleTx from '../../assets/img/projects/couple_tx.png';
import imgCovidTracker from '../../assets/img/projects/covid_tracker.png';
import imgMyCv from '../../assets/img/projects/my_cv.png';
import imgWeatherForecast from '../../assets/img/projects/weather_forecast.png';
import {
    AxiosIcon,
    CssIcon,
    HighChartsIcon,
    HtmlIcon,
    JqueryIcon,
    JSIcon,
    MaterialIcon,
    ReactIcon,
    ReactRouterDomIcon,
    ScssIcon,
    TailwindIcon,
} from '../icon';
const listProjects = [
    {
        index: 'first',
        img: {
            title: 'Couple TX',
            link: 'https://tinh2044.github.io/Couple_TX/',
            image: imgCoupleTx,
        },
        desc: {
            name: 'Couple TX',
            introduce: 'I was clone it on internet',
            time: 'I make it after Html and Css course at F8 since Aug 10th',
            description: 'It just a UI web',
            benefit: 'Clone couple TX help me learn UI basic, Responsive , Scss, Jquery basic',
            technology: [
                {
                    icon: <HtmlIcon />,
                    tooltip: 'Html ',
                    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
                },
                {
                    icon: <CssIcon />,
                    tooltip: 'Css',
                    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
                },
                {
                    icon: <JqueryIcon />,
                    tooltip: 'Jquery',
                    link: 'https://jquery.com/',
                },
            ],
        },
    },
    {
        index: 'second',
        img: {
            title: 'Music Player',
            link: 'https://tinh2044.github.io/mini_music_player/',
            image: imgMimiPlayer,
        },
        desc: {
            name: 'Music Player',
            introduce: 'This project is as if a music player (zing mp3, spotify, etc)',
            time: 'I have made it after Javascript course at F8 since Aug 24th',
            description: 'You can listen to music, like music, listen to the album',
            benefit: 'Mini Music Player helped me learn dom events in javascript',
            technology: [
                {
                    icon: <HtmlIcon />,
                    tooltip: 'Html',
                    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
                },
                {
                    icon: <CssIcon />,
                    tooltip: 'Css',
                    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
                },
                {
                    icon: <JSIcon />,
                    tooltip: 'Javascript',
                    link: 'https://javascript.info/document',
                },
            ],
        },
    },
    {
        index: 'third',
        img: {
            title: 'MY CV',
            link: 'https://whimsical-croquembouche-be7a2f.netlify.app/',
            image: imgMyCv,
        },
        desc: {
            name: 'My CV',
            introduce: 'This is my information',
            time: 'I has made it since from Sep 6th ',
            description: 'You can see my information at this project (name, address, my school, etc)',
            benefit: 'My Cv can help me show my information for everyone',
            technology: [
                {
                    icon: <HtmlIcon />,
                    tooltip: 'Html ',
                    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
                },
                {
                    icon: <CssIcon />,
                    tooltip: 'Css',
                    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
                },
                {
                    icon: <JqueryIcon />,
                    tooltip: 'Jquery',
                    link: 'https://jquery.com/',
                },
            ],
        },
    },
    {
        index: 'four',
        img: {
            title: 'TikTok',
            link: 'https://sparkly-fudge-86d972.netlify.app/',
            image: imgTikTok,
        },
        desc: {
            name: 'TikTok',
            introduce: 'This the first project about ReactJs of mine',
            time: 'I make it after ReactJS course at F8',
            description: 'You can watch short video and more feature on that',
            benefit: 'Clone TikTok help me learn ReactJS, React-Router-Dom, Axios, Tippy,...',
            technology: [
                {
                    icon: <ReactIcon />,
                    tooltip: 'React Js',
                    link: 'https://reactjs.org/',
                },
                {
                    icon: <ScssIcon />,
                    tooltip: 'Scss',
                    link: 'https://sass-lang.com/guide',
                },
                {
                    icon: <ReactRouterDomIcon />,
                    tooltip: 'React Router Dom',
                    link: 'https://reactjs.org/',
                },
                {
                    icon: <ReactIcon />,
                    tooltip: 'React Js',
                    link: 'https://v5.reactrouter.com/web/guides/quick-start',
                },
                {
                    icon: <AxiosIcon />,
                    tooltip: 'Axios',
                    link: 'https://axios-http.com/vi/docs/intro',
                },
            ],
        },
    },
    {
        index: 'five',
        img: {
            title: 'COVID-19 TRACKER',
            link: 'https://whimsical-croquembouche-be7a2f.netlify.app/',
            image: imgCovidTracker,
        },
        desc: {
            name: 'Covid-19 Tracker',
            introduce: 'Project is as a charts covid-19',
            time: 'I has made it since Oct 3th',
            description: 'You can see the covid-19 situation of each country in the world (confirmed, recovery, died)',
            benefit: 'Clone TikTok help me learn ReactJS, HighCharts,Material-UI',
            technology: [
                {
                    icon: <ReactIcon />,
                    tooltip: 'React Js',
                    link: 'https://reactjs.org/',
                },
                {
                    icon: <MaterialIcon />,
                    tooltip: 'Material-UI',
                    link: 'https://mui.com/material-ui/',
                },
                {
                    icon: <HighChartsIcon />,
                    tooltip: 'HighCharts',
                    link: 'https://www.highcharts.com/',
                },
                {
                    icon: <AxiosIcon />,
                    tooltip: 'Axios',
                    link: 'https://axios-http.com/vi/docs/intro',
                },
            ],
        },
    },
    {
        index: 'six',
        img: {
            title: 'WEATHER FORECAST',
            link: 'https://whimsical-croquembouche-be7a2f.netlify.app/',
            image: imgWeatherForecast,
        },
        desc: {
            name: 'Weather Forecast',
            introduce: 'Project is as a weather app',
            time: 'I has made it since Oct 6th',
            description:
                'You can see weather of city or country  in the world (temperature, humidity, wind speed, etc)',
            benefit: 'Make It help me learn more ReactJS, Tailwind ,Material-UI',
            technology: [
                {
                    icon: <ReactIcon />,
                    tooltip: 'React Js',
                    link: 'https://reactjs.org/',
                },
                {
                    icon: <TailwindIcon />,
                    tooltip: 'Tailwind',
                    link: 'https://tailwindcss.com/',
                },
                {
                    icon: <HighChartsIcon />,
                    tooltip: 'HighCharts',
                    link: 'https://www.highcharts.com/',
                },
                // {
                //     icon: <AxiosIcon />,
                //     tooltip: 'Axios',
                //     link: 'https://axios-http.com/vi/docs/intro',
                // },
            ],
        },
    },
];
export default listProjects;
