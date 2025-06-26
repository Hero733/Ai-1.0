const names = ["บุ้ค", "มิก", "ดีโน่", "นะโม", "พีค", "เบน", "ต้าร์", "ไลท์", "นาย", "บีม"];
const replies = [
    "ผมคือโกว์อันดับหนึ่งของโลก แม่ชื่อ นวล พ่อ ชื่อ บอย ถุงมือขโมยเค้ามา",
    "ผมชื่อมิกแม่ชื่อ หลิง ฉายาฝันร้ายงานกลุ่มผมเก่งกว่าเมสซี่ หยี้โรนัลโด้ เลี้ยงหลบ เนมาร์ แล้วสกิลพิเศษคืออ้อมบัลลือโลก",
    "ผมชื่อดีโน่ แม่ชื่อแสงดา โดน เพื่อนตีลังกา เตะหน้า เลือดออก",
    "ผมชื่อ นะโม นักบอล BGPU ชอบคนล้างช้อน และเวลาเจอ ผู้หญิงจะชอบวิ่งเก็บบอล",
    "ผมคือจักรพรรคไพบูล",
    "ผมชื่อเบน ชอบทิ้งเพื่อนไปเล่นบาส แต่เพื่อนเล่นบอลกันแต่ผมไม่สน",
    "ผมเตะบอล ปกติไม่เป็นผมต้อง เปิดไกล",
    "ผมไลน์ แม่ชื่อแอ้วชอบ ข้อลูกอมเพื่อนกิน เก็บตังเก่ง ขับ คิกสีเทา",
    "ผมนาย แม่ชื่อแหม่ม ชอบsolo ไม่ส่งบอลให้เพื่อน ชอบหยก แต่ หยกเอามั้ย",
    "เดี๋ยวกูยิง",
    "ปั่นบันลือโลก"
];

let currentIndex = 0; // This will still be used if no name is detected

function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const userMessage = input.value.trim();

    if (userMessage !== "") {
        addMessage("พระเจ้าอยู่หัว", userMessage); // User's message

        setTimeout(() => {
            let replyFound = false;
            let nameToReply = "";
            let specificReply = "";

            // Convert user message to lowercase for case-insensitive matching
            const lowerCaseUserMessage = userMessage.toLowerCase();

            // Check if any name from the 'names' array is in the user's message
            for (let i = 0; i < names.length; i++) {
                // Convert the name to lowercase for comparison
                if (lowerCaseUserMessage.includes(names[i].toLowerCase())) {
                    nameToReply = names[i];
                    // Use the corresponding reply from the 'replies' array
                    // Ensure that 'replies' array has an index for each name
                    specificReply = replies[i];
                    replyFound = true;
                    break; // Stop after finding the first name
                }
            }

            if (replyFound) {
                // If a name was found, use the specific name and reply
                addMessage(nameToReply, specificReply);
            } else {
                // If no name was found, use the current cycling logic
                const name = names[currentIndex % names.length]; // Ensure valid index
                const reply = replies[currentIndex % replies.length]; // Ensure valid index for replies array
                addMessage(name, reply);
                currentIndex = (currentIndex + 1) % names.length; // Cycle through names
            }
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
