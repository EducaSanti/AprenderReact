import { useState } from "react"; //Hooks permiten añadir cierta funcionalidad a los componentes de react, para dotar de mas funcionalidad a los componentes

export function TwitterFollowCard({
  children,
  userName = "unknown", initialIsFollowing
}) {
  //Valor por defecto username = 'unkonow'
  // const imageSrc = 'https://unavatar.io/${userName}'; una forma de hacer esto para iamgenes

  // No modificar las props (property = userName,..) deben ser inmutables

  //Hay una prop especial que es children que devuelve lo que envuelve un elemento Ej. de boton seria el texto seguir esto lo puedes hacer
  // en la app.jsx <twitterfollowcard userName="..">Miguel angel duran</twitterfollowcard>
  // Y luego aqui en vez de {name} pones children y eso renderizaria miguel angel duran

  /*  const state = useState(false);
  const isFollowing = state[0];
  const setIsFollowing = state[1]; */

  //Valor del estado y la funcion que actualizara el estado, si se utiliza una prop para inicializar un estado soolo se hace una vez.
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

const handleClick = () => {
    setIsFollowing(!isFollowing);
};

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          //   src={imageSrc}
          alt="El avatar de midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          {/* <span className="tw-followCard-infouserName">{formatUserName(userName)}</span>  para esto debes poner formatuser como parametro*/}
          <span className="tw-followCard-infouserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>{text}</button>
      </aside>
    </article>
  );
}
