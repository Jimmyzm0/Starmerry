const blessings = [
    "리 크리스마스!",
    "크리스마스에 행복이 가득하길 바랍니다.",
    "사랑하는 사람들과 함께하는 즐거운 크리스마스 되세요.",
    "크리스마스의 기적이 여러분에게 찾아오길 바랍니다.",
    "올해 크리스마스는 특별한 추억으로 가득하길 바랍니다.",
    "크리스마스에 모든 꿈이 이루어지길 바랍니다.",
    "따뜻하고 사랑 가득한 크리스마스 보내세요.",
    "크리스마스에 행복과 사랑이 영원히 지속되길 바랍니다.",
    "행복한 크리스마스 보내고 새해 복 많이 받으세요!",
    "사랑하는 사람과 함께하는 평화로운 크리스마스 되세요.",
    "크리스마스에 사랑과 기쁨이 가득하기 바랍니다.",
    "크리스마스의 온기가 여러분의 마음을 따뜻하게 하길 바랍니다.",
    "한 해 마무리도 아름답게 하시고 행복한 크리스마스 되시길 기원합니다.",
    "크리스마스에 모든 행복과 함께하길 바랍니다.",
    "크리스마스에 받은 선물보다 더 큰 기쁨이 가득하길 바랍니다.",
    "기쁨과 웃음이 가득한 크리스마스 보내세요.",
    "크리스마스의 축복이 여러분의 가족에 가득하길 바랍니다.",
    "祝크리스마스를 맞이하여 건강과 행복이 가득하길 바랍니다.",
    "크리스마스의 사랑과 기쁨이 항상 여러분과 함께하길바랍니다.",
    "사랑과 웃음이 가득한 크리스마스 보내시길 바랍니다.",
    "소중한 사람들과 행복한 크리스마스 되세요.",
    "메리 크리스마스! 사랑하는 가족과 함께 행복과 사랑이 가득한 시간 보내세요.",
    "따스한 크리스마스, 가슴 속에 깊이 간직할 추억을 만들 수 있는 시간이 되시길 바랍니다",
    "추운 겨울이지만 마음은 따뜻한 크리스마스 되시고 행복한 연말 보내시기 바랍니다.",
    "크리스마스에는 많은 사랑과 축복이 넘치시기를 기원합니다.",
    "행복 가득한 크리스마스 보내시고 즐거운 새해 맞으세요!",
];

function getRandomBlessing() {
    const randomIndex = Math.floor(Math.random() * blessings.length);
    return blessings[randomIndex];
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const confirmation = document.getElementById('copyConfirmation');
        confirmation.style.display = 'block'; // 顯示提示
        confirmation.classList.add('flip-in'); // 添加翻轉效果
    }).catch(err => {
        console.error('複製失敗：', err);
    });
}

document.getElementById('blessingButton').addEventListener('click', function() {
    const blessing = getRandomBlessing();
    document.getElementById('blessingText').textContent = blessing;
    localStorage.setItem('blessingText', blessing);
    localStorage.setItem('buttonClicked', 'true');
    // 點擊後自動複製祝福語並禁用按鈕
    copyToClipboard(blessing);
    this.disabled = true;
});

function checkButtonStatus() {
    const buttonClicked = localStorage.getItem('buttonClicked');
    if (buttonClicked === 'true') {
        const button = document.getElementById('blessingButton');
        button.disabled = true;
        const storedBlessing = localStorage.getItem('blessingText');
        if (storedBlessing) {
            document.getElementById('blessingText').textContent = storedBlessing;
        }
    }
}

checkButtonStatus();
