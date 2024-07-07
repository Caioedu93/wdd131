const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Bacolod Phillippines Temple",
      location: "Bacolod City, Philippines",
      dedicated: "2021, December, 11",
      area: 26700,
      imageUrl:
      "https://newsroom.churchofjesuschrist.org/media/960x540/Exterior_2020_08_12.jpg"
    },
    {
      templeName: "São Paulo Brazil",
      location: "São Paulo, Brazil",
      dedicated: "1978, October, 30",
      area: 70694,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
    },{
      templeName: "Rome Italy",
      location: "Rome, Italy",
      dedicated: "2019, March, 10",
      area: 40700,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  }
    
  ];
  
  document.addEventListener("DOMContentLoaded", function() {
      const menuToggle = document.getElementById('menu-toggle');
      const menu = document.getElementById('menu');
      const templeGallery = document.getElementById('temple-gallery');
  
      const createTempleCard = (temple) => {
          const figure = document.createElement('figure');
          figure.innerHTML = `
              <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
              <figcaption>
                  <h3>${temple.templeName}</h3>
                  <p>Location: ${temple.location}</p>
                  <p>Dedicated: ${temple.dedicated}</p>
                  <p>Area: ${temple.area} sq ft</p>
              </figcaption>
          `;
          return figure;
      };
  
      const displayTemples = (temples) => {
          templeGallery.innerHTML = '';
          temples.forEach(temple => {
              const templeCard = createTempleCard(temple);
              templeGallery.appendChild(templeCard);
          });
      };
  
      const filterTemples = (criteria) => {
          let filteredTemples = [];
          switch(criteria) {
              case 'old':
                  filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                  break;
              case 'new':
                  filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                  break;
              case 'large':
                  filteredTemples = temples.filter(temple => temple.area > 90000);
                  break;
              case 'small':
                  filteredTemples = temples.filter(temple => temple.area < 10000);
                  break;
              default:
                  filteredTemples = temples;
          }
          displayTemples(filteredTemples);
      };
  
      menuToggle.addEventListener('click', function() {
          if (menu.style.display === 'flex') {
              menu.style.display = 'none';
              menuToggle.textContent = '☰';
          } else {
              menu.style.display = 'flex';
              menuToggle.textContent = 'X';
          }
      });
  
      document.querySelectorAll('nav a').forEach(link => {
          link.addEventListener('click', function(e) {
              e.preventDefault();
              filterTemples(link.getAttribute('data-filter'));
          });
      });
  
      const yearSpan = document.getElementById('year');
      const lastModifiedSpan = document.getElementById('last-modified');
      
      const currentYear = new Date().getFullYear();
      const lastModified = document.lastModified;
      
      yearSpan.textContent = currentYear;
      lastModifiedSpan.textContent = lastModified;
  
      
      displayTemples(temples);
  });
  