<script setup>
const module = [
  {
    name: "сталі.м",
    text: `
Е = 2.71
ПІ = 3.14

дати Е, ПІ
`.trim(),
  },
  {
    name: "старт.м",
    text: `
взяти сталі

друк(сталі)
`.trim(),
  },
];

const submodule = `
модуль двигуни
  структура ІоннийДвигун
    ;; властивості
  кінець

  структура РеактивнийДвигун
    ;; властивості
  кінець

  дати ІоннийДвигун
  дати РеактивнийДвигун
кінець

друк(двигуни)
`.trim();

const moduleStructure = `
структура Модуль
  назва текст
кінець
`.trim();

useHead({
  title: "Модуль | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/словник" next="/документація/умова">
    <h1 class="docs-content-title">Модуль</h1>
    <p>
      Модуль
      <span style="font-weight: 500" class="hljs-keyword">є</span> елементарним
      обʼєктом <span class="diia-word">Мавки</span>, який зберігає результат
      виконання вказівок.
    </p>
    <p>
      Властивостями модуля
      <span style="font-weight: 500" class="hljs-keyword">є</span>
      обʼєкти, збережені вказівкою <code>дати</code>.
    </p>
    <p>
      Модуль описано спеціальною
      <span style="font-weight: 500" class="hljs-keyword">структурою </span>
      <code>Модуль</code>.
    </p>
    <hr />
    <h3>Створення модуля</h3>
    <p>
      <span style="font-weight: 500" class="hljs-keyword">Модуль</span>
      створюється автоматично на основі файлу.
    </p>
    <UiCodeBlock :files="module" />
    <hr />
    <h3>Створення підмодуля</h3>
    <p>
      Підмодуль може бути створений за допомогою ключового слова
      <code>модуль</code>. Також необхідно вказати назву модуля
      <span style="font-weight: 500" class="hljs-keyword">та</span> його тіло у
      вигляді вказівок.
    </p>
    <UiCodeBlock :files="submodule" />
    <hr />
    <h3>Структура модуля</h3>
    <UiCodeBlock :files="moduleStructure" />
  </UiDocsWrapper>
</template>
