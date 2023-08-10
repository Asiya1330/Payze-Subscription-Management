import FormComponent from "@/components/general/form/form";
import DriverImage from "../assets/images/driver-bg1.jpg";

export default function Home() {
  return (
   <div className="pb-8"
   style={{
    backgroundImage: `url(https://media.istockphoto.com/id/1391517615/photo/close-up-on-a-couple-using-the-gps-while-driving-a-car.webp?b=1&s=170667a&w=0&k=20&c=FSxrQyMNmIsxX4mQdKuXMvZupd2QJ-egSS8haSuBnHE=)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  }}
   > 
    <FormComponent />
   </div>
  )
}
