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
    function n() {
      return (
        "undefined" != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement
      );
    }
    var o = n();
    function r() {
      return o && "documentMode" in document ? document.documentMode : null;
    }
    var s = r();
    function i(t) {
      return o && t.test(navigator.platform);
    }
    function l(t) {
      return o && t.test(navigator.userAgent);
    }
    var c = i(/Mac|iPod|iPhone|iPad/),
      a = l(/^(?!.*Seamonkey)(?=.*Firefox).*/i);
    function u() {
      return (
        !(!o || !("InputEvent" in window) || s) &&
        "getTargetRanges" in new window.InputEvent("input")
      );
    }
    var f = u();
    function d() {
      return (
        o &&
        !window.MSStream &&
        (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
          (/Macintosh/.test(navigator.userAgent) &&
            navigator.maxTouchPoints > 1))
      );
    }
    var h = d(),
      g = l(/Android/),
      _ = l(/Version\/[\d.]+.*Safari/) && !g,
      p = l(/^(?=.*Chrome).*/i),
      m = o && g && p,
      y = l(/AppleWebKit\/[\d.]+/) && c && !p,
      x = 128;
    function C() {
      return 2047;
    }
    var S = C(),
      T = _ || h || y ? "\xa0" : "\u200b",
      N = "\n\n",
      v = a ? "\xa0" : T,
      k = "\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc",
      E =
        "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
    function O(t, e) {
      return new RegExp("^[^" + t + "]*[" + e + "]");
    }
    var b = O(E, k),
      M = O(k, E),
      A = {
        bold: 1,
        capitalize: 1024,
        code: 16,
        highlight: x,
        italic: 2,
        lowercase: 256,
        strikethrough: 4,
        subscript: 32,
        superscript: 64,
        underline: 8,
        uppercase: 512,
      },
      D = { directionless: 1, unmergeable: 2 },
      w = { center: 2, end: 6, justify: 4, left: 1, right: 3, start: 5 };
    function I(t) {
      var e = {};
      for (var _n2 of Object.keys(t)) e[t[_n2]] = _n2;
      return e;
    }
    var P = I(w),
      F = { normal: 0, segmented: 2, token: 1 },
      R = I(F),
      L = Symbol["for"]("@lexical/ctrlOrOtherKey"),
      K = "$config";
    function B() {
      return vc()._blockCursorElement;
    }
    function $(t) {
      return (
        null !== t && 1 === t.nodeType && t.hasAttribute("data-lexical-slot")
      );
    }
    var z = y || h || _;
    function W() {
      var t = ic().createElement("img");
      (t.setAttribute("data-lexical-decorator-boundary", "true"), (t.alt = ""));
      for (var _ref2 of [
        ["position", "absolute"],
        ["width", "0px"],
        ["height", "0px"],
        ["border", "0px"],
        ["margin", "0px"],
        ["padding", "0px"],
      ]) {
        var _e2 = _ref2[0];
        var _n3 = _ref2[1];
        t.style.setProperty(_e2, _n3, "important");
      }
      return t;
    }
    function U(t) {
      return (
        null !== t &&
        1 === t.nodeType &&
        t.hasAttribute("data-lexical-decorator-boundary")
      );
    }
    var _H2 = (function () {
      function H(t, e, n) {
        ((this.element = t),
          (this.before = e || null),
          (this.after = n || null));
      }
      var _proto = H.prototype;
      _proto.withBefore = function withBefore(t) {
        return new H(this.element, t, this.after);
      };
      _proto.withAfter = function withAfter(t) {
        return new H(this.element, this.before, t);
      };
      _proto.withElement = function withElement(t) {
        return this.element === t ? this : new H(t, this.before, this.after);
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
        var o = Y(t, this.element);
        if (null === o) return "after";
        var r = Array.prototype.indexOf.call(t.childNodes, o);
        if (r < 0) return "after";
        if (e === t) return n <= r ? "before" : "after";
        var s = Y(t, e);
        if (null === s) return "after";
        var i = Array.prototype.indexOf.call(t.childNodes, s);
        return i >= 0 && i <= r ? "before" : "after";
      };
      _proto.getInsertionAnchor = function getInsertionAnchor() {
        return this.before;
      };
      return H;
    })();
    function Y(t, e) {
      var n = e;
      for (; null !== n && n.parentNode !== t; ) n = n.parentNode;
      return n;
    }
    var _j = (function (_H) {
      function j() {
        return _H.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(j, _H);
      var _proto2 = j.prototype;
      _proto2.withBefore = function withBefore(t) {
        return new j(this.element, t, this.after);
      };
      _proto2.withAfter = function withAfter(t) {
        return new j(this.element, this.before, t);
      };
      _proto2.withElement = function withElement(t) {
        return this.element === t ? this : new j(t, this.before, this.after);
      };
      _proto2.getInsertionAnchor = function getInsertionAnchor() {
        return (
          _H.prototype.getInsertionAnchor.call(this) ||
          this.getManagedLineBreak() ||
          this.getDecoratorBoundaryAnchor("trailing")
        );
      };
      _proto2.getFirstChildAnchor = function getFirstChildAnchor() {
        var t = _H.prototype.getFirstChildAnchor.call(this),
          e = t ? t.nextSibling : this.element.firstChild;
        for (; $(e); ) ((t = e), (e = e.nextSibling));
        U(e) && ((t = e), (e = e.nextSibling));
        var n = t ? t.nextSibling : this.element.firstChild;
        return null !== n && n === B() ? n : t;
      };
      _proto2.getDecoratorBoundaryAnchor = function getDecoratorBoundaryAnchor(
        t,
      ) {
        var e;
        if ("leading" === t) {
          var _t4 = _H.prototype.getFirstChildAnchor.call(this);
          for (e = _t4 ? _t4.nextSibling : this.element.firstChild; $(e); )
            e = e.nextSibling;
        } else
          ((e = this.before
            ? this.before.previousSibling
            : this.element.lastChild),
            null !== e && e === B() && (e = e.previousSibling));
        return U(e) ? e : null;
      };
      _proto2.setDecoratorBoundaryAnchor = function setDecoratorBoundaryAnchor(
        t,
        e,
      ) {
        var n = this.getDecoratorBoundaryAnchor(t);
        if (e !== (null !== n))
          if (null !== n) this.element.removeChild(n);
          else if ("leading" === t) {
            var _t5 = this.getFirstChildAnchor();
            this.element.insertBefore(
              W(),
              _t5 ? _t5.nextSibling : this.element.firstChild,
            );
          } else this.element.insertBefore(W(), this.before);
      };
      _proto2.getManagedLineBreak = function getManagedLineBreak() {
        return this.element.__lexicalLineBreak || null;
      };
      _proto2.setManagedLineBreak = function setManagedLineBreak(t) {
        var e = this.element,
          n = null === this.after ? e.firstChild : this.after.nextSibling,
          o = "empty" === t && $(n) ? null : t;
        if (e.__lexicalLastChildKind !== o)
          if (((e.__lexicalLastChildKind = o), null === o))
            this.removeManagedLineBreak();
          else {
            var _t6 = "decorator" === o && z;
            this.insertManagedLineBreak(_t6);
          }
      };
      _proto2.removeManagedLineBreak = function removeManagedLineBreak() {
        var t = this.getManagedLineBreak();
        if (t) {
          var _e3 = this.element,
            _n4 = "IMG" === t.nodeName ? t.nextSibling : null;
          (_n4 && _e3.removeChild(_n4),
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
          o = this.before || this.getDecoratorBoundaryAnchor("trailing"),
          r = ic().createElement("br");
        if (
          (r.setAttribute("data-lexical-managed-linebreak", "true"),
          n.insertBefore(r, o),
          t)
        ) {
          var _t7 = ic().createElement("img");
          (_t7.setAttribute("data-lexical-managed-linebreak", "true"),
            _t7.style.setProperty("display", "inline", "important"),
            _t7.style.setProperty("border", "0px", "important"),
            _t7.style.setProperty("margin", "0px", "important"),
            (_t7.alt = ""),
            n.insertBefore(_t7, r),
            (n.__lexicalLineBreak = _t7));
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
            _n5 = B(),
            _r2 = this.element.childNodes,
            _s2 = Math.min(o, _r2.length);
          var _i2 = 0;
          for (var _t8 = _e4; _t8 < _s2; _t8++) _r2[_t8] !== _n5 && _i2++;
          return [t, Math.min(_i2, t.getChildrenSize())];
        }
        var r = G(e, n);
        r.push(o);
        var s = G(e, this.element);
        var i = t.getIndexWithinParent();
        for (var _t9 = 0; _t9 < s.length; _t9++) {
          var _e5 = r[_t9],
            _n6 = s[_t9];
          if (void 0 === _e5 || _e5 < _n6) break;
          if (_e5 > _n6) {
            i += 1;
            break;
          }
        }
        return [t.getParentOrThrow(), i];
      };
      return j;
    })(_H2);
    function G(e, n) {
      var o = [];
      var r = n;
      for (; r !== e && null !== r; r = r.parentNode) {
        var _t0 = 0;
        for (
          var _e6 = r.previousSibling;
          null !== _e6;
          _e6 = _e6.previousSibling
        )
          _t0++;
        o.push(_t0);
      }
      return (r !== e && t(225), o.reverse());
    }
    function J() {
      var t;
      try {
        t = "0.50.0+prod.cjs";
      } catch (t) {}
      return t != null ? t : '"<unknown>+source"';
    }
    var V = J();
    var _q = (function () {
      function q() {
        this._front = new Set();
        this._back = new Set();
      }
      var _proto3 = q.prototype;
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
      return babelHelpers.createClass(q, [
        {
          key: "size",
          get: function get() {
            return this._front.size + this._back.size;
          },
        },
      ]);
    })();
    var X = null;
    function Q(t, e) {
      if (e === void 0) {
        e = 1e3;
      }
      return t instanceof _Z
        ? t.clone()
        : t.size < e
          ? new Map(t)
          : new _Z().init(new Map(t), void 0, t.size);
    }
    var _Z = (function () {
      function Z() {
        this._mutable = !1;
        this._old = void 0;
        this._nursery = void 0;
        this._size = 0;
      }
      var _proto4 = Z.prototype;
      _proto4.clone = function clone() {
        return (
          (this._mutable = !1),
          new Z().init(this._old, this._nursery, this._size)
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
        return e === X ? void 0 : e;
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
          var _t1 = new Map(this._old);
          for (var _ref4 of this._nursery) {
            var _e8 = _ref4[0];
            var _n7 = _ref4[1];
            _n7 !== X ? _t1.set(_e8, _n7) : _t1["delete"](_e8);
          }
          ((this._old = _t1), (this._nursery = void 0));
        }
        return ((this._mutable = !1), this);
      };
      _proto4.set = function set(t, e) {
        var n = this.getWithTombstone(t);
        if (n === e) return this;
        var o = this.getNursery();
        return (
          (n !== X && void 0 !== n) ||
            (this._size++, n === X && o["delete"](t)),
          o.set(t, e),
          this
        );
      };
      _proto4["delete"] = function _delete(t) {
        var e = this.has(t);
        return (e && (this.getNursery().set(t, X), this._size--), e);
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
        for (var _t10 of this.entries()) yield _t10[0];
      };
      _proto4.values = function* values() {
        for (var _t11 of this.entries()) yield _t11[1];
      };
      _proto4.entries = function* entries() {
        var t = this._nursery,
          e = this._old;
        if (t) {
          if (e)
            for (var _n8 of e) {
              var _e9 = _n8[0],
                _o3 = t.get(_e9);
              _o3 !== X && (void 0 !== _o3 && (_n8[1] = _o3), yield _n8);
            }
          for (var _n9 of t)
            _n9[1] === X || (e && e.has(_n9[0])) || (yield _n9);
        } else e && (yield* e);
      };
      _proto4.forEach = function forEach(t, e) {
        void 0 !== e && (t = t.bind(e));
        for (var _ref6 of this.entries()) {
          var _e0 = _ref6[0];
          var _n0 = _ref6[1];
          t(_n0, _e0, this);
        }
      };
      _proto4[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this.entries();
        };
      return babelHelpers.createClass(Z, [
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
    function tt(t, e, n, o, r, s) {
      if ($s(t)) {
        var _i3 = t.getFirstChild();
        for (; null !== _i3; ) {
          var _t12 = _i3.__key;
          (_i3.__parent === e &&
            (($s(_i3) || (qc(_i3) && null !== _i3.__slots)) &&
              tt(_i3, _t12, n, o, r, s),
            n.has(_t12) || s["delete"](_t12),
            r.push(_t12)),
            (_i3 = _i3.getNextSibling()));
        }
      }
      for (var _i4 of qc(t) && null !== t.__slots ? t.__slots.values() : []) {
        var _t13 = o.get(_i4);
        void 0 !== _t13 &&
          Xc(_t13) &&
          _t13.__slotHost === e &&
          (($s(_t13) || (qc(_t13) && null !== _t13.__slots)) &&
            tt(_t13, _i4, n, o, r, s),
          n.has(_i4) || s["delete"](_i4),
          r.push(_i4));
      }
    }
    var et = !1,
      nt = 0;
    function ot(t) {
      nt = t.timeStamp;
    }
    function rt(t, e, n) {
      var o = "BR" === t.nodeName,
        r = e.__lexicalLineBreak;
      return (
        (r && (t === r || (o && t.previousSibling === r))) ||
        (o && void 0 !== cl(t, n))
      );
    }
    function st(t, e, n) {
      var o = Zl(Wl(n)),
        r = o && ac(o, n._rootElement);
      var s = null,
        i = null;
      null !== r &&
        r.anchorNode === t &&
        ((s = r.anchorOffset), (i = r.focusOffset));
      var l = t.nodeValue;
      null !== l && Tl(e, l, s, i, !1);
    }
    function it(t, e, n) {
      if (xr(t)) {
        var _e1 = t.anchor.getNode();
        if (_e1.is(n) && t.format !== _e1.getFormat()) return !1;
      }
      return Vi(e) && n.isAttached();
    }
    function lt(t, e, n) {
      for (var _o4 = t; _o4 && !Lc(_o4); _o4 = Rl(_o4)) {
        var _t14 = cl(_o4, e);
        if (void 0 !== _t14) {
          var _e10 = sl(_t14, n);
          if (_e10) return Us(_e10) || !pc(_o4) ? void 0 : [_o4, _e10];
        }
      }
    }
    function ct(t, e, n) {
      et = !0;
      var o = performance.now() - nt > 100;
      try {
        Ls(t, function () {
          var r =
              jr() ||
              (function (t) {
                return t.read("latest", function () {
                  var t = jr();
                  return null !== t ? t.clone() : null;
                });
              })(t),
            s = new Map(),
            i = t._editorState,
            l = t._blockCursorElement;
          var c = !1,
            u = "";
          for (var _n1 = 0; _n1 < e.length; _n1++) {
            var _f = e[_n1],
              _d = _f.type,
              _h = _f.target,
              _g = lt(_h, t, i);
            if (!_g) continue;
            var _2 = _g[0],
              _p = _g[1];
            if ("characterData" === _d)
              o && sr(_p) && Vi(_h) && it(r, _h, _p) && st(_h, _p, t);
            else if ("childList" === _d) {
              c = !0;
              var _e11 = _f.addedNodes;
              for (var _n10 = 0; _n10 < _e11.length; _n10++) {
                var _o5 = _e11[_n10],
                  _r3 = il(_o5),
                  _s3 = _o5.parentNode;
                if (
                  !(
                    null == _s3 ||
                    _o5 === l ||
                    null !== _r3 ||
                    rt(_o5, _s3, t) ||
                    U(_o5) ||
                    (t._slotsUsed &&
                      pc(_o5) &&
                      _o5.hasAttribute("data-lexical-slot")) ||
                    Lc(_o5)
                  )
                ) {
                  if (a) {
                    var _t15 =
                      (pc(_o5) ? _o5.innerText : null) || _o5.nodeValue;
                    _t15 && (u += _t15);
                  }
                  _s3.removeChild(_o5);
                }
              }
              var _n11 = _f.removedNodes,
                _o6 = _n11.length;
              if (_o6 > 0) {
                var _e12 = 0;
                for (var _r4 = 0; _r4 < _o6; _r4++) {
                  var _o7 = _n11[_r4];
                  rt(_o7, _h, t) || l === _o7
                    ? (_h.appendChild(_o7), _e12++)
                    : U(_o7) && _e12++;
                }
                _o6 !== _e12 && s.set(_2, _p);
              }
            }
          }
          if (s.size > 0)
            for (var _ref8 of s) {
              var _e13 = _ref8[0];
              var _n12 = _ref8[1];
              _n12.reconcileObservedMutation(_e13, t);
            }
          var f = n.takeRecords();
          if (f.length > 0) {
            for (var _e14 = 0; _e14 < f.length; _e14++) {
              var _n13 = f[_e14],
                _o8 = _n13.addedNodes,
                _r5 = _n13.target;
              for (var _e15 = 0; _e15 < _o8.length; _e15++) {
                var _n14 = _o8[_e15],
                  _s4 = _n14.parentNode;
                null == _s4 ||
                  "BR" !== _n14.nodeName ||
                  rt(_n14, _r5, t) ||
                  _s4.removeChild(_n14);
              }
            }
            n.takeRecords();
          }
          null !== r && (c && gl(r), a && Il(t) && r.insertRawText(u));
        });
      } finally {
        et = !1;
      }
    }
    function at(t) {
      var e = t._observer;
      if (null !== e) {
        ct(t, e.takeRecords(), e);
      }
    }
    function ut(t) {
      (!(function (t) {
        0 === nt && Wl(t).addEventListener("textInput", ot, !0);
      })(t),
        (t._observer = new MutationObserver(function (e, n) {
          ct(t, e, n);
        })));
    }
    var ft = "direct",
      dt = "latest";
    var ht = function ht(t, e) {
      ((this.key = t),
        (this.parse = e.parse.bind(e)),
        (this.unparse = (e.unparse || St).bind(e)),
        (this.isEqual = (e.isEqual || Object.is).bind(e)),
        (this.defaultValue = this.parse(void 0)),
        (this.resetOnCopyNode = e.resetOnCopyNode || !1));
    };
    function gt(t, e, n) {
      if (n === void 0) {
        n = dt;
      }
      var o = (n === dt ? t.getLatest() : t).__state;
      return o ? o.getValue(e) : e.defaultValue;
    }
    function _t(t) {
      var e = new Map(),
        n = new Set();
      for (var _ref0 of Hc("function" == typeof t ? t : t.replace)) {
        var _o9 = _ref0.ownNodeConfig;
        if (_o9 && _o9.stateConfigs)
          for (var _t16 of _o9.stateConfigs) {
            var _o0 = void 0;
            ("stateConfig" in _t16
              ? ((_o0 = _t16.stateConfig), _t16.flat && n.add(_o0.key))
              : (_o0 = _t16),
              e.set(_o0.key, _o0));
          }
      }
      return { flatKeys: n, sharedConfigMap: e };
    }
    var pt = new Set(["__proto__", "constructor", "prototype"]);
    var _mt = (function () {
      function mt(t, e, n, o, r) {
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
      var _proto5 = mt.prototype;
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
        for (var _ref10 of this.knownState) {
          var _e18 = _ref10[0];
          var _n15 = _ref10[1];
          _e18.isEqual(_n15, _e18.defaultValue)
            ? delete t[_e18.key]
            : (t[_e18.key] = _e18.unparse(_n15));
        }
        for (var _n16 of this.sharedNodeState.flatKeys)
          _n16 in t && ((e[_n16] = t[_n16]), delete t[_n16]);
        return (Ct(t) && (e.$ = t), e);
      };
      _proto5.getWritable = function getWritable(t) {
        if (this.node === t) return this;
        var e = this.sharedNodeState,
          n = this.unknownState,
          o = new Map(this.knownState);
        return new mt(
          t,
          e,
          (function (t, e, n) {
            var o;
            if (n)
              for (var _ref12 of Object.entries(n)) {
                var _r7 = _ref12[0];
                var _s5 = _ref12[1];
                {
                  if (pt.has(_r7)) continue;
                  var _n17 = t.get(_r7);
                  _n17
                    ? e.has(_n17) || e.set(_n17, _n17.parse(_s5))
                    : ((o = o || {}), (o[_r7] = _s5));
                }
              }
            return o;
          })(e.sharedConfigMap, o, n),
          o,
          this.size,
        );
      };
      _proto5.resetOnCopyNode = function resetOnCopyNode() {
        for (var _t17 of this.knownState.keys())
          _t17.resetOnCopyNode && this.knownState.set(_t17, _t17.defaultValue);
        return this;
      };
      _proto5.updateFromKnown = function updateFromKnown(t, e) {
        var n = t.key;
        this.sharedNodeState.sharedConfigMap.set(n, t);
        var o = this.knownState,
          r = this.unknownState;
        (o.has(t) ||
          (r && n in r) ||
          (r && (delete r[n], (this.unknownState = Ct(r))), this.size++),
          o.set(t, e));
      };
      _proto5.updateFromUnknown = function updateFromUnknown(t, e) {
        if (pt.has(t)) return;
        var n = this.sharedNodeState.sharedConfigMap.get(t);
        n
          ? this.updateFromKnown(n, n.parse(e))
          : ((this.unknownState = this.unknownState || {}),
            t in this.unknownState || this.size++,
            (this.unknownState[t] = e));
      };
      _proto5.updateFromJSON = function updateFromJSON(t) {
        var e = this.knownState;
        for (var _t18 of e.keys()) e.set(_t18, _t18.defaultValue);
        if (((this.size = e.size), (this.unknownState = void 0), t))
          for (var _ref14 of Object.entries(t)) {
            var _e19 = _ref14[0];
            var _n18 = _ref14[1];
            this.updateFromUnknown(_e19, _n18);
          }
      };
      return mt;
    })();
    function yt(t) {
      var e = t.getWritable(),
        n = e.__state ? e.__state.getWritable(e) : new _mt(e, xt(e));
      return ((e.__state = n), n);
    }
    function xt(t) {
      return t.__state
        ? t.__state.sharedNodeState
        : Ki(vc(), t.getType()).sharedNodeState;
    }
    function Ct(t) {
      if (t) for (var _e20 in t) return t;
    }
    function St(t) {
      return t;
    }
    function Tt(t, e, n) {
      for (var _ref16 of e.knownState) {
        var _o1 = _ref16[0];
        var _r8 = _ref16[1];
        {
          if (t.has(_o1.key)) continue;
          t.add(_o1.key);
          var _e21 = n ? n.getValue(_o1) : _o1.defaultValue;
          if (_e21 !== _r8 && !_o1.isEqual(_e21, _r8)) return !0;
        }
      }
      return !1;
    }
    function Nt(t, e, n) {
      var o = e.unknownState,
        r = n ? n.unknownState : void 0;
      if (o)
        for (var _ref18 of Object.entries(o)) {
          var _e22 = _ref18[0];
          var _n19 = _ref18[1];
          if (t.has(_e22)) continue;
          t.add(_e22);
          if (_n19 !== (r ? r[_e22] : void 0)) return !0;
        }
      return !1;
    }
    function vt(t, e) {
      var n = t.__state;
      return n && n.node === t ? n.getWritable(e) : n;
    }
    function kt(t, e) {
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
              (t && Tt(n, t, e)) ||
              (e && Tt(n, e, t)) ||
              (t && Nt(n, t, e)) ||
              (e && Nt(n, e, t))
            );
          })(c, a))
      );
    }
    function Et(t, e) {
      var n = t.mergeWithSibling(e),
        o = Ts()._normalizedNodes;
      return (o.add(t.__key), o.add(e.__key), n);
    }
    function Ot(t) {
      var e,
        n,
        o = t;
      if ("" !== o.__text || !o.isSimpleText() || o.isUnmergeable()) {
        for (
          ;
          null !== (e = o.getPreviousSibling()) &&
          sr(e) &&
          e.isSimpleText() &&
          !e.isUnmergeable();
        ) {
          if ("" !== e.__text) {
            if (kt(e, o)) {
              o = Et(e, o);
              break;
            }
            break;
          }
          e.remove();
        }
        for (
          ;
          null !== (n = o.getNextSibling()) &&
          sr(n) &&
          n.isSimpleText() &&
          !n.isUnmergeable();
        ) {
          if ("" !== n.__text) {
            if (kt(o, n)) {
              o = Et(o, n);
              break;
            }
            break;
          }
          n.remove();
        }
      } else o.remove();
    }
    function bt(t) {
      return (Mt(t.anchor), Mt(t.focus), t);
    }
    function Mt(t) {
      for (; "element" === t.type; ) {
        var _e23 = t.getNode(),
          _n20 = t.offset;
        var _o10 = void 0,
          _r9 = void 0;
        if (
          (_n20 === _e23.getChildrenSize()
            ? ((_o10 = _e23.getChildAtIndex(_n20 - 1)), (_r9 = !0))
            : ((_o10 = _e23.getChildAtIndex(_n20)), (_r9 = !1)),
          sr(_o10))
        ) {
          t.set(_o10.__key, _r9 ? _o10.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!$s(_o10)) break;
        t.set(_o10.__key, _r9 ? _o10.getChildrenSize() : 0, "element", !0);
      }
    }
    var At = Symbol["for"]("@lexical/CachedTextSize");
    function Dt(e, n) {
      return Jt.read(
        function () {
          var o = 0,
            r = e;
          for (var _e24 = 0; _e24 < n && null !== r; _e24++) {
            var _s6 = Gt.get(r);
            if ((void 0 === _s6 && t(345, r), $s(_s6))) {
              var _i5 = Vt.get(r);
              if (void 0 !== _i5 && $s(_i5) && _i5.__parent !== _s6.__parent)
                o += _s6.getTextContentSize();
              else {
                var _e25 = qt.get(r),
                  _n21 = _e25 && _e25.__lexicalTextContent;
                ("string" != typeof _n21 && t(346, _s6.getType()),
                  (o += _n21.length));
              }
              _e24 < n - 1 && !_s6.isInline() && (o += 2);
            } else {
              var _e26 = _s6[At];
              (void 0 === _e26 && t(347, _s6.getType(), r), (o += _e26));
            }
            r = _s6.__next;
          }
          return o;
        },
        { editor: Ft },
      );
    }
    function wt(t) {
      $s(t) ||
        (void 0 === t[At] &&
          (t[At] = sr(t) ? t.__text.length : t.getTextContentSize()));
    }
    var It = 4;
    var Pt,
      Ft,
      Rt,
      Lt = "",
      Kt = null,
      Bt = null,
      $t = null;
    function zt() {
      return { firstTextKey: $t, format: Kt, style: Bt };
    }
    function Wt(t) {
      null !== t.firstTextKey &&
        ((Kt = t.format), (Bt = t.style), ($t = t.firstTextKey));
    }
    function Ut(e) {
      if (null !== $t) return;
      var n = e.__lexicalFirstTextKey;
      if ((void 0 === n && t(348), null === n)) return;
      var o = Vt.get(n);
      sr(o) && ((Kt = o.getFormat()), (Bt = o.getStyle()), ($t = n));
    }
    var Ht,
      Yt,
      jt,
      Gt,
      Jt,
      Vt,
      qt,
      Xt,
      Qt,
      Zt,
      te = !1,
      ee = !1;
    function ne(t, e) {
      var n = Gt.get(t),
        o = Vt.has(t);
      if (null !== e) {
        var _n22 = be(t);
        _n22.parentNode === e && e.removeChild(_n22);
      }
      if (!o) {
        if ((Ft._keyToDOMMap["delete"](t), $s(n))) {
          var _t19 = Gc(n, Gt);
          oe(_t19, 0, _t19.length - 1, null);
        }
        if (void 0 !== n) {
          for (var _t20 of de(n).values()) {
            var _e27 = ge(_t20);
            (ne(_t20, null), null !== _e27 && _e27.remove());
          }
          Al(Qt, Rt, Ht, n, "destroyed");
        }
      }
    }
    function oe(t, e, n, o) {
      for (var _r0 = e; _r0 <= n; ++_r0) {
        var _e28 = t[_r0];
        void 0 !== _e28 && ne(_e28, o);
      }
    }
    function re(t, e) {
      t.setProperty("text-align", e);
    }
    var se = "40px";
    function ie(t, e) {
      var n = Pt.theme.indent;
      if ("string" == typeof n) {
        var _o11 = t.classList.contains(n);
        e > 0 && !_o11
          ? t.classList.add(n)
          : e < 1 && _o11 && t.classList.remove(n);
      }
      (t.style.setProperty(
        "padding-inline-start",
        0 === e
          ? ""
          : "calc(" + e + " * var(--lexical-indent-base-value, " + se + "))",
      ),
        bl(t, "class"),
        bl(t, "style"));
    }
    function le(t, e) {
      var n = t.style;
      (0 === e
        ? re(n, "")
        : 1 === e
          ? re(n, "left")
          : 2 === e
            ? re(n, "center")
            : 3 === e
              ? re(n, "right")
              : 4 === e
                ? re(n, "justify")
                : 5 === e
                  ? re(n, "start")
                  : 6 === e && re(n, "end"),
        bl(t, "style"));
    }
    function ce(t, e) {
      var n = (function (t) {
        var e = t.__dir;
        if (null !== e) return e;
        if (Ys(t)) return null;
        var n = t.getParent();
        return null === n || (jl(n) && null === n.__dir) ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function ae(t) {
      var e = ic().createElement("div");
      return (
        e.setAttribute("data-lexical-slot", t),
        (e.style.display = "none"),
        e
      );
    }
    function ue(t, e, n) {
      e || "false" === t.contentEditable
        ? Kc(n, Ft)
        : n.removeAttribute("contenteditable");
    }
    function fe(t, e, n) {
      var o = Lt,
        r = zt();
      Lt = "";
      var s = "";
      var i = Us(t);
      for (var _ref20 of n) {
        var _o12 = _ref20[0];
        var _r1 = _ref20[1];
        {
          var _n23 = ae(_o12);
          (ue(e, i, _n23), e.appendChild(_n23), (Lt = ""));
          var _l2 = zt();
          (pe(_r1, Ec(t, _n23, Ft)), Wt(_l2), he(t, _o12, e, _n23), (s += Lt));
        }
      }
      return (Wt(r), (Lt = o), s);
    }
    function de(t) {
      return qc(t) && null !== t.__slots ? t.__slots : Vc;
    }
    function he(t, e, n, o) {
      var r = Zt.$getSlotTargetElement(t, e, n, Ft);
      null !== r &&
        (o.parentElement !== r && r.appendChild(o), (o.style.display = ""));
    }
    function ge(t) {
      var e = qt.get(t);
      return void 0 !== e ? e.parentElement : null;
    }
    function _e(t, e, n) {
      var o = de(t),
        r = de(e);
      for (var _ref22 of o) {
        var _t21 = _ref22[0];
        var _e29 = _ref22[1];
        if (!r.has(_t21)) {
          var _t22 = ge(_e29);
          (ne(_e29, null), null !== _t22 && _t22.remove());
        }
      }
      var s = Lt,
        i = zt();
      var l = "",
        c = null;
      var a = Us(e);
      for (var _ref24 of r) {
        var _t23 = _ref24[0];
        var _s7 = _ref24[1];
        {
          var _r10 = o.get(_t23);
          var _i6 = void 0 !== _r10 ? ge(_r10) : null;
          Lt = "";
          var _u = zt();
          if (null === _i6) {
            _i6 = ae(_t23);
            var _o13 = null;
            for (var _t24 of n.children)
              if (!_t24.hasAttribute("data-lexical-slot")) {
                _o13 = _t24;
                break;
              }
            (n.insertBefore(_i6, _o13), pe(_s7, Ec(e, _i6, Ft)));
          } else
            _r10 === _s7
              ? Ne(_s7, _i6)
              : (void 0 !== _r10 && ne(_r10, _i6), pe(_s7, Ec(e, _i6, Ft)));
          if (
            (Wt(_u),
            ue(n, a, _i6),
            he(e, _t23, n, _i6),
            (l += Lt),
            _i6.parentElement === n)
          ) {
            var _t25 = null === c ? n.firstChild : c.nextSibling;
            (_t25 !== _i6 && n.insertBefore(_i6, _t25), (c = _i6));
          }
        }
      }
      return (Wt(i), (Lt = s), l);
    }
    function pe(e, n) {
      var o = Vt.get(e);
      if ((void 0 === o && t(60), null !== n)) {
        var _t26 = Gt.get(e);
        if (void 0 !== _t26) {
          var _r11 = qt.get(e);
          if (void 0 !== _r11) {
            var _s8 = Xc(_t26) ? _t26.__slotHost : null,
              _i7 = Xc(o) ? o.__slotHost : null,
              _l3 = _t26.__parent !== o.__parent || _s8 !== _i7,
              _c2 = null !== _i7 && _r11.parentElement !== n.element;
            if (_l3 || _c2) return (n.insertChild(_r11), Ne(e, n.element));
          }
        }
      }
      var r = Zt.$createDOM(o, Ft);
      if (
        ((function (t, e, n) {
          var o = n._keyToDOMMap;
          (ll(e, n, t), o.set(t, e));
        })(e, r, Ft),
        sr(o)
          ? r.setAttribute("data-lexical-text", "true")
          : Us(o) &&
            (r.setAttribute("data-lexical-decorator", "true"),
            Rc(r, { captureSelection: !0 })),
        $s(o))
      ) {
        var _t27 = o.__indent,
          _e30 = o.__size;
        (ce(r, o), 0 !== _t27 && ie(r, _t27));
        var _n24 = de(o),
          _s9 = _n24.size > 0 ? fe(o, r, _n24) : "";
        if (0 === _e30)
          ((r.__lexicalTextContent = _s9),
            (r.__lexicalFirstTextKey = null),
            (Lt += _s9),
            _n24.size > 0 && (r.__lexicalSlotTextLength = _s9.length));
        else {
          var _t28 = Lt,
            _i8 = _e30 - 1;
          if ((me(Gc(o, Vt), o, 0, _i8, Ec(o, r, Ft)), "" !== _s9)) {
            var _e31 = r.__lexicalTextContent || "";
            ((r.__lexicalTextContent = _s9 + _e31), (Lt = _t28 + _s9 + _e31));
          }
          _n24.size > 0 && (r.__lexicalSlotTextLength = _s9.length);
        }
        var _i9 = o.__format;
        (0 !== _i9 && le(r, _i9), o.isInline() || (Ce(null, o, r), xe(o, r)));
      } else {
        var _t29 = o.getTextContent();
        if (Us(o)) {
          var _t30 = o.decorate(Ft, Pt);
          (null !== _t30 && ve(e, _t30), (r.contentEditable = "false"));
          var _n25 = de(o);
          _n25.size > 0 && fe(o, r, _n25);
        }
        Lt += _t29;
      }
      return (
        null !== n && n.insertChild(r),
        Zt.$decorateDOM(o, null, r, Ft),
        wt(o),
        Al(Qt, Rt, Ht, o, "created"),
        r
      );
    }
    function me(e, n, o, r, s) {
      var i = Lt,
        l = zt();
      ((Lt = ""), (Kt = null), (Bt = null), ($t = null));
      var c = o;
      for (; c <= r; ++c) {
        var _t31 = zt();
        pe(e[c], s);
        var _n26 = Vt.get(e[c]);
        (null !== _n26 && sr(_n26)
          ? null === Kt &&
            ((Kt = _n26.getFormat()), (Bt = _n26.getStyle()), ($t = _n26.__key))
          : $s(_n26) && c < r && !_n26.isInline() && (Lt += N),
          Wt(_t31));
      }
      var a = Ft._keyToDOMMap.get(n.__key);
      (void 0 === a && t(349, n.__key),
        (a.__lexicalTextContent = Lt),
        (a.__lexicalFirstTextKey = $t),
        (Lt = i + Lt),
        Wt(l));
    }
    function ye(t, e) {
      if (!t) return !1;
      var n = e.get(t);
      return Us(n) && !n.isInline();
    }
    function xe(t, e) {
      var n = Ec(t, e, Ft);
      (n.setDecoratorBoundaryAnchor("leading", ye(t.__first, Vt)),
        n.setDecoratorBoundaryAnchor("trailing", ye(t.__last, Vt)));
    }
    function Ce(t, e, n) {
      var o = Ec(e, n, Ft),
        r = (function (t, e) {
          if (t) {
            var _n27 = t.__last;
            if (_n27) {
              var _t32 = e.get(_n27);
              if (_t32)
                return ti(_t32)
                  ? "line-break"
                  : Us(_t32) && _t32.isInline()
                    ? "decorator"
                    : null;
            }
            return "empty";
          }
          return null;
        })(e, Vt);
      o.setManagedLineBreak(r);
    }
    function Se(e, n, o) {
      var r;
      ((Kt = null),
        (Bt = null),
        ($t = null),
        (function (e, n, o) {
          var r = Lt,
            s = e.__size,
            i = n.__size;
          Lt = "";
          var l = o.element,
            c = Ft._keyToDOMMap.get(n.__key);
          void 0 === c && t(351, n.__key);
          var a = i - s;
          if (
            !te &&
            Math.abs(a) <= 1 &&
            s >= It &&
            e.__first === n.__first &&
            (0 !== a || !Ft._cloneNotNeeded.has(e.__key))
          ) {
            var _s0 = c.__lexicalTextContent,
              _u2 = Xt.get(e.__key);
            if (!te && "string" == typeof _s0 && void 0 !== _u2) {
              var _i0 = (function (t, e) {
                var n = e.size;
                if (0 === n || n >= t.__size) return null;
                var o = t.__last,
                  r = null,
                  s = 0;
                for (; null !== o && s < n; ) {
                  if (!e.has(o)) return null;
                  r = o;
                  var _t33 = Vt.get(o);
                  if (void 0 === _t33) return null;
                  ((o = _t33.__prev), s++);
                }
                if (s !== n) return null;
                if (null !== o && e.has(o)) return null;
                return r;
              })(n, _u2);
              if (null !== _i0) {
                var _f2 = _u2.size;
                if (0 === a) {
                  var _e32 = Dt(_i0, _f2);
                  var _o14 = _i0,
                    _a2 = 0;
                  for (; null !== _o14 && _a2 < _f2; ) {
                    var _t34 = Vt.get(_o14);
                    if (void 0 === _t34) break;
                    var _e33 = zt();
                    (Ne(_o14, l),
                      sr(_t34) &&
                        null === Kt &&
                        ((Kt = _t34.getFormat()),
                        (Bt = _t34.getStyle()),
                        ($t = _t34.__key)),
                      Wt(_e33),
                      (_o14 = _t34.__next),
                      _a2++);
                  }
                  var _d2 = "";
                  for (_o14 = _i0, _a2 = 0; null !== _o14 && _a2 < _f2; ) {
                    var _e34 = Vt.get(_o14);
                    if (void 0 === _e34) break;
                    var _n28 = void 0;
                    if ($s(_e34)) {
                      var _r12 = Ft._keyToDOMMap.get(_o14),
                        _s1 = _r12 && _r12.__lexicalTextContent;
                      ("string" != typeof _s1 && t(352, _e34.getType()),
                        (_n28 = _s1));
                    } else _n28 = _e34.getTextContent();
                    ((_d2 += _n28),
                      _a2 < _f2 - 1 &&
                        $s(_e34) &&
                        !_e34.isInline() &&
                        (_d2 += N),
                      (_o14 = _e34.__next),
                      _a2++);
                  }
                  var _h2 = c.__lexicalSlotTextLength || 0,
                    _g2 = _h2 > 0 ? _s0.slice(_h2) : _s0,
                    _3 = _g2.slice(0, _g2.length - _e32) + _d2;
                  return (
                    (c.__lexicalTextContent = _3),
                    (Lt = r + _3),
                    void Te(n, c, _u2)
                  );
                }
                if (
                  (function (e, n, o, r, s, i, l, c) {
                    if (1 !== c && -1 !== c) return !1;
                    var a = 1 === c ? 2 : 1;
                    if (l !== a) return !1;
                    var u = l - c;
                    var f = e.__last;
                    for (var _t35 = 0; _t35 < u - 1; _t35++) {
                      if (null === f) return !1;
                      var _t36 = Gt.get(f);
                      if (void 0 === _t36) return !1;
                      f = _t36.__prev;
                    }
                    if (null === f) return !1;
                    var d = Vt.get(i),
                      h = Gt.get(f);
                    if (void 0 === d || void 0 === h) return !1;
                    if (d.__prev !== h.__prev) return !1;
                    var g = [];
                    var _ = i;
                    for (var _t37 = 0; _t37 < l; _t37++) {
                      if (null === _) return !1;
                      g.push(_);
                      var _t38 = Vt.get(_);
                      _ = _t38 ? _t38.__next : null;
                    }
                    var p = [];
                    _ = f;
                    for (var _t39 = 0; _t39 < u; _t39++) {
                      if (null === _) return !1;
                      p.push(_);
                      var _t40 = Gt.get(_);
                      _ = _t40 ? _t40.__next : null;
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
                    var T = Dt(f, u);
                    for (var _t41 of x) {
                      var _e35 = zt();
                      if ("reconcile" === _t41.kind) Ne(_t41.key, o.element);
                      else if ("destroy" === _t41.kind) ne(_t41.key, o.element);
                      else {
                        var _e36 = null;
                        for (var _n29 = _t41.nextIndex + 1; _n29 < l; _n29++) {
                          var _t42 = Ft._keyToDOMMap.get(g[_n29]);
                          if (void 0 !== _t42) {
                            _e36 = _t42;
                            break;
                          }
                        }
                        pe(
                          _t41.key,
                          o.withBefore(_e36 != null ? _e36 : o.before),
                        );
                      }
                      if ("destroy" !== _t41.kind) {
                        var _e37 = Vt.get(_t41.key);
                        _e37 &&
                          sr(_e37) &&
                          null === Kt &&
                          ((Kt = _e37.getFormat()),
                          (Bt = _e37.getStyle()),
                          ($t = _e37.__key));
                      }
                      Wt(_e35);
                    }
                    var v = "";
                    for (var _e38 = 0; _e38 < l; _e38++) {
                      var _n30 = Vt.get(g[_e38]);
                      if (void 0 === _n30) return !1;
                      var _o15 = void 0;
                      if ($s(_n30)) {
                        var _r13 = Ft._keyToDOMMap.get(g[_e38]),
                          _s10 = _r13 && _r13.__lexicalTextContent;
                        ("string" != typeof _s10 && t(350, _n30.getType()),
                          (_o15 = _s10));
                      } else _o15 = _n30.getTextContent();
                      ((v += _o15),
                        _e38 < l - 1 &&
                          $s(_n30) &&
                          !_n30.isInline() &&
                          (v += N));
                    }
                    var k = r.__lexicalSlotTextLength || 0,
                      E = k > 0 ? s.slice(k) : s;
                    return (
                      (r.__lexicalTextContent = E.slice(0, E.length - T) + v),
                      !0
                    );
                  })(e, 0, o, c, _s0, _i0, _f2, a)
                ) {
                  var _e39 = c.__lexicalTextContent;
                  return (
                    "string" != typeof _e39 && t(353),
                    (Lt = r + _e39),
                    void Te(n, c, _u2)
                  );
                }
              }
            }
            if (0 === a) {
              var _n31 = e.__first,
                _o16 = 0;
              for (; null !== _n31; ) {
                var _e40 = Vt.get(_n31);
                if (void 0 === _e40) break;
                var _r14 = te || jt.has(_n31) || Yt.has(_n31),
                  _s11 = zt();
                if (_r14) Ne(_n31, l);
                else {
                  var _o17 = void 0,
                    _r15 = void 0;
                  if ($s(_e40)) {
                    _r15 = qt.get(_n31);
                    var _s12 = _r15 && _r15.__lexicalTextContent;
                    ("string" != typeof _s12 && t(354, _e40.getType()),
                      (_o17 = _s12));
                  } else _o17 = _e40.getTextContent();
                  ((Lt += _o17), void 0 !== _r15 && Ut(_r15));
                }
                (sr(_e40)
                  ? null === Kt &&
                    ((Kt = _e40.getFormat()),
                    (Bt = _e40.getStyle()),
                    ($t = _e40.__key))
                  : $s(_e40) && _o16 < i - 1 && !_e40.isInline() && (Lt += N),
                  Wt(_s11),
                  (_n31 = _e40.__next),
                  _o16++);
              }
              return (
                (c.__lexicalTextContent = Lt),
                (c.__lexicalFirstTextKey = $t),
                void (Lt = r + Lt)
              );
            }
          }
          if (1 === s && 1 === i) {
            var _t43 = e.__first,
              _r16 = n.__first;
            if (_t43 === _r16) Ne(_t43, l);
            else {
              var _e41 = be(_t43),
                _n32 = pe(_r16, null);
              try {
                _e41.parentNode === l
                  ? l.replaceChild(_n32, _e41)
                  : o.insertChild(_n32);
              } catch (o) {
                if ("object" == typeof o && null != o) {
                  var _s13 =
                    o.toString() +
                    " Parent: " +
                    l.tagName +
                    ", new child: {tag: " +
                    _n32.tagName +
                    " key: " +
                    _r16 +
                    "}, old child: {tag: " +
                    _e41.tagName +
                    ", key: " +
                    _t43 +
                    "}.";
                  throw new Error(_s13);
                }
                throw o;
              }
              ne(_t43, null);
            }
            var _s14 = Vt.get(_r16);
            sr(_s14) &&
              null === Kt &&
              ((Kt = _s14.getFormat()),
              (Bt = _s14.getStyle()),
              ($t = _s14.__key));
          } else {
            var _r17 = Gc(e, Gt),
              _c3 = Gc(n, Vt);
            if (
              (_r17.length !== s && t(227), _c3.length !== i && t(228), 0 === s)
            )
              0 !== i && me(_c3, n, 0, i - 1, o);
            else if (0 === i) {
              if (0 !== s) {
                var _t44 =
                  null == o.after &&
                  null == o.before &&
                  0 === de(n).size &&
                  null == o.element.__lexicalLineBreak;
                (oe(_r17, 0, s - 1, _t44 ? null : l),
                  _t44 && (l.textContent = ""));
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
                  var _t45 = e[f],
                    _o18 = n[d],
                    _r18 = zt();
                  if (_t45 === _o18) ((u = ke(Ne(_o18, s.element))), f++, d++);
                  else {
                    if ((void 0 === a && (a = Ee(n, d)), void 0 === c))
                      c = Ee(e, f);
                    else if (!c.has(_t45)) {
                      (f++, Wt(_r18));
                      continue;
                    }
                    if (!a.has(_t45)) {
                      ((u = ke(be(_t45))),
                        ne(_t45, s.element),
                        f++,
                        c["delete"](_t45),
                        Wt(_r18));
                      continue;
                    }
                    if (c.has(_o18)) {
                      var _t46 = Fl(Ft, _o18);
                      (_t46 !== u &&
                        s
                          .withBefore(u != null ? u : s.before)
                          .insertChild(_t46),
                        (u = ke(Ne(_o18, s.element))),
                        f++,
                        d++);
                    } else
                      (pe(_o18, s.withBefore(u != null ? u : s.before)), d++);
                  }
                  var _i1 = Vt.get(_o18);
                  (null !== _i1 && sr(_i1)
                    ? null === Kt &&
                      ((Kt = _i1.getFormat()),
                      (Bt = _i1.getStyle()),
                      ($t = _i1.__key))
                    : $s(_i1) && d <= l && !_i1.isInline() && (Lt += N),
                    Wt(_r18));
                }
                var h = f > i,
                  g = d > l;
                if (h && !g) {
                  var _e42 = n[l + 1],
                    _o19 = void 0 === _e42 ? null : Ft.getElementByKey(_e42);
                  me(n, t, d, l, s.withBefore(_o19 != null ? _o19 : s.before));
                } else g && !h && oe(e, f, i, s.element);
              })(n, _r17, _c3, s, i, o);
          }
          ((c.__lexicalTextContent = Lt),
            (c.__lexicalFirstTextKey = $t),
            (Lt = r + Lt));
        })(e, n, Ec(n, o, Ft)),
        jl(n) ||
          ((r = n),
          null == Kt || Kt === r.__textFormat || ee || r.setTextFormat(Kt),
          (function (t) {
            null == Bt || Bt === t.__textStyle || ee || t.setTextStyle(Bt);
          })(n)));
    }
    function Te(t, e, n) {
      var o = e.__lexicalFirstTextKey;
      if (null != o) {
        var _e43 = t.__key;
        var _r19 = o;
        for (; null !== _r19; ) {
          var _t47 = Vt.get(_r19);
          if (void 0 === _t47) {
            _r19 = null;
            break;
          }
          if (_t47.__parent === _e43) break;
          _r19 = _t47.__parent;
        }
        if (null !== _r19 && !n.has(_r19)) {
          var _t48 = Vt.get(o);
          if (sr(_t48))
            return ((Kt = _t48.getFormat()), void (Bt = _t48.getStyle()));
        }
      }
      e.__lexicalFirstTextKey = $t;
    }
    function Ne(e, n) {
      var o = Gt.get(e);
      var r = Vt.get(e);
      (void 0 !== o && void 0 !== r) || t(61);
      var s = te || jt.has(e) || Yt.has(e),
        i = Fl(Ft, e);
      if (o === r && !s) {
        var _e44;
        if ($s(o)) {
          var _n33 = i.__lexicalTextContent;
          ("string" != typeof _n33 && t(355, o.getType()),
            (_e44 = _n33),
            Ut(i));
        } else _e44 = o.getTextContent();
        return ((Lt += _e44), i);
      }
      if (
        (o !== r && s && Al(Qt, Rt, Ht, r, "updated"),
        Zt.$updateDOM(r, o, i, Ft))
      ) {
        var _o20 = pe(e, null);
        return (
          null === n && t(62),
          n.replaceChild(_o20, i),
          ne(e, null),
          _o20
        );
      }
      if ($s(o)) {
        $s(r) || t(334, e);
        var _n34 = r.__indent;
        (te || _n34 !== o.__indent) && ie(i, _n34);
        var _l4 = r.__format;
        (te || _l4 !== o.__format) && le(i, _l4);
        var _c4 = s && (de(r).size > 0 || de(o).size > 0) ? _e(o, r, i) : "";
        if (s) {
          var _t49 = Lt;
          if (
            (Se(o, r, i),
            r.isInline() || (Ys(r) || Ce(0, r, i), xe(r, i)),
            "" !== _c4)
          ) {
            var _e45 = i.__lexicalTextContent || "";
            ((i.__lexicalTextContent = _c4 + _e45),
              (Lt = _t49 + _c4 + _e45),
              (i.__lexicalSlotTextLength = _c4.length));
          } else
            (de(r).size > 0 || de(o).size > 0) &&
              (i.__lexicalSlotTextLength = 0);
        } else {
          var _e46 = i.__lexicalTextContent;
          ("string" != typeof _e46 && t(356, o.getType()), (Lt += _e46), Ut(i));
        }
        if (
          (te || r.__dir !== o.__dir || r.__parent !== o.__parent) &&
          (ce(i, r), Ys(r) && !te)
        )
          for (var _t50 of r.getChildren())
            if ($s(_t50)) {
              ce(Fl(Ft, _t50.getKey()), _t50);
            }
      } else {
        var _t51 = r.getTextContent();
        if (Us(r)) {
          var _t52 = r.decorate(Ft, Pt);
          (null !== _t52 && ve(e, _t52),
            s && (de(r).size > 0 || de(o).size > 0) && _e(o, r, i));
        }
        Lt += _t51;
      }
      if (!ee && Ys(r)) {
        var _t53 = r.getLatest();
        if (_t53.__cachedText !== Lt) {
          var _e47 = _t53.getWritable();
          ((_e47.__cachedText = Lt), (r = _e47));
        }
      }
      return (Zt.$decorateDOM(r, o, i, Ft), wt(r), i);
    }
    function ve(t, e) {
      var n = Ft._pendingDecorators;
      var o = Ft._decorators;
      if (null === n) {
        if (o[t] === e) return;
        n = ul(Ft);
      }
      n[t] = e;
    }
    function ke(t) {
      var e = t.nextSibling;
      return (
        null !== e && e === Ft._blockCursorElement && (e = e.nextSibling),
        e
      );
    }
    function Ee(t, e) {
      var n = new Set();
      for (var _o21 = e; _o21 < t.length; _o21++) n.add(t[_o21]);
      return n;
    }
    function Oe(t, e, n, o, r, s) {
      ((Lt = ""),
        (Kt = null),
        (Bt = null),
        ($t = null),
        (te = 2 === o),
        (Ft = n),
        (Pt = n._config),
        (Zt = n._config.dom || Ai),
        (Rt = n._nodes),
        (Ht = Ft._listeners.mutation),
        (Yt = r),
        (jt = s),
        (Gt = t._nodeMap),
        (Jt = t),
        (Vt = e._nodeMap),
        (ee = e._readOnly),
        (qt = Q(n._keyToDOMMap)),
        (Xt = (function () {
          var t = new Map(),
            e = function e(_e49) {
              for (var _n35 of _e49) {
                var _e48 = Vt.get(_n35);
                if (void 0 === _e48) continue;
                var _o22 = _e48.__parent;
                if (null === _o22) continue;
                var _r20 = t.get(_o22);
                (void 0 === _r20 && ((_r20 = new Set()), t.set(_o22, _r20)),
                  _r20.add(_n35));
              }
            };
          return (e(Yt.keys()), e(jt), t);
        })()));
      var i = new Map();
      return (
        (Qt = i),
        Ne("root", null),
        (Ft = void 0),
        (Rt = void 0),
        (Yt = void 0),
        (jt = void 0),
        (Gt = void 0),
        (Jt = void 0),
        (Vt = void 0),
        (Pt = void 0),
        (qt = void 0),
        (Xt = void 0),
        (Qt = void 0),
        (Zt = Ai),
        i
      );
    }
    function be(e) {
      var n = qt.get(e);
      return (void 0 === n && t(75, e), n);
    }
    function Me(t) {
      return function () {};
    }
    function Ae(t) {
      return { type: t };
    }
    var De = Ae("SELECTION_CHANGE_COMMAND"),
      we = Ae("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"),
      Ie = Ae("CLICK_COMMAND"),
      Pe = Ae("BEFORE_INPUT_COMMAND"),
      Fe = Ae("INPUT_COMMAND"),
      Re = Ae("COMPOSITION_START_COMMAND"),
      Le = Ae("COMPOSITION_END_COMMAND"),
      Ke = Ae("DELETE_CHARACTER_COMMAND"),
      Be = Ae("INSERT_LINE_BREAK_COMMAND"),
      $e = Ae("INSERT_PARAGRAPH_COMMAND"),
      ze = Ae("CONTROLLED_TEXT_INSERTION_COMMAND"),
      We = Ae("PASTE_COMMAND"),
      Ue = Ae("REMOVE_TEXT_COMMAND"),
      He = Ae("DELETE_WORD_COMMAND"),
      Ye = Ae("DELETE_LINE_COMMAND"),
      je = Ae("FORMAT_TEXT_COMMAND"),
      Ge = Ae("SET_TEXT_FORMAT_COMMAND"),
      Je = Ae("UNDO_COMMAND"),
      Ve = Ae("REDO_COMMAND"),
      qe = Ae("KEYDOWN_COMMAND"),
      Xe = Ae("KEY_ARROW_RIGHT_COMMAND"),
      Qe = Ae("MOVE_TO_END"),
      Ze = Ae("KEY_ARROW_LEFT_COMMAND"),
      tn = Ae("MOVE_TO_START"),
      en = Ae("KEY_ARROW_UP_COMMAND"),
      nn = Ae("KEY_ARROW_DOWN_COMMAND"),
      on = Ae("KEY_ENTER_COMMAND"),
      rn = Ae("KEY_SPACE_COMMAND"),
      sn = Ae("KEY_BACKSPACE_COMMAND"),
      ln = Ae("KEY_ESCAPE_COMMAND"),
      cn = Ae("KEY_DELETE_COMMAND"),
      an = Ae("KEY_TAB_COMMAND"),
      un = Ae("INSERT_TAB_COMMAND"),
      fn = Ae("INDENT_CONTENT_COMMAND"),
      dn = Ae("OUTDENT_CONTENT_COMMAND"),
      hn = Ae("DROP_COMMAND"),
      gn = Ae("FORMAT_ELEMENT_COMMAND"),
      _n = Ae("DRAGSTART_COMMAND"),
      pn = Ae("DRAGOVER_COMMAND"),
      mn = Ae("DRAGEND_COMMAND"),
      yn = Ae("COPY_COMMAND"),
      xn = Ae("CUT_COMMAND"),
      Cn = Ae("SELECT_ALL_COMMAND"),
      Sn = Ae("CLEAR_EDITOR_COMMAND"),
      Tn = Ae("CLEAR_HISTORY_COMMAND"),
      Nn = Ae("CAN_REDO_COMMAND"),
      vn = Ae("CAN_UNDO_COMMAND"),
      kn = Ae("FOCUS_COMMAND"),
      En = Ae("BLUR_COMMAND"),
      On = Ae("KEY_MODIFIER_COMMAND");
    function bn(t, e) {
      var _babelHelpers$extends;
      return babelHelpers["extends"](
        {},
        e,
        ((_babelHelpers$extends = {}),
        (_babelHelpers$extends[L] = t),
        _babelHelpers$extends),
      );
    }
    var Mn = bn("metaKey", { ctrlKey: !c, metaKey: c }),
      An = bn("altKey", { altKey: c, ctrlKey: !c }),
      Dn = [
        ["altKey", 1],
        ["ctrlKey", 2],
        ["metaKey", 4],
        ["shiftKey", 8],
      ];
    function wn(t, e, n) {
      var o = t.get(e);
      o ? o.push(n) : t.set(e, [n]);
    }
    var _In = (function () {
      function In() {
        this.byKey = new Map();
        this.byCode = new Map();
      }
      var _proto6 = In.prototype;
      _proto6.add = function add(e) {
        var n = e.key,
          _e$modifiers = e.modifiers,
          o = _e$modifiers === void 0 ? {} : _e$modifiers;
        n.length > 0 || t(399);
        var r = n.toLowerCase();
        for (var _t54 of (function (t) {
          var e = [0];
          var _loop = function _loop() {
            var n = _ref26[0];
            var o = _ref26[1];
            {
              var _r21 = t[n] || !1;
              "any" === _r21
                ? (e = e.concat(
                    e.map(function (t) {
                      return t | o;
                    }),
                  ))
                : _r21 &&
                  (e = e.map(function (t) {
                    return t | o;
                  }));
            }
          };
          for (var _ref26 of Dn) {
            _loop();
          }
          return e;
        })(o))
          (wn(this.byKey, _t54 + ":" + r, e),
            1 === n.length &&
              (/[0-9]/.test(n)
                ? wn(this.byCode, _t54 + ":Digit" + n, e)
                : /[a-z]/.test(r) &&
                  wn(this.byCode, _t54 + ":Key" + r.toUpperCase(), e)));
        return this;
      };
      _proto6.matches = function matches(t) {
        var e = t.key;
        if (!e) return [];
        var n = (function (t) {
            var e = 0;
            for (var _ref28 of Dn) {
              var _n36 = _ref28[0];
              var _o23 = _ref28[1];
              t[_n36] && (e |= _o23);
            }
            return e;
          })(t),
          o = this.byKey.get(n + ":" + e.toLowerCase()),
          r = o ? o.slice() : [];
        if (
          this.byCode.size > 0 &&
          !(1 === e.length && e.charCodeAt(0) <= 127)
        ) {
          var _e50 = this.byCode.get(n + ":" + t.code);
          _e50 && r.push.apply(r, _e50);
        }
        return r;
      };
      _proto6.match = function match(t) {
        return this.matches(t)[0];
      };
      return In;
    })();
    function Pn(t) {
      var e = new _In();
      for (var _n37 of t) e.add(_n37);
      return e;
    }
    function Fn(t) {
      var e = new Map();
      return {
        dispose: function dispose() {
          for (var _t55 of e.values()) _t55.dispose();
          e.clear();
        },
        register: function register(n, o) {
          var r = e.get(n);
          void 0 === r &&
            ((r = { dispose: t(n, o), holders: new Set() }), e.set(n, r));
          var _s15 = function s() {
            var t = e.get(n);
            t &&
              t.holders["delete"](_s15) &&
              0 === t.holders.size &&
              (e["delete"](n), t.dispose());
          };
          return (r.holders.add(_s15), _s15);
        },
      };
    }
    function Rn(t, e, n, o) {
      return (
        t.addEventListener(e, n, o),
        t.removeEventListener.bind(t, e, n, o)
      );
    }
    var Ln = Object.freeze({});
    var Kn;
    function Bn() {
      if (void 0 !== Kn) return Kn;
      var t = [
        ["keydown", uo],
        ["pointerdown", Vn],
        ["compositionstart", ro],
        ["compositionend", ao],
        ["input", no],
        ["click", Jn],
        ["cut", Ln],
        ["copy", Ln],
        ["dragstart", Ln],
        ["dragover", Ln],
        ["dragend", Ln],
        ["paste", Ln],
        ["focus", Ln],
        ["blur", Ln],
        ["drop", Ln],
      ];
      return (
        f &&
          t.push([
            "beforeinput",
            function (t, e) {
              return (function (t, e) {
                var n = t.inputType;
                if ("deleteCompositionText" === n || (a && Il(e))) return;
                if ("insertCompositionText" === n) return;
                Ls(
                  e,
                  function () {
                    to(t, e) || Pl(e, Pe, t);
                  },
                  { event: t },
                );
              })(t, e);
            },
          ]),
        (Kn = t),
        t
      );
    }
    var $n = new WeakMap(),
      zn = new WeakMap(),
      Wn = Fn(function (t) {
        return (
          t.addEventListener("selectionchange", Co),
          function () {
            return t.removeEventListener("selectionchange", Co);
          }
        );
      });
    function Un(t, e, n, o, r, s) {
      var i = t.anchor,
        l = t.focus,
        c = i.getNode(),
        a = Ts();
      var u;
      if (void 0 !== s) u = s;
      else {
        var _t56 = Zl(Wl(a));
        u = null !== _t56 ? ac(_t56, a._rootElement) : null;
      }
      var d = null !== u ? u.anchorNode : null,
        h = i.key,
        g = a.getElementByKey(h),
        _ = n.length;
      return (
        h !== l.key ||
        !sr(c) ||
        (((!r &&
          (!f || a._inputState.lastBeforeInputInsertTextTimeStamp < o + 50)) ||
          (c.isDirty() && _ < 2) ||
          ml(n)) &&
          i.offset !== l.offset &&
          !c.isComposing()) ||
        Ji(c) ||
        (c.isDirty() && _ > 1) ||
        ((r || !f) && null !== g && !c.isComposing() && d !== bc(c, g, a)) ||
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
            o = e.getParentOrThrow(),
            r = Gi(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!o.canInsertTextBefore() && !e.isComposing()) ||
                r ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (sr(e) || ($s(e) && e.isInline())) &&
                    !e.canInsertTextAfter()
                  );
                })(e)
            : n === e.getTextContentSize() &&
                (!e.canInsertTextAfter() ||
                  (!o.canInsertTextAfter() && !e.isComposing()) ||
                  r);
        })(t, c)
      );
    }
    function Hn(t, e) {
      return (
        Vi(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function Yn(e, n, o) {
      var _ac = ac(e, n._rootElement),
        r = _ac.anchorNode,
        s = _ac.anchorOffset,
        i = _ac.focusNode,
        l = _ac.focusOffset,
        c = n._inputState;
      if (c.isSelectionChangeFromDOMUpdate) {
        c.isSelectionChangeFromDOMUpdate = !1;
        var _t57 = c.selectionChangeFromDOMUpdatePoints;
        if (
          ((c.selectionChangeFromDOMUpdatePoints = null),
          Hn(r, s) &&
            Hn(i, l) &&
            !c.postDeleteSelectionToRestore &&
            (null === _t57 ||
              (_t57.anchorNode === r &&
                _t57.anchorOffset === s &&
                _t57.focusNode === i &&
                _t57.focusOffset === l)))
        )
          return;
      }
      Ls(n, function () {
        if (!o) return void gl(null);
        if (!Ui(n, r, i)) return;
        var a = jr();
        if (c.postDeleteSelectionToRestore && xr(a) && a.isCollapsed()) {
          var _t58 = a.anchor,
            _e51 = c.postDeleteSelectionToRestore.anchor;
          ((_t58.key === _e51.key && _t58.offset === _e51.offset + 1) ||
            (1 === _t58.offset &&
              _e51.getNode().is(_t58.getNode().getPreviousSibling()))) &&
            ((a = c.postDeleteSelectionToRestore.clone()), gl(a));
        }
        if (((c.postDeleteSelectionToRestore = null), xr(a))) {
          var _o24 = a.anchor,
            _u3 = _o24.getNode();
          if (a.isCollapsed()) {
            "Range" === e.type && r === i && (a.dirty = !0);
            var _s16 = Wl(n).event,
              _l5 = _s16 ? _s16.timeStamp : performance.now(),
              _c$collapsedSelection = c.collapsedSelectionFormat,
              _f3 = _c$collapsedSelection.format,
              _d3 = _c$collapsedSelection.style,
              _h3 = _c$collapsedSelection.offset,
              _g3 = _c$collapsedSelection.key,
              _4 = _c$collapsedSelection.timeStamp,
              _p2 = dl(),
              _m = !1 === n.isComposing() && "" === _p2.getTextContent();
            if (_l5 < _4 + 200 && _o24.offset === _h3 && _o24.key === _g3)
              jn(a, _f3, _d3);
            else if ("text" === _o24.type) (sr(_u3) || t(141), Gn(a, _u3));
            else if ("element" === _o24.type && !_m) {
              $s(_u3) || t(259);
              var _e52 = _o24.getNode();
              _e52.isEmpty()
                ? (function (t, e) {
                    var n = e.getTextFormat(),
                      o = e.getTextStyle();
                    jn(t, n, o);
                  })(a, _e52)
                : jn(a, a.format, "");
            }
          } else {
            var _t59 = _o24.key,
              _e53 = a.focus.key,
              _n38 = a.getNodes(),
              _r22 = _n38.length,
              _i10 = a.isBackward(),
              _c5 = _i10 ? l : s,
              _u4 = _i10 ? s : l,
              _f4 = _i10 ? _e53 : _t59,
              _d4 = _i10 ? _t59 : _e53;
            var _h4 = S,
              _g4 = !1;
            for (var _t60 = 0; _t60 < _r22; _t60++) {
              var _e54 = _n38[_t60],
                _o25 = _e54.getTextContentSize();
              if (
                sr(_e54) &&
                0 !== _o25 &&
                !(
                  (0 === _t60 && _e54.__key === _f4 && _c5 === _o25) ||
                  (_t60 === _r22 - 1 && _e54.__key === _d4 && 0 === _u4)
                ) &&
                ((_g4 = !0), (_h4 &= _e54.getFormat()), 0 === _h4)
              )
                break;
            }
            a.format = _g4 ? _h4 : 0;
          }
        }
        Pl(n, De);
      });
    }
    function jn(t, e, n) {
      (t.format === e && t.style === n) ||
        ((t.format = e), (t.style = n), (t.dirty = !0));
    }
    function Gn(t, e) {
      jn(t, e.getFormat(), e.getStyle());
    }
    function Jn(t, e) {
      Ls(e, function () {
        var n = jr(),
          o = Zl(Wl(e)),
          r = Gr();
        if (o)
          if (xr(n)) {
            var _t61 = n.anchor,
              _e55 = _t61.getNode();
            "element" === _t61.type &&
              0 === _t61.offset &&
              n.isCollapsed() &&
              !Ys(_e55) &&
              1 === dl().getChildrenSize() &&
              _e55.getTopLevelElementOrThrow().isEmpty() &&
              null !== r &&
              n.is(r) &&
              (o.removeAllRanges(), (n.dirty = !0));
          } else if ("touch" === t.pointerType || "pen" === t.pointerType) {
            var _n39 = ac(o, e._rootElement).anchorNode;
            if (pc(_n39) || Vi(_n39)) {
              gl(Yr(r, o, e, t));
            }
          }
        if (a && null !== o && 0 === o.rangeCount) {
          var _n40 = e._rootElement;
          if (null !== _n40 && t.target === _n40) {
            var _s17 = t.clientY;
            var _i11 = _n40.childNodes.length;
            for (var _t62 = 0; _t62 < _n40.childNodes.length; _t62++) {
              var _e56 = _n40.childNodes[_t62];
              if (pc(_e56)) {
                var _n41 = _e56.getBoundingClientRect();
                if (_s17 <= (_n41.top + _n41.bottom) / 2) {
                  _i11 = _t62;
                  break;
                }
              }
            }
            o.setBaseAndExtent(_n40, _i11, _n40, _i11);
            var _l6 = Yr(r, o, e, t);
            null !== _l6 ? gl(_l6) : o.removeAllRanges();
          }
        }
        Pl(e, Ie, t);
      });
    }
    function Vn(t, e) {
      var n = _c(t),
        o = t.pointerType;
      mc(n) &&
        "touch" !== o &&
        "pen" !== o &&
        0 === t.button &&
        Ls(e, function () {
          Bc(n, e) || (e._inputState.isSelectionChangeFromMouseDown = !0);
        });
    }
    function qn(t) {
      if (!t.getTargetRanges) return null;
      var e = t.getTargetRanges();
      return 0 === e.length ? null : e[0];
    }
    function Xn(t) {
      var e = Ts()._inputState.lastKeyCode;
      if (null == t || t.length <= 1 || null == e) return;
      var n =
        1 === e.length ? e : "Enter" === e ? "\n" : "Tab" === e ? "\t" : null;
      if (!n) return;
      var o = jr();
      if (!xr(o) || !o.isCollapsed()) return;
      var r = o.anchor.getNode();
      if (!sr(r)) return;
      var s = o.anchor.offset;
      if (r.getTextContentSize() === s) {
        var _t63 = r.getNextSibling();
        if ("\n" === n) {
          if (h) return;
          if (ti(_t63)) _t63.selectEnd();
          else if (!_t63) {
            var _t64 = jc(r, zr),
              _e57 = _t64 && _t64.getNextSibling();
            $s(_e57) && _e57.selectStart();
          }
        } else
          "\t" === n
            ? ar(_t63) && _t63.selectEnd()
            : sr(_t63) && _t63.getTextContent()[0] === n && _t63.select(1, 1);
      } else r.getTextContent()[s] === n && r.select(s + 1, s + 1);
    }
    function Qn(t) {
      ((t.isInsertTextAfterHandledSelectionCommand = !1),
        null !== t.handledSelectionCommandTimeoutId &&
          (clearTimeout(t.handledSelectionCommandTimeoutId),
          (t.handledSelectionCommandTimeoutId = null)));
    }
    function Zn(t) {
      (Qn(t),
        (t.isInsertTextAfterHandledSelectionCommand = !0),
        (t.handledSelectionCommandTimeoutId = setTimeout(function () {
          return Qn(t);
        }, 0)));
    }
    function to(t, e) {
      var n = _c(t);
      if (pc(n) && Bc(n, e)) return !0;
      var o = e.getRootElement();
      if (null === o) return !1;
      var r = gc(o.ownerDocument);
      return null !== r && o.contains(r) && Bc(r, e);
    }
    function eo(e) {
      var _ref29;
      var n = e.inputType,
        o = qn(e),
        r = Ts(),
        s = r._inputState,
        i = jr();
      if (
        "insertText" === n &&
        e.data &&
        s.isInsertTextAfterHandledSelectionCommand
      ) {
        if ((Qn(s), e.preventDefault(), xr(i) && !i.isCollapsed())) {
          var _t65 = i.isBackward() ? i.anchor : i.focus;
          (i.anchor.set(_t65.key, _t65.offset, _t65.type),
            i.focus.set(_t65.key, _t65.offset, _t65.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === i) {
          var _t66 = Gr();
          if (!xr(_t66)) return !0;
          gl(_t66.clone());
        }
        if (xr(i)) {
          var _n42 = i.anchor.key === i.focus.key;
          if (
            (function (t, e) {
              return (
                "MediaLast" === t.lastKeyCode && e < t.lastKeyDownTimeStamp + 30
              );
            })(s, e.timeStamp) &&
            r.isComposing() &&
            _n42
          ) {
            if (
              (ol(null),
              (s.lastKeyDownTimeStamp = 0),
              setTimeout(function () {
                Ls(r, function () {
                  ol(null);
                });
              }, 30),
              xr(i))
            ) {
              var _e58 = i.anchor.getNode();
              (_e58.markDirty(), sr(_e58) || t(142), Gn(i, _e58));
            }
          } else {
            if (
              (ol(null),
              h &&
                null !== o &&
                !o.collapsed &&
                (i.applyDOMRange(o), !i.isCollapsed()))
            )
              return (e.preventDefault(), i.removeText(), !0);
            e.preventDefault();
            var _t67 = i.anchor.getNode(),
              _l7 = _t67.getTextContent(),
              _c6 = _t67.canInsertTextAfter(),
              _a3 = 0 === i.anchor.offset && i.focus.offset === _l7.length;
            var _u5 = m && _n42 && !_a3 && _c6;
            if (
              (_u5 && i.isCollapsed() && (_u5 = !Us(wl(i.anchor, !0))), !_u5)
            ) {
              Pl(r, Ke, !0);
              var _t68 = jr();
              m &&
                xr(_t68) &&
                _t68.isCollapsed() &&
                ((s.postDeleteSelectionToRestore = _t68),
                setTimeout(function () {
                  return (s.postDeleteSelectionToRestore = null);
                }));
            }
          }
          return !0;
        }
      }
      if (!xr(i))
        return (
          ("historyUndo" !== n && "historyRedo" !== n) ||
            (e.preventDefault(), Pl(r, "historyUndo" === n ? Je : Ve)),
          !0
        );
      var l = e.data;
      (null !== s.unprocessedBeforeInputData &&
        Sl(!1, r, s.unprocessedBeforeInputData),
        (i.dirty && null === s.unprocessedBeforeInputData) ||
          !i.isCollapsed() ||
          Ys(i.anchor.getNode()) ||
          null === o ||
          i.applyDOMRange(o),
        (s.unprocessedBeforeInputData = null));
      var c = i.anchor,
        a = i.focus,
        u = c.getNode(),
        f = a.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === l) (e.preventDefault(), Pl(r, Be, !1));
        else if (l === N) (e.preventDefault(), Pl(r, $e));
        else if (null == l && e.dataTransfer) {
          var _t69 = e.dataTransfer.getData("text/plain");
          (e.preventDefault(), i.insertRawText(_t69));
        } else
          null != l && Un(i, o, l, e.timeStamp, !0)
            ? (e.preventDefault(), Pl(r, ze, l), Xn(l))
            : (s.unprocessedBeforeInputData = l);
        return ((s.lastBeforeInputInsertTextTimeStamp = e.timeStamp), !0);
      }
      switch ((e.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          Pl(r, ze, e);
          Xn(
            (_ref29 = e.dataTransfer
              ? e.dataTransfer.getData("text/plain")
              : null) != null
              ? _ref29
              : e.data,
          );
          break;
        case "insertFromComposition": {
          var _t70 = s.hadOrphanedCompositionEvents;
          s.hadOrphanedCompositionEvents = !1;
          var _n43 = r._compositionKey;
          (ol(null), _t70 || Pl(r, ze, e), lo(_n43));
          break;
        }
        case "insertLineBreak":
          (ol(null), Pl(r, Be, !1));
          break;
        case "insertParagraph":
          (ol(null),
            s.isInsertLineBreak && !h
              ? ((s.isInsertLineBreak = !1), Pl(r, Be, !1))
              : Pl(r, $e));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          Pl(r, We, e);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || $s(t) || $s(e) || !Gi(t) || !Gi(e);
          })(u, f) && Pl(r, Ue, e);
          break;
        case "deleteByDrag":
          (Kl(Fo), Pl(r, Ue, e));
          break;
        case "deleteByCut":
          Pl(r, Ue, e);
          break;
        case "deleteContent":
          Pl(r, Ke, !1);
          break;
        case "deleteWordBackward":
          Pl(r, He, !0);
          break;
        case "deleteWordForward":
          Pl(r, He, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          Pl(r, Ye, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          Pl(r, Ye, !1);
          break;
        case "formatStrikeThrough":
          Pl(r, je, "strikethrough");
          break;
        case "formatBold":
          Pl(r, je, "bold");
          break;
        case "formatItalic":
          Pl(r, je, "italic");
          break;
        case "formatUnderline":
          Pl(r, je, "underline");
          break;
        case "historyUndo":
          Pl(r, Je);
          break;
        case "historyRedo":
          Pl(r, Ve);
      }
      return !0;
    }
    function no(t, e) {
      t.stopPropagation();
      var n = e._inputState;
      (Qn(n),
        Ls(
          e,
          function () {
            to(t, e) || e.dispatchCommand(Fe, t);
          },
          { event: t },
        ),
        (n.unprocessedBeforeInputData = null));
    }
    function oo(t) {
      var e = Ts(),
        n = e._inputState,
        o = jr(),
        r = t.data,
        s = qn(t);
      var i = !1;
      if (null != r && xr(o)) {
        var _l8 = Zl(Wl(e)),
          _c7 = null !== _l8 ? ac(_l8, e._rootElement) : null,
          _u6 =
            "insertCompositionText" === t.inputType &&
            "ending-firefox" !== n.compositionPhase &&
            !e.isComposing();
        _u6 && (n.hadOrphanedCompositionEvents = !0);
        var _d5 = o.anchor.getNode(),
          _h5 =
            "insertCompositionText" === t.inputType &&
            "ending-firefox" !== n.compositionPhase &&
            e.isComposing() &&
            sr(_d5) &&
            Ji(_d5);
        if (!_u6 && !_h5 && Un(o, s, r, t.timeStamp, !1, _c7)) {
          if (((i = !0), "ending-firefox" === n.compositionPhase)) {
            var _t71 = co(e, r);
            if (((n.compositionPhase = "idle"), _t71))
              return (Kl(Lo), _l(), !0);
          }
          var _s18 = o.anchor.getNode();
          if (null === _l8 || null === _c7) return !0;
          var _u7 = o.isBackward(),
            _d6 = _u7 ? o.anchor.offset : o.focus.offset,
            _h6 = _u7 ? o.focus.offset : o.anchor.offset;
          (f &&
            !o.isCollapsed() &&
            sr(_s18) &&
            null !== _c7.anchorNode &&
            _s18.getTextContent().slice(0, _d6) +
              r +
              _s18.getTextContent().slice(_d6 + _h6) ===
              Cl(_c7.anchorNode)) ||
            Pl(e, ze, r);
          var _g5 = r.length;
          (a &&
            _g5 > 1 &&
            "insertCompositionText" === t.inputType &&
            !e.isComposing() &&
            ((o.anchor.offset -= _g5),
            (o._cachedNodes = null),
            (o._cachedIsBackward = null)),
            m && e.isComposing() && ((n.lastKeyDownTimeStamp = 0), ol(null)));
        }
      }
      if (!i) {
        (Sl(!1, e, null !== r ? r : void 0),
          "ending-firefox" === n.compositionPhase &&
            (co(e, r || void 0), Kl(Lo), (n.compositionPhase = "idle")));
      }
      return (_l(), !0);
    }
    function ro(t, e) {
      Pl(e, Re, t);
    }
    function so(t) {
      var e = Ts(),
        n = e._inputState,
        o = jr();
      if (xr(o) && !e.isComposing()) {
        ((n.compositionPhase = "composing"),
          (n.hadOrphanedCompositionEvents = !1));
        var _r23 = o.anchor,
          _s19 = o.anchor.getNode();
        if (
          (ol(_r23.key),
          Kl(Ro),
          t.timeStamp < n.lastKeyDownTimeStamp + 30 ||
            "element" === _r23.type ||
            !o.isCollapsed() ||
            (!m &&
              (_s19.getFormat() !== o.format ||
                (sr(_s19) && _s19.getStyle() !== o.style))) ||
            (sr(_s19) &&
              (Ji(_s19) ||
                (0 === _r23.offset && !_s19.canInsertTextBefore()) ||
                (_r23.offset === _s19.getTextContentSize() &&
                  !_s19.canInsertTextAfter()))))
        ) {
          Pl(e, ze, v);
          var _t72 = jr();
          xr(_t72) && ol(_t72.anchor.key);
        }
      }
      return !0;
    }
    function io(t) {
      var e = Ts();
      return (
        (e._inputState.compositionPhase = "idle"),
        co(e, t.data),
        Kl(Lo),
        !0
      );
    }
    function lo(t) {
      if (null === t) return;
      var e = sl(t);
      if (!sr(e) || "text" === e.getType() || Ji(e) || !e.isAttached()) return;
      var n = jr(),
        o = xr(n) && n.anchor.key === t ? n.anchor.offset : null,
        r = rr(e.getTextContent());
      if (
        (r.setFormat(e.getFormat()),
        r.setStyle(e.getStyle()),
        e.replace(r),
        null !== o)
      ) {
        var _t73 = Math.min(o, r.getTextContentSize());
        r.select(_t73, _t73);
      }
    }
    function co(t, e) {
      var n = t._compositionKey;
      if ((ol(null), null !== n && null != e)) {
        if ("" === e) {
          var _e59 = sl(n),
            _o26 = t.getElementByKey(n),
            _r24 = null !== _o26 && sr(_e59) ? bc(_e59, _o26, t) : null;
          if (null !== _r24 && null !== _r24.nodeValue && sr(_e59)) {
            var _n44 = Zl(Wl(t)),
              _o27 = _n44 && ac(_n44, t._rootElement);
            var _s20 = null,
              _i12 = null;
            (null !== _o27 &&
              _o27.anchorNode === _r24 &&
              ((_s20 = _o27.anchorOffset), (_i12 = _o27.focusOffset)),
              Tl(_e59, _r24.nodeValue, _s20, _i12, !0));
          }
          return (lo(n), !1);
        }
        if ("\n" === e[e.length - 1]) {
          var _e60 = jr();
          if (xr(_e60) || Sr(_e60)) {
            if (xr(_e60)) {
              var _t74 = _e60.focus;
              _e60.anchor.set(_t74.key, _t74.offset, _t74.type);
            }
            return (Pl(t, on, null), lo(n), !1);
          }
        }
        var _o28 = sl(n);
        if (null !== _o28 && sr(_o28) && Ji(_o28)) {
          _o28.markDirty();
          var _t75 = jr(),
            _r25 = _o28.getTextContentSize(),
            _s21 =
              xr(_t75) && _t75.anchor.key === n ? _t75.anchor.offset : _r25;
          return (_o28.select(_s21, _s21).insertText(e), !0);
        }
      }
      return (Sl(!0, t, e), lo(n), !1);
    }
    function ao(t, e) {
      var n = e._inputState;
      a
        ? (n.compositionPhase = "ending-firefox")
        : h || (!_ && !y)
          ? Pl(e, Le, t)
          : ((n.compositionPhase = "ending-safari"),
            (n.compositionEndData = t.data));
    }
    function uo(t, e) {
      var n = e._inputState;
      ((n.lastKeyDownTimeStamp = t.timeStamp),
        (n.lastKeyCode = t.key),
        "Backspace" !== t.key && Qn(n),
        e.isComposing() || Pl(e, qe, t));
    }
    var fo = { altKey: "any", ctrlKey: "any", metaKey: "any", shiftKey: "any" },
      ho = { ctrlKey: !0 },
      go = { metaKey: !0 },
      _o = { shiftKey: "any" },
      po = { altKey: "any", shiftKey: "any" };
    function mo(t) {
      var e = Ts(),
        n = e._inputState;
      if (null == t.key) return !0;
      if ("ending-safari" === n.compositionPhase) {
        var _o29 = (function (t) {
          return "Backspace" === t.key;
        })(t);
        if (
          (_o29 &&
            Ls(e, function () {
              co(e, n.compositionEndData);
            }),
          (n.compositionPhase = "idle"),
          (n.compositionEndData = ""),
          _o29)
        )
          return !0;
      }
      var o = e._keyDownShortcuts;
      null === o &&
        ((o = Pn(
          (function () {
            var t = function t(_t76, e, n) {
                return {
                  key: _t76,
                  modifiers: e,
                  onMatch: function onMatch(t, e) {
                    Pl(e, n, t);
                  },
                };
              },
              e = function e(t, _e61, n, o) {
                return {
                  key: t,
                  modifiers: _e61,
                  onMatch: function onMatch(t, e) {
                    (t.preventDefault(), Pl(e, n, o));
                  },
                };
              },
              n = function n(t, e) {
                return {
                  key: "Enter",
                  modifiers: t,
                  onMatch: function onMatch(t, n) {
                    ((n._inputState.isInsertLineBreak = e), Pl(n, on, t));
                  },
                };
              },
              o = function o(t, e) {
                return {
                  key: t,
                  modifiers: Mn,
                  onMatch: function onMatch(t, n) {
                    var o = n._editorState._selection;
                    null === o || xr(o) || (t.preventDefault(), Pl(n, e, t));
                  },
                };
              };
            return [
              t("ArrowRight", _o, Xe),
              t("ArrowLeft", _o, Ze),
              t("ArrowUp", po, en),
              t("ArrowDown", po, nn),
              n(babelHelpers["extends"]({}, fo, { shiftKey: !0 }), !0),
              n(babelHelpers["extends"]({}, fo, { shiftKey: !1 }), !1),
              t(" ", fo, rn),
              {
                key: "Backspace",
                modifiers: _o,
                onMatch: function onMatch(t, e) {
                  Pl(e, sn, t) && Zn(e._inputState);
                },
              },
              t("Escape", fo, ln),
              t("Delete", {}, cn),
              e("Backspace", An, He, !0),
              e("Delete", An, He, !1),
              e("b", Mn, je, "bold"),
              e("u", Mn, je, "underline"),
              e("i", Mn, je, "italic"),
              t("Tab", _o, an),
              e("z", Mn, Je, void 0),
              e(
                "z",
                babelHelpers["extends"]({}, Mn, { shiftKey: !0 }),
                Ve,
                void 0,
              ),
            ].concat(
              c
                ? [
                    {
                      key: "o",
                      modifiers: ho,
                      onMatch: function onMatch(t, e) {
                        (t.preventDefault(),
                          (e._inputState.isInsertLineBreak = !0),
                          Pl(e, Be, !0));
                      },
                    },
                    t(
                      "ArrowLeft",
                      babelHelpers["extends"]({ metaKey: !0 }, _o),
                      tn,
                    ),
                    t(
                      "ArrowRight",
                      babelHelpers["extends"]({ metaKey: !0 }, _o),
                      Qe,
                    ),
                    e("h", ho, Ke, !0),
                    e("d", ho, Ke, !1),
                    e("Backspace", go, Ye, !0),
                    e("Delete", go, Ye, !1),
                    e("k", ho, Ye, !1),
                  ]
                : [t("Home", _o, tn), t("End", _o, Qe), e("y", ho, Ve, void 0)],
              [
                {
                  key: "a",
                  modifiers: Mn,
                  onMatch: function onMatch(t, e) {
                    (t.preventDefault(), Pl(e, Cn, t) && Zn(e._inputState));
                  },
                },
                o("c", yn),
                o("x", xn),
              ],
            );
          })(),
        )),
        (e._keyDownShortcuts = o));
      var r = o.match(t);
      return (
        r && r.onMatch(t, e),
        (function (t) {
          return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey;
        })(t) && e.dispatchCommand(On, t),
        !0
      );
    }
    function yo(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    var xo = new Map();
    function Co(t) {
      var e = tc(t.target);
      if (null === e) return;
      var n = Ll(t.target);
      var o = null,
        r = null;
      var s = null !== n ? zn.get(n) : void 0;
      if (null !== n) {
        if (void 0 !== s) {
          var _t77 = s.editors;
          var _n45 = s.hasShadowEditor;
          if (void 0 === _n45) {
            _n45 = !1;
            for (var _e62 of _t77)
              if (
                null !== _e62._rootElement &&
                ec(_e62._rootElement.getRootNode())
              ) {
                _n45 = !0;
                break;
              }
            s.hasShadowEditor = _n45;
          }
          if (_n45) {
            var _n46 = null,
              _s22 = null;
            for (var _i13 of _t77) {
              var _t78 = _i13._rootElement;
              if (null === _t78) continue;
              var _l9 = ac(e, _t78).anchorNode;
              if (null !== _l9 && Yi(_l9) === _i13) {
                if (ec(_t78.getRootNode())) {
                  ((o = _i13), (r = _l9));
                  break;
                }
                null === _n46 && ((_n46 = _i13), (_s22 = _l9));
              }
            }
            null === o && null !== _n46 && ((o = _n46), (r = _s22));
          } else {
            var _t79 = e.anchorNode;
            null === _t79 ||
              (pc(_t79) && null !== _t79.shadowRoot) ||
              ((o = Yi(_t79)), null !== o && (r = _t79));
          }
        }
        if (null === o) {
          var _t80 = gc(n);
          o = null !== _t80 ? Yi(_t80) : null;
        }
      }
      if (null === o) return;
      if (o._inputState.isSelectionChangeFromMouseDown) {
        if (void 0 !== s)
          for (var _t81 of s.editors)
            _t81._inputState.isSelectionChangeFromMouseDown = !1;
        Ls(o, function () {
          var n = Gr(),
            s = r != null ? r : ac(e, o._rootElement).anchorNode;
          if (pc(s) || Vi(s)) {
            gl(Yr(n, e, o, t));
          }
        });
      }
      var i = yl(o),
        l = i[i.length - 1],
        c = l._key,
        a = xo.get(c),
        u = a || l;
      (u !== o && Yn(e, u, !1),
        Yn(e, o, !0),
        o !== l ? xo.set(c, o) : a && xo["delete"](c));
    }
    function So(t) {
      t._lexicalHandled = !0;
    }
    function To(t) {
      return !0 === t._lexicalHandled;
    }
    var No = Me();
    function vo(e) {
      var n = $n.get(e);
      if (void 0 === n) return void No();
      var o = zn.get(n);
      if (void 0 === o) return void No();
      $n["delete"](e);
      var r = ji(e);
      Hi(r)
        ? (!(function (t) {
            if (null !== t._parentEditor) {
              var _e63 = yl(t),
                _n47 = _e63[_e63.length - 1]._key;
              xo.get(_n47) === t && xo["delete"](_n47);
            } else xo["delete"](t._key);
          })(r),
          o.editors["delete"](r),
          (o.hasShadowEditor = void 0),
          (e.__lexicalEditor = null))
        : r && t(198);
      var s = yo(e);
      for (var _t82 = 0; _t82 < s.length; _t82++) s[_t82]();
      e.__lexicalEventHandles = [];
    }
    function ko(e, n, o) {
      xs();
      var r = e.__key,
        s = e.getParent();
      if (null === s) return void (null !== Qc(e) && t(367, r, String(Qc(e))));
      var i = (function (t) {
        var e = jr();
        if (!xr(e) || !$s(t)) return e;
        var n = e.anchor,
          o = e.focus,
          r = n.getNode(),
          s = o.getNode();
        $l(r, t) && n.set(t.__key, 0, "element");
        $l(s, t) && o.set(t.__key, 0, "element");
        return e;
      })(e);
      var l = !1;
      if (xr(i) && n) {
        var _t83 = i.anchor,
          _n48 = i.focus;
        (_t83.key === r &&
          (Xr(_t83, e, s, e.getPreviousSibling(), e.getNextSibling()),
          (l = !0)),
          _n48.key === r &&
            (Xr(_n48, e, s, e.getPreviousSibling(), e.getNextSibling()),
            (l = !0)));
      } else Sr(i) && n && e.isSelected() && e.selectPrevious();
      if (xr(i) && n && !l && Jr(i, s)) {
        var _t84 = e.getIndexWithinParent();
        (tl(e), Vr(i, s, _t84, -1));
      } else tl(e);
      (o || jl(s) || s.canBeEmpty() || !s.isEmpty() || ko(s, n),
        n && i && Ys(s) && s.isEmpty() && s.selectEnd());
    }
    var Eo = Symbol["for"]("ephemeral");
    function Oo(t) {
      return t[Eo] || !1;
    }
    var bo = { configurable: !0, enumerable: !1, value: void 0, writable: !0 };
    var _Mo5 = (function () {
      function Mo(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", bo),
          Object.defineProperty(this, At, bo),
          Zi(this, t));
      }
      Mo.getType = function getType() {
        var _Uc = Uc(this),
          e = _Uc.ownNodeType;
        return (void 0 === e && t(64, this.name), e);
      };
      Mo.clone = function clone(e) {
        t(65, this.name);
      };
      var _proto7 = Mo.prototype;
      _proto7.$config = function $config() {
        return {};
      };
      _proto7.config = function config(t, e) {
        var _ref30;
        var n = e["extends"] || Jc(this.constructor);
        return (
          Object.assign(e, { extends: n }),
          "string" == typeof t && Object.assign(e, { type: t }),
          (_ref30 = {}),
          (_ref30[t] = e),
          _ref30
        );
      };
      _proto7.afterCloneFrom = function afterCloneFrom(t) {
        this.__key === t.__key
          ? ((this.__parent = t.__parent),
            (this.__next = t.__next),
            (this.__prev = t.__prev),
            (this.__state = t.__state))
          : t.__state && (this.__state = t.__state.getWritable(this));
      };
      _proto7.resetOnCopyNodeFrom = function resetOnCopyNodeFrom(t) {
        this.__state &&
          (this.__state = this.__state.getWritable(this).resetOnCopyNode());
      };
      _proto7.getType = function getType() {
        return this.__type;
      };
      _proto7.isInline = function isInline() {
        t(137, this.constructor.name);
      };
      _proto7.isAttached = function isAttached() {
        var t = this.__key;
        for (; null !== t; ) {
          if ("root" === t) return !0;
          var _e64 = sl(t);
          if (null === _e64) break;
          t = null !== _e64.__parent ? _e64.__parent : Qc(_e64);
        }
        return !1;
      };
      _proto7.isSelected = function isSelected(t) {
        var _this13 = this;
        var e = t || jr();
        if (null == e) return !1;
        var n = e.getNodes().some(function (t) {
          return t.__key === _this13.__key;
        });
        if (sr(this)) return n;
        if (
          xr(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t85 = this.getParent();
          if (Us(this) && this.isInline() && _t85) {
            var _n49 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t85.is(_n49.getNode()) &&
              _n49.offset === _t85.getChildrenSize() &&
              this.is(_t85.getLastChild())
            )
              return !1;
          }
        }
        return n;
      };
      _proto7.getKey = function getKey() {
        return this.__key;
      };
      _proto7.getIndexWithinParent = function getIndexWithinParent() {
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
      _proto7.getParent = function getParent() {
        var t = this.getLatest().__parent;
        return null === t ? null : sl(t);
      };
      _proto7.getParentOrThrow = function getParentOrThrow() {
        var e = this.getParent();
        return (null === e && t(66, this.__key), e);
      };
      _proto7.getTopLevelElement = function getTopLevelElement() {
        var e = this;
        for (; null !== e; ) {
          var _n50 = e.getParent();
          if (jl(_n50) || null !== Qc(e))
            return ($s(e) || (e === this && Us(e)) || t(194), e);
          e = _n50;
        }
        return null;
      };
      _proto7.getTopLevelElementOrThrow = function getTopLevelElementOrThrow() {
        var e = this.getTopLevelElement();
        return (null === e && t(67, this.__key), e);
      };
      _proto7.getParents = function getParents() {
        var t = [];
        var e = this.getParent();
        for (; null !== e; ) (t.push(e), (e = e.getParent()));
        return t;
      };
      _proto7.getParentKeys = function getParentKeys() {
        var t = [];
        var e = this.getParent();
        for (; null !== e; ) (t.push(e.__key), (e = e.getParent()));
        return t;
      };
      _proto7.getPreviousSibling = function getPreviousSibling() {
        var t = this.getLatest().__prev;
        return null === t ? null : sl(t);
      };
      _proto7.getPreviousSiblings = function getPreviousSiblings() {
        var t = [],
          e = this.getParent();
        if (null === e) return t;
        var n = e.getFirstChild();
        for (; null !== n && !n.is(this); )
          (t.push(n), (n = n.getNextSibling()));
        return t;
      };
      _proto7.getNextSibling = function getNextSibling() {
        var t = this.getLatest().__next;
        return null === t ? null : sl(t);
      };
      _proto7.getNextSiblings = function getNextSiblings() {
        var t = [];
        var e = this.getNextSibling();
        for (; null !== e; ) (t.push(e), (e = e.getNextSibling()));
        return t;
      };
      _proto7.getCommonAncestor = function getCommonAncestor(t) {
        var e = $s(this) ? this : this.getParent(),
          n = $s(t) ? t : t.getParent(),
          o = e && n ? Va(e, n) : null;
        return o ? o.commonAncestor : null;
      };
      _proto7.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto7.isBefore = function isBefore(e) {
        var n = Va(this, e);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === ja(n)
              : ("same" !== n.type && "ancestor" !== n.type && t(279), !1)))
        );
      };
      _proto7.isParentOf = function isParentOf(t) {
        return $l(t, this);
      };
      _proto7.getNodesBetween = function getNodesBetween(e) {
        var n = this.isBefore(e),
          o = [],
          r = new Set();
        var s = this;
        for (; null !== s; ) {
          var _i14 = s.__key;
          if ((r.has(_i14) || (r.add(_i14), o.push(s)), s === e)) break;
          var _l0 = $s(s) ? (n ? s.getFirstChild() : s.getLastChild()) : null;
          if (null !== _l0) {
            s = _l0;
            continue;
          }
          var _c8 = n ? s.getNextSibling() : s.getPreviousSibling();
          if (null !== _c8) {
            s = _c8;
            continue;
          }
          var _a4 = s.getParentOrThrow();
          if ((r.has(_a4.__key) || o.push(_a4), _a4 === e)) break;
          var _u8 = null,
            _f5 = _a4;
          do {
            if (
              (null === _f5 && t(68),
              (_u8 = n ? _f5.getNextSibling() : _f5.getPreviousSibling()),
              (_f5 = _f5.getParent()),
              null === _f5)
            )
              break;
            null !== _u8 || r.has(_f5.__key) || o.push(_f5);
          } while (null === _u8);
          s = _u8;
        }
        return (n || o.reverse(), o);
      };
      _proto7.isDirty = function isDirty() {
        var t = Ts()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto7.getLatest = function getLatest() {
        if (Oo(this)) return this;
        var e = sl(this.__key);
        return (null === e && t(113), e);
      };
      _proto7.getWritable = function getWritable() {
        if (Oo(this)) return this;
        xs();
        var t = Ss(),
          e = Ts(),
          n = t._nodeMap,
          o = this.__key,
          r = this.getLatest(),
          s = e._cloneNotNeeded,
          i = jr();
        if ((null !== i && i.setCachedNodes(null), s.has(o))) return (nl(r), r);
        var l = wc(r);
        return (s.add(o), nl(l), n.set(o, l), l);
      };
      _proto7.getTextContent = function getTextContent() {
        return fa(this);
      };
      _proto7.getTextContentSize = function getTextContentSize() {
        return this.getTextContent().length;
      };
      _proto7.createDOM = function createDOM(e, n) {
        t(70);
      };
      _proto7.updateDOM = function updateDOM(e, n, o) {
        t(71);
      };
      _proto7.getDOMSlot = function getDOMSlot(t) {
        return new _H2(t);
      };
      _proto7.exportDOM = function exportDOM(t) {
        return { element: this.createDOM(t._config, t) };
      };
      _proto7.exportJSON = function exportJSON() {
        var t = this.__state ? this.__state.toJSON() : void 0;
        return babelHelpers["extends"]({ type: this.__type, version: 1 }, t);
      };
      Mo.importJSON = function importJSON(e) {
        t(18, this.name);
      };
      _proto7.updateFromJSON = function updateFromJSON(t) {
        return (function (t, e) {
          var n = t.getWritable(),
            o = e.$;
          var r = o;
          for (var _t86 of xt(n).flatKeys)
            _t86 in e &&
              ((void 0 !== r && r !== o) ||
                (r = babelHelpers["extends"]({}, o)),
              (r[_t86] = e[_t86]));
          return ((n.__state || r) && yt(t).updateFromJSON(r), n);
        })(this, t);
      };
      Mo.transform = function transform() {
        return null;
      };
      _proto7.remove = function remove(t) {
        ko(this, !0, t);
      };
      _proto7.replace = function replace(e, n) {
        xs();
        var o = jr();
        (null !== o && (o = o.clone()), Vl(this, e));
        var r = this.getLatest(),
          s = this.__key,
          i = Zc(r);
        null !== i && t(400, s, r.getType(), i.getKey(), i.getType());
        var l = e.__key,
          c = e.getWritable(),
          a = this.getParentOrThrow().getWritable(),
          u = a.__size,
          f = c.getParent(),
          d = null !== f && xr(o) && Jr(o, f),
          h = d ? c.getIndexWithinParent() : -1;
        (tl(c), d && null !== f && xr(o) && Vr(o, f, h, -1));
        var g = r.getPreviousSibling(),
          _ = r.getNextSibling(),
          p = r.__prev,
          m = r.__next,
          y = r.__parent;
        if ((ko(r, !1, !0), null === g)) a.__first = l;
        else {
          g.getWritable().__next = l;
        }
        if (((c.__prev = p), null === _)) a.__last = l;
        else {
          _.getWritable().__prev = l;
        }
        ((c.__next = m),
          (c.__parent = y),
          (a.__size = null !== f && f.is(a) ? u - 1 : u));
        var x = 0;
        if (
          (n &&
            (($s(this) && $s(c)) || t(139),
            (x = c.getChildrenSize()),
            c.splice(x, 0, this.getChildren())),
          xr(o))
        ) {
          gl(o);
          var _t87 = o.anchor,
            _e65 = o.focus;
          (_t87.key === s &&
            (n && "element" === _t87.type
              ? _t87.set(c.__key, x + _t87.offset, "element")
              : hr(_t87, c)),
            _e65.key === s &&
              (n && "element" === _e65.type
                ? _e65.set(c.__key, x + _e65.offset, "element")
                : hr(_e65, c)));
        }
        return (rl() === s && ol(l), c);
      };
      _proto7.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (xs(), Vl(this, t));
        var n = this.getWritable(),
          o = t.getWritable();
        _a(this.getParentOrThrow());
        var r = o.getParent(),
          s = jr();
        var i = !1,
          l = !1,
          c = -1;
        if (null !== r && e && xr(s) && Jr(s, r)) {
          var _e66 = r.__key,
            _n51 = s.anchor,
            _o30 = s.focus;
          ((c = t.getIndexWithinParent()),
            (i =
              "element" === _n51.type &&
              _n51.key === _e66 &&
              _n51.offset === c + 1),
            (l =
              "element" === _o30.type &&
              _o30.key === _e66 &&
              _o30.offset === c + 1));
        }
        (tl(o), -1 !== c && null !== r && xr(s) && Vr(s, r, c, -1));
        var a = this.getNextSibling(),
          u = this.getParentOrThrow().getWritable(),
          f = o.__key,
          d = n.__next;
        if (null === a) u.__last = f;
        else {
          a.getWritable().__prev = f;
        }
        if (
          (u.__size++,
          (n.__next = f),
          (o.__next = d),
          (o.__prev = n.__key),
          (o.__parent = n.__parent),
          e && xr(s))
        ) {
          var _t88 = u.__key;
          if (i || l || Jr(s, u)) {
            var _e67 = this.getIndexWithinParent();
            (Vr(s, u, _e67 + 1),
              i && s.anchor.set(_t88, _e67 + 2, "element"),
              l && s.focus.set(_t88, _e67 + 2, "element"));
          }
        }
        return t;
      };
      _proto7.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (xs(), Vl(this, t));
        var n = this.getWritable(),
          o = t.getWritable();
        _a(this.getParentOrThrow());
        var r = o.__key,
          s = jr(),
          i = o.getParent(),
          l = null !== i && e && xr(s) && Jr(s, i),
          c = l ? o.getIndexWithinParent() : -1;
        (tl(o), l && null !== i && xr(s) && Vr(s, i, c, -1));
        var a = this.getPreviousSibling(),
          u = this.getParentOrThrow().getWritable(),
          f = n.__prev,
          d = e && xr(s) && Jr(s, u),
          h = d ? this.getIndexWithinParent() : -1;
        if (null === a) u.__first = r;
        else {
          a.getWritable().__next = r;
        }
        return (
          u.__size++,
          (n.__prev = r),
          (o.__prev = f),
          (o.__next = n.__key),
          (o.__parent = n.__parent),
          d && xr(s) && Vr(s, u, h),
          t
        );
      };
      _proto7.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto7.createParentElementNode = function createParentElementNode() {
        return vi();
      };
      _proto7.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto7.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto7.selectPrevious = function selectPrevious(t, e) {
        xs();
        var n = Zc(this);
        if (null !== n) return n.selectPrevious(t, e);
        var o = this.getPreviousSibling(),
          r = this.getParentOrThrow();
        if (null === o) return r.select(0, 0);
        if ($s(o)) return o.select();
        if (!sr(o)) {
          var _t89 = o.getIndexWithinParent() + 1;
          return r.select(_t89, _t89);
        }
        return o.select(t, e);
      };
      _proto7.selectNext = function selectNext(t, e) {
        xs();
        var n = Zc(this);
        if (null !== n) return n.selectNext(t, e);
        var o = this.getNextSibling(),
          r = this.getParentOrThrow();
        if (null === o) return r.select();
        if ($s(o)) return o.select(0, 0);
        if (!sr(o)) {
          var _t90 = o.getIndexWithinParent();
          return r.select(_t90, _t90);
        }
        return o.select(t, e);
      };
      _proto7.markDirty = function markDirty() {
        this.getWritable();
      };
      _proto7.reconcileObservedMutation = function reconcileObservedMutation(
        t,
        e,
      ) {
        this.markDirty();
      };
      return Mo;
    })();
    function Ao(t) {
      return t instanceof _Mo5;
    }
    var Do = "history-merge",
      wo = "collaboration",
      Io = "skip-scroll-into-view",
      Po = "skip-dom-selection",
      Fo = "skip-selection-focus",
      Ro = "composition-start",
      Lo = "composition-end",
      Ko = "!important";
    function Bo(t) {
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
                      var _r26 = n.trim(),
                        _s23 = o.trim();
                      ("" !== _r26 && "" !== _s23 && (e[_r26] = _s23),
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
    function $o(t, e, n) {
      var o = n.trimEnd(),
        r = o.length - 10;
      r >= 0 && o.slice(r).toLowerCase() === Ko
        ? t.setProperty(e, o.slice(0, r).trim(), "important")
        : t.setProperty(e, n, "");
    }
    function zo(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var o = Bo(n),
        r = Bo(e);
      for (var _e68 in r) (delete o[_e68], $o(t, _e68, r[_e68]));
      for (var _e69 in o) t.removeProperty(_e69);
    }
    function Wo(t, e) {
      return 16 & e
        ? "code"
        : e & x
          ? "mark"
          : 32 & e
            ? "sub"
            : 64 & e
              ? "sup"
              : null;
    }
    function Uo(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function Ho(t, e, n, o, r) {
      var s = o.classList;
      var i = Ml(r, "base");
      (void 0 !== i && s.add.apply(s, i),
        (i = Ml(r, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== i &&
        (8 & n && 4 & n
          ? ((l = !0), c || s.add.apply(s, i))
          : c && s.remove.apply(s, i));
      for (var _t91 in A) {
        var _o31 = A[_t91];
        if (((i = Ml(r, _t91)), void 0 !== i))
          if (n & _o31) {
            if (l && ("underline" === _t91 || "strikethrough" === _t91)) {
              e & _o31 && s.remove.apply(s, i);
              continue;
            }
            (0 === (e & _o31) ||
              (c && "underline" === _t91) ||
              "strikethrough" === _t91) &&
              s.add.apply(s, i);
          } else e & _o31 && s.remove.apply(s, i);
      }
      bl(o, "class");
    }
    function Yo(t, e, n) {
      var o = n.isComposing(),
        r = t + (o ? T : ""),
        s = vc(),
        i = kc(s).$getDOMSlot(n, e, s),
        l = i.getFirstChild();
      if (null === l || l.nodeType !== Node.TEXT_NODE)
        return void i.insertChild(ic().createTextNode(r));
      var c = l,
        u = c.nodeValue;
      if (u !== r)
        if (o || a) {
          var _ref31 = (function (t, e) {
              var n = t.length,
                o = e.length;
              var r = 0,
                s = 0;
              for (; r < n && r < o && t[r] === e[r]; ) r++;
              for (; s + r < n && s + r < o && t[n - s - 1] === e[o - s - 1]; )
                s++;
              return [r, n - r - s, e.slice(r, o - s)];
            })(u, r),
            _t92 = _ref31[0],
            _e70 = _ref31[1],
            _n52 = _ref31[2];
          (0 !== _e70 && c.deleteData(_t92, _e70), c.insertData(_t92, _n52));
        } else c.nodeValue = r;
    }
    function jo(t, e, n, o, r, s) {
      Yo(r, t, e);
      var i = s.theme.text;
      void 0 !== i && Ho(0, 0, o, t, i);
    }
    function Go(t, e) {
      var n = ic().createElement(e);
      return (n.appendChild(t), n);
    }
    function Jo(t) {
      return null != t && !0 === t.__isInlineFormattable;
    }
    var _Vo2 = (function (_Mo) {
      function Vo(t, e) {
        var _this;
        if (t === void 0) {
          t = "";
        }
        ((_this = _Mo.call(this, e) || this),
          (_this.__text = t),
          (_this.__format = 0),
          (_this.__style = ""),
          (_this.__mode = 0),
          (_this.__detail = 0));
        return _this;
      }
      babelHelpers.inheritsLoose(Vo, _Mo);
      var _proto8 = Vo.prototype;
      _proto8.$config = function $config() {
        return this.config("text", {
          importDOM: {
            "#text": function text() {
              return { conversion: tr, priority: 0 };
            },
            b: function b() {
              return { conversion: Xo, priority: 0 };
            },
            code: function code() {
              return { conversion: or, priority: 0 };
            },
            em: function em() {
              return { conversion: or, priority: 0 };
            },
            i: function i() {
              return { conversion: or, priority: 0 };
            },
            mark: function mark() {
              return { conversion: or, priority: 0 };
            },
            s: function s() {
              return { conversion: or, priority: 0 };
            },
            span: function span() {
              return { conversion: qo, priority: 0 };
            },
            strong: function strong() {
              return { conversion: or, priority: 0 };
            },
            sub: function sub() {
              return { conversion: or, priority: 0 };
            },
            sup: function sup() {
              return { conversion: or, priority: 0 };
            },
            u: function u() {
              return { conversion: or, priority: 0 };
            },
          },
        });
      };
      _proto8.afterCloneFrom = function afterCloneFrom(t) {
        (_Mo.prototype.afterCloneFrom.call(this, t),
          (this.__text = t.__text),
          (this.__format = t.__format),
          (this.__style = t.__style),
          (this.__mode = t.__mode),
          (this.__detail = t.__detail));
      };
      _proto8.getFormat = function getFormat() {
        return this.getLatest().__format;
      };
      _proto8.getDetail = function getDetail() {
        return this.getLatest().__detail;
      };
      _proto8.getMode = function getMode() {
        var t = this.getLatest();
        return R[t.__mode];
      };
      _proto8.getStyle = function getStyle() {
        return this.getLatest().__style;
      };
      _proto8.isToken = function isToken() {
        return 1 === this.getLatest().__mode;
      };
      _proto8.isComposing = function isComposing() {
        return this.__key === rl();
      };
      _proto8.isSegmented = function isSegmented() {
        return 2 === this.getLatest().__mode;
      };
      _proto8.isDirectionless = function isDirectionless() {
        return !!(1 & this.getLatest().__detail);
      };
      _proto8.isUnmergeable = function isUnmergeable() {
        return !!(2 & this.getLatest().__detail);
      };
      _proto8.hasFormat = function hasFormat(t) {
        var e = A[t];
        return 0 !== (this.getFormat() & e);
      };
      _proto8.isSimpleText = function isSimpleText() {
        return "text" === this.__type && 0 === this.__mode;
      };
      _proto8.getTextContent = function getTextContent() {
        return this.getLatest().__text;
      };
      _proto8.getFormatFlags = function getFormatFlags(t, e) {
        return Qi(this.getLatest().__format, t, e);
      };
      _proto8.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto8.isInline = function isInline() {
        return !0;
      };
      _proto8.createDOM = function createDOM(t, e) {
        var n = this.__format,
          o = Wo(0, n),
          r = Uo(0, n),
          s = null === o ? r : o,
          i = ic().createElement(s);
        var l = i;
        (this.hasFormat("code") && i.setAttribute("spellcheck", "false"),
          null !== o && ((l = ic().createElement(r)), i.appendChild(l)));
        jo(l, this, 0, n, this.__text, t);
        var c = this.__style;
        return ("" !== c && zo(i.style, c), i);
      };
      _proto8.updateDOM = function updateDOM(e, n, o) {
        var r = this.__text,
          s = e.__format,
          i = this.__format,
          l = Wo(0, s),
          c = Wo(0, i),
          a = Uo(0, s),
          u = Uo(0, i);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _e71 = n.firstChild;
          null == _e71 && t(48);
          var _s24 = ic().createElement(u);
          return (jo(_s24, this, 0, i, r, o), n.replaceChild(_s24, _e71), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && t(49)),
          Yo(r, f, this));
        var d = o.theme.text;
        void 0 !== d && s !== i && Ho(0, s, i, f, d);
        var h = e.__style,
          g = this.__style;
        return (h !== g && (zo(n.style, g, h), bl(n, "style")), !1);
      };
      _proto8.updateFromJSON = function updateFromJSON(t) {
        return _Mo.prototype.updateFromJSON
          .call(this, t)
          .setTextContent(t.text)
          .setFormat(t.format)
          .setDetail(t.detail)
          .setMode(t.mode)
          .setStyle(t.style);
      };
      _proto8.exportDOM = function exportDOM(e) {
        var _Mo$prototype$exportD = _Mo.prototype.exportDOM.call(this, e),
          n = _Mo$prototype$exportD.element;
        return (
          pc(n) || t(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = Go(n, "b")),
          this.hasFormat("italic") && (n = Go(n, "i")),
          this.hasFormat("strikethrough") && (n = Go(n, "s")),
          this.hasFormat("underline") && (n = Go(n, "u")),
          { element: n }
        );
      };
      _proto8.exportJSON = function exportJSON() {
        return babelHelpers["extends"](
          {
            detail: this.getDetail(),
            format: this.getFormat(),
            mode: this.getMode(),
            style: this.getStyle(),
            text: this.getTextContent(),
          },
          _Mo.prototype.exportJSON.call(this),
        );
      };
      _proto8.selectionTransform = function selectionTransform(t, e) {};
      _proto8.setFormat = function setFormat(t) {
        var e = this.getWritable();
        return ((e.__format = "string" == typeof t ? A[t] : t), e);
      };
      _proto8.setDetail = function setDetail(t) {
        var e = this.getWritable();
        return ((e.__detail = "string" == typeof t ? D[t] : t), e);
      };
      _proto8.setStyle = function setStyle(t) {
        var e = this.getWritable();
        return ((e.__style = t), e);
      };
      _proto8.toggleFormat = function toggleFormat(t) {
        var e = Qi(this.getFormat(), t, null);
        return this.setFormat(e);
      };
      _proto8.toggleDirectionless = function toggleDirectionless() {
        var t = this.getWritable();
        return ((t.__detail ^= 1), t);
      };
      _proto8.toggleUnmergeable = function toggleUnmergeable() {
        var t = this.getWritable();
        return ((t.__detail ^= 2), t);
      };
      _proto8.setMode = function setMode(t) {
        var e = F[t];
        if (this.__mode === e) return this;
        var n = this.getWritable();
        return ((n.__mode = e), n);
      };
      _proto8.setTextContent = function setTextContent(t) {
        if (this.__text === t) return this;
        var e = this.getWritable();
        return ((e.__text = t), e);
      };
      _proto8.select = function select(t, e) {
        xs();
        var n = t,
          o = e;
        var r = jr(),
          s = this.getTextContent(),
          i = this.__key;
        if ("string" == typeof s) {
          var _t93 = s.length;
          (void 0 === n && (n = _t93), void 0 === o && (o = _t93));
        } else ((n = 0), (o = 0));
        if (!xr(r)) return Wr(i, n, i, o, "text", "text");
        {
          var _t94 = rl();
          ((_t94 !== r.anchor.key && _t94 !== r.focus.key) || ol(i),
            r.setTextNodeRange(this, n, this, o));
        }
        return r;
      };
      _proto8.selectStart = function selectStart() {
        return this.select(0, 0);
      };
      _proto8.selectEnd = function selectEnd() {
        var t = this.getTextContentSize();
        return this.select(t, t);
      };
      _proto8.spliceText = function spliceText(t, e, n, o) {
        var r = this.getWritable(),
          s = r.__text,
          i = n.length;
        var l = t;
        l < 0 && ((l = i + l), l < 0 && (l = 0));
        var c = jr();
        if (o && xr(c)) {
          var _e72 = t + i;
          c.setTextNodeRange(r, _e72, r, _e72);
        }
        var a = s.slice(0, l) + n + s.slice(l + e);
        return ((r.__text = a), r);
      };
      _proto8.canInsertTextBefore = function canInsertTextBefore() {
        return !0;
      };
      _proto8.canInsertTextAfter = function canInsertTextAfter() {
        return !0;
      };
      _proto8.splitText = function splitText() {
        xs();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var o = e.__key,
          r = rl(),
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
        for (var _e73 = 0, _o32 = 0; _e73 < s && _o32 <= l; _o32++) {
          var _r27 = t[_o32];
          _r27 > _e73 && (i.push(n.slice(_e73, _r27)), (_e73 = _r27));
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
        var y = jr();
        if (xr(y)) {
          var _ref32 = y.isBackward()
              ? [y.focus, y.anchor]
              : [y.anchor, y.focus],
            _t95 = _ref32[0],
            _e74 = _ref32[1];
          ("text" === _t95.type && _t95.key === o && (p = _t95),
            "text" === _e74.type && _e74.key === o && (m = _e74));
        }
        e.isSegmented()
          ? ((f = rr(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = vt(e, f)),
            (_ = !0))
          : (f = e.setTextContent(a));
        var x = [f];
        for (var _t96 = 1; _t96 < c; _t96++) {
          var _n53 = rr(i[_t96]);
          ((_n53.__format = d),
            (_n53.__style = h),
            (_n53.__detail = g),
            (_n53.__state = vt(e, _n53)));
          var _s25 = _n53.__key;
          (r === o && ol(_s25), x.push(_n53));
        }
        var C = p ? p.offset : null,
          S = m ? m.offset : null;
        var T = 0;
        for (var _t97 of x) {
          if (!p && !m) break;
          var _e75 = T + _t97.getTextContentSize();
          if (
            (null !== p &&
              null !== C &&
              C <= _e75 &&
              C >= T &&
              (p.set(_t97.getKey(), C - T, "text"), C < _e75 && (p = null)),
            null !== m && null !== S && S <= _e75 && S >= T)
          ) {
            m.set(_t97.getKey(), S - T, "text");
            break;
          }
          T = _e75;
        }
        if (null !== u) {
          !(function (t) {
            var e = t.getPreviousSibling(),
              n = t.getNextSibling();
            null !== e && nl(e);
            null !== n && nl(n);
          })(this);
          var _t98 = u.getWritable(),
            _e76 = this.getIndexWithinParent();
          (_
            ? (_t98.splice(_e76, 0, x), this.remove())
            : _t98.splice(_e76, 1, x),
            xr(y) && Vr(y, u, _e76, c - 1));
        }
        return x;
      };
      _proto8.mergeWithSibling = function mergeWithSibling(e) {
        var n = e === this.getPreviousSibling();
        n || e === this.getNextSibling() || t(50);
        var o = this.__key,
          r = e.__key,
          s = this.__text,
          i = s.length;
        rl() === r && ol(o);
        var l = jr();
        if (xr(l)) {
          var _t99 = l.anchor,
            _s26 = l.focus;
          (null !== _t99 && _t99.key === r && Qr(_t99, n, o, e, i),
            null !== _s26 && _s26.key === r && Qr(_s26, n, o, e, i));
        }
        var c = e.__text,
          a = n ? c + s : s + c;
        this.setTextContent(a);
        var u = this.getWritable();
        return (e.remove(), u);
      };
      _proto8.isTextEntity = function isTextEntity() {
        return !1;
      };
      return babelHelpers.createClass(Vo, [
        {
          key: "__isInlineFormattable",
          get: function get() {
            return !0;
          },
        },
      ]);
    })(_Mo5);
    function qo(t) {
      return { forChild: ir(t.style), node: null };
    }
    function Xo(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: ir(e.style, n ? void 0 : "bold"), node: null };
    }
    var Qo = new WeakMap();
    function Zo(t) {
      if (!pc(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function tr(e) {
      var n = e;
      null === e.parentElement && t(129);
      var o = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var o = [t];
          for (; null !== n && void 0 === (e = Qo.get(n)) && !Zo(n); )
            (o.push(n), (n = n.parentNode));
          var r = void 0 === e ? n : e;
          for (var _t100 = 0; _t100 < o.length; _t100++) Qo.set(o[_t100], r);
          return r;
        })(n)
      )
        return { node: os(o) };
      if (((o = o.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === o))
        return { node: null };
      if (" " === o[0]) {
        var _t101 = n,
          _e77 = !0;
        for (; null !== _t101 && null !== (_t101 = er(_t101, !1)); ) {
          var _n54 = _t101.textContent || "";
          if (_n54.length > 0) {
            (/[ \t\n]$/.test(_n54) && (o = o.slice(1)), (_e77 = !1));
            break;
          }
        }
        _e77 && (o = o.slice(1));
      }
      if (" " === o[o.length - 1]) {
        var _t102 = n,
          _e78 = !0;
        for (; null !== _t102 && null !== (_t102 = er(_t102, !0)); ) {
          if (
            (_t102.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e78 = !1;
            break;
          }
        }
        _e78 && (o = o.slice(0, o.length - 1));
      }
      return "" === o ? { node: null } : { node: rr(o) };
    }
    function er(t, e) {
      var n = t;
      for (;;) {
        var _t103 = void 0;
        for (; null === (_t103 = e ? n.nextSibling : n.previousSibling); ) {
          var _t104 = n.parentElement;
          if (null === _t104) return null;
          n = _t104;
        }
        if (((n = _t103), pc(n))) {
          var _t105 = n.style.display;
          if (
            ("" === _t105 && !Cc(n)) ||
            ("" !== _t105 && !_t105.startsWith("inline"))
          )
            return null;
        }
        var _o33 = n;
        for (; null !== (_o33 = e ? n.firstChild : n.lastChild); ) n = _o33;
        if (Vi(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var nr = {
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
    function or(t) {
      var e = nr[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: ir(t.style, e), node: null };
    }
    function rr(t) {
      if (t === void 0) {
        t = "";
      }
      return Jl(new _Vo2(t));
    }
    function sr(t) {
      return t instanceof _Vo2;
    }
    function ir(t, e) {
      var n = t.fontWeight,
        o = t.textDecoration.split(" "),
        r = "700" === n || "bold" === n,
        s = o.includes("line-through"),
        i = "italic" === t.fontStyle,
        l = o.includes("underline"),
        c = t.verticalAlign,
        a = t.textTransform;
      return function (t) {
        return sr(t) || Jo(t)
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
            ("lowercase" !== a && "uppercase" !== a && "capitalize" !== a) ||
              t.hasFormat(a) ||
              t.toggleFormat(a),
            e && !t.hasFormat(e) && t.toggleFormat(e),
            t)
          : t;
      };
    }
    var _lr = (function (_Vo) {
      function lr(t) {
        var _this2;
        if (t === void 0) {
          t = void 0;
        }
        ((_this2 = _Vo.call(this, "\t", t) || this), (_this2.__detail = 2));
        return _this2;
      }
      babelHelpers.inheritsLoose(lr, _Vo);
      var _proto9 = lr.prototype;
      _proto9.$config = function $config() {
        return this.config("tab", { extends: _Vo2 });
      };
      _proto9.createDOM = function createDOM(t) {
        var e = _Vo.prototype.createDOM.call(this, t),
          n = Ml(t.theme, "tab");
        if (void 0 !== n) {
          var _e$classList;
          (_e$classList = e.classList).add.apply(_e$classList, n);
        }
        return e;
      };
      _proto9.setTextContent = function setTextContent(t) {
        return _Vo.prototype.setTextContent.call(this, "\t");
      };
      _proto9.spliceText = function spliceText(e, n, o, r) {
        return (
          ("" === o && 0 === n) || ("\t" === o && 1 === n) || t(286),
          this
        );
      };
      _proto9.setDetail = function setDetail(e) {
        return (2 !== e && t(127), this);
      };
      _proto9.setMode = function setMode(e) {
        return ("normal" !== e && t(128), this);
      };
      _proto9.canInsertTextBefore = function canInsertTextBefore() {
        return !1;
      };
      _proto9.canInsertTextAfter = function canInsertTextAfter() {
        return !1;
      };
      return lr;
    })(_Vo2);
    function cr() {
      return Jl(new _lr());
    }
    function ar(t) {
      return t instanceof _lr;
    }
    var _ur = (function () {
      function ur(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto0 = ur.prototype;
      _proto0.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto0.isBefore = function isBefore(t) {
        if (this.key === t.key) return this.offset < t.offset;
        return Ya(hi(ri(this, "next")), hi(ri(t, "next"))) < 0;
      };
      _proto0.getNode = function getNode() {
        var e = sl(this.key);
        return (null === e && t(20), e);
      };
      _proto0.set = function set(t, e, n, o) {
        var r = this._selection,
          s = this.key;
        (o && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          ys() ||
            (rl() === s && ol(t),
            null !== r &&
              (r.setCachedNodes(null),
              xr(r) && (r._cachedIsBackward = null),
              (r.dirty = !0))));
      };
      return ur;
    })();
    function fr(t, e, n) {
      return new _ur(t, e, n);
    }
    function dr(t, e) {
      var n = e.__key,
        o = t.offset,
        r = "element";
      if (sr(e)) {
        r = "text";
        var _t106 = e.getTextContentSize();
        o > _t106 && (o = _t106);
      } else if (!$s(e)) {
        var _t107 = e.getNextSibling();
        if (sr(_t107)) ((n = _t107.__key), (o = 0), (r = "text"));
        else {
          var _t108 = e.getParent();
          _t108 && ((n = _t108.__key), (o = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, o, r);
    }
    function hr(t, e) {
      if ($s(e)) {
        var _n55 = e.getLastDescendant();
        $s(_n55) || sr(_n55) ? dr(t, _n55) : dr(t, e);
      } else dr(t, e);
    }
    function gr(t, e, n, o) {
      var r = t.getNode(),
        s = r.getChildAtIndex(t.offset),
        i = rr();
      if ((i.setFormat(n), i.setStyle(o), ki(s))) s.splice(0, 0, [i]);
      else if (null !== s) {
        var _t109 = jl(r) ? vi().append(i) : i;
        s.insertBefore(_t109);
      } else if (jl(r)) {
        var _t110 = r.getLastChild();
        $s(_t110) && !_t110.isInline() && _t110.isEmpty()
          ? _t110.append(i)
          : r.append(vi().append(i));
      } else r.append(i);
      (t.is(e) && e.set(i.__key, 0, "text"), t.set(i.__key, 0, "text"));
    }
    function _r(e, n, o, r) {
      var s = e.anchor.getNode();
      sr(s) || t(398);
      var i = e.anchor.offset,
        l = rr(n);
      (l.setFormat(o), l.setStyle(r));
      var c = s.getParentOrThrow();
      if (0 === i)
        c.isInline() && !s.__prev ? c.insertBefore(l) : s.insertBefore(l, !1);
      else if (i === s.getTextContentSize())
        c.isInline() && !s.__next ? c.insertAfter(l) : s.insertAfter(l, !1);
      else {
        var _s$splitText = s.splitText(i),
          _t111 = _s$splitText[0];
        _t111.insertAfter(l, !1);
      }
      ("" === s.getTextContent() && s.isAttached() && s.remove(),
        l.selectEnd(),
        l.isComposing() &&
          "text" === e.anchor.type &&
          e.anchor.set(
            e.anchor.key,
            e.anchor.offset - n.length,
            e.anchor.type,
          ));
    }
    var _pr = (function () {
      function pr(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto1 = pr.prototype;
      _proto1.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto1.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto1.is = function is(t) {
        if (!Sr(t)) return !1;
        var e = this._nodes,
          n = t._nodes;
        return (
          e.size === n.size &&
          Array.from(e).every(function (t) {
            return n.has(t);
          })
        );
      };
      _proto1.isCollapsed = function isCollapsed() {
        return !1;
      };
      _proto1.isBackward = function isBackward() {
        return !1;
      };
      _proto1.getStartEndPoints = function getStartEndPoints() {
        return null;
      };
      _proto1.add = function add(t) {
        ((this.dirty = !0), this._nodes.add(t), (this._cachedNodes = null));
      };
      _proto1["delete"] = function _delete(t) {
        ((this.dirty = !0),
          this._nodes["delete"](t),
          (this._cachedNodes = null));
      };
      _proto1.clear = function clear() {
        ((this.dirty = !0), this._nodes.clear(), (this._cachedNodes = null));
      };
      _proto1.has = function has(t) {
        return this._nodes.has(t);
      };
      _proto1.clone = function clone() {
        return new pr(new Set(this._nodes));
      };
      _proto1.extract = function extract() {
        return this.getNodes();
      };
      _proto1.insertRawText = function insertRawText(t) {};
      _proto1.insertText = function insertText() {};
      _proto1.insertNodes = function insertNodes(t) {
        var e = this.getNodes().filter(function (t) {
            return null === Qc(t);
          }),
          n = e.length;
        if (0 === n) return;
        var o = e[n - 1];
        var r;
        if (sr(o)) r = o.select();
        else {
          var _t112 = o.getIndexWithinParent() + 1;
          r = o.getParentOrThrow().select(_t112, _t112);
        }
        r.insertNodes(t);
        for (var _t113 = 0; _t113 < n; _t113++) e[_t113].remove();
      };
      _proto1.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = this._nodes,
          n = [];
        for (var _t114 of e) {
          var _e79 = sl(_t114);
          null !== _e79 && n.push(_e79);
        }
        return (ys() || (this._cachedNodes = n), n);
      };
      _proto1.getTextContent = function getTextContent() {
        var t = this.getNodes();
        var e = "";
        for (var _n56 = 0; _n56 < t.length; _n56++)
          e += t[_n56].getTextContent();
        return e;
      };
      _proto1.deleteNodes = function deleteNodes() {
        var t = this.getNodes().filter(function (t) {
          return null === Qc(t);
        });
        if ((jr() || Gr()) === this && t[0]) {
          var _e80 = Da(t[0], "next");
          ii(Ua(_e80, _e80));
        }
        for (var _e81 of t) _e81.remove();
        mr();
      };
      return pr;
    })();
    function mr() {
      var t = dl();
      if (t.isEmpty()) {
        var _e82 = vi();
        (t.append(_e82), _e82.select());
      }
    }
    function yr(t) {
      var e = (function (t) {
        var e = t.getNode();
        if (t.offset > 0)
          return "element" === t.type && $s(e)
            ? e.getChildAtIndex(t.offset - 1)
            : null;
        for (
          var _t115 = e;
          null !== _t115 && !Nc(_t115) && !jl(_t115);
          _t115 = _t115.getParent()
        ) {
          var _e83 = _t115.getPreviousSibling();
          if (null !== _e83) return _e83;
        }
        return null;
      })(t);
      return ti(e) && ti(e.getPreviousSibling());
    }
    function xr(t) {
      return t instanceof _Cr;
    }
    var _Cr = (function () {
      function Cr(t, e, n, o) {
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
      var _proto10 = Cr.prototype;
      _proto10.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto10.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto10.is = function is(t) {
        return (
          !!xr(t) &&
          this.anchor.is(t.anchor) &&
          this.focus.is(t.focus) &&
          this.format === t.format &&
          this.style === t.style
        );
      };
      _proto10.isCollapsed = function isCollapsed() {
        return this.anchor.is(this.focus);
      };
      _proto10.getNodes = function getNodes() {
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
          for (var _n57 of t)
            if (Oa(_n57)) {
              var _t116 = _n57.origin;
              0 === e.length ? r.add(_t116) : (s.add(_t116), e.push(_t116));
            } else {
              var _t117 = _n57.origin;
              ($s(_t117) && s.has(_t117)) || e.push(_t117);
            }
          o && e.push(o.caret.origin);
          if (
            Ea(t.focus) &&
            $s(t.focus.origin) &&
            null === t.focus.getNodeAtCaret()
          )
            for (
              var _n58 = Fa(t.focus.origin, "previous");
              Oa(_n58) &&
              r.has(_n58.origin) &&
              !_n58.origin.isEmpty() &&
              _n58.origin.is(e[e.length - 1]);
              _n58 = La(_n58)
            )
              (r["delete"](_n58.origin), e.pop());
          for (; e.length > 1; ) {
            var _t118 = e[e.length - 1];
            if (!$s(_t118) || s.has(_t118) || _t118.isEmpty() || r.has(_t118))
              break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n59 = hi(t.anchor),
              _o34 = hi(t.anchor.getFlipped()),
              _r28 = function _r28(t) {
                return ka(t) ? t.origin : t.getNodeAtCaret();
              },
              _s27 =
                _r28(_n59) ||
                _r28(_o34) ||
                (t.anchor.getNodeAtCaret() ? _n59.origin : _o34.origin);
            e.push(_s27);
          }
          return e;
        })(_i(ci(this), "next"));
        return (ys() || (this._cachedNodes = e), e);
      };
      _proto10.setTextNodeRange = function setTextNodeRange(t, e, n, o) {
        return (
          this.anchor.set(t.__key, e, "text"),
          this.focus.set(n.__key, o, "text"),
          this
        );
      };
      _proto10.getTextContent = function getTextContent() {
        var t = this.getNodes();
        if (0 === t.length) return "";
        var e = t[0],
          n = t[t.length - 1],
          o = this.anchor,
          r = this.focus,
          s = o.isBefore(r),
          _kr = kr(this),
          i = _kr[0],
          l = _kr[1];
        var c = "",
          a = !0;
        for (var _u9 = 0; _u9 < t.length; _u9++) {
          var _f7 = t[_u9];
          if ($s(_f7) && !_f7.isInline()) {
            a || (c += "\n");
            var _t119 = "";
            for (var _e84 of oa(_f7)) {
              var _n60 = ra(_f7, _e84);
              null !== _n60 && (_t119 += _n60.getTextContent());
            }
            "" !== _t119 ? ((c += _t119), (a = !1)) : (a = !_f7.isEmpty());
          } else if (((a = !1), sr(_f7))) {
            var _t120 = _f7.getTextContent();
            (_f7 === e
              ? _f7 === n
                ? ("element" === o.type &&
                    "element" === r.type &&
                    r.offset !== o.offset) ||
                  (_t120 = i < l ? _t120.slice(i, l) : _t120.slice(l, i))
                : (_t120 = s ? _t120.slice(i) : _t120.slice(l))
              : _f7 === n &&
                (_t120 = s ? _t120.slice(0, l) : _t120.slice(0, i)),
              (c += _t120));
          } else
            (!Us(_f7) && !ti(_f7)) ||
              (_f7 === n && this.isCollapsed()) ||
              (c += _f7.getTextContent());
        }
        return c;
      };
      _proto10.applyDOMRange = function applyDOMRange(t) {
        var e = Ts(),
          n = e.getEditorState()._selection,
          o = $r(
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
          bt(this));
      };
      _proto10.clone = function clone() {
        var t = this.anchor,
          e = this.focus;
        return new Cr(
          fr(t.key, t.offset, t.type),
          fr(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto10.toggleFormat = function toggleFormat(t) {
        ((this.format = Qi(this.format, t, null)), (this.dirty = !0));
      };
      _proto10.setFormat = function setFormat(t) {
        ((this.format = t), (this.dirty = !0));
      };
      _proto10.setStyle = function setStyle(t) {
        ((this.style = t), (this.dirty = !0));
      };
      _proto10.hasFormat = function hasFormat(t) {
        var e = A[t];
        return 0 !== (this.format & e);
      };
      _proto10.insertRawText = function insertRawText(t) {
        this.insertNodes(os(t));
      };
      _proto10.insertText = function insertText(e) {
        var n = this.format,
          o = this.style;
        if (!this.isCollapsed()) {
          var _t121 = (
            this.focus.isBefore(this.anchor) ? this.focus : this.anchor
          ).getNode();
          if (
            (sr(_t121) && ((n = _t121.getFormat()), (o = _t121.getStyle())),
            this.removeText(),
            (this.format = n),
            (this.style = o),
            "" === e)
          )
            return;
          if (null === rl())
            return (
              "element" === this.anchor.type &&
                gr(this.anchor, this.focus, n, o),
              void _r(this, e, n, o)
            );
        }
        "element" === this.anchor.type && gr(this.anchor, this.focus, n, o);
        var r = this.anchor.getNode();
        sr(r) || t(398);
        var s = this.anchor.offset,
          i = r.getParentOrThrow(),
          l = r.getTextContentSize();
        if (
          Ji(r) ||
          (0 === s &&
            (!r.canInsertTextBefore() ||
              (!i.canInsertTextBefore() && !r.__prev))) ||
          (s === l &&
            (!r.canInsertTextAfter() || (!i.canInsertTextAfter() && !r.__next)))
        ) {
          if (r.isSegmented() && 0 !== s && s !== l) {
            if (null !== rl()) r.setMode("normal").setFormat(n).setStyle(o);
            else {
              var _t122 = rr(r.getTextContent());
              (_t122.setFormat(n), _t122.setStyle(o));
              var _e85 = jr() === this;
              (r.replace(_t122),
                this.setTextNodeRange(_t122, s, _t122, s),
                _e85 && jr() !== this && gl(this));
            }
            return void ("" !== e && this.insertText(e));
          }
          if ("" === e) return;
          if (0 === s) {
            var _t123 = r.getPreviousSibling();
            if (sr(_t123) && _t123.canInsertTextAfter() && !Ji(_t123))
              _t123.select();
            else {
              var _t124 = rr();
              (_t124.setFormat(n),
                _t124.setStyle(o),
                i.canInsertTextBefore()
                  ? r.insertBefore(_t124)
                  : i.insertBefore(_t124),
                _t124.select());
            }
            return void this.insertText(e);
          }
          if (s === l) {
            var _t125 = r.getNextSibling();
            if (sr(_t125) && _t125.canInsertTextBefore() && !Ji(_t125))
              _t125.select(0, 0);
            else {
              var _t126 = rr();
              (_t126.setFormat(n),
                _t126.setStyle(o),
                i.canInsertTextAfter()
                  ? r.insertAfter(_t126)
                  : i.insertAfter(_t126),
                _t126.select(0, 0));
            }
            return void this.insertText(e);
          }
          var _t127 = rr(e);
          return (
            _t127.setFormat(n),
            _t127.setStyle(o),
            r.replace(_t127),
            void _t127.select()
          );
        }
        if ("" === e) return;
        var c = i.isInline() && 0 === s && !r.__prev,
          a = i.isInline() && s === l && !r.__next,
          u = r.getFormat() !== n || r.getStyle() !== o;
        if (c || a || u) {
          if ("" !== r.getTextContent() || c || a)
            return void _r(this, e, n, o);
          (r.setFormat(n), r.setStyle(o));
        }
        (r.spliceText(s, 0, e, !0),
          r.isComposing() &&
            "text" === this.anchor.type &&
            this.anchor.set(
              this.anchor.key,
              this.anchor.offset - e.length,
              this.anchor.type,
            ));
      };
      _proto10.removeText = function removeText() {
        var t = jr() === this,
          e = this.anchor.key;
        (li(this, di(ci(this))),
          this.isCollapsed() &&
            (function (t, e) {
              var n = t.anchor;
              if (n.key === e) return;
              var o = n.getNode();
              var r = 0,
                s = "";
              sr(o)
                ? ((r = o.getFormat()), (s = o.getStyle()))
                : $s(o) && ((r = o.getTextFormat()), (s = o.getTextStyle()));
              (t.format === r && t.style === s) ||
                ((t.format = r), (t.style = s), (t.dirty = !0));
            })(this, e),
          t && jr() !== this && gl(this));
      };
      _proto10.formatText = function formatText(t, e) {
        if (e === void 0) {
          e = null;
        }
        Nr(this, t, e);
      };
      _proto10.insertNodes = function insertNodes(e) {
        var _s28;
        if (0 === e.length) return;
        this.isCollapsed() || this.removeText();
        var n = this.anchor.getNode();
        if (
          "element" === this.anchor.type &&
          $s(n) &&
          n.isShadowRoot() &&
          null !== Qc(n)
        ) {
          var _n$getFirstChild;
          var _o35 =
            (_n$getFirstChild = n.getFirstChild()) != null
              ? _n$getFirstChild
              : n.append(vi()).getFirstChild();
          if (null !== _o35 && !$s(_o35)) {
            var _t128 = vi();
            (_o35.insertBefore(_t128), (_o35 = _t128));
          }
          if (null !== _o35) {
            _o35.selectStart();
            var _n61 = jr();
            return (xr(_n61) || t(369), _n61.insertNodes(e));
          }
        }
        if ("element" === this.anchor.type && jl(n)) {
          var _t129 = cs(e),
            _o36 = _t129.getLastDescendant();
          return (
            n.splice(this.anchor.offset, 0, _t129.getChildren()),
            void (null !== _o36 && _o36.selectEnd())
          );
        }
        var o = this.isBackward() ? this.focus : this.anchor;
        var r = o.getNode(),
          s = jc(r, Nc);
        var i = e[e.length - 1];
        if ($s(s) && "__language" in s) {
          if ("__language" in e[0]) this.insertText(e[0].getTextContent());
          else {
            var _ss = ss(this),
              _t130 = _ss[1];
            (s.splice(_t130, 0, e), i.selectEnd());
          }
          return;
        }
        if (
          !e.some(function (t) {
            return ($s(t) || Us(t)) && !t.isInline();
          })
        ) {
          $s(s) || t(211, r.constructor.name, r.getType());
          var _ss2 = ss(this, !0),
            _n62 = _ss2[0],
            _o37 = _ss2[1];
          return (($s(_n62) ? _n62 : s).splice(_o37, 0, e), void i.selectEnd());
        }
        if ($s(s) && null !== Qc(s)) {
          var _ss3 = ss(this),
            _t131 = _ss3[1],
            _n63 = rs(e);
          s.splice(_t131, 0, _n63);
          var _o38 = _n63[_n63.length - 1];
          return void (void 0 !== _o38
            ? _o38.selectEnd()
            : s.select(_t131, _t131));
        }
        if (null === s) {
          var _t132 = cs(e),
            _n64 = _t132.getLastDescendant();
          var _o39 = ri(this.anchor, "next");
          for (var _e86 of _t132.getChildren()) _o39 = Ci(_e86, _o39);
          return void (null !== _n64 && _n64.selectEnd());
        }
        if ($s(s) && !s.isParentRequired() && !jl(s.getParentOrThrow())) {
          var _ss4 = ss(this),
            _t133 = _ss4[1],
            _n65 = rs(e);
          s.splice(_t133, 0, _n65);
          var _o40 = _n65[_n65.length - 1];
          return void (void 0 !== _o40
            ? _o40.selectEnd()
            : s.select(_t133, _t133));
        }
        var l = cs(e),
          c = l.getLastDescendant(),
          a = l.getChildren(),
          u = yr(o),
          f = !$s(s) || !s.isEmpty() ? this.insertParagraph() : null;
        f && !s.isAttached() && ((r = this.anchor.getNode()), (s = jc(r, Nc)));
        var d = a[a.length - 1];
        var h = a[0];
        var g;
        ((g = h),
          u ||
            !$s(g) ||
            !Nc(g) ||
            g.isEmpty() ||
            !$s(s) ||
            (s.isEmpty() && !s.canMergeWhenEmpty()) ||
            ($s(s) || t(211, r.constructor.name, r.getType()),
            (_s28 = s).append.apply(_s28, h.getChildren()),
            (h = a[1])),
          h &&
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
              for (var _t134 of s) i = i.insertAfter(_t134);
            })(s, h)));
        var _ = jc(c, Nc),
          p = c.selectEnd();
        (f &&
          ($s(_) && (f.canMergeWhenEmpty() || Nc(d))
            ? (_.append.apply(_, f.getChildren()), f.remove())
            : f.isEmpty() && f.remove()),
          $s(s) && s.isEmpty() && s.remove());
        var m = $s(s) ? s.getLastChild() : null;
        ti(m) && _ !== s && m.remove();
        var y = hi(ri(p.anchor, "next"));
        (si(p.anchor, y), si(p.focus, y));
      };
      _proto10.insertParagraph = function insertParagraph() {
        this.isCollapsed() || this.removeText();
        var e = this.anchor.getNode();
        if ("element" === this.anchor.type && jl(e)) {
          var _t135 = vi();
          return (
            e.splice(this.anchor.offset, 0, [_t135]),
            _t135.select(),
            _t135
          );
        }
        var _ss5 = ss(this),
          n = _ss5[1],
          o = jc(this.anchor.getNode(), Nc);
        if (null !== o && null !== Qc(o)) return null;
        $s(o) || t(213);
        var r = o.getChildAtIndex(n),
          s = r ? [r].concat(r.getNextSiblings()) : [],
          i = o.insertNewAfter(this, !1);
        return i ? (i.append.apply(i, s), i.selectStart(), i) : null;
      };
      _proto10.insertLineBreak = function insertLineBreak(t) {
        var e = Zs();
        if ((this.insertNodes([e]), t)) {
          var _t136 = e.getParentOrThrow(),
            _n66 = e.getIndexWithinParent();
          _t136.select(_n66, _n66);
        }
      };
      _proto10.extract = function extract() {
        var _n$splitText;
        var t = [].concat(this.getNodes()),
          e = t.length;
        var n = t[0],
          o = t[e - 1];
        var _kr2 = kr(this),
          r = _kr2[0],
          s = _kr2[1],
          i = this.isBackward(),
          _ref33 = i ? [this.focus, this.anchor] : [this.anchor, this.focus],
          l = _ref33[0],
          c = _ref33[1],
          _ref34 = i ? [s, r] : [r, s],
          a = _ref34[0],
          u = _ref34[1];
        if (0 === e) return [];
        if (1 === e) {
          if (sr(n) && !this.isCollapsed()) {
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
          (sr(n) &&
            (a === n.getTextContentSize()
              ? t.shift()
              : 0 !== a &&
                ((_n$splitText = n.splitText(a)),
                (n = _n$splitText[1]),
                (t[0] = n),
                l.set(n.getKey(), 0, "text"))),
          sr(o))
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
      _proto10.modify = function modify(t, e, n) {
        if (as(this, t, e, n)) return;
        var o = "move" === t,
          r = Ts(),
          s = Zl(Wl(r));
        if (!s) return;
        var i = r._blockCursorElement,
          l = r._rootElement,
          c = this.focus.getNode();
        null === l ||
          null === i ||
          !$s(c) ||
          c.isInline() ||
          c.canBeEmpty() ||
          Ql(i, r, l);
        var a = Fl(r, this.focus.key);
        var u = a;
        if (
          ("text" === this.focus.type && (u = sr(c) ? bc(c, a, r) : null),
          this.dirty)
        ) {
          var _t138 = Fl(r, this.anchor.key);
          var _e89 = _t138;
          if ("text" === this.anchor.type) {
            var _n67 = this.anchor.getNode();
            _e89 = sr(_n67) ? bc(_n67, _t138, r) : null;
          }
          _e89 && u && Zr(s, _e89, this.anchor.offset, u, this.focus.offset);
        }
        if ("character" === n && sr(c) && c.isUnmergeable()) {
          if (
            e
              ? 0 === this.focus.offset
              : this.focus.offset === c.getTextContentSize()
          ) {
            var _t139 = Da(c, e ? "previous" : "next").getNodeAtCaret();
            if (sr(_t139)) {
              if (!o) {
                var _n68 = _t139.getTextContentSize();
                return (
                  e
                    ? this.focus.set(_t139.__key, _n68 - 1, "text")
                    : this.focus.set(_t139.__key, 1, "text"),
                  void (this.dirty = !0)
                );
              }
              {
                var _n69 = r.getElementByKey(_t139.getKey()),
                  _o41 = _n69 ? bc(_t139, _n69, r) : null;
                if (_o41) {
                  var _t140 = e ? _o41.length : 0;
                  Zr(s, _o41, _t140, _o41, _t140);
                }
              }
            }
          }
        }
        if ((Mr(s, t, e ? "backward" : "forward", n, l), s.rangeCount > 0)) {
          var _t141 = lc(s, r._rootElement),
            _n70 = _t141 || s.getRangeAt(0),
            _i15 = this.anchor.getNode(),
            _l1 = Ys(_i15) ? _i15 : Hl(_i15);
          if ((this.applyDOMRange(_n70), (this.dirty = !0), !o)) {
            Ar(this, e, _l1);
            (_t141
              ? "backward" !== s.direction
              : s.anchorNode === _n70.startContainer &&
                s.anchorOffset === _n70.startOffset) || br(this);
          }
        }
        "lineboundary" === n && as(this, t, e, n, "decorators");
      };
      _proto10.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            $s(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t142 = e.getParent(),
            _n71 =
              e.getNextSibling() ||
              (null === _t142 ? null : _t142.getNextSibling());
          if ($s(_n71) && _n71.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto10.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e90 = this.anchor;
          var _n72 = _e90.getNode();
          if (this.forwardDeletion(_e90, _n72, t)) {
            var _t143 = $s(_n72) ? _n72.getNextSibling() : null;
            if (
              !($s(_n72) && _n72.isEmpty() && $s(_t143) && _t143.isShadowRoot())
            )
              return;
          }
          var _o42 = ri(_e90, t ? "previous" : "next"),
            _r29 = za(_o42);
          if (
            _r29.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            if ("element" === _e90.type) {
              var _t144 = _o42.getNodeAtCaret();
              if ($s(_t144) && Xl(_t144)) {
                var _e91 = _t144.getParent();
                _t144.remove();
                var _n73 = hl(_e91, _t144);
                return void (null !== _n73 && _n73.selectStart());
              }
            }
            var _t145 = { type: "initial" };
            for (var _e92 of _r29.iterNodeCarets("shadowRoot"))
              if (Oa(_e92)) {
                if (_e92.origin.isInline());
                else {
                  if (_e92.origin.isShadowRoot()) {
                    if ("merge-block" === _t145.type) break;
                    if (
                      $s(_r29.anchor.origin) &&
                      _r29.anchor.origin.isEmpty()
                    ) {
                      var _t146 = hi(_e92);
                      (li(this, Ua(_t146, _t146)), _r29.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t145.type &&
                    "merge-block" !== _t145.type) ||
                    (_t145 = {
                      block: _t145.block,
                      caret: _e92,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t145.type) break;
                if (Ea(_e92)) {
                  if ($s(_e92.origin)) {
                    if (_e92.origin.isInline()) {
                      if (!_e92.origin.isParentOf(_r29.anchor.origin)) break;
                    } else
                      _t145 = { block: _e92.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (Us(_e92.origin)) {
                    if (_e92.origin.isIsolated());
                    else if (
                      "merge-next-block" === _t145.type &&
                      (_e92.origin.isKeyboardSelectable() ||
                        !_e92.origin.isInline()) &&
                      $s(_r29.anchor.origin) &&
                      _r29.anchor.origin.isEmpty()
                    ) {
                      _r29.anchor.origin.remove();
                      var _t147 = Hr();
                      (_t147.add(_e92.origin.getKey()), gl(_t147));
                    } else {
                      var _t148 = _e92.origin,
                        _n74 = _t148.getParent();
                      _t148.remove();
                      var _o43 = hl(_n74, _t148);
                      null !== _o43 && _o43.selectStart();
                    }
                    return;
                  }
                  if (ti(_e92.origin)) return void _e92.origin.remove();
                  break;
                }
              }
            if ("merge-block" === _t145.type) {
              var _t149 = _t145,
                _e93 = _t149.caret,
                _n75 = _t149.block;
              if (oa(_n75).length > 0) return;
              return _e93.origin.isEmpty() &&
                !_n75.isEmpty() &&
                _e93.origin.getParent() === _n75.getParent()
                ? void _e93.origin.remove(!0)
                : (li(
                    this,
                    Ua(
                      !_e93.origin.isEmpty() && _n75.isEmpty()
                        ? ai(Da(_n75, _e93.direction))
                        : _r29.anchor,
                      _e93,
                    ),
                  ),
                  this.removeText());
            }
            for (var _t150 = _e90.getNode(); null !== _t150; ) {
              if (null !== Qc(_t150)) return;
              if ($s(_t150) && _t150.isShadowRoot()) break;
              _t150 = _t150.getParent();
            }
          }
          var _s29 = this.focus;
          if ((Dr(this, t, "character"), this.isCollapsed())) {
            if (t && 0 === _e90.offset && Er(this, _e90.getNode())) return;
          } else {
            var _o44 = "text" === _s29.type ? _s29.getNode() : null;
            if (
              ((_n72 = "text" === _e90.type ? _e90.getNode() : null),
              null !== _o44 && _o44.isSegmented())
            ) {
              var _e94 = _s29.offset,
                _r30 = _o44.getTextContentSize();
              if (_o44.is(_n72) || (t && _e94 !== _r30) || (!t && 0 !== _e94))
                return void Pr(_o44, t, _e94);
            } else if (null !== _n72 && _n72.isSegmented()) {
              var _r31 = _e90.offset,
                _s30 = _n72.getTextContentSize();
              if (_n72.is(_o44) || (t && 0 !== _r31) || (!t && _r31 !== _s30))
                return void Pr(_n72, t, _r31);
            }
            !(function (t, e) {
              var n = t.anchor,
                o = t.focus,
                r = n.getNode(),
                s = o.getNode();
              if (r === s && "text" === n.type && "text" === o.type) {
                var _t151 = n.offset,
                  _s31 = o.offset,
                  _i16 = _t151 < _s31,
                  _l10 = _i16 ? _t151 : _s31,
                  _c9 = _i16 ? _s31 : _t151,
                  _a6 = _c9 - 1;
                if (_l10 !== _a6) {
                  (function (t) {
                    return !(ml(t) || Ir(t));
                  })(r.getTextContent().slice(_l10, _c9)) &&
                    (e ? o.set(o.key, _a6, o.type) : n.set(n.key, _a6, n.type));
                }
              }
            })(this, t);
          }
        }
        if (
          (e || Or(this),
          this.removeText(),
          t &&
            !e &&
            this.isCollapsed() &&
            "element" === this.anchor.type &&
            0 === this.anchor.offset)
        ) {
          var _t152 = this.anchor.getNode();
          (_t152.isEmpty() &&
            Ys(_t152.getParent()) &&
            null === _t152.getPreviousSibling() &&
            Er(this, _t152),
            mr());
        }
      };
      _proto10.deleteLine = function deleteLine(t) {
        var e = this.isCollapsed(),
          n = Lr(this.anchor);
        if (null !== n && Us(Zc(n)))
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
          (this.isCollapsed() && Dr(this, t, "lineboundary"),
          this.isCollapsed())
        )
          this.deleteCharacter(t);
        else {
          jc(this.anchor.getNode(), Nc) !== jc(this.focus.getNode(), Nc)
            ? (this.focus.set(
                this.anchor.key,
                this.anchor.offset,
                this.anchor.type,
              ),
              this.deleteCharacter(t))
            : (e || Or(this), this.removeText());
        }
      };
      _proto10.deleteWord = function deleteWord(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e95 = this.anchor,
            _n76 = _e95.getNode();
          if (this.forwardDeletion(_e95, _n76, t)) return;
          Dr(this, t, "word");
        }
        this.isCollapsed()
          ? this.deleteCharacter(t)
          : (e || Or(this), this.removeText());
      };
      _proto10.isBackward = function isBackward() {
        var t = this._cachedIsBackward;
        if (null !== t) return t;
        var e = this.focus.isBefore(this.anchor);
        return (ys() || (this._cachedIsBackward = e), e);
      };
      _proto10.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return Cr;
    })();
    function Sr(t) {
      return t instanceof _pr;
    }
    function Tr(t, e) {
      var _u$splitText, _h$splitText;
      if (Sr(t)) {
        for (var _n77 of t.getNodes())
          Jo(_n77) && _n77.setFormat(e(_n77.getFormat()));
        return;
      }
      if (t.isCollapsed()) return (t.setFormat(e(t.format)), void ol(null));
      var n = [];
      for (var _o45 of t.getNodes())
        sr(_o45)
          ? n.push(_o45)
          : $s(_o45)
            ? _o45.setTextFormat(e(_o45.getTextFormat()))
            : Jo(_o45) && _o45.setFormat(e(_o45.getFormat()));
      var o = n.length;
      if (0 === o) return (t.setFormat(e(t.format)), void ol(null));
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
        var _n78 = e(u.getFormat());
        if (Ji(u) || (0 === f && g === u.getTextContentSize()))
          u.setFormat(_n78);
        else {
          var _t153 = u.splitText(f, g),
            _e96 = 0 === f ? _t153[0] : _t153[1];
          (_e96.setFormat(_n78),
            "text" === l.type && l.set(_e96.__key, 0, "text"),
            "text" === c.type && c.set(_e96.__key, g - f, "text"));
        }
        return void (t.format = _n78);
      }
      0 === f ||
        Ji(u) ||
        ((_u$splitText = u.splitText(f)), (u = _u$splitText[1]), (f = 0));
      var _ = e(u.getFormat());
      u.setFormat(_);
      var p = e(h.getFormat());
      g > 0 &&
        (g === h.getTextContentSize() ||
          Ji(h) ||
          ((_h$splitText = h.splitText(g)),
          (h = _h$splitText[0]),
          _h$splitText),
        h.setFormat(p));
      for (var _t154 = a + 1; _t154 < d; _t154++) {
        var _o46 = n[_t154];
        _o46.setFormat(e(_o46.getFormat()));
      }
      ("text" === l.type && l.set(u.__key, f, "text"),
        "text" === c.type && c.set(h.__key, g, "text"),
        (t.format = _ | p));
    }
    function Nr(t, e, n) {
      if (n === void 0) {
        n = null;
      }
      var o = null === n && xr(t) ? Qi(t.format, e, null) : n;
      Tr(t, function (t) {
        return Qi(t, e, o);
      });
    }
    function vr(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function kr(t) {
      var e = t.getStartEndPoints();
      if (null === e) return [0, 0];
      var n = e[0],
        o = e[1];
      return "element" === n.type &&
        "element" === o.type &&
        n.key === o.key &&
        n.offset === o.offset
        ? [0, 0]
        : [vr(n), vr(o)];
    }
    function Er(t, e) {
      for (var _n79 = e; _n79; _n79 = _n79.getParent()) {
        if ($s(_n79)) {
          if (_n79.collapseAtStart(t)) return !0;
          if (jl(_n79)) break;
        }
        if (_n79.getPreviousSibling()) break;
      }
      return !1;
    }
    function Or(t) {
      var e = dl();
      !e.isEmpty() &&
        Si(e, t) &&
        (t.anchor.set(e.getKey(), 0, "element"),
        t.focus.set(e.getKey(), e.getChildrenSize(), "element"));
    }
    function br(t) {
      var e = t.focus,
        n = t.anchor,
        o = n.key,
        r = n.offset,
        s = n.type;
      (n.set(e.key, e.offset, e.type, !0), e.set(o, r, s, !0));
    }
    function Mr(t, e, n, o, r) {
      var s = "character" === o ? ac(t, r) : null,
        i = s && s.focusNode,
        l = s ? s.focusOffset : 0;
      if (
        (t.modify(e, n, o),
        null === s ||
          !(function (t, e, n) {
            return (
              null !== t &&
              3 === t.nodeType &&
              ("backward" === n ? e > 0 : "forward" === n && e < t.length)
            );
          })(i, l, n))
      )
        return;
      var c = ac(t, r);
      c.focusNode === i && c.focusOffset === l && t.modify(e, n, o);
    }
    function Ar(t, e, n) {
      var o = t.getNodes(),
        r = o.filter(function (t) {
          return $l(t, n);
        });
      if (0 === r.length || r.length === o.length) return !1;
      var s = e ? r[0] : r[r.length - 1],
        i = $s(s) ? s : s.getParentOrThrow();
      return (e ? i.selectStart() : i.selectEnd(), !0);
    }
    function Dr(t, e, n) {
      if (as(t, "extend", e, n)) return;
      var o = Ts(),
        r = Zl(Wl(o));
      if (!r || "function" != typeof r.modify) return;
      var s = o._blockCursorElement,
        i = o._rootElement,
        l = t.anchor,
        c = t.focus.getNode();
      null === i ||
        null === s ||
        !$s(c) ||
        c.isInline() ||
        c.canBeEmpty() ||
        Ql(s, o, i);
      var a = function a(t) {
          var e = t.getNode(),
            n = o.getElementByKey(t.key);
          return null !== n && "text" === t.type && sr(e) ? bc(e, n, o) : n;
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
        (Zr(r, _, p, _, p),
        Mr(r, "move", e ? "backward" : "forward", n, i),
        0 === r.rangeCount)
      )
        return;
      var m = lc(r, i) || r.getRangeAt(0),
        y = m.startContainer,
        x = m.startOffset;
      if (
        h &&
        "character" === n &&
        "text" === l.type &&
        sr(u) &&
        u.isUnmergeable()
      ) {
        if (d === (e ? 0 : u.getTextContentSize())) {
          var _n80 = Da(u, e ? "previous" : "next").getNodeAtCaret();
          if (sr(_n80)) {
            var _o47 = e ? _n80.getTextContentSize() - 1 : 1;
            return (t.focus.set(_n80.__key, _o47, "text"), void (t.dirty = !0));
          }
        }
      }
      if (h && "character" === n && "text" === l.type) {
        var _n81 = e ? 0 : u.getTextContentSize(),
          _o48 = y === f ? x : d !== _n81 ? _n81 : -1;
        if (_o48 >= 0)
          return void (
            _o48 !== d && (t.focus.set(l.key, _o48, "text"), (t.dirty = !0))
          );
      }
      var _ref35 = e ? [y, x, f, d] : [f, d, y, x],
        C = _ref35[0],
        S = _ref35[1],
        T = _ref35[2],
        N = _ref35[3],
        v = Ys(u) ? u : Hl(u);
      (t.applyDOMRange({
        collapsed: !1,
        endContainer: T,
        endOffset: N,
        startContainer: C,
        startOffset: S,
      }),
        (t.dirty = !0),
        !Ar(t, e, v) && e && br(t),
        "lineboundary" === n && as(t, "extend", e, n, "decorators"));
    }
    function wr() {
      try {
        var _t155 = new RegExp("\\p{Emoji}", "u"),
          _e97 = _t155.test.bind(_t155);
        if (_e97("\u2764\ufe0f") && _e97("#\ufe0f\u20e3") && _e97("\u{1f44d}"))
          return _e97;
      } catch (t) {}
      return function () {
        return !1;
      };
    }
    var Ir = wr();
    function Pr(t, e, n) {
      var o = t,
        r = o.getTextContent().split(/(?=\s)/g),
        s = r.length;
      var i = 0,
        l = 0;
      for (var _t156 = 0; _t156 < s; _t156++) {
        var _o49 = _t156 === s - 1;
        if (
          ((l = i), (i += r[_t156].length), (e && i === n) || i > n || _o49)
        ) {
          (r.splice(_t156, 1), _o49 && (l = void 0));
          break;
        }
      }
      var c = r.join("").trim();
      "" === c ? o.remove() : (o.setTextContent(c), o.select(l, l));
    }
    function Fr(e, n, o, r) {
      var s,
        i = n,
        l = !1;
      if (pc(e)) {
        var _c0 = !1;
        var _a7 = e.childNodes,
          _u0 = _a7.length,
          _f8 = r._blockCursorElement;
        (i === _u0 && _u0 > 0 && ((_c0 = !0), (i = _u0 - 1)),
          void 0 !== cl(e, r) || Bc(e, r) || (l = !0));
        var _d7 = _a7[i],
          _h7 = !1;
        if (_d7 === _f8) ((_d7 = _a7[i + 1]), (_h7 = !0));
        else if (null !== _f8) {
          var _t157 = _f8.parentNode;
          if (e === _t157) {
            n > Array.prototype.indexOf.call(_t157.children, _f8) && i--;
          }
        }
        if (((s = pl(_d7)), sr(s))) i = Ia(s, _c0 ? "next" : "previous");
        else {
          var _a8 = pl(e);
          if (null === _a8) return null;
          if ($s(_a8)) {
            var _u1$resolveChildIndex;
            var _l11 = r.getElementByKey(_a8.getKey());
            null === _l11 && t(214);
            var _u1 = Ec(_a8, _l11, r);
            ((_u1$resolveChildIndex = _u1.resolveChildIndex(_a8, _l11, e, n)),
              (_a8 = _u1$resolveChildIndex[0]),
              (i = _u1$resolveChildIndex[1]),
              $s(_a8) || t(215),
              _c0 &&
                i >= _a8.getChildrenSize() &&
                (i = Math.max(0, _a8.getChildrenSize() - 1)));
            var _f9 = _a8.getChildAtIndex(i);
            if (
              $s(_f9) &&
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
              var _t158 = _c0
                ? _f9.getLastDescendant()
                : _f9.getFirstDescendant();
              (null === _t158
                ? (_a8 = _f9)
                : ((_f9 = _t158),
                  (_a8 = $s(_f9) ? _f9 : _f9.getParentOrThrow())),
                (i = 0));
            }
            sr(_f9)
              ? ((s = _f9),
                (_a8 = null),
                (i = Ia(_f9, _c0 ? "next" : "previous")))
              : _f9 !== _a8 &&
                _c0 &&
                !_h7 &&
                ($s(_a8) || t(216),
                (i = Math.min(_a8.getChildrenSize(), i + 1)));
          } else {
            var _t159 = Zc(_a8),
              _o50 = null !== _t159 ? _t159 : _a8,
              _s32 = _o50.getIndexWithinParent(),
              _l12 = r.getElementByKey(_a8.getKey());
            var _c1 = "after";
            if (null !== _l12 && pl(e) === _a8) {
              var _t160 = Ec(_a8, _l12, r);
              _t160.element !== _l12
                ? (_c1 = _t160.resolveLeafPosition(_l12, e, n))
                : 0 === n && Us(_a8) && (_c1 = "before");
            }
            ((i = "before" === _c1 ? _s32 : _s32 + 1),
              (_a8 = _o50.getParentOrThrow()));
          }
          if ($s(_a8)) return [fr(_a8.__key, i, "element"), l];
        }
      } else s = pl(e);
      return sr(s) ? [fr(s.__key, Ia(s, i, "clamp"), "text"), l] : null;
    }
    function Rr(t, e, n) {
      var o = t.offset,
        r = t.getNode();
      if (0 === o) {
        var _o51 = r.getPreviousSibling(),
          _s33 = r.getParent();
        if (e) {
          if ((n || !e) && null === _o51 && $s(_s33) && _s33.isInline()) {
            var _e98 = _s33.getPreviousSibling();
            sr(_e98) && t.set(_e98.__key, _e98.getTextContent().length, "text");
          }
        } else
          $s(_o51) && !n && _o51.isInline()
            ? t.set(_o51.__key, _o51.getChildrenSize(), "element")
            : sr(_o51) &&
              !r.isUnmergeable() &&
              t.set(_o51.__key, _o51.getTextContent().length, "text");
      } else if (o === r.getTextContent().length) {
        var _o52 = r.getNextSibling(),
          _s34 = r.getParent();
        if (e && $s(_o52) && _o52.isInline()) t.set(_o52.__key, 0, "element");
        else if (
          (n || e) &&
          null === _o52 &&
          $s(_s34) &&
          _s34.isInline() &&
          !_s34.canInsertTextAfter() &&
          _s34.getTextContentSize() > 1
        ) {
          var _e99 = _s34.getNextSibling();
          sr(_e99) && t.set(_e99.__key, 0, "text");
        }
      }
    }
    function Lr(t) {
      var e = sl(t.key);
      return null === e ? null : ea(e);
    }
    function Kr(t, e, n) {
      var o = Lr(t),
        r = Lr(e);
      if (o === r || (null !== o && null !== r && o.is(r))) return !1;
      var s = n(o, r);
      if (null !== o)
        return (
          $s(o)
            ? e.set(o.getKey(), s ? o.getChildrenSize() : 0, "element")
            : e.set(o.getKey(), s ? o.getTextContentSize() : 0, "text"),
          !0
        );
      var i = Zc(r);
      if (null === i) return !1;
      var l = i.getParent();
      if (null === l) return !1;
      var c = i.getIndexWithinParent();
      return (e.set(l.getKey(), s ? c + 1 : c, "element"), !0);
    }
    function Br(t) {
      var e = Kr(t.anchor, t.focus, function (e, n) {
        return (function (t, e, n, o) {
          if (null !== n && null !== o) {
            var _t161 = Zc(n),
              _e100 = Zc(o);
            if (null !== _t161 && _t161.is(_e100)) {
              for (var _e101 of na(_t161).values()) {
                if (_e101 === n.getKey()) return !0;
                if (_e101 === o.getKey()) return !1;
              }
              return !0;
            }
            return null === _t161 || null === _e100 || _t161.isBefore(_e100);
          }
          if (null !== n) {
            var _t162 = Zc(n),
              _o53 = sl(e.key);
            return (
              null === _t162 ||
              null === _o53 ||
              !(!_t162.is(_o53) && !_t162.isParentOf(_o53)) ||
              _t162.isBefore(_o53)
            );
          }
          var r = Zc(o),
            s = sl(t.key);
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
    function $r(t, e, n, o, r, s) {
      if (null === t || null === n || !Ui(r, t, n)) return null;
      var i = Fr(t, e, xr(s) ? s.anchor : null, r);
      if (null === i) return null;
      var l = Fr(n, o, xr(s) ? s.focus : null, r);
      if (null === l) return null;
      var c = i[0],
        a = i[1],
        u = l[0],
        f = l[1];
      if ("element" === c.type && "element" === u.type) {
        var _e102 = pl(t),
          _o54 = pl(n);
        if (Us(_e102) && Us(_o54)) return null;
      }
      var d =
        r._slotsUsed &&
        Kr(c, u, function () {
          return (
            0 !==
            (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_FOLLOWING)
          );
        });
      return (
        (function (t, e) {
          if ("text" === t.type && "text" === e.type) {
            var _n82 = t.isBefore(e),
              _o55 = t.is(e);
            (Rr(t, _n82, _o55),
              Rr(e, !_n82, _o55),
              _o55 && e.set(t.key, t.offset, t.type));
          }
        })(c, u),
        [c, u, a || f || d]
      );
    }
    function zr(t) {
      return $s(t) && !t.isInline();
    }
    function Wr(t, e, n, o, r, s) {
      var i = Ss(),
        l = new _Cr(fr(t, e, r), fr(n, o, s), 0, "");
      return ((l.dirty = !0), (i._selection = l), l);
    }
    function Ur() {
      var t = fr("root", 0, "element"),
        e = fr("root", 0, "element");
      return new _Cr(t, e, 0, "");
    }
    function Hr() {
      return new _pr(new Set());
    }
    function Yr(t, e, n, o) {
      var r = n._window;
      if (null === r) return null;
      var s = o || r.event,
        i = s ? s.type : void 0,
        l = "selectionchange" === i,
        c =
          !et &&
          (l ||
            "beforeinput" === i ||
            "compositionstart" === i ||
            "compositionend" === i ||
            ("click" === i && s && 3 === s.detail) ||
            "drop" === i ||
            void 0 === i);
      var a, u, f, d;
      if (xr(t) && !c) return t.clone();
      {
        if (null === e) return null;
        var _o56 = ac(e, n._rootElement);
        if (
          ((a = _o56.anchorNode),
          (u = _o56.focusNode),
          (f = _o56.anchorOffset),
          (d = _o56.focusOffset),
          (l || void 0 === i) && xr(t) && !Ui(n, a, u))
        )
          return t.clone();
      }
      var h = $r(a, f, u, d, n, t);
      if (null === h) return null;
      var g = h[0],
        _ = h[1],
        p = h[2];
      var m = 0,
        y = "";
      if (xr(t)) {
        var _e103 = t.anchor;
        if (g.key === _e103.key) ((m = t.format), (y = t.style));
        else {
          var _t163 = g.getNode();
          sr(_t163)
            ? ((m = _t163.getFormat()), (y = _t163.getStyle()))
            : $s(_t163) &&
              ((m = _t163.getTextFormat()), (y = _t163.getTextStyle()));
        }
      }
      var x = new _Cr(g, _, m, y);
      return (p && (x.dirty = !0), x);
    }
    function jr() {
      return Ss()._selection;
    }
    function Gr() {
      return Ts()._editorState._selection;
    }
    function Jr(t, e) {
      var n = e.__key;
      return t.anchor.key === n || t.focus.key === n;
    }
    function Vr(t, e, n, o) {
      if (o === void 0) {
        o = 1;
      }
      if (!Jr(t, e)) return;
      var r = t.anchor,
        s = t.focus,
        i = e.__key;
      if (t.isCollapsed()) {
        var _e104 = r.offset;
        if ((n <= _e104 && o > 0) || (n < _e104 && o < 0)) {
          var _n83 = Math.max(0, _e104 + o);
          (r.set(i, _n83, "element"), s.set(i, _n83, "element"), qr(t));
        }
      } else {
        var _l13 = t.isBackward(),
          _c10 = _l13 ? s : r,
          _a9 = _c10.getNode(),
          _u10 = _l13 ? r : s,
          _f0 = _u10.getNode();
        if (e.is(_a9)) {
          var _t164 = _c10.offset;
          ((n <= _t164 && o > 0) || (n < _t164 && o < 0)) &&
            _c10.set(i, Math.max(0, _t164 + o), "element");
        }
        if (e.is(_f0)) {
          var _t165 = _u10.offset;
          ((n <= _t165 && o > 0) || (n < _t165 && o < 0)) &&
            _u10.set(i, Math.max(0, _t165 + o), "element");
        }
      }
      qr(t);
    }
    function qr(t) {
      var e = t.anchor,
        n = e.offset,
        o = t.focus,
        r = o.offset,
        s = e.getNode(),
        i = o.getNode();
      if (t.isCollapsed()) {
        if (!$s(s)) return;
        var _t166 = s.getChildrenSize(),
          _r32 = n >= _t166,
          _i17 = _r32 ? s.getChildAtIndex(_t166 - 1) : s.getChildAtIndex(n);
        if (sr(_i17)) {
          var _t167 = 0;
          (_r32 && (_t167 = _i17.getTextContentSize()),
            e.set(_i17.__key, _t167, "text"),
            o.set(_i17.__key, _t167, "text"));
        }
        return;
      }
      if ($s(s)) {
        var _t168 = s.getChildrenSize(),
          _o57 = n >= _t168,
          _r33 = _o57 ? s.getChildAtIndex(_t168 - 1) : s.getChildAtIndex(n);
        if (sr(_r33)) {
          var _t169 = 0;
          (_o57 && (_t169 = _r33.getTextContentSize()),
            e.set(_r33.__key, _t169, "text"));
        }
      }
      if ($s(i)) {
        var _t170 = i.getChildrenSize(),
          _e105 = r >= _t170,
          _n84 = _e105 ? i.getChildAtIndex(_t170 - 1) : i.getChildAtIndex(r);
        if (sr(_n84)) {
          var _t171 = 0;
          (_e105 && (_t171 = _n84.getTextContentSize()),
            o.set(_n84.__key, _t171, "text"));
        }
      }
    }
    function Xr(t, e, n, o, r) {
      var s = null,
        i = 0,
        l = null;
      (null !== o
        ? ((s = o.__key),
          sr(o)
            ? ((i = o.getTextContentSize()), (l = "text"))
            : $s(o) && ((i = o.getChildrenSize()), (l = "element")))
        : null !== r &&
          ((s = r.__key), sr(r) ? (l = "text") : $s(r) && (l = "element")),
        null !== s && null !== l
          ? t.set(s, i, l)
          : ((i = e.getIndexWithinParent()),
            -1 === i && (i = n.getChildrenSize()),
            t.set(n.__key, i, "element")));
    }
    function Qr(t, e, n, o, r) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : r), "text")
        : t.offset > o.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function Zr(t, e, n, o, r) {
      try {
        t.setBaseAndExtent(e, n, o, r);
      } catch (t) {}
    }
    function ts(t, e, n) {
      var o = Fl(t, e.getKey());
      if ($s(e)) {
        var _r34 = Ec(e, o, t);
        return [_r34.element, n + _r34.getFirstChildOffset()];
      }
      return [o, n];
    }
    function es(t, e, n, o, r, s) {
      var i = s.getRootNode(),
        l = qi(i) || ec(i) ? gc(i) : null;
      if ((r.has(wo) && l !== s) || (null !== l && zi(l, l))) return;
      var c = ac(o, s);
      var u;
      if (!xr(e))
        return void (
          null !== t &&
          Ui(n, c.anchorNode, c.focusNode) &&
          o.removeAllRanges()
        );
      var f = e.anchor,
        d = e.focus,
        h = f.getNode(),
        g = d.getNode(),
        _ts = ts(n, h, f.offset),
        _ = _ts[0],
        p = _ts[1],
        _ts2 = ts(n, g, d.offset),
        m = _ts2[0],
        y = _ts2[1],
        x = e.format,
        C = e.style,
        S = e.isCollapsed();
      var T = _,
        N = m,
        v = !1;
      if (
        ("text" === f.type
          ? ((T = sr(h) ? bc(h, _, n) : null),
            (v = h.getFormat() !== x || h.getStyle() !== C))
          : xr(t) && "text" === t.anchor.type && (v = !0),
        "text" === d.type && (N = sr(g) ? bc(g, m, n) : null),
        null !== T && null !== N)
      ) {
        if (
          (S &&
            (null === t || v || (xr(t) && (t.format !== x || t.style !== C))) &&
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
            c.anchorOffset === p &&
            c.focusOffset === y &&
            c.anchorNode === T &&
            c.focusNode === N)
        ) {
          if (null === l || !s.contains(l)) {
            var _t172 = null !== l ? Yi(l) : null;
            (null !== _t172 && _t172 !== n) ||
              r.has(Fo) ||
              s.focus({ preventScroll: !0 });
          }
          if ("element" !== f.type) return;
        }
        if (
          (Zr(o, T, p, N, y), a && e.isCollapsed() && null !== s && !r.has(Fo))
        ) {
          var _t173 = hc(s);
          if (null === _t173 || !s.contains(_t173)) {
            var _t174 = gc(s.ownerDocument),
              _e106 = null !== _t174 ? Yi(_t174) : null;
            (null !== _e106 && _e106 !== n) || s.focus({ preventScroll: !0 });
          }
        }
        if (!r.has(Io) && e.isCollapsed() && null !== s && s === hc(s)) {
          var _t175 =
            xr(e) && "element" === e.anchor.type
              ? T.childNodes[p] || null
              : (void 0 === u && (u = cc(o, s)), u);
          if (null !== _t175) {
            var _e107;
            if (Vi(_t175)) {
              var _n85 = _t175.ownerDocument.createRange();
              (_n85.selectNode(_t175), (_e107 = _n85.getBoundingClientRect()));
            } else _e107 = _t175.getBoundingClientRect();
            !(function (t, e, n) {
              var o = Ll(n),
                r = zl(o);
              if (null === o || null === r) return;
              var s = n.getBoundingClientRect();
              if (e.bottom < s.top) return;
              var i = e.top,
                l = e.bottom,
                c = 0,
                a = 0,
                u = n;
              for (; null !== u; ) {
                var _e108 = u === o.body;
                if (_e108) {
                  var _e109 = r.visualViewport;
                  if (_e109) {
                    var _t176 = _e109.offsetTop;
                    ((c = _t176), (a = _t176 + _e109.height));
                  } else ((c = 0), (a = Wl(t).innerHeight));
                  var _n86 = r.getComputedStyle(o.documentElement),
                    _s35 = parseFloat(_n86.scrollPaddingTop),
                    _i18 = parseFloat(_n86.scrollPaddingBottom);
                  (isFinite(_s35) && (c += _s35),
                    isFinite(_i18) && (a -= _i18));
                } else {
                  var _t177 = u === n ? s : u.getBoundingClientRect();
                  ((c = _t177.top), (a = _t177.bottom));
                }
                var _f1 = 0;
                if (
                  (i < c ? (_f1 = -(c - i)) : l > a && (_f1 = l - a), 0 !== _f1)
                )
                  if (_e108) r.scrollBy(0, _f1);
                  else {
                    var _t178 = u.scrollTop;
                    u.scrollTop += _f1;
                    var _e110 = u.scrollTop - _t178;
                    ((i -= _e110), (l -= _e110));
                  }
                if (_e108) break;
                u = Rl(u);
              }
            })(n, _e107, s);
          }
        }
        !(function (t, e, n, o, r) {
          var s = t._inputState;
          ((s.isSelectionChangeFromDOMUpdate = !0),
            (s.selectionChangeFromDOMUpdatePoints =
              void 0 !== e && void 0 !== n && void 0 !== o && void 0 !== r
                ? {
                    anchorNode: e,
                    anchorOffset: n,
                    focusNode: o,
                    focusOffset: r,
                  }
                : null));
        })(n, T, p, N, y);
      }
    }
    function ns(t, e) {
      for (var _n87 of t.split(/(\r?\n|\t)/))
        "\n" === _n87 || "\r\n" === _n87
          ? e.linebreak()
          : "\t" === _n87
            ? e.tab()
            : "" !== _n87 && e.text(_n87);
    }
    function os(t) {
      var e = [];
      return (
        ns(t, {
          linebreak: function linebreak() {
            return e.push(Zs());
          },
          tab: function tab() {
            return e.push(cr());
          },
          text: function text(t) {
            return e.push(rr(t));
          },
        }),
        e
      );
    }
    function rs(t) {
      var e = [];
      for (var _n88 of t)
        ti(_n88) ||
          ((!$s(_n88) && !Us(_n88)) || _n88.isInline()
            ? e.push(_n88)
            : $s(_n88) && e.push.apply(e, rs(_n88.getChildren())));
      return e;
    }
    function ss(e, n) {
      if (n === void 0) {
        n = !1;
      }
      var o = e;
      e.isCollapsed() || o.removeText();
      var r = jr();
      (xr(r) && (o = r), xr(o) || t(161));
      var s = o.anchor;
      var i = s.getNode(),
        l = s.offset;
      for (; !Nc(i) && null === Qc(i); ) {
        var _is;
        var _t179 = i;
        if (((_is = is(i, l, n)), (i = _is[0]), (l = _is[1]), _t179.is(i)))
          break;
      }
      return [i, l];
    }
    function is(t, e, n) {
      if (n === void 0) {
        n = !1;
      }
      var o = t.getParent();
      if (!o) {
        var _t180 = vi();
        return (dl().append(_t180), _t180.select(), [dl(), 0]);
      }
      if (sr(t)) {
        var _n89 = t.splitText(e);
        if (0 === _n89.length) return [o, t.getIndexWithinParent()];
        var _r35 = 0 === e ? 0 : 1;
        return [o, _n89[0].getIndexWithinParent() + _r35];
      }
      if (!$s(t) || 0 === e) return [o, t.getIndexWithinParent()];
      var r = t.getChildAtIndex(e);
      if (r) {
        var _o58 = new _Cr(
            fr(t.__key, e, "element"),
            fr(t.__key, e, "element"),
            0,
            "",
          ),
          _s36 = t.insertNewAfter(_o58);
        if (_s36) _s36.append.apply(_s36, [r].concat(r.getNextSiblings()));
        else if (n) return [t, e];
      }
      return [o, t.getIndexWithinParent() + 1];
    }
    function ls(t) {
      return ti(t) || Ul(t) || sr(t) || t.isParentRequired();
    }
    function cs(t) {
      var e = vi();
      var n = null;
      for (var _o59 = 0; _o59 < t.length; _o59++) {
        var _r36 = t[_o59];
        if (ls(_r36)) {
          if (null === n) {
            ((n = _r36.createParentElementNode()), e.append(n));
            var _s37 = t[_o59 + 1];
            if (ti(_r36) && (void 0 === _s37 || !ls(_s37))) continue;
          }
          n.append(_r36);
        } else (e.append(_r36), (n = null));
      }
      return e;
    }
    function as(t, e, n, o, r) {
      if (r === void 0) {
        r = "decorators-and-blocks";
      }
      if ("move" === e && "character" === o && !t.isCollapsed()) {
        var _ref36 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e111 = _ref36[0],
          _o60 = _ref36[1];
        return (_o60.set(_e111.key, _e111.offset, _e111.type), !0);
      }
      var s = ri(t.focus, n ? "previous" : "next"),
        i = "lineboundary" === o,
        l = "move" === e;
      var c = s,
        a = "decorators-and-blocks" === r,
        u = !1;
      if (!gi(c)) {
        for (var _t181 of c) {
          a = !1;
          var _e112 = _t181.origin;
          if (Us(_e112)) {
            if (_e112.isIsolated()) {
              u = !0;
              break;
            }
            if (((c = _t181), i && _e112.isInline())) continue;
          }
          break;
        }
        if (u) return !0;
        if (a)
          for (var _t182 of za(s).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (Oa(_t182)) _t182.origin.isInline() || (c = _t182);
            else {
              if ($s(_t182.origin)) continue;
              Us(_t182.origin) && !_t182.origin.isInline() && (c = _t182);
            }
            break;
          }
      }
      if (c === s) return !1;
      if (l && !i && Us(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t183 = Hr();
        return (_t183.add(c.origin.getKey()), gl(_t183), !0);
      }
      return ((c = hi(c)), l && si(t.anchor, c), si(t.focus, c), a || !i);
    }
    var us = null,
      fs = null,
      ds = !1,
      hs = !1,
      gs = !1;
    var _s = new Set();
    var ps = 0;
    var ms = { characterData: !0, childList: !0, subtree: !0 };
    function ys() {
      return ds || (null !== us && us._readOnly);
    }
    function xs() {
      ds && t(13);
    }
    function Cs() {
      ps > 99 && t(14);
    }
    function Ss() {
      return (null === us && t(195, vs()), us);
    }
    function Ts() {
      return (null === fs && t(337, vs()), fs);
    }
    function Ns() {
      Ts()._dirtyType = 2;
    }
    function vs() {
      var t = 0;
      var e = new Set(),
        n = _Ii.version;
      if ("undefined" != typeof window)
        for (var _o61 of rc(document)) {
          var _r37 = ji(_o61);
          if (Hi(_r37)) t++;
          else if (_r37) {
            var _t184 = String(_r37.constructor.version || "<0.17.1");
            (_t184 === n &&
              (_t184 +=
                " (separately built, likely a bundler configuration issue)"),
              e.add(_t184));
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
    function ks() {
      return fs;
    }
    function Es(t, e, n) {
      var o = e.__type,
        r = Ki(t, o);
      var s = n.get(o);
      void 0 === s && ((s = Array.from(r.transforms)), n.set(o, s));
      var i = s.length;
      for (var _t185 = 0; _t185 < i && (s[_t185](e), e.isAttached()); _t185++);
    }
    function Os(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function bs(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var o = e;
      Array.isArray(e) || (o = [e]);
      for (var _t186 of o) n.add(_t186);
    }
    function Ms(e, n) {
      var o = e.type,
        r = n.get(o);
      void 0 === r && t(17, o);
      var s = r.klass;
      e.type !== s.getType() && t(18, s.name);
      var i = s.importJSON(e),
        l = e.children;
      if ($s(i) && Array.isArray(l))
        for (var _t187 = 0; _t187 < l.length; _t187++) {
          var _e113 = Ms(l[_t187], n);
          i.append(_e113);
        }
      var c = e.$slots;
      if (c) {
        qc(i) || t(379, s.name);
        for (var _t188 in c) {
          ga(i, _t188, Ms(c[_t188], n));
        }
      }
      return i;
    }
    function As(t, e, n) {
      var o = us,
        r = ds,
        s = fs;
      ((us = e), (ds = !0), (fs = t));
      try {
        return n();
      } finally {
        ((us = o), (ds = r), (fs = s));
      }
    }
    function Ds(t, e) {
      var n = gs;
      gs = !0;
      try {
        !(function (t, e) {
          var n = t._pendingEditorState,
            o = t._rootElement,
            r = t._headless || null === o;
          if (null === n)
            return void (
              !t._updating &&
              t._deferred.length > 0 &&
              Ps(t, t._deferred)
            );
          var s = t._editorState,
            i = s._selection,
            l = n._selection,
            c = 0 !== t._dirtyType,
            a = us,
            u = ds,
            f = fs,
            d = t._updating,
            h = t._observer;
          var g = null;
          if (
            ((t._pendingEditorState = null),
            (t._editorState = n),
            !r && c && null !== h)
          ) {
            ((fs = t), (us = n), (ds = !1), (t._updating = !0));
            try {
              var _e114 = t._dirtyType,
                _o62 = t._dirtyElements,
                _r38 = t._dirtyLeaves;
              (h.disconnect(), (g = Oe(s, n, t, _e114, _o62, _r38)));
            } catch (e) {
              if ((e instanceof Error && t._onError(e), hs)) throw e;
              return (
                bi(t, null, o, n),
                ut(t),
                (t._dirtyType = 2),
                (hs = !0),
                Ds(t, s),
                void (hs = !1)
              );
            } finally {
              (h.observe(o, ms),
                (t._updating = d),
                (us = a),
                (ds = u),
                (fs = f));
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
              for (s in o) r.has(s) || (o === n && (o = ul(t)), delete o[s]);
            })(t, n));
          var x = r ? null : Zl(Wl(t));
          if (
            t._editable &&
            null !== x &&
            (c || null === l || l.dirty || !l.is(i)) &&
            null !== o &&
            !y.has(Po)
          ) {
            ((fs = t), (us = n));
            try {
              if ((null !== h && h.disconnect(), c || null === l || l.dirty)) {
                var _e115 = t._blockCursorElement;
                (null !== _e115 && Ql(_e115, t, o), es(i, l, t, x, y, o));
              }
              !(function (t, e, n) {
                var o = t._blockCursorElement;
                if (
                  xr(n) &&
                  n.isCollapsed() &&
                  "element" === n.anchor.type &&
                  e.contains(hc(e))
                ) {
                  var _r39 = n.anchor,
                    _s38 = _r39.getNode(),
                    _i19 = _r39.offset;
                  var _l14 = !1,
                    _c11 = null;
                  if (_i19 === _s38.getChildrenSize()) {
                    Xl(_s38.getChildAtIndex(_i19 - 1)) && (_l14 = !0);
                  } else {
                    var _e116 = _s38.getChildAtIndex(_i19);
                    null !== _e116 &&
                      Xl(_e116) &&
                      ((_l14 = !0), (_c11 = t.getElementByKey(_e116.__key)));
                  }
                  if (_l14) {
                    var _n90 = Ec(
                      _s38,
                      t.getElementByKey(_s38.__key),
                      t,
                    ).element;
                    return (
                      null === o &&
                        (t._blockCursorElement = o =
                          (function (t) {
                            var e = t.theme,
                              n = ic().createElement("div");
                            ((n.contentEditable = "false"),
                              n.setAttribute("data-lexical-cursor", "true"));
                            var o = e.blockCursor;
                            if (void 0 !== o) {
                              var _n$classList;
                              if ("string" == typeof o) {
                                var _t189 = qa(o);
                                o = e.blockCursor = _t189;
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
                        ? _n90.appendChild(o)
                        : _n90.insertBefore(o, _c11))
                    );
                  }
                }
                null !== o && Ql(o, t, e);
              })(t, o, l);
            } finally {
              (null !== h && h.observe(o, ms), (fs = f), (us = a));
            }
          }
          null !== g &&
            (function (t, e, n, o, r) {
              var s = Array.from(t._listeners.mutation),
                i = s.length;
              for (var _t190 = 0; _t190 < i; _t190++) {
                var _s$_t = s[_t190],
                  _i20 = _s$_t[0],
                  _l15 = _s$_t[1];
                for (var _t191 of _l15) {
                  var _s39 = e.get(_t191);
                  void 0 !== _s39 &&
                    _i20(_s39, {
                      dirtyLeaves: o,
                      prevEditorState: r,
                      updateTags: n,
                    });
                }
              }
            })(t, g, y, _, s);
          xr(l) ||
            null === l ||
            (null !== i && i.is(l)) ||
            t.dispatchCommand(De);
          var C = t._pendingDecorators;
          null !== C &&
            ((t._decorators = C),
            (t._pendingDecorators = null),
            ws("decorator", t, !0, C));
          if (
            ((function (t, e, n) {
              var o = fl(e),
                r = fl(n);
              o !== r && ws("textcontent", t, !0, r);
            })(t, e || s, n),
            ws("update", t, !0, {
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
            Ps(t, t._deferred);
          }
          !(function (t) {
            var e = t._updates;
            if (0 === e.length) return void (t._cascadeCount = 0);
            if (
              ((function (t) {
                if (_s.has(t)) return;
                (_s.add(t),
                  setTimeout(function () {
                    (_s["delete"](t), (t._cascadeCount = 0));
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
                _o63 = n[1];
              Rs(t, _e117, _o63);
            }
          })(t);
        })(t, e);
      } finally {
        gs = n;
      }
    }
    function ws(t, e, n) {
      var r = e._updating;
      e._updating = n;
      try {
        var _n91 = e._listeners[t],
          _r40 = Array.from(_n91);
        for (
          var _len4 = arguments.length,
            o = new Array(_len4 > 3 ? _len4 - 3 : 0),
            _key4 = 3;
          _key4 < _len4;
          _key4++
        ) {
          o[_key4 - 3] = arguments[_key4];
        }
        for (var _ref38 of _r40) {
          var _t192 = _ref38[0];
          var _e118 = _ref38[1];
          {
            _e118 && _e118();
            var _r41 = _t192.apply(void 0, o),
              _s40 = "function" == typeof _r41 ? _r41 : void 0;
            _n91.has(_t192) ? _n91.set(_t192, _s40) : _s40 && _s40();
          }
        }
      } finally {
        e._updating = r;
      }
    }
    function Is(t, e, n, o) {
      var r = yl(t);
      var s;
      if (!gs)
        for (var _t193 = 0; _t193 < r.length; _t193++)
          r[_t193]._updating || (r[_t193]._cascadeCount = 0);
      for (var _t194 = 4; _t194 >= 0; _t194--) {
        var _loop2 = function _loop2() {
            var l = r[_i21];
            if (_i21 > 0 && l._updating) {
              s = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e119 = c[_t194];
              if (_e119.size > 0) {
                var _t195 = !1;
                if (
                  (Ls(l, function () {
                    for (var _r42 of _e119)
                      if (_r42(n, o)) return void (_t195 = !0);
                  }),
                  _t195)
                )
                  return { v: _t195 };
              }
            }
          },
          _ret;
        for (var _i21 = 0; _i21 < r.length; _i21++) {
          _ret = _loop2();
          if (_ret === 0) break;
          if (_ret) return _ret.v;
        }
      }
      return (
        s &&
          s.update(function () {
            Is(s, e, n, o);
          }),
        !1
      );
    }
    function Ps(t, e) {
      if (((t._deferred = []), 0 !== e.length)) {
        var _n92 = t._updating;
        t._updating = !0;
        try {
          for (var _t196 = 0; _t196 < e.length; _t196++) e[_t196]();
        } finally {
          t._updating = _n92;
        }
      }
    }
    function Fs(e, n) {
      var o = e._updates;
      var r = n || !1;
      for (; 0 !== o.length; ) {
        var _n93 = o.shift();
        if (_n93) {
          var _o64 = _n93[0],
            _s41 = _n93[1],
            _i22 = e._pendingEditorState;
          var _l16 = void 0;
          (void 0 !== _s41 &&
            ((_l16 = _s41.onUpdate),
            _s41.skipTransforms && (r = !0),
            _s41.discrete && (null === _i22 && t(191), (_i22._flushSync = !0)),
            _l16 && e._deferred.push(_l16),
            bs(e, _s41.tag)),
            null == _i22 ? Rs(e, _o64, _s41) : _o64());
        }
      }
      return r;
    }
    function Rs(e, n, o) {
      var r = e._updateTags;
      var s,
        i = !1,
        l = !1;
      (void 0 !== o &&
        ((s = o.onUpdate),
        bs(e, o.tag),
        (i = o.skipTransforms || !1),
        (l = o.discrete || !1)),
        s && e._deferred.push(s));
      var c = e._editorState;
      var a = e._pendingEditorState,
        u = !1;
      ((null === a || a._readOnly) &&
        ((a = e._pendingEditorState = js(a || c)), (u = !0)),
        (a._flushSync = l));
      var f = us,
        d = ds,
        h = fs,
        g = e._updating;
      ((us = a), (ds = !1), (e._updating = !0), (fs = e));
      var _ = e._headless || null === e.getRootElement();
      Fi(null);
      try {
        u &&
          (_
            ? null !== c._selection && (a._selection = c._selection.clone())
            : (a._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  o = Zl(Wl(t));
                return xr(n) || null == n ? Yr(n, o, t, e) : n.clone();
              })(e, (o && o.event) || null)));
        var _r43 = e._compositionKey;
        (n(),
          (i = Fs(e, i)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              o = t._selection;
            if (xr(o)) {
              var _t197 = o.anchor,
                _e120 = o.focus;
              var _r44;
              if (
                ("text" === _t197.type &&
                  ((_r44 = _t197.getNode()), _r44.selectionTransform(n, o)),
                "text" === _e120.type)
              ) {
                var _t198 = _e120.getNode();
                _r44 !== _t198 && _t198.selectionTransform(n, o);
              }
            }
          })(a, e),
          0 !== e._dirtyType &&
            (i
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = t._nodeMap;
                  for (var _t199 of n) {
                    var _e121 = o.get(_t199);
                    sr(_e121) &&
                      _e121.isAttached() &&
                      _e121.isSimpleText() &&
                      !_e121.isUnmergeable() &&
                      Ot(_e121);
                  }
                })(a, e)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = e._dirtyElements,
                    r = t._nodeMap,
                    s = rl(),
                    i = new Map();
                  var l = n,
                    c = l.size,
                    a = o,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t200 of l) {
                        var _o65 = r.get(_t200);
                        (sr(_o65) &&
                          _o65.isAttached() &&
                          _o65.isSimpleText() &&
                          !_o65.isUnmergeable() &&
                          Ot(_o65),
                          void 0 !== _o65 && Os(_o65, s) && Es(e, _o65, i),
                          n.add(_t200));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        ps++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t201 of a) {
                      var _n94 = _t201[0],
                        _l17 = _t201[1];
                      if ((o.set(_n94, _l17), !_l17)) continue;
                      var _c12 = r.get(_n94);
                      void 0 !== _c12 && Os(_c12, s) && Es(e, _c12, i);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      ps++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = o));
                })(a, e),
            Fs(e),
            (function (t, e, n, o) {
              var r = t._nodeMap,
                s = e._nodeMap,
                i = [];
              for (var _ref40 of o) {
                var _t202 = _ref40[0];
                {
                  var _e122 = s.get(_t202);
                  void 0 !== _e122 &&
                    (_e122.isAttached() ||
                      ($s(_e122) && tt(_e122, _t202, r, s, i, o),
                      r.has(_t202) || o["delete"](_t202),
                      i.push(_t202)));
                }
              }
              for (var _t203 of n) {
                var _e123 = s.get(_t203);
                void 0 === _e123 ||
                  _e123.isAttached() ||
                  (qc(_e123) &&
                    null !== _e123.__slots &&
                    tt(_e123, _t203, r, s, i, n),
                  r.has(_t203) || n["delete"](_t203),
                  i.push(_t203));
              }
              for (var _t204 of i) s["delete"](_t204);
              var l = Ts(),
                c = l._compositionKey;
              null === c || s.has(c) || (l._compositionKey = null);
            })(c, a, e._dirtyLeaves, e._dirtyElements)));
        _r43 !== e._compositionKey && (a._flushSync = !0);
        var _s42 = a._selection;
        if (xr(_s42)) {
          e._slotsUsed && Br(_s42);
          var _n95 = a._nodeMap,
            _o66 = _s42.anchor.key,
            _r45 = _s42.focus.key;
          (void 0 !== _n95.get(_o66) && void 0 !== _n95.get(_r45)) || t(19);
        } else Sr(_s42) && 0 === _s42._nodes.size && (a._selection = null);
      } catch (t) {
        return (
          t instanceof Error && e._onError(t),
          (e._pendingEditorState = c),
          (e._dirtyType = 2),
          e._cloneNotNeeded.clear(),
          (e._dirtyLeaves = new Set()),
          e._dirtyElements.clear(),
          void Ds(e)
        );
      } finally {
        ((us = f), (ds = d), (fs = h), (e._updating = g), (ps = 0));
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
          ? ((a._flushSync = !1), Ds(e))
          : u &&
            $i(function () {
              Ds(e);
            })
        : ((a._flushSync = !1),
          u && (r.clear(), (e._deferred = []), (e._pendingEditorState = null)));
    }
    function Ls(t, e, n) {
      fs === t && void 0 === n ? (ys() ? Rs(t, e, n) : e()) : Rs(t, e, n);
    }
    function Ks(t) {
      if (jl(t)) {
        var _e124 = null;
        for (var _n96 of t.getChildren())
          _e124 = _n96.isInline()
            ? (_e124 || _n96.replace(_n96.createParentElementNode())).append(
                _n96,
              )
            : null;
      }
    }
    var _Bs4 = (function (_Mo2) {
      function Bs(t) {
        var _this3;
        ((_this3 = _Mo2.call(this, t) || this),
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
      babelHelpers.inheritsLoose(Bs, _Mo2);
      var _proto11 = Bs.prototype;
      _proto11.$config = function $config() {
        return this.config(Symbol["for"]("ElementNode"), {
          $transform: Ks,
          extends: _Mo5,
        });
      };
      _proto11.afterCloneFrom = function afterCloneFrom(e) {
        (_Mo2.prototype.afterCloneFrom.call(this, e),
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
      _proto11.getFormat = function getFormat() {
        return this.getLatest().__format;
      };
      _proto11.getFormatType = function getFormatType() {
        var t = this.getFormat();
        return P[t] || "";
      };
      _proto11.getStyle = function getStyle() {
        return this.getLatest().__style;
      };
      _proto11.getIndent = function getIndent() {
        return this.getLatest().__indent;
      };
      _proto11.getChildren = function getChildren() {
        var t = [];
        var e = this.getFirstChild();
        for (; null !== e; ) (t.push(e), (e = e.getNextSibling()));
        return t;
      };
      _proto11.getChildrenKeys = function getChildrenKeys() {
        var t = [];
        var e = this.getFirstChild();
        for (; null !== e; ) (t.push(e.__key), (e = e.getNextSibling()));
        return t;
      };
      _proto11.getChildrenSize = function getChildrenSize() {
        return this.getLatest().__size;
      };
      _proto11.isEmpty = function isEmpty() {
        return 0 === this.getChildrenSize() && 0 === oa(this).length;
      };
      _proto11.isDirty = function isDirty() {
        var t = Ts()._dirtyElements;
        return null !== t && t.has(this.__key);
      };
      _proto11.isLastChild = function isLastChild() {
        var t = this.getLatest(),
          e = this.getParentOrThrow().getLastChild();
        return null !== e && e.is(t);
      };
      _proto11.getAllTextNodes = function getAllTextNodes() {
        var t = [];
        for (var _e125 of oa(this)) {
          var _n97 = ra(this, _e125);
          if ($s(_n97)) for (var _e126 of _n97.getAllTextNodes()) t.push(_e126);
        }
        var e = this.getFirstChild();
        for (; null !== e; ) {
          if ((sr(e) && t.push(e), $s(e)))
            for (var _n98 of e.getAllTextNodes()) t.push(_n98);
          e = e.getNextSibling();
        }
        return t;
      };
      _proto11.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; $s(t); ) {
          var _e127 = t.getFirstChild();
          if (null === _e127) break;
          t = _e127;
        }
        return t;
      };
      _proto11.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; $s(t); ) {
          var _e128 = t.getLastChild();
          if (null === _e128) break;
          t = _e128;
        }
        return t;
      };
      _proto11.getDescendantByIndex = function getDescendantByIndex(t) {
        var e = this.getChildren(),
          n = e.length;
        if (t >= n) {
          var _t205 = e[n - 1];
          return ($s(_t205) && _t205.getLastDescendant()) || _t205 || null;
        }
        var o = e[t];
        return ($s(o) && o.getFirstDescendant()) || o || null;
      };
      _proto11.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : sl(t);
      };
      _proto11.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var e = this.getFirstChild();
        return (null === e && t(45, this.__key), e);
      };
      _proto11.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : sl(t);
      };
      _proto11.getLastChildOrThrow = function getLastChildOrThrow() {
        var e = this.getLastChild();
        return (null === e && t(96, this.__key), e);
      };
      _proto11.getChildAtIndex = function getChildAtIndex(t) {
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
      _proto11.getTextContent = function getTextContent() {
        var t = fa(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o67 = 0; _o67 < n; _o67++) {
          var _r46 = e[_o67];
          ((t += _r46.getTextContent()),
            $s(_r46) && _o67 !== n - 1 && !_r46.isInline() && (t += N));
        }
        return t;
      };
      _proto11.getTextContentSize = function getTextContentSize() {
        var t = (function (t) {
          var e = 0;
          for (var _n99 of oa(t)) {
            var _o68 = ra(t, _n99);
            null !== _o68 && (e += _o68.getTextContentSize());
          }
          return e;
        })(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o69 = 0; _o69 < n; _o69++) {
          var _r47 = e[_o69];
          ((t += _r47.getTextContentSize()),
            $s(_r47) && _o69 !== n - 1 && !_r47.isInline() && (t += 2));
        }
        return t;
      };
      _proto11.getDirection = function getDirection() {
        return this.getLatest().__dir;
      };
      _proto11.getTextFormat = function getTextFormat() {
        return this.getLatest().__textFormat;
      };
      _proto11.hasFormat = function hasFormat(t) {
        if ("" !== t) {
          var _e129 = w[t];
          return 0 !== (this.getFormat() & _e129);
        }
        return !1;
      };
      _proto11.hasTextFormat = function hasTextFormat(t) {
        var e = A[t];
        return 0 !== (this.getTextFormat() & e);
      };
      _proto11.getFormatFlags = function getFormatFlags(t, e) {
        return Qi(this.getLatest().__textFormat, t, e);
      };
      _proto11.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto11.select = function select(t, e) {
        xs();
        var n = jr();
        var o = t,
          r = e;
        var s = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t206 = this.getFirstChild();
            if (sr(_t206) || $s(_t206)) return _t206.select(0, 0);
          } else if (
            !((void 0 !== t && t !== s) || (void 0 !== e && e !== s))
          ) {
            var _t207 = this.getLastChild();
            if (sr(_t207) || $s(_t207)) return _t207.select();
          }
        (void 0 === o && (o = s), void 0 === r && (r = s));
        var i = this.__key;
        return xr(n)
          ? (n.anchor.set(i, o, "element"),
            n.focus.set(i, r, "element"),
            (n.dirty = !0),
            n)
          : Wr(i, o, i, r, "element", "element");
      };
      _proto11.selectStart = function selectStart() {
        var t = this.getFirstDescendant();
        return t ? t.selectStart() : this.select();
      };
      _proto11.selectEnd = function selectEnd() {
        var t = this.getLastDescendant();
        return t ? t.selectEnd() : this.select();
      };
      _proto11.clear = function clear() {
        var t = this.getWritable();
        return (
          this.getChildren().forEach(function (t) {
            return t.remove();
          }),
          t
        );
      };
      _proto11.append = function append() {
        for (
          var _len5 = arguments.length, t = new Array(_len5), _key5 = 0;
          _key5 < _len5;
          _key5++
        ) {
          t[_key5] = arguments[_key5];
        }
        return this.splice(this.getChildrenSize(), 0, t);
      };
      _proto11.setDirection = function setDirection(t) {
        var e = this.getWritable();
        return ((e.__dir = t), e);
      };
      _proto11.setFormat = function setFormat(t) {
        return ((this.getWritable().__format = ("" !== t && w[t]) || 0), this);
      };
      _proto11.setStyle = function setStyle(t) {
        return ((this.getWritable().__style = t || ""), this);
      };
      _proto11.setTextFormat = function setTextFormat(t) {
        var e = this.getWritable();
        return ((e.__textFormat = t), e);
      };
      _proto11.setTextStyle = function setTextStyle(t) {
        var e = this.getWritable();
        return ((e.__textStyle = t), e);
      };
      _proto11.setIndent = function setIndent(t) {
        return ((this.getWritable().__indent = t), this);
      };
      _proto11.splice = function splice(e, n, o) {
        Oo(this) && t(324, this.__key, this.__type);
        var r = this.getChildrenSize(),
          s = this.getWritable();
        e + n <= r || t(226, String(e), String(n), String(r));
        for (var _t208 of o);
        var i = s.__key,
          l = [],
          c = [];
        var a = this.getChildAtIndex(e + n),
          u = null,
          f = r - n + o.length;
        if (0 !== e)
          if (e === r) u = this.getLastChild();
          else {
            var _t209 = this.getChildAtIndex(e);
            null !== _t209 && (u = _t209.getPreviousSibling());
          }
        if (n > 0) {
          var _e130 = null === u ? this.getFirstChild() : u.getNextSibling();
          for (var _o70 = 0; _o70 < n; _o70++) {
            null === _e130 && t(100);
            var _n100 = _e130.getNextSibling(),
              _o71 = _e130.__key;
            (tl(_e130.getWritable()), c.push(_o71), (_e130 = _n100));
          }
        }
        var d = u;
        for (var _e131 of o) {
          (null !== d && _e131.is(d) && (u = d = d.getPreviousSibling()),
            null !== a && _e131.is(a) && (a = a.getNextSibling()));
          var _n101 = _e131.getWritable();
          (_n101.__parent === i && f--, tl(_n101));
          var _o72 = _e131.__key;
          if (null === d) ((s.__first = _o72), (_n101.__prev = null));
          else {
            var _t210 = d.getWritable();
            ((_t210.__next = _o72), (_n101.__prev = _t210.__key));
          }
          (_e131.__key === i && t(76),
            (_n101.__parent = i),
            l.push(_o72),
            (d = _e131));
        }
        if (null === a) {
          if (null !== d) {
            ((d.getWritable().__next = null), (s.__last = d.__key));
          }
        } else {
          var _t211 = a.getWritable();
          if (null !== d) {
            var _e132 = d.getWritable();
            ((_t211.__prev = d.__key), (_e132.__next = a.__key));
          } else _t211.__prev = null;
        }
        if (((s.__size = f), c.length)) {
          var _t212 = jr();
          if (xr(_t212)) {
            var _e133 = new Set(c),
              _n102 = new Set(l),
              _o73 = _t212.anchor,
              _r48 = _t212.focus;
            (zs(_o73, _e133, _n102) && Xr(_o73, _o73.getNode(), this, u, a),
              zs(_r48, _e133, _n102) && Xr(_r48, _r48.getNode(), this, u, a),
              0 !== f || this.canBeEmpty() || jl(this) || this.remove());
          }
        }
        return s;
      };
      _proto11.getDOMSlot = function getDOMSlot(t) {
        return new _j(t);
      };
      _proto11.exportDOM = function exportDOM(t) {
        var _Mo2$prototype$export = _Mo2.prototype.exportDOM.call(this, t),
          e = _Mo2$prototype$export.element;
        if (pc(e)) {
          var _t213 = this.getIndent();
          _t213 > 0 &&
            ((e.style.paddingInlineStart = 40 * _t213 + "px"),
            e.setAttribute("data-lexical-indent", String(_t213)));
          var _n103 = this.getDirection();
          _n103 && (e.dir = _n103);
        }
        return { element: e };
      };
      _proto11.exportJSON = function exportJSON() {
        var t = babelHelpers["extends"](
            {
              children: [],
              direction: this.getDirection(),
              format: this.getFormatType(),
              indent: this.getIndent(),
            },
            _Mo2.prototype.exportJSON.call(this),
          ),
          e = this.getTextFormat(),
          n = this.getTextStyle();
        return (
          (0 === e && "" === n) ||
            jl(this) ||
            this.getChildren().some(sr) ||
            (0 !== e && (t.textFormat = e), "" !== n && (t.textStyle = n)),
          t
        );
      };
      _proto11.updateFromJSON = function updateFromJSON(t) {
        return _Mo2.prototype.updateFromJSON
          .call(this, t)
          .setFormat(t.format)
          .setIndent(t.indent)
          .setDirection(t.direction)
          .setTextFormat(t.textFormat || 0)
          .setTextStyle(t.textStyle || "");
      };
      _proto11.insertNewAfter = function insertNewAfter(t, e) {
        return null;
      };
      _proto11.canIndent = function canIndent() {
        return !0;
      };
      _proto11.collapseAtStart = function collapseAtStart(t) {
        return !1;
      };
      _proto11.excludeFromCopy = function excludeFromCopy(t) {
        return !1;
      };
      _proto11.canReplaceWith = function canReplaceWith(t) {
        return !0;
      };
      _proto11.canInsertAfter = function canInsertAfter(t) {
        return !0;
      };
      _proto11.canBeEmpty = function canBeEmpty() {
        return !0;
      };
      _proto11.canInsertTextBefore = function canInsertTextBefore() {
        return !0;
      };
      _proto11.canInsertTextAfter = function canInsertTextAfter() {
        return !0;
      };
      _proto11.isInline = function isInline() {
        return !1;
      };
      _proto11.isShadowRoot = function isShadowRoot() {
        return !1;
      };
      _proto11.canMergeWith = function canMergeWith(t) {
        return !1;
      };
      _proto11.extractWithChild = function extractWithChild(t, e, n) {
        return !1;
      };
      _proto11.canMergeWhenEmpty = function canMergeWhenEmpty() {
        return !1;
      };
      _proto11.reconcileObservedMutation = function reconcileObservedMutation(
        t,
        e,
      ) {
        var n = Ec(this, t, e);
        var o = n.getFirstChild();
        for (
          var _t214 = this.getFirstChild();
          _t214;
          _t214 = _t214.getNextSibling()
        ) {
          var _r49 = e.getElementByKey(_t214.getKey());
          null !== _r49 &&
            (null == o
              ? (n.insertChild(_r49), (o = _r49))
              : o !== _r49 && n.replaceChild(_r49, o),
            (o = o.nextSibling));
        }
      };
      return Bs;
    })(_Mo5);
    function $s(t) {
      return t instanceof _Bs4;
    }
    function zs(t, e, n) {
      var o = t.getNode();
      for (; o; ) {
        var _t215 = o.__key;
        if (e.has(_t215) && !n.has(_t215)) return !0;
        o = o.getParent();
      }
      return !1;
    }
    var _Ws = (function (_Mo3) {
      function Ws(t) {
        var _this4;
        ((_this4 = _Mo3.call(this, t) || this),
          (_this4.__slotHost = null),
          (_this4.__slots = null));
        return _this4;
      }
      babelHelpers.inheritsLoose(Ws, _Mo3);
      var _proto12 = Ws.prototype;
      _proto12.afterCloneFrom = function afterCloneFrom(e) {
        (_Mo3.prototype.afterCloneFrom.call(this, e),
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
      _proto12.decorate = function decorate(t, e) {
        return null;
      };
      _proto12.isIsolated = function isIsolated() {
        return !1;
      };
      _proto12.isInline = function isInline() {
        return !0;
      };
      _proto12.isKeyboardSelectable = function isKeyboardSelectable() {
        return !0;
      };
      return Ws;
    })(_Mo5);
    function Us(t) {
      return t instanceof _Ws;
    }
    var _Hs = (function (_Bs) {
      function Hs() {
        var _this5;
        ((_this5 = _Bs.call(this, "root") || this),
          (_this5.__cachedText = null));
        return _this5;
      }
      babelHelpers.inheritsLoose(Hs, _Bs);
      var _proto13 = Hs.prototype;
      _proto13.$config = function $config() {
        return this.config("root", { extends: _Bs4 });
      };
      _proto13.getTopLevelElementOrThrow =
        function getTopLevelElementOrThrow() {
          t(51);
        };
      _proto13.getTextContent = function getTextContent() {
        var t = this.__cachedText;
        return null === t || (!ys() && 0 !== Ts()._dirtyType)
          ? _Bs.prototype.getTextContent.call(this)
          : t;
      };
      _proto13.remove = function remove() {
        t(52);
      };
      _proto13.replace = function replace(e) {
        t(53);
      };
      _proto13.insertBefore = function insertBefore(e) {
        t(54);
      };
      _proto13.insertAfter = function insertAfter(e) {
        t(55);
      };
      _proto13.updateDOM = function updateDOM(t, e) {
        return !1;
      };
      _proto13.splice = function splice(e, n, o) {
        for (var _e134 of o) $s(_e134) || Us(_e134) || t(282);
        return _Bs.prototype.splice.call(this, e, n, o);
      };
      Hs.importJSON = function importJSON(t) {
        return dl().updateFromJSON(t);
      };
      _proto13.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return Hs;
    })(_Bs4);
    function Ys(t) {
      return t instanceof _Hs;
    }
    function js(t) {
      return new _Vs(Q(t._nodeMap), null, t._slotsUsed);
    }
    function Gs() {
      return new _Vs(new Map([["root", new _Hs()]]), null, !1);
    }
    function Js(e) {
      var n = e.exportJSON(),
        o = e.constructor;
      if ((n.type !== o.getType() && t(130, o.name), $s(e))) {
        var _r50 = n.children;
        Array.isArray(_r50) || t(59, o.name);
        var _s43 = e.getChildren();
        for (var _t216 = 0; _t216 < _s43.length; _t216++) {
          var _e135 = Js(_s43[_t216]);
          _r50.push(_e135);
        }
      }
      var r = oa(e);
      if (r.length > 0) {
        var _s44 = {};
        for (var _n104 of r) {
          var _r51 = ra(e, _n104);
          (null === _r51 && t(366, o.name, _n104), (_s44[_n104] = Js(_r51)));
        }
        n.$slots = _s44;
      }
      return n;
    }
    var _Vs = (function () {
      function Vs(t, e, n) {
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
      var _proto14 = Vs.prototype;
      _proto14.isEmpty = function isEmpty() {
        return this._nodeMap.size <= 1 && null === this._selection;
      };
      _proto14.read = function read(t, e) {
        return As((e && e.editor) || null, this, t);
      };
      _proto14.clone = function clone(t) {
        var e = new Vs(
          this._nodeMap,
          void 0 === t ? this._selection : t,
          this._slotsUsed,
        );
        return ((e._readOnly = !0), (e._parsed = this._parsed), e);
      };
      _proto14.toJSON = function toJSON() {
        return As(null, this, function () {
          return { root: Js(dl()) };
        });
      };
      return Vs;
    })();
    var _qs = (function (_Bs2) {
      function qs() {
        return _Bs2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(qs, _Bs2);
      var _proto15 = qs.prototype;
      _proto15.$config = function $config() {
        return this.config("artificial", { extends: _Bs4 });
      };
      _proto15.createDOM = function createDOM(t) {
        return ic().createElement("div");
      };
      return qs;
    })(_Bs4);
    var _Xs = (function (_Mo4) {
      function Xs() {
        return _Mo4.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Xs, _Mo4);
      var _proto16 = Xs.prototype;
      _proto16.$config = function $config() {
        return this.config("linebreak", {
          importDOM: {
            br: function br(t) {
              return ei(t) || ni(t) ? null : { conversion: Qs, priority: 0 };
            },
          },
        });
      };
      _proto16.getTextContent = function getTextContent() {
        return "\n";
      };
      _proto16.createDOM = function createDOM() {
        return ic().createElement("br");
      };
      _proto16.updateDOM = function updateDOM() {
        return !1;
      };
      _proto16.isInline = function isInline() {
        return !0;
      };
      return Xs;
    })(_Mo5);
    function Qs(t) {
      return { node: Zs() };
    }
    function Zs() {
      return Jl(new _Xs());
    }
    function ti(t) {
      return t instanceof _Xs;
    }
    function ei(t) {
      var e = t.parentElement;
      if (null !== e && Tc(e)) {
        var _n105 = e.firstChild;
        if (_n105 === t || (_n105.nextSibling === t && oi(_n105))) {
          var _n106 = e.lastChild;
          if (_n106 === t || (_n106.previousSibling === t && oi(_n106)))
            return !0;
        }
      }
      return !1;
    }
    function ni(t) {
      var e = t.parentElement;
      if (null !== e && Tc(e)) {
        var _n107 = e.firstChild;
        if (_n107 === t || (_n107.nextSibling === t && oi(_n107))) return !1;
        var _o74 = e.lastChild;
        if (_o74 === t || (_o74.previousSibling === t && oi(_o74))) return !0;
      }
      return !1;
    }
    function oi(t) {
      return Vi(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    function ri(e, n) {
      var o = e.type,
        r = e.key,
        s = e.offset,
        i = ql(e.key);
      return "text" === o
        ? (sr(i) || t(266, i.getType(), r), wa(i, n, s))
        : ($s(i) || t(267, i.getType(), r), pi(i, e.offset, n));
    }
    function si(e, n) {
      var o = n.origin,
        r = n.direction,
        s = "next" === r;
      ka(n)
        ? e.set(o.getKey(), n.offset, "text")
        : Ea(n)
          ? sr(o)
            ? e.set(o.getKey(), Ia(o, r), "text")
            : e.set(
                o.getParentOrThrow().getKey(),
                o.getIndexWithinParent() + (s ? 1 : 0),
                "element",
              )
          : ((Oa(n) && $s(o)) || t(268),
            e.set(o.getKey(), s ? 0 : o.getChildrenSize(), "element"));
    }
    function ii(t) {
      var e = jr(),
        n = xr(e) ? e : Ur();
      return (li(n, t), gl(n), n);
    }
    function li(t, e) {
      (si(t.anchor, e.anchor), si(t.focus, e.focus));
    }
    function ci(t) {
      var e = t.anchor,
        n = t.focus,
        o = ri(e, "next"),
        r = ri(n, "next"),
        s = Ya(o, r) <= 0 ? "next" : "previous";
      return Ua($a(o, s), $a(r, s));
    }
    function ai(t) {
      var e = t.direction,
        n = t.origin,
        o = Da(n, Sa(e)).getNodeAtCaret();
      return o ? Da(o, e) : Fa(n.getParentOrThrow(), e);
    }
    function ui(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _o75 = Oa(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _o75;
        _o75 = _o75.getParentCaret(e)
      )
        n.push(ai(_o75));
      return n;
    }
    function fi(t) {
      return !!t && t.origin.isAttached();
    }
    function di(e, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (e.isCollapsed()) return e;
      var o = "root",
        r = "next";
      var s = n;
      var i = _i(e, r);
      var l = i.anchor.origin;
      for (; null !== l && !jl(l); ) l = l.getParent();
      var c = $s(l) ? l.getFirstChild() : null,
        a = ui(i.anchor, o),
        u = ui(i.focus.getFlipped(), o),
        f = new Set(),
        d = [];
      for (var _t217 of i.iterNodeCarets(o))
        if (Oa(_t217)) f.add(_t217.origin.getKey());
        else if (Ea(_t217)) {
          var _e136 = _t217.origin;
          ($s(_e136) && !f.has(_e136.getKey())) || d.push(_e136);
        }
      var h = new Set();
      for (var _t218 of d) {
        var _e137 = _t218.getParent();
        (null === _e137 || f.has(_e137.getKey()) || h.add(_e137), tl(_t218));
      }
      for (var _t219 of h)
        !_t219.canBeEmpty() &&
          !jl(_t219) &&
          _t219.isEmpty() &&
          _t219.isAttached() &&
          _t219.remove();
      for (var _t220 of i.getTextSlices()) {
        if (!_t220) continue;
        var _e138 = _t220.caret.origin,
          _n108 = _e138.getTextContentSize(),
          _o76 = ai(Da(_e138, r)),
          _i23 = _e138.getMode();
        if (
          (Math.abs(_t220.distance) === _n108 && "removeEmptySlices" === s) ||
          ("token" === _i23 && 0 !== _t220.distance)
        )
          _o76.remove();
        else if (0 !== _t220.distance) {
          s = "removeEmptySlices";
          var _e139 = _t220.removeTextSlice();
          var _n109 = _t220.caret.origin;
          if ("segmented" === _i23) {
            var _t221 = _e139.origin,
              _n110 = rr(_t221.getTextContent())
                .setStyle(_t221.getStyle())
                .setFormat(_t221.getFormat());
            (_o76.replaceOrInsert(_n110), (_e139 = wa(_n110, r, _e139.offset)));
          }
          (_n109.is(a[0].origin) && (a[0] = _e139),
            _n109.is(u[0].origin) && (u[0] = _e139.getFlipped()));
        }
      }
      var g, _;
      for (var _t222 of a)
        if (fi(_t222)) {
          g = hi(_t222);
          break;
        }
      for (var _t223 of u)
        if (fi(_t223)) {
          _ = hi(_t223);
          break;
        }
      var p = (function (t, e, n) {
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
            for (var _o77 = c; _o77 < t.length; _o77++) {
              var _r52 = t[_o77];
              if (jl(_r52)) return;
              !n && e(_r52) && (n = _r52);
            }
            return n;
          },
          u = a(s, Nc),
          f =
            u &&
            a(i, function (t) {
              return n.has(t.getKey()) && Nc(t);
            });
        if (f && oa(f).length > 0) return null;
        return u && f ? [u, f] : null;
      })(g, _, f);
      if (p) {
        var _t224 = p[0],
          _e140 = p[1];
        Fa(_t224, "previous").splice(0, _e140.getChildren());
        var _n111 = _e140.getParent();
        for (_e140.remove(!0); _n111 && _n111.isEmpty(); ) {
          var _t225 = _n111;
          ((_n111 = _n111.getParent()), _t225.remove(!0));
        }
      } else if (_) {
        var _t226 = (function (t) {
            if (Oa(t)) {
              var _e142 = t.origin;
              if (Nc(_e142)) return _e142;
            } else {
              var _e143 = t.getParentAtCaret();
              if (_e143 && Nc(_e143)) return _e143;
            }
            return null;
          })(_),
          _e141 = _t226 && _t226.getParent(),
          _n112 = _t226 && _t226.getParents().findLast(Yl);
        if (
          _t226 &&
          _e141 &&
          !Ys(_e141) &&
          _t226.isEmpty() &&
          f.has(_t226.getKey()) &&
          0 === oa(_t226).length &&
          (!_n112 || f.has(_n112.getKey()))
        ) {
          _t226.remove(!0);
          var _n113 = _e141;
          for (; _n113 && !Ys(_n113) && _n113.isEmpty(); ) {
            var _t227 = _n113.getParent();
            if (_t227 && Ys(_t227) && _t227.getChildrenSize() <= 1) break;
            var _e144 = _n113;
            ((_n113 = _t227), _e144.remove(!0));
          }
        }
      }
      null === hl(l, c) && hl(dl(), null);
      var m = [g, _].concat(a, u).find(fi);
      if (m) {
        return Wa($a(hi(m), e.direction));
      }
      t(
        269,
        JSON.stringify(
          a.map(function (t) {
            return t.origin.__key;
          }),
        ),
      );
    }
    function hi(t) {
      var e = (function (t) {
          var e = t;
          for (; Oa(e); ) {
            var _t228 = La(e);
            if (!Oa(_t228)) break;
            e = _t228;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (sr(e.origin)) return ka(e) ? e : wa(e.origin, n, n);
      var o = e.getAdjacentCaret();
      return Ea(o) && sr(o.origin) ? wa(o.origin, n, Sa(n)) : e;
    }
    function gi(t) {
      return ka(t) && t.offset !== Ia(t.origin, t.direction);
    }
    function _i(t, e) {
      return t.direction === e ? t : Ua($a(t.focus, e), $a(t.anchor, e));
    }
    function pi(t, e, n) {
      var o = Fa(t, "next");
      for (var _t229 = 0; _t229 < e; _t229++) {
        var _t230 = o.getAdjacentCaret();
        if (null === _t230) break;
        o = _t230;
      }
      return $a(o, n);
    }
    function mi(e) {
      var n = e.origin,
        o = e.offset,
        r = e.direction;
      if (o === Ia(n, r)) return e.getSiblingCaret();
      if (o === Ia(n, Sa(r))) return ai(e.getSiblingCaret());
      var _n$splitText2 = n.splitText(o),
        s = _n$splitText2[0];
      return (sr(s) || t(281), $a(Da(s, "next"), r));
    }
    function yi(t, e) {
      return !0;
    }
    function xi(t, _temp) {
      var _ref41 = _temp === void 0 ? {} : _temp,
        _ref41$$copyElementNo = _ref41.$copyElementNode,
        e = _ref41$$copyElementNo === void 0 ? Gl : _ref41$$copyElementNo,
        _ref41$$splitTextPoin = _ref41.$splitTextPointCaretNext,
        n = _ref41$$splitTextPoin === void 0 ? mi : _ref41$$splitTextPoin,
        _ref41$rootMode = _ref41.rootMode,
        o = _ref41$rootMode === void 0 ? "shadowRoot" : _ref41$rootMode,
        _ref41$$shouldSplit = _ref41.$shouldSplit,
        r = _ref41$$shouldSplit === void 0 ? yi : _ref41$$shouldSplit,
        _ref41$removeEmptyDes = _ref41.removeEmptyDestination,
        s = _ref41$removeEmptyDes === void 0 ? !1 : _ref41$removeEmptyDes;
      if (ka(t)) return n(t);
      var i = t.getParentCaret(o);
      if (i) {
        var _n114 = i.origin;
        if (Oa(t)) {
          var _t231 = ai(i);
          if (s && _n114.isEmpty()) return (_n114.remove(), _t231);
          if (!_n114.canBeEmpty() || !r(_n114, "first")) return _t231;
        }
        var _o78 = (function (t) {
          var e = [];
          for (
            var _n115 = t.getAdjacentCaret();
            _n115;
            _n115 = _n115.getAdjacentCaret()
          )
            e.push(_n115.origin);
          return e;
        })(t);
        (_o78.length > 0 || (!s && _n114.canBeEmpty() && r(_n114, "last"))) &&
          i.insert(e(_n114).splice(0, 0, _o78));
      }
      return i;
    }
    function Ci(e, n, o) {
      var r = $a(n, "next");
      (ka(r) &&
        (0 === r.offset
          ? (r = Da(r.origin, "previous").getFlipped())
          : r.offset === r.origin.getTextContentSize() &&
            (r = Da(r.origin, "next"))),
        r.origin.is(e) &&
          (Ea(r) || t(342, e.getKey(), e.getType()), (r = ai(r))),
        (e.is(r.getNodeAtCaret()) || e.is(r.getFlipped().getNodeAtCaret())) &&
          e.remove(!0));
      for (var _t232 = r; _t232; _t232 = xi(_t232, o)) r = _t232;
      return (
        ka(r) && t(283),
        r.insert(e.isInline() ? vi().append(e) : e),
        $a(Da(e.getLatest(), "next"), n.direction)
      );
    }
    function Si(t, e) {
      var n = _i(xr(e) ? ci(e) : e, "next"),
        o = ea(n.anchor.origin),
        r = ea(t.getLatest());
      if (null === o ? null !== r : !o.is(r)) return !1;
      var s = hi(Fa(t, "next")),
        i = $a(hi(Fa(t, "previous")), "next");
      return Ya(n.anchor, s) <= 0 && Ya(n.focus, i) >= 0;
    }
    var _Ti = (function (_Bs3) {
      function Ti() {
        return _Bs3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Ti, _Bs3);
      var _proto17 = Ti.prototype;
      _proto17.$config = function $config() {
        return this.config("paragraph", {
          extends: _Bs4,
          importDOM: {
            p: function p() {
              return { conversion: Ni, priority: 0 };
            },
          },
        });
      };
      _proto17.createDOM = function createDOM(t) {
        var e = ic().createElement("p"),
          n = Ml(t.theme, "paragraph");
        if (void 0 !== n) {
          var _e$classList2;
          (_e$classList2 = e.classList).add.apply(_e$classList2, n);
        }
        return e;
      };
      _proto17.updateDOM = function updateDOM(t, e, n) {
        return !1;
      };
      _proto17.exportDOM = function exportDOM(t) {
        var _Bs3$prototype$export = _Bs3.prototype.exportDOM.call(this, t),
          e = _Bs3$prototype$export.element;
        if (pc(e)) {
          this.isEmpty() && e.append(ic().createElement("br"));
          var _t233 = this.getFormatType();
          _t233 && (e.style.textAlign = _t233);
        }
        return { element: e };
      };
      _proto17.exportJSON = function exportJSON() {
        var t = _Bs3.prototype.exportJSON.call(this);
        if (void 0 === t.textFormat || void 0 === t.textStyle) {
          var _e145 = this.getChildren().find(sr);
          _e145
            ? ((t.textFormat = _e145.getFormat()),
              (t.textStyle = _e145.getStyle()))
            : ((t.textFormat = this.getTextFormat()),
              (t.textStyle = this.getTextStyle()));
        }
        return t;
      };
      _proto17.extractWithChild = function extractWithChild(t, e, n) {
        if (!xr(e)) return !1;
        if (
          "" === this.getFormatType() &&
          0 === this.getIndent() &&
          "" === this.getStyle()
        )
          return !1;
        if (Si(this, e)) {
          var _t234 = this.getTextContent();
          return "" !== _t234 && e.getTextContent() === _t234;
        }
        return !1;
      };
      _proto17.insertNewAfter = function insertNewAfter(t, e) {
        var n = vi();
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
      _proto17.collapseAtStart = function collapseAtStart() {
        if (
          this.getChildren().every(function (t) {
            return sr(t) && !/\S/.test(t.getTextContent());
          })
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return Ti;
    })(_Bs4);
    function Ni(t) {
      var e = vi();
      if ((Fc(e, t), Ic(t, e), "" === e.getFormatType())) {
        var _n116 = t.getAttribute("align");
        _n116 && _n116 && _n116 in w && e.setFormat(_n116);
      }
      return (Pc(e, t), { node: e });
    }
    function vi() {
      return Jl(new _Ti());
    }
    function ki(t) {
      return t instanceof _Ti;
    }
    function Ei(t) {
      console.warn(t);
    }
    var Oi = 0;
    function bi(t, e, n, o, r) {
      var s = t._keyToDOMMap;
      (s.clear(),
        (t._editorState = Gs()),
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
          selectionChangeFromDOMUpdatePoints: null,
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
          ((n.textContent = ""), s.set("root", n), ll(n, t, "root")));
    }
    function Mi(t) {
      var e = new Set(),
        n = new Set();
      for (var _ref43 of Hc(t)) {
        var _o79 = _ref43.klass;
        var _r53 = _ref43.ownNodeConfig;
        {
          var _t235 = _o79.transform;
          if (!n.has(_t235)) {
            n.add(_t235);
            var _r54 = _o79.transform();
            _r54 && e.add(_r54);
          }
          if (_r53) {
            var _t236 = _r53.$transform;
            _t236 && e.add(_t236);
          }
        }
      }
      return e;
    }
    var Ai = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, o) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = Bi(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, o, r) {
        return $s(t) && t.extractWithChild(e, n, o);
      },
      $getDOMSlot: function $getDOMSlot(t, e, n) {
        return t.getDOMSlot(e);
      },
      $getSlotTargetElement: function $getSlotTargetElement(t, e, n, o) {
        return null;
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return $s(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, o) {
        return t.updateDOM(e, n, o._config);
      },
    };
    function Di(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function wi(t, e, n) {
      return (t.set(e, n), Di.bind(null, t, e));
    }
    var _Ii = (function () {
      function Ii(t, e, n, o, r, s, i, l, c) {
        ((this._createEditorArgs = c),
          (this._parentEditor = e),
          (this._rootElement = null),
          (this._editorState = t),
          (this._pendingEditorState = null),
          (this._compositionKey = null),
          (this._deferred = []),
          (this._keyToDOMMap = new _Z()),
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
          (this._key = xl()),
          (this._onError = r),
          (this._onWarn = s),
          (this._htmlConversions = i),
          (this._editable = l),
          (this._headless = null !== e && e._headless),
          (this._window = null),
          (this._blockCursorElement = null),
          (this._slotsUsed = !1),
          (this._keyDownShortcuts = null),
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
            selectionChangeFromDOMUpdatePoints: null,
            unprocessedBeforeInputData: null,
          }));
      }
      var _proto18 = Ii.prototype;
      _proto18.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto18.registerUpdateListener = function registerUpdateListener(t) {
        return wi(this._listeners.update, t);
      };
      _proto18.registerEditableListener = function registerEditableListener(t) {
        return wi(this._listeners.editable, t);
      };
      _proto18.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return wi(this._listeners.decorator, t);
      };
      _proto18.registerTextContentListener =
        function registerTextContentListener(t) {
          return wi(this._listeners.textcontent, t);
        };
      _proto18.registerRootListener = function registerRootListener(t) {
        var _this14 = this;
        var e = this._listeners.root;
        return Xa(wi(e, t, t(this._rootElement, null) || void 0), function () {
          return (function (t, e, n) {
            var o = t.get(e);
            (o && o(), t.set(e, e.apply(void 0, n) || void 0));
          })(e, t, [null, _this14._rootElement]);
        });
      };
      _proto18.registerCommand = function registerCommand(e, n, o) {
        void 0 === o && t(35);
        var r = this._commands;
        r.has(e) ||
          r.set(e, [new _q(), new _q(), new _q(), new _q(), new _q()]);
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
      _proto18.registerMutationListener = function registerMutationListener(
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
      _proto18.getRegisteredNode = function getRegisteredNode(e) {
        var n = this._nodes.get(e.getType());
        return (void 0 === n && t(37, e.name), n);
      };
      _proto18.resolveRegisteredNodeAfterReplacements =
        function resolveRegisteredNodeAfterReplacements(t) {
          for (; t.replaceWithKlass; )
            t = this.getRegisteredNode(t.replaceWithKlass);
          return t;
        };
      _proto18.initializeMutationListener = function initializeMutationListener(
        t,
        e,
      ) {
        var n = this._editorState,
          o = Dc(n).get(e.getType());
        if (!o) return;
        var r = new Map();
        for (var _t237 of o.keys()) r.set(_t237, "created");
        r.size > 0 &&
          t(r, {
            dirtyLeaves: new Set(),
            prevEditorState: n,
            updateTags: new Set(["registerMutationListener"]),
          });
      };
      _proto18.registerNodeTransformToKlass =
        function registerNodeTransformToKlass(t, e) {
          var n = this.getRegisteredNode(t);
          return (n.transforms.add(e), n);
        };
      _proto18.registerNodeTransform = function registerNodeTransform(t, e) {
        var n = this.registerNodeTransformToKlass(t, e),
          o = [n],
          r = n.replaceWithKlass;
        if (null != r) {
          var _t238 = this.registerNodeTransformToKlass(r, e);
          o.push(_t238);
        }
        return (
          (function (t, e) {
            var n = Dc(t.getEditorState()),
              o = [];
            for (var _t239 of e) {
              var _e146 = n.get(_t239);
              _e146 && o.push(_e146);
            }
            if (0 === o.length) return;
            t.update(
              function () {
                for (var _t240 of o)
                  for (var _e147 of _t240.keys()) {
                    var _t241 = sl(_e147);
                    _t241 && _t241.markDirty();
                  }
              },
              null === t._pendingEditorState ? { tag: Do } : void 0,
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
      _proto18.hasNode = function hasNode(t) {
        return this._nodes.has(t.getType());
      };
      _proto18.hasNodes = function hasNodes(t) {
        return t.every(this.hasNode.bind(this));
      };
      _proto18.dispatchCommand = function dispatchCommand(t) {
        for (
          var _len6 = arguments.length,
            e = new Array(_len6 > 1 ? _len6 - 1 : 0),
            _key6 = 1;
          _key6 < _len6;
          _key6++
        ) {
          e[_key6 - 1] = arguments[_key6];
        }
        return Pl.apply(void 0, [this, t].concat(e));
      };
      _proto18.getDecorators = function getDecorators() {
        return this._decorators;
      };
      _proto18.getRootElement = function getRootElement() {
        return this._rootElement;
      };
      _proto18.getKey = function getKey() {
        return this._key;
      };
      _proto18.setRootElement = function setRootElement(t) {
        var e = this._rootElement;
        if (t !== e) {
          var _e$classList3;
          var _n117 = Ml(this._config.theme, "root"),
            _o80 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            bi(this, e, t, _o80, { preserveUpdateQueue: !0 }),
            null !== e &&
              (this._config.disableEvents || vo(e),
              null != _n117 &&
                (_e$classList3 = e.classList).remove.apply(
                  _e$classList3,
                  _n117,
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e148 = zl(t),
              _o81 = t.style;
            ((_o81.userSelect = "text"),
              (_o81.whiteSpace = "pre-wrap"),
              (_o81.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e148),
              (this._dirtyType = 2),
              ut(this),
              this._updateTags.add(Do),
              Ds(this),
              this._config.disableEvents ||
                (function (t, e) {
                  var n = t.ownerDocument;
                  $n.set(t, n);
                  var o = zn.get(n);
                  (void 0 === o &&
                    ((o = { editors: new Set(), hasShadowEditor: void 0 }),
                    zn.set(n, o)),
                    o.editors.add(e),
                    (o.hasShadowEditor = void 0),
                    (t.__lexicalEditor = e));
                  var r = yo(t);
                  r.push(Wn.register(n));
                  var s = Bn();
                  var _loop3 = function _loop3() {
                    var _s$_n = s[_n118],
                      o = _s$_n[0],
                      i = _s$_n[1],
                      l =
                        "function" == typeof i
                          ? function (t) {
                              To(t) ||
                                (So(t),
                                (e.isEditable() || "click" === o) && i(t, e));
                            }
                          : function (t) {
                              if (To(t)) return;
                              So(t);
                              var n = e.isEditable();
                              switch (o) {
                                case "cut":
                                  return n && Pl(e, xn, t);
                                case "copy":
                                  return Pl(e, yn, t);
                                case "paste":
                                  return n && Pl(e, We, t);
                                case "dragstart":
                                  return n && Pl(e, _n, t);
                                case "dragover":
                                  return n && Pl(e, pn, t);
                                case "dragend":
                                  return n && Pl(e, mn, t);
                                case "focus":
                                  return n && Pl(e, kn, t);
                                case "blur":
                                  return n && Pl(e, En, t);
                                case "drop":
                                  return n && Pl(e, hn, t);
                              }
                            };
                    r.push(Rn(t, o, l));
                  };
                  for (var _n118 = 0; _n118 < s.length; _n118++) {
                    _loop3();
                  }
                })(t, this),
              null != _n117 &&
                (_t$classList = t.classList).add.apply(_t$classList, _n117));
          } else ((this._window = null), this._updateTags.add(Do), Ds(this));
          ws("root", this, !1, t, e);
        }
      };
      _proto18.getElementByKey = function getElementByKey(t) {
        return this._keyToDOMMap.get(t) || null;
      };
      _proto18.getEditorState = function getEditorState() {
        return this._editorState;
      };
      _proto18.setEditorState = function setEditorState(e, n) {
        var _this15 = this;
        e.isEmpty() && t(38);
        var o = e;
        (o._readOnly &&
          ((o = js(e)),
          (o._selection = e._selection ? e._selection.clone() : null)),
          at(this));
        var r = this._pendingEditorState,
          s = void 0 !== n ? n.tag : null;
        (null === r ||
          r.isEmpty() ||
          (null != s && this._updateTags.add(s), Ds(this)),
          (this._pendingEditorState = o),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          (this._slotsUsed = this._slotsUsed || e._slotsUsed),
          Ls(
            this,
            function () {
              if ((s && _this15._updateTags.add(s), e._parsed))
                for (var _ref45 of o._nodeMap.entries()) {
                  var _t242 = _ref45[0];
                  var _e149 = _ref45[1];
                  $s(_e149)
                    ? _this15._dirtyElements.set(_t242, !0)
                    : _this15._dirtyLeaves.add(_t242);
                }
            },
            { discrete: !this._updating || void 0 },
          ));
      };
      _proto18.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var o = Gs(),
            r = us,
            s = ds,
            i = fs,
            l = e._dirtyElements,
            c = e._dirtyLeaves,
            a = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Set()),
            (e._dirtyType = 0),
            (us = o),
            (ds = !1),
            (fs = e),
            Fi(null));
          try {
            var _r55 = e._nodes;
            (Ms(t.root, _r55), n && n(), (o._readOnly = !0), (o._parsed = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = c),
              (e._cloneNotNeeded = a),
              (e._dirtyType = u),
              (us = r),
              (ds = s),
              (fs = i));
          }
          return o;
        })("string" == typeof t ? JSON.parse(t) : t, this, e);
      };
      _proto18.read = function read() {
        for (
          var _len7 = arguments.length, t = new Array(_len7), _key7 = 0;
          _key7 < _len7;
          _key7++
        ) {
          t[_key7] = arguments[_key7];
        }
        var _ref46 = 1 === t.length ? ["force-commit", t[0]] : t,
          e = _ref46[0],
          n = _ref46[1];
        "force-commit" === e && Ds(this);
        return (
          "pending" === e
            ? this._pendingEditorState || this._editorState
            : this.getEditorState()
        ).read(n, { editor: this });
      };
      _proto18.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : Rs(t, e, n);
        })(this, t, e);
      };
      _proto18.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          Ls(this, function () {
            var o = jr(),
              r = dl();
            (null !== o
              ? o.dirty || gl(o.clone())
              : 0 !== r.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? r.selectStart()
                  : r.selectEnd()),
              Kl("focus"),
              Bl(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto18.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = Zl(this._window);
        null !== e && e.removeAllRanges();
      };
      _proto18.isEditable = function isEditable() {
        return this._editable;
      };
      _proto18.setEditable = function setEditable(t) {
        this._editable !== t &&
          ((this._editable = t),
          ws("editable", this, !0, t),
          this._slotsUsed &&
            this.update(function () {
              return Ns();
            }));
      };
      _proto18.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON() };
      };
      return Ii;
    })();
    _Ii.version = V;
    var Pi = null;
    function Fi(t) {
      Pi = t;
    }
    var Ri = Symbol("INTERNAL_SKIP_AFTER_CLONE_FROM");
    var Li = 1;
    function Ki(e, n) {
      var o = Bi(e, n);
      return (void 0 === o && t(30, n), o);
    }
    function Bi(t, e) {
      return t._nodes.get(e);
    }
    var $i =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function zi(t, e) {
      var n =
        void 0 !== e
          ? e
          : (function () {
              var e = t.getRootNode();
              return qi(e) || ec(e) ? gc(e) : null;
            })();
      if (!pc(n)) return !1;
      if (n.hasAttribute("data-lexical-slot")) return !1;
      var o = al(n),
        r = n.nodeName;
      return (
        Ao(o) &&
        ("INPUT" === r ||
          "TEXTAREA" === r ||
          ("true" === n.contentEditable && null == ji(n)))
      );
    }
    var Wi = zi;
    function Ui(t, e, n) {
      var o = t.getRootElement();
      if (!o) return !1;
      try {
        if (!e || !o.contains(e) || !o.contains(n)) return !1;
      } catch (t) {
        return !1;
      }
      return (
        Yi(e) === t &&
        t.read("latest", function () {
          return !zi(e);
        })
      );
    }
    function Hi(t) {
      return t instanceof _Ii;
    }
    function Yi(t) {
      var e = t;
      for (; null != e; ) {
        var _t243 = ji(e);
        if (Hi(_t243)) return _t243;
        e = Rl(e);
      }
      return null;
    }
    function ji(t) {
      return t ? t.__lexicalEditor : null;
    }
    function Gi(t) {
      return ar(t) || t.isToken();
    }
    function Ji(t) {
      return Gi(t) || t.isSegmented();
    }
    function Vi(t) {
      return mc(t) && 3 === t.nodeType;
    }
    function qi(t) {
      return mc(t) && 9 === t.nodeType;
    }
    function Xi(t) {
      var e = t;
      for (; null != e; ) {
        if (Vi(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function Qi(t, e, n) {
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
    function Zi(t, e) {
      var n = (function () {
        var t = Pi;
        return ((Pi = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (xs(), Cs());
      var o = Ts(),
        r = Ss(),
        s = "" + Li++;
      (r._nodeMap.set(s, t),
        $s(t) ? o._dirtyElements.set(s, !0) : o._dirtyLeaves.add(s),
        o._cloneNotNeeded.add(s),
        0 === o._dirtyType && (o._dirtyType = 1),
        (t.__key = s));
    }
    function tl(e) {
      null !== Qc(e) && t(380, e.__key, String(Qc(e)));
      var n = e.getParent();
      if (null !== n) {
        var _t244 = e.getWritable(),
          _o82 = n.getWritable(),
          _r56 = e.getPreviousSibling(),
          _s45 = e.getNextSibling(),
          _i24 = null !== _s45 ? _s45.__key : null,
          _l18 = null !== _r56 ? _r56.__key : null,
          _c13 = null !== _r56 ? _r56.getWritable() : null,
          _a0 = null !== _s45 ? _s45.getWritable() : null;
        (null === _r56 && (_o82.__first = _i24),
          null === _s45 && (_o82.__last = _l18),
          null !== _c13 && (_c13.__next = _i24),
          null !== _a0 && (_a0.__prev = _l18),
          (_t244.__prev = null),
          (_t244.__next = null),
          (_t244.__parent = null),
          _o82.__size--);
      }
    }
    var el = tl;
    function nl(e) {
      (Cs(), Oo(e) && t(323, e.__key, e.__type));
      var n = e.getLatest(),
        o = null !== n.__parent ? n.__parent : Xc(n) ? n.__slotHost : null,
        r = Ss(),
        s = Ts(),
        i = r._nodeMap,
        l = s._dirtyElements;
      null !== o &&
        (function (t, e, n) {
          var o = t;
          for (; null !== o; ) {
            if (n.has(o)) return;
            var _t245 = e.get(o);
            if (void 0 === _t245) break;
            (n.set(o, !1),
              (o =
                null !== _t245.__parent
                  ? _t245.__parent
                  : Xc(_t245)
                    ? _t245.__slotHost
                    : null));
          }
        })(o, i, l);
      var c = n.__key;
      (0 === s._dirtyType && (s._dirtyType = 1),
        $s(e) ? l.set(c, !0) : s._dirtyLeaves.add(c));
    }
    function ol(t) {
      xs();
      var e = Ts(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t246 = sl(n);
          null !== _t246 && _t246.getWritable();
        }
        if (null !== t) {
          var _e150 = sl(t);
          null !== _e150 && _e150.getWritable();
        }
      }
    }
    function rl() {
      if (ys()) return null;
      return Ts()._compositionKey;
    }
    function sl(t, e) {
      var n = (e || Ss())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function il(t, e) {
      var n = cl(t, Ts());
      return void 0 !== n ? sl(n, e) : null;
    }
    function ll(t, e, n) {
      t["__lexicalKey_" + e._key] = n;
    }
    function cl(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function al(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t247 = il(n, e);
        if (null !== _t247) return _t247;
        n = Rl(n);
      }
      return null;
    }
    function ul(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function fl(t) {
      return t.read(function () {
        return dl().getTextContent();
      });
    }
    function dl() {
      return Ss()._nodeMap.get("root");
    }
    function hl(t, e) {
      if (
        !(
          jl(t) &&
          t.isAttached() &&
          t.isEmpty() &&
          (Ys(t) || (null !== e && Nc(e)))
        )
      )
        return null;
      var n = vi();
      return (t.append(n), n);
    }
    function gl(t) {
      xs();
      var e = Ss();
      (null !== t &&
        ((t.dirty = !0),
        t.setCachedNodes(null),
        xr(t) && Ts()._slotsUsed && Br(t)),
        (e._selection = t));
    }
    function _l() {
      xs();
      at(Ts());
    }
    function pl(t) {
      var e = (function (t, e) {
        var n = t;
        for (; null != n; ) {
          var _t248 = cl(n, e);
          if (void 0 !== _t248) return _t248;
          n = Rl(n);
        }
        return null;
      })(t, Ts());
      return null === e ? null : sl(e);
    }
    function ml(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function yl(t) {
      var e = [];
      for (var _n119 = t; null !== _n119; _n119 = _n119._parentEditor)
        e.push(_n119);
      return e;
    }
    function xl() {
      return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substring(0, 5);
    }
    function Cl(t) {
      return Vi(t) ? t.nodeValue : null;
    }
    function Sl(t, e, n) {
      var o = Zl(Wl(e));
      if (null === o) return;
      var r = ac(o, e._rootElement),
        s = r.anchorNode;
      var i = r.anchorOffset,
        l = r.focusOffset;
      if (null !== s) {
        var _e151 = Cl(s);
        var _o83 = al(s);
        if (null !== _e151 && sr(_o83)) {
          if ((_e151 === T || _e151 === v) && n) {
            var _t249 = n.length;
            ((_e151 = n), (i = _t249), (l = _t249));
          }
          null !== _e151 && Tl(_o83, _e151, i, l, t);
        }
      }
    }
    function Tl(t, e, n, o, r) {
      var s = t;
      if (s.isAttached() && (r || !s.isDirty())) {
        var _i25 = s.isComposing();
        if (s.isToken() && _i25) return;
        var _l19 = e;
        if (
          (_i25 || r) &&
          (e.endsWith(T) && (_l19 = e.slice(0, -T.length)), r)
        ) {
          var _t250 = v;
          var _e152;
          for (; -1 !== (_e152 = _l19.indexOf(_t250)); )
            ((_l19 = _l19.slice(0, _e152) + _l19.slice(_e152 + _t250.length)),
              null !== n &&
                n > _e152 &&
                (n = Math.max(_e152, n - _t250.length)),
              null !== o &&
                o > _e152 &&
                (o = Math.max(_e152, o - _t250.length)));
        }
        var _c14 = s.getTextContent();
        if (r || _l19 !== _c14) {
          var _e153 = jr();
          if ("" === _l19) {
            if ((ol(null), _ || h || y)) s.remove();
            else {
              var _t251 = Ts();
              (Nl(s, "", _e153),
                setTimeout(function () {
                  _t251.update(function () {
                    s.isAttached() && "" === s.getTextContent() && s.remove();
                  });
                }, 20));
            }
            return;
          }
          var _r57 = s.getParent(),
            _c15 = Gr(),
            _a1 = s.getTextContentSize(),
            _u11 = rl(),
            _f10 = s.getKey();
          if (
            (s.isToken() && !_i25) ||
            (null !== _u11 && _f10 === _u11 && !_i25) ||
            (xr(_c15) &&
              ((null !== _r57 &&
                !_r57.canInsertTextBefore() &&
                0 === _c15.anchor.offset) ||
                (_c15.anchor.key === t.__key &&
                  0 === _c15.anchor.offset &&
                  !s.canInsertTextBefore() &&
                  !_i25) ||
                (_c15.focus.key === t.__key &&
                  _c15.focus.offset === _a1 &&
                  !s.canInsertTextAfter() &&
                  !_i25)))
          )
            return void s.markDirty();
          if (!xr(_e153) || null === n || null === o)
            return void Nl(s, _l19, _e153);
          if ((_e153.setTextNodeRange(s, n, s, o), s.isSegmented())) {
            var _t252 = rr(s.getTextContent());
            (s.replace(_t252), (s = _t252));
          }
          Nl(s, _l19, _e153);
        }
      }
    }
    function Nl(t, e, n) {
      if ((t.setTextContent(e), xr(n))) {
        var _e154 = t.getKey();
        var _o84 = !1;
        for (var _r58 of ["anchor", "focus"]) {
          var _s46 = n[_r58];
          "text" === _s46.type &&
            _s46.key === _e154 &&
            ((_s46.offset = Ia(t, _s46.offset, "clamp")), (_o84 = !0));
        }
        _o84 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
      }
    }
    function vl(t, e, n) {
      var o = e[n] || !1;
      return "any" === o || o === t[n];
    }
    function kl(t, e) {
      return (
        vl(t, e, "altKey") &&
        vl(t, e, "ctrlKey") &&
        vl(t, e, "shiftKey") &&
        vl(t, e, "metaKey")
      );
    }
    function El(t) {
      var e = t;
      for (; null !== e; ) {
        var _t253 = e.getParent();
        if (null === _t253) return null;
        if (Ys(_t253)) return e;
        e = _t253;
      }
      return null;
    }
    function Ol(t, e) {
      var n = t.anchor,
        o = t.focus,
        r = n.key,
        s = n.offset,
        i = n.type,
        l = o.key,
        c = o.offset,
        a = o.type;
      if ((bt(t), !Ys(e))) return t;
      var u = El(n.getNode());
      return (
        $s(u) &&
          u.isShadowRoot() &&
          u.is(El(o.getNode())) &&
          (n.set(r, s, i), o.set(l, c, a)),
        t
      );
    }
    function bl(t, e) {
      "" === t.getAttribute(e) && t.removeAttribute(e);
    }
    function Ml(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        o = n[e];
      if (void 0 !== o) return o;
      var r = t[e];
      if ("string" == typeof r) {
        var _t254 = qa(r);
        return ((n[e] = _t254), _t254);
      }
      return r;
    }
    function Al(e, n, o, r, s) {
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
    function Dl(t, e, n) {
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
    function wl(t, e) {
      var n = t.offset;
      if ("element" === t.type) {
        return Dl(t.getNode(), e, n);
      }
      {
        var _o85 = t.getNode();
        if ((e && 0 === n) || (!e && n === _o85.getTextContentSize())) {
          var _t255 = e ? _o85.getPreviousSibling() : _o85.getNextSibling();
          return null === _t255
            ? Dl(
                _o85.getParentOrThrow(),
                e,
                _o85.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t255;
        }
      }
      return null;
    }
    function Il(t) {
      var e = Wl(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function Pl(t, e) {
      return Is(t, e, arguments.length <= 2 ? undefined : arguments[2], t);
    }
    function Fl(e, n) {
      var o = e._keyToDOMMap.get(n);
      return (void 0 === o && t(75, n), o);
    }
    function Rl(t) {
      var e = t.assignedSlot || t.parentElement;
      if (null !== e) return e;
      var n = t.parentNode;
      return ec(n) ? n.host : null;
    }
    function Ll(t) {
      return qi(t) ? t : pc(t) ? t.ownerDocument : null;
    }
    function Kl(t) {
      xs();
      Ts()._updateTags.add(t);
    }
    function Bl(t) {
      xs();
      Ts()._deferred.push(t);
    }
    function $l(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function zl(t) {
      var e = Ll(t);
      return e ? e.defaultView : null;
    }
    function Wl(e) {
      var n = e._window;
      return (null === n && t(78), n);
    }
    function Ul(t) {
      return ($s(t) && t.isInline()) || (Us(t) && t.isInline());
    }
    function Hl(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== Qc(e) && $s(e)) return e;
        var _t256 = e.getParentOrThrow();
        if (jl(_t256)) return _t256;
        e = _t256;
      }
      return e;
    }
    function Yl(t) {
      return $s(t) && t.isShadowRoot();
    }
    function jl(t) {
      return Ys(t) || Yl(t);
    }
    function Gl(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t, Ri);
      return (
        Zi(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function Jl(e) {
      var n = Ts(),
        o = e.getType(),
        r = Bi(n, o);
      void 0 === r && t(200, e.constructor.name, o);
      var s = r.replace,
        i = r.replaceWithKlass;
      if (null !== s) {
        var _n120 = s(e),
          _r59 = _n120.constructor;
        return (
          null !== i
            ? _n120 instanceof i ||
              t(
                201,
                i.name,
                i.getType(),
                _r59.name,
                _r59.getType(),
                e.constructor.name,
                o,
              )
            : (_n120 instanceof e.constructor && _r59 !== e.constructor) ||
              t(202, _r59.name, _r59.getType(), e.constructor.name, o),
          _n120.__key === e.__key &&
            t(203, e.constructor.name, o, _r59.name, _r59.getType()),
          _n120
        );
      }
      return e;
    }
    function Vl(e, n) {
      !Ys(e.getParent()) || $s(n) || Us(n) || t(99);
    }
    function ql(e) {
      var n = sl(e);
      return (null === n && t(63, e), n);
    }
    function Xl(t) {
      if (!t || t.isInline()) return !1;
      if (Us(t)) return !0;
      if ($s(t)) {
        if (t.isShadowRoot()) {
          var _e155 = t.getParent();
          return !($s(_e155) && _e155.isShadowRoot());
        }
        return !t.canBeEmpty();
      }
      return !1;
    }
    function Ql(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var o = t.parentElement;
      null !== o && o.removeChild(t);
    }
    function Zl(t) {
      return o ? (t || window).getSelection() : null;
    }
    function tc(t) {
      var e = zl(t);
      return e ? e.getSelection() : null;
    }
    function ec(t) {
      return yc(t) && "host" in t;
    }
    var nc = [];
    function oc(t) {
      var e = t.getRootNode();
      if (e === t || !ec(e)) return nc;
      var n = [e];
      var o = e.host;
      for (;;) {
        var _t257 = o.getRootNode();
        if (_t257 === o || !ec(_t257)) break;
        (n.push(_t257), (o = _t257.host));
      }
      return n;
    }
    function* rc(t) {
      var e = [t];
      var n;
      for (; (n = e.pop()); ) {
        yield* n.querySelectorAll('[data-lexical-editor="true"]');
        var _t258 = (qi(n) ? n : n.ownerDocument).createTreeWalker(
          n,
          NodeFilter.SHOW_ELEMENT,
        );
        var _o86 = void 0;
        for (; (_o86 = _t258.nextNode()); )
          _o86.shadowRoot && e.push(_o86.shadowRoot);
      }
    }
    function sc(t) {
      return null !== t ? t.ownerDocument : document;
    }
    function ic() {
      var t = ks();
      return sc(null !== t ? t._rootElement : null);
    }
    function lc(t, e) {
      if (null === e || "function" != typeof t.getComposedRanges) return null;
      var n = oc(e);
      if (0 === n.length) return null;
      var o = t.getComposedRanges;
      try {
        var _e156 = o.call(t, { shadowRoots: n })[0];
        if (void 0 !== _e156) return _e156;
      } catch (t) {}
      try {
        var _e157 = o.apply(t, n)[0];
        if (void 0 !== _e157) return _e157;
      } catch (t) {}
      return null;
    }
    function cc(t, e) {
      var n = lc(t, e);
      if (null !== n) {
        var _t259 = uc(n);
        if (null !== _t259) return _t259;
      }
      return t.rangeCount > 0 ? t.getRangeAt(0) : null;
    }
    function ac(t, e) {
      var n = lc(t, e);
      return null === n ? t : fc(n, dc(t));
    }
    function uc(t) {
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
    function fc(t, e) {
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
    function dc(t) {
      return t.direction;
    }
    function hc(t) {
      var e = t.getRootNode();
      return qi(e) || ec(e) ? e.activeElement : null;
    }
    function gc(t) {
      var e = t.activeElement;
      for (; null !== e && null !== e.shadowRoot; ) {
        var _t260 = e.shadowRoot.activeElement;
        if (null === _t260) break;
        e = _t260;
      }
      return e;
    }
    function _c(t) {
      var e = t.target;
      if (
        null !== e &&
        pc(e) &&
        null !== e.shadowRoot &&
        "function" == typeof t.composedPath
      ) {
        var _e158 = t.composedPath();
        if (_e158.length > 0) return _e158[0];
      }
      return e;
    }
    function pc(t) {
      return mc(t) && 1 === t.nodeType;
    }
    function mc(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function yc(t) {
      return mc(t) && 11 === t.nodeType;
    }
    var xc =
      /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
    function Cc(t) {
      return (
        !(!pc(t) || !t.style.display.startsWith("inline")) ||
        xc.test(t.nodeName)
      );
    }
    var Sc =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function Tc(t) {
      return (
        (!pc(t) || !t.style.display.startsWith("inline")) && Sc.test(t.nodeName)
      );
    }
    function Nc(t) {
      if (Us(t) && !t.isInline()) return !0;
      if (!$s(t) || jl(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || ti(e) || sr(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function vc() {
      return Ts();
    }
    function kc(t) {
      if (t === void 0) {
        t = vc();
      }
      return t._config.dom || Ai;
    }
    function Ec(e, n, o) {
      if (o === void 0) {
        o = vc();
      }
      var r = kc(o).$getDOMSlot(e, n, o);
      return ($s(e) && (Oc(r) || t(344, e.getKey(), e.getType())), r);
    }
    function Oc(t) {
      return t instanceof _j;
    }
    function bc(t, e, n) {
      if (n === void 0) {
        n = vc();
      }
      return Xi(Ec(t, e, n).element);
    }
    var Mc = new WeakMap(),
      Ac = new Map();
    function Dc(e) {
      if (!e._readOnly && e.isEmpty()) return Ac;
      e._readOnly || t(192);
      var n = Mc.get(e);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref48 of t._nodeMap) {
              var _n121 = _ref48[0];
              var _o87 = _ref48[1];
              {
                var _t261 = _o87.__type;
                var _r60 = e.get(_t261);
                (_r60 || ((_r60 = new Map()), e.set(_t261, _r60)),
                  _r60.set(_n121, _o87));
              }
            }
            return e;
          })(e)),
          Mc.set(e, n)),
        n
      );
    }
    function wc(t) {
      var e = t.constructor.clone(t, Ri);
      return (e.afterCloneFrom(t), e);
    }
    function Ic(t, e) {
      var n = t.getAttribute("data-lexical-indent");
      if (null !== n) {
        var _t262 = parseInt(n, 10);
        if (Number.isFinite(_t262) && _t262 >= 0)
          return void e.setIndent(_t262);
      }
      var o = parseInt(t.style.paddingInlineStart, 10) || 0,
        r = Math.round(o / 40);
      e.setIndent(r);
    }
    function Pc(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function Fc(t, e) {
      var n = e.style.textAlign;
      return n && n in w ? t.setFormat(n) : t;
    }
    function Rc(t, e) {
      ((t.__lexicalUnmanaged = !0),
        e &&
          void 0 !== e.captureSelection &&
          (t.__lexicalCapturedSelection = e.captureSelection));
    }
    function Lc(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function Kc(t, e) {
      if (e === void 0) {
        e = vc();
      }
      var n = e.isEditable();
      ((t.contentEditable = n ? "true" : "false"),
        n ? (t.__lexicalEditor = e) : delete t.__lexicalEditor);
    }
    function Bc(t, e) {
      var n = t;
      for (; null != n; ) {
        if (!0 === n.__lexicalCapturedSelection) return !0;
        if (pc(n) && n.hasAttribute("data-lexical-slot")) return !1;
        if (void 0 !== cl(n, e)) return !1;
        n = Rl(n);
      }
      return !1;
    }
    function $c(t, e) {
      return (
        (function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        })(t, e) && t[e] !== _Mo5[e]
      );
    }
    var zc = new WeakMap(),
      Wc = Symbol("lexical.synthesizedGetType");
    function Uc(e) {
      var n = zc.get(e);
      if (n) return n;
      var o =
          null != e.prototype && K in e.prototype ? e.prototype[K]() : void 0,
        r = (function (e) {
          if (!(e === _Mo5 || e.prototype instanceof _Mo5)) {
            var _n122 = "<unknown>",
              _o88 = "<unknown>";
            try {
              _n122 = e.getType();
            } catch (t) {}
            try {
              _Ii.version && (_o88 = JSON.parse(_Ii.version));
            } catch (t) {}
            t(290, e.name, _n122, _o88);
          }
          return e === _Ws || e === _Bs4 || e === _Mo5;
        })(e),
        s = !r && $c(e, "getType") ? e.getType : void 0,
        i = s && !(Wc in s) ? s.call(e) : void 0;
      var l,
        c = i;
      if (o)
        if (i) l = o[i];
        else {
          for (var _ref50 of Object.entries(o)) {
            var _t263 = _ref50[0];
            var _e159 = _ref50[1];
            ((c = _t263), (l = _e159));
          }
          if (!l)
            for (var _t264 of Object.getOwnPropertySymbols(o)) {
              var _e160 = o[_t264];
              if (_e160) {
                l = _e160;
                break;
              }
            }
        }
      if (!r && c) {
        if (!$c(e, "getType")) {
          var _t265 = e,
            _n123 = function _n123() {
              return this !== _t265 ? _Mo5.getType.call(this) : c;
            };
          ((_n123[Wc] = !0), (e.getType = _n123));
        }
        if (
          ($c(e, "clone") ||
            (e.clone = function (t, n) {
              Fi(t);
              var o = new e();
              return (n !== Ri && o.afterCloneFrom(t), o);
            }),
          $c(e, "importJSON") ||
            (e.importJSON =
              (l && l.$importJSON) ||
              function (t) {
                return Yc(e).updateFromJSON(t);
              }),
          !$c(e, "importDOM") && l)
        ) {
          var _l20 = l,
            _t266 = _l20.importDOM;
          _t266 &&
            (e.importDOM = function () {
              return _t266;
            });
        }
      }
      var a = { klass: e, ownNodeConfig: l, ownNodeType: c };
      return (zc.set(e, a), a);
    }
    function* Hc(t) {
      for (var _e161 = t; _e161 && (_e161 === _Mo5 || Ao(_e161.prototype)); ) {
        var _t267 = Uc(_e161);
        (yield _t267,
          (_e161 =
            (_t267.ownNodeConfig && _t267.ownNodeConfig["extends"]) ||
            Jc(_e161)));
      }
    }
    function Yc(t) {
      var e = vc();
      xs();
      var n = e.resolveRegisteredNodeAfterReplacements(e.getRegisteredNode(t)),
        o = new n.klass();
      return null === n.replace ? o : Jl(o);
    }
    var jc = function jc(t, e) {
      var n = t;
      for (; null != n && !Ys(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function Gc(e, n) {
      var o = [];
      var r = e.__first;
      for (; null !== r; ) {
        var _e162 = null === n ? sl(r) : n.get(r);
        (null == _e162 && t(174), o.push(r), (r = _e162.__next));
      }
      return o;
    }
    function Jc(t) {
      var e = Object.getPrototypeOf(t);
      if ("function" == typeof e && e !== Function.prototype) return e;
      var n = t.prototype && Object.getPrototypeOf(t.prototype);
      return n ? n.constructor : null;
    }
    var Vc = new Map();
    function qc(t) {
      return $s(t) || Us(t);
    }
    function Xc(t) {
      return $s(t) || Us(t);
    }
    function Qc(t) {
      var e = t.getLatest();
      return Xc(e) ? e.__slotHost : null;
    }
    function Zc(e) {
      var n = Qc(e);
      if (null === n) return null;
      var o = sl(n);
      return ($s(o) || Us(o) || t(370), o);
    }
    function ta(t) {
      var e = Zc(t);
      if (null === e) return null;
      var n = t.getLatest().__key;
      for (var _ref52 of na(e)) {
        var _t268 = _ref52[0];
        var _o89 = _ref52[1];
        if (_o89 === n) return _t268;
      }
      return null;
    }
    function ea(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== Qc(e)) return e;
        e = e.getParent();
      }
      return null;
    }
    function na(t) {
      var e = t.getLatest();
      return qc(e) && null !== e.__slots ? e.__slots : Vc;
    }
    function oa(t) {
      return Array.from(na(t).keys());
    }
    function ra(t, e) {
      var n = na(t).get(e);
      return void 0 === n ? null : sl(n);
    }
    var sa = ["__proto__", "constructor", "prototype"],
      ia = Symbol("slotMapOwner");
    function la(t) {
      var e = t.__slots;
      return (
        (null !== e && e[ia] === t) ||
          ((e = new Map(e)), (e[ia] = t), (t.__slots = e)),
        e
      );
    }
    var ca = new WeakMap(),
      aa = [];
    function ua(t) {
      for (var _ref54 of Hc(t)) {
        var _e163 = _ref54.ownNodeConfig;
        {
          var _t269 = _e163 && _e163.slots;
          if (_t269) return _t269;
        }
      }
      return aa;
    }
    function fa(t) {
      var e = "";
      for (var _n124 of oa(t)) {
        var _o90 = ra(t, _n124);
        null !== _o90 && (e += _o90.getTextContent());
      }
      return e;
    }
    function da(t, e, n) {
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
    function ha(e) {
      var n = e.__slots;
      if (null === n || n.size < 2) return;
      var o = (function (e) {
        var n = ca.get(e);
        if (void 0 === n) {
          var _o91 = ua(e),
            _r61 = new Map();
          for (var _n125 of _o91)
            (sa.includes(_n125) && t(371, e.name, _n125),
              _r61.has(_n125) && t(372, e.name, _n125),
              _r61.set(_n125, _r61.size));
          ((n = _r61), ca.set(e, n));
        }
        return n;
      })(e.constructor);
      var r = null,
        s = !0;
      for (var _t270 of n.keys()) {
        if (null !== r && da(r, _t270, o) > 0) {
          s = !1;
          break;
        }
        r = _t270;
      }
      if (s) return;
      var i = Array.from(n).sort(function (_ref55, _ref56) {
        var t = _ref55[0];
        var e = _ref56[0];
        return da(t, e, o);
      });
      n.clear();
      for (var _ref58 of i) {
        var _t271 = _ref58[0];
        var _e164 = _ref58[1];
        n.set(_t271, _e164);
      }
    }
    function ga(e, n, o) {
      ("__proto__" !== n && "constructor" !== n && "prototype" !== n) ||
        t(373, n);
      var r = e.getLatest();
      if (null !== r.__slots && r.__slots.get(n) === o.getLatest().__key)
        return r;
      ((!$s(o) && !Us(o)) || o.isInline()) && t(374, o.__key);
      var s = e.getWritable(),
        i = la(s),
        l = i.get(n);
      void 0 !== l && pa(l);
      var c = o.getWritable(),
        a = Zc(c);
      if (null !== a) {
        var _t272 = ta(c);
        (null !== _t272 && la(a.getWritable())["delete"](_t272),
          (c.__slotHost = null));
      }
      return (
        tl(c),
        (c.__slotHost = s.__key),
        i.set(n, c.__key),
        ha(s),
        (Ts()._slotsUsed = !0),
        (Ss()._slotsUsed = !0),
        s
      );
    }
    function _a(t, e) {}
    function pa(e) {
      var n = sl(e);
      if (null === n) return;
      var o = n.getWritable();
      (Xc(o) || t(377, e), (o.__slotHost = null), o.remove());
    }
    var ma = { next: "previous", previous: "next" };
    var _ya4 = (function () {
      function ya(t) {
        this.origin = t;
      }
      var _proto19 = ya.prototype;
      _proto19[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return Ha({
            hasNext: Ea,
            initial: this.getAdjacentCaret(),
            map: function map(t) {
              return t;
            },
            step: function step(t) {
              return t.getAdjacentCaret();
            },
          });
        };
      _proto19.getAdjacentCaret = function getAdjacentCaret() {
        return Da(this.getNodeAtCaret(), this.direction);
      };
      _proto19.getSiblingCaret = function getSiblingCaret() {
        return Da(this.origin, this.direction);
      };
      _proto19.remove = function remove() {
        var t = this.getNodeAtCaret();
        return (t && t.remove(), this);
      };
      _proto19.replaceOrInsert = function replaceOrInsert(t, e) {
        var n = this.getNodeAtCaret();
        return (
          t.is(this.origin) ||
            t.is(n) ||
            (null === n ? this.insert(t) : n.replace(t, e)),
          this
        );
      };
      _proto19.splice = function splice(e, n, o) {
        if (o === void 0) {
          o = "next";
        }
        var r = o === this.direction ? n : Array.from(n).reverse();
        var s = this;
        var i = this.getParentAtCaret(),
          l = new Map();
        for (
          var _t273 = s.getAdjacentCaret();
          null !== _t273 && l.size < e;
          _t273 = _t273.getAdjacentCaret()
        ) {
          var _e165 = _t273.origin.getWritable();
          l.set(_e165.getKey(), _e165);
        }
        for (var _e166 of r) {
          if (l.size > 0) {
            var _n126 = s.getNodeAtCaret();
            if (_n126) {
              if (
                (l["delete"](_n126.getKey()),
                l["delete"](_e166.getKey()),
                _n126.is(_e166) || s.origin.is(_e166))
              );
              else {
                var _t274 = _e166.getParent();
                (_t274 && _t274.is(i) && _e166.remove(), _n126.replace(_e166));
              }
            } else null === _n126 && t(263, Array.from(l).join(" "));
          } else s.insert(_e166);
          s = Da(_e166, this.direction);
        }
        for (var _t275 of l.values()) _t275.remove();
        return this;
      };
      return ya;
    })();
    var _xa3 = (function (_ya) {
      function xa() {
        var _this6;
        for (
          var _len8 = arguments.length, args = new Array(_len8), _key8 = 0;
          _key8 < _len8;
          _key8++
        ) {
          args[_key8] = arguments[_key8];
        }
        return (
          ((_this6 = _ya.call.apply(_ya, [this].concat(args)) || this),
          (_this6.type = "child"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(xa, _ya);
      var _proto20 = xa.prototype;
      _proto20.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Fa(t, this.direction);
      };
      _proto20.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Da(Ta(this.getParentAtCaret(), t), this.direction);
      };
      _proto20.getFlipped = function getFlipped() {
        var t = Sa(this.direction);
        return Da(this.getNodeAtCaret(), t) || Fa(this.origin, t);
      };
      _proto20.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto20.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto20.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof xa &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto20.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return xa;
    })(_ya4);
    var Ca = { root: Ys, shadowRoot: jl };
    function Sa(t) {
      return ma[t];
    }
    function Ta(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return null === t || Ca[e](t) ? null : null === Qc(t) ? t : null;
    }
    var _Na3 = (function (_ya2) {
      function Na() {
        var _this7;
        for (
          var _len9 = arguments.length, args = new Array(_len9), _key9 = 0;
          _key9 < _len9;
          _key9++
        ) {
          args[_key9] = arguments[_key9];
        }
        return (
          ((_this7 = _ya2.call.apply(_ya2, [this].concat(args)) || this),
          (_this7.type = "sibling"),
          babelHelpers.assertThisInitialized(_this7)) ||
          babelHelpers.assertThisInitialized(_this7)
        );
      }
      babelHelpers.inheritsLoose(Na, _ya2);
      var _proto21 = Na.prototype;
      _proto21.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Da(t, this.direction);
      };
      _proto21.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto21.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto21.getChildCaret = function getChildCaret() {
        return $s(this.origin) ? Fa(this.origin, this.direction) : null;
      };
      _proto21.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Da(Ta(this.getParentAtCaret(), t), this.direction);
      };
      _proto21.getFlipped = function getFlipped() {
        var t = Sa(this.direction);
        return (
          Da(this.getNodeAtCaret(), t) || Fa(this.origin.getParentOrThrow(), t)
        );
      };
      _proto21.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Na &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto21.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof Na || t instanceof _va3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return Na;
    })(_ya4);
    var _va3 = (function (_ya3) {
      function va(t, e) {
        var _this8;
        ((_this8 = _ya3.call(this, t) || this),
          (_this8.type = "text"),
          (_this8.offset = e));
        return _this8;
      }
      babelHelpers.inheritsLoose(va, _ya3);
      var _proto22 = va.prototype;
      _proto22.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : wa(t, this.direction, this.offset);
      };
      _proto22.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto22.getChildCaret = function getChildCaret() {
        return null;
      };
      _proto22.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Da(Ta(this.getParentAtCaret(), t), this.direction);
      };
      _proto22.getFlipped = function getFlipped() {
        return wa(this.origin, Sa(this.direction), this.offset);
      };
      _proto22.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof va &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto22.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _Na3 || t instanceof va) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto22.getSiblingCaret = function getSiblingCaret() {
        return Da(this.origin, this.direction);
      };
      return va;
    })(_ya4);
    function ka(t) {
      return t instanceof _va3;
    }
    function Ea(t) {
      return t instanceof _Na3;
    }
    function Oa(t) {
      return t instanceof _xa3;
    }
    var ba = {
        next: (function (_va) {
          function _class() {
            var _this9;
            for (
              var _len0 = arguments.length, args = new Array(_len0), _key0 = 0;
              _key0 < _len0;
              _key0++
            ) {
              args[_key0] = arguments[_key0];
            }
            return (
              ((_this9 = _va.call.apply(_va, [this].concat(args)) || this),
              (_this9.direction = "next"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class, _va);
          var _proto23 = _class.prototype;
          _proto23.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto23.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_va3),
        previous: (function (_va2) {
          function _class3() {
            var _this0;
            for (
              var _len1 = arguments.length, args = new Array(_len1), _key1 = 0;
              _key1 < _len1;
              _key1++
            ) {
              args[_key1] = arguments[_key1];
            }
            return (
              ((_this0 = _va2.call.apply(_va2, [this].concat(args)) || this),
              (_this0.direction = "previous"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class3, _va2);
          var _proto24 = _class3.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_va3),
      },
      Ma = {
        next: (function (_Na) {
          function _class5() {
            var _this1;
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
              ((_this1 = _Na.call.apply(_Na, [this].concat(args)) || this),
              (_this1.direction = "next"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class5, _Na);
          var _proto25 = _class5.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_Na3),
        previous: (function (_Na2) {
          function _class7() {
            var _this10;
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
              ((_this10 = _Na2.call.apply(_Na2, [this].concat(args)) || this),
              (_this10.direction = "previous"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class7, _Na2);
          var _proto26 = _class7.prototype;
          _proto26.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto26.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_Na3),
      },
      Aa = {
        next: (function (_xa) {
          function _class9() {
            var _this11;
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
              ((_this11 = _xa.call.apply(_xa, [this].concat(args)) || this),
              (_this11.direction = "next"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class9, _xa);
          var _proto27 = _class9.prototype;
          _proto27.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto27.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_xa3),
        previous: (function (_xa2) {
          function _class1() {
            var _this12;
            for (
              var _len13 = arguments.length,
                args = new Array(_len13),
                _key13 = 0;
              _key13 < _len13;
              _key13++
            ) {
              args[_key13] = arguments[_key13];
            }
            return (
              ((_this12 = _xa2.call.apply(_xa2, [this].concat(args)) || this),
              (_this12.direction = "previous"),
              babelHelpers.assertThisInitialized(_this12)) ||
              babelHelpers.assertThisInitialized(_this12)
            );
          }
          babelHelpers.inheritsLoose(_class1, _xa2);
          var _proto28 = _class1.prototype;
          _proto28.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getLastChild();
          };
          _proto28.insert = function insert(t) {
            return (
              this.origin.splice(this.origin.getChildrenSize(), 0, [t]),
              this
            );
          };
          return _class1;
        })(_xa3),
      };
    function Da(t, e) {
      return t ? new Ma[e](t) : null;
    }
    function wa(t, e, n) {
      return t ? new ba[e](t, Ia(t, n)) : null;
    }
    function Ia(t, n, o) {
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
    function Pa(t, e) {
      return new _Ba(t, e);
    }
    function Fa(t, e) {
      return $s(t) ? new Aa[e](t) : null;
    }
    function Ra(t) {
      return (t && t.getChildCaret()) || t;
    }
    function La(t) {
      return t && Ra(t.getAdjacentCaret());
    }
    var _Ka = (function () {
      function Ka(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto29 = Ka.prototype;
      _proto29.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new Ka(t, e, this.direction);
      };
      _proto29.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto29.getTextSlices = function getTextSlices() {
        var _this16 = this;
        var t = function t(_t276) {
            var e = _this16[_t276].getLatest();
            return ka(e)
              ? (function (t, e) {
                  var n = t.direction,
                    o = t.origin,
                    r = Ia(o, "focus" === e ? Sa(n) : n);
                  return Pa(t, r - t.offset);
                })(e, _t276)
              : null;
          },
          e = t("anchor"),
          n = t("focus");
        if (e && n) {
          var _t277 = e.caret,
            _o92 = n.caret;
          if (_t277.isSameNodeCaret(_o92))
            return [Pa(_t277, _o92.offset - _t277.offset), null];
        }
        return [e, n];
      };
      _proto29.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = ka(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          o = ka(n),
          r = function r(e) {
            return e.isSameNodeCaret(n) ? null : La(e) || e.getParentCaret(t);
          };
        return Ha({
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
      _proto29[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this.iterNodeCarets("root");
        };
      return Ka;
    })();
    var _Ba = (function () {
      function Ba(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto30 = Ba.prototype;
      _proto30.getSliceIndices = function getSliceIndices() {
        var t = this.distance,
          e = this.caret.offset,
          n = e + t;
        return n < e ? [n, e] : [e, n];
      };
      _proto30.getTextContent = function getTextContent() {
        var _this$getSliceIndices = this.getSliceIndices(),
          t = _this$getSliceIndices[0],
          e = _this$getSliceIndices[1];
        return this.caret.origin.getTextContent().slice(t, e);
      };
      _proto30.getTextContentSize = function getTextContentSize() {
        return Math.abs(this.distance);
      };
      _proto30.removeTextSlice = function removeTextSlice() {
        var _this$caret = this.caret,
          t = _this$caret.origin,
          e = _this$caret.direction,
          _this$getSliceIndices2 = this.getSliceIndices(),
          n = _this$getSliceIndices2[0],
          o = _this$getSliceIndices2[1],
          r = t.getTextContent();
        return wa(t.setTextContent(r.slice(0, n) + r.slice(o)), e, n);
      };
      return Ba;
    })();
    function $a(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function za(t) {
      return Ua(t, $a(Fa(dl(), Sa(t.direction)), t.direction));
    }
    function Wa(t) {
      return Ua(t, t);
    }
    function Ua(e, n) {
      return (
        e.direction !== n.direction && t(265),
        new _Ka(e, n, e.direction)
      );
    }
    function Ha(t) {
      var _ref59;
      var e = t.initial,
        n = t.hasNext,
        o = t.step,
        r = t.map;
      var s = e;
      return (
        (_ref59 = {}),
        (_ref59[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
          function () {
            return this;
          }),
        (_ref59.next = function next() {
          if (!n(s)) return { done: !0, value: void 0 };
          var t = { done: !1, value: r(s) };
          return ((s = o(s)), t);
        }),
        _ref59
      );
    }
    function Ya(e, n) {
      var o = Va(e.origin, n.origin);
      switch (
        (null === o && t(275, e.origin.getKey(), n.origin.getKey()), o.type)
      ) {
        case "same": {
          var _t278 = "text" === e.type,
            _o93 = "text" === n.type;
          return _t278 && _o93
            ? (function (t, e) {
                return Math.sign(t - e);
              })(e.offset, n.offset)
            : e.type === n.type
              ? 0
              : _t278
                ? -1
                : _o93
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
          return ja(o);
      }
    }
    function ja(t) {
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
    function Ga(t, e) {
      return e.is(t);
    }
    function Ja(t) {
      return $s(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function Va(e, n) {
      if (e.is(n)) return { commonAncestor: e, type: "same" };
      var o = new Map();
      for (
        var _Ja = Ja(e), _t279 = _Ja[0], _n127 = _Ja[1];
        _t279;
        _n127 = _t279, _t279 = _t279.getParent()
      )
        o.set(_t279, _n127);
      for (
        var _Ja2 = Ja(n), _r62 = _Ja2[0], _s47 = _Ja2[1];
        _r62;
        _s47 = _r62, _r62 = _r62.getParent()
      ) {
        var _i26 = o.get(_r62);
        if (void 0 !== _i26)
          return null === _i26
            ? (Ga(e, _r62) || t(276),
              { commonAncestor: _r62, type: "ancestor" })
            : null === _s47
              ? (Ga(n, _r62) || t(277),
                { commonAncestor: _r62, type: "descendant" })
              : ((($s(_i26) || Ga(e, _i26)) &&
                  ($s(_s47) || Ga(n, _s47)) &&
                  _r62.is(_i26.getParent()) &&
                  _r62.is(_s47.getParent())) ||
                  t(278),
                { a: _i26, b: _s47, commonAncestor: _r62, type: "branch" });
      }
      return null;
    }
    function qa() {
      var e = [];
      for (
        var _len14 = arguments.length, t = new Array(_len14), _key14 = 0;
        _key14 < _len14;
        _key14++
      ) {
        t[_key14] = arguments[_key14];
      }
      for (var _n128 of t)
        if (_n128 && "string" == typeof _n128)
          for (var _ref61 of _n128.matchAll(/\S+/g)) {
            var _t280 = _ref61[0];
            e.push(_t280);
          }
      return e;
    }
    function Xa() {
      for (
        var _len15 = arguments.length, t = new Array(_len15), _key15 = 0;
        _key15 < _len15;
        _key15++
      ) {
        t[_key15] = arguments[_key15];
      }
      return function () {
        for (var _e167 = t.length - 1; _e167 >= 0; _e167--) t[_e167]();
        t.length = 0;
      };
    }
    ((exports.$addUpdateTag = Kl),
      (exports.$applyNodeReplacement = Jl),
      (exports.$assumeActiveEditor = function (t) {
        (null !== Ss() && null === fs && (fs = t), fs !== t && e(378));
      }),
      (exports.$caretFromPoint = ri),
      (exports.$caretRangeFromSelection = ci),
      (exports.$cloneWithProperties = wc),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = wc(t))[Eo] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = Ya),
      (exports.$copyNode = Gl),
      (exports.$create = Yc),
      (exports.$createChildrenArray = Gc),
      (exports.$createLineBreakNode = Zs),
      (exports.$createNodeSelection = Hr),
      (exports.$createParagraphNode = vi),
      (exports.$createPoint = fr),
      (exports.$createRangeSelection = Ur),
      (exports.$createRangeSelectionFromDom = function (t, e) {
        return Yr(null, t, e, null);
      }),
      (exports.$createTabNode = cr),
      (exports.$createTextNode = rr),
      (exports.$extendCaretToRange = za),
      (exports.$findMatchingParent = jc),
      (exports.$flushSyncAfterUpdate = function () {
        var t = Ss();
        (xs(), (t._flushSync = !0));
      }),
      (exports.$formatText = Nr),
      (exports.$fullReconcile = Ns),
      (exports.$generateNodesFromRawText = os),
      (exports.$getAdjacentChildCaret = La),
      (exports.$getAdjacentNode = wl),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          o = t,
          r = La(o);
        for (; null === r; ) {
          if ((n--, (r = o.getParentCaret(e)), !r)) return null;
          ((o = r), (r = La(o)));
        }
        return r && [r, n];
      }),
      (exports.$getCaretInDirection = $a),
      (exports.$getCaretRange = Ua),
      (exports.$getCaretRangeInDirection = _i),
      (exports.$getCharacterOffsets = kr),
      (exports.$getChildCaret = Fa),
      (exports.$getChildCaretAtIndex = pi),
      (exports.$getChildCaretOrSelf = Ra),
      (exports.$getCollapsedCaretRange = Wa),
      (exports.$getCommonAncestor = Va),
      (exports.$getCommonAncestorResultBranchOrder = ja),
      (exports.$getDOMSlot = Ec),
      (exports.$getDOMTextNode = bc),
      (exports.$getDocument = ic),
      (exports.$getEditor = vc),
      (exports.$getEditorDOMRenderConfig = kc),
      (exports.$getNearestNodeFromDOMNode = al),
      (exports.$getNearestRootOrShadowRoot = Hl),
      (exports.$getNodeByKey = sl),
      (exports.$getNodeByKeyOrThrow = ql),
      (exports.$getNodeFromDOMNode = il),
      (exports.$getPreviousSelection = Gr),
      (exports.$getRoot = dl),
      (exports.$getSelection = jr),
      (exports.$getSelectionSlotFrame = function (t) {
        var _t$getNodes$;
        if (null === t) return null;
        var e = xr(t)
          ? t.anchor.getNode()
          : (_t$getNodes$ = t.getNodes()[0]) != null
            ? _t$getNodes$
            : null;
        return null === e ? null : ea(e);
      }),
      (exports.$getSiblingCaret = Da),
      (exports.$getSlot = ra),
      (exports.$getSlotFrame = ea),
      (exports.$getSlotHost = Zc),
      (exports.$getSlotNameWithinHost = ta),
      (exports.$getSlotNames = oa),
      (exports.$getState = gt),
      (exports.$getStateChange = function (t, e, n) {
        var o = gt(t, n, ft),
          r = gt(e, n, ft);
        return n.isEqual(o, r) ? null : [o, r];
      }),
      (exports.$getTextContent = function () {
        var t = jr();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = Ia),
      (exports.$getTextPointCaret = wa),
      (exports.$getTextPointCaretSlice = Pa),
      (exports.$getWritableNodeState = yt),
      (exports.$hasAncestor = $l),
      (exports.$hasUpdateTag = function (t) {
        return Ts()._updateTags.has(t);
      }),
      (exports.$insertNodeToNearestRootAtCaret = Ci),
      (exports.$insertNodes = function (t) {
        var e = jr() || Gr();
        (null === e && (e = dl().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = zr),
      (exports.$isBlockFullySelected = Si),
      (exports.$isChildCaret = Oa),
      (exports.$isDecoratorNode = Us),
      (exports.$isEditorState = function (t) {
        return t instanceof _Vs;
      }),
      (exports.$isElementDOMSlot = Oc),
      (exports.$isElementNode = $s),
      (exports.$isExtendableTextPointCaret = gi),
      (exports.$isInlineElementOrDecoratorNode = Ul),
      (exports.$isInlineFormattable = Jo),
      (exports.$isLeafNode = function (t) {
        return sr(t) || ti(t) || Us(t);
      }),
      (exports.$isLexicalNode = Ao),
      (exports.$isLineBreakNode = ti),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _ya4;
      }),
      (exports.$isNodeSelection = Sr),
      (exports.$isParagraphNode = ki),
      (exports.$isRangeSelection = xr),
      (exports.$isRootNode = Ys),
      (exports.$isRootOrShadowRoot = jl),
      (exports.$isSelectionCapturedInDecoratorInput = zi),
      (exports.$isShadowRootNode = Yl),
      (exports.$isSiblingCaret = Ea),
      (exports.$isSlotChild = Xc),
      (exports.$isSlotHost = qc),
      (exports.$isTabNode = ar),
      (exports.$isTextNode = sr),
      (exports.$isTextPointCaret = ka),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _Ba;
      }),
      (exports.$isTokenOrSegmented = Ji),
      (exports.$isTokenOrTab = Gi),
      (exports.$markSlotEditable = Kc),
      (exports.$needsBlockCursorBeside = Xl),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = Ss();
        if (n._readOnly) {
          var _t281 = Dc(n).get(e);
          return _t281 ? Array.from(_t281.values()) : [];
        }
        var o = n._nodeMap,
          r = [];
        for (var _ref63 of o) {
          var _n129 = _ref63[1];
          _n129 instanceof t &&
            _n129.__type === e &&
            _n129.isAttached() &&
            r.push(_n129);
        }
        return r;
      }),
      (exports.$normalizeCaret = hi),
      (exports.$normalizeSelection__EXPERIMENTAL = bt),
      (exports.$onUpdate = Bl),
      (exports.$parseSerializedNode = function (t) {
        return Ms(t, Ts()._nodes);
      }),
      (exports.$removeFromParent = tl),
      (exports.$removeSlot = function (t, e) {
        var n = t.getWritable();
        if (null === n.__slots) return n;
        var o = n.__slots.get(e);
        return (void 0 !== o && (pa(o), la(n)["delete"](e)), n);
      }),
      (exports.$removeTextFromCaretRange = di),
      (exports.$rewindSiblingCaret = ai),
      (exports.$selectAll = function (t) {
        var e = dl();
        if (xr(t)) {
          var _e168 = t.anchor,
            _n130 = t.focus,
            _o94 = _e168.getNode();
          if (Ys(_o94))
            return (
              _e168.set(_o94.getKey(), 0, "element"),
              _n130.set(_o94.getKey(), _o94.getChildrenSize(), "element"),
              Ol(t, _o94),
              t
            );
          var _r63 = _o94.getTopLevelElementOrThrow(),
            _s48 = _r63.getParent();
          return null === _s48
            ? ($s(_r63) &&
                (_e168.set(_r63.getKey(), 0, "element"),
                _n130.set(_r63.getKey(), _r63.getChildrenSize(), "element"),
                Ol(t, _r63)),
              t)
            : (_e168.set(_s48.getKey(), 0, "element"),
              _n130.set(_s48.getKey(), _s48.getChildrenSize(), "element"),
              Ol(t, _s48),
              t);
        }
        {
          var _t282 = e.select(0, e.getChildrenSize());
          return (gl(Ol(_t282, e)), _t282);
        }
      }),
      (exports.$setCompositionKey = ol),
      (exports.$setDirectionFromDOM = Pc),
      (exports.$setFormatFromDOM = Fc),
      (exports.$setPointFromCaret = si),
      (exports.$setSelection = gl),
      (exports.$setSelectionFromCaretRange = ii),
      (exports.$setSlot = ga),
      (exports.$setState = function (t, e, n) {
        var o;
        if ((xs(), "function" == typeof n)) {
          var _r64 = t.getLatest(),
            _s49 = gt(_r64, e);
          if (((o = n(_s49)), e.isEqual(_s49, o))) return _r64;
        } else o = n;
        var r = t.getWritable();
        return (yt(r).updateFromKnown(e, o), r);
      }),
      (exports.$setTextFormat = function (t, e) {
        var n = [];
        for (var _ref65 of Object.entries(e)) {
          var _t283 = _ref65[0];
          var _o95 = _ref65[1];
          "boolean" == typeof _o95 && n.push([_t283, _o95]);
        }
        0 !== n.length &&
          Tr(t, function (t) {
            for (var _ref67 of n) {
              var _e169 = _ref67[0];
              var _o96 = _ref67[1];
              t = Qi(t, _e169, _o96 ? A[_e169] : 0);
            }
            return t;
          });
      }),
      (exports.$splitAtPointCaretNext = xi),
      (exports.$splitNode = function (e, n) {
        var o = e.getChildAtIndex(n);
        (null == o && (o = e), jl(e) && t(102));
        var _r67 = function r(e) {
            var n = e.getParentOrThrow(),
              s = jl(n),
              i = e !== o || s ? Gl(e) : e;
            if (s)
              return (($s(e) && $s(i)) || t(133), e.insertAfter(i), [e, i, i]);
            {
              var _r66 = _r67(n),
                _t284 = _r66[0],
                _o97 = _r66[1],
                _s50 = _r66[2],
                _l21 = e.getNextSiblings();
              return (
                _s50.append.apply(_s50, [i].concat(_l21)),
                [_t284, _o97, i]
              );
            }
          },
          _r65 = _r67(o),
          s = _r65[0],
          i = _r65[1];
        return [s, i];
      }),
      (exports.$updateDOMSelection = es),
      (exports.$updateRangeSelectionFromCaretRange = li),
      (exports.ArtificialNode__DO_NOT_USE = _qs),
      (exports.BEFORE_INPUT_COMMAND = Pe),
      (exports.BLUR_COMMAND = En),
      (exports.CAN_REDO_COMMAND = Nn),
      (exports.CAN_UNDO_COMMAND = vn),
      (exports.CAN_USE_BEFORE_INPUT = f),
      (exports.CAN_USE_DOM = o),
      (exports.CLEAR_EDITOR_COMMAND = Sn),
      (exports.CLEAR_HISTORY_COMMAND = Tn),
      (exports.CLICK_COMMAND = Ie),
      (exports.COLLABORATION_TAG = wo),
      (exports.COMMAND_PRIORITY_BEFORE_CRITICAL = -4),
      (exports.COMMAND_PRIORITY_BEFORE_EDITOR = -8),
      (exports.COMMAND_PRIORITY_BEFORE_HIGH = -5),
      (exports.COMMAND_PRIORITY_BEFORE_LOW = -7),
      (exports.COMMAND_PRIORITY_BEFORE_NORMAL = -6),
      (exports.COMMAND_PRIORITY_CRITICAL = 4),
      (exports.COMMAND_PRIORITY_EDITOR = Oi),
      (exports.COMMAND_PRIORITY_HIGH = 3),
      (exports.COMMAND_PRIORITY_LOW = 1),
      (exports.COMMAND_PRIORITY_NORMAL = 2),
      (exports.COMPOSITION_END_COMMAND = Le),
      (exports.COMPOSITION_END_TAG = Lo),
      (exports.COMPOSITION_START_COMMAND = Re),
      (exports.COMPOSITION_START_TAG = Ro),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = ze),
      (exports.CONTROL_OR_ALT = An),
      (exports.CONTROL_OR_META = Mn),
      (exports.CONTROL_OR_OTHER_KEY = L),
      (exports.COPY_COMMAND = yn),
      (exports.CUT_COMMAND = xn),
      (exports.CUT_TAG = "cut"),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = Ai),
      (exports.DELETE_CHARACTER_COMMAND = Ke),
      (exports.DELETE_LINE_COMMAND = Ye),
      (exports.DELETE_WORD_COMMAND = He),
      (exports.DRAGEND_COMMAND = mn),
      (exports.DRAGOVER_COMMAND = pn),
      (exports.DRAGSTART_COMMAND = _n),
      (exports.DROP_COMMAND = hn),
      (exports.DecoratorNode = _Ws),
      (exports.ElementNode = _Bs4),
      (exports.FOCUS_COMMAND = kn),
      (exports.FORMAT_ELEMENT_COMMAND = gn),
      (exports.FORMAT_TEXT_COMMAND = je),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = Do),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = fn),
      (exports.INPUT_COMMAND = Fe),
      (exports.INSERT_LINE_BREAK_COMMAND = Be),
      (exports.INSERT_PARAGRAPH_COMMAND = $e),
      (exports.INSERT_TAB_COMMAND = un),
      (exports.INTERNAL_$expandSelectionToWholeDocument = Or),
      (exports.INTERNAL_$isBlock = Nc),
      (exports.IS_ALL_FORMATTING = S),
      (exports.IS_ANDROID = g),
      (exports.IS_ANDROID_CHROME = m),
      (exports.IS_APPLE = c),
      (exports.IS_APPLE_WEBKIT = y),
      (exports.IS_BOLD = 1),
      (exports.IS_CHROME = p),
      (exports.IS_CODE = 16),
      (exports.IS_FIREFOX = a),
      (exports.IS_HIGHLIGHT = x),
      (exports.IS_IOS = h),
      (exports.IS_ITALIC = 2),
      (exports.IS_SAFARI = _),
      (exports.IS_STRIKETHROUGH = 4),
      (exports.IS_SUBSCRIPT = 32),
      (exports.IS_SUPERSCRIPT = 64),
      (exports.IS_UNDERLINE = 8),
      (exports.KEY_ARROW_DOWN_COMMAND = nn),
      (exports.KEY_ARROW_LEFT_COMMAND = Ze),
      (exports.KEY_ARROW_RIGHT_COMMAND = Xe),
      (exports.KEY_ARROW_UP_COMMAND = en),
      (exports.KEY_BACKSPACE_COMMAND = sn),
      (exports.KEY_DELETE_COMMAND = cn),
      (exports.KEY_DOWN_COMMAND = qe),
      (exports.KEY_ENTER_COMMAND = on),
      (exports.KEY_ESCAPE_COMMAND = ln),
      (exports.KEY_MODIFIER_COMMAND = On),
      (exports.KEY_SPACE_COMMAND = rn),
      (exports.KEY_TAB_COMMAND = an),
      (exports.LineBreakNode = _Xs),
      (exports.MOVE_TO_END = Qe),
      (exports.MOVE_TO_START = tn),
      (exports.NODE_STATE_DIRECT = ft),
      (exports.NODE_STATE_KEY = "$"),
      (exports.NODE_STATE_LATEST = dt),
      (exports.OUTDENT_CONTENT_COMMAND = dn),
      (exports.PASTE_COMMAND = We),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _Ti),
      (exports.REDO_COMMAND = Ve),
      (exports.REMOVE_TEXT_COMMAND = Ue),
      (exports.RootNode = _Hs),
      (exports.SELECTION_CHANGE_COMMAND = De),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = we),
      (exports.SELECT_ALL_COMMAND = Cn),
      (exports.SET_TEXT_FORMAT_COMMAND = Ge),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = Po),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = Io),
      (exports.SKIP_SELECTION_FOCUS_TAG = Fo),
      (exports.TEXT_TYPE_TO_FORMAT = A),
      (exports.TabNode = _lr),
      (exports.TextNode = _Vo2),
      (exports.UNDO_COMMAND = Je),
      (exports.addClassNamesToElement = function (t) {
        var _t$classList2;
        for (
          var _len16 = arguments.length,
            e = new Array(_len16 > 1 ? _len16 - 1 : 0),
            _key16 = 1;
          _key16 < _len16;
          _key16++
        ) {
          e[_key16 - 1] = arguments[_key16];
        }
        var n = qa.apply(void 0, e);
        n.length > 0 &&
          (_t$classList2 = t.classList).add.apply(_t$classList2, n);
      }),
      (exports.buildImportMap = function (t) {
        return t;
      }),
      (exports.compileKeyboardShortcuts = Pn),
      (exports.configExtension = function () {
        for (
          var _len17 = arguments.length, t = new Array(_len17), _key17 = 0;
          _key17 < _len17;
          _key17++
        ) {
          t[_key17] = arguments[_key17];
        }
        return t;
      }),
      (exports.createCommand = Ae),
      (exports.createEditor = function (e) {
        var n = e || {},
          o = ks(),
          r = n.theme || {},
          s = void 0 === e ? o : n.parentEditor || null,
          i = n.disableEvents || !1,
          l = Gs(),
          c = n.namespace || (null !== s ? s._config.namespace : xl()),
          a = n.editorState,
          u = [_Hs, _Vo2, _Xs, _lr, _Ti, _qs].concat(n.nodes || []),
          f = n.onError,
          d = n.onWarn,
          h = n.html,
          g = void 0 === n.editable || n.editable;
        var _;
        if (void 0 === e && null !== o) _ = o._nodes;
        else {
          _ = new Map();
          for (var _e170 = 0; _e170 < u.length; _e170++) {
            var _o98 = u[_e170],
              _r68 = null,
              _s51 = null;
            if (_o98 && "object" == typeof _o98) {
              var _t285 = _o98;
              ((_o98 = _t285.replace),
                (_r68 = _t285["with"]),
                (_s51 = _t285.withKlass || null));
            }
            if (
              "function" != typeof _o98 ||
              !_o98.prototype ||
              !(_o98 === _Mo5 || _o98.prototype instanceof _Mo5)
            ) {
              var _r69 = "<unknown>";
              try {
                _r69 = JSON.parse(V);
              } catch (t) {}
              t(
                365,
                String(_e170 - u.length + (n.nodes ? n.nodes.length : 0)),
                "function" == typeof _o98
                  ? "" +
                      _o98.name +
                      ("function" == typeof _o98.getType
                        ? " (type " + String(_o98.getType()) + ")"
                        : "")
                  : String(_o98),
                String(_r69),
              );
            }
            Uc(_o98);
            var _i27 = _o98.getType(),
              _l22 = Mi(_o98);
            _.set(_i27, {
              exportDOM: h && h["export"] ? h["export"].get(_o98) : void 0,
              klass: _o98,
              replace: _r68,
              replaceWithKlass: _s51,
              sharedNodeState: _t(u[_e170]),
              transforms: _l22,
            });
          }
        }
        var p = new _Ii(
          l,
          s,
          _,
          {
            disableEvents: i,
            dom: babelHelpers["extends"]({}, Ai, e && e.dom),
            namespace: c,
            theme: r,
          },
          f || console.error,
          d || Ei,
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
            (t.registerCommand(Pe, eo, Oi),
              t.registerCommand(Fe, oo, Oi),
              t.registerCommand(Re, so, Oi),
              t.registerCommand(Le, io, Oi),
              t.registerCommand(qe, mo, Oi));
          })(p),
          p
        );
      }),
      (exports.createRefCountedRegistry = Fn),
      (exports.createSharedNodeState = _t),
      (exports.createState = function (t, e) {
        return new ht(t, e);
      }),
      (exports.declarePeerDependency = function () {
        for (
          var _len18 = arguments.length, t = new Array(_len18), _key18 = 0;
          _key18 < _len18;
          _key18++
        ) {
          t[_key18] = arguments[_key18];
        }
        return t;
      }),
      (exports.defineExtension = function (t) {
        return t;
      }),
      (exports.findAllLexicalElementsDeep = rc),
      (exports.flipDirection = Sa),
      (exports.getActiveElement = hc),
      (exports.getActiveElementDeep = gc),
      (exports.getComposedEventTarget = _c),
      (exports.getComposedStaticRange = lc),
      (exports.getDOMOwnerDocument = Ll),
      (exports.getDOMSelection = Zl),
      (exports.getDOMSelectionFromTarget = tc),
      (exports.getDOMSelectionPoints = ac),
      (exports.getDOMSelectionRange = cc),
      (exports.getDOMSelectionRangeAndPoints = function (t, e) {
        var _uc;
        var n = lc(t, e);
        if (null === n)
          return {
            points: t,
            range: t.rangeCount > 0 ? t.getRangeAt(0) : null,
          };
        var o =
          (_uc = uc(n)) != null
            ? _uc
            : t.rangeCount > 0
              ? t.getRangeAt(0)
              : null;
        return { points: fc(n, dc(t)), range: o };
      }),
      (exports.getDOMShadowRoots = oc),
      (exports.getDOMTextNode = Xi),
      (exports.getDeclaredSlots = ua),
      (exports.getEditorPropertyFromDOMNode = ji),
      (exports.getNearestEditorFromDOMNode = Yi),
      (exports.getParentElement = Rl),
      (exports.getRegisteredNode = Bi),
      (exports.getRegisteredNodeOrThrow = Ki),
      (exports.getRegisteredSubtypeMap = function (t) {
        var e = new Map(),
          n = new Map();
        for (var _o99 of t) {
          var _Uc2 = Uc(_o99),
            _t286 = _Uc2.ownNodeType;
          _t286 && (n.set(_t286, _o99), e.set(_t286, new Set()));
        }
        for (var _ref69 of n) {
          var _t287 = _ref69[0];
          var _o100 = _ref69[1];
          for (var _ref71 of Hc(_o100)) {
            var _n131 = _ref71.ownNodeType;
            {
              var _o101 = _n131 && e.get(_n131);
              _o101 && _o101.add(_t287);
            }
          }
        }
        return e;
      }),
      (exports.getRootOwnerDocument = sc),
      (exports.getStaticNodeConfig = Uc),
      (exports.getStyleObjectFromCSS = Bo),
      (exports.getTextDirection = function (t) {
        return b.test(t) ? "rtl" : M.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = Mi),
      (exports.isBlockDomNode = Tc),
      (exports.isCurrentlyReadOnlyMode = ys),
      (exports.isDOMCapturingSelection = Bc),
      (exports.isDOMDocumentNode = qi),
      (exports.isDOMNode = mc),
      (exports.isDOMShadowRoot = ec),
      (exports.isDOMTextNode = Vi),
      (exports.isDOMUnmanaged = Lc),
      (exports.isDocumentFragment = yc),
      (exports.isExactShortcutMatch = function (t, e, n) {
        if (!kl(t, n)) return !1;
        if (t.key.toLowerCase() === e.toLowerCase()) return !0;
        if (e.length > 1) return !1;
        if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
        if (t.code.startsWith("Digit") && /^\d$/.test(e))
          return t.code === "Digit" + e;
        var o = "Key" + e.toUpperCase();
        return t.code === o;
      }),
      (exports.isHTMLAnchorElement = function (t) {
        return pc(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = pc),
      (exports.isHTMLTableCellElement = function (t) {
        return pc(t) && ("TD" === t.tagName || "TH" === t.tagName);
      }),
      (exports.isHTMLTableRowElement = function (t) {
        return pc(t) && "TR" === t.tagName;
      }),
      (exports.isInlineDomNode = Cc),
      (exports.isLastChildInBlockNode = ni),
      (exports.isLexicalEditor = Hi),
      (exports.isModifierMatch = kl),
      (exports.isOnlyChildInBlockNode = ei),
      (exports.isSelectionCapturedInDecoratorInput = Wi),
      (exports.isSelectionWithinEditor = Ui),
      (exports.iterStaticNodeConfigChain = Hc),
      (exports.keyboardEventMaskForPlatform = function (t, e) {
        var _babelHelpers$extends2;
        var n = t[L];
        return n && e !== c
          ? babelHelpers["extends"](
              {},
              t,
              ((_babelHelpers$extends2 = { ctrlKey: t[n] }),
              (_babelHelpers$extends2[n] = t.ctrlKey),
              _babelHelpers$extends2),
            )
          : t;
      }),
      (exports.makeStepwiseIterator = Ha),
      (exports.mergeRegister = Xa),
      (exports.mountSlotContainer = function (t, e, n, o) {
        var r = t.read("latest", function () {
          var o = sl(e);
          return null !== o
            ? (function (t, e, n) {
                if (n === void 0) {
                  n = vc();
                }
                var o = ra(t, e);
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
      (exports.normalizeClassNames = qa),
      (exports.registerEventListener = Rn),
      (exports.registerEventListeners = function (t, e, n) {
        return Xa.apply(
          void 0,
          Object.entries(e).map(function (_ref72) {
            var e = _ref72[0],
              o = _ref72[1];
            return Rn(t, e, o, n);
          }),
        );
      }),
      (exports.removeClassNamesFromElement = function (t) {
        var _t$classList3;
        for (
          var _len19 = arguments.length,
            e = new Array(_len19 > 1 ? _len19 - 1 : 0),
            _key19 = 1;
          _key19 < _len19;
          _key19++
        ) {
          e[_key19 - 1] = arguments[_key19];
        }
        var n = qa.apply(void 0, e);
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(_t$classList3, n);
      }),
      (exports.removeFromParent = el),
      (exports.resetRandomKey = function () {
        Li = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = zo),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n132 in e) {
          var _o102 = e[_n132];
          null == _o102 ? t.removeProperty(_n132) : $o(t, _n132, _o102);
        }
      }),
      (exports.setDOMUnmanaged = Rc),
      (exports.setNodeIndentFromDOM = Ic),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n133 in e)
          if (t[_n133] !== e[_n133]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.stopLexicalPropagation = So),
      (exports.toggleTextFormatType = Qi),
      (exports.tokenizeRawText = ns),
      (exports.unmountSlotContainer = function (t, e, n) {
        n.style.display = "none";
        var o = t.getElementByKey(e);
        null !== o && n.parentElement !== o && o.insertBefore(n, o.firstChild);
      }));
  },
  null,
);
