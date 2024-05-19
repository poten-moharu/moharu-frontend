import { Category } from '@/app/(with-navigation)/page';
import Image from 'next/image';

interface CategoryBarProps {
  categoryList: Category[];
}

const CategoryBar: React.FC<CategoryBarProps> = ({ categoryList }) => {
  return (
    <div className="scroll-x flex justify-between p-5">
      {categoryList.map(category => (
        <div key={category.categoryId}>
          <Image
            src={`/images/icons/${category.icon}.svg`}
            alt={category.name}
            width={24}
            height={24}
          />
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryBar;
