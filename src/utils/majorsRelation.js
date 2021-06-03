// import { findIndex } from 'lodash';

/* eslint-disable */
const course_weights = {
  direct: {
    strongly_disliked: -5,
    somewhat_disliked: -2,
    Neutral: 5,
    somewhat_liked: 10,
    stongly_liked: 20,
  },
  indirect: {
    strongly_disliked: -2.5,
    somewhat_disliked: -1,
    Neutral: 2.5,
    somewhat_liked: 5,
    stongly_liked: 10,
  },
};

const gpa_weight = 2;

const math_years_weights = {
  direct: { 0: 0, 1: 5, 2: 10, 3: 15, 4: 20, 5: 25 },
  indirect: { 0: 0, 1: 3, 2: 6, 3: 9, 4: 12, 5: 15 },
};

const personality_and_interests_weights = {
  strongly_disliked: -5,
  somewhat_disliked: -2,
  neutral: 0,
  somewhat_prefer: 10,
  stongly_prefer: 20,
};

export const direct = {
  Physics: [
    'Aerospace Engineering',
    'Ceramic Engineering',
    'Chemical & Biochemical Engineering',
    'Civil Engineering',
    'Computer Engineering',
    'Electrical Engineering',
    'Geology and Geophysics',
    'Mechanical Engineering',
    'Metallurgical Engineering',
    'Nuclear Engineering',
    'Physics',
  ],
  Mathematics: [
    'Aerospace Engineering',
    'Architectural Engineering',
    'Business and Management Systems',
    'Chemical & Biochemical Engineering',
    'Civil Engineering',
    'Computer Engineering',
    'Computer Science',
    'Economics',
    'Electrical Engineering',
    'Information Science and Technology',
    'Mechanical Engineering',
    'Metallurgical Engineering',
    'Nuclear Engineering',
  ],
  English: [
    'Aerospace Studies / ROTC',
    'English',
    'Multidisciplinary Studies',
    'Technical Communication',
  ],
  'Physical Education': ['Aerospace Studies / ROTC'],
  Biology: ['Biological Sciences'],
  'Computer Science': [
    'Business and Management Systems',
    'Computer Engineering',
    'Computer Science',
    'Information Science and Technology',
  ],
  Business: ['Business and Management Systems', 'Engineering Management'],
  Accounting: ['Business and Management Systems', 'Engineering Management'],
  Chemistry: [
    'Ceramic Engineering',
    'Chemical & Biochemical Engineering',
    'Chemistry',
    'Civil Engineering',
    'Geology and Geophysics',
    'Mechanical Engineering',
    'Metallurgical Engineering',
    'Nuclear Engineering',
  ],
  Economics: ['Economics'],
  'Social Studies': ['Economics', 'History'],
  Government: ['Economics'],
  History: ['Economics', 'History'],
  Speech: ['English'],
  Writing: ['English', 'Technical Communication'],
  'Earth Science': [
    'Environmental Engineering',
    'Geological Engineering',
    'Geology and Geophysics',
    'Mining Engineering',
    'Petroleum Engineering',
  ],
  Geology: [
    'Environmental Engineering',
    'Geological Engineering',
    'Geology and Geophysics',
    'Mining Engineering',
    'Petroleum Engineering',
  ],
  Geography: ['Environmental Engineering', 'Geological Engineering'],
  Art: ['Multidisciplinary Studies', 'Philosophy'],
  Philosophy: ['Multidisciplinary Studies', 'Philosophy'],
  'Religious Studies': ['Philosophy'],
  Psychology: ['Psychology'],
  'Physical Science': [],
  Sociology: [],
  Anthropology: [],
};

