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
              _r3 = t ? t.get(_e4) : void 0;
            _r3 !== K && (void 0 !== _r3 && (_n3[1] = _r3), yield _n3);
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
    function z(t, e, n, r, i, o) {
      var s = t.getFirstChild();
      for (; null !== s; ) {
        var _t7 = s.__key;
        (s.__parent === e &&
          (Ki(s) && z(s, _t7, n, r, i, o),
          n.has(_t7) || o["delete"](_t7),
          i.push(_t7)),
          (s = s.getNextSibling()));
      }
    }
    var W = !1,
      U = 0;
    function Y(t) {
      U = t.timeStamp;
    }
    function j(t, e, n) {
      var r = "BR" === t.nodeName,
        i = e.__lexicalLineBreak;
      return (
        (i && (t === i || (r && t.previousSibling === i))) ||
        (r && void 0 !== Do(t, n))
      );
    }
    function J(t, e, n) {
      var r = Ss(ds(n));
      var i = null,
        o = null;
      null !== r &&
        r.anchorNode === t &&
        ((i = r.anchorOffset), (o = r.focusOffset));
      var s = t.nodeValue;
      null !== s && jo(e, s, i, o, !1);
    }
    function G(t, e, n) {
      if (Fr(t)) {
        var _e6 = t.anchor.getNode();
        if (_e6.is(n) && t.format !== _e6.getFormat()) return !1;
      }
      return So(e) && n.isAttached();
    }
    function H(t, e, n, r) {
      for (var _i2 = t; _i2 && !Bs(_i2); _i2 = ss(_i2)) {
        var _t8 = Do(_i2, e);
        if (void 0 !== _t8) {
          var _e7 = Ao(_t8, n);
          if (_e7) return zi(_e7) || !Ns(_i2) ? void 0 : [_i2, _e7];
        } else if (_i2 === r) return [r, Lo(n)];
      }
    }
    function V(t, e, n) {
      W = !0;
      var r = performance.now() - U > 100;
      try {
        Pi(t, function () {
          var i =
              Qr() ||
              (function (t) {
                return t.getEditorState().read(function () {
                  var t = Qr();
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
              _2 = H(_g, t, c, l);
            if (!_2) continue;
            var _p = _2[0],
              _y = _2[1];
            if ("characterData" === _h)
              r && kr(_y) && So(_g) && G(i, _g, _y) && J(_g, _y, t);
            else if ("childList" === _h) {
              u = !0;
              var _e8 = _d.addedNodes;
              for (var _n7 = 0; _n7 < _e8.length; _n7++) {
                var _r4 = _e8[_n7],
                  _i3 = wo(_r4),
                  _s2 = _r4.parentNode;
                if (
                  null != _s2 &&
                  _r4 !== a &&
                  null === _i3 &&
                  !j(_r4, _s2, t)
                ) {
                  if (o) {
                    var _t9 = (Ns(_r4) ? _r4.innerText : null) || _r4.nodeValue;
                    _t9 && (f += _t9);
                  }
                  _s2.removeChild(_r4);
                }
              }
              var _n8 = _d.removedNodes,
                _r5 = _n8.length;
              if (_r5 > 0) {
                var _e9 = 0;
                for (var _i4 = 0; _i4 < _r5; _i4++) {
                  var _r6 = _n8[_i4];
                  (j(_r6, _g, t) || a === _r6) && (_g.appendChild(_r6), _e9++);
                }
                _r5 !== _e9 && s.set(_p, _y);
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
                _r7 = _n0.addedNodes,
                _i5 = _n0.target;
              for (var _e10 = 0; _e10 < _r7.length; _e10++) {
                var _n1 = _r7[_e10],
                  _o2 = _n1.parentNode;
                null == _o2 ||
                  "BR" !== _n1.nodeName ||
                  j(_n1, _i5, t) ||
                  _o2.removeChild(_n1);
              }
            }
            n.takeRecords();
          }
          null !== i && (u && Ko(i), o && rs(t) && i.insertRawText(f));
        });
      } finally {
        W = !1;
      }
    }
    function q(t) {
      var e = t._observer;
      if (null !== e) {
        V(t, e.takeRecords(), e);
      }
    }
    function X(t) {
      (!(function (t) {
        0 === U && ds(t).addEventListener("textInput", Y, !0);
      })(t),
        (t._observer = new MutationObserver(function (e, n) {
          V(t, e, n);
        })));
    }
    var Q = function Q(t, e) {
      ((this.key = t),
        (this.parse = e.parse.bind(e)),
        (this.unparse = (e.unparse || ot).bind(e)),
        (this.isEqual = (e.isEqual || Object.is).bind(e)),
        (this.defaultValue = this.parse(void 0)),
        (this.resetOnCopyNode = e.resetOnCopyNode || !1));
    };
    function Z(t, e, n) {
      if (n === void 0) {
        n = "latest";
      }
      var r = ("latest" === n ? t.getLatest() : t).__state;
      return r ? r.getValue(e) : e.defaultValue;
    }
    function tt(t) {
      var e = new Map(),
        n = new Set();
      for (
        var _r8 = "function" == typeof t ? t : t.replace;
        _r8.prototype && void 0 !== _r8.prototype.getType;
        _r8 = Object.getPrototypeOf(_r8)
      ) {
        var _Ws = Ws(_r8),
          _t0 = _Ws.ownNodeConfig;
        if (_t0 && _t0.stateConfigs)
          for (var _r9 of _t0.stateConfigs) {
            var _t1 = void 0;
            ("stateConfig" in _r9
              ? ((_t1 = _r9.stateConfig), _r9.flat && n.add(_t1.key))
              : (_t1 = _r9),
              e.set(_t1.key, _t1));
          }
      }
      return { flatKeys: n, sharedConfigMap: e };
    }
    var _et = (function () {
      function et(t, e, n, r, i) {
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
      var _proto3 = et.prototype;
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
        return (it(t) && (e.$ = t), e);
      };
      _proto3.getWritable = function getWritable(t) {
        if (this.node === t) return this;
        var e = this.sharedNodeState,
          n = this.unknownState,
          r = new Map(this.knownState);
        return new et(
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
          (i && (delete i[n], (this.unknownState = it(i))), this.size++),
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
      return et;
    })();
    function nt(t) {
      var e = t.getWritable(),
        n = e.__state ? e.__state.getWritable(e) : new _et(e, rt(e));
      return ((e.__state = n), n);
    }
    function rt(t) {
      return t.__state
        ? t.__state.sharedNodeState
        : ao(ws(), t.getType()).sharedNodeState;
    }
    function it(t) {
      if (t) for (var _e15 in t) return t;
    }
    function ot(t) {
      return t;
    }
    function st(t, e, n) {
      for (var _ref12 of e.knownState) {
        var _r0 = _ref12[0];
        var _i8 = _ref12[1];
        {
          if (t.has(_r0.key)) continue;
          t.add(_r0.key);
          var _e16 = n ? n.getValue(_r0) : _r0.defaultValue;
          if (_e16 !== _i8 && !_r0.isEqual(_e16, _i8)) return !0;
        }
      }
      return !1;
    }
    function lt(t, e, n) {
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
    function ct(t, e) {
      var n = t.__state;
      return n && n.node === t ? n.getWritable(e) : n;
    }
    function at(t, e) {
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
              (t && st(n, t, e)) ||
              (e && st(n, e, t)) ||
              (t && lt(n, t, e)) ||
              (e && lt(n, e, t))
            );
          })(c, a))
      );
    }
    function ut(t, e) {
      var n = t.mergeWithSibling(e),
        r = Ci()._normalizedNodes;
      return (r.add(t.__key), r.add(e.__key), n);
    }
    function ft(t) {
      var e,
        n,
        r = t;
      if ("" !== r.__text || !r.isSimpleText() || r.isUnmergeable()) {
        for (
          ;
          null !== (e = r.getPreviousSibling()) &&
          kr(e) &&
          e.isSimpleText() &&
          !e.isUnmergeable();
        ) {
          if ("" !== e.__text) {
            if (at(e, r)) {
              r = ut(e, r);
              break;
            }
            break;
          }
          e.remove();
        }
        for (
          ;
          null !== (n = r.getNextSibling()) &&
          kr(n) &&
          n.isSimpleText() &&
          !n.isUnmergeable();
        ) {
          if ("" !== n.__text) {
            if (at(r, n)) {
              r = ut(r, n);
              break;
            }
            break;
          }
          n.remove();
        }
      } else r.remove();
    }
    function dt(t) {
      return (ht(t.anchor), ht(t.focus), t);
    }
    function ht(t) {
      for (; "element" === t.type; ) {
        var _e18 = t.getNode(),
          _n15 = t.offset;
        var _r1 = void 0,
          _i9 = void 0;
        if (
          (_n15 === _e18.getChildrenSize()
            ? ((_r1 = _e18.getChildAtIndex(_n15 - 1)), (_i9 = !0))
            : ((_r1 = _e18.getChildAtIndex(_n15)), (_i9 = !1)),
          kr(_r1))
        ) {
          t.set(_r1.__key, _i9 ? _r1.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!Ki(_r1)) break;
        t.set(_r1.__key, _i9 ? _r1.getChildrenSize() : 0, "element", !0);
      }
    }
    function gt(t) {
      throw new Error(t);
    }
    var _t = Symbol["for"]("@lexical/CachedTextSize");
    function pt(t) {
      if (Ki(t)) {
        var _e19 = Pt.get(t.__key),
          _n16 = _e19 && _e19.__lexicalTextContent;
        return (
          "string" != typeof _n16 &&
            gt(
              "cachedTextSize: missing __lexicalTextContent for ElementNode of type " +
                t.getType(),
            ),
          _n16.length
        );
      }
      var e = t[_t];
      return (
        void 0 === e &&
          gt(
            "cachedTextSize: missing entry for leaf " +
              t.getType() +
              " key " +
              t.__key,
          ),
        e
      );
    }
    function yt(t) {
      Ki(t) ||
        (void 0 === t[_t] &&
          (t[_t] = kr(t) ? t.__text.length : t.getTextContentSize()));
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
          gt(
            "$bubbleChildFirstText: missing __lexicalFirstTextKey on element keyed DOM",
          ),
        null === e)
      )
        return;
      var n = It.get(e);
      kr(n) && ((Nt = n.getFormat()), (vt = n.getStyle()), (kt = e));
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
        var _n17 = ie(t);
        _n17.parentNode === e && e.removeChild(_n17);
      }
      if (!r) {
        if ((Ct._keyToDOMMap["delete"](t), Ki(n))) {
          var _t12 = Ys(n, Dt);
          zt(_t12, 0, _t12.length - 1, null);
        }
        void 0 !== n && ts(Rt, St, bt, n, "destroyed");
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
        var _r10 = t.classList.contains(n);
        e > 0 && !_r10
          ? t.classList.add(n)
          : e < 1 && _r10 && t.classList.remove(n);
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
        if (Ui(t)) return null;
        var n = t.getParentOrThrow();
        return gs(n) && null === n.__dir ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function Gt(e, n) {
      var r = It.get(e);
      if ((void 0 === r && t(60), null !== n)) {
        var _t13 = Dt.get(e);
        if (void 0 !== _t13 && _t13.__parent !== r.__parent) {
          var _t14 = Pt.get(e);
          if (void 0 !== _t14) return (n.insertChild(_t14), Zt(e, n.element));
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
        kr(r)
          ? i.setAttribute("data-lexical-text", "true")
          : zi(r) && i.setAttribute("data-lexical-decorator", "true"),
        Ki(r))
      ) {
        var _t15 = r.__indent,
          _e21 = r.__size;
        if ((Jt(i, r), 0 !== _t15 && Yt(i, _t15), 0 === _e21))
          ((i.__lexicalTextContent = ""), (i.__lexicalFirstTextKey = null));
        else {
          var _t16 = _e21 - 1;
          Ht(Ys(r, It), r, 0, _t16, Lt.$getDOMSlot(r, i, Ct));
        }
        var _n18 = r.__format;
        (0 !== _n18 && jt(i, _n18), r.isInline() || qt(null, r, i));
      } else {
        var _t17 = r.getTextContent();
        if (zi(r)) {
          var _t18 = r.decorate(Ct, xt);
          (null !== _t18 && te(e, _t18), (i.contentEditable = "false"));
        }
        Tt += _t17;
      }
      return (
        null !== n && n.insertChild(i),
        Lt.$decorateDOM(r, null, i, Ct),
        yt(r),
        ts(Rt, St, bt, r, "created"),
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
        (null !== _n19 && kr(_n19)
          ? null === Nt &&
            ((Nt = _n19.getFormat()), (vt = _n19.getStyle()), (kt = _n19.__key))
          : Ki(_n19) && l < r && !_n19.isInline() && (Tt += v),
          Mt(_e22));
      }
      var c = Ct._keyToDOMMap.get(e.__key);
      (void 0 === c &&
        gt(
          "$createChildren: Element with key " +
            e.__key +
            " missing from keyToDOMMap",
        ),
        (c.__lexicalTextContent = Tt),
        (c.__lexicalFirstTextKey = kt),
        (Tt = o + Tt),
        Mt(s));
    }
    function Vt(t, e) {
      if (t) {
        var _n20 = t.__last;
        if (_n20) {
          var _t19 = e.get(_n20);
          if (_t19)
            return lr(_t19)
              ? "line-break"
              : zi(_t19) && _t19.isInline()
                ? "decorator"
                : null;
        }
        return "empty";
      }
      return null;
    }
    function qt(t, e, n) {
      var r = Vt(t, Dt),
        i = Vt(e, It);
      r !== i && Lt.$getDOMSlot(e, n, Ct).setManagedLineBreak(i);
    }
    function Xt(e, n, r) {
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
            gt(
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
                    _r11 = _s3,
                    _a = 0;
                  for (; null !== _r11 && _a < _u; ) {
                    var _t22 = Dt.get(_r11);
                    if (void 0 === _t22) break;
                    ((_e23 += pt(_t22)),
                      _a < _u - 1 &&
                        Ki(_t22) &&
                        !_t22.isInline() &&
                        (_e23 += 2));
                    var _n21 = It.get(_r11);
                    ((_r11 = _n21 ? _n21.__next : null), _a++);
                  }
                  for (_r11 = _s3, _a = 0; null !== _r11 && _a < _u; ) {
                    var _t23 = It.get(_r11);
                    if (void 0 === _t23) break;
                    var _e24 = Ot();
                    (Zt(_r11, l),
                      kr(_t23) &&
                        null === Nt &&
                        ((Nt = _t23.getFormat()),
                        (vt = _t23.getStyle()),
                        (kt = _t23.__key)),
                      Mt(_e24),
                      (_r11 = _t23.__next),
                      _a++);
                  }
                  var _f = "";
                  for (_r11 = _s3, _a = 0; null !== _r11 && _a < _u; ) {
                    var _t24 = It.get(_r11);
                    if (void 0 === _t24) break;
                    var _e25 = void 0;
                    if (Ki(_t24)) {
                      var _n22 = Ct._keyToDOMMap.get(_r11),
                        _i1 = _n22 && _n22.__lexicalTextContent;
                      ("string" != typeof _i1 &&
                        gt(
                          "reconcileChildren same-size suffix: missing __lexicalTextContent on child of type " +
                            _t24.getType() +
                            " after reconcile",
                        ),
                        (_e25 = _i1));
                    } else _e25 = _t24.getTextContent();
                    ((_f += _e25),
                      _a < _u - 1 && Ki(_t24) && !_t24.isInline() && (_f += v),
                      (_r11 = _t24.__next),
                      _a++);
                  }
                  var _d2 = _t20.slice(0, _t20.length - _e23) + _f;
                  return (
                    (c.__lexicalTextContent = _d2),
                    (Tt = i + _d2),
                    void Qt(n, c, _o4)
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
                          Ki(_e26) &&
                          !_e26.isInline() &&
                          (S += 2));
                    }
                    for (var _t32 of m) {
                      var _e27 = Ot();
                      if ("reconcile" === _t32.kind) Zt(_t32.key, n.element);
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
                          kr(_e29) &&
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
                      if (Ki(_e30)) {
                        var _r12 = Ct._keyToDOMMap.get(h[_t34]),
                          _i10 = _r12 && _r12.__lexicalTextContent;
                        ("string" != typeof _i10 &&
                          gt(
                            "tryReconcileSuffixWithSizeDelta: missing __lexicalTextContent on child of type " +
                              _e30.getType() +
                              " after suffix reconcile",
                          ),
                          (_n24 = _i10));
                      } else _n24 = _e30.getTextContent();
                      ((T += _n24),
                        _t34 < s - 1 &&
                          Ki(_e30) &&
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
                      gt(
                        "reconcileChildren: $tryReconcileSuffixWithSizeDelta returned true without writing __lexicalTextContent",
                      ),
                    (Tt = i + _t35),
                    void Qt(n, c, _o4)
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
                var _r13 = Kt || wt.has(_t36) || At.has(_t36),
                  _i11 = Ot();
                if (_r13) Zt(_t36, l);
                else {
                  var _n26 = void 0,
                    _r14 = void 0;
                  if (Ki(_e31)) {
                    _r14 = Pt.get(_t36);
                    var _i12 = _r14 && _r14.__lexicalTextContent;
                    ("string" != typeof _i12 &&
                      gt(
                        "reconcileChildren structurally-clean walk: missing __lexicalTextContent on non-dirty child of type " +
                          _e31.getType(),
                      ),
                      (_n26 = _i12));
                  } else _n26 = _e31.getTextContent();
                  ((Tt += _n26), void 0 !== _r14 && Et(_r14));
                }
                (kr(_e31)
                  ? null === Nt &&
                    ((Nt = _e31.getFormat()),
                    (vt = _e31.getStyle()),
                    (kt = _e31.__key))
                  : Ki(_e31) && _n25 < s - 1 && !_e31.isInline() && (Tt += v),
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
            if (_t37 === _i13) Zt(_t37, l);
            else {
              var _e32 = ie(_t37),
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
            kr(_o6) &&
              null === Nt &&
              ((Nt = _o6.getFormat()), (vt = _o6.getStyle()), (kt = _o6.__key));
          } else {
            var _i14 = Ys(e, Dt),
              _c = Ys(n, It);
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
                    _r15 = n[d],
                    _i15 = Ot();
                  if (_t39 === _r15) ((u = ee(Zt(_r15, o.element))), f++, d++);
                  else {
                    if ((void 0 === a && (a = ne(n, d)), void 0 === c))
                      c = ne(e, f);
                    else if (!c.has(_t39)) {
                      (f++, Mt(_i15));
                      continue;
                    }
                    if (!a.has(_t39)) {
                      ((u = ee(ie(_t39))),
                        Bt(_t39, o.element),
                        f++,
                        c["delete"](_t39),
                        Mt(_i15));
                      continue;
                    }
                    if (c.has(_r15)) {
                      var _t40 = os(Ct, _r15);
                      (_t40 !== u && o.withBefore(u).insertChild(_t40),
                        (u = ee(Zt(_r15, o.element))),
                        f++,
                        d++);
                    } else (Gt(_r15, o.withBefore(u)), d++);
                  }
                  var _s4 = It.get(_r15);
                  (null !== _s4 && kr(_s4)
                    ? null === Nt &&
                      ((Nt = _s4.getFormat()),
                      (vt = _s4.getStyle()),
                      (kt = _s4.__key))
                    : Ki(_s4) && d <= l && !_s4.isInline() && (Tt += v),
                    Mt(_i15));
                }
                var h = f > s,
                  g = d > l;
                if (h && !g) {
                  var _e33 = n[l + 1],
                    _r16 = void 0 === _e33 ? null : Ct.getElementByKey(_e33);
                  Ht(n, t, d, l, o.withBefore(_r16));
                } else g && !h && zt(e, f, s, o.element);
              })(n, _i14, _c, o, s, r);
          }
          ((c.__lexicalTextContent = Tt),
            (c.__lexicalFirstTextKey = kt),
            (Tt = i + Tt));
        })(e, n, Lt.$getDOMSlot(n, r, Ct)),
        gs(n) ||
          ((i = n),
          null == Nt || Nt === i.__textFormat || $t || i.setTextFormat(Nt),
          (function (t) {
            null == vt || vt === t.__textStyle || $t || t.setTextStyle(vt);
          })(n)));
    }
    function Qt(t, e, n) {
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
          if (kr(_t42))
            return ((Nt = _t42.getFormat()), void (vt = _t42.getStyle()));
        }
      }
      e.__lexicalFirstTextKey = kt;
    }
    function Zt(e, n) {
      var r = Dt.get(e);
      var i = It.get(e);
      (void 0 !== r && void 0 !== i) || t(61);
      var o = Kt || wt.has(e) || At.has(e),
        s = os(Ct, e);
      if (r === i && !o) {
        var _t43;
        if (Ki(r)) {
          var _e35 = s.__lexicalTextContent;
          ("string" != typeof _e35 &&
            gt(
              "reconcileNode: missing __lexicalTextContent on non-dirty element of type " +
                r.getType(),
            ),
            (_t43 = _e35),
            Et(s));
        } else _t43 = r.getTextContent();
        return ((Tt += _t43), s);
      }
      if (
        (r !== i && o && ts(Rt, St, bt, i, "updated"),
        Lt.$updateDOM(i, r, s, Ct))
      ) {
        var _r17 = Gt(e, null);
        return (
          null === n && t(62),
          n.replaceChild(_r17, s),
          Bt(e, null),
          _r17
        );
      }
      if (Ki(r)) {
        Ki(i) || t(334, e);
        var _n28 = i.__indent;
        (Kt || _n28 !== r.__indent) && Yt(s, _n28);
        var _l2 = i.__format;
        if (((Kt || _l2 !== r.__format) && jt(s, _l2), o))
          (Xt(r, i, s), Ui(i) || i.isInline() || qt(r, i, s));
        else {
          var _t44 = s.__lexicalTextContent;
          ("string" != typeof _t44 &&
            gt(
              "reconcileNode: missing __lexicalTextContent on cloned non-dirty element of type " +
                r.getType(),
            ),
            (Tt += _t44),
            Et(s));
        }
        if (
          (Kt || i.__dir !== r.__dir || i.__parent !== r.__parent) &&
          (Jt(s, i), Ui(i) && !Kt)
        )
          for (var _t45 of i.getChildren())
            if (Ki(_t45)) {
              Jt(os(Ct, _t45.getKey()), _t45);
            }
      } else {
        var _t46 = i.getTextContent();
        if (zi(i)) {
          var _t47 = i.decorate(Ct, xt);
          null !== _t47 && te(e, _t47);
        }
        Tt += _t46;
      }
      if (!$t && Ui(i)) {
        var _t48 = i.getLatest();
        if (_t48.__cachedText !== Tt) {
          var _e36 = _t48.getWritable();
          ((_e36.__cachedText = Tt), (i = _e36));
        }
      }
      return (Lt.$decorateDOM(i, r, s, Ct), yt(i), s);
    }
    function te(t, e) {
      var n = Ct._pendingDecorators;
      var r = Ct._decorators;
      if (null === n) {
        if (r[t] === e) return;
        n = Po(Ct);
      }
      n[t] = e;
    }
    function ee(t) {
      var e = t.nextSibling;
      return (
        null !== e && e === Ct._blockCursorElement && (e = e.nextSibling),
        e
      );
    }
    function ne(t, e) {
      var n = new Set();
      for (var _r18 = e; _r18 < t.length; _r18++) n.add(t[_r18]);
      return n;
    }
    function re(t, e, n, r, i, o) {
      ((Tt = ""),
        (Nt = null),
        (vt = null),
        (kt = null),
        (Kt = 2 === r),
        (Ct = n),
        (xt = n._config),
        (Lt = n._config.dom || no),
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
                var _r19 = _e37.__parent;
                if (null === _r19) continue;
                var _i17 = t.get(_r19);
                (void 0 === _i17 && ((_i17 = new Set()), t.set(_r19, _i17)),
                  _i17.add(_n29));
              }
            };
          return (e(At.keys()), e(wt), t);
        })()));
      var s = new Map();
      return (
        (Rt = s),
        Zt("root", null),
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
        (Lt = no),
        s
      );
    }
    function ie(e) {
      var n = Pt.get(e);
      return (void 0 === n && t(75, e), n);
    }
    function oe(t) {
      return { type: t };
    }
    var se = oe("SELECTION_CHANGE_COMMAND"),
      le = oe("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"),
      ce = oe("CLICK_COMMAND"),
      ae = oe("BEFORE_INPUT_COMMAND"),
      ue = oe("INPUT_COMMAND"),
      fe = oe("COMPOSITION_START_COMMAND"),
      de = oe("COMPOSITION_END_COMMAND"),
      he = oe("DELETE_CHARACTER_COMMAND"),
      ge = oe("INSERT_LINE_BREAK_COMMAND"),
      _e = oe("INSERT_PARAGRAPH_COMMAND"),
      pe = oe("CONTROLLED_TEXT_INSERTION_COMMAND"),
      ye = oe("PASTE_COMMAND"),
      me = oe("REMOVE_TEXT_COMMAND"),
      xe = oe("DELETE_WORD_COMMAND"),
      Ce = oe("DELETE_LINE_COMMAND"),
      Se = oe("FORMAT_TEXT_COMMAND"),
      Te = oe("UNDO_COMMAND"),
      Ne = oe("REDO_COMMAND"),
      ve = oe("KEYDOWN_COMMAND"),
      ke = oe("KEY_ARROW_RIGHT_COMMAND"),
      Oe = oe("MOVE_TO_END"),
      Me = oe("KEY_ARROW_LEFT_COMMAND"),
      Ee = oe("MOVE_TO_START"),
      be = oe("KEY_ARROW_UP_COMMAND"),
      Ae = oe("KEY_ARROW_DOWN_COMMAND"),
      we = oe("KEY_ENTER_COMMAND"),
      De = oe("KEY_SPACE_COMMAND"),
      Ie = oe("KEY_BACKSPACE_COMMAND"),
      Pe = oe("KEY_ESCAPE_COMMAND"),
      Fe = oe("KEY_DELETE_COMMAND"),
      Re = oe("KEY_TAB_COMMAND"),
      Le = oe("INSERT_TAB_COMMAND"),
      Ke = oe("INDENT_CONTENT_COMMAND"),
      $e = oe("OUTDENT_CONTENT_COMMAND"),
      Be = oe("DROP_COMMAND"),
      ze = oe("FORMAT_ELEMENT_COMMAND"),
      We = oe("DRAGSTART_COMMAND"),
      Ue = oe("DRAGOVER_COMMAND"),
      Ye = oe("DRAGEND_COMMAND"),
      je = oe("COPY_COMMAND"),
      Je = oe("CUT_COMMAND"),
      Ge = oe("SELECT_ALL_COMMAND"),
      He = oe("CLEAR_EDITOR_COMMAND"),
      Ve = oe("CLEAR_HISTORY_COMMAND"),
      qe = oe("CAN_REDO_COMMAND"),
      Xe = oe("CAN_UNDO_COMMAND"),
      Qe = oe("FOCUS_COMMAND"),
      Ze = oe("BLUR_COMMAND"),
      tn = oe("KEY_MODIFIER_COMMAND"),
      en = Object.freeze({}),
      nn = [
        [
          "keydown",
          function (t, e) {
            ((rn = t.timeStamp), (on = t.key), "Backspace" !== t.key && Mn());
            if (e.isComposing()) return;
            is(e, ve, t);
          },
        ],
        [
          "pointerdown",
          function (t, e) {
            var n = t.target,
              r = t.pointerType;
            vs(n) &&
              "touch" !== r &&
              "pen" !== r &&
              0 === t.button &&
              Pi(e, function () {
                ho(n) || (hn = !0);
              });
          },
        ],
        [
          "compositionstart",
          function (t, e) {
            is(e, fe, t);
          },
        ],
        [
          "compositionend",
          function (t, e) {
            o
              ? (_n = !0)
              : l || (!a && !d)
                ? is(e, de, t)
                : ((pn = !0), (yn = t.data));
          },
        ],
        [
          "input",
          function (t, e) {
            (t.stopPropagation(),
              Mn(),
              Pi(
                e,
                function () {
                  e.dispatchCommand(ue, t);
                },
                { event: t },
              ),
              (ln = null));
          },
        ],
        [
          "click",
          function (t, e) {
            Pi(e, function () {
              var n = Qr(),
                r = Ss(ds(e)),
                i = Zr();
              if (r)
                if (Fr(n)) {
                  var _e39 = n.anchor,
                    _o7 = _e39.getNode();
                  if (
                    "element" === _e39.type &&
                    0 === _e39.offset &&
                    n.isCollapsed() &&
                    !Ui(_o7) &&
                    1 === Ro().getChildrenSize() &&
                    _o7.getTopLevelElementOrThrow().isEmpty() &&
                    null !== i &&
                    n.is(i)
                  )
                    (r.removeAllRanges(), (n.dirty = !0));
                  else if (3 === t.detail && !n.isCollapsed()) {
                    if (_o7 !== n.focus.getNode()) {
                      var _t49 = Us(_o7, function (t) {
                        return Ki(t) && !t.isInline();
                      });
                      Ki(_t49) && _t49.select(0);
                    }
                  }
                } else if (
                  "touch" === t.pointerType ||
                  "pen" === t.pointerType
                ) {
                  var _n30 = r.anchorNode;
                  if (Ns(_n30) || So(_n30)) {
                    Ko(Xr(i, r, e, t));
                  }
                }
              is(e, ce, t);
            });
          },
        ],
        ["cut", en],
        ["copy", en],
        ["dragstart", en],
        ["dragover", en],
        ["dragend", en],
        ["paste", en],
        ["focus", en],
        ["blur", en],
        ["drop", en],
      ];
    s &&
      nn.push([
        "beforeinput",
        function (t, e) {
          return (function (t, e) {
            var n = t.inputType;
            if ("deleteCompositionText" === n || (o && rs(e))) return;
            if ("insertCompositionText" === n) return;
            is(e, ae, t);
          })(t, e);
        },
      ]);
    var rn = 0,
      on = null,
      sn = 0,
      ln = null,
      cn = !1,
      an = null;
    var un = new WeakMap(),
      fn = new WeakMap();
    var dn = !1,
      hn = !1,
      gn = !1,
      _n = !1,
      pn = !1,
      yn = "",
      mn = null,
      xn = [0, "", 0, "root", 0];
    function Cn(t, e, n, r, i) {
      var o = t.anchor,
        l = t.focus,
        c = o.getNode(),
        a = Ci(),
        u = Ss(ds(a)),
        f = null !== u ? u.anchorNode : null,
        d = o.key,
        h = a.getElementByKey(d),
        g = n.length;
      return (
        d !== l.key ||
        !kr(c) ||
        (((!i && (!s || sn < r + 50)) || (c.isDirty() && g < 2) || Bo(n)) &&
          o.offset !== l.offset &&
          !c.isComposing()) ||
        Co(c) ||
        (c.isDirty() && g > 1) ||
        ((i || !s) && null !== h && !c.isComposing() && f !== No(h)) ||
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
            i = xo(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!r.canInsertTextBefore() && !e.isComposing()) ||
                i ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (kr(e) || (Ki(e) && e.isInline())) &&
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
    function Sn(t, e) {
      return (
        So(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function Tn(e, n, r) {
      var i = e.anchorNode,
        o = e.anchorOffset,
        s = e.focusNode,
        l = e.focusOffset;
      (dn && ((dn = !1), Sn(i, o) && Sn(s, l) && !mn)) ||
        Pi(n, function () {
          if (!r) return void Ko(null);
          if (!_o(n, i, s)) return;
          var c = Qr();
          if (mn && Fr(c) && c.isCollapsed()) {
            var _t50 = c.anchor,
              _e40 = mn.anchor;
            ((_t50.key === _e40.key && _t50.offset === _e40.offset + 1) ||
              (1 === _t50.offset &&
                _e40.getNode().is(_t50.getNode().getPreviousSibling()))) &&
              ((c = mn.clone()), Ko(c));
          }
          if (((mn = null), Fr(c))) {
            var _r20 = c.anchor,
              _i18 = _r20.getNode();
            if (c.isCollapsed()) {
              "Range" === e.type &&
                e.anchorNode === e.focusNode &&
                (c.dirty = !0);
              var _o8 = ds(n).event,
                _s5 = _o8 ? _o8.timeStamp : performance.now(),
                _xn = xn,
                _l3 = _xn[0],
                _a2 = _xn[1],
                _u2 = _xn[2],
                _f2 = _xn[3],
                _d3 = _xn[4],
                _h2 = Ro(),
                _g2 = !1 === n.isComposing() && "" === _h2.getTextContent();
              if (_s5 < _d3 + 200 && _r20.offset === _u2 && _r20.key === _f2)
                Nn(c, _l3, _a2);
              else if ("text" === _r20.type) (kr(_i18) || t(141), vn(c, _i18));
              else if ("element" === _r20.type && !_g2) {
                Ki(_i18) || t(259);
                var _e41 = _r20.getNode();
                _e41.isEmpty()
                  ? (function (t, e) {
                      var n = e.getTextFormat(),
                        r = e.getTextStyle();
                      Nn(t, n, r);
                    })(c, _e41)
                  : Nn(c, c.format, "");
              }
            } else {
              var _t51 = _r20.key,
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
                  _r21 = _e43.getTextContentSize();
                if (
                  kr(_e43) &&
                  0 !== _r21 &&
                  !(
                    (0 === _t52 && _e43.__key === _f3 && _a3 === _r21) ||
                    (_t52 === _i19 - 1 && _e43.__key === _d4 && 0 === _u3)
                  ) &&
                  ((_g3 = !0), (_h3 &= _e43.getFormat()), 0 === _h3)
                )
                  break;
              }
              c.format = _g3 ? _h3 : 0;
            }
          }
          is(n, se, void 0);
        });
    }
    function Nn(t, e, n) {
      (t.format === e && t.style === n) ||
        ((t.format = e), (t.style = n), (t.dirty = !0));
    }
    function vn(t, e) {
      Nn(t, e.getFormat(), e.getStyle());
    }
    function kn(t) {
      if (!t.getTargetRanges) return null;
      var e = t.getTargetRanges();
      return 0 === e.length ? null : e[0];
    }
    function On(t) {
      if (null == t || t.length <= 1 || null == on) return;
      var e =
        1 === on.length
          ? on
          : "Enter" === on
            ? "\n"
            : "Tab" === on
              ? "\t"
              : null;
      if (!e) return;
      var n = Qr();
      if (!Fr(n) || !n.isCollapsed()) return;
      var r = n.anchor.getNode();
      if (!kr(r)) return;
      var i = n.anchor.offset;
      if (r.getTextContentSize() === i) {
        var _t53 = r.getNextSibling();
        if ("\n" === e) {
          if (lr(_t53)) _t53.selectEnd();
          else if (!_t53) {
            var _t54 = Us(r, Gr),
              _e44 = _t54 && _t54.getNextSibling();
            Ki(_e44) && _e44.selectStart();
          }
        } else
          "\t" === e
            ? br(_t53) && _t53.selectEnd()
            : kr(_t53) && _t53.getTextContent()[0] === e && _t53.select(1, 1);
      } else r.getTextContent()[i] === e && r.select(i + 1, i + 1);
    }
    function Mn() {
      ((cn = !1), null !== an && (clearTimeout(an), (an = null)));
    }
    function En() {
      (Mn(), (cn = !0), (an = setTimeout(Mn, 0)));
    }
    function bn(e) {
      var _ref15;
      var n = e.inputType,
        r = kn(e),
        i = Ci(),
        o = Qr();
      if ("insertText" === n && e.data && cn) {
        if ((Mn(), e.preventDefault(), Fr(o) && !o.isCollapsed())) {
          var _t55 = o.isBackward() ? o.anchor : o.focus;
          (o.anchor.set(_t55.key, _t55.offset, _t55.type),
            o.focus.set(_t55.key, _t55.offset, _t55.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === o) {
          var _t56 = Zr();
          if (!Fr(_t56)) return !0;
          Ko(_t56.clone());
        }
        if (Fr(o)) {
          var _n32 = o.anchor.key === o.focus.key;
          if (
            ((s = e.timeStamp),
            "MediaLast" === on && s < rn + 30 && i.isComposing() && _n32)
          ) {
            if (
              (Eo(null),
              (rn = 0),
              setTimeout(function () {
                Pi(i, function () {
                  Eo(null);
                });
              }, 30),
              Fr(o))
            ) {
              var _e45 = o.anchor.getNode();
              (_e45.markDirty(), kr(_e45) || t(142), vn(o, _e45));
            }
          } else {
            if (
              (Eo(null),
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
              (_u4 && o.isCollapsed() && (_u4 = !zi(ns(o.anchor, !0))), !_u4)
            ) {
              is(i, he, !0);
              var _t58 = Qr();
              f &&
                Fr(_t58) &&
                _t58.isCollapsed() &&
                ((mn = _t58),
                setTimeout(function () {
                  return (mn = null);
                }));
            }
          }
          return !0;
        }
      }
      var s;
      if (!Fr(o)) return !0;
      var c = e.data;
      (null !== ln && Yo(!1, i, ln),
        (o.dirty && null === ln) ||
          !o.isCollapsed() ||
          Ui(o.anchor.getNode()) ||
          null === r ||
          o.applyDOMRange(r),
        (ln = null));
      var a = o.anchor,
        u = o.focus,
        d = a.getNode(),
        h = u.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === c) (e.preventDefault(), is(i, ge, !1));
        else if (c === v) (e.preventDefault(), is(i, _e, void 0));
        else if (null == c && e.dataTransfer) {
          var _t59 = e.dataTransfer.getData("text/plain");
          (e.preventDefault(), o.insertRawText(_t59));
        } else
          null != c && Cn(o, r, c, e.timeStamp, !0)
            ? (e.preventDefault(), is(i, pe, c), On(c))
            : (ln = c);
        return ((sn = e.timeStamp), !0);
      }
      switch ((e.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          is(i, pe, e);
          On(
            (_ref15 = e.dataTransfer
              ? e.dataTransfer.getData("text/plain")
              : null) != null
              ? _ref15
              : e.data,
          );
          break;
        case "insertFromComposition":
          (Eo(null), is(i, pe, e));
          break;
        case "insertLineBreak":
          (Eo(null), is(i, ge, !1));
          break;
        case "insertParagraph":
          (Eo(null), gn && !l ? ((gn = !1), is(i, ge, !1)) : is(i, _e, void 0));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          is(i, ye, e);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || Ki(t) || Ki(e) || !xo(t) || !xo(e);
          })(d, h) && is(i, me, e);
          break;
        case "deleteByDrag":
          (cs(Xn), is(i, me, e));
          break;
        case "deleteByCut":
          is(i, me, e);
          break;
        case "deleteContent":
          is(i, he, !1);
          break;
        case "deleteWordBackward":
          is(i, xe, !0);
          break;
        case "deleteWordForward":
          is(i, xe, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          is(i, Ce, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          is(i, Ce, !1);
          break;
        case "formatStrikeThrough":
          is(i, Se, "strikethrough");
          break;
        case "formatBold":
          is(i, Se, "bold");
          break;
        case "formatItalic":
          is(i, Se, "italic");
          break;
        case "formatUnderline":
          is(i, Se, "underline");
          break;
        case "historyUndo":
          is(i, Te, void 0);
          break;
        case "historyRedo":
          is(i, Ne, void 0);
      }
      return !0;
    }
    function An(t) {
      if (Ns(t.target) && ho(t.target)) return !0;
      var e = Ci(),
        n = Qr(),
        r = t.data,
        i = kn(t);
      if (null != r && Fr(n) && Cn(n, i, r, t.timeStamp, !1)) {
        _n && (In(e, r), (_n = !1));
        var _i20 = n.anchor.getNode(),
          _l4 = Ss(ds(e));
        if (null === _l4) return !0;
        var _c3 = n.isBackward(),
          _a5 = _c3 ? n.anchor.offset : n.focus.offset,
          _u5 = _c3 ? n.focus.offset : n.anchor.offset;
        (s &&
          !n.isCollapsed() &&
          kr(_i20) &&
          null !== _l4.anchorNode &&
          _i20.getTextContent().slice(0, _a5) +
            r +
            _i20.getTextContent().slice(_a5 + _u5) ===
            Uo(_l4.anchorNode)) ||
          is(e, pe, r);
        var _d5 = r.length;
        (o &&
          _d5 > 1 &&
          "insertCompositionText" === t.inputType &&
          !e.isComposing() &&
          ((n.anchor.offset -= _d5),
          (n._cachedNodes = null),
          (n._cachedIsBackward = null)),
          f && e.isComposing() && ((rn = 0), Eo(null)));
      } else {
        (Yo(!1, e, null !== r ? r : void 0),
          _n && (In(e, r || void 0), (_n = !1)));
      }
      return (
        (function () {
          yi();
          var t = Ci();
          q(t);
        })(),
        !0
      );
    }
    function wn(t) {
      var e = Ci(),
        n = Qr();
      if (Fr(n) && !e.isComposing()) {
        var _r22 = n.anchor,
          _i21 = n.anchor.getNode();
        (Eo(_r22.key),
          cs(Qn),
          (t.timeStamp < rn + 30 ||
            "element" === _r22.type ||
            !n.isCollapsed() ||
            _i21.getFormat() !== n.format ||
            (kr(_i21) && _i21.getStyle() !== n.style)) &&
            is(e, pe, k));
      }
      return !0;
    }
    function Dn(t) {
      return (In(Ci(), t.data), cs(Zn), !0);
    }
    function In(t, e) {
      var n = t._compositionKey;
      if ((Eo(null), null !== n && null != e)) {
        if ("" === e) {
          var _e46 = Ao(n),
            _r23 = No(t.getElementByKey(n));
          if (null !== _r23 && null !== _r23.nodeValue && kr(_e46)) {
            var _n33 = Ss(ds(t));
            var _i22 = null,
              _o9 = null;
            (null !== _n33 &&
              _n33.anchorNode === _r23 &&
              ((_i22 = _n33.anchorOffset), (_o9 = _n33.focusOffset)),
              jo(_e46, _r23.nodeValue, _i22, _o9, !0));
          }
          return;
        }
        if ("\n" === e[e.length - 1]) {
          var _e47 = Qr();
          if (Fr(_e47) || Lr(_e47)) {
            if (Fr(_e47)) {
              var _t60 = _e47.focus;
              _e47.anchor.set(_t60.key, _t60.offset, _t60.type);
            }
            return void is(t, we, null);
          }
        }
      }
      Yo(!0, t, e);
    }
    function Pn(t) {
      var e = Ci();
      if (null == t.key) return !0;
      if (pn) {
        if (Qo(t))
          return (
            Pi(e, function () {
              In(e, yn);
            }),
            (pn = !1),
            (yn = ""),
            !0
          );
        ((pn = !1), (yn = ""));
      }
      if (
        (function (t) {
          return Vo(t, "ArrowRight", { shiftKey: "any" });
        })(t)
      )
        is(e, ke, t);
      else if (
        (function (t) {
          return Vo(t, "ArrowRight", qo);
        })(t)
      )
        is(e, Oe, t);
      else if (
        (function (t) {
          return Vo(t, "ArrowLeft", { shiftKey: "any" });
        })(t)
      )
        is(e, Me, t);
      else if (
        (function (t) {
          return Vo(t, "ArrowLeft", qo);
        })(t)
      )
        is(e, Ee, t);
      else if (
        (function (t) {
          return Vo(t, "ArrowUp", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        is(e, be, t);
      else if (
        (function (t) {
          return Vo(t, "ArrowDown", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        is(e, Ae, t);
      else if (
        (function (t) {
          return Vo(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
            shiftKey: !0,
          });
        })(t)
      )
        ((gn = !0), is(e, we, t));
      else if (
        (function (t) {
          return " " === t.key;
        })(t)
      )
        is(e, De, t);
      else if (
        (function (t) {
          return i && Vo(t, "o", { ctrlKey: !0 });
        })(t)
      )
        (t.preventDefault(), (gn = !0), is(e, ge, !0));
      else if (
        (function (t) {
          return Vo(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
          });
        })(t)
      )
        ((gn = !1), is(e, we, t));
      else if (
        (function (t) {
          return (
            Vo(t, "Backspace", { shiftKey: "any" }) ||
            (i && Vo(t, "h", { ctrlKey: !0 }))
          );
        })(t)
      )
        Qo(t) ? is(e, Ie, t) && En() : (t.preventDefault(), is(e, he, !0));
      else if (
        (function (t) {
          return "Escape" === t.key;
        })(t)
      )
        is(e, Pe, t);
      else if (
        (function (t) {
          return Vo(t, "Delete", {}) || (i && Vo(t, "d", { ctrlKey: !0 }));
        })(t)
      )
        !(function (t) {
          return "Delete" === t.key;
        })(t)
          ? (t.preventDefault(), is(e, he, !1))
          : is(e, Fe, t);
      else if (
        (function (t) {
          return Vo(t, "Backspace", Xo);
        })(t)
      )
        (t.preventDefault(), is(e, xe, !0));
      else if (
        (function (t) {
          return Vo(t, "Delete", Xo);
        })(t)
      )
        (t.preventDefault(), is(e, xe, !1));
      else if (
        (function (t) {
          return i && Vo(t, "Backspace", { metaKey: !0 });
        })(t)
      )
        (t.preventDefault(), is(e, Ce, !0));
      else if (
        (function (t) {
          return (
            i &&
            (Vo(t, "Delete", { metaKey: !0 }) || Vo(t, "k", { ctrlKey: !0 }))
          );
        })(t)
      )
        (t.preventDefault(), is(e, Ce, !1));
      else if (
        (function (t) {
          return Vo(t, "b", qo);
        })(t)
      )
        (t.preventDefault(), is(e, Se, "bold"));
      else if (
        (function (t) {
          return Vo(t, "u", qo);
        })(t)
      )
        (t.preventDefault(), is(e, Se, "underline"));
      else if (
        (function (t) {
          return Vo(t, "i", qo);
        })(t)
      )
        (t.preventDefault(), is(e, Se, "italic"));
      else if (
        (function (t) {
          return Vo(t, "Tab", { shiftKey: "any" });
        })(t)
      )
        is(e, Re, t);
      else if (
        (function (t) {
          return Vo(t, "z", qo);
        })(t)
      )
        (t.preventDefault(), is(e, Te, void 0));
      else if (
        (function (t) {
          if (i) return Vo(t, "z", { metaKey: !0, shiftKey: !0 });
          return (
            Vo(t, "y", { ctrlKey: !0 }) ||
            Vo(t, "z", { ctrlKey: !0, shiftKey: !0 })
          );
        })(t)
      )
        (t.preventDefault(), is(e, Ne, void 0));
      else {
        var _n34 = e._editorState._selection;
        !(function (t) {
          return Vo(t, "a", qo);
        })(t)
          ? null === _n34 ||
            Fr(_n34) ||
            (!(function (t) {
              return Vo(t, "c", qo);
            })(t)
              ? (function (t) {
                  return Vo(t, "x", qo);
                })(t) && (t.preventDefault(), is(e, Je, t))
              : (t.preventDefault(), is(e, je, t)))
          : (t.preventDefault(), is(e, Ge, t) && En());
      }
      return (
        (function (t) {
          return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey;
        })(t) && e.dispatchCommand(tn, t),
        !0
      );
    }
    function Fn(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    var Rn = new Map();
    function Ln(t) {
      var e = Ts(t.target);
      if (null === e) return;
      var n = yo(e.anchorNode);
      if (null === n) return;
      hn &&
        ((hn = !1),
        Pi(n, function () {
          var r = Zr(),
            i = e.anchorNode;
          if (Ns(i) || So(i)) {
            Ko(Xr(r, e, n, t));
          }
        }));
      var r = zo(n),
        i = r[r.length - 1],
        o = i._key,
        s = Rn.get(o),
        l = s || i;
      (l !== n && Tn(e, l, !1),
        Tn(e, n, !0),
        n !== i ? Rn.set(o, n) : s && Rn["delete"](o));
    }
    function Kn(t) {
      t._lexicalHandled = !0;
    }
    function $n(t) {
      return !0 === t._lexicalHandled;
    }
    var Bn = function Bn() {};
    function zn(e) {
      var n = un.get(e);
      if (void 0 === n) return void Bn();
      var r = fn.get(n);
      if (void 0 === r) return void Bn();
      var i = r - 1;
      (i >= 0 || t(164),
        un["delete"](e),
        fn.set(n, i),
        0 === i && n.removeEventListener("selectionchange", Ln));
      var o = mo(e);
      po(o)
        ? (!(function (t) {
            if (null !== t._parentEditor) {
              var _e48 = zo(t),
                _n35 = _e48[_e48.length - 1]._key;
              Rn.get(_n35) === t && Rn["delete"](_n35);
            } else Rn["delete"](t._key);
          })(o),
          (e.__lexicalEditor = null))
        : o && t(198);
      var s = Fn(e);
      for (var _t61 = 0; _t61 < s.length; _t61++) s[_t61]();
      e.__lexicalEventHandles = [];
    }
    function Wn(t, e, n) {
      yi();
      var r = t.__key,
        i = t.getParent();
      if (null === i) return;
      var o = (function (t) {
        var e = Qr();
        if (!Fr(e) || !Ki(t)) return e;
        var n = e.anchor,
          r = e.focus,
          i = n.getNode(),
          o = r.getNode();
        us(i, t) && n.set(t.__key, 0, "element");
        us(o, t) && r.set(t.__key, 0, "element");
        return e;
      })(t);
      var s = !1;
      if (Fr(o) && e) {
        var _e49 = o.anchor,
          _n36 = o.focus;
        (_e49.key === r &&
          (ni(_e49, t, i, t.getPreviousSibling(), t.getNextSibling()),
          (s = !0)),
          _n36.key === r &&
            (ni(_n36, t, i, t.getPreviousSibling(), t.getNextSibling()),
            (s = !0)));
      } else Lr(o) && e && t.isSelected() && t.selectPrevious();
      if (Fr(o) && e && !s) {
        var _e50 = t.getIndexWithinParent();
        (Oo(t), ti(o, i, _e50, -1));
      } else Oo(t);
      (n || gs(i) || i.canBeEmpty() || !i.isEmpty() || Wn(i, e),
        e && o && Ui(i) && i.isEmpty() && i.selectEnd());
    }
    var Un = Symbol["for"]("ephemeral");
    function Yn(t) {
      return t[Un] || !1;
    }
    var jn = { configurable: !0, enumerable: !1, value: void 0, writable: !0 };
    var _Jn5 = (function () {
      function Jn(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", jn),
          Object.defineProperty(this, _t, jn),
          ko(this, t));
      }
      Jn.getType = function getType() {
        var _Ws2 = Ws(this),
          e = _Ws2.ownNodeType;
        return (void 0 === e && t(64, this.name), e);
      };
      Jn.clone = function clone(e) {
        t(65, this.name);
      };
      var _proto4 = Jn.prototype;
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
          var _e51 = Ao(t);
          if (null === _e51) break;
          t = _e51.__parent;
        }
        return !1;
      };
      _proto4.isSelected = function isSelected(t) {
        var _this12 = this;
        var e = t || Qr();
        if (null == e) return !1;
        var n = e.getNodes().some(function (t) {
          return t.__key === _this12.__key;
        });
        if (kr(this)) return n;
        if (
          Fr(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t62 = this.getParent();
          if (zi(this) && this.isInline() && _t62) {
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
        return null === t ? null : Ao(t);
      };
      _proto4.getParentOrThrow = function getParentOrThrow() {
        var e = this.getParent();
        return (null === e && t(66, this.__key), e);
      };
      _proto4.getTopLevelElement = function getTopLevelElement() {
        var e = this;
        for (; null !== e; ) {
          var _n38 = e.getParent();
          if (gs(_n38)) return (Ki(e) || (e === this && zi(e)) || t(194), e);
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
        return null === t ? null : Ao(t);
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
        return null === t ? null : Ao(t);
      };
      _proto4.getNextSiblings = function getNextSiblings() {
        var t = [];
        var e = this.getNextSibling();
        for (; null !== e; ) (t.push(e), (e = e.getNextSibling()));
        return t;
      };
      _proto4.getCommonAncestor = function getCommonAncestor(t) {
        var e = Ki(this) ? this : this.getParent(),
          n = Ki(t) ? t : t.getParent(),
          r = e && n ? Tl(e, n) : null;
        return r ? r.commonAncestor : null;
      };
      _proto4.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto4.isBefore = function isBefore(e) {
        var n = Tl(this, e);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === xl(n)
              : ("same" !== n.type && "ancestor" !== n.type && t(279), !1)))
        );
      };
      _proto4.isParentOf = function isParentOf(t) {
        var e = Tl(this, t);
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
          var _l5 = Ki(o) ? (n ? o.getFirstChild() : o.getLastChild()) : null;
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
        var t = Ci()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto4.getLatest = function getLatest() {
        if (Yn(this)) return this;
        var e = Ao(this.__key);
        return (null === e && t(113), e);
      };
      _proto4.getWritable = function getWritable() {
        if (Yn(this)) return this;
        yi();
        var t = xi(),
          e = Ci(),
          n = t._nodeMap,
          r = this.__key,
          i = this.getLatest(),
          o = e._cloneNotNeeded,
          s = Qr();
        if ((null !== s && s.setCachedNodes(null), o.has(r))) return (Mo(i), i);
        var l = Rs(i);
        return (o.add(r), Mo(l), n.set(r, l), l);
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
      Jn.importJSON = function importJSON(e) {
        t(18, this.name);
      };
      _proto4.updateFromJSON = function updateFromJSON(t) {
        return (function (t, e) {
          var n = t.getWritable(),
            r = e.$;
          var i = r;
          for (var _t63 of rt(n).flatKeys)
            _t63 in e &&
              ((void 0 !== i && i !== r) ||
                (i = babelHelpers["extends"]({}, r)),
              (i[_t63] = e[_t63]));
          return ((n.__state || i) && nt(t).updateFromJSON(i), n);
        })(this, t);
      };
      Jn.transform = function transform() {
        return null;
      };
      _proto4.remove = function remove(t) {
        Wn(this, !0, t);
      };
      _proto4.replace = function replace(e, n) {
        yi();
        var r = Qr();
        (null !== r && (r = r.clone()), ys(this, e));
        var i = this.getLatest(),
          o = this.__key,
          s = e.__key,
          l = e.getWritable(),
          c = this.getParentOrThrow().getWritable(),
          a = c.__size,
          u = l.getParent(),
          f = null !== u ? l.getIndexWithinParent() : -1;
        (Oo(l), null !== u && Fr(r) && ti(r, u, f, -1));
        var d = i.getPreviousSibling(),
          h = i.getNextSibling(),
          g = i.__prev,
          _ = i.__next,
          p = i.__parent;
        if ((Wn(i, !1, !0), null === d)) c.__first = s;
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
            ((Ki(this) && Ki(l)) || t(139),
            (y = l.getChildrenSize()),
            l.splice(y, 0, this.getChildren())),
          Fr(r))
        ) {
          Ko(r);
          var _t64 = r.anchor,
            _e52 = r.focus;
          (_t64.key === o &&
            (n && "element" === _t64.type
              ? _t64.set(l.__key, y + _t64.offset, "element")
              : Ir(_t64, l)),
            _e52.key === o &&
              (n && "element" === _e52.type
                ? _e52.set(l.__key, y + _e52.offset, "element")
                : Ir(_e52, l)));
        }
        return (bo() === o && Eo(s), l);
      };
      _proto4.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (yi(), ys(this, t));
        var n = this.getWritable(),
          r = t.getWritable(),
          i = r.getParent(),
          o = Qr();
        var s = !1,
          l = !1;
        if (null !== i) {
          var _n39 = t.getIndexWithinParent();
          if (Fr(o)) {
            var _t65 = i.__key,
              _e53 = o.anchor,
              _r24 = o.focus;
            ((s =
              "element" === _e53.type &&
              _e53.key === _t65 &&
              _e53.offset === _n39 + 1),
              (l =
                "element" === _r24.type &&
                _r24.key === _t65 &&
                _r24.offset === _n39 + 1));
          }
          (Oo(r), e && Fr(o) && ti(o, i, _n39, -1));
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
          e && Fr(o))
        ) {
          var _t66 = this.getIndexWithinParent();
          ti(o, a, _t66 + 1);
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
        (yi(), ys(this, t));
        var n = this.getWritable(),
          r = t.getWritable(),
          i = r.__key,
          o = Qr(),
          s = r.getParent(),
          l = null !== s ? r.getIndexWithinParent() : -1;
        (Oo(r), null !== s && e && Fr(o) && ti(o, s, l, -1));
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
          e && Fr(o))
        ) {
          ti(o, this.getParentOrThrow(), f);
        }
        return t;
      };
      _proto4.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto4.createParentElementNode = function createParentElementNode() {
        return Xi();
      };
      _proto4.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto4.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto4.selectPrevious = function selectPrevious(t, e) {
        yi();
        var n = this.getPreviousSibling(),
          r = this.getParentOrThrow();
        if (null === n) return r.select(0, 0);
        if (Ki(n)) return n.select();
        if (!kr(n)) {
          var _t67 = n.getIndexWithinParent() + 1;
          return r.select(_t67, _t67);
        }
        return n.select(t, e);
      };
      _proto4.selectNext = function selectNext(t, e) {
        yi();
        var n = this.getNextSibling(),
          r = this.getParentOrThrow();
        if (null === n) return r.select();
        if (Ki(n)) return n.select(0, 0);
        if (!kr(n)) {
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
      return Jn;
    })();
    var Gn = "history-merge",
      Hn = "collaboration",
      Vn = "skip-scroll-into-view",
      qn = "skip-dom-selection",
      Xn = "skip-selection-focus",
      Qn = "composition-start",
      Zn = "composition-end",
      tr = /\s*!important\s*$/i;
    function er(t) {
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
    function nr(t, e, n) {
      var r = tr.test(n) ? "important" : "",
        i = "" === r ? n : n.replace(tr, "").trim();
      t.setProperty(e, i, r);
    }
    function rr(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var r = er(n),
        i = er(e);
      for (var _e55 in i) (delete r[_e55], nr(t, _e55, i[_e55]));
      for (var _e56 in r) t.removeProperty(_e56);
    }
    var _ir = (function (_Jn) {
      function ir(t) {
        return _Jn.call(this, t) || this;
      }
      babelHelpers.inheritsLoose(ir, _Jn);
      ir.getType = function getType() {
        return "linebreak";
      };
      ir.clone = function clone(t) {
        return new ir(t.__key);
      };
      var _proto5 = ir.prototype;
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
      ir.importDOM = function importDOM() {
        return {
          br: function br(t) {
            return (function (t) {
              var e = t.parentElement;
              if (null !== e && bs(e)) {
                var _n40 = e.firstChild;
                if (_n40 === t || (_n40.nextSibling === t && cr(_n40))) {
                  var _n41 = e.lastChild;
                  if (_n41 === t || (_n41.previousSibling === t && cr(_n41)))
                    return !0;
                }
              }
              return !1;
            })(t) ||
              (function (t) {
                var e = t.parentElement;
                if (null !== e && bs(e)) {
                  var _n42 = e.firstChild;
                  if (_n42 === t || (_n42.nextSibling === t && cr(_n42)))
                    return !1;
                  var _r25 = e.lastChild;
                  if (_r25 === t || (_r25.previousSibling === t && cr(_r25)))
                    return !0;
                }
                return !1;
              })(t)
              ? null
              : { conversion: or, priority: 0 };
          },
        };
      };
      ir.importJSON = function importJSON(t) {
        return sr().updateFromJSON(t);
      };
      return ir;
    })(_Jn5);
    function or(t) {
      return { node: sr() };
    }
    function sr() {
      return ps(new _ir());
    }
    function lr(t) {
      return t instanceof _ir;
    }
    function cr(t) {
      return So(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    function ar(t, e) {
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
    function ur(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function fr(t, e, n, r, i) {
      var o = r.classList;
      var s = Zo(i, "base");
      (void 0 !== s && o.add.apply(o, s),
        (s = Zo(i, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== s &&
        (8 & n && 4 & n
          ? ((l = !0), c || o.add.apply(o, s))
          : c && o.remove.apply(o, s));
      for (var _t70 in A) {
        var _r26 = A[_t70];
        if (((s = Zo(i, _t70)), void 0 !== s))
          if (n & _r26) {
            if (l && ("underline" === _t70 || "strikethrough" === _t70)) {
              e & _r26 && o.remove.apply(o, s);
              continue;
            }
            (0 === (e & _r26) ||
              (c && "underline" === _t70) ||
              "strikethrough" === _t70) &&
              o.add.apply(o, s);
          } else e & _r26 && o.remove.apply(o, s);
      }
    }
    function dr(t, e, n) {
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
    function hr(t, e, n, r, i, o) {
      dr(i, t, e);
      var s = o.theme.text;
      void 0 !== s && fr(0, 0, r, t, s);
    }
    function gr(t, e) {
      var n = document.createElement(e);
      return (n.appendChild(t), n);
    }
    var _r79 = (function (_Jn2) {
      function _r(t, e) {
        var _this;
        if (t === void 0) {
          t = "";
        }
        ((_this = _Jn2.call(this, e) || this),
          (_this.__text = t),
          (_this.__format = 0),
          (_this.__style = ""),
          (_this.__mode = 0),
          (_this.__detail = 0));
        return _this;
      }
      babelHelpers.inheritsLoose(_r, _Jn2);
      _r.getType = function getType() {
        return "text";
      };
      _r.clone = function clone(t) {
        return new _r(t.__text, t.__key);
      };
      var _proto6 = _r.prototype;
      _proto6.afterCloneFrom = function afterCloneFrom(t) {
        (_Jn2.prototype.afterCloneFrom.call(this, t),
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
        return this.__key === bo();
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
        return vo(this.getLatest().__format, t, e);
      };
      _proto6.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto6.isInline = function isInline() {
        return !0;
      };
      _proto6.createDOM = function createDOM(t, e) {
        var n = this.__format,
          r = ar(0, n),
          i = ur(0, n),
          o = null === r ? i : r,
          s = document.createElement(o);
        var l = s;
        (this.hasFormat("code") && s.setAttribute("spellcheck", "false"),
          null !== r && ((l = document.createElement(i)), s.appendChild(l)));
        hr(l, this, 0, n, this.__text, t);
        var c = this.__style;
        return ("" !== c && rr(s.style, c), s);
      };
      _proto6.updateDOM = function updateDOM(e, n, r) {
        var i = this.__text,
          o = e.__format,
          s = this.__format,
          l = ar(0, o),
          c = ar(0, s),
          a = ur(0, o),
          u = ur(0, s);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _e58 = n.firstChild;
          null == _e58 && t(48);
          var _o0 = document.createElement(u);
          return (hr(_o0, this, 0, s, i, r), n.replaceChild(_o0, _e58), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && t(49)),
          dr(i, f, this));
        var d = r.theme.text;
        void 0 !== d && o !== s && fr(0, o, s, f, d);
        var h = e.__style,
          g = this.__style;
        return (h !== g && rr(n.style, g, h), !1);
      };
      _r.importDOM = function importDOM() {
        return {
          "#text": function text() {
            return { conversion: Cr, priority: 0 };
          },
          b: function b() {
            return { conversion: yr, priority: 0 };
          },
          code: function code() {
            return { conversion: Nr, priority: 0 };
          },
          em: function em() {
            return { conversion: Nr, priority: 0 };
          },
          i: function i() {
            return { conversion: Nr, priority: 0 };
          },
          mark: function mark() {
            return { conversion: Nr, priority: 0 };
          },
          s: function s() {
            return { conversion: Nr, priority: 0 };
          },
          span: function span() {
            return { conversion: pr, priority: 0 };
          },
          strong: function strong() {
            return { conversion: Nr, priority: 0 };
          },
          sub: function sub() {
            return { conversion: Nr, priority: 0 };
          },
          sup: function sup() {
            return { conversion: Nr, priority: 0 };
          },
          u: function u() {
            return { conversion: Nr, priority: 0 };
          },
        };
      };
      _r.importJSON = function importJSON(t) {
        return vr().updateFromJSON(t);
      };
      _proto6.updateFromJSON = function updateFromJSON(t) {
        return _Jn2.prototype.updateFromJSON
          .call(this, t)
          .setTextContent(t.text)
          .setFormat(t.format)
          .setDetail(t.detail)
          .setMode(t.mode)
          .setStyle(t.style);
      };
      _proto6.exportDOM = function exportDOM(e) {
        var _Jn2$prototype$export = _Jn2.prototype.exportDOM.call(this, e),
          n = _Jn2$prototype$export.element;
        return (
          Ns(n) || t(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = gr(n, "b")),
          this.hasFormat("italic") && (n = gr(n, "i")),
          this.hasFormat("strikethrough") && (n = gr(n, "s")),
          this.hasFormat("underline") && (n = gr(n, "u")),
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
          _Jn2.prototype.exportJSON.call(this),
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
        var e = vo(this.getFormat(), t, null);
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
        yi();
        var n = t,
          r = e;
        var i = Qr(),
          o = this.getTextContent(),
          s = this.__key;
        if ("string" == typeof o) {
          var _t72 = o.length;
          (void 0 === n && (n = _t72), void 0 === r && (r = _t72));
        } else ((n = 0), (r = 0));
        if (!Fr(i)) return Hr(s, n, s, r, "text", "text");
        {
          var _t73 = bo();
          ((_t73 !== i.anchor.key && _t73 !== i.focus.key) || Eo(s),
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
        var c = Qr();
        if (r && Fr(c)) {
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
        yi();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var r = e.__key,
          i = bo(),
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
        for (var _e60 = 0, _r27 = 0; _e60 < o && _r27 <= l; _r27++) {
          var _i25 = t[_r27];
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
        var m = Qr();
        if (Fr(m)) {
          var _ref18 = m.isBackward()
              ? [m.focus, m.anchor]
              : [m.anchor, m.focus],
            _t74 = _ref18[0],
            _e61 = _ref18[1];
          ("text" === _t74.type && _t74.key === r && (p = _t74),
            "text" === _e61.type && _e61.key === r && (y = _e61));
        }
        e.isSegmented()
          ? ((f = vr(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = ct(e, f)),
            (_ = !0))
          : (f = e.setTextContent(a));
        var x = [f];
        for (var _t75 = 1; _t75 < c; _t75++) {
          var _n44 = vr(s[_t75]);
          ((_n44.__format = d),
            (_n44.__style = h),
            (_n44.__detail = g),
            (_n44.__state = ct(e, _n44)));
          var _o1 = _n44.__key;
          (i === r && Eo(_o1), x.push(_n44));
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
            null !== e && Mo(e);
            null !== n && Mo(n);
          })(this);
          var _t77 = u.getWritable(),
            _e63 = this.getIndexWithinParent();
          (_
            ? (_t77.splice(_e63, 0, x), this.remove())
            : _t77.splice(_e63, 1, x),
            Fr(m) && ti(m, u, _e63, c - 1));
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
        bo() === i && Eo(r);
        var l = Qr();
        if (Fr(l)) {
          var _t78 = l.anchor,
            _o10 = l.focus;
          (null !== _t78 && _t78.key === i && ri(_t78, n, r, e, s),
            null !== _o10 && _o10.key === i && ri(_o10, n, r, e, s));
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
      return _r;
    })(_Jn5);
    function pr(t) {
      return { forChild: Or(t.style), node: null };
    }
    function yr(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: Or(e.style, n ? void 0 : "bold"), node: null };
    }
    var mr = new WeakMap();
    function xr(t) {
      if (!Ns(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function Cr(e) {
      var n = e;
      null === e.parentElement && t(129);
      var r = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var r = [t];
          for (; null !== n && void 0 === (e = mr.get(n)) && !xr(n); )
            (r.push(n), (n = n.parentNode));
          var i = void 0 === e ? n : e;
          for (var _t79 = 0; _t79 < r.length; _t79++) mr.set(r[_t79], i);
          return i;
        })(n)
      ) {
        var _t80 = r.split(/(\r?\n|\t)/),
          _e64 = [],
          _n45 = _t80.length;
        for (var _r28 = 0; _r28 < _n45; _r28++) {
          var _n46 = _t80[_r28];
          "\n" === _n46 || "\r\n" === _n46
            ? _e64.push(sr())
            : "\t" === _n46
              ? _e64.push(Er())
              : "" !== _n46 && _e64.push(vr(_n46));
        }
        return { node: _e64 };
      }
      if (((r = r.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === r))
        return { node: null };
      if (" " === r[0]) {
        var _t81 = n,
          _e65 = !0;
        for (; null !== _t81 && null !== (_t81 = Sr(_t81, !1)); ) {
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
        for (; null !== _t82 && null !== (_t82 = Sr(_t82, !0)); ) {
          if (
            (_t82.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e66 = !1;
            break;
          }
        }
        _e66 && (r = r.slice(0, r.length - 1));
      }
      return "" === r ? { node: null } : { node: vr(r) };
    }
    function Sr(t, e) {
      var n = t;
      for (;;) {
        var _t83 = void 0;
        for (; null === (_t83 = e ? n.nextSibling : n.previousSibling); ) {
          var _t84 = n.parentElement;
          if (null === _t84) return null;
          n = _t84;
        }
        if (((n = _t83), Ns(n))) {
          var _t85 = n.style.display;
          if (
            ("" === _t85 && !Ms(n)) ||
            ("" !== _t85 && !_t85.startsWith("inline"))
          )
            return null;
        }
        var _r29 = n;
        for (; null !== (_r29 = e ? n.firstChild : n.lastChild); ) n = _r29;
        if (So(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var Tr = {
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
    function Nr(t) {
      var e = Tr[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: Or(t.style, e), node: null };
    }
    function vr(t) {
      if (t === void 0) {
        t = "";
      }
      return ps(new _r79(t));
    }
    function kr(t) {
      return t instanceof _r79;
    }
    function Or(t, e) {
      var n = t.fontWeight,
        r = t.textDecoration.split(" "),
        i = "700" === n || "bold" === n,
        o = r.includes("line-through"),
        s = "italic" === t.fontStyle,
        l = r.includes("underline"),
        c = t.verticalAlign;
      return function (t) {
        return kr(t)
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
    var _Mr = (function (_r2) {
      function Mr(t) {
        var _this2;
        ((_this2 = _r2.call(this, "\t", t) || this), (_this2.__detail = 2));
        return _this2;
      }
      babelHelpers.inheritsLoose(Mr, _r2);
      Mr.getType = function getType() {
        return "tab";
      };
      Mr.clone = function clone(t) {
        return new Mr(t.__key);
      };
      Mr.importDOM = function importDOM() {
        return null;
      };
      var _proto7 = Mr.prototype;
      _proto7.createDOM = function createDOM(t) {
        var e = _r2.prototype.createDOM.call(this, t),
          n = Zo(t.theme, "tab");
        if (void 0 !== n) {
          var _e$classList;
          (_e$classList = e.classList).add.apply(_e$classList, n);
        }
        return e;
      };
      Mr.importJSON = function importJSON(t) {
        return Er().updateFromJSON(t);
      };
      _proto7.setTextContent = function setTextContent(t) {
        return (
          "\t" !== t && "" !== t && e(126),
          _r2.prototype.setTextContent.call(this, "\t")
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
      return Mr;
    })(_r79);
    function Er() {
      return ps(new _Mr());
    }
    function br(t) {
      return t instanceof _Mr;
    }
    var _Ar = (function () {
      function Ar(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto8 = Ar.prototype;
      _proto8.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto8.isBefore = function isBefore(t) {
        if (this.key === t.key) return this.offset < t.offset;
        return ml(Dl(Nl(this, "next")), Dl(Nl(t, "next"))) < 0;
      };
      _proto8.getNode = function getNode() {
        var e = Ao(this.key);
        return (null === e && t(20), e);
      };
      _proto8.set = function set(t, e, n, r) {
        var i = this._selection,
          o = this.key;
        (r && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          pi() ||
            (bo() === o && Eo(t),
            null !== i &&
              (i.setCachedNodes(null),
              Fr(i) && (i._cachedIsBackward = null),
              (i.dirty = !0))));
      };
      return Ar;
    })();
    function wr(t, e, n) {
      return new _Ar(t, e, n);
    }
    function Dr(t, e) {
      var n = e.__key,
        r = t.offset,
        i = "element";
      if (kr(e)) {
        i = "text";
        var _t86 = e.getTextContentSize();
        r > _t86 && (r = _t86);
      } else if (!Ki(e)) {
        var _t87 = e.getNextSibling();
        if (kr(_t87)) ((n = _t87.__key), (r = 0), (i = "text"));
        else {
          var _t88 = e.getParent();
          _t88 && ((n = _t88.__key), (r = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, r, i);
    }
    function Ir(t, e) {
      if (Ki(e)) {
        var _n48 = e.getLastDescendant();
        Ki(_n48) || kr(_n48) ? Dr(t, _n48) : Dr(t, e);
      } else Dr(t, e);
    }
    var _Pr = (function () {
      function Pr(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto9 = Pr.prototype;
      _proto9.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto9.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto9.is = function is(t) {
        if (!Lr(t)) return !1;
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
        return new Pr(new Set(this._nodes));
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
        if (kr(r)) i = r.select();
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
          var _e67 = Ao(_t91);
          null !== _e67 && n.push(_e67);
        }
        return (pi() || (this._cachedNodes = n), n);
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
        if ((Qr() || Zr()) === this && t[0]) {
          var _e68 = ol(t[0], "next");
          kl(pl(_e68, _e68));
        }
        for (var _e69 of t) _e69.remove();
      };
      return Pr;
    })();
    function Fr(t) {
      return t instanceof _Rr;
    }
    var _Rr = (function () {
      function Rr(t, e, n, r) {
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
      var _proto0 = Rr.prototype;
      _proto0.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto0.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto0.is = function is(t) {
        return (
          !!Fr(t) &&
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
            if (el(_n50)) {
              var _t92 = _n50.origin;
              0 === e.length ? i.add(_t92) : (o.add(_t92), e.push(_t92));
            } else {
              var _t93 = _n50.origin;
              (Ki(_t93) && o.has(_t93)) || e.push(_t93);
            }
          r && e.push(r.caret.origin);
          if (
            tl(t.focus) &&
            Ki(t.focus.origin) &&
            null === t.focus.getNodeAtCaret()
          )
            for (
              var _n51 = al(t.focus.origin, "previous");
              el(_n51) &&
              i.has(_n51.origin) &&
              !_n51.origin.isEmpty() &&
              _n51.origin.is(e[e.length - 1]);
              _n51 = fl(_n51)
            )
              (i["delete"](_n51.origin), e.pop());
          for (; e.length > 1; ) {
            var _t94 = e[e.length - 1];
            if (!Ki(_t94) || o.has(_t94) || _t94.isEmpty() || i.has(_t94))
              break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n52 = Dl(t.anchor),
              _r30 = Dl(t.anchor.getFlipped()),
              _i26 = function _i26(t) {
                return Zs(t) ? t.origin : t.getNodeAtCaret();
              },
              _o11 =
                _i26(_n52) ||
                _i26(_r30) ||
                (t.anchor.getNodeAtCaret() ? _n52.origin : _r30.origin);
            e.push(_o11);
          }
          return e;
        })(Fl(Ml(this), "next"));
        return (pi() || (this._cachedNodes = e), e);
      };
      _proto0.setTextNodeRange = function setTextNodeRange(t, e, n, r) {
        (this.anchor.set(t.__key, e, "text"),
          this.focus.set(n.__key, r, "text"));
      };
      _proto0.getTextContent = function getTextContent() {
        var t = this.getNodes();
        if (0 === t.length) return "";
        var e = t[0],
          n = t[t.length - 1],
          r = this.anchor,
          i = this.focus,
          o = r.isBefore(i),
          _$r = $r(this),
          s = _$r[0],
          l = _$r[1];
        var c = "",
          a = !0;
        for (var _u8 = 0; _u8 < t.length; _u8++) {
          var _f5 = t[_u8];
          if (Ki(_f5) && !_f5.isInline())
            (a || (c += "\n"), (a = !_f5.isEmpty()));
          else if (((a = !1), kr(_f5))) {
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
            (!zi(_f5) && !lr(_f5)) ||
              (_f5 === n && this.isCollapsed()) ||
              (c += _f5.getTextContent());
        }
        return c;
      };
      _proto0.applyDOMRange = function applyDOMRange(t) {
        var e = Ci(),
          n = e.getEditorState()._selection,
          r = Jr(
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
          dt(this));
      };
      _proto0.clone = function clone() {
        var t = this.anchor,
          e = this.focus;
        return new Rr(
          wr(t.key, t.offset, t.type),
          wr(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto0.toggleFormat = function toggleFormat(t) {
        ((this.format = vo(this.format, t, null)), (this.dirty = !0));
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
          var _r31 = e[_t96];
          "\n" === _r31 || "\r\n" === _r31
            ? n.push(sr())
            : "\t" === _r31
              ? n.push(Er())
              : n.push(vr(_r31));
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
                s = vr();
              if ((s.setFormat(n), s.setStyle(r), Qi(o))) o.splice(0, 0, [s]);
              else {
                var _t97 = Ui(i) ? Xi().append(s) : s;
                null === o ? i.append(_t97) : o.insertBefore(_t97);
              }
              (t.is(e) && e.set(s.__key, 0, "text"), t.set(s.__key, 0, "text"));
            })(s, l, i, o),
          "element" === l.type && vl(l, Dl(Nl(l, "next"))));
        var c = s.offset;
        var a = l.offset;
        var u = this.getNodes(),
          f = u.length;
        var d = u[0];
        kr(d) || t(26);
        var h = d.getTextContent().length,
          g = d.getParentOrThrow();
        var _ = u[f - 1];
        if (
          (1 === f &&
            "element" === l.type &&
            ((a = h), l.set(s.key, a, "text")),
          this.isCollapsed() &&
            c === h &&
            (Co(d) ||
              !d.canInsertTextAfter() ||
              (!g.canInsertTextAfter() && null === d.getNextSibling())))
        ) {
          var _t98 = d.getNextSibling();
          if (
            ((kr(_t98) && _t98.canInsertTextBefore() && !Co(_t98)) ||
              ((_t98 = vr()),
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
          (Co(d) ||
            !d.canInsertTextBefore() ||
            (!g.canInsertTextBefore() && null === d.getPreviousSibling()))
        ) {
          var _t99 = d.getPreviousSibling();
          if (
            ((kr(_t99) && !Co(_t99)) ||
              ((_t99 = vr()),
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
          var _t100 = vr(d.getTextContent());
          (_t100.setFormat(i), d.replace(_t100), (d = _t100));
        } else if (!this.isCollapsed() && "" !== e) {
          var _t101 = _.getParent();
          if (
            !g.canInsertTextBefore() ||
            !g.canInsertTextAfter() ||
            (Ki(_t101) &&
              (!_t101.canInsertTextBefore() || !_t101.canInsertTextAfter()))
          )
            return (
              this.insertText(""),
              jr(this.anchor, this.focus),
              void this.insertText(e)
            );
        }
        if (1 === f) {
          if (xo(d)) {
            var _t102 = vr(e);
            return (_t102.select(), void d.replace(_t102));
          }
          var _t103 = d.getFormat(),
            _n53 = d.getStyle();
          if (c !== a || (_t103 === i && _n53 === o)) {
            if (br(d)) {
              var _t104 = vr(e);
              return (
                _t104.setFormat(i),
                _t104.setStyle(o),
                _t104.select(),
                void d.replace(_t104)
              );
            }
          } else {
            if ("" !== d.getTextContent()) {
              var _t105 = vr(e);
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
          var _r32 = a - c;
          ((d = d.spliceText(c, _r32, e, !0)),
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
            _n54 = Ki(d) ? d : d.getParentOrThrow();
          var _r33 = Ki(_) ? _ : _.getParentOrThrow(),
            _i27 = _;
          if (!_n54.is(_r33) && _r33.isInline())
            do {
              ((_i27 = _r33), (_r33 = _r33.getParentOrThrow()));
            } while (_r33.isInline());
          if (
            ("text" === l.type && (0 !== a || "" === _.getTextContent())) ||
            ("element" === l.type && _.getIndexWithinParent() < a)
          ) {
            if (kr(_) && !xo(_) && a !== _.getTextContentSize()) {
              if (_.isSegmented()) {
                var _t107 = vr(_.getTextContent());
                (_.replace(_t107), (_ = _t107));
              }
              (Ui(l.getNode()) ||
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
          var _o12 = _r33.getChildren(),
            _s9 = new Set(u),
            _g4 = _n54.is(_r33),
            _p2 = _n54.isInline() && null === d.getNextSibling() ? _n54 : d;
          for (var _t109 = _o12.length - 1; _t109 >= 0; _t109--) {
            var _e71 = _o12[_t109];
            if (_e71.is(d) || (Ki(_e71) && _e71.isParentOf(d))) break;
            _e71.isAttached() &&
              (!_s9.has(_e71) || _e71.is(_i27)
                ? _g4 || _p2.insertAfter(_e71, !1)
                : _e71.remove());
          }
          if (!_g4) {
            var _e72 = _r33,
              _n55 = null;
            for (; null !== _e72; ) {
              var _r34 = _e72.getChildren(),
                _i28 = _r34.length;
              ((0 === _i28 || _r34[_i28 - 1].is(_n55)) &&
                (_t106["delete"](_e72.__key), (_n55 = _e72)),
                (_e72 = _e72.getParent()));
            }
          }
          if (xo(d)) {
            if (c === h) d.select();
            else {
              var _t110 = vr(e);
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
              _r35 = _n56.__key;
            _t106.has(_r35) || _n56.remove();
          }
        }
      };
      _proto0.removeText = function removeText() {
        var t = Qr() === this;
        (Ol(this, wl(Ml(this))), t && Qr() !== this && Ko(this));
      };
      _proto0.formatText = function formatText(t, e) {
        var _d$splitText2, _p$splitText;
        if (e === void 0) {
          e = null;
        }
        if (this.isCollapsed()) return (this.toggleFormat(t), void Eo(null));
        var n = this.getNodes(),
          r = [];
        for (var _t111 of n) kr(_t111) && r.push(_t111);
        var i = function i(e) {
            n.forEach(function (n) {
              if (Ki(n)) {
                var _r36 = n.getFormatFlags(t, e);
                n.setTextFormat(_r36);
              }
            });
          },
          o = r.length;
        if (0 === o) return (this.toggleFormat(t), Eo(null), void i(e));
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
          if (Co(d) || (0 === h && y === d.getTextContentSize()))
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
          Co(d) ||
          ((_d$splitText2 = d.splitText(h)), (d = _d$splitText2[1]), (h = 0)),
          d.setFormat(g));
        var m = p.getFormatFlags(t, g);
        y > 0 &&
          (y === p.getTextContentSize() ||
            Co(p) ||
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
          var _n58 = Qr();
          return (Fr(_n58) || t(134), _n58.insertNodes(e));
        }
        var n = (this.isBackward() ? this.focus : this.anchor).getNode(),
          r = Us(n, As),
          i = e[e.length - 1];
        if (Ki(r) && "__language" in r) {
          if ("__language" in e[0]) this.insertText(e[0].getTextContent());
          else {
            var _t113 = li(this);
            (r.splice(_t113, 0, e), i.selectEnd());
          }
          return;
        }
        if (
          !e.some(function (t) {
            return (Ki(t) || zi(t)) && !t.isInline();
          })
        ) {
          Ki(r) || t(211, n.constructor.name, n.getType());
          var _o13 = li(this);
          return (r.splice(_o13, 0, e), void i.selectEnd());
        }
        var o = (function (t) {
            var e = Xi();
            var n = null;
            for (var _r37 = 0; _r37 < t.length; _r37++) {
              var _i30 = t[_r37],
                _o14 = lr(_i30);
              if (
                _o14 ||
                (zi(_i30) && _i30.isInline()) ||
                (Ki(_i30) && _i30.isInline()) ||
                kr(_i30) ||
                _i30.isParentRequired()
              ) {
                if (
                  null === n &&
                  ((n = _i30.createParentElementNode()), e.append(n), _o14)
                )
                  continue;
                null !== n && n.append(_i30);
              } else (e.append(_i30), (n = null));
            }
            return e;
          })(e),
          s = o.getLastDescendant(),
          l = o.getChildren(),
          c = !Ki(r) || !r.isEmpty() ? this.insertParagraph() : null,
          a = l[l.length - 1];
        var u = l[0];
        var f;
        (Ki((f = u)) &&
          As(f) &&
          !f.isEmpty() &&
          Ki(r) &&
          (!r.isEmpty() || r.canMergeWhenEmpty()) &&
          (Ki(r) || t(211, n.constructor.name, n.getType()),
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
        var d = Us(s, As);
        (c &&
          Ki(d) &&
          (c.canMergeWhenEmpty() || As(a)) &&
          (d.append.apply(d, c.getChildren()), c.remove()),
          Ki(r) && r.isEmpty() && r.remove(),
          s.selectEnd());
        var h = Ki(r) ? r.getLastChild() : null;
        lr(h) && d !== r && h.remove();
      };
      _proto0.insertParagraph = function insertParagraph() {
        if ("root" === this.anchor.key) {
          var _t115 = Xi();
          return (
            Ro().splice(this.anchor.offset, 0, [_t115]),
            _t115.select(),
            _t115
          );
        }
        var e = li(this),
          n = Us(this.anchor.getNode(), As);
        Ki(n) || t(213);
        var r = n.getChildAtIndex(e),
          i = r ? [r].concat(r.getNextSiblings()) : [],
          o = n.insertNewAfter(this, !1);
        return o ? (o.append.apply(o, i), o.selectStart(), o) : null;
      };
      _proto0.insertLineBreak = function insertLineBreak(t) {
        var e = sr();
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
        var _$r2 = $r(this),
          i = _$r2[0],
          o = _$r2[1],
          s = this.isBackward(),
          _ref19 = s ? [this.focus, this.anchor] : [this.anchor, this.focus],
          l = _ref19[0],
          c = _ref19[1],
          _ref20 = s ? [o, i] : [i, o],
          a = _ref20[0],
          u = _ref20[1];
        if (0 === e) return [];
        if (1 === e) {
          if (kr(n) && !this.isCollapsed()) {
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
          (kr(n) &&
            (a === n.getTextContentSize()
              ? t.shift()
              : 0 !== a &&
                ((_n$splitText = n.splitText(a)),
                (n = _n$splitText[1]),
                (t[0] = n),
                l.set(n.getKey(), 0, "text"))),
          kr(r))
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
        if (ai(this, t, e, n)) return;
        var r = "move" === t,
          i = Ci(),
          o = Ss(ds(i));
        if (!o) return;
        var s = i._blockCursorElement,
          l = i._rootElement,
          c = this.focus.getNode();
        if (
          (null === l ||
            null === s ||
            !Ki(c) ||
            c.isInline() ||
            c.canBeEmpty() ||
            Cs(s, i, l),
          this.dirty)
        ) {
          var _t118 = os(i, this.anchor.key),
            _e78 = os(i, this.focus.key);
          ("text" === this.anchor.type && (_t118 = No(_t118)),
            "text" === this.focus.type && (_e78 = No(_e78)),
            _t118 &&
              _e78 &&
              ii(o, _t118, this.anchor.offset, _e78, this.focus.offset));
        }
        if (
          ((function (t, e, n, r) {
            t.modify(e, n, r);
          })(o, t, e ? "backward" : "forward", n),
          o.rangeCount > 0)
        ) {
          var _t119 = o.getRangeAt(0),
            _n60 = this.anchor.getNode(),
            _i31 = Ui(_n60) ? _n60 : hs(_n60);
          if ((this.applyDOMRange(_t119), (this.dirty = !0), !r)) {
            var _n61 = this.getNodes(),
              _r38 = [];
            var _s0 = !1;
            for (var _t120 = 0; _t120 < _n61.length; _t120++) {
              var _e79 = _n61[_t120];
              us(_e79, _i31) ? _r38.push(_e79) : (_s0 = !0);
            }
            if (_s0 && _r38.length > 0)
              if (e) {
                var _t121 = _r38[0];
                Ki(_t121)
                  ? _t121.selectStart()
                  : _t121.getParentOrThrow().selectStart();
              } else {
                var _t122 = _r38[_r38.length - 1];
                Ki(_t122)
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
        "lineboundary" === n && ai(this, t, e, n, "decorators");
      };
      _proto0.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            Ki(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t123 = e.getParent(),
            _n62 =
              e.getNextSibling() ||
              (null === _t123 ? null : _t123.getNextSibling());
          if (Ki(_n62) && _n62.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto0.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e80 = this.anchor;
          var _n63 = _e80.getNode();
          if (this.forwardDeletion(_e80, _n63, t)) return;
          var _r39 = gl(Nl(_e80, t ? "previous" : "next"));
          if (
            _r39.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            var _t124 = { type: "initial" };
            for (var _e81 of _r39.iterNodeCarets("shadowRoot"))
              if (el(_e81)) {
                if (_e81.origin.isInline());
                else {
                  if (_e81.origin.isShadowRoot()) {
                    if ("merge-block" === _t124.type) break;
                    if (
                      Ki(_r39.anchor.origin) &&
                      _r39.anchor.origin.isEmpty()
                    ) {
                      var _t125 = Dl(_e81);
                      (Ol(this, pl(_t125, _t125)), _r39.anchor.origin.remove());
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
                if (tl(_e81)) {
                  if (Ki(_e81.origin)) {
                    if (_e81.origin.isInline()) {
                      if (!_e81.origin.isParentOf(_r39.anchor.origin)) break;
                    } else
                      _t124 = { block: _e81.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (zi(_e81.origin)) {
                    if (_e81.origin.isIsolated());
                    else if (
                      "merge-next-block" === _t124.type &&
                      (_e81.origin.isKeyboardSelectable() ||
                        !_e81.origin.isInline()) &&
                      Ki(_r39.anchor.origin) &&
                      _r39.anchor.origin.isEmpty()
                    ) {
                      _r39.anchor.origin.remove();
                      var _t126 = qr();
                      (_t126.add(_e81.origin.getKey()), Ko(_t126));
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
                : (Ol(
                    this,
                    pl(
                      !_e82.origin.isEmpty() && _n64.isEmpty()
                        ? El(ol(_n64, _e82.direction))
                        : _r39.anchor,
                      _e82,
                    ),
                  ),
                  this.removeText());
            }
          }
          var _i32 = this.focus;
          if ((this.modify("extend", t, "character"), this.isCollapsed())) {
            if (t && 0 === _e80.offset && Br(this, _e80.getNode())) return;
          } else {
            var _r40 = "text" === _i32.type ? _i32.getNode() : null;
            if (
              ((_n63 = "text" === _e80.type ? _e80.getNode() : null),
              null !== _r40 && _r40.isSegmented())
            ) {
              var _e83 = _i32.offset,
                _o15 = _r40.getTextContentSize();
              if (_r40.is(_n63) || (t && _e83 !== _o15) || (!t && 0 !== _e83))
                return void Wr(_r40, t, _e83);
            } else if (null !== _n63 && _n63.isSegmented()) {
              var _i33 = _e80.offset,
                _o16 = _n63.getTextContentSize();
              if (_n63.is(_r40) || (t && 0 !== _i33) || (!t && _i33 !== _o16))
                return void Wr(_n63, t, _i33);
            }
            !(function (t, e) {
              var n = t.anchor,
                r = t.focus,
                i = n.getNode(),
                o = r.getNode();
              if (i === o && "text" === n.type && "text" === r.type) {
                var _t128 = n.offset,
                  _o17 = r.offset,
                  _s1 = _t128 < _o17,
                  _l6 = _s1 ? _t128 : _o17,
                  _c5 = _s1 ? _o17 : _t128,
                  _a8 = _c5 - 1;
                if (_l6 !== _a8) {
                  (function (t) {
                    return !(Bo(t) || zr(t));
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
            Ui(_t129.getParent()) &&
            null === _t129.getPreviousSibling() &&
            Br(this, _t129);
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
        return (pi() || (this._cachedIsBackward = e), e);
      };
      _proto0.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return Rr;
    })();
    function Lr(t) {
      return t instanceof _Pr;
    }
    function Kr(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function $r(t) {
      var e = t.getStartEndPoints();
      if (null === e) return [0, 0];
      var n = e[0],
        r = e[1];
      return "element" === n.type &&
        "element" === r.type &&
        n.key === r.key &&
        n.offset === r.offset
        ? [0, 0]
        : [Kr(n), Kr(r)];
    }
    function Br(t, e) {
      for (var _n66 = e; _n66; _n66 = _n66.getParent()) {
        if (Ki(_n66)) {
          if (_n66.collapseAtStart(t)) return !0;
          if (gs(_n66)) break;
        }
        if (_n66.getPreviousSibling()) break;
      }
      return !1;
    }
    var zr = (function () {
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
    function Wr(t, e, n) {
      var r = t,
        i = r.getTextContent().split(/(?=\s)/g),
        o = i.length;
      var s = 0,
        l = 0;
      for (var _t131 = 0; _t131 < o; _t131++) {
        var _r41 = _t131 === o - 1;
        if (
          ((l = s), (s += i[_t131].length), (e && s === n) || s > n || _r41)
        ) {
          (i.splice(_t131, 1), _r41 && (l = void 0));
          break;
        }
      }
      var c = i.join("").trim();
      "" === c ? r.remove() : (r.setTextContent(c), r.select(l, l));
    }
    function Ur(e, n, r, i) {
      var o,
        s = n;
      if (Ns(e)) {
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
        if (((o = $o(_f6)), kr(o))) s = ll(o, _l7 ? "next" : "previous");
        else {
          var _c7 = $o(e);
          if (null === _c7) return null;
          if (Ki(_c7)) {
            var _u0$resolveChildIndex;
            var _a0 = i.getElementByKey(_c7.getKey());
            null === _a0 && t(214);
            var _u0 = Ds(i).$getDOMSlot(_c7, _a0, i);
            ((_u0$resolveChildIndex = _u0.resolveChildIndex(_c7, _a0, e, n)),
              (_c7 = _u0$resolveChildIndex[0]),
              (s = _u0$resolveChildIndex[1]),
              Ki(_c7) || t(215),
              _l7 &&
                s >= _c7.getChildrenSize() &&
                (s = Math.max(0, _c7.getChildrenSize() - 1)));
            var _f7 = _c7.getChildAtIndex(s);
            if (
              Ki(_f7) &&
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
                  (_c7 = Ki(_f7) ? _f7 : _f7.getParentOrThrow())),
                (s = 0));
            }
            kr(_f7)
              ? ((o = _f7),
                (_c7 = null),
                (s = ll(_f7, _l7 ? "next" : "previous")))
              : _f7 !== _c7 &&
                _l7 &&
                !_d6 &&
                (Ki(_c7) || t(216),
                (s = Math.min(_c7.getChildrenSize(), s + 1)));
          } else {
            var _t134 = _c7.getIndexWithinParent();
            ((s = 0 === n && zi(_c7) && $o(e) === _c7 ? _t134 : _t134 + 1),
              (_c7 = _c7.getParentOrThrow()));
          }
          if (Ki(_c7)) return wr(_c7.__key, s, "element");
        }
      } else o = $o(e);
      return kr(o) ? wr(o.__key, ll(o, s, "clamp"), "text") : null;
    }
    function Yr(t, e, n) {
      var r = t.offset,
        i = t.getNode();
      if (0 === r) {
        var _r42 = i.getPreviousSibling(),
          _o18 = i.getParent();
        if (e) {
          if ((n || !e) && null === _r42 && Ki(_o18) && _o18.isInline()) {
            var _e86 = _o18.getPreviousSibling();
            kr(_e86) && t.set(_e86.__key, _e86.getTextContent().length, "text");
          }
        } else
          Ki(_r42) && !n && _r42.isInline()
            ? t.set(_r42.__key, _r42.getChildrenSize(), "element")
            : kr(_r42) &&
              t.set(_r42.__key, _r42.getTextContent().length, "text");
      } else if (r === i.getTextContent().length) {
        var _r43 = i.getNextSibling(),
          _o19 = i.getParent();
        if (e && Ki(_r43) && _r43.isInline()) t.set(_r43.__key, 0, "element");
        else if (
          (n || e) &&
          null === _r43 &&
          Ki(_o19) &&
          _o19.isInline() &&
          !_o19.canInsertTextAfter()
        ) {
          var _e87 = _o19.getNextSibling();
          kr(_e87) && t.set(_e87.__key, 0, "text");
        }
      }
    }
    function jr(t, e, n) {
      if ("text" === t.type && "text" === e.type) {
        var _n67 = t.isBefore(e),
          _r44 = t.is(e);
        (Yr(t, _n67, _r44),
          Yr(e, !_n67, _r44),
          _r44 && e.set(t.key, t.offset, t.type));
      }
    }
    function Jr(t, e, n, r, i, o) {
      if (null === t || null === n || !_o(i, t, n)) return null;
      var s = Ur(t, e, Fr(o) ? o.anchor : null, i);
      if (null === s) return null;
      var l = Ur(n, r, Fr(o) ? o.focus : null, i);
      if (null === l) return null;
      if ("element" === s.type && "element" === l.type) {
        var _e88 = $o(t),
          _r45 = $o(n);
        if (zi(_e88) && zi(_r45)) return null;
      }
      return (jr(s, l), [s, l]);
    }
    function Gr(t) {
      return Ki(t) && !t.isInline();
    }
    function Hr(t, e, n, r, i, o) {
      var s = xi(),
        l = new _Rr(wr(t, e, i), wr(n, r, o), 0, "");
      return ((l.dirty = !0), (s._selection = l), l);
    }
    function Vr() {
      var t = wr("root", 0, "element"),
        e = wr("root", 0, "element");
      return new _Rr(t, e, 0, "");
    }
    function qr() {
      return new _Pr(new Set());
    }
    function Xr(t, e, n, r) {
      var i = n._window;
      if (null === i) return null;
      var o = r || i.event,
        s = o ? o.type : void 0,
        l = "selectionchange" === s,
        c =
          !W &&
          (l ||
            "beforeinput" === s ||
            "compositionstart" === s ||
            "compositionend" === s ||
            ("click" === s && o && 3 === o.detail) ||
            "drop" === s ||
            void 0 === s);
      var a, u, f, d;
      if (Fr(t) && !c) return t.clone();
      if (null === e) return null;
      if (
        ((a = e.anchorNode),
        (u = e.focusNode),
        (f = e.anchorOffset),
        (d = e.focusOffset),
        (l || void 0 === s) && Fr(t) && !_o(n, a, u))
      )
        return t.clone();
      var h = Jr(a, f, u, d, n, t);
      if (null === h) return null;
      var g = h[0],
        _ = h[1];
      var p = 0,
        y = "";
      if (Fr(t)) {
        var _e89 = t.anchor;
        if (g.key === _e89.key) ((p = t.format), (y = t.style));
        else {
          var _t135 = g.getNode();
          kr(_t135)
            ? ((p = _t135.getFormat()), (y = _t135.getStyle()))
            : Ki(_t135) &&
              ((p = _t135.getTextFormat()), (y = _t135.getTextStyle()));
        }
      }
      return new _Rr(g, _, p, y);
    }
    function Qr() {
      return xi()._selection;
    }
    function Zr() {
      return Ci()._editorState._selection;
    }
    function ti(t, e, n, r) {
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
          (i.set(c, _n68, "element"), o.set(c, _n68, "element"), ei(t));
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
      ei(t);
    }
    function ei(t) {
      var e = t.anchor,
        n = e.offset,
        r = t.focus,
        i = r.offset,
        o = e.getNode(),
        s = r.getNode();
      if (t.isCollapsed()) {
        if (!Ki(o)) return;
        var _t138 = o.getChildrenSize(),
          _i34 = n >= _t138,
          _s11 = _i34 ? o.getChildAtIndex(_t138 - 1) : o.getChildAtIndex(n);
        if (kr(_s11)) {
          var _t139 = 0;
          (_i34 && (_t139 = _s11.getTextContentSize()),
            e.set(_s11.__key, _t139, "text"),
            r.set(_s11.__key, _t139, "text"));
        }
        return;
      }
      if (Ki(o)) {
        var _t140 = o.getChildrenSize(),
          _r46 = n >= _t140,
          _i35 = _r46 ? o.getChildAtIndex(_t140 - 1) : o.getChildAtIndex(n);
        if (kr(_i35)) {
          var _t141 = 0;
          (_r46 && (_t141 = _i35.getTextContentSize()),
            e.set(_i35.__key, _t141, "text"));
        }
      }
      if (Ki(s)) {
        var _t142 = s.getChildrenSize(),
          _e91 = i >= _t142,
          _n69 = _e91 ? s.getChildAtIndex(_t142 - 1) : s.getChildAtIndex(i);
        if (kr(_n69)) {
          var _t143 = 0;
          (_e91 && (_t143 = _n69.getTextContentSize()),
            r.set(_n69.__key, _t143, "text"));
        }
      }
    }
    function ni(t, e, n, r, i) {
      var o = null,
        s = 0,
        l = null;
      (null !== r
        ? ((o = r.__key),
          kr(r)
            ? ((s = r.getTextContentSize()), (l = "text"))
            : Ki(r) && ((s = r.getChildrenSize()), (l = "element")))
        : null !== i &&
          ((o = i.__key), kr(i) ? (l = "text") : Ki(i) && (l = "element")),
        null !== o && null !== l
          ? t.set(o, s, l)
          : ((s = e.getIndexWithinParent()),
            -1 === s && (s = n.getChildrenSize()),
            t.set(n.__key, s, "element")));
    }
    function ri(t, e, n, r, i) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : i), "text")
        : t.offset > r.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function ii(t, e, n, r, i) {
      try {
        t.setBaseAndExtent(e, n, r, i);
      } catch (t) {}
    }
    function oi(t, e, n) {
      var r = os(t, e.getKey());
      if (Ki(e)) {
        var _i36 = Ds(t).$getDOMSlot(e, r, t);
        return [_i36.element, n + _i36.getFirstChildOffset()];
      }
      return [r, n];
    }
    function si(t, e, n, r, i, s, l) {
      var c = document.activeElement;
      if ((i.has(Hn) && c !== s) || (null !== c && go(c))) return;
      if (!Fr(e))
        return void (
          null !== t &&
          _o(n, r.anchorNode, r.focusNode) &&
          r.removeAllRanges()
        );
      var a = e.anchor,
        u = e.focus,
        f = a.getNode(),
        d = u.getNode(),
        _oi = oi(n, f, a.offset),
        h = _oi[0],
        g = _oi[1],
        _oi2 = oi(n, d, u.offset),
        _ = _oi2[0],
        p = _oi2[1],
        y = e.format,
        m = e.style,
        x = e.isCollapsed();
      var C = h,
        S = _,
        T = !1;
      var N, v, k, O, M;
      if (
        ("text" === a.type
          ? ((C = No(h)), (T = f.getFormat() !== y || f.getStyle() !== m))
          : Fr(t) && "text" === t.anchor.type && (T = !0),
        "text" === u.type && (S = No(_)),
        null !== C && null !== S) &&
        (x &&
          (null === t || T || (Fr(t) && (t.format !== y || t.style !== m))) &&
          ((N = y),
          (v = m),
          (k = g),
          (O = a.key),
          (M = performance.now()),
          (xn = [N, v, k, O, M])),
        ("Range" === r.type && x) ||
          r.anchorOffset !== g ||
          r.focusOffset !== p ||
          r.anchorNode !== C ||
          r.focusNode !== S ||
          ((null !== c && s.contains(c)) ||
            i.has(Xn) ||
            s.focus({ preventScroll: !0 }),
          "element" === a.type))
      ) {
        if (
          (ii(r, C, g, S, p),
          !o ||
            !e.isCollapsed() ||
            null === s ||
            i.has(Xn) ||
            (null !== document.activeElement &&
              s.contains(document.activeElement)) ||
            s.focus({ preventScroll: !0 }),
          !i.has(Vn) &&
            e.isCollapsed() &&
            null !== s &&
            s === document.activeElement)
        ) {
          var _t144 =
            Fr(e) && "element" === e.anchor.type
              ? C.childNodes[g] || null
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
              var r = ls(n),
                i = fs(r);
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
                  } else ((l = 0), (c = ds(t).innerHeight));
                  var _n71 = i.getComputedStyle(r.documentElement),
                    _o20 = parseFloat(_n71.scrollPaddingTop),
                    _s12 = parseFloat(_n71.scrollPaddingBottom);
                  (isFinite(_o20) && (l += _o20),
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
                a = ss(a);
              }
            })(n, _e92, s);
          }
        }
        dn = !0;
      }
    }
    function li(e) {
      var n = e;
      e.isCollapsed() || n.removeText();
      var r = Qr();
      (Fr(r) && (n = r), Fr(n) || t(161));
      var i = n.anchor;
      var o = i.getNode(),
        s = i.offset;
      for (; !As(o); ) {
        var _ci;
        var _t148 = o;
        if (((_ci = ci(o, s)), (o = _ci[0]), (s = _ci[1]), _t148.is(o))) break;
      }
      return s;
    }
    function ci(t, e) {
      var n = t.getParent();
      if (!n) {
        var _t149 = Xi();
        return (Ro().append(_t149), _t149.select(), [Ro(), 0]);
      }
      if (kr(t)) {
        var _r47 = t.splitText(e);
        if (0 === _r47.length) return [n, t.getIndexWithinParent()];
        var _i37 = 0 === e ? 0 : 1;
        return [n, _r47[0].getIndexWithinParent() + _i37];
      }
      if (!Ki(t) || 0 === e) return [n, t.getIndexWithinParent()];
      var r = t.getChildAtIndex(e);
      if (r) {
        var _n73 = new _Rr(
            wr(t.__key, e, "element"),
            wr(t.__key, e, "element"),
            0,
            "",
          ),
          _i38 = t.insertNewAfter(_n73);
        _i38 && _i38.append.apply(_i38, [r].concat(r.getNextSiblings()));
      }
      return [n, t.getIndexWithinParent() + 1];
    }
    function ai(t, e, n, r, i) {
      if (i === void 0) {
        i = "decorators-and-blocks";
      }
      if ("move" === e && "character" === r && !t.isCollapsed()) {
        var _ref21 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e96 = _ref21[0],
          _r48 = _ref21[1];
        return (_r48.set(_e96.key, _e96.offset, _e96.type), !0);
      }
      var o = Nl(t.focus, n ? "previous" : "next"),
        s = "lineboundary" === r,
        l = "move" === e;
      var c = o,
        a = "decorators-and-blocks" === i;
      if (!Il(c)) {
        for (var _t150 of c) {
          a = !1;
          var _e97 = _t150.origin;
          if (
            !zi(_e97) ||
            _e97.isIsolated() ||
            ((c = _t150), !s || !_e97.isInline())
          )
            break;
        }
        if (a)
          for (var _t151 of gl(o).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (el(_t151)) _t151.origin.isInline() || (c = _t151);
            else {
              if (Ki(_t151.origin)) continue;
              zi(_t151.origin) && !_t151.origin.isInline() && (c = _t151);
            }
            break;
          }
      }
      if (c === o) return !1;
      if (l && !s && zi(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t152 = qr();
        return (_t152.add(c.origin.getKey()), Ko(_t152), !0);
      }
      return ((c = Dl(c)), l && vl(t.anchor, c), vl(t.focus, c), a || !s);
    }
    var ui = null,
      fi = null,
      di = !1,
      hi = !1,
      gi = 0;
    var _i = { characterData: !0, childList: !0, subtree: !0 };
    function pi() {
      return di || (null !== ui && ui._readOnly);
    }
    function yi() {
      di && t(13);
    }
    function mi() {
      gi > 99 && t(14);
    }
    function xi() {
      return (null === ui && t(195, Si()), ui);
    }
    function Ci() {
      return (null === fi && t(337, Si()), fi);
    }
    function Si() {
      var t = 0;
      var e = new Set(),
        n = _oo.version;
      if ("undefined" != typeof window)
        for (var _r49 of document.querySelectorAll("[contenteditable]")) {
          var _i39 = mo(_r49);
          if (po(_i39)) t++;
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
    function Ti() {
      return fi;
    }
    function Ni(t, e, n) {
      var r = e.__type,
        i = ao(t, r);
      var o = n.get(r);
      void 0 === o && ((o = Array.from(i.transforms)), n.set(r, o));
      var s = o.length;
      for (var _t154 = 0; _t154 < s && (o[_t154](e), e.isAttached()); _t154++);
    }
    function vi(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function ki(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var r = e;
      Array.isArray(e) || (r = [e]);
      for (var _t155 of r) n.add(_t155);
    }
    function Oi(e, n) {
      var r = e.type,
        i = n.get(r);
      void 0 === i && t(17, r);
      var o = i.klass;
      e.type !== o.getType() && t(18, o.name);
      var s = o.importJSON(e),
        l = e.children;
      if (Ki(s) && Array.isArray(l))
        for (var _t156 = 0; _t156 < l.length; _t156++) {
          var _e98 = Oi(l[_t156], n);
          s.append(_e98);
        }
      return s;
    }
    function Mi(t, e, n) {
      var r = ui,
        i = di,
        o = fi;
      ((ui = e), (di = !0), (fi = t));
      try {
        return n();
      } finally {
        ((ui = r), (di = i), (fi = o));
      }
    }
    function Ei(t, e) {
      var n = t._pendingEditorState,
        r = t._rootElement,
        i = t._headless || null === r;
      if (null === n)
        return void (t._deferred.length > 0 && wi(t, t._deferred));
      var o = t._editorState,
        s = o._selection,
        l = n._selection,
        c = 0 !== t._dirtyType,
        a = ui,
        u = di,
        f = fi,
        d = t._updating,
        h = t._observer;
      var g = null;
      if (
        ((t._pendingEditorState = null),
        (t._editorState = n),
        !i && c && null !== h)
      ) {
        ((fi = t), (ui = n), (di = !1), (t._updating = !0));
        try {
          var _e99 = t._dirtyType,
            _r50 = t._dirtyElements,
            _i40 = t._dirtyLeaves;
          (h.disconnect(), (g = re(o, n, t, _e99, _r50, _i40)));
        } catch (e) {
          if ((e instanceof Error && t._onError(e), hi)) throw e;
          return (
            to(t, null, r, n),
            X(t),
            (t._dirtyType = 2),
            (hi = !0),
            Ei(t, o),
            void (hi = !1)
          );
        } finally {
          (h.observe(r, _i), (t._updating = d), (ui = a), (di = u), (fi = f));
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
          for (o in r) i.has(o) || (r === n && (r = Po(t)), delete r[o]);
        })(t, n));
      var C = i ? null : Ss(ds(t));
      if (
        t._editable &&
        null !== C &&
        (c || null === l || l.dirty || !l.is(s)) &&
        null !== r &&
        !m.has(qn)
      ) {
        ((fi = t), (ui = n));
        try {
          if ((null !== h && h.disconnect(), c || null === l || l.dirty)) {
            var _e100 = t._blockCursorElement;
            (null !== _e100 && Cs(_e100, t, r), si(s, l, t, C, m, r));
          }
          !(function (t, e, n) {
            var r = t._blockCursorElement;
            if (
              Fr(n) &&
              n.isCollapsed() &&
              "element" === n.anchor.type &&
              e.contains(document.activeElement)
            ) {
              var _i41 = n.anchor,
                _o21 = _i41.getNode(),
                _s13 = _i41.offset;
              var _l9 = !1,
                _c8 = null;
              if (_s13 === _o21.getChildrenSize()) {
                xs(_o21.getChildAtIndex(_s13 - 1)) && (_l9 = !0);
              } else {
                var _e101 = _o21.getChildAtIndex(_s13);
                if (null !== _e101 && xs(_e101)) {
                  var _n74 = _e101.getPreviousSibling();
                  (null === _n74 || xs(_n74)) &&
                    ((_l9 = !0), (_c8 = t.getElementByKey(_e101.__key)));
                }
              }
              if (_l9) {
                var _n75 = t.getElementByKey(_o21.__key);
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
                            var _t157 = $l(r);
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
            null !== r && Cs(r, t, e);
          })(t, r, l);
        } finally {
          (null !== h && h.observe(r, _i), (fi = f), (ui = a));
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
              var _o22 = e.get(_t159);
              void 0 !== _o22 &&
                _s14(_o22, {
                  dirtyLeaves: r,
                  prevEditorState: i,
                  updateTags: n,
                });
            }
          }
        })(t, g, m, _, o),
        Fr(l) ||
          null === l ||
          (null !== s && s.is(l)) ||
          t.dispatchCommand(se, void 0));
      var S = t._pendingDecorators;
      (null !== S &&
        ((t._decorators = S),
        (t._pendingDecorators = null),
        bi("decorator", t, !0, S)),
        (function (t, e, n) {
          var r = Fo(e),
            i = Fo(n);
          r !== i && bi("textcontent", t, !0, i);
        })(t, e || o, n),
        bi("update", t, !0, {
          dirtyElements: p,
          dirtyLeaves: _,
          editorState: n,
          mutatedNodes: g,
          normalizedNodes: y,
          prevEditorState: e || o,
          tags: m,
        }),
        wi(t, x),
        (function (t) {
          var e = t._updates;
          if (0 !== e.length) {
            var _n76 = e.shift();
            if (_n76) {
              var _e102 = _n76[0],
                _r51 = _n76[1];
              Ii(t, _e102, _r51);
            }
          }
        })(t));
    }
    function bi(t, e, n) {
      var i = e._updating;
      e._updating = n;
      try {
        var _n77 = e._listeners[t],
          _i42 = Array.from(_n77);
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
            _n77.has(_t160) ? _n77.set(_t160, _i43) : _i43 && _i43();
          }
        }
      } finally {
        e._updating = i;
      }
    }
    function Ai(t, e, n, r) {
      var i = zo(t);
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
                  (Pi(l, function () {
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
            Ai(o, e, n, r);
          }),
        !1
      );
    }
    function wi(t, e) {
      if (((t._deferred = []), 0 !== e.length)) {
        var _n78 = t._updating;
        t._updating = !0;
        try {
          for (var _t163 = 0; _t163 < e.length; _t163++) e[_t163]();
        } finally {
          t._updating = _n78;
        }
      }
    }
    function Di(e, n) {
      var r = e._updates;
      var i = n || !1;
      for (; 0 !== r.length; ) {
        var _n79 = r.shift();
        if (_n79) {
          var _r52 = _n79[0],
            _o23 = _n79[1],
            _s16 = e._pendingEditorState;
          var _l1 = void 0;
          (void 0 !== _o23 &&
            ((_l1 = _o23.onUpdate),
            _o23.skipTransforms && (i = !0),
            _o23.discrete && (null === _s16 && t(191), (_s16._flushSync = !0)),
            _l1 && e._deferred.push(_l1),
            ki(e, _o23.tag)),
            null == _s16 ? Ii(e, _r52, _o23) : _r52());
        }
      }
      return i;
    }
    function Ii(e, n, r) {
      var i = e._updateTags;
      var o,
        s = !1,
        l = !1;
      (void 0 !== r &&
        ((o = r.onUpdate),
        ki(e, r.tag),
        (s = r.skipTransforms || !1),
        (l = r.discrete || !1)),
        o && e._deferred.push(o));
      var c = e._editorState;
      var a = e._pendingEditorState,
        u = !1;
      ((null === a || a._readOnly) &&
        ((a = e._pendingEditorState = Yi(a || c)), (u = !0)),
        (a._flushSync = l));
      var f = ui,
        d = di,
        h = fi,
        g = e._updating;
      ((ui = a), (di = !1), (e._updating = !0), (fi = e));
      var _ = e._headless || null === e.getRootElement();
      lo(null);
      try {
        u &&
          (_
            ? null !== c._selection && (a._selection = c._selection.clone())
            : (a._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  r = Ss(ds(t));
                return Fr(n) || null == n ? Xr(n, r, t, e) : n.clone();
              })(e, (r && r.event) || null)));
        var _i45 = e._compositionKey;
        (n(),
          (s = Di(e, s)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              r = t._selection;
            if (Fr(r)) {
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
                    kr(_e106) &&
                      _e106.isAttached() &&
                      _e106.isSimpleText() &&
                      !_e106.isUnmergeable() &&
                      ft(_e106);
                  }
                })(a, e)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    r = e._dirtyElements,
                    i = t._nodeMap,
                    o = bo(),
                    s = new Map();
                  var l = n,
                    c = l.size,
                    a = r,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t167 of l) {
                        var _r53 = i.get(_t167);
                        (kr(_r53) &&
                          _r53.isAttached() &&
                          _r53.isSimpleText() &&
                          !_r53.isUnmergeable() &&
                          ft(_r53),
                          void 0 !== _r53 && vi(_r53, o) && Ni(e, _r53, s),
                          n.add(_t167));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        gi++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t168 of a) {
                      var _n80 = _t168[0],
                        _l10 = _t168[1];
                      if ((r.set(_n80, _l10), !_l10)) continue;
                      var _c9 = i.get(_n80);
                      void 0 !== _c9 && vi(_c9, o) && Ni(e, _c9, s);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      gi++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = r));
                })(a, e),
            Di(e),
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
                      (Ki(_e107) && z(_e107, _t169, i, o, s, r),
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
        var _o24 = a._selection;
        if (Fr(_o24)) {
          var _e109 = a._nodeMap,
            _n81 = _o24.anchor.key,
            _r54 = _o24.focus.key;
          (void 0 !== _e109.get(_n81) && void 0 !== _e109.get(_r54)) || t(19);
        } else Lr(_o24) && 0 === _o24._nodes.size && (a._selection = null);
      } catch (t) {
        return (
          t instanceof Error && e._onError(t),
          (e._pendingEditorState = c),
          (e._dirtyType = 2),
          e._cloneNotNeeded.clear(),
          (e._dirtyLeaves = new Set()),
          e._dirtyElements.clear(),
          void Ei(e)
        );
      } finally {
        ((ui = f), (di = d), (fi = h), (e._updating = g), (gi = 0));
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
          ? ((a._flushSync = !1), Ei(e))
          : u &&
            fo(function () {
              Ei(e);
            })
        : ((a._flushSync = !1),
          u && (i.clear(), (e._deferred = []), (e._pendingEditorState = null)));
    }
    function Pi(t, e, n) {
      fi === t && void 0 === n ? e() : Ii(t, e, n);
    }
    var _Fi = (function () {
      function Fi(t, e, n) {
        ((this.element = t),
          (this.before = e || null),
          (this.after = n || null));
      }
      var _proto1 = Fi.prototype;
      _proto1.withBefore = function withBefore(t) {
        return new Fi(this.element, t, this.after);
      };
      _proto1.withAfter = function withAfter(t) {
        return new Fi(this.element, this.before, t);
      };
      _proto1.withElement = function withElement(t) {
        return this.element === t ? this : new Fi(t, this.before, this.after);
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
        if (null === t) this.removeManagedLineBreak();
        else {
          var _e110 = "decorator" === t && (d || l || a);
          this.insertManagedLineBreak(_e110);
        }
      };
      _proto1.removeManagedLineBreak = function removeManagedLineBreak() {
        var t = this.getManagedLineBreak();
        if (t) {
          var _e111 = this.element,
            _n82 = "IMG" === t.nodeName ? t.nextSibling : null;
          (_n82 && _e111.removeChild(_n82),
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
        var i = Ri(e, n);
        i.push(r);
        var o = Ri(e, this.element);
        var s = t.getIndexWithinParent();
        for (var _t173 = 0; _t173 < o.length; _t173++) {
          var _e114 = i[_t173],
            _n83 = o[_t173];
          if (void 0 === _e114 || _e114 < _n83) break;
          if (_e114 > _n83) {
            s += 1;
            break;
          }
        }
        return [t.getParentOrThrow(), s];
      };
      return Fi;
    })();
    function Ri(e, n) {
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
    var _Li4 = (function (_Jn3) {
      function Li(t) {
        var _this3;
        ((_this3 = _Jn3.call(this, t) || this),
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
      babelHelpers.inheritsLoose(Li, _Jn3);
      var _proto10 = Li.prototype;
      _proto10.afterCloneFrom = function afterCloneFrom(t) {
        (_Jn3.prototype.afterCloneFrom.call(this, t),
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
        var t = Ci()._dirtyElements;
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
          if ((kr(e) && t.push(e), Ki(e))) {
            var _n84 = e.getAllTextNodes();
            t.push.apply(t, _n84);
          }
          e = e.getNextSibling();
        }
        return t;
      };
      _proto10.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; Ki(t); ) {
          var _e116 = t.getFirstChild();
          if (null === _e116) break;
          t = _e116;
        }
        return t;
      };
      _proto10.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; Ki(t); ) {
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
          return (Ki(_t175) && _t175.getLastDescendant()) || _t175 || null;
        }
        var r = e[t];
        return (Ki(r) && r.getFirstDescendant()) || r || null;
      };
      _proto10.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : Ao(t);
      };
      _proto10.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var e = this.getFirstChild();
        return (null === e && t(45, this.__key), e);
      };
      _proto10.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : Ao(t);
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
        for (var _r55 = 0; _r55 < n; _r55++) {
          var _i47 = e[_r55];
          ((t += _i47.getTextContent()),
            Ki(_i47) && _r55 !== n - 1 && !_i47.isInline() && (t += v));
        }
        return t;
      };
      _proto10.getTextContentSize = function getTextContentSize() {
        var t = 0;
        var e = this.getChildren(),
          n = e.length;
        for (var _r56 = 0; _r56 < n; _r56++) {
          var _i48 = e[_r56];
          ((t += _i48.getTextContentSize()),
            Ki(_i48) && _r56 !== n - 1 && !_i48.isInline() && (t += 2));
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
        return vo(this.getLatest().__textFormat, t, e);
      };
      _proto10.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto10.select = function select(t, e) {
        yi();
        var n = Qr();
        var r = t,
          i = e;
        var o = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t176 = this.getFirstChild();
            if (kr(_t176) || Ki(_t176)) return _t176.select(0, 0);
          } else if (
            !((void 0 !== t && t !== o) || (void 0 !== e && e !== o))
          ) {
            var _t177 = this.getLastChild();
            if (kr(_t177) || Ki(_t177)) return _t177.select();
          }
        (void 0 === r && (r = o), void 0 === i && (i = o));
        var s = this.__key;
        return Fr(n)
          ? (n.anchor.set(s, r, "element"),
            n.focus.set(s, i, "element"),
            (n.dirty = !0),
            n)
          : Hr(s, r, s, i, "element", "element");
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
        Yn(this) && t(324, this.__key, this.__type);
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
          for (var _r57 = 0; _r57 < n; _r57++) {
            null === _e119 && t(100);
            var _n85 = _e119.getNextSibling(),
              _r58 = _e119.__key;
            (Oo(_e119.getWritable()), c.push(_r58), (_e119 = _n85));
          }
        }
        var d = u;
        for (var _e120 of r) {
          null !== d && _e120.is(d) && (u = d = d.getPreviousSibling());
          var _n86 = _e120.getWritable();
          (_n86.__parent === s && f--, Oo(_n86));
          var _r59 = _e120.__key;
          if (null === d) ((o.__first = _r59), (_n86.__prev = null));
          else {
            var _t179 = d.getWritable();
            ((_t179.__next = _r59), (_n86.__prev = _t179.__key));
          }
          (_e120.__key === s && t(76),
            (_n86.__parent = s),
            l.push(_r59),
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
          var _t181 = Qr();
          if (Fr(_t181)) {
            var _e122 = new Set(c),
              _n87 = new Set(l),
              _r60 = _t181.anchor,
              _i49 = _t181.focus;
            ($i(_r60, _e122, _n87) && ni(_r60, _r60.getNode(), this, u, a),
              $i(_i49, _e122, _n87) && ni(_i49, _i49.getNode(), this, u, a),
              0 !== f || this.canBeEmpty() || gs(this) || this.remove());
          }
        }
        return o;
      };
      _proto10.getDOMSlot = function getDOMSlot(t) {
        return new _Fi(t);
      };
      _proto10.exportDOM = function exportDOM(t) {
        var _Jn3$prototype$export = _Jn3.prototype.exportDOM.call(this, t),
          e = _Jn3$prototype$export.element;
        if (Ns(e)) {
          var _t182 = this.getIndent();
          _t182 > 0 && (e.style.paddingInlineStart = 40 * _t182 + "px");
          var _n88 = this.getDirection();
          _n88 && (e.dir = _n88);
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
            _Jn3.prototype.exportJSON.call(this),
          ),
          e = this.getTextFormat(),
          n = this.getTextStyle();
        return (
          (0 === e && "" === n) ||
            gs(this) ||
            this.getChildren().some(kr) ||
            (0 !== e && (t.textFormat = e), "" !== n && (t.textStyle = n)),
          t
        );
      };
      _proto10.updateFromJSON = function updateFromJSON(t) {
        return _Jn3.prototype.updateFromJSON
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
        var n = Ds(e).$getDOMSlot(this, t, e);
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
      return Li;
    })(_Jn5);
    function Ki(t) {
      return t instanceof _Li4;
    }
    function $i(t, e, n) {
      var r = t.getNode();
      for (; r; ) {
        var _t184 = r.__key;
        if (e.has(_t184) && !n.has(_t184)) return !0;
        r = r.getParent();
      }
      return !1;
    }
    var _Bi = (function (_Jn4) {
      function Bi() {
        return _Jn4.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Bi, _Jn4);
      var _proto11 = Bi.prototype;
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
      return Bi;
    })(_Jn5);
    function zi(t) {
      return t instanceof _Bi;
    }
    var _Wi = (function (_Li) {
      function Wi() {
        var _this4;
        ((_this4 = _Li.call(this, "root") || this),
          (_this4.__cachedText = null));
        return _this4;
      }
      babelHelpers.inheritsLoose(Wi, _Li);
      Wi.getType = function getType() {
        return "root";
      };
      Wi.clone = function clone() {
        return new Wi();
      };
      var _proto12 = Wi.prototype;
      _proto12.getTopLevelElementOrThrow =
        function getTopLevelElementOrThrow() {
          t(51);
        };
      _proto12.getTextContent = function getTextContent() {
        var t = this.__cachedText;
        return (!pi() && 0 !== Ci()._dirtyType) || null === t
          ? _Li.prototype.getTextContent.call(this)
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
        for (var _e123 of r) Ki(_e123) || zi(_e123) || t(282);
        return _Li.prototype.splice.call(this, e, n, r);
      };
      Wi.importJSON = function importJSON(t) {
        return Ro().updateFromJSON(t);
      };
      _proto12.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return Wi;
    })(_Li4);
    function Ui(t) {
      return t instanceof _Wi;
    }
    function Yi(t) {
      return new _Gi($(t._nodeMap));
    }
    function ji() {
      return new _Gi(new Map([["root", new _Wi()]]));
    }
    function Ji(e) {
      var n = e.exportJSON(),
        r = e.constructor;
      if ((n.type !== r.getType() && t(130, r.name), Ki(e))) {
        var _i51 = n.children;
        Array.isArray(_i51) || t(59, r.name);
        var _o25 = e.getChildren();
        for (var _t185 = 0; _t185 < _o25.length; _t185++) {
          var _e124 = Ji(_o25[_t185]);
          _i51.push(_e124);
        }
      }
      return n;
    }
    var _Gi = (function () {
      function Gi(t, e) {
        ((this._nodeMap = t),
          (this._selection = e || null),
          (this._flushSync = !1),
          (this._readOnly = !1));
      }
      var _proto13 = Gi.prototype;
      _proto13.isEmpty = function isEmpty() {
        return 1 === this._nodeMap.size && null === this._selection;
      };
      _proto13.read = function read(t, e) {
        return Mi((e && e.editor) || null, this, t);
      };
      _proto13.clone = function clone(t) {
        var e = new Gi(this._nodeMap, void 0 === t ? this._selection : t);
        return ((e._readOnly = !0), e);
      };
      _proto13.toJSON = function toJSON() {
        return Mi(null, this, function () {
          return { root: Ji(Ro()) };
        });
      };
      return Gi;
    })();
    var _Hi = (function (_Li2) {
      function Hi() {
        return _Li2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Hi, _Li2);
      Hi.getType = function getType() {
        return "artificial";
      };
      var _proto14 = Hi.prototype;
      _proto14.createDOM = function createDOM(t) {
        return document.createElement("div");
      };
      return Hi;
    })(_Li4);
    var _Vi = (function (_Li3) {
      function Vi() {
        return _Li3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Vi, _Li3);
      Vi.getType = function getType() {
        return "paragraph";
      };
      Vi.clone = function clone(t) {
        return new Vi(t.__key);
      };
      var _proto15 = Vi.prototype;
      _proto15.createDOM = function createDOM(t) {
        var e = document.createElement("p"),
          n = Zo(t.theme, "paragraph");
        if (void 0 !== n) {
          var _e$classList2;
          (_e$classList2 = e.classList).add.apply(_e$classList2, n);
        }
        return e;
      };
      _proto15.updateDOM = function updateDOM(t, e, n) {
        return !1;
      };
      Vi.importDOM = function importDOM() {
        return {
          p: function p(t) {
            return { conversion: qi, priority: 0 };
          },
        };
      };
      _proto15.exportDOM = function exportDOM(t) {
        var _Li3$prototype$export = _Li3.prototype.exportDOM.call(this, t),
          e = _Li3$prototype$export.element;
        if (Ns(e)) {
          this.isEmpty() && e.append(document.createElement("br"));
          var _t186 = this.getFormatType();
          _t186 && (e.style.textAlign = _t186);
        }
        return { element: e };
      };
      Vi.importJSON = function importJSON(t) {
        return Xi().updateFromJSON(t);
      };
      _proto15.exportJSON = function exportJSON() {
        var t = _Li3.prototype.exportJSON.call(this);
        if (void 0 === t.textFormat || void 0 === t.textStyle) {
          var _e125 = this.getChildren().find(kr);
          _e125
            ? ((t.textFormat = _e125.getFormat()),
              (t.textStyle = _e125.getStyle()))
            : ((t.textFormat = this.getTextFormat()),
              (t.textStyle = this.getTextStyle()));
        }
        return t;
      };
      _proto15.insertNewAfter = function insertNewAfter(t, e) {
        var n = Xi();
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
          (kr(t[0]) && "" === t[0].getTextContent().trim())
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return Vi;
    })(_Li4);
    function qi(t) {
      var e = Xi();
      if (($s(e, t), Ls(t, e), "" === e.getFormatType())) {
        var _n89 = t.getAttribute("align");
        _n89 && _n89 && _n89 in D && e.setFormat(_n89);
      }
      return (Ks(e, t), { node: e });
    }
    function Xi() {
      return ps(new _Vi());
    }
    function Qi(t) {
      return t instanceof _Vi;
    }
    var Zi = 0;
    function to(t, e, n, r, i) {
      var o = t._keyToDOMMap;
      (o.clear(),
        (t._editorState = ji()),
        (t._pendingEditorState = r),
        (t._compositionKey = null),
        (t._dirtyType = 0),
        t._cloneNotNeeded.clear(),
        (t._dirtyLeaves = new Set()),
        t._dirtyElements.clear(),
        (t._normalizedNodes = new Set()),
        (i && i.preserveUpdateQueue) ||
          ((t._updateTags = new Set()), (t._updates = [])),
        (t._blockCursorElement = null));
      var s = t._observer;
      (null !== s && (s.disconnect(), (t._observer = null)),
        null !== e && (e.textContent = ""),
        null !== n && ((n.textContent = ""), o.set("root", n)));
    }
    function eo(t) {
      var e = new Set(),
        n = new Set();
      var r = t;
      for (; r; ) {
        var _Ws3 = Ws(r),
          _t187 = _Ws3.ownNodeConfig,
          _i52 = r.transform;
        if (!n.has(_i52)) {
          n.add(_i52);
          var _t188 = r.transform();
          _t188 && e.add(_t188);
        }
        if (_t187) {
          var _n90 = _t187.$transform;
          (_n90 && e.add(_n90), (r = _t187["extends"]));
        } else {
          var _t189 = Object.getPrototypeOf(r);
          r =
            _t189.prototype instanceof _Jn5 && _t189 !== _Jn5 ? _t189 : void 0;
        }
      }
      return e;
    }
    var no = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, r) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = uo(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, r, i) {
        return Ki(t) && t.extractWithChild(e, n, r);
      },
      $getDOMSlot: function $getDOMSlot(e, n, r) {
        return (Ki(e) || t(336, e.getKey(), e.getType()), e.getDOMSlot(n));
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return Ki(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, r) {
        return t.updateDOM(e, n, r._config);
      },
    };
    function ro(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function io(t, e, n) {
      return (t.set(e, n), ro.bind(null, t, e));
    }
    var _oo = (function () {
      function oo(t, e, n, r, i, o, s, l) {
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
          (this._key = Wo()),
          (this._onError = i),
          (this._htmlConversions = o),
          (this._editable = s),
          (this._headless = null !== e && e._headless),
          (this._window = null),
          (this._blockCursorElement = null));
      }
      var _proto16 = oo.prototype;
      _proto16.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto16.registerUpdateListener = function registerUpdateListener(t) {
        return io(this._listeners.update, t);
      };
      _proto16.registerEditableListener = function registerEditableListener(t) {
        return io(this._listeners.editable, t);
      };
      _proto16.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return io(this._listeners.decorator, t);
      };
      _proto16.registerTextContentListener =
        function registerTextContentListener(t) {
          return io(this._listeners.textcontent, t);
        };
      _proto16.registerRootListener = function registerRootListener(t) {
        var _this13 = this;
        var e = this._listeners.root;
        return Bl(io(e, t, t(this._rootElement, null) || void 0), function () {
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
          r = Fs(n).get(e.getType());
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
            var n = Fs(t.getEditorState()),
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
                    var _t194 = Ao(_e127);
                    _t194 && _t194.markDirty();
                  }
              },
              null === t._pendingEditorState ? { tag: Gn } : void 0,
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
        return is(this, t, e);
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
          var _n91 = Zo(this._config.theme, "root"),
            _r61 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            to(this, e, t, _r61, { preserveUpdateQueue: !0 }),
            null !== e &&
              (this._config.disableEvents || zn(e),
              null != _n91 &&
                (_e$classList3 = e.classList).remove.apply(
                  _e$classList3,
                  _n91,
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e128 = fs(t),
              _r62 = t.style;
            ((_r62.userSelect = "text"),
              (_r62.whiteSpace = "pre-wrap"),
              (_r62.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e128),
              (this._dirtyType = 2),
              X(this),
              this._updateTags.add(Gn),
              Ei(this),
              this._config.disableEvents ||
                (function (t, e, _fn$get) {
                  var n = t.ownerDocument;
                  un.set(t, n);
                  var r = (_fn$get = fn.get(n)) != null ? _fn$get : 0;
                  (r < 1 && n.addEventListener("selectionchange", Ln),
                    fn.set(n, r + 1),
                    (t.__lexicalEditor = e));
                  var i = Fn(t);
                  var _loop2 = function _loop2() {
                    var _nn$_n = nn[_n92],
                      r = _nn$_n[0],
                      o = _nn$_n[1],
                      s =
                        "function" == typeof o
                          ? function (t) {
                              $n(t) ||
                                (Kn(t),
                                (e.isEditable() || "click" === r) && o(t, e));
                            }
                          : function (t) {
                              if ($n(t)) return;
                              Kn(t);
                              var n = e.isEditable();
                              switch (r) {
                                case "cut":
                                  return n && is(e, Je, t);
                                case "copy":
                                  return is(e, je, t);
                                case "paste":
                                  return n && is(e, ye, t);
                                case "dragstart":
                                  return n && is(e, We, t);
                                case "dragover":
                                  return n && is(e, Ue, t);
                                case "dragend":
                                  return n && is(e, Ye, t);
                                case "focus":
                                  return n && is(e, Qe, t);
                                case "blur":
                                  return n && is(e, Ze, t);
                                case "drop":
                                  return n && is(e, Be, t);
                              }
                            };
                    (t.addEventListener(r, s),
                      i.push(function () {
                        t.removeEventListener(r, s);
                      }));
                  };
                  for (var _n92 = 0; _n92 < nn.length; _n92++) {
                    _loop2();
                  }
                })(t, this),
              null != _n91 &&
                (_t$classList = t.classList).add.apply(_t$classList, _n91));
          } else ((this._window = null), this._updateTags.add(Gn), Ei(this));
          bi("root", this, !1, t, e);
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
          ((r = Yi(e)),
          (r._selection = e._selection ? e._selection.clone() : null)),
          q(this));
        var i = this._pendingEditorState,
          o = this._updateTags,
          s = void 0 !== n ? n.tag : null;
        (null === i || i.isEmpty() || (null != s && o.add(s), Ei(this)),
          (this._pendingEditorState = r),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          null != s && o.add(s),
          this._updating || Ei(this));
      };
      _proto16.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var r = ji(),
            i = ui,
            o = di,
            s = fi,
            l = e._dirtyElements,
            c = e._dirtyLeaves,
            a = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Set()),
            (e._dirtyType = 0),
            (ui = r),
            (di = !1),
            (fi = e),
            lo(null));
          try {
            var _i53 = e._nodes;
            (Oi(t.root, _i53), n && n(), (r._readOnly = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = c),
              (e._cloneNotNeeded = a),
              (e._dirtyType = u),
              (ui = i),
              (di = o),
              (fi = s));
          }
          return r;
        })("string" == typeof t ? JSON.parse(t) : t, this, e);
      };
      _proto16.read = function read(t) {
        return (Ei(this), this.getEditorState().read(t, { editor: this }));
      };
      _proto16.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : Ii(t, e, n);
        })(this, t, e);
      };
      _proto16.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          Pi(this, function () {
            var r = Qr(),
              i = Ro();
            (null !== r
              ? r.dirty || Ko(r.clone())
              : 0 !== i.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? i.selectStart()
                  : i.selectEnd()),
              cs("focus"),
              as(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto16.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = Ss(this._window);
        null !== e && e.removeAllRanges();
      };
      _proto16.isEditable = function isEditable() {
        return this._editable;
      };
      _proto16.setEditable = function setEditable(t) {
        this._editable !== t &&
          ((this._editable = t), bi("editable", this, !0, t));
      };
      _proto16.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON() };
      };
      return oo;
    })();
    _oo.version = "0.44.0+prod.cjs";
    var so = null;
    function lo(t) {
      so = t;
    }
    var co = 1;
    function ao(e, n) {
      var r = uo(e, n);
      return (void 0 === r && t(30, n), r);
    }
    function uo(t, e) {
      return t._nodes.get(e);
    }
    var fo =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function ho(t) {
      return zi(Io(t));
    }
    function go(t) {
      var e = document.activeElement;
      if (!Ns(e)) return !1;
      var n = e.nodeName;
      return (
        zi(Io(t)) &&
        ("INPUT" === n ||
          "TEXTAREA" === n ||
          ("true" === e.contentEditable && null == mo(e)))
      );
    }
    function _o(t, e, n) {
      var r = t.getRootElement();
      try {
        return (
          null !== r &&
          r.contains(e) &&
          r.contains(n) &&
          null !== e &&
          !go(e) &&
          yo(e) === t
        );
      } catch (t) {
        return !1;
      }
    }
    function po(t) {
      return t instanceof _oo;
    }
    function yo(t) {
      var e = t;
      for (; null != e; ) {
        var _t195 = mo(e);
        if (po(_t195)) return _t195;
        e = ss(e);
      }
      return null;
    }
    function mo(t) {
      return t ? t.__lexicalEditor : null;
    }
    function xo(t) {
      return br(t) || t.isToken();
    }
    function Co(t) {
      return xo(t) || t.isSegmented();
    }
    function So(t) {
      return vs(t) && 3 === t.nodeType;
    }
    function To(t) {
      return vs(t) && 9 === t.nodeType;
    }
    function No(t) {
      var e = t;
      for (; null != e; ) {
        if (So(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function vo(t, e, n) {
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
    function ko(t, e) {
      var n = (function () {
        var t = so;
        return ((so = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (yi(), mi());
      var r = Ci(),
        i = xi(),
        o = "" + co++;
      (i._nodeMap.set(o, t),
        Ki(t) ? r._dirtyElements.set(o, !0) : r._dirtyLeaves.add(o),
        r._cloneNotNeeded.add(o),
        (r._dirtyType = 1),
        (t.__key = o));
    }
    function Oo(t) {
      var e = t.getParent();
      if (null !== e) {
        var _n93 = t.getWritable(),
          _r63 = e.getWritable(),
          _i54 = t.getPreviousSibling(),
          _o26 = t.getNextSibling(),
          _s17 = null !== _o26 ? _o26.__key : null,
          _l11 = null !== _i54 ? _i54.__key : null,
          _c0 = null !== _i54 ? _i54.getWritable() : null,
          _a10 = null !== _o26 ? _o26.getWritable() : null;
        (null === _i54 && (_r63.__first = _s17),
          null === _o26 && (_r63.__last = _l11),
          null !== _c0 && (_c0.__next = _s17),
          null !== _a10 && (_a10.__prev = _l11),
          (_n93.__prev = null),
          (_n93.__next = null),
          (_n93.__parent = null),
          _r63.__size--);
      }
    }
    function Mo(e) {
      (mi(), Yn(e) && t(323, e.__key, e.__type));
      var n = e.getLatest(),
        r = n.__parent,
        i = xi(),
        o = Ci(),
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
      ((o._dirtyType = 1), Ki(e) ? l.set(c, !0) : o._dirtyLeaves.add(c));
    }
    function Eo(t) {
      yi();
      var e = Ci(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t197 = Ao(n);
          null !== _t197 && _t197.getWritable();
        }
        if (null !== t) {
          var _e129 = Ao(t);
          null !== _e129 && _e129.getWritable();
        }
      }
    }
    function bo() {
      if (pi()) return null;
      return Ci()._compositionKey;
    }
    function Ao(t, e) {
      var n = (e || xi())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function wo(t, e) {
      var n = Do(t, Ci());
      return void 0 !== n ? Ao(n, e) : null;
    }
    function Do(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function Io(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t198 = wo(n, e);
        if (null !== _t198) return _t198;
        n = ss(n);
      }
      return null;
    }
    function Po(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function Fo(t) {
      return t.read(function () {
        return Ro().getTextContent();
      });
    }
    function Ro() {
      return Lo(xi());
    }
    function Lo(t) {
      return t._nodeMap.get("root");
    }
    function Ko(t) {
      yi();
      var e = xi();
      (null !== t && ((t.dirty = !0), t.setCachedNodes(null)),
        (e._selection = t));
    }
    function $o(t) {
      var e = Ci(),
        n = (function (t, e) {
          var n = t;
          for (; null != n; ) {
            var _t199 = Do(n, e);
            if (void 0 !== _t199) return _t199;
            n = ss(n);
          }
          return null;
        })(t, e);
      if (null === n) {
        return t === e.getRootElement() ? Ao("root") : null;
      }
      return Ao(n);
    }
    function Bo(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function zo(t) {
      var e = [];
      for (var _n94 = t; null !== _n94; _n94 = _n94._parentEditor) e.push(_n94);
      return e;
    }
    function Wo() {
      return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substring(0, 5);
    }
    function Uo(t) {
      return So(t) ? t.nodeValue : null;
    }
    function Yo(t, e, n) {
      var r = Ss(ds(e));
      if (null === r) return;
      var i = r.anchorNode;
      var o = r.anchorOffset,
        s = r.focusOffset;
      if (null !== i) {
        var _e130 = Uo(i);
        var _r64 = Io(i);
        if (null !== _e130 && kr(_r64)) {
          if ((_e130 === N || _e130 === k) && n) {
            var _t200 = n.length;
            ((_e130 = n), (o = _t200), (s = _t200));
          }
          null !== _e130 && jo(_r64, _e130, o, s, t);
        }
      }
    }
    function jo(t, e, n, r, i) {
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
            if ((Eo(null), a || l || d)) o.remove();
            else {
              var _t202 = Ci();
              setTimeout(function () {
                _t202.update(function () {
                  o.isAttached() && o.remove();
                });
              }, 20);
            }
            return;
          }
          var _e132 = o.getParent(),
            _i55 = Zr(),
            _u11 = o.getTextContentSize(),
            _f9 = bo(),
            _h4 = o.getKey();
          if (
            o.isToken() ||
            (null !== _f9 && _h4 === _f9 && !_s18) ||
            (Fr(_i55) &&
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
          var _g5 = Qr();
          if (!Fr(_g5) || null === n || null === r) return void Jo(o, _c1, _g5);
          if ((_g5.setTextNodeRange(o, n, o, r), o.isSegmented())) {
            var _t203 = vr(o.getTextContent());
            (o.replace(_t203), (o = _t203));
          }
          Jo(o, _c1, _g5);
        }
      }
    }
    function Jo(t, e, n) {
      if ((t.setTextContent(e), Fr(n))) {
        var _e133 = t.getKey();
        var _r65 = !1;
        for (var _i56 of ["anchor", "focus"]) {
          var _o27 = n[_i56];
          "text" === _o27.type &&
            _o27.key === _e133 &&
            ((_o27.offset = ll(t, _o27.offset, "clamp")), (_r65 = !0));
        }
        _r65 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
      }
    }
    function Go(t, e, n) {
      var r = e[n] || !1;
      return "any" === r || r === t[n];
    }
    function Ho(t, e) {
      return (
        Go(t, e, "altKey") &&
        Go(t, e, "ctrlKey") &&
        Go(t, e, "shiftKey") &&
        Go(t, e, "metaKey")
      );
    }
    function Vo(t, e, n) {
      if (!Ho(t, n)) return !1;
      if (t.key.toLowerCase() === e.toLowerCase()) return !0;
      if (e.length > 1) return !1;
      if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
      if (t.code.startsWith("Digit") && /^\d$/.test(e))
        return t.code === "Digit" + e;
      var r = "Key" + e.toUpperCase();
      return t.code === r;
    }
    var qo = { ctrlKey: !i, metaKey: i },
      Xo = { altKey: i, ctrlKey: !i };
    function Qo(t) {
      return "Backspace" === t.key;
    }
    function Zo(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        r = n[e];
      if (void 0 !== r) return r;
      var i = t[e];
      if ("string" == typeof i) {
        var _t204 = $l(i);
        return ((n[e] = _t204), _t204);
      }
      return i;
    }
    function ts(e, n, r, i, o) {
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
    function es(t, e, n) {
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
    function ns(t, e) {
      var n = t.offset;
      if ("element" === t.type) {
        return es(t.getNode(), e, n);
      }
      {
        var _r66 = t.getNode();
        if ((e && 0 === n) || (!e && n === _r66.getTextContentSize())) {
          var _t205 = e ? _r66.getPreviousSibling() : _r66.getNextSibling();
          return null === _t205
            ? es(
                _r66.getParentOrThrow(),
                e,
                _r66.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t205;
        }
      }
      return null;
    }
    function rs(t) {
      var e = ds(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function is(t, e, n) {
      return Ai(t, e, n, t);
    }
    function os(e, n) {
      var r = e._keyToDOMMap.get(n);
      return (void 0 === r && t(75, n), r);
    }
    function ss(t) {
      var e = t.assignedSlot || t.parentElement;
      return ks(e) ? e.host : e;
    }
    function ls(t) {
      return To(t) ? t : Ns(t) ? t.ownerDocument : null;
    }
    function cs(t) {
      yi();
      Ci()._updateTags.add(t);
    }
    function as(t) {
      yi();
      Ci()._deferred.push(t);
    }
    function us(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function fs(t) {
      var e = ls(t);
      return e ? e.defaultView : null;
    }
    function ds(e) {
      var n = e._window;
      return (null === n && t(78), n);
    }
    function hs(t) {
      var e = t.getParentOrThrow();
      for (; null !== e; ) {
        if (gs(e)) return e;
        e = e.getParentOrThrow();
      }
      return e;
    }
    function gs(t) {
      return Ui(t) || (Ki(t) && t.isShadowRoot());
    }
    function _s(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t);
      return (
        ko(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function ps(e) {
      var n = Ci(),
        r = e.getType(),
        i = uo(n, r);
      void 0 === i && t(200, e.constructor.name, r);
      var o = i.replace,
        s = i.replaceWithKlass;
      if (null !== o) {
        var _n95 = o(e),
          _i57 = _n95.constructor;
        return (
          null !== s
            ? _n95 instanceof s ||
              t(
                201,
                s.name,
                s.getType(),
                _i57.name,
                _i57.getType(),
                e.constructor.name,
                r,
              )
            : (_n95 instanceof e.constructor && _i57 !== e.constructor) ||
              t(202, _i57.name, _i57.getType(), e.constructor.name, r),
          _n95.__key === e.__key &&
            t(203, e.constructor.name, r, _i57.name, _i57.getType()),
          _n95
        );
      }
      return e;
    }
    function ys(e, n) {
      !Ui(e.getParent()) || Ki(n) || zi(n) || t(99);
    }
    function ms(e) {
      var n = Ao(e);
      return (null === n && t(63, e), n);
    }
    function xs(t) {
      return (zi(t) || (Ki(t) && !t.canBeEmpty())) && !t.isInline();
    }
    function Cs(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var r = t.parentElement;
      null !== r && r.removeChild(t);
    }
    function Ss(t) {
      return n ? (t || window).getSelection() : null;
    }
    function Ts(t) {
      var e = fs(t);
      return e ? e.getSelection() : null;
    }
    function Ns(t) {
      return vs(t) && 1 === t.nodeType;
    }
    function vs(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function ks(t) {
      return vs(t) && 11 === t.nodeType;
    }
    var Os =
      /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
    function Ms(t) {
      return (
        !(!Ns(t) || !t.style.display.startsWith("inline")) ||
        Os.test(t.nodeName)
      );
    }
    var Es =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function bs(t) {
      return (
        (!Ns(t) || !t.style.display.startsWith("inline")) && Es.test(t.nodeName)
      );
    }
    function As(t) {
      if (zi(t) && !t.isInline()) return !0;
      if (!Ki(t) || gs(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || lr(e) || kr(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function ws() {
      return Ci();
    }
    function Ds(t) {
      if (t === void 0) {
        t = ws();
      }
      return t._config.dom || no;
    }
    var Is = new WeakMap(),
      Ps = new Map();
    function Fs(e) {
      if (!e._readOnly && e.isEmpty()) return Ps;
      e._readOnly || t(192);
      var n = Is.get(e);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref27 of t._nodeMap) {
              var _n96 = _ref27[0];
              var _r67 = _ref27[1];
              {
                var _t206 = _r67.__type;
                var _i58 = e.get(_t206);
                (_i58 || ((_i58 = new Map()), e.set(_t206, _i58)),
                  _i58.set(_n96, _r67));
              }
            }
            return e;
          })(e)),
          Is.set(e, n)),
        n
      );
    }
    function Rs(t) {
      var e = t.constructor.clone(t);
      return (e.afterCloneFrom(t), e);
    }
    function Ls(t, e) {
      var n = parseInt(t.style.paddingInlineStart, 10) || 0,
        r = Math.round(n / 40);
      e.setIndent(r);
    }
    function Ks(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function $s(t, e) {
      var n = e.style.textAlign;
      return n && n in D ? t.setFormat(n) : t;
    }
    function Bs(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function zs(t, e) {
      return (
        (function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        })(t, e) && t[e] !== _Jn5[e]
      );
    }
    function Ws(e) {
      var n = R in e.prototype ? e.prototype[R]() : void 0,
        r = (function (e) {
          if (!(e === _Jn5 || e.prototype instanceof _Jn5)) {
            var _n97 = "<unknown>",
              _r68 = "<unknown>";
            try {
              _n97 = e.getType();
            } catch (t) {}
            try {
              _oo.version && (_r68 = JSON.parse(_oo.version));
            } catch (t) {}
            t(290, e.name, _n97, _r68);
          }
          return e === _Bi || e === _Li4 || e === _Jn5;
        })(e),
        i = !r && zs(e, "getType") ? e.getType() : void 0;
      var o,
        s = i;
      if (n)
        if (i) o = n[i];
        else
          for (var _ref29 of Object.entries(n)) {
            var _t207 = _ref29[0];
            var _e134 = _ref29[1];
            ((s = _t207), (o = _e134));
          }
      if (
        !r &&
        s &&
        (zs(e, "getType") ||
          (e.getType = function () {
            return s;
          }),
        zs(e, "clone") ||
          (e.clone = function (t) {
            return (lo(t), new e());
          }),
        zs(e, "importJSON") ||
          (e.importJSON =
            (o && o.$importJSON) ||
            function (t) {
              return new e().updateFromJSON(t);
            }),
        !zs(e, "importDOM") && o)
      ) {
        var _o28 = o,
          _t208 = _o28.importDOM;
        _t208 &&
          (e.importDOM = function () {
            return _t208;
          });
      }
      return { ownNodeConfig: o, ownNodeType: s };
    }
    var Us = function Us(t, e) {
      var n = t;
      for (; null != n && !Ui(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function Ys(e, n) {
      var r = [];
      var i = e.__first;
      for (; null !== i; ) {
        var _e135 = null === n ? Ao(i) : n.get(i);
        (null == _e135 && t(174), r.push(i), (i = _e135.__next));
      }
      return r;
    }
    var js = { next: "previous", previous: "next" };
    var _Js4 = (function () {
      function Js(t) {
        this.origin = t;
      }
      var _proto17 = Js.prototype;
      _proto17[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return yl({
            hasNext: tl,
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
        return ol(this.getNodeAtCaret(), this.direction);
      };
      _proto17.getSiblingCaret = function getSiblingCaret() {
        return ol(this.origin, this.direction);
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
          var _t209 = o.getAdjacentCaret();
          null !== _t209 && l.size < e;
          _t209 = _t209.getAdjacentCaret()
        ) {
          var _e136 = _t209.origin.getWritable();
          l.set(_e136.getKey(), _e136);
        }
        for (var _e137 of i) {
          if (l.size > 0) {
            var _n98 = o.getNodeAtCaret();
            if (_n98) {
              if (
                (l["delete"](_n98.getKey()),
                l["delete"](_e137.getKey()),
                _n98.is(_e137) || o.origin.is(_e137))
              );
              else {
                var _t210 = _e137.getParent();
                (_t210 && _t210.is(s) && _e137.remove(), _n98.replace(_e137));
              }
            } else null === _n98 && t(263, Array.from(l).join(" "));
          } else o.insert(_e137);
          o = ol(_e137, this.direction);
        }
        for (var _t211 of l.values()) _t211.remove();
        return this;
      };
      return Js;
    })();
    var _Gs3 = (function (_Js) {
      function Gs() {
        var _this5;
        for (
          var _len6 = arguments.length, args = new Array(_len6), _key6 = 0;
          _key6 < _len6;
          _key6++
        ) {
          args[_key6] = arguments[_key6];
        }
        return (
          ((_this5 = _Js.call.apply(_Js, [this].concat(args)) || this),
          (_this5.type = "child"),
          babelHelpers.assertThisInitialized(_this5)) ||
          babelHelpers.assertThisInitialized(_this5)
        );
      }
      babelHelpers.inheritsLoose(Gs, _Js);
      var _proto18 = Gs.prototype;
      _proto18.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : al(t, this.direction);
      };
      _proto18.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return ol(qs(this.getParentAtCaret(), t), this.direction);
      };
      _proto18.getFlipped = function getFlipped() {
        var t = Vs(this.direction);
        return ol(this.getNodeAtCaret(), t) || al(this.origin, t);
      };
      _proto18.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto18.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto18.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof Gs &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto18.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return Gs;
    })(_Js4);
    var Hs = { root: Ui, shadowRoot: gs };
    function Vs(t) {
      return js[t];
    }
    function qs(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return Hs[e](t) ? null : t;
    }
    var _Xs3 = (function (_Js2) {
      function Xs() {
        var _this6;
        for (
          var _len7 = arguments.length, args = new Array(_len7), _key7 = 0;
          _key7 < _len7;
          _key7++
        ) {
          args[_key7] = arguments[_key7];
        }
        return (
          ((_this6 = _Js2.call.apply(_Js2, [this].concat(args)) || this),
          (_this6.type = "sibling"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(Xs, _Js2);
      var _proto19 = Xs.prototype;
      _proto19.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : ol(t, this.direction);
      };
      _proto19.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto19.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto19.getChildCaret = function getChildCaret() {
        return Ki(this.origin) ? al(this.origin, this.direction) : null;
      };
      _proto19.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return ol(qs(this.getParentAtCaret(), t), this.direction);
      };
      _proto19.getFlipped = function getFlipped() {
        var t = Vs(this.direction);
        return (
          ol(this.getNodeAtCaret(), t) || al(this.origin.getParentOrThrow(), t)
        );
      };
      _proto19.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Xs &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto19.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof Xs || t instanceof _Qs3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return Xs;
    })(_Js4);
    var _Qs3 = (function (_Js3) {
      function Qs(t, e) {
        var _this7;
        ((_this7 = _Js3.call(this, t) || this),
          (_this7.type = "text"),
          (_this7.offset = e));
        return _this7;
      }
      babelHelpers.inheritsLoose(Qs, _Js3);
      var _proto20 = Qs.prototype;
      _proto20.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : sl(t, this.direction, this.offset);
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
        return ol(qs(this.getParentAtCaret(), t), this.direction);
      };
      _proto20.getFlipped = function getFlipped() {
        return sl(this.origin, Vs(this.direction), this.offset);
      };
      _proto20.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Qs &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto20.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _Xs3 || t instanceof Qs) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto20.getSiblingCaret = function getSiblingCaret() {
        return ol(this.origin, this.direction);
      };
      return Qs;
    })(_Js4);
    function Zs(t) {
      return t instanceof _Qs3;
    }
    function tl(t) {
      return t instanceof _Xs3;
    }
    function el(t) {
      return t instanceof _Gs3;
    }
    var nl = {
        next: (function (_Qs) {
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
              ((_this8 = _Qs.call.apply(_Qs, [this].concat(args)) || this),
              (_this8.direction = "next"),
              babelHelpers.assertThisInitialized(_this8)) ||
              babelHelpers.assertThisInitialized(_this8)
            );
          }
          babelHelpers.inheritsLoose(_class, _Qs);
          var _proto21 = _class.prototype;
          _proto21.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto21.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_Qs3),
        previous: (function (_Qs2) {
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
              ((_this9 = _Qs2.call.apply(_Qs2, [this].concat(args)) || this),
              (_this9.direction = "previous"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class3, _Qs2);
          var _proto22 = _class3.prototype;
          _proto22.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto22.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_Qs3),
      },
      rl = {
        next: (function (_Xs) {
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
              ((_this0 = _Xs.call.apply(_Xs, [this].concat(args)) || this),
              (_this0.direction = "next"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class5, _Xs);
          var _proto23 = _class5.prototype;
          _proto23.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto23.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_Xs3),
        previous: (function (_Xs2) {
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
              ((_this1 = _Xs2.call.apply(_Xs2, [this].concat(args)) || this),
              (_this1.direction = "previous"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class7, _Xs2);
          var _proto24 = _class7.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_Xs3),
      },
      il = {
        next: (function (_Gs) {
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
              ((_this10 = _Gs.call.apply(_Gs, [this].concat(args)) || this),
              (_this10.direction = "next"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class9, _Gs);
          var _proto25 = _class9.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_Gs3),
        previous: (function (_Gs2) {
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
              ((_this11 = _Gs2.call.apply(_Gs2, [this].concat(args)) || this),
              (_this11.direction = "previous"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class1, _Gs2);
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
        })(_Gs3),
      };
    function ol(t, e) {
      return t ? new rl[e](t) : null;
    }
    function sl(t, e, n) {
      return t ? new nl[e](t, ll(t, n)) : null;
    }
    function ll(t, n, r) {
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
    function cl(t, e) {
      return new _hl(t, e);
    }
    function al(t, e) {
      return Ki(t) ? new il[e](t) : null;
    }
    function ul(t) {
      return (t && t.getChildCaret()) || t;
    }
    function fl(t) {
      return t && ul(t.getAdjacentCaret());
    }
    var _dl = (function () {
      function dl(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto27 = dl.prototype;
      _proto27.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new dl(t, e, this.direction);
      };
      _proto27.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto27.getTextSlices = function getTextSlices() {
        var _this14 = this;
        var t = function t(_t212) {
            var e = _this14[_t212].getLatest();
            return Zs(e)
              ? (function (t, e) {
                  var n = t.direction,
                    r = t.origin,
                    i = ll(r, "focus" === e ? Vs(n) : n);
                  return cl(t, i - t.offset);
                })(e, _t212)
              : null;
          },
          e = t("anchor"),
          n = t("focus");
        if (e && n) {
          var _t213 = e.caret,
            _r69 = n.caret;
          if (_t213.isSameNodeCaret(_r69))
            return [cl(_t213, _r69.offset - _t213.offset), null];
        }
        return [e, n];
      };
      _proto27.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = Zs(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          r = Zs(n),
          i = function i(e) {
            return e.isSameNodeCaret(n) ? null : fl(e) || e.getParentCaret(t);
          };
        return yl({
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
      return dl;
    })();
    var _hl = (function () {
      function hl(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto28 = hl.prototype;
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
        return sl(t.setTextContent(i.slice(0, n) + i.slice(r)), e, n);
      };
      return hl;
    })();
    function gl(t) {
      return pl(t, ol(Ro(), t.direction));
    }
    function _l(t) {
      return pl(t, t);
    }
    function pl(e, n) {
      return (
        e.direction !== n.direction && t(265),
        new _dl(e, n, e.direction)
      );
    }
    function yl(t) {
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
    function ml(e, n) {
      var r = Tl(e.origin, n.origin);
      switch (
        (null === r && t(275, e.origin.getKey(), n.origin.getKey()), r.type)
      ) {
        case "same": {
          var _t214 = "text" === e.type,
            _r70 = "text" === n.type;
          return _t214 && _r70
            ? (function (t, e) {
                return Math.sign(t - e);
              })(e.offset, n.offset)
            : e.type === n.type
              ? 0
              : _t214
                ? -1
                : _r70
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
          return xl(r);
      }
    }
    function xl(t) {
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
    function Cl(t, e) {
      return e.is(t);
    }
    function Sl(t) {
      return Ki(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function Tl(e, n) {
      if (e.is(n)) return { commonAncestor: e, type: "same" };
      var r = new Map();
      for (
        var _Sl = Sl(e), _t215 = _Sl[0], _n99 = _Sl[1];
        _t215;
        _n99 = _t215, _t215 = _t215.getParent()
      )
        r.set(_t215, _n99);
      for (
        var _Sl2 = Sl(n), _i59 = _Sl2[0], _o29 = _Sl2[1];
        _i59;
        _o29 = _i59, _i59 = _i59.getParent()
      ) {
        var _s19 = r.get(_i59);
        if (void 0 !== _s19)
          return null === _s19
            ? (Cl(e, _i59) || t(276),
              { commonAncestor: _i59, type: "ancestor" })
            : null === _o29
              ? (Cl(n, _i59) || t(277),
                { commonAncestor: _i59, type: "descendant" })
              : (((Ki(_s19) || Cl(e, _s19)) &&
                  (Ki(_o29) || Cl(n, _o29)) &&
                  _i59.is(_s19.getParent()) &&
                  _i59.is(_o29.getParent())) ||
                  t(278),
                { a: _s19, b: _o29, commonAncestor: _i59, type: "branch" });
      }
      return null;
    }
    function Nl(e, n) {
      var r = e.type,
        i = e.key,
        o = e.offset,
        s = ms(e.key);
      return "text" === r
        ? (kr(s) || t(266, s.getType(), i), sl(s, n, o))
        : (Ki(s) || t(267, s.getType(), i), Rl(s, e.offset, n));
    }
    function vl(e, n) {
      var r = n.origin,
        i = n.direction,
        o = "next" === i;
      Zs(n)
        ? e.set(r.getKey(), n.offset, "text")
        : tl(n)
          ? kr(r)
            ? e.set(r.getKey(), ll(r, i), "text")
            : e.set(
                r.getParentOrThrow().getKey(),
                r.getIndexWithinParent() + (o ? 1 : 0),
                "element",
              )
          : ((el(n) && Ki(r)) || t(268),
            e.set(r.getKey(), o ? 0 : r.getChildrenSize(), "element"));
    }
    function kl(t) {
      var e = Qr(),
        n = Fr(e) ? e : Vr();
      return (Ol(n, t), Ko(n), n);
    }
    function Ol(t, e) {
      (vl(t.anchor, e.anchor), vl(t.focus, e.focus));
    }
    function Ml(t) {
      var e = t.anchor,
        n = t.focus,
        r = Nl(e, "next"),
        i = Nl(n, "next"),
        o = ml(r, i) <= 0 ? "next" : "previous";
      return pl(Pl(r, o), Pl(i, o));
    }
    function El(t) {
      var e = t.direction,
        n = t.origin,
        r = ol(n, Vs(e)).getNodeAtCaret();
      return r ? ol(r, e) : al(n.getParentOrThrow(), e);
    }
    function bl(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _r71 = el(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _r71;
        _r71 = _r71.getParentCaret(e)
      )
        n.push(El(_r71));
      return n;
    }
    function Al(t) {
      return !!t && t.origin.isAttached();
    }
    function wl(e, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (e.isCollapsed()) return e;
      var r = "root",
        i = "next";
      var o = n;
      var s = Fl(e, i),
        l = bl(s.anchor, r),
        c = bl(s.focus.getFlipped(), r),
        a = new Set(),
        u = [];
      for (var _t216 of s.iterNodeCarets(r))
        if (el(_t216)) a.add(_t216.origin.getKey());
        else if (tl(_t216)) {
          var _e138 = _t216.origin;
          (Ki(_e138) && !a.has(_e138.getKey())) || u.push(_e138);
        }
      for (var _t217 of u) _t217.remove();
      for (var _t218 of s.getTextSlices()) {
        if (!_t218) continue;
        var _e139 = _t218.caret.origin,
          _n100 = _e139.getTextContentSize(),
          _r72 = El(ol(_e139, i)),
          _s20 = _e139.getMode();
        if (
          (Math.abs(_t218.distance) === _n100 && "removeEmptySlices" === o) ||
          ("token" === _s20 && 0 !== _t218.distance)
        )
          _r72.remove();
        else if (0 !== _t218.distance) {
          o = "removeEmptySlices";
          var _e140 = _t218.removeTextSlice();
          var _n101 = _t218.caret.origin;
          if ("segmented" === _s20) {
            var _t219 = _e140.origin,
              _n102 = vr(_t219.getTextContent())
                .setStyle(_t219.getStyle())
                .setFormat(_t219.getFormat());
            (_r72.replaceOrInsert(_n102), (_e140 = sl(_n102, i, _e140.offset)));
          }
          (_n101.is(l[0].origin) && (l[0] = _e140),
            _n101.is(c[0].origin) && (c[0] = _e140.getFlipped()));
        }
      }
      var f, d;
      for (var _t220 of l)
        if (Al(_t220)) {
          f = Dl(_t220);
          break;
        }
      for (var _t221 of c)
        if (Al(_t221)) {
          d = Dl(_t221);
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
            for (var _r73 = c; _r73 < t.length; _r73++) {
              var _i60 = t[_r73];
              if (gs(_i60)) return;
              !n && e(_i60) && (n = _i60);
            }
            return n;
          },
          u = a(o, As),
          f =
            u &&
            a(s, function (t) {
              return n.has(t.getKey()) && As(t);
            });
        return u && f ? [u, f] : null;
      })(f, d, a);
      if (h) {
        var _t222 = h[0],
          _e141 = h[1];
        al(_t222, "previous").splice(0, _e141.getChildren());
        var _n103 = _e141.getParent();
        for (_e141.remove(!0); _n103 && _n103.isEmpty(); ) {
          var _t223 = _n103;
          ((_n103 = _n103.getParent()), _t223.remove(!0));
        }
      }
      var g = [f, d].concat(l, c).find(Al);
      if (g) {
        return _l(Pl(Dl(g), e.direction));
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
    function Dl(t) {
      var e = (function (t) {
          var e = t;
          for (; el(e); ) {
            var _t224 = fl(e);
            if (!el(_t224)) break;
            e = _t224;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (kr(e.origin)) return Zs(e) ? e : sl(e.origin, n, n);
      var r = e.getAdjacentCaret();
      return tl(r) && kr(r.origin) ? sl(r.origin, n, Vs(n)) : e;
    }
    function Il(t) {
      return Zs(t) && t.offset !== ll(t.origin, t.direction);
    }
    function Pl(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function Fl(t, e) {
      return t.direction === e ? t : pl(Pl(t.focus, e), Pl(t.anchor, e));
    }
    function Rl(t, e, n) {
      var r = al(t, "next");
      for (var _t225 = 0; _t225 < e; _t225++) {
        var _t226 = r.getAdjacentCaret();
        if (null === _t226) break;
        r = _t226;
      }
      return Pl(r, n);
    }
    function Ll(e) {
      var n = e.origin,
        r = e.offset,
        i = e.direction;
      if (r === ll(n, i)) return e.getSiblingCaret();
      if (r === ll(n, Vs(i))) return El(e.getSiblingCaret());
      var _n$splitText2 = n.splitText(r),
        o = _n$splitText2[0];
      return (kr(o) || t(281), Pl(ol(o, "next"), i));
    }
    function Kl(t, e) {
      return !0;
    }
    function $l() {
      var e = [];
      for (
        var _len12 = arguments.length, t = new Array(_len12), _key12 = 0;
        _key12 < _len12;
        _key12++
      ) {
        t[_key12] = arguments[_key12];
      }
      for (var _n104 of t)
        if (_n104 && "string" == typeof _n104)
          for (var _ref32 of _n104.matchAll(/\S+/g)) {
            var _t227 = _ref32[0];
            e.push(_t227);
          }
      return e;
    }
    function Bl() {
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
    ((exports.$addUpdateTag = cs),
      (exports.$applyNodeReplacement = ps),
      (exports.$caretFromPoint = Nl),
      (exports.$caretRangeFromSelection = Ml),
      (exports.$cloneWithProperties = Rs),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = Rs(t))[Un] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = ml),
      (exports.$copyNode = _s),
      (exports.$create = function (t) {
        var e = ws();
        return (
          yi(),
          new (e.resolveRegisteredNodeAfterReplacements(
            e.getRegisteredNode(t),
          ).klass)()
        );
      }),
      (exports.$createChildrenArray = Ys),
      (exports.$createLineBreakNode = sr),
      (exports.$createNodeSelection = qr),
      (exports.$createParagraphNode = Xi),
      (exports.$createPoint = wr),
      (exports.$createRangeSelection = Vr),
      (exports.$createRangeSelectionFromDom = function (t, e) {
        return Xr(null, t, e, null);
      }),
      (exports.$createTabNode = Er),
      (exports.$createTextNode = vr),
      (exports.$extendCaretToRange = gl),
      (exports.$findMatchingParent = Us),
      (exports.$getAdjacentChildCaret = fl),
      (exports.$getAdjacentNode = ns),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          r = t,
          i = fl(r);
        for (; null === i; ) {
          if ((n--, (i = r.getParentCaret(e)), !i)) return null;
          ((r = i), (i = fl(r)));
        }
        return i && [i, n];
      }),
      (exports.$getCaretInDirection = Pl),
      (exports.$getCaretRange = pl),
      (exports.$getCaretRangeInDirection = Fl),
      (exports.$getCharacterOffsets = $r),
      (exports.$getChildCaret = al),
      (exports.$getChildCaretAtIndex = Rl),
      (exports.$getChildCaretOrSelf = ul),
      (exports.$getCollapsedCaretRange = _l),
      (exports.$getCommonAncestor = Tl),
      (exports.$getCommonAncestorResultBranchOrder = xl),
      (exports.$getEditor = ws),
      (exports.$getEditorDOMRenderConfig = Ds),
      (exports.$getNearestNodeFromDOMNode = Io),
      (exports.$getNearestRootOrShadowRoot = hs),
      (exports.$getNodeByKey = Ao),
      (exports.$getNodeByKeyOrThrow = ms),
      (exports.$getNodeFromDOMNode = wo),
      (exports.$getPreviousSelection = Zr),
      (exports.$getRoot = Ro),
      (exports.$getSelection = Qr),
      (exports.$getSiblingCaret = ol),
      (exports.$getState = Z),
      (exports.$getStateChange = function (t, e, n) {
        var r = Z(t, n, "direct"),
          i = Z(e, n, "direct");
        return n.isEqual(r, i) ? null : [r, i];
      }),
      (exports.$getTextContent = function () {
        var t = Qr();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = ll),
      (exports.$getTextPointCaret = sl),
      (exports.$getTextPointCaretSlice = cl),
      (exports.$getWritableNodeState = nt),
      (exports.$hasAncestor = us),
      (exports.$hasUpdateTag = function (t) {
        return Ci()._updateTags.has(t);
      }),
      (exports.$insertNodes = function (t) {
        var e = Qr() || Zr();
        (null === e && (e = Ro().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = Gr),
      (exports.$isChildCaret = el),
      (exports.$isDecoratorNode = zi),
      (exports.$isEditorState = function (t) {
        return t instanceof _Gi;
      }),
      (exports.$isElementNode = Ki),
      (exports.$isExtendableTextPointCaret = Il),
      (exports.$isInlineElementOrDecoratorNode = function (t) {
        return (Ki(t) && t.isInline()) || (zi(t) && t.isInline());
      }),
      (exports.$isLeafNode = function (t) {
        return kr(t) || lr(t) || zi(t);
      }),
      (exports.$isLexicalNode = function (t) {
        return t instanceof _Jn5;
      }),
      (exports.$isLineBreakNode = lr),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _Js4;
      }),
      (exports.$isNodeSelection = Lr),
      (exports.$isParagraphNode = Qi),
      (exports.$isRangeSelection = Fr),
      (exports.$isRootNode = Ui),
      (exports.$isRootOrShadowRoot = gs),
      (exports.$isSiblingCaret = tl),
      (exports.$isTabNode = br),
      (exports.$isTextNode = kr),
      (exports.$isTextPointCaret = Zs),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _hl;
      }),
      (exports.$isTokenOrSegmented = Co),
      (exports.$isTokenOrTab = xo),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = xi();
        if (n._readOnly) {
          var _t228 = Fs(n).get(e);
          return _t228 ? Array.from(_t228.values()) : [];
        }
        var r = n._nodeMap,
          i = [];
        for (var _ref34 of r) {
          var _n105 = _ref34[1];
          _n105 instanceof t &&
            _n105.__type === e &&
            _n105.isAttached() &&
            i.push(_n105);
        }
        return i;
      }),
      (exports.$normalizeCaret = Dl),
      (exports.$normalizeSelection__EXPERIMENTAL = dt),
      (exports.$onUpdate = as),
      (exports.$parseSerializedNode = function (t) {
        return Oi(t, Ci()._nodes);
      }),
      (exports.$removeTextFromCaretRange = wl),
      (exports.$rewindSiblingCaret = El),
      (exports.$selectAll = function (t) {
        var e = Ro();
        if (Fr(t)) {
          var _e143 = t.anchor,
            _n106 = t.focus,
            _r74 = _e143
              .getNode()
              .getTopLevelElementOrThrow()
              .getParentOrThrow();
          return (
            _e143.set(_r74.getKey(), 0, "element"),
            _n106.set(_r74.getKey(), _r74.getChildrenSize(), "element"),
            dt(t),
            t
          );
        }
        {
          var _t229 = e.select(0, e.getChildrenSize());
          return (Ko(dt(_t229)), _t229);
        }
      }),
      (exports.$setCompositionKey = Eo),
      (exports.$setDirectionFromDOM = Ks),
      (exports.$setFormatFromDOM = $s),
      (exports.$setPointFromCaret = vl),
      (exports.$setSelection = Ko),
      (exports.$setSelectionFromCaretRange = kl),
      (exports.$setState = function (t, e, n) {
        var r;
        if ((yi(), "function" == typeof n)) {
          var _i61 = t.getLatest(),
            _o30 = Z(_i61, e);
          if (((r = n(_o30)), e.isEqual(_o30, r))) return _i61;
        } else r = n;
        var i = t.getWritable();
        return (nt(i).updateFromKnown(e, r), i);
      }),
      (exports.$splitAtPointCaretNext = function (t, _temp) {
        var _ref35 = _temp === void 0 ? {} : _temp,
          _ref35$$copyElementNo = _ref35.$copyElementNode,
          e = _ref35$$copyElementNo === void 0 ? _s : _ref35$$copyElementNo,
          _ref35$$splitTextPoin = _ref35.$splitTextPointCaretNext,
          n = _ref35$$splitTextPoin === void 0 ? Ll : _ref35$$splitTextPoin,
          _ref35$rootMode = _ref35.rootMode,
          r = _ref35$rootMode === void 0 ? "shadowRoot" : _ref35$rootMode,
          _ref35$$shouldSplit = _ref35.$shouldSplit,
          i = _ref35$$shouldSplit === void 0 ? Kl : _ref35$$shouldSplit,
          _ref35$removeEmptyDes = _ref35.removeEmptyDestination,
          o = _ref35$removeEmptyDes === void 0 ? !1 : _ref35$removeEmptyDes;
        if (Zs(t)) return n(t);
        var s = t.getParentCaret(r);
        if (s) {
          var _n107 = s.origin;
          if (el(t)) {
            var _t230 = El(s);
            if (o && _n107.isEmpty()) return (_n107.remove(), _t230);
            if (!_n107.canBeEmpty() || !i(_n107, "first")) return _t230;
          }
          var _r75 = (function (t) {
            var e = [];
            for (
              var _n108 = t.getAdjacentCaret();
              _n108;
              _n108 = _n108.getAdjacentCaret()
            )
              e.push(_n108.origin);
            return e;
          })(t);
          (_r75.length > 0 || (!o && _n107.canBeEmpty() && i(_n107, "last"))) &&
            s.insert(e(_n107).splice(0, 0, _r75));
        }
        return s;
      }),
      (exports.$splitNode = function (e, n) {
        var r = e.getChildAtIndex(n);
        (null == r && (r = e), gs(e) && t(102));
        var _i64 = function i(e) {
            var n = e.getParentOrThrow(),
              o = gs(n),
              s = e !== r || o ? _s(e) : e;
            if (o)
              return ((Ki(e) && Ki(s)) || t(133), e.insertAfter(s), [e, s, s]);
            {
              var _i63 = _i64(n),
                _t231 = _i63[0],
                _r76 = _i63[1],
                _o31 = _i63[2],
                _l12 = e.getNextSiblings();
              return (
                _o31.append.apply(_o31, [s].concat(_l12)),
                [_t231, _r76, s]
              );
            }
          },
          _i62 = _i64(r),
          o = _i62[0],
          s = _i62[1];
        return [o, s];
      }),
      (exports.$updateRangeSelectionFromCaretRange = Ol),
      (exports.ArtificialNode__DO_NOT_USE = _Hi),
      (exports.BEFORE_INPUT_COMMAND = ae),
      (exports.BLUR_COMMAND = Ze),
      (exports.CAN_REDO_COMMAND = qe),
      (exports.CAN_UNDO_COMMAND = Xe),
      (exports.CLEAR_EDITOR_COMMAND = He),
      (exports.CLEAR_HISTORY_COMMAND = Ve),
      (exports.CLICK_COMMAND = ce),
      (exports.COLLABORATION_TAG = Hn),
      (exports.COMMAND_PRIORITY_BEFORE_CRITICAL = -4),
      (exports.COMMAND_PRIORITY_BEFORE_EDITOR = -8),
      (exports.COMMAND_PRIORITY_BEFORE_HIGH = -5),
      (exports.COMMAND_PRIORITY_BEFORE_LOW = -7),
      (exports.COMMAND_PRIORITY_BEFORE_NORMAL = -6),
      (exports.COMMAND_PRIORITY_CRITICAL = 4),
      (exports.COMMAND_PRIORITY_EDITOR = Zi),
      (exports.COMMAND_PRIORITY_HIGH = 3),
      (exports.COMMAND_PRIORITY_LOW = 1),
      (exports.COMMAND_PRIORITY_NORMAL = 2),
      (exports.COMPOSITION_END_COMMAND = de),
      (exports.COMPOSITION_END_TAG = Zn),
      (exports.COMPOSITION_START_COMMAND = fe),
      (exports.COMPOSITION_START_TAG = Qn),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = pe),
      (exports.COPY_COMMAND = je),
      (exports.CUT_COMMAND = Je),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = no),
      (exports.DELETE_CHARACTER_COMMAND = he),
      (exports.DELETE_LINE_COMMAND = Ce),
      (exports.DELETE_WORD_COMMAND = xe),
      (exports.DRAGEND_COMMAND = Ye),
      (exports.DRAGOVER_COMMAND = Ue),
      (exports.DRAGSTART_COMMAND = We),
      (exports.DROP_COMMAND = Be),
      (exports.DecoratorNode = _Bi),
      (exports.ElementNode = _Li4),
      (exports.FOCUS_COMMAND = Qe),
      (exports.FORMAT_ELEMENT_COMMAND = ze),
      (exports.FORMAT_TEXT_COMMAND = Se),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = Gn),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = Ke),
      (exports.INPUT_COMMAND = ue),
      (exports.INSERT_LINE_BREAK_COMMAND = ge),
      (exports.INSERT_PARAGRAPH_COMMAND = _e),
      (exports.INSERT_TAB_COMMAND = Le),
      (exports.INTERNAL_$isBlock = As),
      (exports.IS_ALL_FORMATTING = 2047),
      (exports.IS_BOLD = 1),
      (exports.IS_CODE = 16),
      (exports.IS_HIGHLIGHT = p),
      (exports.IS_ITALIC = 2),
      (exports.IS_STRIKETHROUGH = 4),
      (exports.IS_SUBSCRIPT = 32),
      (exports.IS_SUPERSCRIPT = 64),
      (exports.IS_UNDERLINE = 8),
      (exports.KEY_ARROW_DOWN_COMMAND = Ae),
      (exports.KEY_ARROW_LEFT_COMMAND = Me),
      (exports.KEY_ARROW_RIGHT_COMMAND = ke),
      (exports.KEY_ARROW_UP_COMMAND = be),
      (exports.KEY_BACKSPACE_COMMAND = Ie),
      (exports.KEY_DELETE_COMMAND = Fe),
      (exports.KEY_DOWN_COMMAND = ve),
      (exports.KEY_ENTER_COMMAND = we),
      (exports.KEY_ESCAPE_COMMAND = Pe),
      (exports.KEY_MODIFIER_COMMAND = tn),
      (exports.KEY_SPACE_COMMAND = De),
      (exports.KEY_TAB_COMMAND = Re),
      (exports.LineBreakNode = _ir),
      (exports.MOVE_TO_END = Oe),
      (exports.MOVE_TO_START = Ee),
      (exports.NODE_STATE_KEY = "$"),
      (exports.OUTDENT_CONTENT_COMMAND = $e),
      (exports.PASTE_COMMAND = ye),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _Vi),
      (exports.REDO_COMMAND = Ne),
      (exports.REMOVE_TEXT_COMMAND = me),
      (exports.RootNode = _Wi),
      (exports.SELECTION_CHANGE_COMMAND = se),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = le),
      (exports.SELECT_ALL_COMMAND = Ge),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = qn),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = Vn),
      (exports.SKIP_SELECTION_FOCUS_TAG = Xn),
      (exports.TEXT_TYPE_TO_FORMAT = A),
      (exports.TabNode = _Mr),
      (exports.TextNode = _r79),
      (exports.UNDO_COMMAND = Te),
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
        var n = $l.apply(void 0, e);
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
      (exports.createCommand = oe),
      (exports.createEditor = function (t) {
        var e = t || {},
          n = Ti(),
          r = e.theme || {},
          i = void 0 === t ? n : e.parentEditor || null,
          o = e.disableEvents || !1,
          s = ji(),
          l = e.namespace || (null !== i ? i._config.namespace : Wo()),
          c = e.editorState,
          a = [_Wi, _r79, _ir, _Mr, _Vi, _Hi].concat(e.nodes || []),
          u = e.onError,
          f = e.html,
          d = void 0 === e.editable || e.editable;
        var h;
        if (void 0 === t && null !== n) h = n._nodes;
        else {
          h = new Map();
          for (var _t232 = 0; _t232 < a.length; _t232++) {
            var _e144 = a[_t232],
              _n109 = null,
              _r77 = null;
            if ("function" != typeof _e144) {
              var _t233 = _e144;
              ((_e144 = _t233.replace),
                (_n109 = _t233["with"]),
                (_r77 = _t233.withKlass || null));
            }
            Ws(_e144);
            var _i65 = _e144.getType(),
              _o32 = eo(_e144);
            h.set(_i65, {
              exportDOM: f && f["export"] ? f["export"].get(_e144) : void 0,
              klass: _e144,
              replace: _n109,
              replaceWithKlass: _r77,
              sharedNodeState: tt(a[_t232]),
              transforms: _o32,
            });
          }
        }
        var g = new _oo(
          s,
          i,
          h,
          {
            disableEvents: o,
            dom: babelHelpers["extends"]({}, no, t && t.dom),
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
            (t.registerCommand(ae, bn, Zi),
              t.registerCommand(ue, An, Zi),
              t.registerCommand(fe, wn, Zi),
              t.registerCommand(de, Dn, Zi),
              t.registerCommand(ve, Pn, Zi));
          })(g),
          g
        );
      }),
      (exports.createSharedNodeState = tt),
      (exports.createState = function (t, e) {
        return new Q(t, e);
      }),
      (exports.declarePeerDependency = function (t, e) {
        return [t, e];
      }),
      (exports.defineExtension = function (t) {
        return t;
      }),
      (exports.flipDirection = Vs),
      (exports.getDOMOwnerDocument = ls),
      (exports.getDOMSelection = Ss),
      (exports.getDOMSelectionFromTarget = Ts),
      (exports.getDOMTextNode = No),
      (exports.getEditorPropertyFromDOMNode = mo),
      (exports.getNearestEditorFromDOMNode = yo),
      (exports.getRegisteredNode = uo),
      (exports.getRegisteredNodeOrThrow = ao),
      (exports.getStaticNodeConfig = Ws),
      (exports.getStyleObjectFromCSS = er),
      (exports.getTextDirection = function (t) {
        return E.test(t) ? "rtl" : b.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = eo),
      (exports.isBlockDomNode = bs),
      (exports.isCurrentlyReadOnlyMode = pi),
      (exports.isDOMDocumentNode = To),
      (exports.isDOMNode = vs),
      (exports.isDOMTextNode = So),
      (exports.isDOMUnmanaged = Bs),
      (exports.isDocumentFragment = ks),
      (exports.isExactShortcutMatch = Vo),
      (exports.isHTMLAnchorElement = function (t) {
        return Ns(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = Ns),
      (exports.isInlineDomNode = Ms),
      (exports.isLexicalEditor = po),
      (exports.isModifierMatch = Ho),
      (exports.isSelectionCapturedInDecoratorInput = go),
      (exports.isSelectionWithinEditor = _o),
      (exports.makeStepwiseIterator = yl),
      (exports.mergeRegister = Bl),
      (exports.normalizeClassNames = $l),
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
        var n = $l.apply(void 0, e);
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(_t$classList3, n);
      }),
      (exports.removeFromParent = Oo),
      (exports.resetRandomKey = function () {
        co = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = rr),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n110 in e) {
          var _r78 = e[_n110];
          null == _r78 ? t.removeProperty(_n110) : nr(t, _n110, _r78);
        }
      }),
      (exports.setDOMUnmanaged = function (t) {
        t.__lexicalUnmanaged = !0;
      }),
      (exports.setNodeIndentFromDOM = Ls),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n111 in e)
          if (t[_n111] !== e[_n111]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.toggleTextFormatType = vo));
  },
  null,
);
