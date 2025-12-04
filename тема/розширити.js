md.options.highlight = (str, lang) => {
  const wrap = (content) => {
    if (lang === "теорія") {
      return `<pre class="XDocsCodeChinaWrapper"><img class="XDocsCodeChina" src="./ресурси/тема/чайна.лого.svg" alt="" /><div class="XDocsCodeImages"><img src="./ресурси/тема/теорія_х.лого.svg" alt="" /><img src="./ресурси/тема/теорія_х.лого.svg" alt="" /><img src="./ресурси/тема/теорія_х.лого.svg" alt="" /><img src="./ресурси/тема/теорія_х.лого.svg" alt="" /><img src="./ресурси/тема/теорія_х.лого.svg" alt="" /><img src="./ресурси/тема/теорія_х.лого.svg" alt="" /><img src="./ресурси/тема/теорія_х.лого.svg" alt="" /><img src="./ресурси/тема/теорія_х.лого.svg" alt="" /><img src="./ресурси/тема/теорія_х.лого.svg" alt="" /></div><div class="XDocsCodeWrapper"><code class="hljs">${content}</code></div><div class="XDocsCodeImages bottom"><img src="./ресурси/тема/теорія_х.лого.svg" alt="" /><img src="./ресурси/тема/теорія_х.лого.svg" alt="" /><img src="./ресурси/тема/теорія_х.лого.svg" alt="" /><img src="./ресурси/тема/теорія_х.лого.svg" alt="" /><img src="./ресурси/тема/теорія_х.лого.svg" alt="" /><img src="./ресурси/тема/теорія_х.лого.svg" alt="" /><img src="./ресурси/тема/теорія_х.лого.svg" alt="" /><img src="./ресурси/тема/теорія_х.лого.svg" alt="" /><img src="./ресурси/тема/теорія_х.лого.svg" alt="" /></div></pre>`;
    }
    return `<pre><div class="XDocsCodeWrapper"><code class="hljs">${content}</code></div></pre>`;
  };
  if (lang && hljs.getLanguage(lang)) {
    try {
      return wrap(
        hljs.highlight(str, {
          language: lang,
          ignoreIllegals: true
        }).value
      );
    } catch (__) {
    }
  }
  return wrap(md.utils.escapeHtml(str));
};

const mavkaKeywords = [
  "дія",
  "структура",
  "модуль",
  "спробувати",
  "зловити",
  "зрештою",
  "перебрати",
  "поки",
  "якщо",
  "інакше",
  "кінець",

  "рівно",
  "більше",
  "менше",
  "містить",
  "є",
  "не",

  "і",
  "або",
  "вабо",

  "впасти",
  "чекати",

  "передати",
  "перервати",
  "перестрибунти",
  "вернути",
  "взяти",
  "дати",

  "пак",
  "біб",
  "як",
];

const mavkaSyntax = () => {
  return {
    name: "Mavka",
    aliases: ["mavka"],
    keywords: {
      $pattern: /[a-zA-Zа-яА-ЯіІїЇєЄ_ʼ]+/,
      keyword:
        mavkaKeywords.join(" "),
      literal:
        "дійсне недійсне"
    },
    unicodeRegex: true,
    contains: [
      {
        begin: ["дія", /\(/],
        className: { 0: "keyword" }
      },
      {
        begin: [/[a-zA-Zа-яА-ЯіІїЇєЄ_]/, /[a-zA-Zа-яА-ЯіІїЇєЄ_ʼ0-9]*/, /\(/],
        className: { 1: "title.function", 2: "title.function" }
      },
      {
        begin: [/(^| |\[|\(|,)/, /[0-9]+(\.[0-9]+)?/, /(\.\.=?)/, /[0-9]+(\.[0-9]+)?/, /( |\]|\)|,|$)/],
        className: { 2: "number", 4: "number" }
      },
      {
        className: "string",
        begin: /"""/,
        end: /"""/,
        contains: [
          {
            begin: /%\(/,
            end: /\)/,
            scope: "subst"
          }
        ]
      },
      {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [
          {
            begin: /%\(/,
            end: /\)/,
            scope: "subst"
          }
        ]
      },
      {
        className: "string",
        begin: /'/,
        end: /'/
      },
      hljs.COMMENT(";\\*", "\\*;"),
      hljs.COMMENT(";;", "$"),
      {
        scope: "number",
        begin: /(-?)0ш([АБВГДЕабвгде0-9])+/
      },
      {
        scope: "number",
        begin: /(-?)0д([01])+/
      },
      {
        scope: "number",
        begin: /(?<![a-zA-Zа-яА-ЯіІїЇєЄ_ʼ0-9])[0-9]+(\.[0-9]+)?(?![a-zA-Zа-яА-ЯіІїЇєЄ_ʼ0-9])/
      }
    ]
  };
};
const theoriaSyntax = () => {
  return {
    name: "Theoria",
    aliases: ["theoria"],
    unicodeRegex: true,
    contains: [
      {
        begin: [/[A-ZА-ЯІЇЄ]/, /[a-zA-Zа-яА-ЯіІїЇєЄ_ʼ0-9]*/, /\(/],
        className: { 1: "title.class", 2: "title.class" }
      }
    ]
  };
};
hljs.registerLanguage("мавка", mavkaSyntax);
hljs.registerLanguage("теорія", theoriaSyntax);

const tsilSyntax = () => {
  return {
    name: "Tsil",
    aliases: ["tsil"],
    keywords: {
      $pattern: /[a-zA-Zа-яА-ЯіІїЇєЄ_ʼ]+/,
      keyword:
        "змінна стала ціль дія зовнішня вернути взяти означення якщо поки інакше",
      literal: "пусто так ні",
      type:
        "адреса позитивне п32 п64 дійсне д32 д64 ціле ц32 ц64 логічне double float int long short byte char природне р32 р64 н8 н16 н32 н64"
    },
    unicodeRegex: true,
    contains: [
      {
        begin: [/дія /, /[a-zA-Zа-яА-ЯіІїЇєЄ_ʼ]/, /[a-zA-Zа-яА-ЯіІїЇєЄ_ʼ0-9]*/, /\(/],
        className: { 2: "title.function", 3: "title.function" }
      },
      {
        begin: [/[a-zA-Zа-яА-ЯіІїЇєЄ_ʼ]/, /[a-zA-Zа-яА-ЯіІїЇєЄ_ʼ0-9]*/, /\(/],
        className: { 1: "built_in", 2: "built_in" }
      },
      {
        className: "string",
        begin: /"/,
        end: /"/
      },
      hljs.COMMENT("/\\*", "\\*/"),
      hljs.COMMENT("//", "$"),
      {
        scope: "number",
        begin: /^([0-9])+/
      },
      {
        scope: "number",
        begin: /(-?)0ш([АБВГЕДабвгед0-9])+/
      },
      {
        scope: "number",
        begin: /(-?)0д([01])+/
      }
    ]
  };
};
hljs.registerLanguage("ціль", tsilSyntax);
