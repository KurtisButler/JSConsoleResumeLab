const fullName = "Kurtis Duane Butler";

const jobTitle = ["Security Guard"];
const personalDescripton = [
  "I am a male, 6 feet tall, i love playing video games",
];
const interests = ["Games, Anime, Computers, Excercising"];

const pastPositions = [
  {
    Company: "Chickfila",
    Title: "Team Member",
    Description:
      "I did everything from breading and cooking chicken to running cash registers and operating the drive through window.",
  },
  {
    Company: "Blattner Solar Energy",
    Title: "Quality Assurance",
    Description:
      "I checked the quality of other employees work, whos job was to construct and install the solar panels.",
  },
  {
    Company: "Best Safety Security",
    Title: "Security Guard",
    Description: "Make sure stuff isnt stolen.",
  },
];
const skills = [
  "Kitchen Experience",
  "Security Experience",
  "BAM: Computer Knowledge",
  "BAM: Beginner in Web Development",
];

console.log("Name: " + fullName.toUpperCase());
console.log("Title: " + jobTitle);
console.log("Descripton: " + jobTitle);
console.log(" ");
console.log("My Interests:");

for (let i = 0; i < interests.length; i++) {
  console.log("* " + interests[i]);
}

console.log(" ");

console.log("My Previous Experience: ");

for (let i = 0; i < pastPositions.length; i++) {
  console.log(
    "* " +
      pastPositions[i].Title +
      " at " +
      pastPositions[i].Company +
      " _ " +
      pastPositions[i].Description
  );
}

function displayPositon(Company, Title, Description) {
  console.log(Company, Title, Description);
}
displayPositon(
  pastPositions[0].Company,
  pastPositions[0].Title,
  pastPositions[0].Description
);

displayPositon(
  pastPositions[1].Company,
  pastPositions[1].Title,
  pastPositions[1].Description
);

displayPositon(
  pastPositions[2].Company,
  pastPositions[2].Title,
  pastPositions[2].Description
);

console.log(" ");
console.log("My Skills: ");

displaySkill("Kitchen Experience", false);
displaySkill("Security Experience", false);
displaySkill("Computer Knowledge", true);
displaySkill("Beginner in Web Development", true);

function displaySkill(skills, BAM) {
  if (BAM == true) {
    console.log("*  BAM: " + skills);
  } else {
    console.log("*  " + skills);
  }
}
