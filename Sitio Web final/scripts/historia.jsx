const mainHistoria = document.getElementById('root');

const App = () => {
	return (
		<section className="historia">
			<h2 id="historia__title">¿Quiénes Somos?</h2>
            <p id="historia__p">La empresa nace de la necesidad de un ingreso adicional para nuestra familia, mi esposo para poder estudiar en quinto año de colegio, trabajaba en un taller de sillas de sondaleza. Hace unos 7 años encontramos el problema que las personas tenían las sillas viejas y no había quien se las reparara, por lo que empezamos a dar ese servicio en la zona. Innovamos en ese momento al ofrecer dicho servicio por Facebook ya que nadie lo estaba haciendo. En enero del 2020 mi esposo quería participar en un evento de ciclismo de precio alto, por lo que ideamos empezar a vender sillas nuevas en el estilo acapulco que estaban de moda. Al llegar la pandemia y quedar mi esposo medio tiempo, el fin de la idea cambio y empezamos a verlo como una empresa familiar, él fabricando y yo promocionando y vendiendo en redes sociales, ambos entregando a domicilio.</p>
            <img className="historia__img" src="/multimedia/extras/dueños2.jpg" alt="Foto asociada a la Historia"/>
		</section>
	)
}

ReactDOM.render(<App />, mainHistoria);

mainHistoria.style.display = "grid";
mainHistoria.style.placeContent = "center"
document.getElementById("historia__title").style.color = "#F7A02D"
document.getElementById("historia__p").style.textShadow = "3px 3px 6px rgba(0, 0, 0, 0.336)"
