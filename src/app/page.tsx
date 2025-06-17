import Brands from '@/components/Brands';
import Hero from '@/components/Hero';
import Price from '@/components/Price';
import ProductFeature from '@/components/ProductFeature';
import Products from '@/components/Products';
import ShopCollections from '@/components/ShopCollections';
import Stats from '@/components/Stats';

export default function Home() {
	return (
		<>
			<Hero />
			<Brands />
			<ShopCollections />
			<Stats />
			<Price />
			<ProductFeature />
			<Products />
		</>
	);
}
