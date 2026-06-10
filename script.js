// 粒子背景效果
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

// 设置canvas尺寸
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// 粒子类
class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '#00ffff' : '#ff00ff';
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

// 创建粒子数组
const particles = [];
const particleCount = 100;

for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

// 动画循环
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    // 绘制连线
    particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 150)})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        });
    });

    requestAnimationFrame(animate);
}

animate();

// 弹窗功能
const modal = document.getElementById('wechat-modal');
const closeBtn = document.querySelector('.modal-close');
const wechatLink = document.querySelector('.wechat-link');

// 点击公众号链接显示弹窗
if (wechatLink) {
    wechatLink.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
}

// 点击关闭按钮关闭弹窗
if (closeBtn) {
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

// 点击弹窗外部关闭
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// ESC键关闭弹窗
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// 平滑滚动（排除公众号链接）
document.querySelectorAll('a[href^="#"]:not(.wechat-link)').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// 观察所有需要动画的元素
document.querySelectorAll('.timeline-item, .quote-card, .content-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// 添加淡入动画样式
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .timeline-item:nth-child(1) { transition-delay: 0.1s; }
    .timeline-item:nth-child(2) { transition-delay: 0.2s; }
    .timeline-item:nth-child(3) { transition-delay: 0.3s; }
    .timeline-item:nth-child(4) { transition-delay: 0.4s; }
    .timeline-item:nth-child(5) { transition-delay: 0.5s; }
    
    .quote-card:nth-child(1) { transition-delay: 0.1s; }
    .quote-card:nth-child(2) { transition-delay: 0.2s; }
    .quote-card:nth-child(3) { transition-delay: 0.3s; }
    .quote-card:nth-child(4) { transition-delay: 0.4s; }
    .quote-card:nth-child(5) { transition-delay: 0.5s; }
    .quote-card:nth-child(6) { transition-delay: 0.6s; }
    
    .content-card:nth-child(1) { transition-delay: 0.1s; }
    .content-card:nth-child(2) { transition-delay: 0.2s; }
    .content-card:nth-child(3) { transition-delay: 0.3s; }
    .content-card:nth-child(4) { transition-delay: 0.4s; }
`;
document.head.appendChild(style);

// 金句轮播（可选）
const quotes = [
    "代码改不改世界我不知道，但先让我准时下班。",
    "需求改不改产品我不知道，但先让我准时下班。",
    "会议解不解决问题我不知道，但先让我准时下班。",
    "BUG修不修得完我不知道，但先让我准时下班。",
    "AI会不会取代我我不知道，但先让我准时下班。",
    "今天谁也别拦我，我要准时下班。",
    "周末不写代码，是打工人最后的底线。",
    "绩效评不评A我不知道，但先让我准时下班。",
    "北京留不留得住我不知道，但先让我准时下班。",
    "副业赚不赚钱我不知道，但先让我准时下班。",
    "差不多得了。",
    "活先干完。",
    "再坚持一个版本。",
    "这需求谁提的？",
    "又不是不能改。"
];

// 控制台彩蛋
console.log('%c宸一工作室', 'color: #00ffff; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px #00ffff;');
console.log('%c代码改不改世界我不知道，但先让我准时下班。', 'color: #ff00ff; font-size: 14px;');
console.log('%c欢迎来到Grid City！', 'color: #9d4edd; font-size: 12px;');
console.log('%c关注公众号获取更多内容~', 'color: #00ffff; font-size: 12px;');