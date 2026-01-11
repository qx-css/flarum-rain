export default function (app) {
    app.initializers.add('qx-rain-effect', function () {
        // 等待页面加载
        setTimeout(() => {
            const settings = app.forum.attribute('rainEffect');
            
            if (!settings || !settings.enabled) return;
            
            // 创建雨滴容器
            const container = document.createElement('div');
            container.id = 'rain-effect';
            container.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 9999;
            `;
            document.body.appendChild(container);
            
            // 创建雨滴
            const intensity = settings.intensity || 50;
            const color = settings.color || '#ffffff';
            const count = Math.floor(intensity * 1.5);
            
            for (let i = 0; i < count; i++) {
                createRaindrop(container, color);
            }
            
            // 动态更新
            setInterval(() => {
                const drops = container.querySelectorAll('.raindrop');
                drops.forEach(drop => {
                    if (drop.getBoundingClientRect().top > window.innerHeight) {
                        drop.remove();
                        createRaindrop(container, color);
                    }
                });
            }, 2000);
        }, 1000);
    });
}

function createRaindrop(container, color) {
    const drop = document.createElement('div');
    drop.className = 'raindrop';
    
    drop.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}%;
        width: ${Math.random() * 3 + 1}px;
        height: ${Math.random() * 20 + 10}px;
        background: ${color};
        border-radius: 50%;
        animation: rain-fall ${Math.random() * 2 + 1}s linear infinite;
        opacity: ${Math.random() * 0.5 + 0.3};
    `;
    
    container.appendChild(drop);
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes rain-fall {
        0% { transform: translateY(-100px); }
        100% { transform: translateY(calc(100vh + 100px)); }
    }
    
    @media (max-width: 767px) {
        #rain-effect { display: none; }
    }
`;
document.head.appendChild(style);