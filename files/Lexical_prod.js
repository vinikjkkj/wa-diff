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
    var _I, _F;
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
      i = n && /Mac|iPod|iPhone|iPad/.test(navigator.platform),
      o = n && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
      s =
        !(!n || !("InputEvent" in window) || r) &&
        "getTargetRanges" in new window.InputEvent("input"),
      l = n && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
      c = n && /Android/.test(navigator.userAgent),
      a = n && /Version\/[\d.]+.*Safari/.test(navigator.userAgent) && !c,
      u = n && /^(?=.*Chrome).*/i.test(navigator.userAgent),
      f = n && c && u,
      d = n && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && i && !u,
      h = 0,
      g = 1,
      _ = 2,
      p = 128,
      y = 1,
      m = 2,
      x = 3,
      C = 4,
      S = 5,
      T = 6,
      N = a || l || d ? "\xa0" : "\u200b",
      v = "\n\n",
      k = o ? "\xa0" : N,
      O = "\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc",
      M =
        "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff",
      E = new RegExp("^[^" + M + "]*[" + O + "]"),
      b = new RegExp("^[^" + O + "]*[" + M + "]"),
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
      w = { directionless: 1, unmergeable: 2 },
      D = { center: 2, end: 6, justify: 4, left: 1, right: 3, start: 5 },
      I =
        ((_I = {}),
        (_I[m] = "center"),
        (_I[T] = "end"),
        (_I[C] = "justify"),
        (_I[y] = "left"),
        (_I[x] = "right"),
        (_I[S] = "start"),
        _I),
      P = { normal: 0, segmented: 2, token: 1 },
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
    var K = null;
    function $(t, e) {
      if (e === void 0) {
        e = 1e3;
      }
      return t instanceof _B
        ? t.clone()
        : t.size < e
          ? new Map(t)
          : new _B().init(new Map(t), void 0, t.size);
    }
    var _B = (function () {
      function B() {
        this._mutable = !1;
        this._old = void 0;
        this._nursery = void 0;
        this._size = 0;
      }
      var _proto2 = B.prototype;
      _proto2.clone = function clone() {
        return (
          (this._mutable = !1),
          new B().init(this._old, this._nursery, this._size)
        );
      };
      _proto2.init = function init(t, e, n) {
        return ((this._old = t), (this._nursery = e), (this._size = n), this);
      };
      _proto2.has = function has(t) {
        return void 0 !== this.get(t);
      };
      _proto2.getWithTombstone = function getWithTombstone(t) {
        var e = this._nursery && this._nursery.get(t);
        return void 0 !== e ? e : this._old && this._old.get(t);
      };
      _proto2.get = function get(t) {
        var e = this.getWithTombstone(t);
        return e === K ? void 0 : e;
      };
      _proto2.shouldCompact = function shouldCompact() {
        return void 0 !== this._nursery && 2 * this._nursery.size > this._size;
      };
      _proto2.getNursery = function getNursery() {
        return (
          (this._mutable && this._nursery) ||
            (this.compact(),
            (this._nursery = new Map(this._nursery)),
            (this._mutable = !0)),
          this._nursery
        );
      };
      _proto2.compact = function compact(t) {
        if (t === void 0) {
          t = !1;
        }
        if (
          this._nursery &&
          this._nursery.size > 0 &&
          (t || this.shouldCompact())
        ) {
          var _t4 = new Map(this._old);
          for (var _ref2 of this._nursery) {
            var _e3 = _ref2[0];
            var _n2 = _ref2[1];
            _n2 !== K ? _t4.set(_e3, _n2) : _t4["delete"](_e3);
          }
          ((this._old = _t4), (this._nursery = void 0));
        }
        return ((this._mutable = !1), this);
      };
      _proto2.set = function set(t, e) {
        var n = this.getWithTombstone(t);
        if (n === e) return this;
        var r = this.getNursery();
        return (
          (n !== K && void 0 !== n) ||
            (this._size++, n === K && r["delete"](t)),
          r.set(t, e),
          this
        );
      };
      _proto2["delete"] = function _delete(t) {
        var e = this.has(t);
        return (e && (this.getNursery().set(t, K), this._size--), e);
      };
      _proto2.getOrInsert = function getOrInsert(t, e) {
        var n = this.get(t);
        return void 0 !== n ? n : (this.set(t, e), e);
      };
      _proto2.getOrInsertComputed = function getOrInsertComputed(t, e) {
        var n = this.get(t);
        if (void 0 !== n) return n;
        var r = e(t);
        return (this.set(t, r), r);
      };
      _proto2.clear = function clear() {
        ((this._mutable = !1),
          (this._old = void 0),
          (this._nursery = void 0),
          (this._size = 0));
      };
      _proto2.keys = function* keys() {
        for (var _t5 of this.entries()) yield _t5[0];
      };
      _proto2.values = function* values() {
        for (var _t6 of this.entries()) yield _t6[1];
      };
      _proto2.entries = function* entries() {
        var t = this._nursery,
          e = this._old;
        if (e)
          for (var _n3 of e) {
            var _e4 = _n3[0],
              _r2 = t ? t.get(_e4) : void 0;
            _r2 !== K && (void 0 !== _r2 && (_n3[1] = _r2), yield _n3);
          }
        if (t)
          for (var _n4 of t)
            _n4[1] === K || (e && e.has(_n4[0])) || (yield _n4);
      };
      _proto2.forEach = function forEach(t, e) {
        void 0 !== e && (t = t.bind(e));
        for (var _ref4 of this.entries()) {
          var _e5 = _ref4[0];
          var _n5 = _ref4[1];
          t(_n5, _e5, this);
        }
      };
      _proto2[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this.entries();
        };
      return babelHelpers.createClass(B, [
        {
          key: "size",
          get: function get() {
            return this._size;
          },
        },
        {
          key:
            typeof Symbol === "function" ? Symbol.toStringTag : "@@toStringTag",
          get: function get() {
            return "GenMap";
          },
        },
      ]);
    })();
    function z(t) {
      throw new Error(t);
    }
    function W(t, e, n, r, i, o) {
      var s = t.getFirstChild();
      for (; null !== s; ) {
        var _t7 = s.__key;
        (s.__parent === e &&
          (Li(s) && W(s, _t7, n, r, i, o),
          n.has(_t7) || o["delete"](_t7),
          i.push(_t7)),
          (s = s.getNextSibling()));
      }
    }
    var U = !1,
      Y = 0;
    function j(t) {
      Y = t.timeStamp;
    }
    function J(t, e, n) {
      var r = "BR" === t.nodeName,
        i = e.__lexicalLineBreak;
      return (
        (i && (t === i || (r && t.previousSibling === i))) ||
        (r && void 0 !== wo(t, n))
      );
    }
    function G(t, e, n) {
      var r = Cs(fs(n));
      var i = null,
        o = null;
      null !== r &&
        r.anchorNode === t &&
        ((i = r.anchorOffset), (o = r.focusOffset));
      var s = t.nodeValue;
      null !== s && Yo(e, s, i, o, !1);
    }
    function H(t, e, n) {
      if (Pr(t)) {
        var _e6 = t.anchor.getNode();
        if (_e6.is(n) && t.format !== _e6.getFormat()) return !1;
      }
      return Co(e) && n.isAttached();
    }
    function V(t, e, n, r) {
      for (var _i2 = t; _i2 && !$s(_i2); _i2 = os(_i2)) {
        var _t8 = wo(_i2, e);
        if (void 0 !== _t8) {
          var _e7 = bo(_t8, n);
          if (_e7) return Bi(_e7) || !Ts(_i2) ? void 0 : [_i2, _e7];
        } else if (_i2 === r) return [r, Ro(n)];
      }
    }
    function q(t, e, n) {
      U = !0;
      var r = performance.now() - Y > 100;
      try {
        Ii(t, function () {
          var i =
              Xr() ||
              (function (t) {
                return t.getEditorState().read(function () {
                  var t = Xr();
                  return null !== t ? t.clone() : null;
                });
              })(t),
            s = new Map(),
            l = t.getRootElement(),
            c = t._editorState,
            a = t._blockCursorElement;
          var u = !1,
            f = "";
          for (var _n6 = 0; _n6 < e.length; _n6++) {
            var _d = e[_n6],
              _h = _d.type,
              _g = _d.target,
              _2 = V(_g, t, c, l);
            if (!_2) continue;
            var _p = _2[0],
              _y = _2[1];
            if ("characterData" === _h)
              r && vr(_y) && Co(_g) && H(i, _g, _y) && G(_g, _y, t);
            else if ("childList" === _h) {
              u = !0;
              var _e8 = _d.addedNodes;
              for (var _n7 = 0; _n7 < _e8.length; _n7++) {
                var _r3 = _e8[_n7],
                  _i3 = Ao(_r3),
                  _s2 = _r3.parentNode;
                if (
                  null != _s2 &&
                  _r3 !== a &&
                  null === _i3 &&
                  !J(_r3, _s2, t)
                ) {
                  if (o) {
                    var _t9 = (Ts(_r3) ? _r3.innerText : null) || _r3.nodeValue;
                    _t9 && (f += _t9);
                  }
                  _s2.removeChild(_r3);
                }
              }
              var _n8 = _d.removedNodes,
                _r4 = _n8.length;
              if (_r4 > 0) {
                var _e9 = 0;
                for (var _i4 = 0; _i4 < _r4; _i4++) {
                  var _r5 = _n8[_i4];
                  (J(_r5, _g, t) || a === _r5) && (_g.appendChild(_r5), _e9++);
                }
                _r4 !== _e9 && s.set(_p, _y);
              }
            }
          }
          if (s.size > 0)
            for (var _ref6 of s) {
              var _e0 = _ref6[0];
              var _n9 = _ref6[1];
              _n9.reconcileObservedMutation(_e0, t);
            }
          var d = n.takeRecords();
          if (d.length > 0) {
            for (var _e1 = 0; _e1 < d.length; _e1++) {
              var _n0 = d[_e1],
                _r6 = _n0.addedNodes,
                _i5 = _n0.target;
              for (var _e10 = 0; _e10 < _r6.length; _e10++) {
                var _n1 = _r6[_e10],
                  _o2 = _n1.parentNode;
                null == _o2 ||
                  "BR" !== _n1.nodeName ||
                  J(_n1, _i5, t) ||
                  _o2.removeChild(_n1);
              }
            }
            n.takeRecords();
          }
          null !== i && (u && Lo(i), o && ns(t) && i.insertRawText(f));
        });
      } finally {
        U = !1;
      }
    }
    function X(t) {
      var e = t._observer;
      if (null !== e) {
        q(t, e.takeRecords(), e);
      }
    }
    function Q(t) {
      (!(function (t) {
        0 === Y && fs(t).addEventListener("textInput", j, !0);
      })(t),
        (t._observer = new MutationObserver(function (e, n) {
          q(t, e, n);
        })));
    }
    var Z = function Z(t, e) {
      ((this.key = t),
        (this.parse = e.parse.bind(e)),
        (this.unparse = (e.unparse || st).bind(e)),
        (this.isEqual = (e.isEqual || Object.is).bind(e)),
        (this.defaultValue = this.parse(void 0)),
        (this.resetOnCopyNode = e.resetOnCopyNode || !1));
    };
    function tt(t, e, n) {
      if (n === void 0) {
        n = "latest";
      }
      var r = ("latest" === n ? t.getLatest() : t).__state;
      return r ? r.getValue(e) : e.defaultValue;
    }
    function et(t) {
      var e = new Map(),
        n = new Set();
      for (
        var _r7 = "function" == typeof t ? t : t.replace;
        _r7.prototype && void 0 !== _r7.prototype.getType;
        _r7 = Object.getPrototypeOf(_r7)
      ) {
        var _zs = zs(_r7),
          _t0 = _zs.ownNodeConfig;
        if (_t0 && _t0.stateConfigs)
          for (var _r8 of _t0.stateConfigs) {
            var _t1 = void 0;
            ("stateConfig" in _r8
              ? ((_t1 = _r8.stateConfig), _r8.flat && n.add(_t1.key))
              : (_t1 = _r8),
              e.set(_t1.key, _t1));
          }
      }
      return { flatKeys: n, sharedConfigMap: e };
    }
    var _nt = (function () {
      function nt(t, e, n, r, i) {
        if (n === void 0) {
          n = void 0;
        }
        if (r === void 0) {
          r = new Map();
        }
        if (i === void 0) {
          i = void 0;
        }
        ((this.node = t),
          (this.sharedNodeState = e),
          (this.unknownState = n),
          (this.knownState = r));
        var o = this.sharedNodeState.sharedConfigMap,
          s =
            void 0 !== i
              ? i
              : (function (t, e, n) {
                  var r = n.size;
                  if (e)
                    for (var _i6 in e) {
                      var _e11 = t.get(_i6);
                      (_e11 && n.has(_e11)) || r++;
                    }
                  return r;
                })(o, n, r);
        this.size = s;
      }
      var _proto3 = nt.prototype;
      _proto3.getValue = function getValue(t) {
        var e = this.knownState.get(t);
        if (void 0 !== e) return e;
        this.sharedNodeState.sharedConfigMap.set(t.key, t);
        var n = t.defaultValue;
        if (this.unknownState && t.key in this.unknownState) {
          var _e12 = this.unknownState[t.key];
          (void 0 !== _e12 && (n = t.parse(_e12)), this.updateFromKnown(t, n));
        }
        return n;
      };
      _proto3.getInternalState = function getInternalState() {
        return [this.unknownState, this.knownState];
      };
      _proto3.toJSON = function toJSON() {
        var t = babelHelpers["extends"]({}, this.unknownState),
          e = {};
        for (var _ref8 of this.knownState) {
          var _e13 = _ref8[0];
          var _n10 = _ref8[1];
          _e13.isEqual(_n10, _e13.defaultValue)
            ? delete t[_e13.key]
            : (t[_e13.key] = _e13.unparse(_n10));
        }
        for (var _n11 of this.sharedNodeState.flatKeys)
          _n11 in t && ((e[_n11] = t[_n11]), delete t[_n11]);
        return (ot(t) && (e.$ = t), e);
      };
      _proto3.getWritable = function getWritable(t) {
        if (this.node === t) return this;
        var e = this.sharedNodeState,
          n = this.unknownState,
          r = new Map(this.knownState);
        return new nt(
          t,
          e,
          (function (t, e, n) {
            var r;
            if (n)
              for (var _ref0 of Object.entries(n)) {
                var _i7 = _ref0[0];
                var _o3 = _ref0[1];
                {
                  var _n12 = t.get(_i7);
                  _n12
                    ? e.has(_n12) || e.set(_n12, _n12.parse(_o3))
                    : ((r = r || {}), (r[_i7] = _o3));
                }
              }
            return r;
          })(e.sharedConfigMap, r, n),
          r,
          this.size,
        );
      };
      _proto3.resetOnCopyNode = function resetOnCopyNode() {
        for (var _t10 of this.knownState.keys())
          _t10.resetOnCopyNode && this.knownState.set(_t10, _t10.defaultValue);
        return this;
      };
      _proto3.updateFromKnown = function updateFromKnown(t, e) {
        var n = t.key;
        this.sharedNodeState.sharedConfigMap.set(n, t);
        var r = this.knownState,
          i = this.unknownState;
        (r.has(t) ||
          (i && n in i) ||
          (i && (delete i[n], (this.unknownState = ot(i))), this.size++),
          r.set(t, e));
      };
      _proto3.updateFromUnknown = function updateFromUnknown(t, e) {
        var n = this.sharedNodeState.sharedConfigMap.get(t);
        n
          ? this.updateFromKnown(n, n.parse(e))
          : ((this.unknownState = this.unknownState || {}),
            t in this.unknownState || this.size++,
            (this.unknownState[t] = e));
      };
      _proto3.updateFromJSON = function updateFromJSON(t) {
        var e = this.knownState;
        for (var _t11 of e.keys()) e.set(_t11, _t11.defaultValue);
        if (((this.size = e.size), (this.unknownState = void 0), t))
          for (var _ref10 of Object.entries(t)) {
            var _e14 = _ref10[0];
            var _n13 = _ref10[1];
            this.updateFromUnknown(_e14, _n13);
          }
      };
      return nt;
    })();
    function rt(t) {
      var e = t.getWritable(),
        n = e.__state ? e.__state.getWritable(e) : new _nt(e, it(e));
      return ((e.__state = n), n);
    }
    function it(t) {
      return t.__state
        ? t.__state.sharedNodeState
        : co(As(), t.getType()).sharedNodeState;
    }
    function ot(t) {
      if (t) for (var _e15 in t) return t;
    }
    function st(t) {
      return t;
    }
    function lt(t, e, n) {
      for (var _ref12 of e.knownState) {
        var _r9 = _ref12[0];
        var _i8 = _ref12[1];
        {
          if (t.has(_r9.key)) continue;
          t.add(_r9.key);
          var _e16 = n ? n.getValue(_r9) : _r9.defaultValue;
          if (_e16 !== _i8 && !_r9.isEqual(_e16, _i8)) return !0;
        }
      }
      return !1;
    }
    function ct(t, e, n) {
      var r = e.unknownState,
        i = n ? n.unknownState : void 0;
      if (r)
        for (var _ref14 of Object.entries(r)) {
          var _e17 = _ref14[0];
          var _n14 = _ref14[1];
          if (t.has(_e17)) continue;
          t.add(_e17);
          if (_n14 !== (i ? i[_e17] : void 0)) return !0;
        }
      return !1;
    }
    function at(t, e) {
      var n = t.__state;
      return n && n.node === t ? n.getWritable(e) : n;
    }
    function ut(t, e) {
      var n = t.__mode,
        r = t.__format,
        i = t.__style,
        o = e.__mode,
        s = e.__format,
        l = e.__style,
        c = t.__state,
        a = e.__state;
      return (
        (null === n || n === o) &&
        (null === r || r === s) &&
        (null === i || i === l) &&
        (null === t.__state ||
          c === a ||
          (function (t, e) {
            if (t === e) return !0;
            var n = new Set();
            return !(
              (t && lt(n, t, e)) ||
              (e && lt(n, e, t)) ||
              (t && ct(n, t, e)) ||
              (e && ct(n, e, t))
            );
          })(c, a))
      );
    }
    function ft(t, e) {
      var n = t.mergeWithSibling(e),
        r = xi()._normalizedNodes;
      return (r.add(t.__key), r.add(e.__key), n);
    }
    function dt(t) {
      var e,
        n,
        r = t;
      if ("" !== r.__text || !r.isSimpleText() || r.isUnmergeable()) {
        for (
          ;
          null !== (e = r.getPreviousSibling()) &&
          vr(e) &&
          e.isSimpleText() &&
          !e.isUnmergeable();
        ) {
          if ("" !== e.__text) {
            if (ut(e, r)) {
              r = ft(e, r);
              break;
            }
            break;
          }
          e.remove();
        }
        for (
          ;
          null !== (n = r.getNextSibling()) &&
          vr(n) &&
          n.isSimpleText() &&
          !n.isUnmergeable();
        ) {
          if ("" !== n.__text) {
            if (ut(r, n)) {
              r = ft(r, n);
              break;
            }
            break;
          }
          n.remove();
        }
      } else r.remove();
    }
    function ht(t) {
      return (gt(t.anchor), gt(t.focus), t);
    }
    function gt(t) {
      for (; "element" === t.type; ) {
        var _e18 = t.getNode(),
          _n15 = t.offset;
        var _r0 = void 0,
          _i9 = void 0;
        if (
          (_n15 === _e18.getChildrenSize()
            ? ((_r0 = _e18.getChildAtIndex(_n15 - 1)), (_i9 = !0))
            : ((_r0 = _e18.getChildAtIndex(_n15)), (_i9 = !1)),
          vr(_r0))
        ) {
          t.set(_r0.__key, _i9 ? _r0.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!Li(_r0)) break;
        t.set(_r0.__key, _i9 ? _r0.getChildrenSize() : 0, "element", !0);
      }
    }
    var _t = Symbol["for"]("@lexical/CachedTextSize");
    function pt(t) {
      if (Li(t)) {
        var _e19 = Pt.get(t.__key),
          _n16 = _e19 && _e19.__lexicalTextContent;
        return (
          "string" != typeof _n16 &&
            z(
              "cachedTextSize: missing __lexicalTextContent for ElementNode of type " +
                t.getType(),
            ),
          _n16.length
        );
      }
      var e = t[_t];
      return (
        void 0 === e &&
          z(
            "cachedTextSize: missing entry for leaf " +
              t.getType() +
              " key " +
              t.__key,
          ),
        e
      );
    }
    function yt(t) {
      Li(t) ||
        (void 0 === t[_t] &&
          (t[_t] = vr(t) ? t.__text.length : t.getTextContentSize()));
    }
    var mt = 4;
    var xt,
      Ct,
      St,
      Tt = "",
      Nt = null,
      vt = null,
      kt = null;
    function Ot() {
      return { firstTextKey: kt, format: Nt, style: vt };
    }
    function Mt(t) {
      null !== t.firstTextKey &&
        ((Nt = t.format), (vt = t.style), (kt = t.firstTextKey));
    }
    function Et(t) {
      if (null !== kt) return;
      var e = t.__lexicalFirstTextKey;
      if (
        (void 0 === e &&
          z(
            "$bubbleChildFirstText: missing __lexicalFirstTextKey on element keyed DOM",
          ),
        null === e)
      )
        return;
      var n = It.get(e);
      vr(n) && ((Nt = n.getFormat()), (vt = n.getStyle()), (kt = e));
    }
    var bt,
      At,
      wt,
      Dt,
      It,
      Pt,
      Ft,
      Rt,
      Lt,
      Kt = !1,
      $t = !1;
    function Bt(t, e) {
      var n = Dt.get(t),
        r = It.has(t);
      if (null !== e) {
        var _n17 = re(t);
        _n17.parentNode === e && e.removeChild(_n17);
      }
      if (!r) {
        if ((Ct._keyToDOMMap["delete"](t), Li(n))) {
          var _t12 = Us(n, Dt);
          zt(_t12, 0, _t12.length - 1, null);
        }
        void 0 !== n && Zo(Rt, St, bt, n, "destroyed");
      }
    }
    function zt(t, e, n, r) {
      for (var _i0 = e; _i0 <= n; ++_i0) {
        var _e20 = t[_i0];
        void 0 !== _e20 && Bt(_e20, r);
      }
    }
    function Wt(t, e) {
      t.setProperty("text-align", e);
    }
    var Ut = "40px";
    function Yt(t, e) {
      var n = xt.theme.indent;
      if ("string" == typeof n) {
        var _r1 = t.classList.contains(n);
        e > 0 && !_r1
          ? t.classList.add(n)
          : e < 1 && _r1 && t.classList.remove(n);
      }
      t.style.setProperty(
        "padding-inline-start",
        0 === e
          ? ""
          : "calc(" + e + " * var(--lexical-indent-base-value, " + Ut + "))",
      );
    }
    function jt(t, e) {
      var n = t.style;
      0 === e
        ? Wt(n, "")
        : 1 === e
          ? Wt(n, "left")
          : 2 === e
            ? Wt(n, "center")
            : 3 === e
              ? Wt(n, "right")
              : 4 === e
                ? Wt(n, "justify")
                : 5 === e
                  ? Wt(n, "start")
                  : 6 === e && Wt(n, "end");
    }
    function Jt(t, e) {
      var n = (function (t) {
        var e = t.__dir;
        if (null !== e) return e;
        if (Wi(t)) return null;
        var n = t.getParentOrThrow();
        return hs(n) && null === n.__dir ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function Gt(e, n) {
      var r = It.get(e);
      if ((void 0 === r && t(60), null !== n)) {
        var _t13 = Dt.get(e);
        if (void 0 !== _t13 && _t13.__parent !== r.__parent) {
          var _t14 = Pt.get(e);
          if (void 0 !== _t14) return (n.insertChild(_t14), Qt(e, n.element));
        }
      }
      var i = Lt.$createDOM(r, Ct);
      if (
        ((function (t, e, n) {
          var r = n._keyToDOMMap;
          ((function (t, e, n) {
            var r = "__lexicalKey_" + e._key;
            t[r] = n;
          })(e, n, t),
            r.set(t, e));
        })(e, i, Ct),
        vr(r)
          ? i.setAttribute("data-lexical-text", "true")
          : Bi(r) && i.setAttribute("data-lexical-decorator", "true"),
        Li(r))
      ) {
        var _t15 = r.__indent,
          _e21 = r.__size;
        if ((Jt(i, r), 0 !== _t15 && Yt(i, _t15), 0 === _e21))
          ((i.__lexicalTextContent = ""), (i.__lexicalFirstTextKey = null));
        else {
          var _t16 = _e21 - 1;
          Ht(Us(r, It), r, 0, _t16, Lt.$getDOMSlot(r, i, Ct));
        }
        var _n18 = r.__format;
        (0 !== _n18 && jt(i, _n18), r.isInline() || Vt(null, r, i));
      } else {
        var _t17 = r.getTextContent();
        if (Bi(r)) {
          var _t18 = r.decorate(Ct, xt);
          (null !== _t18 && Zt(e, _t18), (i.contentEditable = "false"));
        }
        Tt += _t17;
      }
      return (
        null !== n && n.insertChild(i),
        Lt.$decorateDOM(r, null, i, Ct),
        yt(r),
        Zo(Rt, St, bt, r, "created"),
        i
      );
    }
    function Ht(t, e, n, r, i) {
      var o = Tt,
        s = Ot();
      ((Tt = ""), (Nt = null), (vt = null), (kt = null));
      var l = n;
      for (; l <= r; ++l) {
        var _e22 = Ot();
        Gt(t[l], i);
        var _n19 = It.get(t[l]);
        (null !== _n19 && vr(_n19)
          ? null === Nt &&
            ((Nt = _n19.getFormat()), (vt = _n19.getStyle()), (kt = _n19.__key))
          : Li(_n19) && l < r && !_n19.isInline() && (Tt += v),
          Mt(_e22));
      }
      var c = Ct._keyToDOMMap.get(e.__key);
      (void 0 === c &&
        z(
          "$createChildren: Element with key " +
            e.__key +
            " missing from keyToDOMMap",
        ),
        (c.__lexicalTextContent = Tt),
        (c.__lexicalFirstTextKey = kt),
        (Tt = o + Tt),
        Mt(s));
    }
    function Vt(t, e, n) {
      var _r$element$__lexicalL;
      var r = Lt.$getDOMSlot(e, n, Ct),
        i =
          (_r$element$__lexicalL = r.element.__lexicalLastChildKind) != null
            ? _r$element$__lexicalL
            : null,
        o = (function (t, e) {
          if (t) {
            var _n20 = t.__last;
            if (_n20) {
              var _t19 = e.get(_n20);
              if (_t19)
                return sr(_t19)
                  ? "line-break"
                  : Bi(_t19) && _t19.isInline()
                    ? "decorator"
                    : null;
            }
            return "empty";
          }
          return null;
        })(e, It);
      i !== o && r.setManagedLineBreak(o);
    }
    function qt(e, n, r) {
      var i;
      ((Nt = null),
        (vt = null),
        (kt = null),
        (function (e, n, r) {
          var i = Tt,
            o = e.__size,
            s = n.__size;
          Tt = "";
          var l = r.element,
            c = Ct._keyToDOMMap.get(n.__key);
          void 0 === c &&
            z(
              "$reconcileChildren: Element with key " +
                n.__key +
                " missing from keyToDOMMap",
            );
          var a = s - o;
          if (
            Math.abs(a) <= 1 &&
            o >= mt &&
            e.__first === n.__first &&
            (0 !== a || !Ct._cloneNotNeeded.has(e.__key))
          ) {
            var _t20 = c.__lexicalTextContent,
              _o4 = Ft.get(e.__key);
            if (!Kt && "string" == typeof _t20 && void 0 !== _o4) {
              var _s3 = (function (t, e) {
                var n = e.size;
                if (0 === n || n >= t.__size) return null;
                var r = t.__last,
                  i = null,
                  o = 0;
                for (; null !== r && o < n; ) {
                  if (!e.has(r)) return null;
                  i = r;
                  var _t21 = It.get(r);
                  if (void 0 === _t21) return null;
                  ((r = _t21.__prev), o++);
                }
                if (o !== n) return null;
                if (null !== r && e.has(r)) return null;
                return i;
              })(n, _o4);
              if (null !== _s3) {
                var _u = _o4.size;
                if (0 === a) {
                  var _e23 = 0,
                    _r10 = _s3,
                    _a = 0;
                  for (; null !== _r10 && _a < _u; ) {
                    var _t22 = Dt.get(_r10);
                    if (void 0 === _t22) break;
                    ((_e23 += pt(_t22)),
                      _a < _u - 1 &&
                        Li(_t22) &&
                        !_t22.isInline() &&
                        (_e23 += 2));
                    var _n21 = It.get(_r10);
                    ((_r10 = _n21 ? _n21.__next : null), _a++);
                  }
                  for (_r10 = _s3, _a = 0; null !== _r10 && _a < _u; ) {
                    var _t23 = It.get(_r10);
                    if (void 0 === _t23) break;
                    var _e24 = Ot();
                    (Qt(_r10, l),
                      vr(_t23) &&
                        null === Nt &&
                        ((Nt = _t23.getFormat()),
                        (vt = _t23.getStyle()),
                        (kt = _t23.__key)),
                      Mt(_e24),
                      (_r10 = _t23.__next),
                      _a++);
                  }
                  var _f = "";
                  for (_r10 = _s3, _a = 0; null !== _r10 && _a < _u; ) {
                    var _t24 = It.get(_r10);
                    if (void 0 === _t24) break;
                    var _e25 = void 0;
                    if (Li(_t24)) {
                      var _n22 = Ct._keyToDOMMap.get(_r10),
                        _i1 = _n22 && _n22.__lexicalTextContent;
                      ("string" != typeof _i1 &&
                        z(
                          "reconcileChildren same-size suffix: missing __lexicalTextContent on child of type " +
                            _t24.getType() +
                            " after reconcile",
                        ),
                        (_e25 = _i1));
                    } else _e25 = _t24.getTextContent();
                    ((_f += _e25),
                      _a < _u - 1 && Li(_t24) && !_t24.isInline() && (_f += v),
                      (_r10 = _t24.__next),
                      _a++);
                  }
                  var _d2 = _t20.slice(0, _t20.length - _e23) + _f;
                  return (
                    (c.__lexicalTextContent = _d2),
                    (Tt = i + _d2),
                    void Xt(n, c, _o4)
                  );
                }
                if (
                  (function (t, e, n, r, i, o, s, l) {
                    if (1 !== l && -1 !== l) return !1;
                    var c = 1 === l ? 2 : 1;
                    if (s !== c) return !1;
                    var a = s - l;
                    var u = t.__last;
                    for (var _t25 = 0; _t25 < a - 1; _t25++) {
                      if (null === u) return !1;
                      var _t26 = Dt.get(u);
                      if (void 0 === _t26) return !1;
                      u = _t26.__prev;
                    }
                    if (null === u) return !1;
                    var f = It.get(o),
                      d = Dt.get(u);
                    if (void 0 === f || void 0 === d) return !1;
                    if (f.__prev !== d.__prev) return !1;
                    var h = [];
                    var g = o;
                    for (var _t27 = 0; _t27 < s; _t27++) {
                      if (null === g) return !1;
                      h.push(g);
                      var _t28 = It.get(g);
                      g = _t28 ? _t28.__next : null;
                    }
                    var _ = [];
                    g = u;
                    for (var _t29 = 0; _t29 < a; _t29++) {
                      if (null === g) return !1;
                      _.push(g);
                      var _t30 = Dt.get(g);
                      g = _t30 ? _t30.__next : null;
                    }
                    var p = new Set(_),
                      y = new Set(h),
                      m = [];
                    var x = 0,
                      C = 0;
                    for (; x < a && C < s; )
                      if (h[C] === _[x])
                        (m.push({ key: h[C], kind: "reconcile" }), x++, C++);
                      else if (y.has(_[x])) {
                        if (p.has(h[C])) return !1;
                        (m.push({ key: h[C], kind: "create", nextIndex: C }),
                          C++);
                      } else (m.push({ key: _[x], kind: "destroy" }), x++);
                    for (; x < a; ) m.push({ key: _[x++], kind: "destroy" });
                    for (; C < s; )
                      (m.push({ key: h[C], kind: "create", nextIndex: C }),
                        C++);
                    var S = 0;
                    for (var _t31 = 0; _t31 < a; _t31++) {
                      var _e26 = Dt.get(_[_t31]);
                      if (void 0 === _e26) return !1;
                      ((S += pt(_e26)),
                        _t31 < a - 1 &&
                          Li(_e26) &&
                          !_e26.isInline() &&
                          (S += 2));
                    }
                    for (var _t32 of m) {
                      var _e27 = Ot();
                      if ("reconcile" === _t32.kind) Qt(_t32.key, n.element);
                      else if ("destroy" === _t32.kind) Bt(_t32.key, n.element);
                      else {
                        var _e28 = null;
                        for (var _n23 = _t32.nextIndex + 1; _n23 < s; _n23++) {
                          var _t33 = Ct._keyToDOMMap.get(h[_n23]);
                          if (void 0 !== _t33) {
                            _e28 = _t33;
                            break;
                          }
                        }
                        Gt(_t32.key, n.withBefore(_e28));
                      }
                      if ("destroy" !== _t32.kind) {
                        var _e29 = It.get(_t32.key);
                        _e29 &&
                          vr(_e29) &&
                          null === Nt &&
                          ((Nt = _e29.getFormat()),
                          (vt = _e29.getStyle()),
                          (kt = _e29.__key));
                      }
                      Mt(_e27);
                    }
                    var T = "";
                    for (var _t34 = 0; _t34 < s; _t34++) {
                      var _e30 = It.get(h[_t34]);
                      if (void 0 === _e30) return !1;
                      var _n24 = void 0;
                      if (Li(_e30)) {
                        var _r11 = Ct._keyToDOMMap.get(h[_t34]),
                          _i10 = _r11 && _r11.__lexicalTextContent;
                        ("string" != typeof _i10 &&
                          z(
                            "tryReconcileSuffixWithSizeDelta: missing __lexicalTextContent on child of type " +
                              _e30.getType() +
                              " after suffix reconcile",
                          ),
                          (_n24 = _i10));
                      } else _n24 = _e30.getTextContent();
                      ((T += _n24),
                        _t34 < s - 1 &&
                          Li(_e30) &&
                          !_e30.isInline() &&
                          (T += v));
                    }
                    var N = i.slice(0, i.length - S) + T;
                    return ((r.__lexicalTextContent = N), !0);
                  })(e, 0, r, c, _t20, _s3, _u, a)
                ) {
                  var _t35 = c.__lexicalTextContent;
                  return (
                    "string" != typeof _t35 &&
                      z(
                        "reconcileChildren: $tryReconcileSuffixWithSizeDelta returned true without writing __lexicalTextContent",
                      ),
                    (Tt = i + _t35),
                    void Xt(n, c, _o4)
                  );
                }
              }
            }
            if (0 === a) {
              var _t36 = e.__first,
                _n25 = 0;
              for (; null !== _t36; ) {
                var _e31 = It.get(_t36);
                if (void 0 === _e31) break;
                var _r12 = Kt || wt.has(_t36) || At.has(_t36),
                  _i11 = Ot();
                if (_r12) Qt(_t36, l);
                else {
                  var _n26 = void 0,
                    _r13 = void 0;
                  if (Li(_e31)) {
                    _r13 = Pt.get(_t36);
                    var _i12 = _r13 && _r13.__lexicalTextContent;
                    ("string" != typeof _i12 &&
                      z(
                        "reconcileChildren structurally-clean walk: missing __lexicalTextContent on non-dirty child of type " +
                          _e31.getType(),
                      ),
                      (_n26 = _i12));
                  } else _n26 = _e31.getTextContent();
                  ((Tt += _n26), void 0 !== _r13 && Et(_r13));
                }
                (vr(_e31)
                  ? null === Nt &&
                    ((Nt = _e31.getFormat()),
                    (vt = _e31.getStyle()),
                    (kt = _e31.__key))
                  : Li(_e31) && _n25 < s - 1 && !_e31.isInline() && (Tt += v),
                  Mt(_i11),
                  (_t36 = _e31.__next),
                  _n25++);
              }
              return (
                (c.__lexicalTextContent = Tt),
                (c.__lexicalFirstTextKey = kt),
                void (Tt = i + Tt)
              );
            }
          }
          if (1 === o && 1 === s) {
            var _t37 = e.__first,
              _i13 = n.__first;
            if (_t37 === _i13) Qt(_t37, l);
            else {
              var _e32 = re(_t37),
                _n27 = Gt(_i13, null);
              try {
                _e32.parentNode === l
                  ? l.replaceChild(_n27, _e32)
                  : r.insertChild(_n27);
              } catch (r) {
                if ("object" == typeof r && null != r) {
                  var _o5 =
                    r.toString() +
                    " Parent: " +
                    l.tagName +
                    ", new child: {tag: " +
                    _n27.tagName +
                    " key: " +
                    _i13 +
                    "}, old child: {tag: " +
                    _e32.tagName +
                    ", key: " +
                    _t37 +
                    "}.";
                  throw new Error(_o5);
                }
                throw r;
              }
              Bt(_t37, null);
            }
            var _o6 = It.get(_i13);
            vr(_o6) &&
              null === Nt &&
              ((Nt = _o6.getFormat()), (vt = _o6.getStyle()), (kt = _o6.__key));
          } else {
            var _i14 = Us(e, Dt),
              _c = Us(n, It);
            if (
              (_i14.length !== o && t(227), _c.length !== s && t(228), 0 === o)
            )
              0 !== s && Ht(_c, n, 0, s - 1, r);
            else if (0 === s) {
              if (0 !== o) {
                var _t38 =
                  null == r.after &&
                  null == r.before &&
                  null == r.element.__lexicalLineBreak;
                (zt(_i14, 0, o - 1, _t38 ? null : l),
                  _t38 && (l.textContent = ""));
              }
            } else
              !(function (t, e, n, r, i, o) {
                var s = r - 1,
                  l = i - 1;
                var c,
                  a,
                  u = o.getFirstChild(),
                  f = 0,
                  d = 0;
                for (; f <= s && d <= l; ) {
                  var _t39 = e[f],
                    _r14 = n[d],
                    _i15 = Ot();
                  if (_t39 === _r14) ((u = te(Qt(_r14, o.element))), f++, d++);
                  else {
                    if ((void 0 === a && (a = ee(n, d)), void 0 === c))
                      c = ee(e, f);
                    else if (!c.has(_t39)) {
                      (f++, Mt(_i15));
                      continue;
                    }
                    if (!a.has(_t39)) {
                      ((u = te(re(_t39))),
                        Bt(_t39, o.element),
                        f++,
                        c["delete"](_t39),
                        Mt(_i15));
                      continue;
                    }
                    if (c.has(_r14)) {
                      var _t40 = is(Ct, _r14);
                      (_t40 !== u && o.withBefore(u).insertChild(_t40),
                        (u = te(Qt(_r14, o.element))),
                        f++,
                        d++);
                    } else (Gt(_r14, o.withBefore(u)), d++);
                  }
                  var _s4 = It.get(_r14);
                  (null !== _s4 && vr(_s4)
                    ? null === Nt &&
                      ((Nt = _s4.getFormat()),
                      (vt = _s4.getStyle()),
                      (kt = _s4.__key))
                    : Li(_s4) && d <= l && !_s4.isInline() && (Tt += v),
                    Mt(_i15));
                }
                var h = f > s,
                  g = d > l;
                if (h && !g) {
                  var _e33 = n[l + 1],
                    _r15 = void 0 === _e33 ? null : Ct.getElementByKey(_e33);
                  Ht(n, t, d, l, o.withBefore(_r15));
                } else g && !h && zt(e, f, s, o.element);
              })(n, _i14, _c, o, s, r);
          }
          ((c.__lexicalTextContent = Tt),
            (c.__lexicalFirstTextKey = kt),
            (Tt = i + Tt));
        })(e, n, Lt.$getDOMSlot(n, r, Ct)),
        hs(n) ||
          ((i = n),
          null == Nt || Nt === i.__textFormat || $t || i.setTextFormat(Nt),
          (function (t) {
            null == vt || vt === t.__textStyle || $t || t.setTextStyle(vt);
          })(n)));
    }
    function Xt(t, e, n) {
      var r = e.__lexicalFirstTextKey;
      if (null != r) {
        var _e34 = t.__key;
        var _i16 = r;
        for (; null !== _i16; ) {
          var _t41 = It.get(_i16);
          if (void 0 === _t41) {
            _i16 = null;
            break;
          }
          if (_t41.__parent === _e34) break;
          _i16 = _t41.__parent;
        }
        if (null !== _i16 && !n.has(_i16)) {
          var _t42 = It.get(r);
          if (vr(_t42))
            return ((Nt = _t42.getFormat()), void (vt = _t42.getStyle()));
        }
      }
      e.__lexicalFirstTextKey = kt;
    }
    function Qt(e, n) {
      var r = Dt.get(e);
      var i = It.get(e);
      (void 0 !== r && void 0 !== i) || t(61);
      var o = Kt || wt.has(e) || At.has(e),
        s = is(Ct, e);
      if (r === i && !o) {
        var _t43;
        if (Li(r)) {
          var _e35 = s.__lexicalTextContent;
          ("string" != typeof _e35 &&
            z(
              "reconcileNode: missing __lexicalTextContent on non-dirty element of type " +
                r.getType(),
            ),
            (_t43 = _e35),
            Et(s));
        } else _t43 = r.getTextContent();
        return ((Tt += _t43), s);
      }
      if (
        (r !== i && o && Zo(Rt, St, bt, i, "updated"),
        Lt.$updateDOM(i, r, s, Ct))
      ) {
        var _r16 = Gt(e, null);
        return (
          null === n && t(62),
          n.replaceChild(_r16, s),
          Bt(e, null),
          _r16
        );
      }
      if (Li(r)) {
        Li(i) || t(334, e);
        var _n28 = i.__indent;
        (Kt || _n28 !== r.__indent) && Yt(s, _n28);
        var _l2 = i.__format;
        if (((Kt || _l2 !== r.__format) && jt(s, _l2), o))
          (qt(r, i, s), Wi(i) || i.isInline() || Vt(0, i, s));
        else {
          var _t44 = s.__lexicalTextContent;
          ("string" != typeof _t44 &&
            z(
              "reconcileNode: missing __lexicalTextContent on cloned non-dirty element of type " +
                r.getType(),
            ),
            (Tt += _t44),
            Et(s));
        }
        if (
          (Kt || i.__dir !== r.__dir || i.__parent !== r.__parent) &&
          (Jt(s, i), Wi(i) && !Kt)
        )
          for (var _t45 of i.getChildren())
            if (Li(_t45)) {
              Jt(is(Ct, _t45.getKey()), _t45);
            }
      } else {
        var _t46 = i.getTextContent();
        if (Bi(i)) {
          var _t47 = i.decorate(Ct, xt);
          null !== _t47 && Zt(e, _t47);
        }
        Tt += _t46;
      }
      if (!$t && Wi(i)) {
        var _t48 = i.getLatest();
        if (_t48.__cachedText !== Tt) {
          var _e36 = _t48.getWritable();
          ((_e36.__cachedText = Tt), (i = _e36));
        }
      }
      return (Lt.$decorateDOM(i, r, s, Ct), yt(i), s);
    }
    function Zt(t, e) {
      var n = Ct._pendingDecorators;
      var r = Ct._decorators;
      if (null === n) {
        if (r[t] === e) return;
        n = Io(Ct);
      }
      n[t] = e;
    }
    function te(t) {
      var e = t.nextSibling;
      return (
        null !== e && e === Ct._blockCursorElement && (e = e.nextSibling),
        e
      );
    }
    function ee(t, e) {
      var n = new Set();
      for (var _r17 = e; _r17 < t.length; _r17++) n.add(t[_r17]);
      return n;
    }
    function ne(t, e, n, r, i, o) {
      ((Tt = ""),
        (Nt = null),
        (vt = null),
        (kt = null),
        (Kt = 2 === r),
        (Ct = n),
        (xt = n._config),
        (Lt = n._config.dom || eo),
        (St = n._nodes),
        (bt = Ct._listeners.mutation),
        (At = i),
        (wt = o),
        (Dt = t._nodeMap),
        (It = e._nodeMap),
        ($t = e._readOnly),
        (Pt = $(n._keyToDOMMap)),
        (Ft = (function () {
          var t = new Map(),
            e = function e(_e38) {
              for (var _n29 of _e38) {
                var _e37 = It.get(_n29);
                if (void 0 === _e37) continue;
                var _r18 = _e37.__parent;
                if (null === _r18) continue;
                var _i17 = t.get(_r18);
                (void 0 === _i17 && ((_i17 = new Set()), t.set(_r18, _i17)),
                  _i17.add(_n29));
              }
            };
          return (e(At.keys()), e(wt), t);
        })()));
      var s = new Map();
      return (
        (Rt = s),
        Qt("root", null),
        (Ct = void 0),
        (St = void 0),
        (At = void 0),
        (wt = void 0),
        (Dt = void 0),
        (It = void 0),
        (xt = void 0),
        (Pt = void 0),
        (Ft = void 0),
        (Rt = void 0),
        (Lt = eo),
        s
      );
    }
    function re(e) {
      var n = Pt.get(e);
      return (void 0 === n && t(75, e), n);
    }
    function ie(t) {
      return { type: t };
    }
    var oe = ie("SELECTION_CHANGE_COMMAND"),
      se = ie("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"),
      le = ie("CLICK_COMMAND"),
      ce = ie("BEFORE_INPUT_COMMAND"),
      ae = ie("INPUT_COMMAND"),
      ue = ie("COMPOSITION_START_COMMAND"),
      fe = ie("COMPOSITION_END_COMMAND"),
      de = ie("DELETE_CHARACTER_COMMAND"),
      he = ie("INSERT_LINE_BREAK_COMMAND"),
      ge = ie("INSERT_PARAGRAPH_COMMAND"),
      _e = ie("CONTROLLED_TEXT_INSERTION_COMMAND"),
      pe = ie("PASTE_COMMAND"),
      ye = ie("REMOVE_TEXT_COMMAND"),
      me = ie("DELETE_WORD_COMMAND"),
      xe = ie("DELETE_LINE_COMMAND"),
      Ce = ie("FORMAT_TEXT_COMMAND"),
      Se = ie("UNDO_COMMAND"),
      Te = ie("REDO_COMMAND"),
      Ne = ie("KEYDOWN_COMMAND"),
      ve = ie("KEY_ARROW_RIGHT_COMMAND"),
      ke = ie("MOVE_TO_END"),
      Oe = ie("KEY_ARROW_LEFT_COMMAND"),
      Me = ie("MOVE_TO_START"),
      Ee = ie("KEY_ARROW_UP_COMMAND"),
      be = ie("KEY_ARROW_DOWN_COMMAND"),
      Ae = ie("KEY_ENTER_COMMAND"),
      we = ie("KEY_SPACE_COMMAND"),
      De = ie("KEY_BACKSPACE_COMMAND"),
      Ie = ie("KEY_ESCAPE_COMMAND"),
      Pe = ie("KEY_DELETE_COMMAND"),
      Fe = ie("KEY_TAB_COMMAND"),
      Re = ie("INSERT_TAB_COMMAND"),
      Le = ie("INDENT_CONTENT_COMMAND"),
      Ke = ie("OUTDENT_CONTENT_COMMAND"),
      $e = ie("DROP_COMMAND"),
      Be = ie("FORMAT_ELEMENT_COMMAND"),
      ze = ie("DRAGSTART_COMMAND"),
      We = ie("DRAGOVER_COMMAND"),
      Ue = ie("DRAGEND_COMMAND"),
      Ye = ie("COPY_COMMAND"),
      je = ie("CUT_COMMAND"),
      Je = ie("SELECT_ALL_COMMAND"),
      Ge = ie("CLEAR_EDITOR_COMMAND"),
      He = ie("CLEAR_HISTORY_COMMAND"),
      Ve = ie("CAN_REDO_COMMAND"),
      qe = ie("CAN_UNDO_COMMAND"),
      Xe = ie("FOCUS_COMMAND"),
      Qe = ie("BLUR_COMMAND"),
      Ze = ie("KEY_MODIFIER_COMMAND"),
      tn = Object.freeze({}),
      en = [
        [
          "keydown",
          function (t, e) {
            ((nn = t.timeStamp), (rn = t.key), "Backspace" !== t.key && On());
            if (e.isComposing()) return;
            rs(e, Ne, t);
          },
        ],
        [
          "pointerdown",
          function (t, e) {
            var n = t.target,
              r = t.pointerType;
            Ns(n) &&
              "touch" !== r &&
              "pen" !== r &&
              0 === t.button &&
              Ii(e, function () {
                fo(n) || (dn = !0);
              });
          },
        ],
        [
          "compositionstart",
          function (t, e) {
            rs(e, ue, t);
          },
        ],
        [
          "compositionend",
          function (t, e) {
            o
              ? (gn = !0)
              : l || (!a && !d)
                ? rs(e, fe, t)
                : ((_n = !0), (pn = t.data));
          },
        ],
        [
          "input",
          function (t, e) {
            (t.stopPropagation(),
              On(),
              Ii(
                e,
                function () {
                  e.dispatchCommand(ae, t);
                },
                { event: t },
              ),
              (sn = null));
          },
        ],
        [
          "click",
          function (t, e) {
            Ii(e, function () {
              var n = Xr(),
                r = Cs(fs(e)),
                i = Qr();
              if (r)
                if (Pr(n)) {
                  var _t49 = n.anchor,
                    _e39 = _t49.getNode();
                  "element" === _t49.type &&
                    0 === _t49.offset &&
                    n.isCollapsed() &&
                    !Wi(_e39) &&
                    1 === Fo().getChildrenSize() &&
                    _e39.getTopLevelElementOrThrow().isEmpty() &&
                    null !== i &&
                    n.is(i) &&
                    (r.removeAllRanges(), (n.dirty = !0));
                } else if (
                  "touch" === t.pointerType ||
                  "pen" === t.pointerType
                ) {
                  var _n30 = r.anchorNode;
                  if (Ts(_n30) || Co(_n30)) {
                    Lo(qr(i, r, e, t));
                  }
                }
              rs(e, le, t);
            });
          },
        ],
        ["cut", tn],
        ["copy", tn],
        ["dragstart", tn],
        ["dragover", tn],
        ["dragend", tn],
        ["paste", tn],
        ["focus", tn],
        ["blur", tn],
        ["drop", tn],
      ];
    s &&
      en.push([
        "beforeinput",
        function (t, e) {
          return (function (t, e) {
            var n = t.inputType;
            if ("deleteCompositionText" === n || (o && ns(e))) return;
            if ("insertCompositionText" === n) return;
            rs(e, ce, t);
          })(t, e);
        },
      ]);
    var nn = 0,
      rn = null,
      on = 0,
      sn = null,
      ln = !1,
      cn = null;
    var an = new WeakMap(),
      un = new WeakMap();
    var fn = !1,
      dn = !1,
      hn = !1,
      gn = !1,
      _n = !1,
      pn = "",
      yn = null,
      mn = [0, "", 0, "root", 0];
    function xn(t, e, n, r, i) {
      var o = t.anchor,
        l = t.focus,
        c = o.getNode(),
        a = xi(),
        u = Cs(fs(a)),
        f = null !== u ? u.anchorNode : null,
        d = o.key,
        h = a.getElementByKey(d),
        g = n.length;
      return (
        d !== l.key ||
        !vr(c) ||
        (((!i && (!s || on < r + 50)) || (c.isDirty() && g < 2) || $o(n)) &&
          o.offset !== l.offset &&
          !c.isComposing()) ||
        xo(c) ||
        (c.isDirty() && g > 1) ||
        ((i || !s) && null !== h && !c.isComposing() && f !== To(h)) ||
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
            i = mo(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!r.canInsertTextBefore() && !e.isComposing()) ||
                i ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (vr(e) || (Li(e) && e.isInline())) &&
                    !e.canInsertTextAfter()
                  );
                })(e)
            : n === e.getTextContentSize() &&
                (!e.canInsertTextAfter() ||
                  (!r.canInsertTextAfter() && !e.isComposing()) ||
                  i);
        })(t, c)
      );
    }
    function Cn(t, e) {
      return (
        Co(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function Sn(e, n, r) {
      var i = e.anchorNode,
        o = e.anchorOffset,
        s = e.focusNode,
        l = e.focusOffset;
      (fn && ((fn = !1), Cn(i, o) && Cn(s, l) && !yn)) ||
        Ii(n, function () {
          if (!r) return void Lo(null);
          if (!go(n, i, s)) return;
          var c = Xr();
          if (yn && Pr(c) && c.isCollapsed()) {
            var _t50 = c.anchor,
              _e40 = yn.anchor;
            ((_t50.key === _e40.key && _t50.offset === _e40.offset + 1) ||
              (1 === _t50.offset &&
                _e40.getNode().is(_t50.getNode().getPreviousSibling()))) &&
              ((c = yn.clone()), Lo(c));
          }
          if (((yn = null), Pr(c))) {
            var _r19 = c.anchor,
              _i18 = _r19.getNode();
            if (c.isCollapsed()) {
              "Range" === e.type &&
                e.anchorNode === e.focusNode &&
                (c.dirty = !0);
              var _o7 = fs(n).event,
                _s5 = _o7 ? _o7.timeStamp : performance.now(),
                _mn = mn,
                _l3 = _mn[0],
                _a2 = _mn[1],
                _u2 = _mn[2],
                _f2 = _mn[3],
                _d3 = _mn[4],
                _h2 = Fo(),
                _g2 = !1 === n.isComposing() && "" === _h2.getTextContent();
              if (_s5 < _d3 + 200 && _r19.offset === _u2 && _r19.key === _f2)
                Tn(c, _l3, _a2);
              else if ("text" === _r19.type) (vr(_i18) || t(141), Nn(c, _i18));
              else if ("element" === _r19.type && !_g2) {
                Li(_i18) || t(259);
                var _e41 = _r19.getNode();
                _e41.isEmpty()
                  ? (function (t, e) {
                      var n = e.getTextFormat(),
                        r = e.getTextStyle();
                      Tn(t, n, r);
                    })(c, _e41)
                  : Tn(c, c.format, "");
              }
            } else {
              var _t51 = _r19.key,
                _e42 = c.focus.key,
                _n31 = c.getNodes(),
                _i19 = _n31.length,
                _s6 = c.isBackward(),
                _a3 = _s6 ? l : o,
                _u3 = _s6 ? o : l,
                _f3 = _s6 ? _e42 : _t51,
                _d4 = _s6 ? _t51 : _e42;
              var _h3 = 2047,
                _g3 = !1;
              for (var _t52 = 0; _t52 < _i19; _t52++) {
                var _e43 = _n31[_t52],
                  _r20 = _e43.getTextContentSize();
                if (
                  vr(_e43) &&
                  0 !== _r20 &&
                  !(
                    (0 === _t52 && _e43.__key === _f3 && _a3 === _r20) ||
                    (_t52 === _i19 - 1 && _e43.__key === _d4 && 0 === _u3)
                  ) &&
                  ((_g3 = !0), (_h3 &= _e43.getFormat()), 0 === _h3)
                )
                  break;
              }
              c.format = _g3 ? _h3 : 0;
            }
          }
          rs(n, oe, void 0);
        });
    }
    function Tn(t, e, n) {
      (t.format === e && t.style === n) ||
        ((t.format = e), (t.style = n), (t.dirty = !0));
    }
    function Nn(t, e) {
      Tn(t, e.getFormat(), e.getStyle());
    }
    function vn(t) {
      if (!t.getTargetRanges) return null;
      var e = t.getTargetRanges();
      return 0 === e.length ? null : e[0];
    }
    function kn(t) {
      if (null == t || t.length <= 1 || null == rn) return;
      var e =
        1 === rn.length
          ? rn
          : "Enter" === rn
            ? "\n"
            : "Tab" === rn
              ? "\t"
              : null;
      if (!e) return;
      var n = Xr();
      if (!Pr(n) || !n.isCollapsed()) return;
      var r = n.anchor.getNode();
      if (!vr(r)) return;
      var i = n.anchor.offset;
      if (r.getTextContentSize() === i) {
        var _t53 = r.getNextSibling();
        if ("\n" === e) {
          if (sr(_t53)) _t53.selectEnd();
          else if (!_t53) {
            var _t54 = Ws(r, Jr),
              _e44 = _t54 && _t54.getNextSibling();
            Li(_e44) && _e44.selectStart();
          }
        } else
          "\t" === e
            ? Er(_t53) && _t53.selectEnd()
            : vr(_t53) && _t53.getTextContent()[0] === e && _t53.select(1, 1);
      } else r.getTextContent()[i] === e && r.select(i + 1, i + 1);
    }
    function On() {
      ((ln = !1), null !== cn && (clearTimeout(cn), (cn = null)));
    }
    function Mn() {
      (On(), (ln = !0), (cn = setTimeout(On, 0)));
    }
    function En(e) {
      var _ref15;
      var n = e.inputType,
        r = vn(e),
        i = xi(),
        o = Xr();
      if ("insertText" === n && e.data && ln) {
        if ((On(), e.preventDefault(), Pr(o) && !o.isCollapsed())) {
          var _t55 = o.isBackward() ? o.anchor : o.focus;
          (o.anchor.set(_t55.key, _t55.offset, _t55.type),
            o.focus.set(_t55.key, _t55.offset, _t55.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === o) {
          var _t56 = Qr();
          if (!Pr(_t56)) return !0;
          Lo(_t56.clone());
        }
        if (Pr(o)) {
          var _n32 = o.anchor.key === o.focus.key;
          if (
            ((s = e.timeStamp),
            "MediaLast" === rn && s < nn + 30 && i.isComposing() && _n32)
          ) {
            if (
              (Mo(null),
              (nn = 0),
              setTimeout(function () {
                Ii(i, function () {
                  Mo(null);
                });
              }, 30),
              Pr(o))
            ) {
              var _e45 = o.anchor.getNode();
              (_e45.markDirty(), vr(_e45) || t(142), Nn(o, _e45));
            }
          } else {
            if (
              (Mo(null),
              l &&
                null !== r &&
                !r.collapsed &&
                (o.applyDOMRange(r), !o.isCollapsed()))
            )
              return (e.preventDefault(), o.removeText(), !0);
            e.preventDefault();
            var _t57 = o.anchor.getNode(),
              _s7 = _t57.getTextContent(),
              _c2 = _t57.canInsertTextAfter(),
              _a4 = 0 === o.anchor.offset && o.focus.offset === _s7.length;
            var _u4 = f && _n32 && !_a4 && _c2;
            if (
              (_u4 && o.isCollapsed() && (_u4 = !Bi(es(o.anchor, !0))), !_u4)
            ) {
              rs(i, de, !0);
              var _t58 = Xr();
              f &&
                Pr(_t58) &&
                _t58.isCollapsed() &&
                ((yn = _t58),
                setTimeout(function () {
                  return (yn = null);
                }));
            }
          }
          return !0;
        }
      }
      var s;
      if (!Pr(o)) return !0;
      var c = e.data;
      (null !== sn && Uo(!1, i, sn),
        (o.dirty && null === sn) ||
          !o.isCollapsed() ||
          Wi(o.anchor.getNode()) ||
          null === r ||
          o.applyDOMRange(r),
        (sn = null));
      var a = o.anchor,
        u = o.focus,
        d = a.getNode(),
        h = u.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === c) (e.preventDefault(), rs(i, he, !1));
        else if (c === v) (e.preventDefault(), rs(i, ge, void 0));
        else if (null == c && e.dataTransfer) {
          var _t59 = e.dataTransfer.getData("text/plain");
          (e.preventDefault(), o.insertRawText(_t59));
        } else
          null != c && xn(o, r, c, e.timeStamp, !0)
            ? (e.preventDefault(), rs(i, _e, c), kn(c))
            : (sn = c);
        return ((on = e.timeStamp), !0);
      }
      switch ((e.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          rs(i, _e, e);
          kn(
            (_ref15 = e.dataTransfer
              ? e.dataTransfer.getData("text/plain")
              : null) != null
              ? _ref15
              : e.data,
          );
          break;
        case "insertFromComposition":
          (Mo(null), rs(i, _e, e));
          break;
        case "insertLineBreak":
          (Mo(null), rs(i, he, !1));
          break;
        case "insertParagraph":
          (Mo(null), hn && !l ? ((hn = !1), rs(i, he, !1)) : rs(i, ge, void 0));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          rs(i, pe, e);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || Li(t) || Li(e) || !mo(t) || !mo(e);
          })(d, h) && rs(i, ye, e);
          break;
        case "deleteByDrag":
          (ls(qn), rs(i, ye, e));
          break;
        case "deleteByCut":
          rs(i, ye, e);
          break;
        case "deleteContent":
          rs(i, de, !1);
          break;
        case "deleteWordBackward":
          rs(i, me, !0);
          break;
        case "deleteWordForward":
          rs(i, me, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          rs(i, xe, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          rs(i, xe, !1);
          break;
        case "formatStrikeThrough":
          rs(i, Ce, "strikethrough");
          break;
        case "formatBold":
          rs(i, Ce, "bold");
          break;
        case "formatItalic":
          rs(i, Ce, "italic");
          break;
        case "formatUnderline":
          rs(i, Ce, "underline");
          break;
        case "historyUndo":
          rs(i, Se, void 0);
          break;
        case "historyRedo":
          rs(i, Te, void 0);
      }
      return !0;
    }
    function bn(t) {
      if (Ts(t.target) && fo(t.target)) return !0;
      var e = xi(),
        n = Xr(),
        r = t.data,
        i = vn(t);
      if (null != r && Pr(n) && xn(n, i, r, t.timeStamp, !1)) {
        gn && (Dn(e, r), (gn = !1));
        var _i20 = n.anchor.getNode(),
          _l4 = Cs(fs(e));
        if (null === _l4) return !0;
        var _c3 = n.isBackward(),
          _a5 = _c3 ? n.anchor.offset : n.focus.offset,
          _u5 = _c3 ? n.focus.offset : n.anchor.offset;
        (s &&
          !n.isCollapsed() &&
          vr(_i20) &&
          null !== _l4.anchorNode &&
          _i20.getTextContent().slice(0, _a5) +
            r +
            _i20.getTextContent().slice(_a5 + _u5) ===
            Wo(_l4.anchorNode)) ||
          rs(e, _e, r);
        var _d5 = r.length;
        (o &&
          _d5 > 1 &&
          "insertCompositionText" === t.inputType &&
          !e.isComposing() &&
          ((n.anchor.offset -= _d5),
          (n._cachedNodes = null),
          (n._cachedIsBackward = null)),
          f && e.isComposing() && ((nn = 0), Mo(null)));
      } else {
        (Uo(!1, e, null !== r ? r : void 0),
          gn && (Dn(e, r || void 0), (gn = !1)));
      }
      return (
        (function () {
          pi();
          var t = xi();
          X(t);
        })(),
        !0
      );
    }
    function An(t) {
      var e = xi(),
        n = Xr();
      if (Pr(n) && !e.isComposing()) {
        var _r21 = n.anchor,
          _i21 = n.anchor.getNode();
        (Mo(_r21.key),
          ls(Xn),
          (t.timeStamp < nn + 30 ||
            "element" === _r21.type ||
            !n.isCollapsed() ||
            _i21.getFormat() !== n.format ||
            (vr(_i21) && _i21.getStyle() !== n.style)) &&
            rs(e, _e, k));
      }
      return !0;
    }
    function wn(t) {
      return (Dn(xi(), t.data), ls(Qn), !0);
    }
    function Dn(t, e) {
      var n = t._compositionKey;
      if ((Mo(null), null !== n && null != e)) {
        if ("" === e) {
          var _e46 = bo(n),
            _r22 = To(t.getElementByKey(n));
          if (null !== _r22 && null !== _r22.nodeValue && vr(_e46)) {
            var _n33 = Cs(fs(t));
            var _i22 = null,
              _o8 = null;
            (null !== _n33 &&
              _n33.anchorNode === _r22 &&
              ((_i22 = _n33.anchorOffset), (_o8 = _n33.focusOffset)),
              Yo(_e46, _r22.nodeValue, _i22, _o8, !0));
          }
          return;
        }
        if ("\n" === e[e.length - 1]) {
          var _e47 = Xr();
          if (Pr(_e47) || Rr(_e47)) {
            if (Pr(_e47)) {
              var _t60 = _e47.focus;
              _e47.anchor.set(_t60.key, _t60.offset, _t60.type);
            }
            return void rs(t, Ae, null);
          }
        }
      }
      Uo(!0, t, e);
    }
    function In(t) {
      var e = xi();
      if (null == t.key) return !0;
      if (_n) {
        if (Xo(t))
          return (
            Ii(e, function () {
              Dn(e, pn);
            }),
            (_n = !1),
            (pn = ""),
            !0
          );
        ((_n = !1), (pn = ""));
      }
      if (
        (function (t) {
          return Ho(t, "ArrowRight", { shiftKey: "any" });
        })(t)
      )
        rs(e, ve, t);
      else if (
        (function (t) {
          return Ho(
            t,
            "ArrowRight",
            babelHelpers["extends"]({}, Vo, { shiftKey: "any" }),
          );
        })(t)
      )
        rs(e, ke, t);
      else if (
        (function (t) {
          return Ho(t, "ArrowLeft", { shiftKey: "any" });
        })(t)
      )
        rs(e, Oe, t);
      else if (
        (function (t) {
          return Ho(
            t,
            "ArrowLeft",
            babelHelpers["extends"]({}, Vo, { shiftKey: "any" }),
          );
        })(t)
      )
        rs(e, Me, t);
      else if (
        (function (t) {
          return Ho(t, "ArrowUp", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        rs(e, Ee, t);
      else if (
        (function (t) {
          return Ho(t, "ArrowDown", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        rs(e, be, t);
      else if (
        (function (t) {
          return Ho(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
            shiftKey: !0,
          });
        })(t)
      )
        ((hn = !0), rs(e, Ae, t));
      else if (
        (function (t) {
          return " " === t.key;
        })(t)
      )
        rs(e, we, t);
      else if (
        (function (t) {
          return i && Ho(t, "o", { ctrlKey: !0 });
        })(t)
      )
        (t.preventDefault(), (hn = !0), rs(e, he, !0));
      else if (
        (function (t) {
          return Ho(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
          });
        })(t)
      )
        ((hn = !1), rs(e, Ae, t));
      else if (
        (function (t) {
          return (
            Ho(t, "Backspace", { shiftKey: "any" }) ||
            (i && Ho(t, "h", { ctrlKey: !0 }))
          );
        })(t)
      )
        Xo(t) ? rs(e, De, t) && Mn() : (t.preventDefault(), rs(e, de, !0));
      else if (
        (function (t) {
          return "Escape" === t.key;
        })(t)
      )
        rs(e, Ie, t);
      else if (
        (function (t) {
          return Ho(t, "Delete", {}) || (i && Ho(t, "d", { ctrlKey: !0 }));
        })(t)
      )
        !(function (t) {
          return "Delete" === t.key;
        })(t)
          ? (t.preventDefault(), rs(e, de, !1))
          : rs(e, Pe, t);
      else if (
        (function (t) {
          return Ho(t, "Backspace", qo);
        })(t)
      )
        (t.preventDefault(), rs(e, me, !0));
      else if (
        (function (t) {
          return Ho(t, "Delete", qo);
        })(t)
      )
        (t.preventDefault(), rs(e, me, !1));
      else if (
        (function (t) {
          return i && Ho(t, "Backspace", { metaKey: !0 });
        })(t)
      )
        (t.preventDefault(), rs(e, xe, !0));
      else if (
        (function (t) {
          return (
            i &&
            (Ho(t, "Delete", { metaKey: !0 }) || Ho(t, "k", { ctrlKey: !0 }))
          );
        })(t)
      )
        (t.preventDefault(), rs(e, xe, !1));
      else if (
        (function (t) {
          return Ho(t, "b", Vo);
        })(t)
      )
        (t.preventDefault(), rs(e, Ce, "bold"));
      else if (
        (function (t) {
          return Ho(t, "u", Vo);
        })(t)
      )
        (t.preventDefault(), rs(e, Ce, "underline"));
      else if (
        (function (t) {
          return Ho(t, "i", Vo);
        })(t)
      )
        (t.preventDefault(), rs(e, Ce, "italic"));
      else if (
        (function (t) {
          return Ho(t, "Tab", { shiftKey: "any" });
        })(t)
      )
        rs(e, Fe, t);
      else if (
        (function (t) {
          return Ho(t, "z", Vo);
        })(t)
      )
        (t.preventDefault(), rs(e, Se, void 0));
      else if (
        (function (t) {
          if (i) return Ho(t, "z", { metaKey: !0, shiftKey: !0 });
          return (
            Ho(t, "y", { ctrlKey: !0 }) ||
            Ho(t, "z", { ctrlKey: !0, shiftKey: !0 })
          );
        })(t)
      )
        (t.preventDefault(), rs(e, Te, void 0));
      else {
        var _n34 = e._editorState._selection;
        !(function (t) {
          return Ho(t, "a", Vo);
        })(t)
          ? null === _n34 ||
            Pr(_n34) ||
            (!(function (t) {
              return Ho(t, "c", Vo);
            })(t)
              ? (function (t) {
                  return Ho(t, "x", Vo);
                })(t) && (t.preventDefault(), rs(e, je, t))
              : (t.preventDefault(), rs(e, Ye, t)))
          : (t.preventDefault(), rs(e, Je, t) && Mn());
      }
      return (
        (function (t) {
          return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey;
        })(t) && e.dispatchCommand(Ze, t),
        !0
      );
    }
    function Pn(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    var Fn = new Map();
    function Rn(t) {
      var e = Ss(t.target);
      if (null === e) return;
      var n = po(e.anchorNode);
      if (null === n) return;
      dn &&
        ((dn = !1),
        Ii(n, function () {
          var r = Qr(),
            i = e.anchorNode;
          if (Ts(i) || Co(i)) {
            Lo(qr(r, e, n, t));
          }
        }));
      var r = Bo(n),
        i = r[r.length - 1],
        o = i._key,
        s = Fn.get(o),
        l = s || i;
      (l !== n && Sn(e, l, !1),
        Sn(e, n, !0),
        n !== i ? Fn.set(o, n) : s && Fn["delete"](o));
    }
    function Ln(t) {
      t._lexicalHandled = !0;
    }
    function Kn(t) {
      return !0 === t._lexicalHandled;
    }
    var $n = function $n() {};
    function Bn(e) {
      var n = an.get(e);
      if (void 0 === n) return void $n();
      var r = un.get(n);
      if (void 0 === r) return void $n();
      var i = r - 1;
      (i >= 0 || t(164),
        an["delete"](e),
        un.set(n, i),
        0 === i && n.removeEventListener("selectionchange", Rn));
      var o = yo(e);
      _o(o)
        ? (!(function (t) {
            if (null !== t._parentEditor) {
              var _e48 = Bo(t),
                _n35 = _e48[_e48.length - 1]._key;
              Fn.get(_n35) === t && Fn["delete"](_n35);
            } else Fn["delete"](t._key);
          })(o),
          (e.__lexicalEditor = null))
        : o && t(198);
      var s = Pn(e);
      for (var _t61 = 0; _t61 < s.length; _t61++) s[_t61]();
      e.__lexicalEventHandles = [];
    }
    function zn(t, e, n) {
      pi();
      var r = t.__key,
        i = t.getParent();
      if (null === i) return;
      var o = (function (t) {
        var e = Xr();
        if (!Pr(e) || !Li(t)) return e;
        var n = e.anchor,
          r = e.focus,
          i = n.getNode(),
          o = r.getNode();
        as(i, t) && n.set(t.__key, 0, "element");
        as(o, t) && r.set(t.__key, 0, "element");
        return e;
      })(t);
      var s = !1;
      if (Pr(o) && e) {
        var _e49 = o.anchor,
          _n36 = o.focus;
        (_e49.key === r &&
          (ei(_e49, t, i, t.getPreviousSibling(), t.getNextSibling()),
          (s = !0)),
          _n36.key === r &&
            (ei(_n36, t, i, t.getPreviousSibling(), t.getNextSibling()),
            (s = !0)));
      } else Rr(o) && e && t.isSelected() && t.selectPrevious();
      if (Pr(o) && e && !s) {
        var _e50 = t.getIndexWithinParent();
        (ko(t), Zr(o, i, _e50, -1));
      } else ko(t);
      (n || hs(i) || i.canBeEmpty() || !i.isEmpty() || zn(i, e),
        e && o && Wi(i) && i.isEmpty() && i.selectEnd());
    }
    var Wn = Symbol["for"]("ephemeral");
    function Un(t) {
      return t[Wn] || !1;
    }
    var Yn = { configurable: !0, enumerable: !1, value: void 0, writable: !0 };
    var _jn5 = (function () {
      function jn(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", Yn),
          Object.defineProperty(this, _t, Yn),
          vo(this, t));
      }
      jn.getType = function getType() {
        var _zs2 = zs(this),
          e = _zs2.ownNodeType;
        return (void 0 === e && t(64, this.name), e);
      };
      jn.clone = function clone(e) {
        t(65, this.name);
      };
      var _proto4 = jn.prototype;
      _proto4.$config = function $config() {
        return {};
      };
      _proto4.config = function config(t, e) {
        var _ref16;
        var n = e["extends"] || Object.getPrototypeOf(this.constructor);
        return (
          Object.assign(e, { extends: n, type: t }),
          (_ref16 = {}),
          (_ref16[t] = e),
          _ref16
        );
      };
      _proto4.afterCloneFrom = function afterCloneFrom(t) {
        this.__key === t.__key
          ? ((this.__parent = t.__parent),
            (this.__next = t.__next),
            (this.__prev = t.__prev),
            (this.__state = t.__state))
          : t.__state && (this.__state = t.__state.getWritable(this));
      };
      _proto4.resetOnCopyNodeFrom = function resetOnCopyNodeFrom(t) {
        this.__state &&
          (this.__state = this.__state.getWritable(this).resetOnCopyNode());
      };
      _proto4.getType = function getType() {
        return this.__type;
      };
      _proto4.isInline = function isInline() {
        t(137, this.constructor.name);
      };
      _proto4.isAttached = function isAttached() {
        var t = this.__key;
        for (; null !== t; ) {
          if ("root" === t) return !0;
          var _e51 = bo(t);
          if (null === _e51) break;
          t = _e51.__parent;
        }
        return !1;
      };
      _proto4.isSelected = function isSelected(t) {
        var _this12 = this;
        var e = t || Xr();
        if (null == e) return !1;
        var n = e.getNodes().some(function (t) {
          return t.__key === _this12.__key;
        });
        if (vr(this)) return n;
        if (
          Pr(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t62 = this.getParent();
          if (Bi(this) && this.isInline() && _t62) {
            var _n37 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t62.is(_n37.getNode()) &&
              _n37.offset === _t62.getChildrenSize() &&
              this.is(_t62.getLastChild())
            )
              return !1;
          }
        }
        return n;
      };
      _proto4.getKey = function getKey() {
        return this.__key;
      };
      _proto4.getIndexWithinParent = function getIndexWithinParent() {
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
      _proto4.getParent = function getParent() {
        var t = this.getLatest().__parent;
        return null === t ? null : bo(t);
      };
      _proto4.getParentOrThrow = function getParentOrThrow() {
        var e = this.getParent();
        return (null === e && t(66, this.__key), e);
      };
      _proto4.getTopLevelElement = function getTopLevelElement() {
        var e = this;
        for (; null !== e; ) {
          var _n38 = e.getParent();
          if (hs(_n38)) return (Li(e) || (e === this && Bi(e)) || t(194), e);
          e = _n38;
        }
        return null;
      };
      _proto4.getTopLevelElementOrThrow = function getTopLevelElementOrThrow() {
        var e = this.getTopLevelElement();
        return (null === e && t(67, this.__key), e);
      };
      _proto4.getParents = function getParents() {
        var t = [];
        var e = this.getParent();
        for (; null !== e; ) (t.push(e), (e = e.getParent()));
        return t;
      };
      _proto4.getParentKeys = function getParentKeys() {
        var t = [];
        var e = this.getParent();
        for (; null !== e; ) (t.push(e.__key), (e = e.getParent()));
        return t;
      };
      _proto4.getPreviousSibling = function getPreviousSibling() {
        var t = this.getLatest().__prev;
        return null === t ? null : bo(t);
      };
      _proto4.getPreviousSiblings = function getPreviousSiblings() {
        var t = [],
          e = this.getParent();
        if (null === e) return t;
        var n = e.getFirstChild();
        for (; null !== n && !n.is(this); )
          (t.push(n), (n = n.getNextSibling()));
        return t;
      };
      _proto4.getNextSibling = function getNextSibling() {
        var t = this.getLatest().__next;
        return null === t ? null : bo(t);
      };
      _proto4.getNextSiblings = function getNextSiblings() {
        var t = [];
        var e = this.getNextSibling();
        for (; null !== e; ) (t.push(e), (e = e.getNextSibling()));
        return t;
      };
      _proto4.getCommonAncestor = function getCommonAncestor(t) {
        var e = Li(this) ? this : this.getParent(),
          n = Li(t) ? t : t.getParent(),
          r = e && n ? Sl(e, n) : null;
        return r ? r.commonAncestor : null;
      };
      _proto4.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto4.isBefore = function isBefore(e) {
        var n = Sl(this, e);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === ml(n)
              : ("same" !== n.type && "ancestor" !== n.type && t(279), !1)))
        );
      };
      _proto4.isParentOf = function isParentOf(t) {
        var e = Sl(this, t);
        return null !== e && "ancestor" === e.type;
      };
      _proto4.getNodesBetween = function getNodesBetween(e) {
        var n = this.isBefore(e),
          r = [],
          i = new Set();
        var o = this;
        for (; null !== o; ) {
          var _s8 = o.__key;
          if ((i.has(_s8) || (i.add(_s8), r.push(o)), o === e)) break;
          var _l5 = Li(o) ? (n ? o.getFirstChild() : o.getLastChild()) : null;
          if (null !== _l5) {
            o = _l5;
            continue;
          }
          var _c4 = n ? o.getNextSibling() : o.getPreviousSibling();
          if (null !== _c4) {
            o = _c4;
            continue;
          }
          var _a6 = o.getParentOrThrow();
          if ((i.has(_a6.__key) || r.push(_a6), _a6 === e)) break;
          var _u6 = null,
            _f4 = _a6;
          do {
            if (
              (null === _f4 && t(68),
              (_u6 = n ? _f4.getNextSibling() : _f4.getPreviousSibling()),
              (_f4 = _f4.getParent()),
              null === _f4)
            )
              break;
            null !== _u6 || i.has(_f4.__key) || r.push(_f4);
          } while (null === _u6);
          o = _u6;
        }
        return (n || r.reverse(), r);
      };
      _proto4.isDirty = function isDirty() {
        var t = xi()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto4.getLatest = function getLatest() {
        if (Un(this)) return this;
        var e = bo(this.__key);
        return (null === e && t(113), e);
      };
      _proto4.getWritable = function getWritable() {
        if (Un(this)) return this;
        pi();
        var t = mi(),
          e = xi(),
          n = t._nodeMap,
          r = this.__key,
          i = this.getLatest(),
          o = e._cloneNotNeeded,
          s = Xr();
        if ((null !== s && s.setCachedNodes(null), o.has(r))) return (Oo(i), i);
        var l = Fs(i);
        return (o.add(r), Oo(l), n.set(r, l), l);
      };
      _proto4.getTextContent = function getTextContent() {
        return "";
      };
      _proto4.getTextContentSize = function getTextContentSize() {
        return this.getTextContent().length;
      };
      _proto4.createDOM = function createDOM(e, n) {
        t(70);
      };
      _proto4.updateDOM = function updateDOM(e, n, r) {
        t(71);
      };
      _proto4.exportDOM = function exportDOM(t) {
        return { element: this.createDOM(t._config, t) };
      };
      _proto4.exportJSON = function exportJSON() {
        var t = this.__state ? this.__state.toJSON() : void 0;
        return babelHelpers["extends"]({ type: this.__type, version: 1 }, t);
      };
      jn.importJSON = function importJSON(e) {
        t(18, this.name);
      };
      _proto4.updateFromJSON = function updateFromJSON(t) {
        return (function (t, e) {
          var n = t.getWritable(),
            r = e.$;
          var i = r;
          for (var _t63 of it(n).flatKeys)
            _t63 in e &&
              ((void 0 !== i && i !== r) ||
                (i = babelHelpers["extends"]({}, r)),
              (i[_t63] = e[_t63]));
          return ((n.__state || i) && rt(t).updateFromJSON(i), n);
        })(this, t);
      };
      jn.transform = function transform() {
        return null;
      };
      _proto4.remove = function remove(t) {
        zn(this, !0, t);
      };
      _proto4.replace = function replace(e, n) {
        pi();
        var r = Xr();
        (null !== r && (r = r.clone()), ps(this, e));
        var i = this.getLatest(),
          o = this.__key,
          s = e.__key,
          l = e.getWritable(),
          c = this.getParentOrThrow().getWritable(),
          a = c.__size,
          u = l.getParent(),
          f = null !== u ? l.getIndexWithinParent() : -1;
        (ko(l), null !== u && Pr(r) && Zr(r, u, f, -1));
        var d = i.getPreviousSibling(),
          h = i.getNextSibling(),
          g = i.__prev,
          _ = i.__next,
          p = i.__parent;
        if ((zn(i, !1, !0), null === d)) c.__first = s;
        else {
          d.getWritable().__next = s;
        }
        if (((l.__prev = g), null === h)) c.__last = s;
        else {
          h.getWritable().__prev = s;
        }
        ((l.__next = _), (l.__parent = p), (c.__size = a));
        var y = 0;
        if (
          (n &&
            ((Li(this) && Li(l)) || t(139),
            (y = l.getChildrenSize()),
            l.splice(y, 0, this.getChildren())),
          Pr(r))
        ) {
          Lo(r);
          var _t64 = r.anchor,
            _e52 = r.focus;
          (_t64.key === o &&
            (n && "element" === _t64.type
              ? _t64.set(l.__key, y + _t64.offset, "element")
              : Dr(_t64, l)),
            _e52.key === o &&
              (n && "element" === _e52.type
                ? _e52.set(l.__key, y + _e52.offset, "element")
                : Dr(_e52, l)));
        }
        return (Eo() === o && Mo(s), l);
      };
      _proto4.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (pi(), ps(this, t));
        var n = this.getWritable(),
          r = t.getWritable(),
          i = r.getParent(),
          o = Xr();
        var s = !1,
          l = !1;
        if (null !== i) {
          var _n39 = t.getIndexWithinParent();
          if (Pr(o)) {
            var _t65 = i.__key,
              _e53 = o.anchor,
              _r23 = o.focus;
            ((s =
              "element" === _e53.type &&
              _e53.key === _t65 &&
              _e53.offset === _n39 + 1),
              (l =
                "element" === _r23.type &&
                _r23.key === _t65 &&
                _r23.offset === _n39 + 1));
          }
          (ko(r), e && Pr(o) && Zr(o, i, _n39, -1));
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
          e && Pr(o))
        ) {
          var _t66 = this.getIndexWithinParent();
          Zr(o, a, _t66 + 1);
          var _e54 = a.__key;
          (s && o.anchor.set(_e54, _t66 + 2, "element"),
            l && o.focus.set(_e54, _t66 + 2, "element"));
        }
        return t;
      };
      _proto4.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (pi(), ps(this, t));
        var n = this.getWritable(),
          r = t.getWritable(),
          i = r.__key,
          o = Xr(),
          s = r.getParent(),
          l = null !== s ? r.getIndexWithinParent() : -1;
        (ko(r), null !== s && e && Pr(o) && Zr(o, s, l, -1));
        var c = this.getPreviousSibling(),
          a = this.getParentOrThrow().getWritable(),
          u = n.__prev,
          f = this.getIndexWithinParent();
        if (null === c) a.__first = i;
        else {
          c.getWritable().__next = i;
        }
        if (
          (a.__size++,
          (n.__prev = i),
          (r.__prev = u),
          (r.__next = n.__key),
          (r.__parent = n.__parent),
          e && Pr(o))
        ) {
          Zr(o, this.getParentOrThrow(), f);
        }
        return t;
      };
      _proto4.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto4.createParentElementNode = function createParentElementNode() {
        return qi();
      };
      _proto4.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto4.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto4.selectPrevious = function selectPrevious(t, e) {
        pi();
        var n = this.getPreviousSibling(),
          r = this.getParentOrThrow();
        if (null === n) return r.select(0, 0);
        if (Li(n)) return n.select();
        if (!vr(n)) {
          var _t67 = n.getIndexWithinParent() + 1;
          return r.select(_t67, _t67);
        }
        return n.select(t, e);
      };
      _proto4.selectNext = function selectNext(t, e) {
        pi();
        var n = this.getNextSibling(),
          r = this.getParentOrThrow();
        if (null === n) return r.select();
        if (Li(n)) return n.select(0, 0);
        if (!vr(n)) {
          var _t68 = n.getIndexWithinParent();
          return r.select(_t68, _t68);
        }
        return n.select(t, e);
      };
      _proto4.markDirty = function markDirty() {
        this.getWritable();
      };
      _proto4.reconcileObservedMutation = function reconcileObservedMutation(
        t,
        e,
      ) {
        this.markDirty();
      };
      return jn;
    })();
    var Jn = "history-merge",
      Gn = "collaboration",
      Hn = "skip-scroll-into-view",
      Vn = "skip-dom-selection",
      qn = "skip-selection-focus",
      Xn = "composition-start",
      Qn = "composition-end",
      Zn = /\s*!important\s*$/i;
    function tr(t) {
      var e = {};
      if (!t) return e;
      var n = "",
        r = "",
        i = null,
        o = !1,
        s = !1,
        l = !1,
        c = 0;
      for (var _a7 = 0; _a7 < t.length; _a7++) {
        var _u7 = t[_a7];
        if (o) "*" === _u7 && "/" === t[_a7 + 1] && ((o = !1), _a7++);
        else if (s) (l ? (r += _u7) : (n += _u7), (s = !1));
        else if (null === i) {
          if ("/" !== _u7 || "*" !== t[_a7 + 1]) {
            if ('"' !== _u7 && "'" !== _u7) {
              if ("(" !== _u7) {
                if (")" !== _u7) {
                  if (l || ":" !== _u7 || 0 !== c) {
                    if (";" === _u7 && 0 === c) {
                      var _t69 = n.trim(),
                        _i23 = r.trim();
                      ("" !== _t69 && "" !== _i23 && (e[_t69] = _i23),
                        (n = ""),
                        (r = ""),
                        (l = !1));
                      continue;
                    }
                    l ? (r += _u7) : (n += _u7);
                  } else l = !0;
                } else ((c = Math.max(0, c - 1)), l ? (r += _u7) : (n += _u7));
              } else (c++, l ? (r += _u7) : (n += _u7));
            } else ((i = _u7), l ? (r += _u7) : (n += _u7));
          } else ((o = !0), _a7++);
        } else
          (l ? (r += _u7) : (n += _u7),
            "\\" === _u7 ? (s = !0) : _u7 === i && (i = null));
      }
      var a = n.trim(),
        u = r.trim();
      return ("" !== a && "" !== u && (e[a] = u), e);
    }
    function er(t, e, n) {
      var r = Zn.test(n) ? "important" : "",
        i = "" === r ? n : n.replace(Zn, "").trim();
      t.setProperty(e, i, r);
    }
    function nr(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var r = tr(n),
        i = tr(e);
      for (var _e55 in i) (delete r[_e55], er(t, _e55, i[_e55]));
      for (var _e56 in r) t.removeProperty(_e56);
    }
    var _rr = (function (_jn) {
      function rr(t) {
        return _jn.call(this, t) || this;
      }
      babelHelpers.inheritsLoose(rr, _jn);
      rr.getType = function getType() {
        return "linebreak";
      };
      rr.clone = function clone(t) {
        return new rr(t.__key);
      };
      var _proto5 = rr.prototype;
      _proto5.getTextContent = function getTextContent() {
        return "\n";
      };
      _proto5.createDOM = function createDOM() {
        return document.createElement("br");
      };
      _proto5.updateDOM = function updateDOM() {
        return !1;
      };
      _proto5.isInline = function isInline() {
        return !0;
      };
      rr.importDOM = function importDOM() {
        return {
          br: function br(t) {
            return (function (t) {
              var e = t.parentElement;
              if (null !== e && Es(e)) {
                var _n40 = e.firstChild;
                if (_n40 === t || (_n40.nextSibling === t && lr(_n40))) {
                  var _n41 = e.lastChild;
                  if (_n41 === t || (_n41.previousSibling === t && lr(_n41)))
                    return !0;
                }
              }
              return !1;
            })(t) ||
              (function (t) {
                var e = t.parentElement;
                if (null !== e && Es(e)) {
                  var _n42 = e.firstChild;
                  if (_n42 === t || (_n42.nextSibling === t && lr(_n42)))
                    return !1;
                  var _r24 = e.lastChild;
                  if (_r24 === t || (_r24.previousSibling === t && lr(_r24)))
                    return !0;
                }
                return !1;
              })(t)
              ? null
              : { conversion: ir, priority: 0 };
          },
        };
      };
      rr.importJSON = function importJSON(t) {
        return or().updateFromJSON(t);
      };
      return rr;
    })(_jn5);
    function ir(t) {
      return { node: or() };
    }
    function or() {
      return _s(new _rr());
    }
    function sr(t) {
      return t instanceof _rr;
    }
    function lr(t) {
      return Co(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    function cr(t, e) {
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
    function ar(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function ur(t, e, n, r, i) {
      var o = r.classList;
      var s = Qo(i, "base");
      (void 0 !== s && o.add.apply(o, s),
        (s = Qo(i, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== s &&
        (8 & n && 4 & n
          ? ((l = !0), c || o.add.apply(o, s))
          : c && o.remove.apply(o, s));
      for (var _t70 in A) {
        var _r25 = A[_t70];
        if (((s = Qo(i, _t70)), void 0 !== s))
          if (n & _r25) {
            if (l && ("underline" === _t70 || "strikethrough" === _t70)) {
              e & _r25 && o.remove.apply(o, s);
              continue;
            }
            (0 === (e & _r25) ||
              (c && "underline" === _t70) ||
              "strikethrough" === _t70) &&
              o.add.apply(o, s);
          } else e & _r25 && o.remove.apply(o, s);
      }
    }
    function fr(t, e, n) {
      var r = e.firstChild,
        i = n.isComposing(),
        s = t + (i ? N : "");
      if (null == r) e.textContent = s;
      else {
        var _t71 = r.nodeValue;
        if (_t71 !== s)
          if (i || o) {
            var _ref17 = (function (t, e) {
                var n = t.length,
                  r = e.length;
                var i = 0,
                  o = 0;
                for (; i < n && i < r && t[i] === e[i]; ) i++;
                for (
                  ;
                  o + i < n && o + i < r && t[n - o - 1] === e[r - o - 1];
                )
                  o++;
                return [i, n - i - o, e.slice(i, r - o)];
              })(_t71, s),
              _e57 = _ref17[0],
              _n43 = _ref17[1],
              _i24 = _ref17[2];
            (0 !== _n43 && r.deleteData(_e57, _n43), r.insertData(_e57, _i24));
          } else r.nodeValue = s;
      }
    }
    function dr(t, e, n, r, i, o) {
      fr(i, t, e);
      var s = o.theme.text;
      void 0 !== s && ur(0, 0, r, t, s);
    }
    function hr(t, e) {
      var n = document.createElement(e);
      return (n.appendChild(t), n);
    }
    var _gr2 = (function (_jn2) {
      function gr(t, e) {
        var _this;
        if (t === void 0) {
          t = "";
        }
        ((_this = _jn2.call(this, e) || this),
          (_this.__text = t),
          (_this.__format = 0),
          (_this.__style = ""),
          (_this.__mode = 0),
          (_this.__detail = 0));
        return _this;
      }
      babelHelpers.inheritsLoose(gr, _jn2);
      gr.getType = function getType() {
        return "text";
      };
      gr.clone = function clone(t) {
        return new gr(t.__text, t.__key);
      };
      var _proto6 = gr.prototype;
      _proto6.afterCloneFrom = function afterCloneFrom(t) {
        (_jn2.prototype.afterCloneFrom.call(this, t),
          (this.__text = t.__text),
          (this.__format = t.__format),
          (this.__style = t.__style),
          (this.__mode = t.__mode),
          (this.__detail = t.__detail));
      };
      _proto6.getFormat = function getFormat() {
        return this.getLatest().__format;
      };
      _proto6.getDetail = function getDetail() {
        return this.getLatest().__detail;
      };
      _proto6.getMode = function getMode() {
        var t = this.getLatest();
        return F[t.__mode];
      };
      _proto6.getStyle = function getStyle() {
        return this.getLatest().__style;
      };
      _proto6.isToken = function isToken() {
        return 1 === this.getLatest().__mode;
      };
      _proto6.isComposing = function isComposing() {
        return this.__key === Eo();
      };
      _proto6.isSegmented = function isSegmented() {
        return 2 === this.getLatest().__mode;
      };
      _proto6.isDirectionless = function isDirectionless() {
        return !!(1 & this.getLatest().__detail);
      };
      _proto6.isUnmergeable = function isUnmergeable() {
        return !!(2 & this.getLatest().__detail);
      };
      _proto6.hasFormat = function hasFormat(t) {
        var e = A[t];
        return 0 !== (this.getFormat() & e);
      };
      _proto6.isSimpleText = function isSimpleText() {
        return "text" === this.__type && 0 === this.__mode;
      };
      _proto6.getTextContent = function getTextContent() {
        return this.getLatest().__text;
      };
      _proto6.getFormatFlags = function getFormatFlags(t, e) {
        return No(this.getLatest().__format, t, e);
      };
      _proto6.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto6.isInline = function isInline() {
        return !0;
      };
      _proto6.createDOM = function createDOM(t, e) {
        var n = this.__format,
          r = cr(0, n),
          i = ar(0, n),
          o = null === r ? i : r,
          s = document.createElement(o);
        var l = s;
        (this.hasFormat("code") && s.setAttribute("spellcheck", "false"),
          null !== r && ((l = document.createElement(i)), s.appendChild(l)));
        dr(l, this, 0, n, this.__text, t);
        var c = this.__style;
        return ("" !== c && nr(s.style, c), s);
      };
      _proto6.updateDOM = function updateDOM(e, n, r) {
        var i = this.__text,
          o = e.__format,
          s = this.__format,
          l = cr(0, o),
          c = cr(0, s),
          a = ar(0, o),
          u = ar(0, s);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _e58 = n.firstChild;
          null == _e58 && t(48);
          var _o9 = document.createElement(u);
          return (dr(_o9, this, 0, s, i, r), n.replaceChild(_o9, _e58), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && t(49)),
          fr(i, f, this));
        var d = r.theme.text;
        void 0 !== d && o !== s && ur(0, o, s, f, d);
        var h = e.__style,
          g = this.__style;
        return (h !== g && nr(n.style, g, h), !1);
      };
      gr.importDOM = function importDOM() {
        return {
          "#text": function text() {
            return { conversion: xr, priority: 0 };
          },
          b: function b() {
            return { conversion: pr, priority: 0 };
          },
          code: function code() {
            return { conversion: Tr, priority: 0 };
          },
          em: function em() {
            return { conversion: Tr, priority: 0 };
          },
          i: function i() {
            return { conversion: Tr, priority: 0 };
          },
          mark: function mark() {
            return { conversion: Tr, priority: 0 };
          },
          s: function s() {
            return { conversion: Tr, priority: 0 };
          },
          span: function span() {
            return { conversion: _r, priority: 0 };
          },
          strong: function strong() {
            return { conversion: Tr, priority: 0 };
          },
          sub: function sub() {
            return { conversion: Tr, priority: 0 };
          },
          sup: function sup() {
            return { conversion: Tr, priority: 0 };
          },
          u: function u() {
            return { conversion: Tr, priority: 0 };
          },
        };
      };
      gr.importJSON = function importJSON(t) {
        return Nr().updateFromJSON(t);
      };
      _proto6.updateFromJSON = function updateFromJSON(t) {
        return _jn2.prototype.updateFromJSON
          .call(this, t)
          .setTextContent(t.text)
          .setFormat(t.format)
          .setDetail(t.detail)
          .setMode(t.mode)
          .setStyle(t.style);
      };
      _proto6.exportDOM = function exportDOM(e) {
        var _jn2$prototype$export = _jn2.prototype.exportDOM.call(this, e),
          n = _jn2$prototype$export.element;
        return (
          Ts(n) || t(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = hr(n, "b")),
          this.hasFormat("italic") && (n = hr(n, "i")),
          this.hasFormat("strikethrough") && (n = hr(n, "s")),
          this.hasFormat("underline") && (n = hr(n, "u")),
          { element: n }
        );
      };
      _proto6.exportJSON = function exportJSON() {
        return babelHelpers["extends"](
          {
            detail: this.getDetail(),
            format: this.getFormat(),
            mode: this.getMode(),
            style: this.getStyle(),
            text: this.getTextContent(),
          },
          _jn2.prototype.exportJSON.call(this),
        );
      };
      _proto6.selectionTransform = function selectionTransform(t, e) {};
      _proto6.setFormat = function setFormat(t) {
        var e = this.getWritable();
        return ((e.__format = "string" == typeof t ? A[t] : t), e);
      };
      _proto6.setDetail = function setDetail(t) {
        var e = this.getWritable();
        return ((e.__detail = "string" == typeof t ? w[t] : t), e);
      };
      _proto6.setStyle = function setStyle(t) {
        var e = this.getWritable();
        return ((e.__style = t), e);
      };
      _proto6.toggleFormat = function toggleFormat(t) {
        var e = No(this.getFormat(), t, null);
        return this.setFormat(e);
      };
      _proto6.toggleDirectionless = function toggleDirectionless() {
        var t = this.getWritable();
        return ((t.__detail ^= 1), t);
      };
      _proto6.toggleUnmergeable = function toggleUnmergeable() {
        var t = this.getWritable();
        return ((t.__detail ^= 2), t);
      };
      _proto6.setMode = function setMode(t) {
        var e = P[t];
        if (this.__mode === e) return this;
        var n = this.getWritable();
        return ((n.__mode = e), n);
      };
      _proto6.setTextContent = function setTextContent(t) {
        if (this.__text === t) return this;
        var e = this.getWritable();
        return ((e.__text = t), e);
      };
      _proto6.select = function select(t, e) {
        pi();
        var n = t,
          r = e;
        var i = Xr(),
          o = this.getTextContent(),
          s = this.__key;
        if ("string" == typeof o) {
          var _t72 = o.length;
          (void 0 === n && (n = _t72), void 0 === r && (r = _t72));
        } else ((n = 0), (r = 0));
        if (!Pr(i)) return Gr(s, n, s, r, "text", "text");
        {
          var _t73 = Eo();
          ((_t73 !== i.anchor.key && _t73 !== i.focus.key) || Mo(s),
            i.setTextNodeRange(this, n, this, r));
        }
        return i;
      };
      _proto6.selectStart = function selectStart() {
        return this.select(0, 0);
      };
      _proto6.selectEnd = function selectEnd() {
        var t = this.getTextContentSize();
        return this.select(t, t);
      };
      _proto6.spliceText = function spliceText(t, e, n, r) {
        var i = this.getWritable(),
          o = i.__text,
          s = n.length;
        var l = t;
        l < 0 && ((l = s + l), l < 0 && (l = 0));
        var c = Xr();
        if (r && Pr(c)) {
          var _e59 = t + s;
          c.setTextNodeRange(i, _e59, i, _e59);
        }
        var a = o.slice(0, l) + n + o.slice(l + e);
        return ((i.__text = a), i);
      };
      _proto6.canInsertTextBefore = function canInsertTextBefore() {
        return !0;
      };
      _proto6.canInsertTextAfter = function canInsertTextAfter() {
        return !0;
      };
      _proto6.splitText = function splitText() {
        pi();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var r = e.__key,
          i = Eo(),
          o = n.length;
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
          t.push(o));
        var s = [],
          l = t.length;
        for (var _e60 = 0, _r26 = 0; _e60 < o && _r26 <= l; _r26++) {
          var _i25 = t[_r26];
          _i25 > _e60 && (s.push(n.slice(_e60, _i25)), (_e60 = _i25));
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
        var m = Xr();
        if (Pr(m)) {
          var _ref18 = m.isBackward()
              ? [m.focus, m.anchor]
              : [m.anchor, m.focus],
            _t74 = _ref18[0],
            _e61 = _ref18[1];
          ("text" === _t74.type && _t74.key === r && (p = _t74),
            "text" === _e61.type && _e61.key === r && (y = _e61));
        }
        e.isSegmented()
          ? ((f = Nr(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = at(e, f)),
            (_ = !0))
          : (f = e.setTextContent(a));
        var x = [f];
        for (var _t75 = 1; _t75 < c; _t75++) {
          var _n44 = Nr(s[_t75]);
          ((_n44.__format = d),
            (_n44.__style = h),
            (_n44.__detail = g),
            (_n44.__state = at(e, _n44)));
          var _o0 = _n44.__key;
          (i === r && Mo(_o0), x.push(_n44));
        }
        var C = p ? p.offset : null,
          S = y ? y.offset : null;
        var T = 0;
        for (var _t76 of x) {
          if (!p && !y) break;
          var _e62 = T + _t76.getTextContentSize();
          if (
            (null !== p &&
              null !== C &&
              C <= _e62 &&
              C >= T &&
              (p.set(_t76.getKey(), C - T, "text"), C < _e62 && (p = null)),
            null !== y && null !== S && S <= _e62 && S >= T)
          ) {
            y.set(_t76.getKey(), S - T, "text");
            break;
          }
          T = _e62;
        }
        if (null !== u) {
          !(function (t) {
            var e = t.getPreviousSibling(),
              n = t.getNextSibling();
            null !== e && Oo(e);
            null !== n && Oo(n);
          })(this);
          var _t77 = u.getWritable(),
            _e63 = this.getIndexWithinParent();
          (_
            ? (_t77.splice(_e63, 0, x), this.remove())
            : _t77.splice(_e63, 1, x),
            Pr(m) && Zr(m, u, _e63, c - 1));
        }
        return x;
      };
      _proto6.mergeWithSibling = function mergeWithSibling(e) {
        var n = e === this.getPreviousSibling();
        n || e === this.getNextSibling() || t(50);
        var r = this.__key,
          i = e.__key,
          o = this.__text,
          s = o.length;
        Eo() === i && Mo(r);
        var l = Xr();
        if (Pr(l)) {
          var _t78 = l.anchor,
            _o1 = l.focus;
          (null !== _t78 && _t78.key === i && ni(_t78, n, r, e, s),
            null !== _o1 && _o1.key === i && ni(_o1, n, r, e, s));
        }
        var c = e.__text,
          a = n ? c + o : o + c;
        this.setTextContent(a);
        var u = this.getWritable();
        return (e.remove(), u);
      };
      _proto6.isTextEntity = function isTextEntity() {
        return !1;
      };
      return gr;
    })(_jn5);
    function _r(t) {
      return { forChild: kr(t.style), node: null };
    }
    function pr(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: kr(e.style, n ? void 0 : "bold"), node: null };
    }
    var yr = new WeakMap();
    function mr(t) {
      if (!Ts(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function xr(e) {
      var n = e;
      null === e.parentElement && t(129);
      var r = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var r = [t];
          for (; null !== n && void 0 === (e = yr.get(n)) && !mr(n); )
            (r.push(n), (n = n.parentNode));
          var i = void 0 === e ? n : e;
          for (var _t79 = 0; _t79 < r.length; _t79++) yr.set(r[_t79], i);
          return i;
        })(n)
      ) {
        var _t80 = r.split(/(\r?\n|\t)/),
          _e64 = [],
          _n45 = _t80.length;
        for (var _r27 = 0; _r27 < _n45; _r27++) {
          var _n46 = _t80[_r27];
          "\n" === _n46 || "\r\n" === _n46
            ? _e64.push(or())
            : "\t" === _n46
              ? _e64.push(Mr())
              : "" !== _n46 && _e64.push(Nr(_n46));
        }
        return { node: _e64 };
      }
      if (((r = r.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === r))
        return { node: null };
      if (" " === r[0]) {
        var _t81 = n,
          _e65 = !0;
        for (; null !== _t81 && null !== (_t81 = Cr(_t81, !1)); ) {
          var _n47 = _t81.textContent || "";
          if (_n47.length > 0) {
            (/[ \t\n]$/.test(_n47) && (r = r.slice(1)), (_e65 = !1));
            break;
          }
        }
        _e65 && (r = r.slice(1));
      }
      if (" " === r[r.length - 1]) {
        var _t82 = n,
          _e66 = !0;
        for (; null !== _t82 && null !== (_t82 = Cr(_t82, !0)); ) {
          if (
            (_t82.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e66 = !1;
            break;
          }
        }
        _e66 && (r = r.slice(0, r.length - 1));
      }
      return "" === r ? { node: null } : { node: Nr(r) };
    }
    function Cr(t, e) {
      var n = t;
      for (;;) {
        var _t83 = void 0;
        for (; null === (_t83 = e ? n.nextSibling : n.previousSibling); ) {
          var _t84 = n.parentElement;
          if (null === _t84) return null;
          n = _t84;
        }
        if (((n = _t83), Ts(n))) {
          var _t85 = n.style.display;
          if (
            ("" === _t85 && !Os(n)) ||
            ("" !== _t85 && !_t85.startsWith("inline"))
          )
            return null;
        }
        var _r28 = n;
        for (; null !== (_r28 = e ? n.firstChild : n.lastChild); ) n = _r28;
        if (Co(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var Sr = {
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
    function Tr(t) {
      var e = Sr[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: kr(t.style, e), node: null };
    }
    function Nr(t) {
      if (t === void 0) {
        t = "";
      }
      return _s(new _gr2(t));
    }
    function vr(t) {
      return t instanceof _gr2;
    }
    function kr(t, e) {
      var n = t.fontWeight,
        r = t.textDecoration.split(" "),
        i = "700" === n || "bold" === n,
        o = r.includes("line-through"),
        s = "italic" === t.fontStyle,
        l = r.includes("underline"),
        c = t.verticalAlign;
      return function (t) {
        return vr(t)
          ? (i && !t.hasFormat("bold") && t.toggleFormat("bold"),
            o &&
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
    var _Or = (function (_gr) {
      function Or(t) {
        var _this2;
        ((_this2 = _gr.call(this, "\t", t) || this), (_this2.__detail = 2));
        return _this2;
      }
      babelHelpers.inheritsLoose(Or, _gr);
      Or.getType = function getType() {
        return "tab";
      };
      Or.clone = function clone(t) {
        return new Or(t.__key);
      };
      Or.importDOM = function importDOM() {
        return null;
      };
      var _proto7 = Or.prototype;
      _proto7.createDOM = function createDOM(t) {
        var e = _gr.prototype.createDOM.call(this, t),
          n = Qo(t.theme, "tab");
        if (void 0 !== n) {
          var _e$classList;
          (_e$classList = e.classList).add.apply(_e$classList, n);
        }
        return e;
      };
      Or.importJSON = function importJSON(t) {
        return Mr().updateFromJSON(t);
      };
      _proto7.setTextContent = function setTextContent(t) {
        return (
          "\t" !== t && "" !== t && e(126),
          _gr.prototype.setTextContent.call(this, "\t")
        );
      };
      _proto7.spliceText = function spliceText(e, n, r, i) {
        return (
          ("" === r && 0 === n) || ("\t" === r && 1 === n) || t(286),
          this
        );
      };
      _proto7.setDetail = function setDetail(e) {
        return (2 !== e && t(127), this);
      };
      _proto7.setMode = function setMode(e) {
        return ("normal" !== e && t(128), this);
      };
      _proto7.canInsertTextBefore = function canInsertTextBefore() {
        return !1;
      };
      _proto7.canInsertTextAfter = function canInsertTextAfter() {
        return !1;
      };
      return Or;
    })(_gr2);
    function Mr() {
      return _s(new _Or());
    }
    function Er(t) {
      return t instanceof _Or;
    }
    var _br = (function () {
      function br(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto8 = br.prototype;
      _proto8.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto8.isBefore = function isBefore(t) {
        if (this.key === t.key) return this.offset < t.offset;
        return yl(wl(Tl(this, "next")), wl(Tl(t, "next"))) < 0;
      };
      _proto8.getNode = function getNode() {
        var e = bo(this.key);
        return (null === e && t(20), e);
      };
      _proto8.set = function set(t, e, n, r) {
        var i = this._selection,
          o = this.key;
        (r && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          _i() ||
            (Eo() === o && Mo(t),
            null !== i &&
              (i.setCachedNodes(null),
              Pr(i) && (i._cachedIsBackward = null),
              (i.dirty = !0))));
      };
      return br;
    })();
    function Ar(t, e, n) {
      return new _br(t, e, n);
    }
    function wr(t, e) {
      var n = e.__key,
        r = t.offset,
        i = "element";
      if (vr(e)) {
        i = "text";
        var _t86 = e.getTextContentSize();
        r > _t86 && (r = _t86);
      } else if (!Li(e)) {
        var _t87 = e.getNextSibling();
        if (vr(_t87)) ((n = _t87.__key), (r = 0), (i = "text"));
        else {
          var _t88 = e.getParent();
          _t88 && ((n = _t88.__key), (r = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, r, i);
    }
    function Dr(t, e) {
      if (Li(e)) {
        var _n48 = e.getLastDescendant();
        Li(_n48) || vr(_n48) ? wr(t, _n48) : wr(t, e);
      } else wr(t, e);
    }
    var _Ir = (function () {
      function Ir(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto9 = Ir.prototype;
      _proto9.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto9.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto9.is = function is(t) {
        if (!Rr(t)) return !1;
        var e = this._nodes,
          n = t._nodes;
        return (
          e.size === n.size &&
          Array.from(e).every(function (t) {
            return n.has(t);
          })
        );
      };
      _proto9.isCollapsed = function isCollapsed() {
        return !1;
      };
      _proto9.isBackward = function isBackward() {
        return !1;
      };
      _proto9.getStartEndPoints = function getStartEndPoints() {
        return null;
      };
      _proto9.add = function add(t) {
        ((this.dirty = !0), this._nodes.add(t), (this._cachedNodes = null));
      };
      _proto9["delete"] = function _delete(t) {
        ((this.dirty = !0),
          this._nodes["delete"](t),
          (this._cachedNodes = null));
      };
      _proto9.clear = function clear() {
        ((this.dirty = !0), this._nodes.clear(), (this._cachedNodes = null));
      };
      _proto9.has = function has(t) {
        return this._nodes.has(t);
      };
      _proto9.clone = function clone() {
        return new Ir(new Set(this._nodes));
      };
      _proto9.extract = function extract() {
        return this.getNodes();
      };
      _proto9.insertRawText = function insertRawText(t) {};
      _proto9.insertText = function insertText() {};
      _proto9.insertNodes = function insertNodes(t) {
        var e = this.getNodes(),
          n = e.length,
          r = e[n - 1];
        var i;
        if (vr(r)) i = r.select();
        else {
          var _t89 = r.getIndexWithinParent() + 1;
          i = r.getParentOrThrow().select(_t89, _t89);
        }
        i.insertNodes(t);
        for (var _t90 = 0; _t90 < n; _t90++) e[_t90].remove();
      };
      _proto9.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = this._nodes,
          n = [];
        for (var _t91 of e) {
          var _e67 = bo(_t91);
          null !== _e67 && n.push(_e67);
        }
        return (_i() || (this._cachedNodes = n), n);
      };
      _proto9.getTextContent = function getTextContent() {
        var t = this.getNodes();
        var e = "";
        for (var _n49 = 0; _n49 < t.length; _n49++)
          e += t[_n49].getTextContent();
        return e;
      };
      _proto9.deleteNodes = function deleteNodes() {
        var t = this.getNodes();
        if ((Xr() || Qr()) === this && t[0]) {
          var _e68 = il(t[0], "next");
          vl(_l(_e68, _e68));
        }
        for (var _e69 of t) _e69.remove();
      };
      return Ir;
    })();
    function Pr(t) {
      return t instanceof _Fr;
    }
    var _Fr = (function () {
      function Fr(t, e, n, r) {
        ((this.anchor = t),
          (this.focus = e),
          (t._selection = this),
          (e._selection = this),
          (this._cachedNodes = null),
          (this._cachedIsBackward = null),
          (this.format = n),
          (this.style = r),
          (this.dirty = !1));
      }
      var _proto0 = Fr.prototype;
      _proto0.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto0.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto0.is = function is(t) {
        return (
          !!Pr(t) &&
          this.anchor.is(t.anchor) &&
          this.focus.is(t.focus) &&
          this.format === t.format &&
          this.style === t.style
        );
      };
      _proto0.isCollapsed = function isCollapsed() {
        return this.anchor.is(this.focus);
      };
      _proto0.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = (function (t) {
          var e = [],
            _t$getTextSlices = t.getTextSlices(),
            n = _t$getTextSlices[0],
            r = _t$getTextSlices[1];
          n && e.push(n.caret.origin);
          var i = new Set(),
            o = new Set();
          for (var _n50 of t)
            if (tl(_n50)) {
              var _t92 = _n50.origin;
              0 === e.length ? i.add(_t92) : (o.add(_t92), e.push(_t92));
            } else {
              var _t93 = _n50.origin;
              (Li(_t93) && o.has(_t93)) || e.push(_t93);
            }
          r && e.push(r.caret.origin);
          if (
            Zs(t.focus) &&
            Li(t.focus.origin) &&
            null === t.focus.getNodeAtCaret()
          )
            for (
              var _n51 = cl(t.focus.origin, "previous");
              tl(_n51) &&
              i.has(_n51.origin) &&
              !_n51.origin.isEmpty() &&
              _n51.origin.is(e[e.length - 1]);
              _n51 = ul(_n51)
            )
              (i["delete"](_n51.origin), e.pop());
          for (; e.length > 1; ) {
            var _t94 = e[e.length - 1];
            if (!Li(_t94) || o.has(_t94) || _t94.isEmpty() || i.has(_t94))
              break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n52 = wl(t.anchor),
              _r29 = wl(t.anchor.getFlipped()),
              _i26 = function _i26(t) {
                return Qs(t) ? t.origin : t.getNodeAtCaret();
              },
              _o10 =
                _i26(_n52) ||
                _i26(_r29) ||
                (t.anchor.getNodeAtCaret() ? _n52.origin : _r29.origin);
            e.push(_o10);
          }
          return e;
        })(Pl(Ol(this), "next"));
        return (_i() || (this._cachedNodes = e), e);
      };
      _proto0.setTextNodeRange = function setTextNodeRange(t, e, n, r) {
        return (
          this.anchor.set(t.__key, e, "text"),
          this.focus.set(n.__key, r, "text"),
          this
        );
      };
      _proto0.getTextContent = function getTextContent() {
        var t = this.getNodes();
        if (0 === t.length) return "";
        var e = t[0],
          n = t[t.length - 1],
          r = this.anchor,
          i = this.focus,
          o = r.isBefore(i),
          _Kr = Kr(this),
          s = _Kr[0],
          l = _Kr[1];
        var c = "",
          a = !0;
        for (var _u8 = 0; _u8 < t.length; _u8++) {
          var _f5 = t[_u8];
          if (Li(_f5) && !_f5.isInline())
            (a || (c += "\n"), (a = !_f5.isEmpty()));
          else if (((a = !1), vr(_f5))) {
            var _t95 = _f5.getTextContent();
            (_f5 === e
              ? _f5 === n
                ? ("element" === r.type &&
                    "element" === i.type &&
                    i.offset !== r.offset) ||
                  (_t95 = s < l ? _t95.slice(s, l) : _t95.slice(l, s))
                : (_t95 = o ? _t95.slice(s) : _t95.slice(l))
              : _f5 === n && (_t95 = o ? _t95.slice(0, l) : _t95.slice(0, s)),
              (c += _t95));
          } else
            (!Bi(_f5) && !sr(_f5)) ||
              (_f5 === n && this.isCollapsed()) ||
              (c += _f5.getTextContent());
        }
        return c;
      };
      _proto0.applyDOMRange = function applyDOMRange(t) {
        var e = xi(),
          n = e.getEditorState()._selection,
          r = jr(
            t.startContainer,
            t.startOffset,
            t.endContainer,
            t.endOffset,
            e,
            n,
          );
        if (null === r) return;
        var i = r[0],
          o = r[1];
        (this.anchor.set(i.key, i.offset, i.type, !0),
          this.focus.set(o.key, o.offset, o.type, !0),
          ht(this));
      };
      _proto0.clone = function clone() {
        var t = this.anchor,
          e = this.focus;
        return new Fr(
          Ar(t.key, t.offset, t.type),
          Ar(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto0.toggleFormat = function toggleFormat(t) {
        ((this.format = No(this.format, t, null)), (this.dirty = !0));
      };
      _proto0.setFormat = function setFormat(t) {
        ((this.format = t), (this.dirty = !0));
      };
      _proto0.setStyle = function setStyle(t) {
        ((this.style = t), (this.dirty = !0));
      };
      _proto0.hasFormat = function hasFormat(t) {
        var e = A[t];
        return 0 !== (this.format & e);
      };
      _proto0.insertRawText = function insertRawText(t) {
        var e = t.split(/(\r?\n|\t)/),
          n = [],
          r = e.length;
        for (var _t96 = 0; _t96 < r; _t96++) {
          var _r30 = e[_t96];
          "\n" === _r30 || "\r\n" === _r30
            ? n.push(or())
            : "\t" === _r30
              ? n.push(Mr())
              : n.push(Nr(_r30));
        }
        this.insertNodes(n);
      };
      _proto0.insertText = function insertText(e) {
        var n = this.anchor,
          r = this.focus,
          i = this.format,
          o = this.style;
        var s = n,
          l = r;
        (!this.isCollapsed() && r.isBefore(n) && ((s = r), (l = n)),
          "element" === s.type &&
            (function (t, e, n, r) {
              var i = t.getNode(),
                o = i.getChildAtIndex(t.offset),
                s = Nr();
              if ((s.setFormat(n), s.setStyle(r), Xi(o))) o.splice(0, 0, [s]);
              else {
                var _t97 = Wi(i) ? qi().append(s) : s;
                null === o ? i.append(_t97) : o.insertBefore(_t97);
              }
              (t.is(e) && e.set(s.__key, 0, "text"), t.set(s.__key, 0, "text"));
            })(s, l, i, o),
          "element" === l.type && Nl(l, wl(Tl(l, "next"))));
        var c = s.offset;
        var a = l.offset;
        var u = this.getNodes(),
          f = u.length;
        var d = u[0];
        vr(d) || t(26);
        var h = d.getTextContent().length,
          g = d.getParentOrThrow();
        var _ = u[f - 1];
        if (
          (1 === f &&
            "element" === l.type &&
            ((a = h), l.set(s.key, a, "text")),
          this.isCollapsed() &&
            c === h &&
            (xo(d) ||
              !d.canInsertTextAfter() ||
              (!g.canInsertTextAfter() && null === d.getNextSibling())))
        ) {
          var _t98 = d.getNextSibling();
          if (
            ((vr(_t98) && _t98.canInsertTextBefore() && !xo(_t98)) ||
              ((_t98 = Nr()),
              _t98.setFormat(i),
              _t98.setStyle(o),
              g.canInsertTextAfter()
                ? d.insertAfter(_t98)
                : g.insertAfter(_t98)),
            _t98.select(0, 0),
            (d = _t98),
            "" !== e)
          )
            return void this.insertText(e);
        } else if (
          this.isCollapsed() &&
          0 === c &&
          (xo(d) ||
            !d.canInsertTextBefore() ||
            (!g.canInsertTextBefore() && null === d.getPreviousSibling()))
        ) {
          var _t99 = d.getPreviousSibling();
          if (
            ((vr(_t99) && !xo(_t99)) ||
              ((_t99 = Nr()),
              _t99.setFormat(i),
              g.canInsertTextBefore()
                ? d.insertBefore(_t99)
                : g.insertBefore(_t99)),
            _t99.select(),
            (d = _t99),
            "" !== e)
          )
            return void this.insertText(e);
        } else if (d.isSegmented() && c !== h) {
          var _t100 = Nr(d.getTextContent());
          (_t100.setFormat(i), d.replace(_t100), (d = _t100));
        } else if (!this.isCollapsed() && "" !== e) {
          var _t101 = _.getParent();
          if (
            !g.canInsertTextBefore() ||
            !g.canInsertTextAfter() ||
            (Li(_t101) &&
              (!_t101.canInsertTextBefore() || !_t101.canInsertTextAfter()))
          )
            return (
              this.insertText(""),
              Yr(this.anchor, this.focus),
              void this.insertText(e)
            );
        }
        if (1 === f) {
          if (mo(d)) {
            var _t102 = Nr(e);
            return (_t102.select(), void d.replace(_t102));
          }
          var _t103 = d.getFormat(),
            _n53 = d.getStyle();
          if (c !== a || (_t103 === i && _n53 === o)) {
            if (Er(d)) {
              var _t104 = Nr(e);
              return (
                _t104.setFormat(i),
                _t104.setStyle(o),
                _t104.select(),
                void d.replace(_t104)
              );
            }
          } else {
            if ("" !== d.getTextContent()) {
              var _t105 = Nr(e);
              if (
                (_t105.setFormat(i), _t105.setStyle(o), _t105.select(), 0 === c)
              )
                d.insertBefore(_t105, !1);
              else {
                var _d$splitText = d.splitText(c),
                  _e70 = _d$splitText[0];
                _e70.insertAfter(_t105, !1);
              }
              return void (
                _t105.isComposing() &&
                "text" === this.anchor.type &&
                ((this.anchor.offset -= e.length),
                (this._cachedNodes = null),
                (this._cachedIsBackward = null))
              );
            }
            (d.setFormat(i), d.setStyle(o));
          }
          var _r31 = a - c;
          ((d = d.spliceText(c, _r31, e, !0)),
            "" === d.getTextContent()
              ? d.remove()
              : "text" === this.anchor.type &&
                ((this.format = _t103),
                (this.style = _n53),
                d.isComposing() &&
                  ((this.anchor.offset -= e.length),
                  (this._cachedNodes = null),
                  (this._cachedIsBackward = null))));
        } else {
          var _t106 = new Set([].concat(d.getParentKeys(), _.getParentKeys())),
            _n54 = Li(d) ? d : d.getParentOrThrow();
          var _r32 = Li(_) ? _ : _.getParentOrThrow(),
            _i27 = _;
          if (!_n54.is(_r32) && _r32.isInline())
            do {
              ((_i27 = _r32), (_r32 = _r32.getParentOrThrow()));
            } while (_r32.isInline());
          if (
            ("text" === l.type && (0 !== a || "" === _.getTextContent())) ||
            ("element" === l.type && _.getIndexWithinParent() < a)
          ) {
            if (vr(_) && !mo(_) && a !== _.getTextContentSize()) {
              if (_.isSegmented()) {
                var _t107 = Nr(_.getTextContent());
                (_.replace(_t107), (_ = _t107));
              }
              (Wi(l.getNode()) ||
                "text" !== l.type ||
                (_ = _.spliceText(0, a, "")),
                _t106.add(_.__key));
            } else {
              var _t108 = _.getParentOrThrow();
              _t108.canBeEmpty() || 1 !== _t108.getChildrenSize()
                ? _.remove()
                : _t108.remove();
            }
          } else _t106.add(_.__key);
          var _o11 = _r32.getChildren(),
            _s9 = new Set(u),
            _g4 = _n54.is(_r32),
            _p2 = _n54.isInline() && null === d.getNextSibling() ? _n54 : d;
          for (var _t109 = _o11.length - 1; _t109 >= 0; _t109--) {
            var _e71 = _o11[_t109];
            if (_e71.is(d) || (Li(_e71) && _e71.isParentOf(d))) break;
            _e71.isAttached() &&
              (!_s9.has(_e71) || _e71.is(_i27)
                ? _g4 || _p2.insertAfter(_e71, !1)
                : _e71.remove());
          }
          if (!_g4) {
            var _e72 = _r32,
              _n55 = null;
            for (; null !== _e72; ) {
              var _r33 = _e72.getChildren(),
                _i28 = _r33.length;
              ((0 === _i28 || _r33[_i28 - 1].is(_n55)) &&
                (_t106["delete"](_e72.__key), (_n55 = _e72)),
                (_e72 = _e72.getParent()));
            }
          }
          if (mo(d)) {
            if (c === h) d.select();
            else {
              var _t110 = Nr(e);
              (_t110.select(), d.replace(_t110));
            }
          } else
            ((d = d.spliceText(c, h - c, e, !0)),
              "" === d.getTextContent()
                ? d.remove()
                : "text" === this.anchor.type &&
                  ((this.format = d.getFormat()),
                  (this.style = d.getStyle()),
                  d.isComposing() &&
                    ((this.anchor.offset -= e.length),
                    (this._cachedNodes = null),
                    (this._cachedIsBackward = null))));
          for (var _e73 = 1; _e73 < f; _e73++) {
            var _n56 = u[_e73],
              _r34 = _n56.__key;
            _t106.has(_r34) || _n56.remove();
          }
        }
      };
      _proto0.removeText = function removeText() {
        var t = Xr() === this;
        (kl(this, Al(Ol(this))), t && Xr() !== this && Lo(this));
      };
      _proto0.formatText = function formatText(t, e) {
        var _d$splitText2, _p$splitText;
        if (e === void 0) {
          e = null;
        }
        if (this.isCollapsed()) return (this.toggleFormat(t), void Mo(null));
        var n = this.getNodes(),
          r = [];
        for (var _t111 of n) vr(_t111) && r.push(_t111);
        var i = function i(e) {
            n.forEach(function (n) {
              if (Li(n)) {
                var _r35 = n.getFormatFlags(t, e);
                n.setTextFormat(_r35);
              }
            });
          },
          o = r.length;
        if (0 === o) return (this.toggleFormat(t), Mo(null), void i(e));
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
        i(g);
        var _ = o - 1;
        var p = r[_];
        var y = "text" === u.type ? u.offset : p.getTextContentSize();
        if (d.is(p)) {
          if (h === y) return;
          if (xo(d) || (0 === h && y === d.getTextContentSize()))
            d.setFormat(g);
          else {
            var _t112 = d.splitText(h, y),
              _e74 = 0 === h ? _t112[0] : _t112[1];
            (_e74.setFormat(g),
              "text" === a.type && a.set(_e74.__key, 0, "text"),
              "text" === u.type && u.set(_e74.__key, y - h, "text"));
          }
          return void (this.format = g);
        }
        (0 === h ||
          xo(d) ||
          ((_d$splitText2 = d.splitText(h)), (d = _d$splitText2[1]), (h = 0)),
          d.setFormat(g));
        var m = p.getFormatFlags(t, g);
        y > 0 &&
          (y === p.getTextContentSize() ||
            xo(p) ||
            ((_p$splitText = p.splitText(y)),
            (p = _p$splitText[0]),
            _p$splitText),
          p.setFormat(m));
        for (var _e75 = f + 1; _e75 < _; _e75++) {
          var _n57 = r[_e75],
            _i29 = _n57.getFormatFlags(t, m);
          _n57.setFormat(_i29);
        }
        ("text" === a.type && a.set(d.__key, h, "text"),
          "text" === u.type && u.set(p.__key, y, "text"),
          (this.format = g | m));
      };
      _proto0.insertNodes = function insertNodes(e) {
        if (0 === e.length) return;
        if (
          (this.isCollapsed() || this.removeText(), "root" === this.anchor.key)
        ) {
          this.insertParagraph();
          var _n58 = Xr();
          return (Pr(_n58) || t(134), _n58.insertNodes(e));
        }
        var n = (this.isBackward() ? this.focus : this.anchor).getNode(),
          r = Ws(n, bs),
          i = e[e.length - 1];
        if (Li(r) && "__language" in r) {
          if ("__language" in e[0]) this.insertText(e[0].getTextContent());
          else {
            var _t113 = si(this);
            (r.splice(_t113, 0, e), i.selectEnd());
          }
          return;
        }
        if (
          !e.some(function (t) {
            return (Li(t) || Bi(t)) && !t.isInline();
          })
        ) {
          Li(r) || t(211, n.constructor.name, n.getType());
          var _o12 = si(this);
          return (r.splice(_o12, 0, e), void i.selectEnd());
        }
        var o = (function (t) {
            var e = qi();
            var n = null;
            for (var _r36 = 0; _r36 < t.length; _r36++) {
              var _i30 = t[_r36],
                _o13 = sr(_i30);
              if (
                _o13 ||
                (Bi(_i30) && _i30.isInline()) ||
                (Li(_i30) && _i30.isInline()) ||
                vr(_i30) ||
                _i30.isParentRequired()
              ) {
                if (
                  null === n &&
                  ((n = _i30.createParentElementNode()), e.append(n), _o13)
                )
                  continue;
                null !== n && n.append(_i30);
              } else (e.append(_i30), (n = null));
            }
            return e;
          })(e),
          s = o.getLastDescendant(),
          l = o.getChildren(),
          c = !Li(r) || !r.isEmpty() ? this.insertParagraph() : null,
          a = l[l.length - 1];
        var u = l[0];
        var f;
        (Li((f = u)) &&
          bs(f) &&
          !f.isEmpty() &&
          Li(r) &&
          (!r.isEmpty() || r.canMergeWhenEmpty()) &&
          (Li(r) || t(211, n.constructor.name, n.getType()),
          r.append.apply(r, u.getChildren()),
          (u = l[1])),
          u &&
            (null === r && t(212, n.constructor.name, n.getType()),
            (function (e, n) {
              var r = n.getParentOrThrow().getLastChild();
              var i = n;
              var o = [n];
              for (; i !== r; )
                (i.getNextSibling() || t(140),
                  (i = i.getNextSibling()),
                  o.push(i));
              var s = e;
              for (var _t114 of o) s = s.insertAfter(_t114);
            })(r, u)));
        var d = Ws(s, bs);
        (c &&
          Li(d) &&
          (c.canMergeWhenEmpty() || bs(a)) &&
          (d.append.apply(d, c.getChildren()), c.remove()),
          Li(r) && r.isEmpty() && r.remove(),
          s.selectEnd());
        var h = Li(r) ? r.getLastChild() : null;
        sr(h) && d !== r && h.remove();
      };
      _proto0.insertParagraph = function insertParagraph() {
        if ("root" === this.anchor.key) {
          var _t115 = qi();
          return (
            Fo().splice(this.anchor.offset, 0, [_t115]),
            _t115.select(),
            _t115
          );
        }
        var e = si(this),
          n = Ws(this.anchor.getNode(), bs);
        Li(n) || t(213);
        var r = n.getChildAtIndex(e),
          i = r ? [r].concat(r.getNextSiblings()) : [],
          o = n.insertNewAfter(this, !1);
        return o ? (o.append.apply(o, i), o.selectStart(), o) : null;
      };
      _proto0.insertLineBreak = function insertLineBreak(t) {
        var e = or();
        if ((this.insertNodes([e]), t)) {
          var _t116 = e.getParentOrThrow(),
            _n59 = e.getIndexWithinParent();
          _t116.select(_n59, _n59);
        }
      };
      _proto0.extract = function extract() {
        var _n$splitText;
        var t = [].concat(this.getNodes()),
          e = t.length;
        var n = t[0],
          r = t[e - 1];
        var _Kr2 = Kr(this),
          i = _Kr2[0],
          o = _Kr2[1],
          s = this.isBackward(),
          _ref19 = s ? [this.focus, this.anchor] : [this.anchor, this.focus],
          l = _ref19[0],
          c = _ref19[1],
          _ref20 = s ? [o, i] : [i, o],
          a = _ref20[0],
          u = _ref20[1];
        if (0 === e) return [];
        if (1 === e) {
          if (vr(n) && !this.isCollapsed()) {
            var _t117 = n.splitText(a, u),
              _e76 = 0 === a ? _t117[0] : _t117[1];
            return _e76
              ? (l.set(_e76.getKey(), 0, "text"),
                c.set(_e76.getKey(), _e76.getTextContentSize(), "text"),
                [_e76])
              : [];
          }
          return [n];
        }
        if (
          (vr(n) &&
            (a === n.getTextContentSize()
              ? t.shift()
              : 0 !== a &&
                ((_n$splitText = n.splitText(a)),
                (n = _n$splitText[1]),
                (t[0] = n),
                l.set(n.getKey(), 0, "text"))),
          vr(r))
        ) {
          var _r$splitText;
          var _e77 = r.getTextContent().length;
          0 === u
            ? t.pop()
            : u !== _e77 &&
              ((_r$splitText = r.splitText(u)),
              (r = _r$splitText[0]),
              (t[t.length - 1] = r),
              c.set(r.getKey(), r.getTextContentSize(), "text"));
        }
        return t;
      };
      _proto0.modify = function modify(t, e, n) {
        if (ci(this, t, e, n)) return;
        var r = "move" === t,
          i = xi(),
          o = Cs(fs(i));
        if (!o) return;
        var s = i._blockCursorElement,
          l = i._rootElement,
          c = this.focus.getNode();
        if (
          (null === l ||
            null === s ||
            !Li(c) ||
            c.isInline() ||
            c.canBeEmpty() ||
            xs(s, i, l),
          this.dirty)
        ) {
          var _t118 = is(i, this.anchor.key),
            _e78 = is(i, this.focus.key);
          ("text" === this.anchor.type && (_t118 = To(_t118)),
            "text" === this.focus.type && (_e78 = To(_e78)),
            _t118 &&
              _e78 &&
              ri(o, _t118, this.anchor.offset, _e78, this.focus.offset));
        }
        if (
          ((function (t, e, n, r) {
            t.modify(e, n, r);
          })(o, t, e ? "backward" : "forward", n),
          o.rangeCount > 0)
        ) {
          var _t119 = o.getRangeAt(0),
            _n60 = this.anchor.getNode(),
            _i31 = Wi(_n60) ? _n60 : ds(_n60);
          if ((this.applyDOMRange(_t119), (this.dirty = !0), !r)) {
            var _n61 = this.getNodes(),
              _r37 = [];
            var _s0 = !1;
            for (var _t120 = 0; _t120 < _n61.length; _t120++) {
              var _e79 = _n61[_t120];
              as(_e79, _i31) ? _r37.push(_e79) : (_s0 = !0);
            }
            if (_s0 && _r37.length > 0)
              if (e) {
                var _t121 = _r37[0];
                Li(_t121)
                  ? _t121.selectStart()
                  : _t121.getParentOrThrow().selectStart();
              } else {
                var _t122 = _r37[_r37.length - 1];
                Li(_t122)
                  ? _t122.selectEnd()
                  : _t122.getParentOrThrow().selectEnd();
              }
            (o.anchorNode === _t119.startContainer &&
              o.anchorOffset === _t119.startOffset) ||
              (function (t) {
                var e = t.focus,
                  n = t.anchor,
                  r = n.key,
                  i = n.offset,
                  o = n.type;
                (n.set(e.key, e.offset, e.type, !0), e.set(r, i, o, !0));
              })(this);
          }
        }
        "lineboundary" === n && ci(this, t, e, n, "decorators");
      };
      _proto0.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            Li(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t123 = e.getParent(),
            _n62 =
              e.getNextSibling() ||
              (null === _t123 ? null : _t123.getNextSibling());
          if (Li(_n62) && _n62.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto0.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e80 = this.anchor;
          var _n63 = _e80.getNode();
          if (this.forwardDeletion(_e80, _n63, t)) return;
          var _r38 = hl(Tl(_e80, t ? "previous" : "next"));
          if (
            _r38.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            var _t124 = { type: "initial" };
            for (var _e81 of _r38.iterNodeCarets("shadowRoot"))
              if (tl(_e81)) {
                if (_e81.origin.isInline());
                else {
                  if (_e81.origin.isShadowRoot()) {
                    if ("merge-block" === _t124.type) break;
                    if (
                      Li(_r38.anchor.origin) &&
                      _r38.anchor.origin.isEmpty()
                    ) {
                      var _t125 = wl(_e81);
                      (kl(this, _l(_t125, _t125)), _r38.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t124.type &&
                    "merge-block" !== _t124.type) ||
                    (_t124 = {
                      block: _t124.block,
                      caret: _e81,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t124.type) break;
                if (Zs(_e81)) {
                  if (Li(_e81.origin)) {
                    if (_e81.origin.isInline()) {
                      if (!_e81.origin.isParentOf(_r38.anchor.origin)) break;
                    } else
                      _t124 = { block: _e81.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (Bi(_e81.origin)) {
                    if (_e81.origin.isIsolated());
                    else if (
                      "merge-next-block" === _t124.type &&
                      (_e81.origin.isKeyboardSelectable() ||
                        !_e81.origin.isInline()) &&
                      Li(_r38.anchor.origin) &&
                      _r38.anchor.origin.isEmpty()
                    ) {
                      _r38.anchor.origin.remove();
                      var _t126 = Vr();
                      (_t126.add(_e81.origin.getKey()), Lo(_t126));
                    } else _e81.origin.remove();
                    return;
                  }
                  break;
                }
              }
            if ("merge-block" === _t124.type) {
              var _t127 = _t124,
                _e82 = _t127.caret,
                _n64 = _t127.block;
              return _e82.origin.isEmpty() &&
                !_n64.isEmpty() &&
                _e82.origin.getParent() === _n64.getParent()
                ? void _e82.origin.remove(!0)
                : (kl(
                    this,
                    _l(
                      !_e82.origin.isEmpty() && _n64.isEmpty()
                        ? Ml(il(_n64, _e82.direction))
                        : _r38.anchor,
                      _e82,
                    ),
                  ),
                  this.removeText());
            }
          }
          var _i32 = this.focus;
          if ((this.modify("extend", t, "character"), this.isCollapsed())) {
            if (t && 0 === _e80.offset && $r(this, _e80.getNode())) return;
          } else {
            var _r39 = "text" === _i32.type ? _i32.getNode() : null;
            if (
              ((_n63 = "text" === _e80.type ? _e80.getNode() : null),
              null !== _r39 && _r39.isSegmented())
            ) {
              var _e83 = _i32.offset,
                _o14 = _r39.getTextContentSize();
              if (_r39.is(_n63) || (t && _e83 !== _o14) || (!t && 0 !== _e83))
                return void zr(_r39, t, _e83);
            } else if (null !== _n63 && _n63.isSegmented()) {
              var _i33 = _e80.offset,
                _o15 = _n63.getTextContentSize();
              if (_n63.is(_r39) || (t && 0 !== _i33) || (!t && _i33 !== _o15))
                return void zr(_n63, t, _i33);
            }
            !(function (t, e) {
              var n = t.anchor,
                r = t.focus,
                i = n.getNode(),
                o = r.getNode();
              if (i === o && "text" === n.type && "text" === r.type) {
                var _t128 = n.offset,
                  _o16 = r.offset,
                  _s1 = _t128 < _o16,
                  _l6 = _s1 ? _t128 : _o16,
                  _c5 = _s1 ? _o16 : _t128,
                  _a8 = _c5 - 1;
                if (_l6 !== _a8) {
                  (function (t) {
                    return !($o(t) || Br(t));
                  })(i.getTextContent().slice(_l6, _c5)) &&
                    (e ? r.set(r.key, _a8, r.type) : n.set(n.key, _a8, n.type));
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
          var _t129 = this.anchor.getNode();
          _t129.isEmpty() &&
            Wi(_t129.getParent()) &&
            null === _t129.getPreviousSibling() &&
            $r(this, _t129);
        }
      };
      _proto0.deleteLine = function deleteLine(t) {
        (this.isCollapsed() && this.modify("extend", t, "lineboundary"),
          this.isCollapsed() ? this.deleteCharacter(t) : this.removeText());
      };
      _proto0.deleteWord = function deleteWord(t) {
        if (this.isCollapsed()) {
          var _e84 = this.anchor,
            _n65 = _e84.getNode();
          if (this.forwardDeletion(_e84, _n65, t)) return;
          this.modify("extend", t, "word");
        }
        this.isCollapsed() ? this.deleteCharacter(t) : this.removeText();
      };
      _proto0.isBackward = function isBackward() {
        var t = this._cachedIsBackward;
        if (null !== t) return t;
        var e = this.focus.isBefore(this.anchor);
        return (_i() || (this._cachedIsBackward = e), e);
      };
      _proto0.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return Fr;
    })();
    function Rr(t) {
      return t instanceof _Ir;
    }
    function Lr(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function Kr(t) {
      var e = t.getStartEndPoints();
      if (null === e) return [0, 0];
      var n = e[0],
        r = e[1];
      return "element" === n.type &&
        "element" === r.type &&
        n.key === r.key &&
        n.offset === r.offset
        ? [0, 0]
        : [Lr(n), Lr(r)];
    }
    function $r(t, e) {
      for (var _n66 = e; _n66; _n66 = _n66.getParent()) {
        if (Li(_n66)) {
          if (_n66.collapseAtStart(t)) return !0;
          if (hs(_n66)) break;
        }
        if (_n66.getPreviousSibling()) break;
      }
      return !1;
    }
    var Br = (function () {
      try {
        var _t130 = new RegExp("\\p{Emoji}", "u"),
          _e85 = _t130.test.bind(_t130);
        if (_e85("\u2764\ufe0f") && _e85("#\ufe0f\u20e3") && _e85("\u{1f44d}"))
          return _e85;
      } catch (t) {}
      return function () {
        return !1;
      };
    })();
    function zr(t, e, n) {
      var r = t,
        i = r.getTextContent().split(/(?=\s)/g),
        o = i.length;
      var s = 0,
        l = 0;
      for (var _t131 = 0; _t131 < o; _t131++) {
        var _r40 = _t131 === o - 1;
        if (
          ((l = s), (s += i[_t131].length), (e && s === n) || s > n || _r40)
        ) {
          (i.splice(_t131, 1), _r40 && (l = void 0));
          break;
        }
      }
      var c = i.join("").trim();
      "" === c ? r.remove() : (r.setTextContent(c), r.select(l, l));
    }
    function Wr(e, n, r, i) {
      var o,
        s = n;
      if (Ts(e)) {
        var _l7 = !1;
        var _c6 = e.childNodes,
          _a9 = _c6.length,
          _u9 = i._blockCursorElement;
        s === _a9 && ((_l7 = !0), (s = _a9 - 1));
        var _f6 = _c6[s],
          _d6 = !1;
        if (_f6 === _u9) ((_f6 = _c6[s + 1]), (_d6 = !0));
        else if (null !== _u9) {
          var _t132 = _u9.parentNode;
          if (e === _t132) {
            n > Array.prototype.indexOf.call(_t132.children, _u9) && s--;
          }
        }
        if (((o = Ko(_f6)), vr(o))) s = sl(o, _l7 ? "next" : "previous");
        else {
          var _c7 = Ko(e);
          if (null === _c7) return null;
          if (Li(_c7)) {
            var _u0$resolveChildIndex;
            var _a0 = i.getElementByKey(_c7.getKey());
            null === _a0 && t(214);
            var _u0 = ws(i).$getDOMSlot(_c7, _a0, i);
            ((_u0$resolveChildIndex = _u0.resolveChildIndex(_c7, _a0, e, n)),
              (_c7 = _u0$resolveChildIndex[0]),
              (s = _u0$resolveChildIndex[1]),
              Li(_c7) || t(215),
              _l7 &&
                s >= _c7.getChildrenSize() &&
                (s = Math.max(0, _c7.getChildrenSize() - 1)));
            var _f7 = _c7.getChildAtIndex(s);
            if (
              Li(_f7) &&
              (function (t, e, n) {
                var r = t.getParent();
                return (
                  null === n ||
                  null === r ||
                  !r.canBeEmpty() ||
                  r !== n.getNode()
                );
              })(_f7, 0, r)
            ) {
              var _t133 = _l7
                ? _f7.getLastDescendant()
                : _f7.getFirstDescendant();
              (null === _t133
                ? (_c7 = _f7)
                : ((_f7 = _t133),
                  (_c7 = Li(_f7) ? _f7 : _f7.getParentOrThrow())),
                (s = 0));
            }
            vr(_f7)
              ? ((o = _f7),
                (_c7 = null),
                (s = sl(_f7, _l7 ? "next" : "previous")))
              : _f7 !== _c7 &&
                _l7 &&
                !_d6 &&
                (Li(_c7) || t(216),
                (s = Math.min(_c7.getChildrenSize(), s + 1)));
          } else {
            var _t134 = _c7.getIndexWithinParent();
            ((s = 0 === n && Bi(_c7) && Ko(e) === _c7 ? _t134 : _t134 + 1),
              (_c7 = _c7.getParentOrThrow()));
          }
          if (Li(_c7)) return Ar(_c7.__key, s, "element");
        }
      } else o = Ko(e);
      return vr(o) ? Ar(o.__key, sl(o, s, "clamp"), "text") : null;
    }
    function Ur(t, e, n) {
      var r = t.offset,
        i = t.getNode();
      if (0 === r) {
        var _r41 = i.getPreviousSibling(),
          _o17 = i.getParent();
        if (e) {
          if ((n || !e) && null === _r41 && Li(_o17) && _o17.isInline()) {
            var _e86 = _o17.getPreviousSibling();
            vr(_e86) && t.set(_e86.__key, _e86.getTextContent().length, "text");
          }
        } else
          Li(_r41) && !n && _r41.isInline()
            ? t.set(_r41.__key, _r41.getChildrenSize(), "element")
            : vr(_r41) &&
              t.set(_r41.__key, _r41.getTextContent().length, "text");
      } else if (r === i.getTextContent().length) {
        var _r42 = i.getNextSibling(),
          _o18 = i.getParent();
        if (e && Li(_r42) && _r42.isInline()) t.set(_r42.__key, 0, "element");
        else if (
          (n || e) &&
          null === _r42 &&
          Li(_o18) &&
          _o18.isInline() &&
          !_o18.canInsertTextAfter()
        ) {
          var _e87 = _o18.getNextSibling();
          vr(_e87) && t.set(_e87.__key, 0, "text");
        }
      }
    }
    function Yr(t, e, n) {
      if ("text" === t.type && "text" === e.type) {
        var _n67 = t.isBefore(e),
          _r43 = t.is(e);
        (Ur(t, _n67, _r43),
          Ur(e, !_n67, _r43),
          _r43 && e.set(t.key, t.offset, t.type));
      }
    }
    function jr(t, e, n, r, i, o) {
      if (null === t || null === n || !go(i, t, n)) return null;
      var s = Wr(t, e, Pr(o) ? o.anchor : null, i);
      if (null === s) return null;
      var l = Wr(n, r, Pr(o) ? o.focus : null, i);
      if (null === l) return null;
      if ("element" === s.type && "element" === l.type) {
        var _e88 = Ko(t),
          _r44 = Ko(n);
        if (Bi(_e88) && Bi(_r44)) return null;
      }
      return (Yr(s, l), [s, l]);
    }
    function Jr(t) {
      return Li(t) && !t.isInline();
    }
    function Gr(t, e, n, r, i, o) {
      var s = mi(),
        l = new _Fr(Ar(t, e, i), Ar(n, r, o), 0, "");
      return ((l.dirty = !0), (s._selection = l), l);
    }
    function Hr() {
      var t = Ar("root", 0, "element"),
        e = Ar("root", 0, "element");
      return new _Fr(t, e, 0, "");
    }
    function Vr() {
      return new _Ir(new Set());
    }
    function qr(t, e, n, r) {
      var i = n._window;
      if (null === i) return null;
      var o = r || i.event,
        s = o ? o.type : void 0,
        l = "selectionchange" === s,
        c =
          !U &&
          (l ||
            "beforeinput" === s ||
            "compositionstart" === s ||
            "compositionend" === s ||
            ("click" === s && o && 3 === o.detail) ||
            "drop" === s ||
            void 0 === s);
      var a, u, f, d;
      if (Pr(t) && !c) return t.clone();
      if (null === e) return null;
      if (
        ((a = e.anchorNode),
        (u = e.focusNode),
        (f = e.anchorOffset),
        (d = e.focusOffset),
        (l || void 0 === s) && Pr(t) && !go(n, a, u))
      )
        return t.clone();
      var h = jr(a, f, u, d, n, t);
      if (null === h) return null;
      var g = h[0],
        _ = h[1];
      var p = 0,
        y = "";
      if (Pr(t)) {
        var _e89 = t.anchor;
        if (g.key === _e89.key) ((p = t.format), (y = t.style));
        else {
          var _t135 = g.getNode();
          vr(_t135)
            ? ((p = _t135.getFormat()), (y = _t135.getStyle()))
            : Li(_t135) &&
              ((p = _t135.getTextFormat()), (y = _t135.getTextStyle()));
        }
      }
      return new _Fr(g, _, p, y);
    }
    function Xr() {
      return mi()._selection;
    }
    function Qr() {
      return xi()._editorState._selection;
    }
    function Zr(t, e, n, r) {
      if (r === void 0) {
        r = 1;
      }
      var i = t.anchor,
        o = t.focus,
        s = i.getNode(),
        l = o.getNode();
      if (!e.is(s) && !e.is(l)) return;
      var c = e.__key;
      if (t.isCollapsed()) {
        var _e90 = i.offset;
        if ((n <= _e90 && r > 0) || (n < _e90 && r < 0)) {
          var _n68 = Math.max(0, _e90 + r);
          (i.set(c, _n68, "element"), o.set(c, _n68, "element"), ti(t));
        }
      } else {
        var _s10 = t.isBackward(),
          _l8 = _s10 ? o : i,
          _a1 = _l8.getNode(),
          _u1 = _s10 ? i : o,
          _f8 = _u1.getNode();
        if (e.is(_a1)) {
          var _t136 = _l8.offset;
          ((n <= _t136 && r > 0) || (n < _t136 && r < 0)) &&
            _l8.set(c, Math.max(0, _t136 + r), "element");
        }
        if (e.is(_f8)) {
          var _t137 = _u1.offset;
          ((n <= _t137 && r > 0) || (n < _t137 && r < 0)) &&
            _u1.set(c, Math.max(0, _t137 + r), "element");
        }
      }
      ti(t);
    }
    function ti(t) {
      var e = t.anchor,
        n = e.offset,
        r = t.focus,
        i = r.offset,
        o = e.getNode(),
        s = r.getNode();
      if (t.isCollapsed()) {
        if (!Li(o)) return;
        var _t138 = o.getChildrenSize(),
          _i34 = n >= _t138,
          _s11 = _i34 ? o.getChildAtIndex(_t138 - 1) : o.getChildAtIndex(n);
        if (vr(_s11)) {
          var _t139 = 0;
          (_i34 && (_t139 = _s11.getTextContentSize()),
            e.set(_s11.__key, _t139, "text"),
            r.set(_s11.__key, _t139, "text"));
        }
        return;
      }
      if (Li(o)) {
        var _t140 = o.getChildrenSize(),
          _r45 = n >= _t140,
          _i35 = _r45 ? o.getChildAtIndex(_t140 - 1) : o.getChildAtIndex(n);
        if (vr(_i35)) {
          var _t141 = 0;
          (_r45 && (_t141 = _i35.getTextContentSize()),
            e.set(_i35.__key, _t141, "text"));
        }
      }
      if (Li(s)) {
        var _t142 = s.getChildrenSize(),
          _e91 = i >= _t142,
          _n69 = _e91 ? s.getChildAtIndex(_t142 - 1) : s.getChildAtIndex(i);
        if (vr(_n69)) {
          var _t143 = 0;
          (_e91 && (_t143 = _n69.getTextContentSize()),
            r.set(_n69.__key, _t143, "text"));
        }
      }
    }
    function ei(t, e, n, r, i) {
      var o = null,
        s = 0,
        l = null;
      (null !== r
        ? ((o = r.__key),
          vr(r)
            ? ((s = r.getTextContentSize()), (l = "text"))
            : Li(r) && ((s = r.getChildrenSize()), (l = "element")))
        : null !== i &&
          ((o = i.__key), vr(i) ? (l = "text") : Li(i) && (l = "element")),
        null !== o && null !== l
          ? t.set(o, s, l)
          : ((s = e.getIndexWithinParent()),
            -1 === s && (s = n.getChildrenSize()),
            t.set(n.__key, s, "element")));
    }
    function ni(t, e, n, r, i) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : i), "text")
        : t.offset > r.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function ri(t, e, n, r, i) {
      try {
        t.setBaseAndExtent(e, n, r, i);
      } catch (t) {}
    }
    function ii(t, e, n) {
      var r = is(t, e.getKey());
      if (Li(e)) {
        var _i36 = ws(t).$getDOMSlot(e, r, t);
        return [_i36.element, n + _i36.getFirstChildOffset()];
      }
      return [r, n];
    }
    function oi(t, e, n, r, i, s) {
      var l = document.activeElement;
      if ((i.has(Gn) && l !== s) || (null !== l && ho(l))) return;
      if (!Pr(e))
        return void (
          null !== t &&
          go(n, r.anchorNode, r.focusNode) &&
          r.removeAllRanges()
        );
      var c = e.anchor,
        a = e.focus,
        u = c.getNode(),
        f = a.getNode(),
        _ii = ii(n, u, c.offset),
        d = _ii[0],
        h = _ii[1],
        _ii2 = ii(n, f, a.offset),
        g = _ii2[0],
        _ = _ii2[1],
        p = e.format,
        y = e.style,
        m = e.isCollapsed();
      var x = d,
        C = g,
        S = !1;
      var T, N, v, k, O;
      if (
        ("text" === c.type
          ? ((x = To(d)), (S = u.getFormat() !== p || u.getStyle() !== y))
          : Pr(t) && "text" === t.anchor.type && (S = !0),
        "text" === a.type && (C = To(g)),
        null !== x && null !== C) &&
        (m &&
          (null === t || S || (Pr(t) && (t.format !== p || t.style !== y))) &&
          ((T = p),
          (N = y),
          (v = h),
          (k = c.key),
          (O = performance.now()),
          (mn = [T, N, v, k, O])),
        ("Range" === r.type && m) ||
          r.anchorOffset !== h ||
          r.focusOffset !== _ ||
          r.anchorNode !== x ||
          r.focusNode !== C ||
          ((null !== l && s.contains(l)) ||
            i.has(qn) ||
            s.focus({ preventScroll: !0 }),
          "element" === c.type))
      ) {
        if (
          (ri(r, x, h, C, _),
          !o ||
            !e.isCollapsed() ||
            null === s ||
            i.has(qn) ||
            (null !== document.activeElement &&
              s.contains(document.activeElement)) ||
            s.focus({ preventScroll: !0 }),
          !i.has(Hn) &&
            e.isCollapsed() &&
            null !== s &&
            s === document.activeElement)
        ) {
          var _t144 =
            Pr(e) && "element" === e.anchor.type
              ? x.childNodes[h] || null
              : r.rangeCount > 0
                ? r.getRangeAt(0)
                : null;
          if (null !== _t144) {
            var _e92;
            if (_t144 instanceof Text) {
              var _n70 = document.createRange();
              (_n70.selectNode(_t144), (_e92 = _n70.getBoundingClientRect()));
            } else _e92 = _t144.getBoundingClientRect();
            !(function (t, e, n) {
              var r = ss(n),
                i = us(r);
              if (null === r || null === i) return;
              var o = e.top,
                s = e.bottom,
                l = 0,
                c = 0,
                a = n;
              for (; null !== a; ) {
                var _e93 = a === r.body;
                if (_e93) {
                  var _e94 = i.visualViewport;
                  if (_e94) {
                    var _t145 = _e94.offsetTop;
                    ((l = _t145), (c = _t145 + _e94.height));
                  } else ((l = 0), (c = fs(t).innerHeight));
                  var _n71 = i.getComputedStyle(r.documentElement),
                    _o19 = parseFloat(_n71.scrollPaddingTop),
                    _s12 = parseFloat(_n71.scrollPaddingBottom);
                  (isFinite(_o19) && (l += _o19),
                    isFinite(_s12) && (c -= _s12));
                } else {
                  var _t146 = a.getBoundingClientRect();
                  ((l = _t146.top), (c = _t146.bottom));
                }
                var _n72 = 0;
                if (
                  (o < l ? (_n72 = -(l - o)) : s > c && (_n72 = s - c),
                  0 !== _n72)
                )
                  if (_e93) i.scrollBy(0, _n72);
                  else {
                    var _t147 = a.scrollTop;
                    a.scrollTop += _n72;
                    var _e95 = a.scrollTop - _t147;
                    ((o -= _e95), (s -= _e95));
                  }
                if (_e93) break;
                a = os(a);
              }
            })(n, _e92, s);
          }
        }
        fn = !0;
      }
    }
    function si(e) {
      var n = e;
      e.isCollapsed() || n.removeText();
      var r = Xr();
      (Pr(r) && (n = r), Pr(n) || t(161));
      var i = n.anchor;
      var o = i.getNode(),
        s = i.offset;
      for (; !bs(o); ) {
        var _li;
        var _t148 = o;
        if (((_li = li(o, s)), (o = _li[0]), (s = _li[1]), _t148.is(o))) break;
      }
      return s;
    }
    function li(t, e) {
      var n = t.getParent();
      if (!n) {
        var _t149 = qi();
        return (Fo().append(_t149), _t149.select(), [Fo(), 0]);
      }
      if (vr(t)) {
        var _r46 = t.splitText(e);
        if (0 === _r46.length) return [n, t.getIndexWithinParent()];
        var _i37 = 0 === e ? 0 : 1;
        return [n, _r46[0].getIndexWithinParent() + _i37];
      }
      if (!Li(t) || 0 === e) return [n, t.getIndexWithinParent()];
      var r = t.getChildAtIndex(e);
      if (r) {
        var _n73 = new _Fr(
            Ar(t.__key, e, "element"),
            Ar(t.__key, e, "element"),
            0,
            "",
          ),
          _i38 = t.insertNewAfter(_n73);
        _i38 && _i38.append.apply(_i38, [r].concat(r.getNextSiblings()));
      }
      return [n, t.getIndexWithinParent() + 1];
    }
    function ci(t, e, n, r, i) {
      if (i === void 0) {
        i = "decorators-and-blocks";
      }
      if ("move" === e && "character" === r && !t.isCollapsed()) {
        var _ref21 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e96 = _ref21[0],
          _r47 = _ref21[1];
        return (_r47.set(_e96.key, _e96.offset, _e96.type), !0);
      }
      var o = Tl(t.focus, n ? "previous" : "next"),
        s = "lineboundary" === r,
        l = "move" === e;
      var c = o,
        a = "decorators-and-blocks" === i;
      if (!Dl(c)) {
        for (var _t150 of c) {
          a = !1;
          var _e97 = _t150.origin;
          if (
            !Bi(_e97) ||
            _e97.isIsolated() ||
            ((c = _t150), !s || !_e97.isInline())
          )
            break;
        }
        if (a)
          for (var _t151 of hl(o).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (tl(_t151)) _t151.origin.isInline() || (c = _t151);
            else {
              if (Li(_t151.origin)) continue;
              Bi(_t151.origin) && !_t151.origin.isInline() && (c = _t151);
            }
            break;
          }
      }
      if (c === o) return !1;
      if (l && !s && Bi(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t152 = Vr();
        return (_t152.add(c.origin.getKey()), Lo(_t152), !0);
      }
      return ((c = wl(c)), l && Nl(t.anchor, c), Nl(t.focus, c), a || !s);
    }
    var ai = null,
      ui = null,
      fi = !1,
      di = !1,
      hi = 0;
    var gi = { characterData: !0, childList: !0, subtree: !0 };
    function _i() {
      return fi || (null !== ai && ai._readOnly);
    }
    function pi() {
      fi && t(13);
    }
    function yi() {
      hi > 99 && t(14);
    }
    function mi() {
      return (null === ai && t(195, Ci()), ai);
    }
    function xi() {
      return (null === ui && t(337, Ci()), ui);
    }
    function Ci() {
      var t = 0;
      var e = new Set(),
        n = _io.version;
      if ("undefined" != typeof window)
        for (var _r48 of document.querySelectorAll("[contenteditable]")) {
          var _i39 = yo(_r48);
          if (_o(_i39)) t++;
          else if (_i39) {
            var _t153 = String(_i39.constructor.version || "<0.17.1");
            (_t153 === n &&
              (_t153 +=
                " (separately built, likely a bundler configuration issue)"),
              e.add(_t153));
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
    function Si() {
      return ui;
    }
    function Ti(t, e, n) {
      var r = e.__type,
        i = co(t, r);
      var o = n.get(r);
      void 0 === o && ((o = Array.from(i.transforms)), n.set(r, o));
      var s = o.length;
      for (var _t154 = 0; _t154 < s && (o[_t154](e), e.isAttached()); _t154++);
    }
    function Ni(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function vi(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var r = e;
      Array.isArray(e) || (r = [e]);
      for (var _t155 of r) n.add(_t155);
    }
    function ki(e, n) {
      var r = e.type,
        i = n.get(r);
      void 0 === i && t(17, r);
      var o = i.klass;
      e.type !== o.getType() && t(18, o.name);
      var s = o.importJSON(e),
        l = e.children;
      if (Li(s) && Array.isArray(l))
        for (var _t156 = 0; _t156 < l.length; _t156++) {
          var _e98 = ki(l[_t156], n);
          s.append(_e98);
        }
      return s;
    }
    function Oi(t, e, n) {
      var r = ai,
        i = fi,
        o = ui;
      ((ai = e), (fi = !0), (ui = t));
      try {
        return n();
      } finally {
        ((ai = r), (fi = i), (ui = o));
      }
    }
    function Mi(t, e) {
      var n = t._pendingEditorState,
        r = t._rootElement,
        i = t._headless || null === r;
      if (null === n)
        return void (t._deferred.length > 0 && Ai(t, t._deferred));
      var o = t._editorState,
        s = o._selection,
        l = n._selection,
        c = 0 !== t._dirtyType,
        a = ai,
        u = fi,
        f = ui,
        d = t._updating,
        h = t._observer;
      var g = null;
      if (
        ((t._pendingEditorState = null),
        (t._editorState = n),
        !i && c && null !== h)
      ) {
        ((ui = t), (ai = n), (fi = !1), (t._updating = !0));
        try {
          var _e99 = t._dirtyType,
            _r49 = t._dirtyElements,
            _i40 = t._dirtyLeaves;
          (h.disconnect(), (g = ne(o, n, t, _e99, _r49, _i40)));
        } catch (e) {
          if ((e instanceof Error && t._onError(e), di)) throw e;
          return (
            Zi(t, null, r, n),
            Q(t),
            (t._dirtyType = 2),
            (di = !0),
            Mi(t, o),
            void (di = !1)
          );
        } finally {
          (h.observe(r, gi), (t._updating = d), (ai = a), (fi = u), (ui = f));
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
          var i = e._nodeMap;
          var o;
          for (o in r) i.has(o) || (r === n && (r = Io(t)), delete r[o]);
        })(t, n));
      var C = i ? null : Cs(fs(t));
      if (
        t._editable &&
        null !== C &&
        (c || null === l || l.dirty || !l.is(s)) &&
        null !== r &&
        !m.has(Vn)
      ) {
        ((ui = t), (ai = n));
        try {
          if ((null !== h && h.disconnect(), c || null === l || l.dirty)) {
            var _e100 = t._blockCursorElement;
            (null !== _e100 && xs(_e100, t, r), oi(s, l, t, C, m, r));
          }
          !(function (t, e, n) {
            var r = t._blockCursorElement;
            if (
              Pr(n) &&
              n.isCollapsed() &&
              "element" === n.anchor.type &&
              e.contains(document.activeElement)
            ) {
              var _i41 = n.anchor,
                _o20 = _i41.getNode(),
                _s13 = _i41.offset;
              var _l9 = !1,
                _c8 = null;
              if (_s13 === _o20.getChildrenSize()) {
                ms(_o20.getChildAtIndex(_s13 - 1)) && (_l9 = !0);
              } else {
                var _e101 = _o20.getChildAtIndex(_s13);
                if (null !== _e101 && ms(_e101)) {
                  var _n74 = _e101.getPreviousSibling();
                  (null === _n74 || ms(_n74)) &&
                    ((_l9 = !0), (_c8 = t.getElementByKey(_e101.__key)));
                }
              }
              if (_l9) {
                var _n75 = t.getElementByKey(_o20.__key);
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
                            var _t157 = Kl(r);
                            r = e.blockCursor = _t157;
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
                    ? _n75.appendChild(r)
                    : _n75.insertBefore(r, _c8))
                );
              }
            }
            null !== r && xs(r, t, e);
          })(t, r, l);
        } finally {
          (null !== h && h.observe(r, gi), (ui = f), (ai = a));
        }
      }
      (null !== g &&
        (function (t, e, n, r, i) {
          var o = Array.from(t._listeners.mutation),
            s = o.length;
          for (var _t158 = 0; _t158 < s; _t158++) {
            var _o$_t = o[_t158],
              _s14 = _o$_t[0],
              _l0 = _o$_t[1];
            for (var _t159 of _l0) {
              var _o21 = e.get(_t159);
              void 0 !== _o21 &&
                _s14(_o21, {
                  dirtyLeaves: r,
                  prevEditorState: i,
                  updateTags: n,
                });
            }
          }
        })(t, g, m, _, o),
        Pr(l) ||
          null === l ||
          (null !== s && s.is(l)) ||
          t.dispatchCommand(oe, void 0));
      var S = t._pendingDecorators;
      (null !== S &&
        ((t._decorators = S),
        (t._pendingDecorators = null),
        Ei("decorator", t, !0, S)),
        (function (t, e, n) {
          var r = Po(e),
            i = Po(n);
          r !== i && Ei("textcontent", t, !0, i);
        })(t, e || o, n),
        Ei("update", t, !0, {
          dirtyElements: p,
          dirtyLeaves: _,
          editorState: n,
          mutatedNodes: g,
          normalizedNodes: y,
          prevEditorState: e || o,
          tags: m,
        }),
        Ai(t, x),
        (function (t) {
          var e = t._updates;
          if (0 === e.length) return void (t._cascadeCount = 0);
          if (t._cascadeCount++ > 99) {
            ((t._updates = []), (t._cascadeCount = 0));
            try {
              z(
                "One or more update listeners are endlessly enqueueing more updates. May have encountered infinite recursion caused by update listeners that trigger additional updates without a stop condition.",
              );
            } catch (e) {
              e instanceof Error && t._onError(e);
            }
            return;
          }
          var n = e.shift();
          if (n) {
            var _e102 = n[0],
              _r50 = n[1];
            Di(t, _e102, _r50);
          }
        })(t));
    }
    function Ei(t, e, n) {
      var i = e._updating;
      e._updating = n;
      try {
        var _n76 = e._listeners[t],
          _i42 = Array.from(_n76);
        for (
          var _len4 = arguments.length,
            r = new Array(_len4 > 3 ? _len4 - 3 : 0),
            _key4 = 3;
          _key4 < _len4;
          _key4++
        ) {
          r[_key4 - 3] = arguments[_key4];
        }
        for (var _ref23 of _i42) {
          var _t160 = _ref23[0];
          var _e103 = _ref23[1];
          {
            _e103 && _e103();
            var _i43 = _t160.apply(void 0, r);
            _n76.has(_t160) ? _n76.set(_t160, _i43) : _i43 && _i43();
          }
        }
      } finally {
        e._updating = i;
      }
    }
    function bi(t, e, n, r) {
      var i = Bo(t);
      var o;
      for (var _t161 = 4; _t161 >= 0; _t161--) {
        var _loop = function _loop() {
            var l = i[_s15];
            if (_s15 > 0 && l._updating) {
              o = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e104 = c[_t161];
              if (_e104.size > 0) {
                var _t162 = !1;
                if (
                  (Ii(l, function () {
                    for (var _i44 of _e104)
                      if (_i44(n, r)) return void (_t162 = !0);
                  }),
                  _t162)
                )
                  return { v: _t162 };
              }
            }
          },
          _ret;
        for (var _s15 = 0; _s15 < i.length; _s15++) {
          _ret = _loop();
          if (_ret === 0) break;
          if (_ret) return _ret.v;
        }
      }
      return (
        o &&
          o.update(function () {
            bi(o, e, n, r);
          }),
        !1
      );
    }
    function Ai(t, e) {
      if (((t._deferred = []), 0 !== e.length)) {
        var _n77 = t._updating;
        t._updating = !0;
        try {
          for (var _t163 = 0; _t163 < e.length; _t163++) e[_t163]();
        } finally {
          t._updating = _n77;
        }
      }
    }
    function wi(e, n) {
      var r = e._updates;
      var i = n || !1;
      for (; 0 !== r.length; ) {
        var _n78 = r.shift();
        if (_n78) {
          var _r51 = _n78[0],
            _o22 = _n78[1],
            _s16 = e._pendingEditorState;
          var _l1 = void 0;
          (void 0 !== _o22 &&
            ((_l1 = _o22.onUpdate),
            _o22.skipTransforms && (i = !0),
            _o22.discrete && (null === _s16 && t(191), (_s16._flushSync = !0)),
            _l1 && e._deferred.push(_l1),
            vi(e, _o22.tag)),
            null == _s16 ? Di(e, _r51, _o22) : _r51());
        }
      }
      return i;
    }
    function Di(e, n, r) {
      var i = e._updateTags;
      var o,
        s = !1,
        l = !1;
      (void 0 !== r &&
        ((o = r.onUpdate),
        vi(e, r.tag),
        (s = r.skipTransforms || !1),
        (l = r.discrete || !1)),
        o && e._deferred.push(o));
      var c = e._editorState;
      var a = e._pendingEditorState,
        u = !1;
      ((null === a || a._readOnly) &&
        ((a = e._pendingEditorState = Ui(a || c)), (u = !0)),
        (a._flushSync = l));
      var f = ai,
        d = fi,
        h = ui,
        g = e._updating;
      ((ai = a), (fi = !1), (e._updating = !0), (ui = e));
      var _ = e._headless || null === e.getRootElement();
      so(null);
      try {
        u &&
          (_
            ? null !== c._selection && (a._selection = c._selection.clone())
            : (a._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  r = Cs(fs(t));
                return Pr(n) || null == n ? qr(n, r, t, e) : n.clone();
              })(e, (r && r.event) || null)));
        var _i45 = e._compositionKey;
        (n(),
          (s = wi(e, s)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              r = t._selection;
            if (Pr(r)) {
              var _t164 = r.anchor,
                _e105 = r.focus;
              var _i46;
              if (
                ("text" === _t164.type &&
                  ((_i46 = _t164.getNode()), _i46.selectionTransform(n, r)),
                "text" === _e105.type)
              ) {
                var _t165 = _e105.getNode();
                _i46 !== _t165 && _t165.selectionTransform(n, r);
              }
            }
          })(a, e),
          0 !== e._dirtyType &&
            (s
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    r = t._nodeMap;
                  for (var _t166 of n) {
                    var _e106 = r.get(_t166);
                    vr(_e106) &&
                      _e106.isAttached() &&
                      _e106.isSimpleText() &&
                      !_e106.isUnmergeable() &&
                      dt(_e106);
                  }
                })(a, e)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    r = e._dirtyElements,
                    i = t._nodeMap,
                    o = Eo(),
                    s = new Map();
                  var l = n,
                    c = l.size,
                    a = r,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t167 of l) {
                        var _r52 = i.get(_t167);
                        (vr(_r52) &&
                          _r52.isAttached() &&
                          _r52.isSimpleText() &&
                          !_r52.isUnmergeable() &&
                          dt(_r52),
                          void 0 !== _r52 && Ni(_r52, o) && Ti(e, _r52, s),
                          n.add(_t167));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        hi++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t168 of a) {
                      var _n79 = _t168[0],
                        _l10 = _t168[1];
                      if ((r.set(_n79, _l10), !_l10)) continue;
                      var _c9 = i.get(_n79);
                      void 0 !== _c9 && Ni(_c9, o) && Ti(e, _c9, s);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      hi++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = r));
                })(a, e),
            wi(e),
            (function (t, e, n, r) {
              var i = t._nodeMap,
                o = e._nodeMap,
                s = [];
              for (var _ref25 of r) {
                var _t169 = _ref25[0];
                {
                  var _e107 = o.get(_t169);
                  void 0 !== _e107 &&
                    (_e107.isAttached() ||
                      (Li(_e107) && W(_e107, _t169, i, o, s, r),
                      i.has(_t169) || r["delete"](_t169),
                      s.push(_t169)));
                }
              }
              for (var _t170 of s) o["delete"](_t170);
              for (var _t171 of n) {
                var _e108 = o.get(_t171);
                void 0 === _e108 ||
                  _e108.isAttached() ||
                  (i.has(_t171) || n["delete"](_t171), o["delete"](_t171));
              }
            })(c, a, e._dirtyLeaves, e._dirtyElements)));
        _i45 !== e._compositionKey && (a._flushSync = !0);
        var _o23 = a._selection;
        if (Pr(_o23)) {
          var _e109 = a._nodeMap,
            _n80 = _o23.anchor.key,
            _r53 = _o23.focus.key;
          (void 0 !== _e109.get(_n80) && void 0 !== _e109.get(_r53)) || t(19);
        } else Rr(_o23) && 0 === _o23._nodes.size && (a._selection = null);
      } catch (t) {
        return (
          t instanceof Error && e._onError(t),
          (e._pendingEditorState = c),
          (e._dirtyType = 2),
          e._cloneNotNeeded.clear(),
          (e._dirtyLeaves = new Set()),
          e._dirtyElements.clear(),
          void Mi(e)
        );
      } finally {
        ((ai = f), (fi = d), (ui = h), (e._updating = g), (hi = 0));
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
          ? ((a._flushSync = !1), Mi(e))
          : u &&
            uo(function () {
              Mi(e);
            })
        : ((a._flushSync = !1),
          u && (i.clear(), (e._deferred = []), (e._pendingEditorState = null)));
    }
    function Ii(t, e, n) {
      ui === t && void 0 === n ? e() : Di(t, e, n);
    }
    var _Pi = (function () {
      function Pi(t, e, n) {
        ((this.element = t),
          (this.before = e || null),
          (this.after = n || null));
      }
      var _proto1 = Pi.prototype;
      _proto1.withBefore = function withBefore(t) {
        return new Pi(this.element, t, this.after);
      };
      _proto1.withAfter = function withAfter(t) {
        return new Pi(this.element, this.before, t);
      };
      _proto1.withElement = function withElement(t) {
        return this.element === t ? this : new Pi(t, this.before, this.after);
      };
      _proto1.insertChild = function insertChild(e) {
        var n = this.before || this.getManagedLineBreak();
        return (
          null !== n && n.parentElement !== this.element && t(222),
          this.element.insertBefore(e, n),
          this
        );
      };
      _proto1.removeChild = function removeChild(e) {
        return (
          e.parentElement !== this.element && t(223),
          this.element.removeChild(e),
          this
        );
      };
      _proto1.replaceChild = function replaceChild(e, n) {
        return (
          n.parentElement !== this.element && t(224),
          this.element.replaceChild(e, n),
          this
        );
      };
      _proto1.getFirstChild = function getFirstChild() {
        var t = this.after ? this.after.nextSibling : this.element.firstChild;
        return t === this.before || t === this.getManagedLineBreak() ? null : t;
      };
      _proto1.getManagedLineBreak = function getManagedLineBreak() {
        return this.element.__lexicalLineBreak || null;
      };
      _proto1.setManagedLineBreak = function setManagedLineBreak(t) {
        if (((this.element.__lexicalLastChildKind = t), null === t))
          this.removeManagedLineBreak();
        else {
          var _e110 = "decorator" === t && (d || l || a);
          this.insertManagedLineBreak(_e110);
        }
      };
      _proto1.removeManagedLineBreak = function removeManagedLineBreak() {
        var t = this.getManagedLineBreak();
        if (t) {
          var _e111 = this.element,
            _n81 = "IMG" === t.nodeName ? t.nextSibling : null;
          (_n81 && _e111.removeChild(_n81),
            _e111.removeChild(t),
            (_e111.__lexicalLineBreak = void 0));
        }
      };
      _proto1.insertManagedLineBreak = function insertManagedLineBreak(t) {
        var e = this.getManagedLineBreak();
        if (e) {
          if (t === ("IMG" === e.nodeName)) return;
          this.removeManagedLineBreak();
        }
        var n = this.element,
          r = this.before,
          i = document.createElement("br");
        if ((n.insertBefore(i, r), t)) {
          var _t172 = document.createElement("img");
          (_t172.setAttribute("data-lexical-linebreak", "true"),
            _t172.style.setProperty("display", "inline", "important"),
            _t172.style.setProperty("border", "0px", "important"),
            _t172.style.setProperty("margin", "0px", "important"),
            (_t172.alt = ""),
            n.insertBefore(_t172, i),
            (n.__lexicalLineBreak = _t172));
        } else n.__lexicalLineBreak = i;
      };
      _proto1.getFirstChildOffset = function getFirstChildOffset() {
        var t = 0;
        for (
          var _e112 = this.after;
          null !== _e112;
          _e112 = _e112.previousSibling
        )
          t++;
        return t;
      };
      _proto1.resolveChildIndex = function resolveChildIndex(t, e, n, r) {
        if (n === this.element) {
          var _e113 = this.getFirstChildOffset();
          return [t, Math.min(_e113 + t.getChildrenSize(), Math.max(_e113, r))];
        }
        var i = Fi(e, n);
        i.push(r);
        var o = Fi(e, this.element);
        var s = t.getIndexWithinParent();
        for (var _t173 = 0; _t173 < o.length; _t173++) {
          var _e114 = i[_t173],
            _n82 = o[_t173];
          if (void 0 === _e114 || _e114 < _n82) break;
          if (_e114 > _n82) {
            s += 1;
            break;
          }
        }
        return [t.getParentOrThrow(), s];
      };
      return Pi;
    })();
    function Fi(e, n) {
      var r = [];
      var i = n;
      for (; i !== e && null !== i; i = i.parentNode) {
        var _t174 = 0;
        for (
          var _e115 = i.previousSibling;
          null !== _e115;
          _e115 = _e115.previousSibling
        )
          _t174++;
        r.push(_t174);
      }
      return (i !== e && t(225), r.reverse());
    }
    var _Ri4 = (function (_jn3) {
      function Ri(t) {
        var _this3;
        ((_this3 = _jn3.call(this, t) || this),
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
      babelHelpers.inheritsLoose(Ri, _jn3);
      var _proto10 = Ri.prototype;
      _proto10.afterCloneFrom = function afterCloneFrom(t) {
        (_jn3.prototype.afterCloneFrom.call(this, t),
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
      _proto10.getFormat = function getFormat() {
        return this.getLatest().__format;
      };
      _proto10.getFormatType = function getFormatType() {
        var t = this.getFormat();
        return I[t] || "";
      };
      _proto10.getStyle = function getStyle() {
        return this.getLatest().__style;
      };
      _proto10.getIndent = function getIndent() {
        return this.getLatest().__indent;
      };
      _proto10.getChildren = function getChildren() {
        var t = [];
        var e = this.getFirstChild();
        for (; null !== e; ) (t.push(e), (e = e.getNextSibling()));
        return t;
      };
      _proto10.getChildrenKeys = function getChildrenKeys() {
        var t = [];
        var e = this.getFirstChild();
        for (; null !== e; ) (t.push(e.__key), (e = e.getNextSibling()));
        return t;
      };
      _proto10.getChildrenSize = function getChildrenSize() {
        return this.getLatest().__size;
      };
      _proto10.isEmpty = function isEmpty() {
        return 0 === this.getChildrenSize();
      };
      _proto10.isDirty = function isDirty() {
        var t = xi()._dirtyElements;
        return null !== t && t.has(this.__key);
      };
      _proto10.isLastChild = function isLastChild() {
        var t = this.getLatest(),
          e = this.getParentOrThrow().getLastChild();
        return null !== e && e.is(t);
      };
      _proto10.getAllTextNodes = function getAllTextNodes() {
        var t = [];
        var e = this.getFirstChild();
        for (; null !== e; ) {
          if ((vr(e) && t.push(e), Li(e))) {
            var _n83 = e.getAllTextNodes();
            t.push.apply(t, _n83);
          }
          e = e.getNextSibling();
        }
        return t;
      };
      _proto10.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; Li(t); ) {
          var _e116 = t.getFirstChild();
          if (null === _e116) break;
          t = _e116;
        }
        return t;
      };
      _proto10.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; Li(t); ) {
          var _e117 = t.getLastChild();
          if (null === _e117) break;
          t = _e117;
        }
        return t;
      };
      _proto10.getDescendantByIndex = function getDescendantByIndex(t) {
        var e = this.getChildren(),
          n = e.length;
        if (t >= n) {
          var _t175 = e[n - 1];
          return (Li(_t175) && _t175.getLastDescendant()) || _t175 || null;
        }
        var r = e[t];
        return (Li(r) && r.getFirstDescendant()) || r || null;
      };
      _proto10.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : bo(t);
      };
      _proto10.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var e = this.getFirstChild();
        return (null === e && t(45, this.__key), e);
      };
      _proto10.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : bo(t);
      };
      _proto10.getLastChildOrThrow = function getLastChildOrThrow() {
        var e = this.getLastChild();
        return (null === e && t(96, this.__key), e);
      };
      _proto10.getChildAtIndex = function getChildAtIndex(t) {
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
      _proto10.getTextContent = function getTextContent() {
        var t = "";
        var e = this.getChildren(),
          n = e.length;
        for (var _r54 = 0; _r54 < n; _r54++) {
          var _i47 = e[_r54];
          ((t += _i47.getTextContent()),
            Li(_i47) && _r54 !== n - 1 && !_i47.isInline() && (t += v));
        }
        return t;
      };
      _proto10.getTextContentSize = function getTextContentSize() {
        var t = 0;
        var e = this.getChildren(),
          n = e.length;
        for (var _r55 = 0; _r55 < n; _r55++) {
          var _i48 = e[_r55];
          ((t += _i48.getTextContentSize()),
            Li(_i48) && _r55 !== n - 1 && !_i48.isInline() && (t += 2));
        }
        return t;
      };
      _proto10.getDirection = function getDirection() {
        return this.getLatest().__dir;
      };
      _proto10.getTextFormat = function getTextFormat() {
        return this.getLatest().__textFormat;
      };
      _proto10.hasFormat = function hasFormat(t) {
        if ("" !== t) {
          var _e118 = D[t];
          return 0 !== (this.getFormat() & _e118);
        }
        return !1;
      };
      _proto10.hasTextFormat = function hasTextFormat(t) {
        var e = A[t];
        return 0 !== (this.getTextFormat() & e);
      };
      _proto10.getFormatFlags = function getFormatFlags(t, e) {
        return No(this.getLatest().__textFormat, t, e);
      };
      _proto10.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto10.select = function select(t, e) {
        pi();
        var n = Xr();
        var r = t,
          i = e;
        var o = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t176 = this.getFirstChild();
            if (vr(_t176) || Li(_t176)) return _t176.select(0, 0);
          } else if (
            !((void 0 !== t && t !== o) || (void 0 !== e && e !== o))
          ) {
            var _t177 = this.getLastChild();
            if (vr(_t177) || Li(_t177)) return _t177.select();
          }
        (void 0 === r && (r = o), void 0 === i && (i = o));
        var s = this.__key;
        return Pr(n)
          ? (n.anchor.set(s, r, "element"),
            n.focus.set(s, i, "element"),
            (n.dirty = !0),
            n)
          : Gr(s, r, s, i, "element", "element");
      };
      _proto10.selectStart = function selectStart() {
        var t = this.getFirstDescendant();
        return t ? t.selectStart() : this.select();
      };
      _proto10.selectEnd = function selectEnd() {
        var t = this.getLastDescendant();
        return t ? t.selectEnd() : this.select();
      };
      _proto10.clear = function clear() {
        var t = this.getWritable();
        return (
          this.getChildren().forEach(function (t) {
            return t.remove();
          }),
          t
        );
      };
      _proto10.append = function append() {
        for (
          var _len5 = arguments.length, t = new Array(_len5), _key5 = 0;
          _key5 < _len5;
          _key5++
        ) {
          t[_key5] = arguments[_key5];
        }
        return this.splice(this.getChildrenSize(), 0, t);
      };
      _proto10.setDirection = function setDirection(t) {
        var e = this.getWritable();
        return ((e.__dir = t), e);
      };
      _proto10.setFormat = function setFormat(t) {
        return ((this.getWritable().__format = ("" !== t && D[t]) || 0), this);
      };
      _proto10.setStyle = function setStyle(t) {
        return ((this.getWritable().__style = t || ""), this);
      };
      _proto10.setTextFormat = function setTextFormat(t) {
        var e = this.getWritable();
        return ((e.__textFormat = t), e);
      };
      _proto10.setTextStyle = function setTextStyle(t) {
        var e = this.getWritable();
        return ((e.__textStyle = t), e);
      };
      _proto10.setIndent = function setIndent(t) {
        return ((this.getWritable().__indent = t), this);
      };
      _proto10.splice = function splice(e, n, r) {
        Un(this) && t(324, this.__key, this.__type);
        var i = this.getChildrenSize(),
          o = this.getWritable();
        e + n <= i || t(226, String(e), String(n), String(i));
        var s = o.__key,
          l = [],
          c = [],
          a = this.getChildAtIndex(e + n);
        var u = null,
          f = i - n + r.length;
        if (0 !== e)
          if (e === i) u = this.getLastChild();
          else {
            var _t178 = this.getChildAtIndex(e);
            null !== _t178 && (u = _t178.getPreviousSibling());
          }
        if (n > 0) {
          var _e119 = null === u ? this.getFirstChild() : u.getNextSibling();
          for (var _r56 = 0; _r56 < n; _r56++) {
            null === _e119 && t(100);
            var _n84 = _e119.getNextSibling(),
              _r57 = _e119.__key;
            (ko(_e119.getWritable()), c.push(_r57), (_e119 = _n84));
          }
        }
        var d = u;
        for (var _e120 of r) {
          null !== d && _e120.is(d) && (u = d = d.getPreviousSibling());
          var _n85 = _e120.getWritable();
          (_n85.__parent === s && f--, ko(_n85));
          var _r58 = _e120.__key;
          if (null === d) ((o.__first = _r58), (_n85.__prev = null));
          else {
            var _t179 = d.getWritable();
            ((_t179.__next = _r58), (_n85.__prev = _t179.__key));
          }
          (_e120.__key === s && t(76),
            (_n85.__parent = s),
            l.push(_r58),
            (d = _e120));
        }
        if (e + n === i) {
          if (null !== d) {
            ((d.getWritable().__next = null), (o.__last = d.__key));
          }
        } else if (null !== a) {
          var _t180 = a.getWritable();
          if (null !== d) {
            var _e121 = d.getWritable();
            ((_t180.__prev = d.__key), (_e121.__next = a.__key));
          } else _t180.__prev = null;
        }
        if (((o.__size = f), c.length)) {
          var _t181 = Xr();
          if (Pr(_t181)) {
            var _e122 = new Set(c),
              _n86 = new Set(l),
              _r59 = _t181.anchor,
              _i49 = _t181.focus;
            (Ki(_r59, _e122, _n86) && ei(_r59, _r59.getNode(), this, u, a),
              Ki(_i49, _e122, _n86) && ei(_i49, _i49.getNode(), this, u, a),
              0 !== f || this.canBeEmpty() || hs(this) || this.remove());
          }
        }
        return o;
      };
      _proto10.getDOMSlot = function getDOMSlot(t) {
        return new _Pi(t);
      };
      _proto10.exportDOM = function exportDOM(t) {
        var _jn3$prototype$export = _jn3.prototype.exportDOM.call(this, t),
          e = _jn3$prototype$export.element;
        if (Ts(e)) {
          var _t182 = this.getIndent();
          _t182 > 0 &&
            ((e.style.paddingInlineStart = 40 * _t182 + "px"),
            e.setAttribute("data-lexical-indent", String(_t182)));
          var _n87 = this.getDirection();
          _n87 && (e.dir = _n87);
        }
        return { element: e };
      };
      _proto10.exportJSON = function exportJSON() {
        var t = babelHelpers["extends"](
            {
              children: [],
              direction: this.getDirection(),
              format: this.getFormatType(),
              indent: this.getIndent(),
            },
            _jn3.prototype.exportJSON.call(this),
          ),
          e = this.getTextFormat(),
          n = this.getTextStyle();
        return (
          (0 === e && "" === n) ||
            hs(this) ||
            this.getChildren().some(vr) ||
            (0 !== e && (t.textFormat = e), "" !== n && (t.textStyle = n)),
          t
        );
      };
      _proto10.updateFromJSON = function updateFromJSON(t) {
        return _jn3.prototype.updateFromJSON
          .call(this, t)
          .setFormat(t.format)
          .setIndent(t.indent)
          .setDirection(t.direction)
          .setTextFormat(t.textFormat || 0)
          .setTextStyle(t.textStyle || "");
      };
      _proto10.insertNewAfter = function insertNewAfter(t, e) {
        return null;
      };
      _proto10.canIndent = function canIndent() {
        return !0;
      };
      _proto10.collapseAtStart = function collapseAtStart(t) {
        return !1;
      };
      _proto10.excludeFromCopy = function excludeFromCopy(t) {
        return !1;
      };
      _proto10.canReplaceWith = function canReplaceWith(t) {
        return !0;
      };
      _proto10.canInsertAfter = function canInsertAfter(t) {
        return !0;
      };
      _proto10.canBeEmpty = function canBeEmpty() {
        return !0;
      };
      _proto10.canInsertTextBefore = function canInsertTextBefore() {
        return !0;
      };
      _proto10.canInsertTextAfter = function canInsertTextAfter() {
        return !0;
      };
      _proto10.isInline = function isInline() {
        return !1;
      };
      _proto10.isShadowRoot = function isShadowRoot() {
        return !1;
      };
      _proto10.canMergeWith = function canMergeWith(t) {
        return !1;
      };
      _proto10.extractWithChild = function extractWithChild(t, e, n) {
        return !1;
      };
      _proto10.canMergeWhenEmpty = function canMergeWhenEmpty() {
        return !1;
      };
      _proto10.reconcileObservedMutation = function reconcileObservedMutation(
        t,
        e,
      ) {
        var n = ws(e).$getDOMSlot(this, t, e);
        var r = n.getFirstChild();
        for (
          var _t183 = this.getFirstChild();
          _t183;
          _t183 = _t183.getNextSibling()
        ) {
          var _i50 = e.getElementByKey(_t183.getKey());
          null !== _i50 &&
            (null == r
              ? (n.insertChild(_i50), (r = _i50))
              : r !== _i50 && n.replaceChild(_i50, r),
            (r = r.nextSibling));
        }
      };
      return Ri;
    })(_jn5);
    function Li(t) {
      return t instanceof _Ri4;
    }
    function Ki(t, e, n) {
      var r = t.getNode();
      for (; r; ) {
        var _t184 = r.__key;
        if (e.has(_t184) && !n.has(_t184)) return !0;
        r = r.getParent();
      }
      return !1;
    }
    var _$i = (function (_jn4) {
      function $i() {
        return _jn4.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose($i, _jn4);
      var _proto11 = $i.prototype;
      _proto11.decorate = function decorate(t, e) {
        return null;
      };
      _proto11.isIsolated = function isIsolated() {
        return !1;
      };
      _proto11.isInline = function isInline() {
        return !0;
      };
      _proto11.isKeyboardSelectable = function isKeyboardSelectable() {
        return !0;
      };
      return $i;
    })(_jn5);
    function Bi(t) {
      return t instanceof _$i;
    }
    var _zi = (function (_Ri) {
      function zi() {
        var _this4;
        ((_this4 = _Ri.call(this, "root") || this),
          (_this4.__cachedText = null));
        return _this4;
      }
      babelHelpers.inheritsLoose(zi, _Ri);
      zi.getType = function getType() {
        return "root";
      };
      zi.clone = function clone() {
        return new zi();
      };
      var _proto12 = zi.prototype;
      _proto12.getTopLevelElementOrThrow =
        function getTopLevelElementOrThrow() {
          t(51);
        };
      _proto12.getTextContent = function getTextContent() {
        var t = this.__cachedText;
        return (!_i() && 0 !== xi()._dirtyType) || null === t
          ? _Ri.prototype.getTextContent.call(this)
          : t;
      };
      _proto12.remove = function remove() {
        t(52);
      };
      _proto12.replace = function replace(e) {
        t(53);
      };
      _proto12.insertBefore = function insertBefore(e) {
        t(54);
      };
      _proto12.insertAfter = function insertAfter(e) {
        t(55);
      };
      _proto12.updateDOM = function updateDOM(t, e) {
        return !1;
      };
      _proto12.splice = function splice(e, n, r) {
        for (var _e123 of r) Li(_e123) || Bi(_e123) || t(282);
        return _Ri.prototype.splice.call(this, e, n, r);
      };
      zi.importJSON = function importJSON(t) {
        return Fo().updateFromJSON(t);
      };
      _proto12.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return zi;
    })(_Ri4);
    function Wi(t) {
      return t instanceof _zi;
    }
    function Ui(t) {
      return new _Ji($(t._nodeMap));
    }
    function Yi() {
      return new _Ji(new Map([["root", new _zi()]]));
    }
    function ji(e) {
      var n = e.exportJSON(),
        r = e.constructor;
      if ((n.type !== r.getType() && t(130, r.name), Li(e))) {
        var _i51 = n.children;
        Array.isArray(_i51) || t(59, r.name);
        var _o24 = e.getChildren();
        for (var _t185 = 0; _t185 < _o24.length; _t185++) {
          var _e124 = ji(_o24[_t185]);
          _i51.push(_e124);
        }
      }
      return n;
    }
    var _Ji = (function () {
      function Ji(t, e) {
        ((this._nodeMap = t),
          (this._selection = e || null),
          (this._flushSync = !1),
          (this._readOnly = !1));
      }
      var _proto13 = Ji.prototype;
      _proto13.isEmpty = function isEmpty() {
        return 1 === this._nodeMap.size && null === this._selection;
      };
      _proto13.read = function read(t, e) {
        return Oi((e && e.editor) || null, this, t);
      };
      _proto13.clone = function clone(t) {
        var e = new Ji(this._nodeMap, void 0 === t ? this._selection : t);
        return ((e._readOnly = !0), e);
      };
      _proto13.toJSON = function toJSON() {
        return Oi(null, this, function () {
          return { root: ji(Fo()) };
        });
      };
      return Ji;
    })();
    var _Gi = (function (_Ri2) {
      function Gi() {
        return _Ri2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Gi, _Ri2);
      Gi.getType = function getType() {
        return "artificial";
      };
      var _proto14 = Gi.prototype;
      _proto14.createDOM = function createDOM(t) {
        return document.createElement("div");
      };
      return Gi;
    })(_Ri4);
    var _Hi = (function (_Ri3) {
      function Hi() {
        return _Ri3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Hi, _Ri3);
      Hi.getType = function getType() {
        return "paragraph";
      };
      Hi.clone = function clone(t) {
        return new Hi(t.__key);
      };
      var _proto15 = Hi.prototype;
      _proto15.createDOM = function createDOM(t) {
        var e = document.createElement("p"),
          n = Qo(t.theme, "paragraph");
        if (void 0 !== n) {
          var _e$classList2;
          (_e$classList2 = e.classList).add.apply(_e$classList2, n);
        }
        return e;
      };
      _proto15.updateDOM = function updateDOM(t, e, n) {
        return !1;
      };
      Hi.importDOM = function importDOM() {
        return {
          p: function p(t) {
            return { conversion: Vi, priority: 0 };
          },
        };
      };
      _proto15.exportDOM = function exportDOM(t) {
        var _Ri3$prototype$export = _Ri3.prototype.exportDOM.call(this, t),
          e = _Ri3$prototype$export.element;
        if (Ts(e)) {
          this.isEmpty() && e.append(document.createElement("br"));
          var _t186 = this.getFormatType();
          _t186 && (e.style.textAlign = _t186);
        }
        return { element: e };
      };
      Hi.importJSON = function importJSON(t) {
        return qi().updateFromJSON(t);
      };
      _proto15.exportJSON = function exportJSON() {
        var t = _Ri3.prototype.exportJSON.call(this);
        if (void 0 === t.textFormat || void 0 === t.textStyle) {
          var _e125 = this.getChildren().find(vr);
          _e125
            ? ((t.textFormat = _e125.getFormat()),
              (t.textStyle = _e125.getStyle()))
            : ((t.textFormat = this.getTextFormat()),
              (t.textStyle = this.getTextStyle()));
        }
        return t;
      };
      _proto15.insertNewAfter = function insertNewAfter(t, e) {
        var n = qi();
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
      _proto15.collapseAtStart = function collapseAtStart() {
        var t = this.getChildren();
        if (
          0 === t.length ||
          (vr(t[0]) && "" === t[0].getTextContent().trim())
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return Hi;
    })(_Ri4);
    function Vi(t) {
      var e = qi();
      if ((Ks(e, t), Rs(t, e), "" === e.getFormatType())) {
        var _n88 = t.getAttribute("align");
        _n88 && _n88 && _n88 in D && e.setFormat(_n88);
      }
      return (Ls(e, t), { node: e });
    }
    function qi() {
      return _s(new _Hi());
    }
    function Xi(t) {
      return t instanceof _Hi;
    }
    var Qi = 0;
    function Zi(t, e, n, r, i) {
      var o = t._keyToDOMMap;
      (o.clear(),
        (t._editorState = Yi()),
        (t._pendingEditorState = r),
        (t._compositionKey = null),
        (t._dirtyType = 0),
        t._cloneNotNeeded.clear(),
        (t._dirtyLeaves = new Set()),
        t._dirtyElements.clear(),
        (t._normalizedNodes = new Set()),
        (i && i.preserveUpdateQueue) ||
          ((t._updateTags = new Set()),
          (t._updates = []),
          (t._cascadeCount = 0)),
        (t._blockCursorElement = null));
      var s = t._observer;
      (null !== s && (s.disconnect(), (t._observer = null)),
        null !== e && (e.textContent = ""),
        null !== n && ((n.textContent = ""), o.set("root", n)));
    }
    function to(t) {
      var e = new Set(),
        n = new Set();
      var r = t;
      for (; r; ) {
        var _zs3 = zs(r),
          _t187 = _zs3.ownNodeConfig,
          _i52 = r.transform;
        if (!n.has(_i52)) {
          n.add(_i52);
          var _t188 = r.transform();
          _t188 && e.add(_t188);
        }
        if (_t187) {
          var _n89 = _t187.$transform;
          (_n89 && e.add(_n89), (r = _t187["extends"]));
        } else {
          var _t189 = Object.getPrototypeOf(r);
          r =
            _t189.prototype instanceof _jn5 && _t189 !== _jn5 ? _t189 : void 0;
        }
      }
      return e;
    }
    var eo = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, r) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = ao(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, r, i) {
        return Li(t) && t.extractWithChild(e, n, r);
      },
      $getDOMSlot: function $getDOMSlot(e, n, r) {
        return (Li(e) || t(336, e.getKey(), e.getType()), e.getDOMSlot(n));
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return Li(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, r) {
        return t.updateDOM(e, n, r._config);
      },
    };
    function no(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function ro(t, e, n) {
      return (t.set(e, n), no.bind(null, t, e));
    }
    var _io = (function () {
      function io(t, e, n, r, i, o, s, l) {
        ((this._createEditorArgs = l),
          (this._parentEditor = e),
          (this._rootElement = null),
          (this._editorState = t),
          (this._pendingEditorState = null),
          (this._compositionKey = null),
          (this._deferred = []),
          (this._keyToDOMMap = new _B()),
          (this._updates = []),
          (this._updating = !1),
          (this._cascadeCount = 0),
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
          (this._key = zo()),
          (this._onError = i),
          (this._htmlConversions = o),
          (this._editable = s),
          (this._headless = null !== e && e._headless),
          (this._window = null),
          (this._blockCursorElement = null));
      }
      var _proto16 = io.prototype;
      _proto16.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto16.registerUpdateListener = function registerUpdateListener(t) {
        return ro(this._listeners.update, t);
      };
      _proto16.registerEditableListener = function registerEditableListener(t) {
        return ro(this._listeners.editable, t);
      };
      _proto16.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return ro(this._listeners.decorator, t);
      };
      _proto16.registerTextContentListener =
        function registerTextContentListener(t) {
          return ro(this._listeners.textcontent, t);
        };
      _proto16.registerRootListener = function registerRootListener(t) {
        var _this13 = this;
        var e = this._listeners.root;
        return $l(ro(e, t, t(this._rootElement, null) || void 0), function () {
          return (function (t, e, n) {
            var r = t.get(e);
            (r && r(), t.set(e, e.apply(void 0, n) || void 0));
          })(e, t, [null, _this13._rootElement]);
        });
      };
      _proto16.registerCommand = function registerCommand(e, n, r) {
        void 0 === r && t(35);
        var i = this._commands;
        i.has(e) ||
          i.set(e, [new _L(), new _L(), new _L(), new _L(), new _L()]);
        var o = i.get(e);
        void 0 === o && t(36, String(e));
        var s = (function (t) {
            return 7 & t;
          })(r),
          l = o[s];
        return (
          s !== r ? l.addFront(n) : l.addBack(n),
          function () {
            (l["delete"](n),
              o.every(function (t) {
                return 0 === t.size;
              }) && i["delete"](e));
          }
        );
      };
      _proto16.registerMutationListener = function registerMutationListener(
        t,
        e,
        n,
      ) {
        var r = this.resolveRegisteredNodeAfterReplacements(
            this.getRegisteredNode(t),
          ).klass,
          i = this._listeners.mutation;
        var o = i.get(e);
        (void 0 === o && ((o = new Set()), i.set(e, o)), o.add(r));
        var s = n && n.skipInitialization;
        return (
          (void 0 !== s && s) || this.initializeMutationListener(e, r),
          function () {
            (o["delete"](r), 0 === o.size && i["delete"](e));
          }
        );
      };
      _proto16.getRegisteredNode = function getRegisteredNode(e) {
        var n = this._nodes.get(e.getType());
        return (void 0 === n && t(37, e.name), n);
      };
      _proto16.resolveRegisteredNodeAfterReplacements =
        function resolveRegisteredNodeAfterReplacements(t) {
          for (; t.replaceWithKlass; )
            t = this.getRegisteredNode(t.replaceWithKlass);
          return t;
        };
      _proto16.initializeMutationListener = function initializeMutationListener(
        t,
        e,
      ) {
        var n = this._editorState,
          r = Ps(n).get(e.getType());
        if (!r) return;
        var i = new Map();
        for (var _t190 of r.keys()) i.set(_t190, "created");
        i.size > 0 &&
          t(i, {
            dirtyLeaves: new Set(),
            prevEditorState: n,
            updateTags: new Set(["registerMutationListener"]),
          });
      };
      _proto16.registerNodeTransformToKlass =
        function registerNodeTransformToKlass(t, e) {
          var n = this.getRegisteredNode(t);
          return (n.transforms.add(e), n);
        };
      _proto16.registerNodeTransform = function registerNodeTransform(t, e) {
        var n = this.registerNodeTransformToKlass(t, e),
          r = [n],
          i = n.replaceWithKlass;
        if (null != i) {
          var _t191 = this.registerNodeTransformToKlass(i, e);
          r.push(_t191);
        }
        return (
          (function (t, e) {
            var n = Ps(t.getEditorState()),
              r = [];
            for (var _t192 of e) {
              var _e126 = n.get(_t192);
              _e126 && r.push(_e126);
            }
            if (0 === r.length) return;
            t.update(
              function () {
                for (var _t193 of r)
                  for (var _e127 of _t193.keys()) {
                    var _t194 = bo(_e127);
                    _t194 && _t194.markDirty();
                  }
              },
              null === t._pendingEditorState ? { tag: Jn } : void 0,
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
      _proto16.hasNode = function hasNode(t) {
        return this._nodes.has(t.getType());
      };
      _proto16.hasNodes = function hasNodes(t) {
        return t.every(this.hasNode.bind(this));
      };
      _proto16.dispatchCommand = function dispatchCommand(t, e) {
        return rs(this, t, e);
      };
      _proto16.getDecorators = function getDecorators() {
        return this._decorators;
      };
      _proto16.getRootElement = function getRootElement() {
        return this._rootElement;
      };
      _proto16.getKey = function getKey() {
        return this._key;
      };
      _proto16.setRootElement = function setRootElement(t) {
        var e = this._rootElement;
        if (t !== e) {
          var _e$classList3;
          var _n90 = Qo(this._config.theme, "root"),
            _r60 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            Zi(this, e, t, _r60, { preserveUpdateQueue: !0 }),
            null !== e &&
              (this._config.disableEvents || Bn(e),
              null != _n90 &&
                (_e$classList3 = e.classList).remove.apply(
                  _e$classList3,
                  _n90,
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e128 = us(t),
              _r61 = t.style;
            ((_r61.userSelect = "text"),
              (_r61.whiteSpace = "pre-wrap"),
              (_r61.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e128),
              (this._dirtyType = 2),
              Q(this),
              this._updateTags.add(Jn),
              Mi(this),
              this._config.disableEvents ||
                (function (t, e, _un$get) {
                  var n = t.ownerDocument;
                  an.set(t, n);
                  var r = (_un$get = un.get(n)) != null ? _un$get : 0;
                  (r < 1 && n.addEventListener("selectionchange", Rn),
                    un.set(n, r + 1),
                    (t.__lexicalEditor = e));
                  var i = Pn(t);
                  var _loop2 = function _loop2() {
                    var _en$_n = en[_n91],
                      r = _en$_n[0],
                      o = _en$_n[1],
                      s =
                        "function" == typeof o
                          ? function (t) {
                              Kn(t) ||
                                (Ln(t),
                                (e.isEditable() || "click" === r) && o(t, e));
                            }
                          : function (t) {
                              if (Kn(t)) return;
                              Ln(t);
                              var n = e.isEditable();
                              switch (r) {
                                case "cut":
                                  return n && rs(e, je, t);
                                case "copy":
                                  return rs(e, Ye, t);
                                case "paste":
                                  return n && rs(e, pe, t);
                                case "dragstart":
                                  return n && rs(e, ze, t);
                                case "dragover":
                                  return n && rs(e, We, t);
                                case "dragend":
                                  return n && rs(e, Ue, t);
                                case "focus":
                                  return n && rs(e, Xe, t);
                                case "blur":
                                  return n && rs(e, Qe, t);
                                case "drop":
                                  return n && rs(e, $e, t);
                              }
                            };
                    (t.addEventListener(r, s),
                      i.push(function () {
                        t.removeEventListener(r, s);
                      }));
                  };
                  for (var _n91 = 0; _n91 < en.length; _n91++) {
                    _loop2();
                  }
                })(t, this),
              null != _n90 &&
                (_t$classList = t.classList).add.apply(_t$classList, _n90));
          } else ((this._window = null), this._updateTags.add(Jn), Mi(this));
          Ei("root", this, !1, t, e);
        }
      };
      _proto16.getElementByKey = function getElementByKey(t) {
        return this._keyToDOMMap.get(t) || null;
      };
      _proto16.getEditorState = function getEditorState() {
        return this._editorState;
      };
      _proto16.setEditorState = function setEditorState(e, n) {
        e.isEmpty() && t(38);
        var r = e;
        (r._readOnly &&
          ((r = Ui(e)),
          (r._selection = e._selection ? e._selection.clone() : null)),
          X(this));
        var i = this._pendingEditorState,
          o = this._updateTags,
          s = void 0 !== n ? n.tag : null;
        (null === i || i.isEmpty() || (null != s && o.add(s), Mi(this)),
          (this._pendingEditorState = r),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          null != s && o.add(s),
          this._updating || Mi(this));
      };
      _proto16.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var r = Yi(),
            i = ai,
            o = fi,
            s = ui,
            l = e._dirtyElements,
            c = e._dirtyLeaves,
            a = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Set()),
            (e._dirtyType = 0),
            (ai = r),
            (fi = !1),
            (ui = e),
            so(null));
          try {
            var _i53 = e._nodes;
            (ki(t.root, _i53), n && n(), (r._readOnly = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = c),
              (e._cloneNotNeeded = a),
              (e._dirtyType = u),
              (ai = i),
              (fi = o),
              (ui = s));
          }
          return r;
        })("string" == typeof t ? JSON.parse(t) : t, this, e);
      };
      _proto16.read = function read(t) {
        return (Mi(this), this.getEditorState().read(t, { editor: this }));
      };
      _proto16.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : Di(t, e, n);
        })(this, t, e);
      };
      _proto16.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          Ii(this, function () {
            var r = Xr(),
              i = Fo();
            (null !== r
              ? r.dirty || Lo(r.clone())
              : 0 !== i.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? i.selectStart()
                  : i.selectEnd()),
              ls("focus"),
              cs(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto16.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = Cs(this._window);
        null !== e && e.removeAllRanges();
      };
      _proto16.isEditable = function isEditable() {
        return this._editable;
      };
      _proto16.setEditable = function setEditable(t) {
        this._editable !== t &&
          ((this._editable = t), Ei("editable", this, !0, t));
      };
      _proto16.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON() };
      };
      return io;
    })();
    _io.version = "0.44.0+prod.cjs";
    var oo = null;
    function so(t) {
      oo = t;
    }
    var lo = 1;
    function co(e, n) {
      var r = ao(e, n);
      return (void 0 === r && t(30, n), r);
    }
    function ao(t, e) {
      return t._nodes.get(e);
    }
    var uo =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function fo(t) {
      return Bi(Do(t));
    }
    function ho(t) {
      var e = document.activeElement;
      if (!Ts(e)) return !1;
      var n = e.nodeName;
      return (
        Bi(Do(t)) &&
        ("INPUT" === n ||
          "TEXTAREA" === n ||
          ("true" === e.contentEditable && null == yo(e)))
      );
    }
    function go(t, e, n) {
      var r = t.getRootElement();
      try {
        return (
          null !== r &&
          r.contains(e) &&
          r.contains(n) &&
          null !== e &&
          !ho(e) &&
          po(e) === t
        );
      } catch (t) {
        return !1;
      }
    }
    function _o(t) {
      return t instanceof _io;
    }
    function po(t) {
      var e = t;
      for (; null != e; ) {
        var _t195 = yo(e);
        if (_o(_t195)) return _t195;
        e = os(e);
      }
      return null;
    }
    function yo(t) {
      return t ? t.__lexicalEditor : null;
    }
    function mo(t) {
      return Er(t) || t.isToken();
    }
    function xo(t) {
      return mo(t) || t.isSegmented();
    }
    function Co(t) {
      return Ns(t) && 3 === t.nodeType;
    }
    function So(t) {
      return Ns(t) && 9 === t.nodeType;
    }
    function To(t) {
      var e = t;
      for (; null != e; ) {
        if (Co(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function No(t, e, n) {
      var r = A[e];
      if (null !== n && (t & r) === (n & r)) return t;
      var i = t ^ r;
      return (
        "subscript" === e
          ? (i &= ~A.superscript)
          : "superscript" === e
            ? (i &= ~A.subscript)
            : "lowercase" === e
              ? ((i &= ~A.uppercase), (i &= ~A.capitalize))
              : "uppercase" === e
                ? ((i &= ~A.lowercase), (i &= ~A.capitalize))
                : "capitalize" === e &&
                  ((i &= ~A.lowercase), (i &= ~A.uppercase)),
        i
      );
    }
    function vo(t, e) {
      var n = (function () {
        var t = oo;
        return ((oo = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (pi(), yi());
      var r = xi(),
        i = mi(),
        o = "" + lo++;
      (i._nodeMap.set(o, t),
        Li(t) ? r._dirtyElements.set(o, !0) : r._dirtyLeaves.add(o),
        r._cloneNotNeeded.add(o),
        (r._dirtyType = 1),
        (t.__key = o));
    }
    function ko(t) {
      var e = t.getParent();
      if (null !== e) {
        var _n92 = t.getWritable(),
          _r62 = e.getWritable(),
          _i54 = t.getPreviousSibling(),
          _o25 = t.getNextSibling(),
          _s17 = null !== _o25 ? _o25.__key : null,
          _l11 = null !== _i54 ? _i54.__key : null,
          _c0 = null !== _i54 ? _i54.getWritable() : null,
          _a10 = null !== _o25 ? _o25.getWritable() : null;
        (null === _i54 && (_r62.__first = _s17),
          null === _o25 && (_r62.__last = _l11),
          null !== _c0 && (_c0.__next = _s17),
          null !== _a10 && (_a10.__prev = _l11),
          (_n92.__prev = null),
          (_n92.__next = null),
          (_n92.__parent = null),
          _r62.__size--);
      }
    }
    function Oo(e) {
      (yi(), Un(e) && t(323, e.__key, e.__type));
      var n = e.getLatest(),
        r = n.__parent,
        i = mi(),
        o = xi(),
        s = i._nodeMap,
        l = o._dirtyElements;
      null !== r &&
        (function (t, e, n) {
          var r = t;
          for (; null !== r; ) {
            if (n.has(r)) return;
            var _t196 = e.get(r);
            if (void 0 === _t196) break;
            (n.set(r, !1), (r = _t196.__parent));
          }
        })(r, s, l);
      var c = n.__key;
      ((o._dirtyType = 1), Li(e) ? l.set(c, !0) : o._dirtyLeaves.add(c));
    }
    function Mo(t) {
      pi();
      var e = xi(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t197 = bo(n);
          null !== _t197 && _t197.getWritable();
        }
        if (null !== t) {
          var _e129 = bo(t);
          null !== _e129 && _e129.getWritable();
        }
      }
    }
    function Eo() {
      if (_i()) return null;
      return xi()._compositionKey;
    }
    function bo(t, e) {
      var n = (e || mi())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function Ao(t, e) {
      var n = wo(t, xi());
      return void 0 !== n ? bo(n, e) : null;
    }
    function wo(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function Do(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t198 = Ao(n, e);
        if (null !== _t198) return _t198;
        n = os(n);
      }
      return null;
    }
    function Io(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function Po(t) {
      return t.read(function () {
        return Fo().getTextContent();
      });
    }
    function Fo() {
      return Ro(mi());
    }
    function Ro(t) {
      return t._nodeMap.get("root");
    }
    function Lo(t) {
      pi();
      var e = mi();
      (null !== t && ((t.dirty = !0), t.setCachedNodes(null)),
        (e._selection = t));
    }
    function Ko(t) {
      var e = xi(),
        n = (function (t, e) {
          var n = t;
          for (; null != n; ) {
            var _t199 = wo(n, e);
            if (void 0 !== _t199) return _t199;
            n = os(n);
          }
          return null;
        })(t, e);
      if (null === n) {
        return t === e.getRootElement() ? bo("root") : null;
      }
      return bo(n);
    }
    function $o(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function Bo(t) {
      var e = [];
      for (var _n93 = t; null !== _n93; _n93 = _n93._parentEditor) e.push(_n93);
      return e;
    }
    function zo() {
      return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substring(0, 5);
    }
    function Wo(t) {
      return Co(t) ? t.nodeValue : null;
    }
    function Uo(t, e, n) {
      var r = Cs(fs(e));
      if (null === r) return;
      var i = r.anchorNode;
      var o = r.anchorOffset,
        s = r.focusOffset;
      if (null !== i) {
        var _e130 = Wo(i);
        var _r63 = Do(i);
        if (null !== _e130 && vr(_r63)) {
          if ((_e130 === N || _e130 === k) && n) {
            var _t200 = n.length;
            ((_e130 = n), (o = _t200), (s = _t200));
          }
          null !== _e130 && Yo(_r63, _e130, o, s, t);
        }
      }
    }
    function Yo(t, e, n, r, i) {
      var o = t;
      if (o.isAttached() && (i || !o.isDirty())) {
        var _s18 = o.isComposing();
        var _c1 = e;
        if (
          (_s18 || i) &&
          (e.endsWith(N) && (_c1 = e.slice(0, -N.length)), i)
        ) {
          var _t201 = k;
          var _e131;
          for (; -1 !== (_e131 = _c1.indexOf(_t201)); )
            ((_c1 = _c1.slice(0, _e131) + _c1.slice(_e131 + _t201.length)),
              null !== n &&
                n > _e131 &&
                (n = Math.max(_e131, n - _t201.length)),
              null !== r &&
                r > _e131 &&
                (r = Math.max(_e131, r - _t201.length)));
        }
        var _u10 = o.getTextContent();
        if (i || _c1 !== _u10) {
          if ("" === _c1) {
            if ((Mo(null), a || l || d)) o.remove();
            else {
              var _t202 = xi();
              setTimeout(function () {
                _t202.update(function () {
                  o.isAttached() && o.remove();
                });
              }, 20);
            }
            return;
          }
          var _e132 = o.getParent(),
            _i55 = Qr(),
            _u11 = o.getTextContentSize(),
            _f9 = Eo(),
            _h4 = o.getKey();
          if (
            o.isToken() ||
            (null !== _f9 && _h4 === _f9 && !_s18) ||
            (Pr(_i55) &&
              ((null !== _e132 &&
                !_e132.canInsertTextBefore() &&
                0 === _i55.anchor.offset) ||
                (_i55.anchor.key === t.__key &&
                  0 === _i55.anchor.offset &&
                  !o.canInsertTextBefore() &&
                  !_s18) ||
                (_i55.focus.key === t.__key &&
                  _i55.focus.offset === _u11 &&
                  !o.canInsertTextAfter() &&
                  !_s18)))
          )
            return void o.markDirty();
          var _g5 = Xr();
          if (!Pr(_g5) || null === n || null === r) return void jo(o, _c1, _g5);
          if ((_g5.setTextNodeRange(o, n, o, r), o.isSegmented())) {
            var _t203 = Nr(o.getTextContent());
            (o.replace(_t203), (o = _t203));
          }
          jo(o, _c1, _g5);
        }
      }
    }
    function jo(t, e, n) {
      if ((t.setTextContent(e), Pr(n))) {
        var _e133 = t.getKey();
        var _r64 = !1;
        for (var _i56 of ["anchor", "focus"]) {
          var _o26 = n[_i56];
          "text" === _o26.type &&
            _o26.key === _e133 &&
            ((_o26.offset = sl(t, _o26.offset, "clamp")), (_r64 = !0));
        }
        _r64 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
      }
    }
    function Jo(t, e, n) {
      var r = e[n] || !1;
      return "any" === r || r === t[n];
    }
    function Go(t, e) {
      return (
        Jo(t, e, "altKey") &&
        Jo(t, e, "ctrlKey") &&
        Jo(t, e, "shiftKey") &&
        Jo(t, e, "metaKey")
      );
    }
    function Ho(t, e, n) {
      if (!Go(t, n)) return !1;
      if (t.key.toLowerCase() === e.toLowerCase()) return !0;
      if (e.length > 1) return !1;
      if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
      if (t.code.startsWith("Digit") && /^\d$/.test(e))
        return t.code === "Digit" + e;
      var r = "Key" + e.toUpperCase();
      return t.code === r;
    }
    var Vo = { ctrlKey: !i, metaKey: i },
      qo = { altKey: i, ctrlKey: !i };
    function Xo(t) {
      return "Backspace" === t.key;
    }
    function Qo(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        r = n[e];
      if (void 0 !== r) return r;
      var i = t[e];
      if ("string" == typeof i) {
        var _t204 = Kl(i);
        return ((n[e] = _t204), _t204);
      }
      return i;
    }
    function Zo(e, n, r, i, o) {
      if (0 === r.size) return;
      var s = i.__type,
        l = i.__key,
        c = n.get(s);
      void 0 === c && t(33, s);
      var a = c.klass;
      var u = e.get(a);
      void 0 === u && ((u = new Map()), e.set(a, u));
      var f = u.get(l),
        d = "destroyed" === f && "created" === o;
      (void 0 === f || d) && u.set(l, d ? "updated" : o);
    }
    function ts(t, e, n) {
      var r = t.getParent();
      var i = n,
        o = t;
      return (
        null !== r &&
          (e && 0 === n
            ? ((i = o.getIndexWithinParent()), (o = r))
            : e ||
              n !== o.getChildrenSize() ||
              ((i = o.getIndexWithinParent() + 1), (o = r))),
        o.getChildAtIndex(e ? i - 1 : i)
      );
    }
    function es(t, e) {
      var n = t.offset;
      if ("element" === t.type) {
        return ts(t.getNode(), e, n);
      }
      {
        var _r65 = t.getNode();
        if ((e && 0 === n) || (!e && n === _r65.getTextContentSize())) {
          var _t205 = e ? _r65.getPreviousSibling() : _r65.getNextSibling();
          return null === _t205
            ? ts(
                _r65.getParentOrThrow(),
                e,
                _r65.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t205;
        }
      }
      return null;
    }
    function ns(t) {
      var e = fs(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function rs(t, e, n) {
      return bi(t, e, n, t);
    }
    function is(e, n) {
      var r = e._keyToDOMMap.get(n);
      return (void 0 === r && t(75, n), r);
    }
    function os(t) {
      var e = t.assignedSlot || t.parentElement;
      return vs(e) ? e.host : e;
    }
    function ss(t) {
      return So(t) ? t : Ts(t) ? t.ownerDocument : null;
    }
    function ls(t) {
      pi();
      xi()._updateTags.add(t);
    }
    function cs(t) {
      pi();
      xi()._deferred.push(t);
    }
    function as(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function us(t) {
      var e = ss(t);
      return e ? e.defaultView : null;
    }
    function fs(e) {
      var n = e._window;
      return (null === n && t(78), n);
    }
    function ds(t) {
      var e = t.getParentOrThrow();
      for (; null !== e; ) {
        if (hs(e)) return e;
        e = e.getParentOrThrow();
      }
      return e;
    }
    function hs(t) {
      return Wi(t) || (Li(t) && t.isShadowRoot());
    }
    function gs(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t);
      return (
        vo(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function _s(e) {
      var n = xi(),
        r = e.getType(),
        i = ao(n, r);
      void 0 === i && t(200, e.constructor.name, r);
      var o = i.replace,
        s = i.replaceWithKlass;
      if (null !== o) {
        var _n94 = o(e),
          _i57 = _n94.constructor;
        return (
          null !== s
            ? _n94 instanceof s ||
              t(
                201,
                s.name,
                s.getType(),
                _i57.name,
                _i57.getType(),
                e.constructor.name,
                r,
              )
            : (_n94 instanceof e.constructor && _i57 !== e.constructor) ||
              t(202, _i57.name, _i57.getType(), e.constructor.name, r),
          _n94.__key === e.__key &&
            t(203, e.constructor.name, r, _i57.name, _i57.getType()),
          _n94
        );
      }
      return e;
    }
    function ps(e, n) {
      !Wi(e.getParent()) || Li(n) || Bi(n) || t(99);
    }
    function ys(e) {
      var n = bo(e);
      return (null === n && t(63, e), n);
    }
    function ms(t) {
      return (Bi(t) || (Li(t) && !t.canBeEmpty())) && !t.isInline();
    }
    function xs(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var r = t.parentElement;
      null !== r && r.removeChild(t);
    }
    function Cs(t) {
      return n ? (t || window).getSelection() : null;
    }
    function Ss(t) {
      var e = us(t);
      return e ? e.getSelection() : null;
    }
    function Ts(t) {
      return Ns(t) && 1 === t.nodeType;
    }
    function Ns(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function vs(t) {
      return Ns(t) && 11 === t.nodeType;
    }
    var ks =
      /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
    function Os(t) {
      return (
        !(!Ts(t) || !t.style.display.startsWith("inline")) ||
        ks.test(t.nodeName)
      );
    }
    var Ms =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function Es(t) {
      return (
        (!Ts(t) || !t.style.display.startsWith("inline")) && Ms.test(t.nodeName)
      );
    }
    function bs(t) {
      if (Bi(t) && !t.isInline()) return !0;
      if (!Li(t) || hs(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || sr(e) || vr(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function As() {
      return xi();
    }
    function ws(t) {
      if (t === void 0) {
        t = As();
      }
      return t._config.dom || eo;
    }
    var Ds = new WeakMap(),
      Is = new Map();
    function Ps(e) {
      if (!e._readOnly && e.isEmpty()) return Is;
      e._readOnly || t(192);
      var n = Ds.get(e);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref27 of t._nodeMap) {
              var _n95 = _ref27[0];
              var _r66 = _ref27[1];
              {
                var _t206 = _r66.__type;
                var _i58 = e.get(_t206);
                (_i58 || ((_i58 = new Map()), e.set(_t206, _i58)),
                  _i58.set(_n95, _r66));
              }
            }
            return e;
          })(e)),
          Ds.set(e, n)),
        n
      );
    }
    function Fs(t) {
      var e = t.constructor.clone(t);
      return (e.afterCloneFrom(t), e);
    }
    function Rs(t, e) {
      var n = t.getAttribute("data-lexical-indent");
      if (null !== n) {
        var _t207 = parseInt(n, 10);
        if (Number.isFinite(_t207) && _t207 >= 0)
          return void e.setIndent(_t207);
      }
      var r = parseInt(t.style.paddingInlineStart, 10) || 0,
        i = Math.round(r / 40);
      e.setIndent(i);
    }
    function Ls(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function Ks(t, e) {
      var n = e.style.textAlign;
      return n && n in D ? t.setFormat(n) : t;
    }
    function $s(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function Bs(t, e) {
      return (
        (function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        })(t, e) && t[e] !== _jn5[e]
      );
    }
    function zs(e) {
      var n = R in e.prototype ? e.prototype[R]() : void 0,
        r = (function (e) {
          if (!(e === _jn5 || e.prototype instanceof _jn5)) {
            var _n96 = "<unknown>",
              _r67 = "<unknown>";
            try {
              _n96 = e.getType();
            } catch (t) {}
            try {
              _io.version && (_r67 = JSON.parse(_io.version));
            } catch (t) {}
            t(290, e.name, _n96, _r67);
          }
          return e === _$i || e === _Ri4 || e === _jn5;
        })(e),
        i = !r && Bs(e, "getType") ? e.getType() : void 0;
      var o,
        s = i;
      if (n)
        if (i) o = n[i];
        else
          for (var _ref29 of Object.entries(n)) {
            var _t208 = _ref29[0];
            var _e134 = _ref29[1];
            ((s = _t208), (o = _e134));
          }
      if (
        !r &&
        s &&
        (Bs(e, "getType") ||
          (e.getType = function () {
            return s;
          }),
        Bs(e, "clone") ||
          (e.clone = function (t) {
            return (so(t), new e());
          }),
        Bs(e, "importJSON") ||
          (e.importJSON =
            (o && o.$importJSON) ||
            function (t) {
              return new e().updateFromJSON(t);
            }),
        !Bs(e, "importDOM") && o)
      ) {
        var _o27 = o,
          _t209 = _o27.importDOM;
        _t209 &&
          (e.importDOM = function () {
            return _t209;
          });
      }
      return { ownNodeConfig: o, ownNodeType: s };
    }
    var Ws = function Ws(t, e) {
      var n = t;
      for (; null != n && !Wi(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function Us(e, n) {
      var r = [];
      var i = e.__first;
      for (; null !== i; ) {
        var _e135 = null === n ? bo(i) : n.get(i);
        (null == _e135 && t(174), r.push(i), (i = _e135.__next));
      }
      return r;
    }
    var Ys = { next: "previous", previous: "next" };
    var _js4 = (function () {
      function js(t) {
        this.origin = t;
      }
      var _proto17 = js.prototype;
      _proto17[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return pl({
            hasNext: Zs,
            initial: this.getAdjacentCaret(),
            map: function map(t) {
              return t;
            },
            step: function step(t) {
              return t.getAdjacentCaret();
            },
          });
        };
      _proto17.getAdjacentCaret = function getAdjacentCaret() {
        return il(this.getNodeAtCaret(), this.direction);
      };
      _proto17.getSiblingCaret = function getSiblingCaret() {
        return il(this.origin, this.direction);
      };
      _proto17.remove = function remove() {
        var t = this.getNodeAtCaret();
        return (t && t.remove(), this);
      };
      _proto17.replaceOrInsert = function replaceOrInsert(t, e) {
        var n = this.getNodeAtCaret();
        return (
          t.is(this.origin) ||
            t.is(n) ||
            (null === n ? this.insert(t) : n.replace(t, e)),
          this
        );
      };
      _proto17.splice = function splice(e, n, r) {
        if (r === void 0) {
          r = "next";
        }
        var i = r === this.direction ? n : Array.from(n).reverse();
        var o = this;
        var s = this.getParentAtCaret(),
          l = new Map();
        for (
          var _t210 = o.getAdjacentCaret();
          null !== _t210 && l.size < e;
          _t210 = _t210.getAdjacentCaret()
        ) {
          var _e136 = _t210.origin.getWritable();
          l.set(_e136.getKey(), _e136);
        }
        for (var _e137 of i) {
          if (l.size > 0) {
            var _n97 = o.getNodeAtCaret();
            if (_n97) {
              if (
                (l["delete"](_n97.getKey()),
                l["delete"](_e137.getKey()),
                _n97.is(_e137) || o.origin.is(_e137))
              );
              else {
                var _t211 = _e137.getParent();
                (_t211 && _t211.is(s) && _e137.remove(), _n97.replace(_e137));
              }
            } else null === _n97 && t(263, Array.from(l).join(" "));
          } else o.insert(_e137);
          o = il(_e137, this.direction);
        }
        for (var _t212 of l.values()) _t212.remove();
        return this;
      };
      return js;
    })();
    var _Js3 = (function (_js) {
      function Js() {
        var _this5;
        for (
          var _len6 = arguments.length, args = new Array(_len6), _key6 = 0;
          _key6 < _len6;
          _key6++
        ) {
          args[_key6] = arguments[_key6];
        }
        return (
          ((_this5 = _js.call.apply(_js, [this].concat(args)) || this),
          (_this5.type = "child"),
          babelHelpers.assertThisInitialized(_this5)) ||
          babelHelpers.assertThisInitialized(_this5)
        );
      }
      babelHelpers.inheritsLoose(Js, _js);
      var _proto18 = Js.prototype;
      _proto18.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : cl(t, this.direction);
      };
      _proto18.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return il(Vs(this.getParentAtCaret(), t), this.direction);
      };
      _proto18.getFlipped = function getFlipped() {
        var t = Hs(this.direction);
        return il(this.getNodeAtCaret(), t) || cl(this.origin, t);
      };
      _proto18.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto18.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto18.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof Js &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto18.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return Js;
    })(_js4);
    var Gs = { root: Wi, shadowRoot: hs };
    function Hs(t) {
      return Ys[t];
    }
    function Vs(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return Gs[e](t) ? null : t;
    }
    var _qs3 = (function (_js2) {
      function qs() {
        var _this6;
        for (
          var _len7 = arguments.length, args = new Array(_len7), _key7 = 0;
          _key7 < _len7;
          _key7++
        ) {
          args[_key7] = arguments[_key7];
        }
        return (
          ((_this6 = _js2.call.apply(_js2, [this].concat(args)) || this),
          (_this6.type = "sibling"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(qs, _js2);
      var _proto19 = qs.prototype;
      _proto19.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : il(t, this.direction);
      };
      _proto19.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto19.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto19.getChildCaret = function getChildCaret() {
        return Li(this.origin) ? cl(this.origin, this.direction) : null;
      };
      _proto19.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return il(Vs(this.getParentAtCaret(), t), this.direction);
      };
      _proto19.getFlipped = function getFlipped() {
        var t = Hs(this.direction);
        return (
          il(this.getNodeAtCaret(), t) || cl(this.origin.getParentOrThrow(), t)
        );
      };
      _proto19.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof qs &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto19.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof qs || t instanceof _Xs3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return qs;
    })(_js4);
    var _Xs3 = (function (_js3) {
      function Xs(t, e) {
        var _this7;
        ((_this7 = _js3.call(this, t) || this),
          (_this7.type = "text"),
          (_this7.offset = e));
        return _this7;
      }
      babelHelpers.inheritsLoose(Xs, _js3);
      var _proto20 = Xs.prototype;
      _proto20.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : ol(t, this.direction, this.offset);
      };
      _proto20.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto20.getChildCaret = function getChildCaret() {
        return null;
      };
      _proto20.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return il(Vs(this.getParentAtCaret(), t), this.direction);
      };
      _proto20.getFlipped = function getFlipped() {
        return ol(this.origin, Hs(this.direction), this.offset);
      };
      _proto20.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Xs &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto20.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _qs3 || t instanceof Xs) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto20.getSiblingCaret = function getSiblingCaret() {
        return il(this.origin, this.direction);
      };
      return Xs;
    })(_js4);
    function Qs(t) {
      return t instanceof _Xs3;
    }
    function Zs(t) {
      return t instanceof _qs3;
    }
    function tl(t) {
      return t instanceof _Js3;
    }
    var el = {
        next: (function (_Xs) {
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
              ((_this8 = _Xs.call.apply(_Xs, [this].concat(args)) || this),
              (_this8.direction = "next"),
              babelHelpers.assertThisInitialized(_this8)) ||
              babelHelpers.assertThisInitialized(_this8)
            );
          }
          babelHelpers.inheritsLoose(_class, _Xs);
          var _proto21 = _class.prototype;
          _proto21.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto21.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_Xs3),
        previous: (function (_Xs2) {
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
              ((_this9 = _Xs2.call.apply(_Xs2, [this].concat(args)) || this),
              (_this9.direction = "previous"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class3, _Xs2);
          var _proto22 = _class3.prototype;
          _proto22.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto22.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_Xs3),
      },
      nl = {
        next: (function (_qs) {
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
              ((_this0 = _qs.call.apply(_qs, [this].concat(args)) || this),
              (_this0.direction = "next"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class5, _qs);
          var _proto23 = _class5.prototype;
          _proto23.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto23.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_qs3),
        previous: (function (_qs2) {
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
              ((_this1 = _qs2.call.apply(_qs2, [this].concat(args)) || this),
              (_this1.direction = "previous"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class7, _qs2);
          var _proto24 = _class7.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_qs3),
      },
      rl = {
        next: (function (_Js) {
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
              ((_this10 = _Js.call.apply(_Js, [this].concat(args)) || this),
              (_this10.direction = "next"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class9, _Js);
          var _proto25 = _class9.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_Js3),
        previous: (function (_Js2) {
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
              ((_this11 = _Js2.call.apply(_Js2, [this].concat(args)) || this),
              (_this11.direction = "previous"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class1, _Js2);
          var _proto26 = _class1.prototype;
          _proto26.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getLastChild();
          };
          _proto26.insert = function insert(t) {
            return (
              this.origin.splice(this.origin.getChildrenSize(), 0, [t]),
              this
            );
          };
          return _class1;
        })(_Js3),
      };
    function il(t, e) {
      return t ? new nl[e](t) : null;
    }
    function ol(t, e, n) {
      return t ? new el[e](t, sl(t, n)) : null;
    }
    function sl(t, n, r) {
      if (r === void 0) {
        r = "error";
      }
      var i = t.getTextContentSize();
      var o = "next" === n ? i : "previous" === n ? 0 : n;
      return (
        (o < 0 || o > i) &&
          ("clamp" !== r && e(284, String(n), String(i), t.getKey()),
          (o = o < 0 ? 0 : i)),
        o
      );
    }
    function ll(t, e) {
      return new _dl(t, e);
    }
    function cl(t, e) {
      return Li(t) ? new rl[e](t) : null;
    }
    function al(t) {
      return (t && t.getChildCaret()) || t;
    }
    function ul(t) {
      return t && al(t.getAdjacentCaret());
    }
    var _fl = (function () {
      function fl(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto27 = fl.prototype;
      _proto27.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new fl(t, e, this.direction);
      };
      _proto27.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto27.getTextSlices = function getTextSlices() {
        var _this14 = this;
        var t = function t(_t213) {
            var e = _this14[_t213].getLatest();
            return Qs(e)
              ? (function (t, e) {
                  var n = t.direction,
                    r = t.origin,
                    i = sl(r, "focus" === e ? Hs(n) : n);
                  return ll(t, i - t.offset);
                })(e, _t213)
              : null;
          },
          e = t("anchor"),
          n = t("focus");
        if (e && n) {
          var _t214 = e.caret,
            _r68 = n.caret;
          if (_t214.isSameNodeCaret(_r68))
            return [ll(_t214, _r68.offset - _t214.offset), null];
        }
        return [e, n];
      };
      _proto27.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = Qs(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          r = Qs(n),
          i = function i(e) {
            return e.isSameNodeCaret(n) ? null : ul(e) || e.getParentCaret(t);
          };
        return pl({
          hasNext: function hasNext(t) {
            return null !== t && !(r && n.isSameNodeCaret(t));
          },
          initial: e.isSameNodeCaret(n) ? null : i(e),
          map: function map(t) {
            return t;
          },
          step: i,
        });
      };
      _proto27[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this.iterNodeCarets("root");
        };
      return fl;
    })();
    var _dl = (function () {
      function dl(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto28 = dl.prototype;
      _proto28.getSliceIndices = function getSliceIndices() {
        var t = this.distance,
          e = this.caret.offset,
          n = e + t;
        return n < e ? [n, e] : [e, n];
      };
      _proto28.getTextContent = function getTextContent() {
        var _this$getSliceIndices = this.getSliceIndices(),
          t = _this$getSliceIndices[0],
          e = _this$getSliceIndices[1];
        return this.caret.origin.getTextContent().slice(t, e);
      };
      _proto28.getTextContentSize = function getTextContentSize() {
        return Math.abs(this.distance);
      };
      _proto28.removeTextSlice = function removeTextSlice() {
        var _this$caret = this.caret,
          t = _this$caret.origin,
          e = _this$caret.direction,
          _this$getSliceIndices2 = this.getSliceIndices(),
          n = _this$getSliceIndices2[0],
          r = _this$getSliceIndices2[1],
          i = t.getTextContent();
        return ol(t.setTextContent(i.slice(0, n) + i.slice(r)), e, n);
      };
      return dl;
    })();
    function hl(t) {
      return _l(t, il(Fo(), t.direction));
    }
    function gl(t) {
      return _l(t, t);
    }
    function _l(e, n) {
      return (
        e.direction !== n.direction && t(265),
        new _fl(e, n, e.direction)
      );
    }
    function pl(t) {
      var _ref30;
      var e = t.initial,
        n = t.hasNext,
        r = t.step,
        i = t.map;
      var o = e;
      return (
        (_ref30 = {}),
        (_ref30[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
          function () {
            return this;
          }),
        (_ref30.next = function next() {
          if (!n(o)) return { done: !0, value: void 0 };
          var t = { done: !1, value: i(o) };
          return ((o = r(o)), t);
        }),
        _ref30
      );
    }
    function yl(e, n) {
      var r = Sl(e.origin, n.origin);
      switch (
        (null === r && t(275, e.origin.getKey(), n.origin.getKey()), r.type)
      ) {
        case "same": {
          var _t215 = "text" === e.type,
            _r69 = "text" === n.type;
          return _t215 && _r69
            ? (function (t, e) {
                return Math.sign(t - e);
              })(e.offset, n.offset)
            : e.type === n.type
              ? 0
              : _t215
                ? -1
                : _r69
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
          return ml(r);
      }
    }
    function ml(t) {
      var e = t.a,
        n = t.b,
        r = e.__key,
        i = n.__key;
      var o = e,
        s = n;
      for (; o && s; o = o.getNextSibling(), s = s.getNextSibling()) {
        if (o.__key === i) return -1;
        if (s.__key === r) return 1;
      }
      return null === o ? 1 : -1;
    }
    function xl(t, e) {
      return e.is(t);
    }
    function Cl(t) {
      return Li(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function Sl(e, n) {
      if (e.is(n)) return { commonAncestor: e, type: "same" };
      var r = new Map();
      for (
        var _Cl = Cl(e), _t216 = _Cl[0], _n98 = _Cl[1];
        _t216;
        _n98 = _t216, _t216 = _t216.getParent()
      )
        r.set(_t216, _n98);
      for (
        var _Cl2 = Cl(n), _i59 = _Cl2[0], _o28 = _Cl2[1];
        _i59;
        _o28 = _i59, _i59 = _i59.getParent()
      ) {
        var _s19 = r.get(_i59);
        if (void 0 !== _s19)
          return null === _s19
            ? (xl(e, _i59) || t(276),
              { commonAncestor: _i59, type: "ancestor" })
            : null === _o28
              ? (xl(n, _i59) || t(277),
                { commonAncestor: _i59, type: "descendant" })
              : (((Li(_s19) || xl(e, _s19)) &&
                  (Li(_o28) || xl(n, _o28)) &&
                  _i59.is(_s19.getParent()) &&
                  _i59.is(_o28.getParent())) ||
                  t(278),
                { a: _s19, b: _o28, commonAncestor: _i59, type: "branch" });
      }
      return null;
    }
    function Tl(e, n) {
      var r = e.type,
        i = e.key,
        o = e.offset,
        s = ys(e.key);
      return "text" === r
        ? (vr(s) || t(266, s.getType(), i), ol(s, n, o))
        : (Li(s) || t(267, s.getType(), i), Fl(s, e.offset, n));
    }
    function Nl(e, n) {
      var r = n.origin,
        i = n.direction,
        o = "next" === i;
      Qs(n)
        ? e.set(r.getKey(), n.offset, "text")
        : Zs(n)
          ? vr(r)
            ? e.set(r.getKey(), sl(r, i), "text")
            : e.set(
                r.getParentOrThrow().getKey(),
                r.getIndexWithinParent() + (o ? 1 : 0),
                "element",
              )
          : ((tl(n) && Li(r)) || t(268),
            e.set(r.getKey(), o ? 0 : r.getChildrenSize(), "element"));
    }
    function vl(t) {
      var e = Xr(),
        n = Pr(e) ? e : Hr();
      return (kl(n, t), Lo(n), n);
    }
    function kl(t, e) {
      (Nl(t.anchor, e.anchor), Nl(t.focus, e.focus));
    }
    function Ol(t) {
      var e = t.anchor,
        n = t.focus,
        r = Tl(e, "next"),
        i = Tl(n, "next"),
        o = yl(r, i) <= 0 ? "next" : "previous";
      return _l(Il(r, o), Il(i, o));
    }
    function Ml(t) {
      var e = t.direction,
        n = t.origin,
        r = il(n, Hs(e)).getNodeAtCaret();
      return r ? il(r, e) : cl(n.getParentOrThrow(), e);
    }
    function El(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _r70 = tl(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _r70;
        _r70 = _r70.getParentCaret(e)
      )
        n.push(Ml(_r70));
      return n;
    }
    function bl(t) {
      return !!t && t.origin.isAttached();
    }
    function Al(e, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (e.isCollapsed()) return e;
      var r = "root",
        i = "next";
      var o = n;
      var s = Pl(e, i),
        l = El(s.anchor, r),
        c = El(s.focus.getFlipped(), r),
        a = new Set(),
        u = [];
      for (var _t217 of s.iterNodeCarets(r))
        if (tl(_t217)) a.add(_t217.origin.getKey());
        else if (Zs(_t217)) {
          var _e138 = _t217.origin;
          (Li(_e138) && !a.has(_e138.getKey())) || u.push(_e138);
        }
      for (var _t218 of u) _t218.remove();
      for (var _t219 of s.getTextSlices()) {
        if (!_t219) continue;
        var _e139 = _t219.caret.origin,
          _n99 = _e139.getTextContentSize(),
          _r71 = Ml(il(_e139, i)),
          _s20 = _e139.getMode();
        if (
          (Math.abs(_t219.distance) === _n99 && "removeEmptySlices" === o) ||
          ("token" === _s20 && 0 !== _t219.distance)
        )
          _r71.remove();
        else if (0 !== _t219.distance) {
          o = "removeEmptySlices";
          var _e140 = _t219.removeTextSlice();
          var _n100 = _t219.caret.origin;
          if ("segmented" === _s20) {
            var _t220 = _e140.origin,
              _n101 = Nr(_t220.getTextContent())
                .setStyle(_t220.getStyle())
                .setFormat(_t220.getFormat());
            (_r71.replaceOrInsert(_n101), (_e140 = ol(_n101, i, _e140.offset)));
          }
          (_n100.is(l[0].origin) && (l[0] = _e140),
            _n100.is(c[0].origin) && (c[0] = _e140.getFlipped()));
        }
      }
      var f, d;
      for (var _t221 of l)
        if (bl(_t221)) {
          f = wl(_t221);
          break;
        }
      for (var _t222 of c)
        if (bl(_t222)) {
          d = wl(_t222);
          break;
        }
      var h = (function (t, e, n) {
        if (!t || !e) return null;
        var r = t.getParentAtCaret(),
          i = e.getParentAtCaret();
        if (!r || !i) return null;
        var o = r.getParents().reverse();
        o.push(r);
        var s = i.getParents().reverse();
        s.push(i);
        var l = Math.min(o.length, s.length);
        var c;
        for (c = 0; c < l && o[c] === s[c]; c++);
        var a = function a(t, e) {
            var n;
            for (var _r72 = c; _r72 < t.length; _r72++) {
              var _i60 = t[_r72];
              if (hs(_i60)) return;
              !n && e(_i60) && (n = _i60);
            }
            return n;
          },
          u = a(o, bs),
          f =
            u &&
            a(s, function (t) {
              return n.has(t.getKey()) && bs(t);
            });
        return u && f ? [u, f] : null;
      })(f, d, a);
      if (h) {
        var _t223 = h[0],
          _e141 = h[1];
        cl(_t223, "previous").splice(0, _e141.getChildren());
        var _n102 = _e141.getParent();
        for (_e141.remove(!0); _n102 && _n102.isEmpty(); ) {
          var _t224 = _n102;
          ((_n102 = _n102.getParent()), _t224.remove(!0));
        }
      }
      var g = [f, d].concat(l, c).find(bl);
      if (g) {
        return gl(Il(wl(g), e.direction));
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
    function wl(t) {
      var e = (function (t) {
          var e = t;
          for (; tl(e); ) {
            var _t225 = ul(e);
            if (!tl(_t225)) break;
            e = _t225;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (vr(e.origin)) return Qs(e) ? e : ol(e.origin, n, n);
      var r = e.getAdjacentCaret();
      return Zs(r) && vr(r.origin) ? ol(r.origin, n, Hs(n)) : e;
    }
    function Dl(t) {
      return Qs(t) && t.offset !== sl(t.origin, t.direction);
    }
    function Il(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function Pl(t, e) {
      return t.direction === e ? t : _l(Il(t.focus, e), Il(t.anchor, e));
    }
    function Fl(t, e, n) {
      var r = cl(t, "next");
      for (var _t226 = 0; _t226 < e; _t226++) {
        var _t227 = r.getAdjacentCaret();
        if (null === _t227) break;
        r = _t227;
      }
      return Il(r, n);
    }
    function Rl(e) {
      var n = e.origin,
        r = e.offset,
        i = e.direction;
      if (r === sl(n, i)) return e.getSiblingCaret();
      if (r === sl(n, Hs(i))) return Ml(e.getSiblingCaret());
      var _n$splitText2 = n.splitText(r),
        o = _n$splitText2[0];
      return (vr(o) || t(281), Il(il(o, "next"), i));
    }
    function Ll(t, e) {
      return !0;
    }
    function Kl() {
      var e = [];
      for (
        var _len12 = arguments.length, t = new Array(_len12), _key12 = 0;
        _key12 < _len12;
        _key12++
      ) {
        t[_key12] = arguments[_key12];
      }
      for (var _n103 of t)
        if (_n103 && "string" == typeof _n103)
          for (var _ref32 of _n103.matchAll(/\S+/g)) {
            var _t228 = _ref32[0];
            e.push(_t228);
          }
      return e;
    }
    function $l() {
      for (
        var _len13 = arguments.length, t = new Array(_len13), _key13 = 0;
        _key13 < _len13;
        _key13++
      ) {
        t[_key13] = arguments[_key13];
      }
      return function () {
        for (var _e142 = t.length - 1; _e142 >= 0; _e142--) t[_e142]();
        t.length = 0;
      };
    }
    ((exports.$addUpdateTag = ls),
      (exports.$applyNodeReplacement = _s),
      (exports.$caretFromPoint = Tl),
      (exports.$caretRangeFromSelection = Ol),
      (exports.$cloneWithProperties = Fs),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = Fs(t))[Wn] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = yl),
      (exports.$copyNode = gs),
      (exports.$create = function (t) {
        var e = As();
        return (
          pi(),
          new (e.resolveRegisteredNodeAfterReplacements(
            e.getRegisteredNode(t),
          ).klass)()
        );
      }),
      (exports.$createChildrenArray = Us),
      (exports.$createLineBreakNode = or),
      (exports.$createNodeSelection = Vr),
      (exports.$createParagraphNode = qi),
      (exports.$createPoint = Ar),
      (exports.$createRangeSelection = Hr),
      (exports.$createRangeSelectionFromDom = function (t, e) {
        return qr(null, t, e, null);
      }),
      (exports.$createTabNode = Mr),
      (exports.$createTextNode = Nr),
      (exports.$extendCaretToRange = hl),
      (exports.$findMatchingParent = Ws),
      (exports.$getAdjacentChildCaret = ul),
      (exports.$getAdjacentNode = es),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          r = t,
          i = ul(r);
        for (; null === i; ) {
          if ((n--, (i = r.getParentCaret(e)), !i)) return null;
          ((r = i), (i = ul(r)));
        }
        return i && [i, n];
      }),
      (exports.$getCaretInDirection = Il),
      (exports.$getCaretRange = _l),
      (exports.$getCaretRangeInDirection = Pl),
      (exports.$getCharacterOffsets = Kr),
      (exports.$getChildCaret = cl),
      (exports.$getChildCaretAtIndex = Fl),
      (exports.$getChildCaretOrSelf = al),
      (exports.$getCollapsedCaretRange = gl),
      (exports.$getCommonAncestor = Sl),
      (exports.$getCommonAncestorResultBranchOrder = ml),
      (exports.$getEditor = As),
      (exports.$getEditorDOMRenderConfig = ws),
      (exports.$getNearestNodeFromDOMNode = Do),
      (exports.$getNearestRootOrShadowRoot = ds),
      (exports.$getNodeByKey = bo),
      (exports.$getNodeByKeyOrThrow = ys),
      (exports.$getNodeFromDOMNode = Ao),
      (exports.$getPreviousSelection = Qr),
      (exports.$getRoot = Fo),
      (exports.$getSelection = Xr),
      (exports.$getSiblingCaret = il),
      (exports.$getState = tt),
      (exports.$getStateChange = function (t, e, n) {
        var r = tt(t, n, "direct"),
          i = tt(e, n, "direct");
        return n.isEqual(r, i) ? null : [r, i];
      }),
      (exports.$getTextContent = function () {
        var t = Xr();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = sl),
      (exports.$getTextPointCaret = ol),
      (exports.$getTextPointCaretSlice = ll),
      (exports.$getWritableNodeState = rt),
      (exports.$hasAncestor = as),
      (exports.$hasUpdateTag = function (t) {
        return xi()._updateTags.has(t);
      }),
      (exports.$insertNodes = function (t) {
        var e = Xr() || Qr();
        (null === e && (e = Fo().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = Jr),
      (exports.$isChildCaret = tl),
      (exports.$isDecoratorNode = Bi),
      (exports.$isEditorState = function (t) {
        return t instanceof _Ji;
      }),
      (exports.$isElementNode = Li),
      (exports.$isExtendableTextPointCaret = Dl),
      (exports.$isInlineElementOrDecoratorNode = function (t) {
        return (Li(t) && t.isInline()) || (Bi(t) && t.isInline());
      }),
      (exports.$isLeafNode = function (t) {
        return vr(t) || sr(t) || Bi(t);
      }),
      (exports.$isLexicalNode = function (t) {
        return t instanceof _jn5;
      }),
      (exports.$isLineBreakNode = sr),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _js4;
      }),
      (exports.$isNodeSelection = Rr),
      (exports.$isParagraphNode = Xi),
      (exports.$isRangeSelection = Pr),
      (exports.$isRootNode = Wi),
      (exports.$isRootOrShadowRoot = hs),
      (exports.$isSiblingCaret = Zs),
      (exports.$isTabNode = Er),
      (exports.$isTextNode = vr),
      (exports.$isTextPointCaret = Qs),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _dl;
      }),
      (exports.$isTokenOrSegmented = xo),
      (exports.$isTokenOrTab = mo),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = mi();
        if (n._readOnly) {
          var _t229 = Ps(n).get(e);
          return _t229 ? Array.from(_t229.values()) : [];
        }
        var r = n._nodeMap,
          i = [];
        for (var _ref34 of r) {
          var _n104 = _ref34[1];
          _n104 instanceof t &&
            _n104.__type === e &&
            _n104.isAttached() &&
            i.push(_n104);
        }
        return i;
      }),
      (exports.$normalizeCaret = wl),
      (exports.$normalizeSelection__EXPERIMENTAL = ht),
      (exports.$onUpdate = cs),
      (exports.$parseSerializedNode = function (t) {
        return ki(t, xi()._nodes);
      }),
      (exports.$removeTextFromCaretRange = Al),
      (exports.$rewindSiblingCaret = Ml),
      (exports.$selectAll = function (t) {
        var e = Fo();
        if (Pr(t)) {
          var _e143 = t.anchor,
            _n105 = t.focus,
            _r73 = _e143
              .getNode()
              .getTopLevelElementOrThrow()
              .getParentOrThrow();
          return (
            _e143.set(_r73.getKey(), 0, "element"),
            _n105.set(_r73.getKey(), _r73.getChildrenSize(), "element"),
            ht(t),
            t
          );
        }
        {
          var _t230 = e.select(0, e.getChildrenSize());
          return (Lo(ht(_t230)), _t230);
        }
      }),
      (exports.$setCompositionKey = Mo),
      (exports.$setDirectionFromDOM = Ls),
      (exports.$setFormatFromDOM = Ks),
      (exports.$setPointFromCaret = Nl),
      (exports.$setSelection = Lo),
      (exports.$setSelectionFromCaretRange = vl),
      (exports.$setState = function (t, e, n) {
        var r;
        if ((pi(), "function" == typeof n)) {
          var _i61 = t.getLatest(),
            _o29 = tt(_i61, e);
          if (((r = n(_o29)), e.isEqual(_o29, r))) return _i61;
        } else r = n;
        var i = t.getWritable();
        return (rt(i).updateFromKnown(e, r), i);
      }),
      (exports.$splitAtPointCaretNext = function (t, _temp) {
        var _ref35 = _temp === void 0 ? {} : _temp,
          _ref35$$copyElementNo = _ref35.$copyElementNode,
          e = _ref35$$copyElementNo === void 0 ? gs : _ref35$$copyElementNo,
          _ref35$$splitTextPoin = _ref35.$splitTextPointCaretNext,
          n = _ref35$$splitTextPoin === void 0 ? Rl : _ref35$$splitTextPoin,
          _ref35$rootMode = _ref35.rootMode,
          r = _ref35$rootMode === void 0 ? "shadowRoot" : _ref35$rootMode,
          _ref35$$shouldSplit = _ref35.$shouldSplit,
          i = _ref35$$shouldSplit === void 0 ? Ll : _ref35$$shouldSplit,
          _ref35$removeEmptyDes = _ref35.removeEmptyDestination,
          o = _ref35$removeEmptyDes === void 0 ? !1 : _ref35$removeEmptyDes;
        if (Qs(t)) return n(t);
        var s = t.getParentCaret(r);
        if (s) {
          var _n106 = s.origin;
          if (tl(t)) {
            var _t231 = Ml(s);
            if (o && _n106.isEmpty()) return (_n106.remove(), _t231);
            if (!_n106.canBeEmpty() || !i(_n106, "first")) return _t231;
          }
          var _r74 = (function (t) {
            var e = [];
            for (
              var _n107 = t.getAdjacentCaret();
              _n107;
              _n107 = _n107.getAdjacentCaret()
            )
              e.push(_n107.origin);
            return e;
          })(t);
          (_r74.length > 0 || (!o && _n106.canBeEmpty() && i(_n106, "last"))) &&
            s.insert(e(_n106).splice(0, 0, _r74));
        }
        return s;
      }),
      (exports.$splitNode = function (e, n) {
        var r = e.getChildAtIndex(n);
        (null == r && (r = e), hs(e) && t(102));
        var _i64 = function i(e) {
            var n = e.getParentOrThrow(),
              o = hs(n),
              s = e !== r || o ? gs(e) : e;
            if (o)
              return ((Li(e) && Li(s)) || t(133), e.insertAfter(s), [e, s, s]);
            {
              var _i63 = _i64(n),
                _t232 = _i63[0],
                _r75 = _i63[1],
                _o30 = _i63[2],
                _l12 = e.getNextSiblings();
              return (
                _o30.append.apply(_o30, [s].concat(_l12)),
                [_t232, _r75, s]
              );
            }
          },
          _i62 = _i64(r),
          o = _i62[0],
          s = _i62[1];
        return [o, s];
      }),
      (exports.$updateDOMSelection = oi),
      (exports.$updateRangeSelectionFromCaretRange = kl),
      (exports.ArtificialNode__DO_NOT_USE = _Gi),
      (exports.BEFORE_INPUT_COMMAND = ce),
      (exports.BLUR_COMMAND = Qe),
      (exports.CAN_REDO_COMMAND = Ve),
      (exports.CAN_UNDO_COMMAND = qe),
      (exports.CLEAR_EDITOR_COMMAND = Ge),
      (exports.CLEAR_HISTORY_COMMAND = He),
      (exports.CLICK_COMMAND = le),
      (exports.COLLABORATION_TAG = Gn),
      (exports.COMMAND_PRIORITY_BEFORE_CRITICAL = -4),
      (exports.COMMAND_PRIORITY_BEFORE_EDITOR = -8),
      (exports.COMMAND_PRIORITY_BEFORE_HIGH = -5),
      (exports.COMMAND_PRIORITY_BEFORE_LOW = -7),
      (exports.COMMAND_PRIORITY_BEFORE_NORMAL = -6),
      (exports.COMMAND_PRIORITY_CRITICAL = 4),
      (exports.COMMAND_PRIORITY_EDITOR = Qi),
      (exports.COMMAND_PRIORITY_HIGH = 3),
      (exports.COMMAND_PRIORITY_LOW = 1),
      (exports.COMMAND_PRIORITY_NORMAL = 2),
      (exports.COMPOSITION_END_COMMAND = fe),
      (exports.COMPOSITION_END_TAG = Qn),
      (exports.COMPOSITION_START_COMMAND = ue),
      (exports.COMPOSITION_START_TAG = Xn),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = _e),
      (exports.COPY_COMMAND = Ye),
      (exports.CUT_COMMAND = je),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = eo),
      (exports.DELETE_CHARACTER_COMMAND = de),
      (exports.DELETE_LINE_COMMAND = xe),
      (exports.DELETE_WORD_COMMAND = me),
      (exports.DRAGEND_COMMAND = Ue),
      (exports.DRAGOVER_COMMAND = We),
      (exports.DRAGSTART_COMMAND = ze),
      (exports.DROP_COMMAND = $e),
      (exports.DecoratorNode = _$i),
      (exports.ElementNode = _Ri4),
      (exports.FOCUS_COMMAND = Xe),
      (exports.FORMAT_ELEMENT_COMMAND = Be),
      (exports.FORMAT_TEXT_COMMAND = Ce),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = Jn),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = Le),
      (exports.INPUT_COMMAND = ae),
      (exports.INSERT_LINE_BREAK_COMMAND = he),
      (exports.INSERT_PARAGRAPH_COMMAND = ge),
      (exports.INSERT_TAB_COMMAND = Re),
      (exports.INTERNAL_$isBlock = bs),
      (exports.IS_ALL_FORMATTING = 2047),
      (exports.IS_BOLD = 1),
      (exports.IS_CODE = 16),
      (exports.IS_HIGHLIGHT = p),
      (exports.IS_ITALIC = 2),
      (exports.IS_STRIKETHROUGH = 4),
      (exports.IS_SUBSCRIPT = 32),
      (exports.IS_SUPERSCRIPT = 64),
      (exports.IS_UNDERLINE = 8),
      (exports.KEY_ARROW_DOWN_COMMAND = be),
      (exports.KEY_ARROW_LEFT_COMMAND = Oe),
      (exports.KEY_ARROW_RIGHT_COMMAND = ve),
      (exports.KEY_ARROW_UP_COMMAND = Ee),
      (exports.KEY_BACKSPACE_COMMAND = De),
      (exports.KEY_DELETE_COMMAND = Pe),
      (exports.KEY_DOWN_COMMAND = Ne),
      (exports.KEY_ENTER_COMMAND = Ae),
      (exports.KEY_ESCAPE_COMMAND = Ie),
      (exports.KEY_MODIFIER_COMMAND = Ze),
      (exports.KEY_SPACE_COMMAND = we),
      (exports.KEY_TAB_COMMAND = Fe),
      (exports.LineBreakNode = _rr),
      (exports.MOVE_TO_END = ke),
      (exports.MOVE_TO_START = Me),
      (exports.NODE_STATE_KEY = "$"),
      (exports.OUTDENT_CONTENT_COMMAND = Ke),
      (exports.PASTE_COMMAND = pe),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _Hi),
      (exports.REDO_COMMAND = Te),
      (exports.REMOVE_TEXT_COMMAND = ye),
      (exports.RootNode = _zi),
      (exports.SELECTION_CHANGE_COMMAND = oe),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = se),
      (exports.SELECT_ALL_COMMAND = Je),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = Vn),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = Hn),
      (exports.SKIP_SELECTION_FOCUS_TAG = qn),
      (exports.TEXT_TYPE_TO_FORMAT = A),
      (exports.TabNode = _Or),
      (exports.TextNode = _gr2),
      (exports.UNDO_COMMAND = Se),
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
        var n = Kl.apply(void 0, e);
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
      (exports.createCommand = ie),
      (exports.createEditor = function (t) {
        var e = t || {},
          n = Si(),
          r = e.theme || {},
          i = void 0 === t ? n : e.parentEditor || null,
          o = e.disableEvents || !1,
          s = Yi(),
          l = e.namespace || (null !== i ? i._config.namespace : zo()),
          c = e.editorState,
          a = [_zi, _gr2, _rr, _Or, _Hi, _Gi].concat(e.nodes || []),
          u = e.onError,
          f = e.html,
          d = void 0 === e.editable || e.editable;
        var h;
        if (void 0 === t && null !== n) h = n._nodes;
        else {
          h = new Map();
          for (var _t233 = 0; _t233 < a.length; _t233++) {
            var _e144 = a[_t233],
              _n108 = null,
              _r76 = null;
            if ("function" != typeof _e144) {
              var _t234 = _e144;
              ((_e144 = _t234.replace),
                (_n108 = _t234["with"]),
                (_r76 = _t234.withKlass || null));
            }
            zs(_e144);
            var _i65 = _e144.getType(),
              _o31 = to(_e144);
            h.set(_i65, {
              exportDOM: f && f["export"] ? f["export"].get(_e144) : void 0,
              klass: _e144,
              replace: _n108,
              replaceWithKlass: _r76,
              sharedNodeState: et(a[_t233]),
              transforms: _o31,
            });
          }
        }
        var g = new _io(
          s,
          i,
          h,
          {
            disableEvents: o,
            dom: babelHelpers["extends"]({}, eo, t && t.dom),
            namespace: l,
            theme: r,
          },
          u || console.error,
          (function (t, e) {
            var n = new Map(),
              r = new Set(),
              i = function i(t) {
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
                null !== n && i(n);
              }),
              e && i(e),
              n
            );
          })(h, f ? f["import"] : void 0),
          d,
          t,
        );
        return (
          void 0 !== c && ((g._pendingEditorState = c), (g._dirtyType = 2)),
          (function (t) {
            (t.registerCommand(ce, En, Qi),
              t.registerCommand(ae, bn, Qi),
              t.registerCommand(ue, An, Qi),
              t.registerCommand(fe, wn, Qi),
              t.registerCommand(Ne, In, Qi));
          })(g),
          g
        );
      }),
      (exports.createSharedNodeState = et),
      (exports.createState = function (t, e) {
        return new Z(t, e);
      }),
      (exports.declarePeerDependency = function (t, e) {
        return [t, e];
      }),
      (exports.defineExtension = function (t) {
        return t;
      }),
      (exports.flipDirection = Hs),
      (exports.getDOMOwnerDocument = ss),
      (exports.getDOMSelection = Cs),
      (exports.getDOMSelectionFromTarget = Ss),
      (exports.getDOMTextNode = To),
      (exports.getEditorPropertyFromDOMNode = yo),
      (exports.getNearestEditorFromDOMNode = po),
      (exports.getRegisteredNode = ao),
      (exports.getRegisteredNodeOrThrow = co),
      (exports.getStaticNodeConfig = zs),
      (exports.getStyleObjectFromCSS = tr),
      (exports.getTextDirection = function (t) {
        return E.test(t) ? "rtl" : b.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = to),
      (exports.isBlockDomNode = Es),
      (exports.isCurrentlyReadOnlyMode = _i),
      (exports.isDOMDocumentNode = So),
      (exports.isDOMNode = Ns),
      (exports.isDOMTextNode = Co),
      (exports.isDOMUnmanaged = $s),
      (exports.isDocumentFragment = vs),
      (exports.isExactShortcutMatch = Ho),
      (exports.isHTMLAnchorElement = function (t) {
        return Ts(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = Ts),
      (exports.isInlineDomNode = Os),
      (exports.isLexicalEditor = _o),
      (exports.isModifierMatch = Go),
      (exports.isSelectionCapturedInDecoratorInput = ho),
      (exports.isSelectionWithinEditor = go),
      (exports.makeStepwiseIterator = pl),
      (exports.mergeRegister = $l),
      (exports.normalizeClassNames = Kl),
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
        var n = Kl.apply(void 0, e);
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(_t$classList3, n);
      }),
      (exports.removeFromParent = ko),
      (exports.resetRandomKey = function () {
        lo = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = nr),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n109 in e) {
          var _r77 = e[_n109];
          null == _r77 ? t.removeProperty(_n109) : er(t, _n109, _r77);
        }
      }),
      (exports.setDOMUnmanaged = function (t) {
        t.__lexicalUnmanaged = !0;
      }),
      (exports.setNodeIndentFromDOM = Rs),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n110 in e)
          if (t[_n110] !== e[_n110]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.stopLexicalPropagation = Ln),
      (exports.toggleTextFormatType = No));
  },
  null,
);
