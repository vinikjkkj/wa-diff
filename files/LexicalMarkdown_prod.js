__d(
  "LexicalMarkdown.prod",
  [
    "Lexical",
    "LexicalCodeCore",
    "LexicalLink",
    "LexicalList",
    "LexicalRichText",
    "LexicalSelection",
  ],
  function $module_LexicalMarkdown_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _require_LexicalList;
    function i(e, t) {
      var n = {};
      for (var _o of e) {
        var _e = t(_o);
        _e && (n[_e] ? n[_e].push(_o) : (n[_e] = [_o]));
      }
      return n;
    }
    function l(e) {
      var t = i(e, function (e) {
        return e.type;
      });
      return {
        element: t.element || [],
        multilineElement: t["multiline-element"] || [],
        textFormat: t["text-format"] || [],
        textMatch: t["text-match"] || [],
      };
    }
    var c = /[!-/:-@[-`{-~\s]/,
      a = /\s/,
      d = /[!\"#$%&\'()*+,\-./:;<=>?@[\]^_`{|}~]/,
      f = /^\s{0,3}$/;
    function u(t) {
      if (!require("Lexical").$isParagraphNode(t)) return !1;
      var n = t.getFirstChild();
      return (
        null == n ||
        (1 === t.getChildrenSize() &&
          require("Lexical").$isTextNode(n) &&
          f.test(n.getTextContent()))
      );
    }
    function g(e) {
      return e
        .replace(/\\([!-/:-@[-`{-~])/g, "$1")
        .replace(/&#(\d+);/g, function (e, t) {
          return String.fromCodePoint(Number(t));
        });
    }
    var p = /^(\s*)(\d{1,})\.\s/,
      h = /^(\s*)[-*+]\s/,
      x = /^(\s*)(?:[-*+]\s)?\s?(\[(\s|x)?\])\s/i,
      m = /^(#{1,6})\s/,
      $ = /^>\s/,
      N = /^([ \t]*`{3,})([\w-]+)?[ \t]?/,
      T = /^[ \t]*`{3,}$/,
      C = /^[ \t]*```[^`]+(?:(?:`{1,2}|`{4,})[^`]+)*```(?:[^`]|$)/,
      S = /^(?:\|)(.+)(?:\|)\s?$/;
    function E(e) {
      if ("|" !== e[0]) return !1;
      var t = e.length;
      var n = 1,
        o = 0;
      for (; n < t; ) {
        var _t = n;
        for (" " === e[_t] && _t++, ":" === e[_t] && _t++; "-" === e[_t]; )
          _t++;
        if ((":" === e[_t] && _t++, " " === e[_t] && _t++, "|" !== e[_t]))
          break;
        (o++, (n = _t + 1));
      }
      return o > 0 && (n === t || (n === t - 1 && /\s/.test(e[n])));
    }
    var I = /^<[a-z_][\w-]*(?:\s[^<>]*)?\/?>/i,
      L = /^<\/[a-z_][\w-]*\s*>/i,
      R = function R(e) {
        return new RegExp("(?:" + e.source + ")$", e.flags);
      },
      O = require("Lexical").createState("mdListMarker", {
        parse: function parse(e) {
          return "string" == typeof e && /^[-*+]$/.test(e) ? e : "-";
        },
        resetOnCopyNode: !0,
      }),
      v = require("Lexical").createState("mdCodeFence", {
        parse: function parse(e) {
          return "string" == typeof e && /^`{3,}$/.test(e) ? e : "```";
        },
        resetOnCopyNode: !0,
      }),
      _ = require("Lexical").createState("mdHardLineBreak", {
        parse: function parse(e) {
          return "string" == typeof e && /^(\\| {2,})$/.test(e) ? e : "";
        },
        resetOnCopyNode: !0,
      });
    function y(e) {
      if (e.endsWith("\\")) return [e.slice(0, -1), "\\"];
      var t = e.match(/^(.*?\S)( {2,})$/);
      return t ? [t[1], t[2]] : null;
    }
    function k(t) {
      var n = t.getChildren(),
        o = n.length - 1,
        r = n[o];
      if (!require("Lexical").$isTextNode(r)) return null;
      var s = r.getTextContent(),
        i = y(s);
      if (null !== i) {
        var _e2 = i[0],
          _t2 = i[1];
        return (r.setTextContent(_e2), _t2);
      }
      return /^ {2,}$/.test(s) &&
        (function (t, n) {
          for (var _o2 = n - 1; _o2 >= 0; _o2--) {
            if (require("Lexical").$isLineBreakNode(t[_o2])) return !1;
            if (/\S/.test(t[_o2].getTextContent())) return !0;
          }
          return !1;
        })(n, o)
        ? (r.setTextContent(""), s)
        : null;
    }
    function w(t) {
      var n = require("Lexical").$createLineBreakNode(),
        o = k(t);
      return (null !== o && require("Lexical").$setState(n, _, o), n);
    }
    var M = function M(e) {
      return function (t, n, o, r) {
        var s = e(o);
        (s.append.apply(s, n), t.replace(s), r || s.select(0, 0));
      };
    };
    var b = function b(t) {
        return function (n, o, i, l) {
          if (require("LexicalRichText").$isHeadingNode(n)) return !1;
          var c = n.getPreviousSibling(),
            a = n.getNextSibling(),
            d = require("LexicalList").$createListItemNode(
              "check" === t ? "x" === i[3] : void 0,
            ),
            f = i[0].trim()[0],
            u =
              ("bullet" !== t && "check" !== t) || f !== O.parse(f)
                ? void 0
                : f;
          if (require("LexicalList").$isListNode(a) && a.getListType() === t) {
            u && require("Lexical").$setState(a, O, u);
            var _o3 = a.getFirstChild();
            (null !== _o3 ? _o3.insertBefore(d) : a.append(d),
              "number" === t && a.setStart(Number(i[2])),
              n.remove());
          } else if (
            require("LexicalList").$isListNode(c) &&
            c.getListType() === t
          )
            (u && require("Lexical").$setState(c, O, u),
              c.append(d),
              n.remove());
          else {
            var _o4 = require("LexicalList").$createListNode(
              t,
              "number" === t ? Number(i[2]) : void 0,
            );
            (u && require("Lexical").$setState(_o4, O, u),
              _o4.append(d),
              n.replace(_o4));
          }
          (d.append.apply(d, o), l || d.select(0, 0));
          var g = (function (e) {
            var t = e.match(/\t/g),
              n = e.match(/ /g);
            var o = 0;
            return (
              t && (o += t.length),
              n && (o += Math.floor(n.length / 4)),
              o
            );
          })(i[1]);
          g && d.setIndent(g);
        };
      },
      _A = function A(t, n, o, s) {
        var i = [],
          l = t.getChildren();
        var c = 0;
        for (var _a of l)
          if (require("LexicalList").$isListItemNode(_a)) {
            if (1 === _a.getChildrenSize()) {
              var _e3 = _a.getFirstChild();
              if (require("LexicalList").$isListNode(_e3)) {
                var _t3 = _A(_e3, n, o + 1, s);
                _t3 && i.push(_t3);
                continue;
              }
            }
            if (
              s &&
              !_a.getChildren().some(function (e) {
                return e.isSelected(s);
              })
            )
              continue;
            var _l = " ".repeat(4 * o),
              _d = t.getListType(),
              _f = require("Lexical").$getState(t, O),
              _u =
                "number" === _d
                  ? t.getStart() + c + ". "
                  : "check" === _d
                    ? _f + " [" + (_a.getChecked() ? "x" : " ") + "] "
                    : _f + " ";
            var _g = n(_a);
            ("number" !== _d &&
              (_g = _g.replace(/^(\s{0,3}\d+)(\.\s)/, "$1\\$2")),
              i.push(_l + _u + _g),
              c++);
          }
        return i.join("\n");
      },
      F = {
        dependencies: [require("LexicalRichText").HeadingNode],
        export: function _export(e, t) {
          if (!require("LexicalRichText").$isHeadingNode(e)) return null;
          var n = Number(e.getTag().slice(1));
          return "#".repeat(n) + " " + t(e);
        },
        regExp: m,
        replace: M(function (e) {
          var t = "h" + e[1].length;
          return require("LexicalRichText").$createHeadingNode(t);
        }),
        triggerOnEnter: !0,
        type: "element",
      },
      B = {
        dependencies: [require("LexicalRichText").QuoteNode],
        export: function _export(e, t) {
          if (!require("LexicalRichText").$isQuoteNode(e)) return null;
          var n = t(e).split("\n"),
            o = [];
          for (var _e4 of n) o.push("> " + _e4);
          return o.join("\n");
        },
        regExp: $,
        replace: function replace(e, t, n, o) {
          if (o) {
            var _n = e.getPreviousSibling();
            if (require("LexicalRichText").$isQuoteNode(_n))
              return (
                _n.splice(_n.getChildrenSize(), 0, [w(_n)].concat(t)),
                void e.remove()
              );
          }
          var r = require("LexicalRichText").$createQuoteNode();
          (r.append.apply(r, t), e.replace(r), o || r.select(0, 0));
        },
        triggerOnEnter: !0,
        type: "element",
      },
      D = {
        dependencies: [require("LexicalCodeCore").CodeNode],
        export: function _export(t) {
          if (!require("LexicalCodeCore").$isCodeNode(t)) return null;
          var o = t.getTextContent();
          var r = require("Lexical").$getState(t, v);
          if (o.indexOf(r) > -1) {
            var _e5 = o.match(/`{3,}/g);
            if (_e5) {
              var _t4 = Math.max.apply(
                Math,
                _e5.map(function (e) {
                  return e.length;
                }),
              );
              r = "`".repeat(_t4 + 1);
            }
          }
          return r + (t.getLanguage() || "") + (o ? "\n" + o : "") + "\n" + r;
        },
        handleImportAfterStartMatch: function handleImportAfterStartMatch(
          _ref,
        ) {
          var e = _ref.lines,
            t = _ref.rootNode,
            n = _ref.startLineIndex,
            o = _ref.startMatch;
          var r = o[1],
            s = r.trim().length,
            i = e[n],
            l = o.index + r.length,
            c = i.slice(l),
            a = new RegExp("`{" + s + ",}$");
          if (a.test(c)) {
            var _e6 = c.match(a),
              _r = c.slice(0, c.lastIndexOf(_e6[0])),
              _s = [].concat(o);
            return (
              (_s[2] = ""),
              D.replace(t, null, _s, _e6, [_r], !0),
              [!0, n]
            );
          }
          var d = new RegExp("^[ \\t]*`{" + s + ",}$");
          for (var _r2 = n + 1; _r2 < e.length; _r2++) {
            var _s2 = e[_r2];
            if (d.test(_s2)) {
              var _l2 = _s2.match(d),
                _c = e.slice(n + 1, _r2),
                _a2 = i.slice(o[0].length);
              return (
                _a2.length > 0 && _c.unshift(_a2),
                D.replace(t, null, o, _l2, _c, !0),
                [!0, _r2]
              );
            }
          }
          var f = e.slice(n + 1),
            u = i.slice(o[0].length);
          return (
            u.length > 0 && f.unshift(u),
            D.replace(t, null, o, null, f, !0),
            [!0, e.length - 1]
          );
        },
        regExpEnd: { optional: !0, regExp: T },
        regExpStart: N,
        replace: function replace(t, o, r, s, i, l) {
          var c, a;
          var d = r[1] ? r[1].trim() : "```",
            f = r[2] || void 0;
          if (!o && i) {
            if (1 === i.length)
              s
                ? ((c = require("LexicalCodeCore").$createCodeNode(f)),
                  (a = i[0]))
                : ((c = require("LexicalCodeCore").$createCodeNode(f)),
                  (a = i[0].startsWith(" ") ? i[0].slice(1) : i[0]));
            else {
              for (
                c = require("LexicalCodeCore").$createCodeNode(f),
                  i.length > 0 &&
                    (0 === i[0].trim().length
                      ? i.shift()
                      : i[0].startsWith(" ") && (i[0] = i[0].slice(1)));
                i.length > 0 && !i[i.length - 1].length;
              )
                i.pop();
              a = i.join("\n");
            }
            require("Lexical").$setState(c, v, d);
            var _o5 = require("Lexical").$createTextNode(a);
            (c.append(_o5), t.append(c));
          } else
            o &&
              M(function (e) {
                return require("LexicalCodeCore").$createCodeNode(
                  e ? e[2] : void 0,
                );
              })(t, o, r, l);
        },
        type: "multiline-element",
      },
      P = {
        dependencies: [
          (_require_LexicalList = require("LexicalList")).ListNode,
          _require_LexicalList.ListItemNode,
        ],
        export: function _export(e, t, n) {
          return require("LexicalList").$isListNode(e) ? _A(e, t, 0, n) : null;
        },
        regExp: h,
        replace: b("bullet"),
        triggerOnEnter: !0,
        type: "element",
      },
      H = {
        dependencies: [
          _require_LexicalList.ListNode,
          _require_LexicalList.ListItemNode,
        ],
        export: function _export(e, t, n) {
          return require("LexicalList").$isListNode(e) ? _A(e, t, 0, n) : null;
        },
        regExp: x,
        replace: b("check"),
        triggerOnEnter: !0,
        type: "element",
      },
      j = {
        dependencies: [
          _require_LexicalList.ListNode,
          _require_LexicalList.ListItemNode,
        ],
        export: function _export(e, t, n) {
          return require("LexicalList").$isListNode(e) ? _A(e, t, 0, n) : null;
        },
        regExp: p,
        replace: b("number"),
        triggerOnEnter: !0,
        type: "element",
      },
      U = { format: ["code"], tag: "`", type: "text-format" };
    var z = { format: ["highlight"], tag: "==", type: "text-format" },
      W = { format: ["bold", "italic"], tag: "***", type: "text-format" },
      G = {
        format: ["bold", "italic"],
        intraword: !1,
        tag: "___",
        type: "text-format",
      },
      q = { format: ["bold"], tag: "**", type: "text-format" },
      Q = { format: ["bold"], intraword: !1, tag: "__", type: "text-format" },
      K = { format: ["strikethrough"], tag: "~~", type: "text-format" },
      X = { format: ["italic"], tag: "*", type: "text-format" },
      Y = { format: ["italic"], intraword: !1, tag: "_", type: "text-format" };
    function Z(e) {
      return e.replace(
        /&(?=#\d+;|#[Xx][\dA-Fa-f]+;|[A-Za-z][\dA-Za-z]*;)/g,
        "&#38;",
      );
    }
    var J = {
        dependencies: [require("LexicalLink").LinkNode],
        export: function _export(e, t, n) {
          if (
            !require("LexicalLink").$isLinkNode(e) ||
            require("LexicalLink").$isAutoLinkNode(e)
          )
            return null;
          var r = t(e);
          var s = e.getTitle();
          null != s && (s = Z(s).replace(/([\\"])/g, "\\$1"));
          var i = e.getURL(),
            l = Z(i),
            c =
              "" === i || /\s/.test(i)
                ? "<" +
                  l
                    .replace(/([\\<>])/g, "\\$1")
                    .replace(/\r/g, "&#13;")
                    .replace(/\n/g, "&#10;") +
                  ">"
                : l.replace(/([\\()])/g, "\\$1").replace(/^</, "\\<");
          return s
            ? "[" + r + "](" + c + ' "' + s + '")'
            : "[" + r + "](" + c + ")";
        },
        importRegExp:
          /(?:\[(.+?)\])(?:\(\s*(?:(?:<((?:\\.|[^<>\n\\])*)>|((?!<)(?:\\[^\s]|\\(?=\s)|\((?:\\[^\s]|[^\s()\\]|\((?:\\[^\s]|[^\s()\\]|\((?:\\[^\s]|[^\s()\\])*\))*\))*\)|[^\s()\\])+))(?:\s+(?:\"((?:[^\"]*\\")*[^\"]*)\"|\'((?:[^\']*\\')*[^\']*)\'|\(((?:\\.|[^()\\])*)\)))?\s*)?\))/,
        regExp:
          /(?:\[([^[\]]*(?:\[[^[\]]*\][^[\]]*)*)\])(?:\(\s*(?:(?:<((?:\\.|[^<>\n\\])*)>|((?!<)(?:\\[^\s]|\\(?=\s)|\((?:\\[^\s]|[^\s()\\]|\((?:\\[^\s]|[^\s()\\]|\((?:\\[^\s]|[^\s()\\])*\))*\))*\)|[^\s()\\])+))(?:\s+(?:\"((?:[^\"]*\\")*[^\"]*)\"|\'((?:[^\']*\\')*[^\']*)\'|\(((?:\\.|[^()\\])*)\)))?\s*)?\))$/,
        replace: function replace(t, n) {
          var _ref2, _ref3;
          if (
            require("Lexical").$findMatchingParent(
              t,
              require("LexicalLink").$isLinkNode,
            )
          )
            return;
          var r = n[1],
            s = n[2],
            i = n[3],
            l = n[4],
            c = n[5],
            a = n[6],
            d = g((_ref2 = s != null ? s : i) != null ? _ref2 : ""),
            f = (_ref3 = l != null ? l : c) != null ? _ref3 : a,
            u = null != f ? g(f) : void 0,
            p = require("LexicalLink").$createLinkNode(d, { title: u }),
            h = r.split("[").length - 1,
            x = r.split("]").length - 1;
          var m = r,
            $ = "";
          if (h < x) return;
          if (h > x) {
            var _e7 = r.split("[");
            (($ = "[" + _e7[0]), (m = _e7.slice(1).join("[")));
          }
          var N = require("Lexical").$createTextNode(m);
          return (
            N.setFormat(t.getFormat()),
            p.append(N),
            t.replace(p),
            $ && p.insertBefore(require("Lexical").$createTextNode($)),
            N
          );
        },
        trigger: ")",
        type: "text-match",
      },
      V = [F, B, P, j],
      ee = [D],
      te = [U, W, G, q, Q, z, X, Y, K],
      ne = [J],
      oe = [].concat(V, ee, te, ne);
    function re(e, t) {
      if (t === void 0) {
        t = !1;
      }
      var n = e.split("\n");
      var o = 0;
      var r = [];
      for (var _e8 = 0; _e8 < n.length; _e8++) {
        var _s3 = n[_e8],
          _i = _s3.trimEnd(),
          _l3 = r[r.length - 1],
          _c2 = _e8 < n.length - 1 ? y(_s3) : null,
          _a3 = void 0 !== _l3 && null !== y(_l3);
        if (C.test(_i)) r.push(_i);
        else if (0 === o) {
          {
            var _e9 = _i.match(N);
            if (_e9) {
              ((o = _e9[1].trim().length), r.push(_i));
              continue;
            }
          }
          "" === _i ||
          "" === _l3 ||
          !_l3 ||
          m.test(_l3) ||
          m.test(_i) ||
          $.test(_i) ||
          p.test(_i) ||
          h.test(_i) ||
          x.test(_i) ||
          S.test(_i) ||
          E(_i) ||
          _a3 ||
          !t ||
          I.test(_i) ||
          L.test(_i) ||
          R(L).test(_l3) ||
          R(I).test(_l3) ||
          T.test(_l3)
            ? r.push((!t && "" !== _i) || null !== _c2 ? _s3 : _i)
            : (r[r.length - 1] =
                _l3 + " " + (null === _c2 ? _i : _s3).trimStart());
        } else {
          if (T.test(_i) && _i.trim().length >= o) {
            ((o = 0), r.push(_i));
            continue;
          }
          r.push(_s3);
        }
      }
      return r.join("\n");
    }
    function se(t, n, o, r, s, i) {
      var l = t.isSelected(n);
      for (var _c3 of o) {
        if (!_c3["export"]) continue;
        var _o6 = _c3["export"](
          t,
          function (e) {
            return ie(e, n, r, s, i).markdown;
          },
          n,
        );
        if (null != _o6) {
          if (!l && require("Lexical").$isElementNode(t)) {
            ie(t, n, r, s, i).shouldInclude && (l = !0);
          }
          return { markdown: _o6, shouldInclude: l };
        }
      }
      if (require("Lexical").$isElementNode(t)) {
        var _e0 = ie(t, n, r, s, i);
        return {
          markdown: _e0.markdown,
          shouldInclude: l || _e0.shouldInclude,
        };
      }
      return require("Lexical").$isDecoratorNode(t)
        ? { markdown: t.getTextContent(), shouldInclude: l }
        : { markdown: null, shouldInclude: l };
    }
    function ie(n, o, r, s, i, l, c) {
      var a = [],
        d = n.getChildren();
      var f = !1;
      (l || (l = []), c || (c = []));
      e: for (var _n2 of d) {
        var _d2 = _n2.isSelected(o);
        for (var _u2 of s) {
          if (!_u2["export"]) continue;
          var _g2 = _u2["export"](
            _n2,
            function (e) {
              return ie(e, o, r, s, i, l, [].concat(c, l)).markdown;
            },
            function (e, n) {
              return de(
                e,
                require("LexicalSelection")
                  .$sliceSelectedTextNodeContent(o, e, "clone")
                  .getTextContent(),
                r,
                l,
                c,
                i,
              );
            },
          );
          if (null != _g2) {
            (!_d2 &&
              require("Lexical").$isElementNode(_n2) &&
              _n2.getChildren().some(function (e) {
                return e.isSelected(o);
              }) &&
              _n2.extractWithChild(_n2, o, "html") &&
              (_d2 = !0),
              _d2 && (a.push(_g2), (f = !0)));
            continue e;
          }
        }
        if (require("Lexical").$isLineBreakNode(_n2))
          _d2 && (a.push(ae(_n2)), (f = !0));
        else if (require("Lexical").$isTextNode(_n2)) {
          if (_d2) {
            var _e1 = require("LexicalSelection").$sliceSelectedTextNodeContent(
              o,
              _n2,
              "clone",
            );
            (a.push(de(_n2, _e1.getTextContent(), r, l, c, i)), (f = !0));
          }
        } else if (require("Lexical").$isElementNode(_n2)) {
          var _e10 = ie(_n2, o, r, s, i, l, c);
          (!_d2 &&
            _e10.shouldInclude &&
            _n2.extractWithChild(_n2, o, "html") &&
            (_d2 = !0),
            (_d2 || _e10.shouldInclude) && (a.push(_e10.markdown), (f = !0)));
        } else
          require("Lexical").$isDecoratorNode(_n2) &&
            _d2 &&
            (a.push(_n2.getTextContent()), (f = !0));
      }
      return { markdown: a.join(""), shouldInclude: f };
    }
    function le(t, n, o, r, s) {
      for (var _e11 of n) {
        if (!_e11["export"]) continue;
        var _n3 = _e11["export"](t, function (e) {
          return ce(e, o, r, void 0, void 0, s);
        });
        if (null != _n3) return _n3;
      }
      return require("Lexical").$isElementNode(t)
        ? ce(t, o, r, void 0, void 0, s)
        : require("Lexical").$isDecoratorNode(t)
          ? t.getTextContent()
          : null;
    }
    function ce(t, n, o, r, s, i) {
      if (i === void 0) {
        i = !1;
      }
      var l = [],
        c = t.getChildren();
      (r || (r = []), s || (s = []));
      e: for (var _t5 of c) {
        for (var _e12 of o) {
          if (!_e12["export"]) continue;
          var _c4 = _e12["export"](
            _t5,
            function (e) {
              return ce(e, n, o, r, [].concat(s, r), i);
            },
            function (e, t) {
              return de(e, t, n, r, s, i);
            },
          );
          if (null != _c4) {
            l.push(_c4);
            continue e;
          }
        }
        require("Lexical").$isLineBreakNode(_t5)
          ? l.push(ae(_t5))
          : require("Lexical").$isTextNode(_t5)
            ? l.push(de(_t5, _t5.getTextContent(), n, r, s, i))
            : require("Lexical").$isElementNode(_t5)
              ? l.push(ce(_t5, n, o, r, s, i))
              : require("Lexical").$isDecoratorNode(_t5) &&
                l.push(_t5.getTextContent());
      }
      return l.join("");
    }
    function ae(t) {
      return require("Lexical").$getState(t, _) + "\n";
    }
    function de(e, t, n, o, r, s) {
      if (s === void 0) {
        s = !1;
      }
      var i = e.hasFormat("code");
      var l,
        c,
        a,
        d,
        f = t;
      if (
        (i ||
          (f = s
            ? f.replace(/([*_`~])/g, "\\$1")
            : f.replace(/([*_`~\\])/g, "\\$1")),
        i)
      ) {
        var _ref4 = (function (e) {
            var t = e.match(/`+/g),
              n = t
                ? Math.max.apply(
                    Math,
                    t.map(function (e) {
                      return e.length;
                    }),
                  )
                : 0;
            return {
              fence: "`".repeat(n + 1),
              padded:
                0 === e.length ||
                e.includes("`") ||
                (/^\s/.test(e) && /\s$/.test(e))
                  ? " " + e + " "
                  : e,
            };
          })(t),
          _e13 = _ref4.fence,
          _n4 = _ref4.padded;
        ((l = ""), (a = ""), (c = _e13 + _n4 + _e13), (d = !1));
      } else {
        var _e14 = f.match(/^(\s*)([^]*?)(\s*)$/) || ["", "", f, ""];
        ((l = _e14[1]), (c = _e14[2]), (a = _e14[3]), (d = "" === c));
      }
      var u = "",
        g = "",
        p = "";
      var h = fe(e, !0),
        x = fe(e, !1),
        m = new Set();
      var _loop = function _loop() {
        var n = _t6.format[0],
          r = _t6.tag;
        "code" !== n &&
          (d ||
            !ge(e, n) ||
            m.has(n) ||
            (m.add(n),
            (ge(h, n) &&
              o.find(function (e) {
                return e.tag === r;
              })) ||
              (o.push({ format: n, tag: r }), (u += r))));
      };
      for (var _t6 of n) {
        _loop();
      }
      for (var _t7 = 0; _t7 < o.length; _t7++) {
        var _n5 = ue(e, o[_t7].format),
          _s4 = ue(x, o[_t7].format);
        if (_n5 && _s4) continue;
        var _i2 = [].concat(o);
        var _loop2 = function _loop2() {
          var e = _i2.pop();
          (r &&
            e &&
            r.find(function (t) {
              return t.tag === e.tag;
            })) ||
            (e &&
              "string" == typeof e.tag &&
              (_n5 ? _s4 || (p += e.tag) : (g += e.tag)),
            o.pop());
        };
        for (; _i2.length > _t7; ) {
          _loop2();
        }
        break;
      }
      return d && !e.hasFormat("code") ? g + f : g + l + u + c + p + a;
    }
    function fe(t, n) {
      var o = n ? t.getPreviousSibling() : t.getNextSibling();
      return require("Lexical").$isTextNode(o) ? o : null;
    }
    function ue(t, n) {
      return require("Lexical").$isTextNode(t) && t.hasFormat(n);
    }
    function ge(e, t) {
      return (
        !!ue(e, t) && ("code" === t || !e || !/^\s*$/.test(e.getTextContent()))
      );
    }
    function pe(e, t) {
      var n = e.getTextContent(),
        o = t.transformersByTag["`"],
        r = [];
      var s = null;
      if (o) {
        var _e15 = (function (e) {
          var t = function t(_t8) {
              var n = 0;
              for (var _o7 = _t8 - 1; _o7 >= 0 && "\\" === e[_o7]; _o7--) n++;
              return n % 2 == 1;
            },
            n = [];
          var o = 0;
          for (; o < e.length; )
            if ("`" === e[o]) {
              var _t9 = 1;
              for (; o + _t9 < e.length && "`" === e[o + _t9]; ) _t9++;
              (n.push({ index: o, length: _t9 }), (o += _t9));
            } else o++;
          var r = [];
          var s = 0;
          for (; s < n.length; ) {
            var _o8 = n[s];
            if (t(_o8.index)) {
              s++;
              continue;
            }
            var _i3 = -1;
            for (var _e16 = s + 1; _e16 < n.length; _e16++)
              if (n[_e16].length === _o8.length) {
                _i3 = _e16;
                break;
              }
            if (-1 === _i3) {
              s++;
              continue;
            }
            var _l4 = n[_i3];
            var _c5 = e.slice(_o8.index + _o8.length, _l4.index);
            (_c5.length >= 2 &&
              _c5.startsWith(" ") &&
              _c5.endsWith(" ") &&
              /[^ ]/.test(_c5) &&
              (_c5 = _c5.slice(1, -1)),
              r.push({
                content: _c5,
                endIndex: _l4.index + _l4.length,
                startIndex: _o8.index,
              }),
              (s = _i3 + 1));
          }
          return r;
        })(n);
        for (var _t0 of _e15)
          (s ||
            (s = {
              content: _t0.content,
              endIndex: _t0.endIndex,
              startIndex: _t0.startIndex,
              tag: "`",
            }),
            r.push({ end: _t0.endIndex, start: _t0.startIndex }));
      }
      var i = (function (e, t, n) {
          if (n === void 0) {
            n = [];
          }
          var o = [],
            r = new Set(
              Object.keys(t.transformersByTag)
                .filter(function (e) {
                  return "`" !== e[0];
                })
                .map(function (e) {
                  return e[0];
                }),
            ),
            s = function s(t) {
              var n = 0;
              for (var _o9 = t - 1; _o9 >= 0 && "\\" === e[_o9]; _o9--) n++;
              return n % 2 == 1;
            },
            i = function i(e) {
              return n.some(function (t) {
                return e >= t.start && e < t.end;
              });
            };
          var l = 0;
          for (; l < e.length; ) {
            var _t1 = e[l];
            if (!r.has(_t1) || s(l) || i(l)) {
              l++;
              continue;
            }
            var _n6 = 1;
            for (; l + _n6 < e.length && e[l + _n6] === _t1; ) _n6++;
            var _c6 = he(_t1, e, l, _n6, !0),
              _a4 = he(_t1, e, l, _n6, !1);
            ((_c6 || _a4) &&
              o.push({
                active: !0,
                canClose: _a4,
                canOpen: _c6,
                char: _t1,
                index: l,
                length: _n6,
              }),
              (l += _n6));
          }
          return o;
        })(n, t, r),
        l =
          i.length > 0
            ? (function (e, t, n) {
                var o = {};
                var r = 0,
                  s = null;
                for (; r < t.length; ) {
                  var _o$_l;
                  var _i4 = t[r];
                  if (!_i4.active || !_i4.canClose || 0 === _i4.length) {
                    r++;
                    continue;
                  }
                  var _l5 = "" + _i4["char"] + _i4.canOpen + (_i4.length % 3),
                    _c7 = (_o$_l = o[_l5]) != null ? _o$_l : -1;
                  var _a5 = !1;
                  var _loop3 = function _loop3() {
                      var l = t[_o0];
                      if (
                        !l.active ||
                        !l.canOpen ||
                        0 === l.length ||
                        l["char"] !== _i4["char"]
                      )
                        return 0;
                      if (l.canClose || _i4.canOpen) {
                        if (
                          (l.length + _i4.length) % 3 == 0 &&
                          l.length % 3 != 0 &&
                          _i4.length % 3 != 0
                        )
                          return 0;
                      }
                      var c = Math.min(l.length, _i4.length),
                        d = Object.keys(n.transformersByTag)
                          .filter(function (e) {
                            return e[0] === l["char"] && e.length <= c;
                          })
                          .sort(function (e, t) {
                            return t.length - e.length;
                          })[0];
                      if (!d) return 0;
                      _a5 = !0;
                      var f = d.length,
                        u = {
                          content: e.slice(l.index + l.length, _i4.index),
                          endIndex: _i4.index + f,
                          startIndex: l.index + (l.length - f),
                          tag: d,
                        };
                      (!s ||
                        u.startIndex < s.startIndex ||
                        (u.startIndex === s.startIndex &&
                          u.endIndex > s.endIndex)) &&
                        (s = u);
                      for (var _e17 = _o0 + 1; _e17 < r; _e17++)
                        t[_e17].active = !1;
                      ((l.length -= f),
                        (_i4.length -= f),
                        (l.active = l.length > 0),
                        _i4.length > 0
                          ? (_i4.index += f)
                          : ((_i4.active = !1), r++));
                      return 1;
                    },
                    _ret;
                  for (var _o0 = r - 1; _o0 > _c7; _o0--) {
                    _ret = _loop3();
                    if (_ret === 0) continue;
                    if (_ret === 1) break;
                  }
                  _a5 ||
                    ((o[_l5] = r - 1), _i4.canOpen || (_i4.active = !1), r++);
                }
                return s;
              })(n, i, t)
            : null;
      var c = null,
        a = null;
      if (
        (s && l
          ? l.startIndex <= s.startIndex && l.endIndex >= s.endIndex
            ? ((c = l), (a = t.transformersByTag[l.tag]))
            : ((c = s), (a = o))
          : s
            ? ((c = s), (a = o))
            : l && ((c = l), (a = t.transformersByTag[l.tag])),
        !c || !a)
      )
        return null;
      var d = [n.slice(c.startIndex, c.endIndex), c.tag, c.content];
      return (
        (d.index = c.startIndex),
        (d.input = n),
        {
          endIndex: c.endIndex,
          isCodeSpan: a === o,
          match: d,
          startIndex: c.startIndex,
          transformer: a,
        }
      );
    }
    function he(e, t, n, o, r) {
      if (!xe(t, n, o, r)) return !1;
      if ("*" === e) return !0;
      if ("_" === e) {
        if (!xe(t, n, o, !r)) return !0;
        var _e18 = r ? t[n - 1] : t[n + o];
        return void 0 !== _e18 && d.test(_e18);
      }
      return !0;
    }
    function xe(e, t, n, o) {
      var r = e[t - 1],
        s = e[t + n],
        _ref5 = o ? [s, r] : [r, s],
        i = _ref5[0],
        l = _ref5[1];
      return (
        void 0 !== i &&
        !a.test(i) &&
        (!d.test(i) || void 0 === l || a.test(l) || d.test(l))
      );
    }
    function me(t) {
      return require("Lexical").$isTextNode(t) && !t.hasFormat("code");
    }
    function $e(e, t, n) {
      var o = pe(e, t),
        r = (function (e, t) {
          var n = e;
          var o, r, s, i;
          for (var _e19 of t) {
            if (!_e19.replace || !_e19.importRegExp) continue;
            var _t10 = n.getTextContent().match(_e19.importRegExp);
            if (!_t10) continue;
            var _l6 = _t10.index || 0,
              _c8 = _e19.getEndIndex
                ? _e19.getEndIndex(n, _t10)
                : _l6 + _t10[0].length;
            !1 !== _c8 &&
              (void 0 === o ||
                void 0 === r ||
                (_l6 < o && (_c8 > r || _c8 <= o))) &&
              ((o = _l6), (r = _c8), (s = _e19), (i = _t10));
          }
          return void 0 === o || void 0 === r || void 0 === s || void 0 === i
            ? null
            : { endIndex: r, match: i, startIndex: o, transformer: s };
        })(e, n);
      if (
        (o &&
          r &&
          (o.isCodeSpan
            ? r.startIndex <= o.startIndex && r.endIndex >= o.endIndex
              ? (o = null)
              : (r = null)
            : (o.startIndex <= r.startIndex && o.endIndex >= r.endIndex) ||
                r.startIndex > o.endIndex
              ? (r = null)
              : (o = null)),
        o)
      ) {
        var _r3 = (function (e, t, n, o, r, _e$splitText, _e$splitText2) {
          var s = e.getTextContent();
          var i, l, c;
          if (
            (r[0] === s
              ? (i = e)
              : 0 === t
                ? ((_e$splitText = e.splitText(n)),
                  (i = _e$splitText[0]),
                  (l = _e$splitText[1]),
                  _e$splitText)
                : ((_e$splitText2 = e.splitText(t, n)),
                  (c = _e$splitText2[0]),
                  (i = _e$splitText2[1]),
                  (l = _e$splitText2[2]),
                  _e$splitText2),
            i.setTextContent(r[2]),
            o)
          )
            for (var _e20 of o.format)
              i.hasFormat(_e20) || i.toggleFormat(_e20);
          return { nodeAfter: l, nodeBefore: c, transformedNode: i };
        })(e, o.startIndex, o.endIndex, o.transformer, o.match);
        (me(_r3.nodeAfter) && $e(_r3.nodeAfter, t, n),
          me(_r3.nodeBefore) && $e(_r3.nodeBefore, t, n),
          me(_r3.transformedNode) && $e(_r3.transformedNode, t, n));
      } else if (r) {
        var _o1 = (function (e, t, n, o, r, _e$splitText3, _e$splitText4) {
          var s, i, l;
          return (
            0 === t
              ? ((_e$splitText3 = e.splitText(n)),
                (s = _e$splitText3[0]),
                (i = _e$splitText3[1]),
                _e$splitText3)
              : ((_e$splitText4 = e.splitText(t, n)),
                (l = _e$splitText4[0]),
                (s = _e$splitText4[1]),
                (i = _e$splitText4[2]),
                _e$splitText4),
            o.replace
              ? {
                  nodeAfter: i,
                  nodeBefore: l,
                  transformedNode: o.replace(s, r) || void 0,
                }
              : null
          );
        })(e, r.startIndex, r.endIndex, r.transformer, r.match);
        if (!_o1) return;
        (me(_o1.nodeAfter) && $e(_o1.nodeAfter, t, n),
          me(_o1.nodeBefore) && $e(_o1.nodeBefore, t, n),
          me(_o1.transformedNode) && $e(_o1.transformedNode, t, n));
      }
      var s = g(e.getTextContent());
      e.setTextContent(s);
    }
    function Ne(t, n, o, r) {
      if (r === void 0) {
        r = !1;
      }
      var s = l(o),
        i = (function (e) {
          var t = {},
            n = {},
            o = [];
          for (var _r4 of e) {
            var _e21 = _r4.tag;
            t[_e21] = _r4;
            var _s5 = _e21.replace(/(\*|\^|\+)/g, "\\$1");
            (o.push(_s5),
              1 === _e21.length
                ? (n[_e21] =
                    "`" === _e21
                      ? new RegExp("(^|[^\\\\`])(`)((?:\\\\`|[^`])+?)(`)(?!`)")
                      : new RegExp(
                          "(^|[^\\\\" +
                            _s5 +
                            "])(" +
                            _s5 +
                            ")((\\\\" +
                            _s5 +
                            ")?.*?[^" +
                            _s5 +
                            "\\s](\\\\" +
                            _s5 +
                            ")?)(" +
                            _s5 +
                            ")(?![\\\\" +
                            _s5 +
                            "])",
                        ))
                : (n[_e21] = new RegExp(
                    "(^|[^\\\\])(" +
                      _s5 +
                      ")((\\\\" +
                      _s5 +
                      ")?.*?[^\\s](\\\\" +
                      _s5 +
                      ")?)(" +
                      _s5 +
                      ")(?!\\\\)",
                  )));
          }
          return {
            fullMatchRegExpByTag: n,
            openTagsRegExp: new RegExp("(" + o.join("|") + ")", "g"),
            transformersByTag: t,
          };
        })(s.textFormat),
        c = t.split("\n"),
        a = c.length;
      for (var _e22 = 0; _e22 < a; _e22++) {
        var _t11 = c[_e22],
          _Te = Te(c, _e22, s.multilineElement, n),
          _o10 = _Te[0],
          _l7 = _Te[1];
        _o10 ? (_e22 = _l7) : Ce(_t11, n, s.element, i, s.textMatch, r);
      }
      var d = n.getChildren();
      for (var _t12 of d)
        if (!r && u(_t12) && n.getChildrenSize() > 1) _t12.remove();
        else if (require("Lexical").$isElementNode(_t12))
          for (var _e23 of _t12.getAllTextNodes()) Se(_e23);
    }
    function Te(e, t, n, o) {
      for (var _r5 of n) {
        var _n7 = _r5.handleImportAfterStartMatch,
          _s6 = _r5.regExpEnd,
          _i5 = _r5.regExpStart,
          _l8 = _r5.replace,
          _c9 = e[t].match(_i5);
        if (!_c9) continue;
        if (_n7) {
          var _s7 = _n7({
            lines: e,
            rootNode: o,
            startLineIndex: t,
            startMatch: _c9,
            transformer: _r5,
          });
          if (null === _s7) continue;
          if (_s7) return _s7;
        }
        var _a6 = "object" == typeof _s6 && "regExp" in _s6 ? _s6.regExp : _s6,
          _d3 =
            _s6 && "object" == typeof _s6 && "optional" in _s6
              ? _s6.optional
              : !_s6;
        var _f2 = t;
        var _u3 = e.length;
        for (; _f2 < _u3; ) {
          var _n8 = _a6 ? e[_f2].match(_a6) : null;
          if (!_n8 && (!_d3 || (_d3 && _f2 < _u3 - 1))) {
            _f2++;
            continue;
          }
          if (_n8 && t === _f2 && _n8.index === _c9.index) {
            _f2++;
            continue;
          }
          var _r6 = [];
          if (_n8 && t === _f2)
            _r6.push(e[t].slice(_c9[0].length, -_n8[0].length));
          else
            for (var _o11 = t; _o11 <= _f2; _o11++)
              if (_o11 === t) {
                var _t13 = e[_o11].slice(_c9[0].length);
                _r6.push(_t13);
              } else if (_o11 === _f2 && _n8) {
                var _t14 = e[_o11].slice(0, -_n8[0].length);
                _r6.push(_t14);
              } else _r6.push(e[_o11]);
          if (!1 !== _l8(o, null, _c9, _n8, _r6, !0)) return [!0, _f2];
          break;
        }
      }
      return [!1, t];
    }
    function Ce(t, n, o, i, l, c) {
      var a = require("Lexical").$createTextNode(t),
        d = require("Lexical").$createParagraphNode();
      (d.append(a), n.append(d));
      for (var _ref7 of o) {
        var _e24 = _ref7.regExp;
        var _n9 = _ref7.replace;
        {
          var _o12 = t.match(_e24);
          if (
            _o12 &&
            (a.setTextContent(t.slice(_o12[0].length)),
            !1 !== _n9(d, [a], _o12, !0))
          )
            break;
        }
      }
      if (($e(a, i, l), null !== d.getParent() && t.length > 0)) {
        var _t15 = d.getPreviousSibling();
        if (
          !c &&
          (require("Lexical").$isParagraphNode(_t15) ||
            require("LexicalRichText").$isQuoteNode(_t15) ||
            require("LexicalList").$isListNode(_t15))
        ) {
          var _n0 = _t15;
          if (require("LexicalList").$isListNode(_t15)) {
            var _o13 = _t15.getLastDescendant();
            _n0 =
              null == _o13
                ? null
                : require("Lexical").$findMatchingParent(
                    _o13,
                    require("LexicalList").$isListItemNode,
                  );
          }
          null != _n0 &&
            _n0.getTextContentSize() > 0 &&
            (_n0.splice(
              _n0.getChildrenSize(),
              0,
              [w(_n0)].concat(d.getChildren()),
            ),
            d.remove());
        }
      }
    }
    function Se(t) {
      var n = new Set(),
        o = t.getTextContent();
      var r = o.indexOf("\t");
      for (; -1 !== r; ) (n.add(r), n.add(r + 1), (r = o.indexOf("\t", r + 1)));
      t.splitText.apply(t, n).forEach(function (t) {
        "\t" === t.getTextContent() &&
          t.replace(require("Lexical").$createTabNode());
      });
    }
    function Ee(e) {
      var n = new URL("https://lexical.dev/docs/error"),
        o = new URLSearchParams();
      o.append("code", e);
      for (
        var _len = arguments.length,
          t = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        t[_key - 1] = arguments[_key];
      }
      for (var _e25 of t) o.append("v", _e25);
      throw (
        (n.search = o.toString()),
        Error(
          "Minified Lexical error #" +
            e +
            "; visit " +
            n.toString() +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
        )
      );
    }
    function Ie(t, n, o, r, s) {
      var i = t.getParent();
      if (!require("Lexical").$isRootOrShadowRoot(i) || t.getFirstChild() !== n)
        return !1;
      var l = n.getTextContent();
      if (!s && " " !== l[o - 1]) return !1;
      for (var _ref9 of r) {
        var _e26 = _ref9.regExp;
        var _i6 = _ref9.replace;
        {
          var _r7 = l.match(_e26),
            _c0 = s || (_r7 && _r7[0].endsWith(" ")) ? o : o - 1;
          if (_r7 && _r7[0].length === _c0) {
            var _e27 = n.getNextSiblings(),
              _n$splitText = n.splitText(o),
              _s8 = _n$splitText[0],
              _l9 = _n$splitText[1];
            if (!1 !== _i6(t, _l9 ? [_l9].concat(_e27) : _e27, _r7, !1))
              return (_s8.remove(), !0);
          }
        }
      }
      return !1;
    }
    function Le(t, n, o, r, s) {
      var i = t.getParent();
      if (!require("Lexical").$isRootOrShadowRoot(i) || t.getFirstChild() !== n)
        return !1;
      var l = n.getTextContent();
      if (!s && " " !== l[o - 1]) return !1;
      for (var _ref1 of r) {
        var _e28 = _ref1.regExpStart;
        var _i7 = _ref1.replace;
        var _c1 = _ref1.regExpEnd;
        {
          if (
            (_c1 && !("optional" in _c1)) ||
            (_c1 && "optional" in _c1 && !_c1.optional)
          )
            continue;
          var _r8 = l.match(_e28);
          if (_r8) {
            var _e29 = s || _r8[0].endsWith(" ") ? o : o - 1;
            if (_r8[0].length !== _e29) continue;
            var _l0 = n.getNextSiblings(),
              _n$splitText2 = n.splitText(o),
              _c10 = _n$splitText2[0],
              _a7 = _n$splitText2[1];
            if (
              !1 !== _i7(t, _a7 ? [_a7].concat(_l0) : _l0, _r8, null, null, !1)
            )
              return (_c10.remove(), !0);
          }
        }
      }
      return !1;
    }
    function Re(e, t) {
      var n = 0;
      var o = e.getTextContent();
      for (var _e30 = 0; _e30 < t; _e30++) "`" === o[_e30] && n++;
      return n % 2 != 0;
    }
    function Oe(e, t, n) {
      var o = n.length;
      for (var _r9 = t; _r9 >= o; _r9--) {
        var _t16 = _r9 - o;
        if (ve(e, _t16, n, 0, o) && " " !== e[_t16 + o]) return _t16;
      }
      return -1;
    }
    function ve(e, t, n, o, r) {
      for (var _s9 = 0; _s9 < r; _s9++)
        if (e[t + _s9] !== n[o + _s9]) return !1;
      return !0;
    }
    ((exports.$convertFromMarkdownString = function (t, n, o, r, s) {
      if (n === void 0) {
        n = oe;
      }
      if (r === void 0) {
        r = !1;
      }
      if (s === void 0) {
        s = !1;
      }
      var i = r ? t : re(t, s),
        l = o || require("Lexical").$getRoot();
      (l.clear(),
        Ne(i, l, n, r),
        null !== require("Lexical").$getSelection() && l.selectStart());
    }),
      (exports.$convertSelectionToMarkdownString = function (t, n, o) {
        if (t === void 0) {
          t = oe;
        }
        if (o === void 0) {
          o = !1;
        }
        if (!n || (require("Lexical").$isRangeSelection(n) && n.isCollapsed()))
          return "";
        return (function (t, n) {
          if (n === void 0) {
            n = !1;
          }
          var o = l(t),
            r = [].concat(o.multilineElement, o.element),
            s = !n,
            i = o.textFormat
              .filter(function (e) {
                return 1 === e.format.length;
              })
              .sort(function (e, t) {
                return (
                  Number(e.format.includes("code")) -
                  Number(t.format.includes("code"))
                );
              });
          return function (t) {
            var l = [];
            var c = null;
            for (var _a8 of require("Lexical").$getRoot().getChildren()) {
              var _se = se(_a8, t, r, i, o.textMatch, n),
                _e31 = _se.shouldInclude,
                _d4 = _se.markdown;
              _e31 &&
                null != _d4 &&
                (l.push(
                  !s || null === c || u(_a8) || u(c) ? _d4 : "\n".concat(_d4),
                ),
                (c = _a8));
            }
            return l.join("\n");
          };
        })(
          t,
          o,
        )(n);
      }),
      (exports.$convertToMarkdownString = function (t, n, o) {
        if (t === void 0) {
          t = oe;
        }
        if (o === void 0) {
          o = !1;
        }
        return (function (t, n) {
          if (n === void 0) {
            n = !1;
          }
          var o = l(t),
            r = [].concat(o.multilineElement, o.element),
            s = !n,
            i = o.textFormat
              .filter(function (e) {
                return 1 === e.format.length;
              })
              .sort(function (e, t) {
                return (
                  Number(e.format.includes("code")) -
                  Number(t.format.includes("code"))
                );
              });
          return function (t) {
            var l = [],
              c = (t || require("Lexical").$getRoot()).getChildren();
            for (var _e32 = 0; _e32 < c.length; _e32++) {
              var _t17 = c[_e32],
                _a9 = le(_t17, r, i, o.textMatch, n);
              null != _a9 &&
                l.push(
                  s && _e32 > 0 && !u(_t17) && !u(c[_e32 - 1])
                    ? "\n".concat(_a9)
                    : _a9,
                );
            }
            return l.join("\n");
          };
        })(
          t,
          o,
        )(n);
      }),
      (exports.$generateNodesFromMarkdownString = function (t, n, o, r) {
        if (n === void 0) {
          n = oe;
        }
        if (o === void 0) {
          o = !1;
        }
        if (r === void 0) {
          r = !1;
        }
        var s = o ? t : re(t, r),
          i = new (require("Lexical").ArtificialNode__DO_NOT_USE)();
        return (Ne(s, i, n, o), i.getChildren());
      }),
      (exports.BOLD_ITALIC_STAR = W),
      (exports.BOLD_ITALIC_UNDERSCORE = G),
      (exports.BOLD_STAR = q),
      (exports.BOLD_UNDERSCORE = Q),
      (exports.CHECK_LIST = H),
      (exports.CODE = D),
      (exports.ELEMENT_TRANSFORMERS = V),
      (exports.HEADING = F),
      (exports.HIGHLIGHT = z),
      (exports.INLINE_CODE = U),
      (exports.ITALIC_STAR = X),
      (exports.ITALIC_UNDERSCORE = Y),
      (exports.LINK = J),
      (exports.MULTILINE_ELEMENT_TRANSFORMERS = ee),
      (exports.ORDERED_LIST = j),
      (exports.QUOTE = B),
      (exports.STRIKETHROUGH = K),
      (exports.TEXT_FORMAT_TRANSFORMERS = te),
      (exports.TEXT_MATCH_TRANSFORMERS = ne),
      (exports.TRANSFORMERS = oe),
      (exports.UNORDERED_LIST = P),
      (exports.isTableRowDivider = E),
      (exports.registerMarkdownShortcuts = function (t, o) {
        if (o === void 0) {
          o = oe;
        }
        var r = l(o),
          s = r.element.filter(function (e) {
            return e.triggerOnEnter;
          }),
          a = i(r.textFormat, function (_ref10) {
            var e = _ref10.tag;
            return e[e.length - 1];
          }),
          d = i(r.textMatch, function (_ref11) {
            var e = _ref11.trigger;
            return e;
          }),
          f = new Set([" "]);
        for (var _e33 of r.textFormat) f.add(_e33.tag.slice(-1));
        for (var _e34 of r.textMatch)
          void 0 !== _e34.trigger && f.add(_e34.trigger);
        for (var _e35 of o) {
          var _n1 = _e35.type;
          if (
            "element" === _n1 ||
            "text-match" === _n1 ||
            "multiline-element" === _n1
          ) {
            var _n10 = _e35.dependencies;
            for (var _e36 of _n10) t.hasNode(_e36) || Ee(173, _e36.getType());
          }
        }
        var u = function u(t, n, o) {
          return (
            !!Ie(t, n, o, r.element) ||
            !!Le(t, n, o, r.multilineElement) ||
            !!(function (e, t, n) {
              var o = e.getTextContent();
              var r = n[o[t - 1]];
              if (null == r) return !1;
              t < o.length && (o = o.slice(0, t));
              for (var _t18 of r) {
                var _e$splitText5, _e$splitText6;
                if (!_t18.replace || !_t18.regExp) continue;
                var _n11 = o.match(_t18.regExp);
                if (null === _n11) continue;
                var _r0 = _n11.index || 0,
                  _s0 = _r0 + _n11[0].length;
                var _i8 = void 0;
                return (
                  0 === _r0
                    ? ((_e$splitText5 = e.splitText(_s0)),
                      (_i8 = _e$splitText5[0]),
                      _e$splitText5)
                    : ((_e$splitText6 = e.splitText(_r0, _s0)),
                      (_i8 = _e$splitText6[1]),
                      _e$splitText6),
                  _i8.selectNext(0, 0),
                  _t18.replace(_i8, _n11),
                  !0
                );
              }
              return !1;
            })(n, o, d) ||
            !!(function (t, n, o) {
              var r = t.getTextContent(),
                s = n - 1,
                i = r[s],
                l = o[i];
              if (!l) return !1;
              for (var _n12 of l) {
                var _o14 = _n12.tag,
                  _l1 = _o14.length,
                  _a0 = s - _l1 + 1;
                if (_l1 > 1 && !ve(r, _a0, _o14, 0, _l1)) continue;
                if (" " === r[_a0 - 1]) continue;
                var _d5 = r[s + 1];
                if (!1 === _n12.intraword && _d5 && !c.test(_d5)) continue;
                var _f3 = t;
                var _u4 = _f3,
                  _g3 = Oe(r, _a0, _o14),
                  _p = _u4;
                for (
                  ;
                  _g3 < 0 &&
                  (_p = _p.getPreviousSibling()) &&
                  !require("Lexical").$isLineBreakNode(_p);
                )
                  if (require("Lexical").$isTextNode(_p)) {
                    if (_p.hasFormat("code")) continue;
                    var _e37 = _p.getTextContent();
                    ((_u4 = _p), (_g3 = Oe(_e37, _e37.length, _o14)));
                  }
                if (_g3 < 0) continue;
                if (_u4 === _f3 && _g3 + _l1 === _a0) continue;
                var _h = _u4.getTextContent();
                if (_g3 > 0 && _h[_g3 - 1] === i) continue;
                var _x = _h[_g3 - 1];
                if (!1 === _n12.intraword && _x && !c.test(_x)) continue;
                if (!_n12.format.includes("code") && Re(_u4, _g3)) continue;
                var _m = _f3.getTextContent(),
                  _$ = _m.slice(0, _a0) + _m.slice(s + 1);
                _f3.setTextContent(_$);
                var _N = _u4 === _f3 ? _$ : _h;
                _u4.setTextContent(_N.slice(0, _g3) + _N.slice(_g3 + _l1));
                var _T = require("Lexical").$getSelection(),
                  _C = require("Lexical").$createRangeSelection();
                require("Lexical").$setSelection(_C);
                var _S = s - _l1 * (_u4 === _f3 ? 2 : 1) + 1;
                (_C.anchor.set(_u4.__key, _g3, "text"),
                  _C.focus.set(_f3.__key, _S, "text"));
                for (var _t19 of _n12.format)
                  _C.formatText(
                    _t19,
                    require("Lexical").TEXT_TYPE_TO_FORMAT[_t19],
                  );
                _C.anchor.set(_C.focus.key, _C.focus.offset, _C.focus.type);
                for (var _e38 of _n12.format)
                  _C.hasFormat(_e38) && _C.toggleFormat(_e38);
                return (
                  require("Lexical").$isRangeSelection(_T) &&
                    (_C.format = _T.format),
                  !0
                );
              }
              return !1;
            })(n, o, a)
          );
        };
        return require("Lexical").mergeRegister(
          t.registerUpdateListener(function (_ref12) {
            var o = _ref12.tags,
              r = _ref12.dirtyLeaves,
              s = _ref12.editorState,
              i = _ref12.prevEditorState;
            if (
              o.has(require("Lexical").COLLABORATION_TAG) ||
              o.has(require("Lexical").HISTORIC_TAG)
            )
              return;
            if (t.isComposing()) return;
            var l = o.has(require("Lexical").COMPOSITION_END_TAG),
              c = s.read(require("Lexical").$getSelection),
              a = i.read(require("Lexical").$getSelection);
            if (
              !require("Lexical").$isRangeSelection(a) ||
              !require("Lexical").$isRangeSelection(c) ||
              !c.isCollapsed() ||
              (c.is(a) && !l)
            )
              return;
            var d = c.anchor.key,
              g = c.anchor.offset,
              p = s._nodeMap.get(d);
            if (
              require("Lexical").$isTextNode(p) &&
              r.has(d) &&
              (l || 1 === g || !(g > a.anchor.offset + 1))
            ) {
              if (l) {
                var _e39 = s.read(function () {
                  return p.getTextContent();
                })[g - 1];
                if (!f.has(_e39)) return;
              }
              t.update(function () {
                if (!me(p)) return;
                var t = p.getParent();
                null === t ||
                  require("LexicalCodeCore").$isCodeNode(t) ||
                  (u(t, p, c.anchor.offset) &&
                    require("Lexical").$addUpdateTag(
                      require("Lexical").HISTORY_PUSH_TAG,
                    ));
              });
            }
          }),
          t.registerCommand(
            require("Lexical").KEY_ENTER_COMMAND,
            function (t) {
              if (null !== t && t.shiftKey) return !1;
              var o = require("Lexical").$getSelection();
              if (!require("Lexical").$isRangeSelection(o) || !o.isCollapsed())
                return !1;
              var i = o.anchor.offset,
                l = o.anchor.getNode();
              if (!require("Lexical").$isTextNode(l) || !me(l)) return !1;
              var c = l.getParent();
              if (null === c || require("LexicalCodeCore").$isCodeNode(c))
                return !1;
              return (
                i === l.getTextContent().length &&
                !(
                  !Le(c, l, i, r.multilineElement, !0) && !Ie(c, l, i, s, !0)
                ) &&
                (null !== t && t.preventDefault(), !0)
              );
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          ),
        );
      }));
  },
  null,
);
