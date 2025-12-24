import Card from "./Card";


const Boxes = () => {

 const heroes = [
  {
    id: 1,
    fullName: "Iron Man",
    designation: "Genius Inventor",
    badge: "Avenger",
    extraBadgeCount: 5,
    rating: 4.9,
    earned: "$10B+",
    ratePerHour: "$500/hr",
    profileImage: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg",
    isSaved: true,
    ctaText: "Hire Hero"
  },
  {
    id: 2,
    fullName: "Captain America",
    designation: "Super Soldier",
    badge: "Leader",
    extraBadgeCount: 4,
    rating: 4.8,
    earned: "$8B+",
    ratePerHour: "$400/hr",
    profileImage: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_crd_03.jpg",
    isSaved: false,
    ctaText: "Hire Hero"
  },
  {
    id: 3,
    fullName: "Thor",
    designation: "God of Thunder",
    badge: "Asgardian",
    extraBadgeCount: 6,
    rating: 4.9,
    earned: "$9B+",
    ratePerHour: "$600/hr",
    profileImage: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_crd_03.jpg",
    isSaved: true,
    ctaText: "Hire Hero"
  }
];


  return (
    <div className="flex gap-20 flex-wrap p-10 bg-black w-full items-center justify-center">
      {heroes.map((elem) => (
        <Card key={elem.id} props={elem} />
      ))}
    </div>
  );
};

export default Boxes;
