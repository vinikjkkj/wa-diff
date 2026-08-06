__d(
  "LexicalCodePrism.prod",
  [
    "Lexical",
    "LexicalCodeCore",
    "LexicalExtension",
    "prism-c",
    "prism-clike",
    "prism-cpp",
    "prism-css",
    "prism-java",
    "prism-javascript",
    "prism-markdown",
    "prism-markup",
    "prism-objectivec",
    "prism-powershell",
    "prism-python",
    "prism-rust",
    "prism-sql",
    "prism-swift",
    "prism-typescript",
    "prismjs",
  ],
  function $module_LexicalCodePrism_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    (require("prismjs"),
      require("prism-clike"),
      require("prism-javascript"),
      require("prism-markup"),
      require("prism-markdown"),
      require("prism-c"),
      require("prism-css"),
      require("prism-objectivec"),
      require("prism-sql"),
      require("prism-powershell"),
      require("prism-python"),
      require("prism-rust"),
      require("prism-swift"),
      require("prism-typescript"),
      require("prism-java"),
      require("prism-cpp"),
      (function (e) {
        e.languages.diff = {
          coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m],
        };
        var t = {
          "deleted-sign": "-",
          "deleted-arrow": "<",
          "inserted-sign": "+",
          "inserted-arrow": ">",
          unchanged: " ",
          diff: "!",
        };
        (Object.keys(t).forEach(function (n) {
          var r = t[n],
            i = [];
          (/^\w+$/.test(n) || i.push(/\w+/.exec(n)[0]),
            "diff" === n && i.push("bold"),
            (e.languages.diff[n] = {
              pattern: RegExp(
                "^(?:[" + r + "].*(?:\r\n?|\n|(?![\\s\\S])))+",
                "m",
              ),
              alias: i,
              inside: {
                line: {
                  pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
                  lookbehind: !0,
                },
                prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(n)[0] },
              },
            }));
        }),
          Object.defineProperty(e.languages.diff, "PREFIXES", { value: t }));
      })(Prism),
      (Prism.languages.go = Prism.languages.extend("clike", {
        string: {
          pattern: /(^|[^\\])\"(?:\\.|[^\"\\\r\n])*\"|`[^`]*`/,
          lookbehind: !0,
          greedy: !0,
        },
        keyword:
          /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
        boolean: /\b(?:_|false|iota|nil|true)\b/,
        number: [
          /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
          /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
          /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i,
        ],
        operator:
          /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
        builtin:
          /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/,
      })),
      Prism.languages.insertBefore("go", "string", {
        char: { pattern: /\'(?:\\.|[^\'\\\r\n]){0,10}\'/, greedy: !0 },
      }),
      delete Prism.languages.go["class-name"]);
    var r = globalThis.Prism || window.Prism,
      i = {
        c: "C",
        clike: "C-like",
        cpp: "C++",
        css: "CSS",
        go: "Go",
        html: "HTML",
        java: "Java",
        js: "JavaScript",
        markdown: "Markdown",
        objc: "Objective-C",
        plain: "Plain Text",
        powershell: "PowerShell",
        py: "Python",
        rust: "Rust",
        sql: "SQL",
        swift: "Swift",
        typescript: "TypeScript",
        xml: "XML",
      },
      o = {
        cpp: "cpp",
        golang: "go",
        java: "java",
        javascript: "js",
        md: "markdown",
        plaintext: "plain",
        python: "py",
        text: "plain",
        ts: "typescript",
      };
    function s(e) {
      return o[e] || e;
    }
    function a(e) {
      var t = (function (e) {
          var t = /^diff-([\w-]+)/i.exec(e);
          return t ? t[1] : null;
        })(e),
        n = t || e;
      try {
        return !!n && Object.prototype.hasOwnProperty.call(r.languages, n);
      } catch (e) {
        return !1;
      }
    }
    async function g(e, t, n) {}
    function d(e) {
      return "string" == typeof e
        ? e
        : Array.isArray(e)
          ? e.map(d).join("")
          : d(e.content);
    }
    function l(e, t) {
      var n = /^diff-([\w-]+)/i.exec(t),
        i = e.getTextContent();
      var o = r.tokenize(i, r.languages[n ? "diff" : t]);
      return (
        n &&
          (o = (function (e, t) {
            var n = t,
              i = r.languages[n],
              o = { tokens: e },
              s = r.languages.diff.PREFIXES;
            var _loop = function _loop() {
              if (
                "string" == typeof _e ||
                !(_e.type in s) ||
                !Array.isArray(_e.content)
              )
                return 1;
              var t = _e.type;
              var n = 0;
              var o = function o() {
                  return (
                    n++,
                    new r.Token("prefix", s[t], t.replace(/^(\w+).*/, "$1"))
                  );
                },
                a = _e.content.filter(function (e) {
                  return "string" == typeof e || "prefix" !== e.type;
                }),
                g = _e.content.length - a.length,
                l = r.tokenize(d(a), i);
              l.unshift(o());
              var u = /\r\n|\n/g,
                c = function c(e) {
                  var t = [];
                  u.lastIndex = 0;
                  var r,
                    i = 0;
                  for (; n < g && (r = u.exec(e)); ) {
                    var _n = r.index + r[0].length;
                    (t.push(e.slice(i, _n)), (i = _n), t.push(o()));
                  }
                  if (0 !== t.length)
                    return (i < e.length && t.push(e.slice(i)), t);
                },
                _p = function p(e) {
                  for (var _t = 0; _t < e.length && n < g; _t++) {
                    var _n2 = e[_t];
                    if ("string" == typeof _n2) {
                      var _r = c(_n2);
                      _r &&
                        (e.splice.apply(e, [_t, 1].concat(_r)),
                        (_t += _r.length - 1));
                    } else if ("string" == typeof _n2.content) {
                      var _e2 = c(_n2.content);
                      _e2 && (_n2.content = _e2);
                    } else
                      Array.isArray(_n2.content)
                        ? _p(_n2.content)
                        : _p([_n2.content]);
                  }
                };
              (_p(l), n < g && l.push(o()), (_e.content = l));
            };
            for (var _e of o.tokens) {
              if (_loop()) continue;
            }
            return o.tokens;
          })(o, n[1])),
        u(o)
      );
    }
    function u(t, r) {
      var i = [];
      for (var _o of t)
        if ("string" == typeof _o)
          require("Lexical").tokenizeRawText(_o, {
            linebreak: function linebreak() {
              return i.push(require("Lexical").$createLineBreakNode());
            },
            tab: function tab() {
              return i.push(require("Lexical").$createTabNode());
            },
            text: function text(t) {
              return i.push(
                require("LexicalCodeCore").$createCodeHighlightNode(t, r),
              );
            },
          });
        else {
          var _e3 = _o.content,
            _t2 = _o.alias;
          "string" == typeof _e3
            ? i.push.apply(
                i,
                u(
                  [_e3],
                  "prefix" === _o.type && "string" == typeof _t2
                    ? _t2
                    : _o.type,
                ),
              )
            : Array.isArray(_e3) &&
              i.push.apply(
                i,
                u(_e3, "unchanged" === _o.type ? void 0 : _o.type),
              );
        }
      return i;
    }
    var c = {
      $tokenize: function $tokenize(t, n) {
        var r = n || this.defaultLanguage;
        return null === r
          ? require("LexicalCodeCore").$plainifyCodeContent(t.getTextContent())
          : l(t, r);
      },
      defaultLanguage: require("LexicalCodeCore").DEFAULT_CODE_LANGUAGE,
      tokenize: function tokenize(e, t) {
        var n = this.defaultLanguage;
        return r.tokenize(
          e,
          r.languages[t || ""] || (null === n ? void 0 : r.languages[n]),
        );
      },
    };
    function p(t, r, i, o) {
      var s = o.getParent();
      require("LexicalCodeCore").$isCodeNode(s)
        ? h(t, r, i, s)
        : require("LexicalCodeCore").$isCodeHighlightNode(o) &&
          o.replace(require("Lexical").$createTextNode(o.__text));
    }
    function f(e, t) {
      var r = t.getElementByKey(e.getKey());
      if (null === r) return;
      var i = e.getChildren(),
        o = i.length;
      if (o === r.__cachedChildrenLength) return;
      r.__cachedChildrenLength = o;
      var s = "1",
        a = 1;
      for (var _e4 = 0; _e4 < o; _e4++)
        require("Lexical").$isLineBreakNode(i[_e4]) && (s += "\n" + ++a);
      r.setAttribute("data-gutter", s);
    }
    function h(t, r, i, o) {
      var s = i.nodesCurrentlyHighlighting,
        d = o.getKey();
      void 0 === o.getLanguage() &&
        null !== r.defaultLanguage &&
        o.setLanguage(r.defaultLanguage);
      var l = o.getLanguage() || r.defaultLanguage;
      if (l) {
        if (!a(l))
          return (
            o.getIsSyntaxHighlightSupported() &&
              o.setIsSyntaxHighlightSupported(!1),
            void g()
          );
        o.getIsSyntaxHighlightSupported() ||
          o.setIsSyntaxHighlightSupported(!0);
      } else
        o.getIsSyntaxHighlightSupported() &&
          o.setIsSyntaxHighlightSupported(!1);
      s.has(d) ||
        (s.add(d),
        i.didTransform ||
          ((i.didTransform = !0),
          require("Lexical").$onUpdate(function () {
            ((i.didTransform = !1), s.clear());
          })),
        (function (t, r) {
          var i = require("Lexical").$getNodeByKey(t);
          if (!require("LexicalCodeCore").$isCodeNode(i) || !i.isAttached())
            return;
          var o = require("Lexical").$getSelection();
          if (!require("Lexical").$isRangeSelection(o)) return void r();
          var s = o.anchor,
            a = s.offset,
            g =
              "element" === s.type &&
              require("Lexical").$isLineBreakNode(
                i.getChildAtIndex(s.offset - 1),
              );
          var d = 0;
          if (!g) {
            var _e5 = s.getNode();
            d =
              a +
              _e5.getPreviousSiblings().reduce(function (e, t) {
                return e + t.getTextContentSize();
              }, 0);
          }
          if (!r()) return;
          if (g) return void s.getNode().select(a, a);
          i.getChildren().some(function (e) {
            var t = require("Lexical").$isTextNode(e);
            if (t || require("Lexical").$isLineBreakNode(e)) {
              var _n3 = e.getTextContentSize();
              if (t && _n3 >= d) return (e.select(d, d), !0);
              d -= _n3;
            }
            return !1;
          });
        })(d, function () {
          var t = require("Lexical").$getNodeByKey(d);
          if (!require("LexicalCodeCore").$isCodeNode(t) || !t.isAttached())
            return !1;
          var i = t.getLanguage() || r.defaultLanguage,
            s = r.$tokenize(t, i != null ? i : void 0),
            a = (function (e, t) {
              var n = 0;
              for (; n < e.length && y(e[n], t[n]); ) n++;
              var r = e.length,
                i = t.length,
                o = Math.min(r, i) - n;
              var s = 0;
              for (; s < o; )
                if ((s++, !y(e[r - s], t[i - s]))) {
                  s--;
                  break;
                }
              var a = n,
                g = r - s,
                d = t.slice(n, i - s);
              return { from: a, nodesForReplacement: d, to: g };
            })(t.getChildren(), s),
            g = a.from,
            l = a.to,
            u = a.nodesForReplacement;
          return !(g === l && !u.length) && (o.splice(g, l - g, u), !0);
        }));
    }
    function y(t, r) {
      return (
        (require("LexicalCodeCore").$isCodeHighlightNode(t) &&
          require("LexicalCodeCore").$isCodeHighlightNode(r) &&
          t.__text === r.__text &&
          t.__highlightType === r.__highlightType) ||
        (require("Lexical").$isTabNode(t) &&
          require("Lexical").$isTabNode(r)) ||
        (require("Lexical").$isLineBreakNode(t) &&
          require("Lexical").$isLineBreakNode(r))
      );
    }
    function m(t, r) {
      var i = [];
      !0 !== t._headless &&
        i.push(
          t.registerMutationListener(
            require("LexicalCodeCore").CodeNode,
            function (e) {
              t.read("latest", function () {
                for (var _ref2 of e) {
                  var _r2 = _ref2[0];
                  var _i = _ref2[1];
                  if ("destroyed" !== _i) {
                    var _e6 = require("Lexical").$getNodeByKey(_r2);
                    null !== _e6 && f(_e6, t);
                  }
                }
              });
            },
            { skipInitialization: !1 },
          ),
        );
      var o = { didTransform: !1, nodesCurrentlyHighlighting: new Set() };
      return (
        i.push(
          t.registerNodeTransform(
            require("LexicalCodeCore").CodeNode,
            h.bind(null, t, r, o),
          ),
          t.registerNodeTransform(
            require("Lexical").TextNode,
            p.bind(null, t, r, o),
          ),
          t.registerNodeTransform(
            require("LexicalCodeCore").CodeHighlightNode,
            p.bind(null, t, r, o),
          ),
        ),
        require("Lexical").mergeRegister.apply(require("Lexical"), i)
      );
    }
    var x = require("Lexical").defineExtension({
      build: function build(e, n) {
        return require("LexicalExtension").namedSignals(n);
      },
      config: require("Lexical").safeCast({ disabled: !1, tokenizer: c }),
      dependencies: [
        require("LexicalCodeCore").CodeExtension,
        require("LexicalCodeCore").CodeIndentExtension,
      ],
      name: "LexicalCodePrism",
      register: function register(e, n, r) {
        var i = r.getOutput();
        return require("LexicalExtension").effect(function () {
          if (!i.disabled.value) return m(e, i.tokenizer.value);
        });
      },
    });
    ((exports.CODE_LANGUAGE_FRIENDLY_NAME_MAP = i),
      (exports.CODE_LANGUAGE_MAP = o),
      (exports.CodePrismExtension = x),
      (exports.PrismTokenizer = c),
      (exports.getCodeLanguageOptions = function () {
        var e = [];
        for (var _ref4 of Object.entries(i)) {
          var _t3 = _ref4[0];
          var _n4 = _ref4[1];
          e.push([_t3, _n4]);
        }
        return e;
      }),
      (exports.getCodeLanguages = function () {
        return Object.keys(r.languages)
          .filter(function (e) {
            return "function" != typeof r.languages[e];
          })
          .sort();
      }),
      (exports.getCodeThemeOptions = function () {
        return [];
      }),
      (exports.getLanguageFriendlyName = function (e) {
        var t = s(e);
        return i[t] || t;
      }),
      (exports.isCodeLanguageLoaded = a),
      (exports.loadCodeLanguage = g),
      (exports.normalizeCodeLanguage = s),
      (exports.registerCodeHighlighting = function (t, r) {
        if (r === void 0) {
          r = c;
        }
        if (
          !t.hasNodes([
            require("LexicalCodeCore").CodeNode,
            require("LexicalCodeCore").CodeHighlightNode,
          ])
        )
          throw new Error(
            "CodeHighlightPlugin: CodeNode or CodeHighlightNode not registered on editor",
          );
        return require("Lexical").mergeRegister(
          m(t, r),
          require("LexicalCodeCore").registerCodeIndentation(t),
        );
      }));
  },
  null,
);
