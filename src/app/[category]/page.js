import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
import { getListingsForCategory, categoryLabel } from "@/data/listings";

export default async function CategoryListingPage({ params }) {
  const { category } = await params;
  const listings = getListingsForCategory(category);

  return (
    <>
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-10">
          <h1 className="text-2xl font-bold text-slate-900">{categoryLabel(category)}</h1>
          <p className="mt-1 text-slate-600">{listings.length} ads found</p>

          <div className="mt-6 space-y-5">
            {listings.map((listing) => (
              <ListingCard
                key={listing.id}
                listing={listing}
                href={`/${category}/${listing.id}`}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
