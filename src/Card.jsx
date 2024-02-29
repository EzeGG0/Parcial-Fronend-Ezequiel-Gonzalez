//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ data, classCss}) {
  return (
    <div className={classCss}>
      <p>Nombre: {data.firstName}</p>
      <p>Color Favorito: {data.favColor}</p>
    </div>
  );
}

export default Card;
