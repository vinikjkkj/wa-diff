__d(
  "LexicalSelection.prod",
  ["Lexical"],
  function $module_LexicalSelection_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    function t(e) {
      for (
        var _len = arguments.length,
          t = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        t[_key - 1] = arguments[_key];
      }
      var n = new URL("https://lexical.dev/docs/error"),
        o = new URLSearchParams();
      o.append("code", e);
      for (var _e of t) o.append("v", _e);
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
    var n = new Map();
    function o(e) {
      var t = e;
      for (; null != t; ) {
        if (t.nodeType === Node.TEXT_NODE) return t;
        t = t.firstChild;
      }
      return null;
    }
    function s(e) {
      var t = e.parentNode;
      if (null == t) throw new Error("Should never happen");
      return [t, Array.from(t.childNodes).indexOf(e)];
    }
    function r(e) {
      var t = {};
      if (!e) return t;
      var n = e.split(";");
      for (var _e2 of n)
        if ("" !== _e2) {
          var _e2$split = _e2.split(/:([^]+)/),
            _n = _e2$split[0],
            _o = _e2$split[1];
          _n && _o && (t[_n.trim()] = _o.trim());
        }
      return t;
    }
    function i(e) {
      var t = n.get(e);
      return (void 0 === t && ((t = r(e)), n.set(e, t)), t);
    }
    function l(e) {
      var t = "";
      for (var _n2 in e) _n2 && (t += _n2 + ": " + e[_n2] + ";");
      return t;
    }
    function c(t) {
      var n = require("Lexical").$getEditor().getElementByKey(t.getKey());
      if (null === n) return null;
      var o = n.ownerDocument.defaultView;
      return null === o ? null : o.getComputedStyle(n);
    }
    function f(t) {
      return c(require("Lexical").$isRootNode(t) ? t : t.getParentOrThrow());
    }
    function d(t, n, o) {
      var s = n.getNode(),
        r = o;
      if (require("Lexical").$isElementNode(s)) {
        var _e3 = s.getDescendantByIndex(n.offset);
        null !== _e3 && (s = _e3);
      }
      var _loop = function _loop() {
        if (require("Lexical").$isElementNode(s)) {
          var _e4 = s.getLastDescendant();
          null !== _e4 && (s = _e4);
        }
        var o = s.getPreviousSibling(),
          i = 0;
        if (null === o) {
          var _e5 = s.getParentOrThrow(),
            _t = _e5.getPreviousSibling();
          for (; null === _t; ) {
            if (((_e5 = _e5.getParent()), null === _e5)) {
              o = null;
              break;
            }
            _t = _e5.getPreviousSibling();
          }
          null !== _e5 && ((i = _e5.isInline() ? 0 : 2), (o = _t));
        }
        var l = s.getTextContent();
        "" === l &&
          require("Lexical").$isElementNode(s) &&
          !s.isInline() &&
          (l = "\n\n");
        var c = l.length;
        if (!require("Lexical").$isTextNode(s) || r >= c) {
          var _t2 = s.getParent();
          (s.remove(),
            null == _t2 ||
              0 !== _t2.getChildrenSize() ||
              require("Lexical").$isRootNode(_t2) ||
              _t2.remove(),
            (r -= c + i),
            (s = o));
        } else {
          var _o2 = s.getKey(),
            _i = t.getEditorState().read(function () {
              var t = require("Lexical").$getNodeByKey(_o2);
              return require("Lexical").$isTextNode(t) && t.isSimpleText()
                ? t.getTextContent()
                : null;
            }),
            _f = c - r,
            _d = l.slice(0, _f);
          if (null !== _i && _i !== l) {
            var _t3 = require("Lexical").$getPreviousSelection();
            var _n3 = s;
            if (s.isSimpleText()) s.setTextContent(_i);
            else {
              var _t4 = require("Lexical").$createTextNode(_i);
              (s.replace(_t4), (_n3 = _t4));
            }
            if (
              require("Lexical").$isRangeSelection(_t3) &&
              _t3.isCollapsed()
            ) {
              var _e6 = _t3.anchor.offset;
              _n3.select(_e6, _e6);
            }
          } else if (s.isSimpleText()) {
            var _e7 = n.key === _o2;
            var _t5 = n.offset;
            _t5 < r && (_t5 = c);
            var _i2 = _e7 ? _t5 - r : 0,
              _l = _e7 ? _t5 : _f;
            if (_e7 && 0 === _i2) {
              var _s$splitText = s.splitText(_i2, _l),
                _e8 = _s$splitText[0];
              _e8.remove();
            } else {
              var _s$splitText2 = s.splitText(_i2, _l),
                _e9 = _s$splitText2[1];
              _e9.remove();
            }
          } else {
            var _t6 = require("Lexical").$createTextNode(_d);
            s.replace(_t6);
          }
          r = 0;
        }
      };
      for (; r > 0 && null !== s; ) {
        _loop();
      }
    }
    function a(o, s) {
      (require("Lexical").$isRangeSelection(o)
        ? o.isCollapsed()
        : require("Lexical").$isTextNode(o) ||
          require("Lexical").$isElementNode(o)) || t(280);
      var r = i(
          require("Lexical").$isRangeSelection(o)
            ? o.style
            : require("Lexical").$isTextNode(o)
              ? o.getStyle()
              : o.getTextStyle(),
        ),
        c = Object.entries(s).reduce(
          function (e, _ref) {
            var t = _ref[0],
              n = _ref[1];
            return (
              "function" == typeof n
                ? (e[t] = n(r[t], o))
                : null === n
                  ? delete e[t]
                  : (e[t] = n),
              e
            );
          },
          babelHelpers["extends"]({}, r),
        ),
        f = l(c);
      (require("Lexical").$isRangeSelection(o) ||
      require("Lexical").$isTextNode(o)
        ? o.setStyle(f)
        : o.setTextStyle(f),
        n.set(f, c));
    }
    function g(t) {
      var n = require("Lexical").$getSelection();
      if (!n) return;
      var o = new Map(),
        s = function s(e) {
          return o.get(e.getKey()) || [0, e.getTextContentSize()];
        };
      if (require("Lexical").$isRangeSelection(n))
        for (var _t7 of require("Lexical")
          .$caretRangeFromSelection(n)
          .getTextSlices())
          _t7 && o.set(_t7.caret.origin.getKey(), _t7.getSliceIndices());
      var r = n.getNodes();
      for (var _n4 of r) {
        if (!require("Lexical").$isTextNode(_n4) || !_n4.canHaveFormat())
          continue;
        var _s = s(_n4),
          _o3 = _s[0],
          _r = _s[1];
        if (_r !== _o3)
          if (
            require("Lexical").$isTokenOrSegmented(_n4) ||
            (0 === _o3 && _r === _n4.getTextContentSize())
          )
            t(_n4);
          else {
            t(_n4.splitText(_o3, _r)[0 === _o3 ? 0 : 1]);
          }
      }
      require("Lexical").$isRangeSelection(n) &&
        "text" === n.anchor.type &&
        "text" === n.focus.type &&
        n.anchor.key === n.focus.key &&
        u(n);
    }
    function u(e) {
      if (e.isBackward()) {
        var _t8 = e.anchor,
          _n5 = e.focus,
          _o4 = _t8.key,
          _s2 = _t8.offset,
          _r2 = _t8.type;
        (_t8.set(_n5.key, _n5.offset, _n5.type), _n5.set(_o4, _s2, _r2));
      }
    }
    function p(e, t) {
      var n = e.getFormatType(),
        o = e.getIndent();
      (n !== t.getFormatType() && t.setFormat(n),
        o !== t.getIndent() && t.setIndent(o));
    }
    function $(e) {
      return e.getNode().isAttached();
    }
    function h(t) {
      var n = t;
      for (; null !== n && !require("Lexical").$isRootOrShadowRoot(n); ) {
        var _e0 = n.getLatest(),
          _t9 = n.getParent();
        (0 === _e0.getChildrenSize() && n.remove(!0), (n = _t9));
      }
    }
    function y(n, o, s, r, i) {
      if (i === void 0) {
        i = null;
      }
      if (0 === o.length) return;
      var l = o[0],
        c = new Map(),
        f = [];
      var d = require("Lexical").$isElementNode(l) ? l : l.getParentOrThrow();
      d.isInline() && (d = d.getParentOrThrow());
      var a = !1;
      for (; null !== d; ) {
        var _t0 = d.getPreviousSibling();
        if (null !== _t0) {
          ((d = _t0), (a = !0));
          break;
        }
        if (
          ((d = d.getParentOrThrow()),
          require("Lexical").$isRootOrShadowRoot(d))
        )
          break;
      }
      var g = new Set();
      for (var _t1 = 0; _t1 < s; _t1++) {
        var _n6 = o[_t1];
        require("Lexical").$isElementNode(_n6) &&
          0 === _n6.getChildrenSize() &&
          g.add(_n6.getKey());
      }
      var u = new Set();
      var _loop2 = function _loop2() {
        var s = o[_n7];
        var i = s.getParent();
        if (
          (null !== i && i.isInline() && (i = i.getParent()),
          null !== i && require("Lexical").$isLeafNode(s) && !u.has(s.getKey()))
        ) {
          var _t15 = i.getKey();
          if (void 0 === c.get(_t15)) {
            var _n9 = r();
            (_n9.setFormat(i.getFormatType()),
              _n9.setIndent(i.getIndent()),
              f.push(_n9),
              c.set(_t15, _n9),
              i.getChildren().forEach(function (t) {
                (_n9.append(t),
                  u.add(t.getKey()),
                  require("Lexical").$isElementNode(t) &&
                    t.getChildrenKeys().forEach(function (e) {
                      return u.add(e);
                    }));
              }),
              h(i));
          }
        } else if (g.has(s.getKey())) {
          require("Lexical").$isElementNode(s) || t(179);
          var _n0 = r();
          (_n0.setFormat(s.getFormatType()),
            _n0.setIndent(s.getIndent()),
            f.push(_n0),
            s.remove(!0));
        }
      };
      for (var _n7 = 0; _n7 < s; _n7++) {
        _loop2();
      }
      if (null !== i)
        for (var _e1 = 0; _e1 < f.length; _e1++) {
          var _t10 = f[_e1];
          i.append(_t10);
        }
      var p = null;
      if (require("Lexical").$isRootOrShadowRoot(d)) {
        if (a) {
          if (null !== i) d.insertAfter(i);
          else
            for (var _e10 = f.length - 1; _e10 >= 0; _e10--) {
              var _t11 = f[_e10];
              d.insertAfter(_t11);
            }
        } else {
          var _t12 = d.getFirstChild();
          if (
            (require("Lexical").$isElementNode(_t12) && (d = _t12),
            null === _t12)
          ) {
            if (i) d.append(i);
            else
              for (var _e11 = 0; _e11 < f.length; _e11++) {
                var _t13 = f[_e11];
                (d.append(_t13), (p = _t13));
              }
          } else if (null !== i) _t12.insertBefore(i);
          else
            for (var _e12 = 0; _e12 < f.length; _e12++) {
              var _n8 = f[_e12];
              (_t12.insertBefore(_n8), (p = _n8));
            }
        }
      } else if (i) d.insertAfter(i);
      else
        for (var _e13 = f.length - 1; _e13 >= 0; _e13--) {
          var _t14 = f[_e13];
          (d.insertAfter(_t14), (p = _t14));
        }
      var y = require("Lexical").$getPreviousSelection();
      require("Lexical").$isRangeSelection(y) && $(y.anchor) && $(y.focus)
        ? require("Lexical").$setSelection(y.clone())
        : null !== p
          ? p.selectEnd()
          : (n.dirty = !0);
    }
    function S(e) {
      var t = m(e);
      return null !== t && "vertical-rl" === t.writingMode;
    }
    function m(t) {
      var n = t.anchor.getNode();
      return require("Lexical").$isElementNode(n) ? c(n) : f(n);
    }
    function N(e, t, n, o) {
      e.modify(t ? "extend" : "move", n, o);
    }
    function x(e) {
      var t = m(e);
      return null !== t && "rtl" === t.direction;
    }
    function T(e, t, n) {
      var o = i(e.getStyle());
      return (null !== o && o[t]) || n;
    }
    var E = d;
    ((exports.$cloneWithProperties = require("Lexical").$cloneWithProperties),
      (exports.$selectAll = require("Lexical").$selectAll),
      (exports.$addNodeStyle = function (e) {
        var t = e.getStyle(),
          o = r(t);
        n.set(t, o);
      }),
      (exports.$copyBlockFormatIndent = p),
      (exports.$ensureForwardRangeSelection = u),
      (exports.$forEachSelectedTextNode = g),
      (exports.$getComputedStyleForElement = c),
      (exports.$getComputedStyleForParent = f),
      (exports.$getSelectionStyleValueForProperty = function (t, n, o) {
        if (o === void 0) {
          o = "";
        }
        var s = null;
        var r = t.getNodes(),
          l = t.anchor,
          c = t.focus,
          f = t.isBackward(),
          d = f ? c.getNode() : l.getNode(),
          a = f ? l.getNode() : c.getNode(),
          g = f ? c.offset : l.offset,
          u = f ? l.offset : c.offset;
        if (
          require("Lexical").$isRangeSelection(t) &&
          t.isCollapsed() &&
          "" !== t.style
        ) {
          var _e14 = i(t.style);
          if (null !== _e14 && n in _e14) return _e14[n];
        }
        for (var _t16 = 0; _t16 < r.length; _t16++) {
          var _i3 = r[_t16];
          if (
            (0 !== _t16 ||
              !_i3.is(d) ||
              !require("Lexical").$isTextNode(_i3) ||
              g !== _i3.getTextContentSize()) &&
            (0 === _t16 || !_i3.is(a) || 0 !== u) &&
            require("Lexical").$isTextNode(_i3)
          ) {
            var _e15 = T(_i3, n, o);
            if (null === s) s = _e15;
            else if (s !== _e15) {
              s = "";
              break;
            }
          }
        }
        return null === s ? o : s;
      }),
      (exports.$isAtNodeEnd = function (n) {
        if ("text" === n.type)
          return n.offset === n.getNode().getTextContentSize();
        var o = n.getNode();
        return (
          require("Lexical").$isElementNode(o) || t(177),
          n.offset === o.getChildrenSize()
        );
      }),
      (exports.$isParentElementRTL = x),
      (exports.$isParentRTL = function (e) {
        var t = f(e);
        return null !== t && "rtl" === t.direction;
      }),
      (exports.$moveCaretSelection = N),
      (exports.$moveCharacter = function (e, t, n) {
        var o = x(e);
        var s;
        ((s = S(e) || o ? !n : n), N(e, t, s, "character"));
      }),
      (exports.$patchStyleText = function (t, n) {
        if (require("Lexical").$isRangeSelection(t) && t.isCollapsed()) {
          a(t, n);
          var _o5 = t.anchor.getNode();
          require("Lexical").$isElementNode(_o5) && _o5.isEmpty() && a(_o5, n);
        }
        g(function (e) {
          a(e, n);
        });
        var o = t.getNodes();
        if (o.length > 0) {
          var _t17 = new Set();
          for (var _s3 of o) {
            if (
              !require("Lexical").$isElementNode(_s3) ||
              !_s3.canBeEmpty() ||
              0 !== _s3.getChildrenSize()
            )
              continue;
            var _o6 = _s3.getKey();
            _t17.has(_o6) || (_t17.add(_o6), a(_s3, n));
          }
        }
      }),
      (exports.$setBlocksType = function (t, n, o) {
        if (o === void 0) {
          o = p;
        }
        if (null === t) return;
        var s = t.getStartEndPoints(),
          r = new Map();
        var i = null;
        if (s) {
          var _require_Lexical;
          var _t18 = s[0],
            _n1 = s[1];
          ((i =
            (_require_Lexical = require("Lexical")).$createRangeSelection()),
            i.anchor.set(_t18.key, _t18.offset, _t18.type),
            i.focus.set(_n1.key, _n1.offset, _n1.type));
          var _o7 = _require_Lexical.$findMatchingParent(
              _t18.getNode(),
              _require_Lexical.INTERNAL_$isBlock,
            ),
            _l2 = _require_Lexical.$findMatchingParent(
              _n1.getNode(),
              _require_Lexical.INTERNAL_$isBlock,
            );
          (require("Lexical").$isElementNode(_o7) && r.set(_o7.getKey(), _o7),
            require("Lexical").$isElementNode(_l2) && r.set(_l2.getKey(), _l2));
        }
        for (var _n10 of t.getNodes())
          if (
            require("Lexical").$isElementNode(_n10) &&
            require("Lexical").INTERNAL_$isBlock(_n10)
          )
            r.set(_n10.getKey(), _n10);
          else if (null === s) {
            var _t19 = require("Lexical").$findMatchingParent(
              _n10,
              require("Lexical").INTERNAL_$isBlock,
            );
            require("Lexical").$isElementNode(_t19) &&
              r.set(_t19.getKey(), _t19);
          }
        for (var _ref3 of r) {
          var _e16 = _ref3[0];
          var _t20 = _ref3[1];
          {
            var _s4 = n();
            (o(_t20, _s4),
              _t20.replace(_s4, !0),
              i &&
                (_e16 === i.anchor.key &&
                  i.anchor.set(_s4.getKey(), i.anchor.offset, i.anchor.type),
                _e16 === i.focus.key &&
                  i.focus.set(_s4.getKey(), i.focus.offset, i.focus.type)));
          }
        }
        i &&
          t.is(require("Lexical").$getSelection()) &&
          require("Lexical").$setSelection(i);
      }),
      (exports.$shouldOverrideDefaultCharacterSelection = function (t, n) {
        var o = S(t) ? !n : n;
        x(t) && (o = !o);
        var s = require("Lexical").$caretFromPoint(
          t.focus,
          o ? "previous" : "next",
        );
        if (require("Lexical").$isExtendableTextPointCaret(s)) return !1;
        for (var _t21 of require("Lexical").$extendCaretToRange(s)) {
          if (require("Lexical").$isChildCaret(_t21))
            return !_t21.origin.isInline();
          if (!require("Lexical").$isElementNode(_t21.origin)) {
            if (require("Lexical").$isDecoratorNode(_t21.origin)) return !0;
            break;
          }
        }
        return !1;
      }),
      (exports.$sliceSelectedTextNodeContent = function (t, n, o) {
        if (o === void 0) {
          o = "self";
        }
        var s = t.getStartEndPoints();
        if (
          n.isSelected(t) &&
          !require("Lexical").$isTokenOrSegmented(n) &&
          null !== s
        ) {
          var _r3 = s[0],
            _i4 = s[1],
            _l3 = t.isBackward(),
            _c = _r3.getNode(),
            _f2 = _i4.getNode(),
            _d2 = n.is(_c),
            _a = n.is(_f2);
          if (_d2 || _a) {
            var _e$$getCharacterOffse =
                require("Lexical").$getCharacterOffsets(t),
              _s5 = _e$$getCharacterOffse[0],
              _r4 = _e$$getCharacterOffse[1],
              _i5 = _c.is(_f2),
              _d3 = n.is(_l3 ? _f2 : _c),
              _a2 = n.is(_l3 ? _c : _f2);
            var _g,
              _u = 0;
            if (_i5)
              ((_u = _s5 > _r4 ? _r4 : _s5), (_g = _s5 > _r4 ? _s5 : _r4));
            else if (_d3) {
              ((_u = _l3 ? _r4 : _s5), (_g = void 0));
            } else if (_a2) {
              ((_u = 0), (_g = _l3 ? _s5 : _r4));
            }
            var _p = n.__text.slice(_u, _g);
            _p !== n.__text &&
              ("clone" === o &&
                (n = require("Lexical").$cloneWithPropertiesEphemeral(n)),
              (n.__text = _p));
          }
        }
        return n;
      }),
      (exports.$trimTextContentFromAnchor = d),
      (exports.$wrapNodes = function (t, n, o) {
        if (o === void 0) {
          o = null;
        }
        var s = t.getStartEndPoints(),
          r = s ? s[0] : null,
          i = t.getNodes(),
          l = i.length;
        if (
          null !== r &&
          (0 === l ||
            (1 === l &&
              "element" === r.type &&
              0 === r.getNode().getChildrenSize()))
        ) {
          var _e17 =
              "text" === r.type ? r.getNode().getParentOrThrow() : r.getNode(),
            _t22 = _e17.getChildren();
          var _s6 = n();
          return (
            _s6.setFormat(_e17.getFormatType()),
            _s6.setIndent(_e17.getIndent()),
            _t22.forEach(function (e) {
              return _s6.append(e);
            }),
            o && (_s6 = o.append(_s6)),
            void _e17.replace(_s6)
          );
        }
        var c = null,
          f = [];
        for (var _s7 = 0; _s7 < l; _s7++) {
          var _r5 = i[_s7];
          require("Lexical").$isRootOrShadowRoot(_r5)
            ? (y(t, f, f.length, n, o), (f = []), (c = _r5))
            : null === c ||
                (null !== c && require("Lexical").$hasAncestor(_r5, c))
              ? f.push(_r5)
              : (y(t, f, f.length, n, o), (f = [_r5]));
        }
        y(t, f, f.length, n, o);
      }),
      (exports.createDOMRange = function (t, n, r, i, l) {
        var _s8, _s9;
        var c = n.getKey(),
          f = i.getKey(),
          d = document.createRange();
        var a = t.getElementByKey(c),
          g = t.getElementByKey(f),
          u = r,
          p = l;
        if (
          (require("Lexical").$isTextNode(n) && (a = o(a)),
          require("Lexical").$isTextNode(i) && (g = o(g)),
          void 0 === n || void 0 === i || null === a || null === g)
        )
          return null;
        ("BR" === a.nodeName && ((_s8 = s(a)), (a = _s8[0]), (u = _s8[1]), _s8),
          "BR" === g.nodeName &&
            ((_s9 = s(g)), (g = _s9[0]), (p = _s9[1]), _s9));
        var $ = a.firstChild;
        a === g &&
          null != $ &&
          "BR" === $.nodeName &&
          0 === u &&
          0 === p &&
          (p = 1);
        try {
          (d.setStart(a, u), d.setEnd(g, p));
        } catch (e) {
          return null;
        }
        return (
          !d.collapsed ||
            (u === p && c === f) ||
            (d.setStart(g, p), d.setEnd(a, u)),
          d
        );
      }),
      (exports.createRectsFromDOMRange = function (e, t) {
        var n = e.getRootElement();
        if (null === n) return [];
        var o = n.getBoundingClientRect(),
          s = getComputedStyle(n),
          r = parseFloat(s.paddingLeft) + parseFloat(s.paddingRight),
          i = Array.from(t.getClientRects());
        var l,
          c = i.length;
        i.sort(function (e, t) {
          var n = e.top - t.top;
          return Math.abs(n) <= 3 ? e.left - t.left : n;
        });
        for (var _e18 = 0; _e18 < c; _e18++) {
          var _t23 = i[_e18],
            _n11 =
              l &&
              l.top <= _t23.top &&
              l.top + l.height > _t23.top &&
              l.left + l.width > _t23.left,
            _s0 = _t23.width + r === o.width;
          _n11 || _s0 ? (i.splice(_e18--, 1), c--) : (l = _t23);
        }
        return i;
      }),
      (exports.getCSSFromStyleObject = l),
      (exports.getStyleObjectFromCSS = i),
      (exports.trimTextContentFromAnchor = E));
  },
  null,
);
