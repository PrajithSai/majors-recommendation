import { createSlice } from '@reduxjs/toolkit';

export const majorsSlice = createSlice({
  name: 'majors',
  initialState: {
    basic: {
      gradingScale: '',
      recentGPA: '',
      mathYears: '',
      flYears: '',
      achievementTests: '',
    },
    courseGrades: {
      art: 'N/A',
      biology: 'N/A',
      chemistry: 'N/A',
      computerScience: 'N/A',
      earthScience_Geology: 'N/A',
      english: 'N/A',
      foreignLanguage: 'N/A',
      mathematics: 'N/A',
      music: 'N/A',
      physicalEducation_Sports: 'N/A',
      physics: 'N/A',
      socialStudies_Government_History: 'N/A',
      theater: 'N/A',
      businessAccounting: 'N/A',
      contemporaryIssues: 'N/A',
      economics: 'N/A',
      geography: 'N/A',
      journalism: 'N/A',
      philosophy_religiousStudies: 'N/A',
      physiology_anatomy: 'N/A',
      psychology: 'N/A',
      sociology_anthropology: 'N/A',
      speech: 'N/A',
      visual_arts: 'N/A',
      writing: 'N/A',
    },
    courseEnjoyment: {},
    interestsAndPersonality: {},
  },
  reducers: {
    setBasicInfo: (state, action) => {
      state.basic = action.payload;
    },
    setCourseGrades: (state, action) => {
      state.courseGrades = action.payload;
      const courseEnjoyment = {};
      Object.keys(action.payload).map((key) => {
        if (action.payload[key] !== 'N/A')
          courseEnjoyment[key] =
            state.courseEnjoyment[key] !== undefined
              ? state.courseEnjoyment[key]
              : 'Neutral';
        return null;
      });
      state.courseEnjoyment = courseEnjoyment;
    },
    setCourseEnjoyment: (state, action) => {
      state.courseEnjoyment = action.payload;
    },
    setInterestsAndPersonality: (state, action) => {
      state.interestsAndPersonality = action.payload;
    },
  },
});

export const {
  setBasicInfo,
  setCourseGrades,
  setCourseEnjoyment,
  setInterestsAndPersonality,
} = majorsSlice.actions;

export default majorsSlice.reducer;
