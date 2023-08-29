const dummyData = [
  {
    keyid: 1,
    sellerName: "John Doe",
    companyName: "ABC Electronics",
    companyLocation: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
    ProductName: "Wireless Earbuds pro 4",
    productImage: "path/to/product1.jpg",
    contactNumber: "+1234567890",
    email: "john@example.com",
    CompanyEmail: "ABCelectroniocs@gmail.com",
    productPrice: 499.99,
    productQuantity: 10,
    ProductDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    keyid: 2,
    sellerName: "Jane Smith",
    companyName: "XYZ Gadgets",
    companyLocation: {
      latitude: 34.0522,
      longitude: -118.2437,
    },
    ProductName: "charging cable Type C",
    productImage: "path/to/product2.jpg",
    contactNumber: "+9876543210",
    email: "smith@example.com",
    CompanyEmail: "XYZgadgets@gmail.com",
    productPrice: 299.49,
    productQuantity: 25,
    ProductDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    keyid: 3,
    sellerName: "Victor herman",
    companyName: "WOW store",
    companyLocation: {
      latitude: 35.0562,
      longitude: -118,
    },
    ProductName: "keyboard",
    productImage: "path/to/product2.jpg",
    contactNumber: "+9876543210",
    email: "herman@example.com",
    CompanyEmail: "wow@gmail.com",
    productPrice: 2599.49,
    productQuantity: 25,
    ProductDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    keyid: 4,
    sellerName: " Smith walker",
    companyName: "",
    companyLocation: {
      latitude: 34.0522,
      longitude: -118.2437,
    },
    ProductName: "charging cable Type C",
    productImage: "path/to/product2.jpg",
    contactNumber: "+9876543210",
    email: "jane@example.com",
    CompanyEmail: "XYZgadgets@gmail.com",
    productPrice: 299.49,
    productQuantity: 25,
    ProductDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    keyid: 5,
    sellerName: "Michael Johnson",
    companyName: "Tech Haven",
    companyLocation: {
      latitude: 40.7128,
      longitude: -74.006,
    },
    ProductName: "Headphones",
    productImage: "path/to/product3.jpg",
    contactNumber: "+1122334455",
    email: "michael@example.com",
    productPrice: 149.99,
    productQuantity: 5,
    ProductDescription: "Vivamus vestibulum, elit in aliquet lobortis.",
  },
  {
    keyid: 6,
    sellerName: "Emily Brown",
    companyName: "Gizmo World",
    companyLocation: {
      latitude: 51.5074,
      longitude: -0.1278,
    },
    ProductName: "Adapter",
    productImage: "path/to/product4.jpg",
    contactNumber: "+5544332211",
    email: "emily@example.com",
    productPrice: 199.95,
    productQuantity: 8,
    ProductDescription: "Phasellus eu magna eu lectus cursus fermentum.",
  },
  {
    keyid: 7,
    sellerName: "Amanda White",
    companyName: "TechGlobe Innovations",
    companyLocation: {
      latitude: 34.0522,
      longitude: -118.2437,
    },
    ProductName: "Mouse",
    productImage: "path/to/product5.jpg",
    contactNumber: "+9988776655",
    email: "amanda@example.com",
    productPrice: 279.99,
    productQuantity: 15,
    ProductDescription: "Nunc vehicula, dui in commodo rhoncus.",
  },
  {
    keyid: 8,
    sellerName: "David Lee",
    companyName: "Digital Emporium",
    companyLocation: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
    ProductName: "Mousepad",
    productImage: "path/to/product6.jpg",
    contactNumber: "+1122998877",
    email: "david@example.com",
    productPrice: 599.5,
    productQuantity: 3,
    ProductDescription: "Aliquam erat volutpat. Pellentesque habitant morbi.",
  },
  {
    keyid: 9,
    sellerName: "Sarah Miller",
    companyName: "Innovative Electronics",
    companyLocation: {
      latitude: 51.5074,
      longitude: -0.1278,
    },
    ProductName: "wireless Keyboard",
    productImage: "path/to/product7.jpg",
    contactNumber: "+7766554433",
    email: "sarah@example.com",
    productPrice: 11149.0,
    productQuantity: 20,
    ProductDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    keyid: 10,
    sellerName: "Daniel Johnson",
    companyName: "Future Tech Solutions",
    companyLocation: {
      latitude: 34.0522,
      longitude: -118.2437,
    },
    ProductName: "Laptop Computer",
    productImage: "path/to/product8.jpg",
    contactNumber: "+1122334455",
    email: "daniel@example.com",
    productPrice: 83099.95,
    productQuantity: 7,
    ProductDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

console.log(dummyData[0].sellerName); // Outputs: "John Doe"
console.log(dummyData[1].companyName); // Outputs: "XYZ Gadgets"

//    Latitude    Longitude
//    44.968046   -94.420307
//    44.33328    -89.132008
//    33.755787   -116.359998
//    33.844843   -116.54911
//    44.92057    -93.44786
//    44.240309   -91.493619
//    44.968041   -94.419696
//    44.333304   -89.132027
//    33.755783   -116.360066
//    33.844847   -116.549069
//    44.920474   -93.447851
//    44.240304   -91.493768
