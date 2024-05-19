'use client';

import MainActivityCard from '@/app/_components/activity/main-activity-card';
import { Activity } from '@/types/type';
import React from 'react';

interface DetailActivityCardProps {
  activity: Activity;
}

const DetailActivityCard: React.FC<DetailActivityCardProps> = ({
  activity,
}) => {
  return (
    <div>
      <MainActivityCard activity={activity} />
      <div className="flex">
        <button type="button">좋아요</button>
        <button type="button">공유하기</button>
      </div>
    </div>
  );
};

export default DetailActivityCard;
