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
    function L() {
      return $l()._blockCursorElement;
    }
    function K(t) {
      return (
        null !== t && 1 === t.nodeType && t.hasAttribute("data-lexical-slot")
      );
    }
    var _z2 = (function () {
      function z(t, e, n) {
        ((this.element = t),
          (this.before = e || null),
          (this.after = n || null));
      }
      var _proto = z.prototype;
      _proto.withBefore = function withBefore(t) {
        return new z(this.element, t, this.after);
      };
      _proto.withAfter = function withAfter(t) {
        return new z(this.element, this.before, t);
      };
      _proto.withElement = function withElement(t) {
        return this.element === t ? this : new z(t, this.before, this.after);
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
        var r = $(t, this.element);
        if (null === r) return "after";
        var o = Array.prototype.indexOf.call(t.childNodes, r);
        if (o < 0) return "after";
        if (e === t) return n <= o ? "before" : "after";
        var s = $(t, e);
        if (null === s) return "after";
        var i = Array.prototype.indexOf.call(t.childNodes, s);
        return i >= 0 && i <= o ? "before" : "after";
      };
      _proto.getInsertionAnchor = function getInsertionAnchor() {
        return this.before;
      };
      return z;
    })();
    function $(t, e) {
      var n = e;
      for (; null !== n && n.parentNode !== t; ) n = n.parentNode;
      return n;
    }
    var _B = (function (_z) {
      function B() {
        return _z.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(B, _z);
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
          _z.prototype.getInsertionAnchor.call(this) ||
          this.getManagedLineBreak()
        );
      };
      _proto2.getFirstChildAnchor = function getFirstChildAnchor() {
        var t = _z.prototype.getFirstChildAnchor.call(this),
          e = t ? t.nextSibling : this.element.firstChild;
        for (; K(e); ) ((t = e), (e = e.nextSibling));
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
          r = this.before,
          o = Tl().createElement("br");
        if (
          (o.setAttribute("data-lexical-managed-linebreak", "true"),
          n.insertBefore(o, r),
          t)
        ) {
          var _t4 = Tl().createElement("img");
          (_t4.setAttribute("data-lexical-managed-linebreak", "true"),
            _t4.style.setProperty("display", "inline", "important"),
            _t4.style.setProperty("border", "0px", "important"),
            _t4.style.setProperty("margin", "0px", "important"),
            (_t4.alt = ""),
            n.insertBefore(_t4, o),
            (n.__lexicalLineBreak = _t4));
        } else n.__lexicalLineBreak = o;
      };
      _proto2.getFirstChildOffset = function getFirstChildOffset() {
        var t = this.getFirstChild(),
          e = this.getInsertionAnchor();
        var n = 0;
        for (
          var _r6 = this.element.firstChild;
          null !== _r6 && _r6 !== t && _r6 !== e;
          _r6 = _r6.nextSibling
        )
          n++;
        return n;
      };
      _proto2.resolveChildIndex = function resolveChildIndex(t, e, n, r) {
        if (n === this.element) {
          var _e4 = this.getFirstChildOffset(),
            _n3 = L(),
            _o2 = this.element.childNodes,
            _s2 = Math.min(r, _o2.length);
          var _i2 = 0;
          for (var _t5 = _e4; _t5 < _s2; _t5++) _o2[_t5] !== _n3 && _i2++;
          return [t, Math.min(_i2, t.getChildrenSize())];
        }
        var o = W(e, n);
        o.push(r);
        var s = W(e, this.element);
        var i = t.getIndexWithinParent();
        for (var _t6 = 0; _t6 < s.length; _t6++) {
          var _e5 = o[_t6],
            _n4 = s[_t6];
          if (void 0 === _e5 || _e5 < _n4) break;
          if (_e5 > _n4) {
            i += 1;
            break;
          }
        }
        return [t.getParentOrThrow(), i];
      };
      return B;
    })(_z2);
    function W(e, n) {
      var r = [];
      var o = n;
      for (; o !== e && null !== o; o = o.parentNode) {
        var _t7 = 0;
        for (
          var _e6 = o.previousSibling;
          null !== _e6;
          _e6 = _e6.previousSibling
        )
          _t7++;
        r.push(_t7);
      }
      return (o !== e && t(225), r.reverse());
    }
    var U;
    try {
      U = "0.46.0+prod.cjs";
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
          var _t8 = new Map(this._old);
          for (var _ref2 of this._nursery) {
            var _e8 = _ref2[0];
            var _n5 = _ref2[1];
            _n5 !== Y ? _t8.set(_e8, _n5) : _t8["delete"](_e8);
          }
          ((this._old = _t8), (this._nursery = void 0));
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
        for (var _t9 of this.entries()) yield _t9[0];
      };
      _proto4.values = function* values() {
        for (var _t0 of this.entries()) yield _t0[1];
      };
      _proto4.entries = function* entries() {
        var t = this._nursery,
          e = this._old;
        if (e)
          for (var _n6 of e) {
            var _e9 = _n6[0],
              _r7 = t ? t.get(_e9) : void 0;
            _r7 !== Y && (void 0 !== _r7 && (_n6[1] = _r7), yield _n6);
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
      if (Ss(t)) {
        var _i3 = t.getFirstChild();
        for (; null !== _i3; ) {
          var _t1 = _i3.__key;
          (_i3.__parent === e &&
            ((Ss(_i3) || (uc(_i3) && null !== _i3.__slots)) &&
              V(_i3, _t1, n, r, o, s),
            n.has(_t1) || s["delete"](_t1),
            o.push(_t1)),
            (_i3 = _i3.getNextSibling()));
        }
      }
      for (var _i4 of uc(t) && null !== t.__slots ? t.__slots.values() : []) {
        var _t10 = r.get(_i4);
        void 0 !== _t10 &&
          fc(_t10) &&
          _t10.__slotHost === e &&
          ((Ss(_t10) || (uc(_t10) && null !== _t10.__slots)) &&
            V(_t10, _i4, n, r, o, s),
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
        (r && void 0 !== vi(t, n))
      );
    }
    function tt(t, e, n) {
      var r = _l(ol(n)),
        o = r && kl(r, n._rootElement);
      var s = null,
        i = null;
      null !== o &&
        o.anchorNode === t &&
        ((s = o.anchorOffset), (i = o.focusOffset));
      var l = t.nodeValue;
      null !== l && Li(e, l, s, i, !1);
    }
    function et(t, e, n) {
      if (no(t)) {
        var _e1 = t.anchor.getNode();
        if (_e1.is(n) && t.format !== _e1.getFormat()) return !1;
      }
      return fi(e) && n.isAttached();
    }
    function nt(t, e, n) {
      for (var _r8 = t; _r8 && !Zl(_r8); _r8 = Qi(_r8)) {
        var _t11 = vi(_r8, e);
        if (void 0 !== _t11) {
          var _e10 = Si(_t11, n);
          if (_e10) return vs(_e10) || !Dl(_r8) ? void 0 : [_r8, _e10];
        }
      }
    }
    function rt(t, e, n) {
      q = !0;
      var r = performance.now() - X > 100;
      try {
        ms(t, function () {
          var o =
              bo() ||
              (function (t) {
                return t.read("latest", function () {
                  var t = bo();
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
              r && jr(_p) && fi(_h) && et(o, _h, _p) && tt(_h, _p, t);
            else if ("childList" === _d) {
              a = !0;
              var _e11 = _f.addedNodes;
              for (var _n0 = 0; _n0 < _e11.length; _n0++) {
                var _r9 = _e11[_n0],
                  _o3 = Ti(_r9),
                  _i5 = _r9.parentNode;
                if (
                  !(
                    null == _i5 ||
                    _r9 === c ||
                    null !== _o3 ||
                    Z(_r9, _i5, t) ||
                    (t._slotsUsed &&
                      Dl(_r9) &&
                      _r9.hasAttribute("data-lexical-slot")) ||
                    Zl(_r9)
                  )
                ) {
                  if (s) {
                    var _t12 =
                      (Dl(_r9) ? _r9.innerText : null) || _r9.nodeValue;
                    _t12 && (u += _t12);
                  }
                  _i5.removeChild(_r9);
                }
              }
              var _n1 = _f.removedNodes,
                _r0 = _n1.length;
              if (_r0 > 0) {
                var _e12 = 0;
                for (var _o4 = 0; _o4 < _r0; _o4++) {
                  var _r1 = _n1[_o4];
                  (Z(_r1, _h, t) || c === _r1) && (_h.appendChild(_r1), _e12++);
                }
                _r0 !== _e12 && i.set(_2, _p);
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
                _r10 = _n11.addedNodes,
                _o5 = _n11.target;
              for (var _e15 = 0; _e15 < _r10.length; _e15++) {
                var _n12 = _r10[_e15],
                  _s3 = _n12.parentNode;
                null == _s3 ||
                  "BR" !== _n12.nodeName ||
                  Z(_n12, _o5, t) ||
                  _s3.removeChild(_n12);
              }
            }
            n.takeRecords();
          }
          null !== o && (a && Mi(o), s && Vi(t) && o.insertRawText(u));
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
        0 === X && ol(t).addEventListener("textInput", Q, !0);
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
      for (var _ref8 of sc("function" == typeof t ? t : t.replace)) {
        var _r11 = _ref8.ownNodeConfig;
        if (_r11 && _r11.stateConfigs)
          for (var _t13 of _r11.stateConfigs) {
            var _r12 = void 0;
            ("stateConfig" in _t13
              ? ((_r12 = _t13.stateConfig), _t13.flat && n.add(_r12.key))
              : (_r12 = _t13),
              e.set(_r12.key, _r12));
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
          r = new Map(this.knownState);
        return new dt(
          t,
          e,
          (function (t, e, n) {
            var r;
            if (n)
              for (var _ref10 of Object.entries(n)) {
                var _o7 = _ref10[0];
                var _s4 = _ref10[1];
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
        : ti($l(), t.getType()).sharedNodeState;
    }
    function _t(t) {
      if (t) for (var _e20 in t) return t;
    }
    function pt(t) {
      return t;
    }
    function yt(t, e, n) {
      for (var _ref14 of e.knownState) {
        var _r13 = _ref14[0];
        var _o8 = _ref14[1];
        {
          if (t.has(_r13.key)) continue;
          t.add(_r13.key);
          var _e21 = n ? n.getValue(_r13) : _r13.defaultValue;
          if (_e21 !== _o8 && !_r13.isEqual(_e21, _o8)) return !0;
        }
      }
      return !1;
    }
    function mt(t, e, n) {
      var r = e.unknownState,
        o = n ? n.unknownState : void 0;
      if (r)
        for (var _ref16 of Object.entries(r)) {
          var _e22 = _ref16[0];
          var _n17 = _ref16[1];
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
        r = rs()._normalizedNodes;
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
          jr(e) &&
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
          jr(n) &&
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
        var _r14 = void 0,
          _o9 = void 0;
        if (
          (_n18 === _e23.getChildrenSize()
            ? ((_r14 = _e23.getChildAtIndex(_n18 - 1)), (_o9 = !0))
            : ((_r14 = _e23.getChildAtIndex(_n18)), (_o9 = !1)),
          jr(_r14))
        ) {
          t.set(_r14.__key, _o9 ? _r14.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!Ss(_r14)) break;
        t.set(_r14.__key, _o9 ? _r14.getChildrenSize() : 0, "element", !0);
      }
    }
    var kt = Symbol["for"]("@lexical/CachedTextSize");
    function Et(e, n) {
      return Ut.read(
        function () {
          var r = 0,
            o = e;
          for (var _e24 = 0; _e24 < n && null !== o; _e24++) {
            var _s5 = Wt.get(o);
            if ((void 0 === _s5 && t(345, o), Ss(_s5))) {
              var _i6 = Ht.get(o);
              if (void 0 !== _i6 && Ss(_i6) && _i6.__parent !== _s5.__parent)
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
      Ss(t) ||
        (void 0 === t[kt] &&
          (t[kt] = jr(t) ? t.__text.length : t.getTextContentSize()));
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
    function Kt(e) {
      if (null !== Ft) return;
      var n = e.__lexicalFirstTextKey;
      if ((void 0 === n && t(348), null === n)) return;
      var r = Ht.get(n);
      jr(r) && ((It = r.getFormat()), (Pt = r.getStyle()), (Ft = n));
    }
    var zt,
      $t,
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
        if ((At._keyToDOMMap["delete"](t), Ss(n))) {
          var _t16 = lc(n, Wt);
          Qt(_t16, 0, _t16.length - 1, null);
        }
        if (void 0 !== n) {
          for (var _t17 of le(n).values()) {
            var _e27 = ae(_t17);
            (Xt(_t17, null), null !== _e27 && _e27.remove());
          }
          Yi(Jt, wt, zt, n, "destroyed");
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
        var _r15 = t.classList.contains(n);
        e > 0 && !_r15
          ? t.classList.add(n)
          : e < 1 && _r15 && t.classList.remove(n);
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
        if (Es(t)) return null;
        var n = t.getParent();
        return null === n || (cl(n) && null === n.__dir) ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function oe(t) {
      var e = Tl().createElement("div");
      return (
        e.setAttribute("data-lexical-slot", t),
        (e.style.display = "none"),
        e
      );
    }
    function se(t, e, n) {
      e || "false" === t.contentEditable
        ? tc(n, At)
        : n.removeAttribute("contenteditable");
    }
    function ie(t, e, n) {
      var r = Dt,
        o = Rt();
      Dt = "";
      var s = "";
      var i = vs(t);
      for (var _ref18 of n) {
        var _r16 = _ref18[0];
        var _o1 = _ref18[1];
        {
          var _n21 = oe(_r16);
          (se(e, i, _n21), e.appendChild(_n21), (Dt = ""));
          var _l2 = Rt();
          (fe(_o1, Wl(t, _n21, At)), Lt(_l2), ce(t, _r16, e, _n21), (s += Dt));
        }
      }
      return (Lt(o), (Dt = r), s);
    }
    function le(t) {
      return uc(t) && null !== t.__slots ? t.__slots : ac;
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
      for (var _ref20 of r) {
        var _t18 = _ref20[0];
        var _e29 = _ref20[1];
        if (!o.has(_t18)) {
          var _t19 = ae(_e29);
          (Xt(_e29, null), null !== _t19 && _t19.remove());
        }
      }
      var s = Dt,
        i = Rt();
      var l = "",
        c = null;
      var a = vs(e);
      for (var _ref22 of o) {
        var _t20 = _ref22[0];
        var _s6 = _ref22[1];
        {
          var _o10 = r.get(_t20);
          var _i7 = void 0 !== _o10 ? ae(_o10) : null;
          Dt = "";
          var _u = Rt();
          if (null === _i7) {
            _i7 = oe(_t20);
            var _r17 = null;
            for (var _t21 of n.children)
              if (!_t21.hasAttribute("data-lexical-slot")) {
                _r17 = _t21;
                break;
              }
            (n.insertBefore(_i7, _r17), fe(_s6, Wl(e, _i7, At)));
          } else
            _o10 === _s6
              ? pe(_s6, _i7)
              : (void 0 !== _o10 && Xt(_o10, _i7), fe(_s6, Wl(e, _i7, At)));
          if (
            (Lt(_u),
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
      return (Lt(i), (Dt = s), l);
    }
    function fe(e, n) {
      var r = Ht.get(e);
      if ((void 0 === r && t(60), null !== n)) {
        var _t23 = Wt.get(e);
        if (void 0 !== _t23) {
          var _o11 = jt.get(e);
          if (void 0 !== _o11) {
            var _s7 = fc(_t23) ? _t23.__slotHost : null,
              _i8 = fc(r) ? r.__slotHost : null,
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
          (Ni(e, n, t), r.set(t, e));
        })(e, o, At),
        jr(r)
          ? o.setAttribute("data-lexical-text", "true")
          : vs(r) &&
            (o.setAttribute("data-lexical-decorator", "true"),
            Ql(o, { captureSelection: !0 })),
        Ss(r))
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
          if ((de(lc(r, Ht), r, 0, _i9, Wl(r, o, At)), "" !== _s8)) {
            var _e31 = o.__lexicalTextContent || "";
            ((o.__lexicalTextContent = _s8 + _e31), (Dt = _t25 + _s8 + _e31));
          }
          _n22.size > 0 && (o.__lexicalSlotTextLength = _s8.length);
        }
        var _i0 = r.__format;
        (0 !== _i0 && ne(o, _i0), r.isInline() || he(null, r, o));
      } else {
        var _t26 = r.getTextContent();
        if (vs(r)) {
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
        Yi(Jt, wt, zt, r, "created"),
        o
      );
    }
    function de(e, n, r, o, s) {
      var i = Dt,
        l = Rt();
      ((Dt = ""), (It = null), (Pt = null), (Ft = null));
      var c = r;
      for (; c <= o; ++c) {
        var _t28 = Rt();
        fe(e[c], s);
        var _n24 = Ht.get(e[c]);
        (null !== _n24 && jr(_n24)
          ? null === It &&
            ((It = _n24.getFormat()), (Pt = _n24.getStyle()), (Ft = _n24.__key))
          : Ss(_n24) && c < o && !_n24.isInline() && (Dt += v),
          Lt(_t28));
      }
      var a = At._keyToDOMMap.get(n.__key);
      (void 0 === a && t(349, n.__key),
        (a.__lexicalTextContent = Dt),
        (a.__lexicalFirstTextKey = Ft),
        (Dt = i + Dt),
        Lt(l));
    }
    function he(t, e, n) {
      var _r$element$__lexicalL;
      var r = Wl(e, n, At),
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
                return Fs(_t29)
                  ? "line-break"
                  : vs(_t29) && _t29.isInline()
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
                  var _e32 = Et(_i1, _f2);
                  var _r18 = _i1,
                    _a2 = 0;
                  for (; null !== _r18 && _a2 < _f2; ) {
                    var _t31 = Ht.get(_r18);
                    if (void 0 === _t31) break;
                    var _e33 = Rt();
                    (pe(_r18, l),
                      jr(_t31) &&
                        null === It &&
                        ((It = _t31.getFormat()),
                        (Pt = _t31.getStyle()),
                        (Ft = _t31.__key)),
                      Lt(_e33),
                      (_r18 = _t31.__next),
                      _a2++);
                  }
                  var _d2 = "";
                  for (_r18 = _i1, _a2 = 0; null !== _r18 && _a2 < _f2; ) {
                    var _e34 = Ht.get(_r18);
                    if (void 0 === _e34) break;
                    var _n26 = void 0;
                    if (Ss(_e34)) {
                      var _o12 = At._keyToDOMMap.get(_r18),
                        _s0 = _o12 && _o12.__lexicalTextContent;
                      ("string" != typeof _s0 && t(352, _e34.getType()),
                        (_n26 = _s0));
                    } else _n26 = _e34.getTextContent();
                    ((_d2 += _n26),
                      _a2 < _f2 - 1 &&
                        Ss(_e34) &&
                        !_e34.isInline() &&
                        (_d2 += v),
                      (_r18 = _e34.__next),
                      _a2++);
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
                    var T = Et(f, u);
                    for (var _t38 of x) {
                      var _e35 = Rt();
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
                          jr(_e37) &&
                          null === It &&
                          ((It = _e37.getFormat()),
                          (Pt = _e37.getStyle()),
                          (Ft = _e37.__key));
                      }
                      Lt(_e35);
                    }
                    var N = "";
                    for (var _e38 = 0; _e38 < l; _e38++) {
                      var _n28 = Ht.get(g[_e38]);
                      if (void 0 === _n28) return !1;
                      var _r19 = void 0;
                      if (Ss(_n28)) {
                        var _o13 = At._keyToDOMMap.get(g[_e38]),
                          _s1 = _o13 && _o13.__lexicalTextContent;
                        ("string" != typeof _s1 && t(350, _n28.getType()),
                          (_r19 = _s1));
                      } else _r19 = _n28.getTextContent();
                      ((N += _r19),
                        _e38 < l - 1 &&
                          Ss(_n28) &&
                          !_n28.isInline() &&
                          (N += v));
                    }
                    var k = o.__lexicalSlotTextLength || 0,
                      E = k > 0 ? s.slice(k) : s;
                    return (
                      (o.__lexicalTextContent = E.slice(0, E.length - T) + N),
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
                _r20 = 0;
              for (; null !== _n29; ) {
                var _e40 = Ht.get(_n29);
                if (void 0 === _e40) break;
                var _o14 = Vt || Bt.has(_n29) || $t.has(_n29),
                  _s10 = Rt();
                if (_o14) pe(_n29, l);
                else {
                  var _r21 = void 0,
                    _o15 = void 0;
                  if (Ss(_e40)) {
                    _o15 = jt.get(_n29);
                    var _s11 = _o15 && _o15.__lexicalTextContent;
                    ("string" != typeof _s11 && t(354, _e40.getType()),
                      (_r21 = _s11));
                  } else _r21 = _e40.getTextContent();
                  ((Dt += _r21), void 0 !== _o15 && Kt(_o15));
                }
                (jr(_e40)
                  ? null === It &&
                    ((It = _e40.getFormat()),
                    (Pt = _e40.getStyle()),
                    (Ft = _e40.__key))
                  : Ss(_e40) && _r20 < i - 1 && !_e40.isInline() && (Dt += v),
                  Lt(_s10),
                  (_n29 = _e40.__next),
                  _r20++);
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
            jr(_s13) &&
              null === It &&
              ((It = _s13.getFormat()),
              (Pt = _s13.getStyle()),
              (Ft = _s13.__key));
          } else {
            var _o17 = lc(e, Wt),
              _c3 = lc(n, Ht);
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
                    _r22 = n[d],
                    _o18 = Rt();
                  if (_t42 === _r22) ((u = me(pe(_r22, s.element))), f++, d++);
                  else {
                    if ((void 0 === a && (a = xe(n, d)), void 0 === c))
                      c = xe(e, f);
                    else if (!c.has(_t42)) {
                      (f++, Lt(_o18));
                      continue;
                    }
                    if (!a.has(_t42)) {
                      ((u = me(Se(_t42))),
                        Xt(_t42, s.element),
                        f++,
                        c["delete"](_t42),
                        Lt(_o18));
                      continue;
                    }
                    if (c.has(_r22)) {
                      var _t43 = Xi(At, _r22);
                      (_t43 !== u &&
                        s
                          .withBefore(u != null ? u : s.before)
                          .insertChild(_t43),
                        (u = me(pe(_r22, s.element))),
                        f++,
                        d++);
                    } else
                      (fe(_r22, s.withBefore(u != null ? u : s.before)), d++);
                  }
                  var _i10 = Ht.get(_r22);
                  (null !== _i10 && jr(_i10)
                    ? null === It &&
                      ((It = _i10.getFormat()),
                      (Pt = _i10.getStyle()),
                      (Ft = _i10.__key))
                    : Ss(_i10) && d <= l && !_i10.isInline() && (Dt += v),
                    Lt(_o18));
                }
                var h = f > i,
                  g = d > l;
                if (h && !g) {
                  var _e42 = n[l + 1],
                    _r23 = void 0 === _e42 ? null : At.getElementByKey(_e42);
                  de(n, t, d, l, s.withBefore(_r23 != null ? _r23 : s.before));
                } else g && !h && Qt(e, f, i, s.element);
              })(n, _o17, _c3, s, i, r);
          }
          ((c.__lexicalTextContent = Dt),
            (c.__lexicalFirstTextKey = Ft),
            (Dt = o + Dt));
        })(e, n, Wl(n, r, At)),
        cl(n) ||
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
          if (jr(_t45))
            return ((It = _t45.getFormat()), void (Pt = _t45.getStyle()));
        }
      }
      e.__lexicalFirstTextKey = Ft;
    }
    function pe(e, n) {
      var r = Wt.get(e);
      var o = Ht.get(e);
      (void 0 !== r && void 0 !== o) || t(61);
      var s = Vt || Bt.has(e) || $t.has(e),
        i = Xi(At, e);
      if (r === o && !s) {
        var _e44;
        if (Ss(r)) {
          var _n31 = i.__lexicalTextContent;
          ("string" != typeof _n31 && t(355, r.getType()),
            (_e44 = _n31),
            Kt(i));
        } else _e44 = r.getTextContent();
        return ((Dt += _e44), i);
      }
      if (
        (r !== o && s && Yi(Jt, wt, zt, o, "updated"),
        Gt.$updateDOM(o, r, i, At))
      ) {
        var _r24 = fe(e, null);
        return (
          null === n && t(62),
          n.replaceChild(_r24, i),
          Xt(e, null),
          _r24
        );
      }
      if (Ss(r)) {
        Ss(o) || t(334, e);
        var _n32 = o.__indent;
        (Vt || _n32 !== r.__indent) && ee(i, _n32);
        var _l4 = o.__format;
        (Vt || _l4 !== r.__format) && ne(i, _l4);
        var _c4 = s && (le(o).size > 0 || le(r).size > 0) ? ue(r, o, i) : "";
        if (s) {
          var _t46 = Dt;
          if ((ge(r, o, i), Es(o) || o.isInline() || he(0, o, i), "" !== _c4)) {
            var _e45 = i.__lexicalTextContent || "";
            ((i.__lexicalTextContent = _c4 + _e45),
              (Dt = _t46 + _c4 + _e45),
              (i.__lexicalSlotTextLength = _c4.length));
          } else
            (le(o).size > 0 || le(r).size > 0) &&
              (i.__lexicalSlotTextLength = 0);
        } else {
          var _e46 = i.__lexicalTextContent;
          ("string" != typeof _e46 && t(356, r.getType()), (Dt += _e46), Kt(i));
        }
        if (
          (Vt || o.__dir !== r.__dir || o.__parent !== r.__parent) &&
          (re(i, o), Es(o) && !Vt)
        )
          for (var _t47 of o.getChildren())
            if (Ss(_t47)) {
              re(Xi(At, _t47.getKey()), _t47);
            }
      } else {
        var _t48 = o.getTextContent();
        if (vs(o)) {
          var _t49 = o.decorate(At, Mt);
          (null !== _t49 && ye(e, _t49),
            s && (le(o).size > 0 || le(r).size > 0) && ue(r, o, i));
        }
        Dt += _t48;
      }
      if (!qt && Es(o)) {
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
        n = Ei(At);
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
      for (var _r25 = e; _r25 < t.length; _r25++) n.add(t[_r25]);
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
        (Gt = n._config.dom || Js),
        (wt = n._nodes),
        (zt = At._listeners.mutation),
        ($t = o),
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
                var _r26 = _e48.__parent;
                if (null === _r26) continue;
                var _o20 = t.get(_r26);
                (void 0 === _o20 && ((_o20 = new Set()), t.set(_r26, _o20)),
                  _o20.add(_n33));
              }
            };
          return (e($t.keys()), e(Bt), t);
        })()));
      var i = new Map();
      return (
        (Jt = i),
        pe("root", null),
        (At = void 0),
        (wt = void 0),
        ($t = void 0),
        (Bt = void 0),
        (Wt = void 0),
        (Ut = void 0),
        (Ht = void 0),
        (Mt = void 0),
        (jt = void 0),
        (Yt = void 0),
        (Jt = void 0),
        (Gt = Js),
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
      Ee = Te("BEFORE_INPUT_COMMAND"),
      Oe = Te("INPUT_COMMAND"),
      be = Te("COMPOSITION_START_COMMAND"),
      Me = Te("COMPOSITION_END_COMMAND"),
      Ae = Te("DELETE_CHARACTER_COMMAND"),
      we = Te("INSERT_LINE_BREAK_COMMAND"),
      De = Te("INSERT_PARAGRAPH_COMMAND"),
      Ie = Te("CONTROLLED_TEXT_INSERTION_COMMAND"),
      Pe = Te("PASTE_COMMAND"),
      Fe = Te("REMOVE_TEXT_COMMAND"),
      Re = Te("DELETE_WORD_COMMAND"),
      Le = Te("DELETE_LINE_COMMAND"),
      Ke = Te("FORMAT_TEXT_COMMAND"),
      ze = Te("UNDO_COMMAND"),
      $e = Te("REDO_COMMAND"),
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
      mn = Te("KEY_MODIFIER_COMMAND");
    function xn(t) {
      var e = new Map();
      return {
        dispose: function dispose() {
          for (var _t51 of e.values()) _t51.dispose();
          e.clear();
        },
        register: function register(n, r) {
          var o = e.get(n);
          void 0 === o &&
            ((o = { dispose: t(n, r), holders: new Set() }), e.set(n, o));
          var _s14 = function s() {
            var t = e.get(n);
            t &&
              t.holders["delete"](_s14) &&
              0 === t.holders.size &&
              (e["delete"](n), t.dispose());
          };
          return (o.holders.add(_s14), _s14);
        },
      };
    }
    function Cn(t, e, n, r) {
      return (
        t.addEventListener(e, n, r),
        t.removeEventListener.bind(t, e, n, r)
      );
    }
    var Sn = Object.freeze({}),
      Tn = [
        [
          "keydown",
          function (t, e) {
            ((Nn = t.timeStamp), (vn = t.key), "Backspace" !== t.key && Gn());
            if (e.isComposing()) return;
            qi(e, Be, t);
          },
        ],
        [
          "pointerdown",
          function (t, e) {
            var n = wl(t),
              r = t.pointerType;
            Il(n) &&
              "touch" !== r &&
              "pen" !== r &&
              0 === t.button &&
              ms(e, function () {
                ec(n, e) || (In = !0);
              });
          },
        ],
        [
          "compositionstart",
          function (t, e) {
            qi(e, be, t);
          },
        ],
        [
          "compositionend",
          function (t, e) {
            s
              ? (Fn = !0)
              : l || (!a && !d)
                ? qi(e, Me, t)
                : ((Rn = !0), (Kn = t.data));
          },
        ],
        [
          "input",
          function (t, e) {
            (t.stopPropagation(),
              Gn(),
              ms(
                e,
                function () {
                  qn(t, e) || e.dispatchCommand(Oe, t);
                },
                { event: t },
              ),
              (En = null));
          },
        ],
        [
          "click",
          function (t, e) {
            ms(e, function () {
              var n = bo(),
                r = _l(ol(e)),
                o = Mo();
              if (r)
                if (no(n)) {
                  var _t52 = n.anchor,
                    _e50 = _t52.getNode();
                  "element" === _t52.type &&
                    0 === _t52.offset &&
                    n.isCollapsed() &&
                    !Es(_e50) &&
                    1 === bi().getChildrenSize() &&
                    _e50.getTopLevelElementOrThrow().isEmpty() &&
                    null !== o &&
                    n.is(o) &&
                    (r.removeAllRanges(), (n.dirty = !0));
                } else if (
                  "touch" === t.pointerType ||
                  "pen" === t.pointerType
                ) {
                  var _n34 = kl(r, e._rootElement).anchorNode;
                  if (Dl(_n34) || fi(_n34)) {
                    Mi(Oo(o, r, e, t));
                  }
                }
              qi(e, ke, t);
            });
          },
        ],
        ["cut", Sn],
        ["copy", Sn],
        ["dragstart", Sn],
        ["dragover", Sn],
        ["dragend", Sn],
        ["paste", Sn],
        ["focus", Sn],
        ["blur", Sn],
        ["drop", Sn],
      ];
    i &&
      Tn.push([
        "beforeinput",
        function (t, e) {
          return (function (t, e) {
            var n = t.inputType;
            if ("deleteCompositionText" === n || (s && Vi(e))) return;
            if ("insertCompositionText" === n) return;
            ms(
              e,
              function () {
                qn(t, e) || qi(e, Ee, t);
              },
              { event: t },
            );
          })(t, e);
        },
      ]);
    var Nn = 0,
      vn = null,
      kn = 0,
      En = null,
      On = !1,
      bn = null;
    var Mn = new WeakMap(),
      An = new WeakMap(),
      wn = xn(function (t) {
        return (
          t.addEventListener("selectionchange", ir),
          function () {
            return t.removeEventListener("selectionchange", ir);
          }
        );
      });
    var Dn = !1,
      In = !1,
      Pn = !1,
      Fn = !1,
      Rn = !1,
      Ln = !1,
      Kn = "",
      zn = null,
      $n = [0, "", 0, "root", 0];
    function Bn(t, e, n, r, o, s) {
      var l = t.anchor,
        c = t.focus,
        a = l.getNode(),
        u = rs();
      var f;
      if (void 0 !== s) f = s;
      else {
        var _t53 = _l(ol(u));
        f = null !== _t53 ? kl(_t53, u._rootElement) : null;
      }
      var d = null !== f ? f.anchorNode : null,
        h = l.key,
        g = u.getElementByKey(h),
        _ = n.length;
      return (
        h !== c.key ||
        !jr(a) ||
        (((!o && (!i || kn < r + 50)) || (a.isDirty() && _ < 2) || Di(n)) &&
          l.offset !== c.offset &&
          !a.isComposing()) ||
        ui(a) ||
        (a.isDirty() && _ > 1) ||
        ((o || !i) && null !== g && !a.isComposing() && d !== Hl(a, g, u)) ||
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
            r = e.getParentOrThrow(),
            o = ai(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!r.canInsertTextBefore() && !e.isComposing()) ||
                o ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (jr(e) || (Ss(e) && e.isInline())) &&
                    !e.canInsertTextAfter()
                  );
                })(e)
            : n === e.getTextContentSize() &&
                (!e.canInsertTextAfter() ||
                  (!r.canInsertTextAfter() && !e.isComposing()) ||
                  o);
        })(t, a)
      );
    }
    function Wn(t, e) {
      return (
        fi(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function Un(e, n, r) {
      var _kl = kl(e, n._rootElement),
        o = _kl.anchorNode,
        s = _kl.anchorOffset,
        i = _kl.focusNode,
        l = _kl.focusOffset;
      (Dn && ((Dn = !1), Wn(o, s) && Wn(i, l) && !zn)) ||
        ms(n, function () {
          if (!r) return void Mi(null);
          if (!si(n, o, i)) return;
          var c = bo();
          if (zn && no(c) && c.isCollapsed()) {
            var _t54 = c.anchor,
              _e51 = zn.anchor;
            ((_t54.key === _e51.key && _t54.offset === _e51.offset + 1) ||
              (1 === _t54.offset &&
                _e51.getNode().is(_t54.getNode().getPreviousSibling()))) &&
              ((c = zn.clone()), Mi(c));
          }
          if (((zn = null), no(c))) {
            var _r27 = c.anchor,
              _a3 = _r27.getNode();
            if (c.isCollapsed()) {
              "Range" === e.type && o === i && (c.dirty = !0);
              var _s15 = ol(n).event,
                _l5 = _s15 ? _s15.timeStamp : performance.now(),
                _$n = $n,
                _u3 = _$n[0],
                _f3 = _$n[1],
                _d3 = _$n[2],
                _h3 = _$n[3],
                _g3 = _$n[4],
                _4 = bi(),
                _p2 = !1 === n.isComposing() && "" === _4.getTextContent();
              if (_l5 < _g3 + 200 && _r27.offset === _d3 && _r27.key === _h3)
                Hn(c, _u3, _f3);
              else if ("text" === _r27.type) (jr(_a3) || t(141), jn(c, _a3));
              else if ("element" === _r27.type && !_p2) {
                Ss(_a3) || t(259);
                var _e52 = _r27.getNode();
                _e52.isEmpty()
                  ? (function (t, e) {
                      var n = e.getTextFormat(),
                        r = e.getTextStyle();
                      Hn(t, n, r);
                    })(c, _e52)
                  : Hn(c, c.format, "");
              }
            } else {
              var _t55 = _r27.key,
                _e53 = c.focus.key,
                _n35 = c.getNodes(),
                _o21 = _n35.length,
                _i11 = c.isBackward(),
                _a4 = _i11 ? l : s,
                _u4 = _i11 ? s : l,
                _f4 = _i11 ? _e53 : _t55,
                _d4 = _i11 ? _t55 : _e53;
              var _h4 = 2047,
                _g4 = !1;
              for (var _t56 = 0; _t56 < _o21; _t56++) {
                var _e54 = _n35[_t56],
                  _r28 = _e54.getTextContentSize();
                if (
                  jr(_e54) &&
                  0 !== _r28 &&
                  !(
                    (0 === _t56 && _e54.__key === _f4 && _a4 === _r28) ||
                    (_t56 === _o21 - 1 && _e54.__key === _d4 && 0 === _u4)
                  ) &&
                  ((_g4 = !0), (_h4 &= _e54.getFormat()), 0 === _h4)
                )
                  break;
              }
              c.format = _g4 ? _h4 : 0;
            }
          }
          qi(n, Ne, void 0);
        });
    }
    function Hn(t, e, n) {
      (t.format === e && t.style === n) ||
        ((t.format = e), (t.style = n), (t.dirty = !0));
    }
    function jn(t, e) {
      Hn(t, e.getFormat(), e.getStyle());
    }
    function Yn(t) {
      if (!t.getTargetRanges) return null;
      var e = t.getTargetRanges();
      return 0 === e.length ? null : e[0];
    }
    function Jn(t) {
      if (null == t || t.length <= 1 || null == vn) return;
      var e =
        1 === vn.length
          ? vn
          : "Enter" === vn
            ? "\n"
            : "Tab" === vn
              ? "\t"
              : null;
      if (!e) return;
      var n = bo();
      if (!no(n) || !n.isCollapsed()) return;
      var r = n.anchor.getNode();
      if (!jr(r)) return;
      var o = n.anchor.offset;
      if (r.getTextContentSize() === o) {
        var _t57 = r.getNextSibling();
        if ("\n" === e) {
          if (Fs(_t57)) _t57.selectEnd();
          else if (!_t57) {
            var _t58 = ic(r, No),
              _e55 = _t58 && _t58.getNextSibling();
            Ss(_e55) && _e55.selectStart();
          }
        } else
          "\t" === e
            ? Vr(_t57) && _t57.selectEnd()
            : jr(_t57) && _t57.getTextContent()[0] === e && _t57.select(1, 1);
      } else r.getTextContent()[o] === e && r.select(o + 1, o + 1);
    }
    function Gn() {
      ((On = !1), null !== bn && (clearTimeout(bn), (bn = null)));
    }
    function Vn() {
      (Gn(), (On = !0), (bn = setTimeout(Gn, 0)));
    }
    function qn(t, e) {
      var n = wl(t);
      if (Dl(n) && ec(n, e)) return !0;
      var r = e.getRootElement();
      if (null === r) return !1;
      var o = Al(r.ownerDocument);
      return null !== o && r.contains(o) && ec(o, e);
    }
    function Xn(e) {
      var _ref23;
      var n = e.inputType,
        r = Yn(e),
        o = rs(),
        s = bo();
      if ("insertText" === n && e.data && On) {
        if ((Gn(), e.preventDefault(), no(s) && !s.isCollapsed())) {
          var _t59 = s.isBackward() ? s.anchor : s.focus;
          (s.anchor.set(_t59.key, _t59.offset, _t59.type),
            s.focus.set(_t59.key, _t59.offset, _t59.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === s) {
          var _t60 = Mo();
          if (!no(_t60)) return !0;
          Mi(_t60.clone());
        }
        if (no(s)) {
          var _n36 = s.anchor.key === s.focus.key;
          if (
            ((i = e.timeStamp),
            "MediaLast" === vn && i < Nn + 30 && o.isComposing() && _n36)
          ) {
            if (
              (xi(null),
              (Nn = 0),
              setTimeout(function () {
                ms(o, function () {
                  xi(null);
                });
              }, 30),
              no(s))
            ) {
              var _e56 = s.anchor.getNode();
              (_e56.markDirty(), jr(_e56) || t(142), jn(s, _e56));
            }
          } else {
            if (
              (xi(null),
              l &&
                null !== r &&
                !r.collapsed &&
                (s.applyDOMRange(r), !s.isCollapsed()))
            )
              return (e.preventDefault(), s.removeText(), !0);
            e.preventDefault();
            var _t61 = s.anchor.getNode(),
              _i12 = _t61.getTextContent(),
              _c5 = _t61.canInsertTextAfter(),
              _a5 = 0 === s.anchor.offset && s.focus.offset === _i12.length;
            var _u5 = f && _n36 && !_a5 && _c5;
            if (
              (_u5 && s.isCollapsed() && (_u5 = !vs(Gi(s.anchor, !0))), !_u5)
            ) {
              qi(o, Ae, !0);
              var _t62 = bo();
              f &&
                no(_t62) &&
                _t62.isCollapsed() &&
                ((zn = _t62),
                setTimeout(function () {
                  return (zn = null);
                }));
            }
          }
          return !0;
        }
      }
      var i;
      if (!no(s)) return !0;
      var c = e.data;
      (null !== En && Ri(!1, o, En),
        (s.dirty && null === En) ||
          !s.isCollapsed() ||
          Es(s.anchor.getNode()) ||
          null === r ||
          s.applyDOMRange(r),
        (En = null));
      var a = s.anchor,
        u = s.focus,
        d = a.getNode(),
        h = u.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === c) (e.preventDefault(), qi(o, we, !1));
        else if (c === v) (e.preventDefault(), qi(o, De, void 0));
        else if (null == c && e.dataTransfer) {
          var _t63 = e.dataTransfer.getData("text/plain");
          (e.preventDefault(), s.insertRawText(_t63));
        } else
          null != c && Bn(s, r, c, e.timeStamp, !0)
            ? (e.preventDefault(), qi(o, Ie, c), Jn(c))
            : (En = c);
        return ((kn = e.timeStamp), !0);
      }
      switch ((e.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          qi(o, Ie, e);
          Jn(
            (_ref23 = e.dataTransfer
              ? e.dataTransfer.getData("text/plain")
              : null) != null
              ? _ref23
              : e.data,
          );
          break;
        case "insertFromComposition": {
          var _t64 = Ln;
          Ln = !1;
          var _n37 = o._compositionKey;
          (xi(null), _t64 || qi(o, Ie, e), er(_n37));
          break;
        }
        case "insertLineBreak":
          (xi(null), qi(o, we, !1));
          break;
        case "insertParagraph":
          (xi(null), Pn && !l ? ((Pn = !1), qi(o, we, !1)) : qi(o, De, void 0));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          qi(o, Pe, e);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || Ss(t) || Ss(e) || !ai(t) || !ai(e);
          })(d, h) && qi(o, Fe, e);
          break;
        case "deleteByDrag":
          (tl(Sr), qi(o, Fe, e));
          break;
        case "deleteByCut":
          qi(o, Fe, e);
          break;
        case "deleteContent":
          qi(o, Ae, !1);
          break;
        case "deleteWordBackward":
          qi(o, Re, !0);
          break;
        case "deleteWordForward":
          qi(o, Re, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          qi(o, Le, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          qi(o, Le, !1);
          break;
        case "formatStrikeThrough":
          qi(o, Ke, "strikethrough");
          break;
        case "formatBold":
          qi(o, Ke, "bold");
          break;
        case "formatItalic":
          qi(o, Ke, "italic");
          break;
        case "formatUnderline":
          qi(o, Ke, "underline");
          break;
        case "historyUndo":
          qi(o, ze, void 0);
          break;
        case "historyRedo":
          qi(o, $e, void 0);
      }
      return !0;
    }
    function Qn(t) {
      var e = rs(),
        n = bo(),
        r = t.data,
        o = Yn(t);
      var l = !1;
      if (null != r && no(n)) {
        var _c6 = _l(ol(e)),
          _a6 = null !== _c6 ? kl(_c6, e._rootElement) : null,
          _u6 =
            "insertCompositionText" === t.inputType && !Fn && !e.isComposing();
        _u6 && (Ln = !0);
        var _d5 = n.anchor.getNode(),
          _h5 =
            "insertCompositionText" === t.inputType &&
            !Fn &&
            e.isComposing() &&
            jr(_d5) &&
            ui(_d5);
        if (!_u6 && !_h5 && Bn(n, o, r, t.timeStamp, !1, _a6)) {
          if (((l = !0), Fn)) {
            var _t65 = nr(e, r);
            if (((Fn = !1), _t65)) return (tl(Nr), Ai(), !0);
          }
          var _o22 = n.anchor.getNode();
          if (null === _c6 || null === _a6) return !0;
          var _u7 = n.isBackward(),
            _d6 = _u7 ? n.anchor.offset : n.focus.offset,
            _h6 = _u7 ? n.focus.offset : n.anchor.offset;
          (i &&
            !n.isCollapsed() &&
            jr(_o22) &&
            null !== _a6.anchorNode &&
            _o22.getTextContent().slice(0, _d6) +
              r +
              _o22.getTextContent().slice(_d6 + _h6) ===
              Fi(_a6.anchorNode)) ||
            qi(e, Ie, r);
          var _g5 = r.length;
          (s &&
            _g5 > 1 &&
            "insertCompositionText" === t.inputType &&
            !e.isComposing() &&
            ((n.anchor.offset -= _g5),
            (n._cachedNodes = null),
            (n._cachedIsBackward = null)),
            f && e.isComposing() && ((Nn = 0), xi(null)));
        }
      }
      if (!l) {
        (Ri(!1, e, null !== r ? r : void 0),
          Fn && (nr(e, r || void 0), tl(Nr), (Fn = !1)));
      }
      return (Ai(), !0);
    }
    function Zn(t) {
      var e = rs(),
        n = bo();
      if (no(n) && !e.isComposing()) {
        Ln = !1;
        var _r29 = n.anchor,
          _o23 = n.anchor.getNode();
        if (
          (xi(_r29.key),
          tl(Tr),
          t.timeStamp < Nn + 30 ||
            "element" === _r29.type ||
            !n.isCollapsed() ||
            (!f &&
              (_o23.getFormat() !== n.format ||
                (jr(_o23) && _o23.getStyle() !== n.style))) ||
            (jr(_o23) &&
              (ui(_o23) ||
                (0 === _r29.offset && !_o23.canInsertTextBefore()) ||
                (_r29.offset === _o23.getTextContentSize() &&
                  !_o23.canInsertTextAfter()))))
        ) {
          qi(e, Ie, k);
          var _t66 = bo();
          no(_t66) && xi(_t66.anchor.key);
        }
      }
      return !0;
    }
    function tr(t) {
      return (nr(rs(), t.data), tl(Nr), !0);
    }
    function er(t) {
      if (null === t) return;
      var e = Si(t);
      if (!jr(e) || "text" === e.getType() || ui(e) || !e.isAttached()) return;
      var n = bo(),
        r = no(n) && n.anchor.key === t ? n.anchor.offset : null,
        o = Hr(e.getTextContent());
      if (
        (o.setFormat(e.getFormat()),
        o.setStyle(e.getStyle()),
        e.replace(o),
        null !== r)
      ) {
        var _t67 = Math.min(r, o.getTextContentSize());
        o.select(_t67, _t67);
      }
    }
    function nr(t, e) {
      var n = t._compositionKey;
      if ((xi(null), null !== n && null != e)) {
        if ("" === e) {
          var _e57 = Si(n),
            _r30 = t.getElementByKey(n),
            _o24 = null !== _r30 && jr(_e57) ? Hl(_e57, _r30, t) : null;
          if (null !== _o24 && null !== _o24.nodeValue && jr(_e57)) {
            var _n38 = _l(ol(t)),
              _r31 = _n38 && kl(_n38, t._rootElement);
            var _s16 = null,
              _i13 = null;
            (null !== _r31 &&
              _r31.anchorNode === _o24 &&
              ((_s16 = _r31.anchorOffset), (_i13 = _r31.focusOffset)),
              Li(_e57, _o24.nodeValue, _s16, _i13, !0));
          }
          return (er(n), !1);
        }
        if ("\n" === e[e.length - 1]) {
          var _e58 = bo();
          if (no(_e58) || oo(_e58)) {
            if (no(_e58)) {
              var _t68 = _e58.focus;
              _e58.anchor.set(_t68.key, _t68.offset, _t68.type);
            }
            return (qi(t, Ge, null), er(n), !1);
          }
        }
        var _r32 = Si(n);
        if (null !== _r32 && jr(_r32) && ui(_r32)) {
          _r32.markDirty();
          var _t69 = bo(),
            _o25 = _r32.getTextContentSize(),
            _s17 =
              no(_t69) && _t69.anchor.key === n ? _t69.anchor.offset : _o25;
          return (_r32.select(_s17, _s17).insertText(e), !0);
        }
      }
      return (Ri(!0, t, e), er(n), !1);
    }
    function rr(t) {
      var e = rs();
      if (null == t.key) return !0;
      if (Rn) {
        if (Hi(t))
          return (
            ms(e, function () {
              nr(e, Kn);
            }),
            (Rn = !1),
            (Kn = ""),
            !0
          );
        ((Rn = !1), (Kn = ""));
      }
      if (
        (function (t) {
          return Bi(t, "ArrowRight", { shiftKey: "any" });
        })(t)
      )
        qi(e, We, t);
      else if (
        (function (t) {
          return Bi(
            t,
            "ArrowRight",
            babelHelpers["extends"]({}, Wi, { shiftKey: "any" }),
          );
        })(t)
      )
        qi(e, Ue, t);
      else if (
        (function (t) {
          return Bi(t, "ArrowLeft", { shiftKey: "any" });
        })(t)
      )
        qi(e, He, t);
      else if (
        (function (t) {
          return Bi(
            t,
            "ArrowLeft",
            babelHelpers["extends"]({}, Wi, { shiftKey: "any" }),
          );
        })(t)
      )
        qi(e, je, t);
      else if (
        (function (t) {
          return Bi(t, "ArrowUp", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        qi(e, Ye, t);
      else if (
        (function (t) {
          return Bi(t, "ArrowDown", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        qi(e, Je, t);
      else if (
        (function (t) {
          return Bi(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
            shiftKey: !0,
          });
        })(t)
      )
        ((Pn = !0), qi(e, Ge, t));
      else if (
        (function (t) {
          return " " === t.key;
        })(t)
      )
        qi(e, Ve, t);
      else if (
        (function (t) {
          return o && Bi(t, "o", { ctrlKey: !0 });
        })(t)
      )
        (t.preventDefault(), (Pn = !0), qi(e, we, !0));
      else if (
        (function (t) {
          return Bi(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
          });
        })(t)
      )
        ((Pn = !1), qi(e, Ge, t));
      else if (
        (function (t) {
          return (
            Bi(t, "Backspace", { shiftKey: "any" }) ||
            (o && Bi(t, "h", { ctrlKey: !0 }))
          );
        })(t)
      )
        Hi(t) ? qi(e, qe, t) && Vn() : (t.preventDefault(), qi(e, Ae, !0));
      else if (
        (function (t) {
          return "Escape" === t.key;
        })(t)
      )
        qi(e, Xe, t);
      else if (
        (function (t) {
          return Bi(t, "Delete", {}) || (o && Bi(t, "d", { ctrlKey: !0 }));
        })(t)
      )
        !(function (t) {
          return "Delete" === t.key;
        })(t)
          ? (t.preventDefault(), qi(e, Ae, !1))
          : qi(e, Qe, t);
      else if (
        (function (t) {
          return Bi(t, "Backspace", Ui);
        })(t)
      )
        (t.preventDefault(), qi(e, Re, !0));
      else if (
        (function (t) {
          return Bi(t, "Delete", Ui);
        })(t)
      )
        (t.preventDefault(), qi(e, Re, !1));
      else if (
        (function (t) {
          return o && Bi(t, "Backspace", { metaKey: !0 });
        })(t)
      )
        (t.preventDefault(), qi(e, Le, !0));
      else if (
        (function (t) {
          return (
            o &&
            (Bi(t, "Delete", { metaKey: !0 }) || Bi(t, "k", { ctrlKey: !0 }))
          );
        })(t)
      )
        (t.preventDefault(), qi(e, Le, !1));
      else if (
        (function (t) {
          return Bi(t, "b", Wi);
        })(t)
      )
        (t.preventDefault(), qi(e, Ke, "bold"));
      else if (
        (function (t) {
          return Bi(t, "u", Wi);
        })(t)
      )
        (t.preventDefault(), qi(e, Ke, "underline"));
      else if (
        (function (t) {
          return Bi(t, "i", Wi);
        })(t)
      )
        (t.preventDefault(), qi(e, Ke, "italic"));
      else if (
        (function (t) {
          return Bi(t, "Tab", { shiftKey: "any" });
        })(t)
      )
        qi(e, Ze, t);
      else if (
        (function (t) {
          return Bi(t, "z", Wi);
        })(t)
      )
        (t.preventDefault(), qi(e, ze, void 0));
      else if (
        (function (t) {
          if (o) return Bi(t, "z", { metaKey: !0, shiftKey: !0 });
          return (
            Bi(t, "y", { ctrlKey: !0 }) ||
            Bi(t, "z", { ctrlKey: !0, shiftKey: !0 })
          );
        })(t)
      )
        (t.preventDefault(), qi(e, $e, void 0));
      else {
        var _n39 = e._editorState._selection;
        !(function (t) {
          return Bi(t, "a", Wi);
        })(t)
          ? null === _n39 ||
            no(_n39) ||
            (!(function (t) {
              return Bi(t, "c", Wi);
            })(t)
              ? (function (t) {
                  return Bi(t, "x", Wi);
                })(t) && (t.preventDefault(), qi(e, un, t))
              : (t.preventDefault(), qi(e, an, t)))
          : (t.preventDefault(), qi(e, fn, t) && Vn());
      }
      return (
        (function (t) {
          return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey;
        })(t) && e.dispatchCommand(mn, t),
        !0
      );
    }
    function or(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    var sr = new Map();
    function ir(t) {
      var e = pl(t.target);
      if (null === e) return;
      var n = Zi(t.target);
      var r = null,
        o = null;
      if (null !== n) {
        var _t70 = An.get(n);
        if (void 0 !== _t70) {
          var _n40 = _t70.editors;
          var _s18 = _t70.hasShadowEditor;
          if (void 0 === _s18) {
            _s18 = !1;
            for (var _t71 of _n40)
              if (
                null !== _t71._rootElement &&
                yl(_t71._rootElement.getRootNode())
              ) {
                _s18 = !0;
                break;
              }
            _t70.hasShadowEditor = _s18;
          }
          if (_s18) {
            var _t72 = null,
              _s19 = null;
            for (var _i14 of _n40) {
              var _n41 = _i14._rootElement;
              if (null === _n41) continue;
              var _l6 = kl(e, _n41).anchorNode;
              if (null !== _l6 && li(_l6) === _i14) {
                if (yl(_n41.getRootNode())) {
                  ((r = _i14), (o = _l6));
                  break;
                }
                null === _t72 && ((_t72 = _i14), (_s19 = _l6));
              }
            }
            null === r && null !== _t72 && ((r = _t72), (o = _s19));
          } else {
            var _t73 = e.anchorNode;
            null === _t73 ||
              (Dl(_t73) && null !== _t73.shadowRoot) ||
              ((r = li(_t73)), null !== r && (o = _t73));
          }
        }
        if (null === r) {
          var _t74 = Al(n);
          r = null !== _t74 ? li(_t74) : null;
        }
      }
      if (null === r) return;
      In &&
        ((In = !1),
        ms(r, function () {
          var n = Mo(),
            s = o != null ? o : kl(e, r._rootElement).anchorNode;
          if (Dl(s) || fi(s)) {
            Mi(Oo(n, e, r, t));
          }
        }));
      var s = Ii(r),
        i = s[s.length - 1],
        l = i._key,
        c = sr.get(l),
        a = c || i;
      (a !== r && Un(e, a, !1),
        Un(e, r, !0),
        r !== i ? sr.set(l, r) : c && sr["delete"](l));
    }
    function lr(t) {
      t._lexicalHandled = !0;
    }
    function cr(t) {
      return !0 === t._lexicalHandled;
    }
    var ar = function ar() {};
    function ur(e) {
      var n = Mn.get(e);
      if (void 0 === n) return void ar();
      var r = An.get(n);
      if (void 0 === r) return void ar();
      Mn["delete"](e);
      var o = ci(e);
      ii(o)
        ? (!(function (t) {
            if (null !== t._parentEditor) {
              var _e59 = Ii(t),
                _n42 = _e59[_e59.length - 1]._key;
              sr.get(_n42) === t && sr["delete"](_n42);
            } else sr["delete"](t._key);
          })(o),
          r.editors["delete"](o),
          (r.hasShadowEditor = void 0),
          (e.__lexicalEditor = null))
        : o && t(198);
      var s = or(e);
      for (var _t75 = 0; _t75 < s.length; _t75++) s[_t75]();
      e.__lexicalEventHandles = [];
    }
    function fr(e, n, r) {
      ts();
      var o = e.__key,
        s = e.getParent();
      if (null === s) return void (null !== dc(e) && t(367, o, String(dc(e))));
      var i = (function (t) {
        var e = bo();
        if (!no(e) || !Ss(t)) return e;
        var n = e.anchor,
          r = e.focus,
          o = n.getNode(),
          s = r.getNode();
        nl(o, t) && n.set(t.__key, 0, "element");
        nl(s, t) && r.set(t.__key, 0, "element");
        return e;
      })(e);
      var l = !1;
      if (no(i) && n) {
        var _t76 = i.anchor,
          _n43 = i.focus;
        (_t76.key === o &&
          (Do(_t76, e, s, e.getPreviousSibling(), e.getNextSibling()),
          (l = !0)),
          _n43.key === o &&
            (Do(_n43, e, s, e.getPreviousSibling(), e.getNextSibling()),
            (l = !0)));
      } else oo(i) && n && e.isSelected() && e.selectPrevious();
      if (no(i) && n && !l) {
        var _t77 = e.getIndexWithinParent();
        (pi(e), Ao(i, s, _t77, -1));
      } else pi(e);
      (r || cl(s) || s.canBeEmpty() || !s.isEmpty() || fr(s, n),
        n && i && Es(s) && s.isEmpty() && s.selectEnd());
    }
    var dr = Symbol["for"]("ephemeral");
    function hr(t) {
      return t[dr] || !1;
    }
    var gr = { configurable: !0, enumerable: !1, value: void 0, writable: !0 };
    var _r105 = (function () {
      function _r(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", gr),
          Object.defineProperty(this, kt, gr),
          _i(this, t));
      }
      _r.getType = function getType() {
        var _oc = oc(this),
          e = _oc.ownNodeType;
        return (void 0 === e && t(64, this.name), e);
      };
      _r.clone = function clone(e) {
        t(65, this.name);
      };
      var _proto6 = _r.prototype;
      _proto6.$config = function $config() {
        return {};
      };
      _proto6.config = function config(t, e) {
        var _ref24;
        var n = e["extends"] || cc(this.constructor);
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
          var _e60 = Si(t);
          if (null === _e60) break;
          t = null !== _e60.__parent ? _e60.__parent : dc(_e60);
        }
        return !1;
      };
      _proto6.isSelected = function isSelected(t) {
        var _this13 = this;
        var e = t || bo();
        if (null == e) return !1;
        var n = e.getNodes().some(function (t) {
          return t.__key === _this13.__key;
        });
        if (jr(this)) return n;
        if (
          no(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t78 = this.getParent();
          if (vs(this) && this.isInline() && _t78) {
            var _n44 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t78.is(_n44.getNode()) &&
              _n44.offset === _t78.getChildrenSize() &&
              this.is(_t78.getLastChild())
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
        return null === t ? null : Si(t);
      };
      _proto6.getParentOrThrow = function getParentOrThrow() {
        var e = this.getParent();
        return (null === e && t(66, this.__key), e);
      };
      _proto6.getTopLevelElement = function getTopLevelElement() {
        var e = this;
        for (; null !== e; ) {
          var _n45 = e.getParent();
          if (cl(_n45) || null !== dc(e))
            return (Ss(e) || (e === this && vs(e)) || t(194), e);
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
        return null === t ? null : Si(t);
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
        return null === t ? null : Si(t);
      };
      _proto6.getNextSiblings = function getNextSiblings() {
        var t = [];
        var e = this.getNextSibling();
        for (; null !== e; ) (t.push(e), (e = e.getNextSibling()));
        return t;
      };
      _proto6.getCommonAncestor = function getCommonAncestor(t) {
        var e = Ss(this) ? this : this.getParent(),
          n = Ss(t) ? t : t.getParent(),
          r = e && n ? aa(e, n) : null;
        return r ? r.commonAncestor : null;
      };
      _proto6.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto6.isBefore = function isBefore(e) {
        var n = aa(this, e);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === ia(n)
              : ("same" !== n.type && "ancestor" !== n.type && t(279), !1)))
        );
      };
      _proto6.isParentOf = function isParentOf(t) {
        return nl(t, this);
      };
      _proto6.getNodesBetween = function getNodesBetween(e) {
        var n = this.isBefore(e),
          r = [],
          o = new Set();
        var s = this;
        for (; null !== s; ) {
          var _i15 = s.__key;
          if ((o.has(_i15) || (o.add(_i15), r.push(s)), s === e)) break;
          var _l7 = Ss(s) ? (n ? s.getFirstChild() : s.getLastChild()) : null;
          if (null !== _l7) {
            s = _l7;
            continue;
          }
          var _c7 = n ? s.getNextSibling() : s.getPreviousSibling();
          if (null !== _c7) {
            s = _c7;
            continue;
          }
          var _a7 = s.getParentOrThrow();
          if ((o.has(_a7.__key) || r.push(_a7), _a7 === e)) break;
          var _u8 = null,
            _f5 = _a7;
          do {
            if (
              (null === _f5 && t(68),
              (_u8 = n ? _f5.getNextSibling() : _f5.getPreviousSibling()),
              (_f5 = _f5.getParent()),
              null === _f5)
            )
              break;
            null !== _u8 || o.has(_f5.__key) || r.push(_f5);
          } while (null === _u8);
          s = _u8;
        }
        return (n || r.reverse(), r);
      };
      _proto6.isDirty = function isDirty() {
        var t = rs()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto6.getLatest = function getLatest() {
        if (hr(this)) return this;
        var e = Si(this.__key);
        return (null === e && t(113), e);
      };
      _proto6.getWritable = function getWritable() {
        if (hr(this)) return this;
        ts();
        var t = ns(),
          e = rs(),
          n = t._nodeMap,
          r = this.__key,
          o = this.getLatest(),
          s = e._cloneNotNeeded,
          i = bo();
        if ((null !== i && i.setCachedNodes(null), s.has(r))) return (mi(o), o);
        var l = Gl(o);
        return (s.add(r), mi(l), n.set(r, l), l);
      };
      _proto6.getTextContent = function getTextContent() {
        return kc(this);
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
        return new _z2(t);
      };
      _proto6.exportDOM = function exportDOM(t) {
        return { element: this.createDOM(t._config, t) };
      };
      _proto6.exportJSON = function exportJSON() {
        var t = this.__state ? this.__state.toJSON() : void 0;
        return babelHelpers["extends"]({ type: this.__type, version: 1 }, t);
      };
      _r.importJSON = function importJSON(e) {
        t(18, this.name);
      };
      _proto6.updateFromJSON = function updateFromJSON(t) {
        return (function (t, e) {
          var n = t.getWritable(),
            r = e.$;
          var o = r;
          for (var _t79 of gt(n).flatKeys)
            _t79 in e &&
              ((void 0 !== o && o !== r) ||
                (o = babelHelpers["extends"]({}, r)),
              (o[_t79] = e[_t79]));
          return ((n.__state || o) && ht(t).updateFromJSON(o), n);
        })(this, t);
      };
      _r.transform = function transform() {
        return null;
      };
      _proto6.remove = function remove(t) {
        fr(this, !0, t);
      };
      _proto6.replace = function replace(e, n) {
        ts();
        var r = bo();
        (null !== r && (r = r.clone()), fl(this, e));
        var o = this.getLatest(),
          s = this.__key,
          i = e.__key,
          l = e.getWritable(),
          c = this.getParentOrThrow().getWritable(),
          a = c.__size,
          u = l.getParent(),
          f = null !== u ? l.getIndexWithinParent() : -1;
        (pi(l), null !== u && no(r) && Ao(r, u, f, -1));
        var d = o.getPreviousSibling(),
          h = o.getNextSibling(),
          g = o.__prev,
          _ = o.__next,
          p = o.__parent;
        if ((fr(o, !1, !0), null === d)) c.__first = i;
        else {
          d.getWritable().__next = i;
        }
        if (((l.__prev = g), null === h)) c.__last = i;
        else {
          h.getWritable().__prev = i;
        }
        ((l.__next = _), (l.__parent = p), (c.__size = a));
        var y = 0;
        n &&
          ((Ss(this) && Ss(l)) || t(139),
          (y = l.getChildrenSize()),
          l.splice(y, 0, this.getChildren()));
        var m = yc(this);
        if (m.length > 0) {
          (uc(this) && uc(l)) || t(368, this.__key, l.__key);
          for (var _t80 of m) {
            var _e61 = mc(this, _t80);
            null !== _e61 && (Mc(this, _t80), bc(l, _t80, _e61));
          }
        }
        if (no(r)) {
          Mi(r);
          var _t81 = r.anchor,
            _e62 = r.focus;
          (_t81.key === s &&
            (n && "element" === _t81.type
              ? _t81.set(l.__key, y + _t81.offset, "element")
              : Zr(_t81, l)),
            _e62.key === s &&
              (n && "element" === _e62.type
                ? _e62.set(l.__key, y + _e62.offset, "element")
                : Zr(_e62, l)));
        }
        return (Ci() === s && xi(i), l);
      };
      _proto6.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (ts(), fl(this, t));
        var n = this.getWritable(),
          r = t.getWritable();
        Ac(this.getParentOrThrow());
        var o = r.getParent(),
          s = bo();
        var i = !1,
          l = !1;
        if (null !== o) {
          var _n46 = t.getIndexWithinParent();
          if (no(s)) {
            var _t82 = o.__key,
              _e63 = s.anchor,
              _r33 = s.focus;
            ((i =
              "element" === _e63.type &&
              _e63.key === _t82 &&
              _e63.offset === _n46 + 1),
              (l =
                "element" === _r33.type &&
                _r33.key === _t82 &&
                _r33.offset === _n46 + 1));
          }
          (pi(r), e && no(s) && Ao(s, o, _n46, -1));
        } else pi(r);
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
          e && no(s))
        ) {
          var _t83 = this.getIndexWithinParent();
          Ao(s, a, _t83 + 1);
          var _e64 = a.__key;
          (i && s.anchor.set(_e64, _t83 + 2, "element"),
            l && s.focus.set(_e64, _t83 + 2, "element"));
        }
        return t;
      };
      _proto6.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (ts(), fl(this, t));
        var n = this.getWritable(),
          r = t.getWritable();
        Ac(this.getParentOrThrow());
        var o = r.__key,
          s = bo(),
          i = r.getParent(),
          l = null !== i ? r.getIndexWithinParent() : -1;
        (pi(r), null !== i && e && no(s) && Ao(s, i, l, -1));
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
          e && no(s))
        ) {
          Ao(s, this.getParentOrThrow(), f);
        }
        return t;
      };
      _proto6.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto6.createParentElementNode = function createParentElementNode() {
        return Bs();
      };
      _proto6.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto6.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto6.selectPrevious = function selectPrevious(t, e) {
        ts();
        var n = hc(this);
        if (null !== n) return n.selectPrevious(t, e);
        var r = this.getPreviousSibling(),
          o = this.getParentOrThrow();
        if (null === r) return o.select(0, 0);
        if (Ss(r)) return r.select();
        if (!jr(r)) {
          var _t84 = r.getIndexWithinParent() + 1;
          return o.select(_t84, _t84);
        }
        return r.select(t, e);
      };
      _proto6.selectNext = function selectNext(t, e) {
        ts();
        var n = hc(this);
        if (null !== n) return n.selectNext(t, e);
        var r = this.getNextSibling(),
          o = this.getParentOrThrow();
        if (null === r) return o.select();
        if (Ss(r)) return r.select(0, 0);
        if (!jr(r)) {
          var _t85 = r.getIndexWithinParent();
          return o.select(_t85, _t85);
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
      return _r;
    })();
    function pr(t) {
      return t instanceof _r105;
    }
    var yr = "history-merge",
      mr = "collaboration",
      xr = "skip-scroll-into-view",
      Cr = "skip-dom-selection",
      Sr = "skip-selection-focus",
      Tr = "composition-start",
      Nr = "composition-end",
      vr = "!important";
    function kr(t) {
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
        var _a8 = t[_f6];
        if (s) "*" === _a8 && "/" === t[_f6 + 1] && ((s = !1), _f6++);
        else if (i) (-1 === u && (u = _f6), (i = !1));
        else if (null === o) {
          if ("/" !== _a8 || "*" !== t[_f6 + 1]) {
            if ('"' !== _a8 && "'" !== _a8) {
              if ("(" !== _a8) {
                if (")" !== _a8) {
                  if (l || ":" !== _a8 || 0 !== c) {
                    if (";" === _a8 && 0 === c) {
                      -1 !== u &&
                        (l ? (r += t.slice(u, _f6)) : (n += t.slice(u, _f6)),
                        (u = -1));
                      var _o26 = n.trim(),
                        _s20 = r.trim();
                      ("" !== _o26 && "" !== _s20 && (e[_o26] = _s20),
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
            } else (-1 === u && (u = _f6), (o = _a8));
          } else
            (-1 !== u &&
              (l ? (r += t.slice(u, _f6)) : (n += t.slice(u, _f6)), (u = -1)),
              (s = !0),
              _f6++);
        } else
          (-1 === u && (u = _f6),
            "\\" === _a8 ? (i = !0) : _a8 === o && (o = null));
      }
      -1 !== u && (l ? (r += t.slice(u, a)) : (n += t.slice(u, a)));
      var f = n.trim(),
        d = r.trim();
      return ("" !== f && "" !== d && (e[f] = d), e);
    }
    function Er(t, e, n) {
      var r = n.trimEnd(),
        o = r.length - 10;
      o >= 0 && r.slice(o).toLowerCase() === vr
        ? t.setProperty(e, r.slice(0, o).trim(), "important")
        : t.setProperty(e, n, "");
    }
    function Or(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var r = kr(n),
        o = kr(e);
      for (var _e65 in o) (delete r[_e65], Er(t, _e65, o[_e65]));
      for (var _e66 in r) t.removeProperty(_e66);
    }
    function br(t, e) {
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
    function Mr(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function Ar(t, e, n, r, o) {
      var s = r.classList;
      var i = ji(o, "base");
      (void 0 !== i && s.add.apply(s, i),
        (i = ji(o, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== i &&
        (8 & n && 4 & n
          ? ((l = !0), c || s.add.apply(s, i))
          : c && s.remove.apply(s, i));
      for (var _t86 in A) {
        var _r34 = A[_t86];
        if (((i = ji(o, _t86)), void 0 !== i))
          if (n & _r34) {
            if (l && ("underline" === _t86 || "strikethrough" === _t86)) {
              e & _r34 && s.remove.apply(s, i);
              continue;
            }
            (0 === (e & _r34) ||
              (c && "underline" === _t86) ||
              "strikethrough" === _t86) &&
              s.add.apply(s, i);
          } else e & _r34 && s.remove.apply(s, i);
      }
    }
    function wr(t, e, n) {
      var r = n.isComposing(),
        o = t + (r ? N : ""),
        i = $l(),
        l = Bl(i).$getDOMSlot(n, e, i),
        c = l.getFirstChild();
      if (null === c || c.nodeType !== Node.TEXT_NODE)
        return void l.insertChild(Tl().createTextNode(o));
      var a = c,
        u = a.nodeValue;
      if (u !== o)
        if (r || s) {
          var _ref25 = (function (t, e) {
              var n = t.length,
                r = e.length;
              var o = 0,
                s = 0;
              for (; o < n && o < r && t[o] === e[o]; ) o++;
              for (; s + o < n && s + o < r && t[n - s - 1] === e[r - s - 1]; )
                s++;
              return [o, n - o - s, e.slice(o, r - s)];
            })(u, o),
            _t87 = _ref25[0],
            _e67 = _ref25[1],
            _n47 = _ref25[2];
          (0 !== _e67 && a.deleteData(_t87, _e67), a.insertData(_t87, _n47));
        } else a.nodeValue = o;
    }
    function Dr(t, e, n, r, o, s) {
      wr(o, t, e);
      var i = s.theme.text;
      void 0 !== i && Ar(0, 0, r, t, i);
    }
    function Ir(t, e) {
      var n = Tl().createElement(e);
      return (n.appendChild(t), n);
    }
    function Pr(t) {
      return null != t && !0 === t.__isInlineFormattable;
    }
    var _Fr2 = (function (_r2) {
      function Fr(t, e) {
        var _this;
        if (t === void 0) {
          t = "";
        }
        ((_this = _r2.call(this, e) || this),
          (_this.__text = t),
          (_this.__format = 0),
          (_this.__style = ""),
          (_this.__mode = 0),
          (_this.__detail = 0));
        return _this;
      }
      babelHelpers.inheritsLoose(Fr, _r2);
      Fr.getType = function getType() {
        return "text";
      };
      Fr.clone = function clone(t) {
        return new Fr(t.__text, t.__key);
      };
      var _proto7 = Fr.prototype;
      _proto7.afterCloneFrom = function afterCloneFrom(t) {
        (_r2.prototype.afterCloneFrom.call(this, t),
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
        return this.__key === Ci();
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
        return gi(this.getLatest().__format, t, e);
      };
      _proto7.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto7.isInline = function isInline() {
        return !0;
      };
      _proto7.createDOM = function createDOM(t, e) {
        var n = this.__format,
          r = br(0, n),
          o = Mr(0, n),
          s = null === r ? o : r,
          i = Tl().createElement(s);
        var l = i;
        (this.hasFormat("code") && i.setAttribute("spellcheck", "false"),
          null !== r && ((l = Tl().createElement(o)), i.appendChild(l)));
        Dr(l, this, 0, n, this.__text, t);
        var c = this.__style;
        return ("" !== c && Or(i.style, c), i);
      };
      _proto7.updateDOM = function updateDOM(e, n, r) {
        var o = this.__text,
          s = e.__format,
          i = this.__format,
          l = br(0, s),
          c = br(0, i),
          a = Mr(0, s),
          u = Mr(0, i);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _e68 = n.firstChild;
          null == _e68 && t(48);
          var _s21 = Tl().createElement(u);
          return (Dr(_s21, this, 0, i, o, r), n.replaceChild(_s21, _e68), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && t(49)),
          wr(o, f, this));
        var d = r.theme.text;
        void 0 !== d && s !== i && Ar(0, s, i, f, d);
        var h = e.__style,
          g = this.__style;
        return (h !== g && Or(n.style, g, h), !1);
      };
      Fr.importDOM = function importDOM() {
        return {
          "#text": function text() {
            return { conversion: $r, priority: 0 };
          },
          b: function b() {
            return { conversion: Lr, priority: 0 };
          },
          code: function code() {
            return { conversion: Ur, priority: 0 };
          },
          em: function em() {
            return { conversion: Ur, priority: 0 };
          },
          i: function i() {
            return { conversion: Ur, priority: 0 };
          },
          mark: function mark() {
            return { conversion: Ur, priority: 0 };
          },
          s: function s() {
            return { conversion: Ur, priority: 0 };
          },
          span: function span() {
            return { conversion: Rr, priority: 0 };
          },
          strong: function strong() {
            return { conversion: Ur, priority: 0 };
          },
          sub: function sub() {
            return { conversion: Ur, priority: 0 };
          },
          sup: function sup() {
            return { conversion: Ur, priority: 0 };
          },
          u: function u() {
            return { conversion: Ur, priority: 0 };
          },
        };
      };
      Fr.importJSON = function importJSON(t) {
        return Hr().updateFromJSON(t);
      };
      _proto7.updateFromJSON = function updateFromJSON(t) {
        return _r2.prototype.updateFromJSON
          .call(this, t)
          .setTextContent(t.text)
          .setFormat(t.format)
          .setDetail(t.detail)
          .setMode(t.mode)
          .setStyle(t.style);
      };
      _proto7.exportDOM = function exportDOM(e) {
        var _r2$prototype$exportD = _r2.prototype.exportDOM.call(this, e),
          n = _r2$prototype$exportD.element;
        return (
          Dl(n) || t(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = Ir(n, "b")),
          this.hasFormat("italic") && (n = Ir(n, "i")),
          this.hasFormat("strikethrough") && (n = Ir(n, "s")),
          this.hasFormat("underline") && (n = Ir(n, "u")),
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
          _r2.prototype.exportJSON.call(this),
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
        var e = gi(this.getFormat(), t, null);
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
        ts();
        var n = t,
          r = e;
        var o = bo(),
          s = this.getTextContent(),
          i = this.__key;
        if ("string" == typeof s) {
          var _t88 = s.length;
          (void 0 === n && (n = _t88), void 0 === r && (r = _t88));
        } else ((n = 0), (r = 0));
        if (!no(o)) return vo(i, n, i, r, "text", "text");
        {
          var _t89 = Ci();
          ((_t89 !== o.anchor.key && _t89 !== o.focus.key) || xi(i),
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
        var c = bo();
        if (r && no(c)) {
          var _e69 = t + i;
          c.setTextNodeRange(o, _e69, o, _e69);
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
        ts();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var r = e.__key,
          o = Ci(),
          s = n.length;
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
          t.push(s));
        var i = [],
          l = t.length;
        for (var _e70 = 0, _r35 = 0; _e70 < s && _r35 <= l; _r35++) {
          var _o27 = t[_r35];
          _o27 > _e70 && (i.push(n.slice(_e70, _o27)), (_e70 = _o27));
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
        var m = bo();
        if (no(m)) {
          var _ref26 = m.isBackward()
              ? [m.focus, m.anchor]
              : [m.anchor, m.focus],
            _t90 = _ref26[0],
            _e71 = _ref26[1];
          ("text" === _t90.type && _t90.key === r && (p = _t90),
            "text" === _e71.type && _e71.key === r && (y = _e71));
        }
        e.isSegmented()
          ? ((f = Hr(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = xt(e, f)),
            (_ = !0))
          : (f = e.setTextContent(a));
        var x = [f];
        for (var _t91 = 1; _t91 < c; _t91++) {
          var _n48 = Hr(i[_t91]);
          ((_n48.__format = d),
            (_n48.__style = h),
            (_n48.__detail = g),
            (_n48.__state = xt(e, _n48)));
          var _s22 = _n48.__key;
          (o === r && xi(_s22), x.push(_n48));
        }
        var C = p ? p.offset : null,
          S = y ? y.offset : null;
        var T = 0;
        for (var _t92 of x) {
          if (!p && !y) break;
          var _e72 = T + _t92.getTextContentSize();
          if (
            (null !== p &&
              null !== C &&
              C <= _e72 &&
              C >= T &&
              (p.set(_t92.getKey(), C - T, "text"), C < _e72 && (p = null)),
            null !== y && null !== S && S <= _e72 && S >= T)
          ) {
            y.set(_t92.getKey(), S - T, "text");
            break;
          }
          T = _e72;
        }
        if (null !== u) {
          !(function (t) {
            var e = t.getPreviousSibling(),
              n = t.getNextSibling();
            null !== e && mi(e);
            null !== n && mi(n);
          })(this);
          var _t93 = u.getWritable(),
            _e73 = this.getIndexWithinParent();
          (_
            ? (_t93.splice(_e73, 0, x), this.remove())
            : _t93.splice(_e73, 1, x),
            no(m) && Ao(m, u, _e73, c - 1));
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
        Ci() === o && xi(r);
        var l = bo();
        if (no(l)) {
          var _t94 = l.anchor,
            _s23 = l.focus;
          (null !== _t94 && _t94.key === o && Io(_t94, n, r, e, i),
            null !== _s23 && _s23.key === o && Io(_s23, n, r, e, i));
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
      return babelHelpers.createClass(Fr, [
        {
          key: "__isInlineFormattable",
          get: function get() {
            return !0;
          },
        },
      ]);
    })(_r105);
    function Rr(t) {
      return { forChild: Yr(t.style), node: null };
    }
    function Lr(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: Yr(e.style, n ? void 0 : "bold"), node: null };
    }
    var Kr = new WeakMap();
    function zr(t) {
      if (!Dl(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function $r(e) {
      var n = e;
      null === e.parentElement && t(129);
      var r = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var r = [t];
          for (; null !== n && void 0 === (e = Kr.get(n)) && !zr(n); )
            (r.push(n), (n = n.parentNode));
          var o = void 0 === e ? n : e;
          for (var _t95 = 0; _t95 < r.length; _t95++) Kr.set(r[_t95], o);
          return o;
        })(n)
      )
        return { node: Ko(r) };
      if (((r = r.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === r))
        return { node: null };
      if (" " === r[0]) {
        var _t96 = n,
          _e74 = !0;
        for (; null !== _t96 && null !== (_t96 = Br(_t96, !1)); ) {
          var _n49 = _t96.textContent || "";
          if (_n49.length > 0) {
            (/[ \t\n]$/.test(_n49) && (r = r.slice(1)), (_e74 = !1));
            break;
          }
        }
        _e74 && (r = r.slice(1));
      }
      if (" " === r[r.length - 1]) {
        var _t97 = n,
          _e75 = !0;
        for (; null !== _t97 && null !== (_t97 = Br(_t97, !0)); ) {
          if (
            (_t97.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e75 = !1;
            break;
          }
        }
        _e75 && (r = r.slice(0, r.length - 1));
      }
      return "" === r ? { node: null } : { node: Hr(r) };
    }
    function Br(t, e) {
      var n = t;
      for (;;) {
        var _t98 = void 0;
        for (; null === (_t98 = e ? n.nextSibling : n.previousSibling); ) {
          var _t99 = n.parentElement;
          if (null === _t99) return null;
          n = _t99;
        }
        if (((n = _t98), Dl(n))) {
          var _t100 = n.style.display;
          if (
            ("" === _t100 && !Rl(n)) ||
            ("" !== _t100 && !_t100.startsWith("inline"))
          )
            return null;
        }
        var _r36 = n;
        for (; null !== (_r36 = e ? n.firstChild : n.lastChild); ) n = _r36;
        if (fi(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var Wr = {
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
    function Ur(t) {
      var e = Wr[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: Yr(t.style, e), node: null };
    }
    function Hr(t) {
      if (t === void 0) {
        t = "";
      }
      return ul(new _Fr2(t));
    }
    function jr(t) {
      return t instanceof _Fr2;
    }
    function Yr(t, e) {
      var n = t.fontWeight,
        r = t.textDecoration.split(" "),
        o = "700" === n || "bold" === n,
        s = r.includes("line-through"),
        i = "italic" === t.fontStyle,
        l = r.includes("underline"),
        c = t.verticalAlign;
      return function (t) {
        return jr(t) || Pr(t)
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
    var _Jr = (function (_Fr) {
      function Jr(t) {
        var _this2;
        ((_this2 = _Fr.call(this, "\t", t) || this), (_this2.__detail = 2));
        return _this2;
      }
      babelHelpers.inheritsLoose(Jr, _Fr);
      Jr.getType = function getType() {
        return "tab";
      };
      Jr.clone = function clone(t) {
        return new Jr(t.__key);
      };
      Jr.importDOM = function importDOM() {
        return null;
      };
      var _proto8 = Jr.prototype;
      _proto8.createDOM = function createDOM(t) {
        var e = _Fr.prototype.createDOM.call(this, t),
          n = ji(t.theme, "tab");
        if (void 0 !== n) {
          var _e$classList;
          (_e$classList = e.classList).add.apply(_e$classList, n);
        }
        return e;
      };
      Jr.importJSON = function importJSON(t) {
        return Gr().updateFromJSON(t);
      };
      _proto8.setTextContent = function setTextContent(t) {
        return _Fr.prototype.setTextContent.call(this, "\t");
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
      return Jr;
    })(_Fr2);
    function Gr() {
      return ul(new _Jr());
    }
    function Vr(t) {
      return t instanceof _Jr;
    }
    var _qr = (function () {
      function qr(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto9 = qr.prototype;
      _proto9.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto9.isBefore = function isBefore(t) {
        if (this.key === t.key) return this.offset < t.offset;
        return sa(xa(ua(this, "next")), xa(ua(t, "next"))) < 0;
      };
      _proto9.getNode = function getNode() {
        var e = Si(this.key);
        return (null === e && t(20), e);
      };
      _proto9.set = function set(t, e, n, r) {
        var o = this._selection,
          s = this.key;
        (r && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          Zo() ||
            (Ci() === s && xi(t),
            null !== o &&
              (o.setCachedNodes(null),
              no(o) && (o._cachedIsBackward = null),
              (o.dirty = !0))));
      };
      return qr;
    })();
    function Xr(t, e, n) {
      return new _qr(t, e, n);
    }
    function Qr(t, e) {
      var n = e.__key,
        r = t.offset,
        o = "element";
      if (jr(e)) {
        o = "text";
        var _t101 = e.getTextContentSize();
        r > _t101 && (r = _t101);
      } else if (!Ss(e)) {
        var _t102 = e.getNextSibling();
        if (jr(_t102)) ((n = _t102.__key), (r = 0), (o = "text"));
        else {
          var _t103 = e.getParent();
          _t103 && ((n = _t103.__key), (r = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, r, o);
    }
    function Zr(t, e) {
      if (Ss(e)) {
        var _n50 = e.getLastDescendant();
        Ss(_n50) || jr(_n50) ? Qr(t, _n50) : Qr(t, e);
      } else Qr(t, e);
    }
    var _to = (function () {
      function to(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto0 = to.prototype;
      _proto0.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto0.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto0.is = function is(t) {
        if (!oo(t)) return !1;
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
        return new to(new Set(this._nodes));
      };
      _proto0.extract = function extract() {
        return this.getNodes();
      };
      _proto0.insertRawText = function insertRawText(t) {};
      _proto0.insertText = function insertText() {};
      _proto0.insertNodes = function insertNodes(t) {
        var e = this.getNodes().filter(function (t) {
            return null === dc(t);
          }),
          n = e.length;
        if (0 === n) return;
        var r = e[n - 1];
        var o;
        if (jr(r)) o = r.select();
        else {
          var _t104 = r.getIndexWithinParent() + 1;
          o = r.getParentOrThrow().select(_t104, _t104);
        }
        o.insertNodes(t);
        for (var _t105 = 0; _t105 < n; _t105++) e[_t105].remove();
      };
      _proto0.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = this._nodes,
          n = [];
        for (var _t106 of e) {
          var _e76 = Si(_t106);
          null !== _e76 && n.push(_e76);
        }
        return (Zo() || (this._cachedNodes = n), n);
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
          return null === dc(t);
        });
        if ((bo() || Mo()) === this && t[0]) {
          var _e77 = Yc(t[0], "next");
          da(ra(_e77, _e77));
        }
        for (var _e78 of t) _e78.remove();
        eo();
      };
      return to;
    })();
    function eo() {
      var t = bi();
      if (t.isEmpty()) {
        var _e79 = Bs();
        (t.append(_e79), _e79.select());
      }
    }
    function no(t) {
      return t instanceof _ro;
    }
    var _ro = (function () {
      function ro(t, e, n, r) {
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
      var _proto1 = ro.prototype;
      _proto1.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto1.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto1.is = function is(t) {
        return (
          !!no(t) &&
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
          for (var _n52 of t)
            if (Wc(_n52)) {
              var _t107 = _n52.origin;
              0 === e.length ? o.add(_t107) : (s.add(_t107), e.push(_t107));
            } else {
              var _t108 = _n52.origin;
              (Ss(_t108) && s.has(_t108)) || e.push(_t108);
            }
          r && e.push(r.caret.origin);
          if (
            Bc(t.focus) &&
            Ss(t.focus.origin) &&
            null === t.focus.getNodeAtCaret()
          )
            for (
              var _n53 = qc(t.focus.origin, "previous");
              Wc(_n53) &&
              o.has(_n53.origin) &&
              !_n53.origin.isEmpty() &&
              _n53.origin.is(e[e.length - 1]);
              _n53 = Qc(_n53)
            )
              (o["delete"](_n53.origin), e.pop());
          for (; e.length > 1; ) {
            var _t109 = e[e.length - 1];
            if (!Ss(_t109) || s.has(_t109) || _t109.isEmpty() || o.has(_t109))
              break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n54 = xa(t.anchor),
              _r37 = xa(t.anchor.getFlipped()),
              _o28 = function _o28(t) {
                return $c(t) ? t.origin : t.getNodeAtCaret();
              },
              _s24 =
                _o28(_n54) ||
                _o28(_r37) ||
                (t.anchor.getNodeAtCaret() ? _n54.origin : _r37.origin);
            e.push(_s24);
          }
          return e;
        })(Ta(ga(this), "next"));
        return (Zo() || (this._cachedNodes = e), e);
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
          _lo = lo(this),
          i = _lo[0],
          l = _lo[1];
        var c = "",
          a = !0;
        for (var _u9 = 0; _u9 < t.length; _u9++) {
          var _f7 = t[_u9];
          if (Ss(_f7) && !_f7.isInline()) {
            a || (c += "\n");
            var _t110 = "";
            for (var _e80 of yc(_f7)) {
              var _n55 = mc(_f7, _e80);
              null !== _n55 && (_t110 += _n55.getTextContent());
            }
            "" !== _t110 ? ((c += _t110), (a = !1)) : (a = !_f7.isEmpty());
          } else if (((a = !1), jr(_f7))) {
            var _t111 = _f7.getTextContent();
            (_f7 === e
              ? _f7 === n
                ? ("element" === r.type &&
                    "element" === o.type &&
                    o.offset !== r.offset) ||
                  (_t111 = i < l ? _t111.slice(i, l) : _t111.slice(l, i))
                : (_t111 = s ? _t111.slice(i) : _t111.slice(l))
              : _f7 === n &&
                (_t111 = s ? _t111.slice(0, l) : _t111.slice(0, i)),
              (c += _t111));
          } else
            (!vs(_f7) && !Fs(_f7)) ||
              (_f7 === n && this.isCollapsed()) ||
              (c += _f7.getTextContent());
        }
        return c;
      };
      _proto1.applyDOMRange = function applyDOMRange(t) {
        var e = rs(),
          n = e.getEditorState()._selection,
          r = To(
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
        return new ro(
          Xr(t.key, t.offset, t.type),
          Xr(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto1.toggleFormat = function toggleFormat(t) {
        ((this.format = gi(this.format, t, null)), (this.dirty = !0));
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
        this.insertNodes(Ko(t));
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
                i = Hr();
              if ((i.setFormat(n), i.setStyle(r), Ws(s))) s.splice(0, 0, [i]);
              else if (null !== s) {
                var _t112 = cl(o) ? Bs().append(i) : i;
                s.insertBefore(_t112);
              } else if (cl(o)) {
                var _t113 = o.getLastChild();
                Ss(_t113) && !_t113.isInline() && _t113.isEmpty()
                  ? _t113.append(i)
                  : o.append(Bs().append(i));
              } else o.append(i);
              (t.is(e) && e.set(i.__key, 0, "text"), t.set(i.__key, 0, "text"));
            })(i, l, o, s),
          "element" === l.type && fa(l, xa(ua(l, "next"))));
        var c = i.offset;
        var a = l.offset;
        var u = this.getNodes(),
          f = u.length;
        var d = u[0];
        jr(d) || t(26);
        var h = d.getTextContent().length,
          g = d.getParentOrThrow();
        var _ = u[f - 1];
        if (
          (1 === f &&
            "element" === l.type &&
            ((a = h), l.set(i.key, a, "text")),
          this.isCollapsed() &&
            c === h &&
            (ui(d) ||
              !d.canInsertTextAfter() ||
              (!g.canInsertTextAfter() && null === d.getNextSibling())))
        ) {
          var _t114 = d.getNextSibling();
          var _n56;
          if (
            (jr(_t114) && _t114.canInsertTextBefore() && !ui(_t114)
              ? (_n56 = _t114)
              : ((_n56 = Hr()),
                _n56.setFormat(o),
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
          (ui(d) ||
            !d.canInsertTextBefore() ||
            (!g.canInsertTextBefore() && null === d.getPreviousSibling()))
        ) {
          var _t115 = d.getPreviousSibling();
          var _n57;
          if (
            (!jr(_t115) || ui(_t115)
              ? ((_n57 = Hr()),
                _n57.setFormat(o),
                g.canInsertTextBefore()
                  ? d.insertBefore(_n57)
                  : g.insertBefore(_n57))
              : (_n57 = _t115),
            _n57.select(),
            (d = _n57),
            "" !== e)
          )
            return void this.insertText(e);
        } else if (d.isSegmented() && c !== h) {
          if (null !== Ci()) d = d.setMode("normal").setFormat(o).setStyle(s);
          else {
            var _t116 = Hr(d.getTextContent());
            (_t116.setFormat(o), d.replace(_t116), (d = _t116));
          }
        } else if (!this.isCollapsed() && "" !== e) {
          var _t117 = _.getParent();
          if (
            !g.canInsertTextBefore() ||
            !g.canInsertTextAfter() ||
            (Ss(_t117) &&
              (!_t117.canInsertTextBefore() || !_t117.canInsertTextAfter()))
          )
            return (
              this.insertText(""),
              mo(this.anchor, this.focus),
              void this.insertText(e)
            );
        }
        if (1 === f) {
          if (ai(d)) {
            var _t118 = Hr(e);
            return (_t118.select(), void d.replace(_t118));
          }
          var _t119 = d.getFormat(),
            _n58 = d.getStyle();
          if (c !== a || (_t119 === o && _n58 === s)) {
            if (Vr(d)) {
              var _t120 = Hr(e);
              return (
                _t120.setFormat(o),
                _t120.setStyle(s),
                _t120.select(),
                void d.replace(_t120)
              );
            }
          } else {
            if ("" !== d.getTextContent()) {
              var _t121 = Hr(e);
              if (
                (_t121.setFormat(o), _t121.setStyle(s), _t121.select(), 0 === c)
              )
                d.insertBefore(_t121, !1);
              else {
                var _d$splitText = d.splitText(c),
                  _e81 = _d$splitText[0];
                _e81.insertAfter(_t121, !1);
              }
              return void (
                _t121.isComposing() &&
                "text" === this.anchor.type &&
                ((this.anchor.offset -= e.length),
                (this._cachedNodes = null),
                (this._cachedIsBackward = null))
              );
            }
            (d.setFormat(o), d.setStyle(s));
          }
          var _r38 = a - c;
          ((d = d.spliceText(c, _r38, e, !0)),
            "" === d.getTextContent()
              ? d.remove()
              : "text" === this.anchor.type &&
                ((this.format = _t119),
                (this.style = _n58),
                d.isComposing() &&
                  ((this.anchor.offset -= e.length),
                  (this._cachedNodes = null),
                  (this._cachedIsBackward = null))));
        } else {
          var _t122 = new Set([].concat(d.getParentKeys(), _.getParentKeys())),
            _n59 = Ss(d) ? d : d.getParentOrThrow();
          var _r39 = Ss(_) ? _ : _.getParentOrThrow(),
            _o29 = _;
          if (!_n59.is(_r39) && _r39.isInline())
            do {
              ((_o29 = _r39), (_r39 = _r39.getParentOrThrow()));
            } while (_r39.isInline());
          if (
            ("text" === l.type && (0 !== a || "" === _.getTextContent())) ||
            ("element" === l.type && _.getIndexWithinParent() < a)
          ) {
            if (jr(_) && !ai(_) && a !== _.getTextContentSize()) {
              if (_.isSegmented()) {
                var _t123 = Hr(_.getTextContent());
                (_.replace(_t123), (_ = _t123));
              }
              (Es(l.getNode()) ||
                "text" !== l.type ||
                (jr(_) ||
                  (function (t) {
                    throw new Error(t);
                  })("insertText: lastNode is not a TextNode"),
                (_ = _.spliceText(0, a, ""))),
                _t122.add(_.__key));
            } else {
              var _t124 = _.getParentOrThrow();
              _t124.canBeEmpty() || 1 !== _t124.getChildrenSize()
                ? _.remove()
                : _t124.remove();
            }
          } else _t122.add(_.__key);
          var _s25 = _r39.getChildren(),
            _i16 = new Set(u),
            _g6 = _n59.is(_r39),
            _p3 = _n59.isInline() && null === d.getNextSibling() ? _n59 : d;
          for (var _t125 = _s25.length - 1; _t125 >= 0; _t125--) {
            var _e82 = _s25[_t125];
            if (_e82.is(d) || (Ss(_e82) && _e82.isParentOf(d))) break;
            _e82.isAttached() &&
              (!_i16.has(_e82) || _e82.is(_o29)
                ? _g6 || _p3.insertAfter(_e82, !1)
                : _e82.remove());
          }
          if (!_g6) {
            var _e83 = _r39,
              _n60 = null;
            for (; null !== _e83; ) {
              var _r40 = _e83.getChildren(),
                _o30 = _r40.length;
              ((0 === _o30 || _r40[_o30 - 1].is(_n60)) &&
                (_t122["delete"](_e83.__key), (_n60 = _e83)),
                (_e83 = _e83.getParent()));
            }
          }
          if (ai(d)) {
            if (c === h) d.select();
            else {
              var _t126 = Hr(e);
              (_t126.select(), d.replace(_t126));
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
          for (var _e84 = 1; _e84 < f; _e84++) {
            var _n61 = u[_e84],
              _r41 = _n61.__key;
            _t122.has(_r41) || _n61.remove();
          }
        }
      };
      _proto1.removeText = function removeText() {
        var t = bo() === this;
        (ha(this, ma(ga(this))), t && bo() !== this && Mi(this));
      };
      _proto1.formatText = function formatText(t, e) {
        if (e === void 0) {
          e = null;
        }
        so(this, t, e);
      };
      _proto1.insertNodes = function insertNodes(e) {
        var _o31;
        if (0 === e.length) return;
        this.isCollapsed() || this.removeText();
        var n = this.anchor.getNode();
        if ("element" === this.anchor.type && Ss(n) && null !== dc(n)) {
          var _n$getFirstChild;
          var _r42 = n.isShadowRoot()
            ? (_n$getFirstChild = n.getFirstChild()) != null
              ? _n$getFirstChild
              : n.append(Bs()).getFirstChild()
            : n.getFirstChild();
          if (n.isShadowRoot() && null !== _r42 && !Ss(_r42)) {
            var _t127 = Bs();
            (_r42.insertBefore(_t127), (_r42 = _t127));
          }
          if (null !== _r42) {
            _r42.selectStart();
            var _n62 = bo();
            return (no(_n62) || t(369), _n62.insertNodes(e));
          }
        }
        if ("element" === this.anchor.type && cl(n)) {
          var _t128 = Uo(e),
            _r43 = _t128.getLastDescendant();
          return (
            n.splice(this.anchor.offset, 0, _t128.getChildren()),
            void (null !== _r43 && _r43.selectEnd())
          );
        }
        var r = (this.isBackward() ? this.focus : this.anchor).getNode(),
          o = ic(r, zl);
        var s = e[e.length - 1];
        if (Ss(o) && "__language" in o) {
          if ("__language" in e[0]) this.insertText(e[0].getTextContent());
          else {
            var _t129 = $o(this);
            (o.splice(_t129, 0, e), s.selectEnd());
          }
          return;
        }
        if (
          !e.some(function (t) {
            return (Ss(t) || vs(t)) && !t.isInline();
          })
        ) {
          Ss(o) || t(211, r.constructor.name, r.getType());
          var _n63 = $o(this);
          return (o.splice(_n63, 0, e), void s.selectEnd());
        }
        if (Ss(o) && null !== dc(o)) {
          var _t130 = $o(this),
            _n64 = zo(e);
          o.splice(_t130, 0, _n64);
          var _r44 = _n64[_n64.length - 1];
          return void (void 0 !== _r44
            ? _r44.selectEnd()
            : o.select(_t130, _t130));
        }
        if (null === o) {
          var _t131 = Uo(e),
            _n65 = _t131.getLastDescendant();
          var _r45 = ua(this.anchor, "next");
          for (var _e85 of _t131.getChildren()) _r45 = Oa(_e85, _r45);
          return void (null !== _n65 && _n65.selectEnd());
        }
        if (Ss(o) && !o.isParentRequired() && !cl(o.getParentOrThrow())) {
          var _t132 = $o(this),
            _n66 = zo(e);
          o.splice(_t132, 0, _n66);
          var _r46 = _n66[_n66.length - 1];
          return void (void 0 !== _r46
            ? _r46.selectEnd()
            : o.select(_t132, _t132));
        }
        var i = Uo(e),
          l = i.getLastDescendant(),
          c = i.getChildren(),
          a = !Ss(o) || !o.isEmpty() ? this.insertParagraph() : null;
        a && !o.isAttached() && ((r = this.anchor.getNode()), (o = ic(r, zl)));
        var u = c[c.length - 1];
        var f = c[0];
        var d;
        (Ss((d = f)) &&
          zl(d) &&
          !d.isEmpty() &&
          Ss(o) &&
          (!o.isEmpty() || o.canMergeWhenEmpty()) &&
          (Ss(o) || t(211, r.constructor.name, r.getType()),
          (_o31 = o).append.apply(_o31, f.getChildren()),
          (f = c[1])),
          f &&
            (null === o && t(212, r.constructor.name, r.getType()),
            (function (e, n) {
              var r = n.getParentOrThrow().getLastChild();
              var o = n;
              var s = [n];
              for (; o !== r; )
                (o.getNextSibling() || t(140),
                  (o = o.getNextSibling()),
                  s.push(o));
              var i = e;
              for (var _t133 of s) i = i.insertAfter(_t133);
            })(o, f)));
        var h = ic(l, zl);
        (a &&
          Ss(h) &&
          (a.canMergeWhenEmpty() || zl(u)) &&
          (h.append.apply(h, a.getChildren()), a.remove()),
          Ss(o) && o.isEmpty() && o.remove(),
          l.selectEnd());
        var g = Ss(o) ? o.getLastChild() : null;
        Fs(g) && h !== o && g.remove();
      };
      _proto1.insertParagraph = function insertParagraph() {
        var e = this.anchor.getNode();
        if ("element" === this.anchor.type && cl(e)) {
          var _t134 = Bs();
          return (
            e.splice(this.anchor.offset, 0, [_t134]),
            _t134.select(),
            _t134
          );
        }
        var n = $o(this),
          r = ic(this.anchor.getNode(), zl);
        if (null !== r && null !== dc(r)) return null;
        Ss(r) || t(213);
        var o = r.getChildAtIndex(n),
          s = o ? [o].concat(o.getNextSiblings()) : [],
          i = r.insertNewAfter(this, !1);
        return i ? (i.append.apply(i, s), i.selectStart(), i) : null;
      };
      _proto1.insertLineBreak = function insertLineBreak(t) {
        var e = Ps();
        if ((this.insertNodes([e]), t)) {
          var _t135 = e.getParentOrThrow(),
            _n67 = e.getIndexWithinParent();
          _t135.select(_n67, _n67);
        }
      };
      _proto1.extract = function extract() {
        var _n$splitText;
        var t = [].concat(this.getNodes()),
          e = t.length;
        var n = t[0],
          r = t[e - 1];
        var _lo2 = lo(this),
          o = _lo2[0],
          s = _lo2[1],
          i = this.isBackward(),
          _ref27 = i ? [this.focus, this.anchor] : [this.anchor, this.focus],
          l = _ref27[0],
          c = _ref27[1],
          _ref28 = i ? [s, o] : [o, s],
          a = _ref28[0],
          u = _ref28[1];
        if (0 === e) return [];
        if (1 === e) {
          if (jr(n) && !this.isCollapsed()) {
            var _t136 = n.splitText(a, u),
              _e86 = 0 === a ? _t136[0] : _t136[1];
            return _e86
              ? (l.set(_e86.getKey(), 0, "text"),
                c.set(_e86.getKey(), _e86.getTextContentSize(), "text"),
                [_e86])
              : [];
          }
          return [n];
        }
        if (
          (jr(n) &&
            (a === n.getTextContentSize()
              ? t.shift()
              : 0 !== a &&
                ((_n$splitText = n.splitText(a)),
                (n = _n$splitText[1]),
                (t[0] = n),
                l.set(n.getKey(), 0, "text"))),
          jr(r))
        ) {
          var _r$splitText;
          var _e87 = r.getTextContent().length;
          0 === u
            ? t.pop()
            : u !== _e87 &&
              ((_r$splitText = r.splitText(u)),
              (r = _r$splitText[0]),
              (t[t.length - 1] = r),
              c.set(r.getKey(), r.getTextContentSize(), "text"));
        }
        return t;
      };
      _proto1.modify = function modify(t, e, n) {
        if (Ho(this, t, e, n)) return;
        var r = "move" === t,
          o = rs(),
          s = _l(ol(o));
        if (!s) return;
        var i = o._blockCursorElement,
          l = o._rootElement,
          c = this.focus.getNode();
        if (
          (null === l ||
            null === i ||
            !Ss(c) ||
            c.isInline() ||
            c.canBeEmpty() ||
            gl(i, o, l),
          this.dirty)
        ) {
          var _t137 = Xi(o, this.anchor.key),
            _e88 = Xi(o, this.focus.key);
          var _n68 = _t137,
            _r47 = _e88;
          if ("text" === this.anchor.type) {
            var _e89 = this.anchor.getNode();
            _n68 = jr(_e89) ? Hl(_e89, _t137, o) : null;
          }
          if ("text" === this.focus.type) {
            var _t138 = this.focus.getNode();
            _r47 = jr(_t138) ? Hl(_t138, _e88, o) : null;
          }
          _n68 &&
            _r47 &&
            Po(s, _n68, this.anchor.offset, _r47, this.focus.offset);
        }
        if ((uo(s, t, e ? "backward" : "forward", n), s.rangeCount > 0)) {
          var _t139 = Nl(s, o._rootElement),
            _n69 = _t139 || s.getRangeAt(0),
            _i17 = this.anchor.getNode(),
            _l8 = Es(_i17) ? _i17 : il(_i17);
          if ((this.applyDOMRange(_n69), (this.dirty = !0), !r)) {
            fo(this, e, _l8);
            (_t139
              ? "backward" !== s.direction
              : s.anchorNode === _n69.startContainer &&
                s.anchorOffset === _n69.startOffset) || ao(this);
          }
        }
        "lineboundary" === n && Ho(this, t, e, n, "decorators");
      };
      _proto1.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            Ss(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t140 = e.getParent(),
            _n70 =
              e.getNextSibling() ||
              (null === _t140 ? null : _t140.getNextSibling());
          if (Ss(_n70) && _n70.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto1.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e90 = this.anchor;
          var _n71 = _e90.getNode();
          if (this.forwardDeletion(_e90, _n71, t)) return;
          var _r48 = ea(ua(_e90, t ? "previous" : "next"));
          if (
            _r48.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            var _t141 = { type: "initial" };
            for (var _e91 of _r48.iterNodeCarets("shadowRoot"))
              if (Wc(_e91)) {
                if (_e91.origin.isInline());
                else {
                  if (_e91.origin.isShadowRoot()) {
                    if ("merge-block" === _t141.type) break;
                    if (
                      Ss(_r48.anchor.origin) &&
                      _r48.anchor.origin.isEmpty()
                    ) {
                      var _t142 = xa(_e91);
                      (ha(this, ra(_t142, _t142)), _r48.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t141.type &&
                    "merge-block" !== _t141.type) ||
                    (_t141 = {
                      block: _t141.block,
                      caret: _e91,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t141.type) break;
                if (Bc(_e91)) {
                  if (Ss(_e91.origin)) {
                    if (_e91.origin.isInline()) {
                      if (!_e91.origin.isParentOf(_r48.anchor.origin)) break;
                    } else
                      _t141 = { block: _e91.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (vs(_e91.origin)) {
                    if (_e91.origin.isIsolated());
                    else if (yc(_e91.origin).length > 0) {
                      if (
                        Ss(_r48.anchor.origin) &&
                        _r48.anchor.origin.isEmpty()
                      ) {
                        _r48.anchor.origin.remove();
                        var _t143 = Eo();
                        (_t143.add(_e91.origin.getKey()), Mi(_t143));
                      }
                    } else if (
                      "merge-next-block" === _t141.type &&
                      (_e91.origin.isKeyboardSelectable() ||
                        !_e91.origin.isInline()) &&
                      Ss(_r48.anchor.origin) &&
                      _r48.anchor.origin.isEmpty()
                    ) {
                      _r48.anchor.origin.remove();
                      var _t144 = Eo();
                      (_t144.add(_e91.origin.getKey()), Mi(_t144));
                    } else _e91.origin.remove();
                    return;
                  }
                  break;
                }
              }
            if ("merge-block" === _t141.type) {
              var _t145 = _t141,
                _e92 = _t145.caret,
                _n72 = _t145.block;
              if (yc(_n72).length > 0) return;
              return _e92.origin.isEmpty() &&
                !_n72.isEmpty() &&
                _e92.origin.getParent() === _n72.getParent()
                ? void _e92.origin.remove(!0)
                : (ha(
                    this,
                    ra(
                      !_e92.origin.isEmpty() && _n72.isEmpty()
                        ? _a(Yc(_n72, _e92.direction))
                        : _r48.anchor,
                      _e92,
                    ),
                  ),
                  this.removeText());
            }
            for (var _t146 = _e90.getNode(); null !== _t146; ) {
              if (null !== dc(_t146)) return;
              if (Ss(_t146) && _t146.isShadowRoot()) break;
              _t146 = _t146.getParent();
            }
          }
          var _o32 = this.focus;
          if ((ho(this, t, "character"), this.isCollapsed())) {
            if (t && 0 === _e90.offset && co(this, _e90.getNode())) return;
          } else {
            var _r49 = "text" === _o32.type ? _o32.getNode() : null;
            if (
              ((_n71 = "text" === _e90.type ? _e90.getNode() : null),
              null !== _r49 && _r49.isSegmented())
            ) {
              var _e93 = _o32.offset,
                _s26 = _r49.getTextContentSize();
              if (_r49.is(_n71) || (t && _e93 !== _s26) || (!t && 0 !== _e93))
                return void _o(_r49, t, _e93);
            } else if (null !== _n71 && _n71.isSegmented()) {
              var _o33 = _e90.offset,
                _s27 = _n71.getTextContentSize();
              if (_n71.is(_r49) || (t && 0 !== _o33) || (!t && _o33 !== _s27))
                return void _o(_n71, t, _o33);
            }
            !(function (t, e) {
              var n = t.anchor,
                r = t.focus,
                o = n.getNode(),
                s = r.getNode();
              if (o === s && "text" === n.type && "text" === r.type) {
                var _t147 = n.offset,
                  _s28 = r.offset,
                  _i18 = _t147 < _s28,
                  _l9 = _i18 ? _t147 : _s28,
                  _c8 = _i18 ? _s28 : _t147,
                  _a9 = _c8 - 1;
                if (_l9 !== _a9) {
                  (function (t) {
                    return !(Di(t) || go(t));
                  })(o.getTextContent().slice(_l9, _c8)) &&
                    (e ? r.set(r.key, _a9, r.type) : n.set(n.key, _a9, n.type));
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
          var _t148 = this.anchor.getNode();
          (_t148.isEmpty() &&
            Es(_t148.getParent()) &&
            null === _t148.getPreviousSibling() &&
            co(this, _t148),
            eo());
        }
      };
      _proto1.deleteLine = function deleteLine(t) {
        var e = xo(this.anchor);
        if (null !== e && vs(hc(e)))
          return (
            this.isCollapsed() ||
              this.focus.set(
                this.anchor.key,
                this.anchor.offset,
                this.anchor.type,
              ),
            void this.deleteCharacter(t)
          );
        if (
          (this.isCollapsed() && ho(this, t, "lineboundary"),
          this.isCollapsed())
        )
          this.deleteCharacter(t);
        else {
          ic(this.anchor.getNode(), zl) !== ic(this.focus.getNode(), zl)
            ? (this.focus.set(
                this.anchor.key,
                this.anchor.offset,
                this.anchor.type,
              ),
              this.deleteCharacter(t))
            : this.removeText();
        }
      };
      _proto1.deleteWord = function deleteWord(t) {
        if (this.isCollapsed()) {
          var _e94 = this.anchor,
            _n73 = _e94.getNode();
          if (this.forwardDeletion(_e94, _n73, t)) return;
          ho(this, t, "word");
        }
        this.isCollapsed() ? this.deleteCharacter(t) : this.removeText();
      };
      _proto1.isBackward = function isBackward() {
        var t = this._cachedIsBackward;
        if (null !== t) return t;
        var e = this.focus.isBefore(this.anchor);
        return (Zo() || (this._cachedIsBackward = e), e);
      };
      _proto1.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return ro;
    })();
    function oo(t) {
      return t instanceof _to;
    }
    function so(t, e, n) {
      var _g$splitText, _m$splitText;
      if (n === void 0) {
        n = null;
      }
      if (oo(t)) {
        for (var _n74 of t.getNodes())
          Pr(_n74) && _n74.setFormat(_n74.getFormatFlags(e, null));
        return;
      }
      if (t.isCollapsed()) return (t.toggleFormat(e), void xi(null));
      var r = t.getNodes(),
        o = [];
      for (var _t149 of r) jr(_t149) && o.push(_t149);
      var s = function s(t) {
          for (var _n75 of r)
            if (Ss(_n75)) {
              var _r50 = _n75.getFormatFlags(e, t);
              _n75.setTextFormat(_r50);
            }
        },
        i = function i(t) {
          for (var _n76 of r)
            !jr(_n76) && Pr(_n76) && _n76.setFormat(_n76.getFormatFlags(e, t));
        },
        l = o.length;
      if (0 === l) return (t.toggleFormat(e), xi(null), s(n), void i(n));
      var c = t.anchor,
        a = t.focus,
        u = t.isBackward(),
        f = u ? a : c,
        d = u ? c : a;
      var h = 0,
        g = o[0],
        _ = "element" === f.type ? 0 : f.offset;
      "text" === f.type &&
        _ === g.getTextContentSize() &&
        ((h = 1), (g = o[1]), (_ = 0));
      var p = (g != null ? g : o[0]).getFormatFlags(e, n);
      if ((s(p), i(p), null == g)) return;
      var y = l - 1;
      var m = o[y];
      var x = "text" === d.type ? d.offset : m.getTextContentSize();
      if (g.is(m)) {
        if (_ === x) return;
        if (ui(g) || (0 === _ && x === g.getTextContentSize())) g.setFormat(p);
        else {
          var _t150 = g.splitText(_, x),
            _e95 = 0 === _ ? _t150[0] : _t150[1];
          (_e95.setFormat(p),
            "text" === f.type && f.set(_e95.__key, 0, "text"),
            "text" === d.type && d.set(_e95.__key, x - _, "text"));
        }
        return void (t.format = p);
      }
      (0 === _ ||
        ui(g) ||
        ((_g$splitText = g.splitText(_)), (g = _g$splitText[1]), (_ = 0)),
        g.setFormat(p));
      var C = m.getFormatFlags(e, p);
      x > 0 &&
        (x === m.getTextContentSize() ||
          ui(m) ||
          ((_m$splitText = m.splitText(x)),
          (m = _m$splitText[0]),
          _m$splitText),
        m.setFormat(C));
      for (var _t151 = h + 1; _t151 < y; _t151++) {
        var _n77 = o[_t151],
          _r51 = _n77.getFormatFlags(e, C);
        _n77.setFormat(_r51);
      }
      ("text" === f.type && f.set(g.__key, _, "text"),
        "text" === d.type && d.set(m.__key, x, "text"),
        (t.format = p | C));
    }
    function io(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function lo(t) {
      var e = t.getStartEndPoints();
      if (null === e) return [0, 0];
      var n = e[0],
        r = e[1];
      return "element" === n.type &&
        "element" === r.type &&
        n.key === r.key &&
        n.offset === r.offset
        ? [0, 0]
        : [io(n), io(r)];
    }
    function co(t, e) {
      for (var _n78 = e; _n78; _n78 = _n78.getParent()) {
        if (Ss(_n78)) {
          if (_n78.collapseAtStart(t)) return !0;
          if (cl(_n78)) break;
        }
        if (_n78.getPreviousSibling()) break;
      }
      return !1;
    }
    function ao(t) {
      var e = t.focus,
        n = t.anchor,
        r = n.key,
        o = n.offset,
        s = n.type;
      (n.set(e.key, e.offset, e.type, !0), e.set(r, o, s, !0));
    }
    function uo(t, e, n, r) {
      t.modify(e, n, r);
    }
    function fo(t, e, n) {
      var r = t.getNodes(),
        o = r.filter(function (t) {
          return nl(t, n);
        });
      if (0 === o.length || o.length === r.length) return !1;
      var s = e ? o[0] : o[o.length - 1],
        i = Ss(s) ? s : s.getParentOrThrow();
      return (e ? i.selectStart() : i.selectEnd(), !0);
    }
    function ho(t, e, n) {
      if (Ho(t, "extend", e, n)) return;
      var r = rs(),
        o = _l(ol(r));
      if (!o || "function" != typeof o.modify) return;
      var s = r._blockCursorElement,
        i = r._rootElement,
        l = t.anchor,
        c = t.focus.getNode();
      null === i ||
        null === s ||
        !Ss(c) ||
        c.isInline() ||
        c.canBeEmpty() ||
        gl(s, r, i);
      var a = function a(t) {
          var e = t.getNode(),
            n = r.getElementByKey(t.key);
          return null !== n && "text" === t.type && jr(e) ? Hl(e, n, r) : n;
        },
        u = l.getNode(),
        f = a(l);
      if (null === f) return;
      var d = l.offset,
        h = t.isCollapsed(),
        g = t.focus,
        _ = h ? f : a(g);
      if (null === _) return;
      var p = g.offset;
      if (
        (Po(o, _, p, _, p),
        uo(o, "move", e ? "backward" : "forward", n),
        0 === o.rangeCount)
      )
        return;
      var y = Nl(o, i) || o.getRangeAt(0),
        m = y.startContainer,
        x = y.startOffset;
      if (h && "character" === n && "text" === l.type) {
        var _n79 = e ? 0 : u.getTextContentSize(),
          _r52 = m === f ? x : d !== _n79 ? _n79 : -1;
        if (_r52 >= 0)
          return void (
            _r52 !== d && (t.focus.set(l.key, _r52, "text"), (t.dirty = !0))
          );
      }
      var _ref29 = e ? [m, x, f, d] : [f, d, m, x],
        C = _ref29[0],
        S = _ref29[1],
        T = _ref29[2],
        N = _ref29[3],
        v = Es(u) ? u : il(u);
      (t.applyDOMRange({
        collapsed: !1,
        endContainer: T,
        endOffset: N,
        startContainer: C,
        startOffset: S,
      }),
        (t.dirty = !0),
        !fo(t, e, v) && e && ao(t),
        "lineboundary" === n && Ho(t, "extend", e, n, "decorators"));
    }
    var go = (function () {
      try {
        var _t152 = new RegExp("\\p{Emoji}", "u"),
          _e96 = _t152.test.bind(_t152);
        if (_e96("\u2764\ufe0f") && _e96("#\ufe0f\u20e3") && _e96("\u{1f44d}"))
          return _e96;
      } catch (t) {}
      return function () {
        return !1;
      };
    })();
    function _o(t, e, n) {
      var r = t,
        o = r.getTextContent().split(/(?=\s)/g),
        s = o.length;
      var i = 0,
        l = 0;
      for (var _t153 = 0; _t153 < s; _t153++) {
        var _r53 = _t153 === s - 1;
        if (
          ((l = i), (i += o[_t153].length), (e && i === n) || i > n || _r53)
        ) {
          (o.splice(_t153, 1), _r53 && (l = void 0));
          break;
        }
      }
      var c = o.join("").trim();
      "" === c ? r.remove() : (r.setTextContent(c), r.select(l, l));
    }
    function po(e, n, r, o) {
      var s,
        i = n,
        l = !1;
      if (Dl(e)) {
        var _c9 = !1;
        var _a0 = e.childNodes,
          _u0 = _a0.length,
          _f8 = o._blockCursorElement;
        (i === _u0 && _u0 > 0 && ((_c9 = !0), (i = _u0 - 1)),
          void 0 !== vi(e, o) || ec(e, o) || (l = !0));
        var _d7 = _a0[i],
          _h7 = !1;
        if (_d7 === _f8) ((_d7 = _a0[i + 1]), (_h7 = !0));
        else if (null !== _f8) {
          var _t154 = _f8.parentNode;
          if (e === _t154) {
            n > Array.prototype.indexOf.call(_t154.children, _f8) && i--;
          }
        }
        if (((s = wi(_d7)), jr(s))) i = Gc(s, _c9 ? "next" : "previous");
        else {
          var _a1 = wi(e);
          if (null === _a1) return null;
          if (Ss(_a1)) {
            var _u1$resolveChildIndex;
            var _l0 = o.getElementByKey(_a1.getKey());
            null === _l0 && t(214);
            var _u1 = Wl(_a1, _l0, o);
            ((_u1$resolveChildIndex = _u1.resolveChildIndex(_a1, _l0, e, n)),
              (_a1 = _u1$resolveChildIndex[0]),
              (i = _u1$resolveChildIndex[1]),
              Ss(_a1) || t(215),
              _c9 &&
                i >= _a1.getChildrenSize() &&
                (i = Math.max(0, _a1.getChildrenSize() - 1)));
            var _f9 = _a1.getChildAtIndex(i);
            if (
              Ss(_f9) &&
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
              var _t155 = _c9
                ? _f9.getLastDescendant()
                : _f9.getFirstDescendant();
              (null === _t155
                ? (_a1 = _f9)
                : ((_f9 = _t155),
                  (_a1 = Ss(_f9) ? _f9 : _f9.getParentOrThrow())),
                (i = 0));
            }
            jr(_f9)
              ? ((s = _f9),
                (_a1 = null),
                (i = Gc(_f9, _c9 ? "next" : "previous")))
              : _f9 !== _a1 &&
                _c9 &&
                !_h7 &&
                (Ss(_a1) || t(216),
                (i = Math.min(_a1.getChildrenSize(), i + 1)));
          } else {
            var _t156 = hc(_a1),
              _r54 = null !== _t156 ? _t156 : _a1,
              _s29 = _r54.getIndexWithinParent(),
              _l1 = o.getElementByKey(_a1.getKey());
            var _c0 = "after";
            if (null !== _l1 && wi(e) === _a1) {
              var _t157 = Wl(_a1, _l1, o);
              _t157.element !== _l1
                ? (_c0 = _t157.resolveLeafPosition(_l1, e, n))
                : 0 === n && vs(_a1) && (_c0 = "before");
            }
            ((i = "before" === _c0 ? _s29 : _s29 + 1),
              (_a1 = _r54.getParentOrThrow()));
          }
          if (Ss(_a1)) return [Xr(_a1.__key, i, "element"), l];
        }
      } else s = wi(e);
      return jr(s) ? [Xr(s.__key, Gc(s, i, "clamp"), "text"), l] : null;
    }
    function yo(t, e, n) {
      var r = t.offset,
        o = t.getNode();
      if (0 === r) {
        var _r55 = o.getPreviousSibling(),
          _s30 = o.getParent();
        if (e) {
          if ((n || !e) && null === _r55 && Ss(_s30) && _s30.isInline()) {
            var _e97 = _s30.getPreviousSibling();
            jr(_e97) && t.set(_e97.__key, _e97.getTextContent().length, "text");
          }
        } else
          Ss(_r55) && !n && _r55.isInline()
            ? t.set(_r55.__key, _r55.getChildrenSize(), "element")
            : jr(_r55) &&
              t.set(_r55.__key, _r55.getTextContent().length, "text");
      } else if (r === o.getTextContent().length) {
        var _r56 = o.getNextSibling(),
          _s31 = o.getParent();
        if (e && Ss(_r56) && _r56.isInline()) t.set(_r56.__key, 0, "element");
        else if (
          (n || e) &&
          null === _r56 &&
          Ss(_s31) &&
          _s31.isInline() &&
          !_s31.canInsertTextAfter() &&
          _s31.getTextContentSize() > 1
        ) {
          var _e98 = _s31.getNextSibling();
          jr(_e98) && t.set(_e98.__key, 0, "text");
        }
      }
    }
    function mo(t, e, n) {
      if ("text" === t.type && "text" === e.type) {
        var _n80 = t.isBefore(e),
          _r57 = t.is(e);
        (yo(t, _n80, _r57),
          yo(e, !_n80, _r57),
          _r57 && e.set(t.key, t.offset, t.type));
      }
    }
    function xo(t) {
      var e = Si(t.key);
      return null === e ? null : _c(e);
    }
    function Co(t, e, n) {
      var r = xo(t),
        o = xo(e);
      if (r === o || (null !== r && null !== o && r.is(o))) return !1;
      var s = n(r, o);
      if (null !== r)
        return (
          Ss(r)
            ? e.set(r.getKey(), s ? r.getChildrenSize() : 0, "element")
            : e.set(r.getKey(), s ? r.getTextContentSize() : 0, "text"),
          !0
        );
      var i = hc(o);
      if (null === i) return !1;
      var l = i.getParent();
      if (null === l) return !1;
      var c = i.getIndexWithinParent();
      return (e.set(l.getKey(), s ? c + 1 : c, "element"), !0);
    }
    function So(t) {
      var e = Co(t.anchor, t.focus, function (e, n) {
        return (function (t, e, n, r) {
          if (null !== n && null !== r) {
            var _t158 = hc(n),
              _e99 = hc(r);
            if (null !== _t158 && _t158.is(_e99)) {
              for (var _e100 of pc(_t158).values()) {
                if (_e100 === n.getKey()) return !0;
                if (_e100 === r.getKey()) return !1;
              }
              return !0;
            }
            return null === _t158 || null === _e99 || _t158.isBefore(_e99);
          }
          if (null !== n) {
            var _t159 = hc(n),
              _r58 = Si(e.key);
            return (
              null === _t159 ||
              null === _r58 ||
              !(!_t159.is(_r58) && !_t159.isParentOf(_r58)) ||
              _t159.isBefore(_r58)
            );
          }
          var o = hc(r),
            s = Si(t.key);
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
    function To(t, e, n, r, o, s) {
      if (null === t || null === n || !si(o, t, n)) return null;
      var i = po(t, e, no(s) ? s.anchor : null, o);
      if (null === i) return null;
      var l = po(n, r, no(s) ? s.focus : null, o);
      if (null === l) return null;
      var c = i[0],
        a = i[1],
        u = l[0],
        f = l[1];
      if ("element" === c.type && "element" === u.type) {
        var _e101 = wi(t),
          _r59 = wi(n);
        if (vs(_e101) && vs(_r59)) return null;
      }
      var d =
        o._slotsUsed &&
        Co(c, u, function () {
          return (
            0 !==
            (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_FOLLOWING)
          );
        });
      return (mo(c, u), [c, u, a || f || d]);
    }
    function No(t) {
      return Ss(t) && !t.isInline();
    }
    function vo(t, e, n, r, o, s) {
      var i = ns(),
        l = new _ro(Xr(t, e, o), Xr(n, r, s), 0, "");
      return ((l.dirty = !0), (i._selection = l), l);
    }
    function ko() {
      var t = Xr("root", 0, "element"),
        e = Xr("root", 0, "element");
      return new _ro(t, e, 0, "");
    }
    function Eo() {
      return new _to(new Set());
    }
    function Oo(t, e, n, r) {
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
      if (no(t) && !c) return t.clone();
      {
        if (null === e) return null;
        var _r60 = kl(e, n._rootElement);
        if (
          ((a = _r60.anchorNode),
          (u = _r60.focusNode),
          (f = _r60.anchorOffset),
          (d = _r60.focusOffset),
          (l || void 0 === i) && no(t) && !si(n, a, u))
        )
          return t.clone();
      }
      var h = To(a, f, u, d, n, t);
      if (null === h) return null;
      var g = h[0],
        _ = h[1],
        p = h[2];
      var y = 0,
        m = "";
      if (no(t)) {
        var _e102 = t.anchor;
        if (g.key === _e102.key) ((y = t.format), (m = t.style));
        else {
          var _t160 = g.getNode();
          jr(_t160)
            ? ((y = _t160.getFormat()), (m = _t160.getStyle()))
            : Ss(_t160) &&
              ((y = _t160.getTextFormat()), (m = _t160.getTextStyle()));
        }
      }
      var x = new _ro(g, _, y, m);
      return (p && (x.dirty = !0), x);
    }
    function bo() {
      return ns()._selection;
    }
    function Mo() {
      return rs()._editorState._selection;
    }
    function Ao(t, e, n, r) {
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
        var _e103 = o.offset;
        if ((n <= _e103 && r > 0) || (n < _e103 && r < 0)) {
          var _n81 = Math.max(0, _e103 + r);
          (o.set(c, _n81, "element"), s.set(c, _n81, "element"), wo(t));
        }
      } else {
        var _i19 = t.isBackward(),
          _l10 = _i19 ? s : o,
          _a10 = _l10.getNode(),
          _u10 = _i19 ? o : s,
          _f0 = _u10.getNode();
        if (e.is(_a10)) {
          var _t161 = _l10.offset;
          ((n <= _t161 && r > 0) || (n < _t161 && r < 0)) &&
            _l10.set(c, Math.max(0, _t161 + r), "element");
        }
        if (e.is(_f0)) {
          var _t162 = _u10.offset;
          ((n <= _t162 && r > 0) || (n < _t162 && r < 0)) &&
            _u10.set(c, Math.max(0, _t162 + r), "element");
        }
      }
      wo(t);
    }
    function wo(t) {
      var e = t.anchor,
        n = e.offset,
        r = t.focus,
        o = r.offset,
        s = e.getNode(),
        i = r.getNode();
      if (t.isCollapsed()) {
        if (!Ss(s)) return;
        var _t163 = s.getChildrenSize(),
          _o34 = n >= _t163,
          _i20 = _o34 ? s.getChildAtIndex(_t163 - 1) : s.getChildAtIndex(n);
        if (jr(_i20)) {
          var _t164 = 0;
          (_o34 && (_t164 = _i20.getTextContentSize()),
            e.set(_i20.__key, _t164, "text"),
            r.set(_i20.__key, _t164, "text"));
        }
        return;
      }
      if (Ss(s)) {
        var _t165 = s.getChildrenSize(),
          _r61 = n >= _t165,
          _o35 = _r61 ? s.getChildAtIndex(_t165 - 1) : s.getChildAtIndex(n);
        if (jr(_o35)) {
          var _t166 = 0;
          (_r61 && (_t166 = _o35.getTextContentSize()),
            e.set(_o35.__key, _t166, "text"));
        }
      }
      if (Ss(i)) {
        var _t167 = i.getChildrenSize(),
          _e104 = o >= _t167,
          _n82 = _e104 ? i.getChildAtIndex(_t167 - 1) : i.getChildAtIndex(o);
        if (jr(_n82)) {
          var _t168 = 0;
          (_e104 && (_t168 = _n82.getTextContentSize()),
            r.set(_n82.__key, _t168, "text"));
        }
      }
    }
    function Do(t, e, n, r, o) {
      var s = null,
        i = 0,
        l = null;
      (null !== r
        ? ((s = r.__key),
          jr(r)
            ? ((i = r.getTextContentSize()), (l = "text"))
            : Ss(r) && ((i = r.getChildrenSize()), (l = "element")))
        : null !== o &&
          ((s = o.__key), jr(o) ? (l = "text") : Ss(o) && (l = "element")),
        null !== s && null !== l
          ? t.set(s, i, l)
          : ((i = e.getIndexWithinParent()),
            -1 === i && (i = n.getChildrenSize()),
            t.set(n.__key, i, "element")));
    }
    function Io(t, e, n, r, o) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : o), "text")
        : t.offset > r.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function Po(t, e, n, r, o) {
      try {
        t.setBaseAndExtent(e, n, r, o);
      } catch (t) {}
    }
    function Fo(t, e, n) {
      var r = Xi(t, e.getKey());
      if (Ss(e)) {
        var _o36 = Wl(e, r, t);
        return [_o36.element, n + _o36.getFirstChildOffset()];
      }
      return [r, n];
    }
    function Ro(t, e, n, r, o, i) {
      var l = i.getRootNode(),
        c = di(l) || yl(l) ? Al(l) : null;
      if ((o.has(mr) && c !== i) || (null !== c && ri(c, c))) return;
      var a = kl(r, i);
      var u;
      if (!no(e))
        return void (
          null !== t &&
          si(n, a.anchorNode, a.focusNode) &&
          r.removeAllRanges()
        );
      var f = e.anchor,
        d = e.focus,
        h = f.getNode(),
        g = d.getNode(),
        _Fo = Fo(n, h, f.offset),
        _ = _Fo[0],
        p = _Fo[1],
        _Fo2 = Fo(n, g, d.offset),
        y = _Fo2[0],
        m = _Fo2[1],
        x = e.format,
        C = e.style,
        S = e.isCollapsed();
      var T = _,
        N = y,
        v = !1;
      if (
        ("text" === f.type
          ? ((T = jr(h) ? Hl(h, _, n) : null),
            (v = h.getFormat() !== x || h.getStyle() !== C))
          : no(t) && "text" === t.anchor.type && (v = !0),
        "text" === d.type && (N = jr(g) ? Hl(g, y, n) : null),
        null !== T && null !== N)
      ) {
        var k, E, O, b, M;
        if (
          (S &&
            (null === t || v || (no(t) && (t.format !== x || t.style !== C))) &&
            ((k = x),
            (E = C),
            (O = p),
            (b = f.key),
            (M = performance.now()),
            ($n = [k, E, O, b, M])),
          ("Range" !== r.type || !S) &&
            a.anchorOffset === p &&
            a.focusOffset === m &&
            a.anchorNode === T &&
            a.focusNode === N)
        ) {
          if (null === c || !i.contains(c)) {
            var _t169 = null !== c ? li(c) : null;
            (null !== _t169 && _t169 !== n) ||
              o.has(Sr) ||
              i.focus({ preventScroll: !0 });
          }
          if ("element" !== f.type) return;
        }
        if (
          (Po(r, T, p, N, m), s && e.isCollapsed() && null !== i && !o.has(Sr))
        ) {
          var _t170 = Ml(i);
          if (null === _t170 || !i.contains(_t170)) {
            var _t171 = Al(i.ownerDocument),
              _e105 = null !== _t171 ? li(_t171) : null;
            (null !== _e105 && _e105 !== n) || i.focus({ preventScroll: !0 });
          }
        }
        if (!o.has(xr) && e.isCollapsed() && null !== i && i === Ml(i)) {
          var _t172 =
            no(e) && "element" === e.anchor.type
              ? T.childNodes[p] || null
              : (void 0 === u && (u = vl(r, i)), u);
          if (null !== _t172) {
            var _e106;
            if (fi(_t172)) {
              var _n83 = _t172.ownerDocument.createRange();
              (_n83.selectNode(_t172), (_e106 = _n83.getBoundingClientRect()));
            } else _e106 = _t172.getBoundingClientRect();
            !(function (t, e, n) {
              var r = Zi(n),
                o = rl(r);
              if (null === r || null === o) return;
              var s = e.top,
                i = e.bottom,
                l = 0,
                c = 0,
                a = n;
              for (; null !== a; ) {
                var _e107 = a === r.body;
                if (_e107) {
                  var _e108 = o.visualViewport;
                  if (_e108) {
                    var _t173 = _e108.offsetTop;
                    ((l = _t173), (c = _t173 + _e108.height));
                  } else ((l = 0), (c = ol(t).innerHeight));
                  var _n84 = o.getComputedStyle(r.documentElement),
                    _s32 = parseFloat(_n84.scrollPaddingTop),
                    _i21 = parseFloat(_n84.scrollPaddingBottom);
                  (isFinite(_s32) && (l += _s32),
                    isFinite(_i21) && (c -= _i21));
                } else {
                  var _t174 = a.getBoundingClientRect();
                  ((l = _t174.top), (c = _t174.bottom));
                }
                var _n85 = 0;
                if (
                  (s < l ? (_n85 = -(l - s)) : i > c && (_n85 = i - c),
                  0 !== _n85)
                )
                  if (_e107) o.scrollBy(0, _n85);
                  else {
                    var _t175 = a.scrollTop;
                    a.scrollTop += _n85;
                    var _e109 = a.scrollTop - _t175;
                    ((s -= _e109), (i -= _e109));
                  }
                if (_e107) break;
                a = Qi(a);
              }
            })(n, _e106, i);
          }
        }
        Dn = !0;
      }
    }
    function Lo(t, e) {
      for (var _n86 of t.split(/(\r?\n|\t)/))
        "\n" === _n86 || "\r\n" === _n86
          ? e.linebreak()
          : "\t" === _n86
            ? e.tab()
            : "" !== _n86 && e.text(_n86);
    }
    function Ko(t) {
      var e = [];
      return (
        Lo(t, {
          linebreak: function linebreak() {
            return e.push(Ps());
          },
          tab: function tab() {
            return e.push(Gr());
          },
          text: function text(t) {
            return e.push(Hr(t));
          },
        }),
        e
      );
    }
    function zo(t) {
      var e = [];
      for (var _n87 of t)
        Fs(_n87) ||
          ((!Ss(_n87) && !vs(_n87)) || _n87.isInline()
            ? e.push(_n87)
            : Ss(_n87) && e.push.apply(e, zo(_n87.getChildren())));
      return e;
    }
    function $o(e) {
      var n = e;
      e.isCollapsed() || n.removeText();
      var r = bo();
      (no(r) && (n = r), no(n) || t(161));
      var o = n.anchor;
      var s = o.getNode(),
        i = o.offset;
      for (; !zl(s) && null === dc(s); ) {
        var _Bo;
        var _t176 = s;
        if (((_Bo = Bo(s, i)), (s = _Bo[0]), (i = _Bo[1]), _t176.is(s))) break;
      }
      return i;
    }
    function Bo(t, e) {
      var n = t.getParent();
      if (!n) {
        var _t177 = Bs();
        return (bi().append(_t177), _t177.select(), [bi(), 0]);
      }
      if (jr(t)) {
        var _r62 = t.splitText(e);
        if (0 === _r62.length) return [n, t.getIndexWithinParent()];
        var _o37 = 0 === e ? 0 : 1;
        return [n, _r62[0].getIndexWithinParent() + _o37];
      }
      if (!Ss(t) || 0 === e) return [n, t.getIndexWithinParent()];
      var r = t.getChildAtIndex(e);
      if (r) {
        var _n88 = new _ro(
            Xr(t.__key, e, "element"),
            Xr(t.__key, e, "element"),
            0,
            "",
          ),
          _o38 = t.insertNewAfter(_n88);
        _o38 && _o38.append.apply(_o38, [r].concat(r.getNextSiblings()));
      }
      return [n, t.getIndexWithinParent() + 1];
    }
    function Wo(t) {
      return Fs(t) || sl(t) || jr(t) || t.isParentRequired();
    }
    function Uo(t) {
      var e = Bs();
      var n = null;
      for (var _r63 = 0; _r63 < t.length; _r63++) {
        var _o39 = t[_r63];
        if (Wo(_o39)) {
          if (null === n) {
            ((n = _o39.createParentElementNode()), e.append(n));
            var _s33 = t[_r63 + 1];
            if (Fs(_o39) && (void 0 === _s33 || !Wo(_s33))) continue;
          }
          n.append(_o39);
        } else (e.append(_o39), (n = null));
      }
      return e;
    }
    function Ho(t, e, n, r, o) {
      if (o === void 0) {
        o = "decorators-and-blocks";
      }
      if ("move" === e && "character" === r && !t.isCollapsed()) {
        var _ref30 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e110 = _ref30[0],
          _r64 = _ref30[1];
        return (_r64.set(_e110.key, _e110.offset, _e110.type), !0);
      }
      var s = ua(t.focus, n ? "previous" : "next"),
        i = "lineboundary" === r,
        l = "move" === e;
      var c = s,
        a = "decorators-and-blocks" === o;
      if (!Ca(c)) {
        for (var _t178 of c) {
          a = !1;
          var _e111 = _t178.origin;
          if (
            !vs(_e111) ||
            _e111.isIsolated() ||
            ((c = _t178), !i || !_e111.isInline())
          )
            break;
        }
        if (a)
          for (var _t179 of ea(s).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (Wc(_t179)) _t179.origin.isInline() || (c = _t179);
            else {
              if (Ss(_t179.origin)) continue;
              vs(_t179.origin) && !_t179.origin.isInline() && (c = _t179);
            }
            break;
          }
      }
      if (c === s) return !1;
      if (l && !i && vs(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t180 = Eo();
        return (_t180.add(c.origin.getKey()), Mi(_t180), !0);
      }
      return ((c = xa(c)), l && fa(t.anchor, c), fa(t.focus, c), a || !i);
    }
    var jo = null,
      Yo = null,
      Jo = !1,
      Go = !1,
      Vo = !1;
    var qo = new Set();
    var Xo = 0;
    var Qo = { characterData: !0, childList: !0, subtree: !0 };
    function Zo() {
      return Jo || (null !== jo && jo._readOnly);
    }
    function ts() {
      Jo && t(13);
    }
    function es() {
      Xo > 99 && t(14);
    }
    function ns() {
      return (null === jo && t(195, ss()), jo);
    }
    function rs() {
      return (null === Yo && t(337, ss()), Yo);
    }
    function os() {
      rs()._dirtyType = 2;
    }
    function ss() {
      var t = 0;
      var e = new Set(),
        n = _qs.version;
      if ("undefined" != typeof window)
        for (var _r65 of Cl(document)) {
          var _o40 = ci(_r65);
          if (ii(_o40)) t++;
          else if (_o40) {
            var _t181 = String(_o40.constructor.version || "<0.17.1");
            (_t181 === n &&
              (_t181 +=
                " (separately built, likely a bundler configuration issue)"),
              e.add(_t181));
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
    function is() {
      return Yo;
    }
    function ls(t, e, n) {
      var r = e.__type,
        o = ti(t, r);
      var s = n.get(r);
      void 0 === s && ((s = Array.from(o.transforms)), n.set(r, s));
      var i = s.length;
      for (var _t182 = 0; _t182 < i && (s[_t182](e), e.isAttached()); _t182++);
    }
    function cs(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function as(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var r = e;
      Array.isArray(e) || (r = [e]);
      for (var _t183 of r) n.add(_t183);
    }
    function us(e, n) {
      var r = e.type,
        o = n.get(r);
      void 0 === o && t(17, r);
      var s = o.klass;
      e.type !== s.getType() && t(18, s.name);
      var i = s.importJSON(e),
        l = e.children;
      if (Ss(i) && Array.isArray(l))
        for (var _t184 = 0; _t184 < l.length; _t184++) {
          var _e112 = us(l[_t184], n);
          i.append(_e112);
        }
      var c = e.$slots;
      if (c) {
        uc(i) || t(379, s.name);
        for (var _t185 in c) {
          bc(i, _t185, us(c[_t185], n));
        }
      }
      return i;
    }
    function fs(t, e, n) {
      var r = jo,
        o = Jo,
        s = Yo;
      ((jo = e), (Jo = !0), (Yo = t));
      try {
        return n();
      } finally {
        ((jo = r), (Jo = o), (Yo = s));
      }
    }
    function ds(t, e) {
      var n = Vo;
      Vo = !0;
      try {
        !(function (t, e) {
          var n = t._pendingEditorState,
            r = t._rootElement,
            o = t._headless || null === r;
          if (null === n)
            return void (
              !t._updating &&
              t._deferred.length > 0 &&
              _s(t, t._deferred)
            );
          var s = t._editorState,
            i = s._selection,
            l = n._selection,
            c = 0 !== t._dirtyType,
            a = jo,
            u = Jo,
            f = Yo,
            d = t._updating,
            h = t._observer;
          var g = null;
          if (
            ((t._pendingEditorState = null),
            (t._editorState = n),
            !o && c && null !== h)
          ) {
            ((Yo = t), (jo = n), (Jo = !1), (t._updating = !0));
            try {
              var _e113 = t._dirtyType,
                _r66 = t._dirtyElements,
                _o41 = t._dirtyLeaves;
              (h.disconnect(), (g = Ce(s, n, t, _e113, _r66, _o41)));
            } catch (e) {
              if ((e instanceof Error && t._onError(e), Go)) throw e;
              return (
                js(t, null, r, n),
                st(t),
                (t._dirtyType = 2),
                (Go = !0),
                ds(t, s),
                void (Go = !1)
              );
            } finally {
              (h.observe(r, Qo),
                (t._updating = d),
                (jo = a),
                (Jo = u),
                (Yo = f));
            }
          }
          n._readOnly || (n._readOnly = !0);
          var _ = t._dirtyLeaves,
            p = t._dirtyElements,
            y = t._normalizedNodes,
            m = t._updateTags;
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
              for (s in r) o.has(s) || (r === n && (r = Ei(t)), delete r[s]);
            })(t, n));
          var x = o ? null : _l(ol(t));
          if (
            t._editable &&
            null !== x &&
            (c || null === l || l.dirty || !l.is(i)) &&
            null !== r &&
            !m.has(Cr)
          ) {
            ((Yo = t), (jo = n));
            try {
              if ((null !== h && h.disconnect(), c || null === l || l.dirty)) {
                var _e114 = t._blockCursorElement;
                (null !== _e114 && gl(_e114, t, r), Ro(i, l, t, x, m, r));
              }
              !(function (t, e, n) {
                var r = t._blockCursorElement;
                if (
                  no(n) &&
                  n.isCollapsed() &&
                  "element" === n.anchor.type &&
                  e.contains(Ml(e))
                ) {
                  var _o42 = n.anchor,
                    _s34 = _o42.getNode(),
                    _i22 = _o42.offset;
                  var _l11 = !1,
                    _c1 = null;
                  if (_i22 === _s34.getChildrenSize()) {
                    hl(_s34.getChildAtIndex(_i22 - 1)) && (_l11 = !0);
                  } else {
                    var _e115 = _s34.getChildAtIndex(_i22);
                    if (null !== _e115 && hl(_e115)) {
                      var _n89 = _e115.getPreviousSibling();
                      (null === _n89 || hl(_n89)) &&
                        ((_l11 = !0), (_c1 = t.getElementByKey(_e115.__key)));
                    }
                  }
                  if (_l11) {
                    var _n90 = Wl(
                      _s34,
                      t.getElementByKey(_s34.__key),
                      t,
                    ).element;
                    return (
                      null === r &&
                        (t._blockCursorElement = r =
                          (function (t) {
                            var e = t.theme,
                              n = Tl().createElement("div");
                            ((n.contentEditable = "false"),
                              n.setAttribute("data-lexical-cursor", "true"));
                            var r = e.blockCursor;
                            if (void 0 !== r) {
                              var _n$classList;
                              if ("string" == typeof r) {
                                var _t186 = ba(r);
                                r = e.blockCursor = _t186;
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
                        ? _n90.appendChild(r)
                        : _n90.insertBefore(r, _c1))
                    );
                  }
                }
                null !== r && gl(r, t, e);
              })(t, r, l);
            } finally {
              (null !== h && h.observe(r, Qo), (Yo = f), (jo = a));
            }
          }
          null !== g &&
            (function (t, e, n, r, o) {
              var s = Array.from(t._listeners.mutation),
                i = s.length;
              for (var _t187 = 0; _t187 < i; _t187++) {
                var _s$_t = s[_t187],
                  _i23 = _s$_t[0],
                  _l12 = _s$_t[1];
                for (var _t188 of _l12) {
                  var _s35 = e.get(_t188);
                  void 0 !== _s35 &&
                    _i23(_s35, {
                      dirtyLeaves: r,
                      prevEditorState: o,
                      updateTags: n,
                    });
                }
              }
            })(t, g, m, _, s);
          no(l) ||
            null === l ||
            (null !== i && i.is(l)) ||
            t.dispatchCommand(Ne, void 0);
          var C = t._pendingDecorators;
          null !== C &&
            ((t._decorators = C),
            (t._pendingDecorators = null),
            hs("decorator", t, !0, C));
          if (
            ((function (t, e, n) {
              var r = Oi(e),
                o = Oi(n);
              r !== o && hs("textcontent", t, !0, o);
            })(t, e || s, n),
            hs("update", t, !0, {
              dirtyElements: p,
              dirtyLeaves: _,
              editorState: n,
              mutatedNodes: g,
              normalizedNodes: y,
              prevEditorState: e || s,
              tags: m,
            }),
            !d)
          ) {
            _s(t, t._deferred);
          }
          !(function (t) {
            var e = t._updates;
            if (0 === e.length) return void (t._cascadeCount = 0);
            if (
              ((function (t) {
                if (qo.has(t)) return;
                (qo.add(t),
                  setTimeout(function () {
                    (qo["delete"](t), (t._cascadeCount = 0));
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
              var _e116 = n[0],
                _r67 = n[1];
              ys(t, _e116, _r67);
            }
          })(t);
        })(t, e);
      } finally {
        Vo = n;
      }
    }
    function hs(t, e, n) {
      var o = e._updating;
      e._updating = n;
      try {
        var _n91 = e._listeners[t],
          _o43 = Array.from(_n91);
        for (
          var _len4 = arguments.length,
            r = new Array(_len4 > 3 ? _len4 - 3 : 0),
            _key4 = 3;
          _key4 < _len4;
          _key4++
        ) {
          r[_key4 - 3] = arguments[_key4];
        }
        for (var _ref32 of _o43) {
          var _t189 = _ref32[0];
          var _e117 = _ref32[1];
          {
            _e117 && _e117();
            var _o44 = _t189.apply(void 0, r);
            _n91.has(_t189) ? _n91.set(_t189, _o44) : _o44 && _o44();
          }
        }
      } finally {
        e._updating = o;
      }
    }
    function gs(t, e, n, r) {
      var o = Ii(t);
      var s;
      if (!Vo)
        for (var _t190 = 0; _t190 < o.length; _t190++)
          o[_t190]._updating || (o[_t190]._cascadeCount = 0);
      for (var _t191 = 4; _t191 >= 0; _t191--) {
        var _loop = function _loop() {
            var l = o[_i24];
            if (_i24 > 0 && l._updating) {
              s = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e118 = c[_t191];
              if (_e118.size > 0) {
                var _t192 = !1;
                if (
                  (ms(l, function () {
                    for (var _o45 of _e118)
                      if (_o45(n, r)) return void (_t192 = !0);
                  }),
                  _t192)
                )
                  return { v: _t192 };
              }
            }
          },
          _ret;
        for (var _i24 = 0; _i24 < o.length; _i24++) {
          _ret = _loop();
          if (_ret === 0) break;
          if (_ret) return _ret.v;
        }
      }
      return (
        s &&
          s.update(function () {
            gs(s, e, n, r);
          }),
        !1
      );
    }
    function _s(t, e) {
      if (((t._deferred = []), 0 !== e.length)) {
        var _n92 = t._updating;
        t._updating = !0;
        try {
          for (var _t193 = 0; _t193 < e.length; _t193++) e[_t193]();
        } finally {
          t._updating = _n92;
        }
      }
    }
    function ps(e, n) {
      var r = e._updates;
      var o = n || !1;
      for (; 0 !== r.length; ) {
        var _n93 = r.shift();
        if (_n93) {
          var _r68 = _n93[0],
            _s36 = _n93[1],
            _i25 = e._pendingEditorState;
          var _l13 = void 0;
          (void 0 !== _s36 &&
            ((_l13 = _s36.onUpdate),
            _s36.skipTransforms && (o = !0),
            _s36.discrete && (null === _i25 && t(191), (_i25._flushSync = !0)),
            _l13 && e._deferred.push(_l13),
            as(e, _s36.tag)),
            null == _i25 ? ys(e, _r68, _s36) : _r68());
        }
      }
      return o;
    }
    function ys(e, n, r) {
      var o = e._updateTags;
      var s,
        i = !1,
        l = !1;
      (void 0 !== r &&
        ((s = r.onUpdate),
        as(e, r.tag),
        (i = r.skipTransforms || !1),
        (l = r.discrete || !1)),
        s && e._deferred.push(s));
      var c = e._editorState;
      var a = e._pendingEditorState,
        u = !1;
      ((null === a || a._readOnly) &&
        ((a = e._pendingEditorState = Os(a || c)), (u = !0)),
        (a._flushSync = l));
      var f = jo,
        d = Jo,
        h = Yo,
        g = e._updating;
      ((jo = a), (Jo = !1), (e._updating = !0), (Yo = e));
      var _ = e._headless || null === e.getRootElement();
      Qs(null);
      try {
        u &&
          (_
            ? null !== c._selection && (a._selection = c._selection.clone())
            : (a._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  r = _l(ol(t));
                return no(n) || null == n ? Oo(n, r, t, e) : n.clone();
              })(e, (r && r.event) || null)));
        var _o46 = e._compositionKey;
        (n(),
          (i = ps(e, i)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              r = t._selection;
            if (no(r)) {
              var _t194 = r.anchor,
                _e119 = r.focus;
              var _o47;
              if (
                ("text" === _t194.type &&
                  ((_o47 = _t194.getNode()), _o47.selectionTransform(n, r)),
                "text" === _e119.type)
              ) {
                var _t195 = _e119.getNode();
                _o47 !== _t195 && _t195.selectionTransform(n, r);
              }
            }
          })(a, e),
          0 !== e._dirtyType &&
            (i
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    r = t._nodeMap;
                  for (var _t196 of n) {
                    var _e120 = r.get(_t196);
                    jr(_e120) &&
                      _e120.isAttached() &&
                      _e120.isSimpleText() &&
                      !_e120.isUnmergeable() &&
                      Tt(_e120);
                  }
                })(a, e)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    r = e._dirtyElements,
                    o = t._nodeMap,
                    s = Ci(),
                    i = new Map();
                  var l = n,
                    c = l.size,
                    a = r,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t197 of l) {
                        var _r69 = o.get(_t197);
                        (jr(_r69) &&
                          _r69.isAttached() &&
                          _r69.isSimpleText() &&
                          !_r69.isUnmergeable() &&
                          Tt(_r69),
                          void 0 !== _r69 && cs(_r69, s) && ls(e, _r69, i),
                          n.add(_t197));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        Xo++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t198 of a) {
                      var _n94 = _t198[0],
                        _l14 = _t198[1];
                      if ((r.set(_n94, _l14), !_l14)) continue;
                      var _c10 = o.get(_n94);
                      void 0 !== _c10 && cs(_c10, s) && ls(e, _c10, i);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      Xo++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = r));
                })(a, e),
            ps(e),
            (function (t, e, n, r) {
              var o = t._nodeMap,
                s = e._nodeMap,
                i = [];
              for (var _ref34 of r) {
                var _t199 = _ref34[0];
                {
                  var _e121 = s.get(_t199);
                  void 0 !== _e121 &&
                    (_e121.isAttached() ||
                      (Ss(_e121) && V(_e121, _t199, o, s, i, r),
                      o.has(_t199) || r["delete"](_t199),
                      i.push(_t199)));
                }
              }
              for (var _t200 of n) {
                var _e122 = s.get(_t200);
                void 0 === _e122 ||
                  _e122.isAttached() ||
                  (uc(_e122) &&
                    null !== _e122.__slots &&
                    V(_e122, _t200, o, s, i, n),
                  o.has(_t200) || n["delete"](_t200),
                  i.push(_t200));
              }
              for (var _t201 of i) s["delete"](_t201);
              var l = rs(),
                c = l._compositionKey;
              null === c || s.has(c) || (l._compositionKey = null);
            })(c, a, e._dirtyLeaves, e._dirtyElements)));
        _o46 !== e._compositionKey && (a._flushSync = !0);
        var _s37 = a._selection;
        if (no(_s37)) {
          e._slotsUsed && So(_s37);
          var _n95 = a._nodeMap,
            _r70 = _s37.anchor.key,
            _o48 = _s37.focus.key;
          (void 0 !== _n95.get(_r70) && void 0 !== _n95.get(_o48)) || t(19);
        } else oo(_s37) && 0 === _s37._nodes.size && (a._selection = null);
      } catch (t) {
        return (
          t instanceof Error && e._onError(t),
          (e._pendingEditorState = c),
          (e._dirtyType = 2),
          e._cloneNotNeeded.clear(),
          (e._dirtyLeaves = new Set()),
          e._dirtyElements.clear(),
          void ds(e)
        );
      } finally {
        ((jo = f), (Jo = d), (Yo = h), (e._updating = g), (Xo = 0));
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
          ? ((a._flushSync = !1), ds(e))
          : u &&
            ni(function () {
              ds(e);
            })
        : ((a._flushSync = !1),
          u && (o.clear(), (e._deferred = []), (e._pendingEditorState = null)));
    }
    function ms(t, e, n) {
      Yo === t && void 0 === n ? e() : ys(t, e, n);
    }
    function xs(t) {
      if (cl(t)) {
        var _e123 = null;
        for (var _n96 of t.getChildren())
          _e123 = _n96.isInline()
            ? (_e123 || _n96.replace(_n96.createParentElementNode())).append(
                _n96,
              )
            : null;
      }
    }
    var _Cs4 = (function (_r3) {
      function Cs(t) {
        var _this3;
        ((_this3 = _r3.call(this, t) || this),
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
      babelHelpers.inheritsLoose(Cs, _r3);
      var _proto10 = Cs.prototype;
      _proto10.$config = function $config() {
        return this.config(Symbol["for"]("ElementNode"), {
          $transform: xs,
          extends: _r105,
        });
      };
      _proto10.afterCloneFrom = function afterCloneFrom(e) {
        (_r3.prototype.afterCloneFrom.call(this, e),
          this.__key === e.__key &&
            ((this.__first = e.__first),
            (this.__last = e.__last),
            (this.__size = e.__size),
            (this.__slotHost = e.__slotHost),
            null !== this.__slotHost &&
              null !== this.__parent &&
              t(
                384,
                this.__key,
                String(this.__slotHost),
                String(this.__parent),
              ),
            (this.__slots = e.__slots)),
          (this.__indent = e.__indent),
          (this.__format = e.__format),
          (this.__style = e.__style),
          (this.__dir = e.__dir),
          (this.__textFormat = e.__textFormat),
          (this.__textStyle = e.__textStyle));
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
        return 0 === this.getChildrenSize() && 0 === yc(this).length;
      };
      _proto10.isDirty = function isDirty() {
        var t = rs()._dirtyElements;
        return null !== t && t.has(this.__key);
      };
      _proto10.isLastChild = function isLastChild() {
        var t = this.getLatest(),
          e = this.getParentOrThrow().getLastChild();
        return null !== e && e.is(t);
      };
      _proto10.getAllTextNodes = function getAllTextNodes() {
        var t = [];
        for (var _e124 of yc(this)) {
          var _n97 = mc(this, _e124);
          Ss(_n97) && t.push.apply(t, _n97.getAllTextNodes());
        }
        var e = this.getFirstChild();
        for (; null !== e; ) {
          if ((jr(e) && t.push(e), Ss(e))) {
            var _n98 = e.getAllTextNodes();
            t.push.apply(t, _n98);
          }
          e = e.getNextSibling();
        }
        return t;
      };
      _proto10.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; Ss(t); ) {
          var _e125 = t.getFirstChild();
          if (null === _e125) break;
          t = _e125;
        }
        return t;
      };
      _proto10.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; Ss(t); ) {
          var _e126 = t.getLastChild();
          if (null === _e126) break;
          t = _e126;
        }
        return t;
      };
      _proto10.getDescendantByIndex = function getDescendantByIndex(t) {
        var e = this.getChildren(),
          n = e.length;
        if (t >= n) {
          var _t202 = e[n - 1];
          return (Ss(_t202) && _t202.getLastDescendant()) || _t202 || null;
        }
        var r = e[t];
        return (Ss(r) && r.getFirstDescendant()) || r || null;
      };
      _proto10.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : Si(t);
      };
      _proto10.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var e = this.getFirstChild();
        return (null === e && t(45, this.__key), e);
      };
      _proto10.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : Si(t);
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
        var t = kc(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _r71 = 0; _r71 < n; _r71++) {
          var _o49 = e[_r71];
          ((t += _o49.getTextContent()),
            Ss(_o49) && _r71 !== n - 1 && !_o49.isInline() && (t += v));
        }
        return t;
      };
      _proto10.getTextContentSize = function getTextContentSize() {
        var t = (function (t) {
          var e = 0;
          for (var _n99 of yc(t)) {
            var _r72 = mc(t, _n99);
            null !== _r72 && (e += _r72.getTextContentSize());
          }
          return e;
        })(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _r73 = 0; _r73 < n; _r73++) {
          var _o50 = e[_r73];
          ((t += _o50.getTextContentSize()),
            Ss(_o50) && _r73 !== n - 1 && !_o50.isInline() && (t += 2));
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
          var _e127 = D[t];
          return 0 !== (this.getFormat() & _e127);
        }
        return !1;
      };
      _proto10.hasTextFormat = function hasTextFormat(t) {
        var e = A[t];
        return 0 !== (this.getTextFormat() & e);
      };
      _proto10.getFormatFlags = function getFormatFlags(t, e) {
        return gi(this.getLatest().__textFormat, t, e);
      };
      _proto10.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto10.select = function select(t, e) {
        ts();
        var n = bo();
        var r = t,
          o = e;
        var s = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t203 = this.getFirstChild();
            if (jr(_t203) || Ss(_t203)) return _t203.select(0, 0);
          } else if (
            !((void 0 !== t && t !== s) || (void 0 !== e && e !== s))
          ) {
            var _t204 = this.getLastChild();
            if (jr(_t204) || Ss(_t204)) return _t204.select();
          }
        (void 0 === r && (r = s), void 0 === o && (o = s));
        var i = this.__key;
        return no(n)
          ? (n.anchor.set(i, r, "element"),
            n.focus.set(i, o, "element"),
            (n.dirty = !0),
            n)
          : vo(i, r, i, o, "element", "element");
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
        hr(this) && t(324, this.__key, this.__type);
        var o = this.getChildrenSize(),
          s = this.getWritable();
        e + n <= o || t(226, String(e), String(n), String(o));
        for (var _t205 of r);
        var i = s.__key,
          l = [],
          c = [],
          a = this.getChildAtIndex(e + n);
        var u = null,
          f = o - n + r.length;
        if (0 !== e)
          if (e === o) u = this.getLastChild();
          else {
            var _t206 = this.getChildAtIndex(e);
            null !== _t206 && (u = _t206.getPreviousSibling());
          }
        if (n > 0) {
          var _e128 = null === u ? this.getFirstChild() : u.getNextSibling();
          for (var _r74 = 0; _r74 < n; _r74++) {
            null === _e128 && t(100);
            var _n100 = _e128.getNextSibling(),
              _r75 = _e128.__key;
            (pi(_e128.getWritable()), c.push(_r75), (_e128 = _n100));
          }
        }
        var d = u;
        for (var _e129 of r) {
          null !== d && _e129.is(d) && (u = d = d.getPreviousSibling());
          var _n101 = _e129.getWritable();
          (_n101.__parent === i && f--, pi(_n101));
          var _r76 = _e129.__key;
          if (null === d) ((s.__first = _r76), (_n101.__prev = null));
          else {
            var _t207 = d.getWritable();
            ((_t207.__next = _r76), (_n101.__prev = _t207.__key));
          }
          (_e129.__key === i && t(76),
            (_n101.__parent = i),
            l.push(_r76),
            (d = _e129));
        }
        if (e + n === o) {
          if (null !== d) {
            ((d.getWritable().__next = null), (s.__last = d.__key));
          }
        } else if (null !== a) {
          var _t208 = a.getWritable();
          if (null !== d) {
            var _e130 = d.getWritable();
            ((_t208.__prev = d.__key), (_e130.__next = a.__key));
          } else _t208.__prev = null;
        }
        if (((s.__size = f), c.length)) {
          var _t209 = bo();
          if (no(_t209)) {
            var _e131 = new Set(c),
              _n102 = new Set(l),
              _r77 = _t209.anchor,
              _o51 = _t209.focus;
            (Ts(_r77, _e131, _n102) && Do(_r77, _r77.getNode(), this, u, a),
              Ts(_o51, _e131, _n102) && Do(_o51, _o51.getNode(), this, u, a),
              0 !== f || this.canBeEmpty() || cl(this) || this.remove());
          }
        }
        return s;
      };
      _proto10.getDOMSlot = function getDOMSlot(t) {
        return new _B(t);
      };
      _proto10.exportDOM = function exportDOM(t) {
        var _r3$prototype$exportD = _r3.prototype.exportDOM.call(this, t),
          e = _r3$prototype$exportD.element;
        if (Dl(e)) {
          var _t210 = this.getIndent();
          _t210 > 0 &&
            ((e.style.paddingInlineStart = 40 * _t210 + "px"),
            e.setAttribute("data-lexical-indent", String(_t210)));
          var _n103 = this.getDirection();
          _n103 && (e.dir = _n103);
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
            _r3.prototype.exportJSON.call(this),
          ),
          e = this.getTextFormat(),
          n = this.getTextStyle();
        return (
          (0 === e && "" === n) ||
            cl(this) ||
            this.getChildren().some(jr) ||
            (0 !== e && (t.textFormat = e), "" !== n && (t.textStyle = n)),
          t
        );
      };
      _proto10.updateFromJSON = function updateFromJSON(t) {
        return _r3.prototype.updateFromJSON
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
        var n = Wl(this, t, e);
        var r = n.getFirstChild();
        for (
          var _t211 = this.getFirstChild();
          _t211;
          _t211 = _t211.getNextSibling()
        ) {
          var _o52 = e.getElementByKey(_t211.getKey());
          null !== _o52 &&
            (null == r
              ? (n.insertChild(_o52), (r = _o52))
              : r !== _o52 && n.replaceChild(_o52, r),
            (r = r.nextSibling));
        }
      };
      return Cs;
    })(_r105);
    function Ss(t) {
      return t instanceof _Cs4;
    }
    function Ts(t, e, n) {
      var r = t.getNode();
      for (; r; ) {
        var _t212 = r.__key;
        if (e.has(_t212) && !n.has(_t212)) return !0;
        r = r.getParent();
      }
      return !1;
    }
    var _Ns = (function (_r4) {
      function Ns(t) {
        var _this4;
        ((_this4 = _r4.call(this, t) || this),
          (_this4.__slotHost = null),
          (_this4.__slots = null));
        return _this4;
      }
      babelHelpers.inheritsLoose(Ns, _r4);
      var _proto11 = Ns.prototype;
      _proto11.afterCloneFrom = function afterCloneFrom(e) {
        (_r4.prototype.afterCloneFrom.call(this, e),
          this.__key === e.__key &&
            ((this.__slotHost = e.__slotHost),
            null !== this.__slotHost &&
              null !== this.__parent &&
              t(
                383,
                this.__key,
                String(this.__slotHost),
                String(this.__parent),
              ),
            (this.__slots = e.__slots)));
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
      return Ns;
    })(_r105);
    function vs(t) {
      return t instanceof _Ns;
    }
    var _ks = (function (_Cs) {
      function ks() {
        var _this5;
        ((_this5 = _Cs.call(this, "root") || this),
          (_this5.__cachedText = null));
        return _this5;
      }
      babelHelpers.inheritsLoose(ks, _Cs);
      ks.getType = function getType() {
        return "root";
      };
      ks.clone = function clone() {
        return new ks();
      };
      var _proto12 = ks.prototype;
      _proto12.getTopLevelElementOrThrow =
        function getTopLevelElementOrThrow() {
          t(51);
        };
      _proto12.getTextContent = function getTextContent() {
        var t = this.__cachedText;
        return null === t || (!Zo() && 0 !== rs()._dirtyType)
          ? _Cs.prototype.getTextContent.call(this)
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
        for (var _e132 of r) Ss(_e132) || vs(_e132) || t(282);
        return _Cs.prototype.splice.call(this, e, n, r);
      };
      ks.importJSON = function importJSON(t) {
        return bi().updateFromJSON(t);
      };
      _proto12.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return ks;
    })(_Cs4);
    function Es(t) {
      return t instanceof _ks;
    }
    function Os(t) {
      return new _As(J(t._nodeMap), null, t._slotsUsed);
    }
    function bs() {
      return new _As(new Map([["root", new _ks()]]), null, !1);
    }
    function Ms(e) {
      var n = e.exportJSON(),
        r = e.constructor;
      if ((n.type !== r.getType() && t(130, r.name), Ss(e))) {
        var _o53 = n.children;
        Array.isArray(_o53) || t(59, r.name);
        var _s38 = e.getChildren();
        for (var _t213 = 0; _t213 < _s38.length; _t213++) {
          var _e133 = Ms(_s38[_t213]);
          _o53.push(_e133);
        }
      }
      var o = yc(e);
      if (o.length > 0) {
        var _s39 = {};
        for (var _n104 of o) {
          var _o54 = mc(e, _n104);
          (null === _o54 && t(366, r.name, _n104), (_s39[_n104] = Ms(_o54)));
        }
        n.$slots = _s39;
      }
      return n;
    }
    var _As = (function () {
      function As(t, e, n) {
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
      var _proto13 = As.prototype;
      _proto13.isEmpty = function isEmpty() {
        return 1 === this._nodeMap.size && null === this._selection;
      };
      _proto13.read = function read(t, e) {
        return fs((e && e.editor) || null, this, t);
      };
      _proto13.clone = function clone(t) {
        var e = new As(
          this._nodeMap,
          void 0 === t ? this._selection : t,
          this._slotsUsed,
        );
        return ((e._readOnly = !0), e);
      };
      _proto13.toJSON = function toJSON() {
        return fs(null, this, function () {
          return { root: Ms(bi()) };
        });
      };
      return As;
    })();
    var _ws = (function (_Cs2) {
      function ws() {
        return _Cs2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(ws, _Cs2);
      ws.getType = function getType() {
        return "artificial";
      };
      var _proto14 = ws.prototype;
      _proto14.createDOM = function createDOM(t) {
        return Tl().createElement("div");
      };
      return ws;
    })(_Cs4);
    var _Ds = (function (_r5) {
      function Ds(t) {
        return _r5.call(this, t) || this;
      }
      babelHelpers.inheritsLoose(Ds, _r5);
      Ds.getType = function getType() {
        return "linebreak";
      };
      Ds.clone = function clone(t) {
        return new Ds(t.__key);
      };
      var _proto15 = Ds.prototype;
      _proto15.getTextContent = function getTextContent() {
        return "\n";
      };
      _proto15.createDOM = function createDOM() {
        return Tl().createElement("br");
      };
      _proto15.updateDOM = function updateDOM() {
        return !1;
      };
      _proto15.isInline = function isInline() {
        return !0;
      };
      Ds.importDOM = function importDOM() {
        return {
          br: function br(t) {
            return Rs(t) || Ls(t) ? null : { conversion: Is, priority: 0 };
          },
        };
      };
      Ds.importJSON = function importJSON(t) {
        return Ps().updateFromJSON(t);
      };
      return Ds;
    })(_r105);
    function Is(t) {
      return { node: Ps() };
    }
    function Ps() {
      return ul(new _Ds());
    }
    function Fs(t) {
      return t instanceof _Ds;
    }
    function Rs(t) {
      var e = t.parentElement;
      if (null !== e && Kl(e)) {
        var _n105 = e.firstChild;
        if (_n105 === t || (_n105.nextSibling === t && Ks(_n105))) {
          var _n106 = e.lastChild;
          if (_n106 === t || (_n106.previousSibling === t && Ks(_n106)))
            return !0;
        }
      }
      return !1;
    }
    function Ls(t) {
      var e = t.parentElement;
      if (null !== e && Kl(e)) {
        var _n107 = e.firstChild;
        if (_n107 === t || (_n107.nextSibling === t && Ks(_n107))) return !1;
        var _r78 = e.lastChild;
        if (_r78 === t || (_r78.previousSibling === t && Ks(_r78))) return !0;
      }
      return !1;
    }
    function Ks(t) {
      return fi(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    var _zs = (function (_Cs3) {
      function zs() {
        return _Cs3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(zs, _Cs3);
      zs.getType = function getType() {
        return "paragraph";
      };
      zs.clone = function clone(t) {
        return new zs(t.__key);
      };
      var _proto16 = zs.prototype;
      _proto16.createDOM = function createDOM(t) {
        var e = Tl().createElement("p"),
          n = ji(t.theme, "paragraph");
        if (void 0 !== n) {
          var _e$classList2;
          (_e$classList2 = e.classList).add.apply(_e$classList2, n);
        }
        return e;
      };
      _proto16.updateDOM = function updateDOM(t, e, n) {
        return !1;
      };
      zs.importDOM = function importDOM() {
        return {
          p: function p(t) {
            return { conversion: $s, priority: 0 };
          },
        };
      };
      _proto16.exportDOM = function exportDOM(t) {
        var _Cs3$prototype$export = _Cs3.prototype.exportDOM.call(this, t),
          e = _Cs3$prototype$export.element;
        if (Dl(e)) {
          this.isEmpty() && e.append(Tl().createElement("br"));
          var _t214 = this.getFormatType();
          _t214 && (e.style.textAlign = _t214);
        }
        return { element: e };
      };
      zs.importJSON = function importJSON(t) {
        return Bs().updateFromJSON(t);
      };
      _proto16.exportJSON = function exportJSON() {
        var t = _Cs3.prototype.exportJSON.call(this);
        if (void 0 === t.textFormat || void 0 === t.textStyle) {
          var _e134 = this.getChildren().find(jr);
          _e134
            ? ((t.textFormat = _e134.getFormat()),
              (t.textStyle = _e134.getStyle()))
            : ((t.textFormat = this.getTextFormat()),
              (t.textStyle = this.getTextStyle()));
        }
        return t;
      };
      _proto16.insertNewAfter = function insertNewAfter(t, e) {
        var n = Bs();
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
          (jr(t[0]) && "" === t[0].getTextContent().trim())
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return zs;
    })(_Cs4);
    function $s(t) {
      var e = Bs();
      if ((Xl(e, t), Vl(t, e), "" === e.getFormatType())) {
        var _n108 = t.getAttribute("align");
        _n108 && _n108 && _n108 in D && e.setFormat(_n108);
      }
      return (ql(e, t), { node: e });
    }
    function Bs() {
      return ul(new _zs());
    }
    function Ws(t) {
      return t instanceof _zs;
    }
    function Us(t) {
      console.warn(t);
    }
    var Hs = 0;
    function js(t, e, n, r, o) {
      var s = t._keyToDOMMap;
      (s.clear(),
        (t._editorState = bs()),
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
          ((n.textContent = ""), s.set("root", n), Ni(n, t, "root")));
    }
    function Ys(t) {
      var e = new Set(),
        n = new Set();
      for (var _ref36 of sc(t)) {
        var _r79 = _ref36.klass;
        var _o55 = _ref36.ownNodeConfig;
        {
          var _t215 = _r79.transform;
          if (!n.has(_t215)) {
            n.add(_t215);
            var _o56 = _r79.transform();
            _o56 && e.add(_o56);
          }
          if (_o55) {
            var _t216 = _o55.$transform;
            _t216 && e.add(_t216);
          }
        }
      }
      return e;
    }
    var Js = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, r) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = ei(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, r, o) {
        return Ss(t) && t.extractWithChild(e, n, r);
      },
      $getDOMSlot: function $getDOMSlot(t, e, n) {
        return t.getDOMSlot(e);
      },
      $getSlotTargetElement: function $getSlotTargetElement(t, e, n, r) {
        return null;
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return Ss(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, r) {
        return t.updateDOM(e, n, r._config);
      },
    };
    function Gs(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function Vs(t, e, n) {
      return (t.set(e, n), Gs.bind(null, t, e));
    }
    var _qs = (function () {
      function qs(t, e, n, r, o, s, i, l, c) {
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
          (this._key = Pi()),
          (this._onError = o),
          (this._onWarn = s),
          (this._htmlConversions = i),
          (this._editable = l),
          (this._headless = null !== e && e._headless),
          (this._window = null),
          (this._blockCursorElement = null),
          (this._slotsUsed = !1));
      }
      var _proto17 = qs.prototype;
      _proto17.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto17.registerUpdateListener = function registerUpdateListener(t) {
        return Vs(this._listeners.update, t);
      };
      _proto17.registerEditableListener = function registerEditableListener(t) {
        return Vs(this._listeners.editable, t);
      };
      _proto17.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return Vs(this._listeners.decorator, t);
      };
      _proto17.registerTextContentListener =
        function registerTextContentListener(t) {
          return Vs(this._listeners.textcontent, t);
        };
      _proto17.registerRootListener = function registerRootListener(t) {
        var _this14 = this;
        var e = this._listeners.root;
        return Ma(Vs(e, t, t(this._rootElement, null) || void 0), function () {
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
          r = Jl(n).get(e.getType());
        if (!r) return;
        var o = new Map();
        for (var _t217 of r.keys()) o.set(_t217, "created");
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
          var _t218 = this.registerNodeTransformToKlass(o, e);
          r.push(_t218);
        }
        return (
          (function (t, e) {
            var n = Jl(t.getEditorState()),
              r = [];
            for (var _t219 of e) {
              var _e135 = n.get(_t219);
              _e135 && r.push(_e135);
            }
            if (0 === r.length) return;
            t.update(
              function () {
                for (var _t220 of r)
                  for (var _e136 of _t220.keys()) {
                    var _t221 = Si(_e136);
                    _t221 && _t221.markDirty();
                  }
              },
              null === t._pendingEditorState ? { tag: yr } : void 0,
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
        return qi(this, t, e);
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
          var _n109 = ji(this._config.theme, "root"),
            _r80 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            js(this, e, t, _r80, { preserveUpdateQueue: !0 }),
            null !== e &&
              (this._config.disableEvents || ur(e),
              null != _n109 &&
                (_e$classList3 = e.classList).remove.apply(
                  _e$classList3,
                  _n109,
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e137 = rl(t),
              _r81 = t.style;
            ((_r81.userSelect = "text"),
              (_r81.whiteSpace = "pre-wrap"),
              (_r81.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e137),
              (this._dirtyType = 2),
              st(this),
              this._updateTags.add(yr),
              ds(this),
              this._config.disableEvents ||
                (function (t, e) {
                  var n = t.ownerDocument;
                  Mn.set(t, n);
                  var r = An.get(n);
                  (void 0 === r &&
                    ((r = { editors: new Set(), hasShadowEditor: void 0 }),
                    An.set(n, r)),
                    r.editors.add(e),
                    (r.hasShadowEditor = void 0),
                    (t.__lexicalEditor = e));
                  var o = or(t);
                  o.push(wn.register(n));
                  var _loop2 = function _loop2() {
                    var _Tn$_n = Tn[_n110],
                      r = _Tn$_n[0],
                      s = _Tn$_n[1],
                      i =
                        "function" == typeof s
                          ? function (t) {
                              cr(t) ||
                                (lr(t),
                                (e.isEditable() || "click" === r) && s(t, e));
                            }
                          : function (t) {
                              if (cr(t)) return;
                              lr(t);
                              var n = e.isEditable();
                              switch (r) {
                                case "cut":
                                  return n && qi(e, un, t);
                                case "copy":
                                  return qi(e, an, t);
                                case "paste":
                                  return n && qi(e, Pe, t);
                                case "dragstart":
                                  return n && qi(e, sn, t);
                                case "dragover":
                                  return n && qi(e, ln, t);
                                case "dragend":
                                  return n && qi(e, cn, t);
                                case "focus":
                                  return n && qi(e, pn, t);
                                case "blur":
                                  return n && qi(e, yn, t);
                                case "drop":
                                  return n && qi(e, rn, t);
                              }
                            };
                    o.push(Cn(t, r, i));
                  };
                  for (var _n110 = 0; _n110 < Tn.length; _n110++) {
                    _loop2();
                  }
                })(t, this),
              null != _n109 &&
                (_t$classList = t.classList).add.apply(_t$classList, _n109));
          } else ((this._window = null), this._updateTags.add(yr), ds(this));
          hs("root", this, !1, t, e);
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
        var r = e;
        (r._readOnly &&
          ((r = Os(e)),
          (r._selection = e._selection ? e._selection.clone() : null)),
          ot(this));
        var o = this._pendingEditorState,
          s = void 0 !== n ? n.tag : null;
        (null === o ||
          o.isEmpty() ||
          (null != s && this._updateTags.add(s), ds(this)),
          (this._pendingEditorState = r),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          (this._slotsUsed = this._slotsUsed || e._slotsUsed),
          ms(
            this,
            function () {
              if ((s && _this15._updateTags.add(s), e._parsed))
                for (var _ref38 of r._nodeMap.entries()) {
                  var _t222 = _ref38[0];
                  var _e138 = _ref38[1];
                  Ss(_e138)
                    ? _this15._dirtyElements.set(_t222, !0)
                    : _this15._dirtyLeaves.add(_t222);
                }
            },
            { discrete: !this._updating || void 0 },
          ));
      };
      _proto17.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var r = bs(),
            o = jo,
            s = Jo,
            i = Yo,
            l = e._dirtyElements,
            c = e._dirtyLeaves,
            a = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Set()),
            (e._dirtyType = 0),
            (jo = r),
            (Jo = !1),
            (Yo = e),
            Qs(null));
          try {
            var _o57 = e._nodes;
            (us(t.root, _o57), n && n(), (r._readOnly = !0), (r._parsed = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = c),
              (e._cloneNotNeeded = a),
              (e._dirtyType = u),
              (jo = o),
              (Jo = s),
              (Yo = i));
          }
          return r;
        })("string" == typeof t ? JSON.parse(t) : t, this, e);
      };
      _proto17.read = function read() {
        for (
          var _len6 = arguments.length, t = new Array(_len6), _key6 = 0;
          _key6 < _len6;
          _key6++
        ) {
          t[_key6] = arguments[_key6];
        }
        var _ref39 = 1 === t.length ? ["force-commit", t[0]] : t,
          e = _ref39[0],
          n = _ref39[1];
        "force-commit" === e && ds(this);
        return (
          "pending" === e
            ? this._pendingEditorState || this._editorState
            : this.getEditorState()
        ).read(n, { editor: this });
      };
      _proto17.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : ys(t, e, n);
        })(this, t, e);
      };
      _proto17.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          ms(this, function () {
            var r = bo(),
              o = bi();
            (null !== r
              ? r.dirty || Mi(r.clone())
              : 0 !== o.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? o.selectStart()
                  : o.selectEnd()),
              tl("focus"),
              el(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto17.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = _l(this._window);
        null !== e && e.removeAllRanges();
      };
      _proto17.isEditable = function isEditable() {
        return this._editable;
      };
      _proto17.setEditable = function setEditable(t) {
        this._editable !== t &&
          ((this._editable = t),
          hs("editable", this, !0, t),
          this._slotsUsed &&
            this.update(function () {
              return os();
            }));
      };
      _proto17.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON() };
      };
      return qs;
    })();
    _qs.version = H;
    var Xs = null;
    function Qs(t) {
      Xs = t;
    }
    var Zs = 1;
    function ti(e, n) {
      var r = ei(e, n);
      return (void 0 === r && t(30, n), r);
    }
    function ei(t, e) {
      return t._nodes.get(e);
    }
    var ni =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function ri(t, e) {
      var n =
        void 0 !== e
          ? e
          : (function () {
              var e = t.getRootNode();
              return di(e) || yl(e) ? Al(e) : null;
            })();
      if (!Dl(n)) return !1;
      if (n.hasAttribute("data-lexical-slot")) return !1;
      var r = ki(n),
        o = n.nodeName;
      return (
        pr(r) &&
        ("INPUT" === o ||
          "TEXTAREA" === o ||
          ("true" === n.contentEditable && null == ci(n)))
      );
    }
    var oi = ri;
    function si(t, e, n) {
      var r = t.getRootElement();
      if (!r) return !1;
      try {
        if (!e || !r.contains(e) || !r.contains(n)) return !1;
      } catch (t) {
        return !1;
      }
      return (
        li(e) === t &&
        t.read("latest", function () {
          return !ri(e);
        })
      );
    }
    function ii(t) {
      return t instanceof _qs;
    }
    function li(t) {
      var e = t;
      for (; null != e; ) {
        var _t223 = ci(e);
        if (ii(_t223)) return _t223;
        e = Qi(e);
      }
      return null;
    }
    function ci(t) {
      return t ? t.__lexicalEditor : null;
    }
    function ai(t) {
      return Vr(t) || t.isToken();
    }
    function ui(t) {
      return ai(t) || t.isSegmented();
    }
    function fi(t) {
      return Il(t) && 3 === t.nodeType;
    }
    function di(t) {
      return Il(t) && 9 === t.nodeType;
    }
    function hi(t) {
      var e = t;
      for (; null != e; ) {
        if (fi(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function gi(t, e, n) {
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
    function _i(t, e) {
      var n = (function () {
        var t = Xs;
        return ((Xs = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (ts(), es());
      var r = rs(),
        o = ns(),
        s = "" + Zs++;
      (o._nodeMap.set(s, t),
        Ss(t) ? r._dirtyElements.set(s, !0) : r._dirtyLeaves.add(s),
        r._cloneNotNeeded.add(s),
        0 === r._dirtyType && (r._dirtyType = 1),
        (t.__key = s));
    }
    function pi(e) {
      null !== dc(e) && t(380, e.__key, String(dc(e)));
      var n = e.getParent();
      if (null !== n) {
        var _t224 = e.getWritable(),
          _r82 = n.getWritable(),
          _o58 = e.getPreviousSibling(),
          _s40 = e.getNextSibling(),
          _i26 = null !== _s40 ? _s40.__key : null,
          _l15 = null !== _o58 ? _o58.__key : null,
          _c11 = null !== _o58 ? _o58.getWritable() : null,
          _a11 = null !== _s40 ? _s40.getWritable() : null;
        (null === _o58 && (_r82.__first = _i26),
          null === _s40 && (_r82.__last = _l15),
          null !== _c11 && (_c11.__next = _i26),
          null !== _a11 && (_a11.__prev = _l15),
          (_t224.__prev = null),
          (_t224.__next = null),
          (_t224.__parent = null),
          _r82.__size--);
      }
    }
    var yi = pi;
    function mi(e) {
      (es(), hr(e) && t(323, e.__key, e.__type));
      var n = e.getLatest(),
        r = null !== n.__parent ? n.__parent : fc(n) ? n.__slotHost : null,
        o = ns(),
        s = rs(),
        i = o._nodeMap,
        l = s._dirtyElements;
      null !== r &&
        (function (t, e, n) {
          var r = t;
          for (; null !== r; ) {
            if (n.has(r)) return;
            var _t225 = e.get(r);
            if (void 0 === _t225) break;
            (n.set(r, !1),
              (r =
                null !== _t225.__parent
                  ? _t225.__parent
                  : fc(_t225)
                    ? _t225.__slotHost
                    : null));
          }
        })(r, i, l);
      var c = n.__key;
      (0 === s._dirtyType && (s._dirtyType = 1),
        Ss(e) ? l.set(c, !0) : s._dirtyLeaves.add(c));
    }
    function xi(t) {
      ts();
      var e = rs(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t226 = Si(n);
          null !== _t226 && _t226.getWritable();
        }
        if (null !== t) {
          var _e139 = Si(t);
          null !== _e139 && _e139.getWritable();
        }
      }
    }
    function Ci() {
      if (Zo()) return null;
      return rs()._compositionKey;
    }
    function Si(t, e) {
      var n = (e || ns())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function Ti(t, e) {
      var n = vi(t, rs());
      return void 0 !== n ? Si(n, e) : null;
    }
    function Ni(t, e, n) {
      t["__lexicalKey_" + e._key] = n;
    }
    function vi(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function ki(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t227 = Ti(n, e);
        if (null !== _t227) return _t227;
        n = Qi(n);
      }
      return null;
    }
    function Ei(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function Oi(t) {
      return t.read(function () {
        return bi().getTextContent();
      });
    }
    function bi() {
      return ns()._nodeMap.get("root");
    }
    function Mi(t) {
      ts();
      var e = ns();
      (null !== t &&
        ((t.dirty = !0),
        t.setCachedNodes(null),
        no(t) && rs()._slotsUsed && So(t)),
        (e._selection = t));
    }
    function Ai() {
      ts();
      ot(rs());
    }
    function wi(t) {
      var e = (function (t, e) {
        var n = t;
        for (; null != n; ) {
          var _t228 = vi(n, e);
          if (void 0 !== _t228) return _t228;
          n = Qi(n);
        }
        return null;
      })(t, rs());
      return null === e ? null : Si(e);
    }
    function Di(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function Ii(t) {
      var e = [];
      for (var _n111 = t; null !== _n111; _n111 = _n111._parentEditor)
        e.push(_n111);
      return e;
    }
    function Pi() {
      return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substring(0, 5);
    }
    function Fi(t) {
      return fi(t) ? t.nodeValue : null;
    }
    function Ri(t, e, n) {
      var r = _l(ol(e));
      if (null === r) return;
      var o = kl(r, e._rootElement),
        s = o.anchorNode;
      var i = o.anchorOffset,
        l = o.focusOffset;
      if (null !== s) {
        var _e140 = Fi(s);
        var _r83 = ki(s);
        if (null !== _e140 && jr(_r83)) {
          if ((_e140 === N || _e140 === k) && n) {
            var _t229 = n.length;
            ((_e140 = n), (i = _t229), (l = _t229));
          }
          null !== _e140 && Li(_r83, _e140, i, l, t);
        }
      }
    }
    function Li(t, e, n, r, o) {
      var s = t;
      if (s.isAttached() && (o || !s.isDirty())) {
        var _i27 = s.isComposing();
        if (s.isToken() && _i27) return;
        var _c12 = e;
        if (
          (_i27 || o) &&
          (e.endsWith(N) && (_c12 = e.slice(0, -N.length)), o)
        ) {
          var _t230 = k;
          var _e141;
          for (; -1 !== (_e141 = _c12.indexOf(_t230)); )
            ((_c12 = _c12.slice(0, _e141) + _c12.slice(_e141 + _t230.length)),
              null !== n &&
                n > _e141 &&
                (n = Math.max(_e141, n - _t230.length)),
              null !== r &&
                r > _e141 &&
                (r = Math.max(_e141, r - _t230.length)));
        }
        var _u11 = s.getTextContent();
        if (o || _c12 !== _u11) {
          var _e142 = bo();
          if ("" === _c12) {
            if ((xi(null), a || l || d)) s.remove();
            else {
              var _t231 = rs();
              (Ki(s, "", _e142),
                setTimeout(function () {
                  _t231.update(function () {
                    s.isAttached() && "" === s.getTextContent() && s.remove();
                  });
                }, 20));
            }
            return;
          }
          var _o59 = s.getParent(),
            _u12 = Mo(),
            _f1 = s.getTextContentSize(),
            _h8 = Ci(),
            _g7 = s.getKey();
          if (
            (s.isToken() && !_i27) ||
            (null !== _h8 && _g7 === _h8 && !_i27) ||
            (no(_u12) &&
              ((null !== _o59 &&
                !_o59.canInsertTextBefore() &&
                0 === _u12.anchor.offset) ||
                (_u12.anchor.key === t.__key &&
                  0 === _u12.anchor.offset &&
                  !s.canInsertTextBefore() &&
                  !_i27) ||
                (_u12.focus.key === t.__key &&
                  _u12.focus.offset === _f1 &&
                  !s.canInsertTextAfter() &&
                  !_i27)))
          )
            return void s.markDirty();
          if (!no(_e142) || null === n || null === r)
            return void Ki(s, _c12, _e142);
          if ((_e142.setTextNodeRange(s, n, s, r), s.isSegmented())) {
            var _t232 = Hr(s.getTextContent());
            (s.replace(_t232), (s = _t232));
          }
          Ki(s, _c12, _e142);
        }
      }
    }
    function Ki(t, e, n) {
      if ((t.setTextContent(e), no(n))) {
        var _e143 = t.getKey();
        var _r84 = !1;
        for (var _o60 of ["anchor", "focus"]) {
          var _s41 = n[_o60];
          "text" === _s41.type &&
            _s41.key === _e143 &&
            ((_s41.offset = Gc(t, _s41.offset, "clamp")), (_r84 = !0));
        }
        _r84 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
      }
    }
    function zi(t, e, n) {
      var r = e[n] || !1;
      return "any" === r || r === t[n];
    }
    function $i(t, e) {
      return (
        zi(t, e, "altKey") &&
        zi(t, e, "ctrlKey") &&
        zi(t, e, "shiftKey") &&
        zi(t, e, "metaKey")
      );
    }
    function Bi(t, e, n) {
      if (!$i(t, n)) return !1;
      if (t.key.toLowerCase() === e.toLowerCase()) return !0;
      if (e.length > 1) return !1;
      if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
      if (t.code.startsWith("Digit") && /^\d$/.test(e))
        return t.code === "Digit" + e;
      var r = "Key" + e.toUpperCase();
      return t.code === r;
    }
    var Wi = { ctrlKey: !o, metaKey: o },
      Ui = { altKey: o, ctrlKey: !o };
    function Hi(t) {
      return "Backspace" === t.key;
    }
    function ji(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        r = n[e];
      if (void 0 !== r) return r;
      var o = t[e];
      if ("string" == typeof o) {
        var _t233 = ba(o);
        return ((n[e] = _t233), _t233);
      }
      return o;
    }
    function Yi(e, n, r, o, s) {
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
    function Ji(t, e, n) {
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
    function Gi(t, e) {
      var n = t.offset;
      if ("element" === t.type) {
        return Ji(t.getNode(), e, n);
      }
      {
        var _r85 = t.getNode();
        if ((e && 0 === n) || (!e && n === _r85.getTextContentSize())) {
          var _t234 = e ? _r85.getPreviousSibling() : _r85.getNextSibling();
          return null === _t234
            ? Ji(
                _r85.getParentOrThrow(),
                e,
                _r85.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t234;
        }
      }
      return null;
    }
    function Vi(t) {
      var e = ol(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function qi(t, e, n) {
      return gs(t, e, n, t);
    }
    function Xi(e, n) {
      var r = e._keyToDOMMap.get(n);
      return (void 0 === r && t(75, n), r);
    }
    function Qi(t) {
      var e = t.assignedSlot || t.parentElement;
      if (null !== e) return e;
      var n = t.parentNode;
      return yl(n) ? n.host : null;
    }
    function Zi(t) {
      return di(t) ? t : Dl(t) ? t.ownerDocument : null;
    }
    function tl(t) {
      ts();
      rs()._updateTags.add(t);
    }
    function el(t) {
      ts();
      rs()._deferred.push(t);
    }
    function nl(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function rl(t) {
      var e = Zi(t);
      return e ? e.defaultView : null;
    }
    function ol(e) {
      var n = e._window;
      return (null === n && t(78), n);
    }
    function sl(t) {
      return (Ss(t) && t.isInline()) || (vs(t) && t.isInline());
    }
    function il(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== dc(e) && Ss(e)) return e;
        var _t235 = e.getParentOrThrow();
        if (cl(_t235)) return _t235;
        e = _t235;
      }
      return e;
    }
    function ll(t) {
      return Ss(t) && t.isShadowRoot();
    }
    function cl(t) {
      return Es(t) || ll(t);
    }
    function al(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t);
      return (
        _i(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function ul(e) {
      var n = rs(),
        r = e.getType(),
        o = ei(n, r);
      void 0 === o && t(200, e.constructor.name, r);
      var s = o.replace,
        i = o.replaceWithKlass;
      if (null !== s) {
        var _n112 = s(e),
          _o61 = _n112.constructor;
        return (
          null !== i
            ? _n112 instanceof i ||
              t(
                201,
                i.name,
                i.getType(),
                _o61.name,
                _o61.getType(),
                e.constructor.name,
                r,
              )
            : (_n112 instanceof e.constructor && _o61 !== e.constructor) ||
              t(202, _o61.name, _o61.getType(), e.constructor.name, r),
          _n112.__key === e.__key &&
            t(203, e.constructor.name, r, _o61.name, _o61.getType()),
          _n112
        );
      }
      return e;
    }
    function fl(e, n) {
      !Es(e.getParent()) || Ss(n) || vs(n) || t(99);
    }
    function dl(e) {
      var n = Si(e);
      return (null === n && t(63, e), n);
    }
    function hl(t) {
      if (!t || t.isInline()) return !1;
      if (vs(t)) return !0;
      if (Ss(t)) {
        if (t.isShadowRoot()) {
          var _e144 = t.getParent();
          return !(Ss(_e144) && _e144.isShadowRoot());
        }
        return !t.canBeEmpty();
      }
      return !1;
    }
    function gl(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var r = t.parentElement;
      null !== r && r.removeChild(t);
    }
    function _l(t) {
      return n ? (t || window).getSelection() : null;
    }
    function pl(t) {
      var e = rl(t);
      return e ? e.getSelection() : null;
    }
    function yl(t) {
      return Pl(t) && "host" in t;
    }
    var ml = [];
    function xl(t) {
      var e = t.getRootNode();
      if (e === t || !yl(e)) return ml;
      var n = [e];
      var r = e.host;
      for (;;) {
        var _t236 = r.getRootNode();
        if (_t236 === r || !yl(_t236)) break;
        (n.push(_t236), (r = _t236.host));
      }
      return n;
    }
    function* Cl(t) {
      var e = [t];
      var n;
      for (; (n = e.pop()); ) {
        yield* n.querySelectorAll('[data-lexical-editor="true"]');
        var _t237 = (di(n) ? n : n.ownerDocument).createTreeWalker(
          n,
          NodeFilter.SHOW_ELEMENT,
        );
        var _r86 = void 0;
        for (; (_r86 = _t237.nextNode()); )
          _r86.shadowRoot && e.push(_r86.shadowRoot);
      }
    }
    function Sl(t) {
      return null !== t ? t.ownerDocument : document;
    }
    function Tl() {
      return Sl($l()._rootElement);
    }
    function Nl(t, e) {
      if (null === e || "function" != typeof t.getComposedRanges) return null;
      var n = xl(e);
      if (0 === n.length) return null;
      var r = t.getComposedRanges;
      try {
        var _e145 = r.call(t, { shadowRoots: n })[0];
        if (void 0 !== _e145) return _e145;
      } catch (t) {}
      try {
        var _e146 = r.apply(t, n)[0];
        if (void 0 !== _e146) return _e146;
      } catch (t) {}
      return null;
    }
    function vl(t, e) {
      var n = Nl(t, e);
      if (null !== n) {
        var _t238 = El(n);
        if (null !== _t238) return _t238;
      }
      return t.rangeCount > 0 ? t.getRangeAt(0) : null;
    }
    function kl(t, e) {
      var n = Nl(t, e);
      return null === n ? t : Ol(n, bl(t));
    }
    function El(t) {
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
    function Ol(t, e) {
      var n = t.startContainer,
        r = t.startOffset,
        o = t.endContainer,
        s = t.endOffset;
      return "backward" === e
        ? {
            anchorNode: o,
            anchorOffset: s,
            direction: e,
            focusNode: n,
            focusOffset: r,
          }
        : {
            anchorNode: n,
            anchorOffset: r,
            direction: e,
            focusNode: o,
            focusOffset: s,
          };
    }
    function bl(t) {
      return t.direction;
    }
    function Ml(t) {
      var e = t.getRootNode();
      return di(e) || yl(e) ? e.activeElement : null;
    }
    function Al(t) {
      var e = t.activeElement;
      for (; null !== e && null !== e.shadowRoot; ) {
        var _t239 = e.shadowRoot.activeElement;
        if (null === _t239) break;
        e = _t239;
      }
      return e;
    }
    function wl(t) {
      var e = t.target;
      if (
        null !== e &&
        Dl(e) &&
        null !== e.shadowRoot &&
        "function" == typeof t.composedPath
      ) {
        var _e147 = t.composedPath();
        if (_e147.length > 0) return _e147[0];
      }
      return e;
    }
    function Dl(t) {
      return Il(t) && 1 === t.nodeType;
    }
    function Il(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function Pl(t) {
      return Il(t) && 11 === t.nodeType;
    }
    var Fl =
      /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
    function Rl(t) {
      return (
        !(!Dl(t) || !t.style.display.startsWith("inline")) ||
        Fl.test(t.nodeName)
      );
    }
    var Ll =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function Kl(t) {
      return (
        (!Dl(t) || !t.style.display.startsWith("inline")) && Ll.test(t.nodeName)
      );
    }
    function zl(t) {
      if (vs(t) && !t.isInline()) return !0;
      if (!Ss(t) || cl(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || Fs(e) || jr(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function $l() {
      return rs();
    }
    function Bl(t) {
      if (t === void 0) {
        t = $l();
      }
      return t._config.dom || Js;
    }
    function Wl(e, n, r) {
      if (r === void 0) {
        r = $l();
      }
      var o = Bl(r).$getDOMSlot(e, n, r);
      return (Ss(e) && (Ul(o) || t(344, e.getKey(), e.getType())), o);
    }
    function Ul(t) {
      return t instanceof _B;
    }
    function Hl(t, e, n) {
      if (n === void 0) {
        n = $l();
      }
      return hi(Wl(t, e, n).element);
    }
    var jl = new WeakMap(),
      Yl = new Map();
    function Jl(e) {
      if (!e._readOnly && e.isEmpty()) return Yl;
      e._readOnly || t(192);
      var n = jl.get(e);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref41 of t._nodeMap) {
              var _n113 = _ref41[0];
              var _r87 = _ref41[1];
              {
                var _t240 = _r87.__type;
                var _o62 = e.get(_t240);
                (_o62 || ((_o62 = new Map()), e.set(_t240, _o62)),
                  _o62.set(_n113, _r87));
              }
            }
            return e;
          })(e)),
          jl.set(e, n)),
        n
      );
    }
    function Gl(t) {
      var e = t.constructor.clone(t);
      return (e.afterCloneFrom(t), e);
    }
    function Vl(t, e) {
      var n = t.getAttribute("data-lexical-indent");
      if (null !== n) {
        var _t241 = parseInt(n, 10);
        if (Number.isFinite(_t241) && _t241 >= 0)
          return void e.setIndent(_t241);
      }
      var r = parseInt(t.style.paddingInlineStart, 10) || 0,
        o = Math.round(r / 40);
      e.setIndent(o);
    }
    function ql(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function Xl(t, e) {
      var n = e.style.textAlign;
      return n && n in D ? t.setFormat(n) : t;
    }
    function Ql(t, e) {
      ((t.__lexicalUnmanaged = !0),
        e &&
          void 0 !== e.captureSelection &&
          (t.__lexicalCapturedSelection = e.captureSelection));
    }
    function Zl(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function tc(t, e) {
      if (e === void 0) {
        e = $l();
      }
      var n = e.isEditable();
      ((t.contentEditable = n ? "true" : "false"),
        n ? (t.__lexicalEditor = e) : delete t.__lexicalEditor);
    }
    function ec(t, e) {
      var n = t;
      for (; null != n; ) {
        if (!0 === n.__lexicalCapturedSelection) return !0;
        if (Dl(n) && n.hasAttribute("data-lexical-slot")) return !1;
        if (void 0 !== vi(n, e)) return !1;
        n = Qi(n);
      }
      return !1;
    }
    function nc(t, e) {
      return (
        (function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        })(t, e) && t[e] !== _r105[e]
      );
    }
    var rc = new WeakMap();
    function oc(e) {
      var n = rc.get(e);
      if (n) return n;
      var r =
          null != e.prototype && R in e.prototype ? e.prototype[R]() : void 0,
        o = (function (e) {
          if (!(e === _r105 || e.prototype instanceof _r105)) {
            var _n114 = "<unknown>",
              _r88 = "<unknown>";
            try {
              _n114 = e.getType();
            } catch (t) {}
            try {
              _qs.version && (_r88 = JSON.parse(_qs.version));
            } catch (t) {}
            t(290, e.name, _n114, _r88);
          }
          return e === _Ns || e === _Cs4 || e === _r105;
        })(e),
        s = !o && nc(e, "getType") ? e.getType() : void 0;
      var i,
        l = s;
      if (r)
        if (s) i = r[s];
        else {
          for (var _ref43 of Object.entries(r)) {
            var _t242 = _ref43[0];
            var _e148 = _ref43[1];
            ((l = _t242), (i = _e148));
          }
          if (!i)
            for (var _t243 of Object.getOwnPropertySymbols(r)) {
              var _e149 = r[_t243];
              if (_e149) {
                i = _e149;
                break;
              }
            }
        }
      if (
        !o &&
        l &&
        (nc(e, "getType") ||
          (e.getType = function () {
            return l;
          }),
        nc(e, "clone") ||
          (e.clone = function (t) {
            return (Qs(t), new e());
          }),
        nc(e, "importJSON") ||
          (e.importJSON =
            (i && i.$importJSON) ||
            function (t) {
              return new e().updateFromJSON(t);
            }),
        !nc(e, "importDOM") && i)
      ) {
        var _i28 = i,
          _t244 = _i28.importDOM;
        _t244 &&
          (e.importDOM = function () {
            return _t244;
          });
      }
      var c = { klass: e, ownNodeConfig: i, ownNodeType: l };
      return (rc.set(e, c), c);
    }
    function* sc(t) {
      for (var _e150 = t; _e150 && (_e150 === _r105 || pr(_e150.prototype)); ) {
        var _t245 = oc(_e150);
        (yield _t245,
          (_e150 =
            (_t245.ownNodeConfig && _t245.ownNodeConfig["extends"]) ||
            cc(_e150)));
      }
    }
    var ic = function ic(t, e) {
      var n = t;
      for (; null != n && !Es(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function lc(e, n) {
      var r = [];
      var o = e.__first;
      for (; null !== o; ) {
        var _e151 = null === n ? Si(o) : n.get(o);
        (null == _e151 && t(174), r.push(o), (o = _e151.__next));
      }
      return r;
    }
    function cc(t) {
      var e = Object.getPrototypeOf(t);
      if ("function" == typeof e && e !== Function.prototype) return e;
      var n = t.prototype && Object.getPrototypeOf(t.prototype);
      return n ? n.constructor : null;
    }
    var ac = new Map();
    function uc(t) {
      return Ss(t) || vs(t);
    }
    function fc(t) {
      return Ss(t) || vs(t);
    }
    function dc(t) {
      var e = t.getLatest();
      return fc(e) ? e.__slotHost : null;
    }
    function hc(e) {
      var n = dc(e);
      if (null === n) return null;
      var r = Si(n);
      return (Ss(r) || vs(r) || t(370), r);
    }
    function gc(t) {
      var e = hc(t);
      if (null === e) return null;
      var n = t.getLatest().__key;
      for (var _ref45 of pc(e)) {
        var _t246 = _ref45[0];
        var _r89 = _ref45[1];
        if (_r89 === n) return _t246;
      }
      return null;
    }
    function _c(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== dc(e)) return e;
        e = e.getParent();
      }
      return null;
    }
    function pc(t) {
      var e = t.getLatest();
      return uc(e) && null !== e.__slots ? e.__slots : ac;
    }
    function yc(t) {
      return Array.from(pc(t).keys());
    }
    function mc(t, e) {
      var n = pc(t).get(e);
      return void 0 === n ? null : Si(n);
    }
    var xc = ["__proto__", "constructor", "prototype"],
      Cc = Symbol("slotMapOwner");
    function Sc(t) {
      var e = t.__slots;
      return (
        (null !== e && e[Cc] === t) ||
          ((e = new Map(e)), (e[Cc] = t), (t.__slots = e)),
        e
      );
    }
    var Tc = new WeakMap(),
      Nc = [];
    function vc(t) {
      for (var _ref47 of sc(t)) {
        var _e152 = _ref47.ownNodeConfig;
        {
          var _t247 = _e152 && _e152.slots;
          if (_t247) return _t247;
        }
      }
      return Nc;
    }
    function kc(t) {
      var e = "";
      for (var _n115 of yc(t)) {
        var _r90 = mc(t, _n115);
        null !== _r90 && (e += _r90.getTextContent());
      }
      return e;
    }
    function Ec(t, e, n) {
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
    function Oc(e) {
      var n = e.__slots;
      if (null === n || n.size < 2) return;
      var r = (function (e) {
        var n = Tc.get(e);
        if (void 0 === n) {
          var _r91 = vc(e),
            _o63 = new Map();
          for (var _n116 of _r91)
            (xc.includes(_n116) && t(371, e.name, _n116),
              _o63.has(_n116) && t(372, e.name, _n116),
              _o63.set(_n116, _o63.size));
          ((n = _o63), Tc.set(e, n));
        }
        return n;
      })(e.constructor);
      var o = null,
        s = !0;
      for (var _t248 of n.keys()) {
        if (null !== o && Ec(o, _t248, r) > 0) {
          s = !1;
          break;
        }
        o = _t248;
      }
      if (s) return;
      var i = Array.from(n).sort(function (_ref48, _ref49) {
        var t = _ref48[0];
        var e = _ref49[0];
        return Ec(t, e, r);
      });
      n.clear();
      for (var _ref51 of i) {
        var _t249 = _ref51[0];
        var _e153 = _ref51[1];
        n.set(_t249, _e153);
      }
    }
    function bc(e, n, r) {
      ("__proto__" !== n && "constructor" !== n && "prototype" !== n) ||
        t(373, n);
      var o = e.getLatest();
      if (null !== o.__slots && o.__slots.get(n) === r.getLatest().__key)
        return o;
      ((!Ss(r) && !vs(r)) || r.isInline()) && t(374, r.__key);
      var s = e.getWritable(),
        i = Sc(s),
        l = i.get(n);
      void 0 !== l && wc(l);
      var c = r.getWritable(),
        a = hc(c);
      if (null !== a) {
        var _t250 = gc(c);
        (null !== _t250 && Sc(a.getWritable())["delete"](_t250),
          (c.__slotHost = null));
      }
      return (
        pi(c),
        (c.__slotHost = s.__key),
        i.set(n, c.__key),
        Oc(s),
        (function () {
          var t = $l();
          ((t._slotsUsed = !0),
            t._pendingEditorState && (t._pendingEditorState._slotsUsed = !0));
        })(),
        s
      );
    }
    function Mc(t, e) {
      var n = t.getWritable();
      if (null === n.__slots) return n;
      var r = n.__slots.get(e);
      return (void 0 !== r && (wc(r), Sc(n)["delete"](e)), n);
    }
    function Ac(t, e) {}
    function wc(e) {
      var n = Si(e);
      if (null === n) return;
      var r = n.getWritable();
      (fc(r) || t(377, e), (r.__slotHost = null), r.remove());
    }
    var Dc = { next: "previous", previous: "next" };
    var _Ic4 = (function () {
      function Ic(t) {
        this.origin = t;
      }
      var _proto18 = Ic.prototype;
      _proto18[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return oa({
            hasNext: Bc,
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
        return Yc(this.getNodeAtCaret(), this.direction);
      };
      _proto18.getSiblingCaret = function getSiblingCaret() {
        return Yc(this.origin, this.direction);
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
          var _t251 = s.getAdjacentCaret();
          null !== _t251 && l.size < e;
          _t251 = _t251.getAdjacentCaret()
        ) {
          var _e154 = _t251.origin.getWritable();
          l.set(_e154.getKey(), _e154);
        }
        for (var _e155 of o) {
          if (l.size > 0) {
            var _n117 = s.getNodeAtCaret();
            if (_n117) {
              if (
                (l["delete"](_n117.getKey()),
                l["delete"](_e155.getKey()),
                _n117.is(_e155) || s.origin.is(_e155))
              );
              else {
                var _t252 = _e155.getParent();
                (_t252 && _t252.is(i) && _e155.remove(), _n117.replace(_e155));
              }
            } else null === _n117 && t(263, Array.from(l).join(" "));
          } else s.insert(_e155);
          s = Yc(_e155, this.direction);
        }
        for (var _t253 of l.values()) _t253.remove();
        return this;
      };
      return Ic;
    })();
    var _Pc3 = (function (_Ic) {
      function Pc() {
        var _this6;
        for (
          var _len7 = arguments.length, args = new Array(_len7), _key7 = 0;
          _key7 < _len7;
          _key7++
        ) {
          args[_key7] = arguments[_key7];
        }
        return (
          ((_this6 = _Ic.call.apply(_Ic, [this].concat(args)) || this),
          (_this6.type = "child"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(Pc, _Ic);
      var _proto19 = Pc.prototype;
      _proto19.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : qc(t, this.direction);
      };
      _proto19.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Yc(Lc(this.getParentAtCaret(), t), this.direction);
      };
      _proto19.getFlipped = function getFlipped() {
        var t = Rc(this.direction);
        return Yc(this.getNodeAtCaret(), t) || qc(this.origin, t);
      };
      _proto19.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto19.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto19.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof Pc &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto19.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return Pc;
    })(_Ic4);
    var Fc = { root: Es, shadowRoot: cl };
    function Rc(t) {
      return Dc[t];
    }
    function Lc(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return null === t || Fc[e](t) ? null : null === dc(t) ? t : null;
    }
    var _Kc3 = (function (_Ic2) {
      function Kc() {
        var _this7;
        for (
          var _len8 = arguments.length, args = new Array(_len8), _key8 = 0;
          _key8 < _len8;
          _key8++
        ) {
          args[_key8] = arguments[_key8];
        }
        return (
          ((_this7 = _Ic2.call.apply(_Ic2, [this].concat(args)) || this),
          (_this7.type = "sibling"),
          babelHelpers.assertThisInitialized(_this7)) ||
          babelHelpers.assertThisInitialized(_this7)
        );
      }
      babelHelpers.inheritsLoose(Kc, _Ic2);
      var _proto20 = Kc.prototype;
      _proto20.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Yc(t, this.direction);
      };
      _proto20.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto20.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto20.getChildCaret = function getChildCaret() {
        return Ss(this.origin) ? qc(this.origin, this.direction) : null;
      };
      _proto20.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Yc(Lc(this.getParentAtCaret(), t), this.direction);
      };
      _proto20.getFlipped = function getFlipped() {
        var t = Rc(this.direction);
        return (
          Yc(this.getNodeAtCaret(), t) || qc(this.origin.getParentOrThrow(), t)
        );
      };
      _proto20.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Kc &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto20.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof Kc || t instanceof _zc3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return Kc;
    })(_Ic4);
    var _zc3 = (function (_Ic3) {
      function zc(t, e) {
        var _this8;
        ((_this8 = _Ic3.call(this, t) || this),
          (_this8.type = "text"),
          (_this8.offset = e));
        return _this8;
      }
      babelHelpers.inheritsLoose(zc, _Ic3);
      var _proto21 = zc.prototype;
      _proto21.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Jc(t, this.direction, this.offset);
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
        return Yc(Lc(this.getParentAtCaret(), t), this.direction);
      };
      _proto21.getFlipped = function getFlipped() {
        return Jc(this.origin, Rc(this.direction), this.offset);
      };
      _proto21.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof zc &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto21.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _Kc3 || t instanceof zc) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto21.getSiblingCaret = function getSiblingCaret() {
        return Yc(this.origin, this.direction);
      };
      return zc;
    })(_Ic4);
    function $c(t) {
      return t instanceof _zc3;
    }
    function Bc(t) {
      return t instanceof _Kc3;
    }
    function Wc(t) {
      return t instanceof _Pc3;
    }
    var Uc = {
        next: (function (_zc) {
          function _class() {
            var _this9;
            for (
              var _len9 = arguments.length, args = new Array(_len9), _key9 = 0;
              _key9 < _len9;
              _key9++
            ) {
              args[_key9] = arguments[_key9];
            }
            return (
              ((_this9 = _zc.call.apply(_zc, [this].concat(args)) || this),
              (_this9.direction = "next"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class, _zc);
          var _proto22 = _class.prototype;
          _proto22.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto22.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_zc3),
        previous: (function (_zc2) {
          function _class3() {
            var _this0;
            for (
              var _len0 = arguments.length, args = new Array(_len0), _key0 = 0;
              _key0 < _len0;
              _key0++
            ) {
              args[_key0] = arguments[_key0];
            }
            return (
              ((_this0 = _zc2.call.apply(_zc2, [this].concat(args)) || this),
              (_this0.direction = "previous"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class3, _zc2);
          var _proto23 = _class3.prototype;
          _proto23.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto23.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_zc3),
      },
      Hc = {
        next: (function (_Kc) {
          function _class5() {
            var _this1;
            for (
              var _len1 = arguments.length, args = new Array(_len1), _key1 = 0;
              _key1 < _len1;
              _key1++
            ) {
              args[_key1] = arguments[_key1];
            }
            return (
              ((_this1 = _Kc.call.apply(_Kc, [this].concat(args)) || this),
              (_this1.direction = "next"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class5, _Kc);
          var _proto24 = _class5.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_Kc3),
        previous: (function (_Kc2) {
          function _class7() {
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
              ((_this10 = _Kc2.call.apply(_Kc2, [this].concat(args)) || this),
              (_this10.direction = "previous"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class7, _Kc2);
          var _proto25 = _class7.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_Kc3),
      },
      jc = {
        next: (function (_Pc) {
          function _class9() {
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
              ((_this11 = _Pc.call.apply(_Pc, [this].concat(args)) || this),
              (_this11.direction = "next"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class9, _Pc);
          var _proto26 = _class9.prototype;
          _proto26.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto26.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_Pc3),
        previous: (function (_Pc2) {
          function _class1() {
            var _this12;
            for (
              var _len12 = arguments.length,
                args = new Array(_len12),
                _key12 = 0;
              _key12 < _len12;
              _key12++
            ) {
              args[_key12] = arguments[_key12];
            }
            return (
              ((_this12 = _Pc2.call.apply(_Pc2, [this].concat(args)) || this),
              (_this12.direction = "previous"),
              babelHelpers.assertThisInitialized(_this12)) ||
              babelHelpers.assertThisInitialized(_this12)
            );
          }
          babelHelpers.inheritsLoose(_class1, _Pc2);
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
        })(_Pc3),
      };
    function Yc(t, e) {
      return t ? new Hc[e](t) : null;
    }
    function Jc(t, e, n) {
      return t ? new Uc[e](t, Gc(t, n)) : null;
    }
    function Gc(t, n, r) {
      if (r === void 0) {
        r = "error";
      }
      var o = t.getTextContentSize();
      var s = "next" === n ? o : "previous" === n ? 0 : n;
      return (
        (s < 0 || s > o) &&
          ("clamp" !== r && e(284, String(n), String(o), t.getKey()),
          (s = s < 0 ? 0 : o)),
        s
      );
    }
    function Vc(t, e) {
      return new _ta(t, e);
    }
    function qc(t, e) {
      return Ss(t) ? new jc[e](t) : null;
    }
    function Xc(t) {
      return (t && t.getChildCaret()) || t;
    }
    function Qc(t) {
      return t && Xc(t.getAdjacentCaret());
    }
    var _Zc = (function () {
      function Zc(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto28 = Zc.prototype;
      _proto28.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new Zc(t, e, this.direction);
      };
      _proto28.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto28.getTextSlices = function getTextSlices() {
        var _this16 = this;
        var t = function t(_t254) {
            var e = _this16[_t254].getLatest();
            return $c(e)
              ? (function (t, e) {
                  var n = t.direction,
                    r = t.origin,
                    o = Gc(r, "focus" === e ? Rc(n) : n);
                  return Vc(t, o - t.offset);
                })(e, _t254)
              : null;
          },
          e = t("anchor"),
          n = t("focus");
        if (e && n) {
          var _t255 = e.caret,
            _r92 = n.caret;
          if (_t255.isSameNodeCaret(_r92))
            return [Vc(_t255, _r92.offset - _t255.offset), null];
        }
        return [e, n];
      };
      _proto28.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = $c(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          r = $c(n),
          o = function o(e) {
            return e.isSameNodeCaret(n) ? null : Qc(e) || e.getParentCaret(t);
          };
        return oa({
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
      return Zc;
    })();
    var _ta = (function () {
      function ta(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto29 = ta.prototype;
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
        return Jc(t.setTextContent(o.slice(0, n) + o.slice(r)), e, n);
      };
      return ta;
    })();
    function ea(t) {
      return ra(t, Yc(bi(), t.direction));
    }
    function na(t) {
      return ra(t, t);
    }
    function ra(e, n) {
      return (
        e.direction !== n.direction && t(265),
        new _Zc(e, n, e.direction)
      );
    }
    function oa(t) {
      var _ref52;
      var e = t.initial,
        n = t.hasNext,
        r = t.step,
        o = t.map;
      var s = e;
      return (
        (_ref52 = {}),
        (_ref52[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
          function () {
            return this;
          }),
        (_ref52.next = function next() {
          if (!n(s)) return { done: !0, value: void 0 };
          var t = { done: !1, value: o(s) };
          return ((s = r(s)), t);
        }),
        _ref52
      );
    }
    function sa(e, n) {
      var r = aa(e.origin, n.origin);
      switch (
        (null === r && t(275, e.origin.getKey(), n.origin.getKey()), r.type)
      ) {
        case "same": {
          var _t256 = "text" === e.type,
            _r93 = "text" === n.type;
          return _t256 && _r93
            ? (function (t, e) {
                return Math.sign(t - e);
              })(e.offset, n.offset)
            : e.type === n.type
              ? 0
              : _t256
                ? -1
                : _r93
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
          return ia(r);
      }
    }
    function ia(t) {
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
    function la(t, e) {
      return e.is(t);
    }
    function ca(t) {
      return Ss(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function aa(e, n) {
      if (e.is(n)) return { commonAncestor: e, type: "same" };
      var r = new Map();
      for (
        var _ca = ca(e), _t257 = _ca[0], _n118 = _ca[1];
        _t257;
        _n118 = _t257, _t257 = _t257.getParent()
      )
        r.set(_t257, _n118);
      for (
        var _ca2 = ca(n), _o64 = _ca2[0], _s42 = _ca2[1];
        _o64;
        _s42 = _o64, _o64 = _o64.getParent()
      ) {
        var _i29 = r.get(_o64);
        if (void 0 !== _i29)
          return null === _i29
            ? (la(e, _o64) || t(276),
              { commonAncestor: _o64, type: "ancestor" })
            : null === _s42
              ? (la(n, _o64) || t(277),
                { commonAncestor: _o64, type: "descendant" })
              : (((Ss(_i29) || la(e, _i29)) &&
                  (Ss(_s42) || la(n, _s42)) &&
                  _o64.is(_i29.getParent()) &&
                  _o64.is(_s42.getParent())) ||
                  t(278),
                { a: _i29, b: _s42, commonAncestor: _o64, type: "branch" });
      }
      return null;
    }
    function ua(e, n) {
      var r = e.type,
        o = e.key,
        s = e.offset,
        i = dl(e.key);
      return "text" === r
        ? (jr(i) || t(266, i.getType(), o), Jc(i, n, s))
        : (Ss(i) || t(267, i.getType(), o), Na(i, e.offset, n));
    }
    function fa(e, n) {
      var r = n.origin,
        o = n.direction,
        s = "next" === o;
      $c(n)
        ? e.set(r.getKey(), n.offset, "text")
        : Bc(n)
          ? jr(r)
            ? e.set(r.getKey(), Gc(r, o), "text")
            : e.set(
                r.getParentOrThrow().getKey(),
                r.getIndexWithinParent() + (s ? 1 : 0),
                "element",
              )
          : ((Wc(n) && Ss(r)) || t(268),
            e.set(r.getKey(), s ? 0 : r.getChildrenSize(), "element"));
    }
    function da(t) {
      var e = bo(),
        n = no(e) ? e : ko();
      return (ha(n, t), Mi(n), n);
    }
    function ha(t, e) {
      (fa(t.anchor, e.anchor), fa(t.focus, e.focus));
    }
    function ga(t) {
      var e = t.anchor,
        n = t.focus,
        r = ua(e, "next"),
        o = ua(n, "next"),
        s = sa(r, o) <= 0 ? "next" : "previous";
      return ra(Sa(r, s), Sa(o, s));
    }
    function _a(t) {
      var e = t.direction,
        n = t.origin,
        r = Yc(n, Rc(e)).getNodeAtCaret();
      return r ? Yc(r, e) : qc(n.getParentOrThrow(), e);
    }
    function pa(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _r94 = Wc(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _r94;
        _r94 = _r94.getParentCaret(e)
      )
        n.push(_a(_r94));
      return n;
    }
    function ya(t) {
      return !!t && t.origin.isAttached();
    }
    function ma(e, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (e.isCollapsed()) return e;
      var r = "root",
        o = "next";
      var s = n;
      var i = Ta(e, o),
        l = pa(i.anchor, r),
        c = pa(i.focus.getFlipped(), r),
        a = new Set(),
        u = [];
      for (var _t258 of i.iterNodeCarets(r))
        if (Wc(_t258)) a.add(_t258.origin.getKey());
        else if (Bc(_t258)) {
          var _e156 = _t258.origin;
          (Ss(_e156) && !a.has(_e156.getKey())) || u.push(_e156);
        }
      for (var _t259 of u) _t259.remove();
      for (var _t260 of i.getTextSlices()) {
        if (!_t260) continue;
        var _e157 = _t260.caret.origin,
          _n119 = _e157.getTextContentSize(),
          _r95 = _a(Yc(_e157, o)),
          _i30 = _e157.getMode();
        if (
          (Math.abs(_t260.distance) === _n119 && "removeEmptySlices" === s) ||
          ("token" === _i30 && 0 !== _t260.distance)
        )
          _r95.remove();
        else if (0 !== _t260.distance) {
          s = "removeEmptySlices";
          var _e158 = _t260.removeTextSlice();
          var _n120 = _t260.caret.origin;
          if ("segmented" === _i30) {
            var _t261 = _e158.origin,
              _n121 = Hr(_t261.getTextContent())
                .setStyle(_t261.getStyle())
                .setFormat(_t261.getFormat());
            (_r95.replaceOrInsert(_n121), (_e158 = Jc(_n121, o, _e158.offset)));
          }
          (_n120.is(l[0].origin) && (l[0] = _e158),
            _n120.is(c[0].origin) && (c[0] = _e158.getFlipped()));
        }
      }
      var f, d;
      for (var _t262 of l)
        if (ya(_t262)) {
          f = xa(_t262);
          break;
        }
      for (var _t263 of c)
        if (ya(_t263)) {
          d = xa(_t263);
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
            for (var _r96 = c; _r96 < t.length; _r96++) {
              var _o65 = t[_r96];
              if (cl(_o65)) return;
              !n && e(_o65) && (n = _o65);
            }
            return n;
          },
          u = a(s, zl),
          f =
            u &&
            a(i, function (t) {
              return n.has(t.getKey()) && zl(t);
            });
        if (f && yc(f).length > 0) return null;
        return u && f ? [u, f] : null;
      })(f, d, a);
      if (h) {
        var _t264 = h[0],
          _e159 = h[1];
        qc(_t264, "previous").splice(0, _e159.getChildren());
        var _n122 = _e159.getParent();
        for (_e159.remove(!0); _n122 && _n122.isEmpty(); ) {
          var _t265 = _n122;
          ((_n122 = _n122.getParent()), _t265.remove(!0));
        }
      } else if (d) {
        var _t266 = (function (t) {
            if (Wc(t)) {
              var _e161 = t.origin;
              if (zl(_e161)) return _e161;
            } else {
              var _e162 = t.getParentAtCaret();
              if (_e162 && zl(_e162)) return _e162;
            }
            return null;
          })(d),
          _e160 = _t266 && _t266.getParent(),
          _n123 = _t266 && _t266.getParents().findLast(ll);
        if (
          _t266 &&
          _e160 &&
          !Es(_e160) &&
          _t266.isEmpty() &&
          a.has(_t266.getKey()) &&
          0 === yc(_t266).length &&
          (!_n123 || a.has(_n123.getKey()))
        ) {
          _t266.remove(!0);
          var _n124 = _e160;
          for (; _n124 && !Es(_n124) && _n124.isEmpty(); ) {
            var _t267 = _n124.getParent();
            if (_t267 && Es(_t267) && _t267.getChildrenSize() <= 1) break;
            var _e163 = _n124;
            ((_n124 = _t267), _e163.remove(!0));
          }
        }
      }
      var g = [f, d].concat(l, c).find(ya);
      if (g) {
        return na(Sa(xa(g), e.direction));
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
    function xa(t) {
      var e = (function (t) {
          var e = t;
          for (; Wc(e); ) {
            var _t268 = Qc(e);
            if (!Wc(_t268)) break;
            e = _t268;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (jr(e.origin)) return $c(e) ? e : Jc(e.origin, n, n);
      var r = e.getAdjacentCaret();
      return Bc(r) && jr(r.origin) ? Jc(r.origin, n, Rc(n)) : e;
    }
    function Ca(t) {
      return $c(t) && t.offset !== Gc(t.origin, t.direction);
    }
    function Sa(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function Ta(t, e) {
      return t.direction === e ? t : ra(Sa(t.focus, e), Sa(t.anchor, e));
    }
    function Na(t, e, n) {
      var r = qc(t, "next");
      for (var _t269 = 0; _t269 < e; _t269++) {
        var _t270 = r.getAdjacentCaret();
        if (null === _t270) break;
        r = _t270;
      }
      return Sa(r, n);
    }
    function va(e) {
      var n = e.origin,
        r = e.offset,
        o = e.direction;
      if (r === Gc(n, o)) return e.getSiblingCaret();
      if (r === Gc(n, Rc(o))) return _a(e.getSiblingCaret());
      var _n$splitText2 = n.splitText(r),
        s = _n$splitText2[0];
      return (jr(s) || t(281), Sa(Yc(s, "next"), o));
    }
    function ka(t, e) {
      return !0;
    }
    function Ea(t, _temp) {
      var _ref53 = _temp === void 0 ? {} : _temp,
        _ref53$$copyElementNo = _ref53.$copyElementNode,
        e = _ref53$$copyElementNo === void 0 ? al : _ref53$$copyElementNo,
        _ref53$$splitTextPoin = _ref53.$splitTextPointCaretNext,
        n = _ref53$$splitTextPoin === void 0 ? va : _ref53$$splitTextPoin,
        _ref53$rootMode = _ref53.rootMode,
        r = _ref53$rootMode === void 0 ? "shadowRoot" : _ref53$rootMode,
        _ref53$$shouldSplit = _ref53.$shouldSplit,
        o = _ref53$$shouldSplit === void 0 ? ka : _ref53$$shouldSplit,
        _ref53$removeEmptyDes = _ref53.removeEmptyDestination,
        s = _ref53$removeEmptyDes === void 0 ? !1 : _ref53$removeEmptyDes;
      if ($c(t)) return n(t);
      var i = t.getParentCaret(r);
      if (i) {
        var _n125 = i.origin;
        if (Wc(t)) {
          var _t271 = _a(i);
          if (s && _n125.isEmpty()) return (_n125.remove(), _t271);
          if (!_n125.canBeEmpty() || !o(_n125, "first")) return _t271;
        }
        var _r97 = (function (t) {
          var e = [];
          for (
            var _n126 = t.getAdjacentCaret();
            _n126;
            _n126 = _n126.getAdjacentCaret()
          )
            e.push(_n126.origin);
          return e;
        })(t);
        (_r97.length > 0 || (!s && _n125.canBeEmpty() && o(_n125, "last"))) &&
          i.insert(e(_n125).splice(0, 0, _r97));
      }
      return i;
    }
    function Oa(e, n, r) {
      var o = Sa(n, "next");
      ($c(o) &&
        (0 === o.offset
          ? (o = Yc(o.origin, "previous").getFlipped())
          : o.offset === o.origin.getTextContentSize() &&
            (o = Yc(o.origin, "next"))),
        o.origin.is(e) &&
          (Bc(o) || t(342, e.getKey(), e.getType()), (o = _a(o))),
        (e.is(o.getNodeAtCaret()) || e.is(o.getFlipped().getNodeAtCaret())) &&
          e.remove(!0));
      for (var _t272 = o; _t272; _t272 = Ea(_t272, r)) o = _t272;
      return (
        $c(o) && t(283),
        o.insert(e.isInline() ? Bs().append(e) : e),
        Sa(Yc(e.getLatest(), "next"), n.direction)
      );
    }
    function ba() {
      var e = [];
      for (
        var _len13 = arguments.length, t = new Array(_len13), _key13 = 0;
        _key13 < _len13;
        _key13++
      ) {
        t[_key13] = arguments[_key13];
      }
      for (var _n127 of t)
        if (_n127 && "string" == typeof _n127)
          for (var _ref55 of _n127.matchAll(/\S+/g)) {
            var _t273 = _ref55[0];
            e.push(_t273);
          }
      return e;
    }
    function Ma() {
      for (
        var _len14 = arguments.length, t = new Array(_len14), _key14 = 0;
        _key14 < _len14;
        _key14++
      ) {
        t[_key14] = arguments[_key14];
      }
      return function () {
        for (var _e164 = t.length - 1; _e164 >= 0; _e164--) t[_e164]();
        t.length = 0;
      };
    }
    ((exports.$addUpdateTag = tl),
      (exports.$applyNodeReplacement = ul),
      (exports.$assumeActiveEditor = function (t) {
        (null !== ns() && null === Yo && (Yo = t), Yo !== t && e(378));
      }),
      (exports.$caretFromPoint = ua),
      (exports.$caretRangeFromSelection = ga),
      (exports.$cloneWithProperties = Gl),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = Gl(t))[dr] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = sa),
      (exports.$copyNode = al),
      (exports.$create = function (t) {
        var e = $l();
        return (
          ts(),
          new (e.resolveRegisteredNodeAfterReplacements(
            e.getRegisteredNode(t),
          ).klass)()
        );
      }),
      (exports.$createChildrenArray = lc),
      (exports.$createLineBreakNode = Ps),
      (exports.$createNodeSelection = Eo),
      (exports.$createParagraphNode = Bs),
      (exports.$createPoint = Xr),
      (exports.$createRangeSelection = ko),
      (exports.$createRangeSelectionFromDom = function (t, e) {
        return Oo(null, t, e, null);
      }),
      (exports.$createTabNode = Gr),
      (exports.$createTextNode = Hr),
      (exports.$extendCaretToRange = ea),
      (exports.$findMatchingParent = ic),
      (exports.$formatText = so),
      (exports.$fullReconcile = os),
      (exports.$generateNodesFromRawText = Ko),
      (exports.$getAdjacentChildCaret = Qc),
      (exports.$getAdjacentNode = Gi),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          r = t,
          o = Qc(r);
        for (; null === o; ) {
          if ((n--, (o = r.getParentCaret(e)), !o)) return null;
          ((r = o), (o = Qc(r)));
        }
        return o && [o, n];
      }),
      (exports.$getCaretInDirection = Sa),
      (exports.$getCaretRange = ra),
      (exports.$getCaretRangeInDirection = Ta),
      (exports.$getCharacterOffsets = lo),
      (exports.$getChildCaret = qc),
      (exports.$getChildCaretAtIndex = Na),
      (exports.$getChildCaretOrSelf = Xc),
      (exports.$getCollapsedCaretRange = na),
      (exports.$getCommonAncestor = aa),
      (exports.$getCommonAncestorResultBranchOrder = ia),
      (exports.$getDOMSlot = Wl),
      (exports.$getDOMTextNode = Hl),
      (exports.$getDocument = Tl),
      (exports.$getEditor = $l),
      (exports.$getEditorDOMRenderConfig = Bl),
      (exports.$getNearestNodeFromDOMNode = ki),
      (exports.$getNearestRootOrShadowRoot = il),
      (exports.$getNodeByKey = Si),
      (exports.$getNodeByKeyOrThrow = dl),
      (exports.$getNodeFromDOMNode = Ti),
      (exports.$getPreviousSelection = Mo),
      (exports.$getRoot = bi),
      (exports.$getSelection = bo),
      (exports.$getSiblingCaret = Yc),
      (exports.$getSlot = mc),
      (exports.$getSlotFrame = _c),
      (exports.$getSlotHost = hc),
      (exports.$getSlotNameWithinHost = gc),
      (exports.$getSlotNames = yc),
      (exports.$getState = at),
      (exports.$getStateChange = function (t, e, n) {
        var r = at(t, n, it),
          o = at(e, n, it);
        return n.isEqual(r, o) ? null : [r, o];
      }),
      (exports.$getTextContent = function () {
        var t = bo();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = Gc),
      (exports.$getTextPointCaret = Jc),
      (exports.$getTextPointCaretSlice = Vc),
      (exports.$getWritableNodeState = ht),
      (exports.$hasAncestor = nl),
      (exports.$hasUpdateTag = function (t) {
        return rs()._updateTags.has(t);
      }),
      (exports.$insertNodeToNearestRootAtCaret = Oa),
      (exports.$insertNodes = function (t) {
        var e = bo() || Mo();
        (null === e && (e = bi().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = No),
      (exports.$isChildCaret = Wc),
      (exports.$isDecoratorNode = vs),
      (exports.$isEditorState = function (t) {
        return t instanceof _As;
      }),
      (exports.$isElementDOMSlot = Ul),
      (exports.$isElementNode = Ss),
      (exports.$isExtendableTextPointCaret = Ca),
      (exports.$isInlineElementOrDecoratorNode = sl),
      (exports.$isInlineFormattable = Pr),
      (exports.$isLeafNode = function (t) {
        return jr(t) || Fs(t) || vs(t);
      }),
      (exports.$isLexicalNode = pr),
      (exports.$isLineBreakNode = Fs),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _Ic4;
      }),
      (exports.$isNodeSelection = oo),
      (exports.$isParagraphNode = Ws),
      (exports.$isRangeSelection = no),
      (exports.$isRootNode = Es),
      (exports.$isRootOrShadowRoot = cl),
      (exports.$isSelectionCapturedInDecoratorInput = ri),
      (exports.$isShadowRootNode = ll),
      (exports.$isSiblingCaret = Bc),
      (exports.$isSlotChild = fc),
      (exports.$isSlotHost = uc),
      (exports.$isTabNode = Vr),
      (exports.$isTextNode = jr),
      (exports.$isTextPointCaret = $c),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _ta;
      }),
      (exports.$isTokenOrSegmented = ui),
      (exports.$isTokenOrTab = ai),
      (exports.$markSlotEditable = tc),
      (exports.$needsBlockCursorBeside = hl),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = ns();
        if (n._readOnly) {
          var _t274 = Jl(n).get(e);
          return _t274 ? Array.from(_t274.values()) : [];
        }
        var r = n._nodeMap,
          o = [];
        for (var _ref57 of r) {
          var _n128 = _ref57[1];
          _n128 instanceof t &&
            _n128.__type === e &&
            _n128.isAttached() &&
            o.push(_n128);
        }
        return o;
      }),
      (exports.$normalizeCaret = xa),
      (exports.$normalizeSelection__EXPERIMENTAL = Nt),
      (exports.$onUpdate = el),
      (exports.$parseSerializedNode = function (t) {
        return us(t, rs()._nodes);
      }),
      (exports.$removeFromParent = pi),
      (exports.$removeSlot = Mc),
      (exports.$removeTextFromCaretRange = ma),
      (exports.$rewindSiblingCaret = _a),
      (exports.$selectAll = function (t) {
        var e = bi();
        if (no(t)) {
          var _e165 = t.anchor,
            _n129 = t.focus,
            _r98 = _e165.getNode();
          if (Es(_r98))
            return (
              _e165.set(_r98.getKey(), 0, "element"),
              _n129.set(_r98.getKey(), _r98.getChildrenSize(), "element"),
              Nt(t),
              t
            );
          var _o66 = _r98.getTopLevelElementOrThrow(),
            _s43 = _o66.getParent();
          if (null === _s43)
            return (
              Ss(_o66) &&
                (_e165.set(_o66.getKey(), 0, "element"),
                _n129.set(_o66.getKey(), _o66.getChildrenSize(), "element"),
                Nt(t)),
              t
            );
          var _i31 = _s43;
          return (
            _e165.set(_i31.getKey(), 0, "element"),
            _n129.set(_i31.getKey(), _i31.getChildrenSize(), "element"),
            Nt(t),
            t
          );
        }
        {
          var _t275 = e.select(0, e.getChildrenSize());
          return (Mi(Nt(_t275)), _t275);
        }
      }),
      (exports.$setCompositionKey = xi),
      (exports.$setDirectionFromDOM = ql),
      (exports.$setFormatFromDOM = Xl),
      (exports.$setPointFromCaret = fa),
      (exports.$setSelection = Mi),
      (exports.$setSelectionFromCaretRange = da),
      (exports.$setSlot = bc),
      (exports.$setState = function (t, e, n) {
        var r;
        if ((ts(), "function" == typeof n)) {
          var _o67 = t.getLatest(),
            _s44 = at(_o67, e);
          if (((r = n(_s44)), e.isEqual(_s44, r))) return _o67;
        } else r = n;
        var o = t.getWritable();
        return (ht(o).updateFromKnown(e, r), o);
      }),
      (exports.$splitAtPointCaretNext = Ea),
      (exports.$splitNode = function (e, n) {
        var r = e.getChildAtIndex(n);
        (null == r && (r = e), cl(e) && t(102));
        var _o70 = function o(e) {
            var n = e.getParentOrThrow(),
              s = cl(n),
              i = e !== r || s ? al(e) : e;
            if (s)
              return ((Ss(e) && Ss(i)) || t(133), e.insertAfter(i), [e, i, i]);
            {
              var _o69 = _o70(n),
                _t276 = _o69[0],
                _r99 = _o69[1],
                _s45 = _o69[2],
                _l16 = e.getNextSiblings();
              return (
                _s45.append.apply(_s45, [i].concat(_l16)),
                [_t276, _r99, i]
              );
            }
          },
          _o68 = _o70(r),
          s = _o68[0],
          i = _o68[1];
        return [s, i];
      }),
      (exports.$updateDOMSelection = Ro),
      (exports.$updateRangeSelectionFromCaretRange = ha),
      (exports.ArtificialNode__DO_NOT_USE = _ws),
      (exports.BEFORE_INPUT_COMMAND = Ee),
      (exports.BLUR_COMMAND = yn),
      (exports.CAN_REDO_COMMAND = gn),
      (exports.CAN_UNDO_COMMAND = _n),
      (exports.CAN_USE_BEFORE_INPUT = i),
      (exports.CAN_USE_DOM = n),
      (exports.CLEAR_EDITOR_COMMAND = dn),
      (exports.CLEAR_HISTORY_COMMAND = hn),
      (exports.CLICK_COMMAND = ke),
      (exports.COLLABORATION_TAG = mr),
      (exports.COMMAND_PRIORITY_BEFORE_CRITICAL = -4),
      (exports.COMMAND_PRIORITY_BEFORE_EDITOR = -8),
      (exports.COMMAND_PRIORITY_BEFORE_HIGH = -5),
      (exports.COMMAND_PRIORITY_BEFORE_LOW = -7),
      (exports.COMMAND_PRIORITY_BEFORE_NORMAL = -6),
      (exports.COMMAND_PRIORITY_CRITICAL = 4),
      (exports.COMMAND_PRIORITY_EDITOR = Hs),
      (exports.COMMAND_PRIORITY_HIGH = 3),
      (exports.COMMAND_PRIORITY_LOW = 1),
      (exports.COMMAND_PRIORITY_NORMAL = 2),
      (exports.COMPOSITION_END_COMMAND = Me),
      (exports.COMPOSITION_END_TAG = Nr),
      (exports.COMPOSITION_START_COMMAND = be),
      (exports.COMPOSITION_START_TAG = Tr),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = Ie),
      (exports.COPY_COMMAND = an),
      (exports.CUT_COMMAND = un),
      (exports.CUT_TAG = "cut"),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = Js),
      (exports.DELETE_CHARACTER_COMMAND = Ae),
      (exports.DELETE_LINE_COMMAND = Le),
      (exports.DELETE_WORD_COMMAND = Re),
      (exports.DRAGEND_COMMAND = cn),
      (exports.DRAGOVER_COMMAND = ln),
      (exports.DRAGSTART_COMMAND = sn),
      (exports.DROP_COMMAND = rn),
      (exports.DecoratorNode = _Ns),
      (exports.ElementNode = _Cs4),
      (exports.FOCUS_COMMAND = pn),
      (exports.FORMAT_ELEMENT_COMMAND = on),
      (exports.FORMAT_TEXT_COMMAND = Ke),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = yr),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = en),
      (exports.INPUT_COMMAND = Oe),
      (exports.INSERT_LINE_BREAK_COMMAND = we),
      (exports.INSERT_PARAGRAPH_COMMAND = De),
      (exports.INSERT_TAB_COMMAND = tn),
      (exports.INTERNAL_$isBlock = zl),
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
      (exports.LineBreakNode = _Ds),
      (exports.MOVE_TO_END = Ue),
      (exports.MOVE_TO_START = je),
      (exports.NODE_STATE_DIRECT = it),
      (exports.NODE_STATE_KEY = "$"),
      (exports.NODE_STATE_LATEST = lt),
      (exports.OUTDENT_CONTENT_COMMAND = nn),
      (exports.PASTE_COMMAND = Pe),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _zs),
      (exports.REDO_COMMAND = $e),
      (exports.REMOVE_TEXT_COMMAND = Fe),
      (exports.RootNode = _ks),
      (exports.SELECTION_CHANGE_COMMAND = Ne),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = ve),
      (exports.SELECT_ALL_COMMAND = fn),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = Cr),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = xr),
      (exports.SKIP_SELECTION_FOCUS_TAG = Sr),
      (exports.TEXT_TYPE_TO_FORMAT = A),
      (exports.TabNode = _Jr),
      (exports.TextNode = _Fr2),
      (exports.UNDO_COMMAND = ze),
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
        var n = ba.apply(void 0, e);
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
      (exports.createEditor = function (e) {
        var n = e || {},
          r = is(),
          o = n.theme || {},
          s = void 0 === e ? r : n.parentEditor || null,
          i = n.disableEvents || !1,
          l = bs(),
          c = n.namespace || (null !== s ? s._config.namespace : Pi()),
          a = n.editorState,
          u = [_ks, _Fr2, _Ds, _Jr, _zs, _ws].concat(n.nodes || []),
          f = n.onError,
          d = n.onWarn,
          h = n.html,
          g = void 0 === n.editable || n.editable;
        var _;
        if (void 0 === e && null !== r) _ = r._nodes;
        else {
          _ = new Map();
          for (var _e166 = 0; _e166 < u.length; _e166++) {
            var _r100 = u[_e166],
              _o71 = null,
              _s46 = null;
            if (_r100 && "object" == typeof _r100) {
              var _t277 = _r100;
              ((_r100 = _t277.replace),
                (_o71 = _t277["with"]),
                (_s46 = _t277.withKlass || null));
            }
            if (
              "function" != typeof _r100 ||
              !_r100.prototype ||
              !(_r100 === _r105 || _r100.prototype instanceof _r105)
            ) {
              var _o72 = "<unknown>";
              try {
                _o72 = JSON.parse(H);
              } catch (t) {}
              t(
                365,
                String(_e166 - u.length + (n.nodes ? n.nodes.length : 0)),
                "function" == typeof _r100
                  ? "" +
                      _r100.name +
                      ("function" == typeof _r100.getType
                        ? " (type " + String(_r100.getType()) + ")"
                        : "")
                  : String(_r100),
                String(_o72),
              );
            }
            oc(_r100);
            var _i32 = _r100.getType(),
              _l17 = Ys(_r100);
            _.set(_i32, {
              exportDOM: h && h["export"] ? h["export"].get(_r100) : void 0,
              klass: _r100,
              replace: _o71,
              replaceWithKlass: _s46,
              sharedNodeState: ut(u[_e166]),
              transforms: _l17,
            });
          }
        }
        var p = new _qs(
          l,
          s,
          _,
          {
            disableEvents: i,
            dom: babelHelpers["extends"]({}, Js, e && e.dom),
            namespace: c,
            theme: o,
          },
          f || console.error,
          d || Us,
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
          })(_, h ? h["import"] : void 0),
          g,
          e,
        );
        return (
          void 0 !== a && ((p._pendingEditorState = a), (p._dirtyType = 2)),
          (function (t) {
            (t.registerCommand(Ee, Xn, Hs),
              t.registerCommand(Oe, Qn, Hs),
              t.registerCommand(be, Zn, Hs),
              t.registerCommand(Me, tr, Hs),
              t.registerCommand(Be, rr, Hs));
          })(p),
          p
        );
      }),
      (exports.createRefCountedRegistry = xn),
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
      (exports.findAllLexicalElementsDeep = Cl),
      (exports.flipDirection = Rc),
      (exports.getActiveElement = Ml),
      (exports.getActiveElementDeep = Al),
      (exports.getComposedEventTarget = wl),
      (exports.getComposedStaticRange = Nl),
      (exports.getDOMOwnerDocument = Zi),
      (exports.getDOMSelection = _l),
      (exports.getDOMSelectionFromTarget = pl),
      (exports.getDOMSelectionPoints = kl),
      (exports.getDOMSelectionRange = vl),
      (exports.getDOMSelectionRangeAndPoints = function (t, e) {
        var _El;
        var n = Nl(t, e);
        if (null === n)
          return {
            points: t,
            range: t.rangeCount > 0 ? t.getRangeAt(0) : null,
          };
        var r =
          (_El = El(n)) != null
            ? _El
            : t.rangeCount > 0
              ? t.getRangeAt(0)
              : null;
        return { points: Ol(n, bl(t)), range: r };
      }),
      (exports.getDOMShadowRoots = xl),
      (exports.getDOMTextNode = hi),
      (exports.getDeclaredSlots = vc),
      (exports.getEditorPropertyFromDOMNode = ci),
      (exports.getNearestEditorFromDOMNode = li),
      (exports.getParentElement = Qi),
      (exports.getRegisteredNode = ei),
      (exports.getRegisteredNodeOrThrow = ti),
      (exports.getRegisteredSubtypeMap = function (t) {
        var e = new Map(),
          n = new Map();
        for (var _r101 of t) {
          var _oc2 = oc(_r101),
            _t278 = _oc2.ownNodeType;
          _t278 && (n.set(_t278, _r101), e.set(_t278, new Set()));
        }
        for (var _ref59 of n) {
          var _t279 = _ref59[0];
          var _r102 = _ref59[1];
          for (var _ref61 of sc(_r102)) {
            var _n130 = _ref61.ownNodeType;
            {
              var _r103 = _n130 && e.get(_n130);
              _r103 && _r103.add(_t279);
            }
          }
        }
        return e;
      }),
      (exports.getRootOwnerDocument = Sl),
      (exports.getStaticNodeConfig = oc),
      (exports.getStyleObjectFromCSS = kr),
      (exports.getTextDirection = function (t) {
        return b.test(t) ? "rtl" : M.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = Ys),
      (exports.isBlockDomNode = Kl),
      (exports.isCurrentlyReadOnlyMode = Zo),
      (exports.isDOMCapturingSelection = ec),
      (exports.isDOMDocumentNode = di),
      (exports.isDOMNode = Il),
      (exports.isDOMShadowRoot = yl),
      (exports.isDOMTextNode = fi),
      (exports.isDOMUnmanaged = Zl),
      (exports.isDocumentFragment = Pl),
      (exports.isExactShortcutMatch = Bi),
      (exports.isHTMLAnchorElement = function (t) {
        return Dl(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = Dl),
      (exports.isHTMLTableCellElement = function (t) {
        return Dl(t) && ("TD" === t.tagName || "TH" === t.tagName);
      }),
      (exports.isHTMLTableRowElement = function (t) {
        return Dl(t) && "TR" === t.tagName;
      }),
      (exports.isInlineDomNode = Rl),
      (exports.isLastChildInBlockNode = Ls),
      (exports.isLexicalEditor = ii),
      (exports.isModifierMatch = $i),
      (exports.isOnlyChildInBlockNode = Rs),
      (exports.isSelectionCapturedInDecoratorInput = oi),
      (exports.isSelectionWithinEditor = si),
      (exports.iterStaticNodeConfigChain = sc),
      (exports.makeStepwiseIterator = oa),
      (exports.mergeRegister = Ma),
      (exports.mountSlotContainer = function (t, e, n, r) {
        var o = t.read("latest", function () {
          var r = Si(e);
          return null !== r
            ? (function (t, e, n) {
                if (n === void 0) {
                  n = $l();
                }
                var r = mc(t, e);
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
      (exports.normalizeClassNames = ba),
      (exports.registerEventListener = Cn),
      (exports.registerEventListeners = function (t, e, n) {
        return Ma.apply(
          void 0,
          Object.entries(e).map(function (_ref62) {
            var e = _ref62[0],
              r = _ref62[1];
            return Cn(t, e, r, n);
          }),
        );
      }),
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
        var n = ba.apply(void 0, e);
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(_t$classList3, n);
      }),
      (exports.removeFromParent = yi),
      (exports.resetRandomKey = function () {
        Zs = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = Or),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n131 in e) {
          var _r104 = e[_n131];
          null == _r104 ? t.removeProperty(_n131) : Er(t, _n131, _r104);
        }
      }),
      (exports.setDOMUnmanaged = Ql),
      (exports.setNodeIndentFromDOM = Vl),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n132 in e)
          if (t[_n132] !== e[_n132]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.stopLexicalPropagation = lr),
      (exports.toggleTextFormatType = gi),
      (exports.tokenizeRawText = Lo),
      (exports.unmountSlotContainer = function (t, e, n) {
        n.style.display = "none";
        var r = t.getElementByKey(e);
        null !== r && n.parentElement !== r && r.insertBefore(n, r.firstChild);
      }));
  },
  null,
);
