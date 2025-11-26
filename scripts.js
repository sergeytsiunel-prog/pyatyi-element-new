// ---------- Диагностика по стихиям ----------
const elementBtns = document.querySelectorAll('.element-btn');
const elementResult = document.getElementById('element-result');
if (elementBtns && elementResult) {
  const elementMessages = {
    "Земля": "Ваша энергия сейчас нуждается в устойчивости и опоре. Фокусируйтесь на ощущениях тела и материальных задачах — отсюда начнётся трансформация.",
    "Вода": "Время довериться потоку жизни. Ваш ключ — мягкость, принятие и раскрытие чувств. Силы приходят из баланса эмоций и интуиции.",
    "Огонь": "Пора действовать! Проявить страсть, мотивацию, вдохновение — огненная энергия запускает прорывы и даёт импульс для изменений.",
    "Воздух": "Недостаток лёгкости или свежих идей? Включайте силу мысли, экспериментов и общения. Новые решения уже рядом!"
  };
  elementBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const el = btn.getAttribute('data-element');
      elementResult.textContent = elementMessages[el] || '';
      elementBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

// ---------- Мини-квиз индивидуальной рекомендации ----------
const quizForm = document.getElementById('quiz-form');
const quizResult = document.getElementById('quiz-result');

if (quizForm && quizResult) {
  quizForm.addEventListener('submit', e => {
    e.preventDefault();
    const energy = quizForm.energy.value;
    const element = quizForm.element.value;
    const wish = quizForm.wish.value.trim();

    let advice = '';

    // 1. По уровню энергии
    if (energy <= 3) {
      advice += "Сейчас правда мало сил — стоит начать с мягкого перепросмотра, работы с землёй и ритуалов восстановления.<br>";
    } else if (energy <= 7) {
      advice += "Силы есть, но их легко терять — акцент на диагностике и укреплении вашего портала.<br>";
    } else {
      advice += "Вы — в фазе невероятного потенциала! Пора закрепить успех и усилить индивидуальную частоту.<br>";
    }

    // 2. По стихии
    if (element) {
      advice += `<b>Ваша стихия:</b> ${element} — ${elementBtns.length && elementResult ? elementResult.textContent : ''}<br>`;
    }

    // 3. Пожелание
    if (wish.length > 2) {
      advice += `Главный запрос: <em>«${wish}»</em>. На интенсиве мы разберём этот запрос лично и выберем лучший инструмент под вашу задачу.`;
    } else {
      advice += "Опишите подробнее, какую перемену вы ищете — это поможет сформировать индивидуальную траекторию.";
    }

    quizResult.innerHTML = advice;
    quizResult.style.opacity = 1;
    setTimeout(() => { quizResult.style.opacity = 0.94; }, 1200);
  });
}

// ---------- UI: Активная кнопка в диагностике ----------
document.querySelectorAll('.element-btn').forEach(b =>
  b.addEventListener('click', function() {
    document.querySelectorAll('.element-btn').forEach(btn =>
      btn.classList.remove('active'));
    this.classList.add('active');
  })
);

// ---------- Плавный скролл по якорю ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const targetEl = document.querySelector(this.getAttribute("href"));
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({behavior: "smooth"});
    }
  });
});

/* ---------- Можно улучшать под свои нужды! ---------- */

