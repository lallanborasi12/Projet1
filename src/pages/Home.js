import Header from '../component/Header'
import Footer from '../component/Footer';
import TopFooter from '../component/TopFooter';
import GetSupport from '../component/GetSupport';
import GetStart from '../component/GetStart';
import Faq from '../component/Faq';
import MadeSimple from '../component/MadeSimple';
import WeightLoss from '../component/WeightLoss'
import Slider from '../component/Slider';
const Home = ({sectionRefs}) => {
  return (
    <>
      <Slider/>
      <MadeSimple/>
      <WeightLoss/>
      <GetStart />
      <Faq />
      <GetSupport />
    </>
  )
}

export default Home
