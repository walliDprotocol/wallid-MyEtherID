var CryptoJS = require("crypto-js");

var key = 'benfica_el_king';

var data = {
    "id_attributes": {
        "Surname": "Assinatura Não Activa",
        "Givenname": "Carlos",
        "Sex": "M",
        "Height": "1,78",
        "Country": "PRT",
        "Birthdate": "10 04 1963",
        "Father": "José Assinatura Não Activa",
        "Mother": "Margarida Assinatura Não Activa",
        "Documenttype": "Cartão de Cidadão",
        "Documentnum": "99000354 0 ZZ8",
        "Documentversion": "001.002.11",
        "Nationality": "PRT",
        "Validityenddate": "15 11 2018",
        "Validitybegindate": "15 11 2013",
        "PlaceOfRequest": "AMA",
        "IssuingEntity": "República Portuguesa",
        "NISS": "11999999994",
        "NSNS": "898765421",
        "NIF": "399990011"
    },

    "address_attributes": {
        "District": "Lisboa",
        "Municipality": "Lisboa",
        "Parish": "Nossa Senhora de Fátima",
        "Streettype": "Avenida",
        "Streetname": "5 de Outubro",
        "Doorno": "202",
        "Floor": "",
        "Place": "",
        "Side": "",
        "Locality": "Lisboa",
        "Zip4": "1050",
        "Zip3": "065",
        "PostalLocality": "LISBOA"
    }
}

var idAttr = CryptoJS.AES.encrypt(JSON.stringify( data.id_attributes), key).toString();
var address =  CryptoJS.AES.encrypt( JSON.stringify( data.address_attributes), key).toString();

var bytes  = CryptoJS.AES.decrypt(idAttr, key);
var plaintext = bytes.toString(CryptoJS.enc.Utf8);

console.log('id attr ', idAttr);
console.log('plain text ', JSON.parse(plaintext));

var encryptAttr = 'U2FsdGVkX18yCl0LqGcPeFQwTbaXG62qgBvQ1E0lKsQbg1EdR97AsfS3H3vmdQhUl6iid++xdmwP9EL7Azh8E0dy7wiNx4kV18xPhyf8Dw9tc8oc4oPGdM7Mgw/fQCiy/81E7P6r4tEw+YBE/J5mDZL1uEyz4frwF9KOL0nVuz/HP3uDKzFGMBw+IKX3heAz4+c0EkiUVBdE1qTXNrGY2j/cAa3dDv0tAnh12HBaL0K9svHqEHlX0YnHKFMGPvlK5ZbIopHLifMZ1DGd2vQslN58liAs4MR7MhiQMmMWDodT0JEynqvoqP2tKvQr4olLDvwfwx8AEyYazofq/ieaCjYXa5MDBH3BTMgtfKJ30ma62YfBJmIeKRxa5ytdVe6SwJdKQs94IDYZSLYcgtd3ZazlExAcVAdL3r1rUFZLC4kByWx2JDOsELveM6NWh6HC8ZN+qLPcodOhYSCqaQjY4Or27Wdw7u1lkJLON+dncC/p+su4RVkUmNfXVufuXuF8bcPdI3Zf9Cx1OJZcVUc9B8CFITyEpjaPi8fPOuu5qdAJMmlAApsmaU8J1Unt1nuLFYUCiPKeEIGSAE9EEnsrDyUc8WPhMafSQkxZ3iovfiA1kNh8WFf31MgHH8Fky2HxGXYFGDMJagmYufe/lVWmcaCp5NbqVt320oP2/Ll4Ue3ji7DSiXkWA8CJaPMkofyPuk0mU8JShlpPRZocZwZj0Q=='





