'use client';

import MainActivityCard from '@/app/_components/activity/main-activity-card';
import CategoryBar from '@/app/_components/category-bar/category-bar';
import { Activity, Category } from '@/types/type';
import { useEffect, useState } from 'react';

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
