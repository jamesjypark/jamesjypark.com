export default {
  title: "Meditap",
  duration: "2019 Spring - Present",
  technology: "React Native, Node, SQLite3 on AWS EC2, Firebase",
  summary: [
    "Anticipated project launch in Nigeria in August 2019",
    "Project acquired by the Canadian Network for International Surgery",
    "Joule Healthcare Innovation Award for Biggest Potential Impact"
  ],
  page: [
    {
      type: "title",
      text: "Meditap – Medical Records Through NFC Technology"
    },
    {
      type: "duration",
      text: "2019 Spring — Present"
    },
    {
      type: "technology",
      text: "React Native, Node, SQLite3 on AWS EC2, Firebase"
    },
    {
      type: "image",
      name: require("../../../assets/meditap1.png")
    },
    {
      type: "paragraph",
      text:
        "Meditap is a cross-platform application leveraging NFC (near-field communication) technology to make medical records accessible for marginalized populations. Meditap was acquired by the Canadian Network for International Surgery in June 2019 and is currently under development as part of the Community Maternal Danger Score project aimed at reducing maternal mortality in Nigeria."
    },
    {
      type: "subheader",
      text: "Project Overview"
    },
    {
      type: "paragraph",
      text:
        "Meditap started at Hatching Health 2019, a medical innovation event held at the University of British Columbia focusing on cross-disciplinary innovation from students in medical and technology fields. Our initial solution was an application leveraging NFC technology to empower marginalized populations with their personal health information on NFC tags."
    },
    {
      type: "paragraph",
      text:
        "After winning the Joule Innovation Award for Biggest Potential Impact and being named Medical Device Design Centre’s Award Finalist, Meditap has been acquired by the Canadian Network for International Surgery (CNIS) in June 2019."
    },
    {
      type: "paragraph",
      text:
        "CNIS is an international non-governmental organization focusing on improvements in health and safety in developing nations. Dr. Ronald Lett, the CEO of CNIS and adjunct professor at UBC and McGill, showed a strong interest in incorporating Meditap to CNIS’s project on reducing maternal mortality."
    },
    {
      type: "italics",
      text:
        "In May 2019, Meditap successfully completed beta-testing in Tanzania and Kenya. The app is currently expecting to launch in August 2019 in Nigeria."
    },
    {
      type: "subheader",
      text: "My Role"
    },
    {
      type: "paragraph",
      text:
        "As the only software developer in the team, I architected and implemented a React Native application that uses NDEF (near-field data exchange format) to reliably encrypt, store and modify data on NFC tags. I also implemented a Node server with Express and SQLite3 on AWS EC2 for storing patient information on the database."
    },
    {
      type: "paragraph",
      text:
        "Throughout the development of the project, I worked very closely with Dr. Lett to make Meditap into a practical solution that can save lives. As a result, I spent countless nights refactoring (and completely breaking) the app in order to meet the feature requests from Dr. Lett. From this experience, I was forced to learn design patterns to build robust and flexible code modules."
    }
    // {
    //   type: "team",
    //   list: [
    //     "Brian Cheng - Designer",
    //     "Adelia Jacobs - Dietetics",
    //     "Vishu Karthik - Medical",
    //     "Azzra Mangalji - Medical",
    //     "James Park - Software Engineering"
    //   ]
    // }
  ]
};
