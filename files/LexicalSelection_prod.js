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
    function s(e) {
      var t = "";
      for (var _n in e) _n && (t += _n + ": " + e[_n] + ";");
      return t;
    }
    function r(t) {
      var n = require("Lexical").$getEditor().getElementByKey(t.getKey());
      if (null === n) return null;
      var o = n.ownerDocument.defaultView;
      return null === o ? null : o.getComputedStyle(n);
    }
    function l(t) {
      return r(require("Lexical").$isRootNode(t) ? t : t.getParentOrThrow());
    }
    function i(t, n, o) {
      var s = n.getNode(),
        r = o;
      if (require("Lexical").$isElementNode(s)) {
        var _e2 = s.getDescendantByIndex(n.offset);
        null !== _e2 && (s = _e2);
      }
      var _loop = function _loop() {
        if (require("Lexical").$isElementNode(s)) {
          var _e3 = s.getLastDescendant();
          null !== _e3 && (s = _e3);
        }
        var o = s.getPreviousSibling(),
          l = 0;
        if (null === o) {
          var _e4 = s.getParentOrThrow(),
            _t = _e4.getPreviousSibling();
          for (; null === _t; ) {
            if (((_e4 = _e4.getParent()), null === _e4)) {
              o = null;
              break;
            }
            _t = _e4.getPreviousSibling();
          }
          null !== _e4 && ((l = _e4.isInline() ? 0 : 2), (o = _t));
        }
        var i = s.getTextContent();
        "" === i &&
          require("Lexical").$isElementNode(s) &&
          !s.isInline() &&
          (i = "\n\n");
        var c = i.length;
        if (!require("Lexical").$isTextNode(s) || r >= c) {
          var _t2 = s.getParent();
          (s.remove(),
            null == _t2 ||
              0 !== _t2.getChildrenSize() ||
              require("Lexical").$isRootNode(_t2) ||
              _t2.remove(),
            (r -= c + l),
            (s = o));
        } else {
          var _o = s.getKey(),
            _l = t.getEditorState().read(function () {
              var t = require("Lexical").$getNodeByKey(_o);
              return require("Lexical").$isTextNode(t) && t.isSimpleText()
                ? t.getTextContent()
                : null;
            }),
            _f = c - r,
            _d = i.slice(0, _f);
          if (null !== _l && _l !== i) {
            var _t3 = require("Lexical").$getPreviousSelection();
            var _n2 = s;
            if (s.isSimpleText()) s.setTextContent(_l);
            else {
              var _t4 = require("Lexical").$createTextNode(_l);
              (s.replace(_t4), (_n2 = _t4));
            }
            if (
              require("Lexical").$isRangeSelection(_t3) &&
              _t3.isCollapsed()
            ) {
              var _e5 = _t3.anchor.offset;
              _n2.select(_e5, _e5);
            }
          } else if (s.isSimpleText()) {
            var _e6 = n.key === _o;
            var _t5 = n.offset;
            _t5 < r && (_t5 = c);
            var _l2 = _e6 ? _t5 - r : 0,
              _i = _e6 ? _t5 : _f;
            if (_e6 && 0 === _l2) {
              var _s$splitText = s.splitText(_l2, _i),
                _e7 = _s$splitText[0];
              _e7.remove();
            } else {
              var _s$splitText2 = s.splitText(_l2, _i),
                _e8 = _s$splitText2[1];
              _e8.remove();
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
    var c = function c() {};
    function f(n, o) {
      (require("Lexical").$isRangeSelection(n)
        ? n.isCollapsed()
        : require("Lexical").$isTextNode(n) ||
          require("Lexical").$isElementNode(n)) || t(280);
      var r = require("Lexical").getStyleObjectFromCSS(
          require("Lexical").$isRangeSelection(n)
            ? n.style
            : require("Lexical").$isTextNode(n)
              ? n.getStyle()
              : n.getTextStyle(),
        ),
        l = s(
          Object.entries(o).reduce(
            function (e, _ref) {
              var t = _ref[0],
                o = _ref[1];
              return (
                "function" == typeof o
                  ? (e[t] = o(r[t], n))
                  : null === o
                    ? delete e[t]
                    : (e[t] = o),
                e
              );
            },
            babelHelpers["extends"]({}, r),
          ),
        );
      require("Lexical").$isRangeSelection(n) ||
      require("Lexical").$isTextNode(n)
        ? n.setStyle(l)
        : n.setTextStyle(l);
    }
    function d(t) {
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
      for (var _n3 of r) {
        if (!require("Lexical").$isTextNode(_n3) || !_n3.canHaveFormat())
          continue;
        var _s = s(_n3),
          _o2 = _s[0],
          _r = _s[1];
        if (_r !== _o2)
          if (
            require("Lexical").$isTokenOrSegmented(_n3) ||
            (0 === _o2 && _r === _n3.getTextContentSize())
          )
            t(_n3);
          else {
            t(_n3.splitText(_o2, _r)[0 === _o2 ? 0 : 1]);
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
          _s2 = _t8.offset,
          _r2 = _t8.type;
        (_t8.set(_n4.key, _n4.offset, _n4.type), _n4.set(_o3, _s2, _r2));
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
    function $(n, o, s, r, l) {
      if (l === void 0) {
        l = null;
      }
      if (0 === o.length) return;
      var i = o[0],
        c = new Map(),
        f = [];
      var d = require("Lexical").$isElementNode(i) ? i : i.getParentOrThrow();
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
        var _n5 = o[_t1];
        require("Lexical").$isElementNode(_n5) &&
          0 === _n5.getChildrenSize() &&
          g.add(_n5.getKey());
      }
      var $ = new Set();
      var _loop2 = function _loop2() {
        var s = o[_n6];
        var l = s.getParent();
        if (
          (null !== l && l.isInline() && (l = l.getParent()),
          null !== l && require("Lexical").$isLeafNode(s) && !$.has(s.getKey()))
        ) {
          var _t15 = l.getKey();
          if (void 0 === c.get(_t15)) {
            var _n8 = r();
            (_n8.setFormat(l.getFormatType()),
              _n8.setIndent(l.getIndent()),
              f.push(_n8),
              c.set(_t15, _n8),
              l.getChildren().forEach(function (t) {
                (_n8.append(t),
                  $.add(t.getKey()),
                  require("Lexical").$isElementNode(t) &&
                    t.getChildrenKeys().forEach(function (e) {
                      return $.add(e);
                    }));
              }),
              p(l));
          }
        } else if (g.has(s.getKey())) {
          require("Lexical").$isElementNode(s) || t(179);
          var _n9 = r();
          (_n9.setFormat(s.getFormatType()),
            _n9.setIndent(s.getIndent()),
            f.push(_n9),
            s.remove(!0));
        }
      };
      for (var _n6 = 0; _n6 < s; _n6++) {
        _loop2();
      }
      if (null !== l)
        for (var _e0 = 0; _e0 < f.length; _e0++) {
          var _t10 = f[_e0];
          l.append(_t10);
        }
      var h = null;
      if (require("Lexical").$isRootOrShadowRoot(d)) {
        if (a) {
          if (null !== l) d.insertAfter(l);
          else
            for (var _e1 = f.length - 1; _e1 >= 0; _e1--) {
              var _t11 = f[_e1];
              d.insertAfter(_t11);
            }
        } else {
          var _t12 = d.getFirstChild();
          if (
            (require("Lexical").$isElementNode(_t12) && (d = _t12),
            null === _t12)
          ) {
            if (l) d.append(l);
            else
              for (var _e10 = 0; _e10 < f.length; _e10++) {
                var _t13 = f[_e10];
                (d.append(_t13), (h = _t13));
              }
          } else if (null !== l) _t12.insertBefore(l);
          else
            for (var _e11 = 0; _e11 < f.length; _e11++) {
              var _n7 = f[_e11];
              (_t12.insertBefore(_n7), (h = _n7));
            }
        }
      } else if (l) d.insertAfter(l);
      else
        for (var _e12 = f.length - 1; _e12 >= 0; _e12--) {
          var _t14 = f[_e12];
          (d.insertAfter(_t14), (h = _t14));
        }
      var S = require("Lexical").$getPreviousSelection();
      require("Lexical").$isRangeSelection(S) && u(S.anchor) && u(S.focus)
        ? require("Lexical").$setSelection(S.clone())
        : null !== h
          ? h.selectEnd()
          : (n.dirty = !0);
    }
    function h(e) {
      var t = S(e);
      return null !== t && "vertical-rl" === t.writingMode;
    }
    function S(t) {
      var n = t.anchor.getNode();
      return require("Lexical").$isElementNode(n) ? r(n) : l(n);
    }
    function y(e, t, n, o) {
      e.modify(t ? "extend" : "move", n, o);
    }
    function m(e) {
      var t = S(e);
      return null !== t && "rtl" === t.direction;
    }
    function N(t, n, o) {
      var s = t.getStyle(),
        r = require("Lexical").getStyleObjectFromCSS(s);
      return (null !== r && r[n]) || o;
    }
    var x = require("Lexical").getStyleObjectFromCSS,
      T = i;
    ((exports.$cloneWithProperties = require("Lexical").$cloneWithProperties),
      (exports.$selectAll = require("Lexical").$selectAll),
      (exports.$addNodeStyle = c),
      (exports.$copyBlockFormatIndent = g),
      (exports.$ensureForwardRangeSelection = a),
      (exports.$forEachSelectedTextNode = d),
      (exports.$getComputedStyleForElement = r),
      (exports.$getComputedStyleForParent = l),
      (exports.$getSelectionStyleValueForProperty = function (t, n, o) {
        if (o === void 0) {
          o = "";
        }
        var s = null;
        var r = t.getNodes(),
          l = t.anchor,
          i = t.focus,
          c = t.isBackward(),
          f = c ? i.getNode() : l.getNode(),
          d = c ? l.getNode() : i.getNode(),
          a = c ? i.offset : l.offset,
          g = c ? l.offset : i.offset;
        if (
          require("Lexical").$isRangeSelection(t) &&
          t.isCollapsed() &&
          "" !== t.style
        ) {
          var _o4 = t.style,
            _s3 = require("Lexical").getStyleObjectFromCSS(_o4);
          if (null !== _s3 && n in _s3) return _s3[n];
        }
        for (var _t16 = 0; _t16 < r.length; _t16++) {
          var _l3 = r[_t16];
          if (
            (0 !== _t16 ||
              !_l3.is(f) ||
              !require("Lexical").$isTextNode(_l3) ||
              a !== _l3.getTextContentSize()) &&
            (0 === _t16 || !_l3.is(d) || 0 !== g) &&
            require("Lexical").$isTextNode(_l3)
          ) {
            var _e13 = N(_l3, n, o);
            if (null === s) s = _e13;
            else if (s !== _e13) {
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
      (exports.$isParentElementRTL = m),
      (exports.$isParentRTL = function (e) {
        var t = l(e);
        return null !== t && "rtl" === t.direction;
      }),
      (exports.$moveCaretSelection = y),
      (exports.$moveCharacter = function (e, t, n) {
        var o = m(e);
        var s;
        ((s = h(e) || o ? !n : n), y(e, t, s, "character"));
      }),
      (exports.$patchStyleText = function (t, n) {
        if (require("Lexical").$isRangeSelection(t) && t.isCollapsed()) {
          f(t, n);
          var _o5 = t.anchor.getNode();
          require("Lexical").$isElementNode(_o5) && _o5.isEmpty() && f(_o5, n);
        }
        d(function (e) {
          f(e, n);
        });
        var o = t.getNodes();
        if (o.length > 0) {
          var _t17 = new Set();
          for (var _s4 of o) {
            if (
              !require("Lexical").$isElementNode(_s4) ||
              !_s4.canBeEmpty() ||
              0 !== _s4.getChildrenSize()
            )
              continue;
            var _o6 = _s4.getKey();
            _t17.has(_o6) || (_t17.add(_o6), f(_s4, n));
          }
        }
      }),
      (exports.$setBlocksType = function (t, n, o) {
        if (o === void 0) {
          o = g;
        }
        if (null === t) return;
        var s = t.getStartEndPoints(),
          r = new Map();
        var l = null;
        if (s) {
          var _require_Lexical;
          var _t18 = s[0],
            _n0 = s[1];
          ((l =
            (_require_Lexical = require("Lexical")).$createRangeSelection()),
            l.anchor.set(_t18.key, _t18.offset, _t18.type),
            l.focus.set(_n0.key, _n0.offset, _n0.type));
          var _o7 = _require_Lexical.$findMatchingParent(
              _t18.getNode(),
              _require_Lexical.INTERNAL_$isBlock,
            ),
            _i2 = _require_Lexical.$findMatchingParent(
              _n0.getNode(),
              _require_Lexical.INTERNAL_$isBlock,
            );
          (require("Lexical").$isElementNode(_o7) && r.set(_o7.getKey(), _o7),
            require("Lexical").$isElementNode(_i2) && r.set(_i2.getKey(), _i2));
        }
        for (var _n1 of t.getNodes())
          if (
            require("Lexical").$isElementNode(_n1) &&
            require("Lexical").INTERNAL_$isBlock(_n1)
          )
            r.set(_n1.getKey(), _n1);
          else if (null === s) {
            var _t19 = require("Lexical").$findMatchingParent(
              _n1,
              require("Lexical").INTERNAL_$isBlock,
            );
            require("Lexical").$isElementNode(_t19) &&
              r.set(_t19.getKey(), _t19);
          }
        for (var _ref3 of r) {
          var _e14 = _ref3[0];
          var _t20 = _ref3[1];
          {
            var _s5 = n();
            (o(_t20, _s5),
              _t20.replace(_s5, !0),
              l &&
                (_e14 === l.anchor.key &&
                  l.anchor.set(_s5.getKey(), l.anchor.offset, l.anchor.type),
                _e14 === l.focus.key &&
                  l.focus.set(_s5.getKey(), l.focus.offset, l.focus.type)));
          }
        }
        l &&
          t.is(require("Lexical").$getSelection()) &&
          require("Lexical").$setSelection(l);
      }),
      (exports.$shouldOverrideDefaultCharacterSelection = function (t, n) {
        var o = h(t) ? !n : n;
        m(t) && (o = !o);
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
            _l4 = s[1],
            _i3 = t.isBackward(),
            _c = _r3.getNode(),
            _f2 = _l4.getNode(),
            _d2 = n.is(_c),
            _a = n.is(_f2);
          if (_d2 || _a) {
            var _e$$getCharacterOffse =
                require("Lexical").$getCharacterOffsets(t),
              _s6 = _e$$getCharacterOffse[0],
              _r4 = _e$$getCharacterOffse[1],
              _l5 = _c.is(_f2),
              _d3 = n.is(_i3 ? _f2 : _c),
              _a2 = n.is(_i3 ? _c : _f2);
            var _g,
              _u = 0;
            if (_l5)
              ((_u = _s6 > _r4 ? _r4 : _s6), (_g = _s6 > _r4 ? _s6 : _r4));
            else if (_d3) {
              ((_u = _i3 ? _r4 : _s6), (_g = void 0));
            } else if (_a2) {
              ((_u = 0), (_g = _i3 ? _s6 : _r4));
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
      (exports.$trimTextContentFromAnchor = i),
      (exports.$wrapNodes = function (t, n, o) {
        if (o === void 0) {
          o = null;
        }
        var s = t.getStartEndPoints(),
          r = s ? s[0] : null,
          l = t.getNodes(),
          i = l.length;
        if (
          null !== r &&
          (0 === i ||
            (1 === i &&
              "element" === r.type &&
              0 === r.getNode().getChildrenSize()))
        ) {
          var _e15 =
              "text" === r.type ? r.getNode().getParentOrThrow() : r.getNode(),
            _t22 = _e15.getChildren();
          var _s7 = n();
          return (
            _s7.setFormat(_e15.getFormatType()),
            _s7.setIndent(_e15.getIndent()),
            _t22.forEach(function (e) {
              return _s7.append(e);
            }),
            o && (_s7 = o.append(_s7)),
            void _e15.replace(_s7)
          );
        }
        var c = null,
          f = [];
        for (var _s8 = 0; _s8 < i; _s8++) {
          var _r5 = l[_s8];
          require("Lexical").$isRootOrShadowRoot(_r5)
            ? ($(t, f, f.length, n, o), (f = []), (c = _r5))
            : null === c ||
                (null !== c && require("Lexical").$hasAncestor(_r5, c))
              ? f.push(_r5)
              : ($(t, f, f.length, n, o), (f = [_r5]));
        }
        $(t, f, f.length, n, o);
      }),
      (exports.createDOMRange = function (t, s, r, l, i) {
        var _o8, _o9;
        var c = s.getKey(),
          f = l.getKey(),
          d = document.createRange();
        var a = t.getElementByKey(c),
          g = t.getElementByKey(f),
          u = r,
          p = i;
        if (
          (require("Lexical").$isTextNode(s) && (a = n(a)),
          require("Lexical").$isTextNode(l) && (g = n(g)),
          void 0 === s || void 0 === l || null === a || null === g)
        )
          return null;
        ("BR" === a.nodeName && ((_o8 = o(a)), (a = _o8[0]), (u = _o8[1]), _o8),
          "BR" === g.nodeName &&
            ((_o9 = o(g)), (g = _o9[0]), (p = _o9[1]), _o9));
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
          l = Array.from(t.getClientRects());
        var i,
          c = l.length;
        l.sort(function (e, t) {
          var n = e.top - t.top;
          return Math.abs(n) <= 3 ? e.left - t.left : n;
        });
        for (var _e16 = 0; _e16 < c; _e16++) {
          var _t23 = l[_e16],
            _n10 =
              i &&
              i.top <= _t23.top &&
              i.top + i.height > _t23.top &&
              i.left + i.width > _t23.left,
            _s9 = _t23.width + r === o.width;
          _n10 || _s9 ? (l.splice(_e16--, 1), c--) : (i = _t23);
        }
        return l;
      }),
      (exports.getCSSFromStyleObject = s),
      (exports.getStyleObjectFromCSS = x),
      (exports.trimTextContentFromAnchor = T));
  },
  null,
);
