var  app = angular.module("pensadores", []);
/* Pensamentos Nietzsche*/
	angular.module("pensadores").controller("pensamentos", function($scope){
		$scope.perfilNietzsche = [
			{
				nome: "Friedrich Nietzsche",
				work: "Filólogo, filósofo, crítico cultural, poeta e compositor", 
				nat: "Alemão",
				desc: "Friedrich Wilhelm Nietzsche (Röcken, 15 de outubro de 1844 — Weimar, 25 de agosto de 1900) foi um filólogo, filósofo, crítico cultural, poeta e compositor alemão do século XIX.[1] Ele escreveu vários textos críticos sobre a religião, a moral, a cultura contemporânea, filosofia e ciência, exibindo uma predileção por metáfora, ironia e aforismo."
			}

		];
		$scope.nietzche = [
			{frase: "Há uma inocência na admiração: é a daquele a quem ainda não passou pela cabeça que também ele poderia um dia ser admirado."},
			{frase: "Deus está morto: mas, considerando o estado em que se encontra a espécie humana, talvez ainda por um milénio existirão grutas em que se mostrará a sua sombra."},
			{frase: "E ainda não és livre, ainda procuras a liberdade. As tuas buscas fizeram-te insone e inquieto de maneira excessiva."},
			{frase: "A vontade de verdade ainda nos há de arrastar para muitas aventuras ,essa célebre veracidade de que todos os filósofos falaram até os dias de hoje com veneração."},
			{frase: "Não existe mais ninguém tão inocente para ainda colocar o sujeito EU na condição de´Penso´."}
		];

// /* Pensamentos Mario Quintana*/
// 	$scope.quintana = [
// 		{frase: "A preguiça é a mãe do progresso. Se o homem não tivesse preguiça de caminhar, não teria inventado a roda."},
// 		{frase: "Ah, esses moralistas... Não há nada que empeste mais do que um desinfetante"},
// 		{frase: "Se as coisas são inatingíveis... ora! Não é motivo para não querê-las... Que tristes os caminhos, se não fora a presença distante das estrelas!"},
// 		{frase: "E um dia os homens descobrirão que esses discos voadores estavam apenas estudando as vidas dos insetos..."},
// 		{frase: "Maravilhas nunca faltaram ao mundo; O que sempre falta é a capacidade de senti-las e admirá-las."}
// 	];

// /* Pensamentos Machado de Assis*/
// 	$scope.assis = [
// 		{frase: "Cada qual sabe amar a seu modo; O modo, pouco importa; O essencial é que saiba amar."},
// 		{frase: "Deus, para a felicidade do homem, inventou a fé e o amor. O Diabo, invejoso, fez o homem confundir fé com religião e amor com casamento."},
// 		{frase: "Não levante a espada sobre a cabeça de quem te pediu perdão."},
// 		{frase: "A vida é cheia de obrigações que a gente cumpre por mais vontade que tenha de as infringir deslavadamente."},
// 		{frase: "Esquecer é uma necessidade. A vida é uma lousa, em que o destino, para escrever um novo caso, precisa apagar o caso escrito."}
// 	];
});