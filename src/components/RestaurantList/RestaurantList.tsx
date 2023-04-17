import { Restaurant } from '../../types';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import DetailModal from '../Modal/DetailModal';
import CategoryFilter from '../SelectBox/CategoryFilter';
import SortingFilter from '../SelectBox/SortingFilter';
import { useRestaurantList } from '../../hooks/useRestaurantList';

function RestaurantList() {
  const {
    isItemClicked,
    clickedData,
    restaurantsData,
    onClick,
    handleSetCategory,
    handleSetCriterion,
  } = useRestaurantList();

  return (
    <>
      <section className="restaurant-filter-container">
        <CategoryFilter setCategory={handleSetCategory} />
        <SortingFilter setCriterion={handleSetCriterion} />
      </section>
      <ul>
        {restaurantsData.map((restaurantData: Restaurant) => {
          return <RestaurantItem key={restaurantData.id} data={restaurantData} onClick={onClick} />;
        })}
      </ul>
      {isItemClicked && <DetailModal data={clickedData} isClicked={isItemClicked} />}
    </>
  );
}

export default RestaurantList;
