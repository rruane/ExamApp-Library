var ExamApp = {
	init: function initExam(o) {
		var current = this.current = o.current,
			M = function model(o.db) {

				return model;
			},
			exam = this,
			modules = {
				take: function() {

				},
				grade: function() {

				},
				manageQuestions: function() {

				},
				manageAttempts: function() {

				}
			},
			mods = Array.isArray(o.modules) ? o.modules : [String(o.modules)];
		mods.forEach(function(module) {
			exam[module] = modules[module] || function undefinedModule() {return undefined};
		});
		return exam;
	}
}


// --> //ScriptDb.getMyDb()
// --> //ScriptProperties
// --> //Modules
// <-- // 
