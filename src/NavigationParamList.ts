// NavigationParamList.ts
export type MainStackParamList = {
  Dashboard: {};
  QuestionCard: { category: string };
  One: {}; // Add "One" screen with no params
  Two: { message: string }; // Add "Two" screen with a "message" param
};
