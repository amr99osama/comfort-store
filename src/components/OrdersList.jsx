import { useLoaderData } from 'react-router-dom'
import day from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
day.extend(advancedFormat)
const OrdersList = () => {
    const { orders, meta } = useLoaderData();
    return (
        <div className="mb-4 capitalize">
            <h4 className="text-lg font-semibold mt-4 mb-2">Total Orders: {meta.pagination.total}</h4>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Number of Products</th>
                            <th>Items Purchased</th>
                            <th>Color</th>
                            <th>Cost</th>
                            <th className='hidden sm:block'>Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => {
                            const id = order.id;
                            const { name, address, cartItems, numItemsInCart, orderTotal, createdAt } = order.attributes;
                            const orderDate = day(createdAt).format('MMMM Do YYYY, h:mm A');
                            return (
                                <tr key={id}>
                                    <td>{name}</td>
                                    <td>{address}</td>
                                    <td>{numItemsInCart}</td>
                                    <td>
                                        <div className="flex gap-1 flex-wrap">
                                            {cartItems.map((item, index) => (
                                                <span key={index} className="badge badge-primary" style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                    {item.title}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex gap-1">
                                            {cartItems.map((item, index) => (
                                                <div
                                                    key={index}
                                                    style={{
                                                        backgroundColor: item.productColor,
                                                        width: '20px',
                                                        height: '20px',
                                                        borderRadius: '50%',
                                                    }}
                                                    title={item.productColor}
                                                ></div>
                                            ))}
                                        </div>
                                    </td>
                                    <td>{orderTotal}</td>
                                    <td className='hidden sm:block'>{orderDate}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div >
        </div >
    )
}
export default OrdersList