import Button from "../../ui/Button";
import { useCheckout } from "../check-in-out/useCheckout";
function CheckoutButton({ bookingId }) {
  const { checkout, isCheckOut } = useCheckout();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
