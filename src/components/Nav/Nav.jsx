// Componente presentacional (no tiene lógica)
// El componente switch de JS es similar al match de Python
// Esto es una SPA, por lo tanto se van a estar intercambiando vistas y componenetes. Se montan y dsmontan componentes.
export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="./#">Home</a>
                </li>
                <li>
                    <a href="./#">DLC</a>
                </li>
                <li>
                    <a href="./#">Juegos</a>
                </li>
            </ul>
        </nav>
    );
}