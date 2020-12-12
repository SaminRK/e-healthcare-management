class MedicalRecordsProvider {
    static medicalRecords = new Map();

    static populate() {
        console.log("constructor called");
		MedicalRecordsProvider.medicalRecords.set("1bjhs", {
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

		MedicalRecordsProvider.medicalRecords.set("h7283", {
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

		MedicalRecordsProvider.medicalRecords.set("1euw9", {
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
	
    static getMedicalRecordKeys() {
        return [...MedicalRecordsProvider.medicalRecords.keys()];
    }

    static getMedicalRecord(id) {
        return MedicalRecordsProvider.medicalRecords.get(id);
    }

    static getMedicalRecords() {
        return MedicalRecordsProvider.medicalRecords;
    }
}

export default MedicalRecordsProvider;