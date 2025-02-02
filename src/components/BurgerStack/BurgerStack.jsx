// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({ stack, removeFromBurger }) => {
    return (
        <ul className="burger-stack">
            {stack.map((ingredient, idx) => (
                <li key={idx} style={{backgroundColor: ingredient.color}}>
                    {ingredient.name}
                    <button onClick={()=> removeFromBurger(idx)}>x</button>
                </li>
            ))}
        </ul>
    )
}
  export default BurgerStack
