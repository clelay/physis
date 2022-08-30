<template>
  <div id="entreprise">
    <div id="titre">
      <h1>{{nomEntreprise}}</h1>
      <button>Modifier</button>
    </div>
    <div id = "details">
      <img :src="require(`@/assets/${logo}`)" alt="Logo entreprise" width="300" height="300"/>
      <div id="listeProjets">
        <h2>Mes informations</h2>
        <div id="encart">
          <p>Type de mon entreprise : {{type}}</p>
          <p>Contact avec Physis Solutions : {{contact}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      nomEntreprise : "Mon entreprise",
      logo : 'logoEntreprise.png',
      type : "Entreprise",
      contact: "M. Gérard"
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#entreprise{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2%;
  
}

#titre{
  display: flex;
  flex-direction: row;
}


button{
  background-color: white;
  color: black;
  border: 2px solid #4CAF50;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  width: auto;
  height: 40px;

  margin-left: 40%;
  font-size: medium;
  font-family: Avenir;
  border-radius: 2px;
  
  align-items : flex-end;
}

button:hover{
  background-color: #4CAF50;
  color: white;    
}

#details{
  display: flex;
  flex-direction: row;

}

#listeProjets{
  display: flex;
  flex-direction: column;
  margin-left: 5%;

}

#encart{
  border: 2px solid #4CAF50;
  width: auto;
  margin : 3%;
  height: 200px;
  border-radius: 2px;
  text-align: left;
  overflow-y: auto;
}


</style>
