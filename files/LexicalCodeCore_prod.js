__d(
  "LexicalCodeCore.prod",
  [
    "Lexical",
    "LexicalExtensionGetPeerDependencyFromEditor",
    "LexicalExtensionNamedSignals",
    "LexicalExtensionSignals",
    "LexicalHtml",
    "LexicalUtils",
  ],
  function $module_LexicalCodeCore_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _require_Lexical;
    var _require_LexicalHtml;

    function s(e) {
      return function () {};
    }
    function l(e) {
      for (
        var _len = arguments.length,
          t = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        t[_key - 1] = arguments[_key];
      }
      throw function (e) {
        var n = new URL("https://lexical.dev/docs/error"),
          r = new URLSearchParams();
        r.append("code", e);
        for (
          var _len2 = arguments.length,
            t = new Array(_len2 > 1 ? _len2 - 1 : 0),
            _key2 = 1;
          _key2 < _len2;
          _key2++
        ) {
          t[_key2 - 1] = arguments[_key2];
        }
        for (var _e of t) r.append("v", _e);
        return (
          (n.search = r.toString()),
          new Error(
            "Minified Lexical error #" +
              e +
              "; visit " +
              n.toString() +
              " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
          )
        );
      }.apply(void 0, [e].concat(Array.from(t)));
    }
    function a(e, n) {
      var r = e;
      for (
        var _i = require("Lexical").$getSiblingCaret(e, n);
        _i && (K(_i.origin) || require("Lexical").$isTabNode(_i.origin));
        _i = _i.getAdjacentCaret()
      )
        r = _i.origin;
      return r;
    }
    function c(e) {
      return a(e, "previous");
    }
    function u(e) {
      return a(e, "next");
    }
    function g(e) {
      var n = c(e),
        r = u(e);
      var i = n;
      for (; null !== i; ) {
        if (K(i)) {
          var _e2 = require("Lexical").getTextDirection(i.getTextContent());
          if (null !== _e2) return _e2;
        }
        if (i === r) break;
        i = i.getNextSibling();
      }
      var o = n.getParent();
      if (require("Lexical").$isElementNode(o)) {
        var _e3 = o.getDirection();
        if ("ltr" === _e3 || "rtl" === _e3) return _e3;
      }
      return null;
    }
    function d(e, n) {
      var r = null,
        i = null,
        o = e,
        s = n,
        a = e.getTextContent();
      for (;;) {
        if (0 === s) {
          var _e4 = o.getPreviousSibling();
          if (null === _e4) {
            o = null;
            break;
          }
          if (
            (K(_e4) ||
              require("Lexical").$isTabNode(_e4) ||
              require("Lexical").$isLineBreakNode(_e4) ||
              l(167),
            (o = _e4),
            require("Lexical").$isLineBreakNode(o))
          ) {
            r = { node: o, offset: 1 };
            break;
          }
          ((s = Math.max(0, o.getTextContentSize() - 1)),
            (a = o.getTextContent()));
        } else s--;
        var _e5 = a[s];
        K(o) && " " !== _e5 && (i = { node: o, offset: s });
      }
      if (null !== i) return i;
      var c = null;
      if (n < e.getTextContentSize()) K(e) && (c = e.getTextContent()[n]);
      else {
        var _t = e.getNextSibling();
        K(_t) && (c = _t.getTextContent()[0]);
      }
      if (null !== c && " " !== c) return r;
      {
        var _i2 = (function (e, n) {
          var r = e,
            i = n,
            o = e.getTextContent(),
            s = e.getTextContentSize();
          for (;;) {
            if (!K(r) || i === s) {
              if (
                ((r = r.getNextSibling()),
                null === r || require("Lexical").$isLineBreakNode(r))
              )
                return null;
              K(r) &&
                ((i = 0),
                (o = r.getTextContent()),
                (s = r.getTextContentSize()));
            }
            if (K(r)) {
              if (" " !== o[i]) return { node: r, offset: i };
              i++;
            }
          }
        })(e, n);
        return null !== _i2 ? _i2 : r;
      }
    }
    function f(e) {
      var n = u(e);
      return (require("Lexical").$isLineBreakNode(n) && l(168), n);
    }
    function h(e) {
      var n = [];
      return (
        require("Lexical").tokenizeRawText(e, {
          linebreak: function linebreak() {
            return n.push(require("Lexical").$createLineBreakNode());
          },
          tab: function tab() {
            return n.push(require("Lexical").$createTabNode());
          },
          text: function text(e) {
            return n.push(H(e));
          },
        }),
        n
      );
    }
    function _(e, t, n) {
      if (!Number.isInteger(t) || t <= 0) return !1;
      var r = e.getTextContent(),
        i = /^ +/.exec(r);
      if (!i) return !1;
      var o = Math.min(t, i[0].length),
        s = e.getKey(),
        l =
          n.anchor.key === s && "text" === n.anchor.type
            ? n.anchor.offset
            : null,
        a =
          n.focus.key === s && "text" === n.focus.type ? n.focus.offset : null;
      return (
        e.spliceText(0, o, ""),
        null !== l && n.anchor.set(s, Math.max(0, l - o), "text"),
        null !== a && n.focus.set(s, Math.max(0, a - o), "text"),
        !0
      );
    }
    var p = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
    function m(e, t) {
      if ("number" == typeof e) return Number.isFinite(e) ? e : t;
      if ("string" != typeof e || !p.test(e)) return t;
      var n = Number(e);
      return Number.isFinite(n) ? n : t;
    }
    var N = function N(e) {
      var n = require("Lexical").getterTableOf(e, "format"),
        r = require("Lexical").setterTableOf(e, "format"),
        i = require("Lexical").setterDefaultOf(e, "format");
      return {
        exportJSON: function exportJSON(e) {
          var t = e.__textFormat,
            r = e.__textStyle,
            i = (0 !== t || "" !== r) && e.shouldSerializeTextStyles();
          return {
            children: [],
            language: e.__language,
            theme: e.__theme,
            direction: e.__dir,
            format: n[e.__format],
            indent: e.__indent,
            textFormat: 0 !== t && i ? t : void 0,
            textStyle: "" !== r && i ? r : void 0,
            type: e.__type,
            version: 1,
          };
        },
        exportCompactJSON: function exportCompactJSON(e) {
          var t = e.__textFormat,
            r = e.__textStyle,
            i = (0 !== t || "" !== r) && e.shouldSerializeTextStyles(),
            o = { type: e.__type, children: [] },
            s = e.__language;
          void 0 !== s && (o.language = s);
          var l = e.__theme;
          void 0 !== l && (o.theme = l);
          var a = e.__dir;
          null != a && (o.direction = a);
          var c = n[e.__format];
          void 0 !== c && "" !== c && (o.format = c);
          var u = e.__indent;
          return (
            void 0 !== u && 0 !== u && (o.indent = u),
            void 0 !== t && 0 !== t && i && (o.textFormat = t),
            void 0 !== r && "" !== r && i && (o.textStyle = r),
            o
          );
        },
        updateFromJSON: function updateFromJSON(e, t) {
          var n = t.direction;
          e.__dir = null === n || "ltr" === n || "rtl" === n ? n : null;
          var o = t.format;
          ((e.__format = "string" == typeof o && o in r ? r[o] : i),
            (e.__indent = (function (e) {
              var t = m(e, 0);
              return t >= 0 && t <= Infinity && Number.isInteger(t) ? t : 0;
            })(t.indent)),
            (e.__textFormat = m(t.textFormat, 0)));
          var s = t.textStyle;
          e.__textStyle = "string" == typeof s ? s : "";
          var l = t.language;
          e.setLanguage(null == l || "string" == typeof l ? l : "");
          var a = t.theme;
          return (
            e.setTheme(void 0 === a ? void 0 : "string" == typeof a ? a : ""),
            e
          );
        },
      };
    };
    function T(e, t) {
      e.__highlightType = t.__highlightType;
    }
    var x = function x(e) {
        var _require_Lexical;
        var n = (_require_Lexical = require("Lexical")).getterTableOf(
            e,
            "mode",
          ),
          r = _require_Lexical.aliasTableOf(e, "detail", 0),
          i = _require_Lexical.aliasTableOf(e, "format", 0),
          o = _require_Lexical.setterTableOf(e, "mode"),
          s = _require_Lexical.setterDefaultOf(e, "mode");
        return {
          exportJSON: function exportJSON(e) {
            return {
              highlightType: e.__highlightType,
              detail: e.__detail,
              format: e.__format,
              mode: n[e.__mode],
              style: e.__style,
              text: e.__text,
              type: e.__type,
              version: 1,
            };
          },
          exportCompactJSON: function exportCompactJSON(e) {
            var t = { type: e.__type },
              r = e.__highlightType;
            void 0 !== r && (t.highlightType = r);
            var i = e.__detail;
            void 0 !== i && 0 !== i && (t.detail = i);
            var o = e.__format;
            void 0 !== o && 0 !== o && (t.format = o);
            var s = n[e.__mode];
            void 0 !== s && "normal" !== s && (t.mode = s);
            var l = e.__style;
            void 0 !== l && "" !== l && (t.style = l);
            var a = e.__text;
            return (void 0 !== a && "" !== a && (t.text = a), t);
          },
          updateFromJSON: function updateFromJSON(e, t) {
            var n = t.detail;
            e.__detail = "string" == typeof n && n in r ? r[n] : m(n, 0);
            var l = t.format;
            e.setFormat("string" == typeof l && l in i ? i[l] : m(l, 0));
            var a = t.mode;
            e.__mode = "string" == typeof a && a in o ? o[a] : s;
            var c = t.style;
            e.__style = "string" == typeof c ? c : "";
            var u = t.text;
            e.__text = "string" == typeof u ? u : "";
            var g = t.highlightType;
            return (
              e.setHighlightType(null == g || "string" == typeof g ? g : ""),
              e
            );
          },
          afterCloneFrom: T,
        };
      },
      C = (_require_Lexical = require("Lexical")).nodeSchema()({
        language: _require_Lexical.withAccessors(
          _require_Lexical.optional(
            _require_Lexical.nullable(_require_Lexical.stringValue()),
          ),
          { getter: { field: "__language" } },
        ),
        theme: _require_Lexical.withAccessors(
          _require_Lexical.optional(_require_Lexical.stringValue()),
          { getter: { field: "__theme" } },
        ),
      }),
      O = "javascript";
    function y(e, n) {
      for (var _r of e.childNodes) {
        if (require("Lexical").isHTMLElement(_r) && _r.tagName === n) return !0;
        if (y(_r, n)) return !0;
      }
      return !1;
    }
    var S = "data-language",
      b = "data-highlight-language",
      $ = "data-theme",
      M = s();
    var _A = (function (_t$ElementNode) {
      function A(e, t) {
        var _this;
        if (e === void 0) {
          e = void 0;
        }
        ((_this = _t$ElementNode.call(this, t) || this),
          (_this.__language = e || void 0),
          (_this.__isSyntaxHighlightSupported = !1),
          (_this.__theme = void 0));
        return _this;
      }
      babelHelpers.inheritsLoose(A, _t$ElementNode);
      var _proto = A.prototype;
      _proto.$config = function $config() {
        return this.config("code", {
          children: "inline",
          extends: require("Lexical").ElementNode,
          generated: N,
          importDOM: {
            code: function code(e) {
              return null != e.textContent &&
                (/\r?\n/.test(e.textContent) || y(e, "BR"))
                ? { conversion: v, priority: 1 }
                : null;
            },
            div: function div() {
              return { conversion: R, priority: 1 };
            },
            pre: function pre() {
              return { conversion: v, priority: 0 };
            },
            table: function table(e) {
              return B(e) ? { conversion: L, priority: 3 } : null;
            },
            td: function td(e) {
              var t = e,
                n = t.closest("table");
              return t.classList.contains("js-file-line") || (n && B(n))
                ? { conversion: I, priority: 3 }
                : null;
            },
            tr: function tr(e) {
              var t = e.closest("table");
              return t && B(t) ? { conversion: I, priority: 3 } : null;
            },
          },
          json: C,
        });
      };
      _proto.afterCloneFrom = function afterCloneFrom(e) {
        (_t$ElementNode.prototype.afterCloneFrom.call(this, e),
          (function (e, t) {
            ((e.__language = t.__language), (e.__theme = t.__theme));
          })(this, e),
          (this.__isSyntaxHighlightSupported = e.__isSyntaxHighlightSupported));
      };
      _proto.createDOM = function createDOM(e) {
        var n = require("Lexical").$getDocument().createElement("code");
        (require("Lexical").addClassNamesToElement(n, e.theme.code),
          n.setAttribute("spellcheck", "false"));
        var r = this.getLanguage();
        r &&
          (n.setAttribute(S, r),
          this.getIsSyntaxHighlightSupported() && n.setAttribute(b, r));
        var i = this.getTheme();
        i && n.setAttribute($, i);
        var o = this.getStyle();
        return (o && require("Lexical").setDOMStyleFromCSS(n.style, o), n);
      };
      _proto.updateDOM = function updateDOM(e, n, r) {
        var i = this.__language,
          o = e.__language;
        i ? i !== o && n.setAttribute(S, i) : o && n.removeAttribute(S);
        var s = this.__isSyntaxHighlightSupported;
        e.__isSyntaxHighlightSupported && o
          ? s && i
            ? i !== o && n.setAttribute(b, i)
            : n.removeAttribute(b)
          : s && i && n.setAttribute(b, i);
        var l = this.__theme,
          a = e.__theme;
        l ? l !== a && n.setAttribute($, l) : a && n.removeAttribute($);
        var c = this.__style,
          u = e.__style;
        return (
          c !== u && require("Lexical").setDOMStyleFromCSS(n.style, c, u),
          !1
        );
      };
      _proto.exportDOM = function exportDOM(e) {
        var n = require("Lexical").$getDocument().createElement("pre");
        (require("Lexical").addClassNamesToElement(n, e._config.theme.code),
          n.setAttribute("spellcheck", "false"));
        var r = this.getLanguage();
        r &&
          (n.setAttribute(S, r),
          this.getIsSyntaxHighlightSupported() && n.setAttribute(b, r));
        var i = this.getTheme();
        i && n.setAttribute($, i);
        var o = this.getStyle();
        return (
          o && require("Lexical").setDOMStyleFromCSS(n.style, o),
          { element: n }
        );
      };
      _proto.insertNewAfter = function insertNewAfter(e, r) {
        if (r === void 0) {
          r = !0;
        }
        if (
          !require("LexicalExtensionGetPeerDependencyFromEditor").getPeerDependencyFromEditor(
            require("Lexical").$getEditor(),
            "LexicalCode",
          )
        ) {
          M();
          var _t2 = k(e);
          if (_t2) return _t2;
        }
        var i = e.anchor,
          o = e.focus,
          s = (i.isBefore(o) ? i : o).getNode();
        if (require("Lexical").$isTextNode(s)) {
          var _e6 = c(s);
          var _n = [];
          for (;;)
            if (require("Lexical").$isTabNode(_e6))
              (_n.push(require("Lexical").$createTabNode()),
                (_e6 = _e6.getNextSibling()));
            else {
              if (!K(_e6)) break;
              {
                var _t3 = 0;
                var _r2 = _e6.getTextContent(),
                  _i3 = _e6.getTextContentSize();
                for (; _t3 < _i3 && " " === _r2[_t3]; ) _t3++;
                if ((0 !== _t3 && _n.push(H(" ".repeat(_t3))), _t3 !== _i3))
                  break;
                _e6 = _e6.getNextSibling();
              }
            }
          var _r3 = s.splitText(i.offset)[0],
            _o = 0 === i.offset ? 0 : 1,
            _l = _r3.getIndexWithinParent() + _o,
            _a = s.getParentOrThrow(),
            _u = [require("Lexical").$createLineBreakNode()].concat(
              Array.from(_n),
            );
          _a.splice(_l, 0, _u);
          var _g = _n[_n.length - 1];
          _g
            ? _g.select()
            : 0 === i.offset
              ? _r3.selectPrevious()
              : _r3.getNextSibling().selectNext(0, 0);
        }
        if (D(s)) {
          var _n2 = e.anchor.offset;
          (s.splice(_n2, 0, [require("Lexical").$createLineBreakNode()]),
            s.select(_n2 + 1, _n2 + 1));
        }
        return null;
      };
      _proto.canIndent = function canIndent() {
        return !1;
      };
      _proto.collapseAtStart = function collapseAtStart() {
        var e = require("Lexical").$createParagraphNode();
        return (
          this.getChildren().forEach(function (t) {
            return e.append(t);
          }),
          this.replace(e),
          !0
        );
      };
      _proto.setLanguage = function setLanguage(e) {
        var t = this.getWritable();
        return ((t.__language = e || void 0), t);
      };
      _proto.getLanguage = function getLanguage() {
        return this.getLatest().__language;
      };
      _proto.setIsSyntaxHighlightSupported =
        function setIsSyntaxHighlightSupported(e) {
          var t = this.getWritable();
          return ((t.__isSyntaxHighlightSupported = e), t);
        };
      _proto.getIsSyntaxHighlightSupported =
        function getIsSyntaxHighlightSupported() {
          return this.getLatest().__isSyntaxHighlightSupported;
        };
      _proto.setTheme = function setTheme(e) {
        var t = this.getWritable();
        return ((t.__theme = e || void 0), t);
      };
      _proto.getTheme = function getTheme() {
        return this.getLatest().__theme;
      };
      return A;
    })(_require_Lexical.ElementNode);
    function E(e, n) {
      return require("Lexical").$create(_A).setLanguage(e).setTheme(n);
    }
    function D(e) {
      return e instanceof _A;
    }
    function v(e) {
      return { node: E(e.getAttribute(S), e.getAttribute($)) };
    }
    function R(e) {
      var t = e,
        n = P(t);
      return n ||
        (function (e) {
          var t = e.parentElement;
          for (; null !== t; ) {
            if (P(t)) return !0;
            t = t.parentElement;
          }
          return !1;
        })(t)
        ? { node: n ? E() : null }
        : { node: null };
    }
    function L() {
      return { node: E() };
    }
    function I() {
      return { node: null };
    }
    function P(e) {
      return null !== e.style.fontFamily.match("monospace");
    }
    function B(e) {
      return e.classList.contains("js-file-line-container");
    }
    function k(e) {
      var n = e.anchor;
      if (e.isCollapsed() && "element" === n.type) {
        var _e7 = n.getNode();
        if (D(_e7)) {
          var _r4 = _e7.getChildrenSize();
          if (_r4 >= 2 && n.offset === _r4) {
            var _n3 = _e7.getLastChild();
            if (
              require("Lexical").$isLineBreakNode(_n3) &&
              require("Lexical").$isLineBreakNode(_n3.getPreviousSibling())
            ) {
              var _n4 = require("Lexical").$createParagraphNode();
              return (
                _e7.splice(_r4 - 2, 2, []).insertAfter(_n4, !1),
                _n4.select(),
                _n4
              );
            }
          }
        }
      }
      return null;
    }
    var W = _require_Lexical.nodeSchema()({
      highlightType: _require_Lexical.withAccessors(
        _require_Lexical.optional(
          _require_Lexical.nullable(_require_Lexical.stringValue()),
        ),
        { getter: { field: "__highlightType" } },
      ),
    });
    var _F = (function (_t$TextNode) {
      function F(e, t, n) {
        var _this2;
        if (e === void 0) {
          e = "";
        }
        ((_this2 = _t$TextNode.call(this, e, n) || this),
          (_this2.__highlightType = t));
        return _this2;
      }
      babelHelpers.inheritsLoose(F, _t$TextNode);
      var _proto2 = F.prototype;
      _proto2.$config = function $config() {
        return this.config("code-highlight", {
          extends: require("Lexical").TextNode,
          generated: x,
          json: W,
        });
      };
      _proto2.getHighlightType = function getHighlightType() {
        return this.getLatest().__highlightType;
      };
      _proto2.setHighlightType = function setHighlightType(e) {
        var t = this.getWritable();
        return ((t.__highlightType = e || void 0), t);
      };
      _proto2.canHaveFormat = function canHaveFormat() {
        return !1;
      };
      _proto2.createDOM = function createDOM(e) {
        var n = _t$TextNode.prototype.createDOM.call(this, e),
          r = w(e.theme, this.__highlightType);
        return (require("Lexical").addClassNamesToElement(n, r), n);
      };
      _proto2.updateDOM = function updateDOM(e, n, r) {
        var i = _t$TextNode.prototype.updateDOM.call(this, e, n, r),
          o = w(r.theme, e.__highlightType),
          s = w(r.theme, this.__highlightType);
        return (
          o !== s &&
            (o && require("Lexical").removeClassNamesFromElement(n, o),
            s && require("Lexical").addClassNamesToElement(n, s)),
          i
        );
      };
      _proto2.setFormat = function setFormat(e) {
        return this;
      };
      _proto2.isParentRequired = function isParentRequired() {
        return !0;
      };
      _proto2.createParentElementNode = function createParentElementNode() {
        return E();
      };
      return F;
    })(_require_Lexical.TextNode);
    function w(e, t) {
      return t && e && e.codeHighlight && e.codeHighlight[t];
    }
    function H(e, n) {
      if (e === void 0) {
        e = "";
      }
      return require("Lexical").$applyNodeReplacement(new _F(e, n));
    }
    function K(e) {
      return e instanceof _F;
    }
    var Y = "data-language",
      z = "data-theme";
    function U(t) {
      var n = [];
      var r = !1;
      for (var _i4 = 0; _i4 < t.length; _i4++) {
        var _o2 = t[_i4],
          _s = require("LexicalHtml").$isBlockLevel(_o2);
        (_i4 > 0 && (_s || r) && n.push("\n"),
          n.push(_o2.getTextContent()),
          (r = _s));
      }
      return h(n.join(""));
    }
    function j(e) {
      return null !== e.style.fontFamily.match("monospace");
    }
    function V(e) {
      var t = e.parentElement;
      for (; null !== t; ) {
        if (j(t)) return !0;
        t = t.parentElement;
      }
      return !1;
    }
    var q = (_require_LexicalHtml = require("LexicalHtml")).defineOverlayRules([
        {
          $import: function $import(e, t) {
            return e.$importChildren(t);
          },
          match: _require_LexicalHtml.sel.tag("tr", "td"),
          name: "@lexical/code/github-code-table/unwrap",
        },
      ]),
      J = {
        $import: function $import(e, t) {
          return [
            E(t.getAttribute(Y), t.getAttribute(z)).splice(
              0,
              0,
              U(e.$importChildren(t)),
            ),
          ];
        },
        match: _require_LexicalHtml.sel.tag("pre"),
        name: "@lexical/code/pre",
      },
      G = {
        $import: function $import(e, t, n) {
          var r = t.textContent || "";
          return /\r?\n/.test(r) || null !== t.querySelector("br")
            ? [
                E(t.getAttribute(Y), t.getAttribute(z)).splice(
                  0,
                  0,
                  U(e.$importChildren(t)),
                ),
              ]
            : n();
        },
        match: _require_LexicalHtml.sel.tag("code"),
        name: "@lexical/code/code-multiline",
      };
    function Q(e) {
      if (!require("Lexical").isHTMLElement(e)) return !1;
      var n = e.style.fontFamily,
        r = e.style.whiteSpace;
      return (
        "string" == typeof n &&
        /monospace/i.test(n) &&
        "string" == typeof r &&
        r.startsWith("pre")
      );
    }
    function X(e) {
      var n = !1;
      var r = [];
      var i = "",
        o = !1;
      var s = function s() {
        o && (r.push(i), (i = ""), (o = !1));
      };
      for (var _l2 of Array.from(e.childNodes))
        if (require("Lexical").isHTMLElement(_l2))
          "DIV" === _l2.tagName
            ? (s(), r.push(_l2.textContent || ""), (n = !0))
            : "BR" === _l2.tagName
              ? (s(), r.push(""), (n = !0))
              : ((i += _l2.textContent || ""), (o = !0));
        else if (require("Lexical").isDOMTextNode(_l2)) {
          var _e8 = _l2.textContent || "";
          _e8.length > 0 && ((i += _e8), (o = !0));
        }
      return (s(), n ? r : null);
    }
    function Z(e) {
      for (var _n5 of Array.from(e.children)) {
        if (require("Lexical").isHTMLElement(_n5) && Q(_n5)) {
          if (null !== X(_n5)) return !0;
          var _e9 = _n5.nextElementSibling;
          if (_e9 && Q(_e9)) return !0;
          continue;
        }
        if (Z(_n5)) return !0;
      }
      return !1;
    }
    var ee = {
        $import: function $import(e, t, n) {
          if (!Q(t) || V(t)) return n();
          var r = X(t);
          return null === r || 0 === r.length
            ? n()
            : [E().splice(0, 0, h(r.join("\n")))];
        },
        match: _require_LexicalHtml.sel.tag("div"),
        name: "@lexical/code/vscode-wrapper",
      },
      te = {
        $import: function $import(e, t, n) {
          if (!Q(t) || V(t)) return n();
          var r = t.previousElementSibling;
          if (r && Q(r)) return [];
          var i = [];
          var o = t;
          for (; o && Q(o); )
            (i.push("BR" === o.tagName ? "" : o.textContent || ""),
              (o = o.nextElementSibling));
          return i.length < 2 ? n() : [E().splice(0, 0, h(i.join("\n")))];
        },
        match: _require_LexicalHtml.sel.tag("div", "br"),
        name: "@lexical/code/vscode-line-run",
      },
      ne = _require_LexicalHtml.defineOverlayRules([ee, te]),
      re = {
        $import: function $import(e, t, n) {
          return j(t) ? [E().splice(0, 0, U(e.$importChildren(t)))] : n();
        },
        match: _require_LexicalHtml.sel.tag("div"),
        name: "@lexical/code/div",
      },
      ie = [
        {
          $import: function $import(e, t) {
            return [E().splice(0, 0, U(e.$importChildren(t, { rules: q })))];
          },
          match: _require_LexicalHtml.sel
            .tag("table")
            .classAll("js-file-line-container"),
          name: "@lexical/code/github-code-table",
        },
        {
          $import: function $import(e, t) {
            return e.$importChildren(t);
          },
          match: _require_LexicalHtml.sel.tag("td").classAll("js-file-line"),
          name: "@lexical/code/github-code-cell-by-class",
        },
        G,
        J,
        re,
      ],
      oe = {
        dependencies: [
          _require_LexicalHtml.CoreImportExtension,
          [
            _require_LexicalHtml.DOMImportExtension,
            {
              preprocess: [
                function (n, r, i) {
                  (Z(require("Lexical").isDOMDocumentNode(n) ? n.body : n) &&
                    r.session.update(
                      require("LexicalHtml").ImportOverlays,
                      function (e) {
                        return [].concat(Array.from(e), [ne]);
                      },
                    ),
                    i());
                },
              ],
              rules: ie,
            },
          ],
        ],
        name: "LexicalCode",
        nodes: function nodes() {
          return [_A, _F];
        },
        register: function register(e) {
          var _require_Lexical;
          return (_require_Lexical = require("Lexical")).mergeRegister(
            e.registerCommand(
              _require_Lexical.KEY_ENTER_COMMAND,
              function (e) {
                var n = require("Lexical").$getSelection();
                return !(
                  !require("Lexical").$isRangeSelection(n) ||
                  !k(n) ||
                  (null !== e && e.preventDefault(), 0)
                );
              },
              _require_Lexical.COMMAND_PRIORITY_LOW,
            ),
            e.registerNodeTransform(_require_Lexical.TabNode, function (e) {
              0 !== e.getFormat() && D(e.getParent()) && e.setFormat(0);
            }),
          );
        },
      };
    function se(e) {
      var n = require("Lexical").$getEditor().getElementByKey(e.getKey());
      if (null === n) return;
      var r = e.getChildren(),
        i = r.length;
      if (i === n.__cachedChildrenLength) return;
      n.__cachedChildrenLength = i;
      var o = "1",
        s = 1;
      for (var _e0 = 0; _e0 < i; _e0++)
        require("Lexical").$isLineBreakNode(r[_e0]) && (o += "\n" + ++s);
      n.setAttribute("data-gutter", o);
    }
    function le(e) {
      if (!require("Lexical").$isRangeSelection(e)) return !1;
      var n = e.anchor.getNode(),
        r = D(n) ? n : n.getParent(),
        i = e.focus.getNode(),
        o = D(i) ? i : i.getParent();
      return D(r) && r.is(o);
    }
    function ae(e) {
      var n = e.getNodes(),
        r = [];
      if (1 === n.length && D(n[0])) return r;
      var i = [];
      for (var _e1 = 0; _e1 < n.length; _e1++) {
        var _o3 = n[_e1];
        (K(_o3) ||
          require("Lexical").$isTabNode(_o3) ||
          require("Lexical").$isLineBreakNode(_o3) ||
          l(169),
          require("Lexical").$isLineBreakNode(_o3)
            ? i.length > 0 && (r.push(i), (i = []))
            : i.push(_o3));
      }
      if (i.length > 0) {
        var _n6 = e.isBackward() ? e.anchor : e.focus,
          _o4 = require("Lexical").$createPoint(i[0].getKey(), 0, "text");
        _n6.is(_o4) || r.push(i);
      }
      return r;
    }
    function ce(e, n) {
      var r = require("Lexical").$getSelection();
      if (!require("Lexical").$isRangeSelection(r) || !le(r)) return !1;
      var i = ae(r),
        o = i.length;
      if (0 === o && r.isCollapsed())
        return (
          e === require("Lexical").INDENT_CONTENT_COMMAND
            ? r.insertNodes([require("Lexical").$createTabNode()])
            : (function (e, n) {
                var r = e.anchor.getNode();
                if (!K(r) && !require("Lexical").$isTabNode(r)) return;
                var i = c(r);
                require("Lexical").$isTabNode(i)
                  ? i.remove()
                  : void 0 !== n && K(i) && _(i, n, e);
              })(r, n),
          !0
        );
      if (
        0 === o &&
        e === require("Lexical").INDENT_CONTENT_COMMAND &&
        "\n" === r.getTextContent()
      ) {
        var _e10 = require("Lexical").$createTabNode(),
          _n7 = require("Lexical").$createLineBreakNode(),
          _i5 = r.isBackward() ? "previous" : "next";
        return (
          r.insertNodes([_e10, _n7]),
          require("Lexical").$setSelectionFromCaretRange(
            require("Lexical").$getCaretRangeInDirection(
              require("Lexical").$getCaretRange(
                require("Lexical").$getTextPointCaret(_e10, "next", 0),
                require("Lexical").$normalizeCaret(
                  require("Lexical").$getSiblingCaret(_n7, "next"),
                ),
              ),
              _i5,
            ),
          ),
          !0
        );
      }
      for (var _s2 = 0; _s2 < o; _s2++) {
        var _o5 = i[_s2];
        if (_o5.length > 0) {
          var _i6 = _o5[0];
          if (
            (0 === _s2 && (_i6 = c(_i6)),
            e === require("Lexical").INDENT_CONTENT_COMMAND)
          ) {
            var _e11 = require("Lexical").$createTabNode();
            if ((_i6.insertBefore(_e11), 0 === _s2)) {
              var _n8 = r.isBackward() ? "focus" : "anchor",
                _o6 = require("Lexical").$createPoint(_i6.getKey(), 0, "text");
              r[_n8].is(_o6) && r[_n8].set(_e11.getKey(), 0, "text");
            }
          } else
            require("Lexical").$isTabNode(_i6)
              ? _i6.remove()
              : void 0 !== n && K(_i6) && _(_i6, n, r);
        }
      }
      return !0;
    }
    function ue(e, n) {
      var r = require("Lexical").$getSelection();
      if (!require("Lexical").$isRangeSelection(r)) return !1;
      var i = r.anchor,
        o = r.focus,
        s = i.offset,
        l = o.offset,
        a = i.getNode(),
        g = o.getNode(),
        d = e === require("Lexical").KEY_ARROW_UP_COMMAND;
      if (
        !le(r) ||
        (!K(a) && !require("Lexical").$isTabNode(a)) ||
        (!K(g) && !require("Lexical").$isTabNode(g))
      )
        return !1;
      if (!n.altKey) {
        if (r.isCollapsed()) {
          var _e12 = a.getParentOrThrow();
          if (d && 0 === s && null === a.getPreviousSibling()) {
            if (null === _e12.getPreviousSibling())
              return (_e12.selectPrevious(), n.preventDefault(), !1);
          } else if (
            !d &&
            s === a.getTextContentSize() &&
            null === a.getNextSibling() &&
            null === _e12.getNextSibling()
          )
            return (_e12.selectNext(), n.preventDefault(), !1);
        }
        return !1;
      }
      var f, h;
      if (
        (a.isBefore(g) ? ((f = c(a)), (h = u(g))) : ((f = c(g)), (h = u(a))),
        null == f || null == h)
      )
        return !1;
      var _ = f.getNodesBetween(h);
      for (var _e13 = 0; _e13 < _.length; _e13++) {
        var _n9 = _[_e13];
        if (
          !K(_n9) &&
          !require("Lexical").$isTabNode(_n9) &&
          !require("Lexical").$isLineBreakNode(_n9)
        )
          return !1;
      }
      (n.preventDefault(), n.stopPropagation());
      var p = d ? f.getPreviousSibling() : h.getNextSibling();
      if (!require("Lexical").$isLineBreakNode(p)) return !0;
      var m = d ? p.getPreviousSibling() : p.getNextSibling();
      if (null == m) return !0;
      var N = require("Lexical").$isLineBreakNode(m),
        T =
          N || (!K(m) && !require("Lexical").$isTabNode(m))
            ? null
            : d
              ? c(m)
              : u(m);
      var x = null != T ? T : m;
      return (
        p.remove(),
        _.forEach(function (e) {
          return e.remove();
        }),
        N
          ? (_.forEach(function (e) {
              (x.insertAfter(e), (x = e));
            }),
            x.insertAfter(p))
          : e === require("Lexical").KEY_ARROW_UP_COMMAND
            ? (_.forEach(function (e) {
                return x.insertBefore(e);
              }),
              x.insertBefore(p))
            : (x.insertAfter(p),
              (x = p),
              _.forEach(function (e) {
                (x.insertAfter(e), (x = e));
              })),
        r.setTextNodeRange(a, s, g, l),
        !0
      );
    }
    function ge(e, n) {
      var r = require("Lexical").$getSelection();
      if (!require("Lexical").$isRangeSelection(r)) return !1;
      var i = r.anchor,
        o = r.focus,
        s = i.getNode(),
        l = o.getNode(),
        a = e === require("Lexical").MOVE_TO_START;
      if (
        !le(r) ||
        (!K(s) && !require("Lexical").$isTabNode(s)) ||
        (!K(l) && !require("Lexical").$isTabNode(l))
      )
        return !1;
      var c = l,
        u = "rtl" === g(c) ? !a : a,
        h = i.key,
        _ = i.offset,
        p = i.type;
      if (u) {
        var _e14 = d(c, o.offset);
        if (null !== _e14) {
          var _n0 = _e14.node,
            _i7 = _e14.offset;
          require("Lexical").$isLineBreakNode(_n0)
            ? _n0.selectNext(0, 0)
            : r.setTextNodeRange(_n0, _i7, _n0, _i7);
        } else c.getParentOrThrow().selectStart();
      } else f(c).select();
      return (
        n.shiftKey && r.anchor.set(h, _, p),
        n.preventDefault(),
        n.stopPropagation(),
        !0
      );
    }
    function de(e, n, r) {
      return require("Lexical").mergeRegister.apply(
        require("Lexical"),
        Array.from(
          r
            ? [
                e.registerCommand(
                  require("Lexical").KEY_ARROW_DOWN_COMMAND,
                  function (e) {
                    return (
                      !e.altKey && require("LexicalUtils").$onEscapeDown(D, e)
                    );
                  },
                  require("Lexical").COMMAND_PRIORITY_LOW,
                ),
                e.registerCommand(
                  require("Lexical").KEY_ARROW_RIGHT_COMMAND,
                  function (e) {
                    return require("LexicalUtils").$onEscapeDown(D, e);
                  },
                  require("Lexical").COMMAND_PRIORITY_LOW,
                ),
                e.registerCommand(
                  require("Lexical").KEY_ARROW_UP_COMMAND,
                  function (e) {
                    return (
                      !e.altKey && require("LexicalUtils").$onEscapeUp(D, e)
                    );
                  },
                  require("Lexical").COMMAND_PRIORITY_LOW,
                ),
                e.registerCommand(
                  require("Lexical").KEY_ARROW_LEFT_COMMAND,
                  function (e) {
                    return require("LexicalUtils").$onEscapeUp(D, e);
                  },
                  require("Lexical").COMMAND_PRIORITY_LOW,
                ),
              ]
            : [],
        ).concat([
          e.registerCommand(
            require("Lexical").KEY_TAB_COMMAND,
            function (n) {
              var r = (function (e) {
                var n = require("Lexical").$getSelection();
                if (!require("Lexical").$isRangeSelection(n) || !le(n))
                  return null;
                var r = e
                    ? require("Lexical").OUTDENT_CONTENT_COMMAND
                    : require("Lexical").INDENT_CONTENT_COMMAND,
                  i = e
                    ? require("Lexical").OUTDENT_CONTENT_COMMAND
                    : require("Lexical").INSERT_TAB_COMMAND,
                  o = n.anchor,
                  s = n.focus;
                if (o.is(s)) return i;
                var a = ae(n);
                if (1 !== a.length) return r;
                var g = a[0];
                var d, f;
                (0 === g.length && l(285),
                  n.isBackward() ? ((d = s), (f = o)) : ((d = o), (f = s)));
                var h = c(g[0]),
                  _ = u(g[0]),
                  p = require("Lexical").$createPoint(h.getKey(), 0, "text"),
                  m = require("Lexical").$createPoint(
                    _.getKey(),
                    _.getTextContentSize(),
                    "text",
                  );
                return d.isBefore(p) || m.isBefore(f)
                  ? r
                  : p.isBefore(d) || f.isBefore(m)
                    ? i
                    : r;
              })(n.shiftKey);
              return (
                null !== r && (n.preventDefault(), e.dispatchCommand(r), !0)
              );
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          ),
          e.registerCommand(
            require("Lexical").INSERT_TAB_COMMAND,
            function () {
              return (
                !!le(require("Lexical").$getSelection()) &&
                (require("Lexical").$insertNodes([
                  require("Lexical").$createTabNode(),
                ]),
                !0)
              );
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          ),
          e.registerCommand(
            require("Lexical").INDENT_CONTENT_COMMAND,
            function () {
              return ce(require("Lexical").INDENT_CONTENT_COMMAND);
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          ),
          e.registerCommand(
            require("Lexical").OUTDENT_CONTENT_COMMAND,
            function () {
              return ce(require("Lexical").OUTDENT_CONTENT_COMMAND, n);
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          ),
          e.registerCommand(
            require("Lexical").KEY_ARROW_UP_COMMAND,
            function (e) {
              var n = require("Lexical").$getSelection();
              if (!require("Lexical").$isRangeSelection(n)) return !1;
              var r = n.anchor,
                i = r.getNode();
              if (!le(n)) return !1;
              var o = i.getParent();
              return n.isCollapsed() &&
                0 === r.offset &&
                null === i.getPreviousSibling() &&
                D(o) &&
                null === o.getPreviousSibling()
                ? (e.preventDefault(), !0)
                : ue(require("Lexical").KEY_ARROW_UP_COMMAND, e);
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          ),
          e.registerCommand(
            require("Lexical").KEY_ARROW_DOWN_COMMAND,
            function (e) {
              var n = require("Lexical").$getSelection();
              if (!require("Lexical").$isRangeSelection(n)) return !1;
              var r = n.anchor,
                i = r.getNode();
              return (
                !!le(n) &&
                (n.isCollapsed() &&
                r.offset === i.getTextContentSize() &&
                null === i.getNextSibling() &&
                D(i.getParentOrThrow()) &&
                null === i.getParentOrThrow().getNextSibling()
                  ? (e.preventDefault(), !0)
                  : ue(require("Lexical").KEY_ARROW_DOWN_COMMAND, e))
              );
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          ),
          e.registerCommand(
            require("Lexical").MOVE_TO_START,
            function (e) {
              return ge(require("Lexical").MOVE_TO_START, e);
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          ),
          e.registerCommand(
            require("Lexical").MOVE_TO_END,
            function (e) {
              return ge(require("Lexical").MOVE_TO_END, e);
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          ),
        ]),
      );
    }
    var fe = {
      build: function build(e, t) {
        return require("LexicalExtensionNamedSignals").namedSignals(t);
      },
      config: { disabled: !1, escapeWithArrows: !1, tabSize: void 0 },
      dependencies: [oe],
      name: "@lexical/code-indent",
      register: function register(e, t, n) {
        var i = n.getOutput();
        return require("LexicalExtensionSignals").effect(function () {
          if (!i.disabled.value)
            return de(e, i.tabSize.value, i.escapeWithArrows.value);
        });
      },
    };
    ((exports.$createCodeHighlightNode = H),
      (exports.$createCodeNode = E),
      (exports.$getCodeLineDirection = g),
      (exports.$getEndOfCodeInLine = f),
      (exports.$getFirstCodeNodeOfLine = c),
      (exports.$getLastCodeNodeOfLine = u),
      (exports.$getStartOfCodeInLine = d),
      (exports.$isCodeHighlightNode = K),
      (exports.$isCodeNode = D),
      (exports.$outdentLeadingSpaces = _),
      (exports.$plainifyCodeContent = h),
      (exports.CodeExtension = oe),
      (exports.CodeHighlightNode = _F),
      (exports.CodeImportRules = ie),
      (exports.CodeIndentExtension = fe),
      (exports.CodeNode = _A),
      (exports.DEFAULT_CODE_LANGUAGE = O),
      (exports.getDefaultCodeLanguage = function () {
        return O;
      }),
      (exports.registerCodeGutter = function (e) {
        return e._headless
          ? function () {}
          : e.registerMutationListener(
              _A,
              function (n) {
                e.read("latest", function () {
                  for (var _ref2 of n) {
                    var _e15 = _ref2[0];
                    var _r5 = _ref2[1];
                    if ("destroyed" !== _r5) {
                      var _n1 = require("Lexical").$getNodeByKey(_e15);
                      null !== _n1 && se(_n1);
                    }
                  }
                });
              },
              { skipInitialization: !1 },
            );
      }),
      (exports.registerCodeIndentation = de));
  },
  null,
);
