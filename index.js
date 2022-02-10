let generatedInfo = [];
const cardDistribution = (persons) => {
    for (let i = 0; i < persons.length; i++) {
        const element = persons[i];
        const cardNumber = `${element.district.slice(0, 2).toUpperCase()}${element.currentYear.toString().slice(2, 4)}${element.postNo.toString().slice(0, 2)}${element.postNo.toString().slice(0, 2)}0000${element.birthYear}`;
        generatedInfo.push({
            serialNumber: cardNumber,
            gift: element.name.slice(0, 1),
            priority: element.priority
        })
    }
    const sorter = (a, b) => {
        return a['priority'] - b['priority'];
    };

    generatedInfo = [...generatedInfo.slice().sort(sorter)]

}
cardDistribution([
    {
        name: "Md abdul",
        birthYear: '1889',
        currentYear: 2022,
        district: "Dhaka",
        postNo: 1216,
        priority: 2
    },
    {
        name: "Md abdul",
        birthYear: 1899,
        currentYear: 2022,
        district: "Khulna",
        postNo: 3654,
        priority: 2
    },
    {
        name: "Md abdul",
        birthYear: 1809,
        currentYear: 2022,
        district: "Jessore",
        postNo: 7454,
        priority: 1
    }
])
console.log(generatedInfo)
