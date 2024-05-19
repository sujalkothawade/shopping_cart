
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex flex-col">
      <div>

        <div className="flex">
          <img src={item.image} alt="" height={200} width={200} className="mt-5" />

          <div className="flex flex-col gap-10">
            <h1 className="text-gray-700 font-semibold text-md text-left w-40 mt-1">{item.title}</h1>
            <h1 className="w-40 text-gray-400 font-normal text-[15px] text-left truncate">{item.description}</h1>
          </div>

        </div>

        <div>
          <div className="flex flex-row gap-10">
            <p className="text-green-600 font-bold">${item.price}</p>
            <div className=""
              onClick={removeFromCart}>
              <MdDelete className="cursor-pointer mb-5 text-2xl text-red-800 rounded-full bg-red-400 p-1" />
            </div>
          </div>
          <hr></hr>
        </div>

      </div>

    </div>
  );
};

export default CartItem;
