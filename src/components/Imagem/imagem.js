import React from "react";
import styles from "./imagem.module.css";

function Imagem({ foto, classe }) {
	return (
		<img
			className={classe == undefined ? styles.imgContato : styles.imagemHome}
			src={foto}
		/>
	);
}

export default Imagem;