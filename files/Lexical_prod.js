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
      d = n && c && u,
      f = n && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && o && !u,
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
      T = a || l || f ? "\xa0" : "\u200b",
      v = "\n\n",
      O = i ? "\xa0" : T,
      k = "\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc",
      E =
        "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff",
      M = new RegExp("^[^" + E + "]*[" + k + "]"),
      b = new RegExp("^[^" + k + "]*[" + E + "]"),
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
    var B = null;
    function K(t, e) {
      if (e === void 0) {
        e = 1e3;
      }
      return t instanceof _$
        ? t.clone()
        : t.size < e
          ? new Map(t)
          : new _$().init(new Map(t), void 0, t.size);
    }
    var _$ = (function () {
      function $() {
        this._mutable = !1;
        this._old = void 0;
        this._nursery = void 0;
        this._size = 0;
      }
      var _proto2 = $.prototype;
      _proto2.clone = function clone() {
        return (
          (this._mutable = !1),
          new $().init(this._old, this._nursery, this._size)
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
        return e === B ? void 0 : e;
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
            _n2 !== B ? _t4.set(_e3, _n2) : _t4["delete"](_e3);
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
          (n !== B && void 0 !== n) ||
            (this._size++, n === B && r["delete"](t)),
          r.set(t, e),
          this
        );
      };
      _proto2["delete"] = function _delete(t) {
        var e = this.has(t);
        return (e && (this.getNursery().set(t, B), this._size--), e);
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
            _r2 !== B && (void 0 !== _r2 && (_n3[1] = _r2), yield _n3);
          }
        if (t)
          for (var _n4 of t)
            _n4[1] === B || (e && e.has(_n4[0])) || (yield _n4);
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
      return babelHelpers.createClass($, [
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
    function z(t, e, n, r, o, i) {
      var s = t.getFirstChild();
      for (; null !== s; ) {
        var _t7 = s.__key;
        (s.__parent === e &&
          (Eo(s) && z(s, _t7, n, r, o, i),
          n.has(_t7) || i["delete"](_t7),
          o.push(_t7)),
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
        o = e.__lexicalLineBreak;
      return (
        (o && (t === o || (r && t.previousSibling === o))) ||
        (r && void 0 !== Ci(t, n))
      );
    }
    function J(t, e, n) {
      var r = as(ts(n));
      var o = null,
        i = null;
      null !== r &&
        r.anchorNode === t &&
        ((o = r.anchorOffset), (i = r.focusOffset));
      var s = t.nodeValue;
      null !== s && Pi(e, s, o, i, !1);
    }
    function G(t, e, n) {
      if (Tr(t)) {
        var _e6 = t.anchor.getNode();
        if (_e6.is(n) && t.format !== _e6.getFormat()) return !1;
      }
      return ai(e) && n.isAttached();
    }
    function H(t, e, n, r) {
      for (var _o2 = t; _o2 && !Ms(_o2); _o2 = Hi(_o2)) {
        var _t8 = Ci(_o2, e);
        if (void 0 !== _t8) {
          var _e7 = mi(_t8, n);
          if (_e7) return Ao(_e7) || !ds(_o2) ? void 0 : [_o2, _e7];
        } else if (_o2 === r) return [r, Oi(n)];
      }
    }
    function V(t, e, n) {
      W = !0;
      var r = performance.now() - U > 100;
      try {
        To(t, function () {
          var o =
              $r() ||
              (function (t) {
                return t.getEditorState().read(function () {
                  var t = $r();
                  return null !== t ? t.clone() : null;
                });
              })(t),
            s = new Map(),
            l = t.getRootElement(),
            c = t._editorState,
            a = t._blockCursorElement;
          var u = !1,
            d = "";
          for (var _n6 = 0; _n6 < e.length; _n6++) {
            var _f = e[_n6],
              _h = _f.type,
              _g = _f.target,
              _2 = H(_g, t, c, l);
            if (!_2) continue;
            var _p = _2[0],
              _y = _2[1];
            if ("characterData" === _h)
              r && hr(_y) && ai(_g) && G(o, _g, _y) && J(_g, _y, t);
            else if ("childList" === _h) {
              u = !0;
              var _e8 = _f.addedNodes;
              for (var _n7 = 0; _n7 < _e8.length; _n7++) {
                var _r3 = _e8[_n7],
                  _o3 = xi(_r3),
                  _s2 = _r3.parentNode;
                if (
                  null != _s2 &&
                  _r3 !== a &&
                  null === _o3 &&
                  !j(_r3, _s2, t)
                ) {
                  if (i) {
                    var _t9 = (ds(_r3) ? _r3.innerText : null) || _r3.nodeValue;
                    _t9 && (d += _t9);
                  }
                  _s2.removeChild(_r3);
                }
              }
              var _n8 = _f.removedNodes,
                _r4 = _n8.length;
              if (_r4 > 0) {
                var _e9 = 0;
                for (var _o4 = 0; _o4 < _r4; _o4++) {
                  var _r5 = _n8[_o4];
                  (j(_r5, _g, t) || a === _r5) && (_g.appendChild(_r5), _e9++);
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
          var f = n.takeRecords();
          if (f.length > 0) {
            for (var _e1 = 0; _e1 < f.length; _e1++) {
              var _n0 = f[_e1],
                _r6 = _n0.addedNodes,
                _o5 = _n0.target;
              for (var _e10 = 0; _e10 < _r6.length; _e10++) {
                var _n1 = _r6[_e10],
                  _i2 = _n1.parentNode;
                null == _i2 ||
                  "BR" !== _n1.nodeName ||
                  j(_n1, _o5, t) ||
                  _i2.removeChild(_n1);
              }
            }
            n.takeRecords();
          }
          null !== o && (u && ki(o), i && ji(t) && o.insertRawText(d));
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
        0 === U && ts(t).addEventListener("textInput", Y, !0);
      })(t),
        (t._observer = new MutationObserver(function (e, n) {
          V(t, e, n);
        })));
    }
    var Q = function Q(t, e) {
      ((this.key = t),
        (this.parse = e.parse.bind(e)),
        (this.unparse = (e.unparse || it).bind(e)),
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
        var _r7 = "function" == typeof t ? t : t.replace;
        _r7.prototype && void 0 !== _r7.prototype.getType;
        _r7 = Object.getPrototypeOf(_r7)
      ) {
        var _As = As(_r7),
          _t0 = _As.ownNodeConfig;
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
    var _et = (function () {
      function et(t, e, n, r, o) {
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
                      var _e11 = t.get(_o6);
                      (_e11 && n.has(_e11)) || r++;
                    }
                  return r;
                })(i, n, r);
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
        return (ot(t) && (e.$ = t), e);
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
                var _o7 = _ref0[0];
                var _i3 = _ref0[1];
                {
                  var _n12 = t.get(_o7);
                  _n12
                    ? e.has(_n12) || e.set(_n12, _n12.parse(_i3))
                    : ((r = r || {}), (r[_o7] = _i3));
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
          o = this.unknownState;
        (r.has(t) ||
          (o && n in o) ||
          (o && (delete o[n], (this.unknownState = ot(o))), this.size++),
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
        : Qo(xs(), t.getType()).sharedNodeState;
    }
    function ot(t) {
      if (t) for (var _e15 in t) return t;
    }
    function it(t) {
      return t;
    }
    function st(t, e, n) {
      for (var _ref12 of e.knownState) {
        var _r9 = _ref12[0];
        var _o8 = _ref12[1];
        {
          if (t.has(_r9.key)) continue;
          t.add(_r9.key);
          var _e16 = n ? n.getValue(_r9) : _r9.defaultValue;
          if (_e16 !== _o8 && !_r9.isEqual(_e16, _o8)) return !0;
        }
      }
      return !1;
    }
    function lt(t, e, n) {
      var r = e.unknownState,
        o = n ? n.unknownState : void 0;
      if (r)
        for (var _ref14 of Object.entries(r)) {
          var _e17 = _ref14[0];
          var _n14 = _ref14[1];
          if (t.has(_e17)) continue;
          t.add(_e17);
          if (_n14 !== (o ? o[_e17] : void 0)) return !0;
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
        r = co()._normalizedNodes;
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
          hr(e) &&
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
          hr(n) &&
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
    function ft(t) {
      return (ht(t.anchor), ht(t.focus), t);
    }
    function ht(t) {
      for (; "element" === t.type; ) {
        var _e18 = t.getNode(),
          _n15 = t.offset;
        var _r0 = void 0,
          _o9 = void 0;
        if (
          (_n15 === _e18.getChildrenSize()
            ? ((_r0 = _e18.getChildAtIndex(_n15 - 1)), (_o9 = !0))
            : ((_r0 = _e18.getChildAtIndex(_n15)), (_o9 = !1)),
          hr(_r0))
        ) {
          t.set(_r0.__key, _o9 ? _r0.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!Eo(_r0)) break;
        t.set(_r0.__key, _o9 ? _r0.getChildrenSize() : 0, "element", !0);
      }
    }
    var gt,
      _t,
      pt,
      yt,
      mt,
      xt,
      Ct,
      St,
      Nt,
      Tt,
      vt,
      Ot = "",
      kt = null,
      Et = null,
      Mt = !1,
      bt = !1;
    function At(t, e) {
      var n = Ct.get(t),
        r = St.has(t);
      if (null !== e) {
        var _n16 = Gt(t);
        _n16.parentNode === e && e.removeChild(_n16);
      }
      if (!r) {
        if ((_t._keyToDOMMap["delete"](t), Eo(n))) {
          var _t12 = Ds(n, Ct);
          wt(_t12, 0, _t12.length - 1, null);
        }
        void 0 !== n && Wi(Tt, pt, yt, n, "destroyed");
      }
    }
    function wt(t, e, n, r) {
      for (var _o0 = e; _o0 <= n; ++_o0) {
        var _e19 = t[_o0];
        void 0 !== _e19 && At(_e19, r);
      }
    }
    function Dt(t, e) {
      t.setProperty("text-align", e);
    }
    var Pt = "40px";
    function It(t, e) {
      var n = gt.theme.indent;
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
          : "calc(" + e + " * var(--lexical-indent-base-value, " + Pt + "))",
      );
    }
    function Ft(t, e) {
      var n = t.style;
      0 === e
        ? Dt(n, "")
        : 1 === e
          ? Dt(n, "left")
          : 2 === e
            ? Dt(n, "center")
            : 3 === e
              ? Dt(n, "right")
              : 4 === e
                ? Dt(n, "justify")
                : 5 === e
                  ? Dt(n, "start")
                  : 6 === e && Dt(n, "end");
    }
    function Rt(t, e) {
      var n = (function (t) {
        var e = t.__dir;
        if (null !== e) return e;
        if (Do(t)) return null;
        var n = t.getParentOrThrow();
        return ns(n) && null === n.__dir ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function Lt(e, n) {
      var r = St.get(e);
      if ((void 0 === r && t(60), null !== n)) {
        var _t13 = Ct.get(e);
        if (void 0 !== _t13 && _t13.__parent !== r.__parent) {
          var _t14 = Nt.get(e);
          if (void 0 !== _t14) return (n.insertChild(_t14), Wt(e, n.element));
        }
      }
      var o = vt.$createDOM(r, _t);
      if (
        ((function (t, e, n) {
          var r = n._keyToDOMMap;
          ((function (t, e, n) {
            var r = "__lexicalKey_" + e._key;
            t[r] = n;
          })(e, n, t),
            r.set(t, e));
        })(e, o, _t),
        hr(r)
          ? o.setAttribute("data-lexical-text", "true")
          : Ao(r) && o.setAttribute("data-lexical-decorator", "true"),
        Eo(r))
      ) {
        var _t15 = r.__indent,
          _e20 = r.__size;
        if ((Rt(o, r), 0 !== _t15 && It(o, _t15), 0 !== _e20)) {
          var _t16 = _e20 - 1;
          Bt(Ds(r, St), r, 0, _t16, vt.$getDOMSlot(r, o, _t));
        }
        var _n17 = r.__format;
        (0 !== _n17 && Ft(o, _n17), r.isInline() || $t(null, r, o));
      } else {
        var _t17 = r.getTextContent();
        if (Ao(r)) {
          var _t18 = r.decorate(_t, gt);
          (null !== _t18 && Ut(e, _t18), (o.contentEditable = "false"));
        }
        Ot += _t17;
      }
      return (
        null !== n && n.insertChild(o),
        vt.$decorateDOM(r, null, o, _t),
        Wi(Tt, pt, yt, r, "created"),
        o
      );
    }
    function Bt(t, e, n, r, o) {
      var i = Ot;
      Ot = "";
      var s = n;
      for (; s <= r; ++s) {
        Lt(t[s], o);
        var _e21 = St.get(t[s]);
        null !== _e21 && hr(_e21)
          ? null === kt && ((kt = _e21.getFormat()), (Et = _e21.getStyle()))
          : Eo(_e21) && s < r && !_e21.isInline() && (Ot += v);
      }
      ((o.element.__lexicalTextContent = Ot), (Ot = i + Ot));
    }
    function Kt(t, e) {
      if (t) {
        var _n18 = t.__last;
        if (_n18) {
          var _t19 = e.get(_n18);
          if (_t19)
            return Vn(_t19)
              ? "line-break"
              : Ao(_t19) && _t19.isInline()
                ? "decorator"
                : null;
        }
        return "empty";
      }
      return null;
    }
    function $t(t, e, n) {
      var r = Kt(t, Ct),
        o = Kt(e, St);
      r !== o && vt.$getDOMSlot(e, n, _t).setManagedLineBreak(o);
    }
    function zt(e, n, r) {
      var o;
      ((kt = null),
        (Et = null),
        (function (e, n, r) {
          var o = Ot,
            i = e.__size,
            s = n.__size;
          Ot = "";
          var l = r.element;
          if (1 === i && 1 === s) {
            var _t20 = e.__first,
              _o1 = n.__first;
            if (_t20 === _o1) Wt(_t20, l);
            else {
              var _e22 = Gt(_t20),
                _n19 = Lt(_o1, null);
              try {
                _e22.parentNode === l
                  ? l.replaceChild(_n19, _e22)
                  : r.insertChild(_n19);
              } catch (r) {
                if ("object" == typeof r && null != r) {
                  var _i4 =
                    r.toString() +
                    " Parent: " +
                    l.tagName +
                    ", new child: {tag: " +
                    _n19.tagName +
                    " key: " +
                    _o1 +
                    "}, old child: {tag: " +
                    _e22.tagName +
                    ", key: " +
                    _t20 +
                    "}.";
                  throw new Error(_i4);
                }
                throw r;
              }
              At(_t20, null);
            }
            var _i5 = St.get(_o1);
            hr(_i5) &&
              null === kt &&
              ((kt = _i5.getFormat()), (Et = _i5.getStyle()));
          } else {
            var _o10 = Ds(e, Ct),
              _c = Ds(n, St);
            if (
              (_o10.length !== i && t(227), _c.length !== s && t(228), 0 === i)
            )
              0 !== s && Bt(_c, 0, 0, s - 1, r);
            else if (0 === s) {
              if (0 !== i) {
                var _t21 =
                  null == r.after &&
                  null == r.before &&
                  null == r.element.__lexicalLineBreak;
                (wt(_o10, 0, i - 1, _t21 ? null : l),
                  _t21 && (l.textContent = ""));
              }
            } else
              !(function (t, e, n, r, o, i) {
                var s = r - 1,
                  l = o - 1;
                var c,
                  a,
                  u = i.getFirstChild(),
                  d = 0,
                  f = 0;
                for (; d <= s && f <= l; ) {
                  var _t22 = e[d],
                    _r10 = n[f];
                  if (_t22 === _r10) ((u = Yt(Wt(_r10, i.element))), d++, f++);
                  else {
                    if ((void 0 === a && (a = jt(n, f)), void 0 === c))
                      c = jt(e, d);
                    else if (!c.has(_t22)) {
                      d++;
                      continue;
                    }
                    if (!a.has(_t22)) {
                      ((u = Yt(Gt(_t22))),
                        At(_t22, i.element),
                        d++,
                        c["delete"](_t22));
                      continue;
                    }
                    if (c.has(_r10)) {
                      var _t23 = Gi(_t, _r10);
                      (_t23 !== u && i.withBefore(u).insertChild(_t23),
                        (u = Yt(Wt(_r10, i.element))),
                        d++,
                        f++);
                    } else (Lt(_r10, i.withBefore(u)), f++);
                  }
                  var _o11 = St.get(_r10);
                  null !== _o11 && hr(_o11)
                    ? null === kt &&
                      ((kt = _o11.getFormat()), (Et = _o11.getStyle()))
                    : Eo(_o11) && f <= l && !_o11.isInline() && (Ot += v);
                }
                var h = d > s,
                  g = f > l;
                if (h && !g) {
                  var _t24 = n[l + 1],
                    _e23 = void 0 === _t24 ? null : _t.getElementByKey(_t24);
                  Bt(n, 0, f, l, i.withBefore(_e23));
                } else g && !h && wt(e, d, s, i.element);
              })(0, _o10, _c, i, s, r);
          }
          ((l.__lexicalTextContent = Ot), (Ot = o + Ot));
        })(e, n, vt.$getDOMSlot(n, r, _t)),
        (o = n),
        null == kt || kt === o.__textFormat || bt || o.setTextFormat(kt),
        (function (t) {
          null == Et || Et === t.__textStyle || bt || t.setTextStyle(Et);
        })(n));
    }
    function Wt(e, n) {
      var r = Ct.get(e);
      var o = St.get(e);
      (void 0 !== r && void 0 !== o) || t(61);
      var i = Mt || xt.has(e) || mt.has(e),
        s = Gi(_t, e);
      if (r === o && !i) {
        var _t25;
        if (Eo(r)) {
          var _e24 = s.__lexicalTextContent;
          "string" == typeof _e24
            ? (_t25 = _e24)
            : ((_t25 = r.getTextContent()), (s.__lexicalTextContent = _t25));
        } else _t25 = r.getTextContent();
        return ((Ot += _t25), s);
      }
      if (
        (r !== o && i && Wi(Tt, pt, yt, o, "updated"),
        vt.$updateDOM(o, r, s, _t))
      ) {
        var _r11 = Lt(e, null);
        return (
          null === n && t(62),
          n.replaceChild(_r11, s),
          At(e, null),
          _r11
        );
      }
      if (Eo(r)) {
        Eo(o) || t(334, e);
        var _n20 = o.__indent;
        (Mt || _n20 !== r.__indent) && It(s, _n20);
        var _l2 = o.__format;
        if (((Mt || _l2 !== r.__format) && Ft(s, _l2), i))
          (zt(r, o, s), Do(o) || o.isInline() || $t(r, o, s));
        else {
          var _t26 = s.__lexicalTextContent;
          var _e25;
          ("string" == typeof _t26
            ? (_e25 = _t26)
            : ((_e25 = r.getTextContent()), (s.__lexicalTextContent = _e25)),
            (Ot += _e25));
        }
        if (
          (Mt || o.__dir !== r.__dir || o.__parent !== r.__parent) &&
          (Rt(s, o), Do(o) && !Mt)
        )
          for (var _t27 of o.getChildren())
            if (Eo(_t27)) {
              Rt(Gi(_t, _t27.getKey()), _t27);
            }
      } else {
        var _t28 = o.getTextContent();
        if (Ao(o)) {
          var _t29 = o.decorate(_t, gt);
          null !== _t29 && Ut(e, _t29);
        }
        Ot += _t28;
      }
      if (!bt && Do(o) && o.__cachedText !== Ot) {
        var _t30 = o.getWritable();
        ((_t30.__cachedText = Ot), (o = _t30));
      }
      return (vt.$decorateDOM(o, r, s, _t), s);
    }
    function Ut(t, e) {
      var n = _t._pendingDecorators;
      var r = _t._decorators;
      if (null === n) {
        if (r[t] === e) return;
        n = Ni(_t);
      }
      n[t] = e;
    }
    function Yt(t) {
      var e = t.nextSibling;
      return (
        null !== e && e === _t._blockCursorElement && (e = e.nextSibling),
        e
      );
    }
    function jt(t, e) {
      var n = new Set();
      for (var _r12 = e; _r12 < t.length; _r12++) n.add(t[_r12]);
      return n;
    }
    function Jt(t, e, n, r, o, i) {
      ((Ot = ""),
        (Mt = 2 === r),
        (_t = n),
        (gt = n._config),
        (vt = n._config.dom || jo),
        (pt = n._nodes),
        (yt = _t._listeners.mutation),
        (mt = o),
        (xt = i),
        (Ct = t._nodeMap),
        (St = e._nodeMap),
        (bt = e._readOnly),
        (Nt = K(n._keyToDOMMap)));
      var s = new Map();
      return (
        (Tt = s),
        Wt("root", null),
        (_t = void 0),
        (pt = void 0),
        (mt = void 0),
        (xt = void 0),
        (Ct = void 0),
        (St = void 0),
        (gt = void 0),
        (Nt = void 0),
        (Tt = void 0),
        (vt = jo),
        s
      );
    }
    function Gt(e) {
      var n = Nt.get(e);
      return (void 0 === n && t(75, e), n);
    }
    function Ht(t) {
      return { type: t };
    }
    var Vt = Ht("SELECTION_CHANGE_COMMAND"),
      qt = Ht("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"),
      Xt = Ht("CLICK_COMMAND"),
      Qt = Ht("BEFORE_INPUT_COMMAND"),
      Zt = Ht("INPUT_COMMAND"),
      te = Ht("COMPOSITION_START_COMMAND"),
      ee = Ht("COMPOSITION_END_COMMAND"),
      ne = Ht("DELETE_CHARACTER_COMMAND"),
      re = Ht("INSERT_LINE_BREAK_COMMAND"),
      oe = Ht("INSERT_PARAGRAPH_COMMAND"),
      ie = Ht("CONTROLLED_TEXT_INSERTION_COMMAND"),
      se = Ht("PASTE_COMMAND"),
      le = Ht("REMOVE_TEXT_COMMAND"),
      ce = Ht("DELETE_WORD_COMMAND"),
      ae = Ht("DELETE_LINE_COMMAND"),
      ue = Ht("FORMAT_TEXT_COMMAND"),
      de = Ht("UNDO_COMMAND"),
      fe = Ht("REDO_COMMAND"),
      he = Ht("KEYDOWN_COMMAND"),
      ge = Ht("KEY_ARROW_RIGHT_COMMAND"),
      _e = Ht("MOVE_TO_END"),
      pe = Ht("KEY_ARROW_LEFT_COMMAND"),
      ye = Ht("MOVE_TO_START"),
      me = Ht("KEY_ARROW_UP_COMMAND"),
      xe = Ht("KEY_ARROW_DOWN_COMMAND"),
      Ce = Ht("KEY_ENTER_COMMAND"),
      Se = Ht("KEY_SPACE_COMMAND"),
      Ne = Ht("KEY_BACKSPACE_COMMAND"),
      Te = Ht("KEY_ESCAPE_COMMAND"),
      ve = Ht("KEY_DELETE_COMMAND"),
      Oe = Ht("KEY_TAB_COMMAND"),
      ke = Ht("INSERT_TAB_COMMAND"),
      Ee = Ht("INDENT_CONTENT_COMMAND"),
      Me = Ht("OUTDENT_CONTENT_COMMAND"),
      be = Ht("DROP_COMMAND"),
      Ae = Ht("FORMAT_ELEMENT_COMMAND"),
      we = Ht("DRAGSTART_COMMAND"),
      De = Ht("DRAGOVER_COMMAND"),
      Pe = Ht("DRAGEND_COMMAND"),
      Ie = Ht("COPY_COMMAND"),
      Fe = Ht("CUT_COMMAND"),
      Re = Ht("SELECT_ALL_COMMAND"),
      Le = Ht("CLEAR_EDITOR_COMMAND"),
      Be = Ht("CLEAR_HISTORY_COMMAND"),
      Ke = Ht("CAN_REDO_COMMAND"),
      $e = Ht("CAN_UNDO_COMMAND"),
      ze = Ht("FOCUS_COMMAND"),
      We = Ht("BLUR_COMMAND"),
      Ue = Ht("KEY_MODIFIER_COMMAND"),
      Ye = Object.freeze({}),
      je = [
        [
          "keydown",
          function (t, e) {
            ((Je = t.timeStamp), (Ge = t.key), "Backspace" !== t.key && pn());
            if (e.isComposing()) return;
            Ji(e, he, t);
          },
        ],
        [
          "pointerdown",
          function (t, e) {
            var n = t.target,
              r = t.pointerType;
            fs(n) &&
              "touch" !== r &&
              "pen" !== r &&
              0 === t.button &&
              To(e, function () {
                ei(n) || (en = !0);
              });
          },
        ],
        [
          "compositionstart",
          function (t, e) {
            Ji(e, te, t);
          },
        ],
        [
          "compositionend",
          function (t, e) {
            i
              ? (rn = !0)
              : l || (!a && !f)
                ? Ji(e, ee, t)
                : ((on = !0), (sn = t.data));
          },
        ],
        [
          "input",
          function (t, e) {
            (t.stopPropagation(),
              pn(),
              To(
                e,
                function () {
                  e.dispatchCommand(Zt, t);
                },
                { event: t },
              ),
              (Ve = null));
          },
        ],
        [
          "click",
          function (t, e) {
            To(e, function () {
              var n = $r(),
                r = as(ts(e)),
                o = zr();
              if (r)
                if (Tr(n)) {
                  var _e26 = n.anchor,
                    _i6 = _e26.getNode();
                  if (
                    "element" === _e26.type &&
                    0 === _e26.offset &&
                    n.isCollapsed() &&
                    !Do(_i6) &&
                    1 === vi().getChildrenSize() &&
                    _i6.getTopLevelElementOrThrow().isEmpty() &&
                    null !== o &&
                    n.is(o)
                  )
                    (r.removeAllRanges(), (n.dirty = !0));
                  else if (3 === t.detail && !n.isCollapsed()) {
                    if (_i6 !== n.focus.getNode()) {
                      var _t31 = ws(_i6, function (t) {
                        return Eo(t) && !t.isInline();
                      });
                      Eo(_t31) && _t31.select(0);
                    }
                  }
                } else if (
                  "touch" === t.pointerType ||
                  "pen" === t.pointerType
                ) {
                  var _n21 = r.anchorNode;
                  if (ds(_n21) || ai(_n21)) {
                    ki(Kr(o, r, e, t));
                  }
                }
              Ji(e, Xt, t);
            });
          },
        ],
        ["cut", Ye],
        ["copy", Ye],
        ["dragstart", Ye],
        ["dragover", Ye],
        ["dragend", Ye],
        ["paste", Ye],
        ["focus", Ye],
        ["blur", Ye],
        ["drop", Ye],
      ];
    s &&
      je.push([
        "beforeinput",
        function (t, e) {
          return (function (t, e) {
            var n = t.inputType;
            if ("deleteCompositionText" === n || (i && ji(e))) return;
            if ("insertCompositionText" === n) return;
            Ji(e, Qt, t);
          })(t, e);
        },
      ]);
    var Je = 0,
      Ge = null,
      He = 0,
      Ve = null,
      qe = !1,
      Xe = null;
    var Qe = new WeakMap(),
      Ze = new WeakMap();
    var tn = !1,
      en = !1,
      nn = !1,
      rn = !1,
      on = !1,
      sn = "",
      ln = null,
      cn = [0, "", 0, "root", 0];
    function an(t, e, n, r, o) {
      var i = t.anchor,
        l = t.focus,
        c = i.getNode(),
        a = co(),
        u = as(ts(a)),
        d = null !== u ? u.anchorNode : null,
        f = i.key,
        h = a.getElementByKey(f),
        g = n.length;
      return (
        f !== l.key ||
        !hr(c) ||
        (((!o && (!s || He < r + 50)) || (c.isDirty() && g < 2) || Mi(n)) &&
          i.offset !== l.offset &&
          !c.isComposing()) ||
        ci(c) ||
        (c.isDirty() && g > 1) ||
        ((o || !s) && null !== h && !c.isComposing() && d !== di(h)) ||
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
            o = li(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!r.canInsertTextBefore() && !e.isComposing()) ||
                o ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (hr(e) || (Eo(e) && e.isInline())) &&
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
    function un(t, e) {
      return (
        ai(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function dn(e, n, r) {
      var o = e.anchorNode,
        i = e.anchorOffset,
        s = e.focusNode,
        l = e.focusOffset;
      (tn && ((tn = !1), un(o, i) && un(s, l) && !ln)) ||
        To(n, function () {
          if (!r) return void ki(null);
          if (!ri(n, o, s)) return;
          var c = $r();
          if (ln && Tr(c) && c.isCollapsed()) {
            var _t32 = c.anchor,
              _e27 = ln.anchor;
            ((_t32.key === _e27.key && _t32.offset === _e27.offset + 1) ||
              (1 === _t32.offset &&
                _e27.getNode().is(_t32.getNode().getPreviousSibling()))) &&
              ((c = ln.clone()), ki(c));
          }
          if (((ln = null), Tr(c))) {
            var _r13 = c.anchor,
              _o12 = _r13.getNode();
            if (c.isCollapsed()) {
              "Range" === e.type &&
                e.anchorNode === e.focusNode &&
                (c.dirty = !0);
              var _i7 = ts(n).event,
                _s3 = _i7 ? _i7.timeStamp : performance.now(),
                _cn = cn,
                _l3 = _cn[0],
                _a = _cn[1],
                _u = _cn[2],
                _d = _cn[3],
                _f2 = _cn[4],
                _h2 = vi(),
                _g2 = !1 === n.isComposing() && "" === _h2.getTextContent();
              if (_s3 < _f2 + 200 && _r13.offset === _u && _r13.key === _d)
                fn(c, _l3, _a);
              else if ("text" === _r13.type) (hr(_o12) || t(141), hn(c, _o12));
              else if ("element" === _r13.type && !_g2) {
                Eo(_o12) || t(259);
                var _e28 = _r13.getNode();
                _e28.isEmpty()
                  ? (function (t, e) {
                      var n = e.getTextFormat(),
                        r = e.getTextStyle();
                      fn(t, n, r);
                    })(c, _e28)
                  : fn(c, c.format, "");
              }
            } else {
              var _t33 = _r13.key,
                _e29 = c.focus.key,
                _n22 = c.getNodes(),
                _o13 = _n22.length,
                _s4 = c.isBackward(),
                _a2 = _s4 ? l : i,
                _u2 = _s4 ? i : l,
                _d2 = _s4 ? _e29 : _t33,
                _f3 = _s4 ? _t33 : _e29;
              var _h3 = 2047,
                _g3 = !1;
              for (var _t34 = 0; _t34 < _o13; _t34++) {
                var _e30 = _n22[_t34],
                  _r14 = _e30.getTextContentSize();
                if (
                  hr(_e30) &&
                  0 !== _r14 &&
                  !(
                    (0 === _t34 && _e30.__key === _d2 && _a2 === _r14) ||
                    (_t34 === _o13 - 1 && _e30.__key === _f3 && 0 === _u2)
                  ) &&
                  ((_g3 = !0), (_h3 &= _e30.getFormat()), 0 === _h3)
                )
                  break;
              }
              c.format = _g3 ? _h3 : 0;
            }
          }
          Ji(n, Vt, void 0);
        });
    }
    function fn(t, e, n) {
      (t.format === e && t.style === n) ||
        ((t.format = e), (t.style = n), (t.dirty = !0));
    }
    function hn(t, e) {
      fn(t, e.getFormat(), e.getStyle());
    }
    function gn(t) {
      if (!t.getTargetRanges) return null;
      var e = t.getTargetRanges();
      return 0 === e.length ? null : e[0];
    }
    function _n(t) {
      if (null == t || t.length <= 1 || null == Ge) return;
      var e =
        1 === Ge.length
          ? Ge
          : "Enter" === Ge
            ? "\n"
            : "Tab" === Ge
              ? "\t"
              : null;
      if (!e) return;
      var n = $r();
      if (!Tr(n) || !n.isCollapsed()) return;
      var r = n.anchor.getNode();
      if (!hr(r)) return;
      var o = n.anchor.offset;
      if (r.getTextContentSize() === o) {
        var _t35 = r.getNextSibling();
        if ("\n" === e) {
          if (Vn(_t35)) _t35.selectEnd();
          else if (!_t35) {
            var _t36 = ws(r, Fr),
              _e31 = _t36 && _t36.getNextSibling();
            Eo(_e31) && _e31.selectStart();
          }
        } else
          "\t" === e
            ? yr(_t35) && _t35.selectEnd()
            : hr(_t35) && _t35.getTextContent()[0] === e && _t35.select(1, 1);
      } else r.getTextContent()[o] === e && r.select(o + 1, o + 1);
    }
    function pn() {
      ((qe = !1), null !== Xe && (clearTimeout(Xe), (Xe = null)));
    }
    function yn() {
      (pn(), (qe = !0), (Xe = setTimeout(pn, 0)));
    }
    function mn(e) {
      var _ref15;
      var n = e.inputType,
        r = gn(e),
        o = co(),
        i = $r();
      if ("insertText" === n && e.data && qe) {
        if ((pn(), e.preventDefault(), Tr(i) && !i.isCollapsed())) {
          var _t37 = i.isBackward() ? i.anchor : i.focus;
          (i.anchor.set(_t37.key, _t37.offset, _t37.type),
            i.focus.set(_t37.key, _t37.offset, _t37.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === i) {
          var _t38 = zr();
          if (!Tr(_t38)) return !0;
          ki(_t38.clone());
        }
        if (Tr(i)) {
          var _n23 = i.anchor.key === i.focus.key;
          if (
            ((s = e.timeStamp),
            "MediaLast" === Ge && s < Je + 30 && o.isComposing() && _n23)
          ) {
            if (
              (pi(null),
              (Je = 0),
              setTimeout(function () {
                To(o, function () {
                  pi(null);
                });
              }, 30),
              Tr(i))
            ) {
              var _e32 = i.anchor.getNode();
              (_e32.markDirty(), hr(_e32) || t(142), hn(i, _e32));
            }
          } else {
            (pi(null), e.preventDefault());
            var _t39 = i.anchor.getNode(),
              _r15 = _t39.getTextContent(),
              _s5 = _t39.canInsertTextAfter(),
              _l4 = 0 === i.anchor.offset && i.focus.offset === _r15.length;
            var _c2 = d && _n23 && !_l4 && _s5;
            if (
              (_c2 && i.isCollapsed() && (_c2 = !Ao(Yi(i.anchor, !0))), !_c2)
            ) {
              Ji(o, ne, !0);
              var _t40 = $r();
              d &&
                Tr(_t40) &&
                _t40.isCollapsed() &&
                ((ln = _t40),
                setTimeout(function () {
                  return (ln = null);
                }));
            }
          }
          return !0;
        }
      }
      var s;
      if (!Tr(i)) return !0;
      var c = e.data;
      (null !== Ve && Di(!1, o, Ve),
        (i.dirty && null === Ve) ||
          !i.isCollapsed() ||
          Do(i.anchor.getNode()) ||
          null === r ||
          i.applyDOMRange(r),
        (Ve = null));
      var a = i.anchor,
        u = i.focus,
        f = a.getNode(),
        h = u.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === c) (e.preventDefault(), Ji(o, re, !1));
        else if (c === v) (e.preventDefault(), Ji(o, oe, void 0));
        else if (null == c && e.dataTransfer) {
          var _t41 = e.dataTransfer.getData("text/plain");
          (e.preventDefault(), i.insertRawText(_t41));
        } else
          null != c && an(i, r, c, e.timeStamp, !0)
            ? (e.preventDefault(), Ji(o, ie, c), _n(c))
            : (Ve = c);
        return ((He = e.timeStamp), !0);
      }
      switch ((e.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          Ji(o, ie, e);
          _n(
            (_ref15 = e.dataTransfer
              ? e.dataTransfer.getData("text/plain")
              : null) != null
              ? _ref15
              : e.data,
          );
          break;
        case "insertFromComposition":
          (pi(null), Ji(o, ie, e));
          break;
        case "insertLineBreak":
          (pi(null), Ji(o, re, !1));
          break;
        case "insertParagraph":
          (pi(null), nn && !l ? ((nn = !1), Ji(o, re, !1)) : Ji(o, oe, void 0));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          Ji(o, se, e);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || Eo(t) || Eo(e) || !li(t) || !li(e);
          })(f, h) && Ji(o, le, e);
          break;
        case "deleteByDrag":
          (qi(Kn), Ji(o, le, e));
          break;
        case "deleteByCut":
          Ji(o, le, e);
          break;
        case "deleteContent":
          Ji(o, ne, !1);
          break;
        case "deleteWordBackward":
          Ji(o, ce, !0);
          break;
        case "deleteWordForward":
          Ji(o, ce, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          Ji(o, ae, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          Ji(o, ae, !1);
          break;
        case "formatStrikeThrough":
          Ji(o, ue, "strikethrough");
          break;
        case "formatBold":
          Ji(o, ue, "bold");
          break;
        case "formatItalic":
          Ji(o, ue, "italic");
          break;
        case "formatUnderline":
          Ji(o, ue, "underline");
          break;
        case "historyUndo":
          Ji(o, de, void 0);
          break;
        case "historyRedo":
          Ji(o, fe, void 0);
      }
      return !0;
    }
    function xn(t) {
      if (ds(t.target) && ei(t.target)) return !0;
      var e = co(),
        n = $r(),
        r = t.data,
        o = gn(t);
      if (null != r && Tr(n) && an(n, o, r, t.timeStamp, !1)) {
        rn && (Nn(e, r), (rn = !1));
        var _o14 = n.anchor.getNode(),
          _l5 = as(ts(e));
        if (null === _l5) return !0;
        var _c3 = n.isBackward(),
          _a3 = _c3 ? n.anchor.offset : n.focus.offset,
          _u3 = _c3 ? n.focus.offset : n.anchor.offset;
        (s &&
          !n.isCollapsed() &&
          hr(_o14) &&
          null !== _l5.anchorNode &&
          _o14.getTextContent().slice(0, _a3) +
            r +
            _o14.getTextContent().slice(_a3 + _u3) ===
            wi(_l5.anchorNode)) ||
          Ji(e, ie, r);
        var _f4 = r.length;
        (i &&
          _f4 > 1 &&
          "insertCompositionText" === t.inputType &&
          !e.isComposing() &&
          ((n.anchor.offset -= _f4),
          (n._cachedNodes = null),
          (n._cachedIsBackward = null)),
          d && e.isComposing() && ((Je = 0), pi(null)));
      } else {
        (Di(!1, e, null !== r ? r : void 0),
          rn && (Nn(e, r || void 0), (rn = !1)));
      }
      return (
        (function () {
          io();
          var t = co();
          q(t);
        })(),
        !0
      );
    }
    function Cn(t) {
      var e = co(),
        n = $r();
      if (Tr(n) && !e.isComposing()) {
        var _r16 = n.anchor,
          _o15 = n.anchor.getNode();
        (pi(_r16.key),
          qi($n),
          (t.timeStamp < Je + 30 ||
            "element" === _r16.type ||
            !n.isCollapsed() ||
            _o15.getFormat() !== n.format ||
            (hr(_o15) && _o15.getStyle() !== n.style)) &&
            Ji(e, ie, O));
      }
      return !0;
    }
    function Sn(t) {
      return (Nn(co(), t.data), qi(zn), !0);
    }
    function Nn(t, e) {
      var n = t._compositionKey;
      if ((pi(null), null !== n && null != e)) {
        if ("" === e) {
          var _e33 = mi(n),
            _r17 = di(t.getElementByKey(n));
          if (null !== _r17 && null !== _r17.nodeValue && hr(_e33)) {
            var _n24 = as(ts(t));
            var _o16 = null,
              _i8 = null;
            (null !== _n24 &&
              _n24.anchorNode === _r17 &&
              ((_o16 = _n24.anchorOffset), (_i8 = _n24.focusOffset)),
              Pi(_e33, _r17.nodeValue, _o16, _i8, !0));
          }
          return;
        }
        if ("\n" === e[e.length - 1]) {
          var _e34 = $r();
          if (Tr(_e34) || Or(_e34)) {
            if (Tr(_e34)) {
              var _t42 = _e34.focus;
              _e34.anchor.set(_t42.key, _t42.offset, _t42.type);
            }
            return void Ji(t, Ce, null);
          }
        }
      }
      Di(!0, t, e);
    }
    function Tn(t) {
      var e = co();
      if (null == t.key) return !0;
      if (on) {
        if ($i(t))
          return (
            To(e, function () {
              Nn(e, sn);
            }),
            (on = !1),
            (sn = ""),
            !0
          );
        ((on = !1), (sn = ""));
      }
      if (
        (function (t) {
          return Li(t, "ArrowRight", { shiftKey: "any" });
        })(t)
      )
        Ji(e, ge, t);
      else if (
        (function (t) {
          return Li(t, "ArrowRight", Bi);
        })(t)
      )
        Ji(e, _e, t);
      else if (
        (function (t) {
          return Li(t, "ArrowLeft", { shiftKey: "any" });
        })(t)
      )
        Ji(e, pe, t);
      else if (
        (function (t) {
          return Li(t, "ArrowLeft", Bi);
        })(t)
      )
        Ji(e, ye, t);
      else if (
        (function (t) {
          return Li(t, "ArrowUp", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        Ji(e, me, t);
      else if (
        (function (t) {
          return Li(t, "ArrowDown", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        Ji(e, xe, t);
      else if (
        (function (t) {
          return Li(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
            shiftKey: !0,
          });
        })(t)
      )
        ((nn = !0), Ji(e, Ce, t));
      else if (
        (function (t) {
          return " " === t.key;
        })(t)
      )
        Ji(e, Se, t);
      else if (
        (function (t) {
          return o && Li(t, "o", { ctrlKey: !0 });
        })(t)
      )
        (t.preventDefault(), (nn = !0), Ji(e, re, !0));
      else if (
        (function (t) {
          return Li(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
          });
        })(t)
      )
        ((nn = !1), Ji(e, Ce, t));
      else if (
        (function (t) {
          return (
            Li(t, "Backspace", { shiftKey: "any" }) ||
            (o && Li(t, "h", { ctrlKey: !0 }))
          );
        })(t)
      )
        $i(t) ? Ji(e, Ne, t) && yn() : (t.preventDefault(), Ji(e, ne, !0));
      else if (
        (function (t) {
          return "Escape" === t.key;
        })(t)
      )
        Ji(e, Te, t);
      else if (
        (function (t) {
          return Li(t, "Delete", {}) || (o && Li(t, "d", { ctrlKey: !0 }));
        })(t)
      )
        !(function (t) {
          return "Delete" === t.key;
        })(t)
          ? (t.preventDefault(), Ji(e, ne, !1))
          : Ji(e, ve, t);
      else if (
        (function (t) {
          return Li(t, "Backspace", Ki);
        })(t)
      )
        (t.preventDefault(), Ji(e, ce, !0));
      else if (
        (function (t) {
          return Li(t, "Delete", Ki);
        })(t)
      )
        (t.preventDefault(), Ji(e, ce, !1));
      else if (
        (function (t) {
          return o && Li(t, "Backspace", { metaKey: !0 });
        })(t)
      )
        (t.preventDefault(), Ji(e, ae, !0));
      else if (
        (function (t) {
          return (
            o &&
            (Li(t, "Delete", { metaKey: !0 }) || Li(t, "k", { ctrlKey: !0 }))
          );
        })(t)
      )
        (t.preventDefault(), Ji(e, ae, !1));
      else if (
        (function (t) {
          return Li(t, "b", Bi);
        })(t)
      )
        (t.preventDefault(), Ji(e, ue, "bold"));
      else if (
        (function (t) {
          return Li(t, "u", Bi);
        })(t)
      )
        (t.preventDefault(), Ji(e, ue, "underline"));
      else if (
        (function (t) {
          return Li(t, "i", Bi);
        })(t)
      )
        (t.preventDefault(), Ji(e, ue, "italic"));
      else if (
        (function (t) {
          return Li(t, "Tab", { shiftKey: "any" });
        })(t)
      )
        Ji(e, Oe, t);
      else if (
        (function (t) {
          return Li(t, "z", Bi);
        })(t)
      )
        (t.preventDefault(), Ji(e, de, void 0));
      else if (
        (function (t) {
          if (o) return Li(t, "z", { metaKey: !0, shiftKey: !0 });
          return (
            Li(t, "y", { ctrlKey: !0 }) ||
            Li(t, "z", { ctrlKey: !0, shiftKey: !0 })
          );
        })(t)
      )
        (t.preventDefault(), Ji(e, fe, void 0));
      else {
        var _n25 = e._editorState._selection;
        !(function (t) {
          return Li(t, "a", Bi);
        })(t)
          ? null === _n25 ||
            Tr(_n25) ||
            (!(function (t) {
              return Li(t, "c", Bi);
            })(t)
              ? (function (t) {
                  return Li(t, "x", Bi);
                })(t) && (t.preventDefault(), Ji(e, Fe, t))
              : (t.preventDefault(), Ji(e, Ie, t)))
          : (t.preventDefault(), Ji(e, Re, t) && yn());
      }
      return (
        (function (t) {
          return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey;
        })(t) && e.dispatchCommand(Ue, t),
        !0
      );
    }
    function vn(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    var On = new Map();
    function kn(t) {
      var e = us(t.target);
      if (null === e) return;
      var n = ii(e.anchorNode);
      if (null === n) return;
      en &&
        ((en = !1),
        To(n, function () {
          var r = zr(),
            o = e.anchorNode;
          if (ds(o) || ai(o)) {
            ki(Kr(r, e, n, t));
          }
        }));
      var r = bi(n),
        o = r[r.length - 1],
        i = o._key,
        s = On.get(i),
        l = s || o;
      (l !== n && dn(e, l, !1),
        dn(e, n, !0),
        n !== o ? On.set(i, n) : s && On["delete"](i));
    }
    function En(t) {
      t._lexicalHandled = !0;
    }
    function Mn(t) {
      return !0 === t._lexicalHandled;
    }
    var bn = function bn() {};
    function An(e) {
      var n = Qe.get(e);
      if (void 0 === n) return void bn();
      var r = Ze.get(n);
      if (void 0 === r) return void bn();
      var o = r - 1;
      (o >= 0 || t(164),
        Qe["delete"](e),
        Ze.set(n, o),
        0 === o && n.removeEventListener("selectionchange", kn));
      var i = si(e);
      oi(i)
        ? (!(function (t) {
            if (null !== t._parentEditor) {
              var _e35 = bi(t),
                _n26 = _e35[_e35.length - 1]._key;
              On.get(_n26) === t && On["delete"](_n26);
            } else On["delete"](t._key);
          })(i),
          (e.__lexicalEditor = null))
        : i && t(198);
      var s = vn(e);
      for (var _t43 = 0; _t43 < s.length; _t43++) s[_t43]();
      e.__lexicalEventHandles = [];
    }
    function wn(t, e, n) {
      io();
      var r = t.__key,
        o = t.getParent();
      if (null === o) return;
      var i = (function (t) {
        var e = $r();
        if (!Tr(e) || !Eo(t)) return e;
        var n = e.anchor,
          r = e.focus,
          o = n.getNode(),
          i = r.getNode();
        Qi(o, t) && n.set(t.__key, 0, "element");
        Qi(i, t) && r.set(t.__key, 0, "element");
        return e;
      })(t);
      var s = !1;
      if (Tr(i) && e) {
        var _e36 = i.anchor,
          _n27 = i.focus;
        (_e36.key === r &&
          (Yr(_e36, t, o, t.getPreviousSibling(), t.getNextSibling()),
          (s = !0)),
          _n27.key === r &&
            (Yr(_n27, t, o, t.getPreviousSibling(), t.getNextSibling()),
            (s = !0)));
      } else Or(i) && e && t.isSelected() && t.selectPrevious();
      if (Tr(i) && e && !s) {
        var _e37 = t.getIndexWithinParent();
        (gi(t), Wr(i, o, _e37, -1));
      } else gi(t);
      (n || ns(o) || o.canBeEmpty() || !o.isEmpty() || wn(o, e),
        e && i && Do(o) && o.isEmpty() && o.selectEnd());
    }
    var Dn = Symbol["for"]("ephemeral");
    function Pn(t) {
      return t[Dn] || !1;
    }
    var _In5 = (function () {
      function In(t) {
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
          hi(this, t));
      }
      In.getType = function getType() {
        var _As2 = As(this),
          e = _As2.ownNodeType;
        return (void 0 === e && t(64, this.name), e);
      };
      In.clone = function clone(e) {
        t(65, this.name);
      };
      var _proto4 = In.prototype;
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
          var _e38 = mi(t);
          if (null === _e38) break;
          t = _e38.__parent;
        }
        return !1;
      };
      _proto4.isSelected = function isSelected(t) {
        var _this12 = this;
        var e = t || $r();
        if (null == e) return !1;
        var n = e.getNodes().some(function (t) {
          return t.__key === _this12.__key;
        });
        if (hr(this)) return n;
        if (
          Tr(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t44 = this.getParent();
          if (Ao(this) && this.isInline() && _t44) {
            var _n28 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t44.is(_n28.getNode()) &&
              _n28.offset === _t44.getChildrenSize() &&
              this.is(_t44.getLastChild())
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
        return null === t ? null : mi(t);
      };
      _proto4.getParentOrThrow = function getParentOrThrow() {
        var e = this.getParent();
        return (null === e && t(66, this.__key), e);
      };
      _proto4.getTopLevelElement = function getTopLevelElement() {
        var e = this;
        for (; null !== e; ) {
          var _n29 = e.getParent();
          if (ns(_n29)) return (Eo(e) || (e === this && Ao(e)) || t(194), e);
          e = _n29;
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
        return null === t ? null : mi(t);
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
        return null === t ? null : mi(t);
      };
      _proto4.getNextSiblings = function getNextSiblings() {
        var t = [];
        var e = this.getNextSibling();
        for (; null !== e; ) (t.push(e), (e = e.getNextSibling()));
        return t;
      };
      _proto4.getCommonAncestor = function getCommonAncestor(t) {
        var e = Eo(this) ? this : this.getParent(),
          n = Eo(t) ? t : t.getParent(),
          r = e && n ? ul(e, n) : null;
        return r ? r.commonAncestor : null;
      };
      _proto4.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto4.isBefore = function isBefore(e) {
        var n = ul(this, e);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === ll(n)
              : ("same" !== n.type && "ancestor" !== n.type && t(279), !1)))
        );
      };
      _proto4.isParentOf = function isParentOf(t) {
        var e = ul(this, t);
        return null !== e && "ancestor" === e.type;
      };
      _proto4.getNodesBetween = function getNodesBetween(e) {
        var n = this.isBefore(e),
          r = [],
          o = new Set();
        var i = this;
        for (; null !== i; ) {
          var _s6 = i.__key;
          if ((o.has(_s6) || (o.add(_s6), r.push(i)), i === e)) break;
          var _l6 = Eo(i) ? (n ? i.getFirstChild() : i.getLastChild()) : null;
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
            _d3 = _a4;
          do {
            if (
              (null === _d3 && t(68),
              (_u4 = n ? _d3.getNextSibling() : _d3.getPreviousSibling()),
              (_d3 = _d3.getParent()),
              null === _d3)
            )
              break;
            null !== _u4 || o.has(_d3.__key) || r.push(_d3);
          } while (null === _u4);
          i = _u4;
        }
        return (n || r.reverse(), r);
      };
      _proto4.isDirty = function isDirty() {
        var t = co()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto4.getLatest = function getLatest() {
        if (Pn(this)) return this;
        var e = mi(this.__key);
        return (null === e && t(113), e);
      };
      _proto4.getWritable = function getWritable() {
        if (Pn(this)) return this;
        io();
        var t = lo(),
          e = co(),
          n = t._nodeMap,
          r = this.__key,
          o = this.getLatest(),
          i = e._cloneNotNeeded,
          s = $r();
        if ((null !== s && s.setCachedNodes(null), i.has(r))) return (_i(o), o);
        var l = vs(o);
        return (i.add(r), _i(l), n.set(r, l), l);
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
      In.importJSON = function importJSON(e) {
        t(18, this.name);
      };
      _proto4.updateFromJSON = function updateFromJSON(t) {
        return (function (t, e) {
          var n = t.getWritable(),
            r = e.$;
          var o = r;
          for (var _t45 of rt(n).flatKeys)
            _t45 in e &&
              ((void 0 !== o && o !== r) ||
                (o = babelHelpers["extends"]({}, r)),
              (o[_t45] = e[_t45]));
          return ((n.__state || o) && nt(t).updateFromJSON(o), n);
        })(this, t);
      };
      In.transform = function transform() {
        return null;
      };
      _proto4.remove = function remove(t) {
        wn(this, !0, t);
      };
      _proto4.replace = function replace(e, n) {
        io();
        var r = $r();
        (null !== r && (r = r.clone()), is(this, e));
        var o = this.getLatest(),
          i = this.__key,
          s = e.__key,
          l = e.getWritable(),
          c = this.getParentOrThrow().getWritable(),
          a = c.__size;
        gi(l);
        var u = o.getPreviousSibling(),
          d = o.getNextSibling(),
          f = o.__prev,
          h = o.__next,
          g = o.__parent;
        if ((wn(o, !1, !0), null === u)) c.__first = s;
        else {
          u.getWritable().__next = s;
        }
        if (((l.__prev = f), null === d)) c.__last = s;
        else {
          d.getWritable().__prev = s;
        }
        if (
          ((l.__next = h),
          (l.__parent = g),
          (c.__size = a),
          n &&
            ((Eo(this) && Eo(l)) || t(139),
            this.getChildren().forEach(function (t) {
              l.append(t);
            })),
          Tr(r))
        ) {
          ki(r);
          var _t46 = r.anchor,
            _e39 = r.focus;
          (_t46.key === i && Sr(_t46, l), _e39.key === i && Sr(_e39, l));
        }
        return (yi() === i && pi(s), l);
      };
      _proto4.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (io(), is(this, t));
        var n = this.getWritable(),
          r = t.getWritable(),
          o = r.getParent(),
          i = $r();
        var s = !1,
          l = !1;
        if (null !== o) {
          var _e40 = t.getIndexWithinParent();
          if ((gi(r), Tr(i))) {
            var _t47 = o.__key,
              _n30 = i.anchor,
              _r18 = i.focus;
            ((s =
              "element" === _n30.type &&
              _n30.key === _t47 &&
              _n30.offset === _e40 + 1),
              (l =
                "element" === _r18.type &&
                _r18.key === _t47 &&
                _r18.offset === _e40 + 1));
          }
        }
        var c = this.getNextSibling(),
          a = this.getParentOrThrow().getWritable(),
          u = r.__key,
          d = n.__next;
        if (null === c) a.__last = u;
        else {
          c.getWritable().__prev = u;
        }
        if (
          (a.__size++,
          (n.__next = u),
          (r.__next = d),
          (r.__prev = n.__key),
          (r.__parent = n.__parent),
          e && Tr(i))
        ) {
          var _t48 = this.getIndexWithinParent();
          Wr(i, a, _t48 + 1);
          var _e41 = a.__key;
          (s && i.anchor.set(_e41, _t48 + 2, "element"),
            l && i.focus.set(_e41, _t48 + 2, "element"));
        }
        return t;
      };
      _proto4.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (io(), is(this, t));
        var n = this.getWritable(),
          r = t.getWritable(),
          o = r.__key;
        gi(r);
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
        var a = $r();
        if (e && Tr(a)) {
          Wr(a, this.getParentOrThrow(), c);
        }
        return t;
      };
      _proto4.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto4.createParentElementNode = function createParentElementNode() {
        return $o();
      };
      _proto4.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto4.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto4.selectPrevious = function selectPrevious(t, e) {
        io();
        var n = this.getPreviousSibling(),
          r = this.getParentOrThrow();
        if (null === n) return r.select(0, 0);
        if (Eo(n)) return n.select();
        if (!hr(n)) {
          var _t49 = n.getIndexWithinParent() + 1;
          return r.select(_t49, _t49);
        }
        return n.select(t, e);
      };
      _proto4.selectNext = function selectNext(t, e) {
        io();
        var n = this.getNextSibling(),
          r = this.getParentOrThrow();
        if (null === n) return r.select();
        if (Eo(n)) return n.select(0, 0);
        if (!hr(n)) {
          var _t50 = n.getIndexWithinParent();
          return r.select(_t50, _t50);
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
      return In;
    })();
    var Fn = "history-merge",
      Rn = "collaboration",
      Ln = "skip-scroll-into-view",
      Bn = "skip-dom-selection",
      Kn = "skip-selection-focus",
      $n = "composition-start",
      zn = "composition-end",
      Wn = /\s*!important\s*$/i;
    function Un(t) {
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
                      var _t51 = n.trim(),
                        _o17 = r.trim();
                      ("" !== _t51 && "" !== _o17 && (e[_t51] = _o17),
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
    function Yn(t, e, n) {
      var r = Wn.test(n) ? "important" : "",
        o = "" === r ? n : n.replace(Wn, "").trim();
      t.setProperty(e, o, r);
    }
    function jn(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var r = Un(n),
        o = Un(e);
      for (var _e42 in o) (delete r[_e42], Yn(t, _e42, o[_e42]));
      for (var _e43 in r) t.removeProperty(_e43);
    }
    var _Jn = (function (_In) {
      function Jn(t) {
        return _In.call(this, t) || this;
      }
      babelHelpers.inheritsLoose(Jn, _In);
      Jn.getType = function getType() {
        return "linebreak";
      };
      Jn.clone = function clone(t) {
        return new Jn(t.__key);
      };
      var _proto5 = Jn.prototype;
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
      Jn.importDOM = function importDOM() {
        return {
          br: function br(t) {
            return (function (t) {
              var e = t.parentElement;
              if (null !== e && ys(e)) {
                var _n31 = e.firstChild;
                if (_n31 === t || (_n31.nextSibling === t && qn(_n31))) {
                  var _n32 = e.lastChild;
                  if (_n32 === t || (_n32.previousSibling === t && qn(_n32)))
                    return !0;
                }
              }
              return !1;
            })(t) ||
              (function (t) {
                var e = t.parentElement;
                if (null !== e && ys(e)) {
                  var _n33 = e.firstChild;
                  if (_n33 === t || (_n33.nextSibling === t && qn(_n33)))
                    return !1;
                  var _r19 = e.lastChild;
                  if (_r19 === t || (_r19.previousSibling === t && qn(_r19)))
                    return !0;
                }
                return !1;
              })(t)
              ? null
              : { conversion: Gn, priority: 0 };
          },
        };
      };
      Jn.importJSON = function importJSON(t) {
        return Hn().updateFromJSON(t);
      };
      return Jn;
    })(_In5);
    function Gn(t) {
      return { node: Hn() };
    }
    function Hn() {
      return os(new _Jn());
    }
    function Vn(t) {
      return t instanceof _Jn;
    }
    function qn(t) {
      return ai(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    function Xn(t, e) {
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
    function Qn(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function Zn(t, e, n, r, o) {
      var i = r.classList;
      var s = zi(o, "base");
      (void 0 !== s && i.add.apply(i, s),
        (s = zi(o, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== s &&
        (8 & n && 4 & n
          ? ((l = !0), c || i.add.apply(i, s))
          : c && i.remove.apply(i, s));
      for (var _t52 in A) {
        var _r20 = A[_t52];
        if (((s = zi(o, _t52)), void 0 !== s))
          if (n & _r20) {
            if (l && ("underline" === _t52 || "strikethrough" === _t52)) {
              e & _r20 && i.remove.apply(i, s);
              continue;
            }
            (0 === (e & _r20) ||
              (c && "underline" === _t52) ||
              "strikethrough" === _t52) &&
              i.add.apply(i, s);
          } else e & _r20 && i.remove.apply(i, s);
      }
    }
    function tr(t, e, n) {
      var r = e.firstChild,
        o = n.isComposing(),
        s = t + (o ? T : "");
      if (null == r) e.textContent = s;
      else {
        var _t53 = r.nodeValue;
        if (_t53 !== s)
          if (o || i) {
            var _ref17 = (function (t, e) {
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
              })(_t53, s),
              _e44 = _ref17[0],
              _n34 = _ref17[1],
              _o18 = _ref17[2];
            (0 !== _n34 && r.deleteData(_e44, _n34), r.insertData(_e44, _o18));
          } else r.nodeValue = s;
      }
    }
    function er(t, e, n, r, o, i) {
      tr(o, t, e);
      var s = i.theme.text;
      void 0 !== s && Zn(0, 0, r, t, s);
    }
    function nr(t, e) {
      var n = document.createElement(e);
      return (n.appendChild(t), n);
    }
    var _rr2 = (function (_In2) {
      function rr(t, e) {
        var _this;
        if (t === void 0) {
          t = "";
        }
        ((_this = _In2.call(this, e) || this),
          (_this.__text = t),
          (_this.__format = 0),
          (_this.__style = ""),
          (_this.__mode = 0),
          (_this.__detail = 0));
        return _this;
      }
      babelHelpers.inheritsLoose(rr, _In2);
      rr.getType = function getType() {
        return "text";
      };
      rr.clone = function clone(t) {
        return new rr(t.__text, t.__key);
      };
      var _proto6 = rr.prototype;
      _proto6.afterCloneFrom = function afterCloneFrom(t) {
        (_In2.prototype.afterCloneFrom.call(this, t),
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
        return this.__key === yi();
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
        return fi(this.getLatest().__format, t, e);
      };
      _proto6.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto6.isInline = function isInline() {
        return !0;
      };
      _proto6.createDOM = function createDOM(t, e) {
        var n = this.__format,
          r = Xn(0, n),
          o = Qn(0, n),
          i = null === r ? o : r,
          s = document.createElement(i);
        var l = s;
        (this.hasFormat("code") && s.setAttribute("spellcheck", "false"),
          null !== r && ((l = document.createElement(o)), s.appendChild(l)));
        er(l, this, 0, n, this.__text, t);
        var c = this.__style;
        return ("" !== c && jn(s.style, c), s);
      };
      _proto6.updateDOM = function updateDOM(e, n, r) {
        var o = this.__text,
          i = e.__format,
          s = this.__format,
          l = Xn(0, i),
          c = Xn(0, s),
          a = Qn(0, i),
          u = Qn(0, s);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _e45 = n.firstChild;
          null == _e45 && t(48);
          var _i9 = document.createElement(u);
          return (er(_i9, this, 0, s, o, r), n.replaceChild(_i9, _e45), !1);
        }
        var d = n;
        (null !== c && null !== l && ((d = n.firstChild), null == d && t(49)),
          tr(o, d, this));
        var f = r.theme.text;
        void 0 !== f && i !== s && Zn(0, i, s, d, f);
        var h = e.__style,
          g = this.__style;
        return (h !== g && jn(n.style, g, h), !1);
      };
      rr.importDOM = function importDOM() {
        return {
          "#text": function text() {
            return { conversion: cr, priority: 0 };
          },
          b: function b() {
            return { conversion: ir, priority: 0 };
          },
          code: function code() {
            return { conversion: dr, priority: 0 };
          },
          em: function em() {
            return { conversion: dr, priority: 0 };
          },
          i: function i() {
            return { conversion: dr, priority: 0 };
          },
          mark: function mark() {
            return { conversion: dr, priority: 0 };
          },
          s: function s() {
            return { conversion: dr, priority: 0 };
          },
          span: function span() {
            return { conversion: or, priority: 0 };
          },
          strong: function strong() {
            return { conversion: dr, priority: 0 };
          },
          sub: function sub() {
            return { conversion: dr, priority: 0 };
          },
          sup: function sup() {
            return { conversion: dr, priority: 0 };
          },
          u: function u() {
            return { conversion: dr, priority: 0 };
          },
        };
      };
      rr.importJSON = function importJSON(t) {
        return fr().updateFromJSON(t);
      };
      _proto6.updateFromJSON = function updateFromJSON(t) {
        return _In2.prototype.updateFromJSON
          .call(this, t)
          .setTextContent(t.text)
          .setFormat(t.format)
          .setDetail(t.detail)
          .setMode(t.mode)
          .setStyle(t.style);
      };
      _proto6.exportDOM = function exportDOM(e) {
        var _In2$prototype$export = _In2.prototype.exportDOM.call(this, e),
          n = _In2$prototype$export.element;
        return (
          ds(n) || t(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = nr(n, "b")),
          this.hasFormat("italic") && (n = nr(n, "i")),
          this.hasFormat("strikethrough") && (n = nr(n, "s")),
          this.hasFormat("underline") && (n = nr(n, "u")),
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
          _In2.prototype.exportJSON.call(this),
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
        var e = fi(this.getFormat(), t, null);
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
        var e = I[t];
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
        io();
        var n = t,
          r = e;
        var o = $r(),
          i = this.getTextContent(),
          s = this.__key;
        if ("string" == typeof i) {
          var _t54 = i.length;
          (void 0 === n && (n = _t54), void 0 === r && (r = _t54));
        } else ((n = 0), (r = 0));
        if (!Tr(o)) return Rr(s, n, s, r, "text", "text");
        {
          var _t55 = yi();
          ((_t55 !== o.anchor.key && _t55 !== o.focus.key) || pi(s),
            o.setTextNodeRange(this, n, this, r));
        }
        return o;
      };
      _proto6.selectStart = function selectStart() {
        return this.select(0, 0);
      };
      _proto6.selectEnd = function selectEnd() {
        var t = this.getTextContentSize();
        return this.select(t, t);
      };
      _proto6.spliceText = function spliceText(t, e, n, r) {
        var o = this.getWritable(),
          i = o.__text,
          s = n.length;
        var l = t;
        l < 0 && ((l = s + l), l < 0 && (l = 0));
        var c = $r();
        if (r && Tr(c)) {
          var _e46 = t + s;
          c.setTextNodeRange(o, _e46, o, _e46);
        }
        var a = i.slice(0, l) + n + i.slice(l + e);
        return ((o.__text = a), o);
      };
      _proto6.canInsertTextBefore = function canInsertTextBefore() {
        return !0;
      };
      _proto6.canInsertTextAfter = function canInsertTextAfter() {
        return !0;
      };
      _proto6.splitText = function splitText() {
        io();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var r = e.__key,
          o = yi(),
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
        for (var _e47 = 0, _r21 = 0; _e47 < i && _r21 <= l; _r21++) {
          var _o19 = t[_r21];
          _o19 > _e47 && (s.push(n.slice(_e47, _o19)), (_e47 = _o19));
        }
        var c = s.length;
        if (1 === c) return [e];
        var a = s[0],
          u = e.getParent();
        var d;
        var f = e.getFormat(),
          h = e.getStyle(),
          g = e.__detail;
        var _ = !1,
          p = null,
          y = null;
        var m = $r();
        if (Tr(m)) {
          var _ref18 = m.isBackward()
              ? [m.focus, m.anchor]
              : [m.anchor, m.focus],
            _t56 = _ref18[0],
            _e48 = _ref18[1];
          ("text" === _t56.type && _t56.key === r && (p = _t56),
            "text" === _e48.type && _e48.key === r && (y = _e48));
        }
        e.isSegmented()
          ? ((d = fr(a)),
            (d.__format = f),
            (d.__style = h),
            (d.__detail = g),
            (d.__state = ct(e, d)),
            (_ = !0))
          : (d = e.setTextContent(a));
        var x = [d];
        for (var _t57 = 1; _t57 < c; _t57++) {
          var _n35 = fr(s[_t57]);
          ((_n35.__format = f),
            (_n35.__style = h),
            (_n35.__detail = g),
            (_n35.__state = ct(e, _n35)));
          var _i0 = _n35.__key;
          (o === r && pi(_i0), x.push(_n35));
        }
        var C = p ? p.offset : null,
          S = y ? y.offset : null;
        var N = 0;
        for (var _t58 of x) {
          if (!p && !y) break;
          var _e49 = N + _t58.getTextContentSize();
          if (
            (null !== p &&
              null !== C &&
              C <= _e49 &&
              C >= N &&
              (p.set(_t58.getKey(), C - N, "text"), C < _e49 && (p = null)),
            null !== y && null !== S && S <= _e49 && S >= N)
          ) {
            y.set(_t58.getKey(), S - N, "text");
            break;
          }
          N = _e49;
        }
        if (null !== u) {
          !(function (t) {
            var e = t.getPreviousSibling(),
              n = t.getNextSibling();
            null !== e && _i(e);
            null !== n && _i(n);
          })(this);
          var _t59 = u.getWritable(),
            _e50 = this.getIndexWithinParent();
          (_
            ? (_t59.splice(_e50, 0, x), this.remove())
            : _t59.splice(_e50, 1, x),
            Tr(m) && Wr(m, u, _e50, c - 1));
        }
        return x;
      };
      _proto6.mergeWithSibling = function mergeWithSibling(e) {
        var n = e === this.getPreviousSibling();
        n || e === this.getNextSibling() || t(50);
        var r = this.__key,
          o = e.__key,
          i = this.__text,
          s = i.length;
        yi() === o && pi(r);
        var l = $r();
        if (Tr(l)) {
          var _t60 = l.anchor,
            _i1 = l.focus;
          (null !== _t60 && _t60.key === o && jr(_t60, n, r, e, s),
            null !== _i1 && _i1.key === o && jr(_i1, n, r, e, s));
        }
        var c = e.__text,
          a = n ? c + i : i + c;
        this.setTextContent(a);
        var u = this.getWritable();
        return (e.remove(), u);
      };
      _proto6.isTextEntity = function isTextEntity() {
        return !1;
      };
      return rr;
    })(_In5);
    function or(t) {
      return { forChild: gr(t.style), node: null };
    }
    function ir(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: gr(e.style, n ? void 0 : "bold"), node: null };
    }
    var sr = new WeakMap();
    function lr(t) {
      if (!ds(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function cr(e) {
      var n = e;
      null === e.parentElement && t(129);
      var r = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var r = [t];
          for (; null !== n && void 0 === (e = sr.get(n)) && !lr(n); )
            (r.push(n), (n = n.parentNode));
          var o = void 0 === e ? n : e;
          for (var _t61 = 0; _t61 < r.length; _t61++) sr.set(r[_t61], o);
          return o;
        })(n)
      ) {
        var _t62 = r.split(/(\r?\n|\t)/),
          _e51 = [],
          _n36 = _t62.length;
        for (var _r22 = 0; _r22 < _n36; _r22++) {
          var _n37 = _t62[_r22];
          "\n" === _n37 || "\r\n" === _n37
            ? _e51.push(Hn())
            : "\t" === _n37
              ? _e51.push(pr())
              : "" !== _n37 && _e51.push(fr(_n37));
        }
        return { node: _e51 };
      }
      if (((r = r.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === r))
        return { node: null };
      if (" " === r[0]) {
        var _t63 = n,
          _e52 = !0;
        for (; null !== _t63 && null !== (_t63 = ar(_t63, !1)); ) {
          var _n38 = _t63.textContent || "";
          if (_n38.length > 0) {
            (/[ \t\n]$/.test(_n38) && (r = r.slice(1)), (_e52 = !1));
            break;
          }
        }
        _e52 && (r = r.slice(1));
      }
      if (" " === r[r.length - 1]) {
        var _t64 = n,
          _e53 = !0;
        for (; null !== _t64 && null !== (_t64 = ar(_t64, !0)); ) {
          if (
            (_t64.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e53 = !1;
            break;
          }
        }
        _e53 && (r = r.slice(0, r.length - 1));
      }
      return "" === r ? { node: null } : { node: fr(r) };
    }
    function ar(t, e) {
      var n = t;
      for (;;) {
        var _t65 = void 0;
        for (; null === (_t65 = e ? n.nextSibling : n.previousSibling); ) {
          var _t66 = n.parentElement;
          if (null === _t66) return null;
          n = _t66;
        }
        if (((n = _t65), ds(n))) {
          var _t67 = n.style.display;
          if (
            ("" === _t67 && !_s(n)) ||
            ("" !== _t67 && !_t67.startsWith("inline"))
          )
            return null;
        }
        var _r23 = n;
        for (; null !== (_r23 = e ? n.firstChild : n.lastChild); ) n = _r23;
        if (ai(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var ur = {
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
    function dr(t) {
      var e = ur[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: gr(t.style, e), node: null };
    }
    function fr(t) {
      if (t === void 0) {
        t = "";
      }
      return os(new _rr2(t));
    }
    function hr(t) {
      return t instanceof _rr2;
    }
    function gr(t, e) {
      var n = t.fontWeight,
        r = t.textDecoration.split(" "),
        o = "700" === n || "bold" === n,
        i = r.includes("line-through"),
        s = "italic" === t.fontStyle,
        l = r.includes("underline"),
        c = t.verticalAlign;
      return function (t) {
        return hr(t)
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
    var _r73 = (function (_rr) {
      function _r(t) {
        var _this2;
        ((_this2 = _rr.call(this, "\t", t) || this), (_this2.__detail = 2));
        return _this2;
      }
      babelHelpers.inheritsLoose(_r, _rr);
      _r.getType = function getType() {
        return "tab";
      };
      _r.clone = function clone(t) {
        return new _r(t.__key);
      };
      _r.importDOM = function importDOM() {
        return null;
      };
      var _proto7 = _r.prototype;
      _proto7.createDOM = function createDOM(t) {
        var e = _rr.prototype.createDOM.call(this, t),
          n = zi(t.theme, "tab");
        if (void 0 !== n) {
          var _e$classList;
          (_e$classList = e.classList).add.apply(_e$classList, n);
        }
        return e;
      };
      _r.importJSON = function importJSON(t) {
        return pr().updateFromJSON(t);
      };
      _proto7.setTextContent = function setTextContent(t) {
        return (
          "\t" !== t && "" !== t && e(126),
          _rr.prototype.setTextContent.call(this, "\t")
        );
      };
      _proto7.spliceText = function spliceText(e, n, r, o) {
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
      return _r;
    })(_rr2);
    function pr() {
      return os(new _r73());
    }
    function yr(t) {
      return t instanceof _r73;
    }
    var _mr = (function () {
      function mr(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto8 = mr.prototype;
      _proto8.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto8.isBefore = function isBefore(t) {
        if (this.key === t.key) return this.offset < t.offset;
        return sl(Cl(dl(this, "next")), Cl(dl(t, "next"))) < 0;
      };
      _proto8.getNode = function getNode() {
        var e = mi(this.key);
        return (null === e && t(20), e);
      };
      _proto8.set = function set(t, e, n, r) {
        var o = this._selection,
          i = this.key;
        (r && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          oo() ||
            (yi() === i && pi(t),
            null !== o &&
              (o.setCachedNodes(null),
              Tr(o) && (o._cachedIsBackward = null),
              (o.dirty = !0))));
      };
      return mr;
    })();
    function xr(t, e, n) {
      return new _mr(t, e, n);
    }
    function Cr(t, e) {
      var n = e.__key,
        r = t.offset,
        o = "element";
      if (hr(e)) {
        o = "text";
        var _t68 = e.getTextContentSize();
        r > _t68 && (r = _t68);
      } else if (!Eo(e)) {
        var _t69 = e.getNextSibling();
        if (hr(_t69)) ((n = _t69.__key), (r = 0), (o = "text"));
        else {
          var _t70 = e.getParent();
          _t70 && ((n = _t70.__key), (r = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, r, o);
    }
    function Sr(t, e) {
      if (Eo(e)) {
        var _n39 = e.getLastDescendant();
        Eo(_n39) || hr(_n39) ? Cr(t, _n39) : Cr(t, e);
      } else Cr(t, e);
    }
    var _Nr = (function () {
      function Nr(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto9 = Nr.prototype;
      _proto9.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto9.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto9.is = function is(t) {
        if (!Or(t)) return !1;
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
        return new Nr(new Set(this._nodes));
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
        var o;
        if (hr(r)) o = r.select();
        else {
          var _t71 = r.getIndexWithinParent() + 1;
          o = r.getParentOrThrow().select(_t71, _t71);
        }
        o.insertNodes(t);
        for (var _t72 = 0; _t72 < n; _t72++) e[_t72].remove();
      };
      _proto9.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = this._nodes,
          n = [];
        for (var _t73 of e) {
          var _e54 = mi(_t73);
          null !== _e54 && n.push(_e54);
        }
        return (oo() || (this._cachedNodes = n), n);
      };
      _proto9.getTextContent = function getTextContent() {
        var t = this.getNodes();
        var e = "";
        for (var _n40 = 0; _n40 < t.length; _n40++)
          e += t[_n40].getTextContent();
        return e;
      };
      _proto9.deleteNodes = function deleteNodes() {
        var t = this.getNodes();
        if (($r() || zr()) === this && t[0]) {
          var _e55 = Gs(t[0], "next");
          hl(ol(_e55, _e55));
        }
        for (var _e56 of t) _e56.remove();
      };
      return Nr;
    })();
    function Tr(t) {
      return t instanceof _vr;
    }
    var _vr = (function () {
      function vr(t, e, n, r) {
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
      var _proto0 = vr.prototype;
      _proto0.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto0.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto0.is = function is(t) {
        return (
          !!Tr(t) &&
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
          var o = new Set(),
            i = new Set();
          for (var _n41 of t)
            if (Us(_n41)) {
              var _t74 = _n41.origin;
              0 === e.length ? o.add(_t74) : (i.add(_t74), e.push(_t74));
            } else {
              var _t75 = _n41.origin;
              (Eo(_t75) && i.has(_t75)) || e.push(_t75);
            }
          r && e.push(r.caret.origin);
          if (
            Ws(t.focus) &&
            Eo(t.focus.origin) &&
            null === t.focus.getNodeAtCaret()
          )
            for (
              var _n42 = Xs(t.focus.origin, "previous");
              Us(_n42) &&
              o.has(_n42.origin) &&
              !_n42.origin.isEmpty() &&
              _n42.origin.is(e[e.length - 1]);
              _n42 = Zs(_n42)
            )
              (o["delete"](_n42.origin), e.pop());
          for (; e.length > 1; ) {
            var _t76 = e[e.length - 1];
            if (!Eo(_t76) || i.has(_t76) || _t76.isEmpty() || o.has(_t76))
              break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n43 = Cl(t.anchor),
              _r24 = Cl(t.anchor.getFlipped()),
              _o20 = function _o20(t) {
                return zs(t) ? t.origin : t.getNodeAtCaret();
              },
              _i10 =
                _o20(_n43) ||
                _o20(_r24) ||
                (t.anchor.getNodeAtCaret() ? _n43.origin : _r24.origin);
            e.push(_i10);
          }
          return e;
        })(Tl(_l(this), "next"));
        return (oo() || (this._cachedNodes = e), e);
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
          o = this.focus,
          i = r.isBefore(o),
          _Er = Er(this),
          s = _Er[0],
          l = _Er[1];
        var c = "",
          a = !0;
        for (var _u6 = 0; _u6 < t.length; _u6++) {
          var _d4 = t[_u6];
          if (Eo(_d4) && !_d4.isInline())
            (a || (c += "\n"), (a = !_d4.isEmpty()));
          else if (((a = !1), hr(_d4))) {
            var _t77 = _d4.getTextContent();
            (_d4 === e
              ? _d4 === n
                ? ("element" === r.type &&
                    "element" === o.type &&
                    o.offset !== r.offset) ||
                  (_t77 = s < l ? _t77.slice(s, l) : _t77.slice(l, s))
                : (_t77 = i ? _t77.slice(s) : _t77.slice(l))
              : _d4 === n && (_t77 = i ? _t77.slice(0, l) : _t77.slice(0, s)),
              (c += _t77));
          } else
            (!Ao(_d4) && !Vn(_d4)) ||
              (_d4 === n && this.isCollapsed()) ||
              (c += _d4.getTextContent());
        }
        return c;
      };
      _proto0.applyDOMRange = function applyDOMRange(t) {
        var e = co(),
          n = e.getEditorState()._selection,
          r = Ir(
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
          ft(this));
      };
      _proto0.clone = function clone() {
        var t = this.anchor,
          e = this.focus;
        return new vr(
          xr(t.key, t.offset, t.type),
          xr(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto0.toggleFormat = function toggleFormat(t) {
        ((this.format = fi(this.format, t, null)), (this.dirty = !0));
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
        for (var _t78 = 0; _t78 < r; _t78++) {
          var _r25 = e[_t78];
          "\n" === _r25 || "\r\n" === _r25
            ? n.push(Hn())
            : "\t" === _r25
              ? n.push(pr())
              : n.push(fr(_r25));
        }
        this.insertNodes(n);
      };
      _proto0.insertText = function insertText(e) {
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
                s = fr();
              if ((s.setFormat(n), s.setStyle(r), zo(i))) i.splice(0, 0, [s]);
              else {
                var _t79 = Do(o) ? $o().append(s) : s;
                null === i ? o.append(_t79) : i.insertBefore(_t79);
              }
              (t.is(e) && e.set(s.__key, 0, "text"), t.set(s.__key, 0, "text"));
            })(s, l, o, i),
          "element" === l.type && fl(l, Cl(dl(l, "next"))));
        var c = s.offset;
        var a = l.offset;
        var u = this.getNodes(),
          d = u.length;
        var f = u[0];
        hr(f) || t(26);
        var h = f.getTextContent().length,
          g = f.getParentOrThrow();
        var _ = u[d - 1];
        if (
          (1 === d &&
            "element" === l.type &&
            ((a = h), l.set(s.key, a, "text")),
          this.isCollapsed() &&
            c === h &&
            (ci(f) ||
              !f.canInsertTextAfter() ||
              (!g.canInsertTextAfter() && null === f.getNextSibling())))
        ) {
          var _t80 = f.getNextSibling();
          if (
            ((hr(_t80) && _t80.canInsertTextBefore() && !ci(_t80)) ||
              ((_t80 = fr()),
              _t80.setFormat(o),
              _t80.setStyle(i),
              g.canInsertTextAfter()
                ? f.insertAfter(_t80)
                : g.insertAfter(_t80)),
            _t80.select(0, 0),
            (f = _t80),
            "" !== e)
          )
            return void this.insertText(e);
        } else if (
          this.isCollapsed() &&
          0 === c &&
          (ci(f) ||
            !f.canInsertTextBefore() ||
            (!g.canInsertTextBefore() && null === f.getPreviousSibling()))
        ) {
          var _t81 = f.getPreviousSibling();
          if (
            ((hr(_t81) && !ci(_t81)) ||
              ((_t81 = fr()),
              _t81.setFormat(o),
              g.canInsertTextBefore()
                ? f.insertBefore(_t81)
                : g.insertBefore(_t81)),
            _t81.select(),
            (f = _t81),
            "" !== e)
          )
            return void this.insertText(e);
        } else if (f.isSegmented() && c !== h) {
          var _t82 = fr(f.getTextContent());
          (_t82.setFormat(o), f.replace(_t82), (f = _t82));
        } else if (!this.isCollapsed() && "" !== e) {
          var _t83 = _.getParent();
          if (
            !g.canInsertTextBefore() ||
            !g.canInsertTextAfter() ||
            (Eo(_t83) &&
              (!_t83.canInsertTextBefore() || !_t83.canInsertTextAfter()))
          )
            return (
              this.insertText(""),
              Pr(this.anchor, this.focus),
              void this.insertText(e)
            );
        }
        if (1 === d) {
          if (li(f)) {
            var _t84 = fr(e);
            return (_t84.select(), void f.replace(_t84));
          }
          var _t85 = f.getFormat(),
            _n44 = f.getStyle();
          if (c !== a || (_t85 === o && _n44 === i)) {
            if (yr(f)) {
              var _t86 = fr(e);
              return (
                _t86.setFormat(o),
                _t86.setStyle(i),
                _t86.select(),
                void f.replace(_t86)
              );
            }
          } else {
            if ("" !== f.getTextContent()) {
              var _t87 = fr(e);
              if ((_t87.setFormat(o), _t87.setStyle(i), _t87.select(), 0 === c))
                f.insertBefore(_t87, !1);
              else {
                var _f$splitText = f.splitText(c),
                  _e57 = _f$splitText[0];
                _e57.insertAfter(_t87, !1);
              }
              return void (
                _t87.isComposing() &&
                "text" === this.anchor.type &&
                ((this.anchor.offset -= e.length),
                (this._cachedNodes = null),
                (this._cachedIsBackward = null))
              );
            }
            (f.setFormat(o), f.setStyle(i));
          }
          var _r26 = a - c;
          ((f = f.spliceText(c, _r26, e, !0)),
            "" === f.getTextContent()
              ? f.remove()
              : "text" === this.anchor.type &&
                ((this.format = _t85),
                (this.style = _n44),
                f.isComposing() &&
                  ((this.anchor.offset -= e.length),
                  (this._cachedNodes = null),
                  (this._cachedIsBackward = null))));
        } else {
          var _t88 = new Set([].concat(f.getParentKeys(), _.getParentKeys())),
            _n45 = Eo(f) ? f : f.getParentOrThrow();
          var _r27 = Eo(_) ? _ : _.getParentOrThrow(),
            _o21 = _;
          if (!_n45.is(_r27) && _r27.isInline())
            do {
              ((_o21 = _r27), (_r27 = _r27.getParentOrThrow()));
            } while (_r27.isInline());
          if (
            ("text" === l.type && (0 !== a || "" === _.getTextContent())) ||
            ("element" === l.type && _.getIndexWithinParent() < a)
          ) {
            if (hr(_) && !li(_) && a !== _.getTextContentSize()) {
              if (_.isSegmented()) {
                var _t89 = fr(_.getTextContent());
                (_.replace(_t89), (_ = _t89));
              }
              (Do(l.getNode()) ||
                "text" !== l.type ||
                (_ = _.spliceText(0, a, "")),
                _t88.add(_.__key));
            } else {
              var _t90 = _.getParentOrThrow();
              _t90.canBeEmpty() || 1 !== _t90.getChildrenSize()
                ? _.remove()
                : _t90.remove();
            }
          } else _t88.add(_.__key);
          var _i11 = _r27.getChildren(),
            _s7 = new Set(u),
            _g4 = _n45.is(_r27),
            _p2 = _n45.isInline() && null === f.getNextSibling() ? _n45 : f;
          for (var _t91 = _i11.length - 1; _t91 >= 0; _t91--) {
            var _e58 = _i11[_t91];
            if (_e58.is(f) || (Eo(_e58) && _e58.isParentOf(f))) break;
            _e58.isAttached() &&
              (!_s7.has(_e58) || _e58.is(_o21)
                ? _g4 || _p2.insertAfter(_e58, !1)
                : _e58.remove());
          }
          if (!_g4) {
            var _e59 = _r27,
              _n46 = null;
            for (; null !== _e59; ) {
              var _r28 = _e59.getChildren(),
                _o22 = _r28.length;
              ((0 === _o22 || _r28[_o22 - 1].is(_n46)) &&
                (_t88["delete"](_e59.__key), (_n46 = _e59)),
                (_e59 = _e59.getParent()));
            }
          }
          if (li(f)) {
            if (c === h) f.select();
            else {
              var _t92 = fr(e);
              (_t92.select(), f.replace(_t92));
            }
          } else
            ((f = f.spliceText(c, h - c, e, !0)),
              "" === f.getTextContent()
                ? f.remove()
                : "text" === this.anchor.type &&
                  ((this.format = f.getFormat()),
                  (this.style = f.getStyle()),
                  f.isComposing() &&
                    ((this.anchor.offset -= e.length),
                    (this._cachedNodes = null),
                    (this._cachedIsBackward = null))));
          for (var _e60 = 1; _e60 < d; _e60++) {
            var _n47 = u[_e60],
              _r29 = _n47.__key;
            _t88.has(_r29) || _n47.remove();
          }
        }
      };
      _proto0.removeText = function removeText() {
        var t = $r() === this;
        (gl(this, xl(_l(this))), t && $r() !== this && ki(this));
      };
      _proto0.formatText = function formatText(t, e) {
        var _f$splitText2, _p$splitText;
        if (e === void 0) {
          e = null;
        }
        if (this.isCollapsed()) return (this.toggleFormat(t), void pi(null));
        var n = this.getNodes(),
          r = [];
        for (var _t93 of n) hr(_t93) && r.push(_t93);
        var o = function o(e) {
            n.forEach(function (n) {
              if (Eo(n)) {
                var _r30 = n.getFormatFlags(t, e);
                n.setTextFormat(_r30);
              }
            });
          },
          i = r.length;
        if (0 === i) return (this.toggleFormat(t), pi(null), void o(e));
        var s = this.anchor,
          l = this.focus,
          c = this.isBackward(),
          a = c ? l : s,
          u = c ? s : l;
        var d = 0,
          f = r[0],
          h = "element" === a.type ? 0 : a.offset;
        if (
          ("text" === a.type &&
            h === f.getTextContentSize() &&
            ((d = 1), (f = r[1]), (h = 0)),
          null == f)
        )
          return;
        var g = f.getFormatFlags(t, e);
        o(g);
        var _ = i - 1;
        var p = r[_];
        var y = "text" === u.type ? u.offset : p.getTextContentSize();
        if (f.is(p)) {
          if (h === y) return;
          if (ci(f) || (0 === h && y === f.getTextContentSize()))
            f.setFormat(g);
          else {
            var _t94 = f.splitText(h, y),
              _e61 = 0 === h ? _t94[0] : _t94[1];
            (_e61.setFormat(g),
              "text" === a.type && a.set(_e61.__key, 0, "text"),
              "text" === u.type && u.set(_e61.__key, y - h, "text"));
          }
          return void (this.format = g);
        }
        (0 === h ||
          ci(f) ||
          ((_f$splitText2 = f.splitText(h)), (f = _f$splitText2[1]), (h = 0)),
          f.setFormat(g));
        var m = p.getFormatFlags(t, g);
        y > 0 &&
          (y === p.getTextContentSize() ||
            ci(p) ||
            ((_p$splitText = p.splitText(y)),
            (p = _p$splitText[0]),
            _p$splitText),
          p.setFormat(m));
        for (var _e62 = d + 1; _e62 < _; _e62++) {
          var _n48 = r[_e62],
            _o23 = _n48.getFormatFlags(t, m);
          _n48.setFormat(_o23);
        }
        ("text" === a.type && a.set(f.__key, h, "text"),
          "text" === u.type && u.set(p.__key, y, "text"),
          (this.format = g | m));
      };
      _proto0.insertNodes = function insertNodes(e) {
        if (0 === e.length) return;
        if (
          (this.isCollapsed() || this.removeText(), "root" === this.anchor.key)
        ) {
          this.insertParagraph();
          var _n49 = $r();
          return (Tr(_n49) || t(134), _n49.insertNodes(e));
        }
        var n = (this.isBackward() ? this.focus : this.anchor).getNode(),
          r = ws(n, ms),
          o = e[e.length - 1];
        if (Eo(r) && "__language" in r) {
          if ("__language" in e[0]) this.insertText(e[0].getTextContent());
          else {
            var _t95 = Vr(this);
            (r.splice(_t95, 0, e), o.selectEnd());
          }
          return;
        }
        if (
          !e.some(function (t) {
            return (Eo(t) || Ao(t)) && !t.isInline();
          })
        ) {
          Eo(r) || t(211, n.constructor.name, n.getType());
          var _i12 = Vr(this);
          return (r.splice(_i12, 0, e), void o.selectEnd());
        }
        var i = (function (t) {
            var e = $o();
            var n = null;
            for (var _r31 = 0; _r31 < t.length; _r31++) {
              var _o24 = t[_r31],
                _i13 = Vn(_o24);
              if (
                _i13 ||
                (Ao(_o24) && _o24.isInline()) ||
                (Eo(_o24) && _o24.isInline()) ||
                hr(_o24) ||
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
          c = !Eo(r) || !r.isEmpty() ? this.insertParagraph() : null,
          a = l[l.length - 1];
        var u = l[0];
        var d;
        (Eo((d = u)) &&
          ms(d) &&
          !d.isEmpty() &&
          Eo(r) &&
          (!r.isEmpty() || r.canMergeWhenEmpty()) &&
          (Eo(r) || t(211, n.constructor.name, n.getType()),
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
              for (var _t96 of i) s = s.insertAfter(_t96);
            })(r, u)));
        var f = ws(s, ms);
        (c &&
          Eo(f) &&
          (c.canMergeWhenEmpty() || ms(a)) &&
          (f.append.apply(f, c.getChildren()), c.remove()),
          Eo(r) && r.isEmpty() && r.remove(),
          s.selectEnd());
        var h = Eo(r) ? r.getLastChild() : null;
        Vn(h) && f !== r && h.remove();
      };
      _proto0.insertParagraph = function insertParagraph() {
        if ("root" === this.anchor.key) {
          var _t97 = $o();
          return (
            vi().splice(this.anchor.offset, 0, [_t97]),
            _t97.select(),
            _t97
          );
        }
        var e = Vr(this),
          n = ws(this.anchor.getNode(), ms);
        Eo(n) || t(213);
        var r = n.getChildAtIndex(e),
          o = r ? [r].concat(r.getNextSiblings()) : [],
          i = n.insertNewAfter(this, !1);
        return i ? (i.append.apply(i, o), i.selectStart(), i) : null;
      };
      _proto0.insertLineBreak = function insertLineBreak(t) {
        var e = Hn();
        if ((this.insertNodes([e]), t)) {
          var _t98 = e.getParentOrThrow(),
            _n50 = e.getIndexWithinParent();
          _t98.select(_n50, _n50);
        }
      };
      _proto0.extract = function extract() {
        var _n$splitText;
        var t = [].concat(this.getNodes()),
          e = t.length;
        var n = t[0],
          r = t[e - 1];
        var _Er2 = Er(this),
          o = _Er2[0],
          i = _Er2[1],
          s = this.isBackward(),
          _ref19 = s ? [this.focus, this.anchor] : [this.anchor, this.focus],
          l = _ref19[0],
          c = _ref19[1],
          _ref20 = s ? [i, o] : [o, i],
          a = _ref20[0],
          u = _ref20[1];
        if (0 === e) return [];
        if (1 === e) {
          if (hr(n) && !this.isCollapsed()) {
            var _t99 = n.splitText(a, u),
              _e63 = 0 === a ? _t99[0] : _t99[1];
            return _e63
              ? (l.set(_e63.getKey(), 0, "text"),
                c.set(_e63.getKey(), _e63.getTextContentSize(), "text"),
                [_e63])
              : [];
          }
          return [n];
        }
        if (
          (hr(n) &&
            (a === n.getTextContentSize()
              ? t.shift()
              : 0 !== a &&
                ((_n$splitText = n.splitText(a)),
                (n = _n$splitText[1]),
                (t[0] = n),
                l.set(n.getKey(), 0, "text"))),
          hr(r))
        ) {
          var _r$splitText;
          var _e64 = r.getTextContent().length;
          0 === u
            ? t.pop()
            : u !== _e64 &&
              ((_r$splitText = r.splitText(u)),
              (r = _r$splitText[0]),
              (t[t.length - 1] = r),
              c.set(r.getKey(), r.getTextContentSize(), "text"));
        }
        return t;
      };
      _proto0.modify = function modify(t, e, n) {
        if (Xr(this, t, e, n)) return;
        var r = "move" === t,
          o = co(),
          i = as(ts(o));
        if (!i) return;
        var s = o._blockCursorElement,
          l = o._rootElement,
          c = this.focus.getNode();
        if (
          (null === l ||
            null === s ||
            !Eo(c) ||
            c.isInline() ||
            c.canBeEmpty() ||
            cs(s, o, l),
          this.dirty)
        ) {
          var _t100 = Gi(o, this.anchor.key),
            _e65 = Gi(o, this.focus.key);
          ("text" === this.anchor.type && (_t100 = di(_t100)),
            "text" === this.focus.type && (_e65 = di(_e65)),
            _t100 &&
              _e65 &&
              Jr(i, _t100, this.anchor.offset, _e65, this.focus.offset));
        }
        if (
          ((function (t, e, n, r) {
            t.modify(e, n, r);
          })(i, t, e ? "backward" : "forward", n),
          i.rangeCount > 0)
        ) {
          var _t101 = i.getRangeAt(0),
            _n51 = this.anchor.getNode(),
            _o25 = Do(_n51) ? _n51 : es(_n51);
          if ((this.applyDOMRange(_t101), (this.dirty = !0), !r)) {
            var _n52 = this.getNodes(),
              _r32 = [];
            var _s8 = !1;
            for (var _t102 = 0; _t102 < _n52.length; _t102++) {
              var _e66 = _n52[_t102];
              Qi(_e66, _o25) ? _r32.push(_e66) : (_s8 = !0);
            }
            if (_s8 && _r32.length > 0)
              if (e) {
                var _t103 = _r32[0];
                Eo(_t103)
                  ? _t103.selectStart()
                  : _t103.getParentOrThrow().selectStart();
              } else {
                var _t104 = _r32[_r32.length - 1];
                Eo(_t104)
                  ? _t104.selectEnd()
                  : _t104.getParentOrThrow().selectEnd();
              }
            (i.anchorNode === _t101.startContainer &&
              i.anchorOffset === _t101.startOffset) ||
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
        "lineboundary" === n && Xr(this, t, e, n, "decorators");
      };
      _proto0.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            Eo(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t105 = e.getParent(),
            _n53 =
              e.getNextSibling() ||
              (null === _t105 ? null : _t105.getNextSibling());
          if (Eo(_n53) && _n53.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto0.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e67 = this.anchor;
          var _n54 = _e67.getNode();
          if (this.forwardDeletion(_e67, _n54, t)) return;
          var _r33 = nl(dl(_e67, t ? "previous" : "next"));
          if (
            _r33.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            var _t106 = { type: "initial" };
            for (var _e68 of _r33.iterNodeCarets("shadowRoot"))
              if (Us(_e68)) {
                if (_e68.origin.isInline());
                else {
                  if (_e68.origin.isShadowRoot()) {
                    if ("merge-block" === _t106.type) break;
                    if (
                      Eo(_r33.anchor.origin) &&
                      _r33.anchor.origin.isEmpty()
                    ) {
                      var _t107 = Cl(_e68);
                      (gl(this, ol(_t107, _t107)), _r33.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t106.type &&
                    "merge-block" !== _t106.type) ||
                    (_t106 = {
                      block: _t106.block,
                      caret: _e68,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t106.type) break;
                if (Ws(_e68)) {
                  if (Eo(_e68.origin)) {
                    if (_e68.origin.isInline()) {
                      if (!_e68.origin.isParentOf(_r33.anchor.origin)) break;
                    } else
                      _t106 = { block: _e68.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (Ao(_e68.origin)) {
                    if (_e68.origin.isIsolated());
                    else if (
                      "merge-next-block" === _t106.type &&
                      (_e68.origin.isKeyboardSelectable() ||
                        !_e68.origin.isInline()) &&
                      Eo(_r33.anchor.origin) &&
                      _r33.anchor.origin.isEmpty()
                    ) {
                      _r33.anchor.origin.remove();
                      var _t108 = Br();
                      (_t108.add(_e68.origin.getKey()), ki(_t108));
                    } else _e68.origin.remove();
                    return;
                  }
                  break;
                }
              }
            if ("merge-block" === _t106.type) {
              var _t109 = _t106,
                _e69 = _t109.caret,
                _n55 = _t109.block;
              return (
                gl(
                  this,
                  ol(
                    !_e69.origin.isEmpty() && _n55.isEmpty()
                      ? pl(Gs(_n55, _e69.direction))
                      : _r33.anchor,
                    _e69,
                  ),
                ),
                this.removeText()
              );
            }
          }
          var _o26 = this.focus;
          if ((this.modify("extend", t, "character"), this.isCollapsed())) {
            if (t && 0 === _e67.offset && Mr(this, _e67.getNode())) return;
          } else {
            var _r34 = "text" === _o26.type ? _o26.getNode() : null;
            if (
              ((_n54 = "text" === _e67.type ? _e67.getNode() : null),
              null !== _r34 && _r34.isSegmented())
            ) {
              var _e70 = _o26.offset,
                _i14 = _r34.getTextContentSize();
              if (_r34.is(_n54) || (t && _e70 !== _i14) || (!t && 0 !== _e70))
                return void Ar(_r34, t, _e70);
            } else if (null !== _n54 && _n54.isSegmented()) {
              var _o27 = _e67.offset,
                _i15 = _n54.getTextContentSize();
              if (_n54.is(_r34) || (t && 0 !== _o27) || (!t && _o27 !== _i15))
                return void Ar(_n54, t, _o27);
            }
            !(function (t, e) {
              var n = t.anchor,
                r = t.focus,
                o = n.getNode(),
                i = r.getNode();
              if (o === i && "text" === n.type && "text" === r.type) {
                var _t110 = n.offset,
                  _i16 = r.offset,
                  _s9 = _t110 < _i16,
                  _l7 = _s9 ? _t110 : _i16,
                  _c5 = _s9 ? _i16 : _t110,
                  _a6 = _c5 - 1;
                if (_l7 !== _a6) {
                  (function (t) {
                    return !(Mi(t) || br(t));
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
          var _t111 = this.anchor.getNode();
          _t111.isEmpty() &&
            Do(_t111.getParent()) &&
            null === _t111.getPreviousSibling() &&
            Mr(this, _t111);
        }
      };
      _proto0.deleteLine = function deleteLine(t) {
        (this.isCollapsed() && this.modify("extend", t, "lineboundary"),
          this.isCollapsed() ? this.deleteCharacter(t) : this.removeText());
      };
      _proto0.deleteWord = function deleteWord(t) {
        if (this.isCollapsed()) {
          var _e71 = this.anchor,
            _n56 = _e71.getNode();
          if (this.forwardDeletion(_e71, _n56, t)) return;
          this.modify("extend", t, "word");
        }
        this.isCollapsed() ? this.deleteCharacter(t) : this.removeText();
      };
      _proto0.isBackward = function isBackward() {
        var t = this._cachedIsBackward;
        if (null !== t) return t;
        var e = this.focus.isBefore(this.anchor);
        return (oo() || (this._cachedIsBackward = e), e);
      };
      _proto0.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return vr;
    })();
    function Or(t) {
      return t instanceof _Nr;
    }
    function kr(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function Er(t) {
      var e = t.getStartEndPoints();
      if (null === e) return [0, 0];
      var n = e[0],
        r = e[1];
      return "element" === n.type &&
        "element" === r.type &&
        n.key === r.key &&
        n.offset === r.offset
        ? [0, 0]
        : [kr(n), kr(r)];
    }
    function Mr(t, e) {
      for (var _n57 = e; _n57; _n57 = _n57.getParent()) {
        if (Eo(_n57)) {
          if (_n57.collapseAtStart(t)) return !0;
          if (ns(_n57)) break;
        }
        if (_n57.getPreviousSibling()) break;
      }
      return !1;
    }
    var br = (function () {
      try {
        var _t112 = new RegExp("\\p{Emoji}", "u"),
          _e72 = _t112.test.bind(_t112);
        if (_e72("\u2764\ufe0f") && _e72("#\ufe0f\u20e3") && _e72("\u{1f44d}"))
          return _e72;
      } catch (t) {}
      return function () {
        return !1;
      };
    })();
    function Ar(t, e, n) {
      var r = t,
        o = r.getTextContent().split(/(?=\s)/g),
        i = o.length;
      var s = 0,
        l = 0;
      for (var _t113 = 0; _t113 < i; _t113++) {
        var _r35 = _t113 === i - 1;
        if (
          ((l = s), (s += o[_t113].length), (e && s === n) || s > n || _r35)
        ) {
          (o.splice(_t113, 1), _r35 && (l = void 0));
          break;
        }
      }
      var c = o.join("").trim();
      "" === c ? r.remove() : (r.setTextContent(c), r.select(l, l));
    }
    function wr(e, n, r, o) {
      var i,
        s = n;
      if (ds(e)) {
        var _l8 = !1;
        var _c6 = e.childNodes,
          _a7 = _c6.length,
          _u7 = o._blockCursorElement;
        s === _a7 && ((_l8 = !0), (s = _a7 - 1));
        var _d5 = _c6[s],
          _f5 = !1;
        if (_d5 === _u7) ((_d5 = _c6[s + 1]), (_f5 = !0));
        else if (null !== _u7) {
          var _t114 = _u7.parentNode;
          if (e === _t114) {
            n > Array.prototype.indexOf.call(_t114.children, _u7) && s--;
          }
        }
        if (((i = Ei(_d5)), hr(i))) s = Vs(i, _l8 ? "next" : "previous");
        else {
          var _c7 = Ei(e);
          if (null === _c7) return null;
          if (Eo(_c7)) {
            var _u8$resolveChildIndex;
            var _a8 = o.getElementByKey(_c7.getKey());
            null === _a8 && t(214);
            var _u8 = Cs(o).$getDOMSlot(_c7, _a8, o);
            ((_u8$resolveChildIndex = _u8.resolveChildIndex(_c7, _a8, e, n)),
              (_c7 = _u8$resolveChildIndex[0]),
              (s = _u8$resolveChildIndex[1]),
              Eo(_c7) || t(215),
              _l8 &&
                s >= _c7.getChildrenSize() &&
                (s = Math.max(0, _c7.getChildrenSize() - 1)));
            var _d6 = _c7.getChildAtIndex(s);
            if (
              Eo(_d6) &&
              (function (t, e, n) {
                var r = t.getParent();
                return (
                  null === n ||
                  null === r ||
                  !r.canBeEmpty() ||
                  r !== n.getNode()
                );
              })(_d6, 0, r)
            ) {
              var _t115 = _l8
                ? _d6.getLastDescendant()
                : _d6.getFirstDescendant();
              (null === _t115
                ? (_c7 = _d6)
                : ((_d6 = _t115),
                  (_c7 = Eo(_d6) ? _d6 : _d6.getParentOrThrow())),
                (s = 0));
            }
            hr(_d6)
              ? ((i = _d6),
                (_c7 = null),
                (s = Vs(_d6, _l8 ? "next" : "previous")))
              : _d6 !== _c7 &&
                _l8 &&
                !_f5 &&
                (Eo(_c7) || t(216),
                (s = Math.min(_c7.getChildrenSize(), s + 1)));
          } else {
            var _t116 = _c7.getIndexWithinParent();
            ((s = 0 === n && Ao(_c7) && Ei(e) === _c7 ? _t116 : _t116 + 1),
              (_c7 = _c7.getParentOrThrow()));
          }
          if (Eo(_c7)) return xr(_c7.__key, s, "element");
        }
      } else i = Ei(e);
      return hr(i) ? xr(i.__key, Vs(i, s, "clamp"), "text") : null;
    }
    function Dr(t, e, n) {
      var r = t.offset,
        o = t.getNode();
      if (0 === r) {
        var _r36 = o.getPreviousSibling(),
          _i17 = o.getParent();
        if (e) {
          if ((n || !e) && null === _r36 && Eo(_i17) && _i17.isInline()) {
            var _e73 = _i17.getPreviousSibling();
            hr(_e73) && t.set(_e73.__key, _e73.getTextContent().length, "text");
          }
        } else
          Eo(_r36) && !n && _r36.isInline()
            ? t.set(_r36.__key, _r36.getChildrenSize(), "element")
            : hr(_r36) &&
              t.set(_r36.__key, _r36.getTextContent().length, "text");
      } else if (r === o.getTextContent().length) {
        var _r37 = o.getNextSibling(),
          _i18 = o.getParent();
        if (e && Eo(_r37) && _r37.isInline()) t.set(_r37.__key, 0, "element");
        else if (
          (n || e) &&
          null === _r37 &&
          Eo(_i18) &&
          _i18.isInline() &&
          !_i18.canInsertTextAfter()
        ) {
          var _e74 = _i18.getNextSibling();
          hr(_e74) && t.set(_e74.__key, 0, "text");
        }
      }
    }
    function Pr(t, e, n) {
      if ("text" === t.type && "text" === e.type) {
        var _n58 = t.isBefore(e),
          _r38 = t.is(e);
        (Dr(t, _n58, _r38),
          Dr(e, !_n58, _r38),
          _r38 && e.set(t.key, t.offset, t.type));
      }
    }
    function Ir(t, e, n, r, o, i) {
      if (null === t || null === n || !ri(o, t, n)) return null;
      var s = wr(t, e, Tr(i) ? i.anchor : null, o);
      if (null === s) return null;
      var l = wr(n, r, Tr(i) ? i.focus : null, o);
      if (null === l) return null;
      if ("element" === s.type && "element" === l.type) {
        var _e75 = Ei(t),
          _r39 = Ei(n);
        if (Ao(_e75) && Ao(_r39)) return null;
      }
      return (Pr(s, l), [s, l]);
    }
    function Fr(t) {
      return Eo(t) && !t.isInline();
    }
    function Rr(t, e, n, r, o, i) {
      var s = lo(),
        l = new _vr(xr(t, e, o), xr(n, r, i), 0, "");
      return ((l.dirty = !0), (s._selection = l), l);
    }
    function Lr() {
      var t = xr("root", 0, "element"),
        e = xr("root", 0, "element");
      return new _vr(t, e, 0, "");
    }
    function Br() {
      return new _Nr(new Set());
    }
    function Kr(t, e, n, r) {
      var o = n._window;
      if (null === o) return null;
      var i = r || o.event,
        s = i ? i.type : void 0,
        l = "selectionchange" === s,
        c =
          !W &&
          (l ||
            "beforeinput" === s ||
            "compositionstart" === s ||
            "compositionend" === s ||
            ("click" === s && i && 3 === i.detail) ||
            "drop" === s ||
            void 0 === s);
      var a, u, d, f;
      if (Tr(t) && !c) return t.clone();
      if (null === e) return null;
      if (
        ((a = e.anchorNode),
        (u = e.focusNode),
        (d = e.anchorOffset),
        (f = e.focusOffset),
        (l || void 0 === s) && Tr(t) && !ri(n, a, u))
      )
        return t.clone();
      var h = Ir(a, d, u, f, n, t);
      if (null === h) return null;
      var g = h[0],
        _ = h[1];
      var p = 0,
        y = "";
      if (Tr(t)) {
        var _e76 = t.anchor;
        if (g.key === _e76.key) ((p = t.format), (y = t.style));
        else {
          var _t117 = g.getNode();
          hr(_t117)
            ? ((p = _t117.getFormat()), (y = _t117.getStyle()))
            : Eo(_t117) &&
              ((p = _t117.getTextFormat()), (y = _t117.getTextStyle()));
        }
      }
      return new _vr(g, _, p, y);
    }
    function $r() {
      return lo()._selection;
    }
    function zr() {
      return co()._editorState._selection;
    }
    function Wr(t, e, n, r) {
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
        var _e77 = o.offset;
        if ((n <= _e77 && r > 0) || (n < _e77 && r < 0)) {
          var _n59 = Math.max(0, _e77 + r);
          (o.set(c, _n59, "element"), i.set(c, _n59, "element"), Ur(t));
        }
      } else {
        var _s0 = t.isBackward(),
          _l9 = _s0 ? i : o,
          _a9 = _l9.getNode(),
          _u9 = _s0 ? o : i,
          _d7 = _u9.getNode();
        if (e.is(_a9)) {
          var _t118 = _l9.offset;
          ((n <= _t118 && r > 0) || (n < _t118 && r < 0)) &&
            _l9.set(c, Math.max(0, _t118 + r), "element");
        }
        if (e.is(_d7)) {
          var _t119 = _u9.offset;
          ((n <= _t119 && r > 0) || (n < _t119 && r < 0)) &&
            _u9.set(c, Math.max(0, _t119 + r), "element");
        }
      }
      Ur(t);
    }
    function Ur(t) {
      var e = t.anchor,
        n = e.offset,
        r = t.focus,
        o = r.offset,
        i = e.getNode(),
        s = r.getNode();
      if (t.isCollapsed()) {
        if (!Eo(i)) return;
        var _t120 = i.getChildrenSize(),
          _o28 = n >= _t120,
          _s1 = _o28 ? i.getChildAtIndex(_t120 - 1) : i.getChildAtIndex(n);
        if (hr(_s1)) {
          var _t121 = 0;
          (_o28 && (_t121 = _s1.getTextContentSize()),
            e.set(_s1.__key, _t121, "text"),
            r.set(_s1.__key, _t121, "text"));
        }
        return;
      }
      if (Eo(i)) {
        var _t122 = i.getChildrenSize(),
          _r40 = n >= _t122,
          _o29 = _r40 ? i.getChildAtIndex(_t122 - 1) : i.getChildAtIndex(n);
        if (hr(_o29)) {
          var _t123 = 0;
          (_r40 && (_t123 = _o29.getTextContentSize()),
            e.set(_o29.__key, _t123, "text"));
        }
      }
      if (Eo(s)) {
        var _t124 = s.getChildrenSize(),
          _e78 = o >= _t124,
          _n60 = _e78 ? s.getChildAtIndex(_t124 - 1) : s.getChildAtIndex(o);
        if (hr(_n60)) {
          var _t125 = 0;
          (_e78 && (_t125 = _n60.getTextContentSize()),
            r.set(_n60.__key, _t125, "text"));
        }
      }
    }
    function Yr(t, e, n, r, o) {
      var i = null,
        s = 0,
        l = null;
      (null !== r
        ? ((i = r.__key),
          hr(r)
            ? ((s = r.getTextContentSize()), (l = "text"))
            : Eo(r) && ((s = r.getChildrenSize()), (l = "element")))
        : null !== o &&
          ((i = o.__key), hr(o) ? (l = "text") : Eo(o) && (l = "element")),
        null !== i && null !== l
          ? t.set(i, s, l)
          : ((s = e.getIndexWithinParent()),
            -1 === s && (s = n.getChildrenSize()),
            t.set(n.__key, s, "element")));
    }
    function jr(t, e, n, r, o) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : o), "text")
        : t.offset > r.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function Jr(t, e, n, r, o) {
      try {
        t.setBaseAndExtent(e, n, r, o);
      } catch (t) {}
    }
    function Gr(t, e, n) {
      var r = Gi(t, e.getKey());
      if (Eo(e)) {
        var _o30 = Cs(t).$getDOMSlot(e, r, t);
        return [_o30.element, n + _o30.getFirstChildOffset()];
      }
      return [r, n];
    }
    function Hr(t, e, n, r, o, s, l) {
      var c = document.activeElement;
      if ((o.has(Rn) && c !== s) || (null !== c && ni(c))) return;
      if (!Tr(e))
        return void (
          null !== t &&
          ri(n, r.anchorNode, r.focusNode) &&
          r.removeAllRanges()
        );
      var a = e.anchor,
        u = e.focus,
        d = a.getNode(),
        f = u.getNode(),
        _Gr = Gr(n, d, a.offset),
        h = _Gr[0],
        g = _Gr[1],
        _Gr2 = Gr(n, f, u.offset),
        _ = _Gr2[0],
        p = _Gr2[1],
        y = e.format,
        m = e.style,
        x = e.isCollapsed();
      var C = h,
        S = _,
        N = !1;
      var T, v, O, k, E;
      if (
        ("text" === a.type
          ? ((C = di(h)), (N = d.getFormat() !== y || d.getStyle() !== m))
          : Tr(t) && "text" === t.anchor.type && (N = !0),
        "text" === u.type && (S = di(_)),
        null !== C && null !== S) &&
        (x &&
          (null === t || N || (Tr(t) && (t.format !== y || t.style !== m))) &&
          ((T = y),
          (v = m),
          (O = g),
          (k = a.key),
          (E = performance.now()),
          (cn = [T, v, O, k, E])),
        ("Range" === r.type && x) ||
          r.anchorOffset !== g ||
          r.focusOffset !== p ||
          r.anchorNode !== C ||
          r.focusNode !== S ||
          ((null !== c && s.contains(c)) ||
            o.has(Kn) ||
            s.focus({ preventScroll: !0 }),
          "element" === a.type))
      ) {
        if (
          (Jr(r, C, g, S, p),
          !i ||
            !e.isCollapsed() ||
            null === s ||
            o.has(Kn) ||
            (null !== document.activeElement &&
              s.contains(document.activeElement)) ||
            s.focus({ preventScroll: !0 }),
          !o.has(Ln) &&
            e.isCollapsed() &&
            null !== s &&
            s === document.activeElement)
        ) {
          var _t126 =
            Tr(e) && "element" === e.anchor.type
              ? C.childNodes[g] || null
              : r.rangeCount > 0
                ? r.getRangeAt(0)
                : null;
          if (null !== _t126) {
            var _e79;
            if (_t126 instanceof Text) {
              var _n61 = document.createRange();
              (_n61.selectNode(_t126), (_e79 = _n61.getBoundingClientRect()));
            } else _e79 = _t126.getBoundingClientRect();
            !(function (t, e, n) {
              var r = Vi(n),
                o = Zi(r);
              if (null === r || null === o) return;
              var i = e.top,
                s = e.bottom,
                l = 0,
                c = 0,
                a = n;
              for (; null !== a; ) {
                var _e80 = a === r.body;
                if (_e80) {
                  var _e81 = o.visualViewport;
                  if (_e81) {
                    var _t127 = _e81.offsetTop;
                    ((l = _t127), (c = _t127 + _e81.height));
                  } else ((l = 0), (c = ts(t).innerHeight));
                  var _n62 = o.getComputedStyle(r.documentElement),
                    _i19 = parseFloat(_n62.scrollPaddingTop),
                    _s10 = parseFloat(_n62.scrollPaddingBottom);
                  (isFinite(_i19) && (l += _i19),
                    isFinite(_s10) && (c -= _s10));
                } else {
                  var _t128 = a.getBoundingClientRect();
                  ((l = _t128.top), (c = _t128.bottom));
                }
                var _n63 = 0;
                if (
                  (i < l ? (_n63 = -(l - i)) : s > c && (_n63 = s - c),
                  0 !== _n63)
                )
                  if (_e80) o.scrollBy(0, _n63);
                  else {
                    var _t129 = a.scrollTop;
                    a.scrollTop += _n63;
                    var _e82 = a.scrollTop - _t129;
                    ((i -= _e82), (s -= _e82));
                  }
                if (_e80) break;
                a = Hi(a);
              }
            })(n, _e79, s);
          }
        }
        tn = !0;
      }
    }
    function Vr(e) {
      var n = e;
      e.isCollapsed() || n.removeText();
      var r = $r();
      (Tr(r) && (n = r), Tr(n) || t(161));
      var o = n.anchor;
      var i = o.getNode(),
        s = o.offset;
      for (; !ms(i); ) {
        var _qr;
        var _t130 = i;
        if (((_qr = qr(i, s)), (i = _qr[0]), (s = _qr[1]), _t130.is(i))) break;
      }
      return s;
    }
    function qr(t, e) {
      var n = t.getParent();
      if (!n) {
        var _t131 = $o();
        return (vi().append(_t131), _t131.select(), [vi(), 0]);
      }
      if (hr(t)) {
        var _r41 = t.splitText(e);
        if (0 === _r41.length) return [n, t.getIndexWithinParent()];
        var _o31 = 0 === e ? 0 : 1;
        return [n, _r41[0].getIndexWithinParent() + _o31];
      }
      if (!Eo(t) || 0 === e) return [n, t.getIndexWithinParent()];
      var r = t.getChildAtIndex(e);
      if (r) {
        var _n64 = new _vr(
            xr(t.__key, e, "element"),
            xr(t.__key, e, "element"),
            0,
            "",
          ),
          _o32 = t.insertNewAfter(_n64);
        _o32 && _o32.append.apply(_o32, [r].concat(r.getNextSiblings()));
      }
      return [n, t.getIndexWithinParent() + 1];
    }
    function Xr(t, e, n, r, o) {
      if (o === void 0) {
        o = "decorators-and-blocks";
      }
      if ("move" === e && "character" === r && !t.isCollapsed()) {
        var _ref21 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e83 = _ref21[0],
          _r42 = _ref21[1];
        return (_r42.set(_e83.key, _e83.offset, _e83.type), !0);
      }
      var i = dl(t.focus, n ? "previous" : "next"),
        s = "lineboundary" === r,
        l = "move" === e;
      var c = i,
        a = "decorators-and-blocks" === o;
      if (!Sl(c)) {
        for (var _t132 of c) {
          a = !1;
          var _e84 = _t132.origin;
          if (
            !Ao(_e84) ||
            _e84.isIsolated() ||
            ((c = _t132), !s || !_e84.isInline())
          )
            break;
        }
        if (a)
          for (var _t133 of nl(i).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (Us(_t133)) _t133.origin.isInline() || (c = _t133);
            else {
              if (Eo(_t133.origin)) continue;
              Ao(_t133.origin) && !_t133.origin.isInline() && (c = _t133);
            }
            break;
          }
      }
      if (c === i) return !1;
      if (l && !s && Ao(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t134 = Br();
        return (_t134.add(c.origin.getKey()), ki(_t134), !0);
      }
      return ((c = Cl(c)), l && fl(t.anchor, c), fl(t.focus, c), a || !s);
    }
    var Qr = null,
      Zr = null,
      to = !1,
      eo = !1,
      no = 0;
    var ro = { characterData: !0, childList: !0, subtree: !0 };
    function oo() {
      return to || (null !== Qr && Qr._readOnly);
    }
    function io() {
      to && t(13);
    }
    function so() {
      no > 99 && t(14);
    }
    function lo() {
      return (null === Qr && t(195, ao()), Qr);
    }
    function co() {
      return (null === Zr && t(337, ao()), Zr);
    }
    function ao() {
      var t = 0;
      var e = new Set(),
        n = _Ho.version;
      if ("undefined" != typeof window)
        for (var _r43 of document.querySelectorAll("[contenteditable]")) {
          var _o33 = si(_r43);
          if (oi(_o33)) t++;
          else if (_o33) {
            var _t135 = String(_o33.constructor.version || "<0.17.1");
            (_t135 === n &&
              (_t135 +=
                " (separately built, likely a bundler configuration issue)"),
              e.add(_t135));
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
    function uo() {
      return Zr;
    }
    function fo(t, e, n) {
      var r = e.__type,
        o = Qo(t, r);
      var i = n.get(r);
      void 0 === i && ((i = Array.from(o.transforms)), n.set(r, i));
      var s = i.length;
      for (var _t136 = 0; _t136 < s && (i[_t136](e), e.isAttached()); _t136++);
    }
    function ho(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function go(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var r = e;
      Array.isArray(e) || (r = [e]);
      for (var _t137 of r) n.add(_t137);
    }
    function _o(e, n) {
      var r = e.type,
        o = n.get(r);
      void 0 === o && t(17, r);
      var i = o.klass;
      e.type !== i.getType() && t(18, i.name);
      var s = i.importJSON(e),
        l = e.children;
      if (Eo(s) && Array.isArray(l))
        for (var _t138 = 0; _t138 < l.length; _t138++) {
          var _e85 = _o(l[_t138], n);
          s.append(_e85);
        }
      return s;
    }
    function po(t, e, n) {
      var r = Qr,
        o = to,
        i = Zr;
      ((Qr = e), (to = !0), (Zr = t));
      try {
        return n();
      } finally {
        ((Qr = r), (to = o), (Zr = i));
      }
    }
    function yo(t, e) {
      var n = t._pendingEditorState,
        r = t._rootElement,
        o = t._headless || null === r;
      if (null === n)
        return void (t._deferred.length > 0 && Co(t, t._deferred));
      var i = t._editorState,
        s = i._selection,
        l = n._selection,
        c = 0 !== t._dirtyType,
        a = Qr,
        u = to,
        d = Zr,
        f = t._updating,
        h = t._observer;
      var g = null;
      if (
        ((t._pendingEditorState = null),
        (t._editorState = n),
        !o && c && null !== h)
      ) {
        ((Zr = t), (Qr = n), (to = !1), (t._updating = !0));
        try {
          var _e86 = t._dirtyType,
            _r44 = t._dirtyElements,
            _o34 = t._dirtyLeaves;
          (h.disconnect(), (g = Jt(i, n, t, _e86, _r44, _o34)));
        } catch (e) {
          if ((e instanceof Error && t._onError(e), eo)) throw e;
          return (
            Uo(t, null, r, n),
            X(t),
            (t._dirtyType = 2),
            (eo = !0),
            yo(t, i),
            void (eo = !1)
          );
        } finally {
          (h.observe(r, ro), (t._updating = f), (Qr = a), (to = u), (Zr = d));
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
          for (i in r) o.has(i) || (r === n && (r = Ni(t)), delete r[i]);
        })(t, n));
      var C = o ? null : as(ts(t));
      if (
        t._editable &&
        null !== C &&
        (c || null === l || l.dirty || !l.is(s)) &&
        null !== r &&
        !m.has(Bn)
      ) {
        ((Zr = t), (Qr = n));
        try {
          if ((null !== h && h.disconnect(), c || null === l || l.dirty)) {
            var _e87 = t._blockCursorElement;
            (null !== _e87 && cs(_e87, t, r), Hr(s, l, t, C, m, r));
          }
          !(function (t, e, n) {
            var r = t._blockCursorElement;
            if (
              Tr(n) &&
              n.isCollapsed() &&
              "element" === n.anchor.type &&
              e.contains(document.activeElement)
            ) {
              var _o35 = n.anchor,
                _i20 = _o35.getNode(),
                _s11 = _o35.offset;
              var _l0 = !1,
                _c8 = null;
              if (_s11 === _i20.getChildrenSize()) {
                ls(_i20.getChildAtIndex(_s11 - 1)) && (_l0 = !0);
              } else {
                var _e88 = _i20.getChildAtIndex(_s11);
                if (null !== _e88 && ls(_e88)) {
                  var _n65 = _e88.getPreviousSibling();
                  (null === _n65 || ls(_n65)) &&
                    ((_l0 = !0), (_c8 = t.getElementByKey(_e88.__key)));
                }
              }
              if (_l0) {
                var _n66 = t.getElementByKey(_i20.__key);
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
                            var _t139 = El(r);
                            r = e.blockCursor = _t139;
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
                    ? _n66.appendChild(r)
                    : _n66.insertBefore(r, _c8))
                );
              }
            }
            null !== r && cs(r, t, e);
          })(t, r, l);
        } finally {
          (null !== h && h.observe(r, ro), (Zr = d), (Qr = a));
        }
      }
      (null !== g &&
        (function (t, e, n, r, o) {
          var i = Array.from(t._listeners.mutation),
            s = i.length;
          for (var _t140 = 0; _t140 < s; _t140++) {
            var _i$_t = i[_t140],
              _s12 = _i$_t[0],
              _l1 = _i$_t[1];
            for (var _t141 of _l1) {
              var _i21 = e.get(_t141);
              void 0 !== _i21 &&
                _s12(_i21, {
                  dirtyLeaves: r,
                  prevEditorState: o,
                  updateTags: n,
                });
            }
          }
        })(t, g, m, _, i),
        Tr(l) ||
          null === l ||
          (null !== s && s.is(l)) ||
          t.dispatchCommand(Vt, void 0));
      var S = t._pendingDecorators;
      (null !== S &&
        ((t._decorators = S),
        (t._pendingDecorators = null),
        mo("decorator", t, !0, S)),
        (function (t, e, n) {
          var r = Ti(e),
            o = Ti(n);
          r !== o && mo("textcontent", t, !0, o);
        })(t, e || i, n),
        mo("update", t, !0, {
          dirtyElements: p,
          dirtyLeaves: _,
          editorState: n,
          mutatedNodes: g,
          normalizedNodes: y,
          prevEditorState: e || i,
          tags: m,
        }),
        Co(t, x),
        (function (t) {
          var e = t._updates;
          if (0 !== e.length) {
            var _n67 = e.shift();
            if (_n67) {
              var _e89 = _n67[0],
                _r45 = _n67[1];
              No(t, _e89, _r45);
            }
          }
        })(t));
    }
    function mo(t, e, n) {
      var o = e._updating;
      e._updating = n;
      try {
        var _n68 = e._listeners[t],
          _o36 = Array.from(_n68);
        for (
          var _len4 = arguments.length,
            r = new Array(_len4 > 3 ? _len4 - 3 : 0),
            _key4 = 3;
          _key4 < _len4;
          _key4++
        ) {
          r[_key4 - 3] = arguments[_key4];
        }
        for (var _ref23 of _o36) {
          var _t142 = _ref23[0];
          var _e90 = _ref23[1];
          {
            _e90 && _e90();
            var _o37 = _t142.apply(void 0, r);
            _n68.has(_t142) ? _n68.set(_t142, _o37) : _o37 && _o37();
          }
        }
      } finally {
        e._updating = o;
      }
    }
    function xo(t, e, n, r) {
      var o = bi(t);
      var i;
      for (var _t143 = 4; _t143 >= 0; _t143--) {
        var _loop = function _loop() {
            var l = o[_s13];
            if (_s13 > 0 && l._updating) {
              i = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e91 = c[_t143];
              if (_e91.size > 0) {
                var _t144 = !1;
                if (
                  (To(l, function () {
                    for (var _o38 of _e91)
                      if (_o38(n, r)) return void (_t144 = !0);
                  }),
                  _t144)
                )
                  return { v: _t144 };
              }
            }
          },
          _ret;
        for (var _s13 = 0; _s13 < o.length; _s13++) {
          _ret = _loop();
          if (_ret === 0) break;
          if (_ret) return _ret.v;
        }
      }
      return (
        i &&
          i.update(function () {
            xo(i, e, n, r);
          }),
        !1
      );
    }
    function Co(t, e) {
      if (((t._deferred = []), 0 !== e.length)) {
        var _n69 = t._updating;
        t._updating = !0;
        try {
          for (var _t145 = 0; _t145 < e.length; _t145++) e[_t145]();
        } finally {
          t._updating = _n69;
        }
      }
    }
    function So(e, n) {
      var r = e._updates;
      var o = n || !1;
      for (; 0 !== r.length; ) {
        var _n70 = r.shift();
        if (_n70) {
          var _r46 = _n70[0],
            _i22 = _n70[1],
            _s14 = e._pendingEditorState;
          var _l10 = void 0;
          (void 0 !== _i22 &&
            ((_l10 = _i22.onUpdate),
            _i22.skipTransforms && (o = !0),
            _i22.discrete && (null === _s14 && t(191), (_s14._flushSync = !0)),
            _l10 && e._deferred.push(_l10),
            go(e, _i22.tag)),
            null == _s14 ? No(e, _r46, _i22) : _r46());
        }
      }
      return o;
    }
    function No(e, n, r) {
      var o = e._updateTags;
      var i,
        s = !1,
        l = !1;
      (void 0 !== r &&
        ((i = r.onUpdate),
        go(e, r.tag),
        (s = r.skipTransforms || !1),
        (l = r.discrete || !1)),
        i && e._deferred.push(i));
      var c = e._editorState;
      var a = e._pendingEditorState,
        u = !1;
      ((null === a || a._readOnly) &&
        ((a = e._pendingEditorState = Po(a || c)), (u = !0)),
        (a._flushSync = l));
      var d = Qr,
        f = to,
        h = Zr,
        g = e._updating;
      ((Qr = a), (to = !1), (e._updating = !0), (Zr = e));
      var _ = e._headless || null === e.getRootElement();
      qo(null);
      try {
        u &&
          (_
            ? null !== c._selection && (a._selection = c._selection.clone())
            : (a._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  r = as(ts(t));
                return Tr(n) || null == n ? Kr(n, r, t, e) : n.clone();
              })(e, (r && r.event) || null)));
        var _o39 = e._compositionKey;
        (n(),
          (s = So(e, s)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              r = t._selection;
            if (Tr(r)) {
              var _t146 = r.anchor,
                _e92 = r.focus;
              var _o40;
              if (
                ("text" === _t146.type &&
                  ((_o40 = _t146.getNode()), _o40.selectionTransform(n, r)),
                "text" === _e92.type)
              ) {
                var _t147 = _e92.getNode();
                _o40 !== _t147 && _t147.selectionTransform(n, r);
              }
            }
          })(a, e),
          0 !== e._dirtyType &&
            (s
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    r = t._nodeMap;
                  for (var _t148 of n) {
                    var _e93 = r.get(_t148);
                    hr(_e93) &&
                      _e93.isAttached() &&
                      _e93.isSimpleText() &&
                      !_e93.isUnmergeable() &&
                      dt(_e93);
                  }
                })(a, e)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    r = e._dirtyElements,
                    o = t._nodeMap,
                    i = yi(),
                    s = new Map();
                  var l = n,
                    c = l.size,
                    a = r,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t149 of l) {
                        var _r47 = o.get(_t149);
                        (hr(_r47) &&
                          _r47.isAttached() &&
                          _r47.isSimpleText() &&
                          !_r47.isUnmergeable() &&
                          dt(_r47),
                          void 0 !== _r47 && ho(_r47, i) && fo(e, _r47, s),
                          n.add(_t149));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        no++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t150 of a) {
                      var _n71 = _t150[0],
                        _l11 = _t150[1];
                      if ((r.set(_n71, _l11), !_l11)) continue;
                      var _c9 = o.get(_n71);
                      void 0 !== _c9 && ho(_c9, i) && fo(e, _c9, s);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      no++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = r));
                })(a, e),
            So(e),
            (function (t, e, n, r) {
              var o = t._nodeMap,
                i = e._nodeMap,
                s = [];
              for (var _ref25 of r) {
                var _t151 = _ref25[0];
                {
                  var _e94 = i.get(_t151);
                  void 0 !== _e94 &&
                    (_e94.isAttached() ||
                      (Eo(_e94) && z(_e94, _t151, o, i, s, r),
                      o.has(_t151) || r["delete"](_t151),
                      s.push(_t151)));
                }
              }
              for (var _t152 of s) i["delete"](_t152);
              for (var _t153 of n) {
                var _e95 = i.get(_t153);
                void 0 === _e95 ||
                  _e95.isAttached() ||
                  (o.has(_t153) || n["delete"](_t153), i["delete"](_t153));
              }
            })(c, a, e._dirtyLeaves, e._dirtyElements)));
        _o39 !== e._compositionKey && (a._flushSync = !0);
        var _i23 = a._selection;
        if (Tr(_i23)) {
          var _e96 = a._nodeMap,
            _n72 = _i23.anchor.key,
            _r48 = _i23.focus.key;
          (void 0 !== _e96.get(_n72) && void 0 !== _e96.get(_r48)) || t(19);
        } else Or(_i23) && 0 === _i23._nodes.size && (a._selection = null);
      } catch (t) {
        return (
          t instanceof Error && e._onError(t),
          (e._pendingEditorState = c),
          (e._dirtyType = 2),
          e._cloneNotNeeded.clear(),
          (e._dirtyLeaves = new Set()),
          e._dirtyElements.clear(),
          void yo(e)
        );
      } finally {
        ((Qr = d), (to = f), (Zr = h), (e._updating = g), (no = 0));
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
          ? ((a._flushSync = !1), yo(e))
          : u &&
            ti(function () {
              yo(e);
            })
        : ((a._flushSync = !1),
          u && (o.clear(), (e._deferred = []), (e._pendingEditorState = null)));
    }
    function To(t, e, n) {
      Zr === t && void 0 === n ? e() : No(t, e, n);
    }
    var _vo = (function () {
      function vo(t, e, n) {
        ((this.element = t),
          (this.before = e || null),
          (this.after = n || null));
      }
      var _proto1 = vo.prototype;
      _proto1.withBefore = function withBefore(t) {
        return new vo(this.element, t, this.after);
      };
      _proto1.withAfter = function withAfter(t) {
        return new vo(this.element, this.before, t);
      };
      _proto1.withElement = function withElement(t) {
        return this.element === t ? this : new vo(t, this.before, this.after);
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
          var _e97 = "decorator" === t && (f || l || a);
          this.insertManagedLineBreak(_e97);
        }
      };
      _proto1.removeManagedLineBreak = function removeManagedLineBreak() {
        var t = this.getManagedLineBreak();
        if (t) {
          var _e98 = this.element,
            _n73 = "IMG" === t.nodeName ? t.nextSibling : null;
          (_n73 && _e98.removeChild(_n73),
            _e98.removeChild(t),
            (_e98.__lexicalLineBreak = void 0));
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
          o = document.createElement("br");
        if ((n.insertBefore(o, r), t)) {
          var _t154 = document.createElement("img");
          (_t154.setAttribute("data-lexical-linebreak", "true"),
            _t154.style.setProperty("display", "inline", "important"),
            _t154.style.setProperty("border", "0px", "important"),
            _t154.style.setProperty("margin", "0px", "important"),
            (_t154.alt = ""),
            n.insertBefore(_t154, o),
            (n.__lexicalLineBreak = _t154));
        } else n.__lexicalLineBreak = o;
      };
      _proto1.getFirstChildOffset = function getFirstChildOffset() {
        var t = 0;
        for (var _e99 = this.after; null !== _e99; _e99 = _e99.previousSibling)
          t++;
        return t;
      };
      _proto1.resolveChildIndex = function resolveChildIndex(t, e, n, r) {
        if (n === this.element) {
          var _e100 = this.getFirstChildOffset();
          return [t, Math.min(_e100 + t.getChildrenSize(), Math.max(_e100, r))];
        }
        var o = Oo(e, n);
        o.push(r);
        var i = Oo(e, this.element);
        var s = t.getIndexWithinParent();
        for (var _t155 = 0; _t155 < i.length; _t155++) {
          var _e101 = o[_t155],
            _n74 = i[_t155];
          if (void 0 === _e101 || _e101 < _n74) break;
          if (_e101 > _n74) {
            s += 1;
            break;
          }
        }
        return [t.getParentOrThrow(), s];
      };
      return vo;
    })();
    function Oo(e, n) {
      var r = [];
      var o = n;
      for (; o !== e && null !== o; o = o.parentNode) {
        var _t156 = 0;
        for (
          var _e102 = o.previousSibling;
          null !== _e102;
          _e102 = _e102.previousSibling
        )
          _t156++;
        r.push(_t156);
      }
      return (o !== e && t(225), r.reverse());
    }
    var _ko4 = (function (_In3) {
      function ko(t) {
        var _this3;
        ((_this3 = _In3.call(this, t) || this),
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
      babelHelpers.inheritsLoose(ko, _In3);
      var _proto10 = ko.prototype;
      _proto10.afterCloneFrom = function afterCloneFrom(t) {
        (_In3.prototype.afterCloneFrom.call(this, t),
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
        return P[t] || "";
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
        var t = co()._dirtyElements;
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
          if ((hr(e) && t.push(e), Eo(e))) {
            var _n75 = e.getAllTextNodes();
            t.push.apply(t, _n75);
          }
          e = e.getNextSibling();
        }
        return t;
      };
      _proto10.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; Eo(t); ) {
          var _e103 = t.getFirstChild();
          if (null === _e103) break;
          t = _e103;
        }
        return t;
      };
      _proto10.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; Eo(t); ) {
          var _e104 = t.getLastChild();
          if (null === _e104) break;
          t = _e104;
        }
        return t;
      };
      _proto10.getDescendantByIndex = function getDescendantByIndex(t) {
        var e = this.getChildren(),
          n = e.length;
        if (t >= n) {
          var _t157 = e[n - 1];
          return (Eo(_t157) && _t157.getLastDescendant()) || _t157 || null;
        }
        var r = e[t];
        return (Eo(r) && r.getFirstDescendant()) || r || null;
      };
      _proto10.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : mi(t);
      };
      _proto10.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var e = this.getFirstChild();
        return (null === e && t(45, this.__key), e);
      };
      _proto10.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : mi(t);
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
        for (var _r49 = 0; _r49 < n; _r49++) {
          var _o41 = e[_r49];
          ((t += _o41.getTextContent()),
            Eo(_o41) && _r49 !== n - 1 && !_o41.isInline() && (t += v));
        }
        return t;
      };
      _proto10.getTextContentSize = function getTextContentSize() {
        var t = 0;
        var e = this.getChildren(),
          n = e.length;
        for (var _r50 = 0; _r50 < n; _r50++) {
          var _o42 = e[_r50];
          ((t += _o42.getTextContentSize()),
            Eo(_o42) && _r50 !== n - 1 && !_o42.isInline() && (t += 2));
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
          var _e105 = D[t];
          return 0 !== (this.getFormat() & _e105);
        }
        return !1;
      };
      _proto10.hasTextFormat = function hasTextFormat(t) {
        var e = A[t];
        return 0 !== (this.getTextFormat() & e);
      };
      _proto10.getFormatFlags = function getFormatFlags(t, e) {
        return fi(this.getLatest().__textFormat, t, e);
      };
      _proto10.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto10.select = function select(t, e) {
        io();
        var n = $r();
        var r = t,
          o = e;
        var i = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t158 = this.getFirstChild();
            if (hr(_t158) || Eo(_t158)) return _t158.select(0, 0);
          } else if (
            !((void 0 !== t && t !== i) || (void 0 !== e && e !== i))
          ) {
            var _t159 = this.getLastChild();
            if (hr(_t159) || Eo(_t159)) return _t159.select();
          }
        (void 0 === r && (r = i), void 0 === o && (o = i));
        var s = this.__key;
        return Tr(n)
          ? (n.anchor.set(s, r, "element"),
            n.focus.set(s, o, "element"),
            (n.dirty = !0),
            n)
          : Rr(s, r, s, o, "element", "element");
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
        Pn(this) && t(324, this.__key, this.__type);
        var o = this.getChildrenSize(),
          i = this.getWritable();
        e + n <= o || t(226, String(e), String(n), String(o));
        var s = i.__key,
          l = [],
          c = [],
          a = this.getChildAtIndex(e + n);
        var u = null,
          d = o - n + r.length;
        if (0 !== e)
          if (e === o) u = this.getLastChild();
          else {
            var _t160 = this.getChildAtIndex(e);
            null !== _t160 && (u = _t160.getPreviousSibling());
          }
        if (n > 0) {
          var _e106 = null === u ? this.getFirstChild() : u.getNextSibling();
          for (var _r51 = 0; _r51 < n; _r51++) {
            null === _e106 && t(100);
            var _n76 = _e106.getNextSibling(),
              _r52 = _e106.__key;
            (gi(_e106.getWritable()), c.push(_r52), (_e106 = _n76));
          }
        }
        var f = u;
        for (var _e107 of r) {
          null !== f && _e107.is(f) && (u = f = f.getPreviousSibling());
          var _n77 = _e107.getWritable();
          (_n77.__parent === s && d--, gi(_n77));
          var _r53 = _e107.__key;
          if (null === f) ((i.__first = _r53), (_n77.__prev = null));
          else {
            var _t161 = f.getWritable();
            ((_t161.__next = _r53), (_n77.__prev = _t161.__key));
          }
          (_e107.__key === s && t(76),
            (_n77.__parent = s),
            l.push(_r53),
            (f = _e107));
        }
        if (e + n === o) {
          if (null !== f) {
            ((f.getWritable().__next = null), (i.__last = f.__key));
          }
        } else if (null !== a) {
          var _t162 = a.getWritable();
          if (null !== f) {
            var _e108 = f.getWritable();
            ((_t162.__prev = f.__key), (_e108.__next = a.__key));
          } else _t162.__prev = null;
        }
        if (((i.__size = d), c.length)) {
          var _t163 = $r();
          if (Tr(_t163)) {
            var _e109 = new Set(c),
              _n78 = new Set(l),
              _r54 = _t163.anchor,
              _o43 = _t163.focus;
            (Mo(_r54, _e109, _n78) && Yr(_r54, _r54.getNode(), this, u, a),
              Mo(_o43, _e109, _n78) && Yr(_o43, _o43.getNode(), this, u, a),
              0 !== d || this.canBeEmpty() || ns(this) || this.remove());
          }
        }
        return i;
      };
      _proto10.getDOMSlot = function getDOMSlot(t) {
        return new _vo(t);
      };
      _proto10.exportDOM = function exportDOM(t) {
        var _In3$prototype$export = _In3.prototype.exportDOM.call(this, t),
          e = _In3$prototype$export.element;
        if (ds(e)) {
          var _t164 = this.getIndent();
          _t164 > 0 && (e.style.paddingInlineStart = 40 * _t164 + "px");
          var _n79 = this.getDirection();
          _n79 && (e.dir = _n79);
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
            _In3.prototype.exportJSON.call(this),
          ),
          e = this.getTextFormat(),
          n = this.getTextStyle();
        return (
          (0 === e && "" === n) ||
            ns(this) ||
            this.getChildren().some(hr) ||
            (0 !== e && (t.textFormat = e), "" !== n && (t.textStyle = n)),
          t
        );
      };
      _proto10.updateFromJSON = function updateFromJSON(t) {
        return _In3.prototype.updateFromJSON
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
        var n = Cs(e).$getDOMSlot(this, t, e);
        var r = n.getFirstChild();
        for (
          var _t165 = this.getFirstChild();
          _t165;
          _t165 = _t165.getNextSibling()
        ) {
          var _o44 = e.getElementByKey(_t165.getKey());
          null !== _o44 &&
            (null == r
              ? (n.insertChild(_o44), (r = _o44))
              : r !== _o44 && n.replaceChild(_o44, r),
            (r = r.nextSibling));
        }
      };
      return ko;
    })(_In5);
    function Eo(t) {
      return t instanceof _ko4;
    }
    function Mo(t, e, n) {
      var r = t.getNode();
      for (; r; ) {
        var _t166 = r.__key;
        if (e.has(_t166) && !n.has(_t166)) return !0;
        r = r.getParent();
      }
      return !1;
    }
    var _bo = (function (_In4) {
      function bo() {
        return _In4.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(bo, _In4);
      var _proto11 = bo.prototype;
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
      return bo;
    })(_In5);
    function Ao(t) {
      return t instanceof _bo;
    }
    var _wo = (function (_ko) {
      function wo() {
        var _this4;
        ((_this4 = _ko.call(this, "root") || this),
          (_this4.__cachedText = null));
        return _this4;
      }
      babelHelpers.inheritsLoose(wo, _ko);
      wo.getType = function getType() {
        return "root";
      };
      wo.clone = function clone() {
        return new wo();
      };
      var _proto12 = wo.prototype;
      _proto12.getTopLevelElementOrThrow =
        function getTopLevelElementOrThrow() {
          t(51);
        };
      _proto12.getTextContent = function getTextContent() {
        var t = this.__cachedText;
        return (!oo() && 0 !== co()._dirtyType) || null === t
          ? _ko.prototype.getTextContent.call(this)
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
        for (var _e110 of r) Eo(_e110) || Ao(_e110) || t(282);
        return _ko.prototype.splice.call(this, e, n, r);
      };
      wo.importJSON = function importJSON(t) {
        return vi().updateFromJSON(t);
      };
      _proto12.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return wo;
    })(_ko4);
    function Do(t) {
      return t instanceof _wo;
    }
    function Po(t) {
      return new _Ro(K(t._nodeMap));
    }
    function Io() {
      return new _Ro(new Map([["root", new _wo()]]));
    }
    function Fo(e) {
      var n = e.exportJSON(),
        r = e.constructor;
      if ((n.type !== r.getType() && t(130, r.name), Eo(e))) {
        var _o45 = n.children;
        Array.isArray(_o45) || t(59, r.name);
        var _i24 = e.getChildren();
        for (var _t167 = 0; _t167 < _i24.length; _t167++) {
          var _e111 = Fo(_i24[_t167]);
          _o45.push(_e111);
        }
      }
      return n;
    }
    var _Ro = (function () {
      function Ro(t, e) {
        ((this._nodeMap = t),
          (this._selection = e || null),
          (this._flushSync = !1),
          (this._readOnly = !1));
      }
      var _proto13 = Ro.prototype;
      _proto13.isEmpty = function isEmpty() {
        return 1 === this._nodeMap.size && null === this._selection;
      };
      _proto13.read = function read(t, e) {
        return po((e && e.editor) || null, this, t);
      };
      _proto13.clone = function clone(t) {
        var e = new Ro(this._nodeMap, void 0 === t ? this._selection : t);
        return ((e._readOnly = !0), e);
      };
      _proto13.toJSON = function toJSON() {
        return po(null, this, function () {
          return { root: Fo(vi()) };
        });
      };
      return Ro;
    })();
    var _Lo = (function (_ko2) {
      function Lo() {
        return _ko2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Lo, _ko2);
      Lo.getType = function getType() {
        return "artificial";
      };
      var _proto14 = Lo.prototype;
      _proto14.createDOM = function createDOM(t) {
        return document.createElement("div");
      };
      return Lo;
    })(_ko4);
    var _Bo = (function (_ko3) {
      function Bo() {
        return _ko3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Bo, _ko3);
      Bo.getType = function getType() {
        return "paragraph";
      };
      Bo.clone = function clone(t) {
        return new Bo(t.__key);
      };
      var _proto15 = Bo.prototype;
      _proto15.createDOM = function createDOM(t) {
        var e = document.createElement("p"),
          n = zi(t.theme, "paragraph");
        if (void 0 !== n) {
          var _e$classList2;
          (_e$classList2 = e.classList).add.apply(_e$classList2, n);
        }
        return e;
      };
      _proto15.updateDOM = function updateDOM(t, e, n) {
        return !1;
      };
      Bo.importDOM = function importDOM() {
        return {
          p: function p(t) {
            return { conversion: Ko, priority: 0 };
          },
        };
      };
      _proto15.exportDOM = function exportDOM(t) {
        var _ko3$prototype$export = _ko3.prototype.exportDOM.call(this, t),
          e = _ko3$prototype$export.element;
        if (ds(e)) {
          this.isEmpty() && e.append(document.createElement("br"));
          var _t168 = this.getFormatType();
          _t168 && (e.style.textAlign = _t168);
        }
        return { element: e };
      };
      Bo.importJSON = function importJSON(t) {
        return $o().updateFromJSON(t);
      };
      _proto15.exportJSON = function exportJSON() {
        var t = _ko3.prototype.exportJSON.call(this);
        if (void 0 === t.textFormat || void 0 === t.textStyle) {
          var _e112 = this.getChildren().find(hr);
          _e112
            ? ((t.textFormat = _e112.getFormat()),
              (t.textStyle = _e112.getStyle()))
            : ((t.textFormat = this.getTextFormat()),
              (t.textStyle = this.getTextStyle()));
        }
        return t;
      };
      _proto15.insertNewAfter = function insertNewAfter(t, e) {
        var n = $o();
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
          (hr(t[0]) && "" === t[0].getTextContent().trim())
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return Bo;
    })(_ko4);
    function Ko(t) {
      var e = $o();
      if ((Es(e, t), Os(t, e), "" === e.getFormatType())) {
        var _n80 = t.getAttribute("align");
        _n80 && _n80 && _n80 in D && e.setFormat(_n80);
      }
      return (ks(e, t), { node: e });
    }
    function $o() {
      return os(new _Bo());
    }
    function zo(t) {
      return t instanceof _Bo;
    }
    var Wo = 0;
    function Uo(t, e, n, r, o) {
      var i = t._keyToDOMMap;
      (i.clear(),
        (t._editorState = Io()),
        (t._pendingEditorState = r),
        (t._compositionKey = null),
        (t._dirtyType = 0),
        t._cloneNotNeeded.clear(),
        (t._dirtyLeaves = new Set()),
        t._dirtyElements.clear(),
        (t._normalizedNodes = new Set()),
        (o && o.preserveUpdateQueue) ||
          ((t._updateTags = new Set()), (t._updates = [])),
        (t._blockCursorElement = null));
      var s = t._observer;
      (null !== s && (s.disconnect(), (t._observer = null)),
        null !== e && (e.textContent = ""),
        null !== n && ((n.textContent = ""), i.set("root", n)));
    }
    function Yo(t) {
      var e = new Set(),
        n = new Set();
      var r = t;
      for (; r; ) {
        var _As3 = As(r),
          _t169 = _As3.ownNodeConfig,
          _o46 = r.transform;
        if (!n.has(_o46)) {
          n.add(_o46);
          var _t170 = r.transform();
          _t170 && e.add(_t170);
        }
        if (_t169) {
          var _n81 = _t169.$transform;
          (_n81 && e.add(_n81), (r = _t169["extends"]));
        } else {
          var _t171 = Object.getPrototypeOf(r);
          r =
            _t171.prototype instanceof _In5 && _t171 !== _In5 ? _t171 : void 0;
        }
      }
      return e;
    }
    var jo = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, r) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = Zo(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, r, o) {
        return Eo(t) && t.extractWithChild(e, n, r);
      },
      $getDOMSlot: function $getDOMSlot(e, n, r) {
        return (Eo(e) || t(336, e.getKey(), e.getType()), e.getDOMSlot(n));
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return Eo(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, r) {
        return t.updateDOM(e, n, r._config);
      },
    };
    function Jo(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function Go(t, e, n) {
      return (t.set(e, n), Jo.bind(null, t, e));
    }
    var _Ho = (function () {
      function Ho(t, e, n, r, o, i, s, l) {
        ((this._createEditorArgs = l),
          (this._parentEditor = e),
          (this._rootElement = null),
          (this._editorState = t),
          (this._pendingEditorState = null),
          (this._compositionKey = null),
          (this._deferred = []),
          (this._keyToDOMMap = new _$()),
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
          (this._key = Ai()),
          (this._onError = o),
          (this._htmlConversions = i),
          (this._editable = s),
          (this._headless = null !== e && e._headless),
          (this._window = null),
          (this._blockCursorElement = null));
      }
      var _proto16 = Ho.prototype;
      _proto16.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto16.registerUpdateListener = function registerUpdateListener(t) {
        return Go(this._listeners.update, t);
      };
      _proto16.registerEditableListener = function registerEditableListener(t) {
        return Go(this._listeners.editable, t);
      };
      _proto16.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return Go(this._listeners.decorator, t);
      };
      _proto16.registerTextContentListener =
        function registerTextContentListener(t) {
          return Go(this._listeners.textcontent, t);
        };
      _proto16.registerRootListener = function registerRootListener(t) {
        var _this13 = this;
        var e = this._listeners.root;
        return Ml(Go(e, t, t(this._rootElement, null) || void 0), function () {
          return (function (t, e, n) {
            var r = t.get(e);
            (r && r(), t.set(e, e.apply(void 0, n) || void 0));
          })(e, t, [null, _this13._rootElement]);
        });
      };
      _proto16.registerCommand = function registerCommand(e, n, r) {
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
      _proto16.registerMutationListener = function registerMutationListener(
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
          r = Ts(n).get(e.getType());
        if (!r) return;
        var o = new Map();
        for (var _t172 of r.keys()) o.set(_t172, "created");
        o.size > 0 &&
          t(o, {
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
          o = n.replaceWithKlass;
        if (null != o) {
          var _t173 = this.registerNodeTransformToKlass(o, e);
          r.push(_t173);
        }
        return (
          (function (t, e) {
            var n = Ts(t.getEditorState()),
              r = [];
            for (var _t174 of e) {
              var _e113 = n.get(_t174);
              _e113 && r.push(_e113);
            }
            if (0 === r.length) return;
            t.update(
              function () {
                for (var _t175 of r)
                  for (var _e114 of _t175.keys()) {
                    var _t176 = mi(_e114);
                    _t176 && _t176.markDirty();
                  }
              },
              null === t._pendingEditorState ? { tag: Fn } : void 0,
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
        return Ji(this, t, e);
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
          var _n82 = zi(this._config.theme, "root"),
            _r55 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            Uo(this, e, t, _r55, { preserveUpdateQueue: !0 }),
            null !== e &&
              (this._config.disableEvents || An(e),
              null != _n82 &&
                (_e$classList3 = e.classList).remove.apply(
                  _e$classList3,
                  _n82,
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e115 = Zi(t),
              _r56 = t.style;
            ((_r56.userSelect = "text"),
              (_r56.whiteSpace = "pre-wrap"),
              (_r56.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e115),
              (this._dirtyType = 2),
              X(this),
              this._updateTags.add(Fn),
              yo(this),
              this._config.disableEvents ||
                (function (t, e, _Ze$get) {
                  var n = t.ownerDocument;
                  Qe.set(t, n);
                  var r = (_Ze$get = Ze.get(n)) != null ? _Ze$get : 0;
                  (r < 1 && n.addEventListener("selectionchange", kn),
                    Ze.set(n, r + 1),
                    (t.__lexicalEditor = e));
                  var o = vn(t);
                  var _loop2 = function _loop2() {
                    var _je$_n = je[_n83],
                      r = _je$_n[0],
                      i = _je$_n[1],
                      s =
                        "function" == typeof i
                          ? function (t) {
                              Mn(t) ||
                                (En(t),
                                (e.isEditable() || "click" === r) && i(t, e));
                            }
                          : function (t) {
                              if (Mn(t)) return;
                              En(t);
                              var n = e.isEditable();
                              switch (r) {
                                case "cut":
                                  return n && Ji(e, Fe, t);
                                case "copy":
                                  return Ji(e, Ie, t);
                                case "paste":
                                  return n && Ji(e, se, t);
                                case "dragstart":
                                  return n && Ji(e, we, t);
                                case "dragover":
                                  return n && Ji(e, De, t);
                                case "dragend":
                                  return n && Ji(e, Pe, t);
                                case "focus":
                                  return n && Ji(e, ze, t);
                                case "blur":
                                  return n && Ji(e, We, t);
                                case "drop":
                                  return n && Ji(e, be, t);
                              }
                            };
                    (t.addEventListener(r, s),
                      o.push(function () {
                        t.removeEventListener(r, s);
                      }));
                  };
                  for (var _n83 = 0; _n83 < je.length; _n83++) {
                    _loop2();
                  }
                })(t, this),
              null != _n82 &&
                (_t$classList = t.classList).add.apply(_t$classList, _n82));
          } else ((this._window = null), this._updateTags.add(Fn), yo(this));
          mo("root", this, !1, t, e);
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
          ((r = Po(e)),
          (r._selection = e._selection ? e._selection.clone() : null)),
          q(this));
        var o = this._pendingEditorState,
          i = this._updateTags,
          s = void 0 !== n ? n.tag : null;
        (null === o || o.isEmpty() || (null != s && i.add(s), yo(this)),
          (this._pendingEditorState = r),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          null != s && i.add(s),
          this._updating || yo(this));
      };
      _proto16.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var r = Io(),
            o = Qr,
            i = to,
            s = Zr,
            l = e._dirtyElements,
            c = e._dirtyLeaves,
            a = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Set()),
            (e._dirtyType = 0),
            (Qr = r),
            (to = !1),
            (Zr = e),
            qo(null));
          try {
            var _o47 = e._nodes;
            (_o(t.root, _o47), n && n(), (r._readOnly = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = c),
              (e._cloneNotNeeded = a),
              (e._dirtyType = u),
              (Qr = o),
              (to = i),
              (Zr = s));
          }
          return r;
        })("string" == typeof t ? JSON.parse(t) : t, this, e);
      };
      _proto16.read = function read(t) {
        return (yo(this), this.getEditorState().read(t, { editor: this }));
      };
      _proto16.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : No(t, e, n);
        })(this, t, e);
      };
      _proto16.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          To(this, function () {
            var r = $r(),
              o = vi();
            (null !== r
              ? r.dirty || ki(r.clone())
              : 0 !== o.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? o.selectStart()
                  : o.selectEnd()),
              qi("focus"),
              Xi(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto16.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = as(this._window);
        null !== e && e.removeAllRanges();
      };
      _proto16.isEditable = function isEditable() {
        return this._editable;
      };
      _proto16.setEditable = function setEditable(t) {
        this._editable !== t &&
          ((this._editable = t), mo("editable", this, !0, t));
      };
      _proto16.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON() };
      };
      return Ho;
    })();
    _Ho.version = "0.44.0+prod.cjs";
    var Vo = null;
    function qo(t) {
      Vo = t;
    }
    var Xo = 1;
    function Qo(e, n) {
      var r = Zo(e, n);
      return (void 0 === r && t(30, n), r);
    }
    function Zo(t, e) {
      return t._nodes.get(e);
    }
    var ti =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function ei(t) {
      return Ao(Si(t));
    }
    function ni(t) {
      var e = document.activeElement;
      if (!ds(e)) return !1;
      var n = e.nodeName;
      return (
        Ao(Si(t)) &&
        ("INPUT" === n ||
          "TEXTAREA" === n ||
          ("true" === e.contentEditable && null == si(e)))
      );
    }
    function ri(t, e, n) {
      var r = t.getRootElement();
      try {
        return (
          null !== r &&
          r.contains(e) &&
          r.contains(n) &&
          null !== e &&
          !ni(e) &&
          ii(e) === t
        );
      } catch (t) {
        return !1;
      }
    }
    function oi(t) {
      return t instanceof _Ho;
    }
    function ii(t) {
      var e = t;
      for (; null != e; ) {
        var _t177 = si(e);
        if (oi(_t177)) return _t177;
        e = Hi(e);
      }
      return null;
    }
    function si(t) {
      return t ? t.__lexicalEditor : null;
    }
    function li(t) {
      return yr(t) || t.isToken();
    }
    function ci(t) {
      return li(t) || t.isSegmented();
    }
    function ai(t) {
      return fs(t) && 3 === t.nodeType;
    }
    function ui(t) {
      return fs(t) && 9 === t.nodeType;
    }
    function di(t) {
      var e = t;
      for (; null != e; ) {
        if (ai(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function fi(t, e, n) {
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
    function hi(t, e) {
      var n = (function () {
        var t = Vo;
        return ((Vo = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (io(), so());
      var r = co(),
        o = lo(),
        i = "" + Xo++;
      (o._nodeMap.set(i, t),
        Eo(t) ? r._dirtyElements.set(i, !0) : r._dirtyLeaves.add(i),
        r._cloneNotNeeded.add(i),
        (r._dirtyType = 1),
        (t.__key = i));
    }
    function gi(t) {
      var e = t.getParent();
      if (null !== e) {
        var _n84 = t.getWritable(),
          _r57 = e.getWritable(),
          _o48 = t.getPreviousSibling(),
          _i25 = t.getNextSibling(),
          _s15 = null !== _i25 ? _i25.__key : null,
          _l12 = null !== _o48 ? _o48.__key : null,
          _c0 = null !== _o48 ? _o48.getWritable() : null,
          _a0 = null !== _i25 ? _i25.getWritable() : null;
        (null === _o48 && (_r57.__first = _s15),
          null === _i25 && (_r57.__last = _l12),
          null !== _c0 && (_c0.__next = _s15),
          null !== _a0 && (_a0.__prev = _l12),
          (_n84.__prev = null),
          (_n84.__next = null),
          (_n84.__parent = null),
          _r57.__size--);
      }
    }
    function _i(e) {
      (so(), Pn(e) && t(323, e.__key, e.__type));
      var n = e.getLatest(),
        r = n.__parent,
        o = lo(),
        i = co(),
        s = o._nodeMap,
        l = i._dirtyElements;
      null !== r &&
        (function (t, e, n) {
          var r = t;
          for (; null !== r; ) {
            if (n.has(r)) return;
            var _t178 = e.get(r);
            if (void 0 === _t178) break;
            (n.set(r, !1), (r = _t178.__parent));
          }
        })(r, s, l);
      var c = n.__key;
      ((i._dirtyType = 1), Eo(e) ? l.set(c, !0) : i._dirtyLeaves.add(c));
    }
    function pi(t) {
      io();
      var e = co(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t179 = mi(n);
          null !== _t179 && _t179.getWritable();
        }
        if (null !== t) {
          var _e116 = mi(t);
          null !== _e116 && _e116.getWritable();
        }
      }
    }
    function yi() {
      if (oo()) return null;
      return co()._compositionKey;
    }
    function mi(t, e) {
      var n = (e || lo())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function xi(t, e) {
      var n = Ci(t, co());
      return void 0 !== n ? mi(n, e) : null;
    }
    function Ci(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function Si(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t180 = xi(n, e);
        if (null !== _t180) return _t180;
        n = Hi(n);
      }
      return null;
    }
    function Ni(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function Ti(t) {
      return t.read(function () {
        return vi().getTextContent();
      });
    }
    function vi() {
      return Oi(lo());
    }
    function Oi(t) {
      return t._nodeMap.get("root");
    }
    function ki(t) {
      io();
      var e = lo();
      (null !== t && ((t.dirty = !0), t.setCachedNodes(null)),
        (e._selection = t));
    }
    function Ei(t) {
      var e = co(),
        n = (function (t, e) {
          var n = t;
          for (; null != n; ) {
            var _t181 = Ci(n, e);
            if (void 0 !== _t181) return _t181;
            n = Hi(n);
          }
          return null;
        })(t, e);
      if (null === n) {
        return t === e.getRootElement() ? mi("root") : null;
      }
      return mi(n);
    }
    function Mi(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function bi(t) {
      var e = [];
      for (var _n85 = t; null !== _n85; _n85 = _n85._parentEditor) e.push(_n85);
      return e;
    }
    function Ai() {
      return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substring(0, 5);
    }
    function wi(t) {
      return ai(t) ? t.nodeValue : null;
    }
    function Di(t, e, n) {
      var r = as(ts(e));
      if (null === r) return;
      var o = r.anchorNode;
      var i = r.anchorOffset,
        s = r.focusOffset;
      if (null !== o) {
        var _e117 = wi(o);
        var _r58 = Si(o);
        if (null !== _e117 && hr(_r58)) {
          if ((_e117 === T || _e117 === O) && n) {
            var _t182 = n.length;
            ((_e117 = n), (i = _t182), (s = _t182));
          }
          null !== _e117 && Pi(_r58, _e117, i, s, t);
        }
      }
    }
    function Pi(t, e, n, r, o) {
      var i = t;
      if (i.isAttached() && (o || !i.isDirty())) {
        var _s16 = i.isComposing();
        var _c1 = e;
        if (
          (_s16 || o) &&
          (e.endsWith(T) && (_c1 = e.slice(0, -T.length)), o)
        ) {
          var _t183 = O;
          var _e118;
          for (; -1 !== (_e118 = _c1.indexOf(_t183)); )
            ((_c1 = _c1.slice(0, _e118) + _c1.slice(_e118 + _t183.length)),
              null !== n &&
                n > _e118 &&
                (n = Math.max(_e118, n - _t183.length)),
              null !== r &&
                r > _e118 &&
                (r = Math.max(_e118, r - _t183.length)));
        }
        var _u0 = i.getTextContent();
        if (o || _c1 !== _u0) {
          if ("" === _c1) {
            if ((pi(null), a || l || f)) i.remove();
            else {
              var _t184 = co();
              setTimeout(function () {
                _t184.update(function () {
                  i.isAttached() && i.remove();
                });
              }, 20);
            }
            return;
          }
          var _e119 = i.getParent(),
            _o49 = zr(),
            _u1 = i.getTextContentSize(),
            _d8 = yi(),
            _h4 = i.getKey();
          if (
            i.isToken() ||
            (null !== _d8 && _h4 === _d8 && !_s16) ||
            (Tr(_o49) &&
              ((null !== _e119 &&
                !_e119.canInsertTextBefore() &&
                0 === _o49.anchor.offset) ||
                (_o49.anchor.key === t.__key &&
                  0 === _o49.anchor.offset &&
                  !i.canInsertTextBefore() &&
                  !_s16) ||
                (_o49.focus.key === t.__key &&
                  _o49.focus.offset === _u1 &&
                  !i.canInsertTextAfter() &&
                  !_s16)))
          )
            return void i.markDirty();
          var _g5 = $r();
          if (!Tr(_g5) || null === n || null === r) return void Ii(i, _c1, _g5);
          if ((_g5.setTextNodeRange(i, n, i, r), i.isSegmented())) {
            var _t185 = fr(i.getTextContent());
            (i.replace(_t185), (i = _t185));
          }
          Ii(i, _c1, _g5);
        }
      }
    }
    function Ii(t, e, n) {
      if ((t.setTextContent(e), Tr(n))) {
        var _e120 = t.getKey();
        var _r59 = !1;
        for (var _o50 of ["anchor", "focus"]) {
          var _i26 = n[_o50];
          "text" === _i26.type &&
            _i26.key === _e120 &&
            ((_i26.offset = Vs(t, _i26.offset, "clamp")), (_r59 = !0));
        }
        _r59 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
      }
    }
    function Fi(t, e, n) {
      var r = e[n] || !1;
      return "any" === r || r === t[n];
    }
    function Ri(t, e) {
      return (
        Fi(t, e, "altKey") &&
        Fi(t, e, "ctrlKey") &&
        Fi(t, e, "shiftKey") &&
        Fi(t, e, "metaKey")
      );
    }
    function Li(t, e, n) {
      if (!Ri(t, n)) return !1;
      if (t.key.toLowerCase() === e.toLowerCase()) return !0;
      if (e.length > 1) return !1;
      if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
      if (t.code.startsWith("Digit") && /^\d$/.test(e))
        return t.code === "Digit" + e;
      var r = "Key" + e.toUpperCase();
      return t.code === r;
    }
    var Bi = { ctrlKey: !o, metaKey: o },
      Ki = { altKey: o, ctrlKey: !o };
    function $i(t) {
      return "Backspace" === t.key;
    }
    function zi(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        r = n[e];
      if (void 0 !== r) return r;
      var o = t[e];
      if ("string" == typeof o) {
        var _t186 = El(o);
        return ((n[e] = _t186), _t186);
      }
      return o;
    }
    function Wi(e, n, r, o, i) {
      if (0 === r.size) return;
      var s = o.__type,
        l = o.__key,
        c = n.get(s);
      void 0 === c && t(33, s);
      var a = c.klass;
      var u = e.get(a);
      void 0 === u && ((u = new Map()), e.set(a, u));
      var d = u.get(l),
        f = "destroyed" === d && "created" === i;
      (void 0 === d || f) && u.set(l, f ? "updated" : i);
    }
    function Ui(t, e, n) {
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
    function Yi(t, e) {
      var n = t.offset;
      if ("element" === t.type) {
        return Ui(t.getNode(), e, n);
      }
      {
        var _r60 = t.getNode();
        if ((e && 0 === n) || (!e && n === _r60.getTextContentSize())) {
          var _t187 = e ? _r60.getPreviousSibling() : _r60.getNextSibling();
          return null === _t187
            ? Ui(
                _r60.getParentOrThrow(),
                e,
                _r60.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t187;
        }
      }
      return null;
    }
    function ji(t) {
      var e = ts(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function Ji(t, e, n) {
      return xo(t, e, n, t);
    }
    function Gi(e, n) {
      var r = e._keyToDOMMap.get(n);
      return (void 0 === r && t(75, n), r);
    }
    function Hi(t) {
      var e = t.assignedSlot || t.parentElement;
      return hs(e) ? e.host : e;
    }
    function Vi(t) {
      return ui(t) ? t : ds(t) ? t.ownerDocument : null;
    }
    function qi(t) {
      io();
      co()._updateTags.add(t);
    }
    function Xi(t) {
      io();
      co()._deferred.push(t);
    }
    function Qi(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function Zi(t) {
      var e = Vi(t);
      return e ? e.defaultView : null;
    }
    function ts(e) {
      var n = e._window;
      return (null === n && t(78), n);
    }
    function es(t) {
      var e = t.getParentOrThrow();
      for (; null !== e; ) {
        if (ns(e)) return e;
        e = e.getParentOrThrow();
      }
      return e;
    }
    function ns(t) {
      return Do(t) || (Eo(t) && t.isShadowRoot());
    }
    function rs(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t);
      return (
        hi(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function os(e) {
      var n = co(),
        r = e.getType(),
        o = Zo(n, r);
      void 0 === o && t(200, e.constructor.name, r);
      var i = o.replace,
        s = o.replaceWithKlass;
      if (null !== i) {
        var _n86 = i(e),
          _o51 = _n86.constructor;
        return (
          null !== s
            ? _n86 instanceof s ||
              t(
                201,
                s.name,
                s.getType(),
                _o51.name,
                _o51.getType(),
                e.constructor.name,
                r,
              )
            : (_n86 instanceof e.constructor && _o51 !== e.constructor) ||
              t(202, _o51.name, _o51.getType(), e.constructor.name, r),
          _n86.__key === e.__key &&
            t(203, e.constructor.name, r, _o51.name, _o51.getType()),
          _n86
        );
      }
      return e;
    }
    function is(e, n) {
      !Do(e.getParent()) || Eo(n) || Ao(n) || t(99);
    }
    function ss(e) {
      var n = mi(e);
      return (null === n && t(63, e), n);
    }
    function ls(t) {
      return (Ao(t) || (Eo(t) && !t.canBeEmpty())) && !t.isInline();
    }
    function cs(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var r = t.parentElement;
      null !== r && r.removeChild(t);
    }
    function as(t) {
      return n ? (t || window).getSelection() : null;
    }
    function us(t) {
      var e = Zi(t);
      return e ? e.getSelection() : null;
    }
    function ds(t) {
      return fs(t) && 1 === t.nodeType;
    }
    function fs(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function hs(t) {
      return fs(t) && 11 === t.nodeType;
    }
    var gs =
      /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
    function _s(t) {
      return (
        !(!ds(t) || !t.style.display.startsWith("inline")) ||
        gs.test(t.nodeName)
      );
    }
    var ps =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function ys(t) {
      return (
        (!ds(t) || !t.style.display.startsWith("inline")) && ps.test(t.nodeName)
      );
    }
    function ms(t) {
      if (Ao(t) && !t.isInline()) return !0;
      if (!Eo(t) || ns(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || Vn(e) || hr(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function xs() {
      return co();
    }
    function Cs(t) {
      if (t === void 0) {
        t = xs();
      }
      return t._config.dom || jo;
    }
    var Ss = new WeakMap(),
      Ns = new Map();
    function Ts(e) {
      if (!e._readOnly && e.isEmpty()) return Ns;
      e._readOnly || t(192);
      var n = Ss.get(e);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref27 of t._nodeMap) {
              var _n87 = _ref27[0];
              var _r61 = _ref27[1];
              {
                var _t188 = _r61.__type;
                var _o52 = e.get(_t188);
                (_o52 || ((_o52 = new Map()), e.set(_t188, _o52)),
                  _o52.set(_n87, _r61));
              }
            }
            return e;
          })(e)),
          Ss.set(e, n)),
        n
      );
    }
    function vs(t) {
      var e = t.constructor.clone(t);
      return (e.afterCloneFrom(t), e);
    }
    function Os(t, e) {
      var n = parseInt(t.style.paddingInlineStart, 10) || 0,
        r = Math.round(n / 40);
      e.setIndent(r);
    }
    function ks(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function Es(t, e) {
      var n = e.style.textAlign;
      return n && n in D ? t.setFormat(n) : t;
    }
    function Ms(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function bs(t, e) {
      return (
        (function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        })(t, e) && t[e] !== _In5[e]
      );
    }
    function As(e) {
      var n = R in e.prototype ? e.prototype[R]() : void 0,
        r = (function (e) {
          if (!(e === _In5 || e.prototype instanceof _In5)) {
            var _n88 = "<unknown>",
              _r62 = "<unknown>";
            try {
              _n88 = e.getType();
            } catch (t) {}
            try {
              _Ho.version && (_r62 = JSON.parse(_Ho.version));
            } catch (t) {}
            t(290, e.name, _n88, _r62);
          }
          return e === _bo || e === _ko4 || e === _In5;
        })(e),
        o = !r && bs(e, "getType") ? e.getType() : void 0;
      var i,
        s = o;
      if (n)
        if (o) i = n[o];
        else
          for (var _ref29 of Object.entries(n)) {
            var _t189 = _ref29[0];
            var _e121 = _ref29[1];
            ((s = _t189), (i = _e121));
          }
      if (
        !r &&
        s &&
        (bs(e, "getType") ||
          (e.getType = function () {
            return s;
          }),
        bs(e, "clone") ||
          (e.clone = function (t) {
            return (qo(t), new e());
          }),
        bs(e, "importJSON") ||
          (e.importJSON =
            (i && i.$importJSON) ||
            function (t) {
              return new e().updateFromJSON(t);
            }),
        !bs(e, "importDOM") && i)
      ) {
        var _i27 = i,
          _t190 = _i27.importDOM;
        _t190 &&
          (e.importDOM = function () {
            return _t190;
          });
      }
      return { ownNodeConfig: i, ownNodeType: s };
    }
    var ws = function ws(t, e) {
      var n = t;
      for (; null != n && !Do(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function Ds(e, n) {
      var r = [];
      var o = e.__first;
      for (; null !== o; ) {
        var _e122 = null === n ? mi(o) : n.get(o);
        (null == _e122 && t(174), r.push(o), (o = _e122.__next));
      }
      return r;
    }
    var Ps = { next: "previous", previous: "next" };
    var _Is4 = (function () {
      function Is(t) {
        this.origin = t;
      }
      var _proto17 = Is.prototype;
      _proto17[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return il({
            hasNext: Ws,
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
        return Gs(this.getNodeAtCaret(), this.direction);
      };
      _proto17.getSiblingCaret = function getSiblingCaret() {
        return Gs(this.origin, this.direction);
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
        var o = r === this.direction ? n : Array.from(n).reverse();
        var i = this;
        var s = this.getParentAtCaret(),
          l = new Map();
        for (
          var _t191 = i.getAdjacentCaret();
          null !== _t191 && l.size < e;
          _t191 = _t191.getAdjacentCaret()
        ) {
          var _e123 = _t191.origin.getWritable();
          l.set(_e123.getKey(), _e123);
        }
        for (var _e124 of o) {
          if (l.size > 0) {
            var _n89 = i.getNodeAtCaret();
            if (_n89) {
              if (
                (l["delete"](_n89.getKey()),
                l["delete"](_e124.getKey()),
                _n89.is(_e124) || i.origin.is(_e124))
              );
              else {
                var _t192 = _e124.getParent();
                (_t192 && _t192.is(s) && _e124.remove(), _n89.replace(_e124));
              }
            } else null === _n89 && t(263, Array.from(l).join(" "));
          } else i.insert(_e124);
          i = Gs(_e124, this.direction);
        }
        for (var _t193 of l.values()) _t193.remove();
        return this;
      };
      return Is;
    })();
    var _Fs3 = (function (_Is) {
      function Fs() {
        var _this5;
        for (
          var _len6 = arguments.length, args = new Array(_len6), _key6 = 0;
          _key6 < _len6;
          _key6++
        ) {
          args[_key6] = arguments[_key6];
        }
        return (
          ((_this5 = _Is.call.apply(_Is, [this].concat(args)) || this),
          (_this5.type = "child"),
          babelHelpers.assertThisInitialized(_this5)) ||
          babelHelpers.assertThisInitialized(_this5)
        );
      }
      babelHelpers.inheritsLoose(Fs, _Is);
      var _proto18 = Fs.prototype;
      _proto18.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Xs(t, this.direction);
      };
      _proto18.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Gs(Bs(this.getParentAtCaret(), t), this.direction);
      };
      _proto18.getFlipped = function getFlipped() {
        var t = Ls(this.direction);
        return Gs(this.getNodeAtCaret(), t) || Xs(this.origin, t);
      };
      _proto18.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto18.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto18.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof Fs &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto18.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return Fs;
    })(_Is4);
    var Rs = { root: Do, shadowRoot: ns };
    function Ls(t) {
      return Ps[t];
    }
    function Bs(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return Rs[e](t) ? null : t;
    }
    var _Ks3 = (function (_Is2) {
      function Ks() {
        var _this6;
        for (
          var _len7 = arguments.length, args = new Array(_len7), _key7 = 0;
          _key7 < _len7;
          _key7++
        ) {
          args[_key7] = arguments[_key7];
        }
        return (
          ((_this6 = _Is2.call.apply(_Is2, [this].concat(args)) || this),
          (_this6.type = "sibling"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(Ks, _Is2);
      var _proto19 = Ks.prototype;
      _proto19.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Gs(t, this.direction);
      };
      _proto19.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto19.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto19.getChildCaret = function getChildCaret() {
        return Eo(this.origin) ? Xs(this.origin, this.direction) : null;
      };
      _proto19.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Gs(Bs(this.getParentAtCaret(), t), this.direction);
      };
      _proto19.getFlipped = function getFlipped() {
        var t = Ls(this.direction);
        return (
          Gs(this.getNodeAtCaret(), t) || Xs(this.origin.getParentOrThrow(), t)
        );
      };
      _proto19.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Ks &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto19.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof Ks || t instanceof _$s3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return Ks;
    })(_Is4);
    var _$s3 = (function (_Is3) {
      function $s(t, e) {
        var _this7;
        ((_this7 = _Is3.call(this, t) || this),
          (_this7.type = "text"),
          (_this7.offset = e));
        return _this7;
      }
      babelHelpers.inheritsLoose($s, _Is3);
      var _proto20 = $s.prototype;
      _proto20.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Hs(t, this.direction, this.offset);
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
        return Gs(Bs(this.getParentAtCaret(), t), this.direction);
      };
      _proto20.getFlipped = function getFlipped() {
        return Hs(this.origin, Ls(this.direction), this.offset);
      };
      _proto20.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof $s &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto20.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _Ks3 || t instanceof $s) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto20.getSiblingCaret = function getSiblingCaret() {
        return Gs(this.origin, this.direction);
      };
      return $s;
    })(_Is4);
    function zs(t) {
      return t instanceof _$s3;
    }
    function Ws(t) {
      return t instanceof _Ks3;
    }
    function Us(t) {
      return t instanceof _Fs3;
    }
    var Ys = {
        next: (function (_$s) {
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
              ((_this8 = _$s.call.apply(_$s, [this].concat(args)) || this),
              (_this8.direction = "next"),
              babelHelpers.assertThisInitialized(_this8)) ||
              babelHelpers.assertThisInitialized(_this8)
            );
          }
          babelHelpers.inheritsLoose(_class, _$s);
          var _proto21 = _class.prototype;
          _proto21.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto21.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_$s3),
        previous: (function (_$s2) {
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
              ((_this9 = _$s2.call.apply(_$s2, [this].concat(args)) || this),
              (_this9.direction = "previous"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class3, _$s2);
          var _proto22 = _class3.prototype;
          _proto22.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto22.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_$s3),
      },
      js = {
        next: (function (_Ks) {
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
              ((_this0 = _Ks.call.apply(_Ks, [this].concat(args)) || this),
              (_this0.direction = "next"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class5, _Ks);
          var _proto23 = _class5.prototype;
          _proto23.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto23.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_Ks3),
        previous: (function (_Ks2) {
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
              ((_this1 = _Ks2.call.apply(_Ks2, [this].concat(args)) || this),
              (_this1.direction = "previous"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class7, _Ks2);
          var _proto24 = _class7.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_Ks3),
      },
      Js = {
        next: (function (_Fs) {
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
              ((_this10 = _Fs.call.apply(_Fs, [this].concat(args)) || this),
              (_this10.direction = "next"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class9, _Fs);
          var _proto25 = _class9.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_Fs3),
        previous: (function (_Fs2) {
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
              ((_this11 = _Fs2.call.apply(_Fs2, [this].concat(args)) || this),
              (_this11.direction = "previous"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class1, _Fs2);
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
        })(_Fs3),
      };
    function Gs(t, e) {
      return t ? new js[e](t) : null;
    }
    function Hs(t, e, n) {
      return t ? new Ys[e](t, Vs(t, n)) : null;
    }
    function Vs(t, n, r) {
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
    function qs(t, e) {
      return new _el(t, e);
    }
    function Xs(t, e) {
      return Eo(t) ? new Js[e](t) : null;
    }
    function Qs(t) {
      return (t && t.getChildCaret()) || t;
    }
    function Zs(t) {
      return t && Qs(t.getAdjacentCaret());
    }
    var _tl = (function () {
      function tl(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto27 = tl.prototype;
      _proto27.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new tl(t, e, this.direction);
      };
      _proto27.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto27.getTextSlices = function getTextSlices() {
        var _this14 = this;
        var t = function t(_t194) {
            var e = _this14[_t194].getLatest();
            return zs(e)
              ? (function (t, e) {
                  var n = t.direction,
                    r = t.origin,
                    o = Vs(r, "focus" === e ? Ls(n) : n);
                  return qs(t, o - t.offset);
                })(e, _t194)
              : null;
          },
          e = t("anchor"),
          n = t("focus");
        if (e && n) {
          var _t195 = e.caret,
            _r63 = n.caret;
          if (_t195.isSameNodeCaret(_r63))
            return [qs(_t195, _r63.offset - _t195.offset), null];
        }
        return [e, n];
      };
      _proto27.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = zs(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          r = zs(n),
          o = function o(e) {
            return e.isSameNodeCaret(n) ? null : Zs(e) || e.getParentCaret(t);
          };
        return il({
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
      _proto27[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this.iterNodeCarets("root");
        };
      return tl;
    })();
    var _el = (function () {
      function el(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto28 = el.prototype;
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
          o = t.getTextContent();
        return Hs(t.setTextContent(o.slice(0, n) + o.slice(r)), e, n);
      };
      return el;
    })();
    function nl(t) {
      return ol(t, Gs(vi(), t.direction));
    }
    function rl(t) {
      return ol(t, t);
    }
    function ol(e, n) {
      return (
        e.direction !== n.direction && t(265),
        new _tl(e, n, e.direction)
      );
    }
    function il(t) {
      var _ref30;
      var e = t.initial,
        n = t.hasNext,
        r = t.step,
        o = t.map;
      var i = e;
      return (
        (_ref30 = {}),
        (_ref30[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
          function () {
            return this;
          }),
        (_ref30.next = function next() {
          if (!n(i)) return { done: !0, value: void 0 };
          var t = { done: !1, value: o(i) };
          return ((i = r(i)), t);
        }),
        _ref30
      );
    }
    function sl(e, n) {
      var r = ul(e.origin, n.origin);
      switch (
        (null === r && t(275, e.origin.getKey(), n.origin.getKey()), r.type)
      ) {
        case "same": {
          var _t196 = "text" === e.type,
            _r64 = "text" === n.type;
          return _t196 && _r64
            ? (function (t, e) {
                return Math.sign(t - e);
              })(e.offset, n.offset)
            : e.type === n.type
              ? 0
              : _t196
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
          return ll(r);
      }
    }
    function ll(t) {
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
    function cl(t, e) {
      return e.is(t);
    }
    function al(t) {
      return Eo(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function ul(e, n) {
      if (e.is(n)) return { commonAncestor: e, type: "same" };
      var r = new Map();
      for (
        var _al = al(e), _t197 = _al[0], _n90 = _al[1];
        _t197;
        _n90 = _t197, _t197 = _t197.getParent()
      )
        r.set(_t197, _n90);
      for (
        var _al2 = al(n), _o53 = _al2[0], _i28 = _al2[1];
        _o53;
        _i28 = _o53, _o53 = _o53.getParent()
      ) {
        var _s17 = r.get(_o53);
        if (void 0 !== _s17)
          return null === _s17
            ? (cl(e, _o53) || t(276),
              { commonAncestor: _o53, type: "ancestor" })
            : null === _i28
              ? (cl(n, _o53) || t(277),
                { commonAncestor: _o53, type: "descendant" })
              : (((Eo(_s17) || cl(e, _s17)) &&
                  (Eo(_i28) || cl(n, _i28)) &&
                  _o53.is(_s17.getParent()) &&
                  _o53.is(_i28.getParent())) ||
                  t(278),
                { a: _s17, b: _i28, commonAncestor: _o53, type: "branch" });
      }
      return null;
    }
    function dl(e, n) {
      var r = e.type,
        o = e.key,
        i = e.offset,
        s = ss(e.key);
      return "text" === r
        ? (hr(s) || t(266, s.getType(), o), Hs(s, n, i))
        : (Eo(s) || t(267, s.getType(), o), vl(s, e.offset, n));
    }
    function fl(e, n) {
      var r = n.origin,
        o = n.direction,
        i = "next" === o;
      zs(n)
        ? e.set(r.getKey(), n.offset, "text")
        : Ws(n)
          ? hr(r)
            ? e.set(r.getKey(), Vs(r, o), "text")
            : e.set(
                r.getParentOrThrow().getKey(),
                r.getIndexWithinParent() + (i ? 1 : 0),
                "element",
              )
          : ((Us(n) && Eo(r)) || t(268),
            e.set(r.getKey(), i ? 0 : r.getChildrenSize(), "element"));
    }
    function hl(t) {
      var e = $r(),
        n = Tr(e) ? e : Lr();
      return (gl(n, t), ki(n), n);
    }
    function gl(t, e) {
      (fl(t.anchor, e.anchor), fl(t.focus, e.focus));
    }
    function _l(t) {
      var e = t.anchor,
        n = t.focus,
        r = dl(e, "next"),
        o = dl(n, "next"),
        i = sl(r, o) <= 0 ? "next" : "previous";
      return ol(Nl(r, i), Nl(o, i));
    }
    function pl(t) {
      var e = t.direction,
        n = t.origin,
        r = Gs(n, Ls(e)).getNodeAtCaret();
      return r ? Gs(r, e) : Xs(n.getParentOrThrow(), e);
    }
    function yl(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _r65 = Us(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _r65;
        _r65 = _r65.getParentCaret(e)
      )
        n.push(pl(_r65));
      return n;
    }
    function ml(t) {
      return !!t && t.origin.isAttached();
    }
    function xl(e, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (e.isCollapsed()) return e;
      var r = "root",
        o = "next";
      var i = n;
      var s = Tl(e, o),
        l = yl(s.anchor, r),
        c = yl(s.focus.getFlipped(), r),
        a = new Set(),
        u = [];
      for (var _t198 of s.iterNodeCarets(r))
        if (Us(_t198)) a.add(_t198.origin.getKey());
        else if (Ws(_t198)) {
          var _e125 = _t198.origin;
          (Eo(_e125) && !a.has(_e125.getKey())) || u.push(_e125);
        }
      for (var _t199 of u) _t199.remove();
      for (var _t200 of s.getTextSlices()) {
        if (!_t200) continue;
        var _e126 = _t200.caret.origin,
          _n91 = _e126.getTextContentSize(),
          _r66 = pl(Gs(_e126, o)),
          _s18 = _e126.getMode();
        if (
          (Math.abs(_t200.distance) === _n91 && "removeEmptySlices" === i) ||
          ("token" === _s18 && 0 !== _t200.distance)
        )
          _r66.remove();
        else if (0 !== _t200.distance) {
          i = "removeEmptySlices";
          var _e127 = _t200.removeTextSlice();
          var _n92 = _t200.caret.origin;
          if ("segmented" === _s18) {
            var _t201 = _e127.origin,
              _n93 = fr(_t201.getTextContent())
                .setStyle(_t201.getStyle())
                .setFormat(_t201.getFormat());
            (_r66.replaceOrInsert(_n93), (_e127 = Hs(_n93, o, _e127.offset)));
          }
          (_n92.is(l[0].origin) && (l[0] = _e127),
            _n92.is(c[0].origin) && (c[0] = _e127.getFlipped()));
        }
      }
      var d, f;
      for (var _t202 of l)
        if (ml(_t202)) {
          d = Cl(_t202);
          break;
        }
      for (var _t203 of c)
        if (ml(_t203)) {
          f = Cl(_t203);
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
              if (ns(_o54)) return;
              !n && e(_o54) && (n = _o54);
            }
            return n;
          },
          u = a(i, ms),
          d =
            u &&
            a(s, function (t) {
              return n.has(t.getKey()) && ms(t);
            });
        return u && d ? [u, d] : null;
      })(d, f, a);
      if (h) {
        var _t204 = h[0],
          _e128 = h[1];
        Xs(_t204, "previous").splice(0, _e128.getChildren());
        var _n94 = _e128.getParent();
        for (_e128.remove(!0); _n94 && _n94.isEmpty(); ) {
          var _t205 = _n94;
          ((_n94 = _n94.getParent()), _t205.remove(!0));
        }
      }
      var g = [d, f].concat(l, c).find(ml);
      if (g) {
        return rl(Nl(Cl(g), e.direction));
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
    function Cl(t) {
      var e = (function (t) {
          var e = t;
          for (; Us(e); ) {
            var _t206 = Zs(e);
            if (!Us(_t206)) break;
            e = _t206;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (hr(e.origin)) return zs(e) ? e : Hs(e.origin, n, n);
      var r = e.getAdjacentCaret();
      return Ws(r) && hr(r.origin) ? Hs(r.origin, n, Ls(n)) : e;
    }
    function Sl(t) {
      return zs(t) && t.offset !== Vs(t.origin, t.direction);
    }
    function Nl(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function Tl(t, e) {
      return t.direction === e ? t : ol(Nl(t.focus, e), Nl(t.anchor, e));
    }
    function vl(t, e, n) {
      var r = Xs(t, "next");
      for (var _t207 = 0; _t207 < e; _t207++) {
        var _t208 = r.getAdjacentCaret();
        if (null === _t208) break;
        r = _t208;
      }
      return Nl(r, n);
    }
    function Ol(e) {
      var n = e.origin,
        r = e.offset,
        o = e.direction;
      if (r === Vs(n, o)) return e.getSiblingCaret();
      if (r === Vs(n, Ls(o))) return pl(e.getSiblingCaret());
      var _n$splitText2 = n.splitText(r),
        i = _n$splitText2[0];
      return (hr(i) || t(281), Nl(Gs(i, "next"), o));
    }
    function kl(t, e) {
      return !0;
    }
    function El() {
      var e = [];
      for (
        var _len12 = arguments.length, t = new Array(_len12), _key12 = 0;
        _key12 < _len12;
        _key12++
      ) {
        t[_key12] = arguments[_key12];
      }
      for (var _n95 of t)
        if (_n95 && "string" == typeof _n95)
          for (var _ref32 of _n95.matchAll(/\S+/g)) {
            var _t209 = _ref32[0];
            e.push(_t209);
          }
      return e;
    }
    function Ml() {
      for (
        var _len13 = arguments.length, t = new Array(_len13), _key13 = 0;
        _key13 < _len13;
        _key13++
      ) {
        t[_key13] = arguments[_key13];
      }
      return function () {
        for (var _e129 = t.length - 1; _e129 >= 0; _e129--) t[_e129]();
        t.length = 0;
      };
    }
    ((exports.$addUpdateTag = qi),
      (exports.$applyNodeReplacement = os),
      (exports.$caretFromPoint = dl),
      (exports.$caretRangeFromSelection = _l),
      (exports.$cloneWithProperties = vs),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = vs(t))[Dn] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = sl),
      (exports.$copyNode = rs),
      (exports.$create = function (t) {
        var e = xs();
        return (
          io(),
          new (e.resolveRegisteredNodeAfterReplacements(
            e.getRegisteredNode(t),
          ).klass)()
        );
      }),
      (exports.$createChildrenArray = Ds),
      (exports.$createLineBreakNode = Hn),
      (exports.$createNodeSelection = Br),
      (exports.$createParagraphNode = $o),
      (exports.$createPoint = xr),
      (exports.$createRangeSelection = Lr),
      (exports.$createRangeSelectionFromDom = function (t, e) {
        return Kr(null, t, e, null);
      }),
      (exports.$createTabNode = pr),
      (exports.$createTextNode = fr),
      (exports.$extendCaretToRange = nl),
      (exports.$findMatchingParent = ws),
      (exports.$getAdjacentChildCaret = Zs),
      (exports.$getAdjacentNode = Yi),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          r = t,
          o = Zs(r);
        for (; null === o; ) {
          if ((n--, (o = r.getParentCaret(e)), !o)) return null;
          ((r = o), (o = Zs(r)));
        }
        return o && [o, n];
      }),
      (exports.$getCaretInDirection = Nl),
      (exports.$getCaretRange = ol),
      (exports.$getCaretRangeInDirection = Tl),
      (exports.$getCharacterOffsets = Er),
      (exports.$getChildCaret = Xs),
      (exports.$getChildCaretAtIndex = vl),
      (exports.$getChildCaretOrSelf = Qs),
      (exports.$getCollapsedCaretRange = rl),
      (exports.$getCommonAncestor = ul),
      (exports.$getCommonAncestorResultBranchOrder = ll),
      (exports.$getEditor = xs),
      (exports.$getEditorDOMRenderConfig = Cs),
      (exports.$getNearestNodeFromDOMNode = Si),
      (exports.$getNearestRootOrShadowRoot = es),
      (exports.$getNodeByKey = mi),
      (exports.$getNodeByKeyOrThrow = ss),
      (exports.$getNodeFromDOMNode = xi),
      (exports.$getPreviousSelection = zr),
      (exports.$getRoot = vi),
      (exports.$getSelection = $r),
      (exports.$getSiblingCaret = Gs),
      (exports.$getState = Z),
      (exports.$getStateChange = function (t, e, n) {
        var r = Z(t, n, "direct"),
          o = Z(e, n, "direct");
        return n.isEqual(r, o) ? null : [r, o];
      }),
      (exports.$getTextContent = function () {
        var t = $r();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = Vs),
      (exports.$getTextPointCaret = Hs),
      (exports.$getTextPointCaretSlice = qs),
      (exports.$getWritableNodeState = nt),
      (exports.$hasAncestor = Qi),
      (exports.$hasUpdateTag = function (t) {
        return co()._updateTags.has(t);
      }),
      (exports.$insertNodes = function (t) {
        var e = $r() || zr();
        (null === e && (e = vi().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = Fr),
      (exports.$isChildCaret = Us),
      (exports.$isDecoratorNode = Ao),
      (exports.$isEditorState = function (t) {
        return t instanceof _Ro;
      }),
      (exports.$isElementNode = Eo),
      (exports.$isExtendableTextPointCaret = Sl),
      (exports.$isInlineElementOrDecoratorNode = function (t) {
        return (Eo(t) && t.isInline()) || (Ao(t) && t.isInline());
      }),
      (exports.$isLeafNode = function (t) {
        return hr(t) || Vn(t) || Ao(t);
      }),
      (exports.$isLexicalNode = function (t) {
        return t instanceof _In5;
      }),
      (exports.$isLineBreakNode = Vn),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _Is4;
      }),
      (exports.$isNodeSelection = Or),
      (exports.$isParagraphNode = zo),
      (exports.$isRangeSelection = Tr),
      (exports.$isRootNode = Do),
      (exports.$isRootOrShadowRoot = ns),
      (exports.$isSiblingCaret = Ws),
      (exports.$isTabNode = yr),
      (exports.$isTextNode = hr),
      (exports.$isTextPointCaret = zs),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _el;
      }),
      (exports.$isTokenOrSegmented = ci),
      (exports.$isTokenOrTab = li),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = lo();
        if (n._readOnly) {
          var _t210 = Ts(n).get(e);
          return _t210 ? Array.from(_t210.values()) : [];
        }
        var r = n._nodeMap,
          o = [];
        for (var _ref34 of r) {
          var _n96 = _ref34[1];
          _n96 instanceof t &&
            _n96.__type === e &&
            _n96.isAttached() &&
            o.push(_n96);
        }
        return o;
      }),
      (exports.$normalizeCaret = Cl),
      (exports.$normalizeSelection__EXPERIMENTAL = ft),
      (exports.$onUpdate = Xi),
      (exports.$parseSerializedNode = function (t) {
        return _o(t, co()._nodes);
      }),
      (exports.$removeTextFromCaretRange = xl),
      (exports.$rewindSiblingCaret = pl),
      (exports.$selectAll = function (t) {
        var e = vi();
        if (Tr(t)) {
          var _e130 = t.anchor,
            _n97 = t.focus,
            _r68 = _e130
              .getNode()
              .getTopLevelElementOrThrow()
              .getParentOrThrow();
          return (
            _e130.set(_r68.getKey(), 0, "element"),
            _n97.set(_r68.getKey(), _r68.getChildrenSize(), "element"),
            ft(t),
            t
          );
        }
        {
          var _t211 = e.select(0, e.getChildrenSize());
          return (ki(ft(_t211)), _t211);
        }
      }),
      (exports.$setCompositionKey = pi),
      (exports.$setDirectionFromDOM = ks),
      (exports.$setFormatFromDOM = Es),
      (exports.$setPointFromCaret = fl),
      (exports.$setSelection = ki),
      (exports.$setSelectionFromCaretRange = hl),
      (exports.$setState = function (t, e, n) {
        var r;
        if ((io(), "function" == typeof n)) {
          var _o55 = t.getLatest(),
            _i29 = Z(_o55, e);
          if (((r = n(_i29)), e.isEqual(_i29, r))) return _o55;
        } else r = n;
        var o = t.getWritable();
        return (nt(o).updateFromKnown(e, r), o);
      }),
      (exports.$splitAtPointCaretNext = function (t, _temp) {
        var _ref35 = _temp === void 0 ? {} : _temp,
          _ref35$$copyElementNo = _ref35.$copyElementNode,
          e = _ref35$$copyElementNo === void 0 ? rs : _ref35$$copyElementNo,
          _ref35$$splitTextPoin = _ref35.$splitTextPointCaretNext,
          n = _ref35$$splitTextPoin === void 0 ? Ol : _ref35$$splitTextPoin,
          _ref35$rootMode = _ref35.rootMode,
          r = _ref35$rootMode === void 0 ? "shadowRoot" : _ref35$rootMode,
          _ref35$$shouldSplit = _ref35.$shouldSplit,
          o = _ref35$$shouldSplit === void 0 ? kl : _ref35$$shouldSplit,
          _ref35$removeEmptyDes = _ref35.removeEmptyDestination,
          i = _ref35$removeEmptyDes === void 0 ? !1 : _ref35$removeEmptyDes;
        if (zs(t)) return n(t);
        var s = t.getParentCaret(r);
        if (s) {
          var _n98 = s.origin;
          if (Us(t)) {
            var _t212 = pl(s);
            if (i && _n98.isEmpty()) return (_n98.remove(), _t212);
            if (!_n98.canBeEmpty() || !o(_n98, "first")) return _t212;
          }
          var _r69 = (function (t) {
            var e = [];
            for (
              var _n99 = t.getAdjacentCaret();
              _n99;
              _n99 = _n99.getAdjacentCaret()
            )
              e.push(_n99.origin);
            return e;
          })(t);
          (_r69.length > 0 || (!i && _n98.canBeEmpty() && o(_n98, "last"))) &&
            s.insert(e(_n98).splice(0, 0, _r69));
        }
        return s;
      }),
      (exports.$splitNode = function (e, n) {
        var r = e.getChildAtIndex(n);
        (null == r && (r = e), ns(e) && t(102));
        var _o58 = function o(e) {
            var n = e.getParentOrThrow(),
              i = ns(n),
              s = e !== r || i ? rs(e) : e;
            if (i)
              return ((Eo(e) && Eo(s)) || t(133), e.insertAfter(s), [e, s, s]);
            {
              var _o57 = _o58(n),
                _t213 = _o57[0],
                _r70 = _o57[1],
                _i30 = _o57[2],
                _l13 = e.getNextSiblings();
              return (
                _i30.append.apply(_i30, [s].concat(_l13)),
                [_t213, _r70, s]
              );
            }
          },
          _o56 = _o58(r),
          i = _o56[0],
          s = _o56[1];
        return [i, s];
      }),
      (exports.$updateRangeSelectionFromCaretRange = gl),
      (exports.ArtificialNode__DO_NOT_USE = _Lo),
      (exports.BEFORE_INPUT_COMMAND = Qt),
      (exports.BLUR_COMMAND = We),
      (exports.CAN_REDO_COMMAND = Ke),
      (exports.CAN_UNDO_COMMAND = $e),
      (exports.CLEAR_EDITOR_COMMAND = Le),
      (exports.CLEAR_HISTORY_COMMAND = Be),
      (exports.CLICK_COMMAND = Xt),
      (exports.COLLABORATION_TAG = Rn),
      (exports.COMMAND_PRIORITY_BEFORE_CRITICAL = -4),
      (exports.COMMAND_PRIORITY_BEFORE_EDITOR = -8),
      (exports.COMMAND_PRIORITY_BEFORE_HIGH = -5),
      (exports.COMMAND_PRIORITY_BEFORE_LOW = -7),
      (exports.COMMAND_PRIORITY_BEFORE_NORMAL = -6),
      (exports.COMMAND_PRIORITY_CRITICAL = 4),
      (exports.COMMAND_PRIORITY_EDITOR = Wo),
      (exports.COMMAND_PRIORITY_HIGH = 3),
      (exports.COMMAND_PRIORITY_LOW = 1),
      (exports.COMMAND_PRIORITY_NORMAL = 2),
      (exports.COMPOSITION_END_COMMAND = ee),
      (exports.COMPOSITION_END_TAG = zn),
      (exports.COMPOSITION_START_COMMAND = te),
      (exports.COMPOSITION_START_TAG = $n),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = ie),
      (exports.COPY_COMMAND = Ie),
      (exports.CUT_COMMAND = Fe),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = jo),
      (exports.DELETE_CHARACTER_COMMAND = ne),
      (exports.DELETE_LINE_COMMAND = ae),
      (exports.DELETE_WORD_COMMAND = ce),
      (exports.DRAGEND_COMMAND = Pe),
      (exports.DRAGOVER_COMMAND = De),
      (exports.DRAGSTART_COMMAND = we),
      (exports.DROP_COMMAND = be),
      (exports.DecoratorNode = _bo),
      (exports.ElementNode = _ko4),
      (exports.FOCUS_COMMAND = ze),
      (exports.FORMAT_ELEMENT_COMMAND = Ae),
      (exports.FORMAT_TEXT_COMMAND = ue),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = Fn),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = Ee),
      (exports.INPUT_COMMAND = Zt),
      (exports.INSERT_LINE_BREAK_COMMAND = re),
      (exports.INSERT_PARAGRAPH_COMMAND = oe),
      (exports.INSERT_TAB_COMMAND = ke),
      (exports.INTERNAL_$isBlock = ms),
      (exports.IS_ALL_FORMATTING = 2047),
      (exports.IS_BOLD = 1),
      (exports.IS_CODE = 16),
      (exports.IS_HIGHLIGHT = p),
      (exports.IS_ITALIC = 2),
      (exports.IS_STRIKETHROUGH = 4),
      (exports.IS_SUBSCRIPT = 32),
      (exports.IS_SUPERSCRIPT = 64),
      (exports.IS_UNDERLINE = 8),
      (exports.KEY_ARROW_DOWN_COMMAND = xe),
      (exports.KEY_ARROW_LEFT_COMMAND = pe),
      (exports.KEY_ARROW_RIGHT_COMMAND = ge),
      (exports.KEY_ARROW_UP_COMMAND = me),
      (exports.KEY_BACKSPACE_COMMAND = Ne),
      (exports.KEY_DELETE_COMMAND = ve),
      (exports.KEY_DOWN_COMMAND = he),
      (exports.KEY_ENTER_COMMAND = Ce),
      (exports.KEY_ESCAPE_COMMAND = Te),
      (exports.KEY_MODIFIER_COMMAND = Ue),
      (exports.KEY_SPACE_COMMAND = Se),
      (exports.KEY_TAB_COMMAND = Oe),
      (exports.LineBreakNode = _Jn),
      (exports.MOVE_TO_END = _e),
      (exports.MOVE_TO_START = ye),
      (exports.NODE_STATE_KEY = "$"),
      (exports.OUTDENT_CONTENT_COMMAND = Me),
      (exports.PASTE_COMMAND = se),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _Bo),
      (exports.REDO_COMMAND = fe),
      (exports.REMOVE_TEXT_COMMAND = le),
      (exports.RootNode = _wo),
      (exports.SELECTION_CHANGE_COMMAND = Vt),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = qt),
      (exports.SELECT_ALL_COMMAND = Re),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = Bn),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = Ln),
      (exports.SKIP_SELECTION_FOCUS_TAG = Kn),
      (exports.TEXT_TYPE_TO_FORMAT = A),
      (exports.TabNode = _r73),
      (exports.TextNode = _rr2),
      (exports.UNDO_COMMAND = de),
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
        var n = El.apply(void 0, e);
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
      (exports.createCommand = Ht),
      (exports.createEditor = function (t) {
        var e = t || {},
          n = uo(),
          r = e.theme || {},
          o = void 0 === t ? n : e.parentEditor || null,
          i = e.disableEvents || !1,
          s = Io(),
          l = e.namespace || (null !== o ? o._config.namespace : Ai()),
          c = e.editorState,
          a = [_wo, _rr2, _Jn, _r73, _Bo, _Lo].concat(e.nodes || []),
          u = e.onError,
          d = e.html,
          f = void 0 === e.editable || e.editable;
        var h;
        if (void 0 === t && null !== n) h = n._nodes;
        else {
          h = new Map();
          for (var _t214 = 0; _t214 < a.length; _t214++) {
            var _e131 = a[_t214],
              _n100 = null,
              _r71 = null;
            if ("function" != typeof _e131) {
              var _t215 = _e131;
              ((_e131 = _t215.replace),
                (_n100 = _t215["with"]),
                (_r71 = _t215.withKlass || null));
            }
            As(_e131);
            var _o59 = _e131.getType(),
              _i31 = Yo(_e131);
            h.set(_o59, {
              exportDOM: d && d["export"] ? d["export"].get(_e131) : void 0,
              klass: _e131,
              replace: _n100,
              replaceWithKlass: _r71,
              sharedNodeState: tt(a[_t214]),
              transforms: _i31,
            });
          }
        }
        var g = new _Ho(
          s,
          o,
          h,
          {
            disableEvents: i,
            dom: babelHelpers["extends"]({}, jo, t && t.dom),
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
          })(h, d ? d["import"] : void 0),
          f,
          t,
        );
        return (
          void 0 !== c && ((g._pendingEditorState = c), (g._dirtyType = 2)),
          (function (t) {
            (t.registerCommand(Qt, mn, Wo),
              t.registerCommand(Zt, xn, Wo),
              t.registerCommand(te, Cn, Wo),
              t.registerCommand(ee, Sn, Wo),
              t.registerCommand(he, Tn, Wo));
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
      (exports.flipDirection = Ls),
      (exports.getDOMOwnerDocument = Vi),
      (exports.getDOMSelection = as),
      (exports.getDOMSelectionFromTarget = us),
      (exports.getDOMTextNode = di),
      (exports.getEditorPropertyFromDOMNode = si),
      (exports.getNearestEditorFromDOMNode = ii),
      (exports.getRegisteredNode = Zo),
      (exports.getRegisteredNodeOrThrow = Qo),
      (exports.getStaticNodeConfig = As),
      (exports.getStyleObjectFromCSS = Un),
      (exports.getTextDirection = function (t) {
        return M.test(t) ? "rtl" : b.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = Yo),
      (exports.isBlockDomNode = ys),
      (exports.isCurrentlyReadOnlyMode = oo),
      (exports.isDOMDocumentNode = ui),
      (exports.isDOMNode = fs),
      (exports.isDOMTextNode = ai),
      (exports.isDOMUnmanaged = Ms),
      (exports.isDocumentFragment = hs),
      (exports.isExactShortcutMatch = Li),
      (exports.isHTMLAnchorElement = function (t) {
        return ds(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = ds),
      (exports.isInlineDomNode = _s),
      (exports.isLexicalEditor = oi),
      (exports.isModifierMatch = Ri),
      (exports.isSelectionCapturedInDecoratorInput = ni),
      (exports.isSelectionWithinEditor = ri),
      (exports.makeStepwiseIterator = il),
      (exports.mergeRegister = Ml),
      (exports.normalizeClassNames = El),
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
        var n = El.apply(void 0, e);
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(_t$classList3, n);
      }),
      (exports.removeFromParent = gi),
      (exports.resetRandomKey = function () {
        Xo = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = jn),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n101 in e) {
          var _r72 = e[_n101];
          null == _r72 ? t.removeProperty(_n101) : Yn(t, _n101, _r72);
        }
      }),
      (exports.setDOMUnmanaged = function (t) {
        t.__lexicalUnmanaged = !0;
      }),
      (exports.setNodeIndentFromDOM = Os),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n102 in e)
          if (t[_n102] !== e[_n102]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.toggleTextFormatType = fi));
  },
  null,
);
