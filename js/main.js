"use strict";

window.addEventListener("load", () => {
  
  let [code, btn, output] = [document.querySelector("section.code .code_container code"), document.querySelector("button.btn"), document.querySelector("section.code")];
  // 
  let [rangeBlur, printBlur] = [document.querySelector("#rangeBlur"), document.querySelector(".box.a label span")];
  let [rangeAlpha, printAlpha] = [document.querySelector("#rangeTransparent"), document.querySelector(".box.b label span")];
  let [glass, card, box] = [document.querySelectorAll(".glass"), document.querySelector(".card"), document.querySelectorAll(".box")];
  
  
  btn.addEventListener("click", () => {
    output.classList.add("v")
      // Output 
    let css = `background-color: rgba(<b>255,255,255, ${rangeAlpha.value}</b>);<br/> -webkit-backdrop-filter: blur(<b>${rangeBlur.value}px</b>); <br/>backdrop-filter: blur(<b>${rangeBlur.value}px</b>);`;
    code.innerHTML = css;
  
  });
  output.addEventListener("click", () => {
    output.classList.remove("v")
  })
  
  
  // Blur
  printBlur.innerHTML = "2.5px";
  rangeBlur.addEventListener("input",() => {
    printBlur.innerHTML = rangeBlur.value+"px";
    
    for (var i = 0; i < glass.length; i++) {
      glass[i].style.backdropFilter = `blur(${rangeBlur.value}px)`;
      card.style.backdropFilter = `blur(${rangeBlur.value}px)`;
    }
    for (var e = 0; e < box.length; e++) {
      box[e].style.backdropFilter = `blur(${rangeBlur.value}px)`;
    }
    
  });
  
  // Alpha
  printAlpha.innerHTML = "0.05";
  rangeAlpha.addEventListener("input", () => {
    printAlpha.innerHTML = rangeAlpha.value;
    
    for (var o = 0; o < glass.length; o++) {
      glass[o].style.background = `rgba(255,255,255,${rangeAlpha.value})`;
      card.style.background = `rgba(255,255,255,${rangeAlpha.value})`;
    }
    for (var f = 0; f < box.length; f++) {
      box[f].style.background = `rgba(255,255,255,${rangeAlpha.value})`;
    }
  })
  
  
});