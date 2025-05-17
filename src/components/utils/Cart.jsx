import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = ({ open, onClose }) => {
  const cartItems = [
    {
      id: 1,
      name: "Fresh Indian Orange",
      weight: "1 kg",
      price: 12.0,
      image: "/images/OrangeCart.png",
    },
    {
      id: 2,
      name: "Green Apple",
      weight: "1 kg",
      price: 14.0,
      image: "/images/featuredImg.png",
    },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div onClick={onClose} className="absolute inset-0 bg-black/40" />

      <div
        className={`
          fixed right-0 top-0 w-90 g:w-full h-full sm:w-[350px] max-w-full bg-white shadow-xl
          flex flex-col
          transition-all ease-in-out duration-500
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-400">
          <h2 className="text-base font-semibold">
            Shopping Card{" "}
            <span className="font-normal">({cartItems.length})</span>
          </h2>
          <Link
            onClick={onClose}
            className="text-xl text-gray-500 hover:text-green-600 transition-colors"
            aria-label="Close"
            tabIndex={0}
          >
            <div className="flex items-center gap-1 text-sm text-gray-900">
               <MdOutlineClose size={18} /> Close
            </div>
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-2">
          {cartItems.map((item, idx) => (
            <div key={item.id}>
              <div className="flex items-center justify-between gap-2 py-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1 ml-3 min-w-0">
                  <div className="font-semibold text-sm truncate">
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {item.weight} ×{" "}
                    <span className="font-semibold text-black">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
                <Link
                  className="text-gray-400 hover:text-red-500 transition-colors text-lg"
                  aria-label="Remove"
                  tabIndex={0}
                >
                  <MdOutlineClose />
                </Link>
              </div>
              {idx !== cartItems.length - 1 && (
                <div className="border-b border-gray-200" />
              )}
            </div>
          ))}
        </div>

        <div className="w-full px-5 pt-2 pb-5 bg-white border-t border-gray-200 sticky bottom-0">
          <div className="flex justify-between items-center mb-4 text-sm">
            <span className="font-normal">{cartItems.length} Product</span>
            <span className="text-lg font-bold">
              ${cartItems.reduce((t, i) => t + i.price, 0).toFixed(2)}
            </span>
          </div>
          <Link
            to="/checkout"
            className="block w-full bg-branding-success text-white text-center py-3 rounded-full font-semibold mb-2 hover:bg-green-700 transition-colors"
          >
            Checkout
          </Link>
          <Link
            to="/cart"
            className="block w-full border border-green-600  text-green-600 text-center py-3 rounded-full font-semibold hover:bg-green-50 transition-colors"
          >
            Go To Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
