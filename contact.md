---
layout: page
title: "お問い合わせ"
description: "株式会社MarsLinkへのお問い合わせはこちらから。移動空間の革新についてお気軽にご相談ください。"
permalink: /contact/
---

<style>
.form-group {
    margin-bottom: 1.5rem;
}

.form-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #e5e7eb;
    font-family: 'Orbitron', monospace;
}

.form-required {
    color: #ef4444;
    margin-left: 0.25rem;
}

.form-input,
.form-textarea,
.form-select {
    width: 100%;
    padding: 0.75rem 1rem;
    background: rgba(31, 41, 55, 0.8);
    border: 2px solid rgba(75, 85, 99, 0.5);
    border-radius: 0.5rem;
    color: #fff;
    font-size: 1rem;
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus {
    outline: none;
    border-color: #06b6d4;
    box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
    background: rgba(31, 41, 55, 0.9);
}

.form-input:valid {
    border-color: rgba(75, 85, 99, 0.5);
}

.form-input:invalid {
    border-color: rgba(75, 85, 99, 0.5);
}

.form-textarea {
    resize: vertical;
    min-height: 120px;
}

.form-select {
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    padding-right: 2.5rem;
}

.form-select option {
    background: #1f2937;
    color: #fff;
}
</style>

<!-- Contact Hero Section -->
<section class="relative bg-black text-white pt-32 pb-20">
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-cyan-900 opacity-50"></div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h1 class="font-orbitron text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                お問い合わせ
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-300">
                CabinTimeや弊社事業に関するご相談は下記のフォームからお送りください。
            </p>
        </div>
    </div>
</section>

<!-- Contact Form Section -->
<div class="bg-black py-16 sm:py-24">
    <div class="mx-auto max-w-4xl px-6 lg:px-8">
        <!-- Contact Form -->
        <div class="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12">
            <div class="text-center mb-8">
                <h2 class="font-orbitron text-2xl font-bold text-white mb-4">お問い合わせフォーム</h2>
                <p class="text-gray-300">下記フォームにご記入いただき、送信ボタンをクリックしてください。</p>
            </div>

            <form id="contactForm" class="space-y-6" method="POST" action="https://formspree.io/f/YOUR_FORMSPREE_ID">
                <!-- 氏名 -->
                <div>
                    <label for="name" class="form-label block text-sm font-medium mb-2">
                        氏名 <span class="form-required">*</span>
                    </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        class="form-input w-full rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-cyan-500/50"
                        placeholder="山田太郎"
                    />
                </div>

                <!-- 会社名 -->
                <div>
                    <label for="company" class="form-label block text-sm font-medium mb-2">
                        会社名 <span class="form-required">*</span>
                    </label>
                    <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        required 
                        class="form-input w-full rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-cyan-500/50"
                        placeholder="株式会社○○○"
                    />
                </div>

                <!-- Email -->
                <div>
                    <label for="email" class="form-label block text-sm font-medium mb-2">
                        Email <span class="form-required">*</span>
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        class="form-input w-full rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-cyan-500/50"
                        placeholder="example@company.com"
                    />
                </div>

                <!-- 電話番号 -->
                <div>
                    <label for="phone" class="form-label block text-sm font-medium mb-2">
                        電話番号 <span class="form-required">*</span>
                    </label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required 
                        class="form-input w-full rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-cyan-500/50"
                        placeholder="03-1234-5678"
                    />
                </div>

                <!-- メッセージ -->
                <div>
                    <label for="message" class="form-label block text-sm font-medium mb-2">
                        メッセージ <span class="form-required">*</span>
                    </label>
                    <textarea 
                        id="message" 
                        name="message" 
                        required 
                        rows="6" 
                        class="form-input w-full rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-cyan-500/50 resize-vertical"
                        placeholder="CabinTimeの導入について詳しく知りたいです。具体的な費用や導入期間について教えてください。"
                    ></textarea>
                </div>

                <!-- 送信ボタン -->
                <div class="pt-6">
                    <button 
                        type="submit" 
                        class="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-orbitron font-semibold py-4 px-8 rounded-lg transition duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                    >
                        送信する
                    </button>
                </div>

                <!-- 必須項目の注意書き -->
                <div class="text-center pt-4">
                    <p class="text-sm text-gray-400">
                        <span class="form-required">*</span> は必須項目です
                    </p>
                </div>

                <!-- プライバシーポリシー -->
                <div class="text-center pt-2">
                    <p class="text-xs text-gray-400">
                        送信いただいた情報は、
                        <a href="{{ '/privacy/' | relative_url }}" class="text-cyan-400 hover:text-cyan-300 underline transition duration-100">プライバシーポリシー</a>
                        に従って適切に管理いたします。
                    </p>
                </div>
            </form>

            <!-- EmailJS Alternative Form (Hidden by default) -->
            <form id="emailjsForm" class="space-y-6 hidden" onsubmit="sendEmailJS(event)">
                <!-- Same form fields but with EmailJS handling -->
                <div>
                    <label for="emailjs_name" class="form-label block text-sm font-medium mb-2">
                        氏名 <span class="form-required">*</span>
                    </label>
                    <input 
                        type="text" 
                        id="emailjs_name" 
                        name="from_name" 
                        required 
                        class="form-input w-full rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-cyan-500/50"
                        placeholder="山田太郎"
                    />
                </div>

                <div>
                    <label for="emailjs_company" class="form-label block text-sm font-medium mb-2">
                        会社名 <span class="form-required">*</span>
                    </label>
                    <input 
                        type="text" 
                        id="emailjs_company" 
                        name="company" 
                        required 
                        class="form-input w-full rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-cyan-500/50"
                        placeholder="株式会社○○○"
                    />
                </div>

                <div>
                    <label for="emailjs_email" class="form-label block text-sm font-medium mb-2">
                        Email <span class="form-required">*</span>
                    </label>
                    <input 
                        type="email" 
                        id="emailjs_email" 
                        name="reply_to" 
                        required 
                        class="form-input w-full rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-cyan-500/50"
                        placeholder="example@company.com"
                    />
                </div>

                <div>
                    <label for="emailjs_phone" class="form-label block text-sm font-medium mb-2">
                        電話番号 <span class="form-required">*</span>
                    </label>
                    <input 
                        type="tel" 
                        id="emailjs_phone" 
                        name="phone" 
                        required 
                        class="form-input w-full rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-cyan-500/50"
                        placeholder="03-1234-5678"
                    />
                </div>

                <div>
                    <label for="emailjs_message" class="form-label block text-sm font-medium mb-2">
                        メッセージ <span class="form-required">*</span>
                    </label>
                    <textarea 
                        id="emailjs_message" 
                        name="message" 
                        required 
                        rows="6" 
                        class="form-input w-full rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-cyan-500/50 resize-vertical"
                        placeholder="CabinTimeの導入について詳しく知りたいです。具体的な費用や導入期間について教えてください。"
                    ></textarea>
                </div>

                <div class="pt-6">
                    <button 
                        type="submit" 
                        id="emailjsSubmitBtn"
                        class="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-orbitron font-semibold py-4 px-8 rounded-lg transition duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                    >
                        送信する
                    </button>
                </div>
            </form>

            <!-- Method Selection -->
            <div class="mt-8 text-center">
                <p class="text-sm text-gray-400 mb-4">フォーム送信方法を選択：</p>
                <div class="flex justify-center space-x-4">
                    <button 
                        onclick="switchToFormspree()" 
                        id="formspreeBtn"
                        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Formspree
                    </button>
                    <button 
                        onclick="switchToEmailJS()" 
                        id="emailjsBtn"
                        class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        EmailJS
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Success/Error Messages -->
<div id="formMessage" class="fixed top-20 right-4 z-50 hidden">
    <div class="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg" id="successMessage">
        <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            お問い合わせが正常に送信されました。
        </div>
    </div>
    <div class="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg" id="errorMessage">
        <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            送信に失敗しました。再度お試しください。
        </div>
    </div>
</div>

<!-- EmailJS SDK -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

<script>
// EmailJS initialization
(function(){
    // Replace with your EmailJS public key
    emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");
})();

// Form switching functions
function switchToFormspree() {
    document.getElementById('contactForm').classList.remove('hidden');
    document.getElementById('emailjsForm').classList.add('hidden');
    document.getElementById('formspreeBtn').classList.add('bg-blue-600');
    document.getElementById('formspreeBtn').classList.remove('bg-gray-600');
    document.getElementById('emailjsBtn').classList.add('bg-gray-600');
    document.getElementById('emailjsBtn').classList.remove('bg-blue-600');
}

function switchToEmailJS() {
    document.getElementById('contactForm').classList.add('hidden');
    document.getElementById('emailjsForm').classList.remove('hidden');
    document.getElementById('emailjsBtn').classList.add('bg-blue-600');
    document.getElementById('emailjsBtn').classList.remove('bg-gray-600');
    document.getElementById('formspreeBtn').classList.add('bg-gray-600');
    document.getElementById('formspreeBtn').classList.remove('bg-blue-600');
}

// EmailJS form submission
function sendEmailJS(event) {
    event.preventDefault();
    
    const submitBtn = document.getElementById('emailjsSubmitBtn');
    const originalText = submitBtn.textContent;
    
    // Change button state
    submitBtn.textContent = '送信中...';
    submitBtn.disabled = true;
    submitBtn.classList.add('opacity-50');
    
    // Send email using EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#emailjsForm')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showMessage('success');
            document.getElementById('emailjsForm').reset();
        }, function(error) {
            console.log('FAILED...', error);
            showMessage('error');
        })
        .finally(function() {
            // Reset button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('opacity-50');
        });
}

