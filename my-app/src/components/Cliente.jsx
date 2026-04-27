function Cliente({nomeDigitado, excluir}) {
    return(
    <>
    <div className="con-cliente">
        <span>{nomeDigitado}</span>
    </div>
    <div className="con-dadosCliente">
        
    </div>
    <button className="con-excluir" onClick={excluir}>Excluir</button>
    </>
    )
}
export default Cliente