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
      E = s ? "\xa0" : N,
      k = "\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc",
      O =
        "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff",
      b = new RegExp("^[^" + O + "]*[" + k + "]"),
      M = new RegExp("^[^" + k + "]*[" + O + "]"),
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
      return Al()._blockCursorElement;
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
        var o = $(t, this.element);
        if (null === o) return "after";
        var r = Array.prototype.indexOf.call(t.childNodes, o);
        if (r < 0) return "after";
        if (e === t) return n <= r ? "before" : "after";
        var s = $(t, e);
        if (null === s) return "after";
        var i = Array.prototype.indexOf.call(t.childNodes, s);
        return i >= 0 && i <= r ? "before" : "after";
      };
      _proto.getInsertionAnchor = function getInsertionAnchor() {
        return this.before;
      };
      return B;
    })();
    function $(t, e) {
      var n = e;
      for (; null !== n && n.parentNode !== t; ) n = n.parentNode;
      return n;
    }
    var _z = (function (_B) {
      function z() {
        return _B.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(z, _B);
      var _proto2 = z.prototype;
      _proto2.withBefore = function withBefore(t) {
        return new z(this.element, t, this.after);
      };
      _proto2.withAfter = function withAfter(t) {
        return new z(this.element, this.before, t);
      };
      _proto2.withElement = function withElement(t) {
        return this.element === t ? this : new z(t, this.before, this.after);
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
          r = dl().createElement("br");
        if (
          (r.setAttribute("data-lexical-managed-linebreak", "true"),
          n.insertBefore(r, o),
          t)
        ) {
          var _t4 = dl().createElement("img");
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
      return z;
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
    function G(t, e) {
      if (e === void 0) {
        e = 1e3;
      }
      return t instanceof _J
        ? t.clone()
        : t.size < e
          ? new Map(t)
          : new _J().init(new Map(t), void 0, t.size);
    }
    var _J = (function () {
      function J() {
        this._mutable = !1;
        this._old = void 0;
        this._nursery = void 0;
        this._size = 0;
      }
      var _proto4 = J.prototype;
      _proto4.clone = function clone() {
        return (
          (this._mutable = !1),
          new J().init(this._old, this._nursery, this._size)
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
      return babelHelpers.createClass(J, [
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
      if (us(t)) {
        var _i3 = t.getFirstChild();
        for (; null !== _i3; ) {
          var _t1 = _i3.__key;
          (_i3.__parent === e &&
            ((us(_i3) || (ec(_i3) && null !== _i3.__slots)) &&
              V(_i3, _t1, n, o, r, s),
            n.has(_t1) || s["delete"](_t1),
            r.push(_t1)),
            (_i3 = _i3.getNextSibling()));
        }
      }
      for (var _i4 of ec(t) && null !== t.__slots ? t.__slots.values() : []) {
        var _t10 = o.get(_i4);
        void 0 !== _t10 &&
          nc(_t10) &&
          _t10.__slotHost === e &&
          ((us(_t10) || (ec(_t10) && null !== _t10.__slots)) &&
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
        (o && void 0 !== gi(t, n))
      );
    }
    function tt(t, e, n) {
      var o = sl(Ji(n)),
        r = o && _l(o, n._rootElement);
      var s = null,
        i = null;
      null !== r &&
        r.anchorNode === t &&
        ((s = r.anchorOffset), (i = r.focusOffset));
      var l = t.nodeValue;
      null !== l && Oi(e, l, s, i, !1);
    }
    function et(t, e, n) {
      if (Yo(t)) {
        var _e1 = t.anchor.getNode();
        if (_e1.is(n) && t.format !== _e1.getFormat()) return !1;
      }
      return ei(e) && n.isAttached();
    }
    function nt(t, e, n) {
      for (var _o4 = t; _o4 && !Ul(_o4); _o4 = Wi(_o4)) {
        var _t11 = gi(_o4, e);
        if (void 0 !== _t11) {
          var _e10 = fi(_t11, n);
          if (_e10) return hs(_e10) || !Tl(_o4) ? void 0 : [_o4, _e10];
        }
      }
    }
    function ot(t, e, n) {
      q = !0;
      var o = performance.now() - X > 100;
      try {
        ls(t, function () {
          var r =
              mr() ||
              (function (t) {
                return t.read("latest", function () {
                  var t = mr();
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
              o && Io(_p) && ei(_h) && et(r, _h, _p) && tt(_h, _p, t);
            else if ("childList" === _d) {
              a = !0;
              var _e11 = _f.addedNodes;
              for (var _n0 = 0; _n0 < _e11.length; _n0++) {
                var _o5 = _e11[_n0],
                  _r3 = di(_o5),
                  _i5 = _o5.parentNode;
                if (
                  !(
                    null == _i5 ||
                    _o5 === c ||
                    null !== _r3 ||
                    Z(_o5, _i5, t) ||
                    (t._slotsUsed &&
                      Tl(_o5) &&
                      _o5.hasAttribute("data-lexical-slot")) ||
                    Ul(_o5)
                  )
                ) {
                  if (s) {
                    var _t12 =
                      (Tl(_o5) ? _o5.innerText : null) || _o5.nodeValue;
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
          null !== r && (a && xi(r), s && Bi(t) && r.insertRawText(u));
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
        0 === X && Ji(t).addEventListener("textInput", Q, !0);
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
      for (var _ref8 of ql("function" == typeof t ? t : t.replace)) {
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
        : Hs(Al(), t.getType()).sharedNodeState;
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
        o = Yr()._normalizedNodes;
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
          Io(e) &&
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
          Io(n) &&
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
          Io(_o10))
        ) {
          t.set(_o10.__key, _r9 ? _o10.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!us(_o10)) break;
        t.set(_o10.__key, _r9 ? _o10.getChildrenSize() : 0, "element", !0);
      }
    }
    var Et = Symbol["for"]("@lexical/CachedTextSize");
    function kt(e, n) {
      return Ut.read(
        function () {
          var o = 0,
            r = e;
          for (var _e24 = 0; _e24 < n && null !== r; _e24++) {
            var _s5 = Wt.get(r);
            if ((void 0 === _s5 && t(345, r), us(_s5))) {
              var _i6 = Ht.get(r);
              if (void 0 !== _i6 && us(_i6) && _i6.__parent !== _s5.__parent)
                o += _s5.getTextContentSize();
              else {
                var _e25 = jt.get(r),
                  _n19 = _e25 && _e25.__lexicalTextContent;
                ("string" != typeof _n19 && t(346, _s5.getType()),
                  (o += _n19.length));
              }
              _e24 < n - 1 && !_s5.isInline() && (o += 2);
            } else {
              var _e26 = _s5[Et];
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
      us(t) ||
        (void 0 === t[Et] &&
          (t[Et] = Io(t) ? t.__text.length : t.getTextContentSize()));
    }
    var bt = 4;
    var Mt,
      At,
      Dt,
      wt = "",
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
      Io(o) && ((It = o.getFormat()), (Pt = o.getStyle()), (Ft = n));
    }
    var Bt,
      $t,
      zt,
      Wt,
      Ut,
      Ht,
      jt,
      Yt,
      Gt,
      Jt,
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
        if ((At._keyToDOMMap["delete"](t), us(n))) {
          var _t16 = Ql(n, Wt);
          Qt(_t16, 0, _t16.length - 1, null);
        }
        if (void 0 !== n) {
          for (var _t17 of le(n).values()) {
            var _e27 = ae(_t17);
            (Xt(_t17, null), null !== _e27 && _e27.remove());
          }
          Ri(Gt, Dt, Bt, n, "destroyed");
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
        if (_s(t)) return null;
        var n = t.getParent();
        return null === n || (Qi(n) && null === n.__dir) ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function re(t) {
      var e = dl().createElement("div");
      return (
        e.setAttribute("data-lexical-slot", t),
        (e.style.display = "none"),
        e
      );
    }
    function se(t, e, n) {
      e || "false" === t.contentEditable
        ? Hl(n, At)
        : n.removeAttribute("contenteditable");
    }
    function ie(t, e, n) {
      var o = wt,
        r = Rt();
      wt = "";
      var s = "";
      var i = hs(t);
      for (var _ref18 of n) {
        var _o12 = _ref18[0];
        var _r1 = _ref18[1];
        {
          var _n21 = re(_o12);
          (se(e, i, _n21), e.appendChild(_n21), (wt = ""));
          var _l2 = Rt();
          (fe(_r1, wl(t, _n21, At)), Lt(_l2), ce(t, _o12, e, _n21), (s += wt));
        }
      }
      return (Lt(r), (wt = o), s);
    }
    function le(t) {
      return ec(t) && null !== t.__slots ? t.__slots : tc;
    }
    function ce(t, e, n, o) {
      var r = Jt.$getSlotTargetElement(t, e, n, At);
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
      var s = wt,
        i = Rt();
      var l = "",
        c = null;
      var a = hs(e);
      for (var _ref22 of r) {
        var _t20 = _ref22[0];
        var _s6 = _ref22[1];
        {
          var _r10 = o.get(_t20);
          var _i7 = void 0 !== _r10 ? ae(_r10) : null;
          wt = "";
          var _u = Rt();
          if (null === _i7) {
            _i7 = re(_t20);
            var _o13 = null;
            for (var _t21 of n.children)
              if (!_t21.hasAttribute("data-lexical-slot")) {
                _o13 = _t21;
                break;
              }
            (n.insertBefore(_i7, _o13), fe(_s6, wl(e, _i7, At)));
          } else
            _r10 === _s6
              ? pe(_s6, _i7)
              : (void 0 !== _r10 && Xt(_r10, _i7), fe(_s6, wl(e, _i7, At)));
          if (
            (Lt(_u),
            se(n, a, _i7),
            ce(e, _t20, n, _i7),
            (l += wt),
            _i7.parentElement === n)
          ) {
            var _t22 = null === c ? n.firstChild : c.nextSibling;
            (_t22 !== _i7 && n.insertBefore(_i7, _t22), (c = _i7));
          }
        }
      }
      return (Lt(i), (wt = s), l);
    }
    function fe(e, n) {
      var o = Ht.get(e);
      if ((void 0 === o && t(60), null !== n)) {
        var _t23 = Wt.get(e);
        if (void 0 !== _t23) {
          var _r11 = jt.get(e);
          if (void 0 !== _r11) {
            var _s7 = nc(_t23) ? _t23.__slotHost : null,
              _i8 = nc(o) ? o.__slotHost : null,
              _l3 = _t23.__parent !== o.__parent || _s7 !== _i8,
              _c2 = null !== _i8 && _r11.parentElement !== n.element;
            if (_l3 || _c2) return (n.insertChild(_r11), pe(e, n.element));
          }
        }
      }
      var r = Jt.$createDOM(o, At);
      if (
        ((function (t, e, n) {
          var o = n._keyToDOMMap;
          (hi(e, n, t), o.set(t, e));
        })(e, r, At),
        Io(o)
          ? r.setAttribute("data-lexical-text", "true")
          : hs(o) &&
            (r.setAttribute("data-lexical-decorator", "true"),
            Wl(r, { captureSelection: !0 })),
        us(o))
      ) {
        var _t24 = o.__indent,
          _e30 = o.__size;
        (oe(r, o), 0 !== _t24 && ee(r, _t24));
        var _n22 = le(o),
          _s8 = _n22.size > 0 ? ie(o, r, _n22) : "";
        if (0 === _e30)
          ((r.__lexicalTextContent = _s8),
            (r.__lexicalFirstTextKey = null),
            (wt += _s8),
            _n22.size > 0 && (r.__lexicalSlotTextLength = _s8.length));
        else {
          var _t25 = wt,
            _i9 = _e30 - 1;
          if ((de(Ql(o, Ht), o, 0, _i9, wl(o, r, At)), "" !== _s8)) {
            var _e31 = r.__lexicalTextContent || "";
            ((r.__lexicalTextContent = _s8 + _e31), (wt = _t25 + _s8 + _e31));
          }
          _n22.size > 0 && (r.__lexicalSlotTextLength = _s8.length);
        }
        var _i0 = o.__format;
        (0 !== _i0 && ne(r, _i0), o.isInline() || he(null, o, r));
      } else {
        var _t26 = o.getTextContent();
        if (hs(o)) {
          var _t27 = o.decorate(At, Mt);
          (null !== _t27 && me(e, _t27), (r.contentEditable = "false"));
          var _n23 = le(o);
          _n23.size > 0 && ie(o, r, _n23);
        }
        wt += _t26;
      }
      return (
        null !== n && n.insertChild(r),
        Jt.$decorateDOM(o, null, r, At),
        Ot(o),
        Ri(Gt, Dt, Bt, o, "created"),
        r
      );
    }
    function de(e, n, o, r, s) {
      var i = wt,
        l = Rt();
      ((wt = ""), (It = null), (Pt = null), (Ft = null));
      var c = o;
      for (; c <= r; ++c) {
        var _t28 = Rt();
        fe(e[c], s);
        var _n24 = Ht.get(e[c]);
        (null !== _n24 && Io(_n24)
          ? null === It &&
            ((It = _n24.getFormat()), (Pt = _n24.getStyle()), (Ft = _n24.__key))
          : us(_n24) && c < r && !_n24.isInline() && (wt += v),
          Lt(_t28));
      }
      var a = At._keyToDOMMap.get(n.__key);
      (void 0 === a && t(349, n.__key),
        (a.__lexicalTextContent = wt),
        (a.__lexicalFirstTextKey = Ft),
        (wt = i + wt),
        Lt(l));
    }
    function he(t, e, n) {
      var _o$element$__lexicalL;
      var o = wl(e, n, At),
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
                return vs(_t29)
                  ? "line-break"
                  : hs(_t29) && _t29.isInline()
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
          var r = wt,
            s = e.__size,
            i = n.__size;
          wt = "";
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
                  var _e32 = kt(_i1, _f2);
                  var _o14 = _i1,
                    _a2 = 0;
                  for (; null !== _o14 && _a2 < _f2; ) {
                    var _t31 = Ht.get(_o14);
                    if (void 0 === _t31) break;
                    var _e33 = Rt();
                    (pe(_o14, l),
                      Io(_t31) &&
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
                    if (us(_e34)) {
                      var _r12 = At._keyToDOMMap.get(_o14),
                        _s0 = _r12 && _r12.__lexicalTextContent;
                      ("string" != typeof _s0 && t(352, _e34.getType()),
                        (_n26 = _s0));
                    } else _n26 = _e34.getTextContent();
                    ((_d2 += _n26),
                      _a2 < _f2 - 1 &&
                        us(_e34) &&
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
                    (wt = r + _3),
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
                    var T = kt(f, u);
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
                          Io(_e37) &&
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
                      if (us(_n28)) {
                        var _r13 = At._keyToDOMMap.get(g[_e38]),
                          _s1 = _r13 && _r13.__lexicalTextContent;
                        ("string" != typeof _s1 && t(350, _n28.getType()),
                          (_o15 = _s1));
                      } else _o15 = _n28.getTextContent();
                      ((N += _o15),
                        _e38 < l - 1 &&
                          us(_n28) &&
                          !_n28.isInline() &&
                          (N += v));
                    }
                    var E = r.__lexicalSlotTextLength || 0,
                      k = E > 0 ? s.slice(E) : s;
                    return (
                      (r.__lexicalTextContent = k.slice(0, k.length - T) + N),
                      !0
                    );
                  })(e, 0, o, c, _s9, _i1, _f2, a)
                ) {
                  var _e39 = c.__lexicalTextContent;
                  return (
                    "string" != typeof _e39 && t(353),
                    (wt = r + _e39),
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
                var _r14 = Vt || zt.has(_n29) || $t.has(_n29),
                  _s10 = Rt();
                if (_r14) pe(_n29, l);
                else {
                  var _o17 = void 0,
                    _r15 = void 0;
                  if (us(_e40)) {
                    _r15 = jt.get(_n29);
                    var _s11 = _r15 && _r15.__lexicalTextContent;
                    ("string" != typeof _s11 && t(354, _e40.getType()),
                      (_o17 = _s11));
                  } else _o17 = _e40.getTextContent();
                  ((wt += _o17), void 0 !== _r15 && Kt(_r15));
                }
                (Io(_e40)
                  ? null === It &&
                    ((It = _e40.getFormat()),
                    (Pt = _e40.getStyle()),
                    (Ft = _e40.__key))
                  : us(_e40) && _o16 < i - 1 && !_e40.isInline() && (wt += v),
                  Lt(_s10),
                  (_n29 = _e40.__next),
                  _o16++);
              }
              return (
                (c.__lexicalTextContent = wt),
                (c.__lexicalFirstTextKey = Ft),
                void (wt = r + wt)
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
            Io(_s13) &&
              null === It &&
              ((It = _s13.getFormat()),
              (Pt = _s13.getStyle()),
              (Ft = _s13.__key));
          } else {
            var _r17 = Ql(e, Wt),
              _c3 = Ql(n, Ht);
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
                      var _t43 = zi(At, _o18);
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
                  (null !== _i10 && Io(_i10)
                    ? null === It &&
                      ((It = _i10.getFormat()),
                      (Pt = _i10.getStyle()),
                      (Ft = _i10.__key))
                    : us(_i10) && d <= l && !_i10.isInline() && (wt += v),
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
          ((c.__lexicalTextContent = wt),
            (c.__lexicalFirstTextKey = Ft),
            (wt = r + wt));
        })(e, n, wl(n, o, At)),
        Qi(n) ||
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
          if (Io(_t45))
            return ((It = _t45.getFormat()), void (Pt = _t45.getStyle()));
        }
      }
      e.__lexicalFirstTextKey = Ft;
    }
    function pe(e, n) {
      var o = Wt.get(e);
      var r = Ht.get(e);
      (void 0 !== o && void 0 !== r) || t(61);
      var s = Vt || zt.has(e) || $t.has(e),
        i = zi(At, e);
      if (o === r && !s) {
        var _e44;
        if (us(o)) {
          var _n31 = i.__lexicalTextContent;
          ("string" != typeof _n31 && t(355, o.getType()),
            (_e44 = _n31),
            Kt(i));
        } else _e44 = o.getTextContent();
        return ((wt += _e44), i);
      }
      if (
        (o !== r && s && Ri(Gt, Dt, Bt, r, "updated"),
        Jt.$updateDOM(r, o, i, At))
      ) {
        var _o20 = fe(e, null);
        return (
          null === n && t(62),
          n.replaceChild(_o20, i),
          Xt(e, null),
          _o20
        );
      }
      if (us(o)) {
        us(r) || t(334, e);
        var _n32 = r.__indent;
        (Vt || _n32 !== o.__indent) && ee(i, _n32);
        var _l4 = r.__format;
        (Vt || _l4 !== o.__format) && ne(i, _l4);
        var _c4 = s && (le(r).size > 0 || le(o).size > 0) ? ue(o, r, i) : "";
        if (s) {
          var _t46 = wt;
          if ((ge(o, r, i), _s(r) || r.isInline() || he(0, r, i), "" !== _c4)) {
            var _e45 = i.__lexicalTextContent || "";
            ((i.__lexicalTextContent = _c4 + _e45),
              (wt = _t46 + _c4 + _e45),
              (i.__lexicalSlotTextLength = _c4.length));
          } else
            (le(r).size > 0 || le(o).size > 0) &&
              (i.__lexicalSlotTextLength = 0);
        } else {
          var _e46 = i.__lexicalTextContent;
          ("string" != typeof _e46 && t(356, o.getType()), (wt += _e46), Kt(i));
        }
        if (
          (Vt || r.__dir !== o.__dir || r.__parent !== o.__parent) &&
          (oe(i, r), _s(r) && !Vt)
        )
          for (var _t47 of r.getChildren())
            if (us(_t47)) {
              oe(zi(At, _t47.getKey()), _t47);
            }
      } else {
        var _t48 = r.getTextContent();
        if (hs(r)) {
          var _t49 = r.decorate(At, Mt);
          (null !== _t49 && me(e, _t49),
            s && (le(r).size > 0 || le(o).size > 0) && ue(o, r, i));
        }
        wt += _t48;
      }
      if (!qt && _s(r)) {
        var _t50 = r.getLatest();
        if (_t50.__cachedText !== wt) {
          var _e47 = _t50.getWritable();
          ((_e47.__cachedText = wt), (r = _e47));
        }
      }
      return (Jt.$decorateDOM(r, o, i, At), Ot(r), i);
    }
    function me(t, e) {
      var n = At._pendingDecorators;
      var o = At._decorators;
      if (null === n) {
        if (o[t] === e) return;
        n = pi(At);
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
      ((wt = ""),
        (It = null),
        (Pt = null),
        (Ft = null),
        (Vt = 2 === o),
        (At = n),
        (Mt = n._config),
        (Jt = n._config.dom || Rs),
        (Dt = n._nodes),
        (Bt = At._listeners.mutation),
        ($t = r),
        (zt = s),
        (Wt = t._nodeMap),
        (Ut = t),
        (Ht = e._nodeMap),
        (qt = e._readOnly),
        (jt = G(n._keyToDOMMap)),
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
          return (e($t.keys()), e(zt), t);
        })()));
      var i = new Map();
      return (
        (Gt = i),
        pe("root", null),
        (At = void 0),
        (Dt = void 0),
        ($t = void 0),
        (zt = void 0),
        (Wt = void 0),
        (Ut = void 0),
        (Ht = void 0),
        (Mt = void 0),
        (jt = void 0),
        (Yt = void 0),
        (Gt = void 0),
        (Jt = Rs),
        i
      );
    }
    function Se(e) {
      var n = jt.get(e);
      return (void 0 === n && t(75, e), n);
    }
    function Te(t) {
      throw new Error(t);
    }
    function Ne(t) {
      return { type: t };
    }
    var ve = Ne("SELECTION_CHANGE_COMMAND"),
      Ee = Ne("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"),
      ke = Ne("CLICK_COMMAND"),
      Oe = Ne("BEFORE_INPUT_COMMAND"),
      be = Ne("INPUT_COMMAND"),
      Me = Ne("COMPOSITION_START_COMMAND"),
      Ae = Ne("COMPOSITION_END_COMMAND"),
      De = Ne("DELETE_CHARACTER_COMMAND"),
      we = Ne("INSERT_LINE_BREAK_COMMAND"),
      Ie = Ne("INSERT_PARAGRAPH_COMMAND"),
      Pe = Ne("CONTROLLED_TEXT_INSERTION_COMMAND"),
      Fe = Ne("PASTE_COMMAND"),
      Re = Ne("REMOVE_TEXT_COMMAND"),
      Le = Ne("DELETE_WORD_COMMAND"),
      Ke = Ne("DELETE_LINE_COMMAND"),
      Be = Ne("FORMAT_TEXT_COMMAND"),
      $e = Ne("SET_TEXT_FORMAT_COMMAND"),
      ze = Ne("UNDO_COMMAND"),
      We = Ne("REDO_COMMAND"),
      Ue = Ne("KEYDOWN_COMMAND"),
      He = Ne("KEY_ARROW_RIGHT_COMMAND"),
      je = Ne("MOVE_TO_END"),
      Ye = Ne("KEY_ARROW_LEFT_COMMAND"),
      Ge = Ne("MOVE_TO_START"),
      Je = Ne("KEY_ARROW_UP_COMMAND"),
      Ve = Ne("KEY_ARROW_DOWN_COMMAND"),
      qe = Ne("KEY_ENTER_COMMAND"),
      Xe = Ne("KEY_SPACE_COMMAND"),
      Qe = Ne("KEY_BACKSPACE_COMMAND"),
      Ze = Ne("KEY_ESCAPE_COMMAND"),
      tn = Ne("KEY_DELETE_COMMAND"),
      en = Ne("KEY_TAB_COMMAND"),
      nn = Ne("INSERT_TAB_COMMAND"),
      on = Ne("INDENT_CONTENT_COMMAND"),
      rn = Ne("OUTDENT_CONTENT_COMMAND"),
      sn = Ne("DROP_COMMAND"),
      ln = Ne("FORMAT_ELEMENT_COMMAND"),
      cn = Ne("DRAGSTART_COMMAND"),
      an = Ne("DRAGOVER_COMMAND"),
      un = Ne("DRAGEND_COMMAND"),
      fn = Ne("COPY_COMMAND"),
      dn = Ne("CUT_COMMAND"),
      hn = Ne("SELECT_ALL_COMMAND"),
      gn = Ne("CLEAR_EDITOR_COMMAND"),
      _n = Ne("CLEAR_HISTORY_COMMAND"),
      pn = Ne("CAN_REDO_COMMAND"),
      mn = Ne("CAN_UNDO_COMMAND"),
      yn = Ne("FOCUS_COMMAND"),
      xn = Ne("BLUR_COMMAND"),
      Cn = Ne("KEY_MODIFIER_COMMAND");
    function Sn(t) {
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
    function Tn(t, e, n, o) {
      return (
        t.addEventListener(e, n, o),
        t.removeEventListener.bind(t, e, n, o)
      );
    }
    var Nn = Object.freeze({}),
      vn = [
        [
          "keydown",
          function (t, e) {
            var n = e._inputState;
            ((n.lastKeyDownTimeStamp = t.timeStamp),
              (n.lastKeyCode = t.key),
              "Backspace" !== t.key && Fn(n));
            if (e.isComposing()) return;
            $i(e, Ue, t);
          },
        ],
        [
          "pointerdown",
          function (t, e) {
            var n = Sl(t),
              o = t.pointerType;
            Nl(n) &&
              "touch" !== o &&
              "pen" !== o &&
              0 === t.button &&
              ls(e, function () {
                jl(n, e) || (e._inputState.isSelectionChangeFromMouseDown = !0);
              });
          },
        ],
        [
          "compositionstart",
          function (t, e) {
            $i(e, Me, t);
          },
        ],
        [
          "compositionend",
          function (t, e) {
            var n = e._inputState;
            s
              ? (n.compositionPhase = "ending-firefox")
              : l || (!a && !d)
                ? $i(e, Ae, t)
                : ((n.compositionPhase = "ending-safari"),
                  (n.compositionEndData = t.data));
          },
        ],
        [
          "input",
          function (t, e) {
            t.stopPropagation();
            var n = e._inputState;
            (Fn(n),
              ls(
                e,
                function () {
                  Ln(t, e) || e.dispatchCommand(be, t);
                },
                { event: t },
              ),
              (n.unprocessedBeforeInputData = null));
          },
        ],
        [
          "click",
          function (t, e) {
            ls(e, function () {
              var n = mr(),
                o = sl(Ji(e)),
                r = yr();
              if (o)
                if (Yo(n)) {
                  var _t52 = n.anchor,
                    _e50 = _t52.getNode();
                  "element" === _t52.type &&
                    0 === _t52.offset &&
                    n.isCollapsed() &&
                    !_s(_e50) &&
                    1 === yi().getChildrenSize() &&
                    _e50.getTopLevelElementOrThrow().isEmpty() &&
                    null !== r &&
                    n.is(r) &&
                    (o.removeAllRanges(), (n.dirty = !0));
                } else if (
                  "touch" === t.pointerType ||
                  "pen" === t.pointerType
                ) {
                  var _n34 = _l(o, e._rootElement).anchorNode;
                  if (Tl(_n34) || ei(_n34)) {
                    xi(pr(r, o, e, t));
                  }
                }
              if (s && null !== o && 0 === o.rangeCount) {
                var _n35 = e._rootElement;
                if (null !== _n35 && t.target === _n35) {
                  var _s15 = t.clientY;
                  var _i11 = _n35.childNodes.length;
                  for (var _t53 = 0; _t53 < _n35.childNodes.length; _t53++) {
                    var _e51 = _n35.childNodes[_t53];
                    if (Tl(_e51)) {
                      var _n36 = _e51.getBoundingClientRect();
                      if (_s15 <= (_n36.top + _n36.bottom) / 2) {
                        _i11 = _t53;
                        break;
                      }
                    }
                  }
                  o.setBaseAndExtent(_n35, _i11, _n35, _i11);
                  var _l5 = pr(r, o, e, t);
                  null !== _l5 ? xi(_l5) : o.removeAllRanges();
                }
              }
              $i(e, ke, t);
            });
          },
        ],
        ["cut", Nn],
        ["copy", Nn],
        ["dragstart", Nn],
        ["dragover", Nn],
        ["dragend", Nn],
        ["paste", Nn],
        ["focus", Nn],
        ["blur", Nn],
        ["drop", Nn],
      ];
    i &&
      vn.push([
        "beforeinput",
        function (t, e) {
          return (function (t, e) {
            var n = t.inputType;
            if ("deleteCompositionText" === n || (s && Bi(e))) return;
            if ("insertCompositionText" === n) return;
            ls(
              e,
              function () {
                Ln(t, e) || $i(e, Oe, t);
              },
              { event: t },
            );
          })(t, e);
        },
      ]);
    var En = new WeakMap(),
      kn = new WeakMap(),
      On = Sn(function (t) {
        return (
          t.addEventListener("selectionchange", Gn),
          function () {
            return t.removeEventListener("selectionchange", Gn);
          }
        );
      });
    function bn(t, e, n, o, r, s) {
      var l = t.anchor,
        c = t.focus,
        a = l.getNode(),
        u = Yr();
      var f;
      if (void 0 !== s) f = s;
      else {
        var _t54 = sl(Ji(u));
        f = null !== _t54 ? _l(_t54, u._rootElement) : null;
      }
      var d = null !== f ? f.anchorNode : null,
        h = l.key,
        g = u.getElementByKey(h),
        _ = n.length;
      return (
        h !== c.key ||
        !Io(a) ||
        (((!r &&
          (!i || u._inputState.lastBeforeInputInsertTextTimeStamp < o + 50)) ||
          (a.isDirty() && _ < 2) ||
          Ti(n)) &&
          l.offset !== c.offset &&
          !a.isComposing()) ||
        ti(a) ||
        (a.isDirty() && _ > 1) ||
        ((r || !i) && null !== g && !a.isComposing() && d !== Pl(a, g, u)) ||
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
            r = Zs(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!o.canInsertTextBefore() && !e.isComposing()) ||
                r ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (Io(e) || (us(e) && e.isInline())) &&
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
    function Mn(t, e) {
      return (
        ei(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function An(e, n, o) {
      var _l6 = _l(e, n._rootElement),
        r = _l6.anchorNode,
        s = _l6.anchorOffset,
        i = _l6.focusNode,
        l = _l6.focusOffset,
        c = n._inputState;
      (c.isSelectionChangeFromDOMUpdate &&
        ((c.isSelectionChangeFromDOMUpdate = !1),
        Mn(r, s) && Mn(i, l) && !c.postDeleteSelectionToRestore)) ||
        ls(n, function () {
          if (!o) return void xi(null);
          if (!Vs(n, r, i)) return;
          var a = mr();
          if (c.postDeleteSelectionToRestore && Yo(a) && a.isCollapsed()) {
            var _t55 = a.anchor,
              _e52 = c.postDeleteSelectionToRestore.anchor;
            ((_t55.key === _e52.key && _t55.offset === _e52.offset + 1) ||
              (1 === _t55.offset &&
                _e52.getNode().is(_t55.getNode().getPreviousSibling()))) &&
              ((a = c.postDeleteSelectionToRestore.clone()), xi(a));
          }
          if (((c.postDeleteSelectionToRestore = null), Yo(a))) {
            var _o23 = a.anchor,
              _u3 = _o23.getNode();
            if (a.isCollapsed()) {
              "Range" === e.type && r === i && (a.dirty = !0);
              var _s16 = Ji(n).event,
                _l7 = _s16 ? _s16.timeStamp : performance.now(),
                _c$collapsedSelection = c.collapsedSelectionFormat,
                _f3 = _c$collapsedSelection.format,
                _d3 = _c$collapsedSelection.style,
                _h3 = _c$collapsedSelection.offset,
                _g3 = _c$collapsedSelection.key,
                _4 = _c$collapsedSelection.timeStamp,
                _p2 = yi(),
                _m = !1 === n.isComposing() && "" === _p2.getTextContent();
              if (_l7 < _4 + 200 && _o23.offset === _h3 && _o23.key === _g3)
                Dn(a, _f3, _d3);
              else if ("text" === _o23.type) (Io(_u3) || t(141), wn(a, _u3));
              else if ("element" === _o23.type && !_m) {
                us(_u3) || t(259);
                var _e53 = _o23.getNode();
                _e53.isEmpty()
                  ? (function (t, e) {
                      var n = e.getTextFormat(),
                        o = e.getTextStyle();
                      Dn(t, n, o);
                    })(a, _e53)
                  : Dn(a, a.format, "");
              }
            } else {
              var _t56 = _o23.key,
                _e54 = a.focus.key,
                _n37 = a.getNodes(),
                _r21 = _n37.length,
                _i12 = a.isBackward(),
                _c5 = _i12 ? l : s,
                _u4 = _i12 ? s : l,
                _f4 = _i12 ? _e54 : _t56,
                _d4 = _i12 ? _t56 : _e54;
              var _h4 = 2047,
                _g4 = !1;
              for (var _t57 = 0; _t57 < _r21; _t57++) {
                var _e55 = _n37[_t57],
                  _o24 = _e55.getTextContentSize();
                if (
                  Io(_e55) &&
                  0 !== _o24 &&
                  !(
                    (0 === _t57 && _e55.__key === _f4 && _c5 === _o24) ||
                    (_t57 === _r21 - 1 && _e55.__key === _d4 && 0 === _u4)
                  ) &&
                  ((_g4 = !0), (_h4 &= _e55.getFormat()), 0 === _h4)
                )
                  break;
              }
              a.format = _g4 ? _h4 : 0;
            }
          }
          $i(n, ve, void 0);
        });
    }
    function Dn(t, e, n) {
      (t.format === e && t.style === n) ||
        ((t.format = e), (t.style = n), (t.dirty = !0));
    }
    function wn(t, e) {
      Dn(t, e.getFormat(), e.getStyle());
    }
    function In(t) {
      if (!t.getTargetRanges) return null;
      var e = t.getTargetRanges();
      return 0 === e.length ? null : e[0];
    }
    function Pn(t) {
      var e = Yr()._inputState.lastKeyCode;
      if (null == t || t.length <= 1 || null == e) return;
      var n =
        1 === e.length ? e : "Enter" === e ? "\n" : "Tab" === e ? "\t" : null;
      if (!n) return;
      var o = mr();
      if (!Yo(o) || !o.isCollapsed()) return;
      var r = o.anchor.getNode();
      if (!Io(r)) return;
      var s = o.anchor.offset;
      if (r.getTextContentSize() === s) {
        var _t58 = r.getNextSibling();
        if ("\n" === n) {
          if (vs(_t58)) _t58.selectEnd();
          else if (!_t58) {
            var _t59 = Xl(r, dr),
              _e56 = _t59 && _t59.getNextSibling();
            us(_e56) && _e56.selectStart();
          }
        } else
          "\t" === n
            ? Lo(_t58) && _t58.selectEnd()
            : Io(_t58) && _t58.getTextContent()[0] === n && _t58.select(1, 1);
      } else r.getTextContent()[s] === n && r.select(s + 1, s + 1);
    }
    function Fn(t) {
      ((t.isInsertTextAfterHandledSelectionCommand = !1),
        null !== t.handledSelectionCommandTimeoutId &&
          (clearTimeout(t.handledSelectionCommandTimeoutId),
          (t.handledSelectionCommandTimeoutId = null)));
    }
    function Rn(t) {
      (Fn(t),
        (t.isInsertTextAfterHandledSelectionCommand = !0),
        (t.handledSelectionCommandTimeoutId = setTimeout(function () {
          return Fn(t);
        }, 0)));
    }
    function Ln(t, e) {
      var n = Sl(t);
      if (Tl(n) && jl(n, e)) return !0;
      var o = e.getRootElement();
      if (null === o) return !1;
      var r = Cl(o.ownerDocument);
      return null !== r && o.contains(r) && jl(r, e);
    }
    function Kn(e) {
      var _ref23;
      var n = e.inputType,
        o = In(e),
        r = Yr(),
        s = r._inputState,
        i = mr();
      if (
        "insertText" === n &&
        e.data &&
        s.isInsertTextAfterHandledSelectionCommand
      ) {
        if ((Fn(s), e.preventDefault(), Yo(i) && !i.isCollapsed())) {
          var _t60 = i.isBackward() ? i.anchor : i.focus;
          (i.anchor.set(_t60.key, _t60.offset, _t60.type),
            i.focus.set(_t60.key, _t60.offset, _t60.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === i) {
          var _t61 = yr();
          if (!Yo(_t61)) return !0;
          xi(_t61.clone());
        }
        if (Yo(i)) {
          var _n38 = i.anchor.key === i.focus.key;
          if (
            (function (t, e) {
              return (
                "MediaLast" === t.lastKeyCode && e < t.lastKeyDownTimeStamp + 30
              );
            })(s, e.timeStamp) &&
            r.isComposing() &&
            _n38
          ) {
            if (
              (ai(null),
              (s.lastKeyDownTimeStamp = 0),
              setTimeout(function () {
                ls(r, function () {
                  ai(null);
                });
              }, 30),
              Yo(i))
            ) {
              var _e57 = i.anchor.getNode();
              (_e57.markDirty(), Io(_e57) || t(142), wn(i, _e57));
            }
          } else {
            if (
              (ai(null),
              l &&
                null !== o &&
                !o.collapsed &&
                (i.applyDOMRange(o), !i.isCollapsed()))
            )
              return (e.preventDefault(), i.removeText(), !0);
            e.preventDefault();
            var _t62 = i.anchor.getNode(),
              _c6 = _t62.getTextContent(),
              _a3 = _t62.canInsertTextAfter(),
              _u5 = 0 === i.anchor.offset && i.focus.offset === _c6.length;
            var _d5 = f && _n38 && !_u5 && _a3;
            if (
              (_d5 && i.isCollapsed() && (_d5 = !hs(Ki(i.anchor, !0))), !_d5)
            ) {
              $i(r, De, !0);
              var _t63 = mr();
              f &&
                Yo(_t63) &&
                _t63.isCollapsed() &&
                ((s.postDeleteSelectionToRestore = _t63),
                setTimeout(function () {
                  return (s.postDeleteSelectionToRestore = null);
                }));
            }
          }
          return !0;
        }
      }
      if (!Yo(i)) return !0;
      var c = e.data;
      (null !== s.unprocessedBeforeInputData &&
        ki(!1, r, s.unprocessedBeforeInputData),
        (i.dirty && null === s.unprocessedBeforeInputData) ||
          !i.isCollapsed() ||
          _s(i.anchor.getNode()) ||
          null === o ||
          i.applyDOMRange(o),
        (s.unprocessedBeforeInputData = null));
      var a = i.anchor,
        u = i.focus,
        d = a.getNode(),
        h = u.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === c) (e.preventDefault(), $i(r, we, !1));
        else if (c === v) (e.preventDefault(), $i(r, Ie, void 0));
        else if (null == c && e.dataTransfer) {
          var _t64 = e.dataTransfer.getData("text/plain");
          (e.preventDefault(), i.insertRawText(_t64));
        } else
          null != c && bn(i, o, c, e.timeStamp, !0)
            ? (e.preventDefault(), $i(r, Pe, c), Pn(c))
            : (s.unprocessedBeforeInputData = c);
        return ((s.lastBeforeInputInsertTextTimeStamp = e.timeStamp), !0);
      }
      switch ((e.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          $i(r, Pe, e);
          Pn(
            (_ref23 = e.dataTransfer
              ? e.dataTransfer.getData("text/plain")
              : null) != null
              ? _ref23
              : e.data,
          );
          break;
        case "insertFromComposition": {
          var _t65 = s.hadOrphanedCompositionEvents;
          s.hadOrphanedCompositionEvents = !1;
          var _n39 = r._compositionKey;
          (ai(null), _t65 || $i(r, Pe, e), Wn(_n39));
          break;
        }
        case "insertLineBreak":
          (ai(null), $i(r, we, !1));
          break;
        case "insertParagraph":
          (ai(null),
            s.isInsertLineBreak && !l
              ? ((s.isInsertLineBreak = !1), $i(r, we, !1))
              : $i(r, Ie, void 0));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          $i(r, Fe, e);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || us(t) || us(e) || !Zs(t) || !Zs(e);
          })(d, h) && $i(r, Re, e);
          break;
        case "deleteByDrag":
          (Hi(co), $i(r, Re, e));
          break;
        case "deleteByCut":
          $i(r, Re, e);
          break;
        case "deleteContent":
          $i(r, De, !1);
          break;
        case "deleteWordBackward":
          $i(r, Le, !0);
          break;
        case "deleteWordForward":
          $i(r, Le, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          $i(r, Ke, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          $i(r, Ke, !1);
          break;
        case "formatStrikeThrough":
          $i(r, Be, "strikethrough");
          break;
        case "formatBold":
          $i(r, Be, "bold");
          break;
        case "formatItalic":
          $i(r, Be, "italic");
          break;
        case "formatUnderline":
          $i(r, Be, "underline");
          break;
        case "historyUndo":
          $i(r, ze, void 0);
          break;
        case "historyRedo":
          $i(r, We, void 0);
      }
      return !0;
    }
    function Bn(t) {
      var e = Yr(),
        n = e._inputState,
        o = mr(),
        r = t.data,
        l = In(t);
      var c = !1;
      if (null != r && Yo(o)) {
        var _a4 = sl(Ji(e)),
          _u6 = null !== _a4 ? _l(_a4, e._rootElement) : null,
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
            Io(_h5) &&
            ti(_h5);
        if (!_d6 && !_g5 && bn(o, l, r, t.timeStamp, !1, _u6)) {
          if (((c = !0), "ending-firefox" === n.compositionPhase)) {
            var _t66 = Un(e, r);
            if (((n.compositionPhase = "idle"), _t66))
              return (Hi(uo), Ci(), !0);
          }
          var _l8 = o.anchor.getNode();
          if (null === _a4 || null === _u6) return !0;
          var _d7 = o.isBackward(),
            _h6 = _d7 ? o.anchor.offset : o.focus.offset,
            _g6 = _d7 ? o.focus.offset : o.anchor.offset;
          (i &&
            !o.isCollapsed() &&
            Io(_l8) &&
            null !== _u6.anchorNode &&
            _l8.getTextContent().slice(0, _h6) +
              r +
              _l8.getTextContent().slice(_h6 + _g6) ===
              Ei(_u6.anchorNode)) ||
            $i(e, Pe, r);
          var _5 = r.length;
          (s &&
            _5 > 1 &&
            "insertCompositionText" === t.inputType &&
            !e.isComposing() &&
            ((o.anchor.offset -= _5),
            (o._cachedNodes = null),
            (o._cachedIsBackward = null)),
            f && e.isComposing() && ((n.lastKeyDownTimeStamp = 0), ai(null)));
        }
      }
      if (!c) {
        (ki(!1, e, null !== r ? r : void 0),
          "ending-firefox" === n.compositionPhase &&
            (Un(e, r || void 0), Hi(uo), (n.compositionPhase = "idle")));
      }
      return (Ci(), !0);
    }
    function $n(t) {
      var e = Yr(),
        n = e._inputState,
        o = mr();
      if (Yo(o) && !e.isComposing()) {
        ((n.compositionPhase = "composing"),
          (n.hadOrphanedCompositionEvents = !1));
        var _r22 = o.anchor,
          _s17 = o.anchor.getNode();
        if (
          (ai(_r22.key),
          Hi(ao),
          t.timeStamp < n.lastKeyDownTimeStamp + 30 ||
            "element" === _r22.type ||
            !o.isCollapsed() ||
            (!f &&
              (_s17.getFormat() !== o.format ||
                (Io(_s17) && _s17.getStyle() !== o.style))) ||
            (Io(_s17) &&
              (ti(_s17) ||
                (0 === _r22.offset && !_s17.canInsertTextBefore()) ||
                (_r22.offset === _s17.getTextContentSize() &&
                  !_s17.canInsertTextAfter()))))
        ) {
          $i(e, Pe, E);
          var _t67 = mr();
          Yo(_t67) && ai(_t67.anchor.key);
        }
      }
      return !0;
    }
    function zn(t) {
      var e = Yr();
      return (
        (e._inputState.compositionPhase = "idle"),
        Un(e, t.data),
        Hi(uo),
        !0
      );
    }
    function Wn(t) {
      if (null === t) return;
      var e = fi(t);
      if (!Io(e) || "text" === e.getType() || ti(e) || !e.isAttached()) return;
      var n = mr(),
        o = Yo(n) && n.anchor.key === t ? n.anchor.offset : null,
        r = wo(e.getTextContent());
      if (
        (r.setFormat(e.getFormat()),
        r.setStyle(e.getStyle()),
        e.replace(r),
        null !== o)
      ) {
        var _t68 = Math.min(o, r.getTextContentSize());
        r.select(_t68, _t68);
      }
    }
    function Un(t, e) {
      var n = t._compositionKey;
      if ((ai(null), null !== n && null != e)) {
        if ("" === e) {
          var _e58 = fi(n),
            _o25 = t.getElementByKey(n),
            _r23 = null !== _o25 && Io(_e58) ? Pl(_e58, _o25, t) : null;
          if (null !== _r23 && null !== _r23.nodeValue && Io(_e58)) {
            var _n40 = sl(Ji(t)),
              _o26 = _n40 && _l(_n40, t._rootElement);
            var _s18 = null,
              _i13 = null;
            (null !== _o26 &&
              _o26.anchorNode === _r23 &&
              ((_s18 = _o26.anchorOffset), (_i13 = _o26.focusOffset)),
              Oi(_e58, _r23.nodeValue, _s18, _i13, !0));
          }
          return (Wn(n), !1);
        }
        if ("\n" === e[e.length - 1]) {
          var _e59 = mr();
          if (Yo(_e59) || Jo(_e59)) {
            if (Yo(_e59)) {
              var _t69 = _e59.focus;
              _e59.anchor.set(_t69.key, _t69.offset, _t69.type);
            }
            return ($i(t, qe, null), Wn(n), !1);
          }
        }
        var _o27 = fi(n);
        if (null !== _o27 && Io(_o27) && ti(_o27)) {
          _o27.markDirty();
          var _t70 = mr(),
            _r24 = _o27.getTextContentSize(),
            _s19 =
              Yo(_t70) && _t70.anchor.key === n ? _t70.anchor.offset : _r24;
          return (_o27.select(_s19, _s19).insertText(e), !0);
        }
      }
      return (ki(!0, t, e), Wn(n), !1);
    }
    function Hn(t) {
      var e = Yr(),
        n = e._inputState;
      if (null == t.key) return !0;
      if ("ending-safari" === n.compositionPhase) {
        var _o28 = Pi(t);
        if (
          (_o28 &&
            ls(e, function () {
              Un(e, n.compositionEndData);
            }),
          (n.compositionPhase = "idle"),
          (n.compositionEndData = ""),
          _o28)
        )
          return !0;
      }
      if (
        (function (t) {
          return Di(t, "ArrowRight", { shiftKey: "any" });
        })(t)
      )
        $i(e, He, t);
      else if (
        (function (t) {
          return Di(
            t,
            "ArrowRight",
            babelHelpers["extends"]({}, wi, { shiftKey: "any" }),
          );
        })(t)
      )
        $i(e, je, t);
      else if (
        (function (t) {
          return Di(t, "ArrowLeft", { shiftKey: "any" });
        })(t)
      )
        $i(e, Ye, t);
      else if (
        (function (t) {
          return Di(
            t,
            "ArrowLeft",
            babelHelpers["extends"]({}, wi, { shiftKey: "any" }),
          );
        })(t)
      )
        $i(e, Ge, t);
      else if (
        (function (t) {
          return Di(t, "ArrowUp", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        $i(e, Je, t);
      else if (
        (function (t) {
          return Di(t, "ArrowDown", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        $i(e, Ve, t);
      else if (
        (function (t) {
          return Di(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
            shiftKey: !0,
          });
        })(t)
      )
        ((n.isInsertLineBreak = !0), $i(e, qe, t));
      else if (
        (function (t) {
          return " " === t.key;
        })(t)
      )
        $i(e, Xe, t);
      else if (
        (function (t) {
          return r && Di(t, "o", { ctrlKey: !0 });
        })(t)
      )
        (t.preventDefault(), (n.isInsertLineBreak = !0), $i(e, we, !0));
      else if (
        (function (t) {
          return Di(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
          });
        })(t)
      )
        ((n.isInsertLineBreak = !1), $i(e, qe, t));
      else if (
        (function (t) {
          return (
            Di(t, "Backspace", { shiftKey: "any" }) ||
            (r && Di(t, "h", { ctrlKey: !0 }))
          );
        })(t)
      )
        Pi(t) ? $i(e, Qe, t) && Rn(n) : (t.preventDefault(), $i(e, De, !0));
      else if (
        (function (t) {
          return "Escape" === t.key;
        })(t)
      )
        $i(e, Ze, t);
      else if (
        (function (t) {
          return Di(t, "Delete", {}) || (r && Di(t, "d", { ctrlKey: !0 }));
        })(t)
      )
        !(function (t) {
          return "Delete" === t.key;
        })(t)
          ? (t.preventDefault(), $i(e, De, !1))
          : $i(e, tn, t);
      else if (
        (function (t) {
          return Di(t, "Backspace", Ii);
        })(t)
      )
        (t.preventDefault(), $i(e, Le, !0));
      else if (
        (function (t) {
          return Di(t, "Delete", Ii);
        })(t)
      )
        (t.preventDefault(), $i(e, Le, !1));
      else if (
        (function (t) {
          return r && Di(t, "Backspace", { metaKey: !0 });
        })(t)
      )
        (t.preventDefault(), $i(e, Ke, !0));
      else if (
        (function (t) {
          return (
            r &&
            (Di(t, "Delete", { metaKey: !0 }) || Di(t, "k", { ctrlKey: !0 }))
          );
        })(t)
      )
        (t.preventDefault(), $i(e, Ke, !1));
      else if (
        (function (t) {
          return Di(t, "b", wi);
        })(t)
      )
        (t.preventDefault(), $i(e, Be, "bold"));
      else if (
        (function (t) {
          return Di(t, "u", wi);
        })(t)
      )
        (t.preventDefault(), $i(e, Be, "underline"));
      else if (
        (function (t) {
          return Di(t, "i", wi);
        })(t)
      )
        (t.preventDefault(), $i(e, Be, "italic"));
      else if (
        (function (t) {
          return Di(t, "Tab", { shiftKey: "any" });
        })(t)
      )
        $i(e, en, t);
      else if (
        (function (t) {
          return Di(t, "z", wi);
        })(t)
      )
        (t.preventDefault(), $i(e, ze, void 0));
      else if (
        (function (t) {
          if (r) return Di(t, "z", { metaKey: !0, shiftKey: !0 });
          return (
            Di(t, "y", { ctrlKey: !0 }) ||
            Di(t, "z", { ctrlKey: !0, shiftKey: !0 })
          );
        })(t)
      )
        (t.preventDefault(), $i(e, We, void 0));
      else {
        var _o29 = e._editorState._selection;
        !(function (t) {
          return Di(t, "a", wi);
        })(t)
          ? null === _o29 ||
            Yo(_o29) ||
            (!(function (t) {
              return Di(t, "c", wi);
            })(t)
              ? (function (t) {
                  return Di(t, "x", wi);
                })(t) && (t.preventDefault(), $i(e, dn, t))
              : (t.preventDefault(), $i(e, fn, t)))
          : (t.preventDefault(), $i(e, hn, t) && Rn(n));
      }
      return (
        (function (t) {
          return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey;
        })(t) && e.dispatchCommand(Cn, t),
        !0
      );
    }
    function jn(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    var Yn = new Map();
    function Gn(t) {
      var e = il(t.target);
      if (null === e) return;
      var n = Ui(t.target);
      var o = null,
        r = null;
      var s = null !== n ? kn.get(n) : void 0;
      if (null !== n) {
        if (void 0 !== s) {
          var _t71 = s.editors;
          var _n41 = s.hasShadowEditor;
          if (void 0 === _n41) {
            _n41 = !1;
            for (var _e60 of _t71)
              if (
                null !== _e60._rootElement &&
                ll(_e60._rootElement.getRootNode())
              ) {
                _n41 = !0;
                break;
              }
            s.hasShadowEditor = _n41;
          }
          if (_n41) {
            var _n42 = null,
              _s20 = null;
            for (var _i14 of _t71) {
              var _t72 = _i14._rootElement;
              if (null === _t72) continue;
              var _l9 = _l(e, _t72).anchorNode;
              if (null !== _l9 && Xs(_l9) === _i14) {
                if (ll(_t72.getRootNode())) {
                  ((o = _i14), (r = _l9));
                  break;
                }
                null === _n42 && ((_n42 = _i14), (_s20 = _l9));
              }
            }
            null === o && null !== _n42 && ((o = _n42), (r = _s20));
          } else {
            var _t73 = e.anchorNode;
            null === _t73 ||
              (Tl(_t73) && null !== _t73.shadowRoot) ||
              ((o = Xs(_t73)), null !== o && (r = _t73));
          }
        }
        if (null === o) {
          var _t74 = Cl(n);
          o = null !== _t74 ? Xs(_t74) : null;
        }
      }
      if (null === o) return;
      if (o._inputState.isSelectionChangeFromMouseDown) {
        if (void 0 !== s)
          for (var _t75 of s.editors)
            _t75._inputState.isSelectionChangeFromMouseDown = !1;
        ls(o, function () {
          var n = yr(),
            s = r != null ? r : _l(e, o._rootElement).anchorNode;
          if (Tl(s) || ei(s)) {
            xi(pr(n, e, o, t));
          }
        });
      }
      var i = Ni(o),
        l = i[i.length - 1],
        c = l._key,
        a = Yn.get(c),
        u = a || l;
      (u !== o && An(e, u, !1),
        An(e, o, !0),
        o !== l ? Yn.set(c, o) : a && Yn["delete"](c));
    }
    function Jn(t) {
      t._lexicalHandled = !0;
    }
    function Vn(t) {
      return !0 === t._lexicalHandled;
    }
    var qn = function qn() {};
    function Xn(e) {
      var n = En.get(e);
      if (void 0 === n) return void qn();
      var o = kn.get(n);
      if (void 0 === o) return void qn();
      En["delete"](e);
      var r = Qs(e);
      qs(r)
        ? (!(function (t) {
            if (null !== t._parentEditor) {
              var _e61 = Ni(t),
                _n43 = _e61[_e61.length - 1]._key;
              Yn.get(_n43) === t && Yn["delete"](_n43);
            } else Yn["delete"](t._key);
          })(r),
          o.editors["delete"](r),
          (o.hasShadowEditor = void 0),
          (e.__lexicalEditor = null))
        : r && t(198);
      var s = jn(e);
      for (var _t76 = 0; _t76 < s.length; _t76++) s[_t76]();
      e.__lexicalEventHandles = [];
    }
    function Qn(e, n, o) {
      Ur();
      var r = e.__key,
        s = e.getParent();
      if (null === s) return void (null !== oc(e) && t(367, r, String(oc(e))));
      var i = (function (t) {
        var e = mr();
        if (!Yo(e) || !us(t)) return e;
        var n = e.anchor,
          o = e.focus,
          r = n.getNode(),
          s = o.getNode();
        Yi(r, t) && n.set(t.__key, 0, "element");
        Yi(s, t) && o.set(t.__key, 0, "element");
        return e;
      })(e);
      var l = !1;
      if (Yo(i) && n) {
        var _t77 = i.anchor,
          _n44 = i.focus;
        (_t77.key === r &&
          (Sr(_t77, e, s, e.getPreviousSibling(), e.getNextSibling()),
          (l = !0)),
          _n44.key === r &&
            (Sr(_n44, e, s, e.getPreviousSibling(), e.getNextSibling()),
            (l = !0)));
      } else Jo(i) && n && e.isSelected() && e.selectPrevious();
      if (Yo(i) && n && !l) {
        var _t78 = e.getIndexWithinParent();
        (ii(e), xr(i, s, _t78, -1));
      } else ii(e);
      (o || Qi(s) || s.canBeEmpty() || !s.isEmpty() || Qn(s, n),
        n && i && _s(s) && s.isEmpty() && s.selectEnd());
    }
    var Zn = Symbol["for"]("ephemeral");
    function to(t) {
      return t[Zn] || !1;
    }
    var eo = { configurable: !0, enumerable: !1, value: void 0, writable: !0 };
    var _no5 = (function () {
      function no(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", eo),
          Object.defineProperty(this, Et, eo),
          si(this, t));
      }
      no.getType = function getType() {
        var _Vl = Vl(this),
          e = _Vl.ownNodeType;
        return (void 0 === e && t(64, this.name), e);
      };
      no.clone = function clone(e) {
        t(65, this.name);
      };
      var _proto6 = no.prototype;
      _proto6.$config = function $config() {
        return {};
      };
      _proto6.config = function config(t, e) {
        var _ref24;
        var n = e["extends"] || Zl(this.constructor);
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
          var _e62 = fi(t);
          if (null === _e62) break;
          t = null !== _e62.__parent ? _e62.__parent : oc(_e62);
        }
        return !1;
      };
      _proto6.isSelected = function isSelected(t) {
        var _this13 = this;
        var e = t || mr();
        if (null == e) return !1;
        var n = e.getNodes().some(function (t) {
          return t.__key === _this13.__key;
        });
        if (Io(this)) return n;
        if (
          Yo(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t79 = this.getParent();
          if (hs(this) && this.isInline() && _t79) {
            var _n45 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t79.is(_n45.getNode()) &&
              _n45.offset === _t79.getChildrenSize() &&
              this.is(_t79.getLastChild())
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
        return null === t ? null : fi(t);
      };
      _proto6.getParentOrThrow = function getParentOrThrow() {
        var e = this.getParent();
        return (null === e && t(66, this.__key), e);
      };
      _proto6.getTopLevelElement = function getTopLevelElement() {
        var e = this;
        for (; null !== e; ) {
          var _n46 = e.getParent();
          if (Qi(_n46) || null !== oc(e))
            return (us(e) || (e === this && hs(e)) || t(194), e);
          e = _n46;
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
        return null === t ? null : fi(t);
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
        return null === t ? null : fi(t);
      };
      _proto6.getNextSiblings = function getNextSiblings() {
        var t = [];
        var e = this.getNextSibling();
        for (; null !== e; ) (t.push(e), (e = e.getNextSibling()));
        return t;
      };
      _proto6.getCommonAncestor = function getCommonAncestor(t) {
        var e = us(this) ? this : this.getParent(),
          n = us(t) ? t : t.getParent(),
          o = e && n ? ta(e, n) : null;
        return o ? o.commonAncestor : null;
      };
      _proto6.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto6.isBefore = function isBefore(e) {
        var n = ta(this, e);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === Xc(n)
              : ("same" !== n.type && "ancestor" !== n.type && t(279), !1)))
        );
      };
      _proto6.isParentOf = function isParentOf(t) {
        return Yi(t, this);
      };
      _proto6.getNodesBetween = function getNodesBetween(e) {
        var n = this.isBefore(e),
          o = [],
          r = new Set();
        var s = this;
        for (; null !== s; ) {
          var _i15 = s.__key;
          if ((r.has(_i15) || (r.add(_i15), o.push(s)), s === e)) break;
          var _l0 = us(s) ? (n ? s.getFirstChild() : s.getLastChild()) : null;
          if (null !== _l0) {
            s = _l0;
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
        var t = Yr()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto6.getLatest = function getLatest() {
        if (to(this)) return this;
        var e = fi(this.__key);
        return (null === e && t(113), e);
      };
      _proto6.getWritable = function getWritable() {
        if (to(this)) return this;
        Ur();
        var t = jr(),
          e = Yr(),
          n = t._nodeMap,
          o = this.__key,
          r = this.getLatest(),
          s = e._cloneNotNeeded,
          i = mr();
        if ((null !== i && i.setCachedNodes(null), s.has(o))) return (ci(r), r);
        var l = Kl(r);
        return (s.add(o), ci(l), n.set(o, l), l);
      };
      _proto6.getTextContent = function getTextContent() {
        return pc(this);
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
      no.importJSON = function importJSON(e) {
        t(18, this.name);
      };
      _proto6.updateFromJSON = function updateFromJSON(t) {
        return (function (t, e) {
          var n = t.getWritable(),
            o = e.$;
          var r = o;
          for (var _t80 of gt(n).flatKeys)
            _t80 in e &&
              ((void 0 !== r && r !== o) ||
                (r = babelHelpers["extends"]({}, o)),
              (r[_t80] = e[_t80]));
          return ((n.__state || r) && ht(t).updateFromJSON(r), n);
        })(this, t);
      };
      no.transform = function transform() {
        return null;
      };
      _proto6.remove = function remove(t) {
        Qn(this, !0, t);
      };
      _proto6.replace = function replace(e, n) {
        Ur();
        var o = mr();
        (null !== o && (o = o.clone()), el(this, e));
        var r = this.getLatest(),
          s = this.__key,
          i = e.__key,
          l = e.getWritable(),
          c = this.getParentOrThrow().getWritable(),
          a = c.__size,
          u = l.getParent(),
          f = null !== u ? l.getIndexWithinParent() : -1;
        (ii(l), null !== u && Yo(o) && xr(o, u, f, -1));
        var d = r.getPreviousSibling(),
          h = r.getNextSibling(),
          g = r.__prev,
          _ = r.__next,
          p = r.__parent;
        if ((Qn(r, !1, !0), null === d)) c.__first = i;
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
          ((us(this) && us(l)) || t(139),
          (m = l.getChildrenSize()),
          l.splice(m, 0, this.getChildren()));
        var y = cc(this);
        if (y.length > 0) {
          (ec(this) && ec(l)) || t(368, this.__key, l.__key);
          for (var _t81 of y) {
            var _e63 = ac(this, _t81);
            null !== _e63 && (Cc(this, _t81), xc(l, _t81, _e63));
          }
        }
        if (Yo(o)) {
          xi(o);
          var _t82 = o.anchor,
            _e64 = o.focus;
          (_t82.key === s &&
            (n && "element" === _t82.type
              ? _t82.set(l.__key, m + _t82.offset, "element")
              : zo(_t82, l)),
            _e64.key === s &&
              (n && "element" === _e64.type
                ? _e64.set(l.__key, m + _e64.offset, "element")
                : zo(_e64, l)));
        }
        return (ui() === s && ai(i), l);
      };
      _proto6.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (Ur(), el(this, t));
        var n = this.getWritable(),
          o = t.getWritable();
        Sc(this.getParentOrThrow());
        var r = o.getParent(),
          s = mr();
        var i = !1,
          l = !1;
        if (null !== r) {
          var _n47 = t.getIndexWithinParent();
          if (Yo(s)) {
            var _t83 = r.__key,
              _e65 = s.anchor,
              _o30 = s.focus;
            ((i =
              "element" === _e65.type &&
              _e65.key === _t83 &&
              _e65.offset === _n47 + 1),
              (l =
                "element" === _o30.type &&
                _o30.key === _t83 &&
                _o30.offset === _n47 + 1));
          }
          (ii(o), e && Yo(s) && xr(s, r, _n47, -1));
        } else ii(o);
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
          e && Yo(s))
        ) {
          var _t84 = this.getIndexWithinParent();
          xr(s, a, _t84 + 1);
          var _e66 = a.__key;
          (i && s.anchor.set(_e66, _t84 + 2, "element"),
            l && s.focus.set(_e66, _t84 + 2, "element"));
        }
        return t;
      };
      _proto6.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (Ur(), el(this, t));
        var n = this.getWritable(),
          o = t.getWritable();
        Sc(this.getParentOrThrow());
        var r = o.__key,
          s = mr(),
          i = o.getParent(),
          l = null !== i ? o.getIndexWithinParent() : -1;
        (ii(o), null !== i && e && Yo(s) && xr(s, i, l, -1));
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
          e && Yo(s))
        ) {
          xr(s, this.getParentOrThrow(), f);
        }
        return t;
      };
      _proto6.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto6.createParentElementNode = function createParentElementNode() {
        return As();
      };
      _proto6.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto6.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto6.selectPrevious = function selectPrevious(t, e) {
        Ur();
        var n = rc(this);
        if (null !== n) return n.selectPrevious(t, e);
        var o = this.getPreviousSibling(),
          r = this.getParentOrThrow();
        if (null === o) return r.select(0, 0);
        if (us(o)) return o.select();
        if (!Io(o)) {
          var _t85 = o.getIndexWithinParent() + 1;
          return r.select(_t85, _t85);
        }
        return o.select(t, e);
      };
      _proto6.selectNext = function selectNext(t, e) {
        Ur();
        var n = rc(this);
        if (null !== n) return n.selectNext(t, e);
        var o = this.getNextSibling(),
          r = this.getParentOrThrow();
        if (null === o) return r.select();
        if (us(o)) return o.select(0, 0);
        if (!Io(o)) {
          var _t86 = o.getIndexWithinParent();
          return r.select(_t86, _t86);
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
      return no;
    })();
    function oo(t) {
      return t instanceof _no5;
    }
    var ro = "history-merge",
      so = "collaboration",
      io = "skip-scroll-into-view",
      lo = "skip-dom-selection",
      co = "skip-selection-focus",
      ao = "composition-start",
      uo = "composition-end",
      fo = "!important";
    function ho(t) {
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
                        _s21 = o.trim();
                      ("" !== _r25 && "" !== _s21 && (e[_r25] = _s21),
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
    function go(t, e, n) {
      var o = n.trimEnd(),
        r = o.length - 10;
      r >= 0 && o.slice(r).toLowerCase() === fo
        ? t.setProperty(e, o.slice(0, r).trim(), "important")
        : t.setProperty(e, n, "");
    }
    function _o(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var o = ho(n),
        r = ho(e);
      for (var _e67 in r) (delete o[_e67], go(t, _e67, r[_e67]));
      for (var _e68 in o) t.removeProperty(_e68);
    }
    function po(t, e) {
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
    function mo(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function yo(t, e, n, o, r) {
      var s = o.classList;
      var i = Fi(r, "base");
      (void 0 !== i && s.add.apply(s, i),
        (i = Fi(r, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== i &&
        (8 & n && 4 & n
          ? ((l = !0), c || s.add.apply(s, i))
          : c && s.remove.apply(s, i));
      for (var _t87 in A) {
        var _o31 = A[_t87];
        if (((i = Fi(r, _t87)), void 0 !== i))
          if (n & _o31) {
            if (l && ("underline" === _t87 || "strikethrough" === _t87)) {
              e & _o31 && s.remove.apply(s, i);
              continue;
            }
            (0 === (e & _o31) ||
              (c && "underline" === _t87) ||
              "strikethrough" === _t87) &&
              s.add.apply(s, i);
          } else e & _o31 && s.remove.apply(s, i);
      }
    }
    function xo(t, e, n) {
      var o = n.isComposing(),
        r = t + (o ? N : ""),
        i = Al(),
        l = Dl(i).$getDOMSlot(n, e, i),
        c = l.getFirstChild();
      if (null === c || c.nodeType !== Node.TEXT_NODE)
        return void l.insertChild(dl().createTextNode(r));
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
            _t88 = _ref25[0],
            _e69 = _ref25[1],
            _n48 = _ref25[2];
          (0 !== _e69 && a.deleteData(_t88, _e69), a.insertData(_t88, _n48));
        } else a.nodeValue = r;
    }
    function Co(t, e, n, o, r, s) {
      xo(r, t, e);
      var i = s.theme.text;
      void 0 !== i && yo(0, 0, o, t, i);
    }
    function So(t, e) {
      var n = dl().createElement(e);
      return (n.appendChild(t), n);
    }
    function To(t) {
      return null != t && !0 === t.__isInlineFormattable;
    }
    var _No2 = (function (_no) {
      function No(t, e) {
        var _this;
        if (t === void 0) {
          t = "";
        }
        ((_this = _no.call(this, e) || this),
          (_this.__text = t),
          (_this.__format = 0),
          (_this.__style = ""),
          (_this.__mode = 0),
          (_this.__detail = 0));
        return _this;
      }
      babelHelpers.inheritsLoose(No, _no);
      var _proto7 = No.prototype;
      _proto7.$config = function $config() {
        return this.config("text", {
          importDOM: {
            "#text": function text() {
              return { conversion: bo, priority: 0 };
            },
            b: function b() {
              return { conversion: Eo, priority: 0 };
            },
            code: function code() {
              return { conversion: Do, priority: 0 };
            },
            em: function em() {
              return { conversion: Do, priority: 0 };
            },
            i: function i() {
              return { conversion: Do, priority: 0 };
            },
            mark: function mark() {
              return { conversion: Do, priority: 0 };
            },
            s: function s() {
              return { conversion: Do, priority: 0 };
            },
            span: function span() {
              return { conversion: vo, priority: 0 };
            },
            strong: function strong() {
              return { conversion: Do, priority: 0 };
            },
            sub: function sub() {
              return { conversion: Do, priority: 0 };
            },
            sup: function sup() {
              return { conversion: Do, priority: 0 };
            },
            u: function u() {
              return { conversion: Do, priority: 0 };
            },
          },
        });
      };
      _proto7.afterCloneFrom = function afterCloneFrom(t) {
        (_no.prototype.afterCloneFrom.call(this, t),
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
        return this.__key === ui();
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
        return ri(this.getLatest().__format, t, e);
      };
      _proto7.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto7.isInline = function isInline() {
        return !0;
      };
      _proto7.createDOM = function createDOM(t, e) {
        var n = this.__format,
          o = po(0, n),
          r = mo(0, n),
          s = null === o ? r : o,
          i = dl().createElement(s);
        var l = i;
        (this.hasFormat("code") && i.setAttribute("spellcheck", "false"),
          null !== o && ((l = dl().createElement(r)), i.appendChild(l)));
        Co(l, this, 0, n, this.__text, t);
        var c = this.__style;
        return ("" !== c && _o(i.style, c), i);
      };
      _proto7.updateDOM = function updateDOM(e, n, o) {
        var r = this.__text,
          s = e.__format,
          i = this.__format,
          l = po(0, s),
          c = po(0, i),
          a = mo(0, s),
          u = mo(0, i);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _e70 = n.firstChild;
          null == _e70 && t(48);
          var _s22 = dl().createElement(u);
          return (Co(_s22, this, 0, i, r, o), n.replaceChild(_s22, _e70), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && t(49)),
          xo(r, f, this));
        var d = o.theme.text;
        void 0 !== d && s !== i && yo(0, s, i, f, d);
        var h = e.__style,
          g = this.__style;
        return (h !== g && _o(n.style, g, h), !1);
      };
      _proto7.updateFromJSON = function updateFromJSON(t) {
        return _no.prototype.updateFromJSON
          .call(this, t)
          .setTextContent(t.text)
          .setFormat(t.format)
          .setDetail(t.detail)
          .setMode(t.mode)
          .setStyle(t.style);
      };
      _proto7.exportDOM = function exportDOM(e) {
        var _no$prototype$exportD = _no.prototype.exportDOM.call(this, e),
          n = _no$prototype$exportD.element;
        return (
          Tl(n) || t(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = So(n, "b")),
          this.hasFormat("italic") && (n = So(n, "i")),
          this.hasFormat("strikethrough") && (n = So(n, "s")),
          this.hasFormat("underline") && (n = So(n, "u")),
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
          _no.prototype.exportJSON.call(this),
        );
      };
      _proto7.selectionTransform = function selectionTransform(t, e) {};
      _proto7.setFormat = function setFormat(t) {
        var e = this.getWritable();
        return ((e.__format = "string" == typeof t ? A[t] : t), e);
      };
      _proto7.setDetail = function setDetail(t) {
        var e = this.getWritable();
        return ((e.__detail = "string" == typeof t ? D[t] : t), e);
      };
      _proto7.setStyle = function setStyle(t) {
        var e = this.getWritable();
        return ((e.__style = t), e);
      };
      _proto7.toggleFormat = function toggleFormat(t) {
        var e = ri(this.getFormat(), t, null);
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
        Ur();
        var n = t,
          o = e;
        var r = mr(),
          s = this.getTextContent(),
          i = this.__key;
        if ("string" == typeof s) {
          var _t89 = s.length;
          (void 0 === n && (n = _t89), void 0 === o && (o = _t89));
        } else ((n = 0), (o = 0));
        if (!Yo(r)) return hr(i, n, i, o, "text", "text");
        {
          var _t90 = ui();
          ((_t90 !== r.anchor.key && _t90 !== r.focus.key) || ai(i),
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
        var c = mr();
        if (o && Yo(c)) {
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
        Ur();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var o = e.__key,
          r = ui(),
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
        for (var _e72 = 0, _o32 = 0; _e72 < s && _o32 <= l; _o32++) {
          var _r26 = t[_o32];
          _r26 > _e72 && (i.push(n.slice(_e72, _r26)), (_e72 = _r26));
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
        var y = mr();
        if (Yo(y)) {
          var _ref26 = y.isBackward()
              ? [y.focus, y.anchor]
              : [y.anchor, y.focus],
            _t91 = _ref26[0],
            _e73 = _ref26[1];
          ("text" === _t91.type && _t91.key === o && (p = _t91),
            "text" === _e73.type && _e73.key === o && (m = _e73));
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
        for (var _t92 = 1; _t92 < c; _t92++) {
          var _n49 = wo(i[_t92]);
          ((_n49.__format = d),
            (_n49.__style = h),
            (_n49.__detail = g),
            (_n49.__state = xt(e, _n49)));
          var _s23 = _n49.__key;
          (r === o && ai(_s23), x.push(_n49));
        }
        var C = p ? p.offset : null,
          S = m ? m.offset : null;
        var T = 0;
        for (var _t93 of x) {
          if (!p && !m) break;
          var _e74 = T + _t93.getTextContentSize();
          if (
            (null !== p &&
              null !== C &&
              C <= _e74 &&
              C >= T &&
              (p.set(_t93.getKey(), C - T, "text"), C < _e74 && (p = null)),
            null !== m && null !== S && S <= _e74 && S >= T)
          ) {
            m.set(_t93.getKey(), S - T, "text");
            break;
          }
          T = _e74;
        }
        if (null !== u) {
          !(function (t) {
            var e = t.getPreviousSibling(),
              n = t.getNextSibling();
            null !== e && ci(e);
            null !== n && ci(n);
          })(this);
          var _t94 = u.getWritable(),
            _e75 = this.getIndexWithinParent();
          (_
            ? (_t94.splice(_e75, 0, x), this.remove())
            : _t94.splice(_e75, 1, x),
            Yo(y) && xr(y, u, _e75, c - 1));
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
        ui() === r && ai(o);
        var l = mr();
        if (Yo(l)) {
          var _t95 = l.anchor,
            _s24 = l.focus;
          (null !== _t95 && _t95.key === r && Tr(_t95, n, o, e, i),
            null !== _s24 && _s24.key === r && Tr(_s24, n, o, e, i));
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
      return babelHelpers.createClass(No, [
        {
          key: "__isInlineFormattable",
          get: function get() {
            return !0;
          },
        },
      ]);
    })(_no5);
    function vo(t) {
      return { forChild: Po(t.style), node: null };
    }
    function Eo(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: Po(e.style, n ? void 0 : "bold"), node: null };
    }
    var ko = new WeakMap();
    function Oo(t) {
      if (!Tl(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function bo(e) {
      var n = e;
      null === e.parentElement && t(129);
      var o = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var o = [t];
          for (; null !== n && void 0 === (e = ko.get(n)) && !Oo(n); )
            (o.push(n), (n = n.parentNode));
          var r = void 0 === e ? n : e;
          for (var _t96 = 0; _t96 < o.length; _t96++) ko.set(o[_t96], r);
          return r;
        })(n)
      )
        return { node: Or(o) };
      if (((o = o.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === o))
        return { node: null };
      if (" " === o[0]) {
        var _t97 = n,
          _e76 = !0;
        for (; null !== _t97 && null !== (_t97 = Mo(_t97, !1)); ) {
          var _n50 = _t97.textContent || "";
          if (_n50.length > 0) {
            (/[ \t\n]$/.test(_n50) && (o = o.slice(1)), (_e76 = !1));
            break;
          }
        }
        _e76 && (o = o.slice(1));
      }
      if (" " === o[o.length - 1]) {
        var _t98 = n,
          _e77 = !0;
        for (; null !== _t98 && null !== (_t98 = Mo(_t98, !0)); ) {
          if (
            (_t98.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e77 = !1;
            break;
          }
        }
        _e77 && (o = o.slice(0, o.length - 1));
      }
      return "" === o ? { node: null } : { node: wo(o) };
    }
    function Mo(t, e) {
      var n = t;
      for (;;) {
        var _t99 = void 0;
        for (; null === (_t99 = e ? n.nextSibling : n.previousSibling); ) {
          var _t100 = n.parentElement;
          if (null === _t100) return null;
          n = _t100;
        }
        if (((n = _t99), Tl(n))) {
          var _t101 = n.style.display;
          if (
            ("" === _t101 && !kl(n)) ||
            ("" !== _t101 && !_t101.startsWith("inline"))
          )
            return null;
        }
        var _o33 = n;
        for (; null !== (_o33 = e ? n.firstChild : n.lastChild); ) n = _o33;
        if (ei(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var Ao = {
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
    function Do(t) {
      var e = Ao[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: Po(t.style, e), node: null };
    }
    function wo(t) {
      if (t === void 0) {
        t = "";
      }
      return tl(new _No2(t));
    }
    function Io(t) {
      return t instanceof _No2;
    }
    function Po(t, e) {
      var n = t.fontWeight,
        o = t.textDecoration.split(" "),
        r = "700" === n || "bold" === n,
        s = o.includes("line-through"),
        i = "italic" === t.fontStyle,
        l = o.includes("underline"),
        c = t.verticalAlign;
      return function (t) {
        return Io(t) || To(t)
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
    var _Fo = (function (_No) {
      function Fo(t) {
        var _this2;
        if (t === void 0) {
          t = void 0;
        }
        ((_this2 = _No.call(this, "\t", t) || this), (_this2.__detail = 2));
        return _this2;
      }
      babelHelpers.inheritsLoose(Fo, _No);
      var _proto8 = Fo.prototype;
      _proto8.$config = function $config() {
        return this.config("tab", { extends: _No2 });
      };
      _proto8.createDOM = function createDOM(t) {
        var e = _No.prototype.createDOM.call(this, t),
          n = Fi(t.theme, "tab");
        if (void 0 !== n) {
          var _e$classList;
          (_e$classList = e.classList).add.apply(_e$classList, n);
        }
        return e;
      };
      _proto8.setTextContent = function setTextContent(t) {
        return _No.prototype.setTextContent.call(this, "\t");
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
      return Fo;
    })(_No2);
    function Ro() {
      return tl(new _Fo());
    }
    function Lo(t) {
      return t instanceof _Fo;
    }
    var _Ko = (function () {
      function Ko(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto9 = Ko.prototype;
      _proto9.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto9.isBefore = function isBefore(t) {
        if (this.key === t.key) return this.offset < t.offset;
        return qc(ua(ea(this, "next")), ua(ea(t, "next"))) < 0;
      };
      _proto9.getNode = function getNode() {
        var e = fi(this.key);
        return (null === e && t(20), e);
      };
      _proto9.set = function set(t, e, n, o) {
        var r = this._selection,
          s = this.key;
        (o && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          Wr() ||
            (ui() === s && ai(t),
            null !== r &&
              (r.setCachedNodes(null),
              Yo(r) && (r._cachedIsBackward = null),
              (r.dirty = !0))));
      };
      return Ko;
    })();
    function Bo(t, e, n) {
      return new _Ko(t, e, n);
    }
    function $o(t, e) {
      var n = e.__key,
        o = t.offset,
        r = "element";
      if (Io(e)) {
        r = "text";
        var _t102 = e.getTextContentSize();
        o > _t102 && (o = _t102);
      } else if (!us(e)) {
        var _t103 = e.getNextSibling();
        if (Io(_t103)) ((n = _t103.__key), (o = 0), (r = "text"));
        else {
          var _t104 = e.getParent();
          _t104 && ((n = _t104.__key), (o = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, o, r);
    }
    function zo(t, e) {
      if (us(e)) {
        var _n51 = e.getLastDescendant();
        us(_n51) || Io(_n51) ? $o(t, _n51) : $o(t, e);
      } else $o(t, e);
    }
    function Wo(t, e, n, o) {
      var r = t.getNode(),
        s = r.getChildAtIndex(t.offset),
        i = wo();
      if ((i.setFormat(n), i.setStyle(o), Ds(s))) s.splice(0, 0, [i]);
      else if (null !== s) {
        var _t105 = Qi(r) ? As().append(i) : i;
        s.insertBefore(_t105);
      } else if (Qi(r)) {
        var _t106 = r.getLastChild();
        us(_t106) && !_t106.isInline() && _t106.isEmpty()
          ? _t106.append(i)
          : r.append(As().append(i));
      } else r.append(i);
      (t.is(e) && e.set(i.__key, 0, "text"), t.set(i.__key, 0, "text"));
    }
    function Uo(t, e, n, o) {
      var r = t.anchor.getNode();
      Io(r) || Te("insertText: anchor is not a text node");
      var s = t.anchor.offset,
        i = wo(e);
      (i.setFormat(n), i.setStyle(o));
      var l = r.getParentOrThrow();
      if (0 === s)
        l.isInline() && !r.__prev ? l.insertBefore(i) : r.insertBefore(i, !1);
      else if (s === r.getTextContentSize())
        l.isInline() && !r.__next ? l.insertAfter(i) : r.insertAfter(i, !1);
      else {
        var _r$splitText = r.splitText(s),
          _t107 = _r$splitText[0];
        _t107.insertAfter(i, !1);
      }
      ("" === r.getTextContent() && r.isAttached() && r.remove(),
        i.selectEnd(),
        i.isComposing() &&
          "text" === t.anchor.type &&
          t.anchor.set(
            t.anchor.key,
            t.anchor.offset - e.length,
            t.anchor.type,
          ));
    }
    var _Ho = (function () {
      function Ho(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto0 = Ho.prototype;
      _proto0.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto0.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto0.is = function is(t) {
        if (!Jo(t)) return !1;
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
        return new Ho(new Set(this._nodes));
      };
      _proto0.extract = function extract() {
        return this.getNodes();
      };
      _proto0.insertRawText = function insertRawText(t) {};
      _proto0.insertText = function insertText() {};
      _proto0.insertNodes = function insertNodes(t) {
        var e = this.getNodes().filter(function (t) {
            return null === oc(t);
          }),
          n = e.length;
        if (0 === n) return;
        var o = e[n - 1];
        var r;
        if (Io(o)) r = o.select();
        else {
          var _t108 = o.getIndexWithinParent() + 1;
          r = o.getParentOrThrow().select(_t108, _t108);
        }
        r.insertNodes(t);
        for (var _t109 = 0; _t109 < n; _t109++) e[_t109].remove();
      };
      _proto0.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = this._nodes,
          n = [];
        for (var _t110 of e) {
          var _e78 = fi(_t110);
          null !== _e78 && n.push(_e78);
        }
        return (Wr() || (this._cachedNodes = n), n);
      };
      _proto0.getTextContent = function getTextContent() {
        var t = this.getNodes();
        var e = "";
        for (var _n52 = 0; _n52 < t.length; _n52++)
          e += t[_n52].getTextContent();
        return e;
      };
      _proto0.deleteNodes = function deleteNodes() {
        var t = this.getNodes().filter(function (t) {
          return null === oc(t);
        });
        if ((mr() || yr()) === this && t[0]) {
          var _e79 = Lc(t[0], "next");
          oa(Jc(_e79, _e79));
        }
        for (var _e80 of t) _e80.remove();
        jo();
      };
      return Ho;
    })();
    function jo() {
      var t = yi();
      if (t.isEmpty()) {
        var _e81 = As();
        (t.append(_e81), _e81.select());
      }
    }
    function Yo(t) {
      return t instanceof _Go;
    }
    var _Go = (function () {
      function Go(t, e, n, o) {
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
      var _proto1 = Go.prototype;
      _proto1.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto1.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto1.is = function is(t) {
        return (
          !!Yo(t) &&
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
          for (var _n53 of t)
            if (Ic(_n53)) {
              var _t111 = _n53.origin;
              0 === e.length ? r.add(_t111) : (s.add(_t111), e.push(_t111));
            } else {
              var _t112 = _n53.origin;
              (us(_t112) && s.has(_t112)) || e.push(_t112);
            }
          o && e.push(o.caret.origin);
          if (
            wc(t.focus) &&
            us(t.focus.origin) &&
            null === t.focus.getNodeAtCaret()
          )
            for (
              var _n54 = zc(t.focus.origin, "previous");
              Ic(_n54) &&
              r.has(_n54.origin) &&
              !_n54.origin.isEmpty() &&
              _n54.origin.is(e[e.length - 1]);
              _n54 = Uc(_n54)
            )
              (r["delete"](_n54.origin), e.pop());
          for (; e.length > 1; ) {
            var _t113 = e[e.length - 1];
            if (!us(_t113) || s.has(_t113) || _t113.isEmpty() || r.has(_t113))
              break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n55 = ua(t.anchor),
              _o34 = ua(t.anchor.getFlipped()),
              _r27 = function _r27(t) {
                return Dc(t) ? t.origin : t.getNodeAtCaret();
              },
              _s25 =
                _r27(_n55) ||
                _r27(_o34) ||
                (t.anchor.getNodeAtCaret() ? _n55.origin : _o34.origin);
            e.push(_s25);
          }
          return e;
        })(ha(sa(this), "next"));
        return (Wr() || (this._cachedNodes = e), e);
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
          _Qo = Qo(this),
          i = _Qo[0],
          l = _Qo[1];
        var c = "",
          a = !0;
        for (var _u8 = 0; _u8 < t.length; _u8++) {
          var _f7 = t[_u8];
          if (us(_f7) && !_f7.isInline()) {
            a || (c += "\n");
            var _t114 = "";
            for (var _e82 of cc(_f7)) {
              var _n56 = ac(_f7, _e82);
              null !== _n56 && (_t114 += _n56.getTextContent());
            }
            "" !== _t114 ? ((c += _t114), (a = !1)) : (a = !_f7.isEmpty());
          } else if (((a = !1), Io(_f7))) {
            var _t115 = _f7.getTextContent();
            (_f7 === e
              ? _f7 === n
                ? ("element" === o.type &&
                    "element" === r.type &&
                    r.offset !== o.offset) ||
                  (_t115 = i < l ? _t115.slice(i, l) : _t115.slice(l, i))
                : (_t115 = s ? _t115.slice(i) : _t115.slice(l))
              : _f7 === n &&
                (_t115 = s ? _t115.slice(0, l) : _t115.slice(0, i)),
              (c += _t115));
          } else
            (!hs(_f7) && !vs(_f7)) ||
              (_f7 === n && this.isCollapsed()) ||
              (c += _f7.getTextContent());
        }
        return c;
      };
      _proto1.applyDOMRange = function applyDOMRange(t) {
        var e = Yr(),
          n = e.getEditorState()._selection,
          o = fr(
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
        return new Go(
          Bo(t.key, t.offset, t.type),
          Bo(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto1.toggleFormat = function toggleFormat(t) {
        ((this.format = ri(this.format, t, null)), (this.dirty = !0));
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
        this.insertNodes(Or(t));
      };
      _proto1.insertText = function insertText(t) {
        var e = this.format,
          n = this.style;
        if (!this.isCollapsed()) {
          var _o35 = (
            this.focus.isBefore(this.anchor) ? this.focus : this.anchor
          ).getNode();
          if (
            (Io(_o35) && ((e = _o35.getFormat()), (n = _o35.getStyle())),
            this.removeText(),
            (this.format = e),
            (this.style = n),
            "" === t)
          )
            return;
          if (null === ui())
            return (
              "element" === this.anchor.type &&
                Wo(this.anchor, this.focus, e, n),
              void Uo(this, t, e, n)
            );
        }
        "element" === this.anchor.type && Wo(this.anchor, this.focus, e, n);
        var o = this.anchor.getNode();
        Io(o) || Te("insertText: anchor is not a text node");
        var r = this.anchor.offset,
          s = o.getParentOrThrow(),
          i = o.getTextContentSize();
        if (
          ti(o) ||
          (0 === r &&
            (!o.canInsertTextBefore() ||
              (!s.canInsertTextBefore() && !o.__prev))) ||
          (r === i &&
            (!o.canInsertTextAfter() || (!s.canInsertTextAfter() && !o.__next)))
        ) {
          if (o.isSegmented() && 0 !== r && r !== i) {
            if (null !== ui()) o.setMode("normal").setFormat(e).setStyle(n);
            else {
              var _t116 = wo(o.getTextContent());
              (_t116.setFormat(e),
                _t116.setStyle(n),
                o.replace(_t116),
                _t116.select(r, r));
            }
            return void ("" !== t && this.insertText(t));
          }
          if ("" === t) return;
          if (0 === r) {
            var _r28 = o.getPreviousSibling();
            if (Io(_r28) && _r28.canInsertTextAfter() && !ti(_r28))
              _r28.select();
            else {
              var _t117 = wo();
              (_t117.setFormat(e),
                _t117.setStyle(n),
                s.canInsertTextBefore()
                  ? o.insertBefore(_t117)
                  : s.insertBefore(_t117),
                _t117.select());
            }
            return void this.insertText(t);
          }
          if (r === i) {
            var _r29 = o.getNextSibling();
            if (Io(_r29) && _r29.canInsertTextBefore() && !ti(_r29))
              _r29.select(0, 0);
            else {
              var _t118 = wo();
              (_t118.setFormat(e),
                _t118.setStyle(n),
                s.canInsertTextAfter()
                  ? o.insertAfter(_t118)
                  : s.insertAfter(_t118),
                _t118.select(0, 0));
            }
            return void this.insertText(t);
          }
          var _l1 = wo(t);
          return (
            _l1.setFormat(e),
            _l1.setStyle(n),
            o.replace(_l1),
            void _l1.select()
          );
        }
        if ("" === t) return;
        var l = s.isInline() && 0 === r && !o.__prev,
          c = s.isInline() && r === i && !o.__next,
          a = o.getFormat() !== e || o.getStyle() !== n;
        if (l || c || a) {
          if ("" !== o.getTextContent() || l || c)
            return void Uo(this, t, e, n);
          (o.setFormat(e), o.setStyle(n));
        }
        (o.spliceText(r, 0, t, !0),
          o.isComposing() &&
            "text" === this.anchor.type &&
            this.anchor.set(
              this.anchor.key,
              this.anchor.offset - t.length,
              this.anchor.type,
            ));
      };
      _proto1.removeText = function removeText() {
        var t = mr() === this;
        (ra(this, aa(sa(this))), t && mr() !== this && xi(this));
      };
      _proto1.formatText = function formatText(t, e) {
        if (e === void 0) {
          e = null;
        }
        qo(this, t, e);
      };
      _proto1.insertNodes = function insertNodes(e) {
        var _r30;
        if (0 === e.length) return;
        this.isCollapsed() || this.removeText();
        var n = this.anchor.getNode();
        if ("element" === this.anchor.type && us(n) && null !== oc(n)) {
          var _n$getFirstChild;
          var _o36 = n.isShadowRoot()
            ? (_n$getFirstChild = n.getFirstChild()) != null
              ? _n$getFirstChild
              : n.append(As()).getFirstChild()
            : n.getFirstChild();
          if (n.isShadowRoot() && null !== _o36 && !us(_o36)) {
            var _t119 = As();
            (_o36.insertBefore(_t119), (_o36 = _t119));
          }
          if (null !== _o36) {
            _o36.selectStart();
            var _n57 = mr();
            return (Yo(_n57) || t(369), _n57.insertNodes(e));
          }
        }
        if ("element" === this.anchor.type && Qi(n)) {
          var _t120 = wr(e),
            _o37 = _t120.getLastDescendant();
          return (
            n.splice(this.anchor.offset, 0, _t120.getChildren()),
            void (null !== _o37 && _o37.selectEnd())
          );
        }
        var o = (this.isBackward() ? this.focus : this.anchor).getNode(),
          r = Xl(o, Ml);
        var s = e[e.length - 1];
        if (us(r) && "__language" in r) {
          if ("__language" in e[0]) this.insertText(e[0].getTextContent());
          else {
            var _t121 = Mr(this);
            (r.splice(_t121, 0, e), s.selectEnd());
          }
          return;
        }
        if (
          !e.some(function (t) {
            return (us(t) || hs(t)) && !t.isInline();
          })
        ) {
          us(r) || t(211, o.constructor.name, o.getType());
          var _n58 = Mr(this);
          return (r.splice(_n58, 0, e), void s.selectEnd());
        }
        if (us(r) && null !== oc(r)) {
          var _t122 = Mr(this),
            _n59 = br(e);
          r.splice(_t122, 0, _n59);
          var _o38 = _n59[_n59.length - 1];
          return void (void 0 !== _o38
            ? _o38.selectEnd()
            : r.select(_t122, _t122));
        }
        if (null === r) {
          var _t123 = wr(e),
            _n60 = _t123.getLastDescendant();
          var _o39 = ea(this.anchor, "next");
          for (var _e83 of _t123.getChildren()) _o39 = ya(_e83, _o39);
          return void (null !== _n60 && _n60.selectEnd());
        }
        if (us(r) && !r.isParentRequired() && !Qi(r.getParentOrThrow())) {
          var _t124 = Mr(this),
            _n61 = br(e);
          r.splice(_t124, 0, _n61);
          var _o40 = _n61[_n61.length - 1];
          return void (void 0 !== _o40
            ? _o40.selectEnd()
            : r.select(_t124, _t124));
        }
        var i = wr(e),
          l = i.getLastDescendant(),
          c = i.getChildren(),
          a = !us(r) || !r.isEmpty() ? this.insertParagraph() : null;
        a && !r.isAttached() && ((o = this.anchor.getNode()), (r = Xl(o, Ml)));
        var u = c[c.length - 1];
        var f = c[0];
        var d;
        (us((d = f)) &&
          Ml(d) &&
          !d.isEmpty() &&
          us(r) &&
          (!r.isEmpty() || r.canMergeWhenEmpty()) &&
          (us(r) || t(211, o.constructor.name, o.getType()),
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
              for (var _t125 of s) i = i.insertAfter(_t125);
            })(r, f)));
        var h = Xl(l, Ml);
        (a &&
          us(h) &&
          (a.canMergeWhenEmpty() || Ml(u)) &&
          (h.append.apply(h, a.getChildren()), a.remove()),
          us(r) && r.isEmpty() && r.remove(),
          l.selectEnd());
        var g = us(r) ? r.getLastChild() : null;
        vs(g) && h !== r && g.remove();
      };
      _proto1.insertParagraph = function insertParagraph() {
        var e = this.anchor.getNode();
        if ("element" === this.anchor.type && Qi(e)) {
          var _t126 = As();
          return (
            e.splice(this.anchor.offset, 0, [_t126]),
            _t126.select(),
            _t126
          );
        }
        var n = Mr(this),
          o = Xl(this.anchor.getNode(), Ml);
        if (null !== o && null !== oc(o)) return null;
        us(o) || t(213);
        var r = o.getChildAtIndex(n),
          s = r ? [r].concat(r.getNextSiblings()) : [],
          i = o.insertNewAfter(this, !1);
        return i ? (i.append.apply(i, s), i.selectStart(), i) : null;
      };
      _proto1.insertLineBreak = function insertLineBreak(t) {
        var e = Ns();
        if ((this.insertNodes([e]), t)) {
          var _t127 = e.getParentOrThrow(),
            _n62 = e.getIndexWithinParent();
          _t127.select(_n62, _n62);
        }
      };
      _proto1.extract = function extract() {
        var _n$splitText;
        var t = [].concat(this.getNodes()),
          e = t.length;
        var n = t[0],
          o = t[e - 1];
        var _Qo2 = Qo(this),
          r = _Qo2[0],
          s = _Qo2[1],
          i = this.isBackward(),
          _ref27 = i ? [this.focus, this.anchor] : [this.anchor, this.focus],
          l = _ref27[0],
          c = _ref27[1],
          _ref28 = i ? [s, r] : [r, s],
          a = _ref28[0],
          u = _ref28[1];
        if (0 === e) return [];
        if (1 === e) {
          if (Io(n) && !this.isCollapsed()) {
            var _t128 = n.splitText(a, u),
              _e84 = 0 === a ? _t128[0] : _t128[1];
            return _e84
              ? (l.set(_e84.getKey(), 0, "text"),
                c.set(_e84.getKey(), _e84.getTextContentSize(), "text"),
                [_e84])
              : [];
          }
          return [n];
        }
        if (
          (Io(n) &&
            (a === n.getTextContentSize()
              ? t.shift()
              : 0 !== a &&
                ((_n$splitText = n.splitText(a)),
                (n = _n$splitText[1]),
                (t[0] = n),
                l.set(n.getKey(), 0, "text"))),
          Io(o))
        ) {
          var _o$splitText;
          var _e85 = o.getTextContent().length;
          0 === u
            ? t.pop()
            : u !== _e85 &&
              ((_o$splitText = o.splitText(u)),
              (o = _o$splitText[0]),
              (t[t.length - 1] = o),
              c.set(o.getKey(), o.getTextContentSize(), "text"));
        }
        return t;
      };
      _proto1.modify = function modify(t, e, n) {
        if (Ir(this, t, e, n)) return;
        var o = "move" === t,
          r = Yr(),
          s = sl(Ji(r));
        if (!s) return;
        var i = r._blockCursorElement,
          l = r._rootElement,
          c = this.focus.getNode();
        null === l ||
          null === i ||
          !us(c) ||
          c.isInline() ||
          c.canBeEmpty() ||
          rl(i, r, l);
        var a = zi(r, this.focus.key);
        var u = a;
        if (
          ("text" === this.focus.type && (u = Io(c) ? Pl(c, a, r) : null),
          this.dirty)
        ) {
          var _t129 = zi(r, this.anchor.key);
          var _e86 = _t129;
          if ("text" === this.anchor.type) {
            var _n63 = this.anchor.getNode();
            _e86 = Io(_n63) ? Pl(_n63, _t129, r) : null;
          }
          _e86 && u && Nr(s, _e86, this.anchor.offset, u, this.focus.offset);
        }
        if ("character" === n && Io(c) && c.isUnmergeable()) {
          if (
            e
              ? 0 === this.focus.offset
              : this.focus.offset === c.getTextContentSize()
          ) {
            var _t130 = Lc(c, e ? "previous" : "next").getNodeAtCaret();
            if (Io(_t130)) {
              if (!o) {
                var _n64 = _t130.getTextContentSize();
                return (
                  e
                    ? this.focus.set(_t130.__key, _n64 - 1, "text")
                    : this.focus.set(_t130.__key, 1, "text"),
                  void (this.dirty = !0)
                );
              }
              {
                var _n65 = r.getElementByKey(_t130.getKey()),
                  _o41 = _n65 ? Pl(_t130, _n65, r) : null;
                if (_o41) {
                  var _t131 = e ? _o41.length : 0;
                  Nr(s, _o41, _t131, _o41, _t131);
                }
              }
            }
          }
        }
        if ((er(s, t, e ? "backward" : "forward", n), s.rangeCount > 0)) {
          var _t132 = hl(s, r._rootElement),
            _n66 = _t132 || s.getRangeAt(0),
            _i16 = this.anchor.getNode(),
            _l10 = _s(_i16) ? _i16 : qi(_i16);
          if ((this.applyDOMRange(_n66), (this.dirty = !0), !o)) {
            nr(this, e, _l10);
            (_t132
              ? "backward" !== s.direction
              : s.anchorNode === _n66.startContainer &&
                s.anchorOffset === _n66.startOffset) || tr(this);
          }
        }
        "lineboundary" === n && Ir(this, t, e, n, "decorators");
      };
      _proto1.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            us(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t133 = e.getParent(),
            _n67 =
              e.getNextSibling() ||
              (null === _t133 ? null : _t133.getNextSibling());
          if (us(_n67) && _n67.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto1.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e87 = this.anchor;
          var _n68 = _e87.getNode();
          if (this.forwardDeletion(_e87, _n68, t)) return;
          var _o42 = Yc(ea(_e87, t ? "previous" : "next"));
          if (
            _o42.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            var _t134 = { type: "initial" };
            for (var _e88 of _o42.iterNodeCarets("shadowRoot"))
              if (Ic(_e88)) {
                if (_e88.origin.isInline());
                else {
                  if (_e88.origin.isShadowRoot()) {
                    if ("merge-block" === _t134.type) break;
                    if (
                      us(_o42.anchor.origin) &&
                      _o42.anchor.origin.isEmpty()
                    ) {
                      var _t135 = ua(_e88);
                      (ra(this, Jc(_t135, _t135)), _o42.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t134.type &&
                    "merge-block" !== _t134.type) ||
                    (_t134 = {
                      block: _t134.block,
                      caret: _e88,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t134.type) break;
                if (wc(_e88)) {
                  if (us(_e88.origin)) {
                    if (_e88.origin.isInline()) {
                      if (!_e88.origin.isParentOf(_o42.anchor.origin)) break;
                    } else
                      _t134 = { block: _e88.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (hs(_e88.origin)) {
                    if (_e88.origin.isIsolated());
                    else if (cc(_e88.origin).length > 0) {
                      if (
                        us(_o42.anchor.origin) &&
                        _o42.anchor.origin.isEmpty()
                      ) {
                        _o42.anchor.origin.remove();
                        var _t136 = _r();
                        (_t136.add(_e88.origin.getKey()), xi(_t136));
                      }
                    } else if (
                      "merge-next-block" === _t134.type &&
                      (_e88.origin.isKeyboardSelectable() ||
                        !_e88.origin.isInline()) &&
                      us(_o42.anchor.origin) &&
                      _o42.anchor.origin.isEmpty()
                    ) {
                      _o42.anchor.origin.remove();
                      var _t137 = _r();
                      (_t137.add(_e88.origin.getKey()), xi(_t137));
                    } else _e88.origin.remove();
                    return;
                  }
                  break;
                }
              }
            if ("merge-block" === _t134.type) {
              var _t138 = _t134,
                _e89 = _t138.caret,
                _n69 = _t138.block;
              if (cc(_n69).length > 0) return;
              return _e89.origin.isEmpty() &&
                !_n69.isEmpty() &&
                _e89.origin.getParent() === _n69.getParent()
                ? void _e89.origin.remove(!0)
                : (ra(
                    this,
                    Jc(
                      !_e89.origin.isEmpty() && _n69.isEmpty()
                        ? ia(Lc(_n69, _e89.direction))
                        : _o42.anchor,
                      _e89,
                    ),
                  ),
                  this.removeText());
            }
            for (var _t139 = _e87.getNode(); null !== _t139; ) {
              if (null !== oc(_t139)) return;
              if (us(_t139) && _t139.isShadowRoot()) break;
              _t139 = _t139.getParent();
            }
          }
          var _r31 = this.focus;
          if ((or(this, t, "character"), this.isCollapsed())) {
            if (t && 0 === _e87.offset && Zo(this, _e87.getNode())) return;
          } else {
            var _o43 = "text" === _r31.type ? _r31.getNode() : null;
            if (
              ((_n68 = "text" === _e87.type ? _e87.getNode() : null),
              null !== _o43 && _o43.isSegmented())
            ) {
              var _e90 = _r31.offset,
                _s26 = _o43.getTextContentSize();
              if (_o43.is(_n68) || (t && _e90 !== _s26) || (!t && 0 !== _e90))
                return void sr(_o43, t, _e90);
            } else if (null !== _n68 && _n68.isSegmented()) {
              var _r32 = _e87.offset,
                _s27 = _n68.getTextContentSize();
              if (_n68.is(_o43) || (t && 0 !== _r32) || (!t && _r32 !== _s27))
                return void sr(_n68, t, _r32);
            }
            !(function (t, e) {
              var n = t.anchor,
                o = t.focus,
                r = n.getNode(),
                s = o.getNode();
              if (r === s && "text" === n.type && "text" === o.type) {
                var _t140 = n.offset,
                  _s28 = o.offset,
                  _i17 = _t140 < _s28,
                  _l11 = _i17 ? _t140 : _s28,
                  _c8 = _i17 ? _s28 : _t140,
                  _a7 = _c8 - 1;
                if (_l11 !== _a7) {
                  (function (t) {
                    return !(Ti(t) || rr(t));
                  })(r.getTextContent().slice(_l11, _c8)) &&
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
          var _t141 = this.anchor.getNode();
          (_t141.isEmpty() &&
            _s(_t141.getParent()) &&
            null === _t141.getPreviousSibling() &&
            Zo(this, _t141),
            jo());
        }
      };
      _proto1.deleteLine = function deleteLine(t) {
        var e = cr(this.anchor);
        if (null !== e && hs(rc(e)))
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
          (this.isCollapsed() && or(this, t, "lineboundary"),
          this.isCollapsed())
        )
          this.deleteCharacter(t);
        else {
          Xl(this.anchor.getNode(), Ml) !== Xl(this.focus.getNode(), Ml)
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
          var _e91 = this.anchor,
            _n70 = _e91.getNode();
          if (this.forwardDeletion(_e91, _n70, t)) return;
          or(this, t, "word");
        }
        this.isCollapsed() ? this.deleteCharacter(t) : this.removeText();
      };
      _proto1.isBackward = function isBackward() {
        var t = this._cachedIsBackward;
        if (null !== t) return t;
        var e = this.focus.isBefore(this.anchor);
        return (Wr() || (this._cachedIsBackward = e), e);
      };
      _proto1.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return Go;
    })();
    function Jo(t) {
      return t instanceof _Ho;
    }
    function Vo(t, e) {
      var _u$splitText, _h$splitText;
      if (Jo(t)) {
        for (var _n71 of t.getNodes())
          To(_n71) && _n71.setFormat(e(_n71.getFormat()));
        return;
      }
      if (t.isCollapsed()) return (t.setFormat(e(t.format)), void ai(null));
      var n = [];
      for (var _o44 of t.getNodes())
        Io(_o44)
          ? n.push(_o44)
          : us(_o44)
            ? _o44.setTextFormat(e(_o44.getTextFormat()))
            : To(_o44) && _o44.setFormat(e(_o44.getFormat()));
      var o = n.length;
      if (0 === o) return (t.setFormat(e(t.format)), void ai(null));
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
        var _n72 = e(u.getFormat());
        if (ti(u) || (0 === f && g === u.getTextContentSize()))
          u.setFormat(_n72);
        else {
          var _t142 = u.splitText(f, g),
            _e92 = 0 === f ? _t142[0] : _t142[1];
          (_e92.setFormat(_n72),
            "text" === l.type && l.set(_e92.__key, 0, "text"),
            "text" === c.type && c.set(_e92.__key, g - f, "text"));
        }
        return void (t.format = _n72);
      }
      0 === f ||
        ti(u) ||
        ((_u$splitText = u.splitText(f)), (u = _u$splitText[1]), (f = 0));
      var _ = e(u.getFormat());
      u.setFormat(_);
      var p = e(h.getFormat());
      g > 0 &&
        (g === h.getTextContentSize() ||
          ti(h) ||
          ((_h$splitText = h.splitText(g)),
          (h = _h$splitText[0]),
          _h$splitText),
        h.setFormat(p));
      for (var _t143 = a + 1; _t143 < d; _t143++) {
        var _o45 = n[_t143];
        _o45.setFormat(e(_o45.getFormat()));
      }
      ("text" === l.type && l.set(u.__key, f, "text"),
        "text" === c.type && c.set(h.__key, g, "text"),
        (t.format = _ | p));
    }
    function qo(t, e, n) {
      if (n === void 0) {
        n = null;
      }
      var o = null === n && Yo(t) ? ri(t.format, e, null) : n;
      Vo(t, function (t) {
        return ri(t, e, o);
      });
    }
    function Xo(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function Qo(t) {
      var e = t.getStartEndPoints();
      if (null === e) return [0, 0];
      var n = e[0],
        o = e[1];
      return "element" === n.type &&
        "element" === o.type &&
        n.key === o.key &&
        n.offset === o.offset
        ? [0, 0]
        : [Xo(n), Xo(o)];
    }
    function Zo(t, e) {
      for (var _n73 = e; _n73; _n73 = _n73.getParent()) {
        if (us(_n73)) {
          if (_n73.collapseAtStart(t)) return !0;
          if (Qi(_n73)) break;
        }
        if (_n73.getPreviousSibling()) break;
      }
      return !1;
    }
    function tr(t) {
      var e = t.focus,
        n = t.anchor,
        o = n.key,
        r = n.offset,
        s = n.type;
      (n.set(e.key, e.offset, e.type, !0), e.set(o, r, s, !0));
    }
    function er(t, e, n, o) {
      t.modify(e, n, o);
    }
    function nr(t, e, n) {
      var o = t.getNodes(),
        r = o.filter(function (t) {
          return Yi(t, n);
        });
      if (0 === r.length || r.length === o.length) return !1;
      var s = e ? r[0] : r[r.length - 1],
        i = us(s) ? s : s.getParentOrThrow();
      return (e ? i.selectStart() : i.selectEnd(), !0);
    }
    function or(t, e, n) {
      if (Ir(t, "extend", e, n)) return;
      var o = Yr(),
        r = sl(Ji(o));
      if (!r || "function" != typeof r.modify) return;
      var s = o._blockCursorElement,
        i = o._rootElement,
        l = t.anchor,
        c = t.focus.getNode();
      null === i ||
        null === s ||
        !us(c) ||
        c.isInline() ||
        c.canBeEmpty() ||
        rl(s, o, i);
      var a = function a(t) {
          var e = t.getNode(),
            n = o.getElementByKey(t.key);
          return null !== n && "text" === t.type && Io(e) ? Pl(e, n, o) : n;
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
        (Nr(r, _, p, _, p),
        er(r, "move", e ? "backward" : "forward", n),
        0 === r.rangeCount)
      )
        return;
      var m = hl(r, i) || r.getRangeAt(0),
        y = m.startContainer,
        x = m.startOffset;
      if (
        h &&
        "character" === n &&
        "text" === l.type &&
        Io(u) &&
        u.isUnmergeable()
      ) {
        if (d === (e ? 0 : u.getTextContentSize())) {
          var _n74 = Lc(u, e ? "previous" : "next").getNodeAtCaret();
          if (Io(_n74)) {
            var _o46 = e ? _n74.getTextContentSize() - 1 : 1;
            return (t.focus.set(_n74.__key, _o46, "text"), void (t.dirty = !0));
          }
        }
      }
      if (h && "character" === n && "text" === l.type) {
        var _n75 = e ? 0 : u.getTextContentSize(),
          _o47 = y === f ? x : d !== _n75 ? _n75 : -1;
        if (_o47 >= 0)
          return void (
            _o47 !== d && (t.focus.set(l.key, _o47, "text"), (t.dirty = !0))
          );
      }
      var _ref29 = e ? [y, x, f, d] : [f, d, y, x],
        C = _ref29[0],
        S = _ref29[1],
        T = _ref29[2],
        N = _ref29[3],
        v = _s(u) ? u : qi(u);
      (t.applyDOMRange({
        collapsed: !1,
        endContainer: T,
        endOffset: N,
        startContainer: C,
        startOffset: S,
      }),
        (t.dirty = !0),
        !nr(t, e, v) && e && tr(t),
        "lineboundary" === n && Ir(t, "extend", e, n, "decorators"));
    }
    var rr = (function () {
      try {
        var _t144 = new RegExp("\\p{Emoji}", "u"),
          _e93 = _t144.test.bind(_t144);
        if (_e93("\u2764\ufe0f") && _e93("#\ufe0f\u20e3") && _e93("\u{1f44d}"))
          return _e93;
      } catch (t) {}
      return function () {
        return !1;
      };
    })();
    function sr(t, e, n) {
      var o = t,
        r = o.getTextContent().split(/(?=\s)/g),
        s = r.length;
      var i = 0,
        l = 0;
      for (var _t145 = 0; _t145 < s; _t145++) {
        var _o48 = _t145 === s - 1;
        if (
          ((l = i), (i += r[_t145].length), (e && i === n) || i > n || _o48)
        ) {
          (r.splice(_t145, 1), _o48 && (l = void 0));
          break;
        }
      }
      var c = r.join("").trim();
      "" === c ? o.remove() : (o.setTextContent(c), o.select(l, l));
    }
    function ir(e, n, o, r) {
      var s,
        i = n,
        l = !1;
      if (Tl(e)) {
        var _c9 = !1;
        var _a8 = e.childNodes,
          _u9 = _a8.length,
          _f8 = r._blockCursorElement;
        (i === _u9 && _u9 > 0 && ((_c9 = !0), (i = _u9 - 1)),
          void 0 !== gi(e, r) || jl(e, r) || (l = !0));
        var _d8 = _a8[i],
          _h7 = !1;
        if (_d8 === _f8) ((_d8 = _a8[i + 1]), (_h7 = !0));
        else if (null !== _f8) {
          var _t146 = _f8.parentNode;
          if (e === _t146) {
            n > Array.prototype.indexOf.call(_t146.children, _f8) && i--;
          }
        }
        if (((s = Si(_d8)), Io(s))) i = Bc(s, _c9 ? "next" : "previous");
        else {
          var _a9 = Si(e);
          if (null === _a9) return null;
          if (us(_a9)) {
            var _u0$resolveChildIndex;
            var _l12 = r.getElementByKey(_a9.getKey());
            null === _l12 && t(214);
            var _u0 = wl(_a9, _l12, r);
            ((_u0$resolveChildIndex = _u0.resolveChildIndex(_a9, _l12, e, n)),
              (_a9 = _u0$resolveChildIndex[0]),
              (i = _u0$resolveChildIndex[1]),
              us(_a9) || t(215),
              _c9 &&
                i >= _a9.getChildrenSize() &&
                (i = Math.max(0, _a9.getChildrenSize() - 1)));
            var _f9 = _a9.getChildAtIndex(i);
            if (
              us(_f9) &&
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
              var _t147 = _c9
                ? _f9.getLastDescendant()
                : _f9.getFirstDescendant();
              (null === _t147
                ? (_a9 = _f9)
                : ((_f9 = _t147),
                  (_a9 = us(_f9) ? _f9 : _f9.getParentOrThrow())),
                (i = 0));
            }
            Io(_f9)
              ? ((s = _f9),
                (_a9 = null),
                (i = Bc(_f9, _c9 ? "next" : "previous")))
              : _f9 !== _a9 &&
                _c9 &&
                !_h7 &&
                (us(_a9) || t(216),
                (i = Math.min(_a9.getChildrenSize(), i + 1)));
          } else {
            var _t148 = rc(_a9),
              _o49 = null !== _t148 ? _t148 : _a9,
              _s29 = _o49.getIndexWithinParent(),
              _l13 = r.getElementByKey(_a9.getKey());
            var _c0 = "after";
            if (null !== _l13 && Si(e) === _a9) {
              var _t149 = wl(_a9, _l13, r);
              _t149.element !== _l13
                ? (_c0 = _t149.resolveLeafPosition(_l13, e, n))
                : 0 === n && hs(_a9) && (_c0 = "before");
            }
            ((i = "before" === _c0 ? _s29 : _s29 + 1),
              (_a9 = _o49.getParentOrThrow()));
          }
          if (us(_a9)) return [Bo(_a9.__key, i, "element"), l];
        }
      } else s = Si(e);
      return Io(s) ? [Bo(s.__key, Bc(s, i, "clamp"), "text"), l] : null;
    }
    function lr(t, e, n) {
      var o = t.offset,
        r = t.getNode();
      if (0 === o) {
        var _o50 = r.getPreviousSibling(),
          _s30 = r.getParent();
        if (e) {
          if ((n || !e) && null === _o50 && us(_s30) && _s30.isInline()) {
            var _e94 = _s30.getPreviousSibling();
            Io(_e94) && t.set(_e94.__key, _e94.getTextContent().length, "text");
          }
        } else
          us(_o50) && !n && _o50.isInline()
            ? t.set(_o50.__key, _o50.getChildrenSize(), "element")
            : Io(_o50) &&
              !r.isUnmergeable() &&
              t.set(_o50.__key, _o50.getTextContent().length, "text");
      } else if (o === r.getTextContent().length) {
        var _o51 = r.getNextSibling(),
          _s31 = r.getParent();
        if (e && us(_o51) && _o51.isInline()) t.set(_o51.__key, 0, "element");
        else if (
          (n || e) &&
          null === _o51 &&
          us(_s31) &&
          _s31.isInline() &&
          !_s31.canInsertTextAfter() &&
          _s31.getTextContentSize() > 1
        ) {
          var _e95 = _s31.getNextSibling();
          Io(_e95) && t.set(_e95.__key, 0, "text");
        }
      }
    }
    function cr(t) {
      var e = fi(t.key);
      return null === e ? null : ic(e);
    }
    function ar(t, e, n) {
      var o = cr(t),
        r = cr(e);
      if (o === r || (null !== o && null !== r && o.is(r))) return !1;
      var s = n(o, r);
      if (null !== o)
        return (
          us(o)
            ? e.set(o.getKey(), s ? o.getChildrenSize() : 0, "element")
            : e.set(o.getKey(), s ? o.getTextContentSize() : 0, "text"),
          !0
        );
      var i = rc(r);
      if (null === i) return !1;
      var l = i.getParent();
      if (null === l) return !1;
      var c = i.getIndexWithinParent();
      return (e.set(l.getKey(), s ? c + 1 : c, "element"), !0);
    }
    function ur(t) {
      var e = ar(t.anchor, t.focus, function (e, n) {
        return (function (t, e, n, o) {
          if (null !== n && null !== o) {
            var _t150 = rc(n),
              _e96 = rc(o);
            if (null !== _t150 && _t150.is(_e96)) {
              for (var _e97 of lc(_t150).values()) {
                if (_e97 === n.getKey()) return !0;
                if (_e97 === o.getKey()) return !1;
              }
              return !0;
            }
            return null === _t150 || null === _e96 || _t150.isBefore(_e96);
          }
          if (null !== n) {
            var _t151 = rc(n),
              _o52 = fi(e.key);
            return (
              null === _t151 ||
              null === _o52 ||
              !(!_t151.is(_o52) && !_t151.isParentOf(_o52)) ||
              _t151.isBefore(_o52)
            );
          }
          var r = rc(o),
            s = fi(t.key);
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
    function fr(t, e, n, o, r, s) {
      if (null === t || null === n || !Vs(r, t, n)) return null;
      var i = ir(t, e, Yo(s) ? s.anchor : null, r);
      if (null === i) return null;
      var l = ir(n, o, Yo(s) ? s.focus : null, r);
      if (null === l) return null;
      var c = i[0],
        a = i[1],
        u = l[0],
        f = l[1];
      if ("element" === c.type && "element" === u.type) {
        var _e98 = Si(t),
          _o53 = Si(n);
        if (hs(_e98) && hs(_o53)) return null;
      }
      var d =
        r._slotsUsed &&
        ar(c, u, function () {
          return (
            0 !==
            (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_FOLLOWING)
          );
        });
      return (
        (function (t, e) {
          if ("text" === t.type && "text" === e.type) {
            var _n76 = t.isBefore(e),
              _o54 = t.is(e);
            (lr(t, _n76, _o54),
              lr(e, !_n76, _o54),
              _o54 && e.set(t.key, t.offset, t.type));
          }
        })(c, u),
        [c, u, a || f || d]
      );
    }
    function dr(t) {
      return us(t) && !t.isInline();
    }
    function hr(t, e, n, o, r, s) {
      var i = jr(),
        l = new _Go(Bo(t, e, r), Bo(n, o, s), 0, "");
      return ((l.dirty = !0), (i._selection = l), l);
    }
    function gr() {
      var t = Bo("root", 0, "element"),
        e = Bo("root", 0, "element");
      return new _Go(t, e, 0, "");
    }
    function _r() {
      return new _Ho(new Set());
    }
    function pr(t, e, n, o) {
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
      if (Yo(t) && !c) return t.clone();
      {
        if (null === e) return null;
        var _o55 = _l(e, n._rootElement);
        if (
          ((a = _o55.anchorNode),
          (u = _o55.focusNode),
          (f = _o55.anchorOffset),
          (d = _o55.focusOffset),
          (l || void 0 === i) && Yo(t) && !Vs(n, a, u))
        )
          return t.clone();
      }
      var h = fr(a, f, u, d, n, t);
      if (null === h) return null;
      var g = h[0],
        _ = h[1],
        p = h[2];
      var m = 0,
        y = "";
      if (Yo(t)) {
        var _e99 = t.anchor;
        if (g.key === _e99.key) ((m = t.format), (y = t.style));
        else {
          var _t152 = g.getNode();
          Io(_t152)
            ? ((m = _t152.getFormat()), (y = _t152.getStyle()))
            : us(_t152) &&
              ((m = _t152.getTextFormat()), (y = _t152.getTextStyle()));
        }
      }
      var x = new _Go(g, _, m, y);
      return (p && (x.dirty = !0), x);
    }
    function mr() {
      return jr()._selection;
    }
    function yr() {
      return Yr()._editorState._selection;
    }
    function xr(t, e, n, o) {
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
        var _e100 = r.offset;
        if ((n <= _e100 && o > 0) || (n < _e100 && o < 0)) {
          var _n77 = Math.max(0, _e100 + o);
          (r.set(c, _n77, "element"), s.set(c, _n77, "element"), Cr(t));
        }
      } else {
        var _i18 = t.isBackward(),
          _l14 = _i18 ? s : r,
          _a0 = _l14.getNode(),
          _u1 = _i18 ? r : s,
          _f0 = _u1.getNode();
        if (e.is(_a0)) {
          var _t153 = _l14.offset;
          ((n <= _t153 && o > 0) || (n < _t153 && o < 0)) &&
            _l14.set(c, Math.max(0, _t153 + o), "element");
        }
        if (e.is(_f0)) {
          var _t154 = _u1.offset;
          ((n <= _t154 && o > 0) || (n < _t154 && o < 0)) &&
            _u1.set(c, Math.max(0, _t154 + o), "element");
        }
      }
      Cr(t);
    }
    function Cr(t) {
      var e = t.anchor,
        n = e.offset,
        o = t.focus,
        r = o.offset,
        s = e.getNode(),
        i = o.getNode();
      if (t.isCollapsed()) {
        if (!us(s)) return;
        var _t155 = s.getChildrenSize(),
          _r33 = n >= _t155,
          _i19 = _r33 ? s.getChildAtIndex(_t155 - 1) : s.getChildAtIndex(n);
        if (Io(_i19)) {
          var _t156 = 0;
          (_r33 && (_t156 = _i19.getTextContentSize()),
            e.set(_i19.__key, _t156, "text"),
            o.set(_i19.__key, _t156, "text"));
        }
        return;
      }
      if (us(s)) {
        var _t157 = s.getChildrenSize(),
          _o56 = n >= _t157,
          _r34 = _o56 ? s.getChildAtIndex(_t157 - 1) : s.getChildAtIndex(n);
        if (Io(_r34)) {
          var _t158 = 0;
          (_o56 && (_t158 = _r34.getTextContentSize()),
            e.set(_r34.__key, _t158, "text"));
        }
      }
      if (us(i)) {
        var _t159 = i.getChildrenSize(),
          _e101 = r >= _t159,
          _n78 = _e101 ? i.getChildAtIndex(_t159 - 1) : i.getChildAtIndex(r);
        if (Io(_n78)) {
          var _t160 = 0;
          (_e101 && (_t160 = _n78.getTextContentSize()),
            o.set(_n78.__key, _t160, "text"));
        }
      }
    }
    function Sr(t, e, n, o, r) {
      var s = null,
        i = 0,
        l = null;
      (null !== o
        ? ((s = o.__key),
          Io(o)
            ? ((i = o.getTextContentSize()), (l = "text"))
            : us(o) && ((i = o.getChildrenSize()), (l = "element")))
        : null !== r &&
          ((s = r.__key), Io(r) ? (l = "text") : us(r) && (l = "element")),
        null !== s && null !== l
          ? t.set(s, i, l)
          : ((i = e.getIndexWithinParent()),
            -1 === i && (i = n.getChildrenSize()),
            t.set(n.__key, i, "element")));
    }
    function Tr(t, e, n, o, r) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : r), "text")
        : t.offset > o.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function Nr(t, e, n, o, r) {
      try {
        t.setBaseAndExtent(e, n, o, r);
      } catch (t) {}
    }
    function vr(t, e, n) {
      var o = zi(t, e.getKey());
      if (us(e)) {
        var _r35 = wl(e, o, t);
        return [_r35.element, n + _r35.getFirstChildOffset()];
      }
      return [o, n];
    }
    function Er(t, e, n, o, r, i) {
      var l = i.getRootNode(),
        c = ni(l) || ll(l) ? Cl(l) : null;
      if ((r.has(so) && c !== i) || (null !== c && Gs(c, c))) return;
      var a = _l(o, i);
      var u;
      if (!Yo(e))
        return void (
          null !== t &&
          Vs(n, a.anchorNode, a.focusNode) &&
          o.removeAllRanges()
        );
      var f = e.anchor,
        d = e.focus,
        h = f.getNode(),
        g = d.getNode(),
        _vr = vr(n, h, f.offset),
        _ = _vr[0],
        p = _vr[1],
        _vr2 = vr(n, g, d.offset),
        m = _vr2[0],
        y = _vr2[1],
        x = e.format,
        C = e.style,
        S = e.isCollapsed();
      var T = _,
        N = m,
        v = !1;
      if (
        ("text" === f.type
          ? ((T = Io(h) ? Pl(h, _, n) : null),
            (v = h.getFormat() !== x || h.getStyle() !== C))
          : Yo(t) && "text" === t.anchor.type && (v = !0),
        "text" === d.type && (N = Io(g) ? Pl(g, m, n) : null),
        null !== T && null !== N)
      ) {
        if (
          (S &&
            (null === t || v || (Yo(t) && (t.format !== x || t.style !== C))) &&
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
            var _t161 = null !== c ? Xs(c) : null;
            (null !== _t161 && _t161 !== n) ||
              r.has(co) ||
              i.focus({ preventScroll: !0 });
          }
          if ("element" !== f.type) return;
        }
        if (
          (Nr(o, T, p, N, y), s && e.isCollapsed() && null !== i && !r.has(co))
        ) {
          var _t162 = xl(i);
          if (null === _t162 || !i.contains(_t162)) {
            var _t163 = Cl(i.ownerDocument),
              _e102 = null !== _t163 ? Xs(_t163) : null;
            (null !== _e102 && _e102 !== n) || i.focus({ preventScroll: !0 });
          }
        }
        if (!r.has(io) && e.isCollapsed() && null !== i && i === xl(i)) {
          var _t164 =
            Yo(e) && "element" === e.anchor.type
              ? T.childNodes[p] || null
              : (void 0 === u && (u = gl(o, i)), u);
          if (null !== _t164) {
            var _e103;
            if (ei(_t164)) {
              var _n79 = _t164.ownerDocument.createRange();
              (_n79.selectNode(_t164), (_e103 = _n79.getBoundingClientRect()));
            } else _e103 = _t164.getBoundingClientRect();
            !(function (t, e, n) {
              var o = Ui(n),
                r = Gi(o);
              if (null === o || null === r) return;
              var s = n.getBoundingClientRect();
              if (e.bottom < s.top) return;
              var i = e.top,
                l = e.bottom,
                c = 0,
                a = 0,
                u = n;
              for (; null !== u; ) {
                var _e104 = u === o.body;
                if (_e104) {
                  var _e105 = r.visualViewport;
                  if (_e105) {
                    var _t165 = _e105.offsetTop;
                    ((c = _t165), (a = _t165 + _e105.height));
                  } else ((c = 0), (a = Ji(t).innerHeight));
                  var _n80 = r.getComputedStyle(o.documentElement),
                    _s32 = parseFloat(_n80.scrollPaddingTop),
                    _i20 = parseFloat(_n80.scrollPaddingBottom);
                  (isFinite(_s32) && (c += _s32),
                    isFinite(_i20) && (a -= _i20));
                } else {
                  var _t166 = u === n ? s : u.getBoundingClientRect();
                  ((c = _t166.top), (a = _t166.bottom));
                }
                var _f1 = 0;
                if (
                  (i < c ? (_f1 = -(c - i)) : l > a && (_f1 = l - a), 0 !== _f1)
                )
                  if (_e104) r.scrollBy(0, _f1);
                  else {
                    var _t167 = u.scrollTop;
                    u.scrollTop += _f1;
                    var _e106 = u.scrollTop - _t167;
                    ((i -= _e106), (l -= _e106));
                  }
                if (_e104) break;
                u = Wi(u);
              }
            })(n, _e103, i);
          }
        }
        !(function (t) {
          t._inputState.isSelectionChangeFromDOMUpdate = !0;
        })(n);
      }
    }
    function kr(t, e) {
      for (var _n81 of t.split(/(\r?\n|\t)/))
        "\n" === _n81 || "\r\n" === _n81
          ? e.linebreak()
          : "\t" === _n81
            ? e.tab()
            : "" !== _n81 && e.text(_n81);
    }
    function Or(t) {
      var e = [];
      return (
        kr(t, {
          linebreak: function linebreak() {
            return e.push(Ns());
          },
          tab: function tab() {
            return e.push(Ro());
          },
          text: function text(t) {
            return e.push(wo(t));
          },
        }),
        e
      );
    }
    function br(t) {
      var e = [];
      for (var _n82 of t)
        vs(_n82) ||
          ((!us(_n82) && !hs(_n82)) || _n82.isInline()
            ? e.push(_n82)
            : us(_n82) && e.push.apply(e, br(_n82.getChildren())));
      return e;
    }
    function Mr(e) {
      var n = e;
      e.isCollapsed() || n.removeText();
      var o = mr();
      (Yo(o) && (n = o), Yo(n) || t(161));
      var r = n.anchor;
      var s = r.getNode(),
        i = r.offset;
      for (; !Ml(s) && null === oc(s); ) {
        var _Ar;
        var _t168 = s;
        if (((_Ar = Ar(s, i)), (s = _Ar[0]), (i = _Ar[1]), _t168.is(s))) break;
      }
      return i;
    }
    function Ar(t, e) {
      var n = t.getParent();
      if (!n) {
        var _t169 = As();
        return (yi().append(_t169), _t169.select(), [yi(), 0]);
      }
      if (Io(t)) {
        var _o57 = t.splitText(e);
        if (0 === _o57.length) return [n, t.getIndexWithinParent()];
        var _r36 = 0 === e ? 0 : 1;
        return [n, _o57[0].getIndexWithinParent() + _r36];
      }
      if (!us(t) || 0 === e) return [n, t.getIndexWithinParent()];
      var o = t.getChildAtIndex(e);
      if (o) {
        var _n83 = new _Go(
            Bo(t.__key, e, "element"),
            Bo(t.__key, e, "element"),
            0,
            "",
          ),
          _r37 = t.insertNewAfter(_n83);
        _r37 && _r37.append.apply(_r37, [o].concat(o.getNextSiblings()));
      }
      return [n, t.getIndexWithinParent() + 1];
    }
    function Dr(t) {
      return vs(t) || Vi(t) || Io(t) || t.isParentRequired();
    }
    function wr(t) {
      var e = As();
      var n = null;
      for (var _o58 = 0; _o58 < t.length; _o58++) {
        var _r38 = t[_o58];
        if (Dr(_r38)) {
          if (null === n) {
            ((n = _r38.createParentElementNode()), e.append(n));
            var _s33 = t[_o58 + 1];
            if (vs(_r38) && (void 0 === _s33 || !Dr(_s33))) continue;
          }
          n.append(_r38);
        } else (e.append(_r38), (n = null));
      }
      return e;
    }
    function Ir(t, e, n, o, r) {
      if (r === void 0) {
        r = "decorators-and-blocks";
      }
      if ("move" === e && "character" === o && !t.isCollapsed()) {
        var _ref30 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e107 = _ref30[0],
          _o59 = _ref30[1];
        return (_o59.set(_e107.key, _e107.offset, _e107.type), !0);
      }
      var s = ea(t.focus, n ? "previous" : "next"),
        i = "lineboundary" === o,
        l = "move" === e;
      var c = s,
        a = "decorators-and-blocks" === r;
      if (!fa(c)) {
        for (var _t170 of c) {
          a = !1;
          var _e108 = _t170.origin;
          if (
            !hs(_e108) ||
            _e108.isIsolated() ||
            ((c = _t170), !i || !_e108.isInline())
          )
            break;
        }
        if (a)
          for (var _t171 of Yc(s).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (Ic(_t171)) _t171.origin.isInline() || (c = _t171);
            else {
              if (us(_t171.origin)) continue;
              hs(_t171.origin) && !_t171.origin.isInline() && (c = _t171);
            }
            break;
          }
      }
      if (c === s) return !1;
      if (l && !i && hs(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t172 = _r();
        return (_t172.add(c.origin.getKey()), xi(_t172), !0);
      }
      return ((c = ua(c)), l && na(t.anchor, c), na(t.focus, c), a || !i);
    }
    var Pr = null,
      Fr = null,
      Rr = !1,
      Lr = !1,
      Kr = !1;
    var Br = new Set();
    var $r = 0;
    var zr = { characterData: !0, childList: !0, subtree: !0 };
    function Wr() {
      return Rr || (null !== Pr && Pr._readOnly);
    }
    function Ur() {
      Rr && t(13);
    }
    function Hr() {
      $r > 99 && t(14);
    }
    function jr() {
      return (null === Pr && t(195, Jr()), Pr);
    }
    function Yr() {
      return (null === Fr && t(337, Jr()), Fr);
    }
    function Gr() {
      Yr()._dirtyType = 2;
    }
    function Jr() {
      var t = 0;
      var e = new Set(),
        n = _Bs.version;
      if ("undefined" != typeof window)
        for (var _o60 of ul(document)) {
          var _r39 = Qs(_o60);
          if (qs(_r39)) t++;
          else if (_r39) {
            var _t173 = String(_r39.constructor.version || "<0.17.1");
            (_t173 === n &&
              (_t173 +=
                " (separately built, likely a bundler configuration issue)"),
              e.add(_t173));
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
    function Vr() {
      return Fr;
    }
    function qr(t, e, n) {
      var o = e.__type,
        r = Hs(t, o);
      var s = n.get(o);
      void 0 === s && ((s = Array.from(r.transforms)), n.set(o, s));
      var i = s.length;
      for (var _t174 = 0; _t174 < i && (s[_t174](e), e.isAttached()); _t174++);
    }
    function Xr(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function Qr(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var o = e;
      Array.isArray(e) || (o = [e]);
      for (var _t175 of o) n.add(_t175);
    }
    function Zr(e, n) {
      var o = e.type,
        r = n.get(o);
      void 0 === r && t(17, o);
      var s = r.klass;
      e.type !== s.getType() && t(18, s.name);
      var i = s.importJSON(e),
        l = e.children;
      if (us(i) && Array.isArray(l))
        for (var _t176 = 0; _t176 < l.length; _t176++) {
          var _e109 = Zr(l[_t176], n);
          i.append(_e109);
        }
      var c = e.$slots;
      if (c) {
        ec(i) || t(379, s.name);
        for (var _t177 in c) {
          xc(i, _t177, Zr(c[_t177], n));
        }
      }
      return i;
    }
    function ts(t, e, n) {
      var o = Pr,
        r = Rr,
        s = Fr;
      ((Pr = e), (Rr = !0), (Fr = t));
      try {
        return n();
      } finally {
        ((Pr = o), (Rr = r), (Fr = s));
      }
    }
    function es(t, e) {
      var n = Kr;
      Kr = !0;
      try {
        !(function (t, e) {
          var n = t._pendingEditorState,
            o = t._rootElement,
            r = t._headless || null === o;
          if (null === n)
            return void (
              !t._updating &&
              t._deferred.length > 0 &&
              rs(t, t._deferred)
            );
          var s = t._editorState,
            i = s._selection,
            l = n._selection,
            c = 0 !== t._dirtyType,
            a = Pr,
            u = Rr,
            f = Fr,
            d = t._updating,
            h = t._observer;
          var g = null;
          if (
            ((t._pendingEditorState = null),
            (t._editorState = n),
            !r && c && null !== h)
          ) {
            ((Fr = t), (Pr = n), (Rr = !1), (t._updating = !0));
            try {
              var _e110 = t._dirtyType,
                _o61 = t._dirtyElements,
                _r40 = t._dirtyLeaves;
              (h.disconnect(), (g = Ce(s, n, t, _e110, _o61, _r40)));
            } catch (e) {
              if ((e instanceof Error && t._onError(e), Lr)) throw e;
              return (
                Ps(t, null, o, n),
                st(t),
                (t._dirtyType = 2),
                (Lr = !0),
                es(t, s),
                void (Lr = !1)
              );
            } finally {
              (h.observe(o, zr),
                (t._updating = d),
                (Pr = a),
                (Rr = u),
                (Fr = f));
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
              for (s in o) r.has(s) || (o === n && (o = pi(t)), delete o[s]);
            })(t, n));
          var x = r ? null : sl(Ji(t));
          if (
            t._editable &&
            null !== x &&
            (c || null === l || l.dirty || !l.is(i)) &&
            null !== o &&
            !y.has(lo)
          ) {
            ((Fr = t), (Pr = n));
            try {
              if ((null !== h && h.disconnect(), c || null === l || l.dirty)) {
                var _e111 = t._blockCursorElement;
                (null !== _e111 && rl(_e111, t, o), Er(i, l, t, x, y, o));
              }
              !(function (t, e, n) {
                var o = t._blockCursorElement;
                if (
                  Yo(n) &&
                  n.isCollapsed() &&
                  "element" === n.anchor.type &&
                  e.contains(xl(e))
                ) {
                  var _r41 = n.anchor,
                    _s34 = _r41.getNode(),
                    _i21 = _r41.offset;
                  var _l15 = !1,
                    _c1 = null;
                  if (_i21 === _s34.getChildrenSize()) {
                    ol(_s34.getChildAtIndex(_i21 - 1)) && (_l15 = !0);
                  } else {
                    var _e112 = _s34.getChildAtIndex(_i21);
                    if (null !== _e112 && ol(_e112)) {
                      var _n84 = _e112.getPreviousSibling();
                      (null === _n84 || ol(_n84)) &&
                        ((_l15 = !0), (_c1 = t.getElementByKey(_e112.__key)));
                    }
                  }
                  if (_l15) {
                    var _n85 = wl(
                      _s34,
                      t.getElementByKey(_s34.__key),
                      t,
                    ).element;
                    return (
                      null === o &&
                        (t._blockCursorElement = o =
                          (function (t) {
                            var e = t.theme,
                              n = dl().createElement("div");
                            ((n.contentEditable = "false"),
                              n.setAttribute("data-lexical-cursor", "true"));
                            var o = e.blockCursor;
                            if (void 0 !== o) {
                              var _n$classList;
                              if ("string" == typeof o) {
                                var _t178 = xa(o);
                                o = e.blockCursor = _t178;
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
                        ? _n85.appendChild(o)
                        : _n85.insertBefore(o, _c1))
                    );
                  }
                }
                null !== o && rl(o, t, e);
              })(t, o, l);
            } finally {
              (null !== h && h.observe(o, zr), (Fr = f), (Pr = a));
            }
          }
          null !== g &&
            (function (t, e, n, o, r) {
              var s = Array.from(t._listeners.mutation),
                i = s.length;
              for (var _t179 = 0; _t179 < i; _t179++) {
                var _s$_t = s[_t179],
                  _i22 = _s$_t[0],
                  _l16 = _s$_t[1];
                for (var _t180 of _l16) {
                  var _s35 = e.get(_t180);
                  void 0 !== _s35 &&
                    _i22(_s35, {
                      dirtyLeaves: o,
                      prevEditorState: r,
                      updateTags: n,
                    });
                }
              }
            })(t, g, y, _, s);
          Yo(l) ||
            null === l ||
            (null !== i && i.is(l)) ||
            t.dispatchCommand(ve, void 0);
          var C = t._pendingDecorators;
          null !== C &&
            ((t._decorators = C),
            (t._pendingDecorators = null),
            ns("decorator", t, !0, C));
          if (
            ((function (t, e, n) {
              var o = mi(e),
                r = mi(n);
              o !== r && ns("textcontent", t, !0, r);
            })(t, e || s, n),
            ns("update", t, !0, {
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
            rs(t, t._deferred);
          }
          !(function (t) {
            var e = t._updates;
            if (0 === e.length) return void (t._cascadeCount = 0);
            if (
              ((function (t) {
                if (Br.has(t)) return;
                (Br.add(t),
                  setTimeout(function () {
                    (Br["delete"](t), (t._cascadeCount = 0));
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
              var _e113 = n[0],
                _o62 = n[1];
              is(t, _e113, _o62);
            }
          })(t);
        })(t, e);
      } finally {
        Kr = n;
      }
    }
    function ns(t, e, n) {
      var r = e._updating;
      e._updating = n;
      try {
        var _n86 = e._listeners[t],
          _r42 = Array.from(_n86);
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
          var _t181 = _ref32[0];
          var _e114 = _ref32[1];
          {
            _e114 && _e114();
            var _r43 = _t181.apply(void 0, o);
            _n86.has(_t181) ? _n86.set(_t181, _r43) : _r43 && _r43();
          }
        }
      } finally {
        e._updating = r;
      }
    }
    function os(t, e, n, o) {
      var r = Ni(t);
      var s;
      if (!Kr)
        for (var _t182 = 0; _t182 < r.length; _t182++)
          r[_t182]._updating || (r[_t182]._cascadeCount = 0);
      for (var _t183 = 4; _t183 >= 0; _t183--) {
        var _loop = function _loop() {
            var l = r[_i23];
            if (_i23 > 0 && l._updating) {
              s = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e115 = c[_t183];
              if (_e115.size > 0) {
                var _t184 = !1;
                if (
                  (ls(l, function () {
                    for (var _r44 of _e115)
                      if (_r44(n, o)) return void (_t184 = !0);
                  }),
                  _t184)
                )
                  return { v: _t184 };
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
            os(s, e, n, o);
          }),
        !1
      );
    }
    function rs(t, e) {
      if (((t._deferred = []), 0 !== e.length)) {
        var _n87 = t._updating;
        t._updating = !0;
        try {
          for (var _t185 = 0; _t185 < e.length; _t185++) e[_t185]();
        } finally {
          t._updating = _n87;
        }
      }
    }
    function ss(e, n) {
      var o = e._updates;
      var r = n || !1;
      for (; 0 !== o.length; ) {
        var _n88 = o.shift();
        if (_n88) {
          var _o63 = _n88[0],
            _s36 = _n88[1],
            _i24 = e._pendingEditorState;
          var _l17 = void 0;
          (void 0 !== _s36 &&
            ((_l17 = _s36.onUpdate),
            _s36.skipTransforms && (r = !0),
            _s36.discrete && (null === _i24 && t(191), (_i24._flushSync = !0)),
            _l17 && e._deferred.push(_l17),
            Qr(e, _s36.tag)),
            null == _i24 ? is(e, _o63, _s36) : _o63());
        }
      }
      return r;
    }
    function is(e, n, o) {
      var r = e._updateTags;
      var s,
        i = !1,
        l = !1;
      (void 0 !== o &&
        ((s = o.onUpdate),
        Qr(e, o.tag),
        (i = o.skipTransforms || !1),
        (l = o.discrete || !1)),
        s && e._deferred.push(s));
      var c = e._editorState;
      var a = e._pendingEditorState,
        u = !1;
      ((null === a || a._readOnly) &&
        ((a = e._pendingEditorState = ps(a || c)), (u = !0)),
        (a._flushSync = l));
      var f = Pr,
        d = Rr,
        h = Fr,
        g = e._updating;
      ((Pr = a), (Rr = !1), (e._updating = !0), (Fr = e));
      var _ = e._headless || null === e.getRootElement();
      zs(null);
      try {
        u &&
          (_
            ? null !== c._selection && (a._selection = c._selection.clone())
            : (a._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  o = sl(Ji(t));
                return Yo(n) || null == n ? pr(n, o, t, e) : n.clone();
              })(e, (o && o.event) || null)));
        var _r45 = e._compositionKey;
        (n(),
          (i = ss(e, i)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              o = t._selection;
            if (Yo(o)) {
              var _t186 = o.anchor,
                _e116 = o.focus;
              var _r46;
              if (
                ("text" === _t186.type &&
                  ((_r46 = _t186.getNode()), _r46.selectionTransform(n, o)),
                "text" === _e116.type)
              ) {
                var _t187 = _e116.getNode();
                _r46 !== _t187 && _t187.selectionTransform(n, o);
              }
            }
          })(a, e),
          0 !== e._dirtyType &&
            (i
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = t._nodeMap;
                  for (var _t188 of n) {
                    var _e117 = o.get(_t188);
                    Io(_e117) &&
                      _e117.isAttached() &&
                      _e117.isSimpleText() &&
                      !_e117.isUnmergeable() &&
                      Tt(_e117);
                  }
                })(a, e)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = e._dirtyElements,
                    r = t._nodeMap,
                    s = ui(),
                    i = new Map();
                  var l = n,
                    c = l.size,
                    a = o,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t189 of l) {
                        var _o64 = r.get(_t189);
                        (Io(_o64) &&
                          _o64.isAttached() &&
                          _o64.isSimpleText() &&
                          !_o64.isUnmergeable() &&
                          Tt(_o64),
                          void 0 !== _o64 && Xr(_o64, s) && qr(e, _o64, i),
                          n.add(_t189));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        $r++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t190 of a) {
                      var _n89 = _t190[0],
                        _l18 = _t190[1];
                      if ((o.set(_n89, _l18), !_l18)) continue;
                      var _c10 = r.get(_n89);
                      void 0 !== _c10 && Xr(_c10, s) && qr(e, _c10, i);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      $r++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = o));
                })(a, e),
            ss(e),
            (function (t, e, n, o) {
              var r = t._nodeMap,
                s = e._nodeMap,
                i = [];
              for (var _ref34 of o) {
                var _t191 = _ref34[0];
                {
                  var _e118 = s.get(_t191);
                  void 0 !== _e118 &&
                    (_e118.isAttached() ||
                      (us(_e118) && V(_e118, _t191, r, s, i, o),
                      r.has(_t191) || o["delete"](_t191),
                      i.push(_t191)));
                }
              }
              for (var _t192 of n) {
                var _e119 = s.get(_t192);
                void 0 === _e119 ||
                  _e119.isAttached() ||
                  (ec(_e119) &&
                    null !== _e119.__slots &&
                    V(_e119, _t192, r, s, i, n),
                  r.has(_t192) || n["delete"](_t192),
                  i.push(_t192));
              }
              for (var _t193 of i) s["delete"](_t193);
              var l = Yr(),
                c = l._compositionKey;
              null === c || s.has(c) || (l._compositionKey = null);
            })(c, a, e._dirtyLeaves, e._dirtyElements)));
        _r45 !== e._compositionKey && (a._flushSync = !0);
        var _s37 = a._selection;
        if (Yo(_s37)) {
          e._slotsUsed && ur(_s37);
          var _n90 = a._nodeMap,
            _o65 = _s37.anchor.key,
            _r47 = _s37.focus.key;
          (void 0 !== _n90.get(_o65) && void 0 !== _n90.get(_r47)) || t(19);
        } else Jo(_s37) && 0 === _s37._nodes.size && (a._selection = null);
      } catch (t) {
        return (
          t instanceof Error && e._onError(t),
          (e._pendingEditorState = c),
          (e._dirtyType = 2),
          e._cloneNotNeeded.clear(),
          (e._dirtyLeaves = new Set()),
          e._dirtyElements.clear(),
          void es(e)
        );
      } finally {
        ((Pr = f), (Rr = d), (Fr = h), (e._updating = g), ($r = 0));
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
          ? ((a._flushSync = !1), es(e))
          : u &&
            Ys(function () {
              es(e);
            })
        : ((a._flushSync = !1),
          u && (r.clear(), (e._deferred = []), (e._pendingEditorState = null)));
    }
    function ls(t, e, n) {
      Fr === t && void 0 === n ? (Wr() ? is(t, e, n) : e()) : is(t, e, n);
    }
    function cs(t) {
      if (Qi(t)) {
        var _e120 = null;
        for (var _n91 of t.getChildren())
          _e120 = _n91.isInline()
            ? (_e120 || _n91.replace(_n91.createParentElementNode())).append(
                _n91,
              )
            : null;
      }
    }
    var _as4 = (function (_no2) {
      function as(t) {
        var _this3;
        ((_this3 = _no2.call(this, t) || this),
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
      babelHelpers.inheritsLoose(as, _no2);
      var _proto10 = as.prototype;
      _proto10.$config = function $config() {
        return this.config(Symbol["for"]("ElementNode"), {
          $transform: cs,
          extends: _no5,
        });
      };
      _proto10.afterCloneFrom = function afterCloneFrom(e) {
        (_no2.prototype.afterCloneFrom.call(this, e),
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
        return 0 === this.getChildrenSize() && 0 === cc(this).length;
      };
      _proto10.isDirty = function isDirty() {
        var t = Yr()._dirtyElements;
        return null !== t && t.has(this.__key);
      };
      _proto10.isLastChild = function isLastChild() {
        var t = this.getLatest(),
          e = this.getParentOrThrow().getLastChild();
        return null !== e && e.is(t);
      };
      _proto10.getAllTextNodes = function getAllTextNodes() {
        var t = [];
        for (var _e121 of cc(this)) {
          var _n92 = ac(this, _e121);
          us(_n92) && t.push.apply(t, _n92.getAllTextNodes());
        }
        var e = this.getFirstChild();
        for (; null !== e; ) {
          if ((Io(e) && t.push(e), us(e))) {
            var _n93 = e.getAllTextNodes();
            t.push.apply(t, _n93);
          }
          e = e.getNextSibling();
        }
        return t;
      };
      _proto10.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; us(t); ) {
          var _e122 = t.getFirstChild();
          if (null === _e122) break;
          t = _e122;
        }
        return t;
      };
      _proto10.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; us(t); ) {
          var _e123 = t.getLastChild();
          if (null === _e123) break;
          t = _e123;
        }
        return t;
      };
      _proto10.getDescendantByIndex = function getDescendantByIndex(t) {
        var e = this.getChildren(),
          n = e.length;
        if (t >= n) {
          var _t194 = e[n - 1];
          return (us(_t194) && _t194.getLastDescendant()) || _t194 || null;
        }
        var o = e[t];
        return (us(o) && o.getFirstDescendant()) || o || null;
      };
      _proto10.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : fi(t);
      };
      _proto10.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var e = this.getFirstChild();
        return (null === e && t(45, this.__key), e);
      };
      _proto10.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : fi(t);
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
        var t = pc(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o66 = 0; _o66 < n; _o66++) {
          var _r48 = e[_o66];
          ((t += _r48.getTextContent()),
            us(_r48) && _o66 !== n - 1 && !_r48.isInline() && (t += v));
        }
        return t;
      };
      _proto10.getTextContentSize = function getTextContentSize() {
        var t = (function (t) {
          var e = 0;
          for (var _n94 of cc(t)) {
            var _o67 = ac(t, _n94);
            null !== _o67 && (e += _o67.getTextContentSize());
          }
          return e;
        })(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o68 = 0; _o68 < n; _o68++) {
          var _r49 = e[_o68];
          ((t += _r49.getTextContentSize()),
            us(_r49) && _o68 !== n - 1 && !_r49.isInline() && (t += 2));
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
          var _e124 = w[t];
          return 0 !== (this.getFormat() & _e124);
        }
        return !1;
      };
      _proto10.hasTextFormat = function hasTextFormat(t) {
        var e = A[t];
        return 0 !== (this.getTextFormat() & e);
      };
      _proto10.getFormatFlags = function getFormatFlags(t, e) {
        return ri(this.getLatest().__textFormat, t, e);
      };
      _proto10.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto10.select = function select(t, e) {
        Ur();
        var n = mr();
        var o = t,
          r = e;
        var s = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t195 = this.getFirstChild();
            if (Io(_t195) || us(_t195)) return _t195.select(0, 0);
          } else if (
            !((void 0 !== t && t !== s) || (void 0 !== e && e !== s))
          ) {
            var _t196 = this.getLastChild();
            if (Io(_t196) || us(_t196)) return _t196.select();
          }
        (void 0 === o && (o = s), void 0 === r && (r = s));
        var i = this.__key;
        return Yo(n)
          ? (n.anchor.set(i, o, "element"),
            n.focus.set(i, r, "element"),
            (n.dirty = !0),
            n)
          : hr(i, o, i, r, "element", "element");
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
      _proto10.splice = function splice(e, n, o) {
        to(this) && t(324, this.__key, this.__type);
        var r = this.getChildrenSize(),
          s = this.getWritable();
        e + n <= r || t(226, String(e), String(n), String(r));
        for (var _t197 of o);
        var i = s.__key,
          l = [],
          c = [],
          a = this.getChildAtIndex(e + n);
        var u = null,
          f = r - n + o.length;
        if (0 !== e)
          if (e === r) u = this.getLastChild();
          else {
            var _t198 = this.getChildAtIndex(e);
            null !== _t198 && (u = _t198.getPreviousSibling());
          }
        if (n > 0) {
          var _e125 = null === u ? this.getFirstChild() : u.getNextSibling();
          for (var _o69 = 0; _o69 < n; _o69++) {
            null === _e125 && t(100);
            var _n95 = _e125.getNextSibling(),
              _o70 = _e125.__key;
            (ii(_e125.getWritable()), c.push(_o70), (_e125 = _n95));
          }
        }
        var d = u;
        for (var _e126 of o) {
          null !== d && _e126.is(d) && (u = d = d.getPreviousSibling());
          var _n96 = _e126.getWritable();
          (_n96.__parent === i && f--, ii(_n96));
          var _o71 = _e126.__key;
          if (null === d) ((s.__first = _o71), (_n96.__prev = null));
          else {
            var _t199 = d.getWritable();
            ((_t199.__next = _o71), (_n96.__prev = _t199.__key));
          }
          (_e126.__key === i && t(76),
            (_n96.__parent = i),
            l.push(_o71),
            (d = _e126));
        }
        if (e + n === r) {
          if (null !== d) {
            ((d.getWritable().__next = null), (s.__last = d.__key));
          }
        } else if (null !== a) {
          var _t200 = a.getWritable();
          if (null !== d) {
            var _e127 = d.getWritable();
            ((_t200.__prev = d.__key), (_e127.__next = a.__key));
          } else _t200.__prev = null;
        }
        if (((s.__size = f), c.length)) {
          var _t201 = mr();
          if (Yo(_t201)) {
            var _e128 = new Set(c),
              _n97 = new Set(l),
              _o72 = _t201.anchor,
              _r50 = _t201.focus;
            (fs(_o72, _e128, _n97) && Sr(_o72, _o72.getNode(), this, u, a),
              fs(_r50, _e128, _n97) && Sr(_r50, _r50.getNode(), this, u, a),
              0 !== f || this.canBeEmpty() || Qi(this) || this.remove());
          }
        }
        return s;
      };
      _proto10.getDOMSlot = function getDOMSlot(t) {
        return new _z(t);
      };
      _proto10.exportDOM = function exportDOM(t) {
        var _no2$prototype$export = _no2.prototype.exportDOM.call(this, t),
          e = _no2$prototype$export.element;
        if (Tl(e)) {
          var _t202 = this.getIndent();
          _t202 > 0 &&
            ((e.style.paddingInlineStart = 40 * _t202 + "px"),
            e.setAttribute("data-lexical-indent", String(_t202)));
          var _n98 = this.getDirection();
          _n98 && (e.dir = _n98);
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
            _no2.prototype.exportJSON.call(this),
          ),
          e = this.getTextFormat(),
          n = this.getTextStyle();
        return (
          (0 === e && "" === n) ||
            Qi(this) ||
            this.getChildren().some(Io) ||
            (0 !== e && (t.textFormat = e), "" !== n && (t.textStyle = n)),
          t
        );
      };
      _proto10.updateFromJSON = function updateFromJSON(t) {
        return _no2.prototype.updateFromJSON
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
        var n = wl(this, t, e);
        var o = n.getFirstChild();
        for (
          var _t203 = this.getFirstChild();
          _t203;
          _t203 = _t203.getNextSibling()
        ) {
          var _r51 = e.getElementByKey(_t203.getKey());
          null !== _r51 &&
            (null == o
              ? (n.insertChild(_r51), (o = _r51))
              : o !== _r51 && n.replaceChild(_r51, o),
            (o = o.nextSibling));
        }
      };
      return as;
    })(_no5);
    function us(t) {
      return t instanceof _as4;
    }
    function fs(t, e, n) {
      var o = t.getNode();
      for (; o; ) {
        var _t204 = o.__key;
        if (e.has(_t204) && !n.has(_t204)) return !0;
        o = o.getParent();
      }
      return !1;
    }
    var _ds = (function (_no3) {
      function ds(t) {
        var _this4;
        ((_this4 = _no3.call(this, t) || this),
          (_this4.__slotHost = null),
          (_this4.__slots = null));
        return _this4;
      }
      babelHelpers.inheritsLoose(ds, _no3);
      var _proto11 = ds.prototype;
      _proto11.afterCloneFrom = function afterCloneFrom(e) {
        (_no3.prototype.afterCloneFrom.call(this, e),
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
      return ds;
    })(_no5);
    function hs(t) {
      return t instanceof _ds;
    }
    var _gs = (function (_as) {
      function gs() {
        var _this5;
        ((_this5 = _as.call(this, "root") || this),
          (_this5.__cachedText = null));
        return _this5;
      }
      babelHelpers.inheritsLoose(gs, _as);
      var _proto12 = gs.prototype;
      _proto12.$config = function $config() {
        return this.config("root", { extends: _as4 });
      };
      _proto12.getTopLevelElementOrThrow =
        function getTopLevelElementOrThrow() {
          t(51);
        };
      _proto12.getTextContent = function getTextContent() {
        var t = this.__cachedText;
        return null === t || (!Wr() && 0 !== Yr()._dirtyType)
          ? _as.prototype.getTextContent.call(this)
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
        for (var _e129 of o) us(_e129) || hs(_e129) || t(282);
        return _as.prototype.splice.call(this, e, n, o);
      };
      gs.importJSON = function importJSON(t) {
        return yi().updateFromJSON(t);
      };
      _proto12.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return gs;
    })(_as4);
    function _s(t) {
      return t instanceof _gs;
    }
    function ps(t) {
      return new _xs(G(t._nodeMap), null, t._slotsUsed);
    }
    function ms() {
      return new _xs(new Map([["root", new _gs()]]), null, !1);
    }
    function ys(e) {
      var n = e.exportJSON(),
        o = e.constructor;
      if ((n.type !== o.getType() && t(130, o.name), us(e))) {
        var _r52 = n.children;
        Array.isArray(_r52) || t(59, o.name);
        var _s38 = e.getChildren();
        for (var _t205 = 0; _t205 < _s38.length; _t205++) {
          var _e130 = ys(_s38[_t205]);
          _r52.push(_e130);
        }
      }
      var r = cc(e);
      if (r.length > 0) {
        var _s39 = {};
        for (var _n99 of r) {
          var _r53 = ac(e, _n99);
          (null === _r53 && t(366, o.name, _n99), (_s39[_n99] = ys(_r53)));
        }
        n.$slots = _s39;
      }
      return n;
    }
    var _xs = (function () {
      function xs(t, e, n) {
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
      var _proto13 = xs.prototype;
      _proto13.isEmpty = function isEmpty() {
        return 1 === this._nodeMap.size && null === this._selection;
      };
      _proto13.read = function read(t, e) {
        return ts((e && e.editor) || null, this, t);
      };
      _proto13.clone = function clone(t) {
        var e = new xs(
          this._nodeMap,
          void 0 === t ? this._selection : t,
          this._slotsUsed,
        );
        return ((e._readOnly = !0), e);
      };
      _proto13.toJSON = function toJSON() {
        return ts(null, this, function () {
          return { root: ys(yi()) };
        });
      };
      return xs;
    })();
    var _Cs = (function (_as2) {
      function Cs() {
        return _as2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Cs, _as2);
      var _proto14 = Cs.prototype;
      _proto14.$config = function $config() {
        return this.config("artificial", { extends: _as4 });
      };
      _proto14.createDOM = function createDOM(t) {
        return dl().createElement("div");
      };
      return Cs;
    })(_as4);
    var _Ss = (function (_no4) {
      function Ss() {
        return _no4.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Ss, _no4);
      var _proto15 = Ss.prototype;
      _proto15.$config = function $config() {
        return this.config("linebreak", {
          importDOM: {
            br: function br(t) {
              return Es(t) || ks(t) ? null : { conversion: Ts, priority: 0 };
            },
          },
        });
      };
      _proto15.getTextContent = function getTextContent() {
        return "\n";
      };
      _proto15.createDOM = function createDOM() {
        return dl().createElement("br");
      };
      _proto15.updateDOM = function updateDOM() {
        return !1;
      };
      _proto15.isInline = function isInline() {
        return !0;
      };
      return Ss;
    })(_no5);
    function Ts(t) {
      return { node: Ns() };
    }
    function Ns() {
      return tl(new _Ss());
    }
    function vs(t) {
      return t instanceof _Ss;
    }
    function Es(t) {
      var e = t.parentElement;
      if (null !== e && bl(e)) {
        var _n100 = e.firstChild;
        if (_n100 === t || (_n100.nextSibling === t && Os(_n100))) {
          var _n101 = e.lastChild;
          if (_n101 === t || (_n101.previousSibling === t && Os(_n101)))
            return !0;
        }
      }
      return !1;
    }
    function ks(t) {
      var e = t.parentElement;
      if (null !== e && bl(e)) {
        var _n102 = e.firstChild;
        if (_n102 === t || (_n102.nextSibling === t && Os(_n102))) return !1;
        var _o73 = e.lastChild;
        if (_o73 === t || (_o73.previousSibling === t && Os(_o73))) return !0;
      }
      return !1;
    }
    function Os(t) {
      return ei(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    var _bs = (function (_as3) {
      function bs() {
        return _as3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(bs, _as3);
      var _proto16 = bs.prototype;
      _proto16.$config = function $config() {
        return this.config("paragraph", {
          extends: _as4,
          importDOM: {
            p: function p() {
              return { conversion: Ms, priority: 0 };
            },
          },
        });
      };
      _proto16.createDOM = function createDOM(t) {
        var e = dl().createElement("p"),
          n = Fi(t.theme, "paragraph");
        if (void 0 !== n) {
          var _e$classList2;
          (_e$classList2 = e.classList).add.apply(_e$classList2, n);
        }
        return e;
      };
      _proto16.updateDOM = function updateDOM(t, e, n) {
        return !1;
      };
      _proto16.exportDOM = function exportDOM(t) {
        var _as3$prototype$export = _as3.prototype.exportDOM.call(this, t),
          e = _as3$prototype$export.element;
        if (Tl(e)) {
          this.isEmpty() && e.append(dl().createElement("br"));
          var _t206 = this.getFormatType();
          _t206 && (e.style.textAlign = _t206);
        }
        return { element: e };
      };
      _proto16.exportJSON = function exportJSON() {
        var t = _as3.prototype.exportJSON.call(this);
        if (void 0 === t.textFormat || void 0 === t.textStyle) {
          var _e131 = this.getChildren().find(Io);
          _e131
            ? ((t.textFormat = _e131.getFormat()),
              (t.textStyle = _e131.getStyle()))
            : ((t.textFormat = this.getTextFormat()),
              (t.textStyle = this.getTextStyle()));
        }
        return t;
      };
      _proto16.insertNewAfter = function insertNewAfter(t, e) {
        var n = As();
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
          (Io(t[0]) && "" === t[0].getTextContent().trim())
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return bs;
    })(_as4);
    function Ms(t) {
      var e = As();
      if ((zl(e, t), Bl(t, e), "" === e.getFormatType())) {
        var _n103 = t.getAttribute("align");
        _n103 && _n103 && _n103 in w && e.setFormat(_n103);
      }
      return ($l(e, t), { node: e });
    }
    function As() {
      return tl(new _bs());
    }
    function Ds(t) {
      return t instanceof _bs;
    }
    function ws(t) {
      console.warn(t);
    }
    var Is = 0;
    function Ps(t, e, n, o, r) {
      var s = t._keyToDOMMap;
      (s.clear(),
        (t._editorState = ms()),
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
          ((n.textContent = ""), s.set("root", n), hi(n, t, "root")));
    }
    function Fs(t) {
      var e = new Set(),
        n = new Set();
      for (var _ref36 of ql(t)) {
        var _o74 = _ref36.klass;
        var _r54 = _ref36.ownNodeConfig;
        {
          var _t207 = _o74.transform;
          if (!n.has(_t207)) {
            n.add(_t207);
            var _r55 = _o74.transform();
            _r55 && e.add(_r55);
          }
          if (_r54) {
            var _t208 = _r54.$transform;
            _t208 && e.add(_t208);
          }
        }
      }
      return e;
    }
    var Rs = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, o) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = js(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, o, r) {
        return us(t) && t.extractWithChild(e, n, o);
      },
      $getDOMSlot: function $getDOMSlot(t, e, n) {
        return t.getDOMSlot(e);
      },
      $getSlotTargetElement: function $getSlotTargetElement(t, e, n, o) {
        return null;
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return us(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, o) {
        return t.updateDOM(e, n, o._config);
      },
    };
    function Ls(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function Ks(t, e, n) {
      return (t.set(e, n), Ls.bind(null, t, e));
    }
    var _Bs = (function () {
      function Bs(t, e, n, o, r, s, i, l, c) {
        ((this._createEditorArgs = c),
          (this._parentEditor = e),
          (this._rootElement = null),
          (this._editorState = t),
          (this._pendingEditorState = null),
          (this._compositionKey = null),
          (this._deferred = []),
          (this._keyToDOMMap = new _J()),
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
          (this._key = vi()),
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
      var _proto17 = Bs.prototype;
      _proto17.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto17.registerUpdateListener = function registerUpdateListener(t) {
        return Ks(this._listeners.update, t);
      };
      _proto17.registerEditableListener = function registerEditableListener(t) {
        return Ks(this._listeners.editable, t);
      };
      _proto17.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return Ks(this._listeners.decorator, t);
      };
      _proto17.registerTextContentListener =
        function registerTextContentListener(t) {
          return Ks(this._listeners.textcontent, t);
        };
      _proto17.registerRootListener = function registerRootListener(t) {
        var _this14 = this;
        var e = this._listeners.root;
        return Ca(Ks(e, t, t(this._rootElement, null) || void 0), function () {
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
          o = Ll(n).get(e.getType());
        if (!o) return;
        var r = new Map();
        for (var _t209 of o.keys()) r.set(_t209, "created");
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
          var _t210 = this.registerNodeTransformToKlass(r, e);
          o.push(_t210);
        }
        return (
          (function (t, e) {
            var n = Ll(t.getEditorState()),
              o = [];
            for (var _t211 of e) {
              var _e132 = n.get(_t211);
              _e132 && o.push(_e132);
            }
            if (0 === o.length) return;
            t.update(
              function () {
                for (var _t212 of o)
                  for (var _e133 of _t212.keys()) {
                    var _t213 = fi(_e133);
                    _t213 && _t213.markDirty();
                  }
              },
              null === t._pendingEditorState ? { tag: ro } : void 0,
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
        return $i(this, t, e);
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
          var _n104 = Fi(this._config.theme, "root"),
            _o75 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            Ps(this, e, t, _o75, { preserveUpdateQueue: !0 }),
            null !== e &&
              (this._config.disableEvents || Xn(e),
              null != _n104 &&
                (_e$classList3 = e.classList).remove.apply(
                  _e$classList3,
                  _n104,
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e134 = Gi(t),
              _o76 = t.style;
            ((_o76.userSelect = "text"),
              (_o76.whiteSpace = "pre-wrap"),
              (_o76.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e134),
              (this._dirtyType = 2),
              st(this),
              this._updateTags.add(ro),
              es(this),
              this._config.disableEvents ||
                (function (t, e) {
                  var n = t.ownerDocument;
                  En.set(t, n);
                  var o = kn.get(n);
                  (void 0 === o &&
                    ((o = { editors: new Set(), hasShadowEditor: void 0 }),
                    kn.set(n, o)),
                    o.editors.add(e),
                    (o.hasShadowEditor = void 0),
                    (t.__lexicalEditor = e));
                  var r = jn(t);
                  r.push(On.register(n));
                  var _loop2 = function _loop2() {
                    var _vn$_n = vn[_n105],
                      o = _vn$_n[0],
                      s = _vn$_n[1],
                      i =
                        "function" == typeof s
                          ? function (t) {
                              Vn(t) ||
                                (Jn(t),
                                (e.isEditable() || "click" === o) && s(t, e));
                            }
                          : function (t) {
                              if (Vn(t)) return;
                              Jn(t);
                              var n = e.isEditable();
                              switch (o) {
                                case "cut":
                                  return n && $i(e, dn, t);
                                case "copy":
                                  return $i(e, fn, t);
                                case "paste":
                                  return n && $i(e, Fe, t);
                                case "dragstart":
                                  return n && $i(e, cn, t);
                                case "dragover":
                                  return n && $i(e, an, t);
                                case "dragend":
                                  return n && $i(e, un, t);
                                case "focus":
                                  return n && $i(e, yn, t);
                                case "blur":
                                  return n && $i(e, xn, t);
                                case "drop":
                                  return n && $i(e, sn, t);
                              }
                            };
                    r.push(Tn(t, o, i));
                  };
                  for (var _n105 = 0; _n105 < vn.length; _n105++) {
                    _loop2();
                  }
                })(t, this),
              null != _n104 &&
                (_t$classList = t.classList).add.apply(_t$classList, _n104));
          } else ((this._window = null), this._updateTags.add(ro), es(this));
          ns("root", this, !1, t, e);
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
          ((o = ps(e)),
          (o._selection = e._selection ? e._selection.clone() : null)),
          rt(this));
        var r = this._pendingEditorState,
          s = void 0 !== n ? n.tag : null;
        (null === r ||
          r.isEmpty() ||
          (null != s && this._updateTags.add(s), es(this)),
          (this._pendingEditorState = o),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          (this._slotsUsed = this._slotsUsed || e._slotsUsed),
          ls(
            this,
            function () {
              if ((s && _this15._updateTags.add(s), e._parsed))
                for (var _ref38 of o._nodeMap.entries()) {
                  var _t214 = _ref38[0];
                  var _e135 = _ref38[1];
                  us(_e135)
                    ? _this15._dirtyElements.set(_t214, !0)
                    : _this15._dirtyLeaves.add(_t214);
                }
            },
            { discrete: !this._updating || void 0 },
          ));
      };
      _proto17.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var o = ms(),
            r = Pr,
            s = Rr,
            i = Fr,
            l = e._dirtyElements,
            c = e._dirtyLeaves,
            a = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Set()),
            (e._dirtyType = 0),
            (Pr = o),
            (Rr = !1),
            (Fr = e),
            zs(null));
          try {
            var _r56 = e._nodes;
            (Zr(t.root, _r56), n && n(), (o._readOnly = !0), (o._parsed = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = c),
              (e._cloneNotNeeded = a),
              (e._dirtyType = u),
              (Pr = r),
              (Rr = s),
              (Fr = i));
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
        "force-commit" === e && es(this);
        return (
          "pending" === e
            ? this._pendingEditorState || this._editorState
            : this.getEditorState()
        ).read(n, { editor: this });
      };
      _proto17.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : is(t, e, n);
        })(this, t, e);
      };
      _proto17.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          ls(this, function () {
            var o = mr(),
              r = yi();
            (null !== o
              ? o.dirty || xi(o.clone())
              : 0 !== r.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? r.selectStart()
                  : r.selectEnd()),
              Hi("focus"),
              ji(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto17.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = sl(this._window);
        null !== e && e.removeAllRanges();
      };
      _proto17.isEditable = function isEditable() {
        return this._editable;
      };
      _proto17.setEditable = function setEditable(t) {
        this._editable !== t &&
          ((this._editable = t),
          ns("editable", this, !0, t),
          this._slotsUsed &&
            this.update(function () {
              return Gr();
            }));
      };
      _proto17.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON() };
      };
      return Bs;
    })();
    _Bs.version = H;
    var $s = null;
    function zs(t) {
      $s = t;
    }
    var Ws = Symbol("INTERNAL_SKIP_AFTER_CLONE_FROM");
    var Us = 1;
    function Hs(e, n) {
      var o = js(e, n);
      return (void 0 === o && t(30, n), o);
    }
    function js(t, e) {
      return t._nodes.get(e);
    }
    var Ys =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function Gs(t, e) {
      var n =
        void 0 !== e
          ? e
          : (function () {
              var e = t.getRootNode();
              return ni(e) || ll(e) ? Cl(e) : null;
            })();
      if (!Tl(n)) return !1;
      if (n.hasAttribute("data-lexical-slot")) return !1;
      var o = _i(n),
        r = n.nodeName;
      return (
        oo(o) &&
        ("INPUT" === r ||
          "TEXTAREA" === r ||
          ("true" === n.contentEditable && null == Qs(n)))
      );
    }
    var Js = Gs;
    function Vs(t, e, n) {
      var o = t.getRootElement();
      if (!o) return !1;
      try {
        if (!e || !o.contains(e) || !o.contains(n)) return !1;
      } catch (t) {
        return !1;
      }
      return (
        Xs(e) === t &&
        t.read("latest", function () {
          return !Gs(e);
        })
      );
    }
    function qs(t) {
      return t instanceof _Bs;
    }
    function Xs(t) {
      var e = t;
      for (; null != e; ) {
        var _t215 = Qs(e);
        if (qs(_t215)) return _t215;
        e = Wi(e);
      }
      return null;
    }
    function Qs(t) {
      return t ? t.__lexicalEditor : null;
    }
    function Zs(t) {
      return Lo(t) || t.isToken();
    }
    function ti(t) {
      return Zs(t) || t.isSegmented();
    }
    function ei(t) {
      return Nl(t) && 3 === t.nodeType;
    }
    function ni(t) {
      return Nl(t) && 9 === t.nodeType;
    }
    function oi(t) {
      var e = t;
      for (; null != e; ) {
        if (ei(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function ri(t, e, n) {
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
    function si(t, e) {
      var n = (function () {
        var t = $s;
        return (($s = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (Ur(), Hr());
      var o = Yr(),
        r = jr(),
        s = "" + Us++;
      (r._nodeMap.set(s, t),
        us(t) ? o._dirtyElements.set(s, !0) : o._dirtyLeaves.add(s),
        o._cloneNotNeeded.add(s),
        0 === o._dirtyType && (o._dirtyType = 1),
        (t.__key = s));
    }
    function ii(e) {
      null !== oc(e) && t(380, e.__key, String(oc(e)));
      var n = e.getParent();
      if (null !== n) {
        var _t216 = e.getWritable(),
          _o77 = n.getWritable(),
          _r57 = e.getPreviousSibling(),
          _s40 = e.getNextSibling(),
          _i25 = null !== _s40 ? _s40.__key : null,
          _l19 = null !== _r57 ? _r57.__key : null,
          _c11 = null !== _r57 ? _r57.getWritable() : null,
          _a1 = null !== _s40 ? _s40.getWritable() : null;
        (null === _r57 && (_o77.__first = _i25),
          null === _s40 && (_o77.__last = _l19),
          null !== _c11 && (_c11.__next = _i25),
          null !== _a1 && (_a1.__prev = _l19),
          (_t216.__prev = null),
          (_t216.__next = null),
          (_t216.__parent = null),
          _o77.__size--);
      }
    }
    var li = ii;
    function ci(e) {
      (Hr(), to(e) && t(323, e.__key, e.__type));
      var n = e.getLatest(),
        o = null !== n.__parent ? n.__parent : nc(n) ? n.__slotHost : null,
        r = jr(),
        s = Yr(),
        i = r._nodeMap,
        l = s._dirtyElements;
      null !== o &&
        (function (t, e, n) {
          var o = t;
          for (; null !== o; ) {
            if (n.has(o)) return;
            var _t217 = e.get(o);
            if (void 0 === _t217) break;
            (n.set(o, !1),
              (o =
                null !== _t217.__parent
                  ? _t217.__parent
                  : nc(_t217)
                    ? _t217.__slotHost
                    : null));
          }
        })(o, i, l);
      var c = n.__key;
      (0 === s._dirtyType && (s._dirtyType = 1),
        us(e) ? l.set(c, !0) : s._dirtyLeaves.add(c));
    }
    function ai(t) {
      Ur();
      var e = Yr(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t218 = fi(n);
          null !== _t218 && _t218.getWritable();
        }
        if (null !== t) {
          var _e136 = fi(t);
          null !== _e136 && _e136.getWritable();
        }
      }
    }
    function ui() {
      if (Wr()) return null;
      return Yr()._compositionKey;
    }
    function fi(t, e) {
      var n = (e || jr())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function di(t, e) {
      var n = gi(t, Yr());
      return void 0 !== n ? fi(n, e) : null;
    }
    function hi(t, e, n) {
      t["__lexicalKey_" + e._key] = n;
    }
    function gi(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function _i(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t219 = di(n, e);
        if (null !== _t219) return _t219;
        n = Wi(n);
      }
      return null;
    }
    function pi(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function mi(t) {
      return t.read(function () {
        return yi().getTextContent();
      });
    }
    function yi() {
      return jr()._nodeMap.get("root");
    }
    function xi(t) {
      Ur();
      var e = jr();
      (null !== t &&
        ((t.dirty = !0),
        t.setCachedNodes(null),
        Yo(t) && Yr()._slotsUsed && ur(t)),
        (e._selection = t));
    }
    function Ci() {
      Ur();
      rt(Yr());
    }
    function Si(t) {
      var e = (function (t, e) {
        var n = t;
        for (; null != n; ) {
          var _t220 = gi(n, e);
          if (void 0 !== _t220) return _t220;
          n = Wi(n);
        }
        return null;
      })(t, Yr());
      return null === e ? null : fi(e);
    }
    function Ti(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function Ni(t) {
      var e = [];
      for (var _n106 = t; null !== _n106; _n106 = _n106._parentEditor)
        e.push(_n106);
      return e;
    }
    function vi() {
      return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substring(0, 5);
    }
    function Ei(t) {
      return ei(t) ? t.nodeValue : null;
    }
    function ki(t, e, n) {
      var o = sl(Ji(e));
      if (null === o) return;
      var r = _l(o, e._rootElement),
        s = r.anchorNode;
      var i = r.anchorOffset,
        l = r.focusOffset;
      if (null !== s) {
        var _e137 = Ei(s);
        var _o78 = _i(s);
        if (null !== _e137 && Io(_o78)) {
          if ((_e137 === N || _e137 === E) && n) {
            var _t221 = n.length;
            ((_e137 = n), (i = _t221), (l = _t221));
          }
          null !== _e137 && Oi(_o78, _e137, i, l, t);
        }
      }
    }
    function Oi(t, e, n, o, r) {
      var s = t;
      if (s.isAttached() && (r || !s.isDirty())) {
        var _i26 = s.isComposing();
        if (s.isToken() && _i26) return;
        var _c12 = e;
        if (
          (_i26 || r) &&
          (e.endsWith(N) && (_c12 = e.slice(0, -N.length)), r)
        ) {
          var _t222 = E;
          var _e138;
          for (; -1 !== (_e138 = _c12.indexOf(_t222)); )
            ((_c12 = _c12.slice(0, _e138) + _c12.slice(_e138 + _t222.length)),
              null !== n &&
                n > _e138 &&
                (n = Math.max(_e138, n - _t222.length)),
              null !== o &&
                o > _e138 &&
                (o = Math.max(_e138, o - _t222.length)));
        }
        var _u10 = s.getTextContent();
        if (r || _c12 !== _u10) {
          var _e139 = mr();
          if ("" === _c12) {
            if ((ai(null), a || l || d)) s.remove();
            else {
              var _t223 = Yr();
              (bi(s, "", _e139),
                setTimeout(function () {
                  _t223.update(function () {
                    s.isAttached() && "" === s.getTextContent() && s.remove();
                  });
                }, 20));
            }
            return;
          }
          var _r58 = s.getParent(),
            _u11 = yr(),
            _f10 = s.getTextContentSize(),
            _h8 = ui(),
            _g7 = s.getKey();
          if (
            (s.isToken() && !_i26) ||
            (null !== _h8 && _g7 === _h8 && !_i26) ||
            (Yo(_u11) &&
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
          if (!Yo(_e139) || null === n || null === o)
            return void bi(s, _c12, _e139);
          if ((_e139.setTextNodeRange(s, n, s, o), s.isSegmented())) {
            var _t224 = wo(s.getTextContent());
            (s.replace(_t224), (s = _t224));
          }
          bi(s, _c12, _e139);
        }
      }
    }
    function bi(t, e, n) {
      if ((t.setTextContent(e), Yo(n))) {
        var _e140 = t.getKey();
        var _o79 = !1;
        for (var _r59 of ["anchor", "focus"]) {
          var _s41 = n[_r59];
          "text" === _s41.type &&
            _s41.key === _e140 &&
            ((_s41.offset = Bc(t, _s41.offset, "clamp")), (_o79 = !0));
        }
        _o79 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
      }
    }
    function Mi(t, e, n) {
      var o = e[n] || !1;
      return "any" === o || o === t[n];
    }
    function Ai(t, e) {
      return (
        Mi(t, e, "altKey") &&
        Mi(t, e, "ctrlKey") &&
        Mi(t, e, "shiftKey") &&
        Mi(t, e, "metaKey")
      );
    }
    function Di(t, e, n) {
      if (!Ai(t, n)) return !1;
      if (t.key.toLowerCase() === e.toLowerCase()) return !0;
      if (e.length > 1) return !1;
      if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
      if (t.code.startsWith("Digit") && /^\d$/.test(e))
        return t.code === "Digit" + e;
      var o = "Key" + e.toUpperCase();
      return t.code === o;
    }
    var wi = { ctrlKey: !r, metaKey: r },
      Ii = { altKey: r, ctrlKey: !r };
    function Pi(t) {
      return "Backspace" === t.key;
    }
    function Fi(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        o = n[e];
      if (void 0 !== o) return o;
      var r = t[e];
      if ("string" == typeof r) {
        var _t225 = xa(r);
        return ((n[e] = _t225), _t225);
      }
      return r;
    }
    function Ri(e, n, o, r, s) {
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
    function Li(t, e, n) {
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
    function Ki(t, e) {
      var n = t.offset;
      if ("element" === t.type) {
        return Li(t.getNode(), e, n);
      }
      {
        var _o80 = t.getNode();
        if ((e && 0 === n) || (!e && n === _o80.getTextContentSize())) {
          var _t226 = e ? _o80.getPreviousSibling() : _o80.getNextSibling();
          return null === _t226
            ? Li(
                _o80.getParentOrThrow(),
                e,
                _o80.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t226;
        }
      }
      return null;
    }
    function Bi(t) {
      var e = Ji(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function $i(t, e, n) {
      return os(t, e, n, t);
    }
    function zi(e, n) {
      var o = e._keyToDOMMap.get(n);
      return (void 0 === o && t(75, n), o);
    }
    function Wi(t) {
      var e = t.assignedSlot || t.parentElement;
      if (null !== e) return e;
      var n = t.parentNode;
      return ll(n) ? n.host : null;
    }
    function Ui(t) {
      return ni(t) ? t : Tl(t) ? t.ownerDocument : null;
    }
    function Hi(t) {
      Ur();
      Yr()._updateTags.add(t);
    }
    function ji(t) {
      Ur();
      Yr()._deferred.push(t);
    }
    function Yi(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function Gi(t) {
      var e = Ui(t);
      return e ? e.defaultView : null;
    }
    function Ji(e) {
      var n = e._window;
      return (null === n && t(78), n);
    }
    function Vi(t) {
      return (us(t) && t.isInline()) || (hs(t) && t.isInline());
    }
    function qi(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== oc(e) && us(e)) return e;
        var _t227 = e.getParentOrThrow();
        if (Qi(_t227)) return _t227;
        e = _t227;
      }
      return e;
    }
    function Xi(t) {
      return us(t) && t.isShadowRoot();
    }
    function Qi(t) {
      return _s(t) || Xi(t);
    }
    function Zi(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t, Ws);
      return (
        si(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function tl(e) {
      var n = Yr(),
        o = e.getType(),
        r = js(n, o);
      void 0 === r && t(200, e.constructor.name, o);
      var s = r.replace,
        i = r.replaceWithKlass;
      if (null !== s) {
        var _n107 = s(e),
          _r60 = _n107.constructor;
        return (
          null !== i
            ? _n107 instanceof i ||
              t(
                201,
                i.name,
                i.getType(),
                _r60.name,
                _r60.getType(),
                e.constructor.name,
                o,
              )
            : (_n107 instanceof e.constructor && _r60 !== e.constructor) ||
              t(202, _r60.name, _r60.getType(), e.constructor.name, o),
          _n107.__key === e.__key &&
            t(203, e.constructor.name, o, _r60.name, _r60.getType()),
          _n107
        );
      }
      return e;
    }
    function el(e, n) {
      !_s(e.getParent()) || us(n) || hs(n) || t(99);
    }
    function nl(e) {
      var n = fi(e);
      return (null === n && t(63, e), n);
    }
    function ol(t) {
      if (!t || t.isInline()) return !1;
      if (hs(t)) return !0;
      if (us(t)) {
        if (t.isShadowRoot()) {
          var _e141 = t.getParent();
          return !(us(_e141) && _e141.isShadowRoot());
        }
        return !t.canBeEmpty();
      }
      return !1;
    }
    function rl(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var o = t.parentElement;
      null !== o && o.removeChild(t);
    }
    function sl(t) {
      return n ? (t || window).getSelection() : null;
    }
    function il(t) {
      var e = Gi(t);
      return e ? e.getSelection() : null;
    }
    function ll(t) {
      return vl(t) && "host" in t;
    }
    var cl = [];
    function al(t) {
      var e = t.getRootNode();
      if (e === t || !ll(e)) return cl;
      var n = [e];
      var o = e.host;
      for (;;) {
        var _t228 = o.getRootNode();
        if (_t228 === o || !ll(_t228)) break;
        (n.push(_t228), (o = _t228.host));
      }
      return n;
    }
    function* ul(t) {
      var e = [t];
      var n;
      for (; (n = e.pop()); ) {
        yield* n.querySelectorAll('[data-lexical-editor="true"]');
        var _t229 = (ni(n) ? n : n.ownerDocument).createTreeWalker(
          n,
          NodeFilter.SHOW_ELEMENT,
        );
        var _o81 = void 0;
        for (; (_o81 = _t229.nextNode()); )
          _o81.shadowRoot && e.push(_o81.shadowRoot);
      }
    }
    function fl(t) {
      return null !== t ? t.ownerDocument : document;
    }
    function dl() {
      var t = Vr();
      return fl(null !== t ? t._rootElement : null);
    }
    function hl(t, e) {
      if (null === e || "function" != typeof t.getComposedRanges) return null;
      var n = al(e);
      if (0 === n.length) return null;
      var o = t.getComposedRanges;
      try {
        var _e142 = o.call(t, { shadowRoots: n })[0];
        if (void 0 !== _e142) return _e142;
      } catch (t) {}
      try {
        var _e143 = o.apply(t, n)[0];
        if (void 0 !== _e143) return _e143;
      } catch (t) {}
      return null;
    }
    function gl(t, e) {
      var n = hl(t, e);
      if (null !== n) {
        var _t230 = pl(n);
        if (null !== _t230) return _t230;
      }
      return t.rangeCount > 0 ? t.getRangeAt(0) : null;
    }
    function _l(t, e) {
      var n = hl(t, e);
      return null === n ? t : ml(n, yl(t));
    }
    function pl(t) {
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
    function ml(t, e) {
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
    function yl(t) {
      return t.direction;
    }
    function xl(t) {
      var e = t.getRootNode();
      return ni(e) || ll(e) ? e.activeElement : null;
    }
    function Cl(t) {
      var e = t.activeElement;
      for (; null !== e && null !== e.shadowRoot; ) {
        var _t231 = e.shadowRoot.activeElement;
        if (null === _t231) break;
        e = _t231;
      }
      return e;
    }
    function Sl(t) {
      var e = t.target;
      if (
        null !== e &&
        Tl(e) &&
        null !== e.shadowRoot &&
        "function" == typeof t.composedPath
      ) {
        var _e144 = t.composedPath();
        if (_e144.length > 0) return _e144[0];
      }
      return e;
    }
    function Tl(t) {
      return Nl(t) && 1 === t.nodeType;
    }
    function Nl(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function vl(t) {
      return Nl(t) && 11 === t.nodeType;
    }
    var El =
      /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
    function kl(t) {
      return (
        !(!Tl(t) || !t.style.display.startsWith("inline")) ||
        El.test(t.nodeName)
      );
    }
    var Ol =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function bl(t) {
      return (
        (!Tl(t) || !t.style.display.startsWith("inline")) && Ol.test(t.nodeName)
      );
    }
    function Ml(t) {
      if (hs(t) && !t.isInline()) return !0;
      if (!us(t) || Qi(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || vs(e) || Io(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function Al() {
      return Yr();
    }
    function Dl(t) {
      if (t === void 0) {
        t = Al();
      }
      return t._config.dom || Rs;
    }
    function wl(e, n, o) {
      if (o === void 0) {
        o = Al();
      }
      var r = Dl(o).$getDOMSlot(e, n, o);
      return (us(e) && (Il(r) || t(344, e.getKey(), e.getType())), r);
    }
    function Il(t) {
      return t instanceof _z;
    }
    function Pl(t, e, n) {
      if (n === void 0) {
        n = Al();
      }
      return oi(wl(t, e, n).element);
    }
    var Fl = new WeakMap(),
      Rl = new Map();
    function Ll(e) {
      if (!e._readOnly && e.isEmpty()) return Rl;
      e._readOnly || t(192);
      var n = Fl.get(e);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref41 of t._nodeMap) {
              var _n108 = _ref41[0];
              var _o82 = _ref41[1];
              {
                var _t232 = _o82.__type;
                var _r61 = e.get(_t232);
                (_r61 || ((_r61 = new Map()), e.set(_t232, _r61)),
                  _r61.set(_n108, _o82));
              }
            }
            return e;
          })(e)),
          Fl.set(e, n)),
        n
      );
    }
    function Kl(t) {
      var e = t.constructor.clone(t, Ws);
      return (e.afterCloneFrom(t), e);
    }
    function Bl(t, e) {
      var n = t.getAttribute("data-lexical-indent");
      if (null !== n) {
        var _t233 = parseInt(n, 10);
        if (Number.isFinite(_t233) && _t233 >= 0)
          return void e.setIndent(_t233);
      }
      var o = parseInt(t.style.paddingInlineStart, 10) || 0,
        r = Math.round(o / 40);
      e.setIndent(r);
    }
    function $l(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function zl(t, e) {
      var n = e.style.textAlign;
      return n && n in w ? t.setFormat(n) : t;
    }
    function Wl(t, e) {
      ((t.__lexicalUnmanaged = !0),
        e &&
          void 0 !== e.captureSelection &&
          (t.__lexicalCapturedSelection = e.captureSelection));
    }
    function Ul(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function Hl(t, e) {
      if (e === void 0) {
        e = Al();
      }
      var n = e.isEditable();
      ((t.contentEditable = n ? "true" : "false"),
        n ? (t.__lexicalEditor = e) : delete t.__lexicalEditor);
    }
    function jl(t, e) {
      var n = t;
      for (; null != n; ) {
        if (!0 === n.__lexicalCapturedSelection) return !0;
        if (Tl(n) && n.hasAttribute("data-lexical-slot")) return !1;
        if (void 0 !== gi(n, e)) return !1;
        n = Wi(n);
      }
      return !1;
    }
    function Yl(t, e) {
      return (
        (function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        })(t, e) && t[e] !== _no5[e]
      );
    }
    var Gl = new WeakMap(),
      Jl = Symbol("lexical.synthesizedGetType");
    function Vl(e) {
      var n = Gl.get(e);
      if (n) return n;
      var o =
          null != e.prototype && R in e.prototype ? e.prototype[R]() : void 0,
        r = (function (e) {
          if (!(e === _no5 || e.prototype instanceof _no5)) {
            var _n109 = "<unknown>",
              _o83 = "<unknown>";
            try {
              _n109 = e.getType();
            } catch (t) {}
            try {
              _Bs.version && (_o83 = JSON.parse(_Bs.version));
            } catch (t) {}
            t(290, e.name, _n109, _o83);
          }
          return e === _ds || e === _as4 || e === _no5;
        })(e),
        s = !r && Yl(e, "getType") ? e.getType : void 0,
        i = s && !(Jl in s) ? s.call(e) : void 0;
      var l,
        c = i;
      if (o)
        if (i) l = o[i];
        else {
          for (var _ref43 of Object.entries(o)) {
            var _t234 = _ref43[0];
            var _e145 = _ref43[1];
            ((c = _t234), (l = _e145));
          }
          if (!l)
            for (var _t235 of Object.getOwnPropertySymbols(o)) {
              var _e146 = o[_t235];
              if (_e146) {
                l = _e146;
                break;
              }
            }
        }
      if (!r && c) {
        if (!Yl(e, "getType")) {
          var _t236 = e,
            _n110 = function _n110() {
              return this !== _t236 ? _no5.getType.call(this) : c;
            };
          ((_n110[Jl] = !0), (e.getType = _n110));
        }
        if (
          (Yl(e, "clone") ||
            (e.clone = function (t, n) {
              zs(t);
              var o = new e();
              return (n !== Ws && o.afterCloneFrom(t), o);
            }),
          Yl(e, "importJSON") ||
            (e.importJSON =
              (l && l.$importJSON) ||
              function (t) {
                return new e().updateFromJSON(t);
              }),
          !Yl(e, "importDOM") && l)
        ) {
          var _l20 = l,
            _t237 = _l20.importDOM;
          _t237 &&
            (e.importDOM = function () {
              return _t237;
            });
        }
      }
      var a = { klass: e, ownNodeConfig: l, ownNodeType: c };
      return (Gl.set(e, a), a);
    }
    function* ql(t) {
      for (var _e147 = t; _e147 && (_e147 === _no5 || oo(_e147.prototype)); ) {
        var _t238 = Vl(_e147);
        (yield _t238,
          (_e147 =
            (_t238.ownNodeConfig && _t238.ownNodeConfig["extends"]) ||
            Zl(_e147)));
      }
    }
    var Xl = function Xl(t, e) {
      var n = t;
      for (; null != n && !_s(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function Ql(e, n) {
      var o = [];
      var r = e.__first;
      for (; null !== r; ) {
        var _e148 = null === n ? fi(r) : n.get(r);
        (null == _e148 && t(174), o.push(r), (r = _e148.__next));
      }
      return o;
    }
    function Zl(t) {
      var e = Object.getPrototypeOf(t);
      if ("function" == typeof e && e !== Function.prototype) return e;
      var n = t.prototype && Object.getPrototypeOf(t.prototype);
      return n ? n.constructor : null;
    }
    var tc = new Map();
    function ec(t) {
      return us(t) || hs(t);
    }
    function nc(t) {
      return us(t) || hs(t);
    }
    function oc(t) {
      var e = t.getLatest();
      return nc(e) ? e.__slotHost : null;
    }
    function rc(e) {
      var n = oc(e);
      if (null === n) return null;
      var o = fi(n);
      return (us(o) || hs(o) || t(370), o);
    }
    function sc(t) {
      var e = rc(t);
      if (null === e) return null;
      var n = t.getLatest().__key;
      for (var _ref45 of lc(e)) {
        var _t239 = _ref45[0];
        var _o84 = _ref45[1];
        if (_o84 === n) return _t239;
      }
      return null;
    }
    function ic(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== oc(e)) return e;
        e = e.getParent();
      }
      return null;
    }
    function lc(t) {
      var e = t.getLatest();
      return ec(e) && null !== e.__slots ? e.__slots : tc;
    }
    function cc(t) {
      return Array.from(lc(t).keys());
    }
    function ac(t, e) {
      var n = lc(t).get(e);
      return void 0 === n ? null : fi(n);
    }
    var uc = ["__proto__", "constructor", "prototype"],
      fc = Symbol("slotMapOwner");
    function dc(t) {
      var e = t.__slots;
      return (
        (null !== e && e[fc] === t) ||
          ((e = new Map(e)), (e[fc] = t), (t.__slots = e)),
        e
      );
    }
    var hc = new WeakMap(),
      gc = [];
    function _c(t) {
      for (var _ref47 of ql(t)) {
        var _e149 = _ref47.ownNodeConfig;
        {
          var _t240 = _e149 && _e149.slots;
          if (_t240) return _t240;
        }
      }
      return gc;
    }
    function pc(t) {
      var e = "";
      for (var _n111 of cc(t)) {
        var _o85 = ac(t, _n111);
        null !== _o85 && (e += _o85.getTextContent());
      }
      return e;
    }
    function mc(t, e, n) {
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
    function yc(e) {
      var n = e.__slots;
      if (null === n || n.size < 2) return;
      var o = (function (e) {
        var n = hc.get(e);
        if (void 0 === n) {
          var _o86 = _c(e),
            _r62 = new Map();
          for (var _n112 of _o86)
            (uc.includes(_n112) && t(371, e.name, _n112),
              _r62.has(_n112) && t(372, e.name, _n112),
              _r62.set(_n112, _r62.size));
          ((n = _r62), hc.set(e, n));
        }
        return n;
      })(e.constructor);
      var r = null,
        s = !0;
      for (var _t241 of n.keys()) {
        if (null !== r && mc(r, _t241, o) > 0) {
          s = !1;
          break;
        }
        r = _t241;
      }
      if (s) return;
      var i = Array.from(n).sort(function (_ref48, _ref49) {
        var t = _ref48[0];
        var e = _ref49[0];
        return mc(t, e, o);
      });
      n.clear();
      for (var _ref51 of i) {
        var _t242 = _ref51[0];
        var _e150 = _ref51[1];
        n.set(_t242, _e150);
      }
    }
    function xc(e, n, o) {
      ("__proto__" !== n && "constructor" !== n && "prototype" !== n) ||
        t(373, n);
      var r = e.getLatest();
      if (null !== r.__slots && r.__slots.get(n) === o.getLatest().__key)
        return r;
      ((!us(o) && !hs(o)) || o.isInline()) && t(374, o.__key);
      var s = e.getWritable(),
        i = dc(s),
        l = i.get(n);
      void 0 !== l && Tc(l);
      var c = o.getWritable(),
        a = rc(c);
      if (null !== a) {
        var _t243 = sc(c);
        (null !== _t243 && dc(a.getWritable())["delete"](_t243),
          (c.__slotHost = null));
      }
      return (
        ii(c),
        (c.__slotHost = s.__key),
        i.set(n, c.__key),
        yc(s),
        (function () {
          var t = Al();
          ((t._slotsUsed = !0),
            t._pendingEditorState && (t._pendingEditorState._slotsUsed = !0));
        })(),
        s
      );
    }
    function Cc(t, e) {
      var n = t.getWritable();
      if (null === n.__slots) return n;
      var o = n.__slots.get(e);
      return (void 0 !== o && (Tc(o), dc(n)["delete"](e)), n);
    }
    function Sc(t, e) {}
    function Tc(e) {
      var n = fi(e);
      if (null === n) return;
      var o = n.getWritable();
      (nc(o) || t(377, e), (o.__slotHost = null), o.remove());
    }
    var Nc = { next: "previous", previous: "next" };
    var _vc4 = (function () {
      function vc(t) {
        this.origin = t;
      }
      var _proto18 = vc.prototype;
      _proto18[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return Vc({
            hasNext: wc,
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
        return Lc(this.getNodeAtCaret(), this.direction);
      };
      _proto18.getSiblingCaret = function getSiblingCaret() {
        return Lc(this.origin, this.direction);
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
          var _e151 = _t244.origin.getWritable();
          l.set(_e151.getKey(), _e151);
        }
        for (var _e152 of r) {
          if (l.size > 0) {
            var _n113 = s.getNodeAtCaret();
            if (_n113) {
              if (
                (l["delete"](_n113.getKey()),
                l["delete"](_e152.getKey()),
                _n113.is(_e152) || s.origin.is(_e152))
              );
              else {
                var _t245 = _e152.getParent();
                (_t245 && _t245.is(i) && _e152.remove(), _n113.replace(_e152));
              }
            } else null === _n113 && t(263, Array.from(l).join(" "));
          } else s.insert(_e152);
          s = Lc(_e152, this.direction);
        }
        for (var _t246 of l.values()) _t246.remove();
        return this;
      };
      return vc;
    })();
    var _Ec3 = (function (_vc) {
      function Ec() {
        var _this6;
        for (
          var _len7 = arguments.length, args = new Array(_len7), _key7 = 0;
          _key7 < _len7;
          _key7++
        ) {
          args[_key7] = arguments[_key7];
        }
        return (
          ((_this6 = _vc.call.apply(_vc, [this].concat(args)) || this),
          (_this6.type = "child"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(Ec, _vc);
      var _proto19 = Ec.prototype;
      _proto19.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : zc(t, this.direction);
      };
      _proto19.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Lc(bc(this.getParentAtCaret(), t), this.direction);
      };
      _proto19.getFlipped = function getFlipped() {
        var t = Oc(this.direction);
        return Lc(this.getNodeAtCaret(), t) || zc(this.origin, t);
      };
      _proto19.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto19.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto19.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof Ec &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto19.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return Ec;
    })(_vc4);
    var kc = { root: _s, shadowRoot: Qi };
    function Oc(t) {
      return Nc[t];
    }
    function bc(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return null === t || kc[e](t) ? null : null === oc(t) ? t : null;
    }
    var _Mc3 = (function (_vc2) {
      function Mc() {
        var _this7;
        for (
          var _len8 = arguments.length, args = new Array(_len8), _key8 = 0;
          _key8 < _len8;
          _key8++
        ) {
          args[_key8] = arguments[_key8];
        }
        return (
          ((_this7 = _vc2.call.apply(_vc2, [this].concat(args)) || this),
          (_this7.type = "sibling"),
          babelHelpers.assertThisInitialized(_this7)) ||
          babelHelpers.assertThisInitialized(_this7)
        );
      }
      babelHelpers.inheritsLoose(Mc, _vc2);
      var _proto20 = Mc.prototype;
      _proto20.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Lc(t, this.direction);
      };
      _proto20.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto20.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto20.getChildCaret = function getChildCaret() {
        return us(this.origin) ? zc(this.origin, this.direction) : null;
      };
      _proto20.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Lc(bc(this.getParentAtCaret(), t), this.direction);
      };
      _proto20.getFlipped = function getFlipped() {
        var t = Oc(this.direction);
        return (
          Lc(this.getNodeAtCaret(), t) || zc(this.origin.getParentOrThrow(), t)
        );
      };
      _proto20.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Mc &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto20.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof Mc || t instanceof _Ac3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return Mc;
    })(_vc4);
    var _Ac3 = (function (_vc3) {
      function Ac(t, e) {
        var _this8;
        ((_this8 = _vc3.call(this, t) || this),
          (_this8.type = "text"),
          (_this8.offset = e));
        return _this8;
      }
      babelHelpers.inheritsLoose(Ac, _vc3);
      var _proto21 = Ac.prototype;
      _proto21.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Kc(t, this.direction, this.offset);
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
        return Lc(bc(this.getParentAtCaret(), t), this.direction);
      };
      _proto21.getFlipped = function getFlipped() {
        return Kc(this.origin, Oc(this.direction), this.offset);
      };
      _proto21.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Ac &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto21.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _Mc3 || t instanceof Ac) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto21.getSiblingCaret = function getSiblingCaret() {
        return Lc(this.origin, this.direction);
      };
      return Ac;
    })(_vc4);
    function Dc(t) {
      return t instanceof _Ac3;
    }
    function wc(t) {
      return t instanceof _Mc3;
    }
    function Ic(t) {
      return t instanceof _Ec3;
    }
    var Pc = {
        next: (function (_Ac) {
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
              ((_this9 = _Ac.call.apply(_Ac, [this].concat(args)) || this),
              (_this9.direction = "next"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class, _Ac);
          var _proto22 = _class.prototype;
          _proto22.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto22.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_Ac3),
        previous: (function (_Ac2) {
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
              ((_this0 = _Ac2.call.apply(_Ac2, [this].concat(args)) || this),
              (_this0.direction = "previous"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class3, _Ac2);
          var _proto23 = _class3.prototype;
          _proto23.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto23.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_Ac3),
      },
      Fc = {
        next: (function (_Mc) {
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
              ((_this1 = _Mc.call.apply(_Mc, [this].concat(args)) || this),
              (_this1.direction = "next"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class5, _Mc);
          var _proto24 = _class5.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_Mc3),
        previous: (function (_Mc2) {
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
              ((_this10 = _Mc2.call.apply(_Mc2, [this].concat(args)) || this),
              (_this10.direction = "previous"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class7, _Mc2);
          var _proto25 = _class7.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_Mc3),
      },
      Rc = {
        next: (function (_Ec) {
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
              ((_this11 = _Ec.call.apply(_Ec, [this].concat(args)) || this),
              (_this11.direction = "next"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class9, _Ec);
          var _proto26 = _class9.prototype;
          _proto26.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto26.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_Ec3),
        previous: (function (_Ec2) {
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
              ((_this12 = _Ec2.call.apply(_Ec2, [this].concat(args)) || this),
              (_this12.direction = "previous"),
              babelHelpers.assertThisInitialized(_this12)) ||
              babelHelpers.assertThisInitialized(_this12)
            );
          }
          babelHelpers.inheritsLoose(_class1, _Ec2);
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
        })(_Ec3),
      };
    function Lc(t, e) {
      return t ? new Fc[e](t) : null;
    }
    function Kc(t, e, n) {
      return t ? new Pc[e](t, Bc(t, n)) : null;
    }
    function Bc(t, n, o) {
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
    function $c(t, e) {
      return new _jc(t, e);
    }
    function zc(t, e) {
      return us(t) ? new Rc[e](t) : null;
    }
    function Wc(t) {
      return (t && t.getChildCaret()) || t;
    }
    function Uc(t) {
      return t && Wc(t.getAdjacentCaret());
    }
    var _Hc = (function () {
      function Hc(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto28 = Hc.prototype;
      _proto28.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new Hc(t, e, this.direction);
      };
      _proto28.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto28.getTextSlices = function getTextSlices() {
        var _this16 = this;
        var t = function t(_t247) {
            var e = _this16[_t247].getLatest();
            return Dc(e)
              ? (function (t, e) {
                  var n = t.direction,
                    o = t.origin,
                    r = Bc(o, "focus" === e ? Oc(n) : n);
                  return $c(t, r - t.offset);
                })(e, _t247)
              : null;
          },
          e = t("anchor"),
          n = t("focus");
        if (e && n) {
          var _t248 = e.caret,
            _o87 = n.caret;
          if (_t248.isSameNodeCaret(_o87))
            return [$c(_t248, _o87.offset - _t248.offset), null];
        }
        return [e, n];
      };
      _proto28.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = Dc(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          o = Dc(n),
          r = function r(e) {
            return e.isSameNodeCaret(n) ? null : Uc(e) || e.getParentCaret(t);
          };
        return Vc({
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
      return Hc;
    })();
    var _jc = (function () {
      function jc(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto29 = jc.prototype;
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
        return Kc(t.setTextContent(r.slice(0, n) + r.slice(o)), e, n);
      };
      return jc;
    })();
    function Yc(t) {
      return Jc(t, Lc(yi(), t.direction));
    }
    function Gc(t) {
      return Jc(t, t);
    }
    function Jc(e, n) {
      return (
        e.direction !== n.direction && t(265),
        new _Hc(e, n, e.direction)
      );
    }
    function Vc(t) {
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
    function qc(e, n) {
      var o = ta(e.origin, n.origin);
      switch (
        (null === o && t(275, e.origin.getKey(), n.origin.getKey()), o.type)
      ) {
        case "same": {
          var _t249 = "text" === e.type,
            _o88 = "text" === n.type;
          return _t249 && _o88
            ? (function (t, e) {
                return Math.sign(t - e);
              })(e.offset, n.offset)
            : e.type === n.type
              ? 0
              : _t249
                ? -1
                : _o88
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
          return Xc(o);
      }
    }
    function Xc(t) {
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
    function Qc(t, e) {
      return e.is(t);
    }
    function Zc(t) {
      return us(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function ta(e, n) {
      if (e.is(n)) return { commonAncestor: e, type: "same" };
      var o = new Map();
      for (
        var _Zc = Zc(e), _t250 = _Zc[0], _n114 = _Zc[1];
        _t250;
        _n114 = _t250, _t250 = _t250.getParent()
      )
        o.set(_t250, _n114);
      for (
        var _Zc2 = Zc(n), _r63 = _Zc2[0], _s42 = _Zc2[1];
        _r63;
        _s42 = _r63, _r63 = _r63.getParent()
      ) {
        var _i27 = o.get(_r63);
        if (void 0 !== _i27)
          return null === _i27
            ? (Qc(e, _r63) || t(276),
              { commonAncestor: _r63, type: "ancestor" })
            : null === _s42
              ? (Qc(n, _r63) || t(277),
                { commonAncestor: _r63, type: "descendant" })
              : (((us(_i27) || Qc(e, _i27)) &&
                  (us(_s42) || Qc(n, _s42)) &&
                  _r63.is(_i27.getParent()) &&
                  _r63.is(_s42.getParent())) ||
                  t(278),
                { a: _i27, b: _s42, commonAncestor: _r63, type: "branch" });
      }
      return null;
    }
    function ea(e, n) {
      var o = e.type,
        r = e.key,
        s = e.offset,
        i = nl(e.key);
      return "text" === o
        ? (Io(i) || t(266, i.getType(), r), Kc(i, n, s))
        : (us(i) || t(267, i.getType(), r), ga(i, e.offset, n));
    }
    function na(e, n) {
      var o = n.origin,
        r = n.direction,
        s = "next" === r;
      Dc(n)
        ? e.set(o.getKey(), n.offset, "text")
        : wc(n)
          ? Io(o)
            ? e.set(o.getKey(), Bc(o, r), "text")
            : e.set(
                o.getParentOrThrow().getKey(),
                o.getIndexWithinParent() + (s ? 1 : 0),
                "element",
              )
          : ((Ic(n) && us(o)) || t(268),
            e.set(o.getKey(), s ? 0 : o.getChildrenSize(), "element"));
    }
    function oa(t) {
      var e = mr(),
        n = Yo(e) ? e : gr();
      return (ra(n, t), xi(n), n);
    }
    function ra(t, e) {
      (na(t.anchor, e.anchor), na(t.focus, e.focus));
    }
    function sa(t) {
      var e = t.anchor,
        n = t.focus,
        o = ea(e, "next"),
        r = ea(n, "next"),
        s = qc(o, r) <= 0 ? "next" : "previous";
      return Jc(da(o, s), da(r, s));
    }
    function ia(t) {
      var e = t.direction,
        n = t.origin,
        o = Lc(n, Oc(e)).getNodeAtCaret();
      return o ? Lc(o, e) : zc(n.getParentOrThrow(), e);
    }
    function la(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _o89 = Ic(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _o89;
        _o89 = _o89.getParentCaret(e)
      )
        n.push(ia(_o89));
      return n;
    }
    function ca(t) {
      return !!t && t.origin.isAttached();
    }
    function aa(e, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (e.isCollapsed()) return e;
      var o = "root",
        r = "next";
      var s = n;
      var i = ha(e, r),
        l = la(i.anchor, o),
        c = la(i.focus.getFlipped(), o),
        a = new Set(),
        u = [];
      for (var _t251 of i.iterNodeCarets(o))
        if (Ic(_t251)) a.add(_t251.origin.getKey());
        else if (wc(_t251)) {
          var _e153 = _t251.origin;
          (us(_e153) && !a.has(_e153.getKey())) || u.push(_e153);
        }
      var f = new Set();
      for (var _t252 of u) {
        var _e154 = _t252.getParent();
        (null === _e154 || a.has(_e154.getKey()) || f.add(_e154), ii(_t252));
      }
      for (var _t253 of f)
        !_t253.canBeEmpty() &&
          !Qi(_t253) &&
          _t253.isEmpty() &&
          _t253.isAttached() &&
          _t253.remove();
      for (var _t254 of i.getTextSlices()) {
        if (!_t254) continue;
        var _e155 = _t254.caret.origin,
          _n115 = _e155.getTextContentSize(),
          _o90 = ia(Lc(_e155, r)),
          _i28 = _e155.getMode();
        if (
          (Math.abs(_t254.distance) === _n115 && "removeEmptySlices" === s) ||
          ("token" === _i28 && 0 !== _t254.distance)
        )
          _o90.remove();
        else if (0 !== _t254.distance) {
          s = "removeEmptySlices";
          var _e156 = _t254.removeTextSlice();
          var _n116 = _t254.caret.origin;
          if ("segmented" === _i28) {
            var _t255 = _e156.origin,
              _n117 = wo(_t255.getTextContent())
                .setStyle(_t255.getStyle())
                .setFormat(_t255.getFormat());
            (_o90.replaceOrInsert(_n117), (_e156 = Kc(_n117, r, _e156.offset)));
          }
          (_n116.is(l[0].origin) && (l[0] = _e156),
            _n116.is(c[0].origin) && (c[0] = _e156.getFlipped()));
        }
      }
      var d, h;
      for (var _t256 of l)
        if (ca(_t256)) {
          d = ua(_t256);
          break;
        }
      for (var _t257 of c)
        if (ca(_t257)) {
          h = ua(_t257);
          break;
        }
      var g = (function (t, e, n) {
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
            for (var _o91 = c; _o91 < t.length; _o91++) {
              var _r64 = t[_o91];
              if (Qi(_r64)) return;
              !n && e(_r64) && (n = _r64);
            }
            return n;
          },
          u = a(s, Ml),
          f =
            u &&
            a(i, function (t) {
              return n.has(t.getKey()) && Ml(t);
            });
        if (f && cc(f).length > 0) return null;
        return u && f ? [u, f] : null;
      })(d, h, a);
      if (g) {
        var _t258 = g[0],
          _e157 = g[1];
        zc(_t258, "previous").splice(0, _e157.getChildren());
        var _n118 = _e157.getParent();
        for (_e157.remove(!0); _n118 && _n118.isEmpty(); ) {
          var _t259 = _n118;
          ((_n118 = _n118.getParent()), _t259.remove(!0));
        }
      } else if (h) {
        var _t260 = (function (t) {
            if (Ic(t)) {
              var _e159 = t.origin;
              if (Ml(_e159)) return _e159;
            } else {
              var _e160 = t.getParentAtCaret();
              if (_e160 && Ml(_e160)) return _e160;
            }
            return null;
          })(h),
          _e158 = _t260 && _t260.getParent(),
          _n119 = _t260 && _t260.getParents().findLast(Xi);
        if (
          _t260 &&
          _e158 &&
          !_s(_e158) &&
          _t260.isEmpty() &&
          a.has(_t260.getKey()) &&
          0 === cc(_t260).length &&
          (!_n119 || a.has(_n119.getKey()))
        ) {
          _t260.remove(!0);
          var _n120 = _e158;
          for (; _n120 && !_s(_n120) && _n120.isEmpty(); ) {
            var _t261 = _n120.getParent();
            if (_t261 && _s(_t261) && _t261.getChildrenSize() <= 1) break;
            var _e161 = _n120;
            ((_n120 = _t261), _e161.remove(!0));
          }
        }
      }
      var _ = [d, h].concat(l, c).find(ca);
      if (_) {
        return Gc(da(ua(_), e.direction));
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
    function ua(t) {
      var e = (function (t) {
          var e = t;
          for (; Ic(e); ) {
            var _t262 = Uc(e);
            if (!Ic(_t262)) break;
            e = _t262;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (Io(e.origin)) return Dc(e) ? e : Kc(e.origin, n, n);
      var o = e.getAdjacentCaret();
      return wc(o) && Io(o.origin) ? Kc(o.origin, n, Oc(n)) : e;
    }
    function fa(t) {
      return Dc(t) && t.offset !== Bc(t.origin, t.direction);
    }
    function da(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function ha(t, e) {
      return t.direction === e ? t : Jc(da(t.focus, e), da(t.anchor, e));
    }
    function ga(t, e, n) {
      var o = zc(t, "next");
      for (var _t263 = 0; _t263 < e; _t263++) {
        var _t264 = o.getAdjacentCaret();
        if (null === _t264) break;
        o = _t264;
      }
      return da(o, n);
    }
    function _a(e) {
      var n = e.origin,
        o = e.offset,
        r = e.direction;
      if (o === Bc(n, r)) return e.getSiblingCaret();
      if (o === Bc(n, Oc(r))) return ia(e.getSiblingCaret());
      var _n$splitText2 = n.splitText(o),
        s = _n$splitText2[0];
      return (Io(s) || t(281), da(Lc(s, "next"), r));
    }
    function pa(t, e) {
      return !0;
    }
    function ma(t, _temp) {
      var _ref53 = _temp === void 0 ? {} : _temp,
        _ref53$$copyElementNo = _ref53.$copyElementNode,
        e = _ref53$$copyElementNo === void 0 ? Zi : _ref53$$copyElementNo,
        _ref53$$splitTextPoin = _ref53.$splitTextPointCaretNext,
        n = _ref53$$splitTextPoin === void 0 ? _a : _ref53$$splitTextPoin,
        _ref53$rootMode = _ref53.rootMode,
        o = _ref53$rootMode === void 0 ? "shadowRoot" : _ref53$rootMode,
        _ref53$$shouldSplit = _ref53.$shouldSplit,
        r = _ref53$$shouldSplit === void 0 ? pa : _ref53$$shouldSplit,
        _ref53$removeEmptyDes = _ref53.removeEmptyDestination,
        s = _ref53$removeEmptyDes === void 0 ? !1 : _ref53$removeEmptyDes;
      if (Dc(t)) return n(t);
      var i = t.getParentCaret(o);
      if (i) {
        var _n121 = i.origin;
        if (Ic(t)) {
          var _t265 = ia(i);
          if (s && _n121.isEmpty()) return (_n121.remove(), _t265);
          if (!_n121.canBeEmpty() || !r(_n121, "first")) return _t265;
        }
        var _o92 = (function (t) {
          var e = [];
          for (
            var _n122 = t.getAdjacentCaret();
            _n122;
            _n122 = _n122.getAdjacentCaret()
          )
            e.push(_n122.origin);
          return e;
        })(t);
        (_o92.length > 0 || (!s && _n121.canBeEmpty() && r(_n121, "last"))) &&
          i.insert(e(_n121).splice(0, 0, _o92));
      }
      return i;
    }
    function ya(e, n, o) {
      var r = da(n, "next");
      (Dc(r) &&
        (0 === r.offset
          ? (r = Lc(r.origin, "previous").getFlipped())
          : r.offset === r.origin.getTextContentSize() &&
            (r = Lc(r.origin, "next"))),
        r.origin.is(e) &&
          (wc(r) || t(342, e.getKey(), e.getType()), (r = ia(r))),
        (e.is(r.getNodeAtCaret()) || e.is(r.getFlipped().getNodeAtCaret())) &&
          e.remove(!0));
      for (var _t266 = r; _t266; _t266 = ma(_t266, o)) r = _t266;
      return (
        Dc(r) && t(283),
        r.insert(e.isInline() ? As().append(e) : e),
        da(Lc(e.getLatest(), "next"), n.direction)
      );
    }
    function xa() {
      var e = [];
      for (
        var _len13 = arguments.length, t = new Array(_len13), _key13 = 0;
        _key13 < _len13;
        _key13++
      ) {
        t[_key13] = arguments[_key13];
      }
      for (var _n123 of t)
        if (_n123 && "string" == typeof _n123)
          for (var _ref55 of _n123.matchAll(/\S+/g)) {
            var _t267 = _ref55[0];
            e.push(_t267);
          }
      return e;
    }
    function Ca() {
      for (
        var _len14 = arguments.length, t = new Array(_len14), _key14 = 0;
        _key14 < _len14;
        _key14++
      ) {
        t[_key14] = arguments[_key14];
      }
      return function () {
        for (var _e162 = t.length - 1; _e162 >= 0; _e162--) t[_e162]();
        t.length = 0;
      };
    }
    ((exports.$addUpdateTag = Hi),
      (exports.$applyNodeReplacement = tl),
      (exports.$assumeActiveEditor = function (t) {
        (null !== jr() && null === Fr && (Fr = t), Fr !== t && e(378));
      }),
      (exports.$caretFromPoint = ea),
      (exports.$caretRangeFromSelection = sa),
      (exports.$cloneWithProperties = Kl),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = Kl(t))[Zn] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = qc),
      (exports.$copyNode = Zi),
      (exports.$create = function (t) {
        var e = Al();
        return (
          Ur(),
          new (e.resolveRegisteredNodeAfterReplacements(
            e.getRegisteredNode(t),
          ).klass)()
        );
      }),
      (exports.$createChildrenArray = Ql),
      (exports.$createLineBreakNode = Ns),
      (exports.$createNodeSelection = _r),
      (exports.$createParagraphNode = As),
      (exports.$createPoint = Bo),
      (exports.$createRangeSelection = gr),
      (exports.$createRangeSelectionFromDom = function (t, e) {
        return pr(null, t, e, null);
      }),
      (exports.$createTabNode = Ro),
      (exports.$createTextNode = wo),
      (exports.$extendCaretToRange = Yc),
      (exports.$findMatchingParent = Xl),
      (exports.$formatText = qo),
      (exports.$fullReconcile = Gr),
      (exports.$generateNodesFromRawText = Or),
      (exports.$getAdjacentChildCaret = Uc),
      (exports.$getAdjacentNode = Ki),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          o = t,
          r = Uc(o);
        for (; null === r; ) {
          if ((n--, (r = o.getParentCaret(e)), !r)) return null;
          ((o = r), (r = Uc(o)));
        }
        return r && [r, n];
      }),
      (exports.$getCaretInDirection = da),
      (exports.$getCaretRange = Jc),
      (exports.$getCaretRangeInDirection = ha),
      (exports.$getCharacterOffsets = Qo),
      (exports.$getChildCaret = zc),
      (exports.$getChildCaretAtIndex = ga),
      (exports.$getChildCaretOrSelf = Wc),
      (exports.$getCollapsedCaretRange = Gc),
      (exports.$getCommonAncestor = ta),
      (exports.$getCommonAncestorResultBranchOrder = Xc),
      (exports.$getDOMSlot = wl),
      (exports.$getDOMTextNode = Pl),
      (exports.$getDocument = dl),
      (exports.$getEditor = Al),
      (exports.$getEditorDOMRenderConfig = Dl),
      (exports.$getNearestNodeFromDOMNode = _i),
      (exports.$getNearestRootOrShadowRoot = qi),
      (exports.$getNodeByKey = fi),
      (exports.$getNodeByKeyOrThrow = nl),
      (exports.$getNodeFromDOMNode = di),
      (exports.$getPreviousSelection = yr),
      (exports.$getRoot = yi),
      (exports.$getSelection = mr),
      (exports.$getSiblingCaret = Lc),
      (exports.$getSlot = ac),
      (exports.$getSlotFrame = ic),
      (exports.$getSlotHost = rc),
      (exports.$getSlotNameWithinHost = sc),
      (exports.$getSlotNames = cc),
      (exports.$getState = at),
      (exports.$getStateChange = function (t, e, n) {
        var o = at(t, n, it),
          r = at(e, n, it);
        return n.isEqual(o, r) ? null : [o, r];
      }),
      (exports.$getTextContent = function () {
        var t = mr();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = Bc),
      (exports.$getTextPointCaret = Kc),
      (exports.$getTextPointCaretSlice = $c),
      (exports.$getWritableNodeState = ht),
      (exports.$hasAncestor = Yi),
      (exports.$hasUpdateTag = function (t) {
        return Yr()._updateTags.has(t);
      }),
      (exports.$insertNodeToNearestRootAtCaret = ya),
      (exports.$insertNodes = function (t) {
        var e = mr() || yr();
        (null === e && (e = yi().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = dr),
      (exports.$isChildCaret = Ic),
      (exports.$isDecoratorNode = hs),
      (exports.$isEditorState = function (t) {
        return t instanceof _xs;
      }),
      (exports.$isElementDOMSlot = Il),
      (exports.$isElementNode = us),
      (exports.$isExtendableTextPointCaret = fa),
      (exports.$isInlineElementOrDecoratorNode = Vi),
      (exports.$isInlineFormattable = To),
      (exports.$isLeafNode = function (t) {
        return Io(t) || vs(t) || hs(t);
      }),
      (exports.$isLexicalNode = oo),
      (exports.$isLineBreakNode = vs),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _vc4;
      }),
      (exports.$isNodeSelection = Jo),
      (exports.$isParagraphNode = Ds),
      (exports.$isRangeSelection = Yo),
      (exports.$isRootNode = _s),
      (exports.$isRootOrShadowRoot = Qi),
      (exports.$isSelectionCapturedInDecoratorInput = Gs),
      (exports.$isShadowRootNode = Xi),
      (exports.$isSiblingCaret = wc),
      (exports.$isSlotChild = nc),
      (exports.$isSlotHost = ec),
      (exports.$isTabNode = Lo),
      (exports.$isTextNode = Io),
      (exports.$isTextPointCaret = Dc),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _jc;
      }),
      (exports.$isTokenOrSegmented = ti),
      (exports.$isTokenOrTab = Zs),
      (exports.$markSlotEditable = Hl),
      (exports.$needsBlockCursorBeside = ol),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = jr();
        if (n._readOnly) {
          var _t268 = Ll(n).get(e);
          return _t268 ? Array.from(_t268.values()) : [];
        }
        var o = n._nodeMap,
          r = [];
        for (var _ref57 of o) {
          var _n124 = _ref57[1];
          _n124 instanceof t &&
            _n124.__type === e &&
            _n124.isAttached() &&
            r.push(_n124);
        }
        return r;
      }),
      (exports.$normalizeCaret = ua),
      (exports.$normalizeSelection__EXPERIMENTAL = Nt),
      (exports.$onUpdate = ji),
      (exports.$parseSerializedNode = function (t) {
        return Zr(t, Yr()._nodes);
      }),
      (exports.$removeFromParent = ii),
      (exports.$removeSlot = Cc),
      (exports.$removeTextFromCaretRange = aa),
      (exports.$rewindSiblingCaret = ia),
      (exports.$selectAll = function (t) {
        var e = yi();
        if (Yo(t)) {
          var _e163 = t.anchor,
            _n125 = t.focus,
            _o93 = _e163.getNode();
          if (_s(_o93))
            return (
              _e163.set(_o93.getKey(), 0, "element"),
              _n125.set(_o93.getKey(), _o93.getChildrenSize(), "element"),
              Nt(t),
              t
            );
          var _r65 = _o93.getTopLevelElementOrThrow(),
            _s43 = _r65.getParent();
          if (null === _s43)
            return (
              us(_r65) &&
                (_e163.set(_r65.getKey(), 0, "element"),
                _n125.set(_r65.getKey(), _r65.getChildrenSize(), "element"),
                Nt(t)),
              t
            );
          var _i29 = _s43;
          return (
            _e163.set(_i29.getKey(), 0, "element"),
            _n125.set(_i29.getKey(), _i29.getChildrenSize(), "element"),
            Nt(t),
            t
          );
        }
        {
          var _t269 = e.select(0, e.getChildrenSize());
          return (xi(Nt(_t269)), _t269);
        }
      }),
      (exports.$setCompositionKey = ai),
      (exports.$setDirectionFromDOM = $l),
      (exports.$setFormatFromDOM = zl),
      (exports.$setPointFromCaret = na),
      (exports.$setSelection = xi),
      (exports.$setSelectionFromCaretRange = oa),
      (exports.$setSlot = xc),
      (exports.$setState = function (t, e, n) {
        var o;
        if ((Ur(), "function" == typeof n)) {
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
          var _t270 = _ref59[0];
          var _o94 = _ref59[1];
          "boolean" == typeof _o94 && n.push([_t270, _o94]);
        }
        0 !== n.length &&
          Vo(t, function (t) {
            for (var _ref61 of n) {
              var _e164 = _ref61[0];
              var _o95 = _ref61[1];
              t = ri(t, _e164, _o95 ? A[_e164] : 0);
            }
            return t;
          });
      }),
      (exports.$splitAtPointCaretNext = ma),
      (exports.$splitNode = function (e, n) {
        var o = e.getChildAtIndex(n);
        (null == o && (o = e), Qi(e) && t(102));
        var _r69 = function r(e) {
            var n = e.getParentOrThrow(),
              s = Qi(n),
              i = e !== o || s ? Zi(e) : e;
            if (s)
              return ((us(e) && us(i)) || t(133), e.insertAfter(i), [e, i, i]);
            {
              var _r68 = _r69(n),
                _t271 = _r68[0],
                _o96 = _r68[1],
                _s45 = _r68[2],
                _l21 = e.getNextSiblings();
              return (
                _s45.append.apply(_s45, [i].concat(_l21)),
                [_t271, _o96, i]
              );
            }
          },
          _r67 = _r69(o),
          s = _r67[0],
          i = _r67[1];
        return [s, i];
      }),
      (exports.$updateDOMSelection = Er),
      (exports.$updateRangeSelectionFromCaretRange = ra),
      (exports.ArtificialNode__DO_NOT_USE = _Cs),
      (exports.BEFORE_INPUT_COMMAND = Oe),
      (exports.BLUR_COMMAND = xn),
      (exports.CAN_REDO_COMMAND = pn),
      (exports.CAN_UNDO_COMMAND = mn),
      (exports.CAN_USE_BEFORE_INPUT = i),
      (exports.CAN_USE_DOM = n),
      (exports.CLEAR_EDITOR_COMMAND = gn),
      (exports.CLEAR_HISTORY_COMMAND = _n),
      (exports.CLICK_COMMAND = ke),
      (exports.COLLABORATION_TAG = so),
      (exports.COMMAND_PRIORITY_BEFORE_CRITICAL = -4),
      (exports.COMMAND_PRIORITY_BEFORE_EDITOR = -8),
      (exports.COMMAND_PRIORITY_BEFORE_HIGH = -5),
      (exports.COMMAND_PRIORITY_BEFORE_LOW = -7),
      (exports.COMMAND_PRIORITY_BEFORE_NORMAL = -6),
      (exports.COMMAND_PRIORITY_CRITICAL = 4),
      (exports.COMMAND_PRIORITY_EDITOR = Is),
      (exports.COMMAND_PRIORITY_HIGH = 3),
      (exports.COMMAND_PRIORITY_LOW = 1),
      (exports.COMMAND_PRIORITY_NORMAL = 2),
      (exports.COMPOSITION_END_COMMAND = Ae),
      (exports.COMPOSITION_END_TAG = uo),
      (exports.COMPOSITION_START_COMMAND = Me),
      (exports.COMPOSITION_START_TAG = ao),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = Pe),
      (exports.COPY_COMMAND = fn),
      (exports.CUT_COMMAND = dn),
      (exports.CUT_TAG = "cut"),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = Rs),
      (exports.DELETE_CHARACTER_COMMAND = De),
      (exports.DELETE_LINE_COMMAND = Ke),
      (exports.DELETE_WORD_COMMAND = Le),
      (exports.DRAGEND_COMMAND = un),
      (exports.DRAGOVER_COMMAND = an),
      (exports.DRAGSTART_COMMAND = cn),
      (exports.DROP_COMMAND = sn),
      (exports.DecoratorNode = _ds),
      (exports.ElementNode = _as4),
      (exports.FOCUS_COMMAND = yn),
      (exports.FORMAT_ELEMENT_COMMAND = ln),
      (exports.FORMAT_TEXT_COMMAND = Be),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = ro),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = on),
      (exports.INPUT_COMMAND = be),
      (exports.INSERT_LINE_BREAK_COMMAND = we),
      (exports.INSERT_PARAGRAPH_COMMAND = Ie),
      (exports.INSERT_TAB_COMMAND = nn),
      (exports.INTERNAL_$isBlock = Ml),
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
      (exports.KEY_ARROW_DOWN_COMMAND = Ve),
      (exports.KEY_ARROW_LEFT_COMMAND = Ye),
      (exports.KEY_ARROW_RIGHT_COMMAND = He),
      (exports.KEY_ARROW_UP_COMMAND = Je),
      (exports.KEY_BACKSPACE_COMMAND = Qe),
      (exports.KEY_DELETE_COMMAND = tn),
      (exports.KEY_DOWN_COMMAND = Ue),
      (exports.KEY_ENTER_COMMAND = qe),
      (exports.KEY_ESCAPE_COMMAND = Ze),
      (exports.KEY_MODIFIER_COMMAND = Cn),
      (exports.KEY_SPACE_COMMAND = Xe),
      (exports.KEY_TAB_COMMAND = en),
      (exports.LineBreakNode = _Ss),
      (exports.MOVE_TO_END = je),
      (exports.MOVE_TO_START = Ge),
      (exports.NODE_STATE_DIRECT = it),
      (exports.NODE_STATE_KEY = "$"),
      (exports.NODE_STATE_LATEST = lt),
      (exports.OUTDENT_CONTENT_COMMAND = rn),
      (exports.PASTE_COMMAND = Fe),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _bs),
      (exports.REDO_COMMAND = We),
      (exports.REMOVE_TEXT_COMMAND = Re),
      (exports.RootNode = _gs),
      (exports.SELECTION_CHANGE_COMMAND = ve),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = Ee),
      (exports.SELECT_ALL_COMMAND = hn),
      (exports.SET_TEXT_FORMAT_COMMAND = $e),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = lo),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = io),
      (exports.SKIP_SELECTION_FOCUS_TAG = co),
      (exports.TEXT_TYPE_TO_FORMAT = A),
      (exports.TabNode = _Fo),
      (exports.TextNode = _No2),
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
        var n = xa.apply(void 0, e);
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
      (exports.createEditor = function (e) {
        var n = e || {},
          o = Vr(),
          r = n.theme || {},
          s = void 0 === e ? o : n.parentEditor || null,
          i = n.disableEvents || !1,
          l = ms(),
          c = n.namespace || (null !== s ? s._config.namespace : vi()),
          a = n.editorState,
          u = [_gs, _No2, _Ss, _Fo, _bs, _Cs].concat(n.nodes || []),
          f = n.onError,
          d = n.onWarn,
          h = n.html,
          g = void 0 === n.editable || n.editable;
        var _;
        if (void 0 === e && null !== o) _ = o._nodes;
        else {
          _ = new Map();
          for (var _e165 = 0; _e165 < u.length; _e165++) {
            var _o97 = u[_e165],
              _r70 = null,
              _s46 = null;
            if (_o97 && "object" == typeof _o97) {
              var _t272 = _o97;
              ((_o97 = _t272.replace),
                (_r70 = _t272["with"]),
                (_s46 = _t272.withKlass || null));
            }
            if (
              "function" != typeof _o97 ||
              !_o97.prototype ||
              !(_o97 === _no5 || _o97.prototype instanceof _no5)
            ) {
              var _r71 = "<unknown>";
              try {
                _r71 = JSON.parse(H);
              } catch (t) {}
              t(
                365,
                String(_e165 - u.length + (n.nodes ? n.nodes.length : 0)),
                "function" == typeof _o97
                  ? "" +
                      _o97.name +
                      ("function" == typeof _o97.getType
                        ? " (type " + String(_o97.getType()) + ")"
                        : "")
                  : String(_o97),
                String(_r71),
              );
            }
            Vl(_o97);
            var _i30 = _o97.getType(),
              _l22 = Fs(_o97);
            _.set(_i30, {
              exportDOM: h && h["export"] ? h["export"].get(_o97) : void 0,
              klass: _o97,
              replace: _r70,
              replaceWithKlass: _s46,
              sharedNodeState: ut(u[_e165]),
              transforms: _l22,
            });
          }
        }
        var p = new _Bs(
          l,
          s,
          _,
          {
            disableEvents: i,
            dom: babelHelpers["extends"]({}, Rs, e && e.dom),
            namespace: c,
            theme: r,
          },
          f || console.error,
          d || ws,
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
            (t.registerCommand(Oe, Kn, Is),
              t.registerCommand(be, Bn, Is),
              t.registerCommand(Me, $n, Is),
              t.registerCommand(Ae, zn, Is),
              t.registerCommand(Ue, Hn, Is));
          })(p),
          p
        );
      }),
      (exports.createRefCountedRegistry = Sn),
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
      (exports.findAllLexicalElementsDeep = ul),
      (exports.flipDirection = Oc),
      (exports.getActiveElement = xl),
      (exports.getActiveElementDeep = Cl),
      (exports.getComposedEventTarget = Sl),
      (exports.getComposedStaticRange = hl),
      (exports.getDOMOwnerDocument = Ui),
      (exports.getDOMSelection = sl),
      (exports.getDOMSelectionFromTarget = il),
      (exports.getDOMSelectionPoints = _l),
      (exports.getDOMSelectionRange = gl),
      (exports.getDOMSelectionRangeAndPoints = function (t, e) {
        var _pl;
        var n = hl(t, e);
        if (null === n)
          return {
            points: t,
            range: t.rangeCount > 0 ? t.getRangeAt(0) : null,
          };
        var o =
          (_pl = pl(n)) != null
            ? _pl
            : t.rangeCount > 0
              ? t.getRangeAt(0)
              : null;
        return { points: ml(n, yl(t)), range: o };
      }),
      (exports.getDOMShadowRoots = al),
      (exports.getDOMTextNode = oi),
      (exports.getDeclaredSlots = _c),
      (exports.getEditorPropertyFromDOMNode = Qs),
      (exports.getNearestEditorFromDOMNode = Xs),
      (exports.getParentElement = Wi),
      (exports.getRegisteredNode = js),
      (exports.getRegisteredNodeOrThrow = Hs),
      (exports.getRegisteredSubtypeMap = function (t) {
        var e = new Map(),
          n = new Map();
        for (var _o98 of t) {
          var _Vl2 = Vl(_o98),
            _t273 = _Vl2.ownNodeType;
          _t273 && (n.set(_t273, _o98), e.set(_t273, new Set()));
        }
        for (var _ref63 of n) {
          var _t274 = _ref63[0];
          var _o99 = _ref63[1];
          for (var _ref65 of ql(_o99)) {
            var _n126 = _ref65.ownNodeType;
            {
              var _o100 = _n126 && e.get(_n126);
              _o100 && _o100.add(_t274);
            }
          }
        }
        return e;
      }),
      (exports.getRootOwnerDocument = fl),
      (exports.getStaticNodeConfig = Vl),
      (exports.getStyleObjectFromCSS = ho),
      (exports.getTextDirection = function (t) {
        return b.test(t) ? "rtl" : M.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = Fs),
      (exports.isBlockDomNode = bl),
      (exports.isCurrentlyReadOnlyMode = Wr),
      (exports.isDOMCapturingSelection = jl),
      (exports.isDOMDocumentNode = ni),
      (exports.isDOMNode = Nl),
      (exports.isDOMShadowRoot = ll),
      (exports.isDOMTextNode = ei),
      (exports.isDOMUnmanaged = Ul),
      (exports.isDocumentFragment = vl),
      (exports.isExactShortcutMatch = Di),
      (exports.isHTMLAnchorElement = function (t) {
        return Tl(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = Tl),
      (exports.isHTMLTableCellElement = function (t) {
        return Tl(t) && ("TD" === t.tagName || "TH" === t.tagName);
      }),
      (exports.isHTMLTableRowElement = function (t) {
        return Tl(t) && "TR" === t.tagName;
      }),
      (exports.isInlineDomNode = kl),
      (exports.isLastChildInBlockNode = ks),
      (exports.isLexicalEditor = qs),
      (exports.isModifierMatch = Ai),
      (exports.isOnlyChildInBlockNode = Es),
      (exports.isSelectionCapturedInDecoratorInput = Js),
      (exports.isSelectionWithinEditor = Vs),
      (exports.iterStaticNodeConfigChain = ql),
      (exports.makeStepwiseIterator = Vc),
      (exports.mergeRegister = Ca),
      (exports.mountSlotContainer = function (t, e, n, o) {
        var r = t.read("latest", function () {
          var o = fi(e);
          return null !== o
            ? (function (t, e, n) {
                if (n === void 0) {
                  n = Al();
                }
                var o = ac(t, e);
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
      (exports.normalizeClassNames = xa),
      (exports.registerEventListener = Tn),
      (exports.registerEventListeners = function (t, e, n) {
        return Ca.apply(
          void 0,
          Object.entries(e).map(function (_ref66) {
            var e = _ref66[0],
              o = _ref66[1];
            return Tn(t, e, o, n);
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
        var n = xa.apply(void 0, e);
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(_t$classList3, n);
      }),
      (exports.removeFromParent = li),
      (exports.resetRandomKey = function () {
        Us = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = _o),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n127 in e) {
          var _o101 = e[_n127];
          null == _o101 ? t.removeProperty(_n127) : go(t, _n127, _o101);
        }
      }),
      (exports.setDOMUnmanaged = Wl),
      (exports.setNodeIndentFromDOM = Bl),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n128 in e)
          if (t[_n128] !== e[_n128]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.stopLexicalPropagation = Jn),
      (exports.toggleTextFormatType = ri),
      (exports.tokenizeRawText = kr),
      (exports.unmountSlotContainer = function (t, e, n) {
        n.style.display = "none";
        var o = t.getElementByKey(e);
        null !== o && n.parentElement !== o && o.insertBefore(n, o.firstChild);
      }));
  },
  null,
);