// Show success/error messages
function showMessage(type) {
    const messageContainer = document.getElementById('formMessage');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    messageContainer.classList.remove('hidden');
    
    if (type === 'success') {
        successMessage.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    } else {
        errorMessage.classList.remove('hidden');
        successMessage.classList.add('hidden');
    }
    
    // Hide message after 5 seconds
    setTimeout(() => {
        messageContainer.classList.add('hidden');
    }, 5000);
}

// Enhanced form validation for Formspree
document.getElementById('contactForm').addEventListener('submit', function(e) {
    const form = this;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Basic validation
    const name = form.querySelector('#name').value.trim();
    const company = form.querySelector('#company').value.trim();
    const email = form.querySelector('#email').value.trim();
    const phone = form.querySelector('#phone').value.trim();
    const message = form.querySelector('#message').value.trim();
    
    if (!name || !company || !email || !phone || !message) {
        e.preventDefault();
        alert('すべての必須項目を入力してください。');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        e.preventDefault();
        alert('正しいメールアドレスを入力してください。');
        return;
    }
    
    // Change button state
    submitBtn.textContent = '送信中...';
    submitBtn.disabled = true;
    submitBtn.classList.add('opacity-50');
    
    // Note: For Formspree, the actual submission handling is done by their service
    // This is just for UI feedback
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-50');
    }, 2000);
});

// Initialize with Formspree as default
document.addEventListener('DOMContentLoaded', function() {
    switchToFormspree();
});
</script>



 