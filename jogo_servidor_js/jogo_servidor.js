const nomem = process.env.NOME_DO_MAPA;
const mult = process.env.MULTIPLICADOR_XP;
const modo = process.env.MODO_DE_JOGO;

console.log('/n=== SERVIDOR ONLINE ===');
console.log('Mapa Atual: $(NOME_DO_MAPA)');

if (MODO_DE_JOGO === "MANUTENÇÃO") {
    console.log("STATUS: Servidor fechado para reparos. Erro 503.");
} else if (MODO_DE_JOGO === "EVENTO") {
    console.log('STATUS: EVENTO ATIVO! Seu XP total modificado será: $(MULTIPLICADOR_XP * 2');
} else {
    console.log('STATUS: Jogando normalmente: XP padrão $(MULTIPLICADOR_XP)');
}