
 function criptografar() {
     let texto = document.getElementById("texto").value;
      let crip= texto
                .replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
            document.getElementById("copiarTexto").value = crip;
        }

function descriptografar() {
        let texto = document.getElementById("texto").value;
        let descrip = texto
                  .replace(/enter/g, "e")
                  .replace(/imes/g, "i")
                  .replace(/ai/g, "a")
                  .replace(/ober/g, "o")
                  .replace(/ufat/g, "u");
        document.getElementById("copiarTexto").value = descrip;
      }


        document.getElementById('copiarTextonext').addEventListener('click', copiarTextonext);

function copiar() {

        document.querySelector("#copiarTexto").select();
        document.execCommand("copy");

}
