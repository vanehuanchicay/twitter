
function add(){

    //llamo a mi ID ingreso donde iran los pensamientos
    var comment = document.getElementById("ingreso").value;

    //Limpio mi cuadro de ingreso
    document.getElementById("ingreso").value == "";


    // si ingresa algo vacio retorne un alerta
    if (document.getElementById("ingreso").value === ""){
      alert("Debes ingresar un pensamiento");

    }

    else {
      var cont = document.getElementById("contador");
      var nameSpan = document.createElement("span"); // span con el nombre de usuario
      var dateSpan = document.createElement("span"); // span con fecha de ingreso
      var tweetP = document.createElement("p"); // parrafo de pensamientos

      // agrego mis elementos creados al contenedor contador
      cont.appendChild(nameSpan);
      cont.appendChild(dateSpan);
      cont.appendChild(tweetP);

      nameSpan.textContent = "Michael Myers ";
      dateSpan.textContent = new Date();
      tweetP.textContent = comment;


    var timeLine = document.getElementById ("lineaTiempo");
    timeLine.insertBefore(cont, timeLine.children[0]);

    }
  }
