// const BETTERDOCTOR_SEARCH_URL = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=38a5e05a1ba6c75134d6d9a0497c51c0';


// function getDataFromApi(term, callback) {
//   const settings = {
//     url: BETTERDOCTOR_SEARCH_URL,
//     data: [
//     {
//       [
//         "visit_address": {
//           "city": "",
//           "state_long": "",
//           "street": "",
//           "zip": ""
//         },
//       ]
//     },
//       "meta": {
//         "data_type": "array",
//         "item_type": "Doctor",
//         "count": ,
//         "limit": 
//       },
//     dataType: 'json',
//     type: 'GET',
//     success: callback
//   };

//   $.ajax(settings);
// }

// function renderResult(result) {
//   console.log(result);
// }

// function displayBetterDoctorSearchData(data) {
//   const results = data.items.map((item, index) => renderResult(item));
//   $('.results').html(results);
// }

/* submit doctor search form */
function submitForm() {
  $(".start-header").on("click", ".start-cta", function() {
    event.preventDefault();
    $("#doc-search-form").hide();
    $(".doctor-list").text(list(testList.results);
    // getDataFromApi(term, displayBetterDoctorSearchData);
  });
}

submitForm();

/* Pass through test results array */
function list(result) {
  $(".doctor-list").text(results.doctorName, results.address, results.distance);
}

/* render doctor profile */
function doctorProfile() {
}

/* restart the search */
function newDoctorSearch() {
  $(" ").on("click", function() {
    $("#doc-search-form").show();
  });
}

/* call the functions */
 
