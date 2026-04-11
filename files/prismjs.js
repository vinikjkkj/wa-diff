__d(
  "prismjs",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e =
        typeof window != "undefined"
          ? window
          : typeof WorkerGlobalScope != "undefined" &&
              self instanceof WorkerGlobalScope
            ? self
            : {},
      l = (function (e) {
        var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
          n = 0,
          r = {},
          o = {
            manual: e.Prism && e.Prism.manual,
            disableWorkerMessageHandler:
              e.Prism && e.Prism.disableWorkerMessageHandler,
            util: {
              encode: function e(t) {
                return t instanceof a
                  ? new a(t.type, e(t.content), t.alias)
                  : Array.isArray(t)
                    ? t.map(e)
                    : t
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/\u00a0/g, " ");
              },
              type: function (e) {
                return Object.prototype.toString.call(e).slice(8, -1);
              },
              objId: function (e) {
                return (
                  e.__id || Object.defineProperty(e, "__id", { value: ++n }),
                  e.__id
                );
              },
              clone: function e(t, n) {
                var r, a;
                switch (((n = n || {}), o.util.type(t))) {
                  case "Object":
                    if (((a = o.util.objId(t)), n[a])) return n[a];
                    for (var i in ((r = {}), (n[a] = r), t))
                      t.hasOwnProperty(i) && (r[i] = e(t[i], n));
                    return r;
                  case "Array":
                    return (
                      (a = o.util.objId(t)),
                      n[a]
                        ? n[a]
                        : ((r = []),
                          (n[a] = r),
                          t.forEach(function (t, o) {
                            r[o] = e(t, n);
                          }),
                          r)
                    );
                  default:
                    return t;
                }
              },
              getLanguage: function (e) {
                for (; e; ) {
                  var n = t.exec(e.className);
                  if (n) return n[1].toLowerCase();
                  e = e.parentElement;
                }
                return "none";
              },
              setLanguage: function (e, n) {
                ((e.className = e.className.replace(RegExp(t, "gi"), "")),
                  e.classList.add("language-" + n));
              },
              currentScript: function () {
                if (typeof document == "undefined") return null;
                if ("currentScript" in document) return document.currentScript;
                try {
                  throw new Error();
                } catch (r) {
                  var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) ||
                    [])[1];
                  if (e) {
                    var t = document.getElementsByTagName("script");
                    for (var n in t) if (t[n].src == e) return t[n];
                  }
                  return null;
                }
              },
              isActive: function (e, t, n) {
                for (var r = "no-" + t; e; ) {
                  var o = e.classList;
                  if (o.contains(t)) return !0;
                  if (o.contains(r)) return !1;
                  e = e.parentElement;
                }
                return !!n;
              },
            },
            languages: {
              plain: r,
              plaintext: r,
              text: r,
              txt: r,
              extend: function (e, t) {
                var n = o.util.clone(o.languages[e]);
                for (var r in t) n[r] = t[r];
                return n;
              },
              insertBefore: function (e, t, n, r) {
                var a = (r = r || o.languages)[e],
                  i = {};
                for (var l in a)
                  if (a.hasOwnProperty(l)) {
                    if (l == t)
                      for (var s in n) n.hasOwnProperty(s) && (i[s] = n[s]);
                    n.hasOwnProperty(l) || (i[l] = a[l]);
                  }
                var u = r[e];
                return (
                  (r[e] = i),
                  o.languages.DFS(o.languages, function (t, n) {
                    n === u && t != e && (this[t] = i);
                  }),
                  i
                );
              },
              DFS: function e(t, n, r, a) {
                a = a || {};
                var i = o.util.objId;
                for (var l in t)
                  if (t.hasOwnProperty(l)) {
                    n.call(t, l, t[l], r || l);
                    var s = t[l],
                      u = o.util.type(s);
                    u !== "Object" || a[i(s)]
                      ? u !== "Array" ||
                        a[i(s)] ||
                        ((a[i(s)] = !0), e(s, n, l, a))
                      : ((a[i(s)] = !0), e(s, n, null, a));
                  }
              },
            },
            plugins: {},
            highlightAll: function (e, t) {
              o.highlightAllUnder(document, e, t);
            },
            highlightAllUnder: function (e, t, n) {
              var r = {
                callback: n,
                container: e,
                selector:
                  'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
              };
              (o.hooks.run("before-highlightall", r),
                (r.elements = Array.prototype.slice.apply(
                  r.container.querySelectorAll(r.selector),
                )),
                o.hooks.run("before-all-elements-highlight", r));
              for (var a, i = 0; (a = r.elements[i++]); )
                o.highlightElement(a, t === !0, r.callback);
            },
            highlightElement: function (t, n, r) {
              var a = o.util.getLanguage(t),
                i = o.languages[a];
              o.util.setLanguage(t, a);
              var l = t.parentElement;
              l &&
                l.nodeName.toLowerCase() === "pre" &&
                o.util.setLanguage(l, a);
              var s = {
                element: t,
                language: a,
                grammar: i,
                code: t.textContent,
              };
              function u(e) {
                ((s.highlightedCode = e),
                  o.hooks.run("before-insert", s),
                  (s.element.innerHTML = s.highlightedCode),
                  o.hooks.run("after-highlight", s),
                  o.hooks.run("complete", s),
                  r && r.call(s.element));
              }
              if (
                (o.hooks.run("before-sanity-check", s),
                (l = s.element.parentElement) &&
                  l.nodeName.toLowerCase() === "pre" &&
                  !l.hasAttribute("tabindex") &&
                  l.setAttribute("tabindex", "0"),
                !s.code)
              )
                return (
                  o.hooks.run("complete", s),
                  void (r && r.call(s.element))
                );
              if ((o.hooks.run("before-highlight", s), s.grammar))
                if (n && e.Worker) {
                  var c = new Worker(o.filename);
                  ((c.onmessage = function (e) {
                    u(e.data);
                  }),
                    c.postMessage(
                      JSON.stringify({
                        language: s.language,
                        code: s.code,
                        immediateClose: !0,
                      }),
                    ));
                } else u(o.highlight(s.code, s.grammar, s.language));
              else u(o.util.encode(s.code));
            },
            highlight: function (e, t, n) {
              var r = { code: e, grammar: t, language: n };
              if ((o.hooks.run("before-tokenize", r), !r.grammar))
                throw new Error(
                  'The language "' + r.language + '" has no grammar.',
                );
              return (
                (r.tokens = o.tokenize(r.code, r.grammar)),
                o.hooks.run("after-tokenize", r),
                a.stringify(o.util.encode(r.tokens), r.language)
              );
            },
            tokenize: function (e, t) {
              var n = t.rest;
              if (n) {
                for (var r in n) t[r] = n[r];
                delete t.rest;
              }
              var o = new s();
              return (
                u(o, o.head, e),
                l(e, o, t, o.head, 0),
                (function (e) {
                  for (var t = [], n = e.head.next; n !== e.tail; )
                    (t.push(n.value), (n = n.next));
                  return t;
                })(o)
              );
            },
            hooks: {
              all: {},
              add: function (e, t) {
                var n = o.hooks.all;
                ((n[e] = n[e] || []), n[e].push(t));
              },
              run: function (e, t) {
                var n = o.hooks.all[e];
                if (n && n.length) for (var r, a = 0; (r = n[a++]); ) r(t);
              },
            },
            Token: a,
          };
        function a(e, t, n, r) {
          ((this.type = e),
            (this.content = t),
            (this.alias = n),
            (this.length = 0 | (r || "").length));
        }
        function i(e, t, n, r) {
          e.lastIndex = t;
          var o = e.exec(n);
          if (o && r && o[1]) {
            var a = o[1].length;
            ((o.index += a), (o[0] = o[0].slice(a)));
          }
          return o;
        }
        function l(e, t, n, r, s, d) {
          for (var m in n)
            if (n.hasOwnProperty(m) && n[m]) {
              var p = n[m];
              p = Array.isArray(p) ? p : [p];
              for (var _ = 0; _ < p.length; ++_) {
                if (d && d.cause == m + "," + _) return;
                var f = p[_],
                  g = f.inside,
                  h = !!f.lookbehind,
                  y = !!f.greedy,
                  C = f.alias;
                if (y && !f.pattern.global) {
                  var b = f.pattern.toString().match(/[imsuy]*$/)[0];
                  f.pattern = RegExp(f.pattern.source, b + "g");
                }
                for (
                  var v = f.pattern || f, S = r.next, R = s;
                  S !== t.tail && !(d && R >= d.reach);
                  R += S.value.length, S = S.next
                ) {
                  var L = S.value;
                  if (t.length > e.length) return;
                  if (!(L instanceof a)) {
                    var E,
                      k = 1;
                    if (y) {
                      if (!(E = i(v, R, e, h)) || E.index >= e.length) break;
                      var I = E.index,
                        T = E.index + E[0].length,
                        D = R;
                      for (D += S.value.length; I >= D; )
                        D += (S = S.next).value.length;
                      if (((R = D -= S.value.length), S.value instanceof a))
                        continue;
                      for (
                        var x = S;
                        x !== t.tail && (D < T || typeof x.value == "string");
                        x = x.next
                      )
                        (k++, (D += x.value.length));
                      (k--, (L = e.slice(R, D)), (E.index -= R));
                    } else if (!(E = i(v, 0, L, h))) continue;
                    I = E.index;
                    var $ = E[0],
                      P = L.slice(0, I),
                      N = L.slice(I + $.length),
                      M = R + L.length;
                    d && M > d.reach && (d.reach = M);
                    var w = S.prev;
                    if (
                      (P && ((w = u(t, w, P)), (R += P.length)),
                      c(t, w, k),
                      (S = u(t, w, new a(m, g ? o.tokenize($, g) : $, C, $))),
                      N && u(t, S, N),
                      k > 1)
                    ) {
                      var A = { cause: m + "," + _, reach: M };
                      (l(e, t, n, S.prev, R, A),
                        d && A.reach > d.reach && (d.reach = A.reach));
                    }
                  }
                }
              }
            }
        }
        function s() {
          var e = { value: null, prev: null, next: null },
            t = { value: null, prev: e, next: null };
          ((e.next = t), (this.head = e), (this.tail = t), (this.length = 0));
        }
        function u(e, t, n) {
          var r = t.next,
            o = { value: n, prev: t, next: r };
          return ((t.next = o), (r.prev = o), e.length++, o);
        }
        function c(e, t, n) {
          for (var r = t.next, o = 0; o < n && r !== e.tail; o++) r = r.next;
          ((t.next = r), (r.prev = t), (e.length -= o));
        }
        if (
          ((e.Prism = o),
          (a.stringify = function e(t, n) {
            if (typeof t == "string") return t;
            if (Array.isArray(t)) {
              var r = "";
              return (
                t.forEach(function (t) {
                  r += e(t, n);
                }),
                r
              );
            }
            var a = {
                type: t.type,
                content: e(t.content, n),
                tag: "span",
                classes: ["token", t.type],
                attributes: {},
                language: n,
              },
              i = t.alias;
            (i &&
              (Array.isArray(i)
                ? Array.prototype.push.apply(a.classes, i)
                : a.classes.push(i)),
              o.hooks.run("wrap", a));
            var l = "";
            for (var s in a.attributes)
              l +=
                " " +
                s +
                '="' +
                (a.attributes[s] || "").replace(/"/g, "&quot;") +
                '"';
            return (
              "<" +
              a.tag +
              ' class="' +
              a.classes.join(" ") +
              '"' +
              l +
              ">" +
              a.content +
              "</" +
              a.tag +
              ">"
            );
          }),
          !e.document)
        )
          return (
            e.addEventListener &&
              (o.disableWorkerMessageHandler ||
                e.addEventListener(
                  "message",
                  function (t) {
                    var n = JSON.parse(t.data),
                      r = n.language,
                      a = n.code,
                      i = n.immediateClose;
                    (e.postMessage(o.highlight(a, o.languages[r], r)),
                      i && e.close());
                  },
                  !1,
                )),
            o
          );
        var d = o.util.currentScript();
        function m() {
          o.manual || o.highlightAll();
        }
        if (
          (d &&
            ((o.filename = d.src),
            d.hasAttribute("data-manual") && (o.manual = !0)),
          !o.manual)
        ) {
          var p = document.readyState;
          p === "loading" || (p === "interactive" && d && d.defer)
            ? document.addEventListener("DOMContentLoaded", m)
            : window.requestAnimationFrame
              ? window.requestAnimationFrame(m)
              : window.setTimeout(m, 16);
        }
        return o;
      })(e);
    (typeof a != "undefined" && a.exports && (a.exports = l),
      typeof t != "undefined" && (t.Prism = l),
      (l.languages.markup = {
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
      (l.languages.markup.tag.inside["attr-value"].inside.entity =
        l.languages.markup.entity),
      (l.languages.markup.doctype.inside["internal-subset"].inside =
        l.languages.markup),
      l.hooks.add("wrap", function (e) {
        e.type === "entity" &&
          (e.attributes.title = e.content.replace(/&amp;/, "&"));
      }),
      Object.defineProperty(l.languages.markup.tag, "addInlined", {
        value: function (e, t) {
          var n = {};
          ((n["language-" + t] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: !0,
            inside: l.languages[t],
          }),
            (n.cdata = /^<!\[CDATA\[|\]\]>$/i));
          var r = {
            "included-cdata": {
              pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
              inside: n,
            },
          };
          r["language-" + t] = { pattern: /[\s\S]+/, inside: l.languages[t] };
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
            l.languages.insertBefore("markup", "cdata", o));
        },
      }),
      Object.defineProperty(l.languages.markup.tag, "addAttribute", {
        value: function (e, t) {
          l.languages.markup.tag.inside["special-attr"].push({
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
                    inside: l.languages[t],
                  },
                  punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
                },
              },
            },
          });
        },
      }),
      (l.languages.html = l.languages.markup),
      (l.languages.mathml = l.languages.markup),
      (l.languages.svg = l.languages.markup),
      (l.languages.xml = l.languages.extend("markup", {})),
      (l.languages.ssml = l.languages.xml),
      (l.languages.atom = l.languages.xml),
      (l.languages.rss = l.languages.xml),
      (function (e) {
        var t =
          /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        ((e.languages.css = {
          comment: /\/\*[\s\S]*?\*\//,
          atrule: {
            pattern: RegExp(
              "@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|" +
                t.source +
                ")*?(?:;|(?=\\s*\\{))",
            ),
            inside: {
              rule: /^@[\w-]+/,
              "selector-function-argument": {
                pattern:
                  /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                lookbehind: !0,
                alias: "selector",
              },
              keyword: {
                pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                lookbehind: !0,
              },
            },
          },
          url: {
            pattern: RegExp(
              "\\burl\\((?:" + t.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)",
              "i",
            ),
            greedy: !0,
            inside: {
              function: /^url/i,
              punctuation: /^\(|\)$/,
              string: { pattern: RegExp("^" + t.source + "$"), alias: "url" },
            },
          },
          selector: {
            pattern: RegExp(
              "(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
                t.source +
                ")*(?=\\s*\\{)",
            ),
            lookbehind: !0,
          },
          string: { pattern: t, greedy: !0 },
          property: {
            pattern:
              /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: !0,
          },
          important: /!important\b/i,
          function: {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: !0,
          },
          punctuation: /[(){};:,]/,
        }),
          (e.languages.css.atrule.inside.rest = e.languages.css));
        var n = e.languages.markup;
        n &&
          (n.tag.addInlined("style", "css"),
          n.tag.addAttribute("style", "css"));
      })(l),
      (l.languages.clike = {
        comment: [
          {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0,
            greedy: !0,
          },
          { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
        ],
        string: {
          pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          greedy: !0,
        },
        "class-name": {
          pattern:
            /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
          lookbehind: !0,
          inside: { punctuation: /[.\\]/ },
        },
        keyword:
          /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
        boolean: /\b(?:false|true)\b/,
        function: /\b\w+(?=\()/,
        number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        punctuation: /[{}[\];(),.:]/,
      }),
      (l.languages.javascript = l.languages.extend("clike", {
        "class-name": [
          l.languages.clike["class-name"],
          {
            pattern:
              /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
            lookbehind: !0,
          },
        ],
        keyword: [
          { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
          {
            pattern:
              /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0,
          },
        ],
        function:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        number: {
          pattern: RegExp(
            "(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])",
          ),
          lookbehind: !0,
        },
        operator:
          /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
      })),
      (l.languages.javascript["class-name"][0].pattern =
        /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
      l.languages.insertBefore("javascript", "keyword", {
        regex: {
          pattern: RegExp(
            "((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))",
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            "regex-source": {
              pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
              lookbehind: !0,
              alias: "language-regex",
              inside: l.languages.regex,
            },
            "regex-delimiter": /^\/|\/$/,
            "regex-flags": /^[a-z]+$/,
          },
        },
        "function-variable": {
          pattern:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
          alias: "function",
        },
        parameter: [
          {
            pattern:
              /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
            lookbehind: !0,
            inside: l.languages.javascript,
          },
          {
            pattern:
              /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: !0,
            inside: l.languages.javascript,
          },
          {
            pattern:
              /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: !0,
            inside: l.languages.javascript,
          },
          {
            pattern:
              /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: !0,
            inside: l.languages.javascript,
          },
        ],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
      }),
      l.languages.insertBefore("javascript", "string", {
        hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
        "template-string": {
          pattern:
            /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
          greedy: !0,
          inside: {
            "template-punctuation": { pattern: /^`|`$/, alias: "string" },
            interpolation: {
              pattern:
                /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
              lookbehind: !0,
              inside: {
                "interpolation-punctuation": {
                  pattern: /^\$\{|\}$/,
                  alias: "punctuation",
                },
                rest: l.languages.javascript,
              },
            },
            string: /[\s\S]+/,
          },
        },
        "string-property": {
          pattern:
            /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
          lookbehind: !0,
          greedy: !0,
          alias: "property",
        },
      }),
      l.languages.insertBefore("javascript", "operator", {
        "literal-property": {
          pattern:
            /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
          lookbehind: !0,
          alias: "property",
        },
      }),
      l.languages.markup &&
        (l.languages.markup.tag.addInlined("script", "javascript"),
        l.languages.markup.tag.addAttribute(
          "on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)",
          "javascript",
        )),
      (l.languages.js = l.languages.javascript));
  },
  null,
);
