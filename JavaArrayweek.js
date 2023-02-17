const week = ["Maandag"," Dinsdag"," Woensdag"," Donderdag"," Vrijdag"," Zaterdag"," Zondag"];
document.getElementById("Normaal").innerHTML = week;

// Werkdagen //
document.getElementById("Werk").innerHTML = week.slice(0,5);

// Weekend dagen//
document.getElementById("Weekend").innerHTML = week.slice(5,7);

// Omgekeerde dagen //
document.getElementById("Omgekeerd").innerHTML = week.reverse();

// Omgekeerd werkdagen //
document.getElementById("WerkOmgekeerd").innerHTML = week.slice(0,5);

//omgekeerd weekdagen //
document.getElementById("WeekOm").innerHTML = week.slice(0,2);