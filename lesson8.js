function MessageBox(textc, backgroundc, image, titlem, msg = "") {
    this.textc = textc; // צבע הכיתוב
    this.backgroundc = backgroundc; // צבע הרקע
    this.image = image; // תמונת אייקון
    this.msg = { 
        title: titlem, // כותרת ההודעה
        msg2: msg // גוף ההודעה
    };

    // מתודה שמחזירה אלמנט HTML מעוצב
    this.render = () => {
        return `
            <div style="background-color: ${this.backgroundc}; padding: 20px; border-radius: 10px; max-width: 300px; margin: 20px auto; text-align: center; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
                <img src="${this.image}" alt="icon" style="width: 50px; height: 50px; margin-bottom: 15px;">
                <h1 style="color: ${this.textc}; font-size: 20px; margin: 0;">${this.msg.title}</h1>
                <p style="color: ${this.textc}; font-size: 16px; margin: 10px 0;">${this.msg.msg2}</p>
            </div>
        `;
    };
}
let error1=new MessageBox(    "#ffffff", "#dc3545","images/שגיאה.png"  ,"error","u have error")
let info1=new MessageBox("#ffffff","#007bff","images/מידע.png","info")
let warning1=new MessageBox( "#000000","#ffc107","images/אזהרה.png","warning")
const messages = {
    info: info1,
    warning: warning1,
    error: error1
};
function enter() {
    const messageType = document.getElementById('messageType').value;
    const title1 = document.getElementById('title').value;
    const message1 = document.getElementById('msg').value;
    const selectedMessage = messages[messageType];

    selectedMessage.msg.title = title1;
    selectedMessage.msg.msg2 = message1;

    const messageContainer = document.getElementById("messageContainer");
    messageContainer.innerHTML = selectedMessage.render(); // Corrected rendering of message

    // Clear input fields after submission
    document.getElementById('title').value = '';
    document.getElementById('msg').value = '';
}