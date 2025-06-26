const names = ["บุ้ค", "มิก", "ดีโน่", "นะโม", "พีค", "เบน", "ต้าร์", "ไลท์", "นาย", "บีม"];
const replies = [
  "ผมคือโกว์อันดับหนึ่งของโลก แม่ชื่อ นวล พ่อ ชื่อ บอย ถุงมือขโมยเค้ามา", "ผมชื่อมิกแม่ชื่อ หลิง ฉายาฝันร้ายงานกลุ่มผมเก่งกว่าเมสซี่ หยี้โรนัลโด้ เลี้ยงหลบ เนมาร์ แล้วสกิลพิเศษคืออ้อมบัลลือโลก", "ผมชื่อดีโน่ แม่ชื่อแสงดา โดน เพื่อนตีลังกา เตะหน้า เลือดออก", 
  "ผมชื่อ นะโม นักบอล BGPU ชอบคนล้างช้อน และเวลาเจอ ผู้หญิงจะชอบวิ่งเก็บบอล", "ผมคือจักรพรรคไพบูล", 
  "ผมชื่อเบน ชอบทิ้งเพื่อนไปเล่นบาส แต่เพื่อนเล่นบอลกันแต่ผมไม่สน", "ผมเตะบอล ปกติไม่เป็นผมต้อง เปิดไกล", "ผมไลน์ แม่ชื่อแอ้วชอบ ข้อลูกอมเพื่อนกิน เก็บตังเก่ง ขับ คิกสีเทา", 
  "ผมนาย แม่ชื่อแหม่ม ชอบsolo ไม่ส่งบอลให้เพื่อน ชอบหยก แต่ หยกเอามั้ย", "เดี๋ยวกูยิง", "ปั่นบันลือโลก"
];

let currentIndex = 0;

function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userMessage = input.value.trim();

  if (userMessage !== "") {
    addMessage("พระเจ้าอยู่หัว", userMessage);

    setTimeout(() => {
      const name = names[currentIndex];
      const reply = replies[currentIndex];

      addMessage(name, reply);

      currentIndex = (currentIndex + 1) % names.length;
    }, 700);

    input.value = "";
  }
}

function addMessage(sender, message) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}
