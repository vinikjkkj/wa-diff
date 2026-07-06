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
      return Dl()._blockCursorElement;
    }
    function K(t) {
      return (
        null !== t && 1 === t.nodeType && t.hasAttribute("data-lexical-slot")
      );
    }
    var _$2 = (function () {
      function $(t, e, n) {
        ((this.element = t),
          (this.before = e || null),
          (this.after = n || null));
      }
      var _proto = $.prototype;
      _proto.withBefore = function withBefore(t) {
        return new $(this.element, t, this.after);
      };
      _proto.withAfter = function withAfter(t) {
        return new $(this.element, this.before, t);
      };
      _proto.withElement = function withElement(t) {
        return this.element === t ? this : new $(t, this.before, this.after);
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
      return $;
    })();
    function z(t, e) {
      var n = e;
      for (; null !== n && n.parentNode !== t; ) n = n.parentNode;
      return n;
    }
    var _B = (function (_$) {
      function B() {
        return _$.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(B, _$);
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
          _$.prototype.getInsertionAnchor.call(this) ||
          this.getManagedLineBreak()
        );
      };
      _proto2.getFirstChildAnchor = function getFirstChildAnchor() {
        var t = _$.prototype.getFirstChildAnchor.call(this),
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
          o = document.createElement("br");
        if (
          (o.setAttribute("data-lexical-managed-linebreak", "true"),
          n.insertBefore(o, r),
          t)
        ) {
          var _t4 = document.createElement("img");
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
            _n3 = L(),
            _o2 = this.element.childNodes,
            _s5 = Math.min(r, _o2.length);
          var _i2 = 0;
          for (var _t5 = _e4; _t5 < _s5; _t5++) _o2[_t5] !== _n3 && _i2++;
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
    })(_$2);
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
      if (ps(t)) {
        var _i3 = t.getFirstChild();
        for (; null !== _i3; ) {
          var _t1 = _i3.__key;
          (_i3.__parent === e &&
            ((ps(_i3) || (nc(_i3) && null !== _i3.__slots)) &&
              V(_i3, _t1, n, r, o, s),
            n.has(_t1) || s["delete"](_t1),
            o.push(_t1)),
            (_i3 = _i3.getNextSibling()));
        }
      }
      for (var _i4 of nc(t) && null !== t.__slots ? t.__slots.values() : []) {
        var _t10 = r.get(_i4);
        void 0 !== _t10 &&
          rc(_t10) &&
          _t10.__slotHost === e &&
          ((ps(_t10) || (nc(_t10) && null !== _t10.__slots)) &&
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
        (r && void 0 !== xi(t, n))
      );
    }
    function tt(t, e, n) {
      var r = al(Qi(n)),
        o = r && yl(r, n._rootElement);
      var s = null,
        i = null;
      null !== o &&
        o.anchorNode === t &&
        ((s = o.anchorOffset), (i = o.focusOffset));
      var l = t.nodeValue;
      null !== l && wi(e, l, s, i, !1);
    }
    function et(t, e, n) {
      if (eo(t)) {
        var _e1 = t.anchor.getNode();
        if (_e1.is(n) && t.format !== _e1.getFormat()) return !1;
      }
      return ii(e) && n.isAttached();
    }
    function nt(t, e, n) {
      for (var _r4 = t; _r4 && !jl(_r4); _r4 = Yi(_r4)) {
        var _t11 = xi(_r4, e);
        if (void 0 !== _t11) {
          var _e10 = pi(_t11, n);
          if (_e10) return xs(_e10) || !vl(_r4) ? void 0 : [_r4, _e10];
        }
      }
    }
    function rt(t, e, n) {
      q = !0;
      var r = performance.now() - X > 100;
      try {
        hs(t, function () {
          var o =
              No() ||
              (function (t) {
                return t.read("latest", function () {
                  var t = No();
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
              r && Hr(_p) && ii(_h) && et(o, _h, _p) && tt(_h, _p, t);
            else if ("childList" === _d) {
              a = !0;
              var _e11 = _f.addedNodes;
              for (var _n0 = 0; _n0 < _e11.length; _n0++) {
                var _r5 = _e11[_n0],
                  _o3 = yi(_r5),
                  _i5 = _r5.parentNode;
                if (
                  !(
                    null == _i5 ||
                    _r5 === c ||
                    null !== _o3 ||
                    Z(_r5, _i5, t) ||
                    (t._slotsUsed &&
                      vl(_r5) &&
                      _r5.hasAttribute("data-lexical-slot")) ||
                    jl(_r5)
                  )
                ) {
                  if (s) {
                    var _t12 =
                      (vl(_r5) ? _r5.innerText : null) || _r5.nodeValue;
                    _t12 && (u += _t12);
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
                  _s6 = _n12.parentNode;
                null == _s6 ||
                  "BR" !== _n12.nodeName ||
                  Z(_n12, _o5, t) ||
                  _s6.removeChild(_n12);
              }
            }
            n.takeRecords();
          }
          null !== o && (a && vi(o), s && Ui(t) && o.insertRawText(u));
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
        0 === X && Qi(t).addEventListener("textInput", Q, !0);
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
      for (var _ref8 of Xl("function" == typeof t ? t : t.replace)) {
        var _r9 = _ref8.ownNodeConfig;
        if (_r9 && _r9.stateConfigs)
          for (var _t13 of _r9.stateConfigs) {
            var _r0 = void 0;
            ("stateConfig" in _t13
              ? ((_r0 = _t13.stateConfig), _t13.flat && n.add(_r0.key))
              : (_r0 = _t13),
              e.set(_r0.key, _r0));
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
                var _s7 = _ref10[1];
                {
                  if (ft.has(_o7)) continue;
                  var _n15 = t.get(_o7);
                  _n15
                    ? e.has(_n15) || e.set(_n15, _n15.parse(_s7))
                    : ((r = r || {}), (r[_o7] = _s7));
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
        : Vs(Dl(), t.getType()).sharedNodeState;
    }
    function _t(t) {
      if (t) for (var _e20 in t) return t;
    }
    function pt(t) {
      return t;
    }
    function yt(t, e, n) {
      for (var _ref14 of e.knownState) {
        var _r1 = _ref14[0];
        var _o8 = _ref14[1];
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
        r = Qo()._normalizedNodes;
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
          Hr(e) &&
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
          Hr(n) &&
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
          Hr(_r10))
        ) {
          t.set(_r10.__key, _o9 ? _r10.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!ps(_r10)) break;
        t.set(_r10.__key, _o9 ? _r10.getChildrenSize() : 0, "element", !0);
      }
    }
    var kt = Symbol["for"]("@lexical/CachedTextSize");
    function Et(e, n) {
      return Ut.read(
        function () {
          var r = 0,
            o = e;
          for (var _e24 = 0; _e24 < n && null !== o; _e24++) {
            var _s8 = Wt.get(o);
            if ((void 0 === _s8 && t(345, o), ps(_s8))) {
              var _i6 = Ht.get(o);
              if (void 0 !== _i6 && ps(_i6) && _i6.__parent !== _s8.__parent)
                r += _s8.getTextContentSize();
              else {
                var _e25 = jt.get(o),
                  _n19 = _e25 && _e25.__lexicalTextContent;
                ("string" != typeof _n19 && t(346, _s8.getType()),
                  (r += _n19.length));
              }
              _e24 < n - 1 && !_s8.isInline() && (r += 2);
            } else {
              var _e26 = _s8[kt];
              (void 0 === _e26 && t(347, _s8.getType(), o), (r += _e26));
            }
            o = _s8.__next;
          }
          return r;
        },
        { editor: At },
      );
    }
    function Ot(t) {
      ps(t) ||
        (void 0 === t[kt] &&
          (t[kt] = Hr(t) ? t.__text.length : t.getTextContentSize()));
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
      Hr(r) && ((It = r.getFormat()), (Pt = r.getStyle()), (Ft = n));
    }
    var $t,
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
        if ((At._keyToDOMMap["delete"](t), ps(n))) {
          var _t16 = Zl(n, Wt);
          Qt(_t16, 0, _t16.length - 1, null);
        }
        if (void 0 !== n) {
          for (var _t17 of le(n).values()) {
            var _e27 = ae(_t17);
            (Xt(_t17, null), null !== _e27 && _e27.remove());
          }
          zi(Jt, wt, $t, n, "destroyed");
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
        if (Ss(t)) return null;
        var n = t.getParent();
        return null === n || (nl(n) && null === n.__dir) ? "auto" : null;
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
        ? Yl(n, At)
        : n.removeAttribute("contenteditable");
    }
    function ie(t, e, n) {
      var r = Dt,
        o = Rt();
      Dt = "";
      var s = "";
      var i = xs(t);
      for (var _ref18 of n) {
        var _r12 = _ref18[0];
        var _o1 = _ref18[1];
        {
          var _n21 = oe(_r12);
          (se(e, i, _n21), e.appendChild(_n21), (Dt = ""));
          var _l2 = Rt();
          (fe(_o1, Pl(t, _n21, At)), Lt(_l2), ce(t, _r12, e, _n21), (s += Dt));
        }
      }
      return (Lt(o), (Dt = r), s);
    }
    function le(t) {
      return nc(t) && null !== t.__slots ? t.__slots : ec;
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
      var a = xs(e);
      for (var _ref22 of o) {
        var _t20 = _ref22[0];
        var _s9 = _ref22[1];
        {
          var _o10 = r.get(_t20);
          var _i7 = void 0 !== _o10 ? ae(_o10) : null;
          Dt = "";
          var _u = Rt();
          if (null === _i7) {
            _i7 = oe(_t20);
            var _r13 = null;
            for (var _t21 of n.children)
              if (!_t21.hasAttribute("data-lexical-slot")) {
                _r13 = _t21;
                break;
              }
            (n.insertBefore(_i7, _r13), fe(_s9, Pl(e, _i7, At)));
          } else
            _o10 === _s9
              ? pe(_s9, _i7)
              : (void 0 !== _o10 && Xt(_o10, _i7), fe(_s9, Pl(e, _i7, At)));
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
            var _s0 = rc(_t23) ? _t23.__slotHost : null,
              _i8 = rc(r) ? r.__slotHost : null,
              _l3 = _t23.__parent !== r.__parent || _s0 !== _i8,
              _c2 = null !== _i8 && _o11.parentElement !== n.element;
            if (_l3 || _c2) return (n.insertChild(_o11), pe(e, n.element));
          }
        }
      }
      var o = Gt.$createDOM(r, At);
      if (
        ((function (t, e, n) {
          var r = n._keyToDOMMap;
          (mi(e, n, t), r.set(t, e));
        })(e, o, At),
        Hr(r)
          ? o.setAttribute("data-lexical-text", "true")
          : xs(r) &&
            (o.setAttribute("data-lexical-decorator", "true"),
            Hl(o, { captureSelection: !0 })),
        ps(r))
      ) {
        var _t24 = r.__indent,
          _e30 = r.__size;
        (re(o, r), 0 !== _t24 && ee(o, _t24));
        var _n22 = le(r),
          _s1 = _n22.size > 0 ? ie(r, o, _n22) : "";
        if (0 === _e30)
          ((o.__lexicalTextContent = _s1),
            (o.__lexicalFirstTextKey = null),
            (Dt += _s1),
            _n22.size > 0 && (o.__lexicalSlotTextLength = _s1.length));
        else {
          var _t25 = Dt,
            _i9 = _e30 - 1;
          if ((de(Zl(r, Ht), r, 0, _i9, Pl(r, o, At)), "" !== _s1)) {
            var _e31 = o.__lexicalTextContent || "";
            ((o.__lexicalTextContent = _s1 + _e31), (Dt = _t25 + _s1 + _e31));
          }
          _n22.size > 0 && (o.__lexicalSlotTextLength = _s1.length);
        }
        var _i0 = r.__format;
        (0 !== _i0 && ne(o, _i0), r.isInline() || he(null, r, o));
      } else {
        var _t26 = r.getTextContent();
        if (xs(r)) {
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
        zi(Jt, wt, $t, r, "created"),
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
        (null !== _n24 && Hr(_n24)
          ? null === It &&
            ((It = _n24.getFormat()), (Pt = _n24.getStyle()), (Ft = _n24.__key))
          : ps(_n24) && c < o && !_n24.isInline() && (Dt += v),
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
      var r = Pl(e, n, At),
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
                return As(_t29)
                  ? "line-break"
                  : xs(_t29) && _t29.isInline()
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
            var _s10 = c.__lexicalTextContent,
              _u2 = Yt.get(e.__key);
            if (!Vt && "string" == typeof _s10 && void 0 !== _u2) {
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
                  var _r14 = _i1,
                    _a2 = 0;
                  for (; null !== _r14 && _a2 < _f2; ) {
                    var _t31 = Ht.get(_r14);
                    if (void 0 === _t31) break;
                    var _e33 = Rt();
                    (pe(_r14, l),
                      Hr(_t31) &&
                        null === It &&
                        ((It = _t31.getFormat()),
                        (Pt = _t31.getStyle()),
                        (Ft = _t31.__key)),
                      Lt(_e33),
                      (_r14 = _t31.__next),
                      _a2++);
                  }
                  var _d2 = "";
                  for (_r14 = _i1, _a2 = 0; null !== _r14 && _a2 < _f2; ) {
                    var _e34 = Ht.get(_r14);
                    if (void 0 === _e34) break;
                    var _n26 = void 0;
                    if (ps(_e34)) {
                      var _o12 = At._keyToDOMMap.get(_r14),
                        _s11 = _o12 && _o12.__lexicalTextContent;
                      ("string" != typeof _s11 && t(352, _e34.getType()),
                        (_n26 = _s11));
                    } else _n26 = _e34.getTextContent();
                    ((_d2 += _n26),
                      _a2 < _f2 - 1 &&
                        ps(_e34) &&
                        !_e34.isInline() &&
                        (_d2 += v),
                      (_r14 = _e34.__next),
                      _a2++);
                  }
                  var _h2 = c.__lexicalSlotTextLength || 0,
                    _g2 = _h2 > 0 ? _s10.slice(_h2) : _s10,
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
                          Hr(_e37) &&
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
                      var _r15 = void 0;
                      if (ps(_n28)) {
                        var _o13 = At._keyToDOMMap.get(g[_e38]),
                          _s12 = _o13 && _o13.__lexicalTextContent;
                        ("string" != typeof _s12 && t(350, _n28.getType()),
                          (_r15 = _s12));
                      } else _r15 = _n28.getTextContent();
                      ((N += _r15),
                        _e38 < l - 1 &&
                          ps(_n28) &&
                          !_n28.isInline() &&
                          (N += v));
                    }
                    var k = o.__lexicalSlotTextLength || 0,
                      E = k > 0 ? s.slice(k) : s;
                    return (
                      (o.__lexicalTextContent = E.slice(0, E.length - T) + N),
                      !0
                    );
                  })(e, 0, r, c, _s10, _i1, _f2, a)
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
                  _s13 = Rt();
                if (_o14) pe(_n29, l);
                else {
                  var _r17 = void 0,
                    _o15 = void 0;
                  if (ps(_e40)) {
                    _o15 = jt.get(_n29);
                    var _s14 = _o15 && _o15.__lexicalTextContent;
                    ("string" != typeof _s14 && t(354, _e40.getType()),
                      (_r17 = _s14));
                  } else _r17 = _e40.getTextContent();
                  ((Dt += _r17), void 0 !== _o15 && Kt(_o15));
                }
                (Hr(_e40)
                  ? null === It &&
                    ((It = _e40.getFormat()),
                    (Pt = _e40.getStyle()),
                    (Ft = _e40.__key))
                  : ps(_e40) && _r16 < i - 1 && !_e40.isInline() && (Dt += v),
                  Lt(_s13),
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
                  var _s15 =
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
                  throw new Error(_s15);
                }
                throw r;
              }
              Xt(_t40, null);
            }
            var _s16 = Ht.get(_o16);
            Hr(_s16) &&
              null === It &&
              ((It = _s16.getFormat()),
              (Pt = _s16.getStyle()),
              (Ft = _s16.__key));
          } else {
            var _o17 = Zl(e, Wt),
              _c3 = Zl(n, Ht);
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
                    _o18 = Rt();
                  if (_t42 === _r18) ((u = me(pe(_r18, s.element))), f++, d++);
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
                    if (c.has(_r18)) {
                      var _t43 = ji(At, _r18);
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
                  (null !== _i10 && Hr(_i10)
                    ? null === It &&
                      ((It = _i10.getFormat()),
                      (Pt = _i10.getStyle()),
                      (Ft = _i10.__key))
                    : ps(_i10) && d <= l && !_i10.isInline() && (Dt += v),
                    Lt(_o18));
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
        })(e, n, Pl(n, r, At)),
        nl(n) ||
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
          if (Hr(_t45))
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
        i = ji(At, e);
      if (r === o && !s) {
        var _e44;
        if (ps(r)) {
          var _n31 = i.__lexicalTextContent;
          ("string" != typeof _n31 && t(355, r.getType()),
            (_e44 = _n31),
            Kt(i));
        } else _e44 = r.getTextContent();
        return ((Dt += _e44), i);
      }
      if (
        (r !== o && s && zi(Jt, wt, $t, o, "updated"),
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
      if (ps(r)) {
        ps(o) || t(334, e);
        var _n32 = o.__indent;
        (Vt || _n32 !== r.__indent) && ee(i, _n32);
        var _l4 = o.__format;
        (Vt || _l4 !== r.__format) && ne(i, _l4);
        var _c4 = s && (le(o).size > 0 || le(r).size > 0) ? ue(r, o, i) : "";
        if (s) {
          var _t46 = Dt;
          if ((ge(r, o, i), Ss(o) || o.isInline() || he(0, o, i), "" !== _c4)) {
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
          (re(i, o), Ss(o) && !Vt)
        )
          for (var _t47 of o.getChildren())
            if (ps(_t47)) {
              re(ji(At, _t47.getKey()), _t47);
            }
      } else {
        var _t48 = o.getTextContent();
        if (xs(o)) {
          var _t49 = o.decorate(At, Mt);
          (null !== _t49 && ye(e, _t49),
            s && (le(o).size > 0 || le(r).size > 0) && ue(r, o, i));
        }
        Dt += _t48;
      }
      if (!qt && Ss(o)) {
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
        n = Si(At);
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
        (Gt = n._config.dom || Ws),
        (wt = n._nodes),
        ($t = At._listeners.mutation),
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
        (Gt = Ws),
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
      $e = Te("UNDO_COMMAND"),
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
          var _s17 = function s() {
            var t = e.get(n);
            t &&
              t.holders["delete"](_s17) &&
              0 === t.holders.size &&
              (e["delete"](n), t.dispose());
          };
          return (o.holders.add(_s17), _s17);
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
            Hi(e, Be, t);
          },
        ],
        [
          "pointerdown",
          function (t, e) {
            var n = Nl(t),
              r = t.pointerType;
            kl(n) &&
              "touch" !== r &&
              "pen" !== r &&
              0 === t.button &&
              hs(e, function () {
                Jl(n, e) || (In = !0);
              });
          },
        ],
        [
          "compositionstart",
          function (t, e) {
            Hi(e, be, t);
          },
        ],
        [
          "compositionend",
          function (t, e) {
            s
              ? (Fn = !0)
              : l || (!a && !d)
                ? Hi(e, Me, t)
                : ((Rn = !0), (Kn = t.data));
          },
        ],
        [
          "input",
          function (t, e) {
            (t.stopPropagation(),
              Gn(),
              hs(
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
            hs(e, function () {
              var n = No(),
                r = al(Qi(e)),
                o = vo();
              if (r)
                if (eo(n)) {
                  var _t52 = n.anchor,
                    _e50 = _t52.getNode();
                  "element" === _t52.type &&
                    0 === _t52.offset &&
                    n.isCollapsed() &&
                    !Ss(_e50) &&
                    1 === Ni().getChildrenSize() &&
                    _e50.getTopLevelElementOrThrow().isEmpty() &&
                    null !== o &&
                    n.is(o) &&
                    (r.removeAllRanges(), (n.dirty = !0));
                } else if (
                  "touch" === t.pointerType ||
                  "pen" === t.pointerType
                ) {
                  var _n34 = yl(r, e._rootElement).anchorNode;
                  if (vl(_n34) || ii(_n34)) {
                    vi(To(o, r, e, t));
                  }
                }
              Hi(e, ke, t);
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
            if ("deleteCompositionText" === n || (s && Ui(e))) return;
            if ("insertCompositionText" === n) return;
            hs(
              e,
              function () {
                qn(t, e) || Hi(e, Ee, t);
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
          t.addEventListener("selectionchange", sr),
          function () {
            return t.removeEventListener("selectionchange", sr);
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
      $n = null,
      zn = [0, "", 0, "root", 0];
    function Bn(t, e, n, r, o, s) {
      var l = t.anchor,
        c = t.focus,
        a = l.getNode(),
        u = Qo();
      var f;
      if (void 0 !== s) f = s;
      else {
        var _t53 = al(Qi(u));
        f = null !== _t53 ? yl(_t53, u._rootElement) : null;
      }
      var d = null !== f ? f.anchorNode : null,
        h = l.key,
        g = u.getElementByKey(h),
        _ = n.length;
      return (
        h !== c.key ||
        !Hr(a) ||
        (((!o && (!i || kn < r + 50)) || (a.isDirty() && _ < 2) || Ei(n)) &&
          l.offset !== c.offset &&
          !a.isComposing()) ||
        si(a) ||
        (a.isDirty() && _ > 1) ||
        ((o || !i) && null !== g && !a.isComposing() && d !== Rl(a, g, u)) ||
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
            o = oi(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!r.canInsertTextBefore() && !e.isComposing()) ||
                o ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (Hr(e) || (ps(e) && e.isInline())) &&
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
        ii(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function Un(e, n, r) {
      var _yl = yl(e, n._rootElement),
        o = _yl.anchorNode,
        s = _yl.anchorOffset,
        i = _yl.focusNode,
        l = _yl.focusOffset;
      (Dn && ((Dn = !1), Wn(o, s) && Wn(i, l) && !$n)) ||
        hs(n, function () {
          if (!r) return void vi(null);
          if (!ti(n, o, i)) return;
          var c = No();
          if ($n && eo(c) && c.isCollapsed()) {
            var _t54 = c.anchor,
              _e51 = $n.anchor;
            ((_t54.key === _e51.key && _t54.offset === _e51.offset + 1) ||
              (1 === _t54.offset &&
                _e51.getNode().is(_t54.getNode().getPreviousSibling()))) &&
              ((c = $n.clone()), vi(c));
          }
          if ((($n = null), eo(c))) {
            var _r23 = c.anchor,
              _a3 = _r23.getNode();
            if (c.isCollapsed()) {
              "Range" === e.type && o === i && (c.dirty = !0);
              var _s18 = Qi(n).event,
                _l5 = _s18 ? _s18.timeStamp : performance.now(),
                _zn = zn,
                _u3 = _zn[0],
                _f3 = _zn[1],
                _d3 = _zn[2],
                _h3 = _zn[3],
                _g3 = _zn[4],
                _4 = Ni(),
                _p2 = !1 === n.isComposing() && "" === _4.getTextContent();
              if (_l5 < _g3 + 200 && _r23.offset === _d3 && _r23.key === _h3)
                Hn(c, _u3, _f3);
              else if ("text" === _r23.type) (Hr(_a3) || t(141), jn(c, _a3));
              else if ("element" === _r23.type && !_p2) {
                ps(_a3) || t(259);
                var _e52 = _r23.getNode();
                _e52.isEmpty()
                  ? (function (t, e) {
                      var n = e.getTextFormat(),
                        r = e.getTextStyle();
                      Hn(t, n, r);
                    })(c, _e52)
                  : Hn(c, c.format, "");
              }
            } else {
              var _t55 = _r23.key,
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
                  _r24 = _e54.getTextContentSize();
                if (
                  Hr(_e54) &&
                  0 !== _r24 &&
                  !(
                    (0 === _t56 && _e54.__key === _f4 && _a4 === _r24) ||
                    (_t56 === _o21 - 1 && _e54.__key === _d4 && 0 === _u4)
                  ) &&
                  ((_g4 = !0), (_h4 &= _e54.getFormat()), 0 === _h4)
                )
                  break;
              }
              c.format = _g4 ? _h4 : 0;
            }
          }
          Hi(n, Ne, void 0);
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
      var n = No();
      if (!eo(n) || !n.isCollapsed()) return;
      var r = n.anchor.getNode();
      if (!Hr(r)) return;
      var o = n.anchor.offset;
      if (r.getTextContentSize() === o) {
        var _t57 = r.getNextSibling();
        if ("\n" === e) {
          if (As(_t57)) _t57.selectEnd();
          else if (!_t57) {
            var _t58 = Ql(r, mo),
              _e55 = _t58 && _t58.getNextSibling();
            ps(_e55) && _e55.selectStart();
          }
        } else
          "\t" === e
            ? Gr(_t57) && _t57.selectEnd()
            : Hr(_t57) && _t57.getTextContent()[0] === e && _t57.select(1, 1);
      } else r.getTextContent()[o] === e && r.select(o + 1, o + 1);
    }
    function Gn() {
      ((On = !1), null !== bn && (clearTimeout(bn), (bn = null)));
    }
    function Vn() {
      (Gn(), (On = !0), (bn = setTimeout(Gn, 0)));
    }
    function qn(t, e) {
      var n = Nl(t);
      if (vl(n) && Jl(n, e)) return !0;
      var r = e.getRootElement();
      if (null === r) return !1;
      var o = Tl(r.ownerDocument);
      return null !== o && r.contains(o) && Jl(o, e);
    }
    function Xn(e) {
      var _ref23;
      var n = e.inputType,
        r = Yn(e),
        o = Qo(),
        s = No();
      if ("insertText" === n && e.data && On) {
        if ((Gn(), e.preventDefault(), eo(s) && !s.isCollapsed())) {
          var _t59 = s.isBackward() ? s.anchor : s.focus;
          (s.anchor.set(_t59.key, _t59.offset, _t59.type),
            s.focus.set(_t59.key, _t59.offset, _t59.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === s) {
          var _t60 = vo();
          if (!eo(_t60)) return !0;
          vi(_t60.clone());
        }
        if (eo(s)) {
          var _n36 = s.anchor.key === s.focus.key;
          if (
            ((i = e.timeStamp),
            "MediaLast" === vn && i < Nn + 30 && o.isComposing() && _n36)
          ) {
            if (
              (gi(null),
              (Nn = 0),
              setTimeout(function () {
                hs(o, function () {
                  gi(null);
                });
              }, 30),
              eo(s))
            ) {
              var _e56 = s.anchor.getNode();
              (_e56.markDirty(), Hr(_e56) || t(142), jn(s, _e56));
            }
          } else {
            if (
              (gi(null),
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
              (_u5 && s.isCollapsed() && (_u5 = !xs(Wi(s.anchor, !0))), !_u5)
            ) {
              Hi(o, Ae, !0);
              var _t62 = No();
              f &&
                eo(_t62) &&
                _t62.isCollapsed() &&
                (($n = _t62),
                setTimeout(function () {
                  return ($n = null);
                }));
            }
          }
          return !0;
        }
      }
      var i;
      if (!eo(s)) return !0;
      var c = e.data;
      (null !== En && Ai(!1, o, En),
        (s.dirty && null === En) ||
          !s.isCollapsed() ||
          Ss(s.anchor.getNode()) ||
          null === r ||
          s.applyDOMRange(r),
        (En = null));
      var a = s.anchor,
        u = s.focus,
        d = a.getNode(),
        h = u.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === c) (e.preventDefault(), Hi(o, we, !1));
        else if (c === v) (e.preventDefault(), Hi(o, De, void 0));
        else if (null == c && e.dataTransfer) {
          var _t63 = e.dataTransfer.getData("text/plain");
          (e.preventDefault(), s.insertRawText(_t63));
        } else
          null != c && Bn(s, r, c, e.timeStamp, !0)
            ? (e.preventDefault(), Hi(o, Ie, c), Jn(c))
            : (En = c);
        return ((kn = e.timeStamp), !0);
      }
      switch ((e.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          Hi(o, Ie, e);
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
          ((Ln = !1), gi(null), _t64 || Hi(o, Ie, e));
          break;
        }
        case "insertLineBreak":
          (gi(null), Hi(o, we, !1));
          break;
        case "insertParagraph":
          (gi(null), Pn && !l ? ((Pn = !1), Hi(o, we, !1)) : Hi(o, De, void 0));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          Hi(o, Pe, e);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || ps(t) || ps(e) || !oi(t) || !oi(e);
          })(d, h) && Hi(o, Fe, e);
          break;
        case "deleteByDrag":
          (Gi(Cr), Hi(o, Fe, e));
          break;
        case "deleteByCut":
          Hi(o, Fe, e);
          break;
        case "deleteContent":
          Hi(o, Ae, !1);
          break;
        case "deleteWordBackward":
          Hi(o, Re, !0);
          break;
        case "deleteWordForward":
          Hi(o, Re, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          Hi(o, Le, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          Hi(o, Le, !1);
          break;
        case "formatStrikeThrough":
          Hi(o, Ke, "strikethrough");
          break;
        case "formatBold":
          Hi(o, Ke, "bold");
          break;
        case "formatItalic":
          Hi(o, Ke, "italic");
          break;
        case "formatUnderline":
          Hi(o, Ke, "underline");
          break;
        case "historyUndo":
          Hi(o, $e, void 0);
          break;
        case "historyRedo":
          Hi(o, ze, void 0);
      }
      return !0;
    }
    function Qn(t) {
      var e = Qo(),
        n = No(),
        r = t.data,
        o = Yn(t);
      var l = !1;
      if (null != r && eo(n)) {
        var _c6 = al(Qi(e)),
          _a6 = null !== _c6 ? yl(_c6, e._rootElement) : null,
          _u6 =
            "insertCompositionText" === t.inputType && !Fn && !e.isComposing();
        if ((_u6 && (Ln = !0), !_u6 && Bn(n, o, r, t.timeStamp, !1, _a6))) {
          ((l = !0), Fn && (er(e, r), (Fn = !1)));
          var _o22 = n.anchor.getNode();
          if (null === _c6 || null === _a6) return !0;
          var _u7 = n.isBackward(),
            _d5 = _u7 ? n.anchor.offset : n.focus.offset,
            _h5 = _u7 ? n.focus.offset : n.anchor.offset;
          (i &&
            !n.isCollapsed() &&
            Hr(_o22) &&
            null !== _a6.anchorNode &&
            _o22.getTextContent().slice(0, _d5) +
              r +
              _o22.getTextContent().slice(_d5 + _h5) ===
              Mi(_a6.anchorNode)) ||
            Hi(e, Ie, r);
          var _g5 = r.length;
          (s &&
            _g5 > 1 &&
            "insertCompositionText" === t.inputType &&
            !e.isComposing() &&
            ((n.anchor.offset -= _g5),
            (n._cachedNodes = null),
            (n._cachedIsBackward = null)),
            f && e.isComposing() && ((Nn = 0), gi(null)));
        }
      }
      if (!l) {
        (Ai(!1, e, null !== r ? r : void 0),
          Fn && (er(e, r || void 0), Gi(Tr), (Fn = !1)));
      }
      return (
        (function () {
          Vo();
          var t = Qo();
          ot(t);
        })(),
        !0
      );
    }
    function Zn(t) {
      var e = Qo(),
        n = No();
      if (eo(n) && !e.isComposing()) {
        Ln = !1;
        var _r25 = n.anchor,
          _o23 = n.anchor.getNode();
        (gi(_r25.key),
          Gi(Sr),
          (t.timeStamp < Nn + 30 ||
            "element" === _r25.type ||
            !n.isCollapsed() ||
            (!f &&
              (_o23.getFormat() !== n.format ||
                (Hr(_o23) && _o23.getStyle() !== n.style)))) &&
            Hi(e, Ie, k));
      }
      return !0;
    }
    function tr(t) {
      return (er(Qo(), t.data), Gi(Tr), !0);
    }
    function er(t, e) {
      var n = t._compositionKey;
      if ((gi(null), null !== n && null != e)) {
        if ("" === e) {
          var _e57 = pi(n),
            _r26 = t.getElementByKey(n),
            _o24 = null !== _r26 && Hr(_e57) ? Rl(_e57, _r26, t) : null;
          if (null !== _o24 && null !== _o24.nodeValue && Hr(_e57)) {
            var _n37 = al(Qi(t)),
              _r27 = _n37 && yl(_n37, t._rootElement);
            var _s19 = null,
              _i13 = null;
            (null !== _r27 &&
              _r27.anchorNode === _o24 &&
              ((_s19 = _r27.anchorOffset), (_i13 = _r27.focusOffset)),
              wi(_e57, _o24.nodeValue, _s19, _i13, !0));
          }
          return;
        }
        if ("\n" === e[e.length - 1]) {
          var _e58 = No();
          if (eo(_e58) || ro(_e58)) {
            if (eo(_e58)) {
              var _t65 = _e58.focus;
              _e58.anchor.set(_t65.key, _t65.offset, _t65.type);
            }
            return void Hi(t, Ge, null);
          }
        }
      }
      Ai(!0, t, e);
    }
    function nr(t) {
      var e = Qo();
      if (null == t.key) return !0;
      if (Rn) {
        if (Ki(t))
          return (
            hs(e, function () {
              er(e, Kn);
            }),
            (Rn = !1),
            (Kn = ""),
            !0
          );
        ((Rn = !1), (Kn = ""));
      }
      if (
        (function (t) {
          return Fi(t, "ArrowRight", { shiftKey: "any" });
        })(t)
      )
        Hi(e, We, t);
      else if (
        (function (t) {
          return Fi(
            t,
            "ArrowRight",
            babelHelpers["extends"]({}, Ri, { shiftKey: "any" }),
          );
        })(t)
      )
        Hi(e, Ue, t);
      else if (
        (function (t) {
          return Fi(t, "ArrowLeft", { shiftKey: "any" });
        })(t)
      )
        Hi(e, He, t);
      else if (
        (function (t) {
          return Fi(
            t,
            "ArrowLeft",
            babelHelpers["extends"]({}, Ri, { shiftKey: "any" }),
          );
        })(t)
      )
        Hi(e, je, t);
      else if (
        (function (t) {
          return Fi(t, "ArrowUp", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        Hi(e, Ye, t);
      else if (
        (function (t) {
          return Fi(t, "ArrowDown", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        Hi(e, Je, t);
      else if (
        (function (t) {
          return Fi(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
            shiftKey: !0,
          });
        })(t)
      )
        ((Pn = !0), Hi(e, Ge, t));
      else if (
        (function (t) {
          return " " === t.key;
        })(t)
      )
        Hi(e, Ve, t);
      else if (
        (function (t) {
          return o && Fi(t, "o", { ctrlKey: !0 });
        })(t)
      )
        (t.preventDefault(), (Pn = !0), Hi(e, we, !0));
      else if (
        (function (t) {
          return Fi(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
          });
        })(t)
      )
        ((Pn = !1), Hi(e, Ge, t));
      else if (
        (function (t) {
          return (
            Fi(t, "Backspace", { shiftKey: "any" }) ||
            (o && Fi(t, "h", { ctrlKey: !0 }))
          );
        })(t)
      )
        Ki(t) ? Hi(e, qe, t) && Vn() : (t.preventDefault(), Hi(e, Ae, !0));
      else if (
        (function (t) {
          return "Escape" === t.key;
        })(t)
      )
        Hi(e, Xe, t);
      else if (
        (function (t) {
          return Fi(t, "Delete", {}) || (o && Fi(t, "d", { ctrlKey: !0 }));
        })(t)
      )
        !(function (t) {
          return "Delete" === t.key;
        })(t)
          ? (t.preventDefault(), Hi(e, Ae, !1))
          : Hi(e, Qe, t);
      else if (
        (function (t) {
          return Fi(t, "Backspace", Li);
        })(t)
      )
        (t.preventDefault(), Hi(e, Re, !0));
      else if (
        (function (t) {
          return Fi(t, "Delete", Li);
        })(t)
      )
        (t.preventDefault(), Hi(e, Re, !1));
      else if (
        (function (t) {
          return o && Fi(t, "Backspace", { metaKey: !0 });
        })(t)
      )
        (t.preventDefault(), Hi(e, Le, !0));
      else if (
        (function (t) {
          return (
            o &&
            (Fi(t, "Delete", { metaKey: !0 }) || Fi(t, "k", { ctrlKey: !0 }))
          );
        })(t)
      )
        (t.preventDefault(), Hi(e, Le, !1));
      else if (
        (function (t) {
          return Fi(t, "b", Ri);
        })(t)
      )
        (t.preventDefault(), Hi(e, Ke, "bold"));
      else if (
        (function (t) {
          return Fi(t, "u", Ri);
        })(t)
      )
        (t.preventDefault(), Hi(e, Ke, "underline"));
      else if (
        (function (t) {
          return Fi(t, "i", Ri);
        })(t)
      )
        (t.preventDefault(), Hi(e, Ke, "italic"));
      else if (
        (function (t) {
          return Fi(t, "Tab", { shiftKey: "any" });
        })(t)
      )
        Hi(e, Ze, t);
      else if (
        (function (t) {
          return Fi(t, "z", Ri);
        })(t)
      )
        (t.preventDefault(), Hi(e, $e, void 0));
      else if (
        (function (t) {
          if (o) return Fi(t, "z", { metaKey: !0, shiftKey: !0 });
          return (
            Fi(t, "y", { ctrlKey: !0 }) ||
            Fi(t, "z", { ctrlKey: !0, shiftKey: !0 })
          );
        })(t)
      )
        (t.preventDefault(), Hi(e, ze, void 0));
      else {
        var _n38 = e._editorState._selection;
        !(function (t) {
          return Fi(t, "a", Ri);
        })(t)
          ? null === _n38 ||
            eo(_n38) ||
            (!(function (t) {
              return Fi(t, "c", Ri);
            })(t)
              ? (function (t) {
                  return Fi(t, "x", Ri);
                })(t) && (t.preventDefault(), Hi(e, un, t))
              : (t.preventDefault(), Hi(e, an, t)))
          : (t.preventDefault(), Hi(e, fn, t) && Vn());
      }
      return (
        (function (t) {
          return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey;
        })(t) && e.dispatchCommand(mn, t),
        !0
      );
    }
    function rr(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    var or = new Map();
    function sr(t) {
      var e = ul(t.target);
      if (null === e) return;
      var n = Ji(t.target);
      var r = null,
        o = null;
      if (null !== n) {
        var _t66 = An.get(n);
        if (void 0 !== _t66) {
          var _n39 = _t66.editors;
          var _s20 = _t66.hasShadowEditor;
          if (void 0 === _s20) {
            _s20 = !1;
            for (var _t67 of _n39)
              if (
                null !== _t67._rootElement &&
                fl(_t67._rootElement.getRootNode())
              ) {
                _s20 = !0;
                break;
              }
            _t66.hasShadowEditor = _s20;
          }
          if (_s20) {
            var _t68 = null,
              _s21 = null;
            for (var _i14 of _n39) {
              var _n40 = _i14._rootElement;
              if (null === _n40) continue;
              var _l6 = yl(e, _n40).anchorNode;
              if (null !== _l6 && ni(_l6) === _i14) {
                if (fl(_n40.getRootNode())) {
                  ((r = _i14), (o = _l6));
                  break;
                }
                null === _t68 && ((_t68 = _i14), (_s21 = _l6));
              }
            }
            null === r && null !== _t68 && ((r = _t68), (o = _s21));
          } else {
            var _t69 = e.anchorNode;
            null === _t69 ||
              (vl(_t69) && null !== _t69.shadowRoot) ||
              ((r = ni(_t69)), null !== r && (o = _t69));
          }
        }
        if (null === r) {
          var _t70 = Tl(n);
          r = null !== _t70 ? ni(_t70) : null;
        }
      }
      if (null === r) return;
      In &&
        ((In = !1),
        hs(r, function () {
          var n = vo(),
            s = o != null ? o : yl(e, r._rootElement).anchorNode;
          if (vl(s) || ii(s)) {
            vi(To(n, e, r, t));
          }
        }));
      var s = Oi(r),
        i = s[s.length - 1],
        l = i._key,
        c = or.get(l),
        a = c || i;
      (a !== r && Un(e, a, !1),
        Un(e, r, !0),
        r !== i ? or.set(l, r) : c && or["delete"](l));
    }
    function ir(t) {
      t._lexicalHandled = !0;
    }
    function lr(t) {
      return !0 === t._lexicalHandled;
    }
    var cr = function cr() {};
    function ar(e) {
      var n = Mn.get(e);
      if (void 0 === n) return void cr();
      var r = An.get(n);
      if (void 0 === r) return void cr();
      Mn["delete"](e);
      var o = ri(e);
      ei(o)
        ? (!(function (t) {
            if (null !== t._parentEditor) {
              var _e59 = Oi(t),
                _n41 = _e59[_e59.length - 1]._key;
              or.get(_n41) === t && or["delete"](_n41);
            } else or["delete"](t._key);
          })(o),
          r.editors["delete"](o),
          (r.hasShadowEditor = void 0),
          (e.__lexicalEditor = null))
        : o && t(198);
      var s = rr(e);
      for (var _t71 = 0; _t71 < s.length; _t71++) s[_t71]();
      e.__lexicalEventHandles = [];
    }
    function ur(e, n, r) {
      Vo();
      var o = e.__key,
        s = e.getParent();
      if (null === s) return void (null !== oc(e) && t(367, o, String(oc(e))));
      var i = (function (t) {
        var e = No();
        if (!eo(e) || !ps(t)) return e;
        var n = e.anchor,
          r = e.focus,
          o = n.getNode(),
          s = r.getNode();
        qi(o, t) && n.set(t.__key, 0, "element");
        qi(s, t) && r.set(t.__key, 0, "element");
        return e;
      })(e);
      var l = !1;
      if (eo(i) && n) {
        var _t72 = i.anchor,
          _n42 = i.focus;
        (_t72.key === o &&
          (Oo(_t72, e, s, e.getPreviousSibling(), e.getNextSibling()),
          (l = !0)),
          _n42.key === o &&
            (Oo(_n42, e, s, e.getPreviousSibling(), e.getNextSibling()),
            (l = !0)));
      } else ro(i) && n && e.isSelected() && e.selectPrevious();
      if (eo(i) && n && !l) {
        var _t73 = e.getIndexWithinParent();
        (fi(e), ko(i, s, _t73, -1));
      } else fi(e);
      (r || nl(s) || s.canBeEmpty() || !s.isEmpty() || ur(s, n),
        n && i && Ss(s) && s.isEmpty() && s.selectEnd());
    }
    var fr = Symbol["for"]("ephemeral");
    function dr(t) {
      return t[fr] || !1;
    }
    var hr = { configurable: !0, enumerable: !1, value: void 0, writable: !0 };
    var _gr5 = (function () {
      function gr(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", hr),
          Object.defineProperty(this, kt, hr),
          ui(this, t));
      }
      gr.getType = function getType() {
        var _ql = ql(this),
          e = _ql.ownNodeType;
        return (void 0 === e && t(64, this.name), e);
      };
      gr.clone = function clone(e) {
        t(65, this.name);
      };
      var _proto6 = gr.prototype;
      _proto6.$config = function $config() {
        return {};
      };
      _proto6.config = function config(t, e) {
        var _ref24;
        var n = e["extends"] || tc(this.constructor);
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
          var _e60 = pi(t);
          if (null === _e60) break;
          t = null !== _e60.__parent ? _e60.__parent : oc(_e60);
        }
        return !1;
      };
      _proto6.isSelected = function isSelected(t) {
        var _this13 = this;
        var e = t || No();
        if (null == e) return !1;
        var n = e.getNodes().some(function (t) {
          return t.__key === _this13.__key;
        });
        if (Hr(this)) return n;
        if (
          eo(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t74 = this.getParent();
          if (xs(this) && this.isInline() && _t74) {
            var _n43 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t74.is(_n43.getNode()) &&
              _n43.offset === _t74.getChildrenSize() &&
              this.is(_t74.getLastChild())
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
        return null === t ? null : pi(t);
      };
      _proto6.getParentOrThrow = function getParentOrThrow() {
        var e = this.getParent();
        return (null === e && t(66, this.__key), e);
      };
      _proto6.getTopLevelElement = function getTopLevelElement() {
        var e = this;
        for (; null !== e; ) {
          var _n44 = e.getParent();
          if (nl(_n44) || null !== oc(e))
            return (ps(e) || (e === this && xs(e)) || t(194), e);
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
        return null === t ? null : pi(t);
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
        return null === t ? null : pi(t);
      };
      _proto6.getNextSiblings = function getNextSiblings() {
        var t = [];
        var e = this.getNextSibling();
        for (; null !== e; ) (t.push(e), (e = e.getNextSibling()));
        return t;
      };
      _proto6.getCommonAncestor = function getCommonAncestor(t) {
        var e = ps(this) ? this : this.getParent(),
          n = ps(t) ? t : t.getParent(),
          r = e && n ? ea(e, n) : null;
        return r ? r.commonAncestor : null;
      };
      _proto6.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto6.isBefore = function isBefore(e) {
        var n = ea(this, e);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === Qc(n)
              : ("same" !== n.type && "ancestor" !== n.type && t(279), !1)))
        );
      };
      _proto6.isParentOf = function isParentOf(t) {
        var e = ea(this, t);
        return null !== e && "ancestor" === e.type;
      };
      _proto6.getNodesBetween = function getNodesBetween(e) {
        var n = this.isBefore(e),
          r = [],
          o = new Set();
        var s = this;
        for (; null !== s; ) {
          var _i15 = s.__key;
          if ((o.has(_i15) || (o.add(_i15), r.push(s)), s === e)) break;
          var _l7 = ps(s) ? (n ? s.getFirstChild() : s.getLastChild()) : null;
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
        var t = Qo()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto6.getLatest = function getLatest() {
        if (dr(this)) return this;
        var e = pi(this.__key);
        return (null === e && t(113), e);
      };
      _proto6.getWritable = function getWritable() {
        if (dr(this)) return this;
        Vo();
        var t = Xo(),
          e = Qo(),
          n = t._nodeMap,
          r = this.__key,
          o = this.getLatest(),
          s = e._cloneNotNeeded,
          i = No();
        if ((null !== i && i.setCachedNodes(null), s.has(r))) return (hi(o), o);
        var l = zl(o);
        return (s.add(r), hi(l), n.set(r, l), l);
      };
      _proto6.getTextContent = function getTextContent() {
        return yc(this);
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
        return new _$2(t);
      };
      _proto6.exportDOM = function exportDOM(t) {
        return { element: this.createDOM(t._config, t) };
      };
      _proto6.exportJSON = function exportJSON() {
        var t = this.__state ? this.__state.toJSON() : void 0;
        return babelHelpers["extends"]({ type: this.__type, version: 1 }, t);
      };
      gr.importJSON = function importJSON(e) {
        t(18, this.name);
      };
      _proto6.updateFromJSON = function updateFromJSON(t) {
        return (function (t, e) {
          var n = t.getWritable(),
            r = e.$;
          var o = r;
          for (var _t75 of gt(n).flatKeys)
            _t75 in e &&
              ((void 0 !== o && o !== r) ||
                (o = babelHelpers["extends"]({}, r)),
              (o[_t75] = e[_t75]));
          return ((n.__state || o) && ht(t).updateFromJSON(o), n);
        })(this, t);
      };
      gr.transform = function transform() {
        return null;
      };
      _proto6.remove = function remove(t) {
        ur(this, !0, t);
      };
      _proto6.replace = function replace(e, n) {
        Vo();
        var r = No();
        (null !== r && (r = r.clone()), sl(this, e));
        var o = this.getLatest(),
          s = this.__key,
          i = e.__key,
          l = e.getWritable(),
          c = this.getParentOrThrow().getWritable(),
          a = c.__size,
          u = l.getParent(),
          f = null !== u ? l.getIndexWithinParent() : -1;
        (fi(l), null !== u && eo(r) && ko(r, u, f, -1));
        var d = o.getPreviousSibling(),
          h = o.getNextSibling(),
          g = o.__prev,
          _ = o.__next,
          p = o.__parent;
        if ((ur(o, !1, !0), null === d)) c.__first = i;
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
          ((ps(this) && ps(l)) || t(139),
          (y = l.getChildrenSize()),
          l.splice(y, 0, this.getChildren()));
        var m = ac(this);
        if (m.length > 0) {
          (nc(this) && nc(l)) || t(368, this.__key, l.__key);
          for (var _t76 of m) {
            var _e61 = uc(this, _t76);
            null !== _e61 && (Sc(this, _t76), Cc(l, _t76, _e61));
          }
        }
        if (eo(r)) {
          vi(r);
          var _t77 = r.anchor,
            _e62 = r.focus;
          (_t77.key === s &&
            (n && "element" === _t77.type
              ? _t77.set(l.__key, y + _t77.offset, "element")
              : Qr(_t77, l)),
            _e62.key === s &&
              (n && "element" === _e62.type
                ? _e62.set(l.__key, y + _e62.offset, "element")
                : Qr(_e62, l)));
        }
        return (_i() === s && gi(i), l);
      };
      _proto6.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (Vo(), sl(this, t));
        var n = this.getWritable(),
          r = t.getWritable();
        Tc(this.getParentOrThrow());
        var o = r.getParent(),
          s = No();
        var i = !1,
          l = !1;
        if (null !== o) {
          var _n45 = t.getIndexWithinParent();
          if (eo(s)) {
            var _t78 = o.__key,
              _e63 = s.anchor,
              _r28 = s.focus;
            ((i =
              "element" === _e63.type &&
              _e63.key === _t78 &&
              _e63.offset === _n45 + 1),
              (l =
                "element" === _r28.type &&
                _r28.key === _t78 &&
                _r28.offset === _n45 + 1));
          }
          (fi(r), e && eo(s) && ko(s, o, _n45, -1));
        } else fi(r);
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
          e && eo(s))
        ) {
          var _t79 = this.getIndexWithinParent();
          ko(s, a, _t79 + 1);
          var _e64 = a.__key;
          (i && s.anchor.set(_e64, _t79 + 2, "element"),
            l && s.focus.set(_e64, _t79 + 2, "element"));
        }
        return t;
      };
      _proto6.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (Vo(), sl(this, t));
        var n = this.getWritable(),
          r = t.getWritable();
        Tc(this.getParentOrThrow());
        var o = r.__key,
          s = No(),
          i = r.getParent(),
          l = null !== i ? r.getIndexWithinParent() : -1;
        (fi(r), null !== i && e && eo(s) && ko(s, i, l, -1));
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
          e && eo(s))
        ) {
          ko(s, this.getParentOrThrow(), f);
        }
        return t;
      };
      _proto6.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto6.createParentElementNode = function createParentElementNode() {
        return Rs();
      };
      _proto6.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto6.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto6.selectPrevious = function selectPrevious(t, e) {
        Vo();
        var n = sc(this);
        if (null !== n) return n.selectPrevious(t, e);
        var r = this.getPreviousSibling(),
          o = this.getParentOrThrow();
        if (null === r) return o.select(0, 0);
        if (ps(r)) return r.select();
        if (!Hr(r)) {
          var _t80 = r.getIndexWithinParent() + 1;
          return o.select(_t80, _t80);
        }
        return r.select(t, e);
      };
      _proto6.selectNext = function selectNext(t, e) {
        Vo();
        var n = sc(this);
        if (null !== n) return n.selectNext(t, e);
        var r = this.getNextSibling(),
          o = this.getParentOrThrow();
        if (null === r) return o.select();
        if (ps(r)) return r.select(0, 0);
        if (!Hr(r)) {
          var _t81 = r.getIndexWithinParent();
          return o.select(_t81, _t81);
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
      return gr;
    })();
    function _r(t) {
      return t instanceof _gr5;
    }
    var pr = "history-merge",
      yr = "collaboration",
      mr = "skip-scroll-into-view",
      xr = "skip-dom-selection",
      Cr = "skip-selection-focus",
      Sr = "composition-start",
      Tr = "composition-end",
      Nr = "!important";
    function vr(t) {
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
                      var _o25 = n.trim(),
                        _s22 = r.trim();
                      ("" !== _o25 && "" !== _s22 && (e[_o25] = _s22),
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
    function kr(t, e, n) {
      var r = n.trimEnd(),
        o = r.length - 10;
      o >= 0 && r.slice(o).toLowerCase() === Nr
        ? t.setProperty(e, r.slice(0, o).trim(), "important")
        : t.setProperty(e, n, "");
    }
    function Er(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var r = vr(n),
        o = vr(e);
      for (var _e65 in o) (delete r[_e65], kr(t, _e65, o[_e65]));
      for (var _e66 in r) t.removeProperty(_e66);
    }
    function Or(t, e) {
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
    function br(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function Mr(t, e, n, r, o) {
      var s = r.classList;
      var i = $i(o, "base");
      (void 0 !== i && s.add.apply(s, i),
        (i = $i(o, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== i &&
        (8 & n && 4 & n
          ? ((l = !0), c || s.add.apply(s, i))
          : c && s.remove.apply(s, i));
      for (var _t82 in A) {
        var _r29 = A[_t82];
        if (((i = $i(o, _t82)), void 0 !== i))
          if (n & _r29) {
            if (l && ("underline" === _t82 || "strikethrough" === _t82)) {
              e & _r29 && s.remove.apply(s, i);
              continue;
            }
            (0 === (e & _r29) ||
              (c && "underline" === _t82) ||
              "strikethrough" === _t82) &&
              s.add.apply(s, i);
          } else e & _r29 && s.remove.apply(s, i);
      }
    }
    function Ar(t, e, n) {
      var r = n.isComposing(),
        o = t + (r ? N : ""),
        i = Dl(),
        l = Il(i).$getDOMSlot(n, e, i),
        c = l.getFirstChild();
      if (null === c || c.nodeType !== Node.TEXT_NODE)
        return void l.insertChild(document.createTextNode(o));
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
            _t83 = _ref25[0],
            _e67 = _ref25[1],
            _n46 = _ref25[2];
          (0 !== _e67 && a.deleteData(_t83, _e67), a.insertData(_t83, _n46));
        } else a.nodeValue = o;
    }
    function wr(t, e, n, r, o, s) {
      Ar(o, t, e);
      var i = s.theme.text;
      void 0 !== i && Mr(0, 0, r, t, i);
    }
    function Dr(t, e) {
      var n = document.createElement(e);
      return (n.appendChild(t), n);
    }
    function Ir(t) {
      return null != t && !0 === t.__isInlineFormattable;
    }
    var _Pr2 = (function (_gr) {
      function Pr(t, e) {
        var _this;
        if (t === void 0) {
          t = "";
        }
        ((_this = _gr.call(this, e) || this),
          (_this.__text = t),
          (_this.__format = 0),
          (_this.__style = ""),
          (_this.__mode = 0),
          (_this.__detail = 0));
        return _this;
      }
      babelHelpers.inheritsLoose(Pr, _gr);
      Pr.getType = function getType() {
        return "text";
      };
      Pr.clone = function clone(t) {
        return new Pr(t.__text, t.__key);
      };
      var _proto7 = Pr.prototype;
      _proto7.afterCloneFrom = function afterCloneFrom(t) {
        (_gr.prototype.afterCloneFrom.call(this, t),
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
        return this.__key === _i();
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
        return ai(this.getLatest().__format, t, e);
      };
      _proto7.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto7.isInline = function isInline() {
        return !0;
      };
      _proto7.createDOM = function createDOM(t, e) {
        var n = this.__format,
          r = Or(0, n),
          o = br(0, n),
          s = null === r ? o : r,
          i = document.createElement(s);
        var l = i;
        (this.hasFormat("code") && i.setAttribute("spellcheck", "false"),
          null !== r && ((l = document.createElement(o)), i.appendChild(l)));
        wr(l, this, 0, n, this.__text, t);
        var c = this.__style;
        return ("" !== c && Er(i.style, c), i);
      };
      _proto7.updateDOM = function updateDOM(e, n, r) {
        var o = this.__text,
          s = e.__format,
          i = this.__format,
          l = Or(0, s),
          c = Or(0, i),
          a = br(0, s),
          u = br(0, i);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _e68 = n.firstChild;
          null == _e68 && t(48);
          var _s23 = document.createElement(u);
          return (wr(_s23, this, 0, i, o, r), n.replaceChild(_s23, _e68), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && t(49)),
          Ar(o, f, this));
        var d = r.theme.text;
        void 0 !== d && s !== i && Mr(0, s, i, f, d);
        var h = e.__style,
          g = this.__style;
        return (h !== g && Er(n.style, g, h), !1);
      };
      Pr.importDOM = function importDOM() {
        return {
          "#text": function text() {
            return { conversion: $r, priority: 0 };
          },
          b: function b() {
            return { conversion: Rr, priority: 0 };
          },
          code: function code() {
            return { conversion: Wr, priority: 0 };
          },
          em: function em() {
            return { conversion: Wr, priority: 0 };
          },
          i: function i() {
            return { conversion: Wr, priority: 0 };
          },
          mark: function mark() {
            return { conversion: Wr, priority: 0 };
          },
          s: function s() {
            return { conversion: Wr, priority: 0 };
          },
          span: function span() {
            return { conversion: Fr, priority: 0 };
          },
          strong: function strong() {
            return { conversion: Wr, priority: 0 };
          },
          sub: function sub() {
            return { conversion: Wr, priority: 0 };
          },
          sup: function sup() {
            return { conversion: Wr, priority: 0 };
          },
          u: function u() {
            return { conversion: Wr, priority: 0 };
          },
        };
      };
      Pr.importJSON = function importJSON(t) {
        return Ur().updateFromJSON(t);
      };
      _proto7.updateFromJSON = function updateFromJSON(t) {
        return _gr.prototype.updateFromJSON
          .call(this, t)
          .setTextContent(t.text)
          .setFormat(t.format)
          .setDetail(t.detail)
          .setMode(t.mode)
          .setStyle(t.style);
      };
      _proto7.exportDOM = function exportDOM(e) {
        var _gr$prototype$exportD = _gr.prototype.exportDOM.call(this, e),
          n = _gr$prototype$exportD.element;
        return (
          vl(n) || t(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = Dr(n, "b")),
          this.hasFormat("italic") && (n = Dr(n, "i")),
          this.hasFormat("strikethrough") && (n = Dr(n, "s")),
          this.hasFormat("underline") && (n = Dr(n, "u")),
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
          _gr.prototype.exportJSON.call(this),
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
        var e = ai(this.getFormat(), t, null);
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
        Vo();
        var n = t,
          r = e;
        var o = No(),
          s = this.getTextContent(),
          i = this.__key;
        if ("string" == typeof s) {
          var _t84 = s.length;
          (void 0 === n && (n = _t84), void 0 === r && (r = _t84));
        } else ((n = 0), (r = 0));
        if (!eo(o)) return xo(i, n, i, r, "text", "text");
        {
          var _t85 = _i();
          ((_t85 !== o.anchor.key && _t85 !== o.focus.key) || gi(i),
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
        var c = No();
        if (r && eo(c)) {
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
        Vo();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var r = e.__key,
          o = _i(),
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
        for (var _e70 = 0, _r30 = 0; _e70 < s && _r30 <= l; _r30++) {
          var _o26 = t[_r30];
          _o26 > _e70 && (i.push(n.slice(_e70, _o26)), (_e70 = _o26));
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
        var m = No();
        if (eo(m)) {
          var _ref26 = m.isBackward()
              ? [m.focus, m.anchor]
              : [m.anchor, m.focus],
            _t86 = _ref26[0],
            _e71 = _ref26[1];
          ("text" === _t86.type && _t86.key === r && (p = _t86),
            "text" === _e71.type && _e71.key === r && (y = _e71));
        }
        e.isSegmented()
          ? ((f = Ur(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = xt(e, f)),
            (_ = !0))
          : (f = e.setTextContent(a));
        var x = [f];
        for (var _t87 = 1; _t87 < c; _t87++) {
          var _n47 = Ur(i[_t87]);
          ((_n47.__format = d),
            (_n47.__style = h),
            (_n47.__detail = g),
            (_n47.__state = xt(e, _n47)));
          var _s24 = _n47.__key;
          (o === r && gi(_s24), x.push(_n47));
        }
        var C = p ? p.offset : null,
          S = y ? y.offset : null;
        var T = 0;
        for (var _t88 of x) {
          if (!p && !y) break;
          var _e72 = T + _t88.getTextContentSize();
          if (
            (null !== p &&
              null !== C &&
              C <= _e72 &&
              C >= T &&
              (p.set(_t88.getKey(), C - T, "text"), C < _e72 && (p = null)),
            null !== y && null !== S && S <= _e72 && S >= T)
          ) {
            y.set(_t88.getKey(), S - T, "text");
            break;
          }
          T = _e72;
        }
        if (null !== u) {
          !(function (t) {
            var e = t.getPreviousSibling(),
              n = t.getNextSibling();
            null !== e && hi(e);
            null !== n && hi(n);
          })(this);
          var _t89 = u.getWritable(),
            _e73 = this.getIndexWithinParent();
          (_
            ? (_t89.splice(_e73, 0, x), this.remove())
            : _t89.splice(_e73, 1, x),
            eo(m) && ko(m, u, _e73, c - 1));
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
        _i() === o && gi(r);
        var l = No();
        if (eo(l)) {
          var _t90 = l.anchor,
            _s25 = l.focus;
          (null !== _t90 && _t90.key === o && bo(_t90, n, r, e, i),
            null !== _s25 && _s25.key === o && bo(_s25, n, r, e, i));
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
      return babelHelpers.createClass(Pr, [
        {
          key: "__isInlineFormattable",
          get: function get() {
            return !0;
          },
        },
      ]);
    })(_gr5);
    function Fr(t) {
      return { forChild: jr(t.style), node: null };
    }
    function Rr(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: jr(e.style, n ? void 0 : "bold"), node: null };
    }
    var Lr = new WeakMap();
    function Kr(t) {
      if (!vl(t)) return !1;
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
          for (; null !== n && void 0 === (e = Lr.get(n)) && !Kr(n); )
            (r.push(n), (n = n.parentNode));
          var o = void 0 === e ? n : e;
          for (var _t91 = 0; _t91 < r.length; _t91++) Lr.set(r[_t91], o);
          return o;
        })(n)
      )
        return { node: Io(r) };
      if (((r = r.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === r))
        return { node: null };
      if (" " === r[0]) {
        var _t92 = n,
          _e74 = !0;
        for (; null !== _t92 && null !== (_t92 = zr(_t92, !1)); ) {
          var _n48 = _t92.textContent || "";
          if (_n48.length > 0) {
            (/[ \t\n]$/.test(_n48) && (r = r.slice(1)), (_e74 = !1));
            break;
          }
        }
        _e74 && (r = r.slice(1));
      }
      if (" " === r[r.length - 1]) {
        var _t93 = n,
          _e75 = !0;
        for (; null !== _t93 && null !== (_t93 = zr(_t93, !0)); ) {
          if (
            (_t93.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e75 = !1;
            break;
          }
        }
        _e75 && (r = r.slice(0, r.length - 1));
      }
      return "" === r ? { node: null } : { node: Ur(r) };
    }
    function zr(t, e) {
      var n = t;
      for (;;) {
        var _t94 = void 0;
        for (; null === (_t94 = e ? n.nextSibling : n.previousSibling); ) {
          var _t95 = n.parentElement;
          if (null === _t95) return null;
          n = _t95;
        }
        if (((n = _t94), vl(n))) {
          var _t96 = n.style.display;
          if (
            ("" === _t96 && !bl(n)) ||
            ("" !== _t96 && !_t96.startsWith("inline"))
          )
            return null;
        }
        var _r31 = n;
        for (; null !== (_r31 = e ? n.firstChild : n.lastChild); ) n = _r31;
        if (ii(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var Br = {
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
    function Wr(t) {
      var e = Br[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: jr(t.style, e), node: null };
    }
    function Ur(t) {
      if (t === void 0) {
        t = "";
      }
      return ol(new _Pr2(t));
    }
    function Hr(t) {
      return t instanceof _Pr2;
    }
    function jr(t, e) {
      var n = t.fontWeight,
        r = t.textDecoration.split(" "),
        o = "700" === n || "bold" === n,
        s = r.includes("line-through"),
        i = "italic" === t.fontStyle,
        l = r.includes("underline"),
        c = t.verticalAlign;
      return function (t) {
        return Hr(t) || Ir(t)
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
    var _Yr = (function (_Pr) {
      function Yr(t) {
        var _this2;
        ((_this2 = _Pr.call(this, "\t", t) || this), (_this2.__detail = 2));
        return _this2;
      }
      babelHelpers.inheritsLoose(Yr, _Pr);
      Yr.getType = function getType() {
        return "tab";
      };
      Yr.clone = function clone(t) {
        return new Yr(t.__key);
      };
      Yr.importDOM = function importDOM() {
        return null;
      };
      var _proto8 = Yr.prototype;
      _proto8.createDOM = function createDOM(t) {
        var e = _Pr.prototype.createDOM.call(this, t),
          n = $i(t.theme, "tab");
        if (void 0 !== n) {
          var _e$classList;
          (_e$classList = e.classList).add.apply(_e$classList, n);
        }
        return e;
      };
      Yr.importJSON = function importJSON(t) {
        return Jr().updateFromJSON(t);
      };
      _proto8.setTextContent = function setTextContent(t) {
        return _Pr.prototype.setTextContent.call(this, "\t");
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
      return Yr;
    })(_Pr2);
    function Jr() {
      return ol(new _Yr());
    }
    function Gr(t) {
      return t instanceof _Yr;
    }
    var _Vr = (function () {
      function Vr(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto9 = Vr.prototype;
      _proto9.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto9.isBefore = function isBefore(t) {
        if (this.key === t.key) return this.offset < t.offset;
        return Xc(fa(na(this, "next")), fa(na(t, "next"))) < 0;
      };
      _proto9.getNode = function getNode() {
        var e = pi(this.key);
        return (null === e && t(20), e);
      };
      _proto9.set = function set(t, e, n, r) {
        var o = this._selection,
          s = this.key;
        (r && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          Go() ||
            (_i() === s && gi(t),
            null !== o &&
              (o.setCachedNodes(null),
              eo(o) && (o._cachedIsBackward = null),
              (o.dirty = !0))));
      };
      return Vr;
    })();
    function qr(t, e, n) {
      return new _Vr(t, e, n);
    }
    function Xr(t, e) {
      var n = e.__key,
        r = t.offset,
        o = "element";
      if (Hr(e)) {
        o = "text";
        var _t97 = e.getTextContentSize();
        r > _t97 && (r = _t97);
      } else if (!ps(e)) {
        var _t98 = e.getNextSibling();
        if (Hr(_t98)) ((n = _t98.__key), (r = 0), (o = "text"));
        else {
          var _t99 = e.getParent();
          _t99 && ((n = _t99.__key), (r = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, r, o);
    }
    function Qr(t, e) {
      if (ps(e)) {
        var _n49 = e.getLastDescendant();
        ps(_n49) || Hr(_n49) ? Xr(t, _n49) : Xr(t, e);
      } else Xr(t, e);
    }
    var _Zr = (function () {
      function Zr(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto0 = Zr.prototype;
      _proto0.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto0.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto0.is = function is(t) {
        if (!ro(t)) return !1;
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
        return new Zr(new Set(this._nodes));
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
        var r = e[n - 1];
        var o;
        if (Hr(r)) o = r.select();
        else {
          var _t100 = r.getIndexWithinParent() + 1;
          o = r.getParentOrThrow().select(_t100, _t100);
        }
        o.insertNodes(t);
        for (var _t101 = 0; _t101 < n; _t101++) e[_t101].remove();
      };
      _proto0.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = this._nodes,
          n = [];
        for (var _t102 of e) {
          var _e76 = pi(_t102);
          null !== _e76 && n.push(_e76);
        }
        return (Go() || (this._cachedNodes = n), n);
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
          return null === oc(t);
        });
        if ((No() || vo()) === this && t[0]) {
          var _e77 = Kc(t[0], "next");
          oa(Vc(_e77, _e77));
        }
        for (var _e78 of t) _e78.remove();
        to();
      };
      return Zr;
    })();
    function to() {
      var t = Ni();
      if (t.isEmpty()) {
        var _e79 = Rs();
        (t.append(_e79), _e79.select());
      }
    }
    function eo(t) {
      return t instanceof _no;
    }
    var _no = (function () {
      function no(t, e, n, r) {
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
      var _proto1 = no.prototype;
      _proto1.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto1.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto1.is = function is(t) {
        return (
          !!eo(t) &&
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
          for (var _n51 of t)
            if (Pc(_n51)) {
              var _t103 = _n51.origin;
              0 === e.length ? o.add(_t103) : (s.add(_t103), e.push(_t103));
            } else {
              var _t104 = _n51.origin;
              (ps(_t104) && s.has(_t104)) || e.push(_t104);
            }
          r && e.push(r.caret.origin);
          if (
            Ic(t.focus) &&
            ps(t.focus.origin) &&
            null === t.focus.getNodeAtCaret()
          )
            for (
              var _n52 = Wc(t.focus.origin, "previous");
              Pc(_n52) &&
              o.has(_n52.origin) &&
              !_n52.origin.isEmpty() &&
              _n52.origin.is(e[e.length - 1]);
              _n52 = Hc(_n52)
            )
              (o["delete"](_n52.origin), e.pop());
          for (; e.length > 1; ) {
            var _t105 = e[e.length - 1];
            if (!ps(_t105) || s.has(_t105) || _t105.isEmpty() || o.has(_t105))
              break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n53 = fa(t.anchor),
              _r32 = fa(t.anchor.getFlipped()),
              _o27 = function _o27(t) {
                return Dc(t) ? t.origin : t.getNodeAtCaret();
              },
              _s26 =
                _o27(_n53) ||
                _o27(_r32) ||
                (t.anchor.getNodeAtCaret() ? _n53.origin : _r32.origin);
            e.push(_s26);
          }
          return e;
        })(ga(ia(this), "next"));
        return (Go() || (this._cachedNodes = e), e);
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
          _io = io(this),
          i = _io[0],
          l = _io[1];
        var c = "",
          a = !0;
        for (var _u9 = 0; _u9 < t.length; _u9++) {
          var _f7 = t[_u9];
          if (ps(_f7) && !_f7.isInline()) {
            a || (c += "\n");
            var _t106 = "";
            for (var _e80 of ac(_f7)) {
              var _n54 = uc(_f7, _e80);
              null !== _n54 && (_t106 += _n54.getTextContent());
            }
            "" !== _t106 ? ((c += _t106), (a = !1)) : (a = !_f7.isEmpty());
          } else if (((a = !1), Hr(_f7))) {
            var _t107 = _f7.getTextContent();
            (_f7 === e
              ? _f7 === n
                ? ("element" === r.type &&
                    "element" === o.type &&
                    o.offset !== r.offset) ||
                  (_t107 = i < l ? _t107.slice(i, l) : _t107.slice(l, i))
                : (_t107 = s ? _t107.slice(i) : _t107.slice(l))
              : _f7 === n &&
                (_t107 = s ? _t107.slice(0, l) : _t107.slice(0, i)),
              (c += _t107));
          } else
            (!xs(_f7) && !As(_f7)) ||
              (_f7 === n && this.isCollapsed()) ||
              (c += _f7.getTextContent());
        }
        return c;
      };
      _proto1.applyDOMRange = function applyDOMRange(t) {
        var e = Qo(),
          n = e.getEditorState()._selection,
          r = yo(
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
        return new no(
          qr(t.key, t.offset, t.type),
          qr(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto1.toggleFormat = function toggleFormat(t) {
        ((this.format = ai(this.format, t, null)), (this.dirty = !0));
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
        this.insertNodes(Io(t));
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
                i = Ur();
              if ((i.setFormat(n), i.setStyle(r), Ls(s))) s.splice(0, 0, [i]);
              else if (null !== s) {
                var _t108 = nl(o) ? Rs().append(i) : i;
                s.insertBefore(_t108);
              } else if (nl(o)) {
                var _t109 = o.getLastChild();
                ps(_t109) && !_t109.isInline() && _t109.isEmpty()
                  ? _t109.append(i)
                  : o.append(Rs().append(i));
              } else o.append(i);
              (t.is(e) && e.set(i.__key, 0, "text"), t.set(i.__key, 0, "text"));
            })(i, l, o, s),
          "element" === l.type && ra(l, fa(na(l, "next"))));
        var c = i.offset;
        var a = l.offset;
        var u = this.getNodes(),
          f = u.length;
        var d = u[0];
        Hr(d) || t(26);
        var h = d.getTextContent().length,
          g = d.getParentOrThrow();
        var _ = u[f - 1];
        if (
          (1 === f &&
            "element" === l.type &&
            ((a = h), l.set(i.key, a, "text")),
          this.isCollapsed() &&
            c === h &&
            (si(d) ||
              !d.canInsertTextAfter() ||
              (!g.canInsertTextAfter() && null === d.getNextSibling())))
        ) {
          var _t110 = d.getNextSibling();
          var _n55;
          if (
            (Hr(_t110) && _t110.canInsertTextBefore() && !si(_t110)
              ? (_n55 = _t110)
              : ((_n55 = Ur()),
                _n55.setFormat(o),
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
          (si(d) ||
            !d.canInsertTextBefore() ||
            (!g.canInsertTextBefore() && null === d.getPreviousSibling()))
        ) {
          var _t111 = d.getPreviousSibling();
          var _n56;
          if (
            (!Hr(_t111) || si(_t111)
              ? ((_n56 = Ur()),
                _n56.setFormat(o),
                g.canInsertTextBefore()
                  ? d.insertBefore(_n56)
                  : g.insertBefore(_n56))
              : (_n56 = _t111),
            _n56.select(),
            (d = _n56),
            "" !== e)
          )
            return void this.insertText(e);
        } else if (d.isSegmented() && c !== h) {
          var _t112 = Ur(d.getTextContent());
          (_t112.setFormat(o), d.replace(_t112), (d = _t112));
        } else if (!this.isCollapsed() && "" !== e) {
          var _t113 = _.getParent();
          if (
            !g.canInsertTextBefore() ||
            !g.canInsertTextAfter() ||
            (ps(_t113) &&
              (!_t113.canInsertTextBefore() || !_t113.canInsertTextAfter()))
          )
            return (
              this.insertText(""),
              ho(this.anchor, this.focus),
              void this.insertText(e)
            );
        }
        if (1 === f) {
          if (oi(d)) {
            var _t114 = Ur(e);
            return (_t114.select(), void d.replace(_t114));
          }
          var _t115 = d.getFormat(),
            _n57 = d.getStyle();
          if (c !== a || (_t115 === o && _n57 === s)) {
            if (Gr(d)) {
              var _t116 = Ur(e);
              return (
                _t116.setFormat(o),
                _t116.setStyle(s),
                _t116.select(),
                void d.replace(_t116)
              );
            }
          } else {
            if ("" !== d.getTextContent()) {
              var _t117 = Ur(e);
              if (
                (_t117.setFormat(o), _t117.setStyle(s), _t117.select(), 0 === c)
              )
                d.insertBefore(_t117, !1);
              else {
                var _d$splitText = d.splitText(c),
                  _e81 = _d$splitText[0];
                _e81.insertAfter(_t117, !1);
              }
              return void (
                _t117.isComposing() &&
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
                ((this.format = _t115),
                (this.style = _n57),
                d.isComposing() &&
                  ((this.anchor.offset -= e.length),
                  (this._cachedNodes = null),
                  (this._cachedIsBackward = null))));
        } else {
          var _t118 = new Set([].concat(d.getParentKeys(), _.getParentKeys())),
            _n58 = ps(d) ? d : d.getParentOrThrow();
          var _r34 = ps(_) ? _ : _.getParentOrThrow(),
            _o28 = _;
          if (!_n58.is(_r34) && _r34.isInline())
            do {
              ((_o28 = _r34), (_r34 = _r34.getParentOrThrow()));
            } while (_r34.isInline());
          if (
            ("text" === l.type && (0 !== a || "" === _.getTextContent())) ||
            ("element" === l.type && _.getIndexWithinParent() < a)
          ) {
            if (Hr(_) && !oi(_) && a !== _.getTextContentSize()) {
              if (_.isSegmented()) {
                var _t119 = Ur(_.getTextContent());
                (_.replace(_t119), (_ = _t119));
              }
              (Ss(l.getNode()) ||
                "text" !== l.type ||
                (Hr(_) ||
                  (function (t) {
                    throw new Error(t);
                  })("insertText: lastNode is not a TextNode"),
                (_ = _.spliceText(0, a, ""))),
                _t118.add(_.__key));
            } else {
              var _t120 = _.getParentOrThrow();
              _t120.canBeEmpty() || 1 !== _t120.getChildrenSize()
                ? _.remove()
                : _t120.remove();
            }
          } else _t118.add(_.__key);
          var _s27 = _r34.getChildren(),
            _i16 = new Set(u),
            _g6 = _n58.is(_r34),
            _p3 = _n58.isInline() && null === d.getNextSibling() ? _n58 : d;
          for (var _t121 = _s27.length - 1; _t121 >= 0; _t121--) {
            var _e82 = _s27[_t121];
            if (_e82.is(d) || (ps(_e82) && _e82.isParentOf(d))) break;
            _e82.isAttached() &&
              (!_i16.has(_e82) || _e82.is(_o28)
                ? _g6 || _p3.insertAfter(_e82, !1)
                : _e82.remove());
          }
          if (!_g6) {
            var _e83 = _r34,
              _n59 = null;
            for (; null !== _e83; ) {
              var _r35 = _e83.getChildren(),
                _o29 = _r35.length;
              ((0 === _o29 || _r35[_o29 - 1].is(_n59)) &&
                (_t118["delete"](_e83.__key), (_n59 = _e83)),
                (_e83 = _e83.getParent()));
            }
          }
          if (oi(d)) {
            if (c === h) d.select();
            else {
              var _t122 = Ur(e);
              (_t122.select(), d.replace(_t122));
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
            var _n60 = u[_e84],
              _r36 = _n60.__key;
            _t118.has(_r36) || _n60.remove();
          }
        }
      };
      _proto1.removeText = function removeText() {
        var t = No() === this;
        (sa(this, ua(ia(this))), t && No() !== this && vi(this));
      };
      _proto1.formatText = function formatText(t, e) {
        if (e === void 0) {
          e = null;
        }
        oo(this, t, e);
      };
      _proto1.insertNodes = function insertNodes(e) {
        var _o30;
        if (0 === e.length) return;
        this.isCollapsed() || this.removeText();
        var n = this.anchor.getNode();
        if ("element" === this.anchor.type && ps(n) && null !== oc(n)) {
          var _n$getFirstChild;
          var _r37 = n.isShadowRoot()
            ? (_n$getFirstChild = n.getFirstChild()) != null
              ? _n$getFirstChild
              : n.append(Rs()).getFirstChild()
            : n.getFirstChild();
          if (n.isShadowRoot() && null !== _r37 && !ps(_r37)) {
            var _t123 = Rs();
            (_r37.insertBefore(_t123), (_r37 = _t123));
          }
          if (null !== _r37) {
            _r37.selectStart();
            var _n61 = No();
            return (eo(_n61) || t(369), _n61.insertNodes(e));
          }
        }
        if ("element" === this.anchor.type && nl(n)) {
          var _t124 = Ko(e),
            _r38 = _t124.getLastDescendant();
          return (
            n.splice(this.anchor.offset, 0, _t124.getChildren()),
            void (null !== _r38 && _r38.selectEnd())
          );
        }
        var r = (this.isBackward() ? this.focus : this.anchor).getNode(),
          o = Ql(r, wl);
        var s = e[e.length - 1];
        if (ps(o) && "__language" in o) {
          if ("__language" in e[0]) this.insertText(e[0].getTextContent());
          else {
            var _t125 = Fo(this);
            (o.splice(_t125, 0, e), s.selectEnd());
          }
          return;
        }
        if (
          !e.some(function (t) {
            return (ps(t) || xs(t)) && !t.isInline();
          })
        ) {
          ps(o) || t(211, r.constructor.name, r.getType());
          var _n62 = Fo(this);
          return (o.splice(_n62, 0, e), void s.selectEnd());
        }
        if (ps(o) && null !== oc(o)) {
          var _t126 = Fo(this),
            _n63 = Po(e);
          o.splice(_t126, 0, _n63);
          var _r39 = _n63[_n63.length - 1];
          return void (void 0 !== _r39
            ? _r39.selectEnd()
            : o.select(_t126, _t126));
        }
        if (null === o) {
          var _t127 = Ko(e),
            _n64 = _t127.getLastDescendant();
          var _r40 = na(this.anchor, "next");
          for (var _e85 of _t127.getChildren()) _r40 = xa(_e85, _r40);
          return void (null !== _n64 && _n64.selectEnd());
        }
        if (ps(o) && !o.isParentRequired() && !nl(o.getParentOrThrow())) {
          var _t128 = Fo(this),
            _n65 = Po(e);
          o.splice(_t128, 0, _n65);
          var _r41 = _n65[_n65.length - 1];
          return void (void 0 !== _r41
            ? _r41.selectEnd()
            : o.select(_t128, _t128));
        }
        var i = Ko(e),
          l = i.getLastDescendant(),
          c = i.getChildren(),
          a = !ps(o) || !o.isEmpty() ? this.insertParagraph() : null;
        a && !o.isAttached() && ((r = this.anchor.getNode()), (o = Ql(r, wl)));
        var u = c[c.length - 1];
        var f = c[0];
        var d;
        (ps((d = f)) &&
          wl(d) &&
          !d.isEmpty() &&
          ps(o) &&
          (!o.isEmpty() || o.canMergeWhenEmpty()) &&
          (ps(o) || t(211, r.constructor.name, r.getType()),
          (_o30 = o).append.apply(_o30, f.getChildren()),
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
              for (var _t129 of s) i = i.insertAfter(_t129);
            })(o, f)));
        var h = Ql(l, wl);
        (a &&
          ps(h) &&
          (a.canMergeWhenEmpty() || wl(u)) &&
          (h.append.apply(h, a.getChildren()), a.remove()),
          ps(o) && o.isEmpty() && o.remove(),
          l.selectEnd());
        var g = ps(o) ? o.getLastChild() : null;
        As(g) && h !== o && g.remove();
      };
      _proto1.insertParagraph = function insertParagraph() {
        var e = this.anchor.getNode();
        if ("element" === this.anchor.type && nl(e)) {
          var _t130 = Rs();
          return (
            e.splice(this.anchor.offset, 0, [_t130]),
            _t130.select(),
            _t130
          );
        }
        var n = Fo(this),
          r = Ql(this.anchor.getNode(), wl);
        if (null !== r && null !== oc(r)) return null;
        ps(r) || t(213);
        var o = r.getChildAtIndex(n),
          s = o ? [o].concat(o.getNextSiblings()) : [],
          i = r.insertNewAfter(this, !1);
        return i ? (i.append.apply(i, s), i.selectStart(), i) : null;
      };
      _proto1.insertLineBreak = function insertLineBreak(t) {
        var e = Ms();
        if ((this.insertNodes([e]), t)) {
          var _t131 = e.getParentOrThrow(),
            _n66 = e.getIndexWithinParent();
          _t131.select(_n66, _n66);
        }
      };
      _proto1.extract = function extract() {
        var _n$splitText;
        var t = [].concat(this.getNodes()),
          e = t.length;
        var n = t[0],
          r = t[e - 1];
        var _io2 = io(this),
          o = _io2[0],
          s = _io2[1],
          i = this.isBackward(),
          _ref27 = i ? [this.focus, this.anchor] : [this.anchor, this.focus],
          l = _ref27[0],
          c = _ref27[1],
          _ref28 = i ? [s, o] : [o, s],
          a = _ref28[0],
          u = _ref28[1];
        if (0 === e) return [];
        if (1 === e) {
          if (Hr(n) && !this.isCollapsed()) {
            var _t132 = n.splitText(a, u),
              _e86 = 0 === a ? _t132[0] : _t132[1];
            return _e86
              ? (l.set(_e86.getKey(), 0, "text"),
                c.set(_e86.getKey(), _e86.getTextContentSize(), "text"),
                [_e86])
              : [];
          }
          return [n];
        }
        if (
          (Hr(n) &&
            (a === n.getTextContentSize()
              ? t.shift()
              : 0 !== a &&
                ((_n$splitText = n.splitText(a)),
                (n = _n$splitText[1]),
                (t[0] = n),
                l.set(n.getKey(), 0, "text"))),
          Hr(r))
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
        if ($o(this, t, e, n)) return;
        var r = "move" === t,
          o = Qo(),
          s = al(Qi(o));
        if (!s) return;
        var i = o._blockCursorElement,
          l = o._rootElement,
          c = this.focus.getNode();
        if (
          (null === l ||
            null === i ||
            !ps(c) ||
            c.isInline() ||
            c.canBeEmpty() ||
            cl(i, o, l),
          this.dirty)
        ) {
          var _t133 = ji(o, this.anchor.key),
            _e88 = ji(o, this.focus.key);
          var _n67 = _t133,
            _r42 = _e88;
          if ("text" === this.anchor.type) {
            var _e89 = this.anchor.getNode();
            _n67 = Hr(_e89) ? Rl(_e89, _t133, o) : null;
          }
          if ("text" === this.focus.type) {
            var _t134 = this.focus.getNode();
            _r42 = Hr(_t134) ? Rl(_t134, _e88, o) : null;
          }
          _n67 &&
            _r42 &&
            Mo(s, _n67, this.anchor.offset, _r42, this.focus.offset);
        }
        if (
          ((function (t, e, n, r) {
            t.modify(e, n, r);
          })(s, t, e ? "backward" : "forward", n),
          s.rangeCount > 0)
        ) {
          var _t135 = _l(s, o._rootElement),
            _n68 = _t135 || s.getRangeAt(0),
            _i17 = this.anchor.getNode(),
            _l8 = Ss(_i17) ? _i17 : tl(_i17);
          if ((this.applyDOMRange(_n68), (this.dirty = !0), !r)) {
            var _r43 = this.getNodes(),
              _o31 = [];
            var _i18 = !1;
            for (var _t136 = 0; _t136 < _r43.length; _t136++) {
              var _e90 = _r43[_t136];
              qi(_e90, _l8) ? _o31.push(_e90) : (_i18 = !0);
            }
            if (_i18 && _o31.length > 0)
              if (e) {
                var _t137 = _o31[0];
                ps(_t137)
                  ? _t137.selectStart()
                  : _t137.getParentOrThrow().selectStart();
              } else {
                var _t138 = _o31[_o31.length - 1];
                ps(_t138)
                  ? _t138.selectEnd()
                  : _t138.getParentOrThrow().selectEnd();
              }
            (_t135
              ? "backward" !== s.direction
              : s.anchorNode === _n68.startContainer &&
                s.anchorOffset === _n68.startOffset) ||
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
        "lineboundary" === n && $o(this, t, e, n, "decorators");
      };
      _proto1.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            ps(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t139 = e.getParent(),
            _n69 =
              e.getNextSibling() ||
              (null === _t139 ? null : _t139.getNextSibling());
          if (ps(_n69) && _n69.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto1.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e91 = this.anchor;
          var _n70 = _e91.getNode();
          if (this.forwardDeletion(_e91, _n70, t)) return;
          var _r44 = Jc(na(_e91, t ? "previous" : "next"));
          if (
            _r44.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            var _t140 = { type: "initial" };
            for (var _e92 of _r44.iterNodeCarets("shadowRoot"))
              if (Pc(_e92)) {
                if (_e92.origin.isInline());
                else {
                  if (_e92.origin.isShadowRoot()) {
                    if ("merge-block" === _t140.type) break;
                    if (
                      ps(_r44.anchor.origin) &&
                      _r44.anchor.origin.isEmpty()
                    ) {
                      var _t141 = fa(_e92);
                      (sa(this, Vc(_t141, _t141)), _r44.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t140.type &&
                    "merge-block" !== _t140.type) ||
                    (_t140 = {
                      block: _t140.block,
                      caret: _e92,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t140.type) break;
                if (Ic(_e92)) {
                  if (ps(_e92.origin)) {
                    if (_e92.origin.isInline()) {
                      if (!_e92.origin.isParentOf(_r44.anchor.origin)) break;
                    } else
                      _t140 = { block: _e92.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (xs(_e92.origin)) {
                    if (_e92.origin.isIsolated());
                    else if (ac(_e92.origin).length > 0) {
                      if (
                        ps(_r44.anchor.origin) &&
                        _r44.anchor.origin.isEmpty()
                      ) {
                        _r44.anchor.origin.remove();
                        var _t142 = So();
                        (_t142.add(_e92.origin.getKey()), vi(_t142));
                      }
                    } else if (
                      "merge-next-block" === _t140.type &&
                      (_e92.origin.isKeyboardSelectable() ||
                        !_e92.origin.isInline()) &&
                      ps(_r44.anchor.origin) &&
                      _r44.anchor.origin.isEmpty()
                    ) {
                      _r44.anchor.origin.remove();
                      var _t143 = So();
                      (_t143.add(_e92.origin.getKey()), vi(_t143));
                    } else _e92.origin.remove();
                    return;
                  }
                  break;
                }
              }
            if ("merge-block" === _t140.type) {
              var _t144 = _t140,
                _e93 = _t144.caret,
                _n71 = _t144.block;
              if (ac(_n71).length > 0) return;
              return _e93.origin.isEmpty() &&
                !_n71.isEmpty() &&
                _e93.origin.getParent() === _n71.getParent()
                ? void _e93.origin.remove(!0)
                : (sa(
                    this,
                    Vc(
                      !_e93.origin.isEmpty() && _n71.isEmpty()
                        ? la(Kc(_n71, _e93.direction))
                        : _r44.anchor,
                      _e93,
                    ),
                  ),
                  this.removeText());
            }
            for (var _t145 = _e91.getNode(); null !== _t145; ) {
              if (null !== oc(_t145)) return;
              if (ps(_t145) && _t145.isShadowRoot()) break;
              _t145 = _t145.getParent();
            }
          }
          var _o32 = this.focus;
          if ((this.modify("extend", t, "character"), this.isCollapsed())) {
            if (t && 0 === _e91.offset && lo(this, _e91.getNode())) return;
          } else {
            var _r45 = "text" === _o32.type ? _o32.getNode() : null;
            if (
              ((_n70 = "text" === _e91.type ? _e91.getNode() : null),
              null !== _r45 && _r45.isSegmented())
            ) {
              var _e94 = _o32.offset,
                _s28 = _r45.getTextContentSize();
              if (_r45.is(_n70) || (t && _e94 !== _s28) || (!t && 0 !== _e94))
                return void ao(_r45, t, _e94);
            } else if (null !== _n70 && _n70.isSegmented()) {
              var _o33 = _e91.offset,
                _s29 = _n70.getTextContentSize();
              if (_n70.is(_r45) || (t && 0 !== _o33) || (!t && _o33 !== _s29))
                return void ao(_n70, t, _o33);
            }
            !(function (t, e) {
              var n = t.anchor,
                r = t.focus,
                o = n.getNode(),
                s = r.getNode();
              if (o === s && "text" === n.type && "text" === r.type) {
                var _t146 = n.offset,
                  _s30 = r.offset,
                  _i19 = _t146 < _s30,
                  _l9 = _i19 ? _t146 : _s30,
                  _c8 = _i19 ? _s30 : _t146,
                  _a9 = _c8 - 1;
                if (_l9 !== _a9) {
                  (function (t) {
                    return !(Ei(t) || co(t));
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
          var _t147 = this.anchor.getNode();
          (_t147.isEmpty() &&
            Ss(_t147.getParent()) &&
            null === _t147.getPreviousSibling() &&
            lo(this, _t147),
            to());
        }
      };
      _proto1.deleteLine = function deleteLine(t) {
        var e = go(this.anchor);
        if (null !== e && xs(sc(e)))
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
          (this.isCollapsed() && this.modify("extend", t, "lineboundary"),
          this.isCollapsed())
        )
          this.deleteCharacter(t);
        else {
          Ql(this.anchor.getNode(), wl) !== Ql(this.focus.getNode(), wl)
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
          this.modify("extend", t, "word");
        }
        this.isCollapsed() ? this.deleteCharacter(t) : this.removeText();
      };
      _proto1.isBackward = function isBackward() {
        var t = this._cachedIsBackward;
        if (null !== t) return t;
        var e = this.focus.isBefore(this.anchor);
        return (Go() || (this._cachedIsBackward = e), e);
      };
      _proto1.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return no;
    })();
    function ro(t) {
      return t instanceof _Zr;
    }
    function oo(t, e, n) {
      var _g$splitText, _m$splitText;
      if (n === void 0) {
        n = null;
      }
      if (ro(t)) {
        for (var _n73 of t.getNodes())
          Ir(_n73) && _n73.setFormat(_n73.getFormatFlags(e, null));
        return;
      }
      if (t.isCollapsed()) return (t.toggleFormat(e), void gi(null));
      var r = t.getNodes(),
        o = [];
      for (var _t148 of r) Hr(_t148) && o.push(_t148);
      var s = function s(t) {
          for (var _n74 of r)
            if (ps(_n74)) {
              var _r46 = _n74.getFormatFlags(e, t);
              _n74.setTextFormat(_r46);
            }
        },
        i = function i(t) {
          for (var _n75 of r)
            !Hr(_n75) && Ir(_n75) && _n75.setFormat(_n75.getFormatFlags(e, t));
        },
        l = o.length;
      if (0 === l) return (t.toggleFormat(e), gi(null), s(n), void i(n));
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
        if (si(g) || (0 === _ && x === g.getTextContentSize())) g.setFormat(p);
        else {
          var _t149 = g.splitText(_, x),
            _e96 = 0 === _ ? _t149[0] : _t149[1];
          (_e96.setFormat(p),
            "text" === f.type && f.set(_e96.__key, 0, "text"),
            "text" === d.type && d.set(_e96.__key, x - _, "text"));
        }
        return void (t.format = p);
      }
      (0 === _ ||
        si(g) ||
        ((_g$splitText = g.splitText(_)), (g = _g$splitText[1]), (_ = 0)),
        g.setFormat(p));
      var C = m.getFormatFlags(e, p);
      x > 0 &&
        (x === m.getTextContentSize() ||
          si(m) ||
          ((_m$splitText = m.splitText(x)),
          (m = _m$splitText[0]),
          _m$splitText),
        m.setFormat(C));
      for (var _t150 = h + 1; _t150 < y; _t150++) {
        var _n76 = o[_t150],
          _r47 = _n76.getFormatFlags(e, C);
        _n76.setFormat(_r47);
      }
      ("text" === f.type && f.set(g.__key, _, "text"),
        "text" === d.type && d.set(m.__key, x, "text"),
        (t.format = p | C));
    }
    function so(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function io(t) {
      var e = t.getStartEndPoints();
      if (null === e) return [0, 0];
      var n = e[0],
        r = e[1];
      return "element" === n.type &&
        "element" === r.type &&
        n.key === r.key &&
        n.offset === r.offset
        ? [0, 0]
        : [so(n), so(r)];
    }
    function lo(t, e) {
      for (var _n77 = e; _n77; _n77 = _n77.getParent()) {
        if (ps(_n77)) {
          if (_n77.collapseAtStart(t)) return !0;
          if (nl(_n77)) break;
        }
        if (_n77.getPreviousSibling()) break;
      }
      return !1;
    }
    var co = (function () {
      try {
        var _t151 = new RegExp("\\p{Emoji}", "u"),
          _e97 = _t151.test.bind(_t151);
        if (_e97("\u2764\ufe0f") && _e97("#\ufe0f\u20e3") && _e97("\u{1f44d}"))
          return _e97;
      } catch (t) {}
      return function () {
        return !1;
      };
    })();
    function ao(t, e, n) {
      var r = t,
        o = r.getTextContent().split(/(?=\s)/g),
        s = o.length;
      var i = 0,
        l = 0;
      for (var _t152 = 0; _t152 < s; _t152++) {
        var _r48 = _t152 === s - 1;
        if (
          ((l = i), (i += o[_t152].length), (e && i === n) || i > n || _r48)
        ) {
          (o.splice(_t152, 1), _r48 && (l = void 0));
          break;
        }
      }
      var c = o.join("").trim();
      "" === c ? r.remove() : (r.setTextContent(c), r.select(l, l));
    }
    function uo(e, n, r, o) {
      var s,
        i = n,
        l = !1;
      if (vl(e)) {
        var _c9 = !1;
        var _a0 = e.childNodes,
          _u0 = _a0.length,
          _f8 = o._blockCursorElement;
        (i === _u0 && _u0 > 0 && ((_c9 = !0), (i = _u0 - 1)),
          void 0 !== xi(e, o) || Jl(e, o) || (l = !0));
        var _d6 = _a0[i],
          _h6 = !1;
        if (_d6 === _f8) ((_d6 = _a0[i + 1]), (_h6 = !0));
        else if (null !== _f8) {
          var _t153 = _f8.parentNode;
          if (e === _t153) {
            n > Array.prototype.indexOf.call(_t153.children, _f8) && i--;
          }
        }
        if (((s = ki(_d6)), Hr(s))) i = zc(s, _c9 ? "next" : "previous");
        else {
          var _a1 = ki(e);
          if (null === _a1) return null;
          if (ps(_a1)) {
            var _u1$resolveChildIndex;
            var _l0 = o.getElementByKey(_a1.getKey());
            null === _l0 && t(214);
            var _u1 = Pl(_a1, _l0, o);
            ((_u1$resolveChildIndex = _u1.resolveChildIndex(_a1, _l0, e, n)),
              (_a1 = _u1$resolveChildIndex[0]),
              (i = _u1$resolveChildIndex[1]),
              ps(_a1) || t(215),
              _c9 &&
                i >= _a1.getChildrenSize() &&
                (i = Math.max(0, _a1.getChildrenSize() - 1)));
            var _f9 = _a1.getChildAtIndex(i);
            if (
              ps(_f9) &&
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
              var _t154 = _c9
                ? _f9.getLastDescendant()
                : _f9.getFirstDescendant();
              (null === _t154
                ? (_a1 = _f9)
                : ((_f9 = _t154),
                  (_a1 = ps(_f9) ? _f9 : _f9.getParentOrThrow())),
                (i = 0));
            }
            Hr(_f9)
              ? ((s = _f9),
                (_a1 = null),
                (i = zc(_f9, _c9 ? "next" : "previous")))
              : _f9 !== _a1 &&
                _c9 &&
                !_h6 &&
                (ps(_a1) || t(216),
                (i = Math.min(_a1.getChildrenSize(), i + 1)));
          } else {
            var _t155 = sc(_a1),
              _r49 = null !== _t155 ? _t155 : _a1,
              _s31 = _r49.getIndexWithinParent(),
              _l1 = o.getElementByKey(_a1.getKey());
            var _c0 = "after";
            if (null !== _l1 && ki(e) === _a1) {
              var _t156 = Pl(_a1, _l1, o);
              _t156.element !== _l1
                ? (_c0 = _t156.resolveLeafPosition(_l1, e, n))
                : 0 === n && xs(_a1) && (_c0 = "before");
            }
            ((i = "before" === _c0 ? _s31 : _s31 + 1),
              (_a1 = _r49.getParentOrThrow()));
          }
          if (ps(_a1)) return [qr(_a1.__key, i, "element"), l];
        }
      } else s = ki(e);
      return Hr(s) ? [qr(s.__key, zc(s, i, "clamp"), "text"), l] : null;
    }
    function fo(t, e, n) {
      var r = t.offset,
        o = t.getNode();
      if (0 === r) {
        var _r50 = o.getPreviousSibling(),
          _s32 = o.getParent();
        if (e) {
          if ((n || !e) && null === _r50 && ps(_s32) && _s32.isInline()) {
            var _e98 = _s32.getPreviousSibling();
            Hr(_e98) && t.set(_e98.__key, _e98.getTextContent().length, "text");
          }
        } else
          ps(_r50) && !n && _r50.isInline()
            ? t.set(_r50.__key, _r50.getChildrenSize(), "element")
            : Hr(_r50) &&
              t.set(_r50.__key, _r50.getTextContent().length, "text");
      } else if (r === o.getTextContent().length) {
        var _r51 = o.getNextSibling(),
          _s33 = o.getParent();
        if (e && ps(_r51) && _r51.isInline()) t.set(_r51.__key, 0, "element");
        else if (
          (n || e) &&
          null === _r51 &&
          ps(_s33) &&
          _s33.isInline() &&
          !_s33.canInsertTextAfter() &&
          _s33.getTextContentSize() > 1
        ) {
          var _e99 = _s33.getNextSibling();
          Hr(_e99) && t.set(_e99.__key, 0, "text");
        }
      }
    }
    function ho(t, e, n) {
      if ("text" === t.type && "text" === e.type) {
        var _n78 = t.isBefore(e),
          _r52 = t.is(e);
        (fo(t, _n78, _r52),
          fo(e, !_n78, _r52),
          _r52 && e.set(t.key, t.offset, t.type));
      }
    }
    function go(t) {
      var e = pi(t.key);
      return null === e ? null : lc(e);
    }
    function _o(t, e, n) {
      var r = go(t),
        o = go(e);
      if (r === o || (null !== r && null !== o && r.is(o))) return !1;
      var s = n(r, o);
      if (null !== r)
        return (
          ps(r)
            ? e.set(r.getKey(), s ? r.getChildrenSize() : 0, "element")
            : e.set(r.getKey(), s ? r.getTextContentSize() : 0, "text"),
          !0
        );
      var i = sc(o);
      if (null === i) return !1;
      var l = i.getParent();
      if (null === l) return !1;
      var c = i.getIndexWithinParent();
      return (e.set(l.getKey(), s ? c + 1 : c, "element"), !0);
    }
    function po(t) {
      var e = _o(t.anchor, t.focus, function (e, n) {
        return (function (t, e, n, r) {
          if (null !== n && null !== r) {
            var _t157 = sc(n),
              _e100 = sc(r);
            if (null !== _t157 && _t157.is(_e100)) {
              for (var _e101 of cc(_t157).values()) {
                if (_e101 === n.getKey()) return !0;
                if (_e101 === r.getKey()) return !1;
              }
              return !0;
            }
            return null === _t157 || null === _e100 || _t157.isBefore(_e100);
          }
          if (null !== n) {
            var _t158 = sc(n),
              _r53 = pi(e.key);
            return (
              null === _t158 ||
              null === _r53 ||
              !(!_t158.is(_r53) && !_t158.isParentOf(_r53)) ||
              _t158.isBefore(_r53)
            );
          }
          var o = sc(r),
            s = pi(t.key);
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
    function yo(t, e, n, r, o, s) {
      if (null === t || null === n || !ti(o, t, n)) return null;
      var i = uo(t, e, eo(s) ? s.anchor : null, o);
      if (null === i) return null;
      var l = uo(n, r, eo(s) ? s.focus : null, o);
      if (null === l) return null;
      var c = i[0],
        a = i[1],
        u = l[0],
        f = l[1];
      if ("element" === c.type && "element" === u.type) {
        var _e102 = ki(t),
          _r54 = ki(n);
        if (xs(_e102) && xs(_r54)) return null;
      }
      var d =
        o._slotsUsed &&
        _o(c, u, function () {
          return (
            0 !==
            (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_FOLLOWING)
          );
        });
      return (ho(c, u), [c, u, a || f || d]);
    }
    function mo(t) {
      return ps(t) && !t.isInline();
    }
    function xo(t, e, n, r, o, s) {
      var i = Xo(),
        l = new _no(qr(t, e, o), qr(n, r, s), 0, "");
      return ((l.dirty = !0), (i._selection = l), l);
    }
    function Co() {
      var t = qr("root", 0, "element"),
        e = qr("root", 0, "element");
      return new _no(t, e, 0, "");
    }
    function So() {
      return new _Zr(new Set());
    }
    function To(t, e, n, r) {
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
      if (eo(t) && !c) return t.clone();
      {
        if (null === e) return null;
        var _r55 = yl(e, n._rootElement);
        if (
          ((a = _r55.anchorNode),
          (u = _r55.focusNode),
          (f = _r55.anchorOffset),
          (d = _r55.focusOffset),
          (l || void 0 === i) && eo(t) && !ti(n, a, u))
        )
          return t.clone();
      }
      var h = yo(a, f, u, d, n, t);
      if (null === h) return null;
      var g = h[0],
        _ = h[1],
        p = h[2];
      var y = 0,
        m = "";
      if (eo(t)) {
        var _e103 = t.anchor;
        if (g.key === _e103.key) ((y = t.format), (m = t.style));
        else {
          var _t159 = g.getNode();
          Hr(_t159)
            ? ((y = _t159.getFormat()), (m = _t159.getStyle()))
            : ps(_t159) &&
              ((y = _t159.getTextFormat()), (m = _t159.getTextStyle()));
        }
      }
      var x = new _no(g, _, y, m);
      return (p && (x.dirty = !0), x);
    }
    function No() {
      return Xo()._selection;
    }
    function vo() {
      return Qo()._editorState._selection;
    }
    function ko(t, e, n, r) {
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
        var _e104 = o.offset;
        if ((n <= _e104 && r > 0) || (n < _e104 && r < 0)) {
          var _n79 = Math.max(0, _e104 + r);
          (o.set(c, _n79, "element"), s.set(c, _n79, "element"), Eo(t));
        }
      } else {
        var _i20 = t.isBackward(),
          _l10 = _i20 ? s : o,
          _a10 = _l10.getNode(),
          _u10 = _i20 ? o : s,
          _f0 = _u10.getNode();
        if (e.is(_a10)) {
          var _t160 = _l10.offset;
          ((n <= _t160 && r > 0) || (n < _t160 && r < 0)) &&
            _l10.set(c, Math.max(0, _t160 + r), "element");
        }
        if (e.is(_f0)) {
          var _t161 = _u10.offset;
          ((n <= _t161 && r > 0) || (n < _t161 && r < 0)) &&
            _u10.set(c, Math.max(0, _t161 + r), "element");
        }
      }
      Eo(t);
    }
    function Eo(t) {
      var e = t.anchor,
        n = e.offset,
        r = t.focus,
        o = r.offset,
        s = e.getNode(),
        i = r.getNode();
      if (t.isCollapsed()) {
        if (!ps(s)) return;
        var _t162 = s.getChildrenSize(),
          _o34 = n >= _t162,
          _i21 = _o34 ? s.getChildAtIndex(_t162 - 1) : s.getChildAtIndex(n);
        if (Hr(_i21)) {
          var _t163 = 0;
          (_o34 && (_t163 = _i21.getTextContentSize()),
            e.set(_i21.__key, _t163, "text"),
            r.set(_i21.__key, _t163, "text"));
        }
        return;
      }
      if (ps(s)) {
        var _t164 = s.getChildrenSize(),
          _r56 = n >= _t164,
          _o35 = _r56 ? s.getChildAtIndex(_t164 - 1) : s.getChildAtIndex(n);
        if (Hr(_o35)) {
          var _t165 = 0;
          (_r56 && (_t165 = _o35.getTextContentSize()),
            e.set(_o35.__key, _t165, "text"));
        }
      }
      if (ps(i)) {
        var _t166 = i.getChildrenSize(),
          _e105 = o >= _t166,
          _n80 = _e105 ? i.getChildAtIndex(_t166 - 1) : i.getChildAtIndex(o);
        if (Hr(_n80)) {
          var _t167 = 0;
          (_e105 && (_t167 = _n80.getTextContentSize()),
            r.set(_n80.__key, _t167, "text"));
        }
      }
    }
    function Oo(t, e, n, r, o) {
      var s = null,
        i = 0,
        l = null;
      (null !== r
        ? ((s = r.__key),
          Hr(r)
            ? ((i = r.getTextContentSize()), (l = "text"))
            : ps(r) && ((i = r.getChildrenSize()), (l = "element")))
        : null !== o &&
          ((s = o.__key), Hr(o) ? (l = "text") : ps(o) && (l = "element")),
        null !== s && null !== l
          ? t.set(s, i, l)
          : ((i = e.getIndexWithinParent()),
            -1 === i && (i = n.getChildrenSize()),
            t.set(n.__key, i, "element")));
    }
    function bo(t, e, n, r, o) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : o), "text")
        : t.offset > r.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function Mo(t, e, n, r, o) {
      try {
        t.setBaseAndExtent(e, n, r, o);
      } catch (t) {}
    }
    function Ao(t, e, n) {
      var r = ji(t, e.getKey());
      if (ps(e)) {
        var _o36 = Pl(e, r, t);
        return [_o36.element, n + _o36.getFirstChildOffset()];
      }
      return [r, n];
    }
    function wo(t, e, n, r, o, i) {
      var l = i.getRootNode(),
        c = li(l) || fl(l) ? Tl(l) : null;
      if ((o.has(yr) && c !== i) || (null !== c && Qs(c, c))) return;
      var a = yl(r, i);
      var u;
      if (!eo(e))
        return void (
          null !== t &&
          ti(n, a.anchorNode, a.focusNode) &&
          r.removeAllRanges()
        );
      var f = e.anchor,
        d = e.focus,
        h = f.getNode(),
        g = d.getNode(),
        _Ao = Ao(n, h, f.offset),
        _ = _Ao[0],
        p = _Ao[1],
        _Ao2 = Ao(n, g, d.offset),
        y = _Ao2[0],
        m = _Ao2[1],
        x = e.format,
        C = e.style,
        S = e.isCollapsed();
      var T = _,
        N = y,
        v = !1;
      if (
        ("text" === f.type
          ? ((T = Hr(h) ? Rl(h, _, n) : null),
            (v = h.getFormat() !== x || h.getStyle() !== C))
          : eo(t) && "text" === t.anchor.type && (v = !0),
        "text" === d.type && (N = Hr(g) ? Rl(g, y, n) : null),
        null !== T && null !== N)
      ) {
        var k, E, O, b, M;
        if (
          (S &&
            (null === t || v || (eo(t) && (t.format !== x || t.style !== C))) &&
            ((k = x),
            (E = C),
            (O = p),
            (b = f.key),
            (M = performance.now()),
            (zn = [k, E, O, b, M])),
          ("Range" !== r.type || !S) &&
            a.anchorOffset === p &&
            a.focusOffset === m &&
            a.anchorNode === T &&
            a.focusNode === N)
        ) {
          if (null === c || !i.contains(c)) {
            var _t168 = null !== c ? ni(c) : null;
            (null !== _t168 && _t168 !== n) ||
              o.has(Cr) ||
              i.focus({ preventScroll: !0 });
          }
          if ("element" !== f.type) return;
        }
        if (
          (Mo(r, T, p, N, m), s && e.isCollapsed() && null !== i && !o.has(Cr))
        ) {
          var _t169 = Sl(i);
          if (null === _t169 || !i.contains(_t169)) {
            var _t170 = Tl(i.ownerDocument),
              _e106 = null !== _t170 ? ni(_t170) : null;
            (null !== _e106 && _e106 !== n) || i.focus({ preventScroll: !0 });
          }
        }
        if (!o.has(mr) && e.isCollapsed() && null !== i && i === Sl(i)) {
          var _t171 =
            eo(e) && "element" === e.anchor.type
              ? T.childNodes[p] || null
              : (void 0 === u && (u = pl(r, i)), u);
          if (null !== _t171) {
            var _e107;
            if (ii(_t171)) {
              var _n81 = _t171.ownerDocument.createRange();
              (_n81.selectNode(_t171), (_e107 = _n81.getBoundingClientRect()));
            } else _e107 = _t171.getBoundingClientRect();
            !(function (t, e, n) {
              var r = Ji(n),
                o = Xi(r);
              if (null === r || null === o) return;
              var s = e.top,
                i = e.bottom,
                l = 0,
                c = 0,
                a = n;
              for (; null !== a; ) {
                var _e108 = a === r.body;
                if (_e108) {
                  var _e109 = o.visualViewport;
                  if (_e109) {
                    var _t172 = _e109.offsetTop;
                    ((l = _t172), (c = _t172 + _e109.height));
                  } else ((l = 0), (c = Qi(t).innerHeight));
                  var _n82 = o.getComputedStyle(r.documentElement),
                    _s34 = parseFloat(_n82.scrollPaddingTop),
                    _i22 = parseFloat(_n82.scrollPaddingBottom);
                  (isFinite(_s34) && (l += _s34),
                    isFinite(_i22) && (c -= _i22));
                } else {
                  var _t173 = a.getBoundingClientRect();
                  ((l = _t173.top), (c = _t173.bottom));
                }
                var _n83 = 0;
                if (
                  (s < l ? (_n83 = -(l - s)) : i > c && (_n83 = i - c),
                  0 !== _n83)
                )
                  if (_e108) o.scrollBy(0, _n83);
                  else {
                    var _t174 = a.scrollTop;
                    a.scrollTop += _n83;
                    var _e110 = a.scrollTop - _t174;
                    ((s -= _e110), (i -= _e110));
                  }
                if (_e108) break;
                a = Yi(a);
              }
            })(n, _e107, i);
          }
        }
        Dn = !0;
      }
    }
    function Do(t, e) {
      for (var _n84 of t.split(/(\r?\n|\t)/))
        "\n" === _n84 || "\r\n" === _n84
          ? e.linebreak()
          : "\t" === _n84
            ? e.tab()
            : "" !== _n84 && e.text(_n84);
    }
    function Io(t) {
      var e = [];
      return (
        Do(t, {
          linebreak: function linebreak() {
            return e.push(Ms());
          },
          tab: function tab() {
            return e.push(Jr());
          },
          text: function text(t) {
            return e.push(Ur(t));
          },
        }),
        e
      );
    }
    function Po(t) {
      var e = [];
      for (var _n85 of t)
        As(_n85) ||
          ((!ps(_n85) && !xs(_n85)) || _n85.isInline()
            ? e.push(_n85)
            : ps(_n85) && e.push.apply(e, Po(_n85.getChildren())));
      return e;
    }
    function Fo(e) {
      var n = e;
      e.isCollapsed() || n.removeText();
      var r = No();
      (eo(r) && (n = r), eo(n) || t(161));
      var o = n.anchor;
      var s = o.getNode(),
        i = o.offset;
      for (; !wl(s) && null === oc(s); ) {
        var _Ro;
        var _t175 = s;
        if (((_Ro = Ro(s, i)), (s = _Ro[0]), (i = _Ro[1]), _t175.is(s))) break;
      }
      return i;
    }
    function Ro(t, e) {
      var n = t.getParent();
      if (!n) {
        var _t176 = Rs();
        return (Ni().append(_t176), _t176.select(), [Ni(), 0]);
      }
      if (Hr(t)) {
        var _r57 = t.splitText(e);
        if (0 === _r57.length) return [n, t.getIndexWithinParent()];
        var _o37 = 0 === e ? 0 : 1;
        return [n, _r57[0].getIndexWithinParent() + _o37];
      }
      if (!ps(t) || 0 === e) return [n, t.getIndexWithinParent()];
      var r = t.getChildAtIndex(e);
      if (r) {
        var _n86 = new _no(
            qr(t.__key, e, "element"),
            qr(t.__key, e, "element"),
            0,
            "",
          ),
          _o38 = t.insertNewAfter(_n86);
        _o38 && _o38.append.apply(_o38, [r].concat(r.getNextSiblings()));
      }
      return [n, t.getIndexWithinParent() + 1];
    }
    function Lo(t) {
      return As(t) || Zi(t) || Hr(t) || t.isParentRequired();
    }
    function Ko(t) {
      var e = Rs();
      var n = null;
      for (var _r58 = 0; _r58 < t.length; _r58++) {
        var _o39 = t[_r58];
        if (Lo(_o39)) {
          if (null === n) {
            ((n = _o39.createParentElementNode()), e.append(n));
            var _s35 = t[_r58 + 1];
            if (As(_o39) && (void 0 === _s35 || !Lo(_s35))) continue;
          }
          n.append(_o39);
        } else (e.append(_o39), (n = null));
      }
      return e;
    }
    function $o(t, e, n, r, o) {
      if (o === void 0) {
        o = "decorators-and-blocks";
      }
      if ("move" === e && "character" === r && !t.isCollapsed()) {
        var _ref29 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e111 = _ref29[0],
          _r59 = _ref29[1];
        return (_r59.set(_e111.key, _e111.offset, _e111.type), !0);
      }
      var s = na(t.focus, n ? "previous" : "next"),
        i = "lineboundary" === r,
        l = "move" === e;
      var c = s,
        a = "decorators-and-blocks" === o;
      if (!da(c)) {
        for (var _t177 of c) {
          a = !1;
          var _e112 = _t177.origin;
          if (
            !xs(_e112) ||
            _e112.isIsolated() ||
            ((c = _t177), !i || !_e112.isInline())
          )
            break;
        }
        if (a)
          for (var _t178 of Jc(s).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (Pc(_t178)) _t178.origin.isInline() || (c = _t178);
            else {
              if (ps(_t178.origin)) continue;
              xs(_t178.origin) && !_t178.origin.isInline() && (c = _t178);
            }
            break;
          }
      }
      if (c === s) return !1;
      if (l && !i && xs(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t179 = So();
        return (_t179.add(c.origin.getKey()), vi(_t179), !0);
      }
      return ((c = fa(c)), l && ra(t.anchor, c), ra(t.focus, c), a || !i);
    }
    var zo = null,
      Bo = null,
      Wo = !1,
      Uo = !1,
      Ho = !1;
    var jo = new Set();
    var Yo = 0;
    var Jo = { characterData: !0, childList: !0, subtree: !0 };
    function Go() {
      return Wo || (null !== zo && zo._readOnly);
    }
    function Vo() {
      Wo && t(13);
    }
    function qo() {
      Yo > 99 && t(14);
    }
    function Xo() {
      return (null === zo && t(195, ts()), zo);
    }
    function Qo() {
      return (null === Bo && t(337, ts()), Bo);
    }
    function Zo() {
      Qo()._dirtyType = 2;
    }
    function ts() {
      var t = 0;
      var e = new Set(),
        n = _js.version;
      if ("undefined" != typeof window)
        for (var _r60 of gl(document)) {
          var _o40 = ri(_r60);
          if (ei(_o40)) t++;
          else if (_o40) {
            var _t180 = String(_o40.constructor.version || "<0.17.1");
            (_t180 === n &&
              (_t180 +=
                " (separately built, likely a bundler configuration issue)"),
              e.add(_t180));
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
    function es() {
      return Bo;
    }
    function ns(t, e, n) {
      var r = e.__type,
        o = Vs(t, r);
      var s = n.get(r);
      void 0 === s && ((s = Array.from(o.transforms)), n.set(r, s));
      var i = s.length;
      for (var _t181 = 0; _t181 < i && (s[_t181](e), e.isAttached()); _t181++);
    }
    function rs(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function os(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var r = e;
      Array.isArray(e) || (r = [e]);
      for (var _t182 of r) n.add(_t182);
    }
    function ss(e, n) {
      var r = e.type,
        o = n.get(r);
      void 0 === o && t(17, r);
      var s = o.klass;
      e.type !== s.getType() && t(18, s.name);
      var i = s.importJSON(e),
        l = e.children;
      if (ps(i) && Array.isArray(l))
        for (var _t183 = 0; _t183 < l.length; _t183++) {
          var _e113 = ss(l[_t183], n);
          i.append(_e113);
        }
      var c = e.$slots;
      if (c) {
        nc(i) || t(379, s.name);
        for (var _t184 in c) {
          Cc(i, _t184, ss(c[_t184], n));
        }
      }
      return i;
    }
    function is(t, e, n) {
      var r = zo,
        o = Wo,
        s = Bo;
      ((zo = e), (Wo = !0), (Bo = t));
      try {
        return n();
      } finally {
        ((zo = r), (Wo = o), (Bo = s));
      }
    }
    function ls(t, e) {
      var n = Ho;
      Ho = !0;
      try {
        !(function (t, e) {
          var n = t._pendingEditorState,
            r = t._rootElement,
            o = t._headless || null === r;
          if (null === n)
            return void (
              !t._updating &&
              t._deferred.length > 0 &&
              us(t, t._deferred)
            );
          var s = t._editorState,
            i = s._selection,
            l = n._selection,
            c = 0 !== t._dirtyType,
            a = zo,
            u = Wo,
            f = Bo,
            d = t._updating,
            h = t._observer;
          var g = null;
          if (
            ((t._pendingEditorState = null),
            (t._editorState = n),
            !o && c && null !== h)
          ) {
            ((Bo = t), (zo = n), (Wo = !1), (t._updating = !0));
            try {
              var _e114 = t._dirtyType,
                _r61 = t._dirtyElements,
                _o41 = t._dirtyLeaves;
              (h.disconnect(), (g = Ce(s, n, t, _e114, _r61, _o41)));
            } catch (e) {
              if ((e instanceof Error && t._onError(e), Uo)) throw e;
              return (
                zs(t, null, r, n),
                st(t),
                (t._dirtyType = 2),
                (Uo = !0),
                ls(t, s),
                void (Uo = !1)
              );
            } finally {
              (h.observe(r, Jo),
                (t._updating = d),
                (zo = a),
                (Wo = u),
                (Bo = f));
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
              for (s in r) o.has(s) || (r === n && (r = Si(t)), delete r[s]);
            })(t, n));
          var x = o ? null : al(Qi(t));
          if (
            t._editable &&
            null !== x &&
            (c || null === l || l.dirty || !l.is(i)) &&
            null !== r &&
            !m.has(xr)
          ) {
            ((Bo = t), (zo = n));
            try {
              if ((null !== h && h.disconnect(), c || null === l || l.dirty)) {
                var _e115 = t._blockCursorElement;
                (null !== _e115 && cl(_e115, t, r), wo(i, l, t, x, m, r));
              }
              !(function (t, e, n) {
                var r = t._blockCursorElement;
                if (
                  eo(n) &&
                  n.isCollapsed() &&
                  "element" === n.anchor.type &&
                  e.contains(Sl(e))
                ) {
                  var _o42 = n.anchor,
                    _s36 = _o42.getNode(),
                    _i23 = _o42.offset;
                  var _l11 = !1,
                    _c1 = null;
                  if (_i23 === _s36.getChildrenSize()) {
                    ll(_s36.getChildAtIndex(_i23 - 1)) && (_l11 = !0);
                  } else {
                    var _e116 = _s36.getChildAtIndex(_i23);
                    if (null !== _e116 && ll(_e116)) {
                      var _n87 = _e116.getPreviousSibling();
                      (null === _n87 || ll(_n87)) &&
                        ((_l11 = !0), (_c1 = t.getElementByKey(_e116.__key)));
                    }
                  }
                  if (_l11) {
                    var _n88 = Pl(
                      _s36,
                      t.getElementByKey(_s36.__key),
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
                                var _t185 = Ca(r);
                                r = e.blockCursor = _t185;
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
                        ? _n88.appendChild(r)
                        : _n88.insertBefore(r, _c1))
                    );
                  }
                }
                null !== r && cl(r, t, e);
              })(t, r, l);
            } finally {
              (null !== h && h.observe(r, Jo), (Bo = f), (zo = a));
            }
          }
          null !== g &&
            (function (t, e, n, r, o) {
              var s = Array.from(t._listeners.mutation),
                i = s.length;
              for (var _t186 = 0; _t186 < i; _t186++) {
                var _s$_t = s[_t186],
                  _i24 = _s$_t[0],
                  _l12 = _s$_t[1];
                for (var _t187 of _l12) {
                  var _s37 = e.get(_t187);
                  void 0 !== _s37 &&
                    _i24(_s37, {
                      dirtyLeaves: r,
                      prevEditorState: o,
                      updateTags: n,
                    });
                }
              }
            })(t, g, m, _, s);
          eo(l) ||
            null === l ||
            (null !== i && i.is(l)) ||
            t.dispatchCommand(Ne, void 0);
          var C = t._pendingDecorators;
          null !== C &&
            ((t._decorators = C),
            (t._pendingDecorators = null),
            cs("decorator", t, !0, C));
          if (
            ((function (t, e, n) {
              var r = Ti(e),
                o = Ti(n);
              r !== o && cs("textcontent", t, !0, o);
            })(t, e || s, n),
            cs("update", t, !0, {
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
            us(t, t._deferred);
          }
          !(function (t) {
            var e = t._updates;
            if (0 === e.length) return void (t._cascadeCount = 0);
            if (
              ((function (t) {
                if (jo.has(t)) return;
                (jo.add(t),
                  setTimeout(function () {
                    (jo["delete"](t), (t._cascadeCount = 0));
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
                _r62 = n[1];
              ds(t, _e117, _r62);
            }
          })(t);
        })(t, e);
      } finally {
        Ho = n;
      }
    }
    function cs(t, e, n) {
      var o = e._updating;
      e._updating = n;
      try {
        var _n89 = e._listeners[t],
          _o43 = Array.from(_n89);
        for (
          var _len4 = arguments.length,
            r = new Array(_len4 > 3 ? _len4 - 3 : 0),
            _key4 = 3;
          _key4 < _len4;
          _key4++
        ) {
          r[_key4 - 3] = arguments[_key4];
        }
        for (var _ref31 of _o43) {
          var _t188 = _ref31[0];
          var _e118 = _ref31[1];
          {
            _e118 && _e118();
            var _o44 = _t188.apply(void 0, r);
            _n89.has(_t188) ? _n89.set(_t188, _o44) : _o44 && _o44();
          }
        }
      } finally {
        e._updating = o;
      }
    }
    function as(t, e, n, r) {
      var o = Oi(t);
      var s;
      if (!Ho)
        for (var _t189 = 0; _t189 < o.length; _t189++)
          o[_t189]._updating || (o[_t189]._cascadeCount = 0);
      for (var _t190 = 4; _t190 >= 0; _t190--) {
        var _loop = function _loop() {
            var l = o[_i25];
            if (_i25 > 0 && l._updating) {
              s = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e119 = c[_t190];
              if (_e119.size > 0) {
                var _t191 = !1;
                if (
                  (hs(l, function () {
                    for (var _o45 of _e119)
                      if (_o45(n, r)) return void (_t191 = !0);
                  }),
                  _t191)
                )
                  return { v: _t191 };
              }
            }
          },
          _ret;
        for (var _i25 = 0; _i25 < o.length; _i25++) {
          _ret = _loop();
          if (_ret === 0) break;
          if (_ret) return _ret.v;
        }
      }
      return (
        s &&
          s.update(function () {
            as(s, e, n, r);
          }),
        !1
      );
    }
    function us(t, e) {
      if (((t._deferred = []), 0 !== e.length)) {
        var _n90 = t._updating;
        t._updating = !0;
        try {
          for (var _t192 = 0; _t192 < e.length; _t192++) e[_t192]();
        } finally {
          t._updating = _n90;
        }
      }
    }
    function fs(e, n) {
      var r = e._updates;
      var o = n || !1;
      for (; 0 !== r.length; ) {
        var _n91 = r.shift();
        if (_n91) {
          var _r63 = _n91[0],
            _s38 = _n91[1],
            _i26 = e._pendingEditorState;
          var _l13 = void 0;
          (void 0 !== _s38 &&
            ((_l13 = _s38.onUpdate),
            _s38.skipTransforms && (o = !0),
            _s38.discrete && (null === _i26 && t(191), (_i26._flushSync = !0)),
            _l13 && e._deferred.push(_l13),
            os(e, _s38.tag)),
            null == _i26 ? ds(e, _r63, _s38) : _r63());
        }
      }
      return o;
    }
    function ds(e, n, r) {
      var o = e._updateTags;
      var s,
        i = !1,
        l = !1;
      (void 0 !== r &&
        ((s = r.onUpdate),
        os(e, r.tag),
        (i = r.skipTransforms || !1),
        (l = r.discrete || !1)),
        s && e._deferred.push(s));
      var c = e._editorState;
      var a = e._pendingEditorState,
        u = !1;
      ((null === a || a._readOnly) &&
        ((a = e._pendingEditorState = Ts(a || c)), (u = !0)),
        (a._flushSync = l));
      var f = zo,
        d = Wo,
        h = Bo,
        g = e._updating;
      ((zo = a), (Wo = !1), (e._updating = !0), (Bo = e));
      var _ = e._headless || null === e.getRootElement();
      Js(null);
      try {
        u &&
          (_
            ? null !== c._selection && (a._selection = c._selection.clone())
            : (a._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  r = al(Qi(t));
                return eo(n) || null == n ? To(n, r, t, e) : n.clone();
              })(e, (r && r.event) || null)));
        var _o46 = e._compositionKey;
        (n(),
          (i = fs(e, i)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              r = t._selection;
            if (eo(r)) {
              var _t193 = r.anchor,
                _e120 = r.focus;
              var _o47;
              if (
                ("text" === _t193.type &&
                  ((_o47 = _t193.getNode()), _o47.selectionTransform(n, r)),
                "text" === _e120.type)
              ) {
                var _t194 = _e120.getNode();
                _o47 !== _t194 && _t194.selectionTransform(n, r);
              }
            }
          })(a, e),
          0 !== e._dirtyType &&
            (i
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    r = t._nodeMap;
                  for (var _t195 of n) {
                    var _e121 = r.get(_t195);
                    Hr(_e121) &&
                      _e121.isAttached() &&
                      _e121.isSimpleText() &&
                      !_e121.isUnmergeable() &&
                      Tt(_e121);
                  }
                })(a, e)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    r = e._dirtyElements,
                    o = t._nodeMap,
                    s = _i(),
                    i = new Map();
                  var l = n,
                    c = l.size,
                    a = r,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t196 of l) {
                        var _r64 = o.get(_t196);
                        (Hr(_r64) &&
                          _r64.isAttached() &&
                          _r64.isSimpleText() &&
                          !_r64.isUnmergeable() &&
                          Tt(_r64),
                          void 0 !== _r64 && rs(_r64, s) && ns(e, _r64, i),
                          n.add(_t196));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        Yo++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t197 of a) {
                      var _n92 = _t197[0],
                        _l14 = _t197[1];
                      if ((r.set(_n92, _l14), !_l14)) continue;
                      var _c10 = o.get(_n92);
                      void 0 !== _c10 && rs(_c10, s) && ns(e, _c10, i);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      Yo++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = r));
                })(a, e),
            fs(e),
            (function (t, e, n, r) {
              var o = t._nodeMap,
                s = e._nodeMap,
                i = [];
              for (var _ref33 of r) {
                var _t198 = _ref33[0];
                {
                  var _e122 = s.get(_t198);
                  void 0 !== _e122 &&
                    (_e122.isAttached() ||
                      (ps(_e122) && V(_e122, _t198, o, s, i, r),
                      o.has(_t198) || r["delete"](_t198),
                      i.push(_t198)));
                }
              }
              for (var _t199 of n) {
                var _e123 = s.get(_t199);
                void 0 === _e123 ||
                  _e123.isAttached() ||
                  (nc(_e123) &&
                    null !== _e123.__slots &&
                    V(_e123, _t199, o, s, i, n),
                  o.has(_t199) || n["delete"](_t199),
                  i.push(_t199));
              }
              for (var _t200 of i) s["delete"](_t200);
              var l = Qo(),
                c = l._compositionKey;
              null === c || s.has(c) || (l._compositionKey = null);
            })(c, a, e._dirtyLeaves, e._dirtyElements)));
        _o46 !== e._compositionKey && (a._flushSync = !0);
        var _s39 = a._selection;
        if (eo(_s39)) {
          e._slotsUsed && po(_s39);
          var _n93 = a._nodeMap,
            _r65 = _s39.anchor.key,
            _o48 = _s39.focus.key;
          (void 0 !== _n93.get(_r65) && void 0 !== _n93.get(_o48)) || t(19);
        } else ro(_s39) && 0 === _s39._nodes.size && (a._selection = null);
      } catch (t) {
        return (
          t instanceof Error && e._onError(t),
          (e._pendingEditorState = c),
          (e._dirtyType = 2),
          e._cloneNotNeeded.clear(),
          (e._dirtyLeaves = new Set()),
          e._dirtyElements.clear(),
          void ls(e)
        );
      } finally {
        ((zo = f), (Wo = d), (Bo = h), (e._updating = g), (Yo = 0));
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
          ? ((a._flushSync = !1), ls(e))
          : u &&
            Xs(function () {
              ls(e);
            })
        : ((a._flushSync = !1),
          u && (o.clear(), (e._deferred = []), (e._pendingEditorState = null)));
    }
    function hs(t, e, n) {
      Bo === t && void 0 === n ? e() : ds(t, e, n);
    }
    function gs(t) {
      if (nl(t)) {
        var _e124 = null;
        for (var _n94 of t.getChildren())
          _e124 = _n94.isInline()
            ? (_e124 || _n94.replace(_n94.createParentElementNode())).append(
                _n94,
              )
            : null;
      }
    }
    var _s49 = (function (_gr2) {
      function _s(t) {
        var _this3;
        ((_this3 = _gr2.call(this, t) || this),
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
      babelHelpers.inheritsLoose(_s, _gr2);
      var _proto10 = _s.prototype;
      _proto10.$config = function $config() {
        return this.config(Symbol["for"]("ElementNode"), {
          $transform: gs,
          extends: _gr5,
        });
      };
      _proto10.afterCloneFrom = function afterCloneFrom(e) {
        (_gr2.prototype.afterCloneFrom.call(this, e),
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
        return 0 === this.getChildrenSize() && 0 === ac(this).length;
      };
      _proto10.isDirty = function isDirty() {
        var t = Qo()._dirtyElements;
        return null !== t && t.has(this.__key);
      };
      _proto10.isLastChild = function isLastChild() {
        var t = this.getLatest(),
          e = this.getParentOrThrow().getLastChild();
        return null !== e && e.is(t);
      };
      _proto10.getAllTextNodes = function getAllTextNodes() {
        var t = [];
        for (var _e125 of ac(this)) {
          var _n95 = uc(this, _e125);
          ps(_n95) && t.push.apply(t, _n95.getAllTextNodes());
        }
        var e = this.getFirstChild();
        for (; null !== e; ) {
          if ((Hr(e) && t.push(e), ps(e))) {
            var _n96 = e.getAllTextNodes();
            t.push.apply(t, _n96);
          }
          e = e.getNextSibling();
        }
        return t;
      };
      _proto10.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; ps(t); ) {
          var _e126 = t.getFirstChild();
          if (null === _e126) break;
          t = _e126;
        }
        return t;
      };
      _proto10.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; ps(t); ) {
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
          var _t201 = e[n - 1];
          return (ps(_t201) && _t201.getLastDescendant()) || _t201 || null;
        }
        var r = e[t];
        return (ps(r) && r.getFirstDescendant()) || r || null;
      };
      _proto10.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : pi(t);
      };
      _proto10.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var e = this.getFirstChild();
        return (null === e && t(45, this.__key), e);
      };
      _proto10.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : pi(t);
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
        var t = yc(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _r66 = 0; _r66 < n; _r66++) {
          var _o49 = e[_r66];
          ((t += _o49.getTextContent()),
            ps(_o49) && _r66 !== n - 1 && !_o49.isInline() && (t += v));
        }
        return t;
      };
      _proto10.getTextContentSize = function getTextContentSize() {
        var t = (function (t) {
          var e = 0;
          for (var _n97 of ac(t)) {
            var _r67 = uc(t, _n97);
            null !== _r67 && (e += _r67.getTextContentSize());
          }
          return e;
        })(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _r68 = 0; _r68 < n; _r68++) {
          var _o50 = e[_r68];
          ((t += _o50.getTextContentSize()),
            ps(_o50) && _r68 !== n - 1 && !_o50.isInline() && (t += 2));
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
        return ai(this.getLatest().__textFormat, t, e);
      };
      _proto10.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto10.select = function select(t, e) {
        Vo();
        var n = No();
        var r = t,
          o = e;
        var s = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t202 = this.getFirstChild();
            if (Hr(_t202) || ps(_t202)) return _t202.select(0, 0);
          } else if (
            !((void 0 !== t && t !== s) || (void 0 !== e && e !== s))
          ) {
            var _t203 = this.getLastChild();
            if (Hr(_t203) || ps(_t203)) return _t203.select();
          }
        (void 0 === r && (r = s), void 0 === o && (o = s));
        var i = this.__key;
        return eo(n)
          ? (n.anchor.set(i, r, "element"),
            n.focus.set(i, o, "element"),
            (n.dirty = !0),
            n)
          : xo(i, r, i, o, "element", "element");
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
        dr(this) && t(324, this.__key, this.__type);
        var o = this.getChildrenSize(),
          s = this.getWritable();
        e + n <= o || t(226, String(e), String(n), String(o));
        for (var _t204 of r);
        var i = s.__key,
          l = [],
          c = [],
          a = this.getChildAtIndex(e + n);
        var u = null,
          f = o - n + r.length;
        if (0 !== e)
          if (e === o) u = this.getLastChild();
          else {
            var _t205 = this.getChildAtIndex(e);
            null !== _t205 && (u = _t205.getPreviousSibling());
          }
        if (n > 0) {
          var _e129 = null === u ? this.getFirstChild() : u.getNextSibling();
          for (var _r69 = 0; _r69 < n; _r69++) {
            null === _e129 && t(100);
            var _n98 = _e129.getNextSibling(),
              _r70 = _e129.__key;
            (fi(_e129.getWritable()), c.push(_r70), (_e129 = _n98));
          }
        }
        var d = u;
        for (var _e130 of r) {
          null !== d && _e130.is(d) && (u = d = d.getPreviousSibling());
          var _n99 = _e130.getWritable();
          (_n99.__parent === i && f--, fi(_n99));
          var _r71 = _e130.__key;
          if (null === d) ((s.__first = _r71), (_n99.__prev = null));
          else {
            var _t206 = d.getWritable();
            ((_t206.__next = _r71), (_n99.__prev = _t206.__key));
          }
          (_e130.__key === i && t(76),
            (_n99.__parent = i),
            l.push(_r71),
            (d = _e130));
        }
        if (e + n === o) {
          if (null !== d) {
            ((d.getWritable().__next = null), (s.__last = d.__key));
          }
        } else if (null !== a) {
          var _t207 = a.getWritable();
          if (null !== d) {
            var _e131 = d.getWritable();
            ((_t207.__prev = d.__key), (_e131.__next = a.__key));
          } else _t207.__prev = null;
        }
        if (((s.__size = f), c.length)) {
          var _t208 = No();
          if (eo(_t208)) {
            var _e132 = new Set(c),
              _n100 = new Set(l),
              _r72 = _t208.anchor,
              _o51 = _t208.focus;
            (ys(_r72, _e132, _n100) && Oo(_r72, _r72.getNode(), this, u, a),
              ys(_o51, _e132, _n100) && Oo(_o51, _o51.getNode(), this, u, a),
              0 !== f || this.canBeEmpty() || nl(this) || this.remove());
          }
        }
        return s;
      };
      _proto10.getDOMSlot = function getDOMSlot(t) {
        return new _B(t);
      };
      _proto10.exportDOM = function exportDOM(t) {
        var _gr2$prototype$export = _gr2.prototype.exportDOM.call(this, t),
          e = _gr2$prototype$export.element;
        if (vl(e)) {
          var _t209 = this.getIndent();
          _t209 > 0 &&
            ((e.style.paddingInlineStart = 40 * _t209 + "px"),
            e.setAttribute("data-lexical-indent", String(_t209)));
          var _n101 = this.getDirection();
          _n101 && (e.dir = _n101);
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
            _gr2.prototype.exportJSON.call(this),
          ),
          e = this.getTextFormat(),
          n = this.getTextStyle();
        return (
          (0 === e && "" === n) ||
            nl(this) ||
            this.getChildren().some(Hr) ||
            (0 !== e && (t.textFormat = e), "" !== n && (t.textStyle = n)),
          t
        );
      };
      _proto10.updateFromJSON = function updateFromJSON(t) {
        return _gr2.prototype.updateFromJSON
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
        var n = Pl(this, t, e);
        var r = n.getFirstChild();
        for (
          var _t210 = this.getFirstChild();
          _t210;
          _t210 = _t210.getNextSibling()
        ) {
          var _o52 = e.getElementByKey(_t210.getKey());
          null !== _o52 &&
            (null == r
              ? (n.insertChild(_o52), (r = _o52))
              : r !== _o52 && n.replaceChild(_o52, r),
            (r = r.nextSibling));
        }
      };
      return _s;
    })(_gr5);
    function ps(t) {
      return t instanceof _s49;
    }
    function ys(t, e, n) {
      var r = t.getNode();
      for (; r; ) {
        var _t211 = r.__key;
        if (e.has(_t211) && !n.has(_t211)) return !0;
        r = r.getParent();
      }
      return !1;
    }
    var _ms = (function (_gr3) {
      function ms(t) {
        var _this4;
        ((_this4 = _gr3.call(this, t) || this),
          (_this4.__slotHost = null),
          (_this4.__slots = null));
        return _this4;
      }
      babelHelpers.inheritsLoose(ms, _gr3);
      var _proto11 = ms.prototype;
      _proto11.afterCloneFrom = function afterCloneFrom(e) {
        (_gr3.prototype.afterCloneFrom.call(this, e),
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
      return ms;
    })(_gr5);
    function xs(t) {
      return t instanceof _ms;
    }
    var _Cs = (function (_s2) {
      function Cs() {
        var _this5;
        ((_this5 = _s2.call(this, "root") || this),
          (_this5.__cachedText = null));
        return _this5;
      }
      babelHelpers.inheritsLoose(Cs, _s2);
      Cs.getType = function getType() {
        return "root";
      };
      Cs.clone = function clone() {
        return new Cs();
      };
      var _proto12 = Cs.prototype;
      _proto12.getTopLevelElementOrThrow =
        function getTopLevelElementOrThrow() {
          t(51);
        };
      _proto12.getTextContent = function getTextContent() {
        var t = this.__cachedText;
        return null === t || (!Go() && 0 !== Qo()._dirtyType)
          ? _s2.prototype.getTextContent.call(this)
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
        for (var _e133 of r) ps(_e133) || xs(_e133) || t(282);
        return _s2.prototype.splice.call(this, e, n, r);
      };
      Cs.importJSON = function importJSON(t) {
        return Ni().updateFromJSON(t);
      };
      _proto12.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return Cs;
    })(_s49);
    function Ss(t) {
      return t instanceof _Cs;
    }
    function Ts(t) {
      return new _ks(J(t._nodeMap), null, t._slotsUsed);
    }
    function Ns() {
      return new _ks(new Map([["root", new _Cs()]]), null, !1);
    }
    function vs(e) {
      var n = e.exportJSON(),
        r = e.constructor;
      if ((n.type !== r.getType() && t(130, r.name), ps(e))) {
        var _o53 = n.children;
        Array.isArray(_o53) || t(59, r.name);
        var _s40 = e.getChildren();
        for (var _t212 = 0; _t212 < _s40.length; _t212++) {
          var _e134 = vs(_s40[_t212]);
          _o53.push(_e134);
        }
      }
      var o = ac(e);
      if (o.length > 0) {
        var _s41 = {};
        for (var _n102 of o) {
          var _o54 = uc(e, _n102);
          (null === _o54 && t(366, r.name, _n102), (_s41[_n102] = vs(_o54)));
        }
        n.$slots = _s41;
      }
      return n;
    }
    var _ks = (function () {
      function ks(t, e, n) {
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
      var _proto13 = ks.prototype;
      _proto13.isEmpty = function isEmpty() {
        return 1 === this._nodeMap.size && null === this._selection;
      };
      _proto13.read = function read(t, e) {
        return is((e && e.editor) || null, this, t);
      };
      _proto13.clone = function clone(t) {
        var e = new ks(
          this._nodeMap,
          void 0 === t ? this._selection : t,
          this._slotsUsed,
        );
        return ((e._readOnly = !0), e);
      };
      _proto13.toJSON = function toJSON() {
        return is(null, this, function () {
          return { root: vs(Ni()) };
        });
      };
      return ks;
    })();
    var _Es = (function (_s3) {
      function Es() {
        return _s3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Es, _s3);
      Es.getType = function getType() {
        return "artificial";
      };
      var _proto14 = Es.prototype;
      _proto14.createDOM = function createDOM(t) {
        return document.createElement("div");
      };
      return Es;
    })(_s49);
    var _Os = (function (_gr4) {
      function Os(t) {
        return _gr4.call(this, t) || this;
      }
      babelHelpers.inheritsLoose(Os, _gr4);
      Os.getType = function getType() {
        return "linebreak";
      };
      Os.clone = function clone(t) {
        return new Os(t.__key);
      };
      var _proto15 = Os.prototype;
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
      Os.importDOM = function importDOM() {
        return {
          br: function br(t) {
            return ws(t) || Ds(t) ? null : { conversion: bs, priority: 0 };
          },
        };
      };
      Os.importJSON = function importJSON(t) {
        return Ms().updateFromJSON(t);
      };
      return Os;
    })(_gr5);
    function bs(t) {
      return { node: Ms() };
    }
    function Ms() {
      return ol(new _Os());
    }
    function As(t) {
      return t instanceof _Os;
    }
    function ws(t) {
      var e = t.parentElement;
      if (null !== e && Al(e)) {
        var _n103 = e.firstChild;
        if (_n103 === t || (_n103.nextSibling === t && Is(_n103))) {
          var _n104 = e.lastChild;
          if (_n104 === t || (_n104.previousSibling === t && Is(_n104)))
            return !0;
        }
      }
      return !1;
    }
    function Ds(t) {
      var e = t.parentElement;
      if (null !== e && Al(e)) {
        var _n105 = e.firstChild;
        if (_n105 === t || (_n105.nextSibling === t && Is(_n105))) return !1;
        var _r73 = e.lastChild;
        if (_r73 === t || (_r73.previousSibling === t && Is(_r73))) return !0;
      }
      return !1;
    }
    function Is(t) {
      return ii(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    var _Ps = (function (_s4) {
      function Ps() {
        return _s4.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Ps, _s4);
      Ps.getType = function getType() {
        return "paragraph";
      };
      Ps.clone = function clone(t) {
        return new Ps(t.__key);
      };
      var _proto16 = Ps.prototype;
      _proto16.createDOM = function createDOM(t) {
        var e = document.createElement("p"),
          n = $i(t.theme, "paragraph");
        if (void 0 !== n) {
          var _e$classList2;
          (_e$classList2 = e.classList).add.apply(_e$classList2, n);
        }
        return e;
      };
      _proto16.updateDOM = function updateDOM(t, e, n) {
        return !1;
      };
      Ps.importDOM = function importDOM() {
        return {
          p: function p(t) {
            return { conversion: Fs, priority: 0 };
          },
        };
      };
      _proto16.exportDOM = function exportDOM(t) {
        var _s4$prototype$exportD = _s4.prototype.exportDOM.call(this, t),
          e = _s4$prototype$exportD.element;
        if (vl(e)) {
          this.isEmpty() && e.append(document.createElement("br"));
          var _t213 = this.getFormatType();
          _t213 && (e.style.textAlign = _t213);
        }
        return { element: e };
      };
      Ps.importJSON = function importJSON(t) {
        return Rs().updateFromJSON(t);
      };
      _proto16.exportJSON = function exportJSON() {
        var t = _s4.prototype.exportJSON.call(this);
        if (void 0 === t.textFormat || void 0 === t.textStyle) {
          var _e135 = this.getChildren().find(Hr);
          _e135
            ? ((t.textFormat = _e135.getFormat()),
              (t.textStyle = _e135.getStyle()))
            : ((t.textFormat = this.getTextFormat()),
              (t.textStyle = this.getTextStyle()));
        }
        return t;
      };
      _proto16.insertNewAfter = function insertNewAfter(t, e) {
        var n = Rs();
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
          (Hr(t[0]) && "" === t[0].getTextContent().trim())
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return Ps;
    })(_s49);
    function Fs(t) {
      var e = Rs();
      if ((Ul(e, t), Bl(t, e), "" === e.getFormatType())) {
        var _n106 = t.getAttribute("align");
        _n106 && _n106 && _n106 in D && e.setFormat(_n106);
      }
      return (Wl(e, t), { node: e });
    }
    function Rs() {
      return ol(new _Ps());
    }
    function Ls(t) {
      return t instanceof _Ps;
    }
    function Ks(t) {
      console.warn(t);
    }
    var $s = 0;
    function zs(t, e, n, r, o) {
      var s = t._keyToDOMMap;
      (s.clear(),
        (t._editorState = Ns()),
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
          ((n.textContent = ""), s.set("root", n), mi(n, t, "root")));
    }
    function Bs(t) {
      var e = new Set(),
        n = new Set();
      for (var _ref35 of Xl(t)) {
        var _r74 = _ref35.klass;
        var _o55 = _ref35.ownNodeConfig;
        {
          var _t214 = _r74.transform;
          if (!n.has(_t214)) {
            n.add(_t214);
            var _o56 = _r74.transform();
            _o56 && e.add(_o56);
          }
          if (_o55) {
            var _t215 = _o55.$transform;
            _t215 && e.add(_t215);
          }
        }
      }
      return e;
    }
    var Ws = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, r) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = qs(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, r, o) {
        return ps(t) && t.extractWithChild(e, n, r);
      },
      $getDOMSlot: function $getDOMSlot(t, e, n) {
        return t.getDOMSlot(e);
      },
      $getSlotTargetElement: function $getSlotTargetElement(t, e, n, r) {
        return null;
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return ps(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, r) {
        return t.updateDOM(e, n, r._config);
      },
    };
    function Us(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function Hs(t, e, n) {
      return (t.set(e, n), Us.bind(null, t, e));
    }
    var _js = (function () {
      function js(t, e, n, r, o, s, i, l, c) {
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
          (this._key = bi()),
          (this._onError = o),
          (this._onWarn = s),
          (this._htmlConversions = i),
          (this._editable = l),
          (this._headless = null !== e && e._headless),
          (this._window = null),
          (this._blockCursorElement = null),
          (this._slotsUsed = !1));
      }
      var _proto17 = js.prototype;
      _proto17.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto17.registerUpdateListener = function registerUpdateListener(t) {
        return Hs(this._listeners.update, t);
      };
      _proto17.registerEditableListener = function registerEditableListener(t) {
        return Hs(this._listeners.editable, t);
      };
      _proto17.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return Hs(this._listeners.decorator, t);
      };
      _proto17.registerTextContentListener =
        function registerTextContentListener(t) {
          return Hs(this._listeners.textcontent, t);
        };
      _proto17.registerRootListener = function registerRootListener(t) {
        var _this14 = this;
        var e = this._listeners.root;
        return Sa(Hs(e, t, t(this._rootElement, null) || void 0), function () {
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
          r = $l(n).get(e.getType());
        if (!r) return;
        var o = new Map();
        for (var _t216 of r.keys()) o.set(_t216, "created");
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
          var _t217 = this.registerNodeTransformToKlass(o, e);
          r.push(_t217);
        }
        return (
          (function (t, e) {
            var n = $l(t.getEditorState()),
              r = [];
            for (var _t218 of e) {
              var _e136 = n.get(_t218);
              _e136 && r.push(_e136);
            }
            if (0 === r.length) return;
            t.update(
              function () {
                for (var _t219 of r)
                  for (var _e137 of _t219.keys()) {
                    var _t220 = pi(_e137);
                    _t220 && _t220.markDirty();
                  }
              },
              null === t._pendingEditorState ? { tag: pr } : void 0,
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
        return Hi(this, t, e);
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
          var _n107 = $i(this._config.theme, "root"),
            _r75 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            zs(this, e, t, _r75, { preserveUpdateQueue: !0 }),
            null !== e &&
              (this._config.disableEvents || ar(e),
              null != _n107 &&
                (_e$classList3 = e.classList).remove.apply(
                  _e$classList3,
                  _n107,
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e138 = Xi(t),
              _r76 = t.style;
            ((_r76.userSelect = "text"),
              (_r76.whiteSpace = "pre-wrap"),
              (_r76.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e138),
              (this._dirtyType = 2),
              st(this),
              this._updateTags.add(pr),
              ls(this),
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
                  var o = rr(t);
                  o.push(wn.register(n));
                  var _loop2 = function _loop2() {
                    var _Tn$_n = Tn[_n108],
                      r = _Tn$_n[0],
                      s = _Tn$_n[1],
                      i =
                        "function" == typeof s
                          ? function (t) {
                              lr(t) ||
                                (ir(t),
                                (e.isEditable() || "click" === r) && s(t, e));
                            }
                          : function (t) {
                              if (lr(t)) return;
                              ir(t);
                              var n = e.isEditable();
                              switch (r) {
                                case "cut":
                                  return n && Hi(e, un, t);
                                case "copy":
                                  return Hi(e, an, t);
                                case "paste":
                                  return n && Hi(e, Pe, t);
                                case "dragstart":
                                  return n && Hi(e, sn, t);
                                case "dragover":
                                  return n && Hi(e, ln, t);
                                case "dragend":
                                  return n && Hi(e, cn, t);
                                case "focus":
                                  return n && Hi(e, pn, t);
                                case "blur":
                                  return n && Hi(e, yn, t);
                                case "drop":
                                  return n && Hi(e, rn, t);
                              }
                            };
                    o.push(Cn(t, r, i));
                  };
                  for (var _n108 = 0; _n108 < Tn.length; _n108++) {
                    _loop2();
                  }
                })(t, this),
              null != _n107 &&
                (_t$classList = t.classList).add.apply(_t$classList, _n107));
          } else ((this._window = null), this._updateTags.add(pr), ls(this));
          cs("root", this, !1, t, e);
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
          ((r = Ts(e)),
          (r._selection = e._selection ? e._selection.clone() : null)),
          ot(this));
        var o = this._pendingEditorState,
          s = void 0 !== n ? n.tag : null;
        (null === o ||
          o.isEmpty() ||
          (null != s && this._updateTags.add(s), ls(this)),
          (this._pendingEditorState = r),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          (this._slotsUsed = this._slotsUsed || e._slotsUsed),
          hs(
            this,
            function () {
              if ((s && _this15._updateTags.add(s), e._parsed))
                for (var _ref37 of r._nodeMap.entries()) {
                  var _t221 = _ref37[0];
                  var _e139 = _ref37[1];
                  ps(_e139)
                    ? _this15._dirtyElements.set(_t221, !0)
                    : _this15._dirtyLeaves.add(_t221);
                }
            },
            { discrete: !this._updating || void 0 },
          ));
      };
      _proto17.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var r = Ns(),
            o = zo,
            s = Wo,
            i = Bo,
            l = e._dirtyElements,
            c = e._dirtyLeaves,
            a = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Set()),
            (e._dirtyType = 0),
            (zo = r),
            (Wo = !1),
            (Bo = e),
            Js(null));
          try {
            var _o57 = e._nodes;
            (ss(t.root, _o57), n && n(), (r._readOnly = !0), (r._parsed = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = c),
              (e._cloneNotNeeded = a),
              (e._dirtyType = u),
              (zo = o),
              (Wo = s),
              (Bo = i));
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
        var _ref38 = 1 === t.length ? ["force-commit", t[0]] : t,
          e = _ref38[0],
          n = _ref38[1];
        "force-commit" === e && ls(this);
        return (
          "pending" === e
            ? this._pendingEditorState || this._editorState
            : this.getEditorState()
        ).read(n, { editor: this });
      };
      _proto17.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : ds(t, e, n);
        })(this, t, e);
      };
      _proto17.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          hs(this, function () {
            var r = No(),
              o = Ni();
            (null !== r
              ? r.dirty || vi(r.clone())
              : 0 !== o.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? o.selectStart()
                  : o.selectEnd()),
              Gi("focus"),
              Vi(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto17.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = al(this._window);
        null !== e && e.removeAllRanges();
      };
      _proto17.isEditable = function isEditable() {
        return this._editable;
      };
      _proto17.setEditable = function setEditable(t) {
        this._editable !== t &&
          ((this._editable = t),
          cs("editable", this, !0, t),
          this._slotsUsed &&
            this.update(function () {
              return Zo();
            }));
      };
      _proto17.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON() };
      };
      return js;
    })();
    _js.version = H;
    var Ys = null;
    function Js(t) {
      Ys = t;
    }
    var Gs = 1;
    function Vs(e, n) {
      var r = qs(e, n);
      return (void 0 === r && t(30, n), r);
    }
    function qs(t, e) {
      return t._nodes.get(e);
    }
    var Xs =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function Qs(t, e) {
      var n =
        void 0 !== e
          ? e
          : (function () {
              var e = t.getRootNode();
              return li(e) || fl(e) ? Tl(e) : null;
            })();
      if (!vl(n)) return !1;
      if (n.hasAttribute("data-lexical-slot")) return !1;
      var r = Ci(n),
        o = n.nodeName;
      return (
        _r(r) &&
        ("INPUT" === o ||
          "TEXTAREA" === o ||
          ("true" === n.contentEditable && null == ri(n)))
      );
    }
    var Zs = Qs;
    function ti(t, e, n) {
      var r = t.getRootElement();
      if (!r) return !1;
      try {
        if (!e || !r.contains(e) || !r.contains(n)) return !1;
      } catch (t) {
        return !1;
      }
      return (
        ni(e) === t &&
        t.read("latest", function () {
          return !Qs(e);
        })
      );
    }
    function ei(t) {
      return t instanceof _js;
    }
    function ni(t) {
      var e = t;
      for (; null != e; ) {
        var _t222 = ri(e);
        if (ei(_t222)) return _t222;
        e = Yi(e);
      }
      return null;
    }
    function ri(t) {
      return t ? t.__lexicalEditor : null;
    }
    function oi(t) {
      return Gr(t) || t.isToken();
    }
    function si(t) {
      return oi(t) || t.isSegmented();
    }
    function ii(t) {
      return kl(t) && 3 === t.nodeType;
    }
    function li(t) {
      return kl(t) && 9 === t.nodeType;
    }
    function ci(t) {
      var e = t;
      for (; null != e; ) {
        if (ii(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function ai(t, e, n) {
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
    function ui(t, e) {
      var n = (function () {
        var t = Ys;
        return ((Ys = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (Vo(), qo());
      var r = Qo(),
        o = Xo(),
        s = "" + Gs++;
      (o._nodeMap.set(s, t),
        ps(t) ? r._dirtyElements.set(s, !0) : r._dirtyLeaves.add(s),
        r._cloneNotNeeded.add(s),
        0 === r._dirtyType && (r._dirtyType = 1),
        (t.__key = s));
    }
    function fi(e) {
      null !== oc(e) && t(380, e.__key, String(oc(e)));
      var n = e.getParent();
      if (null !== n) {
        var _t223 = e.getWritable(),
          _r77 = n.getWritable(),
          _o58 = e.getPreviousSibling(),
          _s42 = e.getNextSibling(),
          _i27 = null !== _s42 ? _s42.__key : null,
          _l15 = null !== _o58 ? _o58.__key : null,
          _c11 = null !== _o58 ? _o58.getWritable() : null,
          _a11 = null !== _s42 ? _s42.getWritable() : null;
        (null === _o58 && (_r77.__first = _i27),
          null === _s42 && (_r77.__last = _l15),
          null !== _c11 && (_c11.__next = _i27),
          null !== _a11 && (_a11.__prev = _l15),
          (_t223.__prev = null),
          (_t223.__next = null),
          (_t223.__parent = null),
          _r77.__size--);
      }
    }
    var di = fi;
    function hi(e) {
      (qo(), dr(e) && t(323, e.__key, e.__type));
      var n = e.getLatest(),
        r = null !== n.__parent ? n.__parent : rc(n) ? n.__slotHost : null,
        o = Xo(),
        s = Qo(),
        i = o._nodeMap,
        l = s._dirtyElements;
      null !== r &&
        (function (t, e, n) {
          var r = t;
          for (; null !== r; ) {
            if (n.has(r)) return;
            var _t224 = e.get(r);
            if (void 0 === _t224) break;
            (n.set(r, !1),
              (r =
                null !== _t224.__parent
                  ? _t224.__parent
                  : rc(_t224)
                    ? _t224.__slotHost
                    : null));
          }
        })(r, i, l);
      var c = n.__key;
      (0 === s._dirtyType && (s._dirtyType = 1),
        ps(e) ? l.set(c, !0) : s._dirtyLeaves.add(c));
    }
    function gi(t) {
      Vo();
      var e = Qo(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t225 = pi(n);
          null !== _t225 && _t225.getWritable();
        }
        if (null !== t) {
          var _e140 = pi(t);
          null !== _e140 && _e140.getWritable();
        }
      }
    }
    function _i() {
      if (Go()) return null;
      return Qo()._compositionKey;
    }
    function pi(t, e) {
      var n = (e || Xo())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function yi(t, e) {
      var n = xi(t, Qo());
      return void 0 !== n ? pi(n, e) : null;
    }
    function mi(t, e, n) {
      t["__lexicalKey_" + e._key] = n;
    }
    function xi(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function Ci(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t226 = yi(n, e);
        if (null !== _t226) return _t226;
        n = Yi(n);
      }
      return null;
    }
    function Si(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function Ti(t) {
      return t.read(function () {
        return Ni().getTextContent();
      });
    }
    function Ni() {
      return Xo()._nodeMap.get("root");
    }
    function vi(t) {
      Vo();
      var e = Xo();
      (null !== t &&
        ((t.dirty = !0),
        t.setCachedNodes(null),
        eo(t) && Qo()._slotsUsed && po(t)),
        (e._selection = t));
    }
    function ki(t) {
      var e = (function (t, e) {
        var n = t;
        for (; null != n; ) {
          var _t227 = xi(n, e);
          if (void 0 !== _t227) return _t227;
          n = Yi(n);
        }
        return null;
      })(t, Qo());
      return null === e ? null : pi(e);
    }
    function Ei(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function Oi(t) {
      var e = [];
      for (var _n109 = t; null !== _n109; _n109 = _n109._parentEditor)
        e.push(_n109);
      return e;
    }
    function bi() {
      return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substring(0, 5);
    }
    function Mi(t) {
      return ii(t) ? t.nodeValue : null;
    }
    function Ai(t, e, n) {
      var r = al(Qi(e));
      if (null === r) return;
      var o = yl(r, e._rootElement),
        s = o.anchorNode;
      var i = o.anchorOffset,
        l = o.focusOffset;
      if (null !== s) {
        var _e141 = Mi(s);
        var _r78 = Ci(s);
        if (null !== _e141 && Hr(_r78)) {
          if ((_e141 === N || _e141 === k) && n) {
            var _t228 = n.length;
            ((_e141 = n), (i = _t228), (l = _t228));
          }
          null !== _e141 && wi(_r78, _e141, i, l, t);
        }
      }
    }
    function wi(t, e, n, r, o) {
      var s = t;
      if (s.isAttached() && (o || !s.isDirty())) {
        var _i28 = s.isComposing();
        var _c12 = e;
        if (
          (_i28 || o) &&
          (e.endsWith(N) && (_c12 = e.slice(0, -N.length)), o)
        ) {
          var _t229 = k;
          var _e142;
          for (; -1 !== (_e142 = _c12.indexOf(_t229)); )
            ((_c12 = _c12.slice(0, _e142) + _c12.slice(_e142 + _t229.length)),
              null !== n &&
                n > _e142 &&
                (n = Math.max(_e142, n - _t229.length)),
              null !== r &&
                r > _e142 &&
                (r = Math.max(_e142, r - _t229.length)));
        }
        var _u11 = s.getTextContent();
        if (o || _c12 !== _u11) {
          var _e143 = No();
          if ("" === _c12) {
            if ((gi(null), a || l || d)) s.remove();
            else {
              var _t230 = Qo();
              (Di(s, "", _e143),
                setTimeout(function () {
                  _t230.update(function () {
                    s.isAttached() && "" === s.getTextContent() && s.remove();
                  });
                }, 20));
            }
            return;
          }
          var _o59 = s.getParent(),
            _u12 = vo(),
            _f1 = s.getTextContentSize(),
            _h7 = _i(),
            _g7 = s.getKey();
          if (
            s.isToken() ||
            (null !== _h7 && _g7 === _h7 && !_i28) ||
            (eo(_u12) &&
              ((null !== _o59 &&
                !_o59.canInsertTextBefore() &&
                0 === _u12.anchor.offset) ||
                (_u12.anchor.key === t.__key &&
                  0 === _u12.anchor.offset &&
                  !s.canInsertTextBefore() &&
                  !_i28) ||
                (_u12.focus.key === t.__key &&
                  _u12.focus.offset === _f1 &&
                  !s.canInsertTextAfter() &&
                  !_i28)))
          )
            return void s.markDirty();
          if (!eo(_e143) || null === n || null === r)
            return void Di(s, _c12, _e143);
          if ((_e143.setTextNodeRange(s, n, s, r), s.isSegmented())) {
            var _t231 = Ur(s.getTextContent());
            (s.replace(_t231), (s = _t231));
          }
          Di(s, _c12, _e143);
        }
      }
    }
    function Di(t, e, n) {
      if ((t.setTextContent(e), eo(n))) {
        var _e144 = t.getKey();
        var _r79 = !1;
        for (var _o60 of ["anchor", "focus"]) {
          var _s43 = n[_o60];
          "text" === _s43.type &&
            _s43.key === _e144 &&
            ((_s43.offset = zc(t, _s43.offset, "clamp")), (_r79 = !0));
        }
        _r79 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
      }
    }
    function Ii(t, e, n) {
      var r = e[n] || !1;
      return "any" === r || r === t[n];
    }
    function Pi(t, e) {
      return (
        Ii(t, e, "altKey") &&
        Ii(t, e, "ctrlKey") &&
        Ii(t, e, "shiftKey") &&
        Ii(t, e, "metaKey")
      );
    }
    function Fi(t, e, n) {
      if (!Pi(t, n)) return !1;
      if (t.key.toLowerCase() === e.toLowerCase()) return !0;
      if (e.length > 1) return !1;
      if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
      if (t.code.startsWith("Digit") && /^\d$/.test(e))
        return t.code === "Digit" + e;
      var r = "Key" + e.toUpperCase();
      return t.code === r;
    }
    var Ri = { ctrlKey: !o, metaKey: o },
      Li = { altKey: o, ctrlKey: !o };
    function Ki(t) {
      return "Backspace" === t.key;
    }
    function $i(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        r = n[e];
      if (void 0 !== r) return r;
      var o = t[e];
      if ("string" == typeof o) {
        var _t232 = Ca(o);
        return ((n[e] = _t232), _t232);
      }
      return o;
    }
    function zi(e, n, r, o, s) {
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
    function Bi(t, e, n) {
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
    function Wi(t, e) {
      var n = t.offset;
      if ("element" === t.type) {
        return Bi(t.getNode(), e, n);
      }
      {
        var _r80 = t.getNode();
        if ((e && 0 === n) || (!e && n === _r80.getTextContentSize())) {
          var _t233 = e ? _r80.getPreviousSibling() : _r80.getNextSibling();
          return null === _t233
            ? Bi(
                _r80.getParentOrThrow(),
                e,
                _r80.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t233;
        }
      }
      return null;
    }
    function Ui(t) {
      var e = Qi(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function Hi(t, e, n) {
      return as(t, e, n, t);
    }
    function ji(e, n) {
      var r = e._keyToDOMMap.get(n);
      return (void 0 === r && t(75, n), r);
    }
    function Yi(t) {
      var e = t.assignedSlot || t.parentElement;
      if (null !== e) return e;
      var n = t.parentNode;
      return fl(n) ? n.host : null;
    }
    function Ji(t) {
      return li(t) ? t : vl(t) ? t.ownerDocument : null;
    }
    function Gi(t) {
      Vo();
      Qo()._updateTags.add(t);
    }
    function Vi(t) {
      Vo();
      Qo()._deferred.push(t);
    }
    function qi(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function Xi(t) {
      var e = Ji(t);
      return e ? e.defaultView : null;
    }
    function Qi(e) {
      var n = e._window;
      return (null === n && t(78), n);
    }
    function Zi(t) {
      return (ps(t) && t.isInline()) || (xs(t) && t.isInline());
    }
    function tl(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== oc(e) && ps(e)) return e;
        var _t234 = e.getParentOrThrow();
        if (nl(_t234)) return _t234;
        e = _t234;
      }
      return e;
    }
    function el(t) {
      return ps(t) && t.isShadowRoot();
    }
    function nl(t) {
      return Ss(t) || el(t);
    }
    function rl(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t);
      return (
        ui(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function ol(e) {
      var n = Qo(),
        r = e.getType(),
        o = qs(n, r);
      void 0 === o && t(200, e.constructor.name, r);
      var s = o.replace,
        i = o.replaceWithKlass;
      if (null !== s) {
        var _n110 = s(e),
          _o61 = _n110.constructor;
        return (
          null !== i
            ? _n110 instanceof i ||
              t(
                201,
                i.name,
                i.getType(),
                _o61.name,
                _o61.getType(),
                e.constructor.name,
                r,
              )
            : (_n110 instanceof e.constructor && _o61 !== e.constructor) ||
              t(202, _o61.name, _o61.getType(), e.constructor.name, r),
          _n110.__key === e.__key &&
            t(203, e.constructor.name, r, _o61.name, _o61.getType()),
          _n110
        );
      }
      return e;
    }
    function sl(e, n) {
      !Ss(e.getParent()) || ps(n) || xs(n) || t(99);
    }
    function il(e) {
      var n = pi(e);
      return (null === n && t(63, e), n);
    }
    function ll(t) {
      if (!t || t.isInline()) return !1;
      if (xs(t)) return !0;
      if (ps(t)) {
        if (t.isShadowRoot()) {
          var _e145 = t.getParent();
          return !(ps(_e145) && _e145.isShadowRoot());
        }
        return !t.canBeEmpty();
      }
      return !1;
    }
    function cl(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var r = t.parentElement;
      null !== r && r.removeChild(t);
    }
    function al(t) {
      return n ? (t || window).getSelection() : null;
    }
    function ul(t) {
      var e = Xi(t);
      return e ? e.getSelection() : null;
    }
    function fl(t) {
      return El(t) && "host" in t;
    }
    var dl = [];
    function hl(t) {
      var e = t.getRootNode();
      if (e === t || !fl(e)) return dl;
      var n = [e];
      var r = e.host;
      for (;;) {
        var _t235 = r.getRootNode();
        if (_t235 === r || !fl(_t235)) break;
        (n.push(_t235), (r = _t235.host));
      }
      return n;
    }
    function* gl(t) {
      var e = [t];
      var n;
      for (; (n = e.pop()); ) {
        yield* n.querySelectorAll('[data-lexical-editor="true"]');
        var _t236 = (li(n) ? n : n.ownerDocument).createTreeWalker(
          n,
          NodeFilter.SHOW_ELEMENT,
        );
        var _r81 = void 0;
        for (; (_r81 = _t236.nextNode()); )
          _r81.shadowRoot && e.push(_r81.shadowRoot);
      }
    }
    function _l(t, e) {
      if (null === e || "function" != typeof t.getComposedRanges) return null;
      var n = hl(e);
      if (0 === n.length) return null;
      var r = t.getComposedRanges;
      try {
        var _e146 = r.call(t, { shadowRoots: n })[0];
        if (void 0 !== _e146) return _e146;
      } catch (t) {}
      try {
        var _e147 = r.apply(t, n)[0];
        if (void 0 !== _e147) return _e147;
      } catch (t) {}
      return null;
    }
    function pl(t, e) {
      var n = _l(t, e);
      if (null !== n) {
        var _t237 = ml(n);
        if (null !== _t237) return _t237;
      }
      return t.rangeCount > 0 ? t.getRangeAt(0) : null;
    }
    function yl(t, e) {
      var n = _l(t, e);
      return null === n ? t : xl(n, Cl(t));
    }
    function ml(t) {
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
    function xl(t, e) {
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
    function Cl(t) {
      return t.direction;
    }
    function Sl(t) {
      var e = t.getRootNode();
      return li(e) || fl(e) ? e.activeElement : null;
    }
    function Tl(t) {
      var e = t.activeElement;
      for (; null !== e && null !== e.shadowRoot; ) {
        var _t238 = e.shadowRoot.activeElement;
        if (null === _t238) break;
        e = _t238;
      }
      return e;
    }
    function Nl(t) {
      var e = t.target;
      if (
        null !== e &&
        vl(e) &&
        null !== e.shadowRoot &&
        "function" == typeof t.composedPath
      ) {
        var _e148 = t.composedPath();
        if (_e148.length > 0) return _e148[0];
      }
      return e;
    }
    function vl(t) {
      return kl(t) && 1 === t.nodeType;
    }
    function kl(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function El(t) {
      return kl(t) && 11 === t.nodeType;
    }
    var Ol =
      /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
    function bl(t) {
      return (
        !(!vl(t) || !t.style.display.startsWith("inline")) ||
        Ol.test(t.nodeName)
      );
    }
    var Ml =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function Al(t) {
      return (
        (!vl(t) || !t.style.display.startsWith("inline")) && Ml.test(t.nodeName)
      );
    }
    function wl(t) {
      if (xs(t) && !t.isInline()) return !0;
      if (!ps(t) || nl(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || As(e) || Hr(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function Dl() {
      return Qo();
    }
    function Il(t) {
      if (t === void 0) {
        t = Dl();
      }
      return t._config.dom || Ws;
    }
    function Pl(e, n, r) {
      if (r === void 0) {
        r = Dl();
      }
      var o = Il(r).$getDOMSlot(e, n, r);
      return (ps(e) && (Fl(o) || t(344, e.getKey(), e.getType())), o);
    }
    function Fl(t) {
      return t instanceof _B;
    }
    function Rl(t, e, n) {
      if (n === void 0) {
        n = Dl();
      }
      return ci(Pl(t, e, n).element);
    }
    var Ll = new WeakMap(),
      Kl = new Map();
    function $l(e) {
      if (!e._readOnly && e.isEmpty()) return Kl;
      e._readOnly || t(192);
      var n = Ll.get(e);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref40 of t._nodeMap) {
              var _n111 = _ref40[0];
              var _r82 = _ref40[1];
              {
                var _t239 = _r82.__type;
                var _o62 = e.get(_t239);
                (_o62 || ((_o62 = new Map()), e.set(_t239, _o62)),
                  _o62.set(_n111, _r82));
              }
            }
            return e;
          })(e)),
          Ll.set(e, n)),
        n
      );
    }
    function zl(t) {
      var e = t.constructor.clone(t);
      return (e.afterCloneFrom(t), e);
    }
    function Bl(t, e) {
      var n = t.getAttribute("data-lexical-indent");
      if (null !== n) {
        var _t240 = parseInt(n, 10);
        if (Number.isFinite(_t240) && _t240 >= 0)
          return void e.setIndent(_t240);
      }
      var r = parseInt(t.style.paddingInlineStart, 10) || 0,
        o = Math.round(r / 40);
      e.setIndent(o);
    }
    function Wl(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function Ul(t, e) {
      var n = e.style.textAlign;
      return n && n in D ? t.setFormat(n) : t;
    }
    function Hl(t, e) {
      ((t.__lexicalUnmanaged = !0),
        e &&
          void 0 !== e.captureSelection &&
          (t.__lexicalCapturedSelection = e.captureSelection));
    }
    function jl(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function Yl(t, e) {
      if (e === void 0) {
        e = Dl();
      }
      var n = e.isEditable();
      ((t.contentEditable = n ? "true" : "false"),
        n ? (t.__lexicalEditor = e) : delete t.__lexicalEditor);
    }
    function Jl(t, e) {
      var n = t;
      for (; null != n; ) {
        if (!0 === n.__lexicalCapturedSelection) return !0;
        if (vl(n) && n.hasAttribute("data-lexical-slot")) return !1;
        if (void 0 !== xi(n, e)) return !1;
        n = Yi(n);
      }
      return !1;
    }
    function Gl(t, e) {
      return (
        (function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        })(t, e) && t[e] !== _gr5[e]
      );
    }
    var Vl = new WeakMap();
    function ql(e) {
      var n = Vl.get(e);
      if (n) return n;
      var r =
          null != e.prototype && R in e.prototype ? e.prototype[R]() : void 0,
        o = (function (e) {
          if (!(e === _gr5 || e.prototype instanceof _gr5)) {
            var _n112 = "<unknown>",
              _r83 = "<unknown>";
            try {
              _n112 = e.getType();
            } catch (t) {}
            try {
              _js.version && (_r83 = JSON.parse(_js.version));
            } catch (t) {}
            t(290, e.name, _n112, _r83);
          }
          return e === _ms || e === _s49 || e === _gr5;
        })(e),
        s = !o && Gl(e, "getType") ? e.getType() : void 0;
      var i,
        l = s;
      if (r)
        if (s) i = r[s];
        else {
          for (var _ref42 of Object.entries(r)) {
            var _t241 = _ref42[0];
            var _e149 = _ref42[1];
            ((l = _t241), (i = _e149));
          }
          if (!i)
            for (var _t242 of Object.getOwnPropertySymbols(r)) {
              var _e150 = r[_t242];
              if (_e150) {
                i = _e150;
                break;
              }
            }
        }
      if (
        !o &&
        l &&
        (Gl(e, "getType") ||
          (e.getType = function () {
            return l;
          }),
        Gl(e, "clone") ||
          (e.clone = function (t) {
            return (Js(t), new e());
          }),
        Gl(e, "importJSON") ||
          (e.importJSON =
            (i && i.$importJSON) ||
            function (t) {
              return new e().updateFromJSON(t);
            }),
        !Gl(e, "importDOM") && i)
      ) {
        var _i29 = i,
          _t243 = _i29.importDOM;
        _t243 &&
          (e.importDOM = function () {
            return _t243;
          });
      }
      var c = { klass: e, ownNodeConfig: i, ownNodeType: l };
      return (Vl.set(e, c), c);
    }
    function* Xl(t) {
      for (var _e151 = t; _e151 && (_e151 === _gr5 || _r(_e151.prototype)); ) {
        var _t244 = ql(_e151);
        (yield _t244,
          (_e151 =
            (_t244.ownNodeConfig && _t244.ownNodeConfig["extends"]) ||
            tc(_e151)));
      }
    }
    var Ql = function Ql(t, e) {
      var n = t;
      for (; null != n && !Ss(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function Zl(e, n) {
      var r = [];
      var o = e.__first;
      for (; null !== o; ) {
        var _e152 = null === n ? pi(o) : n.get(o);
        (null == _e152 && t(174), r.push(o), (o = _e152.__next));
      }
      return r;
    }
    function tc(t) {
      var e = Object.getPrototypeOf(t);
      if ("function" == typeof e && e !== Function.prototype) return e;
      var n = t.prototype && Object.getPrototypeOf(t.prototype);
      return n ? n.constructor : null;
    }
    var ec = new Map();
    function nc(t) {
      return ps(t) || xs(t);
    }
    function rc(t) {
      return ps(t) || xs(t);
    }
    function oc(t) {
      var e = t.getLatest();
      return rc(e) ? e.__slotHost : null;
    }
    function sc(e) {
      var n = oc(e);
      if (null === n) return null;
      var r = pi(n);
      return (ps(r) || xs(r) || t(370), r);
    }
    function ic(t) {
      var e = sc(t);
      if (null === e) return null;
      var n = t.getLatest().__key;
      for (var _ref44 of cc(e)) {
        var _t245 = _ref44[0];
        var _r84 = _ref44[1];
        if (_r84 === n) return _t245;
      }
      return null;
    }
    function lc(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== oc(e)) return e;
        e = e.getParent();
      }
      return null;
    }
    function cc(t) {
      var e = t.getLatest();
      return nc(e) && null !== e.__slots ? e.__slots : ec;
    }
    function ac(t) {
      return Array.from(cc(t).keys());
    }
    function uc(t, e) {
      var n = cc(t).get(e);
      return void 0 === n ? null : pi(n);
    }
    var fc = ["__proto__", "constructor", "prototype"],
      dc = Symbol("slotMapOwner");
    function hc(t) {
      var e = t.__slots;
      return (
        (null !== e && e[dc] === t) ||
          ((e = new Map(e)), (e[dc] = t), (t.__slots = e)),
        e
      );
    }
    var gc = new WeakMap(),
      _c = [];
    function pc(t) {
      for (var _ref46 of Xl(t)) {
        var _e153 = _ref46.ownNodeConfig;
        {
          var _t246 = _e153 && _e153.slots;
          if (_t246) return _t246;
        }
      }
      return _c;
    }
    function yc(t) {
      var e = "";
      for (var _n113 of ac(t)) {
        var _r85 = uc(t, _n113);
        null !== _r85 && (e += _r85.getTextContent());
      }
      return e;
    }
    function mc(t, e, n) {
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
    function xc(e) {
      var n = e.__slots;
      if (null === n || n.size < 2) return;
      var r = (function (e) {
        var n = gc.get(e);
        if (void 0 === n) {
          var _r86 = pc(e),
            _o63 = new Map();
          for (var _n114 of _r86)
            (fc.includes(_n114) && t(371, e.name, _n114),
              _o63.has(_n114) && t(372, e.name, _n114),
              _o63.set(_n114, _o63.size));
          ((n = _o63), gc.set(e, n));
        }
        return n;
      })(e.constructor);
      var o = null,
        s = !0;
      for (var _t247 of n.keys()) {
        if (null !== o && mc(o, _t247, r) > 0) {
          s = !1;
          break;
        }
        o = _t247;
      }
      if (s) return;
      var i = Array.from(n).sort(function (_ref47, _ref48) {
        var t = _ref47[0];
        var e = _ref48[0];
        return mc(t, e, r);
      });
      n.clear();
      for (var _ref50 of i) {
        var _t248 = _ref50[0];
        var _e154 = _ref50[1];
        n.set(_t248, _e154);
      }
    }
    function Cc(e, n, r) {
      ("__proto__" !== n && "constructor" !== n && "prototype" !== n) ||
        t(373, n);
      var o = e.getLatest();
      if (null !== o.__slots && o.__slots.get(n) === r.getLatest().__key)
        return o;
      ((!ps(r) && !xs(r)) || r.isInline()) && t(374, r.__key);
      var s = e.getWritable(),
        i = hc(s),
        l = i.get(n);
      void 0 !== l && Nc(l);
      var c = r.getWritable(),
        a = sc(c);
      if (null !== a) {
        var _t249 = ic(c);
        (null !== _t249 && hc(a.getWritable())["delete"](_t249),
          (c.__slotHost = null));
      }
      return (
        fi(c),
        (c.__slotHost = s.__key),
        i.set(n, c.__key),
        xc(s),
        (function () {
          var t = Dl();
          ((t._slotsUsed = !0),
            t._pendingEditorState && (t._pendingEditorState._slotsUsed = !0));
        })(),
        s
      );
    }
    function Sc(t, e) {
      var n = t.getWritable();
      if (null === n.__slots) return n;
      var r = n.__slots.get(e);
      return (void 0 !== r && (Nc(r), hc(n)["delete"](e)), n);
    }
    function Tc(t, e) {}
    function Nc(e) {
      var n = pi(e);
      if (null === n) return;
      var r = n.getWritable();
      (rc(r) || t(377, e), (r.__slotHost = null), r.remove());
    }
    var vc = { next: "previous", previous: "next" };
    var _kc4 = (function () {
      function kc(t) {
        this.origin = t;
      }
      var _proto18 = kc.prototype;
      _proto18[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return qc({
            hasNext: Ic,
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
        return Kc(this.getNodeAtCaret(), this.direction);
      };
      _proto18.getSiblingCaret = function getSiblingCaret() {
        return Kc(this.origin, this.direction);
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
          var _t250 = s.getAdjacentCaret();
          null !== _t250 && l.size < e;
          _t250 = _t250.getAdjacentCaret()
        ) {
          var _e155 = _t250.origin.getWritable();
          l.set(_e155.getKey(), _e155);
        }
        for (var _e156 of o) {
          if (l.size > 0) {
            var _n115 = s.getNodeAtCaret();
            if (_n115) {
              if (
                (l["delete"](_n115.getKey()),
                l["delete"](_e156.getKey()),
                _n115.is(_e156) || s.origin.is(_e156))
              );
              else {
                var _t251 = _e156.getParent();
                (_t251 && _t251.is(i) && _e156.remove(), _n115.replace(_e156));
              }
            } else null === _n115 && t(263, Array.from(l).join(" "));
          } else s.insert(_e156);
          s = Kc(_e156, this.direction);
        }
        for (var _t252 of l.values()) _t252.remove();
        return this;
      };
      return kc;
    })();
    var _Ec3 = (function (_kc) {
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
          ((_this6 = _kc.call.apply(_kc, [this].concat(args)) || this),
          (_this6.type = "child"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(Ec, _kc);
      var _proto19 = Ec.prototype;
      _proto19.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Wc(t, this.direction);
      };
      _proto19.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Kc(Mc(this.getParentAtCaret(), t), this.direction);
      };
      _proto19.getFlipped = function getFlipped() {
        var t = bc(this.direction);
        return Kc(this.getNodeAtCaret(), t) || Wc(this.origin, t);
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
    })(_kc4);
    var Oc = { root: Ss, shadowRoot: nl };
    function bc(t) {
      return vc[t];
    }
    function Mc(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return null === t || Oc[e](t) ? null : null === oc(t) ? t : null;
    }
    var _Ac3 = (function (_kc2) {
      function Ac() {
        var _this7;
        for (
          var _len8 = arguments.length, args = new Array(_len8), _key8 = 0;
          _key8 < _len8;
          _key8++
        ) {
          args[_key8] = arguments[_key8];
        }
        return (
          ((_this7 = _kc2.call.apply(_kc2, [this].concat(args)) || this),
          (_this7.type = "sibling"),
          babelHelpers.assertThisInitialized(_this7)) ||
          babelHelpers.assertThisInitialized(_this7)
        );
      }
      babelHelpers.inheritsLoose(Ac, _kc2);
      var _proto20 = Ac.prototype;
      _proto20.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Kc(t, this.direction);
      };
      _proto20.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto20.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto20.getChildCaret = function getChildCaret() {
        return ps(this.origin) ? Wc(this.origin, this.direction) : null;
      };
      _proto20.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Kc(Mc(this.getParentAtCaret(), t), this.direction);
      };
      _proto20.getFlipped = function getFlipped() {
        var t = bc(this.direction);
        return (
          Kc(this.getNodeAtCaret(), t) || Wc(this.origin.getParentOrThrow(), t)
        );
      };
      _proto20.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Ac &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto20.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof Ac || t instanceof _wc3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return Ac;
    })(_kc4);
    var _wc3 = (function (_kc3) {
      function wc(t, e) {
        var _this8;
        ((_this8 = _kc3.call(this, t) || this),
          (_this8.type = "text"),
          (_this8.offset = e));
        return _this8;
      }
      babelHelpers.inheritsLoose(wc, _kc3);
      var _proto21 = wc.prototype;
      _proto21.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : $c(t, this.direction, this.offset);
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
        return Kc(Mc(this.getParentAtCaret(), t), this.direction);
      };
      _proto21.getFlipped = function getFlipped() {
        return $c(this.origin, bc(this.direction), this.offset);
      };
      _proto21.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof wc &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto21.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _Ac3 || t instanceof wc) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto21.getSiblingCaret = function getSiblingCaret() {
        return Kc(this.origin, this.direction);
      };
      return wc;
    })(_kc4);
    function Dc(t) {
      return t instanceof _wc3;
    }
    function Ic(t) {
      return t instanceof _Ac3;
    }
    function Pc(t) {
      return t instanceof _Ec3;
    }
    var Fc = {
        next: (function (_wc) {
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
              ((_this9 = _wc.call.apply(_wc, [this].concat(args)) || this),
              (_this9.direction = "next"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class, _wc);
          var _proto22 = _class.prototype;
          _proto22.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto22.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_wc3),
        previous: (function (_wc2) {
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
              ((_this0 = _wc2.call.apply(_wc2, [this].concat(args)) || this),
              (_this0.direction = "previous"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class3, _wc2);
          var _proto23 = _class3.prototype;
          _proto23.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto23.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_wc3),
      },
      Rc = {
        next: (function (_Ac) {
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
              ((_this1 = _Ac.call.apply(_Ac, [this].concat(args)) || this),
              (_this1.direction = "next"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class5, _Ac);
          var _proto24 = _class5.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_Ac3),
        previous: (function (_Ac2) {
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
              ((_this10 = _Ac2.call.apply(_Ac2, [this].concat(args)) || this),
              (_this10.direction = "previous"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class7, _Ac2);
          var _proto25 = _class7.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_Ac3),
      },
      Lc = {
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
    function Kc(t, e) {
      return t ? new Rc[e](t) : null;
    }
    function $c(t, e, n) {
      return t ? new Fc[e](t, zc(t, n)) : null;
    }
    function zc(t, n, r) {
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
    function Bc(t, e) {
      return new _Yc(t, e);
    }
    function Wc(t, e) {
      return ps(t) ? new Lc[e](t) : null;
    }
    function Uc(t) {
      return (t && t.getChildCaret()) || t;
    }
    function Hc(t) {
      return t && Uc(t.getAdjacentCaret());
    }
    var _jc = (function () {
      function jc(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto28 = jc.prototype;
      _proto28.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new jc(t, e, this.direction);
      };
      _proto28.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto28.getTextSlices = function getTextSlices() {
        var _this16 = this;
        var t = function t(_t253) {
            var e = _this16[_t253].getLatest();
            return Dc(e)
              ? (function (t, e) {
                  var n = t.direction,
                    r = t.origin,
                    o = zc(r, "focus" === e ? bc(n) : n);
                  return Bc(t, o - t.offset);
                })(e, _t253)
              : null;
          },
          e = t("anchor"),
          n = t("focus");
        if (e && n) {
          var _t254 = e.caret,
            _r87 = n.caret;
          if (_t254.isSameNodeCaret(_r87))
            return [Bc(_t254, _r87.offset - _t254.offset), null];
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
          r = Dc(n),
          o = function o(e) {
            return e.isSameNodeCaret(n) ? null : Hc(e) || e.getParentCaret(t);
          };
        return qc({
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
      return jc;
    })();
    var _Yc = (function () {
      function Yc(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto29 = Yc.prototype;
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
        return $c(t.setTextContent(o.slice(0, n) + o.slice(r)), e, n);
      };
      return Yc;
    })();
    function Jc(t) {
      return Vc(t, Kc(Ni(), t.direction));
    }
    function Gc(t) {
      return Vc(t, t);
    }
    function Vc(e, n) {
      return (
        e.direction !== n.direction && t(265),
        new _jc(e, n, e.direction)
      );
    }
    function qc(t) {
      var _ref51;
      var e = t.initial,
        n = t.hasNext,
        r = t.step,
        o = t.map;
      var s = e;
      return (
        (_ref51 = {}),
        (_ref51[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
          function () {
            return this;
          }),
        (_ref51.next = function next() {
          if (!n(s)) return { done: !0, value: void 0 };
          var t = { done: !1, value: o(s) };
          return ((s = r(s)), t);
        }),
        _ref51
      );
    }
    function Xc(e, n) {
      var r = ea(e.origin, n.origin);
      switch (
        (null === r && t(275, e.origin.getKey(), n.origin.getKey()), r.type)
      ) {
        case "same": {
          var _t255 = "text" === e.type,
            _r88 = "text" === n.type;
          return _t255 && _r88
            ? (function (t, e) {
                return Math.sign(t - e);
              })(e.offset, n.offset)
            : e.type === n.type
              ? 0
              : _t255
                ? -1
                : _r88
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
          return Qc(r);
      }
    }
    function Qc(t) {
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
    function Zc(t, e) {
      return e.is(t);
    }
    function ta(t) {
      return ps(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function ea(e, n) {
      if (e.is(n)) return { commonAncestor: e, type: "same" };
      var r = new Map();
      for (
        var _ta = ta(e), _t256 = _ta[0], _n116 = _ta[1];
        _t256;
        _n116 = _t256, _t256 = _t256.getParent()
      )
        r.set(_t256, _n116);
      for (
        var _ta2 = ta(n), _o64 = _ta2[0], _s44 = _ta2[1];
        _o64;
        _s44 = _o64, _o64 = _o64.getParent()
      ) {
        var _i30 = r.get(_o64);
        if (void 0 !== _i30)
          return null === _i30
            ? (Zc(e, _o64) || t(276),
              { commonAncestor: _o64, type: "ancestor" })
            : null === _s44
              ? (Zc(n, _o64) || t(277),
                { commonAncestor: _o64, type: "descendant" })
              : (((ps(_i30) || Zc(e, _i30)) &&
                  (ps(_s44) || Zc(n, _s44)) &&
                  _o64.is(_i30.getParent()) &&
                  _o64.is(_s44.getParent())) ||
                  t(278),
                { a: _i30, b: _s44, commonAncestor: _o64, type: "branch" });
      }
      return null;
    }
    function na(e, n) {
      var r = e.type,
        o = e.key,
        s = e.offset,
        i = il(e.key);
      return "text" === r
        ? (Hr(i) || t(266, i.getType(), o), $c(i, n, s))
        : (ps(i) || t(267, i.getType(), o), _a(i, e.offset, n));
    }
    function ra(e, n) {
      var r = n.origin,
        o = n.direction,
        s = "next" === o;
      Dc(n)
        ? e.set(r.getKey(), n.offset, "text")
        : Ic(n)
          ? Hr(r)
            ? e.set(r.getKey(), zc(r, o), "text")
            : e.set(
                r.getParentOrThrow().getKey(),
                r.getIndexWithinParent() + (s ? 1 : 0),
                "element",
              )
          : ((Pc(n) && ps(r)) || t(268),
            e.set(r.getKey(), s ? 0 : r.getChildrenSize(), "element"));
    }
    function oa(t) {
      var e = No(),
        n = eo(e) ? e : Co();
      return (sa(n, t), vi(n), n);
    }
    function sa(t, e) {
      (ra(t.anchor, e.anchor), ra(t.focus, e.focus));
    }
    function ia(t) {
      var e = t.anchor,
        n = t.focus,
        r = na(e, "next"),
        o = na(n, "next"),
        s = Xc(r, o) <= 0 ? "next" : "previous";
      return Vc(ha(r, s), ha(o, s));
    }
    function la(t) {
      var e = t.direction,
        n = t.origin,
        r = Kc(n, bc(e)).getNodeAtCaret();
      return r ? Kc(r, e) : Wc(n.getParentOrThrow(), e);
    }
    function ca(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _r89 = Pc(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _r89;
        _r89 = _r89.getParentCaret(e)
      )
        n.push(la(_r89));
      return n;
    }
    function aa(t) {
      return !!t && t.origin.isAttached();
    }
    function ua(e, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (e.isCollapsed()) return e;
      var r = "root",
        o = "next";
      var s = n;
      var i = ga(e, o),
        l = ca(i.anchor, r),
        c = ca(i.focus.getFlipped(), r),
        a = new Set(),
        u = [];
      for (var _t257 of i.iterNodeCarets(r))
        if (Pc(_t257)) a.add(_t257.origin.getKey());
        else if (Ic(_t257)) {
          var _e157 = _t257.origin;
          (ps(_e157) && !a.has(_e157.getKey())) || u.push(_e157);
        }
      for (var _t258 of u) _t258.remove();
      for (var _t259 of i.getTextSlices()) {
        if (!_t259) continue;
        var _e158 = _t259.caret.origin,
          _n117 = _e158.getTextContentSize(),
          _r90 = la(Kc(_e158, o)),
          _i31 = _e158.getMode();
        if (
          (Math.abs(_t259.distance) === _n117 && "removeEmptySlices" === s) ||
          ("token" === _i31 && 0 !== _t259.distance)
        )
          _r90.remove();
        else if (0 !== _t259.distance) {
          s = "removeEmptySlices";
          var _e159 = _t259.removeTextSlice();
          var _n118 = _t259.caret.origin;
          if ("segmented" === _i31) {
            var _t260 = _e159.origin,
              _n119 = Ur(_t260.getTextContent())
                .setStyle(_t260.getStyle())
                .setFormat(_t260.getFormat());
            (_r90.replaceOrInsert(_n119), (_e159 = $c(_n119, o, _e159.offset)));
          }
          (_n118.is(l[0].origin) && (l[0] = _e159),
            _n118.is(c[0].origin) && (c[0] = _e159.getFlipped()));
        }
      }
      var f, d;
      for (var _t261 of l)
        if (aa(_t261)) {
          f = fa(_t261);
          break;
        }
      for (var _t262 of c)
        if (aa(_t262)) {
          d = fa(_t262);
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
            for (var _r91 = c; _r91 < t.length; _r91++) {
              var _o65 = t[_r91];
              if (nl(_o65)) return;
              !n && e(_o65) && (n = _o65);
            }
            return n;
          },
          u = a(s, wl),
          f =
            u &&
            a(i, function (t) {
              return n.has(t.getKey()) && wl(t);
            });
        if (f && ac(f).length > 0) return null;
        return u && f ? [u, f] : null;
      })(f, d, a);
      if (h) {
        var _t263 = h[0],
          _e160 = h[1];
        Wc(_t263, "previous").splice(0, _e160.getChildren());
        var _n120 = _e160.getParent();
        for (_e160.remove(!0); _n120 && _n120.isEmpty(); ) {
          var _t264 = _n120;
          ((_n120 = _n120.getParent()), _t264.remove(!0));
        }
      } else if (d) {
        var _t265 = (function (t) {
            if (Pc(t)) {
              var _e162 = t.origin;
              if (wl(_e162)) return _e162;
            } else {
              var _e163 = t.getParentAtCaret();
              if (_e163 && wl(_e163)) return _e163;
            }
            return null;
          })(d),
          _e161 = _t265 && _t265.getParent(),
          _n121 = _t265 && _t265.getParents().findLast(el);
        if (
          _t265 &&
          _e161 &&
          !Ss(_e161) &&
          _t265.isEmpty() &&
          a.has(_t265.getKey()) &&
          0 === ac(_t265).length &&
          (!_n121 || a.has(_n121.getKey()))
        ) {
          _t265.remove(!0);
          var _n122 = _e161;
          for (; _n122 && !Ss(_n122) && _n122.isEmpty(); ) {
            var _t266 = _n122.getParent();
            if (_t266 && Ss(_t266) && _t266.getChildrenSize() <= 1) break;
            var _e164 = _n122;
            ((_n122 = _t266), _e164.remove(!0));
          }
        }
      }
      var g = [f, d].concat(l, c).find(aa);
      if (g) {
        return Gc(ha(fa(g), e.direction));
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
    function fa(t) {
      var e = (function (t) {
          var e = t;
          for (; Pc(e); ) {
            var _t267 = Hc(e);
            if (!Pc(_t267)) break;
            e = _t267;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (Hr(e.origin)) return Dc(e) ? e : $c(e.origin, n, n);
      var r = e.getAdjacentCaret();
      return Ic(r) && Hr(r.origin) ? $c(r.origin, n, bc(n)) : e;
    }
    function da(t) {
      return Dc(t) && t.offset !== zc(t.origin, t.direction);
    }
    function ha(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function ga(t, e) {
      return t.direction === e ? t : Vc(ha(t.focus, e), ha(t.anchor, e));
    }
    function _a(t, e, n) {
      var r = Wc(t, "next");
      for (var _t268 = 0; _t268 < e; _t268++) {
        var _t269 = r.getAdjacentCaret();
        if (null === _t269) break;
        r = _t269;
      }
      return ha(r, n);
    }
    function pa(e) {
      var n = e.origin,
        r = e.offset,
        o = e.direction;
      if (r === zc(n, o)) return e.getSiblingCaret();
      if (r === zc(n, bc(o))) return la(e.getSiblingCaret());
      var _n$splitText2 = n.splitText(r),
        s = _n$splitText2[0];
      return (Hr(s) || t(281), ha(Kc(s, "next"), o));
    }
    function ya(t, e) {
      return !0;
    }
    function ma(t, _temp) {
      var _ref52 = _temp === void 0 ? {} : _temp,
        _ref52$$copyElementNo = _ref52.$copyElementNode,
        e = _ref52$$copyElementNo === void 0 ? rl : _ref52$$copyElementNo,
        _ref52$$splitTextPoin = _ref52.$splitTextPointCaretNext,
        n = _ref52$$splitTextPoin === void 0 ? pa : _ref52$$splitTextPoin,
        _ref52$rootMode = _ref52.rootMode,
        r = _ref52$rootMode === void 0 ? "shadowRoot" : _ref52$rootMode,
        _ref52$$shouldSplit = _ref52.$shouldSplit,
        o = _ref52$$shouldSplit === void 0 ? ya : _ref52$$shouldSplit,
        _ref52$removeEmptyDes = _ref52.removeEmptyDestination,
        s = _ref52$removeEmptyDes === void 0 ? !1 : _ref52$removeEmptyDes;
      if (Dc(t)) return n(t);
      var i = t.getParentCaret(r);
      if (i) {
        var _n123 = i.origin;
        if (Pc(t)) {
          var _t270 = la(i);
          if (s && _n123.isEmpty()) return (_n123.remove(), _t270);
          if (!_n123.canBeEmpty() || !o(_n123, "first")) return _t270;
        }
        var _r92 = (function (t) {
          var e = [];
          for (
            var _n124 = t.getAdjacentCaret();
            _n124;
            _n124 = _n124.getAdjacentCaret()
          )
            e.push(_n124.origin);
          return e;
        })(t);
        (_r92.length > 0 || (!s && _n123.canBeEmpty() && o(_n123, "last"))) &&
          i.insert(e(_n123).splice(0, 0, _r92));
      }
      return i;
    }
    function xa(e, n, r) {
      var o = ha(n, "next");
      (Dc(o) &&
        (0 === o.offset
          ? (o = Kc(o.origin, "previous").getFlipped())
          : o.offset === o.origin.getTextContentSize() &&
            (o = Kc(o.origin, "next"))),
        o.origin.is(e) &&
          (Ic(o) || t(342, e.getKey(), e.getType()), (o = la(o))),
        (e.is(o.getNodeAtCaret()) || e.is(o.getFlipped().getNodeAtCaret())) &&
          e.remove(!0));
      for (var _t271 = o; _t271; _t271 = ma(_t271, r)) o = _t271;
      return (
        Dc(o) && t(283),
        o.insert(e.isInline() ? Rs().append(e) : e),
        ha(Kc(e.getLatest(), "next"), n.direction)
      );
    }
    function Ca() {
      var e = [];
      for (
        var _len13 = arguments.length, t = new Array(_len13), _key13 = 0;
        _key13 < _len13;
        _key13++
      ) {
        t[_key13] = arguments[_key13];
      }
      for (var _n125 of t)
        if (_n125 && "string" == typeof _n125)
          for (var _ref54 of _n125.matchAll(/\S+/g)) {
            var _t272 = _ref54[0];
            e.push(_t272);
          }
      return e;
    }
    function Sa() {
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
    ((exports.$addUpdateTag = Gi),
      (exports.$applyNodeReplacement = ol),
      (exports.$assumeActiveEditor = function (t) {
        (null !== Xo() && null === Bo && (Bo = t), Bo !== t && e(378));
      }),
      (exports.$caretFromPoint = na),
      (exports.$caretRangeFromSelection = ia),
      (exports.$cloneWithProperties = zl),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = zl(t))[fr] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = Xc),
      (exports.$copyNode = rl),
      (exports.$create = function (t) {
        var e = Dl();
        return (
          Vo(),
          new (e.resolveRegisteredNodeAfterReplacements(
            e.getRegisteredNode(t),
          ).klass)()
        );
      }),
      (exports.$createChildrenArray = Zl),
      (exports.$createLineBreakNode = Ms),
      (exports.$createNodeSelection = So),
      (exports.$createParagraphNode = Rs),
      (exports.$createPoint = qr),
      (exports.$createRangeSelection = Co),
      (exports.$createRangeSelectionFromDom = function (t, e) {
        return To(null, t, e, null);
      }),
      (exports.$createTabNode = Jr),
      (exports.$createTextNode = Ur),
      (exports.$extendCaretToRange = Jc),
      (exports.$findMatchingParent = Ql),
      (exports.$formatText = oo),
      (exports.$fullReconcile = Zo),
      (exports.$generateNodesFromRawText = Io),
      (exports.$getAdjacentChildCaret = Hc),
      (exports.$getAdjacentNode = Wi),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          r = t,
          o = Hc(r);
        for (; null === o; ) {
          if ((n--, (o = r.getParentCaret(e)), !o)) return null;
          ((r = o), (o = Hc(r)));
        }
        return o && [o, n];
      }),
      (exports.$getCaretInDirection = ha),
      (exports.$getCaretRange = Vc),
      (exports.$getCaretRangeInDirection = ga),
      (exports.$getCharacterOffsets = io),
      (exports.$getChildCaret = Wc),
      (exports.$getChildCaretAtIndex = _a),
      (exports.$getChildCaretOrSelf = Uc),
      (exports.$getCollapsedCaretRange = Gc),
      (exports.$getCommonAncestor = ea),
      (exports.$getCommonAncestorResultBranchOrder = Qc),
      (exports.$getDOMSlot = Pl),
      (exports.$getDOMTextNode = Rl),
      (exports.$getEditor = Dl),
      (exports.$getEditorDOMRenderConfig = Il),
      (exports.$getNearestNodeFromDOMNode = Ci),
      (exports.$getNearestRootOrShadowRoot = tl),
      (exports.$getNodeByKey = pi),
      (exports.$getNodeByKeyOrThrow = il),
      (exports.$getNodeFromDOMNode = yi),
      (exports.$getPreviousSelection = vo),
      (exports.$getRoot = Ni),
      (exports.$getSelection = No),
      (exports.$getSiblingCaret = Kc),
      (exports.$getSlot = uc),
      (exports.$getSlotFrame = lc),
      (exports.$getSlotHost = sc),
      (exports.$getSlotNameWithinHost = ic),
      (exports.$getSlotNames = ac),
      (exports.$getState = at),
      (exports.$getStateChange = function (t, e, n) {
        var r = at(t, n, it),
          o = at(e, n, it);
        return n.isEqual(r, o) ? null : [r, o];
      }),
      (exports.$getTextContent = function () {
        var t = No();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = zc),
      (exports.$getTextPointCaret = $c),
      (exports.$getTextPointCaretSlice = Bc),
      (exports.$getWritableNodeState = ht),
      (exports.$hasAncestor = qi),
      (exports.$hasUpdateTag = function (t) {
        return Qo()._updateTags.has(t);
      }),
      (exports.$insertNodeToNearestRootAtCaret = xa),
      (exports.$insertNodes = function (t) {
        var e = No() || vo();
        (null === e && (e = Ni().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = mo),
      (exports.$isChildCaret = Pc),
      (exports.$isDecoratorNode = xs),
      (exports.$isEditorState = function (t) {
        return t instanceof _ks;
      }),
      (exports.$isElementDOMSlot = Fl),
      (exports.$isElementNode = ps),
      (exports.$isExtendableTextPointCaret = da),
      (exports.$isInlineElementOrDecoratorNode = Zi),
      (exports.$isInlineFormattable = Ir),
      (exports.$isLeafNode = function (t) {
        return Hr(t) || As(t) || xs(t);
      }),
      (exports.$isLexicalNode = _r),
      (exports.$isLineBreakNode = As),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _kc4;
      }),
      (exports.$isNodeSelection = ro),
      (exports.$isParagraphNode = Ls),
      (exports.$isRangeSelection = eo),
      (exports.$isRootNode = Ss),
      (exports.$isRootOrShadowRoot = nl),
      (exports.$isSelectionCapturedInDecoratorInput = Qs),
      (exports.$isShadowRootNode = el),
      (exports.$isSiblingCaret = Ic),
      (exports.$isSlotChild = rc),
      (exports.$isSlotHost = nc),
      (exports.$isTabNode = Gr),
      (exports.$isTextNode = Hr),
      (exports.$isTextPointCaret = Dc),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _Yc;
      }),
      (exports.$isTokenOrSegmented = si),
      (exports.$isTokenOrTab = oi),
      (exports.$markSlotEditable = Yl),
      (exports.$needsBlockCursorBeside = ll),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = Xo();
        if (n._readOnly) {
          var _t273 = $l(n).get(e);
          return _t273 ? Array.from(_t273.values()) : [];
        }
        var r = n._nodeMap,
          o = [];
        for (var _ref56 of r) {
          var _n126 = _ref56[1];
          _n126 instanceof t &&
            _n126.__type === e &&
            _n126.isAttached() &&
            o.push(_n126);
        }
        return o;
      }),
      (exports.$normalizeCaret = fa),
      (exports.$normalizeSelection__EXPERIMENTAL = Nt),
      (exports.$onUpdate = Vi),
      (exports.$parseSerializedNode = function (t) {
        return ss(t, Qo()._nodes);
      }),
      (exports.$removeFromParent = fi),
      (exports.$removeSlot = Sc),
      (exports.$removeTextFromCaretRange = ua),
      (exports.$rewindSiblingCaret = la),
      (exports.$selectAll = function (t) {
        var e = Ni();
        if (eo(t)) {
          var _e166 = t.anchor,
            _n127 = t.focus,
            _r93 = _e166.getNode();
          if (Ss(_r93))
            return (
              _e166.set(_r93.getKey(), 0, "element"),
              _n127.set(_r93.getKey(), _r93.getChildrenSize(), "element"),
              Nt(t),
              t
            );
          var _o66 = _r93.getTopLevelElementOrThrow(),
            _s45 = _o66.getParent();
          if (null === _s45)
            return (
              ps(_o66) &&
                (_e166.set(_o66.getKey(), 0, "element"),
                _n127.set(_o66.getKey(), _o66.getChildrenSize(), "element"),
                Nt(t)),
              t
            );
          var _i32 = _s45;
          return (
            _e166.set(_i32.getKey(), 0, "element"),
            _n127.set(_i32.getKey(), _i32.getChildrenSize(), "element"),
            Nt(t),
            t
          );
        }
        {
          var _t274 = e.select(0, e.getChildrenSize());
          return (vi(Nt(_t274)), _t274);
        }
      }),
      (exports.$setCompositionKey = gi),
      (exports.$setDirectionFromDOM = Wl),
      (exports.$setFormatFromDOM = Ul),
      (exports.$setPointFromCaret = ra),
      (exports.$setSelection = vi),
      (exports.$setSelectionFromCaretRange = oa),
      (exports.$setSlot = Cc),
      (exports.$setState = function (t, e, n) {
        var r;
        if ((Vo(), "function" == typeof n)) {
          var _o67 = t.getLatest(),
            _s46 = at(_o67, e);
          if (((r = n(_s46)), e.isEqual(_s46, r))) return _o67;
        } else r = n;
        var o = t.getWritable();
        return (ht(o).updateFromKnown(e, r), o);
      }),
      (exports.$splitAtPointCaretNext = ma),
      (exports.$splitNode = function (e, n) {
        var r = e.getChildAtIndex(n);
        (null == r && (r = e), nl(e) && t(102));
        var _o70 = function o(e) {
            var n = e.getParentOrThrow(),
              s = nl(n),
              i = e !== r || s ? rl(e) : e;
            if (s)
              return ((ps(e) && ps(i)) || t(133), e.insertAfter(i), [e, i, i]);
            {
              var _o69 = _o70(n),
                _t275 = _o69[0],
                _r94 = _o69[1],
                _s47 = _o69[2],
                _l16 = e.getNextSiblings();
              return (
                _s47.append.apply(_s47, [i].concat(_l16)),
                [_t275, _r94, i]
              );
            }
          },
          _o68 = _o70(r),
          s = _o68[0],
          i = _o68[1];
        return [s, i];
      }),
      (exports.$updateDOMSelection = wo),
      (exports.$updateRangeSelectionFromCaretRange = sa),
      (exports.ArtificialNode__DO_NOT_USE = _Es),
      (exports.BEFORE_INPUT_COMMAND = Ee),
      (exports.BLUR_COMMAND = yn),
      (exports.CAN_REDO_COMMAND = gn),
      (exports.CAN_UNDO_COMMAND = _n),
      (exports.CAN_USE_BEFORE_INPUT = i),
      (exports.CAN_USE_DOM = n),
      (exports.CLEAR_EDITOR_COMMAND = dn),
      (exports.CLEAR_HISTORY_COMMAND = hn),
      (exports.CLICK_COMMAND = ke),
      (exports.COLLABORATION_TAG = yr),
      (exports.COMMAND_PRIORITY_BEFORE_CRITICAL = -4),
      (exports.COMMAND_PRIORITY_BEFORE_EDITOR = -8),
      (exports.COMMAND_PRIORITY_BEFORE_HIGH = -5),
      (exports.COMMAND_PRIORITY_BEFORE_LOW = -7),
      (exports.COMMAND_PRIORITY_BEFORE_NORMAL = -6),
      (exports.COMMAND_PRIORITY_CRITICAL = 4),
      (exports.COMMAND_PRIORITY_EDITOR = $s),
      (exports.COMMAND_PRIORITY_HIGH = 3),
      (exports.COMMAND_PRIORITY_LOW = 1),
      (exports.COMMAND_PRIORITY_NORMAL = 2),
      (exports.COMPOSITION_END_COMMAND = Me),
      (exports.COMPOSITION_END_TAG = Tr),
      (exports.COMPOSITION_START_COMMAND = be),
      (exports.COMPOSITION_START_TAG = Sr),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = Ie),
      (exports.COPY_COMMAND = an),
      (exports.CUT_COMMAND = un),
      (exports.CUT_TAG = "cut"),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = Ws),
      (exports.DELETE_CHARACTER_COMMAND = Ae),
      (exports.DELETE_LINE_COMMAND = Le),
      (exports.DELETE_WORD_COMMAND = Re),
      (exports.DRAGEND_COMMAND = cn),
      (exports.DRAGOVER_COMMAND = ln),
      (exports.DRAGSTART_COMMAND = sn),
      (exports.DROP_COMMAND = rn),
      (exports.DecoratorNode = _ms),
      (exports.ElementNode = _s49),
      (exports.FOCUS_COMMAND = pn),
      (exports.FORMAT_ELEMENT_COMMAND = on),
      (exports.FORMAT_TEXT_COMMAND = Ke),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = pr),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = en),
      (exports.INPUT_COMMAND = Oe),
      (exports.INSERT_LINE_BREAK_COMMAND = we),
      (exports.INSERT_PARAGRAPH_COMMAND = De),
      (exports.INSERT_TAB_COMMAND = tn),
      (exports.INTERNAL_$isBlock = wl),
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
      (exports.LineBreakNode = _Os),
      (exports.MOVE_TO_END = Ue),
      (exports.MOVE_TO_START = je),
      (exports.NODE_STATE_DIRECT = it),
      (exports.NODE_STATE_KEY = "$"),
      (exports.NODE_STATE_LATEST = lt),
      (exports.OUTDENT_CONTENT_COMMAND = nn),
      (exports.PASTE_COMMAND = Pe),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _Ps),
      (exports.REDO_COMMAND = ze),
      (exports.REMOVE_TEXT_COMMAND = Fe),
      (exports.RootNode = _Cs),
      (exports.SELECTION_CHANGE_COMMAND = Ne),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = ve),
      (exports.SELECT_ALL_COMMAND = fn),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = xr),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = mr),
      (exports.SKIP_SELECTION_FOCUS_TAG = Cr),
      (exports.TEXT_TYPE_TO_FORMAT = A),
      (exports.TabNode = _Yr),
      (exports.TextNode = _Pr2),
      (exports.UNDO_COMMAND = $e),
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
        var n = Ca.apply(void 0, e);
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
          r = es(),
          o = n.theme || {},
          s = void 0 === e ? r : n.parentEditor || null,
          i = n.disableEvents || !1,
          l = Ns(),
          c = n.namespace || (null !== s ? s._config.namespace : bi()),
          a = n.editorState,
          u = [_Cs, _Pr2, _Os, _Yr, _Ps, _Es].concat(n.nodes || []),
          f = n.onError,
          d = n.onWarn,
          h = n.html,
          g = void 0 === n.editable || n.editable;
        var _;
        if (void 0 === e && null !== r) _ = r._nodes;
        else {
          _ = new Map();
          for (var _e167 = 0; _e167 < u.length; _e167++) {
            var _r95 = u[_e167],
              _o71 = null,
              _s48 = null;
            if (_r95 && "object" == typeof _r95) {
              var _t276 = _r95;
              ((_r95 = _t276.replace),
                (_o71 = _t276["with"]),
                (_s48 = _t276.withKlass || null));
            }
            if (
              "function" != typeof _r95 ||
              !_r95.prototype ||
              !(_r95 === _gr5 || _r95.prototype instanceof _gr5)
            ) {
              var _o72 = "<unknown>";
              try {
                _o72 = JSON.parse(H);
              } catch (t) {}
              t(
                365,
                String(_e167 - u.length + (n.nodes ? n.nodes.length : 0)),
                "function" == typeof _r95
                  ? "" +
                      _r95.name +
                      ("function" == typeof _r95.getType
                        ? " (type " + String(_r95.getType()) + ")"
                        : "")
                  : String(_r95),
                String(_o72),
              );
            }
            ql(_r95);
            var _i33 = _r95.getType(),
              _l17 = Bs(_r95);
            _.set(_i33, {
              exportDOM: h && h["export"] ? h["export"].get(_r95) : void 0,
              klass: _r95,
              replace: _o71,
              replaceWithKlass: _s48,
              sharedNodeState: ut(u[_e167]),
              transforms: _l17,
            });
          }
        }
        var p = new _js(
          l,
          s,
          _,
          {
            disableEvents: i,
            dom: babelHelpers["extends"]({}, Ws, e && e.dom),
            namespace: c,
            theme: o,
          },
          f || console.error,
          d || Ks,
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
            (t.registerCommand(Ee, Xn, $s),
              t.registerCommand(Oe, Qn, $s),
              t.registerCommand(be, Zn, $s),
              t.registerCommand(Me, tr, $s),
              t.registerCommand(Be, nr, $s));
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
      (exports.findAllLexicalElementsDeep = gl),
      (exports.flipDirection = bc),
      (exports.getActiveElement = Sl),
      (exports.getActiveElementDeep = Tl),
      (exports.getComposedEventTarget = Nl),
      (exports.getComposedStaticRange = _l),
      (exports.getDOMOwnerDocument = Ji),
      (exports.getDOMSelection = al),
      (exports.getDOMSelectionFromTarget = ul),
      (exports.getDOMSelectionPoints = yl),
      (exports.getDOMSelectionRange = pl),
      (exports.getDOMSelectionRangeAndPoints = function (t, e) {
        var _ml;
        var n = _l(t, e);
        if (null === n)
          return {
            points: t,
            range: t.rangeCount > 0 ? t.getRangeAt(0) : null,
          };
        var r =
          (_ml = ml(n)) != null
            ? _ml
            : t.rangeCount > 0
              ? t.getRangeAt(0)
              : null;
        return { points: xl(n, Cl(t)), range: r };
      }),
      (exports.getDOMShadowRoots = hl),
      (exports.getDOMTextNode = ci),
      (exports.getDeclaredSlots = pc),
      (exports.getEditorPropertyFromDOMNode = ri),
      (exports.getNearestEditorFromDOMNode = ni),
      (exports.getParentElement = Yi),
      (exports.getRegisteredNode = qs),
      (exports.getRegisteredNodeOrThrow = Vs),
      (exports.getRegisteredSubtypeMap = function (t) {
        var e = new Map(),
          n = new Map();
        for (var _r96 of t) {
          var _ql2 = ql(_r96),
            _t277 = _ql2.ownNodeType;
          _t277 && (n.set(_t277, _r96), e.set(_t277, new Set()));
        }
        for (var _ref58 of n) {
          var _t278 = _ref58[0];
          var _r97 = _ref58[1];
          for (var _ref60 of Xl(_r97)) {
            var _n128 = _ref60.ownNodeType;
            {
              var _r98 = _n128 && e.get(_n128);
              _r98 && _r98.add(_t278);
            }
          }
        }
        return e;
      }),
      (exports.getRootOwnerDocument = function (t) {
        return null !== t ? t.ownerDocument : document;
      }),
      (exports.getStaticNodeConfig = ql),
      (exports.getStyleObjectFromCSS = vr),
      (exports.getTextDirection = function (t) {
        return b.test(t) ? "rtl" : M.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = Bs),
      (exports.isBlockDomNode = Al),
      (exports.isCurrentlyReadOnlyMode = Go),
      (exports.isDOMCapturingSelection = Jl),
      (exports.isDOMDocumentNode = li),
      (exports.isDOMNode = kl),
      (exports.isDOMShadowRoot = fl),
      (exports.isDOMTextNode = ii),
      (exports.isDOMUnmanaged = jl),
      (exports.isDocumentFragment = El),
      (exports.isExactShortcutMatch = Fi),
      (exports.isHTMLAnchorElement = function (t) {
        return vl(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = vl),
      (exports.isHTMLTableCellElement = function (t) {
        return vl(t) && ("TD" === t.tagName || "TH" === t.tagName);
      }),
      (exports.isHTMLTableRowElement = function (t) {
        return vl(t) && "TR" === t.tagName;
      }),
      (exports.isInlineDomNode = bl),
      (exports.isLastChildInBlockNode = Ds),
      (exports.isLexicalEditor = ei),
      (exports.isModifierMatch = Pi),
      (exports.isOnlyChildInBlockNode = ws),
      (exports.isSelectionCapturedInDecoratorInput = Zs),
      (exports.isSelectionWithinEditor = ti),
      (exports.iterStaticNodeConfigChain = Xl),
      (exports.makeStepwiseIterator = qc),
      (exports.mergeRegister = Sa),
      (exports.mountSlotContainer = function (t, e, n, r) {
        var o = t.read("latest", function () {
          var r = pi(e);
          return null !== r
            ? (function (t, e, n) {
                if (n === void 0) {
                  n = Dl();
                }
                var r = uc(t, e);
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
      (exports.normalizeClassNames = Ca),
      (exports.registerEventListener = Cn),
      (exports.registerEventListeners = function (t, e, n) {
        return Sa.apply(
          void 0,
          Object.entries(e).map(function (_ref61) {
            var e = _ref61[0],
              r = _ref61[1];
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
        var n = Ca.apply(void 0, e);
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(_t$classList3, n);
      }),
      (exports.removeFromParent = di),
      (exports.resetRandomKey = function () {
        Gs = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = Er),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n129 in e) {
          var _r99 = e[_n129];
          null == _r99 ? t.removeProperty(_n129) : kr(t, _n129, _r99);
        }
      }),
      (exports.setDOMUnmanaged = Hl),
      (exports.setNodeIndentFromDOM = Bl),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n130 in e)
          if (t[_n130] !== e[_n130]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.stopLexicalPropagation = ir),
      (exports.toggleTextFormatType = ai),
      (exports.tokenizeRawText = Do),
      (exports.unmountSlotContainer = function (t, e, n) {
        n.style.display = "none";
        var r = t.getElementByKey(e);
        null !== r && n.parentElement !== r && r.insertBefore(n, r.firstChild);
      }));
  },
  null,
);
