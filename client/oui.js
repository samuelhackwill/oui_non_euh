// TO DO
// grossir et grasser le corps de texte OUI NON EUH
// virer le toggle pour qu'on puisse faire "EUH NON"
// avoir un fade-out plus rapide
// avoir un fade-in très rapide pour voir si arnaud dit "oui oui"
// que le oui non reste un peu moins longtemps



Session.setDefault("admin", true)
Session.setDefault("toggle", false)


var delay=2000

Template.body.events({

  "mousedown #oui" : function(){

// quand tu cliques sur un bouton il check 
// que t'as pas déjà cliqué sur un autre bouton
// si c'est ok il balance deux actions séparés
// par un temps(delay).

    if (Session.get("toggle") === true) {
      return
    }else{
     Session.set("toggle", true)
     Meteor.call("sendoui", function(){
     })

     setTimeout(function() {
       Session.set("toggle", false)
       Meteor.call("sendouiwhite", function(){
       })
     }, delay);
   }
 },

 "mousedown #non" : function(){

    if (Session.get("toggle") === true) {
      return
    }else{
     Session.set("toggle", true)
     
     
     Meteor.call("sendnon", function(){
     })

     setTimeout(function() {
       Session.set("toggle", false)
       
       
       Meteor.call("sendnonwhite", function(){
       })
     }, delay);
   }
 },

 "mousedown #euh" : function(){

    if (Session.get("toggle") === true) {
      return
    }else{
     Session.set("toggle", true)
     
     
     Meteor.call("sendeuh", function(){
     })

     setTimeout(function() {
       Session.set("toggle", false)
       
       
       Meteor.call("sendeuhwhite", function(){
       })
     }, delay);
   }
 },



 'keyup':function(event){

  if(event.keyCode === 80){
    Session.set("admin", false)
    return
  }
  if(event.keyCode === 65){
    Session.set("admin", true)
    return
  }
}
})

Template.displayPostits.helpers({
  postits : function(){
    return Postit.find()
  }
})

/*
    Template.postit.events({
      "mouseup .postit" : function(){
        Postit.update({_id : this._id}, {$set : {id : "clicked"}})
      }

    })
    */

    Template.registerHelper("admin", function(){
      return Session.get("admin")  
    })





