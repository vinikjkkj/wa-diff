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
    function n(e) {
      var t = e;
      for (; null != t; ) {
        if (t.nodeType === Node.TEXT_NODE) return t;
        t = t.firstChild;
      }
      return null;
    }
    function o(e) {
      var t = e.parentNode;
      if (null == t) throw new Error("Should never happen");
      return [t, Array.from(t.childNodes).indexOf(e)];
    }
    function r(e) {
      var t = "";
      for (var _n in e) _n && (t += _n + ": " + e[_n] + ";");
      return t;
    }
    function i(t) {
      var n = require("Lexical").$getEditor().getElementByKey(t.getKey());
      if (null === n) return null;
      var o = n.ownerDocument.defaultView;
      return null === o ? null : o.getComputedStyle(n);
    }
    function s(t) {
      return i(require("Lexical").$isRootNode(t) ? t : t.getParentOrThrow());
    }
    function l(t, n, o) {
      var r = n.getNode(),
        i = o;
      if (require("Lexical").$isElementNode(r)) {
        var _e2 = r.getDescendantByIndex(n.offset);
        null !== _e2 && (r = _e2);
      }
      var _loop = function _loop() {
        if (require("Lexical").$isElementNode(r)) {
          var _e3 = r.getLastDescendant();
          null !== _e3 && (r = _e3);
        }
        var o = r.getPreviousSibling(),
          s = 0;
        if (null === o) {
          var _e4 = r.getParentOrThrow(),
            _t = _e4.getPreviousSibling();
          for (; null === _t; ) {
            if (((_e4 = _e4.getParent()), null === _e4)) {
              o = null;
              break;
            }
            _t = _e4.getPreviousSibling();
          }
          null !== _e4 && ((s = _e4.isInline() ? 0 : 2), (o = _t));
        }
        var l = r.getTextContent();
        "" === l &&
          require("Lexical").$isElementNode(r) &&
          !r.isInline() &&
          (l = "\n\n");
        var c = l.length;
        if (!require("Lexical").$isTextNode(r) || i >= c) {
          var _t2 = r.getParent();
          (r.remove(),
            null == _t2 ||
              0 !== _t2.getChildrenSize() ||
              require("Lexical").$isRootNode(_t2) ||
              _t2.remove(),
            (i -= c + s),
            (r = o));
        } else {
          var _o = r.getKey(),
            _s = t.getEditorState().read(function () {
              var t = require("Lexical").$getNodeByKey(_o);
              return require("Lexical").$isTextNode(t) && t.isSimpleText()
                ? t.getTextContent()
                : null;
            }),
            _f = c - i,
            _d = l.slice(0, _f);
          if (null !== _s && _s !== l) {
            var _t3 = require("Lexical").$getPreviousSelection();
            var _n2 = r;
            if (r.isSimpleText()) r.setTextContent(_s);
            else {
              var _t4 = require("Lexical").$createTextNode(_s);
              (r.replace(_t4), (_n2 = _t4));
            }
            if (
              require("Lexical").$isRangeSelection(_t3) &&
              _t3.isCollapsed()
            ) {
              var _e5 = _t3.anchor.offset;
              _n2.select(_e5, _e5);
            }
          } else if (r.isSimpleText()) {
            var _e6 = n.key === _o;
            var _t5 = n.offset;
            _t5 < i && (_t5 = c);
            var _s2 = _e6 ? _t5 - i : 0,
              _l = _e6 ? _t5 : _f;
            if (_e6 && 0 === _s2) {
              var _r$splitText = r.splitText(_s2, _l),
                _e7 = _r$splitText[0];
              _e7.remove();
            } else {
              var _r$splitText2 = r.splitText(_s2, _l),
                _e8 = _r$splitText2[1];
              _e8.remove();
            }
          } else {
            var _t6 = require("Lexical").$createTextNode(_d);
            r.replace(_t6);
          }
          i = 0;
        }
      };
      for (; i > 0 && null !== r; ) {
        _loop();
      }
    }
    var c = function c() {};
    function f(n, o) {
      (require("Lexical").$isRangeSelection(n)
        ? n.isCollapsed()
        : require("Lexical").$isTextNode(n) ||
          require("Lexical").$isElementNode(n)) || t(280);
      var i = require("Lexical").getStyleObjectFromCSS(
          require("Lexical").$isRangeSelection(n)
            ? n.style
            : require("Lexical").$isTextNode(n)
              ? n.getStyle()
              : n.getTextStyle(),
        ),
        s = r(
          Object.entries(o).reduce(
            function (e, _ref) {
              var t = _ref[0],
                o = _ref[1];
              return (
                "function" == typeof o
                  ? (e[t] = o(i[t], n))
                  : null === o
                    ? delete e[t]
                    : (e[t] = o),
                e
              );
            },
            babelHelpers["extends"]({}, i),
          ),
        );
      require("Lexical").$isRangeSelection(n) ||
      require("Lexical").$isTextNode(n)
        ? n.setStyle(s)
        : n.setTextStyle(s);
    }
    function d(t) {
      var n = require("Lexical").$getSelection();
      if (!n) return;
      var o = new Map(),
        r = function r(e) {
          return o.get(e.getKey()) || [0, e.getTextContentSize()];
        };
      if (require("Lexical").$isRangeSelection(n))
        for (var _t7 of require("Lexical")
          .$caretRangeFromSelection(n)
          .getTextSlices())
          _t7 && o.set(_t7.caret.origin.getKey(), _t7.getSliceIndices());
      var i = n.getNodes();
      for (var _n3 of i) {
        if (!require("Lexical").$isTextNode(_n3) || !_n3.canHaveFormat())
          continue;
        var _r = r(_n3),
          _o2 = _r[0],
          _i = _r[1];
        if (_i !== _o2)
          if (
            require("Lexical").$isTokenOrSegmented(_n3) ||
            (0 === _o2 && _i === _n3.getTextContentSize())
          )
            t(_n3);
          else {
            t(_n3.splitText(_o2, _i)[0 === _o2 ? 0 : 1]);
          }
      }
      require("Lexical").$isRangeSelection(n) &&
        "text" === n.anchor.type &&
        "text" === n.focus.type &&
        n.anchor.key === n.focus.key &&
        a(n);
    }
    function a(e) {
      if (e.isBackward()) {
        var _t8 = e.anchor,
          _n4 = e.focus,
          _o3 = _t8.key,
          _r2 = _t8.offset,
          _i2 = _t8.type;
        (_t8.set(_n4.key, _n4.offset, _n4.type), _n4.set(_o3, _r2, _i2));
      }
    }
    function g(e, t) {
      var n = e.getFormatType(),
        o = e.getIndent();
      (n !== t.getFormatType() && t.setFormat(n),
        o !== t.getIndent() && t.setIndent(o));
    }
    function u(e) {
      return e.getNode().isAttached();
    }
    function p(t) {
      var n = t;
      for (; null !== n && !require("Lexical").$isRootOrShadowRoot(n); ) {
        var _e9 = n.getLatest(),
          _t9 = n.getParent();
        (0 === _e9.getChildrenSize() && n.remove(!0), (n = _t9));
      }
    }
    function $(n, o, r, i, s) {
      if (s === void 0) {
        s = null;
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
      for (var _t1 = 0; _t1 < r; _t1++) {
        var _n5 = o[_t1];
        require("Lexical").$isElementNode(_n5) &&
          0 === _n5.getChildrenSize() &&
          g.add(_n5.getKey());
      }
      var $ = new Set();
      for (var _n6 = 0; _n6 < r; _n6++) {
        var _r3 = o[_n6];
        var _s3 = _r3.getParent();
        if (
          (null !== _s3 && _s3.isInline() && (_s3 = _s3.getParent()),
          null !== _s3 &&
            require("Lexical").$isLeafNode(_r3) &&
            !$.has(_r3.getKey()))
        ) {
          var _t10 = _s3.getKey();
          if (void 0 === c.get(_t10)) {
            var _n7 = i();
            (_n7.setFormat(_s3.getFormatType()),
              _n7.setIndent(_s3.getIndent()),
              f.push(_n7),
              c.set(_t10, _n7));
            var _o4 = _s3.getChildren();
            _n7.splice(_n7.getChildrenSize(), 0, _o4);
            for (var _t11 of _o4)
              if (
                ($.add(_t11.getKey()), require("Lexical").$isElementNode(_t11))
              )
                for (var _e0 of _t11.getChildrenKeys()) $.add(_e0);
            p(_s3);
          }
        } else if (g.has(_r3.getKey())) {
          require("Lexical").$isElementNode(_r3) || t(179);
          var _n8 = i();
          (_n8.setFormat(_r3.getFormatType()),
            _n8.setIndent(_r3.getIndent()),
            f.push(_n8),
            _r3.remove(!0));
        }
      }
      if (null !== s)
        for (var _e1 = 0; _e1 < f.length; _e1++) {
          var _t12 = f[_e1];
          s.append(_t12);
        }
      var S = null;
      if (require("Lexical").$isRootOrShadowRoot(d)) {
        if (a) {
          if (null !== s) d.insertAfter(s);
          else
            for (var _e10 = f.length - 1; _e10 >= 0; _e10--) {
              var _t13 = f[_e10];
              d.insertAfter(_t13);
            }
        } else {
          var _t14 = d.getFirstChild();
          if (
            (require("Lexical").$isElementNode(_t14) && (d = _t14),
            null === _t14)
          ) {
            if (s) d.append(s);
            else
              for (var _e11 = 0; _e11 < f.length; _e11++) {
                var _t15 = f[_e11];
                (d.append(_t15), (S = _t15));
              }
          } else if (null !== s) _t14.insertBefore(s);
          else
            for (var _e12 = 0; _e12 < f.length; _e12++) {
              var _n9 = f[_e12];
              (_t14.insertBefore(_n9), (S = _n9));
            }
        }
      } else if (s) d.insertAfter(s);
      else
        for (var _e13 = f.length - 1; _e13 >= 0; _e13--) {
          var _t16 = f[_e13];
          (d.insertAfter(_t16), (S = _t16));
        }
      var h = require("Lexical").$getPreviousSelection();
      require("Lexical").$isRangeSelection(h) && u(h.anchor) && u(h.focus)
        ? require("Lexical").$setSelection(h.clone())
        : null !== S
          ? S.selectEnd()
          : (n.dirty = !0);
    }
    function S(e) {
      var t = h(e);
      return null !== t && "vertical-rl" === t.writingMode;
    }
    function h(t) {
      var n = t.anchor.getNode();
      return require("Lexical").$isElementNode(n) ? i(n) : s(n);
    }
    function m(e, t, n, o) {
      e.modify(t ? "extend" : "move", n, o);
    }
    function N(e) {
      var t = h(e);
      return null !== t && "rtl" === t.direction;
    }
    function y(t, n, o) {
      var r = t.getStyle(),
        i = require("Lexical").getStyleObjectFromCSS(r);
      return (null !== i && i[n]) || o;
    }
    var x = require("Lexical").getStyleObjectFromCSS,
      T = l;
    ((exports.$cloneWithProperties = require("Lexical").$cloneWithProperties),
      (exports.$selectAll = require("Lexical").$selectAll),
      (exports.$addNodeStyle = c),
      (exports.$copyBlockFormatIndent = g),
      (exports.$ensureForwardRangeSelection = a),
      (exports.$forEachSelectedTextNode = d),
      (exports.$getComputedStyleForElement = i),
      (exports.$getComputedStyleForParent = s),
      (exports.$getSelectionStyleValueForProperty = function (t, n, o) {
        if (o === void 0) {
          o = "";
        }
        var r = null;
        var i = t.getNodes();
        var s, l;
        if (require("Lexical").$isRangeSelection(t)) {
          if (t.isCollapsed() && "" !== t.style) {
            var _o5 = require("Lexical").getStyleObjectFromCSS(t.style);
            if (null !== _o5 && n in _o5) return _o5[n];
          }
          var _o6 = t.anchor,
            _r4 = t.focus,
            _i3 = t.isBackward(),
            _c = _i3 ? _r4.getNode() : _o6.getNode(),
            _f2 = _i3 ? _o6.getNode() : _r4.getNode(),
            _d2 = _i3 ? _r4.offset : _o6.offset,
            _a = _i3 ? _o6.offset : _r4.offset;
          (require("Lexical").$isTextNode(_c) &&
            _d2 === _c.getTextContentSize() &&
            (s = _c),
            0 === _a && (l = _f2));
        }
        for (var _t17 = 0; _t17 < i.length; _t17++) {
          var _c2 = i[_t17];
          if (
            require("Lexical").$isTextNode(_c2) &&
            !_c2.is(0 === _t17 ? s : l)
          ) {
            var _e14 = y(_c2, n, o);
            if (null === r) r = _e14;
            else if (r !== _e14) {
              r = "";
              break;
            }
          }
        }
        return null === r ? o : r;
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
      (exports.$isParentElementRTL = N),
      (exports.$isParentRTL = function (e) {
        var t = s(e);
        return null !== t && "rtl" === t.direction;
      }),
      (exports.$moveCaretSelection = m),
      (exports.$moveCharacter = function (e, t, n) {
        var o = N(e);
        var r;
        ((r = S(e) || o ? !n : n), m(e, t, r, "character"));
      }),
      (exports.$patchStyleText = function (t, n) {
        if (require("Lexical").$isRangeSelection(t) && t.isCollapsed()) {
          f(t, n);
          var _o7 = t.anchor.getNode();
          require("Lexical").$isElementNode(_o7) && _o7.isEmpty() && f(_o7, n);
        }
        d(function (e) {
          f(e, n);
        });
        var o = t.getNodes();
        if (o.length > 0) {
          var _t18 = new Set();
          for (var _r5 of o) {
            if (
              !require("Lexical").$isElementNode(_r5) ||
              !_r5.canBeEmpty() ||
              0 !== _r5.getChildrenSize()
            )
              continue;
            var _o8 = _r5.getKey();
            _t18.has(_o8) || (_t18.add(_o8), f(_r5, n));
          }
        }
      }),
      (exports.$setBlocksType = function (t, n, o) {
        if (o === void 0) {
          o = g;
        }
        if (!t) return;
        var r = t.getStartEndPoints();
        var i = !1,
          s = null;
        var l = new Map();
        if (r) {
          var _require_Lexical;
          var _t19 = r[0],
            _n0 = r[1],
            _o9 = (_require_Lexical = require("Lexical")).$findMatchingParent(
              _t19.getNode(),
              _require_Lexical.INTERNAL_$isBlock,
            );
          ((s = _require_Lexical.$findMatchingParent(
            _n0.getNode(),
            _require_Lexical.INTERNAL_$isBlock,
          )),
            (i =
              require("Lexical").$isElementNode(s) &&
              !s.is(_o9) &&
              (function (t, n) {
                if (0 !== t.offset) return !1;
                var o = t.getNode();
                if (require("Lexical").$isElementNode(o) && o.isEmpty())
                  return !1;
                for (; !o.is(n); ) {
                  if (null !== o.getPreviousSibling()) return !1;
                  var _e15 = o.getParent();
                  if (null === _e15) return !1;
                  o = _e15;
                }
                return !0;
              })(_n0, s)),
            require("Lexical").$isElementNode(_o9) && l.set(_o9.getKey(), _o9),
            require("Lexical").$isElementNode(s) && !i && l.set(s.getKey(), s));
        }
        for (var _n1 of t.getNodes())
          if (
            require("Lexical").$isElementNode(_n1) &&
            require("Lexical").INTERNAL_$isBlock(_n1)
          ) {
            if (i && _n1.is(s)) continue;
            l.set(_n1.getKey(), _n1);
          } else if (!r) {
            var _t20 = require("Lexical").$findMatchingParent(
              _n1,
              require("Lexical").INTERNAL_$isBlock,
            );
            require("Lexical").$isElementNode(_t20) &&
              l.set(_t20.getKey(), _t20);
          }
        for (var _e16 of l.values()) {
          var _t21 = n();
          (o(_e16, _t21), _e16.replace(_t21, !0));
        }
      }),
      (exports.$shouldOverrideDefaultCharacterSelection = function (t, n) {
        var o = S(t) ? !n : n;
        N(t) && (o = !o);
        var r = require("Lexical").$caretFromPoint(
          t.focus,
          o ? "previous" : "next",
        );
        if (require("Lexical").$isExtendableTextPointCaret(r)) return !1;
        for (var _t22 of require("Lexical").$extendCaretToRange(r)) {
          if (require("Lexical").$isChildCaret(_t22))
            return !_t22.origin.isInline();
          if (!require("Lexical").$isElementNode(_t22.origin)) {
            if (require("Lexical").$isDecoratorNode(_t22.origin)) return !0;
            break;
          }
        }
        return !1;
      }),
      (exports.$sliceSelectedTextNodeContent = function (t, n, o) {
        if (o === void 0) {
          o = "self";
        }
        var r = t.getStartEndPoints();
        if (
          n.isSelected(t) &&
          !require("Lexical").$isTokenOrSegmented(n) &&
          null !== r
        ) {
          var _i4 = r[0],
            _s4 = r[1],
            _l2 = t.isBackward(),
            _c3 = _i4.getNode(),
            _f3 = _s4.getNode(),
            _d3 = n.is(_c3),
            _a2 = n.is(_f3);
          if (_d3 || _a2) {
            var _e$$getCharacterOffse =
                require("Lexical").$getCharacterOffsets(t),
              _r6 = _e$$getCharacterOffse[0],
              _i5 = _e$$getCharacterOffse[1],
              _s5 = _c3.is(_f3),
              _d4 = n.is(_l2 ? _f3 : _c3),
              _a3 = n.is(_l2 ? _c3 : _f3);
            var _g,
              _u = 0;
            if (_s5)
              ((_u = _r6 > _i5 ? _i5 : _r6), (_g = _r6 > _i5 ? _r6 : _i5));
            else if (_d4) {
              ((_u = _l2 ? _i5 : _r6), (_g = void 0));
            } else if (_a3) {
              ((_u = 0), (_g = _l2 ? _r6 : _i5));
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
      (exports.$trimTextContentFromAnchor = l),
      (exports.$wrapNodes = function (t, n, o) {
        if (o === void 0) {
          o = null;
        }
        var r = t.getStartEndPoints(),
          i = r ? r[0] : null,
          s = t.getNodes(),
          l = s.length;
        if (
          null !== i &&
          (0 === l ||
            (1 === l &&
              "element" === i.type &&
              0 === i.getNode().getChildrenSize()))
        ) {
          var _e17 =
              "text" === i.type ? i.getNode().getParentOrThrow() : i.getNode(),
            _t23 = _e17.getChildren();
          var _r7 = n();
          return (
            _r7.setFormat(_e17.getFormatType()),
            _r7.setIndent(_e17.getIndent()),
            _t23.forEach(function (e) {
              return _r7.append(e);
            }),
            o && (_r7 = o.append(_r7)),
            void _e17.replace(_r7)
          );
        }
        var c = null,
          f = [];
        for (var _r8 = 0; _r8 < l; _r8++) {
          var _i6 = s[_r8];
          require("Lexical").$isRootOrShadowRoot(_i6)
            ? ($(t, f, f.length, n, o), (f = []), (c = _i6))
            : null === c ||
                (null !== c && require("Lexical").$hasAncestor(_i6, c))
              ? f.push(_i6)
              : ($(t, f, f.length, n, o), (f = [_i6]));
        }
        $(t, f, f.length, n, o);
      }),
      (exports.createDOMRange = function (t, r, i, s, l) {
        var _o0, _o1;
        var c = r.getKey(),
          f = s.getKey(),
          d = document.createRange();
        var a = t.getElementByKey(c),
          g = t.getElementByKey(f),
          u = i,
          p = l;
        if (
          (require("Lexical").$isTextNode(r) && (a = n(a)),
          require("Lexical").$isTextNode(s) && (g = n(g)),
          void 0 === r || void 0 === s || null === a || null === g)
        )
          return null;
        ("BR" === a.nodeName && ((_o0 = o(a)), (a = _o0[0]), (u = _o0[1]), _o0),
          "BR" === g.nodeName &&
            ((_o1 = o(g)), (g = _o1[0]), (p = _o1[1]), _o1));
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
          r = getComputedStyle(n),
          i = parseFloat(r.paddingLeft) + parseFloat(r.paddingRight),
          s = Array.from(t.getClientRects());
        var l,
          c = s.length;
        s.sort(function (e, t) {
          var n = e.top - t.top;
          return Math.abs(n) <= 3 ? e.left - t.left : n;
        });
        for (var _e18 = 0; _e18 < c; _e18++) {
          var _t24 = s[_e18],
            _n10 =
              l &&
              l.top <= _t24.top &&
              l.top + l.height > _t24.top &&
              l.left + l.width > _t24.left,
            _r9 = _t24.width + i === o.width;
          _n10 || _r9 ? (s.splice(_e18--, 1), c--) : (l = _t24);
        }
        return s;
      }),
      (exports.getCSSFromStyleObject = r),
      (exports.getStyleObjectFromCSS = x),
      (exports.trimTextContentFromAnchor = T));
  },
  null,
);
