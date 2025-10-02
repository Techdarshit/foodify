import User from "./User";
import UseClass from "./UseClass";
const About =() => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
      <p className="text-lg text-gray-600 mb-4">
        Welcome to <span className="font-semibold text-orange-500">Foodify</span> —
        your go-to destination for quick, fresh, and delicious meals delivered straight
        to your doorstep. We partner with the best local restaurants to bring you
        a variety of cuisines, from sizzling street food to gourmet delights.
      </p>
      <p className="text-lg text-gray-600 mb-4">
        Our mission is simple — to make food ordering as easy and enjoyable as possible.
        With just a few taps, you can explore menus, customize your meals, and track
        your order in real-time, all while relaxing at home.
      </p>
      <p className="text-lg text-gray-600 mb-4">
        Whether you’re craving a quick snack, planning a family dinner, or hosting
        a party, <span className="font-semibold text-orange-500">Foodify</span> has
        you covered. We ensure every meal is prepared with love, packed with care,
        and delivered hot and fresh — just the way you like it.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">Why Choose Us?</h2>
      <ul className="list-disc pl-6 text-lg text-gray-600 space-y-1">
        <li>Wide selection of top-rated restaurants</li>
        <li>Fresh and hygienic food, delivered fast</li>
        <li>Easy-to-use ordering and tracking</li>
        <li>Exciting offers and discounts every day</li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">Our Promise</h2>
      <p className="text-lg text-gray-600">
        We’re committed to making your dining experience delightful — from browsing
        to your very last bite. Your cravings, our delivery.
      </p>
    </div>
  );
}

export default About;