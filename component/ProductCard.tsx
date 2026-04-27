import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <motion.div 
        whileHover={{ y: -10 }}
        className="group cursor-pointer"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary mb-4">
          <Image 
            src={product.image} 
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              {product.category}
            </span>
          </div>
          <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary hover:text-white">
            <ShoppingCart size={18} />
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={12} 
                className={i < product.rating ? "fill-accent text-accent" : "text-gray-300"} 
              />
            ))}
            <span className="text-[12px] text-gray-500 ml-1">({product.rating}.0)</span>
          </div>
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="font-bold text-primary">${product.price}</p>
          
          <div className="w-full mt-3 py-2 border border-foreground/10 rounded-lg text-sm font-medium text-center transition-all group-hover:bg-foreground group-hover:text-white">
            View Details
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
