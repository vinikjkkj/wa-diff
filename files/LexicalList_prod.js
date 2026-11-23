__d(
  "LexicalList.prod",
  [
    "Lexical",
    "LexicalExtensionNamedSignals",
    "LexicalExtensionSignals",
    "LexicalHtml",
    "LexicalUtils",
  ],
  function $module_LexicalList_prod(
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
        for (var _e2 of t) r.append("v", _e2);
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
    function o(e) {
      var t = 1,
        n = e.getParent();
      for (; null != n; ) {
        if (X(n)) {
          var _e3 = n.getParent();
          if (K(_e3)) {
            (t++, (n = _e3.getParent()));
            continue;
          }
          s(40);
        }
        return t;
      }
      return t;
    }
    function l(e) {
      var t = e.getParent();
      K(t) || s(40);
      var n = t,
        r = t;
      for (; null !== r; ) ((r = r.getParent()), K(r) && (n = r));
      return n;
    }
    function c(e) {
      var t = [];
      var n = e.getChildren().filter(X);
      for (var _e4 = 0; _e4 < n.length; _e4++) {
        var _r = n[_e4],
          _i = _r.getFirstChild();
        K(_i) ? (t = t.concat(c(_i))) : t.push(_r);
      }
      return t;
    }
    function a(e) {
      return X(e) && K(e.getFirstChild());
    }
    function d(e, t) {
      return t.getValue();
    }
    function u(e, t) {
      return (
        X(e) &&
        (0 === t.length ||
          (1 === t.length && e.is(t[0]) && 0 === e.getChildrenSize()))
      );
    }
    function g(e, n) {
      return K(e) ? require("Lexical").$copyNode(e).setListType(n) : w(n);
    }
    function f(e) {
      if ("check" !== e.getListType())
        for (var _t of e.getChildren())
          X(_t) && void 0 !== q(_t) && J(_t, void 0);
    }
    function h(e) {
      var n = require("Lexical").$getSelection();
      if (null !== n) {
        var _r2 = n.getNodes();
        if (require("Lexical").$isRangeSelection(n)) {
          var _n$getStartEndPoints = n.getStartEndPoints(),
            _i2 = _n$getStartEndPoints[0],
            _s = _i2.getNode(),
            _o = _s.getParent();
          if (require("Lexical").$isBlockContainer(_s)) {
            var _e5 = _s.getFirstChild();
            if (_e5) _r2 = _e5.selectStart().getNodes();
            else {
              var _e6 = require("Lexical").$createParagraphNode();
              (_s.append(_e6), (_r2 = _e6.select().getNodes()));
            }
          } else if (u(_s, _r2)) {
            if (require("Lexical").$isBlockContainer(_o)) {
              var _n = w(e);
              _s.replace(_n);
              var _r3 = V();
              (require("Lexical").$isElementNode(_s) &&
                (_r3.setFormat(_s.getFormatType()),
                _r3.setIndent(_s.getIndent())),
                _n.append(_r3));
            } else if (X(_s)) {
              var _n2 = _s.getParentOrThrow();
              if (null === require("Lexical").$getSlotHost(_n2)) {
                var _t2 = g(_n2, e);
                (_(_t2, _n2.getChildren()), f(_t2), _n2.replace(_t2));
              }
            }
            return;
          }
        }
        var _i3 = new Set(),
          _s2 = (function (e) {
            var n = new Map();
            if (
              !require("Lexical").INTERNAL_isNodeStructureEnforced(
                require("Lexical").$getEditor(),
              )
            )
              return n;
            for (var _r4 of e) {
              var _e7 = _r4;
              for (
                ;
                null !== _e7 &&
                !require("Lexical").$isBlockContainer(_e7.getParent());
              )
                _e7 = _e7.getParent();
              !require("Lexical").$isElementNode(_e7) ||
                require("Lexical").$isBlockContainer(_e7) ||
                n.has(_e7.getKey()) ||
                n.set(_e7.getKey(), !_e7.getChildren().every(p));
            }
            return n;
          })(_r2);
        for (var _n3 = 0; _n3 < _r2.length; _n3++) {
          var _o2 = _r2[_n3];
          if (
            require("Lexical").$isElementNode(_o2) &&
            _o2.isEmpty() &&
            !X(_o2) &&
            !require("Lexical").$isBlockContainer(_o2) &&
            null === require("Lexical").$getSlotHost(_o2) &&
            !_i3.has(_o2.getKey())
          ) {
            y(_o2, e);
            continue;
          }
          var _l = require("Lexical").$isLeafNode(_o2)
            ? _o2.getParent()
            : X(_o2) && _o2.isEmpty()
              ? _o2
              : null;
          for (; null != _l && !require("Lexical").$isBlockContainer(_l); ) {
            var _n4 = _l.getKey();
            if (K(_l)) {
              if (
                !_i3.has(_n4) &&
                null === require("Lexical").$getSlotHost(_l)
              ) {
                var _t3 = g(_l, e);
                (_(_t3, _l.getChildren()),
                  f(_t3),
                  _l.replace(_t3),
                  _i3.add(_n4));
              }
              break;
            }
            {
              var _n5 = _l.getParent();
              if (require("Lexical").$isBlockContainer(_n5)) {
                var _t4 = m(_l, _o2, _s2);
                null === _t4 ||
                  _i3.has(_t4.getKey()) ||
                  (_i3.add(_t4.getKey()), y(_t4, e));
                break;
              }
              _l = _n5;
            }
          }
        }
      }
    }
    function p(e) {
      return (
        require("Lexical").INTERNAL_isInlineContent(e) ||
        K(e) ||
        (require("Lexical").$isParagraphNode(e) && !e.isShadowRoot())
      );
    }
    function m(e, n, r) {
      if (
        !require("Lexical").INTERNAL_isNodeStructureEnforced(
          require("Lexical").$getEditor(),
        )
      )
        return e;
      var i = r.get(e.getKey());
      if (
        (void 0 === i &&
          ((i = !e.getChildren().every(p)), r.set(e.getKey(), i)),
        !i)
      )
        return e;
      var s = require("Lexical").$findMatchingParent(n, function (e) {
        return (
          require("Lexical").INTERNAL_$isBlock(e) &&
          !require("Lexical").INTERNAL_isInlineContent(e)
        );
      });
      return require("Lexical").$isElementNode(s) ? s : null;
    }
    function _(e, t) {
      e.splice(e.getChildrenSize(), 0, t);
    }
    function y(e, n) {
      if (K(e)) return e;
      var r = e.getPreviousSibling(),
        i = e.getNextSibling(),
        s = V();
      var o;
      if ((_(s, e.getChildren()), K(r) && n === r.getListType()))
        (r.append(s),
          K(i) && n === i.getListType() && (_(r, i.getChildren()), i.remove()),
          (o = r));
      else if (K(i) && n === i.getListType())
        (i.getFirstChildOrThrow().insertBefore(s), (o = i));
      else {
        var _t5 = w(n);
        (_t5.append(s), e.replace(_t5), (o = _t5));
      }
      (s.setFormat(e.getFormatType()), s.setIndent(e.getIndent()));
      var l = require("Lexical").$getSelection();
      return (
        require("Lexical").$isRangeSelection(l) &&
          (o.getKey() === l.anchor.key &&
            l.anchor.set(s.getKey(), l.anchor.offset, "element"),
          o.getKey() === l.focus.key &&
            l.focus.set(s.getKey(), l.focus.offset, "element")),
        e.remove(),
        o
      );
    }
    function N(e, t) {
      C(e, t, !1);
    }
    function C(e, t, n) {
      S(e.getLastChild(), t.getFirstChild(), n);
      var r = t.getChildren();
      (r.length > 0 && e.append.apply(e, Array.from(r)), t.remove());
    }
    function S(e, n, r) {
      if (r === void 0) {
        r = !1;
      }
      if (
        e &&
        n &&
        a(e) &&
        a(n) &&
        (!r || (1 === e.getChildrenSize() && 1 === n.getChildrenSize())) &&
        e.getFirstChild().getListType() === n.getFirstChild().getListType()
      ) {
        if ((C(e.getFirstChild(), n.getFirstChild(), r), !r))
          return void n.remove();
        require("Lexical").ElementNode.prototype.remove.call(n);
      }
    }
    function T() {
      var n = require("Lexical").$getSelection();
      if (require("Lexical").$isRangeSelection(n)) {
        var _r5 = new Set(),
          _i4 = n.getNodes(),
          _s3 = n.anchor.getNode();
        if (u(_s3, _i4)) _r5.add(l(_s3));
        else
          for (var _n6 = 0; _n6 < _i4.length; _n6++) {
            var _s4 = _i4[_n6];
            if (require("Lexical").$isLeafNode(_s4)) {
              var _t6 = require("LexicalUtils").$getNearestNodeOfType(_s4, _z);
              null != _t6 && _r5.add(l(_t6));
            }
          }
        for (var _e8 of _r5) {
          if (null !== require("Lexical").$getSlotHost(_e8)) continue;
          var _r6 = _e8;
          var _i5 = c(_e8);
          for (var _e9 of _i5) {
            var _i6 = require("Lexical")
              .$createParagraphNode()
              .setTextStyle(n.style)
              .setTextFormat(n.format);
            (_i6
              .setFormat(_e9.getFormatType())
              .setIndent(_e9.getIndent())
              .setDirection(_e9.getDirection())
              .setStyle(_e9.getStyle()),
              _(_i6, _e9.getChildren()),
              _r6.insertAfter(_i6),
              (_r6 = _i6),
              _e9.__key === n.anchor.key &&
                require("Lexical").$setPointFromCaret(
                  n.anchor,
                  require("Lexical").$normalizeCaret(
                    require("Lexical").$getChildCaretAtIndex(
                      _i6,
                      n.anchor.offset,
                      "next",
                    ),
                  ),
                ),
              _e9.__key === n.focus.key &&
                require("Lexical").$setPointFromCaret(
                  n.focus,
                  require("Lexical").$normalizeCaret(
                    require("Lexical").$getChildCaretAtIndex(
                      _i6,
                      n.focus.offset,
                      "next",
                    ),
                  ),
                ),
              _e9.remove());
          }
          _e8.remove();
        }
      }
    }
    function x(e) {
      var t = "check" !== e.getListType();
      var n = e.getStart();
      for (var _r7 of e.getChildren())
        X(_r7) &&
          (_r7.getValue() !== n && _r7.setValue(n),
          t && null != _r7.getLatest().__checked && _r7.setChecked(void 0),
          K(_r7.getFirstChild()) || n++);
    }
    function L(e) {
      var n = new Set();
      if (a(e) || n.has(e.getKey())) return;
      var r = e.getParent(),
        i = e.getNextSibling(),
        s = e.getPreviousSibling();
      if (a(i) && a(s)) {
        var _t7 = s.getFirstChild();
        if (K(_t7)) {
          _t7.append(e);
          var _r8 = i.getFirstChild();
          K(_r8) &&
            _t7.getListType() === _r8.getListType() &&
            (_(_t7, _r8.getChildren()), i.remove(), n.add(i.getKey()));
        }
      } else if (a(i)) {
        var _t8 = i.getFirstChild();
        if (K(_t8)) {
          var _n7 = _t8.getFirstChild();
          null !== _n7 && _n7.insertBefore(e);
        }
      } else if (a(s)) {
        var _t9 = s.getFirstChild();
        K(_t9) && _t9.append(e);
      } else if (K(r)) {
        var _n8 = require("Lexical").$copyNode(e),
          _o3 = require("Lexical").$copyNode(r);
        (_n8.append(_o3),
          _o3.append(e),
          s ? s.insertAfter(_n8) : i ? i.insertBefore(_n8) : r.append(_n8));
      }
    }
    function v(e) {
      if (a(e)) return;
      var n = e.getParent(),
        r = n ? n.getParent() : void 0;
      if (K(r ? r.getParent() : void 0) && X(r) && K(n)) {
        if (
          r.getChildrenSize() > 1 &&
          (1 === n.getChildrenSize() ||
            (!e.is(n.getFirstChild()) && !e.is(n.getLastChild())))
        )
          return void (function (e, n, r) {
            var i = e.getNextSiblings(),
              s = n.getNextSiblings();
            r.insertAfter(e);
            var o = e;
            if (i.length > 0) {
              var _r9 = require("Lexical").$copyNode(e),
                _s5 = require("Lexical").$copyNode(n);
              (_r9.append(_s5), _(_s5, i), o.insertAfter(_r9), (o = _r9));
            }
            if (s.length > 0) {
              var _e0 = require("Lexical").$copyNode(r);
              (o.insertAfter(_e0), _(_e0, s));
            }
            (n.isEmpty() && n.remove(), r.isEmpty() && r.remove());
          })(e, n, r);
        var _i7 = n ? n.getFirstChild() : void 0,
          _s6 = n ? n.getLastChild() : void 0;
        if (e.is(_i7)) (r.insertBefore(e), n.isEmpty() && r.remove());
        else if (e.is(_s6)) (r.insertAfter(e), n.isEmpty() && r.remove());
        else {
          var _require_Lexical;
          var _i8 = (_require_Lexical = require("Lexical")).$copyNode(e),
            _s7 = _require_Lexical.$copyNode(n);
          (_i8.append(_s7),
            e.getPreviousSiblings().forEach(function (e) {
              return _s7.append(e);
            }));
          var _o4 = _require_Lexical.$copyNode(e),
            _l2 = _require_Lexical.$copyNode(n);
          (_o4.append(_l2),
            _(_l2, e.getNextSiblings()),
            r.insertBefore(_i8),
            r.insertAfter(_o4),
            r.replace(e));
        }
      }
    }
    function $(e) {
      if (e === void 0) {
        e = !1;
      }
      var n = require("Lexical").$getSelection();
      if (!require("Lexical").$isRangeSelection(n) || !n.isCollapsed())
        return !1;
      var r = n.anchor.getNode();
      var i = null;
      if (X(r) && 0 === r.getChildrenSize()) i = r;
      else if (require("Lexical").$isTextNode(r)) {
        var _e1 = r.getParent();
        X(_e1) &&
          _e1.getChildren().every(function (e) {
            return (
              require("Lexical").$isTextNode(e) &&
              "" === e.getTextContent().trim()
            );
          }) &&
          (i = _e1);
      }
      if (null === i) return !1;
      var o = l(i),
        c = i.getParent();
      K(c) || s(40);
      var a = c.getParent();
      var u;
      if (require("Lexical").$isBlockContainer(a))
        ((u = require("Lexical").$createParagraphNode()), o.insertAfter(u));
      else {
        if (!X(a)) return !1;
        ((u = require("Lexical").$copyNode(a)), a.insertAfter(u));
      }
      u.setTextStyle(n.style).setTextFormat(n.format).select();
      var g = i.getNextSiblings();
      if (g.length > 0) {
        var _n9 = e ? d(0, i) : 1,
          _r0 = require("Lexical").$copyNode(c).setStart(_n9);
        if (X(u)) {
          var _e10 = require("Lexical").$copyNode(u);
          (_e10.append(_r0), u.insertAfter(_e10));
        } else u.insertAfter(_r0);
        _r0.append.apply(_r0, Array.from(g));
      }
      return (
        (function (e) {
          var t = e;
          for (
            ;
            null == t.getNextSibling() && null == t.getPreviousSibling();
          ) {
            var _e11 = t.getParent();
            if (null == _e11 || (!X(_e11) && !K(_e11))) break;
            t = _e11;
          }
          t.remove();
        })(i),
        !0
      );
    }
    var k = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
    function E(e, t) {
      if ("number" == typeof e) return Number.isFinite(e) ? e : t;
      if ("string" != typeof e || !k.test(e)) return t;
      var n = Number(e);
      return Number.isFinite(n) ? n : t;
    }
    function b(e, t) {
      ((e.__listType = t.__listType),
        (e.__start = t.__start),
        (e.__tag = t.__tag));
    }
    var O = function O(e) {
      var _require_Lexical;
      var n = (_require_Lexical = require("Lexical")).getterTableOf(
          e,
          "format",
        ),
        r = _require_Lexical.setterTableOf(e, "format"),
        i = _require_Lexical.setterDefaultOf(e, "format"),
        s = _require_Lexical.aliasTableOf(e, "listType", 0);
      return {
        exportJSON: function exportJSON(e) {
          var t = e.__textFormat,
            r = e.__textStyle,
            i = (0 !== t || "" !== r) && e.shouldSerializeTextStyles();
          return {
            children: [],
            listType: e.__listType,
            start: e.__start,
            tag: e.__tag,
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
            s = { type: e.__type, children: [] },
            o = e.__listType;
          void 0 !== o && "number" !== o && (s.listType = o);
          var l = e.__start;
          void 0 !== l && 1 !== l && (s.start = l);
          var c = e.__dir;
          null != c && (s.direction = c);
          var a = n[e.__format];
          void 0 !== a && "" !== a && (s.format = a);
          var d = e.__indent;
          return (
            void 0 !== d && 0 !== d && (s.indent = d),
            void 0 !== t && 0 !== t && i && (s.textFormat = t),
            void 0 !== r && "" !== r && i && (s.textStyle = r),
            s
          );
        },
        updateFromJSON: function updateFromJSON(e, t) {
          var n = t.direction;
          e.__dir = null === n || "ltr" === n || "rtl" === n ? n : null;
          var o = t.format;
          ((e.__format = "string" == typeof o && o in r ? r[o] : i),
            (e.__indent = (function (e) {
              var t = E(e, 0);
              return t >= 0 && t <= Infinity && Number.isInteger(t) ? t : 0;
            })(t.indent)),
            (e.__textFormat = E(t.textFormat, 0)));
          var l = t.textStyle;
          e.__textStyle = "string" == typeof l ? l : "";
          var c = t.listType;
          return (
            e.setListType(
              "string" == typeof c && c in s
                ? s[c]
                : "number" === c || "bullet" === c || "check" === c
                  ? c
                  : "number",
            ),
            (e.__start = E(t.start, 1)),
            e
          );
        },
        afterCloneFrom: b,
      };
    };
    function A(e, t) {
      ((e.__checked = t.__checked), (e.__value = t.__value));
    }
    var M = function M(e) {
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
              checked: e.getChecked(),
              indent: e.getIndent(),
              value: e.__value,
              direction: e.__dir,
              format: n[e.__format],
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
              s = { type: e.__type, children: [] },
              o = e.getChecked();
            void 0 !== o && (s.checked = o);
            var l = e.getIndent();
            void 0 !== l && 0 !== l && (s.indent = l);
            var c = e.__value;
            void 0 !== c && 1 !== c && (s.value = c);
            var a = e.__dir;
            null != a && (s.direction = a);
            var d = n[e.__format];
            return (
              void 0 !== d && "" !== d && (s.format = d),
              void 0 !== t && 0 !== t && i && (s.textFormat = t),
              void 0 !== r && "" !== r && i && (s.textStyle = r),
              s
            );
          },
          updateFromJSON: function updateFromJSON(e, t) {
            var n = t.direction;
            e.__dir = null === n || "ltr" === n || "rtl" === n ? n : null;
            var s = t.format;
            ((e.__format = "string" == typeof s && s in r ? r[s] : i),
              e.setIndent(
                (function (e) {
                  var t = E(e, NaN);
                  return Number.isFinite(t) && Number.isInteger(t)
                    ? t < 0
                      ? 0
                      : t > 128
                        ? 128
                        : t
                    : 0;
                })(t.indent),
              ),
              (e.__textFormat = E(t.textFormat, 0)));
            var o = t.textStyle;
            e.__textStyle = "string" == typeof o ? o : "";
            var l = t.checked;
            return (
              (e.__checked =
                void 0 === l ? void 0 : "boolean" == typeof l && l),
              (e.__value = E(t.value, 1)),
              e
            );
          },
          afterCloneFrom: A,
        };
      },
      I = { ol: "number", ul: "bullet" },
      F = (_require_Lexical = require("Lexical")).nodeSchema()({
        listType: _require_Lexical.withAccessors(
          _require_Lexical.aliasedValue(
            _require_Lexical.enumValue(["number", "bullet", "check"]),
            I,
          ),
          { getter: { field: "__listType" } },
        ),
        start: _require_Lexical.withField(_require_Lexical.numberValue(1), {
          field: "__start",
        }),
        tag: _require_Lexical.withAccessors(
          _require_Lexical.enumValue(["ul", "ol"]),
          { getter: { field: "__tag" }, setter: null },
        ),
      });
    var _P = (function (_t$ElementNode) {
      function P(e, t, n) {
        var _this;
        if (e === void 0) {
          e = "number";
        }
        if (t === void 0) {
          t = 1;
        }
        _this = _t$ElementNode.call(this, n) || this;
        var r = I[e] || e;
        ((_this.__listType = r),
          (_this.__tag = "number" === r ? "ol" : "ul"),
          (_this.__start = t));
        return _this;
      }
      babelHelpers.inheritsLoose(P, _t$ElementNode);
      var _proto = P.prototype;
      _proto.$config = function $config() {
        return this.config("list", {
          $transform: function $transform(e) {
            if (
              ((function (e) {
                var n = e.constructor,
                  r = e.getNextSibling();
                return (
                  null !== r &&
                  r.constructor === n &&
                  require("Lexical").INTERNAL_isNodeStructureEnforced(
                    require("Lexical").$getEditor(),
                  ) &&
                  require("Lexical").getDeclaredNodeStructure(n).declaredBy
                    .mergeAdjacent === n
                );
              })(e) ||
                (function (e) {
                  var t = e.getNextSibling();
                  K(t) && e.getListType() === t.getListType() && N(e, t);
                })(e),
              x(e),
              "check" === e.getListType())
            )
              for (var _t0 of e.getChildren()) X(_t0) && j(_t0);
          },
          children: [_z],
          extends: require("Lexical").ElementNode,
          generated: O,
          importDOM: require("Lexical").buildImportMap({
            ol: function ol() {
              return { conversion: D, priority: 0 };
            },
            ul: function ul() {
              return { conversion: D, priority: 0 };
            },
          }),
          json: F,
          mergeAdjacent: { by: ["listType"] },
        });
      };
      _proto.getTag = function getTag() {
        return this.getLatest().__tag;
      };
      _proto.setListType = function setListType(e) {
        var t = this.getWritable();
        return (
          (t.__listType = e),
          (t.__tag = "number" === e ? "ol" : "ul"),
          t
        );
      };
      _proto.getListType = function getListType() {
        return this.getLatest().__listType;
      };
      _proto.getStart = function getStart() {
        return this.getLatest().__start;
      };
      _proto.setStart = function setStart(e) {
        var t = this.getWritable();
        return ((t.__start = e), t);
      };
      _proto.createDOM = function createDOM(e, n) {
        var r = this.__tag,
          i = require("Lexical").$getDocument().createElement(r);
        return (
          1 !== this.__start && i.setAttribute("start", String(this.__start)),
          (i.__lexicalListType = this.__listType),
          R(i, e.theme, this),
          i
        );
      };
      _proto.updateDOM = function updateDOM(e, t, n) {
        return (
          e.__tag !== this.__tag ||
          e.__listType !== this.__listType ||
          (R(t, n.theme, this),
          e.__start !== this.__start &&
            t.setAttribute("start", String(this.__start)),
          !1)
        );
      };
      _proto.exportDOM = function exportDOM(e) {
        var n = this.createDOM(e._config, e);
        if (require("Lexical").isHTMLElement(n)) {
          (1 !== this.__start && n.setAttribute("start", String(this.__start)),
            "check" === this.__listType &&
              n.setAttribute("__lexicalListType", "check"));
          var _e12 = this.getDirection();
          _e12 && (n.dir = _e12);
        }
        return { element: n };
      };
      _proto.canBeEmpty = function canBeEmpty() {
        return !1;
      };
      _proto.INTERNAL_$afterStructureMerge =
        function INTERNAL_$afterStructureMerge(e, t) {
          S(e, t, !0);
        };
      _proto.INTERNAL_$afterStructureSplit =
        function INTERNAL_$afterStructureSplit(e, t) {
          if ("number" === this.getListType()) {
            var _n0 = e.getStart();
            for (var _e13 of t) X(_e13) && !K(_e13.getFirstChild()) && _n0++;
            this.setStart(_n0);
          }
        };
      _proto.canIndent = function canIndent() {
        return !1;
      };
      _proto.splice = function splice(e, n, r) {
        var i = r;
        for (var _e14 = 0; _e14 < r.length; _e14++) {
          var _n1 = r[_e14];
          if (!X(_n1)) {
            i === r && (i = [].concat(Array.from(r)));
            var _s8 = this.createListItemNode();
            (!require("Lexical").$isElementNode(_n1) || K(_n1) || _n1.isInline()
              ? _s8.append(_n1)
              : _s8.append.apply(_s8, Array.from(_n1.getChildren())),
              (i[_e14] = _s8));
          }
        }
        return _t$ElementNode.prototype.splice.call(this, e, n, i);
      };
      _proto.extractWithChild = function extractWithChild(e) {
        return X(e);
      };
      _proto.createListItemNode = function createListItemNode() {
        return V();
      };
      return P;
    })(_require_Lexical.ElementNode);
    function R(e, n, r) {
      var i = [],
        s = [],
        l = n.list;
      if (void 0 !== l) {
        var _e15 = l[r.__tag + "Depth"] || [],
          _n10 = o(r) - 1,
          _c = _n10 % _e15.length,
          _a = _e15[_c],
          _d = l[r.__tag];
        var _u;
        var _g = l.nested,
          _f = l.checklist;
        if (
          (void 0 !== _g && _g.list && (_u = _g.list),
          void 0 !== _d && i.push(_d),
          void 0 !== _f && "check" === r.__listType && i.push(_f),
          void 0 !== _a)
        ) {
          i.push.apply(
            i,
            Array.from(require("Lexical").normalizeClassNames(_a)),
          );
          for (var _n11 = 0; _n11 < _e15.length; _n11++)
            _n11 !== _c &&
              s.push.apply(
                s,
                Array.from(require("Lexical").normalizeClassNames(_e15[_n11])),
              );
        }
        if (void 0 !== _u) {
          var _e16 = require("Lexical").normalizeClassNames(_u);
          _n10 > 1
            ? i.push.apply(i, Array.from(_e16))
            : s.push.apply(s, Array.from(_e16));
        }
      }
      (s.length > 0 &&
        require("Lexical").removeClassNamesFromElement.apply(
          require("Lexical"),
          [e].concat(Array.from(s)),
        ),
        i.length > 0 &&
          require("Lexical").addClassNamesToElement.apply(
            require("Lexical"),
            [e].concat(Array.from(i)),
          ));
    }
    function D(e) {
      var n;
      if (
        (function (e) {
          return (
            require("Lexical").isHTMLElement(e) &&
            "ol" === e.nodeName.toLowerCase()
          );
        })(e)
      ) {
        var _t1 = e.start;
        n = w("number", _t1);
      } else
        n = (function (e) {
          if (
            "check" === e.getAttribute("__lexicallisttype") ||
            e.classList.contains("contains-task-list") ||
            "1" === e.getAttribute("data-is-checklist")
          )
            return !0;
          for (var _n12 of e.childNodes)
            if (
              require("Lexical").isHTMLElement(_n12) &&
              _n12.hasAttribute("aria-checked")
            )
              return !0;
          return !1;
        })(e)
          ? w("check")
          : w("bullet");
      return (
        require("Lexical").$setDirectionFromDOM(n, e),
        {
          after: function after(e) {
            return (function (e, t) {
              var n = t.createListItemNode.bind(t),
                r = [];
              for (var _t10 = 0; _t10 < e.length; _t10++) {
                var _i9 = e[_t10];
                if (X(_i9)) {
                  r.push(_i9);
                  var _e17 = _i9.getChildren();
                  _e17.length > 1 &&
                    _e17.forEach(function (e) {
                      K(e) && r.push(n().append(e));
                    });
                } else r.push(n().append(_i9));
              }
              return r;
            })(e, n);
          },
          node: n,
        }
      );
    }
    function w(e, n) {
      if (e === void 0) {
        e = "number";
      }
      if (n === void 0) {
        n = 1;
      }
      return require("Lexical").$applyNodeReplacement(new _P(e, n));
    }
    function K(e) {
      return e instanceof _P;
    }
    var W = _require_Lexical.createState("listTaskItem", {
        parse: function parse(e) {
          return "checked" === e || "unchecked" === e ? e : "";
        },
      }),
      B = _require_Lexical.nodeSchema()({
        checked: _require_Lexical.withAccessors(
          _require_Lexical.optional(_require_Lexical.booleanValue()),
          { setter: { field: "__checked" } },
        ),
        indent: _require_Lexical.withAccessors(
          _require_Lexical.numberValue(0, {
            clamp: !0,
            integer: !0,
            max: 128,
            min: 0,
          }),
          { derived: !0 },
        ),
        value: _require_Lexical.withField(_require_Lexical.numberValue(1), {
          derived: !0,
          field: "__value",
        }),
      });
    var _z = (function (_t$ElementNode2) {
      function z(e, t, n) {
        var _this2;
        if (e === void 0) {
          e = 1;
        }
        if (t === void 0) {
          t = void 0;
        }
        ((_this2 = _t$ElementNode2.call(this, n) || this),
          (_this2.__value = void 0 === e ? 1 : e),
          (_this2.__checked = t));
        return _this2;
      }
      babelHelpers.inheritsLoose(z, _t$ElementNode2);
      var _proto2 = z.prototype;
      _proto2.$config = function $config() {
        return this.config("listitem", {
          $transform: function $transform(e) {
            var n = e.getParent();
            if (K(n))
              ("check" !== n.getListType() &&
                null != e.getLatest().__checked &&
                e.setChecked(void 0),
                "check" === n.getListType() && j(e));
            else if (n) {
              var _r1 = e.createParentElementNode();
              K(_r1) || s(340);
              var _i0 = [e];
              for (var _n13 of ["previous", "next"]) {
                _i0.reverse();
                for (var _ref2 of require("Lexical").$getSiblingCaret(
                  e,
                  _n13,
                )) {
                  var _r10 = _ref2.origin;
                  if (!X(_r10)) break;
                  _i0.push(_r10);
                }
              }
              var _o5 = require("Lexical").INTERNAL_isNodeStructureEnforced(
                  require("Lexical").$getEditor(),
                ),
                _l3 = _o5
                  ? (function (e, n) {
                      var r = require("Lexical").$getSelection();
                      if (!require("Lexical").$isRangeSelection(r)) return null;
                      var i = e.getKey(),
                        s = n[0].getIndexWithinParent(),
                        o = [r.anchor, r.focus]
                          .filter(function (e) {
                            return "element" === e.type && e.key === i;
                          })
                          .map(function (e) {
                            return { offset: e.offset, point: e };
                          });
                      return 0 === o.length
                        ? null
                        : function (e) {
                            for (var _ref4 of o) {
                              var _e18 = _ref4.point;
                              var _t11 = _ref4.offset;
                              if (_t11 <= s) _e18.set(i, _t11, "element");
                              else if (_t11 < s + n.length) {
                                var _r11 = n[_t11 - s - 1];
                                _e18.set(
                                  _r11.getKey(),
                                  _r11.getChildrenSize(),
                                  "element",
                                );
                              } else
                                _e18.set(i, _t11 - n.length + 1, "element");
                            }
                          };
                    })(n, _i0)
                  : null;
              if (
                (e.insertBefore(_r1),
                _r1.splice(0, 0, _i0),
                null !== _l3 && _l3(_r1),
                _o5)
              )
                for (
                  var _e19 = n;
                  null !== _e19 &&
                  !require("Lexical").$isRootOrShadowRoot(_e19);
                  _e19 = _e19.getParent()
                )
                  _e19.markDirty();
              require("Lexical").$isRootOrShadowRoot(n) ||
                _o5 ||
                (require("Lexical").$insertNodeToNearestRootAtCaret(
                  _r1,
                  require("Lexical").$rewindSiblingCaret(
                    require("Lexical").$getSiblingCaret(_r1, "next"),
                  ),
                  {
                    $shouldSplit: function $shouldSplit() {
                      return !1;
                    },
                    removeEmptyDestination: !0,
                  },
                ),
                n.isEmpty() && n.isAttached() && n.remove());
            }
          },
          children: ["inline", _P],
          extends: require("Lexical").ElementNode,
          generated: M,
          importDOM: require("Lexical").buildImportMap({
            li: function li() {
              return { conversion: H, priority: 0 };
            },
          }),
          json: B,
        });
      };
      _proto2.createDOM = function createDOM(e) {
        var n = require("Lexical").$getDocument().createElement("li");
        return (this.updateListItemDOM(null, n, e), n);
      };
      _proto2.updateListItemDOM = function updateListItemDOM(e, n, r) {
        (!(function (e, t) {
          var n = q(t);
          void 0 === n || K(t.getFirstChild())
            ? (e.removeAttribute("role"),
              e.removeAttribute("tabIndex"),
              e.removeAttribute("aria-checked"))
            : (e.setAttribute("role", "checkbox"),
              e.setAttribute("tabIndex", "-1"),
              e.setAttribute("aria-checked", n ? "true" : "false"));
        })(n, this),
          (n.value = this.__value),
          (function (e, n, r) {
            var i = n.list;
            if (!i) return;
            var s = i.listitem,
              o = i.nested && i.nested.listitem,
              l = q(r),
              c = r.getChildren().some(function (e) {
                return K(e);
              }),
              a = [];
            (void 0 !== i.listitemChecked && a.push(i.listitemChecked),
              void 0 !== i.listitemUnchecked && a.push(i.listitemUnchecked),
              void 0 !== o &&
                a.push.apply(
                  a,
                  Array.from(require("Lexical").normalizeClassNames(o)),
                ),
              a.length > 0 &&
                require("Lexical").removeClassNamesFromElement.apply(
                  require("Lexical"),
                  [e].concat(Array.from(a)),
                ));
            var d = [];
            if (
              (void 0 !== s &&
                d.push.apply(
                  d,
                  Array.from(require("Lexical").normalizeClassNames(s)),
                ),
              void 0 !== l)
            ) {
              var _e20 = l ? i.listitemChecked : i.listitemUnchecked;
              void 0 !== _e20 && d.push(_e20);
            }
            (void 0 !== o &&
              c &&
              d.push.apply(
                d,
                Array.from(require("Lexical").normalizeClassNames(o)),
              ),
              d.length > 0 &&
                require("Lexical").addClassNamesToElement.apply(
                  require("Lexical"),
                  [e].concat(Array.from(d)),
                ));
          })(n, r.theme, this));
        var i = e ? e.__style : "",
          s = this.__style;
        (i !== s && require("Lexical").setDOMStyleFromCSS(n.style, s, i),
          (function (e, n, r) {
            var i = n.__textStyle,
              s = r ? r.__textStyle : "";
            if (null !== r && s === i) return;
            var o = require("Lexical").getStyleObjectFromCSS(i);
            for (var _t12 in o)
              e.style.setProperty("--listitem-marker-" + _t12, o[_t12]);
            if ("" !== s)
              for (var _n14 in require("Lexical").getStyleObjectFromCSS(s))
                _n14 in o ||
                  e.style.removeProperty("--listitem-marker-" + _n14);
          })(n, this, e));
      };
      _proto2.updateDOM = function updateDOM(e, t, n) {
        var r = t;
        return (this.updateListItemDOM(e, r, n), !1);
      };
      _proto2.exportDOM = function exportDOM(e) {
        var n = this.createDOM(e._config),
          r = this.getFormatType();
        r && (n.style.textAlign = r);
        var i = this.getDirection();
        return (
          i && (n.dir = i),
          a(this)
            ? {
                after: function after(e) {
                  if (require("Lexical").isHTMLElement(e)) {
                    var _n15 = e.previousElementSibling;
                    if (
                      require("Lexical").isHTMLElement(_n15) &&
                      "LI" === _n15.nodeName
                    ) {
                      for (; e.firstChild; ) _n15.append(e.firstChild);
                      e.remove();
                    }
                  }
                  return e;
                },
                element: n,
              }
            : { element: n }
        );
      };
      _proto2.append = function append() {
        for (var _n16 = 0; _n16 < arguments.length; _n16++) {
          var _r12 =
            _n16 < 0 || arguments.length <= _n16 ? undefined : arguments[_n16];
          if (
            require("Lexical").$isElementNode(_r12) &&
            this.canMergeWith(_r12)
          ) {
            var _e21 = _r12.getChildren();
            (this.append.apply(this, Array.from(_e21)), _r12.remove());
          } else _t$ElementNode2.prototype.append.call(this, _r12);
        }
        return this;
      };
      _proto2.replace = function replace(e, n) {
        if (X(e)) return _t$ElementNode2.prototype.replace.call(this, e);
        this.setIndent(0);
        var r = this.getParentOrThrow();
        if (!K(r)) return e;
        if (r.__first === this.getKey()) r.insertBefore(e);
        else if (r.__last === this.getKey()) r.insertAfter(e);
        else {
          var _n17 = require("Lexical").$copyNode(r);
          var _i1 = this.getNextSibling();
          for (; _i1; ) {
            var _e22 = _i1;
            ((_i1 = _i1.getNextSibling()), _n17.append(_e22));
          }
          (r.insertAfter(e), e.insertAfter(_n17));
        }
        var i = this.__key;
        var o = 0;
        if (
          (n &&
            (require("Lexical").$isElementNode(e) || s(139),
            (o = e.getChildrenSize()),
            e.splice(o, 0, this.getChildren())),
          n && require("Lexical").$isElementNode(e))
        ) {
          var _n18 = require("Lexical").$getSelection();
          if (require("Lexical").$isRangeSelection(_n18))
            for (var _t13 of _n18.getStartEndPoints())
              _t13.key === i &&
                "element" === _t13.type &&
                _t13.set(e.getKey(), o + _t13.offset, "element");
        }
        return (this.remove(), 0 === r.getChildrenSize() && r.remove(), e);
      };
      _proto2.insertAfter = function insertAfter(e, n) {
        if (n === void 0) {
          n = !0;
        }
        var r = this.getParentOrThrow();
        if ((K(r) || s(39), X(e)))
          return _t$ElementNode2.prototype.insertAfter.call(this, e, n);
        var i = this.getNextSiblings();
        if ((r.insertAfter(e, n), 0 !== i.length)) {
          var _s9 = require("Lexical").$copyNode(r),
            _o6 = i[0];
          ("number" === _s9.getListType() && X(_o6) && _s9.setStart(d(0, _o6)),
            i.forEach(function (e) {
              return _s9.append(e);
            }),
            e.insertAfter(_s9, n));
        }
        return e;
      };
      _proto2.remove = function remove(e) {
        var t = this.getPreviousSibling(),
          n = this.getNextSibling();
        (_t$ElementNode2.prototype.remove.call(this, e),
          t &&
            n &&
            a(t) &&
            a(n) &&
            t.getFirstChild().getListType() ===
              n.getFirstChild().getListType() &&
            (N(t.getFirstChild(), n.getFirstChild()), n.remove()));
      };
      _proto2.resetOnCopyNodeFrom = function resetOnCopyNodeFrom(e) {
        (_t$ElementNode2.prototype.resetOnCopyNodeFrom.call(this, e),
          e.getChecked() && this.setChecked(!1),
          "checked" === require("Lexical").$getState(e, W) &&
            require("Lexical").$setState(this, W, "unchecked"));
      };
      _proto2.insertNewAfter = function insertNewAfter(e, n) {
        if (n === void 0) {
          n = !0;
        }
        var r = require("Lexical").$copyNode(this);
        return (this.insertAfter(r, n), r);
      };
      _proto2.collapseAtStart = function collapseAtStart(e) {
        var _t$$createParagraphNo;
        if (a(this)) return !1;
        var n = this.getParentOrThrow();
        if (X(n.getParentOrThrow())) return (v(this), !0);
        var r = (_t$$createParagraphNo =
            require("Lexical").$createParagraphNode()).append.apply(
            _t$$createParagraphNo,
            Array.from(this.getChildren()),
          ),
          i = this.getNextSiblings();
        if (i.length > 0) {
          var _e23 = require("Lexical").$copyNode(n);
          (_e23.append.apply(_e23, Array.from(i)), n.insertAfter(_e23));
        }
        return (
          n.insertAfter(r),
          this.remove(),
          0 === n.getChildrenSize() && n.remove(),
          r.selectStart(),
          !0
        );
      };
      _proto2.getValue = function getValue() {
        return this.getLatest().__value;
      };
      _proto2.setValue = function setValue(e) {
        var t = this.getWritable();
        return ((t.__value = e), t);
      };
      _proto2.getChecked = function getChecked() {
        var e = this.getLatest();
        var t;
        var n = this.getParent();
        return (
          K(n) && (t = n.getListType()),
          "check" === t ? Boolean(e.__checked) : void 0
        );
      };
      _proto2.setChecked = function setChecked(e) {
        var t = this.getWritable();
        return ((t.__checked = e), t);
      };
      _proto2.toggleChecked = function toggleChecked() {
        var e = this.getWritable();
        return e.setChecked(!e.__checked);
      };
      _proto2.getIndent = function getIndent() {
        var e = this.getParent();
        if (null === e || !this.isAttached()) return this.getLatest().__indent;
        var t = e.getParentOrThrow(),
          n = 0;
        for (; X(t); ) ((t = t.getParentOrThrow().getParentOrThrow()), n++);
        return n;
      };
      _proto2.setIndent = function setIndent(e) {
        ("number" != typeof e && s(117), (e = Math.floor(e)) >= 0 || s(199));
        var t = e;
        var n = this.getIndent();
        for (; n !== t; ) n < t ? (L(this), n++) : (v(this), n--);
        return this;
      };
      _proto2.canInsertAfter = function canInsertAfter(e) {
        return X(e);
      };
      _proto2.canReplaceWith = function canReplaceWith(e) {
        return X(e);
      };
      _proto2.canMergeWith = function canMergeWith(e) {
        return X(e) || require("Lexical").$isParagraphNode(e);
      };
      _proto2.INTERNAL_$liftsFromStructure =
        function INTERNAL_$liftsFromStructure(e, n) {
          if (n === void 0) {
            n = !1;
          }
          if (!K(e) || this.getChildrenSize() <= 1) return !1;
          if (n) return !0;
          var r = require("Lexical").$getEditor(),
            i = this.getKey();
          return (
            !r.getEditorState()._nodeMap.has(i) || r._cloneNotNeeded.has(i)
          );
        };
      _proto2.extractWithChild = function extractWithChild(e, n) {
        if (!require("Lexical").$isRangeSelection(n)) return !1;
        var r = n.anchor.getNode(),
          i = n.focus.getNode();
        return (
          this.isParentOf(r) &&
          this.isParentOf(i) &&
          this.getTextContent().length === n.getTextContent().length
        );
      };
      _proto2.isParentRequired = function isParentRequired() {
        return !0;
      };
      _proto2.createParentElementNode = function createParentElementNode() {
        return w("bullet");
      };
      _proto2.canMergeWhenEmpty = function canMergeWhenEmpty() {
        return !0;
      };
      return z;
    })(_require_Lexical.ElementNode);
    function H(e) {
      if (e.classList.contains("task-list-item"))
        for (var _t14 of e.children)
          if ("INPUT" === _t14.tagName) return Y(_t14);
      if (e.classList.contains("joplin-checkbox"))
        for (var _t15 of e.children)
          if (
            _t15.classList.contains("checkbox-wrapper") &&
            _t15.children.length > 0 &&
            "INPUT" === _t15.children[0].tagName
          )
            return Y(_t15.children[0]);
      var n = e.getAttribute("aria-checked"),
        r = V("true" === n || ("false" !== n && void 0));
      return (
        require("Lexical").$setFormatFromDOM(r, e),
        {
          after: U.bind(null, r),
          node: require("Lexical").$setDirectionFromDOM(r, e),
        }
      );
    }
    function Y(e) {
      if ("checkbox" !== e.getAttribute("type")) return { node: null };
      var t = V(e.hasAttribute("checked"));
      return { after: U.bind(null, t), node: t };
    }
    function U(e, n) {
      var r = n[0];
      return 1 === n.length &&
        require("Lexical").$isParagraphNode(r) &&
        !e.getFormatType() &&
        r.getFormatType()
        ? (e.setFormat(r.getFormatType()), r.getChildren())
        : n;
    }
    function V(e) {
      return require("Lexical").$applyNodeReplacement(new _z(void 0, e));
    }
    function q(e) {
      var n = e.getChecked();
      if (void 0 !== n || !K(e.getParent())) return n;
      var r = require("Lexical").$getState(e, W);
      return "" === r ? void 0 : "checked" === r;
    }
    function j(e) {
      var n = require("Lexical").$getState(e, W);
      "" !== n &&
        (null == e.getLatest().__checked && e.setChecked("checked" === n),
        require("Lexical").$setState(e, W, ""));
    }
    function J(e, n) {
      var r = e.getParent();
      return K(r) && "check" === r.getListType()
        ? e.setChecked(n)
        : (null != e.getLatest().__checked && e.setChecked(void 0),
          require("Lexical").$setState(
            e,
            W,
            void 0 === n ? "" : n ? "checked" : "unchecked",
          ));
    }
    function X(e) {
      return e instanceof _z;
    }
    var G = new Set([
        " ",
        "Alt",
        "ArrowDown",
        "ArrowLeft",
        "ArrowUp",
        "CapsLock",
        "Control",
        "Escape",
        "Meta",
        "Shift",
      ]),
      Z = _require_Lexical.createCommand("INSERT_CHECK_LIST_COMMAND");
    function Q(e, n) {
      var r = (n && n.disableTakeFocusOnClick) || !1,
        i =
          "boolean" == typeof r
            ? function () {
                return r;
              }
            : r.peek.bind(r),
        s = function s(e) {
          var n = e.target;
          if (!require("Lexical").isHTMLElement(n)) return !1;
          var r = n.__lexicalCheckListLastHandled;
          return void 0 !== r && e.timeStamp - r < 500;
        },
        o = new Map();
      var l = "none";
      var c = function c(e) {
          l = (function (e, t) {
            var n = !1;
            return (
              ee(e, function () {
                ((n = !0), e.preventDefault(), t && e.stopPropagation());
              }),
              n
            );
          })(e, i())
            ? "checkMark"
            : "content";
        },
        a = function a() {
          ("content" === l && ne(e), (l = "none"));
        };
      return require("Lexical").mergeRegister(
        e.registerCommand(
          Z,
          function () {
            return (h("check"), !0);
          },
          require("Lexical").COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          require("Lexical").KEY_ARROW_DOWN_COMMAND,
          function (t) {
            return oe(t, e, !1);
          },
          require("Lexical").COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          require("Lexical").KEY_ARROW_UP_COMMAND,
          function (t) {
            return oe(t, e, !0);
          },
          require("Lexical").COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          require("Lexical").KEY_ESCAPE_COMMAND,
          function () {
            if (null != se(e)) {
              var _t16 = e.getRootElement();
              return (null != _t16 && _t16.focus(), !0);
            }
            return !1;
          },
          require("Lexical").COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          require("Lexical").KEY_SPACE_COMMAND,
          function (n) {
            var r = se(e);
            return !(
              null == r ||
              !e.isEditable() ||
              (e.update(function () {
                var e = require("Lexical").$getNearestNodeFromDOMNode(r);
                X(e) && (n.preventDefault(), re(e));
              }),
              0)
            );
          },
          require("Lexical").COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          require("Lexical").KEY_ARROW_LEFT_COMMAND,
          function (n) {
            return null !== se(e)
              ? (ne(e), !1)
              : e.read("latest", function () {
                  var r = require("Lexical").$getSelection();
                  if (
                    require("Lexical").$isRangeSelection(r) &&
                    r.isCollapsed()
                  ) {
                    var _i10 = r.anchor,
                      _s0 = "element" === _i10.type;
                    if (_s0 || 0 === _i10.offset) {
                      var _r13 = _i10.getNode(),
                        _o7 = require("Lexical").$findMatchingParent(
                          _r13,
                          function (e) {
                            return (
                              require("Lexical").$isElementNode(e) &&
                              !e.isInline()
                            );
                          },
                        );
                      if (
                        X(_o7) &&
                        K(_o7.getParent()) &&
                        void 0 !== q(_o7) &&
                        (_s0 || _o7.getFirstDescendant() === _r13)
                      ) {
                        var _r14 = e.getElementByKey(_o7.__key);
                        if (
                          null != _r14 &&
                          require("Lexical").getActiveElement(_r14) !== _r14
                        )
                          return (_r14.focus(), n.preventDefault(), !0);
                      }
                    }
                  }
                  return !1;
                });
          },
          require("Lexical").COMMAND_PRIORITY_LOW,
        ),
        e.registerRootListener(function (n) {
          if (null !== n)
            return require("Lexical").mergeRegister(
              require("Lexical").registerEventListeners(n, {
                click: function click(e) {
                  (a(),
                    (function (e) {
                      s(e) || te(e, i());
                    })(e));
                },
                pointerup: function pointerup(e) {
                  (a(),
                    (function (e) {
                      if ("touch" !== e.pointerType) return;
                      var n = o.get(e.pointerId);
                      (o["delete"](e.pointerId),
                        (void 0 !== n &&
                          (Math.abs(e.clientX - n.x) > 10 ||
                            Math.abs(e.clientY - n.y) > 10)) ||
                          s(e) ||
                          ((function (e) {
                            var n = e.target;
                            require("Lexical").isHTMLElement(n) &&
                              (n.__lexicalCheckListLastHandled = e.timeStamp);
                          })(e),
                          te(e, i())));
                    })(e));
                },
              }),
              require("Lexical").registerEventListeners(
                n,
                {
                  beforeinput: function beforeinput() {
                    return ne(e);
                  },
                  focusin: function focusin() {
                    require("Lexical").IS_FIREFOX && "content" === l && ne(e);
                  },
                  keydown: function keydown(n) {
                    (!G.has(n.key) ||
                      (" " === n.key &&
                        (function (e) {
                          var n = se(e);
                          return (
                            null !== n &&
                            e.read("latest", function () {
                              var e =
                                  require("Lexical").$getNearestNodeFromDOMNode(
                                    n,
                                  ),
                                r = require("Lexical").$getSelection();
                              return (
                                !(
                                  !X(e) ||
                                  !require("Lexical").$isRangeSelection(r)
                                ) &&
                                [r.anchor, r.focus].some(function (t) {
                                  var n = t.getNode();
                                  return !n.is(e) && !e.isParentOf(n);
                                })
                              );
                            })
                          );
                        })(e))) &&
                      ne(e);
                  },
                  mousedown: c,
                  pointercancel: function pointercancel(e) {
                    o["delete"](e.pointerId);
                  },
                  pointerdown: function pointerdown(e) {
                    ((function (e) {
                      "touch" === e.pointerType &&
                        o.set(e.pointerId, { x: e.clientX, y: e.clientY });
                    })(e),
                      c(e));
                  },
                },
                { capture: !0 },
              ),
              require("Lexical").registerEventListener(n, "touchstart", c, {
                capture: !0,
                passive: !1,
              }),
            );
        }),
      );
    }
    function ee(n, r) {
      var i = n.target;
      if (!require("Lexical").isHTMLElement(i)) return;
      var s = i.firstChild;
      if (
        require("Lexical").isHTMLElement(s) &&
        ("UL" === s.tagName || "OL" === s.tagName)
      )
        return;
      if (!ie(i)) return;
      var o = null,
        l = null;
      if ("clientX" in n) o = n.clientX;
      else if ("touches" in n) {
        var _e24 = n.touches;
        _e24.length > 0 && ((o = _e24[0].clientX), (l = "touch"));
      }
      if (null == o) return;
      var c = i.getBoundingClientRect(),
        a = o / require("LexicalUtils").calculateZoomLevel(i),
        d = i.ownerDocument.defaultView,
        u = d ? d.getComputedStyle(i, "::before") : { width: "0px" },
        g = parseFloat(u.width),
        f =
          "touch" === l || ("pointerType" in n && "touch" === n.pointerType)
            ? 32
            : 0;
      ("rtl" === i.dir
        ? a < c.right + f && a > c.right - g - f
        : a > c.left - f && a < c.left + g + f) && r();
    }
    function te(e, n) {
      ee(e, function () {
        if (require("Lexical").isHTMLElement(e.target)) {
          var _r15 = e.target,
            _i11 = require("Lexical").getNearestEditorFromDOMNode(_r15);
          null != _i11 &&
            _i11.isEditable() &&
            _i11.update(function () {
              var e = require("Lexical").$getNearestNodeFromDOMNode(_r15);
              X(e) &&
                (n
                  ? (require("Lexical").$addUpdateTag(
                      require("Lexical").SKIP_SELECTION_FOCUS_TAG,
                    ),
                    require("Lexical").$addUpdateTag(
                      require("Lexical").SKIP_DOM_SELECTION_TAG,
                    ))
                  : _r15.focus(),
                re(e));
            });
        }
      });
    }
    function ne(e) {
      var n = e.getRootElement(),
        r = n ? require("Lexical").getActiveElement(n) : null;
      null !== n &&
        require("Lexical").isHTMLElement(r) &&
        ie(r) &&
        n.focus({ preventScroll: !0 });
    }
    function re(e) {
      var t = e.getParent();
      K(t) && "check" === t.getListType() ? e.toggleChecked() : J(e, !q(e));
    }
    function ie(e) {
      var t = e.parentNode;
      return (
        "LI" === e.tagName &&
        null != t &&
        ("check" === t.__lexicalListType || e.hasAttribute("aria-checked"))
      );
    }
    function se(e) {
      var n = e.getRootElement(),
        r = n ? require("Lexical").getActiveElement(n) : null;
      return require("Lexical").isHTMLElement(r) && ie(r) ? r : null;
    }
    function oe(e, n, r) {
      var i = se(n);
      if (null != i) {
        var _s1 = null;
        n.update(
          function () {
            var o = require("Lexical").$getNearestNodeFromDOMNode(i);
            if (!X(o)) return;
            var l = (function (e, t) {
              var n = t ? e.getPreviousSibling() : e.getNextSibling(),
                r = e;
              for (; null == n && X(r); )
                ((r = r.getParentOrThrow().getParent()),
                  null != r &&
                    (n = t ? r.getPreviousSibling() : r.getNextSibling()));
              for (; X(n); ) {
                var _e25 = t ? n.getLastChild() : n.getFirstChild();
                if (!K(_e25)) return n;
                n = t ? _e25.getLastChild() : _e25.getFirstChild();
              }
              return null;
            })(o, r);
            null != l &&
              (l.selectStart(),
              null != n.getElementByKey(l.__key) &&
                (e.preventDefault(), (_s1 = l.__key)));
          },
          {
            onUpdate: function onUpdate() {
              var e = null === _s1 ? null : n.getElementByKey(_s1);
              null != e && e.focus();
            },
          },
        );
      }
      return !1;
    }
    function le(e, t) {
      var n = [];
      for (var _r16 of e)
        if (X(_r16)) {
          n.push(_r16);
          var _e26 = _r16.getChildren();
          if (_e26.length > 1)
            for (var _r17 of _e26)
              K(_r17) && n.push(t.createListItemNode().append(_r17));
        } else n.push(t.createListItemNode().append(_r16));
      return n;
    }
    var ce = {
      $import: function $import(e, n) {
        var r;
        var s;
        return (
          (r = require("LexicalHtml").isElementOfTag(n, "ol")
            ? w("number", n.start)
            : (s = n).matches(
                  '[__lexicallisttype="check"], .contains-task-list, [data-is-checklist="1"]',
                ) || null !== s.querySelector(":scope > [aria-checked]")
              ? w("check")
              : w("bullet")),
          require("Lexical").$setDirectionFromDOM(r, n),
          [
            r.splice(
              0,
              0,
              require("LexicalHtml").$propagateTextAlignToBlockChildren(
                le(e.$importChildren(n), r),
                n,
              ),
            ),
          ]
        );
      },
      match: (_require_LexicalHtml = require("LexicalHtml")).sel.tag(
        "ol",
        "ul",
      ),
      name: "@lexical/list/list",
    };
    function ae(e, n) {
      if (1 !== n.length) return n;
      var r = n[0];
      return require("Lexical").$isParagraphNode(r) &&
        !e.getFormatType() &&
        r.getFormatType()
        ? (e.setFormat(r.getFormatType()), r.getChildren())
        : n;
    }
    function de(e) {
      var n = function n(e) {
        return require("LexicalHtml").$isBlockLevel(e) && !K(e);
      };
      if (!e.some(n)) return e;
      var r = [];
      var s = [];
      var o = function o() {
          s.length > 0 && (r.push({ lifted: !1, nodes: s }), (s = []));
        },
        l = require("Lexical").INTERNAL_isNodeStructureEnforced(
          require("Lexical").$getEditor(),
        );
      for (var _i12 of e)
        n(_i12)
          ? (o(),
            r.push(
              require("Lexical").$isElementNode(_i12)
                ? { lifted: !1, nodes: _i12.getChildren() }
                : { lifted: l, nodes: [_i12] },
            ))
          : s.push(_i12);
      o();
      var c = [];
      for (var _e27 = 0; _e27 < r.length; _e27++)
        (c.length > 0 &&
          !r[_e27 - 1].lifted &&
          !r[_e27].lifted &&
          c.push(require("Lexical").$createLineBreakNode()),
          c.push.apply(c, Array.from(r[_e27].nodes)));
      return c;
    }
    var ue = {
      $import: function $import(e, n) {
        var r = n.getAttribute("aria-checked"),
          i = V("true" === r || ("false" !== r && void 0));
        return (
          require("Lexical").$setFormatFromDOM(i, n),
          require("Lexical").$setDirectionFromDOM(i, n),
          [i.splice(0, 0, de(ae(i, e.$importChildren(n))))]
        );
      },
      match: _require_LexicalHtml.sel.tag("li"),
      name: "@lexical/list/li",
    };
    function ge(e, n, r) {
      var s = require("LexicalHtml").isElementOfTag(r, "input")
        ? r
        : r.querySelector('input[type="checkbox"]');
      if (!s || "checkbox" !== s.getAttribute("type")) return [];
      var o = V(s.hasAttribute("checked"));
      return (
        require("Lexical").$setFormatFromDOM(o, n),
        require("Lexical").$setDirectionFromDOM(o, n),
        [o.splice(0, 0, de(ae(o, e.$importChildren(n))))]
      );
    }
    var fe = {
        $accepts: function $accepts(e) {
          return X(e) || K(e);
        },
        $packageRun: function $packageRun(e) {
          return [V().splice(0, 0, e)];
        },
        name: "ListSchema",
      },
      he = [
        {
          $import: function $import(e, t, n) {
            var r = t.querySelector(':scope > input[type="checkbox"]');
            return r ? ge(e, t, r) : n();
          },
          match: _require_LexicalHtml.sel.tag("li").classAll("task-list-item"),
          name: "@lexical/list/li-task-list-item",
        },
        {
          $import: function $import(e, t, n) {
            var r = t.querySelector(":scope > .checkbox-wrapper");
            if (!r) return n();
            var i = r.querySelector(':scope > input[type="checkbox"]');
            return i ? ge(e, t, i) : n();
          },
          match: _require_LexicalHtml.sel.tag("li").classAll("joplin-checkbox"),
          name: "@lexical/list/li-joplin-checkbox",
        },
        ce,
        ue,
      ],
      pe = _require_Lexical.createCommand("UPDATE_LIST_START_COMMAND"),
      me = _require_Lexical.createCommand("INSERT_UNORDERED_LIST_COMMAND"),
      _e = _require_Lexical.createCommand("INSERT_ORDERED_LIST_COMMAND"),
      ye = _require_Lexical.createCommand("REMOVE_LIST_COMMAND");
    function Ne(e, n) {
      var _require_Lexical;
      return (_require_Lexical = require("Lexical")).mergeRegister(
        e.registerCommand(
          _e,
          function () {
            return (h("number"), !0);
          },
          _require_Lexical.COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          pe,
          function (e) {
            var n = e.listNodeKey,
              r = e.newStart,
              i = require("Lexical").$getNodeByKey(n);
            return (
              !!K(i) &&
              ("number" === i.getListType() && (i.setStart(r), x(i)), !0)
            );
          },
          _require_Lexical.COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          me,
          function () {
            return (h("bullet"), !0);
          },
          _require_Lexical.COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          ye,
          function () {
            return (T(), !0);
          },
          _require_Lexical.COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          _require_Lexical.INSERT_PARAGRAPH_COMMAND,
          function () {
            return $(!(!n || !n.restoreNumbering));
          },
          _require_Lexical.COMMAND_PRIORITY_LOW,
        ),
        e.registerCommand(
          _require_Lexical.KEY_BACKSPACE_COMMAND,
          function (e) {
            var n = require("Lexical").$getSelection();
            if (!require("Lexical").$isRangeSelection(n) || !n.isCollapsed())
              return !1;
            var r = n.anchor;
            if (0 !== r.offset) return !1;
            var i = r.getNode();
            for (; !X(i); ) {
              if (null !== i.getPreviousSibling()) return !1;
              var _e28 = i.getParent();
              if (null === _e28) return !1;
              i = _e28;
            }
            return !(!X(i) || !i.collapseAtStart(n) || (e.preventDefault(), 0));
          },
          _require_Lexical.COMMAND_PRIORITY_BEFORE_EDITOR,
        ),
        e.registerNodeTransform(_z, function (e) {
          var n = e.getFirstChild();
          if (n) {
            if (require("Lexical").$isTextNode(n)) {
              var _t17 = n.getStyle(),
                _r18 = n.getFormat();
              (e.getTextStyle() !== _t17 && e.setTextStyle(_t17),
                e.getTextFormat() !== _r18 && e.setTextFormat(_r18));
            }
          } else {
            var _n19 = require("Lexical").$getSelection();
            require("Lexical").$isRangeSelection(_n19) &&
              (_n19.style !== e.getTextStyle() ||
                _n19.format !== e.getTextFormat()) &&
              _n19.isCollapsed() &&
              e.is(_n19.anchor.getNode()) &&
              e.setTextStyle(_n19.style).setTextFormat(_n19.format);
          }
        }),
        e.registerNodeTransform(_require_Lexical.TextNode, function (e) {
          var t = e.getParent();
          if (X(t) && e.is(t.getFirstChild())) {
            var _n20 = e.getStyle(),
              _r19 = e.getFormat();
            (_n20 === t.getTextStyle() && _r19 === t.getTextFormat()) ||
              t.setTextStyle(_n20).setTextFormat(_r19);
          }
        }),
      );
    }
    function Ce(e) {
      var n = function n(e) {
        var n = e.getParent();
        if (K(e.getFirstChild()) || !K(n)) return;
        var r = require("Lexical").$findMatchingParent(e, function (e) {
          return X(e) && K(e.getParent()) && X(e.getPreviousSibling());
        });
        if (null === r && e.getIndent() > 0) e.setIndent(0);
        else if (X(r)) {
          var _t18 = r.getPreviousSibling();
          if (X(_t18)) {
            var _r20 = (function (e) {
                var t = e,
                  n = t.getFirstChild();
                for (; K(n); ) {
                  var _e29 = n.getLastChild();
                  if (!X(_e29)) break;
                  ((t = _e29), (n = t.getFirstChild()));
                }
                return t;
              })(_t18),
              _i13 = _r20.getParent();
            if (K(_i13)) {
              var _t19 = o(_i13);
              _t19 + 1 < o(n) && e.setIndent(_t19);
            }
          }
        }
      };
      return e.registerNodeTransform(_P, function (e) {
        var t = [e];
        for (; t.length > 0; ) {
          var _e30 = t.shift();
          if (K(_e30))
            for (var _r21 of _e30.getChildren())
              if (X(_r21)) {
                n(_r21);
                var _e31 = _r21.getFirstChild();
                K(_e31) && t.push(_e31);
              }
        }
      });
    }
    var Se = {
        build: function build(e, t, n) {
          return require("LexicalExtensionNamedSignals").namedSignals(t);
        },
        config: { hasStrictIndent: !1, shouldPreserveNumbering: !1 },
        dependencies: [
          _require_LexicalHtml.CoreImportExtension,
          [_require_LexicalHtml.DOMImportExtension, { rules: he }],
        ],
        name: "@lexical/list/List",
        nodes: function nodes() {
          return [_P, _z];
        },
        register: function register(e, r, i) {
          var s = i.getOutput();
          return require("Lexical").mergeRegister(
            require("LexicalExtensionSignals").effect(function () {
              return Ne(e, {
                restoreNumbering: s.shouldPreserveNumbering.value,
              });
            }),
            require("LexicalExtensionSignals").effect(function () {
              return s.hasStrictIndent.value ? Ce(e) : void 0;
            }),
          );
        },
      },
      Te = {
        build: function build(e, t) {
          return require("LexicalExtensionNamedSignals").namedSignals(t);
        },
        config: { disableTakeFocusOnClick: !1 },
        dependencies: [Se],
        name: "@lexical/list/CheckList",
        register: function register(e, t, n) {
          return Q(e, n.getOutput());
        },
      },
      xe = /^MsoListParagraph(CxSp(First|Middle|Last))?$/,
      Le = /^[A-Za-z0-9]+[.)]/,
      ve = /Microsoft Word/i,
      $e = "data-mso-list";
    function ke(e) {
      var t = (e.getAttribute($e) || "").match(/level(\d+)/);
      return t ? parseInt(t[1], 10) : 1;
    }
    function Ee(e) {
      return e.querySelector("span[" + $e + '="Ignore"]');
    }
    function be(e) {
      var t = Ee(e);
      return t ? (t.textContent || "").trim() : "";
    }
    function Oe(e) {
      return Le.test(e) ? "number" : "bullet";
    }
    function Ae(e) {
      var t = Ee(e);
      if (!t) return;
      var n = t;
      for (
        ;
        n.parentElement &&
        n.parentElement !== e &&
        "SPAN" === n.parentElement.nodeName;
      )
        n = n.parentElement;
      n.remove();
    }
    function Me(e) {
      return require("Lexical").isHTMLElement(e) && xe.test(e.className);
    }
    function Ie(e, t) {
      var n = w(Oe(t[0].marker)),
        r = [{ level: t[0].level, list: n }];
      for (var _n21 of t) {
        for (; r.length > 1 && r[r.length - 1].level > _n21.level; ) r.pop();
        if (_n21.level > r[r.length - 1].level) {
          var _e32 = w(Oe(_n21.marker));
          (r[r.length - 1].list.append(V().append(_e32)),
            r.push({ level: _n21.level, list: _e32 }));
        }
        (Ae(_n21.el),
          r[r.length - 1].list.append(
            V().splice(
              0,
              0,
              e.$importChildren(_n21.el, {
                schema: require("LexicalHtml").InlineSchema,
              }),
            ),
          ));
      }
      return n;
    }
    var Fe = _require_LexicalHtml.createImportState(
        "@lexical/list/word-consumed-list-items",
        function () {
          return null;
        },
      ),
      Pe = {
        $import: function $import(e, t) {
          var n = e.session.get(Fe);
          if (
            (null === n && ((n = new WeakSet()), e.session.set(Fe, n)),
            n.has(t))
          )
            return [];
          var r = [];
          var i = t;
          for (
            ;
            i &&
            Me(i) &&
            (n.add(i),
            r.push({ el: i, level: ke(i), marker: be(i) }),
            !i.classList.contains("MsoListParagraphCxSpLast") &&
              "MsoListParagraph" !== i.className);
          )
            i = i.nextElementSibling;
          return [Ie(e, r)];
        },
        match: _require_LexicalHtml.sel
          .tag("p")
          .classAny(
            "MsoListParagraph",
            "MsoListParagraphCxSpFirst",
            "MsoListParagraphCxSpMiddle",
            "MsoListParagraphCxSpLast",
          ),
        name: "@lexical/list/word-list-paragraph",
      },
      Re = {
        $import: function $import() {
          return [];
        },
        match: _require_LexicalHtml.sel.tag("o:p"),
        name: "@lexical/list/word-o-p",
      },
      De = _require_LexicalHtml.defineOverlayRules([Re, Pe]),
      we = {
        dependencies: [
          Se,
          [
            _require_LexicalHtml.DOMImportExtension,
            {
              preprocess: [
                function (e, n, r) {
                  var s = e.querySelector('meta[name="Generator"]');
                  if (s && ve.test(s.getAttribute("content") || "")) {
                    for (var _n22 of Array.from(
                      e.querySelectorAll('[style*="mso-list"]'),
                    )) {
                      var _e33 = require("Lexical").getStyleObjectFromCSS(
                        _n22.getAttribute("style") || "",
                      )["mso-list"];
                      _e33 && _n22.setAttribute($e, _e33);
                    }
                    n.session.update(
                      require("LexicalHtml").ImportOverlays,
                      function (e) {
                        return [].concat(Array.from(e), [De]);
                      },
                    );
                  }
                  r();
                },
              ],
            },
          ],
        ],
        name: "@lexical/list/WordListImport",
      };
    ((exports.$createListItemNode = V),
      (exports.$createListNode = w),
      (exports.$getListDepth = o),
      (exports.$getTaskListItemChecked = q),
      (exports.$handleListInsertParagraph = $),
      (exports.$insertList = h),
      (exports.$isListItemNode = X),
      (exports.$isListNode = K),
      (exports.$removeList = T),
      (exports.$setTaskListItemChecked = J),
      (exports.CheckListExtension = Te),
      (exports.INSERT_CHECK_LIST_COMMAND = Z),
      (exports.INSERT_ORDERED_LIST_COMMAND = _e),
      (exports.INSERT_UNORDERED_LIST_COMMAND = me),
      (exports.ListExtension = Se),
      (exports.ListImportRules = he),
      (exports.ListItemNode = _z),
      (exports.ListNode = _P),
      (exports.ListSchema = fe),
      (exports.REMOVE_LIST_COMMAND = ye),
      (exports.UPDATE_LIST_START_COMMAND = pe),
      (exports.WordListImportExtension = we),
      (exports.registerCheckList = Q),
      (exports.registerList = Ne),
      (exports.registerListStrictIndentTransform = Ce));
  },
  null,
);
