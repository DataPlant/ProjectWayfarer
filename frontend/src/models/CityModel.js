const url = 'http://localhost:4000'

class CityModel {
   static all() {
       return fetch(url)
       .then((response) => {
           return response.json()
       })
    //    .then((data) => {
    //        console.log(data);
    //    })
       .catch((err) => {
           console.log(err);
       })
   }
    
}

export default CityModel