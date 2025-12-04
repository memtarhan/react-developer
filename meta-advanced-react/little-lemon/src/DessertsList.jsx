function DessertsList(props) {
    // Implement the component here.
    return props.map((desserts) => { dessert
        <ul>
            <li>
                ´${dessert.name} - ${dessert.calories} cal.´
            </li>
        </ul>;
    })
}

export default DessertsList;
