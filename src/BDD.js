const info = [
  {
    name: 'Subway',
    image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zNzg4MDJiMC1jNTI4LTQ4MjktYjBiNS0wY2M2NDBkZjYzY2QuanBlZw==',
    note: '4.5',
    drive_time: '20 - 30mn',
    price: '€',
    type: 'Fast Food',
    location: 'Paris',
    description: 'Subway is an American fast food restaurant franchise that primarily sells submarine sandwiches, salads, and beverages.'
  },
  {
    name: "McDonald's",
    image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9iODQ1NDA4Zi1lOGFmLTRkMDUtYWI4YS0yNWMwYzVjMGI4YWUuanBlZw==',
    note: '3.9',
    drive_time: '15 - 25mn',
    price: '€',
    type: 'Fast Food',
    location: 'Paris',
    description: 'McDonald\'s is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald.'
  },
  {
    name: "O'Tacos",
    image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9mOGQ5MjU5ZS00YjIzLTRkNWYtOWQ1YS0wNjBlNjE2NDI4Y2QuanBlZw==',
    note: '4.4',
    drive_time: '15 - 25mn',
    price: '€',
    type: 'Fast Food',
    location: 'Paris',
    description: 'O\'Tacos is a French fast food chain known for its creative and indulgent taco recipes.'
  },
  {
    name: 'Pizza Hut',
    image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zYWY1Y2IzMi0yZjYxLTQ5OWQtYjZjOC1iZWIzMDM0MmM4M2IuanBlZw==',
    note: '4.1',
    drive_time: '20 - 30mn',
    price: '€€',
    type: 'Pizza',
    location: 'Paris',
    description: 'Pizza Hut is an American restaurant chain known for its Italian-American cuisine, including pizza and pasta dishes.'
  },
  {
    name: 'Momiji',
    image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC80YWExZDYxOC0wZTQwLTRiZjItYjRjNS1hZTAyZDQ2Y2Y1Y2UuanBlZw==',
    note: '4.3',
    drive_time: '20 - 30mn',
    price: '€€',
    type: 'Asiatique',
    location: 'Paris',
    description: 'Momiji is a Japanese restaurant offering a variety of traditional dishes such as sushi, ramen, and teriyaki.'
  },
  {
    name: 'Food Time',
    image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9jNTMxMTVhOC0wZjExLTQ5YmUtYjIyNi0yYTc5YjgzMTA4MmI=',
    note: '4.2',
    drive_time: '25 - 35mn',
    price: '€€',
    type: 'International',
    location: 'Paris',
    description: 'Food Time is a restaurant offering a diverse menu with dishes inspired by various cuisines from around the world.'
  },
  {
    name: "L'escale",
    image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC81OTI5MzU4Ni01NDk4LTQ5YTYtOGMzZS1lMzYzNTBkYmMzMTMuanBlZw==',
    note: '4.5',
    drive_time: '20 - 30mn',
    price: '€€',
    type: 'Français',
    location: 'Paris',
    description: 'L\'escale is a French restaurant offering a refined dining experience with a focus on traditional French cuisine.'
  },
  {
    name: 'M&A',
    image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kdXl0NGg5bmZuajUwLmNsb3VkZnJvbnQubmV0L3Jlc2l6ZWQvMTU0NDA4NzMyMjk3Ni13NTUwLTdiLmpwZw==',
    note: '4.3',
    drive_time: '20 - 30mn',
    price: '€€',
    type: 'Asiatique',
    location: 'Paris',
    description: 'M&A is an Asian fusion restaurant offering a blend of flavors from various Asian cuisines, such as Chinese, Thai, and Vietnamese.'
  },
  {
    name: "Burger's Friends",
    image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC81Mzk3YWEzOC0yYjRhLTRmOTItYmU4Ny1kZDE5YWEzNGU4MTQuanBlZw==',
    note: '3.8',
    drive_time: '30 - 40mn',
    price: '€',
    type: 'Fast Food',
    location: 'Paris',
    description: 'Burger\'s Friends is a fast food restaurant specializing in gourmet burgers made with high-quality ingredients.'
  },
  {
    name: 'Sushi Shop',
    image: 'https://f.roocdn.com/images/menus/45498/header-image.jpg?width=1200&height=630&fit=crop',
    note: '4.3',
    drive_time: '20 - 30mn',
    price: '€€',
    type: 'Asiatique',
    location: 'Paris',
    description: "Sushi Shop est une chaîne de restaurants spécialisée dans les sushis. Ils proposent une large gamme de sushis créatifs, de rolls et de plats japonais pour satisfaire les amateurs de cuisine japonaise."
  },
  {
    name: 'Burger King',
    image: 'https://d1ralsognjng37.cloudfront.net/a9525b6f-b456-4797-b3f7-9fda195a53b6.jpeg',
    note: '4.0',
    drive_time: '15 - 25mn',
    price: '€',
    type: 'Fast Food',
    location: 'Paris',
    description: "Burger King est une célèbre chaîne de restauration rapide proposant une variété de hamburgers, de frites et de boissons. Leurs hamburgers sont préparés à la commande et ils proposent également des menus pour enfants."
  },
  {
    name: 'La Piazza',
    image: 'https://d1ralsognjng37.cloudfront.net/9e07f895-4f24-4f58-b10b-0dc77c9ae5cc.jpeg',
    note: '4.2',
    drive_time: '25 - 35mn',
    price: '€€',
    type: 'Pizza',
    location: 'Paris',
    description: "La Piazza est un restaurant spécialisé dans la pizza. Ils proposent une variété de pizzas cuites au four à bois avec des garnitures fraîches et savoureuses. Ils offrent également des pâtes, des salades et d'autres plats italiens."
  },
  {
    name: 'Wok to Walk',
    image: 'https://tb-static.uber.com/prod/image-proc/processed_images/47e937d22ae678ed211af6b8104dd0b6/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg',
    note: '4.1',
    drive_time: '15 - 25mn',
    price: '€',
    type: 'Asiatique',
    location: 'Paris',
    description: "Wok to Walk est un restaurant proposant une cuisine asiatique rapide et fraîche. Vous pouvez choisir parmi une sélection d'ingrédients pour créer votre propre wok sauté à la minute selon vos préférences."
  },
  {
    name: 'Five Guys',
    image: 'https://nicepresse.com/wp-content/uploads/2022/11/Capture-de%CC%81cran-2022-11-16-a%CC%80-08.09.42.png',
    note: '4.4',
    drive_time: '15 - 25mn',
    price: '€€',
    type: 'Fast Food',
    location: 'Paris',
    description: "Five Guys est une chaîne de restauration rapide américaine connue pour ses hamburgers frais et personnalisables. Ils offrent une variété de garnitures et de sauces pour créer votre propre burger à votre goût."
  },
  {
    name: 'Quick',
    image: 'https://tb-static.uber.com/prod/image-proc/processed_images/575287464730cc1e4cea51d51464459a/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg',
    note: '3.7',
    drive_time: '15 - 25mn',
    price: '€',
    type: 'Fast Food',
    location: 'Paris',
    description: "Quick est une chaîne de restauration rapide proposant des hamburgers, des frites et des boissons. Ils sont connus pour leurs burgers savoureux et leurs menus abordables. Profitez d'un repas rapide et délicieux chez Quick."
}

];

module.exports = info;
