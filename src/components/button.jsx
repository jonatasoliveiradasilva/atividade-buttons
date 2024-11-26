function Button({ corFundo, corTexto }) {

    const clicar = () => {
        alert(`Você clicou no botão ${corFundo}`);
    };

    return (
        <>
            <button
                className="botao"
                style={{ backgroundColor: corFundo }}
                onClick={clicar}
            >
                {corTexto}
            </button>
        </>
    );
}

export default Button;
