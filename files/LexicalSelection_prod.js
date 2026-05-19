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
    function s(t) {
      var n = require("Lexical").$getEditor().getElementByKey(t.getKey());
      if (null === n) return null;
      var o = n.ownerDocument.defaultView;
      return null === o ? null : o.getComputedStyle(n);
    }
    function l(t) {
      return s(require("Lexical").$isRootNode(t) ? t : t.getParentOrThrow());
    }
    function i(t, n, o) {
      var r = n.getNode(),
        s = o;
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
          l = 0;
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
          null !== _e4 && ((l = _e4.isInline() ? 0 : 2), (o = _t));
        }
        var i = r.getTextContent();
        "" === i &&
          require("Lexical").$isElementNode(r) &&
          !r.isInline() &&
          (i = "\n\n");
        var c = i.length;
        if (!require("Lexical").$isTextNode(r) || s >= c) {
          var _t2 = r.getParent();
          (r.remove(),
            null == _t2 ||
              0 !== _t2.getChildrenSize() ||
              require("Lexical").$isRootNode(_t2) ||
              _t2.remove(),
            (s -= c + l),
            (r = o));
        } else {
          var _o = r.getKey(),
            _l = t.getEditorState().read(function () {
              var t = require("Lexical").$getNodeByKey(_o);
              return require("Lexical").$isTextNode(t) && t.isSimpleText()
                ? t.getTextContent()
                : null;
            }),
            _d = c - s,
            _f = i.slice(0, _d);
          if (null !== _l && _l !== i) {
            var _t3 = require("Lexical").$getPreviousSelection();
            var _n2 = r;
            if (r.isSimpleText()) r.setTextContent(_l);
            else {
              var _t4 = require("Lexical").$createTextNode(_l);
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
            _t5 < s && (_t5 = c);
            var _l2 = _e6 ? _t5 - s : 0,
              _i = _e6 ? _t5 : _d;
            if (_e6 && 0 === _l2) {
              var _r$splitText = r.splitText(_l2, _i),
                _e7 = _r$splitText[0];
              _e7.remove();
            } else {
              var _r$splitText2 = r.splitText(_l2, _i),
                _e8 = _r$splitText2[1];
              _e8.remove();
            }
          } else {
            var _t6 = require("Lexical").$createTextNode(_f);
            r.replace(_t6);
          }
          s = 0;
        }
      };
      for (; s > 0 && null !== r; ) {
        _loop();
      }
    }
    var c = function c() {};
    function d(n, o) {
      (require("Lexical").$isRangeSelection(n)
        ? n.isCollapsed()
        : require("Lexical").$isTextNode(n) ||
          require("Lexical").$isElementNode(n)) || t(280);
      var s = require("Lexical").getStyleObjectFromCSS(
          require("Lexical").$isRangeSelection(n)
            ? n.style
            : require("Lexical").$isTextNode(n)
              ? n.getStyle()
              : n.getTextStyle(),
        ),
        l = r(
          Object.entries(o).reduce(
            function (e, _ref) {
              var t = _ref[0],
                o = _ref[1];
              return (
                "function" == typeof o
                  ? (e[t] = o(s[t], n))
                  : null === o
                    ? delete e[t]
                    : (e[t] = o),
                e
              );
            },
            babelHelpers["extends"]({}, s),
          ),
        );
      require("Lexical").$isRangeSelection(n) ||
      require("Lexical").$isTextNode(n)
        ? n.setStyle(l)
        : n.setTextStyle(l);
    }
    function f(t) {
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
      var s = n.getNodes();
      for (var _n3 of s) {
        if (!require("Lexical").$isTextNode(_n3) || !_n3.canHaveFormat())
          continue;
        var _r = r(_n3),
          _o2 = _r[0],
          _s = _r[1];
        if (_s !== _o2)
          if (
            require("Lexical").$isTokenOrSegmented(_n3) ||
            (0 === _o2 && _s === _n3.getTextContentSize())
          )
            t(_n3);
          else {
            t(_n3.splitText(_o2, _s)[0 === _o2 ? 0 : 1]);
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
          _s2 = _t8.type;
        (_t8.set(_n4.key, _n4.offset, _n4.type), _n4.set(_o3, _r2, _s2));
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
    function $(n, o, r, s, l) {
      if (l === void 0) {
        l = null;
      }
      if (0 === o.length) return;
      var i = o[0],
        c = new Map(),
        d = [];
      var f = require("Lexical").$isElementNode(i) ? i : i.getParentOrThrow();
      f.isInline() && (f = f.getParentOrThrow());
      var a = !1;
      for (; null !== f; ) {
        var _t0 = f.getPreviousSibling();
        if (null !== _t0) {
          ((f = _t0), (a = !0));
          break;
        }
        if (
          ((f = f.getParentOrThrow()),
          require("Lexical").$isRootOrShadowRoot(f))
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
        var _l3 = _r3.getParent();
        if (
          (null !== _l3 && _l3.isInline() && (_l3 = _l3.getParent()),
          null !== _l3 &&
            require("Lexical").$isLeafNode(_r3) &&
            !$.has(_r3.getKey()))
        ) {
          var _t10 = _l3.getKey();
          if (void 0 === c.get(_t10)) {
            var _n7 = s();
            (_n7.setFormat(_l3.getFormatType()),
              _n7.setIndent(_l3.getIndent()),
              d.push(_n7),
              c.set(_t10, _n7));
            var _o4 = _l3.getChildren();
            _n7.splice(_n7.getChildrenSize(), 0, _o4);
            for (var _t11 of _o4)
              if (
                ($.add(_t11.getKey()), require("Lexical").$isElementNode(_t11))
              )
                for (var _e0 of _t11.getChildrenKeys()) $.add(_e0);
            p(_l3);
          }
        } else if (g.has(_r3.getKey())) {
          require("Lexical").$isElementNode(_r3) || t(179);
          var _n8 = s();
          (_n8.setFormat(_r3.getFormatType()),
            _n8.setIndent(_r3.getIndent()),
            d.push(_n8),
            _r3.remove(!0));
        }
      }
      if (null !== l)
        for (var _e1 = 0; _e1 < d.length; _e1++) {
          var _t12 = d[_e1];
          l.append(_t12);
        }
      var h = null;
      if (require("Lexical").$isRootOrShadowRoot(f)) {
        if (a) {
          if (null !== l) f.insertAfter(l);
          else
            for (var _e10 = d.length - 1; _e10 >= 0; _e10--) {
              var _t13 = d[_e10];
              f.insertAfter(_t13);
            }
        } else {
          var _t14 = f.getFirstChild();
          if (
            (require("Lexical").$isElementNode(_t14) && (f = _t14),
            null === _t14)
          ) {
            if (l) f.append(l);
            else
              for (var _e11 = 0; _e11 < d.length; _e11++) {
                var _t15 = d[_e11];
                (f.append(_t15), (h = _t15));
              }
          } else if (null !== l) _t14.insertBefore(l);
          else
            for (var _e12 = 0; _e12 < d.length; _e12++) {
              var _n9 = d[_e12];
              (_t14.insertBefore(_n9), (h = _n9));
            }
        }
      } else if (l) f.insertAfter(l);
      else
        for (var _e13 = d.length - 1; _e13 >= 0; _e13--) {
          var _t16 = d[_e13];
          (f.insertAfter(_t16), (h = _t16));
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
      return require("Lexical").$isElementNode(n) ? s(n) : l(n);
    }
    function m(e, t, n, o) {
      e.modify(t ? "extend" : "move", n, o);
    }
    function N(e) {
      var t = S(e);
      return null !== t && "rtl" === t.direction;
    }
    function y(t, n, o) {
      var r = t.getStyle(),
        s = require("Lexical").getStyleObjectFromCSS(r);
      return (null !== s && s[n]) || o;
    }
    var x = require("Lexical").getStyleObjectFromCSS,
      T = i;
    ((exports.$cloneWithProperties = require("Lexical").$cloneWithProperties),
      (exports.$selectAll = require("Lexical").$selectAll),
      (exports.$addNodeStyle = c),
      (exports.$copyBlockFormatIndent = g),
      (exports.$ensureForwardRangeSelection = a),
      (exports.$forEachSelectedTextNode = f),
      (exports.$getComputedStyleForElement = s),
      (exports.$getComputedStyleForParent = l),
      (exports.$getSelectionStyleValueForProperty = function (t, n, o) {
        if (o === void 0) {
          o = "";
        }
        var r = null;
        var s = t.getNodes(),
          l = t.anchor,
          i = t.focus,
          c = t.isBackward(),
          d = c ? i.getNode() : l.getNode(),
          f = c ? l.getNode() : i.getNode(),
          a = c ? i.offset : l.offset,
          g = c ? l.offset : i.offset;
        if (
          require("Lexical").$isRangeSelection(t) &&
          t.isCollapsed() &&
          "" !== t.style
        ) {
          var _o5 = t.style,
            _r4 = require("Lexical").getStyleObjectFromCSS(_o5);
          if (null !== _r4 && n in _r4) return _r4[n];
        }
        for (var _t17 = 0; _t17 < s.length; _t17++) {
          var _l4 = s[_t17];
          if (
            (0 !== _t17 ||
              !_l4.is(d) ||
              !require("Lexical").$isTextNode(_l4) ||
              a !== _l4.getTextContentSize()) &&
            (0 === _t17 || !_l4.is(f) || 0 !== g) &&
            require("Lexical").$isTextNode(_l4)
          ) {
            var _e14 = y(_l4, n, o);
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
        var t = l(e);
        return null !== t && "rtl" === t.direction;
      }),
      (exports.$moveCaretSelection = m),
      (exports.$moveCharacter = function (e, t, n) {
        var o = N(e);
        var r;
        ((r = h(e) || o ? !n : n), m(e, t, r, "character"));
      }),
      (exports.$patchStyleText = function (t, n) {
        if (require("Lexical").$isRangeSelection(t) && t.isCollapsed()) {
          d(t, n);
          var _o6 = t.anchor.getNode();
          require("Lexical").$isElementNode(_o6) && _o6.isEmpty() && d(_o6, n);
        }
        f(function (e) {
          d(e, n);
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
            var _o7 = _r5.getKey();
            _t18.has(_o7) || (_t18.add(_o7), d(_r5, n));
          }
        }
      }),
      (exports.$setBlocksType = function (t, n, o) {
        if (o === void 0) {
          o = g;
        }
        if (null === t) return;
        var r = t.getStartEndPoints(),
          s = new Map();
        if (r) {
          var _require_Lexical;
          var _t19 = r[0],
            _n0 = r[1],
            _o8 = (_require_Lexical = require("Lexical")).$findMatchingParent(
              _t19.getNode(),
              _require_Lexical.INTERNAL_$isBlock,
            ),
            _l5 = _require_Lexical.$findMatchingParent(
              _n0.getNode(),
              _require_Lexical.INTERNAL_$isBlock,
            );
          (require("Lexical").$isElementNode(_o8) && s.set(_o8.getKey(), _o8),
            require("Lexical").$isElementNode(_l5) && s.set(_l5.getKey(), _l5));
        }
        for (var _n1 of t.getNodes())
          if (
            require("Lexical").$isElementNode(_n1) &&
            require("Lexical").INTERNAL_$isBlock(_n1)
          )
            s.set(_n1.getKey(), _n1);
          else if (null === r) {
            var _t20 = require("Lexical").$findMatchingParent(
              _n1,
              require("Lexical").INTERNAL_$isBlock,
            );
            require("Lexical").$isElementNode(_t20) &&
              s.set(_t20.getKey(), _t20);
          }
        for (var _ref3 of s) {
          var _e15 = _ref3[1];
          {
            var _t21 = n();
            (o(_e15, _t21), _e15.replace(_t21, !0));
          }
        }
      }),
      (exports.$shouldOverrideDefaultCharacterSelection = function (t, n) {
        var o = h(t) ? !n : n;
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
          var _s3 = r[0],
            _l6 = r[1],
            _i2 = t.isBackward(),
            _c = _s3.getNode(),
            _d2 = _l6.getNode(),
            _f2 = n.is(_c),
            _a = n.is(_d2);
          if (_f2 || _a) {
            var _e$$getCharacterOffse =
                require("Lexical").$getCharacterOffsets(t),
              _r6 = _e$$getCharacterOffse[0],
              _s4 = _e$$getCharacterOffse[1],
              _l7 = _c.is(_d2),
              _f3 = n.is(_i2 ? _d2 : _c),
              _a2 = n.is(_i2 ? _c : _d2);
            var _g,
              _u = 0;
            if (_l7)
              ((_u = _r6 > _s4 ? _s4 : _r6), (_g = _r6 > _s4 ? _r6 : _s4));
            else if (_f3) {
              ((_u = _i2 ? _s4 : _r6), (_g = void 0));
            } else if (_a2) {
              ((_u = 0), (_g = _i2 ? _r6 : _s4));
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
        var r = t.getStartEndPoints(),
          s = r ? r[0] : null,
          l = t.getNodes(),
          i = l.length;
        if (
          null !== s &&
          (0 === i ||
            (1 === i &&
              "element" === s.type &&
              0 === s.getNode().getChildrenSize()))
        ) {
          var _e16 =
              "text" === s.type ? s.getNode().getParentOrThrow() : s.getNode(),
            _t23 = _e16.getChildren();
          var _r7 = n();
          return (
            _r7.setFormat(_e16.getFormatType()),
            _r7.setIndent(_e16.getIndent()),
            _t23.forEach(function (e) {
              return _r7.append(e);
            }),
            o && (_r7 = o.append(_r7)),
            void _e16.replace(_r7)
          );
        }
        var c = null,
          d = [];
        for (var _r8 = 0; _r8 < i; _r8++) {
          var _s5 = l[_r8];
          require("Lexical").$isRootOrShadowRoot(_s5)
            ? ($(t, d, d.length, n, o), (d = []), (c = _s5))
            : null === c ||
                (null !== c && require("Lexical").$hasAncestor(_s5, c))
              ? d.push(_s5)
              : ($(t, d, d.length, n, o), (d = [_s5]));
        }
        $(t, d, d.length, n, o);
      }),
      (exports.createDOMRange = function (t, r, s, l, i) {
        var _o9, _o0;
        var c = r.getKey(),
          d = l.getKey(),
          f = document.createRange();
        var a = t.getElementByKey(c),
          g = t.getElementByKey(d),
          u = s,
          p = i;
        if (
          (require("Lexical").$isTextNode(r) && (a = n(a)),
          require("Lexical").$isTextNode(l) && (g = n(g)),
          void 0 === r || void 0 === l || null === a || null === g)
        )
          return null;
        ("BR" === a.nodeName && ((_o9 = o(a)), (a = _o9[0]), (u = _o9[1]), _o9),
          "BR" === g.nodeName &&
            ((_o0 = o(g)), (g = _o0[0]), (p = _o0[1]), _o0));
        var $ = a.firstChild;
        a === g &&
          null != $ &&
          "BR" === $.nodeName &&
          0 === u &&
          0 === p &&
          (p = 1);
        try {
          (f.setStart(a, u), f.setEnd(g, p));
        } catch (e) {
          return null;
        }
        return (
          !f.collapsed ||
            (u === p && c === d) ||
            (f.setStart(g, p), f.setEnd(a, u)),
          f
        );
      }),
      (exports.createRectsFromDOMRange = function (e, t) {
        var n = e.getRootElement();
        if (null === n) return [];
        var o = n.getBoundingClientRect(),
          r = getComputedStyle(n),
          s = parseFloat(r.paddingLeft) + parseFloat(r.paddingRight),
          l = Array.from(t.getClientRects());
        var i,
          c = l.length;
        l.sort(function (e, t) {
          var n = e.top - t.top;
          return Math.abs(n) <= 3 ? e.left - t.left : n;
        });
        for (var _e17 = 0; _e17 < c; _e17++) {
          var _t24 = l[_e17],
            _n10 =
              i &&
              i.top <= _t24.top &&
              i.top + i.height > _t24.top &&
              i.left + i.width > _t24.left,
            _r9 = _t24.width + s === o.width;
          _n10 || _r9 ? (l.splice(_e17--, 1), c--) : (i = _t24);
        }
        return l;
      }),
      (exports.getCSSFromStyleObject = r),
      (exports.getStyleObjectFromCSS = x),
      (exports.trimTextContentFromAnchor = T));
  },
  null,
);
