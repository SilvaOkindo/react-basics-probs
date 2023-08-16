import { Card } from "./Card"
import image1 from '../assets/gallery-5.png'
import image2 from '../assets/service-6.png'
import image3 from '../assets/gallery-1.png'
const Cards = () => {
  return (
    <div className="flex justify-between gap-5">
        <Card image={image1} name="Silva Okindo" occupation="Software Engineer" bio="Fullstack engineer experienced in django, react, and flutter."/>
        <Card image={image2} name="Mary Misiga" occupation="Data Analyst" bio="Fullstack engineer experienced in django, react, and flutter."/>
        <Card image={image1} name="Damah Okindo" occupation="Software Engineer" bio="Fullstack engineer experienced in django, react, and flutter."/>
        <Card image={image3} name="Judy Moraa" occupation="Software Engineer" bio="Fullstack engineer experienced in django, react, and flutter."/>
    </div>
  )
}

export default Cards