const directArray = [
  {
    name: 'Physics',
    majors: [
      'Aerospace Engineering',
      'Ceramic Engineering',
      'Chemical & Biochemical Engineering',
      'Civil Engineering',
      'Computer Engineering',
      'Electrical Engineering',
      'Geology and Geophysics',
      'Mechanical Engineering',
      'Metallurgical Engineering',
      'Nuclear Engineering',
      'Physics',
    ],
  },
  {
    name: 'Mathematics',
    majors: [
      'Aerospace Engineering',
      'Architectural Engineering',
      'Business and Management Systems',
      'Chemical & Biochemical Engineering',
      'Civil Engineering',
      'Computer Engineering',
      'Computer Science',
      'Economics',
      'Electrical Engineering',
      'Information Science and Technology',
      'Mechanical Engineering',
      'Metallurgical Engineering',
      'Nuclear Engineering',
    ],
  },
  {
    name: 'English',
    majors: [
      'Aerospace Studies / ROTC',
      'English',
      'Multidisciplinary Studies',
      'Technical Communication',
    ],
  },
  {
    name: 'Physical Education',
    majors: ['Aerospace Studies / ROTC'],
  },
  {
    name: 'Biology',
    majors: ['Biological Sciences'],
  },
  {
    name: 'Computer Science',
    majors: [
      'Business and Management Systems',
      'Computer Engineering',
      'Computer Science',
      'Information Science and Technology',
    ],
  },
  {
    name: 'Business',
    majors: ['Business and Management Systems', 'Engineering Management'],
  },
  {
    name: 'Accounting',
    majors: ['Business and Management Systems', 'Engineering Management'],
  },
  {
    name: 'Chemistry',
    majors: [
      'Ceramic Engineering',
      'Chemical & Biochemical Engineering',
      'Chemistry',
      'Civil Engineering',
      'Geology and Geophysics',
      'Mechanical Engineering',
      'Metallurgical Engineering',
      'Nuclear Engineering',
    ],
  },
  {
    name: 'Economics',
    majors: ['Economics'],
  },
  {
    name: 'Social Studies',
    majors: ['Economics', 'History'],
  },
  {
    name: 'Government',
    majors: ['Economics'],
  },
  {
    name: 'History',
    majors: ['Economics', 'History'],
  },
  {
    name: 'Speech',
    majors: ['English'],
  },
  {
    name: 'Writing',
    majors: ['English', 'Technical Communication'],
  },
  {
    name: 'Earth Science',
    majors: [
      'Environmental Engineering',
      'Geological Engineering',
      'Geology and Geophysics',
      'Mining Engineering',
      'Petroleum Engineering',
    ],
  },
  {
    name: 'Geology',
    majors: [
      'Environmental Engineering',
      'Geological Engineering',
      'Geology and Geophysics',
      'Mining Engineering',
      'Petroleum Engineering',
    ],
  },
  {
    name: 'Geography',
    majors: ['Environmental Engineering', 'Geological Engineering'],
  },
  {
    name: 'Art',
    majors: ['Multidisciplinary Studies', 'Philosophy'],
  },
  {
    name: 'Philosophy',
    majors: ['Multidisciplinary Studies', 'Philosophy'],
  },
  {
    name: 'Religious Studies',
    majors: ['Philosophy'],
  },
  {
    name: 'Psychology',
    majors: ['Psychology'],
  },
  {
    name: 'Physical Science',
    majors: [],
  },
  {
    name: 'Sociology',
    majors: [],
  },
  {
    name: 'Anthropology',
    majors: [],
  },
];

export const indirect = {
  Physics: [
    'Aerospace Studies / ROTC',
    'Biological Sciences',
    'Chemistry',
    'Engineering Management',
    'Geological Engineering',
    'Mining Engineering',
    'Petroleum Engineering',
    'Philosophy',
  ],
  Mathematics: [
    'Aerospace Studies / ROTC',
    'Biological Sciences',
    'Ceramic Engineering',
    'Chemistry',
    'Engineering Management',
    'Geological Engineering',
    'Geology and Geophysics',
    'Mining Engineering',
    'Petroleum Engineering',
    'Philosophy',
    'Physics',
    'Psychology',
  ],
  English: ['History', 'Information Science and Technology'],
  'Physical Education': [],
  Biology: ['Chemistry'],
  'Computer Science': [
    'Chemical & Biochemical Engineering',
    'Geology and Geophysics',
    'Mechanical Engineering',
    'Psychology',
    'Technical Communication',
  ],
  Business: ['Information Science and Technology'],
  Accounting: [],
  Chemistry: [
    'Biological Sciences',
    'Engineering Management',
    'Geological Engineering',
    'Mining Engineering',
    'Petroleum Engineering',
    'Philosophy',
  ],
  Economics: ['Engineering Management', 'Philosophy'],
  'Social Studies': [],
  Government: [],
  History: ['Philosophy'],
  Speech: ['Business and Management Systems', 'History'],
  Writing: ['Business and Management Systems', 'History'],
  'Earth Science': [],
  Geology: [],
  Geography: [],
  Art: [],
  Philosophy: [],
  'Religious Studies': [],
  Psychology: ['Philosophy'],
  'Physical Science': ['Biological Sciences'],
  Sociology: ['Philosophy'],
  Anthropology: ['Philosophy'],
};

