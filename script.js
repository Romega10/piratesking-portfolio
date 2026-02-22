// Loader
window.onload = () => {
    setTimeout(()=>{
        document.getElementById("loader").style.display="none";
    },1500);
};

// Typing
const text="Gamer ⚡ Developer ⚡ Creator ⚡ Innovator";
let i=0;
function type(){
    if(i<text.length){
        document.getElementById("typing").innerHTML+=text.charAt(i);
        i++;
        setTimeout(type,50);
    }
}
type();

// Scroll Progress
window.onscroll=()=>{
    let winScroll=document.documentElement.scrollTop;
    let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    document.getElementById("progressBar").style.width=(winScroll/height)*100+"%";
};

// Counter
document.querySelectorAll('.counter').forEach(counter=>{
    const update=()=>{
        const target=+counter.dataset.target;
        const count=+counter.innerText;
        const inc=target/100;
        if(count<target){
            counter.innerText=Math.ceil(count+inc);
            setTimeout(update,20);
        } else counter.innerText=target;
    }
    update();
});

// Reveal animation
const reveals=document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
    reveals.forEach(r=>{
        if(r.getBoundingClientRect().top<window.innerHeight-100){
            r.classList.add("active");
        }
    });
});

// Cursor
const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",e=>{
    cursor.style.top=e.clientY+"px";
    cursor.style.left=e.clientX+"px";
});

// Particle background
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];
for(let i=0;i<100;i++){
    particles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2,
        dx:(Math.random()-0.5),
        dy:(Math.random()-0.5)
    });
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
        p.x+=p.dx;
        p.y+=p.dy;
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle="cyan";
        ctx.fill();
    });
    requestAnimationFrame(animate);
}
animate();
