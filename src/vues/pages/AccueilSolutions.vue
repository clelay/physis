<template>
  <div class="presentation">
    <h1>Utiliser Physis Solutions pour la réalisation de vos bilans carbone !</h1>
    <div class = "container">
      <div class="encart">
        <p>
          News rattachées à l'actualité de l'application et de l'entreprise et des informations générales.
        </p>
      </div>
      <div class="containerBouton">
        <button>Lancement de l'application</button>
        <button>Mise à jour logiciel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



  .presentation{
    display: flex;
    flex-direction: column;
  }

  .container{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-self: center;
    margin-top: 3%;
  }

  .encart{
    border: 2px solid #4CAF50;
    width: 30%;
    height: 200px;
    border-radius: 2px;

  }

  .containerBouton{
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;  
  }

  button{
    background-color: white;
    color: black;
    border: 2px solid #4CAF50;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    margin: 15%;
    width: 120%;
    height: 40px;
    font-size: medium;
    font-family: Avenir;
    border-radius: 2px;
  }

  button:hover{
    background-color: #4CAF50;
    color: white;    
  }

</style>
