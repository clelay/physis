<template>
  <div id="page">
    <h1>Mes projets</h1>
    <div id="encart">
        <div v-for="(projet, index) in projets" :key="index">
            <h2>{{projet.client}}</h2>
            <div id="informations1">
                <img :src="require(`@/assets/${projet.logo}`)" alt="Logo entreprise" width="100" height="100"/>
                <div class="details">
                    <p class="infos">Secteur : {{projet.secteur}}</p>
                    <p class="infos">Type d'organisme : {{projet.type}}</p>
                    <p class="infos">Format : {{projet.format}}</p>
                </div>
                <div class="details">
                    <p class="infos">Nombre de modules enregistrés : {{projet.nbModules}}</p>
                    <p class="infos">Emissions calculées : {{projet.emissions}}</p>
                </div>
            </div>
            <div id="informations2">
                <button >Ouvrir</button>
                <button>Supprimer</button>
                <button>Informations</button>
            </div>
            
            <p id="trait">________________________</p>
        </div>  
    </div>
  </div>
</template>

<script>
export default {

  data()  {
    return {
      projets :[
        {client: "Engie", logo: "logoBlanc.png", responsable : "Coline", contact: "M. Martin", type: "Entreprise", format: "Bilan carbone", secteur: "Energie", nbModules : 0, emissions : 0, vue: "/engie"},
        {client: "Boulangerie Paul", logo: "logoBlanc.png", responsable : "Coline", contact: "Mme. Placard", type: "Entreprise", format: "Bilan GES", secteur: "Alimentaire", nbModules : 0, emissions : 0, vue: "/boulangerie1"},
        {client: "Ville de Lyon", logo: "logoBlanc.png", responsable : "Félix", contact: "Mme. Le Grand", type: "Collectivité", format: "Bilan carbone", secteur: "Transport", nbModules : 0, emissions : 0, vue: "/villeLyon"},
        {client: "Boulangerie Paul", logo: "logoBlanc.png", responsable : "Félix", contact: "M. Placard", type: "Entreprise", format: "Bilan carbone", secteur: "Alimentaire", nbModules : 0, emissions : 0, vue: "/boulangerie2"},
        {client: "ONG batiment", logo: "logoBlanc.png", responsable : "Félix", contact: "Mme. Iris", type: "Organisme", format: "Bilan GES", secteur: "Bâtiment", nbModules : 0, emissions : 0, vue: "/ongBatiment"},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#entreprise{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2%;
}

#informations1{
  display: flex;
  flex-direction: row;
  align-self: center;
}

#informations2{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.details{
    display: flex;
    flex-direction: column;
    width: 100%;
}


#listeProjets{
  display: flex;
  flex-direction: column;

}

#encart{
  border: 2px solid #4CAF50;
  width: 100%;
  height: auto;
  border-radius: 2px;
  text-align: left;
  overflow-y: auto;
}

.infos{
    margin-left: 2%;
}

#trait{
  text-align: center;
}

h2{
  color: #4CAF50;
  margin-left: 2%;
}


button{
  background-color: white;
  color: black;
  border: 2px solid #4CAF50;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  width: 120px;
  height: 40px;
  margin-left: 10%;

  font-size: medium;
  font-family: Avenir;
  border-radius: 2px;
}

button:hover{
  background-color: #4CAF50;
  color: white;    
}


</style>