const indirectArray = [
  {
    name: 'Physics',
    majors: [
      'Aerospace Studies / ROTC',
      'Biological Sciences',
      'Chemistry',
      'Engineering Management',
      'Geological Engineering',
      'Mining Engineering',
      'Petroleum Engineering',
      'Philosophy',
    ],
  },
  {
    name: 'Mathematics',
    majors: [
      'Aerospace Studies / ROTC',
      'Biological Sciences',
      'Ceramic Engineering',
      'Chemistry',
      'Engineering Management',
      'Geological Engineering',
      'Geology and Geophysics',
      'Mining Engineering',
      'Petroleum Engineering',
      'Philosophy',
      'Physics',
      'Psychology',
    ],
  },
  {
    name: 'English',
    majors: ['History', 'Information Science and Technology'],
  },
  {
    name: 'Physical Education',
    majors: [],
  },
  {
    name: 'Biology',
    majors: ['Chemistry'],
  },
  {
    name: 'Computer Science',
    majors: [
      'Chemical & Biochemical Engineering',
      'Geology and Geophysics',
      'Mechanical Engineering',
      'Psychology',
      'Technical Communication',
    ],
  },
  {
    name: 'Business',
    majors: ['Information Science and Technology'],
  },
  {
    name: 'Accounting',
    majors: [],
  },
  {
    name: 'Chemistry',
    majors: [
      'Biological Sciences',
      'Engineering Management',
      'Geological Engineering',
      'Mining Engineering',
      'Petroleum Engineering',
      'Philosophy',
    ],
  },
  {
    name: 'Economics',
    majors: ['Engineering Management', 'Philosophy'],
  },
  {
    name: 'Social Studies',
    majors: [],
  },
  {
    name: 'Government',
    majors: [],
  },
  {
    name: 'History',
    majors: ['Philosophy'],
  },
  {
    name: 'Speech',
    majors: ['Business and Management Systems', 'History'],
  },
  {
    name: 'Writing',
    majors: ['Business and Management Systems', 'History'],
  },
  {
    name: 'Earth Science',
    majors: [],
  },
  {
    name: 'Geology',
    majors: [],
  },
  {
    name: 'Geography',
    majors: [],
  },
  {
    name: 'Art',
    majors: [],
  },
  {
    name: 'Philosophy',
    majors: [],
  },
  {
    name: 'Religious Studies',
    majors: [],
  },
  {
    name: 'Psychology',
    majors: ['Philosophy'],
  },
  {
    name: 'Physical Science',
    majors: ['Biological Sciences'],
  },
  {
    name: 'Sociology',
    majors: ['Philosophy'],
  },
  {
    name: 'Anthropology',
    majors: ['Philosophy'],
  },
];

