import './Main.css';
import Main_info from './main_components/Main_info';
import Main_startscreen from './main_components/Main_startscreen';
import Main_photoblock from './main_components/Main_photoblock';
import Main_info2 from './main_components/Main_info2';
import Main_slider from './main_components/Main_slider';
import Main_tours_info from './main_components/Main_tours_info';
import Main_slider2 from './main_components/Main_slider2';
import Main_homes_info from './main_components/Main_homes_info';
import Main_photoblock2 from './main_components/Main_photoblock2';
import Main_sauna_inf from './main_components/Main_sauna_inf';
import Main_slider3 from './main_components/Main_slider3';
import Main_map from './main_components/Main_map';
import Footer from './Footer';

function Main() {
  return (
    <div className="Main">
      <Main_startscreen/>
      <Main_info/>
      <Main_photoblock/>
      <Main_info2/>
      <Main_slider/>
      <Main_tours_info/>
      <Main_slider2/>
      <Main_homes_info/>
      <Main_photoblock2/>
      <Main_sauna_inf/>
      <Main_slider3/>
      <Main_map/>
      <Footer/>
    </div>
  );
}

export default Main;