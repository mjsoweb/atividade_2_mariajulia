// projeto/main.mjs
import PJ from './pessoas/PJ.mjs';
import IEclss, { IEfunc, IEjson } from './objetos/IE.mjs';

console.log("=== INICIANDO TESTES DO SISTEMA ===\n");

// 1. Criando dois objetos da classe PJ (Testando herança e métodos herdados)
const pj1 = new PJ();
pj1.setNome("Mariana Souza");          // Método herdado de Pessoa
pj1.setEmail("mariana@tech.com.br");    // Método herdado de Pessoa
pj1.setCNPJ("12.345.678/0001-99");      // Método próprio de PJ
pj1.setRazaoSocial("Tech Solutions S.A."); // Método próprio de PJ

const pj2 = new PJ();
pj2.setNome("Roberto Alves");
pj2.setEmail("roberto@logistica.com.br");
pj2.setCNPJ("98.765.432/0001-11");
pj2.setRazaoSocial("Global Logística LTDA");

// 2. Testando o operador instanceof (Parte 8)
console.log("--- Teste de Segurança (instanceof) ---");
const testeIE = new IEclss("0000", "SP");
const objetoFalso = { nome: 'Empresa Falsa', email: 'falsa@email.com' };

console.log("Tentativa com objeto comum (deve ser false):", testeIE.setPJ(objetoFalso));
console.log("Tentativa com objeto PJ real (deve ser true):", testeIE.setPJ(pj1));
console.log("");

// 3. Configurando as três estruturas de Inscrição Estadual (Parte 7)
// Usando IEclss
const ieClasse = new IEclss("111222333", "DF");
ieClasse.setPJ(pj1);

// Usando IEfunc()
const ieFabrica = IEfunc("444555666", "SP");
ieFabrica.setPJ(pj2); // Usando a segunda PJ (Desafio Extra 2)

// Usando IEjson
IEjson.setNumero("777888999");
IEjson.setEstado("RJ");
IEjson.setDataRegistro(new Date());
IEjson.setPJ(pj1);

// 4. Desafio Avançado: Função reutilizável para exibir os dados
function mostrarIE(ie) {
    console.log("=========================================");
    console.log("=== Inscrição Estadual ===");
    console.log(`Número: ${ie.getNumero()}`);
    console.log(`Estado: ${ie.getEstado()}`);
    console.log(`Data de Registro: ${ie.getDataRegistro().toLocaleString('pt-BR')}`);
    
    const empresa = ie.getPJ();
    if (empresa) {
        console.log("\n=== Pessoa Jurídica ===");
        console.log(`Nome: ${empresa.getNome()}`);
        console.log(`E-mail: ${empresa.getEmail()}`);
        console.log(`CNPJ: ${empresa.getCNPJ()}`);
        console.log(`Razão Social: ${empresa.getRazaoSocial()}`);
    } else {
        console.log("\nPessoa Jurídica: Nenhuma associada.");
    }
    console.log("=========================================\n");
}

// 5. Relatório Final (Parte 9)
console.log("=== RELATÓRIO FINAL DO SISTEMA ===");

console.log("\n[1] Consultando via IEclss (Classe):");
mostrarIE(ieClasse);

console.log("[2] Consultando via IEfunc() (Função Fábrica):");
mostrarIE(ieFabrica);

console.log("[3] Consultando via IEjson (Objeto Literal):");
mostrarIE(IEjson);

// Desafio Extra 2: Testando getPJ() diretamente para recuperar a Razão Social
console.log("--- Testando getPJ() (Desafio Extra 2) ---");
console.log(`Razão Social resgatada da IEclss: ${ieClasse.getPJ().getRazaoSocial()}`);
console.log(`Razão Social resgatada da IEfunc: ${ieFabrica.getPJ().getRazaoSocial()}`);