export const allCourses = [
  { label: 'Art', name: 'art' },
  { label: 'Biology', name: 'biology' },
  { label: 'Chemistry', name: 'chemistry' },
  { label: 'Computer Science', name: 'computerScience' },
  { label: 'Earth Science / Geology', name: 'earthScience_Geology' },
  { label: 'English', name: 'english' },
  { label: 'Foreign Language', name: 'foreignLanguage' },
  { label: 'Mathematics', name: 'mathematics' },
  { label: 'Music', name: 'music' },
  { label: 'Physical Education / Sports', name: 'physicalEducation_Sports' },
  { label: 'Physics', name: 'physics' },
  {
    label: 'Social Studies / Government / History',
    name: 'socialStudies_Government_History',
  },
  { label: 'Theater', name: 'theater' },
  { label: 'Business / Accounting', name: 'businessAccounting' },
  { label: 'Contemporary Issues', name: 'contemporaryIssues' },
  { label: 'Economics', name: 'economics' },
  { label: 'Geography', name: 'geography' },
  { label: 'Journalism', name: 'journalism' },
  {
    label: 'Philosophy / Religious Studies',
    name: 'philosophy_religiousStudies',
  },
  { label: 'Physiology / Anatomy', name: 'physiology_anatomy' },
  { label: 'Psychology', name: 'psychology' },
  { label: 'Sociology / Anthropology', name: 'sociology_anthropology' },
  { label: 'Speech', name: 'speech' },
  { label: 'Visual Arts', name: 'visual_arts' },
  { label: 'Writing', name: 'writing' },
];

const allCoursesDict = {
  art: 'Art',
  biology: 'Biology',
  chemistry: 'Chemistry',
  computerScience: 'Computer Science',
  earthScience_Geology: 'Earth Science / Geology',
  english: 'English',
  foreignLanguage: 'Foreign Language',
  mathematics: 'Mathematics',
  music: 'Music',
  physicalEducation_Sports: 'Physical Education / Sports',
  physics: 'Physics',
  socialStudies_Government_History: 'Social Studies / Government / History',
  theater: 'Theater',
  businessAccounting: 'Business / Accounting',
  contemporaryIssues: 'Contemporary Issues',
  economics: 'Economics',
  geography: 'Geography',
  journalism: 'Journalism',
  philosophy_religiousStudies: 'Philosophy / Religious Studies',
  physiology_anatomy: 'Physiology / Anatomy',
  psychology: 'Psychology',
  sociology_anthropology: 'Sociology / Anthropology',
  speech: 'Speech',
  visual_arts: 'Visual Arts',
  writing: 'Writing',
};

const allMajors = [
  'Aerospace Engineering',
  'Ceramic Engineering',
  'Chemical & Biochemical Engineering',
  'Civil Engineering',
  'Computer Engineering',
  'Electrical Engineering',
  'Geology and Geophysics',
  'Mechanical Engineering',
  'Metallurgical Engineering',
  'Nuclear Engineering',
  'Physics',
  'Architectural Engineering',
  'Business and Management Systems',
  'Computer Science',
  'Economics',
  'Information Science and Technology',
  'Aerospace Studies / ROTC',
  'English',
  'Multidisciplinary Studies',
  'Technical Communication',
  'Biological Sciences',
  'Engineering Management',
  'Chemistry',
  'History',
  'Environmental Engineering',
  'Geological Engineering',
  'Mining Engineering',
  'Petroleum Engineering',
  'Philosophy',
  'Psychology',
];

