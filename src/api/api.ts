import aiData from '../ai-data.json';

export const fetchAIData = async () => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return aiData;
};