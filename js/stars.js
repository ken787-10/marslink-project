// JavaScript Document
// 完全にランダムな星空を生成する
function createStarryBackground() {
    const starsContainer = document.querySelector('.stars-container');
    if (!starsContainer) return;
    
    // コンテナをクリア
    starsContainer.innerHTML = '';
    
    // ウィンドウサイズに基づいて星の数を決定（より広い画面にはより多くの星）
    const width = window.innerWidth;
    const height = window.innerHeight;
    const area = width * height;
    const starCount = Math.floor(area / 6000); // 画面サイズに応じて星の数を調整
    
    // 3つの異なるレイヤーのために星を分割
    const smallStarsCount = Math.floor(starCount * 0.6);  // 小さな星（遠い）
    const mediumStarsCount = Math.floor(starCount * 0.3); // 中くらいの星
    const largeStarsCount = Math.floor(starCount * 0.1);  // 大きな星（近い）
    
    // 小さな星を生成（背景）
    createStarLayer(starsContainer, smallStarsCount, {
        minSize: 0.5,
        maxSize: 1,
        opacity: {min: 0.1, max: 0.3},
        animationDuration: {min: 100, max: 200},
        zIndex: 0
    });
    
    // 中くらいの星を生成（中層）
    createStarLayer(starsContainer, mediumStarsCount, {
        minSize: 1,
        maxSize: 1.8,
        opacity: {min: 0.3, max: 0.6},
        animationDuration: {min: 75, max: 150},
        zIndex: 1
    });
    
    // 大きな星を生成（前景）
    createStarLayer(starsContainer, largeStarsCount, {
        minSize: 1.8,
        maxSize: 2.5,
        opacity: {min: 0.5, max: 0.9},
        animationDuration: {min: 50, max: 100},
        zIndex: 2,
        glow: true
    });
}

// 星のレイヤーを生成する関数
function createStarLayer(container, count, options) {
    for (let i = 0; i < count; i++) {
        // 星のDIV要素を作成
        const star = document.createElement('div');
        star.className = 'star';
        
        // ランダムな位置
        const x = Math.random() * 100; // ウィンドウ幅のパーセンテージ
        const y = Math.random() * 100; // ウィンドウ高さのパーセンテージ
        
        // ランダムなサイズ
        const size = options.minSize + Math.random() * (options.maxSize - options.minSize);
        
        // ランダムな透明度
        const opacity = options.opacity.min + Math.random() * (options.opacity.max - options.opacity.min);
        
        // ランダムなアニメーション遅延
        const delay = Math.random() * 10; // 0〜10秒の遅延
        
        // ランダムなアニメーション時間
        const duration = options.animationDuration.min + 
                          Math.random() * (options.animationDuration.max - options.animationDuration.min);
        
        // ランダムな回転角度（回転中心点をランダムにするため）
        const rotationOrigin = Math.random() * 360;
        
        // スタイルを適用
        star.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            background-color: #ffffff;
            border-radius: 50%;
            opacity: ${opacity};
            z-index: ${options.zIndex || 0};
            animation: pulseStar ${Math.random() * 3 + 2}s infinite alternate ease-in-out ${delay}s;
            transform-origin: center center;
        `;
        
        // 輝き効果（大きな星のみ）
        if (options.glow) {
            star.style.boxShadow = `0 0 ${size + 2}px rgba(255, 255, 255, ${opacity * 0.8})`;
        }
        
        // 星を追加
        container.appendChild(star);
    }
}

// 星のアニメーションのためのスタイルを追加
function addStarAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulseStar {
            0% {
                transform: scale(0.8);
                opacity: 0.4;
            }
            100% {
                transform: scale(1.2);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
}

// ウィンドウがリサイズされた時に星を再生成
function handleResize() {
    // リサイズ中は頻繁に呼ばれすぎないよう、デバウンス処理
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(() => {
        createStarryBackground();
    }, 250);
}

// 初期化関数
function initStarryBackground() {
    addStarAnimationStyles();
    createStarryBackground();
    window.addEventListener('resize', handleResize);
}

// DOMが読み込まれたら星を生成
document.addEventListener('DOMContentLoaded', initStarryBackground);