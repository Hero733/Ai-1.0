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
    "ผมนาย แม่ชื่อแหม่ม ชอบsolo ไม่ส่งบอลให้เพื่อน",
    "เดี๋ยวกูยิง",
    "ปั่นบันลือโลก"
];

let currentIndex = 0; // For cycling through replies if no name is matched

function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const userMessage = input.value.trim();

    if (userMessage !== "") {
        // Add user's message to the chat box
        addMessage("คุณ", userMessage); // Changed sender to "คุณ" (You) for clarity

        // Simulate a delay before the bot replies
        setTimeout(() => {
            let replyFound = false;
            let nameToReply = "";
            let specificReply = "";

            // Convert user message to lowercase for case-insensitive matching
            const lowerCaseUserMessage = userMessage.toLowerCase();

            // Check if any name from the 'names' array is in the user's message
            for (let i = 0; i < names.length; i++) {
                // Convert the name to lowercase for comparison
                // Check if the user's message *contains* the name
                if (lowerCaseUserMessage.includes(names[i].toLowerCase())) {
                    nameToReply = names[i];
                    // Ensure replies array has a corresponding entry
                    if (i < replies.length) {
                        specificReply = replies[i];
                        replyFound = true;
                        break; // Stop after finding the first name
                    }
                }
            }

            if (replyFound) {
                // If a name was found, use the specific name and reply
                addMessage(nameToReply, specificReply);
            } else {
                // If no name was found, use the current cycling logic
                // Ensure we don't go out of bounds for both arrays
                const name = names[currentIndex % names.length];
                const reply = replies[currentIndex % replies.length]; // Use replies.length for replies
                addMessage(name, reply);
                currentIndex = (currentIndex + 1) % names.length; // Still cycle based on names count
            }
        }, 700); // 0.7 second delay

        // Clear the input field
        input.value = "";
    }
}

// Function to add a message to the chat box
function addMessage(sender, message) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    // Use strong tag for sender's name
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageElement);
    // Scroll to the bottom of the chat box to show the latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}
