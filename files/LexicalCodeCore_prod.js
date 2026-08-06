__d(
  "LexicalCodeCore.prod",
  ["Lexical", "LexicalExtension", "LexicalHtml", "LexicalUtils"],
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
    function i(e) {
      var n = new URL("https://lexical.dev/docs/error"),
        r = new URLSearchParams();
      r.append("code", e);
      for (
        var _len = arguments.length,
          t = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        t[_key - 1] = arguments[_key];
      }
      for (var _e of t) r.append("v", _e);
      throw (
        (n.search = r.toString()),
        Error(
          "Minified Lexical error #" +
            e +
            "; visit " +
            n.toString() +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
        )
      );
    }
    function o(e, n) {
      var r = e;
      for (
        var _i = require("Lexical").$getSiblingCaret(e, n);
        _i && (y(_i.origin) || require("Lexical").$isTabNode(_i.origin));
        _i = _i.getAdjacentCaret()
      )
        r = _i.origin;
      return r;
    }
    function s(e) {
      return o(e, "previous");
    }
    function l(e) {
      return o(e, "next");
    }
    function a(e) {
      var n = s(e),
        r = l(e);
      var i = n;
      for (; null !== i; ) {
        if (y(i)) {
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
    function c(e, n) {
      var r = null,
        o = null,
        s = e,
        l = n,
        a = e.getTextContent();
      for (;;) {
        if (0 === l) {
          var _e4 = s.getPreviousSibling();
          if (null === _e4) {
            s = null;
            break;
          }
          if (
            (y(_e4) ||
              require("Lexical").$isTabNode(_e4) ||
              require("Lexical").$isLineBreakNode(_e4) ||
              i(167),
            (s = _e4),
            require("Lexical").$isLineBreakNode(s))
          ) {
            r = { node: s, offset: 1 };
            break;
          }
          ((l = Math.max(0, s.getTextContentSize() - 1)),
            (a = s.getTextContent()));
        } else l--;
        var _e5 = a[l];
        y(s) && " " !== _e5 && (o = { node: s, offset: l });
      }
      if (null !== o) return o;
      var c = null;
      if (n < e.getTextContentSize()) y(e) && (c = e.getTextContent()[n]);
      else {
        var _t = e.getNextSibling();
        y(_t) && (c = _t.getTextContent()[0]);
      }
      if (null !== c && " " !== c) return r;
      {
        var _i2 = (function (e, n) {
          var r = e,
            i = n,
            o = e.getTextContent(),
            s = e.getTextContentSize();
          for (;;) {
            if (!y(r) || i === s) {
              if (
                ((r = r.getNextSibling()),
                null === r || require("Lexical").$isLineBreakNode(r))
              )
                return null;
              y(r) &&
                ((i = 0),
                (o = r.getTextContent()),
                (s = r.getTextContentSize()));
            }
            if (y(r)) {
              if (" " !== o[i]) return { node: r, offset: i };
              i++;
            }
          }
        })(e, n);
        return null !== _i2 ? _i2 : r;
      }
    }
    function u(e) {
      var n = l(e);
      return (require("Lexical").$isLineBreakNode(n) && i(168), n);
    }
    function g(e, t, n) {
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
    var d = "javascript";
    function f(e, n) {
      for (var _r of e.childNodes) {
        if (require("Lexical").isHTMLElement(_r) && _r.tagName === n) return !0;
        if (f(_r, n)) return !0;
      }
      return !1;
    }
    var h = "data-language",
      p = "data-highlight-language",
      N = "data-theme",
      m = function m() {};
    var _2 = (function (_t$ElementNode) {
      function _(e, t) {
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
      babelHelpers.inheritsLoose(_, _t$ElementNode);
      var _proto = _.prototype;
      _proto.$config = function $config() {
        return this.config("code", {
          extends: require("Lexical").ElementNode,
          importDOM: {
            code: function code(e) {
              return null != e.textContent &&
                (/\r?\n/.test(e.textContent) || f(e, "BR"))
                ? { conversion: x, priority: 1 }
                : null;
            },
            div: function div() {
              return { conversion: O, priority: 1 };
            },
            pre: function pre() {
              return { conversion: x, priority: 0 };
            },
            table: function table(e) {
              return b(e) ? { conversion: S, priority: 3 } : null;
            },
            td: function td(e) {
              var t = e,
                n = t.closest("table");
              return t.classList.contains("js-file-line") || (n && b(n))
                ? { conversion: $, priority: 3 }
                : null;
            },
            tr: function tr(e) {
              var t = e.closest("table");
              return t && b(t) ? { conversion: $, priority: 3 } : null;
            },
          },
        });
      };
      _proto.afterCloneFrom = function afterCloneFrom(e) {
        (_t$ElementNode.prototype.afterCloneFrom.call(this, e),
          (this.__language = e.__language),
          (this.__theme = e.__theme),
          (this.__isSyntaxHighlightSupported = e.__isSyntaxHighlightSupported));
      };
      _proto.createDOM = function createDOM(e) {
        var n = require("Lexical").$getDocument().createElement("code");
        (require("Lexical").addClassNamesToElement(n, e.theme.code),
          n.setAttribute("spellcheck", "false"));
        var r = this.getLanguage();
        r &&
          (n.setAttribute(h, r),
          this.getIsSyntaxHighlightSupported() && n.setAttribute(p, r));
        var i = this.getTheme();
        i && n.setAttribute(N, i);
        var o = this.getStyle();
        return (o && require("Lexical").setDOMStyleFromCSS(n.style, o), n);
      };
      _proto.updateDOM = function updateDOM(e, n, r) {
        var i = this.__language,
          o = e.__language;
        i ? i !== o && n.setAttribute(h, i) : o && n.removeAttribute(h);
        var s = this.__isSyntaxHighlightSupported;
        e.__isSyntaxHighlightSupported && o
          ? s && i
            ? i !== o && n.setAttribute(p, i)
            : n.removeAttribute(p)
          : s && i && n.setAttribute(p, i);
        var l = this.__theme,
          a = e.__theme;
        l ? l !== a && n.setAttribute(N, l) : a && n.removeAttribute(N);
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
          (n.setAttribute(h, r),
          this.getIsSyntaxHighlightSupported() && n.setAttribute(p, r));
        var i = this.getTheme();
        i && n.setAttribute(N, i);
        var o = this.getStyle();
        return (
          o && require("Lexical").setDOMStyleFromCSS(n.style, o),
          { element: n }
        );
      };
      _proto.updateFromJSON = function updateFromJSON(e) {
        return _t$ElementNode.prototype.updateFromJSON
          .call(this, e)
          .setLanguage(e.language)
          .setTheme(e.theme);
      };
      _proto.exportJSON = function exportJSON() {
        return babelHelpers["extends"](
          {},
          _t$ElementNode.prototype.exportJSON.call(this),
          { language: this.getLanguage(), theme: this.getTheme() },
        );
      };
      _proto.insertNewAfter = function insertNewAfter(e, r) {
        if (r === void 0) {
          r = !0;
        }
        if (
          !require("LexicalExtension").getPeerDependencyFromEditor(
            require("Lexical").$getEditor(),
            "LexicalCode",
          )
        ) {
          m();
          var _t2 = E(e);
          if (_t2) return _t2;
        }
        var i = e.anchor,
          o = e.focus,
          l = (i.isBefore(o) ? i : o).getNode();
        if (require("Lexical").$isTextNode(l)) {
          var _e6 = s(l);
          var _n = [];
          for (;;)
            if (require("Lexical").$isTabNode(_e6))
              (_n.push(require("Lexical").$createTabNode()),
                (_e6 = _e6.getNextSibling()));
            else {
              if (!y(_e6)) break;
              {
                var _t3 = 0;
                var _r2 = _e6.getTextContent(),
                  _i3 = _e6.getTextContentSize();
                for (; _t3 < _i3 && " " === _r2[_t3]; ) _t3++;
                if ((0 !== _t3 && _n.push(A(" ".repeat(_t3))), _t3 !== _i3))
                  break;
                _e6 = _e6.getNextSibling();
              }
            }
          var _r3 = l.splitText(i.offset)[0],
            _o = 0 === i.offset ? 0 : 1,
            _a = _r3.getIndexWithinParent() + _o,
            _c = l.getParentOrThrow(),
            _u = [require("Lexical").$createLineBreakNode()].concat(_n);
          _c.splice(_a, 0, _u);
          var _g = _n[_n.length - 1];
          _g
            ? _g.select()
            : 0 === i.offset
              ? _r3.selectPrevious()
              : _r3.getNextSibling().selectNext(0, 0);
        }
        if (C(l)) {
          var _n2 = e.anchor.offset;
          (l.splice(_n2, 0, [require("Lexical").$createLineBreakNode()]),
            l.select(_n2 + 1, _n2 + 1));
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
      return _;
    })((_require_Lexical = require("Lexical")).ElementNode);
    function T(e, n) {
      return require("Lexical").$create(_2).setLanguage(e).setTheme(n);
    }
    function C(e) {
      return e instanceof _2;
    }
    function x(e) {
      return { node: T(e.getAttribute(h)) };
    }
    function O(e) {
      var t = e,
        n = M(t);
      return n ||
        (function (e) {
          var t = e.parentElement;
          for (; null !== t; ) {
            if (M(t)) return !0;
            t = t.parentElement;
          }
          return !1;
        })(t)
        ? { node: n ? T() : null }
        : { node: null };
    }
    function S() {
      return { node: T() };
    }
    function $() {
      return { node: null };
    }
    function M(e) {
      return null !== e.style.fontFamily.match("monospace");
    }
    function b(e) {
      return e.classList.contains("js-file-line-container");
    }
    function E(e) {
      var n = e.anchor;
      if (e.isCollapsed() && "element" === n.type) {
        var _e7 = n.getNode();
        if (C(_e7)) {
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
    var _R = (function (_t$TextNode) {
      function R(e, t, n) {
        var _this2;
        if (e === void 0) {
          e = "";
        }
        ((_this2 = _t$TextNode.call(this, e, n) || this),
          (_this2.__highlightType = t));
        return _this2;
      }
      babelHelpers.inheritsLoose(R, _t$TextNode);
      var _proto2 = R.prototype;
      _proto2.$config = function $config() {
        return this.config("code-highlight", {
          extends: require("Lexical").TextNode,
        });
      };
      _proto2.afterCloneFrom = function afterCloneFrom(e) {
        (_t$TextNode.prototype.afterCloneFrom.call(this, e),
          (this.__highlightType = e.__highlightType));
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
          r = D(e.theme, this.__highlightType);
        return (require("Lexical").addClassNamesToElement(n, r), n);
      };
      _proto2.updateDOM = function updateDOM(e, n, r) {
        var i = _t$TextNode.prototype.updateDOM.call(this, e, n, r),
          o = D(r.theme, e.__highlightType),
          s = D(r.theme, this.__highlightType);
        return (
          o !== s &&
            (o && require("Lexical").removeClassNamesFromElement(n, o),
            s && require("Lexical").addClassNamesToElement(n, s)),
          i
        );
      };
      _proto2.updateFromJSON = function updateFromJSON(e) {
        return _t$TextNode.prototype.updateFromJSON
          .call(this, e)
          .setHighlightType(e.highlightType);
      };
      _proto2.exportJSON = function exportJSON() {
        return babelHelpers["extends"](
          {},
          _t$TextNode.prototype.exportJSON.call(this),
          { highlightType: this.getHighlightType() },
        );
      };
      _proto2.setFormat = function setFormat(e) {
        return this;
      };
      _proto2.isParentRequired = function isParentRequired() {
        return !0;
      };
      _proto2.createParentElementNode = function createParentElementNode() {
        return T();
      };
      return R;
    })(_require_Lexical.TextNode);
    function D(e, t) {
      return t && e && e.codeHighlight && e.codeHighlight[t];
    }
    function A(e, n) {
      if (e === void 0) {
        e = "";
      }
      return require("Lexical").$applyNodeReplacement(new _R(e, n));
    }
    function y(e) {
      return e instanceof _R;
    }
    var L = "data-language";
    function v(e) {
      return null !== e.style.fontFamily.match("monospace");
    }
    function I(e) {
      var t = e.parentElement;
      for (; null !== t; ) {
        if (v(t)) return !0;
        t = t.parentElement;
      }
      return !1;
    }
    var P = (_require_LexicalHtml = require("LexicalHtml")).defineOverlayRules([
        _require_LexicalHtml.defineImportRule({
          $import: function $import(e, t) {
            return e.$importChildren(t);
          },
          match: _require_LexicalHtml.sel.tag("tr", "td"),
          name: "@lexical/code/github-code-table/unwrap",
        }),
      ]),
      B = _require_LexicalHtml.defineImportRule({
        $import: function $import(e, t) {
          return [T(t.getAttribute(L)).splice(0, 0, e.$importChildren(t))];
        },
        match: _require_LexicalHtml.sel.tag("pre"),
        name: "@lexical/code/pre",
      }),
      W = _require_LexicalHtml.defineImportRule({
        $import: function $import(e, t, n) {
          var r = t.textContent || "";
          return /\r?\n/.test(r) || null !== t.querySelector("br")
            ? [T(t.getAttribute(L)).splice(0, 0, e.$importChildren(t))]
            : n();
        },
        match: _require_LexicalHtml.sel.tag("code"),
        name: "@lexical/code/code-multiline",
      });
    function k(e) {
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
    function H(e) {
      var n = !1;
      var r = [];
      var i = "",
        o = !1;
      var s = function s() {
        o && (r.push(i), (i = ""), (o = !1));
      };
      for (var _l of Array.from(e.childNodes))
        if (require("Lexical").isHTMLElement(_l))
          "DIV" === _l.tagName
            ? (s(), r.push(_l.textContent || ""), (n = !0))
            : "BR" === _l.tagName
              ? (s(), r.push(""), (n = !0))
              : ((i += _l.textContent || ""), (o = !0));
        else if (require("Lexical").isDOMTextNode(_l)) {
          var _e8 = _l.textContent || "";
          _e8.length > 0 && ((i += _e8), (o = !0));
        }
      return (s(), n ? r : null);
    }
    function w(e) {
      for (var _n5 of Array.from(e.children)) {
        if (require("Lexical").isHTMLElement(_n5) && k(_n5)) {
          if (null !== H(_n5)) return !0;
          var _e9 = _n5.nextElementSibling;
          if (_e9 && k(_e9)) return !0;
          continue;
        }
        if (w(_n5)) return !0;
      }
      return !1;
    }
    var F = _require_LexicalHtml.defineImportRule({
        $import: function $import(e, n, r) {
          if (!k(n) || I(n)) return r();
          var i = H(n);
          return null === i || 0 === i.length
            ? r()
            : [
                T().splice(
                  0,
                  0,
                  require("Lexical").$generateNodesFromRawText(i.join("\n")),
                ),
              ];
        },
        match: _require_LexicalHtml.sel.tag("div"),
        name: "@lexical/code/vscode-wrapper",
      }),
      Y = _require_LexicalHtml.defineImportRule({
        $import: function $import(e, n, r) {
          if (!k(n) || I(n)) return r();
          var i = n.previousElementSibling;
          if (i && k(i)) return [];
          var o = [];
          var s = n;
          for (; s && k(s); )
            (o.push("BR" === s.tagName ? "" : s.textContent || ""),
              (s = s.nextElementSibling));
          return o.length < 2
            ? r()
            : [
                T().splice(
                  0,
                  0,
                  require("Lexical").$generateNodesFromRawText(o.join("\n")),
                ),
              ];
        },
        match: _require_LexicalHtml.sel.tag("div", "br"),
        name: "@lexical/code/vscode-line-run",
      }),
      K = _require_LexicalHtml.defineOverlayRules([F, Y]),
      U = _require_LexicalHtml.defineImportRule({
        $import: function $import(e, t, n) {
          return v(t)
            ? [T().splice(0, 0, e.$importChildren(t))]
            : I(t)
              ? e.$importChildren(t)
              : n();
        },
        match: _require_LexicalHtml.sel.tag("div"),
        name: "@lexical/code/div",
      }),
      z = [
        _require_LexicalHtml.defineImportRule({
          $import: function $import(e, t) {
            return [T().splice(0, 0, e.$importChildren(t, { rules: P }))];
          },
          match: _require_LexicalHtml.sel
            .tag("table")
            .classAll("js-file-line-container"),
          name: "@lexical/code/github-code-table",
        }),
        _require_LexicalHtml.defineImportRule({
          $import: function $import(e, t) {
            return e.$importChildren(t);
          },
          match: _require_LexicalHtml.sel.tag("td").classAll("js-file-line"),
          name: "@lexical/code/github-code-cell-by-class",
        }),
        W,
        B,
        U,
      ],
      j = _require_Lexical.defineExtension({
        dependencies: [
          _require_LexicalHtml.CoreImportExtension,
          _require_Lexical.configExtension(
            _require_LexicalHtml.DOMImportExtension,
            {
              preprocess: [
                function (n, r, i) {
                  (w(require("Lexical").isDOMDocumentNode(n) ? n.body : n) &&
                    r.session.update(
                      require("LexicalHtml").ImportOverlays,
                      function (e) {
                        return [].concat(e, [K]);
                      },
                    ),
                    i());
                },
              ],
              rules: z,
            },
          ),
        ],
        name: "LexicalCode",
        nodes: function nodes() {
          return [_2, _R];
        },
        register: function register(e) {
          var _require_Lexical;
          return (_require_Lexical = require("Lexical")).mergeRegister(
            e.registerCommand(
              _require_Lexical.KEY_ENTER_COMMAND,
              function (e) {
                var n = require("Lexical").$getSelection();
                return (
                  !(!require("Lexical").$isRangeSelection(n) || !E(n)) &&
                  (null !== e && e.preventDefault(), !0)
                );
              },
              _require_Lexical.COMMAND_PRIORITY_LOW,
            ),
            e.registerNodeTransform(_require_Lexical.TabNode, function (e) {
              0 !== e.getFormat() && C(e.getParent()) && e.setFormat(0);
            }),
          );
        },
      }),
      J = _require_Lexical.defineExtension({
        dependencies: [j],
        name: "@lexical/code/Import",
      });
    function q(e) {
      if (!require("Lexical").$isRangeSelection(e)) return !1;
      var n = e.anchor.getNode(),
        r = C(n) ? n : n.getParent(),
        i = e.focus.getNode(),
        o = C(i) ? i : i.getParent();
      return C(r) && r.is(o);
    }
    function V(e) {
      var n = e.getNodes(),
        r = [];
      if (1 === n.length && C(n[0])) return r;
      var o = [];
      for (var _e0 = 0; _e0 < n.length; _e0++) {
        var _s = n[_e0];
        (y(_s) ||
          require("Lexical").$isTabNode(_s) ||
          require("Lexical").$isLineBreakNode(_s) ||
          i(169),
          require("Lexical").$isLineBreakNode(_s)
            ? o.length > 0 && (r.push(o), (o = []))
            : o.push(_s));
      }
      if (o.length > 0) {
        var _n6 = e.isBackward() ? e.anchor : e.focus,
          _i4 = require("Lexical").$createPoint(o[0].getKey(), 0, "text");
        _n6.is(_i4) || r.push(o);
      }
      return r;
    }
    function G(e, n) {
      var r = require("Lexical").$getSelection();
      if (!require("Lexical").$isRangeSelection(r) || !q(r)) return !1;
      var i = V(r),
        o = i.length;
      if (0 === o && r.isCollapsed())
        return (
          e === require("Lexical").INDENT_CONTENT_COMMAND &&
            r.insertNodes([require("Lexical").$createTabNode()]),
          !0
        );
      if (
        0 === o &&
        e === require("Lexical").INDENT_CONTENT_COMMAND &&
        "\n" === r.getTextContent()
      ) {
        var _e1 = require("Lexical").$createTabNode(),
          _n7 = require("Lexical").$createLineBreakNode(),
          _i5 = r.isBackward() ? "previous" : "next";
        return (
          r.insertNodes([_e1, _n7]),
          require("Lexical").$setSelectionFromCaretRange(
            require("Lexical").$getCaretRangeInDirection(
              require("Lexical").$getCaretRange(
                require("Lexical").$getTextPointCaret(_e1, "next", 0),
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
      for (var _l2 = 0; _l2 < o; _l2++) {
        var _o2 = i[_l2];
        if (_o2.length > 0) {
          var _i6 = _o2[0];
          if (
            (0 === _l2 && (_i6 = s(_i6)),
            e === require("Lexical").INDENT_CONTENT_COMMAND)
          ) {
            var _e10 = require("Lexical").$createTabNode();
            if ((_i6.insertBefore(_e10), 0 === _l2)) {
              var _n8 = r.isBackward() ? "focus" : "anchor",
                _o3 = require("Lexical").$createPoint(_i6.getKey(), 0, "text");
              r[_n8].is(_o3) && r[_n8].set(_e10.getKey(), 0, "text");
            }
          } else
            require("Lexical").$isTabNode(_i6)
              ? _i6.remove()
              : void 0 !== n && y(_i6) && g(_i6, n, r);
        }
      }
      return !0;
    }
    function Q(e, n) {
      var r = require("Lexical").$getSelection();
      if (!require("Lexical").$isRangeSelection(r)) return !1;
      var i = r.anchor,
        o = r.focus,
        a = i.offset,
        c = o.offset,
        u = i.getNode(),
        g = o.getNode(),
        d = e === require("Lexical").KEY_ARROW_UP_COMMAND;
      if (
        !q(r) ||
        (!y(u) && !require("Lexical").$isTabNode(u)) ||
        (!y(g) && !require("Lexical").$isTabNode(g))
      )
        return !1;
      if (!n.altKey) {
        if (r.isCollapsed()) {
          var _e11 = u.getParentOrThrow();
          if (d && 0 === a && null === u.getPreviousSibling()) {
            if (null === _e11.getPreviousSibling())
              return (_e11.selectPrevious(), n.preventDefault(), !1);
          } else if (
            !d &&
            a === u.getTextContentSize() &&
            null === u.getNextSibling()
          ) {
            if (null === _e11.getNextSibling())
              return (_e11.selectNext(), n.preventDefault(), !1);
          }
        }
        return !1;
      }
      var f, h;
      if (
        (u.isBefore(g) ? ((f = s(u)), (h = l(g))) : ((f = s(g)), (h = l(u))),
        null == f || null == h)
      )
        return !1;
      var p = f.getNodesBetween(h);
      for (var _e12 = 0; _e12 < p.length; _e12++) {
        var _n9 = p[_e12];
        if (
          !y(_n9) &&
          !require("Lexical").$isTabNode(_n9) &&
          !require("Lexical").$isLineBreakNode(_n9)
        )
          return !1;
      }
      (n.preventDefault(), n.stopPropagation());
      var N = d ? f.getPreviousSibling() : h.getNextSibling();
      if (!require("Lexical").$isLineBreakNode(N)) return !0;
      var m = d ? N.getPreviousSibling() : N.getNextSibling();
      if (null == m) return !0;
      var _ =
        y(m) ||
        require("Lexical").$isTabNode(m) ||
        require("Lexical").$isLineBreakNode(m)
          ? d
            ? s(m)
            : l(m)
          : null;
      var T = null != _ ? _ : m;
      return (
        N.remove(),
        p.forEach(function (e) {
          return e.remove();
        }),
        e === require("Lexical").KEY_ARROW_UP_COMMAND
          ? (p.forEach(function (e) {
              return T.insertBefore(e);
            }),
            T.insertBefore(N))
          : (T.insertAfter(N),
            (T = N),
            p.forEach(function (e) {
              (T.insertAfter(e), (T = e));
            })),
        r.setTextNodeRange(u, a, g, c),
        !0
      );
    }
    function X(e, n) {
      var r = require("Lexical").$getSelection();
      if (!require("Lexical").$isRangeSelection(r)) return !1;
      var i = r.anchor,
        o = r.focus,
        s = i.getNode(),
        l = o.getNode(),
        g = e === require("Lexical").MOVE_TO_START;
      if (
        !q(r) ||
        (!y(s) && !require("Lexical").$isTabNode(s)) ||
        (!y(l) && !require("Lexical").$isTabNode(l))
      )
        return !1;
      var d = l,
        f = "rtl" === a(d) ? !g : g,
        h = i.key,
        p = i.offset,
        N = i.type;
      if (f) {
        var _e13 = c(d, o.offset);
        if (null !== _e13) {
          var _n0 = _e13.node,
            _i7 = _e13.offset;
          require("Lexical").$isLineBreakNode(_n0)
            ? _n0.selectNext(0, 0)
            : r.setTextNodeRange(_n0, _i7, _n0, _i7);
        } else d.getParentOrThrow().selectStart();
      } else {
        u(d).select();
      }
      return (
        n.shiftKey && r.anchor.set(h, p, N),
        n.preventDefault(),
        n.stopPropagation(),
        !0
      );
    }
    function Z(e, n, o) {
      return require("Lexical").mergeRegister.apply(
        require("Lexical"),
        (o
          ? [
              e.registerCommand(
                require("Lexical").KEY_ARROW_DOWN_COMMAND,
                function (e) {
                  return (
                    !e.altKey && require("LexicalUtils").$onEscapeDown(C, e)
                  );
                },
                require("Lexical").COMMAND_PRIORITY_LOW,
              ),
              e.registerCommand(
                require("Lexical").KEY_ARROW_RIGHT_COMMAND,
                function (e) {
                  return require("LexicalUtils").$onEscapeDown(C, e);
                },
                require("Lexical").COMMAND_PRIORITY_LOW,
              ),
              e.registerCommand(
                require("Lexical").KEY_ARROW_UP_COMMAND,
                function (e) {
                  return !e.altKey && require("LexicalUtils").$onEscapeUp(C, e);
                },
                require("Lexical").COMMAND_PRIORITY_LOW,
              ),
              e.registerCommand(
                require("Lexical").KEY_ARROW_LEFT_COMMAND,
                function (e) {
                  return require("LexicalUtils").$onEscapeUp(C, e);
                },
                require("Lexical").COMMAND_PRIORITY_LOW,
              ),
            ]
          : []
        ).concat([
          e.registerCommand(
            require("Lexical").KEY_TAB_COMMAND,
            function (n) {
              var r = (function (e) {
                var n = require("Lexical").$getSelection();
                if (!require("Lexical").$isRangeSelection(n) || !q(n))
                  return null;
                var r = e
                    ? require("Lexical").OUTDENT_CONTENT_COMMAND
                    : require("Lexical").INDENT_CONTENT_COMMAND,
                  o = e
                    ? require("Lexical").OUTDENT_CONTENT_COMMAND
                    : require("Lexical").INSERT_TAB_COMMAND,
                  a = n.anchor,
                  c = n.focus;
                if (a.is(c)) return o;
                var u = V(n);
                if (1 !== u.length) return r;
                var g = u[0];
                var d, f;
                (0 === g.length && i(285),
                  n.isBackward() ? ((d = c), (f = a)) : ((d = a), (f = c)));
                var h = s(g[0]),
                  p = l(g[0]),
                  N = require("Lexical").$createPoint(h.getKey(), 0, "text"),
                  m = require("Lexical").$createPoint(
                    p.getKey(),
                    p.getTextContentSize(),
                    "text",
                  );
                return d.isBefore(N) || m.isBefore(f)
                  ? r
                  : N.isBefore(d) || f.isBefore(m)
                    ? o
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
                !!q(require("Lexical").$getSelection()) &&
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
              return G(require("Lexical").INDENT_CONTENT_COMMAND);
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          ),
          e.registerCommand(
            require("Lexical").OUTDENT_CONTENT_COMMAND,
            function () {
              return G(require("Lexical").OUTDENT_CONTENT_COMMAND, n);
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
              if (!q(n)) return !1;
              var o = i.getParent();
              return n.isCollapsed() &&
                0 === r.offset &&
                null === i.getPreviousSibling() &&
                C(o) &&
                null === o.getPreviousSibling()
                ? (e.preventDefault(), !0)
                : Q(require("Lexical").KEY_ARROW_UP_COMMAND, e);
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
                !!q(n) &&
                (n.isCollapsed() &&
                r.offset === i.getTextContentSize() &&
                null === i.getNextSibling() &&
                C(i.getParentOrThrow()) &&
                null === i.getParentOrThrow().getNextSibling()
                  ? (e.preventDefault(), !0)
                  : Q(require("Lexical").KEY_ARROW_DOWN_COMMAND, e))
              );
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          ),
          e.registerCommand(
            require("Lexical").MOVE_TO_START,
            function (e) {
              return X(require("Lexical").MOVE_TO_START, e);
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          ),
          e.registerCommand(
            require("Lexical").MOVE_TO_END,
            function (e) {
              return X(require("Lexical").MOVE_TO_END, e);
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          ),
        ]),
      );
    }
    var ee = _require_Lexical.defineExtension({
      build: function build(e, t) {
        return require("LexicalExtension").namedSignals(t);
      },
      config: _require_Lexical.safeCast({
        disabled: !1,
        escapeWithArrows: !1,
        tabSize: void 0,
      }),
      dependencies: [j],
      name: "@lexical/code-indent",
      register: function register(e, t, r) {
        var i = r.getOutput();
        return require("LexicalExtension").effect(function () {
          if (!i.disabled.value)
            return Z(e, i.tabSize.value, i.escapeWithArrows.value);
        });
      },
    });
    ((exports.$createCodeHighlightNode = A),
      (exports.$createCodeNode = T),
      (exports.$getCodeLineDirection = a),
      (exports.$getEndOfCodeInLine = u),
      (exports.$getFirstCodeNodeOfLine = s),
      (exports.$getLastCodeNodeOfLine = l),
      (exports.$getStartOfCodeInLine = c),
      (exports.$isCodeHighlightNode = y),
      (exports.$isCodeNode = C),
      (exports.$outdentLeadingSpaces = g),
      (exports.$plainifyCodeContent = function (e) {
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
              return n.push(A(e));
            },
          }),
          n
        );
      }),
      (exports.CodeExtension = j),
      (exports.CodeHighlightNode = _R),
      (exports.CodeImportExtension = J),
      (exports.CodeImportRules = z),
      (exports.CodeIndentExtension = ee),
      (exports.CodeNode = _2),
      (exports.DEFAULT_CODE_LANGUAGE = d),
      (exports.getDefaultCodeLanguage = function () {
        return d;
      }),
      (exports.registerCodeIndentation = Z));
  },
  null,
);
