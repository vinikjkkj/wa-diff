__d(
  "prism-markdown",
  [],
  function (t, n, r, o, a, i) {
    (function (e) {
      function t(e) {
        return (
          (e = e.replace(/<inner>/g, function () {
            return "(?:\\\\.|[^\\\\\n\r]|(?:\n|\r\n?)(?![\r\n]))";
          })),
          RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:" + e + ")")
        );
      }
      var n = "(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+",
        r = "\\|?__(?:\\|__)+\\|?(?:(?:\n|\r\n?)|(?![^]))".replace(
          /__/g,
          function () {
            return n;
          },
        ),
        o = "\\|?[ 	]*:?-{3,}:?[ 	]*(?:\\|[ 	]*:?-{3,}:?[ 	]*)+\\|?(?:\n|\r\n?)";
      ((e.languages.markdown = e.languages.extend("markup", {})),
        e.languages.insertBefore("markdown", "prolog", {
          "front-matter-block": {
            pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              punctuation: /^---|---$/,
              "front-matter": {
                pattern: /\S+(?:\s+\S+)*/,
                alias: ["yaml", "language-yaml"],
                inside: e.languages.yaml,
              },
            },
          },
          blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
          table: {
            pattern: RegExp("^" + r + o + "(?:" + r + ")*", "m"),
            inside: {
              "table-data-rows": {
                pattern: RegExp("^(" + r + o + ")(?:" + r + ")*$"),
                lookbehind: !0,
                inside: {
                  "table-data": {
                    pattern: RegExp(n),
                    inside: e.languages.markdown,
                  },
                  punctuation: /\|/,
                },
              },
              "table-line": {
                pattern: RegExp("^(" + r + ")" + o + "$"),
                lookbehind: !0,
                inside: { punctuation: /\||:?-{3,}:?/ },
              },
              "table-header-row": {
                pattern: RegExp("^" + r + "$"),
                inside: {
                  "table-header": {
                    pattern: RegExp(n),
                    alias: "important",
                    inside: e.languages.markdown,
                  },
                  punctuation: /\|/,
                },
              },
            },
          },
          code: [
            {
              pattern:
                /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
              lookbehind: !0,
              alias: "keyword",
            },
            {
              pattern: /^```[\s\S]*?^```$/m,
              greedy: !0,
              inside: {
                "code-block": {
                  pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                  lookbehind: !0,
                },
                "code-language": { pattern: /^(```).+/, lookbehind: !0 },
                punctuation: /```/,
              },
            },
          ],
          title: [
            {
              pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
              alias: "important",
              inside: { punctuation: /==+$|--+$/ },
            },
            {
              pattern: /(^\s*)#.+/m,
              lookbehind: !0,
              alias: "important",
              inside: { punctuation: /^#+|#+$/ },
            },
          ],
          hr: {
            pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
            lookbehind: !0,
            alias: "punctuation",
          },
          list: {
            pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
            lookbehind: !0,
            alias: "punctuation",
          },
          "url-reference": {
            pattern:
              /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
            inside: {
              variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
              string:
                /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
              punctuation: /^[\[\]!:]|[<>]/,
            },
            alias: "url",
          },
          bold: {
            pattern: t(
              "\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*",
            ),
            lookbehind: !0,
            greedy: !0,
            inside: {
              content: {
                pattern: /(^..)[\s\S]+(?=..$)/,
                lookbehind: !0,
                inside: {},
              },
              punctuation: /\*\*|__/,
            },
          },
          italic: {
            pattern: t(
              "\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*",
            ),
            lookbehind: !0,
            greedy: !0,
            inside: {
              content: {
                pattern: /(^.)[\s\S]+(?=.$)/,
                lookbehind: !0,
                inside: {},
              },
              punctuation: /[*_]/,
            },
          },
          strike: {
            pattern: t("(~~?)(?:(?!~)<inner>)+\\2"),
            lookbehind: !0,
            greedy: !0,
            inside: {
              content: {
                pattern: /(^~~?)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: {},
              },
              punctuation: /~~?/,
            },
          },
          "code-snippet": {
            pattern:
              /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
            lookbehind: !0,
            greedy: !0,
            alias: ["code", "keyword"],
          },
          url: {
            pattern: t(
              '!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[	 ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ 	]?\\[(?:(?!\\])<inner>)+\\])',
            ),
            lookbehind: !0,
            greedy: !0,
            inside: {
              operator: /^!/,
              content: {
                pattern: /(^\[)[^\]]+(?=\])/,
                lookbehind: !0,
                inside: {},
              },
              variable: {
                pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                lookbehind: !0,
              },
              url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
              string: {
                pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                lookbehind: !0,
              },
            },
          },
        }),
        ["url", "bold", "italic", "strike"].forEach(function (t) {
          ["url", "bold", "italic", "strike", "code-snippet"].forEach(
            function (n) {
              t !== n &&
                (e.languages.markdown[t].inside.content.inside[n] =
                  e.languages.markdown[n]);
            },
          );
        }),
        e.hooks.add("after-tokenize", function (e) {
          (e.language !== "markdown" && e.language !== "md") ||
            (function e(t) {
              if (t && typeof t != "string")
                for (var n = 0, r = t.length; n < r; n++) {
                  var o = t[n];
                  if (o.type === "code") {
                    var a = o.content[1],
                      i = o.content[3];
                    if (
                      a &&
                      i &&
                      a.type === "code-language" &&
                      i.type === "code-block" &&
                      typeof a.content == "string"
                    ) {
                      var l = a.content
                          .replace(/\b#/g, "sharp")
                          .replace(/\b\+\+/g, "pp"),
                        s =
                          "language-" +
                          (l = (/[a-z][\w-]*/i.exec(l) || [
                            "",
                          ])[0].toLowerCase());
                      i.alias
                        ? typeof i.alias == "string"
                          ? (i.alias = [i.alias, s])
                          : i.alias.push(s)
                        : (i.alias = [s]);
                    }
                  } else e(o.content);
                }
            })(e.tokens);
        }),
        e.hooks.add("wrap", function (t) {
          if (t.type === "code-block") {
            for (var n = "", r = 0, o = t.classes.length; r < o; r++) {
              var s = t.classes[r],
                u = /language-(.+)/.exec(s);
              if (u) {
                n = u[1];
                break;
              }
            }
            var c = e.languages[n];
            if (c)
              t.content = e.highlight(
                t.content
                  .replace(a, "")
                  .replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (e, t) {
                    var n;
                    return (t = t.toLowerCase())[0] === "#"
                      ? ((n =
                          t[1] === "x"
                            ? parseInt(t.slice(2), 16)
                            : Number(t.slice(1))),
                        l(n))
                      : i[t] || e;
                  }),
                c,
                n,
              );
            else if (n && n !== "none" && e.plugins.autoloader) {
              var d =
                "md-" +
                new Date().valueOf() +
                "-" +
                Math.floor(1e16 * Math.random());
              ((t.attributes.id = d),
                e.plugins.autoloader.loadLanguages(n, function () {
                  var t = document.getElementById(d);
                  t &&
                    (t.innerHTML = e.highlight(
                      t.textContent,
                      e.languages[n],
                      n,
                    ));
                }));
            }
          }
        }));
      var a = RegExp(e.languages.markup.tag.pattern.source, "gi"),
        i = { amp: "&", lt: "<", gt: ">", quot: '"' },
        l = String.fromCodePoint || String.fromCharCode;
      e.languages.md = e.languages.markdown;
    })(Prism);
  },
  null,
);
