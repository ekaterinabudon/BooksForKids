import { IAmDeleteCartItemBtnProps } from "@/types/cart";

const DeleteCartItemBtn = ({
    btnDisabled,
    callback,
    className,
}: IAmDeleteCartItemBtnProps) => (
    <button
    className={`delete_cart_item_btn ${className}`}
    onClick={callback}
    disabled={btnDisabled}
    >
        <span />
    </button>
)

export default DeleteCartItemBtn;