const interestsAndPersonalityRelations = {
  environmentalProblems: [
    'Aerospace Engineering',
    'Biological Sciences',
    'Environmental Engineering',
    'Geological Engineering',
    'Geology and Geophysics',
  ],
  organizations_Groups: [
    'Aerospace Engineering',
    'Engineering Management',
    'Mining Engineering',
    'Petroleum Engineering',
    'Technical Communication',
  ],
  helpSolveProblems: [
    'Engineering Management',
    'Environmental Engineering',
    'Geological Engineering',
  ],
  teachYoungPeopleOrAdults: ['Multidisciplinary Studies', 'Psychology'],
  workingOutdoors: [
    'Environmental Engineering',
    'Geology and Geophysics',
    'Metallurgical Engineering',
    'Mining Engineering',
    'Petroleum Engineering',
  ],
  designAndComputerAidedDrafting: [
    'Aerospace Engineering',
    'Architectural Engineering',
    'Civil Engineering',
    'Mechanical Engineering',
  ],
  ecoEnvConservation: ['Biological Sciences', 'Environmental Engineering'],
  techAndBusinessProcesses: [
    'Business and Management Systems',
    'Information Science and Technology',
    'Engineering Management',
  ],
  propertiesOfDifferentMaterials: ['Ceramic Engineering', 'Civil Engineering'],
  enjoyLabWork: [
    'Chemistry',
    'Ceramic Engineering',
    'Chemical & Biochemical Engineering',
    'Metallurgical Engineering',
    'Environmental Engineering',
  ],
  enjoyScienceSubjects: [
    'Aerospace Engineering',
    'Chemistry',
    'Ceramic Engineering',
    'Chemical & Biochemical Engineering',
    'Metallurgical Engineering',
    'Environmental Engineering',
    'Nuclear Engineering',
    'Physics',
    'Biological Sciences',
  ],
  constructRenovateRebuild: [
    'Civil Engineering',
    'Environmental Engineering',
    'Geological Engineering',
  ],
  computerSoftwareAndHardware: [
    'Computer Science',
    'Computer Engineering',
    'Electrical Engineering',
    'Information Science and Technology',
  ],
  solveRealWordlProblemsSoftware: [
    'Computer Science',
    'Information Science and Technology',
  ],
  problemSolving: [
    'Computer Science',
    'Information Science and Technology',
    'Electrical Engineering',
    'Computer Engineering',
    'Aerospace Engineering',
    'Mechanical Engineering',
  ],
  designImplementationSoftwareAlgos: ['Computer Science'],
  enjoysMath: [
    'Economics',
    'Business and Management Systems',
    'Electrical Engineering',
    'Aerospace Engineering',
    'Mechanical Engineering',
    'Computer Science',
    'Nuclear Engineering',
  ],
  enhanceFinancialManagementSkills: ['Economics'],
  interestedInTech: [
    'Computer Science',
    'Information Science and Technology',
    'Electrical Engineering',
    'Computer Engineering',
  ],
  interestedInLitAndWriting: ['Technical Communication'],
  interestedInWorldHistory: ['History'],
  interestedInAdvMathAndScience: ['Nuclear Engineering', 'Mining Engineering'],
};

export const getRecommendations = ({
  courseEnjoyment,
  basic,
  interestsAndPersonality,
}) => {
  const courses = courseEnjoyment;
  const result = {};
  allMajors.map((major) => (result[major] = 0));
  Object.keys(courses).map((course) => {
    const courseName = allCoursesDict[course];
    const courseScoreDirect = course_weights.direct[courses[course]];
    const courseScoreIndirect = course_weights.indirect[courses[course]];
    const matchedCoursesDirect = directArray.filter(
      (i) => i.name.includes(courseName) || i.name === courseName
    );
    matchedCoursesDirect.map((course) => {
      course.majors.map((major) => {
        result[major] += courseScoreDirect;
        if (basic.mathYears !== '' && direct.Mathematics.includes(major)) {
          result[major] += math_years_weights.direct[Number(basic.mathYears)];
        }
      });
    });
    const matchedCoursesIndirect = indirectArray.filter(
      (i) => i.name.includes(courseName) || i.name === courseName
    );
    matchedCoursesIndirect.map((course) => {
      course.majors.map((major) => {
        result[major] += courseScoreIndirect;
        if (basic.mathYears !== '' && indirect.Mathematics.includes(major)) {
          result[major] += math_years_weights.indirect[Number(basic.mathYears)];
        }
      });
    });
    // console.log({ courseName, courseScore, matchedCoursesDirect });
  });

  if (basic.recentGPA !== '' && Number(basic.recentGPA) > 2.5) {
    result['Aerospace Engineering'] += gpa_weight;
  }

  Object.keys(interestsAndPersonality).map((key) => {
    if (interestsAndPersonality[key] !== 'neutral') {
      interestsAndPersonalityRelations[key].map((major) => {
        result[major] +=
          personality_and_interests_weights[interestsAndPersonality[key]];
      });
    }
  });

  // console.log(result);
  return Object.keys(result).map((key) => ({ major: key, score: result[key] }));
};
