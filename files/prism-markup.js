__d(
  "prism-markup",
  [],
  function (t, n, r, o, a, i) {
    ((Prism.languages.markup = {
      comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
      prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
      doctype: {
        pattern:
          /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
          "internal-subset": {
            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
            lookbehind: !0,
            greedy: !0,
            inside: null,
          },
          string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
          punctuation: /^<!|>$|[[\]]/,
          "doctype-tag": /^DOCTYPE/i,
          name: /[^\s<>'"]+/,
        },
      },
      cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
      tag: {
        pattern:
          /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/,
            inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
          },
          "special-attr": [],
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              punctuation: [
                { pattern: /^=/, alias: "attr-equals" },
                { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
              ],
            },
          },
          punctuation: /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: { namespace: /^[^\s>\/:]+:/ },
          },
        },
      },
      entity: [
        { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
        /&#x?[\da-f]{1,8};/i,
      ],
    }),
      (Prism.languages.markup.tag.inside["attr-value"].inside.entity =
        Prism.languages.markup.entity),
      (Prism.languages.markup.doctype.inside["internal-subset"].inside =
        Prism.languages.markup),
      Prism.hooks.add("wrap", function (e) {
        e.type === "entity" &&
          (e.attributes.title = e.content.replace(/&amp;/, "&"));
      }),
      Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
        value: function (e, t) {
          var n = {};
          ((n["language-" + t] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: !0,
            inside: Prism.languages[t],
          }),
            (n.cdata = /^<!\[CDATA\[|\]\]>$/i));
          var r = {
            "included-cdata": {
              pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
              inside: n,
            },
          };
          r["language-" + t] = {
            pattern: /[\s\S]+/,
            inside: Prism.languages[t],
          };
          var o = {};
          ((o[e] = {
            pattern: RegExp(
              "(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(
                /__/g,
                function () {
                  return e;
                },
              ),
              "i",
            ),
            lookbehind: !0,
            greedy: !0,
            inside: r,
          }),
            Prism.languages.insertBefore("markup", "cdata", o));
        },
      }),
      Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
        value: function (e, t) {
          Prism.languages.markup.tag.inside["special-attr"].push({
            pattern: RegExp(
              "(^|[\"'\\s])(?:" +
                e +
                ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))",
              "i",
            ),
            lookbehind: !0,
            inside: {
              "attr-name": /^[^\s=]+/,
              "attr-value": {
                pattern: /=[\s\S]+/,
                inside: {
                  value: {
                    pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                    lookbehind: !0,
                    alias: [t, "language-" + t],
                    inside: Prism.languages[t],
                  },
                  punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
                },
              },
            },
          });
        },
      }),
      (Prism.languages.html = Prism.languages.markup),
      (Prism.languages.mathml = Prism.languages.markup),
      (Prism.languages.svg = Prism.languages.markup),
      (Prism.languages.xml = Prism.languages.extend("markup", {})),
      (Prism.languages.ssml = Prism.languages.xml),
      (Prism.languages.atom = Prism.languages.xml),
      (Prism.languages.rss = Prism.languages.xml));
  },
  null,
);
