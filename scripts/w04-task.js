/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Teddy Espino",
    photo: "images/my_face.jpg",
    favoriteFoods: [
        'Encebollado',
        'Bolon',
        'Lasagna',
        'Pizza',
      ],
      hobbies: [
        "Videogames",
        "Football",
        "Music",
        "Youtube"
      ],
      placesLived: [
      ]
  }
      myProfile.placesLived.push(
        {
            place: "Guayaquil",
            length: "20 years"
        },
        {
          place: 'Quito',
          length: '4 years'
        },
        {
            place: "Quevedo",
            length: "2 years"
        }
      );
      document.querySelector('#name').textContent = myProfile.name;
      document.querySelector("#photo").setAttribute("src", myProfile.photo);
      document.querySelector("#photo").setAttribute("alt", myProfile.name);

      myProfile.favoriteFoods.forEach(food => {
        let li = document.createElement('li');
        li.textContent = food;
        document.querySelector('#favorite-foods').appendChild(li);
      });

      myProfile.hobbies.forEach(hobby => {
        let li = document.createElement('li');
        li.textContent = hobby;
        document.querySelector('#hobbies').appendChild(li);
      });

      myProfile.placesLived.forEach(placeLived => {
        let dt = document.createElement("dt");
        dt.textContent = placeLived.place;
        let dd = document.createElement("dd");
        dd.textContent = placeLived.length;
        document.querySelector("#places-lived").appendChild(dt);
        document.querySelector("#places-lived").appendChild(dd);

      })








/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


