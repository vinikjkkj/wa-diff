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
        o = new URLSearchParams();
      o.append("code", t);
      for (
        var _len = arguments.length,
          e = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        e[_key - 1] = arguments[_key];
      }
      for (var _t2 of e) o.append("v", _t2);
      throw (
        (n.search = o.toString()),
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
      throw new Error(t);
    }
    var n =
        "undefined" != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement,
      o = n && "documentMode" in document ? document.documentMode : null,
      r = n && /Mac|iPod|iPhone|iPad/.test(navigator.platform),
      s = n && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
      i =
        !(!n || !("InputEvent" in window) || o) &&
        "getTargetRanges" in new window.InputEvent("input"),
      l = n && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
      c = n && /Android/.test(navigator.userAgent),
      a = n && /Version\/[\d.]+.*Safari/.test(navigator.userAgent) && !c,
      u = n && /^(?=.*Chrome).*/i.test(navigator.userAgent),
      f = n && c && u,
      d = n && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && r && !u,
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
      k = s ? "\xa0" : T,
      E = "\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc",
      O =
        "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff",
      b = new RegExp("^[^" + O + "]*[" + E + "]"),
      M = new RegExp("^[^" + E + "]*[" + O + "]"),
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
        (_I[N] = "end"),
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
    function L() {
      return Nl()._blockCursorElement;
    }
    function $(t) {
      return (
        null !== t && 1 === t.nodeType && t.hasAttribute("data-lexical-slot")
      );
    }
    var _K2 = (function () {
      function K(t, e, n) {
        ((this.element = t),
          (this.before = e || null),
          (this.after = n || null));
      }
      var _proto = K.prototype;
      _proto.withBefore = function withBefore(t) {
        return new K(this.element, t, this.after);
      };
      _proto.withAfter = function withAfter(t) {
        return new K(this.element, this.before, t);
      };
      _proto.withElement = function withElement(t) {
        return this.element === t ? this : new K(t, this.before, this.after);
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
        var o = z(t, this.element);
        if (null === o) return "after";
        var r = Array.prototype.indexOf.call(t.childNodes, o);
        if (r < 0) return "after";
        if (e === t) return n <= r ? "before" : "after";
        var s = z(t, e);
        if (null === s) return "after";
        var i = Array.prototype.indexOf.call(t.childNodes, s);
        return i >= 0 && i <= r ? "before" : "after";
      };
      _proto.getInsertionAnchor = function getInsertionAnchor() {
        return this.before;
      };
      return K;
    })();
    function z(t, e) {
      var n = e;
      for (; null !== n && n.parentNode !== t; ) n = n.parentNode;
      return n;
    }
    var _B = (function (_K) {
      function B() {
        return _K.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(B, _K);
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
          _K.prototype.getInsertionAnchor.call(this) ||
          this.getManagedLineBreak()
        );
      };
      _proto2.getFirstChildAnchor = function getFirstChildAnchor() {
        var t = _K.prototype.getFirstChildAnchor.call(this),
          e = t ? t.nextSibling : this.element.firstChild;
        for (; $(e); ) ((t = e), (e = e.nextSibling));
        var n = t ? t.nextSibling : this.element.firstChild;
        return null !== n && n === L() ? n : t;
      };
      _proto2.getManagedLineBreak = function getManagedLineBreak() {
        return this.element.__lexicalLineBreak || null;
      };
      _proto2.setManagedLineBreak = function setManagedLineBreak(t) {
        if (((this.element.__lexicalLastChildKind = t), null === t))
          this.removeManagedLineBreak();
        else {
          var _e2 = "decorator" === t && (d || l || a);
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
          o = this.before,
          r = document.createElement("br");
        if (
          (r.setAttribute("data-lexical-managed-linebreak", "true"),
          n.insertBefore(r, o),
          t)
        ) {
          var _t3 = document.createElement("img");
          (_t3.setAttribute("data-lexical-managed-linebreak", "true"),
            _t3.style.setProperty("display", "inline", "important"),
            _t3.style.setProperty("border", "0px", "important"),
            _t3.style.setProperty("margin", "0px", "important"),
            (_t3.alt = ""),
            n.insertBefore(_t3, r),
            (n.__lexicalLineBreak = _t3));
        } else n.__lexicalLineBreak = r;
      };
      _proto2.getFirstChildOffset = function getFirstChildOffset() {
        var t = this.getFirstChild(),
          e = this.getInsertionAnchor();
        var n = 0;
        for (
          var _o2 = this.element.firstChild;
          null !== _o2 && _o2 !== t && _o2 !== e;
          _o2 = _o2.nextSibling
        )
          n++;
        return n;
      };
      _proto2.resolveChildIndex = function resolveChildIndex(t, e, n, o) {
        if (n === this.element) {
          var _e4 = this.getFirstChildOffset(),
            _n3 = L(),
            _r2 = this.element.childNodes,
            _s2 = Math.min(o, _r2.length);
          var _i2 = 0;
          for (var _t4 = _e4; _t4 < _s2; _t4++) _r2[_t4] !== _n3 && _i2++;
          return [t, Math.min(_i2, t.getChildrenSize())];
        }
        var r = W(e, n);
        r.push(o);
        var s = W(e, this.element);
        var i = t.getIndexWithinParent();
        for (var _t5 = 0; _t5 < s.length; _t5++) {
          var _e5 = r[_t5],
            _n4 = s[_t5];
          if (void 0 === _e5 || _e5 < _n4) break;
          if (_e5 > _n4) {
            i += 1;
            break;
          }
        }
        return [t.getParentOrThrow(), i];
      };
      return B;
    })(_K2);
    function W(e, n) {
      var o = [];
      var r = n;
      for (; r !== e && null !== r; r = r.parentNode) {
        var _t6 = 0;
        for (
          var _e6 = r.previousSibling;
          null !== _e6;
          _e6 = _e6.previousSibling
        )
          _t6++;
        o.push(_t6);
      }
      return (r !== e && t(225), o.reverse());
    }
    var U;
    try {
      U = "0.45.0+prod.cjs";
    } catch (t) {}
    var H = U != null ? U : '"<unknown>+source"';
    var _j = (function () {
      function j() {
        this._front = new Set();
        this._back = new Set();
      }
      var _proto3 = j.prototype;
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
      return babelHelpers.createClass(j, [
        {
          key: "size",
          get: function get() {
            return this._front.size + this._back.size;
          },
        },
      ]);
    })();
    var Y = null;
    function J(t, e) {
      if (e === void 0) {
        e = 1e3;
      }
      return t instanceof _G
        ? t.clone()
        : t.size < e
          ? new Map(t)
          : new _G().init(new Map(t), void 0, t.size);
    }
    var _G = (function () {
      function G() {
        this._mutable = !1;
        this._old = void 0;
        this._nursery = void 0;
        this._size = 0;
      }
      var _proto4 = G.prototype;
      _proto4.clone = function clone() {
        return (
          (this._mutable = !1),
          new G().init(this._old, this._nursery, this._size)
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
        var o = this.getNursery();
        return (
          (n !== Y && void 0 !== n) ||
            (this._size++, n === Y && o["delete"](t)),
          o.set(t, e),
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
        var o = e(t);
        return (this.set(t, o), o);
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
              _o3 = t ? t.get(_e9) : void 0;
            _o3 !== Y && (void 0 !== _o3 && (_n6[1] = _o3), yield _n6);
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
      return babelHelpers.createClass(G, [
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
    function V(t, e, n, o, r, s) {
      if (cs(t)) {
        var _i3 = t.getFirstChild();
        for (; null !== _i3; ) {
          var _t0 = _i3.__key;
          (_i3.__parent === e &&
            ((cs(_i3) || (Yl(_i3) && null !== _i3.__slots)) &&
              V(_i3, _t0, n, o, r, s),
            n.has(_t0) || s["delete"](_t0),
            r.push(_t0)),
            (_i3 = _i3.getNextSibling()));
        }
      }
      for (var _i4 of Yl(t) && null !== t.__slots ? t.__slots.values() : []) {
        var _t1 = o.get(_i4);
        void 0 !== _t1 &&
          Jl(_t1) &&
          _t1.__slotHost === e &&
          ((cs(_t1) || (Yl(_t1) && null !== _t1.__slots)) &&
            V(_t1, _i4, n, o, r, s),
          n.has(_i4) || s["delete"](_i4),
          r.push(_i4));
      }
    }
    var q = !1,
      X = 0;
    function Q(t) {
      X = t.timeStamp;
    }
    function Z(t, e, n) {
      var o = "BR" === t.nodeName,
        r = e.__lexicalLineBreak;
      return (
        (r && (t === r || (o && t.previousSibling === r))) ||
        (o && void 0 !== ui(t, n))
      );
    }
    function tt(t, e, n) {
      var o = Zi(Ui(n)),
        r = o && ll(o, n._rootElement);
      var s = null,
        i = null;
      null !== r &&
        r.anchorNode === t &&
        ((s = r.anchorOffset), (i = r.focusOffset));
      var l = t.nodeValue;
      null !== l && Ni(e, l, s, i, !1);
    }
    function et(t, e, n) {
      if (Vo(t)) {
        var _e1 = t.anchor.getNode();
        if (_e1.is(n) && t.format !== _e1.getFormat()) return !1;
      }
      return Xs(e) && n.isAttached();
    }
    function nt(t, e, n) {
      for (var _o4 = t; _o4 && !Fl(_o4); _o4 = Li(_o4)) {
        var _t10 = ui(_o4, e);
        if (void 0 !== _t10) {
          var _e10 = li(_t10, n);
          if (_e10) return fs(_e10) || !gl(_o4) ? void 0 : [_o4, _e10];
        }
      }
    }
    function ot(t, e, n) {
      q = !0;
      var o = performance.now() - X > 100;
      try {
        ss(t, function () {
          var r =
              _r() ||
              (function (t) {
                return t.read("latest", function () {
                  var t = _r();
                  return null !== t ? t.clone() : null;
                });
              })(t),
            i = new Map(),
            l = t._editorState,
            c = t._blockCursorElement;
          var a = !1,
            u = "";
          for (var _n9 = 0; _n9 < e.length; _n9++) {
            var _f = e[_n9],
              _d = _f.type,
              _h = _f.target,
              _g = nt(_h, t, l);
            if (!_g) continue;
            var _2 = _g[0],
              _p = _g[1];
            if ("characterData" === _d)
              o && Ko(_p) && Xs(_h) && et(r, _h, _p) && tt(_h, _p, t);
            else if ("childList" === _d) {
              a = !0;
              var _e11 = _f.addedNodes;
              for (var _n0 = 0; _n0 < _e11.length; _n0++) {
                var _o5 = _e11[_n0],
                  _r3 = ci(_o5),
                  _i5 = _o5.parentNode;
                if (
                  !(
                    null == _i5 ||
                    _o5 === c ||
                    null !== _r3 ||
                    Z(_o5, _i5, t) ||
                    (t._slotsUsed &&
                      gl(_o5) &&
                      _o5.hasAttribute("data-lexical-slot")) ||
                    Fl(_o5)
                  )
                ) {
                  if (s) {
                    var _t11 =
                      (gl(_o5) ? _o5.innerText : null) || _o5.nodeValue;
                    _t11 && (u += _t11);
                  }
                  _i5.removeChild(_o5);
                }
              }
              var _n1 = _f.removedNodes,
                _o6 = _n1.length;
              if (_o6 > 0) {
                var _e12 = 0;
                for (var _r4 = 0; _r4 < _o6; _r4++) {
                  var _o7 = _n1[_r4];
                  (Z(_o7, _h, t) || c === _o7) && (_h.appendChild(_o7), _e12++);
                }
                _o6 !== _e12 && i.set(_2, _p);
              }
            }
          }
          if (i.size > 0)
            for (var _ref6 of i) {
              var _e13 = _ref6[0];
              var _n10 = _ref6[1];
              _n10.reconcileObservedMutation(_e13, t);
            }
          var f = n.takeRecords();
          if (f.length > 0) {
            for (var _e14 = 0; _e14 < f.length; _e14++) {
              var _n11 = f[_e14],
                _o8 = _n11.addedNodes,
                _r5 = _n11.target;
              for (var _e15 = 0; _e15 < _o8.length; _e15++) {
                var _n12 = _o8[_e15],
                  _s3 = _n12.parentNode;
                null == _s3 ||
                  "BR" !== _n12.nodeName ||
                  Z(_n12, _r5, t) ||
                  _s3.removeChild(_n12);
              }
            }
            n.takeRecords();
          }
          null !== r && (a && _i(r), s && Pi(t) && r.insertRawText(u));
        });
      } finally {
        q = !1;
      }
    }
    function rt(t) {
      var e = t._observer;
      if (null !== e) {
        ot(t, e.takeRecords(), e);
      }
    }
    function st(t) {
      (!(function (t) {
        0 === X && Ui(t).addEventListener("textInput", Q, !0);
      })(t),
        (t._observer = new MutationObserver(function (e, n) {
          ot(t, e, n);
        })));
    }
    var it = "direct",
      lt = "latest";
    var ct = function ct(t, e) {
      ((this.key = t),
        (this.parse = e.parse.bind(e)),
        (this.unparse = (e.unparse || pt).bind(e)),
        (this.isEqual = (e.isEqual || Object.is).bind(e)),
        (this.defaultValue = this.parse(void 0)),
        (this.resetOnCopyNode = e.resetOnCopyNode || !1));
    };
    function at(t, e, n) {
      if (n === void 0) {
        n = lt;
      }
      var o = (n === lt ? t.getLatest() : t).__state;
      return o ? o.getValue(e) : e.defaultValue;
    }
    function ut(t) {
      var e = new Map(),
        n = new Set();
      for (var _ref8 of Bl("function" == typeof t ? t : t.replace)) {
        var _o9 = _ref8.ownNodeConfig;
        if (_o9 && _o9.stateConfigs)
          for (var _t12 of _o9.stateConfigs) {
            var _o0 = void 0;
            ("stateConfig" in _t12
              ? ((_o0 = _t12.stateConfig), _t12.flat && n.add(_o0.key))
              : (_o0 = _t12),
              e.set(_o0.key, _o0));
          }
      }
      return { flatKeys: n, sharedConfigMap: e };
    }
    var ft = new Set(["__proto__", "constructor", "prototype"]);
    var _dt = (function () {
      function dt(t, e, n, o, r) {
        if (n === void 0) {
          n = void 0;
        }
        if (o === void 0) {
          o = new Map();
        }
        if (r === void 0) {
          r = void 0;
        }
        ((this.node = t),
          (this.sharedNodeState = e),
          (this.unknownState = n),
          (this.knownState = o));
        var s = this.sharedNodeState.sharedConfigMap,
          i =
            void 0 !== r
              ? r
              : (function (t, e, n) {
                  var o = n.size;
                  if (e)
                    for (var _r6 in e) {
                      var _e16 = t.get(_r6);
                      (_e16 && n.has(_e16)) || o++;
                    }
                  return o;
                })(s, n, o);
        this.size = i;
      }
      var _proto5 = dt.prototype;
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
        for (var _ref0 of this.knownState) {
          var _e18 = _ref0[0];
          var _n13 = _ref0[1];
          _e18.isEqual(_n13, _e18.defaultValue)
            ? delete t[_e18.key]
            : (t[_e18.key] = _e18.unparse(_n13));
        }
        for (var _n14 of this.sharedNodeState.flatKeys)
          _n14 in t && ((e[_n14] = t[_n14]), delete t[_n14]);
        return (_t(t) && (e.$ = t), e);
      };
      _proto5.getWritable = function getWritable(t) {
        if (this.node === t) return this;
        var e = this.sharedNodeState,
          n = this.unknownState,
          o = new Map(this.knownState);
        return new dt(
          t,
          e,
          (function (t, e, n) {
            var o;
            if (n)
              for (var _ref10 of Object.entries(n)) {
                var _r7 = _ref10[0];
                var _s4 = _ref10[1];
                {
                  if (ft.has(_r7)) continue;
                  var _n15 = t.get(_r7);
                  _n15
                    ? e.has(_n15) || e.set(_n15, _n15.parse(_s4))
                    : ((o = o || {}), (o[_r7] = _s4));
                }
              }
            return o;
          })(e.sharedConfigMap, o, n),
          o,
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
        var o = this.knownState,
          r = this.unknownState;
        (o.has(t) ||
          (r && n in r) ||
          (r && (delete r[n], (this.unknownState = _t(r))), this.size++),
          o.set(t, e));
      };
      _proto5.updateFromUnknown = function updateFromUnknown(t, e) {
        if (ft.has(t)) return;
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
          for (var _ref12 of Object.entries(t)) {
            var _e19 = _ref12[0];
            var _n16 = _ref12[1];
            this.updateFromUnknown(_e19, _n16);
          }
      };
      return dt;
    })();
    function ht(t) {
      var e = t.getWritable(),
        n = e.__state ? e.__state.getWritable(e) : new _dt(e, gt(e));
      return ((e.__state = n), n);
    }
    function gt(t) {
      return t.__state
        ? t.__state.sharedNodeState
        : Bs(Nl(), t.getType()).sharedNodeState;
    }
    function _t(t) {
      if (t) for (var _e20 in t) return t;
    }
    function pt(t) {
      return t;
    }
    function yt(t, e, n) {
      for (var _ref14 of e.knownState) {
        var _o1 = _ref14[0];
        var _r8 = _ref14[1];
        {
          if (t.has(_o1.key)) continue;
          t.add(_o1.key);
          var _e21 = n ? n.getValue(_o1) : _o1.defaultValue;
          if (_e21 !== _r8 && !_o1.isEqual(_e21, _r8)) return !0;
        }
      }
      return !1;
    }
    function mt(t, e, n) {
      var o = e.unknownState,
        r = n ? n.unknownState : void 0;
      if (o)
        for (var _ref16 of Object.entries(o)) {
          var _e22 = _ref16[0];
          var _n17 = _ref16[1];
          if (t.has(_e22)) continue;
          t.add(_e22);
          if (_n17 !== (r ? r[_e22] : void 0)) return !0;
        }
      return !1;
    }
    function xt(t, e) {
      var n = t.__state;
      return n && n.node === t ? n.getWritable(e) : n;
    }
    function Ct(t, e) {
      var n = t.__mode,
        o = t.__format,
        r = t.__style,
        s = e.__mode,
        i = e.__format,
        l = e.__style,
        c = t.__state,
        a = e.__state;
      return (
        (null === n || n === s) &&
        (null === o || o === i) &&
        (null === r || r === l) &&
        (null === t.__state ||
          c === a ||
          (function (t, e) {
            if (t === e) return !0;
            var n = new Set();
            return !(
              (t && yt(n, t, e)) ||
              (e && yt(n, e, t)) ||
              (t && mt(n, t, e)) ||
              (e && mt(n, e, t))
            );
          })(c, a))
      );
    }
    function St(t, e) {
      var n = t.mergeWithSibling(e),
        o = Hr()._normalizedNodes;
      return (o.add(t.__key), o.add(e.__key), n);
    }
    function Nt(t) {
      var e,
        n,
        o = t;
      if ("" !== o.__text || !o.isSimpleText() || o.isUnmergeable()) {
        for (
          ;
          null !== (e = o.getPreviousSibling()) &&
          Ko(e) &&
          e.isSimpleText() &&
          !e.isUnmergeable();
        ) {
          if ("" !== e.__text) {
            if (Ct(e, o)) {
              o = St(e, o);
              break;
            }
            break;
          }
          e.remove();
        }
        for (
          ;
          null !== (n = o.getNextSibling()) &&
          Ko(n) &&
          n.isSimpleText() &&
          !n.isUnmergeable();
        ) {
          if ("" !== n.__text) {
            if (Ct(o, n)) {
              o = St(o, n);
              break;
            }
            break;
          }
          n.remove();
        }
      } else o.remove();
    }
    function Tt(t) {
      return (vt(t.anchor), vt(t.focus), t);
    }
    function vt(t) {
      for (; "element" === t.type; ) {
        var _e23 = t.getNode(),
          _n18 = t.offset;
        var _o10 = void 0,
          _r9 = void 0;
        if (
          (_n18 === _e23.getChildrenSize()
            ? ((_o10 = _e23.getChildAtIndex(_n18 - 1)), (_r9 = !0))
            : ((_o10 = _e23.getChildAtIndex(_n18)), (_r9 = !1)),
          Ko(_o10))
        ) {
          t.set(_o10.__key, _r9 ? _o10.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!cs(_o10)) break;
        t.set(_o10.__key, _r9 ? _o10.getChildrenSize() : 0, "element", !0);
      }
    }
    var kt = Symbol["for"]("@lexical/CachedTextSize");
    function Et(e, n) {
      return Ut.read(
        function () {
          var o = 0,
            r = e;
          for (var _e24 = 0; _e24 < n && null !== r; _e24++) {
            var _s5 = Wt.get(r);
            if ((void 0 === _s5 && t(345, r), cs(_s5))) {
              var _i6 = Ht.get(r);
              if (void 0 !== _i6 && cs(_i6) && _i6.__parent !== _s5.__parent)
                o += _s5.getTextContentSize();
              else {
                var _e25 = jt.get(r),
                  _n19 = _e25 && _e25.__lexicalTextContent;
                ("string" != typeof _n19 && t(346, _s5.getType()),
                  (o += _n19.length));
              }
              _e24 < n - 1 && !_s5.isInline() && (o += 2);
            } else {
              var _e26 = _s5[kt];
              (void 0 === _e26 && t(347, _s5.getType(), r), (o += _e26));
            }
            r = _s5.__next;
          }
          return o;
        },
        { editor: At },
      );
    }
    function Ot(t) {
      cs(t) ||
        (void 0 === t[kt] &&
          (t[kt] = Ko(t) ? t.__text.length : t.getTextContentSize()));
    }
    var bt = 4;
    var Mt,
      At,
      wt,
      Dt = "",
      It = null,
      Pt = null,
      Ft = null;
    function Rt() {
      return { firstTextKey: Ft, format: It, style: Pt };
    }
    function Lt(t) {
      null !== t.firstTextKey &&
        ((It = t.format), (Pt = t.style), (Ft = t.firstTextKey));
    }
    function $t(e) {
      if (null !== Ft) return;
      var n = e.__lexicalFirstTextKey;
      if ((void 0 === n && t(348), null === n)) return;
      var o = Ht.get(n);
      Ko(o) && ((It = o.getFormat()), (Pt = o.getStyle()), (Ft = n));
    }
    var Kt,
      zt,
      Bt,
      Wt,
      Ut,
      Ht,
      jt,
      Yt,
      Jt,
      Gt,
      Vt = !1,
      qt = !1;
    function Xt(t, e) {
      var n = Wt.get(t),
        o = Ht.has(t);
      if (null !== e) {
        var _n20 = Se(t);
        _n20.parentNode === e && e.removeChild(_n20);
      }
      if (!o) {
        if ((At._keyToDOMMap["delete"](t), cs(n))) {
          var _t15 = Ul(n, Wt);
          Qt(_t15, 0, _t15.length - 1, null);
        }
        if (void 0 !== n) {
          for (var _t16 of le(n).values()) {
            var _e27 = ae(_t16);
            (Xt(_t16, null), null !== _e27 && _e27.remove());
          }
          wi(Jt, wt, Kt, n, "destroyed");
        }
      }
    }
    function Qt(t, e, n, o) {
      for (var _r0 = e; _r0 <= n; ++_r0) {
        var _e28 = t[_r0];
        void 0 !== _e28 && Xt(_e28, o);
      }
    }
    function Zt(t, e) {
      t.setProperty("text-align", e);
    }
    var te = "40px";
    function ee(t, e) {
      var n = Mt.theme.indent;
      if ("string" == typeof n) {
        var _o11 = t.classList.contains(n);
        e > 0 && !_o11
          ? t.classList.add(n)
          : e < 1 && _o11 && t.classList.remove(n);
      }
      t.style.setProperty(
        "padding-inline-start",
        0 === e
          ? ""
          : "calc(" + e + " * var(--lexical-indent-base-value, " + te + "))",
      );
    }
    function ne(t, e) {
      var n = t.style;
      0 === e
        ? Zt(n, "")
        : 1 === e
          ? Zt(n, "left")
          : 2 === e
            ? Zt(n, "center")
            : 3 === e
              ? Zt(n, "right")
              : 4 === e
                ? Zt(n, "justify")
                : 5 === e
                  ? Zt(n, "start")
                  : 6 === e && Zt(n, "end");
    }
    function oe(t, e) {
      var n = (function (t) {
        var e = t.__dir;
        if (null !== e) return e;
        if (hs(t)) return null;
        var n = t.getParent();
        return null === n || (Yi(n) && null === n.__dir) ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function re(t) {
      var e = document.createElement("div");
      return (
        e.setAttribute("data-lexical-slot", t),
        (e.style.display = "none"),
        e
      );
    }
    function se(t, e, n) {
      e || "false" === t.contentEditable
        ? Rl(n, At)
        : n.removeAttribute("contenteditable");
    }
    function ie(t, e, n) {
      var o = Dt,
        r = Rt();
      Dt = "";
      var s = "";
      var i = fs(t);
      for (var _ref18 of n) {
        var _o12 = _ref18[0];
        var _r1 = _ref18[1];
        {
          var _n21 = re(_o12);
          (se(e, i, _n21), e.appendChild(_n21), (Dt = ""));
          var _l2 = Rt();
          (fe(_r1, vl(t, _n21, At)), Lt(_l2), ce(t, _o12, e, _n21), (s += Dt));
        }
      }
      return (Lt(r), (Dt = o), s);
    }
    function le(t) {
      return Yl(t) && null !== t.__slots ? t.__slots : jl;
    }
    function ce(t, e, n, o) {
      var r = Gt.$getSlotTargetElement(t, e, n, At);
      null !== r &&
        (o.parentElement !== r && r.appendChild(o), (o.style.display = ""));
    }
    function ae(t) {
      var e = jt.get(t);
      return void 0 !== e ? e.parentElement : null;
    }
    function ue(t, e, n) {
      var o = le(t),
        r = le(e);
      for (var _ref20 of o) {
        var _t17 = _ref20[0];
        var _e29 = _ref20[1];
        if (!r.has(_t17)) {
          var _t18 = ae(_e29);
          (Xt(_e29, null), null !== _t18 && _t18.remove());
        }
      }
      var s = Dt,
        i = Rt();
      var l = "",
        c = null;
      var a = fs(e);
      for (var _ref22 of r) {
        var _t19 = _ref22[0];
        var _s6 = _ref22[1];
        {
          var _r10 = o.get(_t19);
          var _i7 = void 0 !== _r10 ? ae(_r10) : null;
          Dt = "";
          var _u = Rt();
          if (null === _i7) {
            _i7 = re(_t19);
            var _o13 = null;
            for (var _t20 of n.children)
              if (!_t20.hasAttribute("data-lexical-slot")) {
                _o13 = _t20;
                break;
              }
            (n.insertBefore(_i7, _o13), fe(_s6, vl(e, _i7, At)));
          } else
            _r10 === _s6
              ? pe(_s6, _i7)
              : (void 0 !== _r10 && Xt(_r10, _i7), fe(_s6, vl(e, _i7, At)));
          if (
            (Lt(_u),
            se(n, a, _i7),
            ce(e, _t19, n, _i7),
            (l += Dt),
            _i7.parentElement === n)
          ) {
            var _t21 = null === c ? n.firstChild : c.nextSibling;
            (_t21 !== _i7 && n.insertBefore(_i7, _t21), (c = _i7));
          }
        }
      }
      return (Lt(i), (Dt = s), l);
    }
    function fe(e, n) {
      var o = Ht.get(e);
      if ((void 0 === o && t(60), null !== n)) {
        var _t22 = Wt.get(e);
        if (void 0 !== _t22) {
          var _r11 = jt.get(e);
          if (void 0 !== _r11) {
            var _s7 = Jl(_t22) ? _t22.__slotHost : null,
              _i8 = Jl(o) ? o.__slotHost : null,
              _l3 = _t22.__parent !== o.__parent || _s7 !== _i8,
              _c5 = null !== _i8 && _r11.parentElement !== n.element;
            if (_l3 || _c5) return (n.insertChild(_r11), pe(e, n.element));
          }
        }
      }
      var r = Gt.$createDOM(o, At);
      if (
        ((function (t, e, n) {
          var o = n._keyToDOMMap;
          (ai(e, n, t), o.set(t, e));
        })(e, r, At),
        Ko(o)
          ? r.setAttribute("data-lexical-text", "true")
          : fs(o) &&
            (r.setAttribute("data-lexical-decorator", "true"),
            Pl(r, { captureSelection: !0 })),
        cs(o))
      ) {
        var _t23 = o.__indent,
          _e30 = o.__size;
        (oe(r, o), 0 !== _t23 && ee(r, _t23));
        var _n22 = le(o),
          _s8 = _n22.size > 0 ? ie(o, r, _n22) : "";
        if (0 === _e30)
          ((r.__lexicalTextContent = _s8),
            (r.__lexicalFirstTextKey = null),
            (Dt += _s8),
            _n22.size > 0 && (r.__lexicalSlotTextLength = _s8.length));
        else {
          var _t24 = Dt,
            _i9 = _e30 - 1;
          if ((de(Ul(o, Ht), o, 0, _i9, vl(o, r, At)), "" !== _s8)) {
            var _e31 = r.__lexicalTextContent || "";
            ((r.__lexicalTextContent = _s8 + _e31), (Dt = _t24 + _s8 + _e31));
          }
          _n22.size > 0 && (r.__lexicalSlotTextLength = _s8.length);
        }
        var _i0 = o.__format;
        (0 !== _i0 && ne(r, _i0), o.isInline() || he(null, o, r));
      } else {
        var _t25 = o.getTextContent();
        if (fs(o)) {
          var _t26 = o.decorate(At, Mt);
          (null !== _t26 && ye(e, _t26), (r.contentEditable = "false"));
          var _n23 = le(o);
          _n23.size > 0 && ie(o, r, _n23);
        }
        Dt += _t25;
      }
      return (
        null !== n && n.insertChild(r),
        Gt.$decorateDOM(o, null, r, At),
        Ot(o),
        wi(Jt, wt, Kt, o, "created"),
        r
      );
    }
    function de(e, n, o, r, s) {
      var i = Dt,
        l = Rt();
      ((Dt = ""), (It = null), (Pt = null), (Ft = null));
      var c = o;
      for (; c <= r; ++c) {
        var _t27 = Rt();
        fe(e[c], s);
        var _n24 = Ht.get(e[c]);
        (null !== _n24 && Ko(_n24)
          ? null === It &&
            ((It = _n24.getFormat()), (Pt = _n24.getStyle()), (Ft = _n24.__key))
          : cs(_n24) && c < r && !_n24.isInline() && (Dt += v),
          Lt(_t27));
      }
      var a = At._keyToDOMMap.get(n.__key);
      (void 0 === a && t(349, n.__key),
        (a.__lexicalTextContent = Dt),
        (a.__lexicalFirstTextKey = Ft),
        (Dt = i + Dt),
        Lt(l));
    }
    function he(t, e, n) {
      var _o$element$__lexicalL;
      var o = vl(e, n, At),
        r =
          (_o$element$__lexicalL = o.element.__lexicalLastChildKind) != null
            ? _o$element$__lexicalL
            : null,
        s = (function (t, e) {
          if (t) {
            var _n25 = t.__last;
            if (_n25) {
              var _t28 = e.get(_n25);
              if (_t28)
                return Ns(_t28)
                  ? "line-break"
                  : fs(_t28) && _t28.isInline()
                    ? "decorator"
                    : null;
            }
            return le(t).size > 0 ? null : "empty";
          }
          return null;
        })(e, Ht);
      r !== s && o.setManagedLineBreak(s);
    }
    function ge(e, n, o) {
      var r;
      ((It = null),
        (Pt = null),
        (Ft = null),
        (function (e, n, o) {
          var r = Dt,
            s = e.__size,
            i = n.__size;
          Dt = "";
          var l = o.element,
            c = At._keyToDOMMap.get(n.__key);
          void 0 === c && t(351, n.__key);
          var a = i - s;
          if (
            !Vt &&
            Math.abs(a) <= 1 &&
            s >= bt &&
            e.__first === n.__first &&
            (0 !== a || !At._cloneNotNeeded.has(e.__key))
          ) {
            var _s9 = c.__lexicalTextContent,
              _u2 = Yt.get(e.__key);
            if (!Vt && "string" == typeof _s9 && void 0 !== _u2) {
              var _i1 = (function (t, e) {
                var n = e.size;
                if (0 === n || n >= t.__size) return null;
                var o = t.__last,
                  r = null,
                  s = 0;
                for (; null !== o && s < n; ) {
                  if (!e.has(o)) return null;
                  r = o;
                  var _t29 = Ht.get(o);
                  if (void 0 === _t29) return null;
                  ((o = _t29.__prev), s++);
                }
                if (s !== n) return null;
                if (null !== o && e.has(o)) return null;
                return r;
              })(n, _u2);
              if (null !== _i1) {
                var _f2 = _u2.size;
                if (0 === a) {
                  var _e32 = Et(_i1, _f2);
                  var _o14 = _i1,
                    _a = 0;
                  for (; null !== _o14 && _a < _f2; ) {
                    var _t30 = Ht.get(_o14);
                    if (void 0 === _t30) break;
                    var _e33 = Rt();
                    (pe(_o14, l),
                      Ko(_t30) &&
                        null === It &&
                        ((It = _t30.getFormat()),
                        (Pt = _t30.getStyle()),
                        (Ft = _t30.__key)),
                      Lt(_e33),
                      (_o14 = _t30.__next),
                      _a++);
                  }
                  var _d2 = "";
                  for (_o14 = _i1, _a = 0; null !== _o14 && _a < _f2; ) {
                    var _e34 = Ht.get(_o14);
                    if (void 0 === _e34) break;
                    var _n26 = void 0;
                    if (cs(_e34)) {
                      var _r12 = At._keyToDOMMap.get(_o14),
                        _s0 = _r12 && _r12.__lexicalTextContent;
                      ("string" != typeof _s0 && t(352, _e34.getType()),
                        (_n26 = _s0));
                    } else _n26 = _e34.getTextContent();
                    ((_d2 += _n26),
                      _a < _f2 - 1 &&
                        cs(_e34) &&
                        !_e34.isInline() &&
                        (_d2 += v),
                      (_o14 = _e34.__next),
                      _a++);
                  }
                  var _h2 = c.__lexicalSlotTextLength || 0,
                    _g2 = _h2 > 0 ? _s9.slice(_h2) : _s9,
                    _3 = _g2.slice(0, _g2.length - _e32) + _d2;
                  return (
                    (c.__lexicalTextContent = _3),
                    (Dt = r + _3),
                    void _e(n, c, _u2)
                  );
                }
                if (
                  (function (e, n, o, r, s, i, l, c) {
                    if (1 !== c && -1 !== c) return !1;
                    var a = 1 === c ? 2 : 1;
                    if (l !== a) return !1;
                    var u = l - c;
                    var f = e.__last;
                    for (var _t31 = 0; _t31 < u - 1; _t31++) {
                      if (null === f) return !1;
                      var _t32 = Wt.get(f);
                      if (void 0 === _t32) return !1;
                      f = _t32.__prev;
                    }
                    if (null === f) return !1;
                    var d = Ht.get(i),
                      h = Wt.get(f);
                    if (void 0 === d || void 0 === h) return !1;
                    if (d.__prev !== h.__prev) return !1;
                    var g = [];
                    var _ = i;
                    for (var _t33 = 0; _t33 < l; _t33++) {
                      if (null === _) return !1;
                      g.push(_);
                      var _t34 = Ht.get(_);
                      _ = _t34 ? _t34.__next : null;
                    }
                    var p = [];
                    _ = f;
                    for (var _t35 = 0; _t35 < u; _t35++) {
                      if (null === _) return !1;
                      p.push(_);
                      var _t36 = Wt.get(_);
                      _ = _t36 ? _t36.__next : null;
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
                    var N = Et(f, u);
                    for (var _t37 of x) {
                      var _e35 = Rt();
                      if ("reconcile" === _t37.kind) pe(_t37.key, o.element);
                      else if ("destroy" === _t37.kind) Xt(_t37.key, o.element);
                      else {
                        var _e36 = null;
                        for (var _n27 = _t37.nextIndex + 1; _n27 < l; _n27++) {
                          var _t38 = At._keyToDOMMap.get(g[_n27]);
                          if (void 0 !== _t38) {
                            _e36 = _t38;
                            break;
                          }
                        }
                        fe(
                          _t37.key,
                          o.withBefore(_e36 != null ? _e36 : o.before),
                        );
                      }
                      if ("destroy" !== _t37.kind) {
                        var _e37 = Ht.get(_t37.key);
                        _e37 &&
                          Ko(_e37) &&
                          null === It &&
                          ((It = _e37.getFormat()),
                          (Pt = _e37.getStyle()),
                          (Ft = _e37.__key));
                      }
                      Lt(_e35);
                    }
                    var T = "";
                    for (var _e38 = 0; _e38 < l; _e38++) {
                      var _n28 = Ht.get(g[_e38]);
                      if (void 0 === _n28) return !1;
                      var _o15 = void 0;
                      if (cs(_n28)) {
                        var _r13 = At._keyToDOMMap.get(g[_e38]),
                          _s1 = _r13 && _r13.__lexicalTextContent;
                        ("string" != typeof _s1 && t(350, _n28.getType()),
                          (_o15 = _s1));
                      } else _o15 = _n28.getTextContent();
                      ((T += _o15),
                        _e38 < l - 1 &&
                          cs(_n28) &&
                          !_n28.isInline() &&
                          (T += v));
                    }
                    var k = r.__lexicalSlotTextLength || 0,
                      E = k > 0 ? s.slice(k) : s;
                    return (
                      (r.__lexicalTextContent = E.slice(0, E.length - N) + T),
                      !0
                    );
                  })(e, 0, o, c, _s9, _i1, _f2, a)
                ) {
                  var _e39 = c.__lexicalTextContent;
                  return (
                    "string" != typeof _e39 && t(353),
                    (Dt = r + _e39),
                    void _e(n, c, _u2)
                  );
                }
              }
            }
            if (0 === a) {
              var _n29 = e.__first,
                _o16 = 0;
              for (; null !== _n29; ) {
                var _e40 = Ht.get(_n29);
                if (void 0 === _e40) break;
                var _r14 = Vt || Bt.has(_n29) || zt.has(_n29),
                  _s10 = Rt();
                if (_r14) pe(_n29, l);
                else {
                  var _o17 = void 0,
                    _r15 = void 0;
                  if (cs(_e40)) {
                    _r15 = jt.get(_n29);
                    var _s11 = _r15 && _r15.__lexicalTextContent;
                    ("string" != typeof _s11 && t(354, _e40.getType()),
                      (_o17 = _s11));
                  } else _o17 = _e40.getTextContent();
                  ((Dt += _o17), void 0 !== _r15 && $t(_r15));
                }
                (Ko(_e40)
                  ? null === It &&
                    ((It = _e40.getFormat()),
                    (Pt = _e40.getStyle()),
                    (Ft = _e40.__key))
                  : cs(_e40) && _o16 < i - 1 && !_e40.isInline() && (Dt += v),
                  Lt(_s10),
                  (_n29 = _e40.__next),
                  _o16++);
              }
              return (
                (c.__lexicalTextContent = Dt),
                (c.__lexicalFirstTextKey = Ft),
                void (Dt = r + Dt)
              );
            }
          }
          if (1 === s && 1 === i) {
            var _t39 = e.__first,
              _r16 = n.__first;
            if (_t39 === _r16) pe(_t39, l);
            else {
              var _e41 = Se(_t39),
                _n30 = fe(_r16, null);
              try {
                _e41.parentNode === l
                  ? l.replaceChild(_n30, _e41)
                  : o.insertChild(_n30);
              } catch (o) {
                if ("object" == typeof o && null != o) {
                  var _s12 =
                    o.toString() +
                    " Parent: " +
                    l.tagName +
                    ", new child: {tag: " +
                    _n30.tagName +
                    " key: " +
                    _r16 +
                    "}, old child: {tag: " +
                    _e41.tagName +
                    ", key: " +
                    _t39 +
                    "}.";
                  throw new Error(_s12);
                }
                throw o;
              }
              Xt(_t39, null);
            }
            var _s13 = Ht.get(_r16);
            Ko(_s13) &&
              null === It &&
              ((It = _s13.getFormat()),
              (Pt = _s13.getStyle()),
              (Ft = _s13.__key));
          } else {
            var _r17 = Ul(e, Wt),
              _c6 = Ul(n, Ht);
            if (
              (_r17.length !== s && t(227), _c6.length !== i && t(228), 0 === s)
            )
              0 !== i && de(_c6, n, 0, i - 1, o);
            else if (0 === i) {
              if (0 !== s) {
                var _t40 =
                  null == o.after &&
                  null == o.before &&
                  0 === le(n).size &&
                  null == o.element.__lexicalLineBreak;
                (Qt(_r17, 0, s - 1, _t40 ? null : l),
                  _t40 && (l.textContent = ""));
              }
            } else
              !(function (t, e, n, o, r, s) {
                var i = o - 1,
                  l = r - 1;
                var c,
                  a,
                  u = s.getFirstChild(),
                  f = 0,
                  d = 0;
                for (; f <= i && d <= l; ) {
                  var _t41 = e[f],
                    _o18 = n[d],
                    _r18 = Rt();
                  if (_t41 === _o18) ((u = me(pe(_o18, s.element))), f++, d++);
                  else {
                    if ((void 0 === a && (a = xe(n, d)), void 0 === c))
                      c = xe(e, f);
                    else if (!c.has(_t41)) {
                      (f++, Lt(_r18));
                      continue;
                    }
                    if (!a.has(_t41)) {
                      ((u = me(Se(_t41))),
                        Xt(_t41, s.element),
                        f++,
                        c["delete"](_t41),
                        Lt(_r18));
                      continue;
                    }
                    if (c.has(_o18)) {
                      var _t42 = Ri(At, _o18);
                      (_t42 !== u &&
                        s
                          .withBefore(u != null ? u : s.before)
                          .insertChild(_t42),
                        (u = me(pe(_o18, s.element))),
                        f++,
                        d++);
                    } else
                      (fe(_o18, s.withBefore(u != null ? u : s.before)), d++);
                  }
                  var _i10 = Ht.get(_o18);
                  (null !== _i10 && Ko(_i10)
                    ? null === It &&
                      ((It = _i10.getFormat()),
                      (Pt = _i10.getStyle()),
                      (Ft = _i10.__key))
                    : cs(_i10) && d <= l && !_i10.isInline() && (Dt += v),
                    Lt(_r18));
                }
                var h = f > i,
                  g = d > l;
                if (h && !g) {
                  var _e42 = n[l + 1],
                    _o19 = void 0 === _e42 ? null : At.getElementByKey(_e42);
                  de(n, t, d, l, s.withBefore(_o19 != null ? _o19 : s.before));
                } else g && !h && Qt(e, f, i, s.element);
              })(n, _r17, _c6, s, i, o);
          }
          ((c.__lexicalTextContent = Dt),
            (c.__lexicalFirstTextKey = Ft),
            (Dt = r + Dt));
        })(e, n, vl(n, o, At)),
        Yi(n) ||
          ((r = n),
          null == It || It === r.__textFormat || qt || r.setTextFormat(It),
          (function (t) {
            null == Pt || Pt === t.__textStyle || qt || t.setTextStyle(Pt);
          })(n)));
    }
    function _e(t, e, n) {
      var o = e.__lexicalFirstTextKey;
      if (null != o) {
        var _e43 = t.__key;
        var _r19 = o;
        for (; null !== _r19; ) {
          var _t43 = Ht.get(_r19);
          if (void 0 === _t43) {
            _r19 = null;
            break;
          }
          if (_t43.__parent === _e43) break;
          _r19 = _t43.__parent;
        }
        if (null !== _r19 && !n.has(_r19)) {
          var _t44 = Ht.get(o);
          if (Ko(_t44))
            return ((It = _t44.getFormat()), void (Pt = _t44.getStyle()));
        }
      }
      e.__lexicalFirstTextKey = Ft;
    }
    function pe(e, n) {
      var o = Wt.get(e);
      var r = Ht.get(e);
      (void 0 !== o && void 0 !== r) || t(61);
      var s = Vt || Bt.has(e) || zt.has(e),
        i = Ri(At, e);
      if (o === r && !s) {
        var _e44;
        if (cs(o)) {
          var _n31 = i.__lexicalTextContent;
          ("string" != typeof _n31 && t(355, o.getType()),
            (_e44 = _n31),
            $t(i));
        } else _e44 = o.getTextContent();
        return ((Dt += _e44), i);
      }
      if (
        (o !== r && s && wi(Jt, wt, Kt, r, "updated"),
        Gt.$updateDOM(r, o, i, At))
      ) {
        var _o20 = fe(e, null);
        return (
          null === n && t(62),
          n.replaceChild(_o20, i),
          Xt(e, null),
          _o20
        );
      }
      if (cs(o)) {
        cs(r) || t(334, e);
        var _n32 = r.__indent;
        (Vt || _n32 !== o.__indent) && ee(i, _n32);
        var _l4 = r.__format;
        (Vt || _l4 !== o.__format) && ne(i, _l4);
        var _c7 = s && (le(r).size > 0 || le(o).size > 0) ? ue(o, r, i) : "";
        if (s) {
          var _t45 = Dt;
          if ((ge(o, r, i), hs(r) || r.isInline() || he(0, r, i), "" !== _c7)) {
            var _e45 = i.__lexicalTextContent || "";
            ((i.__lexicalTextContent = _c7 + _e45),
              (Dt = _t45 + _c7 + _e45),
              (i.__lexicalSlotTextLength = _c7.length));
          } else
            (le(r).size > 0 || le(o).size > 0) &&
              (i.__lexicalSlotTextLength = 0);
        } else {
          var _e46 = i.__lexicalTextContent;
          ("string" != typeof _e46 && t(356, o.getType()), (Dt += _e46), $t(i));
        }
        if (
          (Vt || r.__dir !== o.__dir || r.__parent !== o.__parent) &&
          (oe(i, r), hs(r) && !Vt)
        )
          for (var _t46 of r.getChildren())
            if (cs(_t46)) {
              oe(Ri(At, _t46.getKey()), _t46);
            }
      } else {
        var _t47 = r.getTextContent();
        if (fs(r)) {
          var _t48 = r.decorate(At, Mt);
          (null !== _t48 && ye(e, _t48),
            s && (le(r).size > 0 || le(o).size > 0) && ue(o, r, i));
        }
        Dt += _t47;
      }
      if (!qt && hs(r)) {
        var _t49 = r.getLatest();
        if (_t49.__cachedText !== Dt) {
          var _e47 = _t49.getWritable();
          ((_e47.__cachedText = Dt), (r = _e47));
        }
      }
      return (Gt.$decorateDOM(r, o, i, At), Ot(r), i);
    }
    function ye(t, e) {
      var n = At._pendingDecorators;
      var o = At._decorators;
      if (null === n) {
        if (o[t] === e) return;
        n = di(At);
      }
      n[t] = e;
    }
    function me(t) {
      var e = t.nextSibling;
      return (
        null !== e && e === At._blockCursorElement && (e = e.nextSibling),
        e
      );
    }
    function xe(t, e) {
      var n = new Set();
      for (var _o21 = e; _o21 < t.length; _o21++) n.add(t[_o21]);
      return n;
    }
    function Ce(t, e, n, o, r, s) {
      ((Dt = ""),
        (It = null),
        (Pt = null),
        (Ft = null),
        (Vt = 2 === o),
        (At = n),
        (Mt = n._config),
        (Gt = n._config.dom || Ps),
        (wt = n._nodes),
        (Kt = At._listeners.mutation),
        (zt = r),
        (Bt = s),
        (Wt = t._nodeMap),
        (Ut = t),
        (Ht = e._nodeMap),
        (qt = e._readOnly),
        (jt = J(n._keyToDOMMap)),
        (Yt = (function () {
          var t = new Map(),
            e = function e(_e49) {
              for (var _n33 of _e49) {
                var _e48 = Ht.get(_n33);
                if (void 0 === _e48) continue;
                var _o22 = _e48.__parent;
                if (null === _o22) continue;
                var _r20 = t.get(_o22);
                (void 0 === _r20 && ((_r20 = new Set()), t.set(_o22, _r20)),
                  _r20.add(_n33));
              }
            };
          return (e(zt.keys()), e(Bt), t);
        })()));
      var i = new Map();
      return (
        (Jt = i),
        pe("root", null),
        (At = void 0),
        (wt = void 0),
        (zt = void 0),
        (Bt = void 0),
        (Wt = void 0),
        (Ut = void 0),
        (Ht = void 0),
        (Mt = void 0),
        (jt = void 0),
        (Yt = void 0),
        (Jt = void 0),
        (Gt = Ps),
        i
      );
    }
    function Se(e) {
      var n = jt.get(e);
      return (void 0 === n && t(75, e), n);
    }
    function Ne(t) {
      return { type: t };
    }
    var Te = Ne("SELECTION_CHANGE_COMMAND"),
      ve = Ne("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"),
      ke = Ne("CLICK_COMMAND"),
      Ee = Ne("BEFORE_INPUT_COMMAND"),
      Oe = Ne("INPUT_COMMAND"),
      be = Ne("COMPOSITION_START_COMMAND"),
      Me = Ne("COMPOSITION_END_COMMAND"),
      Ae = Ne("DELETE_CHARACTER_COMMAND"),
      we = Ne("INSERT_LINE_BREAK_COMMAND"),
      De = Ne("INSERT_PARAGRAPH_COMMAND"),
      Ie = Ne("CONTROLLED_TEXT_INSERTION_COMMAND"),
      Pe = Ne("PASTE_COMMAND"),
      Fe = Ne("REMOVE_TEXT_COMMAND"),
      Re = Ne("DELETE_WORD_COMMAND"),
      Le = Ne("DELETE_LINE_COMMAND"),
      $e = Ne("FORMAT_TEXT_COMMAND"),
      Ke = Ne("UNDO_COMMAND"),
      ze = Ne("REDO_COMMAND"),
      Be = Ne("KEYDOWN_COMMAND"),
      We = Ne("KEY_ARROW_RIGHT_COMMAND"),
      Ue = Ne("MOVE_TO_END"),
      He = Ne("KEY_ARROW_LEFT_COMMAND"),
      je = Ne("MOVE_TO_START"),
      Ye = Ne("KEY_ARROW_UP_COMMAND"),
      Je = Ne("KEY_ARROW_DOWN_COMMAND"),
      Ge = Ne("KEY_ENTER_COMMAND"),
      Ve = Ne("KEY_SPACE_COMMAND"),
      qe = Ne("KEY_BACKSPACE_COMMAND"),
      Xe = Ne("KEY_ESCAPE_COMMAND"),
      Qe = Ne("KEY_DELETE_COMMAND"),
      Ze = Ne("KEY_TAB_COMMAND"),
      tn = Ne("INSERT_TAB_COMMAND"),
      en = Ne("INDENT_CONTENT_COMMAND"),
      nn = Ne("OUTDENT_CONTENT_COMMAND"),
      on = Ne("DROP_COMMAND"),
      rn = Ne("FORMAT_ELEMENT_COMMAND"),
      sn = Ne("DRAGSTART_COMMAND"),
      ln = Ne("DRAGOVER_COMMAND"),
      cn = Ne("DRAGEND_COMMAND"),
      an = Ne("COPY_COMMAND"),
      un = Ne("CUT_COMMAND"),
      fn = Ne("SELECT_ALL_COMMAND"),
      dn = Ne("CLEAR_EDITOR_COMMAND"),
      hn = Ne("CLEAR_HISTORY_COMMAND"),
      gn = Ne("CAN_REDO_COMMAND"),
      _n = Ne("CAN_UNDO_COMMAND"),
      pn = Ne("FOCUS_COMMAND"),
      yn = Ne("BLUR_COMMAND"),
      mn = Ne("KEY_MODIFIER_COMMAND"),
      xn = Object.freeze({}),
      Cn = [
        [
          "keydown",
          function (t, e) {
            ((Sn = t.timeStamp), (Nn = t.key), "Backspace" !== t.key && Hn());
            if (e.isComposing()) return;
            Fi(e, Be, t);
          },
        ],
        [
          "pointerdown",
          function (t, e) {
            var n = hl(t),
              o = t.pointerType;
            _l(n) &&
              "touch" !== o &&
              "pen" !== o &&
              0 === t.button &&
              ss(e, function () {
                Ll(n, e) || (An = !0);
              });
          },
        ],
        [
          "compositionstart",
          function (t, e) {
            Fi(e, be, t);
          },
        ],
        [
          "compositionend",
          function (t, e) {
            s
              ? (Dn = !0)
              : l || (!a && !d)
                ? Fi(e, Me, t)
                : ((In = !0), (Pn = t.data));
          },
        ],
        [
          "input",
          function (t, e) {
            (t.stopPropagation(),
              Hn(),
              ss(
                e,
                function () {
                  e.dispatchCommand(Oe, t);
                },
                { event: t },
              ),
              (vn = null));
          },
        ],
        [
          "click",
          function (t, e) {
            ss(e, function () {
              var n = _r(),
                o = Zi(Ui(e)),
                r = pr();
              if (o)
                if (Vo(n)) {
                  var _t50 = n.anchor,
                    _e50 = _t50.getNode();
                  "element" === _t50.type &&
                    0 === _t50.offset &&
                    n.isCollapsed() &&
                    !hs(_e50) &&
                    1 === gi().getChildrenSize() &&
                    _e50.getTopLevelElementOrThrow().isEmpty() &&
                    null !== r &&
                    n.is(r) &&
                    (o.removeAllRanges(), (n.dirty = !0));
                } else if (
                  "touch" === t.pointerType ||
                  "pen" === t.pointerType
                ) {
                  var _n34 = ll(o, e._rootElement).anchorNode;
                  if (gl(_n34) || Xs(_n34)) {
                    _i(gr(r, o, e, t));
                  }
                }
              Fi(e, ke, t);
            });
          },
        ],
        ["cut", xn],
        ["copy", xn],
        ["dragstart", xn],
        ["dragover", xn],
        ["dragend", xn],
        ["paste", xn],
        ["focus", xn],
        ["blur", xn],
        ["drop", xn],
      ];
    i &&
      Cn.push([
        "beforeinput",
        function (t, e) {
          return (function (t, e) {
            var n = t.inputType;
            if ("deleteCompositionText" === n || (s && Pi(e))) return;
            if ("insertCompositionText" === n) return;
            Fi(e, Ee, t);
          })(t, e);
        },
      ]);
    var Sn = 0,
      Nn = null,
      Tn = 0,
      vn = null,
      kn = !1,
      En = null;
    var On = new WeakMap(),
      bn = new WeakMap();
    var Mn = !1,
      An = !1,
      wn = !1,
      Dn = !1,
      In = !1,
      Pn = "",
      Fn = null,
      Rn = [0, "", 0, "root", 0];
    function Ln(t, e, n, o, r, s) {
      var l = t.anchor,
        c = t.focus,
        a = l.getNode(),
        u = Hr();
      var f;
      if (void 0 !== s) f = s;
      else {
        var _t51 = Zi(Ui(u));
        f = null !== _t51 ? ll(_t51, u._rootElement) : null;
      }
      var d = null !== f ? f.anchorNode : null,
        h = l.key,
        g = u.getElementByKey(h),
        _ = n.length;
      return (
        h !== c.key ||
        !Ko(a) ||
        (((!r && (!i || Tn < o + 50)) || (a.isDirty() && _ < 2) || yi(n)) &&
          l.offset !== c.offset &&
          !a.isComposing()) ||
        qs(a) ||
        (a.isDirty() && _ > 1) ||
        ((r || !i) && null !== g && !a.isComposing() && d !== El(a, g, u)) ||
        (null !== f &&
          null !== e &&
          (!e.collapsed ||
            e.startContainer !== f.anchorNode ||
            e.startOffset !== f.anchorOffset)) ||
        (!a.isComposing() &&
          (a.getFormat() !== t.format || a.getStyle() !== t.style)) ||
        (function (t, e) {
          if (e.isSegmented()) return !0;
          if (!t.isCollapsed()) return !1;
          var n = t.anchor.offset,
            o = e.getParentOrThrow(),
            r = Vs(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!o.canInsertTextBefore() && !e.isComposing()) ||
                r ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (Ko(e) || (cs(e) && e.isInline())) &&
                    !e.canInsertTextAfter()
                  );
                })(e)
            : n === e.getTextContentSize() &&
                (!e.canInsertTextAfter() ||
                  (!o.canInsertTextAfter() && !e.isComposing()) ||
                  r);
        })(t, a)
      );
    }
    function $n(t, e) {
      return (
        Xs(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function Kn(e, n, o) {
      var _ll = ll(e, n._rootElement),
        r = _ll.anchorNode,
        s = _ll.anchorOffset,
        i = _ll.focusNode,
        l = _ll.focusOffset;
      (Mn && ((Mn = !1), $n(r, s) && $n(i, l) && !Fn)) ||
        ss(n, function () {
          if (!o) return void _i(null);
          if (!js(n, r, i)) return;
          var c = _r();
          if (Fn && Vo(c) && c.isCollapsed()) {
            var _t52 = c.anchor,
              _e51 = Fn.anchor;
            ((_t52.key === _e51.key && _t52.offset === _e51.offset + 1) ||
              (1 === _t52.offset &&
                _e51.getNode().is(_t52.getNode().getPreviousSibling()))) &&
              ((c = Fn.clone()), _i(c));
          }
          if (((Fn = null), Vo(c))) {
            var _o23 = c.anchor,
              _a2 = _o23.getNode();
            if (c.isCollapsed()) {
              "Range" === e.type && r === i && (c.dirty = !0);
              var _s14 = Ui(n).event,
                _l5 = _s14 ? _s14.timeStamp : performance.now(),
                _Rn = Rn,
                _u3 = _Rn[0],
                _f3 = _Rn[1],
                _d3 = _Rn[2],
                _h3 = _Rn[3],
                _g3 = _Rn[4],
                _4 = gi(),
                _p2 = !1 === n.isComposing() && "" === _4.getTextContent();
              if (_l5 < _g3 + 200 && _o23.offset === _d3 && _o23.key === _h3)
                zn(c, _u3, _f3);
              else if ("text" === _o23.type) (Ko(_a2) || t(141), Bn(c, _a2));
              else if ("element" === _o23.type && !_p2) {
                cs(_a2) || t(259);
                var _e52 = _o23.getNode();
                _e52.isEmpty()
                  ? (function (t, e) {
                      var n = e.getTextFormat(),
                        o = e.getTextStyle();
                      zn(t, n, o);
                    })(c, _e52)
                  : zn(c, c.format, "");
              }
            } else {
              var _t53 = _o23.key,
                _e53 = c.focus.key,
                _n35 = c.getNodes(),
                _r21 = _n35.length,
                _i11 = c.isBackward(),
                _a3 = _i11 ? l : s,
                _u4 = _i11 ? s : l,
                _f4 = _i11 ? _e53 : _t53,
                _d4 = _i11 ? _t53 : _e53;
              var _h4 = 2047,
                _g4 = !1;
              for (var _t54 = 0; _t54 < _r21; _t54++) {
                var _e54 = _n35[_t54],
                  _o24 = _e54.getTextContentSize();
                if (
                  Ko(_e54) &&
                  0 !== _o24 &&
                  !(
                    (0 === _t54 && _e54.__key === _f4 && _a3 === _o24) ||
                    (_t54 === _r21 - 1 && _e54.__key === _d4 && 0 === _u4)
                  ) &&
                  ((_g4 = !0), (_h4 &= _e54.getFormat()), 0 === _h4)
                )
                  break;
              }
              c.format = _g4 ? _h4 : 0;
            }
          }
          Fi(n, Te, void 0);
        });
    }
    function zn(t, e, n) {
      (t.format === e && t.style === n) ||
        ((t.format = e), (t.style = n), (t.dirty = !0));
    }
    function Bn(t, e) {
      zn(t, e.getFormat(), e.getStyle());
    }
    function Wn(t) {
      if (!t.getTargetRanges) return null;
      var e = t.getTargetRanges();
      return 0 === e.length ? null : e[0];
    }
    function Un(t) {
      if (null == t || t.length <= 1 || null == Nn) return;
      var e =
        1 === Nn.length
          ? Nn
          : "Enter" === Nn
            ? "\n"
            : "Tab" === Nn
              ? "\t"
              : null;
      if (!e) return;
      var n = _r();
      if (!Vo(n) || !n.isCollapsed()) return;
      var o = n.anchor.getNode();
      if (!Ko(o)) return;
      var r = n.anchor.offset;
      if (o.getTextContentSize() === r) {
        var _t55 = o.getNextSibling();
        if ("\n" === e) {
          if (Ns(_t55)) _t55.selectEnd();
          else if (!_t55) {
            var _t56 = Wl(o, ur),
              _e55 = _t56 && _t56.getNextSibling();
            cs(_e55) && _e55.selectStart();
          }
        } else
          "\t" === e
            ? Uo(_t55) && _t55.selectEnd()
            : Ko(_t55) && _t55.getTextContent()[0] === e && _t55.select(1, 1);
      } else o.getTextContent()[r] === e && o.select(r + 1, r + 1);
    }
    function Hn() {
      ((kn = !1), null !== En && (clearTimeout(En), (En = null)));
    }
    function jn() {
      (Hn(), (kn = !0), (En = setTimeout(Hn, 0)));
    }
    function Yn(e) {
      var _ref23;
      var n = e.inputType,
        o = Wn(e),
        r = Hr(),
        s = _r();
      if ("insertText" === n && e.data && kn) {
        if ((Hn(), e.preventDefault(), Vo(s) && !s.isCollapsed())) {
          var _t57 = s.isBackward() ? s.anchor : s.focus;
          (s.anchor.set(_t57.key, _t57.offset, _t57.type),
            s.focus.set(_t57.key, _t57.offset, _t57.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === s) {
          var _t58 = pr();
          if (!Vo(_t58)) return !0;
          _i(_t58.clone());
        }
        if (Vo(s)) {
          var _n36 = s.anchor.key === s.focus.key;
          if (
            ((i = e.timeStamp),
            "MediaLast" === Nn && i < Sn + 30 && r.isComposing() && _n36)
          ) {
            if (
              (si(null),
              (Sn = 0),
              setTimeout(function () {
                ss(r, function () {
                  si(null);
                });
              }, 30),
              Vo(s))
            ) {
              var _e56 = s.anchor.getNode();
              (_e56.markDirty(), Ko(_e56) || t(142), Bn(s, _e56));
            }
          } else {
            if (
              (si(null),
              l &&
                null !== o &&
                !o.collapsed &&
                (s.applyDOMRange(o), !s.isCollapsed()))
            )
              return (e.preventDefault(), s.removeText(), !0);
            e.preventDefault();
            var _t59 = s.anchor.getNode(),
              _i12 = _t59.getTextContent(),
              _c8 = _t59.canInsertTextAfter(),
              _a4 = 0 === s.anchor.offset && s.focus.offset === _i12.length;
            var _u5 = f && _n36 && !_a4 && _c8;
            if (
              (_u5 && s.isCollapsed() && (_u5 = !fs(Ii(s.anchor, !0))), !_u5)
            ) {
              Fi(r, Ae, !0);
              var _t60 = _r();
              f &&
                Vo(_t60) &&
                _t60.isCollapsed() &&
                ((Fn = _t60),
                setTimeout(function () {
                  return (Fn = null);
                }));
            }
          }
          return !0;
        }
      }
      var i;
      if (!Vo(s)) return !0;
      var c = e.data;
      (null !== vn && Si(!1, r, vn),
        (s.dirty && null === vn) ||
          !s.isCollapsed() ||
          hs(s.anchor.getNode()) ||
          null === o ||
          s.applyDOMRange(o),
        (vn = null));
      var a = s.anchor,
        u = s.focus,
        d = a.getNode(),
        h = u.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === c) (e.preventDefault(), Fi(r, we, !1));
        else if (c === v) (e.preventDefault(), Fi(r, De, void 0));
        else if (null == c && e.dataTransfer) {
          var _t61 = e.dataTransfer.getData("text/plain");
          (e.preventDefault(), s.insertRawText(_t61));
        } else
          null != c && Ln(s, o, c, e.timeStamp, !0)
            ? (e.preventDefault(), Fi(r, Ie, c), Un(c))
            : (vn = c);
        return ((Tn = e.timeStamp), !0);
      }
      switch ((e.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          Fi(r, Ie, e);
          Un(
            (_ref23 = e.dataTransfer
              ? e.dataTransfer.getData("text/plain")
              : null) != null
              ? _ref23
              : e.data,
          );
          break;
        case "insertFromComposition":
          (si(null), Fi(r, Ie, e));
          break;
        case "insertLineBreak":
          (si(null), Fi(r, we, !1));
          break;
        case "insertParagraph":
          (si(null), wn && !l ? ((wn = !1), Fi(r, we, !1)) : Fi(r, De, void 0));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          Fi(r, Pe, e);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || cs(t) || cs(e) || !Vs(t) || !Vs(e);
          })(d, h) && Fi(r, Fe, e);
          break;
        case "deleteByDrag":
          (Ki(po), Fi(r, Fe, e));
          break;
        case "deleteByCut":
          Fi(r, Fe, e);
          break;
        case "deleteContent":
          Fi(r, Ae, !1);
          break;
        case "deleteWordBackward":
          Fi(r, Re, !0);
          break;
        case "deleteWordForward":
          Fi(r, Re, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          Fi(r, Le, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          Fi(r, Le, !1);
          break;
        case "formatStrikeThrough":
          Fi(r, $e, "strikethrough");
          break;
        case "formatBold":
          Fi(r, $e, "bold");
          break;
        case "formatItalic":
          Fi(r, $e, "italic");
          break;
        case "formatUnderline":
          Fi(r, $e, "underline");
          break;
        case "historyUndo":
          Fi(r, Ke, void 0);
          break;
        case "historyRedo":
          Fi(r, ze, void 0);
      }
      return !0;
    }
    function Jn(t) {
      var e = Hr(),
        n = hl(t);
      if (gl(n) && Ll(n, e)) return !0;
      var o = _r(),
        r = t.data,
        l = Wn(t);
      var c = !1;
      if (null != r && Vo(o)) {
        var _n37 = Zi(Ui(e)),
          _a5 = null !== _n37 ? ll(_n37, e._rootElement) : null;
        if (Ln(o, l, r, t.timeStamp, !1, _a5)) {
          ((c = !0), Dn && (qn(e, r), (Dn = !1)));
          var _l6 = o.anchor.getNode();
          if (null === _n37 || null === _a5) return !0;
          var _u6 = o.isBackward(),
            _d5 = _u6 ? o.anchor.offset : o.focus.offset,
            _h5 = _u6 ? o.focus.offset : o.anchor.offset;
          (i &&
            !o.isCollapsed() &&
            Ko(_l6) &&
            null !== _a5.anchorNode &&
            _l6.getTextContent().slice(0, _d5) +
              r +
              _l6.getTextContent().slice(_d5 + _h5) ===
              Ci(_a5.anchorNode)) ||
            Fi(e, Ie, r);
          var _g5 = r.length;
          (s &&
            _g5 > 1 &&
            "insertCompositionText" === t.inputType &&
            !e.isComposing() &&
            ((o.anchor.offset -= _g5),
            (o._cachedNodes = null),
            (o._cachedIsBackward = null)),
            f && e.isComposing() && ((Sn = 0), si(null)));
        }
      }
      if (!c) {
        (Si(!1, e, null !== r ? r : void 0),
          Dn && (qn(e, r || void 0), Ki(mo), (Dn = !1)));
      }
      return (
        (function () {
          Br();
          var t = Hr();
          rt(t);
        })(),
        !0
      );
    }
    function Gn(t) {
      var e = Hr(),
        n = _r();
      if (Vo(n) && !e.isComposing()) {
        var _o25 = n.anchor,
          _r22 = n.anchor.getNode();
        (si(_o25.key),
          Ki(yo),
          (t.timeStamp < Sn + 30 ||
            "element" === _o25.type ||
            !n.isCollapsed() ||
            _r22.getFormat() !== n.format ||
            (Ko(_r22) && _r22.getStyle() !== n.style)) &&
            Fi(e, Ie, k));
      }
      return !0;
    }
    function Vn(t) {
      return (qn(Hr(), t.data), Ki(mo), !0);
    }
    function qn(t, e) {
      var n = t._compositionKey;
      if ((si(null), null !== n && null != e)) {
        if ("" === e) {
          var _e57 = li(n),
            _o26 = t.getElementByKey(n),
            _r23 = null !== _o26 && Ko(_e57) ? El(_e57, _o26, t) : null;
          if (null !== _r23 && null !== _r23.nodeValue && Ko(_e57)) {
            var _n38 = Zi(Ui(t)),
              _o27 = _n38 && ll(_n38, t._rootElement);
            var _s15 = null,
              _i13 = null;
            (null !== _o27 &&
              _o27.anchorNode === _r23 &&
              ((_s15 = _o27.anchorOffset), (_i13 = _o27.focusOffset)),
              Ni(_e57, _r23.nodeValue, _s15, _i13, !0));
          }
          return;
        }
        if ("\n" === e[e.length - 1]) {
          var _e58 = _r();
          if (Vo(_e58) || Xo(_e58)) {
            if (Vo(_e58)) {
              var _t62 = _e58.focus;
              _e58.anchor.set(_t62.key, _t62.offset, _t62.type);
            }
            return void Fi(t, Ge, null);
          }
        }
      }
      Si(!0, t, e);
    }
    function Xn(t) {
      var e = Hr();
      if (null == t.key) return !0;
      if (In) {
        if (Mi(t))
          return (
            ss(e, function () {
              qn(e, Pn);
            }),
            (In = !1),
            (Pn = ""),
            !0
          );
        ((In = !1), (Pn = ""));
      }
      if (
        (function (t) {
          return Ei(t, "ArrowRight", { shiftKey: "any" });
        })(t)
      )
        Fi(e, We, t);
      else if (
        (function (t) {
          return Ei(
            t,
            "ArrowRight",
            babelHelpers["extends"]({}, Oi, { shiftKey: "any" }),
          );
        })(t)
      )
        Fi(e, Ue, t);
      else if (
        (function (t) {
          return Ei(t, "ArrowLeft", { shiftKey: "any" });
        })(t)
      )
        Fi(e, He, t);
      else if (
        (function (t) {
          return Ei(
            t,
            "ArrowLeft",
            babelHelpers["extends"]({}, Oi, { shiftKey: "any" }),
          );
        })(t)
      )
        Fi(e, je, t);
      else if (
        (function (t) {
          return Ei(t, "ArrowUp", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        Fi(e, Ye, t);
      else if (
        (function (t) {
          return Ei(t, "ArrowDown", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        Fi(e, Je, t);
      else if (
        (function (t) {
          return Ei(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
            shiftKey: !0,
          });
        })(t)
      )
        ((wn = !0), Fi(e, Ge, t));
      else if (
        (function (t) {
          return " " === t.key;
        })(t)
      )
        Fi(e, Ve, t);
      else if (
        (function (t) {
          return r && Ei(t, "o", { ctrlKey: !0 });
        })(t)
      )
        (t.preventDefault(), (wn = !0), Fi(e, we, !0));
      else if (
        (function (t) {
          return Ei(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
          });
        })(t)
      )
        ((wn = !1), Fi(e, Ge, t));
      else if (
        (function (t) {
          return (
            Ei(t, "Backspace", { shiftKey: "any" }) ||
            (r && Ei(t, "h", { ctrlKey: !0 }))
          );
        })(t)
      )
        Mi(t) ? Fi(e, qe, t) && jn() : (t.preventDefault(), Fi(e, Ae, !0));
      else if (
        (function (t) {
          return "Escape" === t.key;
        })(t)
      )
        Fi(e, Xe, t);
      else if (
        (function (t) {
          return Ei(t, "Delete", {}) || (r && Ei(t, "d", { ctrlKey: !0 }));
        })(t)
      )
        !(function (t) {
          return "Delete" === t.key;
        })(t)
          ? (t.preventDefault(), Fi(e, Ae, !1))
          : Fi(e, Qe, t);
      else if (
        (function (t) {
          return Ei(t, "Backspace", bi);
        })(t)
      )
        (t.preventDefault(), Fi(e, Re, !0));
      else if (
        (function (t) {
          return Ei(t, "Delete", bi);
        })(t)
      )
        (t.preventDefault(), Fi(e, Re, !1));
      else if (
        (function (t) {
          return r && Ei(t, "Backspace", { metaKey: !0 });
        })(t)
      )
        (t.preventDefault(), Fi(e, Le, !0));
      else if (
        (function (t) {
          return (
            r &&
            (Ei(t, "Delete", { metaKey: !0 }) || Ei(t, "k", { ctrlKey: !0 }))
          );
        })(t)
      )
        (t.preventDefault(), Fi(e, Le, !1));
      else if (
        (function (t) {
          return Ei(t, "b", Oi);
        })(t)
      )
        (t.preventDefault(), Fi(e, $e, "bold"));
      else if (
        (function (t) {
          return Ei(t, "u", Oi);
        })(t)
      )
        (t.preventDefault(), Fi(e, $e, "underline"));
      else if (
        (function (t) {
          return Ei(t, "i", Oi);
        })(t)
      )
        (t.preventDefault(), Fi(e, $e, "italic"));
      else if (
        (function (t) {
          return Ei(t, "Tab", { shiftKey: "any" });
        })(t)
      )
        Fi(e, Ze, t);
      else if (
        (function (t) {
          return Ei(t, "z", Oi);
        })(t)
      )
        (t.preventDefault(), Fi(e, Ke, void 0));
      else if (
        (function (t) {
          if (r) return Ei(t, "z", { metaKey: !0, shiftKey: !0 });
          return (
            Ei(t, "y", { ctrlKey: !0 }) ||
            Ei(t, "z", { ctrlKey: !0, shiftKey: !0 })
          );
        })(t)
      )
        (t.preventDefault(), Fi(e, ze, void 0));
      else {
        var _n39 = e._editorState._selection;
        !(function (t) {
          return Ei(t, "a", Oi);
        })(t)
          ? null === _n39 ||
            Vo(_n39) ||
            (!(function (t) {
              return Ei(t, "c", Oi);
            })(t)
              ? (function (t) {
                  return Ei(t, "x", Oi);
                })(t) && (t.preventDefault(), Fi(e, un, t))
              : (t.preventDefault(), Fi(e, an, t)))
          : (t.preventDefault(), Fi(e, fn, t) && jn());
      }
      return (
        (function (t) {
          return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey;
        })(t) && e.dispatchCommand(mn, t),
        !0
      );
    }
    function Qn(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    var Zn = new Map();
    function to(t) {
      var e = tl(t.target);
      if (null === e) return;
      var n = $i(t.target);
      var o = null,
        r = null;
      if (null !== n) {
        var _t63 = bn.get(n);
        if (void 0 !== _t63) {
          var _n40 = _t63.editors;
          var _s16 = _t63.hasShadowEditor;
          if (void 0 === _s16) {
            _s16 = !1;
            for (var _t64 of _n40)
              if (
                null !== _t64._rootElement &&
                el(_t64._rootElement.getRootNode())
              ) {
                _s16 = !0;
                break;
              }
            _t63.hasShadowEditor = _s16;
          }
          if (_s16) {
            var _t65 = null,
              _s17 = null;
            for (var _i14 of _n40) {
              var _n41 = _i14._rootElement;
              if (null === _n41) continue;
              var _l7 = ll(e, _n41).anchorNode;
              if (null !== _l7 && Js(_l7) === _i14) {
                if (el(_n41.getRootNode())) {
                  ((o = _i14), (r = _l7));
                  break;
                }
                null === _t65 && ((_t65 = _i14), (_s17 = _l7));
              }
            }
            null === o && null !== _t65 && ((o = _t65), (r = _s17));
          } else {
            var _t66 = e.anchorNode;
            null === _t66 ||
              (gl(_t66) && null !== _t66.shadowRoot) ||
              ((o = Js(_t66)), null !== o && (r = _t66));
          }
        }
        if (null === o) {
          var _t67 = dl(n);
          o = null !== _t67 ? Js(_t67) : null;
        }
      }
      if (null === o) return;
      An &&
        ((An = !1),
        ss(o, function () {
          var n = pr(),
            s = r != null ? r : ll(e, o._rootElement).anchorNode;
          if (gl(s) || Xs(s)) {
            _i(gr(n, e, o, t));
          }
        }));
      var s = mi(o),
        i = s[s.length - 1],
        l = i._key,
        c = Zn.get(l),
        a = c || i;
      (a !== o && Kn(e, a, !1),
        Kn(e, o, !0),
        o !== i ? Zn.set(l, o) : c && Zn["delete"](l));
    }
    function eo(t) {
      t._lexicalHandled = !0;
    }
    function no(t) {
      return !0 === t._lexicalHandled;
    }
    var oo = function oo() {};
    function ro(e) {
      var n = On.get(e);
      if (void 0 === n) return void oo();
      var o = bn.get(n);
      if (void 0 === o) return void oo();
      var r = o.rootElementCount - 1;
      (r >= 0 || t(164),
        On["delete"](e),
        (o.rootElementCount = r),
        0 === r && n.removeEventListener("selectionchange", to));
      var s = Gs(e);
      Ys(s)
        ? (!(function (t) {
            if (null !== t._parentEditor) {
              var _e59 = mi(t),
                _n42 = _e59[_e59.length - 1]._key;
              Zn.get(_n42) === t && Zn["delete"](_n42);
            } else Zn["delete"](t._key);
          })(s),
          o.editors["delete"](s),
          (o.hasShadowEditor = void 0),
          (e.__lexicalEditor = null))
        : s && t(198);
      var i = Qn(e);
      for (var _t68 = 0; _t68 < i.length; _t68++) i[_t68]();
      e.__lexicalEventHandles = [];
    }
    function so(t, n, o) {
      Br();
      var r = t.__key,
        s = t.getParent();
      if (null === s)
        return void (
          null !== Gl(t) &&
          e(
            "$removeNode: node " +
              r +
              " is slotted into host " +
              String(Gl(t)) +
              "; use removeSlot on the host instead of remove().",
          )
        );
      var i = (function (t) {
        var e = _r();
        if (!Vo(e) || !cs(t)) return e;
        var n = e.anchor,
          o = e.focus,
          r = n.getNode(),
          s = o.getNode();
        Bi(r, t) && n.set(t.__key, 0, "element");
        Bi(s, t) && o.set(t.__key, 0, "element");
        return e;
      })(t);
      var l = !1;
      if (Vo(i) && n) {
        var _e60 = i.anchor,
          _n43 = i.focus;
        (_e60.key === r &&
          (xr(_e60, t, s, t.getPreviousSibling(), t.getNextSibling()),
          (l = !0)),
          _n43.key === r &&
            (xr(_n43, t, s, t.getPreviousSibling(), t.getNextSibling()),
            (l = !0)));
      } else Xo(i) && n && t.isSelected() && t.selectPrevious();
      if (Vo(i) && n && !l) {
        var _e61 = t.getIndexWithinParent();
        (ni(t), yr(i, s, _e61, -1));
      } else ni(t);
      (o || Yi(s) || s.canBeEmpty() || !s.isEmpty() || so(s, n),
        n && i && hs(s) && s.isEmpty() && s.selectEnd());
    }
    var io = Symbol["for"]("ephemeral");
    function lo(t) {
      return t[io] || !1;
    }
    var co = { configurable: !0, enumerable: !1, value: void 0, writable: !0 };
    var _ao5 = (function () {
      function ao(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", co),
          Object.defineProperty(this, kt, co),
          ei(this, t));
      }
      ao.getType = function getType() {
        var _zl = zl(this),
          e = _zl.ownNodeType;
        return (void 0 === e && t(64, this.name), e);
      };
      ao.clone = function clone(e) {
        t(65, this.name);
      };
      var _proto6 = ao.prototype;
      _proto6.$config = function $config() {
        return {};
      };
      _proto6.config = function config(t, e) {
        var _ref24;
        var n = e["extends"] || Hl(this.constructor);
        return (
          Object.assign(e, { extends: n }),
          "string" == typeof t && Object.assign(e, { type: t }),
          (_ref24 = {}),
          (_ref24[t] = e),
          _ref24
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
          var _e62 = li(t);
          if (null === _e62) break;
          t = null !== _e62.__parent ? _e62.__parent : Gl(_e62);
        }
        return !1;
      };
      _proto6.isSelected = function isSelected(t) {
        var _this13 = this;
        var e = t || _r();
        if (null == e) return !1;
        var n = e.getNodes().some(function (t) {
          return t.__key === _this13.__key;
        });
        if (Ko(this)) return n;
        if (
          Vo(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t69 = this.getParent();
          if (fs(this) && this.isInline() && _t69) {
            var _n44 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t69.is(_n44.getNode()) &&
              _n44.offset === _t69.getChildrenSize() &&
              this.is(_t69.getLastChild())
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
        return null === t ? null : li(t);
      };
      _proto6.getParentOrThrow = function getParentOrThrow() {
        var e = this.getParent();
        return (null === e && t(66, this.__key), e);
      };
      _proto6.getTopLevelElement = function getTopLevelElement() {
        var e = this;
        for (; null !== e; ) {
          var _n45 = e.getParent();
          if (Yi(_n45) || null !== Gl(e))
            return (cs(e) || (e === this && fs(e)) || t(194), e);
          e = _n45;
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
        return null === t ? null : li(t);
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
        return null === t ? null : li(t);
      };
      _proto6.getNextSiblings = function getNextSiblings() {
        var t = [];
        var e = this.getNextSibling();
        for (; null !== e; ) (t.push(e), (e = e.getNextSibling()));
        return t;
      };
      _proto6.getCommonAncestor = function getCommonAncestor(t) {
        var e = cs(this) ? this : this.getParent(),
          n = cs(t) ? t : t.getParent(),
          o = e && n ? jc(e, n) : null;
        return o ? o.commonAncestor : null;
      };
      _proto6.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto6.isBefore = function isBefore(e) {
        var n = jc(this, e);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === Wc(n)
              : ("same" !== n.type && "ancestor" !== n.type && t(279), !1)))
        );
      };
      _proto6.isParentOf = function isParentOf(t) {
        var e = jc(this, t);
        return null !== e && "ancestor" === e.type;
      };
      _proto6.getNodesBetween = function getNodesBetween(e) {
        var n = this.isBefore(e),
          o = [],
          r = new Set();
        var s = this;
        for (; null !== s; ) {
          var _i15 = s.__key;
          if ((r.has(_i15) || (r.add(_i15), o.push(s)), s === e)) break;
          var _l8 = cs(s) ? (n ? s.getFirstChild() : s.getLastChild()) : null;
          if (null !== _l8) {
            s = _l8;
            continue;
          }
          var _c9 = n ? s.getNextSibling() : s.getPreviousSibling();
          if (null !== _c9) {
            s = _c9;
            continue;
          }
          var _a6 = s.getParentOrThrow();
          if ((r.has(_a6.__key) || o.push(_a6), _a6 === e)) break;
          var _u7 = null,
            _f5 = _a6;
          do {
            if (
              (null === _f5 && t(68),
              (_u7 = n ? _f5.getNextSibling() : _f5.getPreviousSibling()),
              (_f5 = _f5.getParent()),
              null === _f5)
            )
              break;
            null !== _u7 || r.has(_f5.__key) || o.push(_f5);
          } while (null === _u7);
          s = _u7;
        }
        return (n || o.reverse(), o);
      };
      _proto6.isDirty = function isDirty() {
        var t = Hr()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto6.getLatest = function getLatest() {
        if (lo(this)) return this;
        var e = li(this.__key);
        return (null === e && t(113), e);
      };
      _proto6.getWritable = function getWritable() {
        if (lo(this)) return this;
        Br();
        var t = Ur(),
          e = Hr(),
          n = t._nodeMap,
          o = this.__key,
          r = this.getLatest(),
          s = e._cloneNotNeeded,
          i = _r();
        if ((null !== i && i.setCachedNodes(null), s.has(o))) return (ri(r), r);
        var l = Al(r);
        return (s.add(o), ri(l), n.set(o, l), l);
      };
      _proto6.getTextContent = function getTextContent() {
        return lc(this);
      };
      _proto6.getTextContentSize = function getTextContentSize() {
        return this.getTextContent().length;
      };
      _proto6.createDOM = function createDOM(e, n) {
        t(70);
      };
      _proto6.updateDOM = function updateDOM(e, n, o) {
        t(71);
      };
      _proto6.getDOMSlot = function getDOMSlot(t) {
        return new _K2(t);
      };
      _proto6.exportDOM = function exportDOM(t) {
        return { element: this.createDOM(t._config, t) };
      };
      _proto6.exportJSON = function exportJSON() {
        var t = this.__state ? this.__state.toJSON() : void 0;
        return babelHelpers["extends"]({ type: this.__type, version: 1 }, t);
      };
      ao.importJSON = function importJSON(e) {
        t(18, this.name);
      };
      _proto6.updateFromJSON = function updateFromJSON(t) {
        return (function (t, e) {
          var n = t.getWritable(),
            o = e.$;
          var r = o;
          for (var _t70 of gt(n).flatKeys)
            _t70 in e &&
              ((void 0 !== r && r !== o) ||
                (r = babelHelpers["extends"]({}, o)),
              (r[_t70] = e[_t70]));
          return ((n.__state || r) && ht(t).updateFromJSON(r), n);
        })(this, t);
      };
      ao.transform = function transform() {
        return null;
      };
      _proto6.remove = function remove(t) {
        so(this, !0, t);
      };
      _proto6.replace = function replace(n, o) {
        Br();
        var r = _r();
        (null !== r && (r = r.clone()), Vi(this, n));
        var s = this.getLatest(),
          i = this.__key,
          l = n.__key,
          c = n.getWritable(),
          a = this.getParentOrThrow().getWritable(),
          u = a.__size,
          f = c.getParent(),
          d = null !== f ? c.getIndexWithinParent() : -1;
        (ni(c), null !== f && Vo(r) && yr(r, f, d, -1));
        var h = s.getPreviousSibling(),
          g = s.getNextSibling(),
          _ = s.__prev,
          p = s.__next,
          y = s.__parent;
        if ((so(s, !1, !0), null === h)) a.__first = l;
        else {
          h.getWritable().__next = l;
        }
        if (((c.__prev = _), null === g)) a.__last = l;
        else {
          g.getWritable().__prev = l;
        }
        ((c.__next = p), (c.__parent = y), (a.__size = u));
        var m = 0;
        o &&
          ((cs(this) && cs(c)) || t(139),
          (m = c.getChildrenSize()),
          c.splice(m, 0, this.getChildren()));
        var x = Zl(this);
        if (x.length > 0) {
          (Yl(this) && Yl(c)) ||
            e(
              "replace: node " +
                this.__key +
                " has slots but " +
                c.__key +
                " cannot host them; only ElementNodes and DecoratorNodes can host slots.",
            );
          for (var _t71 of x) {
            var _e63 = tc(this, _t71);
            null !== _e63 && (fc(this, _t71), uc(c, _t71, _e63));
          }
        }
        if (Vo(r)) {
          _i(r);
          var _t72 = r.anchor,
            _e64 = r.focus;
          (_t72.key === i &&
            (o && "element" === _t72.type
              ? _t72.set(c.__key, m + _t72.offset, "element")
              : Jo(_t72, c)),
            _e64.key === i &&
              (o && "element" === _e64.type
                ? _e64.set(c.__key, m + _e64.offset, "element")
                : Jo(_e64, c)));
        }
        return (ii() === i && si(l), c);
      };
      _proto6.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (Br(), Vi(this, t));
        var n = this.getWritable(),
          o = t.getWritable();
        dc(this.getParentOrThrow());
        var r = o.getParent(),
          s = _r();
        var i = !1,
          l = !1;
        if (null !== r) {
          var _n46 = t.getIndexWithinParent();
          if (Vo(s)) {
            var _t73 = r.__key,
              _e65 = s.anchor,
              _o28 = s.focus;
            ((i =
              "element" === _e65.type &&
              _e65.key === _t73 &&
              _e65.offset === _n46 + 1),
              (l =
                "element" === _o28.type &&
                _o28.key === _t73 &&
                _o28.offset === _n46 + 1));
          }
          (ni(o), e && Vo(s) && yr(s, r, _n46, -1));
        } else ni(o);
        var c = this.getNextSibling(),
          a = this.getParentOrThrow().getWritable(),
          u = o.__key,
          f = n.__next;
        if (null === c) a.__last = u;
        else {
          c.getWritable().__prev = u;
        }
        if (
          (a.__size++,
          (n.__next = u),
          (o.__next = f),
          (o.__prev = n.__key),
          (o.__parent = n.__parent),
          e && Vo(s))
        ) {
          var _t74 = this.getIndexWithinParent();
          yr(s, a, _t74 + 1);
          var _e66 = a.__key;
          (i && s.anchor.set(_e66, _t74 + 2, "element"),
            l && s.focus.set(_e66, _t74 + 2, "element"));
        }
        return t;
      };
      _proto6.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (Br(), Vi(this, t));
        var n = this.getWritable(),
          o = t.getWritable();
        dc(this.getParentOrThrow());
        var r = o.__key,
          s = _r(),
          i = o.getParent(),
          l = null !== i ? o.getIndexWithinParent() : -1;
        (ni(o), null !== i && e && Vo(s) && yr(s, i, l, -1));
        var c = this.getPreviousSibling(),
          a = this.getParentOrThrow().getWritable(),
          u = n.__prev,
          f = this.getIndexWithinParent();
        if (null === c) a.__first = r;
        else {
          c.getWritable().__next = r;
        }
        if (
          (a.__size++,
          (n.__prev = r),
          (o.__prev = u),
          (o.__next = n.__key),
          (o.__parent = n.__parent),
          e && Vo(s))
        ) {
          yr(s, this.getParentOrThrow(), f);
        }
        return t;
      };
      _proto6.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto6.createParentElementNode = function createParentElementNode() {
        return bs();
      };
      _proto6.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto6.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto6.selectPrevious = function selectPrevious(t, e) {
        Br();
        var n = Vl(this);
        if (null !== n) return n.selectPrevious(t, e);
        var o = this.getPreviousSibling(),
          r = this.getParentOrThrow();
        if (null === o) return r.select(0, 0);
        if (cs(o)) return o.select();
        if (!Ko(o)) {
          var _t75 = o.getIndexWithinParent() + 1;
          return r.select(_t75, _t75);
        }
        return o.select(t, e);
      };
      _proto6.selectNext = function selectNext(t, e) {
        Br();
        var n = Vl(this);
        if (null !== n) return n.selectNext(t, e);
        var o = this.getNextSibling(),
          r = this.getParentOrThrow();
        if (null === o) return r.select();
        if (cs(o)) return o.select(0, 0);
        if (!Ko(o)) {
          var _t76 = o.getIndexWithinParent();
          return r.select(_t76, _t76);
        }
        return o.select(t, e);
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
      return ao;
    })();
    function uo(t) {
      return t instanceof _ao5;
    }
    var fo = "history-merge",
      ho = "collaboration",
      go = "skip-scroll-into-view",
      _o = "skip-dom-selection",
      po = "skip-selection-focus",
      yo = "composition-start",
      mo = "composition-end",
      xo = "!important";
    function Co(t) {
      var e = {};
      if (!t) return e;
      var n = "",
        o = "",
        r = null,
        s = !1,
        i = !1,
        l = !1,
        c = 0;
      var a = t.length;
      var u = -1;
      for (var _f6 = 0; _f6 < a; _f6++) {
        var _a7 = t[_f6];
        if (s) "*" === _a7 && "/" === t[_f6 + 1] && ((s = !1), _f6++);
        else if (i) (-1 === u && (u = _f6), (i = !1));
        else if (null === r) {
          if ("/" !== _a7 || "*" !== t[_f6 + 1]) {
            if ('"' !== _a7 && "'" !== _a7) {
              if ("(" !== _a7) {
                if (")" !== _a7) {
                  if (l || ":" !== _a7 || 0 !== c) {
                    if (";" === _a7 && 0 === c) {
                      -1 !== u &&
                        (l ? (o += t.slice(u, _f6)) : (n += t.slice(u, _f6)),
                        (u = -1));
                      var _r24 = n.trim(),
                        _s18 = o.trim();
                      ("" !== _r24 && "" !== _s18 && (e[_r24] = _s18),
                        (n = ""),
                        (o = ""),
                        (l = !1));
                      continue;
                    }
                    -1 === u && (u = _f6);
                  } else
                    (-1 !== u && ((n += t.slice(u, _f6)), (u = -1)), (l = !0));
                } else (-1 === u && (u = _f6), (c = Math.max(0, c - 1)));
              } else (-1 === u && (u = _f6), c++);
            } else (-1 === u && (u = _f6), (r = _a7));
          } else
            (-1 !== u &&
              (l ? (o += t.slice(u, _f6)) : (n += t.slice(u, _f6)), (u = -1)),
              (s = !0),
              _f6++);
        } else
          (-1 === u && (u = _f6),
            "\\" === _a7 ? (i = !0) : _a7 === r && (r = null));
      }
      -1 !== u && (l ? (o += t.slice(u, a)) : (n += t.slice(u, a)));
      var f = n.trim(),
        d = o.trim();
      return ("" !== f && "" !== d && (e[f] = d), e);
    }
    function So(t, e, n) {
      var o = n.trimEnd(),
        r = o.length - 10;
      r >= 0 && o.slice(r).toLowerCase() === xo
        ? t.setProperty(e, o.slice(0, r).trim(), "important")
        : t.setProperty(e, n, "");
    }
    function No(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var o = Co(n),
        r = Co(e);
      for (var _e67 in r) (delete o[_e67], So(t, _e67, r[_e67]));
      for (var _e68 in o) t.removeProperty(_e68);
    }
    function To(t, e) {
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
    function vo(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function ko(t, e, n, o, r) {
      var s = o.classList;
      var i = Ai(r, "base");
      (void 0 !== i && s.add.apply(s, i),
        (i = Ai(r, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== i &&
        (8 & n && 4 & n
          ? ((l = !0), c || s.add.apply(s, i))
          : c && s.remove.apply(s, i));
      for (var _t77 in A) {
        var _o29 = A[_t77];
        if (((i = Ai(r, _t77)), void 0 !== i))
          if (n & _o29) {
            if (l && ("underline" === _t77 || "strikethrough" === _t77)) {
              e & _o29 && s.remove.apply(s, i);
              continue;
            }
            (0 === (e & _o29) ||
              (c && "underline" === _t77) ||
              "strikethrough" === _t77) &&
              s.add.apply(s, i);
          } else e & _o29 && s.remove.apply(s, i);
      }
    }
    function Eo(t, e, n) {
      var o = n.isComposing(),
        r = t + (o ? T : ""),
        i = Nl(),
        l = Tl(i).$getDOMSlot(n, e, i),
        c = l.getFirstChild();
      if (null === c || c.nodeType !== Node.TEXT_NODE)
        return void l.insertChild(document.createTextNode(r));
      var a = c,
        u = a.nodeValue;
      if (u !== r)
        if (o || s) {
          var _ref25 = (function (t, e) {
              var n = t.length,
                o = e.length;
              var r = 0,
                s = 0;
              for (; r < n && r < o && t[r] === e[r]; ) r++;
              for (; s + r < n && s + r < o && t[n - s - 1] === e[o - s - 1]; )
                s++;
              return [r, n - r - s, e.slice(r, o - s)];
            })(u, r),
            _t78 = _ref25[0],
            _e69 = _ref25[1],
            _n47 = _ref25[2];
          (0 !== _e69 && a.deleteData(_t78, _e69), a.insertData(_t78, _n47));
        } else a.nodeValue = r;
    }
    function Oo(t, e, n, o, r, s) {
      Eo(r, t, e);
      var i = s.theme.text;
      void 0 !== i && ko(0, 0, o, t, i);
    }
    function bo(t, e) {
      var n = document.createElement(e);
      return (n.appendChild(t), n);
    }
    var _Mo2 = (function (_ao) {
      function Mo(t, e) {
        var _this;
        if (t === void 0) {
          t = "";
        }
        ((_this = _ao.call(this, e) || this),
          (_this.__text = t),
          (_this.__format = 0),
          (_this.__style = ""),
          (_this.__mode = 0),
          (_this.__detail = 0));
        return _this;
      }
      babelHelpers.inheritsLoose(Mo, _ao);
      Mo.getType = function getType() {
        return "text";
      };
      Mo.clone = function clone(t) {
        return new Mo(t.__text, t.__key);
      };
      var _proto7 = Mo.prototype;
      _proto7.afterCloneFrom = function afterCloneFrom(t) {
        (_ao.prototype.afterCloneFrom.call(this, t),
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
        return F[t.__mode];
      };
      _proto7.getStyle = function getStyle() {
        return this.getLatest().__style;
      };
      _proto7.isToken = function isToken() {
        return 1 === this.getLatest().__mode;
      };
      _proto7.isComposing = function isComposing() {
        return this.__key === ii();
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
        var e = A[t];
        return 0 !== (this.getFormat() & e);
      };
      _proto7.isSimpleText = function isSimpleText() {
        return "text" === this.__type && 0 === this.__mode;
      };
      _proto7.getTextContent = function getTextContent() {
        return this.getLatest().__text;
      };
      _proto7.getFormatFlags = function getFormatFlags(t, e) {
        return ti(this.getLatest().__format, t, e);
      };
      _proto7.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto7.isInline = function isInline() {
        return !0;
      };
      _proto7.createDOM = function createDOM(t, e) {
        var n = this.__format,
          o = To(0, n),
          r = vo(0, n),
          s = null === o ? r : o,
          i = document.createElement(s);
        var l = i;
        (this.hasFormat("code") && i.setAttribute("spellcheck", "false"),
          null !== o && ((l = document.createElement(r)), i.appendChild(l)));
        Oo(l, this, 0, n, this.__text, t);
        var c = this.__style;
        return ("" !== c && No(i.style, c), i);
      };
      _proto7.updateDOM = function updateDOM(e, n, o) {
        var r = this.__text,
          s = e.__format,
          i = this.__format,
          l = To(0, s),
          c = To(0, i),
          a = vo(0, s),
          u = vo(0, i);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _e70 = n.firstChild;
          null == _e70 && t(48);
          var _s19 = document.createElement(u);
          return (Oo(_s19, this, 0, i, r, o), n.replaceChild(_s19, _e70), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && t(49)),
          Eo(r, f, this));
        var d = o.theme.text;
        void 0 !== d && s !== i && ko(0, s, i, f, d);
        var h = e.__style,
          g = this.__style;
        return (h !== g && No(n.style, g, h), !1);
      };
      Mo.importDOM = function importDOM() {
        return {
          "#text": function text() {
            return { conversion: Po, priority: 0 };
          },
          b: function b() {
            return { conversion: wo, priority: 0 };
          },
          code: function code() {
            return { conversion: Lo, priority: 0 };
          },
          em: function em() {
            return { conversion: Lo, priority: 0 };
          },
          i: function i() {
            return { conversion: Lo, priority: 0 };
          },
          mark: function mark() {
            return { conversion: Lo, priority: 0 };
          },
          s: function s() {
            return { conversion: Lo, priority: 0 };
          },
          span: function span() {
            return { conversion: Ao, priority: 0 };
          },
          strong: function strong() {
            return { conversion: Lo, priority: 0 };
          },
          sub: function sub() {
            return { conversion: Lo, priority: 0 };
          },
          sup: function sup() {
            return { conversion: Lo, priority: 0 };
          },
          u: function u() {
            return { conversion: Lo, priority: 0 };
          },
        };
      };
      Mo.importJSON = function importJSON(t) {
        return $o().updateFromJSON(t);
      };
      _proto7.updateFromJSON = function updateFromJSON(t) {
        return _ao.prototype.updateFromJSON
          .call(this, t)
          .setTextContent(t.text)
          .setFormat(t.format)
          .setDetail(t.detail)
          .setMode(t.mode)
          .setStyle(t.style);
      };
      _proto7.exportDOM = function exportDOM(e) {
        var _ao$prototype$exportD = _ao.prototype.exportDOM.call(this, e),
          n = _ao$prototype$exportD.element;
        return (
          gl(n) || t(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = bo(n, "b")),
          this.hasFormat("italic") && (n = bo(n, "i")),
          this.hasFormat("strikethrough") && (n = bo(n, "s")),
          this.hasFormat("underline") && (n = bo(n, "u")),
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
          _ao.prototype.exportJSON.call(this),
        );
      };
      _proto7.selectionTransform = function selectionTransform(t, e) {};
      _proto7.setFormat = function setFormat(t) {
        var e = this.getWritable();
        return ((e.__format = "string" == typeof t ? A[t] : t), e);
      };
      _proto7.setDetail = function setDetail(t) {
        var e = this.getWritable();
        return ((e.__detail = "string" == typeof t ? w[t] : t), e);
      };
      _proto7.setStyle = function setStyle(t) {
        var e = this.getWritable();
        return ((e.__style = t), e);
      };
      _proto7.toggleFormat = function toggleFormat(t) {
        var e = ti(this.getFormat(), t, null);
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
        var e = P[t];
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
        Br();
        var n = t,
          o = e;
        var r = _r(),
          s = this.getTextContent(),
          i = this.__key;
        if ("string" == typeof s) {
          var _t79 = s.length;
          (void 0 === n && (n = _t79), void 0 === o && (o = _t79));
        } else ((n = 0), (o = 0));
        if (!Vo(r)) return fr(i, n, i, o, "text", "text");
        {
          var _t80 = ii();
          ((_t80 !== r.anchor.key && _t80 !== r.focus.key) || si(i),
            r.setTextNodeRange(this, n, this, o));
        }
        return r;
      };
      _proto7.selectStart = function selectStart() {
        return this.select(0, 0);
      };
      _proto7.selectEnd = function selectEnd() {
        var t = this.getTextContentSize();
        return this.select(t, t);
      };
      _proto7.spliceText = function spliceText(t, e, n, o) {
        var r = this.getWritable(),
          s = r.__text,
          i = n.length;
        var l = t;
        l < 0 && ((l = i + l), l < 0 && (l = 0));
        var c = _r();
        if (o && Vo(c)) {
          var _e71 = t + i;
          c.setTextNodeRange(r, _e71, r, _e71);
        }
        var a = s.slice(0, l) + n + s.slice(l + e);
        return ((r.__text = a), r);
      };
      _proto7.canInsertTextBefore = function canInsertTextBefore() {
        return !0;
      };
      _proto7.canInsertTextAfter = function canInsertTextAfter() {
        return !0;
      };
      _proto7.splitText = function splitText() {
        Br();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var o = e.__key,
          r = ii(),
          s = n.length;
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
          t.push(s));
        var i = [],
          l = t.length;
        for (var _e72 = 0, _o30 = 0; _e72 < s && _o30 <= l; _o30++) {
          var _r25 = t[_o30];
          _r25 > _e72 && (i.push(n.slice(_e72, _r25)), (_e72 = _r25));
        }
        var c = i.length;
        if (1 === c) return [e];
        var a = i[0],
          u = e.getParent();
        var f;
        var d = e.getFormat(),
          h = e.getStyle(),
          g = e.__detail;
        var _ = !1,
          p = null,
          y = null;
        var m = _r();
        if (Vo(m)) {
          var _ref26 = m.isBackward()
              ? [m.focus, m.anchor]
              : [m.anchor, m.focus],
            _t81 = _ref26[0],
            _e73 = _ref26[1];
          ("text" === _t81.type && _t81.key === o && (p = _t81),
            "text" === _e73.type && _e73.key === o && (y = _e73));
        }
        e.isSegmented()
          ? ((f = $o(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = xt(e, f)),
            (_ = !0))
          : (f = e.setTextContent(a));
        var x = [f];
        for (var _t82 = 1; _t82 < c; _t82++) {
          var _n48 = $o(i[_t82]);
          ((_n48.__format = d),
            (_n48.__style = h),
            (_n48.__detail = g),
            (_n48.__state = xt(e, _n48)));
          var _s20 = _n48.__key;
          (r === o && si(_s20), x.push(_n48));
        }
        var C = p ? p.offset : null,
          S = y ? y.offset : null;
        var N = 0;
        for (var _t83 of x) {
          if (!p && !y) break;
          var _e74 = N + _t83.getTextContentSize();
          if (
            (null !== p &&
              null !== C &&
              C <= _e74 &&
              C >= N &&
              (p.set(_t83.getKey(), C - N, "text"), C < _e74 && (p = null)),
            null !== y && null !== S && S <= _e74 && S >= N)
          ) {
            y.set(_t83.getKey(), S - N, "text");
            break;
          }
          N = _e74;
        }
        if (null !== u) {
          !(function (t) {
            var e = t.getPreviousSibling(),
              n = t.getNextSibling();
            null !== e && ri(e);
            null !== n && ri(n);
          })(this);
          var _t84 = u.getWritable(),
            _e75 = this.getIndexWithinParent();
          (_
            ? (_t84.splice(_e75, 0, x), this.remove())
            : _t84.splice(_e75, 1, x),
            Vo(m) && yr(m, u, _e75, c - 1));
        }
        return x;
      };
      _proto7.mergeWithSibling = function mergeWithSibling(e) {
        var n = e === this.getPreviousSibling();
        n || e === this.getNextSibling() || t(50);
        var o = this.__key,
          r = e.__key,
          s = this.__text,
          i = s.length;
        ii() === r && si(o);
        var l = _r();
        if (Vo(l)) {
          var _t85 = l.anchor,
            _s21 = l.focus;
          (null !== _t85 && _t85.key === r && Cr(_t85, n, o, e, i),
            null !== _s21 && _s21.key === r && Cr(_s21, n, o, e, i));
        }
        var c = e.__text,
          a = n ? c + s : s + c;
        this.setTextContent(a);
        var u = this.getWritable();
        return (e.remove(), u);
      };
      _proto7.isTextEntity = function isTextEntity() {
        return !1;
      };
      return Mo;
    })(_ao5);
    function Ao(t) {
      return { forChild: zo(t.style), node: null };
    }
    function wo(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: zo(e.style, n ? void 0 : "bold"), node: null };
    }
    var Do = new WeakMap();
    function Io(t) {
      if (!gl(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function Po(e) {
      var n = e;
      null === e.parentElement && t(129);
      var o = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var o = [t];
          for (; null !== n && void 0 === (e = Do.get(n)) && !Io(n); )
            (o.push(n), (n = n.parentNode));
          var r = void 0 === e ? n : e;
          for (var _t86 = 0; _t86 < o.length; _t86++) Do.set(o[_t86], r);
          return r;
        })(n)
      )
        return { node: kr(o) };
      if (((o = o.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === o))
        return { node: null };
      if (" " === o[0]) {
        var _t87 = n,
          _e76 = !0;
        for (; null !== _t87 && null !== (_t87 = Fo(_t87, !1)); ) {
          var _n49 = _t87.textContent || "";
          if (_n49.length > 0) {
            (/[ \t\n]$/.test(_n49) && (o = o.slice(1)), (_e76 = !1));
            break;
          }
        }
        _e76 && (o = o.slice(1));
      }
      if (" " === o[o.length - 1]) {
        var _t88 = n,
          _e77 = !0;
        for (; null !== _t88 && null !== (_t88 = Fo(_t88, !0)); ) {
          if (
            (_t88.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e77 = !1;
            break;
          }
        }
        _e77 && (o = o.slice(0, o.length - 1));
      }
      return "" === o ? { node: null } : { node: $o(o) };
    }
    function Fo(t, e) {
      var n = t;
      for (;;) {
        var _t89 = void 0;
        for (; null === (_t89 = e ? n.nextSibling : n.previousSibling); ) {
          var _t90 = n.parentElement;
          if (null === _t90) return null;
          n = _t90;
        }
        if (((n = _t89), gl(n))) {
          var _t91 = n.style.display;
          if (
            ("" === _t91 && !ml(n)) ||
            ("" !== _t91 && !_t91.startsWith("inline"))
          )
            return null;
        }
        var _o31 = n;
        for (; null !== (_o31 = e ? n.firstChild : n.lastChild); ) n = _o31;
        if (Xs(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var Ro = {
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
    function Lo(t) {
      var e = Ro[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: zo(t.style, e), node: null };
    }
    function $o(t) {
      if (t === void 0) {
        t = "";
      }
      return Gi(new _Mo2(t));
    }
    function Ko(t) {
      return t instanceof _Mo2;
    }
    function zo(t, e) {
      var n = t.fontWeight,
        o = t.textDecoration.split(" "),
        r = "700" === n || "bold" === n,
        s = o.includes("line-through"),
        i = "italic" === t.fontStyle,
        l = o.includes("underline"),
        c = t.verticalAlign;
      return function (t) {
        return Ko(t)
          ? (r && !t.hasFormat("bold") && t.toggleFormat("bold"),
            s &&
              !t.hasFormat("strikethrough") &&
              t.toggleFormat("strikethrough"),
            i && !t.hasFormat("italic") && t.toggleFormat("italic"),
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
    var _Bo = (function (_Mo) {
      function Bo(t) {
        var _this2;
        ((_this2 = _Mo.call(this, "\t", t) || this), (_this2.__detail = 2));
        return _this2;
      }
      babelHelpers.inheritsLoose(Bo, _Mo);
      Bo.getType = function getType() {
        return "tab";
      };
      Bo.clone = function clone(t) {
        return new Bo(t.__key);
      };
      Bo.importDOM = function importDOM() {
        return null;
      };
      var _proto8 = Bo.prototype;
      _proto8.createDOM = function createDOM(t) {
        var e = _Mo.prototype.createDOM.call(this, t),
          n = Ai(t.theme, "tab");
        if (void 0 !== n) {
          var _e$classList;
          (_e$classList = e.classList).add.apply(_e$classList, n);
        }
        return e;
      };
      Bo.importJSON = function importJSON(t) {
        return Wo().updateFromJSON(t);
      };
      _proto8.setTextContent = function setTextContent(t) {
        return _Mo.prototype.setTextContent.call(this, "\t");
      };
      _proto8.spliceText = function spliceText(e, n, o, r) {
        return (
          ("" === o && 0 === n) || ("\t" === o && 1 === n) || t(286),
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
      return Bo;
    })(_Mo2);
    function Wo() {
      return Gi(new _Bo());
    }
    function Uo(t) {
      return t instanceof _Bo;
    }
    var _Ho = (function () {
      function Ho(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto9 = Ho.prototype;
      _proto9.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto9.isBefore = function isBefore(t) {
        if (this.key === t.key) return this.offset < t.offset;
        return Bc(ea(Yc(this, "next")), ea(Yc(t, "next"))) < 0;
      };
      _proto9.getNode = function getNode() {
        var e = li(this.key);
        return (null === e && t(20), e);
      };
      _proto9.set = function set(t, e, n, o) {
        var r = this._selection,
          s = this.key;
        (o && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          zr() ||
            (ii() === s && si(t),
            null !== r &&
              (r.setCachedNodes(null),
              Vo(r) && (r._cachedIsBackward = null),
              (r.dirty = !0))));
      };
      return Ho;
    })();
    function jo(t, e, n) {
      return new _Ho(t, e, n);
    }
    function Yo(t, e) {
      var n = e.__key,
        o = t.offset,
        r = "element";
      if (Ko(e)) {
        r = "text";
        var _t92 = e.getTextContentSize();
        o > _t92 && (o = _t92);
      } else if (!cs(e)) {
        var _t93 = e.getNextSibling();
        if (Ko(_t93)) ((n = _t93.__key), (o = 0), (r = "text"));
        else {
          var _t94 = e.getParent();
          _t94 && ((n = _t94.__key), (o = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, o, r);
    }
    function Jo(t, e) {
      if (cs(e)) {
        var _n50 = e.getLastDescendant();
        cs(_n50) || Ko(_n50) ? Yo(t, _n50) : Yo(t, e);
      } else Yo(t, e);
    }
    var _Go = (function () {
      function Go(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto0 = Go.prototype;
      _proto0.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto0.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto0.is = function is(t) {
        if (!Xo(t)) return !1;
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
        return new Go(new Set(this._nodes));
      };
      _proto0.extract = function extract() {
        return this.getNodes();
      };
      _proto0.insertRawText = function insertRawText(t) {};
      _proto0.insertText = function insertText() {};
      _proto0.insertNodes = function insertNodes(t) {
        var e = this.getNodes().filter(function (t) {
            return null === Gl(t);
          }),
          n = e.length;
        if (0 === n) return;
        var o = e[n - 1];
        var r;
        if (Ko(o)) r = o.select();
        else {
          var _t95 = o.getIndexWithinParent() + 1;
          r = o.getParentOrThrow().select(_t95, _t95);
        }
        r.insertNodes(t);
        for (var _t96 = 0; _t96 < n; _t96++) e[_t96].remove();
      };
      _proto0.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = this._nodes,
          n = [];
        for (var _t97 of e) {
          var _e78 = li(_t97);
          null !== _e78 && n.push(_e78);
        }
        return (zr() || (this._cachedNodes = n), n);
      };
      _proto0.getTextContent = function getTextContent() {
        var t = this.getNodes();
        var e = "";
        for (var _n51 = 0; _n51 < t.length; _n51++)
          e += t[_n51].getTextContent();
        return e;
      };
      _proto0.deleteNodes = function deleteNodes() {
        var t = this.getNodes().filter(function (t) {
          return null === Gl(t);
        });
        if ((_r() || pr()) === this && t[0]) {
          var _e79 = bc(t[0], "next");
          Gc(Kc(_e79, _e79));
        }
        for (var _e80 of t) _e80.remove();
      };
      return Go;
    })();
    function Vo(t) {
      return t instanceof _qo;
    }
    var _qo = (function () {
      function qo(t, e, n, o) {
        ((this.anchor = t),
          (this.focus = e),
          (t._selection = this),
          (e._selection = this),
          (this._cachedNodes = null),
          (this._cachedIsBackward = null),
          (this.format = n),
          (this.style = o),
          (this.dirty = !1));
      }
      var _proto1 = qo.prototype;
      _proto1.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto1.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto1.is = function is(t) {
        return (
          !!Vo(t) &&
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
            o = _t$getTextSlices[1];
          n && e.push(n.caret.origin);
          var r = new Set(),
            s = new Set();
          for (var _n52 of t)
            if (vc(_n52)) {
              var _t98 = _n52.origin;
              0 === e.length ? r.add(_t98) : (s.add(_t98), e.push(_t98));
            } else {
              var _t99 = _n52.origin;
              (cs(_t99) && s.has(_t99)) || e.push(_t99);
            }
          o && e.push(o.caret.origin);
          if (
            Tc(t.focus) &&
            cs(t.focus.origin) &&
            null === t.focus.getNodeAtCaret()
          )
            for (
              var _n53 = Dc(t.focus.origin, "previous");
              vc(_n53) &&
              r.has(_n53.origin) &&
              !_n53.origin.isEmpty() &&
              _n53.origin.is(e[e.length - 1]);
              _n53 = Pc(_n53)
            )
              (r["delete"](_n53.origin), e.pop());
          for (; e.length > 1; ) {
            var _t100 = e[e.length - 1];
            if (!cs(_t100) || s.has(_t100) || _t100.isEmpty() || r.has(_t100))
              break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n54 = ea(t.anchor),
              _o32 = ea(t.anchor.getFlipped()),
              _r26 = function _r26(t) {
                return Nc(t) ? t.origin : t.getNodeAtCaret();
              },
              _s22 =
                _r26(_n54) ||
                _r26(_o32) ||
                (t.anchor.getNodeAtCaret() ? _n54.origin : _o32.origin);
            e.push(_s22);
          }
          return e;
        })(ra(qc(this), "next"));
        return (zr() || (this._cachedNodes = e), e);
      };
      _proto1.setTextNodeRange = function setTextNodeRange(t, e, n, o) {
        return (
          this.anchor.set(t.__key, e, "text"),
          this.focus.set(n.__key, o, "text"),
          this
        );
      };
      _proto1.getTextContent = function getTextContent() {
        var t = this.getNodes();
        if (0 === t.length) return "";
        var e = t[0],
          n = t[t.length - 1],
          o = this.anchor,
          r = this.focus,
          s = o.isBefore(r),
          _Zo = Zo(this),
          i = _Zo[0],
          l = _Zo[1];
        var c = "",
          a = !0;
        for (var _u8 = 0; _u8 < t.length; _u8++) {
          var _f7 = t[_u8];
          if (cs(_f7) && !_f7.isInline()) {
            a || (c += "\n");
            var _t101 = "";
            for (var _e81 of Zl(_f7)) {
              var _n55 = tc(_f7, _e81);
              null !== _n55 && (_t101 += _n55.getTextContent());
            }
            "" !== _t101 ? ((c += _t101), (a = !1)) : (a = !_f7.isEmpty());
          } else if (((a = !1), Ko(_f7))) {
            var _t102 = _f7.getTextContent();
            (_f7 === e
              ? _f7 === n
                ? ("element" === o.type &&
                    "element" === r.type &&
                    r.offset !== o.offset) ||
                  (_t102 = i < l ? _t102.slice(i, l) : _t102.slice(l, i))
                : (_t102 = s ? _t102.slice(i) : _t102.slice(l))
              : _f7 === n &&
                (_t102 = s ? _t102.slice(0, l) : _t102.slice(0, i)),
              (c += _t102));
          } else
            (!fs(_f7) && !Ns(_f7)) ||
              (_f7 === n && this.isCollapsed()) ||
              (c += _f7.getTextContent());
        }
        return c;
      };
      _proto1.applyDOMRange = function applyDOMRange(t) {
        var e = Hr(),
          n = e.getEditorState()._selection,
          o = ar(
            t.startContainer,
            t.startOffset,
            t.endContainer,
            t.endOffset,
            e,
            n,
          );
        if (null === o) return;
        var r = o[0],
          s = o[1],
          i = o[2];
        (this.anchor.set(r.key, r.offset, r.type, !0),
          this.focus.set(s.key, s.offset, s.type, !0),
          i && (this.dirty = !0),
          Tt(this));
      };
      _proto1.clone = function clone() {
        var t = this.anchor,
          e = this.focus;
        return new qo(
          jo(t.key, t.offset, t.type),
          jo(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto1.toggleFormat = function toggleFormat(t) {
        ((this.format = ti(this.format, t, null)), (this.dirty = !0));
      };
      _proto1.setFormat = function setFormat(t) {
        ((this.format = t), (this.dirty = !0));
      };
      _proto1.setStyle = function setStyle(t) {
        ((this.style = t), (this.dirty = !0));
      };
      _proto1.hasFormat = function hasFormat(t) {
        var e = A[t];
        return 0 !== (this.format & e);
      };
      _proto1.insertRawText = function insertRawText(t) {
        this.insertNodes(kr(t));
      };
      _proto1.insertText = function insertText(e) {
        var n = this.anchor,
          o = this.focus,
          r = this.format,
          s = this.style;
        var i = n,
          l = o;
        (!this.isCollapsed() && o.isBefore(n) && ((i = o), (l = n)),
          "element" === i.type &&
            (function (t, e, n, o) {
              var r = t.getNode(),
                s = r.getChildAtIndex(t.offset),
                i = $o();
              if ((i.setFormat(n), i.setStyle(o), Ms(s))) s.splice(0, 0, [i]);
              else if (null !== s) {
                var _t103 = Yi(r) ? bs().append(i) : i;
                s.insertBefore(_t103);
              } else if (Yi(r)) {
                var _t104 = r.getLastChild();
                cs(_t104) && !_t104.isInline() && _t104.isEmpty()
                  ? _t104.append(i)
                  : r.append(bs().append(i));
              } else r.append(i);
              (t.is(e) && e.set(i.__key, 0, "text"), t.set(i.__key, 0, "text"));
            })(i, l, r, s),
          "element" === l.type && Jc(l, ea(Yc(l, "next"))));
        var c = i.offset;
        var a = l.offset;
        var u = this.getNodes(),
          f = u.length;
        var d = u[0];
        Ko(d) || t(26);
        var h = d.getTextContent().length,
          g = d.getParentOrThrow();
        var _ = u[f - 1];
        if (
          (1 === f &&
            "element" === l.type &&
            ((a = h), l.set(i.key, a, "text")),
          this.isCollapsed() &&
            c === h &&
            (qs(d) ||
              !d.canInsertTextAfter() ||
              (!g.canInsertTextAfter() && null === d.getNextSibling())))
        ) {
          var _t105 = d.getNextSibling();
          var _n56;
          if (
            (Ko(_t105) && _t105.canInsertTextBefore() && !qs(_t105)
              ? (_n56 = _t105)
              : ((_n56 = $o()),
                _n56.setFormat(r),
                _n56.setStyle(s),
                g.canInsertTextAfter()
                  ? d.insertAfter(_n56)
                  : g.insertAfter(_n56)),
            _n56.select(0, 0),
            (d = _n56),
            "" !== e)
          )
            return void this.insertText(e);
        } else if (
          this.isCollapsed() &&
          0 === c &&
          (qs(d) ||
            !d.canInsertTextBefore() ||
            (!g.canInsertTextBefore() && null === d.getPreviousSibling()))
        ) {
          var _t106 = d.getPreviousSibling();
          var _n57;
          if (
            (!Ko(_t106) || qs(_t106)
              ? ((_n57 = $o()),
                _n57.setFormat(r),
                g.canInsertTextBefore()
                  ? d.insertBefore(_n57)
                  : g.insertBefore(_n57))
              : (_n57 = _t106),
            _n57.select(),
            (d = _n57),
            "" !== e)
          )
            return void this.insertText(e);
        } else if (d.isSegmented() && c !== h) {
          var _t107 = $o(d.getTextContent());
          (_t107.setFormat(r), d.replace(_t107), (d = _t107));
        } else if (!this.isCollapsed() && "" !== e) {
          var _t108 = _.getParent();
          if (
            !g.canInsertTextBefore() ||
            !g.canInsertTextAfter() ||
            (cs(_t108) &&
              (!_t108.canInsertTextBefore() || !_t108.canInsertTextAfter()))
          )
            return (
              this.insertText(""),
              sr(this.anchor, this.focus),
              void this.insertText(e)
            );
        }
        if (1 === f) {
          if (Vs(d)) {
            var _t109 = $o(e);
            return (_t109.select(), void d.replace(_t109));
          }
          var _t110 = d.getFormat(),
            _n58 = d.getStyle();
          if (c !== a || (_t110 === r && _n58 === s)) {
            if (Uo(d)) {
              var _t111 = $o(e);
              return (
                _t111.setFormat(r),
                _t111.setStyle(s),
                _t111.select(),
                void d.replace(_t111)
              );
            }
          } else {
            if ("" !== d.getTextContent()) {
              var _t112 = $o(e);
              if (
                (_t112.setFormat(r), _t112.setStyle(s), _t112.select(), 0 === c)
              )
                d.insertBefore(_t112, !1);
              else {
                var _d$splitText = d.splitText(c),
                  _e82 = _d$splitText[0];
                _e82.insertAfter(_t112, !1);
              }
              return void (
                _t112.isComposing() &&
                "text" === this.anchor.type &&
                ((this.anchor.offset -= e.length),
                (this._cachedNodes = null),
                (this._cachedIsBackward = null))
              );
            }
            (d.setFormat(r), d.setStyle(s));
          }
          var _o33 = a - c;
          ((d = d.spliceText(c, _o33, e, !0)),
            "" === d.getTextContent()
              ? d.remove()
              : "text" === this.anchor.type &&
                ((this.format = _t110),
                (this.style = _n58),
                d.isComposing() &&
                  ((this.anchor.offset -= e.length),
                  (this._cachedNodes = null),
                  (this._cachedIsBackward = null))));
        } else {
          var _t113 = new Set([].concat(d.getParentKeys(), _.getParentKeys())),
            _n59 = cs(d) ? d : d.getParentOrThrow();
          var _o34 = cs(_) ? _ : _.getParentOrThrow(),
            _r27 = _;
          if (!_n59.is(_o34) && _o34.isInline())
            do {
              ((_r27 = _o34), (_o34 = _o34.getParentOrThrow()));
            } while (_o34.isInline());
          if (
            ("text" === l.type && (0 !== a || "" === _.getTextContent())) ||
            ("element" === l.type && _.getIndexWithinParent() < a)
          ) {
            if (Ko(_) && !Vs(_) && a !== _.getTextContentSize()) {
              if (_.isSegmented()) {
                var _t114 = $o(_.getTextContent());
                (_.replace(_t114), (_ = _t114));
              }
              (hs(l.getNode()) ||
                "text" !== l.type ||
                (_ = _.spliceText(0, a, "")),
                _t113.add(_.__key));
            } else {
              var _t115 = _.getParentOrThrow();
              _t115.canBeEmpty() || 1 !== _t115.getChildrenSize()
                ? _.remove()
                : _t115.remove();
            }
          } else _t113.add(_.__key);
          var _s23 = _o34.getChildren(),
            _i16 = new Set(u),
            _g6 = _n59.is(_o34),
            _p3 = _n59.isInline() && null === d.getNextSibling() ? _n59 : d;
          for (var _t116 = _s23.length - 1; _t116 >= 0; _t116--) {
            var _e83 = _s23[_t116];
            if (_e83.is(d) || (cs(_e83) && _e83.isParentOf(d))) break;
            _e83.isAttached() &&
              (!_i16.has(_e83) || _e83.is(_r27)
                ? _g6 || _p3.insertAfter(_e83, !1)
                : _e83.remove());
          }
          if (!_g6) {
            var _e84 = _o34,
              _n60 = null;
            for (; null !== _e84; ) {
              var _o35 = _e84.getChildren(),
                _r28 = _o35.length;
              ((0 === _r28 || _o35[_r28 - 1].is(_n60)) &&
                (_t113["delete"](_e84.__key), (_n60 = _e84)),
                (_e84 = _e84.getParent()));
            }
          }
          if (Vs(d)) {
            if (c === h) d.select();
            else {
              var _t117 = $o(e);
              (_t117.select(), d.replace(_t117));
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
          for (var _e85 = 1; _e85 < f; _e85++) {
            var _n61 = u[_e85],
              _o36 = _n61.__key;
            _t113.has(_o36) || _n61.remove();
          }
        }
      };
      _proto1.removeText = function removeText() {
        var t = _r() === this;
        (Vc(this, ta(qc(this))), t && _r() !== this && _i(this));
      };
      _proto1.formatText = function formatText(t, e) {
        var _d$splitText2, _p$splitText;
        if (e === void 0) {
          e = null;
        }
        if (this.isCollapsed()) return (this.toggleFormat(t), void si(null));
        var n = this.getNodes(),
          o = [];
        for (var _t118 of n) Ko(_t118) && o.push(_t118);
        var r = function r(e) {
            n.forEach(function (n) {
              if (cs(n)) {
                var _o37 = n.getFormatFlags(t, e);
                n.setTextFormat(_o37);
              }
            });
          },
          s = o.length;
        if (0 === s) return (this.toggleFormat(t), si(null), void r(e));
        var i = this.anchor,
          l = this.focus,
          c = this.isBackward(),
          a = c ? l : i,
          u = c ? i : l;
        var f = 0,
          d = o[0],
          h = "element" === a.type ? 0 : a.offset;
        if (
          ("text" === a.type &&
            h === d.getTextContentSize() &&
            ((f = 1), (d = o[1]), (h = 0)),
          null == d)
        )
          return;
        var g = d.getFormatFlags(t, e);
        r(g);
        var _ = s - 1;
        var p = o[_];
        var y = "text" === u.type ? u.offset : p.getTextContentSize();
        if (d.is(p)) {
          if (h === y) return;
          if (qs(d) || (0 === h && y === d.getTextContentSize()))
            d.setFormat(g);
          else {
            var _t119 = d.splitText(h, y),
              _e86 = 0 === h ? _t119[0] : _t119[1];
            (_e86.setFormat(g),
              "text" === a.type && a.set(_e86.__key, 0, "text"),
              "text" === u.type && u.set(_e86.__key, y - h, "text"));
          }
          return void (this.format = g);
        }
        (0 === h ||
          qs(d) ||
          ((_d$splitText2 = d.splitText(h)), (d = _d$splitText2[1]), (h = 0)),
          d.setFormat(g));
        var m = p.getFormatFlags(t, g);
        y > 0 &&
          (y === p.getTextContentSize() ||
            qs(p) ||
            ((_p$splitText = p.splitText(y)),
            (p = _p$splitText[0]),
            _p$splitText),
          p.setFormat(m));
        for (var _e87 = f + 1; _e87 < _; _e87++) {
          var _n62 = o[_e87],
            _r29 = _n62.getFormatFlags(t, m);
          _n62.setFormat(_r29);
        }
        ("text" === a.type && a.set(d.__key, h, "text"),
          "text" === u.type && u.set(p.__key, y, "text"),
          (this.format = g | m));
      };
      _proto1.insertNodes = function insertNodes(n) {
        if (0 === n.length) return;
        this.isCollapsed() || this.removeText();
        var o = this.anchor.getNode();
        if ("element" === this.anchor.type && cs(o) && null !== Gl(o)) {
          var _o$getFirstChild;
          var _t120 = o.isShadowRoot()
            ? (_o$getFirstChild = o.getFirstChild()) != null
              ? _o$getFirstChild
              : o.append(bs()).getFirstChild()
            : o.getFirstChild();
          if (o.isShadowRoot() && null !== _t120 && !cs(_t120)) {
            var _e88 = bs();
            (_t120.insertBefore(_e88), (_t120 = _e88));
          }
          if (null !== _t120) {
            _t120.selectStart();
            var _o38 = _r();
            return (
              Vo(_o38) ||
                e(
                  "Expected RangeSelection after redirecting into slot subtree",
                ),
              _o38.insertNodes(n)
            );
          }
        }
        if ("element" === this.anchor.type && Yi(o)) {
          var _t121 = Ar(n),
            _e89 = _t121.getLastDescendant();
          return (
            o.splice(this.anchor.offset, 0, _t121.getChildren()),
            void (null !== _e89 && _e89.selectEnd())
          );
        }
        var r = (this.isBackward() ? this.focus : this.anchor).getNode(),
          s = Wl(r, Sl),
          i = n[n.length - 1];
        if (cs(s) && "__language" in s) {
          if ("__language" in n[0]) this.insertText(n[0].getTextContent());
          else {
            var _t122 = Or(this);
            (s.splice(_t122, 0, n), i.selectEnd());
          }
          return;
        }
        if (
          !n.some(function (t) {
            return (cs(t) || fs(t)) && !t.isInline();
          })
        ) {
          cs(s) || t(211, r.constructor.name, r.getType());
          var _e90 = Or(this);
          return (s.splice(_e90, 0, n), void i.selectEnd());
        }
        if (cs(s) && null !== Gl(s)) {
          var _t123 = Or(this),
            _e91 = Er(n);
          s.splice(_t123, 0, _e91);
          var _o39 = _e91[_e91.length - 1];
          return void (void 0 !== _o39
            ? _o39.selectEnd()
            : s.select(_t123, _t123));
        }
        if (null === s) {
          var _t124 = Ar(n),
            _e92 = _t124.getLastDescendant();
          var _o40 = Yc(this.anchor, "next");
          for (var _e93 of _t124.getChildren()) _o40 = aa(_e93, _o40);
          return void (null !== _e92 && _e92.selectEnd());
        }
        if (cs(s) && !s.isParentRequired() && !Yi(s.getParentOrThrow())) {
          var _t125 = Or(this),
            _e94 = Er(n);
          s.splice(_t125, 0, _e94);
          var _o41 = _e94[_e94.length - 1];
          return void (void 0 !== _o41
            ? _o41.selectEnd()
            : s.select(_t125, _t125));
        }
        var l = Ar(n),
          c = l.getLastDescendant(),
          a = l.getChildren(),
          u = !cs(s) || !s.isEmpty() ? this.insertParagraph() : null,
          f = a[a.length - 1];
        var d = a[0];
        var h;
        (cs((h = d)) &&
          Sl(h) &&
          !h.isEmpty() &&
          cs(s) &&
          (!s.isEmpty() || s.canMergeWhenEmpty()) &&
          (cs(s) || t(211, r.constructor.name, r.getType()),
          s.append.apply(s, d.getChildren()),
          (d = a[1])),
          d &&
            (null === s && t(212, r.constructor.name, r.getType()),
            (function (e, n) {
              var o = n.getParentOrThrow().getLastChild();
              var r = n;
              var s = [n];
              for (; r !== o; )
                (r.getNextSibling() || t(140),
                  (r = r.getNextSibling()),
                  s.push(r));
              var i = e;
              for (var _t126 of s) i = i.insertAfter(_t126);
            })(s, d)));
        var g = Wl(c, Sl);
        (u &&
          cs(g) &&
          (u.canMergeWhenEmpty() || Sl(f)) &&
          (g.append.apply(g, u.getChildren()), u.remove()),
          cs(s) && s.isEmpty() && s.remove(),
          c.selectEnd());
        var _ = cs(s) ? s.getLastChild() : null;
        Ns(_) && g !== s && _.remove();
      };
      _proto1.insertParagraph = function insertParagraph() {
        var e = this.anchor.getNode();
        if ("element" === this.anchor.type && Yi(e)) {
          var _t127 = bs();
          return (
            e.splice(this.anchor.offset, 0, [_t127]),
            _t127.select(),
            _t127
          );
        }
        var n = Or(this),
          o = Wl(this.anchor.getNode(), Sl);
        if (null !== o && null !== Gl(o)) return null;
        cs(o) || t(213);
        var r = o.getChildAtIndex(n),
          s = r ? [r].concat(r.getNextSiblings()) : [],
          i = o.insertNewAfter(this, !1);
        return i ? (i.append.apply(i, s), i.selectStart(), i) : null;
      };
      _proto1.insertLineBreak = function insertLineBreak(t) {
        var e = Ss();
        if ((this.insertNodes([e]), t)) {
          var _t128 = e.getParentOrThrow(),
            _n63 = e.getIndexWithinParent();
          _t128.select(_n63, _n63);
        }
      };
      _proto1.extract = function extract() {
        var _n$splitText;
        var t = [].concat(this.getNodes()),
          e = t.length;
        var n = t[0],
          o = t[e - 1];
        var _Zo2 = Zo(this),
          r = _Zo2[0],
          s = _Zo2[1],
          i = this.isBackward(),
          _ref27 = i ? [this.focus, this.anchor] : [this.anchor, this.focus],
          l = _ref27[0],
          c = _ref27[1],
          _ref28 = i ? [s, r] : [r, s],
          a = _ref28[0],
          u = _ref28[1];
        if (0 === e) return [];
        if (1 === e) {
          if (Ko(n) && !this.isCollapsed()) {
            var _t129 = n.splitText(a, u),
              _e95 = 0 === a ? _t129[0] : _t129[1];
            return _e95
              ? (l.set(_e95.getKey(), 0, "text"),
                c.set(_e95.getKey(), _e95.getTextContentSize(), "text"),
                [_e95])
              : [];
          }
          return [n];
        }
        if (
          (Ko(n) &&
            (a === n.getTextContentSize()
              ? t.shift()
              : 0 !== a &&
                ((_n$splitText = n.splitText(a)),
                (n = _n$splitText[1]),
                (t[0] = n),
                l.set(n.getKey(), 0, "text"))),
          Ko(o))
        ) {
          var _o$splitText;
          var _e96 = o.getTextContent().length;
          0 === u
            ? t.pop()
            : u !== _e96 &&
              ((_o$splitText = o.splitText(u)),
              (o = _o$splitText[0]),
              (t[t.length - 1] = o),
              c.set(o.getKey(), o.getTextContentSize(), "text"));
        }
        return t;
      };
      _proto1.modify = function modify(t, e, n) {
        if (wr(this, t, e, n)) return;
        var o = "move" === t,
          r = Hr(),
          s = Zi(Ui(r));
        if (!s) return;
        var i = r._blockCursorElement,
          l = r._rootElement,
          c = this.focus.getNode();
        if (
          (null === l ||
            null === i ||
            !cs(c) ||
            c.isInline() ||
            c.canBeEmpty() ||
            Qi(i, r, l),
          this.dirty)
        ) {
          var _t130 = Ri(r, this.anchor.key),
            _e97 = Ri(r, this.focus.key);
          var _n64 = _t130,
            _o42 = _e97;
          if ("text" === this.anchor.type) {
            var _e98 = this.anchor.getNode();
            _n64 = Ko(_e98) ? El(_e98, _t130, r) : null;
          }
          if ("text" === this.focus.type) {
            var _t131 = this.focus.getNode();
            _o42 = Ko(_t131) ? El(_t131, _e97, r) : null;
          }
          _n64 &&
            _o42 &&
            Sr(s, _n64, this.anchor.offset, _o42, this.focus.offset);
        }
        if (
          ((function (t, e, n, o) {
            t.modify(e, n, o);
          })(s, t, e ? "backward" : "forward", n),
          s.rangeCount > 0)
        ) {
          var _t132 = sl(s, r._rootElement),
            _n65 = _t132 || s.getRangeAt(0),
            _i17 = this.anchor.getNode(),
            _l9 = hs(_i17) ? _i17 : ji(_i17);
          if ((this.applyDOMRange(_n65), (this.dirty = !0), !o)) {
            var _o43 = this.getNodes(),
              _r30 = [];
            var _i18 = !1;
            for (var _t133 = 0; _t133 < _o43.length; _t133++) {
              var _e99 = _o43[_t133];
              Bi(_e99, _l9) ? _r30.push(_e99) : (_i18 = !0);
            }
            if (_i18 && _r30.length > 0)
              if (e) {
                var _t134 = _r30[0];
                cs(_t134)
                  ? _t134.selectStart()
                  : _t134.getParentOrThrow().selectStart();
              } else {
                var _t135 = _r30[_r30.length - 1];
                cs(_t135)
                  ? _t135.selectEnd()
                  : _t135.getParentOrThrow().selectEnd();
              }
            (_t132
              ? "backward" !== s.direction
              : s.anchorNode === _n65.startContainer &&
                s.anchorOffset === _n65.startOffset) ||
              (function (t) {
                var e = t.focus,
                  n = t.anchor,
                  o = n.key,
                  r = n.offset,
                  s = n.type;
                (n.set(e.key, e.offset, e.type, !0), e.set(o, r, s, !0));
              })(this);
          }
        }
        "lineboundary" === n && wr(this, t, e, n, "decorators");
      };
      _proto1.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            cs(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t136 = e.getParent(),
            _n66 =
              e.getNextSibling() ||
              (null === _t136 ? null : _t136.getNextSibling());
          if (cs(_n66) && _n66.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto1.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e100 = this.anchor;
          var _n67 = _e100.getNode();
          if (this.forwardDeletion(_e100, _n67, t)) return;
          var _o44 = Lc(Yc(_e100, t ? "previous" : "next"));
          if (
            _o44.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            var _t137 = { type: "initial" };
            for (var _e101 of _o44.iterNodeCarets("shadowRoot"))
              if (vc(_e101)) {
                if (_e101.origin.isInline());
                else {
                  if (_e101.origin.isShadowRoot()) {
                    if ("merge-block" === _t137.type) break;
                    if (
                      cs(_o44.anchor.origin) &&
                      _o44.anchor.origin.isEmpty()
                    ) {
                      var _t138 = ea(_e101);
                      (Vc(this, Kc(_t138, _t138)), _o44.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t137.type &&
                    "merge-block" !== _t137.type) ||
                    (_t137 = {
                      block: _t137.block,
                      caret: _e101,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t137.type) break;
                if (Tc(_e101)) {
                  if (cs(_e101.origin)) {
                    if (_e101.origin.isInline()) {
                      if (!_e101.origin.isParentOf(_o44.anchor.origin)) break;
                    } else
                      _t137 = { block: _e101.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (fs(_e101.origin)) {
                    if (_e101.origin.isIsolated());
                    else if (Zl(_e101.origin).length > 0) {
                      if (
                        cs(_o44.anchor.origin) &&
                        _o44.anchor.origin.isEmpty()
                      ) {
                        _o44.anchor.origin.remove();
                        var _t139 = hr();
                        (_t139.add(_e101.origin.getKey()), _i(_t139));
                      }
                    } else if (
                      "merge-next-block" === _t137.type &&
                      (_e101.origin.isKeyboardSelectable() ||
                        !_e101.origin.isInline()) &&
                      cs(_o44.anchor.origin) &&
                      _o44.anchor.origin.isEmpty()
                    ) {
                      _o44.anchor.origin.remove();
                      var _t140 = hr();
                      (_t140.add(_e101.origin.getKey()), _i(_t140));
                    } else _e101.origin.remove();
                    return;
                  }
                  break;
                }
              }
            if ("merge-block" === _t137.type) {
              var _t141 = _t137,
                _e102 = _t141.caret,
                _n68 = _t141.block;
              if (Zl(_n68).length > 0) return;
              return _e102.origin.isEmpty() &&
                !_n68.isEmpty() &&
                _e102.origin.getParent() === _n68.getParent()
                ? void _e102.origin.remove(!0)
                : (Vc(
                    this,
                    Kc(
                      !_e102.origin.isEmpty() && _n68.isEmpty()
                        ? Xc(bc(_n68, _e102.direction))
                        : _o44.anchor,
                      _e102,
                    ),
                  ),
                  this.removeText());
            }
            for (var _t142 = _e100.getNode(); null !== _t142; ) {
              if (null !== Gl(_t142)) return;
              if (cs(_t142) && _t142.isShadowRoot()) break;
              _t142 = _t142.getParent();
            }
          }
          var _r31 = this.focus;
          if ((this.modify("extend", t, "character"), this.isCollapsed())) {
            if (t && 0 === _e100.offset && tr(this, _e100.getNode())) return;
          } else {
            var _o45 = "text" === _r31.type ? _r31.getNode() : null;
            if (
              ((_n67 = "text" === _e100.type ? _e100.getNode() : null),
              null !== _o45 && _o45.isSegmented())
            ) {
              var _e103 = _r31.offset,
                _s24 = _o45.getTextContentSize();
              if (_o45.is(_n67) || (t && _e103 !== _s24) || (!t && 0 !== _e103))
                return void nr(_o45, t, _e103);
            } else if (null !== _n67 && _n67.isSegmented()) {
              var _r32 = _e100.offset,
                _s25 = _n67.getTextContentSize();
              if (_n67.is(_o45) || (t && 0 !== _r32) || (!t && _r32 !== _s25))
                return void nr(_n67, t, _r32);
            }
            !(function (t, e) {
              var n = t.anchor,
                o = t.focus,
                r = n.getNode(),
                s = o.getNode();
              if (r === s && "text" === n.type && "text" === o.type) {
                var _t143 = n.offset,
                  _s26 = o.offset,
                  _i19 = _t143 < _s26,
                  _l0 = _i19 ? _t143 : _s26,
                  _c0 = _i19 ? _s26 : _t143,
                  _a8 = _c0 - 1;
                if (_l0 !== _a8) {
                  (function (t) {
                    return !(yi(t) || er(t));
                  })(r.getTextContent().slice(_l0, _c0)) &&
                    (e ? o.set(o.key, _a8, o.type) : n.set(n.key, _a8, n.type));
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
          var _t144 = this.anchor.getNode();
          _t144.isEmpty() &&
            hs(_t144.getParent()) &&
            null === _t144.getPreviousSibling() &&
            tr(this, _t144);
        }
      };
      _proto1.deleteLine = function deleteLine(t) {
        var e = ir(this.anchor);
        if (null !== e && fs(Vl(e)))
          return (
            this.isCollapsed() ||
              this.focus.set(
                this.anchor.key,
                this.anchor.offset,
                this.anchor.type,
              ),
            void this.deleteCharacter(t)
          );
        (this.isCollapsed() && this.modify("extend", t, "lineboundary"),
          this.isCollapsed() ? this.deleteCharacter(t) : this.removeText());
      };
      _proto1.deleteWord = function deleteWord(t) {
        if (this.isCollapsed()) {
          var _e104 = this.anchor,
            _n69 = _e104.getNode();
          if (this.forwardDeletion(_e104, _n69, t)) return;
          this.modify("extend", t, "word");
        }
        this.isCollapsed() ? this.deleteCharacter(t) : this.removeText();
      };
      _proto1.isBackward = function isBackward() {
        var t = this._cachedIsBackward;
        if (null !== t) return t;
        var e = this.focus.isBefore(this.anchor);
        return (zr() || (this._cachedIsBackward = e), e);
      };
      _proto1.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return qo;
    })();
    function Xo(t) {
      return t instanceof _Go;
    }
    function Qo(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function Zo(t) {
      var e = t.getStartEndPoints();
      if (null === e) return [0, 0];
      var n = e[0],
        o = e[1];
      return "element" === n.type &&
        "element" === o.type &&
        n.key === o.key &&
        n.offset === o.offset
        ? [0, 0]
        : [Qo(n), Qo(o)];
    }
    function tr(t, e) {
      for (var _n70 = e; _n70; _n70 = _n70.getParent()) {
        if (cs(_n70)) {
          if (_n70.collapseAtStart(t)) return !0;
          if (Yi(_n70)) break;
        }
        if (_n70.getPreviousSibling()) break;
      }
      return !1;
    }
    var er = (function () {
      try {
        var _t145 = new RegExp("\\p{Emoji}", "u"),
          _e105 = _t145.test.bind(_t145);
        if (
          _e105("\u2764\ufe0f") &&
          _e105("#\ufe0f\u20e3") &&
          _e105("\u{1f44d}")
        )
          return _e105;
      } catch (t) {}
      return function () {
        return !1;
      };
    })();
    function nr(t, e, n) {
      var o = t,
        r = o.getTextContent().split(/(?=\s)/g),
        s = r.length;
      var i = 0,
        l = 0;
      for (var _t146 = 0; _t146 < s; _t146++) {
        var _o46 = _t146 === s - 1;
        if (
          ((l = i), (i += r[_t146].length), (e && i === n) || i > n || _o46)
        ) {
          (r.splice(_t146, 1), _o46 && (l = void 0));
          break;
        }
      }
      var c = r.join("").trim();
      "" === c ? o.remove() : (o.setTextContent(c), o.select(l, l));
    }
    function or(e, n, o, r) {
      var s,
        i = n,
        l = !1;
      if (gl(e)) {
        var _c1 = !1;
        var _a9 = e.childNodes,
          _u9 = _a9.length,
          _f8 = r._blockCursorElement;
        (i === _u9 && _u9 > 0 && ((_c1 = !0), (i = _u9 - 1)),
          void 0 !== ui(e, r) || Ll(e, r) || (l = !0));
        var _d6 = _a9[i],
          _h6 = !1;
        if (_d6 === _f8) ((_d6 = _a9[i + 1]), (_h6 = !0));
        else if (null !== _f8) {
          var _t147 = _f8.parentNode;
          if (e === _t147) {
            n > Array.prototype.indexOf.call(_t147.children, _f8) && i--;
          }
        }
        if (((s = pi(_d6)), Ko(s))) i = Ac(s, _c1 ? "next" : "previous");
        else {
          var _a0 = pi(e);
          if (null === _a0) return null;
          if (cs(_a0)) {
            var _u0$resolveChildIndex;
            var _l1 = r.getElementByKey(_a0.getKey());
            null === _l1 && t(214);
            var _u0 = vl(_a0, _l1, r);
            ((_u0$resolveChildIndex = _u0.resolveChildIndex(_a0, _l1, e, n)),
              (_a0 = _u0$resolveChildIndex[0]),
              (i = _u0$resolveChildIndex[1]),
              cs(_a0) || t(215),
              _c1 &&
                i >= _a0.getChildrenSize() &&
                (i = Math.max(0, _a0.getChildrenSize() - 1)));
            var _f9 = _a0.getChildAtIndex(i);
            if (
              cs(_f9) &&
              (function (t, e, n) {
                var o = t.getParent();
                return (
                  null === n ||
                  null === o ||
                  !o.canBeEmpty() ||
                  o !== n.getNode()
                );
              })(_f9, 0, o)
            ) {
              var _t148 = _c1
                ? _f9.getLastDescendant()
                : _f9.getFirstDescendant();
              (null === _t148
                ? (_a0 = _f9)
                : ((_f9 = _t148),
                  (_a0 = cs(_f9) ? _f9 : _f9.getParentOrThrow())),
                (i = 0));
            }
            Ko(_f9)
              ? ((s = _f9),
                (_a0 = null),
                (i = Ac(_f9, _c1 ? "next" : "previous")))
              : _f9 !== _a0 &&
                _c1 &&
                !_h6 &&
                (cs(_a0) || t(216),
                (i = Math.min(_a0.getChildrenSize(), i + 1)));
          } else {
            var _t149 = Vl(_a0),
              _o47 = null !== _t149 ? _t149 : _a0,
              _s27 = _o47.getIndexWithinParent(),
              _l10 = r.getElementByKey(_a0.getKey());
            var _c10 = "after";
            if (null !== _l10 && pi(e) === _a0) {
              var _t150 = vl(_a0, _l10, r);
              _t150.element !== _l10
                ? (_c10 = _t150.resolveLeafPosition(_l10, e, n))
                : 0 === n && fs(_a0) && (_c10 = "before");
            }
            ((i = "before" === _c10 ? _s27 : _s27 + 1),
              (_a0 = _o47.getParentOrThrow()));
          }
          if (cs(_a0)) return [jo(_a0.__key, i, "element"), l];
        }
      } else s = pi(e);
      return Ko(s) ? [jo(s.__key, Ac(s, i, "clamp"), "text"), l] : null;
    }
    function rr(t, e, n) {
      var o = t.offset,
        r = t.getNode();
      if (0 === o) {
        var _o48 = r.getPreviousSibling(),
          _s28 = r.getParent();
        if (e) {
          if ((n || !e) && null === _o48 && cs(_s28) && _s28.isInline()) {
            var _e106 = _s28.getPreviousSibling();
            Ko(_e106) &&
              t.set(_e106.__key, _e106.getTextContent().length, "text");
          }
        } else
          cs(_o48) && !n && _o48.isInline()
            ? t.set(_o48.__key, _o48.getChildrenSize(), "element")
            : Ko(_o48) &&
              t.set(_o48.__key, _o48.getTextContent().length, "text");
      } else if (o === r.getTextContent().length) {
        var _o49 = r.getNextSibling(),
          _s29 = r.getParent();
        if (e && cs(_o49) && _o49.isInline()) t.set(_o49.__key, 0, "element");
        else if (
          (n || e) &&
          null === _o49 &&
          cs(_s29) &&
          _s29.isInline() &&
          !_s29.canInsertTextAfter()
        ) {
          var _e107 = _s29.getNextSibling();
          Ko(_e107) && t.set(_e107.__key, 0, "text");
        }
      }
    }
    function sr(t, e, n) {
      if ("text" === t.type && "text" === e.type) {
        var _n71 = t.isBefore(e),
          _o50 = t.is(e);
        (rr(t, _n71, _o50),
          rr(e, !_n71, _o50),
          _o50 && e.set(t.key, t.offset, t.type));
      }
    }
    function ir(t) {
      var e = li(t.key);
      return null === e ? null : Xl(e);
    }
    function lr(t, e, n) {
      var o = ir(t),
        r = ir(e);
      if (o === r || (null !== o && null !== r && o.is(r))) return !1;
      var s = n(o, r);
      if (null !== o)
        return (
          cs(o)
            ? e.set(o.getKey(), s ? o.getChildrenSize() : 0, "element")
            : e.set(o.getKey(), s ? o.getTextContentSize() : 0, "text"),
          !0
        );
      var i = Vl(r);
      if (null === i) return !1;
      var l = i.getParent();
      if (null === l) return !1;
      var c = i.getIndexWithinParent();
      return (e.set(l.getKey(), s ? c + 1 : c, "element"), !0);
    }
    function cr(t) {
      var e = lr(t.anchor, t.focus, function (e, n) {
        return (function (t, e, n, o) {
          if (null !== n && null !== o) {
            var _t151 = Vl(n),
              _e108 = Vl(o);
            if (null !== _t151 && _t151.is(_e108)) {
              for (var _e109 of Ql(_t151).values()) {
                if (_e109 === n.getKey()) return !0;
                if (_e109 === o.getKey()) return !1;
              }
              return !0;
            }
            return null === _t151 || null === _e108 || _t151.isBefore(_e108);
          }
          if (null !== n) {
            var _t152 = Vl(n),
              _o51 = li(e.key);
            return (
              null === _t152 ||
              null === _o51 ||
              !(!_t152.is(_o51) && !_t152.isParentOf(_o51)) ||
              _t152.isBefore(_o51)
            );
          }
          var r = Vl(o),
            s = li(t.key);
          return (
            null !== r &&
            null !== s &&
            !r.is(s) &&
            !r.isParentOf(s) &&
            s.isBefore(r)
          );
        })(t.anchor, t.focus, e, n);
      });
      return (e && (t.dirty = !0), e);
    }
    function ar(t, e, n, o, r, s) {
      if (null === t || null === n || !js(r, t, n)) return null;
      var i = or(t, e, Vo(s) ? s.anchor : null, r);
      if (null === i) return null;
      var l = or(n, o, Vo(s) ? s.focus : null, r);
      if (null === l) return null;
      var c = i[0],
        a = i[1],
        u = l[0],
        f = l[1];
      if ("element" === c.type && "element" === u.type) {
        var _e110 = pi(t),
          _o52 = pi(n);
        if (fs(_e110) && fs(_o52)) return null;
      }
      var d =
        r._slotsUsed &&
        lr(c, u, function () {
          return (
            0 !==
            (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_FOLLOWING)
          );
        });
      return (sr(c, u), [c, u, a || f || d]);
    }
    function ur(t) {
      return cs(t) && !t.isInline();
    }
    function fr(t, e, n, o, r, s) {
      var i = Ur(),
        l = new _qo(jo(t, e, r), jo(n, o, s), 0, "");
      return ((l.dirty = !0), (i._selection = l), l);
    }
    function dr() {
      var t = jo("root", 0, "element"),
        e = jo("root", 0, "element");
      return new _qo(t, e, 0, "");
    }
    function hr() {
      return new _Go(new Set());
    }
    function gr(t, e, n, o) {
      var r = n._window;
      if (null === r) return null;
      var s = o || r.event,
        i = s ? s.type : void 0,
        l = "selectionchange" === i,
        c =
          !q &&
          (l ||
            "beforeinput" === i ||
            "compositionstart" === i ||
            "compositionend" === i ||
            ("click" === i && s && 3 === s.detail) ||
            "drop" === i ||
            void 0 === i);
      var a, u, f, d;
      if (Vo(t) && !c) return t.clone();
      {
        if (null === e) return null;
        var _o53 = ll(e, n._rootElement);
        if (
          ((a = _o53.anchorNode),
          (u = _o53.focusNode),
          (f = _o53.anchorOffset),
          (d = _o53.focusOffset),
          (l || void 0 === i) && Vo(t) && !js(n, a, u))
        )
          return t.clone();
      }
      var h = ar(a, f, u, d, n, t);
      if (null === h) return null;
      var g = h[0],
        _ = h[1],
        p = h[2];
      var y = 0,
        m = "";
      if (Vo(t)) {
        var _e111 = t.anchor;
        if (g.key === _e111.key) ((y = t.format), (m = t.style));
        else {
          var _t153 = g.getNode();
          Ko(_t153)
            ? ((y = _t153.getFormat()), (m = _t153.getStyle()))
            : cs(_t153) &&
              ((y = _t153.getTextFormat()), (m = _t153.getTextStyle()));
        }
      }
      var x = new _qo(g, _, y, m);
      return (p && (x.dirty = !0), x);
    }
    function _r() {
      return Ur()._selection;
    }
    function pr() {
      return Hr()._editorState._selection;
    }
    function yr(t, e, n, o) {
      if (o === void 0) {
        o = 1;
      }
      var r = t.anchor,
        s = t.focus,
        i = r.getNode(),
        l = s.getNode();
      if (!e.is(i) && !e.is(l)) return;
      var c = e.__key;
      if (t.isCollapsed()) {
        var _e112 = r.offset;
        if ((n <= _e112 && o > 0) || (n < _e112 && o < 0)) {
          var _n72 = Math.max(0, _e112 + o);
          (r.set(c, _n72, "element"), s.set(c, _n72, "element"), mr(t));
        }
      } else {
        var _i20 = t.isBackward(),
          _l11 = _i20 ? s : r,
          _a1 = _l11.getNode(),
          _u1 = _i20 ? r : s,
          _f0 = _u1.getNode();
        if (e.is(_a1)) {
          var _t154 = _l11.offset;
          ((n <= _t154 && o > 0) || (n < _t154 && o < 0)) &&
            _l11.set(c, Math.max(0, _t154 + o), "element");
        }
        if (e.is(_f0)) {
          var _t155 = _u1.offset;
          ((n <= _t155 && o > 0) || (n < _t155 && o < 0)) &&
            _u1.set(c, Math.max(0, _t155 + o), "element");
        }
      }
      mr(t);
    }
    function mr(t) {
      var e = t.anchor,
        n = e.offset,
        o = t.focus,
        r = o.offset,
        s = e.getNode(),
        i = o.getNode();
      if (t.isCollapsed()) {
        if (!cs(s)) return;
        var _t156 = s.getChildrenSize(),
          _r33 = n >= _t156,
          _i21 = _r33 ? s.getChildAtIndex(_t156 - 1) : s.getChildAtIndex(n);
        if (Ko(_i21)) {
          var _t157 = 0;
          (_r33 && (_t157 = _i21.getTextContentSize()),
            e.set(_i21.__key, _t157, "text"),
            o.set(_i21.__key, _t157, "text"));
        }
        return;
      }
      if (cs(s)) {
        var _t158 = s.getChildrenSize(),
          _o54 = n >= _t158,
          _r34 = _o54 ? s.getChildAtIndex(_t158 - 1) : s.getChildAtIndex(n);
        if (Ko(_r34)) {
          var _t159 = 0;
          (_o54 && (_t159 = _r34.getTextContentSize()),
            e.set(_r34.__key, _t159, "text"));
        }
      }
      if (cs(i)) {
        var _t160 = i.getChildrenSize(),
          _e113 = r >= _t160,
          _n73 = _e113 ? i.getChildAtIndex(_t160 - 1) : i.getChildAtIndex(r);
        if (Ko(_n73)) {
          var _t161 = 0;
          (_e113 && (_t161 = _n73.getTextContentSize()),
            o.set(_n73.__key, _t161, "text"));
        }
      }
    }
    function xr(t, e, n, o, r) {
      var s = null,
        i = 0,
        l = null;
      (null !== o
        ? ((s = o.__key),
          Ko(o)
            ? ((i = o.getTextContentSize()), (l = "text"))
            : cs(o) && ((i = o.getChildrenSize()), (l = "element")))
        : null !== r &&
          ((s = r.__key), Ko(r) ? (l = "text") : cs(r) && (l = "element")),
        null !== s && null !== l
          ? t.set(s, i, l)
          : ((i = e.getIndexWithinParent()),
            -1 === i && (i = n.getChildrenSize()),
            t.set(n.__key, i, "element")));
    }
    function Cr(t, e, n, o, r) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : r), "text")
        : t.offset > o.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function Sr(t, e, n, o, r) {
      try {
        t.setBaseAndExtent(e, n, o, r);
      } catch (t) {}
    }
    function Nr(t, e, n) {
      var o = Ri(t, e.getKey());
      if (cs(e)) {
        var _r35 = vl(e, o, t);
        return [_r35.element, n + _r35.getFirstChildOffset()];
      }
      return [o, n];
    }
    function Tr(t, e, n, o, r, i) {
      var l = i.getRootNode(),
        c = Qs(l) || el(l) ? dl(l) : null;
      if ((r.has(ho) && c !== i) || (null !== c && Hs(c, c))) return;
      var a = ll(o, i);
      var u;
      if (!Vo(e))
        return void (
          null !== t &&
          js(n, a.anchorNode, a.focusNode) &&
          o.removeAllRanges()
        );
      var f = e.anchor,
        d = e.focus,
        h = f.getNode(),
        g = d.getNode(),
        _Nr = Nr(n, h, f.offset),
        _ = _Nr[0],
        p = _Nr[1],
        _Nr2 = Nr(n, g, d.offset),
        y = _Nr2[0],
        m = _Nr2[1],
        x = e.format,
        C = e.style,
        S = e.isCollapsed();
      var N = _,
        T = y,
        v = !1;
      if (
        ("text" === f.type
          ? ((N = Ko(h) ? El(h, _, n) : null),
            (v = h.getFormat() !== x || h.getStyle() !== C))
          : Vo(t) && "text" === t.anchor.type && (v = !0),
        "text" === d.type && (T = Ko(g) ? El(g, y, n) : null),
        null !== N && null !== T)
      ) {
        var k, E, O, b, M;
        if (
          (S &&
            (null === t || v || (Vo(t) && (t.format !== x || t.style !== C))) &&
            ((k = x),
            (E = C),
            (O = p),
            (b = f.key),
            (M = performance.now()),
            (Rn = [k, E, O, b, M])),
          ("Range" !== o.type || !S) &&
            a.anchorOffset === p &&
            a.focusOffset === m &&
            a.anchorNode === N &&
            a.focusNode === T)
        ) {
          if (null === c || !i.contains(c)) {
            var _t162 = null !== c ? Js(c) : null;
            (null !== _t162 && _t162 !== n) ||
              r.has(po) ||
              i.focus({ preventScroll: !0 });
          }
          if ("element" !== f.type) return;
        }
        if (
          (Sr(o, N, p, T, m), s && e.isCollapsed() && null !== i && !r.has(po))
        ) {
          var _t163 = fl(i);
          if (null === _t163 || !i.contains(_t163)) {
            var _t164 = dl(i.ownerDocument),
              _e114 = null !== _t164 ? Js(_t164) : null;
            (null !== _e114 && _e114 !== n) || i.focus({ preventScroll: !0 });
          }
        }
        if (!r.has(go) && e.isCollapsed() && null !== i && i === fl(i)) {
          var _t165 =
            Vo(e) && "element" === e.anchor.type
              ? N.childNodes[p] || null
              : (void 0 === u && (u = il(o, i)), u);
          if (null !== _t165) {
            var _e115;
            if (Xs(_t165)) {
              var _n74 = _t165.ownerDocument.createRange();
              (_n74.selectNode(_t165), (_e115 = _n74.getBoundingClientRect()));
            } else _e115 = _t165.getBoundingClientRect();
            !(function (t, e, n) {
              var o = $i(n),
                r = Wi(o);
              if (null === o || null === r) return;
              var s = e.top,
                i = e.bottom,
                l = 0,
                c = 0,
                a = n;
              for (; null !== a; ) {
                var _e116 = a === o.body;
                if (_e116) {
                  var _e117 = r.visualViewport;
                  if (_e117) {
                    var _t166 = _e117.offsetTop;
                    ((l = _t166), (c = _t166 + _e117.height));
                  } else ((l = 0), (c = Ui(t).innerHeight));
                  var _n75 = r.getComputedStyle(o.documentElement),
                    _s30 = parseFloat(_n75.scrollPaddingTop),
                    _i22 = parseFloat(_n75.scrollPaddingBottom);
                  (isFinite(_s30) && (l += _s30),
                    isFinite(_i22) && (c -= _i22));
                } else {
                  var _t167 = a.getBoundingClientRect();
                  ((l = _t167.top), (c = _t167.bottom));
                }
                var _n76 = 0;
                if (
                  (s < l ? (_n76 = -(l - s)) : i > c && (_n76 = i - c),
                  0 !== _n76)
                )
                  if (_e116) r.scrollBy(0, _n76);
                  else {
                    var _t168 = a.scrollTop;
                    a.scrollTop += _n76;
                    var _e118 = a.scrollTop - _t168;
                    ((s -= _e118), (i -= _e118));
                  }
                if (_e116) break;
                a = Li(a);
              }
            })(n, _e115, i);
          }
        }
        Mn = !0;
      }
    }
    function vr(t, e) {
      for (var _n77 of t.split(/(\r?\n|\t)/))
        "\n" === _n77 || "\r\n" === _n77
          ? e.linebreak()
          : "\t" === _n77
            ? e.tab()
            : "" !== _n77 && e.text(_n77);
    }
    function kr(t) {
      var e = [];
      return (
        vr(t, {
          linebreak: function linebreak() {
            return e.push(Ss());
          },
          tab: function tab() {
            return e.push(Wo());
          },
          text: function text(t) {
            return e.push($o(t));
          },
        }),
        e
      );
    }
    function Er(t) {
      var e = [];
      for (var _n78 of t)
        Ns(_n78) ||
          ((!cs(_n78) && !fs(_n78)) || _n78.isInline()
            ? e.push(_n78)
            : cs(_n78) && e.push.apply(e, Er(_n78.getChildren())));
      return e;
    }
    function Or(e) {
      var n = e;
      e.isCollapsed() || n.removeText();
      var o = _r();
      (Vo(o) && (n = o), Vo(n) || t(161));
      var r = n.anchor;
      var s = r.getNode(),
        i = r.offset;
      for (; !Sl(s) && null === Gl(s); ) {
        var _br;
        var _t169 = s;
        if (((_br = br(s, i)), (s = _br[0]), (i = _br[1]), _t169.is(s))) break;
      }
      return i;
    }
    function br(t, e) {
      var n = t.getParent();
      if (!n) {
        var _t170 = bs();
        return (gi().append(_t170), _t170.select(), [gi(), 0]);
      }
      if (Ko(t)) {
        var _o55 = t.splitText(e);
        if (0 === _o55.length) return [n, t.getIndexWithinParent()];
        var _r36 = 0 === e ? 0 : 1;
        return [n, _o55[0].getIndexWithinParent() + _r36];
      }
      if (!cs(t) || 0 === e) return [n, t.getIndexWithinParent()];
      var o = t.getChildAtIndex(e);
      if (o) {
        var _n79 = new _qo(
            jo(t.__key, e, "element"),
            jo(t.__key, e, "element"),
            0,
            "",
          ),
          _r37 = t.insertNewAfter(_n79);
        _r37 && _r37.append.apply(_r37, [o].concat(o.getNextSiblings()));
      }
      return [n, t.getIndexWithinParent() + 1];
    }
    function Mr(t) {
      return Ns(t) || Hi(t) || Ko(t) || t.isParentRequired();
    }
    function Ar(t) {
      var e = bs();
      var n = null;
      for (var _o56 = 0; _o56 < t.length; _o56++) {
        var _r38 = t[_o56];
        if (Mr(_r38)) {
          if (null === n) {
            ((n = _r38.createParentElementNode()), e.append(n));
            var _s31 = t[_o56 + 1];
            if (Ns(_r38) && (void 0 === _s31 || !Mr(_s31))) continue;
          }
          n.append(_r38);
        } else (e.append(_r38), (n = null));
      }
      return e;
    }
    function wr(t, e, n, o, r) {
      if (r === void 0) {
        r = "decorators-and-blocks";
      }
      if ("move" === e && "character" === o && !t.isCollapsed()) {
        var _ref29 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e119 = _ref29[0],
          _o57 = _ref29[1];
        return (_o57.set(_e119.key, _e119.offset, _e119.type), !0);
      }
      var s = Yc(t.focus, n ? "previous" : "next"),
        i = "lineboundary" === o,
        l = "move" === e;
      var c = s,
        a = "decorators-and-blocks" === r;
      if (!na(c)) {
        for (var _t171 of c) {
          a = !1;
          var _e120 = _t171.origin;
          if (
            !fs(_e120) ||
            _e120.isIsolated() ||
            ((c = _t171), !i || !_e120.isInline())
          )
            break;
        }
        if (a)
          for (var _t172 of Lc(s).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (vc(_t172)) _t172.origin.isInline() || (c = _t172);
            else {
              if (cs(_t172.origin)) continue;
              fs(_t172.origin) && !_t172.origin.isInline() && (c = _t172);
            }
            break;
          }
      }
      if (c === s) return !1;
      if (l && !i && fs(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t173 = hr();
        return (_t173.add(c.origin.getKey()), _i(_t173), !0);
      }
      return ((c = ea(c)), l && Jc(t.anchor, c), Jc(t.focus, c), a || !i);
    }
    var Dr = null,
      Ir = null,
      Pr = !1,
      Fr = !1,
      Rr = !1;
    var Lr = new Set();
    var $r = 0;
    var Kr = { characterData: !0, childList: !0, subtree: !0 };
    function zr() {
      return Pr || (null !== Dr && Dr._readOnly);
    }
    function Br() {
      Pr && t(13);
    }
    function Wr() {
      $r > 99 && t(14);
    }
    function Ur() {
      return (null === Dr && t(195, Yr()), Dr);
    }
    function Hr() {
      return (null === Ir && t(337, Yr()), Ir);
    }
    function jr() {
      Hr()._dirtyType = 2;
    }
    function Yr() {
      var t = 0;
      var e = new Set(),
        n = _Ls.version;
      if ("undefined" != typeof window)
        for (var _o58 of rl(document)) {
          var _r39 = Gs(_o58);
          if (Ys(_r39)) t++;
          else if (_r39) {
            var _t174 = String(_r39.constructor.version || "<0.17.1");
            (_t174 === n &&
              (_t174 +=
                " (separately built, likely a bundler configuration issue)"),
              e.add(_t174));
          }
        }
      var o =
        " Detected on the page: " +
        t +
        " compatible editor(s) with version " +
        n;
      return (
        e.size &&
          (o +=
            " and incompatible editors with versions " +
            Array.from(e).join(", ")),
        o
      );
    }
    function Jr() {
      return Ir;
    }
    function Gr(t, e, n) {
      var o = e.__type,
        r = Bs(t, o);
      var s = n.get(o);
      void 0 === s && ((s = Array.from(r.transforms)), n.set(o, s));
      var i = s.length;
      for (var _t175 = 0; _t175 < i && (s[_t175](e), e.isAttached()); _t175++);
    }
    function Vr(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function qr(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var o = e;
      Array.isArray(e) || (o = [e]);
      for (var _t176 of o) n.add(_t176);
    }
    function Xr(n, o) {
      var r = n.type,
        s = o.get(r);
      void 0 === s && t(17, r);
      var i = s.klass;
      n.type !== i.getType() && t(18, i.name);
      var l = i.importJSON(n),
        c = n.children;
      if (cs(l) && Array.isArray(c))
        for (var _t177 = 0; _t177 < c.length; _t177++) {
          var _e121 = Xr(c[_t177], o);
          l.append(_e121);
        }
      var a = n.$slots;
      if (a) {
        Yl(l) ||
          e(
            "$parseSerializedNode: node " +
              i.name +
              " has slots but is not a valid slot host; only ElementNodes and DecoratorNodes can host slots.",
          );
        for (var _t178 in a) {
          uc(l, _t178, Xr(a[_t178], o));
        }
      }
      return l;
    }
    function Qr(t, e, n) {
      var o = Dr,
        r = Pr,
        s = Ir;
      ((Dr = e), (Pr = !0), (Ir = t));
      try {
        return n();
      } finally {
        ((Dr = o), (Pr = r), (Ir = s));
      }
    }
    function Zr(t, e) {
      var n = Rr;
      Rr = !0;
      try {
        !(function (t, e) {
          var n = t._pendingEditorState,
            o = t._rootElement,
            r = t._headless || null === o;
          if (null === n)
            return void (t._deferred.length > 0 && ns(t, t._deferred));
          var s = t._editorState,
            i = s._selection,
            l = n._selection,
            c = 0 !== t._dirtyType,
            a = Dr,
            u = Pr,
            f = Ir,
            d = t._updating,
            h = t._observer;
          var g = null;
          if (
            ((t._pendingEditorState = null),
            (t._editorState = n),
            !r && c && null !== h)
          ) {
            ((Ir = t), (Dr = n), (Pr = !1), (t._updating = !0));
            try {
              var _e122 = t._dirtyType,
                _o59 = t._dirtyElements,
                _r40 = t._dirtyLeaves;
              (h.disconnect(), (g = Ce(s, n, t, _e122, _o59, _r40)));
            } catch (e) {
              if ((e instanceof Error && t._onError(e), Fr)) throw e;
              return (
                Ds(t, null, o, n),
                st(t),
                (t._dirtyType = 2),
                (Fr = !0),
                Zr(t, s),
                void (Fr = !1)
              );
            } finally {
              (h.observe(o, Kr),
                (t._updating = d),
                (Dr = a),
                (Pr = u),
                (Ir = f));
            }
          }
          n._readOnly || (n._readOnly = !0);
          var _ = t._dirtyLeaves,
            p = t._dirtyElements,
            y = t._normalizedNodes,
            m = t._updateTags,
            x = t._deferred;
          c &&
            ((t._dirtyType = 0),
            t._cloneNotNeeded.clear(),
            (t._dirtyLeaves = new Set()),
            (t._dirtyElements = new Map()),
            (t._normalizedNodes = new Set()));
          ((t._updateTags = new Set()),
            (function (t, e) {
              var n = t._decorators;
              var o = t._pendingDecorators || n;
              var r = e._nodeMap;
              var s;
              for (s in o) r.has(s) || (o === n && (o = di(t)), delete o[s]);
            })(t, n));
          var C = r ? null : Zi(Ui(t));
          if (
            t._editable &&
            null !== C &&
            (c || null === l || l.dirty || !l.is(i)) &&
            null !== o &&
            !m.has(_o)
          ) {
            ((Ir = t), (Dr = n));
            try {
              if ((null !== h && h.disconnect(), c || null === l || l.dirty)) {
                var _e123 = t._blockCursorElement;
                (null !== _e123 && Qi(_e123, t, o), Tr(i, l, t, C, m, o));
              }
              !(function (t, e, n) {
                var o = t._blockCursorElement;
                if (
                  Vo(n) &&
                  n.isCollapsed() &&
                  "element" === n.anchor.type &&
                  e.contains(fl(e))
                ) {
                  var _r41 = n.anchor,
                    _s32 = _r41.getNode(),
                    _i23 = _r41.offset;
                  var _l12 = !1,
                    _c11 = null;
                  if (_i23 === _s32.getChildrenSize()) {
                    Xi(_s32.getChildAtIndex(_i23 - 1)) && (_l12 = !0);
                  } else {
                    var _e124 = _s32.getChildAtIndex(_i23);
                    if (null !== _e124 && Xi(_e124)) {
                      var _n80 = _e124.getPreviousSibling();
                      (null === _n80 || Xi(_n80)) &&
                        ((_l12 = !0), (_c11 = t.getElementByKey(_e124.__key)));
                    }
                  }
                  if (_l12) {
                    var _n81 = vl(
                      _s32,
                      t.getElementByKey(_s32.__key),
                      t,
                    ).element;
                    return (
                      null === o &&
                        (t._blockCursorElement = o =
                          (function (t) {
                            var e = t.theme,
                              n = document.createElement("div");
                            ((n.contentEditable = "false"),
                              n.setAttribute("data-lexical-cursor", "true"));
                            var o = e.blockCursor;
                            if (void 0 !== o) {
                              var _n$classList;
                              if ("string" == typeof o) {
                                var _t179 = ua(o);
                                o = e.blockCursor = _t179;
                              }
                              void 0 !== o &&
                                (_n$classList = n.classList).add.apply(
                                  _n$classList,
                                  o,
                                );
                            }
                            return n;
                          })(t._config)),
                      (e.style.caretColor = "transparent"),
                      void (null === _c11
                        ? _n81.appendChild(o)
                        : _n81.insertBefore(o, _c11))
                    );
                  }
                }
                null !== o && Qi(o, t, e);
              })(t, o, l);
            } finally {
              (null !== h && h.observe(o, Kr), (Ir = f), (Dr = a));
            }
          }
          null !== g &&
            (function (t, e, n, o, r) {
              var s = Array.from(t._listeners.mutation),
                i = s.length;
              for (var _t180 = 0; _t180 < i; _t180++) {
                var _s$_t = s[_t180],
                  _i24 = _s$_t[0],
                  _l13 = _s$_t[1];
                for (var _t181 of _l13) {
                  var _s33 = e.get(_t181);
                  void 0 !== _s33 &&
                    _i24(_s33, {
                      dirtyLeaves: o,
                      prevEditorState: r,
                      updateTags: n,
                    });
                }
              }
            })(t, g, m, _, s);
          Vo(l) ||
            null === l ||
            (null !== i && i.is(l)) ||
            t.dispatchCommand(Te, void 0);
          var S = t._pendingDecorators;
          null !== S &&
            ((t._decorators = S),
            (t._pendingDecorators = null),
            ts("decorator", t, !0, S));
          ((function (t, e, n) {
            var o = hi(e),
              r = hi(n);
            o !== r && ts("textcontent", t, !0, r);
          })(t, e || s, n),
            ts("update", t, !0, {
              dirtyElements: p,
              dirtyLeaves: _,
              editorState: n,
              mutatedNodes: g,
              normalizedNodes: y,
              prevEditorState: e || s,
              tags: m,
            }),
            ns(t, x),
            (function (t) {
              var e = t._updates;
              if (0 === e.length) return void (t._cascadeCount = 0);
              if (
                ((function (t) {
                  if (Lr.has(t)) return;
                  (Lr.add(t),
                    setTimeout(function () {
                      (Lr["delete"](t), (t._cascadeCount = 0));
                    }, 0));
                })(t),
                t._cascadeCount++ > 99)
              )
                return (
                  (t._updates = []),
                  (t._cascadeCount = 0),
                  void t._onWarn(
                    new Error(
                      "One or more update listeners are endlessly enqueueing more updates. May have encountered infinite recursion caused by update listeners that trigger additional updates without a stop condition. Editor namespace: " +
                        t._config.namespace,
                    ),
                  )
                );
              var n = e.shift();
              if (n) {
                var _e125 = n[0],
                  _o60 = n[1];
                rs(t, _e125, _o60);
              }
            })(t));
        })(t, e);
      } finally {
        Rr = n;
      }
    }
    function ts(t, e, n) {
      var r = e._updating;
      e._updating = n;
      try {
        var _n82 = e._listeners[t],
          _r42 = Array.from(_n82);
        for (
          var _len3 = arguments.length,
            o = new Array(_len3 > 3 ? _len3 - 3 : 0),
            _key3 = 3;
          _key3 < _len3;
          _key3++
        ) {
          o[_key3 - 3] = arguments[_key3];
        }
        for (var _ref31 of _r42) {
          var _t182 = _ref31[0];
          var _e126 = _ref31[1];
          {
            _e126 && _e126();
            var _r43 = _t182.apply(void 0, o);
            _n82.has(_t182) ? _n82.set(_t182, _r43) : _r43 && _r43();
          }
        }
      } finally {
        e._updating = r;
      }
    }
    function es(t, e, n, o) {
      var r = mi(t);
      var s;
      if (!Rr)
        for (var _t183 = 0; _t183 < r.length; _t183++)
          r[_t183]._updating || (r[_t183]._cascadeCount = 0);
      for (var _t184 = 4; _t184 >= 0; _t184--) {
        var _loop = function _loop() {
            var l = r[_i25];
            if (_i25 > 0 && l._updating) {
              s = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e127 = c[_t184];
              if (_e127.size > 0) {
                var _t185 = !1;
                if (
                  (ss(l, function () {
                    for (var _r44 of _e127)
                      if (_r44(n, o)) return void (_t185 = !0);
                  }),
                  _t185)
                )
                  return { v: _t185 };
              }
            }
          },
          _ret;
        for (var _i25 = 0; _i25 < r.length; _i25++) {
          _ret = _loop();
          if (_ret === 0) break;
          if (_ret) return _ret.v;
        }
      }
      return (
        s &&
          s.update(function () {
            es(s, e, n, o);
          }),
        !1
      );
    }
    function ns(t, e) {
      if (((t._deferred = []), 0 !== e.length)) {
        var _n83 = t._updating;
        t._updating = !0;
        try {
          for (var _t186 = 0; _t186 < e.length; _t186++) e[_t186]();
        } finally {
          t._updating = _n83;
        }
      }
    }
    function os(e, n) {
      var o = e._updates;
      var r = n || !1;
      for (; 0 !== o.length; ) {
        var _n84 = o.shift();
        if (_n84) {
          var _o61 = _n84[0],
            _s34 = _n84[1],
            _i26 = e._pendingEditorState;
          var _l14 = void 0;
          (void 0 !== _s34 &&
            ((_l14 = _s34.onUpdate),
            _s34.skipTransforms && (r = !0),
            _s34.discrete && (null === _i26 && t(191), (_i26._flushSync = !0)),
            _l14 && e._deferred.push(_l14),
            qr(e, _s34.tag)),
            null == _i26 ? rs(e, _o61, _s34) : _o61());
        }
      }
      return r;
    }
    function rs(e, n, o) {
      var r = e._updateTags;
      var s,
        i = !1,
        l = !1;
      (void 0 !== o &&
        ((s = o.onUpdate),
        qr(e, o.tag),
        (i = o.skipTransforms || !1),
        (l = o.discrete || !1)),
        s && e._deferred.push(s));
      var c = e._editorState;
      var a = e._pendingEditorState,
        u = !1;
      ((null === a || a._readOnly) &&
        ((a = e._pendingEditorState = gs(a || c)), (u = !0)),
        (a._flushSync = l));
      var f = Dr,
        d = Pr,
        h = Ir,
        g = e._updating;
      ((Dr = a), (Pr = !1), (e._updating = !0), (Ir = e));
      var _ = e._headless || null === e.getRootElement();
      Ks(null);
      try {
        u &&
          (_
            ? null !== c._selection && (a._selection = c._selection.clone())
            : (a._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  o = Zi(Ui(t));
                return Vo(n) || null == n ? gr(n, o, t, e) : n.clone();
              })(e, (o && o.event) || null)));
        var _r45 = e._compositionKey;
        (n(),
          (i = os(e, i)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              o = t._selection;
            if (Vo(o)) {
              var _t187 = o.anchor,
                _e128 = o.focus;
              var _r46;
              if (
                ("text" === _t187.type &&
                  ((_r46 = _t187.getNode()), _r46.selectionTransform(n, o)),
                "text" === _e128.type)
              ) {
                var _t188 = _e128.getNode();
                _r46 !== _t188 && _t188.selectionTransform(n, o);
              }
            }
          })(a, e),
          0 !== e._dirtyType &&
            (i
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = t._nodeMap;
                  for (var _t189 of n) {
                    var _e129 = o.get(_t189);
                    Ko(_e129) &&
                      _e129.isAttached() &&
                      _e129.isSimpleText() &&
                      !_e129.isUnmergeable() &&
                      Nt(_e129);
                  }
                })(a, e)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = e._dirtyElements,
                    r = t._nodeMap,
                    s = ii(),
                    i = new Map();
                  var l = n,
                    c = l.size,
                    a = o,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t190 of l) {
                        var _o62 = r.get(_t190);
                        (Ko(_o62) &&
                          _o62.isAttached() &&
                          _o62.isSimpleText() &&
                          !_o62.isUnmergeable() &&
                          Nt(_o62),
                          void 0 !== _o62 && Vr(_o62, s) && Gr(e, _o62, i),
                          n.add(_t190));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        $r++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t191 of a) {
                      var _n85 = _t191[0],
                        _l15 = _t191[1];
                      if ((o.set(_n85, _l15), !_l15)) continue;
                      var _c12 = r.get(_n85);
                      void 0 !== _c12 && Vr(_c12, s) && Gr(e, _c12, i);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      $r++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = o));
                })(a, e),
            os(e),
            (function (t, e, n, o) {
              var r = t._nodeMap,
                s = e._nodeMap,
                i = [];
              for (var _ref33 of o) {
                var _t192 = _ref33[0];
                {
                  var _e130 = s.get(_t192);
                  void 0 !== _e130 &&
                    (_e130.isAttached() ||
                      (cs(_e130) && V(_e130, _t192, r, s, i, o),
                      r.has(_t192) || o["delete"](_t192),
                      i.push(_t192)));
                }
              }
              for (var _t193 of n) {
                var _e131 = s.get(_t193);
                void 0 === _e131 ||
                  _e131.isAttached() ||
                  (Yl(_e131) &&
                    null !== _e131.__slots &&
                    V(_e131, _t193, r, s, i, n),
                  r.has(_t193) || n["delete"](_t193),
                  i.push(_t193));
              }
              for (var _t194 of i) s["delete"](_t194);
              var l = Hr(),
                c = l._compositionKey;
              null === c || s.has(c) || (l._compositionKey = null);
            })(c, a, e._dirtyLeaves, e._dirtyElements)));
        _r45 !== e._compositionKey && (a._flushSync = !0);
        var _s35 = a._selection;
        if (Vo(_s35)) {
          e._slotsUsed && cr(_s35);
          var _n86 = a._nodeMap,
            _o63 = _s35.anchor.key,
            _r47 = _s35.focus.key;
          (void 0 !== _n86.get(_o63) && void 0 !== _n86.get(_r47)) || t(19);
        } else Xo(_s35) && 0 === _s35._nodes.size && (a._selection = null);
      } catch (t) {
        return (
          t instanceof Error && e._onError(t),
          (e._pendingEditorState = c),
          (e._dirtyType = 2),
          e._cloneNotNeeded.clear(),
          (e._dirtyLeaves = new Set()),
          e._dirtyElements.clear(),
          void Zr(e)
        );
      } finally {
        ((Dr = f), (Pr = d), (Ir = h), (e._updating = g), ($r = 0));
      }
      var p =
        0 !== e._dirtyType ||
        e._deferred.length > 0 ||
        (function (t, e) {
          var n = e.getEditorState()._selection,
            o = t._selection;
          if (null !== o) {
            if (o.dirty || !o.is(n)) return !0;
          } else if (null !== n) return !0;
          return !1;
        })(a, e);
      p
        ? a._flushSync
          ? ((a._flushSync = !1), Zr(e))
          : u &&
            Us(function () {
              Zr(e);
            })
        : ((a._flushSync = !1),
          u && (r.clear(), (e._deferred = []), (e._pendingEditorState = null)));
    }
    function ss(t, e, n) {
      Ir === t && void 0 === n ? e() : rs(t, e, n);
    }
    function is(t) {
      if (Yi(t)) {
        var _e132 = null;
        for (var _n87 of t.getChildren())
          _e132 = _n87.isInline()
            ? (_e132 || _n87.replace(_n87.createParentElementNode())).append(
                _n87,
              )
            : null;
      }
    }
    var _ls4 = (function (_ao2) {
      function ls(t) {
        var _this3;
        ((_this3 = _ao2.call(this, t) || this),
          (_this3.__first = null),
          (_this3.__last = null),
          (_this3.__size = 0),
          (_this3.__format = 0),
          (_this3.__style = ""),
          (_this3.__indent = 0),
          (_this3.__dir = null),
          (_this3.__textFormat = 0),
          (_this3.__textStyle = ""),
          (_this3.__slotHost = null),
          (_this3.__slots = null));
        return _this3;
      }
      babelHelpers.inheritsLoose(ls, _ao2);
      var _proto10 = ls.prototype;
      _proto10.$config = function $config() {
        return this.config(Symbol["for"]("ElementNode"), {
          $transform: is,
          extends: _ao5,
        });
      };
      _proto10.afterCloneFrom = function afterCloneFrom(t) {
        (_ao2.prototype.afterCloneFrom.call(this, t),
          this.__key === t.__key &&
            ((this.__first = t.__first),
            (this.__last = t.__last),
            (this.__size = t.__size),
            (this.__slotHost = t.__slotHost),
            null !== this.__slotHost &&
              null !== this.__parent &&
              e(
                "ElementNode: node " +
                  this.__key +
                  " is both slotted into host " +
                  String(this.__slotHost) +
                  " and a child of parent " +
                  String(this.__parent) +
                  "; __slotHost and __parent are mutually exclusive",
              ),
            (this.__slots = t.__slots)),
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
        return 0 === this.getChildrenSize() && 0 === Zl(this).length;
      };
      _proto10.isDirty = function isDirty() {
        var t = Hr()._dirtyElements;
        return null !== t && t.has(this.__key);
      };
      _proto10.isLastChild = function isLastChild() {
        var t = this.getLatest(),
          e = this.getParentOrThrow().getLastChild();
        return null !== e && e.is(t);
      };
      _proto10.getAllTextNodes = function getAllTextNodes() {
        var t = [];
        for (var _e133 of Zl(this)) {
          var _n88 = tc(this, _e133);
          cs(_n88) && t.push.apply(t, _n88.getAllTextNodes());
        }
        var e = this.getFirstChild();
        for (; null !== e; ) {
          if ((Ko(e) && t.push(e), cs(e))) {
            var _n89 = e.getAllTextNodes();
            t.push.apply(t, _n89);
          }
          e = e.getNextSibling();
        }
        return t;
      };
      _proto10.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; cs(t); ) {
          var _e134 = t.getFirstChild();
          if (null === _e134) break;
          t = _e134;
        }
        return t;
      };
      _proto10.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; cs(t); ) {
          var _e135 = t.getLastChild();
          if (null === _e135) break;
          t = _e135;
        }
        return t;
      };
      _proto10.getDescendantByIndex = function getDescendantByIndex(t) {
        var e = this.getChildren(),
          n = e.length;
        if (t >= n) {
          var _t195 = e[n - 1];
          return (cs(_t195) && _t195.getLastDescendant()) || _t195 || null;
        }
        var o = e[t];
        return (cs(o) && o.getFirstDescendant()) || o || null;
      };
      _proto10.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : li(t);
      };
      _proto10.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var e = this.getFirstChild();
        return (null === e && t(45, this.__key), e);
      };
      _proto10.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : li(t);
      };
      _proto10.getLastChildOrThrow = function getLastChildOrThrow() {
        var e = this.getLastChild();
        return (null === e && t(96, this.__key), e);
      };
      _proto10.getChildAtIndex = function getChildAtIndex(t) {
        var e = this.getChildrenSize();
        var n, o;
        if (t < e / 2) {
          for (n = this.getFirstChild(), o = 0; null !== n && o <= t; ) {
            if (o === t) return n;
            ((n = n.getNextSibling()), o++);
          }
          return null;
        }
        for (n = this.getLastChild(), o = e - 1; null !== n && o >= t; ) {
          if (o === t) return n;
          ((n = n.getPreviousSibling()), o--);
        }
        return null;
      };
      _proto10.getTextContent = function getTextContent() {
        var t = lc(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o64 = 0; _o64 < n; _o64++) {
          var _r48 = e[_o64];
          ((t += _r48.getTextContent()),
            cs(_r48) && _o64 !== n - 1 && !_r48.isInline() && (t += v));
        }
        return t;
      };
      _proto10.getTextContentSize = function getTextContentSize() {
        var t = (function (t) {
          var e = 0;
          for (var _n90 of Zl(t)) {
            var _o65 = tc(t, _n90);
            null !== _o65 && (e += _o65.getTextContentSize());
          }
          return e;
        })(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o66 = 0; _o66 < n; _o66++) {
          var _r49 = e[_o66];
          ((t += _r49.getTextContentSize()),
            cs(_r49) && _o66 !== n - 1 && !_r49.isInline() && (t += 2));
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
          var _e136 = D[t];
          return 0 !== (this.getFormat() & _e136);
        }
        return !1;
      };
      _proto10.hasTextFormat = function hasTextFormat(t) {
        var e = A[t];
        return 0 !== (this.getTextFormat() & e);
      };
      _proto10.getFormatFlags = function getFormatFlags(t, e) {
        return ti(this.getLatest().__textFormat, t, e);
      };
      _proto10.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto10.select = function select(t, e) {
        Br();
        var n = _r();
        var o = t,
          r = e;
        var s = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t196 = this.getFirstChild();
            if (Ko(_t196) || cs(_t196)) return _t196.select(0, 0);
          } else if (
            !((void 0 !== t && t !== s) || (void 0 !== e && e !== s))
          ) {
            var _t197 = this.getLastChild();
            if (Ko(_t197) || cs(_t197)) return _t197.select();
          }
        (void 0 === o && (o = s), void 0 === r && (r = s));
        var i = this.__key;
        return Vo(n)
          ? (n.anchor.set(i, o, "element"),
            n.focus.set(i, r, "element"),
            (n.dirty = !0),
            n)
          : fr(i, o, i, r, "element", "element");
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
      _proto10.splice = function splice(e, n, o) {
        lo(this) && t(324, this.__key, this.__type);
        var r = this.getChildrenSize(),
          s = this.getWritable();
        e + n <= r || t(226, String(e), String(n), String(r));
        for (var _t198 of o);
        var i = s.__key,
          l = [],
          c = [],
          a = this.getChildAtIndex(e + n);
        var u = null,
          f = r - n + o.length;
        if (0 !== e)
          if (e === r) u = this.getLastChild();
          else {
            var _t199 = this.getChildAtIndex(e);
            null !== _t199 && (u = _t199.getPreviousSibling());
          }
        if (n > 0) {
          var _e137 = null === u ? this.getFirstChild() : u.getNextSibling();
          for (var _o67 = 0; _o67 < n; _o67++) {
            null === _e137 && t(100);
            var _n91 = _e137.getNextSibling(),
              _o68 = _e137.__key;
            (ni(_e137.getWritable()), c.push(_o68), (_e137 = _n91));
          }
        }
        var d = u;
        for (var _e138 of o) {
          null !== d && _e138.is(d) && (u = d = d.getPreviousSibling());
          var _n92 = _e138.getWritable();
          (_n92.__parent === i && f--, ni(_n92));
          var _o69 = _e138.__key;
          if (null === d) ((s.__first = _o69), (_n92.__prev = null));
          else {
            var _t200 = d.getWritable();
            ((_t200.__next = _o69), (_n92.__prev = _t200.__key));
          }
          (_e138.__key === i && t(76),
            (_n92.__parent = i),
            l.push(_o69),
            (d = _e138));
        }
        if (e + n === r) {
          if (null !== d) {
            ((d.getWritable().__next = null), (s.__last = d.__key));
          }
        } else if (null !== a) {
          var _t201 = a.getWritable();
          if (null !== d) {
            var _e139 = d.getWritable();
            ((_t201.__prev = d.__key), (_e139.__next = a.__key));
          } else _t201.__prev = null;
        }
        if (((s.__size = f), c.length)) {
          var _t202 = _r();
          if (Vo(_t202)) {
            var _e140 = new Set(c),
              _n93 = new Set(l),
              _o70 = _t202.anchor,
              _r50 = _t202.focus;
            (as(_o70, _e140, _n93) && xr(_o70, _o70.getNode(), this, u, a),
              as(_r50, _e140, _n93) && xr(_r50, _r50.getNode(), this, u, a),
              0 !== f || this.canBeEmpty() || Yi(this) || this.remove());
          }
        }
        return s;
      };
      _proto10.getDOMSlot = function getDOMSlot(t) {
        return new _B(t);
      };
      _proto10.exportDOM = function exportDOM(t) {
        var _ao2$prototype$export = _ao2.prototype.exportDOM.call(this, t),
          e = _ao2$prototype$export.element;
        if (gl(e)) {
          var _t203 = this.getIndent();
          _t203 > 0 &&
            ((e.style.paddingInlineStart = 40 * _t203 + "px"),
            e.setAttribute("data-lexical-indent", String(_t203)));
          var _n94 = this.getDirection();
          _n94 && (e.dir = _n94);
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
            _ao2.prototype.exportJSON.call(this),
          ),
          e = this.getTextFormat(),
          n = this.getTextStyle();
        return (
          (0 === e && "" === n) ||
            Yi(this) ||
            this.getChildren().some(Ko) ||
            (0 !== e && (t.textFormat = e), "" !== n && (t.textStyle = n)),
          t
        );
      };
      _proto10.updateFromJSON = function updateFromJSON(t) {
        return _ao2.prototype.updateFromJSON
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
        var n = vl(this, t, e);
        var o = n.getFirstChild();
        for (
          var _t204 = this.getFirstChild();
          _t204;
          _t204 = _t204.getNextSibling()
        ) {
          var _r51 = e.getElementByKey(_t204.getKey());
          null !== _r51 &&
            (null == o
              ? (n.insertChild(_r51), (o = _r51))
              : o !== _r51 && n.replaceChild(_r51, o),
            (o = o.nextSibling));
        }
      };
      return ls;
    })(_ao5);
    function cs(t) {
      return t instanceof _ls4;
    }
    function as(t, e, n) {
      var o = t.getNode();
      for (; o; ) {
        var _t205 = o.__key;
        if (e.has(_t205) && !n.has(_t205)) return !0;
        o = o.getParent();
      }
      return !1;
    }
    var _us = (function (_ao3) {
      function us(t) {
        var _this4;
        ((_this4 = _ao3.call(this, t) || this),
          (_this4.__slotHost = null),
          (_this4.__slots = null));
        return _this4;
      }
      babelHelpers.inheritsLoose(us, _ao3);
      var _proto11 = us.prototype;
      _proto11.afterCloneFrom = function afterCloneFrom(t) {
        (_ao3.prototype.afterCloneFrom.call(this, t),
          this.__key === t.__key &&
            ((this.__slotHost = t.__slotHost),
            null !== this.__slotHost &&
              null !== this.__parent &&
              e(
                "DecoratorNode: node " +
                  this.__key +
                  " is both slotted into host " +
                  String(this.__slotHost) +
                  " and a child of parent " +
                  String(this.__parent) +
                  "; __slotHost and __parent are mutually exclusive",
              ),
            (this.__slots = t.__slots)));
      };
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
      return us;
    })(_ao5);
    function fs(t) {
      return t instanceof _us;
    }
    var _ds = (function (_ls) {
      function ds() {
        var _this5;
        ((_this5 = _ls.call(this, "root") || this),
          (_this5.__cachedText = null));
        return _this5;
      }
      babelHelpers.inheritsLoose(ds, _ls);
      ds.getType = function getType() {
        return "root";
      };
      ds.clone = function clone() {
        return new ds();
      };
      var _proto12 = ds.prototype;
      _proto12.getTopLevelElementOrThrow =
        function getTopLevelElementOrThrow() {
          t(51);
        };
      _proto12.getTextContent = function getTextContent() {
        var t = this.__cachedText;
        return null === t || (!zr() && 0 !== Hr()._dirtyType)
          ? _ls.prototype.getTextContent.call(this)
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
      _proto12.splice = function splice(e, n, o) {
        for (var _e141 of o) cs(_e141) || fs(_e141) || t(282);
        return _ls.prototype.splice.call(this, e, n, o);
      };
      ds.importJSON = function importJSON(t) {
        return gi().updateFromJSON(t);
      };
      _proto12.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return ds;
    })(_ls4);
    function hs(t) {
      return t instanceof _ds;
    }
    function gs(t) {
      return new _ys(J(t._nodeMap), null, t._slotsUsed);
    }
    function _s() {
      return new _ys(new Map([["root", new _ds()]]), null, !1);
    }
    function ps(n) {
      var o = n.exportJSON(),
        r = n.constructor;
      if ((o.type !== r.getType() && t(130, r.name), cs(n))) {
        var _e142 = o.children;
        Array.isArray(_e142) || t(59, r.name);
        var _s36 = n.getChildren();
        for (var _t206 = 0; _t206 < _s36.length; _t206++) {
          var _n95 = ps(_s36[_t206]);
          _e142.push(_n95);
        }
      }
      var s = Zl(n);
      if (s.length > 0) {
        var _t207 = {};
        for (var _o71 of s) {
          var _s37 = tc(n, _o71);
          (null === _s37 &&
            e(
              "LexicalNode: Node " +
                r.name +
                ' has slot "' +
                _o71 +
                '" but it resolved to no node during export.',
            ),
            (_t207[_o71] = ps(_s37)));
        }
        o.$slots = _t207;
      }
      return o;
    }
    var _ys = (function () {
      function ys(t, e, n) {
        if (e === void 0) {
          e = null;
        }
        if (n === void 0) {
          n = !1;
        }
        ((this._nodeMap = t),
          (this._selection = e || null),
          (this._flushSync = !1),
          (this._readOnly = !1),
          (this._parsed = !1),
          (this._slotsUsed = n));
      }
      var _proto13 = ys.prototype;
      _proto13.isEmpty = function isEmpty() {
        return 1 === this._nodeMap.size && null === this._selection;
      };
      _proto13.read = function read(t, e) {
        return Qr((e && e.editor) || null, this, t);
      };
      _proto13.clone = function clone(t) {
        var e = new ys(
          this._nodeMap,
          void 0 === t ? this._selection : t,
          this._slotsUsed,
        );
        return ((e._readOnly = !0), e);
      };
      _proto13.toJSON = function toJSON() {
        return Qr(null, this, function () {
          return { root: ps(gi()) };
        });
      };
      return ys;
    })();
    var _ms = (function (_ls2) {
      function ms() {
        return _ls2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(ms, _ls2);
      ms.getType = function getType() {
        return "artificial";
      };
      var _proto14 = ms.prototype;
      _proto14.createDOM = function createDOM(t) {
        return document.createElement("div");
      };
      return ms;
    })(_ls4);
    var _xs = (function (_ao4) {
      function xs(t) {
        return _ao4.call(this, t) || this;
      }
      babelHelpers.inheritsLoose(xs, _ao4);
      xs.getType = function getType() {
        return "linebreak";
      };
      xs.clone = function clone(t) {
        return new xs(t.__key);
      };
      var _proto15 = xs.prototype;
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
      xs.importDOM = function importDOM() {
        return {
          br: function br(t) {
            return Ts(t) || vs(t) ? null : { conversion: Cs, priority: 0 };
          },
        };
      };
      xs.importJSON = function importJSON(t) {
        return Ss().updateFromJSON(t);
      };
      return xs;
    })(_ao5);
    function Cs(t) {
      return { node: Ss() };
    }
    function Ss() {
      return Gi(new _xs());
    }
    function Ns(t) {
      return t instanceof _xs;
    }
    function Ts(t) {
      var e = t.parentElement;
      if (null !== e && Cl(e)) {
        var _n96 = e.firstChild;
        if (_n96 === t || (_n96.nextSibling === t && ks(_n96))) {
          var _n97 = e.lastChild;
          if (_n97 === t || (_n97.previousSibling === t && ks(_n97))) return !0;
        }
      }
      return !1;
    }
    function vs(t) {
      var e = t.parentElement;
      if (null !== e && Cl(e)) {
        var _n98 = e.firstChild;
        if (_n98 === t || (_n98.nextSibling === t && ks(_n98))) return !1;
        var _o72 = e.lastChild;
        if (_o72 === t || (_o72.previousSibling === t && ks(_o72))) return !0;
      }
      return !1;
    }
    function ks(t) {
      return Xs(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    var _Es = (function (_ls3) {
      function Es() {
        return _ls3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Es, _ls3);
      Es.getType = function getType() {
        return "paragraph";
      };
      Es.clone = function clone(t) {
        return new Es(t.__key);
      };
      var _proto16 = Es.prototype;
      _proto16.createDOM = function createDOM(t) {
        var e = document.createElement("p"),
          n = Ai(t.theme, "paragraph");
        if (void 0 !== n) {
          var _e$classList2;
          (_e$classList2 = e.classList).add.apply(_e$classList2, n);
        }
        return e;
      };
      _proto16.updateDOM = function updateDOM(t, e, n) {
        return !1;
      };
      Es.importDOM = function importDOM() {
        return {
          p: function p(t) {
            return { conversion: Os, priority: 0 };
          },
        };
      };
      _proto16.exportDOM = function exportDOM(t) {
        var _ls3$prototype$export = _ls3.prototype.exportDOM.call(this, t),
          e = _ls3$prototype$export.element;
        if (gl(e)) {
          this.isEmpty() && e.append(document.createElement("br"));
          var _t208 = this.getFormatType();
          _t208 && (e.style.textAlign = _t208);
        }
        return { element: e };
      };
      Es.importJSON = function importJSON(t) {
        return bs().updateFromJSON(t);
      };
      _proto16.exportJSON = function exportJSON() {
        var t = _ls3.prototype.exportJSON.call(this);
        if (void 0 === t.textFormat || void 0 === t.textStyle) {
          var _e143 = this.getChildren().find(Ko);
          _e143
            ? ((t.textFormat = _e143.getFormat()),
              (t.textStyle = _e143.getStyle()))
            : ((t.textFormat = this.getTextFormat()),
              (t.textStyle = this.getTextStyle()));
        }
        return t;
      };
      _proto16.insertNewAfter = function insertNewAfter(t, e) {
        var n = bs();
        (n.setTextFormat(t.format), n.setTextStyle(t.style));
        var o = this.getDirection();
        return (
          n.setDirection(o),
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
          (Ko(t[0]) && "" === t[0].getTextContent().trim())
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return Es;
    })(_ls4);
    function Os(t) {
      var e = bs();
      if ((Il(e, t), wl(t, e), "" === e.getFormatType())) {
        var _n99 = t.getAttribute("align");
        _n99 && _n99 && _n99 in D && e.setFormat(_n99);
      }
      return (Dl(e, t), { node: e });
    }
    function bs() {
      return Gi(new _Es());
    }
    function Ms(t) {
      return t instanceof _Es;
    }
    function As(t) {
      console.warn(t);
    }
    var ws = 0;
    function Ds(t, e, n, o, r) {
      var s = t._keyToDOMMap;
      (s.clear(),
        (t._editorState = _s()),
        (t._pendingEditorState = o),
        (t._compositionKey = null),
        (t._dirtyType = 0),
        t._cloneNotNeeded.clear(),
        (t._dirtyLeaves = new Set()),
        t._dirtyElements.clear(),
        (t._normalizedNodes = new Set()),
        (r && r.preserveUpdateQueue) ||
          ((t._updateTags = new Set()),
          (t._updates = []),
          (t._cascadeCount = 0)),
        (t._blockCursorElement = null));
      var i = t._observer;
      (null !== i && (i.disconnect(), (t._observer = null)),
        null !== e &&
          ((e.textContent = ""),
          (function (t, e) {
            var n = "__lexicalKey_" + e._key;
            delete t[n];
          })(e, t)),
        null !== n &&
          ((n.textContent = ""), s.set("root", n), ai(n, t, "root")));
    }
    function Is(t) {
      var e = new Set(),
        n = new Set();
      for (var _ref35 of Bl(t)) {
        var _o73 = _ref35.klass;
        var _r52 = _ref35.ownNodeConfig;
        {
          var _t209 = _o73.transform;
          if (!n.has(_t209)) {
            n.add(_t209);
            var _r53 = _o73.transform();
            _r53 && e.add(_r53);
          }
          if (_r52) {
            var _t210 = _r52.$transform;
            _t210 && e.add(_t210);
          }
        }
      }
      return e;
    }
    var Ps = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, o) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = Ws(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, o, r) {
        return cs(t) && t.extractWithChild(e, n, o);
      },
      $getDOMSlot: function $getDOMSlot(t, e, n) {
        return t.getDOMSlot(e);
      },
      $getSlotTargetElement: function $getSlotTargetElement(t, e, n, o) {
        return null;
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return cs(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, o) {
        return t.updateDOM(e, n, o._config);
      },
    };
    function Fs(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function Rs(t, e, n) {
      return (t.set(e, n), Fs.bind(null, t, e));
    }
    var _Ls = (function () {
      function Ls(t, e, n, o, r, s, i, l, c) {
        ((this._createEditorArgs = c),
          (this._parentEditor = e),
          (this._rootElement = null),
          (this._editorState = t),
          (this._pendingEditorState = null),
          (this._compositionKey = null),
          (this._deferred = []),
          (this._keyToDOMMap = new _G()),
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
          (this._config = o),
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
          (this._key = xi()),
          (this._onError = r),
          (this._onWarn = s),
          (this._htmlConversions = i),
          (this._editable = l),
          (this._headless = null !== e && e._headless),
          (this._window = null),
          (this._blockCursorElement = null),
          (this._slotsUsed = !1));
      }
      var _proto17 = Ls.prototype;
      _proto17.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto17.registerUpdateListener = function registerUpdateListener(t) {
        return Rs(this._listeners.update, t);
      };
      _proto17.registerEditableListener = function registerEditableListener(t) {
        return Rs(this._listeners.editable, t);
      };
      _proto17.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return Rs(this._listeners.decorator, t);
      };
      _proto17.registerTextContentListener =
        function registerTextContentListener(t) {
          return Rs(this._listeners.textcontent, t);
        };
      _proto17.registerRootListener = function registerRootListener(t) {
        var _this14 = this;
        var e = this._listeners.root;
        return fa(Rs(e, t, t(this._rootElement, null) || void 0), function () {
          return (function (t, e, n) {
            var o = t.get(e);
            (o && o(), t.set(e, e.apply(void 0, n) || void 0));
          })(e, t, [null, _this14._rootElement]);
        });
      };
      _proto17.registerCommand = function registerCommand(e, n, o) {
        void 0 === o && t(35);
        var r = this._commands;
        r.has(e) ||
          r.set(e, [new _j(), new _j(), new _j(), new _j(), new _j()]);
        var s = r.get(e);
        void 0 === s && t(36, String(e));
        var i = (function (t) {
            return 7 & t;
          })(o),
          l = s[i];
        return (
          i !== o ? l.addFront(n) : l.addBack(n),
          function () {
            (l["delete"](n),
              s.every(function (t) {
                return 0 === t.size;
              }) && r["delete"](e));
          }
        );
      };
      _proto17.registerMutationListener = function registerMutationListener(
        t,
        e,
        n,
      ) {
        var o = this.resolveRegisteredNodeAfterReplacements(
            this.getRegisteredNode(t),
          ).klass,
          r = this._listeners.mutation;
        var s = r.get(e);
        (void 0 === s && ((s = new Set()), r.set(e, s)), s.add(o));
        var i = n && n.skipInitialization;
        return (
          (void 0 !== i && i) || this.initializeMutationListener(e, o),
          function () {
            (s["delete"](o), 0 === s.size && r["delete"](e));
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
          o = Ml(n).get(e.getType());
        if (!o) return;
        var r = new Map();
        for (var _t211 of o.keys()) r.set(_t211, "created");
        r.size > 0 &&
          t(r, {
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
          o = [n],
          r = n.replaceWithKlass;
        if (null != r) {
          var _t212 = this.registerNodeTransformToKlass(r, e);
          o.push(_t212);
        }
        return (
          (function (t, e) {
            var n = Ml(t.getEditorState()),
              o = [];
            for (var _t213 of e) {
              var _e144 = n.get(_t213);
              _e144 && o.push(_e144);
            }
            if (0 === o.length) return;
            t.update(
              function () {
                for (var _t214 of o)
                  for (var _e145 of _t214.keys()) {
                    var _t215 = li(_e145);
                    _t215 && _t215.markDirty();
                  }
              },
              null === t._pendingEditorState ? { tag: fo } : void 0,
            );
          })(
            this,
            o.map(function (t) {
              return t.klass.getType();
            }),
          ),
          function () {
            o.forEach(function (t) {
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
        return Fi(this, t, e);
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
          var _n100 = Ai(this._config.theme, "root"),
            _o74 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            Ds(this, e, t, _o74, { preserveUpdateQueue: !0 }),
            null !== e &&
              (this._config.disableEvents || ro(e),
              null != _n100 &&
                (_e$classList3 = e.classList).remove.apply(
                  _e$classList3,
                  _n100,
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e146 = Wi(t),
              _o75 = t.style;
            ((_o75.userSelect = "text"),
              (_o75.whiteSpace = "pre-wrap"),
              (_o75.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e146),
              (this._dirtyType = 2),
              st(this),
              this._updateTags.add(fo),
              Zr(this),
              this._config.disableEvents ||
                (function (t, e) {
                  var n = t.ownerDocument;
                  On.set(t, n);
                  var o = bn.get(n);
                  (void 0 === o &&
                    ((o = {
                      editors: new Set(),
                      hasShadowEditor: void 0,
                      rootElementCount: 0,
                    }),
                    bn.set(n, o)),
                    o.rootElementCount < 1 &&
                      n.addEventListener("selectionchange", to),
                    (o.rootElementCount += 1),
                    o.editors.add(e),
                    (o.hasShadowEditor = void 0),
                    (t.__lexicalEditor = e));
                  var r = Qn(t);
                  var _loop2 = function _loop2() {
                    var _Cn$_n = Cn[_n101],
                      o = _Cn$_n[0],
                      s = _Cn$_n[1],
                      i =
                        "function" == typeof s
                          ? function (t) {
                              no(t) ||
                                (eo(t),
                                (e.isEditable() || "click" === o) && s(t, e));
                            }
                          : function (t) {
                              if (no(t)) return;
                              eo(t);
                              var n = e.isEditable();
                              switch (o) {
                                case "cut":
                                  return n && Fi(e, un, t);
                                case "copy":
                                  return Fi(e, an, t);
                                case "paste":
                                  return n && Fi(e, Pe, t);
                                case "dragstart":
                                  return n && Fi(e, sn, t);
                                case "dragover":
                                  return n && Fi(e, ln, t);
                                case "dragend":
                                  return n && Fi(e, cn, t);
                                case "focus":
                                  return n && Fi(e, pn, t);
                                case "blur":
                                  return n && Fi(e, yn, t);
                                case "drop":
                                  return n && Fi(e, on, t);
                              }
                            };
                    (t.addEventListener(o, i),
                      r.push(function () {
                        t.removeEventListener(o, i);
                      }));
                  };
                  for (var _n101 = 0; _n101 < Cn.length; _n101++) {
                    _loop2();
                  }
                })(t, this),
              null != _n100 &&
                (_t$classList = t.classList).add.apply(_t$classList, _n100));
          } else ((this._window = null), this._updateTags.add(fo), Zr(this));
          ts("root", this, !1, t, e);
        }
      };
      _proto17.getElementByKey = function getElementByKey(t) {
        return this._keyToDOMMap.get(t) || null;
      };
      _proto17.getEditorState = function getEditorState() {
        return this._editorState;
      };
      _proto17.setEditorState = function setEditorState(e, n) {
        var _this15 = this;
        e.isEmpty() && t(38);
        var o = e;
        (o._readOnly &&
          ((o = gs(e)),
          (o._selection = e._selection ? e._selection.clone() : null)),
          rt(this));
        var r = this._pendingEditorState,
          s = void 0 !== n ? n.tag : null;
        (null === r ||
          r.isEmpty() ||
          (null != s && this._updateTags.add(s), Zr(this)),
          (this._pendingEditorState = o),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          (this._slotsUsed = this._slotsUsed || e._slotsUsed),
          ss(
            this,
            function () {
              if ((s && _this15._updateTags.add(s), e._parsed))
                for (var _ref37 of o._nodeMap.entries()) {
                  var _t216 = _ref37[0];
                  var _e147 = _ref37[1];
                  cs(_e147)
                    ? _this15._dirtyElements.set(_t216, !0)
                    : _this15._dirtyLeaves.add(_t216);
                }
            },
            { discrete: !this._updating || void 0 },
          ));
      };
      _proto17.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var o = _s(),
            r = Dr,
            s = Pr,
            i = Ir,
            l = e._dirtyElements,
            c = e._dirtyLeaves,
            a = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Set()),
            (e._dirtyType = 0),
            (Dr = o),
            (Pr = !1),
            (Ir = e),
            Ks(null));
          try {
            var _r54 = e._nodes;
            (Xr(t.root, _r54), n && n(), (o._readOnly = !0), (o._parsed = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = c),
              (e._cloneNotNeeded = a),
              (e._dirtyType = u),
              (Dr = r),
              (Pr = s),
              (Ir = i));
          }
          return o;
        })("string" == typeof t ? JSON.parse(t) : t, this, e);
      };
      _proto17.read = function read() {
        for (
          var _len5 = arguments.length, t = new Array(_len5), _key5 = 0;
          _key5 < _len5;
          _key5++
        ) {
          t[_key5] = arguments[_key5];
        }
        var _ref38 = 1 === t.length ? ["force-commit", t[0]] : t,
          e = _ref38[0],
          n = _ref38[1];
        "force-commit" === e && Zr(this);
        return (
          "pending" === e
            ? this._pendingEditorState || this._editorState
            : this.getEditorState()
        ).read(n, { editor: this });
      };
      _proto17.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : rs(t, e, n);
        })(this, t, e);
      };
      _proto17.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          ss(this, function () {
            var o = _r(),
              r = gi();
            (null !== o
              ? o.dirty || _i(o.clone())
              : 0 !== r.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? r.selectStart()
                  : r.selectEnd()),
              Ki("focus"),
              zi(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto17.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = Zi(this._window);
        null !== e && e.removeAllRanges();
      };
      _proto17.isEditable = function isEditable() {
        return this._editable;
      };
      _proto17.setEditable = function setEditable(t) {
        this._editable !== t &&
          ((this._editable = t),
          ts("editable", this, !0, t),
          this._slotsUsed &&
            this.update(function () {
              return jr();
            }));
      };
      _proto17.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON() };
      };
      return Ls;
    })();
    _Ls.version = H;
    var $s = null;
    function Ks(t) {
      $s = t;
    }
    var zs = 1;
    function Bs(e, n) {
      var o = Ws(e, n);
      return (void 0 === o && t(30, n), o);
    }
    function Ws(t, e) {
      return t._nodes.get(e);
    }
    var Us =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function Hs(t, e) {
      var n =
        void 0 !== e
          ? e
          : (function () {
              var e = t.getRootNode();
              return Qs(e) || el(e) ? dl(e) : null;
            })();
      if (!gl(n)) return !1;
      if (n.hasAttribute("data-lexical-slot")) return !1;
      var o = n.nodeName;
      return (
        fs(fi(t)) &&
        ("INPUT" === o ||
          "TEXTAREA" === o ||
          ("true" === n.contentEditable && null == Gs(n)))
      );
    }
    function js(t, e, n) {
      var o = t.getRootElement();
      try {
        return (
          null !== o &&
          o.contains(e) &&
          o.contains(n) &&
          null !== e &&
          !Hs(e) &&
          Js(e) === t
        );
      } catch (t) {
        return !1;
      }
    }
    function Ys(t) {
      return t instanceof _Ls;
    }
    function Js(t) {
      var e = t;
      for (; null != e; ) {
        var _t217 = Gs(e);
        if (Ys(_t217)) return _t217;
        e = Li(e);
      }
      return null;
    }
    function Gs(t) {
      return t ? t.__lexicalEditor : null;
    }
    function Vs(t) {
      return Uo(t) || t.isToken();
    }
    function qs(t) {
      return Vs(t) || t.isSegmented();
    }
    function Xs(t) {
      return _l(t) && 3 === t.nodeType;
    }
    function Qs(t) {
      return _l(t) && 9 === t.nodeType;
    }
    function Zs(t) {
      var e = t;
      for (; null != e; ) {
        if (Xs(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function ti(t, e, n) {
      var o = A[e];
      if (null !== n && (t & o) === (n & o)) return t;
      var r = t ^ o;
      return (
        "subscript" === e
          ? (r &= ~A.superscript)
          : "superscript" === e
            ? (r &= ~A.subscript)
            : "lowercase" === e
              ? ((r &= ~A.uppercase), (r &= ~A.capitalize))
              : "uppercase" === e
                ? ((r &= ~A.lowercase), (r &= ~A.capitalize))
                : "capitalize" === e &&
                  ((r &= ~A.lowercase), (r &= ~A.uppercase)),
        r
      );
    }
    function ei(t, e) {
      var n = (function () {
        var t = $s;
        return (($s = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (Br(), Wr());
      var o = Hr(),
        r = Ur(),
        s = "" + zs++;
      (r._nodeMap.set(s, t),
        cs(t) ? o._dirtyElements.set(s, !0) : o._dirtyLeaves.add(s),
        o._cloneNotNeeded.add(s),
        0 === o._dirtyType && (o._dirtyType = 1),
        (t.__key = s));
    }
    function ni(t) {
      null !== Gl(t) &&
        e(
          "$removeFromParent: node " +
            t.__key +
            " is slotted into host " +
            String(Gl(t)) +
            "; a slotted node and a child are mutually exclusive. Remove it from its slot first.",
        );
      var n = t.getParent();
      if (null !== n) {
        var _e148 = t.getWritable(),
          _o76 = n.getWritable(),
          _r55 = t.getPreviousSibling(),
          _s38 = t.getNextSibling(),
          _i27 = null !== _s38 ? _s38.__key : null,
          _l16 = null !== _r55 ? _r55.__key : null,
          _c13 = null !== _r55 ? _r55.getWritable() : null,
          _a10 = null !== _s38 ? _s38.getWritable() : null;
        (null === _r55 && (_o76.__first = _i27),
          null === _s38 && (_o76.__last = _l16),
          null !== _c13 && (_c13.__next = _i27),
          null !== _a10 && (_a10.__prev = _l16),
          (_e148.__prev = null),
          (_e148.__next = null),
          (_e148.__parent = null),
          _o76.__size--);
      }
    }
    var oi = ni;
    function ri(e) {
      (Wr(), lo(e) && t(323, e.__key, e.__type));
      var n = e.getLatest(),
        o = null !== n.__parent ? n.__parent : Jl(n) ? n.__slotHost : null,
        r = Ur(),
        s = Hr(),
        i = r._nodeMap,
        l = s._dirtyElements;
      null !== o &&
        (function (t, e, n) {
          var o = t;
          for (; null !== o; ) {
            if (n.has(o)) return;
            var _t218 = e.get(o);
            if (void 0 === _t218) break;
            (n.set(o, !1),
              (o =
                null !== _t218.__parent
                  ? _t218.__parent
                  : Jl(_t218)
                    ? _t218.__slotHost
                    : null));
          }
        })(o, i, l);
      var c = n.__key;
      (0 === s._dirtyType && (s._dirtyType = 1),
        cs(e) ? l.set(c, !0) : s._dirtyLeaves.add(c));
    }
    function si(t) {
      Br();
      var e = Hr(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t219 = li(n);
          null !== _t219 && _t219.getWritable();
        }
        if (null !== t) {
          var _e149 = li(t);
          null !== _e149 && _e149.getWritable();
        }
      }
    }
    function ii() {
      if (zr()) return null;
      return Hr()._compositionKey;
    }
    function li(t, e) {
      var n = (e || Ur())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function ci(t, e) {
      var n = ui(t, Hr());
      return void 0 !== n ? li(n, e) : null;
    }
    function ai(t, e, n) {
      t["__lexicalKey_" + e._key] = n;
    }
    function ui(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function fi(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t220 = ci(n, e);
        if (null !== _t220) return _t220;
        n = Li(n);
      }
      return null;
    }
    function di(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function hi(t) {
      return t.read(function () {
        return gi().getTextContent();
      });
    }
    function gi() {
      return Ur()._nodeMap.get("root");
    }
    function _i(t) {
      Br();
      var e = Ur();
      (null !== t &&
        ((t.dirty = !0),
        t.setCachedNodes(null),
        Vo(t) && Hr()._slotsUsed && cr(t)),
        (e._selection = t));
    }
    function pi(t) {
      var e = (function (t, e) {
        var n = t;
        for (; null != n; ) {
          var _t221 = ui(n, e);
          if (void 0 !== _t221) return _t221;
          n = Li(n);
        }
        return null;
      })(t, Hr());
      return null === e ? null : li(e);
    }
    function yi(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function mi(t) {
      var e = [];
      for (var _n102 = t; null !== _n102; _n102 = _n102._parentEditor)
        e.push(_n102);
      return e;
    }
    function xi() {
      return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substring(0, 5);
    }
    function Ci(t) {
      return Xs(t) ? t.nodeValue : null;
    }
    function Si(t, e, n) {
      var o = Zi(Ui(e));
      if (null === o) return;
      var r = ll(o, e._rootElement),
        s = r.anchorNode;
      var i = r.anchorOffset,
        l = r.focusOffset;
      if (null !== s) {
        var _e150 = Ci(s);
        var _o77 = fi(s);
        if (null !== _e150 && Ko(_o77)) {
          if ((_e150 === T || _e150 === k) && n) {
            var _t222 = n.length;
            ((_e150 = n), (i = _t222), (l = _t222));
          }
          null !== _e150 && Ni(_o77, _e150, i, l, t);
        }
      }
    }
    function Ni(t, e, n, o, r) {
      var s = t;
      if (s.isAttached() && (r || !s.isDirty())) {
        var _i28 = s.isComposing();
        var _c14 = e;
        if (
          (_i28 || r) &&
          (e.endsWith(T) && (_c14 = e.slice(0, -T.length)), r)
        ) {
          var _t223 = k;
          var _e151;
          for (; -1 !== (_e151 = _c14.indexOf(_t223)); )
            ((_c14 = _c14.slice(0, _e151) + _c14.slice(_e151 + _t223.length)),
              null !== n &&
                n > _e151 &&
                (n = Math.max(_e151, n - _t223.length)),
              null !== o &&
                o > _e151 &&
                (o = Math.max(_e151, o - _t223.length)));
        }
        var _u10 = s.getTextContent();
        if (r || _c14 !== _u10) {
          var _e152 = _r();
          if ("" === _c14) {
            if ((si(null), a || l || d)) s.remove();
            else {
              var _t224 = Hr();
              (Ti(s, "", _e152),
                setTimeout(function () {
                  _t224.update(function () {
                    s.isAttached() && "" === s.getTextContent() && s.remove();
                  });
                }, 20));
            }
            return;
          }
          var _r56 = s.getParent(),
            _u11 = pr(),
            _f1 = s.getTextContentSize(),
            _h7 = ii(),
            _g7 = s.getKey();
          if (
            s.isToken() ||
            (null !== _h7 && _g7 === _h7 && !_i28) ||
            (Vo(_u11) &&
              ((null !== _r56 &&
                !_r56.canInsertTextBefore() &&
                0 === _u11.anchor.offset) ||
                (_u11.anchor.key === t.__key &&
                  0 === _u11.anchor.offset &&
                  !s.canInsertTextBefore() &&
                  !_i28) ||
                (_u11.focus.key === t.__key &&
                  _u11.focus.offset === _f1 &&
                  !s.canInsertTextAfter() &&
                  !_i28)))
          )
            return void s.markDirty();
          if (!Vo(_e152) || null === n || null === o)
            return void Ti(s, _c14, _e152);
          if ((_e152.setTextNodeRange(s, n, s, o), s.isSegmented())) {
            var _t225 = $o(s.getTextContent());
            (s.replace(_t225), (s = _t225));
          }
          Ti(s, _c14, _e152);
        }
      }
    }
    function Ti(t, e, n) {
      if ((t.setTextContent(e), Vo(n))) {
        var _e153 = t.getKey();
        var _o78 = !1;
        for (var _r57 of ["anchor", "focus"]) {
          var _s39 = n[_r57];
          "text" === _s39.type &&
            _s39.key === _e153 &&
            ((_s39.offset = Ac(t, _s39.offset, "clamp")), (_o78 = !0));
        }
        _o78 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
      }
    }
    function vi(t, e, n) {
      var o = e[n] || !1;
      return "any" === o || o === t[n];
    }
    function ki(t, e) {
      return (
        vi(t, e, "altKey") &&
        vi(t, e, "ctrlKey") &&
        vi(t, e, "shiftKey") &&
        vi(t, e, "metaKey")
      );
    }
    function Ei(t, e, n) {
      if (!ki(t, n)) return !1;
      if (t.key.toLowerCase() === e.toLowerCase()) return !0;
      if (e.length > 1) return !1;
      if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
      if (t.code.startsWith("Digit") && /^\d$/.test(e))
        return t.code === "Digit" + e;
      var o = "Key" + e.toUpperCase();
      return t.code === o;
    }
    var Oi = { ctrlKey: !r, metaKey: r },
      bi = { altKey: r, ctrlKey: !r };
    function Mi(t) {
      return "Backspace" === t.key;
    }
    function Ai(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        o = n[e];
      if (void 0 !== o) return o;
      var r = t[e];
      if ("string" == typeof r) {
        var _t226 = ua(r);
        return ((n[e] = _t226), _t226);
      }
      return r;
    }
    function wi(e, n, o, r, s) {
      if (0 === o.size) return;
      var i = r.__type,
        l = r.__key,
        c = n.get(i);
      void 0 === c && t(33, i);
      var a = c.klass;
      var u = e.get(a);
      void 0 === u && ((u = new Map()), e.set(a, u));
      var f = u.get(l),
        d = "destroyed" === f && "created" === s;
      (void 0 === f || d) && u.set(l, d ? "updated" : s);
    }
    function Di(t, e, n) {
      var o = t.getParent();
      var r = n,
        s = t;
      return (
        null !== o &&
          (e && 0 === n
            ? ((r = s.getIndexWithinParent()), (s = o))
            : e ||
              n !== s.getChildrenSize() ||
              ((r = s.getIndexWithinParent() + 1), (s = o))),
        s.getChildAtIndex(e ? r - 1 : r)
      );
    }
    function Ii(t, e) {
      var n = t.offset;
      if ("element" === t.type) {
        return Di(t.getNode(), e, n);
      }
      {
        var _o79 = t.getNode();
        if ((e && 0 === n) || (!e && n === _o79.getTextContentSize())) {
          var _t227 = e ? _o79.getPreviousSibling() : _o79.getNextSibling();
          return null === _t227
            ? Di(
                _o79.getParentOrThrow(),
                e,
                _o79.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t227;
        }
      }
      return null;
    }
    function Pi(t) {
      var e = Ui(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function Fi(t, e, n) {
      return es(t, e, n, t);
    }
    function Ri(e, n) {
      var o = e._keyToDOMMap.get(n);
      return (void 0 === o && t(75, n), o);
    }
    function Li(t) {
      var e = t.assignedSlot || t.parentElement;
      if (null !== e) return e;
      var n = t.parentNode;
      return el(n) ? n.host : null;
    }
    function $i(t) {
      return Qs(t) ? t : gl(t) ? t.ownerDocument : null;
    }
    function Ki(t) {
      Br();
      Hr()._updateTags.add(t);
    }
    function zi(t) {
      Br();
      Hr()._deferred.push(t);
    }
    function Bi(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function Wi(t) {
      var e = $i(t);
      return e ? e.defaultView : null;
    }
    function Ui(e) {
      var n = e._window;
      return (null === n && t(78), n);
    }
    function Hi(t) {
      return (cs(t) && t.isInline()) || (fs(t) && t.isInline());
    }
    function ji(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== Gl(e) && cs(e)) return e;
        var _t228 = e.getParentOrThrow();
        if (Yi(_t228)) return _t228;
        e = _t228;
      }
      return e;
    }
    function Yi(t) {
      return hs(t) || (cs(t) && t.isShadowRoot());
    }
    function Ji(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t);
      return (
        ei(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function Gi(e) {
      var n = Hr(),
        o = e.getType(),
        r = Ws(n, o);
      void 0 === r && t(200, e.constructor.name, o);
      var s = r.replace,
        i = r.replaceWithKlass;
      if (null !== s) {
        var _n103 = s(e),
          _r58 = _n103.constructor;
        return (
          null !== i
            ? _n103 instanceof i ||
              t(
                201,
                i.name,
                i.getType(),
                _r58.name,
                _r58.getType(),
                e.constructor.name,
                o,
              )
            : (_n103 instanceof e.constructor && _r58 !== e.constructor) ||
              t(202, _r58.name, _r58.getType(), e.constructor.name, o),
          _n103.__key === e.__key &&
            t(203, e.constructor.name, o, _r58.name, _r58.getType()),
          _n103
        );
      }
      return e;
    }
    function Vi(e, n) {
      !hs(e.getParent()) || cs(n) || fs(n) || t(99);
    }
    function qi(e) {
      var n = li(e);
      return (null === n && t(63, e), n);
    }
    function Xi(t) {
      return (fs(t) || (cs(t) && !t.canBeEmpty())) && !t.isInline();
    }
    function Qi(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var o = t.parentElement;
      null !== o && o.removeChild(t);
    }
    function Zi(t) {
      return n ? (t || window).getSelection() : null;
    }
    function tl(t) {
      var e = Wi(t);
      return e ? e.getSelection() : null;
    }
    function el(t) {
      return pl(t) && "host" in t;
    }
    var nl = [];
    function ol(t) {
      var e = t.getRootNode();
      if (e === t || !el(e)) return nl;
      var n = [e];
      var o = e.host;
      for (;;) {
        var _t229 = o.getRootNode();
        if (_t229 === o || !el(_t229)) break;
        (n.push(_t229), (o = _t229.host));
      }
      return n;
    }
    function* rl(t) {
      var e = [t];
      var n;
      for (; (n = e.pop()); ) {
        yield* n.querySelectorAll('[data-lexical-editor="true"]');
        var _t230 = (Qs(n) ? n : n.ownerDocument).createTreeWalker(
          n,
          NodeFilter.SHOW_ELEMENT,
        );
        var _o80 = void 0;
        for (; (_o80 = _t230.nextNode()); )
          _o80.shadowRoot && e.push(_o80.shadowRoot);
      }
    }
    function sl(t, e) {
      if (null === e || "function" != typeof t.getComposedRanges) return null;
      var n = ol(e);
      if (0 === n.length) return null;
      var o = t.getComposedRanges;
      try {
        var _e154 = o.call(t, { shadowRoots: n })[0];
        if (void 0 !== _e154) return _e154;
      } catch (t) {}
      try {
        var _e155 = o.apply(t, n)[0];
        if (void 0 !== _e155) return _e155;
      } catch (t) {}
      return null;
    }
    function il(t, e) {
      var n = sl(t, e);
      if (null !== n) {
        var _t231 = cl(n);
        if (null !== _t231) return _t231;
      }
      return t.rangeCount > 0 ? t.getRangeAt(0) : null;
    }
    function ll(t, e) {
      var n = sl(t, e);
      return null === n ? t : al(n, ul(t));
    }
    function cl(t) {
      var e = t.startContainer.ownerDocument;
      if (null === e) return null;
      var n = e.createRange();
      try {
        return (
          n.setStart(t.startContainer, t.startOffset),
          n.setEnd(t.endContainer, t.endOffset),
          n
        );
      } catch (t) {
        return null;
      }
    }
    function al(t, e) {
      var n = t.startContainer,
        o = t.startOffset,
        r = t.endContainer,
        s = t.endOffset;
      return "backward" === e
        ? {
            anchorNode: r,
            anchorOffset: s,
            direction: e,
            focusNode: n,
            focusOffset: o,
          }
        : {
            anchorNode: n,
            anchorOffset: o,
            direction: e,
            focusNode: r,
            focusOffset: s,
          };
    }
    function ul(t) {
      return t.direction;
    }
    function fl(t) {
      var e = t.getRootNode();
      return Qs(e) || el(e) ? e.activeElement : null;
    }
    function dl(t) {
      var e = t.activeElement;
      for (; null !== e && null !== e.shadowRoot; ) {
        var _t232 = e.shadowRoot.activeElement;
        if (null === _t232) break;
        e = _t232;
      }
      return e;
    }
    function hl(t) {
      var e = t.target;
      if (
        null !== e &&
        gl(e) &&
        null !== e.shadowRoot &&
        "function" == typeof t.composedPath
      ) {
        var _e156 = t.composedPath();
        if (_e156.length > 0) return _e156[0];
      }
      return e;
    }
    function gl(t) {
      return _l(t) && 1 === t.nodeType;
    }
    function _l(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function pl(t) {
      return _l(t) && 11 === t.nodeType;
    }
    var yl =
      /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
    function ml(t) {
      return (
        !(!gl(t) || !t.style.display.startsWith("inline")) ||
        yl.test(t.nodeName)
      );
    }
    var xl =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function Cl(t) {
      return (
        (!gl(t) || !t.style.display.startsWith("inline")) && xl.test(t.nodeName)
      );
    }
    function Sl(t) {
      if (fs(t) && !t.isInline()) return !0;
      if (!cs(t) || Yi(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || Ns(e) || Ko(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function Nl() {
      return Hr();
    }
    function Tl(t) {
      if (t === void 0) {
        t = Nl();
      }
      return t._config.dom || Ps;
    }
    function vl(e, n, o) {
      if (o === void 0) {
        o = Nl();
      }
      var r = Tl(o).$getDOMSlot(e, n, o);
      return (cs(e) && (kl(r) || t(344, e.getKey(), e.getType())), r);
    }
    function kl(t) {
      return t instanceof _B;
    }
    function El(t, e, n) {
      if (n === void 0) {
        n = Nl();
      }
      return Zs(vl(t, e, n).element);
    }
    var Ol = new WeakMap(),
      bl = new Map();
    function Ml(e) {
      if (!e._readOnly && e.isEmpty()) return bl;
      e._readOnly || t(192);
      var n = Ol.get(e);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref40 of t._nodeMap) {
              var _n104 = _ref40[0];
              var _o81 = _ref40[1];
              {
                var _t233 = _o81.__type;
                var _r59 = e.get(_t233);
                (_r59 || ((_r59 = new Map()), e.set(_t233, _r59)),
                  _r59.set(_n104, _o81));
              }
            }
            return e;
          })(e)),
          Ol.set(e, n)),
        n
      );
    }
    function Al(t) {
      var e = t.constructor.clone(t);
      return (e.afterCloneFrom(t), e);
    }
    function wl(t, e) {
      var n = t.getAttribute("data-lexical-indent");
      if (null !== n) {
        var _t234 = parseInt(n, 10);
        if (Number.isFinite(_t234) && _t234 >= 0)
          return void e.setIndent(_t234);
      }
      var o = parseInt(t.style.paddingInlineStart, 10) || 0,
        r = Math.round(o / 40);
      e.setIndent(r);
    }
    function Dl(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function Il(t, e) {
      var n = e.style.textAlign;
      return n && n in D ? t.setFormat(n) : t;
    }
    function Pl(t, e) {
      ((t.__lexicalUnmanaged = !0),
        e &&
          void 0 !== e.captureSelection &&
          (t.__lexicalCapturedSelection = e.captureSelection));
    }
    function Fl(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function Rl(t, e) {
      if (e === void 0) {
        e = Nl();
      }
      t.contentEditable = e.isEditable() ? "true" : "false";
    }
    function Ll(t, e) {
      var n = t;
      for (; null != n; ) {
        if (!0 === n.__lexicalCapturedSelection) return !0;
        if (gl(n) && n.hasAttribute("data-lexical-slot")) return !1;
        if (void 0 !== ui(n, e)) return !1;
        n = Li(n);
      }
      return !1;
    }
    function $l(t, e) {
      return (
        (function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        })(t, e) && t[e] !== _ao5[e]
      );
    }
    var Kl = new WeakMap();
    function zl(e) {
      var n = Kl.get(e);
      if (n) return n;
      var o =
          null != e.prototype && R in e.prototype ? e.prototype[R]() : void 0,
        r = (function (e) {
          if (!(e === _ao5 || e.prototype instanceof _ao5)) {
            var _n105 = "<unknown>",
              _o82 = "<unknown>";
            try {
              _n105 = e.getType();
            } catch (t) {}
            try {
              _Ls.version && (_o82 = JSON.parse(_Ls.version));
            } catch (t) {}
            t(290, e.name, _n105, _o82);
          }
          return e === _us || e === _ls4 || e === _ao5;
        })(e),
        s = !r && $l(e, "getType") ? e.getType() : void 0;
      var i,
        l = s;
      if (o)
        if (s) i = o[s];
        else {
          for (var _ref42 of Object.entries(o)) {
            var _t235 = _ref42[0];
            var _e157 = _ref42[1];
            ((l = _t235), (i = _e157));
          }
          if (!i)
            for (var _t236 of Object.getOwnPropertySymbols(o)) {
              var _e158 = o[_t236];
              if (_e158) {
                i = _e158;
                break;
              }
            }
        }
      if (
        !r &&
        l &&
        ($l(e, "getType") ||
          (e.getType = function () {
            return l;
          }),
        $l(e, "clone") ||
          (e.clone = function (t) {
            return (Ks(t), new e());
          }),
        $l(e, "importJSON") ||
          (e.importJSON =
            (i && i.$importJSON) ||
            function (t) {
              return new e().updateFromJSON(t);
            }),
        !$l(e, "importDOM") && i)
      ) {
        var _i29 = i,
          _t237 = _i29.importDOM;
        _t237 &&
          (e.importDOM = function () {
            return _t237;
          });
      }
      var c = { klass: e, ownNodeConfig: i, ownNodeType: l };
      return (Kl.set(e, c), c);
    }
    function* Bl(t) {
      for (var _e159 = t; _e159 && (_e159 === _ao5 || uo(_e159.prototype)); ) {
        var _t238 = zl(_e159);
        (yield _t238,
          (_e159 =
            (_t238.ownNodeConfig && _t238.ownNodeConfig["extends"]) ||
            Hl(_e159)));
      }
    }
    var Wl = function Wl(t, e) {
      var n = t;
      for (; null != n && !hs(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function Ul(e, n) {
      var o = [];
      var r = e.__first;
      for (; null !== r; ) {
        var _e160 = null === n ? li(r) : n.get(r);
        (null == _e160 && t(174), o.push(r), (r = _e160.__next));
      }
      return o;
    }
    function Hl(t) {
      var e = Object.getPrototypeOf(t);
      if ("function" == typeof e && e !== Function.prototype) return e;
      var n = t.prototype && Object.getPrototypeOf(t.prototype);
      return n ? n.constructor : null;
    }
    var jl = new Map();
    function Yl(t) {
      return cs(t) || fs(t);
    }
    function Jl(t) {
      return cs(t) || fs(t);
    }
    function Gl(t) {
      var e = t.getLatest();
      return Jl(e) ? e.__slotHost : null;
    }
    function Vl(t) {
      var n = Gl(t);
      if (null === n) return null;
      var o = li(n);
      return (
        cs(o) ||
          fs(o) ||
          e("slotHost must be an ElementNode or a DecoratorNode"),
        o
      );
    }
    function ql(t) {
      var e = Vl(t);
      if (null === e) return null;
      var n = t.getLatest().__key;
      for (var _ref44 of Ql(e)) {
        var _t239 = _ref44[0];
        var _o83 = _ref44[1];
        if (_o83 === n) return _t239;
      }
      return null;
    }
    function Xl(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== Gl(e)) return e;
        e = e.getParent();
      }
      return null;
    }
    function Ql(t) {
      var e = t.getLatest();
      return Yl(e) && null !== e.__slots ? e.__slots : jl;
    }
    function Zl(t) {
      return Array.from(Ql(t).keys());
    }
    function tc(t, e) {
      var n = Ql(t).get(e);
      return void 0 === n ? null : li(n);
    }
    var ec = ["__proto__", "constructor", "prototype"],
      nc = Symbol("slotMapOwner");
    function oc(t) {
      var e = t.__slots;
      return (
        (null !== e && e[nc] === t) ||
          ((e = new Map(e)), (e[nc] = t), (t.__slots = e)),
        e
      );
    }
    var rc = new WeakMap(),
      sc = [];
    function ic(t) {
      for (var _ref46 of Bl(t)) {
        var _e161 = _ref46.ownNodeConfig;
        {
          var _t240 = _e161 && _e161.slots;
          if (_t240) return _t240;
        }
      }
      return sc;
    }
    function lc(t) {
      var e = "";
      for (var _n106 of Zl(t)) {
        var _o84 = tc(t, _n106);
        null !== _o84 && (e += _o84.getTextContent());
      }
      return e;
    }
    function cc(t, e, n) {
      var o = n.get(t),
        r = n.get(e);
      return void 0 !== o
        ? void 0 !== r
          ? o - r
          : -1
        : void 0 !== r
          ? 1
          : t < e
            ? -1
            : t > e
              ? 1
              : 0;
    }
    function ac(t) {
      var n = t.__slots;
      if (null === n || n.size < 2) return;
      var o = (function (t) {
        var n = rc.get(t);
        if (void 0 === n) {
          var _o85 = ic(t),
            _r60 = new Map();
          for (var _n107 of _o85)
            (ec.includes(_n107) &&
              e(
                "getDeclaredSlotRank: " +
                  t.name +
                  ' declares reserved slot name "' +
                  _n107 +
                  '"; __proto__, constructor, and prototype break the plain-object serialization of slots',
              ),
              _r60.has(_n107) &&
                e(
                  "getDeclaredSlotRank: " +
                    t.name +
                    ' declares slot name "' +
                    _n107 +
                    '" more than once; the canonical order would be ambiguous',
                ),
              _r60.set(_n107, _r60.size));
          ((n = _r60), rc.set(t, n));
        }
        return n;
      })(t.constructor);
      var r = null,
        s = !0;
      for (var _t241 of n.keys()) {
        if (null !== r && cc(r, _t241, o) > 0) {
          s = !1;
          break;
        }
        r = _t241;
      }
      if (s) return;
      var i = Array.from(n).sort(function (_ref47, _ref48) {
        var t = _ref47[0];
        var e = _ref48[0];
        return cc(t, e, o);
      });
      n.clear();
      for (var _ref50 of i) {
        var _t242 = _ref50[0];
        var _e162 = _ref50[1];
        n.set(_t242, _e162);
      }
    }
    function uc(t, n, o) {
      ("__proto__" !== n && "constructor" !== n && "prototype" !== n) ||
        e(
          '$setSlot: "' +
            n +
            '" is a reserved slot name; __proto__, constructor, and prototype break the plain-object serialization of slots',
        );
      var r = t.getLatest();
      if (null !== r.__slots && r.__slots.get(n) === o.getLatest().__key)
        return r;
      ((!cs(o) && !fs(o)) || o.isInline()) &&
        e(
          "$setSlot: node " +
            o.__key +
            " is not a valid slot value; a slot value must be a non-inline ElementNode or DecoratorNode (the slot link itself is the shadow boundary).",
        );
      var s = t.getWritable(),
        i = oc(s),
        l = i.get(n);
      void 0 !== l && hc(l);
      var c = o.getWritable(),
        a = Vl(c);
      if (null !== a) {
        var _t243 = ql(c);
        (null !== _t243 && oc(a.getWritable())["delete"](_t243),
          (c.__slotHost = null));
      }
      return (
        ni(c),
        (c.__slotHost = s.__key),
        i.set(n, c.__key),
        ac(s),
        (function () {
          var t = Nl();
          ((t._slotsUsed = !0),
            t._pendingEditorState && (t._pendingEditorState._slotsUsed = !0));
        })(),
        s
      );
    }
    function fc(t, e) {
      var n = t.getWritable();
      if (null === n.__slots) return n;
      var o = n.__slots.get(e);
      return (void 0 !== o && (hc(o), oc(n)["delete"](e)), n);
    }
    function dc(t, e) {}
    function hc(t) {
      var n = li(t);
      if (null === n) return;
      var o = n.getWritable();
      (Jl(o) ||
        e(
          "detach: slotted node " +
            t +
            " must be an ElementNode or a DecoratorNode",
        ),
        (o.__slotHost = null),
        o.remove());
    }
    var gc = { next: "previous", previous: "next" };
    var _c15 = (function () {
      function _c(t) {
        this.origin = t;
      }
      var _proto18 = _c.prototype;
      _proto18[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return zc({
            hasNext: Tc,
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
        return bc(this.getNodeAtCaret(), this.direction);
      };
      _proto18.getSiblingCaret = function getSiblingCaret() {
        return bc(this.origin, this.direction);
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
      _proto18.splice = function splice(e, n, o) {
        if (o === void 0) {
          o = "next";
        }
        var r = o === this.direction ? n : Array.from(n).reverse();
        var s = this;
        var i = this.getParentAtCaret(),
          l = new Map();
        for (
          var _t244 = s.getAdjacentCaret();
          null !== _t244 && l.size < e;
          _t244 = _t244.getAdjacentCaret()
        ) {
          var _e163 = _t244.origin.getWritable();
          l.set(_e163.getKey(), _e163);
        }
        for (var _e164 of r) {
          if (l.size > 0) {
            var _n108 = s.getNodeAtCaret();
            if (_n108) {
              if (
                (l["delete"](_n108.getKey()),
                l["delete"](_e164.getKey()),
                _n108.is(_e164) || s.origin.is(_e164))
              );
              else {
                var _t245 = _e164.getParent();
                (_t245 && _t245.is(i) && _e164.remove(), _n108.replace(_e164));
              }
            } else null === _n108 && t(263, Array.from(l).join(" "));
          } else s.insert(_e164);
          s = bc(_e164, this.direction);
        }
        for (var _t246 of l.values()) _t246.remove();
        return this;
      };
      return _c;
    })();
    var _pc3 = (function (_c2) {
      function pc() {
        var _this6;
        for (
          var _len6 = arguments.length, args = new Array(_len6), _key6 = 0;
          _key6 < _len6;
          _key6++
        ) {
          args[_key6] = arguments[_key6];
        }
        return (
          ((_this6 = _c2.call.apply(_c2, [this].concat(args)) || this),
          (_this6.type = "child"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(pc, _c2);
      var _proto19 = pc.prototype;
      _proto19.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Dc(t, this.direction);
      };
      _proto19.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return bc(xc(this.getParentAtCaret(), t), this.direction);
      };
      _proto19.getFlipped = function getFlipped() {
        var t = mc(this.direction);
        return bc(this.getNodeAtCaret(), t) || Dc(this.origin, t);
      };
      _proto19.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto19.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto19.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof pc &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto19.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return pc;
    })(_c15);
    var yc = { root: hs, shadowRoot: Yi };
    function mc(t) {
      return gc[t];
    }
    function xc(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return null === t || yc[e](t) ? null : null === Gl(t) ? t : null;
    }
    var _Cc3 = (function (_c3) {
      function Cc() {
        var _this7;
        for (
          var _len7 = arguments.length, args = new Array(_len7), _key7 = 0;
          _key7 < _len7;
          _key7++
        ) {
          args[_key7] = arguments[_key7];
        }
        return (
          ((_this7 = _c3.call.apply(_c3, [this].concat(args)) || this),
          (_this7.type = "sibling"),
          babelHelpers.assertThisInitialized(_this7)) ||
          babelHelpers.assertThisInitialized(_this7)
        );
      }
      babelHelpers.inheritsLoose(Cc, _c3);
      var _proto20 = Cc.prototype;
      _proto20.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : bc(t, this.direction);
      };
      _proto20.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto20.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto20.getChildCaret = function getChildCaret() {
        return cs(this.origin) ? Dc(this.origin, this.direction) : null;
      };
      _proto20.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return bc(xc(this.getParentAtCaret(), t), this.direction);
      };
      _proto20.getFlipped = function getFlipped() {
        var t = mc(this.direction);
        return (
          bc(this.getNodeAtCaret(), t) || Dc(this.origin.getParentOrThrow(), t)
        );
      };
      _proto20.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Cc &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto20.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof Cc || t instanceof _Sc3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return Cc;
    })(_c15);
    var _Sc3 = (function (_c4) {
      function Sc(t, e) {
        var _this8;
        ((_this8 = _c4.call(this, t) || this),
          (_this8.type = "text"),
          (_this8.offset = e));
        return _this8;
      }
      babelHelpers.inheritsLoose(Sc, _c4);
      var _proto21 = Sc.prototype;
      _proto21.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Mc(t, this.direction, this.offset);
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
        return bc(xc(this.getParentAtCaret(), t), this.direction);
      };
      _proto21.getFlipped = function getFlipped() {
        return Mc(this.origin, mc(this.direction), this.offset);
      };
      _proto21.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Sc &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto21.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _Cc3 || t instanceof Sc) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto21.getSiblingCaret = function getSiblingCaret() {
        return bc(this.origin, this.direction);
      };
      return Sc;
    })(_c15);
    function Nc(t) {
      return t instanceof _Sc3;
    }
    function Tc(t) {
      return t instanceof _Cc3;
    }
    function vc(t) {
      return t instanceof _pc3;
    }
    var kc = {
        next: (function (_Sc) {
          function _class() {
            var _this9;
            for (
              var _len8 = arguments.length, args = new Array(_len8), _key8 = 0;
              _key8 < _len8;
              _key8++
            ) {
              args[_key8] = arguments[_key8];
            }
            return (
              ((_this9 = _Sc.call.apply(_Sc, [this].concat(args)) || this),
              (_this9.direction = "next"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class, _Sc);
          var _proto22 = _class.prototype;
          _proto22.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto22.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_Sc3),
        previous: (function (_Sc2) {
          function _class3() {
            var _this0;
            for (
              var _len9 = arguments.length, args = new Array(_len9), _key9 = 0;
              _key9 < _len9;
              _key9++
            ) {
              args[_key9] = arguments[_key9];
            }
            return (
              ((_this0 = _Sc2.call.apply(_Sc2, [this].concat(args)) || this),
              (_this0.direction = "previous"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class3, _Sc2);
          var _proto23 = _class3.prototype;
          _proto23.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto23.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_Sc3),
      },
      Ec = {
        next: (function (_Cc) {
          function _class5() {
            var _this1;
            for (
              var _len0 = arguments.length, args = new Array(_len0), _key0 = 0;
              _key0 < _len0;
              _key0++
            ) {
              args[_key0] = arguments[_key0];
            }
            return (
              ((_this1 = _Cc.call.apply(_Cc, [this].concat(args)) || this),
              (_this1.direction = "next"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class5, _Cc);
          var _proto24 = _class5.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_Cc3),
        previous: (function (_Cc2) {
          function _class7() {
            var _this10;
            for (
              var _len1 = arguments.length, args = new Array(_len1), _key1 = 0;
              _key1 < _len1;
              _key1++
            ) {
              args[_key1] = arguments[_key1];
            }
            return (
              ((_this10 = _Cc2.call.apply(_Cc2, [this].concat(args)) || this),
              (_this10.direction = "previous"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class7, _Cc2);
          var _proto25 = _class7.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_Cc3),
      },
      Oc = {
        next: (function (_pc) {
          function _class9() {
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
              ((_this11 = _pc.call.apply(_pc, [this].concat(args)) || this),
              (_this11.direction = "next"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class9, _pc);
          var _proto26 = _class9.prototype;
          _proto26.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto26.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_pc3),
        previous: (function (_pc2) {
          function _class1() {
            var _this12;
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
              ((_this12 = _pc2.call.apply(_pc2, [this].concat(args)) || this),
              (_this12.direction = "previous"),
              babelHelpers.assertThisInitialized(_this12)) ||
              babelHelpers.assertThisInitialized(_this12)
            );
          }
          babelHelpers.inheritsLoose(_class1, _pc2);
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
        })(_pc3),
      };
    function bc(t, e) {
      return t ? new Ec[e](t) : null;
    }
    function Mc(t, e, n) {
      return t ? new kc[e](t, Ac(t, n)) : null;
    }
    function Ac(t, e, n) {
      if (n === void 0) {
        n = "error";
      }
      var o = t.getTextContentSize();
      var r = "next" === e ? o : "previous" === e ? 0 : e;
      return (
        (r < 0 || r > o) &&
          ("clamp" !== n &&
            (function (t) {
              var n = new URL("https://lexical.dev/docs/error"),
                o = new URLSearchParams();
              o.append("code", t);
              for (
                var _len12 = arguments.length,
                  e = new Array(_len12 > 1 ? _len12 - 1 : 0),
                  _key12 = 1;
                _key12 < _len12;
                _key12++
              ) {
                e[_key12 - 1] = arguments[_key12];
              }
              for (var _t247 of e) o.append("v", _t247);
              ((n.search = o.toString()),
                console.warn(
                  "Minified Lexical warning #" +
                    t +
                    "; visit " +
                    n.toString() +
                    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
                ));
            })(284, String(e), String(o), t.getKey()),
          (r = r < 0 ? 0 : o)),
        r
      );
    }
    function wc(t, e) {
      return new _Rc(t, e);
    }
    function Dc(t, e) {
      return cs(t) ? new Oc[e](t) : null;
    }
    function Ic(t) {
      return (t && t.getChildCaret()) || t;
    }
    function Pc(t) {
      return t && Ic(t.getAdjacentCaret());
    }
    var _Fc = (function () {
      function Fc(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto28 = Fc.prototype;
      _proto28.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new Fc(t, e, this.direction);
      };
      _proto28.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto28.getTextSlices = function getTextSlices() {
        var _this16 = this;
        var t = function t(_t248) {
            var e = _this16[_t248].getLatest();
            return Nc(e)
              ? (function (t, e) {
                  var n = t.direction,
                    o = t.origin,
                    r = Ac(o, "focus" === e ? mc(n) : n);
                  return wc(t, r - t.offset);
                })(e, _t248)
              : null;
          },
          e = t("anchor"),
          n = t("focus");
        if (e && n) {
          var _t249 = e.caret,
            _o86 = n.caret;
          if (_t249.isSameNodeCaret(_o86))
            return [wc(_t249, _o86.offset - _t249.offset), null];
        }
        return [e, n];
      };
      _proto28.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = Nc(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          o = Nc(n),
          r = function r(e) {
            return e.isSameNodeCaret(n) ? null : Pc(e) || e.getParentCaret(t);
          };
        return zc({
          hasNext: function hasNext(t) {
            return null !== t && !(o && n.isSameNodeCaret(t));
          },
          initial: e.isSameNodeCaret(n) ? null : r(e),
          map: function map(t) {
            return t;
          },
          step: r,
        });
      };
      _proto28[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this.iterNodeCarets("root");
        };
      return Fc;
    })();
    var _Rc = (function () {
      function Rc(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto29 = Rc.prototype;
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
          o = _this$getSliceIndices2[1],
          r = t.getTextContent();
        return Mc(t.setTextContent(r.slice(0, n) + r.slice(o)), e, n);
      };
      return Rc;
    })();
    function Lc(t) {
      return Kc(t, bc(gi(), t.direction));
    }
    function $c(t) {
      return Kc(t, t);
    }
    function Kc(e, n) {
      return (
        e.direction !== n.direction && t(265),
        new _Fc(e, n, e.direction)
      );
    }
    function zc(t) {
      var _ref51;
      var e = t.initial,
        n = t.hasNext,
        o = t.step,
        r = t.map;
      var s = e;
      return (
        (_ref51 = {}),
        (_ref51[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
          function () {
            return this;
          }),
        (_ref51.next = function next() {
          if (!n(s)) return { done: !0, value: void 0 };
          var t = { done: !1, value: r(s) };
          return ((s = o(s)), t);
        }),
        _ref51
      );
    }
    function Bc(e, n) {
      var o = jc(e.origin, n.origin);
      switch (
        (null === o && t(275, e.origin.getKey(), n.origin.getKey()), o.type)
      ) {
        case "same": {
          var _t250 = "text" === e.type,
            _o87 = "text" === n.type;
          return _t250 && _o87
            ? (function (t, e) {
                return Math.sign(t - e);
              })(e.offset, n.offset)
            : e.type === n.type
              ? 0
              : _t250
                ? -1
                : _o87
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
          return Wc(o);
      }
    }
    function Wc(t) {
      var e = t.a,
        n = t.b,
        o = e.__key,
        r = n.__key;
      var s = e,
        i = n;
      for (; s && i; s = s.getNextSibling(), i = i.getNextSibling()) {
        if (s.__key === r) return -1;
        if (i.__key === o) return 1;
      }
      return null === s ? 1 : -1;
    }
    function Uc(t, e) {
      return e.is(t);
    }
    function Hc(t) {
      return cs(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function jc(e, n) {
      if (e.is(n)) return { commonAncestor: e, type: "same" };
      var o = new Map();
      for (
        var _Hc = Hc(e), _t251 = _Hc[0], _n109 = _Hc[1];
        _t251;
        _n109 = _t251, _t251 = _t251.getParent()
      )
        o.set(_t251, _n109);
      for (
        var _Hc2 = Hc(n), _r61 = _Hc2[0], _s40 = _Hc2[1];
        _r61;
        _s40 = _r61, _r61 = _r61.getParent()
      ) {
        var _i30 = o.get(_r61);
        if (void 0 !== _i30)
          return null === _i30
            ? (Uc(e, _r61) || t(276),
              { commonAncestor: _r61, type: "ancestor" })
            : null === _s40
              ? (Uc(n, _r61) || t(277),
                { commonAncestor: _r61, type: "descendant" })
              : (((cs(_i30) || Uc(e, _i30)) &&
                  (cs(_s40) || Uc(n, _s40)) &&
                  _r61.is(_i30.getParent()) &&
                  _r61.is(_s40.getParent())) ||
                  t(278),
                { a: _i30, b: _s40, commonAncestor: _r61, type: "branch" });
      }
      return null;
    }
    function Yc(e, n) {
      var o = e.type,
        r = e.key,
        s = e.offset,
        i = qi(e.key);
      return "text" === o
        ? (Ko(i) || t(266, i.getType(), r), Mc(i, n, s))
        : (cs(i) || t(267, i.getType(), r), sa(i, e.offset, n));
    }
    function Jc(e, n) {
      var o = n.origin,
        r = n.direction,
        s = "next" === r;
      Nc(n)
        ? e.set(o.getKey(), n.offset, "text")
        : Tc(n)
          ? Ko(o)
            ? e.set(o.getKey(), Ac(o, r), "text")
            : e.set(
                o.getParentOrThrow().getKey(),
                o.getIndexWithinParent() + (s ? 1 : 0),
                "element",
              )
          : ((vc(n) && cs(o)) || t(268),
            e.set(o.getKey(), s ? 0 : o.getChildrenSize(), "element"));
    }
    function Gc(t) {
      var e = _r(),
        n = Vo(e) ? e : dr();
      return (Vc(n, t), _i(n), n);
    }
    function Vc(t, e) {
      (Jc(t.anchor, e.anchor), Jc(t.focus, e.focus));
    }
    function qc(t) {
      var e = t.anchor,
        n = t.focus,
        o = Yc(e, "next"),
        r = Yc(n, "next"),
        s = Bc(o, r) <= 0 ? "next" : "previous";
      return Kc(oa(o, s), oa(r, s));
    }
    function Xc(t) {
      var e = t.direction,
        n = t.origin,
        o = bc(n, mc(e)).getNodeAtCaret();
      return o ? bc(o, e) : Dc(n.getParentOrThrow(), e);
    }
    function Qc(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _o88 = vc(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _o88;
        _o88 = _o88.getParentCaret(e)
      )
        n.push(Xc(_o88));
      return n;
    }
    function Zc(t) {
      return !!t && t.origin.isAttached();
    }
    function ta(e, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (e.isCollapsed()) return e;
      var o = "root",
        r = "next";
      var s = n;
      var i = ra(e, r),
        l = Qc(i.anchor, o),
        c = Qc(i.focus.getFlipped(), o),
        a = new Set(),
        u = [];
      for (var _t252 of i.iterNodeCarets(o))
        if (vc(_t252)) a.add(_t252.origin.getKey());
        else if (Tc(_t252)) {
          var _e165 = _t252.origin;
          (cs(_e165) && !a.has(_e165.getKey())) || u.push(_e165);
        }
      for (var _t253 of u) _t253.remove();
      for (var _t254 of i.getTextSlices()) {
        if (!_t254) continue;
        var _e166 = _t254.caret.origin,
          _n110 = _e166.getTextContentSize(),
          _o89 = Xc(bc(_e166, r)),
          _i31 = _e166.getMode();
        if (
          (Math.abs(_t254.distance) === _n110 && "removeEmptySlices" === s) ||
          ("token" === _i31 && 0 !== _t254.distance)
        )
          _o89.remove();
        else if (0 !== _t254.distance) {
          s = "removeEmptySlices";
          var _e167 = _t254.removeTextSlice();
          var _n111 = _t254.caret.origin;
          if ("segmented" === _i31) {
            var _t255 = _e167.origin,
              _n112 = $o(_t255.getTextContent())
                .setStyle(_t255.getStyle())
                .setFormat(_t255.getFormat());
            (_o89.replaceOrInsert(_n112), (_e167 = Mc(_n112, r, _e167.offset)));
          }
          (_n111.is(l[0].origin) && (l[0] = _e167),
            _n111.is(c[0].origin) && (c[0] = _e167.getFlipped()));
        }
      }
      var f, d;
      for (var _t256 of l)
        if (Zc(_t256)) {
          f = ea(_t256);
          break;
        }
      for (var _t257 of c)
        if (Zc(_t257)) {
          d = ea(_t257);
          break;
        }
      var h = (function (t, e, n) {
        if (!t || !e) return null;
        var o = t.getParentAtCaret(),
          r = e.getParentAtCaret();
        if (!o || !r) return null;
        var s = o.getParents().reverse();
        s.push(o);
        var i = r.getParents().reverse();
        i.push(r);
        var l = Math.min(s.length, i.length);
        var c;
        for (c = 0; c < l && s[c] === i[c]; c++);
        var a = function a(t, e) {
            var n;
            for (var _o90 = c; _o90 < t.length; _o90++) {
              var _r62 = t[_o90];
              if (Yi(_r62)) return;
              !n && e(_r62) && (n = _r62);
            }
            return n;
          },
          u = a(s, Sl),
          f =
            u &&
            a(i, function (t) {
              return n.has(t.getKey()) && Sl(t);
            });
        if (f && Zl(f).length > 0) return null;
        return u && f ? [u, f] : null;
      })(f, d, a);
      if (h) {
        var _t258 = h[0],
          _e168 = h[1];
        Dc(_t258, "previous").splice(0, _e168.getChildren());
        var _n113 = _e168.getParent();
        for (_e168.remove(!0); _n113 && _n113.isEmpty(); ) {
          var _t259 = _n113;
          ((_n113 = _n113.getParent()), _t259.remove(!0));
        }
      }
      var g = [f, d].concat(l, c).find(Zc);
      if (g) {
        return $c(oa(ea(g), e.direction));
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
    function ea(t) {
      var e = (function (t) {
          var e = t;
          for (; vc(e); ) {
            var _t260 = Pc(e);
            if (!vc(_t260)) break;
            e = _t260;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (Ko(e.origin)) return Nc(e) ? e : Mc(e.origin, n, n);
      var o = e.getAdjacentCaret();
      return Tc(o) && Ko(o.origin) ? Mc(o.origin, n, mc(n)) : e;
    }
    function na(t) {
      return Nc(t) && t.offset !== Ac(t.origin, t.direction);
    }
    function oa(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function ra(t, e) {
      return t.direction === e ? t : Kc(oa(t.focus, e), oa(t.anchor, e));
    }
    function sa(t, e, n) {
      var o = Dc(t, "next");
      for (var _t261 = 0; _t261 < e; _t261++) {
        var _t262 = o.getAdjacentCaret();
        if (null === _t262) break;
        o = _t262;
      }
      return oa(o, n);
    }
    function ia(e) {
      var n = e.origin,
        o = e.offset,
        r = e.direction;
      if (o === Ac(n, r)) return e.getSiblingCaret();
      if (o === Ac(n, mc(r))) return Xc(e.getSiblingCaret());
      var _n$splitText2 = n.splitText(o),
        s = _n$splitText2[0];
      return (Ko(s) || t(281), oa(bc(s, "next"), r));
    }
    function la(t, e) {
      return !0;
    }
    function ca(t, _temp) {
      var _ref52 = _temp === void 0 ? {} : _temp,
        _ref52$$copyElementNo = _ref52.$copyElementNode,
        e = _ref52$$copyElementNo === void 0 ? Ji : _ref52$$copyElementNo,
        _ref52$$splitTextPoin = _ref52.$splitTextPointCaretNext,
        n = _ref52$$splitTextPoin === void 0 ? ia : _ref52$$splitTextPoin,
        _ref52$rootMode = _ref52.rootMode,
        o = _ref52$rootMode === void 0 ? "shadowRoot" : _ref52$rootMode,
        _ref52$$shouldSplit = _ref52.$shouldSplit,
        r = _ref52$$shouldSplit === void 0 ? la : _ref52$$shouldSplit,
        _ref52$removeEmptyDes = _ref52.removeEmptyDestination,
        s = _ref52$removeEmptyDes === void 0 ? !1 : _ref52$removeEmptyDes;
      if (Nc(t)) return n(t);
      var i = t.getParentCaret(o);
      if (i) {
        var _n114 = i.origin;
        if (vc(t)) {
          var _t263 = Xc(i);
          if (s && _n114.isEmpty()) return (_n114.remove(), _t263);
          if (!_n114.canBeEmpty() || !r(_n114, "first")) return _t263;
        }
        var _o91 = (function (t) {
          var e = [];
          for (
            var _n115 = t.getAdjacentCaret();
            _n115;
            _n115 = _n115.getAdjacentCaret()
          )
            e.push(_n115.origin);
          return e;
        })(t);
        (_o91.length > 0 || (!s && _n114.canBeEmpty() && r(_n114, "last"))) &&
          i.insert(e(_n114).splice(0, 0, _o91));
      }
      return i;
    }
    function aa(e, n, o) {
      var r = oa(n, "next");
      (Nc(r) &&
        (0 === r.offset
          ? (r = bc(r.origin, "previous").getFlipped())
          : r.offset === r.origin.getTextContentSize() &&
            (r = bc(r.origin, "next"))),
        r.origin.is(e) &&
          (Tc(r) || t(342, e.getKey(), e.getType()), (r = Xc(r))),
        (e.is(r.getNodeAtCaret()) || e.is(r.getFlipped().getNodeAtCaret())) &&
          e.remove(!0));
      for (var _t264 = r; _t264; _t264 = ca(_t264, o)) r = _t264;
      return (
        Nc(r) && t(283),
        r.insert(e.isInline() ? bs().append(e) : e),
        oa(bc(e.getLatest(), "next"), n.direction)
      );
    }
    function ua() {
      var e = [];
      for (
        var _len13 = arguments.length, t = new Array(_len13), _key13 = 0;
        _key13 < _len13;
        _key13++
      ) {
        t[_key13] = arguments[_key13];
      }
      for (var _n116 of t)
        if (_n116 && "string" == typeof _n116)
          for (var _ref54 of _n116.matchAll(/\S+/g)) {
            var _t265 = _ref54[0];
            e.push(_t265);
          }
      return e;
    }
    function fa() {
      for (
        var _len14 = arguments.length, t = new Array(_len14), _key14 = 0;
        _key14 < _len14;
        _key14++
      ) {
        t[_key14] = arguments[_key14];
      }
      return function () {
        for (var _e169 = t.length - 1; _e169 >= 0; _e169--) t[_e169]();
        t.length = 0;
      };
    }
    ((exports.$addUpdateTag = Ki),
      (exports.$applyNodeReplacement = Gi),
      (exports.$assumeActiveEditor = function (t) {
        var e;
        (null !== Ur() && null === Ir && (Ir = t),
          Ir !== t &&
            ((e =
              "The given editor argument does not match $getEditor() in this context. Use editor.getEditorState().read(..., {editor}) if this cross-editor call is intentional."),
            console.warn(e)));
      }),
      (exports.$caretFromPoint = Yc),
      (exports.$caretRangeFromSelection = qc),
      (exports.$cloneWithProperties = Al),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = Al(t))[io] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = Bc),
      (exports.$copyNode = Ji),
      (exports.$create = function (t) {
        var e = Nl();
        return (
          Br(),
          new (e.resolveRegisteredNodeAfterReplacements(
            e.getRegisteredNode(t),
          ).klass)()
        );
      }),
      (exports.$createChildrenArray = Ul),
      (exports.$createLineBreakNode = Ss),
      (exports.$createNodeSelection = hr),
      (exports.$createParagraphNode = bs),
      (exports.$createPoint = jo),
      (exports.$createRangeSelection = dr),
      (exports.$createRangeSelectionFromDom = function (t, e) {
        return gr(null, t, e, null);
      }),
      (exports.$createTabNode = Wo),
      (exports.$createTextNode = $o),
      (exports.$extendCaretToRange = Lc),
      (exports.$findMatchingParent = Wl),
      (exports.$fullReconcile = jr),
      (exports.$generateNodesFromRawText = kr),
      (exports.$getAdjacentChildCaret = Pc),
      (exports.$getAdjacentNode = Ii),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          o = t,
          r = Pc(o);
        for (; null === r; ) {
          if ((n--, (r = o.getParentCaret(e)), !r)) return null;
          ((o = r), (r = Pc(o)));
        }
        return r && [r, n];
      }),
      (exports.$getCaretInDirection = oa),
      (exports.$getCaretRange = Kc),
      (exports.$getCaretRangeInDirection = ra),
      (exports.$getCharacterOffsets = Zo),
      (exports.$getChildCaret = Dc),
      (exports.$getChildCaretAtIndex = sa),
      (exports.$getChildCaretOrSelf = Ic),
      (exports.$getCollapsedCaretRange = $c),
      (exports.$getCommonAncestor = jc),
      (exports.$getCommonAncestorResultBranchOrder = Wc),
      (exports.$getDOMSlot = vl),
      (exports.$getDOMTextNode = El),
      (exports.$getEditor = Nl),
      (exports.$getEditorDOMRenderConfig = Tl),
      (exports.$getNearestNodeFromDOMNode = fi),
      (exports.$getNearestRootOrShadowRoot = ji),
      (exports.$getNodeByKey = li),
      (exports.$getNodeByKeyOrThrow = qi),
      (exports.$getNodeFromDOMNode = ci),
      (exports.$getPreviousSelection = pr),
      (exports.$getRoot = gi),
      (exports.$getSelection = _r),
      (exports.$getSiblingCaret = bc),
      (exports.$getSlot = tc),
      (exports.$getSlotFrame = Xl),
      (exports.$getSlotHost = Vl),
      (exports.$getSlotNameWithinHost = ql),
      (exports.$getSlotNames = Zl),
      (exports.$getState = at),
      (exports.$getStateChange = function (t, e, n) {
        var o = at(t, n, it),
          r = at(e, n, it);
        return n.isEqual(o, r) ? null : [o, r];
      }),
      (exports.$getTextContent = function () {
        var t = _r();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = Ac),
      (exports.$getTextPointCaret = Mc),
      (exports.$getTextPointCaretSlice = wc),
      (exports.$getWritableNodeState = ht),
      (exports.$hasAncestor = Bi),
      (exports.$hasUpdateTag = function (t) {
        return Hr()._updateTags.has(t);
      }),
      (exports.$insertNodeToNearestRootAtCaret = aa),
      (exports.$insertNodes = function (t) {
        var e = _r() || pr();
        (null === e && (e = gi().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = ur),
      (exports.$isChildCaret = vc),
      (exports.$isDecoratorNode = fs),
      (exports.$isEditorState = function (t) {
        return t instanceof _ys;
      }),
      (exports.$isElementDOMSlot = kl),
      (exports.$isElementNode = cs),
      (exports.$isExtendableTextPointCaret = na),
      (exports.$isInlineElementOrDecoratorNode = Hi),
      (exports.$isLeafNode = function (t) {
        return Ko(t) || Ns(t) || fs(t);
      }),
      (exports.$isLexicalNode = uo),
      (exports.$isLineBreakNode = Ns),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _c15;
      }),
      (exports.$isNodeSelection = Xo),
      (exports.$isParagraphNode = Ms),
      (exports.$isRangeSelection = Vo),
      (exports.$isRootNode = hs),
      (exports.$isRootOrShadowRoot = Yi),
      (exports.$isSiblingCaret = Tc),
      (exports.$isSlotChild = Jl),
      (exports.$isSlotHost = Yl),
      (exports.$isTabNode = Uo),
      (exports.$isTextNode = Ko),
      (exports.$isTextPointCaret = Nc),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _Rc;
      }),
      (exports.$isTokenOrSegmented = qs),
      (exports.$isTokenOrTab = Vs),
      (exports.$markSlotEditable = Rl),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = Ur();
        if (n._readOnly) {
          var _t266 = Ml(n).get(e);
          return _t266 ? Array.from(_t266.values()) : [];
        }
        var o = n._nodeMap,
          r = [];
        for (var _ref56 of o) {
          var _n117 = _ref56[1];
          _n117 instanceof t &&
            _n117.__type === e &&
            _n117.isAttached() &&
            r.push(_n117);
        }
        return r;
      }),
      (exports.$normalizeCaret = ea),
      (exports.$normalizeSelection__EXPERIMENTAL = Tt),
      (exports.$onUpdate = zi),
      (exports.$parseSerializedNode = function (t) {
        return Xr(t, Hr()._nodes);
      }),
      (exports.$removeFromParent = ni),
      (exports.$removeSlot = fc),
      (exports.$removeTextFromCaretRange = ta),
      (exports.$rewindSiblingCaret = Xc),
      (exports.$selectAll = function (t) {
        var e = gi();
        if (Vo(t)) {
          var _e170 = t.anchor,
            _n118 = t.focus,
            _o92 = _e170.getNode();
          if (hs(_o92))
            return (
              _e170.set(_o92.getKey(), 0, "element"),
              _n118.set(_o92.getKey(), _o92.getChildrenSize(), "element"),
              Tt(t),
              t
            );
          var _r63 = _o92.getTopLevelElementOrThrow(),
            _s41 = _r63.getParent();
          if (null === _s41)
            return (
              cs(_r63) &&
                (_e170.set(_r63.getKey(), 0, "element"),
                _n118.set(_r63.getKey(), _r63.getChildrenSize(), "element"),
                Tt(t)),
              t
            );
          var _i32 = _s41;
          return (
            _e170.set(_i32.getKey(), 0, "element"),
            _n118.set(_i32.getKey(), _i32.getChildrenSize(), "element"),
            Tt(t),
            t
          );
        }
        {
          var _t267 = e.select(0, e.getChildrenSize());
          return (_i(Tt(_t267)), _t267);
        }
      }),
      (exports.$setCompositionKey = si),
      (exports.$setDirectionFromDOM = Dl),
      (exports.$setFormatFromDOM = Il),
      (exports.$setPointFromCaret = Jc),
      (exports.$setSelection = _i),
      (exports.$setSelectionFromCaretRange = Gc),
      (exports.$setSlot = uc),
      (exports.$setState = function (t, e, n) {
        var o;
        if ((Br(), "function" == typeof n)) {
          var _r64 = t.getLatest(),
            _s42 = at(_r64, e);
          if (((o = n(_s42)), e.isEqual(_s42, o))) return _r64;
        } else o = n;
        var r = t.getWritable();
        return (ht(r).updateFromKnown(e, o), r);
      }),
      (exports.$splitAtPointCaretNext = ca),
      (exports.$splitNode = function (e, n) {
        var o = e.getChildAtIndex(n);
        (null == o && (o = e), Yi(e) && t(102));
        var _r67 = function r(e) {
            var n = e.getParentOrThrow(),
              s = Yi(n),
              i = e !== o || s ? Ji(e) : e;
            if (s)
              return ((cs(e) && cs(i)) || t(133), e.insertAfter(i), [e, i, i]);
            {
              var _r66 = _r67(n),
                _t268 = _r66[0],
                _o93 = _r66[1],
                _s43 = _r66[2],
                _l17 = e.getNextSiblings();
              return (
                _s43.append.apply(_s43, [i].concat(_l17)),
                [_t268, _o93, i]
              );
            }
          },
          _r65 = _r67(o),
          s = _r65[0],
          i = _r65[1];
        return [s, i];
      }),
      (exports.$updateDOMSelection = Tr),
      (exports.$updateRangeSelectionFromCaretRange = Vc),
      (exports.ArtificialNode__DO_NOT_USE = _ms),
      (exports.BEFORE_INPUT_COMMAND = Ee),
      (exports.BLUR_COMMAND = yn),
      (exports.CAN_REDO_COMMAND = gn),
      (exports.CAN_UNDO_COMMAND = _n),
      (exports.CAN_USE_BEFORE_INPUT = i),
      (exports.CAN_USE_DOM = n),
      (exports.CLEAR_EDITOR_COMMAND = dn),
      (exports.CLEAR_HISTORY_COMMAND = hn),
      (exports.CLICK_COMMAND = ke),
      (exports.COLLABORATION_TAG = ho),
      (exports.COMMAND_PRIORITY_BEFORE_CRITICAL = -4),
      (exports.COMMAND_PRIORITY_BEFORE_EDITOR = -8),
      (exports.COMMAND_PRIORITY_BEFORE_HIGH = -5),
      (exports.COMMAND_PRIORITY_BEFORE_LOW = -7),
      (exports.COMMAND_PRIORITY_BEFORE_NORMAL = -6),
      (exports.COMMAND_PRIORITY_CRITICAL = 4),
      (exports.COMMAND_PRIORITY_EDITOR = ws),
      (exports.COMMAND_PRIORITY_HIGH = 3),
      (exports.COMMAND_PRIORITY_LOW = 1),
      (exports.COMMAND_PRIORITY_NORMAL = 2),
      (exports.COMPOSITION_END_COMMAND = Me),
      (exports.COMPOSITION_END_TAG = mo),
      (exports.COMPOSITION_START_COMMAND = be),
      (exports.COMPOSITION_START_TAG = yo),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = Ie),
      (exports.COPY_COMMAND = an),
      (exports.CUT_COMMAND = un),
      (exports.CUT_TAG = "cut"),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = Ps),
      (exports.DELETE_CHARACTER_COMMAND = Ae),
      (exports.DELETE_LINE_COMMAND = Le),
      (exports.DELETE_WORD_COMMAND = Re),
      (exports.DRAGEND_COMMAND = cn),
      (exports.DRAGOVER_COMMAND = ln),
      (exports.DRAGSTART_COMMAND = sn),
      (exports.DROP_COMMAND = on),
      (exports.DecoratorNode = _us),
      (exports.ElementNode = _ls4),
      (exports.FOCUS_COMMAND = pn),
      (exports.FORMAT_ELEMENT_COMMAND = rn),
      (exports.FORMAT_TEXT_COMMAND = $e),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = fo),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = en),
      (exports.INPUT_COMMAND = Oe),
      (exports.INSERT_LINE_BREAK_COMMAND = we),
      (exports.INSERT_PARAGRAPH_COMMAND = De),
      (exports.INSERT_TAB_COMMAND = tn),
      (exports.INTERNAL_$isBlock = Sl),
      (exports.IS_ALL_FORMATTING = 2047),
      (exports.IS_ANDROID = c),
      (exports.IS_ANDROID_CHROME = f),
      (exports.IS_APPLE = r),
      (exports.IS_APPLE_WEBKIT = d),
      (exports.IS_BOLD = 1),
      (exports.IS_CHROME = u),
      (exports.IS_CODE = 16),
      (exports.IS_FIREFOX = s),
      (exports.IS_HIGHLIGHT = p),
      (exports.IS_IOS = l),
      (exports.IS_ITALIC = 2),
      (exports.IS_SAFARI = a),
      (exports.IS_STRIKETHROUGH = 4),
      (exports.IS_SUBSCRIPT = 32),
      (exports.IS_SUPERSCRIPT = 64),
      (exports.IS_UNDERLINE = 8),
      (exports.KEY_ARROW_DOWN_COMMAND = Je),
      (exports.KEY_ARROW_LEFT_COMMAND = He),
      (exports.KEY_ARROW_RIGHT_COMMAND = We),
      (exports.KEY_ARROW_UP_COMMAND = Ye),
      (exports.KEY_BACKSPACE_COMMAND = qe),
      (exports.KEY_DELETE_COMMAND = Qe),
      (exports.KEY_DOWN_COMMAND = Be),
      (exports.KEY_ENTER_COMMAND = Ge),
      (exports.KEY_ESCAPE_COMMAND = Xe),
      (exports.KEY_MODIFIER_COMMAND = mn),
      (exports.KEY_SPACE_COMMAND = Ve),
      (exports.KEY_TAB_COMMAND = Ze),
      (exports.LineBreakNode = _xs),
      (exports.MOVE_TO_END = Ue),
      (exports.MOVE_TO_START = je),
      (exports.NODE_STATE_DIRECT = it),
      (exports.NODE_STATE_KEY = "$"),
      (exports.NODE_STATE_LATEST = lt),
      (exports.OUTDENT_CONTENT_COMMAND = nn),
      (exports.PASTE_COMMAND = Pe),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _Es),
      (exports.REDO_COMMAND = ze),
      (exports.REMOVE_TEXT_COMMAND = Fe),
      (exports.RootNode = _ds),
      (exports.SELECTION_CHANGE_COMMAND = Te),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = ve),
      (exports.SELECT_ALL_COMMAND = fn),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = _o),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = go),
      (exports.SKIP_SELECTION_FOCUS_TAG = po),
      (exports.TEXT_TYPE_TO_FORMAT = A),
      (exports.TabNode = _Bo),
      (exports.TextNode = _Mo2),
      (exports.UNDO_COMMAND = Ke),
      (exports.addClassNamesToElement = function (t) {
        var _t$classList2;
        for (
          var _len15 = arguments.length,
            e = new Array(_len15 > 1 ? _len15 - 1 : 0),
            _key15 = 1;
          _key15 < _len15;
          _key15++
        ) {
          e[_key15 - 1] = arguments[_key15];
        }
        var n = ua.apply(void 0, e);
        n.length > 0 &&
          (_t$classList2 = t.classList).add.apply(_t$classList2, n);
      }),
      (exports.buildImportMap = function (t) {
        return t;
      }),
      (exports.configExtension = function () {
        for (
          var _len16 = arguments.length, t = new Array(_len16), _key16 = 0;
          _key16 < _len16;
          _key16++
        ) {
          t[_key16] = arguments[_key16];
        }
        return t;
      }),
      (exports.createCommand = Ne),
      (exports.createEditor = function (t) {
        var n = t || {},
          o = Jr(),
          r = n.theme || {},
          s = void 0 === t ? o : n.parentEditor || null,
          i = n.disableEvents || !1,
          l = _s(),
          c = n.namespace || (null !== s ? s._config.namespace : xi()),
          a = n.editorState,
          u = [_ds, _Mo2, _xs, _Bo, _Es, _ms].concat(n.nodes || []),
          f = n.onError,
          d = n.onWarn,
          h = n.html,
          g = void 0 === n.editable || n.editable;
        var _;
        if (void 0 === t && null !== o) _ = o._nodes;
        else {
          _ = new Map();
          for (var _t269 = 0; _t269 < u.length; _t269++) {
            var _o94 = u[_t269],
              _r68 = null,
              _s44 = null;
            if (_o94 && "object" == typeof _o94) {
              var _t270 = _o94;
              ((_o94 = _t270.replace),
                (_r68 = _t270["with"]),
                (_s44 = _t270.withKlass || null));
            }
            if (
              "function" != typeof _o94 ||
              !_o94.prototype ||
              !(_o94 === _ao5 || _o94.prototype instanceof _ao5)
            ) {
              var _r69 = "<unknown>";
              try {
                _r69 = JSON.parse(H);
              } catch (t) {}
              e(
                "createEditor: nodes[" +
                  String(_t269 - u.length + (n.nodes ? n.nodes.length : 0)) +
                  "] " +
                  ("function" == typeof _o94
                    ? "" +
                      _o94.name +
                      ("function" == typeof _o94.getType
                        ? " (type " + String(_o94.getType()) + ")"
                        : "")
                    : String(_o94)) +
                  " is not a constructor that subclasses LexicalNode from the lexical package used by this editor (" +
                  String(_r69) +
                  ")",
              );
            }
            zl(_o94);
            var _i33 = _o94.getType(),
              _l18 = Is(_o94);
            _.set(_i33, {
              exportDOM: h && h["export"] ? h["export"].get(_o94) : void 0,
              klass: _o94,
              replace: _r68,
              replaceWithKlass: _s44,
              sharedNodeState: ut(u[_t269]),
              transforms: _l18,
            });
          }
        }
        var p = new _Ls(
          l,
          s,
          _,
          {
            disableEvents: i,
            dom: babelHelpers["extends"]({}, Ps, t && t.dom),
            namespace: c,
            theme: r,
          },
          f || console.error,
          d || As,
          (function (t, e) {
            var n = new Map(),
              o = new Set(),
              r = function r(t) {
                Object.keys(t).forEach(function (e) {
                  var o = n.get(e);
                  (void 0 === o && ((o = []), n.set(e, o)), o.push(t[e]));
                });
              };
            return (
              t.forEach(function (t) {
                var e = t.klass.importDOM;
                if (null == e || o.has(e)) return;
                o.add(e);
                var n = e.call(t.klass);
                null !== n && r(n);
              }),
              e && r(e),
              n
            );
          })(_, h ? h["import"] : void 0),
          g,
          t,
        );
        return (
          void 0 !== a && ((p._pendingEditorState = a), (p._dirtyType = 2)),
          (function (t) {
            (t.registerCommand(Ee, Yn, ws),
              t.registerCommand(Oe, Jn, ws),
              t.registerCommand(be, Gn, ws),
              t.registerCommand(Me, Vn, ws),
              t.registerCommand(Be, Xn, ws));
          })(p),
          p
        );
      }),
      (exports.createSharedNodeState = ut),
      (exports.createState = function (t, e) {
        return new ct(t, e);
      }),
      (exports.declarePeerDependency = function (t, e) {
        return [t, e];
      }),
      (exports.defineExtension = function (t) {
        return t;
      }),
      (exports.findAllLexicalElementsDeep = rl),
      (exports.flipDirection = mc),
      (exports.getActiveElement = fl),
      (exports.getActiveElementDeep = dl),
      (exports.getComposedEventTarget = hl),
      (exports.getComposedStaticRange = sl),
      (exports.getDOMOwnerDocument = $i),
      (exports.getDOMSelection = Zi),
      (exports.getDOMSelectionFromTarget = tl),
      (exports.getDOMSelectionPoints = ll),
      (exports.getDOMSelectionRange = il),
      (exports.getDOMSelectionRangeAndPoints = function (t, e) {
        var _cl;
        var n = sl(t, e);
        if (null === n)
          return {
            points: t,
            range: t.rangeCount > 0 ? t.getRangeAt(0) : null,
          };
        var o =
          (_cl = cl(n)) != null
            ? _cl
            : t.rangeCount > 0
              ? t.getRangeAt(0)
              : null;
        return { points: al(n, ul(t)), range: o };
      }),
      (exports.getDOMShadowRoots = ol),
      (exports.getDOMTextNode = Zs),
      (exports.getDeclaredSlots = ic),
      (exports.getEditorPropertyFromDOMNode = Gs),
      (exports.getNearestEditorFromDOMNode = Js),
      (exports.getParentElement = Li),
      (exports.getRegisteredNode = Ws),
      (exports.getRegisteredNodeOrThrow = Bs),
      (exports.getRegisteredSubtypeMap = function (t) {
        var e = new Map(),
          n = new Map();
        for (var _o95 of t) {
          var _zl2 = zl(_o95),
            _t271 = _zl2.ownNodeType;
          _t271 && (n.set(_t271, _o95), e.set(_t271, new Set()));
        }
        for (var _ref58 of n) {
          var _t272 = _ref58[0];
          var _o96 = _ref58[1];
          for (var _ref60 of Bl(_o96)) {
            var _n119 = _ref60.ownNodeType;
            {
              var _o97 = _n119 && e.get(_n119);
              _o97 && _o97.add(_t272);
            }
          }
        }
        return e;
      }),
      (exports.getRootOwnerDocument = function (t) {
        return null !== t ? t.ownerDocument : document;
      }),
      (exports.getStaticNodeConfig = zl),
      (exports.getStyleObjectFromCSS = Co),
      (exports.getTextDirection = function (t) {
        return b.test(t) ? "rtl" : M.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = Is),
      (exports.isBlockDomNode = Cl),
      (exports.isCurrentlyReadOnlyMode = zr),
      (exports.isDOMCapturingSelection = Ll),
      (exports.isDOMDocumentNode = Qs),
      (exports.isDOMNode = _l),
      (exports.isDOMShadowRoot = el),
      (exports.isDOMTextNode = Xs),
      (exports.isDOMUnmanaged = Fl),
      (exports.isDocumentFragment = pl),
      (exports.isExactShortcutMatch = Ei),
      (exports.isHTMLAnchorElement = function (t) {
        return gl(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = gl),
      (exports.isHTMLTableCellElement = function (t) {
        return gl(t) && ("TD" === t.tagName || "TH" === t.tagName);
      }),
      (exports.isHTMLTableRowElement = function (t) {
        return gl(t) && "TR" === t.tagName;
      }),
      (exports.isInlineDomNode = ml),
      (exports.isLastChildInBlockNode = vs),
      (exports.isLexicalEditor = Ys),
      (exports.isModifierMatch = ki),
      (exports.isOnlyChildInBlockNode = Ts),
      (exports.isSelectionCapturedInDecoratorInput = Hs),
      (exports.isSelectionWithinEditor = js),
      (exports.iterStaticNodeConfigChain = Bl),
      (exports.makeStepwiseIterator = zc),
      (exports.mergeRegister = fa),
      (exports.mountSlotContainer = function (t, e, n, o) {
        var r = t.read("latest", function () {
          var o = li(e);
          return null !== o
            ? (function (t, e, n) {
                if (n === void 0) {
                  n = Nl();
                }
                var o = tc(t, e);
                if (null === o) return null;
                var r = n.getElementByKey(o.getKey());
                return null !== r ? r.parentElement : null;
              })(o, n, t)
            : null;
        });
        return (
          null !== r &&
            (r.parentElement !== o && o.appendChild(r), (r.style.display = "")),
          r
        );
      }),
      (exports.normalizeClassNames = ua),
      (exports.removeClassNamesFromElement = function (t) {
        var _t$classList3;
        for (
          var _len17 = arguments.length,
            e = new Array(_len17 > 1 ? _len17 - 1 : 0),
            _key17 = 1;
          _key17 < _len17;
          _key17++
        ) {
          e[_key17 - 1] = arguments[_key17];
        }
        var n = ua.apply(void 0, e);
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(_t$classList3, n);
      }),
      (exports.removeFromParent = oi),
      (exports.resetRandomKey = function () {
        zs = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = No),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n120 in e) {
          var _o98 = e[_n120];
          null == _o98 ? t.removeProperty(_n120) : So(t, _n120, _o98);
        }
      }),
      (exports.setDOMUnmanaged = Pl),
      (exports.setNodeIndentFromDOM = wl),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n121 in e)
          if (t[_n121] !== e[_n121]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.stopLexicalPropagation = eo),
      (exports.toggleTextFormatType = ti),
      (exports.tokenizeRawText = vr),
      (exports.unmountSlotContainer = function (t, e, n) {
        n.style.display = "none";
        var o = t.getElementByKey(e);
        null !== o && n.parentElement !== o && o.insertBefore(n, o.firstChild);
      }));
  },
  null,
);
