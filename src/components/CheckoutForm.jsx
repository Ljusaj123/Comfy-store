import { Form, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "./form";
import { customFetch, formatPrice } from "../utils";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/cartSlice";

const action =
  (store, queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      await customFetch.post(
        "/orders",
        { data: info },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      queryClient.removeQueries(["orders"]);

      store.dispatch(clearCart());
      toast.success("order placed successfully");
      return redirect("/orders");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error placing your order";

      toast.error(errorMessage);
      if (error?.response?.status === 401 || error?.response?.status === 403)
        return redirect("/login");
      return null;
    }
  };

const CheckoutForm = () => {
  return (
    <Form method="POSt" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl">Shipping Information</h4>
      <FormInput type="text" name="name" label="first name" />
      <FormInput type="text" name="address" label="address" />
      <div className="mt-4">
        <SubmitBtn text="Place Your Order" />
      </div>
    </Form>
  );
};

CheckoutForm.action = action;
export default CheckoutForm;
