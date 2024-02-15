export default function maisInfos(){
 

    const infosPerguntas = document.querySelectorAll('[data-accordion="js-accordion"], .agenda-lista-box-title, .destinos-infos-box-title')
        
        if(infosPerguntas.length){
        
        function listClick(){
        
        this.classList.toggle('ativo');
      
        // Encontre a resposta associada à pergunta clicada
         const infoRespostas = this.nextElementSibling;
      
         // Se encontrar a resposta associada, aplique a classe 'ativo'
         if (infoRespostas) {
             infoRespostas.classList.toggle('ativo');
         }
      }
        
        
      infosPerguntas.forEach((item) => {
        
            item.addEventListener('click', listClick);
        });
    }
}