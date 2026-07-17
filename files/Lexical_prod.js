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
        o = new URLSearchParams();
      o.append("code", t);
      for (var _t3 of e) o.append("v", _t3);
      ((n.search = o.toString()),
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
      m = 1,
      y = 2,
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
        (_I[y] = "center"),
        (_I[T] = "end"),
        (_I[C] = "justify"),
        (_I[m] = "left"),
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
      return Ol()._blockCursorElement;
    }
    function K(t) {
      return (
        null !== t && 1 === t.nodeType && t.hasAttribute("data-lexical-slot")
      );
    }
    var _B2 = (function () {
      function B(t, e, n) {
        ((this.element = t),
          (this.before = e || null),
          (this.after = n || null));
      }
      var _proto = B.prototype;
      _proto.withBefore = function withBefore(t) {
        return new B(this.element, t, this.after);
      };
      _proto.withAfter = function withAfter(t) {
        return new B(this.element, this.before, t);
      };
      _proto.withElement = function withElement(t) {
        return this.element === t ? this : new B(t, this.before, this.after);
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
      return B;
    })();
    function z(t, e) {
      var n = e;
      for (; null !== n && n.parentNode !== t; ) n = n.parentNode;
      return n;
    }
    var _$ = (function (_B) {
      function $() {
        return _B.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose($, _B);
      var _proto2 = $.prototype;
      _proto2.withBefore = function withBefore(t) {
        return new $(this.element, t, this.after);
      };
      _proto2.withAfter = function withAfter(t) {
        return new $(this.element, this.before, t);
      };
      _proto2.withElement = function withElement(t) {
        return this.element === t ? this : new $(t, this.before, this.after);
      };
      _proto2.getInsertionAnchor = function getInsertionAnchor() {
        return (
          _B.prototype.getInsertionAnchor.call(this) ||
          this.getManagedLineBreak()
        );
      };
      _proto2.getFirstChildAnchor = function getFirstChildAnchor() {
        var t = _B.prototype.getFirstChildAnchor.call(this),
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
          o = this.before,
          r = al().createElement("br");
        if (
          (r.setAttribute("data-lexical-managed-linebreak", "true"),
          n.insertBefore(r, o),
          t)
        ) {
          var _t4 = al().createElement("img");
          (_t4.setAttribute("data-lexical-managed-linebreak", "true"),
            _t4.style.setProperty("display", "inline", "important"),
            _t4.style.setProperty("border", "0px", "important"),
            _t4.style.setProperty("margin", "0px", "important"),
            (_t4.alt = ""),
            n.insertBefore(_t4, r),
            (n.__lexicalLineBreak = _t4));
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
          for (var _t5 = _e4; _t5 < _s2; _t5++) _r2[_t5] !== _n3 && _i2++;
          return [t, Math.min(_i2, t.getChildrenSize())];
        }
        var r = W(e, n);
        r.push(o);
        var s = W(e, this.element);
        var i = t.getIndexWithinParent();
        for (var _t6 = 0; _t6 < s.length; _t6++) {
          var _e5 = r[_t6],
            _n4 = s[_t6];
          if (void 0 === _e5 || _e5 < _n4) break;
          if (_e5 > _n4) {
            i += 1;
            break;
          }
        }
        return [t.getParentOrThrow(), i];
      };
      return $;
    })(_B2);
    function W(e, n) {
      var o = [];
      var r = n;
      for (; r !== e && null !== r; r = r.parentNode) {
        var _t7 = 0;
        for (
          var _e6 = r.previousSibling;
          null !== _e6;
          _e6 = _e6.previousSibling
        )
          _t7++;
        o.push(_t7);
      }
      return (r !== e && t(225), o.reverse());
    }
    var U;
    try {
      U = "0.48.0+prod.cjs";
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
          var _t1 = _i3.__key;
          (_i3.__parent === e &&
            ((cs(_i3) || (Xl(_i3) && null !== _i3.__slots)) &&
              V(_i3, _t1, n, o, r, s),
            n.has(_t1) || s["delete"](_t1),
            r.push(_t1)),
            (_i3 = _i3.getNextSibling()));
        }
      }
      for (var _i4 of Xl(t) && null !== t.__slots ? t.__slots.values() : []) {
        var _t10 = o.get(_i4);
        void 0 !== _t10 &&
          Ql(_t10) &&
          _t10.__slotHost === e &&
          ((cs(_t10) || (Xl(_t10) && null !== _t10.__slots)) &&
            V(_t10, _i4, n, o, r, s),
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
        (o && void 0 !== fi(t, n))
      );
    }
    function tt(t, e, n) {
      var o = nl(ji(n)),
        r = o && dl(o, n._rootElement);
      var s = null,
        i = null;
      null !== r &&
        r.anchorNode === t &&
        ((s = r.anchorOffset), (i = r.focusOffset));
      var l = t.nodeValue;
      null !== l && vi(e, l, s, i, !1);
    }
    function et(t, e, n) {
      if (Uo(t)) {
        var _e1 = t.anchor.getNode();
        if (_e1.is(n) && t.format !== _e1.getFormat()) return !1;
      }
      return Qs(e) && n.isAttached();
    }
    function nt(t, e, n) {
      for (var _o4 = t; _o4 && !zl(_o4); _o4 = Bi(_o4)) {
        var _t11 = fi(_o4, e);
        if (void 0 !== _t11) {
          var _e10 = ci(_t11, n);
          if (_e10) return fs(_e10) || !xl(_o4) ? void 0 : [_o4, _e10];
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
              o && Do(_p) && Qs(_h) && et(r, _h, _p) && tt(_h, _p, t);
            else if ("childList" === _d) {
              a = !0;
              var _e11 = _f.addedNodes;
              for (var _n0 = 0; _n0 < _e11.length; _n0++) {
                var _o5 = _e11[_n0],
                  _r3 = ai(_o5),
                  _i5 = _o5.parentNode;
                if (
                  !(
                    null == _i5 ||
                    _o5 === c ||
                    null !== _r3 ||
                    Z(_o5, _i5, t) ||
                    (t._slotsUsed &&
                      xl(_o5) &&
                      _o5.hasAttribute("data-lexical-slot")) ||
                    zl(_o5)
                  )
                ) {
                  if (s) {
                    var _t12 =
                      (xl(_o5) ? _o5.innerText : null) || _o5.nodeValue;
                    _t12 && (u += _t12);
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
          null !== r && (a && pi(r), s && Ri(t) && r.insertRawText(u));
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
        0 === X && ji(t).addEventListener("textInput", Q, !0);
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
      for (var _ref8 of Yl("function" == typeof t ? t : t.replace)) {
        var _o9 = _ref8.ownNodeConfig;
        if (_o9 && _o9.stateConfigs)
          for (var _t13 of _o9.stateConfigs) {
            var _o0 = void 0;
            ("stateConfig" in _t13
              ? ((_o0 = _t13.stateConfig), _t13.flat && n.add(_o0.key))
              : (_o0 = _t13),
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
        for (var _t14 of this.knownState.keys())
          _t14.resetOnCopyNode && this.knownState.set(_t14, _t14.defaultValue);
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
        : $s(Ol(), t.getType()).sharedNodeState;
    }
    function _t(t) {
      if (t) for (var _e20 in t) return t;
    }
    function pt(t) {
      return t;
    }
    function mt(t, e, n) {
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
    function yt(t, e, n) {
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
              (t && mt(n, t, e)) ||
              (e && mt(n, e, t)) ||
              (t && yt(n, t, e)) ||
              (e && yt(n, e, t))
            );
          })(c, a))
      );
    }
    function St(t, e) {
      var n = t.mergeWithSibling(e),
        o = Hr()._normalizedNodes;
      return (o.add(t.__key), o.add(e.__key), n);
    }
    function Tt(t) {
      var e,
        n,
        o = t;
      if ("" !== o.__text || !o.isSimpleText() || o.isUnmergeable()) {
        for (
          ;
          null !== (e = o.getPreviousSibling()) &&
          Do(e) &&
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
          Do(n) &&
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
    function Nt(t) {
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
          Do(_o10))
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
          (t[kt] = Do(t) ? t.__text.length : t.getTextContentSize()));
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
      var o = Ht.get(n);
      Do(o) && ((It = o.getFormat()), (Pt = o.getStyle()), (Ft = n));
    }
    var Bt,
      zt,
      $t,
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
          var _t16 = Gl(n, Wt);
          Qt(_t16, 0, _t16.length - 1, null);
        }
        if (void 0 !== n) {
          for (var _t17 of le(n).values()) {
            var _e27 = ae(_t17);
            (Xt(_t17, null), null !== _e27 && _e27.remove());
          }
          Ii(Jt, wt, Bt, n, "destroyed");
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
        return null === n || (Vi(n) && null === n.__dir) ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function re(t) {
      var e = al().createElement("div");
      return (
        e.setAttribute("data-lexical-slot", t),
        (e.style.display = "none"),
        e
      );
    }
    function se(t, e, n) {
      e || "false" === t.contentEditable
        ? $l(n, At)
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
          (fe(_r1, Ml(t, _n21, At)), Lt(_l2), ce(t, _o12, e, _n21), (s += Dt));
        }
      }
      return (Lt(r), (Dt = o), s);
    }
    function le(t) {
      return Xl(t) && null !== t.__slots ? t.__slots : ql;
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
        var _t18 = _ref20[0];
        var _e29 = _ref20[1];
        if (!r.has(_t18)) {
          var _t19 = ae(_e29);
          (Xt(_e29, null), null !== _t19 && _t19.remove());
        }
      }
      var s = Dt,
        i = Rt();
      var l = "",
        c = null;
      var a = fs(e);
      for (var _ref22 of r) {
        var _t20 = _ref22[0];
        var _s6 = _ref22[1];
        {
          var _r10 = o.get(_t20);
          var _i7 = void 0 !== _r10 ? ae(_r10) : null;
          Dt = "";
          var _u = Rt();
          if (null === _i7) {
            _i7 = re(_t20);
            var _o13 = null;
            for (var _t21 of n.children)
              if (!_t21.hasAttribute("data-lexical-slot")) {
                _o13 = _t21;
                break;
              }
            (n.insertBefore(_i7, _o13), fe(_s6, Ml(e, _i7, At)));
          } else
            _r10 === _s6
              ? pe(_s6, _i7)
              : (void 0 !== _r10 && Xt(_r10, _i7), fe(_s6, Ml(e, _i7, At)));
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
      var o = Ht.get(e);
      if ((void 0 === o && t(60), null !== n)) {
        var _t23 = Wt.get(e);
        if (void 0 !== _t23) {
          var _r11 = jt.get(e);
          if (void 0 !== _r11) {
            var _s7 = Ql(_t23) ? _t23.__slotHost : null,
              _i8 = Ql(o) ? o.__slotHost : null,
              _l3 = _t23.__parent !== o.__parent || _s7 !== _i8,
              _c2 = null !== _i8 && _r11.parentElement !== n.element;
            if (_l3 || _c2) return (n.insertChild(_r11), pe(e, n.element));
          }
        }
      }
      var r = Gt.$createDOM(o, At);
      if (
        ((function (t, e, n) {
          var o = n._keyToDOMMap;
          (ui(e, n, t), o.set(t, e));
        })(e, r, At),
        Do(o)
          ? r.setAttribute("data-lexical-text", "true")
          : fs(o) &&
            (r.setAttribute("data-lexical-decorator", "true"),
            Bl(r, { captureSelection: !0 })),
        cs(o))
      ) {
        var _t24 = o.__indent,
          _e30 = o.__size;
        (oe(r, o), 0 !== _t24 && ee(r, _t24));
        var _n22 = le(o),
          _s8 = _n22.size > 0 ? ie(o, r, _n22) : "";
        if (0 === _e30)
          ((r.__lexicalTextContent = _s8),
            (r.__lexicalFirstTextKey = null),
            (Dt += _s8),
            _n22.size > 0 && (r.__lexicalSlotTextLength = _s8.length));
        else {
          var _t25 = Dt,
            _i9 = _e30 - 1;
          if ((de(Gl(o, Ht), o, 0, _i9, Ml(o, r, At)), "" !== _s8)) {
            var _e31 = r.__lexicalTextContent || "";
            ((r.__lexicalTextContent = _s8 + _e31), (Dt = _t25 + _s8 + _e31));
          }
          _n22.size > 0 && (r.__lexicalSlotTextLength = _s8.length);
        }
        var _i0 = o.__format;
        (0 !== _i0 && ne(r, _i0), o.isInline() || he(null, o, r));
      } else {
        var _t26 = o.getTextContent();
        if (fs(o)) {
          var _t27 = o.decorate(At, Mt);
          (null !== _t27 && me(e, _t27), (r.contentEditable = "false"));
          var _n23 = le(o);
          _n23.size > 0 && ie(o, r, _n23);
        }
        Dt += _t26;
      }
      return (
        null !== n && n.insertChild(r),
        Gt.$decorateDOM(o, null, r, At),
        Ot(o),
        Ii(Jt, wt, Bt, o, "created"),
        r
      );
    }
    function de(e, n, o, r, s) {
      var i = Dt,
        l = Rt();
      ((Dt = ""), (It = null), (Pt = null), (Ft = null));
      var c = o;
      for (; c <= r; ++c) {
        var _t28 = Rt();
        fe(e[c], s);
        var _n24 = Ht.get(e[c]);
        (null !== _n24 && Do(_n24)
          ? null === It &&
            ((It = _n24.getFormat()), (Pt = _n24.getStyle()), (Ft = _n24.__key))
          : cs(_n24) && c < r && !_n24.isInline() && (Dt += v),
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
      var _o$element$__lexicalL;
      var o = Ml(e, n, At),
        r =
          (_o$element$__lexicalL = o.element.__lexicalLastChildKind) != null
            ? _o$element$__lexicalL
            : null,
        s = (function (t, e) {
          if (t) {
            var _n25 = t.__last;
            if (_n25) {
              var _t29 = e.get(_n25);
              if (_t29)
                return Ts(_t29)
                  ? "line-break"
                  : fs(_t29) && _t29.isInline()
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
                  var _t30 = Ht.get(o);
                  if (void 0 === _t30) return null;
                  ((o = _t30.__prev), s++);
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
                    _a2 = 0;
                  for (; null !== _o14 && _a2 < _f2; ) {
                    var _t31 = Ht.get(_o14);
                    if (void 0 === _t31) break;
                    var _e33 = Rt();
                    (pe(_o14, l),
                      Do(_t31) &&
                        null === It &&
                        ((It = _t31.getFormat()),
                        (Pt = _t31.getStyle()),
                        (Ft = _t31.__key)),
                      Lt(_e33),
                      (_o14 = _t31.__next),
                      _a2++);
                  }
                  var _d2 = "";
                  for (_o14 = _i1, _a2 = 0; null !== _o14 && _a2 < _f2; ) {
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
                      _a2 < _f2 - 1 &&
                        cs(_e34) &&
                        !_e34.isInline() &&
                        (_d2 += v),
                      (_o14 = _e34.__next),
                      _a2++);
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
                    var m = new Set(p),
                      y = new Set(g),
                      x = [];
                    var C = 0,
                      S = 0;
                    for (; C < u && S < l; )
                      if (g[S] === p[C])
                        (x.push({ key: g[S], kind: "reconcile" }), C++, S++);
                      else if (y.has(p[C])) {
                        if (m.has(g[S])) return !1;
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
                      if ("reconcile" === _t38.kind) pe(_t38.key, o.element);
                      else if ("destroy" === _t38.kind) Xt(_t38.key, o.element);
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
                          o.withBefore(_e36 != null ? _e36 : o.before),
                        );
                      }
                      if ("destroy" !== _t38.kind) {
                        var _e37 = Ht.get(_t38.key);
                        _e37 &&
                          Do(_e37) &&
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
                      var _o15 = void 0;
                      if (cs(_n28)) {
                        var _r13 = At._keyToDOMMap.get(g[_e38]),
                          _s1 = _r13 && _r13.__lexicalTextContent;
                        ("string" != typeof _s1 && t(350, _n28.getType()),
                          (_o15 = _s1));
                      } else _o15 = _n28.getTextContent();
                      ((N += _o15),
                        _e38 < l - 1 &&
                          cs(_n28) &&
                          !_n28.isInline() &&
                          (N += v));
                    }
                    var k = r.__lexicalSlotTextLength || 0,
                      E = k > 0 ? s.slice(k) : s;
                    return (
                      (r.__lexicalTextContent = E.slice(0, E.length - T) + N),
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
                var _r14 = Vt || $t.has(_n29) || zt.has(_n29),
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
                  ((Dt += _o17), void 0 !== _r15 && Kt(_r15));
                }
                (Do(_e40)
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
            var _t40 = e.__first,
              _r16 = n.__first;
            if (_t40 === _r16) pe(_t40, l);
            else {
              var _e41 = Se(_t40),
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
                    _t40 +
                    "}.";
                  throw new Error(_s12);
                }
                throw o;
              }
              Xt(_t40, null);
            }
            var _s13 = Ht.get(_r16);
            Do(_s13) &&
              null === It &&
              ((It = _s13.getFormat()),
              (Pt = _s13.getStyle()),
              (Ft = _s13.__key));
          } else {
            var _r17 = Gl(e, Wt),
              _c3 = Gl(n, Ht);
            if (
              (_r17.length !== s && t(227), _c3.length !== i && t(228), 0 === s)
            )
              0 !== i && de(_c3, n, 0, i - 1, o);
            else if (0 === i) {
              if (0 !== s) {
                var _t41 =
                  null == o.after &&
                  null == o.before &&
                  0 === le(n).size &&
                  null == o.element.__lexicalLineBreak;
                (Qt(_r17, 0, s - 1, _t41 ? null : l),
                  _t41 && (l.textContent = ""));
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
                  var _t42 = e[f],
                    _o18 = n[d],
                    _r18 = Rt();
                  if (_t42 === _o18) ((u = ye(pe(_o18, s.element))), f++, d++);
                  else {
                    if ((void 0 === a && (a = xe(n, d)), void 0 === c))
                      c = xe(e, f);
                    else if (!c.has(_t42)) {
                      (f++, Lt(_r18));
                      continue;
                    }
                    if (!a.has(_t42)) {
                      ((u = ye(Se(_t42))),
                        Xt(_t42, s.element),
                        f++,
                        c["delete"](_t42),
                        Lt(_r18));
                      continue;
                    }
                    if (c.has(_o18)) {
                      var _t43 = Ki(At, _o18);
                      (_t43 !== u &&
                        s
                          .withBefore(u != null ? u : s.before)
                          .insertChild(_t43),
                        (u = ye(pe(_o18, s.element))),
                        f++,
                        d++);
                    } else
                      (fe(_o18, s.withBefore(u != null ? u : s.before)), d++);
                  }
                  var _i10 = Ht.get(_o18);
                  (null !== _i10 && Do(_i10)
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
              })(n, _r17, _c3, s, i, o);
          }
          ((c.__lexicalTextContent = Dt),
            (c.__lexicalFirstTextKey = Ft),
            (Dt = r + Dt));
        })(e, n, Ml(n, o, At)),
        Vi(n) ||
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
          var _t44 = Ht.get(_r19);
          if (void 0 === _t44) {
            _r19 = null;
            break;
          }
          if (_t44.__parent === _e43) break;
          _r19 = _t44.__parent;
        }
        if (null !== _r19 && !n.has(_r19)) {
          var _t45 = Ht.get(o);
          if (Do(_t45))
            return ((It = _t45.getFormat()), void (Pt = _t45.getStyle()));
        }
      }
      e.__lexicalFirstTextKey = Ft;
    }
    function pe(e, n) {
      var o = Wt.get(e);
      var r = Ht.get(e);
      (void 0 !== o && void 0 !== r) || t(61);
      var s = Vt || $t.has(e) || zt.has(e),
        i = Ki(At, e);
      if (o === r && !s) {
        var _e44;
        if (cs(o)) {
          var _n31 = i.__lexicalTextContent;
          ("string" != typeof _n31 && t(355, o.getType()),
            (_e44 = _n31),
            Kt(i));
        } else _e44 = o.getTextContent();
        return ((Dt += _e44), i);
      }
      if (
        (o !== r && s && Ii(Jt, wt, Bt, r, "updated"),
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
        var _c4 = s && (le(r).size > 0 || le(o).size > 0) ? ue(o, r, i) : "";
        if (s) {
          var _t46 = Dt;
          if ((ge(o, r, i), hs(r) || r.isInline() || he(0, r, i), "" !== _c4)) {
            var _e45 = i.__lexicalTextContent || "";
            ((i.__lexicalTextContent = _c4 + _e45),
              (Dt = _t46 + _c4 + _e45),
              (i.__lexicalSlotTextLength = _c4.length));
          } else
            (le(r).size > 0 || le(o).size > 0) &&
              (i.__lexicalSlotTextLength = 0);
        } else {
          var _e46 = i.__lexicalTextContent;
          ("string" != typeof _e46 && t(356, o.getType()), (Dt += _e46), Kt(i));
        }
        if (
          (Vt || r.__dir !== o.__dir || r.__parent !== o.__parent) &&
          (oe(i, r), hs(r) && !Vt)
        )
          for (var _t47 of r.getChildren())
            if (cs(_t47)) {
              oe(Ki(At, _t47.getKey()), _t47);
            }
      } else {
        var _t48 = r.getTextContent();
        if (fs(r)) {
          var _t49 = r.decorate(At, Mt);
          (null !== _t49 && me(e, _t49),
            s && (le(r).size > 0 || le(o).size > 0) && ue(o, r, i));
        }
        Dt += _t48;
      }
      if (!qt && hs(r)) {
        var _t50 = r.getLatest();
        if (_t50.__cachedText !== Dt) {
          var _e47 = _t50.getWritable();
          ((_e47.__cachedText = Dt), (r = _e47));
        }
      }
      return (Gt.$decorateDOM(r, o, i, At), Ot(r), i);
    }
    function me(t, e) {
      var n = At._pendingDecorators;
      var o = At._decorators;
      if (null === n) {
        if (o[t] === e) return;
        n = hi(At);
      }
      n[t] = e;
    }
    function ye(t) {
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
        (Bt = At._listeners.mutation),
        (zt = r),
        ($t = s),
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
          return (e(zt.keys()), e($t), t);
        })()));
      var i = new Map();
      return (
        (Jt = i),
        pe("root", null),
        (At = void 0),
        (wt = void 0),
        (zt = void 0),
        ($t = void 0),
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
      Be = Te("SET_TEXT_FORMAT_COMMAND"),
      ze = Te("UNDO_COMMAND"),
      $e = Te("REDO_COMMAND"),
      We = Te("KEYDOWN_COMMAND"),
      Ue = Te("KEY_ARROW_RIGHT_COMMAND"),
      He = Te("MOVE_TO_END"),
      je = Te("KEY_ARROW_LEFT_COMMAND"),
      Ye = Te("MOVE_TO_START"),
      Je = Te("KEY_ARROW_UP_COMMAND"),
      Ge = Te("KEY_ARROW_DOWN_COMMAND"),
      Ve = Te("KEY_ENTER_COMMAND"),
      qe = Te("KEY_SPACE_COMMAND"),
      Xe = Te("KEY_BACKSPACE_COMMAND"),
      Qe = Te("KEY_ESCAPE_COMMAND"),
      Ze = Te("KEY_DELETE_COMMAND"),
      tn = Te("KEY_TAB_COMMAND"),
      en = Te("INSERT_TAB_COMMAND"),
      nn = Te("INDENT_CONTENT_COMMAND"),
      on = Te("OUTDENT_CONTENT_COMMAND"),
      rn = Te("DROP_COMMAND"),
      sn = Te("FORMAT_ELEMENT_COMMAND"),
      ln = Te("DRAGSTART_COMMAND"),
      cn = Te("DRAGOVER_COMMAND"),
      an = Te("DRAGEND_COMMAND"),
      un = Te("COPY_COMMAND"),
      fn = Te("CUT_COMMAND"),
      dn = Te("SELECT_ALL_COMMAND"),
      hn = Te("CLEAR_EDITOR_COMMAND"),
      gn = Te("CLEAR_HISTORY_COMMAND"),
      _n = Te("CAN_REDO_COMMAND"),
      pn = Te("CAN_UNDO_COMMAND"),
      mn = Te("FOCUS_COMMAND"),
      yn = Te("BLUR_COMMAND"),
      xn = Te("KEY_MODIFIER_COMMAND");
    function Cn(t) {
      var e = new Map();
      return {
        dispose: function dispose() {
          for (var _t51 of e.values()) _t51.dispose();
          e.clear();
        },
        register: function register(n, o) {
          var r = e.get(n);
          void 0 === r &&
            ((r = { dispose: t(n, o), holders: new Set() }), e.set(n, r));
          var _s14 = function s() {
            var t = e.get(n);
            t &&
              t.holders["delete"](_s14) &&
              0 === t.holders.size &&
              (e["delete"](n), t.dispose());
          };
          return (r.holders.add(_s14), _s14);
        },
      };
    }
    function Sn(t, e, n, o) {
      return (
        t.addEventListener(e, n, o),
        t.removeEventListener.bind(t, e, n, o)
      );
    }
    var Tn = Object.freeze({}),
      Nn = [
        [
          "keydown",
          function (t, e) {
            var n = e._inputState;
            ((n.lastKeyDownTimeStamp = t.timeStamp),
              (n.lastKeyCode = t.key),
              "Backspace" !== t.key && Pn(n));
            if (e.isComposing()) return;
            Li(e, We, t);
          },
        ],
        [
          "pointerdown",
          function (t, e) {
            var n = yl(t),
              o = t.pointerType;
            Cl(n) &&
              "touch" !== o &&
              "pen" !== o &&
              0 === t.button &&
              ss(e, function () {
                Wl(n, e) || (e._inputState.isSelectionChangeFromMouseDown = !0);
              });
          },
        ],
        [
          "compositionstart",
          function (t, e) {
            Li(e, be, t);
          },
        ],
        [
          "compositionend",
          function (t, e) {
            var n = e._inputState;
            s
              ? (n.compositionPhase = "ending-firefox")
              : l || (!a && !d)
                ? Li(e, Me, t)
                : ((n.compositionPhase = "ending-safari"),
                  (n.compositionEndData = t.data));
          },
        ],
        [
          "input",
          function (t, e) {
            t.stopPropagation();
            var n = e._inputState;
            (Pn(n),
              ss(
                e,
                function () {
                  Rn(t, e) || e.dispatchCommand(Oe, t);
                },
                { event: t },
              ),
              (n.unprocessedBeforeInputData = null));
          },
        ],
        [
          "click",
          function (t, e) {
            ss(e, function () {
              var n = _r(),
                o = nl(ji(e)),
                r = pr();
              if (o)
                if (Uo(n)) {
                  var _t52 = n.anchor,
                    _e50 = _t52.getNode();
                  "element" === _t52.type &&
                    0 === _t52.offset &&
                    n.isCollapsed() &&
                    !hs(_e50) &&
                    1 === _i().getChildrenSize() &&
                    _e50.getTopLevelElementOrThrow().isEmpty() &&
                    null !== r &&
                    n.is(r) &&
                    (o.removeAllRanges(), (n.dirty = !0));
                } else if (
                  "touch" === t.pointerType ||
                  "pen" === t.pointerType
                ) {
                  var _n34 = dl(o, e._rootElement).anchorNode;
                  if (xl(_n34) || Qs(_n34)) {
                    pi(gr(r, o, e, t));
                  }
                }
              Li(e, ke, t);
            });
          },
        ],
        ["cut", Tn],
        ["copy", Tn],
        ["dragstart", Tn],
        ["dragover", Tn],
        ["dragend", Tn],
        ["paste", Tn],
        ["focus", Tn],
        ["blur", Tn],
        ["drop", Tn],
      ];
    i &&
      Nn.push([
        "beforeinput",
        function (t, e) {
          return (function (t, e) {
            var n = t.inputType;
            if ("deleteCompositionText" === n || (s && Ri(e))) return;
            if ("insertCompositionText" === n) return;
            ss(
              e,
              function () {
                Rn(t, e) || Li(e, Ee, t);
              },
              { event: t },
            );
          })(t, e);
        },
      ]);
    var vn = new WeakMap(),
      kn = new WeakMap(),
      En = Cn(function (t) {
        return (
          t.addEventListener("selectionchange", Yn),
          function () {
            return t.removeEventListener("selectionchange", Yn);
          }
        );
      });
    function On(t, e, n, o, r, s) {
      var l = t.anchor,
        c = t.focus,
        a = l.getNode(),
        u = Hr();
      var f;
      if (void 0 !== s) f = s;
      else {
        var _t53 = nl(ji(u));
        f = null !== _t53 ? dl(_t53, u._rootElement) : null;
      }
      var d = null !== f ? f.anchorNode : null,
        h = l.key,
        g = u.getElementByKey(h),
        _ = n.length;
      return (
        h !== c.key ||
        !Do(a) ||
        (((!r &&
          (!i || u._inputState.lastBeforeInputInsertTextTimeStamp < o + 50)) ||
          (a.isDirty() && _ < 2) ||
          xi(n)) &&
          l.offset !== c.offset &&
          !a.isComposing()) ||
        Xs(a) ||
        (a.isDirty() && _ > 1) ||
        ((r || !i) && null !== g && !a.isComposing() && d !== wl(a, g, u)) ||
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
            r = qs(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!o.canInsertTextBefore() && !e.isComposing()) ||
                r ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (Do(e) || (cs(e) && e.isInline())) &&
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
    function bn(t, e) {
      return (
        Qs(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function Mn(e, n, o) {
      var _dl = dl(e, n._rootElement),
        r = _dl.anchorNode,
        s = _dl.anchorOffset,
        i = _dl.focusNode,
        l = _dl.focusOffset,
        c = n._inputState;
      (c.isSelectionChangeFromDOMUpdate &&
        ((c.isSelectionChangeFromDOMUpdate = !1),
        bn(r, s) && bn(i, l) && !c.postDeleteSelectionToRestore)) ||
        ss(n, function () {
          if (!o) return void pi(null);
          if (!Ys(n, r, i)) return;
          var a = _r();
          if (c.postDeleteSelectionToRestore && Uo(a) && a.isCollapsed()) {
            var _t54 = a.anchor,
              _e51 = c.postDeleteSelectionToRestore.anchor;
            ((_t54.key === _e51.key && _t54.offset === _e51.offset + 1) ||
              (1 === _t54.offset &&
                _e51.getNode().is(_t54.getNode().getPreviousSibling()))) &&
              ((a = c.postDeleteSelectionToRestore.clone()), pi(a));
          }
          if (((c.postDeleteSelectionToRestore = null), Uo(a))) {
            var _o23 = a.anchor,
              _u3 = _o23.getNode();
            if (a.isCollapsed()) {
              "Range" === e.type && r === i && (a.dirty = !0);
              var _s15 = ji(n).event,
                _l5 = _s15 ? _s15.timeStamp : performance.now(),
                _c$collapsedSelection = c.collapsedSelectionFormat,
                _f3 = _c$collapsedSelection.format,
                _d3 = _c$collapsedSelection.style,
                _h3 = _c$collapsedSelection.offset,
                _g3 = _c$collapsedSelection.key,
                _4 = _c$collapsedSelection.timeStamp,
                _p2 = _i(),
                _m = !1 === n.isComposing() && "" === _p2.getTextContent();
              if (_l5 < _4 + 200 && _o23.offset === _h3 && _o23.key === _g3)
                An(a, _f3, _d3);
              else if ("text" === _o23.type) (Do(_u3) || t(141), wn(a, _u3));
              else if ("element" === _o23.type && !_m) {
                cs(_u3) || t(259);
                var _e52 = _o23.getNode();
                _e52.isEmpty()
                  ? (function (t, e) {
                      var n = e.getTextFormat(),
                        o = e.getTextStyle();
                      An(t, n, o);
                    })(a, _e52)
                  : An(a, a.format, "");
              }
            } else {
              var _t55 = _o23.key,
                _e53 = a.focus.key,
                _n35 = a.getNodes(),
                _r21 = _n35.length,
                _i11 = a.isBackward(),
                _c5 = _i11 ? l : s,
                _u4 = _i11 ? s : l,
                _f4 = _i11 ? _e53 : _t55,
                _d4 = _i11 ? _t55 : _e53;
              var _h4 = 2047,
                _g4 = !1;
              for (var _t56 = 0; _t56 < _r21; _t56++) {
                var _e54 = _n35[_t56],
                  _o24 = _e54.getTextContentSize();
                if (
                  Do(_e54) &&
                  0 !== _o24 &&
                  !(
                    (0 === _t56 && _e54.__key === _f4 && _c5 === _o24) ||
                    (_t56 === _r21 - 1 && _e54.__key === _d4 && 0 === _u4)
                  ) &&
                  ((_g4 = !0), (_h4 &= _e54.getFormat()), 0 === _h4)
                )
                  break;
              }
              a.format = _g4 ? _h4 : 0;
            }
          }
          Li(n, Ne, void 0);
        });
    }
    function An(t, e, n) {
      (t.format === e && t.style === n) ||
        ((t.format = e), (t.style = n), (t.dirty = !0));
    }
    function wn(t, e) {
      An(t, e.getFormat(), e.getStyle());
    }
    function Dn(t) {
      if (!t.getTargetRanges) return null;
      var e = t.getTargetRanges();
      return 0 === e.length ? null : e[0];
    }
    function In(t) {
      var e = Hr()._inputState.lastKeyCode;
      if (null == t || t.length <= 1 || null == e) return;
      var n =
        1 === e.length ? e : "Enter" === e ? "\n" : "Tab" === e ? "\t" : null;
      if (!n) return;
      var o = _r();
      if (!Uo(o) || !o.isCollapsed()) return;
      var r = o.anchor.getNode();
      if (!Do(r)) return;
      var s = o.anchor.offset;
      if (r.getTextContentSize() === s) {
        var _t57 = r.getNextSibling();
        if ("\n" === n) {
          if (Ts(_t57)) _t57.selectEnd();
          else if (!_t57) {
            var _t58 = Jl(r, ur),
              _e55 = _t58 && _t58.getNextSibling();
            cs(_e55) && _e55.selectStart();
          }
        } else
          "\t" === n
            ? Ro(_t57) && _t57.selectEnd()
            : Do(_t57) && _t57.getTextContent()[0] === n && _t57.select(1, 1);
      } else r.getTextContent()[s] === n && r.select(s + 1, s + 1);
    }
    function Pn(t) {
      ((t.isInsertTextAfterHandledSelectionCommand = !1),
        null !== t.handledSelectionCommandTimeoutId &&
          (clearTimeout(t.handledSelectionCommandTimeoutId),
          (t.handledSelectionCommandTimeoutId = null)));
    }
    function Fn(t) {
      (Pn(t),
        (t.isInsertTextAfterHandledSelectionCommand = !0),
        (t.handledSelectionCommandTimeoutId = setTimeout(function () {
          return Pn(t);
        }, 0)));
    }
    function Rn(t, e) {
      var n = yl(t);
      if (xl(n) && Wl(n, e)) return !0;
      var o = e.getRootElement();
      if (null === o) return !1;
      var r = ml(o.ownerDocument);
      return null !== r && o.contains(r) && Wl(r, e);
    }
    function Ln(e) {
      var _ref23;
      var n = e.inputType,
        o = Dn(e),
        r = Hr(),
        s = r._inputState,
        i = _r();
      if (
        "insertText" === n &&
        e.data &&
        s.isInsertTextAfterHandledSelectionCommand
      ) {
        if ((Pn(s), e.preventDefault(), Uo(i) && !i.isCollapsed())) {
          var _t59 = i.isBackward() ? i.anchor : i.focus;
          (i.anchor.set(_t59.key, _t59.offset, _t59.type),
            i.focus.set(_t59.key, _t59.offset, _t59.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === i) {
          var _t60 = pr();
          if (!Uo(_t60)) return !0;
          pi(_t60.clone());
        }
        if (Uo(i)) {
          var _n36 = i.anchor.key === i.focus.key;
          if (
            (function (t, e) {
              return (
                "MediaLast" === t.lastKeyCode && e < t.lastKeyDownTimeStamp + 30
              );
            })(s, e.timeStamp) &&
            r.isComposing() &&
            _n36
          ) {
            if (
              (ii(null),
              (s.lastKeyDownTimeStamp = 0),
              setTimeout(function () {
                ss(r, function () {
                  ii(null);
                });
              }, 30),
              Uo(i))
            ) {
              var _e56 = i.anchor.getNode();
              (_e56.markDirty(), Do(_e56) || t(142), wn(i, _e56));
            }
          } else {
            if (
              (ii(null),
              l &&
                null !== o &&
                !o.collapsed &&
                (i.applyDOMRange(o), !i.isCollapsed()))
            )
              return (e.preventDefault(), i.removeText(), !0);
            e.preventDefault();
            var _t61 = i.anchor.getNode(),
              _c6 = _t61.getTextContent(),
              _a3 = _t61.canInsertTextAfter(),
              _u5 = 0 === i.anchor.offset && i.focus.offset === _c6.length;
            var _d5 = f && _n36 && !_u5 && _a3;
            if (
              (_d5 && i.isCollapsed() && (_d5 = !fs(Fi(i.anchor, !0))), !_d5)
            ) {
              Li(r, Ae, !0);
              var _t62 = _r();
              f &&
                Uo(_t62) &&
                _t62.isCollapsed() &&
                ((s.postDeleteSelectionToRestore = _t62),
                setTimeout(function () {
                  return (s.postDeleteSelectionToRestore = null);
                }));
            }
          }
          return !0;
        }
      }
      if (!Uo(i)) return !0;
      var c = e.data;
      (null !== s.unprocessedBeforeInputData &&
        Ni(!1, r, s.unprocessedBeforeInputData),
        (i.dirty && null === s.unprocessedBeforeInputData) ||
          !i.isCollapsed() ||
          hs(i.anchor.getNode()) ||
          null === o ||
          i.applyDOMRange(o),
        (s.unprocessedBeforeInputData = null));
      var a = i.anchor,
        u = i.focus,
        d = a.getNode(),
        h = u.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === c) (e.preventDefault(), Li(r, we, !1));
        else if (c === v) (e.preventDefault(), Li(r, De, void 0));
        else if (null == c && e.dataTransfer) {
          var _t63 = e.dataTransfer.getData("text/plain");
          (e.preventDefault(), i.insertRawText(_t63));
        } else
          null != c && On(i, o, c, e.timeStamp, !0)
            ? (e.preventDefault(), Li(r, Ie, c), In(c))
            : (s.unprocessedBeforeInputData = c);
        return ((s.lastBeforeInputInsertTextTimeStamp = e.timeStamp), !0);
      }
      switch ((e.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          Li(r, Ie, e);
          In(
            (_ref23 = e.dataTransfer
              ? e.dataTransfer.getData("text/plain")
              : null) != null
              ? _ref23
              : e.data,
          );
          break;
        case "insertFromComposition": {
          var _t64 = s.hadOrphanedCompositionEvents;
          s.hadOrphanedCompositionEvents = !1;
          var _n37 = r._compositionKey;
          (ii(null), _t64 || Li(r, Ie, e), $n(_n37));
          break;
        }
        case "insertLineBreak":
          (ii(null), Li(r, we, !1));
          break;
        case "insertParagraph":
          (ii(null),
            s.isInsertLineBreak && !l
              ? ((s.isInsertLineBreak = !1), Li(r, we, !1))
              : Li(r, De, void 0));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          Li(r, Pe, e);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || cs(t) || cs(e) || !qs(t) || !qs(e);
          })(d, h) && Li(r, Fe, e);
          break;
        case "deleteByDrag":
          ($i(lo), Li(r, Fe, e));
          break;
        case "deleteByCut":
          Li(r, Fe, e);
          break;
        case "deleteContent":
          Li(r, Ae, !1);
          break;
        case "deleteWordBackward":
          Li(r, Re, !0);
          break;
        case "deleteWordForward":
          Li(r, Re, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          Li(r, Le, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          Li(r, Le, !1);
          break;
        case "formatStrikeThrough":
          Li(r, Ke, "strikethrough");
          break;
        case "formatBold":
          Li(r, Ke, "bold");
          break;
        case "formatItalic":
          Li(r, Ke, "italic");
          break;
        case "formatUnderline":
          Li(r, Ke, "underline");
          break;
        case "historyUndo":
          Li(r, ze, void 0);
          break;
        case "historyRedo":
          Li(r, $e, void 0);
      }
      return !0;
    }
    function Kn(t) {
      var e = Hr(),
        n = e._inputState,
        o = _r(),
        r = t.data,
        l = Dn(t);
      var c = !1;
      if (null != r && Uo(o)) {
        var _a4 = nl(ji(e)),
          _u6 = null !== _a4 ? dl(_a4, e._rootElement) : null,
          _d6 =
            "insertCompositionText" === t.inputType &&
            "ending-firefox" !== n.compositionPhase &&
            !e.isComposing();
        _d6 && (n.hadOrphanedCompositionEvents = !0);
        var _h5 = o.anchor.getNode(),
          _g5 =
            "insertCompositionText" === t.inputType &&
            "ending-firefox" !== n.compositionPhase &&
            e.isComposing() &&
            Do(_h5) &&
            Xs(_h5);
        if (!_d6 && !_g5 && On(o, l, r, t.timeStamp, !1, _u6)) {
          if (((c = !0), "ending-firefox" === n.compositionPhase)) {
            var _t65 = Wn(e, r);
            if (((n.compositionPhase = "idle"), _t65))
              return ($i(ao), mi(), !0);
          }
          var _l6 = o.anchor.getNode();
          if (null === _a4 || null === _u6) return !0;
          var _d7 = o.isBackward(),
            _h6 = _d7 ? o.anchor.offset : o.focus.offset,
            _g6 = _d7 ? o.focus.offset : o.anchor.offset;
          (i &&
            !o.isCollapsed() &&
            Do(_l6) &&
            null !== _u6.anchorNode &&
            _l6.getTextContent().slice(0, _h6) +
              r +
              _l6.getTextContent().slice(_h6 + _g6) ===
              Ti(_u6.anchorNode)) ||
            Li(e, Ie, r);
          var _5 = r.length;
          (s &&
            _5 > 1 &&
            "insertCompositionText" === t.inputType &&
            !e.isComposing() &&
            ((o.anchor.offset -= _5),
            (o._cachedNodes = null),
            (o._cachedIsBackward = null)),
            f && e.isComposing() && ((n.lastKeyDownTimeStamp = 0), ii(null)));
        }
      }
      if (!c) {
        (Ni(!1, e, null !== r ? r : void 0),
          "ending-firefox" === n.compositionPhase &&
            (Wn(e, r || void 0), $i(ao), (n.compositionPhase = "idle")));
      }
      return (mi(), !0);
    }
    function Bn(t) {
      var e = Hr(),
        n = e._inputState,
        o = _r();
      if (Uo(o) && !e.isComposing()) {
        ((n.compositionPhase = "composing"),
          (n.hadOrphanedCompositionEvents = !1));
        var _r22 = o.anchor,
          _s16 = o.anchor.getNode();
        if (
          (ii(_r22.key),
          $i(co),
          t.timeStamp < n.lastKeyDownTimeStamp + 30 ||
            "element" === _r22.type ||
            !o.isCollapsed() ||
            (!f &&
              (_s16.getFormat() !== o.format ||
                (Do(_s16) && _s16.getStyle() !== o.style))) ||
            (Do(_s16) &&
              (Xs(_s16) ||
                (0 === _r22.offset && !_s16.canInsertTextBefore()) ||
                (_r22.offset === _s16.getTextContentSize() &&
                  !_s16.canInsertTextAfter()))))
        ) {
          Li(e, Ie, k);
          var _t66 = _r();
          Uo(_t66) && ii(_t66.anchor.key);
        }
      }
      return !0;
    }
    function zn(t) {
      var e = Hr();
      return (
        (e._inputState.compositionPhase = "idle"),
        Wn(e, t.data),
        $i(ao),
        !0
      );
    }
    function $n(t) {
      if (null === t) return;
      var e = ci(t);
      if (!Do(e) || "text" === e.getType() || Xs(e) || !e.isAttached()) return;
      var n = _r(),
        o = Uo(n) && n.anchor.key === t ? n.anchor.offset : null,
        r = wo(e.getTextContent());
      if (
        (r.setFormat(e.getFormat()),
        r.setStyle(e.getStyle()),
        e.replace(r),
        null !== o)
      ) {
        var _t67 = Math.min(o, r.getTextContentSize());
        r.select(_t67, _t67);
      }
    }
    function Wn(t, e) {
      var n = t._compositionKey;
      if ((ii(null), null !== n && null != e)) {
        if ("" === e) {
          var _e57 = ci(n),
            _o25 = t.getElementByKey(n),
            _r23 = null !== _o25 && Do(_e57) ? wl(_e57, _o25, t) : null;
          if (null !== _r23 && null !== _r23.nodeValue && Do(_e57)) {
            var _n38 = nl(ji(t)),
              _o26 = _n38 && dl(_n38, t._rootElement);
            var _s17 = null,
              _i12 = null;
            (null !== _o26 &&
              _o26.anchorNode === _r23 &&
              ((_s17 = _o26.anchorOffset), (_i12 = _o26.focusOffset)),
              vi(_e57, _r23.nodeValue, _s17, _i12, !0));
          }
          return ($n(n), !1);
        }
        if ("\n" === e[e.length - 1]) {
          var _e58 = _r();
          if (Uo(_e58) || jo(_e58)) {
            if (Uo(_e58)) {
              var _t68 = _e58.focus;
              _e58.anchor.set(_t68.key, _t68.offset, _t68.type);
            }
            return (Li(t, Ve, null), $n(n), !1);
          }
        }
        var _o27 = ci(n);
        if (null !== _o27 && Do(_o27) && Xs(_o27)) {
          _o27.markDirty();
          var _t69 = _r(),
            _r24 = _o27.getTextContentSize(),
            _s18 =
              Uo(_t69) && _t69.anchor.key === n ? _t69.anchor.offset : _r24;
          return (_o27.select(_s18, _s18).insertText(e), !0);
        }
      }
      return (Ni(!0, t, e), $n(n), !1);
    }
    function Un(t) {
      var e = Hr(),
        n = e._inputState;
      if (null == t.key) return !0;
      if ("ending-safari" === n.compositionPhase) {
        var _o28 = wi(t);
        if (
          (_o28 &&
            ss(e, function () {
              Wn(e, n.compositionEndData);
            }),
          (n.compositionPhase = "idle"),
          (n.compositionEndData = ""),
          _o28)
        )
          return !0;
      }
      if (
        (function (t) {
          return bi(t, "ArrowRight", { shiftKey: "any" });
        })(t)
      )
        Li(e, Ue, t);
      else if (
        (function (t) {
          return bi(
            t,
            "ArrowRight",
            babelHelpers["extends"]({}, Mi, { shiftKey: "any" }),
          );
        })(t)
      )
        Li(e, He, t);
      else if (
        (function (t) {
          return bi(t, "ArrowLeft", { shiftKey: "any" });
        })(t)
      )
        Li(e, je, t);
      else if (
        (function (t) {
          return bi(
            t,
            "ArrowLeft",
            babelHelpers["extends"]({}, Mi, { shiftKey: "any" }),
          );
        })(t)
      )
        Li(e, Ye, t);
      else if (
        (function (t) {
          return bi(t, "ArrowUp", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        Li(e, Je, t);
      else if (
        (function (t) {
          return bi(t, "ArrowDown", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        Li(e, Ge, t);
      else if (
        (function (t) {
          return bi(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
            shiftKey: !0,
          });
        })(t)
      )
        ((n.isInsertLineBreak = !0), Li(e, Ve, t));
      else if (
        (function (t) {
          return " " === t.key;
        })(t)
      )
        Li(e, qe, t);
      else if (
        (function (t) {
          return r && bi(t, "o", { ctrlKey: !0 });
        })(t)
      )
        (t.preventDefault(), (n.isInsertLineBreak = !0), Li(e, we, !0));
      else if (
        (function (t) {
          return bi(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
          });
        })(t)
      )
        ((n.isInsertLineBreak = !1), Li(e, Ve, t));
      else if (
        (function (t) {
          return (
            bi(t, "Backspace", { shiftKey: "any" }) ||
            (r && bi(t, "h", { ctrlKey: !0 }))
          );
        })(t)
      )
        wi(t) ? Li(e, Xe, t) && Fn(n) : (t.preventDefault(), Li(e, Ae, !0));
      else if (
        (function (t) {
          return "Escape" === t.key;
        })(t)
      )
        Li(e, Qe, t);
      else if (
        (function (t) {
          return bi(t, "Delete", {}) || (r && bi(t, "d", { ctrlKey: !0 }));
        })(t)
      )
        !(function (t) {
          return "Delete" === t.key;
        })(t)
          ? (t.preventDefault(), Li(e, Ae, !1))
          : Li(e, Ze, t);
      else if (
        (function (t) {
          return bi(t, "Backspace", Ai);
        })(t)
      )
        (t.preventDefault(), Li(e, Re, !0));
      else if (
        (function (t) {
          return bi(t, "Delete", Ai);
        })(t)
      )
        (t.preventDefault(), Li(e, Re, !1));
      else if (
        (function (t) {
          return r && bi(t, "Backspace", { metaKey: !0 });
        })(t)
      )
        (t.preventDefault(), Li(e, Le, !0));
      else if (
        (function (t) {
          return (
            r &&
            (bi(t, "Delete", { metaKey: !0 }) || bi(t, "k", { ctrlKey: !0 }))
          );
        })(t)
      )
        (t.preventDefault(), Li(e, Le, !1));
      else if (
        (function (t) {
          return bi(t, "b", Mi);
        })(t)
      )
        (t.preventDefault(), Li(e, Ke, "bold"));
      else if (
        (function (t) {
          return bi(t, "u", Mi);
        })(t)
      )
        (t.preventDefault(), Li(e, Ke, "underline"));
      else if (
        (function (t) {
          return bi(t, "i", Mi);
        })(t)
      )
        (t.preventDefault(), Li(e, Ke, "italic"));
      else if (
        (function (t) {
          return bi(t, "Tab", { shiftKey: "any" });
        })(t)
      )
        Li(e, tn, t);
      else if (
        (function (t) {
          return bi(t, "z", Mi);
        })(t)
      )
        (t.preventDefault(), Li(e, ze, void 0));
      else if (
        (function (t) {
          if (r) return bi(t, "z", { metaKey: !0, shiftKey: !0 });
          return (
            bi(t, "y", { ctrlKey: !0 }) ||
            bi(t, "z", { ctrlKey: !0, shiftKey: !0 })
          );
        })(t)
      )
        (t.preventDefault(), Li(e, $e, void 0));
      else {
        var _o29 = e._editorState._selection;
        !(function (t) {
          return bi(t, "a", Mi);
        })(t)
          ? null === _o29 ||
            Uo(_o29) ||
            (!(function (t) {
              return bi(t, "c", Mi);
            })(t)
              ? (function (t) {
                  return bi(t, "x", Mi);
                })(t) && (t.preventDefault(), Li(e, fn, t))
              : (t.preventDefault(), Li(e, un, t)))
          : (t.preventDefault(), Li(e, dn, t) && Fn(n));
      }
      return (
        (function (t) {
          return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey;
        })(t) && e.dispatchCommand(xn, t),
        !0
      );
    }
    function Hn(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    var jn = new Map();
    function Yn(t) {
      var e = ol(t.target);
      if (null === e) return;
      var n = zi(t.target);
      var o = null,
        r = null;
      var s = null !== n ? kn.get(n) : void 0;
      if (null !== n) {
        if (void 0 !== s) {
          var _t70 = s.editors;
          var _n39 = s.hasShadowEditor;
          if (void 0 === _n39) {
            _n39 = !1;
            for (var _e59 of _t70)
              if (
                null !== _e59._rootElement &&
                rl(_e59._rootElement.getRootNode())
              ) {
                _n39 = !0;
                break;
              }
            s.hasShadowEditor = _n39;
          }
          if (_n39) {
            var _n40 = null,
              _s19 = null;
            for (var _i13 of _t70) {
              var _t71 = _i13._rootElement;
              if (null === _t71) continue;
              var _l7 = dl(e, _t71).anchorNode;
              if (null !== _l7 && Gs(_l7) === _i13) {
                if (rl(_t71.getRootNode())) {
                  ((o = _i13), (r = _l7));
                  break;
                }
                null === _n40 && ((_n40 = _i13), (_s19 = _l7));
              }
            }
            null === o && null !== _n40 && ((o = _n40), (r = _s19));
          } else {
            var _t72 = e.anchorNode;
            null === _t72 ||
              (xl(_t72) && null !== _t72.shadowRoot) ||
              ((o = Gs(_t72)), null !== o && (r = _t72));
          }
        }
        if (null === o) {
          var _t73 = ml(n);
          o = null !== _t73 ? Gs(_t73) : null;
        }
      }
      if (null === o) return;
      if (o._inputState.isSelectionChangeFromMouseDown) {
        if (void 0 !== s)
          for (var _t74 of s.editors)
            _t74._inputState.isSelectionChangeFromMouseDown = !1;
        ss(o, function () {
          var n = pr(),
            s = r != null ? r : dl(e, o._rootElement).anchorNode;
          if (xl(s) || Qs(s)) {
            pi(gr(n, e, o, t));
          }
        });
      }
      var i = Ci(o),
        l = i[i.length - 1],
        c = l._key,
        a = jn.get(c),
        u = a || l;
      (u !== o && Mn(e, u, !1),
        Mn(e, o, !0),
        o !== l ? jn.set(c, o) : a && jn["delete"](c));
    }
    function Jn(t) {
      t._lexicalHandled = !0;
    }
    function Gn(t) {
      return !0 === t._lexicalHandled;
    }
    var Vn = function Vn() {};
    function qn(e) {
      var n = vn.get(e);
      if (void 0 === n) return void Vn();
      var o = kn.get(n);
      if (void 0 === o) return void Vn();
      vn["delete"](e);
      var r = Vs(e);
      Js(r)
        ? (!(function (t) {
            if (null !== t._parentEditor) {
              var _e60 = Ci(t),
                _n41 = _e60[_e60.length - 1]._key;
              jn.get(_n41) === t && jn["delete"](_n41);
            } else jn["delete"](t._key);
          })(r),
          o.editors["delete"](r),
          (o.hasShadowEditor = void 0),
          (e.__lexicalEditor = null))
        : r && t(198);
      var s = Hn(e);
      for (var _t75 = 0; _t75 < s.length; _t75++) s[_t75]();
      e.__lexicalEventHandles = [];
    }
    function Xn(e, n, o) {
      $r();
      var r = e.__key,
        s = e.getParent();
      if (null === s) return void (null !== Zl(e) && t(367, r, String(Zl(e))));
      var i = (function (t) {
        var e = _r();
        if (!Uo(e) || !cs(t)) return e;
        var n = e.anchor,
          o = e.focus,
          r = n.getNode(),
          s = o.getNode();
        Ui(r, t) && n.set(t.__key, 0, "element");
        Ui(s, t) && o.set(t.__key, 0, "element");
        return e;
      })(e);
      var l = !1;
      if (Uo(i) && n) {
        var _t76 = i.anchor,
          _n42 = i.focus;
        (_t76.key === r &&
          (xr(_t76, e, s, e.getPreviousSibling(), e.getNextSibling()),
          (l = !0)),
          _n42.key === r &&
            (xr(_n42, e, s, e.getPreviousSibling(), e.getNextSibling()),
            (l = !0)));
      } else jo(i) && n && e.isSelected() && e.selectPrevious();
      if (Uo(i) && n && !l) {
        var _t77 = e.getIndexWithinParent();
        (oi(e), mr(i, s, _t77, -1));
      } else oi(e);
      (o || Vi(s) || s.canBeEmpty() || !s.isEmpty() || Xn(s, n),
        n && i && hs(s) && s.isEmpty() && s.selectEnd());
    }
    var Qn = Symbol["for"]("ephemeral");
    function Zn(t) {
      return t[Qn] || !1;
    }
    var to = { configurable: !0, enumerable: !1, value: void 0, writable: !0 };
    var _eo5 = (function () {
      function eo(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", to),
          Object.defineProperty(this, kt, to),
          ni(this, t));
      }
      eo.getType = function getType() {
        var _jl = jl(this),
          e = _jl.ownNodeType;
        return (void 0 === e && t(64, this.name), e);
      };
      eo.clone = function clone(e) {
        t(65, this.name);
      };
      var _proto6 = eo.prototype;
      _proto6.$config = function $config() {
        return {};
      };
      _proto6.config = function config(t, e) {
        var _ref24;
        var n = e["extends"] || Vl(this.constructor);
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
          var _e61 = ci(t);
          if (null === _e61) break;
          t = null !== _e61.__parent ? _e61.__parent : Zl(_e61);
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
        if (Do(this)) return n;
        if (
          Uo(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t78 = this.getParent();
          if (fs(this) && this.isInline() && _t78) {
            var _n43 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t78.is(_n43.getNode()) &&
              _n43.offset === _t78.getChildrenSize() &&
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
        return null === t ? null : ci(t);
      };
      _proto6.getParentOrThrow = function getParentOrThrow() {
        var e = this.getParent();
        return (null === e && t(66, this.__key), e);
      };
      _proto6.getTopLevelElement = function getTopLevelElement() {
        var e = this;
        for (; null !== e; ) {
          var _n44 = e.getParent();
          if (Vi(_n44) || null !== Zl(e))
            return (cs(e) || (e === this && fs(e)) || t(194), e);
          e = _n44;
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
        return null === t ? null : ci(t);
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
        return null === t ? null : ci(t);
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
          o = e && n ? qc(e, n) : null;
        return o ? o.commonAncestor : null;
      };
      _proto6.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto6.isBefore = function isBefore(e) {
        var n = qc(this, e);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === Jc(n)
              : ("same" !== n.type && "ancestor" !== n.type && t(279), !1)))
        );
      };
      _proto6.isParentOf = function isParentOf(t) {
        return Ui(t, this);
      };
      _proto6.getNodesBetween = function getNodesBetween(e) {
        var n = this.isBefore(e),
          o = [],
          r = new Set();
        var s = this;
        for (; null !== s; ) {
          var _i14 = s.__key;
          if ((r.has(_i14) || (r.add(_i14), o.push(s)), s === e)) break;
          var _l8 = cs(s) ? (n ? s.getFirstChild() : s.getLastChild()) : null;
          if (null !== _l8) {
            s = _l8;
            continue;
          }
          var _c7 = n ? s.getNextSibling() : s.getPreviousSibling();
          if (null !== _c7) {
            s = _c7;
            continue;
          }
          var _a5 = s.getParentOrThrow();
          if ((r.has(_a5.__key) || o.push(_a5), _a5 === e)) break;
          var _u7 = null,
            _f5 = _a5;
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
        if (Zn(this)) return this;
        var e = ci(this.__key);
        return (null === e && t(113), e);
      };
      _proto6.getWritable = function getWritable() {
        if (Zn(this)) return this;
        $r();
        var t = Ur(),
          e = Hr(),
          n = t._nodeMap,
          o = this.__key,
          r = this.getLatest(),
          s = e._cloneNotNeeded,
          i = _r();
        if ((null !== i && i.setCachedNodes(null), s.has(o))) return (si(r), r);
        var l = Fl(r);
        return (s.add(o), si(l), n.set(o, l), l);
      };
      _proto6.getTextContent = function getTextContent() {
        return dc(this);
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
        return new _B2(t);
      };
      _proto6.exportDOM = function exportDOM(t) {
        return { element: this.createDOM(t._config, t) };
      };
      _proto6.exportJSON = function exportJSON() {
        var t = this.__state ? this.__state.toJSON() : void 0;
        return babelHelpers["extends"]({ type: this.__type, version: 1 }, t);
      };
      eo.importJSON = function importJSON(e) {
        t(18, this.name);
      };
      _proto6.updateFromJSON = function updateFromJSON(t) {
        return (function (t, e) {
          var n = t.getWritable(),
            o = e.$;
          var r = o;
          for (var _t79 of gt(n).flatKeys)
            _t79 in e &&
              ((void 0 !== r && r !== o) ||
                (r = babelHelpers["extends"]({}, o)),
              (r[_t79] = e[_t79]));
          return ((n.__state || r) && ht(t).updateFromJSON(r), n);
        })(this, t);
      };
      eo.transform = function transform() {
        return null;
      };
      _proto6.remove = function remove(t) {
        Xn(this, !0, t);
      };
      _proto6.replace = function replace(e, n) {
        $r();
        var o = _r();
        (null !== o && (o = o.clone()), Qi(this, e));
        var r = this.getLatest(),
          s = this.__key,
          i = e.__key,
          l = e.getWritable(),
          c = this.getParentOrThrow().getWritable(),
          a = c.__size,
          u = l.getParent(),
          f = null !== u ? l.getIndexWithinParent() : -1;
        (oi(l), null !== u && Uo(o) && mr(o, u, f, -1));
        var d = r.getPreviousSibling(),
          h = r.getNextSibling(),
          g = r.__prev,
          _ = r.__next,
          p = r.__parent;
        if ((Xn(r, !1, !0), null === d)) c.__first = i;
        else {
          d.getWritable().__next = i;
        }
        if (((l.__prev = g), null === h)) c.__last = i;
        else {
          h.getWritable().__prev = i;
        }
        ((l.__next = _), (l.__parent = p), (c.__size = a));
        var m = 0;
        n &&
          ((cs(this) && cs(l)) || t(139),
          (m = l.getChildrenSize()),
          l.splice(m, 0, this.getChildren()));
        var y = rc(this);
        if (y.length > 0) {
          (Xl(this) && Xl(l)) || t(368, this.__key, l.__key);
          for (var _t80 of y) {
            var _e62 = sc(this, _t80);
            null !== _e62 && (pc(this, _t80), _c(l, _t80, _e62));
          }
        }
        if (Uo(o)) {
          pi(o);
          var _t81 = o.anchor,
            _e63 = o.focus;
          (_t81.key === s &&
            (n && "element" === _t81.type
              ? _t81.set(l.__key, m + _t81.offset, "element")
              : zo(_t81, l)),
            _e63.key === s &&
              (n && "element" === _e63.type
                ? _e63.set(l.__key, m + _e63.offset, "element")
                : zo(_e63, l)));
        }
        return (li() === s && ii(i), l);
      };
      _proto6.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        ($r(), Qi(this, t));
        var n = this.getWritable(),
          o = t.getWritable();
        mc(this.getParentOrThrow());
        var r = o.getParent(),
          s = _r();
        var i = !1,
          l = !1;
        if (null !== r) {
          var _n45 = t.getIndexWithinParent();
          if (Uo(s)) {
            var _t82 = r.__key,
              _e64 = s.anchor,
              _o30 = s.focus;
            ((i =
              "element" === _e64.type &&
              _e64.key === _t82 &&
              _e64.offset === _n45 + 1),
              (l =
                "element" === _o30.type &&
                _o30.key === _t82 &&
                _o30.offset === _n45 + 1));
          }
          (oi(o), e && Uo(s) && mr(s, r, _n45, -1));
        } else oi(o);
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
          e && Uo(s))
        ) {
          var _t83 = this.getIndexWithinParent();
          mr(s, a, _t83 + 1);
          var _e65 = a.__key;
          (i && s.anchor.set(_e65, _t83 + 2, "element"),
            l && s.focus.set(_e65, _t83 + 2, "element"));
        }
        return t;
      };
      _proto6.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        ($r(), Qi(this, t));
        var n = this.getWritable(),
          o = t.getWritable();
        mc(this.getParentOrThrow());
        var r = o.__key,
          s = _r(),
          i = o.getParent(),
          l = null !== i ? o.getIndexWithinParent() : -1;
        (oi(o), null !== i && e && Uo(s) && mr(s, i, l, -1));
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
          e && Uo(s))
        ) {
          mr(s, this.getParentOrThrow(), f);
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
        $r();
        var n = tc(this);
        if (null !== n) return n.selectPrevious(t, e);
        var o = this.getPreviousSibling(),
          r = this.getParentOrThrow();
        if (null === o) return r.select(0, 0);
        if (cs(o)) return o.select();
        if (!Do(o)) {
          var _t84 = o.getIndexWithinParent() + 1;
          return r.select(_t84, _t84);
        }
        return o.select(t, e);
      };
      _proto6.selectNext = function selectNext(t, e) {
        $r();
        var n = tc(this);
        if (null !== n) return n.selectNext(t, e);
        var o = this.getNextSibling(),
          r = this.getParentOrThrow();
        if (null === o) return r.select();
        if (cs(o)) return o.select(0, 0);
        if (!Do(o)) {
          var _t85 = o.getIndexWithinParent();
          return r.select(_t85, _t85);
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
      return eo;
    })();
    function no(t) {
      return t instanceof _eo5;
    }
    var oo = "history-merge",
      ro = "collaboration",
      so = "skip-scroll-into-view",
      io = "skip-dom-selection",
      lo = "skip-selection-focus",
      co = "composition-start",
      ao = "composition-end",
      uo = "!important";
    function fo(t) {
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
        var _a6 = t[_f6];
        if (s) "*" === _a6 && "/" === t[_f6 + 1] && ((s = !1), _f6++);
        else if (i) (-1 === u && (u = _f6), (i = !1));
        else if (null === r) {
          if ("/" !== _a6 || "*" !== t[_f6 + 1]) {
            if ('"' !== _a6 && "'" !== _a6) {
              if ("(" !== _a6) {
                if (")" !== _a6) {
                  if (l || ":" !== _a6 || 0 !== c) {
                    if (";" === _a6 && 0 === c) {
                      -1 !== u &&
                        (l ? (o += t.slice(u, _f6)) : (n += t.slice(u, _f6)),
                        (u = -1));
                      var _r25 = n.trim(),
                        _s20 = o.trim();
                      ("" !== _r25 && "" !== _s20 && (e[_r25] = _s20),
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
            } else (-1 === u && (u = _f6), (r = _a6));
          } else
            (-1 !== u &&
              (l ? (o += t.slice(u, _f6)) : (n += t.slice(u, _f6)), (u = -1)),
              (s = !0),
              _f6++);
        } else
          (-1 === u && (u = _f6),
            "\\" === _a6 ? (i = !0) : _a6 === r && (r = null));
      }
      -1 !== u && (l ? (o += t.slice(u, a)) : (n += t.slice(u, a)));
      var f = n.trim(),
        d = o.trim();
      return ("" !== f && "" !== d && (e[f] = d), e);
    }
    function ho(t, e, n) {
      var o = n.trimEnd(),
        r = o.length - 10;
      r >= 0 && o.slice(r).toLowerCase() === uo
        ? t.setProperty(e, o.slice(0, r).trim(), "important")
        : t.setProperty(e, n, "");
    }
    function go(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var o = fo(n),
        r = fo(e);
      for (var _e66 in r) (delete o[_e66], ho(t, _e66, r[_e66]));
      for (var _e67 in o) t.removeProperty(_e67);
    }
    function _o(t, e) {
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
    function po(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function mo(t, e, n, o, r) {
      var s = o.classList;
      var i = Di(r, "base");
      (void 0 !== i && s.add.apply(s, i),
        (i = Di(r, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== i &&
        (8 & n && 4 & n
          ? ((l = !0), c || s.add.apply(s, i))
          : c && s.remove.apply(s, i));
      for (var _t86 in A) {
        var _o31 = A[_t86];
        if (((i = Di(r, _t86)), void 0 !== i))
          if (n & _o31) {
            if (l && ("underline" === _t86 || "strikethrough" === _t86)) {
              e & _o31 && s.remove.apply(s, i);
              continue;
            }
            (0 === (e & _o31) ||
              (c && "underline" === _t86) ||
              "strikethrough" === _t86) &&
              s.add.apply(s, i);
          } else e & _o31 && s.remove.apply(s, i);
      }
    }
    function yo(t, e, n) {
      var o = n.isComposing(),
        r = t + (o ? N : ""),
        i = Ol(),
        l = bl(i).$getDOMSlot(n, e, i),
        c = l.getFirstChild();
      if (null === c || c.nodeType !== Node.TEXT_NODE)
        return void l.insertChild(al().createTextNode(r));
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
            _t87 = _ref25[0],
            _e68 = _ref25[1],
            _n46 = _ref25[2];
          (0 !== _e68 && a.deleteData(_t87, _e68), a.insertData(_t87, _n46));
        } else a.nodeValue = r;
    }
    function xo(t, e, n, o, r, s) {
      yo(r, t, e);
      var i = s.theme.text;
      void 0 !== i && mo(0, 0, o, t, i);
    }
    function Co(t, e) {
      var n = al().createElement(e);
      return (n.appendChild(t), n);
    }
    function So(t) {
      return null != t && !0 === t.__isInlineFormattable;
    }
    var _To2 = (function (_eo) {
      function To(t, e) {
        var _this;
        if (t === void 0) {
          t = "";
        }
        ((_this = _eo.call(this, e) || this),
          (_this.__text = t),
          (_this.__format = 0),
          (_this.__style = ""),
          (_this.__mode = 0),
          (_this.__detail = 0));
        return _this;
      }
      babelHelpers.inheritsLoose(To, _eo);
      To.getType = function getType() {
        return "text";
      };
      To.clone = function clone(t) {
        return new To(t.__text, t.__key);
      };
      var _proto7 = To.prototype;
      _proto7.afterCloneFrom = function afterCloneFrom(t) {
        (_eo.prototype.afterCloneFrom.call(this, t),
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
        return this.__key === li();
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
        return ei(this.getLatest().__format, t, e);
      };
      _proto7.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto7.isInline = function isInline() {
        return !0;
      };
      _proto7.createDOM = function createDOM(t, e) {
        var n = this.__format,
          o = _o(0, n),
          r = po(0, n),
          s = null === o ? r : o,
          i = al().createElement(s);
        var l = i;
        (this.hasFormat("code") && i.setAttribute("spellcheck", "false"),
          null !== o && ((l = al().createElement(r)), i.appendChild(l)));
        xo(l, this, 0, n, this.__text, t);
        var c = this.__style;
        return ("" !== c && go(i.style, c), i);
      };
      _proto7.updateDOM = function updateDOM(e, n, o) {
        var r = this.__text,
          s = e.__format,
          i = this.__format,
          l = _o(0, s),
          c = _o(0, i),
          a = po(0, s),
          u = po(0, i);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _e69 = n.firstChild;
          null == _e69 && t(48);
          var _s21 = al().createElement(u);
          return (xo(_s21, this, 0, i, r, o), n.replaceChild(_s21, _e69), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && t(49)),
          yo(r, f, this));
        var d = o.theme.text;
        void 0 !== d && s !== i && mo(0, s, i, f, d);
        var h = e.__style,
          g = this.__style;
        return (h !== g && go(n.style, g, h), !1);
      };
      To.importDOM = function importDOM() {
        return {
          "#text": function text() {
            return { conversion: Oo, priority: 0 };
          },
          b: function b() {
            return { conversion: vo, priority: 0 };
          },
          code: function code() {
            return { conversion: Ao, priority: 0 };
          },
          em: function em() {
            return { conversion: Ao, priority: 0 };
          },
          i: function i() {
            return { conversion: Ao, priority: 0 };
          },
          mark: function mark() {
            return { conversion: Ao, priority: 0 };
          },
          s: function s() {
            return { conversion: Ao, priority: 0 };
          },
          span: function span() {
            return { conversion: No, priority: 0 };
          },
          strong: function strong() {
            return { conversion: Ao, priority: 0 };
          },
          sub: function sub() {
            return { conversion: Ao, priority: 0 };
          },
          sup: function sup() {
            return { conversion: Ao, priority: 0 };
          },
          u: function u() {
            return { conversion: Ao, priority: 0 };
          },
        };
      };
      To.importJSON = function importJSON(t) {
        return wo().updateFromJSON(t);
      };
      _proto7.updateFromJSON = function updateFromJSON(t) {
        return _eo.prototype.updateFromJSON
          .call(this, t)
          .setTextContent(t.text)
          .setFormat(t.format)
          .setDetail(t.detail)
          .setMode(t.mode)
          .setStyle(t.style);
      };
      _proto7.exportDOM = function exportDOM(e) {
        var _eo$prototype$exportD = _eo.prototype.exportDOM.call(this, e),
          n = _eo$prototype$exportD.element;
        return (
          xl(n) || t(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = Co(n, "b")),
          this.hasFormat("italic") && (n = Co(n, "i")),
          this.hasFormat("strikethrough") && (n = Co(n, "s")),
          this.hasFormat("underline") && (n = Co(n, "u")),
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
          _eo.prototype.exportJSON.call(this),
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
        var e = ei(this.getFormat(), t, null);
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
        $r();
        var n = t,
          o = e;
        var r = _r(),
          s = this.getTextContent(),
          i = this.__key;
        if ("string" == typeof s) {
          var _t88 = s.length;
          (void 0 === n && (n = _t88), void 0 === o && (o = _t88));
        } else ((n = 0), (o = 0));
        if (!Uo(r)) return fr(i, n, i, o, "text", "text");
        {
          var _t89 = li();
          ((_t89 !== r.anchor.key && _t89 !== r.focus.key) || ii(i),
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
        if (o && Uo(c)) {
          var _e70 = t + i;
          c.setTextNodeRange(r, _e70, r, _e70);
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
        $r();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var o = e.__key,
          r = li(),
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
        for (var _e71 = 0, _o32 = 0; _e71 < s && _o32 <= l; _o32++) {
          var _r26 = t[_o32];
          _r26 > _e71 && (i.push(n.slice(_e71, _r26)), (_e71 = _r26));
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
          m = null;
        var y = _r();
        if (Uo(y)) {
          var _ref26 = y.isBackward()
              ? [y.focus, y.anchor]
              : [y.anchor, y.focus],
            _t90 = _ref26[0],
            _e72 = _ref26[1];
          ("text" === _t90.type && _t90.key === o && (p = _t90),
            "text" === _e72.type && _e72.key === o && (m = _e72));
        }
        e.isSegmented()
          ? ((f = wo(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = xt(e, f)),
            (_ = !0))
          : (f = e.setTextContent(a));
        var x = [f];
        for (var _t91 = 1; _t91 < c; _t91++) {
          var _n47 = wo(i[_t91]);
          ((_n47.__format = d),
            (_n47.__style = h),
            (_n47.__detail = g),
            (_n47.__state = xt(e, _n47)));
          var _s22 = _n47.__key;
          (r === o && ii(_s22), x.push(_n47));
        }
        var C = p ? p.offset : null,
          S = m ? m.offset : null;
        var T = 0;
        for (var _t92 of x) {
          if (!p && !m) break;
          var _e73 = T + _t92.getTextContentSize();
          if (
            (null !== p &&
              null !== C &&
              C <= _e73 &&
              C >= T &&
              (p.set(_t92.getKey(), C - T, "text"), C < _e73 && (p = null)),
            null !== m && null !== S && S <= _e73 && S >= T)
          ) {
            m.set(_t92.getKey(), S - T, "text");
            break;
          }
          T = _e73;
        }
        if (null !== u) {
          !(function (t) {
            var e = t.getPreviousSibling(),
              n = t.getNextSibling();
            null !== e && si(e);
            null !== n && si(n);
          })(this);
          var _t93 = u.getWritable(),
            _e74 = this.getIndexWithinParent();
          (_
            ? (_t93.splice(_e74, 0, x), this.remove())
            : _t93.splice(_e74, 1, x),
            Uo(y) && mr(y, u, _e74, c - 1));
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
        li() === r && ii(o);
        var l = _r();
        if (Uo(l)) {
          var _t94 = l.anchor,
            _s23 = l.focus;
          (null !== _t94 && _t94.key === r && Cr(_t94, n, o, e, i),
            null !== _s23 && _s23.key === r && Cr(_s23, n, o, e, i));
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
      return babelHelpers.createClass(To, [
        {
          key: "__isInlineFormattable",
          get: function get() {
            return !0;
          },
        },
      ]);
    })(_eo5);
    function No(t) {
      return { forChild: Io(t.style), node: null };
    }
    function vo(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: Io(e.style, n ? void 0 : "bold"), node: null };
    }
    var ko = new WeakMap();
    function Eo(t) {
      if (!xl(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function Oo(e) {
      var n = e;
      null === e.parentElement && t(129);
      var o = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var o = [t];
          for (; null !== n && void 0 === (e = ko.get(n)) && !Eo(n); )
            (o.push(n), (n = n.parentNode));
          var r = void 0 === e ? n : e;
          for (var _t95 = 0; _t95 < o.length; _t95++) ko.set(o[_t95], r);
          return r;
        })(n)
      )
        return { node: kr(o) };
      if (((o = o.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === o))
        return { node: null };
      if (" " === o[0]) {
        var _t96 = n,
          _e75 = !0;
        for (; null !== _t96 && null !== (_t96 = bo(_t96, !1)); ) {
          var _n48 = _t96.textContent || "";
          if (_n48.length > 0) {
            (/[ \t\n]$/.test(_n48) && (o = o.slice(1)), (_e75 = !1));
            break;
          }
        }
        _e75 && (o = o.slice(1));
      }
      if (" " === o[o.length - 1]) {
        var _t97 = n,
          _e76 = !0;
        for (; null !== _t97 && null !== (_t97 = bo(_t97, !0)); ) {
          if (
            (_t97.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e76 = !1;
            break;
          }
        }
        _e76 && (o = o.slice(0, o.length - 1));
      }
      return "" === o ? { node: null } : { node: wo(o) };
    }
    function bo(t, e) {
      var n = t;
      for (;;) {
        var _t98 = void 0;
        for (; null === (_t98 = e ? n.nextSibling : n.previousSibling); ) {
          var _t99 = n.parentElement;
          if (null === _t99) return null;
          n = _t99;
        }
        if (((n = _t98), xl(n))) {
          var _t100 = n.style.display;
          if (
            ("" === _t100 && !Nl(n)) ||
            ("" !== _t100 && !_t100.startsWith("inline"))
          )
            return null;
        }
        var _o33 = n;
        for (; null !== (_o33 = e ? n.firstChild : n.lastChild); ) n = _o33;
        if (Qs(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var Mo = {
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
    function Ao(t) {
      var e = Mo[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: Io(t.style, e), node: null };
    }
    function wo(t) {
      if (t === void 0) {
        t = "";
      }
      return Xi(new _To2(t));
    }
    function Do(t) {
      return t instanceof _To2;
    }
    function Io(t, e) {
      var n = t.fontWeight,
        o = t.textDecoration.split(" "),
        r = "700" === n || "bold" === n,
        s = o.includes("line-through"),
        i = "italic" === t.fontStyle,
        l = o.includes("underline"),
        c = t.verticalAlign;
      return function (t) {
        return Do(t) || So(t)
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
    var _Po = (function (_To) {
      function Po(t) {
        var _this2;
        ((_this2 = _To.call(this, "\t", t) || this), (_this2.__detail = 2));
        return _this2;
      }
      babelHelpers.inheritsLoose(Po, _To);
      Po.getType = function getType() {
        return "tab";
      };
      Po.clone = function clone(t) {
        return new Po(t.__key);
      };
      Po.importDOM = function importDOM() {
        return null;
      };
      var _proto8 = Po.prototype;
      _proto8.createDOM = function createDOM(t) {
        var e = _To.prototype.createDOM.call(this, t),
          n = Di(t.theme, "tab");
        if (void 0 !== n) {
          var _e$classList;
          (_e$classList = e.classList).add.apply(_e$classList, n);
        }
        return e;
      };
      Po.importJSON = function importJSON(t) {
        return Fo().updateFromJSON(t);
      };
      _proto8.setTextContent = function setTextContent(t) {
        return _To.prototype.setTextContent.call(this, "\t");
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
      return Po;
    })(_To2);
    function Fo() {
      return Xi(new _Po());
    }
    function Ro(t) {
      return t instanceof _Po;
    }
    var _Lo = (function () {
      function Lo(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto9 = Lo.prototype;
      _proto9.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto9.isBefore = function isBefore(t) {
        if (this.key === t.key) return this.offset < t.offset;
        return Yc(ia(Xc(this, "next")), ia(Xc(t, "next"))) < 0;
      };
      _proto9.getNode = function getNode() {
        var e = ci(this.key);
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
            (li() === s && ii(t),
            null !== r &&
              (r.setCachedNodes(null),
              Uo(r) && (r._cachedIsBackward = null),
              (r.dirty = !0))));
      };
      return Lo;
    })();
    function Ko(t, e, n) {
      return new _Lo(t, e, n);
    }
    function Bo(t, e) {
      var n = e.__key,
        o = t.offset,
        r = "element";
      if (Do(e)) {
        r = "text";
        var _t101 = e.getTextContentSize();
        o > _t101 && (o = _t101);
      } else if (!cs(e)) {
        var _t102 = e.getNextSibling();
        if (Do(_t102)) ((n = _t102.__key), (o = 0), (r = "text"));
        else {
          var _t103 = e.getParent();
          _t103 && ((n = _t103.__key), (o = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, o, r);
    }
    function zo(t, e) {
      if (cs(e)) {
        var _n49 = e.getLastDescendant();
        cs(_n49) || Do(_n49) ? Bo(t, _n49) : Bo(t, e);
      } else Bo(t, e);
    }
    var _$o = (function () {
      function $o(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto0 = $o.prototype;
      _proto0.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto0.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto0.is = function is(t) {
        if (!jo(t)) return !1;
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
        return new $o(new Set(this._nodes));
      };
      _proto0.extract = function extract() {
        return this.getNodes();
      };
      _proto0.insertRawText = function insertRawText(t) {};
      _proto0.insertText = function insertText() {};
      _proto0.insertNodes = function insertNodes(t) {
        var e = this.getNodes().filter(function (t) {
            return null === Zl(t);
          }),
          n = e.length;
        if (0 === n) return;
        var o = e[n - 1];
        var r;
        if (Do(o)) r = o.select();
        else {
          var _t104 = o.getIndexWithinParent() + 1;
          r = o.getParentOrThrow().select(_t104, _t104);
        }
        r.insertNodes(t);
        for (var _t105 = 0; _t105 < n; _t105++) e[_t105].remove();
      };
      _proto0.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = this._nodes,
          n = [];
        for (var _t106 of e) {
          var _e77 = ci(_t106);
          null !== _e77 && n.push(_e77);
        }
        return (zr() || (this._cachedNodes = n), n);
      };
      _proto0.getTextContent = function getTextContent() {
        var t = this.getNodes();
        var e = "";
        for (var _n50 = 0; _n50 < t.length; _n50++)
          e += t[_n50].getTextContent();
        return e;
      };
      _proto0.deleteNodes = function deleteNodes() {
        var t = this.getNodes().filter(function (t) {
          return null === Zl(t);
        });
        if ((_r() || pr()) === this && t[0]) {
          var _e78 = Ic(t[0], "next");
          Zc(Hc(_e78, _e78));
        }
        for (var _e79 of t) _e79.remove();
        Wo();
      };
      return $o;
    })();
    function Wo() {
      var t = _i();
      if (t.isEmpty()) {
        var _e80 = bs();
        (t.append(_e80), _e80.select());
      }
    }
    function Uo(t) {
      return t instanceof _Ho;
    }
    var _Ho = (function () {
      function Ho(t, e, n, o) {
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
      var _proto1 = Ho.prototype;
      _proto1.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto1.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto1.is = function is(t) {
        return (
          !!Uo(t) &&
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
          for (var _n51 of t)
            if (Mc(_n51)) {
              var _t107 = _n51.origin;
              0 === e.length ? r.add(_t107) : (s.add(_t107), e.push(_t107));
            } else {
              var _t108 = _n51.origin;
              (cs(_t108) && s.has(_t108)) || e.push(_t108);
            }
          o && e.push(o.caret.origin);
          if (
            bc(t.focus) &&
            cs(t.focus.origin) &&
            null === t.focus.getNodeAtCaret()
          )
            for (
              var _n52 = Lc(t.focus.origin, "previous");
              Mc(_n52) &&
              r.has(_n52.origin) &&
              !_n52.origin.isEmpty() &&
              _n52.origin.is(e[e.length - 1]);
              _n52 = Bc(_n52)
            )
              (r["delete"](_n52.origin), e.pop());
          for (; e.length > 1; ) {
            var _t109 = e[e.length - 1];
            if (!cs(_t109) || s.has(_t109) || _t109.isEmpty() || r.has(_t109))
              break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n53 = ia(t.anchor),
              _o34 = ia(t.anchor.getFlipped()),
              _r27 = function _r27(t) {
                return Oc(t) ? t.origin : t.getNodeAtCaret();
              },
              _s24 =
                _r27(_n53) ||
                _r27(_o34) ||
                (t.anchor.getNodeAtCaret() ? _n53.origin : _o34.origin);
            e.push(_s24);
          }
          return e;
        })(aa(ea(this), "next"));
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
          _Vo = Vo(this),
          i = _Vo[0],
          l = _Vo[1];
        var c = "",
          a = !0;
        for (var _u8 = 0; _u8 < t.length; _u8++) {
          var _f7 = t[_u8];
          if (cs(_f7) && !_f7.isInline()) {
            a || (c += "\n");
            var _t110 = "";
            for (var _e81 of rc(_f7)) {
              var _n54 = sc(_f7, _e81);
              null !== _n54 && (_t110 += _n54.getTextContent());
            }
            "" !== _t110 ? ((c += _t110), (a = !1)) : (a = !_f7.isEmpty());
          } else if (((a = !1), Do(_f7))) {
            var _t111 = _f7.getTextContent();
            (_f7 === e
              ? _f7 === n
                ? ("element" === o.type &&
                    "element" === r.type &&
                    r.offset !== o.offset) ||
                  (_t111 = i < l ? _t111.slice(i, l) : _t111.slice(l, i))
                : (_t111 = s ? _t111.slice(i) : _t111.slice(l))
              : _f7 === n &&
                (_t111 = s ? _t111.slice(0, l) : _t111.slice(0, i)),
              (c += _t111));
          } else
            (!fs(_f7) && !Ts(_f7)) ||
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
          Nt(this));
      };
      _proto1.clone = function clone() {
        var t = this.anchor,
          e = this.focus;
        return new Ho(
          Ko(t.key, t.offset, t.type),
          Ko(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto1.toggleFormat = function toggleFormat(t) {
        ((this.format = ei(this.format, t, null)), (this.dirty = !0));
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
                i = wo();
              if ((i.setFormat(n), i.setStyle(o), Ms(s))) s.splice(0, 0, [i]);
              else if (null !== s) {
                var _t112 = Vi(r) ? bs().append(i) : i;
                s.insertBefore(_t112);
              } else if (Vi(r)) {
                var _t113 = r.getLastChild();
                cs(_t113) && !_t113.isInline() && _t113.isEmpty()
                  ? _t113.append(i)
                  : r.append(bs().append(i));
              } else r.append(i);
              (t.is(e) && e.set(i.__key, 0, "text"), t.set(i.__key, 0, "text"));
            })(i, l, r, s),
          "element" === l.type && Qc(l, ia(Xc(l, "next"))));
        var c = i.offset;
        var a = l.offset;
        var u = this.getNodes(),
          f = u.length;
        var d = u[0];
        Do(d) || t(26);
        var h = d.getTextContent().length,
          g = d.getParentOrThrow();
        var _ = u[f - 1];
        if (
          (1 === f &&
            "element" === l.type &&
            ((a = h), l.set(i.key, a, "text")),
          this.isCollapsed() &&
            c === h &&
            (Xs(d) ||
              !d.canInsertTextAfter() ||
              (!g.canInsertTextAfter() && null === d.getNextSibling())))
        ) {
          var _t114 = d.getNextSibling();
          var _n55;
          if (
            (Do(_t114) && _t114.canInsertTextBefore() && !Xs(_t114)
              ? (_n55 = _t114)
              : ((_n55 = wo()),
                _n55.setFormat(r),
                _n55.setStyle(s),
                g.canInsertTextAfter()
                  ? d.insertAfter(_n55)
                  : g.insertAfter(_n55)),
            _n55.select(0, 0),
            (d = _n55),
            "" !== e)
          )
            return void this.insertText(e);
        } else if (
          this.isCollapsed() &&
          0 === c &&
          (Xs(d) ||
            !d.canInsertTextBefore() ||
            (!g.canInsertTextBefore() && null === d.getPreviousSibling()))
        ) {
          var _t115 = d.getPreviousSibling();
          var _n56;
          if (
            (!Do(_t115) || Xs(_t115)
              ? ((_n56 = wo()),
                _n56.setFormat(r),
                g.canInsertTextBefore()
                  ? d.insertBefore(_n56)
                  : g.insertBefore(_n56))
              : (_n56 = _t115),
            _n56.select(),
            (d = _n56),
            "" !== e)
          )
            return void this.insertText(e);
        } else if (d.isSegmented() && c !== h) {
          if (null !== li()) d = d.setMode("normal").setFormat(r).setStyle(s);
          else {
            var _t116 = wo(d.getTextContent());
            (_t116.setFormat(r), d.replace(_t116), (d = _t116));
          }
        } else if (!this.isCollapsed() && "" !== e) {
          var _t117 = _.getParent();
          if (
            !g.canInsertTextBefore() ||
            !g.canInsertTextAfter() ||
            (cs(_t117) &&
              (!_t117.canInsertTextBefore() || !_t117.canInsertTextAfter()))
          )
            return (
              this.insertText(""),
              sr(this.anchor, this.focus),
              void this.insertText(e)
            );
        }
        if (1 === f) {
          if (qs(d)) {
            var _t118 = wo(e);
            return (_t118.select(), void d.replace(_t118));
          }
          var _t119 = d.getFormat(),
            _n57 = d.getStyle();
          if (c !== a || (_t119 === r && _n57 === s)) {
            if (Ro(d)) {
              var _t120 = wo(e);
              return (
                _t120.setFormat(r),
                _t120.setStyle(s),
                _t120.select(),
                void d.replace(_t120)
              );
            }
          } else {
            if ("" !== d.getTextContent()) {
              var _t121 = wo(e);
              if (
                (_t121.setFormat(r), _t121.setStyle(s), _t121.select(), 0 === c)
              )
                d.insertBefore(_t121, !1);
              else {
                var _d$splitText = d.splitText(c),
                  _e82 = _d$splitText[0];
                _e82.insertAfter(_t121, !1);
              }
              return void (
                _t121.isComposing() &&
                "text" === this.anchor.type &&
                ((this.anchor.offset -= e.length),
                (this._cachedNodes = null),
                (this._cachedIsBackward = null))
              );
            }
            (d.setFormat(r), d.setStyle(s));
          }
          var _o35 = a - c;
          ((d = d.spliceText(c, _o35, e, !0)),
            "" === d.getTextContent()
              ? d.remove()
              : "text" === this.anchor.type &&
                ((this.format = _t119),
                (this.style = _n57),
                d.isComposing() &&
                  ((this.anchor.offset -= e.length),
                  (this._cachedNodes = null),
                  (this._cachedIsBackward = null))));
        } else {
          var _n58 = new Set([].concat(d.getParentKeys(), _.getParentKeys())),
            _o36 = cs(d) ? d : d.getParentOrThrow();
          var _r28 = cs(_) ? _ : _.getParentOrThrow(),
            _s25 = _;
          if (!_o36.is(_r28) && _r28.isInline())
            do {
              ((_s25 = _r28), (_r28 = _r28.getParentOrThrow()));
            } while (_r28.isInline());
          if (
            ("text" === l.type && (0 !== a || "" === _.getTextContent())) ||
            ("element" === l.type && _.getIndexWithinParent() < a)
          ) {
            if (Do(_) && !qs(_) && a !== _.getTextContentSize()) {
              if (_.isSegmented()) {
                var _t122 = wo(_.getTextContent());
                (_.replace(_t122), (_ = _t122));
              }
              (hs(l.getNode()) ||
                "text" !== l.type ||
                (Do(_) || t(395), (_ = _.spliceText(0, a, ""))),
                _n58.add(_.__key));
            } else {
              var _t123 = _.getParentOrThrow();
              _t123.canBeEmpty() || 1 !== _t123.getChildrenSize()
                ? _.remove()
                : _t123.remove();
            }
          } else _n58.add(_.__key);
          var _i15 = _r28.getChildren(),
            _g7 = new Set(u),
            _p3 = _o36.is(_r28),
            _m2 = _o36.isInline() && null === d.getNextSibling() ? _o36 : d;
          for (var _t124 = _i15.length - 1; _t124 >= 0; _t124--) {
            var _e83 = _i15[_t124];
            if (_e83.is(d) || (cs(_e83) && _e83.isParentOf(d))) break;
            _e83.isAttached() &&
              (!_g7.has(_e83) || _e83.is(_s25)
                ? _p3 || _m2.insertAfter(_e83, !1)
                : _e83.remove());
          }
          if (!_p3) {
            var _t125 = _r28,
              _e84 = null;
            for (; null !== _t125; ) {
              var _o37 = _t125.getChildren(),
                _r29 = _o37.length;
              ((0 === _r29 || _o37[_r29 - 1].is(_e84)) &&
                (_n58["delete"](_t125.__key), (_e84 = _t125)),
                (_t125 = _t125.getParent()));
            }
          }
          if (qs(d)) {
            if (c === h) d.select();
            else {
              var _t126 = wo(e);
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
          for (var _t127 = 1; _t127 < f; _t127++) {
            var _e85 = u[_t127],
              _o38 = _e85.__key;
            _n58.has(_o38) || _e85.remove();
          }
        }
      };
      _proto1.removeText = function removeText() {
        var t = _r() === this;
        (ta(this, sa(ea(this))), t && _r() !== this && pi(this));
      };
      _proto1.formatText = function formatText(t, e) {
        if (e === void 0) {
          e = null;
        }
        Jo(this, t, e);
      };
      _proto1.insertNodes = function insertNodes(e) {
        var _r30;
        if (0 === e.length) return;
        this.isCollapsed() || this.removeText();
        var n = this.anchor.getNode();
        if ("element" === this.anchor.type && cs(n) && null !== Zl(n)) {
          var _n$getFirstChild;
          var _o39 = n.isShadowRoot()
            ? (_n$getFirstChild = n.getFirstChild()) != null
              ? _n$getFirstChild
              : n.append(bs()).getFirstChild()
            : n.getFirstChild();
          if (n.isShadowRoot() && null !== _o39 && !cs(_o39)) {
            var _t128 = bs();
            (_o39.insertBefore(_t128), (_o39 = _t128));
          }
          if (null !== _o39) {
            _o39.selectStart();
            var _n59 = _r();
            return (Uo(_n59) || t(369), _n59.insertNodes(e));
          }
        }
        if ("element" === this.anchor.type && Vi(n)) {
          var _t129 = Ar(e),
            _o40 = _t129.getLastDescendant();
          return (
            n.splice(this.anchor.offset, 0, _t129.getChildren()),
            void (null !== _o40 && _o40.selectEnd())
          );
        }
        var o = (this.isBackward() ? this.focus : this.anchor).getNode(),
          r = Jl(o, El);
        var s = e[e.length - 1];
        if (cs(r) && "__language" in r) {
          if ("__language" in e[0]) this.insertText(e[0].getTextContent());
          else {
            var _t130 = Or(this);
            (r.splice(_t130, 0, e), s.selectEnd());
          }
          return;
        }
        if (
          !e.some(function (t) {
            return (cs(t) || fs(t)) && !t.isInline();
          })
        ) {
          cs(r) || t(211, o.constructor.name, o.getType());
          var _n60 = Or(this);
          return (r.splice(_n60, 0, e), void s.selectEnd());
        }
        if (cs(r) && null !== Zl(r)) {
          var _t131 = Or(this),
            _n61 = Er(e);
          r.splice(_t131, 0, _n61);
          var _o41 = _n61[_n61.length - 1];
          return void (void 0 !== _o41
            ? _o41.selectEnd()
            : r.select(_t131, _t131));
        }
        if (null === r) {
          var _t132 = Ar(e),
            _n62 = _t132.getLastDescendant();
          var _o42 = Xc(this.anchor, "next");
          for (var _e86 of _t132.getChildren()) _o42 = ga(_e86, _o42);
          return void (null !== _n62 && _n62.selectEnd());
        }
        if (cs(r) && !r.isParentRequired() && !Vi(r.getParentOrThrow())) {
          var _t133 = Or(this),
            _n63 = Er(e);
          r.splice(_t133, 0, _n63);
          var _o43 = _n63[_n63.length - 1];
          return void (void 0 !== _o43
            ? _o43.selectEnd()
            : r.select(_t133, _t133));
        }
        var i = Ar(e),
          l = i.getLastDescendant(),
          c = i.getChildren(),
          a = !cs(r) || !r.isEmpty() ? this.insertParagraph() : null;
        a && !r.isAttached() && ((o = this.anchor.getNode()), (r = Jl(o, El)));
        var u = c[c.length - 1];
        var f = c[0];
        var d;
        (cs((d = f)) &&
          El(d) &&
          !d.isEmpty() &&
          cs(r) &&
          (!r.isEmpty() || r.canMergeWhenEmpty()) &&
          (cs(r) || t(211, o.constructor.name, o.getType()),
          (_r30 = r).append.apply(_r30, f.getChildren()),
          (f = c[1])),
          f &&
            (null === r && t(212, o.constructor.name, o.getType()),
            (function (e, n) {
              var o = n.getParentOrThrow().getLastChild();
              var r = n;
              var s = [n];
              for (; r !== o; )
                (r.getNextSibling() || t(140),
                  (r = r.getNextSibling()),
                  s.push(r));
              var i = e;
              for (var _t134 of s) i = i.insertAfter(_t134);
            })(r, f)));
        var h = Jl(l, El);
        (a &&
          cs(h) &&
          (a.canMergeWhenEmpty() || El(u)) &&
          (h.append.apply(h, a.getChildren()), a.remove()),
          cs(r) && r.isEmpty() && r.remove(),
          l.selectEnd());
        var g = cs(r) ? r.getLastChild() : null;
        Ts(g) && h !== r && g.remove();
      };
      _proto1.insertParagraph = function insertParagraph() {
        var e = this.anchor.getNode();
        if ("element" === this.anchor.type && Vi(e)) {
          var _t135 = bs();
          return (
            e.splice(this.anchor.offset, 0, [_t135]),
            _t135.select(),
            _t135
          );
        }
        var n = Or(this),
          o = Jl(this.anchor.getNode(), El);
        if (null !== o && null !== Zl(o)) return null;
        cs(o) || t(213);
        var r = o.getChildAtIndex(n),
          s = r ? [r].concat(r.getNextSiblings()) : [],
          i = o.insertNewAfter(this, !1);
        return i ? (i.append.apply(i, s), i.selectStart(), i) : null;
      };
      _proto1.insertLineBreak = function insertLineBreak(t) {
        var e = Ss();
        if ((this.insertNodes([e]), t)) {
          var _t136 = e.getParentOrThrow(),
            _n64 = e.getIndexWithinParent();
          _t136.select(_n64, _n64);
        }
      };
      _proto1.extract = function extract() {
        var _n$splitText;
        var t = [].concat(this.getNodes()),
          e = t.length;
        var n = t[0],
          o = t[e - 1];
        var _Vo2 = Vo(this),
          r = _Vo2[0],
          s = _Vo2[1],
          i = this.isBackward(),
          _ref27 = i ? [this.focus, this.anchor] : [this.anchor, this.focus],
          l = _ref27[0],
          c = _ref27[1],
          _ref28 = i ? [s, r] : [r, s],
          a = _ref28[0],
          u = _ref28[1];
        if (0 === e) return [];
        if (1 === e) {
          if (Do(n) && !this.isCollapsed()) {
            var _t137 = n.splitText(a, u),
              _e87 = 0 === a ? _t137[0] : _t137[1];
            return _e87
              ? (l.set(_e87.getKey(), 0, "text"),
                c.set(_e87.getKey(), _e87.getTextContentSize(), "text"),
                [_e87])
              : [];
          }
          return [n];
        }
        if (
          (Do(n) &&
            (a === n.getTextContentSize()
              ? t.shift()
              : 0 !== a &&
                ((_n$splitText = n.splitText(a)),
                (n = _n$splitText[1]),
                (t[0] = n),
                l.set(n.getKey(), 0, "text"))),
          Do(o))
        ) {
          var _o$splitText;
          var _e88 = o.getTextContent().length;
          0 === u
            ? t.pop()
            : u !== _e88 &&
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
          s = nl(ji(r));
        if (!s) return;
        var i = r._blockCursorElement,
          l = r._rootElement,
          c = this.focus.getNode();
        null === l ||
          null === i ||
          !cs(c) ||
          c.isInline() ||
          c.canBeEmpty() ||
          el(i, r, l);
        var a = Ki(r, this.focus.key);
        var u = a;
        if (
          ("text" === this.focus.type && (u = Do(c) ? wl(c, a, r) : null),
          this.dirty)
        ) {
          var _t138 = Ki(r, this.anchor.key);
          var _e89 = _t138;
          if ("text" === this.anchor.type) {
            var _n65 = this.anchor.getNode();
            _e89 = Do(_n65) ? wl(_n65, _t138, r) : null;
          }
          _e89 && u && Sr(s, _e89, this.anchor.offset, u, this.focus.offset);
        }
        if ("character" === n && Do(c) && c.isUnmergeable()) {
          if (
            e
              ? 0 === this.focus.offset
              : this.focus.offset === c.getTextContentSize()
          ) {
            var _t139 = Ic(c, e ? "previous" : "next").getNodeAtCaret();
            if (Do(_t139)) {
              if (!o) {
                var _n66 = _t139.getTextContentSize();
                return (
                  e
                    ? this.focus.set(_t139.__key, _n66 - 1, "text")
                    : this.focus.set(_t139.__key, 1, "text"),
                  void (this.dirty = !0)
                );
              }
              {
                var _n67 = r.getElementByKey(_t139.getKey()),
                  _o44 = _n67 ? wl(_t139, _n67, r) : null;
                if (_o44) {
                  var _t140 = e ? _o44.length : 0;
                  Sr(s, _o44, _t140, _o44, _t140);
                }
              }
            }
          }
        }
        if ((Qo(s, t, e ? "backward" : "forward", n), s.rangeCount > 0)) {
          var _t141 = ul(s, r._rootElement),
            _n68 = _t141 || s.getRangeAt(0),
            _i16 = this.anchor.getNode(),
            _l9 = hs(_i16) ? _i16 : Ji(_i16);
          if ((this.applyDOMRange(_n68), (this.dirty = !0), !o)) {
            Zo(this, e, _l9);
            (_t141
              ? "backward" !== s.direction
              : s.anchorNode === _n68.startContainer &&
                s.anchorOffset === _n68.startOffset) || Xo(this);
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
          var _t142 = e.getParent(),
            _n69 =
              e.getNextSibling() ||
              (null === _t142 ? null : _t142.getNextSibling());
          if (cs(_n69) && _n69.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto1.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e90 = this.anchor;
          var _n70 = _e90.getNode();
          if (this.forwardDeletion(_e90, _n70, t)) return;
          var _o45 = Wc(Xc(_e90, t ? "previous" : "next"));
          if (
            _o45.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            var _t143 = { type: "initial" };
            for (var _e91 of _o45.iterNodeCarets("shadowRoot"))
              if (Mc(_e91)) {
                if (_e91.origin.isInline());
                else {
                  if (_e91.origin.isShadowRoot()) {
                    if ("merge-block" === _t143.type) break;
                    if (
                      cs(_o45.anchor.origin) &&
                      _o45.anchor.origin.isEmpty()
                    ) {
                      var _t144 = ia(_e91);
                      (ta(this, Hc(_t144, _t144)), _o45.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t143.type &&
                    "merge-block" !== _t143.type) ||
                    (_t143 = {
                      block: _t143.block,
                      caret: _e91,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t143.type) break;
                if (bc(_e91)) {
                  if (cs(_e91.origin)) {
                    if (_e91.origin.isInline()) {
                      if (!_e91.origin.isParentOf(_o45.anchor.origin)) break;
                    } else
                      _t143 = { block: _e91.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (fs(_e91.origin)) {
                    if (_e91.origin.isIsolated());
                    else if (rc(_e91.origin).length > 0) {
                      if (
                        cs(_o45.anchor.origin) &&
                        _o45.anchor.origin.isEmpty()
                      ) {
                        _o45.anchor.origin.remove();
                        var _t145 = hr();
                        (_t145.add(_e91.origin.getKey()), pi(_t145));
                      }
                    } else if (
                      "merge-next-block" === _t143.type &&
                      (_e91.origin.isKeyboardSelectable() ||
                        !_e91.origin.isInline()) &&
                      cs(_o45.anchor.origin) &&
                      _o45.anchor.origin.isEmpty()
                    ) {
                      _o45.anchor.origin.remove();
                      var _t146 = hr();
                      (_t146.add(_e91.origin.getKey()), pi(_t146));
                    } else _e91.origin.remove();
                    return;
                  }
                  break;
                }
              }
            if ("merge-block" === _t143.type) {
              var _t147 = _t143,
                _e92 = _t147.caret,
                _n71 = _t147.block;
              if (rc(_n71).length > 0) return;
              return _e92.origin.isEmpty() &&
                !_n71.isEmpty() &&
                _e92.origin.getParent() === _n71.getParent()
                ? void _e92.origin.remove(!0)
                : (ta(
                    this,
                    Hc(
                      !_e92.origin.isEmpty() && _n71.isEmpty()
                        ? na(Ic(_n71, _e92.direction))
                        : _o45.anchor,
                      _e92,
                    ),
                  ),
                  this.removeText());
            }
            for (var _t148 = _e90.getNode(); null !== _t148; ) {
              if (null !== Zl(_t148)) return;
              if (cs(_t148) && _t148.isShadowRoot()) break;
              _t148 = _t148.getParent();
            }
          }
          var _r31 = this.focus;
          if ((tr(this, t, "character"), this.isCollapsed())) {
            if (t && 0 === _e90.offset && qo(this, _e90.getNode())) return;
          } else {
            var _o46 = "text" === _r31.type ? _r31.getNode() : null;
            if (
              ((_n70 = "text" === _e90.type ? _e90.getNode() : null),
              null !== _o46 && _o46.isSegmented())
            ) {
              var _e93 = _r31.offset,
                _s26 = _o46.getTextContentSize();
              if (_o46.is(_n70) || (t && _e93 !== _s26) || (!t && 0 !== _e93))
                return void nr(_o46, t, _e93);
            } else if (null !== _n70 && _n70.isSegmented()) {
              var _r32 = _e90.offset,
                _s27 = _n70.getTextContentSize();
              if (_n70.is(_o46) || (t && 0 !== _r32) || (!t && _r32 !== _s27))
                return void nr(_n70, t, _r32);
            }
            !(function (t, e) {
              var n = t.anchor,
                o = t.focus,
                r = n.getNode(),
                s = o.getNode();
              if (r === s && "text" === n.type && "text" === o.type) {
                var _t149 = n.offset,
                  _s28 = o.offset,
                  _i17 = _t149 < _s28,
                  _l0 = _i17 ? _t149 : _s28,
                  _c8 = _i17 ? _s28 : _t149,
                  _a7 = _c8 - 1;
                if (_l0 !== _a7) {
                  (function (t) {
                    return !(xi(t) || er(t));
                  })(r.getTextContent().slice(_l0, _c8)) &&
                    (e ? o.set(o.key, _a7, o.type) : n.set(n.key, _a7, n.type));
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
          var _t150 = this.anchor.getNode();
          (_t150.isEmpty() &&
            hs(_t150.getParent()) &&
            null === _t150.getPreviousSibling() &&
            qo(this, _t150),
            Wo());
        }
      };
      _proto1.deleteLine = function deleteLine(t) {
        var e = ir(this.anchor);
        if (null !== e && fs(tc(e)))
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
          (this.isCollapsed() && tr(this, t, "lineboundary"),
          this.isCollapsed())
        )
          this.deleteCharacter(t);
        else {
          Jl(this.anchor.getNode(), El) !== Jl(this.focus.getNode(), El)
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
            _n72 = _e94.getNode();
          if (this.forwardDeletion(_e94, _n72, t)) return;
          tr(this, t, "word");
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
      return Ho;
    })();
    function jo(t) {
      return t instanceof _$o;
    }
    function Yo(t, e) {
      var _u$splitText, _h$splitText;
      if (jo(t)) {
        for (var _n73 of t.getNodes())
          So(_n73) && _n73.setFormat(e(_n73.getFormat()));
        return;
      }
      if (t.isCollapsed()) return (t.setFormat(e(t.format)), void ii(null));
      var n = [];
      for (var _o47 of t.getNodes())
        Do(_o47)
          ? n.push(_o47)
          : cs(_o47)
            ? _o47.setTextFormat(e(_o47.getTextFormat()))
            : So(_o47) && _o47.setFormat(e(_o47.getFormat()));
      var o = n.length;
      if (0 === o) return (t.setFormat(e(t.format)), void ii(null));
      var r = t.anchor,
        s = t.focus,
        i = t.isBackward(),
        l = i ? s : r,
        c = i ? r : s;
      var a = 0,
        u = n[0],
        f = "element" === l.type ? 0 : l.offset;
      if (
        ("text" === l.type &&
          f === u.getTextContentSize() &&
          ((a = 1), (u = n[1]), (f = 0)),
        null == u)
      )
        return;
      var d = o - 1;
      var h = n[d];
      var g = "text" === c.type ? c.offset : h.getTextContentSize();
      if (u.is(h)) {
        if (f === g) return;
        var _n74 = e(u.getFormat());
        if (Xs(u) || (0 === f && g === u.getTextContentSize()))
          u.setFormat(_n74);
        else {
          var _t151 = u.splitText(f, g),
            _e95 = 0 === f ? _t151[0] : _t151[1];
          (_e95.setFormat(_n74),
            "text" === l.type && l.set(_e95.__key, 0, "text"),
            "text" === c.type && c.set(_e95.__key, g - f, "text"));
        }
        return void (t.format = _n74);
      }
      0 === f ||
        Xs(u) ||
        ((_u$splitText = u.splitText(f)), (u = _u$splitText[1]), (f = 0));
      var _ = e(u.getFormat());
      u.setFormat(_);
      var p = e(h.getFormat());
      g > 0 &&
        (g === h.getTextContentSize() ||
          Xs(h) ||
          ((_h$splitText = h.splitText(g)),
          (h = _h$splitText[0]),
          _h$splitText),
        h.setFormat(p));
      for (var _t152 = a + 1; _t152 < d; _t152++) {
        var _o48 = n[_t152];
        _o48.setFormat(e(_o48.getFormat()));
      }
      ("text" === l.type && l.set(u.__key, f, "text"),
        "text" === c.type && c.set(h.__key, g, "text"),
        (t.format = _ | p));
    }
    function Jo(t, e, n) {
      if (n === void 0) {
        n = null;
      }
      var o = null === n && Uo(t) ? ei(t.format, e, null) : n;
      Yo(t, function (t) {
        return ei(t, e, o);
      });
    }
    function Go(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function Vo(t) {
      var e = t.getStartEndPoints();
      if (null === e) return [0, 0];
      var n = e[0],
        o = e[1];
      return "element" === n.type &&
        "element" === o.type &&
        n.key === o.key &&
        n.offset === o.offset
        ? [0, 0]
        : [Go(n), Go(o)];
    }
    function qo(t, e) {
      for (var _n75 = e; _n75; _n75 = _n75.getParent()) {
        if (cs(_n75)) {
          if (_n75.collapseAtStart(t)) return !0;
          if (Vi(_n75)) break;
        }
        if (_n75.getPreviousSibling()) break;
      }
      return !1;
    }
    function Xo(t) {
      var e = t.focus,
        n = t.anchor,
        o = n.key,
        r = n.offset,
        s = n.type;
      (n.set(e.key, e.offset, e.type, !0), e.set(o, r, s, !0));
    }
    function Qo(t, e, n, o) {
      t.modify(e, n, o);
    }
    function Zo(t, e, n) {
      var o = t.getNodes(),
        r = o.filter(function (t) {
          return Ui(t, n);
        });
      if (0 === r.length || r.length === o.length) return !1;
      var s = e ? r[0] : r[r.length - 1],
        i = cs(s) ? s : s.getParentOrThrow();
      return (e ? i.selectStart() : i.selectEnd(), !0);
    }
    function tr(t, e, n) {
      if (wr(t, "extend", e, n)) return;
      var o = Hr(),
        r = nl(ji(o));
      if (!r || "function" != typeof r.modify) return;
      var s = o._blockCursorElement,
        i = o._rootElement,
        l = t.anchor,
        c = t.focus.getNode();
      null === i ||
        null === s ||
        !cs(c) ||
        c.isInline() ||
        c.canBeEmpty() ||
        el(s, o, i);
      var a = function a(t) {
          var e = t.getNode(),
            n = o.getElementByKey(t.key);
          return null !== n && "text" === t.type && Do(e) ? wl(e, n, o) : n;
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
        (Sr(r, _, p, _, p),
        Qo(r, "move", e ? "backward" : "forward", n),
        0 === r.rangeCount)
      )
        return;
      var m = ul(r, i) || r.getRangeAt(0),
        y = m.startContainer,
        x = m.startOffset;
      if (
        h &&
        "character" === n &&
        "text" === l.type &&
        Do(u) &&
        u.isUnmergeable()
      ) {
        if (d === (e ? 0 : u.getTextContentSize())) {
          var _n76 = Ic(u, e ? "previous" : "next").getNodeAtCaret();
          if (Do(_n76)) {
            var _o49 = e ? _n76.getTextContentSize() - 1 : 1;
            return (t.focus.set(_n76.__key, _o49, "text"), void (t.dirty = !0));
          }
        }
      }
      if (h && "character" === n && "text" === l.type) {
        var _n77 = e ? 0 : u.getTextContentSize(),
          _o50 = y === f ? x : d !== _n77 ? _n77 : -1;
        if (_o50 >= 0)
          return void (
            _o50 !== d && (t.focus.set(l.key, _o50, "text"), (t.dirty = !0))
          );
      }
      var _ref29 = e ? [y, x, f, d] : [f, d, y, x],
        C = _ref29[0],
        S = _ref29[1],
        T = _ref29[2],
        N = _ref29[3],
        v = hs(u) ? u : Ji(u);
      (t.applyDOMRange({
        collapsed: !1,
        endContainer: T,
        endOffset: N,
        startContainer: C,
        startOffset: S,
      }),
        (t.dirty = !0),
        !Zo(t, e, v) && e && Xo(t),
        "lineboundary" === n && wr(t, "extend", e, n, "decorators"));
    }
    var er = (function () {
      try {
        var _t153 = new RegExp("\\p{Emoji}", "u"),
          _e96 = _t153.test.bind(_t153);
        if (_e96("\u2764\ufe0f") && _e96("#\ufe0f\u20e3") && _e96("\u{1f44d}"))
          return _e96;
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
      for (var _t154 = 0; _t154 < s; _t154++) {
        var _o51 = _t154 === s - 1;
        if (
          ((l = i), (i += r[_t154].length), (e && i === n) || i > n || _o51)
        ) {
          (r.splice(_t154, 1), _o51 && (l = void 0));
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
      if (xl(e)) {
        var _c9 = !1;
        var _a8 = e.childNodes,
          _u9 = _a8.length,
          _f8 = r._blockCursorElement;
        (i === _u9 && _u9 > 0 && ((_c9 = !0), (i = _u9 - 1)),
          void 0 !== fi(e, r) || Wl(e, r) || (l = !0));
        var _d8 = _a8[i],
          _h7 = !1;
        if (_d8 === _f8) ((_d8 = _a8[i + 1]), (_h7 = !0));
        else if (null !== _f8) {
          var _t155 = _f8.parentNode;
          if (e === _t155) {
            n > Array.prototype.indexOf.call(_t155.children, _f8) && i--;
          }
        }
        if (((s = yi(_d8)), Do(s))) i = Fc(s, _c9 ? "next" : "previous");
        else {
          var _a9 = yi(e);
          if (null === _a9) return null;
          if (cs(_a9)) {
            var _u0$resolveChildIndex;
            var _l1 = r.getElementByKey(_a9.getKey());
            null === _l1 && t(214);
            var _u0 = Ml(_a9, _l1, r);
            ((_u0$resolveChildIndex = _u0.resolveChildIndex(_a9, _l1, e, n)),
              (_a9 = _u0$resolveChildIndex[0]),
              (i = _u0$resolveChildIndex[1]),
              cs(_a9) || t(215),
              _c9 &&
                i >= _a9.getChildrenSize() &&
                (i = Math.max(0, _a9.getChildrenSize() - 1)));
            var _f9 = _a9.getChildAtIndex(i);
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
              var _t156 = _c9
                ? _f9.getLastDescendant()
                : _f9.getFirstDescendant();
              (null === _t156
                ? (_a9 = _f9)
                : ((_f9 = _t156),
                  (_a9 = cs(_f9) ? _f9 : _f9.getParentOrThrow())),
                (i = 0));
            }
            Do(_f9)
              ? ((s = _f9),
                (_a9 = null),
                (i = Fc(_f9, _c9 ? "next" : "previous")))
              : _f9 !== _a9 &&
                _c9 &&
                !_h7 &&
                (cs(_a9) || t(216),
                (i = Math.min(_a9.getChildrenSize(), i + 1)));
          } else {
            var _t157 = tc(_a9),
              _o52 = null !== _t157 ? _t157 : _a9,
              _s29 = _o52.getIndexWithinParent(),
              _l10 = r.getElementByKey(_a9.getKey());
            var _c0 = "after";
            if (null !== _l10 && yi(e) === _a9) {
              var _t158 = Ml(_a9, _l10, r);
              _t158.element !== _l10
                ? (_c0 = _t158.resolveLeafPosition(_l10, e, n))
                : 0 === n && fs(_a9) && (_c0 = "before");
            }
            ((i = "before" === _c0 ? _s29 : _s29 + 1),
              (_a9 = _o52.getParentOrThrow()));
          }
          if (cs(_a9)) return [Ko(_a9.__key, i, "element"), l];
        }
      } else s = yi(e);
      return Do(s) ? [Ko(s.__key, Fc(s, i, "clamp"), "text"), l] : null;
    }
    function rr(t, e, n) {
      var o = t.offset,
        r = t.getNode();
      if (0 === o) {
        var _o53 = r.getPreviousSibling(),
          _s30 = r.getParent();
        if (e) {
          if ((n || !e) && null === _o53 && cs(_s30) && _s30.isInline()) {
            var _e97 = _s30.getPreviousSibling();
            Do(_e97) && t.set(_e97.__key, _e97.getTextContent().length, "text");
          }
        } else
          cs(_o53) && !n && _o53.isInline()
            ? t.set(_o53.__key, _o53.getChildrenSize(), "element")
            : Do(_o53) &&
              !r.isUnmergeable() &&
              t.set(_o53.__key, _o53.getTextContent().length, "text");
      } else if (o === r.getTextContent().length) {
        var _o54 = r.getNextSibling(),
          _s31 = r.getParent();
        if (e && cs(_o54) && _o54.isInline()) t.set(_o54.__key, 0, "element");
        else if (
          (n || e) &&
          null === _o54 &&
          cs(_s31) &&
          _s31.isInline() &&
          !_s31.canInsertTextAfter() &&
          _s31.getTextContentSize() > 1
        ) {
          var _e98 = _s31.getNextSibling();
          Do(_e98) && t.set(_e98.__key, 0, "text");
        }
      }
    }
    function sr(t, e, n) {
      if ("text" === t.type && "text" === e.type) {
        var _n78 = t.isBefore(e),
          _o55 = t.is(e);
        (rr(t, _n78, _o55),
          rr(e, !_n78, _o55),
          _o55 && e.set(t.key, t.offset, t.type));
      }
    }
    function ir(t) {
      var e = ci(t.key);
      return null === e ? null : nc(e);
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
      var i = tc(r);
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
            var _t159 = tc(n),
              _e99 = tc(o);
            if (null !== _t159 && _t159.is(_e99)) {
              for (var _e100 of oc(_t159).values()) {
                if (_e100 === n.getKey()) return !0;
                if (_e100 === o.getKey()) return !1;
              }
              return !0;
            }
            return null === _t159 || null === _e99 || _t159.isBefore(_e99);
          }
          if (null !== n) {
            var _t160 = tc(n),
              _o56 = ci(e.key);
            return (
              null === _t160 ||
              null === _o56 ||
              !(!_t160.is(_o56) && !_t160.isParentOf(_o56)) ||
              _t160.isBefore(_o56)
            );
          }
          var r = tc(o),
            s = ci(t.key);
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
      if (null === t || null === n || !Ys(r, t, n)) return null;
      var i = or(t, e, Uo(s) ? s.anchor : null, r);
      if (null === i) return null;
      var l = or(n, o, Uo(s) ? s.focus : null, r);
      if (null === l) return null;
      var c = i[0],
        a = i[1],
        u = l[0],
        f = l[1];
      if ("element" === c.type && "element" === u.type) {
        var _e101 = yi(t),
          _o57 = yi(n);
        if (fs(_e101) && fs(_o57)) return null;
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
        l = new _Ho(Ko(t, e, r), Ko(n, o, s), 0, "");
      return ((l.dirty = !0), (i._selection = l), l);
    }
    function dr() {
      var t = Ko("root", 0, "element"),
        e = Ko("root", 0, "element");
      return new _Ho(t, e, 0, "");
    }
    function hr() {
      return new _$o(new Set());
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
      if (Uo(t) && !c) return t.clone();
      {
        if (null === e) return null;
        var _o58 = dl(e, n._rootElement);
        if (
          ((a = _o58.anchorNode),
          (u = _o58.focusNode),
          (f = _o58.anchorOffset),
          (d = _o58.focusOffset),
          (l || void 0 === i) && Uo(t) && !Ys(n, a, u))
        )
          return t.clone();
      }
      var h = ar(a, f, u, d, n, t);
      if (null === h) return null;
      var g = h[0],
        _ = h[1],
        p = h[2];
      var m = 0,
        y = "";
      if (Uo(t)) {
        var _e102 = t.anchor;
        if (g.key === _e102.key) ((m = t.format), (y = t.style));
        else {
          var _t161 = g.getNode();
          Do(_t161)
            ? ((m = _t161.getFormat()), (y = _t161.getStyle()))
            : cs(_t161) &&
              ((m = _t161.getTextFormat()), (y = _t161.getTextStyle()));
        }
      }
      var x = new _Ho(g, _, m, y);
      return (p && (x.dirty = !0), x);
    }
    function _r() {
      return Ur()._selection;
    }
    function pr() {
      return Hr()._editorState._selection;
    }
    function mr(t, e, n, o) {
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
        var _e103 = r.offset;
        if ((n <= _e103 && o > 0) || (n < _e103 && o < 0)) {
          var _n79 = Math.max(0, _e103 + o);
          (r.set(c, _n79, "element"), s.set(c, _n79, "element"), yr(t));
        }
      } else {
        var _i18 = t.isBackward(),
          _l11 = _i18 ? s : r,
          _a0 = _l11.getNode(),
          _u1 = _i18 ? r : s,
          _f0 = _u1.getNode();
        if (e.is(_a0)) {
          var _t162 = _l11.offset;
          ((n <= _t162 && o > 0) || (n < _t162 && o < 0)) &&
            _l11.set(c, Math.max(0, _t162 + o), "element");
        }
        if (e.is(_f0)) {
          var _t163 = _u1.offset;
          ((n <= _t163 && o > 0) || (n < _t163 && o < 0)) &&
            _u1.set(c, Math.max(0, _t163 + o), "element");
        }
      }
      yr(t);
    }
    function yr(t) {
      var e = t.anchor,
        n = e.offset,
        o = t.focus,
        r = o.offset,
        s = e.getNode(),
        i = o.getNode();
      if (t.isCollapsed()) {
        if (!cs(s)) return;
        var _t164 = s.getChildrenSize(),
          _r33 = n >= _t164,
          _i19 = _r33 ? s.getChildAtIndex(_t164 - 1) : s.getChildAtIndex(n);
        if (Do(_i19)) {
          var _t165 = 0;
          (_r33 && (_t165 = _i19.getTextContentSize()),
            e.set(_i19.__key, _t165, "text"),
            o.set(_i19.__key, _t165, "text"));
        }
        return;
      }
      if (cs(s)) {
        var _t166 = s.getChildrenSize(),
          _o59 = n >= _t166,
          _r34 = _o59 ? s.getChildAtIndex(_t166 - 1) : s.getChildAtIndex(n);
        if (Do(_r34)) {
          var _t167 = 0;
          (_o59 && (_t167 = _r34.getTextContentSize()),
            e.set(_r34.__key, _t167, "text"));
        }
      }
      if (cs(i)) {
        var _t168 = i.getChildrenSize(),
          _e104 = r >= _t168,
          _n80 = _e104 ? i.getChildAtIndex(_t168 - 1) : i.getChildAtIndex(r);
        if (Do(_n80)) {
          var _t169 = 0;
          (_e104 && (_t169 = _n80.getTextContentSize()),
            o.set(_n80.__key, _t169, "text"));
        }
      }
    }
    function xr(t, e, n, o, r) {
      var s = null,
        i = 0,
        l = null;
      (null !== o
        ? ((s = o.__key),
          Do(o)
            ? ((i = o.getTextContentSize()), (l = "text"))
            : cs(o) && ((i = o.getChildrenSize()), (l = "element")))
        : null !== r &&
          ((s = r.__key), Do(r) ? (l = "text") : cs(r) && (l = "element")),
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
    function Tr(t, e, n) {
      var o = Ki(t, e.getKey());
      if (cs(e)) {
        var _r35 = Ml(e, o, t);
        return [_r35.element, n + _r35.getFirstChildOffset()];
      }
      return [o, n];
    }
    function Nr(t, e, n, o, r, i) {
      var l = i.getRootNode(),
        c = Zs(l) || rl(l) ? ml(l) : null;
      if ((r.has(ro) && c !== i) || (null !== c && Hs(c, c))) return;
      var a = dl(o, i);
      var u;
      if (!Uo(e))
        return void (
          null !== t &&
          Ys(n, a.anchorNode, a.focusNode) &&
          o.removeAllRanges()
        );
      var f = e.anchor,
        d = e.focus,
        h = f.getNode(),
        g = d.getNode(),
        _Tr = Tr(n, h, f.offset),
        _ = _Tr[0],
        p = _Tr[1],
        _Tr2 = Tr(n, g, d.offset),
        m = _Tr2[0],
        y = _Tr2[1],
        x = e.format,
        C = e.style,
        S = e.isCollapsed();
      var T = _,
        N = m,
        v = !1;
      if (
        ("text" === f.type
          ? ((T = Do(h) ? wl(h, _, n) : null),
            (v = h.getFormat() !== x || h.getStyle() !== C))
          : Uo(t) && "text" === t.anchor.type && (v = !0),
        "text" === d.type && (N = Do(g) ? wl(g, m, n) : null),
        null !== T && null !== N)
      ) {
        if (
          (S &&
            (null === t || v || (Uo(t) && (t.format !== x || t.style !== C))) &&
            (function (t, e, n, o, r, s) {
              t._inputState.collapsedSelectionFormat = {
                format: e,
                key: r,
                offset: o,
                style: n,
                timeStamp: s,
              };
            })(n, x, C, p, f.key, performance.now()),
          ("Range" !== o.type || !S) &&
            a.anchorOffset === p &&
            a.focusOffset === y &&
            a.anchorNode === T &&
            a.focusNode === N)
        ) {
          if (null === c || !i.contains(c)) {
            var _t170 = null !== c ? Gs(c) : null;
            (null !== _t170 && _t170 !== n) ||
              r.has(lo) ||
              i.focus({ preventScroll: !0 });
          }
          if ("element" !== f.type) return;
        }
        if (
          (Sr(o, T, p, N, y), s && e.isCollapsed() && null !== i && !r.has(lo))
        ) {
          var _t171 = pl(i);
          if (null === _t171 || !i.contains(_t171)) {
            var _t172 = ml(i.ownerDocument),
              _e105 = null !== _t172 ? Gs(_t172) : null;
            (null !== _e105 && _e105 !== n) || i.focus({ preventScroll: !0 });
          }
        }
        if (!r.has(so) && e.isCollapsed() && null !== i && i === pl(i)) {
          var _t173 =
            Uo(e) && "element" === e.anchor.type
              ? T.childNodes[p] || null
              : (void 0 === u && (u = fl(o, i)), u);
          if (null !== _t173) {
            var _e106;
            if (Qs(_t173)) {
              var _n81 = _t173.ownerDocument.createRange();
              (_n81.selectNode(_t173), (_e106 = _n81.getBoundingClientRect()));
            } else _e106 = _t173.getBoundingClientRect();
            !(function (t, e, n) {
              var o = zi(n),
                r = Hi(o);
              if (null === o || null === r) return;
              var s = n.getBoundingClientRect();
              if (e.bottom < s.top) return;
              var i = e.top,
                l = e.bottom,
                c = 0,
                a = 0,
                u = n;
              for (; null !== u; ) {
                var _e107 = u === o.body;
                if (_e107) {
                  var _e108 = r.visualViewport;
                  if (_e108) {
                    var _t174 = _e108.offsetTop;
                    ((c = _t174), (a = _t174 + _e108.height));
                  } else ((c = 0), (a = ji(t).innerHeight));
                  var _n82 = r.getComputedStyle(o.documentElement),
                    _s32 = parseFloat(_n82.scrollPaddingTop),
                    _i20 = parseFloat(_n82.scrollPaddingBottom);
                  (isFinite(_s32) && (c += _s32),
                    isFinite(_i20) && (a -= _i20));
                } else {
                  var _t175 = u === n ? s : u.getBoundingClientRect();
                  ((c = _t175.top), (a = _t175.bottom));
                }
                var _f1 = 0;
                if (
                  (i < c ? (_f1 = -(c - i)) : l > a && (_f1 = l - a), 0 !== _f1)
                )
                  if (_e107) r.scrollBy(0, _f1);
                  else {
                    var _t176 = u.scrollTop;
                    u.scrollTop += _f1;
                    var _e109 = u.scrollTop - _t176;
                    ((i -= _e109), (l -= _e109));
                  }
                if (_e107) break;
                u = Bi(u);
              }
            })(n, _e106, i);
          }
        }
        !(function (t) {
          t._inputState.isSelectionChangeFromDOMUpdate = !0;
        })(n);
      }
    }
    function vr(t, e) {
      for (var _n83 of t.split(/(\r?\n|\t)/))
        "\n" === _n83 || "\r\n" === _n83
          ? e.linebreak()
          : "\t" === _n83
            ? e.tab()
            : "" !== _n83 && e.text(_n83);
    }
    function kr(t) {
      var e = [];
      return (
        vr(t, {
          linebreak: function linebreak() {
            return e.push(Ss());
          },
          tab: function tab() {
            return e.push(Fo());
          },
          text: function text(t) {
            return e.push(wo(t));
          },
        }),
        e
      );
    }
    function Er(t) {
      var e = [];
      for (var _n84 of t)
        Ts(_n84) ||
          ((!cs(_n84) && !fs(_n84)) || _n84.isInline()
            ? e.push(_n84)
            : cs(_n84) && e.push.apply(e, Er(_n84.getChildren())));
      return e;
    }
    function Or(e) {
      var n = e;
      e.isCollapsed() || n.removeText();
      var o = _r();
      (Uo(o) && (n = o), Uo(n) || t(161));
      var r = n.anchor;
      var s = r.getNode(),
        i = r.offset;
      for (; !El(s) && null === Zl(s); ) {
        var _br;
        var _t177 = s;
        if (((_br = br(s, i)), (s = _br[0]), (i = _br[1]), _t177.is(s))) break;
      }
      return i;
    }
    function br(t, e) {
      var n = t.getParent();
      if (!n) {
        var _t178 = bs();
        return (_i().append(_t178), _t178.select(), [_i(), 0]);
      }
      if (Do(t)) {
        var _o60 = t.splitText(e);
        if (0 === _o60.length) return [n, t.getIndexWithinParent()];
        var _r36 = 0 === e ? 0 : 1;
        return [n, _o60[0].getIndexWithinParent() + _r36];
      }
      if (!cs(t) || 0 === e) return [n, t.getIndexWithinParent()];
      var o = t.getChildAtIndex(e);
      if (o) {
        var _n85 = new _Ho(
            Ko(t.__key, e, "element"),
            Ko(t.__key, e, "element"),
            0,
            "",
          ),
          _r37 = t.insertNewAfter(_n85);
        _r37 && _r37.append.apply(_r37, [o].concat(o.getNextSiblings()));
      }
      return [n, t.getIndexWithinParent() + 1];
    }
    function Mr(t) {
      return Ts(t) || Yi(t) || Do(t) || t.isParentRequired();
    }
    function Ar(t) {
      var e = bs();
      var n = null;
      for (var _o61 = 0; _o61 < t.length; _o61++) {
        var _r38 = t[_o61];
        if (Mr(_r38)) {
          if (null === n) {
            ((n = _r38.createParentElementNode()), e.append(n));
            var _s33 = t[_o61 + 1];
            if (Ts(_r38) && (void 0 === _s33 || !Mr(_s33))) continue;
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
        var _ref30 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e110 = _ref30[0],
          _o62 = _ref30[1];
        return (_o62.set(_e110.key, _e110.offset, _e110.type), !0);
      }
      var s = Xc(t.focus, n ? "previous" : "next"),
        i = "lineboundary" === o,
        l = "move" === e;
      var c = s,
        a = "decorators-and-blocks" === r;
      if (!la(c)) {
        for (var _t179 of c) {
          a = !1;
          var _e111 = _t179.origin;
          if (
            !fs(_e111) ||
            _e111.isIsolated() ||
            ((c = _t179), !i || !_e111.isInline())
          )
            break;
        }
        if (a)
          for (var _t180 of Wc(s).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (Mc(_t180)) _t180.origin.isInline() || (c = _t180);
            else {
              if (cs(_t180.origin)) continue;
              fs(_t180.origin) && !_t180.origin.isInline() && (c = _t180);
            }
            break;
          }
      }
      if (c === s) return !1;
      if (l && !i && fs(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t181 = hr();
        return (_t181.add(c.origin.getKey()), pi(_t181), !0);
      }
      return ((c = ia(c)), l && Qc(t.anchor, c), Qc(t.focus, c), a || !i);
    }
    var Dr = null,
      Ir = null,
      Pr = !1,
      Fr = !1,
      Rr = !1;
    var Lr = new Set();
    var Kr = 0;
    var Br = { characterData: !0, childList: !0, subtree: !0 };
    function zr() {
      return Pr || (null !== Dr && Dr._readOnly);
    }
    function $r() {
      Pr && t(13);
    }
    function Wr() {
      Kr > 99 && t(14);
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
        for (var _o63 of ll(document)) {
          var _r39 = Vs(_o63);
          if (Js(_r39)) t++;
          else if (_r39) {
            var _t182 = String(_r39.constructor.version || "<0.17.1");
            (_t182 === n &&
              (_t182 +=
                " (separately built, likely a bundler configuration issue)"),
              e.add(_t182));
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
        r = $s(t, o);
      var s = n.get(o);
      void 0 === s && ((s = Array.from(r.transforms)), n.set(o, s));
      var i = s.length;
      for (var _t183 = 0; _t183 < i && (s[_t183](e), e.isAttached()); _t183++);
    }
    function Vr(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function qr(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var o = e;
      Array.isArray(e) || (o = [e]);
      for (var _t184 of o) n.add(_t184);
    }
    function Xr(e, n) {
      var o = e.type,
        r = n.get(o);
      void 0 === r && t(17, o);
      var s = r.klass;
      e.type !== s.getType() && t(18, s.name);
      var i = s.importJSON(e),
        l = e.children;
      if (cs(i) && Array.isArray(l))
        for (var _t185 = 0; _t185 < l.length; _t185++) {
          var _e112 = Xr(l[_t185], n);
          i.append(_e112);
        }
      var c = e.$slots;
      if (c) {
        Xl(i) || t(379, s.name);
        for (var _t186 in c) {
          _c(i, _t186, Xr(c[_t186], n));
        }
      }
      return i;
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
            return void (
              !t._updating &&
              t._deferred.length > 0 &&
              ns(t, t._deferred)
            );
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
              var _e113 = t._dirtyType,
                _o64 = t._dirtyElements,
                _r40 = t._dirtyLeaves;
              (h.disconnect(), (g = Ce(s, n, t, _e113, _o64, _r40)));
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
              (h.observe(o, Br),
                (t._updating = d),
                (Dr = a),
                (Pr = u),
                (Ir = f));
            }
          }
          n._readOnly || (n._readOnly = !0);
          var _ = t._dirtyLeaves,
            p = t._dirtyElements,
            m = t._normalizedNodes,
            y = t._updateTags;
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
              for (s in o) r.has(s) || (o === n && (o = hi(t)), delete o[s]);
            })(t, n));
          var x = r ? null : nl(ji(t));
          if (
            t._editable &&
            null !== x &&
            (c || null === l || l.dirty || !l.is(i)) &&
            null !== o &&
            !y.has(io)
          ) {
            ((Ir = t), (Dr = n));
            try {
              if ((null !== h && h.disconnect(), c || null === l || l.dirty)) {
                var _e114 = t._blockCursorElement;
                (null !== _e114 && el(_e114, t, o), Nr(i, l, t, x, y, o));
              }
              !(function (t, e, n) {
                var o = t._blockCursorElement;
                if (
                  Uo(n) &&
                  n.isCollapsed() &&
                  "element" === n.anchor.type &&
                  e.contains(pl(e))
                ) {
                  var _r41 = n.anchor,
                    _s34 = _r41.getNode(),
                    _i21 = _r41.offset;
                  var _l12 = !1,
                    _c1 = null;
                  if (_i21 === _s34.getChildrenSize()) {
                    tl(_s34.getChildAtIndex(_i21 - 1)) && (_l12 = !0);
                  } else {
                    var _e115 = _s34.getChildAtIndex(_i21);
                    if (null !== _e115 && tl(_e115)) {
                      var _n86 = _e115.getPreviousSibling();
                      (null === _n86 || tl(_n86)) &&
                        ((_l12 = !0), (_c1 = t.getElementByKey(_e115.__key)));
                    }
                  }
                  if (_l12) {
                    var _n87 = Ml(
                      _s34,
                      t.getElementByKey(_s34.__key),
                      t,
                    ).element;
                    return (
                      null === o &&
                        (t._blockCursorElement = o =
                          (function (t) {
                            var e = t.theme,
                              n = al().createElement("div");
                            ((n.contentEditable = "false"),
                              n.setAttribute("data-lexical-cursor", "true"));
                            var o = e.blockCursor;
                            if (void 0 !== o) {
                              var _n$classList;
                              if ("string" == typeof o) {
                                var _t187 = _a(o);
                                o = e.blockCursor = _t187;
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
                      void (null === _c1
                        ? _n87.appendChild(o)
                        : _n87.insertBefore(o, _c1))
                    );
                  }
                }
                null !== o && el(o, t, e);
              })(t, o, l);
            } finally {
              (null !== h && h.observe(o, Br), (Ir = f), (Dr = a));
            }
          }
          null !== g &&
            (function (t, e, n, o, r) {
              var s = Array.from(t._listeners.mutation),
                i = s.length;
              for (var _t188 = 0; _t188 < i; _t188++) {
                var _s$_t = s[_t188],
                  _i22 = _s$_t[0],
                  _l13 = _s$_t[1];
                for (var _t189 of _l13) {
                  var _s35 = e.get(_t189);
                  void 0 !== _s35 &&
                    _i22(_s35, {
                      dirtyLeaves: o,
                      prevEditorState: r,
                      updateTags: n,
                    });
                }
              }
            })(t, g, y, _, s);
          Uo(l) ||
            null === l ||
            (null !== i && i.is(l)) ||
            t.dispatchCommand(Ne, void 0);
          var C = t._pendingDecorators;
          null !== C &&
            ((t._decorators = C),
            (t._pendingDecorators = null),
            ts("decorator", t, !0, C));
          if (
            ((function (t, e, n) {
              var o = gi(e),
                r = gi(n);
              o !== r && ts("textcontent", t, !0, r);
            })(t, e || s, n),
            ts("update", t, !0, {
              dirtyElements: p,
              dirtyLeaves: _,
              editorState: n,
              mutatedNodes: g,
              normalizedNodes: m,
              prevEditorState: e || s,
              tags: y,
            }),
            !d)
          ) {
            ns(t, t._deferred);
          }
          !(function (t) {
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
              var _e116 = n[0],
                _o65 = n[1];
              rs(t, _e116, _o65);
            }
          })(t);
        })(t, e);
      } finally {
        Rr = n;
      }
    }
    function ts(t, e, n) {
      var r = e._updating;
      e._updating = n;
      try {
        var _n88 = e._listeners[t],
          _r42 = Array.from(_n88);
        for (
          var _len4 = arguments.length,
            o = new Array(_len4 > 3 ? _len4 - 3 : 0),
            _key4 = 3;
          _key4 < _len4;
          _key4++
        ) {
          o[_key4 - 3] = arguments[_key4];
        }
        for (var _ref32 of _r42) {
          var _t190 = _ref32[0];
          var _e117 = _ref32[1];
          {
            _e117 && _e117();
            var _r43 = _t190.apply(void 0, o);
            _n88.has(_t190) ? _n88.set(_t190, _r43) : _r43 && _r43();
          }
        }
      } finally {
        e._updating = r;
      }
    }
    function es(t, e, n, o) {
      var r = Ci(t);
      var s;
      if (!Rr)
        for (var _t191 = 0; _t191 < r.length; _t191++)
          r[_t191]._updating || (r[_t191]._cascadeCount = 0);
      for (var _t192 = 4; _t192 >= 0; _t192--) {
        var _loop = function _loop() {
            var l = r[_i23];
            if (_i23 > 0 && l._updating) {
              s = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e118 = c[_t192];
              if (_e118.size > 0) {
                var _t193 = !1;
                if (
                  (ss(l, function () {
                    for (var _r44 of _e118)
                      if (_r44(n, o)) return void (_t193 = !0);
                  }),
                  _t193)
                )
                  return { v: _t193 };
              }
            }
          },
          _ret;
        for (var _i23 = 0; _i23 < r.length; _i23++) {
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
        var _n89 = t._updating;
        t._updating = !0;
        try {
          for (var _t194 = 0; _t194 < e.length; _t194++) e[_t194]();
        } finally {
          t._updating = _n89;
        }
      }
    }
    function os(e, n) {
      var o = e._updates;
      var r = n || !1;
      for (; 0 !== o.length; ) {
        var _n90 = o.shift();
        if (_n90) {
          var _o66 = _n90[0],
            _s36 = _n90[1],
            _i24 = e._pendingEditorState;
          var _l14 = void 0;
          (void 0 !== _s36 &&
            ((_l14 = _s36.onUpdate),
            _s36.skipTransforms && (r = !0),
            _s36.discrete && (null === _i24 && t(191), (_i24._flushSync = !0)),
            _l14 && e._deferred.push(_l14),
            qr(e, _s36.tag)),
            null == _i24 ? rs(e, _o66, _s36) : _o66());
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
      Bs(null);
      try {
        u &&
          (_
            ? null !== c._selection && (a._selection = c._selection.clone())
            : (a._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  o = nl(ji(t));
                return Uo(n) || null == n ? gr(n, o, t, e) : n.clone();
              })(e, (o && o.event) || null)));
        var _r45 = e._compositionKey;
        (n(),
          (i = os(e, i)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              o = t._selection;
            if (Uo(o)) {
              var _t195 = o.anchor,
                _e119 = o.focus;
              var _r46;
              if (
                ("text" === _t195.type &&
                  ((_r46 = _t195.getNode()), _r46.selectionTransform(n, o)),
                "text" === _e119.type)
              ) {
                var _t196 = _e119.getNode();
                _r46 !== _t196 && _t196.selectionTransform(n, o);
              }
            }
          })(a, e),
          0 !== e._dirtyType &&
            (i
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = t._nodeMap;
                  for (var _t197 of n) {
                    var _e120 = o.get(_t197);
                    Do(_e120) &&
                      _e120.isAttached() &&
                      _e120.isSimpleText() &&
                      !_e120.isUnmergeable() &&
                      Tt(_e120);
                  }
                })(a, e)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = e._dirtyElements,
                    r = t._nodeMap,
                    s = li(),
                    i = new Map();
                  var l = n,
                    c = l.size,
                    a = o,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t198 of l) {
                        var _o67 = r.get(_t198);
                        (Do(_o67) &&
                          _o67.isAttached() &&
                          _o67.isSimpleText() &&
                          !_o67.isUnmergeable() &&
                          Tt(_o67),
                          void 0 !== _o67 && Vr(_o67, s) && Gr(e, _o67, i),
                          n.add(_t198));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        Kr++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t199 of a) {
                      var _n91 = _t199[0],
                        _l15 = _t199[1];
                      if ((o.set(_n91, _l15), !_l15)) continue;
                      var _c10 = r.get(_n91);
                      void 0 !== _c10 && Vr(_c10, s) && Gr(e, _c10, i);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      Kr++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = o));
                })(a, e),
            os(e),
            (function (t, e, n, o) {
              var r = t._nodeMap,
                s = e._nodeMap,
                i = [];
              for (var _ref34 of o) {
                var _t200 = _ref34[0];
                {
                  var _e121 = s.get(_t200);
                  void 0 !== _e121 &&
                    (_e121.isAttached() ||
                      (cs(_e121) && V(_e121, _t200, r, s, i, o),
                      r.has(_t200) || o["delete"](_t200),
                      i.push(_t200)));
                }
              }
              for (var _t201 of n) {
                var _e122 = s.get(_t201);
                void 0 === _e122 ||
                  _e122.isAttached() ||
                  (Xl(_e122) &&
                    null !== _e122.__slots &&
                    V(_e122, _t201, r, s, i, n),
                  r.has(_t201) || n["delete"](_t201),
                  i.push(_t201));
              }
              for (var _t202 of i) s["delete"](_t202);
              var l = Hr(),
                c = l._compositionKey;
              null === c || s.has(c) || (l._compositionKey = null);
            })(c, a, e._dirtyLeaves, e._dirtyElements)));
        _r45 !== e._compositionKey && (a._flushSync = !0);
        var _s37 = a._selection;
        if (Uo(_s37)) {
          e._slotsUsed && cr(_s37);
          var _n92 = a._nodeMap,
            _o68 = _s37.anchor.key,
            _r47 = _s37.focus.key;
          (void 0 !== _n92.get(_o68) && void 0 !== _n92.get(_r47)) || t(19);
        } else jo(_s37) && 0 === _s37._nodes.size && (a._selection = null);
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
        ((Dr = f), (Pr = d), (Ir = h), (e._updating = g), (Kr = 0));
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
      if (Vi(t)) {
        var _e123 = null;
        for (var _n93 of t.getChildren())
          _e123 = _n93.isInline()
            ? (_e123 || _n93.replace(_n93.createParentElementNode())).append(
                _n93,
              )
            : null;
      }
    }
    var _ls4 = (function (_eo2) {
      function ls(t) {
        var _this3;
        ((_this3 = _eo2.call(this, t) || this),
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
      babelHelpers.inheritsLoose(ls, _eo2);
      var _proto10 = ls.prototype;
      _proto10.$config = function $config() {
        return this.config(Symbol["for"]("ElementNode"), {
          $transform: is,
          extends: _eo5,
        });
      };
      _proto10.afterCloneFrom = function afterCloneFrom(e) {
        (_eo2.prototype.afterCloneFrom.call(this, e),
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
        return 0 === this.getChildrenSize() && 0 === rc(this).length;
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
        for (var _e124 of rc(this)) {
          var _n94 = sc(this, _e124);
          cs(_n94) && t.push.apply(t, _n94.getAllTextNodes());
        }
        var e = this.getFirstChild();
        for (; null !== e; ) {
          if ((Do(e) && t.push(e), cs(e))) {
            var _n95 = e.getAllTextNodes();
            t.push.apply(t, _n95);
          }
          e = e.getNextSibling();
        }
        return t;
      };
      _proto10.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; cs(t); ) {
          var _e125 = t.getFirstChild();
          if (null === _e125) break;
          t = _e125;
        }
        return t;
      };
      _proto10.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; cs(t); ) {
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
          var _t203 = e[n - 1];
          return (cs(_t203) && _t203.getLastDescendant()) || _t203 || null;
        }
        var o = e[t];
        return (cs(o) && o.getFirstDescendant()) || o || null;
      };
      _proto10.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : ci(t);
      };
      _proto10.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var e = this.getFirstChild();
        return (null === e && t(45, this.__key), e);
      };
      _proto10.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : ci(t);
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
        var t = dc(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o69 = 0; _o69 < n; _o69++) {
          var _r48 = e[_o69];
          ((t += _r48.getTextContent()),
            cs(_r48) && _o69 !== n - 1 && !_r48.isInline() && (t += v));
        }
        return t;
      };
      _proto10.getTextContentSize = function getTextContentSize() {
        var t = (function (t) {
          var e = 0;
          for (var _n96 of rc(t)) {
            var _o70 = sc(t, _n96);
            null !== _o70 && (e += _o70.getTextContentSize());
          }
          return e;
        })(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o71 = 0; _o71 < n; _o71++) {
          var _r49 = e[_o71];
          ((t += _r49.getTextContentSize()),
            cs(_r49) && _o71 !== n - 1 && !_r49.isInline() && (t += 2));
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
        return ei(this.getLatest().__textFormat, t, e);
      };
      _proto10.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto10.select = function select(t, e) {
        $r();
        var n = _r();
        var o = t,
          r = e;
        var s = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t204 = this.getFirstChild();
            if (Do(_t204) || cs(_t204)) return _t204.select(0, 0);
          } else if (
            !((void 0 !== t && t !== s) || (void 0 !== e && e !== s))
          ) {
            var _t205 = this.getLastChild();
            if (Do(_t205) || cs(_t205)) return _t205.select();
          }
        (void 0 === o && (o = s), void 0 === r && (r = s));
        var i = this.__key;
        return Uo(n)
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
      _proto10.splice = function splice(e, n, o) {
        Zn(this) && t(324, this.__key, this.__type);
        var r = this.getChildrenSize(),
          s = this.getWritable();
        e + n <= r || t(226, String(e), String(n), String(r));
        for (var _t206 of o);
        var i = s.__key,
          l = [],
          c = [],
          a = this.getChildAtIndex(e + n);
        var u = null,
          f = r - n + o.length;
        if (0 !== e)
          if (e === r) u = this.getLastChild();
          else {
            var _t207 = this.getChildAtIndex(e);
            null !== _t207 && (u = _t207.getPreviousSibling());
          }
        if (n > 0) {
          var _e128 = null === u ? this.getFirstChild() : u.getNextSibling();
          for (var _o72 = 0; _o72 < n; _o72++) {
            null === _e128 && t(100);
            var _n97 = _e128.getNextSibling(),
              _o73 = _e128.__key;
            (oi(_e128.getWritable()), c.push(_o73), (_e128 = _n97));
          }
        }
        var d = u;
        for (var _e129 of o) {
          null !== d && _e129.is(d) && (u = d = d.getPreviousSibling());
          var _n98 = _e129.getWritable();
          (_n98.__parent === i && f--, oi(_n98));
          var _o74 = _e129.__key;
          if (null === d) ((s.__first = _o74), (_n98.__prev = null));
          else {
            var _t208 = d.getWritable();
            ((_t208.__next = _o74), (_n98.__prev = _t208.__key));
          }
          (_e129.__key === i && t(76),
            (_n98.__parent = i),
            l.push(_o74),
            (d = _e129));
        }
        if (e + n === r) {
          if (null !== d) {
            ((d.getWritable().__next = null), (s.__last = d.__key));
          }
        } else if (null !== a) {
          var _t209 = a.getWritable();
          if (null !== d) {
            var _e130 = d.getWritable();
            ((_t209.__prev = d.__key), (_e130.__next = a.__key));
          } else _t209.__prev = null;
        }
        if (((s.__size = f), c.length)) {
          var _t210 = _r();
          if (Uo(_t210)) {
            var _e131 = new Set(c),
              _n99 = new Set(l),
              _o75 = _t210.anchor,
              _r50 = _t210.focus;
            (as(_o75, _e131, _n99) && xr(_o75, _o75.getNode(), this, u, a),
              as(_r50, _e131, _n99) && xr(_r50, _r50.getNode(), this, u, a),
              0 !== f || this.canBeEmpty() || Vi(this) || this.remove());
          }
        }
        return s;
      };
      _proto10.getDOMSlot = function getDOMSlot(t) {
        return new _$(t);
      };
      _proto10.exportDOM = function exportDOM(t) {
        var _eo2$prototype$export = _eo2.prototype.exportDOM.call(this, t),
          e = _eo2$prototype$export.element;
        if (xl(e)) {
          var _t211 = this.getIndent();
          _t211 > 0 &&
            ((e.style.paddingInlineStart = 40 * _t211 + "px"),
            e.setAttribute("data-lexical-indent", String(_t211)));
          var _n100 = this.getDirection();
          _n100 && (e.dir = _n100);
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
            _eo2.prototype.exportJSON.call(this),
          ),
          e = this.getTextFormat(),
          n = this.getTextStyle();
        return (
          (0 === e && "" === n) ||
            Vi(this) ||
            this.getChildren().some(Do) ||
            (0 !== e && (t.textFormat = e), "" !== n && (t.textStyle = n)),
          t
        );
      };
      _proto10.updateFromJSON = function updateFromJSON(t) {
        return _eo2.prototype.updateFromJSON
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
        var n = Ml(this, t, e);
        var o = n.getFirstChild();
        for (
          var _t212 = this.getFirstChild();
          _t212;
          _t212 = _t212.getNextSibling()
        ) {
          var _r51 = e.getElementByKey(_t212.getKey());
          null !== _r51 &&
            (null == o
              ? (n.insertChild(_r51), (o = _r51))
              : o !== _r51 && n.replaceChild(_r51, o),
            (o = o.nextSibling));
        }
      };
      return ls;
    })(_eo5);
    function cs(t) {
      return t instanceof _ls4;
    }
    function as(t, e, n) {
      var o = t.getNode();
      for (; o; ) {
        var _t213 = o.__key;
        if (e.has(_t213) && !n.has(_t213)) return !0;
        o = o.getParent();
      }
      return !1;
    }
    var _us = (function (_eo3) {
      function us(t) {
        var _this4;
        ((_this4 = _eo3.call(this, t) || this),
          (_this4.__slotHost = null),
          (_this4.__slots = null));
        return _this4;
      }
      babelHelpers.inheritsLoose(us, _eo3);
      var _proto11 = us.prototype;
      _proto11.afterCloneFrom = function afterCloneFrom(e) {
        (_eo3.prototype.afterCloneFrom.call(this, e),
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
      return us;
    })(_eo5);
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
        for (var _e132 of o) cs(_e132) || fs(_e132) || t(282);
        return _ls.prototype.splice.call(this, e, n, o);
      };
      ds.importJSON = function importJSON(t) {
        return _i().updateFromJSON(t);
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
      return new _ms(J(t._nodeMap), null, t._slotsUsed);
    }
    function _s() {
      return new _ms(new Map([["root", new _ds()]]), null, !1);
    }
    function ps(e) {
      var n = e.exportJSON(),
        o = e.constructor;
      if ((n.type !== o.getType() && t(130, o.name), cs(e))) {
        var _r52 = n.children;
        Array.isArray(_r52) || t(59, o.name);
        var _s38 = e.getChildren();
        for (var _t214 = 0; _t214 < _s38.length; _t214++) {
          var _e133 = ps(_s38[_t214]);
          _r52.push(_e133);
        }
      }
      var r = rc(e);
      if (r.length > 0) {
        var _s39 = {};
        for (var _n101 of r) {
          var _r53 = sc(e, _n101);
          (null === _r53 && t(366, o.name, _n101), (_s39[_n101] = ps(_r53)));
        }
        n.$slots = _s39;
      }
      return n;
    }
    var _ms = (function () {
      function ms(t, e, n) {
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
      var _proto13 = ms.prototype;
      _proto13.isEmpty = function isEmpty() {
        return 1 === this._nodeMap.size && null === this._selection;
      };
      _proto13.read = function read(t, e) {
        return Qr((e && e.editor) || null, this, t);
      };
      _proto13.clone = function clone(t) {
        var e = new ms(
          this._nodeMap,
          void 0 === t ? this._selection : t,
          this._slotsUsed,
        );
        return ((e._readOnly = !0), e);
      };
      _proto13.toJSON = function toJSON() {
        return Qr(null, this, function () {
          return { root: ps(_i()) };
        });
      };
      return ms;
    })();
    var _ys = (function (_ls2) {
      function ys() {
        return _ls2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(ys, _ls2);
      ys.getType = function getType() {
        return "artificial";
      };
      var _proto14 = ys.prototype;
      _proto14.createDOM = function createDOM(t) {
        return al().createElement("div");
      };
      return ys;
    })(_ls4);
    var _xs = (function (_eo4) {
      function xs(t) {
        return _eo4.call(this, t) || this;
      }
      babelHelpers.inheritsLoose(xs, _eo4);
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
        return al().createElement("br");
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
            return Ns(t) || vs(t) ? null : { conversion: Cs, priority: 0 };
          },
        };
      };
      xs.importJSON = function importJSON(t) {
        return Ss().updateFromJSON(t);
      };
      return xs;
    })(_eo5);
    function Cs(t) {
      return { node: Ss() };
    }
    function Ss() {
      return Xi(new _xs());
    }
    function Ts(t) {
      return t instanceof _xs;
    }
    function Ns(t) {
      var e = t.parentElement;
      if (null !== e && kl(e)) {
        var _n102 = e.firstChild;
        if (_n102 === t || (_n102.nextSibling === t && ks(_n102))) {
          var _n103 = e.lastChild;
          if (_n103 === t || (_n103.previousSibling === t && ks(_n103)))
            return !0;
        }
      }
      return !1;
    }
    function vs(t) {
      var e = t.parentElement;
      if (null !== e && kl(e)) {
        var _n104 = e.firstChild;
        if (_n104 === t || (_n104.nextSibling === t && ks(_n104))) return !1;
        var _o76 = e.lastChild;
        if (_o76 === t || (_o76.previousSibling === t && ks(_o76))) return !0;
      }
      return !1;
    }
    function ks(t) {
      return Qs(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
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
        var e = al().createElement("p"),
          n = Di(t.theme, "paragraph");
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
        if (xl(e)) {
          this.isEmpty() && e.append(al().createElement("br"));
          var _t215 = this.getFormatType();
          _t215 && (e.style.textAlign = _t215);
        }
        return { element: e };
      };
      Es.importJSON = function importJSON(t) {
        return bs().updateFromJSON(t);
      };
      _proto16.exportJSON = function exportJSON() {
        var t = _ls3.prototype.exportJSON.call(this);
        if (void 0 === t.textFormat || void 0 === t.textStyle) {
          var _e134 = this.getChildren().find(Do);
          _e134
            ? ((t.textFormat = _e134.getFormat()),
              (t.textStyle = _e134.getStyle()))
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
          (Do(t[0]) && "" === t[0].getTextContent().trim())
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
      if ((Kl(e, t), Rl(t, e), "" === e.getFormatType())) {
        var _n105 = t.getAttribute("align");
        _n105 && _n105 && _n105 in D && e.setFormat(_n105);
      }
      return (Ll(e, t), { node: e });
    }
    function bs() {
      return Xi(new _Es());
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
        (t._blockCursorElement = null),
        null !== t._inputState.handledSelectionCommandTimeoutId &&
          clearTimeout(t._inputState.handledSelectionCommandTimeoutId),
        (t._inputState = {
          collapsedSelectionFormat: {
            format: 0,
            key: "root",
            offset: 0,
            style: "",
            timeStamp: 0,
          },
          compositionEndData: "",
          compositionPhase: "idle",
          hadOrphanedCompositionEvents: !1,
          handledSelectionCommandTimeoutId: null,
          isInsertLineBreak: !1,
          isInsertTextAfterHandledSelectionCommand: !1,
          isSelectionChangeFromDOMUpdate: !1,
          isSelectionChangeFromMouseDown: !1,
          lastBeforeInputInsertTextTimeStamp: 0,
          lastKeyCode: null,
          lastKeyDownTimeStamp: 0,
          postDeleteSelectionToRestore: null,
          unprocessedBeforeInputData: null,
        }));
      var i = t._observer;
      (null !== i && (i.disconnect(), (t._observer = null)),
        null !== e &&
          ((e.textContent = ""),
          (function (t, e) {
            var n = "__lexicalKey_" + e._key;
            delete t[n];
          })(e, t)),
        null !== n &&
          ((n.textContent = ""), s.set("root", n), ui(n, t, "root")));
    }
    function Is(t) {
      var e = new Set(),
        n = new Set();
      for (var _ref36 of Yl(t)) {
        var _o77 = _ref36.klass;
        var _r54 = _ref36.ownNodeConfig;
        {
          var _t216 = _o77.transform;
          if (!n.has(_t216)) {
            n.add(_t216);
            var _r55 = _o77.transform();
            _r55 && e.add(_r55);
          }
          if (_r54) {
            var _t217 = _r54.$transform;
            _t217 && e.add(_t217);
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
          (this._key = Si()),
          (this._onError = r),
          (this._onWarn = s),
          (this._htmlConversions = i),
          (this._editable = l),
          (this._headless = null !== e && e._headless),
          (this._window = null),
          (this._blockCursorElement = null),
          (this._slotsUsed = !1),
          (this._inputState = {
            collapsedSelectionFormat: {
              format: 0,
              key: "root",
              offset: 0,
              style: "",
              timeStamp: 0,
            },
            compositionEndData: "",
            compositionPhase: "idle",
            hadOrphanedCompositionEvents: !1,
            handledSelectionCommandTimeoutId: null,
            isInsertLineBreak: !1,
            isInsertTextAfterHandledSelectionCommand: !1,
            isSelectionChangeFromDOMUpdate: !1,
            isSelectionChangeFromMouseDown: !1,
            lastBeforeInputInsertTextTimeStamp: 0,
            lastKeyCode: null,
            lastKeyDownTimeStamp: 0,
            postDeleteSelectionToRestore: null,
            unprocessedBeforeInputData: null,
          }));
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
        return pa(Rs(e, t, t(this._rootElement, null) || void 0), function () {
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
          o = Pl(n).get(e.getType());
        if (!o) return;
        var r = new Map();
        for (var _t218 of o.keys()) r.set(_t218, "created");
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
          var _t219 = this.registerNodeTransformToKlass(r, e);
          o.push(_t219);
        }
        return (
          (function (t, e) {
            var n = Pl(t.getEditorState()),
              o = [];
            for (var _t220 of e) {
              var _e135 = n.get(_t220);
              _e135 && o.push(_e135);
            }
            if (0 === o.length) return;
            t.update(
              function () {
                for (var _t221 of o)
                  for (var _e136 of _t221.keys()) {
                    var _t222 = ci(_e136);
                    _t222 && _t222.markDirty();
                  }
              },
              null === t._pendingEditorState ? { tag: oo } : void 0,
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
        return Li(this, t, e);
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
          var _n106 = Di(this._config.theme, "root"),
            _o78 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            Ds(this, e, t, _o78, { preserveUpdateQueue: !0 }),
            null !== e &&
              (this._config.disableEvents || qn(e),
              null != _n106 &&
                (_e$classList3 = e.classList).remove.apply(
                  _e$classList3,
                  _n106,
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e137 = Hi(t),
              _o79 = t.style;
            ((_o79.userSelect = "text"),
              (_o79.whiteSpace = "pre-wrap"),
              (_o79.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e137),
              (this._dirtyType = 2),
              st(this),
              this._updateTags.add(oo),
              Zr(this),
              this._config.disableEvents ||
                (function (t, e) {
                  var n = t.ownerDocument;
                  vn.set(t, n);
                  var o = kn.get(n);
                  (void 0 === o &&
                    ((o = { editors: new Set(), hasShadowEditor: void 0 }),
                    kn.set(n, o)),
                    o.editors.add(e),
                    (o.hasShadowEditor = void 0),
                    (t.__lexicalEditor = e));
                  var r = Hn(t);
                  r.push(En.register(n));
                  var _loop2 = function _loop2() {
                    var _Nn$_n = Nn[_n107],
                      o = _Nn$_n[0],
                      s = _Nn$_n[1],
                      i =
                        "function" == typeof s
                          ? function (t) {
                              Gn(t) ||
                                (Jn(t),
                                (e.isEditable() || "click" === o) && s(t, e));
                            }
                          : function (t) {
                              if (Gn(t)) return;
                              Jn(t);
                              var n = e.isEditable();
                              switch (o) {
                                case "cut":
                                  return n && Li(e, fn, t);
                                case "copy":
                                  return Li(e, un, t);
                                case "paste":
                                  return n && Li(e, Pe, t);
                                case "dragstart":
                                  return n && Li(e, ln, t);
                                case "dragover":
                                  return n && Li(e, cn, t);
                                case "dragend":
                                  return n && Li(e, an, t);
                                case "focus":
                                  return n && Li(e, mn, t);
                                case "blur":
                                  return n && Li(e, yn, t);
                                case "drop":
                                  return n && Li(e, rn, t);
                              }
                            };
                    r.push(Sn(t, o, i));
                  };
                  for (var _n107 = 0; _n107 < Nn.length; _n107++) {
                    _loop2();
                  }
                })(t, this),
              null != _n106 &&
                (_t$classList = t.classList).add.apply(_t$classList, _n106));
          } else ((this._window = null), this._updateTags.add(oo), Zr(this));
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
                for (var _ref38 of o._nodeMap.entries()) {
                  var _t223 = _ref38[0];
                  var _e138 = _ref38[1];
                  cs(_e138)
                    ? _this15._dirtyElements.set(_t223, !0)
                    : _this15._dirtyLeaves.add(_t223);
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
            Bs(null));
          try {
            var _r56 = e._nodes;
            (Xr(t.root, _r56), n && n(), (o._readOnly = !0), (o._parsed = !0));
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
          var _len6 = arguments.length, t = new Array(_len6), _key6 = 0;
          _key6 < _len6;
          _key6++
        ) {
          t[_key6] = arguments[_key6];
        }
        var _ref39 = 1 === t.length ? ["force-commit", t[0]] : t,
          e = _ref39[0],
          n = _ref39[1];
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
              r = _i();
            (null !== o
              ? o.dirty || pi(o.clone())
              : 0 !== r.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? r.selectStart()
                  : r.selectEnd()),
              $i("focus"),
              Wi(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto17.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = nl(this._window);
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
    var Ks = null;
    function Bs(t) {
      Ks = t;
    }
    var zs = 1;
    function $s(e, n) {
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
              return Zs(e) || rl(e) ? ml(e) : null;
            })();
      if (!xl(n)) return !1;
      if (n.hasAttribute("data-lexical-slot")) return !1;
      var o = di(n),
        r = n.nodeName;
      return (
        no(o) &&
        ("INPUT" === r ||
          "TEXTAREA" === r ||
          ("true" === n.contentEditable && null == Vs(n)))
      );
    }
    var js = Hs;
    function Ys(t, e, n) {
      var o = t.getRootElement();
      if (!o) return !1;
      try {
        if (!e || !o.contains(e) || !o.contains(n)) return !1;
      } catch (t) {
        return !1;
      }
      return (
        Gs(e) === t &&
        t.read("latest", function () {
          return !Hs(e);
        })
      );
    }
    function Js(t) {
      return t instanceof _Ls;
    }
    function Gs(t) {
      var e = t;
      for (; null != e; ) {
        var _t224 = Vs(e);
        if (Js(_t224)) return _t224;
        e = Bi(e);
      }
      return null;
    }
    function Vs(t) {
      return t ? t.__lexicalEditor : null;
    }
    function qs(t) {
      return Ro(t) || t.isToken();
    }
    function Xs(t) {
      return qs(t) || t.isSegmented();
    }
    function Qs(t) {
      return Cl(t) && 3 === t.nodeType;
    }
    function Zs(t) {
      return Cl(t) && 9 === t.nodeType;
    }
    function ti(t) {
      var e = t;
      for (; null != e; ) {
        if (Qs(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function ei(t, e, n) {
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
    function ni(t, e) {
      var n = (function () {
        var t = Ks;
        return ((Ks = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      ($r(), Wr());
      var o = Hr(),
        r = Ur(),
        s = "" + zs++;
      (r._nodeMap.set(s, t),
        cs(t) ? o._dirtyElements.set(s, !0) : o._dirtyLeaves.add(s),
        o._cloneNotNeeded.add(s),
        0 === o._dirtyType && (o._dirtyType = 1),
        (t.__key = s));
    }
    function oi(e) {
      null !== Zl(e) && t(380, e.__key, String(Zl(e)));
      var n = e.getParent();
      if (null !== n) {
        var _t225 = e.getWritable(),
          _o80 = n.getWritable(),
          _r57 = e.getPreviousSibling(),
          _s40 = e.getNextSibling(),
          _i25 = null !== _s40 ? _s40.__key : null,
          _l16 = null !== _r57 ? _r57.__key : null,
          _c11 = null !== _r57 ? _r57.getWritable() : null,
          _a1 = null !== _s40 ? _s40.getWritable() : null;
        (null === _r57 && (_o80.__first = _i25),
          null === _s40 && (_o80.__last = _l16),
          null !== _c11 && (_c11.__next = _i25),
          null !== _a1 && (_a1.__prev = _l16),
          (_t225.__prev = null),
          (_t225.__next = null),
          (_t225.__parent = null),
          _o80.__size--);
      }
    }
    var ri = oi;
    function si(e) {
      (Wr(), Zn(e) && t(323, e.__key, e.__type));
      var n = e.getLatest(),
        o = null !== n.__parent ? n.__parent : Ql(n) ? n.__slotHost : null,
        r = Ur(),
        s = Hr(),
        i = r._nodeMap,
        l = s._dirtyElements;
      null !== o &&
        (function (t, e, n) {
          var o = t;
          for (; null !== o; ) {
            if (n.has(o)) return;
            var _t226 = e.get(o);
            if (void 0 === _t226) break;
            (n.set(o, !1),
              (o =
                null !== _t226.__parent
                  ? _t226.__parent
                  : Ql(_t226)
                    ? _t226.__slotHost
                    : null));
          }
        })(o, i, l);
      var c = n.__key;
      (0 === s._dirtyType && (s._dirtyType = 1),
        cs(e) ? l.set(c, !0) : s._dirtyLeaves.add(c));
    }
    function ii(t) {
      $r();
      var e = Hr(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t227 = ci(n);
          null !== _t227 && _t227.getWritable();
        }
        if (null !== t) {
          var _e139 = ci(t);
          null !== _e139 && _e139.getWritable();
        }
      }
    }
    function li() {
      if (zr()) return null;
      return Hr()._compositionKey;
    }
    function ci(t, e) {
      var n = (e || Ur())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function ai(t, e) {
      var n = fi(t, Hr());
      return void 0 !== n ? ci(n, e) : null;
    }
    function ui(t, e, n) {
      t["__lexicalKey_" + e._key] = n;
    }
    function fi(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function di(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t228 = ai(n, e);
        if (null !== _t228) return _t228;
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
      return Ur()._nodeMap.get("root");
    }
    function pi(t) {
      $r();
      var e = Ur();
      (null !== t &&
        ((t.dirty = !0),
        t.setCachedNodes(null),
        Uo(t) && Hr()._slotsUsed && cr(t)),
        (e._selection = t));
    }
    function mi() {
      $r();
      rt(Hr());
    }
    function yi(t) {
      var e = (function (t, e) {
        var n = t;
        for (; null != n; ) {
          var _t229 = fi(n, e);
          if (void 0 !== _t229) return _t229;
          n = Bi(n);
        }
        return null;
      })(t, Hr());
      return null === e ? null : ci(e);
    }
    function xi(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function Ci(t) {
      var e = [];
      for (var _n108 = t; null !== _n108; _n108 = _n108._parentEditor)
        e.push(_n108);
      return e;
    }
    function Si() {
      return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substring(0, 5);
    }
    function Ti(t) {
      return Qs(t) ? t.nodeValue : null;
    }
    function Ni(t, e, n) {
      var o = nl(ji(e));
      if (null === o) return;
      var r = dl(o, e._rootElement),
        s = r.anchorNode;
      var i = r.anchorOffset,
        l = r.focusOffset;
      if (null !== s) {
        var _e140 = Ti(s);
        var _o81 = di(s);
        if (null !== _e140 && Do(_o81)) {
          if ((_e140 === N || _e140 === k) && n) {
            var _t230 = n.length;
            ((_e140 = n), (i = _t230), (l = _t230));
          }
          null !== _e140 && vi(_o81, _e140, i, l, t);
        }
      }
    }
    function vi(t, e, n, o, r) {
      var s = t;
      if (s.isAttached() && (r || !s.isDirty())) {
        var _i26 = s.isComposing();
        if (s.isToken() && _i26) return;
        var _c12 = e;
        if (
          (_i26 || r) &&
          (e.endsWith(N) && (_c12 = e.slice(0, -N.length)), r)
        ) {
          var _t231 = k;
          var _e141;
          for (; -1 !== (_e141 = _c12.indexOf(_t231)); )
            ((_c12 = _c12.slice(0, _e141) + _c12.slice(_e141 + _t231.length)),
              null !== n &&
                n > _e141 &&
                (n = Math.max(_e141, n - _t231.length)),
              null !== o &&
                o > _e141 &&
                (o = Math.max(_e141, o - _t231.length)));
        }
        var _u10 = s.getTextContent();
        if (r || _c12 !== _u10) {
          var _e142 = _r();
          if ("" === _c12) {
            if ((ii(null), a || l || d)) s.remove();
            else {
              var _t232 = Hr();
              (ki(s, "", _e142),
                setTimeout(function () {
                  _t232.update(function () {
                    s.isAttached() && "" === s.getTextContent() && s.remove();
                  });
                }, 20));
            }
            return;
          }
          var _r58 = s.getParent(),
            _u11 = pr(),
            _f10 = s.getTextContentSize(),
            _h8 = li(),
            _g8 = s.getKey();
          if (
            (s.isToken() && !_i26) ||
            (null !== _h8 && _g8 === _h8 && !_i26) ||
            (Uo(_u11) &&
              ((null !== _r58 &&
                !_r58.canInsertTextBefore() &&
                0 === _u11.anchor.offset) ||
                (_u11.anchor.key === t.__key &&
                  0 === _u11.anchor.offset &&
                  !s.canInsertTextBefore() &&
                  !_i26) ||
                (_u11.focus.key === t.__key &&
                  _u11.focus.offset === _f10 &&
                  !s.canInsertTextAfter() &&
                  !_i26)))
          )
            return void s.markDirty();
          if (!Uo(_e142) || null === n || null === o)
            return void ki(s, _c12, _e142);
          if ((_e142.setTextNodeRange(s, n, s, o), s.isSegmented())) {
            var _t233 = wo(s.getTextContent());
            (s.replace(_t233), (s = _t233));
          }
          ki(s, _c12, _e142);
        }
      }
    }
    function ki(t, e, n) {
      if ((t.setTextContent(e), Uo(n))) {
        var _e143 = t.getKey();
        var _o82 = !1;
        for (var _r59 of ["anchor", "focus"]) {
          var _s41 = n[_r59];
          "text" === _s41.type &&
            _s41.key === _e143 &&
            ((_s41.offset = Fc(t, _s41.offset, "clamp")), (_o82 = !0));
        }
        _o82 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
      }
    }
    function Ei(t, e, n) {
      var o = e[n] || !1;
      return "any" === o || o === t[n];
    }
    function Oi(t, e) {
      return (
        Ei(t, e, "altKey") &&
        Ei(t, e, "ctrlKey") &&
        Ei(t, e, "shiftKey") &&
        Ei(t, e, "metaKey")
      );
    }
    function bi(t, e, n) {
      if (!Oi(t, n)) return !1;
      if (t.key.toLowerCase() === e.toLowerCase()) return !0;
      if (e.length > 1) return !1;
      if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
      if (t.code.startsWith("Digit") && /^\d$/.test(e))
        return t.code === "Digit" + e;
      var o = "Key" + e.toUpperCase();
      return t.code === o;
    }
    var Mi = { ctrlKey: !r, metaKey: r },
      Ai = { altKey: r, ctrlKey: !r };
    function wi(t) {
      return "Backspace" === t.key;
    }
    function Di(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        o = n[e];
      if (void 0 !== o) return o;
      var r = t[e];
      if ("string" == typeof r) {
        var _t234 = _a(r);
        return ((n[e] = _t234), _t234);
      }
      return r;
    }
    function Ii(e, n, o, r, s) {
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
    function Pi(t, e, n) {
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
    function Fi(t, e) {
      var n = t.offset;
      if ("element" === t.type) {
        return Pi(t.getNode(), e, n);
      }
      {
        var _o83 = t.getNode();
        if ((e && 0 === n) || (!e && n === _o83.getTextContentSize())) {
          var _t235 = e ? _o83.getPreviousSibling() : _o83.getNextSibling();
          return null === _t235
            ? Pi(
                _o83.getParentOrThrow(),
                e,
                _o83.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t235;
        }
      }
      return null;
    }
    function Ri(t) {
      var e = ji(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function Li(t, e, n) {
      return es(t, e, n, t);
    }
    function Ki(e, n) {
      var o = e._keyToDOMMap.get(n);
      return (void 0 === o && t(75, n), o);
    }
    function Bi(t) {
      var e = t.assignedSlot || t.parentElement;
      if (null !== e) return e;
      var n = t.parentNode;
      return rl(n) ? n.host : null;
    }
    function zi(t) {
      return Zs(t) ? t : xl(t) ? t.ownerDocument : null;
    }
    function $i(t) {
      $r();
      Hr()._updateTags.add(t);
    }
    function Wi(t) {
      $r();
      Hr()._deferred.push(t);
    }
    function Ui(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function Hi(t) {
      var e = zi(t);
      return e ? e.defaultView : null;
    }
    function ji(e) {
      var n = e._window;
      return (null === n && t(78), n);
    }
    function Yi(t) {
      return (cs(t) && t.isInline()) || (fs(t) && t.isInline());
    }
    function Ji(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== Zl(e) && cs(e)) return e;
        var _t236 = e.getParentOrThrow();
        if (Vi(_t236)) return _t236;
        e = _t236;
      }
      return e;
    }
    function Gi(t) {
      return cs(t) && t.isShadowRoot();
    }
    function Vi(t) {
      return hs(t) || Gi(t);
    }
    function qi(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t);
      return (
        ni(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function Xi(e) {
      var n = Hr(),
        o = e.getType(),
        r = Ws(n, o);
      void 0 === r && t(200, e.constructor.name, o);
      var s = r.replace,
        i = r.replaceWithKlass;
      if (null !== s) {
        var _n109 = s(e),
          _r60 = _n109.constructor;
        return (
          null !== i
            ? _n109 instanceof i ||
              t(
                201,
                i.name,
                i.getType(),
                _r60.name,
                _r60.getType(),
                e.constructor.name,
                o,
              )
            : (_n109 instanceof e.constructor && _r60 !== e.constructor) ||
              t(202, _r60.name, _r60.getType(), e.constructor.name, o),
          _n109.__key === e.__key &&
            t(203, e.constructor.name, o, _r60.name, _r60.getType()),
          _n109
        );
      }
      return e;
    }
    function Qi(e, n) {
      !hs(e.getParent()) || cs(n) || fs(n) || t(99);
    }
    function Zi(e) {
      var n = ci(e);
      return (null === n && t(63, e), n);
    }
    function tl(t) {
      if (!t || t.isInline()) return !1;
      if (fs(t)) return !0;
      if (cs(t)) {
        if (t.isShadowRoot()) {
          var _e144 = t.getParent();
          return !(cs(_e144) && _e144.isShadowRoot());
        }
        return !t.canBeEmpty();
      }
      return !1;
    }
    function el(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var o = t.parentElement;
      null !== o && o.removeChild(t);
    }
    function nl(t) {
      return n ? (t || window).getSelection() : null;
    }
    function ol(t) {
      var e = Hi(t);
      return e ? e.getSelection() : null;
    }
    function rl(t) {
      return Sl(t) && "host" in t;
    }
    var sl = [];
    function il(t) {
      var e = t.getRootNode();
      if (e === t || !rl(e)) return sl;
      var n = [e];
      var o = e.host;
      for (;;) {
        var _t237 = o.getRootNode();
        if (_t237 === o || !rl(_t237)) break;
        (n.push(_t237), (o = _t237.host));
      }
      return n;
    }
    function* ll(t) {
      var e = [t];
      var n;
      for (; (n = e.pop()); ) {
        yield* n.querySelectorAll('[data-lexical-editor="true"]');
        var _t238 = (Zs(n) ? n : n.ownerDocument).createTreeWalker(
          n,
          NodeFilter.SHOW_ELEMENT,
        );
        var _o84 = void 0;
        for (; (_o84 = _t238.nextNode()); )
          _o84.shadowRoot && e.push(_o84.shadowRoot);
      }
    }
    function cl(t) {
      return null !== t ? t.ownerDocument : document;
    }
    function al() {
      var t = Jr();
      return cl(null !== t ? t._rootElement : null);
    }
    function ul(t, e) {
      if (null === e || "function" != typeof t.getComposedRanges) return null;
      var n = il(e);
      if (0 === n.length) return null;
      var o = t.getComposedRanges;
      try {
        var _e145 = o.call(t, { shadowRoots: n })[0];
        if (void 0 !== _e145) return _e145;
      } catch (t) {}
      try {
        var _e146 = o.apply(t, n)[0];
        if (void 0 !== _e146) return _e146;
      } catch (t) {}
      return null;
    }
    function fl(t, e) {
      var n = ul(t, e);
      if (null !== n) {
        var _t239 = hl(n);
        if (null !== _t239) return _t239;
      }
      return t.rangeCount > 0 ? t.getRangeAt(0) : null;
    }
    function dl(t, e) {
      var n = ul(t, e);
      return null === n ? t : gl(n, _l(t));
    }
    function hl(t) {
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
    function gl(t, e) {
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
    function _l(t) {
      return t.direction;
    }
    function pl(t) {
      var e = t.getRootNode();
      return Zs(e) || rl(e) ? e.activeElement : null;
    }
    function ml(t) {
      var e = t.activeElement;
      for (; null !== e && null !== e.shadowRoot; ) {
        var _t240 = e.shadowRoot.activeElement;
        if (null === _t240) break;
        e = _t240;
      }
      return e;
    }
    function yl(t) {
      var e = t.target;
      if (
        null !== e &&
        xl(e) &&
        null !== e.shadowRoot &&
        "function" == typeof t.composedPath
      ) {
        var _e147 = t.composedPath();
        if (_e147.length > 0) return _e147[0];
      }
      return e;
    }
    function xl(t) {
      return Cl(t) && 1 === t.nodeType;
    }
    function Cl(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function Sl(t) {
      return Cl(t) && 11 === t.nodeType;
    }
    var Tl =
      /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
    function Nl(t) {
      return (
        !(!xl(t) || !t.style.display.startsWith("inline")) ||
        Tl.test(t.nodeName)
      );
    }
    var vl =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function kl(t) {
      return (
        (!xl(t) || !t.style.display.startsWith("inline")) && vl.test(t.nodeName)
      );
    }
    function El(t) {
      if (fs(t) && !t.isInline()) return !0;
      if (!cs(t) || Vi(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || Ts(e) || Do(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function Ol() {
      return Hr();
    }
    function bl(t) {
      if (t === void 0) {
        t = Ol();
      }
      return t._config.dom || Ps;
    }
    function Ml(e, n, o) {
      if (o === void 0) {
        o = Ol();
      }
      var r = bl(o).$getDOMSlot(e, n, o);
      return (cs(e) && (Al(r) || t(344, e.getKey(), e.getType())), r);
    }
    function Al(t) {
      return t instanceof _$;
    }
    function wl(t, e, n) {
      if (n === void 0) {
        n = Ol();
      }
      return ti(Ml(t, e, n).element);
    }
    var Dl = new WeakMap(),
      Il = new Map();
    function Pl(e) {
      if (!e._readOnly && e.isEmpty()) return Il;
      e._readOnly || t(192);
      var n = Dl.get(e);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref41 of t._nodeMap) {
              var _n110 = _ref41[0];
              var _o85 = _ref41[1];
              {
                var _t241 = _o85.__type;
                var _r61 = e.get(_t241);
                (_r61 || ((_r61 = new Map()), e.set(_t241, _r61)),
                  _r61.set(_n110, _o85));
              }
            }
            return e;
          })(e)),
          Dl.set(e, n)),
        n
      );
    }
    function Fl(t) {
      var e = t.constructor.clone(t);
      return (e.afterCloneFrom(t), e);
    }
    function Rl(t, e) {
      var n = t.getAttribute("data-lexical-indent");
      if (null !== n) {
        var _t242 = parseInt(n, 10);
        if (Number.isFinite(_t242) && _t242 >= 0)
          return void e.setIndent(_t242);
      }
      var o = parseInt(t.style.paddingInlineStart, 10) || 0,
        r = Math.round(o / 40);
      e.setIndent(r);
    }
    function Ll(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function Kl(t, e) {
      var n = e.style.textAlign;
      return n && n in D ? t.setFormat(n) : t;
    }
    function Bl(t, e) {
      ((t.__lexicalUnmanaged = !0),
        e &&
          void 0 !== e.captureSelection &&
          (t.__lexicalCapturedSelection = e.captureSelection));
    }
    function zl(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function $l(t, e) {
      if (e === void 0) {
        e = Ol();
      }
      var n = e.isEditable();
      ((t.contentEditable = n ? "true" : "false"),
        n ? (t.__lexicalEditor = e) : delete t.__lexicalEditor);
    }
    function Wl(t, e) {
      var n = t;
      for (; null != n; ) {
        if (!0 === n.__lexicalCapturedSelection) return !0;
        if (xl(n) && n.hasAttribute("data-lexical-slot")) return !1;
        if (void 0 !== fi(n, e)) return !1;
        n = Bi(n);
      }
      return !1;
    }
    function Ul(t, e) {
      return (
        (function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        })(t, e) && t[e] !== _eo5[e]
      );
    }
    var Hl = new WeakMap();
    function jl(e) {
      var n = Hl.get(e);
      if (n) return n;
      var o =
          null != e.prototype && R in e.prototype ? e.prototype[R]() : void 0,
        r = (function (e) {
          if (!(e === _eo5 || e.prototype instanceof _eo5)) {
            var _n111 = "<unknown>",
              _o86 = "<unknown>";
            try {
              _n111 = e.getType();
            } catch (t) {}
            try {
              _Ls.version && (_o86 = JSON.parse(_Ls.version));
            } catch (t) {}
            t(290, e.name, _n111, _o86);
          }
          return e === _us || e === _ls4 || e === _eo5;
        })(e),
        s = !r && Ul(e, "getType") ? e.getType() : void 0;
      var i,
        l = s;
      if (o)
        if (s) i = o[s];
        else {
          for (var _ref43 of Object.entries(o)) {
            var _t243 = _ref43[0];
            var _e148 = _ref43[1];
            ((l = _t243), (i = _e148));
          }
          if (!i)
            for (var _t244 of Object.getOwnPropertySymbols(o)) {
              var _e149 = o[_t244];
              if (_e149) {
                i = _e149;
                break;
              }
            }
        }
      if (
        !r &&
        l &&
        (Ul(e, "getType") ||
          (e.getType = function () {
            return l;
          }),
        Ul(e, "clone") ||
          (e.clone = function (t) {
            return (Bs(t), new e());
          }),
        Ul(e, "importJSON") ||
          (e.importJSON =
            (i && i.$importJSON) ||
            function (t) {
              return new e().updateFromJSON(t);
            }),
        !Ul(e, "importDOM") && i)
      ) {
        var _i27 = i,
          _t245 = _i27.importDOM;
        _t245 &&
          (e.importDOM = function () {
            return _t245;
          });
      }
      var c = { klass: e, ownNodeConfig: i, ownNodeType: l };
      return (Hl.set(e, c), c);
    }
    function* Yl(t) {
      for (var _e150 = t; _e150 && (_e150 === _eo5 || no(_e150.prototype)); ) {
        var _t246 = jl(_e150);
        (yield _t246,
          (_e150 =
            (_t246.ownNodeConfig && _t246.ownNodeConfig["extends"]) ||
            Vl(_e150)));
      }
    }
    var Jl = function Jl(t, e) {
      var n = t;
      for (; null != n && !hs(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function Gl(e, n) {
      var o = [];
      var r = e.__first;
      for (; null !== r; ) {
        var _e151 = null === n ? ci(r) : n.get(r);
        (null == _e151 && t(174), o.push(r), (r = _e151.__next));
      }
      return o;
    }
    function Vl(t) {
      var e = Object.getPrototypeOf(t);
      if ("function" == typeof e && e !== Function.prototype) return e;
      var n = t.prototype && Object.getPrototypeOf(t.prototype);
      return n ? n.constructor : null;
    }
    var ql = new Map();
    function Xl(t) {
      return cs(t) || fs(t);
    }
    function Ql(t) {
      return cs(t) || fs(t);
    }
    function Zl(t) {
      var e = t.getLatest();
      return Ql(e) ? e.__slotHost : null;
    }
    function tc(e) {
      var n = Zl(e);
      if (null === n) return null;
      var o = ci(n);
      return (cs(o) || fs(o) || t(370), o);
    }
    function ec(t) {
      var e = tc(t);
      if (null === e) return null;
      var n = t.getLatest().__key;
      for (var _ref45 of oc(e)) {
        var _t247 = _ref45[0];
        var _o87 = _ref45[1];
        if (_o87 === n) return _t247;
      }
      return null;
    }
    function nc(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== Zl(e)) return e;
        e = e.getParent();
      }
      return null;
    }
    function oc(t) {
      var e = t.getLatest();
      return Xl(e) && null !== e.__slots ? e.__slots : ql;
    }
    function rc(t) {
      return Array.from(oc(t).keys());
    }
    function sc(t, e) {
      var n = oc(t).get(e);
      return void 0 === n ? null : ci(n);
    }
    var ic = ["__proto__", "constructor", "prototype"],
      lc = Symbol("slotMapOwner");
    function cc(t) {
      var e = t.__slots;
      return (
        (null !== e && e[lc] === t) ||
          ((e = new Map(e)), (e[lc] = t), (t.__slots = e)),
        e
      );
    }
    var ac = new WeakMap(),
      uc = [];
    function fc(t) {
      for (var _ref47 of Yl(t)) {
        var _e152 = _ref47.ownNodeConfig;
        {
          var _t248 = _e152 && _e152.slots;
          if (_t248) return _t248;
        }
      }
      return uc;
    }
    function dc(t) {
      var e = "";
      for (var _n112 of rc(t)) {
        var _o88 = sc(t, _n112);
        null !== _o88 && (e += _o88.getTextContent());
      }
      return e;
    }
    function hc(t, e, n) {
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
    function gc(e) {
      var n = e.__slots;
      if (null === n || n.size < 2) return;
      var o = (function (e) {
        var n = ac.get(e);
        if (void 0 === n) {
          var _o89 = fc(e),
            _r62 = new Map();
          for (var _n113 of _o89)
            (ic.includes(_n113) && t(371, e.name, _n113),
              _r62.has(_n113) && t(372, e.name, _n113),
              _r62.set(_n113, _r62.size));
          ((n = _r62), ac.set(e, n));
        }
        return n;
      })(e.constructor);
      var r = null,
        s = !0;
      for (var _t249 of n.keys()) {
        if (null !== r && hc(r, _t249, o) > 0) {
          s = !1;
          break;
        }
        r = _t249;
      }
      if (s) return;
      var i = Array.from(n).sort(function (_ref48, _ref49) {
        var t = _ref48[0];
        var e = _ref49[0];
        return hc(t, e, o);
      });
      n.clear();
      for (var _ref51 of i) {
        var _t250 = _ref51[0];
        var _e153 = _ref51[1];
        n.set(_t250, _e153);
      }
    }
    function _c(e, n, o) {
      ("__proto__" !== n && "constructor" !== n && "prototype" !== n) ||
        t(373, n);
      var r = e.getLatest();
      if (null !== r.__slots && r.__slots.get(n) === o.getLatest().__key)
        return r;
      ((!cs(o) && !fs(o)) || o.isInline()) && t(374, o.__key);
      var s = e.getWritable(),
        i = cc(s),
        l = i.get(n);
      void 0 !== l && yc(l);
      var c = o.getWritable(),
        a = tc(c);
      if (null !== a) {
        var _t251 = ec(c);
        (null !== _t251 && cc(a.getWritable())["delete"](_t251),
          (c.__slotHost = null));
      }
      return (
        oi(c),
        (c.__slotHost = s.__key),
        i.set(n, c.__key),
        gc(s),
        (function () {
          var t = Ol();
          ((t._slotsUsed = !0),
            t._pendingEditorState && (t._pendingEditorState._slotsUsed = !0));
        })(),
        s
      );
    }
    function pc(t, e) {
      var n = t.getWritable();
      if (null === n.__slots) return n;
      var o = n.__slots.get(e);
      return (void 0 !== o && (yc(o), cc(n)["delete"](e)), n);
    }
    function mc(t, e) {}
    function yc(e) {
      var n = ci(e);
      if (null === n) return;
      var o = n.getWritable();
      (Ql(o) || t(377, e), (o.__slotHost = null), o.remove());
    }
    var xc = { next: "previous", previous: "next" };
    var _Cc4 = (function () {
      function Cc(t) {
        this.origin = t;
      }
      var _proto18 = Cc.prototype;
      _proto18[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return jc({
            hasNext: bc,
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
        return Ic(this.getNodeAtCaret(), this.direction);
      };
      _proto18.getSiblingCaret = function getSiblingCaret() {
        return Ic(this.origin, this.direction);
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
          var _t252 = s.getAdjacentCaret();
          null !== _t252 && l.size < e;
          _t252 = _t252.getAdjacentCaret()
        ) {
          var _e154 = _t252.origin.getWritable();
          l.set(_e154.getKey(), _e154);
        }
        for (var _e155 of r) {
          if (l.size > 0) {
            var _n114 = s.getNodeAtCaret();
            if (_n114) {
              if (
                (l["delete"](_n114.getKey()),
                l["delete"](_e155.getKey()),
                _n114.is(_e155) || s.origin.is(_e155))
              );
              else {
                var _t253 = _e155.getParent();
                (_t253 && _t253.is(i) && _e155.remove(), _n114.replace(_e155));
              }
            } else null === _n114 && t(263, Array.from(l).join(" "));
          } else s.insert(_e155);
          s = Ic(_e155, this.direction);
        }
        for (var _t254 of l.values()) _t254.remove();
        return this;
      };
      return Cc;
    })();
    var _Sc3 = (function (_Cc) {
      function Sc() {
        var _this6;
        for (
          var _len7 = arguments.length, args = new Array(_len7), _key7 = 0;
          _key7 < _len7;
          _key7++
        ) {
          args[_key7] = arguments[_key7];
        }
        return (
          ((_this6 = _Cc.call.apply(_Cc, [this].concat(args)) || this),
          (_this6.type = "child"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(Sc, _Cc);
      var _proto19 = Sc.prototype;
      _proto19.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Lc(t, this.direction);
      };
      _proto19.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Ic(vc(this.getParentAtCaret(), t), this.direction);
      };
      _proto19.getFlipped = function getFlipped() {
        var t = Nc(this.direction);
        return Ic(this.getNodeAtCaret(), t) || Lc(this.origin, t);
      };
      _proto19.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto19.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto19.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof Sc &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto19.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return Sc;
    })(_Cc4);
    var Tc = { root: hs, shadowRoot: Vi };
    function Nc(t) {
      return xc[t];
    }
    function vc(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return null === t || Tc[e](t) ? null : null === Zl(t) ? t : null;
    }
    var _kc3 = (function (_Cc2) {
      function kc() {
        var _this7;
        for (
          var _len8 = arguments.length, args = new Array(_len8), _key8 = 0;
          _key8 < _len8;
          _key8++
        ) {
          args[_key8] = arguments[_key8];
        }
        return (
          ((_this7 = _Cc2.call.apply(_Cc2, [this].concat(args)) || this),
          (_this7.type = "sibling"),
          babelHelpers.assertThisInitialized(_this7)) ||
          babelHelpers.assertThisInitialized(_this7)
        );
      }
      babelHelpers.inheritsLoose(kc, _Cc2);
      var _proto20 = kc.prototype;
      _proto20.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Ic(t, this.direction);
      };
      _proto20.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto20.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto20.getChildCaret = function getChildCaret() {
        return cs(this.origin) ? Lc(this.origin, this.direction) : null;
      };
      _proto20.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Ic(vc(this.getParentAtCaret(), t), this.direction);
      };
      _proto20.getFlipped = function getFlipped() {
        var t = Nc(this.direction);
        return (
          Ic(this.getNodeAtCaret(), t) || Lc(this.origin.getParentOrThrow(), t)
        );
      };
      _proto20.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof kc &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto20.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof kc || t instanceof _Ec3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return kc;
    })(_Cc4);
    var _Ec3 = (function (_Cc3) {
      function Ec(t, e) {
        var _this8;
        ((_this8 = _Cc3.call(this, t) || this),
          (_this8.type = "text"),
          (_this8.offset = e));
        return _this8;
      }
      babelHelpers.inheritsLoose(Ec, _Cc3);
      var _proto21 = Ec.prototype;
      _proto21.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Pc(t, this.direction, this.offset);
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
        return Ic(vc(this.getParentAtCaret(), t), this.direction);
      };
      _proto21.getFlipped = function getFlipped() {
        return Pc(this.origin, Nc(this.direction), this.offset);
      };
      _proto21.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Ec &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto21.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _kc3 || t instanceof Ec) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto21.getSiblingCaret = function getSiblingCaret() {
        return Ic(this.origin, this.direction);
      };
      return Ec;
    })(_Cc4);
    function Oc(t) {
      return t instanceof _Ec3;
    }
    function bc(t) {
      return t instanceof _kc3;
    }
    function Mc(t) {
      return t instanceof _Sc3;
    }
    var Ac = {
        next: (function (_Ec) {
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
              ((_this9 = _Ec.call.apply(_Ec, [this].concat(args)) || this),
              (_this9.direction = "next"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class, _Ec);
          var _proto22 = _class.prototype;
          _proto22.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto22.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_Ec3),
        previous: (function (_Ec2) {
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
              ((_this0 = _Ec2.call.apply(_Ec2, [this].concat(args)) || this),
              (_this0.direction = "previous"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class3, _Ec2);
          var _proto23 = _class3.prototype;
          _proto23.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto23.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_Ec3),
      },
      wc = {
        next: (function (_kc) {
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
              ((_this1 = _kc.call.apply(_kc, [this].concat(args)) || this),
              (_this1.direction = "next"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class5, _kc);
          var _proto24 = _class5.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_kc3),
        previous: (function (_kc2) {
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
              ((_this10 = _kc2.call.apply(_kc2, [this].concat(args)) || this),
              (_this10.direction = "previous"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class7, _kc2);
          var _proto25 = _class7.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_kc3),
      },
      Dc = {
        next: (function (_Sc) {
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
              ((_this11 = _Sc.call.apply(_Sc, [this].concat(args)) || this),
              (_this11.direction = "next"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class9, _Sc);
          var _proto26 = _class9.prototype;
          _proto26.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto26.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_Sc3),
        previous: (function (_Sc2) {
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
              ((_this12 = _Sc2.call.apply(_Sc2, [this].concat(args)) || this),
              (_this12.direction = "previous"),
              babelHelpers.assertThisInitialized(_this12)) ||
              babelHelpers.assertThisInitialized(_this12)
            );
          }
          babelHelpers.inheritsLoose(_class1, _Sc2);
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
        })(_Sc3),
      };
    function Ic(t, e) {
      return t ? new wc[e](t) : null;
    }
    function Pc(t, e, n) {
      return t ? new Ac[e](t, Fc(t, n)) : null;
    }
    function Fc(t, n, o) {
      if (o === void 0) {
        o = "error";
      }
      var r = t.getTextContentSize();
      var s = "next" === n ? r : "previous" === n ? 0 : n;
      return (
        (s < 0 || s > r) &&
          ("clamp" !== o && e(284, String(n), String(r), t.getKey()),
          (s = s < 0 ? 0 : r)),
        s
      );
    }
    function Rc(t, e) {
      return new _$c(t, e);
    }
    function Lc(t, e) {
      return cs(t) ? new Dc[e](t) : null;
    }
    function Kc(t) {
      return (t && t.getChildCaret()) || t;
    }
    function Bc(t) {
      return t && Kc(t.getAdjacentCaret());
    }
    var _zc = (function () {
      function zc(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto28 = zc.prototype;
      _proto28.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new zc(t, e, this.direction);
      };
      _proto28.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto28.getTextSlices = function getTextSlices() {
        var _this16 = this;
        var t = function t(_t255) {
            var e = _this16[_t255].getLatest();
            return Oc(e)
              ? (function (t, e) {
                  var n = t.direction,
                    o = t.origin,
                    r = Fc(o, "focus" === e ? Nc(n) : n);
                  return Rc(t, r - t.offset);
                })(e, _t255)
              : null;
          },
          e = t("anchor"),
          n = t("focus");
        if (e && n) {
          var _t256 = e.caret,
            _o90 = n.caret;
          if (_t256.isSameNodeCaret(_o90))
            return [Rc(_t256, _o90.offset - _t256.offset), null];
        }
        return [e, n];
      };
      _proto28.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = Oc(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          o = Oc(n),
          r = function r(e) {
            return e.isSameNodeCaret(n) ? null : Bc(e) || e.getParentCaret(t);
          };
        return jc({
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
      return zc;
    })();
    var _$c = (function () {
      function $c(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto29 = $c.prototype;
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
        return Pc(t.setTextContent(r.slice(0, n) + r.slice(o)), e, n);
      };
      return $c;
    })();
    function Wc(t) {
      return Hc(t, Ic(_i(), t.direction));
    }
    function Uc(t) {
      return Hc(t, t);
    }
    function Hc(e, n) {
      return (
        e.direction !== n.direction && t(265),
        new _zc(e, n, e.direction)
      );
    }
    function jc(t) {
      var _ref52;
      var e = t.initial,
        n = t.hasNext,
        o = t.step,
        r = t.map;
      var s = e;
      return (
        (_ref52 = {}),
        (_ref52[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
          function () {
            return this;
          }),
        (_ref52.next = function next() {
          if (!n(s)) return { done: !0, value: void 0 };
          var t = { done: !1, value: r(s) };
          return ((s = o(s)), t);
        }),
        _ref52
      );
    }
    function Yc(e, n) {
      var o = qc(e.origin, n.origin);
      switch (
        (null === o && t(275, e.origin.getKey(), n.origin.getKey()), o.type)
      ) {
        case "same": {
          var _t257 = "text" === e.type,
            _o91 = "text" === n.type;
          return _t257 && _o91
            ? (function (t, e) {
                return Math.sign(t - e);
              })(e.offset, n.offset)
            : e.type === n.type
              ? 0
              : _t257
                ? -1
                : _o91
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
          return Jc(o);
      }
    }
    function Jc(t) {
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
    function Gc(t, e) {
      return e.is(t);
    }
    function Vc(t) {
      return cs(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function qc(e, n) {
      if (e.is(n)) return { commonAncestor: e, type: "same" };
      var o = new Map();
      for (
        var _Vc = Vc(e), _t258 = _Vc[0], _n115 = _Vc[1];
        _t258;
        _n115 = _t258, _t258 = _t258.getParent()
      )
        o.set(_t258, _n115);
      for (
        var _Vc2 = Vc(n), _r63 = _Vc2[0], _s42 = _Vc2[1];
        _r63;
        _s42 = _r63, _r63 = _r63.getParent()
      ) {
        var _i28 = o.get(_r63);
        if (void 0 !== _i28)
          return null === _i28
            ? (Gc(e, _r63) || t(276),
              { commonAncestor: _r63, type: "ancestor" })
            : null === _s42
              ? (Gc(n, _r63) || t(277),
                { commonAncestor: _r63, type: "descendant" })
              : (((cs(_i28) || Gc(e, _i28)) &&
                  (cs(_s42) || Gc(n, _s42)) &&
                  _r63.is(_i28.getParent()) &&
                  _r63.is(_s42.getParent())) ||
                  t(278),
                { a: _i28, b: _s42, commonAncestor: _r63, type: "branch" });
      }
      return null;
    }
    function Xc(e, n) {
      var o = e.type,
        r = e.key,
        s = e.offset,
        i = Zi(e.key);
      return "text" === o
        ? (Do(i) || t(266, i.getType(), r), Pc(i, n, s))
        : (cs(i) || t(267, i.getType(), r), ua(i, e.offset, n));
    }
    function Qc(e, n) {
      var o = n.origin,
        r = n.direction,
        s = "next" === r;
      Oc(n)
        ? e.set(o.getKey(), n.offset, "text")
        : bc(n)
          ? Do(o)
            ? e.set(o.getKey(), Fc(o, r), "text")
            : e.set(
                o.getParentOrThrow().getKey(),
                o.getIndexWithinParent() + (s ? 1 : 0),
                "element",
              )
          : ((Mc(n) && cs(o)) || t(268),
            e.set(o.getKey(), s ? 0 : o.getChildrenSize(), "element"));
    }
    function Zc(t) {
      var e = _r(),
        n = Uo(e) ? e : dr();
      return (ta(n, t), pi(n), n);
    }
    function ta(t, e) {
      (Qc(t.anchor, e.anchor), Qc(t.focus, e.focus));
    }
    function ea(t) {
      var e = t.anchor,
        n = t.focus,
        o = Xc(e, "next"),
        r = Xc(n, "next"),
        s = Yc(o, r) <= 0 ? "next" : "previous";
      return Hc(ca(o, s), ca(r, s));
    }
    function na(t) {
      var e = t.direction,
        n = t.origin,
        o = Ic(n, Nc(e)).getNodeAtCaret();
      return o ? Ic(o, e) : Lc(n.getParentOrThrow(), e);
    }
    function oa(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _o92 = Mc(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _o92;
        _o92 = _o92.getParentCaret(e)
      )
        n.push(na(_o92));
      return n;
    }
    function ra(t) {
      return !!t && t.origin.isAttached();
    }
    function sa(e, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (e.isCollapsed()) return e;
      var o = "root",
        r = "next";
      var s = n;
      var i = aa(e, r),
        l = oa(i.anchor, o),
        c = oa(i.focus.getFlipped(), o),
        a = new Set(),
        u = [];
      for (var _t259 of i.iterNodeCarets(o))
        if (Mc(_t259)) a.add(_t259.origin.getKey());
        else if (bc(_t259)) {
          var _e156 = _t259.origin;
          (cs(_e156) && !a.has(_e156.getKey())) || u.push(_e156);
        }
      for (var _t260 of u) _t260.remove();
      for (var _t261 of i.getTextSlices()) {
        if (!_t261) continue;
        var _e157 = _t261.caret.origin,
          _n116 = _e157.getTextContentSize(),
          _o93 = na(Ic(_e157, r)),
          _i29 = _e157.getMode();
        if (
          (Math.abs(_t261.distance) === _n116 && "removeEmptySlices" === s) ||
          ("token" === _i29 && 0 !== _t261.distance)
        )
          _o93.remove();
        else if (0 !== _t261.distance) {
          s = "removeEmptySlices";
          var _e158 = _t261.removeTextSlice();
          var _n117 = _t261.caret.origin;
          if ("segmented" === _i29) {
            var _t262 = _e158.origin,
              _n118 = wo(_t262.getTextContent())
                .setStyle(_t262.getStyle())
                .setFormat(_t262.getFormat());
            (_o93.replaceOrInsert(_n118), (_e158 = Pc(_n118, r, _e158.offset)));
          }
          (_n117.is(l[0].origin) && (l[0] = _e158),
            _n117.is(c[0].origin) && (c[0] = _e158.getFlipped()));
        }
      }
      var f, d;
      for (var _t263 of l)
        if (ra(_t263)) {
          f = ia(_t263);
          break;
        }
      for (var _t264 of c)
        if (ra(_t264)) {
          d = ia(_t264);
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
            for (var _o94 = c; _o94 < t.length; _o94++) {
              var _r64 = t[_o94];
              if (Vi(_r64)) return;
              !n && e(_r64) && (n = _r64);
            }
            return n;
          },
          u = a(s, El),
          f =
            u &&
            a(i, function (t) {
              return n.has(t.getKey()) && El(t);
            });
        if (f && rc(f).length > 0) return null;
        return u && f ? [u, f] : null;
      })(f, d, a);
      if (h) {
        var _t265 = h[0],
          _e159 = h[1];
        Lc(_t265, "previous").splice(0, _e159.getChildren());
        var _n119 = _e159.getParent();
        for (_e159.remove(!0); _n119 && _n119.isEmpty(); ) {
          var _t266 = _n119;
          ((_n119 = _n119.getParent()), _t266.remove(!0));
        }
      } else if (d) {
        var _t267 = (function (t) {
            if (Mc(t)) {
              var _e161 = t.origin;
              if (El(_e161)) return _e161;
            } else {
              var _e162 = t.getParentAtCaret();
              if (_e162 && El(_e162)) return _e162;
            }
            return null;
          })(d),
          _e160 = _t267 && _t267.getParent(),
          _n120 = _t267 && _t267.getParents().findLast(Gi);
        if (
          _t267 &&
          _e160 &&
          !hs(_e160) &&
          _t267.isEmpty() &&
          a.has(_t267.getKey()) &&
          0 === rc(_t267).length &&
          (!_n120 || a.has(_n120.getKey()))
        ) {
          _t267.remove(!0);
          var _n121 = _e160;
          for (; _n121 && !hs(_n121) && _n121.isEmpty(); ) {
            var _t268 = _n121.getParent();
            if (_t268 && hs(_t268) && _t268.getChildrenSize() <= 1) break;
            var _e163 = _n121;
            ((_n121 = _t268), _e163.remove(!0));
          }
        }
      }
      var g = [f, d].concat(l, c).find(ra);
      if (g) {
        return Uc(ca(ia(g), e.direction));
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
    function ia(t) {
      var e = (function (t) {
          var e = t;
          for (; Mc(e); ) {
            var _t269 = Bc(e);
            if (!Mc(_t269)) break;
            e = _t269;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (Do(e.origin)) return Oc(e) ? e : Pc(e.origin, n, n);
      var o = e.getAdjacentCaret();
      return bc(o) && Do(o.origin) ? Pc(o.origin, n, Nc(n)) : e;
    }
    function la(t) {
      return Oc(t) && t.offset !== Fc(t.origin, t.direction);
    }
    function ca(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function aa(t, e) {
      return t.direction === e ? t : Hc(ca(t.focus, e), ca(t.anchor, e));
    }
    function ua(t, e, n) {
      var o = Lc(t, "next");
      for (var _t270 = 0; _t270 < e; _t270++) {
        var _t271 = o.getAdjacentCaret();
        if (null === _t271) break;
        o = _t271;
      }
      return ca(o, n);
    }
    function fa(e) {
      var n = e.origin,
        o = e.offset,
        r = e.direction;
      if (o === Fc(n, r)) return e.getSiblingCaret();
      if (o === Fc(n, Nc(r))) return na(e.getSiblingCaret());
      var _n$splitText2 = n.splitText(o),
        s = _n$splitText2[0];
      return (Do(s) || t(281), ca(Ic(s, "next"), r));
    }
    function da(t, e) {
      return !0;
    }
    function ha(t, _temp) {
      var _ref53 = _temp === void 0 ? {} : _temp,
        _ref53$$copyElementNo = _ref53.$copyElementNode,
        e = _ref53$$copyElementNo === void 0 ? qi : _ref53$$copyElementNo,
        _ref53$$splitTextPoin = _ref53.$splitTextPointCaretNext,
        n = _ref53$$splitTextPoin === void 0 ? fa : _ref53$$splitTextPoin,
        _ref53$rootMode = _ref53.rootMode,
        o = _ref53$rootMode === void 0 ? "shadowRoot" : _ref53$rootMode,
        _ref53$$shouldSplit = _ref53.$shouldSplit,
        r = _ref53$$shouldSplit === void 0 ? da : _ref53$$shouldSplit,
        _ref53$removeEmptyDes = _ref53.removeEmptyDestination,
        s = _ref53$removeEmptyDes === void 0 ? !1 : _ref53$removeEmptyDes;
      if (Oc(t)) return n(t);
      var i = t.getParentCaret(o);
      if (i) {
        var _n122 = i.origin;
        if (Mc(t)) {
          var _t272 = na(i);
          if (s && _n122.isEmpty()) return (_n122.remove(), _t272);
          if (!_n122.canBeEmpty() || !r(_n122, "first")) return _t272;
        }
        var _o95 = (function (t) {
          var e = [];
          for (
            var _n123 = t.getAdjacentCaret();
            _n123;
            _n123 = _n123.getAdjacentCaret()
          )
            e.push(_n123.origin);
          return e;
        })(t);
        (_o95.length > 0 || (!s && _n122.canBeEmpty() && r(_n122, "last"))) &&
          i.insert(e(_n122).splice(0, 0, _o95));
      }
      return i;
    }
    function ga(e, n, o) {
      var r = ca(n, "next");
      (Oc(r) &&
        (0 === r.offset
          ? (r = Ic(r.origin, "previous").getFlipped())
          : r.offset === r.origin.getTextContentSize() &&
            (r = Ic(r.origin, "next"))),
        r.origin.is(e) &&
          (bc(r) || t(342, e.getKey(), e.getType()), (r = na(r))),
        (e.is(r.getNodeAtCaret()) || e.is(r.getFlipped().getNodeAtCaret())) &&
          e.remove(!0));
      for (var _t273 = r; _t273; _t273 = ha(_t273, o)) r = _t273;
      return (
        Oc(r) && t(283),
        r.insert(e.isInline() ? bs().append(e) : e),
        ca(Ic(e.getLatest(), "next"), n.direction)
      );
    }
    function _a() {
      var e = [];
      for (
        var _len13 = arguments.length, t = new Array(_len13), _key13 = 0;
        _key13 < _len13;
        _key13++
      ) {
        t[_key13] = arguments[_key13];
      }
      for (var _n124 of t)
        if (_n124 && "string" == typeof _n124)
          for (var _ref55 of _n124.matchAll(/\S+/g)) {
            var _t274 = _ref55[0];
            e.push(_t274);
          }
      return e;
    }
    function pa() {
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
    ((exports.$addUpdateTag = $i),
      (exports.$applyNodeReplacement = Xi),
      (exports.$assumeActiveEditor = function (t) {
        (null !== Ur() && null === Ir && (Ir = t), Ir !== t && e(378));
      }),
      (exports.$caretFromPoint = Xc),
      (exports.$caretRangeFromSelection = ea),
      (exports.$cloneWithProperties = Fl),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = Fl(t))[Qn] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = Yc),
      (exports.$copyNode = qi),
      (exports.$create = function (t) {
        var e = Ol();
        return (
          $r(),
          new (e.resolveRegisteredNodeAfterReplacements(
            e.getRegisteredNode(t),
          ).klass)()
        );
      }),
      (exports.$createChildrenArray = Gl),
      (exports.$createLineBreakNode = Ss),
      (exports.$createNodeSelection = hr),
      (exports.$createParagraphNode = bs),
      (exports.$createPoint = Ko),
      (exports.$createRangeSelection = dr),
      (exports.$createRangeSelectionFromDom = function (t, e) {
        return gr(null, t, e, null);
      }),
      (exports.$createTabNode = Fo),
      (exports.$createTextNode = wo),
      (exports.$extendCaretToRange = Wc),
      (exports.$findMatchingParent = Jl),
      (exports.$formatText = Jo),
      (exports.$fullReconcile = jr),
      (exports.$generateNodesFromRawText = kr),
      (exports.$getAdjacentChildCaret = Bc),
      (exports.$getAdjacentNode = Fi),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          o = t,
          r = Bc(o);
        for (; null === r; ) {
          if ((n--, (r = o.getParentCaret(e)), !r)) return null;
          ((o = r), (r = Bc(o)));
        }
        return r && [r, n];
      }),
      (exports.$getCaretInDirection = ca),
      (exports.$getCaretRange = Hc),
      (exports.$getCaretRangeInDirection = aa),
      (exports.$getCharacterOffsets = Vo),
      (exports.$getChildCaret = Lc),
      (exports.$getChildCaretAtIndex = ua),
      (exports.$getChildCaretOrSelf = Kc),
      (exports.$getCollapsedCaretRange = Uc),
      (exports.$getCommonAncestor = qc),
      (exports.$getCommonAncestorResultBranchOrder = Jc),
      (exports.$getDOMSlot = Ml),
      (exports.$getDOMTextNode = wl),
      (exports.$getDocument = al),
      (exports.$getEditor = Ol),
      (exports.$getEditorDOMRenderConfig = bl),
      (exports.$getNearestNodeFromDOMNode = di),
      (exports.$getNearestRootOrShadowRoot = Ji),
      (exports.$getNodeByKey = ci),
      (exports.$getNodeByKeyOrThrow = Zi),
      (exports.$getNodeFromDOMNode = ai),
      (exports.$getPreviousSelection = pr),
      (exports.$getRoot = _i),
      (exports.$getSelection = _r),
      (exports.$getSiblingCaret = Ic),
      (exports.$getSlot = sc),
      (exports.$getSlotFrame = nc),
      (exports.$getSlotHost = tc),
      (exports.$getSlotNameWithinHost = ec),
      (exports.$getSlotNames = rc),
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
      (exports.$getTextNodeOffset = Fc),
      (exports.$getTextPointCaret = Pc),
      (exports.$getTextPointCaretSlice = Rc),
      (exports.$getWritableNodeState = ht),
      (exports.$hasAncestor = Ui),
      (exports.$hasUpdateTag = function (t) {
        return Hr()._updateTags.has(t);
      }),
      (exports.$insertNodeToNearestRootAtCaret = ga),
      (exports.$insertNodes = function (t) {
        var e = _r() || pr();
        (null === e && (e = _i().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = ur),
      (exports.$isChildCaret = Mc),
      (exports.$isDecoratorNode = fs),
      (exports.$isEditorState = function (t) {
        return t instanceof _ms;
      }),
      (exports.$isElementDOMSlot = Al),
      (exports.$isElementNode = cs),
      (exports.$isExtendableTextPointCaret = la),
      (exports.$isInlineElementOrDecoratorNode = Yi),
      (exports.$isInlineFormattable = So),
      (exports.$isLeafNode = function (t) {
        return Do(t) || Ts(t) || fs(t);
      }),
      (exports.$isLexicalNode = no),
      (exports.$isLineBreakNode = Ts),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _Cc4;
      }),
      (exports.$isNodeSelection = jo),
      (exports.$isParagraphNode = Ms),
      (exports.$isRangeSelection = Uo),
      (exports.$isRootNode = hs),
      (exports.$isRootOrShadowRoot = Vi),
      (exports.$isSelectionCapturedInDecoratorInput = Hs),
      (exports.$isShadowRootNode = Gi),
      (exports.$isSiblingCaret = bc),
      (exports.$isSlotChild = Ql),
      (exports.$isSlotHost = Xl),
      (exports.$isTabNode = Ro),
      (exports.$isTextNode = Do),
      (exports.$isTextPointCaret = Oc),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _$c;
      }),
      (exports.$isTokenOrSegmented = Xs),
      (exports.$isTokenOrTab = qs),
      (exports.$markSlotEditable = $l),
      (exports.$needsBlockCursorBeside = tl),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = Ur();
        if (n._readOnly) {
          var _t275 = Pl(n).get(e);
          return _t275 ? Array.from(_t275.values()) : [];
        }
        var o = n._nodeMap,
          r = [];
        for (var _ref57 of o) {
          var _n125 = _ref57[1];
          _n125 instanceof t &&
            _n125.__type === e &&
            _n125.isAttached() &&
            r.push(_n125);
        }
        return r;
      }),
      (exports.$normalizeCaret = ia),
      (exports.$normalizeSelection__EXPERIMENTAL = Nt),
      (exports.$onUpdate = Wi),
      (exports.$parseSerializedNode = function (t) {
        return Xr(t, Hr()._nodes);
      }),
      (exports.$removeFromParent = oi),
      (exports.$removeSlot = pc),
      (exports.$removeTextFromCaretRange = sa),
      (exports.$rewindSiblingCaret = na),
      (exports.$selectAll = function (t) {
        var e = _i();
        if (Uo(t)) {
          var _e165 = t.anchor,
            _n126 = t.focus,
            _o96 = _e165.getNode();
          if (hs(_o96))
            return (
              _e165.set(_o96.getKey(), 0, "element"),
              _n126.set(_o96.getKey(), _o96.getChildrenSize(), "element"),
              Nt(t),
              t
            );
          var _r65 = _o96.getTopLevelElementOrThrow(),
            _s43 = _r65.getParent();
          if (null === _s43)
            return (
              cs(_r65) &&
                (_e165.set(_r65.getKey(), 0, "element"),
                _n126.set(_r65.getKey(), _r65.getChildrenSize(), "element"),
                Nt(t)),
              t
            );
          var _i30 = _s43;
          return (
            _e165.set(_i30.getKey(), 0, "element"),
            _n126.set(_i30.getKey(), _i30.getChildrenSize(), "element"),
            Nt(t),
            t
          );
        }
        {
          var _t276 = e.select(0, e.getChildrenSize());
          return (pi(Nt(_t276)), _t276);
        }
      }),
      (exports.$setCompositionKey = ii),
      (exports.$setDirectionFromDOM = Ll),
      (exports.$setFormatFromDOM = Kl),
      (exports.$setPointFromCaret = Qc),
      (exports.$setSelection = pi),
      (exports.$setSelectionFromCaretRange = Zc),
      (exports.$setSlot = _c),
      (exports.$setState = function (t, e, n) {
        var o;
        if (($r(), "function" == typeof n)) {
          var _r66 = t.getLatest(),
            _s44 = at(_r66, e);
          if (((o = n(_s44)), e.isEqual(_s44, o))) return _r66;
        } else o = n;
        var r = t.getWritable();
        return (ht(r).updateFromKnown(e, o), r);
      }),
      (exports.$setTextFormat = function (t, e) {
        var n = [];
        for (var _ref59 of Object.entries(e)) {
          var _t277 = _ref59[0];
          var _o97 = _ref59[1];
          "boolean" == typeof _o97 && n.push([_t277, _o97]);
        }
        0 !== n.length &&
          Yo(t, function (t) {
            for (var _ref61 of n) {
              var _e166 = _ref61[0];
              var _o98 = _ref61[1];
              t = ei(t, _e166, _o98 ? A[_e166] : 0);
            }
            return t;
          });
      }),
      (exports.$splitAtPointCaretNext = ha),
      (exports.$splitNode = function (e, n) {
        var o = e.getChildAtIndex(n);
        (null == o && (o = e), Vi(e) && t(102));
        var _r69 = function r(e) {
            var n = e.getParentOrThrow(),
              s = Vi(n),
              i = e !== o || s ? qi(e) : e;
            if (s)
              return ((cs(e) && cs(i)) || t(133), e.insertAfter(i), [e, i, i]);
            {
              var _r68 = _r69(n),
                _t278 = _r68[0],
                _o99 = _r68[1],
                _s45 = _r68[2],
                _l17 = e.getNextSiblings();
              return (
                _s45.append.apply(_s45, [i].concat(_l17)),
                [_t278, _o99, i]
              );
            }
          },
          _r67 = _r69(o),
          s = _r67[0],
          i = _r67[1];
        return [s, i];
      }),
      (exports.$updateDOMSelection = Nr),
      (exports.$updateRangeSelectionFromCaretRange = ta),
      (exports.ArtificialNode__DO_NOT_USE = _ys),
      (exports.BEFORE_INPUT_COMMAND = Ee),
      (exports.BLUR_COMMAND = yn),
      (exports.CAN_REDO_COMMAND = _n),
      (exports.CAN_UNDO_COMMAND = pn),
      (exports.CAN_USE_BEFORE_INPUT = i),
      (exports.CAN_USE_DOM = n),
      (exports.CLEAR_EDITOR_COMMAND = hn),
      (exports.CLEAR_HISTORY_COMMAND = gn),
      (exports.CLICK_COMMAND = ke),
      (exports.COLLABORATION_TAG = ro),
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
      (exports.COMPOSITION_END_TAG = ao),
      (exports.COMPOSITION_START_COMMAND = be),
      (exports.COMPOSITION_START_TAG = co),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = Ie),
      (exports.COPY_COMMAND = un),
      (exports.CUT_COMMAND = fn),
      (exports.CUT_TAG = "cut"),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = Ps),
      (exports.DELETE_CHARACTER_COMMAND = Ae),
      (exports.DELETE_LINE_COMMAND = Le),
      (exports.DELETE_WORD_COMMAND = Re),
      (exports.DRAGEND_COMMAND = an),
      (exports.DRAGOVER_COMMAND = cn),
      (exports.DRAGSTART_COMMAND = ln),
      (exports.DROP_COMMAND = rn),
      (exports.DecoratorNode = _us),
      (exports.ElementNode = _ls4),
      (exports.FOCUS_COMMAND = mn),
      (exports.FORMAT_ELEMENT_COMMAND = sn),
      (exports.FORMAT_TEXT_COMMAND = Ke),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = oo),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = nn),
      (exports.INPUT_COMMAND = Oe),
      (exports.INSERT_LINE_BREAK_COMMAND = we),
      (exports.INSERT_PARAGRAPH_COMMAND = De),
      (exports.INSERT_TAB_COMMAND = en),
      (exports.INTERNAL_$isBlock = El),
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
      (exports.KEY_ARROW_DOWN_COMMAND = Ge),
      (exports.KEY_ARROW_LEFT_COMMAND = je),
      (exports.KEY_ARROW_RIGHT_COMMAND = Ue),
      (exports.KEY_ARROW_UP_COMMAND = Je),
      (exports.KEY_BACKSPACE_COMMAND = Xe),
      (exports.KEY_DELETE_COMMAND = Ze),
      (exports.KEY_DOWN_COMMAND = We),
      (exports.KEY_ENTER_COMMAND = Ve),
      (exports.KEY_ESCAPE_COMMAND = Qe),
      (exports.KEY_MODIFIER_COMMAND = xn),
      (exports.KEY_SPACE_COMMAND = qe),
      (exports.KEY_TAB_COMMAND = tn),
      (exports.LineBreakNode = _xs),
      (exports.MOVE_TO_END = He),
      (exports.MOVE_TO_START = Ye),
      (exports.NODE_STATE_DIRECT = it),
      (exports.NODE_STATE_KEY = "$"),
      (exports.NODE_STATE_LATEST = lt),
      (exports.OUTDENT_CONTENT_COMMAND = on),
      (exports.PASTE_COMMAND = Pe),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _Es),
      (exports.REDO_COMMAND = $e),
      (exports.REMOVE_TEXT_COMMAND = Fe),
      (exports.RootNode = _ds),
      (exports.SELECTION_CHANGE_COMMAND = Ne),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = ve),
      (exports.SELECT_ALL_COMMAND = dn),
      (exports.SET_TEXT_FORMAT_COMMAND = Be),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = io),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = so),
      (exports.SKIP_SELECTION_FOCUS_TAG = lo),
      (exports.TEXT_TYPE_TO_FORMAT = A),
      (exports.TabNode = _Po),
      (exports.TextNode = _To2),
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
        var n = _a.apply(void 0, e);
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
          o = Jr(),
          r = n.theme || {},
          s = void 0 === e ? o : n.parentEditor || null,
          i = n.disableEvents || !1,
          l = _s(),
          c = n.namespace || (null !== s ? s._config.namespace : Si()),
          a = n.editorState,
          u = [_ds, _To2, _xs, _Po, _Es, _ys].concat(n.nodes || []),
          f = n.onError,
          d = n.onWarn,
          h = n.html,
          g = void 0 === n.editable || n.editable;
        var _;
        if (void 0 === e && null !== o) _ = o._nodes;
        else {
          _ = new Map();
          for (var _e167 = 0; _e167 < u.length; _e167++) {
            var _o100 = u[_e167],
              _r70 = null,
              _s46 = null;
            if (_o100 && "object" == typeof _o100) {
              var _t279 = _o100;
              ((_o100 = _t279.replace),
                (_r70 = _t279["with"]),
                (_s46 = _t279.withKlass || null));
            }
            if (
              "function" != typeof _o100 ||
              !_o100.prototype ||
              !(_o100 === _eo5 || _o100.prototype instanceof _eo5)
            ) {
              var _r71 = "<unknown>";
              try {
                _r71 = JSON.parse(H);
              } catch (t) {}
              t(
                365,
                String(_e167 - u.length + (n.nodes ? n.nodes.length : 0)),
                "function" == typeof _o100
                  ? "" +
                      _o100.name +
                      ("function" == typeof _o100.getType
                        ? " (type " + String(_o100.getType()) + ")"
                        : "")
                  : String(_o100),
                String(_r71),
              );
            }
            jl(_o100);
            var _i31 = _o100.getType(),
              _l18 = Is(_o100);
            _.set(_i31, {
              exportDOM: h && h["export"] ? h["export"].get(_o100) : void 0,
              klass: _o100,
              replace: _r70,
              replaceWithKlass: _s46,
              sharedNodeState: ut(u[_e167]),
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
            dom: babelHelpers["extends"]({}, Ps, e && e.dom),
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
          e,
        );
        return (
          void 0 !== a && ((p._pendingEditorState = a), (p._dirtyType = 2)),
          (function (t) {
            (t.registerCommand(Ee, Ln, ws),
              t.registerCommand(Oe, Kn, ws),
              t.registerCommand(be, Bn, ws),
              t.registerCommand(Me, zn, ws),
              t.registerCommand(We, Un, ws));
          })(p),
          p
        );
      }),
      (exports.createRefCountedRegistry = Cn),
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
      (exports.findAllLexicalElementsDeep = ll),
      (exports.flipDirection = Nc),
      (exports.getActiveElement = pl),
      (exports.getActiveElementDeep = ml),
      (exports.getComposedEventTarget = yl),
      (exports.getComposedStaticRange = ul),
      (exports.getDOMOwnerDocument = zi),
      (exports.getDOMSelection = nl),
      (exports.getDOMSelectionFromTarget = ol),
      (exports.getDOMSelectionPoints = dl),
      (exports.getDOMSelectionRange = fl),
      (exports.getDOMSelectionRangeAndPoints = function (t, e) {
        var _hl;
        var n = ul(t, e);
        if (null === n)
          return {
            points: t,
            range: t.rangeCount > 0 ? t.getRangeAt(0) : null,
          };
        var o =
          (_hl = hl(n)) != null
            ? _hl
            : t.rangeCount > 0
              ? t.getRangeAt(0)
              : null;
        return { points: gl(n, _l(t)), range: o };
      }),
      (exports.getDOMShadowRoots = il),
      (exports.getDOMTextNode = ti),
      (exports.getDeclaredSlots = fc),
      (exports.getEditorPropertyFromDOMNode = Vs),
      (exports.getNearestEditorFromDOMNode = Gs),
      (exports.getParentElement = Bi),
      (exports.getRegisteredNode = Ws),
      (exports.getRegisteredNodeOrThrow = $s),
      (exports.getRegisteredSubtypeMap = function (t) {
        var e = new Map(),
          n = new Map();
        for (var _o101 of t) {
          var _jl2 = jl(_o101),
            _t280 = _jl2.ownNodeType;
          _t280 && (n.set(_t280, _o101), e.set(_t280, new Set()));
        }
        for (var _ref63 of n) {
          var _t281 = _ref63[0];
          var _o102 = _ref63[1];
          for (var _ref65 of Yl(_o102)) {
            var _n127 = _ref65.ownNodeType;
            {
              var _o103 = _n127 && e.get(_n127);
              _o103 && _o103.add(_t281);
            }
          }
        }
        return e;
      }),
      (exports.getRootOwnerDocument = cl),
      (exports.getStaticNodeConfig = jl),
      (exports.getStyleObjectFromCSS = fo),
      (exports.getTextDirection = function (t) {
        return b.test(t) ? "rtl" : M.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = Is),
      (exports.isBlockDomNode = kl),
      (exports.isCurrentlyReadOnlyMode = zr),
      (exports.isDOMCapturingSelection = Wl),
      (exports.isDOMDocumentNode = Zs),
      (exports.isDOMNode = Cl),
      (exports.isDOMShadowRoot = rl),
      (exports.isDOMTextNode = Qs),
      (exports.isDOMUnmanaged = zl),
      (exports.isDocumentFragment = Sl),
      (exports.isExactShortcutMatch = bi),
      (exports.isHTMLAnchorElement = function (t) {
        return xl(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = xl),
      (exports.isHTMLTableCellElement = function (t) {
        return xl(t) && ("TD" === t.tagName || "TH" === t.tagName);
      }),
      (exports.isHTMLTableRowElement = function (t) {
        return xl(t) && "TR" === t.tagName;
      }),
      (exports.isInlineDomNode = Nl),
      (exports.isLastChildInBlockNode = vs),
      (exports.isLexicalEditor = Js),
      (exports.isModifierMatch = Oi),
      (exports.isOnlyChildInBlockNode = Ns),
      (exports.isSelectionCapturedInDecoratorInput = js),
      (exports.isSelectionWithinEditor = Ys),
      (exports.iterStaticNodeConfigChain = Yl),
      (exports.makeStepwiseIterator = jc),
      (exports.mergeRegister = pa),
      (exports.mountSlotContainer = function (t, e, n, o) {
        var r = t.read("latest", function () {
          var o = ci(e);
          return null !== o
            ? (function (t, e, n) {
                if (n === void 0) {
                  n = Ol();
                }
                var o = sc(t, e);
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
      (exports.normalizeClassNames = _a),
      (exports.registerEventListener = Sn),
      (exports.registerEventListeners = function (t, e, n) {
        return pa.apply(
          void 0,
          Object.entries(e).map(function (_ref66) {
            var e = _ref66[0],
              o = _ref66[1];
            return Sn(t, e, o, n);
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
        var n = _a.apply(void 0, e);
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(_t$classList3, n);
      }),
      (exports.removeFromParent = ri),
      (exports.resetRandomKey = function () {
        zs = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = go),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n128 in e) {
          var _o104 = e[_n128];
          null == _o104 ? t.removeProperty(_n128) : ho(t, _n128, _o104);
        }
      }),
      (exports.setDOMUnmanaged = Bl),
      (exports.setNodeIndentFromDOM = Rl),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n129 in e)
          if (t[_n129] !== e[_n129]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.stopLexicalPropagation = Jn),
      (exports.toggleTextFormatType = ei),
      (exports.tokenizeRawText = vr),
      (exports.unmountSlotContainer = function (t, e, n) {
        n.style.display = "none";
        var o = t.getElementByKey(e);
        null !== o && n.parentElement !== o && o.insertBefore(n, o.firstChild);
      }));
  },
  null,
);
