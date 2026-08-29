class Adult {
	//name is String, isIA is bool (false=instructor), grades is list of ints (0=K)
	constructor(name, isIA, grades) {
		this.name = name;
		this.isIA = isIA;
		this.grades = grades;
	}
}

class Service {
	//name, grade teacher are student info; just pull it from the sheet (NOT separate student class)
	
	//name, teacher is String
	//grade is int (0=K)
	//cat is category... string?
	//isSupport is bool (false=instruction)
	//isPushIn is bool:
	//	true = MUST push in
	//	false = MUST pull out
	//time is int (minutes)
	constructor(name, grade, teacher, cat, isSupport, isPushIn, time) {
		this.name = name;
		this.grade = grade;
		this.teacher = teacher;
		this.cat = cat;
		this.isSupport = isSupport;
		this.isPushIn = isPushIn;
		this.time = time;
	}
}

//when reading from sched, block is stored as next index in sched[grade] list, so store the labels here:
//	blocklabels[i] is the label for sched[grade][i]
blocklabels = []

sched = {}
//key is grade # (0=K)
//val is list of 10-min blocks in order

out = {}
//key is Adult name (one for each)
//val is a list indexed to 10 min blocks, value is which service

//write `out` to spreadsheet