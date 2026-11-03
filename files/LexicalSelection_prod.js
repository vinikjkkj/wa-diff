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
      var i = t.getElementByKey(n.getKey());
      if (null === i || require("Lexical").$isTextNode(n))
        return [require("Lexical").getDOMTextNode(i), o];
      var l = i.parentNode;
      return l && "BR" === i.nodeName
        ? [l, Array.from(l.childNodes).indexOf(i)]
        : t.read("latest", function () {
            return require("Lexical").$getElementAndOffsetForPoint(t, n, o);
          });
    }
    function i(e) {
      var t = "";
      for (var _n in e) _n && (t += _n + ": " + e[_n] + ";");
      return t;
    }
    function l(t) {
      var n = require("Lexical").$getEditor().getElementByKey(t.getKey());
      if (null === n) return null;
      var o = n.ownerDocument.defaultView;
      return null === o ? null : o.getComputedStyle(n);
    }
    function s(t) {
      var n = require("Lexical").$isRootNode(t) ? t : t.getParent();
      return n && l(n);
    }
    function r(t, n, o) {
      var i = n.getNode(),
        l = o;
      if (require("Lexical").$isElementNode(i)) {
        var _e2 = i.getDescendantByIndex(n.offset);
        null !== _e2 && (i = _e2);
      }
      var _loop = function _loop() {
        if (require("Lexical").$isElementNode(i)) {
          var _e3 = i.getLastDescendant();
          null !== _e3 && (i = _e3);
        }
        var o = i.getPreviousSibling(),
          s = 0;
        if (null === o) {
          var _e4 = i.getParentOrThrow(),
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
        var r = i.getTextContent();
        "" === r &&
          require("Lexical").$isElementNode(i) &&
          !i.isInline() &&
          (r = "\n\n");
        var c = r.length;
        if (!require("Lexical").$isTextNode(i) || l >= c) {
          var _t2 = i.getParent();
          (i.remove(),
            null == _t2 ||
              0 !== _t2.getChildrenSize() ||
              require("Lexical").$isRootNode(_t2) ||
              _t2.remove(),
            (l -= c + s),
            (i = o));
        } else {
          var _o = i.getKey(),
            _s = t.read("latest", function () {
              var t = require("Lexical").$getNodeByKey(_o);
              return require("Lexical").$isTextNode(t) && t.isSimpleText()
                ? t.getTextContent()
                : null;
            }),
            _f = c - l,
            _u = r.slice(0, _f);
          if (null !== _s && _s !== r) {
            var _t3 = require("Lexical").$getPreviousSelection();
            var _n2 = i;
            if (i.isSimpleText()) i.setTextContent(_s);
            else {
              var _t4 = require("Lexical").$createTextNode(_s);
              (i.replace(_t4), (_n2 = _t4));
            }
            if (
              require("Lexical").$isRangeSelection(_t3) &&
              _t3.isCollapsed()
            ) {
              var _e5 = _t3.anchor.offset;
              _n2.select(_e5, _e5);
            }
          } else if (i.isSimpleText()) {
            var _e6 = n.key === _o;
            var _t5 = n.offset;
            _t5 < l && (_t5 = c);
            var _s2 = _e6 ? _t5 - l : 0,
              _r = _e6 ? _t5 : _f;
            if (_e6 && 0 === _s2) {
              var _i$splitText = i.splitText(_s2, _r),
                _e7 = _i$splitText[0];
              _e7.remove();
            } else {
              var _i$splitText2 = i.splitText(_s2, _r),
                _e8 = _i$splitText2[1];
              _e8.remove();
            }
          } else {
            var _t6 = require("Lexical").$createTextNode(_u);
            i.replace(_t6);
          }
          l = 0;
        }
      };
      for (; l > 0 && null !== i; ) {
        _loop();
      }
    }
    var c = n();
    function f(n, o) {
      (require("Lexical").$isRangeSelection(n)
        ? n.isCollapsed()
        : require("Lexical").$isTextNode(n) ||
          require("Lexical").$isElementNode(n)) || t(280);
      var l = require("Lexical").getStyleObjectFromCSS(
          require("Lexical").$isRangeSelection(n)
            ? n.style
            : require("Lexical").$isTextNode(n)
              ? n.getStyle()
              : n.getTextStyle(),
        ),
        s = i(
          Object.entries(o).reduce(
            function (e, _ref) {
              var t = _ref[0],
                o = _ref[1];
              return (
                "function" == typeof o
                  ? (e[t] = o(l[t], n))
                  : null === o
                    ? delete e[t]
                    : (e[t] = o),
                e
              );
            },
            babelHelpers["extends"]({}, l),
          ),
        );
      require("Lexical").$isRangeSelection(n) ||
      require("Lexical").$isTextNode(n)
        ? n.setStyle(s)
        : n.setTextStyle(s);
    }
    function u(t, n) {
      if (!t) return;
      var o = require("Lexical").$isRangeSelection(t)
        ? require("Lexical").$caretRangeFromSelection(t).getTextSlices()
        : [];
      for (var _i of t.getNodes()) {
        if (!require("Lexical").$isTextNode(_i) || !_i.canHaveFormat())
          continue;
        var _l = require("Lexical").$getTextPointCaretSliceForNode(o, _i);
        (_l ? 0 !== _l.distance : 0 !== _i.getTextContentSize()) &&
          n(
            _l && !require("Lexical").$isTokenOrSegmented(_i)
              ? require("Lexical").$splitTextPointCaretSlice(
                  _l,
                  require("Lexical").$isRangeSelection(t) ? t : null,
                )
              : _i,
          );
      }
      require("Lexical").$isRangeSelection(t) &&
        "text" === t.anchor.type &&
        "text" === t.focus.type &&
        t.anchor.key === t.focus.key &&
        a(t);
    }
    function a(e) {
      if (e.isBackward()) {
        var _t7 = e.anchor,
          _n3 = e.focus,
          _o2 = _t7.key,
          _i2 = _t7.offset,
          _l2 = _t7.type;
        (_t7.set(_n3.key, _n3.offset, _n3.type), _n3.set(_o2, _i2, _l2));
      }
    }
    function g(e, t) {
      var n = e.getFormatType(),
        o = e.getIndent();
      (n !== t.getFormatType() && t.setFormat(n),
        o !== t.getIndent() && t.setIndent(o));
    }
    function d(t, n, o) {
      var i = require("Lexical").$caretFromPoint(t, o);
      if (require("Lexical").$isExtendableTextPointCaret(i)) return !1;
      for (; i; i = i.getParentCaret()) {
        var _e9 = i.getParentAtCaret();
        if (!_e9 || i.getNodeAtCaret()) return !1;
        if (n.is(_e9)) return !0;
      }
      return !1;
    }
    function p(e) {
      return e.getNode().isAttached();
    }
    function $(t) {
      var n = t;
      for (; null !== n && !require("Lexical").$isBlockContainer(n); ) {
        var _e0 = n.getLatest(),
          _t8 = n.getParent();
        (0 === _e0.getChildrenSize() && n.remove(!0), (n = _t8));
      }
    }
    function y(t, n) {
      if (n === void 0) {
        n = new Map();
      }
      var o = [];
      var i,
        l = t;
      for (; void 0 === i; )
        null === l
          ? (i = null)
          : n.has(l.getKey())
            ? (i = n.get(l.getKey()))
            : require("Lexical").$isBlockContainer(l) ||
                (require("Lexical").$isElementNode(l) &&
                  !require("Lexical").INTERNAL_isInlineContent(l))
              ? (i = l)
              : (o.push(l.getKey()), (l = l.getParent()));
      for (var _e1 of o) n.set(_e1, i);
      return i;
    }
    function N(t, n) {
      if (n === void 0) {
        n = new Map();
      }
      var o = t.getParent();
      if (
        null === o ||
        !require("Lexical").$isLeafNode(t) ||
        require("Lexical").INTERNAL_isInlineContent(t) ||
        require("Lexical").$isBlockContainer(o)
      )
        return !1;
      var i = n.get(o.getKey());
      return (
        void 0 === i &&
          ((i = o.getChildren().every(function (t) {
            return !require("Lexical").INTERNAL_isInlineContent(t);
          })),
          n.set(o.getKey(), i)),
        i
      );
    }
    function S(t) {
      return (
        require("Lexical").$isElementNode(t) &&
        0 === t.getChildrenSize() &&
        !require("Lexical").INTERNAL_isInlineContent(t)
      );
    }
    function m(e, t, n) {
      if (n === void 0) {
        n = new Map();
      }
      var o = [];
      var i = t,
        l = n.get(i.getKey());
      for (; void 0 === l; ) {
        var _t9 = i.getParent();
        if (null === _t9 || _t9.is(e)) {
          l = i;
          break;
        }
        (o.push(i.getKey()), (i = _t9), (l = n.get(i.getKey())));
      }
      for (var _e10 of o) n.set(_e10, l);
      return (n.set(t.getKey(), l), l);
    }
    function h(t) {
      var n = t;
      for (
        var _t0 = n.getPreviousSibling();
        null !== _t0 && require("Lexical").INTERNAL_isInlineContent(_t0);
        _t0 = _t0.getPreviousSibling()
      )
        n = _t0;
      var o = [];
      for (
        var _t1 = n;
        null !== _t1 && require("Lexical").INTERNAL_isInlineContent(_t1);
        _t1 = _t1.getNextSibling()
      )
        o.push(_t1);
      return o;
    }
    function x(n, o, i, l, s) {
      var _o$find;
      if (s === void 0) {
        s = null;
      }
      if (0 === o.length) return;
      var r =
          (_o$find = o.find(function (t, n) {
            return (
              n < i &&
              ((require("Lexical").$isLeafNode(t) && null !== t.getParent()) ||
                S(t))
            );
          })) != null
            ? _o$find
            : o[0],
        c = new Map(),
        f = [],
        u = new Map(),
        a = new Map(),
        g = new Map(),
        d = y(r, u);
      if (null === d) return;
      var x = d;
      if (require("Lexical").$isBlockContainer(d)) {
        var _t10 = m(d, r, a);
        x = require("Lexical").INTERNAL_isInlineContent(_t10)
          ? h(_t10)[0]
          : _t10;
      } else N(r, g) && (x = r);
      var C = !1;
      for (; null !== x; ) {
        var _t11 = x.getPreviousSibling();
        if (null !== _t11) {
          ((x = _t11), (C = !0));
          break;
        }
        if (
          ((x = x.getParentOrThrow()), require("Lexical").$isBlockContainer(x))
        )
          break;
      }
      var T = new Set();
      for (var _e11 = 0; _e11 < i; _e11++) {
        var _t12 = o[_e11];
        S(_t12) && T.add(_t12.getKey());
      }
      var E = new Set(),
        k = [],
        R = [],
        P = new Map();
      for (var _t13 = 0; _t13 < i; _t13++) {
        var _n4 = o[_t13].getParent();
        if (null !== _n4 && N(o[_t13], g)) {
          R.push({ block: _n4, key: o[_t13].getKey(), run: [o[_t13]] });
          continue;
        }
        var _i3 = null === _n4 ? null : y(_n4, u);
        if (null === _i3 || !require("Lexical").$isBlockContainer(_i3)) {
          R.push(_i3 && { block: _i3, key: _i3.getKey(), run: null });
          continue;
        }
        var _l3 = m(_i3, o[_t13], a),
          _s3 = require("Lexical").INTERNAL_isInlineContent(_l3);
        if (!_s3 && !require("Lexical").$isLeafNode(_l3)) {
          R.push(null);
          continue;
        }
        var _r2 = P.get(_l3.getKey());
        if (void 0 === _r2) {
          var _e12 = _s3 ? h(_l3) : [_l3];
          _r2 = { block: _i3, key: _e12[0].getKey(), run: _e12 };
          for (var _t14 of _e12) P.set(_t14.getKey(), _r2);
        }
        R.push(_r2);
      }
      var _loop2 = function _loop2() {
        var i = o[_n5],
          s = R[_n5];
        if (
          null !== s &&
          require("Lexical").$isLeafNode(i) &&
          !E.has(i.getKey())
        ) {
          var _t20 = s.block,
            _n8 = s.key;
          if (void 0 === c.get(_n8)) {
            var _s$run;
            var _o3 = l();
            (null === s.run &&
              (_o3.setFormat(_t20.getFormatType()),
              _o3.setIndent(_t20.getIndent())),
              f.push(_o3),
              c.set(_n8, _o3));
            var _i4 = (_s$run = s.run) != null ? _s$run : _t20.getChildren();
            _o3.splice(_o3.getChildrenSize(), 0, _i4);
            for (var _t21 of _i4)
              if (
                (E.add(_t21.getKey()), require("Lexical").$isElementNode(_t21))
              )
                for (var _e19 of _t21.getChildrenKeys()) E.add(_e19);
            k.push(function () {
              return $(_t20);
            });
          }
        } else if (T.has(i.getKey())) {
          require("Lexical").$isElementNode(i) || t(179);
          var _n9 = l();
          (_n9.setFormat(i.getFormatType()),
            _n9.setIndent(i.getIndent()),
            f.push(_n9),
            k.push(function () {
              return i.remove(!0);
            }));
        }
      };
      for (var _n5 = 0; _n5 < i; _n5++) {
        _loop2();
      }
      if (null !== s)
        for (var _e13 = 0; _e13 < f.length; _e13++) {
          var _t15 = f[_e13];
          s.append(_t15);
        }
      var v = null;
      if (require("Lexical").$isBlockContainer(x)) {
        if (C) {
          if (null !== s) x.insertAfter(s);
          else
            for (var _e14 = f.length - 1; _e14 >= 0; _e14--) {
              var _t16 = f[_e14];
              x.insertAfter(_t16);
            }
        } else {
          var _t17 = x,
            _n6 = _t17.getFirstChild();
          if (
            (require("Lexical").$isElementNode(_n6) && (x = _n6), null === _n6)
          ) {
            if (s) _t17.append(s);
            else
              for (var _e15 = 0; _e15 < f.length; _e15++) {
                var _n7 = f[_e15];
                (_t17.append(_n7), (v = _n7));
              }
          } else if (null !== s) _n6.insertBefore(s);
          else
            for (var _e16 = 0; _e16 < f.length; _e16++) {
              var _t18 = f[_e16];
              (_n6.insertBefore(_t18), (v = _t18));
            }
        }
      } else if (s) x.insertAfter(s);
      else
        for (var _e17 = f.length - 1; _e17 >= 0; _e17--) {
          var _t19 = f[_e17];
          (x.insertAfter(_t19), (v = _t19));
        }
      for (var _e18 of k) _e18();
      var F = require("Lexical").$getPreviousSelection();
      require("Lexical").$isRangeSelection(F) && p(F.anchor) && p(F.focus)
        ? require("Lexical").$setSelection(F.clone())
        : null !== v
          ? v.selectEnd()
          : (n.dirty = !0);
    }
    function C(e) {
      var t = T(e);
      return null !== t && "vertical-rl" === t.writingMode;
    }
    function T(t) {
      var n = t.anchor.getNode();
      return require("Lexical").$isElementNode(n) ? l(n) : s(n);
    }
    function E(e, t, n, o) {
      e.modify(t ? "extend" : "move", n, o);
    }
    function k(e) {
      var t = T(e);
      return null !== t && "rtl" === t.direction;
    }
    function R(t, n, o) {
      var i = t.getStyle(),
        l = require("Lexical").getStyleObjectFromCSS(i);
      return (null !== l && l[n]) || o;
    }
    var P = require("Lexical").getStyleObjectFromCSS,
      v = r;
    ((exports.$cloneWithProperties = require("Lexical").$cloneWithProperties),
      (exports.$selectAll = require("Lexical").$selectAll),
      (exports.$addNodeStyle = c),
      (exports.$copyBlockFormatIndent = g),
      (exports.$ensureForwardRangeSelection = a),
      (exports.$forEachSelectedTextNode = function (t) {
        u(require("Lexical").$getSelection(), t);
      }),
      (exports.$getComputedStyleForElement = l),
      (exports.$getComputedStyleForParent = s),
      (exports.$getSelectionStyleValueForProperty = function (t, n, o) {
        if (o === void 0) {
          o = "";
        }
        var i = null;
        var l = t.getNodes();
        var s, r;
        if (require("Lexical").$isRangeSelection(t)) {
          if (t.isCollapsed() && "" !== t.style) {
            var _o4 = require("Lexical").getStyleObjectFromCSS(t.style);
            if (null !== _o4 && n in _o4) return _o4[n];
          }
          var _o5 = t.anchor,
            _i5 = t.focus,
            _l4 = t.isBackward(),
            _c = _l4 ? _i5.getNode() : _o5.getNode(),
            _f2 = _l4 ? _o5.getNode() : _i5.getNode(),
            _u2 = _l4 ? _i5.offset : _o5.offset,
            _a = _l4 ? _o5.offset : _i5.offset;
          (require("Lexical").$isTextNode(_c) &&
            _u2 === _c.getTextContentSize() &&
            (s = _c),
            0 === _a && (r = _f2));
        }
        for (var _t22 = 0; _t22 < l.length; _t22++) {
          var _c2 = l[_t22];
          if (
            require("Lexical").$isTextNode(_c2) &&
            !_c2.is(0 === _t22 ? s : r)
          ) {
            var _e20 = R(_c2, n, o);
            if (null === i) i = _e20;
            else if (i !== _e20) {
              i = "";
              break;
            }
          }
        }
        return null === i ? o : i;
      }),
      (exports.$isAtEdgeOfElement = d),
      (exports.$isAtNodeEnd = function (n) {
        if ("text" === n.type)
          return n.offset === n.getNode().getTextContentSize();
        var o = n.getNode();
        return (
          require("Lexical").$isElementNode(o) || t(177),
          n.offset === o.getChildrenSize()
        );
      }),
      (exports.$isParentElementRTL = k),
      (exports.$isParentRTL = function (e) {
        var t = s(e);
        return null !== t && "rtl" === t.direction;
      }),
      (exports.$moveCaretSelection = E),
      (exports.$moveCharacter = function (e, t, n) {
        var o = k(e);
        var i;
        ((i = C(e) || o ? !n : n), E(e, t, i, "character"));
      }),
      (exports.$patchStyleText = function (t, n) {
        var o = new Set();
        if (require("Lexical").$isRangeSelection(t) && t.isCollapsed()) {
          f(t, n);
          var _i6 = t.anchor.getNode();
          require("Lexical").$isElementNode(_i6) &&
            _i6.isEmpty() &&
            (o.add(_i6.getKey()), f(_i6, n));
        }
        u(t, function (e) {
          f(e, n);
        });
        var i = t.getNodes();
        if (i.length > 0)
          for (var _t23 of i) {
            if (
              !require("Lexical").$isElementNode(_t23) ||
              !_t23.canBeEmpty() ||
              0 !== _t23.getChildrenSize()
            )
              continue;
            var _i7 = _t23.getKey();
            o.has(_i7) || (o.add(_i7), f(_t23, n));
          }
      }),
      (exports.$setBlocksType = function (t, n, o) {
        if (o === void 0) {
          o = g;
        }
        if (!t) return;
        var i = t.getStartEndPoints();
        var l = !1,
          s = null;
        var r = new Map();
        if (i) {
          var _require_Lexical;
          var _n0 = i[0],
            _o6 = i[1],
            _c3 = (_require_Lexical = require("Lexical")).$findMatchingParent(
              _n0.getNode(),
              _require_Lexical.INTERNAL_$isBlock,
            );
          s = _require_Lexical.$findMatchingParent(
            _o6.getNode(),
            _require_Lexical.INTERNAL_$isBlock,
          );
          var _f3 = t.isBackward() ? "previous" : "next";
          ((l =
            require("Lexical").$isElementNode(s) &&
            !s.is(_c3) &&
            (function (t, n, o) {
              var i = t.getNode();
              return (
                (!require("Lexical").$isElementNode(i) || !i.isEmpty()) &&
                d(t, n, o)
              );
            })(_o6, s, require("Lexical").flipDirection(_f3))),
            require("Lexical").$isElementNode(_c3) && r.set(_c3.getKey(), _c3),
            require("Lexical").$isElementNode(s) && !l && r.set(s.getKey(), s));
        }
        for (var _n1 of t.getNodes())
          if (
            require("Lexical").$isElementNode(_n1) &&
            require("Lexical").INTERNAL_$isBlock(_n1)
          ) {
            if (l && _n1.is(s)) continue;
            r.set(_n1.getKey(), _n1);
          } else if (!i) {
            var _t24 = require("Lexical").$findMatchingParent(
              _n1,
              require("Lexical").INTERNAL_$isBlock,
            );
            require("Lexical").$isElementNode(_t24) &&
              r.set(_t24.getKey(), _t24);
          }
        for (var _i8 of r.values()) {
          if (null !== require("Lexical").$getSlotHost(_i8)) continue;
          if (require("Lexical").$isBlockContainer(_i8)) {
            var _o7 = [];
            for (var _n10 of new Set([t, require("Lexical").$getSelection()]))
              if (require("Lexical").$isRangeSelection(_n10))
                for (var _e21 of [_n10.anchor, _n10.focus])
                  _e21.key === _i8.getKey() && _o7.push(_e21);
            if (_o7.length > 0 && _i8.isEmpty()) {
              var _e22 = n();
              _i8.append(_e22);
              for (var _t25 of _o7) _t25.set(_e22.getKey(), 0, "element");
            }
            continue;
          }
          var _l5 = n();
          (o(_i8, _l5), _i8.replace(_l5, !0));
        }
      }),
      (exports.$shouldOverrideDefaultCharacterSelection = function (t, n) {
        var o = C(t) ? !n : n;
        k(t) && (o = !o);
        var i = require("Lexical").$caretFromPoint(
          t.focus,
          o ? "previous" : "next",
        );
        if (require("Lexical").$isExtendableTextPointCaret(i)) return !1;
        if (
          require("Lexical").$isTextPointCaret(i) &&
          !require("Lexical").$isTabNode(i.origin) &&
          i.origin.isUnmergeable()
        ) {
          var _t26 = i.getNodeAtCaret();
          if (
            require("Lexical").$isTextNode(_t26) &&
            !require("Lexical").$isTabNode(_t26)
          )
            return !0;
        }
        for (var _t27 of require("Lexical").$extendCaretToRange(i)) {
          if (require("Lexical").$isChildCaret(_t27))
            return !_t27.origin.isInline();
          if (!require("Lexical").$isElementNode(_t27.origin)) {
            if (require("Lexical").$isDecoratorNode(_t27.origin)) return !0;
            break;
          }
        }
        return !1;
      }),
      (exports.$sliceSelectedTextNodeContent = function (t, n, o) {
        if (o === void 0) {
          o = "self";
        }
        var i = t.getStartEndPoints();
        if (
          null !== i &&
          (i[0].key === n.__key || i[1].key === n.__key) &&
          n.isSelected(t) &&
          !require("Lexical").$isTokenOrSegmented(n)
        ) {
          var _ref2 = t.isBackward() ? [i[1], i[0]] : i,
            _l6 = _ref2[0],
            _s4 = _ref2[1],
            _r3 =
              !require("Lexical").$isRangeSelection(t) ||
              ("element" !== _l6.type && "element" !== _s4.type)
                ? void 0
                : require("Lexical").$getTextPointCaretSliceForNode(
                    require("Lexical")
                      .$caretRangeFromSelection(t)
                      .getTextSlices(),
                    n,
                  ),
            _ref3 = _r3
              ? _r3.getSliceIndices()
              : [
                  n.__key === _l6.key ? _l6.offset : 0,
                  n.__key === _s4.key ? _s4.offset : void 0,
                ],
            _c4 = _ref3[0],
            _f4 = _ref3[1],
            _u3 = n.__text.slice(_c4, _f4);
          _u3 !== n.__text &&
            ("clone" === o &&
              (n = require("Lexical").$cloneWithPropertiesEphemeral(n)),
            (n.__text = _u3));
        }
        return n;
      }),
      (exports.$trimTextContentFromAnchor = r),
      (exports.$wrapNodes = function (t, n, o) {
        if (o === void 0) {
          o = null;
        }
        var i = t.getStartEndPoints(),
          l = i ? i[0] : null,
          s = t.getNodes(),
          r = s.length;
        if (null !== l) {
          var _t28 = require("Lexical").$getSlotFrame(l.getNode());
          if (null !== _t28 && !require("Lexical").$isBlockContainer(_t28))
            return;
        }
        if (
          null !== l &&
          (0 === r ||
            (1 === r &&
              "element" === l.type &&
              0 === l.getNode().getChildrenSize()))
        ) {
          var _t29 = y(l.getNode());
          if (null === _t29) return;
          var _i9 = _t29.getChildren();
          var _s5 = n();
          var _r4 = require("Lexical").$isBlockContainer(_t29);
          return (
            _r4 ||
              (_s5.setFormat(_t29.getFormatType()),
              _s5.setIndent(_t29.getIndent())),
            _i9.forEach(function (e) {
              return _s5.append(e);
            }),
            o && (_s5 = o.append(_s5)),
            void (_r4
              ? (_t29.append(_s5), _s5.selectStart())
              : _t29.replace(_s5))
          );
        }
        var c = null,
          f = [];
        for (var _i0 = 0; _i0 < r; _i0++) {
          var _l7 = s[_i0];
          require("Lexical").$isBlockContainer(_l7)
            ? (x(t, f, f.length, n, o), (f = []), (c = _l7))
            : null === c ||
                (null !== c && require("Lexical").$hasAncestor(_l7, c))
              ? f.push(_l7)
              : (x(t, f, f.length, n, o), (f = [_l7]));
        }
        x(t, f, f.length, n, o);
      }),
      (exports.createDOMRange = function (t, n, i, l, s) {
        var r = require("Lexical")
            .getRootOwnerDocument(t.getRootElement())
            .createRange(),
          _o8 = o(t, n, i),
          c = _o8[0],
          f = _o8[1],
          _o9 = o(t, l, s),
          u = _o9[0],
          a = _o9[1];
        var g = a;
        if (null === c || null === u) return null;
        var d = c.firstChild;
        c === u &&
          null != d &&
          "BR" === d.nodeName &&
          0 === f &&
          0 === g &&
          (g = 1);
        try {
          (r.setStart(c, f), r.setEnd(u, g));
        } catch (e) {
          return null;
        }
        return (
          !r.collapsed ||
            (f === g && n.is(l)) ||
            (r.setStart(u, g), r.setEnd(c, f)),
          r
        );
      }),
      (exports.createRectsFromDOMRange = function (e, t) {
        var n = e.getRootElement();
        if (null === n) return [];
        var o = n.getBoundingClientRect(),
          i = getComputedStyle(n),
          l = parseFloat(i.paddingLeft) + parseFloat(i.paddingRight),
          s = Array.from(t.getClientRects());
        var r,
          c = s.length;
        s.sort(function (e, t) {
          var n = e.top - t.top;
          return Math.abs(n) <= 3 ? e.left - t.left : n;
        });
        for (var _e23 = 0; _e23 < c; _e23++) {
          var _t30 = s[_e23],
            _n11 =
              r &&
              r.top <= _t30.top &&
              r.bottom >= _t30.bottom &&
              r.left <= _t30.left &&
              r.right >= _t30.right,
            _i1 = _t30.width + l === o.width;
          _n11 || _i1 ? (s.splice(_e23--, 1), c--) : (r = _t30);
        }
        return s;
      }),
      (exports.getCSSFromStyleObject = i),
      (exports.getStyleObjectFromCSS = P),
      (exports.trimTextContentFromAnchor = v));
  },
  null,
);
