function render(html) {
  document.getElementById("out").innerHTML = html;
}
let clickCount = 0;
document.querySelector("#btnClick").addEventListener("click", () => {
  render(`<p>You have clicked ${++clickCount} times.</p>`);
});
document.querySelector("#dblCard").addEventListener(
  "dblclick",
  () => {
    let target = document.querySelector("#dblCard");
    target.classList.toggle("activated");
    render(`<p>${target.classList.contains("activated") ? "ON" : "OFF"}</p>`);
  },
  true
);
let keyList = [];
window.addEventListener("keyup", ({ key, code }) => {
  const [kbK, kbC] = Array.from(document.querySelectorAll(".kb-value"));
  keyList.push(` ${key} : ${code},`);
  (kbK.textContent = key === " " ? "(space)" : key), (kbC.textContent = code);
  const blob = new Blob([...keyList], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  document.querySelector("#downLoader").href = url;
  document.querySelector("#downLoader").download = "clicksRecord.txt";
});
document.getElementById("btnClear").addEventListener("click", () => {
  render(
    '<span class="text-secondary">Output cleared, clicksRecord.txt cleared.</span>'
  );
  clickCount = 0;
});
function scrollUpdate() {
  const percent =
    (window.scrollY + window.innerHeight) /
    document.documentElement.scrollHeight;
  document.querySelector(".percent").textContent = `${Math.round(
    percent * 100
  )}%`;
  document
    .querySelector(".inner")
    .setAttribute("style", `width: ${Math.round(percent * 100)}%`);
}
window.onload = scrollUpdate();
window.addEventListener("scroll", scrollUpdate);
window.addEventListener("resize", scrollUpdate);

/* =================================================
   🔥 Event Listeners Challenge (Pick ONE to complete)

   Option A — Hover Highlight + Counter
   - Create a variable to track how many times the card was hovered
   - Add event listeners for mouseenter and mouseleave on the card
   - On mouseenter: add a highlight class, increase the counter, and show the count in #out
   - On mouseleave: remove the highlight class and show a message in #out

   Option B — Scroll Progress Bar
   - Add a small Bootstrap progress bar element at the very top of the page
   - Select the inner bar element
   - Write a function that calculates % scrolled
     (current scroll position ÷ total scrollable height)
   - Update the width of the bar with that percentage
   - Run this function when the page loads and on every scroll event
   //did this one

   Option C — Live Input Mirror
   - Add a text input element to the page
   - On every keystroke: update #out with a message that includes the input value
   - If the input is empty: show a neutral placeholder message instead
   - On focus: add a border/shadow class to the input
   - On blur: remove those classes and make sure #out shows the right message
================================================== */
