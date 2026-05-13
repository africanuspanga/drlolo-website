"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IconX, IconPlus, IconMinus, IconShoppingBag, IconTrash } from "@tabler/icons-react";
import { useCart } from "@/lib/cart-context";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export function CartButton() {
  const { items, totalItems, isOpen, setIsOpen, removeItem, updateQuantity, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    const lines = items.map(
      (i) => `• ${i.name} x${i.quantity}`
    );
    const text = `Hello Dr Lolo Cosmetics, I would like to order:\n\n${lines.join("\n")}\n\nPlease let me know the total price and delivery options.`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <>
      {/* Floating cart trigger */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#c9a24d] text-[#2d6933] shadow-lg hover:scale-110 transition-transform"
        aria-label="Open cart"
      >
        <IconShoppingBag size={24} />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#2d6933] text-[10px] font-bold text-white">
            {totalItems}
          </span>
        )}
      </motion.button>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-black/50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h2 className="text-lg font-bold text-[#1f4a24]">Your Cart</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-500 hover:text-[#2d6933]"
                  aria-label="Close cart"
                >
                  <IconX size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
                    <IconShoppingBag size={48} className="mb-4" />
                    <p className="text-sm">Your cart is empty.</p>
                    <p className="text-xs mt-1">Add products to get started.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.name}
                        className="flex gap-4 rounded-xl border border-gray-100 p-3"
                      >
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-[#f7f3ea]">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-[#1f4a24] truncate">
                            {item.name}
                          </h4>
                          <div className="mt-2 flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.name, item.quantity - 1)
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50"
                              aria-label="Decrease quantity"
                            >
                              <IconMinus size={14} />
                            </button>
                            <span className="text-sm font-medium w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.name, item.quantity + 1)
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50"
                              aria-label="Increase quantity"
                            >
                              <IconPlus size={14} />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.name)}
                          className="self-start p-2 text-gray-400 hover:text-red-500"
                          aria-label="Remove item"
                        >
                          <IconTrash size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {items.length > 0 && (
                <div className="border-t border-gray-100 p-6 space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Total items</span>
                    <span className="font-semibold text-[#1f4a24]">{totalItems}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:bg-[#128C7E] transition-colors"
                  >
                    Send Order on WhatsApp
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full rounded-full border border-gray-200 px-5 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
