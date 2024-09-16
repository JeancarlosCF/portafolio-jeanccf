import Header from './components/header/header'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Submission from './sections/submission/submission';
import SkillSet from './sections/skillset/skillset';
import Experience from './sections/experiences/experiences';
import Aboutme from './sections/aboutme/aboutme';
import { CheckDarkmode } from './lib/darkmode';
import Proyects from './sections/myproyects/proyects';
import ContactMe from './sections/contactme/contactme';
import Footer from './components/footer/footer';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#fff',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',

    },
    secondary: {
      main: '#000',
    },
    
  },
});


function App() {
  CheckDarkmode();

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <div className="flex flex-col ease-in-out duration-200 dark:bg-gray-950 dark:text-white">
        <Header />
        <Submission />
        <SkillSet />
        <Experience />
        <Aboutme />
        <Proyects />
        <ContactMe />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
