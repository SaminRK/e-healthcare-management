class MedicalRecordsProvider {
	constructor() {
        this.medicalRecords = new Map();
		this.medicalRecords.set("1bjhs", {
			type: "prescription",
			prescribedBy: "Dr.Bob",
			date: "13/08/20",
			patientName: "Fazle Rafsani",
			patientAge: "23 yrs",
			patientSex: "Male",
			patientAddress: "Paltan, Dhaka",
			boxes: [
				{
					heading: "Chief Complaints",
					content: "Lorem",
				},
				{
					heading: "Examination Findings",
					content: "Lorem",
				},
				{
					heading: "Investigation",
					content: "Lorem",
				},
				{
					heading: "Provisional Diagnosis",
					content: "Lorem",
				},
				{
					heading: "Rx",
					content: "Lorem",
				},
			],
		});

		this.medicalRecords.set("h7283", {
			type: "prescription",
			prescribedBy: "Dr.Bob",
			date: "13/08/20",
			patientName: "Fazle Rafsani",
			patientAge: "23 yrs",
			patientSex: "Male",
			patientAddress: "Paltan, Dhaka",
			boxes: [
				{
					heading: "Chief Complaints",
					content: "Lorem",
				},
				{
					heading: "Examination Findings",
					content: "Lorem",
				},
				{
					heading: "Investigation",
					content: "Lorem",
				},
				{
					heading: "Provisional Diagnosis",
					content: "Lorem",
				},
				{
					heading: "Rx",
					content: "Lorem",
				},
			],
		});

		this.medicalRecords.set("1euw9", {
			type: "prescription",
			prescribedBy: "Dr.Bob",
			date: "13/08/20",
			patientName: "Fazle Rafsani",
			patientAge: "23 yrs",
			patientSex: "Male",
			patientAddress: "Paltan, Dhaka",
			boxes: [
				{
					heading: "Chief Complaints",
					content: "Lorem",
				},
				{
					heading: "Examination Findings",
					content: "Lorem",
				},
				{
					heading: "Investigation",
					content: "Lorem",
				},
				{
					heading: "Provisional Diagnosis",
					content: "Lorem",
				},
				{
					heading: "Rx",
					content: "Lorem",
				},
			],
		});
    }

    getMedicalRecord(id) {
        return this.medicalRecords.get(id);
    }

    getMedicalRecords() {
        return this.medicalRecords;
    }
}

export default MedicalRecordsProvider;