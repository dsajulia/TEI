// 1. Criar a introdução e o menu em uma única janela de prompt
// Usamos \n para quebrar as linhas como pedido no slide 13
let escolha = prompt(
  "O MISTÉRIO NO IFFAR URUGUAIANA\n\n" +
  "São 21h, você está sozinho no laboratório e ouve um barulho estranho na porta.\n" +
  "O que você faz?\n" +
  "1 - Investigar a porta silenciosamente\n" +
  "2 - Sair correndo pela janela\n" +
  "3 - Gritar: 'QUEM ESTÁ AÍ?'"
);

// 2. Estrutura de controle para verificar a decisão
// Note o uso de === "1" (string) conforme a dica do slide 14
if (escolha === "1") {
  // Desfecho exibido no console.log como pedido no slide 13
  console.log("RESULTADO: Você abre a porta devagar e vê o guarda fazendo a ronda. Que susto!");

} else if (escolha === "2") {
  console.log("RESULTADO: Você pula a janela, mas percebe que deixou seu notebook e a chave de casa no laboratório!");

} else if (escolha === "3") {
  console.log("RESULTADO: O barulho para subitamente... mas as luzes do corredor se apagam. Você sente um calafrio!");

} else {
  // O else obrigatório para tratar opções inválidas (slide 13)
  console.log("OPÇÃO INVÁLIDA: Você ficou paralisado de medo e não conseguiu decidir a tempo!");
}