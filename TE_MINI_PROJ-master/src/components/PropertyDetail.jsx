// import React from "react";
// import { useParams } from "react-router-dom";
// import house1 from "../pictures/house-1.jpg";
// import house2 from "../pictures/house-2.jpg";
// import house3 from "../pictures/house-3.jpg";

// const properties = [
//   {
//     id: 1,
//     image: house1,
//     title: "Luxury Apartment",
//     location: "New York, USA",
//     price: "$1,200,000",
//     description: "Experience luxury living in the heart of New York with this stylish apartment.",
//   },
//   {
//     id: 2,
//     image: house2,
//     title: "Modern Villa",
//     location: "Los Angeles, USA",
//     price: "$2,500,000",
//     description: "Enjoy sunny LA in this spacious, modern villa with private pool and garden.",
//   },
//   {
//     id: 3,
//     image: house3,
//     title: "Cozy Office",
//     location: "Chicago, USA",
//     price: "$800,000",
//     description: "Ideal workspace in downtown Chicago, close to transport and cafes.",
//   },
// ];

// const PropertyDetails = () => {
//   const { id } = useParams();
//   const property = properties.find((p) => p.id === parseInt(id));

//   if (!property) {
//     return <div className="text-center mt-5">Property not found</div>;
//   }

//   return (
//     <div className="container my-5">
//       <div className="card shadow border-0 rounded-4">
//         <img
//           src={property.image}
//           alt={property.title}
//           className="card-img-top"
//           style={{ height: "400px", objectFit: "cover" }}
//         />
//         <div className="card-body">
//           <h2 className="card-title fw-bold">{property.title}</h2>
//           <p className="text-muted mb-1">📍 {property.location}</p>
//           <p className="text-success fw-bold fs-4">💰 {property.price}</p>
//           <p className="mt-3">{property.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyDetails;
