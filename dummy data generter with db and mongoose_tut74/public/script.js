
const randomNames = [
  "Olivia Hill", "Isabella Johnson", "Samuel Walker", "John Adams", "Sophia Scott",
  "Daniel Johnson", "Samuel Hill", "Emily Campbell", "Alex Carter", "Henry Harris",
  "Emma Adams", "Samuel Johnson", "Emma Hall", "Jane Smith", "Nina Green",
  "Alex Anderson", "Alex Carter", "Henry Scott", "Alex Roberts", "Daniel Young",
  "Liam Wright", "Samuel Taylor", "Michael Roberts", "Isabella Allen", "Emily Anderson",
  "Grace Campbell", "Benjamin Harris", "Lucas Harris", "Michael Adams", "Emily Campbell",
  "Sophia Young", "Charles Anderson", "Henry Johnson", "Maria Carter", "Grace Brown",
  "Chris Anderson", "Lucas Smith", "Samuel Hill", "Olivia Allen", "Nina Wright",
  "Emma Young", "Benjamin Adams", "James Allen", "Isabella Lewis", "Olivia Walker",
  "Emily Carter", "Emily Campbell", "Alex Scott", "Samuel Hill", "Robert Mitchell"
];
export const programmingLanguages = [
  "JavaScript","Python","Java","C","C++","Ruby","PHP","Swift","Go","Kotlin",
"R","TypeScript",  "Scala","Perl","Haskell","Rust","Lua","Objective-C","Dart",
"C#","F#","Elixir","Erlang","MATLAB","VBA","Shell",  "HTML","CSS","Fortran","OBOL"
];
const Cities = [
  "Mumbai","Delhi","Bangalore","Hyderabad","Ahmedabad","Chennai","Kolkata",
  "Jaipur","Surat","Lucknow","Kanpur","Nagpur","Visakhapatnam","Indore","Thane",
  "Bhopal","Patna","Vadodara","Ghaziabad","Ludhiana","Agra","Nashik","Faridabad",
  "Meerut","Rajkot","Kalyan-Dombivli","Vasai-Virar","Varanasi","Srinagar","Aurangabad",
  "Dhanbad","Amritsar","Navi Mumbai","Allahabad","Ranchi","Howrah","Coimbatore","Gwalior",
  "Jodhpur","Vijayawada","Madurai","Raipur","Kota","Guwahati","Chandigarh","Solapur","Hubli-Dharwad","Mysore","Bareilly","Tiruchirappalli"
 ];
 function getrandom(a, b) {
  return Math.floor(a + Math.random() * (b - a))
}


document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  
  btn.addEventListener("click", async () => {
    let dataArray = []
    for (let i = 0; i < 10; i++) {
      let randname = randomNames[getrandom(0, randomNames.length)];
      let randsalary = getrandom(5000, 500000);
      let randlanguage = programmingLanguages[getrandom(0, programmingLanguages.length)];
      let randcity = Cities[getrandom(0, Cities.length)];
      
      let data = {
        name: randname,
        salary: randsalary,
        language: randlanguage,
        city: randcity,
      };
      
       dataArray.push(data); // Add each random object to the array
    }
    
    // Send the random data to the server using POST
    let response = await fetch("/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataArray)
    });
    
    let result = await response.json();
    console.log(result); // Logs the result returned by the server
  });
}
)

