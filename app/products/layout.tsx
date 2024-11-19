import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products - Green Agriculture Co., Ltd.',
  description: 'Explore our range of sustainable agricultural products, from premium animal products to arable crops.',
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container py-8">
      {children}
    </div>
  );
}