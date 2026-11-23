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
    var l = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
    function a(e, t) {
      if ("number" == typeof e) return Number.isFinite(e) ? e : t;
      if ("string" != typeof e || !l.test(e)) return t;
      var n = Number(e);
      return Number.isFinite(n) ? n : t;
    }
    var c = function c(e) {
      var n = require("Lexical").getterTableOf(e, "format"),
        o = require("Lexical").setterTableOf(e, "format"),
        r = require("Lexical").setterDefaultOf(e, "format");
      return {
        exportJSON: function exportJSON(e) {
          var t = e.__textFormat,
            o = e.__textStyle,
            r = (0 !== t || "" !== o) && e.shouldSerializeTextStyles();
          return {
            children: [],
            language: e.__language,
            theme: e.__theme,
            direction: e.__dir,
            format: n[e.__format],
            indent: e.__indent,
            textFormat: 0 !== t && r ? t : void 0,
            textStyle: "" !== o && r ? o : void 0,
            type: e.__type,
            version: 1,
          };
        },
        exportCompactJSON: function exportCompactJSON(e) {
          var t = e.__textFormat,
            o = e.__textStyle,
            r = (0 !== t || "" !== o) && e.shouldSerializeTextStyles(),
            i = { type: e.__type, children: [] },
            s = e.__language;
          void 0 !== s && (i.language = s);
          var l = e.__theme;
          void 0 !== l && (i.theme = l);
          var a = e.__dir;
          null != a && (i.direction = a);
          var c = n[e.__format];
          void 0 !== c && "" !== c && (i.format = c);
          var u = e.__indent;
          return (
            void 0 !== u && 0 !== u && (i.indent = u),
            void 0 !== t && 0 !== t && r && (i.textFormat = t),
            void 0 !== o && "" !== o && r && (i.textStyle = o),
            i
          );
        },
        updateFromJSON: function updateFromJSON(e, t) {
          var n = t.direction;
          e.__dir = null === n || "ltr" === n || "rtl" === n ? n : null;
          var i = t.format;
          ((e.__format = "string" == typeof i && i in o ? o[i] : r),
            (e.__indent = (function (e) {
              var t = a(e, 0);
              return t >= 0 && t <= Infinity && Number.isInteger(t) ? t : 0;
            })(t.indent)),
            (e.__textFormat = a(t.textFormat, 0)));
          var s = t.textStyle;
          e.__textStyle = "string" == typeof s ? s : "";
          var l = t.language;
          e.setLanguage(null == l || "string" == typeof l ? l : "");
          var c = t.theme;
          return (
            e.setTheme(void 0 === c ? void 0 : "string" == typeof c ? c : ""),
            e
          );
        },
      };
    };
    function u(e, t) {
      e.__highlightType = t.__highlightType;
    }
    var g = function g(e) {
        var _require_Lexical;
        var n = (_require_Lexical = require("Lexical")).getterTableOf(
            e,
            "mode",
          ),
          o = _require_Lexical.aliasTableOf(e, "detail", 0),
          r = _require_Lexical.aliasTableOf(e, "format", 0),
          i = _require_Lexical.setterTableOf(e, "mode"),
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
              o = e.__highlightType;
            void 0 !== o && (t.highlightType = o);
            var r = e.__detail;
            void 0 !== r && 0 !== r && (t.detail = r);
            var i = e.__format;
            void 0 !== i && 0 !== i && (t.format = i);
            var s = n[e.__mode];
            void 0 !== s && "normal" !== s && (t.mode = s);
            var l = e.__style;
            void 0 !== l && "" !== l && (t.style = l);
            var a = e.__text;
            return (void 0 !== a && "" !== a && (t.text = a), t);
          },
          updateFromJSON: function updateFromJSON(e, t) {
            var n = t.detail;
            e.__detail = "string" == typeof n && n in o ? o[n] : a(n, 0);
            var l = t.format;
            e.setFormat("string" == typeof l && l in r ? r[l] : a(l, 0));
            var c = t.mode;
            e.__mode = "string" == typeof c && c in i ? i[c] : s;
            var u = t.style;
            e.__style = "string" == typeof u ? u : "";
            var g = t.text;
            e.__text = "string" == typeof g ? g : "";
            var f = t.highlightType;
            return (
              e.setHighlightType(null == f || "string" == typeof f ? f : ""),
              e
            );
          },
          afterCloneFrom: u,
        };
      },
      f = (_require_Lexical = require("Lexical")).nodeSchema()({
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
      d = "javascript";
    function h(e, n) {
      for (var _o of e.childNodes) {
        if (require("Lexical").isHTMLElement(_o) && _o.tagName === n) return !0;
        if (h(_o, n)) return !0;
      }
      return !1;
    }
    var _ = "data-language",
      p = "data-highlight-language",
      m = "data-theme",
      N = s();
    var _T = (function (_t$ElementNode) {
      function T(e, t) {
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
      babelHelpers.inheritsLoose(T, _t$ElementNode);
      var _proto = T.prototype;
      _proto.$config = function $config() {
        return this.config("code", {
          children: "inline",
          extends: require("Lexical").ElementNode,
          generated: c,
          importDOM: {
            code: function code(e) {
              return null != e.textContent &&
                (/\r?\n/.test(e.textContent) || h(e, "BR"))
                ? { conversion: C, priority: 1 }
                : null;
            },
            div: function div() {
              return { conversion: y, priority: 1 };
            },
            pre: function pre() {
              return { conversion: C, priority: 0 };
            },
            table: function table(e) {
              return M(e) ? { conversion: S, priority: 3 } : null;
            },
            td: function td(e) {
              var t = e,
                n = t.closest("table");
              return t.classList.contains("js-file-line") || (n && M(n))
                ? { conversion: $, priority: 3 }
                : null;
            },
            tr: function tr(e) {
              var t = e.closest("table");
              return t && M(t) ? { conversion: $, priority: 3 } : null;
            },
          },
          json: f,
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
        var o = this.getLanguage();
        o &&
          (n.setAttribute(_, o),
          this.getIsSyntaxHighlightSupported() && n.setAttribute(p, o));
        var r = this.getTheme();
        r && n.setAttribute(m, r);
        var i = this.getStyle();
        return (i && require("Lexical").setDOMStyleFromCSS(n.style, i), n);
      };
      _proto.updateDOM = function updateDOM(e, n, o) {
        var r = this.__language,
          i = e.__language;
        r ? r !== i && n.setAttribute(_, r) : i && n.removeAttribute(_);
        var s = this.__isSyntaxHighlightSupported;
        e.__isSyntaxHighlightSupported && i
          ? s && r
            ? r !== i && n.setAttribute(p, r)
            : n.removeAttribute(p)
          : s && r && n.setAttribute(p, r);
        var l = this.__theme,
          a = e.__theme;
        l ? l !== a && n.setAttribute(m, l) : a && n.removeAttribute(m);
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
        var o = this.getLanguage();
        o &&
          (n.setAttribute(_, o),
          this.getIsSyntaxHighlightSupported() && n.setAttribute(p, o));
        var r = this.getTheme();
        r && n.setAttribute(m, r);
        var i = this.getStyle();
        return (
          i && require("Lexical").setDOMStyleFromCSS(n.style, i),
          { element: n }
        );
      };
      _proto.insertNewAfter = function insertNewAfter(e, o) {
        if (o === void 0) {
          o = !0;
        }
        if (
          !require("LexicalExtensionGetPeerDependencyFromEditor").getPeerDependencyFromEditor(
            require("Lexical").$getEditor(),
            "LexicalCode",
          )
        ) {
          N();
          var _t = E(e);
          if (_t) return _t;
        }
        var r = e.anchor,
          i = e.focus,
          s = r.isBefore(i) ? r : i,
          l = s.getNode();
        if (require("Lexical").$isTextNode(l)) {
          var _e2 = l;
          for (
            var _n = _e2.getPreviousSibling();
            require("Lexical").$isTextNode(_n);
            _n = _n.getPreviousSibling()
          )
            _e2 = _n;
          var _n2 = [];
          if (!require("Lexical").$hasUpdateTag(require("Lexical").PASTE_TAG)) {
            var _o2 = require("Lexical").$getEditor().getEditorState();
            for (; null !== _e2; ) {
              var _r = _e2.is(l);
              if (require("Lexical").$isTabNode(_e2)) {
                if (_r && 0 === s.offset) break;
                _n2.push(require("Lexical").$createTabNode());
              } else {
                if (
                  !(
                    L(_e2) ||
                    (require("Lexical").$isTextNode(_e2) &&
                      null !==
                        require("Lexical").$getNodeByKey(_e2.getKey(), _o2))
                  )
                )
                  break;
                {
                  var _o3 = _e2.getTextContent(),
                    _i = _r ? s.offset : _o3.length;
                  var _l = 0;
                  for (; _l < _i && " " === _o3[_l]; ) _l++;
                  if (0 !== _l) {
                    var _o4 = " ".repeat(_l);
                    _n2.push(
                      L(_e2) ? R(_o4) : require("Lexical").$createTextNode(_o4),
                    );
                  }
                  if (_l !== _o3.length) break;
                }
              }
              if (_r) break;
              _e2 = _e2.getNextSibling();
            }
          }
          var _o5 = l.splitText(r.offset)[0],
            _i2 = 0 === r.offset ? 0 : 1,
            _a = _o5.getIndexWithinParent() + _i2,
            _c = l.getParentOrThrow(),
            _u = [require("Lexical").$createLineBreakNode()].concat(
              Array.from(_n2),
            );
          _c.splice(_a, 0, _u);
          var _g = _n2[_n2.length - 1];
          _g
            ? _g.select()
            : 0 === r.offset
              ? _o5.selectPrevious()
              : _o5.getNextSibling().selectNext(0, 0);
        }
        if (O(l)) {
          var _n3 = e.anchor.offset;
          (l.splice(_n3, 0, [require("Lexical").$createLineBreakNode()]),
            l.select(_n3 + 1, _n3 + 1));
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
      return T;
    })(_require_Lexical.ElementNode);
    function x(e, n) {
      return require("Lexical").$create(_T).setLanguage(e).setTheme(n);
    }
    function O(e) {
      return e instanceof _T;
    }
    function C(e) {
      return { node: x(e.getAttribute(_), e.getAttribute(m)) };
    }
    function y(e) {
      var t = e,
        n = b(t);
      return n ||
        (function (e) {
          var t = e.parentElement;
          for (; null !== t; ) {
            if (b(t)) return !0;
            t = t.parentElement;
          }
          return !1;
        })(t)
        ? { node: n ? x() : null }
        : { node: null };
    }
    function S() {
      return { node: x() };
    }
    function $() {
      return { node: null };
    }
    function b(e) {
      return null !== e.style.fontFamily.match("monospace");
    }
    function M(e) {
      return e.classList.contains("js-file-line-container");
    }
    function E(e) {
      var n = e.anchor;
      if (e.isCollapsed() && "element" === n.type) {
        var _e3 = n.getNode();
        if (O(_e3)) {
          var _o6 = _e3.getChildrenSize();
          if (_o6 >= 2 && n.offset === _o6) {
            var _n4 = _e3.getLastChild();
            if (
              require("Lexical").$isLineBreakNode(_n4) &&
              require("Lexical").$isLineBreakNode(_n4.getPreviousSibling())
            ) {
              var _n5 = require("Lexical").$createParagraphNode();
              return (
                _e3.splice(_o6 - 2, 2, []).insertAfter(_n5, !1),
                _n5.select(),
                _n5
              );
            }
          }
        }
      }
      return null;
    }
    var A = _require_Lexical.nodeSchema()({
      highlightType: _require_Lexical.withAccessors(
        _require_Lexical.optional(
          _require_Lexical.nullable(_require_Lexical.stringValue()),
        ),
        { getter: { field: "__highlightType" } },
      ),
    });
    var _D = (function (_t$TextNode) {
      function D(e, t, n) {
        var _this2;
        if (e === void 0) {
          e = "";
        }
        ((_this2 = _t$TextNode.call(this, e, n) || this),
          (_this2.__highlightType = t));
        return _this2;
      }
      babelHelpers.inheritsLoose(D, _t$TextNode);
      var _proto2 = D.prototype;
      _proto2.$config = function $config() {
        return this.config("code-highlight", {
          extends: require("Lexical").TextNode,
          generated: g,
          json: A,
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
          o = v(e.theme, this.__highlightType);
        return (require("Lexical").addClassNamesToElement(n, o), n);
      };
      _proto2.updateDOM = function updateDOM(e, n, o) {
        var r = _t$TextNode.prototype.updateDOM.call(this, e, n, o),
          i = v(o.theme, e.__highlightType),
          s = v(o.theme, this.__highlightType);
        return (
          i !== s &&
            (i && require("Lexical").removeClassNamesFromElement(n, i),
            s && require("Lexical").addClassNamesToElement(n, s)),
          r
        );
      };
      _proto2.setFormat = function setFormat(e) {
        return this;
      };
      _proto2.isParentRequired = function isParentRequired() {
        return !0;
      };
      _proto2.createParentElementNode = function createParentElementNode() {
        return x();
      };
      return D;
    })(_require_Lexical.TextNode);
    function v(e, t) {
      return t && e && e.codeHighlight && e.codeHighlight[t];
    }
    function R(e, n) {
      if (e === void 0) {
        e = "";
      }
      return require("Lexical").$applyNodeReplacement(new _D(e, n));
    }
    function L(e) {
      return e instanceof _D;
    }
    function I(e) {
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
          o = new URLSearchParams();
        o.append("code", e);
        for (
          var _len2 = arguments.length,
            t = new Array(_len2 > 1 ? _len2 - 1 : 0),
            _key2 = 1;
          _key2 < _len2;
          _key2++
        ) {
          t[_key2 - 1] = arguments[_key2];
        }
        for (var _e4 of t) o.append("v", _e4);
        return (
          (n.search = o.toString()),
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
    function P(e, n) {
      var o = e;
      for (
        var _r2 = require("Lexical").$getSiblingCaret(e, n);
        _r2 && (L(_r2.origin) || require("Lexical").$isTabNode(_r2.origin));
        _r2 = _r2.getAdjacentCaret()
      )
        o = _r2.origin;
      return o;
    }
    function k(e) {
      return P(e, "previous");
    }
    function B(e) {
      return P(e, "next");
    }
    function w(e) {
      var n = k(e),
        o = B(e);
      var r = n;
      for (; null !== r; ) {
        if (L(r)) {
          var _e5 = require("Lexical").getTextDirection(r.getTextContent());
          if (null !== _e5) return _e5;
        }
        if (r === o) break;
        r = r.getNextSibling();
      }
      var i = n.getParent();
      if (require("Lexical").$isElementNode(i)) {
        var _e6 = i.getDirection();
        if ("ltr" === _e6 || "rtl" === _e6) return _e6;
      }
      return null;
    }
    function F(e, n) {
      var o = null,
        r = null,
        i = e,
        s = n,
        l = e.getTextContent();
      for (;;) {
        if (0 === s) {
          var _e7 = i.getPreviousSibling();
          if (null === _e7) {
            i = null;
            break;
          }
          if (
            (L(_e7) ||
              require("Lexical").$isTabNode(_e7) ||
              require("Lexical").$isLineBreakNode(_e7) ||
              I(167),
            (i = _e7),
            require("Lexical").$isLineBreakNode(i))
          ) {
            o = { node: i, offset: 1 };
            break;
          }
          ((s = Math.max(0, i.getTextContentSize() - 1)),
            (l = i.getTextContent()));
        } else s--;
        var _e8 = l[s];
        L(i) && " " !== _e8 && (r = { node: i, offset: s });
      }
      if (null !== r) return r;
      var a = null;
      if (n < e.getTextContentSize()) L(e) && (a = e.getTextContent()[n]);
      else {
        var _t2 = e.getNextSibling();
        L(_t2) && (a = _t2.getTextContent()[0]);
      }
      if (null !== a && " " !== a) return o;
      {
        var _r3 = (function (e, n) {
          var o = e,
            r = n,
            i = e.getTextContent(),
            s = e.getTextContentSize();
          for (;;) {
            if (!L(o) || r === s) {
              if (
                ((o = o.getNextSibling()),
                null === o || require("Lexical").$isLineBreakNode(o))
              )
                return null;
              L(o) &&
                ((r = 0),
                (i = o.getTextContent()),
                (s = o.getTextContentSize()));
            }
            if (L(o)) {
              if (" " !== i[r]) return { node: o, offset: r };
              r++;
            }
          }
        })(e, n);
        return null !== _r3 ? _r3 : o;
      }
    }
    function W(e) {
      var n = B(e);
      return (require("Lexical").$isLineBreakNode(n) && I(168), n);
    }
    function K(e) {
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
            return n.push(R(e));
          },
        }),
        n
      );
    }
    function Y(e, n) {
      var o = e.__state ? e.__state.toJSON() : {},
        r = new Set(),
        i = n.getLatest().__state;
      if (void 0 !== i) {
        var _i$getInternalState = i.getInternalState(),
          _e9 = _i$getInternalState[0],
          _t3 = _i$getInternalState[1];
        for (var _e0 of _t3.keys()) r.add(_e0.key);
        for (var _t4 of Object.keys(_e9 || {})) r.add(_t4);
      }
      var s = require("Lexical").$getWritableNodeState(n);
      for (var _ref2 of Object.entries(o)) {
        var _e1 = _ref2[0];
        var _n6 = _ref2[1];
        if (_e1 === require("Lexical").NODE_STATE_KEY)
          for (var _ref4 of Object.entries(_n6)) {
            var _e10 = _ref4[0];
            var _t5 = _ref4[1];
            r.has(_e10) || s.updateFromUnknown(_e10, _t5);
          }
        else r.has(_e1) || s.updateFromUnknown(_e1, _n6);
      }
      if (e.__state) {
        var _t6 = s.sharedNodeState.sharedConfigMap;
        for (var _ref6 of e.__state.getInternalState()[1]) {
          var _n7 = _ref6[0];
          var _o7 = _ref6[1];
          {
            if (r.has(_n7.key) || _n7.isEqual(_o7, _n7.defaultValue)) continue;
            var _e11 = _t6.get(_n7.key);
            (void 0 !== _e11 && _e11 !== _n7) || s.updateFromKnown(_n7, _o7);
          }
        }
      }
    }
    function H(e) {
      return void 0 !== e.__state && Object.keys(e.__state.toJSON()).length > 0;
    }
    function j(e) {
      var n = e.__state ? e.__state.toJSON() : {},
        o = new Set(),
        r = new Map();
      for (var _ref8 of Object.entries(n)) {
        var _e12 = _ref8[0];
        var _i3 = _ref8[1];
        if (_e12 === require("Lexical").NODE_STATE_KEY)
          for (var _ref0 of Object.entries(_i3)) {
            var _e13 = _ref0[0];
            var _t7 = _ref0[1];
            r.set(_e13, JSON.stringify(_t7));
          }
        else (o.add(_e12), r.set(_e12, JSON.stringify(_i3)));
      }
      return { flat: o, values: r };
    }
    function U(e, t, n) {
      if (!Number.isInteger(t) || t <= 0) return !1;
      var o = e.getTextContent(),
        r = /^ +/.exec(o);
      if (!r) return !1;
      var i = Math.min(t, r[0].length),
        s = e.getKey(),
        l =
          n.anchor.key === s && "text" === n.anchor.type
            ? n.anchor.offset
            : null,
        a =
          n.focus.key === s && "text" === n.focus.type ? n.focus.offset : null;
      return (
        e.spliceText(0, i, ""),
        null !== l && n.anchor.set(s, Math.max(0, l - i), "text"),
        null !== a && n.focus.set(s, Math.max(0, a - i), "text"),
        !0
      );
    }
    var z = "data-language",
      J = "data-theme";
    function V(t) {
      var n = [];
      var o = !1;
      for (var _r4 = 0; _r4 < t.length; _r4++) {
        var _i4 = t[_r4],
          _s = require("LexicalHtml").$isBlockLevel(_i4);
        (_r4 > 0 && (_s || o) && n.push("\n"),
          n.push(_i4.getTextContent()),
          (o = _s));
      }
      return K(n.join(""));
    }
    function q(e) {
      return null !== e.style.fontFamily.match("monospace");
    }
    function G(e) {
      var t = e.parentElement;
      for (; null !== t; ) {
        if (q(t)) return !0;
        t = t.parentElement;
      }
      return !1;
    }
    var Q = (_require_LexicalHtml = require("LexicalHtml")).defineOverlayRules([
        {
          $import: function $import(e, t) {
            return e.$importChildren(t);
          },
          match: _require_LexicalHtml.sel.tag("tr", "td"),
          name: "@lexical/code/github-code-table/unwrap",
        },
      ]),
      X = {
        $import: function $import(e, t) {
          return [
            x(t.getAttribute(z), t.getAttribute(J)).splice(
              0,
              0,
              V(e.$importChildren(t)),
            ),
          ];
        },
        match: _require_LexicalHtml.sel.tag("pre"),
        name: "@lexical/code/pre",
      },
      Z = {
        $import: function $import(e, t, n) {
          var o = t.textContent || "";
          return /\r?\n/.test(o) || null !== t.querySelector("br")
            ? [
                x(t.getAttribute(z), t.getAttribute(J)).splice(
                  0,
                  0,
                  V(e.$importChildren(t)),
                ),
              ]
            : n();
        },
        match: _require_LexicalHtml.sel.tag("code"),
        name: "@lexical/code/code-multiline",
      };
    function ee(e) {
      if (!require("Lexical").isHTMLElement(e)) return !1;
      var n = e.style.fontFamily,
        o = e.style.whiteSpace;
      return (
        "string" == typeof n &&
        /monospace/i.test(n) &&
        "string" == typeof o &&
        o.startsWith("pre")
      );
    }
    function te(e) {
      var n = !1;
      var o = [];
      var r = "",
        i = !1;
      var s = function s() {
        i && (o.push(r), (r = ""), (i = !1));
      };
      for (var _l2 of Array.from(e.childNodes))
        if (require("Lexical").isHTMLElement(_l2))
          "DIV" === _l2.tagName
            ? (s(), o.push(_l2.textContent || ""), (n = !0))
            : "BR" === _l2.tagName
              ? (s(), o.push(""), (n = !0))
              : ((r += _l2.textContent || ""), (i = !0));
        else if (require("Lexical").isDOMTextNode(_l2)) {
          var _e14 = _l2.textContent || "";
          _e14.length > 0 && ((r += _e14), (i = !0));
        }
      return (s(), n ? o : null);
    }
    function ne(e) {
      for (var _n8 of Array.from(e.children)) {
        if (require("Lexical").isHTMLElement(_n8) && ee(_n8)) {
          if (null !== te(_n8)) return !0;
          var _e15 = _n8.nextElementSibling;
          if (_e15 && ee(_e15)) return !0;
          continue;
        }
        if (ne(_n8)) return !0;
      }
      return !1;
    }
    var oe = {
        $import: function $import(e, t, n) {
          if (!ee(t) || G(t)) return n();
          var o = te(t);
          return null === o || 0 === o.length
            ? n()
            : [x().splice(0, 0, K(o.join("\n")))];
        },
        match: _require_LexicalHtml.sel.tag("div"),
        name: "@lexical/code/vscode-wrapper",
      },
      re = {
        $import: function $import(e, t, n) {
          if (!ee(t) || G(t)) return n();
          var o = t.previousElementSibling;
          if (o && ee(o)) return [];
          var r = [];
          var i = t;
          for (; i && ee(i); )
            (r.push("BR" === i.tagName ? "" : i.textContent || ""),
              (i = i.nextElementSibling));
          return r.length < 2 ? n() : [x().splice(0, 0, K(r.join("\n")))];
        },
        match: _require_LexicalHtml.sel.tag("div", "br"),
        name: "@lexical/code/vscode-line-run",
      },
      ie = _require_LexicalHtml.defineOverlayRules([oe, re]),
      se = {
        $import: function $import(e, t, n) {
          return q(t) ? [x().splice(0, 0, V(e.$importChildren(t)))] : n();
        },
        match: _require_LexicalHtml.sel.tag("div"),
        name: "@lexical/code/div",
      },
      le = [
        {
          $import: function $import(e, t) {
            return [x().splice(0, 0, V(e.$importChildren(t, { rules: Q })))];
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
        Z,
        X,
        se,
      ],
      ae = {
        dependencies: [
          _require_LexicalHtml.CoreImportExtension,
          [
            _require_LexicalHtml.DOMImportExtension,
            {
              preprocess: [
                function (n, o, r) {
                  (ne(require("Lexical").isDOMDocumentNode(n) ? n.body : n) &&
                    o.session.update(
                      require("LexicalHtml").ImportOverlays,
                      function (e) {
                        return [].concat(Array.from(e), [ie]);
                      },
                    ),
                    r());
                },
              ],
              rules: le,
            },
          ],
        ],
        name: "LexicalCode",
        nodes: function nodes() {
          return [_T, _D];
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
                  !E(n) ||
                  (null !== e && e.preventDefault(), 0)
                );
              },
              _require_Lexical.COMMAND_PRIORITY_LOW,
            ),
            e.registerNodeTransform(_require_Lexical.TabNode, function (e) {
              0 !== e.getFormat() && O(e.getParent()) && e.setFormat(0);
            }),
          );
        },
      };
    function ce(e) {
      var n = require("Lexical").$getEditor().getElementByKey(e.getKey());
      if (null === n) return;
      var o = e.getChildren(),
        r = o.length;
      if (r === n.__cachedChildrenLength) return;
      n.__cachedChildrenLength = r;
      var i = "1",
        s = 1;
      for (var _e16 = 0; _e16 < r; _e16++)
        require("Lexical").$isLineBreakNode(o[_e16]) && (i += "\n" + ++s);
      n.setAttribute("data-gutter", i);
    }
    function ue(e) {
      if (!require("Lexical").$isRangeSelection(e)) return !1;
      var n = e.anchor.getNode(),
        o = O(n) ? n : n.getParent(),
        r = e.focus.getNode(),
        i = O(r) ? r : r.getParent();
      return O(o) && o.is(i);
    }
    function ge(e) {
      var n = e.getNodes(),
        o = [];
      if (1 === n.length && O(n[0])) return o;
      var r = [];
      for (var _e17 = 0; _e17 < n.length; _e17++) {
        var _i5 = n[_e17];
        (L(_i5) ||
          require("Lexical").$isTabNode(_i5) ||
          require("Lexical").$isLineBreakNode(_i5) ||
          I(169),
          require("Lexical").$isLineBreakNode(_i5)
            ? r.length > 0 && (o.push(r), (r = []))
            : r.push(_i5));
      }
      if (r.length > 0) {
        var _n9 = e.isBackward() ? e.anchor : e.focus,
          _i6 = require("Lexical").$createPoint(r[0].getKey(), 0, "text");
        _n9.is(_i6) || o.push(r);
      }
      return o;
    }
    function fe(e, n) {
      var o = require("Lexical").$getSelection();
      if (!require("Lexical").$isRangeSelection(o) || !ue(o)) return !1;
      var r = ge(o),
        i = r.length;
      if (0 === i && o.isCollapsed())
        return (
          e === require("Lexical").INDENT_CONTENT_COMMAND
            ? o.insertNodes([require("Lexical").$createTabNode()])
            : (function (e, n) {
                var o = e.anchor.getNode();
                if (!L(o) && !require("Lexical").$isTabNode(o)) return;
                var r = k(o);
                require("Lexical").$isTabNode(r)
                  ? r.remove()
                  : void 0 !== n && L(r) && U(r, n, e);
              })(o, n),
          !0
        );
      if (
        0 === i &&
        e === require("Lexical").INDENT_CONTENT_COMMAND &&
        "\n" === o.getTextContent()
      ) {
        var _e18 = require("Lexical").$createTabNode(),
          _n0 = require("Lexical").$createLineBreakNode(),
          _r5 = o.isBackward() ? "previous" : "next";
        return (
          o.insertNodes([_e18, _n0]),
          require("Lexical").$setSelectionFromCaretRange(
            require("Lexical").$getCaretRangeInDirection(
              require("Lexical").$getCaretRange(
                require("Lexical").$getTextPointCaret(_e18, "next", 0),
                require("Lexical").$normalizeCaret(
                  require("Lexical").$getSiblingCaret(_n0, "next"),
                ),
              ),
              _r5,
            ),
          ),
          !0
        );
      }
      for (var _s2 = 0; _s2 < i; _s2++) {
        var _i7 = r[_s2];
        if (_i7.length > 0) {
          var _r6 = _i7[0];
          if (
            (0 === _s2 && (_r6 = k(_r6)),
            e === require("Lexical").INDENT_CONTENT_COMMAND)
          ) {
            var _e19 = require("Lexical").$createTabNode();
            if ((_r6.insertBefore(_e19), 0 === _s2)) {
              var _n1 = o.isBackward() ? "focus" : "anchor",
                _i8 = require("Lexical").$createPoint(_r6.getKey(), 0, "text");
              o[_n1].is(_i8) && o[_n1].set(_e19.getKey(), 0, "text");
            }
          } else
            require("Lexical").$isTabNode(_r6)
              ? _r6.remove()
              : void 0 !== n && L(_r6) && U(_r6, n, o);
        }
      }
      return !0;
    }
    function de(e, n) {
      var o = require("Lexical").$getSelection();
      if (!require("Lexical").$isRangeSelection(o)) return !1;
      var r = o.anchor,
        i = o.focus,
        s = r.offset,
        l = i.offset,
        a = r.getNode(),
        c = i.getNode(),
        u = e === require("Lexical").KEY_ARROW_UP_COMMAND;
      if (
        !ue(o) ||
        (!L(a) && !require("Lexical").$isTabNode(a)) ||
        (!L(c) && !require("Lexical").$isTabNode(c))
      )
        return !1;
      if (!n.altKey) {
        if (o.isCollapsed()) {
          var _e20 = a.getParentOrThrow();
          if (u && 0 === s && null === a.getPreviousSibling()) {
            if (null === _e20.getPreviousSibling())
              return (_e20.selectPrevious(), n.preventDefault(), !1);
          } else if (
            !u &&
            s === a.getTextContentSize() &&
            null === a.getNextSibling() &&
            null === _e20.getNextSibling()
          )
            return (_e20.selectNext(), n.preventDefault(), !1);
        }
        return !1;
      }
      var g, f;
      if (
        (a.isBefore(c) ? ((g = k(a)), (f = B(c))) : ((g = k(c)), (f = B(a))),
        null == g || null == f)
      )
        return !1;
      var d = g.getNodesBetween(f);
      for (var _e21 = 0; _e21 < d.length; _e21++) {
        var _n10 = d[_e21];
        if (
          !L(_n10) &&
          !require("Lexical").$isTabNode(_n10) &&
          !require("Lexical").$isLineBreakNode(_n10)
        )
          return !1;
      }
      (n.preventDefault(), n.stopPropagation());
      var h = u ? g.getPreviousSibling() : f.getNextSibling();
      if (!require("Lexical").$isLineBreakNode(h)) return !0;
      var _ = u ? h.getPreviousSibling() : h.getNextSibling();
      if (null == _) return !0;
      var p = require("Lexical").$isLineBreakNode(_),
        m =
          p || (!L(_) && !require("Lexical").$isTabNode(_))
            ? null
            : u
              ? k(_)
              : B(_);
      var N = null != m ? m : _;
      return (
        h.remove(),
        d.forEach(function (e) {
          return e.remove();
        }),
        p
          ? (d.forEach(function (e) {
              (N.insertAfter(e), (N = e));
            }),
            N.insertAfter(h))
          : e === require("Lexical").KEY_ARROW_UP_COMMAND
            ? (d.forEach(function (e) {
                return N.insertBefore(e);
              }),
              N.insertBefore(h))
            : (N.insertAfter(h),
              (N = h),
              d.forEach(function (e) {
                (N.insertAfter(e), (N = e));
              })),
        o.setTextNodeRange(a, s, c, l),
        !0
      );
    }
    function he(e, n) {
      var o = require("Lexical").$getSelection();
      if (!require("Lexical").$isRangeSelection(o)) return !1;
      var r = o.anchor,
        i = o.focus,
        s = r.getNode(),
        l = i.getNode(),
        a = e === require("Lexical").MOVE_TO_START;
      if (
        !ue(o) ||
        (!L(s) && !require("Lexical").$isTabNode(s)) ||
        (!L(l) && !require("Lexical").$isTabNode(l))
      )
        return !1;
      var c = l,
        u = "rtl" === w(c) ? !a : a,
        g = r.key,
        f = r.offset,
        d = r.type;
      if (u) {
        var _e22 = F(c, i.offset);
        if (null !== _e22) {
          var _n11 = _e22.node,
            _r7 = _e22.offset;
          require("Lexical").$isLineBreakNode(_n11)
            ? _n11.selectNext(0, 0)
            : o.setTextNodeRange(_n11, _r7, _n11, _r7);
        } else c.getParentOrThrow().selectStart();
      } else W(c).select();
      return (
        n.shiftKey && o.anchor.set(g, f, d),
        n.preventDefault(),
        n.stopPropagation(),
        !0
      );
    }
    function _e(e, n, o) {
      return require("Lexical").mergeRegister.apply(
        require("Lexical"),
        Array.from(
          o
            ? [
                e.registerCommand(
                  require("Lexical").KEY_ARROW_DOWN_COMMAND,
                  function (e) {
                    return (
                      !e.altKey && require("LexicalUtils").$onEscapeDown(O, e)
                    );
                  },
                  require("Lexical").COMMAND_PRIORITY_LOW,
                ),
                e.registerCommand(
                  require("Lexical").KEY_ARROW_RIGHT_COMMAND,
                  function (e) {
                    return require("LexicalUtils").$onEscapeDown(O, e);
                  },
                  require("Lexical").COMMAND_PRIORITY_LOW,
                ),
                e.registerCommand(
                  require("Lexical").KEY_ARROW_UP_COMMAND,
                  function (e) {
                    return (
                      !e.altKey && require("LexicalUtils").$onEscapeUp(O, e)
                    );
                  },
                  require("Lexical").COMMAND_PRIORITY_LOW,
                ),
                e.registerCommand(
                  require("Lexical").KEY_ARROW_LEFT_COMMAND,
                  function (e) {
                    return require("LexicalUtils").$onEscapeUp(O, e);
                  },
                  require("Lexical").COMMAND_PRIORITY_LOW,
                ),
              ]
            : [],
        ).concat([
          e.registerCommand(
            require("Lexical").KEY_TAB_COMMAND,
            function (n) {
              var o = (function (e) {
                var n = require("Lexical").$getSelection();
                if (!require("Lexical").$isRangeSelection(n) || !ue(n))
                  return null;
                var o = e
                    ? require("Lexical").OUTDENT_CONTENT_COMMAND
                    : require("Lexical").INDENT_CONTENT_COMMAND,
                  r = e
                    ? require("Lexical").OUTDENT_CONTENT_COMMAND
                    : require("Lexical").INSERT_TAB_COMMAND,
                  i = n.anchor,
                  s = n.focus;
                if (i.is(s)) return r;
                var l = ge(n);
                if (1 !== l.length) return o;
                var a = l[0];
                var c, u;
                (0 === a.length && I(285),
                  n.isBackward() ? ((c = s), (u = i)) : ((c = i), (u = s)));
                var g = k(a[0]),
                  f = B(a[0]),
                  d = require("Lexical").$createPoint(g.getKey(), 0, "text"),
                  h = require("Lexical").$createPoint(
                    f.getKey(),
                    f.getTextContentSize(),
                    "text",
                  );
                return c.isBefore(d) || h.isBefore(u)
                  ? o
                  : d.isBefore(c) || u.isBefore(h)
                    ? r
                    : o;
              })(n.shiftKey);
              return (
                null !== o && (n.preventDefault(), e.dispatchCommand(o), !0)
              );
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          ),
          e.registerCommand(
            require("Lexical").INSERT_TAB_COMMAND,
            function () {
              return (
                !!ue(require("Lexical").$getSelection()) &&
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
              return fe(require("Lexical").INDENT_CONTENT_COMMAND);
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          ),
          e.registerCommand(
            require("Lexical").OUTDENT_CONTENT_COMMAND,
            function () {
              return fe(require("Lexical").OUTDENT_CONTENT_COMMAND, n);
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          ),
          e.registerCommand(
            require("Lexical").KEY_ARROW_UP_COMMAND,
            function (e) {
              var n = require("Lexical").$getSelection();
              if (!require("Lexical").$isRangeSelection(n)) return !1;
              var o = n.anchor,
                r = o.getNode();
              if (!ue(n)) return !1;
              var i = r.getParent();
              return n.isCollapsed() &&
                0 === o.offset &&
                null === r.getPreviousSibling() &&
                O(i) &&
                null === i.getPreviousSibling()
                ? (e.preventDefault(), !0)
                : de(require("Lexical").KEY_ARROW_UP_COMMAND, e);
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          ),
          e.registerCommand(
            require("Lexical").KEY_ARROW_DOWN_COMMAND,
            function (e) {
              var n = require("Lexical").$getSelection();
              if (!require("Lexical").$isRangeSelection(n)) return !1;
              var o = n.anchor,
                r = o.getNode();
              return (
                !!ue(n) &&
                (n.isCollapsed() &&
                o.offset === r.getTextContentSize() &&
                null === r.getNextSibling() &&
                O(r.getParentOrThrow()) &&
                null === r.getParentOrThrow().getNextSibling()
                  ? (e.preventDefault(), !0)
                  : de(require("Lexical").KEY_ARROW_DOWN_COMMAND, e))
              );
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          ),
          e.registerCommand(
            require("Lexical").MOVE_TO_START,
            function (e) {
              return he(require("Lexical").MOVE_TO_START, e);
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          ),
          e.registerCommand(
            require("Lexical").MOVE_TO_END,
            function (e) {
              return he(require("Lexical").MOVE_TO_END, e);
            },
            require("Lexical").COMMAND_PRIORITY_LOW,
          ),
        ]),
      );
    }
    var pe = {
      build: function build(e, t) {
        return require("LexicalExtensionNamedSignals").namedSignals(t);
      },
      config: { disabled: !1, escapeWithArrows: !1, tabSize: void 0 },
      dependencies: [ae],
      name: "@lexical/code-indent",
      register: function register(e, t, n) {
        var r = n.getOutput();
        return require("LexicalExtensionSignals").effect(function () {
          if (!r.disabled.value)
            return _e(e, r.tabSize.value, r.escapeWithArrows.value);
        });
      },
    };
    ((exports.$createCodeHighlightNode = R),
      (exports.$createCodeNode = x),
      (exports.$getCodeLineDirection = w),
      (exports.$getEndOfCodeInLine = W),
      (exports.$getFirstCodeNodeOfLine = k),
      (exports.$getLastCodeNodeOfLine = B),
      (exports.$getStartOfCodeInLine = F),
      (exports.$isCodeHighlightNode = L),
      (exports.$isCodeNode = O),
      (exports.$keepCodeNodeState = function (e, n) {
        if (!e.some(H)) return n;
        var o = [],
          r = new Map();
        var i = 0;
        for (var _n12 of e) {
          var _e23 = _n12.getTextContentSize();
          (H(_n12) &&
            (require("Lexical").$isTabNode(_n12) ||
            require("Lexical").$isLineBreakNode(_n12)
              ? r.set(i, _n12)
              : _e23 > 0 &&
                require("Lexical").$isTextNode(_n12) &&
                o.push({ end: i + _e23, node: _n12, start: i })),
            (i += _e23));
        }
        if (0 === o.length && 0 === r.size) return n;
        var s = [];
        var l = 0;
        i = 0;
        for (var _e24 of n) {
          var _n13 = _e24.getTextContentSize(),
            _a2 = i,
            _c2 = i + _n13;
          for (i = _c2; l < o.length && o[l].end <= _a2; ) l++;
          var _u2 = r.get(_a2);
          if (
            void 0 !== _u2 &&
            ((require("Lexical").$isTabNode(_e24) &&
              require("Lexical").$isTabNode(_u2)) ||
              (require("Lexical").$isLineBreakNode(_e24) &&
                require("Lexical").$isLineBreakNode(_u2)))
          ) {
            (Y(_u2, _e24), s.push(_e24));
            continue;
          }
          if (!L(_e24) || l === o.length || o[l].start >= _c2) {
            s.push(_e24);
            continue;
          }
          var _g2 = _e24.getTextContent();
          var _f = _a2,
            _d = l;
          for (; _f < _c2; ) {
            var _r8 = _d < o.length && o[_d].start < _c2 ? o[_d] : null;
            var _i9 = _c2,
              _l3 = null;
            null !== _r8 && _f < _r8.start
              ? (_i9 = _r8.start)
              : null !== _r8 &&
                ((_i9 = Math.min(_c2, _r8.end)), (_l3 = _r8.node));
            var _u3 = _e24;
            (_i9 - _f !== _n13 &&
              ((_u3 = require("Lexical").$copyNode(_e24, !0)),
              _u3.setTextContent(_g2.slice(_f - _a2, _i9 - _a2))),
              null !== _l3 && (Y(_l3, _u3), _i9 === _r8.end && _d++),
              s.push(_u3),
              (_f = _i9));
          }
        }
        return s;
      }),
      (exports.$outdentLeadingSpaces = U),
      (exports.$plainifyCodeContent = K),
      (exports.$replaceCodeTokensAddedTo = function (e, n, o, r) {
        var i = !1;
        var s = function s(e, n) {
          L(e) &&
            L(n) &&
            n !== e &&
            (function (e, n) {
              var o = n.constructor === e.constructor;
              if (
                o ? !H(n) : e.getType() !== _D.getType() || !(n instanceof _D)
              )
                return !1;
              if (
                n.getFormat() !== e.getFormat() ||
                n.getStyle() !== e.getStyle() ||
                n.getDetail() !== e.getDetail() ||
                n.getMode() !== e.getMode()
              )
                return !1;
              var r = j(e),
                i = j(n);
              var s = !o;
              for (var _e25 of i.values.keys()) r.values.has(_e25) || (s = !0);
              if (!s) return !1;
              for (var _ref10 of r.values) {
                var _e26 = _ref10[0];
                var _t8 = _ref10[1];
                if (i.values.get(_e26) !== _t8) return !1;
              }
              if (o) {
                var _o8 = e.exportJSON(),
                  _s3 = n.exportJSON();
                for (var _e27 of new Set(
                  [].concat(
                    Array.from(Object.keys(_o8)),
                    Array.from(Object.keys(_s3)),
                  ),
                ))
                  if (
                    "type" !== _e27 &&
                    _e27 !== require("Lexical").NODE_STATE_KEY &&
                    !r.flat.has(_e27) &&
                    !i.flat.has(_e27) &&
                    JSON.stringify(_o8[_e27]) !== JSON.stringify(_s3[_e27])
                  )
                    return !1;
              }
              return !0;
            })(e, n) &&
            (e.replace(n), (i = !0));
        };
        for (var _t9 = 0; _t9 < o; _t9++) s(e[_t9], n[_t9]);
        for (var _t0 = 1; _t0 <= e.length - r; _t0++)
          s(e[e.length - _t0], n[n.length - _t0]);
        return i;
      }),
      (exports.CodeExtension = ae),
      (exports.CodeHighlightNode = _D),
      (exports.CodeImportRules = le),
      (exports.CodeIndentExtension = pe),
      (exports.CodeNode = _T),
      (exports.DEFAULT_CODE_LANGUAGE = d),
      (exports.getDefaultCodeLanguage = function () {
        return d;
      }),
      (exports.registerCodeGutter = function (e) {
        return e._headless
          ? function () {}
          : e.registerMutationListener(
              _T,
              function (n) {
                e.read("latest", function () {
                  for (var _ref12 of n) {
                    var _e28 = _ref12[0];
                    var _o9 = _ref12[1];
                    if ("destroyed" !== _o9) {
                      var _n14 = require("Lexical").$getNodeByKey(_e28);
                      null !== _n14 && ce(_n14);
                    }
                  }
                });
              },
              { skipInitialization: !1 },
            );
      }),
      (exports.registerCodeIndentation = _e));
  },
  null,
);
