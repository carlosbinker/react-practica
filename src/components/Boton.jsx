// export const Boton = ({ texto, color }) => {
//   const estilos = {
//     backgroundColor: color,
//     color: "white",
//   };
//   return <button style={estilos}>{texto}</button>;
// };

// Versión de Belu del Botón. Ahora se le agrego una función saludar. NOTAR que sólo se agrega la definición de la función sin los ()
// Solamente se referencia a la función, no se la está invocando, cuando ase la invoca van los paréntesis. Si se ponen los ()
// cuando se monta el componente la función saludar se autodispararía, por eso sólo debe colocarse su referencia!

export const Boton = ({ texto, color }) => {
  const estilos = {
    backgroundColor: color,
    color: "white",
  };

  const saludar = () => {
    alert("Boton clickeado");
  };

  return (
    <button style={estilos} onClick={saludar}>
      {texto}
    </button>
  );
};
