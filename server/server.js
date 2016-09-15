Meteor.methods({
	clear:function(){
		Postit.update({id : "clicked"}, {$set : {id : ""}})
	},

	sendoui:function(){
		Postit.update({_id : "6mbYjdoirf6kKFZtt"}, {$set : {id : "oui"}})
	},

	sendnon:function(){
		Postit.update({_id : "6mbYjdoirf6kKFZtt"}, {$set : {id : "non"}})
	},

	sendeuh:function(){
		Postit.update({_id : "6mbYjdoirf6kKFZtt"}, {$set : {id : "euh"}})
	},
	
	sendouiwhite:function(){
		Postit.update({_id : "6mbYjdoirf6kKFZtt"}, {$set : {id : "ouiwhite"}})
	},
	sendnonwhite:function(){
		Postit.update({_id : "6mbYjdoirf6kKFZtt"}, {$set : {id : "nonwhite"}})
	},
	sendeuhwhite:function(){
		Postit.update({_id : "6mbYjdoirf6kKFZtt"}, {$set : {id : "euhwhite"}})
	}


});

