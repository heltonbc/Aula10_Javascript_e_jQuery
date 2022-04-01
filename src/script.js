const handleClick = () => {
    const body = $("body");
    body.html(`
    <h1>Hello Javascript!</h1>
    <h2> and Hello World!</h2>
    `);        
    body.css("background-color", "#000");
    body.css("color", "#fff");    
};

const startButtonInit = () => {
    const el = $("#btn-start");
    el.on("mouseover", () => {
        el.css("position", "absolute");
        el.css("top", `${Math.floor(Math.random() * (window.innerHeight - 18))}px`);
        el.css("left", `${Math.floor(Math.random() * (window.innerWidth - 36))}px`);
    });
    
    el.on("click", () => handleClick());
};

const infoButtonInit = () => {    
    const el = $("#btn-info");
    const elInitialText = el.html();
    el.on("click", () => {
        if (el.html() == elInitialText) {
            el.html("OCULTAR INFORMAÇÕES");
        } else {
            el.html(elInitialText);
        }
        $(".info").fadeToggle();
    });
};

$(document).ready(() => {
    startButtonInit();
    infoButtonInit();
});