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
      return kl()._blockCursorElement;
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
          r = ll().createElement("br");
        if (
          (r.setAttribute("data-lexical-managed-linebreak", "true"),
          n.insertBefore(r, o),
          t)
        ) {
          var _t4 = ll().createElement("img");
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
      if (is(t)) {
        var _i3 = t.getFirstChild();
        for (; null !== _i3; ) {
          var _t1 = _i3.__key;
          (_i3.__parent === e &&
            ((is(_i3) || (Vl(_i3) && null !== _i3.__slots)) &&
              V(_i3, _t1, n, o, r, s),
            n.has(_t1) || s["delete"](_t1),
            r.push(_t1)),
            (_i3 = _i3.getNextSibling()));
        }
      }
      for (var _i4 of Vl(t) && null !== t.__slots ? t.__slots.values() : []) {
        var _t10 = o.get(_i4);
        void 0 !== _t10 &&
          ql(_t10) &&
          _t10.__slotHost === e &&
          ((is(_t10) || (Vl(_t10) && null !== _t10.__slots)) &&
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
        (o && void 0 !== ai(t, n))
      );
    }
    function tt(t, e, n) {
      var o = tl(Ui(n)),
        r = o && ul(o, n._rootElement);
      var s = null,
        i = null;
      null !== r &&
        r.anchorNode === t &&
        ((s = r.anchorOffset), (i = r.focusOffset));
      var l = t.nodeValue;
      null !== l && Ti(e, l, s, i, !1);
    }
    function et(t, e, n) {
      if (Wo(t)) {
        var _e1 = t.anchor.getNode();
        if (_e1.is(n) && t.format !== _e1.getFormat()) return !1;
      }
      return qs(e) && n.isAttached();
    }
    function nt(t, e, n) {
      for (var _o4 = t; _o4 && !Kl(_o4); _o4 = Li(_o4)) {
        var _t11 = ai(_o4, e);
        if (void 0 !== _t11) {
          var _e10 = ii(_t11, n);
          if (_e10) return as(_e10) || !ml(_o4) ? void 0 : [_o4, _e10];
        }
      }
    }
    function ot(t, e, n) {
      q = !0;
      var o = performance.now() - X > 100;
      try {
        os(t, function () {
          var r =
              hr() ||
              (function (t) {
                return t.read("latest", function () {
                  var t = hr();
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
              o && wo(_p) && qs(_h) && et(r, _h, _p) && tt(_h, _p, t);
            else if ("childList" === _d) {
              a = !0;
              var _e11 = _f.addedNodes;
              for (var _n0 = 0; _n0 < _e11.length; _n0++) {
                var _o5 = _e11[_n0],
                  _r3 = li(_o5),
                  _i5 = _o5.parentNode;
                if (
                  !(
                    null == _i5 ||
                    _o5 === c ||
                    null !== _r3 ||
                    Z(_o5, _i5, t) ||
                    (t._slotsUsed &&
                      ml(_o5) &&
                      _o5.hasAttribute("data-lexical-slot")) ||
                    Kl(_o5)
                  )
                ) {
                  if (s) {
                    var _t12 =
                      (ml(_o5) ? _o5.innerText : null) || _o5.nodeValue;
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
          null !== r && (a && gi(r), s && Pi(t) && r.insertRawText(u));
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
      for (var _ref8 of Hl("function" == typeof t ? t : t.replace)) {
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
        : Bs(kl(), t.getType()).sharedNodeState;
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
        o = Wr()._normalizedNodes;
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
          wo(e) &&
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
          wo(n) &&
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
          wo(_o10))
        ) {
          t.set(_o10.__key, _r9 ? _o10.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!is(_o10)) break;
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
            if ((void 0 === _s5 && t(345, r), is(_s5))) {
              var _i6 = Ht.get(r);
              if (void 0 !== _i6 && is(_i6) && _i6.__parent !== _s5.__parent)
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
      is(t) ||
        (void 0 === t[kt] &&
          (t[kt] = wo(t) ? t.__text.length : t.getTextContentSize()));
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
      wo(o) && ((It = o.getFormat()), (Pt = o.getStyle()), (Ft = n));
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
        if ((At._keyToDOMMap["delete"](t), is(n))) {
          var _t16 = Yl(n, Wt);
          Qt(_t16, 0, _t16.length - 1, null);
        }
        if (void 0 !== n) {
          for (var _t17 of le(n).values()) {
            var _e27 = ae(_t17);
            (Xt(_t17, null), null !== _e27 && _e27.remove());
          }
          wi(Jt, wt, Bt, n, "destroyed");
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
        if (fs(t)) return null;
        var n = t.getParent();
        return null === n || (Ji(n) && null === n.__dir) ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function re(t) {
      var e = ll().createElement("div");
      return (
        e.setAttribute("data-lexical-slot", t),
        (e.style.display = "none"),
        e
      );
    }
    function se(t, e, n) {
      e || "false" === t.contentEditable
        ? Bl(n, At)
        : n.removeAttribute("contenteditable");
    }
    function ie(t, e, n) {
      var o = Dt,
        r = Rt();
      Dt = "";
      var s = "";
      var i = as(t);
      for (var _ref18 of n) {
        var _o12 = _ref18[0];
        var _r1 = _ref18[1];
        {
          var _n21 = re(_o12);
          (se(e, i, _n21), e.appendChild(_n21), (Dt = ""));
          var _l2 = Rt();
          (fe(_r1, Ol(t, _n21, At)), Lt(_l2), ce(t, _o12, e, _n21), (s += Dt));
        }
      }
      return (Lt(r), (Dt = o), s);
    }
    function le(t) {
      return Vl(t) && null !== t.__slots ? t.__slots : Gl;
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
      var a = as(e);
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
            (n.insertBefore(_i7, _o13), fe(_s6, Ol(e, _i7, At)));
          } else
            _r10 === _s6
              ? pe(_s6, _i7)
              : (void 0 !== _r10 && Xt(_r10, _i7), fe(_s6, Ol(e, _i7, At)));
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
            var _s7 = ql(_t23) ? _t23.__slotHost : null,
              _i8 = ql(o) ? o.__slotHost : null,
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
          (ci(e, n, t), o.set(t, e));
        })(e, r, At),
        wo(o)
          ? r.setAttribute("data-lexical-text", "true")
          : as(o) &&
            (r.setAttribute("data-lexical-decorator", "true"),
            Ll(r, { captureSelection: !0 })),
        is(o))
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
          if ((de(Yl(o, Ht), o, 0, _i9, Ol(o, r, At)), "" !== _s8)) {
            var _e31 = r.__lexicalTextContent || "";
            ((r.__lexicalTextContent = _s8 + _e31), (Dt = _t25 + _s8 + _e31));
          }
          _n22.size > 0 && (r.__lexicalSlotTextLength = _s8.length);
        }
        var _i0 = o.__format;
        (0 !== _i0 && ne(r, _i0), o.isInline() || he(null, o, r));
      } else {
        var _t26 = o.getTextContent();
        if (as(o)) {
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
        wi(Jt, wt, Bt, o, "created"),
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
        (null !== _n24 && wo(_n24)
          ? null === It &&
            ((It = _n24.getFormat()), (Pt = _n24.getStyle()), (Ft = _n24.__key))
          : is(_n24) && c < r && !_n24.isInline() && (Dt += v),
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
      var o = Ol(e, n, At),
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
                return Cs(_t29)
                  ? "line-break"
                  : as(_t29) && _t29.isInline()
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
                    _a = 0;
                  for (; null !== _o14 && _a < _f2; ) {
                    var _t31 = Ht.get(_o14);
                    if (void 0 === _t31) break;
                    var _e33 = Rt();
                    (pe(_o14, l),
                      wo(_t31) &&
                        null === It &&
                        ((It = _t31.getFormat()),
                        (Pt = _t31.getStyle()),
                        (Ft = _t31.__key)),
                      Lt(_e33),
                      (_o14 = _t31.__next),
                      _a++);
                  }
                  var _d2 = "";
                  for (_o14 = _i1, _a = 0; null !== _o14 && _a < _f2; ) {
                    var _e34 = Ht.get(_o14);
                    if (void 0 === _e34) break;
                    var _n26 = void 0;
                    if (is(_e34)) {
                      var _r12 = At._keyToDOMMap.get(_o14),
                        _s0 = _r12 && _r12.__lexicalTextContent;
                      ("string" != typeof _s0 && t(352, _e34.getType()),
                        (_n26 = _s0));
                    } else _n26 = _e34.getTextContent();
                    ((_d2 += _n26),
                      _a < _f2 - 1 &&
                        is(_e34) &&
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
                          wo(_e37) &&
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
                      if (is(_n28)) {
                        var _r13 = At._keyToDOMMap.get(g[_e38]),
                          _s1 = _r13 && _r13.__lexicalTextContent;
                        ("string" != typeof _s1 && t(350, _n28.getType()),
                          (_o15 = _s1));
                      } else _o15 = _n28.getTextContent();
                      ((N += _o15),
                        _e38 < l - 1 &&
                          is(_n28) &&
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
                  if (is(_e40)) {
                    _r15 = jt.get(_n29);
                    var _s11 = _r15 && _r15.__lexicalTextContent;
                    ("string" != typeof _s11 && t(354, _e40.getType()),
                      (_o17 = _s11));
                  } else _o17 = _e40.getTextContent();
                  ((Dt += _o17), void 0 !== _r15 && Kt(_r15));
                }
                (wo(_e40)
                  ? null === It &&
                    ((It = _e40.getFormat()),
                    (Pt = _e40.getStyle()),
                    (Ft = _e40.__key))
                  : is(_e40) && _o16 < i - 1 && !_e40.isInline() && (Dt += v),
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
            wo(_s13) &&
              null === It &&
              ((It = _s13.getFormat()),
              (Pt = _s13.getStyle()),
              (Ft = _s13.__key));
          } else {
            var _r17 = Yl(e, Wt),
              _c3 = Yl(n, Ht);
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
                      var _t43 = Ri(At, _o18);
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
                  (null !== _i10 && wo(_i10)
                    ? null === It &&
                      ((It = _i10.getFormat()),
                      (Pt = _i10.getStyle()),
                      (Ft = _i10.__key))
                    : is(_i10) && d <= l && !_i10.isInline() && (Dt += v),
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
        })(e, n, Ol(n, o, At)),
        Ji(n) ||
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
          if (wo(_t45))
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
        i = Ri(At, e);
      if (o === r && !s) {
        var _e44;
        if (is(o)) {
          var _n31 = i.__lexicalTextContent;
          ("string" != typeof _n31 && t(355, o.getType()),
            (_e44 = _n31),
            Kt(i));
        } else _e44 = o.getTextContent();
        return ((Dt += _e44), i);
      }
      if (
        (o !== r && s && wi(Jt, wt, Bt, r, "updated"),
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
      if (is(o)) {
        is(r) || t(334, e);
        var _n32 = r.__indent;
        (Vt || _n32 !== o.__indent) && ee(i, _n32);
        var _l4 = r.__format;
        (Vt || _l4 !== o.__format) && ne(i, _l4);
        var _c4 = s && (le(r).size > 0 || le(o).size > 0) ? ue(o, r, i) : "";
        if (s) {
          var _t46 = Dt;
          if ((ge(o, r, i), fs(r) || r.isInline() || he(0, r, i), "" !== _c4)) {
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
          (oe(i, r), fs(r) && !Vt)
        )
          for (var _t47 of r.getChildren())
            if (is(_t47)) {
              oe(Ri(At, _t47.getKey()), _t47);
            }
      } else {
        var _t48 = r.getTextContent();
        if (as(r)) {
          var _t49 = r.decorate(At, Mt);
          (null !== _t49 && me(e, _t49),
            s && (le(r).size > 0 || le(o).size > 0) && ue(o, r, i));
        }
        Dt += _t48;
      }
      if (!qt && fs(r)) {
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
        n = fi(At);
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
        (Gt = n._config.dom || Ds),
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
        (Gt = Ds),
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
      Be = Te("UNDO_COMMAND"),
      ze = Te("REDO_COMMAND"),
      $e = Te("KEYDOWN_COMMAND"),
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
      on = Te("DROP_COMMAND"),
      rn = Te("FORMAT_ELEMENT_COMMAND"),
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
      mn = Te("BLUR_COMMAND"),
      yn = Te("KEY_MODIFIER_COMMAND");
    function xn(t) {
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
    function Cn(t, e, n, o) {
      return (
        t.addEventListener(e, n, o),
        t.removeEventListener.bind(t, e, n, o)
      );
    }
    var Sn = Object.freeze({}),
      Tn = [
        [
          "keydown",
          function (t, e) {
            var n = e._inputState;
            ((n.lastKeyDownTimeStamp = t.timeStamp),
              (n.lastKeyCode = t.key),
              "Backspace" !== t.key && In(n));
            if (e.isComposing()) return;
            Fi(e, $e, t);
          },
        ],
        [
          "pointerdown",
          function (t, e) {
            var n = pl(t),
              o = t.pointerType;
            yl(n) &&
              "touch" !== o &&
              "pen" !== o &&
              0 === t.button &&
              os(e, function () {
                zl(n, e) || (e._inputState.isSelectionChangeFromMouseDown = !0);
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
            var n = e._inputState;
            s
              ? (n.compositionPhase = "ending-firefox")
              : l || (!a && !d)
                ? Fi(e, Me, t)
                : ((n.compositionPhase = "ending-safari"),
                  (n.compositionEndData = t.data));
          },
        ],
        [
          "input",
          function (t, e) {
            t.stopPropagation();
            var n = e._inputState;
            (In(n),
              os(
                e,
                function () {
                  Fn(t, e) || e.dispatchCommand(Oe, t);
                },
                { event: t },
              ),
              (n.unprocessedBeforeInputData = null));
          },
        ],
        [
          "click",
          function (t, e) {
            os(e, function () {
              var n = hr(),
                o = tl(Ui(e)),
                r = gr();
              if (o)
                if (Wo(n)) {
                  var _t52 = n.anchor,
                    _e50 = _t52.getNode();
                  "element" === _t52.type &&
                    0 === _t52.offset &&
                    n.isCollapsed() &&
                    !fs(_e50) &&
                    1 === hi().getChildrenSize() &&
                    _e50.getTopLevelElementOrThrow().isEmpty() &&
                    null !== r &&
                    n.is(r) &&
                    (o.removeAllRanges(), (n.dirty = !0));
                } else if (
                  "touch" === t.pointerType ||
                  "pen" === t.pointerType
                ) {
                  var _n34 = ul(o, e._rootElement).anchorNode;
                  if (ml(_n34) || qs(_n34)) {
                    gi(dr(r, o, e, t));
                  }
                }
              Fi(e, ke, t);
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
            if ("deleteCompositionText" === n || (s && Pi(e))) return;
            if ("insertCompositionText" === n) return;
            os(
              e,
              function () {
                Fn(t, e) || Fi(e, Ee, t);
              },
              { event: t },
            );
          })(t, e);
        },
      ]);
    var Nn = new WeakMap(),
      vn = new WeakMap(),
      kn = xn(function (t) {
        return (
          t.addEventListener("selectionchange", jn),
          function () {
            return t.removeEventListener("selectionchange", jn);
          }
        );
      });
    function En(t, e, n, o, r, s) {
      var l = t.anchor,
        c = t.focus,
        a = l.getNode(),
        u = Wr();
      var f;
      if (void 0 !== s) f = s;
      else {
        var _t53 = tl(Ui(u));
        f = null !== _t53 ? ul(_t53, u._rootElement) : null;
      }
      var d = null !== f ? f.anchorNode : null,
        h = l.key,
        g = u.getElementByKey(h),
        _ = n.length;
      return (
        h !== c.key ||
        !wo(a) ||
        (((!r &&
          (!i || u._inputState.lastBeforeInputInsertTextTimeStamp < o + 50)) ||
          (a.isDirty() && _ < 2) ||
          mi(n)) &&
          l.offset !== c.offset &&
          !a.isComposing()) ||
        Vs(a) ||
        (a.isDirty() && _ > 1) ||
        ((r || !i) && null !== g && !a.isComposing() && d !== Ml(a, g, u)) ||
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
            r = Gs(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!o.canInsertTextBefore() && !e.isComposing()) ||
                r ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (wo(e) || (is(e) && e.isInline())) &&
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
    function On(t, e) {
      return (
        qs(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function bn(e, n, o) {
      var _ul = ul(e, n._rootElement),
        r = _ul.anchorNode,
        s = _ul.anchorOffset,
        i = _ul.focusNode,
        l = _ul.focusOffset,
        c = n._inputState;
      (c.isSelectionChangeFromDOMUpdate &&
        ((c.isSelectionChangeFromDOMUpdate = !1),
        On(r, s) && On(i, l) && !c.postDeleteSelectionToRestore)) ||
        os(n, function () {
          if (!o) return void gi(null);
          if (!Hs(n, r, i)) return;
          var a = hr();
          if (c.postDeleteSelectionToRestore && Wo(a) && a.isCollapsed()) {
            var _t54 = a.anchor,
              _e51 = c.postDeleteSelectionToRestore.anchor;
            ((_t54.key === _e51.key && _t54.offset === _e51.offset + 1) ||
              (1 === _t54.offset &&
                _e51.getNode().is(_t54.getNode().getPreviousSibling()))) &&
              ((a = c.postDeleteSelectionToRestore.clone()), gi(a));
          }
          if (((c.postDeleteSelectionToRestore = null), Wo(a))) {
            var _o23 = a.anchor,
              _u3 = _o23.getNode();
            if (a.isCollapsed()) {
              "Range" === e.type && r === i && (a.dirty = !0);
              var _s15 = Ui(n).event,
                _l5 = _s15 ? _s15.timeStamp : performance.now(),
                _c$collapsedSelection = c.collapsedSelectionFormat,
                _f3 = _c$collapsedSelection.format,
                _d3 = _c$collapsedSelection.style,
                _h3 = _c$collapsedSelection.offset,
                _g3 = _c$collapsedSelection.key,
                _4 = _c$collapsedSelection.timeStamp,
                _p2 = hi(),
                _m = !1 === n.isComposing() && "" === _p2.getTextContent();
              if (_l5 < _4 + 200 && _o23.offset === _h3 && _o23.key === _g3)
                Mn(a, _f3, _d3);
              else if ("text" === _o23.type) (wo(_u3) || t(141), An(a, _u3));
              else if ("element" === _o23.type && !_m) {
                is(_u3) || t(259);
                var _e52 = _o23.getNode();
                _e52.isEmpty()
                  ? (function (t, e) {
                      var n = e.getTextFormat(),
                        o = e.getTextStyle();
                      Mn(t, n, o);
                    })(a, _e52)
                  : Mn(a, a.format, "");
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
                  wo(_e54) &&
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
          Fi(n, Ne, void 0);
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
      var e = Wr()._inputState.lastKeyCode;
      if (null == t || t.length <= 1 || null == e) return;
      var n =
        1 === e.length ? e : "Enter" === e ? "\n" : "Tab" === e ? "\t" : null;
      if (!n) return;
      var o = hr();
      if (!Wo(o) || !o.isCollapsed()) return;
      var r = o.anchor.getNode();
      if (!wo(r)) return;
      var s = o.anchor.offset;
      if (r.getTextContentSize() === s) {
        var _t57 = r.getNextSibling();
        if ("\n" === n) {
          if (Cs(_t57)) _t57.selectEnd();
          else if (!_t57) {
            var _t58 = jl(r, cr),
              _e55 = _t58 && _t58.getNextSibling();
            is(_e55) && _e55.selectStart();
          }
        } else
          "\t" === n
            ? Fo(_t57) && _t57.selectEnd()
            : wo(_t57) && _t57.getTextContent()[0] === n && _t57.select(1, 1);
      } else r.getTextContent()[s] === n && r.select(s + 1, s + 1);
    }
    function In(t) {
      ((t.isInsertTextAfterHandledSelectionCommand = !1),
        null !== t.handledSelectionCommandTimeoutId &&
          (clearTimeout(t.handledSelectionCommandTimeoutId),
          (t.handledSelectionCommandTimeoutId = null)));
    }
    function Pn(t) {
      (In(t),
        (t.isInsertTextAfterHandledSelectionCommand = !0),
        (t.handledSelectionCommandTimeoutId = setTimeout(function () {
          return In(t);
        }, 0)));
    }
    function Fn(t, e) {
      var n = pl(t);
      if (ml(n) && zl(n, e)) return !0;
      var o = e.getRootElement();
      if (null === o) return !1;
      var r = _l(o.ownerDocument);
      return null !== r && o.contains(r) && zl(r, e);
    }
    function Rn(e) {
      var _ref23;
      var n = e.inputType,
        o = wn(e),
        r = Wr(),
        s = r._inputState,
        i = hr();
      if (
        "insertText" === n &&
        e.data &&
        s.isInsertTextAfterHandledSelectionCommand
      ) {
        if ((In(s), e.preventDefault(), Wo(i) && !i.isCollapsed())) {
          var _t59 = i.isBackward() ? i.anchor : i.focus;
          (i.anchor.set(_t59.key, _t59.offset, _t59.type),
            i.focus.set(_t59.key, _t59.offset, _t59.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === i) {
          var _t60 = gr();
          if (!Wo(_t60)) return !0;
          gi(_t60.clone());
        }
        if (Wo(i)) {
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
              (ri(null),
              (s.lastKeyDownTimeStamp = 0),
              setTimeout(function () {
                os(r, function () {
                  ri(null);
                });
              }, 30),
              Wo(i))
            ) {
              var _e56 = i.anchor.getNode();
              (_e56.markDirty(), wo(_e56) || t(142), An(i, _e56));
            }
          } else {
            if (
              (ri(null),
              l &&
                null !== o &&
                !o.collapsed &&
                (i.applyDOMRange(o), !i.isCollapsed()))
            )
              return (e.preventDefault(), i.removeText(), !0);
            e.preventDefault();
            var _t61 = i.anchor.getNode(),
              _c6 = _t61.getTextContent(),
              _a2 = _t61.canInsertTextAfter(),
              _u5 = 0 === i.anchor.offset && i.focus.offset === _c6.length;
            var _d5 = f && _n36 && !_u5 && _a2;
            if (
              (_d5 && i.isCollapsed() && (_d5 = !as(Ii(i.anchor, !0))), !_d5)
            ) {
              Fi(r, Ae, !0);
              var _t62 = hr();
              f &&
                Wo(_t62) &&
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
      if (!Wo(i)) return !0;
      var c = e.data;
      (null !== s.unprocessedBeforeInputData &&
        Si(!1, r, s.unprocessedBeforeInputData),
        (i.dirty && null === s.unprocessedBeforeInputData) ||
          !i.isCollapsed() ||
          fs(i.anchor.getNode()) ||
          null === o ||
          i.applyDOMRange(o),
        (s.unprocessedBeforeInputData = null));
      var a = i.anchor,
        u = i.focus,
        d = a.getNode(),
        h = u.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === c) (e.preventDefault(), Fi(r, we, !1));
        else if (c === v) (e.preventDefault(), Fi(r, De, void 0));
        else if (null == c && e.dataTransfer) {
          var _t63 = e.dataTransfer.getData("text/plain");
          (e.preventDefault(), i.insertRawText(_t63));
        } else
          null != c && En(i, o, c, e.timeStamp, !0)
            ? (e.preventDefault(), Fi(r, Ie, c), Dn(c))
            : (s.unprocessedBeforeInputData = c);
        return ((s.lastBeforeInputInsertTextTimeStamp = e.timeStamp), !0);
      }
      switch ((e.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          Fi(r, Ie, e);
          Dn(
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
          (ri(null), _t64 || Fi(r, Ie, e), zn(_n37));
          break;
        }
        case "insertLineBreak":
          (ri(null), Fi(r, we, !1));
          break;
        case "insertParagraph":
          (ri(null),
            s.isInsertLineBreak && !l
              ? ((s.isInsertLineBreak = !1), Fi(r, we, !1))
              : Fi(r, De, void 0));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          Fi(r, Pe, e);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || is(t) || is(e) || !Gs(t) || !Gs(e);
          })(d, h) && Fi(r, Fe, e);
          break;
        case "deleteByDrag":
          (Bi(io), Fi(r, Fe, e));
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
          Fi(r, Ke, "strikethrough");
          break;
        case "formatBold":
          Fi(r, Ke, "bold");
          break;
        case "formatItalic":
          Fi(r, Ke, "italic");
          break;
        case "formatUnderline":
          Fi(r, Ke, "underline");
          break;
        case "historyUndo":
          Fi(r, Be, void 0);
          break;
        case "historyRedo":
          Fi(r, ze, void 0);
      }
      return !0;
    }
    function Ln(t) {
      var e = Wr(),
        n = e._inputState,
        o = hr(),
        r = t.data,
        l = wn(t);
      var c = !1;
      if (null != r && Wo(o)) {
        var _a3 = tl(Ui(e)),
          _u6 = null !== _a3 ? ul(_a3, e._rootElement) : null,
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
            wo(_h5) &&
            Vs(_h5);
        if (!_d6 && !_g5 && En(o, l, r, t.timeStamp, !1, _u6)) {
          if (((c = !0), "ending-firefox" === n.compositionPhase)) {
            var _t65 = $n(e, r);
            if (((n.compositionPhase = "idle"), _t65))
              return (Bi(co), _i(), !0);
          }
          var _l6 = o.anchor.getNode();
          if (null === _a3 || null === _u6) return !0;
          var _d7 = o.isBackward(),
            _h6 = _d7 ? o.anchor.offset : o.focus.offset,
            _g6 = _d7 ? o.focus.offset : o.anchor.offset;
          (i &&
            !o.isCollapsed() &&
            wo(_l6) &&
            null !== _u6.anchorNode &&
            _l6.getTextContent().slice(0, _h6) +
              r +
              _l6.getTextContent().slice(_h6 + _g6) ===
              Ci(_u6.anchorNode)) ||
            Fi(e, Ie, r);
          var _5 = r.length;
          (s &&
            _5 > 1 &&
            "insertCompositionText" === t.inputType &&
            !e.isComposing() &&
            ((o.anchor.offset -= _5),
            (o._cachedNodes = null),
            (o._cachedIsBackward = null)),
            f && e.isComposing() && ((n.lastKeyDownTimeStamp = 0), ri(null)));
        }
      }
      if (!c) {
        (Si(!1, e, null !== r ? r : void 0),
          "ending-firefox" === n.compositionPhase &&
            ($n(e, r || void 0), Bi(co), (n.compositionPhase = "idle")));
      }
      return (_i(), !0);
    }
    function Kn(t) {
      var e = Wr(),
        n = e._inputState,
        o = hr();
      if (Wo(o) && !e.isComposing()) {
        ((n.compositionPhase = "composing"),
          (n.hadOrphanedCompositionEvents = !1));
        var _r22 = o.anchor,
          _s16 = o.anchor.getNode();
        if (
          (ri(_r22.key),
          Bi(lo),
          t.timeStamp < n.lastKeyDownTimeStamp + 30 ||
            "element" === _r22.type ||
            !o.isCollapsed() ||
            (!f &&
              (_s16.getFormat() !== o.format ||
                (wo(_s16) && _s16.getStyle() !== o.style))) ||
            (wo(_s16) &&
              (Vs(_s16) ||
                (0 === _r22.offset && !_s16.canInsertTextBefore()) ||
                (_r22.offset === _s16.getTextContentSize() &&
                  !_s16.canInsertTextAfter()))))
        ) {
          Fi(e, Ie, k);
          var _t66 = hr();
          Wo(_t66) && ri(_t66.anchor.key);
        }
      }
      return !0;
    }
    function Bn(t) {
      var e = Wr();
      return (
        (e._inputState.compositionPhase = "idle"),
        $n(e, t.data),
        Bi(co),
        !0
      );
    }
    function zn(t) {
      if (null === t) return;
      var e = ii(t);
      if (!wo(e) || "text" === e.getType() || Vs(e) || !e.isAttached()) return;
      var n = hr(),
        o = Wo(n) && n.anchor.key === t ? n.anchor.offset : null,
        r = Ao(e.getTextContent());
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
    function $n(t, e) {
      var n = t._compositionKey;
      if ((ri(null), null !== n && null != e)) {
        if ("" === e) {
          var _e57 = ii(n),
            _o25 = t.getElementByKey(n),
            _r23 = null !== _o25 && wo(_e57) ? Ml(_e57, _o25, t) : null;
          if (null !== _r23 && null !== _r23.nodeValue && wo(_e57)) {
            var _n38 = tl(Ui(t)),
              _o26 = _n38 && ul(_n38, t._rootElement);
            var _s17 = null,
              _i12 = null;
            (null !== _o26 &&
              _o26.anchorNode === _r23 &&
              ((_s17 = _o26.anchorOffset), (_i12 = _o26.focusOffset)),
              Ti(_e57, _r23.nodeValue, _s17, _i12, !0));
          }
          return (zn(n), !1);
        }
        if ("\n" === e[e.length - 1]) {
          var _e58 = hr();
          if (Wo(_e58) || Ho(_e58)) {
            if (Wo(_e58)) {
              var _t68 = _e58.focus;
              _e58.anchor.set(_t68.key, _t68.offset, _t68.type);
            }
            return (Fi(t, Ge, null), zn(n), !1);
          }
        }
        var _o27 = ii(n);
        if (null !== _o27 && wo(_o27) && Vs(_o27)) {
          _o27.markDirty();
          var _t69 = hr(),
            _r24 = _o27.getTextContentSize(),
            _s18 =
              Wo(_t69) && _t69.anchor.key === n ? _t69.anchor.offset : _r24;
          return (_o27.select(_s18, _s18).insertText(e), !0);
        }
      }
      return (Si(!0, t, e), zn(n), !1);
    }
    function Wn(t) {
      var e = Wr(),
        n = e._inputState;
      if (null == t.key) return !0;
      if ("ending-safari" === n.compositionPhase) {
        var _o28 = Mi(t);
        if (
          (_o28 &&
            os(e, function () {
              $n(e, n.compositionEndData);
            }),
          (n.compositionPhase = "idle"),
          (n.compositionEndData = ""),
          _o28)
        )
          return !0;
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
        ((n.isInsertLineBreak = !0), Fi(e, Ge, t));
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
        (t.preventDefault(), (n.isInsertLineBreak = !0), Fi(e, we, !0));
      else if (
        (function (t) {
          return Ei(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
          });
        })(t)
      )
        ((n.isInsertLineBreak = !1), Fi(e, Ge, t));
      else if (
        (function (t) {
          return (
            Ei(t, "Backspace", { shiftKey: "any" }) ||
            (r && Ei(t, "h", { ctrlKey: !0 }))
          );
        })(t)
      )
        Mi(t) ? Fi(e, qe, t) && Pn(n) : (t.preventDefault(), Fi(e, Ae, !0));
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
        (t.preventDefault(), Fi(e, Ke, "bold"));
      else if (
        (function (t) {
          return Ei(t, "u", Oi);
        })(t)
      )
        (t.preventDefault(), Fi(e, Ke, "underline"));
      else if (
        (function (t) {
          return Ei(t, "i", Oi);
        })(t)
      )
        (t.preventDefault(), Fi(e, Ke, "italic"));
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
        (t.preventDefault(), Fi(e, Be, void 0));
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
        var _o29 = e._editorState._selection;
        !(function (t) {
          return Ei(t, "a", Oi);
        })(t)
          ? null === _o29 ||
            Wo(_o29) ||
            (!(function (t) {
              return Ei(t, "c", Oi);
            })(t)
              ? (function (t) {
                  return Ei(t, "x", Oi);
                })(t) && (t.preventDefault(), Fi(e, un, t))
              : (t.preventDefault(), Fi(e, an, t)))
          : (t.preventDefault(), Fi(e, fn, t) && Pn(n));
      }
      return (
        (function (t) {
          return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey;
        })(t) && e.dispatchCommand(yn, t),
        !0
      );
    }
    function Un(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    var Hn = new Map();
    function jn(t) {
      var e = el(t.target);
      if (null === e) return;
      var n = Ki(t.target);
      var o = null,
        r = null;
      var s = null !== n ? vn.get(n) : void 0;
      if (null !== n) {
        if (void 0 !== s) {
          var _t70 = s.editors;
          var _n39 = s.hasShadowEditor;
          if (void 0 === _n39) {
            _n39 = !1;
            for (var _e59 of _t70)
              if (
                null !== _e59._rootElement &&
                nl(_e59._rootElement.getRootNode())
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
              var _l7 = ul(e, _t71).anchorNode;
              if (null !== _l7 && Ys(_l7) === _i13) {
                if (nl(_t71.getRootNode())) {
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
              (ml(_t72) && null !== _t72.shadowRoot) ||
              ((o = Ys(_t72)), null !== o && (r = _t72));
          }
        }
        if (null === o) {
          var _t73 = _l(n);
          o = null !== _t73 ? Ys(_t73) : null;
        }
      }
      if (null === o) return;
      if (o._inputState.isSelectionChangeFromMouseDown) {
        if (void 0 !== s)
          for (var _t74 of s.editors)
            _t74._inputState.isSelectionChangeFromMouseDown = !1;
        os(o, function () {
          var n = gr(),
            s = r != null ? r : ul(e, o._rootElement).anchorNode;
          if (ml(s) || qs(s)) {
            gi(dr(n, e, o, t));
          }
        });
      }
      var i = yi(o),
        l = i[i.length - 1],
        c = l._key,
        a = Hn.get(c),
        u = a || l;
      (u !== o && bn(e, u, !1),
        bn(e, o, !0),
        o !== l ? Hn.set(c, o) : a && Hn["delete"](c));
    }
    function Yn(t) {
      t._lexicalHandled = !0;
    }
    function Jn(t) {
      return !0 === t._lexicalHandled;
    }
    var Gn = function Gn() {};
    function Vn(e) {
      var n = Nn.get(e);
      if (void 0 === n) return void Gn();
      var o = vn.get(n);
      if (void 0 === o) return void Gn();
      Nn["delete"](e);
      var r = Js(e);
      js(r)
        ? (!(function (t) {
            if (null !== t._parentEditor) {
              var _e60 = yi(t),
                _n41 = _e60[_e60.length - 1]._key;
              Hn.get(_n41) === t && Hn["delete"](_n41);
            } else Hn["delete"](t._key);
          })(r),
          o.editors["delete"](r),
          (o.hasShadowEditor = void 0),
          (e.__lexicalEditor = null))
        : r && t(198);
      var s = Un(e);
      for (var _t75 = 0; _t75 < s.length; _t75++) s[_t75]();
      e.__lexicalEventHandles = [];
    }
    function qn(e, n, o) {
      Br();
      var r = e.__key,
        s = e.getParent();
      if (null === s) return void (null !== Xl(e) && t(367, r, String(Xl(e))));
      var i = (function (t) {
        var e = hr();
        if (!Wo(e) || !is(t)) return e;
        var n = e.anchor,
          o = e.focus,
          r = n.getNode(),
          s = o.getNode();
        $i(r, t) && n.set(t.__key, 0, "element");
        $i(s, t) && o.set(t.__key, 0, "element");
        return e;
      })(e);
      var l = !1;
      if (Wo(i) && n) {
        var _t76 = i.anchor,
          _n42 = i.focus;
        (_t76.key === r &&
          (mr(_t76, e, s, e.getPreviousSibling(), e.getNextSibling()),
          (l = !0)),
          _n42.key === r &&
            (mr(_n42, e, s, e.getPreviousSibling(), e.getNextSibling()),
            (l = !0)));
      } else Ho(i) && n && e.isSelected() && e.selectPrevious();
      if (Wo(i) && n && !l) {
        var _t77 = e.getIndexWithinParent();
        (ei(e), _r(i, s, _t77, -1));
      } else ei(e);
      (o || Ji(s) || s.canBeEmpty() || !s.isEmpty() || qn(s, n),
        n && i && fs(s) && s.isEmpty() && s.selectEnd());
    }
    var Xn = Symbol["for"]("ephemeral");
    function Qn(t) {
      return t[Xn] || !1;
    }
    var Zn = { configurable: !0, enumerable: !1, value: void 0, writable: !0 };
    var _to5 = (function () {
      function to(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", Zn),
          Object.defineProperty(this, kt, Zn),
          ti(this, t));
      }
      to.getType = function getType() {
        var _Ul = Ul(this),
          e = _Ul.ownNodeType;
        return (void 0 === e && t(64, this.name), e);
      };
      to.clone = function clone(e) {
        t(65, this.name);
      };
      var _proto6 = to.prototype;
      _proto6.$config = function $config() {
        return {};
      };
      _proto6.config = function config(t, e) {
        var _ref24;
        var n = e["extends"] || Jl(this.constructor);
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
          var _e61 = ii(t);
          if (null === _e61) break;
          t = null !== _e61.__parent ? _e61.__parent : Xl(_e61);
        }
        return !1;
      };
      _proto6.isSelected = function isSelected(t) {
        var _this13 = this;
        var e = t || hr();
        if (null == e) return !1;
        var n = e.getNodes().some(function (t) {
          return t.__key === _this13.__key;
        });
        if (wo(this)) return n;
        if (
          Wo(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t78 = this.getParent();
          if (as(this) && this.isInline() && _t78) {
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
        return null === t ? null : ii(t);
      };
      _proto6.getParentOrThrow = function getParentOrThrow() {
        var e = this.getParent();
        return (null === e && t(66, this.__key), e);
      };
      _proto6.getTopLevelElement = function getTopLevelElement() {
        var e = this;
        for (; null !== e; ) {
          var _n44 = e.getParent();
          if (Ji(_n44) || null !== Xl(e))
            return (is(e) || (e === this && as(e)) || t(194), e);
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
        var e = is(this) ? this : this.getParent(),
          n = is(t) ? t : t.getParent(),
          o = e && n ? Gc(e, n) : null;
        return o ? o.commonAncestor : null;
      };
      _proto6.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto6.isBefore = function isBefore(e) {
        var n = Gc(this, e);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === jc(n)
              : ("same" !== n.type && "ancestor" !== n.type && t(279), !1)))
        );
      };
      _proto6.isParentOf = function isParentOf(t) {
        return $i(t, this);
      };
      _proto6.getNodesBetween = function getNodesBetween(e) {
        var n = this.isBefore(e),
          o = [],
          r = new Set();
        var s = this;
        for (; null !== s; ) {
          var _i14 = s.__key;
          if ((r.has(_i14) || (r.add(_i14), o.push(s)), s === e)) break;
          var _l8 = is(s) ? (n ? s.getFirstChild() : s.getLastChild()) : null;
          if (null !== _l8) {
            s = _l8;
            continue;
          }
          var _c7 = n ? s.getNextSibling() : s.getPreviousSibling();
          if (null !== _c7) {
            s = _c7;
            continue;
          }
          var _a4 = s.getParentOrThrow();
          if ((r.has(_a4.__key) || o.push(_a4), _a4 === e)) break;
          var _u7 = null,
            _f5 = _a4;
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
        var t = Wr()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto6.getLatest = function getLatest() {
        if (Qn(this)) return this;
        var e = ii(this.__key);
        return (null === e && t(113), e);
      };
      _proto6.getWritable = function getWritable() {
        if (Qn(this)) return this;
        Br();
        var t = $r(),
          e = Wr(),
          n = t._nodeMap,
          o = this.__key,
          r = this.getLatest(),
          s = e._cloneNotNeeded,
          i = hr();
        if ((null !== i && i.setCachedNodes(null), s.has(o))) return (oi(r), r);
        var l = Il(r);
        return (s.add(o), oi(l), n.set(o, l), l);
      };
      _proto6.getTextContent = function getTextContent() {
        return uc(this);
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
      to.importJSON = function importJSON(e) {
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
      to.transform = function transform() {
        return null;
      };
      _proto6.remove = function remove(t) {
        qn(this, !0, t);
      };
      _proto6.replace = function replace(e, n) {
        Br();
        var o = hr();
        (null !== o && (o = o.clone()), qi(this, e));
        var r = this.getLatest(),
          s = this.__key,
          i = e.__key,
          l = e.getWritable(),
          c = this.getParentOrThrow().getWritable(),
          a = c.__size,
          u = l.getParent(),
          f = null !== u ? l.getIndexWithinParent() : -1;
        (ei(l), null !== u && Wo(o) && _r(o, u, f, -1));
        var d = r.getPreviousSibling(),
          h = r.getNextSibling(),
          g = r.__prev,
          _ = r.__next,
          p = r.__parent;
        if ((qn(r, !1, !0), null === d)) c.__first = i;
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
          ((is(this) && is(l)) || t(139),
          (m = l.getChildrenSize()),
          l.splice(m, 0, this.getChildren()));
        var y = nc(this);
        if (y.length > 0) {
          (Vl(this) && Vl(l)) || t(368, this.__key, l.__key);
          for (var _t80 of y) {
            var _e62 = oc(this, _t80);
            null !== _e62 && (gc(this, _t80), hc(l, _t80, _e62));
          }
        }
        if (Wo(o)) {
          gi(o);
          var _t81 = o.anchor,
            _e63 = o.focus;
          (_t81.key === s &&
            (n && "element" === _t81.type
              ? _t81.set(l.__key, m + _t81.offset, "element")
              : Bo(_t81, l)),
            _e63.key === s &&
              (n && "element" === _e63.type
                ? _e63.set(l.__key, m + _e63.offset, "element")
                : Bo(_e63, l)));
        }
        return (si() === s && ri(i), l);
      };
      _proto6.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (Br(), qi(this, t));
        var n = this.getWritable(),
          o = t.getWritable();
        _c(this.getParentOrThrow());
        var r = o.getParent(),
          s = hr();
        var i = !1,
          l = !1;
        if (null !== r) {
          var _n45 = t.getIndexWithinParent();
          if (Wo(s)) {
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
          (ei(o), e && Wo(s) && _r(s, r, _n45, -1));
        } else ei(o);
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
          e && Wo(s))
        ) {
          var _t83 = this.getIndexWithinParent();
          _r(s, a, _t83 + 1);
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
        (Br(), qi(this, t));
        var n = this.getWritable(),
          o = t.getWritable();
        _c(this.getParentOrThrow());
        var r = o.__key,
          s = hr(),
          i = o.getParent(),
          l = null !== i ? o.getIndexWithinParent() : -1;
        (ei(o), null !== i && e && Wo(s) && _r(s, i, l, -1));
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
          e && Wo(s))
        ) {
          _r(s, this.getParentOrThrow(), f);
        }
        return t;
      };
      _proto6.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto6.createParentElementNode = function createParentElementNode() {
        return Es();
      };
      _proto6.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto6.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto6.selectPrevious = function selectPrevious(t, e) {
        Br();
        var n = Ql(this);
        if (null !== n) return n.selectPrevious(t, e);
        var o = this.getPreviousSibling(),
          r = this.getParentOrThrow();
        if (null === o) return r.select(0, 0);
        if (is(o)) return o.select();
        if (!wo(o)) {
          var _t84 = o.getIndexWithinParent() + 1;
          return r.select(_t84, _t84);
        }
        return o.select(t, e);
      };
      _proto6.selectNext = function selectNext(t, e) {
        Br();
        var n = Ql(this);
        if (null !== n) return n.selectNext(t, e);
        var o = this.getNextSibling(),
          r = this.getParentOrThrow();
        if (null === o) return r.select();
        if (is(o)) return o.select(0, 0);
        if (!wo(o)) {
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
      return to;
    })();
    function eo(t) {
      return t instanceof _to5;
    }
    var no = "history-merge",
      oo = "collaboration",
      ro = "skip-scroll-into-view",
      so = "skip-dom-selection",
      io = "skip-selection-focus",
      lo = "composition-start",
      co = "composition-end",
      ao = "!important";
    function uo(t) {
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
        var _a5 = t[_f6];
        if (s) "*" === _a5 && "/" === t[_f6 + 1] && ((s = !1), _f6++);
        else if (i) (-1 === u && (u = _f6), (i = !1));
        else if (null === r) {
          if ("/" !== _a5 || "*" !== t[_f6 + 1]) {
            if ('"' !== _a5 && "'" !== _a5) {
              if ("(" !== _a5) {
                if (")" !== _a5) {
                  if (l || ":" !== _a5 || 0 !== c) {
                    if (";" === _a5 && 0 === c) {
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
            } else (-1 === u && (u = _f6), (r = _a5));
          } else
            (-1 !== u &&
              (l ? (o += t.slice(u, _f6)) : (n += t.slice(u, _f6)), (u = -1)),
              (s = !0),
              _f6++);
        } else
          (-1 === u && (u = _f6),
            "\\" === _a5 ? (i = !0) : _a5 === r && (r = null));
      }
      -1 !== u && (l ? (o += t.slice(u, a)) : (n += t.slice(u, a)));
      var f = n.trim(),
        d = o.trim();
      return ("" !== f && "" !== d && (e[f] = d), e);
    }
    function fo(t, e, n) {
      var o = n.trimEnd(),
        r = o.length - 10;
      r >= 0 && o.slice(r).toLowerCase() === ao
        ? t.setProperty(e, o.slice(0, r).trim(), "important")
        : t.setProperty(e, n, "");
    }
    function ho(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var o = uo(n),
        r = uo(e);
      for (var _e66 in r) (delete o[_e66], fo(t, _e66, r[_e66]));
      for (var _e67 in o) t.removeProperty(_e67);
    }
    function go(t, e) {
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
    function _o(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function po(t, e, n, o, r) {
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
      for (var _t86 in A) {
        var _o31 = A[_t86];
        if (((i = Ai(r, _t86)), void 0 !== i))
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
    function mo(t, e, n) {
      var o = n.isComposing(),
        r = t + (o ? N : ""),
        i = kl(),
        l = El(i).$getDOMSlot(n, e, i),
        c = l.getFirstChild();
      if (null === c || c.nodeType !== Node.TEXT_NODE)
        return void l.insertChild(ll().createTextNode(r));
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
    function yo(t, e, n, o, r, s) {
      mo(r, t, e);
      var i = s.theme.text;
      void 0 !== i && po(0, 0, o, t, i);
    }
    function xo(t, e) {
      var n = ll().createElement(e);
      return (n.appendChild(t), n);
    }
    function Co(t) {
      return null != t && !0 === t.__isInlineFormattable;
    }
    var _So2 = (function (_to) {
      function So(t, e) {
        var _this;
        if (t === void 0) {
          t = "";
        }
        ((_this = _to.call(this, e) || this),
          (_this.__text = t),
          (_this.__format = 0),
          (_this.__style = ""),
          (_this.__mode = 0),
          (_this.__detail = 0));
        return _this;
      }
      babelHelpers.inheritsLoose(So, _to);
      So.getType = function getType() {
        return "text";
      };
      So.clone = function clone(t) {
        return new So(t.__text, t.__key);
      };
      var _proto7 = So.prototype;
      _proto7.afterCloneFrom = function afterCloneFrom(t) {
        (_to.prototype.afterCloneFrom.call(this, t),
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
          o = go(0, n),
          r = _o(0, n),
          s = null === o ? r : o,
          i = ll().createElement(s);
        var l = i;
        (this.hasFormat("code") && i.setAttribute("spellcheck", "false"),
          null !== o && ((l = ll().createElement(r)), i.appendChild(l)));
        yo(l, this, 0, n, this.__text, t);
        var c = this.__style;
        return ("" !== c && ho(i.style, c), i);
      };
      _proto7.updateDOM = function updateDOM(e, n, o) {
        var r = this.__text,
          s = e.__format,
          i = this.__format,
          l = go(0, s),
          c = go(0, i),
          a = _o(0, s),
          u = _o(0, i);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _e69 = n.firstChild;
          null == _e69 && t(48);
          var _s21 = ll().createElement(u);
          return (yo(_s21, this, 0, i, r, o), n.replaceChild(_s21, _e69), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && t(49)),
          mo(r, f, this));
        var d = o.theme.text;
        void 0 !== d && s !== i && po(0, s, i, f, d);
        var h = e.__style,
          g = this.__style;
        return (h !== g && ho(n.style, g, h), !1);
      };
      So.importDOM = function importDOM() {
        return {
          "#text": function text() {
            return { conversion: Eo, priority: 0 };
          },
          b: function b() {
            return { conversion: No, priority: 0 };
          },
          code: function code() {
            return { conversion: Mo, priority: 0 };
          },
          em: function em() {
            return { conversion: Mo, priority: 0 };
          },
          i: function i() {
            return { conversion: Mo, priority: 0 };
          },
          mark: function mark() {
            return { conversion: Mo, priority: 0 };
          },
          s: function s() {
            return { conversion: Mo, priority: 0 };
          },
          span: function span() {
            return { conversion: To, priority: 0 };
          },
          strong: function strong() {
            return { conversion: Mo, priority: 0 };
          },
          sub: function sub() {
            return { conversion: Mo, priority: 0 };
          },
          sup: function sup() {
            return { conversion: Mo, priority: 0 };
          },
          u: function u() {
            return { conversion: Mo, priority: 0 };
          },
        };
      };
      So.importJSON = function importJSON(t) {
        return Ao().updateFromJSON(t);
      };
      _proto7.updateFromJSON = function updateFromJSON(t) {
        return _to.prototype.updateFromJSON
          .call(this, t)
          .setTextContent(t.text)
          .setFormat(t.format)
          .setDetail(t.detail)
          .setMode(t.mode)
          .setStyle(t.style);
      };
      _proto7.exportDOM = function exportDOM(e) {
        var _to$prototype$exportD = _to.prototype.exportDOM.call(this, e),
          n = _to$prototype$exportD.element;
        return (
          ml(n) || t(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = xo(n, "b")),
          this.hasFormat("italic") && (n = xo(n, "i")),
          this.hasFormat("strikethrough") && (n = xo(n, "s")),
          this.hasFormat("underline") && (n = xo(n, "u")),
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
          _to.prototype.exportJSON.call(this),
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
        Br();
        var n = t,
          o = e;
        var r = hr(),
          s = this.getTextContent(),
          i = this.__key;
        if ("string" == typeof s) {
          var _t88 = s.length;
          (void 0 === n && (n = _t88), void 0 === o && (o = _t88));
        } else ((n = 0), (o = 0));
        if (!Wo(r)) return ar(i, n, i, o, "text", "text");
        {
          var _t89 = si();
          ((_t89 !== r.anchor.key && _t89 !== r.focus.key) || ri(i),
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
        var c = hr();
        if (o && Wo(c)) {
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
        Br();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var o = e.__key,
          r = si(),
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
        var y = hr();
        if (Wo(y)) {
          var _ref26 = y.isBackward()
              ? [y.focus, y.anchor]
              : [y.anchor, y.focus],
            _t90 = _ref26[0],
            _e72 = _ref26[1];
          ("text" === _t90.type && _t90.key === o && (p = _t90),
            "text" === _e72.type && _e72.key === o && (m = _e72));
        }
        e.isSegmented()
          ? ((f = Ao(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = xt(e, f)),
            (_ = !0))
          : (f = e.setTextContent(a));
        var x = [f];
        for (var _t91 = 1; _t91 < c; _t91++) {
          var _n47 = Ao(i[_t91]);
          ((_n47.__format = d),
            (_n47.__style = h),
            (_n47.__detail = g),
            (_n47.__state = xt(e, _n47)));
          var _s22 = _n47.__key;
          (r === o && ri(_s22), x.push(_n47));
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
            null !== e && oi(e);
            null !== n && oi(n);
          })(this);
          var _t93 = u.getWritable(),
            _e74 = this.getIndexWithinParent();
          (_
            ? (_t93.splice(_e74, 0, x), this.remove())
            : _t93.splice(_e74, 1, x),
            Wo(y) && _r(y, u, _e74, c - 1));
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
        si() === r && ri(o);
        var l = hr();
        if (Wo(l)) {
          var _t94 = l.anchor,
            _s23 = l.focus;
          (null !== _t94 && _t94.key === r && yr(_t94, n, o, e, i),
            null !== _s23 && _s23.key === r && yr(_s23, n, o, e, i));
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
      return babelHelpers.createClass(So, [
        {
          key: "__isInlineFormattable",
          get: function get() {
            return !0;
          },
        },
      ]);
    })(_to5);
    function To(t) {
      return { forChild: Do(t.style), node: null };
    }
    function No(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: Do(e.style, n ? void 0 : "bold"), node: null };
    }
    var vo = new WeakMap();
    function ko(t) {
      if (!ml(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function Eo(e) {
      var n = e;
      null === e.parentElement && t(129);
      var o = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var o = [t];
          for (; null !== n && void 0 === (e = vo.get(n)) && !ko(n); )
            (o.push(n), (n = n.parentNode));
          var r = void 0 === e ? n : e;
          for (var _t95 = 0; _t95 < o.length; _t95++) vo.set(o[_t95], r);
          return r;
        })(n)
      )
        return { node: Nr(o) };
      if (((o = o.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === o))
        return { node: null };
      if (" " === o[0]) {
        var _t96 = n,
          _e75 = !0;
        for (; null !== _t96 && null !== (_t96 = Oo(_t96, !1)); ) {
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
        for (; null !== _t97 && null !== (_t97 = Oo(_t97, !0)); ) {
          if (
            (_t97.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e76 = !1;
            break;
          }
        }
        _e76 && (o = o.slice(0, o.length - 1));
      }
      return "" === o ? { node: null } : { node: Ao(o) };
    }
    function Oo(t, e) {
      var n = t;
      for (;;) {
        var _t98 = void 0;
        for (; null === (_t98 = e ? n.nextSibling : n.previousSibling); ) {
          var _t99 = n.parentElement;
          if (null === _t99) return null;
          n = _t99;
        }
        if (((n = _t98), ml(n))) {
          var _t100 = n.style.display;
          if (
            ("" === _t100 && !Sl(n)) ||
            ("" !== _t100 && !_t100.startsWith("inline"))
          )
            return null;
        }
        var _o33 = n;
        for (; null !== (_o33 = e ? n.firstChild : n.lastChild); ) n = _o33;
        if (qs(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var bo = {
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
    function Mo(t) {
      var e = bo[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: Do(t.style, e), node: null };
    }
    function Ao(t) {
      if (t === void 0) {
        t = "";
      }
      return Vi(new _So2(t));
    }
    function wo(t) {
      return t instanceof _So2;
    }
    function Do(t, e) {
      var n = t.fontWeight,
        o = t.textDecoration.split(" "),
        r = "700" === n || "bold" === n,
        s = o.includes("line-through"),
        i = "italic" === t.fontStyle,
        l = o.includes("underline"),
        c = t.verticalAlign;
      return function (t) {
        return wo(t) || Co(t)
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
    var _Io = (function (_So) {
      function Io(t) {
        var _this2;
        ((_this2 = _So.call(this, "\t", t) || this), (_this2.__detail = 2));
        return _this2;
      }
      babelHelpers.inheritsLoose(Io, _So);
      Io.getType = function getType() {
        return "tab";
      };
      Io.clone = function clone(t) {
        return new Io(t.__key);
      };
      Io.importDOM = function importDOM() {
        return null;
      };
      var _proto8 = Io.prototype;
      _proto8.createDOM = function createDOM(t) {
        var e = _So.prototype.createDOM.call(this, t),
          n = Ai(t.theme, "tab");
        if (void 0 !== n) {
          var _e$classList;
          (_e$classList = e.classList).add.apply(_e$classList, n);
        }
        return e;
      };
      Io.importJSON = function importJSON(t) {
        return Po().updateFromJSON(t);
      };
      _proto8.setTextContent = function setTextContent(t) {
        return _So.prototype.setTextContent.call(this, "\t");
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
      return Io;
    })(_So2);
    function Po() {
      return Vi(new _Io());
    }
    function Fo(t) {
      return t instanceof _Io;
    }
    var _Ro = (function () {
      function Ro(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto9 = Ro.prototype;
      _proto9.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto9.isBefore = function isBefore(t) {
        if (this.key === t.key) return this.offset < t.offset;
        return Hc(ra(Vc(this, "next")), ra(Vc(t, "next"))) < 0;
      };
      _proto9.getNode = function getNode() {
        var e = ii(this.key);
        return (null === e && t(20), e);
      };
      _proto9.set = function set(t, e, n, o) {
        var r = this._selection,
          s = this.key;
        (o && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          Kr() ||
            (si() === s && ri(t),
            null !== r &&
              (r.setCachedNodes(null),
              Wo(r) && (r._cachedIsBackward = null),
              (r.dirty = !0))));
      };
      return Ro;
    })();
    function Lo(t, e, n) {
      return new _Ro(t, e, n);
    }
    function Ko(t, e) {
      var n = e.__key,
        o = t.offset,
        r = "element";
      if (wo(e)) {
        r = "text";
        var _t101 = e.getTextContentSize();
        o > _t101 && (o = _t101);
      } else if (!is(e)) {
        var _t102 = e.getNextSibling();
        if (wo(_t102)) ((n = _t102.__key), (o = 0), (r = "text"));
        else {
          var _t103 = e.getParent();
          _t103 && ((n = _t103.__key), (o = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, o, r);
    }
    function Bo(t, e) {
      if (is(e)) {
        var _n49 = e.getLastDescendant();
        is(_n49) || wo(_n49) ? Ko(t, _n49) : Ko(t, e);
      } else Ko(t, e);
    }
    var _zo = (function () {
      function zo(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto0 = zo.prototype;
      _proto0.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto0.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto0.is = function is(t) {
        if (!Ho(t)) return !1;
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
        return new zo(new Set(this._nodes));
      };
      _proto0.extract = function extract() {
        return this.getNodes();
      };
      _proto0.insertRawText = function insertRawText(t) {};
      _proto0.insertText = function insertText() {};
      _proto0.insertNodes = function insertNodes(t) {
        var e = this.getNodes().filter(function (t) {
            return null === Xl(t);
          }),
          n = e.length;
        if (0 === n) return;
        var o = e[n - 1];
        var r;
        if (wo(o)) r = o.select();
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
          var _e77 = ii(_t106);
          null !== _e77 && n.push(_e77);
        }
        return (Kr() || (this._cachedNodes = n), n);
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
          return null === Xl(t);
        });
        if ((hr() || gr()) === this && t[0]) {
          var _e78 = wc(t[0], "next");
          Xc(Wc(_e78, _e78));
        }
        for (var _e79 of t) _e79.remove();
        $o();
      };
      return zo;
    })();
    function $o() {
      var t = hi();
      if (t.isEmpty()) {
        var _e80 = Es();
        (t.append(_e80), _e80.select());
      }
    }
    function Wo(t) {
      return t instanceof _Uo;
    }
    var _Uo = (function () {
      function Uo(t, e, n, o) {
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
      var _proto1 = Uo.prototype;
      _proto1.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto1.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto1.is = function is(t) {
        return (
          !!Wo(t) &&
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
            if (Oc(_n51)) {
              var _t107 = _n51.origin;
              0 === e.length ? r.add(_t107) : (s.add(_t107), e.push(_t107));
            } else {
              var _t108 = _n51.origin;
              (is(_t108) && s.has(_t108)) || e.push(_t108);
            }
          o && e.push(o.caret.origin);
          if (
            Ec(t.focus) &&
            is(t.focus.origin) &&
            null === t.focus.getNodeAtCaret()
          )
            for (
              var _n52 = Fc(t.focus.origin, "previous");
              Oc(_n52) &&
              r.has(_n52.origin) &&
              !_n52.origin.isEmpty() &&
              _n52.origin.is(e[e.length - 1]);
              _n52 = Lc(_n52)
            )
              (r["delete"](_n52.origin), e.pop());
          for (; e.length > 1; ) {
            var _t109 = e[e.length - 1];
            if (!is(_t109) || s.has(_t109) || _t109.isEmpty() || r.has(_t109))
              break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n53 = ra(t.anchor),
              _o34 = ra(t.anchor.getFlipped()),
              _r27 = function _r27(t) {
                return kc(t) ? t.origin : t.getNodeAtCaret();
              },
              _s24 =
                _r27(_n53) ||
                _r27(_o34) ||
                (t.anchor.getNodeAtCaret() ? _n53.origin : _o34.origin);
            e.push(_s24);
          }
          return e;
        })(la(Zc(this), "next"));
        return (Kr() || (this._cachedNodes = e), e);
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
          _Jo = Jo(this),
          i = _Jo[0],
          l = _Jo[1];
        var c = "",
          a = !0;
        for (var _u8 = 0; _u8 < t.length; _u8++) {
          var _f7 = t[_u8];
          if (is(_f7) && !_f7.isInline()) {
            a || (c += "\n");
            var _t110 = "";
            for (var _e81 of nc(_f7)) {
              var _n54 = oc(_f7, _e81);
              null !== _n54 && (_t110 += _n54.getTextContent());
            }
            "" !== _t110 ? ((c += _t110), (a = !1)) : (a = !_f7.isEmpty());
          } else if (((a = !1), wo(_f7))) {
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
            (!as(_f7) && !Cs(_f7)) ||
              (_f7 === n && this.isCollapsed()) ||
              (c += _f7.getTextContent());
        }
        return c;
      };
      _proto1.applyDOMRange = function applyDOMRange(t) {
        var e = Wr(),
          n = e.getEditorState()._selection,
          o = lr(
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
        return new Uo(
          Lo(t.key, t.offset, t.type),
          Lo(e.key, e.offset, e.type),
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
        this.insertNodes(Nr(t));
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
                i = Ao();
              if ((i.setFormat(n), i.setStyle(o), Os(s))) s.splice(0, 0, [i]);
              else if (null !== s) {
                var _t112 = Ji(r) ? Es().append(i) : i;
                s.insertBefore(_t112);
              } else if (Ji(r)) {
                var _t113 = r.getLastChild();
                is(_t113) && !_t113.isInline() && _t113.isEmpty()
                  ? _t113.append(i)
                  : r.append(Es().append(i));
              } else r.append(i);
              (t.is(e) && e.set(i.__key, 0, "text"), t.set(i.__key, 0, "text"));
            })(i, l, r, s),
          "element" === l.type && qc(l, ra(Vc(l, "next"))));
        var c = i.offset;
        var a = l.offset;
        var u = this.getNodes(),
          f = u.length;
        var d = u[0];
        wo(d) || t(26);
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
          var _t114 = d.getNextSibling();
          var _n55;
          if (
            (wo(_t114) && _t114.canInsertTextBefore() && !Vs(_t114)
              ? (_n55 = _t114)
              : ((_n55 = Ao()),
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
          (Vs(d) ||
            !d.canInsertTextBefore() ||
            (!g.canInsertTextBefore() && null === d.getPreviousSibling()))
        ) {
          var _t115 = d.getPreviousSibling();
          var _n56;
          if (
            (!wo(_t115) || Vs(_t115)
              ? ((_n56 = Ao()),
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
          if (null !== si()) d = d.setMode("normal").setFormat(r).setStyle(s);
          else {
            var _t116 = Ao(d.getTextContent());
            (_t116.setFormat(r), d.replace(_t116), (d = _t116));
          }
        } else if (!this.isCollapsed() && "" !== e) {
          var _t117 = _.getParent();
          if (
            !g.canInsertTextBefore() ||
            !g.canInsertTextAfter() ||
            (is(_t117) &&
              (!_t117.canInsertTextBefore() || !_t117.canInsertTextAfter()))
          )
            return (
              this.insertText(""),
              or(this.anchor, this.focus),
              void this.insertText(e)
            );
        }
        if (1 === f) {
          if (Gs(d)) {
            var _t118 = Ao(e);
            return (_t118.select(), void d.replace(_t118));
          }
          var _t119 = d.getFormat(),
            _n57 = d.getStyle();
          if (c !== a || (_t119 === r && _n57 === s)) {
            if (Fo(d)) {
              var _t120 = Ao(e);
              return (
                _t120.setFormat(r),
                _t120.setStyle(s),
                _t120.select(),
                void d.replace(_t120)
              );
            }
          } else {
            if ("" !== d.getTextContent()) {
              var _t121 = Ao(e);
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
          var _t122 = new Set([].concat(d.getParentKeys(), _.getParentKeys())),
            _n58 = is(d) ? d : d.getParentOrThrow();
          var _o36 = is(_) ? _ : _.getParentOrThrow(),
            _r28 = _;
          if (!_n58.is(_o36) && _o36.isInline())
            do {
              ((_r28 = _o36), (_o36 = _o36.getParentOrThrow()));
            } while (_o36.isInline());
          if (
            ("text" === l.type && (0 !== a || "" === _.getTextContent())) ||
            ("element" === l.type && _.getIndexWithinParent() < a)
          ) {
            if (wo(_) && !Gs(_) && a !== _.getTextContentSize()) {
              if (_.isSegmented()) {
                var _t123 = Ao(_.getTextContent());
                (_.replace(_t123), (_ = _t123));
              }
              (fs(l.getNode()) ||
                "text" !== l.type ||
                (wo(_) ||
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
          var _s25 = _o36.getChildren(),
            _i15 = new Set(u),
            _g7 = _n58.is(_o36),
            _p3 = _n58.isInline() && null === d.getNextSibling() ? _n58 : d;
          for (var _t125 = _s25.length - 1; _t125 >= 0; _t125--) {
            var _e83 = _s25[_t125];
            if (_e83.is(d) || (is(_e83) && _e83.isParentOf(d))) break;
            _e83.isAttached() &&
              (!_i15.has(_e83) || _e83.is(_r28)
                ? _g7 || _p3.insertAfter(_e83, !1)
                : _e83.remove());
          }
          if (!_g7) {
            var _e84 = _o36,
              _n59 = null;
            for (; null !== _e84; ) {
              var _o37 = _e84.getChildren(),
                _r29 = _o37.length;
              ((0 === _r29 || _o37[_r29 - 1].is(_n59)) &&
                (_t122["delete"](_e84.__key), (_n59 = _e84)),
                (_e84 = _e84.getParent()));
            }
          }
          if (Gs(d)) {
            if (c === h) d.select();
            else {
              var _t126 = Ao(e);
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
          for (var _e85 = 1; _e85 < f; _e85++) {
            var _n60 = u[_e85],
              _o38 = _n60.__key;
            _t122.has(_o38) || _n60.remove();
          }
        }
      };
      _proto1.removeText = function removeText() {
        var t = hr() === this;
        (Qc(this, oa(Zc(this))), t && hr() !== this && gi(this));
      };
      _proto1.formatText = function formatText(t, e) {
        if (e === void 0) {
          e = null;
        }
        jo(this, t, e);
      };
      _proto1.insertNodes = function insertNodes(e) {
        var _r30;
        if (0 === e.length) return;
        this.isCollapsed() || this.removeText();
        var n = this.anchor.getNode();
        if ("element" === this.anchor.type && is(n) && null !== Xl(n)) {
          var _n$getFirstChild;
          var _o39 = n.isShadowRoot()
            ? (_n$getFirstChild = n.getFirstChild()) != null
              ? _n$getFirstChild
              : n.append(Es()).getFirstChild()
            : n.getFirstChild();
          if (n.isShadowRoot() && null !== _o39 && !is(_o39)) {
            var _t127 = Es();
            (_o39.insertBefore(_t127), (_o39 = _t127));
          }
          if (null !== _o39) {
            _o39.selectStart();
            var _n61 = hr();
            return (Wo(_n61) || t(369), _n61.insertNodes(e));
          }
        }
        if ("element" === this.anchor.type && Ji(n)) {
          var _t128 = br(e),
            _o40 = _t128.getLastDescendant();
          return (
            n.splice(this.anchor.offset, 0, _t128.getChildren()),
            void (null !== _o40 && _o40.selectEnd())
          );
        }
        var o = (this.isBackward() ? this.focus : this.anchor).getNode(),
          r = jl(o, vl);
        var s = e[e.length - 1];
        if (is(r) && "__language" in r) {
          if ("__language" in e[0]) this.insertText(e[0].getTextContent());
          else {
            var _t129 = kr(this);
            (r.splice(_t129, 0, e), s.selectEnd());
          }
          return;
        }
        if (
          !e.some(function (t) {
            return (is(t) || as(t)) && !t.isInline();
          })
        ) {
          is(r) || t(211, o.constructor.name, o.getType());
          var _n62 = kr(this);
          return (r.splice(_n62, 0, e), void s.selectEnd());
        }
        if (is(r) && null !== Xl(r)) {
          var _t130 = kr(this),
            _n63 = vr(e);
          r.splice(_t130, 0, _n63);
          var _o41 = _n63[_n63.length - 1];
          return void (void 0 !== _o41
            ? _o41.selectEnd()
            : r.select(_t130, _t130));
        }
        if (null === r) {
          var _t131 = br(e),
            _n64 = _t131.getLastDescendant();
          var _o42 = Vc(this.anchor, "next");
          for (var _e86 of _t131.getChildren()) _o42 = da(_e86, _o42);
          return void (null !== _n64 && _n64.selectEnd());
        }
        if (is(r) && !r.isParentRequired() && !Ji(r.getParentOrThrow())) {
          var _t132 = kr(this),
            _n65 = vr(e);
          r.splice(_t132, 0, _n65);
          var _o43 = _n65[_n65.length - 1];
          return void (void 0 !== _o43
            ? _o43.selectEnd()
            : r.select(_t132, _t132));
        }
        var i = br(e),
          l = i.getLastDescendant(),
          c = i.getChildren(),
          a = !is(r) || !r.isEmpty() ? this.insertParagraph() : null;
        a && !r.isAttached() && ((o = this.anchor.getNode()), (r = jl(o, vl)));
        var u = c[c.length - 1];
        var f = c[0];
        var d;
        (is((d = f)) &&
          vl(d) &&
          !d.isEmpty() &&
          is(r) &&
          (!r.isEmpty() || r.canMergeWhenEmpty()) &&
          (is(r) || t(211, o.constructor.name, o.getType()),
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
              for (var _t133 of s) i = i.insertAfter(_t133);
            })(r, f)));
        var h = jl(l, vl);
        (a &&
          is(h) &&
          (a.canMergeWhenEmpty() || vl(u)) &&
          (h.append.apply(h, a.getChildren()), a.remove()),
          is(r) && r.isEmpty() && r.remove(),
          l.selectEnd());
        var g = is(r) ? r.getLastChild() : null;
        Cs(g) && h !== r && g.remove();
      };
      _proto1.insertParagraph = function insertParagraph() {
        var e = this.anchor.getNode();
        if ("element" === this.anchor.type && Ji(e)) {
          var _t134 = Es();
          return (
            e.splice(this.anchor.offset, 0, [_t134]),
            _t134.select(),
            _t134
          );
        }
        var n = kr(this),
          o = jl(this.anchor.getNode(), vl);
        if (null !== o && null !== Xl(o)) return null;
        is(o) || t(213);
        var r = o.getChildAtIndex(n),
          s = r ? [r].concat(r.getNextSiblings()) : [],
          i = o.insertNewAfter(this, !1);
        return i ? (i.append.apply(i, s), i.selectStart(), i) : null;
      };
      _proto1.insertLineBreak = function insertLineBreak(t) {
        var e = xs();
        if ((this.insertNodes([e]), t)) {
          var _t135 = e.getParentOrThrow(),
            _n66 = e.getIndexWithinParent();
          _t135.select(_n66, _n66);
        }
      };
      _proto1.extract = function extract() {
        var _n$splitText;
        var t = [].concat(this.getNodes()),
          e = t.length;
        var n = t[0],
          o = t[e - 1];
        var _Jo2 = Jo(this),
          r = _Jo2[0],
          s = _Jo2[1],
          i = this.isBackward(),
          _ref27 = i ? [this.focus, this.anchor] : [this.anchor, this.focus],
          l = _ref27[0],
          c = _ref27[1],
          _ref28 = i ? [s, r] : [r, s],
          a = _ref28[0],
          u = _ref28[1];
        if (0 === e) return [];
        if (1 === e) {
          if (wo(n) && !this.isCollapsed()) {
            var _t136 = n.splitText(a, u),
              _e87 = 0 === a ? _t136[0] : _t136[1];
            return _e87
              ? (l.set(_e87.getKey(), 0, "text"),
                c.set(_e87.getKey(), _e87.getTextContentSize(), "text"),
                [_e87])
              : [];
          }
          return [n];
        }
        if (
          (wo(n) &&
            (a === n.getTextContentSize()
              ? t.shift()
              : 0 !== a &&
                ((_n$splitText = n.splitText(a)),
                (n = _n$splitText[1]),
                (t[0] = n),
                l.set(n.getKey(), 0, "text"))),
          wo(o))
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
        if (Mr(this, t, e, n)) return;
        var o = "move" === t,
          r = Wr(),
          s = tl(Ui(r));
        if (!s) return;
        var i = r._blockCursorElement,
          l = r._rootElement,
          c = this.focus.getNode();
        if (
          (null === l ||
            null === i ||
            !is(c) ||
            c.isInline() ||
            c.canBeEmpty() ||
            Zi(i, r, l),
          this.dirty)
        ) {
          var _t137 = Ri(r, this.anchor.key),
            _e89 = Ri(r, this.focus.key);
          var _n67 = _t137,
            _o44 = _e89;
          if ("text" === this.anchor.type) {
            var _e90 = this.anchor.getNode();
            _n67 = wo(_e90) ? Ml(_e90, _t137, r) : null;
          }
          if ("text" === this.focus.type) {
            var _t138 = this.focus.getNode();
            _o44 = wo(_t138) ? Ml(_t138, _e89, r) : null;
          }
          _n67 &&
            _o44 &&
            xr(s, _n67, this.anchor.offset, _o44, this.focus.offset);
        }
        if ((qo(s, t, e ? "backward" : "forward", n), s.rangeCount > 0)) {
          var _t139 = cl(s, r._rootElement),
            _n68 = _t139 || s.getRangeAt(0),
            _i16 = this.anchor.getNode(),
            _l9 = fs(_i16) ? _i16 : ji(_i16);
          if ((this.applyDOMRange(_n68), (this.dirty = !0), !o)) {
            Xo(this, e, _l9);
            (_t139
              ? "backward" !== s.direction
              : s.anchorNode === _n68.startContainer &&
                s.anchorOffset === _n68.startOffset) || Vo(this);
          }
        }
        "lineboundary" === n && Mr(this, t, e, n, "decorators");
      };
      _proto1.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            is(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t140 = e.getParent(),
            _n69 =
              e.getNextSibling() ||
              (null === _t140 ? null : _t140.getNextSibling());
          if (is(_n69) && _n69.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto1.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e91 = this.anchor;
          var _n70 = _e91.getNode();
          if (this.forwardDeletion(_e91, _n70, t)) return;
          var _o45 = zc(Vc(_e91, t ? "previous" : "next"));
          if (
            _o45.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            var _t141 = { type: "initial" };
            for (var _e92 of _o45.iterNodeCarets("shadowRoot"))
              if (Oc(_e92)) {
                if (_e92.origin.isInline());
                else {
                  if (_e92.origin.isShadowRoot()) {
                    if ("merge-block" === _t141.type) break;
                    if (
                      is(_o45.anchor.origin) &&
                      _o45.anchor.origin.isEmpty()
                    ) {
                      var _t142 = ra(_e92);
                      (Qc(this, Wc(_t142, _t142)), _o45.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t141.type &&
                    "merge-block" !== _t141.type) ||
                    (_t141 = {
                      block: _t141.block,
                      caret: _e92,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t141.type) break;
                if (Ec(_e92)) {
                  if (is(_e92.origin)) {
                    if (_e92.origin.isInline()) {
                      if (!_e92.origin.isParentOf(_o45.anchor.origin)) break;
                    } else
                      _t141 = { block: _e92.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (as(_e92.origin)) {
                    if (_e92.origin.isIsolated());
                    else if (nc(_e92.origin).length > 0) {
                      if (
                        is(_o45.anchor.origin) &&
                        _o45.anchor.origin.isEmpty()
                      ) {
                        _o45.anchor.origin.remove();
                        var _t143 = fr();
                        (_t143.add(_e92.origin.getKey()), gi(_t143));
                      }
                    } else if (
                      "merge-next-block" === _t141.type &&
                      (_e92.origin.isKeyboardSelectable() ||
                        !_e92.origin.isInline()) &&
                      is(_o45.anchor.origin) &&
                      _o45.anchor.origin.isEmpty()
                    ) {
                      _o45.anchor.origin.remove();
                      var _t144 = fr();
                      (_t144.add(_e92.origin.getKey()), gi(_t144));
                    } else _e92.origin.remove();
                    return;
                  }
                  break;
                }
              }
            if ("merge-block" === _t141.type) {
              var _t145 = _t141,
                _e93 = _t145.caret,
                _n71 = _t145.block;
              if (nc(_n71).length > 0) return;
              return _e93.origin.isEmpty() &&
                !_n71.isEmpty() &&
                _e93.origin.getParent() === _n71.getParent()
                ? void _e93.origin.remove(!0)
                : (Qc(
                    this,
                    Wc(
                      !_e93.origin.isEmpty() && _n71.isEmpty()
                        ? ta(wc(_n71, _e93.direction))
                        : _o45.anchor,
                      _e93,
                    ),
                  ),
                  this.removeText());
            }
            for (var _t146 = _e91.getNode(); null !== _t146; ) {
              if (null !== Xl(_t146)) return;
              if (is(_t146) && _t146.isShadowRoot()) break;
              _t146 = _t146.getParent();
            }
          }
          var _r31 = this.focus;
          if ((Qo(this, t, "character"), this.isCollapsed())) {
            if (t && 0 === _e91.offset && Go(this, _e91.getNode())) return;
          } else {
            var _o46 = "text" === _r31.type ? _r31.getNode() : null;
            if (
              ((_n70 = "text" === _e91.type ? _e91.getNode() : null),
              null !== _o46 && _o46.isSegmented())
            ) {
              var _e94 = _r31.offset,
                _s26 = _o46.getTextContentSize();
              if (_o46.is(_n70) || (t && _e94 !== _s26) || (!t && 0 !== _e94))
                return void tr(_o46, t, _e94);
            } else if (null !== _n70 && _n70.isSegmented()) {
              var _r32 = _e91.offset,
                _s27 = _n70.getTextContentSize();
              if (_n70.is(_o46) || (t && 0 !== _r32) || (!t && _r32 !== _s27))
                return void tr(_n70, t, _r32);
            }
            !(function (t, e) {
              var n = t.anchor,
                o = t.focus,
                r = n.getNode(),
                s = o.getNode();
              if (r === s && "text" === n.type && "text" === o.type) {
                var _t147 = n.offset,
                  _s28 = o.offset,
                  _i17 = _t147 < _s28,
                  _l0 = _i17 ? _t147 : _s28,
                  _c8 = _i17 ? _s28 : _t147,
                  _a6 = _c8 - 1;
                if (_l0 !== _a6) {
                  (function (t) {
                    return !(mi(t) || Zo(t));
                  })(r.getTextContent().slice(_l0, _c8)) &&
                    (e ? o.set(o.key, _a6, o.type) : n.set(n.key, _a6, n.type));
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
            fs(_t148.getParent()) &&
            null === _t148.getPreviousSibling() &&
            Go(this, _t148),
            $o());
        }
      };
      _proto1.deleteLine = function deleteLine(t) {
        var e = rr(this.anchor);
        if (null !== e && as(Ql(e)))
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
          (this.isCollapsed() && Qo(this, t, "lineboundary"),
          this.isCollapsed())
        )
          this.deleteCharacter(t);
        else {
          jl(this.anchor.getNode(), vl) !== jl(this.focus.getNode(), vl)
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
          var _e95 = this.anchor,
            _n72 = _e95.getNode();
          if (this.forwardDeletion(_e95, _n72, t)) return;
          Qo(this, t, "word");
        }
        this.isCollapsed() ? this.deleteCharacter(t) : this.removeText();
      };
      _proto1.isBackward = function isBackward() {
        var t = this._cachedIsBackward;
        if (null !== t) return t;
        var e = this.focus.isBefore(this.anchor);
        return (Kr() || (this._cachedIsBackward = e), e);
      };
      _proto1.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return Uo;
    })();
    function Ho(t) {
      return t instanceof _zo;
    }
    function jo(t, e, n) {
      var _g$splitText, _y$splitText;
      if (n === void 0) {
        n = null;
      }
      if (Ho(t)) {
        for (var _n73 of t.getNodes())
          Co(_n73) && _n73.setFormat(_n73.getFormatFlags(e, null));
        return;
      }
      if (t.isCollapsed()) return (t.toggleFormat(e), void ri(null));
      var o = t.getNodes(),
        r = [];
      for (var _t149 of o) wo(_t149) && r.push(_t149);
      var s = function s(t) {
          for (var _n74 of o)
            if (is(_n74)) {
              var _o47 = _n74.getFormatFlags(e, t);
              _n74.setTextFormat(_o47);
            }
        },
        i = function i(t) {
          for (var _n75 of o)
            !wo(_n75) && Co(_n75) && _n75.setFormat(_n75.getFormatFlags(e, t));
        },
        l = r.length;
      if (0 === l) return (t.toggleFormat(e), ri(null), s(n), void i(n));
      var c = t.anchor,
        a = t.focus,
        u = t.isBackward(),
        f = u ? a : c,
        d = u ? c : a;
      var h = 0,
        g = r[0],
        _ = "element" === f.type ? 0 : f.offset;
      "text" === f.type &&
        _ === g.getTextContentSize() &&
        ((h = 1), (g = r[1]), (_ = 0));
      var p = (g != null ? g : r[0]).getFormatFlags(e, n);
      if ((s(p), i(p), null == g)) return;
      var m = l - 1;
      var y = r[m];
      var x = "text" === d.type ? d.offset : y.getTextContentSize();
      if (g.is(y)) {
        if (_ === x) return;
        if (Vs(g) || (0 === _ && x === g.getTextContentSize())) g.setFormat(p);
        else {
          var _t150 = g.splitText(_, x),
            _e96 = 0 === _ ? _t150[0] : _t150[1];
          (_e96.setFormat(p),
            "text" === f.type && f.set(_e96.__key, 0, "text"),
            "text" === d.type && d.set(_e96.__key, x - _, "text"));
        }
        return void (t.format = p);
      }
      (0 === _ ||
        Vs(g) ||
        ((_g$splitText = g.splitText(_)), (g = _g$splitText[1]), (_ = 0)),
        g.setFormat(p));
      var C = y.getFormatFlags(e, p);
      x > 0 &&
        (x === y.getTextContentSize() ||
          Vs(y) ||
          ((_y$splitText = y.splitText(x)),
          (y = _y$splitText[0]),
          _y$splitText),
        y.setFormat(C));
      for (var _t151 = h + 1; _t151 < m; _t151++) {
        var _n76 = r[_t151],
          _o48 = _n76.getFormatFlags(e, C);
        _n76.setFormat(_o48);
      }
      ("text" === f.type && f.set(g.__key, _, "text"),
        "text" === d.type && d.set(y.__key, x, "text"),
        (t.format = p | C));
    }
    function Yo(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function Jo(t) {
      var e = t.getStartEndPoints();
      if (null === e) return [0, 0];
      var n = e[0],
        o = e[1];
      return "element" === n.type &&
        "element" === o.type &&
        n.key === o.key &&
        n.offset === o.offset
        ? [0, 0]
        : [Yo(n), Yo(o)];
    }
    function Go(t, e) {
      for (var _n77 = e; _n77; _n77 = _n77.getParent()) {
        if (is(_n77)) {
          if (_n77.collapseAtStart(t)) return !0;
          if (Ji(_n77)) break;
        }
        if (_n77.getPreviousSibling()) break;
      }
      return !1;
    }
    function Vo(t) {
      var e = t.focus,
        n = t.anchor,
        o = n.key,
        r = n.offset,
        s = n.type;
      (n.set(e.key, e.offset, e.type, !0), e.set(o, r, s, !0));
    }
    function qo(t, e, n, o) {
      t.modify(e, n, o);
    }
    function Xo(t, e, n) {
      var o = t.getNodes(),
        r = o.filter(function (t) {
          return $i(t, n);
        });
      if (0 === r.length || r.length === o.length) return !1;
      var s = e ? r[0] : r[r.length - 1],
        i = is(s) ? s : s.getParentOrThrow();
      return (e ? i.selectStart() : i.selectEnd(), !0);
    }
    function Qo(t, e, n) {
      if (Mr(t, "extend", e, n)) return;
      var o = Wr(),
        r = tl(Ui(o));
      if (!r || "function" != typeof r.modify) return;
      var s = o._blockCursorElement,
        i = o._rootElement,
        l = t.anchor,
        c = t.focus.getNode();
      null === i ||
        null === s ||
        !is(c) ||
        c.isInline() ||
        c.canBeEmpty() ||
        Zi(s, o, i);
      var a = function a(t) {
          var e = t.getNode(),
            n = o.getElementByKey(t.key);
          return null !== n && "text" === t.type && wo(e) ? Ml(e, n, o) : n;
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
        (xr(r, _, p, _, p),
        qo(r, "move", e ? "backward" : "forward", n),
        0 === r.rangeCount)
      )
        return;
      var m = cl(r, i) || r.getRangeAt(0),
        y = m.startContainer,
        x = m.startOffset;
      if (h && "character" === n && "text" === l.type) {
        var _n78 = e ? 0 : u.getTextContentSize(),
          _o49 = y === f ? x : d !== _n78 ? _n78 : -1;
        if (_o49 >= 0)
          return void (
            _o49 !== d && (t.focus.set(l.key, _o49, "text"), (t.dirty = !0))
          );
      }
      var _ref29 = e ? [y, x, f, d] : [f, d, y, x],
        C = _ref29[0],
        S = _ref29[1],
        T = _ref29[2],
        N = _ref29[3],
        v = fs(u) ? u : ji(u);
      (t.applyDOMRange({
        collapsed: !1,
        endContainer: T,
        endOffset: N,
        startContainer: C,
        startOffset: S,
      }),
        (t.dirty = !0),
        !Xo(t, e, v) && e && Vo(t),
        "lineboundary" === n && Mr(t, "extend", e, n, "decorators"));
    }
    var Zo = (function () {
      try {
        var _t152 = new RegExp("\\p{Emoji}", "u"),
          _e97 = _t152.test.bind(_t152);
        if (_e97("\u2764\ufe0f") && _e97("#\ufe0f\u20e3") && _e97("\u{1f44d}"))
          return _e97;
      } catch (t) {}
      return function () {
        return !1;
      };
    })();
    function tr(t, e, n) {
      var o = t,
        r = o.getTextContent().split(/(?=\s)/g),
        s = r.length;
      var i = 0,
        l = 0;
      for (var _t153 = 0; _t153 < s; _t153++) {
        var _o50 = _t153 === s - 1;
        if (
          ((l = i), (i += r[_t153].length), (e && i === n) || i > n || _o50)
        ) {
          (r.splice(_t153, 1), _o50 && (l = void 0));
          break;
        }
      }
      var c = r.join("").trim();
      "" === c ? o.remove() : (o.setTextContent(c), o.select(l, l));
    }
    function er(e, n, o, r) {
      var s,
        i = n,
        l = !1;
      if (ml(e)) {
        var _c9 = !1;
        var _a7 = e.childNodes,
          _u9 = _a7.length,
          _f8 = r._blockCursorElement;
        (i === _u9 && _u9 > 0 && ((_c9 = !0), (i = _u9 - 1)),
          void 0 !== ai(e, r) || zl(e, r) || (l = !0));
        var _d8 = _a7[i],
          _h7 = !1;
        if (_d8 === _f8) ((_d8 = _a7[i + 1]), (_h7 = !0));
        else if (null !== _f8) {
          var _t154 = _f8.parentNode;
          if (e === _t154) {
            n > Array.prototype.indexOf.call(_t154.children, _f8) && i--;
          }
        }
        if (((s = pi(_d8)), wo(s))) i = Ic(s, _c9 ? "next" : "previous");
        else {
          var _a8 = pi(e);
          if (null === _a8) return null;
          if (is(_a8)) {
            var _u0$resolveChildIndex;
            var _l1 = r.getElementByKey(_a8.getKey());
            null === _l1 && t(214);
            var _u0 = Ol(_a8, _l1, r);
            ((_u0$resolveChildIndex = _u0.resolveChildIndex(_a8, _l1, e, n)),
              (_a8 = _u0$resolveChildIndex[0]),
              (i = _u0$resolveChildIndex[1]),
              is(_a8) || t(215),
              _c9 &&
                i >= _a8.getChildrenSize() &&
                (i = Math.max(0, _a8.getChildrenSize() - 1)));
            var _f9 = _a8.getChildAtIndex(i);
            if (
              is(_f9) &&
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
              var _t155 = _c9
                ? _f9.getLastDescendant()
                : _f9.getFirstDescendant();
              (null === _t155
                ? (_a8 = _f9)
                : ((_f9 = _t155),
                  (_a8 = is(_f9) ? _f9 : _f9.getParentOrThrow())),
                (i = 0));
            }
            wo(_f9)
              ? ((s = _f9),
                (_a8 = null),
                (i = Ic(_f9, _c9 ? "next" : "previous")))
              : _f9 !== _a8 &&
                _c9 &&
                !_h7 &&
                (is(_a8) || t(216),
                (i = Math.min(_a8.getChildrenSize(), i + 1)));
          } else {
            var _t156 = Ql(_a8),
              _o51 = null !== _t156 ? _t156 : _a8,
              _s29 = _o51.getIndexWithinParent(),
              _l10 = r.getElementByKey(_a8.getKey());
            var _c0 = "after";
            if (null !== _l10 && pi(e) === _a8) {
              var _t157 = Ol(_a8, _l10, r);
              _t157.element !== _l10
                ? (_c0 = _t157.resolveLeafPosition(_l10, e, n))
                : 0 === n && as(_a8) && (_c0 = "before");
            }
            ((i = "before" === _c0 ? _s29 : _s29 + 1),
              (_a8 = _o51.getParentOrThrow()));
          }
          if (is(_a8)) return [Lo(_a8.__key, i, "element"), l];
        }
      } else s = pi(e);
      return wo(s) ? [Lo(s.__key, Ic(s, i, "clamp"), "text"), l] : null;
    }
    function nr(t, e, n) {
      var o = t.offset,
        r = t.getNode();
      if (0 === o) {
        var _o52 = r.getPreviousSibling(),
          _s30 = r.getParent();
        if (e) {
          if ((n || !e) && null === _o52 && is(_s30) && _s30.isInline()) {
            var _e98 = _s30.getPreviousSibling();
            wo(_e98) && t.set(_e98.__key, _e98.getTextContent().length, "text");
          }
        } else
          is(_o52) && !n && _o52.isInline()
            ? t.set(_o52.__key, _o52.getChildrenSize(), "element")
            : wo(_o52) &&
              t.set(_o52.__key, _o52.getTextContent().length, "text");
      } else if (o === r.getTextContent().length) {
        var _o53 = r.getNextSibling(),
          _s31 = r.getParent();
        if (e && is(_o53) && _o53.isInline()) t.set(_o53.__key, 0, "element");
        else if (
          (n || e) &&
          null === _o53 &&
          is(_s31) &&
          _s31.isInline() &&
          !_s31.canInsertTextAfter() &&
          _s31.getTextContentSize() > 1
        ) {
          var _e99 = _s31.getNextSibling();
          wo(_e99) && t.set(_e99.__key, 0, "text");
        }
      }
    }
    function or(t, e, n) {
      if ("text" === t.type && "text" === e.type) {
        var _n79 = t.isBefore(e),
          _o54 = t.is(e);
        (nr(t, _n79, _o54),
          nr(e, !_n79, _o54),
          _o54 && e.set(t.key, t.offset, t.type));
      }
    }
    function rr(t) {
      var e = ii(t.key);
      return null === e ? null : tc(e);
    }
    function sr(t, e, n) {
      var o = rr(t),
        r = rr(e);
      if (o === r || (null !== o && null !== r && o.is(r))) return !1;
      var s = n(o, r);
      if (null !== o)
        return (
          is(o)
            ? e.set(o.getKey(), s ? o.getChildrenSize() : 0, "element")
            : e.set(o.getKey(), s ? o.getTextContentSize() : 0, "text"),
          !0
        );
      var i = Ql(r);
      if (null === i) return !1;
      var l = i.getParent();
      if (null === l) return !1;
      var c = i.getIndexWithinParent();
      return (e.set(l.getKey(), s ? c + 1 : c, "element"), !0);
    }
    function ir(t) {
      var e = sr(t.anchor, t.focus, function (e, n) {
        return (function (t, e, n, o) {
          if (null !== n && null !== o) {
            var _t158 = Ql(n),
              _e100 = Ql(o);
            if (null !== _t158 && _t158.is(_e100)) {
              for (var _e101 of ec(_t158).values()) {
                if (_e101 === n.getKey()) return !0;
                if (_e101 === o.getKey()) return !1;
              }
              return !0;
            }
            return null === _t158 || null === _e100 || _t158.isBefore(_e100);
          }
          if (null !== n) {
            var _t159 = Ql(n),
              _o55 = ii(e.key);
            return (
              null === _t159 ||
              null === _o55 ||
              !(!_t159.is(_o55) && !_t159.isParentOf(_o55)) ||
              _t159.isBefore(_o55)
            );
          }
          var r = Ql(o),
            s = ii(t.key);
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
    function lr(t, e, n, o, r, s) {
      if (null === t || null === n || !Hs(r, t, n)) return null;
      var i = er(t, e, Wo(s) ? s.anchor : null, r);
      if (null === i) return null;
      var l = er(n, o, Wo(s) ? s.focus : null, r);
      if (null === l) return null;
      var c = i[0],
        a = i[1],
        u = l[0],
        f = l[1];
      if ("element" === c.type && "element" === u.type) {
        var _e102 = pi(t),
          _o56 = pi(n);
        if (as(_e102) && as(_o56)) return null;
      }
      var d =
        r._slotsUsed &&
        sr(c, u, function () {
          return (
            0 !==
            (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_FOLLOWING)
          );
        });
      return (or(c, u), [c, u, a || f || d]);
    }
    function cr(t) {
      return is(t) && !t.isInline();
    }
    function ar(t, e, n, o, r, s) {
      var i = $r(),
        l = new _Uo(Lo(t, e, r), Lo(n, o, s), 0, "");
      return ((l.dirty = !0), (i._selection = l), l);
    }
    function ur() {
      var t = Lo("root", 0, "element"),
        e = Lo("root", 0, "element");
      return new _Uo(t, e, 0, "");
    }
    function fr() {
      return new _zo(new Set());
    }
    function dr(t, e, n, o) {
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
      if (Wo(t) && !c) return t.clone();
      {
        if (null === e) return null;
        var _o57 = ul(e, n._rootElement);
        if (
          ((a = _o57.anchorNode),
          (u = _o57.focusNode),
          (f = _o57.anchorOffset),
          (d = _o57.focusOffset),
          (l || void 0 === i) && Wo(t) && !Hs(n, a, u))
        )
          return t.clone();
      }
      var h = lr(a, f, u, d, n, t);
      if (null === h) return null;
      var g = h[0],
        _ = h[1],
        p = h[2];
      var m = 0,
        y = "";
      if (Wo(t)) {
        var _e103 = t.anchor;
        if (g.key === _e103.key) ((m = t.format), (y = t.style));
        else {
          var _t160 = g.getNode();
          wo(_t160)
            ? ((m = _t160.getFormat()), (y = _t160.getStyle()))
            : is(_t160) &&
              ((m = _t160.getTextFormat()), (y = _t160.getTextStyle()));
        }
      }
      var x = new _Uo(g, _, m, y);
      return (p && (x.dirty = !0), x);
    }
    function hr() {
      return $r()._selection;
    }
    function gr() {
      return Wr()._editorState._selection;
    }
    function _r(t, e, n, o) {
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
        var _e104 = r.offset;
        if ((n <= _e104 && o > 0) || (n < _e104 && o < 0)) {
          var _n80 = Math.max(0, _e104 + o);
          (r.set(c, _n80, "element"), s.set(c, _n80, "element"), pr(t));
        }
      } else {
        var _i18 = t.isBackward(),
          _l11 = _i18 ? s : r,
          _a9 = _l11.getNode(),
          _u1 = _i18 ? r : s,
          _f0 = _u1.getNode();
        if (e.is(_a9)) {
          var _t161 = _l11.offset;
          ((n <= _t161 && o > 0) || (n < _t161 && o < 0)) &&
            _l11.set(c, Math.max(0, _t161 + o), "element");
        }
        if (e.is(_f0)) {
          var _t162 = _u1.offset;
          ((n <= _t162 && o > 0) || (n < _t162 && o < 0)) &&
            _u1.set(c, Math.max(0, _t162 + o), "element");
        }
      }
      pr(t);
    }
    function pr(t) {
      var e = t.anchor,
        n = e.offset,
        o = t.focus,
        r = o.offset,
        s = e.getNode(),
        i = o.getNode();
      if (t.isCollapsed()) {
        if (!is(s)) return;
        var _t163 = s.getChildrenSize(),
          _r33 = n >= _t163,
          _i19 = _r33 ? s.getChildAtIndex(_t163 - 1) : s.getChildAtIndex(n);
        if (wo(_i19)) {
          var _t164 = 0;
          (_r33 && (_t164 = _i19.getTextContentSize()),
            e.set(_i19.__key, _t164, "text"),
            o.set(_i19.__key, _t164, "text"));
        }
        return;
      }
      if (is(s)) {
        var _t165 = s.getChildrenSize(),
          _o58 = n >= _t165,
          _r34 = _o58 ? s.getChildAtIndex(_t165 - 1) : s.getChildAtIndex(n);
        if (wo(_r34)) {
          var _t166 = 0;
          (_o58 && (_t166 = _r34.getTextContentSize()),
            e.set(_r34.__key, _t166, "text"));
        }
      }
      if (is(i)) {
        var _t167 = i.getChildrenSize(),
          _e105 = r >= _t167,
          _n81 = _e105 ? i.getChildAtIndex(_t167 - 1) : i.getChildAtIndex(r);
        if (wo(_n81)) {
          var _t168 = 0;
          (_e105 && (_t168 = _n81.getTextContentSize()),
            o.set(_n81.__key, _t168, "text"));
        }
      }
    }
    function mr(t, e, n, o, r) {
      var s = null,
        i = 0,
        l = null;
      (null !== o
        ? ((s = o.__key),
          wo(o)
            ? ((i = o.getTextContentSize()), (l = "text"))
            : is(o) && ((i = o.getChildrenSize()), (l = "element")))
        : null !== r &&
          ((s = r.__key), wo(r) ? (l = "text") : is(r) && (l = "element")),
        null !== s && null !== l
          ? t.set(s, i, l)
          : ((i = e.getIndexWithinParent()),
            -1 === i && (i = n.getChildrenSize()),
            t.set(n.__key, i, "element")));
    }
    function yr(t, e, n, o, r) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : r), "text")
        : t.offset > o.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function xr(t, e, n, o, r) {
      try {
        t.setBaseAndExtent(e, n, o, r);
      } catch (t) {}
    }
    function Cr(t, e, n) {
      var o = Ri(t, e.getKey());
      if (is(e)) {
        var _r35 = Ol(e, o, t);
        return [_r35.element, n + _r35.getFirstChildOffset()];
      }
      return [o, n];
    }
    function Sr(t, e, n, o, r, i) {
      var l = i.getRootNode(),
        c = Xs(l) || nl(l) ? _l(l) : null;
      if ((r.has(oo) && c !== i) || (null !== c && Ws(c, c))) return;
      var a = ul(o, i);
      var u;
      if (!Wo(e))
        return void (
          null !== t &&
          Hs(n, a.anchorNode, a.focusNode) &&
          o.removeAllRanges()
        );
      var f = e.anchor,
        d = e.focus,
        h = f.getNode(),
        g = d.getNode(),
        _Cr = Cr(n, h, f.offset),
        _ = _Cr[0],
        p = _Cr[1],
        _Cr2 = Cr(n, g, d.offset),
        m = _Cr2[0],
        y = _Cr2[1],
        x = e.format,
        C = e.style,
        S = e.isCollapsed();
      var T = _,
        N = m,
        v = !1;
      if (
        ("text" === f.type
          ? ((T = wo(h) ? Ml(h, _, n) : null),
            (v = h.getFormat() !== x || h.getStyle() !== C))
          : Wo(t) && "text" === t.anchor.type && (v = !0),
        "text" === d.type && (N = wo(g) ? Ml(g, m, n) : null),
        null !== T && null !== N)
      ) {
        if (
          (S &&
            (null === t || v || (Wo(t) && (t.format !== x || t.style !== C))) &&
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
            var _t169 = null !== c ? Ys(c) : null;
            (null !== _t169 && _t169 !== n) ||
              r.has(io) ||
              i.focus({ preventScroll: !0 });
          }
          if ("element" !== f.type) return;
        }
        if (
          (xr(o, T, p, N, y), s && e.isCollapsed() && null !== i && !r.has(io))
        ) {
          var _t170 = gl(i);
          if (null === _t170 || !i.contains(_t170)) {
            var _t171 = _l(i.ownerDocument),
              _e106 = null !== _t171 ? Ys(_t171) : null;
            (null !== _e106 && _e106 !== n) || i.focus({ preventScroll: !0 });
          }
        }
        if (!r.has(ro) && e.isCollapsed() && null !== i && i === gl(i)) {
          var _t172 =
            Wo(e) && "element" === e.anchor.type
              ? T.childNodes[p] || null
              : (void 0 === u && (u = al(o, i)), u);
          if (null !== _t172) {
            var _e107;
            if (qs(_t172)) {
              var _n82 = _t172.ownerDocument.createRange();
              (_n82.selectNode(_t172), (_e107 = _n82.getBoundingClientRect()));
            } else _e107 = _t172.getBoundingClientRect();
            !(function (t, e, n) {
              var o = Ki(n),
                r = Wi(o);
              if (null === o || null === r) return;
              var s = e.top,
                i = e.bottom,
                l = 0,
                c = 0,
                a = n;
              for (; null !== a; ) {
                var _e108 = a === o.body;
                if (_e108) {
                  var _e109 = r.visualViewport;
                  if (_e109) {
                    var _t173 = _e109.offsetTop;
                    ((l = _t173), (c = _t173 + _e109.height));
                  } else ((l = 0), (c = Ui(t).innerHeight));
                  var _n83 = r.getComputedStyle(o.documentElement),
                    _s32 = parseFloat(_n83.scrollPaddingTop),
                    _i20 = parseFloat(_n83.scrollPaddingBottom);
                  (isFinite(_s32) && (l += _s32),
                    isFinite(_i20) && (c -= _i20));
                } else {
                  var _t174 = a.getBoundingClientRect();
                  ((l = _t174.top), (c = _t174.bottom));
                }
                var _n84 = 0;
                if (
                  (s < l ? (_n84 = -(l - s)) : i > c && (_n84 = i - c),
                  0 !== _n84)
                )
                  if (_e108) r.scrollBy(0, _n84);
                  else {
                    var _t175 = a.scrollTop;
                    a.scrollTop += _n84;
                    var _e110 = a.scrollTop - _t175;
                    ((s -= _e110), (i -= _e110));
                  }
                if (_e108) break;
                a = Li(a);
              }
            })(n, _e107, i);
          }
        }
        !(function (t) {
          t._inputState.isSelectionChangeFromDOMUpdate = !0;
        })(n);
      }
    }
    function Tr(t, e) {
      for (var _n85 of t.split(/(\r?\n|\t)/))
        "\n" === _n85 || "\r\n" === _n85
          ? e.linebreak()
          : "\t" === _n85
            ? e.tab()
            : "" !== _n85 && e.text(_n85);
    }
    function Nr(t) {
      var e = [];
      return (
        Tr(t, {
          linebreak: function linebreak() {
            return e.push(xs());
          },
          tab: function tab() {
            return e.push(Po());
          },
          text: function text(t) {
            return e.push(Ao(t));
          },
        }),
        e
      );
    }
    function vr(t) {
      var e = [];
      for (var _n86 of t)
        Cs(_n86) ||
          ((!is(_n86) && !as(_n86)) || _n86.isInline()
            ? e.push(_n86)
            : is(_n86) && e.push.apply(e, vr(_n86.getChildren())));
      return e;
    }
    function kr(e) {
      var n = e;
      e.isCollapsed() || n.removeText();
      var o = hr();
      (Wo(o) && (n = o), Wo(n) || t(161));
      var r = n.anchor;
      var s = r.getNode(),
        i = r.offset;
      for (; !vl(s) && null === Xl(s); ) {
        var _Er;
        var _t176 = s;
        if (((_Er = Er(s, i)), (s = _Er[0]), (i = _Er[1]), _t176.is(s))) break;
      }
      return i;
    }
    function Er(t, e) {
      var n = t.getParent();
      if (!n) {
        var _t177 = Es();
        return (hi().append(_t177), _t177.select(), [hi(), 0]);
      }
      if (wo(t)) {
        var _o59 = t.splitText(e);
        if (0 === _o59.length) return [n, t.getIndexWithinParent()];
        var _r36 = 0 === e ? 0 : 1;
        return [n, _o59[0].getIndexWithinParent() + _r36];
      }
      if (!is(t) || 0 === e) return [n, t.getIndexWithinParent()];
      var o = t.getChildAtIndex(e);
      if (o) {
        var _n87 = new _Uo(
            Lo(t.__key, e, "element"),
            Lo(t.__key, e, "element"),
            0,
            "",
          ),
          _r37 = t.insertNewAfter(_n87);
        _r37 && _r37.append.apply(_r37, [o].concat(o.getNextSiblings()));
      }
      return [n, t.getIndexWithinParent() + 1];
    }
    function Or(t) {
      return Cs(t) || Hi(t) || wo(t) || t.isParentRequired();
    }
    function br(t) {
      var e = Es();
      var n = null;
      for (var _o60 = 0; _o60 < t.length; _o60++) {
        var _r38 = t[_o60];
        if (Or(_r38)) {
          if (null === n) {
            ((n = _r38.createParentElementNode()), e.append(n));
            var _s33 = t[_o60 + 1];
            if (Cs(_r38) && (void 0 === _s33 || !Or(_s33))) continue;
          }
          n.append(_r38);
        } else (e.append(_r38), (n = null));
      }
      return e;
    }
    function Mr(t, e, n, o, r) {
      if (r === void 0) {
        r = "decorators-and-blocks";
      }
      if ("move" === e && "character" === o && !t.isCollapsed()) {
        var _ref30 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e111 = _ref30[0],
          _o61 = _ref30[1];
        return (_o61.set(_e111.key, _e111.offset, _e111.type), !0);
      }
      var s = Vc(t.focus, n ? "previous" : "next"),
        i = "lineboundary" === o,
        l = "move" === e;
      var c = s,
        a = "decorators-and-blocks" === r;
      if (!sa(c)) {
        for (var _t178 of c) {
          a = !1;
          var _e112 = _t178.origin;
          if (
            !as(_e112) ||
            _e112.isIsolated() ||
            ((c = _t178), !i || !_e112.isInline())
          )
            break;
        }
        if (a)
          for (var _t179 of zc(s).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (Oc(_t179)) _t179.origin.isInline() || (c = _t179);
            else {
              if (is(_t179.origin)) continue;
              as(_t179.origin) && !_t179.origin.isInline() && (c = _t179);
            }
            break;
          }
      }
      if (c === s) return !1;
      if (l && !i && as(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t180 = fr();
        return (_t180.add(c.origin.getKey()), gi(_t180), !0);
      }
      return ((c = ra(c)), l && qc(t.anchor, c), qc(t.focus, c), a || !i);
    }
    var Ar = null,
      wr = null,
      Dr = !1,
      Ir = !1,
      Pr = !1;
    var Fr = new Set();
    var Rr = 0;
    var Lr = { characterData: !0, childList: !0, subtree: !0 };
    function Kr() {
      return Dr || (null !== Ar && Ar._readOnly);
    }
    function Br() {
      Dr && t(13);
    }
    function zr() {
      Rr > 99 && t(14);
    }
    function $r() {
      return (null === Ar && t(195, Hr()), Ar);
    }
    function Wr() {
      return (null === wr && t(337, Hr()), wr);
    }
    function Ur() {
      Wr()._dirtyType = 2;
    }
    function Hr() {
      var t = 0;
      var e = new Set(),
        n = _Fs.version;
      if ("undefined" != typeof window)
        for (var _o62 of sl(document)) {
          var _r39 = Js(_o62);
          if (js(_r39)) t++;
          else if (_r39) {
            var _t181 = String(_r39.constructor.version || "<0.17.1");
            (_t181 === n &&
              (_t181 +=
                " (separately built, likely a bundler configuration issue)"),
              e.add(_t181));
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
    function jr() {
      return wr;
    }
    function Yr(t, e, n) {
      var o = e.__type,
        r = Bs(t, o);
      var s = n.get(o);
      void 0 === s && ((s = Array.from(r.transforms)), n.set(o, s));
      var i = s.length;
      for (var _t182 = 0; _t182 < i && (s[_t182](e), e.isAttached()); _t182++);
    }
    function Jr(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function Gr(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var o = e;
      Array.isArray(e) || (o = [e]);
      for (var _t183 of o) n.add(_t183);
    }
    function Vr(e, n) {
      var o = e.type,
        r = n.get(o);
      void 0 === r && t(17, o);
      var s = r.klass;
      e.type !== s.getType() && t(18, s.name);
      var i = s.importJSON(e),
        l = e.children;
      if (is(i) && Array.isArray(l))
        for (var _t184 = 0; _t184 < l.length; _t184++) {
          var _e113 = Vr(l[_t184], n);
          i.append(_e113);
        }
      var c = e.$slots;
      if (c) {
        Vl(i) || t(379, s.name);
        for (var _t185 in c) {
          hc(i, _t185, Vr(c[_t185], n));
        }
      }
      return i;
    }
    function qr(t, e, n) {
      var o = Ar,
        r = Dr,
        s = wr;
      ((Ar = e), (Dr = !0), (wr = t));
      try {
        return n();
      } finally {
        ((Ar = o), (Dr = r), (wr = s));
      }
    }
    function Xr(t, e) {
      var n = Pr;
      Pr = !0;
      try {
        !(function (t, e) {
          var n = t._pendingEditorState,
            o = t._rootElement,
            r = t._headless || null === o;
          if (null === n)
            return void (
              !t._updating &&
              t._deferred.length > 0 &&
              ts(t, t._deferred)
            );
          var s = t._editorState,
            i = s._selection,
            l = n._selection,
            c = 0 !== t._dirtyType,
            a = Ar,
            u = Dr,
            f = wr,
            d = t._updating,
            h = t._observer;
          var g = null;
          if (
            ((t._pendingEditorState = null),
            (t._editorState = n),
            !r && c && null !== h)
          ) {
            ((wr = t), (Ar = n), (Dr = !1), (t._updating = !0));
            try {
              var _e114 = t._dirtyType,
                _o63 = t._dirtyElements,
                _r40 = t._dirtyLeaves;
              (h.disconnect(), (g = Ce(s, n, t, _e114, _o63, _r40)));
            } catch (e) {
              if ((e instanceof Error && t._onError(e), Ir)) throw e;
              return (
                As(t, null, o, n),
                st(t),
                (t._dirtyType = 2),
                (Ir = !0),
                Xr(t, s),
                void (Ir = !1)
              );
            } finally {
              (h.observe(o, Lr),
                (t._updating = d),
                (Ar = a),
                (Dr = u),
                (wr = f));
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
              for (s in o) r.has(s) || (o === n && (o = fi(t)), delete o[s]);
            })(t, n));
          var x = r ? null : tl(Ui(t));
          if (
            t._editable &&
            null !== x &&
            (c || null === l || l.dirty || !l.is(i)) &&
            null !== o &&
            !y.has(so)
          ) {
            ((wr = t), (Ar = n));
            try {
              if ((null !== h && h.disconnect(), c || null === l || l.dirty)) {
                var _e115 = t._blockCursorElement;
                (null !== _e115 && Zi(_e115, t, o), Sr(i, l, t, x, y, o));
              }
              !(function (t, e, n) {
                var o = t._blockCursorElement;
                if (
                  Wo(n) &&
                  n.isCollapsed() &&
                  "element" === n.anchor.type &&
                  e.contains(gl(e))
                ) {
                  var _r41 = n.anchor,
                    _s34 = _r41.getNode(),
                    _i21 = _r41.offset;
                  var _l12 = !1,
                    _c1 = null;
                  if (_i21 === _s34.getChildrenSize()) {
                    Qi(_s34.getChildAtIndex(_i21 - 1)) && (_l12 = !0);
                  } else {
                    var _e116 = _s34.getChildAtIndex(_i21);
                    if (null !== _e116 && Qi(_e116)) {
                      var _n88 = _e116.getPreviousSibling();
                      (null === _n88 || Qi(_n88)) &&
                        ((_l12 = !0), (_c1 = t.getElementByKey(_e116.__key)));
                    }
                  }
                  if (_l12) {
                    var _n89 = Ol(
                      _s34,
                      t.getElementByKey(_s34.__key),
                      t,
                    ).element;
                    return (
                      null === o &&
                        (t._blockCursorElement = o =
                          (function (t) {
                            var e = t.theme,
                              n = ll().createElement("div");
                            ((n.contentEditable = "false"),
                              n.setAttribute("data-lexical-cursor", "true"));
                            var o = e.blockCursor;
                            if (void 0 !== o) {
                              var _n$classList;
                              if ("string" == typeof o) {
                                var _t186 = ha(o);
                                o = e.blockCursor = _t186;
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
                        ? _n89.appendChild(o)
                        : _n89.insertBefore(o, _c1))
                    );
                  }
                }
                null !== o && Zi(o, t, e);
              })(t, o, l);
            } finally {
              (null !== h && h.observe(o, Lr), (wr = f), (Ar = a));
            }
          }
          null !== g &&
            (function (t, e, n, o, r) {
              var s = Array.from(t._listeners.mutation),
                i = s.length;
              for (var _t187 = 0; _t187 < i; _t187++) {
                var _s$_t = s[_t187],
                  _i22 = _s$_t[0],
                  _l13 = _s$_t[1];
                for (var _t188 of _l13) {
                  var _s35 = e.get(_t188);
                  void 0 !== _s35 &&
                    _i22(_s35, {
                      dirtyLeaves: o,
                      prevEditorState: r,
                      updateTags: n,
                    });
                }
              }
            })(t, g, y, _, s);
          Wo(l) ||
            null === l ||
            (null !== i && i.is(l)) ||
            t.dispatchCommand(Ne, void 0);
          var C = t._pendingDecorators;
          null !== C &&
            ((t._decorators = C),
            (t._pendingDecorators = null),
            Qr("decorator", t, !0, C));
          if (
            ((function (t, e, n) {
              var o = di(e),
                r = di(n);
              o !== r && Qr("textcontent", t, !0, r);
            })(t, e || s, n),
            Qr("update", t, !0, {
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
            ts(t, t._deferred);
          }
          !(function (t) {
            var e = t._updates;
            if (0 === e.length) return void (t._cascadeCount = 0);
            if (
              ((function (t) {
                if (Fr.has(t)) return;
                (Fr.add(t),
                  setTimeout(function () {
                    (Fr["delete"](t), (t._cascadeCount = 0));
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
              var _e117 = n[0],
                _o64 = n[1];
              ns(t, _e117, _o64);
            }
          })(t);
        })(t, e);
      } finally {
        Pr = n;
      }
    }
    function Qr(t, e, n) {
      var r = e._updating;
      e._updating = n;
      try {
        var _n90 = e._listeners[t],
          _r42 = Array.from(_n90);
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
          var _t189 = _ref32[0];
          var _e118 = _ref32[1];
          {
            _e118 && _e118();
            var _r43 = _t189.apply(void 0, o);
            _n90.has(_t189) ? _n90.set(_t189, _r43) : _r43 && _r43();
          }
        }
      } finally {
        e._updating = r;
      }
    }
    function Zr(t, e, n, o) {
      var r = yi(t);
      var s;
      if (!Pr)
        for (var _t190 = 0; _t190 < r.length; _t190++)
          r[_t190]._updating || (r[_t190]._cascadeCount = 0);
      for (var _t191 = 4; _t191 >= 0; _t191--) {
        var _loop = function _loop() {
            var l = r[_i23];
            if (_i23 > 0 && l._updating) {
              s = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e119 = c[_t191];
              if (_e119.size > 0) {
                var _t192 = !1;
                if (
                  (os(l, function () {
                    for (var _r44 of _e119)
                      if (_r44(n, o)) return void (_t192 = !0);
                  }),
                  _t192)
                )
                  return { v: _t192 };
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
            Zr(s, e, n, o);
          }),
        !1
      );
    }
    function ts(t, e) {
      if (((t._deferred = []), 0 !== e.length)) {
        var _n91 = t._updating;
        t._updating = !0;
        try {
          for (var _t193 = 0; _t193 < e.length; _t193++) e[_t193]();
        } finally {
          t._updating = _n91;
        }
      }
    }
    function es(e, n) {
      var o = e._updates;
      var r = n || !1;
      for (; 0 !== o.length; ) {
        var _n92 = o.shift();
        if (_n92) {
          var _o65 = _n92[0],
            _s36 = _n92[1],
            _i24 = e._pendingEditorState;
          var _l14 = void 0;
          (void 0 !== _s36 &&
            ((_l14 = _s36.onUpdate),
            _s36.skipTransforms && (r = !0),
            _s36.discrete && (null === _i24 && t(191), (_i24._flushSync = !0)),
            _l14 && e._deferred.push(_l14),
            Gr(e, _s36.tag)),
            null == _i24 ? ns(e, _o65, _s36) : _o65());
        }
      }
      return r;
    }
    function ns(e, n, o) {
      var r = e._updateTags;
      var s,
        i = !1,
        l = !1;
      (void 0 !== o &&
        ((s = o.onUpdate),
        Gr(e, o.tag),
        (i = o.skipTransforms || !1),
        (l = o.discrete || !1)),
        s && e._deferred.push(s));
      var c = e._editorState;
      var a = e._pendingEditorState,
        u = !1;
      ((null === a || a._readOnly) &&
        ((a = e._pendingEditorState = ds(a || c)), (u = !0)),
        (a._flushSync = l));
      var f = Ar,
        d = Dr,
        h = wr,
        g = e._updating;
      ((Ar = a), (Dr = !1), (e._updating = !0), (wr = e));
      var _ = e._headless || null === e.getRootElement();
      Ls(null);
      try {
        u &&
          (_
            ? null !== c._selection && (a._selection = c._selection.clone())
            : (a._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  o = tl(Ui(t));
                return Wo(n) || null == n ? dr(n, o, t, e) : n.clone();
              })(e, (o && o.event) || null)));
        var _r45 = e._compositionKey;
        (n(),
          (i = es(e, i)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              o = t._selection;
            if (Wo(o)) {
              var _t194 = o.anchor,
                _e120 = o.focus;
              var _r46;
              if (
                ("text" === _t194.type &&
                  ((_r46 = _t194.getNode()), _r46.selectionTransform(n, o)),
                "text" === _e120.type)
              ) {
                var _t195 = _e120.getNode();
                _r46 !== _t195 && _t195.selectionTransform(n, o);
              }
            }
          })(a, e),
          0 !== e._dirtyType &&
            (i
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = t._nodeMap;
                  for (var _t196 of n) {
                    var _e121 = o.get(_t196);
                    wo(_e121) &&
                      _e121.isAttached() &&
                      _e121.isSimpleText() &&
                      !_e121.isUnmergeable() &&
                      Tt(_e121);
                  }
                })(a, e)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = e._dirtyElements,
                    r = t._nodeMap,
                    s = si(),
                    i = new Map();
                  var l = n,
                    c = l.size,
                    a = o,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t197 of l) {
                        var _o66 = r.get(_t197);
                        (wo(_o66) &&
                          _o66.isAttached() &&
                          _o66.isSimpleText() &&
                          !_o66.isUnmergeable() &&
                          Tt(_o66),
                          void 0 !== _o66 && Jr(_o66, s) && Yr(e, _o66, i),
                          n.add(_t197));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        Rr++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t198 of a) {
                      var _n93 = _t198[0],
                        _l15 = _t198[1];
                      if ((o.set(_n93, _l15), !_l15)) continue;
                      var _c10 = r.get(_n93);
                      void 0 !== _c10 && Jr(_c10, s) && Yr(e, _c10, i);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      Rr++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = o));
                })(a, e),
            es(e),
            (function (t, e, n, o) {
              var r = t._nodeMap,
                s = e._nodeMap,
                i = [];
              for (var _ref34 of o) {
                var _t199 = _ref34[0];
                {
                  var _e122 = s.get(_t199);
                  void 0 !== _e122 &&
                    (_e122.isAttached() ||
                      (is(_e122) && V(_e122, _t199, r, s, i, o),
                      r.has(_t199) || o["delete"](_t199),
                      i.push(_t199)));
                }
              }
              for (var _t200 of n) {
                var _e123 = s.get(_t200);
                void 0 === _e123 ||
                  _e123.isAttached() ||
                  (Vl(_e123) &&
                    null !== _e123.__slots &&
                    V(_e123, _t200, r, s, i, n),
                  r.has(_t200) || n["delete"](_t200),
                  i.push(_t200));
              }
              for (var _t201 of i) s["delete"](_t201);
              var l = Wr(),
                c = l._compositionKey;
              null === c || s.has(c) || (l._compositionKey = null);
            })(c, a, e._dirtyLeaves, e._dirtyElements)));
        _r45 !== e._compositionKey && (a._flushSync = !0);
        var _s37 = a._selection;
        if (Wo(_s37)) {
          e._slotsUsed && ir(_s37);
          var _n94 = a._nodeMap,
            _o67 = _s37.anchor.key,
            _r47 = _s37.focus.key;
          (void 0 !== _n94.get(_o67) && void 0 !== _n94.get(_r47)) || t(19);
        } else Ho(_s37) && 0 === _s37._nodes.size && (a._selection = null);
      } catch (t) {
        return (
          t instanceof Error && e._onError(t),
          (e._pendingEditorState = c),
          (e._dirtyType = 2),
          e._cloneNotNeeded.clear(),
          (e._dirtyLeaves = new Set()),
          e._dirtyElements.clear(),
          void Xr(e)
        );
      } finally {
        ((Ar = f), (Dr = d), (wr = h), (e._updating = g), (Rr = 0));
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
          ? ((a._flushSync = !1), Xr(e))
          : u &&
            $s(function () {
              Xr(e);
            })
        : ((a._flushSync = !1),
          u && (r.clear(), (e._deferred = []), (e._pendingEditorState = null)));
    }
    function os(t, e, n) {
      wr === t && void 0 === n ? e() : ns(t, e, n);
    }
    function rs(t) {
      if (Ji(t)) {
        var _e124 = null;
        for (var _n95 of t.getChildren())
          _e124 = _n95.isInline()
            ? (_e124 || _n95.replace(_n95.createParentElementNode())).append(
                _n95,
              )
            : null;
      }
    }
    var _ss4 = (function (_to2) {
      function ss(t) {
        var _this3;
        ((_this3 = _to2.call(this, t) || this),
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
      babelHelpers.inheritsLoose(ss, _to2);
      var _proto10 = ss.prototype;
      _proto10.$config = function $config() {
        return this.config(Symbol["for"]("ElementNode"), {
          $transform: rs,
          extends: _to5,
        });
      };
      _proto10.afterCloneFrom = function afterCloneFrom(e) {
        (_to2.prototype.afterCloneFrom.call(this, e),
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
        return 0 === this.getChildrenSize() && 0 === nc(this).length;
      };
      _proto10.isDirty = function isDirty() {
        var t = Wr()._dirtyElements;
        return null !== t && t.has(this.__key);
      };
      _proto10.isLastChild = function isLastChild() {
        var t = this.getLatest(),
          e = this.getParentOrThrow().getLastChild();
        return null !== e && e.is(t);
      };
      _proto10.getAllTextNodes = function getAllTextNodes() {
        var t = [];
        for (var _e125 of nc(this)) {
          var _n96 = oc(this, _e125);
          is(_n96) && t.push.apply(t, _n96.getAllTextNodes());
        }
        var e = this.getFirstChild();
        for (; null !== e; ) {
          if ((wo(e) && t.push(e), is(e))) {
            var _n97 = e.getAllTextNodes();
            t.push.apply(t, _n97);
          }
          e = e.getNextSibling();
        }
        return t;
      };
      _proto10.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; is(t); ) {
          var _e126 = t.getFirstChild();
          if (null === _e126) break;
          t = _e126;
        }
        return t;
      };
      _proto10.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; is(t); ) {
          var _e127 = t.getLastChild();
          if (null === _e127) break;
          t = _e127;
        }
        return t;
      };
      _proto10.getDescendantByIndex = function getDescendantByIndex(t) {
        var e = this.getChildren(),
          n = e.length;
        if (t >= n) {
          var _t202 = e[n - 1];
          return (is(_t202) && _t202.getLastDescendant()) || _t202 || null;
        }
        var o = e[t];
        return (is(o) && o.getFirstDescendant()) || o || null;
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
        var t = uc(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o68 = 0; _o68 < n; _o68++) {
          var _r48 = e[_o68];
          ((t += _r48.getTextContent()),
            is(_r48) && _o68 !== n - 1 && !_r48.isInline() && (t += v));
        }
        return t;
      };
      _proto10.getTextContentSize = function getTextContentSize() {
        var t = (function (t) {
          var e = 0;
          for (var _n98 of nc(t)) {
            var _o69 = oc(t, _n98);
            null !== _o69 && (e += _o69.getTextContentSize());
          }
          return e;
        })(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o70 = 0; _o70 < n; _o70++) {
          var _r49 = e[_o70];
          ((t += _r49.getTextContentSize()),
            is(_r49) && _o70 !== n - 1 && !_r49.isInline() && (t += 2));
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
          var _e128 = D[t];
          return 0 !== (this.getFormat() & _e128);
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
        Br();
        var n = hr();
        var o = t,
          r = e;
        var s = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t203 = this.getFirstChild();
            if (wo(_t203) || is(_t203)) return _t203.select(0, 0);
          } else if (
            !((void 0 !== t && t !== s) || (void 0 !== e && e !== s))
          ) {
            var _t204 = this.getLastChild();
            if (wo(_t204) || is(_t204)) return _t204.select();
          }
        (void 0 === o && (o = s), void 0 === r && (r = s));
        var i = this.__key;
        return Wo(n)
          ? (n.anchor.set(i, o, "element"),
            n.focus.set(i, r, "element"),
            (n.dirty = !0),
            n)
          : ar(i, o, i, r, "element", "element");
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
        Qn(this) && t(324, this.__key, this.__type);
        var r = this.getChildrenSize(),
          s = this.getWritable();
        e + n <= r || t(226, String(e), String(n), String(r));
        for (var _t205 of o);
        var i = s.__key,
          l = [],
          c = [],
          a = this.getChildAtIndex(e + n);
        var u = null,
          f = r - n + o.length;
        if (0 !== e)
          if (e === r) u = this.getLastChild();
          else {
            var _t206 = this.getChildAtIndex(e);
            null !== _t206 && (u = _t206.getPreviousSibling());
          }
        if (n > 0) {
          var _e129 = null === u ? this.getFirstChild() : u.getNextSibling();
          for (var _o71 = 0; _o71 < n; _o71++) {
            null === _e129 && t(100);
            var _n99 = _e129.getNextSibling(),
              _o72 = _e129.__key;
            (ei(_e129.getWritable()), c.push(_o72), (_e129 = _n99));
          }
        }
        var d = u;
        for (var _e130 of o) {
          null !== d && _e130.is(d) && (u = d = d.getPreviousSibling());
          var _n100 = _e130.getWritable();
          (_n100.__parent === i && f--, ei(_n100));
          var _o73 = _e130.__key;
          if (null === d) ((s.__first = _o73), (_n100.__prev = null));
          else {
            var _t207 = d.getWritable();
            ((_t207.__next = _o73), (_n100.__prev = _t207.__key));
          }
          (_e130.__key === i && t(76),
            (_n100.__parent = i),
            l.push(_o73),
            (d = _e130));
        }
        if (e + n === r) {
          if (null !== d) {
            ((d.getWritable().__next = null), (s.__last = d.__key));
          }
        } else if (null !== a) {
          var _t208 = a.getWritable();
          if (null !== d) {
            var _e131 = d.getWritable();
            ((_t208.__prev = d.__key), (_e131.__next = a.__key));
          } else _t208.__prev = null;
        }
        if (((s.__size = f), c.length)) {
          var _t209 = hr();
          if (Wo(_t209)) {
            var _e132 = new Set(c),
              _n101 = new Set(l),
              _o74 = _t209.anchor,
              _r50 = _t209.focus;
            (ls(_o74, _e132, _n101) && mr(_o74, _o74.getNode(), this, u, a),
              ls(_r50, _e132, _n101) && mr(_r50, _r50.getNode(), this, u, a),
              0 !== f || this.canBeEmpty() || Ji(this) || this.remove());
          }
        }
        return s;
      };
      _proto10.getDOMSlot = function getDOMSlot(t) {
        return new _$(t);
      };
      _proto10.exportDOM = function exportDOM(t) {
        var _to2$prototype$export = _to2.prototype.exportDOM.call(this, t),
          e = _to2$prototype$export.element;
        if (ml(e)) {
          var _t210 = this.getIndent();
          _t210 > 0 &&
            ((e.style.paddingInlineStart = 40 * _t210 + "px"),
            e.setAttribute("data-lexical-indent", String(_t210)));
          var _n102 = this.getDirection();
          _n102 && (e.dir = _n102);
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
            _to2.prototype.exportJSON.call(this),
          ),
          e = this.getTextFormat(),
          n = this.getTextStyle();
        return (
          (0 === e && "" === n) ||
            Ji(this) ||
            this.getChildren().some(wo) ||
            (0 !== e && (t.textFormat = e), "" !== n && (t.textStyle = n)),
          t
        );
      };
      _proto10.updateFromJSON = function updateFromJSON(t) {
        return _to2.prototype.updateFromJSON
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
        var n = Ol(this, t, e);
        var o = n.getFirstChild();
        for (
          var _t211 = this.getFirstChild();
          _t211;
          _t211 = _t211.getNextSibling()
        ) {
          var _r51 = e.getElementByKey(_t211.getKey());
          null !== _r51 &&
            (null == o
              ? (n.insertChild(_r51), (o = _r51))
              : o !== _r51 && n.replaceChild(_r51, o),
            (o = o.nextSibling));
        }
      };
      return ss;
    })(_to5);
    function is(t) {
      return t instanceof _ss4;
    }
    function ls(t, e, n) {
      var o = t.getNode();
      for (; o; ) {
        var _t212 = o.__key;
        if (e.has(_t212) && !n.has(_t212)) return !0;
        o = o.getParent();
      }
      return !1;
    }
    var _cs = (function (_to3) {
      function cs(t) {
        var _this4;
        ((_this4 = _to3.call(this, t) || this),
          (_this4.__slotHost = null),
          (_this4.__slots = null));
        return _this4;
      }
      babelHelpers.inheritsLoose(cs, _to3);
      var _proto11 = cs.prototype;
      _proto11.afterCloneFrom = function afterCloneFrom(e) {
        (_to3.prototype.afterCloneFrom.call(this, e),
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
      return cs;
    })(_to5);
    function as(t) {
      return t instanceof _cs;
    }
    var _us = (function (_ss) {
      function us() {
        var _this5;
        ((_this5 = _ss.call(this, "root") || this),
          (_this5.__cachedText = null));
        return _this5;
      }
      babelHelpers.inheritsLoose(us, _ss);
      us.getType = function getType() {
        return "root";
      };
      us.clone = function clone() {
        return new us();
      };
      var _proto12 = us.prototype;
      _proto12.getTopLevelElementOrThrow =
        function getTopLevelElementOrThrow() {
          t(51);
        };
      _proto12.getTextContent = function getTextContent() {
        var t = this.__cachedText;
        return null === t || (!Kr() && 0 !== Wr()._dirtyType)
          ? _ss.prototype.getTextContent.call(this)
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
        for (var _e133 of o) is(_e133) || as(_e133) || t(282);
        return _ss.prototype.splice.call(this, e, n, o);
      };
      us.importJSON = function importJSON(t) {
        return hi().updateFromJSON(t);
      };
      _proto12.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return us;
    })(_ss4);
    function fs(t) {
      return t instanceof _us;
    }
    function ds(t) {
      return new _s47(J(t._nodeMap), null, t._slotsUsed);
    }
    function hs() {
      return new _s47(new Map([["root", new _us()]]), null, !1);
    }
    function gs(e) {
      var n = e.exportJSON(),
        o = e.constructor;
      if ((n.type !== o.getType() && t(130, o.name), is(e))) {
        var _r52 = n.children;
        Array.isArray(_r52) || t(59, o.name);
        var _s38 = e.getChildren();
        for (var _t213 = 0; _t213 < _s38.length; _t213++) {
          var _e134 = gs(_s38[_t213]);
          _r52.push(_e134);
        }
      }
      var r = nc(e);
      if (r.length > 0) {
        var _s39 = {};
        for (var _n103 of r) {
          var _r53 = oc(e, _n103);
          (null === _r53 && t(366, o.name, _n103), (_s39[_n103] = gs(_r53)));
        }
        n.$slots = _s39;
      }
      return n;
    }
    var _s47 = (function () {
      function _s(t, e, n) {
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
      var _proto13 = _s.prototype;
      _proto13.isEmpty = function isEmpty() {
        return 1 === this._nodeMap.size && null === this._selection;
      };
      _proto13.read = function read(t, e) {
        return qr((e && e.editor) || null, this, t);
      };
      _proto13.clone = function clone(t) {
        var e = new _s(
          this._nodeMap,
          void 0 === t ? this._selection : t,
          this._slotsUsed,
        );
        return ((e._readOnly = !0), e);
      };
      _proto13.toJSON = function toJSON() {
        return qr(null, this, function () {
          return { root: gs(hi()) };
        });
      };
      return _s;
    })();
    var _ps = (function (_ss2) {
      function ps() {
        return _ss2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(ps, _ss2);
      ps.getType = function getType() {
        return "artificial";
      };
      var _proto14 = ps.prototype;
      _proto14.createDOM = function createDOM(t) {
        return ll().createElement("div");
      };
      return ps;
    })(_ss4);
    var _ms = (function (_to4) {
      function ms(t) {
        return _to4.call(this, t) || this;
      }
      babelHelpers.inheritsLoose(ms, _to4);
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
        return ll().createElement("br");
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
            return Ss(t) || Ts(t) ? null : { conversion: ys, priority: 0 };
          },
        };
      };
      ms.importJSON = function importJSON(t) {
        return xs().updateFromJSON(t);
      };
      return ms;
    })(_to5);
    function ys(t) {
      return { node: xs() };
    }
    function xs() {
      return Vi(new _ms());
    }
    function Cs(t) {
      return t instanceof _ms;
    }
    function Ss(t) {
      var e = t.parentElement;
      if (null !== e && Nl(e)) {
        var _n104 = e.firstChild;
        if (_n104 === t || (_n104.nextSibling === t && Ns(_n104))) {
          var _n105 = e.lastChild;
          if (_n105 === t || (_n105.previousSibling === t && Ns(_n105)))
            return !0;
        }
      }
      return !1;
    }
    function Ts(t) {
      var e = t.parentElement;
      if (null !== e && Nl(e)) {
        var _n106 = e.firstChild;
        if (_n106 === t || (_n106.nextSibling === t && Ns(_n106))) return !1;
        var _o75 = e.lastChild;
        if (_o75 === t || (_o75.previousSibling === t && Ns(_o75))) return !0;
      }
      return !1;
    }
    function Ns(t) {
      return qs(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    var _vs = (function (_ss3) {
      function vs() {
        return _ss3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(vs, _ss3);
      vs.getType = function getType() {
        return "paragraph";
      };
      vs.clone = function clone(t) {
        return new vs(t.__key);
      };
      var _proto16 = vs.prototype;
      _proto16.createDOM = function createDOM(t) {
        var e = ll().createElement("p"),
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
      vs.importDOM = function importDOM() {
        return {
          p: function p(t) {
            return { conversion: ks, priority: 0 };
          },
        };
      };
      _proto16.exportDOM = function exportDOM(t) {
        var _ss3$prototype$export = _ss3.prototype.exportDOM.call(this, t),
          e = _ss3$prototype$export.element;
        if (ml(e)) {
          this.isEmpty() && e.append(ll().createElement("br"));
          var _t214 = this.getFormatType();
          _t214 && (e.style.textAlign = _t214);
        }
        return { element: e };
      };
      vs.importJSON = function importJSON(t) {
        return Es().updateFromJSON(t);
      };
      _proto16.exportJSON = function exportJSON() {
        var t = _ss3.prototype.exportJSON.call(this);
        if (void 0 === t.textFormat || void 0 === t.textStyle) {
          var _e135 = this.getChildren().find(wo);
          _e135
            ? ((t.textFormat = _e135.getFormat()),
              (t.textStyle = _e135.getStyle()))
            : ((t.textFormat = this.getTextFormat()),
              (t.textStyle = this.getTextStyle()));
        }
        return t;
      };
      _proto16.insertNewAfter = function insertNewAfter(t, e) {
        var n = Es();
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
          (wo(t[0]) && "" === t[0].getTextContent().trim())
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return vs;
    })(_ss4);
    function ks(t) {
      var e = Es();
      if ((Rl(e, t), Pl(t, e), "" === e.getFormatType())) {
        var _n107 = t.getAttribute("align");
        _n107 && _n107 && _n107 in D && e.setFormat(_n107);
      }
      return (Fl(e, t), { node: e });
    }
    function Es() {
      return Vi(new _vs());
    }
    function Os(t) {
      return t instanceof _vs;
    }
    function bs(t) {
      console.warn(t);
    }
    var Ms = 0;
    function As(t, e, n, o, r) {
      var s = t._keyToDOMMap;
      (s.clear(),
        (t._editorState = hs()),
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
          ((n.textContent = ""), s.set("root", n), ci(n, t, "root")));
    }
    function ws(t) {
      var e = new Set(),
        n = new Set();
      for (var _ref36 of Hl(t)) {
        var _o76 = _ref36.klass;
        var _r54 = _ref36.ownNodeConfig;
        {
          var _t215 = _o76.transform;
          if (!n.has(_t215)) {
            n.add(_t215);
            var _r55 = _o76.transform();
            _r55 && e.add(_r55);
          }
          if (_r54) {
            var _t216 = _r54.$transform;
            _t216 && e.add(_t216);
          }
        }
      }
      return e;
    }
    var Ds = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, o) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = zs(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, o, r) {
        return is(t) && t.extractWithChild(e, n, o);
      },
      $getDOMSlot: function $getDOMSlot(t, e, n) {
        return t.getDOMSlot(e);
      },
      $getSlotTargetElement: function $getSlotTargetElement(t, e, n, o) {
        return null;
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return is(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, o) {
        return t.updateDOM(e, n, o._config);
      },
    };
    function Is(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function Ps(t, e, n) {
      return (t.set(e, n), Is.bind(null, t, e));
    }
    var _Fs = (function () {
      function Fs(t, e, n, o, r, s, i, l, c) {
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
      var _proto17 = Fs.prototype;
      _proto17.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto17.registerUpdateListener = function registerUpdateListener(t) {
        return Ps(this._listeners.update, t);
      };
      _proto17.registerEditableListener = function registerEditableListener(t) {
        return Ps(this._listeners.editable, t);
      };
      _proto17.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return Ps(this._listeners.decorator, t);
      };
      _proto17.registerTextContentListener =
        function registerTextContentListener(t) {
          return Ps(this._listeners.textcontent, t);
        };
      _proto17.registerRootListener = function registerRootListener(t) {
        var _this14 = this;
        var e = this._listeners.root;
        return ga(Ps(e, t, t(this._rootElement, null) || void 0), function () {
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
          o = Dl(n).get(e.getType());
        if (!o) return;
        var r = new Map();
        for (var _t217 of o.keys()) r.set(_t217, "created");
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
          var _t218 = this.registerNodeTransformToKlass(r, e);
          o.push(_t218);
        }
        return (
          (function (t, e) {
            var n = Dl(t.getEditorState()),
              o = [];
            for (var _t219 of e) {
              var _e136 = n.get(_t219);
              _e136 && o.push(_e136);
            }
            if (0 === o.length) return;
            t.update(
              function () {
                for (var _t220 of o)
                  for (var _e137 of _t220.keys()) {
                    var _t221 = ii(_e137);
                    _t221 && _t221.markDirty();
                  }
              },
              null === t._pendingEditorState ? { tag: no } : void 0,
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
          var _n108 = Ai(this._config.theme, "root"),
            _o77 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            As(this, e, t, _o77, { preserveUpdateQueue: !0 }),
            null !== e &&
              (this._config.disableEvents || Vn(e),
              null != _n108 &&
                (_e$classList3 = e.classList).remove.apply(
                  _e$classList3,
                  _n108,
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e138 = Wi(t),
              _o78 = t.style;
            ((_o78.userSelect = "text"),
              (_o78.whiteSpace = "pre-wrap"),
              (_o78.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e138),
              (this._dirtyType = 2),
              st(this),
              this._updateTags.add(no),
              Xr(this),
              this._config.disableEvents ||
                (function (t, e) {
                  var n = t.ownerDocument;
                  Nn.set(t, n);
                  var o = vn.get(n);
                  (void 0 === o &&
                    ((o = { editors: new Set(), hasShadowEditor: void 0 }),
                    vn.set(n, o)),
                    o.editors.add(e),
                    (o.hasShadowEditor = void 0),
                    (t.__lexicalEditor = e));
                  var r = Un(t);
                  r.push(kn.register(n));
                  var _loop2 = function _loop2() {
                    var _Tn$_n = Tn[_n109],
                      o = _Tn$_n[0],
                      s = _Tn$_n[1],
                      i =
                        "function" == typeof s
                          ? function (t) {
                              Jn(t) ||
                                (Yn(t),
                                (e.isEditable() || "click" === o) && s(t, e));
                            }
                          : function (t) {
                              if (Jn(t)) return;
                              Yn(t);
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
                                  return n && Fi(e, mn, t);
                                case "drop":
                                  return n && Fi(e, on, t);
                              }
                            };
                    r.push(Cn(t, o, i));
                  };
                  for (var _n109 = 0; _n109 < Tn.length; _n109++) {
                    _loop2();
                  }
                })(t, this),
              null != _n108 &&
                (_t$classList = t.classList).add.apply(_t$classList, _n108));
          } else ((this._window = null), this._updateTags.add(no), Xr(this));
          Qr("root", this, !1, t, e);
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
          ((o = ds(e)),
          (o._selection = e._selection ? e._selection.clone() : null)),
          rt(this));
        var r = this._pendingEditorState,
          s = void 0 !== n ? n.tag : null;
        (null === r ||
          r.isEmpty() ||
          (null != s && this._updateTags.add(s), Xr(this)),
          (this._pendingEditorState = o),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          (this._slotsUsed = this._slotsUsed || e._slotsUsed),
          os(
            this,
            function () {
              if ((s && _this15._updateTags.add(s), e._parsed))
                for (var _ref38 of o._nodeMap.entries()) {
                  var _t222 = _ref38[0];
                  var _e139 = _ref38[1];
                  is(_e139)
                    ? _this15._dirtyElements.set(_t222, !0)
                    : _this15._dirtyLeaves.add(_t222);
                }
            },
            { discrete: !this._updating || void 0 },
          ));
      };
      _proto17.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var o = hs(),
            r = Ar,
            s = Dr,
            i = wr,
            l = e._dirtyElements,
            c = e._dirtyLeaves,
            a = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Set()),
            (e._dirtyType = 0),
            (Ar = o),
            (Dr = !1),
            (wr = e),
            Ls(null));
          try {
            var _r56 = e._nodes;
            (Vr(t.root, _r56), n && n(), (o._readOnly = !0), (o._parsed = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = c),
              (e._cloneNotNeeded = a),
              (e._dirtyType = u),
              (Ar = r),
              (Dr = s),
              (wr = i));
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
        "force-commit" === e && Xr(this);
        return (
          "pending" === e
            ? this._pendingEditorState || this._editorState
            : this.getEditorState()
        ).read(n, { editor: this });
      };
      _proto17.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : ns(t, e, n);
        })(this, t, e);
      };
      _proto17.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          os(this, function () {
            var o = hr(),
              r = hi();
            (null !== o
              ? o.dirty || gi(o.clone())
              : 0 !== r.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? r.selectStart()
                  : r.selectEnd()),
              Bi("focus"),
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
        var e = tl(this._window);
        null !== e && e.removeAllRanges();
      };
      _proto17.isEditable = function isEditable() {
        return this._editable;
      };
      _proto17.setEditable = function setEditable(t) {
        this._editable !== t &&
          ((this._editable = t),
          Qr("editable", this, !0, t),
          this._slotsUsed &&
            this.update(function () {
              return Ur();
            }));
      };
      _proto17.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON() };
      };
      return Fs;
    })();
    _Fs.version = H;
    var Rs = null;
    function Ls(t) {
      Rs = t;
    }
    var Ks = 1;
    function Bs(e, n) {
      var o = zs(e, n);
      return (void 0 === o && t(30, n), o);
    }
    function zs(t, e) {
      return t._nodes.get(e);
    }
    var $s =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function Ws(t, e) {
      var n =
        void 0 !== e
          ? e
          : (function () {
              var e = t.getRootNode();
              return Xs(e) || nl(e) ? _l(e) : null;
            })();
      if (!ml(n)) return !1;
      if (n.hasAttribute("data-lexical-slot")) return !1;
      var o = ui(n),
        r = n.nodeName;
      return (
        eo(o) &&
        ("INPUT" === r ||
          "TEXTAREA" === r ||
          ("true" === n.contentEditable && null == Js(n)))
      );
    }
    var Us = Ws;
    function Hs(t, e, n) {
      var o = t.getRootElement();
      if (!o) return !1;
      try {
        if (!e || !o.contains(e) || !o.contains(n)) return !1;
      } catch (t) {
        return !1;
      }
      return (
        Ys(e) === t &&
        t.read("latest", function () {
          return !Ws(e);
        })
      );
    }
    function js(t) {
      return t instanceof _Fs;
    }
    function Ys(t) {
      var e = t;
      for (; null != e; ) {
        var _t223 = Js(e);
        if (js(_t223)) return _t223;
        e = Li(e);
      }
      return null;
    }
    function Js(t) {
      return t ? t.__lexicalEditor : null;
    }
    function Gs(t) {
      return Fo(t) || t.isToken();
    }
    function Vs(t) {
      return Gs(t) || t.isSegmented();
    }
    function qs(t) {
      return yl(t) && 3 === t.nodeType;
    }
    function Xs(t) {
      return yl(t) && 9 === t.nodeType;
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
    function ti(t, e) {
      var n = (function () {
        var t = Rs;
        return ((Rs = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (Br(), zr());
      var o = Wr(),
        r = $r(),
        s = "" + Ks++;
      (r._nodeMap.set(s, t),
        is(t) ? o._dirtyElements.set(s, !0) : o._dirtyLeaves.add(s),
        o._cloneNotNeeded.add(s),
        0 === o._dirtyType && (o._dirtyType = 1),
        (t.__key = s));
    }
    function ei(e) {
      null !== Xl(e) && t(380, e.__key, String(Xl(e)));
      var n = e.getParent();
      if (null !== n) {
        var _t224 = e.getWritable(),
          _o79 = n.getWritable(),
          _r57 = e.getPreviousSibling(),
          _s40 = e.getNextSibling(),
          _i25 = null !== _s40 ? _s40.__key : null,
          _l16 = null !== _r57 ? _r57.__key : null,
          _c11 = null !== _r57 ? _r57.getWritable() : null,
          _a0 = null !== _s40 ? _s40.getWritable() : null;
        (null === _r57 && (_o79.__first = _i25),
          null === _s40 && (_o79.__last = _l16),
          null !== _c11 && (_c11.__next = _i25),
          null !== _a0 && (_a0.__prev = _l16),
          (_t224.__prev = null),
          (_t224.__next = null),
          (_t224.__parent = null),
          _o79.__size--);
      }
    }
    var ni = ei;
    function oi(e) {
      (zr(), Qn(e) && t(323, e.__key, e.__type));
      var n = e.getLatest(),
        o = null !== n.__parent ? n.__parent : ql(n) ? n.__slotHost : null,
        r = $r(),
        s = Wr(),
        i = r._nodeMap,
        l = s._dirtyElements;
      null !== o &&
        (function (t, e, n) {
          var o = t;
          for (; null !== o; ) {
            if (n.has(o)) return;
            var _t225 = e.get(o);
            if (void 0 === _t225) break;
            (n.set(o, !1),
              (o =
                null !== _t225.__parent
                  ? _t225.__parent
                  : ql(_t225)
                    ? _t225.__slotHost
                    : null));
          }
        })(o, i, l);
      var c = n.__key;
      (0 === s._dirtyType && (s._dirtyType = 1),
        is(e) ? l.set(c, !0) : s._dirtyLeaves.add(c));
    }
    function ri(t) {
      Br();
      var e = Wr(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t226 = ii(n);
          null !== _t226 && _t226.getWritable();
        }
        if (null !== t) {
          var _e140 = ii(t);
          null !== _e140 && _e140.getWritable();
        }
      }
    }
    function si() {
      if (Kr()) return null;
      return Wr()._compositionKey;
    }
    function ii(t, e) {
      var n = (e || $r())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function li(t, e) {
      var n = ai(t, Wr());
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
        var _t227 = li(n, e);
        if (null !== _t227) return _t227;
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
      return $r()._nodeMap.get("root");
    }
    function gi(t) {
      Br();
      var e = $r();
      (null !== t &&
        ((t.dirty = !0),
        t.setCachedNodes(null),
        Wo(t) && Wr()._slotsUsed && ir(t)),
        (e._selection = t));
    }
    function _i() {
      Br();
      rt(Wr());
    }
    function pi(t) {
      var e = (function (t, e) {
        var n = t;
        for (; null != n; ) {
          var _t228 = ai(n, e);
          if (void 0 !== _t228) return _t228;
          n = Li(n);
        }
        return null;
      })(t, Wr());
      return null === e ? null : ii(e);
    }
    function mi(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function yi(t) {
      var e = [];
      for (var _n110 = t; null !== _n110; _n110 = _n110._parentEditor)
        e.push(_n110);
      return e;
    }
    function xi() {
      return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substring(0, 5);
    }
    function Ci(t) {
      return qs(t) ? t.nodeValue : null;
    }
    function Si(t, e, n) {
      var o = tl(Ui(e));
      if (null === o) return;
      var r = ul(o, e._rootElement),
        s = r.anchorNode;
      var i = r.anchorOffset,
        l = r.focusOffset;
      if (null !== s) {
        var _e141 = Ci(s);
        var _o80 = ui(s);
        if (null !== _e141 && wo(_o80)) {
          if ((_e141 === N || _e141 === k) && n) {
            var _t229 = n.length;
            ((_e141 = n), (i = _t229), (l = _t229));
          }
          null !== _e141 && Ti(_o80, _e141, i, l, t);
        }
      }
    }
    function Ti(t, e, n, o, r) {
      var s = t;
      if (s.isAttached() && (r || !s.isDirty())) {
        var _i26 = s.isComposing();
        if (s.isToken() && _i26) return;
        var _c12 = e;
        if (
          (_i26 || r) &&
          (e.endsWith(N) && (_c12 = e.slice(0, -N.length)), r)
        ) {
          var _t230 = k;
          var _e142;
          for (; -1 !== (_e142 = _c12.indexOf(_t230)); )
            ((_c12 = _c12.slice(0, _e142) + _c12.slice(_e142 + _t230.length)),
              null !== n &&
                n > _e142 &&
                (n = Math.max(_e142, n - _t230.length)),
              null !== o &&
                o > _e142 &&
                (o = Math.max(_e142, o - _t230.length)));
        }
        var _u10 = s.getTextContent();
        if (r || _c12 !== _u10) {
          var _e143 = hr();
          if ("" === _c12) {
            if ((ri(null), a || l || d)) s.remove();
            else {
              var _t231 = Wr();
              (Ni(s, "", _e143),
                setTimeout(function () {
                  _t231.update(function () {
                    s.isAttached() && "" === s.getTextContent() && s.remove();
                  });
                }, 20));
            }
            return;
          }
          var _r58 = s.getParent(),
            _u11 = gr(),
            _f1 = s.getTextContentSize(),
            _h8 = si(),
            _g8 = s.getKey();
          if (
            (s.isToken() && !_i26) ||
            (null !== _h8 && _g8 === _h8 && !_i26) ||
            (Wo(_u11) &&
              ((null !== _r58 &&
                !_r58.canInsertTextBefore() &&
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
          if (!Wo(_e143) || null === n || null === o)
            return void Ni(s, _c12, _e143);
          if ((_e143.setTextNodeRange(s, n, s, o), s.isSegmented())) {
            var _t232 = Ao(s.getTextContent());
            (s.replace(_t232), (s = _t232));
          }
          Ni(s, _c12, _e143);
        }
      }
    }
    function Ni(t, e, n) {
      if ((t.setTextContent(e), Wo(n))) {
        var _e144 = t.getKey();
        var _o81 = !1;
        for (var _r59 of ["anchor", "focus"]) {
          var _s41 = n[_r59];
          "text" === _s41.type &&
            _s41.key === _e144 &&
            ((_s41.offset = Ic(t, _s41.offset, "clamp")), (_o81 = !0));
        }
        _o81 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
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
        var _t233 = ha(r);
        return ((n[e] = _t233), _t233);
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
        var _o82 = t.getNode();
        if ((e && 0 === n) || (!e && n === _o82.getTextContentSize())) {
          var _t234 = e ? _o82.getPreviousSibling() : _o82.getNextSibling();
          return null === _t234
            ? Di(
                _o82.getParentOrThrow(),
                e,
                _o82.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t234;
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
      return Zr(t, e, n, t);
    }
    function Ri(e, n) {
      var o = e._keyToDOMMap.get(n);
      return (void 0 === o && t(75, n), o);
    }
    function Li(t) {
      var e = t.assignedSlot || t.parentElement;
      if (null !== e) return e;
      var n = t.parentNode;
      return nl(n) ? n.host : null;
    }
    function Ki(t) {
      return Xs(t) ? t : ml(t) ? t.ownerDocument : null;
    }
    function Bi(t) {
      Br();
      Wr()._updateTags.add(t);
    }
    function zi(t) {
      Br();
      Wr()._deferred.push(t);
    }
    function $i(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function Wi(t) {
      var e = Ki(t);
      return e ? e.defaultView : null;
    }
    function Ui(e) {
      var n = e._window;
      return (null === n && t(78), n);
    }
    function Hi(t) {
      return (is(t) && t.isInline()) || (as(t) && t.isInline());
    }
    function ji(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== Xl(e) && is(e)) return e;
        var _t235 = e.getParentOrThrow();
        if (Ji(_t235)) return _t235;
        e = _t235;
      }
      return e;
    }
    function Yi(t) {
      return is(t) && t.isShadowRoot();
    }
    function Ji(t) {
      return fs(t) || Yi(t);
    }
    function Gi(t, e) {
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
    function Vi(e) {
      var n = Wr(),
        o = e.getType(),
        r = zs(n, o);
      void 0 === r && t(200, e.constructor.name, o);
      var s = r.replace,
        i = r.replaceWithKlass;
      if (null !== s) {
        var _n111 = s(e),
          _r60 = _n111.constructor;
        return (
          null !== i
            ? _n111 instanceof i ||
              t(
                201,
                i.name,
                i.getType(),
                _r60.name,
                _r60.getType(),
                e.constructor.name,
                o,
              )
            : (_n111 instanceof e.constructor && _r60 !== e.constructor) ||
              t(202, _r60.name, _r60.getType(), e.constructor.name, o),
          _n111.__key === e.__key &&
            t(203, e.constructor.name, o, _r60.name, _r60.getType()),
          _n111
        );
      }
      return e;
    }
    function qi(e, n) {
      !fs(e.getParent()) || is(n) || as(n) || t(99);
    }
    function Xi(e) {
      var n = ii(e);
      return (null === n && t(63, e), n);
    }
    function Qi(t) {
      if (!t || t.isInline()) return !1;
      if (as(t)) return !0;
      if (is(t)) {
        if (t.isShadowRoot()) {
          var _e145 = t.getParent();
          return !(is(_e145) && _e145.isShadowRoot());
        }
        return !t.canBeEmpty();
      }
      return !1;
    }
    function Zi(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var o = t.parentElement;
      null !== o && o.removeChild(t);
    }
    function tl(t) {
      return n ? (t || window).getSelection() : null;
    }
    function el(t) {
      var e = Wi(t);
      return e ? e.getSelection() : null;
    }
    function nl(t) {
      return xl(t) && "host" in t;
    }
    var ol = [];
    function rl(t) {
      var e = t.getRootNode();
      if (e === t || !nl(e)) return ol;
      var n = [e];
      var o = e.host;
      for (;;) {
        var _t236 = o.getRootNode();
        if (_t236 === o || !nl(_t236)) break;
        (n.push(_t236), (o = _t236.host));
      }
      return n;
    }
    function* sl(t) {
      var e = [t];
      var n;
      for (; (n = e.pop()); ) {
        yield* n.querySelectorAll('[data-lexical-editor="true"]');
        var _t237 = (Xs(n) ? n : n.ownerDocument).createTreeWalker(
          n,
          NodeFilter.SHOW_ELEMENT,
        );
        var _o83 = void 0;
        for (; (_o83 = _t237.nextNode()); )
          _o83.shadowRoot && e.push(_o83.shadowRoot);
      }
    }
    function il(t) {
      return null !== t ? t.ownerDocument : document;
    }
    function ll() {
      var t = jr();
      return il(null !== t ? t._rootElement : null);
    }
    function cl(t, e) {
      if (null === e || "function" != typeof t.getComposedRanges) return null;
      var n = rl(e);
      if (0 === n.length) return null;
      var o = t.getComposedRanges;
      try {
        var _e146 = o.call(t, { shadowRoots: n })[0];
        if (void 0 !== _e146) return _e146;
      } catch (t) {}
      try {
        var _e147 = o.apply(t, n)[0];
        if (void 0 !== _e147) return _e147;
      } catch (t) {}
      return null;
    }
    function al(t, e) {
      var n = cl(t, e);
      if (null !== n) {
        var _t238 = fl(n);
        if (null !== _t238) return _t238;
      }
      return t.rangeCount > 0 ? t.getRangeAt(0) : null;
    }
    function ul(t, e) {
      var n = cl(t, e);
      return null === n ? t : dl(n, hl(t));
    }
    function fl(t) {
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
    function dl(t, e) {
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
    function hl(t) {
      return t.direction;
    }
    function gl(t) {
      var e = t.getRootNode();
      return Xs(e) || nl(e) ? e.activeElement : null;
    }
    function _l(t) {
      var e = t.activeElement;
      for (; null !== e && null !== e.shadowRoot; ) {
        var _t239 = e.shadowRoot.activeElement;
        if (null === _t239) break;
        e = _t239;
      }
      return e;
    }
    function pl(t) {
      var e = t.target;
      if (
        null !== e &&
        ml(e) &&
        null !== e.shadowRoot &&
        "function" == typeof t.composedPath
      ) {
        var _e148 = t.composedPath();
        if (_e148.length > 0) return _e148[0];
      }
      return e;
    }
    function ml(t) {
      return yl(t) && 1 === t.nodeType;
    }
    function yl(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function xl(t) {
      return yl(t) && 11 === t.nodeType;
    }
    var Cl =
      /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
    function Sl(t) {
      return (
        !(!ml(t) || !t.style.display.startsWith("inline")) ||
        Cl.test(t.nodeName)
      );
    }
    var Tl =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function Nl(t) {
      return (
        (!ml(t) || !t.style.display.startsWith("inline")) && Tl.test(t.nodeName)
      );
    }
    function vl(t) {
      if (as(t) && !t.isInline()) return !0;
      if (!is(t) || Ji(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || Cs(e) || wo(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function kl() {
      return Wr();
    }
    function El(t) {
      if (t === void 0) {
        t = kl();
      }
      return t._config.dom || Ds;
    }
    function Ol(e, n, o) {
      if (o === void 0) {
        o = kl();
      }
      var r = El(o).$getDOMSlot(e, n, o);
      return (is(e) && (bl(r) || t(344, e.getKey(), e.getType())), r);
    }
    function bl(t) {
      return t instanceof _$;
    }
    function Ml(t, e, n) {
      if (n === void 0) {
        n = kl();
      }
      return Qs(Ol(t, e, n).element);
    }
    var Al = new WeakMap(),
      wl = new Map();
    function Dl(e) {
      if (!e._readOnly && e.isEmpty()) return wl;
      e._readOnly || t(192);
      var n = Al.get(e);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref41 of t._nodeMap) {
              var _n112 = _ref41[0];
              var _o84 = _ref41[1];
              {
                var _t240 = _o84.__type;
                var _r61 = e.get(_t240);
                (_r61 || ((_r61 = new Map()), e.set(_t240, _r61)),
                  _r61.set(_n112, _o84));
              }
            }
            return e;
          })(e)),
          Al.set(e, n)),
        n
      );
    }
    function Il(t) {
      var e = t.constructor.clone(t);
      return (e.afterCloneFrom(t), e);
    }
    function Pl(t, e) {
      var n = t.getAttribute("data-lexical-indent");
      if (null !== n) {
        var _t241 = parseInt(n, 10);
        if (Number.isFinite(_t241) && _t241 >= 0)
          return void e.setIndent(_t241);
      }
      var o = parseInt(t.style.paddingInlineStart, 10) || 0,
        r = Math.round(o / 40);
      e.setIndent(r);
    }
    function Fl(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function Rl(t, e) {
      var n = e.style.textAlign;
      return n && n in D ? t.setFormat(n) : t;
    }
    function Ll(t, e) {
      ((t.__lexicalUnmanaged = !0),
        e &&
          void 0 !== e.captureSelection &&
          (t.__lexicalCapturedSelection = e.captureSelection));
    }
    function Kl(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function Bl(t, e) {
      if (e === void 0) {
        e = kl();
      }
      var n = e.isEditable();
      ((t.contentEditable = n ? "true" : "false"),
        n ? (t.__lexicalEditor = e) : delete t.__lexicalEditor);
    }
    function zl(t, e) {
      var n = t;
      for (; null != n; ) {
        if (!0 === n.__lexicalCapturedSelection) return !0;
        if (ml(n) && n.hasAttribute("data-lexical-slot")) return !1;
        if (void 0 !== ai(n, e)) return !1;
        n = Li(n);
      }
      return !1;
    }
    function $l(t, e) {
      return (
        (function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        })(t, e) && t[e] !== _to5[e]
      );
    }
    var Wl = new WeakMap();
    function Ul(e) {
      var n = Wl.get(e);
      if (n) return n;
      var o =
          null != e.prototype && R in e.prototype ? e.prototype[R]() : void 0,
        r = (function (e) {
          if (!(e === _to5 || e.prototype instanceof _to5)) {
            var _n113 = "<unknown>",
              _o85 = "<unknown>";
            try {
              _n113 = e.getType();
            } catch (t) {}
            try {
              _Fs.version && (_o85 = JSON.parse(_Fs.version));
            } catch (t) {}
            t(290, e.name, _n113, _o85);
          }
          return e === _cs || e === _ss4 || e === _to5;
        })(e),
        s = !r && $l(e, "getType") ? e.getType() : void 0;
      var i,
        l = s;
      if (o)
        if (s) i = o[s];
        else {
          for (var _ref43 of Object.entries(o)) {
            var _t242 = _ref43[0];
            var _e149 = _ref43[1];
            ((l = _t242), (i = _e149));
          }
          if (!i)
            for (var _t243 of Object.getOwnPropertySymbols(o)) {
              var _e150 = o[_t243];
              if (_e150) {
                i = _e150;
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
            return (Ls(t), new e());
          }),
        $l(e, "importJSON") ||
          (e.importJSON =
            (i && i.$importJSON) ||
            function (t) {
              return new e().updateFromJSON(t);
            }),
        !$l(e, "importDOM") && i)
      ) {
        var _i27 = i,
          _t244 = _i27.importDOM;
        _t244 &&
          (e.importDOM = function () {
            return _t244;
          });
      }
      var c = { klass: e, ownNodeConfig: i, ownNodeType: l };
      return (Wl.set(e, c), c);
    }
    function* Hl(t) {
      for (var _e151 = t; _e151 && (_e151 === _to5 || eo(_e151.prototype)); ) {
        var _t245 = Ul(_e151);
        (yield _t245,
          (_e151 =
            (_t245.ownNodeConfig && _t245.ownNodeConfig["extends"]) ||
            Jl(_e151)));
      }
    }
    var jl = function jl(t, e) {
      var n = t;
      for (; null != n && !fs(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function Yl(e, n) {
      var o = [];
      var r = e.__first;
      for (; null !== r; ) {
        var _e152 = null === n ? ii(r) : n.get(r);
        (null == _e152 && t(174), o.push(r), (r = _e152.__next));
      }
      return o;
    }
    function Jl(t) {
      var e = Object.getPrototypeOf(t);
      if ("function" == typeof e && e !== Function.prototype) return e;
      var n = t.prototype && Object.getPrototypeOf(t.prototype);
      return n ? n.constructor : null;
    }
    var Gl = new Map();
    function Vl(t) {
      return is(t) || as(t);
    }
    function ql(t) {
      return is(t) || as(t);
    }
    function Xl(t) {
      var e = t.getLatest();
      return ql(e) ? e.__slotHost : null;
    }
    function Ql(e) {
      var n = Xl(e);
      if (null === n) return null;
      var o = ii(n);
      return (is(o) || as(o) || t(370), o);
    }
    function Zl(t) {
      var e = Ql(t);
      if (null === e) return null;
      var n = t.getLatest().__key;
      for (var _ref45 of ec(e)) {
        var _t246 = _ref45[0];
        var _o86 = _ref45[1];
        if (_o86 === n) return _t246;
      }
      return null;
    }
    function tc(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== Xl(e)) return e;
        e = e.getParent();
      }
      return null;
    }
    function ec(t) {
      var e = t.getLatest();
      return Vl(e) && null !== e.__slots ? e.__slots : Gl;
    }
    function nc(t) {
      return Array.from(ec(t).keys());
    }
    function oc(t, e) {
      var n = ec(t).get(e);
      return void 0 === n ? null : ii(n);
    }
    var rc = ["__proto__", "constructor", "prototype"],
      sc = Symbol("slotMapOwner");
    function ic(t) {
      var e = t.__slots;
      return (
        (null !== e && e[sc] === t) ||
          ((e = new Map(e)), (e[sc] = t), (t.__slots = e)),
        e
      );
    }
    var lc = new WeakMap(),
      cc = [];
    function ac(t) {
      for (var _ref47 of Hl(t)) {
        var _e153 = _ref47.ownNodeConfig;
        {
          var _t247 = _e153 && _e153.slots;
          if (_t247) return _t247;
        }
      }
      return cc;
    }
    function uc(t) {
      var e = "";
      for (var _n114 of nc(t)) {
        var _o87 = oc(t, _n114);
        null !== _o87 && (e += _o87.getTextContent());
      }
      return e;
    }
    function fc(t, e, n) {
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
    function dc(e) {
      var n = e.__slots;
      if (null === n || n.size < 2) return;
      var o = (function (e) {
        var n = lc.get(e);
        if (void 0 === n) {
          var _o88 = ac(e),
            _r62 = new Map();
          for (var _n115 of _o88)
            (rc.includes(_n115) && t(371, e.name, _n115),
              _r62.has(_n115) && t(372, e.name, _n115),
              _r62.set(_n115, _r62.size));
          ((n = _r62), lc.set(e, n));
        }
        return n;
      })(e.constructor);
      var r = null,
        s = !0;
      for (var _t248 of n.keys()) {
        if (null !== r && fc(r, _t248, o) > 0) {
          s = !1;
          break;
        }
        r = _t248;
      }
      if (s) return;
      var i = Array.from(n).sort(function (_ref48, _ref49) {
        var t = _ref48[0];
        var e = _ref49[0];
        return fc(t, e, o);
      });
      n.clear();
      for (var _ref51 of i) {
        var _t249 = _ref51[0];
        var _e154 = _ref51[1];
        n.set(_t249, _e154);
      }
    }
    function hc(e, n, o) {
      ("__proto__" !== n && "constructor" !== n && "prototype" !== n) ||
        t(373, n);
      var r = e.getLatest();
      if (null !== r.__slots && r.__slots.get(n) === o.getLatest().__key)
        return r;
      ((!is(o) && !as(o)) || o.isInline()) && t(374, o.__key);
      var s = e.getWritable(),
        i = ic(s),
        l = i.get(n);
      void 0 !== l && pc(l);
      var c = o.getWritable(),
        a = Ql(c);
      if (null !== a) {
        var _t250 = Zl(c);
        (null !== _t250 && ic(a.getWritable())["delete"](_t250),
          (c.__slotHost = null));
      }
      return (
        ei(c),
        (c.__slotHost = s.__key),
        i.set(n, c.__key),
        dc(s),
        (function () {
          var t = kl();
          ((t._slotsUsed = !0),
            t._pendingEditorState && (t._pendingEditorState._slotsUsed = !0));
        })(),
        s
      );
    }
    function gc(t, e) {
      var n = t.getWritable();
      if (null === n.__slots) return n;
      var o = n.__slots.get(e);
      return (void 0 !== o && (pc(o), ic(n)["delete"](e)), n);
    }
    function _c(t, e) {}
    function pc(e) {
      var n = ii(e);
      if (null === n) return;
      var o = n.getWritable();
      (ql(o) || t(377, e), (o.__slotHost = null), o.remove());
    }
    var mc = { next: "previous", previous: "next" };
    var _yc4 = (function () {
      function yc(t) {
        this.origin = t;
      }
      var _proto18 = yc.prototype;
      _proto18[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return Uc({
            hasNext: Ec,
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
        return wc(this.getNodeAtCaret(), this.direction);
      };
      _proto18.getSiblingCaret = function getSiblingCaret() {
        return wc(this.origin, this.direction);
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
          var _t251 = s.getAdjacentCaret();
          null !== _t251 && l.size < e;
          _t251 = _t251.getAdjacentCaret()
        ) {
          var _e155 = _t251.origin.getWritable();
          l.set(_e155.getKey(), _e155);
        }
        for (var _e156 of r) {
          if (l.size > 0) {
            var _n116 = s.getNodeAtCaret();
            if (_n116) {
              if (
                (l["delete"](_n116.getKey()),
                l["delete"](_e156.getKey()),
                _n116.is(_e156) || s.origin.is(_e156))
              );
              else {
                var _t252 = _e156.getParent();
                (_t252 && _t252.is(i) && _e156.remove(), _n116.replace(_e156));
              }
            } else null === _n116 && t(263, Array.from(l).join(" "));
          } else s.insert(_e156);
          s = wc(_e156, this.direction);
        }
        for (var _t253 of l.values()) _t253.remove();
        return this;
      };
      return yc;
    })();
    var _xc3 = (function (_yc) {
      function xc() {
        var _this6;
        for (
          var _len7 = arguments.length, args = new Array(_len7), _key7 = 0;
          _key7 < _len7;
          _key7++
        ) {
          args[_key7] = arguments[_key7];
        }
        return (
          ((_this6 = _yc.call.apply(_yc, [this].concat(args)) || this),
          (_this6.type = "child"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(xc, _yc);
      var _proto19 = xc.prototype;
      _proto19.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Fc(t, this.direction);
      };
      _proto19.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return wc(Tc(this.getParentAtCaret(), t), this.direction);
      };
      _proto19.getFlipped = function getFlipped() {
        var t = Sc(this.direction);
        return wc(this.getNodeAtCaret(), t) || Fc(this.origin, t);
      };
      _proto19.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto19.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto19.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof xc &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto19.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return xc;
    })(_yc4);
    var Cc = { root: fs, shadowRoot: Ji };
    function Sc(t) {
      return mc[t];
    }
    function Tc(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return null === t || Cc[e](t) ? null : null === Xl(t) ? t : null;
    }
    var _Nc3 = (function (_yc2) {
      function Nc() {
        var _this7;
        for (
          var _len8 = arguments.length, args = new Array(_len8), _key8 = 0;
          _key8 < _len8;
          _key8++
        ) {
          args[_key8] = arguments[_key8];
        }
        return (
          ((_this7 = _yc2.call.apply(_yc2, [this].concat(args)) || this),
          (_this7.type = "sibling"),
          babelHelpers.assertThisInitialized(_this7)) ||
          babelHelpers.assertThisInitialized(_this7)
        );
      }
      babelHelpers.inheritsLoose(Nc, _yc2);
      var _proto20 = Nc.prototype;
      _proto20.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : wc(t, this.direction);
      };
      _proto20.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto20.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto20.getChildCaret = function getChildCaret() {
        return is(this.origin) ? Fc(this.origin, this.direction) : null;
      };
      _proto20.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return wc(Tc(this.getParentAtCaret(), t), this.direction);
      };
      _proto20.getFlipped = function getFlipped() {
        var t = Sc(this.direction);
        return (
          wc(this.getNodeAtCaret(), t) || Fc(this.origin.getParentOrThrow(), t)
        );
      };
      _proto20.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Nc &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto20.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof Nc || t instanceof _vc3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return Nc;
    })(_yc4);
    var _vc3 = (function (_yc3) {
      function vc(t, e) {
        var _this8;
        ((_this8 = _yc3.call(this, t) || this),
          (_this8.type = "text"),
          (_this8.offset = e));
        return _this8;
      }
      babelHelpers.inheritsLoose(vc, _yc3);
      var _proto21 = vc.prototype;
      _proto21.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Dc(t, this.direction, this.offset);
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
        return wc(Tc(this.getParentAtCaret(), t), this.direction);
      };
      _proto21.getFlipped = function getFlipped() {
        return Dc(this.origin, Sc(this.direction), this.offset);
      };
      _proto21.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof vc &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto21.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _Nc3 || t instanceof vc) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto21.getSiblingCaret = function getSiblingCaret() {
        return wc(this.origin, this.direction);
      };
      return vc;
    })(_yc4);
    function kc(t) {
      return t instanceof _vc3;
    }
    function Ec(t) {
      return t instanceof _Nc3;
    }
    function Oc(t) {
      return t instanceof _xc3;
    }
    var bc = {
        next: (function (_vc) {
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
              ((_this9 = _vc.call.apply(_vc, [this].concat(args)) || this),
              (_this9.direction = "next"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class, _vc);
          var _proto22 = _class.prototype;
          _proto22.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto22.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_vc3),
        previous: (function (_vc2) {
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
              ((_this0 = _vc2.call.apply(_vc2, [this].concat(args)) || this),
              (_this0.direction = "previous"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class3, _vc2);
          var _proto23 = _class3.prototype;
          _proto23.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto23.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_vc3),
      },
      Mc = {
        next: (function (_Nc) {
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
              ((_this1 = _Nc.call.apply(_Nc, [this].concat(args)) || this),
              (_this1.direction = "next"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class5, _Nc);
          var _proto24 = _class5.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_Nc3),
        previous: (function (_Nc2) {
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
              ((_this10 = _Nc2.call.apply(_Nc2, [this].concat(args)) || this),
              (_this10.direction = "previous"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class7, _Nc2);
          var _proto25 = _class7.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_Nc3),
      },
      Ac = {
        next: (function (_xc) {
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
              ((_this11 = _xc.call.apply(_xc, [this].concat(args)) || this),
              (_this11.direction = "next"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class9, _xc);
          var _proto26 = _class9.prototype;
          _proto26.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto26.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_xc3),
        previous: (function (_xc2) {
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
              ((_this12 = _xc2.call.apply(_xc2, [this].concat(args)) || this),
              (_this12.direction = "previous"),
              babelHelpers.assertThisInitialized(_this12)) ||
              babelHelpers.assertThisInitialized(_this12)
            );
          }
          babelHelpers.inheritsLoose(_class1, _xc2);
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
        })(_xc3),
      };
    function wc(t, e) {
      return t ? new Mc[e](t) : null;
    }
    function Dc(t, e, n) {
      return t ? new bc[e](t, Ic(t, n)) : null;
    }
    function Ic(t, n, o) {
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
    function Pc(t, e) {
      return new _Bc(t, e);
    }
    function Fc(t, e) {
      return is(t) ? new Ac[e](t) : null;
    }
    function Rc(t) {
      return (t && t.getChildCaret()) || t;
    }
    function Lc(t) {
      return t && Rc(t.getAdjacentCaret());
    }
    var _Kc = (function () {
      function Kc(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto28 = Kc.prototype;
      _proto28.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new Kc(t, e, this.direction);
      };
      _proto28.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto28.getTextSlices = function getTextSlices() {
        var _this16 = this;
        var t = function t(_t254) {
            var e = _this16[_t254].getLatest();
            return kc(e)
              ? (function (t, e) {
                  var n = t.direction,
                    o = t.origin,
                    r = Ic(o, "focus" === e ? Sc(n) : n);
                  return Pc(t, r - t.offset);
                })(e, _t254)
              : null;
          },
          e = t("anchor"),
          n = t("focus");
        if (e && n) {
          var _t255 = e.caret,
            _o89 = n.caret;
          if (_t255.isSameNodeCaret(_o89))
            return [Pc(_t255, _o89.offset - _t255.offset), null];
        }
        return [e, n];
      };
      _proto28.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = kc(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          o = kc(n),
          r = function r(e) {
            return e.isSameNodeCaret(n) ? null : Lc(e) || e.getParentCaret(t);
          };
        return Uc({
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
      return Kc;
    })();
    var _Bc = (function () {
      function Bc(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto29 = Bc.prototype;
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
        return Dc(t.setTextContent(r.slice(0, n) + r.slice(o)), e, n);
      };
      return Bc;
    })();
    function zc(t) {
      return Wc(t, wc(hi(), t.direction));
    }
    function $c(t) {
      return Wc(t, t);
    }
    function Wc(e, n) {
      return (
        e.direction !== n.direction && t(265),
        new _Kc(e, n, e.direction)
      );
    }
    function Uc(t) {
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
    function Hc(e, n) {
      var o = Gc(e.origin, n.origin);
      switch (
        (null === o && t(275, e.origin.getKey(), n.origin.getKey()), o.type)
      ) {
        case "same": {
          var _t256 = "text" === e.type,
            _o90 = "text" === n.type;
          return _t256 && _o90
            ? (function (t, e) {
                return Math.sign(t - e);
              })(e.offset, n.offset)
            : e.type === n.type
              ? 0
              : _t256
                ? -1
                : _o90
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
          return jc(o);
      }
    }
    function jc(t) {
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
    function Yc(t, e) {
      return e.is(t);
    }
    function Jc(t) {
      return is(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function Gc(e, n) {
      if (e.is(n)) return { commonAncestor: e, type: "same" };
      var o = new Map();
      for (
        var _Jc = Jc(e), _t257 = _Jc[0], _n117 = _Jc[1];
        _t257;
        _n117 = _t257, _t257 = _t257.getParent()
      )
        o.set(_t257, _n117);
      for (
        var _Jc2 = Jc(n), _r63 = _Jc2[0], _s42 = _Jc2[1];
        _r63;
        _s42 = _r63, _r63 = _r63.getParent()
      ) {
        var _i28 = o.get(_r63);
        if (void 0 !== _i28)
          return null === _i28
            ? (Yc(e, _r63) || t(276),
              { commonAncestor: _r63, type: "ancestor" })
            : null === _s42
              ? (Yc(n, _r63) || t(277),
                { commonAncestor: _r63, type: "descendant" })
              : (((is(_i28) || Yc(e, _i28)) &&
                  (is(_s42) || Yc(n, _s42)) &&
                  _r63.is(_i28.getParent()) &&
                  _r63.is(_s42.getParent())) ||
                  t(278),
                { a: _i28, b: _s42, commonAncestor: _r63, type: "branch" });
      }
      return null;
    }
    function Vc(e, n) {
      var o = e.type,
        r = e.key,
        s = e.offset,
        i = Xi(e.key);
      return "text" === o
        ? (wo(i) || t(266, i.getType(), r), Dc(i, n, s))
        : (is(i) || t(267, i.getType(), r), ca(i, e.offset, n));
    }
    function qc(e, n) {
      var o = n.origin,
        r = n.direction,
        s = "next" === r;
      kc(n)
        ? e.set(o.getKey(), n.offset, "text")
        : Ec(n)
          ? wo(o)
            ? e.set(o.getKey(), Ic(o, r), "text")
            : e.set(
                o.getParentOrThrow().getKey(),
                o.getIndexWithinParent() + (s ? 1 : 0),
                "element",
              )
          : ((Oc(n) && is(o)) || t(268),
            e.set(o.getKey(), s ? 0 : o.getChildrenSize(), "element"));
    }
    function Xc(t) {
      var e = hr(),
        n = Wo(e) ? e : ur();
      return (Qc(n, t), gi(n), n);
    }
    function Qc(t, e) {
      (qc(t.anchor, e.anchor), qc(t.focus, e.focus));
    }
    function Zc(t) {
      var e = t.anchor,
        n = t.focus,
        o = Vc(e, "next"),
        r = Vc(n, "next"),
        s = Hc(o, r) <= 0 ? "next" : "previous";
      return Wc(ia(o, s), ia(r, s));
    }
    function ta(t) {
      var e = t.direction,
        n = t.origin,
        o = wc(n, Sc(e)).getNodeAtCaret();
      return o ? wc(o, e) : Fc(n.getParentOrThrow(), e);
    }
    function ea(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _o91 = Oc(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _o91;
        _o91 = _o91.getParentCaret(e)
      )
        n.push(ta(_o91));
      return n;
    }
    function na(t) {
      return !!t && t.origin.isAttached();
    }
    function oa(e, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (e.isCollapsed()) return e;
      var o = "root",
        r = "next";
      var s = n;
      var i = la(e, r),
        l = ea(i.anchor, o),
        c = ea(i.focus.getFlipped(), o),
        a = new Set(),
        u = [];
      for (var _t258 of i.iterNodeCarets(o))
        if (Oc(_t258)) a.add(_t258.origin.getKey());
        else if (Ec(_t258)) {
          var _e157 = _t258.origin;
          (is(_e157) && !a.has(_e157.getKey())) || u.push(_e157);
        }
      for (var _t259 of u) _t259.remove();
      for (var _t260 of i.getTextSlices()) {
        if (!_t260) continue;
        var _e158 = _t260.caret.origin,
          _n118 = _e158.getTextContentSize(),
          _o92 = ta(wc(_e158, r)),
          _i29 = _e158.getMode();
        if (
          (Math.abs(_t260.distance) === _n118 && "removeEmptySlices" === s) ||
          ("token" === _i29 && 0 !== _t260.distance)
        )
          _o92.remove();
        else if (0 !== _t260.distance) {
          s = "removeEmptySlices";
          var _e159 = _t260.removeTextSlice();
          var _n119 = _t260.caret.origin;
          if ("segmented" === _i29) {
            var _t261 = _e159.origin,
              _n120 = Ao(_t261.getTextContent())
                .setStyle(_t261.getStyle())
                .setFormat(_t261.getFormat());
            (_o92.replaceOrInsert(_n120), (_e159 = Dc(_n120, r, _e159.offset)));
          }
          (_n119.is(l[0].origin) && (l[0] = _e159),
            _n119.is(c[0].origin) && (c[0] = _e159.getFlipped()));
        }
      }
      var f, d;
      for (var _t262 of l)
        if (na(_t262)) {
          f = ra(_t262);
          break;
        }
      for (var _t263 of c)
        if (na(_t263)) {
          d = ra(_t263);
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
            for (var _o93 = c; _o93 < t.length; _o93++) {
              var _r64 = t[_o93];
              if (Ji(_r64)) return;
              !n && e(_r64) && (n = _r64);
            }
            return n;
          },
          u = a(s, vl),
          f =
            u &&
            a(i, function (t) {
              return n.has(t.getKey()) && vl(t);
            });
        if (f && nc(f).length > 0) return null;
        return u && f ? [u, f] : null;
      })(f, d, a);
      if (h) {
        var _t264 = h[0],
          _e160 = h[1];
        Fc(_t264, "previous").splice(0, _e160.getChildren());
        var _n121 = _e160.getParent();
        for (_e160.remove(!0); _n121 && _n121.isEmpty(); ) {
          var _t265 = _n121;
          ((_n121 = _n121.getParent()), _t265.remove(!0));
        }
      } else if (d) {
        var _t266 = (function (t) {
            if (Oc(t)) {
              var _e162 = t.origin;
              if (vl(_e162)) return _e162;
            } else {
              var _e163 = t.getParentAtCaret();
              if (_e163 && vl(_e163)) return _e163;
            }
            return null;
          })(d),
          _e161 = _t266 && _t266.getParent(),
          _n122 = _t266 && _t266.getParents().findLast(Yi);
        if (
          _t266 &&
          _e161 &&
          !fs(_e161) &&
          _t266.isEmpty() &&
          a.has(_t266.getKey()) &&
          0 === nc(_t266).length &&
          (!_n122 || a.has(_n122.getKey()))
        ) {
          _t266.remove(!0);
          var _n123 = _e161;
          for (; _n123 && !fs(_n123) && _n123.isEmpty(); ) {
            var _t267 = _n123.getParent();
            if (_t267 && fs(_t267) && _t267.getChildrenSize() <= 1) break;
            var _e164 = _n123;
            ((_n123 = _t267), _e164.remove(!0));
          }
        }
      }
      var g = [f, d].concat(l, c).find(na);
      if (g) {
        return $c(ia(ra(g), e.direction));
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
    function ra(t) {
      var e = (function (t) {
          var e = t;
          for (; Oc(e); ) {
            var _t268 = Lc(e);
            if (!Oc(_t268)) break;
            e = _t268;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (wo(e.origin)) return kc(e) ? e : Dc(e.origin, n, n);
      var o = e.getAdjacentCaret();
      return Ec(o) && wo(o.origin) ? Dc(o.origin, n, Sc(n)) : e;
    }
    function sa(t) {
      return kc(t) && t.offset !== Ic(t.origin, t.direction);
    }
    function ia(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function la(t, e) {
      return t.direction === e ? t : Wc(ia(t.focus, e), ia(t.anchor, e));
    }
    function ca(t, e, n) {
      var o = Fc(t, "next");
      for (var _t269 = 0; _t269 < e; _t269++) {
        var _t270 = o.getAdjacentCaret();
        if (null === _t270) break;
        o = _t270;
      }
      return ia(o, n);
    }
    function aa(e) {
      var n = e.origin,
        o = e.offset,
        r = e.direction;
      if (o === Ic(n, r)) return e.getSiblingCaret();
      if (o === Ic(n, Sc(r))) return ta(e.getSiblingCaret());
      var _n$splitText2 = n.splitText(o),
        s = _n$splitText2[0];
      return (wo(s) || t(281), ia(wc(s, "next"), r));
    }
    function ua(t, e) {
      return !0;
    }
    function fa(t, _temp) {
      var _ref53 = _temp === void 0 ? {} : _temp,
        _ref53$$copyElementNo = _ref53.$copyElementNode,
        e = _ref53$$copyElementNo === void 0 ? Gi : _ref53$$copyElementNo,
        _ref53$$splitTextPoin = _ref53.$splitTextPointCaretNext,
        n = _ref53$$splitTextPoin === void 0 ? aa : _ref53$$splitTextPoin,
        _ref53$rootMode = _ref53.rootMode,
        o = _ref53$rootMode === void 0 ? "shadowRoot" : _ref53$rootMode,
        _ref53$$shouldSplit = _ref53.$shouldSplit,
        r = _ref53$$shouldSplit === void 0 ? ua : _ref53$$shouldSplit,
        _ref53$removeEmptyDes = _ref53.removeEmptyDestination,
        s = _ref53$removeEmptyDes === void 0 ? !1 : _ref53$removeEmptyDes;
      if (kc(t)) return n(t);
      var i = t.getParentCaret(o);
      if (i) {
        var _n124 = i.origin;
        if (Oc(t)) {
          var _t271 = ta(i);
          if (s && _n124.isEmpty()) return (_n124.remove(), _t271);
          if (!_n124.canBeEmpty() || !r(_n124, "first")) return _t271;
        }
        var _o94 = (function (t) {
          var e = [];
          for (
            var _n125 = t.getAdjacentCaret();
            _n125;
            _n125 = _n125.getAdjacentCaret()
          )
            e.push(_n125.origin);
          return e;
        })(t);
        (_o94.length > 0 || (!s && _n124.canBeEmpty() && r(_n124, "last"))) &&
          i.insert(e(_n124).splice(0, 0, _o94));
      }
      return i;
    }
    function da(e, n, o) {
      var r = ia(n, "next");
      (kc(r) &&
        (0 === r.offset
          ? (r = wc(r.origin, "previous").getFlipped())
          : r.offset === r.origin.getTextContentSize() &&
            (r = wc(r.origin, "next"))),
        r.origin.is(e) &&
          (Ec(r) || t(342, e.getKey(), e.getType()), (r = ta(r))),
        (e.is(r.getNodeAtCaret()) || e.is(r.getFlipped().getNodeAtCaret())) &&
          e.remove(!0));
      for (var _t272 = r; _t272; _t272 = fa(_t272, o)) r = _t272;
      return (
        kc(r) && t(283),
        r.insert(e.isInline() ? Es().append(e) : e),
        ia(wc(e.getLatest(), "next"), n.direction)
      );
    }
    function ha() {
      var e = [];
      for (
        var _len13 = arguments.length, t = new Array(_len13), _key13 = 0;
        _key13 < _len13;
        _key13++
      ) {
        t[_key13] = arguments[_key13];
      }
      for (var _n126 of t)
        if (_n126 && "string" == typeof _n126)
          for (var _ref55 of _n126.matchAll(/\S+/g)) {
            var _t273 = _ref55[0];
            e.push(_t273);
          }
      return e;
    }
    function ga() {
      for (
        var _len14 = arguments.length, t = new Array(_len14), _key14 = 0;
        _key14 < _len14;
        _key14++
      ) {
        t[_key14] = arguments[_key14];
      }
      return function () {
        for (var _e165 = t.length - 1; _e165 >= 0; _e165--) t[_e165]();
        t.length = 0;
      };
    }
    ((exports.$addUpdateTag = Bi),
      (exports.$applyNodeReplacement = Vi),
      (exports.$assumeActiveEditor = function (t) {
        (null !== $r() && null === wr && (wr = t), wr !== t && e(378));
      }),
      (exports.$caretFromPoint = Vc),
      (exports.$caretRangeFromSelection = Zc),
      (exports.$cloneWithProperties = Il),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = Il(t))[Xn] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = Hc),
      (exports.$copyNode = Gi),
      (exports.$create = function (t) {
        var e = kl();
        return (
          Br(),
          new (e.resolveRegisteredNodeAfterReplacements(
            e.getRegisteredNode(t),
          ).klass)()
        );
      }),
      (exports.$createChildrenArray = Yl),
      (exports.$createLineBreakNode = xs),
      (exports.$createNodeSelection = fr),
      (exports.$createParagraphNode = Es),
      (exports.$createPoint = Lo),
      (exports.$createRangeSelection = ur),
      (exports.$createRangeSelectionFromDom = function (t, e) {
        return dr(null, t, e, null);
      }),
      (exports.$createTabNode = Po),
      (exports.$createTextNode = Ao),
      (exports.$extendCaretToRange = zc),
      (exports.$findMatchingParent = jl),
      (exports.$formatText = jo),
      (exports.$fullReconcile = Ur),
      (exports.$generateNodesFromRawText = Nr),
      (exports.$getAdjacentChildCaret = Lc),
      (exports.$getAdjacentNode = Ii),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          o = t,
          r = Lc(o);
        for (; null === r; ) {
          if ((n--, (r = o.getParentCaret(e)), !r)) return null;
          ((o = r), (r = Lc(o)));
        }
        return r && [r, n];
      }),
      (exports.$getCaretInDirection = ia),
      (exports.$getCaretRange = Wc),
      (exports.$getCaretRangeInDirection = la),
      (exports.$getCharacterOffsets = Jo),
      (exports.$getChildCaret = Fc),
      (exports.$getChildCaretAtIndex = ca),
      (exports.$getChildCaretOrSelf = Rc),
      (exports.$getCollapsedCaretRange = $c),
      (exports.$getCommonAncestor = Gc),
      (exports.$getCommonAncestorResultBranchOrder = jc),
      (exports.$getDOMSlot = Ol),
      (exports.$getDOMTextNode = Ml),
      (exports.$getDocument = ll),
      (exports.$getEditor = kl),
      (exports.$getEditorDOMRenderConfig = El),
      (exports.$getNearestNodeFromDOMNode = ui),
      (exports.$getNearestRootOrShadowRoot = ji),
      (exports.$getNodeByKey = ii),
      (exports.$getNodeByKeyOrThrow = Xi),
      (exports.$getNodeFromDOMNode = li),
      (exports.$getPreviousSelection = gr),
      (exports.$getRoot = hi),
      (exports.$getSelection = hr),
      (exports.$getSiblingCaret = wc),
      (exports.$getSlot = oc),
      (exports.$getSlotFrame = tc),
      (exports.$getSlotHost = Ql),
      (exports.$getSlotNameWithinHost = Zl),
      (exports.$getSlotNames = nc),
      (exports.$getState = at),
      (exports.$getStateChange = function (t, e, n) {
        var o = at(t, n, it),
          r = at(e, n, it);
        return n.isEqual(o, r) ? null : [o, r];
      }),
      (exports.$getTextContent = function () {
        var t = hr();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = Ic),
      (exports.$getTextPointCaret = Dc),
      (exports.$getTextPointCaretSlice = Pc),
      (exports.$getWritableNodeState = ht),
      (exports.$hasAncestor = $i),
      (exports.$hasUpdateTag = function (t) {
        return Wr()._updateTags.has(t);
      }),
      (exports.$insertNodeToNearestRootAtCaret = da),
      (exports.$insertNodes = function (t) {
        var e = hr() || gr();
        (null === e && (e = hi().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = cr),
      (exports.$isChildCaret = Oc),
      (exports.$isDecoratorNode = as),
      (exports.$isEditorState = function (t) {
        return t instanceof _s47;
      }),
      (exports.$isElementDOMSlot = bl),
      (exports.$isElementNode = is),
      (exports.$isExtendableTextPointCaret = sa),
      (exports.$isInlineElementOrDecoratorNode = Hi),
      (exports.$isInlineFormattable = Co),
      (exports.$isLeafNode = function (t) {
        return wo(t) || Cs(t) || as(t);
      }),
      (exports.$isLexicalNode = eo),
      (exports.$isLineBreakNode = Cs),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _yc4;
      }),
      (exports.$isNodeSelection = Ho),
      (exports.$isParagraphNode = Os),
      (exports.$isRangeSelection = Wo),
      (exports.$isRootNode = fs),
      (exports.$isRootOrShadowRoot = Ji),
      (exports.$isSelectionCapturedInDecoratorInput = Ws),
      (exports.$isShadowRootNode = Yi),
      (exports.$isSiblingCaret = Ec),
      (exports.$isSlotChild = ql),
      (exports.$isSlotHost = Vl),
      (exports.$isTabNode = Fo),
      (exports.$isTextNode = wo),
      (exports.$isTextPointCaret = kc),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _Bc;
      }),
      (exports.$isTokenOrSegmented = Vs),
      (exports.$isTokenOrTab = Gs),
      (exports.$markSlotEditable = Bl),
      (exports.$needsBlockCursorBeside = Qi),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = $r();
        if (n._readOnly) {
          var _t274 = Dl(n).get(e);
          return _t274 ? Array.from(_t274.values()) : [];
        }
        var o = n._nodeMap,
          r = [];
        for (var _ref57 of o) {
          var _n127 = _ref57[1];
          _n127 instanceof t &&
            _n127.__type === e &&
            _n127.isAttached() &&
            r.push(_n127);
        }
        return r;
      }),
      (exports.$normalizeCaret = ra),
      (exports.$normalizeSelection__EXPERIMENTAL = Nt),
      (exports.$onUpdate = zi),
      (exports.$parseSerializedNode = function (t) {
        return Vr(t, Wr()._nodes);
      }),
      (exports.$removeFromParent = ei),
      (exports.$removeSlot = gc),
      (exports.$removeTextFromCaretRange = oa),
      (exports.$rewindSiblingCaret = ta),
      (exports.$selectAll = function (t) {
        var e = hi();
        if (Wo(t)) {
          var _e166 = t.anchor,
            _n128 = t.focus,
            _o95 = _e166.getNode();
          if (fs(_o95))
            return (
              _e166.set(_o95.getKey(), 0, "element"),
              _n128.set(_o95.getKey(), _o95.getChildrenSize(), "element"),
              Nt(t),
              t
            );
          var _r65 = _o95.getTopLevelElementOrThrow(),
            _s43 = _r65.getParent();
          if (null === _s43)
            return (
              is(_r65) &&
                (_e166.set(_r65.getKey(), 0, "element"),
                _n128.set(_r65.getKey(), _r65.getChildrenSize(), "element"),
                Nt(t)),
              t
            );
          var _i30 = _s43;
          return (
            _e166.set(_i30.getKey(), 0, "element"),
            _n128.set(_i30.getKey(), _i30.getChildrenSize(), "element"),
            Nt(t),
            t
          );
        }
        {
          var _t275 = e.select(0, e.getChildrenSize());
          return (gi(Nt(_t275)), _t275);
        }
      }),
      (exports.$setCompositionKey = ri),
      (exports.$setDirectionFromDOM = Fl),
      (exports.$setFormatFromDOM = Rl),
      (exports.$setPointFromCaret = qc),
      (exports.$setSelection = gi),
      (exports.$setSelectionFromCaretRange = Xc),
      (exports.$setSlot = hc),
      (exports.$setState = function (t, e, n) {
        var o;
        if ((Br(), "function" == typeof n)) {
          var _r66 = t.getLatest(),
            _s44 = at(_r66, e);
          if (((o = n(_s44)), e.isEqual(_s44, o))) return _r66;
        } else o = n;
        var r = t.getWritable();
        return (ht(r).updateFromKnown(e, o), r);
      }),
      (exports.$splitAtPointCaretNext = fa),
      (exports.$splitNode = function (e, n) {
        var o = e.getChildAtIndex(n);
        (null == o && (o = e), Ji(e) && t(102));
        var _r69 = function r(e) {
            var n = e.getParentOrThrow(),
              s = Ji(n),
              i = e !== o || s ? Gi(e) : e;
            if (s)
              return ((is(e) && is(i)) || t(133), e.insertAfter(i), [e, i, i]);
            {
              var _r68 = _r69(n),
                _t276 = _r68[0],
                _o96 = _r68[1],
                _s45 = _r68[2],
                _l17 = e.getNextSiblings();
              return (
                _s45.append.apply(_s45, [i].concat(_l17)),
                [_t276, _o96, i]
              );
            }
          },
          _r67 = _r69(o),
          s = _r67[0],
          i = _r67[1];
        return [s, i];
      }),
      (exports.$updateDOMSelection = Sr),
      (exports.$updateRangeSelectionFromCaretRange = Qc),
      (exports.ArtificialNode__DO_NOT_USE = _ps),
      (exports.BEFORE_INPUT_COMMAND = Ee),
      (exports.BLUR_COMMAND = mn),
      (exports.CAN_REDO_COMMAND = gn),
      (exports.CAN_UNDO_COMMAND = _n),
      (exports.CAN_USE_BEFORE_INPUT = i),
      (exports.CAN_USE_DOM = n),
      (exports.CLEAR_EDITOR_COMMAND = dn),
      (exports.CLEAR_HISTORY_COMMAND = hn),
      (exports.CLICK_COMMAND = ke),
      (exports.COLLABORATION_TAG = oo),
      (exports.COMMAND_PRIORITY_BEFORE_CRITICAL = -4),
      (exports.COMMAND_PRIORITY_BEFORE_EDITOR = -8),
      (exports.COMMAND_PRIORITY_BEFORE_HIGH = -5),
      (exports.COMMAND_PRIORITY_BEFORE_LOW = -7),
      (exports.COMMAND_PRIORITY_BEFORE_NORMAL = -6),
      (exports.COMMAND_PRIORITY_CRITICAL = 4),
      (exports.COMMAND_PRIORITY_EDITOR = Ms),
      (exports.COMMAND_PRIORITY_HIGH = 3),
      (exports.COMMAND_PRIORITY_LOW = 1),
      (exports.COMMAND_PRIORITY_NORMAL = 2),
      (exports.COMPOSITION_END_COMMAND = Me),
      (exports.COMPOSITION_END_TAG = co),
      (exports.COMPOSITION_START_COMMAND = be),
      (exports.COMPOSITION_START_TAG = lo),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = Ie),
      (exports.COPY_COMMAND = an),
      (exports.CUT_COMMAND = un),
      (exports.CUT_TAG = "cut"),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = Ds),
      (exports.DELETE_CHARACTER_COMMAND = Ae),
      (exports.DELETE_LINE_COMMAND = Le),
      (exports.DELETE_WORD_COMMAND = Re),
      (exports.DRAGEND_COMMAND = cn),
      (exports.DRAGOVER_COMMAND = ln),
      (exports.DRAGSTART_COMMAND = sn),
      (exports.DROP_COMMAND = on),
      (exports.DecoratorNode = _cs),
      (exports.ElementNode = _ss4),
      (exports.FOCUS_COMMAND = pn),
      (exports.FORMAT_ELEMENT_COMMAND = rn),
      (exports.FORMAT_TEXT_COMMAND = Ke),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = no),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = en),
      (exports.INPUT_COMMAND = Oe),
      (exports.INSERT_LINE_BREAK_COMMAND = we),
      (exports.INSERT_PARAGRAPH_COMMAND = De),
      (exports.INSERT_TAB_COMMAND = tn),
      (exports.INTERNAL_$isBlock = vl),
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
      (exports.KEY_DOWN_COMMAND = $e),
      (exports.KEY_ENTER_COMMAND = Ge),
      (exports.KEY_ESCAPE_COMMAND = Xe),
      (exports.KEY_MODIFIER_COMMAND = yn),
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
      (exports.ParagraphNode = _vs),
      (exports.REDO_COMMAND = ze),
      (exports.REMOVE_TEXT_COMMAND = Fe),
      (exports.RootNode = _us),
      (exports.SELECTION_CHANGE_COMMAND = Ne),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = ve),
      (exports.SELECT_ALL_COMMAND = fn),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = so),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = ro),
      (exports.SKIP_SELECTION_FOCUS_TAG = io),
      (exports.TEXT_TYPE_TO_FORMAT = A),
      (exports.TabNode = _Io),
      (exports.TextNode = _So2),
      (exports.UNDO_COMMAND = Be),
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
        var n = ha.apply(void 0, e);
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
          o = jr(),
          r = n.theme || {},
          s = void 0 === e ? o : n.parentEditor || null,
          i = n.disableEvents || !1,
          l = hs(),
          c = n.namespace || (null !== s ? s._config.namespace : xi()),
          a = n.editorState,
          u = [_us, _So2, _ms, _Io, _vs, _ps].concat(n.nodes || []),
          f = n.onError,
          d = n.onWarn,
          h = n.html,
          g = void 0 === n.editable || n.editable;
        var _;
        if (void 0 === e && null !== o) _ = o._nodes;
        else {
          _ = new Map();
          for (var _e167 = 0; _e167 < u.length; _e167++) {
            var _o97 = u[_e167],
              _r70 = null,
              _s46 = null;
            if (_o97 && "object" == typeof _o97) {
              var _t277 = _o97;
              ((_o97 = _t277.replace),
                (_r70 = _t277["with"]),
                (_s46 = _t277.withKlass || null));
            }
            if (
              "function" != typeof _o97 ||
              !_o97.prototype ||
              !(_o97 === _to5 || _o97.prototype instanceof _to5)
            ) {
              var _r71 = "<unknown>";
              try {
                _r71 = JSON.parse(H);
              } catch (t) {}
              t(
                365,
                String(_e167 - u.length + (n.nodes ? n.nodes.length : 0)),
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
            Ul(_o97);
            var _i31 = _o97.getType(),
              _l18 = ws(_o97);
            _.set(_i31, {
              exportDOM: h && h["export"] ? h["export"].get(_o97) : void 0,
              klass: _o97,
              replace: _r70,
              replaceWithKlass: _s46,
              sharedNodeState: ut(u[_e167]),
              transforms: _l18,
            });
          }
        }
        var p = new _Fs(
          l,
          s,
          _,
          {
            disableEvents: i,
            dom: babelHelpers["extends"]({}, Ds, e && e.dom),
            namespace: c,
            theme: r,
          },
          f || console.error,
          d || bs,
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
            (t.registerCommand(Ee, Rn, Ms),
              t.registerCommand(Oe, Ln, Ms),
              t.registerCommand(be, Kn, Ms),
              t.registerCommand(Me, Bn, Ms),
              t.registerCommand($e, Wn, Ms));
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
      (exports.findAllLexicalElementsDeep = sl),
      (exports.flipDirection = Sc),
      (exports.getActiveElement = gl),
      (exports.getActiveElementDeep = _l),
      (exports.getComposedEventTarget = pl),
      (exports.getComposedStaticRange = cl),
      (exports.getDOMOwnerDocument = Ki),
      (exports.getDOMSelection = tl),
      (exports.getDOMSelectionFromTarget = el),
      (exports.getDOMSelectionPoints = ul),
      (exports.getDOMSelectionRange = al),
      (exports.getDOMSelectionRangeAndPoints = function (t, e) {
        var _fl;
        var n = cl(t, e);
        if (null === n)
          return {
            points: t,
            range: t.rangeCount > 0 ? t.getRangeAt(0) : null,
          };
        var o =
          (_fl = fl(n)) != null
            ? _fl
            : t.rangeCount > 0
              ? t.getRangeAt(0)
              : null;
        return { points: dl(n, hl(t)), range: o };
      }),
      (exports.getDOMShadowRoots = rl),
      (exports.getDOMTextNode = Qs),
      (exports.getDeclaredSlots = ac),
      (exports.getEditorPropertyFromDOMNode = Js),
      (exports.getNearestEditorFromDOMNode = Ys),
      (exports.getParentElement = Li),
      (exports.getRegisteredNode = zs),
      (exports.getRegisteredNodeOrThrow = Bs),
      (exports.getRegisteredSubtypeMap = function (t) {
        var e = new Map(),
          n = new Map();
        for (var _o98 of t) {
          var _Ul2 = Ul(_o98),
            _t278 = _Ul2.ownNodeType;
          _t278 && (n.set(_t278, _o98), e.set(_t278, new Set()));
        }
        for (var _ref59 of n) {
          var _t279 = _ref59[0];
          var _o99 = _ref59[1];
          for (var _ref61 of Hl(_o99)) {
            var _n129 = _ref61.ownNodeType;
            {
              var _o100 = _n129 && e.get(_n129);
              _o100 && _o100.add(_t279);
            }
          }
        }
        return e;
      }),
      (exports.getRootOwnerDocument = il),
      (exports.getStaticNodeConfig = Ul),
      (exports.getStyleObjectFromCSS = uo),
      (exports.getTextDirection = function (t) {
        return b.test(t) ? "rtl" : M.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = ws),
      (exports.isBlockDomNode = Nl),
      (exports.isCurrentlyReadOnlyMode = Kr),
      (exports.isDOMCapturingSelection = zl),
      (exports.isDOMDocumentNode = Xs),
      (exports.isDOMNode = yl),
      (exports.isDOMShadowRoot = nl),
      (exports.isDOMTextNode = qs),
      (exports.isDOMUnmanaged = Kl),
      (exports.isDocumentFragment = xl),
      (exports.isExactShortcutMatch = Ei),
      (exports.isHTMLAnchorElement = function (t) {
        return ml(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = ml),
      (exports.isHTMLTableCellElement = function (t) {
        return ml(t) && ("TD" === t.tagName || "TH" === t.tagName);
      }),
      (exports.isHTMLTableRowElement = function (t) {
        return ml(t) && "TR" === t.tagName;
      }),
      (exports.isInlineDomNode = Sl),
      (exports.isLastChildInBlockNode = Ts),
      (exports.isLexicalEditor = js),
      (exports.isModifierMatch = ki),
      (exports.isOnlyChildInBlockNode = Ss),
      (exports.isSelectionCapturedInDecoratorInput = Us),
      (exports.isSelectionWithinEditor = Hs),
      (exports.iterStaticNodeConfigChain = Hl),
      (exports.makeStepwiseIterator = Uc),
      (exports.mergeRegister = ga),
      (exports.mountSlotContainer = function (t, e, n, o) {
        var r = t.read("latest", function () {
          var o = ii(e);
          return null !== o
            ? (function (t, e, n) {
                if (n === void 0) {
                  n = kl();
                }
                var o = oc(t, e);
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
      (exports.normalizeClassNames = ha),
      (exports.registerEventListener = Cn),
      (exports.registerEventListeners = function (t, e, n) {
        return ga.apply(
          void 0,
          Object.entries(e).map(function (_ref62) {
            var e = _ref62[0],
              o = _ref62[1];
            return Cn(t, e, o, n);
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
        var n = ha.apply(void 0, e);
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
      (exports.setDOMStyleFromCSS = ho),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n130 in e) {
          var _o101 = e[_n130];
          null == _o101 ? t.removeProperty(_n130) : fo(t, _n130, _o101);
        }
      }),
      (exports.setDOMUnmanaged = Ll),
      (exports.setNodeIndentFromDOM = Pl),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n131 in e)
          if (t[_n131] !== e[_n131]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.stopLexicalPropagation = Yn),
      (exports.toggleTextFormatType = Zs),
      (exports.tokenizeRawText = Tr),
      (exports.unmountSlotContainer = function (t, e, n) {
        n.style.display = "none";
        var o = t.getElementByKey(e);
        null !== o && n.parentElement !== o && o.insertBefore(n, o.firstChild);
      }));
  },
  null,
);
