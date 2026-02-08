
import { Card, CardContent } from "@/components/ui/card";

// Sample customer reviews
const reviews = [
  {
    id: 1,
    name: "Chinedu Okonkwo",
    review:
      "The Bukleen Car Wash leaves my car looking brand new. I've tried many products, but this one gives the best shine. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Amina Ibrahim",
    review:
      "Bukleen cleaning product is amazing! It removes grease and oil easily and is gentle on my hands. I've been using it for two years now.",
    rating: 5,
  },
  {
    id: 3,
    name: "Tunde Adeyemi",
    review:
      "The Laundry Wash is excellent. My clothes smell fresh and look bright even after many washes. Will definitely buy again.",
    rating: 4,
  },
];

const Reviews = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Customer <span className="text-carex-blue">Reviews</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our satisfied customers have to say about our products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                {/* Rating stars */}
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15.585l-6.293 3.294 1.205-7.022L0 7.383l7.039-1.022L10 0l2.961 6.361 7.039 1.022-4.912 4.474 1.205 7.022L10 15.585z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 italic mb-4">"{review.review}"</p>
                <p className="font-bold text-carex-blue">- {review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
