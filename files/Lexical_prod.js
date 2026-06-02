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
    var _D, _P;
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
    var e =
        "undefined" != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement,
      n = e && "documentMode" in document ? document.documentMode : null,
      r = e && /Mac|iPod|iPhone|iPad/.test(navigator.platform),
      o = e && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
      i =
        !(!e || !("InputEvent" in window) || n) &&
        "getTargetRanges" in new window.InputEvent("input"),
      s = e && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
      l = e && /Android/.test(navigator.userAgent),
      c = e && /Version\/[\d.]+.*Safari/.test(navigator.userAgent) && !l,
      a = e && /^(?=.*Chrome).*/i.test(navigator.userAgent),
      u = e && l && a,
      f = e && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && r && !a,
      d = 0,
      h = 1,
      g = 2,
      _ = 128,
      p = 1,
      y = 2,
      m = 3,
      x = 4,
      C = 5,
      S = 6,
      T = c || s || f ? "\xa0" : "\u200b",
      N = "\n\n",
      v = o ? "\xa0" : T,
      k = "\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc",
      O =
        "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff",
      E = new RegExp("^[^" + O + "]*[" + k + "]"),
      b = new RegExp("^[^" + k + "]*[" + O + "]"),
      M = {
        bold: 1,
        capitalize: 1024,
        code: 16,
        highlight: _,
        italic: 2,
        lowercase: 256,
        strikethrough: 4,
        subscript: 32,
        superscript: 64,
        underline: 8,
        uppercase: 512,
      },
      A = { directionless: 1, unmergeable: 2 },
      w = { center: 2, end: 6, justify: 4, left: 1, right: 3, start: 5 },
      D =
        ((_D = {}),
        (_D[y] = "center"),
        (_D[S] = "end"),
        (_D[x] = "justify"),
        (_D[p] = "left"),
        (_D[m] = "right"),
        (_D[C] = "start"),
        _D),
      I = { normal: 0, segmented: 2, token: 1 },
      P =
        ((_P = {}),
        (_P[d] = "normal"),
        (_P[g] = "segmented"),
        (_P[h] = "token"),
        _P),
      F = "$config";
    function R() {
      return Ks()._blockCursorElement;
    }
    var _L2 = (function () {
      function L(t, e, n) {
        ((this.element = t),
          (this.before = e || null),
          (this.after = n || null));
      }
      var _proto = L.prototype;
      _proto.withBefore = function withBefore(t) {
        return new L(this.element, t, this.after);
      };
      _proto.withAfter = function withAfter(t) {
        return new L(this.element, this.before, t);
      };
      _proto.withElement = function withElement(t) {
        return this.element === t ? this : new L(t, this.before, this.after);
      };
      _proto.insertChild = function insertChild(e) {
        var n = this.getInsertionAnchor();
        return (
          null !== n && n.parentElement !== this.element && t(357),
          this.element.insertBefore(e, n),
          this
        );
      };
      _proto.removeChild = function removeChild(e) {
        return (
          e.parentElement !== this.element && t(358),
          this.element.removeChild(e),
          this
        );
      };
      _proto.replaceChild = function replaceChild(e, n) {
        return (
          n.parentElement !== this.element && t(359),
          this.element.replaceChild(e, n),
          this
        );
      };
      _proto.getFirstChild = function getFirstChild() {
        var t = this.getFirstChildAnchor(),
          e = t ? t.nextSibling : this.element.firstChild;
        return e === this.getInsertionAnchor() ? null : e;
      };
      _proto.getFirstChildAnchor = function getFirstChildAnchor() {
        return this.after;
      };
      _proto.resolveLeafPosition = function resolveLeafPosition(t, e, n) {
        if (this.element === t) return e === t && 0 === n ? "before" : "after";
        var r = K(t, this.element);
        if (null === r) return "after";
        var o = Array.prototype.indexOf.call(t.childNodes, r);
        if (o < 0) return "after";
        if (e === t) return n <= o ? "before" : "after";
        var i = K(t, e);
        if (null === i) return "after";
        var s = Array.prototype.indexOf.call(t.childNodes, i);
        return s >= 0 && s <= o ? "before" : "after";
      };
      _proto.getInsertionAnchor = function getInsertionAnchor() {
        return this.before;
      };
      return L;
    })();
    function K(t, e) {
      var n = e;
      for (; null !== n && n.parentNode !== t; ) n = n.parentNode;
      return n;
    }
    var _B = (function (_L) {
      function B() {
        return _L.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(B, _L);
      var _proto2 = B.prototype;
      _proto2.withBefore = function withBefore(t) {
        return new B(this.element, t, this.after);
      };
      _proto2.withAfter = function withAfter(t) {
        return new B(this.element, this.before, t);
      };
      _proto2.withElement = function withElement(t) {
        return this.element === t ? this : new B(t, this.before, this.after);
      };
      _proto2.getInsertionAnchor = function getInsertionAnchor() {
        return (
          _L.prototype.getInsertionAnchor.call(this) ||
          this.getManagedLineBreak()
        );
      };
      _proto2.getFirstChildAnchor = function getFirstChildAnchor() {
        var t = _L.prototype.getFirstChildAnchor.call(this),
          e = t ? t.nextSibling : this.element.firstChild;
        return null !== e && e === R() ? e : t;
      };
      _proto2.getManagedLineBreak = function getManagedLineBreak() {
        return this.element.__lexicalLineBreak || null;
      };
      _proto2.setManagedLineBreak = function setManagedLineBreak(t) {
        if (((this.element.__lexicalLastChildKind = t), null === t))
          this.removeManagedLineBreak();
        else {
          var _e2 = "decorator" === t && (f || s || c);
          this.insertManagedLineBreak(_e2);
        }
      };
      _proto2.removeManagedLineBreak = function removeManagedLineBreak() {
        var t = this.getManagedLineBreak();
        if (t) {
          var _e3 = this.element,
            _n2 = "IMG" === t.nodeName ? t.nextSibling : null;
          (_n2 && _e3.removeChild(_n2),
            _e3.removeChild(t),
            (_e3.__lexicalLineBreak = void 0));
        }
      };
      _proto2.insertManagedLineBreak = function insertManagedLineBreak(t) {
        var e = this.getManagedLineBreak();
        if (e) {
          if (t === ("IMG" === e.nodeName)) return;
          this.removeManagedLineBreak();
        }
        var n = this.element,
          r = this.before,
          o = document.createElement("br");
        if ((n.insertBefore(o, r), t)) {
          var _t3 = document.createElement("img");
          (_t3.setAttribute("data-lexical-linebreak", "true"),
            _t3.style.setProperty("display", "inline", "important"),
            _t3.style.setProperty("border", "0px", "important"),
            _t3.style.setProperty("margin", "0px", "important"),
            (_t3.alt = ""),
            n.insertBefore(_t3, o),
            (n.__lexicalLineBreak = _t3));
        } else n.__lexicalLineBreak = o;
      };
      _proto2.getFirstChildOffset = function getFirstChildOffset() {
        var t = this.getFirstChild(),
          e = this.getInsertionAnchor();
        var n = 0;
        for (
          var _r2 = this.element.firstChild;
          null !== _r2 && _r2 !== t && _r2 !== e;
          _r2 = _r2.nextSibling
        )
          n++;
        return n;
      };
      _proto2.resolveChildIndex = function resolveChildIndex(t, e, n, r) {
        if (n === this.element) {
          var _e4 = this.getFirstChildOffset(),
            _n3 = R(),
            _o2 = this.element.childNodes,
            _i2 = Math.min(r, _o2.length);
          var _s2 = 0;
          for (var _t4 = _e4; _t4 < _i2; _t4++) _o2[_t4] !== _n3 && _s2++;
          return [t, Math.min(_s2, t.getChildrenSize())];
        }
        var o = z(e, n);
        o.push(r);
        var i = z(e, this.element);
        var s = t.getIndexWithinParent();
        for (var _t5 = 0; _t5 < i.length; _t5++) {
          var _e5 = o[_t5],
            _n4 = i[_t5];
          if (void 0 === _e5 || _e5 < _n4) break;
          if (_e5 > _n4) {
            s += 1;
            break;
          }
        }
        return [t.getParentOrThrow(), s];
      };
      return B;
    })(_L2);
    function z(e, n) {
      var r = [];
      var o = n;
      for (; o !== e && null !== o; o = o.parentNode) {
        var _t6 = 0;
        for (
          var _e6 = o.previousSibling;
          null !== _e6;
          _e6 = _e6.previousSibling
        )
          _t6++;
        r.push(_t6);
      }
      return (o !== e && t(225), r.reverse());
    }
    var $;
    try {
      $ = "0.45.0+prod.cjs";
    } catch (t) {}
    var W = $ != null ? $ : "0.45.0+source";
    var _U = (function () {
      function U() {
        this._front = new Set();
        this._back = new Set();
      }
      var _proto3 = U.prototype;
      _proto3.addBack = function addBack(t) {
        return (
          delete this._cache,
          this._front.has(t) || this._back.add(t),
          this
        );
      };
      _proto3.addFront = function addFront(t) {
        return (
          delete this._cache,
          this._back.has(t) || this._front.add(t),
          this
        );
      };
      _proto3["delete"] = function _delete(t) {
        return (
          delete this._cache,
          this._front["delete"](t) || this._back["delete"](t)
        );
      };
      _proto3.toArray = function toArray() {
        var t = Array.from(this._front).reverse();
        for (var _e7 of this._back) t.push(_e7);
        return t;
      };
      _proto3.toReadonlyArray = function toReadonlyArray() {
        return ((this._cache = this._cache || this.toArray()), this._cache);
      };
      _proto3[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this.toReadonlyArray()[
            typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
          ]();
        };
      return babelHelpers.createClass(U, [
        {
          key: "size",
          get: function get() {
            return this._front.size + this._back.size;
          },
        },
      ]);
    })();
    var Y = null;
    function j(t, e) {
      if (e === void 0) {
        e = 1e3;
      }
      return t instanceof _H
        ? t.clone()
        : t.size < e
          ? new Map(t)
          : new _H().init(new Map(t), void 0, t.size);
    }
    var _H = (function () {
      function H() {
        this._mutable = !1;
        this._old = void 0;
        this._nursery = void 0;
        this._size = 0;
      }
      var _proto4 = H.prototype;
      _proto4.clone = function clone() {
        return (
          (this._mutable = !1),
          new H().init(this._old, this._nursery, this._size)
        );
      };
      _proto4.init = function init(t, e, n) {
        return ((this._old = t), (this._nursery = e), (this._size = n), this);
      };
      _proto4.has = function has(t) {
        return void 0 !== this.get(t);
      };
      _proto4.getWithTombstone = function getWithTombstone(t) {
        var e = this._nursery && this._nursery.get(t);
        return void 0 !== e ? e : this._old && this._old.get(t);
      };
      _proto4.get = function get(t) {
        var e = this.getWithTombstone(t);
        return e === Y ? void 0 : e;
      };
      _proto4.shouldCompact = function shouldCompact() {
        return void 0 !== this._nursery && 2 * this._nursery.size > this._size;
      };
      _proto4.getNursery = function getNursery() {
        return (
          (this._mutable && this._nursery) ||
            (this.compact(),
            (this._nursery = new Map(this._nursery)),
            (this._mutable = !0)),
          this._nursery
        );
      };
      _proto4.compact = function compact(t) {
        if (t === void 0) {
          t = !1;
        }
        if (
          this._nursery &&
          this._nursery.size > 0 &&
          (t || this.shouldCompact())
        ) {
          var _t7 = new Map(this._old);
          for (var _ref2 of this._nursery) {
            var _e8 = _ref2[0];
            var _n5 = _ref2[1];
            _n5 !== Y ? _t7.set(_e8, _n5) : _t7["delete"](_e8);
          }
          ((this._old = _t7), (this._nursery = void 0));
        }
        return ((this._mutable = !1), this);
      };
      _proto4.set = function set(t, e) {
        var n = this.getWithTombstone(t);
        if (n === e) return this;
        var r = this.getNursery();
        return (
          (n !== Y && void 0 !== n) ||
            (this._size++, n === Y && r["delete"](t)),
          r.set(t, e),
          this
        );
      };
      _proto4["delete"] = function _delete(t) {
        var e = this.has(t);
        return (e && (this.getNursery().set(t, Y), this._size--), e);
      };
      _proto4.getOrInsert = function getOrInsert(t, e) {
        var n = this.get(t);
        return void 0 !== n ? n : (this.set(t, e), e);
      };
      _proto4.getOrInsertComputed = function getOrInsertComputed(t, e) {
        var n = this.get(t);
        if (void 0 !== n) return n;
        var r = e(t);
        return (this.set(t, r), r);
      };
      _proto4.clear = function clear() {
        ((this._mutable = !1),
          (this._old = void 0),
          (this._nursery = void 0),
          (this._size = 0));
      };
      _proto4.keys = function* keys() {
        for (var _t8 of this.entries()) yield _t8[0];
      };
      _proto4.values = function* values() {
        for (var _t9 of this.entries()) yield _t9[1];
      };
      _proto4.entries = function* entries() {
        var t = this._nursery,
          e = this._old;
        if (e)
          for (var _n6 of e) {
            var _e9 = _n6[0],
              _r3 = t ? t.get(_e9) : void 0;
            _r3 !== Y && (void 0 !== _r3 && (_n6[1] = _r3), yield _n6);
          }
        if (t)
          for (var _n7 of t)
            _n7[1] === Y || (e && e.has(_n7[0])) || (yield _n7);
      };
      _proto4.forEach = function forEach(t, e) {
        void 0 !== e && (t = t.bind(e));
        for (var _ref4 of this.entries()) {
          var _e0 = _ref4[0];
          var _n8 = _ref4[1];
          t(_n8, _e0, this);
        }
      };
      _proto4[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this.entries();
        };
      return babelHelpers.createClass(H, [
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
    function J(t, e, n, r, o, i) {
      var s = t.getFirstChild();
      for (; null !== s; ) {
        var _t0 = s.__key;
        (s.__parent === e &&
          (zo(s) && J(s, _t0, n, r, o, i),
          n.has(_t0) || i["delete"](_t0),
          o.push(_t0)),
          (s = s.getNextSibling()));
      }
    }
    var G = !1,
      V = 0;
    function q(t) {
      V = t.timeStamp;
    }
    function X(t, e, n) {
      var r = "BR" === t.nodeName,
        o = e.__lexicalLineBreak;
      return (
        (o && (t === o || (r && t.previousSibling === o))) ||
        (r && void 0 !== zi(t, n))
      );
    }
    function Q(t, e, n) {
      var r = bs(xs(n));
      var o = null,
        i = null;
      null !== r &&
        r.anchorNode === t &&
        ((o = r.anchorOffset), (i = r.focusOffset));
      var s = t.nodeValue;
      null !== s && Qi(e, s, o, i, !1);
    }
    function Z(t, e, n) {
      if (Rr(t)) {
        var _e1 = t.anchor.getNode();
        if (_e1.is(n) && t.format !== _e1.getFormat()) return !1;
      }
      return bi(e) && n.isAttached();
    }
    function tt(t, e, n) {
      for (var _r4 = t; _r4 && !Xs(_r4); _r4 = hs(_r4)) {
        var _t1 = zi(_r4, e);
        if (void 0 !== _t1) {
          var _e10 = Li(_t1, n);
          if (_e10) return Uo(_e10) || !As(_r4) ? void 0 : [_r4, _e10];
        }
      }
    }
    function et(t, e, n) {
      G = !0;
      var r = performance.now() - V > 100;
      try {
        Ko(t, function () {
          var i =
              Zr() ||
              (function (t) {
                return t.getEditorState().read(function () {
                  var t = Zr();
                  return null !== t ? t.clone() : null;
                });
              })(t),
            s = new Map(),
            l = t._editorState,
            c = t._blockCursorElement;
          var a = !1,
            u = "";
          for (var _n9 = 0; _n9 < e.length; _n9++) {
            var _f = e[_n9],
              _d = _f.type,
              _h = _f.target,
              _g = tt(_h, t, l);
            if (!_g) continue;
            var _2 = _g[0],
              _p = _g[1];
            if ("characterData" === _d)
              r && Or(_p) && bi(_h) && Z(i, _h, _p) && Q(_h, _p, t);
            else if ("childList" === _d) {
              a = !0;
              var _e11 = _f.addedNodes;
              for (var _n0 = 0; _n0 < _e11.length; _n0++) {
                var _r5 = _e11[_n0],
                  _i3 = Ki(_r5),
                  _s3 = _r5.parentNode;
                if (
                  null != _s3 &&
                  _r5 !== c &&
                  null === _i3 &&
                  !X(_r5, _s3, t) &&
                  !Xs(_r5)
                ) {
                  if (o) {
                    var _t10 =
                      (As(_r5) ? _r5.innerText : null) || _r5.nodeValue;
                    _t10 && (u += _t10);
                  }
                  _s3.removeChild(_r5);
                }
              }
              var _n1 = _f.removedNodes,
                _r6 = _n1.length;
              if (_r6 > 0) {
                var _e12 = 0;
                for (var _o3 = 0; _o3 < _r6; _o3++) {
                  var _r7 = _n1[_o3];
                  (X(_r7, _h, t) || c === _r7) && (_h.appendChild(_r7), _e12++);
                }
                _r6 !== _e12 && s.set(_2, _p);
              }
            }
          }
          if (s.size > 0)
            for (var _ref6 of s) {
              var _e13 = _ref6[0];
              var _n10 = _ref6[1];
              _n10.reconcileObservedMutation(_e13, t);
            }
          var f = n.takeRecords();
          if (f.length > 0) {
            for (var _e14 = 0; _e14 < f.length; _e14++) {
              var _n11 = f[_e14],
                _r8 = _n11.addedNodes,
                _o4 = _n11.target;
              for (var _e15 = 0; _e15 < _r8.length; _e15++) {
                var _n12 = _r8[_e15],
                  _i4 = _n12.parentNode;
                null == _i4 ||
                  "BR" !== _n12.nodeName ||
                  X(_n12, _o4, t) ||
                  _i4.removeChild(_n12);
              }
            }
            n.takeRecords();
          }
          null !== i && (a && ji(i), o && us(t) && i.insertRawText(u));
        });
      } finally {
        G = !1;
      }
    }
    function nt(t) {
      var e = t._observer;
      if (null !== e) {
        et(t, e.takeRecords(), e);
      }
    }
    function rt(t) {
      (!(function (t) {
        0 === V && xs(t).addEventListener("textInput", q, !0);
      })(t),
        (t._observer = new MutationObserver(function (e, n) {
          et(t, e, n);
        })));
    }
    var ot = function ot(t, e) {
      ((this.key = t),
        (this.parse = e.parse.bind(e)),
        (this.unparse = (e.unparse || dt).bind(e)),
        (this.isEqual = (e.isEqual || Object.is).bind(e)),
        (this.defaultValue = this.parse(void 0)),
        (this.resetOnCopyNode = e.resetOnCopyNode || !1));
    };
    function it(t, e, n) {
      if (n === void 0) {
        n = "latest";
      }
      var r = ("latest" === n ? t.getLatest() : t).__state;
      return r ? r.getValue(e) : e.defaultValue;
    }
    function st(t) {
      var e = new Map(),
        n = new Set();
      for (
        var _r9 = "function" == typeof t ? t : t.replace;
        _r9.prototype && void 0 !== _r9.prototype.getType;
        _r9 = Object.getPrototypeOf(_r9)
      ) {
        var _tl = tl(_r9),
          _t11 = _tl.ownNodeConfig;
        if (_t11 && _t11.stateConfigs)
          for (var _r0 of _t11.stateConfigs) {
            var _t12 = void 0;
            ("stateConfig" in _r0
              ? ((_t12 = _r0.stateConfig), _r0.flat && n.add(_t12.key))
              : (_t12 = _r0),
              e.set(_t12.key, _t12));
          }
      }
      return { flatKeys: n, sharedConfigMap: e };
    }
    var lt = new Set(["__proto__", "constructor", "prototype"]);
    var _ct = (function () {
      function ct(t, e, n, r, o) {
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
                    for (var _o5 in e) {
                      var _e16 = t.get(_o5);
                      (_e16 && n.has(_e16)) || r++;
                    }
                  return r;
                })(i, n, r);
        this.size = s;
      }
      var _proto5 = ct.prototype;
      _proto5.getValue = function getValue(t) {
        var e = this.knownState.get(t);
        if (void 0 !== e) return e;
        this.sharedNodeState.sharedConfigMap.set(t.key, t);
        var n = t.defaultValue;
        if (this.unknownState && t.key in this.unknownState) {
          var _e17 = this.unknownState[t.key];
          (void 0 !== _e17 && (n = t.parse(_e17)), this.updateFromKnown(t, n));
        }
        return n;
      };
      _proto5.getInternalState = function getInternalState() {
        return [this.unknownState, this.knownState];
      };
      _proto5.toJSON = function toJSON() {
        var t = babelHelpers["extends"]({}, this.unknownState),
          e = {};
        for (var _ref8 of this.knownState) {
          var _e18 = _ref8[0];
          var _n13 = _ref8[1];
          _e18.isEqual(_n13, _e18.defaultValue)
            ? delete t[_e18.key]
            : (t[_e18.key] = _e18.unparse(_n13));
        }
        for (var _n14 of this.sharedNodeState.flatKeys)
          _n14 in t && ((e[_n14] = t[_n14]), delete t[_n14]);
        return (ft(t) && (e.$ = t), e);
      };
      _proto5.getWritable = function getWritable(t) {
        if (this.node === t) return this;
        var e = this.sharedNodeState,
          n = this.unknownState,
          r = new Map(this.knownState);
        return new ct(
          t,
          e,
          (function (t, e, n) {
            var r;
            if (n)
              for (var _ref0 of Object.entries(n)) {
                var _o6 = _ref0[0];
                var _i5 = _ref0[1];
                {
                  if (lt.has(_o6)) continue;
                  var _n15 = t.get(_o6);
                  _n15
                    ? e.has(_n15) || e.set(_n15, _n15.parse(_i5))
                    : ((r = r || {}), (r[_o6] = _i5));
                }
              }
            return r;
          })(e.sharedConfigMap, r, n),
          r,
          this.size,
        );
      };
      _proto5.resetOnCopyNode = function resetOnCopyNode() {
        for (var _t13 of this.knownState.keys())
          _t13.resetOnCopyNode && this.knownState.set(_t13, _t13.defaultValue);
        return this;
      };
      _proto5.updateFromKnown = function updateFromKnown(t, e) {
        var n = t.key;
        this.sharedNodeState.sharedConfigMap.set(n, t);
        var r = this.knownState,
          o = this.unknownState;
        (r.has(t) ||
          (o && n in o) ||
          (o && (delete o[n], (this.unknownState = ft(o))), this.size++),
          r.set(t, e));
      };
      _proto5.updateFromUnknown = function updateFromUnknown(t, e) {
        if (lt.has(t)) return;
        var n = this.sharedNodeState.sharedConfigMap.get(t);
        n
          ? this.updateFromKnown(n, n.parse(e))
          : ((this.unknownState = this.unknownState || {}),
            t in this.unknownState || this.size++,
            (this.unknownState[t] = e));
      };
      _proto5.updateFromJSON = function updateFromJSON(t) {
        var e = this.knownState;
        for (var _t14 of e.keys()) e.set(_t14, _t14.defaultValue);
        if (((this.size = e.size), (this.unknownState = void 0), t))
          for (var _ref10 of Object.entries(t)) {
            var _e19 = _ref10[0];
            var _n16 = _ref10[1];
            this.updateFromUnknown(_e19, _n16);
          }
      };
      return ct;
    })();
    function at(t) {
      var e = t.getWritable(),
        n = e.__state ? e.__state.getWritable(e) : new _ct(e, ut(e));
      return ((e.__state = n), n);
    }
    function ut(t) {
      return t.__state
        ? t.__state.sharedNodeState
        : mi(Ks(), t.getType()).sharedNodeState;
    }
    function ft(t) {
      if (t) for (var _e20 in t) return t;
    }
    function dt(t) {
      return t;
    }
    function ht(t, e, n) {
      for (var _ref12 of e.knownState) {
        var _r1 = _ref12[0];
        var _o7 = _ref12[1];
        {
          if (t.has(_r1.key)) continue;
          t.add(_r1.key);
          var _e21 = n ? n.getValue(_r1) : _r1.defaultValue;
          if (_e21 !== _o7 && !_r1.isEqual(_e21, _o7)) return !0;
        }
      }
      return !1;
    }
    function gt(t, e, n) {
      var r = e.unknownState,
        o = n ? n.unknownState : void 0;
      if (r)
        for (var _ref14 of Object.entries(r)) {
          var _e22 = _ref14[0];
          var _n17 = _ref14[1];
          if (t.has(_e22)) continue;
          t.add(_e22);
          if (_n17 !== (o ? o[_e22] : void 0)) return !0;
        }
      return !1;
    }
    function _t(t, e) {
      var n = t.__state;
      return n && n.node === t ? n.getWritable(e) : n;
    }
    function pt(t, e) {
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
              (t && ht(n, t, e)) ||
              (e && ht(n, e, t)) ||
              (t && gt(n, t, e)) ||
              (e && gt(n, e, t))
            );
          })(c, a))
      );
    }
    function yt(t, e) {
      var n = t.mergeWithSibling(e),
        r = vo()._normalizedNodes;
      return (r.add(t.__key), r.add(e.__key), n);
    }
    function mt(t) {
      var e,
        n,
        r = t;
      if ("" !== r.__text || !r.isSimpleText() || r.isUnmergeable()) {
        for (
          ;
          null !== (e = r.getPreviousSibling()) &&
          Or(e) &&
          e.isSimpleText() &&
          !e.isUnmergeable();
        ) {
          if ("" !== e.__text) {
            if (pt(e, r)) {
              r = yt(e, r);
              break;
            }
            break;
          }
          e.remove();
        }
        for (
          ;
          null !== (n = r.getNextSibling()) &&
          Or(n) &&
          n.isSimpleText() &&
          !n.isUnmergeable();
        ) {
          if ("" !== n.__text) {
            if (pt(r, n)) {
              r = yt(r, n);
              break;
            }
            break;
          }
          n.remove();
        }
      } else r.remove();
    }
    function xt(t) {
      return (Ct(t.anchor), Ct(t.focus), t);
    }
    function Ct(t) {
      for (; "element" === t.type; ) {
        var _e23 = t.getNode(),
          _n18 = t.offset;
        var _r10 = void 0,
          _o8 = void 0;
        if (
          (_n18 === _e23.getChildrenSize()
            ? ((_r10 = _e23.getChildAtIndex(_n18 - 1)), (_o8 = !0))
            : ((_r10 = _e23.getChildAtIndex(_n18)), (_o8 = !1)),
          Or(_r10))
        ) {
          t.set(_r10.__key, _o8 ? _r10.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!zo(_r10)) break;
        t.set(_r10.__key, _o8 ? _r10.getChildrenSize() : 0, "element", !0);
      }
    }
    var St = Symbol["for"]("@lexical/CachedTextSize");
    function Tt(e, n) {
      return Bt.read(
        function () {
          var r = 0,
            o = e;
          for (var _e24 = 0; _e24 < n && null !== o; _e24++) {
            var _i6 = Kt.get(o);
            if ((void 0 === _i6 && t(345, o), zo(_i6))) {
              var _s4 = zt.get(o);
              if (void 0 !== _s4 && zo(_s4) && _s4.__parent !== _i6.__parent)
                r += _i6.getTextContentSize();
              else {
                var _e25 = $t.get(o),
                  _n19 = _e25 && _e25.__lexicalTextContent;
                ("string" != typeof _n19 && t(346, _i6.getType()),
                  (r += _n19.length));
              }
              _e24 < n - 1 && !_i6.isInline() && (r += 2);
            } else {
              var _e26 = _i6[St];
              (void 0 === _e26 && t(347, _i6.getType(), o), (r += _e26));
            }
            o = _i6.__next;
          }
          return r;
        },
        { editor: Ot },
      );
    }
    function Nt(t) {
      zo(t) ||
        (void 0 === t[St] &&
          (t[St] = Or(t) ? t.__text.length : t.getTextContentSize()));
    }
    var vt = 4;
    var kt,
      Ot,
      Et,
      bt = "",
      Mt = null,
      At = null,
      wt = null;
    function Dt() {
      return { firstTextKey: wt, format: Mt, style: At };
    }
    function It(t) {
      null !== t.firstTextKey &&
        ((Mt = t.format), (At = t.style), (wt = t.firstTextKey));
    }
    function Pt(e) {
      if (null !== wt) return;
      var n = e.__lexicalFirstTextKey;
      if ((void 0 === n && t(348), null === n)) return;
      var r = zt.get(n);
      Or(r) && ((Mt = r.getFormat()), (At = r.getStyle()), (wt = n));
    }
    var Ft,
      Rt,
      Lt,
      Kt,
      Bt,
      zt,
      $t,
      Wt,
      Ut,
      Yt,
      jt = !1,
      Ht = !1;
    function Jt(t, e) {
      var n = Kt.get(t),
        r = zt.has(t);
      if (null !== e) {
        var _n20 = ue(t);
        _n20.parentNode === e && e.removeChild(_n20);
      }
      if (!r) {
        if ((Ot._keyToDOMMap["delete"](t), zo(n))) {
          var _t15 = nl(n, Kt);
          Gt(_t15, 0, _t15.length - 1, null);
        }
        void 0 !== n && ls(Ut, Et, Ft, n, "destroyed");
      }
    }
    function Gt(t, e, n, r) {
      for (var _o9 = e; _o9 <= n; ++_o9) {
        var _e27 = t[_o9];
        void 0 !== _e27 && Jt(_e27, r);
      }
    }
    function Vt(t, e) {
      t.setProperty("text-align", e);
    }
    var qt = "40px";
    function Xt(t, e) {
      var n = kt.theme.indent;
      if ("string" == typeof n) {
        var _r11 = t.classList.contains(n);
        e > 0 && !_r11
          ? t.classList.add(n)
          : e < 1 && _r11 && t.classList.remove(n);
      }
      t.style.setProperty(
        "padding-inline-start",
        0 === e
          ? ""
          : "calc(" + e + " * var(--lexical-indent-base-value, " + qt + "))",
      );
    }
    function Qt(t, e) {
      var n = t.style;
      0 === e
        ? Vt(n, "")
        : 1 === e
          ? Vt(n, "left")
          : 2 === e
            ? Vt(n, "center")
            : 3 === e
              ? Vt(n, "right")
              : 4 === e
                ? Vt(n, "justify")
                : 5 === e
                  ? Vt(n, "start")
                  : 6 === e && Vt(n, "end");
    }
    function Zt(t, e) {
      var n = (function (t) {
        var e = t.__dir;
        if (null !== e) return e;
        if (jo(t)) return null;
        var n = t.getParentOrThrow();
        return Ss(n) && null === n.__dir ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function te(e, n) {
      var r = zt.get(e);
      if ((void 0 === r && t(60), null !== n)) {
        var _t16 = Kt.get(e);
        if (void 0 !== _t16 && _t16.__parent !== r.__parent) {
          var _t17 = $t.get(e);
          if (void 0 !== _t17) return (n.insertChild(_t17), ie(e, n.element));
        }
      }
      var o = Yt.$createDOM(r, Ot);
      if (
        ((function (t, e, n) {
          var r = n._keyToDOMMap;
          (Bi(e, n, t), r.set(t, e));
        })(e, o, Ot),
        Or(r)
          ? o.setAttribute("data-lexical-text", "true")
          : Uo(r) &&
            (o.setAttribute("data-lexical-decorator", "true"),
            qs(o, { captureSelection: !0 })),
        zo(r))
      ) {
        var _t18 = r.__indent,
          _e28 = r.__size;
        if ((Zt(o, r), 0 !== _t18 && Xt(o, _t18), 0 === _e28))
          ((o.__lexicalTextContent = ""), (o.__lexicalFirstTextKey = null));
        else {
          var _t19 = _e28 - 1;
          ee(nl(r, zt), r, 0, _t19, zs(r, o, Ot));
        }
        var _n21 = r.__format;
        (0 !== _n21 && Qt(o, _n21), r.isInline() || ne(null, r, o));
      } else {
        var _t20 = r.getTextContent();
        if (Uo(r)) {
          var _t21 = r.decorate(Ot, kt);
          (null !== _t21 && se(e, _t21), (o.contentEditable = "false"));
        }
        bt += _t20;
      }
      return (
        null !== n && n.insertChild(o),
        Yt.$decorateDOM(r, null, o, Ot),
        Nt(r),
        ls(Ut, Et, Ft, r, "created"),
        o
      );
    }
    function ee(e, n, r, o, i) {
      var s = bt,
        l = Dt();
      ((bt = ""), (Mt = null), (At = null), (wt = null));
      var c = r;
      for (; c <= o; ++c) {
        var _t22 = Dt();
        te(e[c], i);
        var _n22 = zt.get(e[c]);
        (null !== _n22 && Or(_n22)
          ? null === Mt &&
            ((Mt = _n22.getFormat()), (At = _n22.getStyle()), (wt = _n22.__key))
          : zo(_n22) && c < o && !_n22.isInline() && (bt += N),
          It(_t22));
      }
      var a = Ot._keyToDOMMap.get(n.__key);
      (void 0 === a && t(349, n.__key),
        (a.__lexicalTextContent = bt),
        (a.__lexicalFirstTextKey = wt),
        (bt = s + bt),
        It(l));
    }
    function ne(t, e, n) {
      var _r$element$__lexicalL;
      var r = zs(e, n, Ot),
        o =
          (_r$element$__lexicalL = r.element.__lexicalLastChildKind) != null
            ? _r$element$__lexicalL
            : null,
        i = (function (t, e) {
          if (t) {
            var _n23 = t.__last;
            if (_n23) {
              var _t23 = e.get(_n23);
              if (_t23)
                return ti(_t23)
                  ? "line-break"
                  : Uo(_t23) && _t23.isInline()
                    ? "decorator"
                    : null;
            }
            return "empty";
          }
          return null;
        })(e, zt);
      o !== i && r.setManagedLineBreak(i);
    }
    function re(e, n, r) {
      var o;
      ((Mt = null),
        (At = null),
        (wt = null),
        (function (e, n, r) {
          var o = bt,
            i = e.__size,
            s = n.__size;
          bt = "";
          var l = r.element,
            c = Ot._keyToDOMMap.get(n.__key);
          void 0 === c && t(351, n.__key);
          var a = s - i;
          if (
            !jt &&
            Math.abs(a) <= 1 &&
            i >= vt &&
            e.__first === n.__first &&
            (0 !== a || !Ot._cloneNotNeeded.has(e.__key))
          ) {
            var _i7 = c.__lexicalTextContent,
              _u = Wt.get(e.__key);
            if (!jt && "string" == typeof _i7 && void 0 !== _u) {
              var _s5 = (function (t, e) {
                var n = e.size;
                if (0 === n || n >= t.__size) return null;
                var r = t.__last,
                  o = null,
                  i = 0;
                for (; null !== r && i < n; ) {
                  if (!e.has(r)) return null;
                  o = r;
                  var _t24 = zt.get(r);
                  if (void 0 === _t24) return null;
                  ((r = _t24.__prev), i++);
                }
                if (i !== n) return null;
                if (null !== r && e.has(r)) return null;
                return o;
              })(n, _u);
              if (null !== _s5) {
                var _f2 = _u.size;
                if (0 === a) {
                  var _e29 = Tt(_s5, _f2);
                  var _r12 = _s5,
                    _a = 0;
                  for (; null !== _r12 && _a < _f2; ) {
                    var _t25 = zt.get(_r12);
                    if (void 0 === _t25) break;
                    var _e30 = Dt();
                    (ie(_r12, l),
                      Or(_t25) &&
                        null === Mt &&
                        ((Mt = _t25.getFormat()),
                        (At = _t25.getStyle()),
                        (wt = _t25.__key)),
                      It(_e30),
                      (_r12 = _t25.__next),
                      _a++);
                  }
                  var _d2 = "";
                  for (_r12 = _s5, _a = 0; null !== _r12 && _a < _f2; ) {
                    var _e31 = zt.get(_r12);
                    if (void 0 === _e31) break;
                    var _n24 = void 0;
                    if (zo(_e31)) {
                      var _o0 = Ot._keyToDOMMap.get(_r12),
                        _i8 = _o0 && _o0.__lexicalTextContent;
                      ("string" != typeof _i8 && t(352, _e31.getType()),
                        (_n24 = _i8));
                    } else _n24 = _e31.getTextContent();
                    ((_d2 += _n24),
                      _a < _f2 - 1 &&
                        zo(_e31) &&
                        !_e31.isInline() &&
                        (_d2 += N),
                      (_r12 = _e31.__next),
                      _a++);
                  }
                  var _h2 = _i7.slice(0, _i7.length - _e29) + _d2;
                  return (
                    (c.__lexicalTextContent = _h2),
                    (bt = o + _h2),
                    void oe(n, c, _u)
                  );
                }
                if (
                  (function (e, n, r, o, i, s, l, c) {
                    if (1 !== c && -1 !== c) return !1;
                    var a = 1 === c ? 2 : 1;
                    if (l !== a) return !1;
                    var u = l - c;
                    var f = e.__last;
                    for (var _t26 = 0; _t26 < u - 1; _t26++) {
                      if (null === f) return !1;
                      var _t27 = Kt.get(f);
                      if (void 0 === _t27) return !1;
                      f = _t27.__prev;
                    }
                    if (null === f) return !1;
                    var d = zt.get(s),
                      h = Kt.get(f);
                    if (void 0 === d || void 0 === h) return !1;
                    if (d.__prev !== h.__prev) return !1;
                    var g = [];
                    var _ = s;
                    for (var _t28 = 0; _t28 < l; _t28++) {
                      if (null === _) return !1;
                      g.push(_);
                      var _t29 = zt.get(_);
                      _ = _t29 ? _t29.__next : null;
                    }
                    var p = [];
                    _ = f;
                    for (var _t30 = 0; _t30 < u; _t30++) {
                      if (null === _) return !1;
                      p.push(_);
                      var _t31 = Kt.get(_);
                      _ = _t31 ? _t31.__next : null;
                    }
                    var y = new Set(p),
                      m = new Set(g),
                      x = [];
                    var C = 0,
                      S = 0;
                    for (; C < u && S < l; )
                      if (g[S] === p[C])
                        (x.push({ key: g[S], kind: "reconcile" }), C++, S++);
                      else if (m.has(p[C])) {
                        if (y.has(g[S])) return !1;
                        (x.push({ key: g[S], kind: "create", nextIndex: S }),
                          S++);
                      } else (x.push({ key: p[C], kind: "destroy" }), C++);
                    for (; C < u; ) x.push({ key: p[C++], kind: "destroy" });
                    for (; S < l; )
                      (x.push({ key: g[S], kind: "create", nextIndex: S }),
                        S++);
                    var T = Tt(f, u);
                    for (var _t32 of x) {
                      var _e32 = Dt();
                      if ("reconcile" === _t32.kind) ie(_t32.key, r.element);
                      else if ("destroy" === _t32.kind) Jt(_t32.key, r.element);
                      else {
                        var _e33 = null;
                        for (var _n25 = _t32.nextIndex + 1; _n25 < l; _n25++) {
                          var _t33 = Ot._keyToDOMMap.get(g[_n25]);
                          if (void 0 !== _t33) {
                            _e33 = _t33;
                            break;
                          }
                        }
                        te(
                          _t32.key,
                          r.withBefore(_e33 != null ? _e33 : r.before),
                        );
                      }
                      if ("destroy" !== _t32.kind) {
                        var _e34 = zt.get(_t32.key);
                        _e34 &&
                          Or(_e34) &&
                          null === Mt &&
                          ((Mt = _e34.getFormat()),
                          (At = _e34.getStyle()),
                          (wt = _e34.__key));
                      }
                      It(_e32);
                    }
                    var v = "";
                    for (var _e35 = 0; _e35 < l; _e35++) {
                      var _n26 = zt.get(g[_e35]);
                      if (void 0 === _n26) return !1;
                      var _r13 = void 0;
                      if (zo(_n26)) {
                        var _o1 = Ot._keyToDOMMap.get(g[_e35]),
                          _i9 = _o1 && _o1.__lexicalTextContent;
                        ("string" != typeof _i9 && t(350, _n26.getType()),
                          (_r13 = _i9));
                      } else _r13 = _n26.getTextContent();
                      ((v += _r13),
                        _e35 < l - 1 &&
                          zo(_n26) &&
                          !_n26.isInline() &&
                          (v += N));
                    }
                    var k = i.slice(0, i.length - T) + v;
                    return ((o.__lexicalTextContent = k), !0);
                  })(e, 0, r, c, _i7, _s5, _f2, a)
                ) {
                  var _e36 = c.__lexicalTextContent;
                  return (
                    "string" != typeof _e36 && t(353),
                    (bt = o + _e36),
                    void oe(n, c, _u)
                  );
                }
              }
            }
            if (0 === a) {
              var _n27 = e.__first,
                _r14 = 0;
              for (; null !== _n27; ) {
                var _e37 = zt.get(_n27);
                if (void 0 === _e37) break;
                var _o10 = jt || Lt.has(_n27) || Rt.has(_n27),
                  _i0 = Dt();
                if (_o10) ie(_n27, l);
                else {
                  var _r15 = void 0,
                    _o11 = void 0;
                  if (zo(_e37)) {
                    _o11 = $t.get(_n27);
                    var _i1 = _o11 && _o11.__lexicalTextContent;
                    ("string" != typeof _i1 && t(354, _e37.getType()),
                      (_r15 = _i1));
                  } else _r15 = _e37.getTextContent();
                  ((bt += _r15), void 0 !== _o11 && Pt(_o11));
                }
                (Or(_e37)
                  ? null === Mt &&
                    ((Mt = _e37.getFormat()),
                    (At = _e37.getStyle()),
                    (wt = _e37.__key))
                  : zo(_e37) && _r14 < s - 1 && !_e37.isInline() && (bt += N),
                  It(_i0),
                  (_n27 = _e37.__next),
                  _r14++);
              }
              return (
                (c.__lexicalTextContent = bt),
                (c.__lexicalFirstTextKey = wt),
                void (bt = o + bt)
              );
            }
          }
          if (1 === i && 1 === s) {
            var _t34 = e.__first,
              _o12 = n.__first;
            if (_t34 === _o12) ie(_t34, l);
            else {
              var _e38 = ue(_t34),
                _n28 = te(_o12, null);
              try {
                _e38.parentNode === l
                  ? l.replaceChild(_n28, _e38)
                  : r.insertChild(_n28);
              } catch (r) {
                if ("object" == typeof r && null != r) {
                  var _i10 =
                    r.toString() +
                    " Parent: " +
                    l.tagName +
                    ", new child: {tag: " +
                    _n28.tagName +
                    " key: " +
                    _o12 +
                    "}, old child: {tag: " +
                    _e38.tagName +
                    ", key: " +
                    _t34 +
                    "}.";
                  throw new Error(_i10);
                }
                throw r;
              }
              Jt(_t34, null);
            }
            var _i11 = zt.get(_o12);
            Or(_i11) &&
              null === Mt &&
              ((Mt = _i11.getFormat()),
              (At = _i11.getStyle()),
              (wt = _i11.__key));
          } else {
            var _o13 = nl(e, Kt),
              _c = nl(n, zt);
            if (
              (_o13.length !== i && t(227), _c.length !== s && t(228), 0 === i)
            )
              0 !== s && ee(_c, n, 0, s - 1, r);
            else if (0 === s) {
              if (0 !== i) {
                var _t35 =
                  null == r.after &&
                  null == r.before &&
                  null == r.element.__lexicalLineBreak;
                (Gt(_o13, 0, i - 1, _t35 ? null : l),
                  _t35 && (l.textContent = ""));
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
                  var _t36 = e[f],
                    _r16 = n[d],
                    _o14 = Dt();
                  if (_t36 === _r16) ((u = le(ie(_r16, i.element))), f++, d++);
                  else {
                    if ((void 0 === a && (a = ce(n, d)), void 0 === c))
                      c = ce(e, f);
                    else if (!c.has(_t36)) {
                      (f++, It(_o14));
                      continue;
                    }
                    if (!a.has(_t36)) {
                      ((u = le(ue(_t36))),
                        Jt(_t36, i.element),
                        f++,
                        c["delete"](_t36),
                        It(_o14));
                      continue;
                    }
                    if (c.has(_r16)) {
                      var _t37 = ds(Ot, _r16);
                      (_t37 !== u &&
                        i
                          .withBefore(u != null ? u : i.before)
                          .insertChild(_t37),
                        (u = le(ie(_r16, i.element))),
                        f++,
                        d++);
                    } else
                      (te(_r16, i.withBefore(u != null ? u : i.before)), d++);
                  }
                  var _s6 = zt.get(_r16);
                  (null !== _s6 && Or(_s6)
                    ? null === Mt &&
                      ((Mt = _s6.getFormat()),
                      (At = _s6.getStyle()),
                      (wt = _s6.__key))
                    : zo(_s6) && d <= l && !_s6.isInline() && (bt += N),
                    It(_o14));
                }
                var h = f > s,
                  g = d > l;
                if (h && !g) {
                  var _e39 = n[l + 1],
                    _r17 = void 0 === _e39 ? null : Ot.getElementByKey(_e39);
                  ee(n, t, d, l, i.withBefore(_r17 != null ? _r17 : i.before));
                } else g && !h && Gt(e, f, s, i.element);
              })(n, _o13, _c, i, s, r);
          }
          ((c.__lexicalTextContent = bt),
            (c.__lexicalFirstTextKey = wt),
            (bt = o + bt));
        })(e, n, zs(n, r, Ot)),
        Ss(n) ||
          ((o = n),
          null == Mt || Mt === o.__textFormat || Ht || o.setTextFormat(Mt),
          (function (t) {
            null == At || At === t.__textStyle || Ht || t.setTextStyle(At);
          })(n)));
    }
    function oe(t, e, n) {
      var r = e.__lexicalFirstTextKey;
      if (null != r) {
        var _e40 = t.__key;
        var _o15 = r;
        for (; null !== _o15; ) {
          var _t38 = zt.get(_o15);
          if (void 0 === _t38) {
            _o15 = null;
            break;
          }
          if (_t38.__parent === _e40) break;
          _o15 = _t38.__parent;
        }
        if (null !== _o15 && !n.has(_o15)) {
          var _t39 = zt.get(r);
          if (Or(_t39))
            return ((Mt = _t39.getFormat()), void (At = _t39.getStyle()));
        }
      }
      e.__lexicalFirstTextKey = wt;
    }
    function ie(e, n) {
      var r = Kt.get(e);
      var o = zt.get(e);
      (void 0 !== r && void 0 !== o) || t(61);
      var i = jt || Lt.has(e) || Rt.has(e),
        s = ds(Ot, e);
      if (r === o && !i) {
        var _e41;
        if (zo(r)) {
          var _n29 = s.__lexicalTextContent;
          ("string" != typeof _n29 && t(355, r.getType()),
            (_e41 = _n29),
            Pt(s));
        } else _e41 = r.getTextContent();
        return ((bt += _e41), s);
      }
      if (
        (r !== o && i && ls(Ut, Et, Ft, o, "updated"),
        Yt.$updateDOM(o, r, s, Ot))
      ) {
        var _r18 = te(e, null);
        return (
          null === n && t(62),
          n.replaceChild(_r18, s),
          Jt(e, null),
          _r18
        );
      }
      if (zo(r)) {
        zo(o) || t(334, e);
        var _n30 = o.__indent;
        (jt || _n30 !== r.__indent) && Xt(s, _n30);
        var _l2 = o.__format;
        if (((jt || _l2 !== r.__format) && Qt(s, _l2), i))
          (re(r, o, s), jo(o) || o.isInline() || ne(0, o, s));
        else {
          var _e42 = s.__lexicalTextContent;
          ("string" != typeof _e42 && t(356, r.getType()), (bt += _e42), Pt(s));
        }
        if (
          (jt || o.__dir !== r.__dir || o.__parent !== r.__parent) &&
          (Zt(s, o), jo(o) && !jt)
        )
          for (var _t40 of o.getChildren())
            if (zo(_t40)) {
              Zt(ds(Ot, _t40.getKey()), _t40);
            }
      } else {
        var _t41 = o.getTextContent();
        if (Uo(o)) {
          var _t42 = o.decorate(Ot, kt);
          null !== _t42 && se(e, _t42);
        }
        bt += _t41;
      }
      if (!Ht && jo(o)) {
        var _t43 = o.getLatest();
        if (_t43.__cachedText !== bt) {
          var _e43 = _t43.getWritable();
          ((_e43.__cachedText = bt), (o = _e43));
        }
      }
      return (Yt.$decorateDOM(o, r, s, Ot), Nt(o), s);
    }
    function se(t, e) {
      var n = Ot._pendingDecorators;
      var r = Ot._decorators;
      if (null === n) {
        if (r[t] === e) return;
        n = Wi(Ot);
      }
      n[t] = e;
    }
    function le(t) {
      var e = t.nextSibling;
      return (
        null !== e && e === Ot._blockCursorElement && (e = e.nextSibling),
        e
      );
    }
    function ce(t, e) {
      var n = new Set();
      for (var _r19 = e; _r19 < t.length; _r19++) n.add(t[_r19]);
      return n;
    }
    function ae(t, e, n, r, o, i) {
      ((bt = ""),
        (Mt = null),
        (At = null),
        (wt = null),
        (jt = 2 === r),
        (Ot = n),
        (kt = n._config),
        (Yt = n._config.dom || fi),
        (Et = n._nodes),
        (Ft = Ot._listeners.mutation),
        (Rt = o),
        (Lt = i),
        (Kt = t._nodeMap),
        (Bt = t),
        (zt = e._nodeMap),
        (Ht = e._readOnly),
        ($t = j(n._keyToDOMMap)),
        (Wt = (function () {
          var t = new Map(),
            e = function e(_e45) {
              for (var _n31 of _e45) {
                var _e44 = zt.get(_n31);
                if (void 0 === _e44) continue;
                var _r20 = _e44.__parent;
                if (null === _r20) continue;
                var _o16 = t.get(_r20);
                (void 0 === _o16 && ((_o16 = new Set()), t.set(_r20, _o16)),
                  _o16.add(_n31));
              }
            };
          return (e(Rt.keys()), e(Lt), t);
        })()));
      var s = new Map();
      return (
        (Ut = s),
        ie("root", null),
        (Ot = void 0),
        (Et = void 0),
        (Rt = void 0),
        (Lt = void 0),
        (Kt = void 0),
        (Bt = void 0),
        (zt = void 0),
        (kt = void 0),
        ($t = void 0),
        (Wt = void 0),
        (Ut = void 0),
        (Yt = fi),
        s
      );
    }
    function ue(e) {
      var n = $t.get(e);
      return (void 0 === n && t(75, e), n);
    }
    function fe(t) {
      return { type: t };
    }
    var de = fe("SELECTION_CHANGE_COMMAND"),
      he = fe("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"),
      ge = fe("CLICK_COMMAND"),
      _e = fe("BEFORE_INPUT_COMMAND"),
      pe = fe("INPUT_COMMAND"),
      ye = fe("COMPOSITION_START_COMMAND"),
      me = fe("COMPOSITION_END_COMMAND"),
      xe = fe("DELETE_CHARACTER_COMMAND"),
      Ce = fe("INSERT_LINE_BREAK_COMMAND"),
      Se = fe("INSERT_PARAGRAPH_COMMAND"),
      Te = fe("CONTROLLED_TEXT_INSERTION_COMMAND"),
      Ne = fe("PASTE_COMMAND"),
      ve = fe("REMOVE_TEXT_COMMAND"),
      ke = fe("DELETE_WORD_COMMAND"),
      Oe = fe("DELETE_LINE_COMMAND"),
      Ee = fe("FORMAT_TEXT_COMMAND"),
      be = fe("UNDO_COMMAND"),
      Me = fe("REDO_COMMAND"),
      Ae = fe("KEYDOWN_COMMAND"),
      we = fe("KEY_ARROW_RIGHT_COMMAND"),
      De = fe("MOVE_TO_END"),
      Ie = fe("KEY_ARROW_LEFT_COMMAND"),
      Pe = fe("MOVE_TO_START"),
      Fe = fe("KEY_ARROW_UP_COMMAND"),
      Re = fe("KEY_ARROW_DOWN_COMMAND"),
      Le = fe("KEY_ENTER_COMMAND"),
      Ke = fe("KEY_SPACE_COMMAND"),
      Be = fe("KEY_BACKSPACE_COMMAND"),
      ze = fe("KEY_ESCAPE_COMMAND"),
      $e = fe("KEY_DELETE_COMMAND"),
      We = fe("KEY_TAB_COMMAND"),
      Ue = fe("INSERT_TAB_COMMAND"),
      Ye = fe("INDENT_CONTENT_COMMAND"),
      je = fe("OUTDENT_CONTENT_COMMAND"),
      He = fe("DROP_COMMAND"),
      Je = fe("FORMAT_ELEMENT_COMMAND"),
      Ge = fe("DRAGSTART_COMMAND"),
      Ve = fe("DRAGOVER_COMMAND"),
      qe = fe("DRAGEND_COMMAND"),
      Xe = fe("COPY_COMMAND"),
      Qe = fe("CUT_COMMAND"),
      Ze = fe("SELECT_ALL_COMMAND"),
      tn = fe("CLEAR_EDITOR_COMMAND"),
      en = fe("CLEAR_HISTORY_COMMAND"),
      nn = fe("CAN_REDO_COMMAND"),
      rn = fe("CAN_UNDO_COMMAND"),
      on = fe("FOCUS_COMMAND"),
      sn = fe("BLUR_COMMAND"),
      ln = fe("KEY_MODIFIER_COMMAND"),
      cn = Object.freeze({}),
      an = [
        [
          "keydown",
          function (t, e) {
            ((un = t.timeStamp), (fn = t.key), "Backspace" !== t.key && In());
            if (e.isComposing()) return;
            fs(e, Ae, t);
          },
        ],
        [
          "pointerdown",
          function (t, e) {
            var n = t.target,
              r = t.pointerType;
            ws(n) &&
              "touch" !== r &&
              "pen" !== r &&
              0 === t.button &&
              Ko(e, function () {
                Qs(n, e) || (xn = !0);
              });
          },
        ],
        [
          "compositionstart",
          function (t, e) {
            fs(e, ye, t);
          },
        ],
        [
          "compositionend",
          function (t, e) {
            o
              ? (Sn = !0)
              : s || (!c && !f)
                ? fs(e, me, t)
                : ((Tn = !0), (Nn = t.data));
          },
        ],
        [
          "input",
          function (t, e) {
            (t.stopPropagation(),
              In(),
              Ko(
                e,
                function () {
                  e.dispatchCommand(pe, t);
                },
                { event: t },
              ),
              (hn = null));
          },
        ],
        [
          "click",
          function (t, e) {
            Ko(e, function () {
              var n = Zr(),
                r = bs(xs(e)),
                o = to();
              if (r)
                if (Rr(n)) {
                  var _t44 = n.anchor,
                    _e46 = _t44.getNode();
                  "element" === _t44.type &&
                    0 === _t44.offset &&
                    n.isCollapsed() &&
                    !jo(_e46) &&
                    1 === Yi().getChildrenSize() &&
                    _e46.getTopLevelElementOrThrow().isEmpty() &&
                    null !== o &&
                    n.is(o) &&
                    (r.removeAllRanges(), (n.dirty = !0));
                } else if (
                  "touch" === t.pointerType ||
                  "pen" === t.pointerType
                ) {
                  var _n32 = r.anchorNode;
                  if (As(_n32) || bi(_n32)) {
                    ji(Qr(o, r, e, t));
                  }
                }
              fs(e, ge, t);
            });
          },
        ],
        ["cut", cn],
        ["copy", cn],
        ["dragstart", cn],
        ["dragover", cn],
        ["dragend", cn],
        ["paste", cn],
        ["focus", cn],
        ["blur", cn],
        ["drop", cn],
      ];
    i &&
      an.push([
        "beforeinput",
        function (t, e) {
          return (function (t, e) {
            var n = t.inputType;
            if ("deleteCompositionText" === n || (o && us(e))) return;
            if ("insertCompositionText" === n) return;
            fs(e, _e, t);
          })(t, e);
        },
      ]);
    var un = 0,
      fn = null,
      dn = 0,
      hn = null,
      gn = !1,
      _n = null;
    var pn = new WeakMap(),
      yn = new WeakMap();
    var mn = !1,
      xn = !1,
      Cn = !1,
      Sn = !1,
      Tn = !1,
      Nn = "",
      vn = null,
      kn = [0, "", 0, "root", 0];
    function On(t, e, n, r, o) {
      var s = t.anchor,
        l = t.focus,
        c = s.getNode(),
        a = vo(),
        u = bs(xs(a)),
        f = null !== u ? u.anchorNode : null,
        d = s.key,
        h = a.getElementByKey(d),
        g = n.length;
      return (
        d !== l.key ||
        !Or(c) ||
        (((!o && (!i || dn < r + 50)) || (c.isDirty() && g < 2) || Ji(n)) &&
          s.offset !== l.offset &&
          !c.isComposing()) ||
        Ei(c) ||
        (c.isDirty() && g > 1) ||
        ((o || !i) && null !== h && !c.isComposing() && f !== Ws(c, h, a)) ||
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
            o = Oi(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!r.canInsertTextBefore() && !e.isComposing()) ||
                o ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (Or(e) || (zo(e) && e.isInline())) &&
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
    function En(t, e) {
      return (
        bi(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function bn(e, n, r) {
      var o = e.anchorNode,
        i = e.anchorOffset,
        s = e.focusNode,
        l = e.focusOffset;
      (mn && ((mn = !1), En(o, i) && En(s, l) && !vn)) ||
        Ko(n, function () {
          if (!r) return void ji(null);
          if (!Ti(n, o, s)) return;
          var c = Zr();
          if (vn && Rr(c) && c.isCollapsed()) {
            var _t45 = c.anchor,
              _e47 = vn.anchor;
            ((_t45.key === _e47.key && _t45.offset === _e47.offset + 1) ||
              (1 === _t45.offset &&
                _e47.getNode().is(_t45.getNode().getPreviousSibling()))) &&
              ((c = vn.clone()), ji(c));
          }
          if (((vn = null), Rr(c))) {
            var _r21 = c.anchor,
              _o17 = _r21.getNode();
            if (c.isCollapsed()) {
              "Range" === e.type &&
                e.anchorNode === e.focusNode &&
                (c.dirty = !0);
              var _i12 = xs(n).event,
                _s7 = _i12 ? _i12.timeStamp : performance.now(),
                _kn = kn,
                _l3 = _kn[0],
                _a2 = _kn[1],
                _u2 = _kn[2],
                _f3 = _kn[3],
                _d3 = _kn[4],
                _h3 = Yi(),
                _g2 = !1 === n.isComposing() && "" === _h3.getTextContent();
              if (_s7 < _d3 + 200 && _r21.offset === _u2 && _r21.key === _f3)
                Mn(c, _l3, _a2);
              else if ("text" === _r21.type) (Or(_o17) || t(141), An(c, _o17));
              else if ("element" === _r21.type && !_g2) {
                zo(_o17) || t(259);
                var _e48 = _r21.getNode();
                _e48.isEmpty()
                  ? (function (t, e) {
                      var n = e.getTextFormat(),
                        r = e.getTextStyle();
                      Mn(t, n, r);
                    })(c, _e48)
                  : Mn(c, c.format, "");
              }
            } else {
              var _t46 = _r21.key,
                _e49 = c.focus.key,
                _n33 = c.getNodes(),
                _o18 = _n33.length,
                _s8 = c.isBackward(),
                _a3 = _s8 ? l : i,
                _u3 = _s8 ? i : l,
                _f4 = _s8 ? _e49 : _t46,
                _d4 = _s8 ? _t46 : _e49;
              var _h4 = 2047,
                _g3 = !1;
              for (var _t47 = 0; _t47 < _o18; _t47++) {
                var _e50 = _n33[_t47],
                  _r22 = _e50.getTextContentSize();
                if (
                  Or(_e50) &&
                  0 !== _r22 &&
                  !(
                    (0 === _t47 && _e50.__key === _f4 && _a3 === _r22) ||
                    (_t47 === _o18 - 1 && _e50.__key === _d4 && 0 === _u3)
                  ) &&
                  ((_g3 = !0), (_h4 &= _e50.getFormat()), 0 === _h4)
                )
                  break;
              }
              c.format = _g3 ? _h4 : 0;
            }
          }
          fs(n, de, void 0);
        });
    }
    function Mn(t, e, n) {
      (t.format === e && t.style === n) ||
        ((t.format = e), (t.style = n), (t.dirty = !0));
    }
    function An(t, e) {
      Mn(t, e.getFormat(), e.getStyle());
    }
    function wn(t) {
      if (!t.getTargetRanges) return null;
      var e = t.getTargetRanges();
      return 0 === e.length ? null : e[0];
    }
    function Dn(t) {
      if (null == t || t.length <= 1 || null == fn) return;
      var e =
        1 === fn.length
          ? fn
          : "Enter" === fn
            ? "\n"
            : "Tab" === fn
              ? "\t"
              : null;
      if (!e) return;
      var n = Zr();
      if (!Rr(n) || !n.isCollapsed()) return;
      var r = n.anchor.getNode();
      if (!Or(r)) return;
      var o = n.anchor.offset;
      if (r.getTextContentSize() === o) {
        var _t48 = r.getNextSibling();
        if ("\n" === e) {
          if (ti(_t48)) _t48.selectEnd();
          else if (!_t48) {
            var _t49 = el(r, Gr),
              _e51 = _t49 && _t49.getNextSibling();
            zo(_e51) && _e51.selectStart();
          }
        } else
          "\t" === e
            ? Ar(_t48) && _t48.selectEnd()
            : Or(_t48) && _t48.getTextContent()[0] === e && _t48.select(1, 1);
      } else r.getTextContent()[o] === e && r.select(o + 1, o + 1);
    }
    function In() {
      ((gn = !1), null !== _n && (clearTimeout(_n), (_n = null)));
    }
    function Pn() {
      (In(), (gn = !0), (_n = setTimeout(In, 0)));
    }
    function Fn(e) {
      var _ref15;
      var n = e.inputType,
        r = wn(e),
        o = vo(),
        i = Zr();
      if ("insertText" === n && e.data && gn) {
        if ((In(), e.preventDefault(), Rr(i) && !i.isCollapsed())) {
          var _t50 = i.isBackward() ? i.anchor : i.focus;
          (i.anchor.set(_t50.key, _t50.offset, _t50.type),
            i.focus.set(_t50.key, _t50.offset, _t50.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === i) {
          var _t51 = to();
          if (!Rr(_t51)) return !0;
          ji(_t51.clone());
        }
        if (Rr(i)) {
          var _n34 = i.anchor.key === i.focus.key;
          if (
            ((l = e.timeStamp),
            "MediaLast" === fn && l < un + 30 && o.isComposing() && _n34)
          ) {
            if (
              (Fi(null),
              (un = 0),
              setTimeout(function () {
                Ko(o, function () {
                  Fi(null);
                });
              }, 30),
              Rr(i))
            ) {
              var _e52 = i.anchor.getNode();
              (_e52.markDirty(), Or(_e52) || t(142), An(i, _e52));
            }
          } else {
            if (
              (Fi(null),
              s &&
                null !== r &&
                !r.collapsed &&
                (i.applyDOMRange(r), !i.isCollapsed()))
            )
              return (e.preventDefault(), i.removeText(), !0);
            e.preventDefault();
            var _t52 = i.anchor.getNode(),
              _l4 = _t52.getTextContent(),
              _c2 = _t52.canInsertTextAfter(),
              _a4 = 0 === i.anchor.offset && i.focus.offset === _l4.length;
            var _f5 = u && _n34 && !_a4 && _c2;
            if (
              (_f5 && i.isCollapsed() && (_f5 = !Uo(as(i.anchor, !0))), !_f5)
            ) {
              fs(o, xe, !0);
              var _t53 = Zr();
              u &&
                Rr(_t53) &&
                _t53.isCollapsed() &&
                ((vn = _t53),
                setTimeout(function () {
                  return (vn = null);
                }));
            }
          }
          return !0;
        }
      }
      var l;
      if (!Rr(i)) return !0;
      var c = e.data;
      (null !== hn && Xi(!1, o, hn),
        (i.dirty && null === hn) ||
          !i.isCollapsed() ||
          jo(i.anchor.getNode()) ||
          null === r ||
          i.applyDOMRange(r),
        (hn = null));
      var a = i.anchor,
        f = i.focus,
        d = a.getNode(),
        h = f.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === c) (e.preventDefault(), fs(o, Ce, !1));
        else if (c === N) (e.preventDefault(), fs(o, Se, void 0));
        else if (null == c && e.dataTransfer) {
          var _t54 = e.dataTransfer.getData("text/plain");
          (e.preventDefault(), i.insertRawText(_t54));
        } else
          null != c && On(i, r, c, e.timeStamp, !0)
            ? (e.preventDefault(), fs(o, Te, c), Dn(c))
            : (hn = c);
        return ((dn = e.timeStamp), !0);
      }
      switch ((e.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          fs(o, Te, e);
          Dn(
            (_ref15 = e.dataTransfer
              ? e.dataTransfer.getData("text/plain")
              : null) != null
              ? _ref15
              : e.data,
          );
          break;
        case "insertFromComposition":
          (Fi(null), fs(o, Te, e));
          break;
        case "insertLineBreak":
          (Fi(null), fs(o, Ce, !1));
          break;
        case "insertParagraph":
          (Fi(null), Cn && !s ? ((Cn = !1), fs(o, Ce, !1)) : fs(o, Se, void 0));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          fs(o, Ne, e);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || zo(t) || zo(e) || !Oi(t) || !Oi(e);
          })(d, h) && fs(o, ve, e);
          break;
        case "deleteByDrag":
          (_s(rr), fs(o, ve, e));
          break;
        case "deleteByCut":
          fs(o, ve, e);
          break;
        case "deleteContent":
          fs(o, xe, !1);
          break;
        case "deleteWordBackward":
          fs(o, ke, !0);
          break;
        case "deleteWordForward":
          fs(o, ke, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          fs(o, Oe, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          fs(o, Oe, !1);
          break;
        case "formatStrikeThrough":
          fs(o, Ee, "strikethrough");
          break;
        case "formatBold":
          fs(o, Ee, "bold");
          break;
        case "formatItalic":
          fs(o, Ee, "italic");
          break;
        case "formatUnderline":
          fs(o, Ee, "underline");
          break;
        case "historyUndo":
          fs(o, be, void 0);
          break;
        case "historyRedo":
          fs(o, Me, void 0);
      }
      return !0;
    }
    function Rn(t) {
      var e = vo();
      if (As(t.target) && Qs(t.target, e)) return !0;
      var n = Zr(),
        r = t.data,
        s = wn(t);
      if (null != r && Rr(n) && On(n, s, r, t.timeStamp, !1)) {
        Sn && (Bn(e, r), (Sn = !1));
        var _s9 = n.anchor.getNode(),
          _l5 = bs(xs(e));
        if (null === _l5) return !0;
        var _c3 = n.isBackward(),
          _a5 = _c3 ? n.anchor.offset : n.focus.offset,
          _f6 = _c3 ? n.focus.offset : n.anchor.offset;
        (i &&
          !n.isCollapsed() &&
          Or(_s9) &&
          null !== _l5.anchorNode &&
          _s9.getTextContent().slice(0, _a5) +
            r +
            _s9.getTextContent().slice(_a5 + _f6) ===
            qi(_l5.anchorNode)) ||
          fs(e, Te, r);
        var _d5 = r.length;
        (o &&
          _d5 > 1 &&
          "insertCompositionText" === t.inputType &&
          !e.isComposing() &&
          ((n.anchor.offset -= _d5),
          (n._cachedNodes = null),
          (n._cachedIsBackward = null)),
          u && e.isComposing() && ((un = 0), Fi(null)));
      } else {
        (Xi(!1, e, null !== r ? r : void 0),
          Sn && (Bn(e, r || void 0), (Sn = !1)));
      }
      return (
        (function () {
          So();
          var t = vo();
          nt(t);
        })(),
        !0
      );
    }
    function Ln(t) {
      var e = vo(),
        n = Zr();
      if (Rr(n) && !e.isComposing()) {
        var _r23 = n.anchor,
          _o19 = n.anchor.getNode();
        (Fi(_r23.key),
          _s(or),
          (t.timeStamp < un + 30 ||
            "element" === _r23.type ||
            !n.isCollapsed() ||
            _o19.getFormat() !== n.format ||
            (Or(_o19) && _o19.getStyle() !== n.style)) &&
            fs(e, Te, v));
      }
      return !0;
    }
    function Kn(t) {
      return (Bn(vo(), t.data), _s(ir), !0);
    }
    function Bn(t, e) {
      var n = t._compositionKey;
      if ((Fi(null), null !== n && null != e)) {
        if ("" === e) {
          var _e53 = Li(n),
            _r24 = t.getElementByKey(n),
            _o20 = null !== _r24 && Or(_e53) ? Ws(_e53, _r24, t) : null;
          if (null !== _o20 && null !== _o20.nodeValue && Or(_e53)) {
            var _n35 = bs(xs(t));
            var _r25 = null,
              _i13 = null;
            (null !== _n35 &&
              _n35.anchorNode === _o20 &&
              ((_r25 = _n35.anchorOffset), (_i13 = _n35.focusOffset)),
              Qi(_e53, _o20.nodeValue, _r25, _i13, !0));
          }
          return;
        }
        if ("\n" === e[e.length - 1]) {
          var _e54 = Zr();
          if (Rr(_e54) || Kr(_e54)) {
            if (Rr(_e54)) {
              var _t55 = _e54.focus;
              _e54.anchor.set(_t55.key, _t55.offset, _t55.type);
            }
            return void fs(t, Le, null);
          }
        }
      }
      Xi(!0, t, e);
    }
    function zn(t) {
      var e = vo();
      if (null == t.key) return !0;
      if (Tn) {
        if (is(t))
          return (
            Ko(e, function () {
              Bn(e, Nn);
            }),
            (Tn = !1),
            (Nn = ""),
            !0
          );
        ((Tn = !1), (Nn = ""));
      }
      if (
        (function (t) {
          return ns(t, "ArrowRight", { shiftKey: "any" });
        })(t)
      )
        fs(e, we, t);
      else if (
        (function (t) {
          return ns(
            t,
            "ArrowRight",
            babelHelpers["extends"]({}, rs, { shiftKey: "any" }),
          );
        })(t)
      )
        fs(e, De, t);
      else if (
        (function (t) {
          return ns(t, "ArrowLeft", { shiftKey: "any" });
        })(t)
      )
        fs(e, Ie, t);
      else if (
        (function (t) {
          return ns(
            t,
            "ArrowLeft",
            babelHelpers["extends"]({}, rs, { shiftKey: "any" }),
          );
        })(t)
      )
        fs(e, Pe, t);
      else if (
        (function (t) {
          return ns(t, "ArrowUp", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        fs(e, Fe, t);
      else if (
        (function (t) {
          return ns(t, "ArrowDown", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        fs(e, Re, t);
      else if (
        (function (t) {
          return ns(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
            shiftKey: !0,
          });
        })(t)
      )
        ((Cn = !0), fs(e, Le, t));
      else if (
        (function (t) {
          return " " === t.key;
        })(t)
      )
        fs(e, Ke, t);
      else if (
        (function (t) {
          return r && ns(t, "o", { ctrlKey: !0 });
        })(t)
      )
        (t.preventDefault(), (Cn = !0), fs(e, Ce, !0));
      else if (
        (function (t) {
          return ns(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
          });
        })(t)
      )
        ((Cn = !1), fs(e, Le, t));
      else if (
        (function (t) {
          return (
            ns(t, "Backspace", { shiftKey: "any" }) ||
            (r && ns(t, "h", { ctrlKey: !0 }))
          );
        })(t)
      )
        is(t) ? fs(e, Be, t) && Pn() : (t.preventDefault(), fs(e, xe, !0));
      else if (
        (function (t) {
          return "Escape" === t.key;
        })(t)
      )
        fs(e, ze, t);
      else if (
        (function (t) {
          return ns(t, "Delete", {}) || (r && ns(t, "d", { ctrlKey: !0 }));
        })(t)
      )
        !(function (t) {
          return "Delete" === t.key;
        })(t)
          ? (t.preventDefault(), fs(e, xe, !1))
          : fs(e, $e, t);
      else if (
        (function (t) {
          return ns(t, "Backspace", os);
        })(t)
      )
        (t.preventDefault(), fs(e, ke, !0));
      else if (
        (function (t) {
          return ns(t, "Delete", os);
        })(t)
      )
        (t.preventDefault(), fs(e, ke, !1));
      else if (
        (function (t) {
          return r && ns(t, "Backspace", { metaKey: !0 });
        })(t)
      )
        (t.preventDefault(), fs(e, Oe, !0));
      else if (
        (function (t) {
          return (
            r &&
            (ns(t, "Delete", { metaKey: !0 }) || ns(t, "k", { ctrlKey: !0 }))
          );
        })(t)
      )
        (t.preventDefault(), fs(e, Oe, !1));
      else if (
        (function (t) {
          return ns(t, "b", rs);
        })(t)
      )
        (t.preventDefault(), fs(e, Ee, "bold"));
      else if (
        (function (t) {
          return ns(t, "u", rs);
        })(t)
      )
        (t.preventDefault(), fs(e, Ee, "underline"));
      else if (
        (function (t) {
          return ns(t, "i", rs);
        })(t)
      )
        (t.preventDefault(), fs(e, Ee, "italic"));
      else if (
        (function (t) {
          return ns(t, "Tab", { shiftKey: "any" });
        })(t)
      )
        fs(e, We, t);
      else if (
        (function (t) {
          return ns(t, "z", rs);
        })(t)
      )
        (t.preventDefault(), fs(e, be, void 0));
      else if (
        (function (t) {
          if (r) return ns(t, "z", { metaKey: !0, shiftKey: !0 });
          return (
            ns(t, "y", { ctrlKey: !0 }) ||
            ns(t, "z", { ctrlKey: !0, shiftKey: !0 })
          );
        })(t)
      )
        (t.preventDefault(), fs(e, Me, void 0));
      else {
        var _n36 = e._editorState._selection;
        !(function (t) {
          return ns(t, "a", rs);
        })(t)
          ? null === _n36 ||
            Rr(_n36) ||
            (!(function (t) {
              return ns(t, "c", rs);
            })(t)
              ? (function (t) {
                  return ns(t, "x", rs);
                })(t) && (t.preventDefault(), fs(e, Qe, t))
              : (t.preventDefault(), fs(e, Xe, t)))
          : (t.preventDefault(), fs(e, Ze, t) && Pn());
      }
      return (
        (function (t) {
          return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey;
        })(t) && e.dispatchCommand(ln, t),
        !0
      );
    }
    function $n(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    var Wn = new Map();
    function Un(t) {
      var e = Ms(t.target);
      if (null === e) return;
      var n = vi(e.anchorNode);
      if (null === n) return;
      xn &&
        ((xn = !1),
        Ko(n, function () {
          var r = to(),
            o = e.anchorNode;
          if (As(o) || bi(o)) {
            ji(Qr(r, e, n, t));
          }
        }));
      var r = Gi(n),
        o = r[r.length - 1],
        i = o._key,
        s = Wn.get(i),
        l = s || o;
      (l !== n && bn(e, l, !1),
        bn(e, n, !0),
        n !== o ? Wn.set(i, n) : s && Wn["delete"](i));
    }
    function Yn(t) {
      t._lexicalHandled = !0;
    }
    function jn(t) {
      return !0 === t._lexicalHandled;
    }
    var Hn = function Hn() {};
    function Jn(e) {
      var n = pn.get(e);
      if (void 0 === n) return void Hn();
      var r = yn.get(n);
      if (void 0 === r) return void Hn();
      var o = r - 1;
      (o >= 0 || t(164),
        pn["delete"](e),
        yn.set(n, o),
        0 === o && n.removeEventListener("selectionchange", Un));
      var i = ki(e);
      Ni(i)
        ? (!(function (t) {
            if (null !== t._parentEditor) {
              var _e55 = Gi(t),
                _n37 = _e55[_e55.length - 1]._key;
              Wn.get(_n37) === t && Wn["delete"](_n37);
            } else Wn["delete"](t._key);
          })(i),
          (e.__lexicalEditor = null))
        : i && t(198);
      var s = $n(e);
      for (var _t56 = 0; _t56 < s.length; _t56++) s[_t56]();
      e.__lexicalEventHandles = [];
    }
    function Gn(t, e, n) {
      So();
      var r = t.__key,
        o = t.getParent();
      if (null === o) return;
      var i = (function (t) {
        var e = Zr();
        if (!Rr(e) || !zo(t)) return e;
        var n = e.anchor,
          r = e.focus,
          o = n.getNode(),
          i = r.getNode();
        ys(o, t) && n.set(t.__key, 0, "element");
        ys(i, t) && r.set(t.__key, 0, "element");
        return e;
      })(t);
      var s = !1;
      if (Rr(i) && e) {
        var _e56 = i.anchor,
          _n38 = i.focus;
        (_e56.key === r &&
          (ro(_e56, t, o, t.getPreviousSibling(), t.getNextSibling()),
          (s = !0)),
          _n38.key === r &&
            (ro(_n38, t, o, t.getPreviousSibling(), t.getNextSibling()),
            (s = !0)));
      } else Kr(i) && e && t.isSelected() && t.selectPrevious();
      if (Rr(i) && e && !s) {
        var _e57 = t.getIndexWithinParent();
        (Ii(t), eo(i, o, _e57, -1));
      } else Ii(t);
      (n || Ss(o) || o.canBeEmpty() || !o.isEmpty() || Gn(o, e),
        e && i && jo(o) && o.isEmpty() && o.selectEnd());
    }
    var Vn = Symbol["for"]("ephemeral");
    function qn(t) {
      return t[Vn] || !1;
    }
    var Xn = { configurable: !0, enumerable: !1, value: void 0, writable: !0 };
    var _Qn5 = (function () {
      function Qn(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", Xn),
          Object.defineProperty(this, St, Xn),
          Di(this, t));
      }
      Qn.getType = function getType() {
        var _tl2 = tl(this),
          e = _tl2.ownNodeType;
        return (void 0 === e && t(64, this.name), e);
      };
      Qn.clone = function clone(e) {
        t(65, this.name);
      };
      var _proto6 = Qn.prototype;
      _proto6.$config = function $config() {
        return {};
      };
      _proto6.config = function config(t, e) {
        var _ref16;
        var n = e["extends"] || Object.getPrototypeOf(this.constructor);
        return (
          Object.assign(e, { extends: n, type: t }),
          (_ref16 = {}),
          (_ref16[t] = e),
          _ref16
        );
      };
      _proto6.afterCloneFrom = function afterCloneFrom(t) {
        this.__key === t.__key
          ? ((this.__parent = t.__parent),
            (this.__next = t.__next),
            (this.__prev = t.__prev),
            (this.__state = t.__state))
          : t.__state && (this.__state = t.__state.getWritable(this));
      };
      _proto6.resetOnCopyNodeFrom = function resetOnCopyNodeFrom(t) {
        this.__state &&
          (this.__state = this.__state.getWritable(this).resetOnCopyNode());
      };
      _proto6.getType = function getType() {
        return this.__type;
      };
      _proto6.isInline = function isInline() {
        t(137, this.constructor.name);
      };
      _proto6.isAttached = function isAttached() {
        var t = this.__key;
        for (; null !== t; ) {
          if ("root" === t) return !0;
          var _e58 = Li(t);
          if (null === _e58) break;
          t = _e58.__parent;
        }
        return !1;
      };
      _proto6.isSelected = function isSelected(t) {
        var _this12 = this;
        var e = t || Zr();
        if (null == e) return !1;
        var n = e.getNodes().some(function (t) {
          return t.__key === _this12.__key;
        });
        if (Or(this)) return n;
        if (
          Rr(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t57 = this.getParent();
          if (Uo(this) && this.isInline() && _t57) {
            var _n39 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t57.is(_n39.getNode()) &&
              _n39.offset === _t57.getChildrenSize() &&
              this.is(_t57.getLastChild())
            )
              return !1;
          }
        }
        return n;
      };
      _proto6.getKey = function getKey() {
        return this.__key;
      };
      _proto6.getIndexWithinParent = function getIndexWithinParent() {
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
      _proto6.getParent = function getParent() {
        var t = this.getLatest().__parent;
        return null === t ? null : Li(t);
      };
      _proto6.getParentOrThrow = function getParentOrThrow() {
        var e = this.getParent();
        return (null === e && t(66, this.__key), e);
      };
      _proto6.getTopLevelElement = function getTopLevelElement() {
        var e = this;
        for (; null !== e; ) {
          var _n40 = e.getParent();
          if (Ss(_n40)) return (zo(e) || (e === this && Uo(e)) || t(194), e);
          e = _n40;
        }
        return null;
      };
      _proto6.getTopLevelElementOrThrow = function getTopLevelElementOrThrow() {
        var e = this.getTopLevelElement();
        return (null === e && t(67, this.__key), e);
      };
      _proto6.getParents = function getParents() {
        var t = [];
        var e = this.getParent();
        for (; null !== e; ) (t.push(e), (e = e.getParent()));
        return t;
      };
      _proto6.getParentKeys = function getParentKeys() {
        var t = [];
        var e = this.getParent();
        for (; null !== e; ) (t.push(e.__key), (e = e.getParent()));
        return t;
      };
      _proto6.getPreviousSibling = function getPreviousSibling() {
        var t = this.getLatest().__prev;
        return null === t ? null : Li(t);
      };
      _proto6.getPreviousSiblings = function getPreviousSiblings() {
        var t = [],
          e = this.getParent();
        if (null === e) return t;
        var n = e.getFirstChild();
        for (; null !== n && !n.is(this); )
          (t.push(n), (n = n.getNextSibling()));
        return t;
      };
      _proto6.getNextSibling = function getNextSibling() {
        var t = this.getLatest().__next;
        return null === t ? null : Li(t);
      };
      _proto6.getNextSiblings = function getNextSiblings() {
        var t = [];
        var e = this.getNextSibling();
        for (; null !== e; ) (t.push(e), (e = e.getNextSibling()));
        return t;
      };
      _proto6.getCommonAncestor = function getCommonAncestor(t) {
        var e = zo(this) ? this : this.getParent(),
          n = zo(t) ? t : t.getParent(),
          r = e && n ? Pl(e, n) : null;
        return r ? r.commonAncestor : null;
      };
      _proto6.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto6.isBefore = function isBefore(e) {
        var n = Pl(this, e);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === wl(n)
              : ("same" !== n.type && "ancestor" !== n.type && t(279), !1)))
        );
      };
      _proto6.isParentOf = function isParentOf(t) {
        var e = Pl(this, t);
        return null !== e && "ancestor" === e.type;
      };
      _proto6.getNodesBetween = function getNodesBetween(e) {
        var n = this.isBefore(e),
          r = [],
          o = new Set();
        var i = this;
        for (; null !== i; ) {
          var _s0 = i.__key;
          if ((o.has(_s0) || (o.add(_s0), r.push(i)), i === e)) break;
          var _l6 = zo(i) ? (n ? i.getFirstChild() : i.getLastChild()) : null;
          if (null !== _l6) {
            i = _l6;
            continue;
          }
          var _c4 = n ? i.getNextSibling() : i.getPreviousSibling();
          if (null !== _c4) {
            i = _c4;
            continue;
          }
          var _a6 = i.getParentOrThrow();
          if ((o.has(_a6.__key) || r.push(_a6), _a6 === e)) break;
          var _u4 = null,
            _f7 = _a6;
          do {
            if (
              (null === _f7 && t(68),
              (_u4 = n ? _f7.getNextSibling() : _f7.getPreviousSibling()),
              (_f7 = _f7.getParent()),
              null === _f7)
            )
              break;
            null !== _u4 || o.has(_f7.__key) || r.push(_f7);
          } while (null === _u4);
          i = _u4;
        }
        return (n || r.reverse(), r);
      };
      _proto6.isDirty = function isDirty() {
        var t = vo()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto6.getLatest = function getLatest() {
        if (qn(this)) return this;
        var e = Li(this.__key);
        return (null === e && t(113), e);
      };
      _proto6.getWritable = function getWritable() {
        if (qn(this)) return this;
        So();
        var t = No(),
          e = vo(),
          n = t._nodeMap,
          r = this.__key,
          o = this.getLatest(),
          i = e._cloneNotNeeded,
          s = Zr();
        if ((null !== s && s.setCachedNodes(null), i.has(r))) return (Pi(o), o);
        var l = Hs(o);
        return (i.add(r), Pi(l), n.set(r, l), l);
      };
      _proto6.getTextContent = function getTextContent() {
        return "";
      };
      _proto6.getTextContentSize = function getTextContentSize() {
        return this.getTextContent().length;
      };
      _proto6.createDOM = function createDOM(e, n) {
        t(70);
      };
      _proto6.updateDOM = function updateDOM(e, n, r) {
        t(71);
      };
      _proto6.getDOMSlot = function getDOMSlot(t) {
        return new _L2(t);
      };
      _proto6.exportDOM = function exportDOM(t) {
        return { element: this.createDOM(t._config, t) };
      };
      _proto6.exportJSON = function exportJSON() {
        var t = this.__state ? this.__state.toJSON() : void 0;
        return babelHelpers["extends"]({ type: this.__type, version: 1 }, t);
      };
      Qn.importJSON = function importJSON(e) {
        t(18, this.name);
      };
      _proto6.updateFromJSON = function updateFromJSON(t) {
        return (function (t, e) {
          var n = t.getWritable(),
            r = e.$;
          var o = r;
          for (var _t58 of ut(n).flatKeys)
            _t58 in e &&
              ((void 0 !== o && o !== r) ||
                (o = babelHelpers["extends"]({}, r)),
              (o[_t58] = e[_t58]));
          return ((n.__state || o) && at(t).updateFromJSON(o), n);
        })(this, t);
      };
      Qn.transform = function transform() {
        return null;
      };
      _proto6.remove = function remove(t) {
        Gn(this, !0, t);
      };
      _proto6.replace = function replace(e, n) {
        So();
        var r = Zr();
        (null !== r && (r = r.clone()), vs(this, e));
        var o = this.getLatest(),
          i = this.__key,
          s = e.__key,
          l = e.getWritable(),
          c = this.getParentOrThrow().getWritable(),
          a = c.__size,
          u = l.getParent(),
          f = null !== u ? l.getIndexWithinParent() : -1;
        (Ii(l), null !== u && Rr(r) && eo(r, u, f, -1));
        var d = o.getPreviousSibling(),
          h = o.getNextSibling(),
          g = o.__prev,
          _ = o.__next,
          p = o.__parent;
        if ((Gn(o, !1, !0), null === d)) c.__first = s;
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
            ((zo(this) && zo(l)) || t(139),
            (y = l.getChildrenSize()),
            l.splice(y, 0, this.getChildren())),
          Rr(r))
        ) {
          ji(r);
          var _t59 = r.anchor,
            _e59 = r.focus;
          (_t59.key === i &&
            (n && "element" === _t59.type
              ? _t59.set(l.__key, y + _t59.offset, "element")
              : Pr(_t59, l)),
            _e59.key === i &&
              (n && "element" === _e59.type
                ? _e59.set(l.__key, y + _e59.offset, "element")
                : Pr(_e59, l)));
        }
        return (Ri() === i && Fi(s), l);
      };
      _proto6.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (So(), vs(this, t));
        var n = this.getWritable(),
          r = t.getWritable(),
          o = r.getParent(),
          i = Zr();
        var s = !1,
          l = !1;
        if (null !== o) {
          var _n41 = t.getIndexWithinParent();
          if (Rr(i)) {
            var _t60 = o.__key,
              _e60 = i.anchor,
              _r26 = i.focus;
            ((s =
              "element" === _e60.type &&
              _e60.key === _t60 &&
              _e60.offset === _n41 + 1),
              (l =
                "element" === _r26.type &&
                _r26.key === _t60 &&
                _r26.offset === _n41 + 1));
          }
          (Ii(r), e && Rr(i) && eo(i, o, _n41, -1));
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
          e && Rr(i))
        ) {
          var _t61 = this.getIndexWithinParent();
          eo(i, a, _t61 + 1);
          var _e61 = a.__key;
          (s && i.anchor.set(_e61, _t61 + 2, "element"),
            l && i.focus.set(_e61, _t61 + 2, "element"));
        }
        return t;
      };
      _proto6.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (So(), vs(this, t));
        var n = this.getWritable(),
          r = t.getWritable(),
          o = r.__key,
          i = Zr(),
          s = r.getParent(),
          l = null !== s ? r.getIndexWithinParent() : -1;
        (Ii(r), null !== s && e && Rr(i) && eo(i, s, l, -1));
        var c = this.getPreviousSibling(),
          a = this.getParentOrThrow().getWritable(),
          u = n.__prev,
          f = this.getIndexWithinParent();
        if (null === c) a.__first = o;
        else {
          c.getWritable().__next = o;
        }
        if (
          (a.__size++,
          (n.__prev = o),
          (r.__prev = u),
          (r.__next = n.__key),
          (r.__parent = n.__parent),
          e && Rr(i))
        ) {
          eo(i, this.getParentOrThrow(), f);
        }
        return t;
      };
      _proto6.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto6.createParentElementNode = function createParentElementNode() {
        return si();
      };
      _proto6.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto6.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto6.selectPrevious = function selectPrevious(t, e) {
        So();
        var n = this.getPreviousSibling(),
          r = this.getParentOrThrow();
        if (null === n) return r.select(0, 0);
        if (zo(n)) return n.select();
        if (!Or(n)) {
          var _t62 = n.getIndexWithinParent() + 1;
          return r.select(_t62, _t62);
        }
        return n.select(t, e);
      };
      _proto6.selectNext = function selectNext(t, e) {
        So();
        var n = this.getNextSibling(),
          r = this.getParentOrThrow();
        if (null === n) return r.select();
        if (zo(n)) return n.select(0, 0);
        if (!Or(n)) {
          var _t63 = n.getIndexWithinParent();
          return r.select(_t63, _t63);
        }
        return n.select(t, e);
      };
      _proto6.markDirty = function markDirty() {
        this.getWritable();
      };
      _proto6.reconcileObservedMutation = function reconcileObservedMutation(
        t,
        e,
      ) {
        this.markDirty();
      };
      return Qn;
    })();
    var Zn = "history-merge",
      tr = "collaboration",
      er = "skip-scroll-into-view",
      nr = "skip-dom-selection",
      rr = "skip-selection-focus",
      or = "composition-start",
      ir = "composition-end",
      sr = "!important";
    function lr(t) {
      var e = {};
      if (!t) return e;
      var n = "",
        r = "",
        o = null,
        i = !1,
        s = !1,
        l = !1,
        c = 0;
      var a = t.length;
      var u = -1;
      for (var _f8 = 0; _f8 < a; _f8++) {
        var _a7 = t[_f8];
        if (i) "*" === _a7 && "/" === t[_f8 + 1] && ((i = !1), _f8++);
        else if (s) (-1 === u && (u = _f8), (s = !1));
        else if (null === o) {
          if ("/" !== _a7 || "*" !== t[_f8 + 1]) {
            if ('"' !== _a7 && "'" !== _a7) {
              if ("(" !== _a7) {
                if (")" !== _a7) {
                  if (l || ":" !== _a7 || 0 !== c) {
                    if (";" === _a7 && 0 === c) {
                      -1 !== u &&
                        (l ? (r += t.slice(u, _f8)) : (n += t.slice(u, _f8)),
                        (u = -1));
                      var _o21 = n.trim(),
                        _i14 = r.trim();
                      ("" !== _o21 && "" !== _i14 && (e[_o21] = _i14),
                        (n = ""),
                        (r = ""),
                        (l = !1));
                      continue;
                    }
                    -1 === u && (u = _f8);
                  } else
                    (-1 !== u && ((n += t.slice(u, _f8)), (u = -1)), (l = !0));
                } else (-1 === u && (u = _f8), (c = Math.max(0, c - 1)));
              } else (-1 === u && (u = _f8), c++);
            } else (-1 === u && (u = _f8), (o = _a7));
          } else
            (-1 !== u &&
              (l ? (r += t.slice(u, _f8)) : (n += t.slice(u, _f8)), (u = -1)),
              (i = !0),
              _f8++);
        } else
          (-1 === u && (u = _f8),
            "\\" === _a7 ? (s = !0) : _a7 === o && (o = null));
      }
      -1 !== u && (l ? (r += t.slice(u, a)) : (n += t.slice(u, a)));
      var f = n.trim(),
        d = r.trim();
      return ("" !== f && "" !== d && (e[f] = d), e);
    }
    function cr(t, e, n) {
      var r = n.trimEnd(),
        o = r.length - 10;
      o >= 0 && r.slice(o).toLowerCase() === sr
        ? t.setProperty(e, r.slice(0, o).trim(), "important")
        : t.setProperty(e, n, "");
    }
    function ar(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var r = lr(n),
        o = lr(e);
      for (var _e62 in o) (delete r[_e62], cr(t, _e62, o[_e62]));
      for (var _e63 in r) t.removeProperty(_e63);
    }
    function ur(t, e) {
      return 16 & e
        ? "code"
        : e & _
          ? "mark"
          : 32 & e
            ? "sub"
            : 64 & e
              ? "sup"
              : null;
    }
    function fr(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function dr(t, e, n, r, o) {
      var i = r.classList;
      var s = ss(o, "base");
      (void 0 !== s && i.add.apply(i, s),
        (s = ss(o, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== s &&
        (8 & n && 4 & n
          ? ((l = !0), c || i.add.apply(i, s))
          : c && i.remove.apply(i, s));
      for (var _t64 in M) {
        var _r27 = M[_t64];
        if (((s = ss(o, _t64)), void 0 !== s))
          if (n & _r27) {
            if (l && ("underline" === _t64 || "strikethrough" === _t64)) {
              e & _r27 && i.remove.apply(i, s);
              continue;
            }
            (0 === (e & _r27) ||
              (c && "underline" === _t64) ||
              "strikethrough" === _t64) &&
              i.add.apply(i, s);
          } else e & _r27 && i.remove.apply(i, s);
      }
    }
    function hr(t, e, n) {
      var r = n.isComposing(),
        i = t + (r ? T : ""),
        s = Ks(),
        l = Bs(s).$getDOMSlot(n, e, s),
        c = l.getFirstChild();
      if (null === c || c.nodeType !== Node.TEXT_NODE)
        return void l.insertChild(document.createTextNode(i));
      var a = c,
        u = a.nodeValue;
      if (u !== i)
        if (r || o) {
          var _ref17 = (function (t, e) {
              var n = t.length,
                r = e.length;
              var o = 0,
                i = 0;
              for (; o < n && o < r && t[o] === e[o]; ) o++;
              for (; i + o < n && i + o < r && t[n - i - 1] === e[r - i - 1]; )
                i++;
              return [o, n - o - i, e.slice(o, r - i)];
            })(u, i),
            _t65 = _ref17[0],
            _e64 = _ref17[1],
            _n42 = _ref17[2];
          (0 !== _e64 && a.deleteData(_t65, _e64), a.insertData(_t65, _n42));
        } else a.nodeValue = i;
    }
    function gr(t, e, n, r, o, i) {
      hr(o, t, e);
      var s = i.theme.text;
      void 0 !== s && dr(0, 0, r, t, s);
    }
    function _r(t, e) {
      var n = document.createElement(e);
      return (n.appendChild(t), n);
    }
    var _pr2 = (function (_Qn) {
      function pr(t, e) {
        var _this;
        if (t === void 0) {
          t = "";
        }
        ((_this = _Qn.call(this, e) || this),
          (_this.__text = t),
          (_this.__format = 0),
          (_this.__style = ""),
          (_this.__mode = 0),
          (_this.__detail = 0));
        return _this;
      }
      babelHelpers.inheritsLoose(pr, _Qn);
      pr.getType = function getType() {
        return "text";
      };
      pr.clone = function clone(t) {
        return new pr(t.__text, t.__key);
      };
      var _proto7 = pr.prototype;
      _proto7.afterCloneFrom = function afterCloneFrom(t) {
        (_Qn.prototype.afterCloneFrom.call(this, t),
          (this.__text = t.__text),
          (this.__format = t.__format),
          (this.__style = t.__style),
          (this.__mode = t.__mode),
          (this.__detail = t.__detail));
      };
      _proto7.getFormat = function getFormat() {
        return this.getLatest().__format;
      };
      _proto7.getDetail = function getDetail() {
        return this.getLatest().__detail;
      };
      _proto7.getMode = function getMode() {
        var t = this.getLatest();
        return P[t.__mode];
      };
      _proto7.getStyle = function getStyle() {
        return this.getLatest().__style;
      };
      _proto7.isToken = function isToken() {
        return 1 === this.getLatest().__mode;
      };
      _proto7.isComposing = function isComposing() {
        return this.__key === Ri();
      };
      _proto7.isSegmented = function isSegmented() {
        return 2 === this.getLatest().__mode;
      };
      _proto7.isDirectionless = function isDirectionless() {
        return !!(1 & this.getLatest().__detail);
      };
      _proto7.isUnmergeable = function isUnmergeable() {
        return !!(2 & this.getLatest().__detail);
      };
      _proto7.hasFormat = function hasFormat(t) {
        var e = M[t];
        return 0 !== (this.getFormat() & e);
      };
      _proto7.isSimpleText = function isSimpleText() {
        return "text" === this.__type && 0 === this.__mode;
      };
      _proto7.getTextContent = function getTextContent() {
        return this.getLatest().__text;
      };
      _proto7.getFormatFlags = function getFormatFlags(t, e) {
        return wi(this.getLatest().__format, t, e);
      };
      _proto7.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto7.isInline = function isInline() {
        return !0;
      };
      _proto7.createDOM = function createDOM(t, e) {
        var n = this.__format,
          r = ur(0, n),
          o = fr(0, n),
          i = null === r ? o : r,
          s = document.createElement(i);
        var l = s;
        (this.hasFormat("code") && s.setAttribute("spellcheck", "false"),
          null !== r && ((l = document.createElement(o)), s.appendChild(l)));
        gr(l, this, 0, n, this.__text, t);
        var c = this.__style;
        return ("" !== c && ar(s.style, c), s);
      };
      _proto7.updateDOM = function updateDOM(e, n, r) {
        var o = this.__text,
          i = e.__format,
          s = this.__format,
          l = ur(0, i),
          c = ur(0, s),
          a = fr(0, i),
          u = fr(0, s);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _e65 = n.firstChild;
          null == _e65 && t(48);
          var _i15 = document.createElement(u);
          return (gr(_i15, this, 0, s, o, r), n.replaceChild(_i15, _e65), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && t(49)),
          hr(o, f, this));
        var d = r.theme.text;
        void 0 !== d && i !== s && dr(0, i, s, f, d);
        var h = e.__style,
          g = this.__style;
        return (h !== g && ar(n.style, g, h), !1);
      };
      pr.importDOM = function importDOM() {
        return {
          "#text": function text() {
            return { conversion: Sr, priority: 0 };
          },
          b: function b() {
            return { conversion: mr, priority: 0 };
          },
          code: function code() {
            return { conversion: vr, priority: 0 };
          },
          em: function em() {
            return { conversion: vr, priority: 0 };
          },
          i: function i() {
            return { conversion: vr, priority: 0 };
          },
          mark: function mark() {
            return { conversion: vr, priority: 0 };
          },
          s: function s() {
            return { conversion: vr, priority: 0 };
          },
          span: function span() {
            return { conversion: yr, priority: 0 };
          },
          strong: function strong() {
            return { conversion: vr, priority: 0 };
          },
          sub: function sub() {
            return { conversion: vr, priority: 0 };
          },
          sup: function sup() {
            return { conversion: vr, priority: 0 };
          },
          u: function u() {
            return { conversion: vr, priority: 0 };
          },
        };
      };
      pr.importJSON = function importJSON(t) {
        return kr().updateFromJSON(t);
      };
      _proto7.updateFromJSON = function updateFromJSON(t) {
        return _Qn.prototype.updateFromJSON
          .call(this, t)
          .setTextContent(t.text)
          .setFormat(t.format)
          .setDetail(t.detail)
          .setMode(t.mode)
          .setStyle(t.style);
      };
      _proto7.exportDOM = function exportDOM(e) {
        var _Qn$prototype$exportD = _Qn.prototype.exportDOM.call(this, e),
          n = _Qn$prototype$exportD.element;
        return (
          As(n) || t(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = _r(n, "b")),
          this.hasFormat("italic") && (n = _r(n, "i")),
          this.hasFormat("strikethrough") && (n = _r(n, "s")),
          this.hasFormat("underline") && (n = _r(n, "u")),
          { element: n }
        );
      };
      _proto7.exportJSON = function exportJSON() {
        return babelHelpers["extends"](
          {
            detail: this.getDetail(),
            format: this.getFormat(),
            mode: this.getMode(),
            style: this.getStyle(),
            text: this.getTextContent(),
          },
          _Qn.prototype.exportJSON.call(this),
        );
      };
      _proto7.selectionTransform = function selectionTransform(t, e) {};
      _proto7.setFormat = function setFormat(t) {
        var e = this.getWritable();
        return ((e.__format = "string" == typeof t ? M[t] : t), e);
      };
      _proto7.setDetail = function setDetail(t) {
        var e = this.getWritable();
        return ((e.__detail = "string" == typeof t ? A[t] : t), e);
      };
      _proto7.setStyle = function setStyle(t) {
        var e = this.getWritable();
        return ((e.__style = t), e);
      };
      _proto7.toggleFormat = function toggleFormat(t) {
        var e = wi(this.getFormat(), t, null);
        return this.setFormat(e);
      };
      _proto7.toggleDirectionless = function toggleDirectionless() {
        var t = this.getWritable();
        return ((t.__detail ^= 1), t);
      };
      _proto7.toggleUnmergeable = function toggleUnmergeable() {
        var t = this.getWritable();
        return ((t.__detail ^= 2), t);
      };
      _proto7.setMode = function setMode(t) {
        var e = I[t];
        if (this.__mode === e) return this;
        var n = this.getWritable();
        return ((n.__mode = e), n);
      };
      _proto7.setTextContent = function setTextContent(t) {
        if (this.__text === t) return this;
        var e = this.getWritable();
        return ((e.__text = t), e);
      };
      _proto7.select = function select(t, e) {
        So();
        var n = t,
          r = e;
        var o = Zr(),
          i = this.getTextContent(),
          s = this.__key;
        if ("string" == typeof i) {
          var _t66 = i.length;
          (void 0 === n && (n = _t66), void 0 === r && (r = _t66));
        } else ((n = 0), (r = 0));
        if (!Rr(o)) return Vr(s, n, s, r, "text", "text");
        {
          var _t67 = Ri();
          ((_t67 !== o.anchor.key && _t67 !== o.focus.key) || Fi(s),
            o.setTextNodeRange(this, n, this, r));
        }
        return o;
      };
      _proto7.selectStart = function selectStart() {
        return this.select(0, 0);
      };
      _proto7.selectEnd = function selectEnd() {
        var t = this.getTextContentSize();
        return this.select(t, t);
      };
      _proto7.spliceText = function spliceText(t, e, n, r) {
        var o = this.getWritable(),
          i = o.__text,
          s = n.length;
        var l = t;
        l < 0 && ((l = s + l), l < 0 && (l = 0));
        var c = Zr();
        if (r && Rr(c)) {
          var _e66 = t + s;
          c.setTextNodeRange(o, _e66, o, _e66);
        }
        var a = i.slice(0, l) + n + i.slice(l + e);
        return ((o.__text = a), o);
      };
      _proto7.canInsertTextBefore = function canInsertTextBefore() {
        return !0;
      };
      _proto7.canInsertTextAfter = function canInsertTextAfter() {
        return !0;
      };
      _proto7.splitText = function splitText() {
        So();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var r = e.__key,
          o = Ri(),
          i = n.length;
        for (
          var _len2 = arguments.length, t = new Array(_len2), _key2 = 0;
          _key2 < _len2;
          _key2++
        ) {
          t[_key2] = arguments[_key2];
        }
        (t.sort(function (t, e) {
          return t - e;
        }),
          t.push(i));
        var s = [],
          l = t.length;
        for (var _e67 = 0, _r28 = 0; _e67 < i && _r28 <= l; _r28++) {
          var _o22 = t[_r28];
          _o22 > _e67 && (s.push(n.slice(_e67, _o22)), (_e67 = _o22));
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
        var m = Zr();
        if (Rr(m)) {
          var _ref18 = m.isBackward()
              ? [m.focus, m.anchor]
              : [m.anchor, m.focus],
            _t68 = _ref18[0],
            _e68 = _ref18[1];
          ("text" === _t68.type && _t68.key === r && (p = _t68),
            "text" === _e68.type && _e68.key === r && (y = _e68));
        }
        e.isSegmented()
          ? ((f = kr(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = _t(e, f)),
            (_ = !0))
          : (f = e.setTextContent(a));
        var x = [f];
        for (var _t69 = 1; _t69 < c; _t69++) {
          var _n43 = kr(s[_t69]);
          ((_n43.__format = d),
            (_n43.__style = h),
            (_n43.__detail = g),
            (_n43.__state = _t(e, _n43)));
          var _i16 = _n43.__key;
          (o === r && Fi(_i16), x.push(_n43));
        }
        var C = p ? p.offset : null,
          S = y ? y.offset : null;
        var T = 0;
        for (var _t70 of x) {
          if (!p && !y) break;
          var _e69 = T + _t70.getTextContentSize();
          if (
            (null !== p &&
              null !== C &&
              C <= _e69 &&
              C >= T &&
              (p.set(_t70.getKey(), C - T, "text"), C < _e69 && (p = null)),
            null !== y && null !== S && S <= _e69 && S >= T)
          ) {
            y.set(_t70.getKey(), S - T, "text");
            break;
          }
          T = _e69;
        }
        if (null !== u) {
          !(function (t) {
            var e = t.getPreviousSibling(),
              n = t.getNextSibling();
            null !== e && Pi(e);
            null !== n && Pi(n);
          })(this);
          var _t71 = u.getWritable(),
            _e70 = this.getIndexWithinParent();
          (_
            ? (_t71.splice(_e70, 0, x), this.remove())
            : _t71.splice(_e70, 1, x),
            Rr(m) && eo(m, u, _e70, c - 1));
        }
        return x;
      };
      _proto7.mergeWithSibling = function mergeWithSibling(e) {
        var n = e === this.getPreviousSibling();
        n || e === this.getNextSibling() || t(50);
        var r = this.__key,
          o = e.__key,
          i = this.__text,
          s = i.length;
        Ri() === o && Fi(r);
        var l = Zr();
        if (Rr(l)) {
          var _t72 = l.anchor,
            _i17 = l.focus;
          (null !== _t72 && _t72.key === o && oo(_t72, n, r, e, s),
            null !== _i17 && _i17.key === o && oo(_i17, n, r, e, s));
        }
        var c = e.__text,
          a = n ? c + i : i + c;
        this.setTextContent(a);
        var u = this.getWritable();
        return (e.remove(), u);
      };
      _proto7.isTextEntity = function isTextEntity() {
        return !1;
      };
      return pr;
    })(_Qn5);
    function yr(t) {
      return { forChild: Er(t.style), node: null };
    }
    function mr(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: Er(e.style, n ? void 0 : "bold"), node: null };
    }
    var xr = new WeakMap();
    function Cr(t) {
      if (!As(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function Sr(e) {
      var n = e;
      null === e.parentElement && t(129);
      var r = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var r = [t];
          for (; null !== n && void 0 === (e = xr.get(n)) && !Cr(n); )
            (r.push(n), (n = n.parentNode));
          var o = void 0 === e ? n : e;
          for (var _t73 = 0; _t73 < r.length; _t73++) xr.set(r[_t73], o);
          return o;
        })(n)
      )
        return { node: ao(r) };
      if (((r = r.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === r))
        return { node: null };
      if (" " === r[0]) {
        var _t74 = n,
          _e71 = !0;
        for (; null !== _t74 && null !== (_t74 = Tr(_t74, !1)); ) {
          var _n44 = _t74.textContent || "";
          if (_n44.length > 0) {
            (/[ \t\n]$/.test(_n44) && (r = r.slice(1)), (_e71 = !1));
            break;
          }
        }
        _e71 && (r = r.slice(1));
      }
      if (" " === r[r.length - 1]) {
        var _t75 = n,
          _e72 = !0;
        for (; null !== _t75 && null !== (_t75 = Tr(_t75, !0)); ) {
          if (
            (_t75.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e72 = !1;
            break;
          }
        }
        _e72 && (r = r.slice(0, r.length - 1));
      }
      return "" === r ? { node: null } : { node: kr(r) };
    }
    function Tr(t, e) {
      var n = t;
      for (;;) {
        var _t76 = void 0;
        for (; null === (_t76 = e ? n.nextSibling : n.previousSibling); ) {
          var _t77 = n.parentElement;
          if (null === _t77) return null;
          n = _t77;
        }
        if (((n = _t76), As(n))) {
          var _t78 = n.style.display;
          if (
            ("" === _t78 && !Ps(n)) ||
            ("" !== _t78 && !_t78.startsWith("inline"))
          )
            return null;
        }
        var _r29 = n;
        for (; null !== (_r29 = e ? n.firstChild : n.lastChild); ) n = _r29;
        if (bi(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var Nr = {
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
    function vr(t) {
      var e = Nr[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: Er(t.style, e), node: null };
    }
    function kr(t) {
      if (t === void 0) {
        t = "";
      }
      return Ns(new _pr2(t));
    }
    function Or(t) {
      return t instanceof _pr2;
    }
    function Er(t, e) {
      var n = t.fontWeight,
        r = t.textDecoration.split(" "),
        o = "700" === n || "bold" === n,
        i = r.includes("line-through"),
        s = "italic" === t.fontStyle,
        l = r.includes("underline"),
        c = t.verticalAlign;
      return function (t) {
        return Or(t)
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
    var _br = (function (_pr) {
      function br(t) {
        var _this2;
        ((_this2 = _pr.call(this, "\t", t) || this), (_this2.__detail = 2));
        return _this2;
      }
      babelHelpers.inheritsLoose(br, _pr);
      br.getType = function getType() {
        return "tab";
      };
      br.clone = function clone(t) {
        return new br(t.__key);
      };
      br.importDOM = function importDOM() {
        return null;
      };
      var _proto8 = br.prototype;
      _proto8.createDOM = function createDOM(t) {
        var e = _pr.prototype.createDOM.call(this, t),
          n = ss(t.theme, "tab");
        if (void 0 !== n) {
          var _e$classList;
          (_e$classList = e.classList).add.apply(_e$classList, n);
        }
        return e;
      };
      br.importJSON = function importJSON(t) {
        return Mr().updateFromJSON(t);
      };
      _proto8.setTextContent = function setTextContent(t) {
        return _pr.prototype.setTextContent.call(this, "\t");
      };
      _proto8.spliceText = function spliceText(e, n, r, o) {
        return (
          ("" === r && 0 === n) || ("\t" === r && 1 === n) || t(286),
          this
        );
      };
      _proto8.setDetail = function setDetail(e) {
        return (2 !== e && t(127), this);
      };
      _proto8.setMode = function setMode(e) {
        return ("normal" !== e && t(128), this);
      };
      _proto8.canInsertTextBefore = function canInsertTextBefore() {
        return !1;
      };
      _proto8.canInsertTextAfter = function canInsertTextAfter() {
        return !1;
      };
      return br;
    })(_pr2);
    function Mr() {
      return Ns(new _br());
    }
    function Ar(t) {
      return t instanceof _br;
    }
    var _wr = (function () {
      function wr(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto9 = wr.prototype;
      _proto9.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto9.isBefore = function isBefore(t) {
        if (this.key === t.key) return this.offset < t.offset;
        return Al(Yl(Fl(this, "next")), Yl(Fl(t, "next"))) < 0;
      };
      _proto9.getNode = function getNode() {
        var e = Li(this.key);
        return (null === e && t(20), e);
      };
      _proto9.set = function set(t, e, n, r) {
        var o = this._selection,
          i = this.key;
        (r && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          Co() ||
            (Ri() === i && Fi(t),
            null !== o &&
              (o.setCachedNodes(null),
              Rr(o) && (o._cachedIsBackward = null),
              (o.dirty = !0))));
      };
      return wr;
    })();
    function Dr(t, e, n) {
      return new _wr(t, e, n);
    }
    function Ir(t, e) {
      var n = e.__key,
        r = t.offset,
        o = "element";
      if (Or(e)) {
        o = "text";
        var _t79 = e.getTextContentSize();
        r > _t79 && (r = _t79);
      } else if (!zo(e)) {
        var _t80 = e.getNextSibling();
        if (Or(_t80)) ((n = _t80.__key), (r = 0), (o = "text"));
        else {
          var _t81 = e.getParent();
          _t81 && ((n = _t81.__key), (r = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, r, o);
    }
    function Pr(t, e) {
      if (zo(e)) {
        var _n45 = e.getLastDescendant();
        zo(_n45) || Or(_n45) ? Ir(t, _n45) : Ir(t, e);
      } else Ir(t, e);
    }
    var _Fr = (function () {
      function Fr(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto0 = Fr.prototype;
      _proto0.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto0.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto0.is = function is(t) {
        if (!Kr(t)) return !1;
        var e = this._nodes,
          n = t._nodes;
        return (
          e.size === n.size &&
          Array.from(e).every(function (t) {
            return n.has(t);
          })
        );
      };
      _proto0.isCollapsed = function isCollapsed() {
        return !1;
      };
      _proto0.isBackward = function isBackward() {
        return !1;
      };
      _proto0.getStartEndPoints = function getStartEndPoints() {
        return null;
      };
      _proto0.add = function add(t) {
        ((this.dirty = !0), this._nodes.add(t), (this._cachedNodes = null));
      };
      _proto0["delete"] = function _delete(t) {
        ((this.dirty = !0),
          this._nodes["delete"](t),
          (this._cachedNodes = null));
      };
      _proto0.clear = function clear() {
        ((this.dirty = !0), this._nodes.clear(), (this._cachedNodes = null));
      };
      _proto0.has = function has(t) {
        return this._nodes.has(t);
      };
      _proto0.clone = function clone() {
        return new Fr(new Set(this._nodes));
      };
      _proto0.extract = function extract() {
        return this.getNodes();
      };
      _proto0.insertRawText = function insertRawText(t) {};
      _proto0.insertText = function insertText() {};
      _proto0.insertNodes = function insertNodes(t) {
        var e = this.getNodes(),
          n = e.length,
          r = e[n - 1];
        var o;
        if (Or(r)) o = r.select();
        else {
          var _t82 = r.getIndexWithinParent() + 1;
          o = r.getParentOrThrow().select(_t82, _t82);
        }
        o.insertNodes(t);
        for (var _t83 = 0; _t83 < n; _t83++) e[_t83].remove();
      };
      _proto0.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = this._nodes,
          n = [];
        for (var _t84 of e) {
          var _e73 = Li(_t84);
          null !== _e73 && n.push(_e73);
        }
        return (Co() || (this._cachedNodes = n), n);
      };
      _proto0.getTextContent = function getTextContent() {
        var t = this.getNodes();
        var e = "";
        for (var _n46 = 0; _n46 < t.length; _n46++)
          e += t[_n46].getTextContent();
        return e;
      };
      _proto0.deleteNodes = function deleteNodes() {
        var t = this.getNodes();
        if ((Zr() || to()) === this && t[0]) {
          var _e74 = yl(t[0], "next");
          Ll(bl(_e74, _e74));
        }
        for (var _e75 of t) _e75.remove();
      };
      return Fr;
    })();
    function Rr(t) {
      return t instanceof _Lr;
    }
    var _Lr = (function () {
      function Lr(t, e, n, r) {
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
      var _proto1 = Lr.prototype;
      _proto1.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto1.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto1.is = function is(t) {
        return (
          !!Rr(t) &&
          this.anchor.is(t.anchor) &&
          this.focus.is(t.focus) &&
          this.format === t.format &&
          this.style === t.style
        );
      };
      _proto1.isCollapsed = function isCollapsed() {
        return this.anchor.is(this.focus);
      };
      _proto1.getNodes = function getNodes() {
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
          for (var _n47 of t)
            if (hl(_n47)) {
              var _t85 = _n47.origin;
              0 === e.length ? o.add(_t85) : (i.add(_t85), e.push(_t85));
            } else {
              var _t86 = _n47.origin;
              (zo(_t86) && i.has(_t86)) || e.push(_t86);
            }
          r && e.push(r.caret.origin);
          if (
            dl(t.focus) &&
            zo(t.focus.origin) &&
            null === t.focus.getNodeAtCaret()
          )
            for (
              var _n48 = Sl(t.focus.origin, "previous");
              hl(_n48) &&
              o.has(_n48.origin) &&
              !_n48.origin.isEmpty() &&
              _n48.origin.is(e[e.length - 1]);
              _n48 = Nl(_n48)
            )
              (o["delete"](_n48.origin), e.pop());
          for (; e.length > 1; ) {
            var _t87 = e[e.length - 1];
            if (!zo(_t87) || i.has(_t87) || _t87.isEmpty() || o.has(_t87))
              break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n49 = Yl(t.anchor),
              _r30 = Yl(t.anchor.getFlipped()),
              _o23 = function _o23(t) {
                return fl(t) ? t.origin : t.getNodeAtCaret();
              },
              _i18 =
                _o23(_n49) ||
                _o23(_r30) ||
                (t.anchor.getNodeAtCaret() ? _n49.origin : _r30.origin);
            e.push(_i18);
          }
          return e;
        })(Jl(Bl(this), "next"));
        return (Co() || (this._cachedNodes = e), e);
      };
      _proto1.setTextNodeRange = function setTextNodeRange(t, e, n, r) {
        return (
          this.anchor.set(t.__key, e, "text"),
          this.focus.set(n.__key, r, "text"),
          this
        );
      };
      _proto1.getTextContent = function getTextContent() {
        var t = this.getNodes();
        if (0 === t.length) return "";
        var e = t[0],
          n = t[t.length - 1],
          r = this.anchor,
          o = this.focus,
          i = r.isBefore(o),
          _zr = zr(this),
          s = _zr[0],
          l = _zr[1];
        var c = "",
          a = !0;
        for (var _u5 = 0; _u5 < t.length; _u5++) {
          var _f9 = t[_u5];
          if (zo(_f9) && !_f9.isInline())
            (a || (c += "\n"), (a = !_f9.isEmpty()));
          else if (((a = !1), Or(_f9))) {
            var _t88 = _f9.getTextContent();
            (_f9 === e
              ? _f9 === n
                ? ("element" === r.type &&
                    "element" === o.type &&
                    o.offset !== r.offset) ||
                  (_t88 = s < l ? _t88.slice(s, l) : _t88.slice(l, s))
                : (_t88 = i ? _t88.slice(s) : _t88.slice(l))
              : _f9 === n && (_t88 = i ? _t88.slice(0, l) : _t88.slice(0, s)),
              (c += _t88));
          } else
            (!Uo(_f9) && !ti(_f9)) ||
              (_f9 === n && this.isCollapsed()) ||
              (c += _f9.getTextContent());
        }
        return c;
      };
      _proto1.applyDOMRange = function applyDOMRange(t) {
        var e = vo(),
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
        var o = r[0],
          i = r[1],
          s = r[2];
        (this.anchor.set(o.key, o.offset, o.type, !0),
          this.focus.set(i.key, i.offset, i.type, !0),
          s && (this.dirty = !0),
          xt(this));
      };
      _proto1.clone = function clone() {
        var t = this.anchor,
          e = this.focus;
        return new Lr(
          Dr(t.key, t.offset, t.type),
          Dr(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto1.toggleFormat = function toggleFormat(t) {
        ((this.format = wi(this.format, t, null)), (this.dirty = !0));
      };
      _proto1.setFormat = function setFormat(t) {
        ((this.format = t), (this.dirty = !0));
      };
      _proto1.setStyle = function setStyle(t) {
        ((this.style = t), (this.dirty = !0));
      };
      _proto1.hasFormat = function hasFormat(t) {
        var e = M[t];
        return 0 !== (this.format & e);
      };
      _proto1.insertRawText = function insertRawText(t) {
        this.insertNodes(ao(t));
      };
      _proto1.insertText = function insertText(e) {
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
                s = kr();
              if ((s.setFormat(n), s.setStyle(r), li(i))) i.splice(0, 0, [s]);
              else {
                var _t89 = jo(o) ? si().append(s) : s;
                null === i ? o.append(_t89) : i.insertBefore(_t89);
              }
              (t.is(e) && e.set(s.__key, 0, "text"), t.set(s.__key, 0, "text"));
            })(s, l, o, i),
          "element" === l.type && Rl(l, Yl(Fl(l, "next"))));
        var c = s.offset;
        var a = l.offset;
        var u = this.getNodes(),
          f = u.length;
        var d = u[0];
        Or(d) || t(26);
        var h = d.getTextContent().length,
          g = d.getParentOrThrow();
        var _ = u[f - 1];
        if (
          (1 === f &&
            "element" === l.type &&
            ((a = h), l.set(s.key, a, "text")),
          this.isCollapsed() &&
            c === h &&
            (Ei(d) ||
              !d.canInsertTextAfter() ||
              (!g.canInsertTextAfter() && null === d.getNextSibling())))
        ) {
          var _t90 = d.getNextSibling();
          if (
            ((Or(_t90) && _t90.canInsertTextBefore() && !Ei(_t90)) ||
              ((_t90 = kr()),
              _t90.setFormat(o),
              _t90.setStyle(i),
              g.canInsertTextAfter()
                ? d.insertAfter(_t90)
                : g.insertAfter(_t90)),
            _t90.select(0, 0),
            (d = _t90),
            "" !== e)
          )
            return void this.insertText(e);
        } else if (
          this.isCollapsed() &&
          0 === c &&
          (Ei(d) ||
            !d.canInsertTextBefore() ||
            (!g.canInsertTextBefore() && null === d.getPreviousSibling()))
        ) {
          var _t91 = d.getPreviousSibling();
          if (
            ((Or(_t91) && !Ei(_t91)) ||
              ((_t91 = kr()),
              _t91.setFormat(o),
              g.canInsertTextBefore()
                ? d.insertBefore(_t91)
                : g.insertBefore(_t91)),
            _t91.select(),
            (d = _t91),
            "" !== e)
          )
            return void this.insertText(e);
        } else if (d.isSegmented() && c !== h) {
          var _t92 = kr(d.getTextContent());
          (_t92.setFormat(o), d.replace(_t92), (d = _t92));
        } else if (!this.isCollapsed() && "" !== e) {
          var _t93 = _.getParent();
          if (
            !g.canInsertTextBefore() ||
            !g.canInsertTextAfter() ||
            (zo(_t93) &&
              (!_t93.canInsertTextBefore() || !_t93.canInsertTextAfter()))
          )
            return (
              this.insertText(""),
              Hr(this.anchor, this.focus),
              void this.insertText(e)
            );
        }
        if (1 === f) {
          if (Oi(d)) {
            var _t94 = kr(e);
            return (_t94.select(), void d.replace(_t94));
          }
          var _t95 = d.getFormat(),
            _n50 = d.getStyle();
          if (c !== a || (_t95 === o && _n50 === i)) {
            if (Ar(d)) {
              var _t96 = kr(e);
              return (
                _t96.setFormat(o),
                _t96.setStyle(i),
                _t96.select(),
                void d.replace(_t96)
              );
            }
          } else {
            if ("" !== d.getTextContent()) {
              var _t97 = kr(e);
              if ((_t97.setFormat(o), _t97.setStyle(i), _t97.select(), 0 === c))
                d.insertBefore(_t97, !1);
              else {
                var _d$splitText = d.splitText(c),
                  _e76 = _d$splitText[0];
                _e76.insertAfter(_t97, !1);
              }
              return void (
                _t97.isComposing() &&
                "text" === this.anchor.type &&
                ((this.anchor.offset -= e.length),
                (this._cachedNodes = null),
                (this._cachedIsBackward = null))
              );
            }
            (d.setFormat(o), d.setStyle(i));
          }
          var _r31 = a - c;
          ((d = d.spliceText(c, _r31, e, !0)),
            "" === d.getTextContent()
              ? d.remove()
              : "text" === this.anchor.type &&
                ((this.format = _t95),
                (this.style = _n50),
                d.isComposing() &&
                  ((this.anchor.offset -= e.length),
                  (this._cachedNodes = null),
                  (this._cachedIsBackward = null))));
        } else {
          var _t98 = new Set([].concat(d.getParentKeys(), _.getParentKeys())),
            _n51 = zo(d) ? d : d.getParentOrThrow();
          var _r32 = zo(_) ? _ : _.getParentOrThrow(),
            _o24 = _;
          if (!_n51.is(_r32) && _r32.isInline())
            do {
              ((_o24 = _r32), (_r32 = _r32.getParentOrThrow()));
            } while (_r32.isInline());
          if (
            ("text" === l.type && (0 !== a || "" === _.getTextContent())) ||
            ("element" === l.type && _.getIndexWithinParent() < a)
          ) {
            if (Or(_) && !Oi(_) && a !== _.getTextContentSize()) {
              if (_.isSegmented()) {
                var _t99 = kr(_.getTextContent());
                (_.replace(_t99), (_ = _t99));
              }
              (jo(l.getNode()) ||
                "text" !== l.type ||
                (_ = _.spliceText(0, a, "")),
                _t98.add(_.__key));
            } else {
              var _t100 = _.getParentOrThrow();
              _t100.canBeEmpty() || 1 !== _t100.getChildrenSize()
                ? _.remove()
                : _t100.remove();
            }
          } else _t98.add(_.__key);
          var _i19 = _r32.getChildren(),
            _s1 = new Set(u),
            _g4 = _n51.is(_r32),
            _p2 = _n51.isInline() && null === d.getNextSibling() ? _n51 : d;
          for (var _t101 = _i19.length - 1; _t101 >= 0; _t101--) {
            var _e77 = _i19[_t101];
            if (_e77.is(d) || (zo(_e77) && _e77.isParentOf(d))) break;
            _e77.isAttached() &&
              (!_s1.has(_e77) || _e77.is(_o24)
                ? _g4 || _p2.insertAfter(_e77, !1)
                : _e77.remove());
          }
          if (!_g4) {
            var _e78 = _r32,
              _n52 = null;
            for (; null !== _e78; ) {
              var _r33 = _e78.getChildren(),
                _o25 = _r33.length;
              ((0 === _o25 || _r33[_o25 - 1].is(_n52)) &&
                (_t98["delete"](_e78.__key), (_n52 = _e78)),
                (_e78 = _e78.getParent()));
            }
          }
          if (Oi(d)) {
            if (c === h) d.select();
            else {
              var _t102 = kr(e);
              (_t102.select(), d.replace(_t102));
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
          for (var _e79 = 1; _e79 < f; _e79++) {
            var _n53 = u[_e79],
              _r34 = _n53.__key;
            _t98.has(_r34) || _n53.remove();
          }
        }
      };
      _proto1.removeText = function removeText() {
        var t = Zr() === this;
        (Kl(this, Ul(Bl(this))), t && Zr() !== this && ji(this));
      };
      _proto1.formatText = function formatText(t, e) {
        var _d$splitText2, _p$splitText;
        if (e === void 0) {
          e = null;
        }
        if (this.isCollapsed()) return (this.toggleFormat(t), void Fi(null));
        var n = this.getNodes(),
          r = [];
        for (var _t103 of n) Or(_t103) && r.push(_t103);
        var o = function o(e) {
            n.forEach(function (n) {
              if (zo(n)) {
                var _r35 = n.getFormatFlags(t, e);
                n.setTextFormat(_r35);
              }
            });
          },
          i = r.length;
        if (0 === i) return (this.toggleFormat(t), Fi(null), void o(e));
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
          if (Ei(d) || (0 === h && y === d.getTextContentSize()))
            d.setFormat(g);
          else {
            var _t104 = d.splitText(h, y),
              _e80 = 0 === h ? _t104[0] : _t104[1];
            (_e80.setFormat(g),
              "text" === a.type && a.set(_e80.__key, 0, "text"),
              "text" === u.type && u.set(_e80.__key, y - h, "text"));
          }
          return void (this.format = g);
        }
        (0 === h ||
          Ei(d) ||
          ((_d$splitText2 = d.splitText(h)), (d = _d$splitText2[1]), (h = 0)),
          d.setFormat(g));
        var m = p.getFormatFlags(t, g);
        y > 0 &&
          (y === p.getTextContentSize() ||
            Ei(p) ||
            ((_p$splitText = p.splitText(y)),
            (p = _p$splitText[0]),
            _p$splitText),
          p.setFormat(m));
        for (var _e81 = f + 1; _e81 < _; _e81++) {
          var _n54 = r[_e81],
            _o26 = _n54.getFormatFlags(t, m);
          _n54.setFormat(_o26);
        }
        ("text" === a.type && a.set(d.__key, h, "text"),
          "text" === u.type && u.set(p.__key, y, "text"),
          (this.format = g | m));
      };
      _proto1.insertNodes = function insertNodes(e) {
        if (0 === e.length) return;
        if (
          (this.isCollapsed() || this.removeText(), "root" === this.anchor.key)
        ) {
          this.insertParagraph();
          var _n55 = Zr();
          return (Rr(_n55) || t(134), _n55.insertNodes(e));
        }
        var n = (this.isBackward() ? this.focus : this.anchor).getNode(),
          r = el(n, Ls),
          o = e[e.length - 1];
        if (zo(r) && "__language" in r) {
          if ("__language" in e[0]) this.insertText(e[0].getTextContent());
          else {
            var _t105 = uo(this);
            (r.splice(_t105, 0, e), o.selectEnd());
          }
          return;
        }
        if (
          !e.some(function (t) {
            return (zo(t) || Uo(t)) && !t.isInline();
          })
        ) {
          zo(r) || t(211, n.constructor.name, n.getType());
          var _i20 = uo(this);
          return (r.splice(_i20, 0, e), void o.selectEnd());
        }
        var i = (function (t) {
            var e = si();
            var n = null;
            for (var _r36 = 0; _r36 < t.length; _r36++) {
              var _o27 = t[_r36],
                _i21 = ti(_o27);
              if (
                _i21 ||
                (Uo(_o27) && _o27.isInline()) ||
                (zo(_o27) && _o27.isInline()) ||
                Or(_o27) ||
                _o27.isParentRequired()
              ) {
                if (
                  null === n &&
                  ((n = _o27.createParentElementNode()), e.append(n), _i21)
                )
                  continue;
                null !== n && n.append(_o27);
              } else (e.append(_o27), (n = null));
            }
            return e;
          })(e),
          s = i.getLastDescendant(),
          l = i.getChildren(),
          c = !zo(r) || !r.isEmpty() ? this.insertParagraph() : null,
          a = l[l.length - 1];
        var u = l[0];
        var f;
        (zo((f = u)) &&
          Ls(f) &&
          !f.isEmpty() &&
          zo(r) &&
          (!r.isEmpty() || r.canMergeWhenEmpty()) &&
          (zo(r) || t(211, n.constructor.name, n.getType()),
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
              for (var _t106 of i) s = s.insertAfter(_t106);
            })(r, u)));
        var d = el(s, Ls);
        (c &&
          zo(d) &&
          (c.canMergeWhenEmpty() || Ls(a)) &&
          (d.append.apply(d, c.getChildren()), c.remove()),
          zo(r) && r.isEmpty() && r.remove(),
          s.selectEnd());
        var h = zo(r) ? r.getLastChild() : null;
        ti(h) && d !== r && h.remove();
      };
      _proto1.insertParagraph = function insertParagraph() {
        if ("root" === this.anchor.key) {
          var _t107 = si();
          return (
            Yi().splice(this.anchor.offset, 0, [_t107]),
            _t107.select(),
            _t107
          );
        }
        var e = uo(this),
          n = el(this.anchor.getNode(), Ls);
        zo(n) || t(213);
        var r = n.getChildAtIndex(e),
          o = r ? [r].concat(r.getNextSiblings()) : [],
          i = n.insertNewAfter(this, !1);
        return i ? (i.append.apply(i, o), i.selectStart(), i) : null;
      };
      _proto1.insertLineBreak = function insertLineBreak(t) {
        var e = Zo();
        if ((this.insertNodes([e]), t)) {
          var _t108 = e.getParentOrThrow(),
            _n56 = e.getIndexWithinParent();
          _t108.select(_n56, _n56);
        }
      };
      _proto1.extract = function extract() {
        var _n$splitText;
        var t = [].concat(this.getNodes()),
          e = t.length;
        var n = t[0],
          r = t[e - 1];
        var _zr2 = zr(this),
          o = _zr2[0],
          i = _zr2[1],
          s = this.isBackward(),
          _ref19 = s ? [this.focus, this.anchor] : [this.anchor, this.focus],
          l = _ref19[0],
          c = _ref19[1],
          _ref20 = s ? [i, o] : [o, i],
          a = _ref20[0],
          u = _ref20[1];
        if (0 === e) return [];
        if (1 === e) {
          if (Or(n) && !this.isCollapsed()) {
            var _t109 = n.splitText(a, u),
              _e82 = 0 === a ? _t109[0] : _t109[1];
            return _e82
              ? (l.set(_e82.getKey(), 0, "text"),
                c.set(_e82.getKey(), _e82.getTextContentSize(), "text"),
                [_e82])
              : [];
          }
          return [n];
        }
        if (
          (Or(n) &&
            (a === n.getTextContentSize()
              ? t.shift()
              : 0 !== a &&
                ((_n$splitText = n.splitText(a)),
                (n = _n$splitText[1]),
                (t[0] = n),
                l.set(n.getKey(), 0, "text"))),
          Or(r))
        ) {
          var _r$splitText;
          var _e83 = r.getTextContent().length;
          0 === u
            ? t.pop()
            : u !== _e83 &&
              ((_r$splitText = r.splitText(u)),
              (r = _r$splitText[0]),
              (t[t.length - 1] = r),
              c.set(r.getKey(), r.getTextContentSize(), "text"));
        }
        return t;
      };
      _proto1.modify = function modify(t, e, n) {
        if (ho(this, t, e, n)) return;
        var r = "move" === t,
          o = vo(),
          i = bs(xs(o));
        if (!i) return;
        var s = o._blockCursorElement,
          l = o._rootElement,
          c = this.focus.getNode();
        if (
          (null === l ||
            null === s ||
            !zo(c) ||
            c.isInline() ||
            c.canBeEmpty() ||
            Es(s, o, l),
          this.dirty)
        ) {
          var _t110 = ds(o, this.anchor.key),
            _e84 = ds(o, this.focus.key);
          var _n57 = _t110,
            _r37 = _e84;
          if ("text" === this.anchor.type) {
            var _e85 = this.anchor.getNode();
            _n57 = Or(_e85) ? Ws(_e85, _t110, o) : null;
          }
          if ("text" === this.focus.type) {
            var _t111 = this.focus.getNode();
            _r37 = Or(_t111) ? Ws(_t111, _e84, o) : null;
          }
          _n57 &&
            _r37 &&
            io(i, _n57, this.anchor.offset, _r37, this.focus.offset);
        }
        if (
          ((function (t, e, n, r) {
            t.modify(e, n, r);
          })(i, t, e ? "backward" : "forward", n),
          i.rangeCount > 0)
        ) {
          var _t112 = i.getRangeAt(0),
            _n58 = this.anchor.getNode(),
            _o28 = jo(_n58) ? _n58 : Cs(_n58);
          if ((this.applyDOMRange(_t112), (this.dirty = !0), !r)) {
            var _n59 = this.getNodes(),
              _r38 = [];
            var _s10 = !1;
            for (var _t113 = 0; _t113 < _n59.length; _t113++) {
              var _e86 = _n59[_t113];
              ys(_e86, _o28) ? _r38.push(_e86) : (_s10 = !0);
            }
            if (_s10 && _r38.length > 0)
              if (e) {
                var _t114 = _r38[0];
                zo(_t114)
                  ? _t114.selectStart()
                  : _t114.getParentOrThrow().selectStart();
              } else {
                var _t115 = _r38[_r38.length - 1];
                zo(_t115)
                  ? _t115.selectEnd()
                  : _t115.getParentOrThrow().selectEnd();
              }
            (i.anchorNode === _t112.startContainer &&
              i.anchorOffset === _t112.startOffset) ||
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
        "lineboundary" === n && ho(this, t, e, n, "decorators");
      };
      _proto1.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            zo(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t116 = e.getParent(),
            _n60 =
              e.getNextSibling() ||
              (null === _t116 ? null : _t116.getNextSibling());
          if (zo(_n60) && _n60.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto1.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e87 = this.anchor;
          var _n61 = _e87.getNode();
          if (this.forwardDeletion(_e87, _n61, t)) return;
          var _r39 = Ol(Fl(_e87, t ? "previous" : "next"));
          if (
            _r39.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            var _t117 = { type: "initial" };
            for (var _e88 of _r39.iterNodeCarets("shadowRoot"))
              if (hl(_e88)) {
                if (_e88.origin.isInline());
                else {
                  if (_e88.origin.isShadowRoot()) {
                    if ("merge-block" === _t117.type) break;
                    if (
                      zo(_r39.anchor.origin) &&
                      _r39.anchor.origin.isEmpty()
                    ) {
                      var _t118 = Yl(_e88);
                      (Kl(this, bl(_t118, _t118)), _r39.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t117.type &&
                    "merge-block" !== _t117.type) ||
                    (_t117 = {
                      block: _t117.block,
                      caret: _e88,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t117.type) break;
                if (dl(_e88)) {
                  if (zo(_e88.origin)) {
                    if (_e88.origin.isInline()) {
                      if (!_e88.origin.isParentOf(_r39.anchor.origin)) break;
                    } else
                      _t117 = { block: _e88.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (Uo(_e88.origin)) {
                    if (_e88.origin.isIsolated());
                    else if (
                      "merge-next-block" === _t117.type &&
                      (_e88.origin.isKeyboardSelectable() ||
                        !_e88.origin.isInline()) &&
                      zo(_r39.anchor.origin) &&
                      _r39.anchor.origin.isEmpty()
                    ) {
                      _r39.anchor.origin.remove();
                      var _t119 = Xr();
                      (_t119.add(_e88.origin.getKey()), ji(_t119));
                    } else _e88.origin.remove();
                    return;
                  }
                  break;
                }
              }
            if ("merge-block" === _t117.type) {
              var _t120 = _t117,
                _e89 = _t120.caret,
                _n62 = _t120.block;
              return _e89.origin.isEmpty() &&
                !_n62.isEmpty() &&
                _e89.origin.getParent() === _n62.getParent()
                ? void _e89.origin.remove(!0)
                : (Kl(
                    this,
                    bl(
                      !_e89.origin.isEmpty() && _n62.isEmpty()
                        ? zl(yl(_n62, _e89.direction))
                        : _r39.anchor,
                      _e89,
                    ),
                  ),
                  this.removeText());
            }
          }
          var _o29 = this.focus;
          if ((this.modify("extend", t, "character"), this.isCollapsed())) {
            if (t && 0 === _e87.offset && $r(this, _e87.getNode())) return;
          } else {
            var _r40 = "text" === _o29.type ? _o29.getNode() : null;
            if (
              ((_n61 = "text" === _e87.type ? _e87.getNode() : null),
              null !== _r40 && _r40.isSegmented())
            ) {
              var _e90 = _o29.offset,
                _i22 = _r40.getTextContentSize();
              if (_r40.is(_n61) || (t && _e90 !== _i22) || (!t && 0 !== _e90))
                return void Ur(_r40, t, _e90);
            } else if (null !== _n61 && _n61.isSegmented()) {
              var _o30 = _e87.offset,
                _i23 = _n61.getTextContentSize();
              if (_n61.is(_r40) || (t && 0 !== _o30) || (!t && _o30 !== _i23))
                return void Ur(_n61, t, _o30);
            }
            !(function (t, e) {
              var n = t.anchor,
                r = t.focus,
                o = n.getNode(),
                i = r.getNode();
              if (o === i && "text" === n.type && "text" === r.type) {
                var _t121 = n.offset,
                  _i24 = r.offset,
                  _s11 = _t121 < _i24,
                  _l7 = _s11 ? _t121 : _i24,
                  _c5 = _s11 ? _i24 : _t121,
                  _a8 = _c5 - 1;
                if (_l7 !== _a8) {
                  (function (t) {
                    return !(Ji(t) || Wr(t));
                  })(o.getTextContent().slice(_l7, _c5)) &&
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
          var _t122 = this.anchor.getNode();
          _t122.isEmpty() &&
            jo(_t122.getParent()) &&
            null === _t122.getPreviousSibling() &&
            $r(this, _t122);
        }
      };
      _proto1.deleteLine = function deleteLine(t) {
        (this.isCollapsed() && this.modify("extend", t, "lineboundary"),
          this.isCollapsed() ? this.deleteCharacter(t) : this.removeText());
      };
      _proto1.deleteWord = function deleteWord(t) {
        if (this.isCollapsed()) {
          var _e91 = this.anchor,
            _n63 = _e91.getNode();
          if (this.forwardDeletion(_e91, _n63, t)) return;
          this.modify("extend", t, "word");
        }
        this.isCollapsed() ? this.deleteCharacter(t) : this.removeText();
      };
      _proto1.isBackward = function isBackward() {
        var t = this._cachedIsBackward;
        if (null !== t) return t;
        var e = this.focus.isBefore(this.anchor);
        return (Co() || (this._cachedIsBackward = e), e);
      };
      _proto1.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return Lr;
    })();
    function Kr(t) {
      return t instanceof _Fr;
    }
    function Br(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function zr(t) {
      var e = t.getStartEndPoints();
      if (null === e) return [0, 0];
      var n = e[0],
        r = e[1];
      return "element" === n.type &&
        "element" === r.type &&
        n.key === r.key &&
        n.offset === r.offset
        ? [0, 0]
        : [Br(n), Br(r)];
    }
    function $r(t, e) {
      for (var _n64 = e; _n64; _n64 = _n64.getParent()) {
        if (zo(_n64)) {
          if (_n64.collapseAtStart(t)) return !0;
          if (Ss(_n64)) break;
        }
        if (_n64.getPreviousSibling()) break;
      }
      return !1;
    }
    var Wr = (function () {
      try {
        var _t123 = new RegExp("\\p{Emoji}", "u"),
          _e92 = _t123.test.bind(_t123);
        if (_e92("\u2764\ufe0f") && _e92("#\ufe0f\u20e3") && _e92("\u{1f44d}"))
          return _e92;
      } catch (t) {}
      return function () {
        return !1;
      };
    })();
    function Ur(t, e, n) {
      var r = t,
        o = r.getTextContent().split(/(?=\s)/g),
        i = o.length;
      var s = 0,
        l = 0;
      for (var _t124 = 0; _t124 < i; _t124++) {
        var _r41 = _t124 === i - 1;
        if (
          ((l = s), (s += o[_t124].length), (e && s === n) || s > n || _r41)
        ) {
          (o.splice(_t124, 1), _r41 && (l = void 0));
          break;
        }
      }
      var c = o.join("").trim();
      "" === c ? r.remove() : (r.setTextContent(c), r.select(l, l));
    }
    function Yr(e, n, r, o) {
      var i,
        s = n,
        l = !1;
      if (As(e)) {
        var _c6 = !1;
        var _a9 = e.childNodes,
          _u6 = _a9.length,
          _f0 = o._blockCursorElement;
        (s === _u6 && _u6 > 0 && ((_c6 = !0), (s = _u6 - 1)),
          void 0 !== zi(e, o) || Qs(e, o) || (l = !0));
        var _d6 = _a9[s],
          _h5 = !1;
        if (_d6 === _f0) ((_d6 = _a9[s + 1]), (_h5 = !0));
        else if (null !== _f0) {
          var _t125 = _f0.parentNode;
          if (e === _t125) {
            n > Array.prototype.indexOf.call(_t125.children, _f0) && s--;
          }
        }
        if (((i = Hi(_d6)), Or(i))) s = xl(i, _c6 ? "next" : "previous");
        else {
          var _a0 = Hi(e);
          if (null === _a0) return null;
          if (zo(_a0)) {
            var _u7$resolveChildIndex;
            var _l8 = o.getElementByKey(_a0.getKey());
            null === _l8 && t(214);
            var _u7 = zs(_a0, _l8, o);
            ((_u7$resolveChildIndex = _u7.resolveChildIndex(_a0, _l8, e, n)),
              (_a0 = _u7$resolveChildIndex[0]),
              (s = _u7$resolveChildIndex[1]),
              zo(_a0) || t(215),
              _c6 &&
                s >= _a0.getChildrenSize() &&
                (s = Math.max(0, _a0.getChildrenSize() - 1)));
            var _f1 = _a0.getChildAtIndex(s);
            if (
              zo(_f1) &&
              (function (t, e, n) {
                var r = t.getParent();
                return (
                  null === n ||
                  null === r ||
                  !r.canBeEmpty() ||
                  r !== n.getNode()
                );
              })(_f1, 0, r)
            ) {
              var _t126 = _c6
                ? _f1.getLastDescendant()
                : _f1.getFirstDescendant();
              (null === _t126
                ? (_a0 = _f1)
                : ((_f1 = _t126),
                  (_a0 = zo(_f1) ? _f1 : _f1.getParentOrThrow())),
                (s = 0));
            }
            Or(_f1)
              ? ((i = _f1),
                (_a0 = null),
                (s = xl(_f1, _c6 ? "next" : "previous")))
              : _f1 !== _a0 &&
                _c6 &&
                !_h5 &&
                (zo(_a0) || t(216),
                (s = Math.min(_a0.getChildrenSize(), s + 1)));
          } else {
            var _t127 = _a0.getIndexWithinParent(),
              _r42 = o.getElementByKey(_a0.getKey());
            var _i25 = "after";
            if (null !== _r42 && Hi(e) === _a0) {
              var _t128 = zs(_a0, _r42, o);
              _t128.element !== _r42
                ? (_i25 = _t128.resolveLeafPosition(_r42, e, n))
                : 0 === n && Uo(_a0) && (_i25 = "before");
            }
            ((s = "before" === _i25 ? _t127 : _t127 + 1),
              (_a0 = _a0.getParentOrThrow()));
          }
          if (zo(_a0)) return [Dr(_a0.__key, s, "element"), l];
        }
      } else i = Hi(e);
      return Or(i) ? [Dr(i.__key, xl(i, s, "clamp"), "text"), l] : null;
    }
    function jr(t, e, n) {
      var r = t.offset,
        o = t.getNode();
      if (0 === r) {
        var _r43 = o.getPreviousSibling(),
          _i26 = o.getParent();
        if (e) {
          if ((n || !e) && null === _r43 && zo(_i26) && _i26.isInline()) {
            var _e93 = _i26.getPreviousSibling();
            Or(_e93) && t.set(_e93.__key, _e93.getTextContent().length, "text");
          }
        } else
          zo(_r43) && !n && _r43.isInline()
            ? t.set(_r43.__key, _r43.getChildrenSize(), "element")
            : Or(_r43) &&
              t.set(_r43.__key, _r43.getTextContent().length, "text");
      } else if (r === o.getTextContent().length) {
        var _r44 = o.getNextSibling(),
          _i27 = o.getParent();
        if (e && zo(_r44) && _r44.isInline()) t.set(_r44.__key, 0, "element");
        else if (
          (n || e) &&
          null === _r44 &&
          zo(_i27) &&
          _i27.isInline() &&
          !_i27.canInsertTextAfter()
        ) {
          var _e94 = _i27.getNextSibling();
          Or(_e94) && t.set(_e94.__key, 0, "text");
        }
      }
    }
    function Hr(t, e, n) {
      if ("text" === t.type && "text" === e.type) {
        var _n65 = t.isBefore(e),
          _r45 = t.is(e);
        (jr(t, _n65, _r45),
          jr(e, !_n65, _r45),
          _r45 && e.set(t.key, t.offset, t.type));
      }
    }
    function Jr(t, e, n, r, o, i) {
      if (null === t || null === n || !Ti(o, t, n)) return null;
      var s = Yr(t, e, Rr(i) ? i.anchor : null, o);
      if (null === s) return null;
      var l = Yr(n, r, Rr(i) ? i.focus : null, o);
      if (null === l) return null;
      var c = s[0],
        a = s[1],
        u = l[0],
        f = l[1];
      if ("element" === c.type && "element" === u.type) {
        var _e95 = Hi(t),
          _r46 = Hi(n);
        if (Uo(_e95) && Uo(_r46)) return null;
      }
      return (Hr(c, u), [c, u, a || f]);
    }
    function Gr(t) {
      return zo(t) && !t.isInline();
    }
    function Vr(t, e, n, r, o, i) {
      var s = No(),
        l = new _Lr(Dr(t, e, o), Dr(n, r, i), 0, "");
      return ((l.dirty = !0), (s._selection = l), l);
    }
    function qr() {
      var t = Dr("root", 0, "element"),
        e = Dr("root", 0, "element");
      return new _Lr(t, e, 0, "");
    }
    function Xr() {
      return new _Fr(new Set());
    }
    function Qr(t, e, n, r) {
      var o = n._window;
      if (null === o) return null;
      var i = r || o.event,
        s = i ? i.type : void 0,
        l = "selectionchange" === s,
        c =
          !G &&
          (l ||
            "beforeinput" === s ||
            "compositionstart" === s ||
            "compositionend" === s ||
            ("click" === s && i && 3 === i.detail) ||
            "drop" === s ||
            void 0 === s);
      var a, u, f, d;
      if (Rr(t) && !c) return t.clone();
      if (null === e) return null;
      if (
        ((a = e.anchorNode),
        (u = e.focusNode),
        (f = e.anchorOffset),
        (d = e.focusOffset),
        (l || void 0 === s) && Rr(t) && !Ti(n, a, u))
      )
        return t.clone();
      var h = Jr(a, f, u, d, n, t);
      if (null === h) return null;
      var g = h[0],
        _ = h[1],
        p = h[2];
      var y = 0,
        m = "";
      if (Rr(t)) {
        var _e96 = t.anchor;
        if (g.key === _e96.key) ((y = t.format), (m = t.style));
        else {
          var _t129 = g.getNode();
          Or(_t129)
            ? ((y = _t129.getFormat()), (m = _t129.getStyle()))
            : zo(_t129) &&
              ((y = _t129.getTextFormat()), (m = _t129.getTextStyle()));
        }
      }
      var x = new _Lr(g, _, y, m);
      return (p && (x.dirty = !0), x);
    }
    function Zr() {
      return No()._selection;
    }
    function to() {
      return vo()._editorState._selection;
    }
    function eo(t, e, n, r) {
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
        var _e97 = o.offset;
        if ((n <= _e97 && r > 0) || (n < _e97 && r < 0)) {
          var _n66 = Math.max(0, _e97 + r);
          (o.set(c, _n66, "element"), i.set(c, _n66, "element"), no(t));
        }
      } else {
        var _s12 = t.isBackward(),
          _l9 = _s12 ? i : o,
          _a1 = _l9.getNode(),
          _u8 = _s12 ? o : i,
          _f10 = _u8.getNode();
        if (e.is(_a1)) {
          var _t130 = _l9.offset;
          ((n <= _t130 && r > 0) || (n < _t130 && r < 0)) &&
            _l9.set(c, Math.max(0, _t130 + r), "element");
        }
        if (e.is(_f10)) {
          var _t131 = _u8.offset;
          ((n <= _t131 && r > 0) || (n < _t131 && r < 0)) &&
            _u8.set(c, Math.max(0, _t131 + r), "element");
        }
      }
      no(t);
    }
    function no(t) {
      var e = t.anchor,
        n = e.offset,
        r = t.focus,
        o = r.offset,
        i = e.getNode(),
        s = r.getNode();
      if (t.isCollapsed()) {
        if (!zo(i)) return;
        var _t132 = i.getChildrenSize(),
          _o31 = n >= _t132,
          _s13 = _o31 ? i.getChildAtIndex(_t132 - 1) : i.getChildAtIndex(n);
        if (Or(_s13)) {
          var _t133 = 0;
          (_o31 && (_t133 = _s13.getTextContentSize()),
            e.set(_s13.__key, _t133, "text"),
            r.set(_s13.__key, _t133, "text"));
        }
        return;
      }
      if (zo(i)) {
        var _t134 = i.getChildrenSize(),
          _r47 = n >= _t134,
          _o32 = _r47 ? i.getChildAtIndex(_t134 - 1) : i.getChildAtIndex(n);
        if (Or(_o32)) {
          var _t135 = 0;
          (_r47 && (_t135 = _o32.getTextContentSize()),
            e.set(_o32.__key, _t135, "text"));
        }
      }
      if (zo(s)) {
        var _t136 = s.getChildrenSize(),
          _e98 = o >= _t136,
          _n67 = _e98 ? s.getChildAtIndex(_t136 - 1) : s.getChildAtIndex(o);
        if (Or(_n67)) {
          var _t137 = 0;
          (_e98 && (_t137 = _n67.getTextContentSize()),
            r.set(_n67.__key, _t137, "text"));
        }
      }
    }
    function ro(t, e, n, r, o) {
      var i = null,
        s = 0,
        l = null;
      (null !== r
        ? ((i = r.__key),
          Or(r)
            ? ((s = r.getTextContentSize()), (l = "text"))
            : zo(r) && ((s = r.getChildrenSize()), (l = "element")))
        : null !== o &&
          ((i = o.__key), Or(o) ? (l = "text") : zo(o) && (l = "element")),
        null !== i && null !== l
          ? t.set(i, s, l)
          : ((s = e.getIndexWithinParent()),
            -1 === s && (s = n.getChildrenSize()),
            t.set(n.__key, s, "element")));
    }
    function oo(t, e, n, r, o) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : o), "text")
        : t.offset > r.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function io(t, e, n, r, o) {
      try {
        t.setBaseAndExtent(e, n, r, o);
      } catch (t) {}
    }
    function so(t, e, n) {
      var r = ds(t, e.getKey());
      if (zo(e)) {
        var _o33 = zs(e, r, t);
        return [_o33.element, n + _o33.getFirstChildOffset()];
      }
      return [r, n];
    }
    function lo(t, e, n, r, i, s) {
      var l = document.activeElement;
      if ((i.has(tr) && l !== s) || (null !== l && Si(l))) return;
      if (!Rr(e))
        return void (
          null !== t &&
          Ti(n, r.anchorNode, r.focusNode) &&
          r.removeAllRanges()
        );
      var c = e.anchor,
        a = e.focus,
        u = c.getNode(),
        f = a.getNode(),
        _so = so(n, u, c.offset),
        d = _so[0],
        h = _so[1],
        _so2 = so(n, f, a.offset),
        g = _so2[0],
        _ = _so2[1],
        p = e.format,
        y = e.style,
        m = e.isCollapsed();
      var x = d,
        C = g,
        S = !1;
      var T, N, v, k, O;
      if (
        ("text" === c.type
          ? ((x = Or(u) ? Ws(u, d, n) : null),
            (S = u.getFormat() !== p || u.getStyle() !== y))
          : Rr(t) && "text" === t.anchor.type && (S = !0),
        "text" === a.type && (C = Or(f) ? Ws(f, g, n) : null),
        null !== x && null !== C) &&
        (m &&
          (null === t || S || (Rr(t) && (t.format !== p || t.style !== y))) &&
          ((T = p),
          (N = y),
          (v = h),
          (k = c.key),
          (O = performance.now()),
          (kn = [T, N, v, k, O])),
        ("Range" === r.type && m) ||
          r.anchorOffset !== h ||
          r.focusOffset !== _ ||
          r.anchorNode !== x ||
          r.focusNode !== C ||
          ((null !== l && s.contains(l)) ||
            i.has(rr) ||
            s.focus({ preventScroll: !0 }),
          "element" === c.type))
      ) {
        if (
          (io(r, x, h, C, _),
          !o ||
            !e.isCollapsed() ||
            null === s ||
            i.has(rr) ||
            (null !== document.activeElement &&
              s.contains(document.activeElement)) ||
            s.focus({ preventScroll: !0 }),
          !i.has(er) &&
            e.isCollapsed() &&
            null !== s &&
            s === document.activeElement)
        ) {
          var _t138 =
            Rr(e) && "element" === e.anchor.type
              ? x.childNodes[h] || null
              : r.rangeCount > 0
                ? r.getRangeAt(0)
                : null;
          if (null !== _t138) {
            var _e99;
            if (_t138 instanceof Text) {
              var _n68 = document.createRange();
              (_n68.selectNode(_t138), (_e99 = _n68.getBoundingClientRect()));
            } else _e99 = _t138.getBoundingClientRect();
            !(function (t, e, n) {
              var r = gs(n),
                o = ms(r);
              if (null === r || null === o) return;
              var i = e.top,
                s = e.bottom,
                l = 0,
                c = 0,
                a = n;
              for (; null !== a; ) {
                var _e100 = a === r.body;
                if (_e100) {
                  var _e101 = o.visualViewport;
                  if (_e101) {
                    var _t139 = _e101.offsetTop;
                    ((l = _t139), (c = _t139 + _e101.height));
                  } else ((l = 0), (c = xs(t).innerHeight));
                  var _n69 = o.getComputedStyle(r.documentElement),
                    _i28 = parseFloat(_n69.scrollPaddingTop),
                    _s14 = parseFloat(_n69.scrollPaddingBottom);
                  (isFinite(_i28) && (l += _i28),
                    isFinite(_s14) && (c -= _s14));
                } else {
                  var _t140 = a.getBoundingClientRect();
                  ((l = _t140.top), (c = _t140.bottom));
                }
                var _n70 = 0;
                if (
                  (i < l ? (_n70 = -(l - i)) : s > c && (_n70 = s - c),
                  0 !== _n70)
                )
                  if (_e100) o.scrollBy(0, _n70);
                  else {
                    var _t141 = a.scrollTop;
                    a.scrollTop += _n70;
                    var _e102 = a.scrollTop - _t141;
                    ((i -= _e102), (s -= _e102));
                  }
                if (_e100) break;
                a = hs(a);
              }
            })(n, _e99, s);
          }
        }
        mn = !0;
      }
    }
    function co(t, e) {
      for (var _n71 of t.split(/(\r?\n|\t)/))
        "\n" === _n71 || "\r\n" === _n71
          ? e.linebreak()
          : "\t" === _n71
            ? e.tab()
            : "" !== _n71 && e.text(_n71);
    }
    function ao(t) {
      var e = [];
      return (
        co(t, {
          linebreak: function linebreak() {
            return e.push(Zo());
          },
          tab: function tab() {
            return e.push(Mr());
          },
          text: function text(t) {
            return e.push(kr(t));
          },
        }),
        e
      );
    }
    function uo(e) {
      var n = e;
      e.isCollapsed() || n.removeText();
      var r = Zr();
      (Rr(r) && (n = r), Rr(n) || t(161));
      var o = n.anchor;
      var i = o.getNode(),
        s = o.offset;
      for (; !Ls(i); ) {
        var _fo;
        var _t142 = i;
        if (((_fo = fo(i, s)), (i = _fo[0]), (s = _fo[1]), _t142.is(i))) break;
      }
      return s;
    }
    function fo(t, e) {
      var n = t.getParent();
      if (!n) {
        var _t143 = si();
        return (Yi().append(_t143), _t143.select(), [Yi(), 0]);
      }
      if (Or(t)) {
        var _r48 = t.splitText(e);
        if (0 === _r48.length) return [n, t.getIndexWithinParent()];
        var _o34 = 0 === e ? 0 : 1;
        return [n, _r48[0].getIndexWithinParent() + _o34];
      }
      if (!zo(t) || 0 === e) return [n, t.getIndexWithinParent()];
      var r = t.getChildAtIndex(e);
      if (r) {
        var _n72 = new _Lr(
            Dr(t.__key, e, "element"),
            Dr(t.__key, e, "element"),
            0,
            "",
          ),
          _o35 = t.insertNewAfter(_n72);
        _o35 && _o35.append.apply(_o35, [r].concat(r.getNextSiblings()));
      }
      return [n, t.getIndexWithinParent() + 1];
    }
    function ho(t, e, n, r, o) {
      if (o === void 0) {
        o = "decorators-and-blocks";
      }
      if ("move" === e && "character" === r && !t.isCollapsed()) {
        var _ref21 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e103 = _ref21[0],
          _r49 = _ref21[1];
        return (_r49.set(_e103.key, _e103.offset, _e103.type), !0);
      }
      var i = Fl(t.focus, n ? "previous" : "next"),
        s = "lineboundary" === r,
        l = "move" === e;
      var c = i,
        a = "decorators-and-blocks" === o;
      if (!jl(c)) {
        for (var _t144 of c) {
          a = !1;
          var _e104 = _t144.origin;
          if (
            !Uo(_e104) ||
            _e104.isIsolated() ||
            ((c = _t144), !s || !_e104.isInline())
          )
            break;
        }
        if (a)
          for (var _t145 of Ol(i).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (hl(_t145)) _t145.origin.isInline() || (c = _t145);
            else {
              if (zo(_t145.origin)) continue;
              Uo(_t145.origin) && !_t145.origin.isInline() && (c = _t145);
            }
            break;
          }
      }
      if (c === i) return !1;
      if (l && !s && Uo(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t146 = Xr();
        return (_t146.add(c.origin.getKey()), ji(_t146), !0);
      }
      return ((c = Yl(c)), l && Rl(t.anchor, c), Rl(t.focus, c), a || !s);
    }
    var go = null,
      _o = null,
      po = !1,
      yo = !1,
      mo = 0;
    var xo = { characterData: !0, childList: !0, subtree: !0 };
    function Co() {
      return po || (null !== go && go._readOnly);
    }
    function So() {
      po && t(13);
    }
    function To() {
      mo > 99 && t(14);
    }
    function No() {
      return (null === go && t(195, ko()), go);
    }
    function vo() {
      return (null === _o && t(337, ko()), _o);
    }
    function ko() {
      var t = 0;
      var e = new Set(),
        n = _gi.version;
      if ("undefined" != typeof window)
        for (var _r50 of document.querySelectorAll("[contenteditable]")) {
          var _o36 = ki(_r50);
          if (Ni(_o36)) t++;
          else if (_o36) {
            var _t147 = String(_o36.constructor.version || "<0.17.1");
            (_t147 === n &&
              (_t147 +=
                " (separately built, likely a bundler configuration issue)"),
              e.add(_t147));
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
    function Oo() {
      return _o;
    }
    function Eo(t, e, n) {
      var r = e.__type,
        o = mi(t, r);
      var i = n.get(r);
      void 0 === i && ((i = Array.from(o.transforms)), n.set(r, i));
      var s = i.length;
      for (var _t148 = 0; _t148 < s && (i[_t148](e), e.isAttached()); _t148++);
    }
    function bo(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function Mo(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var r = e;
      Array.isArray(e) || (r = [e]);
      for (var _t149 of r) n.add(_t149);
    }
    function Ao(e, n) {
      var r = e.type,
        o = n.get(r);
      void 0 === o && t(17, r);
      var i = o.klass;
      e.type !== i.getType() && t(18, i.name);
      var s = i.importJSON(e),
        l = e.children;
      if (zo(s) && Array.isArray(l))
        for (var _t150 = 0; _t150 < l.length; _t150++) {
          var _e105 = Ao(l[_t150], n);
          s.append(_e105);
        }
      return s;
    }
    function wo(t, e, n) {
      var r = go,
        o = po,
        i = _o;
      ((go = e), (po = !0), (_o = t));
      try {
        return n();
      } finally {
        ((go = r), (po = o), (_o = i));
      }
    }
    function Do(e, n) {
      var r = e._pendingEditorState,
        o = e._rootElement,
        i = e._headless || null === o;
      if (null === r)
        return void (e._deferred.length > 0 && Fo(e, e._deferred));
      var s = e._editorState,
        l = s._selection,
        c = r._selection,
        a = 0 !== e._dirtyType,
        u = go,
        f = po,
        d = _o,
        h = e._updating,
        g = e._observer;
      var _ = null;
      if (
        ((e._pendingEditorState = null),
        (e._editorState = r),
        !i && a && null !== g)
      ) {
        ((_o = e), (go = r), (po = !1), (e._updating = !0));
        try {
          var _t151 = e._dirtyType,
            _n73 = e._dirtyElements,
            _o37 = e._dirtyLeaves;
          (g.disconnect(), (_ = ae(s, r, e, _t151, _n73, _o37)));
        } catch (t) {
          if ((t instanceof Error && e._onError(t), yo)) throw t;
          return (
            ai(e, null, o, r),
            rt(e),
            (e._dirtyType = 2),
            (yo = !0),
            Do(e, s),
            void (yo = !1)
          );
        } finally {
          (g.observe(o, xo), (e._updating = h), (go = u), (po = f), (_o = d));
        }
      }
      r._readOnly || (r._readOnly = !0);
      var p = e._dirtyLeaves,
        y = e._dirtyElements,
        m = e._normalizedNodes,
        x = e._updateTags,
        C = e._deferred;
      (a &&
        ((e._dirtyType = 0),
        e._cloneNotNeeded.clear(),
        (e._dirtyLeaves = new Set()),
        (e._dirtyElements = new Map()),
        (e._normalizedNodes = new Set()),
        (e._updateTags = new Set())),
        (function (t, e) {
          var n = t._decorators;
          var r = t._pendingDecorators || n;
          var o = e._nodeMap;
          var i;
          for (i in r) o.has(i) || (r === n && (r = Wi(t)), delete r[i]);
        })(e, r));
      var S = i ? null : bs(xs(e));
      if (
        e._editable &&
        null !== S &&
        (a || null === c || c.dirty || !c.is(l)) &&
        null !== o &&
        !x.has(nr)
      ) {
        ((_o = e), (go = r));
        try {
          if ((null !== g && g.disconnect(), a || null === c || c.dirty)) {
            var _t152 = e._blockCursorElement;
            (null !== _t152 && Es(_t152, e, o), lo(l, c, e, S, x, o));
          }
          !(function (t, e, n) {
            var r = t._blockCursorElement;
            if (
              Rr(n) &&
              n.isCollapsed() &&
              "element" === n.anchor.type &&
              e.contains(document.activeElement)
            ) {
              var _o38 = n.anchor,
                _i29 = _o38.getNode(),
                _s15 = _o38.offset;
              var _l0 = !1,
                _c7 = null;
              if (_s15 === _i29.getChildrenSize()) {
                Os(_i29.getChildAtIndex(_s15 - 1)) && (_l0 = !0);
              } else {
                var _e106 = _i29.getChildAtIndex(_s15);
                if (null !== _e106 && Os(_e106)) {
                  var _n74 = _e106.getPreviousSibling();
                  (null === _n74 || Os(_n74)) &&
                    ((_l0 = !0), (_c7 = t.getElementByKey(_e106.__key)));
                }
              }
              if (_l0) {
                var _n75 = zs(_i29, t.getElementByKey(_i29.__key), t).element;
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
                            var _t153 = Xl(r);
                            r = e.blockCursor = _t153;
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
                  void (null === _c7
                    ? _n75.appendChild(r)
                    : _n75.insertBefore(r, _c7))
                );
              }
            }
            null !== r && Es(r, t, e);
          })(e, o, c);
        } finally {
          (null !== g && g.observe(o, xo), (_o = d), (go = u));
        }
      }
      (null !== _ &&
        (function (t, e, n, r, o) {
          var i = Array.from(t._listeners.mutation),
            s = i.length;
          for (var _t154 = 0; _t154 < s; _t154++) {
            var _i$_t = i[_t154],
              _s16 = _i$_t[0],
              _l1 = _i$_t[1];
            for (var _t155 of _l1) {
              var _i30 = e.get(_t155);
              void 0 !== _i30 &&
                _s16(_i30, {
                  dirtyLeaves: r,
                  prevEditorState: o,
                  updateTags: n,
                });
            }
          }
        })(e, _, x, p, s),
        Rr(c) ||
          null === c ||
          (null !== l && l.is(c)) ||
          e.dispatchCommand(de, void 0));
      var T = e._pendingDecorators;
      (null !== T &&
        ((e._decorators = T),
        (e._pendingDecorators = null),
        Io("decorator", e, !0, T)),
        (function (t, e, n) {
          var r = Ui(e),
            o = Ui(n);
          r !== o && Io("textcontent", t, !0, o);
        })(e, n || s, r),
        Io("update", e, !0, {
          dirtyElements: y,
          dirtyLeaves: p,
          editorState: r,
          mutatedNodes: _,
          normalizedNodes: m,
          prevEditorState: n || s,
          tags: x,
        }),
        Fo(e, C),
        (function (e) {
          var n = e._updates;
          if (0 === n.length) return void (e._cascadeCount = 0);
          if (e._cascadeCount++ > 99) {
            ((e._updates = []), (e._cascadeCount = 0));
            try {
              t(343);
            } catch (t) {
              t instanceof Error && e._onError(t);
            }
            return;
          }
          var r = n.shift();
          if (r) {
            var _t156 = r[0],
              _n76 = r[1];
            Lo(e, _t156, _n76);
          }
        })(e));
    }
    function Io(t, e, n) {
      var o = e._updating;
      e._updating = n;
      try {
        var _n77 = e._listeners[t],
          _o39 = Array.from(_n77);
        for (
          var _len3 = arguments.length,
            r = new Array(_len3 > 3 ? _len3 - 3 : 0),
            _key3 = 3;
          _key3 < _len3;
          _key3++
        ) {
          r[_key3 - 3] = arguments[_key3];
        }
        for (var _ref23 of _o39) {
          var _t157 = _ref23[0];
          var _e107 = _ref23[1];
          {
            _e107 && _e107();
            var _o40 = _t157.apply(void 0, r);
            _n77.has(_t157) ? _n77.set(_t157, _o40) : _o40 && _o40();
          }
        }
      } finally {
        e._updating = o;
      }
    }
    function Po(t, e, n, r) {
      var o = Gi(t);
      var i;
      for (var _t158 = 4; _t158 >= 0; _t158--) {
        var _loop = function _loop() {
            var l = o[_s17];
            if (_s17 > 0 && l._updating) {
              i = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e108 = c[_t158];
              if (_e108.size > 0) {
                var _t159 = !1;
                if (
                  (Ko(l, function () {
                    for (var _o41 of _e108)
                      if (_o41(n, r)) return void (_t159 = !0);
                  }),
                  _t159)
                )
                  return { v: _t159 };
              }
            }
          },
          _ret;
        for (var _s17 = 0; _s17 < o.length; _s17++) {
          _ret = _loop();
          if (_ret === 0) break;
          if (_ret) return _ret.v;
        }
      }
      return (
        i &&
          i.update(function () {
            Po(i, e, n, r);
          }),
        !1
      );
    }
    function Fo(t, e) {
      if (((t._deferred = []), 0 !== e.length)) {
        var _n78 = t._updating;
        t._updating = !0;
        try {
          for (var _t160 = 0; _t160 < e.length; _t160++) e[_t160]();
        } finally {
          t._updating = _n78;
        }
      }
    }
    function Ro(e, n) {
      var r = e._updates;
      var o = n || !1;
      for (; 0 !== r.length; ) {
        var _n79 = r.shift();
        if (_n79) {
          var _r51 = _n79[0],
            _i31 = _n79[1],
            _s18 = e._pendingEditorState;
          var _l10 = void 0;
          (void 0 !== _i31 &&
            ((_l10 = _i31.onUpdate),
            _i31.skipTransforms && (o = !0),
            _i31.discrete && (null === _s18 && t(191), (_s18._flushSync = !0)),
            _l10 && e._deferred.push(_l10),
            Mo(e, _i31.tag)),
            null == _s18 ? Lo(e, _r51, _i31) : _r51());
        }
      }
      return o;
    }
    function Lo(e, n, r) {
      var o = e._updateTags;
      var i,
        s = !1,
        l = !1;
      (void 0 !== r &&
        ((i = r.onUpdate),
        Mo(e, r.tag),
        (s = r.skipTransforms || !1),
        (l = r.discrete || !1)),
        i && e._deferred.push(i));
      var c = e._editorState;
      var a = e._pendingEditorState,
        u = !1;
      ((null === a || a._readOnly) &&
        ((a = e._pendingEditorState = Ho(a || c)), (u = !0)),
        (a._flushSync = l));
      var f = go,
        d = po,
        h = _o,
        g = e._updating;
      ((go = a), (po = !1), (e._updating = !0), (_o = e));
      var _ = e._headless || null === e.getRootElement();
      pi(null);
      try {
        u &&
          (_
            ? null !== c._selection && (a._selection = c._selection.clone())
            : (a._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  r = bs(xs(t));
                return Rr(n) || null == n ? Qr(n, r, t, e) : n.clone();
              })(e, (r && r.event) || null)));
        var _o42 = e._compositionKey;
        (n(),
          (s = Ro(e, s)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              r = t._selection;
            if (Rr(r)) {
              var _t161 = r.anchor,
                _e109 = r.focus;
              var _o43;
              if (
                ("text" === _t161.type &&
                  ((_o43 = _t161.getNode()), _o43.selectionTransform(n, r)),
                "text" === _e109.type)
              ) {
                var _t162 = _e109.getNode();
                _o43 !== _t162 && _t162.selectionTransform(n, r);
              }
            }
          })(a, e),
          0 !== e._dirtyType &&
            (s
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    r = t._nodeMap;
                  for (var _t163 of n) {
                    var _e110 = r.get(_t163);
                    Or(_e110) &&
                      _e110.isAttached() &&
                      _e110.isSimpleText() &&
                      !_e110.isUnmergeable() &&
                      mt(_e110);
                  }
                })(a, e)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    r = e._dirtyElements,
                    o = t._nodeMap,
                    i = Ri(),
                    s = new Map();
                  var l = n,
                    c = l.size,
                    a = r,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t164 of l) {
                        var _r52 = o.get(_t164);
                        (Or(_r52) &&
                          _r52.isAttached() &&
                          _r52.isSimpleText() &&
                          !_r52.isUnmergeable() &&
                          mt(_r52),
                          void 0 !== _r52 && bo(_r52, i) && Eo(e, _r52, s),
                          n.add(_t164));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        mo++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t165 of a) {
                      var _n80 = _t165[0],
                        _l11 = _t165[1];
                      if ((r.set(_n80, _l11), !_l11)) continue;
                      var _c8 = o.get(_n80);
                      void 0 !== _c8 && bo(_c8, i) && Eo(e, _c8, s);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      mo++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = r));
                })(a, e),
            Ro(e),
            (function (t, e, n, r) {
              var o = t._nodeMap,
                i = e._nodeMap,
                s = [];
              for (var _ref25 of r) {
                var _t166 = _ref25[0];
                {
                  var _e111 = i.get(_t166);
                  void 0 !== _e111 &&
                    (_e111.isAttached() ||
                      (zo(_e111) && J(_e111, _t166, o, i, s, r),
                      o.has(_t166) || r["delete"](_t166),
                      s.push(_t166)));
                }
              }
              for (var _t167 of s) i["delete"](_t167);
              for (var _t168 of n) {
                var _e112 = i.get(_t168);
                void 0 === _e112 ||
                  _e112.isAttached() ||
                  (o.has(_t168) || n["delete"](_t168), i["delete"](_t168));
              }
            })(c, a, e._dirtyLeaves, e._dirtyElements)));
        _o42 !== e._compositionKey && (a._flushSync = !0);
        var _i32 = a._selection;
        if (Rr(_i32)) {
          var _e113 = a._nodeMap,
            _n81 = _i32.anchor.key,
            _r53 = _i32.focus.key;
          (void 0 !== _e113.get(_n81) && void 0 !== _e113.get(_r53)) || t(19);
        } else Kr(_i32) && 0 === _i32._nodes.size && (a._selection = null);
      } catch (t) {
        return (
          t instanceof Error && e._onError(t),
          (e._pendingEditorState = c),
          (e._dirtyType = 2),
          e._cloneNotNeeded.clear(),
          (e._dirtyLeaves = new Set()),
          e._dirtyElements.clear(),
          void Do(e)
        );
      } finally {
        ((go = f), (po = d), (_o = h), (e._updating = g), (mo = 0));
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
          ? ((a._flushSync = !1), Do(e))
          : u &&
            Ci(function () {
              Do(e);
            })
        : ((a._flushSync = !1),
          u && (o.clear(), (e._deferred = []), (e._pendingEditorState = null)));
    }
    function Ko(t, e, n) {
      _o === t && void 0 === n ? e() : Lo(t, e, n);
    }
    var _Bo4 = (function (_Qn2) {
      function Bo(t) {
        var _this3;
        ((_this3 = _Qn2.call(this, t) || this),
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
      babelHelpers.inheritsLoose(Bo, _Qn2);
      var _proto10 = Bo.prototype;
      _proto10.afterCloneFrom = function afterCloneFrom(t) {
        (_Qn2.prototype.afterCloneFrom.call(this, t),
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
        return D[t] || "";
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
        var t = vo()._dirtyElements;
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
          if ((Or(e) && t.push(e), zo(e))) {
            var _n82 = e.getAllTextNodes();
            t.push.apply(t, _n82);
          }
          e = e.getNextSibling();
        }
        return t;
      };
      _proto10.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; zo(t); ) {
          var _e114 = t.getFirstChild();
          if (null === _e114) break;
          t = _e114;
        }
        return t;
      };
      _proto10.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; zo(t); ) {
          var _e115 = t.getLastChild();
          if (null === _e115) break;
          t = _e115;
        }
        return t;
      };
      _proto10.getDescendantByIndex = function getDescendantByIndex(t) {
        var e = this.getChildren(),
          n = e.length;
        if (t >= n) {
          var _t169 = e[n - 1];
          return (zo(_t169) && _t169.getLastDescendant()) || _t169 || null;
        }
        var r = e[t];
        return (zo(r) && r.getFirstDescendant()) || r || null;
      };
      _proto10.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : Li(t);
      };
      _proto10.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var e = this.getFirstChild();
        return (null === e && t(45, this.__key), e);
      };
      _proto10.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : Li(t);
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
          var _o44 = e[_r54];
          ((t += _o44.getTextContent()),
            zo(_o44) && _r54 !== n - 1 && !_o44.isInline() && (t += N));
        }
        return t;
      };
      _proto10.getTextContentSize = function getTextContentSize() {
        var t = 0;
        var e = this.getChildren(),
          n = e.length;
        for (var _r55 = 0; _r55 < n; _r55++) {
          var _o45 = e[_r55];
          ((t += _o45.getTextContentSize()),
            zo(_o45) && _r55 !== n - 1 && !_o45.isInline() && (t += 2));
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
          var _e116 = w[t];
          return 0 !== (this.getFormat() & _e116);
        }
        return !1;
      };
      _proto10.hasTextFormat = function hasTextFormat(t) {
        var e = M[t];
        return 0 !== (this.getTextFormat() & e);
      };
      _proto10.getFormatFlags = function getFormatFlags(t, e) {
        return wi(this.getLatest().__textFormat, t, e);
      };
      _proto10.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto10.select = function select(t, e) {
        So();
        var n = Zr();
        var r = t,
          o = e;
        var i = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t170 = this.getFirstChild();
            if (Or(_t170) || zo(_t170)) return _t170.select(0, 0);
          } else if (
            !((void 0 !== t && t !== i) || (void 0 !== e && e !== i))
          ) {
            var _t171 = this.getLastChild();
            if (Or(_t171) || zo(_t171)) return _t171.select();
          }
        (void 0 === r && (r = i), void 0 === o && (o = i));
        var s = this.__key;
        return Rr(n)
          ? (n.anchor.set(s, r, "element"),
            n.focus.set(s, o, "element"),
            (n.dirty = !0),
            n)
          : Vr(s, r, s, o, "element", "element");
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
          var _len4 = arguments.length, t = new Array(_len4), _key4 = 0;
          _key4 < _len4;
          _key4++
        ) {
          t[_key4] = arguments[_key4];
        }
        return this.splice(this.getChildrenSize(), 0, t);
      };
      _proto10.setDirection = function setDirection(t) {
        var e = this.getWritable();
        return ((e.__dir = t), e);
      };
      _proto10.setFormat = function setFormat(t) {
        return ((this.getWritable().__format = ("" !== t && w[t]) || 0), this);
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
        qn(this) && t(324, this.__key, this.__type);
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
            var _t172 = this.getChildAtIndex(e);
            null !== _t172 && (u = _t172.getPreviousSibling());
          }
        if (n > 0) {
          var _e117 = null === u ? this.getFirstChild() : u.getNextSibling();
          for (var _r56 = 0; _r56 < n; _r56++) {
            null === _e117 && t(100);
            var _n83 = _e117.getNextSibling(),
              _r57 = _e117.__key;
            (Ii(_e117.getWritable()), c.push(_r57), (_e117 = _n83));
          }
        }
        var d = u;
        for (var _e118 of r) {
          null !== d && _e118.is(d) && (u = d = d.getPreviousSibling());
          var _n84 = _e118.getWritable();
          (_n84.__parent === s && f--, Ii(_n84));
          var _r58 = _e118.__key;
          if (null === d) ((i.__first = _r58), (_n84.__prev = null));
          else {
            var _t173 = d.getWritable();
            ((_t173.__next = _r58), (_n84.__prev = _t173.__key));
          }
          (_e118.__key === s && t(76),
            (_n84.__parent = s),
            l.push(_r58),
            (d = _e118));
        }
        if (e + n === o) {
          if (null !== d) {
            ((d.getWritable().__next = null), (i.__last = d.__key));
          }
        } else if (null !== a) {
          var _t174 = a.getWritable();
          if (null !== d) {
            var _e119 = d.getWritable();
            ((_t174.__prev = d.__key), (_e119.__next = a.__key));
          } else _t174.__prev = null;
        }
        if (((i.__size = f), c.length)) {
          var _t175 = Zr();
          if (Rr(_t175)) {
            var _e120 = new Set(c),
              _n85 = new Set(l),
              _r59 = _t175.anchor,
              _o46 = _t175.focus;
            ($o(_r59, _e120, _n85) && ro(_r59, _r59.getNode(), this, u, a),
              $o(_o46, _e120, _n85) && ro(_o46, _o46.getNode(), this, u, a),
              0 !== f || this.canBeEmpty() || Ss(this) || this.remove());
          }
        }
        return i;
      };
      _proto10.getDOMSlot = function getDOMSlot(t) {
        return new _B(t);
      };
      _proto10.exportDOM = function exportDOM(t) {
        var _Qn2$prototype$export = _Qn2.prototype.exportDOM.call(this, t),
          e = _Qn2$prototype$export.element;
        if (As(e)) {
          var _t176 = this.getIndent();
          _t176 > 0 &&
            ((e.style.paddingInlineStart = 40 * _t176 + "px"),
            e.setAttribute("data-lexical-indent", String(_t176)));
          var _n86 = this.getDirection();
          _n86 && (e.dir = _n86);
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
            _Qn2.prototype.exportJSON.call(this),
          ),
          e = this.getTextFormat(),
          n = this.getTextStyle();
        return (
          (0 === e && "" === n) ||
            Ss(this) ||
            this.getChildren().some(Or) ||
            (0 !== e && (t.textFormat = e), "" !== n && (t.textStyle = n)),
          t
        );
      };
      _proto10.updateFromJSON = function updateFromJSON(t) {
        return _Qn2.prototype.updateFromJSON
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
        var n = zs(this, t, e);
        var r = n.getFirstChild();
        for (
          var _t177 = this.getFirstChild();
          _t177;
          _t177 = _t177.getNextSibling()
        ) {
          var _o47 = e.getElementByKey(_t177.getKey());
          null !== _o47 &&
            (null == r
              ? (n.insertChild(_o47), (r = _o47))
              : r !== _o47 && n.replaceChild(_o47, r),
            (r = r.nextSibling));
        }
      };
      return Bo;
    })(_Qn5);
    function zo(t) {
      return t instanceof _Bo4;
    }
    function $o(t, e, n) {
      var r = t.getNode();
      for (; r; ) {
        var _t178 = r.__key;
        if (e.has(_t178) && !n.has(_t178)) return !0;
        r = r.getParent();
      }
      return !1;
    }
    var _Wo = (function (_Qn3) {
      function Wo() {
        return _Qn3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Wo, _Qn3);
      var _proto11 = Wo.prototype;
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
      return Wo;
    })(_Qn5);
    function Uo(t) {
      return t instanceof _Wo;
    }
    var _Yo = (function (_Bo) {
      function Yo() {
        var _this4;
        ((_this4 = _Bo.call(this, "root") || this),
          (_this4.__cachedText = null));
        return _this4;
      }
      babelHelpers.inheritsLoose(Yo, _Bo);
      Yo.getType = function getType() {
        return "root";
      };
      Yo.clone = function clone() {
        return new Yo();
      };
      var _proto12 = Yo.prototype;
      _proto12.getTopLevelElementOrThrow =
        function getTopLevelElementOrThrow() {
          t(51);
        };
      _proto12.getTextContent = function getTextContent() {
        var t = this.__cachedText;
        return null === t || (!Co() && 0 !== vo()._dirtyType)
          ? _Bo.prototype.getTextContent.call(this)
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
        for (var _e121 of r) zo(_e121) || Uo(_e121) || t(282);
        return _Bo.prototype.splice.call(this, e, n, r);
      };
      Yo.importJSON = function importJSON(t) {
        return Yi().updateFromJSON(t);
      };
      _proto12.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return Yo;
    })(_Bo4);
    function jo(t) {
      return t instanceof _Yo;
    }
    function Ho(t) {
      return new _Vo(j(t._nodeMap));
    }
    function Jo() {
      return new _Vo(new Map([["root", new _Yo()]]));
    }
    function Go(e) {
      var n = e.exportJSON(),
        r = e.constructor;
      if ((n.type !== r.getType() && t(130, r.name), zo(e))) {
        var _o48 = n.children;
        Array.isArray(_o48) || t(59, r.name);
        var _i33 = e.getChildren();
        for (var _t179 = 0; _t179 < _i33.length; _t179++) {
          var _e122 = Go(_i33[_t179]);
          _o48.push(_e122);
        }
      }
      return n;
    }
    var _Vo = (function () {
      function Vo(t, e) {
        ((this._nodeMap = t),
          (this._selection = e || null),
          (this._flushSync = !1),
          (this._readOnly = !1));
      }
      var _proto13 = Vo.prototype;
      _proto13.isEmpty = function isEmpty() {
        return 1 === this._nodeMap.size && null === this._selection;
      };
      _proto13.read = function read(t, e) {
        return wo((e && e.editor) || null, this, t);
      };
      _proto13.clone = function clone(t) {
        var e = new Vo(this._nodeMap, void 0 === t ? this._selection : t);
        return ((e._readOnly = !0), e);
      };
      _proto13.toJSON = function toJSON() {
        return wo(null, this, function () {
          return { root: Go(Yi()) };
        });
      };
      return Vo;
    })();
    var _qo = (function (_Bo2) {
      function qo() {
        return _Bo2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(qo, _Bo2);
      qo.getType = function getType() {
        return "artificial";
      };
      var _proto14 = qo.prototype;
      _proto14.createDOM = function createDOM(t) {
        return document.createElement("div");
      };
      return qo;
    })(_Bo4);
    var _Xo = (function (_Qn4) {
      function Xo(t) {
        return _Qn4.call(this, t) || this;
      }
      babelHelpers.inheritsLoose(Xo, _Qn4);
      Xo.getType = function getType() {
        return "linebreak";
      };
      Xo.clone = function clone(t) {
        return new Xo(t.__key);
      };
      var _proto15 = Xo.prototype;
      _proto15.getTextContent = function getTextContent() {
        return "\n";
      };
      _proto15.createDOM = function createDOM() {
        return document.createElement("br");
      };
      _proto15.updateDOM = function updateDOM() {
        return !1;
      };
      _proto15.isInline = function isInline() {
        return !0;
      };
      Xo.importDOM = function importDOM() {
        return {
          br: function br(t) {
            return ei(t) || ni(t) ? null : { conversion: Qo, priority: 0 };
          },
        };
      };
      Xo.importJSON = function importJSON(t) {
        return Zo().updateFromJSON(t);
      };
      return Xo;
    })(_Qn5);
    function Qo(t) {
      return { node: Zo() };
    }
    function Zo() {
      return Ns(new _Xo());
    }
    function ti(t) {
      return t instanceof _Xo;
    }
    function ei(t) {
      var e = t.parentElement;
      if (null !== e && Rs(e)) {
        var _n87 = e.firstChild;
        if (_n87 === t || (_n87.nextSibling === t && ri(_n87))) {
          var _n88 = e.lastChild;
          if (_n88 === t || (_n88.previousSibling === t && ri(_n88))) return !0;
        }
      }
      return !1;
    }
    function ni(t) {
      var e = t.parentElement;
      if (null !== e && Rs(e)) {
        var _n89 = e.firstChild;
        if (_n89 === t || (_n89.nextSibling === t && ri(_n89))) return !1;
        var _r60 = e.lastChild;
        if (_r60 === t || (_r60.previousSibling === t && ri(_r60))) return !0;
      }
      return !1;
    }
    function ri(t) {
      return bi(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    var _oi = (function (_Bo3) {
      function oi() {
        return _Bo3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(oi, _Bo3);
      oi.getType = function getType() {
        return "paragraph";
      };
      oi.clone = function clone(t) {
        return new oi(t.__key);
      };
      var _proto16 = oi.prototype;
      _proto16.createDOM = function createDOM(t) {
        var e = document.createElement("p"),
          n = ss(t.theme, "paragraph");
        if (void 0 !== n) {
          var _e$classList2;
          (_e$classList2 = e.classList).add.apply(_e$classList2, n);
        }
        return e;
      };
      _proto16.updateDOM = function updateDOM(t, e, n) {
        return !1;
      };
      oi.importDOM = function importDOM() {
        return {
          p: function p(t) {
            return { conversion: ii, priority: 0 };
          },
        };
      };
      _proto16.exportDOM = function exportDOM(t) {
        var _Bo3$prototype$export = _Bo3.prototype.exportDOM.call(this, t),
          e = _Bo3$prototype$export.element;
        if (As(e)) {
          this.isEmpty() && e.append(document.createElement("br"));
          var _t180 = this.getFormatType();
          _t180 && (e.style.textAlign = _t180);
        }
        return { element: e };
      };
      oi.importJSON = function importJSON(t) {
        return si().updateFromJSON(t);
      };
      _proto16.exportJSON = function exportJSON() {
        var t = _Bo3.prototype.exportJSON.call(this);
        if (void 0 === t.textFormat || void 0 === t.textStyle) {
          var _e123 = this.getChildren().find(Or);
          _e123
            ? ((t.textFormat = _e123.getFormat()),
              (t.textStyle = _e123.getStyle()))
            : ((t.textFormat = this.getTextFormat()),
              (t.textStyle = this.getTextStyle()));
        }
        return t;
      };
      _proto16.insertNewAfter = function insertNewAfter(t, e) {
        var n = si();
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
      _proto16.collapseAtStart = function collapseAtStart() {
        var t = this.getChildren();
        if (
          0 === t.length ||
          (Or(t[0]) && "" === t[0].getTextContent().trim())
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return oi;
    })(_Bo4);
    function ii(t) {
      var e = si();
      if ((Vs(e, t), Js(t, e), "" === e.getFormatType())) {
        var _n90 = t.getAttribute("align");
        _n90 && _n90 && _n90 in w && e.setFormat(_n90);
      }
      return (Gs(e, t), { node: e });
    }
    function si() {
      return Ns(new _oi());
    }
    function li(t) {
      return t instanceof _oi;
    }
    var ci = 0;
    function ai(t, e, n, r, o) {
      var i = t._keyToDOMMap;
      (i.clear(),
        (t._editorState = Jo()),
        (t._pendingEditorState = r),
        (t._compositionKey = null),
        (t._dirtyType = 0),
        t._cloneNotNeeded.clear(),
        (t._dirtyLeaves = new Set()),
        t._dirtyElements.clear(),
        (t._normalizedNodes = new Set()),
        (o && o.preserveUpdateQueue) ||
          ((t._updateTags = new Set()),
          (t._updates = []),
          (t._cascadeCount = 0)),
        (t._blockCursorElement = null));
      var s = t._observer;
      (null !== s && (s.disconnect(), (t._observer = null)),
        null !== e &&
          ((e.textContent = ""),
          (function (t, e) {
            var n = "__lexicalKey_" + e._key;
            delete t[n];
          })(e, t)),
        null !== n &&
          ((n.textContent = ""), i.set("root", n), Bi(n, t, "root")));
    }
    function ui(t) {
      var e = new Set(),
        n = new Set();
      var r = t;
      for (; r; ) {
        var _tl3 = tl(r),
          _t181 = _tl3.ownNodeConfig,
          _o49 = r.transform;
        if (!n.has(_o49)) {
          n.add(_o49);
          var _t182 = r.transform();
          _t182 && e.add(_t182);
        }
        if (_t181) {
          var _n91 = _t181.$transform;
          (_n91 && e.add(_n91), (r = _t181["extends"]));
        } else {
          var _t183 = Object.getPrototypeOf(r);
          r =
            _t183.prototype instanceof _Qn5 && _t183 !== _Qn5 ? _t183 : void 0;
        }
      }
      return e;
    }
    var fi = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, r) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = xi(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, r, o) {
        return zo(t) && t.extractWithChild(e, n, r);
      },
      $getDOMSlot: function $getDOMSlot(t, e, n) {
        return t.getDOMSlot(e);
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return zo(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, r) {
        return t.updateDOM(e, n, r._config);
      },
    };
    function di(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function hi(t, e, n) {
      return (t.set(e, n), di.bind(null, t, e));
    }
    var _gi = (function () {
      function gi(t, e, n, r, o, i, s, l) {
        ((this._createEditorArgs = l),
          (this._parentEditor = e),
          (this._rootElement = null),
          (this._editorState = t),
          (this._pendingEditorState = null),
          (this._compositionKey = null),
          (this._deferred = []),
          (this._keyToDOMMap = new _H()),
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
          (this._key = Vi()),
          (this._onError = o),
          (this._htmlConversions = i),
          (this._editable = s),
          (this._headless = null !== e && e._headless),
          (this._window = null),
          (this._blockCursorElement = null));
      }
      var _proto17 = gi.prototype;
      _proto17.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto17.registerUpdateListener = function registerUpdateListener(t) {
        return hi(this._listeners.update, t);
      };
      _proto17.registerEditableListener = function registerEditableListener(t) {
        return hi(this._listeners.editable, t);
      };
      _proto17.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return hi(this._listeners.decorator, t);
      };
      _proto17.registerTextContentListener =
        function registerTextContentListener(t) {
          return hi(this._listeners.textcontent, t);
        };
      _proto17.registerRootListener = function registerRootListener(t) {
        var _this13 = this;
        var e = this._listeners.root;
        return Ql(hi(e, t, t(this._rootElement, null) || void 0), function () {
          return (function (t, e, n) {
            var r = t.get(e);
            (r && r(), t.set(e, e.apply(void 0, n) || void 0));
          })(e, t, [null, _this13._rootElement]);
        });
      };
      _proto17.registerCommand = function registerCommand(e, n, r) {
        void 0 === r && t(35);
        var o = this._commands;
        o.has(e) ||
          o.set(e, [new _U(), new _U(), new _U(), new _U(), new _U()]);
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
      _proto17.registerMutationListener = function registerMutationListener(
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
      _proto17.getRegisteredNode = function getRegisteredNode(e) {
        var n = this._nodes.get(e.getType());
        return (void 0 === n && t(37, e.name), n);
      };
      _proto17.resolveRegisteredNodeAfterReplacements =
        function resolveRegisteredNodeAfterReplacements(t) {
          for (; t.replaceWithKlass; )
            t = this.getRegisteredNode(t.replaceWithKlass);
          return t;
        };
      _proto17.initializeMutationListener = function initializeMutationListener(
        t,
        e,
      ) {
        var n = this._editorState,
          r = js(n).get(e.getType());
        if (!r) return;
        var o = new Map();
        for (var _t184 of r.keys()) o.set(_t184, "created");
        o.size > 0 &&
          t(o, {
            dirtyLeaves: new Set(),
            prevEditorState: n,
            updateTags: new Set(["registerMutationListener"]),
          });
      };
      _proto17.registerNodeTransformToKlass =
        function registerNodeTransformToKlass(t, e) {
          var n = this.getRegisteredNode(t);
          return (n.transforms.add(e), n);
        };
      _proto17.registerNodeTransform = function registerNodeTransform(t, e) {
        var n = this.registerNodeTransformToKlass(t, e),
          r = [n],
          o = n.replaceWithKlass;
        if (null != o) {
          var _t185 = this.registerNodeTransformToKlass(o, e);
          r.push(_t185);
        }
        return (
          (function (t, e) {
            var n = js(t.getEditorState()),
              r = [];
            for (var _t186 of e) {
              var _e124 = n.get(_t186);
              _e124 && r.push(_e124);
            }
            if (0 === r.length) return;
            t.update(
              function () {
                for (var _t187 of r)
                  for (var _e125 of _t187.keys()) {
                    var _t188 = Li(_e125);
                    _t188 && _t188.markDirty();
                  }
              },
              null === t._pendingEditorState ? { tag: Zn } : void 0,
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
      _proto17.hasNode = function hasNode(t) {
        return this._nodes.has(t.getType());
      };
      _proto17.hasNodes = function hasNodes(t) {
        return t.every(this.hasNode.bind(this));
      };
      _proto17.dispatchCommand = function dispatchCommand(t, e) {
        return fs(this, t, e);
      };
      _proto17.getDecorators = function getDecorators() {
        return this._decorators;
      };
      _proto17.getRootElement = function getRootElement() {
        return this._rootElement;
      };
      _proto17.getKey = function getKey() {
        return this._key;
      };
      _proto17.setRootElement = function setRootElement(t) {
        var e = this._rootElement;
        if (t !== e) {
          var _e$classList3;
          var _n92 = ss(this._config.theme, "root"),
            _r61 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            ai(this, e, t, _r61, { preserveUpdateQueue: !0 }),
            null !== e &&
              (this._config.disableEvents || Jn(e),
              null != _n92 &&
                (_e$classList3 = e.classList).remove.apply(
                  _e$classList3,
                  _n92,
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e126 = ms(t),
              _r62 = t.style;
            ((_r62.userSelect = "text"),
              (_r62.whiteSpace = "pre-wrap"),
              (_r62.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e126),
              (this._dirtyType = 2),
              rt(this),
              this._updateTags.add(Zn),
              Do(this),
              this._config.disableEvents ||
                (function (t, e, _yn$get) {
                  var n = t.ownerDocument;
                  pn.set(t, n);
                  var r = (_yn$get = yn.get(n)) != null ? _yn$get : 0;
                  (r < 1 && n.addEventListener("selectionchange", Un),
                    yn.set(n, r + 1),
                    (t.__lexicalEditor = e));
                  var o = $n(t);
                  var _loop2 = function _loop2() {
                    var _an$_n = an[_n93],
                      r = _an$_n[0],
                      i = _an$_n[1],
                      s =
                        "function" == typeof i
                          ? function (t) {
                              jn(t) ||
                                (Yn(t),
                                (e.isEditable() || "click" === r) && i(t, e));
                            }
                          : function (t) {
                              if (jn(t)) return;
                              Yn(t);
                              var n = e.isEditable();
                              switch (r) {
                                case "cut":
                                  return n && fs(e, Qe, t);
                                case "copy":
                                  return fs(e, Xe, t);
                                case "paste":
                                  return n && fs(e, Ne, t);
                                case "dragstart":
                                  return n && fs(e, Ge, t);
                                case "dragover":
                                  return n && fs(e, Ve, t);
                                case "dragend":
                                  return n && fs(e, qe, t);
                                case "focus":
                                  return n && fs(e, on, t);
                                case "blur":
                                  return n && fs(e, sn, t);
                                case "drop":
                                  return n && fs(e, He, t);
                              }
                            };
                    (t.addEventListener(r, s),
                      o.push(function () {
                        t.removeEventListener(r, s);
                      }));
                  };
                  for (var _n93 = 0; _n93 < an.length; _n93++) {
                    _loop2();
                  }
                })(t, this),
              null != _n92 &&
                (_t$classList = t.classList).add.apply(_t$classList, _n92));
          } else ((this._window = null), this._updateTags.add(Zn), Do(this));
          Io("root", this, !1, t, e);
        }
      };
      _proto17.getElementByKey = function getElementByKey(t) {
        return this._keyToDOMMap.get(t) || null;
      };
      _proto17.getEditorState = function getEditorState() {
        return this._editorState;
      };
      _proto17.setEditorState = function setEditorState(e, n) {
        e.isEmpty() && t(38);
        var r = e;
        (r._readOnly &&
          ((r = Ho(e)),
          (r._selection = e._selection ? e._selection.clone() : null)),
          nt(this));
        var o = this._pendingEditorState,
          i = this._updateTags,
          s = void 0 !== n ? n.tag : null;
        (null === o || o.isEmpty() || (null != s && i.add(s), Do(this)),
          (this._pendingEditorState = r),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          null != s && i.add(s),
          this._updating || Do(this));
      };
      _proto17.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var r = Jo(),
            o = go,
            i = po,
            s = _o,
            l = e._dirtyElements,
            c = e._dirtyLeaves,
            a = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Set()),
            (e._dirtyType = 0),
            (go = r),
            (po = !1),
            (_o = e),
            pi(null));
          try {
            var _o50 = e._nodes;
            (Ao(t.root, _o50), n && n(), (r._readOnly = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = c),
              (e._cloneNotNeeded = a),
              (e._dirtyType = u),
              (go = o),
              (po = i),
              (_o = s));
          }
          return r;
        })("string" == typeof t ? JSON.parse(t) : t, this, e);
      };
      _proto17.read = function read(t) {
        return (Do(this), this.getEditorState().read(t, { editor: this }));
      };
      _proto17.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : Lo(t, e, n);
        })(this, t, e);
      };
      _proto17.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          Ko(this, function () {
            var r = Zr(),
              o = Yi();
            (null !== r
              ? r.dirty || ji(r.clone())
              : 0 !== o.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? o.selectStart()
                  : o.selectEnd()),
              _s("focus"),
              ps(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto17.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = bs(this._window);
        null !== e && e.removeAllRanges();
      };
      _proto17.isEditable = function isEditable() {
        return this._editable;
      };
      _proto17.setEditable = function setEditable(t) {
        this._editable !== t &&
          ((this._editable = t), Io("editable", this, !0, t));
      };
      _proto17.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON() };
      };
      return gi;
    })();
    _gi.version = W;
    var _i = null;
    function pi(t) {
      _i = t;
    }
    var yi = 1;
    function mi(e, n) {
      var r = xi(e, n);
      return (void 0 === r && t(30, n), r);
    }
    function xi(t, e) {
      return t._nodes.get(e);
    }
    var Ci =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function Si(t) {
      var e = document.activeElement;
      if (!As(e)) return !1;
      var n = e.nodeName;
      return (
        Uo($i(t)) &&
        ("INPUT" === n ||
          "TEXTAREA" === n ||
          ("true" === e.contentEditable && null == ki(e)))
      );
    }
    function Ti(t, e, n) {
      var r = t.getRootElement();
      try {
        return (
          null !== r &&
          r.contains(e) &&
          r.contains(n) &&
          null !== e &&
          !Si(e) &&
          vi(e) === t
        );
      } catch (t) {
        return !1;
      }
    }
    function Ni(t) {
      return t instanceof _gi;
    }
    function vi(t) {
      var e = t;
      for (; null != e; ) {
        var _t189 = ki(e);
        if (Ni(_t189)) return _t189;
        e = hs(e);
      }
      return null;
    }
    function ki(t) {
      return t ? t.__lexicalEditor : null;
    }
    function Oi(t) {
      return Ar(t) || t.isToken();
    }
    function Ei(t) {
      return Oi(t) || t.isSegmented();
    }
    function bi(t) {
      return ws(t) && 3 === t.nodeType;
    }
    function Mi(t) {
      return ws(t) && 9 === t.nodeType;
    }
    function Ai(t) {
      var e = t;
      for (; null != e; ) {
        if (bi(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function wi(t, e, n) {
      var r = M[e];
      if (null !== n && (t & r) === (n & r)) return t;
      var o = t ^ r;
      return (
        "subscript" === e
          ? (o &= ~M.superscript)
          : "superscript" === e
            ? (o &= ~M.subscript)
            : "lowercase" === e
              ? ((o &= ~M.uppercase), (o &= ~M.capitalize))
              : "uppercase" === e
                ? ((o &= ~M.lowercase), (o &= ~M.capitalize))
                : "capitalize" === e &&
                  ((o &= ~M.lowercase), (o &= ~M.uppercase)),
        o
      );
    }
    function Di(t, e) {
      var n = (function () {
        var t = _i;
        return ((_i = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (So(), To());
      var r = vo(),
        o = No(),
        i = "" + yi++;
      (o._nodeMap.set(i, t),
        zo(t) ? r._dirtyElements.set(i, !0) : r._dirtyLeaves.add(i),
        r._cloneNotNeeded.add(i),
        0 === r._dirtyType && (r._dirtyType = 1),
        (t.__key = i));
    }
    function Ii(t) {
      var e = t.getParent();
      if (null !== e) {
        var _n94 = t.getWritable(),
          _r63 = e.getWritable(),
          _o51 = t.getPreviousSibling(),
          _i34 = t.getNextSibling(),
          _s19 = null !== _i34 ? _i34.__key : null,
          _l12 = null !== _o51 ? _o51.__key : null,
          _c9 = null !== _o51 ? _o51.getWritable() : null,
          _a10 = null !== _i34 ? _i34.getWritable() : null;
        (null === _o51 && (_r63.__first = _s19),
          null === _i34 && (_r63.__last = _l12),
          null !== _c9 && (_c9.__next = _s19),
          null !== _a10 && (_a10.__prev = _l12),
          (_n94.__prev = null),
          (_n94.__next = null),
          (_n94.__parent = null),
          _r63.__size--);
      }
    }
    function Pi(e) {
      (To(), qn(e) && t(323, e.__key, e.__type));
      var n = e.getLatest(),
        r = n.__parent,
        o = No(),
        i = vo(),
        s = o._nodeMap,
        l = i._dirtyElements;
      null !== r &&
        (function (t, e, n) {
          var r = t;
          for (; null !== r; ) {
            if (n.has(r)) return;
            var _t190 = e.get(r);
            if (void 0 === _t190) break;
            (n.set(r, !1), (r = _t190.__parent));
          }
        })(r, s, l);
      var c = n.__key;
      (0 === i._dirtyType && (i._dirtyType = 1),
        zo(e) ? l.set(c, !0) : i._dirtyLeaves.add(c));
    }
    function Fi(t) {
      So();
      var e = vo(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t191 = Li(n);
          null !== _t191 && _t191.getWritable();
        }
        if (null !== t) {
          var _e127 = Li(t);
          null !== _e127 && _e127.getWritable();
        }
      }
    }
    function Ri() {
      if (Co()) return null;
      return vo()._compositionKey;
    }
    function Li(t, e) {
      var n = (e || No())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function Ki(t, e) {
      var n = zi(t, vo());
      return void 0 !== n ? Li(n, e) : null;
    }
    function Bi(t, e, n) {
      t["__lexicalKey_" + e._key] = n;
    }
    function zi(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function $i(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t192 = Ki(n, e);
        if (null !== _t192) return _t192;
        n = hs(n);
      }
      return null;
    }
    function Wi(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function Ui(t) {
      return t.read(function () {
        return Yi().getTextContent();
      });
    }
    function Yi() {
      return No()._nodeMap.get("root");
    }
    function ji(t) {
      So();
      var e = No();
      (null !== t && ((t.dirty = !0), t.setCachedNodes(null)),
        (e._selection = t));
    }
    function Hi(t) {
      var e = (function (t, e) {
        var n = t;
        for (; null != n; ) {
          var _t193 = zi(n, e);
          if (void 0 !== _t193) return _t193;
          n = hs(n);
        }
        return null;
      })(t, vo());
      return null === e ? null : Li(e);
    }
    function Ji(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function Gi(t) {
      var e = [];
      for (var _n95 = t; null !== _n95; _n95 = _n95._parentEditor) e.push(_n95);
      return e;
    }
    function Vi() {
      return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substring(0, 5);
    }
    function qi(t) {
      return bi(t) ? t.nodeValue : null;
    }
    function Xi(t, e, n) {
      var r = bs(xs(e));
      if (null === r) return;
      var o = r.anchorNode;
      var i = r.anchorOffset,
        s = r.focusOffset;
      if (null !== o) {
        var _e128 = qi(o);
        var _r64 = $i(o);
        if (null !== _e128 && Or(_r64)) {
          if ((_e128 === T || _e128 === v) && n) {
            var _t194 = n.length;
            ((_e128 = n), (i = _t194), (s = _t194));
          }
          null !== _e128 && Qi(_r64, _e128, i, s, t);
        }
      }
    }
    function Qi(t, e, n, r, o) {
      var i = t;
      if (i.isAttached() && (o || !i.isDirty())) {
        var _l13 = i.isComposing();
        var _a11 = e;
        if (
          (_l13 || o) &&
          (e.endsWith(T) && (_a11 = e.slice(0, -T.length)), o)
        ) {
          var _t195 = v;
          var _e129;
          for (; -1 !== (_e129 = _a11.indexOf(_t195)); )
            ((_a11 = _a11.slice(0, _e129) + _a11.slice(_e129 + _t195.length)),
              null !== n &&
                n > _e129 &&
                (n = Math.max(_e129, n - _t195.length)),
              null !== r &&
                r > _e129 &&
                (r = Math.max(_e129, r - _t195.length)));
        }
        var _u9 = i.getTextContent();
        if (o || _a11 !== _u9) {
          if ("" === _a11) {
            if ((Fi(null), c || s || f)) i.remove();
            else {
              var _t196 = vo();
              setTimeout(function () {
                _t196.update(function () {
                  i.isAttached() && i.remove();
                });
              }, 20);
            }
            return;
          }
          var _e130 = i.getParent(),
            _o52 = to(),
            _u0 = i.getTextContentSize(),
            _d7 = Ri(),
            _h6 = i.getKey();
          if (
            i.isToken() ||
            (null !== _d7 && _h6 === _d7 && !_l13) ||
            (Rr(_o52) &&
              ((null !== _e130 &&
                !_e130.canInsertTextBefore() &&
                0 === _o52.anchor.offset) ||
                (_o52.anchor.key === t.__key &&
                  0 === _o52.anchor.offset &&
                  !i.canInsertTextBefore() &&
                  !_l13) ||
                (_o52.focus.key === t.__key &&
                  _o52.focus.offset === _u0 &&
                  !i.canInsertTextAfter() &&
                  !_l13)))
          )
            return void i.markDirty();
          var _g5 = Zr();
          if (!Rr(_g5) || null === n || null === r)
            return void Zi(i, _a11, _g5);
          if ((_g5.setTextNodeRange(i, n, i, r), i.isSegmented())) {
            var _t197 = kr(i.getTextContent());
            (i.replace(_t197), (i = _t197));
          }
          Zi(i, _a11, _g5);
        }
      }
    }
    function Zi(t, e, n) {
      if ((t.setTextContent(e), Rr(n))) {
        var _e131 = t.getKey();
        var _r65 = !1;
        for (var _o53 of ["anchor", "focus"]) {
          var _i35 = n[_o53];
          "text" === _i35.type &&
            _i35.key === _e131 &&
            ((_i35.offset = xl(t, _i35.offset, "clamp")), (_r65 = !0));
        }
        _r65 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
      }
    }
    function ts(t, e, n) {
      var r = e[n] || !1;
      return "any" === r || r === t[n];
    }
    function es(t, e) {
      return (
        ts(t, e, "altKey") &&
        ts(t, e, "ctrlKey") &&
        ts(t, e, "shiftKey") &&
        ts(t, e, "metaKey")
      );
    }
    function ns(t, e, n) {
      if (!es(t, n)) return !1;
      if (t.key.toLowerCase() === e.toLowerCase()) return !0;
      if (e.length > 1) return !1;
      if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
      if (t.code.startsWith("Digit") && /^\d$/.test(e))
        return t.code === "Digit" + e;
      var r = "Key" + e.toUpperCase();
      return t.code === r;
    }
    var rs = { ctrlKey: !r, metaKey: r },
      os = { altKey: r, ctrlKey: !r };
    function is(t) {
      return "Backspace" === t.key;
    }
    function ss(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        r = n[e];
      if (void 0 !== r) return r;
      var o = t[e];
      if ("string" == typeof o) {
        var _t198 = Xl(o);
        return ((n[e] = _t198), _t198);
      }
      return o;
    }
    function ls(e, n, r, o, i) {
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
    function cs(t, e, n) {
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
    function as(t, e) {
      var n = t.offset;
      if ("element" === t.type) {
        return cs(t.getNode(), e, n);
      }
      {
        var _r66 = t.getNode();
        if ((e && 0 === n) || (!e && n === _r66.getTextContentSize())) {
          var _t199 = e ? _r66.getPreviousSibling() : _r66.getNextSibling();
          return null === _t199
            ? cs(
                _r66.getParentOrThrow(),
                e,
                _r66.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t199;
        }
      }
      return null;
    }
    function us(t) {
      var e = xs(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function fs(t, e, n) {
      return Po(t, e, n, t);
    }
    function ds(e, n) {
      var r = e._keyToDOMMap.get(n);
      return (void 0 === r && t(75, n), r);
    }
    function hs(t) {
      var e = t.assignedSlot || t.parentElement;
      return Ds(e) ? e.host : e;
    }
    function gs(t) {
      return Mi(t) ? t : As(t) ? t.ownerDocument : null;
    }
    function _s(t) {
      So();
      vo()._updateTags.add(t);
    }
    function ps(t) {
      So();
      vo()._deferred.push(t);
    }
    function ys(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function ms(t) {
      var e = gs(t);
      return e ? e.defaultView : null;
    }
    function xs(e) {
      var n = e._window;
      return (null === n && t(78), n);
    }
    function Cs(t) {
      var e = t.getParentOrThrow();
      for (; null !== e; ) {
        if (Ss(e)) return e;
        e = e.getParentOrThrow();
      }
      return e;
    }
    function Ss(t) {
      return jo(t) || (zo(t) && t.isShadowRoot());
    }
    function Ts(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t);
      return (
        Di(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function Ns(e) {
      var n = vo(),
        r = e.getType(),
        o = xi(n, r);
      void 0 === o && t(200, e.constructor.name, r);
      var i = o.replace,
        s = o.replaceWithKlass;
      if (null !== i) {
        var _n96 = i(e),
          _o54 = _n96.constructor;
        return (
          null !== s
            ? _n96 instanceof s ||
              t(
                201,
                s.name,
                s.getType(),
                _o54.name,
                _o54.getType(),
                e.constructor.name,
                r,
              )
            : (_n96 instanceof e.constructor && _o54 !== e.constructor) ||
              t(202, _o54.name, _o54.getType(), e.constructor.name, r),
          _n96.__key === e.__key &&
            t(203, e.constructor.name, r, _o54.name, _o54.getType()),
          _n96
        );
      }
      return e;
    }
    function vs(e, n) {
      !jo(e.getParent()) || zo(n) || Uo(n) || t(99);
    }
    function ks(e) {
      var n = Li(e);
      return (null === n && t(63, e), n);
    }
    function Os(t) {
      return (Uo(t) || (zo(t) && !t.canBeEmpty())) && !t.isInline();
    }
    function Es(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var r = t.parentElement;
      null !== r && r.removeChild(t);
    }
    function bs(t) {
      return e ? (t || window).getSelection() : null;
    }
    function Ms(t) {
      var e = ms(t);
      return e ? e.getSelection() : null;
    }
    function As(t) {
      return ws(t) && 1 === t.nodeType;
    }
    function ws(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function Ds(t) {
      return ws(t) && 11 === t.nodeType;
    }
    var Is =
      /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
    function Ps(t) {
      return (
        !(!As(t) || !t.style.display.startsWith("inline")) ||
        Is.test(t.nodeName)
      );
    }
    var Fs =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function Rs(t) {
      return (
        (!As(t) || !t.style.display.startsWith("inline")) && Fs.test(t.nodeName)
      );
    }
    function Ls(t) {
      if (Uo(t) && !t.isInline()) return !0;
      if (!zo(t) || Ss(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || ti(e) || Or(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function Ks() {
      return vo();
    }
    function Bs(t) {
      if (t === void 0) {
        t = Ks();
      }
      return t._config.dom || fi;
    }
    function zs(e, n, r) {
      if (r === void 0) {
        r = Ks();
      }
      var o = Bs(r).$getDOMSlot(e, n, r);
      return (zo(e) && ($s(o) || t(344, e.getKey(), e.getType())), o);
    }
    function $s(t) {
      return t instanceof _B;
    }
    function Ws(t, e, n) {
      if (n === void 0) {
        n = Ks();
      }
      return Ai(zs(t, e, n).element);
    }
    var Us = new WeakMap(),
      Ys = new Map();
    function js(e) {
      if (!e._readOnly && e.isEmpty()) return Ys;
      e._readOnly || t(192);
      var n = Us.get(e);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref27 of t._nodeMap) {
              var _n97 = _ref27[0];
              var _r67 = _ref27[1];
              {
                var _t200 = _r67.__type;
                var _o55 = e.get(_t200);
                (_o55 || ((_o55 = new Map()), e.set(_t200, _o55)),
                  _o55.set(_n97, _r67));
              }
            }
            return e;
          })(e)),
          Us.set(e, n)),
        n
      );
    }
    function Hs(t) {
      var e = t.constructor.clone(t);
      return (e.afterCloneFrom(t), e);
    }
    function Js(t, e) {
      var n = t.getAttribute("data-lexical-indent");
      if (null !== n) {
        var _t201 = parseInt(n, 10);
        if (Number.isFinite(_t201) && _t201 >= 0)
          return void e.setIndent(_t201);
      }
      var r = parseInt(t.style.paddingInlineStart, 10) || 0,
        o = Math.round(r / 40);
      e.setIndent(o);
    }
    function Gs(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function Vs(t, e) {
      var n = e.style.textAlign;
      return n && n in w ? t.setFormat(n) : t;
    }
    function qs(t, e) {
      ((t.__lexicalUnmanaged = !0),
        e &&
          void 0 !== e.captureSelection &&
          (t.__lexicalCapturedSelection = e.captureSelection));
    }
    function Xs(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function Qs(t, e) {
      var n = t;
      for (; null != n; ) {
        if (!0 === n.__lexicalCapturedSelection) return !0;
        if (void 0 !== zi(n, e)) return !1;
        n = hs(n);
      }
      return !1;
    }
    function Zs(t, e) {
      return (
        (function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        })(t, e) && t[e] !== _Qn5[e]
      );
    }
    function tl(e) {
      var n = F in e.prototype ? e.prototype[F]() : void 0,
        r = (function (e) {
          if (!(e === _Qn5 || e.prototype instanceof _Qn5)) {
            var _n98 = "<unknown>",
              _r68 = "<unknown>";
            try {
              _n98 = e.getType();
            } catch (t) {}
            try {
              _gi.version && (_r68 = JSON.parse(_gi.version));
            } catch (t) {}
            t(290, e.name, _n98, _r68);
          }
          return e === _Wo || e === _Bo4 || e === _Qn5;
        })(e),
        o = !r && Zs(e, "getType") ? e.getType() : void 0;
      var i,
        s = o;
      if (n)
        if (o) i = n[o];
        else
          for (var _ref29 of Object.entries(n)) {
            var _t202 = _ref29[0];
            var _e132 = _ref29[1];
            ((s = _t202), (i = _e132));
          }
      if (
        !r &&
        s &&
        (Zs(e, "getType") ||
          (e.getType = function () {
            return s;
          }),
        Zs(e, "clone") ||
          (e.clone = function (t) {
            return (pi(t), new e());
          }),
        Zs(e, "importJSON") ||
          (e.importJSON =
            (i && i.$importJSON) ||
            function (t) {
              return new e().updateFromJSON(t);
            }),
        !Zs(e, "importDOM") && i)
      ) {
        var _i36 = i,
          _t203 = _i36.importDOM;
        _t203 &&
          (e.importDOM = function () {
            return _t203;
          });
      }
      return { ownNodeConfig: i, ownNodeType: s };
    }
    var el = function el(t, e) {
      var n = t;
      for (; null != n && !jo(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function nl(e, n) {
      var r = [];
      var o = e.__first;
      for (; null !== o; ) {
        var _e133 = null === n ? Li(o) : n.get(o);
        (null == _e133 && t(174), r.push(o), (o = _e133.__next));
      }
      return r;
    }
    var rl = { next: "previous", previous: "next" };
    var _ol4 = (function () {
      function ol(t) {
        this.origin = t;
      }
      var _proto18 = ol.prototype;
      _proto18[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return Ml({
            hasNext: dl,
            initial: this.getAdjacentCaret(),
            map: function map(t) {
              return t;
            },
            step: function step(t) {
              return t.getAdjacentCaret();
            },
          });
        };
      _proto18.getAdjacentCaret = function getAdjacentCaret() {
        return yl(this.getNodeAtCaret(), this.direction);
      };
      _proto18.getSiblingCaret = function getSiblingCaret() {
        return yl(this.origin, this.direction);
      };
      _proto18.remove = function remove() {
        var t = this.getNodeAtCaret();
        return (t && t.remove(), this);
      };
      _proto18.replaceOrInsert = function replaceOrInsert(t, e) {
        var n = this.getNodeAtCaret();
        return (
          t.is(this.origin) ||
            t.is(n) ||
            (null === n ? this.insert(t) : n.replace(t, e)),
          this
        );
      };
      _proto18.splice = function splice(e, n, r) {
        if (r === void 0) {
          r = "next";
        }
        var o = r === this.direction ? n : Array.from(n).reverse();
        var i = this;
        var s = this.getParentAtCaret(),
          l = new Map();
        for (
          var _t204 = i.getAdjacentCaret();
          null !== _t204 && l.size < e;
          _t204 = _t204.getAdjacentCaret()
        ) {
          var _e134 = _t204.origin.getWritable();
          l.set(_e134.getKey(), _e134);
        }
        for (var _e135 of o) {
          if (l.size > 0) {
            var _n99 = i.getNodeAtCaret();
            if (_n99) {
              if (
                (l["delete"](_n99.getKey()),
                l["delete"](_e135.getKey()),
                _n99.is(_e135) || i.origin.is(_e135))
              );
              else {
                var _t205 = _e135.getParent();
                (_t205 && _t205.is(s) && _e135.remove(), _n99.replace(_e135));
              }
            } else null === _n99 && t(263, Array.from(l).join(" "));
          } else i.insert(_e135);
          i = yl(_e135, this.direction);
        }
        for (var _t206 of l.values()) _t206.remove();
        return this;
      };
      return ol;
    })();
    var _il3 = (function (_ol) {
      function il() {
        var _this5;
        for (
          var _len5 = arguments.length, args = new Array(_len5), _key5 = 0;
          _key5 < _len5;
          _key5++
        ) {
          args[_key5] = arguments[_key5];
        }
        return (
          ((_this5 = _ol.call.apply(_ol, [this].concat(args)) || this),
          (_this5.type = "child"),
          babelHelpers.assertThisInitialized(_this5)) ||
          babelHelpers.assertThisInitialized(_this5)
        );
      }
      babelHelpers.inheritsLoose(il, _ol);
      var _proto19 = il.prototype;
      _proto19.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Sl(t, this.direction);
      };
      _proto19.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return yl(cl(this.getParentAtCaret(), t), this.direction);
      };
      _proto19.getFlipped = function getFlipped() {
        var t = ll(this.direction);
        return yl(this.getNodeAtCaret(), t) || Sl(this.origin, t);
      };
      _proto19.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto19.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto19.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof il &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto19.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return il;
    })(_ol4);
    var sl = { root: jo, shadowRoot: Ss };
    function ll(t) {
      return rl[t];
    }
    function cl(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return sl[e](t) ? null : t;
    }
    var _al3 = (function (_ol2) {
      function al() {
        var _this6;
        for (
          var _len6 = arguments.length, args = new Array(_len6), _key6 = 0;
          _key6 < _len6;
          _key6++
        ) {
          args[_key6] = arguments[_key6];
        }
        return (
          ((_this6 = _ol2.call.apply(_ol2, [this].concat(args)) || this),
          (_this6.type = "sibling"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(al, _ol2);
      var _proto20 = al.prototype;
      _proto20.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : yl(t, this.direction);
      };
      _proto20.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto20.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto20.getChildCaret = function getChildCaret() {
        return zo(this.origin) ? Sl(this.origin, this.direction) : null;
      };
      _proto20.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return yl(cl(this.getParentAtCaret(), t), this.direction);
      };
      _proto20.getFlipped = function getFlipped() {
        var t = ll(this.direction);
        return (
          yl(this.getNodeAtCaret(), t) || Sl(this.origin.getParentOrThrow(), t)
        );
      };
      _proto20.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof al &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto20.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof al || t instanceof _ul3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return al;
    })(_ol4);
    var _ul3 = (function (_ol3) {
      function ul(t, e) {
        var _this7;
        ((_this7 = _ol3.call(this, t) || this),
          (_this7.type = "text"),
          (_this7.offset = e));
        return _this7;
      }
      babelHelpers.inheritsLoose(ul, _ol3);
      var _proto21 = ul.prototype;
      _proto21.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : ml(t, this.direction, this.offset);
      };
      _proto21.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto21.getChildCaret = function getChildCaret() {
        return null;
      };
      _proto21.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return yl(cl(this.getParentAtCaret(), t), this.direction);
      };
      _proto21.getFlipped = function getFlipped() {
        return ml(this.origin, ll(this.direction), this.offset);
      };
      _proto21.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof ul &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto21.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _al3 || t instanceof ul) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto21.getSiblingCaret = function getSiblingCaret() {
        return yl(this.origin, this.direction);
      };
      return ul;
    })(_ol4);
    function fl(t) {
      return t instanceof _ul3;
    }
    function dl(t) {
      return t instanceof _al3;
    }
    function hl(t) {
      return t instanceof _il3;
    }
    var gl = {
        next: (function (_ul) {
          function _class() {
            var _this8;
            for (
              var _len7 = arguments.length, args = new Array(_len7), _key7 = 0;
              _key7 < _len7;
              _key7++
            ) {
              args[_key7] = arguments[_key7];
            }
            return (
              ((_this8 = _ul.call.apply(_ul, [this].concat(args)) || this),
              (_this8.direction = "next"),
              babelHelpers.assertThisInitialized(_this8)) ||
              babelHelpers.assertThisInitialized(_this8)
            );
          }
          babelHelpers.inheritsLoose(_class, _ul);
          var _proto22 = _class.prototype;
          _proto22.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto22.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_ul3),
        previous: (function (_ul2) {
          function _class3() {
            var _this9;
            for (
              var _len8 = arguments.length, args = new Array(_len8), _key8 = 0;
              _key8 < _len8;
              _key8++
            ) {
              args[_key8] = arguments[_key8];
            }
            return (
              ((_this9 = _ul2.call.apply(_ul2, [this].concat(args)) || this),
              (_this9.direction = "previous"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class3, _ul2);
          var _proto23 = _class3.prototype;
          _proto23.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto23.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_ul3),
      },
      _l = {
        next: (function (_al) {
          function _class5() {
            var _this0;
            for (
              var _len9 = arguments.length, args = new Array(_len9), _key9 = 0;
              _key9 < _len9;
              _key9++
            ) {
              args[_key9] = arguments[_key9];
            }
            return (
              ((_this0 = _al.call.apply(_al, [this].concat(args)) || this),
              (_this0.direction = "next"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class5, _al);
          var _proto24 = _class5.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_al3),
        previous: (function (_al2) {
          function _class7() {
            var _this1;
            for (
              var _len0 = arguments.length, args = new Array(_len0), _key0 = 0;
              _key0 < _len0;
              _key0++
            ) {
              args[_key0] = arguments[_key0];
            }
            return (
              ((_this1 = _al2.call.apply(_al2, [this].concat(args)) || this),
              (_this1.direction = "previous"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class7, _al2);
          var _proto25 = _class7.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_al3),
      },
      pl = {
        next: (function (_il) {
          function _class9() {
            var _this10;
            for (
              var _len1 = arguments.length, args = new Array(_len1), _key1 = 0;
              _key1 < _len1;
              _key1++
            ) {
              args[_key1] = arguments[_key1];
            }
            return (
              ((_this10 = _il.call.apply(_il, [this].concat(args)) || this),
              (_this10.direction = "next"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class9, _il);
          var _proto26 = _class9.prototype;
          _proto26.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto26.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_il3),
        previous: (function (_il2) {
          function _class1() {
            var _this11;
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
              ((_this11 = _il2.call.apply(_il2, [this].concat(args)) || this),
              (_this11.direction = "previous"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class1, _il2);
          var _proto27 = _class1.prototype;
          _proto27.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getLastChild();
          };
          _proto27.insert = function insert(t) {
            return (
              this.origin.splice(this.origin.getChildrenSize(), 0, [t]),
              this
            );
          };
          return _class1;
        })(_il3),
      };
    function yl(t, e) {
      return t ? new _l[e](t) : null;
    }
    function ml(t, e, n) {
      return t ? new gl[e](t, xl(t, n)) : null;
    }
    function xl(t, e, n) {
      if (n === void 0) {
        n = "error";
      }
      var r = t.getTextContentSize();
      var o = "next" === e ? r : "previous" === e ? 0 : e;
      return (
        (o < 0 || o > r) &&
          ("clamp" !== n &&
            (function (t) {
              var n = new URL("https://lexical.dev/docs/error"),
                r = new URLSearchParams();
              r.append("code", t);
              for (
                var _len11 = arguments.length,
                  e = new Array(_len11 > 1 ? _len11 - 1 : 0),
                  _key11 = 1;
                _key11 < _len11;
                _key11++
              ) {
                e[_key11 - 1] = arguments[_key11];
              }
              for (var _t207 of e) r.append("v", _t207);
              ((n.search = r.toString()),
                console.warn(
                  "Minified Lexical warning #" +
                    t +
                    "; visit " +
                    n.toString() +
                    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
                ));
            })(284, String(e), String(r), t.getKey()),
          (o = o < 0 ? 0 : r)),
        o
      );
    }
    function Cl(t, e) {
      return new _kl(t, e);
    }
    function Sl(t, e) {
      return zo(t) ? new pl[e](t) : null;
    }
    function Tl(t) {
      return (t && t.getChildCaret()) || t;
    }
    function Nl(t) {
      return t && Tl(t.getAdjacentCaret());
    }
    var _vl = (function () {
      function vl(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto28 = vl.prototype;
      _proto28.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new vl(t, e, this.direction);
      };
      _proto28.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto28.getTextSlices = function getTextSlices() {
        var _this14 = this;
        var t = function t(_t208) {
            var e = _this14[_t208].getLatest();
            return fl(e)
              ? (function (t, e) {
                  var n = t.direction,
                    r = t.origin,
                    o = xl(r, "focus" === e ? ll(n) : n);
                  return Cl(t, o - t.offset);
                })(e, _t208)
              : null;
          },
          e = t("anchor"),
          n = t("focus");
        if (e && n) {
          var _t209 = e.caret,
            _r69 = n.caret;
          if (_t209.isSameNodeCaret(_r69))
            return [Cl(_t209, _r69.offset - _t209.offset), null];
        }
        return [e, n];
      };
      _proto28.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = fl(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          r = fl(n),
          o = function o(e) {
            return e.isSameNodeCaret(n) ? null : Nl(e) || e.getParentCaret(t);
          };
        return Ml({
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
      _proto28[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this.iterNodeCarets("root");
        };
      return vl;
    })();
    var _kl = (function () {
      function kl(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto29 = kl.prototype;
      _proto29.getSliceIndices = function getSliceIndices() {
        var t = this.distance,
          e = this.caret.offset,
          n = e + t;
        return n < e ? [n, e] : [e, n];
      };
      _proto29.getTextContent = function getTextContent() {
        var _this$getSliceIndices = this.getSliceIndices(),
          t = _this$getSliceIndices[0],
          e = _this$getSliceIndices[1];
        return this.caret.origin.getTextContent().slice(t, e);
      };
      _proto29.getTextContentSize = function getTextContentSize() {
        return Math.abs(this.distance);
      };
      _proto29.removeTextSlice = function removeTextSlice() {
        var _this$caret = this.caret,
          t = _this$caret.origin,
          e = _this$caret.direction,
          _this$getSliceIndices2 = this.getSliceIndices(),
          n = _this$getSliceIndices2[0],
          r = _this$getSliceIndices2[1],
          o = t.getTextContent();
        return ml(t.setTextContent(o.slice(0, n) + o.slice(r)), e, n);
      };
      return kl;
    })();
    function Ol(t) {
      return bl(t, yl(Yi(), t.direction));
    }
    function El(t) {
      return bl(t, t);
    }
    function bl(e, n) {
      return (
        e.direction !== n.direction && t(265),
        new _vl(e, n, e.direction)
      );
    }
    function Ml(t) {
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
    function Al(e, n) {
      var r = Pl(e.origin, n.origin);
      switch (
        (null === r && t(275, e.origin.getKey(), n.origin.getKey()), r.type)
      ) {
        case "same": {
          var _t210 = "text" === e.type,
            _r70 = "text" === n.type;
          return _t210 && _r70
            ? (function (t, e) {
                return Math.sign(t - e);
              })(e.offset, n.offset)
            : e.type === n.type
              ? 0
              : _t210
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
          return wl(r);
      }
    }
    function wl(t) {
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
    function Dl(t, e) {
      return e.is(t);
    }
    function Il(t) {
      return zo(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function Pl(e, n) {
      if (e.is(n)) return { commonAncestor: e, type: "same" };
      var r = new Map();
      for (
        var _Il = Il(e), _t211 = _Il[0], _n100 = _Il[1];
        _t211;
        _n100 = _t211, _t211 = _t211.getParent()
      )
        r.set(_t211, _n100);
      for (
        var _Il2 = Il(n), _o56 = _Il2[0], _i37 = _Il2[1];
        _o56;
        _i37 = _o56, _o56 = _o56.getParent()
      ) {
        var _s20 = r.get(_o56);
        if (void 0 !== _s20)
          return null === _s20
            ? (Dl(e, _o56) || t(276),
              { commonAncestor: _o56, type: "ancestor" })
            : null === _i37
              ? (Dl(n, _o56) || t(277),
                { commonAncestor: _o56, type: "descendant" })
              : (((zo(_s20) || Dl(e, _s20)) &&
                  (zo(_i37) || Dl(n, _i37)) &&
                  _o56.is(_s20.getParent()) &&
                  _o56.is(_i37.getParent())) ||
                  t(278),
                { a: _s20, b: _i37, commonAncestor: _o56, type: "branch" });
      }
      return null;
    }
    function Fl(e, n) {
      var r = e.type,
        o = e.key,
        i = e.offset,
        s = ks(e.key);
      return "text" === r
        ? (Or(s) || t(266, s.getType(), o), ml(s, n, i))
        : (zo(s) || t(267, s.getType(), o), Gl(s, e.offset, n));
    }
    function Rl(e, n) {
      var r = n.origin,
        o = n.direction,
        i = "next" === o;
      fl(n)
        ? e.set(r.getKey(), n.offset, "text")
        : dl(n)
          ? Or(r)
            ? e.set(r.getKey(), xl(r, o), "text")
            : e.set(
                r.getParentOrThrow().getKey(),
                r.getIndexWithinParent() + (i ? 1 : 0),
                "element",
              )
          : ((hl(n) && zo(r)) || t(268),
            e.set(r.getKey(), i ? 0 : r.getChildrenSize(), "element"));
    }
    function Ll(t) {
      var e = Zr(),
        n = Rr(e) ? e : qr();
      return (Kl(n, t), ji(n), n);
    }
    function Kl(t, e) {
      (Rl(t.anchor, e.anchor), Rl(t.focus, e.focus));
    }
    function Bl(t) {
      var e = t.anchor,
        n = t.focus,
        r = Fl(e, "next"),
        o = Fl(n, "next"),
        i = Al(r, o) <= 0 ? "next" : "previous";
      return bl(Hl(r, i), Hl(o, i));
    }
    function zl(t) {
      var e = t.direction,
        n = t.origin,
        r = yl(n, ll(e)).getNodeAtCaret();
      return r ? yl(r, e) : Sl(n.getParentOrThrow(), e);
    }
    function $l(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _r71 = hl(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _r71;
        _r71 = _r71.getParentCaret(e)
      )
        n.push(zl(_r71));
      return n;
    }
    function Wl(t) {
      return !!t && t.origin.isAttached();
    }
    function Ul(e, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (e.isCollapsed()) return e;
      var r = "root",
        o = "next";
      var i = n;
      var s = Jl(e, o),
        l = $l(s.anchor, r),
        c = $l(s.focus.getFlipped(), r),
        a = new Set(),
        u = [];
      for (var _t212 of s.iterNodeCarets(r))
        if (hl(_t212)) a.add(_t212.origin.getKey());
        else if (dl(_t212)) {
          var _e136 = _t212.origin;
          (zo(_e136) && !a.has(_e136.getKey())) || u.push(_e136);
        }
      for (var _t213 of u) _t213.remove();
      for (var _t214 of s.getTextSlices()) {
        if (!_t214) continue;
        var _e137 = _t214.caret.origin,
          _n101 = _e137.getTextContentSize(),
          _r72 = zl(yl(_e137, o)),
          _s21 = _e137.getMode();
        if (
          (Math.abs(_t214.distance) === _n101 && "removeEmptySlices" === i) ||
          ("token" === _s21 && 0 !== _t214.distance)
        )
          _r72.remove();
        else if (0 !== _t214.distance) {
          i = "removeEmptySlices";
          var _e138 = _t214.removeTextSlice();
          var _n102 = _t214.caret.origin;
          if ("segmented" === _s21) {
            var _t215 = _e138.origin,
              _n103 = kr(_t215.getTextContent())
                .setStyle(_t215.getStyle())
                .setFormat(_t215.getFormat());
            (_r72.replaceOrInsert(_n103), (_e138 = ml(_n103, o, _e138.offset)));
          }
          (_n102.is(l[0].origin) && (l[0] = _e138),
            _n102.is(c[0].origin) && (c[0] = _e138.getFlipped()));
        }
      }
      var f, d;
      for (var _t216 of l)
        if (Wl(_t216)) {
          f = Yl(_t216);
          break;
        }
      for (var _t217 of c)
        if (Wl(_t217)) {
          d = Yl(_t217);
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
            for (var _r73 = c; _r73 < t.length; _r73++) {
              var _o57 = t[_r73];
              if (Ss(_o57)) return;
              !n && e(_o57) && (n = _o57);
            }
            return n;
          },
          u = a(i, Ls),
          f =
            u &&
            a(s, function (t) {
              return n.has(t.getKey()) && Ls(t);
            });
        return u && f ? [u, f] : null;
      })(f, d, a);
      if (h) {
        var _t218 = h[0],
          _e139 = h[1];
        Sl(_t218, "previous").splice(0, _e139.getChildren());
        var _n104 = _e139.getParent();
        for (_e139.remove(!0); _n104 && _n104.isEmpty(); ) {
          var _t219 = _n104;
          ((_n104 = _n104.getParent()), _t219.remove(!0));
        }
      }
      var g = [f, d].concat(l, c).find(Wl);
      if (g) {
        return El(Hl(Yl(g), e.direction));
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
    function Yl(t) {
      var e = (function (t) {
          var e = t;
          for (; hl(e); ) {
            var _t220 = Nl(e);
            if (!hl(_t220)) break;
            e = _t220;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (Or(e.origin)) return fl(e) ? e : ml(e.origin, n, n);
      var r = e.getAdjacentCaret();
      return dl(r) && Or(r.origin) ? ml(r.origin, n, ll(n)) : e;
    }
    function jl(t) {
      return fl(t) && t.offset !== xl(t.origin, t.direction);
    }
    function Hl(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function Jl(t, e) {
      return t.direction === e ? t : bl(Hl(t.focus, e), Hl(t.anchor, e));
    }
    function Gl(t, e, n) {
      var r = Sl(t, "next");
      for (var _t221 = 0; _t221 < e; _t221++) {
        var _t222 = r.getAdjacentCaret();
        if (null === _t222) break;
        r = _t222;
      }
      return Hl(r, n);
    }
    function Vl(e) {
      var n = e.origin,
        r = e.offset,
        o = e.direction;
      if (r === xl(n, o)) return e.getSiblingCaret();
      if (r === xl(n, ll(o))) return zl(e.getSiblingCaret());
      var _n$splitText2 = n.splitText(r),
        i = _n$splitText2[0];
      return (Or(i) || t(281), Hl(yl(i, "next"), o));
    }
    function ql(t, e) {
      return !0;
    }
    function Xl() {
      var e = [];
      for (
        var _len12 = arguments.length, t = new Array(_len12), _key12 = 0;
        _key12 < _len12;
        _key12++
      ) {
        t[_key12] = arguments[_key12];
      }
      for (var _n105 of t)
        if (_n105 && "string" == typeof _n105)
          for (var _ref32 of _n105.matchAll(/\S+/g)) {
            var _t223 = _ref32[0];
            e.push(_t223);
          }
      return e;
    }
    function Ql() {
      for (
        var _len13 = arguments.length, t = new Array(_len13), _key13 = 0;
        _key13 < _len13;
        _key13++
      ) {
        t[_key13] = arguments[_key13];
      }
      return function () {
        for (var _e140 = t.length - 1; _e140 >= 0; _e140--) t[_e140]();
        t.length = 0;
      };
    }
    ((exports.$addUpdateTag = _s),
      (exports.$applyNodeReplacement = Ns),
      (exports.$assumeActiveEditor = function (t) {
        (null !== No() && null === _o && (_o = t),
          _o !== t &&
            (function (t) {
              throw new Error(t);
            })(
              "The given editor argument does not match $getEditor() in this context. Use editor.getEditorState().read(..., {editor}) if this cross-editor call is intentional.",
            ));
      }),
      (exports.$caretFromPoint = Fl),
      (exports.$caretRangeFromSelection = Bl),
      (exports.$cloneWithProperties = Hs),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = Hs(t))[Vn] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = Al),
      (exports.$copyNode = Ts),
      (exports.$create = function (t) {
        var e = Ks();
        return (
          So(),
          new (e.resolveRegisteredNodeAfterReplacements(
            e.getRegisteredNode(t),
          ).klass)()
        );
      }),
      (exports.$createChildrenArray = nl),
      (exports.$createLineBreakNode = Zo),
      (exports.$createNodeSelection = Xr),
      (exports.$createParagraphNode = si),
      (exports.$createPoint = Dr),
      (exports.$createRangeSelection = qr),
      (exports.$createRangeSelectionFromDom = function (t, e) {
        return Qr(null, t, e, null);
      }),
      (exports.$createTabNode = Mr),
      (exports.$createTextNode = kr),
      (exports.$extendCaretToRange = Ol),
      (exports.$findMatchingParent = el),
      (exports.$fullReconcile = function () {
        vo()._dirtyType = 2;
      }),
      (exports.$generateNodesFromRawText = ao),
      (exports.$getAdjacentChildCaret = Nl),
      (exports.$getAdjacentNode = as),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          r = t,
          o = Nl(r);
        for (; null === o; ) {
          if ((n--, (o = r.getParentCaret(e)), !o)) return null;
          ((r = o), (o = Nl(r)));
        }
        return o && [o, n];
      }),
      (exports.$getCaretInDirection = Hl),
      (exports.$getCaretRange = bl),
      (exports.$getCaretRangeInDirection = Jl),
      (exports.$getCharacterOffsets = zr),
      (exports.$getChildCaret = Sl),
      (exports.$getChildCaretAtIndex = Gl),
      (exports.$getChildCaretOrSelf = Tl),
      (exports.$getCollapsedCaretRange = El),
      (exports.$getCommonAncestor = Pl),
      (exports.$getCommonAncestorResultBranchOrder = wl),
      (exports.$getDOMSlot = zs),
      (exports.$getDOMTextNode = Ws),
      (exports.$getEditor = Ks),
      (exports.$getEditorDOMRenderConfig = Bs),
      (exports.$getNearestNodeFromDOMNode = $i),
      (exports.$getNearestRootOrShadowRoot = Cs),
      (exports.$getNodeByKey = Li),
      (exports.$getNodeByKeyOrThrow = ks),
      (exports.$getNodeFromDOMNode = Ki),
      (exports.$getPreviousSelection = to),
      (exports.$getRoot = Yi),
      (exports.$getSelection = Zr),
      (exports.$getSiblingCaret = yl),
      (exports.$getState = it),
      (exports.$getStateChange = function (t, e, n) {
        var r = it(t, n, "direct"),
          o = it(e, n, "direct");
        return n.isEqual(r, o) ? null : [r, o];
      }),
      (exports.$getTextContent = function () {
        var t = Zr();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = xl),
      (exports.$getTextPointCaret = ml),
      (exports.$getTextPointCaretSlice = Cl),
      (exports.$getWritableNodeState = at),
      (exports.$hasAncestor = ys),
      (exports.$hasUpdateTag = function (t) {
        return vo()._updateTags.has(t);
      }),
      (exports.$insertNodes = function (t) {
        var e = Zr() || to();
        (null === e && (e = Yi().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = Gr),
      (exports.$isChildCaret = hl),
      (exports.$isDecoratorNode = Uo),
      (exports.$isEditorState = function (t) {
        return t instanceof _Vo;
      }),
      (exports.$isElementDOMSlot = $s),
      (exports.$isElementNode = zo),
      (exports.$isExtendableTextPointCaret = jl),
      (exports.$isInlineElementOrDecoratorNode = function (t) {
        return (zo(t) && t.isInline()) || (Uo(t) && t.isInline());
      }),
      (exports.$isLeafNode = function (t) {
        return Or(t) || ti(t) || Uo(t);
      }),
      (exports.$isLexicalNode = function (t) {
        return t instanceof _Qn5;
      }),
      (exports.$isLineBreakNode = ti),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _ol4;
      }),
      (exports.$isNodeSelection = Kr),
      (exports.$isParagraphNode = li),
      (exports.$isRangeSelection = Rr),
      (exports.$isRootNode = jo),
      (exports.$isRootOrShadowRoot = Ss),
      (exports.$isSiblingCaret = dl),
      (exports.$isTabNode = Ar),
      (exports.$isTextNode = Or),
      (exports.$isTextPointCaret = fl),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _kl;
      }),
      (exports.$isTokenOrSegmented = Ei),
      (exports.$isTokenOrTab = Oi),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = No();
        if (n._readOnly) {
          var _t224 = js(n).get(e);
          return _t224 ? Array.from(_t224.values()) : [];
        }
        var r = n._nodeMap,
          o = [];
        for (var _ref34 of r) {
          var _n106 = _ref34[1];
          _n106 instanceof t &&
            _n106.__type === e &&
            _n106.isAttached() &&
            o.push(_n106);
        }
        return o;
      }),
      (exports.$normalizeCaret = Yl),
      (exports.$normalizeSelection__EXPERIMENTAL = xt),
      (exports.$onUpdate = ps),
      (exports.$parseSerializedNode = function (t) {
        return Ao(t, vo()._nodes);
      }),
      (exports.$removeTextFromCaretRange = Ul),
      (exports.$rewindSiblingCaret = zl),
      (exports.$selectAll = function (t) {
        var e = Yi();
        if (Rr(t)) {
          var _e141 = t.anchor,
            _n107 = t.focus,
            _r74 = _e141
              .getNode()
              .getTopLevelElementOrThrow()
              .getParentOrThrow();
          return (
            _e141.set(_r74.getKey(), 0, "element"),
            _n107.set(_r74.getKey(), _r74.getChildrenSize(), "element"),
            xt(t),
            t
          );
        }
        {
          var _t225 = e.select(0, e.getChildrenSize());
          return (ji(xt(_t225)), _t225);
        }
      }),
      (exports.$setCompositionKey = Fi),
      (exports.$setDirectionFromDOM = Gs),
      (exports.$setFormatFromDOM = Vs),
      (exports.$setPointFromCaret = Rl),
      (exports.$setSelection = ji),
      (exports.$setSelectionFromCaretRange = Ll),
      (exports.$setState = function (t, e, n) {
        var r;
        if ((So(), "function" == typeof n)) {
          var _o58 = t.getLatest(),
            _i38 = it(_o58, e);
          if (((r = n(_i38)), e.isEqual(_i38, r))) return _o58;
        } else r = n;
        var o = t.getWritable();
        return (at(o).updateFromKnown(e, r), o);
      }),
      (exports.$splitAtPointCaretNext = function (t, _temp) {
        var _ref35 = _temp === void 0 ? {} : _temp,
          _ref35$$copyElementNo = _ref35.$copyElementNode,
          e = _ref35$$copyElementNo === void 0 ? Ts : _ref35$$copyElementNo,
          _ref35$$splitTextPoin = _ref35.$splitTextPointCaretNext,
          n = _ref35$$splitTextPoin === void 0 ? Vl : _ref35$$splitTextPoin,
          _ref35$rootMode = _ref35.rootMode,
          r = _ref35$rootMode === void 0 ? "shadowRoot" : _ref35$rootMode,
          _ref35$$shouldSplit = _ref35.$shouldSplit,
          o = _ref35$$shouldSplit === void 0 ? ql : _ref35$$shouldSplit,
          _ref35$removeEmptyDes = _ref35.removeEmptyDestination,
          i = _ref35$removeEmptyDes === void 0 ? !1 : _ref35$removeEmptyDes;
        if (fl(t)) return n(t);
        var s = t.getParentCaret(r);
        if (s) {
          var _n108 = s.origin;
          if (hl(t)) {
            var _t226 = zl(s);
            if (i && _n108.isEmpty()) return (_n108.remove(), _t226);
            if (!_n108.canBeEmpty() || !o(_n108, "first")) return _t226;
          }
          var _r75 = (function (t) {
            var e = [];
            for (
              var _n109 = t.getAdjacentCaret();
              _n109;
              _n109 = _n109.getAdjacentCaret()
            )
              e.push(_n109.origin);
            return e;
          })(t);
          (_r75.length > 0 || (!i && _n108.canBeEmpty() && o(_n108, "last"))) &&
            s.insert(e(_n108).splice(0, 0, _r75));
        }
        return s;
      }),
      (exports.$splitNode = function (e, n) {
        var r = e.getChildAtIndex(n);
        (null == r && (r = e), Ss(e) && t(102));
        var _o61 = function o(e) {
            var n = e.getParentOrThrow(),
              i = Ss(n),
              s = e !== r || i ? Ts(e) : e;
            if (i)
              return ((zo(e) && zo(s)) || t(133), e.insertAfter(s), [e, s, s]);
            {
              var _o60 = _o61(n),
                _t227 = _o60[0],
                _r76 = _o60[1],
                _i39 = _o60[2],
                _l14 = e.getNextSiblings();
              return (
                _i39.append.apply(_i39, [s].concat(_l14)),
                [_t227, _r76, s]
              );
            }
          },
          _o59 = _o61(r),
          i = _o59[0],
          s = _o59[1];
        return [i, s];
      }),
      (exports.$updateDOMSelection = lo),
      (exports.$updateRangeSelectionFromCaretRange = Kl),
      (exports.ArtificialNode__DO_NOT_USE = _qo),
      (exports.BEFORE_INPUT_COMMAND = _e),
      (exports.BLUR_COMMAND = sn),
      (exports.CAN_REDO_COMMAND = nn),
      (exports.CAN_UNDO_COMMAND = rn),
      (exports.CAN_USE_BEFORE_INPUT = i),
      (exports.CAN_USE_DOM = e),
      (exports.CLEAR_EDITOR_COMMAND = tn),
      (exports.CLEAR_HISTORY_COMMAND = en),
      (exports.CLICK_COMMAND = ge),
      (exports.COLLABORATION_TAG = tr),
      (exports.COMMAND_PRIORITY_BEFORE_CRITICAL = -4),
      (exports.COMMAND_PRIORITY_BEFORE_EDITOR = -8),
      (exports.COMMAND_PRIORITY_BEFORE_HIGH = -5),
      (exports.COMMAND_PRIORITY_BEFORE_LOW = -7),
      (exports.COMMAND_PRIORITY_BEFORE_NORMAL = -6),
      (exports.COMMAND_PRIORITY_CRITICAL = 4),
      (exports.COMMAND_PRIORITY_EDITOR = ci),
      (exports.COMMAND_PRIORITY_HIGH = 3),
      (exports.COMMAND_PRIORITY_LOW = 1),
      (exports.COMMAND_PRIORITY_NORMAL = 2),
      (exports.COMPOSITION_END_COMMAND = me),
      (exports.COMPOSITION_END_TAG = ir),
      (exports.COMPOSITION_START_COMMAND = ye),
      (exports.COMPOSITION_START_TAG = or),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = Te),
      (exports.COPY_COMMAND = Xe),
      (exports.CUT_COMMAND = Qe),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = fi),
      (exports.DELETE_CHARACTER_COMMAND = xe),
      (exports.DELETE_LINE_COMMAND = Oe),
      (exports.DELETE_WORD_COMMAND = ke),
      (exports.DRAGEND_COMMAND = qe),
      (exports.DRAGOVER_COMMAND = Ve),
      (exports.DRAGSTART_COMMAND = Ge),
      (exports.DROP_COMMAND = He),
      (exports.DecoratorNode = _Wo),
      (exports.ElementNode = _Bo4),
      (exports.FOCUS_COMMAND = on),
      (exports.FORMAT_ELEMENT_COMMAND = Je),
      (exports.FORMAT_TEXT_COMMAND = Ee),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = Zn),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = Ye),
      (exports.INPUT_COMMAND = pe),
      (exports.INSERT_LINE_BREAK_COMMAND = Ce),
      (exports.INSERT_PARAGRAPH_COMMAND = Se),
      (exports.INSERT_TAB_COMMAND = Ue),
      (exports.INTERNAL_$isBlock = Ls),
      (exports.IS_ALL_FORMATTING = 2047),
      (exports.IS_ANDROID = l),
      (exports.IS_ANDROID_CHROME = u),
      (exports.IS_APPLE = r),
      (exports.IS_APPLE_WEBKIT = f),
      (exports.IS_BOLD = 1),
      (exports.IS_CHROME = a),
      (exports.IS_CODE = 16),
      (exports.IS_FIREFOX = o),
      (exports.IS_HIGHLIGHT = _),
      (exports.IS_IOS = s),
      (exports.IS_ITALIC = 2),
      (exports.IS_SAFARI = c),
      (exports.IS_STRIKETHROUGH = 4),
      (exports.IS_SUBSCRIPT = 32),
      (exports.IS_SUPERSCRIPT = 64),
      (exports.IS_UNDERLINE = 8),
      (exports.KEY_ARROW_DOWN_COMMAND = Re),
      (exports.KEY_ARROW_LEFT_COMMAND = Ie),
      (exports.KEY_ARROW_RIGHT_COMMAND = we),
      (exports.KEY_ARROW_UP_COMMAND = Fe),
      (exports.KEY_BACKSPACE_COMMAND = Be),
      (exports.KEY_DELETE_COMMAND = $e),
      (exports.KEY_DOWN_COMMAND = Ae),
      (exports.KEY_ENTER_COMMAND = Le),
      (exports.KEY_ESCAPE_COMMAND = ze),
      (exports.KEY_MODIFIER_COMMAND = ln),
      (exports.KEY_SPACE_COMMAND = Ke),
      (exports.KEY_TAB_COMMAND = We),
      (exports.LineBreakNode = _Xo),
      (exports.MOVE_TO_END = De),
      (exports.MOVE_TO_START = Pe),
      (exports.NODE_STATE_KEY = "$"),
      (exports.OUTDENT_CONTENT_COMMAND = je),
      (exports.PASTE_COMMAND = Ne),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _oi),
      (exports.REDO_COMMAND = Me),
      (exports.REMOVE_TEXT_COMMAND = ve),
      (exports.RootNode = _Yo),
      (exports.SELECTION_CHANGE_COMMAND = de),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = he),
      (exports.SELECT_ALL_COMMAND = Ze),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = nr),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = er),
      (exports.SKIP_SELECTION_FOCUS_TAG = rr),
      (exports.TEXT_TYPE_TO_FORMAT = M),
      (exports.TabNode = _br),
      (exports.TextNode = _pr2),
      (exports.UNDO_COMMAND = be),
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
        var n = Xl.apply(void 0, e);
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
      (exports.createCommand = fe),
      (exports.createEditor = function (t) {
        var e = t || {},
          n = Oo(),
          r = e.theme || {},
          o = void 0 === t ? n : e.parentEditor || null,
          i = e.disableEvents || !1,
          s = Jo(),
          l = e.namespace || (null !== o ? o._config.namespace : Vi()),
          c = e.editorState,
          a = [_Yo, _pr2, _Xo, _br, _oi, _qo].concat(e.nodes || []),
          u = e.onError,
          f = e.html,
          d = void 0 === e.editable || e.editable;
        var h;
        if (void 0 === t && null !== n) h = n._nodes;
        else {
          h = new Map();
          for (var _t228 = 0; _t228 < a.length; _t228++) {
            var _e142 = a[_t228],
              _n110 = null,
              _r77 = null;
            if ("function" != typeof _e142) {
              var _t229 = _e142;
              ((_e142 = _t229.replace),
                (_n110 = _t229["with"]),
                (_r77 = _t229.withKlass || null));
            }
            tl(_e142);
            var _o62 = _e142.getType(),
              _i40 = ui(_e142);
            h.set(_o62, {
              exportDOM: f && f["export"] ? f["export"].get(_e142) : void 0,
              klass: _e142,
              replace: _n110,
              replaceWithKlass: _r77,
              sharedNodeState: st(a[_t228]),
              transforms: _i40,
            });
          }
        }
        var g = new _gi(
          s,
          o,
          h,
          {
            disableEvents: i,
            dom: babelHelpers["extends"]({}, fi, t && t.dom),
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
            (t.registerCommand(_e, Fn, ci),
              t.registerCommand(pe, Rn, ci),
              t.registerCommand(ye, Ln, ci),
              t.registerCommand(me, Kn, ci),
              t.registerCommand(Ae, zn, ci));
          })(g),
          g
        );
      }),
      (exports.createSharedNodeState = st),
      (exports.createState = function (t, e) {
        return new ot(t, e);
      }),
      (exports.declarePeerDependency = function (t, e) {
        return [t, e];
      }),
      (exports.defineExtension = function (t) {
        return t;
      }),
      (exports.flipDirection = ll),
      (exports.getDOMOwnerDocument = gs),
      (exports.getDOMSelection = bs),
      (exports.getDOMSelectionFromTarget = Ms),
      (exports.getDOMTextNode = Ai),
      (exports.getEditorPropertyFromDOMNode = ki),
      (exports.getNearestEditorFromDOMNode = vi),
      (exports.getRegisteredNode = xi),
      (exports.getRegisteredNodeOrThrow = mi),
      (exports.getStaticNodeConfig = tl),
      (exports.getStyleObjectFromCSS = lr),
      (exports.getTextDirection = function (t) {
        return E.test(t) ? "rtl" : b.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = ui),
      (exports.isBlockDomNode = Rs),
      (exports.isCurrentlyReadOnlyMode = Co),
      (exports.isDOMCapturingSelection = Qs),
      (exports.isDOMDocumentNode = Mi),
      (exports.isDOMNode = ws),
      (exports.isDOMTextNode = bi),
      (exports.isDOMUnmanaged = Xs),
      (exports.isDocumentFragment = Ds),
      (exports.isExactShortcutMatch = ns),
      (exports.isHTMLAnchorElement = function (t) {
        return As(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = As),
      (exports.isHTMLTableCellElement = function (t) {
        return As(t) && ("TD" === t.tagName || "TH" === t.tagName);
      }),
      (exports.isHTMLTableRowElement = function (t) {
        return As(t) && "TR" === t.tagName;
      }),
      (exports.isInlineDomNode = Ps),
      (exports.isLastChildInBlockNode = ni),
      (exports.isLexicalEditor = Ni),
      (exports.isModifierMatch = es),
      (exports.isOnlyChildInBlockNode = ei),
      (exports.isSelectionCapturedInDecoratorInput = Si),
      (exports.isSelectionWithinEditor = Ti),
      (exports.makeStepwiseIterator = Ml),
      (exports.mergeRegister = Ql),
      (exports.normalizeClassNames = Xl),
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
        var n = Xl.apply(void 0, e);
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(_t$classList3, n);
      }),
      (exports.removeFromParent = Ii),
      (exports.resetRandomKey = function () {
        yi = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = ar),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n111 in e) {
          var _r78 = e[_n111];
          null == _r78 ? t.removeProperty(_n111) : cr(t, _n111, _r78);
        }
      }),
      (exports.setDOMUnmanaged = qs),
      (exports.setNodeIndentFromDOM = Js),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n112 in e)
          if (t[_n112] !== e[_n112]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.stopLexicalPropagation = Yn),
      (exports.toggleTextFormatType = wi),
      (exports.tokenizeRawText = co));
  },
  null,
);
