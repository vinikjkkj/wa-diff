__d(
  "marked-1.1.1",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      function e() {
        return {
          baseUrl: null,
          breaks: !1,
          gfm: !0,
          headerIds: !0,
          headerPrefix: "",
          highlight: null,
          langPrefix: "language-",
          mangle: !0,
          pedantic: !1,
          renderer: null,
          sanitize: !1,
          sanitizer: null,
          silent: !1,
          smartLists: !1,
          smartypants: !1,
          tokenizer: null,
          walkTokens: null,
          xhtml: !1,
        };
      }
      function t(e) {
        l.exports.defaults = e;
      }
      l.exports = { defaults: e(), getDefaults: e, changeDefaults: t };
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    var d = {},
      m = { exports: d };
    function p() {
      var e = /[&<>\"\']/,
        t = /[&<>\"\']/g,
        n = /[<>\"\']|&(?!#?\w+;)/,
        r = /[<>\"\']|&(?!#?\w+;)/g,
        o = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        },
        a = function (t) {
          return o[t];
        };
      function i(o, i) {
        if (i) {
          if (e.test(o)) return o.replace(t, a);
        } else if (n.test(o)) return o.replace(r, a);
        return o;
      }
      var l = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
      function s(e) {
        return e.replace(l, function (e, t) {
          return (
            (t = t.toLowerCase()),
            t === "colon"
              ? ":"
              : t.charAt(0) === "#"
                ? t.charAt(1) === "x"
                  ? String.fromCharCode(parseInt(t.substring(2), 16))
                  : String.fromCharCode(+t.substring(1))
                : ""
          );
        });
      }
      var u = /(^|[^\[])\^/g;
      function c(e, t) {
        ((e = e.source || e), (t = t || ""));
        var n = {
          replace: function (r, o) {
            return (
              (o = o.source || o),
              (o = o.replace(u, "$1")),
              (e = e.replace(r, o)),
              n
            );
          },
          getRegex: function () {
            return new RegExp(e, t);
          },
        };
        return n;
      }
      var d = /[^\w:]/g,
        p = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
      function _(e, t, n) {
        if (e) {
          var r;
          try {
            r = decodeURIComponent(s(n)).replace(d, "").toLowerCase();
          } catch (e) {
            return null;
          }
          if (
            r.indexOf("javascript:") === 0 ||
            r.indexOf("vbscript:") === 0 ||
            r.indexOf("data:") === 0
          )
            return null;
        }
        t && !p.test(n) && (n = C(t, n));
        try {
          n = encodeURI(n).replace(/%25/g, "%");
        } catch (e) {
          return null;
        }
        return n;
      }
      var f = {},
        g = /^[^:]+:\/*[^/]*$/,
        h = /^([^:]+:)[\s\S]*$/,
        y = /^([^:]+:\/*[^/]*)[\s\S]*$/;
      function C(e, t) {
        (f[" " + e] ||
          (g.test(e) ? (f[" " + e] = e + "/") : (f[" " + e] = R(e, "/", !0))),
          (e = f[" " + e]));
        var n = e.indexOf(":") === -1;
        return t.substring(0, 2) === "//"
          ? n
            ? t
            : e.replace(h, "$1") + t
          : t.charAt(0) === "/"
            ? n
              ? t
              : e.replace(y, "$1") + t
            : e + t;
      }
      var b = { exec: function () {} };
      function v(e) {
        for (var t = 1, n, r; t < arguments.length; t++) {
          n = arguments[t];
          for (r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }
      function S(e, t) {
        var n = e.replace(/\|/g, function (e, t, n) {
            for (var r = !1, o = t; --o >= 0 && n[o] === "\\"; ) r = !r;
            return r ? "|" : " |";
          }),
          r = n.split(/ \|/),
          o = 0;
        if (r.length > t) r.splice(t);
        else for (; r.length < t; ) r.push("");
        for (; o < r.length; o++) r[o] = r[o].trim().replace(/\\\|/g, "|");
        return r;
      }
      function R(e, t, n) {
        var r = e.length;
        if (r === 0) return "";
        for (var o = 0; o < r; ) {
          var a = e.charAt(r - o - 1);
          if (a === t && !n) o++;
          else if (a !== t && n) o++;
          else break;
        }
        return e.substr(0, r - o);
      }
      function L(e, t) {
        if (e.indexOf(t[1]) === -1) return -1;
        for (var n = e.length, r = 0, o = 0; o < n; o++)
          if (e[o] === "\\") o++;
          else if (e[o] === t[0]) r++;
          else if (e[o] === t[1] && (r--, r < 0)) return o;
        return -1;
      }
      function E(e) {
        e && e.sanitize && e.silent;
      }
      m.exports = {
        escape: i,
        unescape: s,
        edit: c,
        cleanUrl: _,
        resolveUrl: C,
        noopTest: b,
        merge: v,
        splitCells: S,
        rtrim: R,
        findClosingBracket: L,
        checkSanitizeDeprecation: E,
      };
    }
    var _ = !1;
    function f() {
      return (_ || ((_ = !0), p()), m.exports);
    }
    var g = {},
      h = { exports: g };
    function y() {
      var e = c(),
        t = e.defaults,
        n = f(),
        r = n.rtrim,
        o = n.splitCells,
        a = n.escape,
        i = n.findClosingBracket;
      function l(e, t, n) {
        var r = t.href,
          o = t.title ? a(t.title) : null,
          i = e[1].replace(/\\([\[\]])/g, "$1");
        return e[0].charAt(0) !== "!"
          ? { type: "link", raw: n, href: r, title: o, text: i }
          : { type: "image", raw: n, href: r, title: o, text: a(i) };
      }
      function s(e, t) {
        var n = e.match(/^(\s+)(?:```)/);
        if (n === null) return t;
        var r = n[1];
        return t
          .split("\n")
          .map(function (e) {
            var t = e.match(/^\s+/);
            if (t === null) return e;
            var n = t[0];
            return n.length >= r.length ? e.slice(r.length) : e;
          })
          .join("\n");
      }
      h.exports = (function () {
        function e(e) {
          this.options = e || t;
        }
        var n = e.prototype;
        return (
          (n.space = function (t) {
            var e = this.rules.block.newline.exec(t);
            if (e)
              return e[0].length > 1
                ? { type: "space", raw: e[0] }
                : { raw: "\n" };
          }),
          (n.code = function (t, n) {
            var e = this.rules.block.code.exec(t);
            if (e) {
              var o = n[n.length - 1];
              if (o && o.type === "paragraph")
                return { raw: e[0], text: e[0].trimRight() };
              var a = e[0].replace(/^ {4}/gm, "");
              return {
                type: "code",
                raw: e[0],
                codeBlockStyle: "indented",
                text: this.options.pedantic ? a : r(a, "\n"),
              };
            }
          }),
          (n.fences = function (t) {
            var e = this.rules.block.fences.exec(t);
            if (e) {
              var n = e[0],
                r = s(n, e[3] || "");
              return {
                type: "code",
                raw: n,
                lang: e[2] ? e[2].trim() : e[2],
                text: r,
              };
            }
          }),
          (n.heading = function (t) {
            var e = this.rules.block.heading.exec(t);
            if (e)
              return {
                type: "heading",
                raw: e[0],
                depth: e[1].length,
                text: e[2],
              };
          }),
          (n.nptable = function (t) {
            var e = this.rules.block.nptable.exec(t);
            if (e) {
              var n = {
                type: "table",
                header: o(e[1].replace(/^ *| *\| *$/g, "")),
                align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                cells: e[3] ? e[3].replace(/\n$/, "").split("\n") : [],
                raw: e[0],
              };
              if (n.header.length === n.align.length) {
                var r = n.align.length,
                  a;
                for (a = 0; a < r; a++)
                  /^ *-+: *$/.test(n.align[a])
                    ? (n.align[a] = "right")
                    : /^ *:-+: *$/.test(n.align[a])
                      ? (n.align[a] = "center")
                      : /^ *:-+ *$/.test(n.align[a])
                        ? (n.align[a] = "left")
                        : (n.align[a] = null);
                for (r = n.cells.length, a = 0; a < r; a++)
                  n.cells[a] = o(n.cells[a], n.header.length);
                return n;
              }
            }
          }),
          (n.hr = function (t) {
            var e = this.rules.block.hr.exec(t);
            if (e) return { type: "hr", raw: e[0] };
          }),
          (n.blockquote = function (t) {
            var e = this.rules.block.blockquote.exec(t);
            if (e) {
              var n = e[0].replace(/^ *> ?/gm, "");
              return { type: "blockquote", raw: e[0], text: n };
            }
          }),
          (n.list = function (t) {
            var e = this.rules.block.list.exec(t);
            if (e) {
              for (
                var n = e[0],
                  r = e[2],
                  o = r.length > 1,
                  a = r[r.length - 1] === ")",
                  i = {
                    type: "list",
                    raw: n,
                    ordered: o,
                    start: o ? +r.slice(0, -1) : "",
                    loose: !1,
                    items: [],
                  },
                  l = e[0].match(this.rules.block.item),
                  s = !1,
                  u,
                  c,
                  d,
                  m,
                  p,
                  _,
                  f,
                  g = l.length,
                  h = 0;
                h < g;
                h++
              )
                ((u = l[h]),
                  (n = u),
                  (c = u.length),
                  (u = u.replace(/^ *([*+-]|\d+[.)]) */, "")),
                  ~u.indexOf("\n ") &&
                    ((c -= u.length),
                    (u = this.options.pedantic
                      ? u.replace(/^ {1,4}/gm, "")
                      : u.replace(new RegExp("^ {1," + c + "}", "gm"), ""))),
                  h !== g - 1 &&
                    ((d = this.rules.block.bullet.exec(l[h + 1])[0]),
                    (o
                      ? d.length === 1 || (!a && d[d.length - 1] === ")")
                      : d.length > 1 || (this.options.smartLists && d !== r)) &&
                      ((m = l.slice(h + 1).join("\n")),
                      (i.raw = i.raw.substring(0, i.raw.length - m.length)),
                      (h = g - 1))),
                  (p = s || /\n\n(?!\s*$)/.test(u)),
                  h !== g - 1 &&
                    ((s = u.charAt(u.length - 1) === "\n"), p || (p = s)),
                  p && (i.loose = !0),
                  (_ = /^\[[ xX]\] /.test(u)),
                  (f = void 0),
                  _ &&
                    ((f = u[1] !== " "), (u = u.replace(/^\[[ xX]\] +/, ""))),
                  i.items.push({
                    type: "list_item",
                    raw: n,
                    task: _,
                    checked: f,
                    loose: p,
                    text: u,
                  }));
              return i;
            }
          }),
          (n.html = function (t) {
            var e = this.rules.block.html.exec(t);
            if (e)
              return {
                type: this.options.sanitize ? "paragraph" : "html",
                raw: e[0],
                pre:
                  !this.options.sanitizer &&
                  (e[1] === "pre" || e[1] === "script" || e[1] === "style"),
                text: this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(e[0])
                    : a(e[0])
                  : e[0],
              };
          }),
          (n.def = function (t) {
            var e = this.rules.block.def.exec(t);
            if (e) {
              e[3] && (e[3] = e[3].substring(1, e[3].length - 1));
              var n = e[1].toLowerCase().replace(/\s+/g, " ");
              return { tag: n, raw: e[0], href: e[2], title: e[3] };
            }
          }),
          (n.table = function (t) {
            var e = this.rules.block.table.exec(t);
            if (e) {
              var n = {
                type: "table",
                header: o(e[1].replace(/^ *| *\| *$/g, "")),
                align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                cells: e[3] ? e[3].replace(/\n$/, "").split("\n") : [],
              };
              if (n.header.length === n.align.length) {
                n.raw = e[0];
                var r = n.align.length,
                  a;
                for (a = 0; a < r; a++)
                  /^ *-+: *$/.test(n.align[a])
                    ? (n.align[a] = "right")
                    : /^ *:-+: *$/.test(n.align[a])
                      ? (n.align[a] = "center")
                      : /^ *:-+ *$/.test(n.align[a])
                        ? (n.align[a] = "left")
                        : (n.align[a] = null);
                for (r = n.cells.length, a = 0; a < r; a++)
                  n.cells[a] = o(
                    n.cells[a].replace(/^ *\| *| *\| *$/g, ""),
                    n.header.length,
                  );
                return n;
              }
            }
          }),
          (n.lheading = function (t) {
            var e = this.rules.block.lheading.exec(t);
            if (e)
              return {
                type: "heading",
                raw: e[0],
                depth: e[2].charAt(0) === "=" ? 1 : 2,
                text: e[1],
              };
          }),
          (n.paragraph = function (t) {
            var e = this.rules.block.paragraph.exec(t);
            if (e)
              return {
                type: "paragraph",
                raw: e[0],
                text:
                  e[1].charAt(e[1].length - 1) === "\n"
                    ? e[1].slice(0, -1)
                    : e[1],
              };
          }),
          (n.text = function (t, n) {
            var e = this.rules.block.text.exec(t);
            if (e) {
              var r = n[n.length - 1];
              return r && r.type === "text"
                ? { raw: e[0], text: e[0] }
                : { type: "text", raw: e[0], text: e[0] };
            }
          }),
          (n.escape = function (t) {
            var e = this.rules.inline.escape.exec(t);
            if (e) return { type: "escape", raw: e[0], text: a(e[1]) };
          }),
          (n.tag = function (t, n, r) {
            var e = this.rules.inline.tag.exec(t);
            if (e)
              return (
                !n && /^<a /i.test(e[0])
                  ? (n = !0)
                  : n && /^<\/a>/i.test(e[0]) && (n = !1),
                !r && /^<(pre|code|kbd|script)(\s|>)/i.test(e[0])
                  ? (r = !0)
                  : r &&
                    /^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0]) &&
                    (r = !1),
                {
                  type: this.options.sanitize ? "text" : "html",
                  raw: e[0],
                  inLink: n,
                  inRawBlock: r,
                  text: this.options.sanitize
                    ? this.options.sanitizer
                      ? this.options.sanitizer(e[0])
                      : a(e[0])
                    : e[0],
                }
              );
          }),
          (n.link = function (t) {
            var e = this.rules.inline.link.exec(t);
            if (e) {
              var n = i(e[2], "()");
              if (n > -1) {
                var r = e[0].indexOf("!") === 0 ? 5 : 4,
                  o = r + e[1].length + n;
                ((e[2] = e[2].substring(0, n)),
                  (e[0] = e[0].substring(0, o).trim()),
                  (e[3] = ""));
              }
              var a = e[2],
                s = "";
              if (this.options.pedantic) {
                var u = /^([^\'\"]*[^\s])\s+([\'\"])(.*)\2/.exec(a);
                u ? ((a = u[1]), (s = u[3])) : (s = "");
              } else s = e[3] ? e[3].slice(1, -1) : "";
              a = a.trim().replace(/^<([\s\S]*)>$/, "$1");
              var c = l(
                e,
                {
                  href: a && a.replace(this.rules.inline.$1, "$1"),
                  title: s && s.replace(this.rules.inline.$1, "$1"),
                },
                e[0],
              );
              return c;
            }
          }),
          (n.reflink = function (t, n) {
            var e;
            if (
              (e = this.rules.inline.reflink.exec(t)) ||
              (e = this.rules.inline.nolink.exec(t))
            ) {
              var r = (e[2] || e[1]).replace(/\s+/g, " ");
              if (((r = n[r.toLowerCase()]), !r || !r.href)) {
                var o = e[0].charAt(0);
                return { type: "text", raw: o, text: o };
              }
              var a = l(e, r, e[0]);
              return a;
            }
          }),
          (n.strong = function (t, n, r) {
            r === void 0 && (r = "");
            var e = this.rules.inline.strong.start.exec(t);
            if (
              e &&
              (!e[1] ||
                (e[1] && (r === "" || this.rules.inline.punctuation.exec(r))))
            ) {
              n = n.slice(-1 * t.length);
              var o =
                e[0] === "**"
                  ? this.rules.inline.strong.endAst
                  : this.rules.inline.strong.endUnd;
              o.lastIndex = 0;
              for (var a; (e = o.exec(n)) != null; )
                if (
                  ((a = this.rules.inline.strong.middle.exec(
                    n.slice(0, e.index + 3),
                  )),
                  a)
                )
                  return {
                    type: "strong",
                    raw: t.slice(0, a[0].length),
                    text: t.slice(2, a[0].length - 2),
                  };
            }
          }),
          (n.em = function (t, n, r) {
            r === void 0 && (r = "");
            var e = this.rules.inline.em.start.exec(t);
            if (
              e &&
              (!e[1] ||
                (e[1] && (r === "" || this.rules.inline.punctuation.exec(r))))
            ) {
              n = n.slice(-1 * t.length);
              var o =
                e[0] === "*"
                  ? this.rules.inline.em.endAst
                  : this.rules.inline.em.endUnd;
              o.lastIndex = 0;
              for (var a; (e = o.exec(n)) != null; )
                if (
                  ((a = this.rules.inline.em.middle.exec(
                    n.slice(0, e.index + 2),
                  )),
                  a)
                )
                  return {
                    type: "em",
                    raw: t.slice(0, a[0].length),
                    text: t.slice(1, a[0].length - 1),
                  };
            }
          }),
          (n.codespan = function (t) {
            var e = this.rules.inline.code.exec(t);
            if (e) {
              var n = e[2].replace(/\n/g, " "),
                r = /[^ ]/.test(n),
                o = n.startsWith(" ") && n.endsWith(" ");
              return (
                r && o && (n = n.substring(1, n.length - 1)),
                (n = a(n, !0)),
                { type: "codespan", raw: e[0], text: n }
              );
            }
          }),
          (n.br = function (t) {
            var e = this.rules.inline.br.exec(t);
            if (e) return { type: "br", raw: e[0] };
          }),
          (n.del = function (t) {
            var e = this.rules.inline.del.exec(t);
            if (e) return { type: "del", raw: e[0], text: e[1] };
          }),
          (n.autolink = function (t, n) {
            var e = this.rules.inline.autolink.exec(t);
            if (e) {
              var r, o;
              return (
                e[2] === "@"
                  ? ((r = a(this.options.mangle ? n(e[1]) : e[1])),
                    (o = "mailto:" + r))
                  : ((r = a(e[1])), (o = r)),
                {
                  type: "link",
                  raw: e[0],
                  text: r,
                  href: o,
                  tokens: [{ type: "text", raw: r, text: r }],
                }
              );
            }
          }),
          (n.url = function (t, n) {
            var e;
            if ((e = this.rules.inline.url.exec(t))) {
              var r, o;
              if (e[2] === "@")
                ((r = a(this.options.mangle ? n(e[0]) : e[0])),
                  (o = "mailto:" + r));
              else {
                var i;
                do
                  ((i = e[0]),
                    (e[0] = this.rules.inline._backpedal.exec(e[0])[0]));
                while (i !== e[0]);
                ((r = a(e[0])),
                  e[1] === "www." ? (o = "http://" + r) : (o = r));
              }
              return {
                type: "link",
                raw: e[0],
                text: r,
                href: o,
                tokens: [{ type: "text", raw: r, text: r }],
              };
            }
          }),
          (n.inlineText = function (t, n, r) {
            var e = this.rules.inline.text.exec(t);
            if (e) {
              var o;
              return (
                n
                  ? (o = this.options.sanitize
                      ? this.options.sanitizer
                        ? this.options.sanitizer(e[0])
                        : a(e[0])
                      : e[0])
                  : (o = a(this.options.smartypants ? r(e[0]) : e[0])),
                { type: "text", raw: e[0], text: o }
              );
            }
          }),
          e
        );
      })();
    }
    var C = !1;
    function b() {
      return (C || ((C = !0), y()), h.exports);
    }
    var v = {},
      S = { exports: v };
    function R() {
      var e = f(),
        t = e.noopTest,
        n = e.edit,
        r = e.merge,
        o = {
          newline: /^\n+/,
          code: /^( {4}[^\n]+\n*)+/,
          fences:
            /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
          hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
          heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
          blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
          list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
          html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",
          def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
          nptable: t,
          table: t,
          lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
          _paragraph:
            /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
          text: /^[^\n]+/,
        };
      ((o._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/),
        (o._title =
          /(?:\"(?:\\"?|[^\"\\])*\"|\'[^\'\n]*(?:\n[^\'\n]+)*\n?\'|\([^()]*\))/),
        (o.def = n(o.def)
          .replace("label", o._label)
          .replace("title", o._title)
          .getRegex()),
        (o.bullet = /(?:[*+-]|\d{1,9}[.)])/),
        (o.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/),
        (o.item = n(o.item, "gm").replace(/bull/g, o.bullet).getRegex()),
        (o.list = n(o.list)
          .replace(/bull/g, o.bullet)
          .replace(
            "hr",
            "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))",
          )
          .replace("def", "\\n+(?=" + o.def.source + ")")
          .getRegex()),
        (o._tag =
          "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
        (o._comment = /<!--(?!-?>)[\s\S]*?-->/),
        (o.html = n(o.html, "i")
          .replace("comment", o._comment)
          .replace("tag", o._tag)
          .replace(
            "attribute",
            / +[a-zA-Z:_][\w.:-]*(?: *= *\"[^\"\n]*\"| *= *\'[^\'\n]*\'| *= *[^\s\"\'=<>`]+)?/,
          )
          .getRegex()),
        (o.paragraph = n(o._paragraph)
          .replace("hr", o.hr)
          .replace("heading", " {0,3}#{1,6} ")
          .replace("|lheading", "")
          .replace("blockquote", " {0,3}>")
          .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
          .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
          .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)")
          .replace("tag", o._tag)
          .getRegex()),
        (o.blockquote = n(o.blockquote)
          .replace("paragraph", o.paragraph)
          .getRegex()),
        (o.normal = r({}, o)),
        (o.gfm = r({}, o.normal, {
          nptable:
            "^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
          table:
            "^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
        })),
        (o.gfm.nptable = n(o.gfm.nptable)
          .replace("hr", o.hr)
          .replace("heading", " {0,3}#{1,6} ")
          .replace("blockquote", " {0,3}>")
          .replace("code", " {4}[^\\n]")
          .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
          .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
          .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)")
          .replace("tag", o._tag)
          .getRegex()),
        (o.gfm.table = n(o.gfm.table)
          .replace("hr", o.hr)
          .replace("heading", " {0,3}#{1,6} ")
          .replace("blockquote", " {0,3}>")
          .replace("code", " {4}[^\\n]")
          .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
          .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
          .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)")
          .replace("tag", o._tag)
          .getRegex()),
        (o.pedantic = r({}, o.normal, {
          html: n(
            "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))",
          )
            .replace("comment", o._comment)
            .replace(
              /tag/g,
              "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",
            )
            .getRegex(),
          def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +([\"(][^\n]+[\")]))? *(?:\n+|$)/,
          heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
          fences: t,
          paragraph: n(o.normal._paragraph)
            .replace("hr", o.hr)
            .replace("heading", " *#{1,6} *[^\n]")
            .replace("lheading", o.lheading)
            .replace("blockquote", " {0,3}>")
            .replace("|fences", "")
            .replace("|list", "")
            .replace("|html", "")
            .getRegex(),
        })));
      var a = {
        escape: /^\\([!\"#$%&\'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
        url: t,
        tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
        link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
        reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
        nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
        reflinkSearch: "reflink|nolink(?!\\()",
        strong: {
          start: /^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,
          middle:
            /^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,
          endAst:
            /[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation\s]|$))/,
          endUnd: /[^\s]__(?!_)(?:(?=[punctuation\s])|$)/,
        },
        em: {
          start: /^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,
          middle:
            /^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,
          endAst:
            /[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation\s]|$))/,
          endUnd: /[^\s]_(?!_)(?:(?=[punctuation\s])|$)/,
        },
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        br: /^( {2,}|\\)\n(?!\s*$)/,
        del: t,
        text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,
        punctuation: /^([\s*punctuation])/,
      };
      ((a._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"),
        (a.punctuation = n(a.punctuation)
          .replace(/punctuation/g, a._punctuation)
          .getRegex()),
        (a._blockSkip = "\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>"),
        (a._overlapSkip = "__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*"),
        (a.em.start = n(a.em.start)
          .replace(/punctuation/g, a._punctuation)
          .getRegex()),
        (a.em.middle = n(a.em.middle)
          .replace(/punctuation/g, a._punctuation)
          .replace(/overlapSkip/g, a._overlapSkip)
          .getRegex()),
        (a.em.endAst = n(a.em.endAst, "g")
          .replace(/punctuation/g, a._punctuation)
          .getRegex()),
        (a.em.endUnd = n(a.em.endUnd, "g")
          .replace(/punctuation/g, a._punctuation)
          .getRegex()),
        (a.strong.start = n(a.strong.start)
          .replace(/punctuation/g, a._punctuation)
          .getRegex()),
        (a.strong.middle = n(a.strong.middle)
          .replace(/punctuation/g, a._punctuation)
          .replace(/blockSkip/g, a._blockSkip)
          .getRegex()),
        (a.strong.endAst = n(a.strong.endAst, "g")
          .replace(/punctuation/g, a._punctuation)
          .getRegex()),
        (a.strong.endUnd = n(a.strong.endUnd, "g")
          .replace(/punctuation/g, a._punctuation)
          .getRegex()),
        (a.blockSkip = n(a._blockSkip, "g").getRegex()),
        (a.overlapSkip = n(a._overlapSkip, "g").getRegex()),
        (a._escapes = /\\([!\"#$%&\'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
        (a._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
        (a._email =
          /[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
        (a.autolink = n(a.autolink)
          .replace("scheme", a._scheme)
          .replace("email", a._email)
          .getRegex()),
        (a._attribute =
          /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*\"[^\"]*\"|\s*=\s*\'[^\']*\'|\s*=\s*[^\s\"\'=<>`]+)?/),
        (a.tag = n(a.tag)
          .replace("comment", o._comment)
          .replace("attribute", a._attribute)
          .getRegex()),
        (a._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
        (a._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/),
        (a._title =
          /\"(?:\\"?|[^\"\\])*\"|\'(?:\\'?|[^\'\\])*\'|\((?:\\\)?|[^)\\])*\)/),
        (a.link = n(a.link)
          .replace("label", a._label)
          .replace("href", a._href)
          .replace("title", a._title)
          .getRegex()),
        (a.reflink = n(a.reflink).replace("label", a._label).getRegex()),
        (a.reflinkSearch = n(a.reflinkSearch, "g")
          .replace("reflink", a.reflink)
          .replace("nolink", a.nolink)
          .getRegex()),
        (a.normal = r({}, a)),
        (a.pedantic = r({}, a.normal, {
          strong: {
            start: /^__|\*\*/,
            middle:
              /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            endAst: /\*\*(?!\*)/g,
            endUnd: /__(?!_)/g,
          },
          em: {
            start: /^_|\*/,
            middle:
              /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
            endAst: /\*(?!\*)/g,
            endUnd: /_(?!_)/g,
          },
          link: n(/^!?\[(label)\]\((.*?)\)/)
            .replace("label", a._label)
            .getRegex(),
          reflink: n(/^!?\[(label)\]\s*\[([^\]]*)\]/)
            .replace("label", a._label)
            .getRegex(),
        })),
        (a.gfm = r({}, a.normal, {
          escape: n(a.escape).replace("])", "~|])").getRegex(),
          _extended_email:
            /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
          url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
          _backpedal:
            /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
          del: /^~+(?=\S)([\s\S]*?\S)~+/,
          text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&\'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&\'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&\'*+\/=?_`{\|}~-]+@))/,
        })),
        (a.gfm.url = n(a.gfm.url, "i")
          .replace("email", a.gfm._extended_email)
          .getRegex()),
        (a.breaks = r({}, a.gfm, {
          br: n(a.br).replace("{2,}", "*").getRegex(),
          text: n(a.gfm.text)
            .replace("\\b_", "\\b_| {2,}\\n")
            .replace(/\{2,\}/g, "*")
            .getRegex(),
        })),
        (S.exports = { block: o, inline: a }));
    }
    var L = !1;
    function E() {
      return (L || ((L = !0), R()), S.exports);
    }
    var k = {},
      I = { exports: k };
    function T() {
      var e,
        t = b(),
        n = c(),
        r = n.defaults,
        o = E(),
        a = o.block,
        i = o.inline;
      function l(e) {
        return e
          .replace(/---/g, "\u2014")
          .replace(/--/g, "\u2013")
          .replace(/(^|[-\u2014/(\[{\"\s])\'/g, "$1\u2018")
          .replace(/\'/g, "\u2019")
          .replace(/(^|[-\u2014/(\[{\u2018\s])\"/g, "$1\u201C")
          .replace(/\"/g, "\u201D")
          .replace(/\.{3}/g, "\u2026");
      }
      function s(e) {
        var t = "",
          n,
          r,
          o = e.length;
        for (n = 0; n < o; n++)
          ((r = e.charCodeAt(n)),
            Math.random() > 0.5 && (r = "x" + r.toString(16)),
            (t += "&#" + r + ";"));
        return t;
      }
      I.exports =
        ((e = (function () {
          function e(e) {
            ((this.tokens = []),
              (this.tokens.links = Object.create(null)),
              (this.options = e || r),
              (this.options.tokenizer = this.options.tokenizer || new t()),
              (this.tokenizer = this.options.tokenizer),
              (this.tokenizer.options = this.options));
            var n = { block: a.normal, inline: i.normal };
            (this.options.pedantic
              ? ((n.block = a.pedantic), (n.inline = i.pedantic))
              : this.options.gfm &&
                ((n.block = a.gfm),
                this.options.breaks
                  ? (n.inline = i.breaks)
                  : (n.inline = i.gfm)),
              (this.tokenizer.rules = n));
          }
          e.lex = function (n, r) {
            var t = new e(r);
            return t.lex(n);
          };
          var n = e.prototype;
          return (
            (n.lex = function (t) {
              return (
                (t = t.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ")),
                this.blockTokens(t, this.tokens, !0),
                this.inline(this.tokens),
                this.tokens
              );
            }),
            (n.blockTokens = function (t, n, r) {
              (n === void 0 && (n = []),
                r === void 0 && (r = !0),
                (t = t.replace(/^ +$/gm, "")));
              for (var e, o, a, i; t; ) {
                if ((e = this.tokenizer.space(t))) {
                  ((t = t.substring(e.raw.length)), e.type && n.push(e));
                  continue;
                }
                if ((e = this.tokenizer.code(t, n))) {
                  ((t = t.substring(e.raw.length)),
                    e.type
                      ? n.push(e)
                      : ((i = n[n.length - 1]),
                        (i.raw += "\n" + e.raw),
                        (i.text += "\n" + e.text)));
                  continue;
                }
                if ((e = this.tokenizer.fences(t))) {
                  ((t = t.substring(e.raw.length)), n.push(e));
                  continue;
                }
                if ((e = this.tokenizer.heading(t))) {
                  ((t = t.substring(e.raw.length)), n.push(e));
                  continue;
                }
                if ((e = this.tokenizer.nptable(t))) {
                  ((t = t.substring(e.raw.length)), n.push(e));
                  continue;
                }
                if ((e = this.tokenizer.hr(t))) {
                  ((t = t.substring(e.raw.length)), n.push(e));
                  continue;
                }
                if ((e = this.tokenizer.blockquote(t))) {
                  ((t = t.substring(e.raw.length)),
                    (e.tokens = this.blockTokens(e.text, [], r)),
                    n.push(e));
                  continue;
                }
                if ((e = this.tokenizer.list(t))) {
                  for (
                    t = t.substring(e.raw.length), a = e.items.length, o = 0;
                    o < a;
                    o++
                  )
                    e.items[o].tokens = this.blockTokens(
                      e.items[o].text,
                      [],
                      !1,
                    );
                  n.push(e);
                  continue;
                }
                if ((e = this.tokenizer.html(t))) {
                  ((t = t.substring(e.raw.length)), n.push(e));
                  continue;
                }
                if (r && (e = this.tokenizer.def(t))) {
                  ((t = t.substring(e.raw.length)),
                    this.tokens.links[e.tag] ||
                      (this.tokens.links[e.tag] = {
                        href: e.href,
                        title: e.title,
                      }));
                  continue;
                }
                if ((e = this.tokenizer.table(t))) {
                  ((t = t.substring(e.raw.length)), n.push(e));
                  continue;
                }
                if ((e = this.tokenizer.lheading(t))) {
                  ((t = t.substring(e.raw.length)), n.push(e));
                  continue;
                }
                if (r && (e = this.tokenizer.paragraph(t))) {
                  ((t = t.substring(e.raw.length)), n.push(e));
                  continue;
                }
                if ((e = this.tokenizer.text(t, n))) {
                  ((t = t.substring(e.raw.length)),
                    e.type
                      ? n.push(e)
                      : ((i = n[n.length - 1]),
                        (i.raw += "\n" + e.raw),
                        (i.text += "\n" + e.text)));
                  continue;
                }
                if (t) {
                  var l = "Infinite loop on byte: " + t.charCodeAt(0);
                  if (this.options.silent) break;
                  throw new Error(l);
                }
              }
              return n;
            }),
            (n.inline = function (t) {
              var e,
                n,
                r,
                o,
                a,
                i,
                l = t.length;
              for (e = 0; e < l; e++)
                switch (((i = t[e]), i.type)) {
                  case "paragraph":
                  case "text":
                  case "heading": {
                    ((i.tokens = []), this.inlineTokens(i.text, i.tokens));
                    break;
                  }
                  case "table": {
                    for (
                      i.tokens = { header: [], cells: [] },
                        o = i.header.length,
                        n = 0;
                      n < o;
                      n++
                    )
                      ((i.tokens.header[n] = []),
                        this.inlineTokens(i.header[n], i.tokens.header[n]));
                    for (o = i.cells.length, n = 0; n < o; n++)
                      for (
                        a = i.cells[n], i.tokens.cells[n] = [], r = 0;
                        r < a.length;
                        r++
                      )
                        ((i.tokens.cells[n][r] = []),
                          this.inlineTokens(a[r], i.tokens.cells[n][r]));
                    break;
                  }
                  case "blockquote": {
                    this.inline(i.tokens);
                    break;
                  }
                  case "list": {
                    for (o = i.items.length, n = 0; n < o; n++)
                      this.inline(i.items[n].tokens);
                    break;
                  }
                  default:
                }
              return t;
            }),
            (n.inlineTokens = function (t, n, r, o, a) {
              (n === void 0 && (n = []),
                r === void 0 && (r = !1),
                o === void 0 && (o = !1),
                a === void 0 && (a = ""));
              var e,
                i = t,
                u;
              if (this.tokens.links) {
                var c = Object.keys(this.tokens.links);
                if (c.length > 0)
                  for (
                    ;
                    (u = this.tokenizer.rules.inline.reflinkSearch.exec(i)) !=
                    null;
                  )
                    c.includes(u[0].slice(u[0].lastIndexOf("[") + 1, -1)) &&
                      (i =
                        i.slice(0, u.index) +
                        "[" +
                        "a".repeat(u[0].length - 2) +
                        "]" +
                        i.slice(
                          this.tokenizer.rules.inline.reflinkSearch.lastIndex,
                        ));
              }
              for (
                ;
                (u = this.tokenizer.rules.inline.blockSkip.exec(i)) != null;
              )
                i =
                  i.slice(0, u.index) +
                  "[" +
                  "a".repeat(u[0].length - 2) +
                  "]" +
                  i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
              for (; t; ) {
                if ((e = this.tokenizer.escape(t))) {
                  ((t = t.substring(e.raw.length)), n.push(e));
                  continue;
                }
                if ((e = this.tokenizer.tag(t, r, o))) {
                  ((t = t.substring(e.raw.length)),
                    (r = e.inLink),
                    (o = e.inRawBlock),
                    n.push(e));
                  continue;
                }
                if ((e = this.tokenizer.link(t))) {
                  ((t = t.substring(e.raw.length)),
                    e.type === "link" &&
                      (e.tokens = this.inlineTokens(e.text, [], !0, o)),
                    n.push(e));
                  continue;
                }
                if ((e = this.tokenizer.reflink(t, this.tokens.links))) {
                  ((t = t.substring(e.raw.length)),
                    e.type === "link" &&
                      (e.tokens = this.inlineTokens(e.text, [], !0, o)),
                    n.push(e));
                  continue;
                }
                if ((e = this.tokenizer.strong(t, i, a))) {
                  ((t = t.substring(e.raw.length)),
                    (e.tokens = this.inlineTokens(e.text, [], r, o)),
                    n.push(e));
                  continue;
                }
                if ((e = this.tokenizer.em(t, i, a))) {
                  ((t = t.substring(e.raw.length)),
                    (e.tokens = this.inlineTokens(e.text, [], r, o)),
                    n.push(e));
                  continue;
                }
                if ((e = this.tokenizer.codespan(t))) {
                  ((t = t.substring(e.raw.length)), n.push(e));
                  continue;
                }
                if ((e = this.tokenizer.br(t))) {
                  ((t = t.substring(e.raw.length)), n.push(e));
                  continue;
                }
                if ((e = this.tokenizer.del(t))) {
                  ((t = t.substring(e.raw.length)),
                    (e.tokens = this.inlineTokens(e.text, [], r, o)),
                    n.push(e));
                  continue;
                }
                if ((e = this.tokenizer.autolink(t, s))) {
                  ((t = t.substring(e.raw.length)), n.push(e));
                  continue;
                }
                if (!r && (e = this.tokenizer.url(t, s))) {
                  ((t = t.substring(e.raw.length)), n.push(e));
                  continue;
                }
                if ((e = this.tokenizer.inlineText(t, o, l))) {
                  ((t = t.substring(e.raw.length)),
                    (a = e.raw.slice(-1)),
                    n.push(e));
                  continue;
                }
                if (t) {
                  var d = "Infinite loop on byte: " + t.charCodeAt(0);
                  if (this.options.silent) break;
                  throw new Error(d);
                }
              }
              return n;
            }),
            e
          );
        })()),
        (e.rules = { block: a, inline: i }),
        e);
    }
    var D = !1;
    function x() {
      return (D || ((D = !0), T()), I.exports);
    }
    var $ = {},
      P = { exports: $ };
    function N() {
      var e = c(),
        t = e.defaults,
        n = f(),
        r = n.cleanUrl,
        o = n.escape;
      P.exports = (function () {
        function e(e) {
          this.options = e || t;
        }
        var n = e.prototype;
        return (
          (n.code = function (t, n, r) {
            var e = (n || "").match(/\S*/)[0];
            if (this.options.highlight) {
              var a = this.options.highlight(t, e);
              a != null && a !== t && ((r = !0), (t = a));
            }
            return e
              ? '<pre><code class="' +
                  this.options.langPrefix +
                  o(e, !0) +
                  '">' +
                  (r ? t : o(t, !0)) +
                  "</code></pre>\n"
              : "<pre><code>" + (r ? t : o(t, !0)) + "</code></pre>\n";
          }),
          (n.blockquote = function (t) {
            return "<blockquote>\n" + t + "</blockquote>\n";
          }),
          (n.html = function (t) {
            return t;
          }),
          (n.heading = function (t, n, r, o) {
            return this.options.headerIds
              ? "<h" +
                  n +
                  ' id="' +
                  this.options.headerPrefix +
                  o.slug(r) +
                  '">' +
                  t +
                  "</h" +
                  n +
                  ">\n"
              : "<h" + n + ">" + t + "</h" + n + ">\n";
          }),
          (n.hr = function () {
            return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
          }),
          (n.list = function (t, n, r) {
            var e = n ? "ol" : "ul",
              o = n && r !== 1 ? ' start="' + r + '"' : "";
            return "<" + e + o + ">\n" + t + "</" + e + ">\n";
          }),
          (n.listitem = function (t) {
            return "<li>" + t + "</li>\n";
          }),
          (n.checkbox = function (t) {
            return (
              "<input " +
              (t ? 'checked="" ' : "") +
              'disabled="" type="checkbox"' +
              (this.options.xhtml ? " /" : "") +
              "> "
            );
          }),
          (n.paragraph = function (t) {
            return "<p>" + t + "</p>\n";
          }),
          (n.table = function (t, n) {
            return (
              n && (n = "<tbody>" + n + "</tbody>"),
              "<table>\n<thead>\n" + t + "</thead>\n" + n + "</table>\n"
            );
          }),
          (n.tablerow = function (t) {
            return "<tr>\n" + t + "</tr>\n";
          }),
          (n.tablecell = function (t, n) {
            var e = n.header ? "th" : "td",
              r = n.align
                ? "<" + e + ' align="' + n.align + '">'
                : "<" + e + ">";
            return r + t + "</" + e + ">\n";
          }),
          (n.strong = function (t) {
            return "<strong>" + t + "</strong>";
          }),
          (n.em = function (t) {
            return "<em>" + t + "</em>";
          }),
          (n.codespan = function (t) {
            return "<code>" + t + "</code>";
          }),
          (n.br = function () {
            return this.options.xhtml ? "<br/>" : "<br>";
          }),
          (n.del = function (t) {
            return "<del>" + t + "</del>";
          }),
          (n.link = function (t, n, a) {
            if (
              ((t = r(this.options.sanitize, this.options.baseUrl, t)),
              t === null)
            )
              return a;
            var e = '<a href="' + o(t) + '"';
            return (
              n && (e += ' title="' + n + '"'),
              (e += ">" + a + "</a>"),
              e
            );
          }),
          (n.image = function (t, n, o) {
            if (
              ((t = r(this.options.sanitize, this.options.baseUrl, t)),
              t === null)
            )
              return o;
            var e = '<img src="' + t + '" alt="' + o + '"';
            return (
              n && (e += ' title="' + n + '"'),
              (e += this.options.xhtml ? "/>" : ">"),
              e
            );
          }),
          (n.text = function (t) {
            return t;
          }),
          e
        );
      })();
    }
    var M = !1;
    function w() {
      return (M || ((M = !0), N()), P.exports);
    }
    var A = {},
      F = { exports: A };
    function O() {
      F.exports = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.strong = function (t) {
            return t;
          }),
          (t.em = function (t) {
            return t;
          }),
          (t.codespan = function (t) {
            return t;
          }),
          (t.del = function (t) {
            return t;
          }),
          (t.html = function (t) {
            return t;
          }),
          (t.text = function (t) {
            return t;
          }),
          (t.link = function (t, n, r) {
            return "" + r;
          }),
          (t.image = function (t, n, r) {
            return "" + r;
          }),
          (t.br = function () {
            return "";
          }),
          e
        );
      })();
    }
    var B = !1;
    function W() {
      return (B || ((B = !0), O()), F.exports);
    }
    var q = {},
      U = { exports: q };
    function V() {
      U.exports = (function () {
        function e() {
          this.seen = {};
        }
        var t = e.prototype;
        return (
          (t.slug = function (t) {
            var e = t
              .toLowerCase()
              .trim()
              .replace(/<[!\/a-z].*?>/gi, "")
              .replace(
                /[\u2000-\u206F\u2E00-\u2E7F\\'!\"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
                "",
              )
              .replace(/\s/g, "-");
            if (Object.prototype.hasOwnProperty.call(this.seen, e)) {
              var n = e;
              do (this.seen[n]++, (e = n + "-" + this.seen[n]));
              while (Object.prototype.hasOwnProperty.call(this.seen, e));
            }
            return ((this.seen[e] = 0), e);
          }),
          e
        );
      })();
    }
    var H = !1;
    function G() {
      return (H || ((H = !0), V()), U.exports);
    }
    var z = {},
      j = { exports: z };
    function K() {
      var e = w(),
        t = W(),
        n = G(),
        r = c(),
        o = r.defaults,
        a = f(),
        i = a.unescape;
      j.exports = (function () {
        function r(r) {
          ((this.options = r || o),
            (this.options.renderer = this.options.renderer || new e()),
            (this.renderer = this.options.renderer),
            (this.renderer.options = this.options),
            (this.textRenderer = new t()),
            (this.slugger = new n()));
        }
        r.parse = function (t, n) {
          var e = new r(n);
          return e.parse(t);
        };
        var a = r.prototype;
        return (
          (a.parse = function (t, n) {
            n === void 0 && (n = !0);
            var e = "",
              r,
              o,
              a,
              l,
              s,
              u,
              c,
              d,
              m,
              p,
              _,
              f,
              g,
              h,
              y,
              C,
              b,
              v,
              S = t.length;
            for (r = 0; r < S; r++)
              switch (((p = t[r]), p.type)) {
                case "space":
                  continue;
                case "hr": {
                  e += this.renderer.hr();
                  continue;
                }
                case "heading": {
                  e += this.renderer.heading(
                    this.parseInline(p.tokens),
                    p.depth,
                    i(this.parseInline(p.tokens, this.textRenderer)),
                    this.slugger,
                  );
                  continue;
                }
                case "code": {
                  e += this.renderer.code(p.text, p.lang, p.escaped);
                  continue;
                }
                case "table": {
                  for (d = "", c = "", l = p.header.length, o = 0; o < l; o++)
                    c += this.renderer.tablecell(
                      this.parseInline(p.tokens.header[o]),
                      { header: !0, align: p.align[o] },
                    );
                  for (
                    d += this.renderer.tablerow(c),
                      m = "",
                      l = p.cells.length,
                      o = 0;
                    o < l;
                    o++
                  ) {
                    for (
                      u = p.tokens.cells[o], c = "", s = u.length, a = 0;
                      a < s;
                      a++
                    )
                      c += this.renderer.tablecell(this.parseInline(u[a]), {
                        header: !1,
                        align: p.align[a],
                      });
                    m += this.renderer.tablerow(c);
                  }
                  e += this.renderer.table(d, m);
                  continue;
                }
                case "blockquote": {
                  ((m = this.parse(p.tokens)),
                    (e += this.renderer.blockquote(m)));
                  continue;
                }
                case "list": {
                  for (
                    _ = p.ordered,
                      f = p.start,
                      g = p.loose,
                      l = p.items.length,
                      m = "",
                      o = 0;
                    o < l;
                    o++
                  )
                    ((y = p.items[o]),
                      (C = y.checked),
                      (b = y.task),
                      (h = ""),
                      y.task &&
                        ((v = this.renderer.checkbox(C)),
                        g
                          ? y.tokens.length > 0 && y.tokens[0].type === "text"
                            ? ((y.tokens[0].text = v + " " + y.tokens[0].text),
                              y.tokens[0].tokens &&
                                y.tokens[0].tokens.length > 0 &&
                                y.tokens[0].tokens[0].type === "text" &&
                                (y.tokens[0].tokens[0].text =
                                  v + " " + y.tokens[0].tokens[0].text))
                            : y.tokens.unshift({ type: "text", text: v })
                          : (h += v)),
                      (h += this.parse(y.tokens, g)),
                      (m += this.renderer.listitem(h, b, C)));
                  e += this.renderer.list(m, _, f);
                  continue;
                }
                case "html": {
                  e += this.renderer.html(p.text);
                  continue;
                }
                case "paragraph": {
                  e += this.renderer.paragraph(this.parseInline(p.tokens));
                  continue;
                }
                case "text": {
                  for (
                    m = p.tokens ? this.parseInline(p.tokens) : p.text;
                    r + 1 < S && t[r + 1].type === "text";
                  )
                    ((p = t[++r]),
                      (m +=
                        "\n" +
                        (p.tokens ? this.parseInline(p.tokens) : p.text)));
                  e += n ? this.renderer.paragraph(m) : m;
                  continue;
                }
                default: {
                  var R = 'Token with "' + p.type + '" type was not found.';
                  if (this.options.silent) return;
                  throw new Error(R);
                }
              }
            return e;
          }),
          (a.parseInline = function (t, n) {
            n = n || this.renderer;
            var e = "",
              r,
              o,
              a = t.length;
            for (r = 0; r < a; r++)
              switch (((o = t[r]), o.type)) {
                case "escape": {
                  e += n.text(o.text);
                  break;
                }
                case "html": {
                  e += n.html(o.text);
                  break;
                }
                case "link": {
                  e += n.link(o.href, o.title, this.parseInline(o.tokens, n));
                  break;
                }
                case "image": {
                  e += n.image(o.href, o.title, o.text);
                  break;
                }
                case "strong": {
                  e += n.strong(this.parseInline(o.tokens, n));
                  break;
                }
                case "em": {
                  e += n.em(this.parseInline(o.tokens, n));
                  break;
                }
                case "codespan": {
                  e += n.codespan(o.text);
                  break;
                }
                case "br": {
                  e += n.br();
                  break;
                }
                case "del": {
                  e += n.del(this.parseInline(o.tokens, n));
                  break;
                }
                case "text": {
                  e += n.text(o.text);
                  break;
                }
                default: {
                  var i = 'Token with "' + o.type + '" type was not found.';
                  if (this.options.silent) return;
                  throw new Error(i);
                }
              }
            return e;
          }),
          r
        );
      })();
    }
    var Q = !1;
    function X() {
      return (Q || ((Q = !0), K()), j.exports);
    }
    var Y = {},
      J = { exports: Y };
    function Z() {
      var e = x(),
        t = X(),
        n = b(),
        r = w(),
        o = W(),
        a = G(),
        i = f(),
        l = i.merge,
        s = i.checkSanitizeDeprecation,
        u = i.escape,
        d = c(),
        m = d.getDefaults,
        p = d.changeDefaults,
        _ = d.defaults;
      function g(n, r, o) {
        if (typeof n == "undefined" || n === null)
          throw new Error("marked(): input parameter is undefined or null");
        if (typeof n != "string")
          throw new Error(
            "marked(): input parameter is of type " +
              Object.prototype.toString.call(n) +
              ", string expected",
          );
        if (
          (typeof r == "function" && ((o = r), (r = null)),
          (r = l({}, g.defaults, r || {})),
          s(r),
          o)
        ) {
          var a = r.highlight,
            i;
          try {
            i = e.lex(n, r);
          } catch (e) {
            return o(e);
          }
          var c = function (n) {
            var e;
            if (!n)
              try {
                e = t.parse(i, r);
              } catch (e) {
                n = e;
              }
            return ((r.highlight = a), n ? o(n) : o(null, e));
          };
          if (!a || a.length < 3 || (delete r.highlight, !i.length)) return c();
          var d = 0;
          (g.walkTokens(i, function (e) {
            e.type === "code" &&
              (d++,
              setTimeout(function () {
                a(e.text, e.lang, function (t, n) {
                  if (t) return c(t);
                  (n != null &&
                    n !== e.text &&
                    ((e.text = n), (e.escaped = !0)),
                    d--,
                    d === 0 && c());
                });
              }, 0));
          }),
            d === 0 && c());
          return;
        }
        try {
          var m = e.lex(n, r);
          return (r.walkTokens && g.walkTokens(m, r.walkTokens), t.parse(m, r));
        } catch (e) {
          if (
            ((e.message +=
              "\nPlease report this to https://github.com/markedjs/marked."),
            r.silent)
          )
            return (
              "<p>An error occurred:</p><pre>" +
              u(e.message + "", !0) +
              "</pre>"
            );
          throw e;
        }
      }
      ((g.options = g.setOptions =
        function (e) {
          return (l(g.defaults, e), p(g.defaults), g);
        }),
        (g.getDefaults = m),
        (g.defaults = _),
        (g.use = function (e) {
          var t = l({}, e);
          if (e.renderer) {
            var o = g.defaults.renderer || new r(),
              a = function (n) {
                var t = o[n];
                o[n] = function () {
                  for (
                    var r = arguments.length, a = new Array(r), i = 0;
                    i < r;
                    i++
                  )
                    a[i] = arguments[i];
                  var l = e.renderer[n].apply(o, a);
                  return (l === !1 && (l = t.apply(o, a)), l);
                };
              };
            for (var i in e.renderer) a(i);
            t.renderer = o;
          }
          if (e.tokenizer) {
            var s = g.defaults.tokenizer || new n(),
              u = function (n) {
                var t = s[n];
                s[n] = function () {
                  for (
                    var r = arguments.length, o = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    o[a] = arguments[a];
                  var i = e.tokenizer[n].apply(s, o);
                  return (i === !1 && (i = t.apply(s, o)), i);
                };
              };
            for (var c in e.tokenizer) u(c);
            t.tokenizer = s;
          }
          if (e.walkTokens) {
            var d = g.defaults.walkTokens;
            t.walkTokens = function (t) {
              (e.walkTokens(t), d && d(t));
            };
          }
          g.setOptions(t);
        }),
        (g.walkTokens = function (e, t) {
          for (var n of e)
            switch ((t(n), n.type)) {
              case "table": {
                for (var r of n.tokens.header) g.walkTokens(r, t);
                for (var o of n.tokens.cells)
                  for (var a of o) g.walkTokens(a, t);
                break;
              }
              case "list": {
                g.walkTokens(n.items, t);
                break;
              }
              default:
                n.tokens && g.walkTokens(n.tokens, t);
            }
        }),
        (g.Parser = t),
        (g.parser = t.parse),
        (g.Renderer = r),
        (g.TextRenderer = o),
        (g.Lexer = e),
        (g.lexer = e.lex),
        (g.Tokenizer = n),
        (g.Slugger = a),
        (g.parse = g),
        (J.exports = g));
    }
    var ee = !1;
    function te() {
      return (ee || ((ee = !0), Z()), J.exports);
    }
    function ne(e) {
      switch (e) {
        case void 0:
          return te();
      }
    }
    a.exports = ne;
  },
  null,
);
