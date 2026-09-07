докс_розширити_код = async function () {
  const tsilTmLanguage = {
    $schema:
      "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",
    name: "ціль",
    patterns: [
      {
        include: "#keywords",
      },
      {
        include: "#strings",
      },
      {
        include: "#constants",
      },
      {
        include: "#comments",
      },
      {
        include: "#types",
      },
      {
        include: "#attributes",
      },
    ],
    repository: {
      keywords: {
        patterns: [
          {
            name: "keyword.control.tsil",
            match:
              "\\b(дія|структура|або|і|пусто|стрибнути|вабо|не|так|ні|стала|якщо|поки|взяти визначення|взяти біб|взяти|як|вернути|інакше|зовнішня|внутрішня|простір|синонім|змінна|ціль)\\b",
          },
        ],
      },
      strings: {
        name: "string.quoted.double.tsil",
        begin: '"',
        end: '"',
        patterns: [
          {
            name: "constant.character.escape.tsil",
            match: "\\\\.",
          },
        ],
      },
      constants: {
        patterns: [
          {
            name: "constant.numeric.tsil",
            match: "\\b\\d+(\\.\\d+)?\\b",
          },
        ],
      },
      types: {
        patterns: [
          {
            name: "support.type.primitive.tsil",
            match:
              "\\b(кд|ц8|ц16|ц32|ц64|ціле|п8|п16|п32|п64|природне|ю8|вміст|логічне|адреса|р32|р64|ніщо)\\b",
          },
        ],
      },
      comments: {
        patterns: [
          {
            name: "comment.line.tsil",
            match: "//.*$",
          },
          {
            name: "comment.block.tsil",
            begin: "/\\*",
            end: "\\*/",
          },
        ],
      },
      attributes: {
        name: "entity.other.attribute-name.tsil",
        match: "\\@[a-zA-Zа-яА-ЯіІїЇєЄґҐ_][a-zA-Zа-яА-ЯіІїЇєЄґҐ0-9_]*",
      },
    },
    scopeName: "source.ціль",
  };

  const mavkaTmLanguage = {
    $schema:
      "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",
    name: "мавка",
    patterns: [
      {
        include: "#keywords",
      },
      {
        include: "#strings",
      },
      {
        include: "#constants",
      },
      {
        include: "#comments",
      },
      {
        include: "#attributes",
      },
    ],
    repository: {
      keywords: {
        patterns: [
          {
            name: "keyword.control.tsil",
            match:
              "\\b(дія|кінець|дія|клас|спробувати|модуль|є|перебрати|впасти|зловити|структура|або|і|недійсне|стрибнути|не|дійсне|якщо|поки|взяти пак|взяти біб|взяти|як|вернути|інакше)\\b",
          },
        ],
      },
      strings: {
        name: "string.quoted.double.tsil",
        begin: '"',
        end: '"',
        patterns: [
          {
            name: "constant.character.escape.tsil",
            match: "\\\\.",
          },
        ],
      },
      constants: {
        patterns: [
          {
            name: "constant.numeric.tsil",
            match: "\\b\\d+(\\.\\d+)?\\b",
          },
        ],
      },
      comments: {
        patterns: [
          {
            name: "comment.line.tsil",
            match: ";;.*$",
          },
          {
            name: "comment.block.tsil",
            begin: ";\\*",
            end: "\\*;",
          },
        ],
      },
      attributes: {
        name: "entity.other.attribute-name.tsil",
        match: "\\@[a-zA-Zа-яА-ЯіІїЇєЄґҐ_][a-zA-Zа-яА-ЯіІїЇєЄґҐ0-9_]*",
      },
    },
    scopeName: "source.мавка",
  };

  await highlighter.loadLanguage(tsilTmLanguage);
  await highlighter.loadLanguage(mavkaTmLanguage);
};
