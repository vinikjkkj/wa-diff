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
          (mo(s) && K(s, _t4, n, r, o, i),
          n.has(_t4) || i["delete"](_t4),
          o.push(_t4)),
          (s = s.getNextSibling()));
      }
    }
    var $ = !1,
      B = 0;
    function z(t) {
      B = t.timeStamp;
    }
    function W(t, e, n) {
      var r = "BR" === t.nodeName,
        o = e.__lexicalLineBreak;
      return (
        (o && (t === o || (r && t.previousSibling === o))) ||
        (r && void 0 !== fi(t, n))
      );
    }
    function U(t, e, n) {
      var r = es(Ji(n));
      var o = null,
        i = null;
      null !== r &&
        r.anchorNode === t &&
        ((o = r.anchorOffset), (i = r.focusOffset));
      var s = t.nodeValue;
      null !== s && vi(e, s, o, i, !1);
    }
    function Y(t, e, n) {
      if (_r(t)) {
        var _e3 = t.anchor.getNode();
        if (_e3.is(n) && t.format !== _e3.getFormat()) return !1;
      }
      return ti(e) && n.isAttached();
    }
    function j(t, e, n, r) {
      for (var _o2 = t; _o2 && !ys(_o2); _o2 = Bi(_o2)) {
        var _t5 = fi(_o2, e);
        if (void 0 !== _t5) {
          var _e4 = ai(_t5, n);
          if (_e4) return So(_e4) || !rs(_o2) ? void 0 : [_o2, _e4];
        } else if (_o2 === r) return [r, pi(n)];
      }
    }
    function J(t, e, n) {
      $ = !0;
      var r = performance.now() - B > 100;
      try {
        go(t, function () {
          var o =
              Dr() ||
              (function (t) {
                return t.getEditorState().read(function () {
                  var t = Dr();
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
              r && ir(_y) && ti(_g) && Y(o, _g, _y) && U(_g, _y, t);
            else if ("childList" === _h) {
              u = !0;
              var _e5 = _d.addedNodes;
              for (var _n3 = 0; _n3 < _e5.length; _n3++) {
                var _r2 = _e5[_n3],
                  _o3 = ui(_r2),
                  _s2 = _r2.parentNode;
                if (
                  null != _s2 &&
                  _r2 !== a &&
                  null === _o3 &&
                  !W(_r2, _s2, t)
                ) {
                  if (i) {
                    var _t6 = (rs(_r2) ? _r2.innerText : null) || _r2.nodeValue;
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
          null !== o && (u && yi(o), i && Li(t) && o.insertRawText(f));
        });
      } finally {
        $ = !1;
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
        0 === B && Ji(t).addEventListener("textInput", z, !0);
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
        var _xs = xs(_r6),
          _t7 = _xs.ownNodeConfig;
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
        : Uo(as(), t.getType()).sharedNodeState;
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
        r = Zr()._normalizedNodes;
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
          ir(e) &&
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
          ir(n) &&
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
          ir(_r9))
        ) {
          t.set(_r9.__key, _o9 ? _r9.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!mo(_r9)) break;
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
      var n = yt.get(t);
      if (null !== e) {
        var _n12 = Yt(t);
        _n12.parentNode === e && e.removeChild(_n12);
      }
      if ((mt.has(t) || dt._keyToDOMMap["delete"](t), mo(n))) {
        var _t1 = Ss(n, yt);
        Mt(_t1, 0, _t1.length - 1, null);
      }
      void 0 !== n && Ii(Ct, ht, gt, n, "destroyed");
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
        if (To(t)) return null;
        var n = t.getParentOrThrow();
        return To(n) && null === n.__dir ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function It(e, n) {
      var r = mt.get(e);
      void 0 === r && t(60);
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
        ir(r)
          ? o.setAttribute("data-lexical-text", "true")
          : So(r) && o.setAttribute("data-lexical-decorator", "true"),
        mo(r))
      ) {
        var _t10 = r.__indent,
          _e17 = r.__size;
        if ((Pt(o, r), 0 !== _t10 && Dt(o, _t10), 0 !== _e17)) {
          var _t11 = _e17 - 1;
          Ft(Ss(r, mt), r, 0, _t11, St.$getDOMSlot(r, o, dt));
        }
        var _n13 = r.__format;
        (0 !== _n13 && wt(o, _n13), r.isInline() || Lt(null, r, o));
      } else {
        var _t12 = r.getTextContent();
        if (So(r)) {
          var _t13 = r.decorate(dt, ft);
          (null !== _t13 && Bt(e, _t13), (o.contentEditable = "false"));
        }
        Nt += _t12;
      }
      return (
        null !== n && n.insertChild(o),
        St.$decorateDOM(r, null, o, dt),
        Ii(Ct, ht, gt, r, "created"),
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
        null !== _e18 && ir(_e18)
          ? null === Tt && ((Tt = _e18.getFormat()), (vt = _e18.getStyle()))
          : mo(_e18) && s < r && !_e18.isInline() && (Nt += v);
      }
      ((o.element.__lexicalTextContent = Nt), (Nt = i + Nt));
    }
    function Rt(t, e) {
      if (t) {
        var _n14 = t.__last;
        if (_n14) {
          var _t14 = e.get(_n14);
          if (_t14)
            return zn(_t14)
              ? "line-break"
              : So(_t14) && _t14.isInline()
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
            var _t15 = e.__first,
              _r1 = n.__first;
            if (_t15 === _r1) $t(_t15, l);
            else {
              var _e19 = Yt(_t15),
                _n15 = It(_r1, null);
              try {
                l.replaceChild(_n15, _e19);
              } catch (o) {
                if ("object" == typeof o && null != o) {
                  var _i4 =
                    o.toString() +
                    " Parent: " +
                    l.tagName +
                    ", new child: {tag: " +
                    _n15.tagName +
                    " key: " +
                    _r1 +
                    "}, old child: {tag: " +
                    _e19.tagName +
                    ", key: " +
                    _t15 +
                    "}.";
                  throw new Error(_i4);
                }
                throw o;
              }
              kt(_t15, null);
            }
            var _o1 = mt.get(_r1);
            ir(_o1) &&
              null === Tt &&
              ((Tt = _o1.getFormat()), (vt = _o1.getStyle()));
          } else {
            var _o10 = Ss(e, yt),
              _c = Ss(n, mt);
            if (
              (_o10.length !== i && t(227), _c.length !== s && t(228), 0 === i)
            )
              0 !== s && Ft(_c, 0, 0, s - 1, r);
            else if (0 === s) {
              if (0 !== i) {
                var _t16 =
                  null == r.after &&
                  null == r.before &&
                  null == r.element.__lexicalLineBreak;
                (Mt(_o10, 0, i - 1, _t16 ? null : l),
                  _t16 && (l.textContent = ""));
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
                  var _t17 = e[f],
                    _r10 = n[d];
                  if (_t17 === _r10) ((u = zt($t(_r10, i.element))), f++, d++);
                  else {
                    if ((void 0 === a && (a = Wt(n, d)), void 0 === c))
                      c = Wt(e, f);
                    else if (!c.has(_t17)) {
                      f++;
                      continue;
                    }
                    if (!a.has(_t17)) {
                      ((u = zt(Yt(_t17))),
                        kt(_t17, i.element),
                        f++,
                        c["delete"](_t17));
                      continue;
                    }
                    if (c.has(_r10)) {
                      var _t18 = $i(dt, _r10);
                      (_t18 !== u && i.withBefore(u).insertChild(_t18),
                        (u = zt($t(_r10, i.element))),
                        f++,
                        d++);
                    } else (It(_r10, i.withBefore(u)), d++);
                  }
                  var _o11 = mt.get(_r10);
                  null !== _o11 && ir(_o11)
                    ? null === Tt &&
                      ((Tt = _o11.getFormat()), (vt = _o11.getStyle()))
                    : mo(_o11) && d <= l && !_o11.isInline() && (Nt += v);
                }
                var h = f > s,
                  g = d > l;
                if (h && !g) {
                  var _t19 = n[l + 1],
                    _e20 = void 0 === _t19 ? null : dt.getElementByKey(_t19);
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
    function $t(e, n) {
      var r = yt.get(e);
      var o = mt.get(e);
      (void 0 !== r && void 0 !== o) || t(61);
      var i = Ot || pt.has(e) || _t.has(e),
        s = $i(dt, e);
      if (r === o && !i) {
        var _t20;
        if (mo(r)) {
          var _e21 = s.__lexicalTextContent;
          "string" == typeof _e21
            ? (_t20 = _e21)
            : ((_t20 = r.getTextContent()), (s.__lexicalTextContent = _t20));
        } else _t20 = r.getTextContent();
        return ((Nt += _t20), s);
      }
      if (
        (r !== o && i && Ii(Ct, ht, gt, o, "updated"),
        St.$updateDOM(o, r, s, dt))
      ) {
        var _r11 = It(e, null);
        return (
          null === n && t(62),
          n.replaceChild(_r11, s),
          kt(e, null),
          _r11
        );
      }
      if (mo(r)) {
        mo(o) || t(334, e);
        var _n16 = o.__indent;
        (Ot || _n16 !== r.__indent) && Dt(s, _n16);
        var _l2 = o.__format;
        if (((Ot || _l2 !== r.__format) && wt(s, _l2), i))
          (Kt(r, o, s), To(o) || o.isInline() || Lt(r, o, s));
        else {
          var _t21 = s.__lexicalTextContent;
          var _e22;
          ("string" == typeof _t21
            ? (_e22 = _t21)
            : ((_e22 = r.getTextContent()), (s.__lexicalTextContent = _e22)),
            (Nt += _e22));
        }
        if ((Ot || o.__dir !== r.__dir) && (Pt(s, o), To(o) && !Ot))
          for (var _t22 of o.getChildren())
            if (mo(_t22)) {
              Pt($i(dt, _t22.getKey()), _t22);
            }
      } else {
        var _t23 = o.getTextContent();
        if (So(o)) {
          var _t24 = o.decorate(dt, ft);
          null !== _t24 && Bt(e, _t24);
        }
        Nt += _t23;
      }
      if (!Et && To(o) && o.__cachedText !== Nt) {
        var _t25 = o.getWritable();
        ((_t25.__cachedText = Nt), (o = _t25));
      }
      return (St.$decorateDOM(o, r, s, dt), s);
    }
    function Bt(t, e) {
      var n = dt._pendingDecorators;
      var r = dt._decorators;
      if (null === n) {
        if (r[t] === e) return;
        n = hi(dt);
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
      for (var _r12 = e; _r12 < t.length; _r12++) n.add(t[_r12]);
      return n;
    }
    function Ut(t, e, n, r, o, i) {
      ((Nt = ""),
        (Ot = 2 === r),
        (dt = n),
        (ft = n._config),
        (St = n._config.dom || Ro),
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
        $t("root", null),
        (dt = void 0),
        (ht = void 0),
        (_t = void 0),
        (pt = void 0),
        (yt = void 0),
        (mt = void 0),
        (ft = void 0),
        (xt = void 0),
        (Ct = void 0),
        (St = Ro),
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
      $e = jt("BLUR_COMMAND"),
      Be = jt("KEY_MODIFIER_COMMAND"),
      ze = Object.freeze({}),
      We = [
        [
          "keydown",
          function (t, e) {
            if (((Ue = t.timeStamp), (Ye = t.key), e.isComposing())) return;
            Ki(e, ue, t);
          },
        ],
        [
          "pointerdown",
          function (t, e) {
            var n = t.target,
              r = t.pointerType;
            os(n) &&
              "touch" !== r &&
              "pen" !== r &&
              0 === t.button &&
              go(e, function () {
                Jo(n) || (qe = !0);
              });
          },
        ],
        [
          "compositionstart",
          function (t, e) {
            Ki(e, Xt, t);
          },
        ],
        [
          "compositionend",
          function (t, e) {
            i
              ? (Qe = !0)
              : l || (!a && !d)
                ? Ki(e, Qt, t)
                : ((Ze = !0), (tn = t.data));
          },
        ],
        [
          "input",
          function (t, e) {
            (t.stopPropagation(),
              go(
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
            go(e, function () {
              var n = Dr(),
                r = es(Ji(e)),
                o = wr();
              if (r)
                if (_r(n)) {
                  var _e23 = n.anchor,
                    _i5 = _e23.getNode();
                  if (
                    "element" === _e23.type &&
                    0 === _e23.offset &&
                    n.isCollapsed() &&
                    !To(_i5) &&
                    1 === _i().getChildrenSize() &&
                    _i5.getTopLevelElementOrThrow().isEmpty() &&
                    null !== o &&
                    n.is(o)
                  )
                    (r.removeAllRanges(), (n.dirty = !0));
                  else if (3 === t.detail && !n.isCollapsed()) {
                    if (_i5 !== n.focus.getNode()) {
                      var _t26 = Cs(_i5, function (t) {
                        return mo(t) && !t.isInline();
                      });
                      mo(_t26) && _t26.select(0);
                    }
                  }
                } else if (
                  "touch" === t.pointerType ||
                  "pen" === t.pointerType
                ) {
                  var _n17 = r.anchorNode;
                  if (rs(_n17) || ti(_n17)) {
                    yi(Ar(o, r, e, t));
                  }
                }
              Ki(e, Gt, t);
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
            if ("deleteCompositionText" === n || (i && Li(e))) return;
            if ("insertCompositionText" === n) return;
            Ki(e, Vt, t);
          })(t, e);
        },
      ]);
    var Ue = 0,
      Ye = null,
      je = 0,
      Je = null;
    var He = new WeakMap(),
      Ge = new WeakMap();
    var Ve = !1,
      qe = !1,
      Xe = !1,
      Qe = !1,
      Ze = !1,
      tn = "",
      en = null,
      nn = [0, "", 0, "root", 0];
    function rn(t, e, n, r, o) {
      var i = t.anchor,
        l = t.focus,
        c = i.getNode(),
        a = Zr(),
        u = es(Ji(a)),
        f = null !== u ? u.anchorNode : null,
        d = i.key,
        h = a.getElementByKey(d),
        g = n.length;
      return (
        d !== l.key ||
        !ir(c) ||
        (((!o && (!s || je < r + 50)) || (c.isDirty() && g < 2) || xi(n)) &&
          i.offset !== l.offset &&
          !c.isComposing()) ||
        Zo(c) ||
        (c.isDirty() && g > 1) ||
        ((o || !s) && null !== h && !c.isComposing() && f !== ni(h)) ||
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
            o = Qo(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!r.canInsertTextBefore() && !e.isComposing()) ||
                o ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (ir(e) || (mo(e) && e.isInline())) &&
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
    function on(t, e) {
      return (
        ti(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function sn(e, n, r) {
      var o = e.anchorNode,
        i = e.anchorOffset,
        s = e.focusNode,
        l = e.focusOffset;
      (Ve && ((Ve = !1), on(o, i) && on(s, l) && !en)) ||
        go(n, function () {
          if (!r) return void yi(null);
          if (!Go(n, o, s)) return;
          var c = Dr();
          if (en && _r(c) && c.isCollapsed()) {
            var _t27 = c.anchor,
              _e24 = en.anchor;
            ((_t27.key === _e24.key && _t27.offset === _e24.offset + 1) ||
              (1 === _t27.offset &&
                _e24.getNode().is(_t27.getNode().getPreviousSibling()))) &&
              ((c = en.clone()), yi(c));
          }
          if (((en = null), _r(c))) {
            var _r13 = c.anchor,
              _o12 = _r13.getNode();
            if (c.isCollapsed()) {
              "Range" === e.type &&
                e.anchorNode === e.focusNode &&
                (c.dirty = !0);
              var _i6 = Ji(n).event,
                _s3 = _i6 ? _i6.timeStamp : performance.now(),
                _nn = nn,
                _l3 = _nn[0],
                _a = _nn[1],
                _u = _nn[2],
                _f = _nn[3],
                _d2 = _nn[4],
                _h2 = _i(),
                _g2 = !1 === n.isComposing() && "" === _h2.getTextContent();
              if (_s3 < _d2 + 200 && _r13.offset === _u && _r13.key === _f)
                ln(c, _l3, _a);
              else if ("text" === _r13.type) (ir(_o12) || t(141), cn(c, _o12));
              else if ("element" === _r13.type && !_g2) {
                mo(_o12) || t(259);
                var _e25 = _r13.getNode();
                _e25.isEmpty()
                  ? (function (t, e) {
                      var n = e.getTextFormat(),
                        r = e.getTextStyle();
                      ln(t, n, r);
                    })(c, _e25)
                  : ln(c, c.format, "");
              }
            } else {
              var _t28 = _r13.key,
                _e26 = c.focus.key,
                _n18 = c.getNodes(),
                _o13 = _n18.length,
                _s4 = c.isBackward(),
                _a2 = _s4 ? l : i,
                _u2 = _s4 ? i : l,
                _f2 = _s4 ? _e26 : _t28,
                _d3 = _s4 ? _t28 : _e26;
              var _h3 = 2047,
                _g3 = !1;
              for (var _t29 = 0; _t29 < _o13; _t29++) {
                var _e27 = _n18[_t29],
                  _r14 = _e27.getTextContentSize();
                if (
                  ir(_e27) &&
                  0 !== _r14 &&
                  !(
                    (0 === _t29 && _e27.__key === _f2 && _a2 === _r14) ||
                    (_t29 === _o13 - 1 && _e27.__key === _d3 && 0 === _u2)
                  ) &&
                  ((_g3 = !0), (_h3 &= _e27.getFormat()), 0 === _h3)
                )
                  break;
              }
              c.format = _g3 ? _h3 : 0;
            }
          }
          Ki(n, Jt, void 0);
        });
    }
    function ln(t, e, n) {
      (t.format === e && t.style === n) ||
        ((t.format = e), (t.style = n), (t.dirty = !0));
    }
    function cn(t, e) {
      ln(t, e.getFormat(), e.getStyle());
    }
    function an(t) {
      if (!t.getTargetRanges) return null;
      var e = t.getTargetRanges();
      return 0 === e.length ? null : e[0];
    }
    function un(e) {
      var n = e.inputType,
        r = an(e),
        o = Zr(),
        i = Dr();
      if ("deleteContentBackward" === n) {
        if (null === i) {
          var _t30 = wr();
          if (!_r(_t30)) return !0;
          yi(_t30.clone());
        }
        if (_r(i)) {
          var _n19 = i.anchor.key === i.focus.key;
          if (
            ((s = e.timeStamp),
            "MediaLast" === Ye && s < Ue + 30 && o.isComposing() && _n19)
          ) {
            if (
              (li(null),
              (Ue = 0),
              setTimeout(function () {
                go(o, function () {
                  li(null);
                });
              }, 30),
              _r(i))
            ) {
              var _e28 = i.anchor.getNode();
              (_e28.markDirty(), ir(_e28) || t(142), cn(i, _e28));
            }
          } else {
            (li(null), e.preventDefault());
            var _t31 = i.anchor.getNode(),
              _r15 = _t31.getTextContent(),
              _s5 = _t31.canInsertTextAfter(),
              _l4 = 0 === i.anchor.offset && i.focus.offset === _r15.length;
            var _c2 = f && _n19 && !_l4 && _s5;
            if (
              (_c2 && i.isCollapsed() && (_c2 = !So(Ri(i.anchor, !0))), !_c2)
            ) {
              Ki(o, Zt, !0);
              var _t32 = Dr();
              f &&
                _r(_t32) &&
                _t32.isCollapsed() &&
                ((en = _t32),
                setTimeout(function () {
                  return (en = null);
                }));
            }
          }
          return !0;
        }
      }
      var s;
      if (!_r(i)) return !0;
      var c = e.data;
      (null !== Je && Ti(!1, o, Je),
        (i.dirty && null === Je) ||
          !i.isCollapsed() ||
          To(i.anchor.getNode()) ||
          null === r ||
          i.applyDOMRange(r),
        (Je = null));
      var a = i.anchor,
        u = i.focus,
        d = a.getNode(),
        h = u.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === c) (e.preventDefault(), Ki(o, te, !1));
        else if (c === v) (e.preventDefault(), Ki(o, ee, void 0));
        else if (null == c && e.dataTransfer) {
          var _t33 = e.dataTransfer.getData("text/plain");
          (e.preventDefault(), i.insertRawText(_t33));
        } else
          null != c && rn(i, r, c, e.timeStamp, !0)
            ? (e.preventDefault(), Ki(o, ne, c))
            : (Je = c);
        return ((je = e.timeStamp), !0);
      }
      switch ((e.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          Ki(o, ne, e);
          break;
        case "insertFromComposition":
          (li(null), Ki(o, ne, e));
          break;
        case "insertLineBreak":
          (li(null), Ki(o, te, !1));
          break;
        case "insertParagraph":
          (li(null), Xe && !l ? ((Xe = !1), Ki(o, te, !1)) : Ki(o, ee, void 0));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          Ki(o, re, e);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || mo(t) || mo(e) || !Qo(t) || !Qo(e);
          })(d, h) && Ki(o, oe, e);
          break;
        case "deleteByDrag":
          (Wi(Dn), Ki(o, oe, e));
          break;
        case "deleteByCut":
          Ki(o, oe, e);
          break;
        case "deleteContent":
          Ki(o, Zt, !1);
          break;
        case "deleteWordBackward":
          Ki(o, ie, !0);
          break;
        case "deleteWordForward":
          Ki(o, ie, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          Ki(o, se, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          Ki(o, se, !1);
          break;
        case "formatStrikeThrough":
          Ki(o, le, "strikethrough");
          break;
        case "formatBold":
          Ki(o, le, "bold");
          break;
        case "formatItalic":
          Ki(o, le, "italic");
          break;
        case "formatUnderline":
          Ki(o, le, "underline");
          break;
        case "historyUndo":
          Ki(o, ce, void 0);
          break;
        case "historyRedo":
          Ki(o, ae, void 0);
      }
      return !0;
    }
    function fn(t) {
      if (rs(t.target) && Jo(t.target)) return !0;
      var e = Zr(),
        n = Dr(),
        r = t.data,
        o = an(t);
      if (null != r && _r(n) && rn(n, o, r, t.timeStamp, !1)) {
        Qe && (gn(e, r), (Qe = !1));
        var _o14 = n.anchor.getNode(),
          _l5 = es(Ji(e));
        if (null === _l5) return !0;
        var _c3 = n.isBackward(),
          _a3 = _c3 ? n.anchor.offset : n.focus.offset,
          _u3 = _c3 ? n.focus.offset : n.anchor.offset;
        (s &&
          !n.isCollapsed() &&
          ir(_o14) &&
          null !== _l5.anchorNode &&
          _o14.getTextContent().slice(0, _a3) +
            r +
            _o14.getTextContent().slice(_a3 + _u3) ===
            Ni(_l5.anchorNode)) ||
          Ki(e, ne, r);
        var _d4 = r.length;
        (i &&
          _d4 > 1 &&
          "insertCompositionText" === t.inputType &&
          !e.isComposing() &&
          (n.anchor.offset -= _d4),
          f && e.isComposing() && ((Ue = 0), li(null)));
      } else {
        (Ti(!1, e, null !== r ? r : void 0),
          Qe && (gn(e, r || void 0), (Qe = !1)));
      }
      return (
        (function () {
          qr();
          var t = Zr();
          H(t);
        })(),
        !0
      );
    }
    function dn(t) {
      var e = Zr(),
        n = Dr();
      if (_r(n) && !e.isComposing()) {
        var _r16 = n.anchor,
          _o15 = n.anchor.getNode();
        (li(_r16.key),
          Wi(wn),
          (t.timeStamp < Ue + 30 ||
            "element" === _r16.type ||
            !n.isCollapsed() ||
            _o15.getFormat() !== n.format ||
            (ir(_o15) && _o15.getStyle() !== n.style)) &&
            Ki(e, ne, O));
      }
      return !0;
    }
    function hn(t) {
      return (gn(Zr(), t.data), Wi(Pn), !0);
    }
    function gn(t, e) {
      var n = t._compositionKey;
      if ((li(null), null !== n && null != e)) {
        if ("" === e) {
          var _e29 = ai(n),
            _r17 = ni(t.getElementByKey(n));
          if (null !== _r17 && null !== _r17.nodeValue && ir(_e29)) {
            var _n20 = es(Ji(t));
            var _o16 = null,
              _i7 = null;
            (null !== _n20 &&
              _n20.anchorNode === _r17 &&
              ((_o16 = _n20.anchorOffset), (_i7 = _n20.focusOffset)),
              vi(_e29, _r17.nodeValue, _o16, _i7, !0));
          }
          return;
        }
        if ("\n" === e[e.length - 1]) {
          var _e30 = Dr();
          if (_r(_e30) || yr(_e30)) {
            if (_r(_e30)) {
              var _t34 = _e30.focus;
              _e30.anchor.set(_t34.key, _t34.offset, _t34.type);
            }
            return void Ki(t, ye, null);
          }
        }
      }
      Ti(!0, t, e);
    }
    function _n(t) {
      var e = Zr();
      if (null == t.key) return !0;
      if (Ze) {
        if (Di(t))
          return (
            go(e, function () {
              gn(e, tn);
            }),
            (Ze = !1),
            (tn = ""),
            !0
          );
        ((Ze = !1), (tn = ""));
      }
      if (
        (function (t) {
          return Mi(t, "ArrowRight", { shiftKey: "any" });
        })(t)
      )
        Ki(e, fe, t);
      else if (
        (function (t) {
          return Mi(t, "ArrowRight", bi);
        })(t)
      )
        Ki(e, de, t);
      else if (
        (function (t) {
          return Mi(t, "ArrowLeft", { shiftKey: "any" });
        })(t)
      )
        Ki(e, he, t);
      else if (
        (function (t) {
          return Mi(t, "ArrowLeft", bi);
        })(t)
      )
        Ki(e, ge, t);
      else if (
        (function (t) {
          return Mi(t, "ArrowUp", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        Ki(e, _e, t);
      else if (
        (function (t) {
          return Mi(t, "ArrowDown", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        Ki(e, pe, t);
      else if (
        (function (t) {
          return Mi(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
            shiftKey: !0,
          });
        })(t)
      )
        ((Xe = !0), Ki(e, ye, t));
      else if (
        (function (t) {
          return " " === t.key;
        })(t)
      )
        Ki(e, me, t);
      else if (
        (function (t) {
          return o && Mi(t, "o", { ctrlKey: !0 });
        })(t)
      )
        (t.preventDefault(), (Xe = !0), Ki(e, te, !0));
      else if (
        (function (t) {
          return Mi(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
          });
        })(t)
      )
        ((Xe = !1), Ki(e, ye, t));
      else if (
        (function (t) {
          return (
            Mi(t, "Backspace", { shiftKey: "any" }) ||
            (o && Mi(t, "h", { ctrlKey: !0 }))
          );
        })(t)
      )
        Di(t) ? Ki(e, xe, t) : (t.preventDefault(), Ki(e, Zt, !0));
      else if (
        (function (t) {
          return "Escape" === t.key;
        })(t)
      )
        Ki(e, Ce, t);
      else if (
        (function (t) {
          return Mi(t, "Delete", {}) || (o && Mi(t, "d", { ctrlKey: !0 }));
        })(t)
      )
        !(function (t) {
          return "Delete" === t.key;
        })(t)
          ? (t.preventDefault(), Ki(e, Zt, !1))
          : Ki(e, Se, t);
      else if (
        (function (t) {
          return Mi(t, "Backspace", Ai);
        })(t)
      )
        (t.preventDefault(), Ki(e, ie, !0));
      else if (
        (function (t) {
          return Mi(t, "Delete", Ai);
        })(t)
      )
        (t.preventDefault(), Ki(e, ie, !1));
      else if (
        (function (t) {
          return o && Mi(t, "Backspace", { metaKey: !0 });
        })(t)
      )
        (t.preventDefault(), Ki(e, se, !0));
      else if (
        (function (t) {
          return (
            o &&
            (Mi(t, "Delete", { metaKey: !0 }) || Mi(t, "k", { ctrlKey: !0 }))
          );
        })(t)
      )
        (t.preventDefault(), Ki(e, se, !1));
      else if (
        (function (t) {
          return Mi(t, "b", bi);
        })(t)
      )
        (t.preventDefault(), Ki(e, le, "bold"));
      else if (
        (function (t) {
          return Mi(t, "u", bi);
        })(t)
      )
        (t.preventDefault(), Ki(e, le, "underline"));
      else if (
        (function (t) {
          return Mi(t, "i", bi);
        })(t)
      )
        (t.preventDefault(), Ki(e, le, "italic"));
      else if (
        (function (t) {
          return Mi(t, "Tab", { shiftKey: "any" });
        })(t)
      )
        Ki(e, Ne, t);
      else if (
        (function (t) {
          return Mi(t, "z", bi);
        })(t)
      )
        (t.preventDefault(), Ki(e, ce, void 0));
      else if (
        (function (t) {
          if (o) return Mi(t, "z", { metaKey: !0, shiftKey: !0 });
          return (
            Mi(t, "y", { ctrlKey: !0 }) ||
            Mi(t, "z", { ctrlKey: !0, shiftKey: !0 })
          );
        })(t)
      )
        (t.preventDefault(), Ki(e, ae, void 0));
      else {
        var _n21 = e._editorState._selection;
        null === _n21 || _r(_n21)
          ? wi(t) && (t.preventDefault(), Ki(e, Pe, t))
          : !(function (t) {
                return Mi(t, "c", bi);
              })(t)
            ? !(function (t) {
                return Mi(t, "x", bi);
              })(t)
              ? wi(t) && (t.preventDefault(), Ki(e, Pe, t))
              : (t.preventDefault(), Ki(e, we, t))
            : (t.preventDefault(), Ki(e, De, t));
      }
      return (
        (function (t) {
          return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey;
        })(t) && e.dispatchCommand(Be, t),
        !0
      );
    }
    function pn(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    var yn = new Map();
    function mn(t) {
      var e = ns(t.target);
      if (null === e) return;
      var n = qo(e.anchorNode);
      if (null === n) return;
      qe &&
        ((qe = !1),
        go(n, function () {
          var r = wr(),
            o = e.anchorNode;
          if (rs(o) || ti(o)) {
            yi(Ar(r, e, n, t));
          }
        }));
      var r = Ci(n),
        o = r[r.length - 1],
        i = o._key,
        s = yn.get(i),
        l = s || o;
      (l !== n && sn(e, l, !1),
        sn(e, n, !0),
        n !== o ? yn.set(i, n) : s && yn["delete"](i));
    }
    function xn(t) {
      t._lexicalHandled = !0;
    }
    function Cn(t) {
      return !0 === t._lexicalHandled;
    }
    var Sn = function Sn() {};
    function Nn(e) {
      var n = He.get(e);
      if (void 0 === n) return void Sn();
      var r = Ge.get(n);
      if (void 0 === r) return void Sn();
      var o = r - 1;
      (o >= 0 || t(164),
        He["delete"](e),
        Ge.set(n, o),
        0 === o && n.removeEventListener("selectionchange", mn));
      var i = Xo(e);
      Vo(i)
        ? (!(function (t) {
            if (null !== t._parentEditor) {
              var _e31 = Ci(t),
                _n22 = _e31[_e31.length - 1]._key;
              yn.get(_n22) === t && yn["delete"](_n22);
            } else yn["delete"](t._key);
          })(i),
          (e.__lexicalEditor = null))
        : i && t(198);
      var s = pn(e);
      for (var _t35 = 0; _t35 < s.length; _t35++) s[_t35]();
      e.__lexicalEventHandles = [];
    }
    function Tn(t, e, n) {
      qr();
      var r = t.__key,
        o = t.getParent();
      if (null === o) return;
      var i = (function (t) {
        var e = Dr();
        if (!_r(e) || !mo(t)) return e;
        var n = e.anchor,
          r = e.focus,
          o = n.getNode(),
          i = r.getNode();
        Yi(o, t) && n.set(t.__key, 0, "element");
        Yi(i, t) && r.set(t.__key, 0, "element");
        return e;
      })(t);
      var s = !1;
      if (_r(i) && e) {
        var _e32 = i.anchor,
          _n23 = i.focus;
        (_e32.key === r &&
          (Fr(_e32, t, o, t.getPreviousSibling(), t.getNextSibling()),
          (s = !0)),
          _n23.key === r &&
            (Fr(_n23, t, o, t.getPreviousSibling(), t.getNextSibling()),
            (s = !0)));
      } else yr(i) && e && t.isSelected() && t.selectPrevious();
      if (_r(i) && e && !s) {
        var _e33 = t.getIndexWithinParent();
        (ii(t), Pr(i, o, _e33, -1));
      } else ii(t);
      (n || Gi(o) || o.canBeEmpty() || !o.isEmpty() || Tn(o, e),
        e && i && To(o) && o.isEmpty() && o.selectEnd());
    }
    var vn = Symbol["for"]("ephemeral");
    function On(t) {
      return t[vn] || !1;
    }
    var _En5 = (function () {
      function En(t) {
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
          oi(this, t));
      }
      En.getType = function getType() {
        var _xs2 = xs(this),
          e = _xs2.ownNodeType;
        return (void 0 === e && t(64, this.name), e);
      };
      En.clone = function clone(e) {
        t(65, this.name);
      };
      var _proto3 = En.prototype;
      _proto3.$config = function $config() {
        return {};
      };
      _proto3.config = function config(t, e) {
        var _ref11;
        var n = e["extends"] || Object.getPrototypeOf(this.constructor);
        return (
          Object.assign(e, { extends: n, type: t }),
          (_ref11 = {}),
          (_ref11[t] = e),
          _ref11
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
          var _e34 = ai(t);
          if (null === _e34) break;
          t = _e34.__parent;
        }
        return !1;
      };
      _proto3.isSelected = function isSelected(t) {
        var _this12 = this;
        var e = t || Dr();
        if (null == e) return !1;
        var n = e.getNodes().some(function (t) {
          return t.__key === _this12.__key;
        });
        if (ir(this)) return n;
        if (
          _r(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t36 = this.getParent();
          if (So(this) && this.isInline() && _t36) {
            var _n24 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t36.is(_n24.getNode()) &&
              _n24.offset === _t36.getChildrenSize() &&
              this.is(_t36.getLastChild())
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
        return null === t ? null : ai(t);
      };
      _proto3.getParentOrThrow = function getParentOrThrow() {
        var e = this.getParent();
        return (null === e && t(66, this.__key), e);
      };
      _proto3.getTopLevelElement = function getTopLevelElement() {
        var e = this;
        for (; null !== e; ) {
          var _n25 = e.getParent();
          if (Gi(_n25)) return (mo(e) || (e === this && So(e)) || t(194), e);
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
        return null === t ? null : ai(t);
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
        return null === t ? null : ai(t);
      };
      _proto3.getNextSiblings = function getNextSiblings() {
        var t = [];
        var e = this.getNextSibling();
        for (; null !== e; ) (t.push(e), (e = e.getNextSibling()));
        return t;
      };
      _proto3.getCommonAncestor = function getCommonAncestor(t) {
        var e = mo(this) ? this : this.getParent(),
          n = mo(t) ? t : t.getParent(),
          r = e && n ? Zs(e, n) : null;
        return r ? r.commonAncestor : null;
      };
      _proto3.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto3.isBefore = function isBefore(e) {
        var n = Zs(this, e);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === qs(n)
              : ("same" !== n.type && "ancestor" !== n.type && t(279), !1)))
        );
      };
      _proto3.isParentOf = function isParentOf(t) {
        var e = Zs(this, t);
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
          var _l6 = mo(i) ? (n ? i.getFirstChild() : i.getLastChild()) : null;
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
        var t = Zr()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto3.getLatest = function getLatest() {
        if (On(this)) return this;
        var e = ai(this.__key);
        return (null === e && t(113), e);
      };
      _proto3.getWritable = function getWritable() {
        if (On(this)) return this;
        qr();
        var t = Qr(),
          e = Zr(),
          n = t._nodeMap,
          r = this.__key,
          o = this.getLatest(),
          i = e._cloneNotNeeded,
          s = Dr();
        if ((null !== s && s.setCachedNodes(null), i.has(r))) return (si(o), o);
        var l = gs(o);
        return (i.add(r), si(l), n.set(r, l), l);
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
      En.importJSON = function importJSON(e) {
        t(18, this.name);
      };
      _proto3.updateFromJSON = function updateFromJSON(t) {
        return (function (t, e) {
          var n = t.getWritable(),
            r = e.$;
          var o = r;
          for (var _t37 of tt(n).flatKeys)
            _t37 in e &&
              ((void 0 !== o && o !== r) ||
                (o = babelHelpers["extends"]({}, r)),
              (o[_t37] = e[_t37]));
          return ((n.__state || o) && Z(t).updateFromJSON(o), n);
        })(this, t);
      };
      En.transform = function transform() {
        return null;
      };
      _proto3.remove = function remove(t) {
        Tn(this, !0, t);
      };
      _proto3.replace = function replace(e, n) {
        qr();
        var r = Dr();
        (null !== r && (r = r.clone()), Xi(this, e));
        var o = this.getLatest(),
          i = this.__key,
          s = e.__key,
          l = e.getWritable(),
          c = this.getParentOrThrow().getWritable(),
          a = c.__size;
        ii(l);
        var u = o.getPreviousSibling(),
          f = o.getNextSibling(),
          d = o.__prev,
          h = o.__next,
          g = o.__parent;
        if ((Tn(o, !1, !0), null === u)) c.__first = s;
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
            ((mo(this) && mo(l)) || t(139),
            this.getChildren().forEach(function (t) {
              l.append(t);
            })),
          _r(r))
        ) {
          yi(r);
          var _t38 = r.anchor,
            _e35 = r.focus;
          (_t38.key === i && hr(_t38, l), _e35.key === i && hr(_e35, l));
        }
        return (ci() === i && li(s), l);
      };
      _proto3.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (qr(), Xi(this, t));
        var n = this.getWritable(),
          r = t.getWritable(),
          o = r.getParent(),
          i = Dr();
        var s = !1,
          l = !1;
        if (null !== o) {
          var _e36 = t.getIndexWithinParent();
          if ((ii(r), _r(i))) {
            var _t39 = o.__key,
              _n26 = i.anchor,
              _r18 = i.focus;
            ((s =
              "element" === _n26.type &&
              _n26.key === _t39 &&
              _n26.offset === _e36 + 1),
              (l =
                "element" === _r18.type &&
                _r18.key === _t39 &&
                _r18.offset === _e36 + 1));
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
          e && _r(i))
        ) {
          var _t40 = this.getIndexWithinParent();
          Pr(i, a, _t40 + 1);
          var _e37 = a.__key;
          (s && i.anchor.set(_e37, _t40 + 2, "element"),
            l && i.focus.set(_e37, _t40 + 2, "element"));
        }
        return t;
      };
      _proto3.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (qr(), Xi(this, t));
        var n = this.getWritable(),
          r = t.getWritable(),
          o = r.__key;
        ii(r);
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
        var a = Dr();
        if (e && _r(a)) {
          Pr(a, this.getParentOrThrow(), c);
        }
        return t;
      };
      _proto3.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto3.createParentElementNode = function createParentElementNode() {
        return Do();
      };
      _proto3.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto3.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto3.selectPrevious = function selectPrevious(t, e) {
        qr();
        var n = this.getPreviousSibling(),
          r = this.getParentOrThrow();
        if (null === n) return r.select(0, 0);
        if (mo(n)) return n.select();
        if (!ir(n)) {
          var _t41 = n.getIndexWithinParent() + 1;
          return r.select(_t41, _t41);
        }
        return n.select(t, e);
      };
      _proto3.selectNext = function selectNext(t, e) {
        qr();
        var n = this.getNextSibling(),
          r = this.getParentOrThrow();
        if (null === n) return r.select();
        if (mo(n)) return n.select(0, 0);
        if (!ir(n)) {
          var _t42 = n.getIndexWithinParent();
          return r.select(_t42, _t42);
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
      return En;
    })();
    var kn = "history-merge",
      Mn = "collaboration",
      bn = "skip-scroll-into-view",
      An = "skip-dom-selection",
      Dn = "skip-selection-focus",
      wn = "composition-start",
      Pn = "composition-end",
      In = /\s*!important\s*$/i;
    function Fn(t) {
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
                      var _t43 = n.trim(),
                        _o17 = r.trim();
                      ("" !== _t43 && "" !== _o17 && (e[_t43] = _o17),
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
    function Rn(t, e, n) {
      var r = In.test(n) ? "important" : "",
        o = "" === r ? n : n.replace(In, "").trim();
      t.setProperty(e, o, r);
    }
    function Ln(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var r = Fn(n),
        o = Fn(e);
      for (var _e38 in o) (delete r[_e38], Rn(t, _e38, o[_e38]));
      for (var _e39 in r) t.removeProperty(_e39);
    }
    var _Kn = (function (_En) {
      function Kn(t) {
        return _En.call(this, t) || this;
      }
      babelHelpers.inheritsLoose(Kn, _En);
      Kn.getType = function getType() {
        return "linebreak";
      };
      Kn.clone = function clone(t) {
        return new Kn(t.__key);
      };
      var _proto4 = Kn.prototype;
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
      Kn.importDOM = function importDOM() {
        return {
          br: function br(t) {
            return (function (t) {
              var e = t.parentElement;
              if (null !== e && ls(e)) {
                var _n27 = e.firstChild;
                if (_n27 === t || (_n27.nextSibling === t && Wn(_n27))) {
                  var _n28 = e.lastChild;
                  if (_n28 === t || (_n28.previousSibling === t && Wn(_n28)))
                    return !0;
                }
              }
              return !1;
            })(t) ||
              (function (t) {
                var e = t.parentElement;
                if (null !== e && ls(e)) {
                  var _n29 = e.firstChild;
                  if (_n29 === t || (_n29.nextSibling === t && Wn(_n29)))
                    return !1;
                  var _r19 = e.lastChild;
                  if (_r19 === t || (_r19.previousSibling === t && Wn(_r19)))
                    return !0;
                }
                return !1;
              })(t)
              ? null
              : { conversion: $n, priority: 0 };
          },
        };
      };
      Kn.importJSON = function importJSON(t) {
        return Bn().updateFromJSON(t);
      };
      return Kn;
    })(_En5);
    function $n(t) {
      return { node: Bn() };
    }
    function Bn() {
      return qi(new _Kn());
    }
    function zn(t) {
      return t instanceof _Kn;
    }
    function Wn(t) {
      return ti(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    function Un(t, e) {
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
    function Yn(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function jn(t, e, n, r, o) {
      var i = r.classList;
      var s = Pi(o, "base");
      (void 0 !== s && i.add.apply(i, s),
        (s = Pi(o, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== s &&
        (8 & n && 4 & n
          ? ((l = !0), c || i.add.apply(i, s))
          : c && i.remove.apply(i, s));
      for (var _t44 in A) {
        var _r20 = A[_t44];
        if (((s = Pi(o, _t44)), void 0 !== s))
          if (n & _r20) {
            if (l && ("underline" === _t44 || "strikethrough" === _t44)) {
              e & _r20 && i.remove.apply(i, s);
              continue;
            }
            (0 === (e & _r20) ||
              (c && "underline" === _t44) ||
              "strikethrough" === _t44) &&
              i.add.apply(i, s);
          } else e & _r20 && i.remove.apply(i, s);
      }
    }
    function Jn(t, e, n) {
      var r = e.firstChild,
        o = n.isComposing(),
        s = t + (o ? T : "");
      if (null == r) e.textContent = s;
      else {
        var _t45 = r.nodeValue;
        if (_t45 !== s)
          if (o || i) {
            var _ref12 = (function (t, e) {
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
              })(_t45, s),
              _e40 = _ref12[0],
              _n30 = _ref12[1],
              _o18 = _ref12[2];
            (0 !== _n30 && r.deleteData(_e40, _n30), r.insertData(_e40, _o18));
          } else r.nodeValue = s;
      }
    }
    function Hn(t, e, n, r, o, i) {
      Jn(o, t, e);
      var s = i.theme.text;
      void 0 !== s && jn(0, 0, r, t, s);
    }
    function Gn(t, e) {
      var n = document.createElement(e);
      return (n.appendChild(t), n);
    }
    var _Vn2 = (function (_En2) {
      function Vn(t, e) {
        var _this;
        if (t === void 0) {
          t = "";
        }
        ((_this = _En2.call(this, e) || this),
          (_this.__text = t),
          (_this.__format = 0),
          (_this.__style = ""),
          (_this.__mode = 0),
          (_this.__detail = 0));
        return _this;
      }
      babelHelpers.inheritsLoose(Vn, _En2);
      Vn.getType = function getType() {
        return "text";
      };
      Vn.clone = function clone(t) {
        return new Vn(t.__text, t.__key);
      };
      var _proto5 = Vn.prototype;
      _proto5.afterCloneFrom = function afterCloneFrom(t) {
        (_En2.prototype.afterCloneFrom.call(this, t),
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
        return this.__key === ci();
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
        return ri(this.getLatest().__format, t, e);
      };
      _proto5.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto5.isInline = function isInline() {
        return !0;
      };
      _proto5.createDOM = function createDOM(t, e) {
        var n = this.__format,
          r = Un(0, n),
          o = Yn(0, n),
          i = null === r ? o : r,
          s = document.createElement(i);
        var l = s;
        (this.hasFormat("code") && s.setAttribute("spellcheck", "false"),
          null !== r && ((l = document.createElement(o)), s.appendChild(l)));
        Hn(l, this, 0, n, this.__text, t);
        var c = this.__style;
        return ("" !== c && Ln(s.style, c), s);
      };
      _proto5.updateDOM = function updateDOM(e, n, r) {
        var o = this.__text,
          i = e.__format,
          s = this.__format,
          l = Un(0, i),
          c = Un(0, s),
          a = Yn(0, i),
          u = Yn(0, s);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _e41 = n.firstChild;
          null == _e41 && t(48);
          var _i8 = document.createElement(u);
          return (Hn(_i8, this, 0, s, o, r), n.replaceChild(_i8, _e41), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && t(49)),
          Jn(o, f, this));
        var d = r.theme.text;
        void 0 !== d && i !== s && jn(0, i, s, f, d);
        var h = e.__style,
          g = this.__style;
        return (h !== g && Ln(n.style, g, h), !1);
      };
      Vn.importDOM = function importDOM() {
        return {
          "#text": function text() {
            return { conversion: tr, priority: 0 };
          },
          b: function b() {
            return { conversion: Xn, priority: 0 };
          },
          code: function code() {
            return { conversion: rr, priority: 0 };
          },
          em: function em() {
            return { conversion: rr, priority: 0 };
          },
          i: function i() {
            return { conversion: rr, priority: 0 };
          },
          mark: function mark() {
            return { conversion: rr, priority: 0 };
          },
          s: function s() {
            return { conversion: rr, priority: 0 };
          },
          span: function span() {
            return { conversion: qn, priority: 0 };
          },
          strong: function strong() {
            return { conversion: rr, priority: 0 };
          },
          sub: function sub() {
            return { conversion: rr, priority: 0 };
          },
          sup: function sup() {
            return { conversion: rr, priority: 0 };
          },
          u: function u() {
            return { conversion: rr, priority: 0 };
          },
        };
      };
      Vn.importJSON = function importJSON(t) {
        return or().updateFromJSON(t);
      };
      _proto5.updateFromJSON = function updateFromJSON(t) {
        return _En2.prototype.updateFromJSON
          .call(this, t)
          .setTextContent(t.text)
          .setFormat(t.format)
          .setDetail(t.detail)
          .setMode(t.mode)
          .setStyle(t.style);
      };
      _proto5.exportDOM = function exportDOM(e) {
        var _En2$prototype$export = _En2.prototype.exportDOM.call(this, e),
          n = _En2$prototype$export.element;
        return (
          rs(n) || t(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = Gn(n, "b")),
          this.hasFormat("italic") && (n = Gn(n, "i")),
          this.hasFormat("strikethrough") && (n = Gn(n, "s")),
          this.hasFormat("underline") && (n = Gn(n, "u")),
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
          _En2.prototype.exportJSON.call(this),
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
        var e = ri(this.getFormat(), t, null);
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
        qr();
        var n = t,
          r = e;
        var o = Dr(),
          i = this.getTextContent(),
          s = this.__key;
        if ("string" == typeof i) {
          var _t46 = i.length;
          (void 0 === n && (n = _t46), void 0 === r && (r = _t46));
        } else ((n = 0), (r = 0));
        if (!_r(o)) return kr(s, n, s, r, "text", "text");
        {
          var _t47 = ci();
          ((_t47 !== o.anchor.key && _t47 !== o.focus.key) || li(s),
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
        var c = Dr();
        if (r && _r(c)) {
          var _e42 = t + s;
          c.setTextNodeRange(o, _e42, o, _e42);
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
        qr();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var r = e.__key,
          o = ci(),
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
        for (var _e43 = 0, _r21 = 0; _e43 < i && _r21 <= l; _r21++) {
          var _o19 = t[_r21];
          _o19 > _e43 && (s.push(n.slice(_e43, _o19)), (_e43 = _o19));
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
        var m = Dr();
        if (_r(m)) {
          var _ref13 = m.isBackward()
              ? [m.focus, m.anchor]
              : [m.anchor, m.focus],
            _t48 = _ref13[0],
            _e44 = _ref13[1];
          ("text" === _t48.type && _t48.key === r && (p = _t48),
            "text" === _e44.type && _e44.key === r && (y = _e44));
        }
        e.isSegmented()
          ? ((f = or(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = it(e, f)),
            (_ = !0))
          : (f = e.setTextContent(a));
        var x = [f];
        for (var _t49 = 1; _t49 < c; _t49++) {
          var _n31 = or(s[_t49]);
          ((_n31.__format = d),
            (_n31.__style = h),
            (_n31.__detail = g),
            (_n31.__state = it(e, _n31)));
          var _i9 = _n31.__key;
          (o === r && li(_i9), x.push(_n31));
        }
        var C = p ? p.offset : null,
          S = y ? y.offset : null;
        var N = 0;
        for (var _t50 of x) {
          if (!p && !y) break;
          var _e45 = N + _t50.getTextContentSize();
          if (
            (null !== p &&
              null !== C &&
              C <= _e45 &&
              C >= N &&
              (p.set(_t50.getKey(), C - N, "text"), C < _e45 && (p = null)),
            null !== y && null !== S && S <= _e45 && S >= N)
          ) {
            y.set(_t50.getKey(), S - N, "text");
            break;
          }
          N = _e45;
        }
        if (null !== u) {
          !(function (t) {
            var e = t.getPreviousSibling(),
              n = t.getNextSibling();
            null !== e && si(e);
            null !== n && si(n);
          })(this);
          var _t51 = u.getWritable(),
            _e46 = this.getIndexWithinParent();
          (_
            ? (_t51.splice(_e46, 0, x), this.remove())
            : _t51.splice(_e46, 1, x),
            _r(m) && Pr(m, u, _e46, c - 1));
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
        ci() === o && li(r);
        var l = Dr();
        if (_r(l)) {
          var _t52 = l.anchor,
            _i0 = l.focus;
          (null !== _t52 && _t52.key === o && Rr(_t52, n, r, e, s),
            null !== _i0 && _i0.key === o && Rr(_i0, n, r, e, s));
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
      return Vn;
    })(_En5);
    function qn(t) {
      return { forChild: sr(t.style), node: null };
    }
    function Xn(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: sr(e.style, n ? void 0 : "bold"), node: null };
    }
    var Qn = new WeakMap();
    function Zn(t) {
      if (!rs(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function tr(e) {
      var n = e;
      null === e.parentElement && t(129);
      var r = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var r = [t];
          for (; null !== n && void 0 === (e = Qn.get(n)) && !Zn(n); )
            (r.push(n), (n = n.parentNode));
          var o = void 0 === e ? n : e;
          for (var _t53 = 0; _t53 < r.length; _t53++) Qn.set(r[_t53], o);
          return o;
        })(n)
      ) {
        var _t54 = r.split(/(\r?\n|\t)/),
          _e47 = [],
          _n32 = _t54.length;
        for (var _r22 = 0; _r22 < _n32; _r22++) {
          var _n33 = _t54[_r22];
          "\n" === _n33 || "\r\n" === _n33
            ? _e47.push(Bn())
            : "\t" === _n33
              ? _e47.push(cr())
              : "" !== _n33 && _e47.push(or(_n33));
        }
        return { node: _e47 };
      }
      if (((r = r.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === r))
        return { node: null };
      if (" " === r[0]) {
        var _t55 = n,
          _e48 = !0;
        for (; null !== _t55 && null !== (_t55 = er(_t55, !1)); ) {
          var _n34 = _t55.textContent || "";
          if (_n34.length > 0) {
            (/[ \t\n]$/.test(_n34) && (r = r.slice(1)), (_e48 = !1));
            break;
          }
        }
        _e48 && (r = r.slice(1));
      }
      if (" " === r[r.length - 1]) {
        var _t56 = n,
          _e49 = !0;
        for (; null !== _t56 && null !== (_t56 = er(_t56, !0)); ) {
          if (
            (_t56.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e49 = !1;
            break;
          }
        }
        _e49 && (r = r.slice(0, r.length - 1));
      }
      return "" === r ? { node: null } : { node: or(r) };
    }
    function er(t, e) {
      var n = t;
      for (;;) {
        var _t57 = void 0;
        for (; null === (_t57 = e ? n.nextSibling : n.previousSibling); ) {
          var _t58 = n.parentElement;
          if (null === _t58) return null;
          n = _t58;
        }
        if (((n = _t57), rs(n))) {
          var _t59 = n.style.display;
          if (
            ("" === _t59 && !ss(n)) ||
            ("" !== _t59 && !_t59.startsWith("inline"))
          )
            return null;
        }
        var _r23 = n;
        for (; null !== (_r23 = e ? n.firstChild : n.lastChild); ) n = _r23;
        if (ti(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var nr = {
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
    function rr(t) {
      var e = nr[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: sr(t.style, e), node: null };
    }
    function or(t) {
      if (t === void 0) {
        t = "";
      }
      return qi(new _Vn2(t));
    }
    function ir(t) {
      return t instanceof _Vn2;
    }
    function sr(t, e) {
      var n = t.fontWeight,
        r = t.textDecoration.split(" "),
        o = "700" === n || "bold" === n,
        i = r.includes("line-through"),
        s = "italic" === t.fontStyle,
        l = r.includes("underline"),
        c = t.verticalAlign;
      return function (t) {
        return ir(t)
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
    var _lr = (function (_Vn) {
      function lr(t) {
        var _this2;
        ((_this2 = _Vn.call(this, "\t", t) || this), (_this2.__detail = 2));
        return _this2;
      }
      babelHelpers.inheritsLoose(lr, _Vn);
      lr.getType = function getType() {
        return "tab";
      };
      lr.clone = function clone(t) {
        return new lr(t.__key);
      };
      lr.importDOM = function importDOM() {
        return null;
      };
      var _proto6 = lr.prototype;
      _proto6.createDOM = function createDOM(t) {
        var e = _Vn.prototype.createDOM.call(this, t),
          n = Pi(t.theme, "tab");
        if (void 0 !== n) {
          var _e$classList;
          (_e$classList = e.classList).add.apply(_e$classList, n);
        }
        return e;
      };
      lr.importJSON = function importJSON(t) {
        return cr().updateFromJSON(t);
      };
      _proto6.setTextContent = function setTextContent(t) {
        return (
          "\t" !== t && "" !== t && e(126),
          _Vn.prototype.setTextContent.call(this, "\t")
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
      return lr;
    })(_Vn2);
    function cr() {
      return qi(new _lr());
    }
    function ar(t) {
      return t instanceof _lr;
    }
    var _ur = (function () {
      function ur(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto7 = ur.prototype;
      _proto7.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto7.isBefore = function isBefore(t) {
        if (this.key === t.key) return this.offset < t.offset;
        return Vs(al(tl(this, "next")), al(tl(t, "next"))) < 0;
      };
      _proto7.getNode = function getNode() {
        var e = ai(this.key);
        return (null === e && t(20), e);
      };
      _proto7.set = function set(t, e, n, r) {
        var o = this._selection,
          i = this.key;
        (r && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          Vr() ||
            (ci() === i && li(t),
            null !== o && (o.setCachedNodes(null), (o.dirty = !0))));
      };
      return ur;
    })();
    function fr(t, e, n) {
      return new _ur(t, e, n);
    }
    function dr(t, e) {
      var n = e.__key,
        r = t.offset,
        o = "element";
      if (ir(e)) {
        o = "text";
        var _t60 = e.getTextContentSize();
        r > _t60 && (r = _t60);
      } else if (!mo(e)) {
        var _t61 = e.getNextSibling();
        if (ir(_t61)) ((n = _t61.__key), (r = 0), (o = "text"));
        else {
          var _t62 = e.getParent();
          _t62 && ((n = _t62.__key), (r = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, r, o);
    }
    function hr(t, e) {
      if (mo(e)) {
        var _n35 = e.getLastDescendant();
        mo(_n35) || ir(_n35) ? dr(t, _n35) : dr(t, e);
      } else dr(t, e);
    }
    var _gr = (function () {
      function gr(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto8 = gr.prototype;
      _proto8.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto8.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto8.is = function is(t) {
        if (!yr(t)) return !1;
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
        return new gr(new Set(this._nodes));
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
        if (ir(r)) o = r.select();
        else {
          var _t63 = r.getIndexWithinParent() + 1;
          o = r.getParentOrThrow().select(_t63, _t63);
        }
        o.insertNodes(t);
        for (var _t64 = 0; _t64 < n; _t64++) e[_t64].remove();
      };
      _proto8.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = this._nodes,
          n = [];
        for (var _t65 of e) {
          var _e50 = ai(_t65);
          null !== _e50 && n.push(_e50);
        }
        return (Vr() || (this._cachedNodes = n), n);
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
        if ((Dr() || wr()) === this && t[0]) {
          var _e51 = Rs(t[0], "next");
          nl(Hs(_e51, _e51));
        }
        for (var _e52 of t) _e52.remove();
      };
      return gr;
    })();
    function _r(t) {
      return t instanceof _pr;
    }
    var _pr = (function () {
      function pr(t, e, n, r) {
        ((this.anchor = t),
          (this.focus = e),
          (t._selection = this),
          (e._selection = this),
          (this._cachedNodes = null),
          (this.format = n),
          (this.style = r),
          (this.dirty = !1));
      }
      var _proto9 = pr.prototype;
      _proto9.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto9.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto9.is = function is(t) {
        return (
          !!_r(t) &&
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
            if (ws(_n37)) {
              var _t66 = _n37.origin;
              0 === e.length ? o.add(_t66) : (i.add(_t66), e.push(_t66));
            } else {
              var _t67 = _n37.origin;
              (mo(_t67) && i.has(_t67)) || e.push(_t67);
            }
          r && e.push(r.caret.origin);
          if (
            Ds(t.focus) &&
            mo(t.focus.origin) &&
            null === t.focus.getNodeAtCaret()
          )
            for (
              var _n38 = Bs(t.focus.origin, "previous");
              ws(_n38) &&
              o.has(_n38.origin) &&
              !_n38.origin.isEmpty() &&
              _n38.origin.is(e[e.length - 1]);
              _n38 = Ws(_n38)
            )
              (o["delete"](_n38.origin), e.pop());
          for (; e.length > 1; ) {
            var _t68 = e[e.length - 1];
            if (!mo(_t68) || i.has(_t68) || _t68.isEmpty() || o.has(_t68))
              break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n39 = al(t.anchor),
              _r24 = al(t.anchor.getFlipped()),
              _o20 = function _o20(t) {
                return As(t) ? t.origin : t.getNodeAtCaret();
              },
              _i1 =
                _o20(_n39) ||
                _o20(_r24) ||
                (t.anchor.getNodeAtCaret() ? _n39.origin : _r24.origin);
            e.push(_i1);
          }
          return e;
        })(dl(ol(this), "next"));
        return (Vr() || (this._cachedNodes = e), e);
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
          _xr = xr(this),
          s = _xr[0],
          l = _xr[1];
        var c = "",
          a = !0;
        for (var _u6 = 0; _u6 < t.length; _u6++) {
          var _f4 = t[_u6];
          if (mo(_f4) && !_f4.isInline())
            (a || (c += "\n"), (a = !_f4.isEmpty()));
          else if (((a = !1), ir(_f4))) {
            var _t69 = _f4.getTextContent();
            (_f4 === e
              ? _f4 === n
                ? ("element" === r.type &&
                    "element" === o.type &&
                    o.offset !== r.offset) ||
                  (_t69 = s < l ? _t69.slice(s, l) : _t69.slice(l, s))
                : (_t69 = i ? _t69.slice(s) : _t69.slice(l))
              : _f4 === n && (_t69 = i ? _t69.slice(0, l) : _t69.slice(0, s)),
              (c += _t69));
          } else
            (!So(_f4) && !zn(_f4)) ||
              (_f4 === n && this.isCollapsed()) ||
              (c += _f4.getTextContent());
        }
        return c;
      };
      _proto9.applyDOMRange = function applyDOMRange(t) {
        var e = Zr(),
          n = e.getEditorState()._selection,
          r = Er(
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
        return new pr(
          fr(t.key, t.offset, t.type),
          fr(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto9.toggleFormat = function toggleFormat(t) {
        ((this.format = ri(this.format, t, null)), (this.dirty = !0));
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
        for (var _t70 = 0; _t70 < r; _t70++) {
          var _r25 = e[_t70];
          "\n" === _r25 || "\r\n" === _r25
            ? n.push(Bn())
            : "\t" === _r25
              ? n.push(cr())
              : n.push(or(_r25));
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
                s = or();
              if ((s.setFormat(n), s.setStyle(r), wo(i))) i.splice(0, 0, [s]);
              else {
                var _t71 = To(o) ? Do().append(s) : s;
                null === i ? o.append(_t71) : i.insertBefore(_t71);
              }
              (t.is(e) && e.set(s.__key, 0, "text"), t.set(s.__key, 0, "text"));
            })(s, l, o, i),
          "element" === l.type && el(l, al(tl(l, "next"))));
        var c = s.offset;
        var a = l.offset;
        var u = this.getNodes(),
          f = u.length;
        var d = u[0];
        ir(d) || t(26);
        var h = d.getTextContent().length,
          g = d.getParentOrThrow();
        var _ = u[f - 1];
        if (
          (1 === f &&
            "element" === l.type &&
            ((a = h), l.set(s.key, a, "text")),
          this.isCollapsed() &&
            c === h &&
            (Zo(d) ||
              !d.canInsertTextAfter() ||
              (!g.canInsertTextAfter() && null === d.getNextSibling())))
        ) {
          var _t72 = d.getNextSibling();
          if (
            ((ir(_t72) && _t72.canInsertTextBefore() && !Zo(_t72)) ||
              ((_t72 = or()),
              _t72.setFormat(o),
              _t72.setStyle(i),
              g.canInsertTextAfter()
                ? d.insertAfter(_t72)
                : g.insertAfter(_t72)),
            _t72.select(0, 0),
            (d = _t72),
            "" !== e)
          )
            return void this.insertText(e);
        } else if (
          this.isCollapsed() &&
          0 === c &&
          (Zo(d) ||
            !d.canInsertTextBefore() ||
            (!g.canInsertTextBefore() && null === d.getPreviousSibling()))
        ) {
          var _t73 = d.getPreviousSibling();
          if (
            ((ir(_t73) && !Zo(_t73)) ||
              ((_t73 = or()),
              _t73.setFormat(o),
              g.canInsertTextBefore()
                ? d.insertBefore(_t73)
                : g.insertBefore(_t73)),
            _t73.select(),
            (d = _t73),
            "" !== e)
          )
            return void this.insertText(e);
        } else if (d.isSegmented() && c !== h) {
          var _t74 = or(d.getTextContent());
          (_t74.setFormat(o), d.replace(_t74), (d = _t74));
        } else if (!this.isCollapsed() && "" !== e) {
          var _t75 = _.getParent();
          if (
            !g.canInsertTextBefore() ||
            !g.canInsertTextAfter() ||
            (mo(_t75) &&
              (!_t75.canInsertTextBefore() || !_t75.canInsertTextAfter()))
          )
            return (
              this.insertText(""),
              Or(this.anchor, this.focus),
              void this.insertText(e)
            );
        }
        if (1 === f) {
          if (Qo(d)) {
            var _t76 = or(e);
            return (_t76.select(), void d.replace(_t76));
          }
          var _t77 = d.getFormat(),
            _n40 = d.getStyle();
          if (c !== a || (_t77 === o && _n40 === i)) {
            if (ar(d)) {
              var _t78 = or(e);
              return (
                _t78.setFormat(o),
                _t78.setStyle(i),
                _t78.select(),
                void d.replace(_t78)
              );
            }
          } else {
            if ("" !== d.getTextContent()) {
              var _t79 = or(e);
              if ((_t79.setFormat(o), _t79.setStyle(i), _t79.select(), 0 === c))
                d.insertBefore(_t79, !1);
              else {
                var _d$splitText = d.splitText(c),
                  _e53 = _d$splitText[0];
                _e53.insertAfter(_t79, !1);
              }
              return void (
                _t79.isComposing() &&
                "text" === this.anchor.type &&
                (this.anchor.offset -= e.length)
              );
            }
            (d.setFormat(o), d.setStyle(i));
          }
          var _r26 = a - c;
          ((d = d.spliceText(c, _r26, e, !0)),
            "" === d.getTextContent()
              ? d.remove()
              : "text" === this.anchor.type &&
                ((this.format = _t77),
                (this.style = _n40),
                d.isComposing() && (this.anchor.offset -= e.length)));
        } else {
          var _t80 = new Set([].concat(d.getParentKeys(), _.getParentKeys())),
            _n41 = mo(d) ? d : d.getParentOrThrow();
          var _r27 = mo(_) ? _ : _.getParentOrThrow(),
            _o21 = _;
          if (!_n41.is(_r27) && _r27.isInline())
            do {
              ((_o21 = _r27), (_r27 = _r27.getParentOrThrow()));
            } while (_r27.isInline());
          if (
            ("text" === l.type && (0 !== a || "" === _.getTextContent())) ||
            ("element" === l.type && _.getIndexWithinParent() < a)
          ) {
            if (ir(_) && !Qo(_) && a !== _.getTextContentSize()) {
              if (_.isSegmented()) {
                var _t81 = or(_.getTextContent());
                (_.replace(_t81), (_ = _t81));
              }
              (To(l.getNode()) ||
                "text" !== l.type ||
                (_ = _.spliceText(0, a, "")),
                _t80.add(_.__key));
            } else {
              var _t82 = _.getParentOrThrow();
              _t82.canBeEmpty() || 1 !== _t82.getChildrenSize()
                ? _.remove()
                : _t82.remove();
            }
          } else _t80.add(_.__key);
          var _i10 = _r27.getChildren(),
            _s7 = new Set(u),
            _g4 = _n41.is(_r27),
            _p2 = _n41.isInline() && null === d.getNextSibling() ? _n41 : d;
          for (var _t83 = _i10.length - 1; _t83 >= 0; _t83--) {
            var _e54 = _i10[_t83];
            if (_e54.is(d) || (mo(_e54) && _e54.isParentOf(d))) break;
            _e54.isAttached() &&
              (!_s7.has(_e54) || _e54.is(_o21)
                ? _g4 || _p2.insertAfter(_e54, !1)
                : _e54.remove());
          }
          if (!_g4) {
            var _e55 = _r27,
              _n42 = null;
            for (; null !== _e55; ) {
              var _r28 = _e55.getChildren(),
                _o22 = _r28.length;
              ((0 === _o22 || _r28[_o22 - 1].is(_n42)) &&
                (_t80["delete"](_e55.__key), (_n42 = _e55)),
                (_e55 = _e55.getParent()));
            }
          }
          if (Qo(d)) {
            if (c === h) d.select();
            else {
              var _t84 = or(e);
              (_t84.select(), d.replace(_t84));
            }
          } else
            ((d = d.spliceText(c, h - c, e, !0)),
              "" === d.getTextContent()
                ? d.remove()
                : "text" === this.anchor.type &&
                  ((this.format = d.getFormat()),
                  (this.style = d.getStyle()),
                  d.isComposing() && (this.anchor.offset -= e.length)));
          for (var _e56 = 1; _e56 < f; _e56++) {
            var _n43 = u[_e56],
              _r29 = _n43.__key;
            _t80.has(_r29) || _n43.remove();
          }
        }
      };
      _proto9.removeText = function removeText() {
        var t = Dr() === this;
        (rl(this, cl(ol(this))), t && Dr() !== this && yi(this));
      };
      _proto9.formatText = function formatText(t, e) {
        var _d$splitText2, _p$splitText;
        if (e === void 0) {
          e = null;
        }
        if (this.isCollapsed()) return (this.toggleFormat(t), void li(null));
        var n = this.getNodes(),
          r = [];
        for (var _t85 of n) ir(_t85) && r.push(_t85);
        var o = function o(e) {
            n.forEach(function (n) {
              if (mo(n)) {
                var _r30 = n.getFormatFlags(t, e);
                n.setTextFormat(_r30);
              }
            });
          },
          i = r.length;
        if (0 === i) return (this.toggleFormat(t), li(null), void o(e));
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
          if (Zo(d) || (0 === h && y === d.getTextContentSize()))
            d.setFormat(g);
          else {
            var _t86 = d.splitText(h, y),
              _e57 = 0 === h ? _t86[0] : _t86[1];
            (_e57.setFormat(g),
              "text" === a.type && a.set(_e57.__key, 0, "text"),
              "text" === u.type && u.set(_e57.__key, y - h, "text"));
          }
          return void (this.format = g);
        }
        (0 === h ||
          Zo(d) ||
          ((_d$splitText2 = d.splitText(h)), (d = _d$splitText2[1]), (h = 0)),
          d.setFormat(g));
        var m = p.getFormatFlags(t, g);
        y > 0 &&
          (y === p.getTextContentSize() ||
            Zo(p) ||
            ((_p$splitText = p.splitText(y)),
            (p = _p$splitText[0]),
            _p$splitText),
          p.setFormat(m));
        for (var _e58 = f + 1; _e58 < _; _e58++) {
          var _n44 = r[_e58],
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
          var _n45 = Dr();
          return (_r(_n45) || t(134), _n45.insertNodes(e));
        }
        var n = (this.isBackward() ? this.focus : this.anchor).getNode(),
          r = Cs(n, cs),
          o = e[e.length - 1];
        if (mo(r) && "__language" in r) {
          if ("__language" in e[0]) this.insertText(e[0].getTextContent());
          else {
            var _t87 = Br(this);
            (r.splice(_t87, 0, e), o.selectEnd());
          }
          return;
        }
        if (
          !e.some(function (t) {
            return (mo(t) || So(t)) && !t.isInline();
          })
        ) {
          mo(r) || t(211, n.constructor.name, n.getType());
          var _i11 = Br(this);
          return (r.splice(_i11, 0, e), void o.selectEnd());
        }
        var i = (function (t) {
            var e = Do();
            var n = null;
            for (var _r31 = 0; _r31 < t.length; _r31++) {
              var _o24 = t[_r31],
                _i12 = zn(_o24);
              if (
                _i12 ||
                (So(_o24) && _o24.isInline()) ||
                (mo(_o24) && _o24.isInline()) ||
                ir(_o24) ||
                _o24.isParentRequired()
              ) {
                if (
                  null === n &&
                  ((n = _o24.createParentElementNode()), e.append(n), _i12)
                )
                  continue;
                null !== n && n.append(_o24);
              } else (e.append(_o24), (n = null));
            }
            return e;
          })(e),
          s = i.getLastDescendant(),
          l = i.getChildren(),
          c = !mo(r) || !r.isEmpty() ? this.insertParagraph() : null,
          a = l[l.length - 1];
        var u = l[0];
        var f;
        (mo((f = u)) &&
          cs(f) &&
          !f.isEmpty() &&
          mo(r) &&
          (!r.isEmpty() || r.canMergeWhenEmpty()) &&
          (mo(r) || t(211, n.constructor.name, n.getType()),
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
              for (var _t88 of i) s = s.insertAfter(_t88);
            })(r, u)));
        var d = Cs(s, cs);
        (c &&
          mo(d) &&
          (c.canMergeWhenEmpty() || cs(a)) &&
          (d.append.apply(d, c.getChildren()), c.remove()),
          mo(r) && r.isEmpty() && r.remove(),
          s.selectEnd());
        var h = mo(r) ? r.getLastChild() : null;
        zn(h) && d !== r && h.remove();
      };
      _proto9.insertParagraph = function insertParagraph() {
        if ("root" === this.anchor.key) {
          var _t89 = Do();
          return (
            _i().splice(this.anchor.offset, 0, [_t89]),
            _t89.select(),
            _t89
          );
        }
        var e = Br(this),
          n = Cs(this.anchor.getNode(), cs);
        mo(n) || t(213);
        var r = n.getChildAtIndex(e),
          o = r ? [r].concat(r.getNextSiblings()) : [],
          i = n.insertNewAfter(this, !1);
        return i ? (i.append.apply(i, o), i.selectStart(), i) : null;
      };
      _proto9.insertLineBreak = function insertLineBreak(t) {
        var e = Bn();
        if ((this.insertNodes([e]), t)) {
          var _t90 = e.getParentOrThrow(),
            _n46 = e.getIndexWithinParent();
          _t90.select(_n46, _n46);
        }
      };
      _proto9.extract = function extract() {
        var _n$splitText;
        var t = [].concat(this.getNodes()),
          e = t.length;
        var n = t[0],
          r = t[e - 1];
        var _xr2 = xr(this),
          o = _xr2[0],
          i = _xr2[1],
          s = this.isBackward(),
          _ref14 = s ? [this.focus, this.anchor] : [this.anchor, this.focus],
          l = _ref14[0],
          c = _ref14[1],
          _ref15 = s ? [i, o] : [o, i],
          a = _ref15[0],
          u = _ref15[1];
        if (0 === e) return [];
        if (1 === e) {
          if (ir(n) && !this.isCollapsed()) {
            var _t91 = n.splitText(a, u),
              _e59 = 0 === a ? _t91[0] : _t91[1];
            return _e59
              ? (l.set(_e59.getKey(), 0, "text"),
                c.set(_e59.getKey(), _e59.getTextContentSize(), "text"),
                [_e59])
              : [];
          }
          return [n];
        }
        if (
          (ir(n) &&
            (a === n.getTextContentSize()
              ? t.shift()
              : 0 !== a &&
                ((_n$splitText = n.splitText(a)),
                (n = _n$splitText[1]),
                (t[0] = n),
                l.set(n.getKey(), 0, "text"))),
          ir(r))
        ) {
          var _r$splitText;
          var _e60 = r.getTextContent().length;
          0 === u
            ? t.pop()
            : u !== _e60 &&
              ((_r$splitText = r.splitText(u)),
              (r = _r$splitText[0]),
              (t[t.length - 1] = r),
              c.set(r.getKey(), r.getTextContentSize(), "text"));
        }
        return t;
      };
      _proto9.modify = function modify(t, e, n) {
        if (Wr(this, t, e, n)) return;
        var r = "move" === t,
          o = Zr(),
          i = es(Ji(o));
        if (!i) return;
        var s = o._blockCursorElement,
          l = o._rootElement,
          c = this.focus.getNode();
        if (
          (null === l ||
            null === s ||
            !mo(c) ||
            c.isInline() ||
            c.canBeEmpty() ||
            ts(s, o, l),
          this.dirty)
        ) {
          var _t92 = $i(o, this.anchor.key),
            _e61 = $i(o, this.focus.key);
          ("text" === this.anchor.type && (_t92 = ni(_t92)),
            "text" === this.focus.type && (_e61 = ni(_e61)),
            _t92 &&
              _e61 &&
              Lr(i, _t92, this.anchor.offset, _e61, this.focus.offset));
        }
        if (
          ((function (t, e, n, r) {
            t.modify(e, n, r);
          })(i, t, e ? "backward" : "forward", n),
          i.rangeCount > 0)
        ) {
          var _t93 = i.getRangeAt(0),
            _n47 = this.anchor.getNode(),
            _o25 = To(_n47) ? _n47 : Hi(_n47);
          if ((this.applyDOMRange(_t93), (this.dirty = !0), !r)) {
            var _n48 = this.getNodes(),
              _r32 = [];
            var _s8 = !1;
            for (var _t94 = 0; _t94 < _n48.length; _t94++) {
              var _e62 = _n48[_t94];
              Yi(_e62, _o25) ? _r32.push(_e62) : (_s8 = !0);
            }
            if (_s8 && _r32.length > 0)
              if (e) {
                var _t95 = _r32[0];
                mo(_t95)
                  ? _t95.selectStart()
                  : _t95.getParentOrThrow().selectStart();
              } else {
                var _t96 = _r32[_r32.length - 1];
                mo(_t96)
                  ? _t96.selectEnd()
                  : _t96.getParentOrThrow().selectEnd();
              }
            (i.anchorNode === _t93.startContainer &&
              i.anchorOffset === _t93.startOffset) ||
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
        "lineboundary" === n && Wr(this, t, e, n, "decorators");
      };
      _proto9.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            mo(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t97 = e.getParent(),
            _n49 =
              e.getNextSibling() ||
              (null === _t97 ? null : _t97.getNextSibling());
          if (mo(_n49) && _n49.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto9.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e63 = this.anchor;
          var _n50 = _e63.getNode();
          if (this.forwardDeletion(_e63, _n50, t)) return;
          var _r33 = js(tl(_e63, t ? "previous" : "next"));
          if (
            _r33.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            var _t98 = { type: "initial" };
            for (var _e64 of _r33.iterNodeCarets("shadowRoot"))
              if (ws(_e64)) {
                if (_e64.origin.isInline());
                else {
                  if (_e64.origin.isShadowRoot()) {
                    if ("merge-block" === _t98.type) break;
                    if (
                      mo(_r33.anchor.origin) &&
                      _r33.anchor.origin.isEmpty()
                    ) {
                      var _t99 = al(_e64);
                      (rl(this, Hs(_t99, _t99)), _r33.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t98.type &&
                    "merge-block" !== _t98.type) ||
                    (_t98 = {
                      block: _t98.block,
                      caret: _e64,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t98.type) break;
                if (Ds(_e64)) {
                  if (mo(_e64.origin)) {
                    if (_e64.origin.isInline()) {
                      if (!_e64.origin.isParentOf(_r33.anchor.origin)) break;
                    } else
                      _t98 = { block: _e64.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (So(_e64.origin)) {
                    if (_e64.origin.isIsolated());
                    else if (
                      "merge-next-block" === _t98.type &&
                      (_e64.origin.isKeyboardSelectable() ||
                        !_e64.origin.isInline()) &&
                      mo(_r33.anchor.origin) &&
                      _r33.anchor.origin.isEmpty()
                    ) {
                      _r33.anchor.origin.remove();
                      var _t100 = br();
                      (_t100.add(_e64.origin.getKey()), yi(_t100));
                    } else _e64.origin.remove();
                    return;
                  }
                  break;
                }
              }
            if ("merge-block" === _t98.type) {
              var _t101 = _t98,
                _e65 = _t101.caret,
                _n51 = _t101.block;
              return (
                rl(
                  this,
                  Hs(
                    !_e65.origin.isEmpty() && _n51.isEmpty()
                      ? il(Rs(_n51, _e65.direction))
                      : _r33.anchor,
                    _e65,
                  ),
                ),
                this.removeText()
              );
            }
          }
          var _o26 = this.focus;
          if ((this.modify("extend", t, "character"), this.isCollapsed())) {
            if (t && 0 === _e63.offset && Cr(this, _e63.getNode())) return;
          } else {
            var _r34 = "text" === _o26.type ? _o26.getNode() : null;
            if (
              ((_n50 = "text" === _e63.type ? _e63.getNode() : null),
              null !== _r34 && _r34.isSegmented())
            ) {
              var _e66 = _o26.offset,
                _i13 = _r34.getTextContentSize();
              if (_r34.is(_n50) || (t && _e66 !== _i13) || (!t && 0 !== _e66))
                return void Nr(_r34, t, _e66);
            } else if (null !== _n50 && _n50.isSegmented()) {
              var _o27 = _e63.offset,
                _i14 = _n50.getTextContentSize();
              if (_n50.is(_r34) || (t && 0 !== _o27) || (!t && _o27 !== _i14))
                return void Nr(_n50, t, _o27);
            }
            !(function (t, e) {
              var n = t.anchor,
                r = t.focus,
                o = n.getNode(),
                i = r.getNode();
              if (o === i && "text" === n.type && "text" === r.type) {
                var _t102 = n.offset,
                  _i15 = r.offset,
                  _s9 = _t102 < _i15,
                  _l7 = _s9 ? _t102 : _i15,
                  _c5 = _s9 ? _i15 : _t102,
                  _a6 = _c5 - 1;
                if (_l7 !== _a6) {
                  (function (t) {
                    return !(xi(t) || Sr(t));
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
          var _t103 = this.anchor.getNode();
          _t103.isEmpty() &&
            To(_t103.getParent()) &&
            null === _t103.getPreviousSibling() &&
            Cr(this, _t103);
        }
      };
      _proto9.deleteLine = function deleteLine(t) {
        (this.isCollapsed() && this.modify("extend", t, "lineboundary"),
          this.isCollapsed() ? this.deleteCharacter(t) : this.removeText());
      };
      _proto9.deleteWord = function deleteWord(t) {
        if (this.isCollapsed()) {
          var _e67 = this.anchor,
            _n52 = _e67.getNode();
          if (this.forwardDeletion(_e67, _n52, t)) return;
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
      return pr;
    })();
    function yr(t) {
      return t instanceof _gr;
    }
    function mr(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function xr(t) {
      var e = t.getStartEndPoints();
      if (null === e) return [0, 0];
      var n = e[0],
        r = e[1];
      return "element" === n.type &&
        "element" === r.type &&
        n.key === r.key &&
        n.offset === r.offset
        ? [0, 0]
        : [mr(n), mr(r)];
    }
    function Cr(t, e) {
      for (var _n53 = e; _n53; _n53 = _n53.getParent()) {
        if (mo(_n53)) {
          if (_n53.collapseAtStart(t)) return !0;
          if (Gi(_n53)) break;
        }
        if (_n53.getPreviousSibling()) break;
      }
      return !1;
    }
    var Sr = (function () {
      try {
        var _t104 = new RegExp("\\p{Emoji}", "u"),
          _e68 = _t104.test.bind(_t104);
        if (_e68("\u2764\ufe0f") && _e68("#\ufe0f\u20e3") && _e68("\u{1f44d}"))
          return _e68;
      } catch (t) {}
      return function () {
        return !1;
      };
    })();
    function Nr(t, e, n) {
      var r = t,
        o = r.getTextContent().split(/(?=\s)/g),
        i = o.length;
      var s = 0,
        l = 0;
      for (var _t105 = 0; _t105 < i; _t105++) {
        var _r35 = _t105 === i - 1;
        if (
          ((l = s), (s += o[_t105].length), (e && s === n) || s > n || _r35)
        ) {
          (o.splice(_t105, 1), _r35 && (l = void 0));
          break;
        }
      }
      var c = o.join("").trim();
      "" === c ? r.remove() : (r.setTextContent(c), r.select(l, l));
    }
    function Tr(e, n, r, o) {
      var i,
        s = n;
      if (rs(e)) {
        var _l8 = !1;
        var _c6 = e.childNodes,
          _a7 = _c6.length,
          _u7 = o._blockCursorElement;
        s === _a7 && ((_l8 = !0), (s = _a7 - 1));
        var _f5 = _c6[s],
          _d5 = !1;
        if (_f5 === _u7) ((_f5 = _c6[s + 1]), (_d5 = !0));
        else if (null !== _u7) {
          var _t106 = _u7.parentNode;
          if (e === _t106) {
            n > Array.prototype.indexOf.call(_t106.children, _u7) && s--;
          }
        }
        if (((i = mi(_f5)), ir(i))) s = Ks(i, _l8 ? "next" : "previous");
        else {
          var _c7 = mi(e);
          if (null === _c7) return null;
          if (mo(_c7)) {
            var _u8$resolveChildIndex;
            var _a8 = o.getElementByKey(_c7.getKey());
            null === _a8 && t(214);
            var _u8 = us(o).$getDOMSlot(_c7, _a8, o);
            ((_u8$resolveChildIndex = _u8.resolveChildIndex(_c7, _a8, e, n)),
              (_c7 = _u8$resolveChildIndex[0]),
              (s = _u8$resolveChildIndex[1]),
              mo(_c7) || t(215),
              _l8 &&
                s >= _c7.getChildrenSize() &&
                (s = Math.max(0, _c7.getChildrenSize() - 1)));
            var _f6 = _c7.getChildAtIndex(s);
            if (
              mo(_f6) &&
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
              var _t107 = _l8
                ? _f6.getLastDescendant()
                : _f6.getFirstDescendant();
              (null === _t107
                ? (_c7 = _f6)
                : ((_f6 = _t107),
                  (_c7 = mo(_f6) ? _f6 : _f6.getParentOrThrow())),
                (s = 0));
            }
            ir(_f6)
              ? ((i = _f6),
                (_c7 = null),
                (s = Ks(_f6, _l8 ? "next" : "previous")))
              : _f6 !== _c7 &&
                _l8 &&
                !_d5 &&
                (mo(_c7) || t(216),
                (s = Math.min(_c7.getChildrenSize(), s + 1)));
          } else {
            var _t108 = _c7.getIndexWithinParent();
            ((s = 0 === n && So(_c7) && mi(e) === _c7 ? _t108 : _t108 + 1),
              (_c7 = _c7.getParentOrThrow()));
          }
          if (mo(_c7)) return fr(_c7.__key, s, "element");
        }
      } else i = mi(e);
      return ir(i) ? fr(i.__key, Ks(i, s, "clamp"), "text") : null;
    }
    function vr(t, e, n) {
      var r = t.offset,
        o = t.getNode();
      if (0 === r) {
        var _r36 = o.getPreviousSibling(),
          _i16 = o.getParent();
        if (e) {
          if ((n || !e) && null === _r36 && mo(_i16) && _i16.isInline()) {
            var _e69 = _i16.getPreviousSibling();
            ir(_e69) && t.set(_e69.__key, _e69.getTextContent().length, "text");
          }
        } else
          mo(_r36) && !n && _r36.isInline()
            ? t.set(_r36.__key, _r36.getChildrenSize(), "element")
            : ir(_r36) &&
              t.set(_r36.__key, _r36.getTextContent().length, "text");
      } else if (r === o.getTextContent().length) {
        var _r37 = o.getNextSibling(),
          _i17 = o.getParent();
        if (e && mo(_r37) && _r37.isInline()) t.set(_r37.__key, 0, "element");
        else if (
          (n || e) &&
          null === _r37 &&
          mo(_i17) &&
          _i17.isInline() &&
          !_i17.canInsertTextAfter()
        ) {
          var _e70 = _i17.getNextSibling();
          ir(_e70) && t.set(_e70.__key, 0, "text");
        }
      }
    }
    function Or(t, e, n) {
      if ("text" === t.type && "text" === e.type) {
        var _n54 = t.isBefore(e),
          _r38 = t.is(e);
        (vr(t, _n54, _r38),
          vr(e, !_n54, _r38),
          _r38 && e.set(t.key, t.offset, t.type));
      }
    }
    function Er(t, e, n, r, o, i) {
      if (null === t || null === n || !Go(o, t, n)) return null;
      var s = Tr(t, e, _r(i) ? i.anchor : null, o);
      if (null === s) return null;
      var l = Tr(n, r, _r(i) ? i.focus : null, o);
      if (null === l) return null;
      if ("element" === s.type && "element" === l.type) {
        var _e71 = mi(t),
          _r39 = mi(n);
        if (So(_e71) && So(_r39)) return null;
      }
      return (Or(s, l), [s, l]);
    }
    function kr(t, e, n, r, o, i) {
      var s = Qr(),
        l = new _pr(fr(t, e, o), fr(n, r, i), 0, "");
      return ((l.dirty = !0), (s._selection = l), l);
    }
    function Mr() {
      var t = fr("root", 0, "element"),
        e = fr("root", 0, "element");
      return new _pr(t, e, 0, "");
    }
    function br() {
      return new _gr(new Set());
    }
    function Ar(t, e, n, r) {
      var o = n._window;
      if (null === o) return null;
      var i = r || o.event,
        s = i ? i.type : void 0,
        l = "selectionchange" === s,
        c =
          !$ &&
          (l ||
            "beforeinput" === s ||
            "compositionstart" === s ||
            "compositionend" === s ||
            ("click" === s && i && 3 === i.detail) ||
            "drop" === s ||
            void 0 === s);
      var a, u, f, d;
      if (_r(t) && !c) return t.clone();
      if (null === e) return null;
      if (
        ((a = e.anchorNode),
        (u = e.focusNode),
        (f = e.anchorOffset),
        (d = e.focusOffset),
        (l || void 0 === s) && _r(t) && !Go(n, a, u))
      )
        return t.clone();
      var h = Er(a, f, u, d, n, t);
      if (null === h) return null;
      var g = h[0],
        _ = h[1];
      var p = 0,
        y = "";
      if (_r(t)) {
        var _e72 = t.anchor;
        if (g.key === _e72.key) ((p = t.format), (y = t.style));
        else {
          var _t109 = g.getNode();
          ir(_t109)
            ? ((p = _t109.getFormat()), (y = _t109.getStyle()))
            : mo(_t109) &&
              ((p = _t109.getTextFormat()), (y = _t109.getTextStyle()));
        }
      }
      return new _pr(g, _, p, y);
    }
    function Dr() {
      return Qr()._selection;
    }
    function wr() {
      return Zr()._editorState._selection;
    }
    function Pr(t, e, n, r) {
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
        var _e73 = o.offset;
        if ((n <= _e73 && r > 0) || (n < _e73 && r < 0)) {
          var _n55 = Math.max(0, _e73 + r);
          (o.set(c, _n55, "element"), i.set(c, _n55, "element"), Ir(t));
        }
      } else {
        var _s0 = t.isBackward(),
          _l9 = _s0 ? i : o,
          _a9 = _l9.getNode(),
          _u9 = _s0 ? o : i,
          _f7 = _u9.getNode();
        if (e.is(_a9)) {
          var _t110 = _l9.offset;
          ((n <= _t110 && r > 0) || (n < _t110 && r < 0)) &&
            _l9.set(c, Math.max(0, _t110 + r), "element");
        }
        if (e.is(_f7)) {
          var _t111 = _u9.offset;
          ((n <= _t111 && r > 0) || (n < _t111 && r < 0)) &&
            _u9.set(c, Math.max(0, _t111 + r), "element");
        }
      }
      Ir(t);
    }
    function Ir(t) {
      var e = t.anchor,
        n = e.offset,
        r = t.focus,
        o = r.offset,
        i = e.getNode(),
        s = r.getNode();
      if (t.isCollapsed()) {
        if (!mo(i)) return;
        var _t112 = i.getChildrenSize(),
          _o28 = n >= _t112,
          _s1 = _o28 ? i.getChildAtIndex(_t112 - 1) : i.getChildAtIndex(n);
        if (ir(_s1)) {
          var _t113 = 0;
          (_o28 && (_t113 = _s1.getTextContentSize()),
            e.set(_s1.__key, _t113, "text"),
            r.set(_s1.__key, _t113, "text"));
        }
        return;
      }
      if (mo(i)) {
        var _t114 = i.getChildrenSize(),
          _r40 = n >= _t114,
          _o29 = _r40 ? i.getChildAtIndex(_t114 - 1) : i.getChildAtIndex(n);
        if (ir(_o29)) {
          var _t115 = 0;
          (_r40 && (_t115 = _o29.getTextContentSize()),
            e.set(_o29.__key, _t115, "text"));
        }
      }
      if (mo(s)) {
        var _t116 = s.getChildrenSize(),
          _e74 = o >= _t116,
          _n56 = _e74 ? s.getChildAtIndex(_t116 - 1) : s.getChildAtIndex(o);
        if (ir(_n56)) {
          var _t117 = 0;
          (_e74 && (_t117 = _n56.getTextContentSize()),
            r.set(_n56.__key, _t117, "text"));
        }
      }
    }
    function Fr(t, e, n, r, o) {
      var i = null,
        s = 0,
        l = null;
      (null !== r
        ? ((i = r.__key),
          ir(r)
            ? ((s = r.getTextContentSize()), (l = "text"))
            : mo(r) && ((s = r.getChildrenSize()), (l = "element")))
        : null !== o &&
          ((i = o.__key), ir(o) ? (l = "text") : mo(o) && (l = "element")),
        null !== i && null !== l
          ? t.set(i, s, l)
          : ((s = e.getIndexWithinParent()),
            -1 === s && (s = n.getChildrenSize()),
            t.set(n.__key, s, "element")));
    }
    function Rr(t, e, n, r, o) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : o), "text")
        : t.offset > r.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function Lr(t, e, n, r, o) {
      try {
        t.setBaseAndExtent(e, n, r, o);
      } catch (t) {}
    }
    function Kr(t, e, n) {
      var r = $i(t, e.getKey());
      if (mo(e)) {
        var _o30 = us(t).$getDOMSlot(e, r, t);
        return [_o30.element, n + _o30.getFirstChildOffset()];
      }
      return [r, n];
    }
    function $r(t, e, n, r, o, s, l) {
      var c = document.activeElement;
      if ((o.has(Mn) && c !== s) || (null !== c && Ho(c))) return;
      if (!_r(e))
        return void (
          null !== t &&
          Go(n, r.anchorNode, r.focusNode) &&
          r.removeAllRanges()
        );
      var a = e.anchor,
        u = e.focus,
        f = a.getNode(),
        d = u.getNode(),
        _Kr = Kr(n, f, a.offset),
        h = _Kr[0],
        g = _Kr[1],
        _Kr2 = Kr(n, d, u.offset),
        _ = _Kr2[0],
        p = _Kr2[1],
        y = e.format,
        m = e.style,
        x = e.isCollapsed();
      var C = h,
        S = _,
        N = !1;
      var T, v, O, E, k;
      if (
        ("text" === a.type
          ? ((C = ni(h)), (N = f.getFormat() !== y || f.getStyle() !== m))
          : _r(t) && "text" === t.anchor.type && (N = !0),
        "text" === u.type && (S = ni(_)),
        null !== C && null !== S) &&
        (x &&
          (null === t || N || (_r(t) && (t.format !== y || t.style !== m))) &&
          ((T = y),
          (v = m),
          (O = g),
          (E = a.key),
          (k = performance.now()),
          (nn = [T, v, O, E, k])),
        ("Range" === r.type && x) ||
          r.anchorOffset !== g ||
          r.focusOffset !== p ||
          r.anchorNode !== C ||
          r.focusNode !== S ||
          ((null !== c && s.contains(c)) ||
            o.has(Dn) ||
            s.focus({ preventScroll: !0 }),
          "element" === a.type))
      ) {
        if (
          (Lr(r, C, g, S, p),
          !i ||
            !e.isCollapsed() ||
            null === s ||
            o.has(Dn) ||
            (null !== document.activeElement &&
              s.contains(document.activeElement)) ||
            s.focus({ preventScroll: !0 }),
          !o.has(bn) &&
            e.isCollapsed() &&
            null !== s &&
            s === document.activeElement)
        ) {
          var _t118 =
            _r(e) && "element" === e.anchor.type
              ? C.childNodes[g] || null
              : r.rangeCount > 0
                ? r.getRangeAt(0)
                : null;
          if (null !== _t118) {
            var _e75;
            if (_t118 instanceof Text) {
              var _n57 = document.createRange();
              (_n57.selectNode(_t118), (_e75 = _n57.getBoundingClientRect()));
            } else _e75 = _t118.getBoundingClientRect();
            !(function (t, e, n) {
              var r = zi(n),
                o = ji(r);
              if (null === r || null === o) return;
              var i = e.top,
                s = e.bottom,
                l = 0,
                c = 0,
                a = n;
              for (; null !== a; ) {
                var _e76 = a === r.body;
                if (_e76) {
                  ((l = 0), (c = Ji(t).innerHeight));
                  var _e77 = o.getComputedStyle(r.documentElement),
                    _n58 = parseFloat(_e77.scrollPaddingTop),
                    _i18 = parseFloat(_e77.scrollPaddingBottom);
                  (isFinite(_n58) && (l += _n58),
                    isFinite(_i18) && (c -= _i18));
                } else {
                  var _t119 = a.getBoundingClientRect();
                  ((l = _t119.top), (c = _t119.bottom));
                }
                var _n59 = 0;
                if (
                  (i < l ? (_n59 = -(l - i)) : s > c && (_n59 = s - c),
                  0 !== _n59)
                )
                  if (_e76) o.scrollBy(0, _n59);
                  else {
                    var _t120 = a.scrollTop;
                    a.scrollTop += _n59;
                    var _e78 = a.scrollTop - _t120;
                    ((i -= _e78), (s -= _e78));
                  }
                if (_e76) break;
                a = Bi(a);
              }
            })(n, _e75, s);
          }
        }
        Ve = !0;
      }
    }
    function Br(e) {
      var n = e;
      e.isCollapsed() || n.removeText();
      var r = Dr();
      (_r(r) && (n = r), _r(n) || t(161));
      var o = n.anchor;
      var i = o.getNode(),
        s = o.offset;
      for (; !cs(i); ) {
        var _zr;
        var _t121 = i;
        if (((_zr = zr(i, s)), (i = _zr[0]), (s = _zr[1]), _t121.is(i))) break;
      }
      return s;
    }
    function zr(t, e) {
      var n = t.getParent();
      if (!n) {
        var _t122 = Do();
        return (_i().append(_t122), _t122.select(), [_i(), 0]);
      }
      if (ir(t)) {
        var _r41 = t.splitText(e);
        if (0 === _r41.length) return [n, t.getIndexWithinParent()];
        var _o31 = 0 === e ? 0 : 1;
        return [n, _r41[0].getIndexWithinParent() + _o31];
      }
      if (!mo(t) || 0 === e) return [n, t.getIndexWithinParent()];
      var r = t.getChildAtIndex(e);
      if (r) {
        var _n60 = new _pr(
            fr(t.__key, e, "element"),
            fr(t.__key, e, "element"),
            0,
            "",
          ),
          _o32 = t.insertNewAfter(_n60);
        _o32 && _o32.append.apply(_o32, [r].concat(r.getNextSiblings()));
      }
      return [n, t.getIndexWithinParent() + 1];
    }
    function Wr(t, e, n, r, o) {
      if (o === void 0) {
        o = "decorators-and-blocks";
      }
      if ("move" === e && "character" === r && !t.isCollapsed()) {
        var _ref16 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e79 = _ref16[0],
          _r42 = _ref16[1];
        return (_r42.set(_e79.key, _e79.offset, _e79.type), !0);
      }
      var i = tl(t.focus, n ? "previous" : "next"),
        s = "lineboundary" === r,
        l = "move" === e;
      var c = i,
        a = "decorators-and-blocks" === o;
      if (!ul(c)) {
        for (var _t123 of c) {
          a = !1;
          var _e80 = _t123.origin;
          if (
            !So(_e80) ||
            _e80.isIsolated() ||
            ((c = _t123), !s || !_e80.isInline())
          )
            break;
        }
        if (a)
          for (var _t124 of js(i).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (ws(_t124)) _t124.origin.isInline() || (c = _t124);
            else {
              if (mo(_t124.origin)) continue;
              So(_t124.origin) && !_t124.origin.isInline() && (c = _t124);
            }
            break;
          }
      }
      if (c === i) return !1;
      if (l && !s && So(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t125 = br();
        return (_t125.add(c.origin.getKey()), yi(_t125), !0);
      }
      return ((c = al(c)), l && el(t.anchor, c), el(t.focus, c), a || !s);
    }
    var Ur = null,
      Yr = null,
      jr = !1,
      Jr = !1,
      Hr = 0;
    var Gr = { characterData: !0, childList: !0, subtree: !0 };
    function Vr() {
      return jr || (null !== Ur && Ur._readOnly);
    }
    function qr() {
      jr && t(13);
    }
    function Xr() {
      Hr > 99 && t(14);
    }
    function Qr() {
      return (null === Ur && t(195, to()), Ur);
    }
    function Zr() {
      return (null === Yr && t(337, to()), Yr);
    }
    function to() {
      var t = 0;
      var e = new Set(),
        n = _$o.version;
      if ("undefined" != typeof window)
        for (var _r43 of document.querySelectorAll("[contenteditable]")) {
          var _o33 = Xo(_r43);
          if (Vo(_o33)) t++;
          else if (_o33) {
            var _t126 = String(_o33.constructor.version || "<0.17.1");
            (_t126 === n &&
              (_t126 +=
                " (separately built, likely a bundler configuration issue)"),
              e.add(_t126));
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
    function eo() {
      return Yr;
    }
    function no(t, e, n) {
      var r = e.__type,
        o = Uo(t, r);
      var i = n.get(r);
      void 0 === i && ((i = Array.from(o.transforms)), n.set(r, i));
      var s = i.length;
      for (var _t127 = 0; _t127 < s && (i[_t127](e), e.isAttached()); _t127++);
    }
    function ro(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function oo(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var r = e;
      Array.isArray(e) || (r = [e]);
      for (var _t128 of r) n.add(_t128);
    }
    function io(e, n) {
      var r = e.type,
        o = n.get(r);
      void 0 === o && t(17, r);
      var i = o.klass;
      e.type !== i.getType() && t(18, i.name);
      var s = i.importJSON(e),
        l = e.children;
      if (mo(s) && Array.isArray(l))
        for (var _t129 = 0; _t129 < l.length; _t129++) {
          var _e81 = io(l[_t129], n);
          s.append(_e81);
        }
      return s;
    }
    function so(t, e, n) {
      var r = Ur,
        o = jr,
        i = Yr;
      ((Ur = e), (jr = !0), (Yr = t));
      try {
        return n();
      } finally {
        ((Ur = r), (jr = o), (Yr = i));
      }
    }
    function lo(t, e) {
      var n = t._pendingEditorState,
        r = t._rootElement,
        o = t._headless || null === r;
      if (null === n)
        return void (t._deferred.length > 0 && uo(t, t._deferred));
      var i = t._editorState,
        s = i._selection,
        l = n._selection,
        c = 0 !== t._dirtyType,
        a = Ur,
        u = jr,
        f = Yr,
        d = t._updating,
        h = t._observer;
      var g = null;
      if (
        ((t._pendingEditorState = null),
        (t._editorState = n),
        !o && c && null !== h)
      ) {
        ((Yr = t), (Ur = n), (jr = !1), (t._updating = !0));
        try {
          var _e82 = t._dirtyType,
            _r44 = t._dirtyElements,
            _o34 = t._dirtyLeaves;
          (h.disconnect(), (g = Ut(i, n, t, _e82, _r44, _o34)));
        } catch (e) {
          if ((e instanceof Error && t._onError(e), Jr)) throw e;
          return (
            Io(t, null, r, n),
            G(t),
            (t._dirtyType = 2),
            (Jr = !0),
            lo(t, i),
            void (Jr = !1)
          );
        } finally {
          (h.observe(r, Gr), (t._updating = d), (Ur = a), (jr = u), (Yr = f));
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
          for (i in r) o.has(i) || (r === n && (r = hi(t)), delete r[i]);
        })(t, n));
      var C = o ? null : es(Ji(t));
      if (
        t._editable &&
        null !== C &&
        (c || null === l || l.dirty || !l.is(s)) &&
        null !== r &&
        !m.has(An)
      ) {
        ((Yr = t), (Ur = n));
        try {
          if ((null !== h && h.disconnect(), c || null === l || l.dirty)) {
            var _e83 = t._blockCursorElement;
            (null !== _e83 && ts(_e83, t, r), $r(s, l, t, C, m, r));
          }
          !(function (t, e, n) {
            var r = t._blockCursorElement;
            if (
              _r(n) &&
              n.isCollapsed() &&
              "element" === n.anchor.type &&
              e.contains(document.activeElement)
            ) {
              var _o35 = n.anchor,
                _i19 = _o35.getNode(),
                _s10 = _o35.offset;
              var _l0 = !1,
                _c8 = null;
              if (_s10 === _i19.getChildrenSize()) {
                Zi(_i19.getChildAtIndex(_s10 - 1)) && (_l0 = !0);
              } else {
                var _e84 = _i19.getChildAtIndex(_s10);
                if (null !== _e84 && Zi(_e84)) {
                  var _n61 = _e84.getPreviousSibling();
                  (null === _n61 || Zi(_n61)) &&
                    ((_l0 = !0), (_c8 = t.getElementByKey(_e84.__key)));
                }
              }
              if (_l0) {
                var _n62 = t.getElementByKey(_i19.__key);
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
                            var _t130 = pl(r);
                            r = e.blockCursor = _t130;
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
            null !== r && ts(r, t, e);
          })(t, r, l);
        } finally {
          (null !== h && h.observe(r, Gr), (Yr = f), (Ur = a));
        }
      }
      (null !== g &&
        (function (t, e, n, r, o) {
          var i = Array.from(t._listeners.mutation),
            s = i.length;
          for (var _t131 = 0; _t131 < s; _t131++) {
            var _i$_t = i[_t131],
              _s11 = _i$_t[0],
              _l1 = _i$_t[1];
            for (var _t132 of _l1) {
              var _i20 = e.get(_t132);
              void 0 !== _i20 &&
                _s11(_i20, {
                  dirtyLeaves: r,
                  prevEditorState: o,
                  updateTags: n,
                });
            }
          }
        })(t, g, m, _, i),
        _r(l) ||
          null === l ||
          (null !== s && s.is(l)) ||
          t.dispatchCommand(Jt, void 0));
      var S = t._pendingDecorators;
      (null !== S &&
        ((t._decorators = S),
        (t._pendingDecorators = null),
        co("decorator", t, !0, S)),
        (function (t, e, n) {
          var r = gi(e),
            o = gi(n);
          r !== o && co("textcontent", t, !0, o);
        })(t, e || i, n),
        co("update", t, !0, {
          dirtyElements: p,
          dirtyLeaves: _,
          editorState: n,
          mutatedNodes: g,
          normalizedNodes: y,
          prevEditorState: e || i,
          tags: m,
        }),
        uo(t, x),
        (function (t) {
          var e = t._updates;
          if (0 !== e.length) {
            var _n63 = e.shift();
            if (_n63) {
              var _e85 = _n63[0],
                _r45 = _n63[1];
              ho(t, _e85, _r45);
            }
          }
        })(t));
    }
    function co(t, e, n) {
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
        for (var _ref18 of _o36) {
          var _t133 = _ref18[0];
          var _e86 = _ref18[1];
          {
            _e86 && _e86();
            var _o37 = _t133.apply(void 0, r);
            _n64.has(_t133) ? _n64.set(_t133, _o37) : _o37 && _o37();
          }
        }
      } finally {
        e._updating = o;
      }
    }
    function ao(t, e, n, r) {
      var o = Ci(t);
      var i;
      for (var _t134 = 4; _t134 >= 0; _t134--) {
        var _loop = function _loop() {
            var l = o[_s12];
            if (_s12 > 0 && l._updating) {
              i = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e87 = c[_t134];
              if (_e87.size > 0) {
                var _t135 = !1;
                if (
                  (go(l, function () {
                    for (var _o38 of _e87)
                      if (_o38(n, r)) return void (_t135 = !0);
                  }),
                  _t135)
                )
                  return { v: _t135 };
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
            ao(i, e, n, r);
          }),
        !1
      );
    }
    function uo(t, e) {
      if (((t._deferred = []), 0 !== e.length)) {
        var _n65 = t._updating;
        t._updating = !0;
        try {
          for (var _t136 = 0; _t136 < e.length; _t136++) e[_t136]();
        } finally {
          t._updating = _n65;
        }
      }
    }
    function fo(e, n) {
      var r = e._updates;
      var o = n || !1;
      for (; 0 !== r.length; ) {
        var _n66 = r.shift();
        if (_n66) {
          var _r46 = _n66[0],
            _i21 = _n66[1],
            _s13 = e._pendingEditorState;
          var _l10 = void 0;
          (void 0 !== _i21 &&
            ((_l10 = _i21.onUpdate),
            _i21.skipTransforms && (o = !0),
            _i21.discrete && (null === _s13 && t(191), (_s13._flushSync = !0)),
            _l10 && e._deferred.push(_l10),
            oo(e, _i21.tag)),
            null == _s13 ? ho(e, _r46, _i21) : _r46());
        }
      }
      return o;
    }
    function ho(e, n, r) {
      var o = e._updateTags;
      var i,
        s = !1,
        l = !1;
      (void 0 !== r &&
        ((i = r.onUpdate),
        oo(e, r.tag),
        (s = r.skipTransforms || !1),
        (l = r.discrete || !1)),
        i && e._deferred.push(i));
      var c = e._editorState;
      var a = e._pendingEditorState,
        u = !1;
      ((null === a || a._readOnly) &&
        ((a = e._pendingEditorState = vo(a || c)), (u = !0)),
        (a._flushSync = l));
      var f = Ur,
        d = jr,
        h = Yr,
        g = e._updating;
      ((Ur = a), (jr = !1), (e._updating = !0), (Yr = e));
      var _ = e._headless || null === e.getRootElement();
      zo(null);
      try {
        u &&
          (_
            ? null !== c._selection && (a._selection = c._selection.clone())
            : (a._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  r = es(Ji(t));
                return _r(n) || null == n ? Ar(n, r, t, e) : n.clone();
              })(e, (r && r.event) || null)));
        var _o39 = e._compositionKey;
        (n(),
          (s = fo(e, s)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              r = t._selection;
            if (_r(r)) {
              var _t137 = r.anchor,
                _e88 = r.focus;
              var _o40;
              if (
                ("text" === _t137.type &&
                  ((_o40 = _t137.getNode()), _o40.selectionTransform(n, r)),
                "text" === _e88.type)
              ) {
                var _t138 = _e88.getNode();
                _o40 !== _t138 && _t138.selectionTransform(n, r);
              }
            }
          })(a, e),
          0 !== e._dirtyType &&
            (s
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    r = t._nodeMap;
                  for (var _t139 of n) {
                    var _e89 = r.get(_t139);
                    ir(_e89) &&
                      _e89.isAttached() &&
                      _e89.isSimpleText() &&
                      !_e89.isUnmergeable() &&
                      ct(_e89);
                  }
                })(a, e)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    r = e._dirtyElements,
                    o = t._nodeMap,
                    i = ci(),
                    s = new Map();
                  var l = n,
                    c = l.size,
                    a = r,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t140 of l) {
                        var _r47 = o.get(_t140);
                        (ir(_r47) &&
                          _r47.isAttached() &&
                          _r47.isSimpleText() &&
                          !_r47.isUnmergeable() &&
                          ct(_r47),
                          void 0 !== _r47 && ro(_r47, i) && no(e, _r47, s),
                          n.add(_t140));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        Hr++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t141 of a) {
                      var _n67 = _t141[0],
                        _l11 = _t141[1];
                      if ((r.set(_n67, _l11), !_l11)) continue;
                      var _c9 = o.get(_n67);
                      void 0 !== _c9 && ro(_c9, i) && no(e, _c9, s);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      Hr++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = r));
                })(a, e),
            fo(e),
            (function (t, e, n, r) {
              var o = t._nodeMap,
                i = e._nodeMap,
                s = [];
              for (var _ref20 of r) {
                var _t142 = _ref20[0];
                {
                  var _e90 = i.get(_t142);
                  void 0 !== _e90 &&
                    (_e90.isAttached() ||
                      (mo(_e90) && K(_e90, _t142, o, i, s, r),
                      o.has(_t142) || r["delete"](_t142),
                      s.push(_t142)));
                }
              }
              for (var _t143 of s) i["delete"](_t143);
              for (var _t144 of n) {
                var _e91 = i.get(_t144);
                void 0 === _e91 ||
                  _e91.isAttached() ||
                  (o.has(_t144) || n["delete"](_t144), i["delete"](_t144));
              }
            })(c, a, e._dirtyLeaves, e._dirtyElements)));
        _o39 !== e._compositionKey && (a._flushSync = !0);
        var _i22 = a._selection;
        if (_r(_i22)) {
          var _e92 = a._nodeMap,
            _n68 = _i22.anchor.key,
            _r48 = _i22.focus.key;
          (void 0 !== _e92.get(_n68) && void 0 !== _e92.get(_r48)) || t(19);
        } else yr(_i22) && 0 === _i22._nodes.size && (a._selection = null);
      } catch (t) {
        return (
          t instanceof Error && e._onError(t),
          (e._pendingEditorState = c),
          (e._dirtyType = 2),
          e._cloneNotNeeded.clear(),
          (e._dirtyLeaves = new Set()),
          e._dirtyElements.clear(),
          void lo(e)
        );
      } finally {
        ((Ur = f), (jr = d), (Yr = h), (e._updating = g), (Hr = 0));
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
          ? ((a._flushSync = !1), lo(e))
          : u &&
            jo(function () {
              lo(e);
            })
        : ((a._flushSync = !1),
          u && (o.clear(), (e._deferred = []), (e._pendingEditorState = null)));
    }
    function go(t, e, n) {
      Yr === t && void 0 === n ? e() : ho(t, e, n);
    }
    var _o60 = (function () {
      function _o(t, e, n) {
        ((this.element = t),
          (this.before = e || null),
          (this.after = n || null));
      }
      var _proto0 = _o.prototype;
      _proto0.withBefore = function withBefore(t) {
        return new _o(this.element, t, this.after);
      };
      _proto0.withAfter = function withAfter(t) {
        return new _o(this.element, this.before, t);
      };
      _proto0.withElement = function withElement(t) {
        return this.element === t ? this : new _o(t, this.before, this.after);
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
          var _e93 = "decorator" === t && (d || l || a);
          this.insertManagedLineBreak(_e93);
        }
      };
      _proto0.removeManagedLineBreak = function removeManagedLineBreak() {
        var t = this.getManagedLineBreak();
        if (t) {
          var _e94 = this.element,
            _n69 = "IMG" === t.nodeName ? t.nextSibling : null;
          (_n69 && _e94.removeChild(_n69),
            _e94.removeChild(t),
            (_e94.__lexicalLineBreak = void 0));
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
          var _t145 = document.createElement("img");
          (_t145.setAttribute("data-lexical-linebreak", "true"),
            _t145.style.setProperty("display", "inline", "important"),
            _t145.style.setProperty("border", "0px", "important"),
            _t145.style.setProperty("margin", "0px", "important"),
            (_t145.alt = ""),
            n.insertBefore(_t145, o),
            (n.__lexicalLineBreak = _t145));
        } else n.__lexicalLineBreak = o;
      };
      _proto0.getFirstChildOffset = function getFirstChildOffset() {
        var t = 0;
        for (var _e95 = this.after; null !== _e95; _e95 = _e95.previousSibling)
          t++;
        return t;
      };
      _proto0.resolveChildIndex = function resolveChildIndex(t, e, n, r) {
        if (n === this.element) {
          var _e96 = this.getFirstChildOffset();
          return [t, Math.min(_e96 + t.getChildrenSize(), Math.max(_e96, r))];
        }
        var o = po(e, n);
        o.push(r);
        var i = po(e, this.element);
        var s = t.getIndexWithinParent();
        for (var _t146 = 0; _t146 < i.length; _t146++) {
          var _e97 = o[_t146],
            _n70 = i[_t146];
          if (void 0 === _e97 || _e97 < _n70) break;
          if (_e97 > _n70) {
            s += 1;
            break;
          }
        }
        return [t.getParentOrThrow(), s];
      };
      return _o;
    })();
    function po(e, n) {
      var r = [];
      var o = n;
      for (; o !== e && null !== o; o = o.parentNode) {
        var _t147 = 0;
        for (
          var _e98 = o.previousSibling;
          null !== _e98;
          _e98 = _e98.previousSibling
        )
          _t147++;
        r.push(_t147);
      }
      return (o !== e && t(225), r.reverse());
    }
    var _yo4 = (function (_En3) {
      function yo(t) {
        var _this3;
        ((_this3 = _En3.call(this, t) || this),
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
      babelHelpers.inheritsLoose(yo, _En3);
      var _proto1 = yo.prototype;
      _proto1.afterCloneFrom = function afterCloneFrom(t) {
        (_En3.prototype.afterCloneFrom.call(this, t),
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
        var t = Zr()._dirtyElements;
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
          if ((ir(e) && t.push(e), mo(e))) {
            var _n71 = e.getAllTextNodes();
            t.push.apply(t, _n71);
          }
          e = e.getNextSibling();
        }
        return t;
      };
      _proto1.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; mo(t); ) {
          var _e99 = t.getFirstChild();
          if (null === _e99) break;
          t = _e99;
        }
        return t;
      };
      _proto1.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; mo(t); ) {
          var _e100 = t.getLastChild();
          if (null === _e100) break;
          t = _e100;
        }
        return t;
      };
      _proto1.getDescendantByIndex = function getDescendantByIndex(t) {
        var e = this.getChildren(),
          n = e.length;
        if (t >= n) {
          var _t148 = e[n - 1];
          return (mo(_t148) && _t148.getLastDescendant()) || _t148 || null;
        }
        var r = e[t];
        return (mo(r) && r.getFirstDescendant()) || r || null;
      };
      _proto1.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : ai(t);
      };
      _proto1.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var e = this.getFirstChild();
        return (null === e && t(45, this.__key), e);
      };
      _proto1.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : ai(t);
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
        for (var _r49 = 0; _r49 < n; _r49++) {
          var _o41 = e[_r49];
          ((t += _o41.getTextContent()),
            mo(_o41) && _r49 !== n - 1 && !_o41.isInline() && (t += v));
        }
        return t;
      };
      _proto1.getTextContentSize = function getTextContentSize() {
        var t = 0;
        var e = this.getChildren(),
          n = e.length;
        for (var _r50 = 0; _r50 < n; _r50++) {
          var _o42 = e[_r50];
          ((t += _o42.getTextContentSize()),
            mo(_o42) && _r50 !== n - 1 && !_o42.isInline() && (t += 2));
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
          var _e101 = w[t];
          return 0 !== (this.getFormat() & _e101);
        }
        return !1;
      };
      _proto1.hasTextFormat = function hasTextFormat(t) {
        var e = A[t];
        return 0 !== (this.getTextFormat() & e);
      };
      _proto1.getFormatFlags = function getFormatFlags(t, e) {
        return ri(this.getLatest().__textFormat, t, e);
      };
      _proto1.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto1.select = function select(t, e) {
        qr();
        var n = Dr();
        var r = t,
          o = e;
        var i = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t149 = this.getFirstChild();
            if (ir(_t149) || mo(_t149)) return _t149.select(0, 0);
          } else if (
            !((void 0 !== t && t !== i) || (void 0 !== e && e !== i))
          ) {
            var _t150 = this.getLastChild();
            if (ir(_t150) || mo(_t150)) return _t150.select();
          }
        (void 0 === r && (r = i), void 0 === o && (o = i));
        var s = this.__key;
        return _r(n)
          ? (n.anchor.set(s, r, "element"),
            n.focus.set(s, o, "element"),
            (n.dirty = !0),
            n)
          : kr(s, r, s, o, "element", "element");
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
        On(this) && t(324, this.__key, this.__type);
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
            var _t151 = this.getChildAtIndex(e);
            null !== _t151 && (u = _t151.getPreviousSibling());
          }
        if (n > 0) {
          var _e102 = null === u ? this.getFirstChild() : u.getNextSibling();
          for (var _r51 = 0; _r51 < n; _r51++) {
            null === _e102 && t(100);
            var _n72 = _e102.getNextSibling(),
              _r52 = _e102.__key;
            (ii(_e102.getWritable()), c.push(_r52), (_e102 = _n72));
          }
        }
        var d = u;
        for (var _e103 of r) {
          null !== d && _e103.is(d) && (u = d = d.getPreviousSibling());
          var _n73 = _e103.getWritable();
          (_n73.__parent === s && f--, ii(_n73));
          var _r53 = _e103.__key;
          if (null === d) ((i.__first = _r53), (_n73.__prev = null));
          else {
            var _t152 = d.getWritable();
            ((_t152.__next = _r53), (_n73.__prev = _t152.__key));
          }
          (_e103.__key === s && t(76),
            (_n73.__parent = s),
            l.push(_r53),
            (d = _e103));
        }
        if (e + n === o) {
          if (null !== d) {
            ((d.getWritable().__next = null), (i.__last = d.__key));
          }
        } else if (null !== a) {
          var _t153 = a.getWritable();
          if (null !== d) {
            var _e104 = d.getWritable();
            ((_t153.__prev = d.__key), (_e104.__next = a.__key));
          } else _t153.__prev = null;
        }
        if (((i.__size = f), c.length)) {
          var _t154 = Dr();
          if (_r(_t154)) {
            var _e105 = new Set(c),
              _n74 = new Set(l),
              _r54 = _t154.anchor,
              _o43 = _t154.focus;
            (xo(_r54, _e105, _n74) && Fr(_r54, _r54.getNode(), this, u, a),
              xo(_o43, _e105, _n74) && Fr(_o43, _o43.getNode(), this, u, a),
              0 !== f || this.canBeEmpty() || Gi(this) || this.remove());
          }
        }
        return i;
      };
      _proto1.getDOMSlot = function getDOMSlot(t) {
        return new _o60(t);
      };
      _proto1.exportDOM = function exportDOM(t) {
        var _En3$prototype$export = _En3.prototype.exportDOM.call(this, t),
          e = _En3$prototype$export.element;
        if (rs(e)) {
          var _t155 = this.getIndent();
          _t155 > 0 && (e.style.paddingInlineStart = 40 * _t155 + "px");
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
            _En3.prototype.exportJSON.call(this),
          ),
          e = this.getTextFormat(),
          n = this.getTextStyle();
        return (
          (0 === e && "" === n) ||
            Gi(this) ||
            this.getChildren().some(ir) ||
            (0 !== e && (t.textFormat = e), "" !== n && (t.textStyle = n)),
          t
        );
      };
      _proto1.updateFromJSON = function updateFromJSON(t) {
        return _En3.prototype.updateFromJSON
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
        var n = us(e).$getDOMSlot(this, t, e);
        var r = n.getFirstChild();
        for (
          var _t156 = this.getFirstChild();
          _t156;
          _t156 = _t156.getNextSibling()
        ) {
          var _o44 = e.getElementByKey(_t156.getKey());
          null !== _o44 &&
            (null == r
              ? (n.insertChild(_o44), (r = _o44))
              : r !== _o44 && n.replaceChild(_o44, r),
            (r = r.nextSibling));
        }
      };
      return yo;
    })(_En5);
    function mo(t) {
      return t instanceof _yo4;
    }
    function xo(t, e, n) {
      var r = t.getNode();
      for (; r; ) {
        var _t157 = r.__key;
        if (e.has(_t157) && !n.has(_t157)) return !0;
        r = r.getParent();
      }
      return !1;
    }
    var _Co = (function (_En4) {
      function Co() {
        return _En4.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Co, _En4);
      var _proto10 = Co.prototype;
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
      return Co;
    })(_En5);
    function So(t) {
      return t instanceof _Co;
    }
    var _No = (function (_yo) {
      function No() {
        var _this4;
        ((_this4 = _yo.call(this, "root") || this),
          (_this4.__cachedText = null));
        return _this4;
      }
      babelHelpers.inheritsLoose(No, _yo);
      No.getType = function getType() {
        return "root";
      };
      No.clone = function clone() {
        return new No();
      };
      var _proto11 = No.prototype;
      _proto11.getTopLevelElementOrThrow =
        function getTopLevelElementOrThrow() {
          t(51);
        };
      _proto11.getTextContent = function getTextContent() {
        var t = this.__cachedText;
        return (!Vr() && 0 !== Zr()._dirtyType) || null === t
          ? _yo.prototype.getTextContent.call(this)
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
        for (var _e106 of r) mo(_e106) || So(_e106) || t(282);
        return _yo.prototype.splice.call(this, e, n, r);
      };
      No.importJSON = function importJSON(t) {
        return _i().updateFromJSON(t);
      };
      _proto11.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return No;
    })(_yo4);
    function To(t) {
      return t instanceof _No;
    }
    function vo(t) {
      return new _ko(new Map(t._nodeMap));
    }
    function Oo() {
      return new _ko(new Map([["root", new _No()]]));
    }
    function Eo(e) {
      var n = e.exportJSON(),
        r = e.constructor;
      if ((n.type !== r.getType() && t(130, r.name), mo(e))) {
        var _o45 = n.children;
        Array.isArray(_o45) || t(59, r.name);
        var _i23 = e.getChildren();
        for (var _t158 = 0; _t158 < _i23.length; _t158++) {
          var _e107 = Eo(_i23[_t158]);
          _o45.push(_e107);
        }
      }
      return n;
    }
    var _ko = (function () {
      function ko(t, e) {
        ((this._nodeMap = t),
          (this._selection = e || null),
          (this._flushSync = !1),
          (this._readOnly = !1));
      }
      var _proto12 = ko.prototype;
      _proto12.isEmpty = function isEmpty() {
        return 1 === this._nodeMap.size && null === this._selection;
      };
      _proto12.read = function read(t, e) {
        return so((e && e.editor) || null, this, t);
      };
      _proto12.clone = function clone(t) {
        var e = new ko(this._nodeMap, void 0 === t ? this._selection : t);
        return ((e._readOnly = !0), e);
      };
      _proto12.toJSON = function toJSON() {
        return so(null, this, function () {
          return { root: Eo(_i()) };
        });
      };
      return ko;
    })();
    var _Mo = (function (_yo2) {
      function Mo() {
        return _yo2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Mo, _yo2);
      Mo.getType = function getType() {
        return "artificial";
      };
      var _proto13 = Mo.prototype;
      _proto13.createDOM = function createDOM(t) {
        return document.createElement("div");
      };
      return Mo;
    })(_yo4);
    var _bo = (function (_yo3) {
      function bo() {
        return _yo3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(bo, _yo3);
      bo.getType = function getType() {
        return "paragraph";
      };
      bo.clone = function clone(t) {
        return new bo(t.__key);
      };
      var _proto14 = bo.prototype;
      _proto14.createDOM = function createDOM(t) {
        var e = document.createElement("p"),
          n = Pi(t.theme, "paragraph");
        if (void 0 !== n) {
          var _e$classList2;
          (_e$classList2 = e.classList).add.apply(_e$classList2, n);
        }
        return e;
      };
      _proto14.updateDOM = function updateDOM(t, e, n) {
        return !1;
      };
      bo.importDOM = function importDOM() {
        return {
          p: function p(t) {
            return { conversion: Ao, priority: 0 };
          },
        };
      };
      _proto14.exportDOM = function exportDOM(t) {
        var _yo3$prototype$export = _yo3.prototype.exportDOM.call(this, t),
          e = _yo3$prototype$export.element;
        if (rs(e)) {
          this.isEmpty() && e.append(document.createElement("br"));
          var _t159 = this.getFormatType();
          _t159 && (e.style.textAlign = _t159);
        }
        return { element: e };
      };
      bo.importJSON = function importJSON(t) {
        return Do().updateFromJSON(t);
      };
      _proto14.exportJSON = function exportJSON() {
        var t = _yo3.prototype.exportJSON.call(this);
        if (void 0 === t.textFormat || void 0 === t.textStyle) {
          var _e108 = this.getChildren().find(ir);
          _e108
            ? ((t.textFormat = _e108.getFormat()),
              (t.textStyle = _e108.getStyle()))
            : ((t.textFormat = this.getTextFormat()),
              (t.textStyle = this.getTextStyle()));
        }
        return t;
      };
      _proto14.insertNewAfter = function insertNewAfter(t, e) {
        var n = Do();
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
          (ir(t[0]) && "" === t[0].getTextContent().trim())
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return bo;
    })(_yo4);
    function Ao(t) {
      var e = Do();
      if (
        (t.style && (e.setFormat(t.style.textAlign), _s(t, e)),
        "" === e.getFormatType())
      ) {
        var _n76 = t.getAttribute("align");
        _n76 && _n76 && _n76 in w && e.setFormat(_n76);
      }
      return (ps(e, t), { node: e });
    }
    function Do() {
      return qi(new _bo());
    }
    function wo(t) {
      return t instanceof _bo;
    }
    var Po = 0;
    function Io(t, e, n, r) {
      var o = t._keyToDOMMap;
      (o.clear(),
        (t._editorState = Oo()),
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
    function Fo(t) {
      var e = new Set(),
        n = new Set();
      var r = t;
      for (; r; ) {
        var _xs3 = xs(r),
          _t160 = _xs3.ownNodeConfig,
          _o46 = r.transform;
        if (!n.has(_o46)) {
          n.add(_o46);
          var _t161 = r.transform();
          _t161 && e.add(_t161);
        }
        if (_t160) {
          var _n77 = _t160.$transform;
          (_n77 && e.add(_n77), (r = _t160["extends"]));
        } else {
          var _t162 = Object.getPrototypeOf(r);
          r =
            _t162.prototype instanceof _En5 && _t162 !== _En5 ? _t162 : void 0;
        }
      }
      return e;
    }
    var Ro = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, r) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = Yo(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, r, o) {
        return mo(t) && t.extractWithChild(e, n, r);
      },
      $getDOMSlot: function $getDOMSlot(e, n, r) {
        return (mo(e) || t(336, e.getKey(), e.getType()), e.getDOMSlot(n));
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return mo(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, r) {
        return t.updateDOM(e, n, r._config);
      },
    };
    function Lo(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function Ko(t, e, n) {
      return (t.set(e, n), Lo.bind(null, t, e));
    }
    var _$o = (function () {
      function $o(t, e, n, r, o, i, s, l) {
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
          (this._key = Si()),
          (this._onError = o),
          (this._htmlConversions = i),
          (this._editable = s),
          (this._headless = null !== e && e._headless),
          (this._window = null),
          (this._blockCursorElement = null));
      }
      var _proto15 = $o.prototype;
      _proto15.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto15.registerUpdateListener = function registerUpdateListener(t) {
        return Ko(this._listeners.update, t);
      };
      _proto15.registerEditableListener = function registerEditableListener(t) {
        return Ko(this._listeners.editable, t);
      };
      _proto15.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return Ko(this._listeners.decorator, t);
      };
      _proto15.registerTextContentListener =
        function registerTextContentListener(t) {
          return Ko(this._listeners.textcontent, t);
        };
      _proto15.registerRootListener = function registerRootListener(t) {
        var _this13 = this;
        var e = this._listeners.root;
        return yl(Ko(e, t, t(this._rootElement, null) || void 0), function () {
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
          r = hs(n).get(e.getType());
        if (!r) return;
        var o = new Map();
        for (var _t163 of r.keys()) o.set(_t163, "created");
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
          var _t164 = this.registerNodeTransformToKlass(o, e);
          r.push(_t164);
        }
        return (
          (function (t, e) {
            var n = hs(t.getEditorState()),
              r = [];
            for (var _t165 of e) {
              var _e109 = n.get(_t165);
              _e109 && r.push(_e109);
            }
            if (0 === r.length) return;
            t.update(
              function () {
                for (var _t166 of r)
                  for (var _e110 of _t166.keys()) {
                    var _t167 = ai(_e110);
                    _t167 && _t167.markDirty();
                  }
              },
              null === t._pendingEditorState ? { tag: kn } : void 0,
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
        return Ki(this, t, e);
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
          var _n78 = Pi(this._config.theme, "root"),
            _r55 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            Io(this, e, t, _r55),
            null !== e &&
              (this._config.disableEvents || Nn(e),
              null != _n78 &&
                (_e$classList3 = e.classList).remove.apply(
                  _e$classList3,
                  _n78,
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e111 = ji(t),
              _r56 = t.style;
            ((_r56.userSelect = "text"),
              (_r56.whiteSpace = "pre-wrap"),
              (_r56.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e111),
              (this._dirtyType = 2),
              G(this),
              this._updateTags.add(kn),
              lo(this),
              this._config.disableEvents ||
                (function (t, e, _Ge$get) {
                  var n = t.ownerDocument;
                  He.set(t, n);
                  var r = (_Ge$get = Ge.get(n)) != null ? _Ge$get : 0;
                  (r < 1 && n.addEventListener("selectionchange", mn),
                    Ge.set(n, r + 1),
                    (t.__lexicalEditor = e));
                  var o = pn(t);
                  var _loop2 = function _loop2() {
                    var _We$_n = We[_n79],
                      r = _We$_n[0],
                      i = _We$_n[1],
                      s =
                        "function" == typeof i
                          ? function (t) {
                              Cn(t) ||
                                (xn(t),
                                (e.isEditable() || "click" === r) && i(t, e));
                            }
                          : function (t) {
                              if (Cn(t)) return;
                              xn(t);
                              var n = e.isEditable();
                              switch (r) {
                                case "cut":
                                  return n && Ki(e, we, t);
                                case "copy":
                                  return Ki(e, De, t);
                                case "paste":
                                  return n && Ki(e, re, t);
                                case "dragstart":
                                  return n && Ki(e, Me, t);
                                case "dragover":
                                  return n && Ki(e, be, t);
                                case "dragend":
                                  return n && Ki(e, Ae, t);
                                case "focus":
                                  return n && Ki(e, Ke, t);
                                case "blur":
                                  return n && Ki(e, $e, t);
                                case "drop":
                                  return n && Ki(e, Ee, t);
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
          } else ((this._window = null), this._updateTags.add(kn), lo(this));
          co("root", this, !1, t, e);
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
          ((r = vo(e)),
          (r._selection = e._selection ? e._selection.clone() : null)),
          H(this));
        var o = this._pendingEditorState,
          i = this._updateTags,
          s = void 0 !== n ? n.tag : null;
        (null === o || o.isEmpty() || (null != s && i.add(s), lo(this)),
          (this._pendingEditorState = r),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          null != s && i.add(s),
          this._updating || lo(this));
      };
      _proto15.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var r = Oo(),
            o = Ur,
            i = jr,
            s = Yr,
            l = e._dirtyElements,
            c = e._dirtyLeaves,
            a = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Set()),
            (e._dirtyType = 0),
            (Ur = r),
            (jr = !1),
            (Yr = e),
            zo(null));
          try {
            var _o47 = e._nodes;
            (io(t.root, _o47), n && n(), (r._readOnly = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = c),
              (e._cloneNotNeeded = a),
              (e._dirtyType = u),
              (Ur = o),
              (jr = i),
              (Yr = s));
          }
          return r;
        })("string" == typeof t ? JSON.parse(t) : t, this, e);
      };
      _proto15.read = function read(t) {
        return (lo(this), this.getEditorState().read(t, { editor: this }));
      };
      _proto15.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : ho(t, e, n);
        })(this, t, e);
      };
      _proto15.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          go(this, function () {
            var r = Dr(),
              o = _i();
            (null !== r
              ? r.dirty || yi(r.clone())
              : 0 !== o.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? o.selectStart()
                  : o.selectEnd()),
              Wi("focus"),
              Ui(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto15.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = es(this._window);
        null !== e && e.removeAllRanges();
      };
      _proto15.isEditable = function isEditable() {
        return this._editable;
      };
      _proto15.setEditable = function setEditable(t) {
        this._editable !== t &&
          ((this._editable = t), co("editable", this, !0, t));
      };
      _proto15.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON() };
      };
      return $o;
    })();
    _$o.version = "0.44.0+prod.cjs";
    var Bo = null;
    function zo(t) {
      Bo = t;
    }
    var Wo = 1;
    function Uo(e, n) {
      var r = Yo(e, n);
      return (void 0 === r && t(30, n), r);
    }
    function Yo(t, e) {
      return t._nodes.get(e);
    }
    var jo =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function Jo(t) {
      return So(di(t));
    }
    function Ho(t) {
      var e = document.activeElement;
      if (!rs(e)) return !1;
      var n = e.nodeName;
      return (
        So(di(t)) &&
        ("INPUT" === n ||
          "TEXTAREA" === n ||
          ("true" === e.contentEditable && null == Xo(e)))
      );
    }
    function Go(t, e, n) {
      var r = t.getRootElement();
      try {
        return (
          null !== r &&
          r.contains(e) &&
          r.contains(n) &&
          null !== e &&
          !Ho(e) &&
          qo(e) === t
        );
      } catch (t) {
        return !1;
      }
    }
    function Vo(t) {
      return t instanceof _$o;
    }
    function qo(t) {
      var e = t;
      for (; null != e; ) {
        var _t168 = Xo(e);
        if (Vo(_t168)) return _t168;
        e = Bi(e);
      }
      return null;
    }
    function Xo(t) {
      return t ? t.__lexicalEditor : null;
    }
    function Qo(t) {
      return ar(t) || t.isToken();
    }
    function Zo(t) {
      return Qo(t) || t.isSegmented();
    }
    function ti(t) {
      return os(t) && 3 === t.nodeType;
    }
    function ei(t) {
      return os(t) && 9 === t.nodeType;
    }
    function ni(t) {
      var e = t;
      for (; null != e; ) {
        if (ti(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function ri(t, e, n) {
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
    function oi(t, e) {
      var n = (function () {
        var t = Bo;
        return ((Bo = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (qr(), Xr());
      var r = Zr(),
        o = Qr(),
        i = "" + Wo++;
      (o._nodeMap.set(i, t),
        mo(t) ? r._dirtyElements.set(i, !0) : r._dirtyLeaves.add(i),
        r._cloneNotNeeded.add(i),
        (r._dirtyType = 1),
        (t.__key = i));
    }
    function ii(t) {
      var e = t.getParent();
      if (null !== e) {
        var _n80 = t.getWritable(),
          _r57 = e.getWritable(),
          _o48 = t.getPreviousSibling(),
          _i24 = t.getNextSibling(),
          _s14 = null !== _i24 ? _i24.__key : null,
          _l12 = null !== _o48 ? _o48.__key : null,
          _c0 = null !== _o48 ? _o48.getWritable() : null,
          _a0 = null !== _i24 ? _i24.getWritable() : null;
        (null === _o48 && (_r57.__first = _s14),
          null === _i24 && (_r57.__last = _l12),
          null !== _c0 && (_c0.__next = _s14),
          null !== _a0 && (_a0.__prev = _l12),
          (_n80.__prev = null),
          (_n80.__next = null),
          (_n80.__parent = null),
          _r57.__size--);
      }
    }
    function si(e) {
      (Xr(), On(e) && t(323, e.__key, e.__type));
      var n = e.getLatest(),
        r = n.__parent,
        o = Qr(),
        i = Zr(),
        s = o._nodeMap,
        l = i._dirtyElements;
      null !== r &&
        (function (t, e, n) {
          var r = t;
          for (; null !== r; ) {
            if (n.has(r)) return;
            var _t169 = e.get(r);
            if (void 0 === _t169) break;
            (n.set(r, !1), (r = _t169.__parent));
          }
        })(r, s, l);
      var c = n.__key;
      ((i._dirtyType = 1), mo(e) ? l.set(c, !0) : i._dirtyLeaves.add(c));
    }
    function li(t) {
      qr();
      var e = Zr(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t170 = ai(n);
          null !== _t170 && _t170.getWritable();
        }
        if (null !== t) {
          var _e112 = ai(t);
          null !== _e112 && _e112.getWritable();
        }
      }
    }
    function ci() {
      if (Vr()) return null;
      return Zr()._compositionKey;
    }
    function ai(t, e) {
      var n = (e || Qr())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function ui(t, e) {
      var n = fi(t, Zr());
      return void 0 !== n ? ai(n, e) : null;
    }
    function fi(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function di(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t171 = ui(n, e);
        if (null !== _t171) return _t171;
        n = Bi(n);
      }
      return null;
    }
    function hi(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function gi(t) {
      return t.read(function () {
        return _i().getTextContent();
      });
    }
    function _i() {
      return pi(Qr());
    }
    function pi(t) {
      return t._nodeMap.get("root");
    }
    function yi(t) {
      qr();
      var e = Qr();
      (null !== t && ((t.dirty = !0), t.setCachedNodes(null)),
        (e._selection = t));
    }
    function mi(t) {
      var e = Zr(),
        n = (function (t, e) {
          var n = t;
          for (; null != n; ) {
            var _t172 = fi(n, e);
            if (void 0 !== _t172) return _t172;
            n = Bi(n);
          }
          return null;
        })(t, e);
      if (null === n) {
        return t === e.getRootElement() ? ai("root") : null;
      }
      return ai(n);
    }
    function xi(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function Ci(t) {
      var e = [];
      for (var _n81 = t; null !== _n81; _n81 = _n81._parentEditor) e.push(_n81);
      return e;
    }
    function Si() {
      return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substring(0, 5);
    }
    function Ni(t) {
      return ti(t) ? t.nodeValue : null;
    }
    function Ti(t, e, n) {
      var r = es(Ji(e));
      if (null === r) return;
      var o = r.anchorNode;
      var i = r.anchorOffset,
        s = r.focusOffset;
      if (null !== o) {
        var _e113 = Ni(o);
        var _r58 = di(o);
        if (null !== _e113 && ir(_r58)) {
          if ((_e113 === T || _e113 === O) && n) {
            var _t173 = n.length;
            ((_e113 = n), (i = _t173), (s = _t173));
          }
          null !== _e113 && vi(_r58, _e113, i, s, t);
        }
      }
    }
    function vi(t, e, n, r, o) {
      var i = t;
      if (i.isAttached() && (o || !i.isDirty())) {
        var _s15 = i.isComposing();
        var _c1 = e;
        if (
          (_s15 || o) &&
          (e.endsWith(T) && (_c1 = e.slice(0, -T.length)), o)
        ) {
          var _t174 = O;
          var _e114;
          for (; -1 !== (_e114 = _c1.indexOf(_t174)); )
            ((_c1 = _c1.slice(0, _e114) + _c1.slice(_e114 + _t174.length)),
              null !== n &&
                n > _e114 &&
                (n = Math.max(_e114, n - _t174.length)),
              null !== r &&
                r > _e114 &&
                (r = Math.max(_e114, r - _t174.length)));
        }
        var _u0 = i.getTextContent();
        if (o || _c1 !== _u0) {
          if ("" === _c1) {
            if ((li(null), a || l || d)) i.remove();
            else {
              var _t175 = Zr();
              setTimeout(function () {
                _t175.update(function () {
                  i.isAttached() && i.remove();
                });
              }, 20);
            }
            return;
          }
          var _e115 = i.getParent(),
            _o49 = wr(),
            _u1 = i.getTextContentSize(),
            _f8 = ci(),
            _h4 = i.getKey();
          if (
            i.isToken() ||
            (null !== _f8 && _h4 === _f8 && !_s15) ||
            (_r(_o49) &&
              ((null !== _e115 &&
                !_e115.canInsertTextBefore() &&
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
          var _g5 = Dr();
          if (!_r(_g5) || null === n || null === r) return void Oi(i, _c1, _g5);
          if ((_g5.setTextNodeRange(i, n, i, r), i.isSegmented())) {
            var _t176 = or(i.getTextContent());
            (i.replace(_t176), (i = _t176));
          }
          Oi(i, _c1, _g5);
        }
      }
    }
    function Oi(t, e, n) {
      if ((t.setTextContent(e), _r(n))) {
        var _e116 = t.getKey();
        for (var _r59 of ["anchor", "focus"]) {
          var _o50 = n[_r59];
          "text" === _o50.type &&
            _o50.key === _e116 &&
            (_o50.offset = Ks(t, _o50.offset, "clamp"));
        }
      }
    }
    function Ei(t, e, n) {
      var r = e[n] || !1;
      return "any" === r || r === t[n];
    }
    function ki(t, e) {
      return (
        Ei(t, e, "altKey") &&
        Ei(t, e, "ctrlKey") &&
        Ei(t, e, "shiftKey") &&
        Ei(t, e, "metaKey")
      );
    }
    function Mi(t, e, n) {
      if (!ki(t, n)) return !1;
      if (t.key.toLowerCase() === e.toLowerCase()) return !0;
      if (e.length > 1) return !1;
      if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
      if (t.code.startsWith("Digit") && /^\d$/.test(e))
        return t.code === "Digit" + e;
      var r = "Key" + e.toUpperCase();
      return t.code === r;
    }
    var bi = { ctrlKey: !o, metaKey: o },
      Ai = { altKey: o, ctrlKey: !o };
    function Di(t) {
      return "Backspace" === t.key;
    }
    function wi(t) {
      return Mi(t, "a", bi);
    }
    function Pi(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        r = n[e];
      if (void 0 !== r) return r;
      var o = t[e];
      if ("string" == typeof o) {
        var _t177 = pl(o);
        return ((n[e] = _t177), _t177);
      }
      return o;
    }
    function Ii(e, n, r, o, i) {
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
    function Fi(t, e, n) {
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
    function Ri(t, e) {
      var n = t.offset;
      if ("element" === t.type) {
        return Fi(t.getNode(), e, n);
      }
      {
        var _r60 = t.getNode();
        if ((e && 0 === n) || (!e && n === _r60.getTextContentSize())) {
          var _t178 = e ? _r60.getPreviousSibling() : _r60.getNextSibling();
          return null === _t178
            ? Fi(
                _r60.getParentOrThrow(),
                e,
                _r60.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t178;
        }
      }
      return null;
    }
    function Li(t) {
      var e = Ji(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function Ki(t, e, n) {
      return ao(t, e, n, t);
    }
    function $i(e, n) {
      var r = e._keyToDOMMap.get(n);
      return (void 0 === r && t(75, n), r);
    }
    function Bi(t) {
      var e = t.assignedSlot || t.parentElement;
      return is(e) ? e.host : e;
    }
    function zi(t) {
      return ei(t) ? t : rs(t) ? t.ownerDocument : null;
    }
    function Wi(t) {
      qr();
      Zr()._updateTags.add(t);
    }
    function Ui(t) {
      qr();
      Zr()._deferred.push(t);
    }
    function Yi(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function ji(t) {
      var e = zi(t);
      return e ? e.defaultView : null;
    }
    function Ji(e) {
      var n = e._window;
      return (null === n && t(78), n);
    }
    function Hi(t) {
      var e = t.getParentOrThrow();
      for (; null !== e; ) {
        if (Gi(e)) return e;
        e = e.getParentOrThrow();
      }
      return e;
    }
    function Gi(t) {
      return To(t) || (mo(t) && t.isShadowRoot());
    }
    function Vi(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t);
      return (
        oi(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function qi(e) {
      var n = Zr(),
        r = e.getType(),
        o = Yo(n, r);
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
    function Xi(e, n) {
      !To(e.getParent()) || mo(n) || So(n) || t(99);
    }
    function Qi(e) {
      var n = ai(e);
      return (null === n && t(63, e), n);
    }
    function Zi(t) {
      return (So(t) || (mo(t) && !t.canBeEmpty())) && !t.isInline();
    }
    function ts(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var r = t.parentElement;
      null !== r && r.removeChild(t);
    }
    function es(t) {
      return n ? (t || window).getSelection() : null;
    }
    function ns(t) {
      var e = ji(t);
      return e ? e.getSelection() : null;
    }
    function rs(t) {
      return os(t) && 1 === t.nodeType;
    }
    function os(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function is(t) {
      return os(t) && 11 === t.nodeType;
    }
    function ss(t) {
      var e = new RegExp(
        /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/,
        "i",
      );
      return null !== t.nodeName.match(e);
    }
    function ls(t) {
      var e = new RegExp(
        /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/,
        "i",
      );
      return null !== t.nodeName.match(e);
    }
    function cs(t) {
      if (So(t) && !t.isInline()) return !0;
      if (!mo(t) || Gi(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || zn(e) || ir(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function as() {
      return Zr();
    }
    function us(t) {
      if (t === void 0) {
        t = as();
      }
      return t._config.dom || Ro;
    }
    var fs = new WeakMap(),
      ds = new Map();
    function hs(e) {
      if (!e._readOnly && e.isEmpty()) return ds;
      e._readOnly || t(192);
      var n = fs.get(e);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref22 of t._nodeMap) {
              var _n83 = _ref22[0];
              var _r61 = _ref22[1];
              {
                var _t179 = _r61.__type;
                var _o52 = e.get(_t179);
                (_o52 || ((_o52 = new Map()), e.set(_t179, _o52)),
                  _o52.set(_n83, _r61));
              }
            }
            return e;
          })(e)),
          fs.set(e, n)),
        n
      );
    }
    function gs(t) {
      var e = t.constructor.clone(t);
      return (e.afterCloneFrom(t), e);
    }
    function _s(t, e) {
      var n = parseInt(t.style.paddingInlineStart, 10) || 0,
        r = Math.round(n / 40);
      e.setIndent(r);
    }
    function ps(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function ys(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function ms(t, e) {
      return (
        (function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        })(t, e) && t[e] !== _En5[e]
      );
    }
    function xs(e) {
      var n = R in e.prototype ? e.prototype[R]() : void 0,
        r = (function (e) {
          if (!(e === _En5 || e.prototype instanceof _En5)) {
            var _n84 = "<unknown>",
              _r62 = "<unknown>";
            try {
              _n84 = e.getType();
            } catch (t) {}
            try {
              _$o.version && (_r62 = JSON.parse(_$o.version));
            } catch (t) {}
            t(290, e.name, _n84, _r62);
          }
          return e === _Co || e === _yo4 || e === _En5;
        })(e),
        o = !r && ms(e, "getType") ? e.getType() : void 0;
      var i,
        s = o;
      if (n)
        if (o) i = n[o];
        else
          for (var _ref24 of Object.entries(n)) {
            var _t180 = _ref24[0];
            var _e117 = _ref24[1];
            ((s = _t180), (i = _e117));
          }
      if (
        !r &&
        s &&
        (ms(e, "getType") ||
          (e.getType = function () {
            return s;
          }),
        ms(e, "clone") ||
          (e.clone = function (t) {
            return (zo(t), new e());
          }),
        ms(e, "importJSON") ||
          (e.importJSON =
            (i && i.$importJSON) ||
            function (t) {
              return new e().updateFromJSON(t);
            }),
        !ms(e, "importDOM") && i)
      ) {
        var _i25 = i,
          _t181 = _i25.importDOM;
        _t181 &&
          (e.importDOM = function () {
            return _t181;
          });
      }
      return { ownNodeConfig: i, ownNodeType: s };
    }
    var Cs = function Cs(t, e) {
      var n = t;
      for (; null != n && !To(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function Ss(e, n) {
      var r = [];
      var o = e.__first;
      for (; null !== o; ) {
        var _e118 = null === n ? ai(o) : n.get(o);
        (null == _e118 && t(174), r.push(o), (o = _e118.__next));
      }
      return r;
    }
    var Ns = { next: "previous", previous: "next" };
    var _Ts4 = (function () {
      function Ts(t) {
        this.origin = t;
      }
      var _proto16 = Ts.prototype;
      _proto16[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return Gs({
            hasNext: Ds,
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
        return Rs(this.getNodeAtCaret(), this.direction);
      };
      _proto16.getSiblingCaret = function getSiblingCaret() {
        return Rs(this.origin, this.direction);
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
          var _t182 = i.getAdjacentCaret();
          null !== _t182 && l.size < e;
          _t182 = _t182.getAdjacentCaret()
        ) {
          var _e119 = _t182.origin.getWritable();
          l.set(_e119.getKey(), _e119);
        }
        for (var _e120 of o) {
          if (l.size > 0) {
            var _n85 = i.getNodeAtCaret();
            if (_n85) {
              if (
                (l["delete"](_n85.getKey()),
                l["delete"](_e120.getKey()),
                _n85.is(_e120) || i.origin.is(_e120))
              );
              else {
                var _t183 = _e120.getParent();
                (_t183 && _t183.is(s) && _e120.remove(), _n85.replace(_e120));
              }
            } else null === _n85 && t(263, Array.from(l).join(" "));
          } else i.insert(_e120);
          i = Rs(_e120, this.direction);
        }
        for (var _t184 of l.values()) _t184.remove();
        return this;
      };
      return Ts;
    })();
    var _vs3 = (function (_Ts) {
      function vs() {
        var _this5;
        for (
          var _len6 = arguments.length, args = new Array(_len6), _key6 = 0;
          _key6 < _len6;
          _key6++
        ) {
          args[_key6] = arguments[_key6];
        }
        return (
          ((_this5 = _Ts.call.apply(_Ts, [this].concat(args)) || this),
          (_this5.type = "child"),
          babelHelpers.assertThisInitialized(_this5)) ||
          babelHelpers.assertThisInitialized(_this5)
        );
      }
      babelHelpers.inheritsLoose(vs, _Ts);
      var _proto17 = vs.prototype;
      _proto17.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Bs(t, this.direction);
      };
      _proto17.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Rs(ks(this.getParentAtCaret(), t), this.direction);
      };
      _proto17.getFlipped = function getFlipped() {
        var t = Es(this.direction);
        return Rs(this.getNodeAtCaret(), t) || Bs(this.origin, t);
      };
      _proto17.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto17.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto17.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof vs &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto17.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return vs;
    })(_Ts4);
    var Os = { root: To, shadowRoot: Gi };
    function Es(t) {
      return Ns[t];
    }
    function ks(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return Os[e](t) ? null : t;
    }
    var _Ms3 = (function (_Ts2) {
      function Ms() {
        var _this6;
        for (
          var _len7 = arguments.length, args = new Array(_len7), _key7 = 0;
          _key7 < _len7;
          _key7++
        ) {
          args[_key7] = arguments[_key7];
        }
        return (
          ((_this6 = _Ts2.call.apply(_Ts2, [this].concat(args)) || this),
          (_this6.type = "sibling"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(Ms, _Ts2);
      var _proto18 = Ms.prototype;
      _proto18.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Rs(t, this.direction);
      };
      _proto18.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto18.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto18.getChildCaret = function getChildCaret() {
        return mo(this.origin) ? Bs(this.origin, this.direction) : null;
      };
      _proto18.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Rs(ks(this.getParentAtCaret(), t), this.direction);
      };
      _proto18.getFlipped = function getFlipped() {
        var t = Es(this.direction);
        return (
          Rs(this.getNodeAtCaret(), t) || Bs(this.origin.getParentOrThrow(), t)
        );
      };
      _proto18.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Ms &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto18.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof Ms || t instanceof _bs3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return Ms;
    })(_Ts4);
    var _bs3 = (function (_Ts3) {
      function bs(t, e) {
        var _this7;
        ((_this7 = _Ts3.call(this, t) || this),
          (_this7.type = "text"),
          (_this7.offset = e));
        return _this7;
      }
      babelHelpers.inheritsLoose(bs, _Ts3);
      var _proto19 = bs.prototype;
      _proto19.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Ls(t, this.direction, this.offset);
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
        return Rs(ks(this.getParentAtCaret(), t), this.direction);
      };
      _proto19.getFlipped = function getFlipped() {
        return Ls(this.origin, Es(this.direction), this.offset);
      };
      _proto19.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof bs &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto19.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _Ms3 || t instanceof bs) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto19.getSiblingCaret = function getSiblingCaret() {
        return Rs(this.origin, this.direction);
      };
      return bs;
    })(_Ts4);
    function As(t) {
      return t instanceof _bs3;
    }
    function Ds(t) {
      return t instanceof _Ms3;
    }
    function ws(t) {
      return t instanceof _vs3;
    }
    var Ps = {
        next: (function (_bs) {
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
              ((_this8 = _bs.call.apply(_bs, [this].concat(args)) || this),
              (_this8.direction = "next"),
              babelHelpers.assertThisInitialized(_this8)) ||
              babelHelpers.assertThisInitialized(_this8)
            );
          }
          babelHelpers.inheritsLoose(_class, _bs);
          var _proto20 = _class.prototype;
          _proto20.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto20.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_bs3),
        previous: (function (_bs2) {
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
              ((_this9 = _bs2.call.apply(_bs2, [this].concat(args)) || this),
              (_this9.direction = "previous"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class3, _bs2);
          var _proto21 = _class3.prototype;
          _proto21.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto21.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_bs3),
      },
      Is = {
        next: (function (_Ms) {
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
              ((_this0 = _Ms.call.apply(_Ms, [this].concat(args)) || this),
              (_this0.direction = "next"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class5, _Ms);
          var _proto22 = _class5.prototype;
          _proto22.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto22.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_Ms3),
        previous: (function (_Ms2) {
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
              ((_this1 = _Ms2.call.apply(_Ms2, [this].concat(args)) || this),
              (_this1.direction = "previous"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class7, _Ms2);
          var _proto23 = _class7.prototype;
          _proto23.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto23.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_Ms3),
      },
      Fs = {
        next: (function (_vs) {
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
              ((_this10 = _vs.call.apply(_vs, [this].concat(args)) || this),
              (_this10.direction = "next"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class9, _vs);
          var _proto24 = _class9.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_vs3),
        previous: (function (_vs2) {
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
              ((_this11 = _vs2.call.apply(_vs2, [this].concat(args)) || this),
              (_this11.direction = "previous"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class1, _vs2);
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
        })(_vs3),
      };
    function Rs(t, e) {
      return t ? new Is[e](t) : null;
    }
    function Ls(t, e, n) {
      return t ? new Ps[e](t, Ks(t, n)) : null;
    }
    function Ks(t, n, r) {
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
    function $s(t, e) {
      return new _Ys(t, e);
    }
    function Bs(t, e) {
      return mo(t) ? new Fs[e](t) : null;
    }
    function zs(t) {
      return (t && t.getChildCaret()) || t;
    }
    function Ws(t) {
      return t && zs(t.getAdjacentCaret());
    }
    var _Us = (function () {
      function Us(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto26 = Us.prototype;
      _proto26.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new Us(t, e, this.direction);
      };
      _proto26.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto26.getTextSlices = function getTextSlices() {
        var _this14 = this;
        var t = function t(_t185) {
            var e = _this14[_t185].getLatest();
            return As(e)
              ? (function (t, e) {
                  var n = t.direction,
                    r = t.origin,
                    o = Ks(r, "focus" === e ? Es(n) : n);
                  return $s(t, o - t.offset);
                })(e, _t185)
              : null;
          },
          e = t("anchor"),
          n = t("focus");
        if (e && n) {
          var _t186 = e.caret,
            _r63 = n.caret;
          if (_t186.isSameNodeCaret(_r63))
            return [$s(_t186, _r63.offset - _t186.offset), null];
        }
        return [e, n];
      };
      _proto26.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = As(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          r = As(n),
          o = function o(e) {
            return e.isSameNodeCaret(n) ? null : Ws(e) || e.getParentCaret(t);
          };
        return Gs({
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
      return Us;
    })();
    var _Ys = (function () {
      function Ys(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto27 = Ys.prototype;
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
        return Ls(t.setTextContent(o.slice(0, n) + o.slice(r)), e, n);
      };
      return Ys;
    })();
    function js(t) {
      return Hs(t, Rs(_i(), t.direction));
    }
    function Js(t) {
      return Hs(t, t);
    }
    function Hs(e, n) {
      return (
        e.direction !== n.direction && t(265),
        new _Us(e, n, e.direction)
      );
    }
    function Gs(t) {
      var _ref25;
      var e = t.initial,
        n = t.hasNext,
        r = t.step,
        o = t.map;
      var i = e;
      return (
        (_ref25 = {}),
        (_ref25[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
          function () {
            return this;
          }),
        (_ref25.next = function next() {
          if (!n(i)) return { done: !0, value: void 0 };
          var t = { done: !1, value: o(i) };
          return ((i = r(i)), t);
        }),
        _ref25
      );
    }
    function Vs(e, n) {
      var r = Zs(e.origin, n.origin);
      switch (
        (null === r && t(275, e.origin.getKey(), n.origin.getKey()), r.type)
      ) {
        case "same": {
          var _t187 = "text" === e.type,
            _r64 = "text" === n.type;
          return _t187 && _r64
            ? (function (t, e) {
                return Math.sign(t - e);
              })(e.offset, n.offset)
            : e.type === n.type
              ? 0
              : _t187
                ? -1
                : _r64
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
          return qs(r);
      }
    }
    function qs(t) {
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
    function Xs(t, e) {
      return e.is(t);
    }
    function Qs(t) {
      return mo(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function Zs(e, n) {
      if (e.is(n)) return { commonAncestor: e, type: "same" };
      var r = new Map();
      for (
        var _Qs = Qs(e), _t188 = _Qs[0], _n86 = _Qs[1];
        _t188;
        _n86 = _t188, _t188 = _t188.getParent()
      )
        r.set(_t188, _n86);
      for (
        var _Qs2 = Qs(n), _o53 = _Qs2[0], _i26 = _Qs2[1];
        _o53;
        _i26 = _o53, _o53 = _o53.getParent()
      ) {
        var _s16 = r.get(_o53);
        if (void 0 !== _s16)
          return null === _s16
            ? (Xs(e, _o53) || t(276),
              { commonAncestor: _o53, type: "ancestor" })
            : null === _i26
              ? (Xs(n, _o53) || t(277),
                { commonAncestor: _o53, type: "descendant" })
              : (((mo(_s16) || Xs(e, _s16)) &&
                  (mo(_i26) || Xs(n, _i26)) &&
                  _o53.is(_s16.getParent()) &&
                  _o53.is(_i26.getParent())) ||
                  t(278),
                { a: _s16, b: _i26, commonAncestor: _o53, type: "branch" });
      }
      return null;
    }
    function tl(e, n) {
      var r = e.type,
        o = e.key,
        i = e.offset,
        s = Qi(e.key);
      return "text" === r
        ? (ir(s) || t(266, s.getType(), o), Ls(s, n, i))
        : (mo(s) || t(267, s.getType(), o), hl(s, e.offset, n));
    }
    function el(e, n) {
      var r = n.origin,
        o = n.direction,
        i = "next" === o;
      As(n)
        ? e.set(r.getKey(), n.offset, "text")
        : Ds(n)
          ? ir(r)
            ? e.set(r.getKey(), Ks(r, o), "text")
            : e.set(
                r.getParentOrThrow().getKey(),
                r.getIndexWithinParent() + (i ? 1 : 0),
                "element",
              )
          : ((ws(n) && mo(r)) || t(268),
            e.set(r.getKey(), i ? 0 : r.getChildrenSize(), "element"));
    }
    function nl(t) {
      var e = Dr(),
        n = _r(e) ? e : Mr();
      return (rl(n, t), yi(n), n);
    }
    function rl(t, e) {
      (el(t.anchor, e.anchor), el(t.focus, e.focus));
    }
    function ol(t) {
      var e = t.anchor,
        n = t.focus,
        r = tl(e, "next"),
        o = tl(n, "next"),
        i = Vs(r, o) <= 0 ? "next" : "previous";
      return Hs(fl(r, i), fl(o, i));
    }
    function il(t) {
      var e = t.direction,
        n = t.origin,
        r = Rs(n, Es(e)).getNodeAtCaret();
      return r ? Rs(r, e) : Bs(n.getParentOrThrow(), e);
    }
    function sl(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _r65 = ws(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _r65;
        _r65 = _r65.getParentCaret(e)
      )
        n.push(il(_r65));
      return n;
    }
    function ll(t) {
      return !!t && t.origin.isAttached();
    }
    function cl(e, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (e.isCollapsed()) return e;
      var r = "root",
        o = "next";
      var i = n;
      var s = dl(e, o),
        l = sl(s.anchor, r),
        c = sl(s.focus.getFlipped(), r),
        a = new Set(),
        u = [];
      for (var _t189 of s.iterNodeCarets(r))
        if (ws(_t189)) a.add(_t189.origin.getKey());
        else if (Ds(_t189)) {
          var _e121 = _t189.origin;
          (mo(_e121) && !a.has(_e121.getKey())) || u.push(_e121);
        }
      for (var _t190 of u) _t190.remove();
      for (var _t191 of s.getTextSlices()) {
        if (!_t191) continue;
        var _e122 = _t191.caret.origin,
          _n87 = _e122.getTextContentSize(),
          _r66 = il(Rs(_e122, o)),
          _s17 = _e122.getMode();
        if (
          (Math.abs(_t191.distance) === _n87 && "removeEmptySlices" === i) ||
          ("token" === _s17 && 0 !== _t191.distance)
        )
          _r66.remove();
        else if (0 !== _t191.distance) {
          i = "removeEmptySlices";
          var _e123 = _t191.removeTextSlice();
          var _n88 = _t191.caret.origin;
          if ("segmented" === _s17) {
            var _t192 = _e123.origin,
              _n89 = or(_t192.getTextContent())
                .setStyle(_t192.getStyle())
                .setFormat(_t192.getFormat());
            (_r66.replaceOrInsert(_n89), (_e123 = Ls(_n89, o, _e123.offset)));
          }
          (_n88.is(l[0].origin) && (l[0] = _e123),
            _n88.is(c[0].origin) && (c[0] = _e123.getFlipped()));
        }
      }
      var f, d;
      for (var _t193 of l)
        if (ll(_t193)) {
          f = al(_t193);
          break;
        }
      for (var _t194 of c)
        if (ll(_t194)) {
          d = al(_t194);
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
            for (var _r67 = c; _r67 < t.length; _r67++) {
              var _o54 = t[_r67];
              if (Gi(_o54)) return;
              !n && e(_o54) && (n = _o54);
            }
            return n;
          },
          u = a(i, cs),
          f =
            u &&
            a(s, function (t) {
              return n.has(t.getKey()) && cs(t);
            });
        return u && f ? [u, f] : null;
      })(f, d, a);
      if (h) {
        var _t195 = h[0],
          _e124 = h[1];
        Bs(_t195, "previous").splice(0, _e124.getChildren());
        var _n90 = _e124.getParent();
        for (_e124.remove(!0); _n90 && _n90.isEmpty(); ) {
          var _t196 = _n90;
          ((_n90 = _n90.getParent()), _t196.remove(!0));
        }
      }
      var g = [f, d].concat(l, c).find(ll);
      if (g) {
        return Js(fl(al(g), e.direction));
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
    function al(t) {
      var e = (function (t) {
          var e = t;
          for (; ws(e); ) {
            var _t197 = Ws(e);
            if (!ws(_t197)) break;
            e = _t197;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (ir(e.origin)) return As(e) ? e : Ls(e.origin, n, n);
      var r = e.getAdjacentCaret();
      return Ds(r) && ir(r.origin) ? Ls(r.origin, n, Es(n)) : e;
    }
    function ul(t) {
      return As(t) && t.offset !== Ks(t.origin, t.direction);
    }
    function fl(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function dl(t, e) {
      return t.direction === e ? t : Hs(fl(t.focus, e), fl(t.anchor, e));
    }
    function hl(t, e, n) {
      var r = Bs(t, "next");
      for (var _t198 = 0; _t198 < e; _t198++) {
        var _t199 = r.getAdjacentCaret();
        if (null === _t199) break;
        r = _t199;
      }
      return fl(r, n);
    }
    function gl(e) {
      var n = e.origin,
        r = e.offset,
        o = e.direction;
      if (r === Ks(n, o)) return e.getSiblingCaret();
      if (r === Ks(n, Es(o))) return il(e.getSiblingCaret());
      var _n$splitText2 = n.splitText(r),
        i = _n$splitText2[0];
      return (ir(i) || t(281), fl(Rs(i, "next"), o));
    }
    function _l(t, e) {
      return !0;
    }
    function pl() {
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
          for (var _ref27 of _n91.matchAll(/\S+/g)) {
            var _t200 = _ref27[0];
            e.push(_t200);
          }
      return e;
    }
    function yl() {
      for (
        var _len13 = arguments.length, t = new Array(_len13), _key13 = 0;
        _key13 < _len13;
        _key13++
      ) {
        t[_key13] = arguments[_key13];
      }
      return function () {
        for (var _e125 = t.length - 1; _e125 >= 0; _e125--) t[_e125]();
        t.length = 0;
      };
    }
    ((exports.$addUpdateTag = Wi),
      (exports.$applyNodeReplacement = qi),
      (exports.$caretFromPoint = tl),
      (exports.$caretRangeFromSelection = ol),
      (exports.$cloneWithProperties = gs),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = gs(t))[vn] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = Vs),
      (exports.$copyNode = Vi),
      (exports.$create = function (t) {
        var e = as();
        return (
          qr(),
          new (e.resolveRegisteredNodeAfterReplacements(
            e.getRegisteredNode(t),
          ).klass)()
        );
      }),
      (exports.$createChildrenArray = Ss),
      (exports.$createLineBreakNode = Bn),
      (exports.$createNodeSelection = br),
      (exports.$createParagraphNode = Do),
      (exports.$createPoint = fr),
      (exports.$createRangeSelection = Mr),
      (exports.$createRangeSelectionFromDom = function (t, e) {
        return Ar(null, t, e, null);
      }),
      (exports.$createTabNode = cr),
      (exports.$createTextNode = or),
      (exports.$extendCaretToRange = js),
      (exports.$findMatchingParent = Cs),
      (exports.$getAdjacentChildCaret = Ws),
      (exports.$getAdjacentNode = Ri),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          r = t,
          o = Ws(r);
        for (; null === o; ) {
          if ((n--, (o = r.getParentCaret(e)), !o)) return null;
          ((r = o), (o = Ws(r)));
        }
        return o && [o, n];
      }),
      (exports.$getCaretInDirection = fl),
      (exports.$getCaretRange = Hs),
      (exports.$getCaretRangeInDirection = dl),
      (exports.$getCharacterOffsets = xr),
      (exports.$getChildCaret = Bs),
      (exports.$getChildCaretAtIndex = hl),
      (exports.$getChildCaretOrSelf = zs),
      (exports.$getCollapsedCaretRange = Js),
      (exports.$getCommonAncestor = Zs),
      (exports.$getCommonAncestorResultBranchOrder = qs),
      (exports.$getEditor = as),
      (exports.$getEditorDOMRenderConfig = us),
      (exports.$getNearestNodeFromDOMNode = di),
      (exports.$getNearestRootOrShadowRoot = Hi),
      (exports.$getNodeByKey = ai),
      (exports.$getNodeByKeyOrThrow = Qi),
      (exports.$getNodeFromDOMNode = ui),
      (exports.$getPreviousSelection = wr),
      (exports.$getRoot = _i),
      (exports.$getSelection = Dr),
      (exports.$getSiblingCaret = Rs),
      (exports.$getState = q),
      (exports.$getStateChange = function (t, e, n) {
        var r = q(t, n, "direct"),
          o = q(e, n, "direct");
        return n.isEqual(r, o) ? null : [r, o];
      }),
      (exports.$getTextContent = function () {
        var t = Dr();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = Ks),
      (exports.$getTextPointCaret = Ls),
      (exports.$getTextPointCaretSlice = $s),
      (exports.$getWritableNodeState = Z),
      (exports.$hasAncestor = Yi),
      (exports.$hasUpdateTag = function (t) {
        return Zr()._updateTags.has(t);
      }),
      (exports.$insertNodes = function (t) {
        var e = Dr() || wr();
        (null === e && (e = _i().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = function (t) {
        return mo(t) && !t.isInline();
      }),
      (exports.$isChildCaret = ws),
      (exports.$isDecoratorNode = So),
      (exports.$isEditorState = function (t) {
        return t instanceof _ko;
      }),
      (exports.$isElementNode = mo),
      (exports.$isExtendableTextPointCaret = ul),
      (exports.$isInlineElementOrDecoratorNode = function (t) {
        return (mo(t) && t.isInline()) || (So(t) && t.isInline());
      }),
      (exports.$isLeafNode = function (t) {
        return ir(t) || zn(t) || So(t);
      }),
      (exports.$isLexicalNode = function (t) {
        return t instanceof _En5;
      }),
      (exports.$isLineBreakNode = zn),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _Ts4;
      }),
      (exports.$isNodeSelection = yr),
      (exports.$isParagraphNode = wo),
      (exports.$isRangeSelection = _r),
      (exports.$isRootNode = To),
      (exports.$isRootOrShadowRoot = Gi),
      (exports.$isSiblingCaret = Ds),
      (exports.$isTabNode = ar),
      (exports.$isTextNode = ir),
      (exports.$isTextPointCaret = As),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _Ys;
      }),
      (exports.$isTokenOrSegmented = Zo),
      (exports.$isTokenOrTab = Qo),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = Qr();
        if (n._readOnly) {
          var _t201 = hs(n).get(e);
          return _t201 ? Array.from(_t201.values()) : [];
        }
        var r = n._nodeMap,
          o = [];
        for (var _ref29 of r) {
          var _n92 = _ref29[1];
          _n92 instanceof t &&
            _n92.__type === e &&
            _n92.isAttached() &&
            o.push(_n92);
        }
        return o;
      }),
      (exports.$normalizeCaret = al),
      (exports.$normalizeSelection__EXPERIMENTAL = at),
      (exports.$onUpdate = Ui),
      (exports.$parseSerializedNode = function (t) {
        return io(t, Zr()._nodes);
      }),
      (exports.$removeTextFromCaretRange = cl),
      (exports.$rewindSiblingCaret = il),
      (exports.$selectAll = function (t) {
        var e = _i();
        if (_r(t)) {
          var _e126 = t.anchor,
            _n93 = t.focus,
            _r68 = _e126
              .getNode()
              .getTopLevelElementOrThrow()
              .getParentOrThrow();
          return (
            _e126.set(_r68.getKey(), 0, "element"),
            _n93.set(_r68.getKey(), _r68.getChildrenSize(), "element"),
            at(t),
            t
          );
        }
        {
          var _t202 = e.select(0, e.getChildrenSize());
          return (yi(at(_t202)), _t202);
        }
      }),
      (exports.$setCompositionKey = li),
      (exports.$setDirectionFromDOM = ps),
      (exports.$setPointFromCaret = el),
      (exports.$setSelection = yi),
      (exports.$setSelectionFromCaretRange = nl),
      (exports.$setState = function (t, e, n) {
        var r;
        if ((qr(), "function" == typeof n)) {
          var _o55 = t.getLatest(),
            _i27 = q(_o55, e);
          if (((r = n(_i27)), e.isEqual(_i27, r))) return _o55;
        } else r = n;
        var o = t.getWritable();
        return (Z(o).updateFromKnown(e, r), o);
      }),
      (exports.$splitAtPointCaretNext = function (t, _temp) {
        var _ref30 = _temp === void 0 ? {} : _temp,
          _ref30$$copyElementNo = _ref30.$copyElementNode,
          e = _ref30$$copyElementNo === void 0 ? Vi : _ref30$$copyElementNo,
          _ref30$$splitTextPoin = _ref30.$splitTextPointCaretNext,
          n = _ref30$$splitTextPoin === void 0 ? gl : _ref30$$splitTextPoin,
          _ref30$rootMode = _ref30.rootMode,
          r = _ref30$rootMode === void 0 ? "shadowRoot" : _ref30$rootMode,
          _ref30$$shouldSplit = _ref30.$shouldSplit,
          o = _ref30$$shouldSplit === void 0 ? _l : _ref30$$shouldSplit,
          _ref30$removeEmptyDes = _ref30.removeEmptyDestination,
          i = _ref30$removeEmptyDes === void 0 ? !1 : _ref30$removeEmptyDes;
        if (As(t)) return n(t);
        var s = t.getParentCaret(r);
        if (s) {
          var _n94 = s.origin;
          if (ws(t)) {
            var _t203 = il(s);
            if (i && _n94.isEmpty()) return (_n94.remove(), _t203);
            if (!_n94.canBeEmpty() || !o(_n94, "first")) return _t203;
          }
          var _r69 = (function (t) {
            var e = [];
            for (
              var _n95 = t.getAdjacentCaret();
              _n95;
              _n95 = _n95.getAdjacentCaret()
            )
              e.push(_n95.origin);
            return e;
          })(t);
          (_r69.length > 0 || (!i && _n94.canBeEmpty() && o(_n94, "last"))) &&
            s.insert(e(_n94).splice(0, 0, _r69));
        }
        return s;
      }),
      (exports.$splitNode = function (e, n) {
        var r = e.getChildAtIndex(n);
        (null == r && (r = e), Gi(e) && t(102));
        var _o58 = function o(e) {
            var n = e.getParentOrThrow(),
              i = Gi(n),
              s = e !== r || i ? Vi(e) : e;
            if (i)
              return ((mo(e) && mo(s)) || t(133), e.insertAfter(s), [e, s, s]);
            {
              var _o57 = _o58(n),
                _t204 = _o57[0],
                _r70 = _o57[1],
                _i28 = _o57[2],
                _l13 = e.getNextSiblings();
              return (
                _i28.append.apply(_i28, [s].concat(_l13)),
                [_t204, _r70, s]
              );
            }
          },
          _o56 = _o58(r),
          i = _o56[0],
          s = _o56[1];
        return [i, s];
      }),
      (exports.$updateRangeSelectionFromCaretRange = rl),
      (exports.ArtificialNode__DO_NOT_USE = _Mo),
      (exports.BEFORE_INPUT_COMMAND = Vt),
      (exports.BLUR_COMMAND = $e),
      (exports.CAN_REDO_COMMAND = Re),
      (exports.CAN_UNDO_COMMAND = Le),
      (exports.CLEAR_EDITOR_COMMAND = Ie),
      (exports.CLEAR_HISTORY_COMMAND = Fe),
      (exports.CLICK_COMMAND = Gt),
      (exports.COLLABORATION_TAG = Mn),
      (exports.COMMAND_PRIORITY_BEFORE_CRITICAL = -4),
      (exports.COMMAND_PRIORITY_BEFORE_EDITOR = -8),
      (exports.COMMAND_PRIORITY_BEFORE_HIGH = -5),
      (exports.COMMAND_PRIORITY_BEFORE_LOW = -7),
      (exports.COMMAND_PRIORITY_BEFORE_NORMAL = -6),
      (exports.COMMAND_PRIORITY_CRITICAL = 4),
      (exports.COMMAND_PRIORITY_EDITOR = Po),
      (exports.COMMAND_PRIORITY_HIGH = 3),
      (exports.COMMAND_PRIORITY_LOW = 1),
      (exports.COMMAND_PRIORITY_NORMAL = 2),
      (exports.COMPOSITION_END_COMMAND = Qt),
      (exports.COMPOSITION_END_TAG = Pn),
      (exports.COMPOSITION_START_COMMAND = Xt),
      (exports.COMPOSITION_START_TAG = wn),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = ne),
      (exports.COPY_COMMAND = De),
      (exports.CUT_COMMAND = we),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = Ro),
      (exports.DELETE_CHARACTER_COMMAND = Zt),
      (exports.DELETE_LINE_COMMAND = se),
      (exports.DELETE_WORD_COMMAND = ie),
      (exports.DRAGEND_COMMAND = Ae),
      (exports.DRAGOVER_COMMAND = be),
      (exports.DRAGSTART_COMMAND = Me),
      (exports.DROP_COMMAND = Ee),
      (exports.DecoratorNode = _Co),
      (exports.ElementNode = _yo4),
      (exports.FOCUS_COMMAND = Ke),
      (exports.FORMAT_ELEMENT_COMMAND = ke),
      (exports.FORMAT_TEXT_COMMAND = le),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = kn),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = ve),
      (exports.INPUT_COMMAND = qt),
      (exports.INSERT_LINE_BREAK_COMMAND = te),
      (exports.INSERT_PARAGRAPH_COMMAND = ee),
      (exports.INSERT_TAB_COMMAND = Te),
      (exports.INTERNAL_$isBlock = cs),
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
      (exports.KEY_MODIFIER_COMMAND = Be),
      (exports.KEY_SPACE_COMMAND = me),
      (exports.KEY_TAB_COMMAND = Ne),
      (exports.LineBreakNode = _Kn),
      (exports.MOVE_TO_END = de),
      (exports.MOVE_TO_START = ge),
      (exports.NODE_STATE_KEY = "$"),
      (exports.OUTDENT_CONTENT_COMMAND = Oe),
      (exports.PASTE_COMMAND = re),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _bo),
      (exports.REDO_COMMAND = ae),
      (exports.REMOVE_TEXT_COMMAND = oe),
      (exports.RootNode = _No),
      (exports.SELECTION_CHANGE_COMMAND = Jt),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = Ht),
      (exports.SELECT_ALL_COMMAND = Pe),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = An),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = bn),
      (exports.SKIP_SELECTION_FOCUS_TAG = Dn),
      (exports.TEXT_TYPE_TO_FORMAT = A),
      (exports.TabNode = _lr),
      (exports.TextNode = _Vn2),
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
        var n = pl.apply(void 0, e);
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
          n = eo(),
          r = e.theme || {},
          o = void 0 === t ? n : e.parentEditor || null,
          i = e.disableEvents || !1,
          s = Oo(),
          l = e.namespace || (null !== o ? o._config.namespace : Si()),
          c = e.editorState,
          a = [_No, _Vn2, _Kn, _lr, _bo, _Mo].concat(e.nodes || []),
          u = e.onError,
          f = e.html,
          d = void 0 === e.editable || e.editable;
        var h;
        if (void 0 === t && null !== n) h = n._nodes;
        else {
          h = new Map();
          for (var _t205 = 0; _t205 < a.length; _t205++) {
            var _e127 = a[_t205],
              _n96 = null,
              _r71 = null;
            if ("function" != typeof _e127) {
              var _t206 = _e127;
              ((_e127 = _t206.replace),
                (_n96 = _t206["with"]),
                (_r71 = _t206.withKlass || null));
            }
            xs(_e127);
            var _o59 = _e127.getType(),
              _i29 = Fo(_e127);
            h.set(_o59, {
              exportDOM: f && f["export"] ? f["export"].get(_e127) : void 0,
              klass: _e127,
              replace: _n96,
              replaceWithKlass: _r71,
              sharedNodeState: X(a[_t205]),
              transforms: _i29,
            });
          }
        }
        var g = new _$o(
          s,
          o,
          h,
          {
            disableEvents: i,
            dom: babelHelpers["extends"]({}, Ro, t && t.dom),
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
            (t.registerCommand(Vt, un, Po),
              t.registerCommand(qt, fn, Po),
              t.registerCommand(Xt, dn, Po),
              t.registerCommand(Qt, hn, Po),
              t.registerCommand(ue, _n, Po));
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
      (exports.flipDirection = Es),
      (exports.getDOMOwnerDocument = zi),
      (exports.getDOMSelection = es),
      (exports.getDOMSelectionFromTarget = ns),
      (exports.getDOMTextNode = ni),
      (exports.getEditorPropertyFromDOMNode = Xo),
      (exports.getNearestEditorFromDOMNode = qo),
      (exports.getRegisteredNode = Yo),
      (exports.getRegisteredNodeOrThrow = Uo),
      (exports.getStaticNodeConfig = xs),
      (exports.getStyleObjectFromCSS = Fn),
      (exports.getTextDirection = function (t) {
        return M.test(t) ? "rtl" : b.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = Fo),
      (exports.isBlockDomNode = ls),
      (exports.isCurrentlyReadOnlyMode = Vr),
      (exports.isDOMDocumentNode = ei),
      (exports.isDOMNode = os),
      (exports.isDOMTextNode = ti),
      (exports.isDOMUnmanaged = ys),
      (exports.isDocumentFragment = is),
      (exports.isExactShortcutMatch = Mi),
      (exports.isHTMLAnchorElement = function (t) {
        return rs(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = rs),
      (exports.isInlineDomNode = ss),
      (exports.isLexicalEditor = Vo),
      (exports.isModifierMatch = ki),
      (exports.isSelectionCapturedInDecoratorInput = Ho),
      (exports.isSelectionWithinEditor = Go),
      (exports.makeStepwiseIterator = Gs),
      (exports.mergeRegister = yl),
      (exports.normalizeClassNames = pl),
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
        var n = pl.apply(void 0, e);
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(_t$classList3, n);
      }),
      (exports.removeFromParent = ii),
      (exports.resetRandomKey = function () {
        Wo = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = Ln),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n97 in e) {
          var _r72 = e[_n97];
          null == _r72 ? t.removeProperty(_n97) : Rn(t, _n97, _r72);
        }
      }),
      (exports.setDOMUnmanaged = function (t) {
        t.__lexicalUnmanaged = !0;
      }),
      (exports.setNodeIndentFromDOM = _s),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n98 in e)
          if (t[_n98] !== e[_n98]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.toggleTextFormatType = ri));
  },
  null,
);
