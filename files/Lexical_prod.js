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
      throw new Error(t);
    }
    var n =
        "undefined" != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement,
      r = n && "documentMode" in document ? document.documentMode : null,
      o = n && /Mac|iPod|iPhone|iPad/.test(navigator.platform),
      s = n && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
      i =
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
      T = 6,
      N = a || l || d ? "\xa0" : "\u200b",
      v = "\n\n",
      k = s ? "\xa0" : N,
      b = "\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc",
      O =
        "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff",
      E = new RegExp("^[^" + O + "]*[" + b + "]"),
      M = new RegExp("^[^" + b + "]*[" + O + "]"),
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
      L = "$config";
    function R() {
      return cl()._blockCursorElement;
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
        var r = z(t, this.element);
        if (null === r) return "after";
        var o = Array.prototype.indexOf.call(t.childNodes, r);
        if (o < 0) return "after";
        if (e === t) return n <= o ? "before" : "after";
        var s = z(t, e);
        if (null === s) return "after";
        var i = Array.prototype.indexOf.call(t.childNodes, s);
        return i >= 0 && i <= o ? "before" : "after";
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
        return null !== n && n === R() ? n : t;
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
          r = this.before,
          o = document.createElement("br");
        if (
          (o.setAttribute("data-lexical-managed-linebreak", "true"),
          n.insertBefore(o, r),
          t)
        ) {
          var _t3 = document.createElement("img");
          (_t3.setAttribute("data-lexical-managed-linebreak", "true"),
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
            _s2 = Math.min(r, _o2.length);
          var _i2 = 0;
          for (var _t4 = _e4; _t4 < _s2; _t4++) _o2[_t4] !== _n3 && _i2++;
          return [t, Math.min(_i2, t.getChildrenSize())];
        }
        var o = W(e, n);
        o.push(r);
        var s = W(e, this.element);
        var i = t.getIndexWithinParent();
        for (var _t5 = 0; _t5 < s.length; _t5++) {
          var _e5 = o[_t5],
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
    var U;
    try {
      U = "0.45.0+prod.cjs";
    } catch (t) {}
    var H = U != null ? U : "0.45.0+source";
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
    function V(t, e, n, r, o, s) {
      if (ls(t)) {
        var _i3 = t.getFirstChild();
        for (; null !== _i3; ) {
          var _t0 = _i3.__key;
          (_i3.__parent === e &&
            ((ls(_i3) || (Ml(_i3) && null !== _i3.__slots)) &&
              V(_i3, _t0, n, r, o, s),
            n.has(_t0) || s["delete"](_t0),
            o.push(_t0)),
            (_i3 = _i3.getNextSibling()));
        }
      }
      for (var _i4 of Ml(t) && null !== t.__slots ? t.__slots.values() : []) {
        var _t1 = r.get(_i4);
        void 0 !== _t1 &&
          Al(_t1) &&
          _t1.__slotHost === e &&
          ((ls(_t1) || (Ml(_t1) && null !== _t1.__slots)) &&
            V(_t1, _i4, n, r, o, s),
          n.has(_i4) || s["delete"](_i4),
          o.push(_i4));
      }
    }
    var q = !1,
      X = 0;
    function Q(t) {
      X = t.timeStamp;
    }
    function Z(t, e, n) {
      var r = "BR" === t.nodeName,
        o = e.__lexicalLineBreak;
      return (
        (o && (t === o || (r && t.previousSibling === o))) ||
        (r && void 0 !== ai(t, n))
      );
    }
    function tt(t, e, n) {
      var r = Qi(Wi(n));
      var o = null,
        s = null;
      null !== r &&
        r.anchorNode === t &&
        ((o = r.anchorOffset), (s = r.focusOffset));
      var i = t.nodeValue;
      null !== i && Si(e, i, o, s, !1);
    }
    function et(t, e, n) {
      if (Gr(t)) {
        var _e1 = t.anchor.getNode();
        if (_e1.is(n) && t.format !== _e1.getFormat()) return !1;
      }
      return qs(e) && n.isAttached();
    }
    function nt(t, e, n) {
      for (var _r4 = t; _r4 && !Sl(_r4); _r4 = Li(_r4)) {
        var _t10 = ai(_r4, e);
        if (void 0 !== _t10) {
          var _e10 = ii(_t10, n);
          if (_e10) return us(_e10) || !tl(_r4) ? void 0 : [_r4, _e10];
        }
      }
    }
    function rt(t, e, n) {
      q = !0;
      var r = performance.now() - X > 100;
      try {
        ss(t, function () {
          var o =
              _o() ||
              (function (t) {
                return t.getEditorState().read(function () {
                  var t = _o();
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
              r && $r(_p) && qs(_h) && et(o, _h, _p) && tt(_h, _p, t);
            else if ("childList" === _d) {
              a = !0;
              var _e11 = _f.addedNodes;
              for (var _n0 = 0; _n0 < _e11.length; _n0++) {
                var _r5 = _e11[_n0],
                  _o3 = li(_r5),
                  _i5 = _r5.parentNode;
                if (
                  !(
                    null == _i5 ||
                    _r5 === c ||
                    null !== _o3 ||
                    Z(_r5, _i5, t) ||
                    (t._slotsUsed &&
                      tl(_r5) &&
                      _r5.hasAttribute("data-lexical-slot")) ||
                    Sl(_r5)
                  )
                ) {
                  if (s) {
                    var _t11 =
                      (tl(_r5) ? _r5.innerText : null) || _r5.nodeValue;
                    _t11 && (u += _t11);
                  }
                  _i5.removeChild(_r5);
                }
              }
              var _n1 = _f.removedNodes,
                _r6 = _n1.length;
              if (_r6 > 0) {
                var _e12 = 0;
                for (var _o4 = 0; _o4 < _r6; _o4++) {
                  var _r7 = _n1[_o4];
                  (Z(_r7, _h, t) || c === _r7) && (_h.appendChild(_r7), _e12++);
                }
                _r6 !== _e12 && i.set(_2, _p);
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
                _r8 = _n11.addedNodes,
                _o5 = _n11.target;
              for (var _e15 = 0; _e15 < _r8.length; _e15++) {
                var _n12 = _r8[_e15],
                  _s3 = _n12.parentNode;
                null == _s3 ||
                  "BR" !== _n12.nodeName ||
                  Z(_n12, _o5, t) ||
                  _s3.removeChild(_n12);
              }
            }
            n.takeRecords();
          }
          null !== o && (a && gi(o), s && Ii(t) && o.insertRawText(u));
        });
      } finally {
        q = !1;
      }
    }
    function ot(t) {
      var e = t._observer;
      if (null !== e) {
        rt(t, e.takeRecords(), e);
      }
    }
    function st(t) {
      (!(function (t) {
        0 === X && Wi(t).addEventListener("textInput", Q, !0);
      })(t),
        (t._observer = new MutationObserver(function (e, n) {
          rt(t, e, n);
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
      var r = (n === lt ? t.getLatest() : t).__state;
      return r ? r.getValue(e) : e.defaultValue;
    }
    function ut(t) {
      var e = new Map(),
        n = new Set();
      for (
        var _r9 = "function" == typeof t ? t : t.replace;
        _r9.prototype && void 0 !== _r9.prototype.getType;
        _r9 = Object.getPrototypeOf(_r9)
      ) {
        var _kl = kl(_r9),
          _t12 = _kl.ownNodeConfig;
        if (_t12 && _t12.stateConfigs)
          for (var _r0 of _t12.stateConfigs) {
            var _t13 = void 0;
            ("stateConfig" in _r0
              ? ((_t13 = _r0.stateConfig), _r0.flat && n.add(_t13.key))
              : (_t13 = _r0),
              e.set(_t13.key, _t13));
          }
      }
      return { flatKeys: n, sharedConfigMap: e };
    }
    var ft = new Set(["__proto__", "constructor", "prototype"]);
    var _dt = (function () {
      function dt(t, e, n, r, o) {
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
        var s = this.sharedNodeState.sharedConfigMap,
          i =
            void 0 !== o
              ? o
              : (function (t, e, n) {
                  var r = n.size;
                  if (e)
                    for (var _o6 in e) {
                      var _e16 = t.get(_o6);
                      (_e16 && n.has(_e16)) || r++;
                    }
                  return r;
                })(s, n, r);
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
        for (var _ref8 of this.knownState) {
          var _e18 = _ref8[0];
          var _n13 = _ref8[1];
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
          r = new Map(this.knownState);
        return new dt(
          t,
          e,
          (function (t, e, n) {
            var r;
            if (n)
              for (var _ref0 of Object.entries(n)) {
                var _o7 = _ref0[0];
                var _s4 = _ref0[1];
                {
                  if (ft.has(_o7)) continue;
                  var _n15 = t.get(_o7);
                  _n15
                    ? e.has(_n15) || e.set(_n15, _n15.parse(_s4))
                    : ((r = r || {}), (r[_o7] = _s4));
                }
              }
            return r;
          })(e.sharedConfigMap, r, n),
          r,
          this.size,
        );
      };
      _proto5.resetOnCopyNode = function resetOnCopyNode() {
        for (var _t14 of this.knownState.keys())
          _t14.resetOnCopyNode && this.knownState.set(_t14, _t14.defaultValue);
        return this;
      };
      _proto5.updateFromKnown = function updateFromKnown(t, e) {
        var n = t.key;
        this.sharedNodeState.sharedConfigMap.set(n, t);
        var r = this.knownState,
          o = this.unknownState;
        (r.has(t) ||
          (o && n in o) ||
          (o && (delete o[n], (this.unknownState = _t(o))), this.size++),
          r.set(t, e));
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
        for (var _t15 of e.keys()) e.set(_t15, _t15.defaultValue);
        if (((this.size = e.size), (this.unknownState = void 0), t))
          for (var _ref10 of Object.entries(t)) {
            var _e19 = _ref10[0];
            var _n16 = _ref10[1];
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
        : zs(cl(), t.getType()).sharedNodeState;
    }
    function _t(t) {
      if (t) for (var _e20 in t) return t;
    }
    function pt(t) {
      return t;
    }
    function yt(t, e, n) {
      for (var _ref12 of e.knownState) {
        var _r1 = _ref12[0];
        var _o8 = _ref12[1];
        {
          if (t.has(_r1.key)) continue;
          t.add(_r1.key);
          var _e21 = n ? n.getValue(_r1) : _r1.defaultValue;
          if (_e21 !== _o8 && !_r1.isEqual(_e21, _o8)) return !0;
        }
      }
      return !1;
    }
    function mt(t, e, n) {
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
    function xt(t, e) {
      var n = t.__state;
      return n && n.node === t ? n.getWritable(e) : n;
    }
    function Ct(t, e) {
      var n = t.__mode,
        r = t.__format,
        o = t.__style,
        s = e.__mode,
        i = e.__format,
        l = e.__style,
        c = t.__state,
        a = e.__state;
      return (
        (null === n || n === s) &&
        (null === r || r === i) &&
        (null === o || o === l) &&
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
        r = Ho()._normalizedNodes;
      return (r.add(t.__key), r.add(e.__key), n);
    }
    function Tt(t) {
      var e,
        n,
        r = t;
      if ("" !== r.__text || !r.isSimpleText() || r.isUnmergeable()) {
        for (
          ;
          null !== (e = r.getPreviousSibling()) &&
          $r(e) &&
          e.isSimpleText() &&
          !e.isUnmergeable();
        ) {
          if ("" !== e.__text) {
            if (Ct(e, r)) {
              r = St(e, r);
              break;
            }
            break;
          }
          e.remove();
        }
        for (
          ;
          null !== (n = r.getNextSibling()) &&
          $r(n) &&
          n.isSimpleText() &&
          !n.isUnmergeable();
        ) {
          if ("" !== n.__text) {
            if (Ct(r, n)) {
              r = St(r, n);
              break;
            }
            break;
          }
          n.remove();
        }
      } else r.remove();
    }
    function Nt(t) {
      return (vt(t.anchor), vt(t.focus), t);
    }
    function vt(t) {
      for (; "element" === t.type; ) {
        var _e23 = t.getNode(),
          _n18 = t.offset;
        var _r10 = void 0,
          _o9 = void 0;
        if (
          (_n18 === _e23.getChildrenSize()
            ? ((_r10 = _e23.getChildAtIndex(_n18 - 1)), (_o9 = !0))
            : ((_r10 = _e23.getChildAtIndex(_n18)), (_o9 = !1)),
          $r(_r10))
        ) {
          t.set(_r10.__key, _o9 ? _r10.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!ls(_r10)) break;
        t.set(_r10.__key, _o9 ? _r10.getChildrenSize() : 0, "element", !0);
      }
    }
    var kt = Symbol["for"]("@lexical/CachedTextSize");
    function bt(e, n) {
      return Ut.read(
        function () {
          var r = 0,
            o = e;
          for (var _e24 = 0; _e24 < n && null !== o; _e24++) {
            var _s5 = Wt.get(o);
            if ((void 0 === _s5 && t(345, o), ls(_s5))) {
              var _i6 = Ht.get(o);
              if (void 0 !== _i6 && ls(_i6) && _i6.__parent !== _s5.__parent)
                r += _s5.getTextContentSize();
              else {
                var _e25 = jt.get(o),
                  _n19 = _e25 && _e25.__lexicalTextContent;
                ("string" != typeof _n19 && t(346, _s5.getType()),
                  (r += _n19.length));
              }
              _e24 < n - 1 && !_s5.isInline() && (r += 2);
            } else {
              var _e26 = _s5[kt];
              (void 0 === _e26 && t(347, _s5.getType(), o), (r += _e26));
            }
            o = _s5.__next;
          }
          return r;
        },
        { editor: At },
      );
    }
    function Ot(t) {
      ls(t) ||
        (void 0 === t[kt] &&
          (t[kt] = $r(t) ? t.__text.length : t.getTextContentSize()));
    }
    var Et = 4;
    var Mt,
      At,
      wt,
      Dt = "",
      It = null,
      Pt = null,
      Ft = null;
    function Lt() {
      return { firstTextKey: Ft, format: It, style: Pt };
    }
    function Rt(t) {
      null !== t.firstTextKey &&
        ((It = t.format), (Pt = t.style), (Ft = t.firstTextKey));
    }
    function $t(e) {
      if (null !== Ft) return;
      var n = e.__lexicalFirstTextKey;
      if ((void 0 === n && t(348), null === n)) return;
      var r = Ht.get(n);
      $r(r) && ((It = r.getFormat()), (Pt = r.getStyle()), (Ft = n));
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
        r = Ht.has(t);
      if (null !== e) {
        var _n20 = Se(t);
        _n20.parentNode === e && e.removeChild(_n20);
      }
      if (!r) {
        if ((At._keyToDOMMap["delete"](t), ls(n))) {
          var _t16 = Ol(n, Wt);
          Qt(_t16, 0, _t16.length - 1, null);
        }
        if (void 0 !== n) {
          for (var _t17 of le(n).values()) {
            var _e27 = ae(_t17);
            (Xt(_t17, null), null !== _e27 && _e27.remove());
          }
          Ai(Jt, wt, Kt, n, "destroyed");
        }
      }
    }
    function Qt(t, e, n, r) {
      for (var _o0 = e; _o0 <= n; ++_o0) {
        var _e28 = t[_o0];
        void 0 !== _e28 && Xt(_e28, r);
      }
    }
    function Zt(t, e) {
      t.setProperty("text-align", e);
    }
    var te = "40px";
    function ee(t, e) {
      var n = Mt.theme.indent;
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
    function re(t, e) {
      var n = (function (t) {
        var e = t.__dir;
        if (null !== e) return e;
        if (ds(t)) return null;
        var n = t.getParent();
        return null === n || (ji(n) && null === n.__dir) ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function oe(t) {
      var e = document.createElement("div");
      return (
        e.setAttribute("data-lexical-slot", t),
        (e.style.display = "none"),
        e
      );
    }
    function se(t, e, n) {
      e || "false" === t.contentEditable
        ? Tl(n, At)
        : n.removeAttribute("contenteditable");
    }
    function ie(t, e, n) {
      var r = Dt,
        o = Lt();
      Dt = "";
      var s = "";
      var i = us(t);
      for (var _ref16 of n) {
        var _r12 = _ref16[0];
        var _o1 = _ref16[1];
        {
          var _n21 = oe(_r12);
          (se(e, i, _n21), e.appendChild(_n21), (Dt = ""));
          var _l2 = Lt();
          (fe(_o1, ul(t, _n21, At)), Rt(_l2), ce(t, _r12, e, _n21), (s += Dt));
        }
      }
      return (Rt(o), (Dt = r), s);
    }
    function le(t) {
      return Ml(t) && null !== t.__slots ? t.__slots : El;
    }
    function ce(t, e, n, r) {
      var o = Gt.$getSlotTargetElement(t, e, n, At);
      null !== o &&
        (r.parentElement !== o && o.appendChild(r), (r.style.display = ""));
    }
    function ae(t) {
      var e = jt.get(t);
      return void 0 !== e ? e.parentElement : null;
    }
    function ue(t, e, n) {
      var r = le(t),
        o = le(e);
      for (var _ref18 of r) {
        var _t18 = _ref18[0];
        var _e29 = _ref18[1];
        if (!o.has(_t18)) {
          var _t19 = ae(_e29);
          (Xt(_e29, null), null !== _t19 && _t19.remove());
        }
      }
      var s = Dt,
        i = Lt();
      var l = "",
        c = null;
      var a = us(e);
      for (var _ref20 of o) {
        var _t20 = _ref20[0];
        var _s6 = _ref20[1];
        {
          var _o10 = r.get(_t20);
          var _i7 = void 0 !== _o10 ? ae(_o10) : null;
          Dt = "";
          var _u = Lt();
          if (null === _i7) {
            _i7 = oe(_t20);
            var _r13 = null;
            for (var _t21 of n.children)
              if (!_t21.hasAttribute("data-lexical-slot")) {
                _r13 = _t21;
                break;
              }
            (n.insertBefore(_i7, _r13), fe(_s6, ul(e, _i7, At)));
          } else
            _o10 === _s6
              ? pe(_s6, _i7)
              : (void 0 !== _o10 && Xt(_o10, _i7), fe(_s6, ul(e, _i7, At)));
          if (
            (Rt(_u),
            se(n, a, _i7),
            ce(e, _t20, n, _i7),
            (l += Dt),
            _i7.parentElement === n)
          ) {
            var _t22 = null === c ? n.firstChild : c.nextSibling;
            (_t22 !== _i7 && n.insertBefore(_i7, _t22), (c = _i7));
          }
        }
      }
      return (Rt(i), (Dt = s), l);
    }
    function fe(e, n) {
      var r = Ht.get(e);
      if ((void 0 === r && t(60), null !== n)) {
        var _t23 = Wt.get(e);
        if (void 0 !== _t23) {
          var _o11 = jt.get(e);
          if (void 0 !== _o11) {
            var _s7 = Al(_t23) ? _t23.__slotHost : null,
              _i8 = Al(r) ? r.__slotHost : null,
              _l3 = _t23.__parent !== r.__parent || _s7 !== _i8,
              _c2 = null !== _i8 && _o11.parentElement !== n.element;
            if (_l3 || _c2) return (n.insertChild(_o11), pe(e, n.element));
          }
        }
      }
      var o = Gt.$createDOM(r, At);
      if (
        ((function (t, e, n) {
          var r = n._keyToDOMMap;
          (ci(e, n, t), r.set(t, e));
        })(e, o, At),
        $r(r)
          ? o.setAttribute("data-lexical-text", "true")
          : us(r) &&
            (o.setAttribute("data-lexical-decorator", "true"),
            Cl(o, { captureSelection: !0 })),
        ls(r))
      ) {
        var _t24 = r.__indent,
          _e30 = r.__size;
        (re(o, r), 0 !== _t24 && ee(o, _t24));
        var _n22 = le(r),
          _s8 = _n22.size > 0 ? ie(r, o, _n22) : "";
        if (0 === _e30)
          ((o.__lexicalTextContent = _s8),
            (o.__lexicalFirstTextKey = null),
            (Dt += _s8),
            _n22.size > 0 && (o.__lexicalSlotTextLength = _s8.length));
        else {
          var _t25 = Dt,
            _i9 = _e30 - 1;
          if ((de(Ol(r, Ht), r, 0, _i9, ul(r, o, At)), "" !== _s8)) {
            var _e31 = o.__lexicalTextContent || "";
            ((o.__lexicalTextContent = _s8 + _e31), (Dt = _t25 + _s8 + _e31));
          }
          _n22.size > 0 && (o.__lexicalSlotTextLength = _s8.length);
        }
        var _i0 = r.__format;
        (0 !== _i0 && ne(o, _i0), r.isInline() || he(null, r, o));
      } else {
        var _t26 = r.getTextContent();
        if (us(r)) {
          var _t27 = r.decorate(At, Mt);
          (null !== _t27 && ye(e, _t27), (o.contentEditable = "false"));
          var _n23 = le(r);
          _n23.size > 0 && ie(r, o, _n23);
        }
        Dt += _t26;
      }
      return (
        null !== n && n.insertChild(o),
        Gt.$decorateDOM(r, null, o, At),
        Ot(r),
        Ai(Jt, wt, Kt, r, "created"),
        o
      );
    }
    function de(e, n, r, o, s) {
      var i = Dt,
        l = Lt();
      ((Dt = ""), (It = null), (Pt = null), (Ft = null));
      var c = r;
      for (; c <= o; ++c) {
        var _t28 = Lt();
        fe(e[c], s);
        var _n24 = Ht.get(e[c]);
        (null !== _n24 && $r(_n24)
          ? null === It &&
            ((It = _n24.getFormat()), (Pt = _n24.getStyle()), (Ft = _n24.__key))
          : ls(_n24) && c < o && !_n24.isInline() && (Dt += v),
          Rt(_t28));
      }
      var a = At._keyToDOMMap.get(n.__key);
      (void 0 === a && t(349, n.__key),
        (a.__lexicalTextContent = Dt),
        (a.__lexicalFirstTextKey = Ft),
        (Dt = i + Dt),
        Rt(l));
    }
    function he(t, e, n) {
      var _r$element$__lexicalL;
      var r = ul(e, n, At),
        o =
          (_r$element$__lexicalL = r.element.__lexicalLastChildKind) != null
            ? _r$element$__lexicalL
            : null,
        s = (function (t, e) {
          if (t) {
            var _n25 = t.__last;
            if (_n25) {
              var _t29 = e.get(_n25);
              if (_t29)
                return Ss(_t29)
                  ? "line-break"
                  : us(_t29) && _t29.isInline()
                    ? "decorator"
                    : null;
            }
            return le(t).size > 0 ? null : "empty";
          }
          return null;
        })(e, Ht);
      o !== s && r.setManagedLineBreak(s);
    }
    function ge(e, n, r) {
      var o;
      ((It = null),
        (Pt = null),
        (Ft = null),
        (function (e, n, r) {
          var o = Dt,
            s = e.__size,
            i = n.__size;
          Dt = "";
          var l = r.element,
            c = At._keyToDOMMap.get(n.__key);
          void 0 === c && t(351, n.__key);
          var a = i - s;
          if (
            !Vt &&
            Math.abs(a) <= 1 &&
            s >= Et &&
            e.__first === n.__first &&
            (0 !== a || !At._cloneNotNeeded.has(e.__key))
          ) {
            var _s9 = c.__lexicalTextContent,
              _u2 = Yt.get(e.__key);
            if (!Vt && "string" == typeof _s9 && void 0 !== _u2) {
              var _i1 = (function (t, e) {
                var n = e.size;
                if (0 === n || n >= t.__size) return null;
                var r = t.__last,
                  o = null,
                  s = 0;
                for (; null !== r && s < n; ) {
                  if (!e.has(r)) return null;
                  o = r;
                  var _t30 = Ht.get(r);
                  if (void 0 === _t30) return null;
                  ((r = _t30.__prev), s++);
                }
                if (s !== n) return null;
                if (null !== r && e.has(r)) return null;
                return o;
              })(n, _u2);
              if (null !== _i1) {
                var _f2 = _u2.size;
                if (0 === a) {
                  var _e32 = bt(_i1, _f2);
                  var _r14 = _i1,
                    _a = 0;
                  for (; null !== _r14 && _a < _f2; ) {
                    var _t31 = Ht.get(_r14);
                    if (void 0 === _t31) break;
                    var _e33 = Lt();
                    (pe(_r14, l),
                      $r(_t31) &&
                        null === It &&
                        ((It = _t31.getFormat()),
                        (Pt = _t31.getStyle()),
                        (Ft = _t31.__key)),
                      Rt(_e33),
                      (_r14 = _t31.__next),
                      _a++);
                  }
                  var _d2 = "";
                  for (_r14 = _i1, _a = 0; null !== _r14 && _a < _f2; ) {
                    var _e34 = Ht.get(_r14);
                    if (void 0 === _e34) break;
                    var _n26 = void 0;
                    if (ls(_e34)) {
                      var _o12 = At._keyToDOMMap.get(_r14),
                        _s0 = _o12 && _o12.__lexicalTextContent;
                      ("string" != typeof _s0 && t(352, _e34.getType()),
                        (_n26 = _s0));
                    } else _n26 = _e34.getTextContent();
                    ((_d2 += _n26),
                      _a < _f2 - 1 &&
                        ls(_e34) &&
                        !_e34.isInline() &&
                        (_d2 += v),
                      (_r14 = _e34.__next),
                      _a++);
                  }
                  var _h2 = c.__lexicalSlotTextLength || 0,
                    _g2 = _h2 > 0 ? _s9.slice(_h2) : _s9,
                    _3 = _g2.slice(0, _g2.length - _e32) + _d2;
                  return (
                    (c.__lexicalTextContent = _3),
                    (Dt = o + _3),
                    void _e(n, c, _u2)
                  );
                }
                if (
                  (function (e, n, r, o, s, i, l, c) {
                    if (1 !== c && -1 !== c) return !1;
                    var a = 1 === c ? 2 : 1;
                    if (l !== a) return !1;
                    var u = l - c;
                    var f = e.__last;
                    for (var _t32 = 0; _t32 < u - 1; _t32++) {
                      if (null === f) return !1;
                      var _t33 = Wt.get(f);
                      if (void 0 === _t33) return !1;
                      f = _t33.__prev;
                    }
                    if (null === f) return !1;
                    var d = Ht.get(i),
                      h = Wt.get(f);
                    if (void 0 === d || void 0 === h) return !1;
                    if (d.__prev !== h.__prev) return !1;
                    var g = [];
                    var _ = i;
                    for (var _t34 = 0; _t34 < l; _t34++) {
                      if (null === _) return !1;
                      g.push(_);
                      var _t35 = Ht.get(_);
                      _ = _t35 ? _t35.__next : null;
                    }
                    var p = [];
                    _ = f;
                    for (var _t36 = 0; _t36 < u; _t36++) {
                      if (null === _) return !1;
                      p.push(_);
                      var _t37 = Wt.get(_);
                      _ = _t37 ? _t37.__next : null;
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
                    var T = bt(f, u);
                    for (var _t38 of x) {
                      var _e35 = Lt();
                      if ("reconcile" === _t38.kind) pe(_t38.key, r.element);
                      else if ("destroy" === _t38.kind) Xt(_t38.key, r.element);
                      else {
                        var _e36 = null;
                        for (var _n27 = _t38.nextIndex + 1; _n27 < l; _n27++) {
                          var _t39 = At._keyToDOMMap.get(g[_n27]);
                          if (void 0 !== _t39) {
                            _e36 = _t39;
                            break;
                          }
                        }
                        fe(
                          _t38.key,
                          r.withBefore(_e36 != null ? _e36 : r.before),
                        );
                      }
                      if ("destroy" !== _t38.kind) {
                        var _e37 = Ht.get(_t38.key);
                        _e37 &&
                          $r(_e37) &&
                          null === It &&
                          ((It = _e37.getFormat()),
                          (Pt = _e37.getStyle()),
                          (Ft = _e37.__key));
                      }
                      Rt(_e35);
                    }
                    var N = "";
                    for (var _e38 = 0; _e38 < l; _e38++) {
                      var _n28 = Ht.get(g[_e38]);
                      if (void 0 === _n28) return !1;
                      var _r15 = void 0;
                      if (ls(_n28)) {
                        var _o13 = At._keyToDOMMap.get(g[_e38]),
                          _s1 = _o13 && _o13.__lexicalTextContent;
                        ("string" != typeof _s1 && t(350, _n28.getType()),
                          (_r15 = _s1));
                      } else _r15 = _n28.getTextContent();
                      ((N += _r15),
                        _e38 < l - 1 &&
                          ls(_n28) &&
                          !_n28.isInline() &&
                          (N += v));
                    }
                    var k = o.__lexicalSlotTextLength || 0,
                      b = k > 0 ? s.slice(k) : s;
                    return (
                      (o.__lexicalTextContent = b.slice(0, b.length - T) + N),
                      !0
                    );
                  })(e, 0, r, c, _s9, _i1, _f2, a)
                ) {
                  var _e39 = c.__lexicalTextContent;
                  return (
                    "string" != typeof _e39 && t(353),
                    (Dt = o + _e39),
                    void _e(n, c, _u2)
                  );
                }
              }
            }
            if (0 === a) {
              var _n29 = e.__first,
                _r16 = 0;
              for (; null !== _n29; ) {
                var _e40 = Ht.get(_n29);
                if (void 0 === _e40) break;
                var _o14 = Vt || Bt.has(_n29) || zt.has(_n29),
                  _s10 = Lt();
                if (_o14) pe(_n29, l);
                else {
                  var _r17 = void 0,
                    _o15 = void 0;
                  if (ls(_e40)) {
                    _o15 = jt.get(_n29);
                    var _s11 = _o15 && _o15.__lexicalTextContent;
                    ("string" != typeof _s11 && t(354, _e40.getType()),
                      (_r17 = _s11));
                  } else _r17 = _e40.getTextContent();
                  ((Dt += _r17), void 0 !== _o15 && $t(_o15));
                }
                ($r(_e40)
                  ? null === It &&
                    ((It = _e40.getFormat()),
                    (Pt = _e40.getStyle()),
                    (Ft = _e40.__key))
                  : ls(_e40) && _r16 < i - 1 && !_e40.isInline() && (Dt += v),
                  Rt(_s10),
                  (_n29 = _e40.__next),
                  _r16++);
              }
              return (
                (c.__lexicalTextContent = Dt),
                (c.__lexicalFirstTextKey = Ft),
                void (Dt = o + Dt)
              );
            }
          }
          if (1 === s && 1 === i) {
            var _t40 = e.__first,
              _o16 = n.__first;
            if (_t40 === _o16) pe(_t40, l);
            else {
              var _e41 = Se(_t40),
                _n30 = fe(_o16, null);
              try {
                _e41.parentNode === l
                  ? l.replaceChild(_n30, _e41)
                  : r.insertChild(_n30);
              } catch (r) {
                if ("object" == typeof r && null != r) {
                  var _s12 =
                    r.toString() +
                    " Parent: " +
                    l.tagName +
                    ", new child: {tag: " +
                    _n30.tagName +
                    " key: " +
                    _o16 +
                    "}, old child: {tag: " +
                    _e41.tagName +
                    ", key: " +
                    _t40 +
                    "}.";
                  throw new Error(_s12);
                }
                throw r;
              }
              Xt(_t40, null);
            }
            var _s13 = Ht.get(_o16);
            $r(_s13) &&
              null === It &&
              ((It = _s13.getFormat()),
              (Pt = _s13.getStyle()),
              (Ft = _s13.__key));
          } else {
            var _o17 = Ol(e, Wt),
              _c3 = Ol(n, Ht);
            if (
              (_o17.length !== s && t(227), _c3.length !== i && t(228), 0 === s)
            )
              0 !== i && de(_c3, n, 0, i - 1, r);
            else if (0 === i) {
              if (0 !== s) {
                var _t41 =
                  null == r.after &&
                  null == r.before &&
                  0 === le(n).size &&
                  null == r.element.__lexicalLineBreak;
                (Qt(_o17, 0, s - 1, _t41 ? null : l),
                  _t41 && (l.textContent = ""));
              }
            } else
              !(function (t, e, n, r, o, s) {
                var i = r - 1,
                  l = o - 1;
                var c,
                  a,
                  u = s.getFirstChild(),
                  f = 0,
                  d = 0;
                for (; f <= i && d <= l; ) {
                  var _t42 = e[f],
                    _r18 = n[d],
                    _o18 = Lt();
                  if (_t42 === _r18) ((u = me(pe(_r18, s.element))), f++, d++);
                  else {
                    if ((void 0 === a && (a = xe(n, d)), void 0 === c))
                      c = xe(e, f);
                    else if (!c.has(_t42)) {
                      (f++, Rt(_o18));
                      continue;
                    }
                    if (!a.has(_t42)) {
                      ((u = me(Se(_t42))),
                        Xt(_t42, s.element),
                        f++,
                        c["delete"](_t42),
                        Rt(_o18));
                      continue;
                    }
                    if (c.has(_r18)) {
                      var _t43 = Fi(At, _r18);
                      (_t43 !== u &&
                        s
                          .withBefore(u != null ? u : s.before)
                          .insertChild(_t43),
                        (u = me(pe(_r18, s.element))),
                        f++,
                        d++);
                    } else
                      (fe(_r18, s.withBefore(u != null ? u : s.before)), d++);
                  }
                  var _i10 = Ht.get(_r18);
                  (null !== _i10 && $r(_i10)
                    ? null === It &&
                      ((It = _i10.getFormat()),
                      (Pt = _i10.getStyle()),
                      (Ft = _i10.__key))
                    : ls(_i10) && d <= l && !_i10.isInline() && (Dt += v),
                    Rt(_o18));
                }
                var h = f > i,
                  g = d > l;
                if (h && !g) {
                  var _e42 = n[l + 1],
                    _r19 = void 0 === _e42 ? null : At.getElementByKey(_e42);
                  de(n, t, d, l, s.withBefore(_r19 != null ? _r19 : s.before));
                } else g && !h && Qt(e, f, i, s.element);
              })(n, _o17, _c3, s, i, r);
          }
          ((c.__lexicalTextContent = Dt),
            (c.__lexicalFirstTextKey = Ft),
            (Dt = o + Dt));
        })(e, n, ul(n, r, At)),
        ji(n) ||
          ((o = n),
          null == It || It === o.__textFormat || qt || o.setTextFormat(It),
          (function (t) {
            null == Pt || Pt === t.__textStyle || qt || t.setTextStyle(Pt);
          })(n)));
    }
    function _e(t, e, n) {
      var r = e.__lexicalFirstTextKey;
      if (null != r) {
        var _e43 = t.__key;
        var _o19 = r;
        for (; null !== _o19; ) {
          var _t44 = Ht.get(_o19);
          if (void 0 === _t44) {
            _o19 = null;
            break;
          }
          if (_t44.__parent === _e43) break;
          _o19 = _t44.__parent;
        }
        if (null !== _o19 && !n.has(_o19)) {
          var _t45 = Ht.get(r);
          if ($r(_t45))
            return ((It = _t45.getFormat()), void (Pt = _t45.getStyle()));
        }
      }
      e.__lexicalFirstTextKey = Ft;
    }
    function pe(e, n) {
      var r = Wt.get(e);
      var o = Ht.get(e);
      (void 0 !== r && void 0 !== o) || t(61);
      var s = Vt || Bt.has(e) || zt.has(e),
        i = Fi(At, e);
      if (r === o && !s) {
        var _e44;
        if (ls(r)) {
          var _n31 = i.__lexicalTextContent;
          ("string" != typeof _n31 && t(355, r.getType()),
            (_e44 = _n31),
            $t(i));
        } else _e44 = r.getTextContent();
        return ((Dt += _e44), i);
      }
      if (
        (r !== o && s && Ai(Jt, wt, Kt, o, "updated"),
        Gt.$updateDOM(o, r, i, At))
      ) {
        var _r20 = fe(e, null);
        return (
          null === n && t(62),
          n.replaceChild(_r20, i),
          Xt(e, null),
          _r20
        );
      }
      if (ls(r)) {
        ls(o) || t(334, e);
        var _n32 = o.__indent;
        (Vt || _n32 !== r.__indent) && ee(i, _n32);
        var _l4 = o.__format;
        (Vt || _l4 !== r.__format) && ne(i, _l4);
        var _c4 = s && (le(o).size > 0 || le(r).size > 0) ? ue(r, o, i) : "";
        if (s) {
          var _t46 = Dt;
          if ((ge(r, o, i), ds(o) || o.isInline() || he(0, o, i), "" !== _c4)) {
            var _e45 = i.__lexicalTextContent || "";
            ((i.__lexicalTextContent = _c4 + _e45),
              (Dt = _t46 + _c4 + _e45),
              (i.__lexicalSlotTextLength = _c4.length));
          } else
            (le(o).size > 0 || le(r).size > 0) &&
              (i.__lexicalSlotTextLength = 0);
        } else {
          var _e46 = i.__lexicalTextContent;
          ("string" != typeof _e46 && t(356, r.getType()), (Dt += _e46), $t(i));
        }
        if (
          (Vt || o.__dir !== r.__dir || o.__parent !== r.__parent) &&
          (re(i, o), ds(o) && !Vt)
        )
          for (var _t47 of o.getChildren())
            if (ls(_t47)) {
              re(Fi(At, _t47.getKey()), _t47);
            }
      } else {
        var _t48 = o.getTextContent();
        if (us(o)) {
          var _t49 = o.decorate(At, Mt);
          (null !== _t49 && ye(e, _t49),
            s && (le(o).size > 0 || le(r).size > 0) && ue(r, o, i));
        }
        Dt += _t48;
      }
      if (!qt && ds(o)) {
        var _t50 = o.getLatest();
        if (_t50.__cachedText !== Dt) {
          var _e47 = _t50.getWritable();
          ((_e47.__cachedText = Dt), (o = _e47));
        }
      }
      return (Gt.$decorateDOM(o, r, i, At), Ot(o), i);
    }
    function ye(t, e) {
      var n = At._pendingDecorators;
      var r = At._decorators;
      if (null === n) {
        if (r[t] === e) return;
        n = fi(At);
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
      for (var _r21 = e; _r21 < t.length; _r21++) n.add(t[_r21]);
      return n;
    }
    function Ce(t, e, n, r, o, s) {
      ((Dt = ""),
        (It = null),
        (Pt = null),
        (Ft = null),
        (Vt = 2 === r),
        (At = n),
        (Mt = n._config),
        (Gt = n._config.dom || Is),
        (wt = n._nodes),
        (Kt = At._listeners.mutation),
        (zt = o),
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
                var _r22 = _e48.__parent;
                if (null === _r22) continue;
                var _o20 = t.get(_r22);
                (void 0 === _o20 && ((_o20 = new Set()), t.set(_r22, _o20)),
                  _o20.add(_n33));
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
        (Gt = Is),
        i
      );
    }
    function Se(e) {
      var n = jt.get(e);
      return (void 0 === n && t(75, e), n);
    }
    function Te(t) {
      return { type: t };
    }
    var Ne = Te("SELECTION_CHANGE_COMMAND"),
      ve = Te("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"),
      ke = Te("CLICK_COMMAND"),
      be = Te("BEFORE_INPUT_COMMAND"),
      Oe = Te("INPUT_COMMAND"),
      Ee = Te("COMPOSITION_START_COMMAND"),
      Me = Te("COMPOSITION_END_COMMAND"),
      Ae = Te("DELETE_CHARACTER_COMMAND"),
      we = Te("INSERT_LINE_BREAK_COMMAND"),
      De = Te("INSERT_PARAGRAPH_COMMAND"),
      Ie = Te("CONTROLLED_TEXT_INSERTION_COMMAND"),
      Pe = Te("PASTE_COMMAND"),
      Fe = Te("REMOVE_TEXT_COMMAND"),
      Le = Te("DELETE_WORD_COMMAND"),
      Re = Te("DELETE_LINE_COMMAND"),
      $e = Te("FORMAT_TEXT_COMMAND"),
      Ke = Te("UNDO_COMMAND"),
      ze = Te("REDO_COMMAND"),
      Be = Te("KEYDOWN_COMMAND"),
      We = Te("KEY_ARROW_RIGHT_COMMAND"),
      Ue = Te("MOVE_TO_END"),
      He = Te("KEY_ARROW_LEFT_COMMAND"),
      je = Te("MOVE_TO_START"),
      Ye = Te("KEY_ARROW_UP_COMMAND"),
      Je = Te("KEY_ARROW_DOWN_COMMAND"),
      Ge = Te("KEY_ENTER_COMMAND"),
      Ve = Te("KEY_SPACE_COMMAND"),
      qe = Te("KEY_BACKSPACE_COMMAND"),
      Xe = Te("KEY_ESCAPE_COMMAND"),
      Qe = Te("KEY_DELETE_COMMAND"),
      Ze = Te("KEY_TAB_COMMAND"),
      tn = Te("INSERT_TAB_COMMAND"),
      en = Te("INDENT_CONTENT_COMMAND"),
      nn = Te("OUTDENT_CONTENT_COMMAND"),
      rn = Te("DROP_COMMAND"),
      on = Te("FORMAT_ELEMENT_COMMAND"),
      sn = Te("DRAGSTART_COMMAND"),
      ln = Te("DRAGOVER_COMMAND"),
      cn = Te("DRAGEND_COMMAND"),
      an = Te("COPY_COMMAND"),
      un = Te("CUT_COMMAND"),
      fn = Te("SELECT_ALL_COMMAND"),
      dn = Te("CLEAR_EDITOR_COMMAND"),
      hn = Te("CLEAR_HISTORY_COMMAND"),
      gn = Te("CAN_REDO_COMMAND"),
      _n = Te("CAN_UNDO_COMMAND"),
      pn = Te("FOCUS_COMMAND"),
      yn = Te("BLUR_COMMAND"),
      mn = Te("KEY_MODIFIER_COMMAND"),
      xn = Object.freeze({}),
      Cn = [
        [
          "keydown",
          function (t, e) {
            ((Sn = t.timeStamp), (Tn = t.key), "Backspace" !== t.key && Hn());
            if (e.isComposing()) return;
            Pi(e, Be, t);
          },
        ],
        [
          "pointerdown",
          function (t, e) {
            var n = t.target,
              r = t.pointerType;
            el(n) &&
              "touch" !== r &&
              "pen" !== r &&
              0 === t.button &&
              ss(e, function () {
                Nl(n, e) || (An = !0);
              });
          },
        ],
        [
          "compositionstart",
          function (t, e) {
            Pi(e, Ee, t);
          },
        ],
        [
          "compositionend",
          function (t, e) {
            s
              ? (Dn = !0)
              : l || (!a && !d)
                ? Pi(e, Me, t)
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
              var n = _o(),
                r = Qi(Wi(e)),
                o = po();
              if (r)
                if (Gr(n)) {
                  var _t51 = n.anchor,
                    _e50 = _t51.getNode();
                  "element" === _t51.type &&
                    0 === _t51.offset &&
                    n.isCollapsed() &&
                    !ds(_e50) &&
                    1 === hi().getChildrenSize() &&
                    _e50.getTopLevelElementOrThrow().isEmpty() &&
                    null !== o &&
                    n.is(o) &&
                    (r.removeAllRanges(), (n.dirty = !0));
                } else if (
                  "touch" === t.pointerType ||
                  "pen" === t.pointerType
                ) {
                  var _n34 = r.anchorNode;
                  if (tl(_n34) || qs(_n34)) {
                    gi(go(o, r, e, t));
                  }
                }
              Pi(e, ke, t);
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
            if ("deleteCompositionText" === n || (s && Ii(e))) return;
            if ("insertCompositionText" === n) return;
            Pi(e, be, t);
          })(t, e);
        },
      ]);
    var Sn = 0,
      Tn = null,
      Nn = 0,
      vn = null,
      kn = !1,
      bn = null;
    var On = new WeakMap(),
      En = new WeakMap();
    var Mn = !1,
      An = !1,
      wn = !1,
      Dn = !1,
      In = !1,
      Pn = "",
      Fn = null,
      Ln = [0, "", 0, "root", 0];
    function Rn(t, e, n, r, o) {
      var s = t.anchor,
        l = t.focus,
        c = s.getNode(),
        a = Ho(),
        u = Qi(Wi(a)),
        f = null !== u ? u.anchorNode : null,
        d = s.key,
        h = a.getElementByKey(d),
        g = n.length;
      return (
        d !== l.key ||
        !$r(c) ||
        (((!o && (!i || Nn < r + 50)) || (c.isDirty() && g < 2) || pi(n)) &&
          s.offset !== l.offset &&
          !c.isComposing()) ||
        Vs(c) ||
        (c.isDirty() && g > 1) ||
        ((o || !i) && null !== h && !c.isComposing() && f !== dl(c, h, a)) ||
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
            o = Gs(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!r.canInsertTextBefore() && !e.isComposing()) ||
                o ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    ($r(e) || (ls(e) && e.isInline())) &&
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
    function $n(t, e) {
      return (
        qs(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function Kn(e, n, r) {
      var o = e.anchorNode,
        s = e.anchorOffset,
        i = e.focusNode,
        l = e.focusOffset;
      (Mn && ((Mn = !1), $n(o, s) && $n(i, l) && !Fn)) ||
        ss(n, function () {
          if (!r) return void gi(null);
          if (!Hs(n, o, i)) return;
          var c = _o();
          if (Fn && Gr(c) && c.isCollapsed()) {
            var _t52 = c.anchor,
              _e51 = Fn.anchor;
            ((_t52.key === _e51.key && _t52.offset === _e51.offset + 1) ||
              (1 === _t52.offset &&
                _e51.getNode().is(_t52.getNode().getPreviousSibling()))) &&
              ((c = Fn.clone()), gi(c));
          }
          if (((Fn = null), Gr(c))) {
            var _r23 = c.anchor,
              _o21 = _r23.getNode();
            if (c.isCollapsed()) {
              "Range" === e.type &&
                e.anchorNode === e.focusNode &&
                (c.dirty = !0);
              var _s14 = Wi(n).event,
                _i11 = _s14 ? _s14.timeStamp : performance.now(),
                _Ln = Ln,
                _l5 = _Ln[0],
                _a2 = _Ln[1],
                _u3 = _Ln[2],
                _f3 = _Ln[3],
                _d3 = _Ln[4],
                _h3 = hi(),
                _g3 = !1 === n.isComposing() && "" === _h3.getTextContent();
              if (_i11 < _d3 + 200 && _r23.offset === _u3 && _r23.key === _f3)
                zn(c, _l5, _a2);
              else if ("text" === _r23.type) ($r(_o21) || t(141), Bn(c, _o21));
              else if ("element" === _r23.type && !_g3) {
                ls(_o21) || t(259);
                var _e52 = _r23.getNode();
                _e52.isEmpty()
                  ? (function (t, e) {
                      var n = e.getTextFormat(),
                        r = e.getTextStyle();
                      zn(t, n, r);
                    })(c, _e52)
                  : zn(c, c.format, "");
              }
            } else {
              var _t53 = _r23.key,
                _e53 = c.focus.key,
                _n35 = c.getNodes(),
                _o22 = _n35.length,
                _i12 = c.isBackward(),
                _a3 = _i12 ? l : s,
                _u4 = _i12 ? s : l,
                _f4 = _i12 ? _e53 : _t53,
                _d4 = _i12 ? _t53 : _e53;
              var _h4 = 2047,
                _g4 = !1;
              for (var _t54 = 0; _t54 < _o22; _t54++) {
                var _e54 = _n35[_t54],
                  _r24 = _e54.getTextContentSize();
                if (
                  $r(_e54) &&
                  0 !== _r24 &&
                  !(
                    (0 === _t54 && _e54.__key === _f4 && _a3 === _r24) ||
                    (_t54 === _o22 - 1 && _e54.__key === _d4 && 0 === _u4)
                  ) &&
                  ((_g4 = !0), (_h4 &= _e54.getFormat()), 0 === _h4)
                )
                  break;
              }
              c.format = _g4 ? _h4 : 0;
            }
          }
          Pi(n, Ne, void 0);
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
      if (null == t || t.length <= 1 || null == Tn) return;
      var e =
        1 === Tn.length
          ? Tn
          : "Enter" === Tn
            ? "\n"
            : "Tab" === Tn
              ? "\t"
              : null;
      if (!e) return;
      var n = _o();
      if (!Gr(n) || !n.isCollapsed()) return;
      var r = n.anchor.getNode();
      if (!$r(r)) return;
      var o = n.anchor.offset;
      if (r.getTextContentSize() === o) {
        var _t55 = r.getNextSibling();
        if ("\n" === e) {
          if (Ss(_t55)) _t55.selectEnd();
          else if (!_t55) {
            var _t56 = bl(r, ao),
              _e55 = _t56 && _t56.getNextSibling();
            ls(_e55) && _e55.selectStart();
          }
        } else
          "\t" === e
            ? Wr(_t55) && _t55.selectEnd()
            : $r(_t55) && _t55.getTextContent()[0] === e && _t55.select(1, 1);
      } else r.getTextContent()[o] === e && r.select(o + 1, o + 1);
    }
    function Hn() {
      ((kn = !1), null !== bn && (clearTimeout(bn), (bn = null)));
    }
    function jn() {
      (Hn(), (kn = !0), (bn = setTimeout(Hn, 0)));
    }
    function Yn(e) {
      var _ref21;
      var n = e.inputType,
        r = Wn(e),
        o = Ho(),
        s = _o();
      if ("insertText" === n && e.data && kn) {
        if ((Hn(), e.preventDefault(), Gr(s) && !s.isCollapsed())) {
          var _t57 = s.isBackward() ? s.anchor : s.focus;
          (s.anchor.set(_t57.key, _t57.offset, _t57.type),
            s.focus.set(_t57.key, _t57.offset, _t57.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === s) {
          var _t58 = po();
          if (!Gr(_t58)) return !0;
          gi(_t58.clone());
        }
        if (Gr(s)) {
          var _n36 = s.anchor.key === s.focus.key;
          if (
            ((i = e.timeStamp),
            "MediaLast" === Tn && i < Sn + 30 && o.isComposing() && _n36)
          ) {
            if (
              (oi(null),
              (Sn = 0),
              setTimeout(function () {
                ss(o, function () {
                  oi(null);
                });
              }, 30),
              Gr(s))
            ) {
              var _e56 = s.anchor.getNode();
              (_e56.markDirty(), $r(_e56) || t(142), Bn(s, _e56));
            }
          } else {
            if (
              (oi(null),
              l &&
                null !== r &&
                !r.collapsed &&
                (s.applyDOMRange(r), !s.isCollapsed()))
            )
              return (e.preventDefault(), s.removeText(), !0);
            e.preventDefault();
            var _t59 = s.anchor.getNode(),
              _i13 = _t59.getTextContent(),
              _c5 = _t59.canInsertTextAfter(),
              _a4 = 0 === s.anchor.offset && s.focus.offset === _i13.length;
            var _u5 = f && _n36 && !_a4 && _c5;
            if (
              (_u5 && s.isCollapsed() && (_u5 = !us(Di(s.anchor, !0))), !_u5)
            ) {
              Pi(o, Ae, !0);
              var _t60 = _o();
              f &&
                Gr(_t60) &&
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
      if (!Gr(s)) return !0;
      var c = e.data;
      (null !== vn && Ci(!1, o, vn),
        (s.dirty && null === vn) ||
          !s.isCollapsed() ||
          ds(s.anchor.getNode()) ||
          null === r ||
          s.applyDOMRange(r),
        (vn = null));
      var a = s.anchor,
        u = s.focus,
        d = a.getNode(),
        h = u.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === c) (e.preventDefault(), Pi(o, we, !1));
        else if (c === v) (e.preventDefault(), Pi(o, De, void 0));
        else if (null == c && e.dataTransfer) {
          var _t61 = e.dataTransfer.getData("text/plain");
          (e.preventDefault(), s.insertRawText(_t61));
        } else
          null != c && Rn(s, r, c, e.timeStamp, !0)
            ? (e.preventDefault(), Pi(o, Ie, c), Un(c))
            : (vn = c);
        return ((Nn = e.timeStamp), !0);
      }
      switch ((e.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          Pi(o, Ie, e);
          Un(
            (_ref21 = e.dataTransfer
              ? e.dataTransfer.getData("text/plain")
              : null) != null
              ? _ref21
              : e.data,
          );
          break;
        case "insertFromComposition":
          (oi(null), Pi(o, Ie, e));
          break;
        case "insertLineBreak":
          (oi(null), Pi(o, we, !1));
          break;
        case "insertParagraph":
          (oi(null), wn && !l ? ((wn = !1), Pi(o, we, !1)) : Pi(o, De, void 0));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          Pi(o, Pe, e);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || ls(t) || ls(e) || !Gs(t) || !Gs(e);
          })(d, h) && Pi(o, Fe, e);
          break;
        case "deleteByDrag":
          ($i(_r), Pi(o, Fe, e));
          break;
        case "deleteByCut":
          Pi(o, Fe, e);
          break;
        case "deleteContent":
          Pi(o, Ae, !1);
          break;
        case "deleteWordBackward":
          Pi(o, Le, !0);
          break;
        case "deleteWordForward":
          Pi(o, Le, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          Pi(o, Re, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          Pi(o, Re, !1);
          break;
        case "formatStrikeThrough":
          Pi(o, $e, "strikethrough");
          break;
        case "formatBold":
          Pi(o, $e, "bold");
          break;
        case "formatItalic":
          Pi(o, $e, "italic");
          break;
        case "formatUnderline":
          Pi(o, $e, "underline");
          break;
        case "historyUndo":
          Pi(o, Ke, void 0);
          break;
        case "historyRedo":
          Pi(o, ze, void 0);
      }
      return !0;
    }
    function Jn(t) {
      var e = Ho();
      if (tl(t.target) && Nl(t.target, e)) return !0;
      var n = _o(),
        r = t.data,
        o = Wn(t);
      if (null != r && Gr(n) && Rn(n, o, r, t.timeStamp, !1)) {
        Dn && (qn(e, r), (Dn = !1));
        var _o23 = n.anchor.getNode(),
          _l6 = Qi(Wi(e));
        if (null === _l6) return !0;
        var _c6 = n.isBackward(),
          _a5 = _c6 ? n.anchor.offset : n.focus.offset,
          _u6 = _c6 ? n.focus.offset : n.anchor.offset;
        (i &&
          !n.isCollapsed() &&
          $r(_o23) &&
          null !== _l6.anchorNode &&
          _o23.getTextContent().slice(0, _a5) +
            r +
            _o23.getTextContent().slice(_a5 + _u6) ===
            xi(_l6.anchorNode)) ||
          Pi(e, Ie, r);
        var _d5 = r.length;
        (s &&
          _d5 > 1 &&
          "insertCompositionText" === t.inputType &&
          !e.isComposing() &&
          ((n.anchor.offset -= _d5),
          (n._cachedNodes = null),
          (n._cachedIsBackward = null)),
          f && e.isComposing() && ((Sn = 0), oi(null)));
      } else {
        (Ci(!1, e, null !== r ? r : void 0),
          Dn && (qn(e, r || void 0), $i(yr), (Dn = !1)));
      }
      return (
        (function () {
          Bo();
          var t = Ho();
          ot(t);
        })(),
        !0
      );
    }
    function Gn(t) {
      var e = Ho(),
        n = _o();
      if (Gr(n) && !e.isComposing()) {
        var _r25 = n.anchor,
          _o24 = n.anchor.getNode();
        (oi(_r25.key),
          $i(pr),
          (t.timeStamp < Sn + 30 ||
            "element" === _r25.type ||
            !n.isCollapsed() ||
            _o24.getFormat() !== n.format ||
            ($r(_o24) && _o24.getStyle() !== n.style)) &&
            Pi(e, Ie, k));
      }
      return !0;
    }
    function Vn(t) {
      return (qn(Ho(), t.data), $i(yr), !0);
    }
    function qn(t, e) {
      var n = t._compositionKey;
      if ((oi(null), null !== n && null != e)) {
        if ("" === e) {
          var _e57 = ii(n),
            _r26 = t.getElementByKey(n),
            _o25 = null !== _r26 && $r(_e57) ? dl(_e57, _r26, t) : null;
          if (null !== _o25 && null !== _o25.nodeValue && $r(_e57)) {
            var _n37 = Qi(Wi(t));
            var _r27 = null,
              _s15 = null;
            (null !== _n37 &&
              _n37.anchorNode === _o25 &&
              ((_r27 = _n37.anchorOffset), (_s15 = _n37.focusOffset)),
              Si(_e57, _o25.nodeValue, _r27, _s15, !0));
          }
          return;
        }
        if ("\n" === e[e.length - 1]) {
          var _e58 = _o();
          if (Gr(_e58) || qr(_e58)) {
            if (Gr(_e58)) {
              var _t62 = _e58.focus;
              _e58.anchor.set(_t62.key, _t62.offset, _t62.type);
            }
            return void Pi(t, Ge, null);
          }
        }
      }
      Ci(!0, t, e);
    }
    function Xn(t) {
      var e = Ho();
      if (null == t.key) return !0;
      if (In) {
        if (Ei(t))
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
          return ki(t, "ArrowRight", { shiftKey: "any" });
        })(t)
      )
        Pi(e, We, t);
      else if (
        (function (t) {
          return ki(
            t,
            "ArrowRight",
            babelHelpers["extends"]({}, bi, { shiftKey: "any" }),
          );
        })(t)
      )
        Pi(e, Ue, t);
      else if (
        (function (t) {
          return ki(t, "ArrowLeft", { shiftKey: "any" });
        })(t)
      )
        Pi(e, He, t);
      else if (
        (function (t) {
          return ki(
            t,
            "ArrowLeft",
            babelHelpers["extends"]({}, bi, { shiftKey: "any" }),
          );
        })(t)
      )
        Pi(e, je, t);
      else if (
        (function (t) {
          return ki(t, "ArrowUp", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        Pi(e, Ye, t);
      else if (
        (function (t) {
          return ki(t, "ArrowDown", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        Pi(e, Je, t);
      else if (
        (function (t) {
          return ki(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
            shiftKey: !0,
          });
        })(t)
      )
        ((wn = !0), Pi(e, Ge, t));
      else if (
        (function (t) {
          return " " === t.key;
        })(t)
      )
        Pi(e, Ve, t);
      else if (
        (function (t) {
          return o && ki(t, "o", { ctrlKey: !0 });
        })(t)
      )
        (t.preventDefault(), (wn = !0), Pi(e, we, !0));
      else if (
        (function (t) {
          return ki(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
          });
        })(t)
      )
        ((wn = !1), Pi(e, Ge, t));
      else if (
        (function (t) {
          return (
            ki(t, "Backspace", { shiftKey: "any" }) ||
            (o && ki(t, "h", { ctrlKey: !0 }))
          );
        })(t)
      )
        Ei(t) ? Pi(e, qe, t) && jn() : (t.preventDefault(), Pi(e, Ae, !0));
      else if (
        (function (t) {
          return "Escape" === t.key;
        })(t)
      )
        Pi(e, Xe, t);
      else if (
        (function (t) {
          return ki(t, "Delete", {}) || (o && ki(t, "d", { ctrlKey: !0 }));
        })(t)
      )
        !(function (t) {
          return "Delete" === t.key;
        })(t)
          ? (t.preventDefault(), Pi(e, Ae, !1))
          : Pi(e, Qe, t);
      else if (
        (function (t) {
          return ki(t, "Backspace", Oi);
        })(t)
      )
        (t.preventDefault(), Pi(e, Le, !0));
      else if (
        (function (t) {
          return ki(t, "Delete", Oi);
        })(t)
      )
        (t.preventDefault(), Pi(e, Le, !1));
      else if (
        (function (t) {
          return o && ki(t, "Backspace", { metaKey: !0 });
        })(t)
      )
        (t.preventDefault(), Pi(e, Re, !0));
      else if (
        (function (t) {
          return (
            o &&
            (ki(t, "Delete", { metaKey: !0 }) || ki(t, "k", { ctrlKey: !0 }))
          );
        })(t)
      )
        (t.preventDefault(), Pi(e, Re, !1));
      else if (
        (function (t) {
          return ki(t, "b", bi);
        })(t)
      )
        (t.preventDefault(), Pi(e, $e, "bold"));
      else if (
        (function (t) {
          return ki(t, "u", bi);
        })(t)
      )
        (t.preventDefault(), Pi(e, $e, "underline"));
      else if (
        (function (t) {
          return ki(t, "i", bi);
        })(t)
      )
        (t.preventDefault(), Pi(e, $e, "italic"));
      else if (
        (function (t) {
          return ki(t, "Tab", { shiftKey: "any" });
        })(t)
      )
        Pi(e, Ze, t);
      else if (
        (function (t) {
          return ki(t, "z", bi);
        })(t)
      )
        (t.preventDefault(), Pi(e, Ke, void 0));
      else if (
        (function (t) {
          if (o) return ki(t, "z", { metaKey: !0, shiftKey: !0 });
          return (
            ki(t, "y", { ctrlKey: !0 }) ||
            ki(t, "z", { ctrlKey: !0, shiftKey: !0 })
          );
        })(t)
      )
        (t.preventDefault(), Pi(e, ze, void 0));
      else {
        var _n38 = e._editorState._selection;
        !(function (t) {
          return ki(t, "a", bi);
        })(t)
          ? null === _n38 ||
            Gr(_n38) ||
            (!(function (t) {
              return ki(t, "c", bi);
            })(t)
              ? (function (t) {
                  return ki(t, "x", bi);
                })(t) && (t.preventDefault(), Pi(e, un, t))
              : (t.preventDefault(), Pi(e, an, t)))
          : (t.preventDefault(), Pi(e, fn, t) && jn());
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
    function tr(t) {
      var e = Zi(t.target);
      if (null === e) return;
      var n = Ys(e.anchorNode);
      if (null === n) return;
      An &&
        ((An = !1),
        ss(n, function () {
          var r = po(),
            o = e.anchorNode;
          if (tl(o) || qs(o)) {
            gi(go(r, e, n, t));
          }
        }));
      var r = yi(n),
        o = r[r.length - 1],
        s = o._key,
        i = Zn.get(s),
        l = i || o;
      (l !== n && Kn(e, l, !1),
        Kn(e, n, !0),
        n !== o ? Zn.set(s, n) : i && Zn["delete"](s));
    }
    function er(t) {
      t._lexicalHandled = !0;
    }
    function nr(t) {
      return !0 === t._lexicalHandled;
    }
    var rr = function rr() {};
    function or(e) {
      var n = On.get(e);
      if (void 0 === n) return void rr();
      var r = En.get(n);
      if (void 0 === r) return void rr();
      var o = r - 1;
      (o >= 0 || t(164),
        On["delete"](e),
        En.set(n, o),
        0 === o && n.removeEventListener("selectionchange", tr));
      var s = Js(e);
      js(s)
        ? (!(function (t) {
            if (null !== t._parentEditor) {
              var _e59 = yi(t),
                _n39 = _e59[_e59.length - 1]._key;
              Zn.get(_n39) === t && Zn["delete"](_n39);
            } else Zn["delete"](t._key);
          })(s),
          (e.__lexicalEditor = null))
        : s && t(198);
      var i = Qn(e);
      for (var _t63 = 0; _t63 < i.length; _t63++) i[_t63]();
      e.__lexicalEventHandles = [];
    }
    function sr(t, n, r) {
      Bo();
      var o = t.__key,
        s = t.getParent();
      if (null === s)
        return void (
          null !== wl(t) &&
          e(
            "$removeNode: node " +
              o +
              " is slotted into host " +
              String(wl(t)) +
              "; use removeSlot on the host instead of remove().",
          )
        );
      var i = (function (t) {
        var e = _o();
        if (!Gr(e) || !ls(t)) return e;
        var n = e.anchor,
          r = e.focus,
          o = n.getNode(),
          s = r.getNode();
        zi(o, t) && n.set(t.__key, 0, "element");
        zi(s, t) && r.set(t.__key, 0, "element");
        return e;
      })(t);
      var l = !1;
      if (Gr(i) && n) {
        var _e60 = i.anchor,
          _n40 = i.focus;
        (_e60.key === o &&
          (xo(_e60, t, s, t.getPreviousSibling(), t.getNextSibling()),
          (l = !0)),
          _n40.key === o &&
            (xo(_n40, t, s, t.getPreviousSibling(), t.getNextSibling()),
            (l = !0)));
      } else qr(i) && n && t.isSelected() && t.selectPrevious();
      if (Gr(i) && n && !l) {
        var _e61 = t.getIndexWithinParent();
        (ei(t), yo(i, s, _e61, -1));
      } else ei(t);
      (r || ji(s) || s.canBeEmpty() || !s.isEmpty() || sr(s, n),
        n && i && ds(s) && s.isEmpty() && s.selectEnd());
    }
    var ir = Symbol["for"]("ephemeral");
    function lr(t) {
      return t[ir] || !1;
    }
    var cr = { configurable: !0, enumerable: !1, value: void 0, writable: !0 };
    var _ar5 = (function () {
      function ar(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", cr),
          Object.defineProperty(this, kt, cr),
          ti(this, t));
      }
      ar.getType = function getType() {
        var _kl2 = kl(this),
          e = _kl2.ownNodeType;
        return (void 0 === e && t(64, this.name), e);
      };
      ar.clone = function clone(e) {
        t(65, this.name);
      };
      var _proto6 = ar.prototype;
      _proto6.$config = function $config() {
        return {};
      };
      _proto6.config = function config(t, e) {
        var _ref22;
        var n = e["extends"] || Object.getPrototypeOf(this.constructor);
        return (
          Object.assign(e, { extends: n }),
          "string" == typeof t && Object.assign(e, { type: t }),
          (_ref22 = {}),
          (_ref22[t] = e),
          _ref22
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
          var _e62 = ii(t);
          if (null === _e62) break;
          t = null !== _e62.__parent ? _e62.__parent : wl(_e62);
        }
        return !1;
      };
      _proto6.isSelected = function isSelected(t) {
        var _this13 = this;
        var e = t || _o();
        if (null == e) return !1;
        var n = e.getNodes().some(function (t) {
          return t.__key === _this13.__key;
        });
        if ($r(this)) return n;
        if (
          Gr(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t64 = this.getParent();
          if (us(this) && this.isInline() && _t64) {
            var _n41 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t64.is(_n41.getNode()) &&
              _n41.offset === _t64.getChildrenSize() &&
              this.is(_t64.getLastChild())
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
        return null === t ? null : ii(t);
      };
      _proto6.getParentOrThrow = function getParentOrThrow() {
        var e = this.getParent();
        return (null === e && t(66, this.__key), e);
      };
      _proto6.getTopLevelElement = function getTopLevelElement() {
        var e = this;
        for (; null !== e; ) {
          var _n42 = e.getParent();
          if (ji(_n42) || null !== wl(e))
            return (ls(e) || (e === this && us(e)) || t(194), e);
          e = _n42;
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
        return null === t ? null : ii(t);
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
        return null === t ? null : ii(t);
      };
      _proto6.getNextSiblings = function getNextSiblings() {
        var t = [];
        var e = this.getNextSibling();
        for (; null !== e; ) (t.push(e), (e = e.getNextSibling()));
        return t;
      };
      _proto6.getCommonAncestor = function getCommonAncestor(t) {
        var e = ls(this) ? this : this.getParent(),
          n = ls(t) ? t : t.getParent(),
          r = e && n ? Ec(e, n) : null;
        return r ? r.commonAncestor : null;
      };
      _proto6.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto6.isBefore = function isBefore(e) {
        var n = Ec(this, e);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === kc(n)
              : ("same" !== n.type && "ancestor" !== n.type && t(279), !1)))
        );
      };
      _proto6.isParentOf = function isParentOf(t) {
        var e = Ec(this, t);
        return null !== e && "ancestor" === e.type;
      };
      _proto6.getNodesBetween = function getNodesBetween(e) {
        var n = this.isBefore(e),
          r = [],
          o = new Set();
        var s = this;
        for (; null !== s; ) {
          var _i14 = s.__key;
          if ((o.has(_i14) || (o.add(_i14), r.push(s)), s === e)) break;
          var _l7 = ls(s) ? (n ? s.getFirstChild() : s.getLastChild()) : null;
          if (null !== _l7) {
            s = _l7;
            continue;
          }
          var _c7 = n ? s.getNextSibling() : s.getPreviousSibling();
          if (null !== _c7) {
            s = _c7;
            continue;
          }
          var _a6 = s.getParentOrThrow();
          if ((o.has(_a6.__key) || r.push(_a6), _a6 === e)) break;
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
            null !== _u7 || o.has(_f5.__key) || r.push(_f5);
          } while (null === _u7);
          s = _u7;
        }
        return (n || r.reverse(), r);
      };
      _proto6.isDirty = function isDirty() {
        var t = Ho()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto6.getLatest = function getLatest() {
        if (lr(this)) return this;
        var e = ii(this.__key);
        return (null === e && t(113), e);
      };
      _proto6.getWritable = function getWritable() {
        if (lr(this)) return this;
        Bo();
        var t = Uo(),
          e = Ho(),
          n = t._nodeMap,
          r = this.__key,
          o = this.getLatest(),
          s = e._cloneNotNeeded,
          i = _o();
        if ((null !== i && i.setCachedNodes(null), s.has(r))) return (ri(o), o);
        var l = pl(o);
        return (s.add(r), ri(l), n.set(r, l), l);
      };
      _proto6.getTextContent = function getTextContent() {
        return Hl(this);
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
        return new _K2(t);
      };
      _proto6.exportDOM = function exportDOM(t) {
        return { element: this.createDOM(t._config, t) };
      };
      _proto6.exportJSON = function exportJSON() {
        var t = this.__state ? this.__state.toJSON() : void 0;
        return babelHelpers["extends"]({ type: this.__type, version: 1 }, t);
      };
      ar.importJSON = function importJSON(e) {
        t(18, this.name);
      };
      _proto6.updateFromJSON = function updateFromJSON(t) {
        return (function (t, e) {
          var n = t.getWritable(),
            r = e.$;
          var o = r;
          for (var _t65 of gt(n).flatKeys)
            _t65 in e &&
              ((void 0 !== o && o !== r) ||
                (o = babelHelpers["extends"]({}, r)),
              (o[_t65] = e[_t65]));
          return ((n.__state || o) && ht(t).updateFromJSON(o), n);
        })(this, t);
      };
      ar.transform = function transform() {
        return null;
      };
      _proto6.remove = function remove(t) {
        sr(this, !0, t);
      };
      _proto6.replace = function replace(n, r) {
        Bo();
        var o = _o();
        (null !== o && (o = o.clone()), Gi(this, n));
        var s = this.getLatest(),
          i = this.__key,
          l = n.__key,
          c = n.getWritable(),
          a = this.getParentOrThrow().getWritable(),
          u = a.__size,
          f = c.getParent(),
          d = null !== f ? c.getIndexWithinParent() : -1;
        (ei(c), null !== f && Gr(o) && yo(o, f, d, -1));
        var h = s.getPreviousSibling(),
          g = s.getNextSibling(),
          _ = s.__prev,
          p = s.__next,
          y = s.__parent;
        if ((sr(s, !1, !0), null === h)) a.__first = l;
        else {
          h.getWritable().__next = l;
        }
        if (((c.__prev = _), null === g)) a.__last = l;
        else {
          g.getWritable().__prev = l;
        }
        ((c.__next = p), (c.__parent = y), (a.__size = u));
        var m = 0;
        r &&
          ((ls(this) && ls(c)) || t(139),
          (m = c.getChildrenSize()),
          c.splice(m, 0, this.getChildren()));
        var x = Ll(this);
        if (x.length > 0) {
          (Ml(this) && Ml(c)) ||
            e(
              "replace: node " +
                this.__key +
                " has slots but " +
                c.__key +
                " cannot host them; only ElementNodes and DecoratorNodes can host slots.",
            );
          for (var _t66 of x) {
            var _e63 = Rl(this, _t66);
            null !== _e63 && (Gl(this, _t66), Jl(c, _t66, _e63));
          }
        }
        if (Gr(o)) {
          gi(o);
          var _t67 = o.anchor,
            _e64 = o.focus;
          (_t67.key === i &&
            (r && "element" === _t67.type
              ? _t67.set(c.__key, m + _t67.offset, "element")
              : Yr(_t67, c)),
            _e64.key === i &&
              (r && "element" === _e64.type
                ? _e64.set(c.__key, m + _e64.offset, "element")
                : Yr(_e64, c)));
        }
        return (si() === i && oi(l), c);
      };
      _proto6.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (Bo(), Gi(this, t));
        var n = this.getWritable(),
          r = t.getWritable();
        Vl(this.getParentOrThrow());
        var o = r.getParent(),
          s = _o();
        var i = !1,
          l = !1;
        if (null !== o) {
          var _n43 = t.getIndexWithinParent();
          if (Gr(s)) {
            var _t68 = o.__key,
              _e65 = s.anchor,
              _r28 = s.focus;
            ((i =
              "element" === _e65.type &&
              _e65.key === _t68 &&
              _e65.offset === _n43 + 1),
              (l =
                "element" === _r28.type &&
                _r28.key === _t68 &&
                _r28.offset === _n43 + 1));
          }
          (ei(r), e && Gr(s) && yo(s, o, _n43, -1));
        } else ei(r);
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
          e && Gr(s))
        ) {
          var _t69 = this.getIndexWithinParent();
          yo(s, a, _t69 + 1);
          var _e66 = a.__key;
          (i && s.anchor.set(_e66, _t69 + 2, "element"),
            l && s.focus.set(_e66, _t69 + 2, "element"));
        }
        return t;
      };
      _proto6.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (Bo(), Gi(this, t));
        var n = this.getWritable(),
          r = t.getWritable();
        Vl(this.getParentOrThrow());
        var o = r.__key,
          s = _o(),
          i = r.getParent(),
          l = null !== i ? r.getIndexWithinParent() : -1;
        (ei(r), null !== i && e && Gr(s) && yo(s, i, l, -1));
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
          e && Gr(s))
        ) {
          yo(s, this.getParentOrThrow(), f);
        }
        return t;
      };
      _proto6.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto6.createParentElementNode = function createParentElementNode() {
        return Os();
      };
      _proto6.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto6.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto6.selectPrevious = function selectPrevious(t, e) {
        Bo();
        var n = Dl(this);
        if (null !== n) return n.selectPrevious(t, e);
        var r = this.getPreviousSibling(),
          o = this.getParentOrThrow();
        if (null === r) return o.select(0, 0);
        if (ls(r)) return r.select();
        if (!$r(r)) {
          var _t70 = r.getIndexWithinParent() + 1;
          return o.select(_t70, _t70);
        }
        return r.select(t, e);
      };
      _proto6.selectNext = function selectNext(t, e) {
        Bo();
        var n = Dl(this);
        if (null !== n) return n.selectNext(t, e);
        var r = this.getNextSibling(),
          o = this.getParentOrThrow();
        if (null === r) return o.select();
        if (ls(r)) return r.select(0, 0);
        if (!$r(r)) {
          var _t71 = r.getIndexWithinParent();
          return o.select(_t71, _t71);
        }
        return r.select(t, e);
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
      return ar;
    })();
    function ur(t) {
      return t instanceof _ar5;
    }
    var fr = "history-merge",
      dr = "collaboration",
      hr = "skip-scroll-into-view",
      gr = "skip-dom-selection",
      _r = "skip-selection-focus",
      pr = "composition-start",
      yr = "composition-end",
      mr = "!important";
    function xr(t) {
      var e = {};
      if (!t) return e;
      var n = "",
        r = "",
        o = null,
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
        else if (null === o) {
          if ("/" !== _a7 || "*" !== t[_f6 + 1]) {
            if ('"' !== _a7 && "'" !== _a7) {
              if ("(" !== _a7) {
                if (")" !== _a7) {
                  if (l || ":" !== _a7 || 0 !== c) {
                    if (";" === _a7 && 0 === c) {
                      -1 !== u &&
                        (l ? (r += t.slice(u, _f6)) : (n += t.slice(u, _f6)),
                        (u = -1));
                      var _o26 = n.trim(),
                        _s16 = r.trim();
                      ("" !== _o26 && "" !== _s16 && (e[_o26] = _s16),
                        (n = ""),
                        (r = ""),
                        (l = !1));
                      continue;
                    }
                    -1 === u && (u = _f6);
                  } else
                    (-1 !== u && ((n += t.slice(u, _f6)), (u = -1)), (l = !0));
                } else (-1 === u && (u = _f6), (c = Math.max(0, c - 1)));
              } else (-1 === u && (u = _f6), c++);
            } else (-1 === u && (u = _f6), (o = _a7));
          } else
            (-1 !== u &&
              (l ? (r += t.slice(u, _f6)) : (n += t.slice(u, _f6)), (u = -1)),
              (s = !0),
              _f6++);
        } else
          (-1 === u && (u = _f6),
            "\\" === _a7 ? (i = !0) : _a7 === o && (o = null));
      }
      -1 !== u && (l ? (r += t.slice(u, a)) : (n += t.slice(u, a)));
      var f = n.trim(),
        d = r.trim();
      return ("" !== f && "" !== d && (e[f] = d), e);
    }
    function Cr(t, e, n) {
      var r = n.trimEnd(),
        o = r.length - 10;
      o >= 0 && r.slice(o).toLowerCase() === mr
        ? t.setProperty(e, r.slice(0, o).trim(), "important")
        : t.setProperty(e, n, "");
    }
    function Sr(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var r = xr(n),
        o = xr(e);
      for (var _e67 in o) (delete r[_e67], Cr(t, _e67, o[_e67]));
      for (var _e68 in r) t.removeProperty(_e68);
    }
    function Tr(t, e) {
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
    function Nr(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function vr(t, e, n, r, o) {
      var s = r.classList;
      var i = Mi(o, "base");
      (void 0 !== i && s.add.apply(s, i),
        (i = Mi(o, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== i &&
        (8 & n && 4 & n
          ? ((l = !0), c || s.add.apply(s, i))
          : c && s.remove.apply(s, i));
      for (var _t72 in A) {
        var _r29 = A[_t72];
        if (((i = Mi(o, _t72)), void 0 !== i))
          if (n & _r29) {
            if (l && ("underline" === _t72 || "strikethrough" === _t72)) {
              e & _r29 && s.remove.apply(s, i);
              continue;
            }
            (0 === (e & _r29) ||
              (c && "underline" === _t72) ||
              "strikethrough" === _t72) &&
              s.add.apply(s, i);
          } else e & _r29 && s.remove.apply(s, i);
      }
    }
    function kr(t, e, n) {
      var r = n.isComposing(),
        o = t + (r ? N : ""),
        i = cl(),
        l = al(i).$getDOMSlot(n, e, i),
        c = l.getFirstChild();
      if (null === c || c.nodeType !== Node.TEXT_NODE)
        return void l.insertChild(document.createTextNode(o));
      var a = c,
        u = a.nodeValue;
      if (u !== o)
        if (r || s) {
          var _ref23 = (function (t, e) {
              var n = t.length,
                r = e.length;
              var o = 0,
                s = 0;
              for (; o < n && o < r && t[o] === e[o]; ) o++;
              for (; s + o < n && s + o < r && t[n - s - 1] === e[r - s - 1]; )
                s++;
              return [o, n - o - s, e.slice(o, r - s)];
            })(u, o),
            _t73 = _ref23[0],
            _e69 = _ref23[1],
            _n44 = _ref23[2];
          (0 !== _e69 && a.deleteData(_t73, _e69), a.insertData(_t73, _n44));
        } else a.nodeValue = o;
    }
    function br(t, e, n, r, o, s) {
      kr(o, t, e);
      var i = s.theme.text;
      void 0 !== i && vr(0, 0, r, t, i);
    }
    function Or(t, e) {
      var n = document.createElement(e);
      return (n.appendChild(t), n);
    }
    var _Er2 = (function (_ar) {
      function Er(t, e) {
        var _this;
        if (t === void 0) {
          t = "";
        }
        ((_this = _ar.call(this, e) || this),
          (_this.__text = t),
          (_this.__format = 0),
          (_this.__style = ""),
          (_this.__mode = 0),
          (_this.__detail = 0));
        return _this;
      }
      babelHelpers.inheritsLoose(Er, _ar);
      Er.getType = function getType() {
        return "text";
      };
      Er.clone = function clone(t) {
        return new Er(t.__text, t.__key);
      };
      var _proto7 = Er.prototype;
      _proto7.afterCloneFrom = function afterCloneFrom(t) {
        (_ar.prototype.afterCloneFrom.call(this, t),
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
        return this.__key === si();
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
        return Zs(this.getLatest().__format, t, e);
      };
      _proto7.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto7.isInline = function isInline() {
        return !0;
      };
      _proto7.createDOM = function createDOM(t, e) {
        var n = this.__format,
          r = Tr(0, n),
          o = Nr(0, n),
          s = null === r ? o : r,
          i = document.createElement(s);
        var l = i;
        (this.hasFormat("code") && i.setAttribute("spellcheck", "false"),
          null !== r && ((l = document.createElement(o)), i.appendChild(l)));
        br(l, this, 0, n, this.__text, t);
        var c = this.__style;
        return ("" !== c && Sr(i.style, c), i);
      };
      _proto7.updateDOM = function updateDOM(e, n, r) {
        var o = this.__text,
          s = e.__format,
          i = this.__format,
          l = Tr(0, s),
          c = Tr(0, i),
          a = Nr(0, s),
          u = Nr(0, i);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _e70 = n.firstChild;
          null == _e70 && t(48);
          var _s17 = document.createElement(u);
          return (br(_s17, this, 0, i, o, r), n.replaceChild(_s17, _e70), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && t(49)),
          kr(o, f, this));
        var d = r.theme.text;
        void 0 !== d && s !== i && vr(0, s, i, f, d);
        var h = e.__style,
          g = this.__style;
        return (h !== g && Sr(n.style, g, h), !1);
      };
      Er.importDOM = function importDOM() {
        return {
          "#text": function text() {
            return { conversion: Ir, priority: 0 };
          },
          b: function b() {
            return { conversion: Ar, priority: 0 };
          },
          code: function code() {
            return { conversion: Lr, priority: 0 };
          },
          em: function em() {
            return { conversion: Lr, priority: 0 };
          },
          i: function i() {
            return { conversion: Lr, priority: 0 };
          },
          mark: function mark() {
            return { conversion: Lr, priority: 0 };
          },
          s: function s() {
            return { conversion: Lr, priority: 0 };
          },
          span: function span() {
            return { conversion: Mr, priority: 0 };
          },
          strong: function strong() {
            return { conversion: Lr, priority: 0 };
          },
          sub: function sub() {
            return { conversion: Lr, priority: 0 };
          },
          sup: function sup() {
            return { conversion: Lr, priority: 0 };
          },
          u: function u() {
            return { conversion: Lr, priority: 0 };
          },
        };
      };
      Er.importJSON = function importJSON(t) {
        return Rr().updateFromJSON(t);
      };
      _proto7.updateFromJSON = function updateFromJSON(t) {
        return _ar.prototype.updateFromJSON
          .call(this, t)
          .setTextContent(t.text)
          .setFormat(t.format)
          .setDetail(t.detail)
          .setMode(t.mode)
          .setStyle(t.style);
      };
      _proto7.exportDOM = function exportDOM(e) {
        var _ar$prototype$exportD = _ar.prototype.exportDOM.call(this, e),
          n = _ar$prototype$exportD.element;
        return (
          tl(n) || t(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = Or(n, "b")),
          this.hasFormat("italic") && (n = Or(n, "i")),
          this.hasFormat("strikethrough") && (n = Or(n, "s")),
          this.hasFormat("underline") && (n = Or(n, "u")),
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
          _ar.prototype.exportJSON.call(this),
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
        var e = Zs(this.getFormat(), t, null);
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
        Bo();
        var n = t,
          r = e;
        var o = _o(),
          s = this.getTextContent(),
          i = this.__key;
        if ("string" == typeof s) {
          var _t74 = s.length;
          (void 0 === n && (n = _t74), void 0 === r && (r = _t74));
        } else ((n = 0), (r = 0));
        if (!Gr(o)) return uo(i, n, i, r, "text", "text");
        {
          var _t75 = si();
          ((_t75 !== o.anchor.key && _t75 !== o.focus.key) || oi(i),
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
          s = o.__text,
          i = n.length;
        var l = t;
        l < 0 && ((l = i + l), l < 0 && (l = 0));
        var c = _o();
        if (r && Gr(c)) {
          var _e71 = t + i;
          c.setTextNodeRange(o, _e71, o, _e71);
        }
        var a = s.slice(0, l) + n + s.slice(l + e);
        return ((o.__text = a), o);
      };
      _proto7.canInsertTextBefore = function canInsertTextBefore() {
        return !0;
      };
      _proto7.canInsertTextAfter = function canInsertTextAfter() {
        return !0;
      };
      _proto7.splitText = function splitText() {
        Bo();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var r = e.__key,
          o = si(),
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
        for (var _e72 = 0, _r30 = 0; _e72 < s && _r30 <= l; _r30++) {
          var _o27 = t[_r30];
          _o27 > _e72 && (i.push(n.slice(_e72, _o27)), (_e72 = _o27));
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
        var m = _o();
        if (Gr(m)) {
          var _ref24 = m.isBackward()
              ? [m.focus, m.anchor]
              : [m.anchor, m.focus],
            _t76 = _ref24[0],
            _e73 = _ref24[1];
          ("text" === _t76.type && _t76.key === r && (p = _t76),
            "text" === _e73.type && _e73.key === r && (y = _e73));
        }
        e.isSegmented()
          ? ((f = Rr(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = xt(e, f)),
            (_ = !0))
          : (f = e.setTextContent(a));
        var x = [f];
        for (var _t77 = 1; _t77 < c; _t77++) {
          var _n45 = Rr(i[_t77]);
          ((_n45.__format = d),
            (_n45.__style = h),
            (_n45.__detail = g),
            (_n45.__state = xt(e, _n45)));
          var _s18 = _n45.__key;
          (o === r && oi(_s18), x.push(_n45));
        }
        var C = p ? p.offset : null,
          S = y ? y.offset : null;
        var T = 0;
        for (var _t78 of x) {
          if (!p && !y) break;
          var _e74 = T + _t78.getTextContentSize();
          if (
            (null !== p &&
              null !== C &&
              C <= _e74 &&
              C >= T &&
              (p.set(_t78.getKey(), C - T, "text"), C < _e74 && (p = null)),
            null !== y && null !== S && S <= _e74 && S >= T)
          ) {
            y.set(_t78.getKey(), S - T, "text");
            break;
          }
          T = _e74;
        }
        if (null !== u) {
          !(function (t) {
            var e = t.getPreviousSibling(),
              n = t.getNextSibling();
            null !== e && ri(e);
            null !== n && ri(n);
          })(this);
          var _t79 = u.getWritable(),
            _e75 = this.getIndexWithinParent();
          (_
            ? (_t79.splice(_e75, 0, x), this.remove())
            : _t79.splice(_e75, 1, x),
            Gr(m) && yo(m, u, _e75, c - 1));
        }
        return x;
      };
      _proto7.mergeWithSibling = function mergeWithSibling(e) {
        var n = e === this.getPreviousSibling();
        n || e === this.getNextSibling() || t(50);
        var r = this.__key,
          o = e.__key,
          s = this.__text,
          i = s.length;
        si() === o && oi(r);
        var l = _o();
        if (Gr(l)) {
          var _t80 = l.anchor,
            _s19 = l.focus;
          (null !== _t80 && _t80.key === o && Co(_t80, n, r, e, i),
            null !== _s19 && _s19.key === o && Co(_s19, n, r, e, i));
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
      return Er;
    })(_ar5);
    function Mr(t) {
      return { forChild: Kr(t.style), node: null };
    }
    function Ar(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: Kr(e.style, n ? void 0 : "bold"), node: null };
    }
    var wr = new WeakMap();
    function Dr(t) {
      if (!tl(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function Ir(e) {
      var n = e;
      null === e.parentElement && t(129);
      var r = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var r = [t];
          for (; null !== n && void 0 === (e = wr.get(n)) && !Dr(n); )
            (r.push(n), (n = n.parentNode));
          var o = void 0 === e ? n : e;
          for (var _t81 = 0; _t81 < r.length; _t81++) wr.set(r[_t81], o);
          return o;
        })(n)
      )
        return { node: ko(r) };
      if (((r = r.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === r))
        return { node: null };
      if (" " === r[0]) {
        var _t82 = n,
          _e76 = !0;
        for (; null !== _t82 && null !== (_t82 = Pr(_t82, !1)); ) {
          var _n46 = _t82.textContent || "";
          if (_n46.length > 0) {
            (/[ \t\n]$/.test(_n46) && (r = r.slice(1)), (_e76 = !1));
            break;
          }
        }
        _e76 && (r = r.slice(1));
      }
      if (" " === r[r.length - 1]) {
        var _t83 = n,
          _e77 = !0;
        for (; null !== _t83 && null !== (_t83 = Pr(_t83, !0)); ) {
          if (
            (_t83.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e77 = !1;
            break;
          }
        }
        _e77 && (r = r.slice(0, r.length - 1));
      }
      return "" === r ? { node: null } : { node: Rr(r) };
    }
    function Pr(t, e) {
      var n = t;
      for (;;) {
        var _t84 = void 0;
        for (; null === (_t84 = e ? n.nextSibling : n.previousSibling); ) {
          var _t85 = n.parentElement;
          if (null === _t85) return null;
          n = _t85;
        }
        if (((n = _t84), tl(n))) {
          var _t86 = n.style.display;
          if (
            ("" === _t86 && !ol(n)) ||
            ("" !== _t86 && !_t86.startsWith("inline"))
          )
            return null;
        }
        var _r31 = n;
        for (; null !== (_r31 = e ? n.firstChild : n.lastChild); ) n = _r31;
        if (qs(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var Fr = {
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
    function Lr(t) {
      var e = Fr[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: Kr(t.style, e), node: null };
    }
    function Rr(t) {
      if (t === void 0) {
        t = "";
      }
      return Ji(new _Er2(t));
    }
    function $r(t) {
      return t instanceof _Er2;
    }
    function Kr(t, e) {
      var n = t.fontWeight,
        r = t.textDecoration.split(" "),
        o = "700" === n || "bold" === n,
        s = r.includes("line-through"),
        i = "italic" === t.fontStyle,
        l = r.includes("underline"),
        c = t.verticalAlign;
      return function (t) {
        return $r(t)
          ? (o && !t.hasFormat("bold") && t.toggleFormat("bold"),
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
    var _zr = (function (_Er) {
      function zr(t) {
        var _this2;
        ((_this2 = _Er.call(this, "\t", t) || this), (_this2.__detail = 2));
        return _this2;
      }
      babelHelpers.inheritsLoose(zr, _Er);
      zr.getType = function getType() {
        return "tab";
      };
      zr.clone = function clone(t) {
        return new zr(t.__key);
      };
      zr.importDOM = function importDOM() {
        return null;
      };
      var _proto8 = zr.prototype;
      _proto8.createDOM = function createDOM(t) {
        var e = _Er.prototype.createDOM.call(this, t),
          n = Mi(t.theme, "tab");
        if (void 0 !== n) {
          var _e$classList;
          (_e$classList = e.classList).add.apply(_e$classList, n);
        }
        return e;
      };
      zr.importJSON = function importJSON(t) {
        return Br().updateFromJSON(t);
      };
      _proto8.setTextContent = function setTextContent(t) {
        return _Er.prototype.setTextContent.call(this, "\t");
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
      return zr;
    })(_Er2);
    function Br() {
      return Ji(new _zr());
    }
    function Wr(t) {
      return t instanceof _zr;
    }
    var _Ur = (function () {
      function Ur(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto9 = Ur.prototype;
      _proto9.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto9.isBefore = function isBefore(t) {
        if (this.key === t.key) return this.offset < t.offset;
        return vc($c(Mc(this, "next")), $c(Mc(t, "next"))) < 0;
      };
      _proto9.getNode = function getNode() {
        var e = ii(this.key);
        return (null === e && t(20), e);
      };
      _proto9.set = function set(t, e, n, r) {
        var o = this._selection,
          s = this.key;
        (r && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          zo() ||
            (si() === s && oi(t),
            null !== o &&
              (o.setCachedNodes(null),
              Gr(o) && (o._cachedIsBackward = null),
              (o.dirty = !0))));
      };
      return Ur;
    })();
    function Hr(t, e, n) {
      return new _Ur(t, e, n);
    }
    function jr(t, e) {
      var n = e.__key,
        r = t.offset,
        o = "element";
      if ($r(e)) {
        o = "text";
        var _t87 = e.getTextContentSize();
        r > _t87 && (r = _t87);
      } else if (!ls(e)) {
        var _t88 = e.getNextSibling();
        if ($r(_t88)) ((n = _t88.__key), (r = 0), (o = "text"));
        else {
          var _t89 = e.getParent();
          _t89 && ((n = _t89.__key), (r = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, r, o);
    }
    function Yr(t, e) {
      if (ls(e)) {
        var _n47 = e.getLastDescendant();
        ls(_n47) || $r(_n47) ? jr(t, _n47) : jr(t, e);
      } else jr(t, e);
    }
    var _Jr = (function () {
      function Jr(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto0 = Jr.prototype;
      _proto0.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto0.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto0.is = function is(t) {
        if (!qr(t)) return !1;
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
        return new Jr(new Set(this._nodes));
      };
      _proto0.extract = function extract() {
        return this.getNodes();
      };
      _proto0.insertRawText = function insertRawText(t) {};
      _proto0.insertText = function insertText() {};
      _proto0.insertNodes = function insertNodes(t) {
        var e = this.getNodes().filter(function (t) {
            return null === wl(t);
          }),
          n = e.length;
        if (0 === n) return;
        var r = e[n - 1];
        var o;
        if ($r(r)) o = r.select();
        else {
          var _t90 = r.getIndexWithinParent() + 1;
          o = r.getParentOrThrow().select(_t90, _t90);
        }
        o.insertNodes(t);
        for (var _t91 = 0; _t91 < n; _t91++) e[_t91].remove();
      };
      _proto0.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = this._nodes,
          n = [];
        for (var _t92 of e) {
          var _e78 = ii(_t92);
          null !== _e78 && n.push(_e78);
        }
        return (zo() || (this._cachedNodes = n), n);
      };
      _proto0.getTextContent = function getTextContent() {
        var t = this.getNodes();
        var e = "";
        for (var _n48 = 0; _n48 < t.length; _n48++)
          e += t[_n48].getTextContent();
        return e;
      };
      _proto0.deleteNodes = function deleteNodes() {
        var t = this.getNodes().filter(function (t) {
          return null === wl(t);
        });
        if ((_o() || po()) === this && t[0]) {
          var _e79 = fc(t[0], "next");
          wc(Tc(_e79, _e79));
        }
        for (var _e80 of t) _e80.remove();
      };
      return Jr;
    })();
    function Gr(t) {
      return t instanceof _Vr;
    }
    var _Vr = (function () {
      function Vr(t, e, n, r) {
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
      var _proto1 = Vr.prototype;
      _proto1.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto1.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto1.is = function is(t) {
        return (
          !!Gr(t) &&
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
            s = new Set();
          for (var _n49 of t)
            if (lc(_n49)) {
              var _t93 = _n49.origin;
              0 === e.length ? o.add(_t93) : (s.add(_t93), e.push(_t93));
            } else {
              var _t94 = _n49.origin;
              (ls(_t94) && s.has(_t94)) || e.push(_t94);
            }
          r && e.push(r.caret.origin);
          if (
            ic(t.focus) &&
            ls(t.focus.origin) &&
            null === t.focus.getNodeAtCaret()
          )
            for (
              var _n50 = _c(t.focus.origin, "previous");
              lc(_n50) &&
              o.has(_n50.origin) &&
              !_n50.origin.isEmpty() &&
              _n50.origin.is(e[e.length - 1]);
              _n50 = yc(_n50)
            )
              (o["delete"](_n50.origin), e.pop());
          for (; e.length > 1; ) {
            var _t95 = e[e.length - 1];
            if (!ls(_t95) || s.has(_t95) || _t95.isEmpty() || o.has(_t95))
              break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n51 = $c(t.anchor),
              _r32 = $c(t.anchor.getFlipped()),
              _o28 = function _o28(t) {
                return sc(t) ? t.origin : t.getNodeAtCaret();
              },
              _s20 =
                _o28(_n51) ||
                _o28(_r32) ||
                (t.anchor.getNodeAtCaret() ? _n51.origin : _r32.origin);
            e.push(_s20);
          }
          return e;
        })(Bc(Ic(this), "next"));
        return (zo() || (this._cachedNodes = e), e);
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
          s = r.isBefore(o),
          _Qr = Qr(this),
          i = _Qr[0],
          l = _Qr[1];
        var c = "",
          a = !0;
        for (var _u8 = 0; _u8 < t.length; _u8++) {
          var _f7 = t[_u8];
          if (ls(_f7) && !_f7.isInline()) {
            a || (c += "\n");
            var _t96 = "";
            for (var _e81 of Ll(_f7)) {
              var _n52 = Rl(_f7, _e81);
              null !== _n52 && (_t96 += _n52.getTextContent());
            }
            "" !== _t96 ? ((c += _t96), (a = !1)) : (a = !_f7.isEmpty());
          } else if (((a = !1), $r(_f7))) {
            var _t97 = _f7.getTextContent();
            (_f7 === e
              ? _f7 === n
                ? ("element" === r.type &&
                    "element" === o.type &&
                    o.offset !== r.offset) ||
                  (_t97 = i < l ? _t97.slice(i, l) : _t97.slice(l, i))
                : (_t97 = s ? _t97.slice(i) : _t97.slice(l))
              : _f7 === n && (_t97 = s ? _t97.slice(0, l) : _t97.slice(0, i)),
              (c += _t97));
          } else
            (!us(_f7) && !Ss(_f7)) ||
              (_f7 === n && this.isCollapsed()) ||
              (c += _f7.getTextContent());
        }
        return c;
      };
      _proto1.applyDOMRange = function applyDOMRange(t) {
        var e = Ho(),
          n = e.getEditorState()._selection,
          r = co(
            t.startContainer,
            t.startOffset,
            t.endContainer,
            t.endOffset,
            e,
            n,
          );
        if (null === r) return;
        var o = r[0],
          s = r[1],
          i = r[2];
        (this.anchor.set(o.key, o.offset, o.type, !0),
          this.focus.set(s.key, s.offset, s.type, !0),
          i && (this.dirty = !0),
          Nt(this));
      };
      _proto1.clone = function clone() {
        var t = this.anchor,
          e = this.focus;
        return new Vr(
          Hr(t.key, t.offset, t.type),
          Hr(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto1.toggleFormat = function toggleFormat(t) {
        ((this.format = Zs(this.format, t, null)), (this.dirty = !0));
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
        this.insertNodes(ko(t));
      };
      _proto1.insertText = function insertText(e) {
        var n = this.anchor,
          r = this.focus,
          o = this.format,
          s = this.style;
        var i = n,
          l = r;
        (!this.isCollapsed() && r.isBefore(n) && ((i = r), (l = n)),
          "element" === i.type &&
            (function (t, e, n, r) {
              var o = t.getNode(),
                s = o.getChildAtIndex(t.offset),
                i = Rr();
              if ((i.setFormat(n), i.setStyle(r), Es(s))) s.splice(0, 0, [i]);
              else if (null !== s) {
                var _t98 = ds(o) ? Os().append(i) : i;
                s.insertBefore(_t98);
              } else if (ji(o)) {
                var _t99 = o.getLastChild();
                ls(_t99) && !_t99.isInline() && _t99.isEmpty()
                  ? _t99.append(i)
                  : o.append(Os().append(i));
              } else o.append(i);
              (t.is(e) && e.set(i.__key, 0, "text"), t.set(i.__key, 0, "text"));
            })(i, l, o, s),
          "element" === l.type && Ac(l, $c(Mc(l, "next"))));
        var c = i.offset;
        var a = l.offset;
        var u = this.getNodes(),
          f = u.length;
        var d = u[0];
        $r(d) || t(26);
        var h = d.getTextContent().length,
          g = d.getParentOrThrow();
        var _ = u[f - 1];
        if (
          (1 === f &&
            "element" === l.type &&
            ((a = h), l.set(i.key, a, "text")),
          this.isCollapsed() &&
            c === h &&
            (Vs(d) ||
              !d.canInsertTextAfter() ||
              (!g.canInsertTextAfter() && null === d.getNextSibling())))
        ) {
          var _t100 = d.getNextSibling();
          var _n53;
          if (
            ($r(_t100) && _t100.canInsertTextBefore() && !Vs(_t100)
              ? (_n53 = _t100)
              : ((_n53 = Rr()),
                _n53.setFormat(o),
                _n53.setStyle(s),
                g.canInsertTextAfter()
                  ? d.insertAfter(_n53)
                  : g.insertAfter(_n53)),
            _n53.select(0, 0),
            (d = _n53),
            "" !== e)
          )
            return void this.insertText(e);
        } else if (
          this.isCollapsed() &&
          0 === c &&
          (Vs(d) ||
            !d.canInsertTextBefore() ||
            (!g.canInsertTextBefore() && null === d.getPreviousSibling()))
        ) {
          var _t101 = d.getPreviousSibling();
          var _n54;
          if (
            (!$r(_t101) || Vs(_t101)
              ? ((_n54 = Rr()),
                _n54.setFormat(o),
                g.canInsertTextBefore()
                  ? d.insertBefore(_n54)
                  : g.insertBefore(_n54))
              : (_n54 = _t101),
            _n54.select(),
            (d = _n54),
            "" !== e)
          )
            return void this.insertText(e);
        } else if (d.isSegmented() && c !== h) {
          var _t102 = Rr(d.getTextContent());
          (_t102.setFormat(o), d.replace(_t102), (d = _t102));
        } else if (!this.isCollapsed() && "" !== e) {
          var _t103 = _.getParent();
          if (
            !g.canInsertTextBefore() ||
            !g.canInsertTextAfter() ||
            (ls(_t103) &&
              (!_t103.canInsertTextBefore() || !_t103.canInsertTextAfter()))
          )
            return (
              this.insertText(""),
              oo(this.anchor, this.focus),
              void this.insertText(e)
            );
        }
        if (1 === f) {
          if (Gs(d)) {
            var _t104 = Rr(e);
            return (_t104.select(), void d.replace(_t104));
          }
          var _t105 = d.getFormat(),
            _n55 = d.getStyle();
          if (c !== a || (_t105 === o && _n55 === s)) {
            if (Wr(d)) {
              var _t106 = Rr(e);
              return (
                _t106.setFormat(o),
                _t106.setStyle(s),
                _t106.select(),
                void d.replace(_t106)
              );
            }
          } else {
            if ("" !== d.getTextContent()) {
              var _t107 = Rr(e);
              if (
                (_t107.setFormat(o), _t107.setStyle(s), _t107.select(), 0 === c)
              )
                d.insertBefore(_t107, !1);
              else {
                var _d$splitText = d.splitText(c),
                  _e82 = _d$splitText[0];
                _e82.insertAfter(_t107, !1);
              }
              return void (
                _t107.isComposing() &&
                "text" === this.anchor.type &&
                ((this.anchor.offset -= e.length),
                (this._cachedNodes = null),
                (this._cachedIsBackward = null))
              );
            }
            (d.setFormat(o), d.setStyle(s));
          }
          var _r33 = a - c;
          ((d = d.spliceText(c, _r33, e, !0)),
            "" === d.getTextContent()
              ? d.remove()
              : "text" === this.anchor.type &&
                ((this.format = _t105),
                (this.style = _n55),
                d.isComposing() &&
                  ((this.anchor.offset -= e.length),
                  (this._cachedNodes = null),
                  (this._cachedIsBackward = null))));
        } else {
          var _t108 = new Set([].concat(d.getParentKeys(), _.getParentKeys())),
            _n56 = ls(d) ? d : d.getParentOrThrow();
          var _r34 = ls(_) ? _ : _.getParentOrThrow(),
            _o29 = _;
          if (!_n56.is(_r34) && _r34.isInline())
            do {
              ((_o29 = _r34), (_r34 = _r34.getParentOrThrow()));
            } while (_r34.isInline());
          if (
            ("text" === l.type && (0 !== a || "" === _.getTextContent())) ||
            ("element" === l.type && _.getIndexWithinParent() < a)
          ) {
            if ($r(_) && !Gs(_) && a !== _.getTextContentSize()) {
              if (_.isSegmented()) {
                var _t109 = Rr(_.getTextContent());
                (_.replace(_t109), (_ = _t109));
              }
              (ds(l.getNode()) ||
                "text" !== l.type ||
                (_ = _.spliceText(0, a, "")),
                _t108.add(_.__key));
            } else {
              var _t110 = _.getParentOrThrow();
              _t110.canBeEmpty() || 1 !== _t110.getChildrenSize()
                ? _.remove()
                : _t110.remove();
            }
          } else _t108.add(_.__key);
          var _s21 = _r34.getChildren(),
            _i15 = new Set(u),
            _g5 = _n56.is(_r34),
            _p2 = _n56.isInline() && null === d.getNextSibling() ? _n56 : d;
          for (var _t111 = _s21.length - 1; _t111 >= 0; _t111--) {
            var _e83 = _s21[_t111];
            if (_e83.is(d) || (ls(_e83) && _e83.isParentOf(d))) break;
            _e83.isAttached() &&
              (!_i15.has(_e83) || _e83.is(_o29)
                ? _g5 || _p2.insertAfter(_e83, !1)
                : _e83.remove());
          }
          if (!_g5) {
            var _e84 = _r34,
              _n57 = null;
            for (; null !== _e84; ) {
              var _r35 = _e84.getChildren(),
                _o30 = _r35.length;
              ((0 === _o30 || _r35[_o30 - 1].is(_n57)) &&
                (_t108["delete"](_e84.__key), (_n57 = _e84)),
                (_e84 = _e84.getParent()));
            }
          }
          if (Gs(d)) {
            if (c === h) d.select();
            else {
              var _t112 = Rr(e);
              (_t112.select(), d.replace(_t112));
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
            var _n58 = u[_e85],
              _r36 = _n58.__key;
            _t108.has(_r36) || _n58.remove();
          }
        }
      };
      _proto1.removeText = function removeText() {
        var t = _o() === this;
        (Dc(this, Rc(Ic(this))), t && _o() !== this && gi(this));
      };
      _proto1.formatText = function formatText(t, e) {
        var _d$splitText2, _p$splitText;
        if (e === void 0) {
          e = null;
        }
        if (this.isCollapsed()) return (this.toggleFormat(t), void oi(null));
        var n = this.getNodes(),
          r = [];
        for (var _t113 of n) $r(_t113) && r.push(_t113);
        var o = function o(e) {
            n.forEach(function (n) {
              if (ls(n)) {
                var _r37 = n.getFormatFlags(t, e);
                n.setTextFormat(_r37);
              }
            });
          },
          s = r.length;
        if (0 === s) return (this.toggleFormat(t), oi(null), void o(e));
        var i = this.anchor,
          l = this.focus,
          c = this.isBackward(),
          a = c ? l : i,
          u = c ? i : l;
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
        var _ = s - 1;
        var p = r[_];
        var y = "text" === u.type ? u.offset : p.getTextContentSize();
        if (d.is(p)) {
          if (h === y) return;
          if (Vs(d) || (0 === h && y === d.getTextContentSize()))
            d.setFormat(g);
          else {
            var _t114 = d.splitText(h, y),
              _e86 = 0 === h ? _t114[0] : _t114[1];
            (_e86.setFormat(g),
              "text" === a.type && a.set(_e86.__key, 0, "text"),
              "text" === u.type && u.set(_e86.__key, y - h, "text"));
          }
          return void (this.format = g);
        }
        (0 === h ||
          Vs(d) ||
          ((_d$splitText2 = d.splitText(h)), (d = _d$splitText2[1]), (h = 0)),
          d.setFormat(g));
        var m = p.getFormatFlags(t, g);
        y > 0 &&
          (y === p.getTextContentSize() ||
            Vs(p) ||
            ((_p$splitText = p.splitText(y)),
            (p = _p$splitText[0]),
            _p$splitText),
          p.setFormat(m));
        for (var _e87 = f + 1; _e87 < _; _e87++) {
          var _n59 = r[_e87],
            _o31 = _n59.getFormatFlags(t, m);
          _n59.setFormat(_o31);
        }
        ("text" === a.type && a.set(d.__key, h, "text"),
          "text" === u.type && u.set(p.__key, y, "text"),
          (this.format = g | m));
      };
      _proto1.insertNodes = function insertNodes(n) {
        if (0 === n.length) return;
        this.isCollapsed() || this.removeText();
        var r = this.anchor.getNode();
        if ("element" === this.anchor.type && ls(r) && null !== wl(r)) {
          var _r$getFirstChild;
          var _t115 = r.isShadowRoot()
            ? (_r$getFirstChild = r.getFirstChild()) != null
              ? _r$getFirstChild
              : r.append(Os()).getFirstChild()
            : r.getFirstChild();
          if (null !== _t115) {
            _t115.selectStart();
            var _r38 = _o();
            return (
              Gr(_r38) ||
                e(
                  "Expected RangeSelection after redirecting into slot subtree",
                ),
              _r38.insertNodes(n)
            );
          }
        }
        if ("element" === this.anchor.type && ji(r)) {
          var _t116 = Ao(n),
            _e88 = _t116.getLastDescendant();
          return (
            r.splice(this.anchor.offset, 0, _t116.getChildren()),
            void (null !== _e88 && _e88.selectEnd())
          );
        }
        var o = (this.isBackward() ? this.focus : this.anchor).getNode(),
          s = bl(o, ll),
          i = n[n.length - 1];
        if (ls(s) && "__language" in s) {
          if ("__language" in n[0]) this.insertText(n[0].getTextContent());
          else {
            var _t117 = Oo(this);
            (s.splice(_t117, 0, n), i.selectEnd());
          }
          return;
        }
        if (
          !n.some(function (t) {
            return (ls(t) || us(t)) && !t.isInline();
          })
        ) {
          ls(s) || t(211, o.constructor.name, o.getType());
          var _e89 = Oo(this);
          return (s.splice(_e89, 0, n), void i.selectEnd());
        }
        if (ls(s) && null !== wl(s)) {
          var _t118 = Oo(this),
            _e90 = bo(n);
          s.splice(_t118, 0, _e90);
          var _r39 = _e90[_e90.length - 1];
          return void (void 0 !== _r39
            ? _r39.selectEnd()
            : s.select(_t118, _t118));
        }
        var l = Ao(n),
          c = l.getLastDescendant(),
          a = l.getChildren(),
          u = !ls(s) || !s.isEmpty() ? this.insertParagraph() : null,
          f = a[a.length - 1];
        var d = a[0];
        var h;
        (ls((h = d)) &&
          ll(h) &&
          !h.isEmpty() &&
          ls(s) &&
          (!s.isEmpty() || s.canMergeWhenEmpty()) &&
          (ls(s) || t(211, o.constructor.name, o.getType()),
          s.append.apply(s, d.getChildren()),
          (d = a[1])),
          d &&
            (null === s && t(212, o.constructor.name, o.getType()),
            (function (e, n) {
              var r = n.getParentOrThrow().getLastChild();
              var o = n;
              var s = [n];
              for (; o !== r; )
                (o.getNextSibling() || t(140),
                  (o = o.getNextSibling()),
                  s.push(o));
              var i = e;
              for (var _t119 of s) i = i.insertAfter(_t119);
            })(s, d)));
        var g = bl(c, ll);
        (u &&
          ls(g) &&
          (u.canMergeWhenEmpty() || ll(f)) &&
          (g.append.apply(g, u.getChildren()), u.remove()),
          ls(s) && s.isEmpty() && s.remove(),
          c.selectEnd());
        var _ = ls(s) ? s.getLastChild() : null;
        Ss(_) && g !== s && _.remove();
      };
      _proto1.insertParagraph = function insertParagraph() {
        var e = this.anchor.getNode();
        if ("element" === this.anchor.type && ji(e)) {
          var _t120 = Os();
          return (
            e.splice(this.anchor.offset, 0, [_t120]),
            _t120.select(),
            _t120
          );
        }
        var n = Oo(this),
          r = bl(this.anchor.getNode(), ll);
        if (null !== r && null !== wl(r)) return null;
        ls(r) || t(213);
        var o = r.getChildAtIndex(n),
          s = o ? [o].concat(o.getNextSiblings()) : [],
          i = r.insertNewAfter(this, !1);
        return i ? (i.append.apply(i, s), i.selectStart(), i) : null;
      };
      _proto1.insertLineBreak = function insertLineBreak(t) {
        var e = Cs();
        if ((this.insertNodes([e]), t)) {
          var _t121 = e.getParentOrThrow(),
            _n60 = e.getIndexWithinParent();
          _t121.select(_n60, _n60);
        }
      };
      _proto1.extract = function extract() {
        var _n$splitText;
        var t = [].concat(this.getNodes()),
          e = t.length;
        var n = t[0],
          r = t[e - 1];
        var _Qr2 = Qr(this),
          o = _Qr2[0],
          s = _Qr2[1],
          i = this.isBackward(),
          _ref25 = i ? [this.focus, this.anchor] : [this.anchor, this.focus],
          l = _ref25[0],
          c = _ref25[1],
          _ref26 = i ? [s, o] : [o, s],
          a = _ref26[0],
          u = _ref26[1];
        if (0 === e) return [];
        if (1 === e) {
          if ($r(n) && !this.isCollapsed()) {
            var _t122 = n.splitText(a, u),
              _e91 = 0 === a ? _t122[0] : _t122[1];
            return _e91
              ? (l.set(_e91.getKey(), 0, "text"),
                c.set(_e91.getKey(), _e91.getTextContentSize(), "text"),
                [_e91])
              : [];
          }
          return [n];
        }
        if (
          ($r(n) &&
            (a === n.getTextContentSize()
              ? t.shift()
              : 0 !== a &&
                ((_n$splitText = n.splitText(a)),
                (n = _n$splitText[1]),
                (t[0] = n),
                l.set(n.getKey(), 0, "text"))),
          $r(r))
        ) {
          var _r$splitText;
          var _e92 = r.getTextContent().length;
          0 === u
            ? t.pop()
            : u !== _e92 &&
              ((_r$splitText = r.splitText(u)),
              (r = _r$splitText[0]),
              (t[t.length - 1] = r),
              c.set(r.getKey(), r.getTextContentSize(), "text"));
        }
        return t;
      };
      _proto1.modify = function modify(t, e, n) {
        if (wo(this, t, e, n)) return;
        var r = "move" === t,
          o = Ho(),
          s = Qi(Wi(o));
        if (!s) return;
        var i = o._blockCursorElement,
          l = o._rootElement,
          c = this.focus.getNode();
        if (
          (null === l ||
            null === i ||
            !ls(c) ||
            c.isInline() ||
            c.canBeEmpty() ||
            Xi(i, o, l),
          this.dirty)
        ) {
          var _t123 = Fi(o, this.anchor.key),
            _e93 = Fi(o, this.focus.key);
          var _n61 = _t123,
            _r40 = _e93;
          if ("text" === this.anchor.type) {
            var _e94 = this.anchor.getNode();
            _n61 = $r(_e94) ? dl(_e94, _t123, o) : null;
          }
          if ("text" === this.focus.type) {
            var _t124 = this.focus.getNode();
            _r40 = $r(_t124) ? dl(_t124, _e93, o) : null;
          }
          _n61 &&
            _r40 &&
            So(s, _n61, this.anchor.offset, _r40, this.focus.offset);
        }
        if (
          ((function (t, e, n, r) {
            t.modify(e, n, r);
          })(s, t, e ? "backward" : "forward", n),
          s.rangeCount > 0)
        ) {
          var _t125 = s.getRangeAt(0),
            _n62 = this.anchor.getNode(),
            _o32 = ds(_n62) ? _n62 : Hi(_n62);
          if ((this.applyDOMRange(_t125), (this.dirty = !0), !r)) {
            var _n63 = this.getNodes(),
              _r41 = [];
            var _i16 = !1;
            for (var _t126 = 0; _t126 < _n63.length; _t126++) {
              var _e95 = _n63[_t126];
              zi(_e95, _o32) ? _r41.push(_e95) : (_i16 = !0);
            }
            if (_i16 && _r41.length > 0)
              if (e) {
                var _t127 = _r41[0];
                ls(_t127)
                  ? _t127.selectStart()
                  : _t127.getParentOrThrow().selectStart();
              } else {
                var _t128 = _r41[_r41.length - 1];
                ls(_t128)
                  ? _t128.selectEnd()
                  : _t128.getParentOrThrow().selectEnd();
              }
            (s.anchorNode === _t125.startContainer &&
              s.anchorOffset === _t125.startOffset) ||
              (function (t) {
                var e = t.focus,
                  n = t.anchor,
                  r = n.key,
                  o = n.offset,
                  s = n.type;
                (n.set(e.key, e.offset, e.type, !0), e.set(r, o, s, !0));
              })(this);
          }
        }
        "lineboundary" === n && wo(this, t, e, n, "decorators");
      };
      _proto1.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            ls(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t129 = e.getParent(),
            _n64 =
              e.getNextSibling() ||
              (null === _t129 ? null : _t129.getNextSibling());
          if (ls(_n64) && _n64.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto1.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e96 = this.anchor;
          var _n65 = _e96.getNode();
          if (this.forwardDeletion(_e96, _n65, t)) return;
          var _r42 = Cc(Mc(_e96, t ? "previous" : "next"));
          if (
            _r42.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            var _t130 = { type: "initial" };
            for (var _e97 of _r42.iterNodeCarets("shadowRoot"))
              if (lc(_e97)) {
                if (_e97.origin.isInline());
                else {
                  if (_e97.origin.isShadowRoot()) {
                    if ("merge-block" === _t130.type) break;
                    if (
                      ls(_r42.anchor.origin) &&
                      _r42.anchor.origin.isEmpty()
                    ) {
                      var _t131 = $c(_e97);
                      (Dc(this, Tc(_t131, _t131)), _r42.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t130.type &&
                    "merge-block" !== _t130.type) ||
                    (_t130 = {
                      block: _t130.block,
                      caret: _e97,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t130.type) break;
                if (ic(_e97)) {
                  if (ls(_e97.origin)) {
                    if (_e97.origin.isInline()) {
                      if (!_e97.origin.isParentOf(_r42.anchor.origin)) break;
                    } else
                      _t130 = { block: _e97.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (us(_e97.origin)) {
                    if (_e97.origin.isIsolated());
                    else if (
                      "merge-next-block" === _t130.type &&
                      (_e97.origin.isKeyboardSelectable() ||
                        !_e97.origin.isInline()) &&
                      ls(_r42.anchor.origin) &&
                      _r42.anchor.origin.isEmpty()
                    ) {
                      _r42.anchor.origin.remove();
                      var _t132 = ho();
                      (_t132.add(_e97.origin.getKey()), gi(_t132));
                    } else _e97.origin.remove();
                    return;
                  }
                  break;
                }
              }
            if ("merge-block" === _t130.type) {
              var _t133 = _t130,
                _e98 = _t133.caret,
                _n66 = _t133.block;
              if (Ll(_n66).length > 0) return;
              return _e98.origin.isEmpty() &&
                !_n66.isEmpty() &&
                _e98.origin.getParent() === _n66.getParent()
                ? void _e98.origin.remove(!0)
                : (Dc(
                    this,
                    Tc(
                      !_e98.origin.isEmpty() && _n66.isEmpty()
                        ? Pc(fc(_n66, _e98.direction))
                        : _r42.anchor,
                      _e98,
                    ),
                  ),
                  this.removeText());
            }
            for (var _t134 = _e96.getNode(); null !== _t134; ) {
              if (null !== wl(_t134)) return;
              if (ls(_t134) && _t134.isShadowRoot()) break;
              _t134 = _t134.getParent();
            }
          }
          var _o33 = this.focus;
          if ((this.modify("extend", t, "character"), this.isCollapsed())) {
            if (t && 0 === _e96.offset && Zr(this, _e96.getNode())) return;
          } else {
            var _r43 = "text" === _o33.type ? _o33.getNode() : null;
            if (
              ((_n65 = "text" === _e96.type ? _e96.getNode() : null),
              null !== _r43 && _r43.isSegmented())
            ) {
              var _e99 = _o33.offset,
                _s22 = _r43.getTextContentSize();
              if (_r43.is(_n65) || (t && _e99 !== _s22) || (!t && 0 !== _e99))
                return void eo(_r43, t, _e99);
            } else if (null !== _n65 && _n65.isSegmented()) {
              var _o34 = _e96.offset,
                _s23 = _n65.getTextContentSize();
              if (_n65.is(_r43) || (t && 0 !== _o34) || (!t && _o34 !== _s23))
                return void eo(_n65, t, _o34);
            }
            !(function (t, e) {
              var n = t.anchor,
                r = t.focus,
                o = n.getNode(),
                s = r.getNode();
              if (o === s && "text" === n.type && "text" === r.type) {
                var _t135 = n.offset,
                  _s24 = r.offset,
                  _i17 = _t135 < _s24,
                  _l8 = _i17 ? _t135 : _s24,
                  _c8 = _i17 ? _s24 : _t135,
                  _a8 = _c8 - 1;
                if (_l8 !== _a8) {
                  (function (t) {
                    return !(pi(t) || to(t));
                  })(o.getTextContent().slice(_l8, _c8)) &&
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
          var _t136 = this.anchor.getNode();
          _t136.isEmpty() &&
            ds(_t136.getParent()) &&
            null === _t136.getPreviousSibling() &&
            Zr(this, _t136);
        }
      };
      _proto1.deleteLine = function deleteLine(t) {
        var e = so(this.anchor);
        if (null !== e && us(Dl(e)))
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
          var _e100 = this.anchor,
            _n67 = _e100.getNode();
          if (this.forwardDeletion(_e100, _n67, t)) return;
          this.modify("extend", t, "word");
        }
        this.isCollapsed() ? this.deleteCharacter(t) : this.removeText();
      };
      _proto1.isBackward = function isBackward() {
        var t = this._cachedIsBackward;
        if (null !== t) return t;
        var e = this.focus.isBefore(this.anchor);
        return (zo() || (this._cachedIsBackward = e), e);
      };
      _proto1.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return Vr;
    })();
    function qr(t) {
      return t instanceof _Jr;
    }
    function Xr(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function Qr(t) {
      var e = t.getStartEndPoints();
      if (null === e) return [0, 0];
      var n = e[0],
        r = e[1];
      return "element" === n.type &&
        "element" === r.type &&
        n.key === r.key &&
        n.offset === r.offset
        ? [0, 0]
        : [Xr(n), Xr(r)];
    }
    function Zr(t, e) {
      for (var _n68 = e; _n68; _n68 = _n68.getParent()) {
        if (ls(_n68)) {
          if (_n68.collapseAtStart(t)) return !0;
          if (ji(_n68)) break;
        }
        if (_n68.getPreviousSibling()) break;
      }
      return !1;
    }
    var to = (function () {
      try {
        var _t137 = new RegExp("\\p{Emoji}", "u"),
          _e101 = _t137.test.bind(_t137);
        if (
          _e101("\u2764\ufe0f") &&
          _e101("#\ufe0f\u20e3") &&
          _e101("\u{1f44d}")
        )
          return _e101;
      } catch (t) {}
      return function () {
        return !1;
      };
    })();
    function eo(t, e, n) {
      var r = t,
        o = r.getTextContent().split(/(?=\s)/g),
        s = o.length;
      var i = 0,
        l = 0;
      for (var _t138 = 0; _t138 < s; _t138++) {
        var _r44 = _t138 === s - 1;
        if (
          ((l = i), (i += o[_t138].length), (e && i === n) || i > n || _r44)
        ) {
          (o.splice(_t138, 1), _r44 && (l = void 0));
          break;
        }
      }
      var c = o.join("").trim();
      "" === c ? r.remove() : (r.setTextContent(c), r.select(l, l));
    }
    function no(e, n, r, o) {
      var s,
        i = n,
        l = !1;
      if (tl(e)) {
        var _c9 = !1;
        var _a9 = e.childNodes,
          _u9 = _a9.length,
          _f8 = o._blockCursorElement;
        (i === _u9 && _u9 > 0 && ((_c9 = !0), (i = _u9 - 1)),
          void 0 !== ai(e, o) || Nl(e, o) || (l = !0));
        var _d6 = _a9[i],
          _h5 = !1;
        if (_d6 === _f8) ((_d6 = _a9[i + 1]), (_h5 = !0));
        else if (null !== _f8) {
          var _t139 = _f8.parentNode;
          if (e === _t139) {
            n > Array.prototype.indexOf.call(_t139.children, _f8) && i--;
          }
        }
        if (((s = _i(_d6)), $r(s))) i = hc(s, _c9 ? "next" : "previous");
        else {
          var _a0 = _i(e);
          if (null === _a0) return null;
          if (ls(_a0)) {
            var _u0$resolveChildIndex;
            var _l9 = o.getElementByKey(_a0.getKey());
            null === _l9 && t(214);
            var _u0 = ul(_a0, _l9, o);
            ((_u0$resolveChildIndex = _u0.resolveChildIndex(_a0, _l9, e, n)),
              (_a0 = _u0$resolveChildIndex[0]),
              (i = _u0$resolveChildIndex[1]),
              ls(_a0) || t(215),
              _c9 &&
                i >= _a0.getChildrenSize() &&
                (i = Math.max(0, _a0.getChildrenSize() - 1)));
            var _f9 = _a0.getChildAtIndex(i);
            if (
              ls(_f9) &&
              (function (t, e, n) {
                var r = t.getParent();
                return (
                  null === n ||
                  null === r ||
                  !r.canBeEmpty() ||
                  r !== n.getNode()
                );
              })(_f9, 0, r)
            ) {
              var _t140 = _c9
                ? _f9.getLastDescendant()
                : _f9.getFirstDescendant();
              (null === _t140
                ? (_a0 = _f9)
                : ((_f9 = _t140),
                  (_a0 = ls(_f9) ? _f9 : _f9.getParentOrThrow())),
                (i = 0));
            }
            $r(_f9)
              ? ((s = _f9),
                (_a0 = null),
                (i = hc(_f9, _c9 ? "next" : "previous")))
              : _f9 !== _a0 &&
                _c9 &&
                !_h5 &&
                (ls(_a0) || t(216),
                (i = Math.min(_a0.getChildrenSize(), i + 1)));
          } else {
            var _t141 = Dl(_a0),
              _r45 = null !== _t141 ? _t141 : _a0,
              _s25 = _r45.getIndexWithinParent(),
              _l0 = o.getElementByKey(_a0.getKey());
            var _c0 = "after";
            if (null !== _l0 && _i(e) === _a0) {
              var _t142 = ul(_a0, _l0, o);
              _t142.element !== _l0
                ? (_c0 = _t142.resolveLeafPosition(_l0, e, n))
                : 0 === n && us(_a0) && (_c0 = "before");
            }
            ((i = "before" === _c0 ? _s25 : _s25 + 1),
              (_a0 = _r45.getParentOrThrow()));
          }
          if (ls(_a0)) return [Hr(_a0.__key, i, "element"), l];
        }
      } else s = _i(e);
      return $r(s) ? [Hr(s.__key, hc(s, i, "clamp"), "text"), l] : null;
    }
    function ro(t, e, n) {
      var r = t.offset,
        o = t.getNode();
      if (0 === r) {
        var _r46 = o.getPreviousSibling(),
          _s26 = o.getParent();
        if (e) {
          if ((n || !e) && null === _r46 && ls(_s26) && _s26.isInline()) {
            var _e102 = _s26.getPreviousSibling();
            $r(_e102) &&
              t.set(_e102.__key, _e102.getTextContent().length, "text");
          }
        } else
          ls(_r46) && !n && _r46.isInline()
            ? t.set(_r46.__key, _r46.getChildrenSize(), "element")
            : $r(_r46) &&
              t.set(_r46.__key, _r46.getTextContent().length, "text");
      } else if (r === o.getTextContent().length) {
        var _r47 = o.getNextSibling(),
          _s27 = o.getParent();
        if (e && ls(_r47) && _r47.isInline()) t.set(_r47.__key, 0, "element");
        else if (
          (n || e) &&
          null === _r47 &&
          ls(_s27) &&
          _s27.isInline() &&
          !_s27.canInsertTextAfter()
        ) {
          var _e103 = _s27.getNextSibling();
          $r(_e103) && t.set(_e103.__key, 0, "text");
        }
      }
    }
    function oo(t, e, n) {
      if ("text" === t.type && "text" === e.type) {
        var _n69 = t.isBefore(e),
          _r48 = t.is(e);
        (ro(t, _n69, _r48),
          ro(e, !_n69, _r48),
          _r48 && e.set(t.key, t.offset, t.type));
      }
    }
    function so(t) {
      var e = ii(t.key);
      return null === e ? null : Pl(e);
    }
    function io(t, e, n) {
      var r = so(t),
        o = so(e);
      if (r === o || (null !== r && null !== o && r.is(o))) return !1;
      var s = n(r, o);
      if (null !== r)
        return (
          ls(r)
            ? e.set(r.getKey(), s ? r.getChildrenSize() : 0, "element")
            : e.set(r.getKey(), s ? r.getTextContentSize() : 0, "text"),
          !0
        );
      var i = Dl(o);
      if (null === i) return !1;
      var l = i.getParent();
      if (null === l) return !1;
      var c = i.getIndexWithinParent();
      return (e.set(l.getKey(), s ? c + 1 : c, "element"), !0);
    }
    function lo(t) {
      var e = io(t.anchor, t.focus, function (e, n) {
        return (function (t, e, n, r) {
          if (null !== n && null !== r) {
            var _t143 = Dl(n),
              _e104 = Dl(r);
            if (null !== _t143 && _t143.is(_e104)) {
              for (var _e105 of Fl(_t143).values()) {
                if (_e105 === n.getKey()) return !0;
                if (_e105 === r.getKey()) return !1;
              }
              return !0;
            }
            return null === _t143 || null === _e104 || _t143.isBefore(_e104);
          }
          if (null !== n) {
            var _t144 = Dl(n),
              _r49 = ii(e.key);
            return (
              null === _t144 ||
              null === _r49 ||
              !(!_t144.is(_r49) && !_t144.isParentOf(_r49)) ||
              _t144.isBefore(_r49)
            );
          }
          var o = Dl(r),
            s = ii(t.key);
          return (
            null !== o &&
            null !== s &&
            !o.is(s) &&
            !o.isParentOf(s) &&
            s.isBefore(o)
          );
        })(t.anchor, t.focus, e, n);
      });
      return (e && (t.dirty = !0), e);
    }
    function co(t, e, n, r, o, s) {
      if (null === t || null === n || !Hs(o, t, n)) return null;
      var i = no(t, e, Gr(s) ? s.anchor : null, o);
      if (null === i) return null;
      var l = no(n, r, Gr(s) ? s.focus : null, o);
      if (null === l) return null;
      var c = i[0],
        a = i[1],
        u = l[0],
        f = l[1];
      if ("element" === c.type && "element" === u.type) {
        var _e106 = _i(t),
          _r50 = _i(n);
        if (us(_e106) && us(_r50)) return null;
      }
      var d =
        o._slotsUsed &&
        io(c, u, function () {
          return (
            0 !==
            (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_FOLLOWING)
          );
        });
      return (oo(c, u), [c, u, a || f || d]);
    }
    function ao(t) {
      return ls(t) && !t.isInline();
    }
    function uo(t, e, n, r, o, s) {
      var i = Uo(),
        l = new _Vr(Hr(t, e, o), Hr(n, r, s), 0, "");
      return ((l.dirty = !0), (i._selection = l), l);
    }
    function fo() {
      var t = Hr("root", 0, "element"),
        e = Hr("root", 0, "element");
      return new _Vr(t, e, 0, "");
    }
    function ho() {
      return new _Jr(new Set());
    }
    function go(t, e, n, r) {
      var o = n._window;
      if (null === o) return null;
      var s = r || o.event,
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
      if (Gr(t) && !c) return t.clone();
      if (null === e) return null;
      if (
        ((a = e.anchorNode),
        (u = e.focusNode),
        (f = e.anchorOffset),
        (d = e.focusOffset),
        (l || void 0 === i) && Gr(t) && !Hs(n, a, u))
      )
        return t.clone();
      var h = co(a, f, u, d, n, t);
      if (null === h) return null;
      var g = h[0],
        _ = h[1],
        p = h[2];
      var y = 0,
        m = "";
      if (Gr(t)) {
        var _e107 = t.anchor;
        if (g.key === _e107.key) ((y = t.format), (m = t.style));
        else {
          var _t145 = g.getNode();
          $r(_t145)
            ? ((y = _t145.getFormat()), (m = _t145.getStyle()))
            : ls(_t145) &&
              ((y = _t145.getTextFormat()), (m = _t145.getTextStyle()));
        }
      }
      var x = new _Vr(g, _, y, m);
      return (p && (x.dirty = !0), x);
    }
    function _o() {
      return Uo()._selection;
    }
    function po() {
      return Ho()._editorState._selection;
    }
    function yo(t, e, n, r) {
      if (r === void 0) {
        r = 1;
      }
      var o = t.anchor,
        s = t.focus,
        i = o.getNode(),
        l = s.getNode();
      if (!e.is(i) && !e.is(l)) return;
      var c = e.__key;
      if (t.isCollapsed()) {
        var _e108 = o.offset;
        if ((n <= _e108 && r > 0) || (n < _e108 && r < 0)) {
          var _n70 = Math.max(0, _e108 + r);
          (o.set(c, _n70, "element"), s.set(c, _n70, "element"), mo(t));
        }
      } else {
        var _i18 = t.isBackward(),
          _l1 = _i18 ? s : o,
          _a1 = _l1.getNode(),
          _u1 = _i18 ? o : s,
          _f0 = _u1.getNode();
        if (e.is(_a1)) {
          var _t146 = _l1.offset;
          ((n <= _t146 && r > 0) || (n < _t146 && r < 0)) &&
            _l1.set(c, Math.max(0, _t146 + r), "element");
        }
        if (e.is(_f0)) {
          var _t147 = _u1.offset;
          ((n <= _t147 && r > 0) || (n < _t147 && r < 0)) &&
            _u1.set(c, Math.max(0, _t147 + r), "element");
        }
      }
      mo(t);
    }
    function mo(t) {
      var e = t.anchor,
        n = e.offset,
        r = t.focus,
        o = r.offset,
        s = e.getNode(),
        i = r.getNode();
      if (t.isCollapsed()) {
        if (!ls(s)) return;
        var _t148 = s.getChildrenSize(),
          _o35 = n >= _t148,
          _i19 = _o35 ? s.getChildAtIndex(_t148 - 1) : s.getChildAtIndex(n);
        if ($r(_i19)) {
          var _t149 = 0;
          (_o35 && (_t149 = _i19.getTextContentSize()),
            e.set(_i19.__key, _t149, "text"),
            r.set(_i19.__key, _t149, "text"));
        }
        return;
      }
      if (ls(s)) {
        var _t150 = s.getChildrenSize(),
          _r51 = n >= _t150,
          _o36 = _r51 ? s.getChildAtIndex(_t150 - 1) : s.getChildAtIndex(n);
        if ($r(_o36)) {
          var _t151 = 0;
          (_r51 && (_t151 = _o36.getTextContentSize()),
            e.set(_o36.__key, _t151, "text"));
        }
      }
      if (ls(i)) {
        var _t152 = i.getChildrenSize(),
          _e109 = o >= _t152,
          _n71 = _e109 ? i.getChildAtIndex(_t152 - 1) : i.getChildAtIndex(o);
        if ($r(_n71)) {
          var _t153 = 0;
          (_e109 && (_t153 = _n71.getTextContentSize()),
            r.set(_n71.__key, _t153, "text"));
        }
      }
    }
    function xo(t, e, n, r, o) {
      var s = null,
        i = 0,
        l = null;
      (null !== r
        ? ((s = r.__key),
          $r(r)
            ? ((i = r.getTextContentSize()), (l = "text"))
            : ls(r) && ((i = r.getChildrenSize()), (l = "element")))
        : null !== o &&
          ((s = o.__key), $r(o) ? (l = "text") : ls(o) && (l = "element")),
        null !== s && null !== l
          ? t.set(s, i, l)
          : ((i = e.getIndexWithinParent()),
            -1 === i && (i = n.getChildrenSize()),
            t.set(n.__key, i, "element")));
    }
    function Co(t, e, n, r, o) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : o), "text")
        : t.offset > r.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function So(t, e, n, r, o) {
      try {
        t.setBaseAndExtent(e, n, r, o);
      } catch (t) {}
    }
    function To(t, e, n) {
      var r = Fi(t, e.getKey());
      if (ls(e)) {
        var _o37 = ul(e, r, t);
        return [_o37.element, n + _o37.getFirstChildOffset()];
      }
      return [r, n];
    }
    function No(t, e, n, r, o, i) {
      var l = document.activeElement;
      if ((o.has(dr) && l !== i) || (null !== l && Us(l))) return;
      if (!Gr(e))
        return void (
          null !== t &&
          Hs(n, r.anchorNode, r.focusNode) &&
          r.removeAllRanges()
        );
      var c = e.anchor,
        a = e.focus,
        u = c.getNode(),
        f = a.getNode(),
        _To = To(n, u, c.offset),
        d = _To[0],
        h = _To[1],
        _To2 = To(n, f, a.offset),
        g = _To2[0],
        _ = _To2[1],
        p = e.format,
        y = e.style,
        m = e.isCollapsed();
      var x = d,
        C = g,
        S = !1;
      var T, N, v, k, b;
      if (
        ("text" === c.type
          ? ((x = $r(u) ? dl(u, d, n) : null),
            (S = u.getFormat() !== p || u.getStyle() !== y))
          : Gr(t) && "text" === t.anchor.type && (S = !0),
        "text" === a.type && (C = $r(f) ? dl(f, g, n) : null),
        null !== x && null !== C) &&
        (m &&
          (null === t || S || (Gr(t) && (t.format !== p || t.style !== y))) &&
          ((T = p),
          (N = y),
          (v = h),
          (k = c.key),
          (b = performance.now()),
          (Ln = [T, N, v, k, b])),
        ("Range" === r.type && m) ||
          r.anchorOffset !== h ||
          r.focusOffset !== _ ||
          r.anchorNode !== x ||
          r.focusNode !== C ||
          ((null !== l && i.contains(l)) ||
            o.has(_r) ||
            i.focus({ preventScroll: !0 }),
          "element" === c.type))
      ) {
        if (
          (So(r, x, h, C, _),
          !s ||
            !e.isCollapsed() ||
            null === i ||
            o.has(_r) ||
            (null !== document.activeElement &&
              i.contains(document.activeElement)) ||
            i.focus({ preventScroll: !0 }),
          !o.has(hr) &&
            e.isCollapsed() &&
            null !== i &&
            i === document.activeElement)
        ) {
          var _t154 =
            Gr(e) && "element" === e.anchor.type
              ? x.childNodes[h] || null
              : r.rangeCount > 0
                ? r.getRangeAt(0)
                : null;
          if (null !== _t154) {
            var _e110;
            if (_t154 instanceof Text) {
              var _n72 = document.createRange();
              (_n72.selectNode(_t154), (_e110 = _n72.getBoundingClientRect()));
            } else _e110 = _t154.getBoundingClientRect();
            !(function (t, e, n) {
              var r = Ri(n),
                o = Bi(r);
              if (null === r || null === o) return;
              var s = e.top,
                i = e.bottom,
                l = 0,
                c = 0,
                a = n;
              for (; null !== a; ) {
                var _e111 = a === r.body;
                if (_e111) {
                  var _e112 = o.visualViewport;
                  if (_e112) {
                    var _t155 = _e112.offsetTop;
                    ((l = _t155), (c = _t155 + _e112.height));
                  } else ((l = 0), (c = Wi(t).innerHeight));
                  var _n73 = o.getComputedStyle(r.documentElement),
                    _s28 = parseFloat(_n73.scrollPaddingTop),
                    _i20 = parseFloat(_n73.scrollPaddingBottom);
                  (isFinite(_s28) && (l += _s28),
                    isFinite(_i20) && (c -= _i20));
                } else {
                  var _t156 = a.getBoundingClientRect();
                  ((l = _t156.top), (c = _t156.bottom));
                }
                var _n74 = 0;
                if (
                  (s < l ? (_n74 = -(l - s)) : i > c && (_n74 = i - c),
                  0 !== _n74)
                )
                  if (_e111) o.scrollBy(0, _n74);
                  else {
                    var _t157 = a.scrollTop;
                    a.scrollTop += _n74;
                    var _e113 = a.scrollTop - _t157;
                    ((s -= _e113), (i -= _e113));
                  }
                if (_e111) break;
                a = Li(a);
              }
            })(n, _e110, i);
          }
        }
        Mn = !0;
      }
    }
    function vo(t, e) {
      for (var _n75 of t.split(/(\r?\n|\t)/))
        "\n" === _n75 || "\r\n" === _n75
          ? e.linebreak()
          : "\t" === _n75
            ? e.tab()
            : "" !== _n75 && e.text(_n75);
    }
    function ko(t) {
      var e = [];
      return (
        vo(t, {
          linebreak: function linebreak() {
            return e.push(Cs());
          },
          tab: function tab() {
            return e.push(Br());
          },
          text: function text(t) {
            return e.push(Rr(t));
          },
        }),
        e
      );
    }
    function bo(t) {
      var e = [];
      for (var _n76 of t)
        Ss(_n76) ||
          ((!ls(_n76) && !us(_n76)) || _n76.isInline()
            ? e.push(_n76)
            : ls(_n76) && e.push.apply(e, bo(_n76.getChildren())));
      return e;
    }
    function Oo(e) {
      var n = e;
      e.isCollapsed() || n.removeText();
      var r = _o();
      (Gr(r) && (n = r), Gr(n) || t(161));
      var o = n.anchor;
      var s = o.getNode(),
        i = o.offset;
      for (; !ll(s) && null === wl(s); ) {
        var _Eo;
        var _t158 = s;
        if (((_Eo = Eo(s, i)), (s = _Eo[0]), (i = _Eo[1]), _t158.is(s))) break;
      }
      return i;
    }
    function Eo(t, e) {
      var n = t.getParent();
      if (!n) {
        var _t159 = Os();
        return (hi().append(_t159), _t159.select(), [hi(), 0]);
      }
      if ($r(t)) {
        var _r52 = t.splitText(e);
        if (0 === _r52.length) return [n, t.getIndexWithinParent()];
        var _o38 = 0 === e ? 0 : 1;
        return [n, _r52[0].getIndexWithinParent() + _o38];
      }
      if (!ls(t) || 0 === e) return [n, t.getIndexWithinParent()];
      var r = t.getChildAtIndex(e);
      if (r) {
        var _n77 = new _Vr(
            Hr(t.__key, e, "element"),
            Hr(t.__key, e, "element"),
            0,
            "",
          ),
          _o39 = t.insertNewAfter(_n77);
        _o39 && _o39.append.apply(_o39, [r].concat(r.getNextSiblings()));
      }
      return [n, t.getIndexWithinParent() + 1];
    }
    function Mo(t) {
      return Ss(t) || Ui(t) || $r(t) || t.isParentRequired();
    }
    function Ao(t) {
      var e = Os();
      var n = null;
      for (var _r53 = 0; _r53 < t.length; _r53++) {
        var _o40 = t[_r53];
        if (Mo(_o40)) {
          if (null === n) {
            ((n = _o40.createParentElementNode()), e.append(n));
            var _s29 = t[_r53 + 1];
            if (Ss(_o40) && (void 0 === _s29 || !Mo(_s29))) continue;
          }
          n.append(_o40);
        } else (e.append(_o40), (n = null));
      }
      return e;
    }
    function wo(t, e, n, r, o) {
      if (o === void 0) {
        o = "decorators-and-blocks";
      }
      if ("move" === e && "character" === r && !t.isCollapsed()) {
        var _ref27 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e114 = _ref27[0],
          _r54 = _ref27[1];
        return (_r54.set(_e114.key, _e114.offset, _e114.type), !0);
      }
      var s = Mc(t.focus, n ? "previous" : "next"),
        i = "lineboundary" === r,
        l = "move" === e;
      var c = s,
        a = "decorators-and-blocks" === o;
      if (!Kc(c)) {
        for (var _t160 of c) {
          a = !1;
          var _e115 = _t160.origin;
          if (
            !us(_e115) ||
            _e115.isIsolated() ||
            ((c = _t160), !i || !_e115.isInline())
          )
            break;
        }
        if (a)
          for (var _t161 of Cc(s).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (lc(_t161)) _t161.origin.isInline() || (c = _t161);
            else {
              if (ls(_t161.origin)) continue;
              us(_t161.origin) && !_t161.origin.isInline() && (c = _t161);
            }
            break;
          }
      }
      if (c === s) return !1;
      if (l && !i && us(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t162 = ho();
        return (_t162.add(c.origin.getKey()), gi(_t162), !0);
      }
      return ((c = $c(c)), l && Ac(t.anchor, c), Ac(t.focus, c), a || !i);
    }
    var Do = null,
      Io = null,
      Po = !1,
      Fo = !1,
      Lo = !1;
    var Ro = new Set();
    var $o = 0;
    var Ko = { characterData: !0, childList: !0, subtree: !0 };
    function zo() {
      return Po || (null !== Do && Do._readOnly);
    }
    function Bo() {
      Po && t(13);
    }
    function Wo() {
      $o > 99 && t(14);
    }
    function Uo() {
      return (null === Do && t(195, Yo()), Do);
    }
    function Ho() {
      return (null === Io && t(337, Yo()), Io);
    }
    function jo() {
      Ho()._dirtyType = 2;
    }
    function Yo() {
      var t = 0;
      var e = new Set(),
        n = _Ls.version;
      if ("undefined" != typeof window)
        for (var _r55 of document.querySelectorAll("[contenteditable]")) {
          var _o41 = Js(_r55);
          if (js(_o41)) t++;
          else if (_o41) {
            var _t163 = String(_o41.constructor.version || "<0.17.1");
            (_t163 === n &&
              (_t163 +=
                " (separately built, likely a bundler configuration issue)"),
              e.add(_t163));
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
    function Jo() {
      return Io;
    }
    function Go(t, e, n) {
      var r = e.__type,
        o = zs(t, r);
      var s = n.get(r);
      void 0 === s && ((s = Array.from(o.transforms)), n.set(r, s));
      var i = s.length;
      for (var _t164 = 0; _t164 < i && (s[_t164](e), e.isAttached()); _t164++);
    }
    function Vo(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function qo(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var r = e;
      Array.isArray(e) || (r = [e]);
      for (var _t165 of r) n.add(_t165);
    }
    function Xo(n, r) {
      var o = n.type,
        s = r.get(o);
      void 0 === s && t(17, o);
      var i = s.klass;
      n.type !== i.getType() && t(18, i.name);
      var l = i.importJSON(n),
        c = n.children;
      if (ls(l) && Array.isArray(c))
        for (var _t166 = 0; _t166 < c.length; _t166++) {
          var _e116 = Xo(c[_t166], r);
          l.append(_e116);
        }
      var a = n.$slots;
      if (a) {
        Ml(l) ||
          e(
            "$parseSerializedNode: node " +
              i.name +
              " has slots but is not a valid slot host; only ElementNodes and DecoratorNodes can host slots.",
          );
        for (var _t167 in a) {
          Jl(l, _t167, Xo(a[_t167], r));
        }
      }
      return l;
    }
    function Qo(t, e, n) {
      var r = Do,
        o = Po,
        s = Io;
      ((Do = e), (Po = !0), (Io = t));
      try {
        return n();
      } finally {
        ((Do = r), (Po = o), (Io = s));
      }
    }
    function Zo(t, e) {
      var n = Lo;
      Lo = !0;
      try {
        !(function (t, e) {
          var n = t._pendingEditorState,
            r = t._rootElement,
            o = t._headless || null === r;
          if (null === n)
            return void (t._deferred.length > 0 && ns(t, t._deferred));
          var s = t._editorState,
            i = s._selection,
            l = n._selection,
            c = 0 !== t._dirtyType,
            a = Do,
            u = Po,
            f = Io,
            d = t._updating,
            h = t._observer;
          var g = null;
          if (
            ((t._pendingEditorState = null),
            (t._editorState = n),
            !o && c && null !== h)
          ) {
            ((Io = t), (Do = n), (Po = !1), (t._updating = !0));
            try {
              var _e117 = t._dirtyType,
                _r56 = t._dirtyElements,
                _o42 = t._dirtyLeaves;
              (h.disconnect(), (g = Ce(s, n, t, _e117, _r56, _o42)));
            } catch (e) {
              if ((e instanceof Error && t._onError(e), Fo)) throw e;
              return (
                ws(t, null, r, n),
                st(t),
                (t._dirtyType = 2),
                (Fo = !0),
                Zo(t, s),
                void (Fo = !1)
              );
            } finally {
              (h.observe(r, Ko),
                (t._updating = d),
                (Do = a),
                (Po = u),
                (Io = f));
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
              var r = t._pendingDecorators || n;
              var o = e._nodeMap;
              var s;
              for (s in r) o.has(s) || (r === n && (r = fi(t)), delete r[s]);
            })(t, n));
          var C = o ? null : Qi(Wi(t));
          if (
            t._editable &&
            null !== C &&
            (c || null === l || l.dirty || !l.is(i)) &&
            null !== r &&
            !m.has(gr)
          ) {
            ((Io = t), (Do = n));
            try {
              if ((null !== h && h.disconnect(), c || null === l || l.dirty)) {
                var _e118 = t._blockCursorElement;
                (null !== _e118 && Xi(_e118, t, r), No(i, l, t, C, m, r));
              }
              !(function (t, e, n) {
                var r = t._blockCursorElement;
                if (
                  Gr(n) &&
                  n.isCollapsed() &&
                  "element" === n.anchor.type &&
                  e.contains(document.activeElement)
                ) {
                  var _o43 = n.anchor,
                    _s30 = _o43.getNode(),
                    _i21 = _o43.offset;
                  var _l10 = !1,
                    _c1 = null;
                  if (_i21 === _s30.getChildrenSize()) {
                    qi(_s30.getChildAtIndex(_i21 - 1)) && (_l10 = !0);
                  } else {
                    var _e119 = _s30.getChildAtIndex(_i21);
                    if (null !== _e119 && qi(_e119)) {
                      var _n78 = _e119.getPreviousSibling();
                      (null === _n78 || qi(_n78)) &&
                        ((_l10 = !0), (_c1 = t.getElementByKey(_e119.__key)));
                    }
                  }
                  if (_l10) {
                    var _n79 = ul(
                      _s30,
                      t.getElementByKey(_s30.__key),
                      t,
                    ).element;
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
                                var _t168 = jc(r);
                                r = e.blockCursor = _t168;
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
                      void (null === _c1
                        ? _n79.appendChild(r)
                        : _n79.insertBefore(r, _c1))
                    );
                  }
                }
                null !== r && Xi(r, t, e);
              })(t, r, l);
            } finally {
              (null !== h && h.observe(r, Ko), (Io = f), (Do = a));
            }
          }
          null !== g &&
            (function (t, e, n, r, o) {
              var s = Array.from(t._listeners.mutation),
                i = s.length;
              for (var _t169 = 0; _t169 < i; _t169++) {
                var _s$_t = s[_t169],
                  _i22 = _s$_t[0],
                  _l11 = _s$_t[1];
                for (var _t170 of _l11) {
                  var _s31 = e.get(_t170);
                  void 0 !== _s31 &&
                    _i22(_s31, {
                      dirtyLeaves: r,
                      prevEditorState: o,
                      updateTags: n,
                    });
                }
              }
            })(t, g, m, _, s);
          Gr(l) ||
            null === l ||
            (null !== i && i.is(l)) ||
            t.dispatchCommand(Ne, void 0);
          var S = t._pendingDecorators;
          null !== S &&
            ((t._decorators = S),
            (t._pendingDecorators = null),
            ts("decorator", t, !0, S));
          ((function (t, e, n) {
            var r = di(e),
              o = di(n);
            r !== o && ts("textcontent", t, !0, o);
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
                  if (Ro.has(t)) return;
                  (Ro.add(t),
                    setTimeout(function () {
                      (Ro["delete"](t), (t._cascadeCount = 0));
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
                var _e120 = n[0],
                  _r57 = n[1];
                os(t, _e120, _r57);
              }
            })(t));
        })(t, e);
      } finally {
        Lo = n;
      }
    }
    function ts(t, e, n) {
      var o = e._updating;
      e._updating = n;
      try {
        var _n80 = e._listeners[t],
          _o44 = Array.from(_n80);
        for (
          var _len3 = arguments.length,
            r = new Array(_len3 > 3 ? _len3 - 3 : 0),
            _key3 = 3;
          _key3 < _len3;
          _key3++
        ) {
          r[_key3 - 3] = arguments[_key3];
        }
        for (var _ref29 of _o44) {
          var _t171 = _ref29[0];
          var _e121 = _ref29[1];
          {
            _e121 && _e121();
            var _o45 = _t171.apply(void 0, r);
            _n80.has(_t171) ? _n80.set(_t171, _o45) : _o45 && _o45();
          }
        }
      } finally {
        e._updating = o;
      }
    }
    function es(t, e, n, r) {
      var o = yi(t);
      var s;
      if (!Lo)
        for (var _t172 = 0; _t172 < o.length; _t172++)
          o[_t172]._updating || (o[_t172]._cascadeCount = 0);
      for (var _t173 = 4; _t173 >= 0; _t173--) {
        var _loop = function _loop() {
            var l = o[_i23];
            if (_i23 > 0 && l._updating) {
              s = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e122 = c[_t173];
              if (_e122.size > 0) {
                var _t174 = !1;
                if (
                  (ss(l, function () {
                    for (var _o46 of _e122)
                      if (_o46(n, r)) return void (_t174 = !0);
                  }),
                  _t174)
                )
                  return { v: _t174 };
              }
            }
          },
          _ret;
        for (var _i23 = 0; _i23 < o.length; _i23++) {
          _ret = _loop();
          if (_ret === 0) break;
          if (_ret) return _ret.v;
        }
      }
      return (
        s &&
          s.update(function () {
            es(s, e, n, r);
          }),
        !1
      );
    }
    function ns(t, e) {
      if (((t._deferred = []), 0 !== e.length)) {
        var _n81 = t._updating;
        t._updating = !0;
        try {
          for (var _t175 = 0; _t175 < e.length; _t175++) e[_t175]();
        } finally {
          t._updating = _n81;
        }
      }
    }
    function rs(e, n) {
      var r = e._updates;
      var o = n || !1;
      for (; 0 !== r.length; ) {
        var _n82 = r.shift();
        if (_n82) {
          var _r58 = _n82[0],
            _s32 = _n82[1],
            _i24 = e._pendingEditorState;
          var _l12 = void 0;
          (void 0 !== _s32 &&
            ((_l12 = _s32.onUpdate),
            _s32.skipTransforms && (o = !0),
            _s32.discrete && (null === _i24 && t(191), (_i24._flushSync = !0)),
            _l12 && e._deferred.push(_l12),
            qo(e, _s32.tag)),
            null == _i24 ? os(e, _r58, _s32) : _r58());
        }
      }
      return o;
    }
    function os(e, n, r) {
      var o = e._updateTags;
      var s,
        i = !1,
        l = !1;
      (void 0 !== r &&
        ((s = r.onUpdate),
        qo(e, r.tag),
        (i = r.skipTransforms || !1),
        (l = r.discrete || !1)),
        s && e._deferred.push(s));
      var c = e._editorState;
      var a = e._pendingEditorState,
        u = !1;
      ((null === a || a._readOnly) &&
        ((a = e._pendingEditorState = hs(a || c)), (u = !0)),
        (a._flushSync = l));
      var f = Do,
        d = Po,
        h = Io,
        g = e._updating;
      ((Do = a), (Po = !1), (e._updating = !0), (Io = e));
      var _ = e._headless || null === e.getRootElement();
      $s(null);
      try {
        u &&
          (_
            ? null !== c._selection && (a._selection = c._selection.clone())
            : (a._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  r = Qi(Wi(t));
                return Gr(n) || null == n ? go(n, r, t, e) : n.clone();
              })(e, (r && r.event) || null)));
        var _o47 = e._compositionKey;
        (n(),
          (i = rs(e, i)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              r = t._selection;
            if (Gr(r)) {
              var _t176 = r.anchor,
                _e123 = r.focus;
              var _o48;
              if (
                ("text" === _t176.type &&
                  ((_o48 = _t176.getNode()), _o48.selectionTransform(n, r)),
                "text" === _e123.type)
              ) {
                var _t177 = _e123.getNode();
                _o48 !== _t177 && _t177.selectionTransform(n, r);
              }
            }
          })(a, e),
          0 !== e._dirtyType &&
            (i
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    r = t._nodeMap;
                  for (var _t178 of n) {
                    var _e124 = r.get(_t178);
                    $r(_e124) &&
                      _e124.isAttached() &&
                      _e124.isSimpleText() &&
                      !_e124.isUnmergeable() &&
                      Tt(_e124);
                  }
                })(a, e)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    r = e._dirtyElements,
                    o = t._nodeMap,
                    s = si(),
                    i = new Map();
                  var l = n,
                    c = l.size,
                    a = r,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t179 of l) {
                        var _r59 = o.get(_t179);
                        ($r(_r59) &&
                          _r59.isAttached() &&
                          _r59.isSimpleText() &&
                          !_r59.isUnmergeable() &&
                          Tt(_r59),
                          void 0 !== _r59 && Vo(_r59, s) && Go(e, _r59, i),
                          n.add(_t179));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        $o++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t180 of a) {
                      var _n83 = _t180[0],
                        _l13 = _t180[1];
                      if ((r.set(_n83, _l13), !_l13)) continue;
                      var _c10 = o.get(_n83);
                      void 0 !== _c10 && Vo(_c10, s) && Go(e, _c10, i);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      $o++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = r));
                })(a, e),
            rs(e),
            (function (t, e, n, r) {
              var o = t._nodeMap,
                s = e._nodeMap,
                i = [];
              for (var _ref31 of r) {
                var _t181 = _ref31[0];
                {
                  var _e125 = s.get(_t181);
                  void 0 !== _e125 &&
                    (_e125.isAttached() ||
                      (ls(_e125) && V(_e125, _t181, o, s, i, r),
                      o.has(_t181) || r["delete"](_t181),
                      i.push(_t181)));
                }
              }
              for (var _t182 of n) {
                var _e126 = s.get(_t182);
                void 0 === _e126 ||
                  _e126.isAttached() ||
                  (Ml(_e126) &&
                    null !== _e126.__slots &&
                    V(_e126, _t182, o, s, i, n),
                  o.has(_t182) || n["delete"](_t182),
                  i.push(_t182));
              }
              for (var _t183 of i) s["delete"](_t183);
              var l = Ho(),
                c = l._compositionKey;
              null === c || s.has(c) || (l._compositionKey = null);
            })(c, a, e._dirtyLeaves, e._dirtyElements)));
        _o47 !== e._compositionKey && (a._flushSync = !0);
        var _s33 = a._selection;
        if (Gr(_s33)) {
          e._slotsUsed && lo(_s33);
          var _n84 = a._nodeMap,
            _r60 = _s33.anchor.key,
            _o49 = _s33.focus.key;
          (void 0 !== _n84.get(_r60) && void 0 !== _n84.get(_o49)) || t(19);
        } else qr(_s33) && 0 === _s33._nodes.size && (a._selection = null);
      } catch (t) {
        return (
          t instanceof Error && e._onError(t),
          (e._pendingEditorState = c),
          (e._dirtyType = 2),
          e._cloneNotNeeded.clear(),
          (e._dirtyLeaves = new Set()),
          e._dirtyElements.clear(),
          void Zo(e)
        );
      } finally {
        ((Do = f), (Po = d), (Io = h), (e._updating = g), ($o = 0));
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
          ? ((a._flushSync = !1), Zo(e))
          : u &&
            Ws(function () {
              Zo(e);
            })
        : ((a._flushSync = !1),
          u && (o.clear(), (e._deferred = []), (e._pendingEditorState = null)));
    }
    function ss(t, e, n) {
      Io === t && void 0 === n ? e() : os(t, e, n);
    }
    var _is4 = (function (_ar2) {
      function is(t) {
        var _this3;
        ((_this3 = _ar2.call(this, t) || this),
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
      babelHelpers.inheritsLoose(is, _ar2);
      var _proto10 = is.prototype;
      _proto10.afterCloneFrom = function afterCloneFrom(t) {
        (_ar2.prototype.afterCloneFrom.call(this, t),
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
        return 0 === this.getChildrenSize() && 0 === Ll(this).length;
      };
      _proto10.isDirty = function isDirty() {
        var t = Ho()._dirtyElements;
        return null !== t && t.has(this.__key);
      };
      _proto10.isLastChild = function isLastChild() {
        var t = this.getLatest(),
          e = this.getParentOrThrow().getLastChild();
        return null !== e && e.is(t);
      };
      _proto10.getAllTextNodes = function getAllTextNodes() {
        var t = [];
        for (var _e127 of Ll(this)) {
          var _n85 = Rl(this, _e127);
          ls(_n85) && t.push.apply(t, _n85.getAllTextNodes());
        }
        var e = this.getFirstChild();
        for (; null !== e; ) {
          if (($r(e) && t.push(e), ls(e))) {
            var _n86 = e.getAllTextNodes();
            t.push.apply(t, _n86);
          }
          e = e.getNextSibling();
        }
        return t;
      };
      _proto10.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; ls(t); ) {
          var _e128 = t.getFirstChild();
          if (null === _e128) break;
          t = _e128;
        }
        return t;
      };
      _proto10.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; ls(t); ) {
          var _e129 = t.getLastChild();
          if (null === _e129) break;
          t = _e129;
        }
        return t;
      };
      _proto10.getDescendantByIndex = function getDescendantByIndex(t) {
        var e = this.getChildren(),
          n = e.length;
        if (t >= n) {
          var _t184 = e[n - 1];
          return (ls(_t184) && _t184.getLastDescendant()) || _t184 || null;
        }
        var r = e[t];
        return (ls(r) && r.getFirstDescendant()) || r || null;
      };
      _proto10.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : ii(t);
      };
      _proto10.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var e = this.getFirstChild();
        return (null === e && t(45, this.__key), e);
      };
      _proto10.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : ii(t);
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
        var t = Hl(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _r61 = 0; _r61 < n; _r61++) {
          var _o50 = e[_r61];
          ((t += _o50.getTextContent()),
            ls(_o50) && _r61 !== n - 1 && !_o50.isInline() && (t += v));
        }
        return t;
      };
      _proto10.getTextContentSize = function getTextContentSize() {
        var t = (function (t) {
          var e = 0;
          for (var _n87 of Ll(t)) {
            var _r62 = Rl(t, _n87);
            null !== _r62 && (e += _r62.getTextContentSize());
          }
          return e;
        })(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _r63 = 0; _r63 < n; _r63++) {
          var _o51 = e[_r63];
          ((t += _o51.getTextContentSize()),
            ls(_o51) && _r63 !== n - 1 && !_o51.isInline() && (t += 2));
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
          var _e130 = D[t];
          return 0 !== (this.getFormat() & _e130);
        }
        return !1;
      };
      _proto10.hasTextFormat = function hasTextFormat(t) {
        var e = A[t];
        return 0 !== (this.getTextFormat() & e);
      };
      _proto10.getFormatFlags = function getFormatFlags(t, e) {
        return Zs(this.getLatest().__textFormat, t, e);
      };
      _proto10.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto10.select = function select(t, e) {
        Bo();
        var n = _o();
        var r = t,
          o = e;
        var s = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t185 = this.getFirstChild();
            if ($r(_t185) || ls(_t185)) return _t185.select(0, 0);
          } else if (
            !((void 0 !== t && t !== s) || (void 0 !== e && e !== s))
          ) {
            var _t186 = this.getLastChild();
            if ($r(_t186) || ls(_t186)) return _t186.select();
          }
        (void 0 === r && (r = s), void 0 === o && (o = s));
        var i = this.__key;
        return Gr(n)
          ? (n.anchor.set(i, r, "element"),
            n.focus.set(i, o, "element"),
            (n.dirty = !0),
            n)
          : uo(i, r, i, o, "element", "element");
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
      _proto10.splice = function splice(e, n, r) {
        lr(this) && t(324, this.__key, this.__type);
        var o = this.getChildrenSize(),
          s = this.getWritable();
        e + n <= o || t(226, String(e), String(n), String(o));
        for (var _t187 of r);
        var i = s.__key,
          l = [],
          c = [],
          a = this.getChildAtIndex(e + n);
        var u = null,
          f = o - n + r.length;
        if (0 !== e)
          if (e === o) u = this.getLastChild();
          else {
            var _t188 = this.getChildAtIndex(e);
            null !== _t188 && (u = _t188.getPreviousSibling());
          }
        if (n > 0) {
          var _e131 = null === u ? this.getFirstChild() : u.getNextSibling();
          for (var _r64 = 0; _r64 < n; _r64++) {
            null === _e131 && t(100);
            var _n88 = _e131.getNextSibling(),
              _r65 = _e131.__key;
            (ei(_e131.getWritable()), c.push(_r65), (_e131 = _n88));
          }
        }
        var d = u;
        for (var _e132 of r) {
          null !== d && _e132.is(d) && (u = d = d.getPreviousSibling());
          var _n89 = _e132.getWritable();
          (_n89.__parent === i && f--, ei(_n89));
          var _r66 = _e132.__key;
          if (null === d) ((s.__first = _r66), (_n89.__prev = null));
          else {
            var _t189 = d.getWritable();
            ((_t189.__next = _r66), (_n89.__prev = _t189.__key));
          }
          (_e132.__key === i && t(76),
            (_n89.__parent = i),
            l.push(_r66),
            (d = _e132));
        }
        if (e + n === o) {
          if (null !== d) {
            ((d.getWritable().__next = null), (s.__last = d.__key));
          }
        } else if (null !== a) {
          var _t190 = a.getWritable();
          if (null !== d) {
            var _e133 = d.getWritable();
            ((_t190.__prev = d.__key), (_e133.__next = a.__key));
          } else _t190.__prev = null;
        }
        if (((s.__size = f), c.length)) {
          var _t191 = _o();
          if (Gr(_t191)) {
            var _e134 = new Set(c),
              _n90 = new Set(l),
              _r67 = _t191.anchor,
              _o52 = _t191.focus;
            (cs(_r67, _e134, _n90) && xo(_r67, _r67.getNode(), this, u, a),
              cs(_o52, _e134, _n90) && xo(_o52, _o52.getNode(), this, u, a),
              0 !== f || this.canBeEmpty() || ji(this) || this.remove());
          }
        }
        return s;
      };
      _proto10.getDOMSlot = function getDOMSlot(t) {
        return new _B(t);
      };
      _proto10.exportDOM = function exportDOM(t) {
        var _ar2$prototype$export = _ar2.prototype.exportDOM.call(this, t),
          e = _ar2$prototype$export.element;
        if (tl(e)) {
          var _t192 = this.getIndent();
          _t192 > 0 &&
            ((e.style.paddingInlineStart = 40 * _t192 + "px"),
            e.setAttribute("data-lexical-indent", String(_t192)));
          var _n91 = this.getDirection();
          _n91 && (e.dir = _n91);
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
            _ar2.prototype.exportJSON.call(this),
          ),
          e = this.getTextFormat(),
          n = this.getTextStyle();
        return (
          (0 === e && "" === n) ||
            ji(this) ||
            this.getChildren().some($r) ||
            (0 !== e && (t.textFormat = e), "" !== n && (t.textStyle = n)),
          t
        );
      };
      _proto10.updateFromJSON = function updateFromJSON(t) {
        return _ar2.prototype.updateFromJSON
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
        var n = ul(this, t, e);
        var r = n.getFirstChild();
        for (
          var _t193 = this.getFirstChild();
          _t193;
          _t193 = _t193.getNextSibling()
        ) {
          var _o53 = e.getElementByKey(_t193.getKey());
          null !== _o53 &&
            (null == r
              ? (n.insertChild(_o53), (r = _o53))
              : r !== _o53 && n.replaceChild(_o53, r),
            (r = r.nextSibling));
        }
      };
      return is;
    })(_ar5);
    function ls(t) {
      return t instanceof _is4;
    }
    function cs(t, e, n) {
      var r = t.getNode();
      for (; r; ) {
        var _t194 = r.__key;
        if (e.has(_t194) && !n.has(_t194)) return !0;
        r = r.getParent();
      }
      return !1;
    }
    var _as = (function (_ar3) {
      function as(t) {
        var _this4;
        ((_this4 = _ar3.call(this, t) || this),
          (_this4.__slotHost = null),
          (_this4.__slots = null));
        return _this4;
      }
      babelHelpers.inheritsLoose(as, _ar3);
      var _proto11 = as.prototype;
      _proto11.afterCloneFrom = function afterCloneFrom(t) {
        (_ar3.prototype.afterCloneFrom.call(this, t),
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
      return as;
    })(_ar5);
    function us(t) {
      return t instanceof _as;
    }
    var _fs = (function (_is) {
      function fs() {
        var _this5;
        ((_this5 = _is.call(this, "root") || this),
          (_this5.__cachedText = null));
        return _this5;
      }
      babelHelpers.inheritsLoose(fs, _is);
      fs.getType = function getType() {
        return "root";
      };
      fs.clone = function clone() {
        return new fs();
      };
      var _proto12 = fs.prototype;
      _proto12.getTopLevelElementOrThrow =
        function getTopLevelElementOrThrow() {
          t(51);
        };
      _proto12.getTextContent = function getTextContent() {
        var t = this.__cachedText;
        return null === t || (!zo() && 0 !== Ho()._dirtyType)
          ? _is.prototype.getTextContent.call(this)
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
        for (var _e135 of r) ls(_e135) || us(_e135) || t(282);
        return _is.prototype.splice.call(this, e, n, r);
      };
      fs.importJSON = function importJSON(t) {
        return hi().updateFromJSON(t);
      };
      _proto12.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return fs;
    })(_is4);
    function ds(t) {
      return t instanceof _fs;
    }
    function hs(t) {
      return new _ps(J(t._nodeMap));
    }
    function gs() {
      return new _ps(new Map([["root", new _fs()]]));
    }
    function _s(n) {
      var r = n.exportJSON(),
        o = n.constructor;
      if ((r.type !== o.getType() && t(130, o.name), ls(n))) {
        var _e136 = r.children;
        Array.isArray(_e136) || t(59, o.name);
        var _s34 = n.getChildren();
        for (var _t195 = 0; _t195 < _s34.length; _t195++) {
          var _n92 = _s(_s34[_t195]);
          _e136.push(_n92);
        }
      }
      var s = Ll(n);
      if (s.length > 0) {
        var _t196 = {};
        for (var _r68 of s) {
          var _s35 = Rl(n, _r68);
          (null === _s35 &&
            e(
              "LexicalNode: Node " +
                o.name +
                ' has slot "' +
                _r68 +
                '" but it resolved to no node during export.',
            ),
            (_t196[_r68] = _s(_s35)));
        }
        r.$slots = _t196;
      }
      return r;
    }
    var _ps = (function () {
      function ps(t, e) {
        ((this._nodeMap = t),
          (this._selection = e || null),
          (this._flushSync = !1),
          (this._readOnly = !1));
      }
      var _proto13 = ps.prototype;
      _proto13.isEmpty = function isEmpty() {
        return 1 === this._nodeMap.size && null === this._selection;
      };
      _proto13.read = function read(t, e) {
        return Qo((e && e.editor) || null, this, t);
      };
      _proto13.clone = function clone(t) {
        var e = new ps(this._nodeMap, void 0 === t ? this._selection : t);
        return ((e._readOnly = !0), e);
      };
      _proto13.toJSON = function toJSON() {
        return Qo(null, this, function () {
          return { root: _s(hi()) };
        });
      };
      return ps;
    })();
    var _ys = (function (_is2) {
      function ys() {
        return _is2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(ys, _is2);
      ys.getType = function getType() {
        return "artificial";
      };
      var _proto14 = ys.prototype;
      _proto14.createDOM = function createDOM(t) {
        return document.createElement("div");
      };
      return ys;
    })(_is4);
    var _ms = (function (_ar4) {
      function ms(t) {
        return _ar4.call(this, t) || this;
      }
      babelHelpers.inheritsLoose(ms, _ar4);
      ms.getType = function getType() {
        return "linebreak";
      };
      ms.clone = function clone(t) {
        return new ms(t.__key);
      };
      var _proto15 = ms.prototype;
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
      ms.importDOM = function importDOM() {
        return {
          br: function br(t) {
            return Ts(t) || Ns(t) ? null : { conversion: xs, priority: 0 };
          },
        };
      };
      ms.importJSON = function importJSON(t) {
        return Cs().updateFromJSON(t);
      };
      return ms;
    })(_ar5);
    function xs(t) {
      return { node: Cs() };
    }
    function Cs() {
      return Ji(new _ms());
    }
    function Ss(t) {
      return t instanceof _ms;
    }
    function Ts(t) {
      var e = t.parentElement;
      if (null !== e && il(e)) {
        var _n93 = e.firstChild;
        if (_n93 === t || (_n93.nextSibling === t && vs(_n93))) {
          var _n94 = e.lastChild;
          if (_n94 === t || (_n94.previousSibling === t && vs(_n94))) return !0;
        }
      }
      return !1;
    }
    function Ns(t) {
      var e = t.parentElement;
      if (null !== e && il(e)) {
        var _n95 = e.firstChild;
        if (_n95 === t || (_n95.nextSibling === t && vs(_n95))) return !1;
        var _r69 = e.lastChild;
        if (_r69 === t || (_r69.previousSibling === t && vs(_r69))) return !0;
      }
      return !1;
    }
    function vs(t) {
      return qs(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    var _ks = (function (_is3) {
      function ks() {
        return _is3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(ks, _is3);
      ks.getType = function getType() {
        return "paragraph";
      };
      ks.clone = function clone(t) {
        return new ks(t.__key);
      };
      var _proto16 = ks.prototype;
      _proto16.createDOM = function createDOM(t) {
        var e = document.createElement("p"),
          n = Mi(t.theme, "paragraph");
        if (void 0 !== n) {
          var _e$classList2;
          (_e$classList2 = e.classList).add.apply(_e$classList2, n);
        }
        return e;
      };
      _proto16.updateDOM = function updateDOM(t, e, n) {
        return !1;
      };
      ks.importDOM = function importDOM() {
        return {
          p: function p(t) {
            return { conversion: bs, priority: 0 };
          },
        };
      };
      _proto16.exportDOM = function exportDOM(t) {
        var _is3$prototype$export = _is3.prototype.exportDOM.call(this, t),
          e = _is3$prototype$export.element;
        if (tl(e)) {
          this.isEmpty() && e.append(document.createElement("br"));
          var _t197 = this.getFormatType();
          _t197 && (e.style.textAlign = _t197);
        }
        return { element: e };
      };
      ks.importJSON = function importJSON(t) {
        return Os().updateFromJSON(t);
      };
      _proto16.exportJSON = function exportJSON() {
        var t = _is3.prototype.exportJSON.call(this);
        if (void 0 === t.textFormat || void 0 === t.textStyle) {
          var _e137 = this.getChildren().find($r);
          _e137
            ? ((t.textFormat = _e137.getFormat()),
              (t.textStyle = _e137.getStyle()))
            : ((t.textFormat = this.getTextFormat()),
              (t.textStyle = this.getTextStyle()));
        }
        return t;
      };
      _proto16.insertNewAfter = function insertNewAfter(t, e) {
        var n = Os();
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
          ($r(t[0]) && "" === t[0].getTextContent().trim())
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return ks;
    })(_is4);
    function bs(t) {
      var e = Os();
      if ((xl(e, t), yl(t, e), "" === e.getFormatType())) {
        var _n96 = t.getAttribute("align");
        _n96 && _n96 && _n96 in D && e.setFormat(_n96);
      }
      return (ml(e, t), { node: e });
    }
    function Os() {
      return Ji(new _ks());
    }
    function Es(t) {
      return t instanceof _ks;
    }
    function Ms(t) {
      console.warn(t);
    }
    var As = 0;
    function ws(t, e, n, r, o) {
      var s = t._keyToDOMMap;
      (s.clear(),
        (t._editorState = gs()),
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
      var i = t._observer;
      (null !== i && (i.disconnect(), (t._observer = null)),
        null !== e &&
          ((e.textContent = ""),
          (function (t, e) {
            var n = "__lexicalKey_" + e._key;
            delete t[n];
          })(e, t)),
        null !== n &&
          ((n.textContent = ""), s.set("root", n), ci(n, t, "root")));
    }
    function Ds(t) {
      var e = new Set(),
        n = new Set();
      var r = t;
      for (; r; ) {
        var _kl3 = kl(r),
          _t198 = _kl3.ownNodeConfig,
          _o54 = r.transform;
        if (!n.has(_o54)) {
          n.add(_o54);
          var _t199 = r.transform();
          _t199 && e.add(_t199);
        }
        if (_t198) {
          var _n97 = _t198.$transform;
          (_n97 && e.add(_n97), (r = _t198["extends"]));
        } else {
          var _t200 = Object.getPrototypeOf(r);
          r =
            _t200.prototype instanceof _ar5 && _t200 !== _ar5 ? _t200 : void 0;
        }
      }
      return e;
    }
    var Is = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, r) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = Bs(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, r, o) {
        return ls(t) && t.extractWithChild(e, n, r);
      },
      $getDOMSlot: function $getDOMSlot(t, e, n) {
        return t.getDOMSlot(e);
      },
      $getSlotTargetElement: function $getSlotTargetElement(t, e, n, r) {
        return null;
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return ls(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, r) {
        return t.updateDOM(e, n, r._config);
      },
    };
    function Ps(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function Fs(t, e, n) {
      return (t.set(e, n), Ps.bind(null, t, e));
    }
    var _Ls = (function () {
      function Ls(t, e, n, r, o, s, i, l, c) {
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
          (this._key = mi()),
          (this._onError = o),
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
        return Fs(this._listeners.update, t);
      };
      _proto17.registerEditableListener = function registerEditableListener(t) {
        return Fs(this._listeners.editable, t);
      };
      _proto17.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return Fs(this._listeners.decorator, t);
      };
      _proto17.registerTextContentListener =
        function registerTextContentListener(t) {
          return Fs(this._listeners.textcontent, t);
        };
      _proto17.registerRootListener = function registerRootListener(t) {
        var _this14 = this;
        var e = this._listeners.root;
        return Yc(Fs(e, t, t(this._rootElement, null) || void 0), function () {
          return (function (t, e, n) {
            var r = t.get(e);
            (r && r(), t.set(e, e.apply(void 0, n) || void 0));
          })(e, t, [null, _this14._rootElement]);
        });
      };
      _proto17.registerCommand = function registerCommand(e, n, r) {
        void 0 === r && t(35);
        var o = this._commands;
        o.has(e) ||
          o.set(e, [new _j(), new _j(), new _j(), new _j(), new _j()]);
        var s = o.get(e);
        void 0 === s && t(36, String(e));
        var i = (function (t) {
            return 7 & t;
          })(r),
          l = s[i];
        return (
          i !== r ? l.addFront(n) : l.addBack(n),
          function () {
            (l["delete"](n),
              s.every(function (t) {
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
        var s = o.get(e);
        (void 0 === s && ((s = new Set()), o.set(e, s)), s.add(r));
        var i = n && n.skipInitialization;
        return (
          (void 0 !== i && i) || this.initializeMutationListener(e, r),
          function () {
            (s["delete"](r), 0 === s.size && o["delete"](e));
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
          r = _l(n).get(e.getType());
        if (!r) return;
        var o = new Map();
        for (var _t201 of r.keys()) o.set(_t201, "created");
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
          var _t202 = this.registerNodeTransformToKlass(o, e);
          r.push(_t202);
        }
        return (
          (function (t, e) {
            var n = _l(t.getEditorState()),
              r = [];
            for (var _t203 of e) {
              var _e138 = n.get(_t203);
              _e138 && r.push(_e138);
            }
            if (0 === r.length) return;
            t.update(
              function () {
                for (var _t204 of r)
                  for (var _e139 of _t204.keys()) {
                    var _t205 = ii(_e139);
                    _t205 && _t205.markDirty();
                  }
              },
              null === t._pendingEditorState ? { tag: fr } : void 0,
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
        return Pi(this, t, e);
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
          var _n98 = Mi(this._config.theme, "root"),
            _r70 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            ws(this, e, t, _r70, { preserveUpdateQueue: !0 }),
            null !== e &&
              (this._config.disableEvents || or(e),
              null != _n98 &&
                (_e$classList3 = e.classList).remove.apply(
                  _e$classList3,
                  _n98,
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e140 = Bi(t),
              _r71 = t.style;
            ((_r71.userSelect = "text"),
              (_r71.whiteSpace = "pre-wrap"),
              (_r71.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e140),
              (this._dirtyType = 2),
              st(this),
              this._updateTags.add(fr),
              Zo(this),
              this._config.disableEvents ||
                (function (t, e, _En$get) {
                  var n = t.ownerDocument;
                  On.set(t, n);
                  var r = (_En$get = En.get(n)) != null ? _En$get : 0;
                  (r < 1 && n.addEventListener("selectionchange", tr),
                    En.set(n, r + 1),
                    (t.__lexicalEditor = e));
                  var o = Qn(t);
                  var _loop2 = function _loop2() {
                    var _Cn$_n = Cn[_n99],
                      r = _Cn$_n[0],
                      s = _Cn$_n[1],
                      i =
                        "function" == typeof s
                          ? function (t) {
                              nr(t) ||
                                (er(t),
                                (e.isEditable() || "click" === r) && s(t, e));
                            }
                          : function (t) {
                              if (nr(t)) return;
                              er(t);
                              var n = e.isEditable();
                              switch (r) {
                                case "cut":
                                  return n && Pi(e, un, t);
                                case "copy":
                                  return Pi(e, an, t);
                                case "paste":
                                  return n && Pi(e, Pe, t);
                                case "dragstart":
                                  return n && Pi(e, sn, t);
                                case "dragover":
                                  return n && Pi(e, ln, t);
                                case "dragend":
                                  return n && Pi(e, cn, t);
                                case "focus":
                                  return n && Pi(e, pn, t);
                                case "blur":
                                  return n && Pi(e, yn, t);
                                case "drop":
                                  return n && Pi(e, rn, t);
                              }
                            };
                    (t.addEventListener(r, i),
                      o.push(function () {
                        t.removeEventListener(r, i);
                      }));
                  };
                  for (var _n99 = 0; _n99 < Cn.length; _n99++) {
                    _loop2();
                  }
                })(t, this),
              null != _n98 &&
                (_t$classList = t.classList).add.apply(_t$classList, _n98));
          } else ((this._window = null), this._updateTags.add(fr), Zo(this));
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
        e.isEmpty() && t(38);
        var r = e;
        (r._readOnly &&
          ((r = hs(e)),
          (r._selection = e._selection ? e._selection.clone() : null)),
          ot(this));
        var o = this._pendingEditorState,
          s = void 0 !== n ? n.tag : null;
        if (
          (null === o ||
            o.isEmpty() ||
            (null != s && this._updateTags.add(s), Zo(this)),
          (this._pendingEditorState = r),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          !this._slotsUsed)
        )
          for (var _t206 of r._nodeMap.values())
            if (Ml(_t206) && null !== _t206.__slots && _t206.__slots.size > 0) {
              this._slotsUsed = !0;
              break;
            }
        (null != s && this._updateTags.add(s), this._updating || Zo(this));
      };
      _proto17.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var r = gs(),
            o = Do,
            s = Po,
            i = Io,
            l = e._dirtyElements,
            c = e._dirtyLeaves,
            a = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Set()),
            (e._dirtyType = 0),
            (Do = r),
            (Po = !1),
            (Io = e),
            $s(null));
          try {
            var _o55 = e._nodes;
            (Xo(t.root, _o55), n && n(), (r._readOnly = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = c),
              (e._cloneNotNeeded = a),
              (e._dirtyType = u),
              (Do = o),
              (Po = s),
              (Io = i));
          }
          return r;
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
        var _ref32 = 1 === t.length ? ["force-commit", t[0]] : t,
          e = _ref32[0],
          n = _ref32[1];
        "force-commit" === e && Zo(this);
        return (
          "pending" === e
            ? this._pendingEditorState || this._editorState
            : this.getEditorState()
        ).read(n, { editor: this });
      };
      _proto17.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : os(t, e, n);
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
            var r = _o(),
              o = hi();
            (null !== r
              ? r.dirty || gi(r.clone())
              : 0 !== o.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? o.selectStart()
                  : o.selectEnd()),
              $i("focus"),
              Ki(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto17.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = Qi(this._window);
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
              return jo();
            }));
      };
      _proto17.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON() };
      };
      return Ls;
    })();
    _Ls.version = H;
    var Rs = null;
    function $s(t) {
      Rs = t;
    }
    var Ks = 1;
    function zs(e, n) {
      var r = Bs(e, n);
      return (void 0 === r && t(30, n), r);
    }
    function Bs(t, e) {
      return t._nodes.get(e);
    }
    var Ws =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function Us(t) {
      var e = document.activeElement;
      if (!tl(e)) return !1;
      if (e.hasAttribute("data-lexical-slot")) return !1;
      var n = e.nodeName;
      return (
        us(ui(t)) &&
        ("INPUT" === n ||
          "TEXTAREA" === n ||
          ("true" === e.contentEditable && null == Js(e)))
      );
    }
    function Hs(t, e, n) {
      var r = t.getRootElement();
      try {
        return (
          null !== r &&
          r.contains(e) &&
          r.contains(n) &&
          null !== e &&
          !Us(e) &&
          Ys(e) === t
        );
      } catch (t) {
        return !1;
      }
    }
    function js(t) {
      return t instanceof _Ls;
    }
    function Ys(t) {
      var e = t;
      for (; null != e; ) {
        var _t207 = Js(e);
        if (js(_t207)) return _t207;
        e = Li(e);
      }
      return null;
    }
    function Js(t) {
      return t ? t.__lexicalEditor : null;
    }
    function Gs(t) {
      return Wr(t) || t.isToken();
    }
    function Vs(t) {
      return Gs(t) || t.isSegmented();
    }
    function qs(t) {
      return el(t) && 3 === t.nodeType;
    }
    function Xs(t) {
      return el(t) && 9 === t.nodeType;
    }
    function Qs(t) {
      var e = t;
      for (; null != e; ) {
        if (qs(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function Zs(t, e, n) {
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
    function ti(t, e) {
      var n = (function () {
        var t = Rs;
        return ((Rs = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (Bo(), Wo());
      var r = Ho(),
        o = Uo(),
        s = "" + Ks++;
      (o._nodeMap.set(s, t),
        ls(t) ? r._dirtyElements.set(s, !0) : r._dirtyLeaves.add(s),
        r._cloneNotNeeded.add(s),
        0 === r._dirtyType && (r._dirtyType = 1),
        (t.__key = s));
    }
    function ei(t) {
      null !== wl(t) &&
        e(
          "$removeFromParent: node " +
            t.__key +
            " is slotted into host " +
            String(wl(t)) +
            "; a slotted node and a child are mutually exclusive. Remove it from its slot first.",
        );
      var n = t.getParent();
      if (null !== n) {
        var _e141 = t.getWritable(),
          _r72 = n.getWritable(),
          _o56 = t.getPreviousSibling(),
          _s36 = t.getNextSibling(),
          _i25 = null !== _s36 ? _s36.__key : null,
          _l14 = null !== _o56 ? _o56.__key : null,
          _c11 = null !== _o56 ? _o56.getWritable() : null,
          _a10 = null !== _s36 ? _s36.getWritable() : null;
        (null === _o56 && (_r72.__first = _i25),
          null === _s36 && (_r72.__last = _l14),
          null !== _c11 && (_c11.__next = _i25),
          null !== _a10 && (_a10.__prev = _l14),
          (_e141.__prev = null),
          (_e141.__next = null),
          (_e141.__parent = null),
          _r72.__size--);
      }
    }
    var ni = ei;
    function ri(e) {
      (Wo(), lr(e) && t(323, e.__key, e.__type));
      var n = e.getLatest(),
        r = null !== n.__parent ? n.__parent : Al(n) ? n.__slotHost : null,
        o = Uo(),
        s = Ho(),
        i = o._nodeMap,
        l = s._dirtyElements;
      null !== r &&
        (function (t, e, n) {
          var r = t;
          for (; null !== r; ) {
            if (n.has(r)) return;
            var _t208 = e.get(r);
            if (void 0 === _t208) break;
            (n.set(r, !1),
              (r =
                null !== _t208.__parent
                  ? _t208.__parent
                  : Al(_t208)
                    ? _t208.__slotHost
                    : null));
          }
        })(r, i, l);
      var c = n.__key;
      (0 === s._dirtyType && (s._dirtyType = 1),
        ls(e) ? l.set(c, !0) : s._dirtyLeaves.add(c));
    }
    function oi(t) {
      Bo();
      var e = Ho(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t209 = ii(n);
          null !== _t209 && _t209.getWritable();
        }
        if (null !== t) {
          var _e142 = ii(t);
          null !== _e142 && _e142.getWritable();
        }
      }
    }
    function si() {
      if (zo()) return null;
      return Ho()._compositionKey;
    }
    function ii(t, e) {
      var n = (e || Uo())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function li(t, e) {
      var n = ai(t, Ho());
      return void 0 !== n ? ii(n, e) : null;
    }
    function ci(t, e, n) {
      t["__lexicalKey_" + e._key] = n;
    }
    function ai(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function ui(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t210 = li(n, e);
        if (null !== _t210) return _t210;
        n = Li(n);
      }
      return null;
    }
    function fi(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function di(t) {
      return t.read(function () {
        return hi().getTextContent();
      });
    }
    function hi() {
      return Uo()._nodeMap.get("root");
    }
    function gi(t) {
      Bo();
      var e = Uo();
      (null !== t &&
        ((t.dirty = !0),
        t.setCachedNodes(null),
        Gr(t) && Ho()._slotsUsed && lo(t)),
        (e._selection = t));
    }
    function _i(t) {
      var e = (function (t, e) {
        var n = t;
        for (; null != n; ) {
          var _t211 = ai(n, e);
          if (void 0 !== _t211) return _t211;
          n = Li(n);
        }
        return null;
      })(t, Ho());
      return null === e ? null : ii(e);
    }
    function pi(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function yi(t) {
      var e = [];
      for (var _n100 = t; null !== _n100; _n100 = _n100._parentEditor)
        e.push(_n100);
      return e;
    }
    function mi() {
      return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substring(0, 5);
    }
    function xi(t) {
      return qs(t) ? t.nodeValue : null;
    }
    function Ci(t, e, n) {
      var r = Qi(Wi(e));
      if (null === r) return;
      var o = r.anchorNode;
      var s = r.anchorOffset,
        i = r.focusOffset;
      if (null !== o) {
        var _e143 = xi(o);
        var _r73 = ui(o);
        if (null !== _e143 && $r(_r73)) {
          if ((_e143 === N || _e143 === k) && n) {
            var _t212 = n.length;
            ((_e143 = n), (s = _t212), (i = _t212));
          }
          null !== _e143 && Si(_r73, _e143, s, i, t);
        }
      }
    }
    function Si(t, e, n, r, o) {
      var s = t;
      if (s.isAttached() && (o || !s.isDirty())) {
        var _i26 = s.isComposing();
        var _c12 = e;
        if (
          (_i26 || o) &&
          (e.endsWith(N) && (_c12 = e.slice(0, -N.length)), o)
        ) {
          var _t213 = k;
          var _e144;
          for (; -1 !== (_e144 = _c12.indexOf(_t213)); )
            ((_c12 = _c12.slice(0, _e144) + _c12.slice(_e144 + _t213.length)),
              null !== n &&
                n > _e144 &&
                (n = Math.max(_e144, n - _t213.length)),
              null !== r &&
                r > _e144 &&
                (r = Math.max(_e144, r - _t213.length)));
        }
        var _u10 = s.getTextContent();
        if (o || _c12 !== _u10) {
          var _e145 = _o();
          if ("" === _c12) {
            if ((oi(null), a || l || d)) s.remove();
            else {
              var _t214 = Ho();
              (Ti(s, "", _e145),
                setTimeout(function () {
                  _t214.update(function () {
                    s.isAttached() && "" === s.getTextContent() && s.remove();
                  });
                }, 20));
            }
            return;
          }
          var _o57 = s.getParent(),
            _u11 = po(),
            _f1 = s.getTextContentSize(),
            _h6 = si(),
            _g6 = s.getKey();
          if (
            s.isToken() ||
            (null !== _h6 && _g6 === _h6 && !_i26) ||
            (Gr(_u11) &&
              ((null !== _o57 &&
                !_o57.canInsertTextBefore() &&
                0 === _u11.anchor.offset) ||
                (_u11.anchor.key === t.__key &&
                  0 === _u11.anchor.offset &&
                  !s.canInsertTextBefore() &&
                  !_i26) ||
                (_u11.focus.key === t.__key &&
                  _u11.focus.offset === _f1 &&
                  !s.canInsertTextAfter() &&
                  !_i26)))
          )
            return void s.markDirty();
          if (!Gr(_e145) || null === n || null === r)
            return void Ti(s, _c12, _e145);
          if ((_e145.setTextNodeRange(s, n, s, r), s.isSegmented())) {
            var _t215 = Rr(s.getTextContent());
            (s.replace(_t215), (s = _t215));
          }
          Ti(s, _c12, _e145);
        }
      }
    }
    function Ti(t, e, n) {
      if ((t.setTextContent(e), Gr(n))) {
        var _e146 = t.getKey();
        var _r74 = !1;
        for (var _o58 of ["anchor", "focus"]) {
          var _s37 = n[_o58];
          "text" === _s37.type &&
            _s37.key === _e146 &&
            ((_s37.offset = hc(t, _s37.offset, "clamp")), (_r74 = !0));
        }
        _r74 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
      }
    }
    function Ni(t, e, n) {
      var r = e[n] || !1;
      return "any" === r || r === t[n];
    }
    function vi(t, e) {
      return (
        Ni(t, e, "altKey") &&
        Ni(t, e, "ctrlKey") &&
        Ni(t, e, "shiftKey") &&
        Ni(t, e, "metaKey")
      );
    }
    function ki(t, e, n) {
      if (!vi(t, n)) return !1;
      if (t.key.toLowerCase() === e.toLowerCase()) return !0;
      if (e.length > 1) return !1;
      if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
      if (t.code.startsWith("Digit") && /^\d$/.test(e))
        return t.code === "Digit" + e;
      var r = "Key" + e.toUpperCase();
      return t.code === r;
    }
    var bi = { ctrlKey: !o, metaKey: o },
      Oi = { altKey: o, ctrlKey: !o };
    function Ei(t) {
      return "Backspace" === t.key;
    }
    function Mi(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        r = n[e];
      if (void 0 !== r) return r;
      var o = t[e];
      if ("string" == typeof o) {
        var _t216 = jc(o);
        return ((n[e] = _t216), _t216);
      }
      return o;
    }
    function Ai(e, n, r, o, s) {
      if (0 === r.size) return;
      var i = o.__type,
        l = o.__key,
        c = n.get(i);
      void 0 === c && t(33, i);
      var a = c.klass;
      var u = e.get(a);
      void 0 === u && ((u = new Map()), e.set(a, u));
      var f = u.get(l),
        d = "destroyed" === f && "created" === s;
      (void 0 === f || d) && u.set(l, d ? "updated" : s);
    }
    function wi(t, e, n) {
      var r = t.getParent();
      var o = n,
        s = t;
      return (
        null !== r &&
          (e && 0 === n
            ? ((o = s.getIndexWithinParent()), (s = r))
            : e ||
              n !== s.getChildrenSize() ||
              ((o = s.getIndexWithinParent() + 1), (s = r))),
        s.getChildAtIndex(e ? o - 1 : o)
      );
    }
    function Di(t, e) {
      var n = t.offset;
      if ("element" === t.type) {
        return wi(t.getNode(), e, n);
      }
      {
        var _r75 = t.getNode();
        if ((e && 0 === n) || (!e && n === _r75.getTextContentSize())) {
          var _t217 = e ? _r75.getPreviousSibling() : _r75.getNextSibling();
          return null === _t217
            ? wi(
                _r75.getParentOrThrow(),
                e,
                _r75.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t217;
        }
      }
      return null;
    }
    function Ii(t) {
      var e = Wi(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function Pi(t, e, n) {
      return es(t, e, n, t);
    }
    function Fi(e, n) {
      var r = e._keyToDOMMap.get(n);
      return (void 0 === r && t(75, n), r);
    }
    function Li(t) {
      var e = t.assignedSlot || t.parentElement;
      return nl(e) ? e.host : e;
    }
    function Ri(t) {
      return Xs(t) ? t : tl(t) ? t.ownerDocument : null;
    }
    function $i(t) {
      Bo();
      Ho()._updateTags.add(t);
    }
    function Ki(t) {
      Bo();
      Ho()._deferred.push(t);
    }
    function zi(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function Bi(t) {
      var e = Ri(t);
      return e ? e.defaultView : null;
    }
    function Wi(e) {
      var n = e._window;
      return (null === n && t(78), n);
    }
    function Ui(t) {
      return (ls(t) && t.isInline()) || (us(t) && t.isInline());
    }
    function Hi(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== wl(e) && ls(e)) return e;
        var _t218 = e.getParentOrThrow();
        if (ji(_t218)) return _t218;
        e = _t218;
      }
      return e;
    }
    function ji(t) {
      return ds(t) || (ls(t) && t.isShadowRoot());
    }
    function Yi(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t);
      return (
        ti(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function Ji(e) {
      var n = Ho(),
        r = e.getType(),
        o = Bs(n, r);
      void 0 === o && t(200, e.constructor.name, r);
      var s = o.replace,
        i = o.replaceWithKlass;
      if (null !== s) {
        var _n101 = s(e),
          _o59 = _n101.constructor;
        return (
          null !== i
            ? _n101 instanceof i ||
              t(
                201,
                i.name,
                i.getType(),
                _o59.name,
                _o59.getType(),
                e.constructor.name,
                r,
              )
            : (_n101 instanceof e.constructor && _o59 !== e.constructor) ||
              t(202, _o59.name, _o59.getType(), e.constructor.name, r),
          _n101.__key === e.__key &&
            t(203, e.constructor.name, r, _o59.name, _o59.getType()),
          _n101
        );
      }
      return e;
    }
    function Gi(e, n) {
      !ds(e.getParent()) || ls(n) || us(n) || t(99);
    }
    function Vi(e) {
      var n = ii(e);
      return (null === n && t(63, e), n);
    }
    function qi(t) {
      return (us(t) || (ls(t) && !t.canBeEmpty())) && !t.isInline();
    }
    function Xi(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var r = t.parentElement;
      null !== r && r.removeChild(t);
    }
    function Qi(t) {
      return n ? (t || window).getSelection() : null;
    }
    function Zi(t) {
      var e = Bi(t);
      return e ? e.getSelection() : null;
    }
    function tl(t) {
      return el(t) && 1 === t.nodeType;
    }
    function el(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function nl(t) {
      return el(t) && 11 === t.nodeType;
    }
    var rl =
      /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
    function ol(t) {
      return (
        !(!tl(t) || !t.style.display.startsWith("inline")) ||
        rl.test(t.nodeName)
      );
    }
    var sl =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function il(t) {
      return (
        (!tl(t) || !t.style.display.startsWith("inline")) && sl.test(t.nodeName)
      );
    }
    function ll(t) {
      if (us(t) && !t.isInline()) return !0;
      if (!ls(t) || ji(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || Ss(e) || $r(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function cl() {
      return Ho();
    }
    function al(t) {
      if (t === void 0) {
        t = cl();
      }
      return t._config.dom || Is;
    }
    function ul(e, n, r) {
      if (r === void 0) {
        r = cl();
      }
      var o = al(r).$getDOMSlot(e, n, r);
      return (ls(e) && (fl(o) || t(344, e.getKey(), e.getType())), o);
    }
    function fl(t) {
      return t instanceof _B;
    }
    function dl(t, e, n) {
      if (n === void 0) {
        n = cl();
      }
      return Qs(ul(t, e, n).element);
    }
    var hl = new WeakMap(),
      gl = new Map();
    function _l(e) {
      if (!e._readOnly && e.isEmpty()) return gl;
      e._readOnly || t(192);
      var n = hl.get(e);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref34 of t._nodeMap) {
              var _n102 = _ref34[0];
              var _r76 = _ref34[1];
              {
                var _t219 = _r76.__type;
                var _o60 = e.get(_t219);
                (_o60 || ((_o60 = new Map()), e.set(_t219, _o60)),
                  _o60.set(_n102, _r76));
              }
            }
            return e;
          })(e)),
          hl.set(e, n)),
        n
      );
    }
    function pl(t) {
      var e = t.constructor.clone(t);
      return (e.afterCloneFrom(t), e);
    }
    function yl(t, e) {
      var n = t.getAttribute("data-lexical-indent");
      if (null !== n) {
        var _t220 = parseInt(n, 10);
        if (Number.isFinite(_t220) && _t220 >= 0)
          return void e.setIndent(_t220);
      }
      var r = parseInt(t.style.paddingInlineStart, 10) || 0,
        o = Math.round(r / 40);
      e.setIndent(o);
    }
    function ml(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function xl(t, e) {
      var n = e.style.textAlign;
      return n && n in D ? t.setFormat(n) : t;
    }
    function Cl(t, e) {
      ((t.__lexicalUnmanaged = !0),
        e &&
          void 0 !== e.captureSelection &&
          (t.__lexicalCapturedSelection = e.captureSelection));
    }
    function Sl(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function Tl(t, e) {
      if (e === void 0) {
        e = cl();
      }
      t.contentEditable = e.isEditable() ? "true" : "false";
    }
    function Nl(t, e) {
      var n = t;
      for (; null != n; ) {
        if (!0 === n.__lexicalCapturedSelection) return !0;
        if (tl(n) && n.hasAttribute("data-lexical-slot")) return !1;
        if (void 0 !== ai(n, e)) return !1;
        n = Li(n);
      }
      return !1;
    }
    function vl(t, e) {
      return (
        (function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        })(t, e) && t[e] !== _ar5[e]
      );
    }
    function kl(e) {
      var n = L in e.prototype ? e.prototype[L]() : void 0,
        r = (function (e) {
          if (!(e === _ar5 || e.prototype instanceof _ar5)) {
            var _n103 = "<unknown>",
              _r77 = "<unknown>";
            try {
              _n103 = e.getType();
            } catch (t) {}
            try {
              _Ls.version && (_r77 = JSON.parse(_Ls.version));
            } catch (t) {}
            t(290, e.name, _n103, _r77);
          }
          return e === _as || e === _is4 || e === _ar5;
        })(e),
        o = !r && vl(e, "getType") ? e.getType() : void 0;
      var s,
        i = o;
      if (n)
        if (o) s = n[o];
        else {
          for (var _ref36 of Object.entries(n)) {
            var _t221 = _ref36[0];
            var _e147 = _ref36[1];
            ((i = _t221), (s = _e147));
          }
          if (!s)
            for (var _t222 of Object.getOwnPropertySymbols(n)) {
              var _e148 = n[_t222];
              if (_e148) {
                s = _e148;
                break;
              }
            }
        }
      if (
        !r &&
        i &&
        (vl(e, "getType") ||
          (e.getType = function () {
            return i;
          }),
        vl(e, "clone") ||
          (e.clone = function (t) {
            return ($s(t), new e());
          }),
        vl(e, "importJSON") ||
          (e.importJSON =
            (s && s.$importJSON) ||
            function (t) {
              return new e().updateFromJSON(t);
            }),
        !vl(e, "importDOM") && s)
      ) {
        var _s38 = s,
          _t223 = _s38.importDOM;
        _t223 &&
          (e.importDOM = function () {
            return _t223;
          });
      }
      return { ownNodeConfig: s, ownNodeType: i };
    }
    var bl = function bl(t, e) {
      var n = t;
      for (; null != n && !ds(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function Ol(e, n) {
      var r = [];
      var o = e.__first;
      for (; null !== o; ) {
        var _e149 = null === n ? ii(o) : n.get(o);
        (null == _e149 && t(174), r.push(o), (o = _e149.__next));
      }
      return r;
    }
    var El = new Map();
    function Ml(t) {
      return ls(t) || us(t);
    }
    function Al(t) {
      return ls(t) || us(t);
    }
    function wl(t) {
      var e = t.getLatest();
      return Al(e) ? e.__slotHost : null;
    }
    function Dl(t) {
      var n = wl(t);
      if (null === n) return null;
      var r = ii(n);
      return (
        ls(r) ||
          us(r) ||
          e("slotHost must be an ElementNode or a DecoratorNode"),
        r
      );
    }
    function Il(t) {
      var e = Dl(t);
      if (null === e) return null;
      var n = t.getLatest().__key;
      for (var _ref38 of Fl(e)) {
        var _t224 = _ref38[0];
        var _r78 = _ref38[1];
        if (_r78 === n) return _t224;
      }
      return null;
    }
    function Pl(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== wl(e)) return e;
        e = e.getParent();
      }
      return null;
    }
    function Fl(t) {
      var e = t.getLatest();
      return Ml(e) && null !== e.__slots ? e.__slots : El;
    }
    function Ll(t) {
      return Array.from(Fl(t).keys());
    }
    function Rl(t, e) {
      var n = Fl(t).get(e);
      return void 0 === n ? null : ii(n);
    }
    var $l = ["__proto__", "constructor", "prototype"],
      Kl = Symbol("slotMapOwner");
    function zl(t) {
      var e = t.__slots;
      return (
        (null !== e && e[Kl] === t) ||
          ((e = new Map(e)), (e[Kl] = t), (t.__slots = e)),
        e
      );
    }
    var Bl = new WeakMap(),
      Wl = [];
    function Ul(t) {
      for (
        var _e150 = t;
        null != _e150 && null != _e150.prototype;
        _e150 = Object.getPrototypeOf(_e150)
      ) {
        var _kl4 = kl(_e150),
          _t225 = _kl4.ownNodeConfig,
          _n104 = _t225 && _t225.slots;
        if (_n104) return _n104;
      }
      return Wl;
    }
    function Hl(t) {
      var e = "";
      for (var _n105 of Ll(t)) {
        var _r79 = Rl(t, _n105);
        null !== _r79 && (e += _r79.getTextContent());
      }
      return e;
    }
    function jl(t, e, n) {
      var r = n.get(t),
        o = n.get(e);
      return void 0 !== r
        ? void 0 !== o
          ? r - o
          : -1
        : void 0 !== o
          ? 1
          : t < e
            ? -1
            : t > e
              ? 1
              : 0;
    }
    function Yl(t) {
      var n = t.__slots;
      if (null === n || n.size < 2) return;
      var r = (function (t) {
        var n = Bl.get(t);
        if (void 0 === n) {
          var _r80 = Ul(t),
            _o61 = new Map();
          for (var _n106 of _r80)
            ($l.includes(_n106) &&
              e(
                "getDeclaredSlotRank: " +
                  t.name +
                  ' declares reserved slot name "' +
                  _n106 +
                  '"; __proto__, constructor, and prototype break the plain-object serialization of slots',
              ),
              _o61.has(_n106) &&
                e(
                  "getDeclaredSlotRank: " +
                    t.name +
                    ' declares slot name "' +
                    _n106 +
                    '" more than once; the canonical order would be ambiguous',
                ),
              _o61.set(_n106, _o61.size));
          ((n = _o61), Bl.set(t, n));
        }
        return n;
      })(t.constructor);
      var o = null,
        s = !0;
      for (var _t226 of n.keys()) {
        if (null !== o && jl(o, _t226, r) > 0) {
          s = !1;
          break;
        }
        o = _t226;
      }
      if (s) return;
      var i = Array.from(n).sort(function (_ref39, _ref40) {
        var t = _ref39[0];
        var e = _ref40[0];
        return jl(t, e, r);
      });
      n.clear();
      for (var _ref42 of i) {
        var _t227 = _ref42[0];
        var _e151 = _ref42[1];
        n.set(_t227, _e151);
      }
    }
    function Jl(t, n, r) {
      ("__proto__" !== n && "constructor" !== n && "prototype" !== n) ||
        e(
          '$setSlot: "' +
            n +
            '" is a reserved slot name; __proto__, constructor, and prototype break the plain-object serialization of slots',
        );
      var o = t.getLatest();
      if (null !== o.__slots && o.__slots.get(n) === r.getLatest().__key)
        return o;
      ((!ls(r) && !us(r)) || r.isInline()) &&
        e(
          "$setSlot: node " +
            r.__key +
            " is not a valid slot value; a slot value must be a non-inline ElementNode or DecoratorNode (the slot link itself is the shadow boundary).",
        );
      var s = t.getWritable(),
        i = zl(s),
        l = i.get(n);
      void 0 !== l && ql(l);
      var c = r.getWritable(),
        a = Dl(c);
      if (null !== a) {
        var _t228 = Il(c);
        (null !== _t228 && zl(a.getWritable())["delete"](_t228),
          (c.__slotHost = null));
      }
      return (
        ei(c),
        (c.__slotHost = s.__key),
        i.set(n, c.__key),
        Yl(s),
        (cl()._slotsUsed = !0),
        s
      );
    }
    function Gl(t, e) {
      var n = t.getWritable();
      if (null === n.__slots) return n;
      var r = n.__slots.get(e);
      return (void 0 !== r && (ql(r), zl(n)["delete"](e)), n);
    }
    function Vl(t, e) {}
    function ql(t) {
      var n = ii(t);
      if (null === n) return;
      var r = n.getWritable();
      (Al(r) ||
        e(
          "detach: slotted node " +
            t +
            " must be an ElementNode or a DecoratorNode",
        ),
        (r.__slotHost = null),
        r.remove());
    }
    var Xl = { next: "previous", previous: "next" };
    var _Ql4 = (function () {
      function Ql(t) {
        this.origin = t;
      }
      var _proto18 = Ql.prototype;
      _proto18[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return Nc({
            hasNext: ic,
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
        return fc(this.getNodeAtCaret(), this.direction);
      };
      _proto18.getSiblingCaret = function getSiblingCaret() {
        return fc(this.origin, this.direction);
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
        var s = this;
        var i = this.getParentAtCaret(),
          l = new Map();
        for (
          var _t229 = s.getAdjacentCaret();
          null !== _t229 && l.size < e;
          _t229 = _t229.getAdjacentCaret()
        ) {
          var _e152 = _t229.origin.getWritable();
          l.set(_e152.getKey(), _e152);
        }
        for (var _e153 of o) {
          if (l.size > 0) {
            var _n107 = s.getNodeAtCaret();
            if (_n107) {
              if (
                (l["delete"](_n107.getKey()),
                l["delete"](_e153.getKey()),
                _n107.is(_e153) || s.origin.is(_e153))
              );
              else {
                var _t230 = _e153.getParent();
                (_t230 && _t230.is(i) && _e153.remove(), _n107.replace(_e153));
              }
            } else null === _n107 && t(263, Array.from(l).join(" "));
          } else s.insert(_e153);
          s = fc(_e153, this.direction);
        }
        for (var _t231 of l.values()) _t231.remove();
        return this;
      };
      return Ql;
    })();
    var _Zl3 = (function (_Ql) {
      function Zl() {
        var _this6;
        for (
          var _len6 = arguments.length, args = new Array(_len6), _key6 = 0;
          _key6 < _len6;
          _key6++
        ) {
          args[_key6] = arguments[_key6];
        }
        return (
          ((_this6 = _Ql.call.apply(_Ql, [this].concat(args)) || this),
          (_this6.type = "child"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(Zl, _Ql);
      var _proto19 = Zl.prototype;
      _proto19.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : _c(t, this.direction);
      };
      _proto19.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return fc(nc(this.getParentAtCaret(), t), this.direction);
      };
      _proto19.getFlipped = function getFlipped() {
        var t = ec(this.direction);
        return fc(this.getNodeAtCaret(), t) || _c(this.origin, t);
      };
      _proto19.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto19.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto19.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof Zl &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto19.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return Zl;
    })(_Ql4);
    var tc = { root: ds, shadowRoot: ji };
    function ec(t) {
      return Xl[t];
    }
    function nc(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return null === t || tc[e](t) ? null : null === wl(t) ? t : null;
    }
    var _rc3 = (function (_Ql2) {
      function rc() {
        var _this7;
        for (
          var _len7 = arguments.length, args = new Array(_len7), _key7 = 0;
          _key7 < _len7;
          _key7++
        ) {
          args[_key7] = arguments[_key7];
        }
        return (
          ((_this7 = _Ql2.call.apply(_Ql2, [this].concat(args)) || this),
          (_this7.type = "sibling"),
          babelHelpers.assertThisInitialized(_this7)) ||
          babelHelpers.assertThisInitialized(_this7)
        );
      }
      babelHelpers.inheritsLoose(rc, _Ql2);
      var _proto20 = rc.prototype;
      _proto20.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : fc(t, this.direction);
      };
      _proto20.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto20.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto20.getChildCaret = function getChildCaret() {
        return ls(this.origin) ? _c(this.origin, this.direction) : null;
      };
      _proto20.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return fc(nc(this.getParentAtCaret(), t), this.direction);
      };
      _proto20.getFlipped = function getFlipped() {
        var t = ec(this.direction);
        return (
          fc(this.getNodeAtCaret(), t) || _c(this.origin.getParentOrThrow(), t)
        );
      };
      _proto20.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof rc &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto20.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof rc || t instanceof _oc3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return rc;
    })(_Ql4);
    var _oc3 = (function (_Ql3) {
      function oc(t, e) {
        var _this8;
        ((_this8 = _Ql3.call(this, t) || this),
          (_this8.type = "text"),
          (_this8.offset = e));
        return _this8;
      }
      babelHelpers.inheritsLoose(oc, _Ql3);
      var _proto21 = oc.prototype;
      _proto21.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : dc(t, this.direction, this.offset);
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
        return fc(nc(this.getParentAtCaret(), t), this.direction);
      };
      _proto21.getFlipped = function getFlipped() {
        return dc(this.origin, ec(this.direction), this.offset);
      };
      _proto21.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof oc &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto21.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _rc3 || t instanceof oc) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto21.getSiblingCaret = function getSiblingCaret() {
        return fc(this.origin, this.direction);
      };
      return oc;
    })(_Ql4);
    function sc(t) {
      return t instanceof _oc3;
    }
    function ic(t) {
      return t instanceof _rc3;
    }
    function lc(t) {
      return t instanceof _Zl3;
    }
    var cc = {
        next: (function (_oc) {
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
              ((_this9 = _oc.call.apply(_oc, [this].concat(args)) || this),
              (_this9.direction = "next"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class, _oc);
          var _proto22 = _class.prototype;
          _proto22.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto22.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_oc3),
        previous: (function (_oc2) {
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
              ((_this0 = _oc2.call.apply(_oc2, [this].concat(args)) || this),
              (_this0.direction = "previous"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class3, _oc2);
          var _proto23 = _class3.prototype;
          _proto23.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto23.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_oc3),
      },
      ac = {
        next: (function (_rc) {
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
              ((_this1 = _rc.call.apply(_rc, [this].concat(args)) || this),
              (_this1.direction = "next"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class5, _rc);
          var _proto24 = _class5.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_rc3),
        previous: (function (_rc2) {
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
              ((_this10 = _rc2.call.apply(_rc2, [this].concat(args)) || this),
              (_this10.direction = "previous"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class7, _rc2);
          var _proto25 = _class7.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_rc3),
      },
      uc = {
        next: (function (_Zl) {
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
              ((_this11 = _Zl.call.apply(_Zl, [this].concat(args)) || this),
              (_this11.direction = "next"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class9, _Zl);
          var _proto26 = _class9.prototype;
          _proto26.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto26.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_Zl3),
        previous: (function (_Zl2) {
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
              ((_this12 = _Zl2.call.apply(_Zl2, [this].concat(args)) || this),
              (_this12.direction = "previous"),
              babelHelpers.assertThisInitialized(_this12)) ||
              babelHelpers.assertThisInitialized(_this12)
            );
          }
          babelHelpers.inheritsLoose(_class1, _Zl2);
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
        })(_Zl3),
      };
    function fc(t, e) {
      return t ? new ac[e](t) : null;
    }
    function dc(t, e, n) {
      return t ? new cc[e](t, hc(t, n)) : null;
    }
    function hc(t, e, n) {
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
                var _len12 = arguments.length,
                  e = new Array(_len12 > 1 ? _len12 - 1 : 0),
                  _key12 = 1;
                _key12 < _len12;
                _key12++
              ) {
                e[_key12 - 1] = arguments[_key12];
              }
              for (var _t232 of e) r.append("v", _t232);
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
    function gc(t, e) {
      return new _xc(t, e);
    }
    function _c(t, e) {
      return ls(t) ? new uc[e](t) : null;
    }
    function pc(t) {
      return (t && t.getChildCaret()) || t;
    }
    function yc(t) {
      return t && pc(t.getAdjacentCaret());
    }
    var _mc = (function () {
      function mc(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto28 = mc.prototype;
      _proto28.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new mc(t, e, this.direction);
      };
      _proto28.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto28.getTextSlices = function getTextSlices() {
        var _this15 = this;
        var t = function t(_t233) {
            var e = _this15[_t233].getLatest();
            return sc(e)
              ? (function (t, e) {
                  var n = t.direction,
                    r = t.origin,
                    o = hc(r, "focus" === e ? ec(n) : n);
                  return gc(t, o - t.offset);
                })(e, _t233)
              : null;
          },
          e = t("anchor"),
          n = t("focus");
        if (e && n) {
          var _t234 = e.caret,
            _r81 = n.caret;
          if (_t234.isSameNodeCaret(_r81))
            return [gc(_t234, _r81.offset - _t234.offset), null];
        }
        return [e, n];
      };
      _proto28.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = sc(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          r = sc(n),
          o = function o(e) {
            return e.isSameNodeCaret(n) ? null : yc(e) || e.getParentCaret(t);
          };
        return Nc({
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
      return mc;
    })();
    var _xc = (function () {
      function xc(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto29 = xc.prototype;
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
        return dc(t.setTextContent(o.slice(0, n) + o.slice(r)), e, n);
      };
      return xc;
    })();
    function Cc(t) {
      return Tc(t, fc(hi(), t.direction));
    }
    function Sc(t) {
      return Tc(t, t);
    }
    function Tc(e, n) {
      return (
        e.direction !== n.direction && t(265),
        new _mc(e, n, e.direction)
      );
    }
    function Nc(t) {
      var _ref43;
      var e = t.initial,
        n = t.hasNext,
        r = t.step,
        o = t.map;
      var s = e;
      return (
        (_ref43 = {}),
        (_ref43[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
          function () {
            return this;
          }),
        (_ref43.next = function next() {
          if (!n(s)) return { done: !0, value: void 0 };
          var t = { done: !1, value: o(s) };
          return ((s = r(s)), t);
        }),
        _ref43
      );
    }
    function vc(e, n) {
      var r = Ec(e.origin, n.origin);
      switch (
        (null === r && t(275, e.origin.getKey(), n.origin.getKey()), r.type)
      ) {
        case "same": {
          var _t235 = "text" === e.type,
            _r82 = "text" === n.type;
          return _t235 && _r82
            ? (function (t, e) {
                return Math.sign(t - e);
              })(e.offset, n.offset)
            : e.type === n.type
              ? 0
              : _t235
                ? -1
                : _r82
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
          return kc(r);
      }
    }
    function kc(t) {
      var e = t.a,
        n = t.b,
        r = e.__key,
        o = n.__key;
      var s = e,
        i = n;
      for (; s && i; s = s.getNextSibling(), i = i.getNextSibling()) {
        if (s.__key === o) return -1;
        if (i.__key === r) return 1;
      }
      return null === s ? 1 : -1;
    }
    function bc(t, e) {
      return e.is(t);
    }
    function Oc(t) {
      return ls(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function Ec(e, n) {
      if (e.is(n)) return { commonAncestor: e, type: "same" };
      var r = new Map();
      for (
        var _Oc = Oc(e), _t236 = _Oc[0], _n108 = _Oc[1];
        _t236;
        _n108 = _t236, _t236 = _t236.getParent()
      )
        r.set(_t236, _n108);
      for (
        var _Oc2 = Oc(n), _o62 = _Oc2[0], _s39 = _Oc2[1];
        _o62;
        _s39 = _o62, _o62 = _o62.getParent()
      ) {
        var _i27 = r.get(_o62);
        if (void 0 !== _i27)
          return null === _i27
            ? (bc(e, _o62) || t(276),
              { commonAncestor: _o62, type: "ancestor" })
            : null === _s39
              ? (bc(n, _o62) || t(277),
                { commonAncestor: _o62, type: "descendant" })
              : (((ls(_i27) || bc(e, _i27)) &&
                  (ls(_s39) || bc(n, _s39)) &&
                  _o62.is(_i27.getParent()) &&
                  _o62.is(_s39.getParent())) ||
                  t(278),
                { a: _i27, b: _s39, commonAncestor: _o62, type: "branch" });
      }
      return null;
    }
    function Mc(e, n) {
      var r = e.type,
        o = e.key,
        s = e.offset,
        i = Vi(e.key);
      return "text" === r
        ? ($r(i) || t(266, i.getType(), o), dc(i, n, s))
        : (ls(i) || t(267, i.getType(), o), Wc(i, e.offset, n));
    }
    function Ac(e, n) {
      var r = n.origin,
        o = n.direction,
        s = "next" === o;
      sc(n)
        ? e.set(r.getKey(), n.offset, "text")
        : ic(n)
          ? $r(r)
            ? e.set(r.getKey(), hc(r, o), "text")
            : e.set(
                r.getParentOrThrow().getKey(),
                r.getIndexWithinParent() + (s ? 1 : 0),
                "element",
              )
          : ((lc(n) && ls(r)) || t(268),
            e.set(r.getKey(), s ? 0 : r.getChildrenSize(), "element"));
    }
    function wc(t) {
      var e = _o(),
        n = Gr(e) ? e : fo();
      return (Dc(n, t), gi(n), n);
    }
    function Dc(t, e) {
      (Ac(t.anchor, e.anchor), Ac(t.focus, e.focus));
    }
    function Ic(t) {
      var e = t.anchor,
        n = t.focus,
        r = Mc(e, "next"),
        o = Mc(n, "next"),
        s = vc(r, o) <= 0 ? "next" : "previous";
      return Tc(zc(r, s), zc(o, s));
    }
    function Pc(t) {
      var e = t.direction,
        n = t.origin,
        r = fc(n, ec(e)).getNodeAtCaret();
      return r ? fc(r, e) : _c(n.getParentOrThrow(), e);
    }
    function Fc(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _r83 = lc(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _r83;
        _r83 = _r83.getParentCaret(e)
      )
        n.push(Pc(_r83));
      return n;
    }
    function Lc(t) {
      return !!t && t.origin.isAttached();
    }
    function Rc(e, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (e.isCollapsed()) return e;
      var r = "root",
        o = "next";
      var s = n;
      var i = Bc(e, o),
        l = Fc(i.anchor, r),
        c = Fc(i.focus.getFlipped(), r),
        a = new Set(),
        u = [];
      for (var _t237 of i.iterNodeCarets(r))
        if (lc(_t237)) a.add(_t237.origin.getKey());
        else if (ic(_t237)) {
          var _e154 = _t237.origin;
          (ls(_e154) && !a.has(_e154.getKey())) || u.push(_e154);
        }
      for (var _t238 of u) _t238.remove();
      for (var _t239 of i.getTextSlices()) {
        if (!_t239) continue;
        var _e155 = _t239.caret.origin,
          _n109 = _e155.getTextContentSize(),
          _r84 = Pc(fc(_e155, o)),
          _i28 = _e155.getMode();
        if (
          (Math.abs(_t239.distance) === _n109 && "removeEmptySlices" === s) ||
          ("token" === _i28 && 0 !== _t239.distance)
        )
          _r84.remove();
        else if (0 !== _t239.distance) {
          s = "removeEmptySlices";
          var _e156 = _t239.removeTextSlice();
          var _n110 = _t239.caret.origin;
          if ("segmented" === _i28) {
            var _t240 = _e156.origin,
              _n111 = Rr(_t240.getTextContent())
                .setStyle(_t240.getStyle())
                .setFormat(_t240.getFormat());
            (_r84.replaceOrInsert(_n111), (_e156 = dc(_n111, o, _e156.offset)));
          }
          (_n110.is(l[0].origin) && (l[0] = _e156),
            _n110.is(c[0].origin) && (c[0] = _e156.getFlipped()));
        }
      }
      var f, d;
      for (var _t241 of l)
        if (Lc(_t241)) {
          f = $c(_t241);
          break;
        }
      for (var _t242 of c)
        if (Lc(_t242)) {
          d = $c(_t242);
          break;
        }
      var h = (function (t, e, n) {
        if (!t || !e) return null;
        var r = t.getParentAtCaret(),
          o = e.getParentAtCaret();
        if (!r || !o) return null;
        var s = r.getParents().reverse();
        s.push(r);
        var i = o.getParents().reverse();
        i.push(o);
        var l = Math.min(s.length, i.length);
        var c;
        for (c = 0; c < l && s[c] === i[c]; c++);
        var a = function a(t, e) {
            var n;
            for (var _r85 = c; _r85 < t.length; _r85++) {
              var _o63 = t[_r85];
              if (ji(_o63)) return;
              !n && e(_o63) && (n = _o63);
            }
            return n;
          },
          u = a(s, ll),
          f =
            u &&
            a(i, function (t) {
              return n.has(t.getKey()) && ll(t);
            });
        if (f && Ll(f).length > 0) return null;
        return u && f ? [u, f] : null;
      })(f, d, a);
      if (h) {
        var _t243 = h[0],
          _e157 = h[1];
        _c(_t243, "previous").splice(0, _e157.getChildren());
        var _n112 = _e157.getParent();
        for (_e157.remove(!0); _n112 && _n112.isEmpty(); ) {
          var _t244 = _n112;
          ((_n112 = _n112.getParent()), _t244.remove(!0));
        }
      }
      var g = [f, d].concat(l, c).find(Lc);
      if (g) {
        return Sc(zc($c(g), e.direction));
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
    function $c(t) {
      var e = (function (t) {
          var e = t;
          for (; lc(e); ) {
            var _t245 = yc(e);
            if (!lc(_t245)) break;
            e = _t245;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if ($r(e.origin)) return sc(e) ? e : dc(e.origin, n, n);
      var r = e.getAdjacentCaret();
      return ic(r) && $r(r.origin) ? dc(r.origin, n, ec(n)) : e;
    }
    function Kc(t) {
      return sc(t) && t.offset !== hc(t.origin, t.direction);
    }
    function zc(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function Bc(t, e) {
      return t.direction === e ? t : Tc(zc(t.focus, e), zc(t.anchor, e));
    }
    function Wc(t, e, n) {
      var r = _c(t, "next");
      for (var _t246 = 0; _t246 < e; _t246++) {
        var _t247 = r.getAdjacentCaret();
        if (null === _t247) break;
        r = _t247;
      }
      return zc(r, n);
    }
    function Uc(e) {
      var n = e.origin,
        r = e.offset,
        o = e.direction;
      if (r === hc(n, o)) return e.getSiblingCaret();
      if (r === hc(n, ec(o))) return Pc(e.getSiblingCaret());
      var _n$splitText2 = n.splitText(r),
        s = _n$splitText2[0];
      return ($r(s) || t(281), zc(fc(s, "next"), o));
    }
    function Hc(t, e) {
      return !0;
    }
    function jc() {
      var e = [];
      for (
        var _len13 = arguments.length, t = new Array(_len13), _key13 = 0;
        _key13 < _len13;
        _key13++
      ) {
        t[_key13] = arguments[_key13];
      }
      for (var _n113 of t)
        if (_n113 && "string" == typeof _n113)
          for (var _ref45 of _n113.matchAll(/\S+/g)) {
            var _t248 = _ref45[0];
            e.push(_t248);
          }
      return e;
    }
    function Yc() {
      for (
        var _len14 = arguments.length, t = new Array(_len14), _key14 = 0;
        _key14 < _len14;
        _key14++
      ) {
        t[_key14] = arguments[_key14];
      }
      return function () {
        for (var _e158 = t.length - 1; _e158 >= 0; _e158--) t[_e158]();
        t.length = 0;
      };
    }
    ((exports.$addUpdateTag = $i),
      (exports.$applyNodeReplacement = Ji),
      (exports.$assumeActiveEditor = function (t) {
        var e;
        (null !== Uo() && null === Io && (Io = t),
          Io !== t &&
            ((e =
              "The given editor argument does not match $getEditor() in this context. Use editor.getEditorState().read(..., {editor}) if this cross-editor call is intentional."),
            console.warn(e)));
      }),
      (exports.$caretFromPoint = Mc),
      (exports.$caretRangeFromSelection = Ic),
      (exports.$cloneWithProperties = pl),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = pl(t))[ir] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = vc),
      (exports.$copyNode = Yi),
      (exports.$create = function (t) {
        var e = cl();
        return (
          Bo(),
          new (e.resolveRegisteredNodeAfterReplacements(
            e.getRegisteredNode(t),
          ).klass)()
        );
      }),
      (exports.$createChildrenArray = Ol),
      (exports.$createLineBreakNode = Cs),
      (exports.$createNodeSelection = ho),
      (exports.$createParagraphNode = Os),
      (exports.$createPoint = Hr),
      (exports.$createRangeSelection = fo),
      (exports.$createRangeSelectionFromDom = function (t, e) {
        return go(null, t, e, null);
      }),
      (exports.$createTabNode = Br),
      (exports.$createTextNode = Rr),
      (exports.$extendCaretToRange = Cc),
      (exports.$findMatchingParent = bl),
      (exports.$fullReconcile = jo),
      (exports.$generateNodesFromRawText = ko),
      (exports.$getAdjacentChildCaret = yc),
      (exports.$getAdjacentNode = Di),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          r = t,
          o = yc(r);
        for (; null === o; ) {
          if ((n--, (o = r.getParentCaret(e)), !o)) return null;
          ((r = o), (o = yc(r)));
        }
        return o && [o, n];
      }),
      (exports.$getCaretInDirection = zc),
      (exports.$getCaretRange = Tc),
      (exports.$getCaretRangeInDirection = Bc),
      (exports.$getCharacterOffsets = Qr),
      (exports.$getChildCaret = _c),
      (exports.$getChildCaretAtIndex = Wc),
      (exports.$getChildCaretOrSelf = pc),
      (exports.$getCollapsedCaretRange = Sc),
      (exports.$getCommonAncestor = Ec),
      (exports.$getCommonAncestorResultBranchOrder = kc),
      (exports.$getDOMSlot = ul),
      (exports.$getDOMTextNode = dl),
      (exports.$getEditor = cl),
      (exports.$getEditorDOMRenderConfig = al),
      (exports.$getNearestNodeFromDOMNode = ui),
      (exports.$getNearestRootOrShadowRoot = Hi),
      (exports.$getNodeByKey = ii),
      (exports.$getNodeByKeyOrThrow = Vi),
      (exports.$getNodeFromDOMNode = li),
      (exports.$getPreviousSelection = po),
      (exports.$getRoot = hi),
      (exports.$getSelection = _o),
      (exports.$getSiblingCaret = fc),
      (exports.$getSlot = Rl),
      (exports.$getSlotFrame = Pl),
      (exports.$getSlotHost = Dl),
      (exports.$getSlotNameWithinHost = Il),
      (exports.$getSlotNames = Ll),
      (exports.$getState = at),
      (exports.$getStateChange = function (t, e, n) {
        var r = at(t, n, it),
          o = at(e, n, it);
        return n.isEqual(r, o) ? null : [r, o];
      }),
      (exports.$getTextContent = function () {
        var t = _o();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = hc),
      (exports.$getTextPointCaret = dc),
      (exports.$getTextPointCaretSlice = gc),
      (exports.$getWritableNodeState = ht),
      (exports.$hasAncestor = zi),
      (exports.$hasUpdateTag = function (t) {
        return Ho()._updateTags.has(t);
      }),
      (exports.$insertNodes = function (t) {
        var e = _o() || po();
        (null === e && (e = hi().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = ao),
      (exports.$isChildCaret = lc),
      (exports.$isDecoratorNode = us),
      (exports.$isEditorState = function (t) {
        return t instanceof _ps;
      }),
      (exports.$isElementDOMSlot = fl),
      (exports.$isElementNode = ls),
      (exports.$isExtendableTextPointCaret = Kc),
      (exports.$isInlineElementOrDecoratorNode = Ui),
      (exports.$isLeafNode = function (t) {
        return $r(t) || Ss(t) || us(t);
      }),
      (exports.$isLexicalNode = ur),
      (exports.$isLineBreakNode = Ss),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _Ql4;
      }),
      (exports.$isNodeSelection = qr),
      (exports.$isParagraphNode = Es),
      (exports.$isRangeSelection = Gr),
      (exports.$isRootNode = ds),
      (exports.$isRootOrShadowRoot = ji),
      (exports.$isSiblingCaret = ic),
      (exports.$isSlotChild = Al),
      (exports.$isSlotHost = Ml),
      (exports.$isTabNode = Wr),
      (exports.$isTextNode = $r),
      (exports.$isTextPointCaret = sc),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _xc;
      }),
      (exports.$isTokenOrSegmented = Vs),
      (exports.$isTokenOrTab = Gs),
      (exports.$markSlotEditable = Tl),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = Uo();
        if (n._readOnly) {
          var _t249 = _l(n).get(e);
          return _t249 ? Array.from(_t249.values()) : [];
        }
        var r = n._nodeMap,
          o = [];
        for (var _ref47 of r) {
          var _n114 = _ref47[1];
          _n114 instanceof t &&
            _n114.__type === e &&
            _n114.isAttached() &&
            o.push(_n114);
        }
        return o;
      }),
      (exports.$normalizeCaret = $c),
      (exports.$normalizeSelection__EXPERIMENTAL = Nt),
      (exports.$onUpdate = Ki),
      (exports.$parseSerializedNode = function (t) {
        return Xo(t, Ho()._nodes);
      }),
      (exports.$removeFromParent = ei),
      (exports.$removeSlot = Gl),
      (exports.$removeTextFromCaretRange = Rc),
      (exports.$rewindSiblingCaret = Pc),
      (exports.$selectAll = function (t) {
        var e = hi();
        if (Gr(t)) {
          var _e159 = t.anchor,
            _n115 = t.focus,
            _r86 = _e159.getNode();
          if (ds(_r86))
            return (
              _e159.set(_r86.getKey(), 0, "element"),
              _n115.set(_r86.getKey(), _r86.getChildrenSize(), "element"),
              Nt(t),
              t
            );
          var _o64 = _r86.getTopLevelElementOrThrow(),
            _s40 = _o64.getParent();
          if (null === _s40)
            return (
              ls(_o64) &&
                (_e159.set(_o64.getKey(), 0, "element"),
                _n115.set(_o64.getKey(), _o64.getChildrenSize(), "element"),
                Nt(t)),
              t
            );
          var _i29 = _s40;
          return (
            _e159.set(_i29.getKey(), 0, "element"),
            _n115.set(_i29.getKey(), _i29.getChildrenSize(), "element"),
            Nt(t),
            t
          );
        }
        {
          var _t250 = e.select(0, e.getChildrenSize());
          return (gi(Nt(_t250)), _t250);
        }
      }),
      (exports.$setCompositionKey = oi),
      (exports.$setDirectionFromDOM = ml),
      (exports.$setFormatFromDOM = xl),
      (exports.$setPointFromCaret = Ac),
      (exports.$setSelection = gi),
      (exports.$setSelectionFromCaretRange = wc),
      (exports.$setSlot = Jl),
      (exports.$setState = function (t, e, n) {
        var r;
        if ((Bo(), "function" == typeof n)) {
          var _o65 = t.getLatest(),
            _s41 = at(_o65, e);
          if (((r = n(_s41)), e.isEqual(_s41, r))) return _o65;
        } else r = n;
        var o = t.getWritable();
        return (ht(o).updateFromKnown(e, r), o);
      }),
      (exports.$splitAtPointCaretNext = function (t, _temp) {
        var _ref48 = _temp === void 0 ? {} : _temp,
          _ref48$$copyElementNo = _ref48.$copyElementNode,
          e = _ref48$$copyElementNo === void 0 ? Yi : _ref48$$copyElementNo,
          _ref48$$splitTextPoin = _ref48.$splitTextPointCaretNext,
          n = _ref48$$splitTextPoin === void 0 ? Uc : _ref48$$splitTextPoin,
          _ref48$rootMode = _ref48.rootMode,
          r = _ref48$rootMode === void 0 ? "shadowRoot" : _ref48$rootMode,
          _ref48$$shouldSplit = _ref48.$shouldSplit,
          o = _ref48$$shouldSplit === void 0 ? Hc : _ref48$$shouldSplit,
          _ref48$removeEmptyDes = _ref48.removeEmptyDestination,
          s = _ref48$removeEmptyDes === void 0 ? !1 : _ref48$removeEmptyDes;
        if (sc(t)) return n(t);
        var i = t.getParentCaret(r);
        if (i) {
          var _n116 = i.origin;
          if (lc(t)) {
            var _t251 = Pc(i);
            if (s && _n116.isEmpty()) return (_n116.remove(), _t251);
            if (!_n116.canBeEmpty() || !o(_n116, "first")) return _t251;
          }
          var _r87 = (function (t) {
            var e = [];
            for (
              var _n117 = t.getAdjacentCaret();
              _n117;
              _n117 = _n117.getAdjacentCaret()
            )
              e.push(_n117.origin);
            return e;
          })(t);
          (_r87.length > 0 || (!s && _n116.canBeEmpty() && o(_n116, "last"))) &&
            i.insert(e(_n116).splice(0, 0, _r87));
        }
        return i;
      }),
      (exports.$splitNode = function (e, n) {
        var r = e.getChildAtIndex(n);
        (null == r && (r = e), ji(e) && t(102));
        var _o68 = function o(e) {
            var n = e.getParentOrThrow(),
              s = ji(n),
              i = e !== r || s ? Yi(e) : e;
            if (s)
              return ((ls(e) && ls(i)) || t(133), e.insertAfter(i), [e, i, i]);
            {
              var _o67 = _o68(n),
                _t252 = _o67[0],
                _r88 = _o67[1],
                _s42 = _o67[2],
                _l15 = e.getNextSiblings();
              return (
                _s42.append.apply(_s42, [i].concat(_l15)),
                [_t252, _r88, i]
              );
            }
          },
          _o66 = _o68(r),
          s = _o66[0],
          i = _o66[1];
        return [s, i];
      }),
      (exports.$updateDOMSelection = No),
      (exports.$updateRangeSelectionFromCaretRange = Dc),
      (exports.ArtificialNode__DO_NOT_USE = _ys),
      (exports.BEFORE_INPUT_COMMAND = be),
      (exports.BLUR_COMMAND = yn),
      (exports.CAN_REDO_COMMAND = gn),
      (exports.CAN_UNDO_COMMAND = _n),
      (exports.CAN_USE_BEFORE_INPUT = i),
      (exports.CAN_USE_DOM = n),
      (exports.CLEAR_EDITOR_COMMAND = dn),
      (exports.CLEAR_HISTORY_COMMAND = hn),
      (exports.CLICK_COMMAND = ke),
      (exports.COLLABORATION_TAG = dr),
      (exports.COMMAND_PRIORITY_BEFORE_CRITICAL = -4),
      (exports.COMMAND_PRIORITY_BEFORE_EDITOR = -8),
      (exports.COMMAND_PRIORITY_BEFORE_HIGH = -5),
      (exports.COMMAND_PRIORITY_BEFORE_LOW = -7),
      (exports.COMMAND_PRIORITY_BEFORE_NORMAL = -6),
      (exports.COMMAND_PRIORITY_CRITICAL = 4),
      (exports.COMMAND_PRIORITY_EDITOR = As),
      (exports.COMMAND_PRIORITY_HIGH = 3),
      (exports.COMMAND_PRIORITY_LOW = 1),
      (exports.COMMAND_PRIORITY_NORMAL = 2),
      (exports.COMPOSITION_END_COMMAND = Me),
      (exports.COMPOSITION_END_TAG = yr),
      (exports.COMPOSITION_START_COMMAND = Ee),
      (exports.COMPOSITION_START_TAG = pr),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = Ie),
      (exports.COPY_COMMAND = an),
      (exports.CUT_COMMAND = un),
      (exports.CUT_TAG = "cut"),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = Is),
      (exports.DELETE_CHARACTER_COMMAND = Ae),
      (exports.DELETE_LINE_COMMAND = Re),
      (exports.DELETE_WORD_COMMAND = Le),
      (exports.DRAGEND_COMMAND = cn),
      (exports.DRAGOVER_COMMAND = ln),
      (exports.DRAGSTART_COMMAND = sn),
      (exports.DROP_COMMAND = rn),
      (exports.DecoratorNode = _as),
      (exports.ElementNode = _is4),
      (exports.FOCUS_COMMAND = pn),
      (exports.FORMAT_ELEMENT_COMMAND = on),
      (exports.FORMAT_TEXT_COMMAND = $e),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = fr),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = en),
      (exports.INPUT_COMMAND = Oe),
      (exports.INSERT_LINE_BREAK_COMMAND = we),
      (exports.INSERT_PARAGRAPH_COMMAND = De),
      (exports.INSERT_TAB_COMMAND = tn),
      (exports.INTERNAL_$isBlock = ll),
      (exports.IS_ALL_FORMATTING = 2047),
      (exports.IS_ANDROID = c),
      (exports.IS_ANDROID_CHROME = f),
      (exports.IS_APPLE = o),
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
      (exports.LineBreakNode = _ms),
      (exports.MOVE_TO_END = Ue),
      (exports.MOVE_TO_START = je),
      (exports.NODE_STATE_DIRECT = it),
      (exports.NODE_STATE_KEY = "$"),
      (exports.NODE_STATE_LATEST = lt),
      (exports.OUTDENT_CONTENT_COMMAND = nn),
      (exports.PASTE_COMMAND = Pe),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _ks),
      (exports.REDO_COMMAND = ze),
      (exports.REMOVE_TEXT_COMMAND = Fe),
      (exports.RootNode = _fs),
      (exports.SELECTION_CHANGE_COMMAND = Ne),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = ve),
      (exports.SELECT_ALL_COMMAND = fn),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = gr),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = hr),
      (exports.SKIP_SELECTION_FOCUS_TAG = _r),
      (exports.TEXT_TYPE_TO_FORMAT = A),
      (exports.TabNode = _zr),
      (exports.TextNode = _Er2),
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
        var n = jc.apply(void 0, e);
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
      (exports.createCommand = Te),
      (exports.createEditor = function (t) {
        var e = t || {},
          n = Jo(),
          r = e.theme || {},
          o = void 0 === t ? n : e.parentEditor || null,
          s = e.disableEvents || !1,
          i = gs(),
          l = e.namespace || (null !== o ? o._config.namespace : mi()),
          c = e.editorState,
          a = [_fs, _Er2, _ms, _zr, _ks, _ys].concat(e.nodes || []),
          u = e.onError,
          f = e.onWarn,
          d = e.html,
          h = void 0 === e.editable || e.editable;
        var g;
        if (void 0 === t && null !== n) g = n._nodes;
        else {
          g = new Map();
          for (var _t253 = 0; _t253 < a.length; _t253++) {
            var _e160 = a[_t253],
              _n118 = null,
              _r89 = null;
            if ("function" != typeof _e160) {
              var _t254 = _e160;
              ((_e160 = _t254.replace),
                (_n118 = _t254["with"]),
                (_r89 = _t254.withKlass || null));
            }
            kl(_e160);
            var _o69 = _e160.getType(),
              _s43 = Ds(_e160);
            g.set(_o69, {
              exportDOM: d && d["export"] ? d["export"].get(_e160) : void 0,
              klass: _e160,
              replace: _n118,
              replaceWithKlass: _r89,
              sharedNodeState: ut(a[_t253]),
              transforms: _s43,
            });
          }
        }
        var _ = new _Ls(
          i,
          o,
          g,
          {
            disableEvents: s,
            dom: babelHelpers["extends"]({}, Is, t && t.dom),
            namespace: l,
            theme: r,
          },
          u || console.error,
          f || Ms,
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
          })(g, d ? d["import"] : void 0),
          h,
          t,
        );
        return (
          void 0 !== c && ((_._pendingEditorState = c), (_._dirtyType = 2)),
          (function (t) {
            (t.registerCommand(be, Yn, As),
              t.registerCommand(Oe, Jn, As),
              t.registerCommand(Ee, Gn, As),
              t.registerCommand(Me, Vn, As),
              t.registerCommand(Be, Xn, As));
          })(_),
          _
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
      (exports.flipDirection = ec),
      (exports.getDOMOwnerDocument = Ri),
      (exports.getDOMSelection = Qi),
      (exports.getDOMSelectionFromTarget = Zi),
      (exports.getDOMTextNode = Qs),
      (exports.getDeclaredSlots = Ul),
      (exports.getEditorPropertyFromDOMNode = Js),
      (exports.getNearestEditorFromDOMNode = Ys),
      (exports.getRegisteredNode = Bs),
      (exports.getRegisteredNodeOrThrow = zs),
      (exports.getRegisteredSubtypeMap = function (t) {
        var e = new Map(),
          n = new Map();
        for (var _r90 of t) {
          var _kl5 = kl(_r90),
            _t255 = _kl5.ownNodeType;
          _t255 && (n.set(_t255, _r90), e.set(_t255, new Set()));
        }
        for (var _ref50 of n) {
          var _t256 = _ref50[0];
          var _r91 = _ref50[1];
          for (
            var _n119 = _r91;
            ur(_n119.prototype);
            _n119 = Object.getPrototypeOf(_n119)
          ) {
            var _kl6 = kl(_n119),
              _r92 = _kl6.ownNodeType,
              _o70 = _r92 && e.get(_r92);
            _o70 && _o70.add(_t256);
          }
        }
        return e;
      }),
      (exports.getStaticNodeConfig = kl),
      (exports.getStyleObjectFromCSS = xr),
      (exports.getTextDirection = function (t) {
        return E.test(t) ? "rtl" : M.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = Ds),
      (exports.isBlockDomNode = il),
      (exports.isCurrentlyReadOnlyMode = zo),
      (exports.isDOMCapturingSelection = Nl),
      (exports.isDOMDocumentNode = Xs),
      (exports.isDOMNode = el),
      (exports.isDOMTextNode = qs),
      (exports.isDOMUnmanaged = Sl),
      (exports.isDocumentFragment = nl),
      (exports.isExactShortcutMatch = ki),
      (exports.isHTMLAnchorElement = function (t) {
        return tl(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = tl),
      (exports.isHTMLTableCellElement = function (t) {
        return tl(t) && ("TD" === t.tagName || "TH" === t.tagName);
      }),
      (exports.isHTMLTableRowElement = function (t) {
        return tl(t) && "TR" === t.tagName;
      }),
      (exports.isInlineDomNode = ol),
      (exports.isLastChildInBlockNode = Ns),
      (exports.isLexicalEditor = js),
      (exports.isModifierMatch = vi),
      (exports.isOnlyChildInBlockNode = Ts),
      (exports.isSelectionCapturedInDecoratorInput = Us),
      (exports.isSelectionWithinEditor = Hs),
      (exports.makeStepwiseIterator = Nc),
      (exports.mergeRegister = Yc),
      (exports.mountSlotContainer = function (t, e, n, r) {
        var o = t.read("latest", function () {
          var r = ii(e);
          return null !== r
            ? (function (t, e, n) {
                if (n === void 0) {
                  n = cl();
                }
                var r = Rl(t, e);
                if (null === r) return null;
                var o = n.getElementByKey(r.getKey());
                return null !== o ? o.parentElement : null;
              })(r, n, t)
            : null;
        });
        return (
          null !== o &&
            (o.parentElement !== r && r.appendChild(o), (o.style.display = "")),
          o
        );
      }),
      (exports.normalizeClassNames = jc),
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
        var n = jc.apply(void 0, e);
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(_t$classList3, n);
      }),
      (exports.removeFromParent = ni),
      (exports.resetRandomKey = function () {
        Ks = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = Sr),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n120 in e) {
          var _r93 = e[_n120];
          null == _r93 ? t.removeProperty(_n120) : Cr(t, _n120, _r93);
        }
      }),
      (exports.setDOMUnmanaged = Cl),
      (exports.setNodeIndentFromDOM = yl),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n121 in e)
          if (t[_n121] !== e[_n121]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.stopLexicalPropagation = er),
      (exports.toggleTextFormatType = Zs),
      (exports.tokenizeRawText = vo),
      (exports.unmountSlotContainer = function (t, e, n) {
        n.style.display = "none";
        var r = t.getElementByKey(e);
        null !== r && n.parentElement !== r && r.insertBefore(n, r.firstChild);
      }));
  },
  null,
);
