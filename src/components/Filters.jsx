import { Form, useLoaderData, Link } from 'react-router-dom'
import FormsInput from './FormsInput'
import FormSelect from './FormSelect'
import FormRange from './FormRange'
import FormCheckbox from './FormCheckbox'
const Filters = () => {
    const { meta, params } = useLoaderData();
    const { search, company, category, order, price, shipping } = params;
    return (
        <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center ">
            {/* SEARCH  */}
            <FormsInput
                label="Search"
                name="search"
                type="search"
                size="input-sm"
                defaultValue={search || ''} // Ensure search input is controlled
            />
            {/* Companies  */}
            <FormSelect
                label="Select Company"
                name="company"
                list={meta.companies}
                // defaultValue="all"
                size="select-sm"
                defaultValue={company || 'all'} // Ensure company select is controlled
            />

            {/* Categories  */}
            <FormSelect
                label="Select Category"
                name="category"
                list={meta.categories}
                defaultValue={category || 'all'} // Ensure company select is controlled
                size="select-sm"
            />
            {/* Order  */}
            <FormSelect
                label="Sort By"
                name="order"
                list={['a-z', 'z-a', 'high', 'low']}
                defaultValue={order || 'all'} // Ensure company select is controlled
                size="select-sm"
            />
            {/* Price  */}
            <FormRange
                label="Price Range"
                name="price"
                size='range-sm'
                price={price} // Ensure price range is controlled
            ></FormRange>

            {/* Shipping  */}
            <FormCheckbox
                label="Free Shipping"
                name="shipping"
                size="checkbox-sm"
                defaultValue={shipping || false} // Ensure shipping checkbox is controlled
            />
            {/* BUTTONS  */}
            <button type="submit" className="btn btn-primary btn-sm">
                Search
            </button>
            <Link to="/products" className="btn btn-accent btn-sm">
                Reset
            </Link>
            {/* PRICE RANGE  */}
        </Form>
    )
}

export default Filters
