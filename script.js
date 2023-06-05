let msg = document.getElementById("msg");

const msgOnline = () => {
  msg.textContent = "internet connection online";
  msg.style.cssText = "background-color:#e7f6d5; color: #689f38";
};
const msgOffline = () => {
  msg.textContent = "internet connection offline";
  msg.style.cssText = "background-color: #ffdde0; color: #d32f2f";
};

if (navigator.onLine) {
    msgOnline();
}
else{
    msgOffline();

}