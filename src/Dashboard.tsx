import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAIDataStart,fetchAIDataSuccess,fetchAIDataFailure } from './redux/aiDataSlice';
import { fetchAIData } from './api/api';
import { RootState } from './redux/store';
import CategoryDistribution from './components/CategoryDistribution';
import ResponseTimes from './components/ResponseTimes';
import UserSatisfaction from './components/UserSatisfaction';
import UsageStatistics from './components/UsageStatistics';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.aiData);

  useEffect(() => {
    dispatch(fetchAIDataStart());
    fetchAIData().then(
      (data) => dispatch(fetchAIDataSuccess(data)),
      (error) => dispatch(fetchAIDataFailure(error.message))
    );
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      <h1>AI Insights Dashboard</h1>
      <CategoryDistribution data={data} />
      <ResponseTimes data={data} />
      <UserSatisfaction data={data} />
      <UsageStatistics data={data} />
    </div>
  );
};

export default Dashboard;