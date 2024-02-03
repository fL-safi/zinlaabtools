import Bookmarks from "./Mains/Bookmarks";
import ConvertFromPDFWithOutSlider from "./Mains/ConvertFromPDFWithOutSlider";
import ConvertFromPDFWithSlider from "./Mains/ConvertFromPDFWithSlider";
import ConvertToPDF from "./Mains/ConvertToPDF";

export default function MainContent() {
    return (
      <div className="main-content-conatiner" >
        <Bookmarks />
        <ConvertFromPDFWithSlider />
        <ConvertFromPDFWithOutSlider />
        <ConvertToPDF />
      </div>
    );
  }
  