
const myForm = document.getElementById("myForm"); // O Document Object Model (DOM) é uma interface de programação para os documentos HTML
const agree = document.getElementById('agreement');
const btn = document.getElementById('btn');

agree.addEventListener('change', enableSubmit); // Evento adicionado ao 'escutar' o change do checkbox

function enableSubmit() { // ira habilitar o botão Gravar após concordar com os termos
  btn.disabled = !agree.checked;
}

myForm.addEventListener('submit',gravar); // Evento adicionado ao 'escutar' o submit
// test
// função gravar proveniente do evento 'escutado' pelo submit
function gravar(e){
    e.preventDefault(); // evita que a página seja fechada quando receber o submit do formulário
    const formData = new FormData(this); // cria o objeto formData, que recebe o this que é o nosso myForm
    // const searchParams = new URLSearchParams(); // vai criar um objeto com uma série série de prototypes, dentre eles o append que sera usado na sequência
    
    // for(const par of formData){
    //     searchParams.append(par[0],par[1],par[2],par[3],par[4]); // o objeto criado recebe através do for of 
    // }
    // O Fetch é uma Promise, ou seja se executot corretamente no arquivo cadstrodecliente.php 
    fetch('cadastrodecliente.php',{ // então (then) podera efetuar a limpeza dos imputs e retornar o alert
        method:'POST',
        body:formData
    }).then(function(response){
        document.getElementById('nome').value="";
        document.getElementById('email').value="";
        document.getElementById('cpf').value="";
        document.getElementById('telefone').value="";
        document.getElementById('endereco').value=""; 
        return alert('Dados gravados com sucesso!');
    }).catch(function(error){
        console.log(error);
    });
}


