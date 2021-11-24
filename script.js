function random(min, max) {
               return Math.round(Math.random() * (max - min) + min)
}
function color() {
               r = random(0, 255)
               g = random(0, 255)
               b = random(0, 255)
               return "rgb(" + r + "," + g + "," + b + ")"
}
let body = document.querySelector("body")
setInterval(() => {
               body.style.backgroundColor = color()
               body.style.transition = "0.5s"
}, 1000);




let message = prompt("Iltimos so'z kiriting  !")
while(!isNaN){
               message = prompt("Iltimos so'z kiritayotganingizda faqat harflardan foydalaning !")
}
let text = message
let vowels = "AEIOUaeiou"
let consonants = "QWRTYPSDFGHJKLZXCVBNMqwrtypsdfghjklzxcvbnm"
numberOne = 0
numberTwo = 0
for (let i = 0; i < text.length; i++) {
               const content = text[i];
               for (let j = 0; j < vowels.length; j++) {
                              const element = vowels[j];
                              if (content == element) {
                                             numberOne++
                              }
               }
}
for (let i = 0; i < text.length; i++) {
               const content = text[i];
               for (let j = 0; j < consonants.length; j++) {
                              const element = consonants[j];
                              if (content == element) {
                                             numberTwo++
                              }
               }
}
let information = `Assalomalaykum, siz kiritgan so'z haqida malumotlar tayyor !
Siz => ${message} <= so'zini kiritdingiz !
Kiritgan so'zingizda =>
Unli harflar soni: ${numberOne}ta
Undosh harflar soni: ${numberTwo}ta
Jami harflar soni: ${numberOne+numberTwo}ta
Bu dasturdan foydalanganingiz uchun rahmat !`
console.log(information);