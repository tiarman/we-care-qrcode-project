qrTitle = document.getElementById('title');
qrData = document.getElementById('dataInput');
qrPlan = document.getElementById('plan');
qrAgent = document.getElementById('agent');
qrTele = document.getElementById('telep');
qrDestination = document.getElementById('destination');
qrFrom = document.getElementById('from');
qrTo = document.getElementById('to');
qrCountry = document.getElementById('country');
qrFullName = document.getElementById('fullname');
qrBirthDate = document.getElementById('birthdate');
qrblank = document.getElementById('blank');


const qrCode = new QRCodeStyling({
  width: 180,
  height: 180,
  data: "Please enter the data and then try to scan me.",
  image: "",
  dotsOptions: {
    color: "#000",
    type: "square"
  },
});



const updateQrData = () => {
  newQrData ="TRAVEL INSURANCE CERTIFICATE"+"\n"+"POLICY NO="+"WC-"+qrData.value+"\n"+"PLAN="+qrPlan.value+"\n"+"AGENT="+qrAgent.value+"\n"+"PHONE="+qrTele.value+"\n"+"FROM="+qrFrom.value+" TO "+" "+qrTo.value+"\n"+"COUNTRY OF RESIDENCE="+qrCountry.value+"\n"+"APPLICANT NAME="+qrFullName.value+"\n"+"DATE OF BIRTH="+qrBirthDate.value+"\n"+"PASSPORT NO="+qrblank.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrPlan = () => {
  newQrData ="TRAVEL INSURANCE CERTIFICATE"+"\n"+"POLICY NO="+"WC-"+qrData.value+"\n"+"PLAN="+qrPlan.value+"\n"+"AGENT="+qrAgent.value+"\n"+"PHONE="+qrTele.value+"\n"+"FROM="+qrFrom.value+" TO "+" "+qrTo.value+"\n"+"COUNTRY OF RESIDENCE="+qrCountry.value+"\n"+"APPLICANT NAME="+qrFullName.value+"\n"+"DATE OF BIRTH="+qrBirthDate.value+"\n"+"PASSPORT NO="+qrblank.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrAgent = () => {
  newQrData ="TRAVEL INSURANCE CERTIFICATE"+"\n"+"POLICY NO="+"WC-"+qrData.value+"\n"+"PLAN="+qrPlan.value+"\n"+"AGENT="+qrAgent.value+"\n"+"PHONE="+qrTele.value+"\n"+"FROM="+qrFrom.value+" TO "+" "+qrTo.value+"\n"+"COUNTRY OF RESIDENCE="+qrCountry.value+"\n"+"APPLICANT NAME="+qrFullName.value+"\n"+"DATE OF BIRTH="+qrBirthDate.value+"\n"+"PASSPORT NO="+qrblank.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrTele = () => {
  newQrData ="TRAVEL INSURANCE CERTIFICATE"+"\n"+"POLICY NO="+"WC-"+qrData.value+"\n"+"PLAN="+qrPlan.value+"\n"+"AGENT="+qrAgent.value+"\n"+"PHONE="+qrTele.value+"\n"+"FROM="+qrFrom.value+" TO "+" "+qrTo.value+"\n"+"COUNTRY OF RESIDENCE="+qrCountry.value+"\n"+"APPLICANT NAME="+qrFullName.value+"\n"+"DATE OF BIRTH="+qrBirthDate.value+"\n"+"PASSPORT NO="+qrblank.value;
  qrCode.update({
    data: newQrData
  });
};

const updateQrDestination = () => {
  newQrData ="TRAVEL INSURANCE CERTIFICATE"+"\n"+"POLICY NO="+"WC-"+qrData.value+"\n"+"PLAN="+qrPlan.value+"\n"+"AGENT="+qrAgent.value+"\n"+"PHONE="+qrTele.value+"\n"+"FROM="+qrFrom.value+" TO "+" "+qrTo.value+"\n"+"COUNTRY OF RESIDENCE="+qrCountry.value+"\n"+"APPLICANT NAME="+qrFullName.value+"\n"+"DATE OF BIRTH="+qrBirthDate.value+"\n"+"PASSPORT NO="+qrblank.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrFrom = () => {
  newQrData ="TRAVEL INSURANCE CERTIFICATE"+"\n"+"POLICY NO="+"WC-"+qrData.value+"\n"+"PLAN="+qrPlan.value+"\n"+"AGENT="+qrAgent.value+"\n"+"PHONE="+qrTele.value+"\n"+"FROM="+qrFrom.value+" TO "+" "+qrTo.value+"\n"+"COUNTRY OF RESIDENCE="+qrCountry.value+"\n"+"APPLICANT NAME="+qrFullName.value+"\n"+"DATE OF BIRTH="+qrBirthDate.value+"\n"+"PASSPORT NO="+qrblank.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrTo = () => {
  newQrData ="TRAVEL INSURANCE CERTIFICATE"+"\n"+"POLICY NO="+"WC-"+qrData.value+"\n"+"PLAN="+qrPlan.value+"\n"+"AGENT="+qrAgent.value+"\n"+"PHONE="+qrTele.value+"\n"+"FROM="+qrFrom.value+" TO "+" "+qrTo.value+"\n"+"COUNTRY OF RESIDENCE="+qrCountry.value+"\n"+"APPLICANT NAME="+qrFullName.value+"\n"+"DATE OF BIRTH="+qrBirthDate.value+"\n"+"PASSPORT NO="+qrblank.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrCountry = () => {
  newQrData ="TRAVEL INSURANCE CERTIFICATE"+"\n"+"POLICY NO="+"WC-"+qrData.value+"\n"+"PLAN="+qrPlan.value+"\n"+"AGENT="+qrAgent.value+"\n"+"PHONE="+qrTele.value+"\n"+"FROM="+qrFrom.value+" TO "+" "+qrTo.value+"\n"+"COUNTRY OF RESIDENCE="+qrCountry.value+"\n"+"APPLICANT NAME="+qrFullName.value+"\n"+"DATE OF BIRTH="+qrBirthDate.value+"\n"+"PASSPORT NO="+qrblank.value;
  qrCode.update({
    data: newQrData
  });
};

const updateQrFullName = () => {
  newQrData ="TRAVEL INSURANCE CERTIFICATE"+"\n"+"POLICY NO="+"WC-"+qrData.value+"\n"+"PLAN="+qrPlan.value+"\n"+"AGENT="+qrAgent.value+"\n"+"PHONE="+qrTele.value+"\n"+"FROM="+qrFrom.value+" TO "+" "+qrTo.value+"\n"+"COUNTRY OF RESIDENCE="+qrCountry.value+"\n"+"APPLICANT NAME="+qrFullName.value+"\n"+"DATE OF BIRTH="+qrBirthDate.value+"\n"+"PASSPORT NO="+qrblank.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrBirth = () => {
  newQrData ="TRAVEL INSURANCE CERTIFICATE"+"\n"+"POLICY NO="+"WC-"+qrData.value+"\n"+"PLAN="+qrPlan.value+"\n"+"AGENT="+qrAgent.value+"\n"+"PHONE="+qrTele.value+"\n"+"FROM="+qrFrom.value+" TO "+" "+qrTo.value+"\n"+"COUNTRY OF RESIDENCE="+qrCountry.value+"\n"+"APPLICANT NAME="+qrFullName.value+"\n"+"DATE OF BIRTH="+qrBirthDate.value+"\n"+"PASSPORT NO="+qrblank.value;
  qrCode.update({
    data: newQrData
  });
};

const updateQrblank = () => {
  newQrData ="TRAVEL INSURANCE CERTIFICATE"+"\n"+"POLICY NO="+"WC-"+qrData.value+"\n"+"PLAN="+qrPlan.value+"\n"+"AGENT="+qrAgent.value+"\n"+"PHONE="+qrTele.value+"\n"+"FROM="+qrFrom.value+" TO "+" "+qrTo.value+"\n"+"COUNTRY OF RESIDENCE="+qrCountry.value+"\n"+"APPLICANT NAME="+qrFullName.value+"\n"+"DATE OF BIRTH="+qrBirthDate.value+"\n"+"PASSPORT NO="+qrblank.value;
  qrCode.update({
    data: newQrData
  });
};


const updateQrImg = () => {
  newQrImage = URL.createObjectURL(qrImage.files[0]);
  console.log(newQrImage);
  qrCode.update({
    image: newQrImage
  });
};

const updateQrColor = () => {
  newQrColor = qrColor.value;
  qrCode.update({
    dotsOptions: {
      color: newQrColor
    }
  });
};

const updateQrType = () => {
  newQrType = qrType.value;
  qrCode.update({
    dotsOptions: {
      type: newQrType
    }
  });
};

const download = () => qrCode.download("jpeg");

qrCode.append(document.getElementById('canvas'));







