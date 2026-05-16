import { X } from "lucide-react";
import { useCart, CartItem } from "@/hooks/useCart";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[₹,]/g, ""));
    return sum + price * item.quantity;
  }, 0);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 z-50 h-screen w-full max-w-md overflow-y-auto bg-background shadow-xl">
        {/* Header */}
        <div className="sticky top-0 border-b bg-background p-3 sm:p-4 flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="rounded-md p-1 hover:bg-muted"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 p-3 sm:p-4">
          {cart.length === 0 ? (
            <div className="flex h-40 items-center justify-center text-center text-muted-foreground">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-2 sm:gap-3 rounded-lg border p-2 sm:p-3"
                >
                  <div className="aspect-square w-14 sm:w-16 overflow-hidden rounded bg-muted">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs sm:text-sm font-semibold leading-tight line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-primary">
                      {item.price}
                    </p>
                    <div className="mt-1.5 sm:mt-2 flex items-center gap-1 sm:gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="flex h-5 sm:h-6 w-5 sm:w-6 items-center justify-center rounded border text-xs hover:bg-muted"
                      >
                        -
                      </button>
                      <span className="w-4 text-center text-xs font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="flex h-5 sm:h-6 w-5 sm:w-6 items-center justify-center rounded border text-xs hover:bg-muted"
                        disabled={item.quantity >= 9}
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-[10px] sm:text-xs text-destructive hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t bg-background p-3 sm:p-4 space-y-2 sm:space-y-3">
            <div className="flex justify-between text-xs sm:text-sm">
              <span className="text-muted-foreground">Subtotal:</span>
              <span className="font-semibold">₹{total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-xs sm:text-sm">
              <span className="text-muted-foreground">Shipping:</span>
              <span className="font-semibold text-green-600">Free</span>
            </div>
            <div className="border-t pt-2 sm:pt-3 flex justify-between">
              <span className="text-sm sm:text-base font-bold">Total:</span>
              <span className="text-base sm:text-lg font-bold text-primary">
                ₹{total.toLocaleString()}
              </span>
            </div>
            <button className="w-full rounded-lg bg-primary py-2 sm:py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition">
              Proceed to Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full rounded-lg border py-2 sm:py-3 text-sm font-semibold hover:bg-muted transition"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
