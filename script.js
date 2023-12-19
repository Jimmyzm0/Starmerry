const blessings = [
    "聖誕快樂！願你在三幻世界充滿歡樂和驚喜。",
    "在這個聖誕季節，願你的每場戰鬥都勝利，山河永遠不卡關！！",
    "希望聖誕老人給您帶來滿滿的幸福和笑容！",
    "在這個聖誕佳節，願你和你的家人充滿愛和和平，並分享幸福的時刻！",
    "願這個聖誕季節為你帶來喜悅，讓你的心充滿感恩之情，並讓你的希望得以實現！",
    "在這個特別的日子，願你找到一份快樂，一份平安，以及一份為所愛之人的關懷！",
    "聖誕快樂！願這個節日為你帶來喜悅，並將你的心充滿愛與祝福！",
    "願你在這個聖誕節中找到喜悅，並與家人和朋友一同分享這份喜悅！",
    "聖誕快樂！願你的聖誕節充滿了祝福，並為你帶來健康和幸福！",
    "願這個聖誕季節為你打開新的可能性，並帶來成功和順遂！",
    "聖誕快樂！願這個節日充滿愛，並為你的未來帶來繁榮和幸福！",
    "在這個特別的日子，願你感受到上天的祝福，並與所愛之人共度美好時光！",
    "聖誕節是分享的季節，願你在這個節日中分享愛和溫暖！",
    "在這個寒冷的冬日，願你找到溫暖，並與親人共度美好時光！",
    "祝你聖誕節快樂，願你找到的禮物比失去的遙控器還多！！",
    "這個聖誕節，願你的快樂像節日燈飾一樣閃亮！",
    "願你在這個聖誕節找到的快樂像聖誕樹一樣高！",
    "這個聖誕節，願你的歡笑像節日音樂一樣傳遍每一個角落！",
    "祝你聖誕快樂，願你的節日充滿愛、笑聲和一些真正好吃的餅乾！",
    "這個聖誕節，願你的節日喜悅比聖誕餅乾還要甜！",
    "這個聖誕節，願你的家庭和樂融融，就像熱可可裡的棉花糖一樣溫暖！",
    "聖誕節快樂，願你像聖誕樹一樣站得高高的，即使是最頂端的星星也在你觸手可及之處！",
    "在這個閃亮的季節，願你的笑聲比聖誕燈還要亮，你的心情比雪還要輕盈！",
    "在這個閃爍的季節，願你的夢想像聖誕樹上的裝飾一樣燦爛！",
    "願你的聖誕節像聖誕老人的袋子一樣，充滿無盡的驚喜和歡樂！",
    "在這個燦爛的季節，願你的生活像節日裝飾一樣光彩奪目、充滿色彩！",
    "願你像聖誕樹一樣站得高高的，即使是最頂端的星星也在你觸手可及之處！",
    "在這個閃亮的季節，願你的每一天都像聖誕樹下的精緻禮物一樣特別！",
    "願你的聖誕節像完美的雪球一樣，純淨、美好又令人憧憬！",
    "聖誕快樂！願你的節日像雪地裡的足跡一樣，留下美好和快樂的痕跡！",
    "願你的聖誕節像完美的雪球一樣，純淨、美好又令人憧憬！",
    "這個聖誕節，願你的心情像節日的熱酒一樣溫暖和令人愉快！",
    "在這個聖誕季節，願你的每一刻都像節日的鈴響一樣歡快且令人愉悅！",
    "聖誕快樂！願你的假期像聖誕故事般充滿魔法和奇迹！",
    "在這個燦爛的季節，願你的歡笑像節日的火花一樣閃耀！",
    "願你的聖誕節像完美的節日故事一樣，充滿魔法、奇跡和歡笑！",
    "在這個閃耀的聖誕季，願你的每一刻都像聖誕樹下的禮物一樣特別和喜悅！",
    "祝你聖誕快樂，願你的假期像聖誕夜的星光一樣明亮、祥和！",
    "祝你聖誕快樂，願你的節日像冬夜的星空一樣，充滿希望和夢想！",
    "祝你聖誕快樂，願你的假期比節日鈴響更加歡樂和動聽！",
    "在這個聖誕季節，願你的每一刻都像節日的禮物盒一樣，充滿驚喜和喜悅！",
    "願你的聖誕節充滿歡笑，像節日的歌聲一樣歡快悠揚！",
    "在這個美好的節日裏，願您的每一天都閃耀著快樂的光芒！"
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
