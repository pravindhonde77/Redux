import React from 'react'
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

/*Functionality
1.The user should be able to toggle the checkboxes.
2.The user should be ablr to update that data in url search Params
3.The checkbox should remain selected (if it was already selected),
when the page refreshes.

*/

const FilterSort = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [sortBy, setSortBy] = useState(searchParams.getAll
        ("sortBy") || "")
    console.log(searchParams.getAll("genre"))
    const [category, setCategory] = useState(searchParams.getAll("genre") || []);

    const handleFilter = (e) => {
        const option = e.target.value;
        //if the option is present in the category array,remove it,
        //else and it to the category array.

        let newCategory = [...category]
        if (newCategory.includes(option)) {
            //remove it
            newCategory.splice(newCategory.indexOf(option), 1)
        } else {
            //add it
            newCategory.push(option)
        }
        setCategory(newCategory)
    }

    const handleSortBy = (e) => {
        setSortBy(e.target.value)
    }

    useEffect(() => {
        const params = {};
        category && (params.genre = category);
        sortBy && (params.sortBy = sortBy)
        setSearchParams(params);
    }, [category, setSearchParams, sortBy]);


    // console.log(category)
    return (
        <div>
            <h2>Filter</h2>
            <div>
                <input type="checkbox"
                    defaultChecked={category.includes("K-Pop")}
                    value="K-Pop" onChange={handleFilter} />
                <label>K-Pop</label>
            </div>
            <div>
                <input type="checkbox"
                    defaultChecked={category.includes("Country")}
                    value="Country" onChange={handleFilter} />
                <label>Country</label>
            </div>

            <div>
                <input type="checkbox"
                    defaultChecked={category.includes("Pop")}
                    value="Pop" onChange={handleFilter} />

                <label>Pop</label>
            </div>

            <div>
                <input type="checkbox"
                    defaultChecked={category.includes("Heavy Metal")}
                    value="Heavy Metal" onChange={handleFilter} />
                <label>Heavy Metal </label>
            </div>


            <h2>Sort</h2>

            <div onChange={handleSortBy}>
                <div>
                    <input type="radio" value="asc" name="sortBy"
                        defaultChecked={sortBy === "asc"} />
                    <label>Ascending</label>
                </div>

                <div>
                    <input type="radio" value="desc" name="sortBy"
                        defaultChecked={sortBy === "desc"} />
                    <label>Descending</label>
                </div>
            </div>
        </div>
    )
}

export default FilterSort