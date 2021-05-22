import { configureStore } from '@reduxjs/toolkit';
import majors from '../slices/index';

export default configureStore({
  reducer: {
    majors,
  },
});
