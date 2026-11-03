__d(
  "LexicalText.prod",
  ["Lexical"],
  function $module_LexicalText_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    function e() {
      return require("Lexical").$getRoot().getTextContent();
    }
    function n(t, n) {
      if (n === void 0) {
        n = !0;
      }
      if (t) return !1;
      var o = e();
      return (n && (o = o.trim()), "" === o);
    }
    function o(e) {
      if (!n(e, !1)) return !1;
      var o = require("Lexical").$getRoot().getChildren(),
        i = o.length;
      if (i > 1) return !1;
      for (var _e = 0; _e < i; _e++) {
        var _n = o[_e];
        if (require("Lexical").$isDecoratorNode(_n)) return !1;
        if (require("Lexical").$isElementNode(_n)) {
          if (!require("Lexical").$isParagraphNode(_n)) return !1;
          if (0 !== _n.__indent) return !1;
          var _e2 = _n.getChildren(),
            _o = _e2.length;
          for (var _n2 = 0; _n2 < _o; _n2++) {
            var _o2 = _e2[_n2];
            if (!require("Lexical").$isTextNode(_o2)) return !1;
          }
        }
      }
      return !0;
    }
    function i(t) {
      for (
        var _len = arguments.length,
          e = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        e[_key - 1] = arguments[_key];
      }
      throw function (t) {
        var n = new URL("https://lexical.dev/docs/error"),
          o = new URLSearchParams();
        o.append("code", t);
        for (
          var _len2 = arguments.length,
            e = new Array(_len2 > 1 ? _len2 - 1 : 0),
            _key2 = 1;
          _key2 < _len2;
          _key2++
        ) {
          e[_key2 - 1] = arguments[_key2];
        }
        for (var _t of e) o.append("v", _t);
        return (
          (n.search = o.toString()),
          new Error(
            "Minified Lexical error #" +
              t +
              "; visit " +
              n.toString() +
              " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
          )
        );
      }.apply(void 0, [t].concat(Array.from(e)));
    }
    function r(e, n) {
      var o = e.getLatest().__state;
      if (void 0 === o || 0 === o.size) return;
      var i = new Set(),
        r = n.getLatest().__state;
      if (void 0 !== r) {
        var _r$getInternalState = r.getInternalState(),
          _t2 = _r$getInternalState[0],
          _e3 = _r$getInternalState[1];
        for (var _e4 in _t2) i.add(_e4);
        for (var _t3 of _e3.keys()) i.add(_t3.key);
      }
      var _o$getInternalState = o.getInternalState(),
        s = _o$getInternalState[0],
        l = _o$getInternalState[1];
      var a;
      var g = function g() {
        return a || (a = require("Lexical").$getWritableNodeState(n));
      };
      for (var _ref2 of l) {
        var _t4 = _ref2[0];
        var _e5 = _ref2[1];
        {
          var _n3 = _t4.key;
          if (i.has(_n3)) continue;
          if ((i.add(_n3), _t4.isEqual(_e5, _t4.defaultValue))) continue;
          var _o3 = g(),
            _r = _o3.sharedNodeState.sharedConfigMap.get(_n3);
          void 0 === _r || _r === _t4
            ? _o3.updateFromKnown(_t4, _e5)
            : _o3.updateFromUnknown(_n3, _t4.unparse(_e5));
        }
      }
      if (void 0 !== s)
        for (var _ref4 of Object.entries(s)) {
          var _t5 = _ref4[0];
          var _e6 = _ref4[1];
          i.has(_t5) || g().updateFromUnknown(_t5, _e6);
        }
    }
    function s(t, e) {
      if (void 0 === t) return e.defaultValue;
      var _t$getInternalState = t.getInternalState(),
        n = _t$getInternalState[0],
        o = _t$getInternalState[1];
      return o.has(e)
        ? o.get(e)
        : void 0 !== n && e.key in n
          ? e.parse(n[e.key])
          : e.defaultValue;
    }
    var l = new WeakMap(),
      a = new WeakMap();
    function g(e) {
      var n =
        require("Lexical").INTERNAL_getActiveEditorState() ||
        e.getEditorState();
      var o = a.get(n);
      return (void 0 === o && ((o = new Set()), a.set(n, o)), o);
    }
    function c(e, n, o, i, r) {
      var s = e.getEditorState()._nodeMap.get(n.getKey());
      if (!require("Lexical").$isTextNode(s)) return !1;
      var l = n.getParent();
      if (null !== l && g(e).has(l.getKey())) return !1;
      var a = s.__text,
        c = Math.min(a.length, o.length);
      var u = 0;
      for (; u < c && a[u] === o[u]; ) u++;
      var d = 0;
      for (; d < c - u && a[a.length - 1 - d] === o[o.length - 1 - d]; ) d++;
      return i >= u && r <= o.length - d && r > i;
    }
    function u(e) {
      var n =
        require("Lexical").INTERNAL_getActiveEditorState() ||
        e.getEditorState();
      var o = l.get(n);
      return (void 0 === o && ((o = new Set()), l.set(n, o)), o);
    }
    ((exports.$canShowPlaceholder = o),
      (exports.$canShowPlaceholderCurry = function (t) {
        return function () {
          return o(t);
        };
      }),
      (exports.$findTextIntersectionFromCharacters = function (e, n) {
        var o = e.getFirstChild(),
          i = 0;
        t: for (; null !== o; ) {
          if (require("Lexical").$isElementNode(o)) {
            var _t6 = o.getFirstChild();
            if (null !== _t6) {
              o = _t6;
              continue;
            }
          } else if (require("Lexical").$isTextNode(o)) {
            var _t7 = o.getTextContentSize();
            if (i + _t7 > n) return { node: o, offset: n - i };
            i += _t7;
          }
          var _e7 = o.getNextSibling();
          if (null !== _e7) {
            o = _e7;
            continue;
          }
          var _r2 = o.getParent();
          for (; null !== _r2; ) {
            var _t8 = _r2.getNextSibling();
            if (null !== _t8) {
              o = _t8;
              continue t;
            }
            _r2 = _r2.getParent();
          }
          break;
        }
        return null;
      }),
      (exports.$isRootTextContentEmpty = n),
      (exports.$isRootTextContentEmptyCurry = function (t, e) {
        return function () {
          return n(t, e);
        };
      }),
      (exports.$rootTextContent = e),
      (exports.registerLexicalTextEntity = function (e, n, o, l) {
        var a = function a(t) {
            return t instanceof o;
          },
          d = function d(n) {
            var o = n.getParent();
            null !== o && g(e).add(o.getKey());
            var i = require("Lexical")
              .$createTextNode(n.getTextContent())
              .setFormat(n.getFormat())
              .setStyle(n.getStyle())
              .setDetail(n.getDetail());
            (r(n, i),
              n.replace(i),
              require("Lexical").INTERNAL_$recordTextRetype(n, i));
          },
          f = new WeakMap(),
          x = new WeakMap(),
          T = function T(n, o) {
            if (o === void 0) {
              o = "";
            }
            var i = n.getPreviousSibling(),
              r = 0;
            for (; require("Lexical").$isTextNode(i) && i.isTextEntity(); )
              ((r += i.getTextContentSize()), (i = i.getPreviousSibling()));
            var s = (null === i ? "" : i.getKey()) + "+" + r,
              l = n.getParent(),
              a =
                "" +
                o +
                (null === l ? "" : l.getKey()) +
                ":" +
                s +
                ":" +
                n.getTextContent(),
              g =
                require("Lexical").INTERNAL_getActiveEditorState() ||
                e.getEditorState();
            var c = x.get(g);
            void 0 === c && ((c = new Map()), x.set(g, c));
            var u = c.get(a) || 0;
            return u >= 2 || (c.set(a, u + 1), !1);
          },
          S = function S(t) {
            return t.getLatest().__mode;
          },
          v = function v(t, e) {
            var o = t + e;
            var i = 0;
            for (var _e8 = 0; _e8 < 8; _e8++) {
              var _e9 = n(o.slice(i));
              if (null === _e9) return !1;
              var _r3 = i + _e9.start,
                _s = i + _e9.end;
              if (_s <= _r3) return null;
              if (_s >= t.length) return _r3 === t.length;
              i = _s;
            }
            return null;
          },
          N = function N(e, n, o) {
            var i = function i(t) {
                return null === t ? o : t;
              },
              r = n.getTextContent(),
              s = n.getNextSibling();
            if (!require("Lexical").$isTextNode(s)) return i(v(e, r));
            var l = !(function (e) {
                var n = e.getNextSibling();
                return (
                  require("Lexical").$isTextNode(n) &&
                  !(
                    n.isSimpleText() &&
                    !a(n) &&
                    n.getFormat() === e.getFormat() &&
                    n.getStyle() === e.getStyle() &&
                    n.getDetail() === e.getDetail()
                  )
                );
              })(n),
              g = v(e, r + s.getTextContent());
            return l ? i(g) : i(g) && i(v(e, r));
          };
        return [
          e.registerNodeTransform(require("Lexical").TextNode, function (o) {
            if (!o.isSimpleText()) return;
            var g = u(e).has(o.getKey()) ? u(e) : null;
            var f = o.getPreviousSibling(),
              x = o.getTextContent();
            var v = x;
            var h,
              y = o,
              p = null;
            if (require("Lexical").$isTextNode(f)) {
              var _e0 = f.getTextContent(),
                _i = n(_e0 + x);
              if (((p = _i), a(f))) {
                if (
                  null === _i ||
                  !(
                    0 === S(f) ||
                    (0 === _i.start && _i.end >= _e0.length && T(f))
                  )
                )
                  return void d(f);
                {
                  var _n4 = _i.end - _e0.length;
                  var _r4 = _n4 > 0;
                  var _l = f.getPreviousSibling();
                  if (_r4 && require("Lexical").$isTextNode(_l))
                    if (_l.isTextEntity()) _r4 = !1;
                    else if (_l.isSimpleText()) {
                      var _t9 = _l.getTextContent();
                      if (!N(_t9, f, !0)) return void d(f);
                      N(_t9, f, !1) || (_r4 = !1);
                    }
                  if (
                    _r4 &&
                    (0 === S(f) ||
                      ((m = o),
                      ($ = f).getFormat() === m.getFormat() &&
                        $.getStyle() === m.getStyle() &&
                        $.getDetail() === m.getDetail() &&
                        (function (t, e) {
                          var n = t.getLatest().__state,
                            o = e.getLatest().__state;
                          if (n === o) return !0;
                          var i = new Set(),
                            r = function r(t, e) {
                              if (void 0 !== t)
                                for (var _ref6 of t.getInternalState()[1]) {
                                  var _n5 = _ref6[0];
                                  var _o4 = _ref6[1];
                                  {
                                    if (i.has(_n5.key)) continue;
                                    i.add(_n5.key);
                                    var _t0 = s(e, _n5);
                                    if (_t0 !== _o4 && !_n5.isEqual(_t0, _o4))
                                      return !0;
                                  }
                                }
                              return !1;
                            },
                            l = function l(t, e) {
                              var n = void 0 === t ? void 0 : t.unknownState,
                                o = void 0 === e ? void 0 : e.unknownState;
                              if (void 0 !== n)
                                for (var _ref8 of Object.entries(n)) {
                                  var _t1 = _ref8[0];
                                  var _e1 = _ref8[1];
                                  if (
                                    !i.has(_t1) &&
                                    (i.add(_t1),
                                    _e1 !== (void 0 === o ? void 0 : o[_t1]))
                                  )
                                    return !0;
                                }
                              return !1;
                            };
                          return !(r(n, o) || r(o, n) || l(n, o) || l(o, n));
                        })($, m)))
                  ) {
                    var _i2 = _e0 + x.slice(0, _n4);
                    0 === S(f)
                      ? f.select()
                      : (function (e, n, o) {
                          var i = require("Lexical").$getSelection();
                          if (!require("Lexical").$isRangeSelection(i)) return;
                          var r = e.getKey(),
                            s = n.getTextContentSize();
                          for (var _t10 of [i.anchor, i.focus])
                            _t10.key === r &&
                              "text" === _t10.type &&
                              (_t10.offset <= o
                                ? _t10.set(n.getKey(), s + _t10.offset, "text")
                                : _t10.set(r, _t10.offset - o, "text"));
                        })(o, f, _n4);
                    var _r5 = f;
                    return void require("Lexical").INTERNAL_$recordTextMove(
                      o,
                      _r5,
                      _n4,
                      function () {
                        if ((_r5.setTextContent(_i2), _n4 === x.length))
                          o.remove();
                        else {
                          var _t11 = x.slice(_n4);
                          o.setTextContent(_t11);
                        }
                      },
                    );
                  }
                }
              } else if (null === _i || _i.start < _e0.length)
                return void (function (t, e) {
                  var o = t.getNextSibling();
                  if (a(o)) {
                    var _t12 = o.getTextContent(),
                      _i3 = n(_t12);
                    if (
                      null === _i3 ||
                      0 !== _i3.start ||
                      _i3.end !== _t12.length
                    )
                      return;
                    N(e, o, !0) || d(o);
                  }
                })(o, x);
            }
            var $, m;
            var C = 0;
            for (;;) {
              var _y$splitText, _y$splitText2;
              var _s2 = x;
              h = n(_s2);
              var _u = null === h ? "" : _s2.slice(h.end);
              if (((x = _u), "" === _u)) {
                var _e10 = y.getNextSibling();
                if (require("Lexical").$isTextNode(_e10)) {
                  var _t13 = _s2 + _e10.getTextContent(),
                    _o5 = n(_t13);
                  if (null === _o5)
                    return void (a(_e10)
                      ? N(_s2, _e10, !1) || d(_e10)
                      : _e10.markDirty());
                  if (null === h || _o5.start !== h.start) return;
                }
              }
              if (null === h) return;
              if (
                0 === h.start &&
                require("Lexical").$isTextNode(f) &&
                (f.isTextEntity() ||
                  (f.isSimpleText() &&
                    h.end > 0 &&
                    (C > 0 ||
                      (null === n(f.getTextContent() + _s2.slice(0, h.end)) &&
                        (null === p ||
                          p.start !== f.getTextContentSize() ||
                          p.end !== f.getTextContentSize() + h.end)))))
              ) {
                C += h.end;
                continue;
              }
              var _T = v.length - y.getTextContentSize(),
                _ref9 =
                  0 === h.start
                    ? [_T, _T + h.end]
                    : [_T + h.start + C, _T + h.end + C],
                _S = _ref9[0],
                _$ = _ref9[1];
              var _m = void 0;
              (0 === h.start
                ? ((_y$splitText = y.splitText(h.end)),
                  (_m = _y$splitText[0]),
                  (y = _y$splitText[1]),
                  _y$splitText)
                : ((_y$splitText2 = y.splitText(h.start + C, h.end + C)),
                  (_m = _y$splitText2[1]),
                  (y = _y$splitText2[2]),
                  _y$splitText2),
                null !== g && void 0 !== y && g.add(y.getKey()),
                void 0 === _m && i(165, "nodeToReplace"));
              var E = l(_m);
              if (
                (E.setFormat(_m.getFormat())
                  .setStyle(_m.getStyle())
                  .setDetail(_m.getDetail()),
                null !== g || c(e, o, v, _S, _$) || r(_m, E),
                _m.replace(E),
                require("Lexical").INTERNAL_$recordTextRetype(_m, E),
                null == y)
              )
                return;
              ((C = 0), (f = E));
            }
          }),
          e.registerNodeTransform(o, function (o) {
            var i = o.getTextContent(),
              r = n(i);
            if (null === r || 0 !== r.start) return void d(o);
            if (i.length > r.end) {
              var _o$splitText = o.splitText(r.end),
                _t14 = _o$splitText[1];
              return void (void 0 !== _t14 && u(e).add(_t14.getKey()));
            }
            var s = o.getPreviousSibling();
            if (
              require("Lexical").$isTextNode(s) &&
              s.isSimpleText() &&
              !(function (e) {
                var n = e.getNextSibling();
                return require("Lexical").$isTextNode(n) && n.isTextEntity();
              })(o) &&
              !N(s.getTextContent(), o, !0)
            ) {
              var _n6 =
                require("Lexical").INTERNAL_getActiveEditorState() ||
                e.getEditorState();
              var _o6 = f.get(_n6);
              (void 0 === _o6 && ((_o6 = new Set()), f.set(_n6, _o6)),
                _o6.has(s.getKey()) || (_o6.add(s.getKey()), s.markDirty()));
            }
            require("Lexical").$isTextNode(s) &&
              s.isTextEntity() &&
              !T(o, "adjacent:") &&
              (d(s), d(o));
            var l = o.getNextSibling();
            !require("Lexical").$isTextNode(l) ||
              !l.isTextEntity() ||
              (a(o) && T(o, "adjacent:")) ||
              (d(l), a(o) && d(o));
          }),
        ];
      }));
  },
  null,
);
