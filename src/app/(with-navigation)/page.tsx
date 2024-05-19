'use client';

import MainActivityCard from '@/app/_components/activity/main-activity-card';
import CategoryBar from '@/app/_components/category-bar/category-bar';
import { useEffect, useState } from 'react';

export interface Category {
  categoryId: string;
  name: string;
  description: string;
  icon: string;
}

export interface Activity {
  activityId: string;
  title: string;
  description: string;
  categoryId: string;
  imageUrl: string;
  activityType: string;
  location: string;
  tags: string[];
  activityDate: string;
  registerDate: string;
}

export default function Home() {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    fetch(`data/categoryList.json`)
      .then(res => res.json())
      .then(data => {
        setCategoryList(data);
        console.log('data', data);
      });
  }, []);

  useEffect(() => {
    fetch('data/mainActivityList.json')
      .then(response => response.json())
      .then(data => setActivities(data));
  }, []);

  return (
    <main>
      {/* TODO: 카테고리 바 sticky 처리 여부 */}
      <CategoryBar categoryList={categoryList} />
      {activities.map(activity => (
        <MainActivityCard key={activity.activityId} activity={activity} />
      ))}
    </main>
  );
}
