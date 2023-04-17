import { useState } from 'react';
import LunchDataService from '../domains/LunchDataService';
import { Category, Criterion, Restaurant } from '../types';

export const useRestaurantList = () => {
  const [isItemClicked, setIsItemClicked] = useState<boolean>(false);
  const [clickedData, setClickedData] = useState<Restaurant>({
    id: 0,
    category: '한식',
    name: '',
    distance: 0,
    description: '',
    link: '',
  });
  const [category, setCategory] = useState<Category>('전체');
  const [criterion, setCriterion] = useState<Criterion>('이름순');
  const [restaurantsData, setRestaurantsData] = useState<Restaurant[]>(
    LunchDataService.getRestaurants('전체', '이름순'),
  );

  const onClick = (targetId: string) => {
    if (!targetId) return;
    setIsItemClicked(true);
    setClickedData(LunchDataService.getRestaurant(targetId));
  };

  const handleSetCategory = (newCategory: Category) => {
    setIsItemClicked(false);
    setCategory(newCategory);
    setRestaurantsData(LunchDataService.getRestaurants(newCategory, criterion));
  };

  const handleSetCriterion = (newCriterion: Criterion) => {
    setIsItemClicked(false);
    setCriterion(newCriterion);
    setRestaurantsData(LunchDataService.getRestaurants(category, newCriterion));
  };

  return {
    isItemClicked,
    clickedData,
    restaurantsData,
    onClick,
    handleSetCategory,
    handleSetCriterion,
  };
};
