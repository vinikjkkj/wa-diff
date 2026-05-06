__d(
  "Lexical.prod",
  [],
  function $module_Lexical_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _P, _F;
    function t(t) {
      var n = new URL("https://lexical.dev/docs/error"),
        r = new URLSearchParams();
      r.append("code", t);
      for (
        var _len = arguments.length,
          e = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        e[_key - 1] = arguments[_key];
      }
      for (var _t2 of e) r.append("v", _t2);
      throw (
        (n.search = r.toString()),
        Error(
          "Minified Lexical error #" +
            t +
            "; visit " +
            n.toString() +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
        )
      );
    }
    function e(t) {
      for (
        var _len2 = arguments.length,
          e = new Array(_len2 > 1 ? _len2 - 1 : 0),
          _key2 = 1;
        _key2 < _len2;
        _key2++
      ) {
        e[_key2 - 1] = arguments[_key2];
      }
      var n = new URL("https://lexical.dev/docs/error"),
        r = new URLSearchParams();
      r.append("code", t);
      for (var _t3 of e) r.append("v", _t3);
      ((n.search = r.toString()),
        console.warn(
          "Minified Lexical warning #" +
            t +
            "; visit " +
            n.toString() +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
        ));
    }
    var n =
        "undefined" != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement,
      r = n && "documentMode" in document ? document.documentMode : null,
      o = n && /Mac|iPod|iPhone|iPad/.test(navigator.platform),
      i = n && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
      s =
        !(!n || !("InputEvent" in window) || r) &&
        "getTargetRanges" in new window.InputEvent("input"),
      l = n && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
      c = n && /Android/.test(navigator.userAgent),
      a = n && /Version\/[\d.]+.*Safari/.test(navigator.userAgent) && !c,
      u = n && /^(?=.*Chrome).*/i.test(navigator.userAgent),
      f = n && c && u,
      d = n && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && o && !u,
      h = 0,
      g = 1,
      _ = 2,
      p = 128,
      y = 1,
      m = 2,
      x = 3,
      C = 4,
      S = 5,
      N = 6,
      T = a || l || d ? "\xa0" : "\u200b",
      v = "\n\n",
      O = i ? "\xa0" : T,
      E = "\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc",
      k =
        "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff",
      M = new RegExp("^[^" + k + "]*[" + E + "]"),
      b = new RegExp("^[^" + E + "]*[" + k + "]"),
      A = {
        bold: 1,
        capitalize: 1024,
        code: 16,
        highlight: p,
        italic: 2,
        lowercase: 256,
        strikethrough: 4,
        subscript: 32,
        superscript: 64,
        underline: 8,
        uppercase: 512,
      },
      D = { directionless: 1, unmergeable: 2 },
      w = { center: 2, end: 6, justify: 4, left: 1, right: 3, start: 5 },
      P =
        ((_P = {}),
        (_P[m] = "center"),
        (_P[N] = "end"),
        (_P[C] = "justify"),
        (_P[y] = "left"),
        (_P[x] = "right"),
        (_P[S] = "start"),
        _P),
      I = { normal: 0, segmented: 2, token: 1 },
      F =
        ((_F = {}),
        (_F[h] = "normal"),
        (_F[_] = "segmented"),
        (_F[g] = "token"),
        _F),
      R = "$config";
    var _L = (function () {
      function L() {
        this._front = new Set();
        this._back = new Set();
      }
      var _proto = L.prototype;
      _proto.addBack = function addBack(t) {
        return (
          delete this._cache,
          this._front.has(t) || this._back.add(t),
          this
        );
      };
      _proto.addFront = function addFront(t) {
        return (
          delete this._cache,
          this._back.has(t) || this._front.add(t),
          this
        );
      };
      _proto["delete"] = function _delete(t) {
        return (
          delete this._cache,
          this._front["delete"](t) || this._back["delete"](t)
        );
      };
      _proto.toArray = function toArray() {
        var t = Array.from(this._front).reverse();
        for (var _e2 of this._back) t.push(_e2);
        return t;
      };
      _proto.toReadonlyArray = function toReadonlyArray() {
        return ((this._cache = this._cache || this.toArray()), this._cache);
      };
      _proto[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this.toReadonlyArray()[
            typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
          ]();
        };
      return babelHelpers.createClass(L, [
        {
          key: "size",
          get: function get() {
            return this._front.size + this._back.size;
          },
        },
      ]);
    })();
    function K(t, e, n, r, o, i) {
      var s = t.getFirstChild();
      for (; null !== s; ) {
        var _t4 = s.__key;
        (s.__parent === e &&
          (vo(s) && K(s, _t4, n, r, o, i),
          n.has(_t4) || i["delete"](_t4),
          o.push(_t4)),
          (s = s.getNextSibling()));
      }
    }
    var B = !1,
      $ = 0;
    function z(t) {
      $ = t.timeStamp;
    }
    function W(t, e, n) {
      var r = "BR" === t.nodeName,
        o = e.__lexicalLineBreak;
      return (
        (o && (t === o || (r && t.previousSibling === o))) ||
        (r && void 0 !== yi(t, n))
      );
    }
    function U(t, e, n) {
      var r = ss(Xi(n));
      var o = null,
        i = null;
      null !== r &&
        r.anchorNode === t &&
        ((o = r.anchorOffset), (i = r.focusOffset));
      var s = t.nodeValue;
      null !== s && Ai(e, s, o, i, !1);
    }
    function Y(t, e, n) {
      if (Cr(t)) {
        var _e3 = t.anchor.getNode();
        if (_e3.is(n) && t.format !== _e3.getFormat()) return !1;
      }
      return si(e) && n.isAttached();
    }
    function j(t, e, n, r) {
      for (var _o2 = t; _o2 && !vs(_o2); _o2 = ji(_o2)) {
        var _t5 = yi(_o2, e);
        if (void 0 !== _t5) {
          var _e4 = _i(_t5, n);
          if (_e4) return ko(_e4) || !cs(_o2) ? void 0 : [_o2, _e4];
        } else if (_o2 === r) return [r, Ni(n)];
      }
    }
    function J(t, e, n) {
      B = !0;
      var r = performance.now() - $ > 100;
      try {
        Co(t, function () {
          var o =
              Lr() ||
              (function (t) {
                return t.getEditorState().read(function () {
                  var t = Lr();
                  return null !== t ? t.clone() : null;
                });
              })(t),
            s = new Map(),
            l = t.getRootElement(),
            c = t._editorState,
            a = t._blockCursorElement;
          var u = !1,
            f = "";
          for (var _n2 = 0; _n2 < e.length; _n2++) {
            var _d = e[_n2],
              _h = _d.type,
              _g = _d.target,
              _2 = j(_g, t, c, l);
            if (!_2) continue;
            var _p = _2[0],
              _y = _2[1];
            if ("characterData" === _h)
              r && ur(_y) && si(_g) && Y(o, _g, _y) && U(_g, _y, t);
            else if ("childList" === _h) {
              u = !0;
              var _e5 = _d.addedNodes;
              for (var _n3 = 0; _n3 < _e5.length; _n3++) {
                var _r2 = _e5[_n3],
                  _o3 = pi(_r2),
                  _s2 = _r2.parentNode;
                if (
                  null != _s2 &&
                  _r2 !== a &&
                  null === _o3 &&
                  !W(_r2, _s2, t)
                ) {
                  if (i) {
                    var _t6 = (cs(_r2) ? _r2.innerText : null) || _r2.nodeValue;
                    _t6 && (f += _t6);
                  }
                  _s2.removeChild(_r2);
                }
              }
              var _n4 = _d.removedNodes,
                _r3 = _n4.length;
              if (_r3 > 0) {
                var _e6 = 0;
                for (var _o4 = 0; _o4 < _r3; _o4++) {
                  var _r4 = _n4[_o4];
                  (W(_r4, _g, t) || a === _r4) && (_g.appendChild(_r4), _e6++);
                }
                _r3 !== _e6 && s.set(_p, _y);
              }
            }
          }
          if (s.size > 0)
            for (var _ref2 of s) {
              var _e7 = _ref2[0];
              var _n5 = _ref2[1];
              _n5.reconcileObservedMutation(_e7, t);
            }
          var d = n.takeRecords();
          if (d.length > 0) {
            for (var _e8 = 0; _e8 < d.length; _e8++) {
              var _n6 = d[_e8],
                _r5 = _n6.addedNodes,
                _o5 = _n6.target;
              for (var _e9 = 0; _e9 < _r5.length; _e9++) {
                var _n7 = _r5[_e9],
                  _i2 = _n7.parentNode;
                null == _i2 ||
                  "BR" !== _n7.nodeName ||
                  W(_n7, _o5, t) ||
                  _i2.removeChild(_n7);
              }
            }
            n.takeRecords();
          }
          null !== o && (u && Ti(o), i && Wi(t) && o.insertRawText(f));
        });
      } finally {
        B = !1;
      }
    }
    function H(t) {
      var e = t._observer;
      if (null !== e) {
        J(t, e.takeRecords(), e);
      }
    }
    function G(t) {
      (!(function (t) {
        0 === $ && Xi(t).addEventListener("textInput", z, !0);
      })(t),
        (t._observer = new MutationObserver(function (e, n) {
          J(t, e, n);
        })));
    }
    var V = function V(t, e) {
      ((this.key = t),
        (this.parse = e.parse.bind(e)),
        (this.unparse = (e.unparse || nt).bind(e)),
        (this.isEqual = (e.isEqual || Object.is).bind(e)),
        (this.defaultValue = this.parse(void 0)),
        (this.resetOnCopyNode = e.resetOnCopyNode || !1));
    };
    function q(t, e, n) {
      if (n === void 0) {
        n = "latest";
      }
      var r = ("latest" === n ? t.getLatest() : t).__state;
      return r ? r.getValue(e) : e.defaultValue;
    }
    function X(t) {
      var e = new Map(),
        n = new Set();
      for (
        var _r6 = "function" == typeof t ? t : t.replace;
        _r6.prototype && void 0 !== _r6.prototype.getType;
        _r6 = Object.getPrototypeOf(_r6)
      ) {
        var _Es = Es(_r6),
          _t7 = _Es.ownNodeConfig;
        if (_t7 && _t7.stateConfigs)
          for (var _r7 of _t7.stateConfigs) {
            var _t8 = void 0;
            ("stateConfig" in _r7
              ? ((_t8 = _r7.stateConfig), _r7.flat && n.add(_t8.key))
              : (_t8 = _r7),
              e.set(_t8.key, _t8));
          }
      }
      return { flatKeys: n, sharedConfigMap: e };
    }
    var _Q = (function () {
      function Q(t, e, n, r, o) {
        if (n === void 0) {
          n = void 0;
        }
        if (r === void 0) {
          r = new Map();
        }
        if (o === void 0) {
          o = void 0;
        }
        ((this.node = t),
          (this.sharedNodeState = e),
          (this.unknownState = n),
          (this.knownState = r));
        var i = this.sharedNodeState.sharedConfigMap,
          s =
            void 0 !== o
              ? o
              : (function (t, e, n) {
                  var r = n.size;
                  if (e)
                    for (var _o6 in e) {
                      var _e0 = t.get(_o6);
                      (_e0 && n.has(_e0)) || r++;
                    }
                  return r;
                })(i, n, r);
        this.size = s;
      }
      var _proto2 = Q.prototype;
      _proto2.getValue = function getValue(t) {
        var e = this.knownState.get(t);
        if (void 0 !== e) return e;
        this.sharedNodeState.sharedConfigMap.set(t.key, t);
        var n = t.defaultValue;
        if (this.unknownState && t.key in this.unknownState) {
          var _e1 = this.unknownState[t.key];
          (void 0 !== _e1 && (n = t.parse(_e1)), this.updateFromKnown(t, n));
        }
        return n;
      };
      _proto2.getInternalState = function getInternalState() {
        return [this.unknownState, this.knownState];
      };
      _proto2.toJSON = function toJSON() {
        var t = babelHelpers["extends"]({}, this.unknownState),
          e = {};
        for (var _ref4 of this.knownState) {
          var _e10 = _ref4[0];
          var _n8 = _ref4[1];
          _e10.isEqual(_n8, _e10.defaultValue)
            ? delete t[_e10.key]
            : (t[_e10.key] = _e10.unparse(_n8));
        }
        for (var _n9 of this.sharedNodeState.flatKeys)
          _n9 in t && ((e[_n9] = t[_n9]), delete t[_n9]);
        return (et(t) && (e.$ = t), e);
      };
      _proto2.getWritable = function getWritable(t) {
        if (this.node === t) return this;
        var e = this.sharedNodeState,
          n = this.unknownState,
          r = new Map(this.knownState);
        return new Q(
          t,
          e,
          (function (t, e, n) {
            var r;
            if (n)
              for (var _ref6 of Object.entries(n)) {
                var _o7 = _ref6[0];
                var _i3 = _ref6[1];
                {
                  var _n0 = t.get(_o7);
                  _n0
                    ? e.has(_n0) || e.set(_n0, _n0.parse(_i3))
                    : ((r = r || {}), (r[_o7] = _i3));
                }
              }
            return r;
          })(e.sharedConfigMap, r, n),
          r,
          this.size,
        );
      };
      _proto2.resetOnCopyNode = function resetOnCopyNode() {
        for (var _t9 of this.knownState.keys())
          _t9.resetOnCopyNode && this.knownState.set(_t9, _t9.defaultValue);
        return this;
      };
      _proto2.updateFromKnown = function updateFromKnown(t, e) {
        var n = t.key;
        this.sharedNodeState.sharedConfigMap.set(n, t);
        var r = this.knownState,
          o = this.unknownState;
        (r.has(t) ||
          (o && n in o) ||
          (o && (delete o[n], (this.unknownState = et(o))), this.size++),
          r.set(t, e));
      };
      _proto2.updateFromUnknown = function updateFromUnknown(t, e) {
        var n = this.sharedNodeState.sharedConfigMap.get(t);
        n
          ? this.updateFromKnown(n, n.parse(e))
          : ((this.unknownState = this.unknownState || {}),
            t in this.unknownState || this.size++,
            (this.unknownState[t] = e));
      };
      _proto2.updateFromJSON = function updateFromJSON(t) {
        var e = this.knownState;
        for (var _t0 of e.keys()) e.set(_t0, _t0.defaultValue);
        if (((this.size = e.size), (this.unknownState = void 0), t))
          for (var _ref8 of Object.entries(t)) {
            var _e11 = _ref8[0];
            var _n1 = _ref8[1];
            this.updateFromUnknown(_e11, _n1);
          }
      };
      return Q;
    })();
    function Z(t) {
      var e = t.getWritable(),
        n = e.__state ? e.__state.getWritable(e) : new _Q(e, tt(e));
      return ((e.__state = n), n);
    }
    function tt(t) {
      return t.__state
        ? t.__state.sharedNodeState
        : Vo(ps(), t.getType()).sharedNodeState;
    }
    function et(t) {
      if (t) for (var _e12 in t) return t;
    }
    function nt(t) {
      return t;
    }
    function rt(t, e, n) {
      for (var _ref0 of e.knownState) {
        var _r8 = _ref0[0];
        var _o8 = _ref0[1];
        {
          if (t.has(_r8.key)) continue;
          t.add(_r8.key);
          var _e13 = n ? n.getValue(_r8) : _r8.defaultValue;
          if (_e13 !== _o8 && !_r8.isEqual(_e13, _o8)) return !0;
        }
      }
      return !1;
    }
    function ot(t, e, n) {
      var r = e.unknownState,
        o = n ? n.unknownState : void 0;
      if (r)
        for (var _ref10 of Object.entries(r)) {
          var _e14 = _ref10[0];
          var _n10 = _ref10[1];
          if (t.has(_e14)) continue;
          t.add(_e14);
          if (_n10 !== (o ? o[_e14] : void 0)) return !0;
        }
      return !1;
    }
    function it(t, e) {
      var n = t.__state;
      return n && n.node === t ? n.getWritable(e) : n;
    }
    function st(t, e) {
      var n = t.__mode,
        r = t.__format,
        o = t.__style,
        i = e.__mode,
        s = e.__format,
        l = e.__style,
        c = t.__state,
        a = e.__state;
      return (
        (null === n || n === i) &&
        (null === r || r === s) &&
        (null === o || o === l) &&
        (null === t.__state ||
          c === a ||
          (function (t, e) {
            if (t === e) return !0;
            var n = new Set();
            return !(
              (t && rt(n, t, e)) ||
              (e && rt(n, e, t)) ||
              (t && ot(n, t, e)) ||
              (e && ot(n, e, t))
            );
          })(c, a))
      );
    }
    function lt(t, e) {
      var n = t.mergeWithSibling(e),
        r = io()._normalizedNodes;
      return (r.add(t.__key), r.add(e.__key), n);
    }
    function ct(t) {
      var e,
        n,
        r = t;
      if ("" !== r.__text || !r.isSimpleText() || r.isUnmergeable()) {
        for (
          ;
          null !== (e = r.getPreviousSibling()) &&
          ur(e) &&
          e.isSimpleText() &&
          !e.isUnmergeable();
        ) {
          if ("" !== e.__text) {
            if (st(e, r)) {
              r = lt(e, r);
              break;
            }
            break;
          }
          e.remove();
        }
        for (
          ;
          null !== (n = r.getNextSibling()) &&
          ur(n) &&
          n.isSimpleText() &&
          !n.isUnmergeable();
        ) {
          if ("" !== n.__text) {
            if (st(r, n)) {
              r = lt(r, n);
              break;
            }
            break;
          }
          n.remove();
        }
      } else r.remove();
    }
    function at(t) {
      return (ut(t.anchor), ut(t.focus), t);
    }
    function ut(t) {
      for (; "element" === t.type; ) {
        var _e15 = t.getNode(),
          _n11 = t.offset;
        var _r9 = void 0,
          _o9 = void 0;
        if (
          (_n11 === _e15.getChildrenSize()
            ? ((_r9 = _e15.getChildAtIndex(_n11 - 1)), (_o9 = !0))
            : ((_r9 = _e15.getChildAtIndex(_n11)), (_o9 = !1)),
          ur(_r9))
        ) {
          t.set(_r9.__key, _o9 ? _r9.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!vo(_r9)) break;
        t.set(_r9.__key, _o9 ? _r9.getChildrenSize() : 0, "element", !0);
      }
    }
    var ft,
      dt,
      ht,
      gt,
      _t,
      pt,
      yt,
      mt,
      xt,
      Ct,
      St,
      Nt = "",
      Tt = null,
      vt = null,
      Ot = !1,
      Et = !1;
    function kt(t, e) {
      var n = yt.get(t),
        r = mt.has(t);
      if (null !== e) {
        var _n12 = Yt(t);
        _n12.parentNode === e && e.removeChild(_n12);
      }
      if (!r) {
        if ((dt._keyToDOMMap["delete"](t), vo(n))) {
          var _t1 = Ms(n, yt);
          Mt(_t1, 0, _t1.length - 1, null);
        }
        void 0 !== n && Bi(Ct, ht, gt, n, "destroyed");
      }
    }
    function Mt(t, e, n, r) {
      for (var _o0 = e; _o0 <= n; ++_o0) {
        var _e16 = t[_o0];
        void 0 !== _e16 && kt(_e16, r);
      }
    }
    function bt(t, e) {
      t.setProperty("text-align", e);
    }
    var At = "40px";
    function Dt(t, e) {
      var n = ft.theme.indent;
      if ("string" == typeof n) {
        var _r0 = t.classList.contains(n);
        e > 0 && !_r0
          ? t.classList.add(n)
          : e < 1 && _r0 && t.classList.remove(n);
      }
      if (0 === e) return void t.style.setProperty("padding-inline-start", "");
      var r =
        getComputedStyle(dt._rootElement || t).getPropertyValue(
          "--lexical-indent-base-value",
        ) || At;
      t.style.setProperty(
        "padding-inline-start",
        "calc(" + e + " * " + r + ")",
      );
    }
    function wt(t, e) {
      var n = t.style;
      0 === e
        ? bt(n, "")
        : 1 === e
          ? bt(n, "left")
          : 2 === e
            ? bt(n, "center")
            : 3 === e
              ? bt(n, "right")
              : 4 === e
                ? bt(n, "justify")
                : 5 === e
                  ? bt(n, "start")
                  : 6 === e && bt(n, "end");
    }
    function Pt(t, e) {
      var n = (function (t) {
        var e = t.__dir;
        if (null !== e) return e;
        if (bo(t)) return null;
        var n = t.getParentOrThrow();
        return bo(n) && null === n.__dir ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function It(e, n) {
      var r = mt.get(e);
      if ((void 0 === r && t(60), null !== n)) {
        var _t10 = yt.get(e);
        if (void 0 !== _t10 && _t10.__parent !== r.__parent) {
          var _t11 = xt.get(e);
          if (void 0 !== _t11) return (n.insertChild(_t11), Bt(e, n.element));
        }
      }
      var o = St.$createDOM(r, dt);
      if (
        ((function (t, e, n) {
          var r = n._keyToDOMMap;
          ((function (t, e, n) {
            var r = "__lexicalKey_" + e._key;
            t[r] = n;
          })(e, n, t),
            r.set(t, e));
        })(e, o, dt),
        ur(r)
          ? o.setAttribute("data-lexical-text", "true")
          : ko(r) && o.setAttribute("data-lexical-decorator", "true"),
        vo(r))
      ) {
        var _t12 = r.__indent,
          _e17 = r.__size;
        if ((Pt(o, r), 0 !== _t12 && Dt(o, _t12), 0 !== _e17)) {
          var _t13 = _e17 - 1;
          Ft(Ms(r, mt), r, 0, _t13, St.$getDOMSlot(r, o, dt));
        }
        var _n13 = r.__format;
        (0 !== _n13 && wt(o, _n13), r.isInline() || Lt(null, r, o));
      } else {
        var _t14 = r.getTextContent();
        if (ko(r)) {
          var _t15 = r.decorate(dt, ft);
          (null !== _t15 && $t(e, _t15), (o.contentEditable = "false"));
        }
        Nt += _t14;
      }
      return (
        null !== n && n.insertChild(o),
        St.$decorateDOM(r, null, o, dt),
        Bi(Ct, ht, gt, r, "created"),
        o
      );
    }
    function Ft(t, e, n, r, o) {
      var i = Nt;
      Nt = "";
      var s = n;
      for (; s <= r; ++s) {
        It(t[s], o);
        var _e18 = mt.get(t[s]);
        null !== _e18 && ur(_e18)
          ? null === Tt && ((Tt = _e18.getFormat()), (vt = _e18.getStyle()))
          : vo(_e18) && s < r && !_e18.isInline() && (Nt += v);
      }
      ((o.element.__lexicalTextContent = Nt), (Nt = i + Nt));
    }
    function Rt(t, e) {
      if (t) {
        var _n14 = t.__last;
        if (_n14) {
          var _t16 = e.get(_n14);
          if (_t16)
            return Jn(_t16)
              ? "line-break"
              : ko(_t16) && _t16.isInline()
                ? "decorator"
                : null;
        }
        return "empty";
      }
      return null;
    }
    function Lt(t, e, n) {
      var r = Rt(t, yt),
        o = Rt(e, mt);
      r !== o && St.$getDOMSlot(e, n, dt).setManagedLineBreak(o);
    }
    function Kt(e, n, r) {
      var o;
      ((Tt = null),
        (vt = null),
        (function (e, n, r) {
          var o = Nt,
            i = e.__size,
            s = n.__size;
          Nt = "";
          var l = r.element;
          if (1 === i && 1 === s) {
            var _t17 = e.__first,
              _o1 = n.__first;
            if (_t17 === _o1) Bt(_t17, l);
            else {
              var _e19 = Yt(_t17),
                _n15 = It(_o1, null);
              try {
                _e19.parentNode === l
                  ? l.replaceChild(_n15, _e19)
                  : r.insertChild(_n15);
              } catch (r) {
                if ("object" == typeof r && null != r) {
                  var _i4 =
                    r.toString() +
                    " Parent: " +
                    l.tagName +
                    ", new child: {tag: " +
                    _n15.tagName +
                    " key: " +
                    _o1 +
                    "}, old child: {tag: " +
                    _e19.tagName +
                    ", key: " +
                    _t17 +
                    "}.";
                  throw new Error(_i4);
                }
                throw r;
              }
              kt(_t17, null);
            }
            var _i5 = mt.get(_o1);
            ur(_i5) &&
              null === Tt &&
              ((Tt = _i5.getFormat()), (vt = _i5.getStyle()));
          } else {
            var _o10 = Ms(e, yt),
              _c = Ms(n, mt);
            if (
              (_o10.length !== i && t(227), _c.length !== s && t(228), 0 === i)
            )
              0 !== s && Ft(_c, 0, 0, s - 1, r);
            else if (0 === s) {
              if (0 !== i) {
                var _t18 =
                  null == r.after &&
                  null == r.before &&
                  null == r.element.__lexicalLineBreak;
                (Mt(_o10, 0, i - 1, _t18 ? null : l),
                  _t18 && (l.textContent = ""));
              }
            } else
              !(function (t, e, n, r, o, i) {
                var s = r - 1,
                  l = o - 1;
                var c,
                  a,
                  u = i.getFirstChild(),
                  f = 0,
                  d = 0;
                for (; f <= s && d <= l; ) {
                  var _t19 = e[f],
                    _r1 = n[d];
                  if (_t19 === _r1) ((u = zt(Bt(_r1, i.element))), f++, d++);
                  else {
                    if ((void 0 === a && (a = Wt(n, d)), void 0 === c))
                      c = Wt(e, f);
                    else if (!c.has(_t19)) {
                      f++;
                      continue;
                    }
                    if (!a.has(_t19)) {
                      ((u = zt(Yt(_t19))),
                        kt(_t19, i.element),
                        f++,
                        c["delete"](_t19));
                      continue;
                    }
                    if (c.has(_r1)) {
                      var _t20 = Yi(dt, _r1);
                      (_t20 !== u && i.withBefore(u).insertChild(_t20),
                        (u = zt(Bt(_r1, i.element))),
                        f++,
                        d++);
                    } else (It(_r1, i.withBefore(u)), d++);
                  }
                  var _o11 = mt.get(_r1);
                  null !== _o11 && ur(_o11)
                    ? null === Tt &&
                      ((Tt = _o11.getFormat()), (vt = _o11.getStyle()))
                    : vo(_o11) && d <= l && !_o11.isInline() && (Nt += v);
                }
                var h = f > s,
                  g = d > l;
                if (h && !g) {
                  var _t21 = n[l + 1],
                    _e20 = void 0 === _t21 ? null : dt.getElementByKey(_t21);
                  Ft(n, 0, d, l, i.withBefore(_e20));
                } else g && !h && Mt(e, f, s, i.element);
              })(0, _o10, _c, i, s, r);
          }
          ((l.__lexicalTextContent = Nt), (Nt = o + Nt));
        })(e, n, St.$getDOMSlot(n, r, dt)),
        (o = n),
        null == Tt || Tt === o.__textFormat || Et || o.setTextFormat(Tt),
        (function (t) {
          null == vt || vt === t.__textStyle || Et || t.setTextStyle(vt);
        })(n));
    }
    function Bt(e, n) {
      var r = yt.get(e);
      var o = mt.get(e);
      (void 0 !== r && void 0 !== o) || t(61);
      var i = Ot || pt.has(e) || _t.has(e),
        s = Yi(dt, e);
      if (r === o && !i) {
        var _t22;
        if (vo(r)) {
          var _e21 = s.__lexicalTextContent;
          "string" == typeof _e21
            ? (_t22 = _e21)
            : ((_t22 = r.getTextContent()), (s.__lexicalTextContent = _t22));
        } else _t22 = r.getTextContent();
        return ((Nt += _t22), s);
      }
      if (
        (r !== o && i && Bi(Ct, ht, gt, o, "updated"),
        St.$updateDOM(o, r, s, dt))
      ) {
        var _r10 = It(e, null);
        return (
          null === n && t(62),
          n.replaceChild(_r10, s),
          kt(e, null),
          _r10
        );
      }
      if (vo(r)) {
        vo(o) || t(334, e);
        var _n16 = o.__indent;
        (Ot || _n16 !== r.__indent) && Dt(s, _n16);
        var _l2 = o.__format;
        if (((Ot || _l2 !== r.__format) && wt(s, _l2), i))
          (Kt(r, o, s), bo(o) || o.isInline() || Lt(r, o, s));
        else {
          var _t23 = s.__lexicalTextContent;
          var _e22;
          ("string" == typeof _t23
            ? (_e22 = _t23)
            : ((_e22 = r.getTextContent()), (s.__lexicalTextContent = _e22)),
            (Nt += _e22));
        }
        if (
          (Ot || o.__dir !== r.__dir || o.__parent !== r.__parent) &&
          (Pt(s, o), bo(o) && !Ot)
        )
          for (var _t24 of o.getChildren())
            if (vo(_t24)) {
              Pt(Yi(dt, _t24.getKey()), _t24);
            }
      } else {
        var _t25 = o.getTextContent();
        if (ko(o)) {
          var _t26 = o.decorate(dt, ft);
          null !== _t26 && $t(e, _t26);
        }
        Nt += _t25;
      }
      if (!Et && bo(o) && o.__cachedText !== Nt) {
        var _t27 = o.getWritable();
        ((_t27.__cachedText = Nt), (o = _t27));
      }
      return (St.$decorateDOM(o, r, s, dt), s);
    }
    function $t(t, e) {
      var n = dt._pendingDecorators;
      var r = dt._decorators;
      if (null === n) {
        if (r[t] === e) return;
        n = xi(dt);
      }
      n[t] = e;
    }
    function zt(t) {
      var e = t.nextSibling;
      return (
        null !== e && e === dt._blockCursorElement && (e = e.nextSibling),
        e
      );
    }
    function Wt(t, e) {
      var n = new Set();
      for (var _r11 = e; _r11 < t.length; _r11++) n.add(t[_r11]);
      return n;
    }
    function Ut(t, e, n, r, o, i) {
      ((Nt = ""),
        (Ot = 2 === r),
        (dt = n),
        (ft = n._config),
        (St = n._config.dom || Wo),
        (ht = n._nodes),
        (gt = dt._listeners.mutation),
        (_t = o),
        (pt = i),
        (yt = t._nodeMap),
        (mt = e._nodeMap),
        (Et = e._readOnly),
        (xt = new Map(n._keyToDOMMap)));
      var s = new Map();
      return (
        (Ct = s),
        Bt("root", null),
        (dt = void 0),
        (ht = void 0),
        (_t = void 0),
        (pt = void 0),
        (yt = void 0),
        (mt = void 0),
        (ft = void 0),
        (xt = void 0),
        (Ct = void 0),
        (St = Wo),
        s
      );
    }
    function Yt(e) {
      var n = xt.get(e);
      return (void 0 === n && t(75, e), n);
    }
    function jt(t) {
      return { type: t };
    }
    var Jt = jt("SELECTION_CHANGE_COMMAND"),
      Ht = jt("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"),
      Gt = jt("CLICK_COMMAND"),
      Vt = jt("BEFORE_INPUT_COMMAND"),
      qt = jt("INPUT_COMMAND"),
      Xt = jt("COMPOSITION_START_COMMAND"),
      Qt = jt("COMPOSITION_END_COMMAND"),
      Zt = jt("DELETE_CHARACTER_COMMAND"),
      te = jt("INSERT_LINE_BREAK_COMMAND"),
      ee = jt("INSERT_PARAGRAPH_COMMAND"),
      ne = jt("CONTROLLED_TEXT_INSERTION_COMMAND"),
      re = jt("PASTE_COMMAND"),
      oe = jt("REMOVE_TEXT_COMMAND"),
      ie = jt("DELETE_WORD_COMMAND"),
      se = jt("DELETE_LINE_COMMAND"),
      le = jt("FORMAT_TEXT_COMMAND"),
      ce = jt("UNDO_COMMAND"),
      ae = jt("REDO_COMMAND"),
      ue = jt("KEYDOWN_COMMAND"),
      fe = jt("KEY_ARROW_RIGHT_COMMAND"),
      de = jt("MOVE_TO_END"),
      he = jt("KEY_ARROW_LEFT_COMMAND"),
      ge = jt("MOVE_TO_START"),
      _e = jt("KEY_ARROW_UP_COMMAND"),
      pe = jt("KEY_ARROW_DOWN_COMMAND"),
      ye = jt("KEY_ENTER_COMMAND"),
      me = jt("KEY_SPACE_COMMAND"),
      xe = jt("KEY_BACKSPACE_COMMAND"),
      Ce = jt("KEY_ESCAPE_COMMAND"),
      Se = jt("KEY_DELETE_COMMAND"),
      Ne = jt("KEY_TAB_COMMAND"),
      Te = jt("INSERT_TAB_COMMAND"),
      ve = jt("INDENT_CONTENT_COMMAND"),
      Oe = jt("OUTDENT_CONTENT_COMMAND"),
      Ee = jt("DROP_COMMAND"),
      ke = jt("FORMAT_ELEMENT_COMMAND"),
      Me = jt("DRAGSTART_COMMAND"),
      be = jt("DRAGOVER_COMMAND"),
      Ae = jt("DRAGEND_COMMAND"),
      De = jt("COPY_COMMAND"),
      we = jt("CUT_COMMAND"),
      Pe = jt("SELECT_ALL_COMMAND"),
      Ie = jt("CLEAR_EDITOR_COMMAND"),
      Fe = jt("CLEAR_HISTORY_COMMAND"),
      Re = jt("CAN_REDO_COMMAND"),
      Le = jt("CAN_UNDO_COMMAND"),
      Ke = jt("FOCUS_COMMAND"),
      Be = jt("BLUR_COMMAND"),
      $e = jt("KEY_MODIFIER_COMMAND"),
      ze = Object.freeze({}),
      We = [
        [
          "keydown",
          function (t, e) {
            ((Ue = t.timeStamp), (Ye = t.key), "Backspace" !== t.key && hn());
            if (e.isComposing()) return;
            Ui(e, ue, t);
          },
        ],
        [
          "pointerdown",
          function (t, e) {
            var n = t.target,
              r = t.pointerType;
            as(n) &&
              "touch" !== r &&
              "pen" !== r &&
              0 === t.button &&
              Co(e, function () {
                Qo(n) || (Qe = !0);
              });
          },
        ],
        [
          "compositionstart",
          function (t, e) {
            Ui(e, Xt, t);
          },
        ],
        [
          "compositionend",
          function (t, e) {
            i
              ? (tn = !0)
              : l || (!a && !d)
                ? Ui(e, Qt, t)
                : ((en = !0), (nn = t.data));
          },
        ],
        [
          "input",
          function (t, e) {
            (t.stopPropagation(),
              hn(),
              Co(
                e,
                function () {
                  e.dispatchCommand(qt, t);
                },
                { event: t },
              ),
              (Je = null));
          },
        ],
        [
          "click",
          function (t, e) {
            Co(e, function () {
              var n = Lr(),
                r = ss(Xi(e)),
                o = Kr();
              if (r)
                if (Cr(n)) {
                  var _e23 = n.anchor,
                    _i6 = _e23.getNode();
                  if (
                    "element" === _e23.type &&
                    0 === _e23.offset &&
                    n.isCollapsed() &&
                    !bo(_i6) &&
                    1 === Si().getChildrenSize() &&
                    _i6.getTopLevelElementOrThrow().isEmpty() &&
                    null !== o &&
                    n.is(o)
                  )
                    (r.removeAllRanges(), (n.dirty = !0));
                  else if (3 === t.detail && !n.isCollapsed()) {
                    if (_i6 !== n.focus.getNode()) {
                      var _t28 = ks(_i6, function (t) {
                        return vo(t) && !t.isInline();
                      });
                      vo(_t28) && _t28.select(0);
                    }
                  }
                } else if (
                  "touch" === t.pointerType ||
                  "pen" === t.pointerType
                ) {
                  var _n17 = r.anchorNode;
                  if (cs(_n17) || si(_n17)) {
                    Ti(Rr(o, r, e, t));
                  }
                }
              Ui(e, Gt, t);
            });
          },
        ],
        ["cut", ze],
        ["copy", ze],
        ["dragstart", ze],
        ["dragover", ze],
        ["dragend", ze],
        ["paste", ze],
        ["focus", ze],
        ["blur", ze],
        ["drop", ze],
      ];
    s &&
      We.push([
        "beforeinput",
        function (t, e) {
          return (function (t, e) {
            var n = t.inputType;
            if ("deleteCompositionText" === n || (i && Wi(e))) return;
            if ("insertCompositionText" === n) return;
            Ui(e, Vt, t);
          })(t, e);
        },
      ]);
    var Ue = 0,
      Ye = null,
      je = 0,
      Je = null,
      He = !1,
      Ge = null;
    var Ve = new WeakMap(),
      qe = new WeakMap();
    var Xe = !1,
      Qe = !1,
      Ze = !1,
      tn = !1,
      en = !1,
      nn = "",
      rn = null,
      on = [0, "", 0, "root", 0];
    function sn(t, e, n, r, o) {
      var i = t.anchor,
        l = t.focus,
        c = i.getNode(),
        a = io(),
        u = ss(Xi(a)),
        f = null !== u ? u.anchorNode : null,
        d = i.key,
        h = a.getElementByKey(d),
        g = n.length;
      return (
        d !== l.key ||
        !ur(c) ||
        (((!o && (!s || je < r + 50)) || (c.isDirty() && g < 2) || Oi(n)) &&
          i.offset !== l.offset &&
          !c.isComposing()) ||
        ii(c) ||
        (c.isDirty() && g > 1) ||
        ((o || !s) && null !== h && !c.isComposing() && f !== ci(h)) ||
        (null !== u &&
          null !== e &&
          (!e.collapsed ||
            e.startContainer !== u.anchorNode ||
            e.startOffset !== u.anchorOffset)) ||
        (!c.isComposing() &&
          (c.getFormat() !== t.format || c.getStyle() !== t.style)) ||
        (function (t, e) {
          if (e.isSegmented()) return !0;
          if (!t.isCollapsed()) return !1;
          var n = t.anchor.offset,
            r = e.getParentOrThrow(),
            o = oi(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!r.canInsertTextBefore() && !e.isComposing()) ||
                o ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (ur(e) || (vo(e) && e.isInline())) &&
                    !e.canInsertTextAfter()
                  );
                })(e)
            : n === e.getTextContentSize() &&
                (!e.canInsertTextAfter() ||
                  (!r.canInsertTextAfter() && !e.isComposing()) ||
                  o);
        })(t, c)
      );
    }
    function ln(t, e) {
      return (
        si(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function cn(e, n, r) {
      var o = e.anchorNode,
        i = e.anchorOffset,
        s = e.focusNode,
        l = e.focusOffset;
      (Xe && ((Xe = !1), ln(o, i) && ln(s, l) && !rn)) ||
        Co(n, function () {
          if (!r) return void Ti(null);
          if (!ti(n, o, s)) return;
          var c = Lr();
          if (rn && Cr(c) && c.isCollapsed()) {
            var _t29 = c.anchor,
              _e24 = rn.anchor;
            ((_t29.key === _e24.key && _t29.offset === _e24.offset + 1) ||
              (1 === _t29.offset &&
                _e24.getNode().is(_t29.getNode().getPreviousSibling()))) &&
              ((c = rn.clone()), Ti(c));
          }
          if (((rn = null), Cr(c))) {
            var _r12 = c.anchor,
              _o12 = _r12.getNode();
            if (c.isCollapsed()) {
              "Range" === e.type &&
                e.anchorNode === e.focusNode &&
                (c.dirty = !0);
              var _i7 = Xi(n).event,
                _s3 = _i7 ? _i7.timeStamp : performance.now(),
                _on = on,
                _l3 = _on[0],
                _a = _on[1],
                _u = _on[2],
                _f = _on[3],
                _d2 = _on[4],
                _h2 = Si(),
                _g2 = !1 === n.isComposing() && "" === _h2.getTextContent();
              if (_s3 < _d2 + 200 && _r12.offset === _u && _r12.key === _f)
                an(c, _l3, _a);
              else if ("text" === _r12.type) (ur(_o12) || t(141), un(c, _o12));
              else if ("element" === _r12.type && !_g2) {
                vo(_o12) || t(259);
                var _e25 = _r12.getNode();
                _e25.isEmpty()
                  ? (function (t, e) {
                      var n = e.getTextFormat(),
                        r = e.getTextStyle();
                      an(t, n, r);
                    })(c, _e25)
                  : an(c, c.format, "");
              }
            } else {
              var _t30 = _r12.key,
                _e26 = c.focus.key,
                _n18 = c.getNodes(),
                _o13 = _n18.length,
                _s4 = c.isBackward(),
                _a2 = _s4 ? l : i,
                _u2 = _s4 ? i : l,
                _f2 = _s4 ? _e26 : _t30,
                _d3 = _s4 ? _t30 : _e26;
              var _h3 = 2047,
                _g3 = !1;
              for (var _t31 = 0; _t31 < _o13; _t31++) {
                var _e27 = _n18[_t31],
                  _r13 = _e27.getTextContentSize();
                if (
                  ur(_e27) &&
                  0 !== _r13 &&
                  !(
                    (0 === _t31 && _e27.__key === _f2 && _a2 === _r13) ||
                    (_t31 === _o13 - 1 && _e27.__key === _d3 && 0 === _u2)
                  ) &&
                  ((_g3 = !0), (_h3 &= _e27.getFormat()), 0 === _h3)
                )
                  break;
              }
              c.format = _g3 ? _h3 : 0;
            }
          }
          Ui(n, Jt, void 0);
        });
    }
    function an(t, e, n) {
      (t.format === e && t.style === n) ||
        ((t.format = e), (t.style = n), (t.dirty = !0));
    }
    function un(t, e) {
      an(t, e.getFormat(), e.getStyle());
    }
    function fn(t) {
      if (!t.getTargetRanges) return null;
      var e = t.getTargetRanges();
      return 0 === e.length ? null : e[0];
    }
    function dn(t) {
      if (null == t || t.length <= 1 || null == Ye) return;
      var e =
        1 === Ye.length
          ? Ye
          : "Enter" === Ye
            ? "\n"
            : "Tab" === Ye
              ? "\t"
              : null;
      if (!e) return;
      var n = Lr();
      if (!Cr(n) || !n.isCollapsed()) return;
      var r = n.anchor.getNode();
      if (!ur(r)) return;
      var o = n.anchor.offset;
      if (r.getTextContentSize() === o) {
        var _t32 = r.getNextSibling();
        if ("\n" === e) {
          if (Jn(_t32)) _t32.selectEnd();
          else if (!_t32) {
            var _t33 = ks(r, wr),
              _e28 = _t33 && _t33.getNextSibling();
            vo(_e28) && _e28.selectStart();
          }
        } else
          "\t" === e
            ? gr(_t32) && _t32.selectEnd()
            : ur(_t32) && _t32.getTextContent()[0] === e && _t32.select(1, 1);
      } else r.getTextContent()[o] === e && r.select(o + 1, o + 1);
    }
    function hn() {
      ((He = !1), null !== Ge && (clearTimeout(Ge), (Ge = null)));
    }
    function gn() {
      (hn(), (He = !0), (Ge = setTimeout(hn, 0)));
    }
    function _n(e) {
      var _ref11;
      var n = e.inputType,
        r = fn(e),
        o = io(),
        i = Lr();
      if ("insertText" === n && e.data && He) {
        if ((hn(), e.preventDefault(), Cr(i) && !i.isCollapsed())) {
          var _t34 = i.isBackward() ? i.anchor : i.focus;
          (i.anchor.set(_t34.key, _t34.offset, _t34.type),
            i.focus.set(_t34.key, _t34.offset, _t34.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === i) {
          var _t35 = Kr();
          if (!Cr(_t35)) return !0;
          Ti(_t35.clone());
        }
        if (Cr(i)) {
          var _n19 = i.anchor.key === i.focus.key;
          if (
            ((s = e.timeStamp),
            "MediaLast" === Ye && s < Ue + 30 && o.isComposing() && _n19)
          ) {
            if (
              (hi(null),
              (Ue = 0),
              setTimeout(function () {
                Co(o, function () {
                  hi(null);
                });
              }, 30),
              Cr(i))
            ) {
              var _e29 = i.anchor.getNode();
              (_e29.markDirty(), ur(_e29) || t(142), un(i, _e29));
            }
          } else {
            (hi(null), e.preventDefault());
            var _t36 = i.anchor.getNode(),
              _r14 = _t36.getTextContent(),
              _s5 = _t36.canInsertTextAfter(),
              _l4 = 0 === i.anchor.offset && i.focus.offset === _r14.length;
            var _c2 = f && _n19 && !_l4 && _s5;
            if (
              (_c2 && i.isCollapsed() && (_c2 = !ko(zi(i.anchor, !0))), !_c2)
            ) {
              Ui(o, Zt, !0);
              var _t37 = Lr();
              f &&
                Cr(_t37) &&
                _t37.isCollapsed() &&
                ((rn = _t37),
                setTimeout(function () {
                  return (rn = null);
                }));
            }
          }
          return !0;
        }
      }
      var s;
      if (!Cr(i)) return !0;
      var c = e.data;
      (null !== Je && bi(!1, o, Je),
        (i.dirty && null === Je) ||
          !i.isCollapsed() ||
          bo(i.anchor.getNode()) ||
          null === r ||
          i.applyDOMRange(r),
        (Je = null));
      var a = i.anchor,
        u = i.focus,
        d = a.getNode(),
        h = u.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === c) (e.preventDefault(), Ui(o, te, !1));
        else if (c === v) (e.preventDefault(), Ui(o, ee, void 0));
        else if (null == c && e.dataTransfer) {
          var _t38 = e.dataTransfer.getData("text/plain");
          (e.preventDefault(), i.insertRawText(_t38));
        } else
          null != c && sn(i, r, c, e.timeStamp, !0)
            ? (e.preventDefault(), Ui(o, ne, c), dn(c))
            : (Je = c);
        return ((je = e.timeStamp), !0);
      }
      switch ((e.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          Ui(o, ne, e);
          dn(
            (_ref11 = e.dataTransfer
              ? e.dataTransfer.getData("text/plain")
              : null) != null
              ? _ref11
              : e.data,
          );
          break;
        case "insertFromComposition":
          (hi(null), Ui(o, ne, e));
          break;
        case "insertLineBreak":
          (hi(null), Ui(o, te, !1));
          break;
        case "insertParagraph":
          (hi(null), Ze && !l ? ((Ze = !1), Ui(o, te, !1)) : Ui(o, ee, void 0));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          Ui(o, re, e);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || vo(t) || vo(e) || !oi(t) || !oi(e);
          })(d, h) && Ui(o, oe, e);
          break;
        case "deleteByDrag":
          (Hi(Rn), Ui(o, oe, e));
          break;
        case "deleteByCut":
          Ui(o, oe, e);
          break;
        case "deleteContent":
          Ui(o, Zt, !1);
          break;
        case "deleteWordBackward":
          Ui(o, ie, !0);
          break;
        case "deleteWordForward":
          Ui(o, ie, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          Ui(o, se, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          Ui(o, se, !1);
          break;
        case "formatStrikeThrough":
          Ui(o, le, "strikethrough");
          break;
        case "formatBold":
          Ui(o, le, "bold");
          break;
        case "formatItalic":
          Ui(o, le, "italic");
          break;
        case "formatUnderline":
          Ui(o, le, "underline");
          break;
        case "historyUndo":
          Ui(o, ce, void 0);
          break;
        case "historyRedo":
          Ui(o, ae, void 0);
      }
      return !0;
    }
    function pn(t) {
      if (cs(t.target) && Qo(t.target)) return !0;
      var e = io(),
        n = Lr(),
        r = t.data,
        o = fn(t);
      if (null != r && Cr(n) && sn(n, o, r, t.timeStamp, !1)) {
        tn && (xn(e, r), (tn = !1));
        var _o14 = n.anchor.getNode(),
          _l5 = ss(Xi(e));
        if (null === _l5) return !0;
        var _c3 = n.isBackward(),
          _a3 = _c3 ? n.anchor.offset : n.focus.offset,
          _u3 = _c3 ? n.focus.offset : n.anchor.offset;
        (s &&
          !n.isCollapsed() &&
          ur(_o14) &&
          null !== _l5.anchorNode &&
          _o14.getTextContent().slice(0, _a3) +
            r +
            _o14.getTextContent().slice(_a3 + _u3) ===
            Mi(_l5.anchorNode)) ||
          Ui(e, ne, r);
        var _d4 = r.length;
        (i &&
          _d4 > 1 &&
          "insertCompositionText" === t.inputType &&
          !e.isComposing() &&
          (n.anchor.offset -= _d4),
          f && e.isComposing() && ((Ue = 0), hi(null)));
      } else {
        (bi(!1, e, null !== r ? r : void 0),
          tn && (xn(e, r || void 0), (tn = !1)));
      }
      return (
        (function () {
          no();
          var t = io();
          H(t);
        })(),
        !0
      );
    }
    function yn(t) {
      var e = io(),
        n = Lr();
      if (Cr(n) && !e.isComposing()) {
        var _r15 = n.anchor,
          _o15 = n.anchor.getNode();
        (hi(_r15.key),
          Hi(Ln),
          (t.timeStamp < Ue + 30 ||
            "element" === _r15.type ||
            !n.isCollapsed() ||
            _o15.getFormat() !== n.format ||
            (ur(_o15) && _o15.getStyle() !== n.style)) &&
            Ui(e, ne, O));
      }
      return !0;
    }
    function mn(t) {
      return (xn(io(), t.data), Hi(Kn), !0);
    }
    function xn(t, e) {
      var n = t._compositionKey;
      if ((hi(null), null !== n && null != e)) {
        if ("" === e) {
          var _e30 = _i(n),
            _r16 = ci(t.getElementByKey(n));
          if (null !== _r16 && null !== _r16.nodeValue && ur(_e30)) {
            var _n20 = ss(Xi(t));
            var _o16 = null,
              _i8 = null;
            (null !== _n20 &&
              _n20.anchorNode === _r16 &&
              ((_o16 = _n20.anchorOffset), (_i8 = _n20.focusOffset)),
              Ai(_e30, _r16.nodeValue, _o16, _i8, !0));
          }
          return;
        }
        if ("\n" === e[e.length - 1]) {
          var _e31 = Lr();
          if (Cr(_e31) || Nr(_e31)) {
            if (Cr(_e31)) {
              var _t39 = _e31.focus;
              _e31.anchor.set(_t39.key, _t39.offset, _t39.type);
            }
            return void Ui(t, ye, null);
          }
        }
      }
      bi(!0, t, e);
    }
    function Cn(t) {
      var e = io();
      if (null == t.key) return !0;
      if (en) {
        if (Li(t))
          return (
            Co(e, function () {
              xn(e, nn);
            }),
            (en = !1),
            (nn = ""),
            !0
          );
        ((en = !1), (nn = ""));
      }
      if (
        (function (t) {
          return Ii(t, "ArrowRight", { shiftKey: "any" });
        })(t)
      )
        Ui(e, fe, t);
      else if (
        (function (t) {
          return Ii(t, "ArrowRight", Fi);
        })(t)
      )
        Ui(e, de, t);
      else if (
        (function (t) {
          return Ii(t, "ArrowLeft", { shiftKey: "any" });
        })(t)
      )
        Ui(e, he, t);
      else if (
        (function (t) {
          return Ii(t, "ArrowLeft", Fi);
        })(t)
      )
        Ui(e, ge, t);
      else if (
        (function (t) {
          return Ii(t, "ArrowUp", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        Ui(e, _e, t);
      else if (
        (function (t) {
          return Ii(t, "ArrowDown", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        Ui(e, pe, t);
      else if (
        (function (t) {
          return Ii(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
            shiftKey: !0,
          });
        })(t)
      )
        ((Ze = !0), Ui(e, ye, t));
      else if (
        (function (t) {
          return " " === t.key;
        })(t)
      )
        Ui(e, me, t);
      else if (
        (function (t) {
          return o && Ii(t, "o", { ctrlKey: !0 });
        })(t)
      )
        (t.preventDefault(), (Ze = !0), Ui(e, te, !0));
      else if (
        (function (t) {
          return Ii(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
          });
        })(t)
      )
        ((Ze = !1), Ui(e, ye, t));
      else if (
        (function (t) {
          return (
            Ii(t, "Backspace", { shiftKey: "any" }) ||
            (o && Ii(t, "h", { ctrlKey: !0 }))
          );
        })(t)
      )
        Li(t) ? Ui(e, xe, t) && gn() : (t.preventDefault(), Ui(e, Zt, !0));
      else if (
        (function (t) {
          return "Escape" === t.key;
        })(t)
      )
        Ui(e, Ce, t);
      else if (
        (function (t) {
          return Ii(t, "Delete", {}) || (o && Ii(t, "d", { ctrlKey: !0 }));
        })(t)
      )
        !(function (t) {
          return "Delete" === t.key;
        })(t)
          ? (t.preventDefault(), Ui(e, Zt, !1))
          : Ui(e, Se, t);
      else if (
        (function (t) {
          return Ii(t, "Backspace", Ri);
        })(t)
      )
        (t.preventDefault(), Ui(e, ie, !0));
      else if (
        (function (t) {
          return Ii(t, "Delete", Ri);
        })(t)
      )
        (t.preventDefault(), Ui(e, ie, !1));
      else if (
        (function (t) {
          return o && Ii(t, "Backspace", { metaKey: !0 });
        })(t)
      )
        (t.preventDefault(), Ui(e, se, !0));
      else if (
        (function (t) {
          return (
            o &&
            (Ii(t, "Delete", { metaKey: !0 }) || Ii(t, "k", { ctrlKey: !0 }))
          );
        })(t)
      )
        (t.preventDefault(), Ui(e, se, !1));
      else if (
        (function (t) {
          return Ii(t, "b", Fi);
        })(t)
      )
        (t.preventDefault(), Ui(e, le, "bold"));
      else if (
        (function (t) {
          return Ii(t, "u", Fi);
        })(t)
      )
        (t.preventDefault(), Ui(e, le, "underline"));
      else if (
        (function (t) {
          return Ii(t, "i", Fi);
        })(t)
      )
        (t.preventDefault(), Ui(e, le, "italic"));
      else if (
        (function (t) {
          return Ii(t, "Tab", { shiftKey: "any" });
        })(t)
      )
        Ui(e, Ne, t);
      else if (
        (function (t) {
          return Ii(t, "z", Fi);
        })(t)
      )
        (t.preventDefault(), Ui(e, ce, void 0));
      else if (
        (function (t) {
          if (o) return Ii(t, "z", { metaKey: !0, shiftKey: !0 });
          return (
            Ii(t, "y", { ctrlKey: !0 }) ||
            Ii(t, "z", { ctrlKey: !0, shiftKey: !0 })
          );
        })(t)
      )
        (t.preventDefault(), Ui(e, ae, void 0));
      else {
        var _n21 = e._editorState._selection;
        !(function (t) {
          return Ii(t, "a", Fi);
        })(t)
          ? null === _n21 ||
            Cr(_n21) ||
            (!(function (t) {
              return Ii(t, "c", Fi);
            })(t)
              ? (function (t) {
                  return Ii(t, "x", Fi);
                })(t) && (t.preventDefault(), Ui(e, we, t))
              : (t.preventDefault(), Ui(e, De, t)))
          : (t.preventDefault(), Ui(e, Pe, t) && gn());
      }
      return (
        (function (t) {
          return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey;
        })(t) && e.dispatchCommand($e, t),
        !0
      );
    }
    function Sn(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    var Nn = new Map();
    function Tn(t) {
      var e = ls(t.target);
      if (null === e) return;
      var n = ni(e.anchorNode);
      if (null === n) return;
      Qe &&
        ((Qe = !1),
        Co(n, function () {
          var r = Kr(),
            o = e.anchorNode;
          if (cs(o) || si(o)) {
            Ti(Rr(r, e, n, t));
          }
        }));
      var r = Ei(n),
        o = r[r.length - 1],
        i = o._key,
        s = Nn.get(i),
        l = s || o;
      (l !== n && cn(e, l, !1),
        cn(e, n, !0),
        n !== o ? Nn.set(i, n) : s && Nn["delete"](i));
    }
    function vn(t) {
      t._lexicalHandled = !0;
    }
    function On(t) {
      return !0 === t._lexicalHandled;
    }
    var En = function En() {};
    function kn(e) {
      var n = Ve.get(e);
      if (void 0 === n) return void En();
      var r = qe.get(n);
      if (void 0 === r) return void En();
      var o = r - 1;
      (o >= 0 || t(164),
        Ve["delete"](e),
        qe.set(n, o),
        0 === o && n.removeEventListener("selectionchange", Tn));
      var i = ri(e);
      ei(i)
        ? (!(function (t) {
            if (null !== t._parentEditor) {
              var _e32 = Ei(t),
                _n22 = _e32[_e32.length - 1]._key;
              Nn.get(_n22) === t && Nn["delete"](_n22);
            } else Nn["delete"](t._key);
          })(i),
          (e.__lexicalEditor = null))
        : i && t(198);
      var s = Sn(e);
      for (var _t40 = 0; _t40 < s.length; _t40++) s[_t40]();
      e.__lexicalEventHandles = [];
    }
    function Mn(t, e, n) {
      no();
      var r = t.__key,
        o = t.getParent();
      if (null === o) return;
      var i = (function (t) {
        var e = Lr();
        if (!Cr(e) || !vo(t)) return e;
        var n = e.anchor,
          r = e.focus,
          o = n.getNode(),
          i = r.getNode();
        Vi(o, t) && n.set(t.__key, 0, "element");
        Vi(i, t) && r.set(t.__key, 0, "element");
        return e;
      })(t);
      var s = !1;
      if (Cr(i) && e) {
        var _e33 = i.anchor,
          _n23 = i.focus;
        (_e33.key === r &&
          (zr(_e33, t, o, t.getPreviousSibling(), t.getNextSibling()),
          (s = !0)),
          _n23.key === r &&
            (zr(_n23, t, o, t.getPreviousSibling(), t.getNextSibling()),
            (s = !0)));
      } else Nr(i) && e && t.isSelected() && t.selectPrevious();
      if (Cr(i) && e && !s) {
        var _e34 = t.getIndexWithinParent();
        (fi(t), Br(i, o, _e34, -1));
      } else fi(t);
      (n || Zi(o) || o.canBeEmpty() || !o.isEmpty() || Mn(o, e),
        e && i && bo(o) && o.isEmpty() && o.selectEnd());
    }
    var bn = Symbol["for"]("ephemeral");
    function An(t) {
      return t[bn] || !1;
    }
    var _Dn5 = (function () {
      function Dn(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", {
            configurable: !0,
            enumerable: !1,
            value: void 0,
            writable: !0,
          }),
          ui(this, t));
      }
      Dn.getType = function getType() {
        var _Es2 = Es(this),
          e = _Es2.ownNodeType;
        return (void 0 === e && t(64, this.name), e);
      };
      Dn.clone = function clone(e) {
        t(65, this.name);
      };
      var _proto3 = Dn.prototype;
      _proto3.$config = function $config() {
        return {};
      };
      _proto3.config = function config(t, e) {
        var _ref12;
        var n = e["extends"] || Object.getPrototypeOf(this.constructor);
        return (
          Object.assign(e, { extends: n, type: t }),
          (_ref12 = {}),
          (_ref12[t] = e),
          _ref12
        );
      };
      _proto3.afterCloneFrom = function afterCloneFrom(t) {
        this.__key === t.__key
          ? ((this.__parent = t.__parent),
            (this.__next = t.__next),
            (this.__prev = t.__prev),
            (this.__state = t.__state))
          : t.__state && (this.__state = t.__state.getWritable(this));
      };
      _proto3.resetOnCopyNodeFrom = function resetOnCopyNodeFrom(t) {
        this.__state &&
          (this.__state = this.__state.getWritable(this).resetOnCopyNode());
      };
      _proto3.getType = function getType() {
        return this.__type;
      };
      _proto3.isInline = function isInline() {
        t(137, this.constructor.name);
      };
      _proto3.isAttached = function isAttached() {
        var t = this.__key;
        for (; null !== t; ) {
          if ("root" === t) return !0;
          var _e35 = _i(t);
          if (null === _e35) break;
          t = _e35.__parent;
        }
        return !1;
      };
      _proto3.isSelected = function isSelected(t) {
        var _this12 = this;
        var e = t || Lr();
        if (null == e) return !1;
        var n = e.getNodes().some(function (t) {
          return t.__key === _this12.__key;
        });
        if (ur(this)) return n;
        if (
          Cr(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t41 = this.getParent();
          if (ko(this) && this.isInline() && _t41) {
            var _n24 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t41.is(_n24.getNode()) &&
              _n24.offset === _t41.getChildrenSize() &&
              this.is(_t41.getLastChild())
            )
              return !1;
          }
        }
        return n;
      };
      _proto3.getKey = function getKey() {
        return this.__key;
      };
      _proto3.getIndexWithinParent = function getIndexWithinParent() {
        var t = this.getParent();
        if (null === t) return -1;
        var e = t.getFirstChild(),
          n = 0;
        for (; null !== e; ) {
          if (this.is(e)) return n;
          (n++, (e = e.getNextSibling()));
        }
        return -1;
      };
      _proto3.getParent = function getParent() {
        var t = this.getLatest().__parent;
        return null === t ? null : _i(t);
      };
      _proto3.getParentOrThrow = function getParentOrThrow() {
        var e = this.getParent();
        return (null === e && t(66, this.__key), e);
      };
      _proto3.getTopLevelElement = function getTopLevelElement() {
        var e = this;
        for (; null !== e; ) {
          var _n25 = e.getParent();
          if (Zi(_n25)) return (vo(e) || (e === this && ko(e)) || t(194), e);
          e = _n25;
        }
        return null;
      };
      _proto3.getTopLevelElementOrThrow = function getTopLevelElementOrThrow() {
        var e = this.getTopLevelElement();
        return (null === e && t(67, this.__key), e);
      };
      _proto3.getParents = function getParents() {
        var t = [];
        var e = this.getParent();
        for (; null !== e; ) (t.push(e), (e = e.getParent()));
        return t;
      };
      _proto3.getParentKeys = function getParentKeys() {
        var t = [];
        var e = this.getParent();
        for (; null !== e; ) (t.push(e.__key), (e = e.getParent()));
        return t;
      };
      _proto3.getPreviousSibling = function getPreviousSibling() {
        var t = this.getLatest().__prev;
        return null === t ? null : _i(t);
      };
      _proto3.getPreviousSiblings = function getPreviousSiblings() {
        var t = [],
          e = this.getParent();
        if (null === e) return t;
        var n = e.getFirstChild();
        for (; null !== n && !n.is(this); )
          (t.push(n), (n = n.getNextSibling()));
        return t;
      };
      _proto3.getNextSibling = function getNextSibling() {
        var t = this.getLatest().__next;
        return null === t ? null : _i(t);
      };
      _proto3.getNextSiblings = function getNextSiblings() {
        var t = [];
        var e = this.getNextSibling();
        for (; null !== e; ) (t.push(e), (e = e.getNextSibling()));
        return t;
      };
      _proto3.getCommonAncestor = function getCommonAncestor(t) {
        var e = vo(this) ? this : this.getParent(),
          n = vo(t) ? t : t.getParent(),
          r = e && n ? sl(e, n) : null;
        return r ? r.commonAncestor : null;
      };
      _proto3.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto3.isBefore = function isBefore(e) {
        var n = sl(this, e);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === rl(n)
              : ("same" !== n.type && "ancestor" !== n.type && t(279), !1)))
        );
      };
      _proto3.isParentOf = function isParentOf(t) {
        var e = sl(this, t);
        return null !== e && "ancestor" === e.type;
      };
      _proto3.getNodesBetween = function getNodesBetween(e) {
        var n = this.isBefore(e),
          r = [],
          o = new Set();
        var i = this;
        for (; null !== i; ) {
          var _s6 = i.__key;
          if ((o.has(_s6) || (o.add(_s6), r.push(i)), i === e)) break;
          var _l6 = vo(i) ? (n ? i.getFirstChild() : i.getLastChild()) : null;
          if (null !== _l6) {
            i = _l6;
            continue;
          }
          var _c4 = n ? i.getNextSibling() : i.getPreviousSibling();
          if (null !== _c4) {
            i = _c4;
            continue;
          }
          var _a4 = i.getParentOrThrow();
          if ((o.has(_a4.__key) || r.push(_a4), _a4 === e)) break;
          var _u4 = null,
            _f3 = _a4;
          do {
            if (
              (null === _f3 && t(68),
              (_u4 = n ? _f3.getNextSibling() : _f3.getPreviousSibling()),
              (_f3 = _f3.getParent()),
              null === _f3)
            )
              break;
            null !== _u4 || o.has(_f3.__key) || r.push(_f3);
          } while (null === _u4);
          i = _u4;
        }
        return (n || r.reverse(), r);
      };
      _proto3.isDirty = function isDirty() {
        var t = io()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto3.getLatest = function getLatest() {
        if (An(this)) return this;
        var e = _i(this.__key);
        return (null === e && t(113), e);
      };
      _proto3.getWritable = function getWritable() {
        if (An(this)) return this;
        no();
        var t = oo(),
          e = io(),
          n = t._nodeMap,
          r = this.__key,
          o = this.getLatest(),
          i = e._cloneNotNeeded,
          s = Lr();
        if ((null !== s && s.setCachedNodes(null), i.has(r))) return (di(o), o);
        var l = Ss(o);
        return (i.add(r), di(l), n.set(r, l), l);
      };
      _proto3.getTextContent = function getTextContent() {
        return "";
      };
      _proto3.getTextContentSize = function getTextContentSize() {
        return this.getTextContent().length;
      };
      _proto3.createDOM = function createDOM(e, n) {
        t(70);
      };
      _proto3.updateDOM = function updateDOM(e, n, r) {
        t(71);
      };
      _proto3.exportDOM = function exportDOM(t) {
        return { element: this.createDOM(t._config, t) };
      };
      _proto3.exportJSON = function exportJSON() {
        var t = this.__state ? this.__state.toJSON() : void 0;
        return babelHelpers["extends"]({ type: this.__type, version: 1 }, t);
      };
      Dn.importJSON = function importJSON(e) {
        t(18, this.name);
      };
      _proto3.updateFromJSON = function updateFromJSON(t) {
        return (function (t, e) {
          var n = t.getWritable(),
            r = e.$;
          var o = r;
          for (var _t42 of tt(n).flatKeys)
            _t42 in e &&
              ((void 0 !== o && o !== r) ||
                (o = babelHelpers["extends"]({}, r)),
              (o[_t42] = e[_t42]));
          return ((n.__state || o) && Z(t).updateFromJSON(o), n);
        })(this, t);
      };
      Dn.transform = function transform() {
        return null;
      };
      _proto3.remove = function remove(t) {
        Mn(this, !0, t);
      };
      _proto3.replace = function replace(e, n) {
        no();
        var r = Lr();
        (null !== r && (r = r.clone()), ns(this, e));
        var o = this.getLatest(),
          i = this.__key,
          s = e.__key,
          l = e.getWritable(),
          c = this.getParentOrThrow().getWritable(),
          a = c.__size;
        fi(l);
        var u = o.getPreviousSibling(),
          f = o.getNextSibling(),
          d = o.__prev,
          h = o.__next,
          g = o.__parent;
        if ((Mn(o, !1, !0), null === u)) c.__first = s;
        else {
          u.getWritable().__next = s;
        }
        if (((l.__prev = d), null === f)) c.__last = s;
        else {
          f.getWritable().__prev = s;
        }
        if (
          ((l.__next = h),
          (l.__parent = g),
          (c.__size = a),
          n &&
            ((vo(this) && vo(l)) || t(139),
            this.getChildren().forEach(function (t) {
              l.append(t);
            })),
          Cr(r))
        ) {
          Ti(r);
          var _t43 = r.anchor,
            _e36 = r.focus;
          (_t43.key === i && mr(_t43, l), _e36.key === i && mr(_e36, l));
        }
        return (gi() === i && hi(s), l);
      };
      _proto3.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (no(), ns(this, t));
        var n = this.getWritable(),
          r = t.getWritable(),
          o = r.getParent(),
          i = Lr();
        var s = !1,
          l = !1;
        if (null !== o) {
          var _e37 = t.getIndexWithinParent();
          if ((fi(r), Cr(i))) {
            var _t44 = o.__key,
              _n26 = i.anchor,
              _r17 = i.focus;
            ((s =
              "element" === _n26.type &&
              _n26.key === _t44 &&
              _n26.offset === _e37 + 1),
              (l =
                "element" === _r17.type &&
                _r17.key === _t44 &&
                _r17.offset === _e37 + 1));
          }
        }
        var c = this.getNextSibling(),
          a = this.getParentOrThrow().getWritable(),
          u = r.__key,
          f = n.__next;
        if (null === c) a.__last = u;
        else {
          c.getWritable().__prev = u;
        }
        if (
          (a.__size++,
          (n.__next = u),
          (r.__next = f),
          (r.__prev = n.__key),
          (r.__parent = n.__parent),
          e && Cr(i))
        ) {
          var _t45 = this.getIndexWithinParent();
          Br(i, a, _t45 + 1);
          var _e38 = a.__key;
          (s && i.anchor.set(_e38, _t45 + 2, "element"),
            l && i.focus.set(_e38, _t45 + 2, "element"));
        }
        return t;
      };
      _proto3.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (no(), ns(this, t));
        var n = this.getWritable(),
          r = t.getWritable(),
          o = r.__key;
        fi(r);
        var i = this.getPreviousSibling(),
          s = this.getParentOrThrow().getWritable(),
          l = n.__prev,
          c = this.getIndexWithinParent();
        if (null === i) s.__first = o;
        else {
          i.getWritable().__next = o;
        }
        (s.__size++,
          (n.__prev = o),
          (r.__prev = l),
          (r.__next = n.__key),
          (r.__parent = n.__parent));
        var a = Lr();
        if (e && Cr(a)) {
          Br(a, this.getParentOrThrow(), c);
        }
        return t;
      };
      _proto3.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto3.createParentElementNode = function createParentElementNode() {
        return Lo();
      };
      _proto3.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto3.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto3.selectPrevious = function selectPrevious(t, e) {
        no();
        var n = this.getPreviousSibling(),
          r = this.getParentOrThrow();
        if (null === n) return r.select(0, 0);
        if (vo(n)) return n.select();
        if (!ur(n)) {
          var _t46 = n.getIndexWithinParent() + 1;
          return r.select(_t46, _t46);
        }
        return n.select(t, e);
      };
      _proto3.selectNext = function selectNext(t, e) {
        no();
        var n = this.getNextSibling(),
          r = this.getParentOrThrow();
        if (null === n) return r.select();
        if (vo(n)) return n.select(0, 0);
        if (!ur(n)) {
          var _t47 = n.getIndexWithinParent();
          return r.select(_t47, _t47);
        }
        return n.select(t, e);
      };
      _proto3.markDirty = function markDirty() {
        this.getWritable();
      };
      _proto3.reconcileObservedMutation = function reconcileObservedMutation(
        t,
        e,
      ) {
        this.markDirty();
      };
      return Dn;
    })();
    var wn = "history-merge",
      Pn = "collaboration",
      In = "skip-scroll-into-view",
      Fn = "skip-dom-selection",
      Rn = "skip-selection-focus",
      Ln = "composition-start",
      Kn = "composition-end",
      Bn = /\s*!important\s*$/i;
    function $n(t) {
      var e = {};
      if (!t) return e;
      var n = "",
        r = "",
        o = null,
        i = !1,
        s = !1,
        l = !1,
        c = 0;
      for (var _a5 = 0; _a5 < t.length; _a5++) {
        var _u5 = t[_a5];
        if (i) "*" === _u5 && "/" === t[_a5 + 1] && ((i = !1), _a5++);
        else if (s) (l ? (r += _u5) : (n += _u5), (s = !1));
        else if (null === o) {
          if ("/" !== _u5 || "*" !== t[_a5 + 1]) {
            if ('"' !== _u5 && "'" !== _u5) {
              if ("(" !== _u5) {
                if (")" !== _u5) {
                  if (l || ":" !== _u5 || 0 !== c) {
                    if (";" === _u5 && 0 === c) {
                      var _t48 = n.trim(),
                        _o17 = r.trim();
                      ("" !== _t48 && "" !== _o17 && (e[_t48] = _o17),
                        (n = ""),
                        (r = ""),
                        (l = !1));
                      continue;
                    }
                    l ? (r += _u5) : (n += _u5);
                  } else l = !0;
                } else ((c = Math.max(0, c - 1)), l ? (r += _u5) : (n += _u5));
              } else (c++, l ? (r += _u5) : (n += _u5));
            } else ((o = _u5), l ? (r += _u5) : (n += _u5));
          } else ((i = !0), _a5++);
        } else
          (l ? (r += _u5) : (n += _u5),
            "\\" === _u5 ? (s = !0) : _u5 === o && (o = null));
      }
      var a = n.trim(),
        u = r.trim();
      return ("" !== a && "" !== u && (e[a] = u), e);
    }
    function zn(t, e, n) {
      var r = Bn.test(n) ? "important" : "",
        o = "" === r ? n : n.replace(Bn, "").trim();
      t.setProperty(e, o, r);
    }
    function Wn(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var r = $n(n),
        o = $n(e);
      for (var _e39 in o) (delete r[_e39], zn(t, _e39, o[_e39]));
      for (var _e40 in r) t.removeProperty(_e40);
    }
    var _Un = (function (_Dn) {
      function Un(t) {
        return _Dn.call(this, t) || this;
      }
      babelHelpers.inheritsLoose(Un, _Dn);
      Un.getType = function getType() {
        return "linebreak";
      };
      Un.clone = function clone(t) {
        return new Un(t.__key);
      };
      var _proto4 = Un.prototype;
      _proto4.getTextContent = function getTextContent() {
        return "\n";
      };
      _proto4.createDOM = function createDOM() {
        return document.createElement("br");
      };
      _proto4.updateDOM = function updateDOM() {
        return !1;
      };
      _proto4.isInline = function isInline() {
        return !0;
      };
      Un.importDOM = function importDOM() {
        return {
          br: function br(t) {
            return (function (t) {
              var e = t.parentElement;
              if (null !== e && gs(e)) {
                var _n27 = e.firstChild;
                if (_n27 === t || (_n27.nextSibling === t && Hn(_n27))) {
                  var _n28 = e.lastChild;
                  if (_n28 === t || (_n28.previousSibling === t && Hn(_n28)))
                    return !0;
                }
              }
              return !1;
            })(t) ||
              (function (t) {
                var e = t.parentElement;
                if (null !== e && gs(e)) {
                  var _n29 = e.firstChild;
                  if (_n29 === t || (_n29.nextSibling === t && Hn(_n29)))
                    return !1;
                  var _r18 = e.lastChild;
                  if (_r18 === t || (_r18.previousSibling === t && Hn(_r18)))
                    return !0;
                }
                return !1;
              })(t)
              ? null
              : { conversion: Yn, priority: 0 };
          },
        };
      };
      Un.importJSON = function importJSON(t) {
        return jn().updateFromJSON(t);
      };
      return Un;
    })(_Dn5);
    function Yn(t) {
      return { node: jn() };
    }
    function jn() {
      return es(new _Un());
    }
    function Jn(t) {
      return t instanceof _Un;
    }
    function Hn(t) {
      return si(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    function Gn(t, e) {
      return 16 & e
        ? "code"
        : e & p
          ? "mark"
          : 32 & e
            ? "sub"
            : 64 & e
              ? "sup"
              : null;
    }
    function Vn(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function qn(t, e, n, r, o) {
      var i = r.classList;
      var s = Ki(o, "base");
      (void 0 !== s && i.add.apply(i, s),
        (s = Ki(o, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== s &&
        (8 & n && 4 & n
          ? ((l = !0), c || i.add.apply(i, s))
          : c && i.remove.apply(i, s));
      for (var _t49 in A) {
        var _r19 = A[_t49];
        if (((s = Ki(o, _t49)), void 0 !== s))
          if (n & _r19) {
            if (l && ("underline" === _t49 || "strikethrough" === _t49)) {
              e & _r19 && i.remove.apply(i, s);
              continue;
            }
            (0 === (e & _r19) ||
              (c && "underline" === _t49) ||
              "strikethrough" === _t49) &&
              i.add.apply(i, s);
          } else e & _r19 && i.remove.apply(i, s);
      }
    }
    function Xn(t, e, n) {
      var r = e.firstChild,
        o = n.isComposing(),
        s = t + (o ? T : "");
      if (null == r) e.textContent = s;
      else {
        var _t50 = r.nodeValue;
        if (_t50 !== s)
          if (o || i) {
            var _ref13 = (function (t, e) {
                var n = t.length,
                  r = e.length;
                var o = 0,
                  i = 0;
                for (; o < n && o < r && t[o] === e[o]; ) o++;
                for (
                  ;
                  i + o < n && i + o < r && t[n - i - 1] === e[r - i - 1];
                )
                  i++;
                return [o, n - o - i, e.slice(o, r - i)];
              })(_t50, s),
              _e41 = _ref13[0],
              _n30 = _ref13[1],
              _o18 = _ref13[2];
            (0 !== _n30 && r.deleteData(_e41, _n30), r.insertData(_e41, _o18));
          } else r.nodeValue = s;
      }
    }
    function Qn(t, e, n, r, o, i) {
      Xn(o, t, e);
      var s = i.theme.text;
      void 0 !== s && qn(0, 0, r, t, s);
    }
    function Zn(t, e) {
      var n = document.createElement(e);
      return (n.appendChild(t), n);
    }
    var _tr2 = (function (_Dn2) {
      function tr(t, e) {
        var _this;
        if (t === void 0) {
          t = "";
        }
        ((_this = _Dn2.call(this, e) || this),
          (_this.__text = t),
          (_this.__format = 0),
          (_this.__style = ""),
          (_this.__mode = 0),
          (_this.__detail = 0));
        return _this;
      }
      babelHelpers.inheritsLoose(tr, _Dn2);
      tr.getType = function getType() {
        return "text";
      };
      tr.clone = function clone(t) {
        return new tr(t.__text, t.__key);
      };
      var _proto5 = tr.prototype;
      _proto5.afterCloneFrom = function afterCloneFrom(t) {
        (_Dn2.prototype.afterCloneFrom.call(this, t),
          (this.__text = t.__text),
          (this.__format = t.__format),
          (this.__style = t.__style),
          (this.__mode = t.__mode),
          (this.__detail = t.__detail));
      };
      _proto5.getFormat = function getFormat() {
        return this.getLatest().__format;
      };
      _proto5.getDetail = function getDetail() {
        return this.getLatest().__detail;
      };
      _proto5.getMode = function getMode() {
        var t = this.getLatest();
        return F[t.__mode];
      };
      _proto5.getStyle = function getStyle() {
        return this.getLatest().__style;
      };
      _proto5.isToken = function isToken() {
        return 1 === this.getLatest().__mode;
      };
      _proto5.isComposing = function isComposing() {
        return this.__key === gi();
      };
      _proto5.isSegmented = function isSegmented() {
        return 2 === this.getLatest().__mode;
      };
      _proto5.isDirectionless = function isDirectionless() {
        return !!(1 & this.getLatest().__detail);
      };
      _proto5.isUnmergeable = function isUnmergeable() {
        return !!(2 & this.getLatest().__detail);
      };
      _proto5.hasFormat = function hasFormat(t) {
        var e = A[t];
        return 0 !== (this.getFormat() & e);
      };
      _proto5.isSimpleText = function isSimpleText() {
        return "text" === this.__type && 0 === this.__mode;
      };
      _proto5.getTextContent = function getTextContent() {
        return this.getLatest().__text;
      };
      _proto5.getFormatFlags = function getFormatFlags(t, e) {
        return ai(this.getLatest().__format, t, e);
      };
      _proto5.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto5.isInline = function isInline() {
        return !0;
      };
      _proto5.createDOM = function createDOM(t, e) {
        var n = this.__format,
          r = Gn(0, n),
          o = Vn(0, n),
          i = null === r ? o : r,
          s = document.createElement(i);
        var l = s;
        (this.hasFormat("code") && s.setAttribute("spellcheck", "false"),
          null !== r && ((l = document.createElement(o)), s.appendChild(l)));
        Qn(l, this, 0, n, this.__text, t);
        var c = this.__style;
        return ("" !== c && Wn(s.style, c), s);
      };
      _proto5.updateDOM = function updateDOM(e, n, r) {
        var o = this.__text,
          i = e.__format,
          s = this.__format,
          l = Gn(0, i),
          c = Gn(0, s),
          a = Vn(0, i),
          u = Vn(0, s);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _e42 = n.firstChild;
          null == _e42 && t(48);
          var _i9 = document.createElement(u);
          return (Qn(_i9, this, 0, s, o, r), n.replaceChild(_i9, _e42), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && t(49)),
          Xn(o, f, this));
        var d = r.theme.text;
        void 0 !== d && i !== s && qn(0, i, s, f, d);
        var h = e.__style,
          g = this.__style;
        return (h !== g && Wn(n.style, g, h), !1);
      };
      tr.importDOM = function importDOM() {
        return {
          "#text": function text() {
            return { conversion: ir, priority: 0 };
          },
          b: function b() {
            return { conversion: nr, priority: 0 };
          },
          code: function code() {
            return { conversion: cr, priority: 0 };
          },
          em: function em() {
            return { conversion: cr, priority: 0 };
          },
          i: function i() {
            return { conversion: cr, priority: 0 };
          },
          mark: function mark() {
            return { conversion: cr, priority: 0 };
          },
          s: function s() {
            return { conversion: cr, priority: 0 };
          },
          span: function span() {
            return { conversion: er, priority: 0 };
          },
          strong: function strong() {
            return { conversion: cr, priority: 0 };
          },
          sub: function sub() {
            return { conversion: cr, priority: 0 };
          },
          sup: function sup() {
            return { conversion: cr, priority: 0 };
          },
          u: function u() {
            return { conversion: cr, priority: 0 };
          },
        };
      };
      tr.importJSON = function importJSON(t) {
        return ar().updateFromJSON(t);
      };
      _proto5.updateFromJSON = function updateFromJSON(t) {
        return _Dn2.prototype.updateFromJSON
          .call(this, t)
          .setTextContent(t.text)
          .setFormat(t.format)
          .setDetail(t.detail)
          .setMode(t.mode)
          .setStyle(t.style);
      };
      _proto5.exportDOM = function exportDOM(e) {
        var _Dn2$prototype$export = _Dn2.prototype.exportDOM.call(this, e),
          n = _Dn2$prototype$export.element;
        return (
          cs(n) || t(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = Zn(n, "b")),
          this.hasFormat("italic") && (n = Zn(n, "i")),
          this.hasFormat("strikethrough") && (n = Zn(n, "s")),
          this.hasFormat("underline") && (n = Zn(n, "u")),
          { element: n }
        );
      };
      _proto5.exportJSON = function exportJSON() {
        return babelHelpers["extends"](
          {
            detail: this.getDetail(),
            format: this.getFormat(),
            mode: this.getMode(),
            style: this.getStyle(),
            text: this.getTextContent(),
          },
          _Dn2.prototype.exportJSON.call(this),
        );
      };
      _proto5.selectionTransform = function selectionTransform(t, e) {};
      _proto5.setFormat = function setFormat(t) {
        var e = this.getWritable();
        return ((e.__format = "string" == typeof t ? A[t] : t), e);
      };
      _proto5.setDetail = function setDetail(t) {
        var e = this.getWritable();
        return ((e.__detail = "string" == typeof t ? D[t] : t), e);
      };
      _proto5.setStyle = function setStyle(t) {
        var e = this.getWritable();
        return ((e.__style = t), e);
      };
      _proto5.toggleFormat = function toggleFormat(t) {
        var e = ai(this.getFormat(), t, null);
        return this.setFormat(e);
      };
      _proto5.toggleDirectionless = function toggleDirectionless() {
        var t = this.getWritable();
        return ((t.__detail ^= 1), t);
      };
      _proto5.toggleUnmergeable = function toggleUnmergeable() {
        var t = this.getWritable();
        return ((t.__detail ^= 2), t);
      };
      _proto5.setMode = function setMode(t) {
        var e = I[t];
        if (this.__mode === e) return this;
        var n = this.getWritable();
        return ((n.__mode = e), n);
      };
      _proto5.setTextContent = function setTextContent(t) {
        if (this.__text === t) return this;
        var e = this.getWritable();
        return ((e.__text = t), e);
      };
      _proto5.select = function select(t, e) {
        no();
        var n = t,
          r = e;
        var o = Lr(),
          i = this.getTextContent(),
          s = this.__key;
        if ("string" == typeof i) {
          var _t51 = i.length;
          (void 0 === n && (n = _t51), void 0 === r && (r = _t51));
        } else ((n = 0), (r = 0));
        if (!Cr(o)) return Pr(s, n, s, r, "text", "text");
        {
          var _t52 = gi();
          ((_t52 !== o.anchor.key && _t52 !== o.focus.key) || hi(s),
            o.setTextNodeRange(this, n, this, r));
        }
        return o;
      };
      _proto5.selectStart = function selectStart() {
        return this.select(0, 0);
      };
      _proto5.selectEnd = function selectEnd() {
        var t = this.getTextContentSize();
        return this.select(t, t);
      };
      _proto5.spliceText = function spliceText(t, e, n, r) {
        var o = this.getWritable(),
          i = o.__text,
          s = n.length;
        var l = t;
        l < 0 && ((l = s + l), l < 0 && (l = 0));
        var c = Lr();
        if (r && Cr(c)) {
          var _e43 = t + s;
          c.setTextNodeRange(o, _e43, o, _e43);
        }
        var a = i.slice(0, l) + n + i.slice(l + e);
        return ((o.__text = a), o);
      };
      _proto5.canInsertTextBefore = function canInsertTextBefore() {
        return !0;
      };
      _proto5.canInsertTextAfter = function canInsertTextAfter() {
        return !0;
      };
      _proto5.splitText = function splitText() {
        no();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var r = e.__key,
          o = gi(),
          i = n.length;
        for (
          var _len3 = arguments.length, t = new Array(_len3), _key3 = 0;
          _key3 < _len3;
          _key3++
        ) {
          t[_key3] = arguments[_key3];
        }
        (t.sort(function (t, e) {
          return t - e;
        }),
          t.push(i));
        var s = [],
          l = t.length;
        for (var _e44 = 0, _r20 = 0; _e44 < i && _r20 <= l; _r20++) {
          var _o19 = t[_r20];
          _o19 > _e44 && (s.push(n.slice(_e44, _o19)), (_e44 = _o19));
        }
        var c = s.length;
        if (1 === c) return [e];
        var a = s[0],
          u = e.getParent();
        var f;
        var d = e.getFormat(),
          h = e.getStyle(),
          g = e.__detail;
        var _ = !1,
          p = null,
          y = null;
        var m = Lr();
        if (Cr(m)) {
          var _ref14 = m.isBackward()
              ? [m.focus, m.anchor]
              : [m.anchor, m.focus],
            _t53 = _ref14[0],
            _e45 = _ref14[1];
          ("text" === _t53.type && _t53.key === r && (p = _t53),
            "text" === _e45.type && _e45.key === r && (y = _e45));
        }
        e.isSegmented()
          ? ((f = ar(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = it(e, f)),
            (_ = !0))
          : (f = e.setTextContent(a));
        var x = [f];
        for (var _t54 = 1; _t54 < c; _t54++) {
          var _n31 = ar(s[_t54]);
          ((_n31.__format = d),
            (_n31.__style = h),
            (_n31.__detail = g),
            (_n31.__state = it(e, _n31)));
          var _i0 = _n31.__key;
          (o === r && hi(_i0), x.push(_n31));
        }
        var C = p ? p.offset : null,
          S = y ? y.offset : null;
        var N = 0;
        for (var _t55 of x) {
          if (!p && !y) break;
          var _e46 = N + _t55.getTextContentSize();
          if (
            (null !== p &&
              null !== C &&
              C <= _e46 &&
              C >= N &&
              (p.set(_t55.getKey(), C - N, "text"), C < _e46 && (p = null)),
            null !== y && null !== S && S <= _e46 && S >= N)
          ) {
            y.set(_t55.getKey(), S - N, "text");
            break;
          }
          N = _e46;
        }
        if (null !== u) {
          !(function (t) {
            var e = t.getPreviousSibling(),
              n = t.getNextSibling();
            null !== e && di(e);
            null !== n && di(n);
          })(this);
          var _t56 = u.getWritable(),
            _e47 = this.getIndexWithinParent();
          (_
            ? (_t56.splice(_e47, 0, x), this.remove())
            : _t56.splice(_e47, 1, x),
            Cr(m) && Br(m, u, _e47, c - 1));
        }
        return x;
      };
      _proto5.mergeWithSibling = function mergeWithSibling(e) {
        var n = e === this.getPreviousSibling();
        n || e === this.getNextSibling() || t(50);
        var r = this.__key,
          o = e.__key,
          i = this.__text,
          s = i.length;
        gi() === o && hi(r);
        var l = Lr();
        if (Cr(l)) {
          var _t57 = l.anchor,
            _i1 = l.focus;
          (null !== _t57 && _t57.key === o && Wr(_t57, n, r, e, s),
            null !== _i1 && _i1.key === o && Wr(_i1, n, r, e, s));
        }
        var c = e.__text,
          a = n ? c + i : i + c;
        this.setTextContent(a);
        var u = this.getWritable();
        return (e.remove(), u);
      };
      _proto5.isTextEntity = function isTextEntity() {
        return !1;
      };
      return tr;
    })(_Dn5);
    function er(t) {
      return { forChild: fr(t.style), node: null };
    }
    function nr(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: fr(e.style, n ? void 0 : "bold"), node: null };
    }
    var rr = new WeakMap();
    function or(t) {
      if (!cs(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function ir(e) {
      var n = e;
      null === e.parentElement && t(129);
      var r = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var r = [t];
          for (; null !== n && void 0 === (e = rr.get(n)) && !or(n); )
            (r.push(n), (n = n.parentNode));
          var o = void 0 === e ? n : e;
          for (var _t58 = 0; _t58 < r.length; _t58++) rr.set(r[_t58], o);
          return o;
        })(n)
      ) {
        var _t59 = r.split(/(\r?\n|\t)/),
          _e48 = [],
          _n32 = _t59.length;
        for (var _r21 = 0; _r21 < _n32; _r21++) {
          var _n33 = _t59[_r21];
          "\n" === _n33 || "\r\n" === _n33
            ? _e48.push(jn())
            : "\t" === _n33
              ? _e48.push(hr())
              : "" !== _n33 && _e48.push(ar(_n33));
        }
        return { node: _e48 };
      }
      if (((r = r.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === r))
        return { node: null };
      if (" " === r[0]) {
        var _t60 = n,
          _e49 = !0;
        for (; null !== _t60 && null !== (_t60 = sr(_t60, !1)); ) {
          var _n34 = _t60.textContent || "";
          if (_n34.length > 0) {
            (/[ \t\n]$/.test(_n34) && (r = r.slice(1)), (_e49 = !1));
            break;
          }
        }
        _e49 && (r = r.slice(1));
      }
      if (" " === r[r.length - 1]) {
        var _t61 = n,
          _e50 = !0;
        for (; null !== _t61 && null !== (_t61 = sr(_t61, !0)); ) {
          if (
            (_t61.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e50 = !1;
            break;
          }
        }
        _e50 && (r = r.slice(0, r.length - 1));
      }
      return "" === r ? { node: null } : { node: ar(r) };
    }
    function sr(t, e) {
      var n = t;
      for (;;) {
        var _t62 = void 0;
        for (; null === (_t62 = e ? n.nextSibling : n.previousSibling); ) {
          var _t63 = n.parentElement;
          if (null === _t63) return null;
          n = _t63;
        }
        if (((n = _t62), cs(n))) {
          var _t64 = n.style.display;
          if (
            ("" === _t64 && !ds(n)) ||
            ("" !== _t64 && !_t64.startsWith("inline"))
          )
            return null;
        }
        var _r22 = n;
        for (; null !== (_r22 = e ? n.firstChild : n.lastChild); ) n = _r22;
        if (si(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var lr = {
      code: "code",
      em: "italic",
      i: "italic",
      mark: "highlight",
      s: "strikethrough",
      strong: "bold",
      sub: "subscript",
      sup: "superscript",
      u: "underline",
    };
    function cr(t) {
      var e = lr[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: fr(t.style, e), node: null };
    }
    function ar(t) {
      if (t === void 0) {
        t = "";
      }
      return es(new _tr2(t));
    }
    function ur(t) {
      return t instanceof _tr2;
    }
    function fr(t, e) {
      var n = t.fontWeight,
        r = t.textDecoration.split(" "),
        o = "700" === n || "bold" === n,
        i = r.includes("line-through"),
        s = "italic" === t.fontStyle,
        l = r.includes("underline"),
        c = t.verticalAlign;
      return function (t) {
        return ur(t)
          ? (o && !t.hasFormat("bold") && t.toggleFormat("bold"),
            i &&
              !t.hasFormat("strikethrough") &&
              t.toggleFormat("strikethrough"),
            s && !t.hasFormat("italic") && t.toggleFormat("italic"),
            l && !t.hasFormat("underline") && t.toggleFormat("underline"),
            "sub" !== c ||
              t.hasFormat("subscript") ||
              t.toggleFormat("subscript"),
            "super" !== c ||
              t.hasFormat("superscript") ||
              t.toggleFormat("superscript"),
            e && !t.hasFormat(e) && t.toggleFormat(e),
            t)
          : t;
      };
    }
    var _dr = (function (_tr) {
      function dr(t) {
        var _this2;
        ((_this2 = _tr.call(this, "\t", t) || this), (_this2.__detail = 2));
        return _this2;
      }
      babelHelpers.inheritsLoose(dr, _tr);
      dr.getType = function getType() {
        return "tab";
      };
      dr.clone = function clone(t) {
        return new dr(t.__key);
      };
      dr.importDOM = function importDOM() {
        return null;
      };
      var _proto6 = dr.prototype;
      _proto6.createDOM = function createDOM(t) {
        var e = _tr.prototype.createDOM.call(this, t),
          n = Ki(t.theme, "tab");
        if (void 0 !== n) {
          var _e$classList;
          (_e$classList = e.classList).add.apply(_e$classList, n);
        }
        return e;
      };
      dr.importJSON = function importJSON(t) {
        return hr().updateFromJSON(t);
      };
      _proto6.setTextContent = function setTextContent(t) {
        return (
          "\t" !== t && "" !== t && e(126),
          _tr.prototype.setTextContent.call(this, "\t")
        );
      };
      _proto6.spliceText = function spliceText(e, n, r, o) {
        return (
          ("" === r && 0 === n) || ("\t" === r && 1 === n) || t(286),
          this
        );
      };
      _proto6.setDetail = function setDetail(e) {
        return (2 !== e && t(127), this);
      };
      _proto6.setMode = function setMode(e) {
        return ("normal" !== e && t(128), this);
      };
      _proto6.canInsertTextBefore = function canInsertTextBefore() {
        return !1;
      };
      _proto6.canInsertTextAfter = function canInsertTextAfter() {
        return !1;
      };
      return dr;
    })(_tr2);
    function hr() {
      return es(new _dr());
    }
    function gr(t) {
      return t instanceof _dr;
    }
    var _r72 = (function () {
      function _r(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto7 = _r.prototype;
      _proto7.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto7.isBefore = function isBefore(t) {
        if (this.key === t.key) return this.offset < t.offset;
        return nl(pl(ll(this, "next")), pl(ll(t, "next"))) < 0;
      };
      _proto7.getNode = function getNode() {
        var e = _i(this.key);
        return (null === e && t(20), e);
      };
      _proto7.set = function set(t, e, n, r) {
        var o = this._selection,
          i = this.key;
        (r && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          eo() ||
            (gi() === i && hi(t),
            null !== o && (o.setCachedNodes(null), (o.dirty = !0))));
      };
      return _r;
    })();
    function pr(t, e, n) {
      return new _r72(t, e, n);
    }
    function yr(t, e) {
      var n = e.__key,
        r = t.offset,
        o = "element";
      if (ur(e)) {
        o = "text";
        var _t65 = e.getTextContentSize();
        r > _t65 && (r = _t65);
      } else if (!vo(e)) {
        var _t66 = e.getNextSibling();
        if (ur(_t66)) ((n = _t66.__key), (r = 0), (o = "text"));
        else {
          var _t67 = e.getParent();
          _t67 && ((n = _t67.__key), (r = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, r, o);
    }
    function mr(t, e) {
      if (vo(e)) {
        var _n35 = e.getLastDescendant();
        vo(_n35) || ur(_n35) ? yr(t, _n35) : yr(t, e);
      } else yr(t, e);
    }
    var _xr = (function () {
      function xr(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto8 = xr.prototype;
      _proto8.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto8.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto8.is = function is(t) {
        if (!Nr(t)) return !1;
        var e = this._nodes,
          n = t._nodes;
        return (
          e.size === n.size &&
          Array.from(e).every(function (t) {
            return n.has(t);
          })
        );
      };
      _proto8.isCollapsed = function isCollapsed() {
        return !1;
      };
      _proto8.isBackward = function isBackward() {
        return !1;
      };
      _proto8.getStartEndPoints = function getStartEndPoints() {
        return null;
      };
      _proto8.add = function add(t) {
        ((this.dirty = !0), this._nodes.add(t), (this._cachedNodes = null));
      };
      _proto8["delete"] = function _delete(t) {
        ((this.dirty = !0),
          this._nodes["delete"](t),
          (this._cachedNodes = null));
      };
      _proto8.clear = function clear() {
        ((this.dirty = !0), this._nodes.clear(), (this._cachedNodes = null));
      };
      _proto8.has = function has(t) {
        return this._nodes.has(t);
      };
      _proto8.clone = function clone() {
        return new xr(new Set(this._nodes));
      };
      _proto8.extract = function extract() {
        return this.getNodes();
      };
      _proto8.insertRawText = function insertRawText(t) {};
      _proto8.insertText = function insertText() {};
      _proto8.insertNodes = function insertNodes(t) {
        var e = this.getNodes(),
          n = e.length,
          r = e[n - 1];
        var o;
        if (ur(r)) o = r.select();
        else {
          var _t68 = r.getIndexWithinParent() + 1;
          o = r.getParentOrThrow().select(_t68, _t68);
        }
        o.insertNodes(t);
        for (var _t69 = 0; _t69 < n; _t69++) e[_t69].remove();
      };
      _proto8.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = this._nodes,
          n = [];
        for (var _t70 of e) {
          var _e51 = _i(_t70);
          null !== _e51 && n.push(_e51);
        }
        return (eo() || (this._cachedNodes = n), n);
      };
      _proto8.getTextContent = function getTextContent() {
        var t = this.getNodes();
        var e = "";
        for (var _n36 = 0; _n36 < t.length; _n36++)
          e += t[_n36].getTextContent();
        return e;
      };
      _proto8.deleteNodes = function deleteNodes() {
        var t = this.getNodes();
        if ((Lr() || Kr()) === this && t[0]) {
          var _e52 = Us(t[0], "next");
          al(tl(_e52, _e52));
        }
        for (var _e53 of t) _e53.remove();
      };
      return xr;
    })();
    function Cr(t) {
      return t instanceof _Sr;
    }
    var _Sr = (function () {
      function Sr(t, e, n, r) {
        ((this.anchor = t),
          (this.focus = e),
          (t._selection = this),
          (e._selection = this),
          (this._cachedNodes = null),
          (this.format = n),
          (this.style = r),
          (this.dirty = !1));
      }
      var _proto9 = Sr.prototype;
      _proto9.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto9.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto9.is = function is(t) {
        return (
          !!Cr(t) &&
          this.anchor.is(t.anchor) &&
          this.focus.is(t.focus) &&
          this.format === t.format &&
          this.style === t.style
        );
      };
      _proto9.isCollapsed = function isCollapsed() {
        return this.anchor.is(this.focus);
      };
      _proto9.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = (function (t) {
          var e = [],
            _t$getTextSlices = t.getTextSlices(),
            n = _t$getTextSlices[0],
            r = _t$getTextSlices[1];
          n && e.push(n.caret.origin);
          var o = new Set(),
            i = new Set();
          for (var _n37 of t)
            if (Bs(_n37)) {
              var _t71 = _n37.origin;
              0 === e.length ? o.add(_t71) : (i.add(_t71), e.push(_t71));
            } else {
              var _t72 = _n37.origin;
              (vo(_t72) && i.has(_t72)) || e.push(_t72);
            }
          r && e.push(r.caret.origin);
          if (
            Ks(t.focus) &&
            vo(t.focus.origin) &&
            null === t.focus.getNodeAtCaret()
          )
            for (
              var _n38 = Hs(t.focus.origin, "previous");
              Bs(_n38) &&
              o.has(_n38.origin) &&
              !_n38.origin.isEmpty() &&
              _n38.origin.is(e[e.length - 1]);
              _n38 = Vs(_n38)
            )
              (o["delete"](_n38.origin), e.pop());
          for (; e.length > 1; ) {
            var _t73 = e[e.length - 1];
            if (!vo(_t73) || i.has(_t73) || _t73.isEmpty() || o.has(_t73))
              break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n39 = pl(t.anchor),
              _r23 = pl(t.anchor.getFlipped()),
              _o20 = function _o20(t) {
                return Ls(t) ? t.origin : t.getNodeAtCaret();
              },
              _i10 =
                _o20(_n39) ||
                _o20(_r23) ||
                (t.anchor.getNodeAtCaret() ? _n39.origin : _r23.origin);
            e.push(_i10);
          }
          return e;
        })(xl(fl(this), "next"));
        return (eo() || (this._cachedNodes = e), e);
      };
      _proto9.setTextNodeRange = function setTextNodeRange(t, e, n, r) {
        (this.anchor.set(t.__key, e, "text"),
          this.focus.set(n.__key, r, "text"));
      };
      _proto9.getTextContent = function getTextContent() {
        var t = this.getNodes();
        if (0 === t.length) return "";
        var e = t[0],
          n = t[t.length - 1],
          r = this.anchor,
          o = this.focus,
          i = r.isBefore(o),
          _vr = vr(this),
          s = _vr[0],
          l = _vr[1];
        var c = "",
          a = !0;
        for (var _u6 = 0; _u6 < t.length; _u6++) {
          var _f4 = t[_u6];
          if (vo(_f4) && !_f4.isInline())
            (a || (c += "\n"), (a = !_f4.isEmpty()));
          else if (((a = !1), ur(_f4))) {
            var _t74 = _f4.getTextContent();
            (_f4 === e
              ? _f4 === n
                ? ("element" === r.type &&
                    "element" === o.type &&
                    o.offset !== r.offset) ||
                  (_t74 = s < l ? _t74.slice(s, l) : _t74.slice(l, s))
                : (_t74 = i ? _t74.slice(s) : _t74.slice(l))
              : _f4 === n && (_t74 = i ? _t74.slice(0, l) : _t74.slice(0, s)),
              (c += _t74));
          } else
            (!ko(_f4) && !Jn(_f4)) ||
              (_f4 === n && this.isCollapsed()) ||
              (c += _f4.getTextContent());
        }
        return c;
      };
      _proto9.applyDOMRange = function applyDOMRange(t) {
        var e = io(),
          n = e.getEditorState()._selection,
          r = Dr(
            t.startContainer,
            t.startOffset,
            t.endContainer,
            t.endOffset,
            e,
            n,
          );
        if (null === r) return;
        var o = r[0],
          i = r[1];
        (this.anchor.set(o.key, o.offset, o.type, !0),
          this.focus.set(i.key, i.offset, i.type, !0),
          at(this));
      };
      _proto9.clone = function clone() {
        var t = this.anchor,
          e = this.focus;
        return new Sr(
          pr(t.key, t.offset, t.type),
          pr(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto9.toggleFormat = function toggleFormat(t) {
        ((this.format = ai(this.format, t, null)), (this.dirty = !0));
      };
      _proto9.setFormat = function setFormat(t) {
        ((this.format = t), (this.dirty = !0));
      };
      _proto9.setStyle = function setStyle(t) {
        ((this.style = t), (this.dirty = !0));
      };
      _proto9.hasFormat = function hasFormat(t) {
        var e = A[t];
        return 0 !== (this.format & e);
      };
      _proto9.insertRawText = function insertRawText(t) {
        var e = t.split(/(\r?\n|\t)/),
          n = [],
          r = e.length;
        for (var _t75 = 0; _t75 < r; _t75++) {
          var _r24 = e[_t75];
          "\n" === _r24 || "\r\n" === _r24
            ? n.push(jn())
            : "\t" === _r24
              ? n.push(hr())
              : n.push(ar(_r24));
        }
        this.insertNodes(n);
      };
      _proto9.insertText = function insertText(e) {
        var n = this.anchor,
          r = this.focus,
          o = this.format,
          i = this.style;
        var s = n,
          l = r;
        (!this.isCollapsed() && r.isBefore(n) && ((s = r), (l = n)),
          "element" === s.type &&
            (function (t, e, n, r) {
              var o = t.getNode(),
                i = o.getChildAtIndex(t.offset),
                s = ar();
              if ((s.setFormat(n), s.setStyle(r), Ko(i))) i.splice(0, 0, [s]);
              else {
                var _t76 = bo(o) ? Lo().append(s) : s;
                null === i ? o.append(_t76) : i.insertBefore(_t76);
              }
              (t.is(e) && e.set(s.__key, 0, "text"), t.set(s.__key, 0, "text"));
            })(s, l, o, i),
          "element" === l.type && cl(l, pl(ll(l, "next"))));
        var c = s.offset;
        var a = l.offset;
        var u = this.getNodes(),
          f = u.length;
        var d = u[0];
        ur(d) || t(26);
        var h = d.getTextContent().length,
          g = d.getParentOrThrow();
        var _ = u[f - 1];
        if (
          (1 === f &&
            "element" === l.type &&
            ((a = h), l.set(s.key, a, "text")),
          this.isCollapsed() &&
            c === h &&
            (ii(d) ||
              !d.canInsertTextAfter() ||
              (!g.canInsertTextAfter() && null === d.getNextSibling())))
        ) {
          var _t77 = d.getNextSibling();
          if (
            ((ur(_t77) && _t77.canInsertTextBefore() && !ii(_t77)) ||
              ((_t77 = ar()),
              _t77.setFormat(o),
              _t77.setStyle(i),
              g.canInsertTextAfter()
                ? d.insertAfter(_t77)
                : g.insertAfter(_t77)),
            _t77.select(0, 0),
            (d = _t77),
            "" !== e)
          )
            return void this.insertText(e);
        } else if (
          this.isCollapsed() &&
          0 === c &&
          (ii(d) ||
            !d.canInsertTextBefore() ||
            (!g.canInsertTextBefore() && null === d.getPreviousSibling()))
        ) {
          var _t78 = d.getPreviousSibling();
          if (
            ((ur(_t78) && !ii(_t78)) ||
              ((_t78 = ar()),
              _t78.setFormat(o),
              g.canInsertTextBefore()
                ? d.insertBefore(_t78)
                : g.insertBefore(_t78)),
            _t78.select(),
            (d = _t78),
            "" !== e)
          )
            return void this.insertText(e);
        } else if (d.isSegmented() && c !== h) {
          var _t79 = ar(d.getTextContent());
          (_t79.setFormat(o), d.replace(_t79), (d = _t79));
        } else if (!this.isCollapsed() && "" !== e) {
          var _t80 = _.getParent();
          if (
            !g.canInsertTextBefore() ||
            !g.canInsertTextAfter() ||
            (vo(_t80) &&
              (!_t80.canInsertTextBefore() || !_t80.canInsertTextAfter()))
          )
            return (
              this.insertText(""),
              Ar(this.anchor, this.focus),
              void this.insertText(e)
            );
        }
        if (1 === f) {
          if (oi(d)) {
            var _t81 = ar(e);
            return (_t81.select(), void d.replace(_t81));
          }
          var _t82 = d.getFormat(),
            _n40 = d.getStyle();
          if (c !== a || (_t82 === o && _n40 === i)) {
            if (gr(d)) {
              var _t83 = ar(e);
              return (
                _t83.setFormat(o),
                _t83.setStyle(i),
                _t83.select(),
                void d.replace(_t83)
              );
            }
          } else {
            if ("" !== d.getTextContent()) {
              var _t84 = ar(e);
              if ((_t84.setFormat(o), _t84.setStyle(i), _t84.select(), 0 === c))
                d.insertBefore(_t84, !1);
              else {
                var _d$splitText = d.splitText(c),
                  _e54 = _d$splitText[0];
                _e54.insertAfter(_t84, !1);
              }
              return void (
                _t84.isComposing() &&
                "text" === this.anchor.type &&
                (this.anchor.offset -= e.length)
              );
            }
            (d.setFormat(o), d.setStyle(i));
          }
          var _r25 = a - c;
          ((d = d.spliceText(c, _r25, e, !0)),
            "" === d.getTextContent()
              ? d.remove()
              : "text" === this.anchor.type &&
                ((this.format = _t82),
                (this.style = _n40),
                d.isComposing() && (this.anchor.offset -= e.length)));
        } else {
          var _t85 = new Set([].concat(d.getParentKeys(), _.getParentKeys())),
            _n41 = vo(d) ? d : d.getParentOrThrow();
          var _r26 = vo(_) ? _ : _.getParentOrThrow(),
            _o21 = _;
          if (!_n41.is(_r26) && _r26.isInline())
            do {
              ((_o21 = _r26), (_r26 = _r26.getParentOrThrow()));
            } while (_r26.isInline());
          if (
            ("text" === l.type && (0 !== a || "" === _.getTextContent())) ||
            ("element" === l.type && _.getIndexWithinParent() < a)
          ) {
            if (ur(_) && !oi(_) && a !== _.getTextContentSize()) {
              if (_.isSegmented()) {
                var _t86 = ar(_.getTextContent());
                (_.replace(_t86), (_ = _t86));
              }
              (bo(l.getNode()) ||
                "text" !== l.type ||
                (_ = _.spliceText(0, a, "")),
                _t85.add(_.__key));
            } else {
              var _t87 = _.getParentOrThrow();
              _t87.canBeEmpty() || 1 !== _t87.getChildrenSize()
                ? _.remove()
                : _t87.remove();
            }
          } else _t85.add(_.__key);
          var _i11 = _r26.getChildren(),
            _s7 = new Set(u),
            _g4 = _n41.is(_r26),
            _p2 = _n41.isInline() && null === d.getNextSibling() ? _n41 : d;
          for (var _t88 = _i11.length - 1; _t88 >= 0; _t88--) {
            var _e55 = _i11[_t88];
            if (_e55.is(d) || (vo(_e55) && _e55.isParentOf(d))) break;
            _e55.isAttached() &&
              (!_s7.has(_e55) || _e55.is(_o21)
                ? _g4 || _p2.insertAfter(_e55, !1)
                : _e55.remove());
          }
          if (!_g4) {
            var _e56 = _r26,
              _n42 = null;
            for (; null !== _e56; ) {
              var _r27 = _e56.getChildren(),
                _o22 = _r27.length;
              ((0 === _o22 || _r27[_o22 - 1].is(_n42)) &&
                (_t85["delete"](_e56.__key), (_n42 = _e56)),
                (_e56 = _e56.getParent()));
            }
          }
          if (oi(d)) {
            if (c === h) d.select();
            else {
              var _t89 = ar(e);
              (_t89.select(), d.replace(_t89));
            }
          } else
            ((d = d.spliceText(c, h - c, e, !0)),
              "" === d.getTextContent()
                ? d.remove()
                : "text" === this.anchor.type &&
                  ((this.format = d.getFormat()),
                  (this.style = d.getStyle()),
                  d.isComposing() && (this.anchor.offset -= e.length)));
          for (var _e57 = 1; _e57 < f; _e57++) {
            var _n43 = u[_e57],
              _r28 = _n43.__key;
            _t85.has(_r28) || _n43.remove();
          }
        }
      };
      _proto9.removeText = function removeText() {
        var t = Lr() === this;
        (ul(this, _l(fl(this))), t && Lr() !== this && Ti(this));
      };
      _proto9.formatText = function formatText(t, e) {
        var _d$splitText2, _p$splitText;
        if (e === void 0) {
          e = null;
        }
        if (this.isCollapsed()) return (this.toggleFormat(t), void hi(null));
        var n = this.getNodes(),
          r = [];
        for (var _t90 of n) ur(_t90) && r.push(_t90);
        var o = function o(e) {
            n.forEach(function (n) {
              if (vo(n)) {
                var _r29 = n.getFormatFlags(t, e);
                n.setTextFormat(_r29);
              }
            });
          },
          i = r.length;
        if (0 === i) return (this.toggleFormat(t), hi(null), void o(e));
        var s = this.anchor,
          l = this.focus,
          c = this.isBackward(),
          a = c ? l : s,
          u = c ? s : l;
        var f = 0,
          d = r[0],
          h = "element" === a.type ? 0 : a.offset;
        if (
          ("text" === a.type &&
            h === d.getTextContentSize() &&
            ((f = 1), (d = r[1]), (h = 0)),
          null == d)
        )
          return;
        var g = d.getFormatFlags(t, e);
        o(g);
        var _ = i - 1;
        var p = r[_];
        var y = "text" === u.type ? u.offset : p.getTextContentSize();
        if (d.is(p)) {
          if (h === y) return;
          if (ii(d) || (0 === h && y === d.getTextContentSize()))
            d.setFormat(g);
          else {
            var _t91 = d.splitText(h, y),
              _e58 = 0 === h ? _t91[0] : _t91[1];
            (_e58.setFormat(g),
              "text" === a.type && a.set(_e58.__key, 0, "text"),
              "text" === u.type && u.set(_e58.__key, y - h, "text"));
          }
          return void (this.format = g);
        }
        (0 === h ||
          ii(d) ||
          ((_d$splitText2 = d.splitText(h)), (d = _d$splitText2[1]), (h = 0)),
          d.setFormat(g));
        var m = p.getFormatFlags(t, g);
        y > 0 &&
          (y === p.getTextContentSize() ||
            ii(p) ||
            ((_p$splitText = p.splitText(y)),
            (p = _p$splitText[0]),
            _p$splitText),
          p.setFormat(m));
        for (var _e59 = f + 1; _e59 < _; _e59++) {
          var _n44 = r[_e59],
            _o23 = _n44.getFormatFlags(t, m);
          _n44.setFormat(_o23);
        }
        ("text" === a.type && a.set(d.__key, h, "text"),
          "text" === u.type && u.set(p.__key, y, "text"),
          (this.format = g | m));
      };
      _proto9.insertNodes = function insertNodes(e) {
        if (0 === e.length) return;
        if (
          (this.isCollapsed() || this.removeText(), "root" === this.anchor.key)
        ) {
          this.insertParagraph();
          var _n45 = Lr();
          return (Cr(_n45) || t(134), _n45.insertNodes(e));
        }
        var n = (this.isBackward() ? this.focus : this.anchor).getNode(),
          r = ks(n, _s),
          o = e[e.length - 1];
        if (vo(r) && "__language" in r) {
          if ("__language" in e[0]) this.insertText(e[0].getTextContent());
          else {
            var _t92 = Jr(this);
            (r.splice(_t92, 0, e), o.selectEnd());
          }
          return;
        }
        if (
          !e.some(function (t) {
            return (vo(t) || ko(t)) && !t.isInline();
          })
        ) {
          vo(r) || t(211, n.constructor.name, n.getType());
          var _i12 = Jr(this);
          return (r.splice(_i12, 0, e), void o.selectEnd());
        }
        var i = (function (t) {
            var e = Lo();
            var n = null;
            for (var _r30 = 0; _r30 < t.length; _r30++) {
              var _o24 = t[_r30],
                _i13 = Jn(_o24);
              if (
                _i13 ||
                (ko(_o24) && _o24.isInline()) ||
                (vo(_o24) && _o24.isInline()) ||
                ur(_o24) ||
                _o24.isParentRequired()
              ) {
                if (
                  null === n &&
                  ((n = _o24.createParentElementNode()), e.append(n), _i13)
                )
                  continue;
                null !== n && n.append(_o24);
              } else (e.append(_o24), (n = null));
            }
            return e;
          })(e),
          s = i.getLastDescendant(),
          l = i.getChildren(),
          c = !vo(r) || !r.isEmpty() ? this.insertParagraph() : null,
          a = l[l.length - 1];
        var u = l[0];
        var f;
        (vo((f = u)) &&
          _s(f) &&
          !f.isEmpty() &&
          vo(r) &&
          (!r.isEmpty() || r.canMergeWhenEmpty()) &&
          (vo(r) || t(211, n.constructor.name, n.getType()),
          r.append.apply(r, u.getChildren()),
          (u = l[1])),
          u &&
            (null === r && t(212, n.constructor.name, n.getType()),
            (function (e, n) {
              var r = n.getParentOrThrow().getLastChild();
              var o = n;
              var i = [n];
              for (; o !== r; )
                (o.getNextSibling() || t(140),
                  (o = o.getNextSibling()),
                  i.push(o));
              var s = e;
              for (var _t93 of i) s = s.insertAfter(_t93);
            })(r, u)));
        var d = ks(s, _s);
        (c &&
          vo(d) &&
          (c.canMergeWhenEmpty() || _s(a)) &&
          (d.append.apply(d, c.getChildren()), c.remove()),
          vo(r) && r.isEmpty() && r.remove(),
          s.selectEnd());
        var h = vo(r) ? r.getLastChild() : null;
        Jn(h) && d !== r && h.remove();
      };
      _proto9.insertParagraph = function insertParagraph() {
        if ("root" === this.anchor.key) {
          var _t94 = Lo();
          return (
            Si().splice(this.anchor.offset, 0, [_t94]),
            _t94.select(),
            _t94
          );
        }
        var e = Jr(this),
          n = ks(this.anchor.getNode(), _s);
        vo(n) || t(213);
        var r = n.getChildAtIndex(e),
          o = r ? [r].concat(r.getNextSiblings()) : [],
          i = n.insertNewAfter(this, !1);
        return i ? (i.append.apply(i, o), i.selectStart(), i) : null;
      };
      _proto9.insertLineBreak = function insertLineBreak(t) {
        var e = jn();
        if ((this.insertNodes([e]), t)) {
          var _t95 = e.getParentOrThrow(),
            _n46 = e.getIndexWithinParent();
          _t95.select(_n46, _n46);
        }
      };
      _proto9.extract = function extract() {
        var _n$splitText;
        var t = [].concat(this.getNodes()),
          e = t.length;
        var n = t[0],
          r = t[e - 1];
        var _vr2 = vr(this),
          o = _vr2[0],
          i = _vr2[1],
          s = this.isBackward(),
          _ref15 = s ? [this.focus, this.anchor] : [this.anchor, this.focus],
          l = _ref15[0],
          c = _ref15[1],
          _ref16 = s ? [i, o] : [o, i],
          a = _ref16[0],
          u = _ref16[1];
        if (0 === e) return [];
        if (1 === e) {
          if (ur(n) && !this.isCollapsed()) {
            var _t96 = n.splitText(a, u),
              _e60 = 0 === a ? _t96[0] : _t96[1];
            return _e60
              ? (l.set(_e60.getKey(), 0, "text"),
                c.set(_e60.getKey(), _e60.getTextContentSize(), "text"),
                [_e60])
              : [];
          }
          return [n];
        }
        if (
          (ur(n) &&
            (a === n.getTextContentSize()
              ? t.shift()
              : 0 !== a &&
                ((_n$splitText = n.splitText(a)),
                (n = _n$splitText[1]),
                (t[0] = n),
                l.set(n.getKey(), 0, "text"))),
          ur(r))
        ) {
          var _r$splitText;
          var _e61 = r.getTextContent().length;
          0 === u
            ? t.pop()
            : u !== _e61 &&
              ((_r$splitText = r.splitText(u)),
              (r = _r$splitText[0]),
              (t[t.length - 1] = r),
              c.set(r.getKey(), r.getTextContentSize(), "text"));
        }
        return t;
      };
      _proto9.modify = function modify(t, e, n) {
        if (Gr(this, t, e, n)) return;
        var r = "move" === t,
          o = io(),
          i = ss(Xi(o));
        if (!i) return;
        var s = o._blockCursorElement,
          l = o._rootElement,
          c = this.focus.getNode();
        if (
          (null === l ||
            null === s ||
            !vo(c) ||
            c.isInline() ||
            c.canBeEmpty() ||
            is(s, o, l),
          this.dirty)
        ) {
          var _t97 = Yi(o, this.anchor.key),
            _e62 = Yi(o, this.focus.key);
          ("text" === this.anchor.type && (_t97 = ci(_t97)),
            "text" === this.focus.type && (_e62 = ci(_e62)),
            _t97 &&
              _e62 &&
              Ur(i, _t97, this.anchor.offset, _e62, this.focus.offset));
        }
        if (
          ((function (t, e, n, r) {
            t.modify(e, n, r);
          })(i, t, e ? "backward" : "forward", n),
          i.rangeCount > 0)
        ) {
          var _t98 = i.getRangeAt(0),
            _n47 = this.anchor.getNode(),
            _o25 = bo(_n47) ? _n47 : Qi(_n47);
          if ((this.applyDOMRange(_t98), (this.dirty = !0), !r)) {
            var _n48 = this.getNodes(),
              _r31 = [];
            var _s8 = !1;
            for (var _t99 = 0; _t99 < _n48.length; _t99++) {
              var _e63 = _n48[_t99];
              Vi(_e63, _o25) ? _r31.push(_e63) : (_s8 = !0);
            }
            if (_s8 && _r31.length > 0)
              if (e) {
                var _t100 = _r31[0];
                vo(_t100)
                  ? _t100.selectStart()
                  : _t100.getParentOrThrow().selectStart();
              } else {
                var _t101 = _r31[_r31.length - 1];
                vo(_t101)
                  ? _t101.selectEnd()
                  : _t101.getParentOrThrow().selectEnd();
              }
            (i.anchorNode === _t98.startContainer &&
              i.anchorOffset === _t98.startOffset) ||
              (function (t) {
                var e = t.focus,
                  n = t.anchor,
                  r = n.key,
                  o = n.offset,
                  i = n.type;
                (n.set(e.key, e.offset, e.type, !0), e.set(r, o, i, !0));
              })(this);
          }
        }
        "lineboundary" === n && Gr(this, t, e, n, "decorators");
      };
      _proto9.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            vo(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t102 = e.getParent(),
            _n49 =
              e.getNextSibling() ||
              (null === _t102 ? null : _t102.getNextSibling());
          if (vo(_n49) && _n49.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto9.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e64 = this.anchor;
          var _n50 = _e64.getNode();
          if (this.forwardDeletion(_e64, _n50, t)) return;
          var _r32 = Qs(ll(_e64, t ? "previous" : "next"));
          if (
            _r32.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            var _t103 = { type: "initial" };
            for (var _e65 of _r32.iterNodeCarets("shadowRoot"))
              if (Bs(_e65)) {
                if (_e65.origin.isInline());
                else {
                  if (_e65.origin.isShadowRoot()) {
                    if ("merge-block" === _t103.type) break;
                    if (
                      vo(_r32.anchor.origin) &&
                      _r32.anchor.origin.isEmpty()
                    ) {
                      var _t104 = pl(_e65);
                      (ul(this, tl(_t104, _t104)), _r32.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t103.type &&
                    "merge-block" !== _t103.type) ||
                    (_t103 = {
                      block: _t103.block,
                      caret: _e65,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t103.type) break;
                if (Ks(_e65)) {
                  if (vo(_e65.origin)) {
                    if (_e65.origin.isInline()) {
                      if (!_e65.origin.isParentOf(_r32.anchor.origin)) break;
                    } else
                      _t103 = { block: _e65.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (ko(_e65.origin)) {
                    if (_e65.origin.isIsolated());
                    else if (
                      "merge-next-block" === _t103.type &&
                      (_e65.origin.isKeyboardSelectable() ||
                        !_e65.origin.isInline()) &&
                      vo(_r32.anchor.origin) &&
                      _r32.anchor.origin.isEmpty()
                    ) {
                      _r32.anchor.origin.remove();
                      var _t105 = Fr();
                      (_t105.add(_e65.origin.getKey()), Ti(_t105));
                    } else _e65.origin.remove();
                    return;
                  }
                  break;
                }
              }
            if ("merge-block" === _t103.type) {
              var _t106 = _t103,
                _e66 = _t106.caret,
                _n51 = _t106.block;
              return (
                ul(
                  this,
                  tl(
                    !_e66.origin.isEmpty() && _n51.isEmpty()
                      ? dl(Us(_n51, _e66.direction))
                      : _r32.anchor,
                    _e66,
                  ),
                ),
                this.removeText()
              );
            }
          }
          var _o26 = this.focus;
          if ((this.modify("extend", t, "character"), this.isCollapsed())) {
            if (t && 0 === _e64.offset && Or(this, _e64.getNode())) return;
          } else {
            var _r33 = "text" === _o26.type ? _o26.getNode() : null;
            if (
              ((_n50 = "text" === _e64.type ? _e64.getNode() : null),
              null !== _r33 && _r33.isSegmented())
            ) {
              var _e67 = _o26.offset,
                _i14 = _r33.getTextContentSize();
              if (_r33.is(_n50) || (t && _e67 !== _i14) || (!t && 0 !== _e67))
                return void kr(_r33, t, _e67);
            } else if (null !== _n50 && _n50.isSegmented()) {
              var _o27 = _e64.offset,
                _i15 = _n50.getTextContentSize();
              if (_n50.is(_r33) || (t && 0 !== _o27) || (!t && _o27 !== _i15))
                return void kr(_n50, t, _o27);
            }
            !(function (t, e) {
              var n = t.anchor,
                r = t.focus,
                o = n.getNode(),
                i = r.getNode();
              if (o === i && "text" === n.type && "text" === r.type) {
                var _t107 = n.offset,
                  _i16 = r.offset,
                  _s9 = _t107 < _i16,
                  _l7 = _s9 ? _t107 : _i16,
                  _c5 = _s9 ? _i16 : _t107,
                  _a6 = _c5 - 1;
                if (_l7 !== _a6) {
                  (function (t) {
                    return !(Oi(t) || Er(t));
                  })(o.getTextContent().slice(_l7, _c5)) &&
                    (e ? r.set(r.key, _a6, r.type) : n.set(n.key, _a6, n.type));
                }
              }
            })(this, t);
          }
        }
        if (
          (this.removeText(),
          t &&
            !e &&
            this.isCollapsed() &&
            "element" === this.anchor.type &&
            0 === this.anchor.offset)
        ) {
          var _t108 = this.anchor.getNode();
          _t108.isEmpty() &&
            bo(_t108.getParent()) &&
            null === _t108.getPreviousSibling() &&
            Or(this, _t108);
        }
      };
      _proto9.deleteLine = function deleteLine(t) {
        (this.isCollapsed() && this.modify("extend", t, "lineboundary"),
          this.isCollapsed() ? this.deleteCharacter(t) : this.removeText());
      };
      _proto9.deleteWord = function deleteWord(t) {
        if (this.isCollapsed()) {
          var _e68 = this.anchor,
            _n52 = _e68.getNode();
          if (this.forwardDeletion(_e68, _n52, t)) return;
          this.modify("extend", t, "word");
        }
        this.isCollapsed() ? this.deleteCharacter(t) : this.removeText();
      };
      _proto9.isBackward = function isBackward() {
        return this.focus.isBefore(this.anchor);
      };
      _proto9.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return Sr;
    })();
    function Nr(t) {
      return t instanceof _xr;
    }
    function Tr(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function vr(t) {
      var e = t.getStartEndPoints();
      if (null === e) return [0, 0];
      var n = e[0],
        r = e[1];
      return "element" === n.type &&
        "element" === r.type &&
        n.key === r.key &&
        n.offset === r.offset
        ? [0, 0]
        : [Tr(n), Tr(r)];
    }
    function Or(t, e) {
      for (var _n53 = e; _n53; _n53 = _n53.getParent()) {
        if (vo(_n53)) {
          if (_n53.collapseAtStart(t)) return !0;
          if (Zi(_n53)) break;
        }
        if (_n53.getPreviousSibling()) break;
      }
      return !1;
    }
    var Er = (function () {
      try {
        var _t109 = new RegExp("\\p{Emoji}", "u"),
          _e69 = _t109.test.bind(_t109);
        if (_e69("\u2764\ufe0f") && _e69("#\ufe0f\u20e3") && _e69("\u{1f44d}"))
          return _e69;
      } catch (t) {}
      return function () {
        return !1;
      };
    })();
    function kr(t, e, n) {
      var r = t,
        o = r.getTextContent().split(/(?=\s)/g),
        i = o.length;
      var s = 0,
        l = 0;
      for (var _t110 = 0; _t110 < i; _t110++) {
        var _r34 = _t110 === i - 1;
        if (
          ((l = s), (s += o[_t110].length), (e && s === n) || s > n || _r34)
        ) {
          (o.splice(_t110, 1), _r34 && (l = void 0));
          break;
        }
      }
      var c = o.join("").trim();
      "" === c ? r.remove() : (r.setTextContent(c), r.select(l, l));
    }
    function Mr(e, n, r, o) {
      var i,
        s = n;
      if (cs(e)) {
        var _l8 = !1;
        var _c6 = e.childNodes,
          _a7 = _c6.length,
          _u7 = o._blockCursorElement;
        s === _a7 && ((_l8 = !0), (s = _a7 - 1));
        var _f5 = _c6[s],
          _d5 = !1;
        if (_f5 === _u7) ((_f5 = _c6[s + 1]), (_d5 = !0));
        else if (null !== _u7) {
          var _t111 = _u7.parentNode;
          if (e === _t111) {
            n > Array.prototype.indexOf.call(_t111.children, _u7) && s--;
          }
        }
        if (((i = vi(_f5)), ur(i))) s = js(i, _l8 ? "next" : "previous");
        else {
          var _c7 = vi(e);
          if (null === _c7) return null;
          if (vo(_c7)) {
            var _u8$resolveChildIndex;
            var _a8 = o.getElementByKey(_c7.getKey());
            null === _a8 && t(214);
            var _u8 = ys(o).$getDOMSlot(_c7, _a8, o);
            ((_u8$resolveChildIndex = _u8.resolveChildIndex(_c7, _a8, e, n)),
              (_c7 = _u8$resolveChildIndex[0]),
              (s = _u8$resolveChildIndex[1]),
              vo(_c7) || t(215),
              _l8 &&
                s >= _c7.getChildrenSize() &&
                (s = Math.max(0, _c7.getChildrenSize() - 1)));
            var _f6 = _c7.getChildAtIndex(s);
            if (
              vo(_f6) &&
              (function (t, e, n) {
                var r = t.getParent();
                return (
                  null === n ||
                  null === r ||
                  !r.canBeEmpty() ||
                  r !== n.getNode()
                );
              })(_f6, 0, r)
            ) {
              var _t112 = _l8
                ? _f6.getLastDescendant()
                : _f6.getFirstDescendant();
              (null === _t112
                ? (_c7 = _f6)
                : ((_f6 = _t112),
                  (_c7 = vo(_f6) ? _f6 : _f6.getParentOrThrow())),
                (s = 0));
            }
            ur(_f6)
              ? ((i = _f6),
                (_c7 = null),
                (s = js(_f6, _l8 ? "next" : "previous")))
              : _f6 !== _c7 &&
                _l8 &&
                !_d5 &&
                (vo(_c7) || t(216),
                (s = Math.min(_c7.getChildrenSize(), s + 1)));
          } else {
            var _t113 = _c7.getIndexWithinParent();
            ((s = 0 === n && ko(_c7) && vi(e) === _c7 ? _t113 : _t113 + 1),
              (_c7 = _c7.getParentOrThrow()));
          }
          if (vo(_c7)) return pr(_c7.__key, s, "element");
        }
      } else i = vi(e);
      return ur(i) ? pr(i.__key, js(i, s, "clamp"), "text") : null;
    }
    function br(t, e, n) {
      var r = t.offset,
        o = t.getNode();
      if (0 === r) {
        var _r35 = o.getPreviousSibling(),
          _i17 = o.getParent();
        if (e) {
          if ((n || !e) && null === _r35 && vo(_i17) && _i17.isInline()) {
            var _e70 = _i17.getPreviousSibling();
            ur(_e70) && t.set(_e70.__key, _e70.getTextContent().length, "text");
          }
        } else
          vo(_r35) && !n && _r35.isInline()
            ? t.set(_r35.__key, _r35.getChildrenSize(), "element")
            : ur(_r35) &&
              t.set(_r35.__key, _r35.getTextContent().length, "text");
      } else if (r === o.getTextContent().length) {
        var _r36 = o.getNextSibling(),
          _i18 = o.getParent();
        if (e && vo(_r36) && _r36.isInline()) t.set(_r36.__key, 0, "element");
        else if (
          (n || e) &&
          null === _r36 &&
          vo(_i18) &&
          _i18.isInline() &&
          !_i18.canInsertTextAfter()
        ) {
          var _e71 = _i18.getNextSibling();
          ur(_e71) && t.set(_e71.__key, 0, "text");
        }
      }
    }
    function Ar(t, e, n) {
      if ("text" === t.type && "text" === e.type) {
        var _n54 = t.isBefore(e),
          _r37 = t.is(e);
        (br(t, _n54, _r37),
          br(e, !_n54, _r37),
          _r37 && e.set(t.key, t.offset, t.type));
      }
    }
    function Dr(t, e, n, r, o, i) {
      if (null === t || null === n || !ti(o, t, n)) return null;
      var s = Mr(t, e, Cr(i) ? i.anchor : null, o);
      if (null === s) return null;
      var l = Mr(n, r, Cr(i) ? i.focus : null, o);
      if (null === l) return null;
      if ("element" === s.type && "element" === l.type) {
        var _e72 = vi(t),
          _r38 = vi(n);
        if (ko(_e72) && ko(_r38)) return null;
      }
      return (Ar(s, l), [s, l]);
    }
    function wr(t) {
      return vo(t) && !t.isInline();
    }
    function Pr(t, e, n, r, o, i) {
      var s = oo(),
        l = new _Sr(pr(t, e, o), pr(n, r, i), 0, "");
      return ((l.dirty = !0), (s._selection = l), l);
    }
    function Ir() {
      var t = pr("root", 0, "element"),
        e = pr("root", 0, "element");
      return new _Sr(t, e, 0, "");
    }
    function Fr() {
      return new _xr(new Set());
    }
    function Rr(t, e, n, r) {
      var o = n._window;
      if (null === o) return null;
      var i = r || o.event,
        s = i ? i.type : void 0,
        l = "selectionchange" === s,
        c =
          !B &&
          (l ||
            "beforeinput" === s ||
            "compositionstart" === s ||
            "compositionend" === s ||
            ("click" === s && i && 3 === i.detail) ||
            "drop" === s ||
            void 0 === s);
      var a, u, f, d;
      if (Cr(t) && !c) return t.clone();
      if (null === e) return null;
      if (
        ((a = e.anchorNode),
        (u = e.focusNode),
        (f = e.anchorOffset),
        (d = e.focusOffset),
        (l || void 0 === s) && Cr(t) && !ti(n, a, u))
      )
        return t.clone();
      var h = Dr(a, f, u, d, n, t);
      if (null === h) return null;
      var g = h[0],
        _ = h[1];
      var p = 0,
        y = "";
      if (Cr(t)) {
        var _e73 = t.anchor;
        if (g.key === _e73.key) ((p = t.format), (y = t.style));
        else {
          var _t114 = g.getNode();
          ur(_t114)
            ? ((p = _t114.getFormat()), (y = _t114.getStyle()))
            : vo(_t114) &&
              ((p = _t114.getTextFormat()), (y = _t114.getTextStyle()));
        }
      }
      return new _Sr(g, _, p, y);
    }
    function Lr() {
      return oo()._selection;
    }
    function Kr() {
      return io()._editorState._selection;
    }
    function Br(t, e, n, r) {
      if (r === void 0) {
        r = 1;
      }
      var o = t.anchor,
        i = t.focus,
        s = o.getNode(),
        l = i.getNode();
      if (!e.is(s) && !e.is(l)) return;
      var c = e.__key;
      if (t.isCollapsed()) {
        var _e74 = o.offset;
        if ((n <= _e74 && r > 0) || (n < _e74 && r < 0)) {
          var _n55 = Math.max(0, _e74 + r);
          (o.set(c, _n55, "element"), i.set(c, _n55, "element"), $r(t));
        }
      } else {
        var _s0 = t.isBackward(),
          _l9 = _s0 ? i : o,
          _a9 = _l9.getNode(),
          _u9 = _s0 ? o : i,
          _f7 = _u9.getNode();
        if (e.is(_a9)) {
          var _t115 = _l9.offset;
          ((n <= _t115 && r > 0) || (n < _t115 && r < 0)) &&
            _l9.set(c, Math.max(0, _t115 + r), "element");
        }
        if (e.is(_f7)) {
          var _t116 = _u9.offset;
          ((n <= _t116 && r > 0) || (n < _t116 && r < 0)) &&
            _u9.set(c, Math.max(0, _t116 + r), "element");
        }
      }
      $r(t);
    }
    function $r(t) {
      var e = t.anchor,
        n = e.offset,
        r = t.focus,
        o = r.offset,
        i = e.getNode(),
        s = r.getNode();
      if (t.isCollapsed()) {
        if (!vo(i)) return;
        var _t117 = i.getChildrenSize(),
          _o28 = n >= _t117,
          _s1 = _o28 ? i.getChildAtIndex(_t117 - 1) : i.getChildAtIndex(n);
        if (ur(_s1)) {
          var _t118 = 0;
          (_o28 && (_t118 = _s1.getTextContentSize()),
            e.set(_s1.__key, _t118, "text"),
            r.set(_s1.__key, _t118, "text"));
        }
        return;
      }
      if (vo(i)) {
        var _t119 = i.getChildrenSize(),
          _r39 = n >= _t119,
          _o29 = _r39 ? i.getChildAtIndex(_t119 - 1) : i.getChildAtIndex(n);
        if (ur(_o29)) {
          var _t120 = 0;
          (_r39 && (_t120 = _o29.getTextContentSize()),
            e.set(_o29.__key, _t120, "text"));
        }
      }
      if (vo(s)) {
        var _t121 = s.getChildrenSize(),
          _e75 = o >= _t121,
          _n56 = _e75 ? s.getChildAtIndex(_t121 - 1) : s.getChildAtIndex(o);
        if (ur(_n56)) {
          var _t122 = 0;
          (_e75 && (_t122 = _n56.getTextContentSize()),
            r.set(_n56.__key, _t122, "text"));
        }
      }
    }
    function zr(t, e, n, r, o) {
      var i = null,
        s = 0,
        l = null;
      (null !== r
        ? ((i = r.__key),
          ur(r)
            ? ((s = r.getTextContentSize()), (l = "text"))
            : vo(r) && ((s = r.getChildrenSize()), (l = "element")))
        : null !== o &&
          ((i = o.__key), ur(o) ? (l = "text") : vo(o) && (l = "element")),
        null !== i && null !== l
          ? t.set(i, s, l)
          : ((s = e.getIndexWithinParent()),
            -1 === s && (s = n.getChildrenSize()),
            t.set(n.__key, s, "element")));
    }
    function Wr(t, e, n, r, o) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : o), "text")
        : t.offset > r.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function Ur(t, e, n, r, o) {
      try {
        t.setBaseAndExtent(e, n, r, o);
      } catch (t) {}
    }
    function Yr(t, e, n) {
      var r = Yi(t, e.getKey());
      if (vo(e)) {
        var _o30 = ys(t).$getDOMSlot(e, r, t);
        return [_o30.element, n + _o30.getFirstChildOffset()];
      }
      return [r, n];
    }
    function jr(t, e, n, r, o, s, l) {
      var c = document.activeElement;
      if ((o.has(Pn) && c !== s) || (null !== c && Zo(c))) return;
      if (!Cr(e))
        return void (
          null !== t &&
          ti(n, r.anchorNode, r.focusNode) &&
          r.removeAllRanges()
        );
      var a = e.anchor,
        u = e.focus,
        f = a.getNode(),
        d = u.getNode(),
        _Yr = Yr(n, f, a.offset),
        h = _Yr[0],
        g = _Yr[1],
        _Yr2 = Yr(n, d, u.offset),
        _ = _Yr2[0],
        p = _Yr2[1],
        y = e.format,
        m = e.style,
        x = e.isCollapsed();
      var C = h,
        S = _,
        N = !1;
      var T, v, O, E, k;
      if (
        ("text" === a.type
          ? ((C = ci(h)), (N = f.getFormat() !== y || f.getStyle() !== m))
          : Cr(t) && "text" === t.anchor.type && (N = !0),
        "text" === u.type && (S = ci(_)),
        null !== C && null !== S) &&
        (x &&
          (null === t || N || (Cr(t) && (t.format !== y || t.style !== m))) &&
          ((T = y),
          (v = m),
          (O = g),
          (E = a.key),
          (k = performance.now()),
          (on = [T, v, O, E, k])),
        ("Range" === r.type && x) ||
          r.anchorOffset !== g ||
          r.focusOffset !== p ||
          r.anchorNode !== C ||
          r.focusNode !== S ||
          ((null !== c && s.contains(c)) ||
            o.has(Rn) ||
            s.focus({ preventScroll: !0 }),
          "element" === a.type))
      ) {
        if (
          (Ur(r, C, g, S, p),
          !i ||
            !e.isCollapsed() ||
            null === s ||
            o.has(Rn) ||
            (null !== document.activeElement &&
              s.contains(document.activeElement)) ||
            s.focus({ preventScroll: !0 }),
          !o.has(In) &&
            e.isCollapsed() &&
            null !== s &&
            s === document.activeElement)
        ) {
          var _t123 =
            Cr(e) && "element" === e.anchor.type
              ? C.childNodes[g] || null
              : r.rangeCount > 0
                ? r.getRangeAt(0)
                : null;
          if (null !== _t123) {
            var _e76;
            if (_t123 instanceof Text) {
              var _n57 = document.createRange();
              (_n57.selectNode(_t123), (_e76 = _n57.getBoundingClientRect()));
            } else _e76 = _t123.getBoundingClientRect();
            !(function (t, e, n) {
              var r = Ji(n),
                o = qi(r);
              if (null === r || null === o) return;
              var i = e.top,
                s = e.bottom,
                l = 0,
                c = 0,
                a = n;
              for (; null !== a; ) {
                var _e77 = a === r.body;
                if (_e77) {
                  ((l = 0), (c = Xi(t).innerHeight));
                  var _e78 = o.getComputedStyle(r.documentElement),
                    _n58 = parseFloat(_e78.scrollPaddingTop),
                    _i19 = parseFloat(_e78.scrollPaddingBottom);
                  (isFinite(_n58) && (l += _n58),
                    isFinite(_i19) && (c -= _i19));
                } else {
                  var _t124 = a.getBoundingClientRect();
                  ((l = _t124.top), (c = _t124.bottom));
                }
                var _n59 = 0;
                if (
                  (i < l ? (_n59 = -(l - i)) : s > c && (_n59 = s - c),
                  0 !== _n59)
                )
                  if (_e77) o.scrollBy(0, _n59);
                  else {
                    var _t125 = a.scrollTop;
                    a.scrollTop += _n59;
                    var _e79 = a.scrollTop - _t125;
                    ((i -= _e79), (s -= _e79));
                  }
                if (_e77) break;
                a = ji(a);
              }
            })(n, _e76, s);
          }
        }
        Xe = !0;
      }
    }
    function Jr(e) {
      var n = e;
      e.isCollapsed() || n.removeText();
      var r = Lr();
      (Cr(r) && (n = r), Cr(n) || t(161));
      var o = n.anchor;
      var i = o.getNode(),
        s = o.offset;
      for (; !_s(i); ) {
        var _Hr;
        var _t126 = i;
        if (((_Hr = Hr(i, s)), (i = _Hr[0]), (s = _Hr[1]), _t126.is(i))) break;
      }
      return s;
    }
    function Hr(t, e) {
      var n = t.getParent();
      if (!n) {
        var _t127 = Lo();
        return (Si().append(_t127), _t127.select(), [Si(), 0]);
      }
      if (ur(t)) {
        var _r40 = t.splitText(e);
        if (0 === _r40.length) return [n, t.getIndexWithinParent()];
        var _o31 = 0 === e ? 0 : 1;
        return [n, _r40[0].getIndexWithinParent() + _o31];
      }
      if (!vo(t) || 0 === e) return [n, t.getIndexWithinParent()];
      var r = t.getChildAtIndex(e);
      if (r) {
        var _n60 = new _Sr(
            pr(t.__key, e, "element"),
            pr(t.__key, e, "element"),
            0,
            "",
          ),
          _o32 = t.insertNewAfter(_n60);
        _o32 && _o32.append.apply(_o32, [r].concat(r.getNextSiblings()));
      }
      return [n, t.getIndexWithinParent() + 1];
    }
    function Gr(t, e, n, r, o) {
      if (o === void 0) {
        o = "decorators-and-blocks";
      }
      if ("move" === e && "character" === r && !t.isCollapsed()) {
        var _ref17 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e80 = _ref17[0],
          _r41 = _ref17[1];
        return (_r41.set(_e80.key, _e80.offset, _e80.type), !0);
      }
      var i = ll(t.focus, n ? "previous" : "next"),
        s = "lineboundary" === r,
        l = "move" === e;
      var c = i,
        a = "decorators-and-blocks" === o;
      if (!yl(c)) {
        for (var _t128 of c) {
          a = !1;
          var _e81 = _t128.origin;
          if (
            !ko(_e81) ||
            _e81.isIsolated() ||
            ((c = _t128), !s || !_e81.isInline())
          )
            break;
        }
        if (a)
          for (var _t129 of Qs(i).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (Bs(_t129)) _t129.origin.isInline() || (c = _t129);
            else {
              if (vo(_t129.origin)) continue;
              ko(_t129.origin) && !_t129.origin.isInline() && (c = _t129);
            }
            break;
          }
      }
      if (c === i) return !1;
      if (l && !s && ko(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t130 = Fr();
        return (_t130.add(c.origin.getKey()), Ti(_t130), !0);
      }
      return ((c = pl(c)), l && cl(t.anchor, c), cl(t.focus, c), a || !s);
    }
    var Vr = null,
      qr = null,
      Xr = !1,
      Qr = !1,
      Zr = 0;
    var to = { characterData: !0, childList: !0, subtree: !0 };
    function eo() {
      return Xr || (null !== Vr && Vr._readOnly);
    }
    function no() {
      Xr && t(13);
    }
    function ro() {
      Zr > 99 && t(14);
    }
    function oo() {
      return (null === Vr && t(195, so()), Vr);
    }
    function io() {
      return (null === qr && t(337, so()), qr);
    }
    function so() {
      var t = 0;
      var e = new Set(),
        n = _jo.version;
      if ("undefined" != typeof window)
        for (var _r42 of document.querySelectorAll("[contenteditable]")) {
          var _o33 = ri(_r42);
          if (ei(_o33)) t++;
          else if (_o33) {
            var _t131 = String(_o33.constructor.version || "<0.17.1");
            (_t131 === n &&
              (_t131 +=
                " (separately built, likely a bundler configuration issue)"),
              e.add(_t131));
          }
        }
      var r =
        " Detected on the page: " +
        t +
        " compatible editor(s) with version " +
        n;
      return (
        e.size &&
          (r +=
            " and incompatible editors with versions " +
            Array.from(e).join(", ")),
        r
      );
    }
    function lo() {
      return qr;
    }
    function co(t, e, n) {
      var r = e.__type,
        o = Vo(t, r);
      var i = n.get(r);
      void 0 === i && ((i = Array.from(o.transforms)), n.set(r, i));
      var s = i.length;
      for (var _t132 = 0; _t132 < s && (i[_t132](e), e.isAttached()); _t132++);
    }
    function ao(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function uo(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var r = e;
      Array.isArray(e) || (r = [e]);
      for (var _t133 of r) n.add(_t133);
    }
    function fo(e, n) {
      var r = e.type,
        o = n.get(r);
      void 0 === o && t(17, r);
      var i = o.klass;
      e.type !== i.getType() && t(18, i.name);
      var s = i.importJSON(e),
        l = e.children;
      if (vo(s) && Array.isArray(l))
        for (var _t134 = 0; _t134 < l.length; _t134++) {
          var _e82 = fo(l[_t134], n);
          s.append(_e82);
        }
      return s;
    }
    function ho(t, e, n) {
      var r = Vr,
        o = Xr,
        i = qr;
      ((Vr = e), (Xr = !0), (qr = t));
      try {
        return n();
      } finally {
        ((Vr = r), (Xr = o), (qr = i));
      }
    }
    function go(t, e) {
      var n = t._pendingEditorState,
        r = t._rootElement,
        o = t._headless || null === r;
      if (null === n)
        return void (t._deferred.length > 0 && yo(t, t._deferred));
      var i = t._editorState,
        s = i._selection,
        l = n._selection,
        c = 0 !== t._dirtyType,
        a = Vr,
        u = Xr,
        f = qr,
        d = t._updating,
        h = t._observer;
      var g = null;
      if (
        ((t._pendingEditorState = null),
        (t._editorState = n),
        !o && c && null !== h)
      ) {
        ((qr = t), (Vr = n), (Xr = !1), (t._updating = !0));
        try {
          var _e83 = t._dirtyType,
            _r43 = t._dirtyElements,
            _o34 = t._dirtyLeaves;
          (h.disconnect(), (g = Ut(i, n, t, _e83, _r43, _o34)));
        } catch (e) {
          if ((e instanceof Error && t._onError(e), Qr)) throw e;
          return (
            $o(t, null, r, n),
            G(t),
            (t._dirtyType = 2),
            (Qr = !0),
            go(t, i),
            void (Qr = !1)
          );
        } finally {
          (h.observe(r, to), (t._updating = d), (Vr = a), (Xr = u), (qr = f));
        }
      }
      n._readOnly || (n._readOnly = !0);
      var _ = t._dirtyLeaves,
        p = t._dirtyElements,
        y = t._normalizedNodes,
        m = t._updateTags,
        x = t._deferred;
      (c &&
        ((t._dirtyType = 0),
        t._cloneNotNeeded.clear(),
        (t._dirtyLeaves = new Set()),
        (t._dirtyElements = new Map()),
        (t._normalizedNodes = new Set()),
        (t._updateTags = new Set())),
        (function (t, e) {
          var n = t._decorators;
          var r = t._pendingDecorators || n;
          var o = e._nodeMap;
          var i;
          for (i in r) o.has(i) || (r === n && (r = xi(t)), delete r[i]);
        })(t, n));
      var C = o ? null : ss(Xi(t));
      if (
        t._editable &&
        null !== C &&
        (c || null === l || l.dirty || !l.is(s)) &&
        null !== r &&
        !m.has(Fn)
      ) {
        ((qr = t), (Vr = n));
        try {
          if ((null !== h && h.disconnect(), c || null === l || l.dirty)) {
            var _e84 = t._blockCursorElement;
            (null !== _e84 && is(_e84, t, r), jr(s, l, t, C, m, r));
          }
          !(function (t, e, n) {
            var r = t._blockCursorElement;
            if (
              Cr(n) &&
              n.isCollapsed() &&
              "element" === n.anchor.type &&
              e.contains(document.activeElement)
            ) {
              var _o35 = n.anchor,
                _i20 = _o35.getNode(),
                _s10 = _o35.offset;
              var _l0 = !1,
                _c8 = null;
              if (_s10 === _i20.getChildrenSize()) {
                os(_i20.getChildAtIndex(_s10 - 1)) && (_l0 = !0);
              } else {
                var _e85 = _i20.getChildAtIndex(_s10);
                if (null !== _e85 && os(_e85)) {
                  var _n61 = _e85.getPreviousSibling();
                  (null === _n61 || os(_n61)) &&
                    ((_l0 = !0), (_c8 = t.getElementByKey(_e85.__key)));
                }
              }
              if (_l0) {
                var _n62 = t.getElementByKey(_i20.__key);
                return (
                  null === r &&
                    (t._blockCursorElement = r =
                      (function (t) {
                        var e = t.theme,
                          n = document.createElement("div");
                        ((n.contentEditable = "false"),
                          n.setAttribute("data-lexical-cursor", "true"));
                        var r = e.blockCursor;
                        if (void 0 !== r) {
                          var _n$classList;
                          if ("string" == typeof r) {
                            var _t135 = Tl(r);
                            r = e.blockCursor = _t135;
                          }
                          void 0 !== r &&
                            (_n$classList = n.classList).add.apply(
                              _n$classList,
                              r,
                            );
                        }
                        return n;
                      })(t._config)),
                  (e.style.caretColor = "transparent"),
                  void (null === _c8
                    ? _n62.appendChild(r)
                    : _n62.insertBefore(r, _c8))
                );
              }
            }
            null !== r && is(r, t, e);
          })(t, r, l);
        } finally {
          (null !== h && h.observe(r, to), (qr = f), (Vr = a));
        }
      }
      (null !== g &&
        (function (t, e, n, r, o) {
          var i = Array.from(t._listeners.mutation),
            s = i.length;
          for (var _t136 = 0; _t136 < s; _t136++) {
            var _i$_t = i[_t136],
              _s11 = _i$_t[0],
              _l1 = _i$_t[1];
            for (var _t137 of _l1) {
              var _i21 = e.get(_t137);
              void 0 !== _i21 &&
                _s11(_i21, {
                  dirtyLeaves: r,
                  prevEditorState: o,
                  updateTags: n,
                });
            }
          }
        })(t, g, m, _, i),
        Cr(l) ||
          null === l ||
          (null !== s && s.is(l)) ||
          t.dispatchCommand(Jt, void 0));
      var S = t._pendingDecorators;
      (null !== S &&
        ((t._decorators = S),
        (t._pendingDecorators = null),
        _o("decorator", t, !0, S)),
        (function (t, e, n) {
          var r = Ci(e),
            o = Ci(n);
          r !== o && _o("textcontent", t, !0, o);
        })(t, e || i, n),
        _o("update", t, !0, {
          dirtyElements: p,
          dirtyLeaves: _,
          editorState: n,
          mutatedNodes: g,
          normalizedNodes: y,
          prevEditorState: e || i,
          tags: m,
        }),
        yo(t, x),
        (function (t) {
          var e = t._updates;
          if (0 !== e.length) {
            var _n63 = e.shift();
            if (_n63) {
              var _e86 = _n63[0],
                _r44 = _n63[1];
              xo(t, _e86, _r44);
            }
          }
        })(t));
    }
    function _o(t, e, n) {
      var o = e._updating;
      e._updating = n;
      try {
        var _n64 = e._listeners[t],
          _o36 = Array.from(_n64);
        for (
          var _len4 = arguments.length,
            r = new Array(_len4 > 3 ? _len4 - 3 : 0),
            _key4 = 3;
          _key4 < _len4;
          _key4++
        ) {
          r[_key4 - 3] = arguments[_key4];
        }
        for (var _ref19 of _o36) {
          var _t138 = _ref19[0];
          var _e87 = _ref19[1];
          {
            _e87 && _e87();
            var _o37 = _t138.apply(void 0, r);
            _n64.has(_t138) ? _n64.set(_t138, _o37) : _o37 && _o37();
          }
        }
      } finally {
        e._updating = o;
      }
    }
    function po(t, e, n, r) {
      var o = Ei(t);
      var i;
      for (var _t139 = 4; _t139 >= 0; _t139--) {
        var _loop = function _loop() {
            var l = o[_s12];
            if (_s12 > 0 && l._updating) {
              i = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e88 = c[_t139];
              if (_e88.size > 0) {
                var _t140 = !1;
                if (
                  (Co(l, function () {
                    for (var _o38 of _e88)
                      if (_o38(n, r)) return void (_t140 = !0);
                  }),
                  _t140)
                )
                  return { v: _t140 };
              }
            }
          },
          _ret;
        for (var _s12 = 0; _s12 < o.length; _s12++) {
          _ret = _loop();
          if (_ret === 0) break;
          if (_ret) return _ret.v;
        }
      }
      return (
        i &&
          i.update(function () {
            po(i, e, n, r);
          }),
        !1
      );
    }
    function yo(t, e) {
      if (((t._deferred = []), 0 !== e.length)) {
        var _n65 = t._updating;
        t._updating = !0;
        try {
          for (var _t141 = 0; _t141 < e.length; _t141++) e[_t141]();
        } finally {
          t._updating = _n65;
        }
      }
    }
    function mo(e, n) {
      var r = e._updates;
      var o = n || !1;
      for (; 0 !== r.length; ) {
        var _n66 = r.shift();
        if (_n66) {
          var _r45 = _n66[0],
            _i22 = _n66[1],
            _s13 = e._pendingEditorState;
          var _l10 = void 0;
          (void 0 !== _i22 &&
            ((_l10 = _i22.onUpdate),
            _i22.skipTransforms && (o = !0),
            _i22.discrete && (null === _s13 && t(191), (_s13._flushSync = !0)),
            _l10 && e._deferred.push(_l10),
            uo(e, _i22.tag)),
            null == _s13 ? xo(e, _r45, _i22) : _r45());
        }
      }
      return o;
    }
    function xo(e, n, r) {
      var o = e._updateTags;
      var i,
        s = !1,
        l = !1;
      (void 0 !== r &&
        ((i = r.onUpdate),
        uo(e, r.tag),
        (s = r.skipTransforms || !1),
        (l = r.discrete || !1)),
        i && e._deferred.push(i));
      var c = e._editorState;
      var a = e._pendingEditorState,
        u = !1;
      ((null === a || a._readOnly) &&
        ((a = e._pendingEditorState = Ao(a || c)), (u = !0)),
        (a._flushSync = l));
      var f = Vr,
        d = Xr,
        h = qr,
        g = e._updating;
      ((Vr = a), (Xr = !1), (e._updating = !0), (qr = e));
      var _ = e._headless || null === e.getRootElement();
      Ho(null);
      try {
        u &&
          (_
            ? null !== c._selection && (a._selection = c._selection.clone())
            : (a._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  r = ss(Xi(t));
                return Cr(n) || null == n ? Rr(n, r, t, e) : n.clone();
              })(e, (r && r.event) || null)));
        var _o39 = e._compositionKey;
        (n(),
          (s = mo(e, s)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              r = t._selection;
            if (Cr(r)) {
              var _t142 = r.anchor,
                _e89 = r.focus;
              var _o40;
              if (
                ("text" === _t142.type &&
                  ((_o40 = _t142.getNode()), _o40.selectionTransform(n, r)),
                "text" === _e89.type)
              ) {
                var _t143 = _e89.getNode();
                _o40 !== _t143 && _t143.selectionTransform(n, r);
              }
            }
          })(a, e),
          0 !== e._dirtyType &&
            (s
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    r = t._nodeMap;
                  for (var _t144 of n) {
                    var _e90 = r.get(_t144);
                    ur(_e90) &&
                      _e90.isAttached() &&
                      _e90.isSimpleText() &&
                      !_e90.isUnmergeable() &&
                      ct(_e90);
                  }
                })(a, e)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    r = e._dirtyElements,
                    o = t._nodeMap,
                    i = gi(),
                    s = new Map();
                  var l = n,
                    c = l.size,
                    a = r,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t145 of l) {
                        var _r46 = o.get(_t145);
                        (ur(_r46) &&
                          _r46.isAttached() &&
                          _r46.isSimpleText() &&
                          !_r46.isUnmergeable() &&
                          ct(_r46),
                          void 0 !== _r46 && ao(_r46, i) && co(e, _r46, s),
                          n.add(_t145));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        Zr++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t146 of a) {
                      var _n67 = _t146[0],
                        _l11 = _t146[1];
                      if ((r.set(_n67, _l11), !_l11)) continue;
                      var _c9 = o.get(_n67);
                      void 0 !== _c9 && ao(_c9, i) && co(e, _c9, s);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      Zr++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = r));
                })(a, e),
            mo(e),
            (function (t, e, n, r) {
              var o = t._nodeMap,
                i = e._nodeMap,
                s = [];
              for (var _ref21 of r) {
                var _t147 = _ref21[0];
                {
                  var _e91 = i.get(_t147);
                  void 0 !== _e91 &&
                    (_e91.isAttached() ||
                      (vo(_e91) && K(_e91, _t147, o, i, s, r),
                      o.has(_t147) || r["delete"](_t147),
                      s.push(_t147)));
                }
              }
              for (var _t148 of s) i["delete"](_t148);
              for (var _t149 of n) {
                var _e92 = i.get(_t149);
                void 0 === _e92 ||
                  _e92.isAttached() ||
                  (o.has(_t149) || n["delete"](_t149), i["delete"](_t149));
              }
            })(c, a, e._dirtyLeaves, e._dirtyElements)));
        _o39 !== e._compositionKey && (a._flushSync = !0);
        var _i23 = a._selection;
        if (Cr(_i23)) {
          var _e93 = a._nodeMap,
            _n68 = _i23.anchor.key,
            _r47 = _i23.focus.key;
          (void 0 !== _e93.get(_n68) && void 0 !== _e93.get(_r47)) || t(19);
        } else Nr(_i23) && 0 === _i23._nodes.size && (a._selection = null);
      } catch (t) {
        return (
          t instanceof Error && e._onError(t),
          (e._pendingEditorState = c),
          (e._dirtyType = 2),
          e._cloneNotNeeded.clear(),
          (e._dirtyLeaves = new Set()),
          e._dirtyElements.clear(),
          void go(e)
        );
      } finally {
        ((Vr = f), (Xr = d), (qr = h), (e._updating = g), (Zr = 0));
      }
      var p =
        0 !== e._dirtyType ||
        e._deferred.length > 0 ||
        (function (t, e) {
          var n = e.getEditorState()._selection,
            r = t._selection;
          if (null !== r) {
            if (r.dirty || !r.is(n)) return !0;
          } else if (null !== n) return !0;
          return !1;
        })(a, e);
      p
        ? a._flushSync
          ? ((a._flushSync = !1), go(e))
          : u &&
            Xo(function () {
              go(e);
            })
        : ((a._flushSync = !1),
          u && (o.clear(), (e._deferred = []), (e._pendingEditorState = null)));
    }
    function Co(t, e, n) {
      qr === t && void 0 === n ? e() : xo(t, e, n);
    }
    var _So = (function () {
      function So(t, e, n) {
        ((this.element = t),
          (this.before = e || null),
          (this.after = n || null));
      }
      var _proto0 = So.prototype;
      _proto0.withBefore = function withBefore(t) {
        return new So(this.element, t, this.after);
      };
      _proto0.withAfter = function withAfter(t) {
        return new So(this.element, this.before, t);
      };
      _proto0.withElement = function withElement(t) {
        return this.element === t ? this : new So(t, this.before, this.after);
      };
      _proto0.insertChild = function insertChild(e) {
        var n = this.before || this.getManagedLineBreak();
        return (
          null !== n && n.parentElement !== this.element && t(222),
          this.element.insertBefore(e, n),
          this
        );
      };
      _proto0.removeChild = function removeChild(e) {
        return (
          e.parentElement !== this.element && t(223),
          this.element.removeChild(e),
          this
        );
      };
      _proto0.replaceChild = function replaceChild(e, n) {
        return (
          n.parentElement !== this.element && t(224),
          this.element.replaceChild(e, n),
          this
        );
      };
      _proto0.getFirstChild = function getFirstChild() {
        var t = this.after ? this.after.nextSibling : this.element.firstChild;
        return t === this.before || t === this.getManagedLineBreak() ? null : t;
      };
      _proto0.getManagedLineBreak = function getManagedLineBreak() {
        return this.element.__lexicalLineBreak || null;
      };
      _proto0.setManagedLineBreak = function setManagedLineBreak(t) {
        if (null === t) this.removeManagedLineBreak();
        else {
          var _e94 = "decorator" === t && (d || l || a);
          this.insertManagedLineBreak(_e94);
        }
      };
      _proto0.removeManagedLineBreak = function removeManagedLineBreak() {
        var t = this.getManagedLineBreak();
        if (t) {
          var _e95 = this.element,
            _n69 = "IMG" === t.nodeName ? t.nextSibling : null;
          (_n69 && _e95.removeChild(_n69),
            _e95.removeChild(t),
            (_e95.__lexicalLineBreak = void 0));
        }
      };
      _proto0.insertManagedLineBreak = function insertManagedLineBreak(t) {
        var e = this.getManagedLineBreak();
        if (e) {
          if (t === ("IMG" === e.nodeName)) return;
          this.removeManagedLineBreak();
        }
        var n = this.element,
          r = this.before,
          o = document.createElement("br");
        if ((n.insertBefore(o, r), t)) {
          var _t150 = document.createElement("img");
          (_t150.setAttribute("data-lexical-linebreak", "true"),
            _t150.style.setProperty("display", "inline", "important"),
            _t150.style.setProperty("border", "0px", "important"),
            _t150.style.setProperty("margin", "0px", "important"),
            (_t150.alt = ""),
            n.insertBefore(_t150, o),
            (n.__lexicalLineBreak = _t150));
        } else n.__lexicalLineBreak = o;
      };
      _proto0.getFirstChildOffset = function getFirstChildOffset() {
        var t = 0;
        for (var _e96 = this.after; null !== _e96; _e96 = _e96.previousSibling)
          t++;
        return t;
      };
      _proto0.resolveChildIndex = function resolveChildIndex(t, e, n, r) {
        if (n === this.element) {
          var _e97 = this.getFirstChildOffset();
          return [t, Math.min(_e97 + t.getChildrenSize(), Math.max(_e97, r))];
        }
        var o = No(e, n);
        o.push(r);
        var i = No(e, this.element);
        var s = t.getIndexWithinParent();
        for (var _t151 = 0; _t151 < i.length; _t151++) {
          var _e98 = o[_t151],
            _n70 = i[_t151];
          if (void 0 === _e98 || _e98 < _n70) break;
          if (_e98 > _n70) {
            s += 1;
            break;
          }
        }
        return [t.getParentOrThrow(), s];
      };
      return So;
    })();
    function No(e, n) {
      var r = [];
      var o = n;
      for (; o !== e && null !== o; o = o.parentNode) {
        var _t152 = 0;
        for (
          var _e99 = o.previousSibling;
          null !== _e99;
          _e99 = _e99.previousSibling
        )
          _t152++;
        r.push(_t152);
      }
      return (o !== e && t(225), r.reverse());
    }
    var _To4 = (function (_Dn3) {
      function To(t) {
        var _this3;
        ((_this3 = _Dn3.call(this, t) || this),
          (_this3.__first = null),
          (_this3.__last = null),
          (_this3.__size = 0),
          (_this3.__format = 0),
          (_this3.__style = ""),
          (_this3.__indent = 0),
          (_this3.__dir = null),
          (_this3.__textFormat = 0),
          (_this3.__textStyle = ""));
        return _this3;
      }
      babelHelpers.inheritsLoose(To, _Dn3);
      var _proto1 = To.prototype;
      _proto1.afterCloneFrom = function afterCloneFrom(t) {
        (_Dn3.prototype.afterCloneFrom.call(this, t),
          this.__key === t.__key &&
            ((this.__first = t.__first),
            (this.__last = t.__last),
            (this.__size = t.__size)),
          (this.__indent = t.__indent),
          (this.__format = t.__format),
          (this.__style = t.__style),
          (this.__dir = t.__dir),
          (this.__textFormat = t.__textFormat),
          (this.__textStyle = t.__textStyle));
      };
      _proto1.getFormat = function getFormat() {
        return this.getLatest().__format;
      };
      _proto1.getFormatType = function getFormatType() {
        var t = this.getFormat();
        return P[t] || "";
      };
      _proto1.getStyle = function getStyle() {
        return this.getLatest().__style;
      };
      _proto1.getIndent = function getIndent() {
        return this.getLatest().__indent;
      };
      _proto1.getChildren = function getChildren() {
        var t = [];
        var e = this.getFirstChild();
        for (; null !== e; ) (t.push(e), (e = e.getNextSibling()));
        return t;
      };
      _proto1.getChildrenKeys = function getChildrenKeys() {
        var t = [];
        var e = this.getFirstChild();
        for (; null !== e; ) (t.push(e.__key), (e = e.getNextSibling()));
        return t;
      };
      _proto1.getChildrenSize = function getChildrenSize() {
        return this.getLatest().__size;
      };
      _proto1.isEmpty = function isEmpty() {
        return 0 === this.getChildrenSize();
      };
      _proto1.isDirty = function isDirty() {
        var t = io()._dirtyElements;
        return null !== t && t.has(this.__key);
      };
      _proto1.isLastChild = function isLastChild() {
        var t = this.getLatest(),
          e = this.getParentOrThrow().getLastChild();
        return null !== e && e.is(t);
      };
      _proto1.getAllTextNodes = function getAllTextNodes() {
        var t = [];
        var e = this.getFirstChild();
        for (; null !== e; ) {
          if ((ur(e) && t.push(e), vo(e))) {
            var _n71 = e.getAllTextNodes();
            t.push.apply(t, _n71);
          }
          e = e.getNextSibling();
        }
        return t;
      };
      _proto1.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; vo(t); ) {
          var _e100 = t.getFirstChild();
          if (null === _e100) break;
          t = _e100;
        }
        return t;
      };
      _proto1.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; vo(t); ) {
          var _e101 = t.getLastChild();
          if (null === _e101) break;
          t = _e101;
        }
        return t;
      };
      _proto1.getDescendantByIndex = function getDescendantByIndex(t) {
        var e = this.getChildren(),
          n = e.length;
        if (t >= n) {
          var _t153 = e[n - 1];
          return (vo(_t153) && _t153.getLastDescendant()) || _t153 || null;
        }
        var r = e[t];
        return (vo(r) && r.getFirstDescendant()) || r || null;
      };
      _proto1.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : _i(t);
      };
      _proto1.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var e = this.getFirstChild();
        return (null === e && t(45, this.__key), e);
      };
      _proto1.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : _i(t);
      };
      _proto1.getLastChildOrThrow = function getLastChildOrThrow() {
        var e = this.getLastChild();
        return (null === e && t(96, this.__key), e);
      };
      _proto1.getChildAtIndex = function getChildAtIndex(t) {
        var e = this.getChildrenSize();
        var n, r;
        if (t < e / 2) {
          for (n = this.getFirstChild(), r = 0; null !== n && r <= t; ) {
            if (r === t) return n;
            ((n = n.getNextSibling()), r++);
          }
          return null;
        }
        for (n = this.getLastChild(), r = e - 1; null !== n && r >= t; ) {
          if (r === t) return n;
          ((n = n.getPreviousSibling()), r--);
        }
        return null;
      };
      _proto1.getTextContent = function getTextContent() {
        var t = "";
        var e = this.getChildren(),
          n = e.length;
        for (var _r48 = 0; _r48 < n; _r48++) {
          var _o41 = e[_r48];
          ((t += _o41.getTextContent()),
            vo(_o41) && _r48 !== n - 1 && !_o41.isInline() && (t += v));
        }
        return t;
      };
      _proto1.getTextContentSize = function getTextContentSize() {
        var t = 0;
        var e = this.getChildren(),
          n = e.length;
        for (var _r49 = 0; _r49 < n; _r49++) {
          var _o42 = e[_r49];
          ((t += _o42.getTextContentSize()),
            vo(_o42) && _r49 !== n - 1 && !_o42.isInline() && (t += 2));
        }
        return t;
      };
      _proto1.getDirection = function getDirection() {
        return this.getLatest().__dir;
      };
      _proto1.getTextFormat = function getTextFormat() {
        return this.getLatest().__textFormat;
      };
      _proto1.hasFormat = function hasFormat(t) {
        if ("" !== t) {
          var _e102 = w[t];
          return 0 !== (this.getFormat() & _e102);
        }
        return !1;
      };
      _proto1.hasTextFormat = function hasTextFormat(t) {
        var e = A[t];
        return 0 !== (this.getTextFormat() & e);
      };
      _proto1.getFormatFlags = function getFormatFlags(t, e) {
        return ai(this.getLatest().__textFormat, t, e);
      };
      _proto1.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto1.select = function select(t, e) {
        no();
        var n = Lr();
        var r = t,
          o = e;
        var i = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t154 = this.getFirstChild();
            if (ur(_t154) || vo(_t154)) return _t154.select(0, 0);
          } else if (
            !((void 0 !== t && t !== i) || (void 0 !== e && e !== i))
          ) {
            var _t155 = this.getLastChild();
            if (ur(_t155) || vo(_t155)) return _t155.select();
          }
        (void 0 === r && (r = i), void 0 === o && (o = i));
        var s = this.__key;
        return Cr(n)
          ? (n.anchor.set(s, r, "element"),
            n.focus.set(s, o, "element"),
            (n.dirty = !0),
            n)
          : Pr(s, r, s, o, "element", "element");
      };
      _proto1.selectStart = function selectStart() {
        var t = this.getFirstDescendant();
        return t ? t.selectStart() : this.select();
      };
      _proto1.selectEnd = function selectEnd() {
        var t = this.getLastDescendant();
        return t ? t.selectEnd() : this.select();
      };
      _proto1.clear = function clear() {
        var t = this.getWritable();
        return (
          this.getChildren().forEach(function (t) {
            return t.remove();
          }),
          t
        );
      };
      _proto1.append = function append() {
        for (
          var _len5 = arguments.length, t = new Array(_len5), _key5 = 0;
          _key5 < _len5;
          _key5++
        ) {
          t[_key5] = arguments[_key5];
        }
        return this.splice(this.getChildrenSize(), 0, t);
      };
      _proto1.setDirection = function setDirection(t) {
        var e = this.getWritable();
        return ((e.__dir = t), e);
      };
      _proto1.setFormat = function setFormat(t) {
        return ((this.getWritable().__format = ("" !== t && w[t]) || 0), this);
      };
      _proto1.setStyle = function setStyle(t) {
        return ((this.getWritable().__style = t || ""), this);
      };
      _proto1.setTextFormat = function setTextFormat(t) {
        var e = this.getWritable();
        return ((e.__textFormat = t), e);
      };
      _proto1.setTextStyle = function setTextStyle(t) {
        var e = this.getWritable();
        return ((e.__textStyle = t), e);
      };
      _proto1.setIndent = function setIndent(t) {
        return ((this.getWritable().__indent = t), this);
      };
      _proto1.splice = function splice(e, n, r) {
        An(this) && t(324, this.__key, this.__type);
        var o = this.getChildrenSize(),
          i = this.getWritable();
        e + n <= o || t(226, String(e), String(n), String(o));
        var s = i.__key,
          l = [],
          c = [],
          a = this.getChildAtIndex(e + n);
        var u = null,
          f = o - n + r.length;
        if (0 !== e)
          if (e === o) u = this.getLastChild();
          else {
            var _t156 = this.getChildAtIndex(e);
            null !== _t156 && (u = _t156.getPreviousSibling());
          }
        if (n > 0) {
          var _e103 = null === u ? this.getFirstChild() : u.getNextSibling();
          for (var _r50 = 0; _r50 < n; _r50++) {
            null === _e103 && t(100);
            var _n72 = _e103.getNextSibling(),
              _r51 = _e103.__key;
            (fi(_e103.getWritable()), c.push(_r51), (_e103 = _n72));
          }
        }
        var d = u;
        for (var _e104 of r) {
          null !== d && _e104.is(d) && (u = d = d.getPreviousSibling());
          var _n73 = _e104.getWritable();
          (_n73.__parent === s && f--, fi(_n73));
          var _r52 = _e104.__key;
          if (null === d) ((i.__first = _r52), (_n73.__prev = null));
          else {
            var _t157 = d.getWritable();
            ((_t157.__next = _r52), (_n73.__prev = _t157.__key));
          }
          (_e104.__key === s && t(76),
            (_n73.__parent = s),
            l.push(_r52),
            (d = _e104));
        }
        if (e + n === o) {
          if (null !== d) {
            ((d.getWritable().__next = null), (i.__last = d.__key));
          }
        } else if (null !== a) {
          var _t158 = a.getWritable();
          if (null !== d) {
            var _e105 = d.getWritable();
            ((_t158.__prev = d.__key), (_e105.__next = a.__key));
          } else _t158.__prev = null;
        }
        if (((i.__size = f), c.length)) {
          var _t159 = Lr();
          if (Cr(_t159)) {
            var _e106 = new Set(c),
              _n74 = new Set(l),
              _r53 = _t159.anchor,
              _o43 = _t159.focus;
            (Oo(_r53, _e106, _n74) && zr(_r53, _r53.getNode(), this, u, a),
              Oo(_o43, _e106, _n74) && zr(_o43, _o43.getNode(), this, u, a),
              0 !== f || this.canBeEmpty() || Zi(this) || this.remove());
          }
        }
        return i;
      };
      _proto1.getDOMSlot = function getDOMSlot(t) {
        return new _So(t);
      };
      _proto1.exportDOM = function exportDOM(t) {
        var _Dn3$prototype$export = _Dn3.prototype.exportDOM.call(this, t),
          e = _Dn3$prototype$export.element;
        if (cs(e)) {
          var _t160 = this.getIndent();
          _t160 > 0 && (e.style.paddingInlineStart = 40 * _t160 + "px");
          var _n75 = this.getDirection();
          _n75 && (e.dir = _n75);
        }
        return { element: e };
      };
      _proto1.exportJSON = function exportJSON() {
        var t = babelHelpers["extends"](
            {
              children: [],
              direction: this.getDirection(),
              format: this.getFormatType(),
              indent: this.getIndent(),
            },
            _Dn3.prototype.exportJSON.call(this),
          ),
          e = this.getTextFormat(),
          n = this.getTextStyle();
        return (
          (0 === e && "" === n) ||
            Zi(this) ||
            this.getChildren().some(ur) ||
            (0 !== e && (t.textFormat = e), "" !== n && (t.textStyle = n)),
          t
        );
      };
      _proto1.updateFromJSON = function updateFromJSON(t) {
        return _Dn3.prototype.updateFromJSON
          .call(this, t)
          .setFormat(t.format)
          .setIndent(t.indent)
          .setDirection(t.direction)
          .setTextFormat(t.textFormat || 0)
          .setTextStyle(t.textStyle || "");
      };
      _proto1.insertNewAfter = function insertNewAfter(t, e) {
        return null;
      };
      _proto1.canIndent = function canIndent() {
        return !0;
      };
      _proto1.collapseAtStart = function collapseAtStart(t) {
        return !1;
      };
      _proto1.excludeFromCopy = function excludeFromCopy(t) {
        return !1;
      };
      _proto1.canReplaceWith = function canReplaceWith(t) {
        return !0;
      };
      _proto1.canInsertAfter = function canInsertAfter(t) {
        return !0;
      };
      _proto1.canBeEmpty = function canBeEmpty() {
        return !0;
      };
      _proto1.canInsertTextBefore = function canInsertTextBefore() {
        return !0;
      };
      _proto1.canInsertTextAfter = function canInsertTextAfter() {
        return !0;
      };
      _proto1.isInline = function isInline() {
        return !1;
      };
      _proto1.isShadowRoot = function isShadowRoot() {
        return !1;
      };
      _proto1.canMergeWith = function canMergeWith(t) {
        return !1;
      };
      _proto1.extractWithChild = function extractWithChild(t, e, n) {
        return !1;
      };
      _proto1.canMergeWhenEmpty = function canMergeWhenEmpty() {
        return !1;
      };
      _proto1.reconcileObservedMutation = function reconcileObservedMutation(
        t,
        e,
      ) {
        var n = ys(e).$getDOMSlot(this, t, e);
        var r = n.getFirstChild();
        for (
          var _t161 = this.getFirstChild();
          _t161;
          _t161 = _t161.getNextSibling()
        ) {
          var _o44 = e.getElementByKey(_t161.getKey());
          null !== _o44 &&
            (null == r
              ? (n.insertChild(_o44), (r = _o44))
              : r !== _o44 && n.replaceChild(_o44, r),
            (r = r.nextSibling));
        }
      };
      return To;
    })(_Dn5);
    function vo(t) {
      return t instanceof _To4;
    }
    function Oo(t, e, n) {
      var r = t.getNode();
      for (; r; ) {
        var _t162 = r.__key;
        if (e.has(_t162) && !n.has(_t162)) return !0;
        r = r.getParent();
      }
      return !1;
    }
    var _Eo = (function (_Dn4) {
      function Eo() {
        return _Dn4.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Eo, _Dn4);
      var _proto10 = Eo.prototype;
      _proto10.decorate = function decorate(t, e) {
        return null;
      };
      _proto10.isIsolated = function isIsolated() {
        return !1;
      };
      _proto10.isInline = function isInline() {
        return !0;
      };
      _proto10.isKeyboardSelectable = function isKeyboardSelectable() {
        return !0;
      };
      return Eo;
    })(_Dn5);
    function ko(t) {
      return t instanceof _Eo;
    }
    var _Mo = (function (_To) {
      function Mo() {
        var _this4;
        ((_this4 = _To.call(this, "root") || this),
          (_this4.__cachedText = null));
        return _this4;
      }
      babelHelpers.inheritsLoose(Mo, _To);
      Mo.getType = function getType() {
        return "root";
      };
      Mo.clone = function clone() {
        return new Mo();
      };
      var _proto11 = Mo.prototype;
      _proto11.getTopLevelElementOrThrow =
        function getTopLevelElementOrThrow() {
          t(51);
        };
      _proto11.getTextContent = function getTextContent() {
        var t = this.__cachedText;
        return (!eo() && 0 !== io()._dirtyType) || null === t
          ? _To.prototype.getTextContent.call(this)
          : t;
      };
      _proto11.remove = function remove() {
        t(52);
      };
      _proto11.replace = function replace(e) {
        t(53);
      };
      _proto11.insertBefore = function insertBefore(e) {
        t(54);
      };
      _proto11.insertAfter = function insertAfter(e) {
        t(55);
      };
      _proto11.updateDOM = function updateDOM(t, e) {
        return !1;
      };
      _proto11.splice = function splice(e, n, r) {
        for (var _e107 of r) vo(_e107) || ko(_e107) || t(282);
        return _To.prototype.splice.call(this, e, n, r);
      };
      Mo.importJSON = function importJSON(t) {
        return Si().updateFromJSON(t);
      };
      _proto11.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return Mo;
    })(_To4);
    function bo(t) {
      return t instanceof _Mo;
    }
    function Ao(t) {
      return new _Po(new Map(t._nodeMap));
    }
    function Do() {
      return new _Po(new Map([["root", new _Mo()]]));
    }
    function wo(e) {
      var n = e.exportJSON(),
        r = e.constructor;
      if ((n.type !== r.getType() && t(130, r.name), vo(e))) {
        var _o45 = n.children;
        Array.isArray(_o45) || t(59, r.name);
        var _i24 = e.getChildren();
        for (var _t163 = 0; _t163 < _i24.length; _t163++) {
          var _e108 = wo(_i24[_t163]);
          _o45.push(_e108);
        }
      }
      return n;
    }
    var _Po = (function () {
      function Po(t, e) {
        ((this._nodeMap = t),
          (this._selection = e || null),
          (this._flushSync = !1),
          (this._readOnly = !1));
      }
      var _proto12 = Po.prototype;
      _proto12.isEmpty = function isEmpty() {
        return 1 === this._nodeMap.size && null === this._selection;
      };
      _proto12.read = function read(t, e) {
        return ho((e && e.editor) || null, this, t);
      };
      _proto12.clone = function clone(t) {
        var e = new Po(this._nodeMap, void 0 === t ? this._selection : t);
        return ((e._readOnly = !0), e);
      };
      _proto12.toJSON = function toJSON() {
        return ho(null, this, function () {
          return { root: wo(Si()) };
        });
      };
      return Po;
    })();
    var _Io = (function (_To2) {
      function Io() {
        return _To2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Io, _To2);
      Io.getType = function getType() {
        return "artificial";
      };
      var _proto13 = Io.prototype;
      _proto13.createDOM = function createDOM(t) {
        return document.createElement("div");
      };
      return Io;
    })(_To4);
    var _Fo = (function (_To3) {
      function Fo() {
        return _To3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Fo, _To3);
      Fo.getType = function getType() {
        return "paragraph";
      };
      Fo.clone = function clone(t) {
        return new Fo(t.__key);
      };
      var _proto14 = Fo.prototype;
      _proto14.createDOM = function createDOM(t) {
        var e = document.createElement("p"),
          n = Ki(t.theme, "paragraph");
        if (void 0 !== n) {
          var _e$classList2;
          (_e$classList2 = e.classList).add.apply(_e$classList2, n);
        }
        return e;
      };
      _proto14.updateDOM = function updateDOM(t, e, n) {
        return !1;
      };
      Fo.importDOM = function importDOM() {
        return {
          p: function p(t) {
            return { conversion: Ro, priority: 0 };
          },
        };
      };
      _proto14.exportDOM = function exportDOM(t) {
        var _To3$prototype$export = _To3.prototype.exportDOM.call(this, t),
          e = _To3$prototype$export.element;
        if (cs(e)) {
          this.isEmpty() && e.append(document.createElement("br"));
          var _t164 = this.getFormatType();
          _t164 && (e.style.textAlign = _t164);
        }
        return { element: e };
      };
      Fo.importJSON = function importJSON(t) {
        return Lo().updateFromJSON(t);
      };
      _proto14.exportJSON = function exportJSON() {
        var t = _To3.prototype.exportJSON.call(this);
        if (void 0 === t.textFormat || void 0 === t.textStyle) {
          var _e109 = this.getChildren().find(ur);
          _e109
            ? ((t.textFormat = _e109.getFormat()),
              (t.textStyle = _e109.getStyle()))
            : ((t.textFormat = this.getTextFormat()),
              (t.textStyle = this.getTextStyle()));
        }
        return t;
      };
      _proto14.insertNewAfter = function insertNewAfter(t, e) {
        var n = Lo();
        (n.setTextFormat(t.format), n.setTextStyle(t.style));
        var r = this.getDirection();
        return (
          n.setDirection(r),
          n.setFormat(this.getFormatType()),
          n.setStyle(this.getStyle()),
          this.insertAfter(n, e),
          n
        );
      };
      _proto14.collapseAtStart = function collapseAtStart() {
        var t = this.getChildren();
        if (
          0 === t.length ||
          (ur(t[0]) && "" === t[0].getTextContent().trim())
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return Fo;
    })(_To4);
    function Ro(t) {
      var e = Lo();
      if (
        (t.style && (e.setFormat(t.style.textAlign), Ns(t, e)),
        "" === e.getFormatType())
      ) {
        var _n76 = t.getAttribute("align");
        _n76 && _n76 && _n76 in w && e.setFormat(_n76);
      }
      return (Ts(e, t), { node: e });
    }
    function Lo() {
      return es(new _Fo());
    }
    function Ko(t) {
      return t instanceof _Fo;
    }
    var Bo = 0;
    function $o(t, e, n, r) {
      var o = t._keyToDOMMap;
      (o.clear(),
        (t._editorState = Do()),
        (t._pendingEditorState = r),
        (t._compositionKey = null),
        (t._dirtyType = 0),
        t._cloneNotNeeded.clear(),
        (t._dirtyLeaves = new Set()),
        t._dirtyElements.clear(),
        (t._normalizedNodes = new Set()),
        (t._updateTags = new Set()),
        (t._updates = []),
        (t._blockCursorElement = null));
      var i = t._observer;
      (null !== i && (i.disconnect(), (t._observer = null)),
        null !== e && (e.textContent = ""),
        null !== n && ((n.textContent = ""), o.set("root", n)));
    }
    function zo(t) {
      var e = new Set(),
        n = new Set();
      var r = t;
      for (; r; ) {
        var _Es3 = Es(r),
          _t165 = _Es3.ownNodeConfig,
          _o46 = r.transform;
        if (!n.has(_o46)) {
          n.add(_o46);
          var _t166 = r.transform();
          _t166 && e.add(_t166);
        }
        if (_t165) {
          var _n77 = _t165.$transform;
          (_n77 && e.add(_n77), (r = _t165["extends"]));
        } else {
          var _t167 = Object.getPrototypeOf(r);
          r =
            _t167.prototype instanceof _Dn5 && _t167 !== _Dn5 ? _t167 : void 0;
        }
      }
      return e;
    }
    var Wo = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, r) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = qo(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, r, o) {
        return vo(t) && t.extractWithChild(e, n, r);
      },
      $getDOMSlot: function $getDOMSlot(e, n, r) {
        return (vo(e) || t(336, e.getKey(), e.getType()), e.getDOMSlot(n));
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return vo(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, r) {
        return t.updateDOM(e, n, r._config);
      },
    };
    function Uo(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function Yo(t, e, n) {
      return (t.set(e, n), Uo.bind(null, t, e));
    }
    var _jo = (function () {
      function jo(t, e, n, r, o, i, s, l) {
        ((this._createEditorArgs = l),
          (this._parentEditor = e),
          (this._rootElement = null),
          (this._editorState = t),
          (this._pendingEditorState = null),
          (this._compositionKey = null),
          (this._deferred = []),
          (this._keyToDOMMap = new Map()),
          (this._updates = []),
          (this._updating = !1),
          (this._listeners = {
            decorator: new Map(),
            editable: new Map(),
            mutation: new Map(),
            root: new Map(),
            textcontent: new Map(),
            update: new Map(),
          }),
          (this._commands = new Map()),
          (this._config = r),
          (this._nodes = n),
          (this._decorators = {}),
          (this._pendingDecorators = null),
          (this._dirtyType = 0),
          (this._cloneNotNeeded = new Set()),
          (this._dirtyLeaves = new Set()),
          (this._dirtyElements = new Map()),
          (this._normalizedNodes = new Set()),
          (this._updateTags = new Set()),
          (this._observer = null),
          (this._key = ki()),
          (this._onError = o),
          (this._htmlConversions = i),
          (this._editable = s),
          (this._headless = null !== e && e._headless),
          (this._window = null),
          (this._blockCursorElement = null));
      }
      var _proto15 = jo.prototype;
      _proto15.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto15.registerUpdateListener = function registerUpdateListener(t) {
        return Yo(this._listeners.update, t);
      };
      _proto15.registerEditableListener = function registerEditableListener(t) {
        return Yo(this._listeners.editable, t);
      };
      _proto15.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return Yo(this._listeners.decorator, t);
      };
      _proto15.registerTextContentListener =
        function registerTextContentListener(t) {
          return Yo(this._listeners.textcontent, t);
        };
      _proto15.registerRootListener = function registerRootListener(t) {
        var _this13 = this;
        var e = this._listeners.root;
        return vl(Yo(e, t, t(this._rootElement, null) || void 0), function () {
          return (function (t, e, n) {
            var r = t.get(e);
            (r && r(), t.set(e, e.apply(void 0, n) || void 0));
          })(e, t, [null, _this13._rootElement]);
        });
      };
      _proto15.registerCommand = function registerCommand(e, n, r) {
        void 0 === r && t(35);
        var o = this._commands;
        o.has(e) ||
          o.set(e, [new _L(), new _L(), new _L(), new _L(), new _L()]);
        var i = o.get(e);
        void 0 === i && t(36, String(e));
        var s = (function (t) {
            return 7 & t;
          })(r),
          l = i[s];
        return (
          s !== r ? l.addFront(n) : l.addBack(n),
          function () {
            (l["delete"](n),
              i.every(function (t) {
                return 0 === t.size;
              }) && o["delete"](e));
          }
        );
      };
      _proto15.registerMutationListener = function registerMutationListener(
        t,
        e,
        n,
      ) {
        var r = this.resolveRegisteredNodeAfterReplacements(
            this.getRegisteredNode(t),
          ).klass,
          o = this._listeners.mutation;
        var i = o.get(e);
        (void 0 === i && ((i = new Set()), o.set(e, i)), i.add(r));
        var s = n && n.skipInitialization;
        return (
          (void 0 !== s && s) || this.initializeMutationListener(e, r),
          function () {
            (i["delete"](r), 0 === i.size && o["delete"](e));
          }
        );
      };
      _proto15.getRegisteredNode = function getRegisteredNode(e) {
        var n = this._nodes.get(e.getType());
        return (void 0 === n && t(37, e.name), n);
      };
      _proto15.resolveRegisteredNodeAfterReplacements =
        function resolveRegisteredNodeAfterReplacements(t) {
          for (; t.replaceWithKlass; )
            t = this.getRegisteredNode(t.replaceWithKlass);
          return t;
        };
      _proto15.initializeMutationListener = function initializeMutationListener(
        t,
        e,
      ) {
        var n = this._editorState,
          r = Cs(n).get(e.getType());
        if (!r) return;
        var o = new Map();
        for (var _t168 of r.keys()) o.set(_t168, "created");
        o.size > 0 &&
          t(o, {
            dirtyLeaves: new Set(),
            prevEditorState: n,
            updateTags: new Set(["registerMutationListener"]),
          });
      };
      _proto15.registerNodeTransformToKlass =
        function registerNodeTransformToKlass(t, e) {
          var n = this.getRegisteredNode(t);
          return (n.transforms.add(e), n);
        };
      _proto15.registerNodeTransform = function registerNodeTransform(t, e) {
        var n = this.registerNodeTransformToKlass(t, e),
          r = [n],
          o = n.replaceWithKlass;
        if (null != o) {
          var _t169 = this.registerNodeTransformToKlass(o, e);
          r.push(_t169);
        }
        return (
          (function (t, e) {
            var n = Cs(t.getEditorState()),
              r = [];
            for (var _t170 of e) {
              var _e110 = n.get(_t170);
              _e110 && r.push(_e110);
            }
            if (0 === r.length) return;
            t.update(
              function () {
                for (var _t171 of r)
                  for (var _e111 of _t171.keys()) {
                    var _t172 = _i(_e111);
                    _t172 && _t172.markDirty();
                  }
              },
              null === t._pendingEditorState ? { tag: wn } : void 0,
            );
          })(
            this,
            r.map(function (t) {
              return t.klass.getType();
            }),
          ),
          function () {
            r.forEach(function (t) {
              return t.transforms["delete"](e);
            });
          }
        );
      };
      _proto15.hasNode = function hasNode(t) {
        return this._nodes.has(t.getType());
      };
      _proto15.hasNodes = function hasNodes(t) {
        return t.every(this.hasNode.bind(this));
      };
      _proto15.dispatchCommand = function dispatchCommand(t, e) {
        return Ui(this, t, e);
      };
      _proto15.getDecorators = function getDecorators() {
        return this._decorators;
      };
      _proto15.getRootElement = function getRootElement() {
        return this._rootElement;
      };
      _proto15.getKey = function getKey() {
        return this._key;
      };
      _proto15.setRootElement = function setRootElement(t) {
        var e = this._rootElement;
        if (t !== e) {
          var _e$classList3;
          var _n78 = Ki(this._config.theme, "root"),
            _r54 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            $o(this, e, t, _r54),
            null !== e &&
              (this._config.disableEvents || kn(e),
              null != _n78 &&
                (_e$classList3 = e.classList).remove.apply(
                  _e$classList3,
                  _n78,
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e112 = qi(t),
              _r55 = t.style;
            ((_r55.userSelect = "text"),
              (_r55.whiteSpace = "pre-wrap"),
              (_r55.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e112),
              (this._dirtyType = 2),
              G(this),
              this._updateTags.add(wn),
              go(this),
              this._config.disableEvents ||
                (function (t, e, _qe$get) {
                  var n = t.ownerDocument;
                  Ve.set(t, n);
                  var r = (_qe$get = qe.get(n)) != null ? _qe$get : 0;
                  (r < 1 && n.addEventListener("selectionchange", Tn),
                    qe.set(n, r + 1),
                    (t.__lexicalEditor = e));
                  var o = Sn(t);
                  var _loop2 = function _loop2() {
                    var _We$_n = We[_n79],
                      r = _We$_n[0],
                      i = _We$_n[1],
                      s =
                        "function" == typeof i
                          ? function (t) {
                              On(t) ||
                                (vn(t),
                                (e.isEditable() || "click" === r) && i(t, e));
                            }
                          : function (t) {
                              if (On(t)) return;
                              vn(t);
                              var n = e.isEditable();
                              switch (r) {
                                case "cut":
                                  return n && Ui(e, we, t);
                                case "copy":
                                  return Ui(e, De, t);
                                case "paste":
                                  return n && Ui(e, re, t);
                                case "dragstart":
                                  return n && Ui(e, Me, t);
                                case "dragover":
                                  return n && Ui(e, be, t);
                                case "dragend":
                                  return n && Ui(e, Ae, t);
                                case "focus":
                                  return n && Ui(e, Ke, t);
                                case "blur":
                                  return n && Ui(e, Be, t);
                                case "drop":
                                  return n && Ui(e, Ee, t);
                              }
                            };
                    (t.addEventListener(r, s),
                      o.push(function () {
                        t.removeEventListener(r, s);
                      }));
                  };
                  for (var _n79 = 0; _n79 < We.length; _n79++) {
                    _loop2();
                  }
                })(t, this),
              null != _n78 &&
                (_t$classList = t.classList).add.apply(_t$classList, _n78));
          } else ((this._window = null), this._updateTags.add(wn), go(this));
          _o("root", this, !1, t, e);
        }
      };
      _proto15.getElementByKey = function getElementByKey(t) {
        return this._keyToDOMMap.get(t) || null;
      };
      _proto15.getEditorState = function getEditorState() {
        return this._editorState;
      };
      _proto15.setEditorState = function setEditorState(e, n) {
        e.isEmpty() && t(38);
        var r = e;
        (r._readOnly &&
          ((r = Ao(e)),
          (r._selection = e._selection ? e._selection.clone() : null)),
          H(this));
        var o = this._pendingEditorState,
          i = this._updateTags,
          s = void 0 !== n ? n.tag : null;
        (null === o || o.isEmpty() || (null != s && i.add(s), go(this)),
          (this._pendingEditorState = r),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          null != s && i.add(s),
          this._updating || go(this));
      };
      _proto15.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var r = Do(),
            o = Vr,
            i = Xr,
            s = qr,
            l = e._dirtyElements,
            c = e._dirtyLeaves,
            a = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Set()),
            (e._dirtyType = 0),
            (Vr = r),
            (Xr = !1),
            (qr = e),
            Ho(null));
          try {
            var _o47 = e._nodes;
            (fo(t.root, _o47), n && n(), (r._readOnly = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = c),
              (e._cloneNotNeeded = a),
              (e._dirtyType = u),
              (Vr = o),
              (Xr = i),
              (qr = s));
          }
          return r;
        })("string" == typeof t ? JSON.parse(t) : t, this, e);
      };
      _proto15.read = function read(t) {
        return (go(this), this.getEditorState().read(t, { editor: this }));
      };
      _proto15.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : xo(t, e, n);
        })(this, t, e);
      };
      _proto15.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          Co(this, function () {
            var r = Lr(),
              o = Si();
            (null !== r
              ? r.dirty || Ti(r.clone())
              : 0 !== o.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? o.selectStart()
                  : o.selectEnd()),
              Hi("focus"),
              Gi(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto15.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = ss(this._window);
        null !== e && e.removeAllRanges();
      };
      _proto15.isEditable = function isEditable() {
        return this._editable;
      };
      _proto15.setEditable = function setEditable(t) {
        this._editable !== t &&
          ((this._editable = t), _o("editable", this, !0, t));
      };
      _proto15.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON() };
      };
      return jo;
    })();
    _jo.version = "0.44.0+prod.cjs";
    var Jo = null;
    function Ho(t) {
      Jo = t;
    }
    var Go = 1;
    function Vo(e, n) {
      var r = qo(e, n);
      return (void 0 === r && t(30, n), r);
    }
    function qo(t, e) {
      return t._nodes.get(e);
    }
    var Xo =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function Qo(t) {
      return ko(mi(t));
    }
    function Zo(t) {
      var e = document.activeElement;
      if (!cs(e)) return !1;
      var n = e.nodeName;
      return (
        ko(mi(t)) &&
        ("INPUT" === n ||
          "TEXTAREA" === n ||
          ("true" === e.contentEditable && null == ri(e)))
      );
    }
    function ti(t, e, n) {
      var r = t.getRootElement();
      try {
        return (
          null !== r &&
          r.contains(e) &&
          r.contains(n) &&
          null !== e &&
          !Zo(e) &&
          ni(e) === t
        );
      } catch (t) {
        return !1;
      }
    }
    function ei(t) {
      return t instanceof _jo;
    }
    function ni(t) {
      var e = t;
      for (; null != e; ) {
        var _t173 = ri(e);
        if (ei(_t173)) return _t173;
        e = ji(e);
      }
      return null;
    }
    function ri(t) {
      return t ? t.__lexicalEditor : null;
    }
    function oi(t) {
      return gr(t) || t.isToken();
    }
    function ii(t) {
      return oi(t) || t.isSegmented();
    }
    function si(t) {
      return as(t) && 3 === t.nodeType;
    }
    function li(t) {
      return as(t) && 9 === t.nodeType;
    }
    function ci(t) {
      var e = t;
      for (; null != e; ) {
        if (si(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function ai(t, e, n) {
      var r = A[e];
      if (null !== n && (t & r) === (n & r)) return t;
      var o = t ^ r;
      return (
        "subscript" === e
          ? (o &= ~A.superscript)
          : "superscript" === e
            ? (o &= ~A.subscript)
            : "lowercase" === e
              ? ((o &= ~A.uppercase), (o &= ~A.capitalize))
              : "uppercase" === e
                ? ((o &= ~A.lowercase), (o &= ~A.capitalize))
                : "capitalize" === e &&
                  ((o &= ~A.lowercase), (o &= ~A.uppercase)),
        o
      );
    }
    function ui(t, e) {
      var n = (function () {
        var t = Jo;
        return ((Jo = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (no(), ro());
      var r = io(),
        o = oo(),
        i = "" + Go++;
      (o._nodeMap.set(i, t),
        vo(t) ? r._dirtyElements.set(i, !0) : r._dirtyLeaves.add(i),
        r._cloneNotNeeded.add(i),
        (r._dirtyType = 1),
        (t.__key = i));
    }
    function fi(t) {
      var e = t.getParent();
      if (null !== e) {
        var _n80 = t.getWritable(),
          _r56 = e.getWritable(),
          _o48 = t.getPreviousSibling(),
          _i25 = t.getNextSibling(),
          _s14 = null !== _i25 ? _i25.__key : null,
          _l12 = null !== _o48 ? _o48.__key : null,
          _c0 = null !== _o48 ? _o48.getWritable() : null,
          _a0 = null !== _i25 ? _i25.getWritable() : null;
        (null === _o48 && (_r56.__first = _s14),
          null === _i25 && (_r56.__last = _l12),
          null !== _c0 && (_c0.__next = _s14),
          null !== _a0 && (_a0.__prev = _l12),
          (_n80.__prev = null),
          (_n80.__next = null),
          (_n80.__parent = null),
          _r56.__size--);
      }
    }
    function di(e) {
      (ro(), An(e) && t(323, e.__key, e.__type));
      var n = e.getLatest(),
        r = n.__parent,
        o = oo(),
        i = io(),
        s = o._nodeMap,
        l = i._dirtyElements;
      null !== r &&
        (function (t, e, n) {
          var r = t;
          for (; null !== r; ) {
            if (n.has(r)) return;
            var _t174 = e.get(r);
            if (void 0 === _t174) break;
            (n.set(r, !1), (r = _t174.__parent));
          }
        })(r, s, l);
      var c = n.__key;
      ((i._dirtyType = 1), vo(e) ? l.set(c, !0) : i._dirtyLeaves.add(c));
    }
    function hi(t) {
      no();
      var e = io(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t175 = _i(n);
          null !== _t175 && _t175.getWritable();
        }
        if (null !== t) {
          var _e113 = _i(t);
          null !== _e113 && _e113.getWritable();
        }
      }
    }
    function gi() {
      if (eo()) return null;
      return io()._compositionKey;
    }
    function _i(t, e) {
      var n = (e || oo())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function pi(t, e) {
      var n = yi(t, io());
      return void 0 !== n ? _i(n, e) : null;
    }
    function yi(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function mi(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t176 = pi(n, e);
        if (null !== _t176) return _t176;
        n = ji(n);
      }
      return null;
    }
    function xi(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function Ci(t) {
      return t.read(function () {
        return Si().getTextContent();
      });
    }
    function Si() {
      return Ni(oo());
    }
    function Ni(t) {
      return t._nodeMap.get("root");
    }
    function Ti(t) {
      no();
      var e = oo();
      (null !== t && ((t.dirty = !0), t.setCachedNodes(null)),
        (e._selection = t));
    }
    function vi(t) {
      var e = io(),
        n = (function (t, e) {
          var n = t;
          for (; null != n; ) {
            var _t177 = yi(n, e);
            if (void 0 !== _t177) return _t177;
            n = ji(n);
          }
          return null;
        })(t, e);
      if (null === n) {
        return t === e.getRootElement() ? _i("root") : null;
      }
      return _i(n);
    }
    function Oi(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function Ei(t) {
      var e = [];
      for (var _n81 = t; null !== _n81; _n81 = _n81._parentEditor) e.push(_n81);
      return e;
    }
    function ki() {
      return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substring(0, 5);
    }
    function Mi(t) {
      return si(t) ? t.nodeValue : null;
    }
    function bi(t, e, n) {
      var r = ss(Xi(e));
      if (null === r) return;
      var o = r.anchorNode;
      var i = r.anchorOffset,
        s = r.focusOffset;
      if (null !== o) {
        var _e114 = Mi(o);
        var _r57 = mi(o);
        if (null !== _e114 && ur(_r57)) {
          if ((_e114 === T || _e114 === O) && n) {
            var _t178 = n.length;
            ((_e114 = n), (i = _t178), (s = _t178));
          }
          null !== _e114 && Ai(_r57, _e114, i, s, t);
        }
      }
    }
    function Ai(t, e, n, r, o) {
      var i = t;
      if (i.isAttached() && (o || !i.isDirty())) {
        var _s15 = i.isComposing();
        var _c1 = e;
        if (
          (_s15 || o) &&
          (e.endsWith(T) && (_c1 = e.slice(0, -T.length)), o)
        ) {
          var _t179 = O;
          var _e115;
          for (; -1 !== (_e115 = _c1.indexOf(_t179)); )
            ((_c1 = _c1.slice(0, _e115) + _c1.slice(_e115 + _t179.length)),
              null !== n &&
                n > _e115 &&
                (n = Math.max(_e115, n - _t179.length)),
              null !== r &&
                r > _e115 &&
                (r = Math.max(_e115, r - _t179.length)));
        }
        var _u0 = i.getTextContent();
        if (o || _c1 !== _u0) {
          if ("" === _c1) {
            if ((hi(null), a || l || d)) i.remove();
            else {
              var _t180 = io();
              setTimeout(function () {
                _t180.update(function () {
                  i.isAttached() && i.remove();
                });
              }, 20);
            }
            return;
          }
          var _e116 = i.getParent(),
            _o49 = Kr(),
            _u1 = i.getTextContentSize(),
            _f8 = gi(),
            _h4 = i.getKey();
          if (
            i.isToken() ||
            (null !== _f8 && _h4 === _f8 && !_s15) ||
            (Cr(_o49) &&
              ((null !== _e116 &&
                !_e116.canInsertTextBefore() &&
                0 === _o49.anchor.offset) ||
                (_o49.anchor.key === t.__key &&
                  0 === _o49.anchor.offset &&
                  !i.canInsertTextBefore() &&
                  !_s15) ||
                (_o49.focus.key === t.__key &&
                  _o49.focus.offset === _u1 &&
                  !i.canInsertTextAfter() &&
                  !_s15)))
          )
            return void i.markDirty();
          var _g5 = Lr();
          if (!Cr(_g5) || null === n || null === r) return void Di(i, _c1, _g5);
          if ((_g5.setTextNodeRange(i, n, i, r), i.isSegmented())) {
            var _t181 = ar(i.getTextContent());
            (i.replace(_t181), (i = _t181));
          }
          Di(i, _c1, _g5);
        }
      }
    }
    function Di(t, e, n) {
      if ((t.setTextContent(e), Cr(n))) {
        var _e117 = t.getKey();
        for (var _r58 of ["anchor", "focus"]) {
          var _o50 = n[_r58];
          "text" === _o50.type &&
            _o50.key === _e117 &&
            (_o50.offset = js(t, _o50.offset, "clamp"));
        }
      }
    }
    function wi(t, e, n) {
      var r = e[n] || !1;
      return "any" === r || r === t[n];
    }
    function Pi(t, e) {
      return (
        wi(t, e, "altKey") &&
        wi(t, e, "ctrlKey") &&
        wi(t, e, "shiftKey") &&
        wi(t, e, "metaKey")
      );
    }
    function Ii(t, e, n) {
      if (!Pi(t, n)) return !1;
      if (t.key.toLowerCase() === e.toLowerCase()) return !0;
      if (e.length > 1) return !1;
      if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
      if (t.code.startsWith("Digit") && /^\d$/.test(e))
        return t.code === "Digit" + e;
      var r = "Key" + e.toUpperCase();
      return t.code === r;
    }
    var Fi = { ctrlKey: !o, metaKey: o },
      Ri = { altKey: o, ctrlKey: !o };
    function Li(t) {
      return "Backspace" === t.key;
    }
    function Ki(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        r = n[e];
      if (void 0 !== r) return r;
      var o = t[e];
      if ("string" == typeof o) {
        var _t182 = Tl(o);
        return ((n[e] = _t182), _t182);
      }
      return o;
    }
    function Bi(e, n, r, o, i) {
      if (0 === r.size) return;
      var s = o.__type,
        l = o.__key,
        c = n.get(s);
      void 0 === c && t(33, s);
      var a = c.klass;
      var u = e.get(a);
      void 0 === u && ((u = new Map()), e.set(a, u));
      var f = u.get(l),
        d = "destroyed" === f && "created" === i;
      (void 0 === f || d) && u.set(l, d ? "updated" : i);
    }
    function $i(t, e, n) {
      var r = t.getParent();
      var o = n,
        i = t;
      return (
        null !== r &&
          (e && 0 === n
            ? ((o = i.getIndexWithinParent()), (i = r))
            : e ||
              n !== i.getChildrenSize() ||
              ((o = i.getIndexWithinParent() + 1), (i = r))),
        i.getChildAtIndex(e ? o - 1 : o)
      );
    }
    function zi(t, e) {
      var n = t.offset;
      if ("element" === t.type) {
        return $i(t.getNode(), e, n);
      }
      {
        var _r59 = t.getNode();
        if ((e && 0 === n) || (!e && n === _r59.getTextContentSize())) {
          var _t183 = e ? _r59.getPreviousSibling() : _r59.getNextSibling();
          return null === _t183
            ? $i(
                _r59.getParentOrThrow(),
                e,
                _r59.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t183;
        }
      }
      return null;
    }
    function Wi(t) {
      var e = Xi(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function Ui(t, e, n) {
      return po(t, e, n, t);
    }
    function Yi(e, n) {
      var r = e._keyToDOMMap.get(n);
      return (void 0 === r && t(75, n), r);
    }
    function ji(t) {
      var e = t.assignedSlot || t.parentElement;
      return us(e) ? e.host : e;
    }
    function Ji(t) {
      return li(t) ? t : cs(t) ? t.ownerDocument : null;
    }
    function Hi(t) {
      no();
      io()._updateTags.add(t);
    }
    function Gi(t) {
      no();
      io()._deferred.push(t);
    }
    function Vi(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function qi(t) {
      var e = Ji(t);
      return e ? e.defaultView : null;
    }
    function Xi(e) {
      var n = e._window;
      return (null === n && t(78), n);
    }
    function Qi(t) {
      var e = t.getParentOrThrow();
      for (; null !== e; ) {
        if (Zi(e)) return e;
        e = e.getParentOrThrow();
      }
      return e;
    }
    function Zi(t) {
      return bo(t) || (vo(t) && t.isShadowRoot());
    }
    function ts(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t);
      return (
        ui(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function es(e) {
      var n = io(),
        r = e.getType(),
        o = qo(n, r);
      void 0 === o && t(200, e.constructor.name, r);
      var i = o.replace,
        s = o.replaceWithKlass;
      if (null !== i) {
        var _n82 = i(e),
          _o51 = _n82.constructor;
        return (
          null !== s
            ? _n82 instanceof s ||
              t(
                201,
                s.name,
                s.getType(),
                _o51.name,
                _o51.getType(),
                e.constructor.name,
                r,
              )
            : (_n82 instanceof e.constructor && _o51 !== e.constructor) ||
              t(202, _o51.name, _o51.getType(), e.constructor.name, r),
          _n82.__key === e.__key &&
            t(203, e.constructor.name, r, _o51.name, _o51.getType()),
          _n82
        );
      }
      return e;
    }
    function ns(e, n) {
      !bo(e.getParent()) || vo(n) || ko(n) || t(99);
    }
    function rs(e) {
      var n = _i(e);
      return (null === n && t(63, e), n);
    }
    function os(t) {
      return (ko(t) || (vo(t) && !t.canBeEmpty())) && !t.isInline();
    }
    function is(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var r = t.parentElement;
      null !== r && r.removeChild(t);
    }
    function ss(t) {
      return n ? (t || window).getSelection() : null;
    }
    function ls(t) {
      var e = qi(t);
      return e ? e.getSelection() : null;
    }
    function cs(t) {
      return as(t) && 1 === t.nodeType;
    }
    function as(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function us(t) {
      return as(t) && 11 === t.nodeType;
    }
    var fs =
      /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
    function ds(t) {
      return (
        !(!cs(t) || !t.style.display.startsWith("inline")) ||
        fs.test(t.nodeName)
      );
    }
    var hs =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function gs(t) {
      return (
        (!cs(t) || !t.style.display.startsWith("inline")) && hs.test(t.nodeName)
      );
    }
    function _s(t) {
      if (ko(t) && !t.isInline()) return !0;
      if (!vo(t) || Zi(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || Jn(e) || ur(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function ps() {
      return io();
    }
    function ys(t) {
      if (t === void 0) {
        t = ps();
      }
      return t._config.dom || Wo;
    }
    var ms = new WeakMap(),
      xs = new Map();
    function Cs(e) {
      if (!e._readOnly && e.isEmpty()) return xs;
      e._readOnly || t(192);
      var n = ms.get(e);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref23 of t._nodeMap) {
              var _n83 = _ref23[0];
              var _r60 = _ref23[1];
              {
                var _t184 = _r60.__type;
                var _o52 = e.get(_t184);
                (_o52 || ((_o52 = new Map()), e.set(_t184, _o52)),
                  _o52.set(_n83, _r60));
              }
            }
            return e;
          })(e)),
          ms.set(e, n)),
        n
      );
    }
    function Ss(t) {
      var e = t.constructor.clone(t);
      return (e.afterCloneFrom(t), e);
    }
    function Ns(t, e) {
      var n = parseInt(t.style.paddingInlineStart, 10) || 0,
        r = Math.round(n / 40);
      e.setIndent(r);
    }
    function Ts(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function vs(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function Os(t, e) {
      return (
        (function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        })(t, e) && t[e] !== _Dn5[e]
      );
    }
    function Es(e) {
      var n = R in e.prototype ? e.prototype[R]() : void 0,
        r = (function (e) {
          if (!(e === _Dn5 || e.prototype instanceof _Dn5)) {
            var _n84 = "<unknown>",
              _r61 = "<unknown>";
            try {
              _n84 = e.getType();
            } catch (t) {}
            try {
              _jo.version && (_r61 = JSON.parse(_jo.version));
            } catch (t) {}
            t(290, e.name, _n84, _r61);
          }
          return e === _Eo || e === _To4 || e === _Dn5;
        })(e),
        o = !r && Os(e, "getType") ? e.getType() : void 0;
      var i,
        s = o;
      if (n)
        if (o) i = n[o];
        else
          for (var _ref25 of Object.entries(n)) {
            var _t185 = _ref25[0];
            var _e118 = _ref25[1];
            ((s = _t185), (i = _e118));
          }
      if (
        !r &&
        s &&
        (Os(e, "getType") ||
          (e.getType = function () {
            return s;
          }),
        Os(e, "clone") ||
          (e.clone = function (t) {
            return (Ho(t), new e());
          }),
        Os(e, "importJSON") ||
          (e.importJSON =
            (i && i.$importJSON) ||
            function (t) {
              return new e().updateFromJSON(t);
            }),
        !Os(e, "importDOM") && i)
      ) {
        var _i26 = i,
          _t186 = _i26.importDOM;
        _t186 &&
          (e.importDOM = function () {
            return _t186;
          });
      }
      return { ownNodeConfig: i, ownNodeType: s };
    }
    var ks = function ks(t, e) {
      var n = t;
      for (; null != n && !bo(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function Ms(e, n) {
      var r = [];
      var o = e.__first;
      for (; null !== o; ) {
        var _e119 = null === n ? _i(o) : n.get(o);
        (null == _e119 && t(174), r.push(o), (o = _e119.__next));
      }
      return r;
    }
    var bs = { next: "previous", previous: "next" };
    var _As4 = (function () {
      function As(t) {
        this.origin = t;
      }
      var _proto16 = As.prototype;
      _proto16[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return el({
            hasNext: Ks,
            initial: this.getAdjacentCaret(),
            map: function map(t) {
              return t;
            },
            step: function step(t) {
              return t.getAdjacentCaret();
            },
          });
        };
      _proto16.getAdjacentCaret = function getAdjacentCaret() {
        return Us(this.getNodeAtCaret(), this.direction);
      };
      _proto16.getSiblingCaret = function getSiblingCaret() {
        return Us(this.origin, this.direction);
      };
      _proto16.remove = function remove() {
        var t = this.getNodeAtCaret();
        return (t && t.remove(), this);
      };
      _proto16.replaceOrInsert = function replaceOrInsert(t, e) {
        var n = this.getNodeAtCaret();
        return (
          t.is(this.origin) ||
            t.is(n) ||
            (null === n ? this.insert(t) : n.replace(t, e)),
          this
        );
      };
      _proto16.splice = function splice(e, n, r) {
        if (r === void 0) {
          r = "next";
        }
        var o = r === this.direction ? n : Array.from(n).reverse();
        var i = this;
        var s = this.getParentAtCaret(),
          l = new Map();
        for (
          var _t187 = i.getAdjacentCaret();
          null !== _t187 && l.size < e;
          _t187 = _t187.getAdjacentCaret()
        ) {
          var _e120 = _t187.origin.getWritable();
          l.set(_e120.getKey(), _e120);
        }
        for (var _e121 of o) {
          if (l.size > 0) {
            var _n85 = i.getNodeAtCaret();
            if (_n85) {
              if (
                (l["delete"](_n85.getKey()),
                l["delete"](_e121.getKey()),
                _n85.is(_e121) || i.origin.is(_e121))
              );
              else {
                var _t188 = _e121.getParent();
                (_t188 && _t188.is(s) && _e121.remove(), _n85.replace(_e121));
              }
            } else null === _n85 && t(263, Array.from(l).join(" "));
          } else i.insert(_e121);
          i = Us(_e121, this.direction);
        }
        for (var _t189 of l.values()) _t189.remove();
        return this;
      };
      return As;
    })();
    var _Ds3 = (function (_As) {
      function Ds() {
        var _this5;
        for (
          var _len6 = arguments.length, args = new Array(_len6), _key6 = 0;
          _key6 < _len6;
          _key6++
        ) {
          args[_key6] = arguments[_key6];
        }
        return (
          ((_this5 = _As.call.apply(_As, [this].concat(args)) || this),
          (_this5.type = "child"),
          babelHelpers.assertThisInitialized(_this5)) ||
          babelHelpers.assertThisInitialized(_this5)
        );
      }
      babelHelpers.inheritsLoose(Ds, _As);
      var _proto17 = Ds.prototype;
      _proto17.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Hs(t, this.direction);
      };
      _proto17.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Us(Is(this.getParentAtCaret(), t), this.direction);
      };
      _proto17.getFlipped = function getFlipped() {
        var t = Ps(this.direction);
        return Us(this.getNodeAtCaret(), t) || Hs(this.origin, t);
      };
      _proto17.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto17.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto17.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof Ds &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto17.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return Ds;
    })(_As4);
    var ws = { root: bo, shadowRoot: Zi };
    function Ps(t) {
      return bs[t];
    }
    function Is(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return ws[e](t) ? null : t;
    }
    var _Fs3 = (function (_As2) {
      function Fs() {
        var _this6;
        for (
          var _len7 = arguments.length, args = new Array(_len7), _key7 = 0;
          _key7 < _len7;
          _key7++
        ) {
          args[_key7] = arguments[_key7];
        }
        return (
          ((_this6 = _As2.call.apply(_As2, [this].concat(args)) || this),
          (_this6.type = "sibling"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(Fs, _As2);
      var _proto18 = Fs.prototype;
      _proto18.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Us(t, this.direction);
      };
      _proto18.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto18.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto18.getChildCaret = function getChildCaret() {
        return vo(this.origin) ? Hs(this.origin, this.direction) : null;
      };
      _proto18.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Us(Is(this.getParentAtCaret(), t), this.direction);
      };
      _proto18.getFlipped = function getFlipped() {
        var t = Ps(this.direction);
        return (
          Us(this.getNodeAtCaret(), t) || Hs(this.origin.getParentOrThrow(), t)
        );
      };
      _proto18.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Fs &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto18.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof Fs || t instanceof _Rs3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return Fs;
    })(_As4);
    var _Rs3 = (function (_As3) {
      function Rs(t, e) {
        var _this7;
        ((_this7 = _As3.call(this, t) || this),
          (_this7.type = "text"),
          (_this7.offset = e));
        return _this7;
      }
      babelHelpers.inheritsLoose(Rs, _As3);
      var _proto19 = Rs.prototype;
      _proto19.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Ys(t, this.direction, this.offset);
      };
      _proto19.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto19.getChildCaret = function getChildCaret() {
        return null;
      };
      _proto19.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Us(Is(this.getParentAtCaret(), t), this.direction);
      };
      _proto19.getFlipped = function getFlipped() {
        return Ys(this.origin, Ps(this.direction), this.offset);
      };
      _proto19.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Rs &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto19.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _Fs3 || t instanceof Rs) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto19.getSiblingCaret = function getSiblingCaret() {
        return Us(this.origin, this.direction);
      };
      return Rs;
    })(_As4);
    function Ls(t) {
      return t instanceof _Rs3;
    }
    function Ks(t) {
      return t instanceof _Fs3;
    }
    function Bs(t) {
      return t instanceof _Ds3;
    }
    var $s = {
        next: (function (_Rs) {
          function _class() {
            var _this8;
            for (
              var _len8 = arguments.length, args = new Array(_len8), _key8 = 0;
              _key8 < _len8;
              _key8++
            ) {
              args[_key8] = arguments[_key8];
            }
            return (
              ((_this8 = _Rs.call.apply(_Rs, [this].concat(args)) || this),
              (_this8.direction = "next"),
              babelHelpers.assertThisInitialized(_this8)) ||
              babelHelpers.assertThisInitialized(_this8)
            );
          }
          babelHelpers.inheritsLoose(_class, _Rs);
          var _proto20 = _class.prototype;
          _proto20.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto20.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_Rs3),
        previous: (function (_Rs2) {
          function _class3() {
            var _this9;
            for (
              var _len9 = arguments.length, args = new Array(_len9), _key9 = 0;
              _key9 < _len9;
              _key9++
            ) {
              args[_key9] = arguments[_key9];
            }
            return (
              ((_this9 = _Rs2.call.apply(_Rs2, [this].concat(args)) || this),
              (_this9.direction = "previous"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class3, _Rs2);
          var _proto21 = _class3.prototype;
          _proto21.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto21.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_Rs3),
      },
      zs = {
        next: (function (_Fs) {
          function _class5() {
            var _this0;
            for (
              var _len0 = arguments.length, args = new Array(_len0), _key0 = 0;
              _key0 < _len0;
              _key0++
            ) {
              args[_key0] = arguments[_key0];
            }
            return (
              ((_this0 = _Fs.call.apply(_Fs, [this].concat(args)) || this),
              (_this0.direction = "next"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class5, _Fs);
          var _proto22 = _class5.prototype;
          _proto22.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto22.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_Fs3),
        previous: (function (_Fs2) {
          function _class7() {
            var _this1;
            for (
              var _len1 = arguments.length, args = new Array(_len1), _key1 = 0;
              _key1 < _len1;
              _key1++
            ) {
              args[_key1] = arguments[_key1];
            }
            return (
              ((_this1 = _Fs2.call.apply(_Fs2, [this].concat(args)) || this),
              (_this1.direction = "previous"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class7, _Fs2);
          var _proto23 = _class7.prototype;
          _proto23.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto23.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_Fs3),
      },
      Ws = {
        next: (function (_Ds) {
          function _class9() {
            var _this10;
            for (
              var _len10 = arguments.length,
                args = new Array(_len10),
                _key10 = 0;
              _key10 < _len10;
              _key10++
            ) {
              args[_key10] = arguments[_key10];
            }
            return (
              ((_this10 = _Ds.call.apply(_Ds, [this].concat(args)) || this),
              (_this10.direction = "next"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class9, _Ds);
          var _proto24 = _class9.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_Ds3),
        previous: (function (_Ds2) {
          function _class1() {
            var _this11;
            for (
              var _len11 = arguments.length,
                args = new Array(_len11),
                _key11 = 0;
              _key11 < _len11;
              _key11++
            ) {
              args[_key11] = arguments[_key11];
            }
            return (
              ((_this11 = _Ds2.call.apply(_Ds2, [this].concat(args)) || this),
              (_this11.direction = "previous"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class1, _Ds2);
          var _proto25 = _class1.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getLastChild();
          };
          _proto25.insert = function insert(t) {
            return (
              this.origin.splice(this.origin.getChildrenSize(), 0, [t]),
              this
            );
          };
          return _class1;
        })(_Ds3),
      };
    function Us(t, e) {
      return t ? new zs[e](t) : null;
    }
    function Ys(t, e, n) {
      return t ? new $s[e](t, js(t, n)) : null;
    }
    function js(t, n, r) {
      if (r === void 0) {
        r = "error";
      }
      var o = t.getTextContentSize();
      var i = "next" === n ? o : "previous" === n ? 0 : n;
      return (
        (i < 0 || i > o) &&
          ("clamp" !== r && e(284, String(n), String(o), t.getKey()),
          (i = i < 0 ? 0 : o)),
        i
      );
    }
    function Js(t, e) {
      return new _Xs(t, e);
    }
    function Hs(t, e) {
      return vo(t) ? new Ws[e](t) : null;
    }
    function Gs(t) {
      return (t && t.getChildCaret()) || t;
    }
    function Vs(t) {
      return t && Gs(t.getAdjacentCaret());
    }
    var _qs = (function () {
      function qs(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto26 = qs.prototype;
      _proto26.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new qs(t, e, this.direction);
      };
      _proto26.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto26.getTextSlices = function getTextSlices() {
        var _this14 = this;
        var t = function t(_t190) {
            var e = _this14[_t190].getLatest();
            return Ls(e)
              ? (function (t, e) {
                  var n = t.direction,
                    r = t.origin,
                    o = js(r, "focus" === e ? Ps(n) : n);
                  return Js(t, o - t.offset);
                })(e, _t190)
              : null;
          },
          e = t("anchor"),
          n = t("focus");
        if (e && n) {
          var _t191 = e.caret,
            _r62 = n.caret;
          if (_t191.isSameNodeCaret(_r62))
            return [Js(_t191, _r62.offset - _t191.offset), null];
        }
        return [e, n];
      };
      _proto26.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = Ls(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          r = Ls(n),
          o = function o(e) {
            return e.isSameNodeCaret(n) ? null : Vs(e) || e.getParentCaret(t);
          };
        return el({
          hasNext: function hasNext(t) {
            return null !== t && !(r && n.isSameNodeCaret(t));
          },
          initial: e.isSameNodeCaret(n) ? null : o(e),
          map: function map(t) {
            return t;
          },
          step: o,
        });
      };
      _proto26[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this.iterNodeCarets("root");
        };
      return qs;
    })();
    var _Xs = (function () {
      function Xs(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto27 = Xs.prototype;
      _proto27.getSliceIndices = function getSliceIndices() {
        var t = this.distance,
          e = this.caret.offset,
          n = e + t;
        return n < e ? [n, e] : [e, n];
      };
      _proto27.getTextContent = function getTextContent() {
        var _this$getSliceIndices = this.getSliceIndices(),
          t = _this$getSliceIndices[0],
          e = _this$getSliceIndices[1];
        return this.caret.origin.getTextContent().slice(t, e);
      };
      _proto27.getTextContentSize = function getTextContentSize() {
        return Math.abs(this.distance);
      };
      _proto27.removeTextSlice = function removeTextSlice() {
        var _this$caret = this.caret,
          t = _this$caret.origin,
          e = _this$caret.direction,
          _this$getSliceIndices2 = this.getSliceIndices(),
          n = _this$getSliceIndices2[0],
          r = _this$getSliceIndices2[1],
          o = t.getTextContent();
        return Ys(t.setTextContent(o.slice(0, n) + o.slice(r)), e, n);
      };
      return Xs;
    })();
    function Qs(t) {
      return tl(t, Us(Si(), t.direction));
    }
    function Zs(t) {
      return tl(t, t);
    }
    function tl(e, n) {
      return (
        e.direction !== n.direction && t(265),
        new _qs(e, n, e.direction)
      );
    }
    function el(t) {
      var _ref26;
      var e = t.initial,
        n = t.hasNext,
        r = t.step,
        o = t.map;
      var i = e;
      return (
        (_ref26 = {}),
        (_ref26[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
          function () {
            return this;
          }),
        (_ref26.next = function next() {
          if (!n(i)) return { done: !0, value: void 0 };
          var t = { done: !1, value: o(i) };
          return ((i = r(i)), t);
        }),
        _ref26
      );
    }
    function nl(e, n) {
      var r = sl(e.origin, n.origin);
      switch (
        (null === r && t(275, e.origin.getKey(), n.origin.getKey()), r.type)
      ) {
        case "same": {
          var _t192 = "text" === e.type,
            _r63 = "text" === n.type;
          return _t192 && _r63
            ? (function (t, e) {
                return Math.sign(t - e);
              })(e.offset, n.offset)
            : e.type === n.type
              ? 0
              : _t192
                ? -1
                : _r63
                  ? 1
                  : "child" === e.type
                    ? -1
                    : 1;
        }
        case "ancestor":
          return "child" === e.type ? -1 : 1;
        case "descendant":
          return "child" === n.type ? 1 : -1;
        case "branch":
          return rl(r);
      }
    }
    function rl(t) {
      var e = t.a,
        n = t.b,
        r = e.__key,
        o = n.__key;
      var i = e,
        s = n;
      for (; i && s; i = i.getNextSibling(), s = s.getNextSibling()) {
        if (i.__key === o) return -1;
        if (s.__key === r) return 1;
      }
      return null === i ? 1 : -1;
    }
    function ol(t, e) {
      return e.is(t);
    }
    function il(t) {
      return vo(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function sl(e, n) {
      if (e.is(n)) return { commonAncestor: e, type: "same" };
      var r = new Map();
      for (
        var _il = il(e), _t193 = _il[0], _n86 = _il[1];
        _t193;
        _n86 = _t193, _t193 = _t193.getParent()
      )
        r.set(_t193, _n86);
      for (
        var _il2 = il(n), _o53 = _il2[0], _i27 = _il2[1];
        _o53;
        _i27 = _o53, _o53 = _o53.getParent()
      ) {
        var _s16 = r.get(_o53);
        if (void 0 !== _s16)
          return null === _s16
            ? (ol(e, _o53) || t(276),
              { commonAncestor: _o53, type: "ancestor" })
            : null === _i27
              ? (ol(n, _o53) || t(277),
                { commonAncestor: _o53, type: "descendant" })
              : (((vo(_s16) || ol(e, _s16)) &&
                  (vo(_i27) || ol(n, _i27)) &&
                  _o53.is(_s16.getParent()) &&
                  _o53.is(_i27.getParent())) ||
                  t(278),
                { a: _s16, b: _i27, commonAncestor: _o53, type: "branch" });
      }
      return null;
    }
    function ll(e, n) {
      var r = e.type,
        o = e.key,
        i = e.offset,
        s = rs(e.key);
      return "text" === r
        ? (ur(s) || t(266, s.getType(), o), Ys(s, n, i))
        : (vo(s) || t(267, s.getType(), o), Cl(s, e.offset, n));
    }
    function cl(e, n) {
      var r = n.origin,
        o = n.direction,
        i = "next" === o;
      Ls(n)
        ? e.set(r.getKey(), n.offset, "text")
        : Ks(n)
          ? ur(r)
            ? e.set(r.getKey(), js(r, o), "text")
            : e.set(
                r.getParentOrThrow().getKey(),
                r.getIndexWithinParent() + (i ? 1 : 0),
                "element",
              )
          : ((Bs(n) && vo(r)) || t(268),
            e.set(r.getKey(), i ? 0 : r.getChildrenSize(), "element"));
    }
    function al(t) {
      var e = Lr(),
        n = Cr(e) ? e : Ir();
      return (ul(n, t), Ti(n), n);
    }
    function ul(t, e) {
      (cl(t.anchor, e.anchor), cl(t.focus, e.focus));
    }
    function fl(t) {
      var e = t.anchor,
        n = t.focus,
        r = ll(e, "next"),
        o = ll(n, "next"),
        i = nl(r, o) <= 0 ? "next" : "previous";
      return tl(ml(r, i), ml(o, i));
    }
    function dl(t) {
      var e = t.direction,
        n = t.origin,
        r = Us(n, Ps(e)).getNodeAtCaret();
      return r ? Us(r, e) : Hs(n.getParentOrThrow(), e);
    }
    function hl(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _r64 = Bs(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _r64;
        _r64 = _r64.getParentCaret(e)
      )
        n.push(dl(_r64));
      return n;
    }
    function gl(t) {
      return !!t && t.origin.isAttached();
    }
    function _l(e, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (e.isCollapsed()) return e;
      var r = "root",
        o = "next";
      var i = n;
      var s = xl(e, o),
        l = hl(s.anchor, r),
        c = hl(s.focus.getFlipped(), r),
        a = new Set(),
        u = [];
      for (var _t194 of s.iterNodeCarets(r))
        if (Bs(_t194)) a.add(_t194.origin.getKey());
        else if (Ks(_t194)) {
          var _e122 = _t194.origin;
          (vo(_e122) && !a.has(_e122.getKey())) || u.push(_e122);
        }
      for (var _t195 of u) _t195.remove();
      for (var _t196 of s.getTextSlices()) {
        if (!_t196) continue;
        var _e123 = _t196.caret.origin,
          _n87 = _e123.getTextContentSize(),
          _r65 = dl(Us(_e123, o)),
          _s17 = _e123.getMode();
        if (
          (Math.abs(_t196.distance) === _n87 && "removeEmptySlices" === i) ||
          ("token" === _s17 && 0 !== _t196.distance)
        )
          _r65.remove();
        else if (0 !== _t196.distance) {
          i = "removeEmptySlices";
          var _e124 = _t196.removeTextSlice();
          var _n88 = _t196.caret.origin;
          if ("segmented" === _s17) {
            var _t197 = _e124.origin,
              _n89 = ar(_t197.getTextContent())
                .setStyle(_t197.getStyle())
                .setFormat(_t197.getFormat());
            (_r65.replaceOrInsert(_n89), (_e124 = Ys(_n89, o, _e124.offset)));
          }
          (_n88.is(l[0].origin) && (l[0] = _e124),
            _n88.is(c[0].origin) && (c[0] = _e124.getFlipped()));
        }
      }
      var f, d;
      for (var _t198 of l)
        if (gl(_t198)) {
          f = pl(_t198);
          break;
        }
      for (var _t199 of c)
        if (gl(_t199)) {
          d = pl(_t199);
          break;
        }
      var h = (function (t, e, n) {
        if (!t || !e) return null;
        var r = t.getParentAtCaret(),
          o = e.getParentAtCaret();
        if (!r || !o) return null;
        var i = r.getParents().reverse();
        i.push(r);
        var s = o.getParents().reverse();
        s.push(o);
        var l = Math.min(i.length, s.length);
        var c;
        for (c = 0; c < l && i[c] === s[c]; c++);
        var a = function a(t, e) {
            var n;
            for (var _r66 = c; _r66 < t.length; _r66++) {
              var _o54 = t[_r66];
              if (Zi(_o54)) return;
              !n && e(_o54) && (n = _o54);
            }
            return n;
          },
          u = a(i, _s),
          f =
            u &&
            a(s, function (t) {
              return n.has(t.getKey()) && _s(t);
            });
        return u && f ? [u, f] : null;
      })(f, d, a);
      if (h) {
        var _t200 = h[0],
          _e125 = h[1];
        Hs(_t200, "previous").splice(0, _e125.getChildren());
        var _n90 = _e125.getParent();
        for (_e125.remove(!0); _n90 && _n90.isEmpty(); ) {
          var _t201 = _n90;
          ((_n90 = _n90.getParent()), _t201.remove(!0));
        }
      }
      var g = [f, d].concat(l, c).find(gl);
      if (g) {
        return Zs(ml(pl(g), e.direction));
      }
      t(
        269,
        JSON.stringify(
          l.map(function (t) {
            return t.origin.__key;
          }),
        ),
      );
    }
    function pl(t) {
      var e = (function (t) {
          var e = t;
          for (; Bs(e); ) {
            var _t202 = Vs(e);
            if (!Bs(_t202)) break;
            e = _t202;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (ur(e.origin)) return Ls(e) ? e : Ys(e.origin, n, n);
      var r = e.getAdjacentCaret();
      return Ks(r) && ur(r.origin) ? Ys(r.origin, n, Ps(n)) : e;
    }
    function yl(t) {
      return Ls(t) && t.offset !== js(t.origin, t.direction);
    }
    function ml(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function xl(t, e) {
      return t.direction === e ? t : tl(ml(t.focus, e), ml(t.anchor, e));
    }
    function Cl(t, e, n) {
      var r = Hs(t, "next");
      for (var _t203 = 0; _t203 < e; _t203++) {
        var _t204 = r.getAdjacentCaret();
        if (null === _t204) break;
        r = _t204;
      }
      return ml(r, n);
    }
    function Sl(e) {
      var n = e.origin,
        r = e.offset,
        o = e.direction;
      if (r === js(n, o)) return e.getSiblingCaret();
      if (r === js(n, Ps(o))) return dl(e.getSiblingCaret());
      var _n$splitText2 = n.splitText(r),
        i = _n$splitText2[0];
      return (ur(i) || t(281), ml(Us(i, "next"), o));
    }
    function Nl(t, e) {
      return !0;
    }
    function Tl() {
      var e = [];
      for (
        var _len12 = arguments.length, t = new Array(_len12), _key12 = 0;
        _key12 < _len12;
        _key12++
      ) {
        t[_key12] = arguments[_key12];
      }
      for (var _n91 of t)
        if (_n91 && "string" == typeof _n91)
          for (var _ref28 of _n91.matchAll(/\S+/g)) {
            var _t205 = _ref28[0];
            e.push(_t205);
          }
      return e;
    }
    function vl() {
      for (
        var _len13 = arguments.length, t = new Array(_len13), _key13 = 0;
        _key13 < _len13;
        _key13++
      ) {
        t[_key13] = arguments[_key13];
      }
      return function () {
        for (var _e126 = t.length - 1; _e126 >= 0; _e126--) t[_e126]();
        t.length = 0;
      };
    }
    ((exports.$addUpdateTag = Hi),
      (exports.$applyNodeReplacement = es),
      (exports.$caretFromPoint = ll),
      (exports.$caretRangeFromSelection = fl),
      (exports.$cloneWithProperties = Ss),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = Ss(t))[bn] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = nl),
      (exports.$copyNode = ts),
      (exports.$create = function (t) {
        var e = ps();
        return (
          no(),
          new (e.resolveRegisteredNodeAfterReplacements(
            e.getRegisteredNode(t),
          ).klass)()
        );
      }),
      (exports.$createChildrenArray = Ms),
      (exports.$createLineBreakNode = jn),
      (exports.$createNodeSelection = Fr),
      (exports.$createParagraphNode = Lo),
      (exports.$createPoint = pr),
      (exports.$createRangeSelection = Ir),
      (exports.$createRangeSelectionFromDom = function (t, e) {
        return Rr(null, t, e, null);
      }),
      (exports.$createTabNode = hr),
      (exports.$createTextNode = ar),
      (exports.$extendCaretToRange = Qs),
      (exports.$findMatchingParent = ks),
      (exports.$getAdjacentChildCaret = Vs),
      (exports.$getAdjacentNode = zi),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          r = t,
          o = Vs(r);
        for (; null === o; ) {
          if ((n--, (o = r.getParentCaret(e)), !o)) return null;
          ((r = o), (o = Vs(r)));
        }
        return o && [o, n];
      }),
      (exports.$getCaretInDirection = ml),
      (exports.$getCaretRange = tl),
      (exports.$getCaretRangeInDirection = xl),
      (exports.$getCharacterOffsets = vr),
      (exports.$getChildCaret = Hs),
      (exports.$getChildCaretAtIndex = Cl),
      (exports.$getChildCaretOrSelf = Gs),
      (exports.$getCollapsedCaretRange = Zs),
      (exports.$getCommonAncestor = sl),
      (exports.$getCommonAncestorResultBranchOrder = rl),
      (exports.$getEditor = ps),
      (exports.$getEditorDOMRenderConfig = ys),
      (exports.$getNearestNodeFromDOMNode = mi),
      (exports.$getNearestRootOrShadowRoot = Qi),
      (exports.$getNodeByKey = _i),
      (exports.$getNodeByKeyOrThrow = rs),
      (exports.$getNodeFromDOMNode = pi),
      (exports.$getPreviousSelection = Kr),
      (exports.$getRoot = Si),
      (exports.$getSelection = Lr),
      (exports.$getSiblingCaret = Us),
      (exports.$getState = q),
      (exports.$getStateChange = function (t, e, n) {
        var r = q(t, n, "direct"),
          o = q(e, n, "direct");
        return n.isEqual(r, o) ? null : [r, o];
      }),
      (exports.$getTextContent = function () {
        var t = Lr();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = js),
      (exports.$getTextPointCaret = Ys),
      (exports.$getTextPointCaretSlice = Js),
      (exports.$getWritableNodeState = Z),
      (exports.$hasAncestor = Vi),
      (exports.$hasUpdateTag = function (t) {
        return io()._updateTags.has(t);
      }),
      (exports.$insertNodes = function (t) {
        var e = Lr() || Kr();
        (null === e && (e = Si().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = wr),
      (exports.$isChildCaret = Bs),
      (exports.$isDecoratorNode = ko),
      (exports.$isEditorState = function (t) {
        return t instanceof _Po;
      }),
      (exports.$isElementNode = vo),
      (exports.$isExtendableTextPointCaret = yl),
      (exports.$isInlineElementOrDecoratorNode = function (t) {
        return (vo(t) && t.isInline()) || (ko(t) && t.isInline());
      }),
      (exports.$isLeafNode = function (t) {
        return ur(t) || Jn(t) || ko(t);
      }),
      (exports.$isLexicalNode = function (t) {
        return t instanceof _Dn5;
      }),
      (exports.$isLineBreakNode = Jn),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _As4;
      }),
      (exports.$isNodeSelection = Nr),
      (exports.$isParagraphNode = Ko),
      (exports.$isRangeSelection = Cr),
      (exports.$isRootNode = bo),
      (exports.$isRootOrShadowRoot = Zi),
      (exports.$isSiblingCaret = Ks),
      (exports.$isTabNode = gr),
      (exports.$isTextNode = ur),
      (exports.$isTextPointCaret = Ls),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _Xs;
      }),
      (exports.$isTokenOrSegmented = ii),
      (exports.$isTokenOrTab = oi),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = oo();
        if (n._readOnly) {
          var _t206 = Cs(n).get(e);
          return _t206 ? Array.from(_t206.values()) : [];
        }
        var r = n._nodeMap,
          o = [];
        for (var _ref30 of r) {
          var _n92 = _ref30[1];
          _n92 instanceof t &&
            _n92.__type === e &&
            _n92.isAttached() &&
            o.push(_n92);
        }
        return o;
      }),
      (exports.$normalizeCaret = pl),
      (exports.$normalizeSelection__EXPERIMENTAL = at),
      (exports.$onUpdate = Gi),
      (exports.$parseSerializedNode = function (t) {
        return fo(t, io()._nodes);
      }),
      (exports.$removeTextFromCaretRange = _l),
      (exports.$rewindSiblingCaret = dl),
      (exports.$selectAll = function (t) {
        var e = Si();
        if (Cr(t)) {
          var _e127 = t.anchor,
            _n93 = t.focus,
            _r67 = _e127
              .getNode()
              .getTopLevelElementOrThrow()
              .getParentOrThrow();
          return (
            _e127.set(_r67.getKey(), 0, "element"),
            _n93.set(_r67.getKey(), _r67.getChildrenSize(), "element"),
            at(t),
            t
          );
        }
        {
          var _t207 = e.select(0, e.getChildrenSize());
          return (Ti(at(_t207)), _t207);
        }
      }),
      (exports.$setCompositionKey = hi),
      (exports.$setDirectionFromDOM = Ts),
      (exports.$setPointFromCaret = cl),
      (exports.$setSelection = Ti),
      (exports.$setSelectionFromCaretRange = al),
      (exports.$setState = function (t, e, n) {
        var r;
        if ((no(), "function" == typeof n)) {
          var _o55 = t.getLatest(),
            _i28 = q(_o55, e);
          if (((r = n(_i28)), e.isEqual(_i28, r))) return _o55;
        } else r = n;
        var o = t.getWritable();
        return (Z(o).updateFromKnown(e, r), o);
      }),
      (exports.$splitAtPointCaretNext = function (t, _temp) {
        var _ref31 = _temp === void 0 ? {} : _temp,
          _ref31$$copyElementNo = _ref31.$copyElementNode,
          e = _ref31$$copyElementNo === void 0 ? ts : _ref31$$copyElementNo,
          _ref31$$splitTextPoin = _ref31.$splitTextPointCaretNext,
          n = _ref31$$splitTextPoin === void 0 ? Sl : _ref31$$splitTextPoin,
          _ref31$rootMode = _ref31.rootMode,
          r = _ref31$rootMode === void 0 ? "shadowRoot" : _ref31$rootMode,
          _ref31$$shouldSplit = _ref31.$shouldSplit,
          o = _ref31$$shouldSplit === void 0 ? Nl : _ref31$$shouldSplit,
          _ref31$removeEmptyDes = _ref31.removeEmptyDestination,
          i = _ref31$removeEmptyDes === void 0 ? !1 : _ref31$removeEmptyDes;
        if (Ls(t)) return n(t);
        var s = t.getParentCaret(r);
        if (s) {
          var _n94 = s.origin;
          if (Bs(t)) {
            var _t208 = dl(s);
            if (i && _n94.isEmpty()) return (_n94.remove(), _t208);
            if (!_n94.canBeEmpty() || !o(_n94, "first")) return _t208;
          }
          var _r68 = (function (t) {
            var e = [];
            for (
              var _n95 = t.getAdjacentCaret();
              _n95;
              _n95 = _n95.getAdjacentCaret()
            )
              e.push(_n95.origin);
            return e;
          })(t);
          (_r68.length > 0 || (!i && _n94.canBeEmpty() && o(_n94, "last"))) &&
            s.insert(e(_n94).splice(0, 0, _r68));
        }
        return s;
      }),
      (exports.$splitNode = function (e, n) {
        var r = e.getChildAtIndex(n);
        (null == r && (r = e), Zi(e) && t(102));
        var _o58 = function o(e) {
            var n = e.getParentOrThrow(),
              i = Zi(n),
              s = e !== r || i ? ts(e) : e;
            if (i)
              return ((vo(e) && vo(s)) || t(133), e.insertAfter(s), [e, s, s]);
            {
              var _o57 = _o58(n),
                _t209 = _o57[0],
                _r69 = _o57[1],
                _i29 = _o57[2],
                _l13 = e.getNextSiblings();
              return (
                _i29.append.apply(_i29, [s].concat(_l13)),
                [_t209, _r69, s]
              );
            }
          },
          _o56 = _o58(r),
          i = _o56[0],
          s = _o56[1];
        return [i, s];
      }),
      (exports.$updateRangeSelectionFromCaretRange = ul),
      (exports.ArtificialNode__DO_NOT_USE = _Io),
      (exports.BEFORE_INPUT_COMMAND = Vt),
      (exports.BLUR_COMMAND = Be),
      (exports.CAN_REDO_COMMAND = Re),
      (exports.CAN_UNDO_COMMAND = Le),
      (exports.CLEAR_EDITOR_COMMAND = Ie),
      (exports.CLEAR_HISTORY_COMMAND = Fe),
      (exports.CLICK_COMMAND = Gt),
      (exports.COLLABORATION_TAG = Pn),
      (exports.COMMAND_PRIORITY_BEFORE_CRITICAL = -4),
      (exports.COMMAND_PRIORITY_BEFORE_EDITOR = -8),
      (exports.COMMAND_PRIORITY_BEFORE_HIGH = -5),
      (exports.COMMAND_PRIORITY_BEFORE_LOW = -7),
      (exports.COMMAND_PRIORITY_BEFORE_NORMAL = -6),
      (exports.COMMAND_PRIORITY_CRITICAL = 4),
      (exports.COMMAND_PRIORITY_EDITOR = Bo),
      (exports.COMMAND_PRIORITY_HIGH = 3),
      (exports.COMMAND_PRIORITY_LOW = 1),
      (exports.COMMAND_PRIORITY_NORMAL = 2),
      (exports.COMPOSITION_END_COMMAND = Qt),
      (exports.COMPOSITION_END_TAG = Kn),
      (exports.COMPOSITION_START_COMMAND = Xt),
      (exports.COMPOSITION_START_TAG = Ln),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = ne),
      (exports.COPY_COMMAND = De),
      (exports.CUT_COMMAND = we),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = Wo),
      (exports.DELETE_CHARACTER_COMMAND = Zt),
      (exports.DELETE_LINE_COMMAND = se),
      (exports.DELETE_WORD_COMMAND = ie),
      (exports.DRAGEND_COMMAND = Ae),
      (exports.DRAGOVER_COMMAND = be),
      (exports.DRAGSTART_COMMAND = Me),
      (exports.DROP_COMMAND = Ee),
      (exports.DecoratorNode = _Eo),
      (exports.ElementNode = _To4),
      (exports.FOCUS_COMMAND = Ke),
      (exports.FORMAT_ELEMENT_COMMAND = ke),
      (exports.FORMAT_TEXT_COMMAND = le),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = wn),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = ve),
      (exports.INPUT_COMMAND = qt),
      (exports.INSERT_LINE_BREAK_COMMAND = te),
      (exports.INSERT_PARAGRAPH_COMMAND = ee),
      (exports.INSERT_TAB_COMMAND = Te),
      (exports.INTERNAL_$isBlock = _s),
      (exports.IS_ALL_FORMATTING = 2047),
      (exports.IS_BOLD = 1),
      (exports.IS_CODE = 16),
      (exports.IS_HIGHLIGHT = p),
      (exports.IS_ITALIC = 2),
      (exports.IS_STRIKETHROUGH = 4),
      (exports.IS_SUBSCRIPT = 32),
      (exports.IS_SUPERSCRIPT = 64),
      (exports.IS_UNDERLINE = 8),
      (exports.KEY_ARROW_DOWN_COMMAND = pe),
      (exports.KEY_ARROW_LEFT_COMMAND = he),
      (exports.KEY_ARROW_RIGHT_COMMAND = fe),
      (exports.KEY_ARROW_UP_COMMAND = _e),
      (exports.KEY_BACKSPACE_COMMAND = xe),
      (exports.KEY_DELETE_COMMAND = Se),
      (exports.KEY_DOWN_COMMAND = ue),
      (exports.KEY_ENTER_COMMAND = ye),
      (exports.KEY_ESCAPE_COMMAND = Ce),
      (exports.KEY_MODIFIER_COMMAND = $e),
      (exports.KEY_SPACE_COMMAND = me),
      (exports.KEY_TAB_COMMAND = Ne),
      (exports.LineBreakNode = _Un),
      (exports.MOVE_TO_END = de),
      (exports.MOVE_TO_START = ge),
      (exports.NODE_STATE_KEY = "$"),
      (exports.OUTDENT_CONTENT_COMMAND = Oe),
      (exports.PASTE_COMMAND = re),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _Fo),
      (exports.REDO_COMMAND = ae),
      (exports.REMOVE_TEXT_COMMAND = oe),
      (exports.RootNode = _Mo),
      (exports.SELECTION_CHANGE_COMMAND = Jt),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = Ht),
      (exports.SELECT_ALL_COMMAND = Pe),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = Fn),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = In),
      (exports.SKIP_SELECTION_FOCUS_TAG = Rn),
      (exports.TEXT_TYPE_TO_FORMAT = A),
      (exports.TabNode = _dr),
      (exports.TextNode = _tr2),
      (exports.UNDO_COMMAND = ce),
      (exports.addClassNamesToElement = function (t) {
        var _t$classList2;
        for (
          var _len14 = arguments.length,
            e = new Array(_len14 > 1 ? _len14 - 1 : 0),
            _key14 = 1;
          _key14 < _len14;
          _key14++
        ) {
          e[_key14 - 1] = arguments[_key14];
        }
        var n = Tl.apply(void 0, e);
        n.length > 0 &&
          (_t$classList2 = t.classList).add.apply(_t$classList2, n);
      }),
      (exports.buildImportMap = function (t) {
        return t;
      }),
      (exports.configExtension = function () {
        for (
          var _len15 = arguments.length, t = new Array(_len15), _key15 = 0;
          _key15 < _len15;
          _key15++
        ) {
          t[_key15] = arguments[_key15];
        }
        return t;
      }),
      (exports.createCommand = jt),
      (exports.createEditor = function (t) {
        var e = t || {},
          n = lo(),
          r = e.theme || {},
          o = void 0 === t ? n : e.parentEditor || null,
          i = e.disableEvents || !1,
          s = Do(),
          l = e.namespace || (null !== o ? o._config.namespace : ki()),
          c = e.editorState,
          a = [_Mo, _tr2, _Un, _dr, _Fo, _Io].concat(e.nodes || []),
          u = e.onError,
          f = e.html,
          d = void 0 === e.editable || e.editable;
        var h;
        if (void 0 === t && null !== n) h = n._nodes;
        else {
          h = new Map();
          for (var _t210 = 0; _t210 < a.length; _t210++) {
            var _e128 = a[_t210],
              _n96 = null,
              _r70 = null;
            if ("function" != typeof _e128) {
              var _t211 = _e128;
              ((_e128 = _t211.replace),
                (_n96 = _t211["with"]),
                (_r70 = _t211.withKlass || null));
            }
            Es(_e128);
            var _o59 = _e128.getType(),
              _i30 = zo(_e128);
            h.set(_o59, {
              exportDOM: f && f["export"] ? f["export"].get(_e128) : void 0,
              klass: _e128,
              replace: _n96,
              replaceWithKlass: _r70,
              sharedNodeState: X(a[_t210]),
              transforms: _i30,
            });
          }
        }
        var g = new _jo(
          s,
          o,
          h,
          {
            disableEvents: i,
            dom: babelHelpers["extends"]({}, Wo, t && t.dom),
            namespace: l,
            theme: r,
          },
          u || console.error,
          (function (t, e) {
            var n = new Map(),
              r = new Set(),
              o = function o(t) {
                Object.keys(t).forEach(function (e) {
                  var r = n.get(e);
                  (void 0 === r && ((r = []), n.set(e, r)), r.push(t[e]));
                });
              };
            return (
              t.forEach(function (t) {
                var e = t.klass.importDOM;
                if (null == e || r.has(e)) return;
                r.add(e);
                var n = e.call(t.klass);
                null !== n && o(n);
              }),
              e && o(e),
              n
            );
          })(h, f ? f["import"] : void 0),
          d,
          t,
        );
        return (
          void 0 !== c && ((g._pendingEditorState = c), (g._dirtyType = 2)),
          (function (t) {
            (t.registerCommand(Vt, _n, Bo),
              t.registerCommand(qt, pn, Bo),
              t.registerCommand(Xt, yn, Bo),
              t.registerCommand(Qt, mn, Bo),
              t.registerCommand(ue, Cn, Bo));
          })(g),
          g
        );
      }),
      (exports.createSharedNodeState = X),
      (exports.createState = function (t, e) {
        return new V(t, e);
      }),
      (exports.declarePeerDependency = function (t, e) {
        return [t, e];
      }),
      (exports.defineExtension = function (t) {
        return t;
      }),
      (exports.flipDirection = Ps),
      (exports.getDOMOwnerDocument = Ji),
      (exports.getDOMSelection = ss),
      (exports.getDOMSelectionFromTarget = ls),
      (exports.getDOMTextNode = ci),
      (exports.getEditorPropertyFromDOMNode = ri),
      (exports.getNearestEditorFromDOMNode = ni),
      (exports.getRegisteredNode = qo),
      (exports.getRegisteredNodeOrThrow = Vo),
      (exports.getStaticNodeConfig = Es),
      (exports.getStyleObjectFromCSS = $n),
      (exports.getTextDirection = function (t) {
        return M.test(t) ? "rtl" : b.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = zo),
      (exports.isBlockDomNode = gs),
      (exports.isCurrentlyReadOnlyMode = eo),
      (exports.isDOMDocumentNode = li),
      (exports.isDOMNode = as),
      (exports.isDOMTextNode = si),
      (exports.isDOMUnmanaged = vs),
      (exports.isDocumentFragment = us),
      (exports.isExactShortcutMatch = Ii),
      (exports.isHTMLAnchorElement = function (t) {
        return cs(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = cs),
      (exports.isInlineDomNode = ds),
      (exports.isLexicalEditor = ei),
      (exports.isModifierMatch = Pi),
      (exports.isSelectionCapturedInDecoratorInput = Zo),
      (exports.isSelectionWithinEditor = ti),
      (exports.makeStepwiseIterator = el),
      (exports.mergeRegister = vl),
      (exports.normalizeClassNames = Tl),
      (exports.removeClassNamesFromElement = function (t) {
        var _t$classList3;
        for (
          var _len16 = arguments.length,
            e = new Array(_len16 > 1 ? _len16 - 1 : 0),
            _key16 = 1;
          _key16 < _len16;
          _key16++
        ) {
          e[_key16 - 1] = arguments[_key16];
        }
        var n = Tl.apply(void 0, e);
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(_t$classList3, n);
      }),
      (exports.removeFromParent = fi),
      (exports.resetRandomKey = function () {
        Go = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = Wn),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n97 in e) {
          var _r71 = e[_n97];
          null == _r71 ? t.removeProperty(_n97) : zn(t, _n97, _r71);
        }
      }),
      (exports.setDOMUnmanaged = function (t) {
        t.__lexicalUnmanaged = !0;
      }),
      (exports.setNodeIndentFromDOM = Ns),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n98 in e)
          if (t[_n98] !== e[_n98]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.toggleTextFormatType = ai));
  },
  null,
);
