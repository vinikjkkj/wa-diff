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
        for (var _e of t) o.append("v", _e);
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
    function n(e) {
      return function () {};
    }
    function o(t, n, o) {
      var r = t.getElementByKey(n.getKey());
      if (null === r || require("Lexical").$isTextNode(n))
        return [require("Lexical").getDOMTextNode(r), o];
      var i = r.parentNode;
      return i && "BR" === r.nodeName
        ? [i, Array.from(i.childNodes).indexOf(r)]
        : t.read("latest", function () {
            return require("Lexical").$getElementAndOffsetForPoint(t, n, o);
          });
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
      var n = require("Lexical").$isRootNode(t) ? t : t.getParent();
      return n && i(n);
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
            _s = t.read("latest", function () {
              var t = require("Lexical").$getNodeByKey(_o);
              return require("Lexical").$isTextNode(t) && t.isSimpleText()
                ? t.getTextContent()
                : null;
            }),
            _d = c - i,
            _a = l.slice(0, _d);
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
              _l = _e6 ? _t5 : _d;
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
            var _t6 = require("Lexical").$createTextNode(_a);
            r.replace(_t6);
          }
          i = 0;
        }
      };
      for (; i > 0 && null !== r; ) {
        _loop();
      }
    }
    var c = n();
    function d(n, o) {
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
    function a(t, n) {
      if (!t) return;
      var o = require("Lexical").$isRangeSelection(t)
        ? require("Lexical").$caretRangeFromSelection(t).getTextSlices()
        : [];
      for (var _r of t.getNodes()) {
        if (!require("Lexical").$isTextNode(_r) || !_r.canHaveFormat())
          continue;
        var _i = require("Lexical").$getTextPointCaretSliceForNode(o, _r);
        (_i ? 0 !== _i.distance : 0 !== _r.getTextContentSize()) &&
          n(
            _i && !require("Lexical").$isTokenOrSegmented(_r)
              ? require("Lexical").$splitTextPointCaretSlice(
                  _i,
                  require("Lexical").$isRangeSelection(t) ? t : null,
                )
              : _r,
          );
      }
      require("Lexical").$isRangeSelection(t) &&
        "text" === t.anchor.type &&
        "text" === t.focus.type &&
        t.anchor.key === t.focus.key &&
        f(t);
    }
    function f(e) {
      if (e.isBackward()) {
        var _t7 = e.anchor,
          _n3 = e.focus,
          _o2 = _t7.key,
          _r2 = _t7.offset,
          _i2 = _t7.type;
        (_t7.set(_n3.key, _n3.offset, _n3.type), _n3.set(_o2, _r2, _i2));
      }
    }
    function g(e, t) {
      var n = e.getFormatType(),
        o = e.getIndent();
      (n !== t.getFormatType() && t.setFormat(n),
        o !== t.getIndent() && t.setIndent(o));
    }
    function u(t, n, o) {
      var r = require("Lexical").$caretFromPoint(t, o);
      if (require("Lexical").$isExtendableTextPointCaret(r)) return !1;
      for (; r; r = r.getParentCaret()) {
        var _e9 = r.getParentAtCaret();
        if (!_e9 || r.getNodeAtCaret()) return !1;
        if (n.is(_e9)) return !0;
      }
      return !1;
    }
    function $(e) {
      return e.getNode().isAttached();
    }
    function p(t) {
      var n = t;
      for (; null !== n && !require("Lexical").$isRootOrShadowRoot(n); ) {
        var _e0 = n.getLatest(),
          _t8 = n.getParent();
        (0 === _e0.getChildrenSize() && n.remove(!0), (n = _t8));
      }
    }
    function S(n, o, r, i, s) {
      if (s === void 0) {
        s = null;
      }
      if (0 === o.length) return;
      var l = o[0],
        c = new Map(),
        d = [],
        a = require("Lexical").$isElementNode(l) ? l : l.getParentOrThrow();
      var f = a.isInline() ? a.getParentOrThrow() : a,
        g = !1;
      for (; null !== f; ) {
        var _t9 = f.getPreviousSibling();
        if (null !== _t9) {
          ((f = _t9), (g = !0));
          break;
        }
        if (
          ((f = f.getParentOrThrow()),
          require("Lexical").$isRootOrShadowRoot(f))
        )
          break;
      }
      var u = new Set();
      for (var _t0 = 0; _t0 < r; _t0++) {
        var _n4 = o[_t0];
        require("Lexical").$isElementNode(_n4) &&
          0 === _n4.getChildrenSize() &&
          u.add(_n4.getKey());
      }
      var S = new Set();
      for (var _n5 = 0; _n5 < r; _n5++) {
        var _r3 = o[_n5];
        var _s3 = _r3.getParent();
        if (
          (null !== _s3 && _s3.isInline() && (_s3 = _s3.getParent()),
          null !== _s3 &&
            require("Lexical").$isLeafNode(_r3) &&
            !S.has(_r3.getKey()))
        ) {
          var _t1 = _s3.getKey();
          if (void 0 === c.get(_t1)) {
            var _n6 = i();
            (_n6.setFormat(_s3.getFormatType()),
              _n6.setIndent(_s3.getIndent()),
              d.push(_n6),
              c.set(_t1, _n6));
            var _o3 = _s3.getChildren();
            _n6.splice(_n6.getChildrenSize(), 0, _o3);
            for (var _t10 of _o3)
              if (
                (S.add(_t10.getKey()), require("Lexical").$isElementNode(_t10))
              )
                for (var _e1 of _t10.getChildrenKeys()) S.add(_e1);
            p(_s3);
          }
        } else if (u.has(_r3.getKey())) {
          require("Lexical").$isElementNode(_r3) || t(179);
          var _n7 = i();
          (_n7.setFormat(_r3.getFormatType()),
            _n7.setIndent(_r3.getIndent()),
            d.push(_n7),
            _r3.remove(!0));
        }
      }
      if (null !== s)
        for (var _e10 = 0; _e10 < d.length; _e10++) {
          var _t11 = d[_e10];
          s.append(_t11);
        }
      var m = null;
      if (require("Lexical").$isRootOrShadowRoot(f)) {
        if (g) {
          if (null !== s) f.insertAfter(s);
          else
            for (var _e11 = d.length - 1; _e11 >= 0; _e11--) {
              var _t12 = d[_e11];
              f.insertAfter(_t12);
            }
        } else {
          var _t13 = f,
            _n8 = _t13.getFirstChild();
          if (
            (require("Lexical").$isElementNode(_n8) && (f = _n8), null === _n8)
          ) {
            if (s) _t13.append(s);
            else
              for (var _e12 = 0; _e12 < d.length; _e12++) {
                var _n9 = d[_e12];
                (_t13.append(_n9), (m = _n9));
              }
          } else if (null !== s) _n8.insertBefore(s);
          else
            for (var _e13 = 0; _e13 < d.length; _e13++) {
              var _t14 = d[_e13];
              (_n8.insertBefore(_t14), (m = _t14));
            }
        }
      } else if (s) f.insertAfter(s);
      else
        for (var _e14 = d.length - 1; _e14 >= 0; _e14--) {
          var _t15 = d[_e14];
          (f.insertAfter(_t15), (m = _t15));
        }
      var h = require("Lexical").$getPreviousSelection();
      require("Lexical").$isRangeSelection(h) && $(h.anchor) && $(h.focus)
        ? require("Lexical").$setSelection(h.clone())
        : null !== m
          ? m.selectEnd()
          : (n.dirty = !0);
    }
    function m(e) {
      var t = h(e);
      return null !== t && "vertical-rl" === t.writingMode;
    }
    function h(t) {
      var n = t.anchor.getNode();
      return require("Lexical").$isElementNode(n) ? i(n) : s(n);
    }
    function x(e, t, n, o) {
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
    var T = require("Lexical").getStyleObjectFromCSS,
      C = l;
    ((exports.$cloneWithProperties = require("Lexical").$cloneWithProperties),
      (exports.$selectAll = require("Lexical").$selectAll),
      (exports.$addNodeStyle = c),
      (exports.$copyBlockFormatIndent = g),
      (exports.$ensureForwardRangeSelection = f),
      (exports.$forEachSelectedTextNode = function (t) {
        a(require("Lexical").$getSelection(), t);
      }),
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
            var _o4 = require("Lexical").getStyleObjectFromCSS(t.style);
            if (null !== _o4 && n in _o4) return _o4[n];
          }
          var _o5 = t.anchor,
            _r4 = t.focus,
            _i3 = t.isBackward(),
            _c = _i3 ? _r4.getNode() : _o5.getNode(),
            _d2 = _i3 ? _o5.getNode() : _r4.getNode(),
            _a2 = _i3 ? _r4.offset : _o5.offset,
            _f = _i3 ? _o5.offset : _r4.offset;
          (require("Lexical").$isTextNode(_c) &&
            _a2 === _c.getTextContentSize() &&
            (s = _c),
            0 === _f && (l = _d2));
        }
        for (var _t16 = 0; _t16 < i.length; _t16++) {
          var _c2 = i[_t16];
          if (
            require("Lexical").$isTextNode(_c2) &&
            !_c2.is(0 === _t16 ? s : l)
          ) {
            var _e15 = y(_c2, n, o);
            if (null === r) r = _e15;
            else if (r !== _e15) {
              r = "";
              break;
            }
          }
        }
        return null === r ? o : r;
      }),
      (exports.$isAtEdgeOfElement = u),
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
      (exports.$moveCaretSelection = x),
      (exports.$moveCharacter = function (e, t, n) {
        var o = N(e);
        var r;
        ((r = m(e) || o ? !n : n), x(e, t, r, "character"));
      }),
      (exports.$patchStyleText = function (t, n) {
        var o = new Set();
        if (require("Lexical").$isRangeSelection(t) && t.isCollapsed()) {
          d(t, n);
          var _r5 = t.anchor.getNode();
          require("Lexical").$isElementNode(_r5) &&
            _r5.isEmpty() &&
            (o.add(_r5.getKey()), d(_r5, n));
        }
        a(t, function (e) {
          d(e, n);
        });
        var r = t.getNodes();
        if (r.length > 0)
          for (var _t17 of r) {
            if (
              !require("Lexical").$isElementNode(_t17) ||
              !_t17.canBeEmpty() ||
              0 !== _t17.getChildrenSize()
            )
              continue;
            var _r6 = _t17.getKey();
            o.has(_r6) || (o.add(_r6), d(_t17, n));
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
          var _n0 = r[0],
            _o6 = r[1],
            _c3 = (_require_Lexical = require("Lexical")).$findMatchingParent(
              _n0.getNode(),
              _require_Lexical.INTERNAL_$isBlock,
            );
          s = _require_Lexical.$findMatchingParent(
            _o6.getNode(),
            _require_Lexical.INTERNAL_$isBlock,
          );
          var _d3 = t.isBackward() ? "previous" : "next";
          ((i =
            require("Lexical").$isElementNode(s) &&
            !s.is(_c3) &&
            (function (t, n, o) {
              var r = t.getNode();
              return (
                (!require("Lexical").$isElementNode(r) || !r.isEmpty()) &&
                u(t, n, o)
              );
            })(_o6, s, require("Lexical").flipDirection(_d3))),
            require("Lexical").$isElementNode(_c3) && l.set(_c3.getKey(), _c3),
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
            var _t18 = require("Lexical").$findMatchingParent(
              _n1,
              require("Lexical").INTERNAL_$isBlock,
            );
            require("Lexical").$isElementNode(_t18) &&
              l.set(_t18.getKey(), _t18);
          }
        for (var _t19 of l.values()) {
          if (null !== require("Lexical").$getSlotHost(_t19)) continue;
          var _r7 = n();
          (o(_t19, _r7), _t19.replace(_r7, !0));
        }
      }),
      (exports.$shouldOverrideDefaultCharacterSelection = function (t, n) {
        var o = m(t) ? !n : n;
        N(t) && (o = !o);
        var r = require("Lexical").$caretFromPoint(
          t.focus,
          o ? "previous" : "next",
        );
        if (require("Lexical").$isExtendableTextPointCaret(r)) return !1;
        if (
          require("Lexical").$isTextPointCaret(r) &&
          !require("Lexical").$isTabNode(r.origin) &&
          r.origin.isUnmergeable()
        ) {
          var _t20 = r.getNodeAtCaret();
          if (
            require("Lexical").$isTextNode(_t20) &&
            !require("Lexical").$isTabNode(_t20)
          )
            return !0;
        }
        for (var _t21 of require("Lexical").$extendCaretToRange(r)) {
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
        var r = t.getStartEndPoints();
        if (
          null !== r &&
          n.isSelected(t) &&
          !require("Lexical").$isTokenOrSegmented(n)
        ) {
          var _ref2 = t.isBackward() ? [r[1], r[0]] : r,
            _i4 = _ref2[0],
            _s4 = _ref2[1],
            _l2 =
              !require("Lexical").$isRangeSelection(t) ||
              ("element" !== _i4.type && "element" !== _s4.type)
                ? void 0
                : require("Lexical").$getTextPointCaretSliceForNode(
                    require("Lexical")
                      .$caretRangeFromSelection(t)
                      .getTextSlices(),
                    n,
                  ),
            _ref3 = _l2
              ? _l2.getSliceIndices()
              : [
                  n.__key === _i4.key ? _i4.offset : 0,
                  n.__key === _s4.key ? _s4.offset : void 0,
                ],
            _c4 = _ref3[0],
            _d4 = _ref3[1],
            _a3 = n.__text.slice(_c4, _d4);
          _a3 !== n.__text &&
            ("clone" === o &&
              (n = require("Lexical").$cloneWithPropertiesEphemeral(n)),
            (n.__text = _a3));
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
        if (null !== i) {
          var _t22 = require("Lexical").$getSlotFrame(i.getNode());
          if (null !== _t22 && !require("Lexical").$isRootOrShadowRoot(_t22))
            return;
        }
        if (
          null !== i &&
          (0 === l ||
            (1 === l &&
              "element" === i.type &&
              0 === i.getNode().getChildrenSize()))
        ) {
          var _e16 =
              "text" === i.type ? i.getNode().getParentOrThrow() : i.getNode(),
            _t23 = _e16.getChildren();
          var _r8 = n();
          return (
            _r8.setFormat(_e16.getFormatType()),
            _r8.setIndent(_e16.getIndent()),
            _t23.forEach(function (e) {
              return _r8.append(e);
            }),
            o && (_r8 = o.append(_r8)),
            void _e16.replace(_r8)
          );
        }
        var c = null,
          d = [];
        for (var _r9 = 0; _r9 < l; _r9++) {
          var _i5 = s[_r9];
          require("Lexical").$isRootOrShadowRoot(_i5)
            ? (S(t, d, d.length, n, o), (d = []), (c = _i5))
            : null === c ||
                (null !== c && require("Lexical").$hasAncestor(_i5, c))
              ? d.push(_i5)
              : (S(t, d, d.length, n, o), (d = [_i5]));
        }
        S(t, d, d.length, n, o);
      }),
      (exports.createDOMRange = function (t, n, r, i, s) {
        var l = require("Lexical")
            .getRootOwnerDocument(t.getRootElement())
            .createRange(),
          _o7 = o(t, n, r),
          c = _o7[0],
          d = _o7[1],
          _o8 = o(t, i, s),
          a = _o8[0],
          f = _o8[1];
        var g = f;
        if (null === c || null === a) return null;
        var u = c.firstChild;
        c === a &&
          null != u &&
          "BR" === u.nodeName &&
          0 === d &&
          0 === g &&
          (g = 1);
        try {
          (l.setStart(c, d), l.setEnd(a, g));
        } catch (e) {
          return null;
        }
        return (
          !l.collapsed ||
            (d === g && n.is(i)) ||
            (l.setStart(a, g), l.setEnd(c, d)),
          l
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
        for (var _e17 = 0; _e17 < c; _e17++) {
          var _t24 = s[_e17],
            _n10 =
              l &&
              l.top <= _t24.top &&
              l.bottom >= _t24.bottom &&
              l.left <= _t24.left &&
              l.right >= _t24.right,
            _r0 = _t24.width + i === o.width;
          _n10 || _r0 ? (s.splice(_e17--, 1), c--) : (l = _t24);
        }
        return s;
      }),
      (exports.getCSSFromStyleObject = r),
      (exports.getStyleObjectFromCSS = T),
      (exports.trimTextContentFromAnchor = C));
  },
  null,
);
