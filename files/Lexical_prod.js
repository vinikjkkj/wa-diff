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
    var i = r();
    function s(t) {
      return o && t.test(navigator.platform);
    }
    function l(t) {
      return o && t.test(navigator.userAgent);
    }
    var c = s(/Mac|iPod|iPhone|iPad/),
      a = l(/^(?!.*Seamonkey)(?=.*Firefox).*/i);
    function u() {
      return (
        !(!o || !("InputEvent" in window) || i) &&
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
      y = l(/AppleWebKit\/[\d.]+/) && c && !p;
    function x() {
      return 2047;
    }
    var C = x(),
      S = _ || h || y ? "\xa0" : "\u200b",
      T = "\n\n",
      v = a ? "\xa0" : S,
      N = "\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc",
      b =
        "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
    function k(t, e) {
      return new RegExp("^[^" + t + "]*[" + e + "]");
    }
    var O = k(b, N),
      E = k(N, b),
      M = {
        bold: 1,
        capitalize: 1024,
        code: 16,
        highlight: 128,
        italic: 2,
        lowercase: 256,
        strikethrough: 4,
        subscript: 32,
        superscript: 64,
        underline: 8,
        uppercase: 512,
      },
      A = { directionless: 1, unmergeable: 2 },
      w = { center: 2, end: 6, justify: 4, left: 1, right: 3, start: 5 };
    function D(t) {
      var e = {};
      for (var _n2 of Object.keys(t)) e[t[_n2]] = _n2;
      return e;
    }
    var F = D(w),
      I = { normal: 0, segmented: 2, token: 1 },
      P = D(I),
      R = "$",
      L = Symbol["for"]("@lexical/ctrlOrOtherKey"),
      B = "$config";
    function K() {
      return Ca()._blockCursorElement;
    }
    function z(t) {
      return (
        null !== t && 1 === t.nodeType && t.hasAttribute("data-lexical-slot")
      );
    }
    var $ = y || h || _;
    function W() {
      var t = na().createElement("img");
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
    var _j2 = (function () {
      function j(t, e, n) {
        ((this.element = t),
          (this.before = e || null),
          (this.after = n || null));
      }
      var _proto = j.prototype;
      _proto.withBefore = function withBefore(t) {
        return new j(this.element, t, this.after);
      };
      _proto.withAfter = function withAfter(t) {
        return new j(this.element, this.before, t);
      };
      _proto.withElement = function withElement(t) {
        return this.element === t ? this : new j(t, this.before, this.after);
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
        var o = H(t, this.element);
        if (null === o) return "after";
        var r = Array.prototype.indexOf.call(t.childNodes, o);
        if (r < 0) return "after";
        if (e === t) return n <= r ? "before" : "after";
        var i = H(t, e);
        if (null === i) return "after";
        var s = Array.prototype.indexOf.call(t.childNodes, i);
        return s >= 0 && s <= r ? "before" : "after";
      };
      _proto.getInsertionAnchor = function getInsertionAnchor() {
        return this.before;
      };
      return j;
    })();
    function H(t, e) {
      var n = e;
      for (; null !== n && n.parentNode !== t; ) n = n.parentNode;
      return n;
    }
    var _V = (function (_j) {
      function V() {
        return _j.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(V, _j);
      var _proto2 = V.prototype;
      _proto2.withBefore = function withBefore(t) {
        return new V(this.element, t, this.after);
      };
      _proto2.withAfter = function withAfter(t) {
        return new V(this.element, this.before, t);
      };
      _proto2.withElement = function withElement(t) {
        return this.element === t ? this : new V(t, this.before, this.after);
      };
      _proto2.getInsertionAnchor = function getInsertionAnchor() {
        return (
          _j.prototype.getInsertionAnchor.call(this) ||
          this.getManagedLineBreak() ||
          this.getDecoratorBoundaryAnchor("trailing")
        );
      };
      _proto2.getFirstChildAnchor = function getFirstChildAnchor() {
        var t = _j.prototype.getFirstChildAnchor.call(this),
          e = t ? t.nextSibling : this.element.firstChild;
        for (; z(e); ) ((t = e), (e = e.nextSibling));
        U(e) && ((t = e), (e = e.nextSibling));
        var n = t ? t.nextSibling : this.element.firstChild;
        return null !== n && n === K() ? n : t;
      };
      _proto2.getDecoratorBoundaryAnchor = function getDecoratorBoundaryAnchor(
        t,
      ) {
        var e;
        if ("leading" === t) {
          var _t4 = _j.prototype.getFirstChildAnchor.call(this);
          for (e = _t4 ? _t4.nextSibling : this.element.firstChild; z(e); )
            e = e.nextSibling;
        } else
          ((e = this.before
            ? this.before.previousSibling
            : this.element.lastChild),
            null !== e && e === K() && (e = e.previousSibling));
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
          o = "empty" === t && z(n) ? null : t;
        if (e.__lexicalLastChildKind !== o)
          if (((e.__lexicalLastChildKind = o), null === o))
            this.removeManagedLineBreak();
          else {
            var _t6 = "decorator" === o && $;
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
          r = na().createElement("br");
        if (
          (r.setAttribute("data-lexical-managed-linebreak", "true"),
          n.insertBefore(r, o),
          t)
        ) {
          var _t7 = na().createElement("img");
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
            _n5 = K(),
            _r2 = this.element.childNodes,
            _i2 = Math.min(o, _r2.length);
          var _s2 = 0;
          for (var _t8 = _e4; _t8 < _i2; _t8++) _r2[_t8] !== _n5 && _s2++;
          return [t, Math.min(_s2, t.getChildrenSize())];
        }
        var r = J(e, n);
        r.push(o);
        var i = J(e, this.element);
        var s = t.getIndexWithinParent();
        for (var _t9 = 0; _t9 < i.length; _t9++) {
          var _e5 = r[_t9],
            _n6 = i[_t9];
          if (void 0 === _e5 || _e5 < _n6) break;
          if (_e5 > _n6) {
            s += 1;
            break;
          }
        }
        return [t.getParentOrThrow(), s];
      };
      return V;
    })(_j2);
    function J(e, n) {
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
    function Y() {
      var t;
      try {
        t = "0.51.0+prod.cjs";
      } catch (_unused) {}
      return t != null ? t : '"<unknown>+source"';
    }
    var G = Y();
    var _q = (function () {
      function q() {
        this._front = (function () {
          return new Set();
        })();
        this._back = (function () {
          return new Set();
        })();
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
    var tt = !1;
    function et(e, n) {
      var r = tt;
      var i;
      try {
        ((tt = e), (i = n()));
      } finally {
        tt = r;
      }
      var s;
      return (
        null === (s = i) ||
          ("object" != typeof s && "function" != typeof s) ||
          "function" != typeof s.then ||
          t(421),
        i
      );
    }
    function nt() {
      return tt;
    }
    function ot(e) {
      var n = e.exportJSON(tt),
        o = e.constructor;
      return (
        n.type !== o.getType() && t(130, o.name),
        Ls(e) && !Array.isArray(n.children) && t(59, o.name),
        n
      );
    }
    function rt(t, e, n, o, r, i) {
      if (Ls(t)) {
        var _s3 = t.getFirstChild();
        for (; null !== _s3; ) {
          var _t12 = _s3.__key;
          (_s3.__parent === e &&
            ((Ls(_s3) || (hu(_s3) && null !== _s3.__slots)) &&
              rt(_s3, _t12, n, o, r, i),
            n.has(_t12) || i["delete"](_t12),
            r.push(_t12)),
            (_s3 = _s3.getNextSibling()));
        }
      }
      for (var _s4 of hu(t) && null !== t.__slots ? t.__slots.values() : []) {
        var _t13 = o.get(_s4);
        void 0 !== _t13 &&
          gu(_t13) &&
          _t13.__slotHost === e &&
          ((Ls(_t13) || (hu(_t13) && null !== _t13.__slots)) &&
            rt(_t13, _s4, n, o, r, i),
          n.has(_s4) || i["delete"](_s4),
          r.push(_s4));
      }
    }
    var it = !1,
      st = 0;
    function lt(t) {
      st = t.timeStamp;
    }
    function ct(t, e, n) {
      var o = "BR" === t.nodeName,
        r = e.__lexicalLineBreak;
      return (
        (r && (t === r || (o && t.previousSibling === r))) ||
        (o && void 0 !== rc(t, n))
      );
    }
    function at(t, e, n) {
      var o = Gc(Bc(n)),
        r = o && ia(o, n._rootElement);
      var i = null,
        s = null;
      null !== r &&
        r.anchorNode === t &&
        ((i = r.anchorOffset), (s = r.focusOffset));
      var l = t.nodeValue;
      null !== l && yc(e, l, i, s, !1);
    }
    function ut(t, e, n) {
      if (fi(t)) {
        var _e1 = t.anchor.getNode();
        if (_e1.is(n) && t.format !== _e1.getFormat()) return !1;
      }
      return Hl(e) && n.isAttached();
    }
    function ft(t, e, n) {
      for (var _o4 = t; _o4 && !Fa(_o4); _o4 = Dc(_o4)) {
        var _t14 = rc(_o4, e);
        if (void 0 !== _t14) {
          var _e10 = ec(_t14, n);
          if (_e10) return zs(_e10) || !da(_o4) ? void 0 : [_o4, _e10];
        }
      }
    }
    function dt(t, e, n) {
      it = !0;
      var o = performance.now() - st > 100;
      try {
        Ms(t, function () {
          var r =
              Bi() ||
              (function (t) {
                return t.read("latest", function () {
                  var t = Bi();
                  return null !== t ? t.clone() : null;
                });
              })(t),
            i = new Map(),
            s = t._editorState,
            l = t._blockCursorElement;
          var c = !1,
            u = "";
          for (var _n1 = 0; _n1 < e.length; _n1++) {
            var _f = e[_n1],
              _d = _f.type,
              _h = _f.target,
              _g = ft(_h, t, s);
            if (!_g) continue;
            var _2 = _g[0],
              _p = _g[1];
            if ("characterData" === _d)
              o && Xr(_p) && Hl(_h) && ut(r, _h, _p) && at(_h, _p, t);
            else if ("childList" === _d) {
              c = !0;
              var _e11 = _f.addedNodes;
              for (var _n10 = 0; _n10 < _e11.length; _n10++) {
                var _o5 = _e11[_n10],
                  _r3 = nc(_o5),
                  _i3 = _o5.parentNode;
                if (
                  !(
                    null == _i3 ||
                    _o5 === l ||
                    null !== _r3 ||
                    ct(_o5, _i3, t) ||
                    U(_o5) ||
                    (t._slotsUsed &&
                      da(_o5) &&
                      _o5.hasAttribute("data-lexical-slot")) ||
                    Fa(_o5)
                  )
                ) {
                  if (a) {
                    var _t15 =
                      (da(_o5) ? _o5.innerText : null) || _o5.nodeValue;
                    _t15 && (u += _t15);
                  }
                  _i3.removeChild(_o5);
                }
              }
              var _n11 = _f.removedNodes,
                _o6 = _n11.length;
              if (_o6 > 0) {
                var _e12 = 0;
                for (var _r4 = 0; _r4 < _o6; _r4++) {
                  var _o7 = _n11[_r4];
                  ct(_o7, _h, t) || l === _o7
                    ? (_h.appendChild(_o7), _e12++)
                    : U(_o7) && _e12++;
                }
                _o6 !== _e12 && i.set(_2, _p);
              }
            }
          }
          if (i.size > 0)
            for (var _ref8 of i) {
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
                  _i4 = _n14.parentNode;
                null == _i4 ||
                  "BR" !== _n14.nodeName ||
                  ct(_n14, _r5, t) ||
                  _i4.removeChild(_n14);
              }
            }
            n.takeRecords();
          }
          null !== r && (c && uc(r), a && Mc(t) && r.insertRawText(u));
        });
      } finally {
        it = !1;
      }
    }
    function ht(t) {
      var e = t._observer;
      null !== e && dt(t, e.takeRecords(), e);
    }
    function gt(t) {
      (!(function (t) {
        0 === st && Bc(t).addEventListener("textInput", lt, !0);
      })(t),
        (t._observer = new MutationObserver(function (e, n) {
          dt(t, e, n);
        })));
    }
    function _t(t, e, n) {
      var o = t.isEqual;
      return e === n || (void 0 !== o && o(e, n));
    }
    function pt(t, e) {
      return _t(t, e, t.defaultValue);
    }
    function mt(t) {
      return "object" == typeof t && null !== t;
    }
    function yt(e, n) {
      var o = vt(e, n).getter;
      return (
        (mt(o) && void 0 !== o.getterTable) || t(405, n),
        Tt(o.getterTable)
      );
    }
    function xt(e, n) {
      var o = vt(e, n).setter;
      return (
        (mt(o) && void 0 !== o.setterTable) || t(406, n),
        Tt(o.setterTable)
      );
    }
    function Ct(e, n, o) {
      var _vt = vt(e, n),
        r = _vt.meta;
      for (var _e16 = 0; ; )
        if ("aliased" === r.kind) {
          if (_e16 === o) return Tt(r.aliases);
          (_e16++, (r = r.inner.meta));
        } else
          "nullable" === r.kind || "optional" === r.kind
            ? (r = r.inner.meta)
            : "array" === r.kind
              ? (r = r.item.meta)
              : t(407, n, String(o));
    }
    function St(e, n) {
      var o = vt(e, n),
        r = o.setter;
      (mt(r) && void 0 !== r.setterTable) || t(408, n);
      var i = String(o.defaultValue);
      return (Lt(r.setterTable, i) || t(409, n, i), r.setterTable[i]);
    }
    function Tt(t) {
      return Object.assign(Object.create(null), t);
    }
    function vt(e, n) {
      var o = e.get(n);
      return (void 0 === o && t(410, n), o);
    }
    function Nt(t, e, n, o, r) {
      void 0 !== r && bt.add(r);
      var i = void 0 === n,
        s = i ? t(void 0) : n;
      return (
        i && Mt(s),
        Object.assign(t, { accepts: r, defaultValue: s, isEqual: o, meta: e })
      );
    }
    var bt = new WeakSet();
    function kt(t) {
      var e = t.accepts;
      return void 0 === e || bt.has(e) ? void 0 : e;
    }
    var Ot = new WeakSet();
    function Et(t) {
      return (null !== t && "object" == typeof t && Ot.add(t), t);
    }
    function Mt(t) {
      if (
        null !== t &&
        "object" == typeof t &&
        !Object.isFrozen(t) &&
        !Ot.has(t)
      ) {
        Object.freeze(t);
        for (var _e17 of Object.values(t)) Mt(_e17);
      }
    }
    function At(t) {
      var e = t.isEqual;
      return void 0 === e
        ? void 0
        : function (t, n) {
            return null == t || null == n ? t === n : e(t, n);
          };
    }
    function wt(t, e) {
      return function (n) {
        return e(n) || Dt(t, n);
      };
    }
    function Dt(t, e) {
      var n = t.accepts;
      return void 0 !== n
        ? n.call(t, e)
        : void 0 !==
            (function (t, e) {
              var n = t.accepts;
              if (void 0 !== n) return Dt(t, e) ? { parsed: t(e) } : void 0;
              var o = t(e);
              return pt(t, o) && e !== t.defaultValue ? void 0 : { parsed: o };
            })(t, e);
    }
    var Ft = new WeakMap();
    function It(t) {
      var e = Ft.get(t);
      if (void 0 !== e) return e;
      var n = (function (t) {
        var e = t.meta;
        if (null == e) return !1;
        if (void 0 !== kt(t)) return !1;
        switch (e.kind) {
          case "raw":
            return !0;
          case "union":
            return (
              null != e.members &&
              e.members.length > 0 &&
              e.members.every(function (t) {
                return It(t);
              })
            );
          case "nullable":
          case "optional":
          case "transform":
          case "aliased":
            return null != e.inner && It(e.inner);
          default:
            return !1;
        }
      })(t);
      return (Ft.set(t, n), n);
    }
    function Pt(t, e) {
      var n = t.meta;
      if (null == n) return Dt(t, e) ? 1 : 4;
      var o = kt(t),
        r = void 0 !== o;
      if (r && !o.call(t, e)) return 4;
      var i = (function (t, e, n, o) {
        switch (e.kind) {
          case "raw":
            return o ? 1 : 2;
          case "array": {
            if (!Array.isArray(n)) return 4;
            if (null == e.item) return 1;
            var _t16 = 1;
            for (var _o9 = 0; _o9 < n.length; _o9++)
              if (void 0 !== n[_o9]) {
                var _r6 = Pt(e.item, n[_o9]);
                _r6 > _t16 && (_t16 = _r6);
              }
            return _t16 >= 3 ? 3 : _t16;
          }
          case "object": {
            var _t17 = e.fields;
            if (!Bt(n)) return 4;
            if (null == _t17) return 1;
            if (!o && Kt(n, _t17)) return 4;
            var _r7 = 1;
            for (var _e18 of Object.keys(n))
              if (Lt(_t17, _e18)) {
                var _o0 = Pt(_t17[_e18], n[_e18]);
                _o0 > _r7 && (_r7 = _o0);
              }
            return _r7 >= 3 ? 3 : _r7;
          }
          case "union":
            return null == e.members ? 1 : Rt(e.members, n).fit;
          case "aliased":
          case "nullable":
          case "optional":
          case "transform":
            return ("aliased" === e.kind
              ? "string" == typeof n && null != e.aliases && Lt(e.aliases, n)
              : "nullable" === e.kind
                ? null == n
                : "optional" === e.kind && void 0 === n) || null == e.inner
              ? 1
              : Pt(e.inner, n);
          default:
            return o || Dt(t, n) ? 1 : 4;
        }
      })(t, n, e, r);
      return r && 4 === i ? 3 : i;
    }
    function Rt(t, e) {
      var n,
        o = 4,
        r = 4;
      for (var _i5 = 0; _i5 < t.length; _i5++) {
        var _s5 = t[_i5],
          _l2 = Pt(_s5, e),
          _c2 = _l2 < 3 && It(_s5) ? 3 : _l2;
        if (_c2 < o && ((n = _s5), (o = _c2), (r = _l2), 1 === _c2)) break;
      }
      return { fit: r, member: n };
    }
    function Lt(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }
    function Bt(t) {
      if (
        !(function (t) {
          return (
            (function (t) {
              return "object" == typeof t && null !== t;
            })(t) && !Array.isArray(t)
          );
        })(t)
      )
        return !1;
      var e = Object.getPrototypeOf(t);
      return e === Object.prototype || null === e;
    }
    function Kt(t, e) {
      for (var _n15 of Object.keys(t)) if (!Lt(e, _n15)) return !0;
      return !1;
    }
    function zt(t) {
      if (t === void 0) {
        t = "";
      }
      return Nt(
        function (e) {
          return "string" == typeof e ? e : t;
        },
        { kind: "string" },
        void 0,
        void 0,
        function (t) {
          return "string" == typeof t;
        },
      );
    }
    var $t = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
    function Wt(t, e) {
      if (t === void 0) {
        t = 0;
      }
      if (e === void 0) {
        e = {};
      }
      var _e19 = e,
        n = _e19.integer,
        o = _e19.clamp,
        r = n && void 0 !== e.min ? Math.ceil(e.min) : e.min,
        i = n && void 0 !== e.max ? Math.floor(e.max) : e.max,
        s = function s(t) {
          return "string" == typeof t && $t.test(t) ? Number(t) : t;
        },
        l = function l(t) {
          return (
            "number" == typeof t &&
            Number.isFinite(t) &&
            (!n || Number.isInteger(t))
          );
        },
        c = function c(t) {
          return l(t) && (void 0 === r || t >= r) && (void 0 === i || t <= i);
        };
      return Nt(
        function (e) {
          var n = s(e);
          return o && l(n)
            ? void 0 !== r && n < r
              ? r
              : void 0 !== i && n > i
                ? i
                : n
            : c(n)
              ? n
              : t;
        },
        { clamp: o, integer: n, kind: "number", max: i, min: r },
        void 0,
        void 0,
        function (t) {
          return o ? l(s(t)) : c(s(t));
        },
      );
    }
    function Ut(t) {
      var n = Et(
          0 !== (arguments.length <= 1 ? 0 : arguments.length - 1)
            ? arguments.length <= 1
              ? undefined
              : arguments[1]
            : t[0],
        ),
        o = new Set(t);
      return Nt(
        function (t) {
          return void 0 !== t && o.has(t) ? t : n;
        },
        { kind: "enum", values: t },
        n,
        void 0,
        function (t) {
          return o.has(t) && (void 0 !== t || void 0 === n);
        },
      );
    }
    function jt(t, e) {
      if (t === e) return !0;
      if (Array.isArray(t) || Array.isArray(e)) {
        if (!Array.isArray(t) || !Array.isArray(e) || t.length !== e.length)
          return !1;
        for (var _n16 = 0; _n16 < t.length; _n16++)
          if (!jt(t[_n16], e[_n16])) return !1;
        return !0;
      }
      if (!Bt(t) || !Bt(e)) return !1;
      var n = Object.keys(t);
      return (
        n.length === Object.keys(e).length &&
        n.every(function (n) {
          return Lt(e, n) && jt(t[n], e[n]);
        })
      );
    }
    function Ht() {
      return function (t) {
        return (function (t) {
          return { meta: { fields: t, kind: "node" } };
        })(t);
      };
    }
    function Vt(t, e) {
      var n = function n(t) {
        return "string" == typeof t && Lt(e, t);
      };
      return Nt(
        function (o) {
          return n(o) ? e[o] : t(o);
        },
        { aliases: e, inner: t, kind: "aliased" },
        t.defaultValue,
        t.isEqual,
        function (e) {
          return n(e) || Dt(t, e);
        },
      );
    }
    function Jt(t, e) {
      return Gt(0, t, {
        getter: {
          field: e.field,
          getterTable: e.getterTable,
          method: e.getter,
          when: e.when,
        },
        setter: {
          field: e.field,
          method: e.setter,
          setterTable: e.setterTable,
        },
      });
    }
    function Yt(t, e) {
      return Gt(0, t, e);
    }
    function Gt(t, e, n) {
      return Object.assign(
        function (t) {
          return e(t);
        },
        {
          accepts: e.accepts,
          defaultValue: e.defaultValue,
          getter: n.getter,
          isEqual: e.isEqual,
          meta: e.meta,
          setter: n.setter,
        },
      );
    }
    var qt = "direct",
      Xt = "latest";
    var Qt = function Qt(t, e) {
      this.key = t;
      var n =
        "meta" in (o = e.parse) &&
        "object" == typeof o.meta &&
        null !== o.meta &&
        "kind" in o.meta &&
        "string" == typeof o.meta.kind &&
        "defaultValue" in o
          ? e.parse
          : void 0;
      var o;
      ((this.schema = n),
        (this.parse = e.parse.bind(e)),
        (this.unparse = (e.unparse || le).bind(e)),
        (this.isEqual = e.isEqual
          ? e.isEqual.bind(e)
          : void 0 !== n && void 0 !== n.isEqual
            ? function (t, e) {
                return _t(n, t, e);
              }
            : Object.is),
        (this.defaultValue =
          void 0 !== n ? n.defaultValue : this.parse(void 0)),
        (this.resetOnCopyNode = e.resetOnCopyNode || !1));
    };
    function Zt(t, e, n) {
      if (n === void 0) {
        n = Xt;
      }
      var o = (n === Xt ? t.getLatest() : t).__state;
      return o ? o.getValue(e) : e.defaultValue;
    }
    function te(t, e, n) {
      var o;
      if ((fs(), "function" == typeof n)) {
        var _r8 = t.getLatest(),
          _i6 = Zt(_r8, e);
        if (((o = n(_i6)), e.isEqual(_i6, o))) return _r8;
      } else o = n;
      var r = t.getWritable();
      return (re(r).updateFromKnown(e, o), r);
    }
    function ee(t) {
      var e = new Map(),
        n = new Set();
      for (var _ref0 of lu("function" == typeof t ? t : t.replace)) {
        var _o1 = _ref0.ownNodeConfig;
        if (_o1 && _o1.stateConfigs)
          for (var _t18 of _o1.stateConfigs) {
            var _o10 = void 0;
            ("stateConfig" in _t18
              ? ((_o10 = _t18.stateConfig), _t18.flat && n.add(_o10.key))
              : (_o10 = _t18),
              e.set(_o10.key, _o10));
          }
      }
      return { flatKeys: n, sharedConfigMap: e };
    }
    var ne = new Set(["__proto__", "constructor", "prototype"]);
    var _oe = (function () {
      function oe(t, e, n, o, r) {
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
        var i = this.sharedNodeState.sharedConfigMap,
          s =
            void 0 !== r
              ? r
              : (function (t, e, n) {
                  var o = n.size;
                  if (e)
                    for (var _r9 in e) {
                      var _e20 = t.get(_r9);
                      (_e20 && n.has(_e20)) || o++;
                    }
                  return o;
                })(i, n, o);
        this.size = s;
      }
      var _proto5 = oe.prototype;
      _proto5.getValue = function getValue(t) {
        var e = this.knownState.get(t);
        if (void 0 !== e) return e;
        this.sharedNodeState.sharedConfigMap.set(t.key, t);
        var n = t.defaultValue;
        if (this.unknownState && t.key in this.unknownState) {
          var _e21 = this.unknownState[t.key];
          (void 0 !== _e21 && (n = t.parse(_e21)), this.updateFromKnown(t, n));
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
          var _e22 = _ref10[0];
          var _n17 = _ref10[1];
          _e22.isEqual(_n17, _e22.defaultValue)
            ? delete t[_e22.key]
            : (t[_e22.key] = _e22.unparse(_n17));
        }
        for (var _n18 of this.sharedNodeState.flatKeys)
          _n18 in t && ((e[_n18] = t[_n18]), delete t[_n18]);
        return (se(t) && (e[R] = t), e);
      };
      _proto5.getWritable = function getWritable(t) {
        if (this.node === t) return this;
        var e = this.sharedNodeState,
          n = this.unknownState,
          o = new Map(this.knownState);
        return new oe(
          t,
          e,
          (function (t, e, n) {
            var o;
            if (n)
              for (var _ref12 of Object.entries(n)) {
                var _r0 = _ref12[0];
                var _i7 = _ref12[1];
                {
                  if (ne.has(_r0)) continue;
                  var _n19 = t.get(_r0);
                  _n19
                    ? e.has(_n19) || e.set(_n19, _n19.parse(_i7))
                    : ((o = o || {}), (o[_r0] = _i7));
                }
              }
            return o;
          })(e.sharedConfigMap, o, n),
          o,
          this.size,
        );
      };
      _proto5.resetOnCopyNode = function resetOnCopyNode() {
        for (var _t19 of this.knownState.keys())
          _t19.resetOnCopyNode && this.knownState.set(_t19, _t19.defaultValue);
        return this;
      };
      _proto5.updateFromKnown = function updateFromKnown(t, e) {
        var n = t.key;
        this.sharedNodeState.sharedConfigMap.set(n, t);
        var o = this.knownState,
          r = this.unknownState;
        (o.has(t) ||
          (r && n in r) ||
          (r && (delete r[n], (this.unknownState = se(r))), this.size++),
          o.set(t, e));
      };
      _proto5.updateFromUnknown = function updateFromUnknown(t, e) {
        if (ne.has(t)) return;
        var n = this.sharedNodeState.sharedConfigMap.get(t);
        n
          ? this.updateFromKnown(n, n.parse(e))
          : ((this.unknownState = this.unknownState || {}),
            t in this.unknownState || this.size++,
            (this.unknownState[t] = e));
      };
      _proto5.updateFromJSON = function updateFromJSON(t) {
        var e = this.knownState;
        for (var _t20 of e.keys()) e.set(_t20, _t20.defaultValue);
        if (((this.size = e.size), (this.unknownState = void 0), t))
          for (var _ref14 of Object.entries(t)) {
            var _e23 = _ref14[0];
            var _n20 = _ref14[1];
            this.updateFromUnknown(_e23, _n20);
          }
      };
      return oe;
    })();
    function re(t) {
      var e = t.getWritable(),
        n = e.__state
          ? e.__state.getWritable(e)
          : new _oe(
              e,
              (function (t) {
                return t.__state
                  ? t.__state.sharedNodeState
                  : Il(Ca(), t.getType()).sharedNodeState;
              })(e),
            );
      return ((e.__state = n), n);
    }
    function ie(t, e) {
      var n = t.getWritable(),
        o = e[R];
      return ((n.__state || o) && re(t).updateFromJSON(o), n);
    }
    function se(t) {
      if (t) for (var _e24 in t) return t;
    }
    function le(t) {
      return t;
    }
    function ce(t, e, n) {
      for (var _ref16 of e.knownState) {
        var _o11 = _ref16[0];
        var _r1 = _ref16[1];
        {
          if (t.has(_o11.key)) continue;
          t.add(_o11.key);
          var _e25 = n ? n.getValue(_o11) : _o11.defaultValue;
          if (_e25 !== _r1 && !_o11.isEqual(_e25, _r1)) return !0;
        }
      }
      return !1;
    }
    function ae(t, e, n) {
      var o = e.unknownState,
        r = n ? n.unknownState : void 0;
      if (o)
        for (var _ref18 of Object.entries(o)) {
          var _e26 = _ref18[0];
          var _n21 = _ref18[1];
          if (!t.has(_e26) && (t.add(_e26), _n21 !== (r ? r[_e26] : void 0)))
            return !0;
        }
      return !1;
    }
    function ue(t, e) {
      var n = t.__state;
      return n && n.node === t ? n.getWritable(e) : n;
    }
    function fe(t, e) {
      var n = t.__mode,
        o = t.__format,
        r = t.__style,
        i = e.__mode,
        s = e.__format,
        l = e.__style,
        c = t.__state,
        a = e.__state;
      return (
        (null === n || n === i) &&
        (null === o || o === s) &&
        (null === r || r === l) &&
        (null === t.__state ||
          c === a ||
          (function (t, e) {
            if (t === e) return !0;
            var n = new Set();
            return !(
              (t && ce(n, t, e)) ||
              (e && ce(n, e, t)) ||
              (t && ae(n, t, e)) ||
              (e && ae(n, e, t))
            );
          })(c, a))
      );
    }
    function de(t, e) {
      var n = t.mergeWithSibling(e),
        o = gs()._normalizedNodes;
      return (o.add(t.__key), o.add(e.__key), n);
    }
    function he(t) {
      var e,
        n,
        o = t;
      if ("" !== o.__text || !o.isSimpleText() || o.isUnmergeable()) {
        for (
          ;
          null !== (e = o.getPreviousSibling()) &&
          Xr(e) &&
          e.isSimpleText() &&
          !e.isUnmergeable();
        ) {
          if ("" !== e.__text) {
            if (fe(e, o)) {
              o = de(e, o);
              break;
            }
            break;
          }
          e.remove();
        }
        for (
          ;
          null !== (n = o.getNextSibling()) &&
          Xr(n) &&
          n.isSimpleText() &&
          !n.isUnmergeable();
        ) {
          if ("" !== n.__text) {
            if (fe(o, n)) {
              o = de(o, n);
              break;
            }
            break;
          }
          n.remove();
        }
      } else o.remove();
    }
    function ge(t) {
      return (_e(t.anchor), _e(t.focus), t);
    }
    function _e(t) {
      for (; "element" === t.type; ) {
        var _e27 = t.getNode(),
          _n22 = t.offset;
        var _o12 = void 0,
          _r10 = void 0;
        if (
          (_n22 === _e27.getChildrenSize()
            ? ((_o12 = _e27.getChildAtIndex(_n22 - 1)), (_r10 = !0))
            : ((_o12 = _e27.getChildAtIndex(_n22)), (_r10 = !1)),
          Xr(_o12))
        ) {
          t.set(_o12.__key, _r10 ? _o12.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!Ls(_o12)) break;
        t.set(_o12.__key, _r10 ? _o12.getChildrenSize() : 0, "element", !0);
      }
    }
    var pe = Symbol["for"]("@lexical/CachedTextSize");
    function me(e, n) {
      return Ie.read(
        function () {
          var o = 0,
            r = e;
          for (var _e28 = 0; _e28 < n && null !== r; _e28++) {
            var _i8 = Fe.get(r);
            if ((void 0 === _i8 && t(345, r), Ls(_i8))) {
              var _s6 = Pe.get(r);
              if (void 0 !== _s6 && Ls(_s6) && _s6.__parent !== _i8.__parent)
                o += _i8.getTextContentSize();
              else {
                var _e29 = Re.get(r),
                  _n23 = _e29 && _e29.__lexicalTextContent;
                ("string" != typeof _n23 && t(346, _i8.getType()),
                  (o += _n23.length));
              }
              _e28 < n - 1 && !_i8.isInline() && (o += 2);
            } else {
              var _e30 = _i8[pe];
              (void 0 === _e30 && t(347, _i8.getType(), r), (o += _e30));
            }
            r = _i8.__next;
          }
          return o;
        },
        { editor: Se },
      );
    }
    function ye(t) {
      Ls(t) ||
        (void 0 === t[pe] &&
          (t[pe] = Xr(t) ? t.__text.length : t.getTextContentSize()));
    }
    var xe = 4;
    var Ce,
      Se,
      Te,
      ve = "",
      Ne = null,
      be = null,
      ke = null;
    function Oe() {
      return { firstTextKey: ke, format: Ne, style: be };
    }
    function Ee(t) {
      null !== t.firstTextKey &&
        ((Ne = t.format), (be = t.style), (ke = t.firstTextKey));
    }
    function Me(e) {
      if (null !== ke) return;
      var n = e.__lexicalFirstTextKey;
      if ((void 0 === n && t(348), null === n)) return;
      var o = Pe.get(n);
      Xr(o) && ((Ne = o.getFormat()), (be = o.getStyle()), (ke = n));
    }
    var Ae,
      we,
      De,
      Fe,
      Ie,
      Pe,
      Re,
      Le,
      Be,
      Ke,
      ze = !1,
      $e = !1;
    function We(t, e) {
      var n = Fe.get(t),
        o = Pe.has(t);
      if (null !== e) {
        var _n24 = gn(t);
        _n24.parentNode === e && e.removeChild(_n24);
      }
      if (!o) {
        if ((Se._keyToDOMMap["delete"](t), Ls(n))) {
          var _t21 = uu(n, Fe);
          Ue(_t21, 0, _t21.length - 1, null);
        }
        if (void 0 !== n) {
          for (var _t22 of Qe(n).values()) {
            var _e31 = tn(_t22);
            (We(_t22, null), null !== _e31 && _e31.remove());
          }
          kc(Be, Te, Ae, n, "destroyed");
        }
      }
    }
    function Ue(t, e, n, o) {
      for (var _r11 = e; _r11 <= n; ++_r11) {
        var _e32 = t[_r11];
        void 0 !== _e32 && We(_e32, o);
      }
    }
    function je(t, e) {
      t.setProperty("text-align", e);
    }
    var He = "40px";
    function Ve(t, e) {
      var n = Ce.theme.indent;
      if ("string" == typeof n) {
        var _o13 = t.classList.contains(n);
        e > 0 && !_o13
          ? t.classList.add(n)
          : e < 1 && _o13 && t.classList.remove(n);
      }
      (t.style.setProperty(
        "padding-inline-start",
        0 === e
          ? ""
          : "calc(" + e + " * var(--lexical-indent-base-value, " + He + "))",
      ),
        Nc(t, "class"),
        Nc(t, "style"));
    }
    function Je(t, e) {
      var n = t.style;
      (0 === e
        ? je(n, "")
        : 1 === e
          ? je(n, "left")
          : 2 === e
            ? je(n, "center")
            : 3 === e
              ? je(n, "right")
              : 4 === e
                ? je(n, "justify")
                : 5 === e
                  ? je(n, "start")
                  : 6 === e && je(n, "end"),
        Nc(t, "style"));
    }
    function Ye(t, e) {
      var n = (function (t) {
        var e = t.__dir;
        if (null !== e) return e;
        if (Ws(t)) return null;
        var n = t.getParent();
        return null === n || (Wc(n) && null === n.__dir) ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function Ge(t) {
      var e = na().createElement("div");
      return (
        e.setAttribute("data-lexical-slot", t),
        (e.style.display = "none"),
        e
      );
    }
    function qe(t, e, n) {
      e || "false" === t.contentEditable
        ? Ia(n, Se)
        : n.removeAttribute("contenteditable");
    }
    function Xe(t, e, n) {
      var o = ve,
        r = Oe();
      ve = "";
      var i = "";
      var s = zs(t);
      for (var _ref20 of n) {
        var _o14 = _ref20[0];
        var _r12 = _ref20[1];
        {
          var _n25 = Ge(_o14);
          (qe(e, s, _n25), e.appendChild(_n25), (ve = ""));
          var _l3 = Oe();
          (nn(_r12, Ta(t, _n25, Se)), Ee(_l3), Ze(t, _o14, e, _n25), (i += ve));
        }
      }
      return (Ee(r), (ve = o), i);
    }
    function Qe(t) {
      return hu(t) && null !== t.__slots ? t.__slots : du;
    }
    function Ze(t, e, n, o) {
      var r = Ke.$getSlotTargetElement(t, e, n, Se);
      null !== r &&
        (o.parentElement !== r && r.appendChild(o), (o.style.display = ""));
    }
    function tn(t) {
      var e = Re.get(t);
      return void 0 !== e ? e.parentElement : null;
    }
    function en(t, e, n) {
      var o = Qe(t),
        r = Qe(e);
      for (var _ref22 of o) {
        var _t23 = _ref22[0];
        var _e33 = _ref22[1];
        if (!r.has(_t23)) {
          var _t24 = tn(_e33);
          (We(_e33, null), null !== _t24 && _t24.remove());
        }
      }
      var i = ve,
        s = Oe();
      var l = "",
        c = null;
      var a = zs(e);
      for (var _ref24 of r) {
        var _t25 = _ref24[0];
        var _i9 = _ref24[1];
        {
          var _r13 = o.get(_t25);
          var _s7 = void 0 !== _r13 ? tn(_r13) : null;
          ve = "";
          var _u2 = Oe();
          if (null === _s7) {
            _s7 = Ge(_t25);
            var _o15 = null;
            for (var _t26 of n.children)
              if (!_t26.hasAttribute("data-lexical-slot")) {
                _o15 = _t26;
                break;
              }
            (n.insertBefore(_s7, _o15), nn(_i9, Ta(e, _s7, Se)));
          } else
            _r13 === _i9
              ? an(_i9, _s7)
              : (void 0 !== _r13 && We(_r13, _s7), nn(_i9, Ta(e, _s7, Se)));
          if (
            (Ee(_u2),
            qe(n, a, _s7),
            Ze(e, _t25, n, _s7),
            (l += ve),
            _s7.parentElement === n)
          ) {
            var _t27 = null === c ? n.firstChild : c.nextSibling;
            (_t27 !== _s7 && n.insertBefore(_s7, _t27), (c = _s7));
          }
        }
      }
      return (Ee(s), (ve = i), l);
    }
    function nn(e, n) {
      var o = Pe.get(e);
      if ((void 0 === o && t(60), null !== n)) {
        var _t28 = Fe.get(e);
        if (void 0 !== _t28) {
          var _r14 = Re.get(e);
          if (void 0 !== _r14) {
            var _i0 = gu(_t28) ? _t28.__slotHost : null,
              _s8 = gu(o) ? o.__slotHost : null,
              _l4 = _t28.__parent !== o.__parent || _i0 !== _s8,
              _c3 = null !== _s8 && _r14.parentElement !== n.element;
            if (_l4 || _c3) return (n.insertChild(_r14), an(e, n.element));
          }
        }
      }
      var r = Ke.$createDOM(o, Se);
      if (
        ((function (t, e, n) {
          var o = n._keyToDOMMap;
          (oc(e, n, t), o.set(t, e));
        })(e, r, Se),
        Xr(o)
          ? r.setAttribute("data-lexical-text", "true")
          : zs(o) &&
            (r.setAttribute("data-lexical-decorator", "true"),
            Da(r, { captureSelection: !0 })),
        Ls(o))
      ) {
        var _t29 = o.__indent,
          _e34 = o.__size;
        (Ye(r, o), 0 !== _t29 && Ve(r, _t29));
        var _n26 = Qe(o),
          _i1 = _n26.size > 0 ? Xe(o, r, _n26) : "";
        if (0 === _e34)
          ((r.__lexicalTextContent = _i1),
            (r.__lexicalFirstTextKey = null),
            (ve += _i1),
            _n26.size > 0 && (r.__lexicalSlotTextLength = _i1.length));
        else {
          var _t30 = ve,
            _s9 = _e34 - 1;
          if ((on(uu(o, Pe), o, 0, _s9, Ta(o, r, Se)), "" !== _i1)) {
            var _e35 = r.__lexicalTextContent || "";
            ((r.__lexicalTextContent = _i1 + _e35), (ve = _t30 + _i1 + _e35));
          }
          _n26.size > 0 && (r.__lexicalSlotTextLength = _i1.length);
        }
        var _s0 = o.__format;
        (0 !== _s0 && Je(r, _s0), o.isInline() || (ln(0, o, r), sn(o, r)));
      } else {
        var _t31 = o.getTextContent();
        if (zs(o)) {
          var _t32 = o.decorate(Se, Ce);
          (null !== _t32 && un(e, _t32), (r.contentEditable = "false"));
          var _n27 = Qe(o);
          _n27.size > 0 && Xe(o, r, _n27);
        }
        ve += _t31;
      }
      return (
        null !== n && n.insertChild(r),
        Ke.$decorateDOM(o, null, r, Se),
        ye(o),
        kc(Be, Te, Ae, o, "created"),
        r
      );
    }
    function on(e, n, o, r, i) {
      var s = ve,
        l = Oe();
      ((ve = ""), (Ne = null), (be = null), (ke = null));
      var c = o;
      for (; c <= r; ++c) {
        var _t33 = Oe();
        nn(e[c], i);
        var _n28 = Pe.get(e[c]);
        (null !== _n28 && Xr(_n28)
          ? null === Ne &&
            ((Ne = _n28.getFormat()), (be = _n28.getStyle()), (ke = _n28.__key))
          : Ls(_n28) && c < r && !_n28.isInline() && (ve += T),
          Ee(_t33));
      }
      var a = Se._keyToDOMMap.get(n.__key);
      (void 0 === a && t(349, n.__key),
        (a.__lexicalTextContent = ve),
        (a.__lexicalFirstTextKey = ke),
        (ve = s + ve),
        Ee(l));
    }
    function rn(t, e) {
      if (!t) return !1;
      var n = e.get(t);
      return zs(n) && !n.isInline();
    }
    function sn(t, e) {
      var n = Ta(t, e, Se);
      (n.setDecoratorBoundaryAnchor("leading", rn(t.__first, Pe)),
        n.setDecoratorBoundaryAnchor("trailing", rn(t.__last, Pe)));
    }
    function ln(t, e, n) {
      var o = Ta(e, n, Se),
        r = (function (t, e) {
          if (t) {
            var _n29 = t.__last;
            if (_n29) {
              var _t34 = e.get(_n29);
              if (_t34)
                return Xs(_t34)
                  ? "line-break"
                  : zs(_t34) && _t34.isInline()
                    ? "decorator"
                    : null;
            }
            return "empty";
          }
          return null;
        })(e, Pe);
      o.setManagedLineBreak(r);
    }
    function cn(t, e, n) {
      var o = e.__lexicalFirstTextKey;
      if (null != o) {
        var _e36 = t.__key;
        var _r15 = o;
        for (; null !== _r15; ) {
          var _t35 = Pe.get(_r15);
          if (void 0 === _t35) {
            _r15 = null;
            break;
          }
          if (_t35.__parent === _e36) break;
          _r15 = _t35.__parent;
        }
        if (null !== _r15 && !n.has(_r15)) {
          var _t36 = Pe.get(o);
          if (Xr(_t36))
            return ((Ne = _t36.getFormat()), void (be = _t36.getStyle()));
        }
      }
      e.__lexicalFirstTextKey = ke;
    }
    function an(e, n) {
      var o = Fe.get(e);
      var r = Pe.get(e);
      (void 0 !== o && void 0 !== r) || t(61);
      var i = ze || De.has(e) || we.has(e),
        s = wc(Se, e);
      if (o === r && !i) {
        var _e37;
        if (Ls(o)) {
          var _n30 = s.__lexicalTextContent;
          ("string" != typeof _n30 && t(355, o.getType()),
            (_e37 = _n30),
            Me(s));
        } else _e37 = o.getTextContent();
        return ((ve += _e37), s);
      }
      if (
        (o !== r && i && kc(Be, Te, Ae, r, "updated"),
        Ke.$updateDOM(r, o, s, Se))
      ) {
        var _o16 = nn(e, null);
        return (
          null === n && t(62),
          n.replaceChild(_o16, s),
          We(e, null),
          _o16
        );
      }
      if (Ls(o)) {
        Ls(r) || t(334, e);
        var _n31 = r.__indent;
        (ze || _n31 !== o.__indent) && Ve(s, _n31);
        var _l5 = r.__format;
        (ze || _l5 !== o.__format) && Je(s, _l5);
        var _c4 = i && (Qe(r).size > 0 || Qe(o).size > 0) ? en(o, r, s) : "";
        if (i) {
          var _e38 = ve;
          if (
            ((function (e, n, o) {
              var r;
              ((Ne = null),
                (be = null),
                (ke = null),
                (function (e, n, o) {
                  var r = ve,
                    i = e.__size,
                    s = n.__size;
                  ve = "";
                  var l = o.element,
                    c = Se._keyToDOMMap.get(n.__key);
                  void 0 === c && t(351, n.__key);
                  var a = s - i;
                  if (
                    !ze &&
                    Math.abs(a) <= 1 &&
                    i >= xe &&
                    e.__first === n.__first &&
                    (0 !== a || !Se._cloneNotNeeded.has(e.__key))
                  ) {
                    var _i10 = c.__lexicalTextContent,
                      _u3 = Le.get(e.__key);
                    if (!ze && "string" == typeof _i10 && void 0 !== _u3) {
                      var _s1 = (function (t, e) {
                        var n = e.size;
                        if (0 === n || n >= t.__size) return null;
                        var o = t.__last,
                          r = null,
                          i = 0;
                        for (; null !== o && i < n; ) {
                          if (!e.has(o)) return null;
                          r = o;
                          var _t37 = Pe.get(o);
                          if (void 0 === _t37) return null;
                          ((o = _t37.__prev), i++);
                        }
                        return i !== n || (null !== o && e.has(o)) ? null : r;
                      })(n, _u3);
                      if (null !== _s1) {
                        var _f2 = _u3.size;
                        if (0 === a) {
                          var _e39 = me(_s1, _f2);
                          var _o17 = _s1,
                            _a2 = 0;
                          for (; null !== _o17 && _a2 < _f2; ) {
                            var _t38 = Pe.get(_o17);
                            if (void 0 === _t38) break;
                            var _e40 = Oe();
                            (an(_o17, l),
                              Xr(_t38) &&
                                null === Ne &&
                                ((Ne = _t38.getFormat()),
                                (be = _t38.getStyle()),
                                (ke = _t38.__key)),
                              Ee(_e40),
                              (_o17 = _t38.__next),
                              _a2++);
                          }
                          var _d2 = "";
                          for (
                            _o17 = _s1, _a2 = 0;
                            null !== _o17 && _a2 < _f2;
                          ) {
                            var _e41 = Pe.get(_o17);
                            if (void 0 === _e41) break;
                            var _n32 = void 0;
                            if (Ls(_e41)) {
                              var _r16 = Se._keyToDOMMap.get(_o17),
                                _i11 = _r16 && _r16.__lexicalTextContent;
                              ("string" != typeof _i11 &&
                                t(352, _e41.getType()),
                                (_n32 = _i11));
                            } else _n32 = _e41.getTextContent();
                            ((_d2 += _n32),
                              _a2 < _f2 - 1 &&
                                Ls(_e41) &&
                                !_e41.isInline() &&
                                (_d2 += T),
                              (_o17 = _e41.__next),
                              _a2++);
                          }
                          var _h2 = c.__lexicalSlotTextLength || 0,
                            _g2 = _h2 > 0 ? _i10.slice(_h2) : _i10,
                            _3 = _g2.slice(0, _g2.length - _e39) + _d2;
                          return (
                            (c.__lexicalTextContent = _3),
                            (ve = r + _3),
                            void cn(n, c, _u3)
                          );
                        }
                        if (
                          (function (e, n, o, r, i, s, l, c) {
                            if (1 !== c && -1 !== c) return !1;
                            if (l !== (1 === c ? 2 : 1)) return !1;
                            var a = l - c;
                            var u = e.__last;
                            for (var _t39 = 0; _t39 < a - 1; _t39++) {
                              if (null === u) return !1;
                              var _t40 = Fe.get(u);
                              if (void 0 === _t40) return !1;
                              u = _t40.__prev;
                            }
                            if (null === u) return !1;
                            var f = Pe.get(s),
                              d = Fe.get(u);
                            if (void 0 === f || void 0 === d) return !1;
                            if (f.__prev !== d.__prev) return !1;
                            var h = [];
                            var g = s;
                            for (var _t41 = 0; _t41 < l; _t41++) {
                              if (null === g) return !1;
                              h.push(g);
                              var _t42 = Pe.get(g);
                              g = _t42 ? _t42.__next : null;
                            }
                            var _ = [];
                            g = u;
                            for (var _t43 = 0; _t43 < a; _t43++) {
                              if (null === g) return !1;
                              _.push(g);
                              var _t44 = Fe.get(g);
                              g = _t44 ? _t44.__next : null;
                            }
                            var p = new Set(_),
                              m = new Set(h),
                              y = [];
                            var x = 0,
                              C = 0;
                            for (; x < a && C < l; )
                              if (h[C] === _[x])
                                (y.push({ key: h[C], kind: "reconcile" }),
                                  x++,
                                  C++);
                              else if (m.has(_[x])) {
                                if (p.has(h[C])) return !1;
                                (y.push({
                                  key: h[C],
                                  kind: "create",
                                  nextIndex: C,
                                }),
                                  C++);
                              } else
                                (y.push({ key: _[x], kind: "destroy" }), x++);
                            for (; x < a; )
                              y.push({ key: _[x++], kind: "destroy" });
                            for (; C < l; )
                              (y.push({
                                key: h[C],
                                kind: "create",
                                nextIndex: C,
                              }),
                                C++);
                            var S = me(u, a);
                            for (var _t45 of y) {
                              var _e42 = Oe();
                              if ("reconcile" === _t45.kind)
                                an(_t45.key, o.element);
                              else if ("destroy" === _t45.kind)
                                We(_t45.key, o.element);
                              else {
                                var _e43 = null;
                                for (
                                  var _n33 = _t45.nextIndex + 1;
                                  _n33 < l;
                                  _n33++
                                ) {
                                  var _t46 = Se._keyToDOMMap.get(h[_n33]);
                                  if (void 0 !== _t46) {
                                    _e43 = _t46;
                                    break;
                                  }
                                }
                                nn(
                                  _t45.key,
                                  o.withBefore(_e43 != null ? _e43 : o.before),
                                );
                              }
                              if ("destroy" !== _t45.kind) {
                                var _e44 = Pe.get(_t45.key);
                                _e44 &&
                                  Xr(_e44) &&
                                  null === Ne &&
                                  ((Ne = _e44.getFormat()),
                                  (be = _e44.getStyle()),
                                  (ke = _e44.__key));
                              }
                              Ee(_e42);
                            }
                            var v = "";
                            for (var _e45 = 0; _e45 < l; _e45++) {
                              var _n34 = Pe.get(h[_e45]);
                              if (void 0 === _n34) return !1;
                              var _o18 = void 0;
                              if (Ls(_n34)) {
                                var _r17 = Se._keyToDOMMap.get(h[_e45]),
                                  _i12 = _r17 && _r17.__lexicalTextContent;
                                ("string" != typeof _i12 &&
                                  t(350, _n34.getType()),
                                  (_o18 = _i12));
                              } else _o18 = _n34.getTextContent();
                              ((v += _o18),
                                _e45 < l - 1 &&
                                  Ls(_n34) &&
                                  !_n34.isInline() &&
                                  (v += T));
                            }
                            var N = r.__lexicalSlotTextLength || 0,
                              b = N > 0 ? i.slice(N) : i;
                            return (
                              (r.__lexicalTextContent =
                                b.slice(0, b.length - S) + v),
                              !0
                            );
                          })(e, 0, o, c, _i10, _s1, _f2, a)
                        ) {
                          var _e46 = c.__lexicalTextContent;
                          return (
                            "string" != typeof _e46 && t(353),
                            (ve = r + _e46),
                            void cn(n, c, _u3)
                          );
                        }
                      }
                    }
                    if (0 === a) {
                      var _n35 = e.__first,
                        _o19 = 0;
                      for (; null !== _n35; ) {
                        var _e47 = Pe.get(_n35);
                        if (void 0 === _e47) break;
                        var _r18 = ze || De.has(_n35) || we.has(_n35),
                          _i13 = Oe();
                        if (_r18) an(_n35, l);
                        else {
                          var _o20 = void 0,
                            _r19 = void 0;
                          if (Ls(_e47)) {
                            _r19 = Re.get(_n35);
                            var _i14 = _r19 && _r19.__lexicalTextContent;
                            ("string" != typeof _i14 && t(354, _e47.getType()),
                              (_o20 = _i14));
                          } else _o20 = _e47.getTextContent();
                          ((ve += _o20), void 0 !== _r19 && Me(_r19));
                        }
                        (Xr(_e47)
                          ? null === Ne &&
                            ((Ne = _e47.getFormat()),
                            (be = _e47.getStyle()),
                            (ke = _e47.__key))
                          : Ls(_e47) &&
                            _o19 < s - 1 &&
                            !_e47.isInline() &&
                            (ve += T),
                          Ee(_i13),
                          (_n35 = _e47.__next),
                          _o19++);
                      }
                      return (
                        (c.__lexicalTextContent = ve),
                        (c.__lexicalFirstTextKey = ke),
                        void (ve = r + ve)
                      );
                    }
                  }
                  if (1 === i && 1 === s) {
                    var _t47 = e.__first,
                      _r20 = n.__first;
                    if (_t47 === _r20) an(_t47, l);
                    else {
                      var _e48 = gn(_t47),
                        _n36 = nn(_r20, null);
                      try {
                        _e48.parentNode === l
                          ? l.replaceChild(_n36, _e48)
                          : o.insertChild(_n36);
                      } catch (o) {
                        if ("object" == typeof o && null != o) {
                          var _i15 =
                            o.toString() +
                            " Parent: " +
                            l.tagName +
                            ", new child: {tag: " +
                            _n36.tagName +
                            " key: " +
                            _r20 +
                            "}, old child: {tag: " +
                            _e48.tagName +
                            ", key: " +
                            _t47 +
                            "}.";
                          throw new Error(_i15);
                        }
                        throw o;
                      }
                      We(_t47, null);
                    }
                    var _i16 = Pe.get(_r20);
                    Xr(_i16) &&
                      null === Ne &&
                      ((Ne = _i16.getFormat()),
                      (be = _i16.getStyle()),
                      (ke = _i16.__key));
                  } else {
                    var _r21 = uu(e, Fe),
                      _c5 = uu(n, Pe);
                    if (
                      (_r21.length !== i && t(227),
                      _c5.length !== s && t(228),
                      0 === i)
                    )
                      0 !== s && on(_c5, n, 0, s - 1, o);
                    else if (0 === s) {
                      if (0 !== i) {
                        var _t48 =
                          null == o.after &&
                          null == o.before &&
                          0 === Qe(n).size &&
                          null == o.element.__lexicalLineBreak;
                        (Ue(_r21, 0, i - 1, _t48 ? null : l),
                          _t48 && (l.textContent = ""));
                      }
                    } else
                      !(function (t, e, n, o, r, i) {
                        var s = o - 1,
                          l = r - 1;
                        var c,
                          a,
                          u = i.getFirstChild(),
                          f = 0,
                          d = 0;
                        for (; f <= s && d <= l; ) {
                          var _t49 = e[f],
                            _o21 = n[d],
                            _r22 = Oe();
                          if (_t49 === _o21)
                            ((u = fn(an(_o21, i.element))), f++, d++);
                          else {
                            if ((void 0 === a && (a = dn(n, d)), void 0 === c))
                              c = dn(e, f);
                            else if (!c.has(_t49)) {
                              (f++, Ee(_r22));
                              continue;
                            }
                            if (!a.has(_t49)) {
                              ((u = fn(gn(_t49))),
                                We(_t49, i.element),
                                f++,
                                c["delete"](_t49),
                                Ee(_r22));
                              continue;
                            }
                            if (c.has(_o21)) {
                              var _t50 = wc(Se, _o21);
                              (_t50 !== u &&
                                i
                                  .withBefore(u != null ? u : i.before)
                                  .insertChild(_t50),
                                (u = fn(an(_o21, i.element))),
                                f++,
                                d++);
                            } else
                              (nn(_o21, i.withBefore(u != null ? u : i.before)),
                                d++);
                          }
                          var _s10 = Pe.get(_o21);
                          (null !== _s10 && Xr(_s10)
                            ? null === Ne &&
                              ((Ne = _s10.getFormat()),
                              (be = _s10.getStyle()),
                              (ke = _s10.__key))
                            : Ls(_s10) &&
                              d <= l &&
                              !_s10.isInline() &&
                              (ve += T),
                            Ee(_r22));
                        }
                        var h = f > s,
                          g = d > l;
                        if (h && !g) {
                          var _e49 = n[l + 1],
                            _o22 =
                              void 0 === _e49 ? null : Se.getElementByKey(_e49);
                          on(
                            n,
                            t,
                            d,
                            l,
                            i.withBefore(_o22 != null ? _o22 : i.before),
                          );
                        } else g && !h && Ue(e, f, s, i.element);
                      })(n, _r21, _c5, i, s, o);
                  }
                  ((c.__lexicalTextContent = ve),
                    (c.__lexicalFirstTextKey = ke),
                    (ve = r + ve));
                })(e, n, Ta(n, o, Se)),
                Wc(n) ||
                  ((r = n),
                  null == Ne ||
                    Ne === r.__textFormat ||
                    $e ||
                    r.setTextFormat(Ne),
                  (function (t) {
                    null == be ||
                      be === t.__textStyle ||
                      $e ||
                      t.setTextStyle(be);
                  })(n)));
            })(o, r, s),
            r.isInline() || (Ws(r) || ln(0, r, s), sn(r, s)),
            "" !== _c4)
          ) {
            var _t51 = s.__lexicalTextContent || "";
            ((s.__lexicalTextContent = _c4 + _t51),
              (ve = _e38 + _c4 + _t51),
              (s.__lexicalSlotTextLength = _c4.length));
          } else
            (Qe(r).size > 0 || Qe(o).size > 0) &&
              (s.__lexicalSlotTextLength = 0);
        } else {
          var _e50 = s.__lexicalTextContent;
          ("string" != typeof _e50 && t(356, o.getType()), (ve += _e50), Me(s));
        }
        if (
          (ze || r.__dir !== o.__dir || r.__parent !== o.__parent) &&
          (Ye(s, r), Ws(r) && !ze)
        )
          for (var _t52 of r.getChildren())
            Ls(_t52) && Ye(wc(Se, _t52.getKey()), _t52);
      } else {
        var _t53 = r.getTextContent();
        if (zs(r)) {
          var _t54 = r.decorate(Se, Ce);
          (null !== _t54 && un(e, _t54),
            i && (Qe(r).size > 0 || Qe(o).size > 0) && en(o, r, s));
        }
        ve += _t53;
      }
      if (!$e && Ws(r)) {
        var _t55 = r.getLatest();
        if (_t55.__cachedText !== ve) {
          var _e51 = _t55.getWritable();
          ((_e51.__cachedText = ve), (r = _e51));
        }
      }
      return (Ke.$decorateDOM(r, o, s, Se), ye(r), s);
    }
    function un(t, e) {
      var n = Se._pendingDecorators;
      var o = Se._decorators;
      if (null === n) {
        if (o[t] === e) return;
        n = sc(Se);
      }
      n[t] = e;
    }
    function fn(t) {
      var e = t.nextSibling;
      return (
        null !== e && e === Se._blockCursorElement && (e = e.nextSibling),
        e
      );
    }
    function dn(t, e) {
      var n = new Set();
      for (var _o23 = e; _o23 < t.length; _o23++) n.add(t[_o23]);
      return n;
    }
    function hn(t, e, n, o, r, i) {
      ((ve = ""),
        (Ne = null),
        (be = null),
        (ke = null),
        (ze = 2 === o),
        (Se = n),
        (Ce = n._config),
        (Ke = n._config.dom || kl),
        (Te = n._nodes),
        (Ae = Se._listeners.mutation),
        (we = r),
        (De = i),
        (Fe = t._nodeMap),
        (Ie = t),
        (Pe = e._nodeMap),
        ($e = e._readOnly),
        (Re = Q(n._keyToDOMMap)),
        (Le = (function () {
          var t = new Map(),
            e = function e(_e53) {
              for (var _n37 of _e53) {
                var _e52 = Pe.get(_n37);
                if (void 0 === _e52) continue;
                var _o24 = _e52.__parent;
                if (null === _o24) continue;
                var _r23 = t.get(_o24);
                (void 0 === _r23 && ((_r23 = new Set()), t.set(_o24, _r23)),
                  _r23.add(_n37));
              }
            };
          return (e(we.keys()), e(De), t);
        })()));
      var s = new Map();
      return (
        (Be = s),
        an("root", null),
        (Se = void 0),
        (Te = void 0),
        (we = void 0),
        (De = void 0),
        (Fe = void 0),
        (Ie = void 0),
        (Pe = void 0),
        (Ce = void 0),
        (Re = void 0),
        (Le = void 0),
        (Be = void 0),
        (Ke = kl),
        s
      );
    }
    function gn(e) {
      var n = Re.get(e);
      return (void 0 === n && t(75, e), n);
    }
    function _n(t) {
      return function () {};
    }
    function pn(t) {
      return { type: t };
    }
    var mn = pn("SELECTION_CHANGE_COMMAND"),
      yn = pn("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"),
      xn = pn("CLICK_COMMAND"),
      Cn = pn("BEFORE_INPUT_COMMAND"),
      Sn = pn("INPUT_COMMAND"),
      Tn = pn("COMPOSITION_START_COMMAND"),
      vn = pn("COMPOSITION_END_COMMAND"),
      Nn = pn("DELETE_CHARACTER_COMMAND"),
      bn = pn("INSERT_LINE_BREAK_COMMAND"),
      kn = pn("INSERT_PARAGRAPH_COMMAND"),
      On = pn("CONTROLLED_TEXT_INSERTION_COMMAND"),
      En = pn("PASTE_COMMAND"),
      Mn = pn("REMOVE_TEXT_COMMAND"),
      An = pn("DELETE_WORD_COMMAND"),
      wn = pn("DELETE_LINE_COMMAND"),
      Dn = pn("FORMAT_TEXT_COMMAND"),
      Fn = pn("SET_TEXT_FORMAT_COMMAND"),
      In = pn("UNDO_COMMAND"),
      Pn = pn("REDO_COMMAND"),
      Rn = pn("KEYDOWN_COMMAND"),
      Ln = pn("KEY_ARROW_RIGHT_COMMAND"),
      Bn = pn("MOVE_TO_END"),
      Kn = pn("KEY_ARROW_LEFT_COMMAND"),
      zn = pn("MOVE_TO_START"),
      $n = pn("KEY_ARROW_UP_COMMAND"),
      Wn = pn("KEY_ARROW_DOWN_COMMAND"),
      Un = pn("KEY_ENTER_COMMAND"),
      jn = pn("KEY_SPACE_COMMAND"),
      Hn = pn("KEY_BACKSPACE_COMMAND"),
      Vn = pn("KEY_ESCAPE_COMMAND"),
      Jn = pn("KEY_DELETE_COMMAND"),
      Yn = pn("KEY_TAB_COMMAND"),
      Gn = pn("INSERT_TAB_COMMAND"),
      qn = pn("INDENT_CONTENT_COMMAND"),
      Xn = pn("OUTDENT_CONTENT_COMMAND"),
      Qn = pn("DROP_COMMAND"),
      Zn = pn("FORMAT_ELEMENT_COMMAND"),
      to = pn("DRAGSTART_COMMAND"),
      eo = pn("DRAGOVER_COMMAND"),
      no = pn("DRAGEND_COMMAND"),
      oo = pn("COPY_COMMAND"),
      ro = pn("CUT_COMMAND"),
      io = pn("SELECT_ALL_COMMAND"),
      so = pn("CLEAR_EDITOR_COMMAND"),
      lo = pn("CLEAR_HISTORY_COMMAND"),
      co = pn("CAN_REDO_COMMAND"),
      ao = pn("CAN_UNDO_COMMAND"),
      uo = pn("FOCUS_COMMAND"),
      fo = pn("BLUR_COMMAND"),
      ho = pn("KEY_MODIFIER_COMMAND");
    function go(t, e) {
      var _babelHelpers$extends;
      return babelHelpers["extends"](
        {},
        e,
        ((_babelHelpers$extends = {}),
        (_babelHelpers$extends[L] = t),
        _babelHelpers$extends),
      );
    }
    var _o = go("metaKey", { ctrlKey: !c, metaKey: c }),
      po = go("altKey", { altKey: c, ctrlKey: !c }),
      mo = [
        ["altKey", 1],
        ["ctrlKey", 2],
        ["metaKey", 4],
        ["shiftKey", 8],
      ];
    function yo(t, e, n) {
      var o = t.get(e);
      o ? o.push(n) : t.set(e, [n]);
    }
    var _xo = (function () {
      function xo() {
        this.byKey = (function () {
          return new Map();
        })();
        this.byCode = (function () {
          return new Map();
        })();
      }
      var _proto6 = xo.prototype;
      _proto6.add = function add(e) {
        var n = e.key,
          _e$modifiers = e.modifiers,
          o = _e$modifiers === void 0 ? {} : _e$modifiers;
        n.length > 0 || t(399);
        var r = n.toLowerCase();
        for (var _t56 of (function (t) {
          var e = [0];
          var _loop = function _loop() {
            var n = _ref26[0];
            var o = _ref26[1];
            {
              var _r24 = t[n] || !1;
              "any" === _r24
                ? (e = e.concat(
                    e.map(function (t) {
                      return t | o;
                    }),
                  ))
                : _r24 &&
                  (e = e.map(function (t) {
                    return t | o;
                  }));
            }
          };
          for (var _ref26 of mo) {
            _loop();
          }
          return e;
        })(o))
          (yo(this.byKey, _t56 + ":" + r, e),
            1 === n.length &&
              (/[0-9]/.test(n)
                ? yo(this.byCode, _t56 + ":Digit" + n, e)
                : /[a-z]/.test(r) &&
                  yo(this.byCode, _t56 + ":Key" + r.toUpperCase(), e)));
        return this;
      };
      _proto6.matches = function matches(t) {
        var e = t.key;
        if (!e) return [];
        var n = (function (t) {
            var e = 0;
            for (var _ref28 of mo) {
              var _n38 = _ref28[0];
              var _o25 = _ref28[1];
              t[_n38] && (e |= _o25);
            }
            return e;
          })(t),
          o = this.byKey.get(n + ":" + e.toLowerCase()),
          r = o ? o.slice() : [];
        if (
          this.byCode.size > 0 &&
          !(1 === e.length && e.charCodeAt(0) <= 127)
        ) {
          var _e54 = this.byCode.get(n + ":" + t.code);
          _e54 && r.push.apply(r, Array.from(_e54));
        }
        return r;
      };
      _proto6.match = function match(t) {
        return this.matches(t)[0];
      };
      return xo;
    })();
    function Co(t) {
      var e = new _xo();
      for (var _n39 of t) e.add(_n39);
      return e;
    }
    function So(t) {
      var e = new Map();
      return {
        dispose: function dispose() {
          for (var _t57 of e.values()) _t57.dispose();
          e.clear();
        },
        register: function register(n, o) {
          var r = e.get(n);
          void 0 === r &&
            ((r = { dispose: t(n, o), holders: new Set() }), e.set(n, r));
          var _i17 = function i() {
            var t = e.get(n);
            t &&
              t.holders["delete"](_i17) &&
              0 === t.holders.size &&
              (e["delete"](n), t.dispose());
          };
          return (r.holders.add(_i17), _i17);
        },
      };
    }
    function To(t, e, n, o) {
      return (
        t.addEventListener(e, n, o),
        t.removeEventListener.bind(t, e, n, o)
      );
    }
    var vo = Object.freeze({});
    var No;
    var bo = new WeakMap(),
      ko = new WeakMap(),
      Oo = So(function (t) {
        return (
          t.addEventListener("selectionchange", rr),
          function () {
            return t.removeEventListener("selectionchange", rr);
          }
        );
      });
    function Eo(t, e, n, o, r, i) {
      var s = t.anchor,
        l = t.focus,
        c = s.getNode(),
        a = gs();
      var u;
      if (void 0 !== i) u = i;
      else {
        var _t58 = Gc(Bc(a));
        u = null !== _t58 ? ia(_t58, a._rootElement) : null;
      }
      var d = null !== u ? u.anchorNode : null,
        h = s.key,
        g = a.getElementByKey(h),
        _ = n.length;
      return (
        h !== l.key ||
        !Xr(c) ||
        (((!r &&
          (!f || a._inputState.lastBeforeInputInsertTextTimeStamp < o + 50)) ||
          (c.isDirty() && _ < 2) ||
          hc(n)) &&
          s.offset !== l.offset &&
          !c.isComposing()) ||
        jl(c) ||
        (c.isDirty() && _ > 1) ||
        ((r || !f) && null !== g && !c.isComposing() && d !== Na(c, g, a)) ||
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
            r = Ul(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!o.canInsertTextBefore() && !e.isComposing()) ||
                r ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (Xr(e) || (Ls(e) && e.isInline())) &&
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
    function Mo(t, e) {
      return (
        Hl(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function Ao(e, n, o) {
      var _ia = ia(e, n._rootElement),
        r = _ia.anchorNode,
        i = _ia.anchorOffset,
        s = _ia.focusNode,
        l = _ia.focusOffset,
        c = n._inputState,
        a = c.isSelectionChangeFromDOMUpdate;
      if (a) {
        c.isSelectionChangeFromDOMUpdate = !1;
        var _t59 = c.selectionChangeFromDOMUpdatePoints;
        if (
          ((c.selectionChangeFromDOMUpdatePoints = null),
          Mo(r, i) &&
            Mo(s, l) &&
            !c.postDeleteSelectionToRestore &&
            (null === _t59 ||
              (_t59.anchorNode === r &&
                _t59.anchorOffset === i &&
                _t59.focusNode === s &&
                _t59.focusOffset === l)))
        )
          return;
      }
      Ms(n, function () {
        if (!o) return void uc(null);
        if (!Kl(n, r, s)) return;
        var u = Bi();
        if (c.postDeleteSelectionToRestore && fi(u) && u.isCollapsed()) {
          var _t60 = u.anchor,
            _e55 = c.postDeleteSelectionToRestore.anchor;
          ((_t60.key === _e55.key && _t60.offset === _e55.offset + 1) ||
            (1 === _t60.offset &&
              _e55.getNode().is(_t60.getNode().getPreviousSibling()))) &&
            ((u = c.postDeleteSelectionToRestore.clone()), uc(u));
        }
        if (((c.postDeleteSelectionToRestore = null), fi(u))) {
          var _o26 = u.anchor,
            _a3 = _o26.getNode();
          if (u.isCollapsed()) {
            "Range" === e.type && r === s && (u.dirty = !0);
            var _i18 = Bc(n).event,
              _l6 = _i18 ? _i18.timeStamp : performance.now(),
              _c$collapsedSelection = c.collapsedSelectionFormat,
              _f3 = _c$collapsedSelection.format,
              _d3 = _c$collapsedSelection.style,
              _h3 = _c$collapsedSelection.offset,
              _g3 = _c$collapsedSelection.key,
              _4 = _c$collapsedSelection.timeStamp,
              _p2 = cc(),
              _m = !1 === n.isComposing() && "" === _p2.getTextContent();
            if (_l6 < _4 + 200 && _o26.offset === _h3 && _o26.key === _g3)
              wo(u, _f3, _d3);
            else if ("text" === _o26.type) (Xr(_a3) || t(141), Do(u, _a3));
            else if ("element" === _o26.type && !_m) {
              Ls(_a3) || t(259);
              var _e56 = _o26.getNode();
              _e56.isEmpty()
                ? (function (t, e) {
                    wo(t, e.getTextFormat(), e.getTextStyle());
                  })(u, _e56)
                : wo(u, u.format, "");
            }
          } else {
            var _t61 = _o26.key,
              _e57 = u.focus.key,
              _n40 = u.getNodes(),
              _r25 = _n40.length,
              _s11 = u.isBackward(),
              _c6 = _s11 ? l : i,
              _a4 = _s11 ? i : l,
              _f4 = _s11 ? _e57 : _t61,
              _d4 = _s11 ? _t61 : _e57;
            var _h4 = C,
              _g4 = !1;
            for (var _t62 = 0; _t62 < _r25; _t62++) {
              var _e58 = _n40[_t62],
                _o27 = _e58.getTextContentSize();
              if (
                Xr(_e58) &&
                0 !== _o27 &&
                !(
                  (0 === _t62 && _e58.__key === _f4 && _c6 === _o27) ||
                  (_t62 === _r25 - 1 && _e58.__key === _d4 && 0 === _a4)
                ) &&
                ((_g4 = !0), (_h4 &= _e58.getFormat()), 0 === _h4)
              )
                break;
            }
            u.format = _g4 ? _h4 : 0;
          }
        }
        var f = Ki();
        (a || (null !== u ? u.dirty || !fi(u) || !u.is(f) : null !== f)) &&
          Ac(n, mn);
      });
    }
    function wo(t, e, n) {
      (t.format === e && t.style === n) ||
        ((t.format = e), (t.style = n), (t.dirty = !0));
    }
    function Do(t, e) {
      wo(t, e.getFormat(), e.getStyle());
    }
    function Fo(t, e) {
      Ms(e, function () {
        var n = Bi(),
          o = Gc(Bc(e)),
          r = Ki();
        if (o)
          if (fi(n)) {
            var _t63 = n.anchor,
              _e59 = _t63.getNode();
            "element" === _t63.type &&
              0 === _t63.offset &&
              n.isCollapsed() &&
              !Ws(_e59) &&
              1 === cc().getChildrenSize() &&
              _e59.getTopLevelElementOrThrow().isEmpty() &&
              null !== r &&
              n.is(r) &&
              (o.removeAllRanges(), (n.dirty = !0));
          } else if ("touch" === t.pointerType || "pen" === t.pointerType) {
            var _n41 = ia(o, e._rootElement).anchorNode;
            (da(_n41) || Hl(_n41)) && uc(Li(r, o, e, t));
          }
        if (a && null !== o && 0 === o.rangeCount) {
          var _n42 = e._rootElement;
          if (null !== _n42 && t.target === _n42) {
            var _i19 = t.clientY;
            var _s12 = _n42.childNodes.length;
            for (var _t64 = 0; _t64 < _n42.childNodes.length; _t64++) {
              var _e60 = _n42.childNodes[_t64];
              if (da(_e60)) {
                var _n43 = _e60.getBoundingClientRect();
                if (_i19 <= (_n43.top + _n43.bottom) / 2) {
                  _s12 = _t64;
                  break;
                }
              }
            }
            o.setBaseAndExtent(_n42, _s12, _n42, _s12);
            var _l7 = Li(r, o, e, t);
            null !== _l7 ? uc(_l7) : o.removeAllRanges();
          }
        }
        Ac(e, xn, t);
      });
    }
    function Io(t, e) {
      var n = fa(t),
        o = t.pointerType;
      ha(n) &&
        "touch" !== o &&
        "pen" !== o &&
        0 === t.button &&
        Ms(e, function () {
          Pa(n, e) || (e._inputState.isSelectionChangeFromMouseDown = !0);
        });
    }
    function Po(t) {
      if (!t.getTargetRanges) return null;
      var e = t.getTargetRanges();
      return 0 === e.length ? null : e[0];
    }
    function Ro(t) {
      var e = gs()._inputState.lastKeyCode;
      if (null == t || t.length <= 1 || null == e) return;
      var n =
        1 === e.length ? e : "Enter" === e ? "\n" : "Tab" === e ? "\t" : null;
      if (!n) return;
      var o = Bi();
      if (!fi(o) || !o.isCollapsed()) return;
      var r = o.anchor.getNode();
      if (!Xr(r)) return;
      var i = o.anchor.offset;
      if (r.getTextContentSize() === i) {
        var _t65 = r.getNextSibling();
        if ("\n" === n) {
          if (h) return;
          if (Xs(_t65)) _t65.selectEnd();
          else if (!_t65) {
            var _t66 = au(r, Fi),
              _e61 = _t66 && _t66.getNextSibling();
            Ls(_e61) && _e61.selectStart();
          }
        } else
          "\t" === n
            ? ni(_t65) && _t65.selectEnd()
            : Xr(_t65) && _t65.getTextContent()[0] === n && _t65.select(1, 1);
      } else r.getTextContent()[i] === n && r.select(i + 1, i + 1);
    }
    function Lo(t) {
      ((t.isInsertTextAfterHandledSelectionCommand = !1),
        null !== t.handledSelectionCommandTimeoutId &&
          (clearTimeout(t.handledSelectionCommandTimeoutId),
          (t.handledSelectionCommandTimeoutId = null)));
    }
    function Bo(t) {
      (Lo(t),
        (t.isInsertTextAfterHandledSelectionCommand = !0),
        (t.handledSelectionCommandTimeoutId = setTimeout(function () {
          return Lo(t);
        }, 0)));
    }
    function Ko(t, e) {
      var n = fa(t);
      if (da(n) && Pa(n, e)) return !0;
      var o = e.getRootElement();
      if (null === o) return !1;
      var r = ua(o.ownerDocument);
      return null !== r && o.contains(r) && Pa(r, e);
    }
    function zo(e) {
      var _ref29;
      var n = e.inputType,
        o = Po(e),
        r = gs(),
        i = r._inputState,
        s = Bi();
      if (
        "insertText" === n &&
        e.data &&
        i.isInsertTextAfterHandledSelectionCommand
      ) {
        if ((Lo(i), e.preventDefault(), fi(s) && !s.isCollapsed())) {
          var _t67 = s.isBackward() ? s.anchor : s.focus;
          (s.anchor.set(_t67.key, _t67.offset, _t67.type),
            s.focus.set(_t67.key, _t67.offset, _t67.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === s) {
          var _t68 = Ki();
          if (!fi(_t68)) return !0;
          uc(_t68.clone());
        }
        if (fi(s)) {
          var _n44 = s.anchor.key === s.focus.key;
          if (
            (function (t, e) {
              return (
                "MediaLast" === t.lastKeyCode && e < t.lastKeyDownTimeStamp + 30
              );
            })(i, e.timeStamp) &&
            r.isComposing() &&
            _n44
          ) {
            if (
              (Zl(null),
              (i.lastKeyDownTimeStamp = 0),
              setTimeout(function () {
                Ms(r, function () {
                  Zl(null);
                });
              }, 30),
              fi(s))
            ) {
              var _e62 = s.anchor.getNode();
              (_e62.markDirty(), Xr(_e62) || t(142), Do(s, _e62));
            }
          } else {
            if (
              (Zl(null),
              h &&
                null !== o &&
                !o.collapsed &&
                (s.applyDOMRange(o), !s.isCollapsed()))
            )
              return (e.preventDefault(), s.removeText(), !0);
            e.preventDefault();
            var _t69 = s.anchor.getNode(),
              _l8 = _t69.getTextContent(),
              _c7 = _t69.canInsertTextAfter(),
              _a5 = 0 === s.anchor.offset && s.focus.offset === _l8.length;
            var _u4 = m && _n44 && !_a5 && _c7;
            if (
              (_u4 && s.isCollapsed() && (_u4 = !zs(Ec(s.anchor, !0))), !_u4)
            ) {
              Ac(r, Nn, !0);
              var _t70 = Bi();
              m &&
                fi(_t70) &&
                _t70.isCollapsed() &&
                ((i.postDeleteSelectionToRestore = _t70),
                setTimeout(function () {
                  return (i.postDeleteSelectionToRestore = null);
                }));
            }
          }
          return !0;
        }
      }
      if (!fi(s))
        return (
          ("historyUndo" !== n && "historyRedo" !== n) ||
            (e.preventDefault(), Ac(r, "historyUndo" === n ? In : Pn)),
          !0
        );
      var l = e.data;
      (null !== i.unprocessedBeforeInputData &&
        mc(!1, r, i.unprocessedBeforeInputData),
        (s.dirty && null === i.unprocessedBeforeInputData) ||
          !s.isCollapsed() ||
          Ws(s.anchor.getNode()) ||
          null === o ||
          s.applyDOMRange(o),
        (i.unprocessedBeforeInputData = null));
      var c = s.anchor,
        a = s.focus,
        u = c.getNode(),
        f = a.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === l) (e.preventDefault(), Ac(r, bn, !1));
        else if (l === T) (e.preventDefault(), Ac(r, kn));
        else if (null == l && e.dataTransfer) {
          var _t71 = e.dataTransfer.getData("text/plain");
          (e.preventDefault(), s.insertRawText(_t71));
        } else
          null != l && Eo(s, o, l, e.timeStamp, !0)
            ? (e.preventDefault(), Ac(r, On, l), Ro(l))
            : (i.unprocessedBeforeInputData = l);
        return ((i.lastBeforeInputInsertTextTimeStamp = e.timeStamp), !0);
      }
      switch ((e.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          (Ac(r, On, e),
            Ro(
              (_ref29 = e.dataTransfer
                ? e.dataTransfer.getData("text/plain")
                : null) != null
                ? _ref29
                : e.data,
            ));
          break;
        case "insertFromComposition": {
          var _t72 = i.hadOrphanedCompositionEvents;
          i.hadOrphanedCompositionEvents = !1;
          var _n45 = r._compositionKey;
          (Zl(null), _t72 || Ac(r, On, e), Vo(_n45));
          break;
        }
        case "insertLineBreak":
          (Zl(null), Ac(r, bn, !1));
          break;
        case "insertParagraph":
          (Zl(null),
            i.isInsertLineBreak && !h
              ? ((i.isInsertLineBreak = !1), Ac(r, bn, !1))
              : Ac(r, kn));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          Ac(r, En, e);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || Ls(t) || Ls(e) || !Ul(t) || !Ul(e);
          })(u, f) && Ac(r, Mn, e);
          break;
        case "deleteByDrag":
          (Ic(yr), Ac(r, Mn, e));
          break;
        case "deleteByCut":
          Ac(r, Mn, e);
          break;
        case "deleteContent":
          Ac(r, Nn, !1);
          break;
        case "deleteWordBackward":
          Ac(r, An, !0);
          break;
        case "deleteWordForward":
          Ac(r, An, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          Ac(r, wn, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          Ac(r, wn, !1);
          break;
        case "formatStrikeThrough":
          Ac(r, Dn, "strikethrough");
          break;
        case "formatBold":
          Ac(r, Dn, "bold");
          break;
        case "formatItalic":
          Ac(r, Dn, "italic");
          break;
        case "formatUnderline":
          Ac(r, Dn, "underline");
          break;
        case "historyUndo":
          Ac(r, In);
          break;
        case "historyRedo":
          Ac(r, Pn);
      }
      return !0;
    }
    function $o(t, e) {
      t.stopPropagation();
      var n = e._inputState;
      (Lo(n),
        Ms(
          e,
          function () {
            Ko(t, e) || e.dispatchCommand(Sn, t);
          },
          { event: t },
        ),
        (n.unprocessedBeforeInputData = null));
    }
    function Wo(t) {
      var e = gs(),
        n = e._inputState,
        o = Bi(),
        r = t.data,
        i = Po(t);
      var s = !1;
      if (null != r && fi(o)) {
        var _l9 = Gc(Bc(e)),
          _c8 = null !== _l9 ? ia(_l9, e._rootElement) : null,
          _u5 =
            "insertCompositionText" === t.inputType &&
            "ending-firefox" !== n.compositionPhase &&
            !e.isComposing();
        _u5 && (n.hadOrphanedCompositionEvents = !0);
        var _d5 = o.anchor.getNode(),
          _h5 =
            "insertCompositionText" === t.inputType &&
            "ending-firefox" !== n.compositionPhase &&
            e.isComposing() &&
            Xr(_d5) &&
            jl(_d5);
        if (!_u5 && !_h5 && Eo(o, i, r, t.timeStamp, !1, _c8)) {
          if (((s = !0), "ending-firefox" === n.compositionPhase)) {
            var _t73 = Jo(e, r);
            if (((n.compositionPhase = "idle"), _t73))
              return (Ic(Cr), fc(), !0);
          }
          var _i20 = o.anchor.getNode();
          if (null === _l9 || null === _c8) return !0;
          var _u6 = o.isBackward(),
            _d6 = _u6 ? o.anchor.offset : o.focus.offset,
            _h6 = _u6 ? o.focus.offset : o.anchor.offset;
          (f &&
            !o.isCollapsed() &&
            Xr(_i20) &&
            null !== _c8.anchorNode &&
            _i20.getTextContent().slice(0, _d6) +
              r +
              _i20.getTextContent().slice(_d6 + _h6) ===
              pc(_c8.anchorNode)) ||
            Ac(e, On, r);
          var _g5 = r.length;
          (a &&
            _g5 > 1 &&
            "insertCompositionText" === t.inputType &&
            !e.isComposing() &&
            ((o.anchor.offset -= _g5),
            (o._cachedNodes = null),
            (o._cachedIsBackward = null)),
            m && e.isComposing() && ((n.lastKeyDownTimeStamp = 0), Zl(null)));
        }
      }
      return (
        s ||
          (mc(!1, e, null !== r ? r : void 0),
          "ending-firefox" === n.compositionPhase &&
            (Jo(e, r || void 0), Ic(Cr), (n.compositionPhase = "idle"))),
        fc(),
        !0
      );
    }
    function Uo(t, e) {
      Ac(e, Tn, t);
    }
    function jo(t) {
      var e = gs(),
        n = e._inputState,
        o = Bi();
      if (fi(o) && !e.isComposing()) {
        ((n.compositionPhase = "composing"),
          (n.hadOrphanedCompositionEvents = !1));
        var _r26 = o.anchor,
          _i21 = o.anchor.getNode();
        if (
          (Zl(_r26.key),
          Ic(xr),
          t.timeStamp < n.lastKeyDownTimeStamp + 30 ||
            "element" === _r26.type ||
            !o.isCollapsed() ||
            (!m &&
              (_i21.getFormat() !== o.format ||
                (Xr(_i21) && _i21.getStyle() !== o.style))) ||
            (Xr(_i21) &&
              (jl(_i21) ||
                (0 === _r26.offset && !_i21.canInsertTextBefore()) ||
                (_r26.offset === _i21.getTextContentSize() &&
                  !_i21.canInsertTextAfter()))))
        ) {
          Ac(e, On, v);
          var _t74 = Bi();
          fi(_t74) && Zl(_t74.anchor.key);
        }
      }
      return !0;
    }
    function Ho(t) {
      var e = gs();
      return (
        (e._inputState.compositionPhase = "idle"),
        Jo(e, t.data),
        Ic(Cr),
        !0
      );
    }
    function Vo(t) {
      if (null === t) return;
      var e = ec(t);
      if (!Xr(e) || "text" === e.getType() || jl(e) || !e.isAttached()) return;
      var n = Bi(),
        o = fi(n) && n.anchor.key === t ? n.anchor.offset : null,
        r = qr(e.getTextContent());
      if (
        (r.setFormat(e.getFormat()),
        r.setStyle(e.getStyle()),
        e.replace(r),
        null !== o)
      ) {
        var _t75 = Math.min(o, r.getTextContentSize());
        r.select(_t75, _t75);
      }
    }
    function Jo(t, e) {
      var n = t._compositionKey;
      if ((Zl(null), null !== n && null != e)) {
        if ("" === e) {
          var _e63 = ec(n),
            _o28 = t.getElementByKey(n),
            _r27 = null !== _o28 && Xr(_e63) ? Na(_e63, _o28, t) : null;
          if (null !== _r27 && null !== _r27.nodeValue && Xr(_e63)) {
            var _n46 = Gc(Bc(t)),
              _o29 = _n46 && ia(_n46, t._rootElement);
            var _i22 = null,
              _s13 = null;
            (null !== _o29 &&
              _o29.anchorNode === _r27 &&
              ((_i22 = _o29.anchorOffset), (_s13 = _o29.focusOffset)),
              yc(_e63, _r27.nodeValue, _i22, _s13, !0));
          }
          return (Vo(n), !1);
        }
        if ("\n" === e[e.length - 1]) {
          var _e64 = Bi();
          if (fi(_e64) || hi(_e64)) {
            if (fi(_e64)) {
              var _t76 = _e64.focus;
              _e64.anchor.set(_t76.key, _t76.offset, _t76.type);
            }
            return (Ac(t, Un, null), Vo(n), !1);
          }
        }
        var _o30 = ec(n);
        if (null !== _o30 && Xr(_o30) && jl(_o30)) {
          _o30.markDirty();
          var _t77 = Bi(),
            _r28 = _o30.getTextContentSize(),
            _i23 =
              fi(_t77) && _t77.anchor.key === n ? _t77.anchor.offset : _r28;
          return (_o30.select(_i23, _i23).insertText(e), !0);
        }
      }
      return (mc(!0, t, e), Vo(n), !1);
    }
    function Yo(t, e) {
      var n = e._inputState;
      a
        ? (n.compositionPhase = "ending-firefox")
        : h || (!_ && !y)
          ? Ac(e, vn, t)
          : ((n.compositionPhase = "ending-safari"),
            (n.compositionEndData = t.data));
    }
    function Go(t, e) {
      var n = e._inputState;
      ((n.lastKeyDownTimeStamp = t.timeStamp),
        (n.lastKeyCode = t.key),
        "Backspace" !== t.key && Lo(n),
        e.isComposing() || Ac(e, Rn, t));
    }
    var qo = { altKey: "any", ctrlKey: "any", metaKey: "any", shiftKey: "any" },
      Xo = { ctrlKey: !0 },
      Qo = { metaKey: !0 },
      Zo = { shiftKey: "any" },
      tr = { altKey: "any", shiftKey: "any" };
    function er(t) {
      var e = gs(),
        n = e._inputState;
      if (null == t.key) return !0;
      if ("ending-safari" === n.compositionPhase) {
        var _o31 = (function (t) {
          return "Backspace" === t.key;
        })(t);
        if (
          (_o31 &&
            Ms(e, function () {
              Jo(e, n.compositionEndData);
            }),
          (n.compositionPhase = "idle"),
          (n.compositionEndData = ""),
          _o31)
        )
          return !0;
      }
      var o = e._keyDownShortcuts;
      null === o &&
        ((o = Co(
          (function () {
            var t = function t(_t78, e, n) {
                return {
                  key: _t78,
                  modifiers: e,
                  onMatch: function onMatch(t, e) {
                    Ac(e, n, t);
                  },
                };
              },
              e = function e(t, _e65, n, o) {
                return {
                  key: t,
                  modifiers: _e65,
                  onMatch: function onMatch(t, e) {
                    (t.preventDefault(), Ac(e, n, o));
                  },
                };
              },
              n = function n(t, e) {
                return {
                  key: "Enter",
                  modifiers: t,
                  onMatch: function onMatch(t, n) {
                    ((n._inputState.isInsertLineBreak = e), Ac(n, Un, t));
                  },
                };
              },
              o = function o(t, e) {
                return {
                  key: t,
                  modifiers: _o,
                  onMatch: function onMatch(t, n) {
                    var o = n._editorState._selection;
                    null === o || fi(o) || (t.preventDefault(), Ac(n, e, t));
                  },
                };
              };
            return [
              t("ArrowRight", Zo, Ln),
              t("ArrowLeft", Zo, Kn),
              t("ArrowUp", tr, $n),
              t("ArrowDown", tr, Wn),
              n(babelHelpers["extends"]({}, qo, { shiftKey: !0 }), !0),
              n(babelHelpers["extends"]({}, qo, { shiftKey: !1 }), !1),
              t(" ", qo, jn),
              {
                key: "Backspace",
                modifiers: Zo,
                onMatch: function onMatch(t, e) {
                  Ac(e, Hn, t) && Bo(e._inputState);
                },
              },
              t("Escape", qo, Vn),
              t("Delete", {}, Jn),
              e("Backspace", po, An, !0),
              e("Delete", po, An, !1),
              e("b", _o, Dn, "bold"),
              e("u", _o, Dn, "underline"),
              e("i", _o, Dn, "italic"),
              t("Tab", Zo, Yn),
              e("z", _o, In, void 0),
              e(
                "z",
                babelHelpers["extends"]({}, _o, { shiftKey: !0 }),
                Pn,
                void 0,
              ),
            ].concat(
              Array.from(
                c
                  ? [
                      {
                        key: "o",
                        modifiers: Xo,
                        onMatch: function onMatch(t, e) {
                          (t.preventDefault(),
                            (e._inputState.isInsertLineBreak = !0),
                            Ac(e, bn, !0));
                        },
                      },
                      t(
                        "ArrowLeft",
                        babelHelpers["extends"]({ metaKey: !0 }, Zo),
                        zn,
                      ),
                      t(
                        "ArrowRight",
                        babelHelpers["extends"]({ metaKey: !0 }, Zo),
                        Bn,
                      ),
                      e("h", Xo, Nn, !0),
                      e("d", Xo, Nn, !1),
                      e("Backspace", Qo, wn, !0),
                      e("Delete", Qo, wn, !1),
                      e("k", Xo, wn, !1),
                    ]
                  : [
                      t("Home", Zo, zn),
                      t("End", Zo, Bn),
                      e("y", Xo, Pn, void 0),
                    ],
              ),
              [
                {
                  key: "a",
                  modifiers: _o,
                  onMatch: function onMatch(t, e) {
                    (t.preventDefault(), Ac(e, io, t) && Bo(e._inputState));
                  },
                },
                o("c", oo),
                o("x", ro),
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
        })(t) && e.dispatchCommand(ho, t),
        !0
      );
    }
    function nr(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    var or = new Map();
    function rr(t) {
      var e = qc(t.target);
      if (null === e) return;
      var n = Fc(t.target);
      var o = null,
        r = null;
      var i = null !== n ? ko.get(n) : void 0;
      if (null !== n) {
        if (void 0 !== i) {
          var _t79 = i.editors;
          var _n47 = i.hasShadowEditor;
          if (void 0 === _n47) {
            _n47 = !1;
            for (var _e66 of _t79)
              if (
                null !== _e66._rootElement &&
                Xc(_e66._rootElement.getRootNode())
              ) {
                _n47 = !0;
                break;
              }
            i.hasShadowEditor = _n47;
          }
          if (_n47) {
            var _n48 = null,
              _i24 = null;
            for (var _s14 of _t79) {
              var _t80 = _s14._rootElement;
              if (null === _t80) continue;
              var _l0 = ia(e, _t80).anchorNode;
              if (null !== _l0 && $l(_l0) === _s14) {
                if (Xc(_t80.getRootNode())) {
                  ((o = _s14), (r = _l0));
                  break;
                }
                null === _n48 && ((_n48 = _s14), (_i24 = _l0));
              }
            }
            null === o && null !== _n48 && ((o = _n48), (r = _i24));
          } else {
            var _t81 = e.anchorNode;
            null === _t81 ||
              (da(_t81) && null !== _t81.shadowRoot) ||
              ((o = $l(_t81)), null !== o && (r = _t81));
          }
        }
        if (null === o) {
          var _t82 = ua(n);
          o = null !== _t82 ? $l(_t82) : null;
        }
      }
      if (null === o) return;
      if (o._inputState.isSelectionChangeFromMouseDown) {
        if (void 0 !== i)
          for (var _t83 of i.editors)
            _t83._inputState.isSelectionChangeFromMouseDown = !1;
        Ms(o, function () {
          var n = Ki(),
            i = r != null ? r : ia(e, o._rootElement).anchorNode;
          (da(i) || Hl(i)) && uc(Li(n, e, o, t));
        });
      }
      var s = gc(o),
        l = s[s.length - 1],
        c = l._key,
        a = or.get(c),
        u = a || l;
      (u !== o && Ao(e, u, !1),
        Ao(e, o, !0),
        o !== l ? or.set(c, o) : a && or["delete"](c));
    }
    function ir(t) {
      t._lexicalHandled = !0;
    }
    function sr(t) {
      return !0 === t._lexicalHandled;
    }
    var lr = _n();
    function cr(e, n, o) {
      fs();
      var r = e.__key,
        i = e.getParent();
      if (null === i) return void (null !== _u(e) && t(367, r, String(_u(e))));
      var s = (function (t) {
        var e = Bi();
        if (!fi(e) || !Ls(t)) return e;
        var n = e.anchor,
          o = e.focus,
          r = n.getNode(),
          i = o.getNode();
        return (
          Rc(r, t) && n.set(t.__key, 0, "element"),
          Rc(i, t) && o.set(t.__key, 0, "element"),
          e
        );
      })(e);
      var l = !1;
      if (fi(s) && n) {
        var _t84 = s.anchor,
          _n49 = s.focus;
        (_t84.key === r &&
          (Ui(_t84, e, i, e.getPreviousSibling(), e.getNextSibling()),
          (l = !0)),
          _n49.key === r &&
            (Ui(_n49, e, i, e.getPreviousSibling(), e.getNextSibling()),
            (l = !0)));
      } else hi(s) && n && e.isSelected() && e.selectPrevious();
      if (fi(s) && n && !l && zi(s, i)) {
        var _t85 = e.getIndexWithinParent();
        (ql(e), $i(s, i, _t85, -1));
      } else ql(e);
      (o || Wc(i) || i.canBeEmpty() || !i.isEmpty() || cr(i, n),
        n && s && Ws(i) && i.isEmpty() && i.selectEnd());
    }
    var ar = Symbol["for"]("ephemeral");
    function ur(t) {
      return t[ar] || !1;
    }
    var fr = { configurable: !0, enumerable: !1, value: void 0, writable: !0 };
    var _dr5 = (function () {
      function dr(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", fr),
          Object.defineProperty(this, pe, fr),
          Gl(this, t));
      }
      dr.getType = function getType() {
        var _nu = nu(this),
          e = _nu.ownNodeType;
        return (void 0 === e && t(64, this.name), e);
      };
      dr.clone = function clone(e) {
        t(65, this.name);
      };
      var _proto7 = dr.prototype;
      _proto7.$config = function $config() {
        return {};
      };
      _proto7.config = function config(t, e) {
        var _ref30;
        var n = e["extends"] || fu(this.constructor);
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
          var _e67 = ec(t);
          if (null === _e67) break;
          t = null !== _e67.__parent ? _e67.__parent : _u(_e67);
        }
        return !1;
      };
      _proto7.isSelected = function isSelected(t) {
        var _this13 = this;
        var e = t || Bi();
        if (null == e) return !1;
        var n = e.getNodes().some(function (t) {
          return t.__key === _this13.__key;
        });
        if (Xr(this)) return n;
        if (
          fi(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t86 = this.getParent();
          if (zs(this) && this.isInline() && _t86) {
            var _n50 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t86.is(_n50.getNode()) &&
              _n50.offset === _t86.getChildrenSize() &&
              this.is(_t86.getLastChild())
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
        return null === t ? null : ec(t);
      };
      _proto7.getParentOrThrow = function getParentOrThrow() {
        var e = this.getParent();
        return (null === e && t(66, this.__key), e);
      };
      _proto7.getTopLevelElement = function getTopLevelElement() {
        var e = this;
        for (; null !== e; ) {
          var _n51 = e.getParent();
          if (Wc(_n51) || null !== _u(e))
            return (Ls(e) || (e === this && zs(e)) || t(194), e);
          e = _n51;
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
        return null === t ? null : ec(t);
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
        return null === t ? null : ec(t);
      };
      _proto7.getNextSiblings = function getNextSiblings() {
        var t = [];
        var e = this.getNextSibling();
        for (; null !== e; ) (t.push(e), (e = e.getNextSibling()));
        return t;
      };
      _proto7.getCommonAncestor = function getCommonAncestor(t) {
        var e = Ls(this) ? this : this.getParent(),
          n = Ls(t) ? t : t.getParent(),
          o = e && n ? ff(e, n) : null;
        return o ? o.commonAncestor : null;
      };
      _proto7.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto7.isBefore = function isBefore(e) {
        var n = ff(this, e);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === cf(n)
              : ("same" !== n.type && "ancestor" !== n.type && t(279), !1)))
        );
      };
      _proto7.isParentOf = function isParentOf(t) {
        return Rc(t, this);
      };
      _proto7.getNodesBetween = function getNodesBetween(e) {
        var n = this.isBefore(e),
          o = [],
          r = new Set();
        var i = this;
        for (; null !== i; ) {
          var _s15 = i.__key;
          if ((r.has(_s15) || (r.add(_s15), o.push(i)), i === e)) break;
          var _l1 = Ls(i) ? (n ? i.getFirstChild() : i.getLastChild()) : null;
          if (null !== _l1) {
            i = _l1;
            continue;
          }
          var _c9 = n ? i.getNextSibling() : i.getPreviousSibling();
          if (null !== _c9) {
            i = _c9;
            continue;
          }
          var _a6 = i.getParentOrThrow();
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
          i = _u7;
        }
        return (n || o.reverse(), o);
      };
      _proto7.isDirty = function isDirty() {
        var t = gs()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto7.getLatest = function getLatest() {
        if (ur(this)) return this;
        var e = ec(this.__key);
        return (null === e && t(113), e);
      };
      _proto7.getWritable = function getWritable() {
        if (ur(this)) return this;
        fs();
        var e = hs(),
          n = gs(),
          o = this.__key,
          r = n._cloneNotNeeded,
          i = r.get(o),
          s = e._selection;
        if ((null !== s && s.setCachedNodes(null), void 0 !== i))
          return (Ql(i), i);
        var l = e._nodeMap,
          c = l.get(o);
        void 0 === c && t(113);
        var a = Ea(c);
        return (r.set(o, a), l.set(o, a), Ql(a), a);
      };
      _proto7.getTextContent = function getTextContent() {
        return Eu(this);
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
        return new _j2(t);
      };
      _proto7.exportDOM = function exportDOM(t) {
        return { element: this.createDOM(t._config, t) };
      };
      _proto7.exportJSON = function exportJSON(t) {
        if (t === void 0) {
          t = !1;
        }
        var e = (function (t, e) {
            var n = Ka(Ba(t.constructor)),
              o = n.generated,
              r = n.isCompactDefault,
              i = null === o ? void 0 : e ? o.exportCompactJSON : o.exportJSON;
            return void 0 === i
              ? (function (t, e, n) {
                  var o = n ? { type: t.__type } : {};
                  return (
                    Ls(t) && (o.children = []),
                    (function (t, e, n, o) {
                      for (var _r29 = 0; _r29 < e.length; _r29++) {
                        var _i25 = e[_r29];
                        if (o && _i25.derived) continue;
                        var _s16 = void 0;
                        if ("ownField" === _i25.kind) {
                          var _e68 = Xa(t)[_i25.field];
                          _s16 =
                            void 0 === _i25.getterTable
                              ? _e68
                              : Lt(_i25.getterTable, _e68)
                                ? _i25.getterTable[_e68]
                                : void 0;
                        } else _s16 = _i25.getter.call(t);
                        ("ownField" === _i25.kind &&
                          void 0 !== _i25.when &&
                          ((!Qa(_i25, _s16) && _i25.when.call(t)) ||
                            (_s16 = void 0)),
                          (o && Qa(_i25, _s16)) || (n[_i25.key] = _s16));
                      }
                    })(t, e, o, n),
                    n || ((o.type = t.__type), (o.version = 1)),
                    o
                  );
                })(t, n.getters, e)
              : e
                ? i(t, r)
                : i(t);
          })(this, t),
          n = this.__state ? this.__state.toJSON() : void 0;
        return (void 0 !== n && Object.assign(e, n), e);
      };
      dr.importJSON = function importJSON(e) {
        t(18, this.name);
      };
      _proto7.updateFromJSON = function updateFromJSON(t) {
        return eu(ie(this, t), t);
      };
      dr.transform = function transform() {
        return null;
      };
      _proto7.remove = function remove(t) {
        cr(this, !0, t);
      };
      _proto7.replace = function replace(e, n) {
        fs();
        var o = Bi();
        (null !== o && (o = o.clone()), Hc(this, e));
        var r = this.getLatest(),
          i = this.__key,
          s = pu(r);
        null !== s && t(400, i, r.getType(), s.getKey(), s.getType());
        var l = e.__key,
          c = e.getWritable(),
          a = this.getParentOrThrow().getWritable(),
          u = a.__size,
          f = c.getParent(),
          d = null !== f && fi(o) && zi(o, f),
          h = d ? c.getIndexWithinParent() : -1;
        (ql(c), d && null !== f && fi(o) && $i(o, f, h, -1));
        var g = r.getPreviousSibling(),
          _ = r.getNextSibling(),
          p = r.__prev,
          m = r.__next,
          y = r.__parent;
        (cr(r, !1, !0),
          null === g ? (a.__first = l) : (g.getWritable().__next = l),
          (c.__prev = p),
          null === _ ? (a.__last = l) : (_.getWritable().__prev = l),
          (c.__next = m),
          (c.__parent = y),
          (a.__size = null !== f && f.is(a) ? u - 1 : u));
        var x = 0;
        if (
          (n &&
            ((Ls(this) && Ls(c)) || t(139),
            (x = c.getChildrenSize()),
            c.splice(x, 0, this.getChildren())),
          fi(o))
        ) {
          uc(o);
          var _t87 = o.anchor,
            _e69 = o.focus;
          (_t87.key === i &&
            (n && "element" === _t87.type
              ? _t87.set(c.__key, x + _t87.offset, "element")
              : si(_t87, c)),
            _e69.key === i &&
              (n && "element" === _e69.type
                ? _e69.set(c.__key, x + _e69.offset, "element")
                : si(_e69, c)));
        }
        return (tc() === i && Zl(l), c);
      };
      _proto7.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (fs(), Hc(this, t));
        var n = this.getWritable(),
          o = t.getWritable();
        this.getParentOrThrow();
        var r = o.getParent(),
          i = Bi();
        var s = !1,
          l = !1,
          c = -1;
        if (null !== r && e && fi(i) && zi(i, r)) {
          var _e70 = r.__key,
            _n52 = i.anchor,
            _o32 = i.focus;
          ((c = t.getIndexWithinParent()),
            (s =
              "element" === _n52.type &&
              _n52.key === _e70 &&
              _n52.offset === c + 1),
            (l =
              "element" === _o32.type &&
              _o32.key === _e70 &&
              _o32.offset === c + 1));
        }
        (ql(o), -1 !== c && null !== r && fi(i) && $i(i, r, c, -1));
        var a = this.getNextSibling(),
          u = this.getParentOrThrow().getWritable(),
          f = o.__key,
          d = n.__next;
        if (
          (null === a ? (u.__last = f) : (a.getWritable().__prev = f),
          u.__size++,
          (n.__next = f),
          (o.__next = d),
          (o.__prev = n.__key),
          (o.__parent = n.__parent),
          e && fi(i))
        ) {
          var _t88 = u.__key;
          if (s || l || zi(i, u)) {
            var _e71 = this.getIndexWithinParent();
            ($i(i, u, _e71 + 1),
              s && i.anchor.set(_t88, _e71 + 2, "element"),
              l && i.focus.set(_t88, _e71 + 2, "element"));
          }
        }
        return t;
      };
      _proto7.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (fs(), Hc(this, t));
        var n = this.getWritable(),
          o = t.getWritable();
        this.getParentOrThrow();
        var r = o.__key,
          i = Bi(),
          s = o.getParent(),
          l = null !== s && e && fi(i) && zi(i, s),
          c = l ? o.getIndexWithinParent() : -1;
        (ql(o), l && null !== s && fi(i) && $i(i, s, c, -1));
        var a = this.getPreviousSibling(),
          u = this.getParentOrThrow().getWritable(),
          f = n.__prev,
          d = e && fi(i) && zi(i, u),
          h = d ? this.getIndexWithinParent() : -1;
        return (
          null === a ? (u.__first = r) : (a.getWritable().__next = r),
          u.__size++,
          (n.__prev = r),
          (o.__prev = f),
          (o.__next = n.__key),
          (o.__parent = n.__parent),
          d && fi(i) && $i(i, u, h),
          t
        );
      };
      _proto7.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto7.createParentElementNode = function createParentElementNode() {
        return Sl();
      };
      _proto7.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto7.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto7.selectPrevious = function selectPrevious(t, e) {
        fs();
        var n = pu(this);
        if (null !== n) return n.selectPrevious(t, e);
        var o = this.getPreviousSibling(),
          r = this.getParentOrThrow();
        if (null === o) return r.select(0, 0);
        if (Ls(o)) return o.select();
        if (!Xr(o)) {
          var _t89 = o.getIndexWithinParent() + 1;
          return r.select(_t89, _t89);
        }
        return o.select(t, e);
      };
      _proto7.selectNext = function selectNext(t, e) {
        fs();
        var n = pu(this);
        if (null !== n) return n.selectNext(t, e);
        var o = this.getNextSibling(),
          r = this.getParentOrThrow();
        if (null === o) return r.select();
        if (Ls(o)) return o.select(0, 0);
        if (!Xr(o)) {
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
      return dr;
    })();
    function hr(t) {
      return t instanceof _dr5;
    }
    var gr = "history-merge",
      _r = "collaboration",
      pr = "skip-scroll-into-view",
      mr = "skip-dom-selection",
      yr = "skip-selection-focus",
      xr = "composition-start",
      Cr = "composition-end",
      Sr = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
    function Tr(t, e) {
      if ("number" == typeof t) return Number.isFinite(t) ? t : e;
      if ("string" != typeof t || !Sr.test(t)) return e;
      var n = Number(t);
      return Number.isFinite(n) ? n : e;
    }
    function vr(t, e, n, o, r) {
      var i = Tr(t, e);
      return i >= n && i <= o && Number.isInteger(i) ? i : e;
    }
    var Nr = function Nr(t) {
      var e = yt(t, "format"),
        n = xt(t, "format"),
        o = St(t, "format");
      return {
        exportJSON: function exportJSON(t) {
          var n = t.__textFormat,
            o = t.__textStyle,
            r = (0 !== n || "" !== o) && t.shouldSerializeTextStyles();
          return {
            children: [],
            direction: t.__dir,
            format: e[t.__format],
            indent: t.__indent,
            textFormat: 0 !== n && r ? n : void 0,
            textStyle: "" !== o && r ? o : void 0,
            type: t.__type,
            version: 1,
          };
        },
        exportCompactJSON: function exportCompactJSON(t) {
          var n = t.__textFormat,
            o = t.__textStyle,
            r = (0 !== n || "" !== o) && t.shouldSerializeTextStyles(),
            i = { type: t.__type, children: [] },
            s = t.__dir;
          null != s && (i.direction = s);
          var l = e[t.__format];
          void 0 !== l && "" !== l && (i.format = l);
          var c = t.__indent;
          return (
            void 0 !== c && 0 !== c && (i.indent = c),
            void 0 !== n && 0 !== n && r && (i.textFormat = n),
            void 0 !== o && "" !== o && r && (i.textStyle = o),
            i
          );
        },
        updateFromJSON: function updateFromJSON(t, e) {
          var r = e.direction;
          t.__dir = null === r || "ltr" === r || "rtl" === r ? r : null;
          var i = e.format;
          ((t.__format = "string" == typeof i && i in n ? n[i] : o),
            (t.__indent = vr(e.indent, 0, 0, Infinity)),
            (t.__textFormat = Tr(e.textFormat, 0)));
          var s = e.textStyle;
          return ((t.__textStyle = "string" == typeof s ? s : ""), t);
        },
      };
    };
    function br(t, e) {
      ((t.__detail = e.__detail),
        (t.__format = e.__format),
        (t.__mode = e.__mode),
        (t.__style = e.__style),
        (t.__text = e.__text));
    }
    var kr = function kr(t) {
        var e = yt(t, "mode"),
          n = Ct(t, "detail", 0),
          o = Ct(t, "format", 0),
          r = xt(t, "mode"),
          i = St(t, "mode");
        return {
          exportJSON: function exportJSON(t) {
            return {
              detail: t.__detail,
              format: t.__format,
              mode: e[t.__mode],
              style: t.__style,
              text: t.__text,
              type: t.__type,
              version: 1,
            };
          },
          exportCompactJSON: function exportCompactJSON(t) {
            var n = { type: t.__type },
              o = t.__detail;
            void 0 !== o && 0 !== o && (n.detail = o);
            var r = t.__format;
            void 0 !== r && 0 !== r && (n.format = r);
            var i = e[t.__mode];
            void 0 !== i && "normal" !== i && (n.mode = i);
            var s = t.__style;
            void 0 !== s && "" !== s && (n.style = s);
            var l = t.__text;
            return (void 0 !== l && "" !== l && (n.text = l), n);
          },
          updateFromJSON: function updateFromJSON(t, e) {
            var s = e.detail;
            t.__detail = "string" == typeof s && s in n ? n[s] : Tr(s, 0);
            var l = e.format;
            t.__format = "string" == typeof l && l in o ? o[l] : Tr(l, 0);
            var c = e.mode;
            t.__mode = "string" == typeof c && c in r ? r[c] : i;
            var a = e.style;
            t.__style = "string" == typeof a ? a : "";
            var u = e.text;
            return ((t.__text = "string" == typeof u ? u : ""), t);
          },
          afterCloneFrom: br,
        };
      },
      Or = function Or(t) {
        var e = yt(t, "format"),
          n = xt(t, "format"),
          o = St(t, "format");
        return {
          exportJSON: function exportJSON(t) {
            var n = t.__textFormat,
              o = t.__textStyle,
              r = (0 !== n || "" !== o) && t.shouldSerializeTextStyles();
            return {
              children: [],
              direction: t.__dir,
              format: e[t.__format],
              indent: t.__indent,
              textFormat: 0 !== n && r ? n : void 0,
              textStyle: "" !== o && r ? o : void 0,
              type: t.__type,
              version: 1,
            };
          },
          exportCompactJSON: function exportCompactJSON(t) {
            var n = t.__textFormat,
              o = t.__textStyle,
              r = (0 !== n || "" !== o) && t.shouldSerializeTextStyles(),
              i = { type: t.__type, children: [] },
              s = t.__dir;
            null != s && (i.direction = s);
            var l = e[t.__format];
            void 0 !== l && "" !== l && (i.format = l);
            var c = t.__indent;
            return (
              void 0 !== c && 0 !== c && (i.indent = c),
              void 0 !== n && 0 !== n && r && (i.textFormat = n),
              void 0 !== o && "" !== o && r && (i.textStyle = o),
              i
            );
          },
          updateFromJSON: function updateFromJSON(t, e) {
            var r = e.direction;
            t.__dir = null === r || "ltr" === r || "rtl" === r ? r : null;
            var i = e.format;
            ((t.__format = "string" == typeof i && i in n ? n[i] : o),
              (t.__indent = vr(e.indent, 0, 0, Infinity)),
              (t.__textFormat = Tr(e.textFormat, 0)));
            var s = e.textStyle;
            return ((t.__textStyle = "string" == typeof s ? s : ""), t);
          },
        };
      },
      Er = function Er() {
        return {
          exportJSON: function exportJSON(t) {
            return { type: t.__type, version: 1 };
          },
          exportCompactJSON: function exportCompactJSON(t) {
            return { type: t.__type };
          },
        };
      },
      Mr = function Mr(t) {
        var e = yt(t, "mode"),
          n = Ct(t, "format", 0);
        return {
          exportJSON: function exportJSON(t) {
            return {
              detail: t.__detail,
              mode: e[t.__mode],
              text: t.__text,
              format: t.__format,
              style: t.__style,
              type: t.__type,
              version: 1,
            };
          },
          exportCompactJSON: function exportCompactJSON(t) {
            var e = { type: t.__type },
              n = t.__format;
            void 0 !== n && 0 !== n && (e.format = n);
            var o = t.__style;
            return (void 0 !== o && "" !== o && (e.style = o), e);
          },
          updateFromJSON: function updateFromJSON(t, e) {
            var o = e.format;
            t.__format = "string" == typeof o && o in n ? n[o] : Tr(o, 0);
            var r = e.style;
            return ((t.__style = "string" == typeof r ? r : ""), t);
          },
        };
      };
    function Ar(t) {
      var e = {};
      if (!t) return e;
      var n = "",
        o = "",
        r = null,
        i = !1,
        s = !1,
        l = !1,
        c = 0;
      var a = t.length;
      var u = -1;
      for (var _f6 = 0; _f6 < a; _f6++) {
        var _a7 = t[_f6];
        if (i) "*" === _a7 && "/" === t[_f6 + 1] && ((i = !1), _f6++);
        else if (s) (-1 === u && (u = _f6), (s = !1));
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
                      var _r30 = n.trim(),
                        _i26 = o.trim();
                      ("" !== _r30 && "" !== _i26 && (e[_r30] = _i26),
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
              (i = !0),
              _f6++);
        } else
          (-1 === u && (u = _f6),
            "\\" === _a7 ? (s = !0) : _a7 === r && (r = null));
      }
      -1 !== u && (l ? (o += t.slice(u, a)) : (n += t.slice(u, a)));
      var f = n.trim(),
        d = o.trim();
      return ("" !== f && "" !== d && (e[f] = d), e);
    }
    function wr(t, e, n) {
      var o = n.trimEnd(),
        r = o.length - 10;
      r >= 0 && "!important" === o.slice(r).toLowerCase()
        ? t.setProperty(e, o.slice(0, r).trim(), "important")
        : t.setProperty(e, n, "");
    }
    function Dr(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var o = Ar(n),
        r = Ar(e);
      for (var _e72 in r) (delete o[_e72], wr(t, _e72, r[_e72]));
      for (var _e73 in o) t.removeProperty(_e73);
    }
    var Fr = Ht()({
      detail: Jt(Vt(Wt(), A), { field: "__detail" }),
      format: Jt(Vt(Wt(), M), { field: "__format" }),
      mode: Jt(Ut(["normal", "token", "segmented"]), {
        field: "__mode",
        getterTable: P,
        setterTable: I,
      }),
      style: Jt(zt(), { field: "__style" }),
      text: Jt(zt(), {
        field: "__text",
        getter: "getTextContent",
        setter: "setTextContent",
      }),
    });
    function Ir(t, e) {
      return 16 & e
        ? "code"
        : 128 & e
          ? "mark"
          : 32 & e
            ? "sub"
            : 64 & e
              ? "sup"
              : null;
    }
    function Pr(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function Rr(t, e, n, o, r) {
      var i = o.classList;
      var s = bc(r, "base");
      (void 0 !== s && i.add.apply(i, Array.from(s)),
        (s = bc(r, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== s &&
        (8 & n && 4 & n
          ? ((l = !0), c || i.add.apply(i, Array.from(s)))
          : c && i.remove.apply(i, Array.from(s)));
      for (var _t91 in M) {
        var _o33 = M[_t91];
        if (((s = bc(r, _t91)), void 0 !== s))
          if (n & _o33) {
            if (l && ("underline" === _t91 || "strikethrough" === _t91)) {
              e & _o33 && i.remove.apply(i, Array.from(s));
              continue;
            }
            (0 === (e & _o33) ||
              (c && "underline" === _t91) ||
              "strikethrough" === _t91) &&
              i.add.apply(i, Array.from(s));
          } else e & _o33 && i.remove.apply(i, Array.from(s));
      }
      Nc(o, "class");
    }
    function Lr(t, e, n) {
      var o = n.isComposing(),
        r = t + (o ? S : ""),
        i = Ca(),
        s = Sa(i).$getDOMSlot(n, e, i),
        l = s.getFirstChild();
      if (null === l || l.nodeType !== Node.TEXT_NODE)
        return void s.insertChild(na().createTextNode(r));
      var c = l,
        u = c.nodeValue;
      if (u !== r)
        if (o || a) {
          var _ref31 = (function (t, e) {
              var n = t.length,
                o = e.length;
              var r = 0,
                i = 0;
              for (; r < n && r < o && t[r] === e[r]; ) r++;
              for (; i + r < n && i + r < o && t[n - i - 1] === e[o - i - 1]; )
                i++;
              return [r, n - r - i, e.slice(r, o - i)];
            })(u, r),
            _t92 = _ref31[0],
            _e74 = _ref31[1],
            _n53 = _ref31[2];
          (0 !== _e74 && c.deleteData(_t92, _e74), c.insertData(_t92, _n53));
        } else c.nodeValue = r;
    }
    function Br(t, e, n, o, r, i) {
      Lr(r, t, e);
      var s = i.theme.text;
      void 0 !== s && Rr(0, 0, o, t, s);
    }
    function Kr(t, e) {
      var n = na().createElement(e);
      return (n.appendChild(t), n);
    }
    function zr(t) {
      return null != t && !0 === t.__isInlineFormattable;
    }
    var _$r2 = (function (_dr) {
      function $r(t, e) {
        var _this;
        if (t === void 0) {
          t = "";
        }
        ((_this = _dr.call(this, e) || this),
          (_this.__text = t),
          (_this.__format = 0),
          (_this.__style = ""),
          (_this.__mode = 0),
          (_this.__detail = 0));
        return _this;
      }
      babelHelpers.inheritsLoose($r, _dr);
      var _proto8 = $r.prototype;
      _proto8.$config = function $config() {
        return this.config("text", {
          extends: _dr5,
          generated: kr,
          importDOM: {
            "#text": function text() {
              return { conversion: Vr, priority: 0 };
            },
            b: function b() {
              return { conversion: Ur, priority: 0 };
            },
            code: function code() {
              return { conversion: Gr, priority: 0 };
            },
            em: function em() {
              return { conversion: Gr, priority: 0 };
            },
            i: function i() {
              return { conversion: Gr, priority: 0 };
            },
            mark: function mark() {
              return { conversion: Gr, priority: 0 };
            },
            s: function s() {
              return { conversion: Gr, priority: 0 };
            },
            span: function span() {
              return { conversion: Wr, priority: 0 };
            },
            strong: function strong() {
              return { conversion: Gr, priority: 0 };
            },
            sub: function sub() {
              return { conversion: Gr, priority: 0 };
            },
            sup: function sup() {
              return { conversion: Gr, priority: 0 };
            },
            u: function u() {
              return { conversion: Gr, priority: 0 };
            },
          },
          json: Fr,
        });
      };
      _proto8.getFormat = function getFormat() {
        return this.getLatest().__format;
      };
      _proto8.getDetail = function getDetail() {
        return this.getLatest().__detail;
      };
      _proto8.getMode = function getMode() {
        var t = this.getLatest();
        return P[t.__mode];
      };
      _proto8.getStyle = function getStyle() {
        return this.getLatest().__style;
      };
      _proto8.isToken = function isToken() {
        return 1 === this.getLatest().__mode;
      };
      _proto8.isComposing = function isComposing() {
        return this.__key === tc();
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
        var e = M[t];
        return 0 !== (this.getFormat() & e);
      };
      _proto8.isSimpleText = function isSimpleText() {
        var t = this.getLatest();
        return "text" === t.__type && 0 === t.__mode;
      };
      _proto8.getTextContent = function getTextContent() {
        return this.getLatest().__text;
      };
      _proto8.getFormatFlags = function getFormatFlags(t, e) {
        return Yl(this.getLatest().__format, t, e);
      };
      _proto8.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto8.isInline = function isInline() {
        return !0;
      };
      _proto8.createDOM = function createDOM(t, e) {
        var n = this.__format,
          o = Ir(0, n),
          r = Pr(0, n),
          i = null === o ? r : o,
          s = na().createElement(i);
        var l = s;
        (this.hasFormat("code") && s.setAttribute("spellcheck", "false"),
          null !== o && ((l = na().createElement(r)), s.appendChild(l)),
          Br(l, this, 0, n, this.__text, t));
        var c = this.__style;
        return ("" !== c && Dr(s.style, c), s);
      };
      _proto8.updateDOM = function updateDOM(e, n, o) {
        var r = this.__text,
          i = e.__format,
          s = this.__format,
          l = Ir(0, i),
          c = Ir(0, s),
          a = Pr(0, i),
          u = Pr(0, s);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _e75 = n.firstChild;
          null == _e75 && t(48);
          var _i27 = na().createElement(u);
          return (Br(_i27, this, 0, s, r, o), n.replaceChild(_i27, _e75), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && t(49)),
          Lr(r, f, this));
        var d = o.theme.text;
        void 0 !== d && i !== s && Rr(0, i, s, f, d);
        var h = e.__style,
          g = this.__style;
        return (h !== g && (Dr(n.style, g, h), Nc(n, "style")), !1);
      };
      _proto8.exportDOM = function exportDOM(e) {
        var _dr$prototype$exportD = _dr.prototype.exportDOM.call(this, e),
          n = _dr$prototype$exportD.element;
        return (
          da(n) || t(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = Kr(n, "b")),
          this.hasFormat("italic") && (n = Kr(n, "i")),
          this.hasFormat("strikethrough") && (n = Kr(n, "s")),
          this.hasFormat("underline") && (n = Kr(n, "u")),
          { element: n }
        );
      };
      _proto8.selectionTransform = function selectionTransform(t, e) {};
      _proto8.setFormat = function setFormat(t) {
        var e = this.getWritable();
        return ((e.__format = "string" == typeof t ? M[t] : t), e);
      };
      _proto8.setDetail = function setDetail(t) {
        var e = this.getWritable();
        return ((e.__detail = "string" == typeof t ? A[t] : t), e);
      };
      _proto8.setStyle = function setStyle(t) {
        var e = this.getWritable();
        return ((e.__style = t), e);
      };
      _proto8.toggleFormat = function toggleFormat(t) {
        var e = Yl(this.getFormat(), t, null);
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
        var e = I[t];
        if (this.getLatest().__mode === e) return this;
        var n = this.getWritable();
        return ((n.__mode = e), n);
      };
      _proto8.setTextContent = function setTextContent(t) {
        if (this.getLatest().__text === t) return this;
        var e = this.getWritable();
        return ((e.__text = t), e);
      };
      _proto8.select = function select(t, e) {
        fs();
        var n = t,
          o = e;
        var r = Bi(),
          i = this.getTextContent(),
          s = this.__key;
        if ("string" == typeof i) {
          var _t93 = i.length;
          (void 0 === n && (n = _t93), void 0 === o && (o = _t93));
        } else ((n = 0), (o = 0));
        if (!fi(r)) return Ii(s, n, s, o, "text", "text");
        {
          var _t94 = tc();
          ((_t94 !== r.anchor.key && _t94 !== r.focus.key) || Zl(s),
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
          i = r.__text,
          s = n.length;
        var l = t;
        l < 0 && ((l = s + l), l < 0 && (l = 0));
        var c = Bi();
        if (o && fi(c)) {
          var _e76 = t + s;
          c.setTextNodeRange(r, _e76, r, _e76);
        }
        var a = i.slice(0, l) + n + i.slice(l + e);
        return ((r.__text = a), r);
      };
      _proto8.canInsertTextBefore = function canInsertTextBefore() {
        return !0;
      };
      _proto8.canInsertTextAfter = function canInsertTextAfter() {
        return !0;
      };
      _proto8.splitText = function splitText() {
        fs();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var o = e.__key,
          r = tc(),
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
        for (var _e77 = 0, _o34 = 0; _e77 < i && _o34 <= l; _o34++) {
          var _r31 = t[_o34];
          _r31 > _e77 && (s.push(n.slice(_e77, _r31)), (_e77 = _r31));
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
          m = null;
        var y = Bi();
        if (fi(y)) {
          var _ref32 = y.isBackward()
              ? [y.focus, y.anchor]
              : [y.anchor, y.focus],
            _t95 = _ref32[0],
            _e78 = _ref32[1];
          ("text" === _t95.type && _t95.key === o && (p = _t95),
            "text" === _e78.type && _e78.key === o && (m = _e78));
        }
        e.isSegmented()
          ? ((f = qr(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = ue(e, f)),
            (_ = !0))
          : (f = e.setTextContent(a));
        var x = [f];
        for (var _t96 = 1; _t96 < c; _t96++) {
          var _n54 = qr(s[_t96]);
          ((_n54.__format = d),
            (_n54.__style = h),
            (_n54.__detail = g),
            (_n54.__state = ue(e, _n54)));
          var _i28 = _n54.__key;
          (r === o && Zl(_i28), x.push(_n54));
        }
        var C = p ? p.offset : null,
          S = m ? m.offset : null;
        var T = 0;
        for (var _t97 of x) {
          if (!p && !m) break;
          var _e79 = T + _t97.getTextContentSize();
          if (
            (null !== p &&
              null !== C &&
              C <= _e79 &&
              C >= T &&
              (p.set(_t97.getKey(), C - T, "text"), C < _e79 && (p = null)),
            null !== m && null !== S && S <= _e79 && S >= T)
          ) {
            m.set(_t97.getKey(), S - T, "text");
            break;
          }
          T = _e79;
        }
        if (null !== u) {
          !(function (t) {
            var e = t.getPreviousSibling(),
              n = t.getNextSibling();
            (null !== e && Ql(e), null !== n && Ql(n));
          })(this);
          var _t98 = u.getWritable(),
            _e80 = this.getIndexWithinParent();
          (_
            ? (_t98.splice(_e80, 0, x), this.remove())
            : _t98.splice(_e80, 1, x),
            fi(y) && $i(y, u, _e80, c - 1));
        }
        return x;
      };
      _proto8.mergeWithSibling = function mergeWithSibling(e) {
        var n = e === this.getPreviousSibling();
        n || e === this.getNextSibling() || t(50);
        var o = this.__key,
          r = e.__key,
          i = this.__text,
          s = i.length;
        tc() === r && Zl(o);
        var l = Bi();
        if (fi(l)) {
          var _t99 = l.anchor,
            _i29 = l.focus;
          (null !== _t99 && _t99.key === r && ji(_t99, n, o, e, s),
            null !== _i29 && _i29.key === r && ji(_i29, n, o, e, s));
        }
        var c = e.__text,
          a = n ? c + i : i + c;
        this.setTextContent(a);
        var u = this.getWritable();
        return (e.remove(), u);
      };
      _proto8.isTextEntity = function isTextEntity() {
        return !1;
      };
      return babelHelpers.createClass($r, [
        {
          key: "__isInlineFormattable",
          get: function get() {
            return !0;
          },
        },
      ]);
    })(_dr5);
    function Wr(t) {
      return { forChild: Qr(t.style), node: null };
    }
    function Ur(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: Qr(e.style, n ? void 0 : "bold"), node: null };
    }
    var jr = new WeakMap();
    function Hr(t) {
      if (!da(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function Vr(e) {
      var n = e;
      null === e.parentElement && t(129);
      var o = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var o = [t];
          for (; null !== n && void 0 === (e = jr.get(n)) && !Hr(n); )
            (o.push(n), (n = n.parentNode));
          var r = void 0 === e ? n : e;
          for (var _t100 = 0; _t100 < o.length; _t100++) jr.set(o[_t100], r);
          return r;
        })(n)
      )
        return { node: Gi(o) };
      if (((o = o.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === o))
        return { node: null };
      if (" " === o[0]) {
        var _t101 = n,
          _e81 = !0;
        for (; null !== _t101 && null !== (_t101 = Jr(_t101, !1)); ) {
          var _n55 = _t101.textContent || "";
          if (_n55.length > 0) {
            (/[ \t\n]$/.test(_n55) && (o = o.slice(1)), (_e81 = !1));
            break;
          }
        }
        _e81 && (o = o.slice(1));
      }
      if (" " === o[o.length - 1]) {
        var _t102 = n,
          _e82 = !0;
        for (; null !== _t102 && null !== (_t102 = Jr(_t102, !0)); )
          if (
            (_t102.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e82 = !1;
            break;
          }
        _e82 && (o = o.slice(0, o.length - 1));
      }
      return "" === o ? { node: null } : { node: qr(o) };
    }
    function Jr(t, e) {
      var n = t;
      for (;;) {
        var _t103 = void 0;
        for (; null === (_t103 = e ? n.nextSibling : n.previousSibling); ) {
          var _t104 = n.parentElement;
          if (null === _t104) return null;
          n = _t104;
        }
        if (((n = _t103), da(n))) {
          var _t105 = n.style.display;
          if (
            ("" === _t105 && !pa(n)) ||
            ("" !== _t105 && !_t105.startsWith("inline"))
          )
            return null;
        }
        var _o35 = n;
        for (; null !== (_o35 = e ? n.firstChild : n.lastChild); ) n = _o35;
        if (Hl(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var Yr = {
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
    function Gr(t) {
      var e = Yr[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: Qr(t.style, e), node: null };
    }
    function qr(t) {
      if (t === void 0) {
        t = "";
      }
      return jc(new _$r2(t));
    }
    function Xr(t) {
      return t instanceof _$r2;
    }
    function Qr(t, e) {
      var n = t.fontWeight,
        o = t.textDecoration.split(" "),
        r = "700" === n || "bold" === n,
        i = o.includes("line-through"),
        s = "italic" === t.fontStyle,
        l = o.includes("underline"),
        c = t.verticalAlign,
        a = t.textTransform;
      return function (t) {
        return Xr(t) || zr(t)
          ? (r && !t.hasFormat("bold") && t.toggleFormat("bold"),
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
            ("lowercase" !== a && "uppercase" !== a && "capitalize" !== a) ||
              t.hasFormat(a) ||
              t.toggleFormat(a),
            e && !t.hasFormat(e) && t.toggleFormat(e),
            t)
          : t;
      };
    }
    var Zr = Ht()({
      detail: Yt(Wt(2), { getter: { field: "__detail" }, setter: null }),
      mode: Yt(Ut(["normal"]), {
        getter: { field: "__mode", getterTable: { 0: "normal" } },
        setter: null,
      }),
      text: Yt(zt("\t"), {
        getter: { field: "__text", method: "getTextContent" },
        setter: null,
      }),
    });
    var _ti = (function (_$r) {
      function ti(t) {
        var _this2;
        if (t === void 0) {
          t = void 0;
        }
        ((_this2 = _$r.call(this, "\t", t) || this), (_this2.__detail = 2));
        return _this2;
      }
      babelHelpers.inheritsLoose(ti, _$r);
      var _proto9 = ti.prototype;
      _proto9.$config = function $config() {
        return this.config("tab", { extends: _$r2, generated: Mr, json: Zr });
      };
      _proto9.createDOM = function createDOM(t) {
        var _e$classList;
        var e = _$r.prototype.createDOM.call(this, t),
          n = bc(t.theme, "tab");
        return (
          void 0 !== n &&
            (_e$classList = e.classList).add.apply(_e$classList, Array.from(n)),
          e
        );
      };
      _proto9.setTextContent = function setTextContent(t) {
        return _$r.prototype.setTextContent.call(this, "\t");
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
      return ti;
    })(_$r2);
    function ei() {
      return jc(new _ti());
    }
    function ni(t) {
      return t instanceof _ti;
    }
    var _oi = (function () {
      function oi(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto0 = oi.prototype;
      _proto0.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto0.isBefore = function isBefore(t) {
        return this.key === t.key
          ? this.offset < t.offset
          : lf(ul(el(this, "next")), ul(el(t, "next"))) < 0;
      };
      _proto0.getNode = function getNode() {
        var e = ec(this.key);
        return (null === e && t(20), e);
      };
      _proto0.set = function set(t, e, n, o) {
        var r = this._selection,
          i = this.key;
        (o && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          us() ||
            (tc() === i && Zl(t),
            null !== r &&
              (r.setCachedNodes(null),
              fi(r) && (r._cachedIsBackward = null),
              (r.dirty = !0))));
      };
      return oi;
    })();
    function ri(t, e, n) {
      return new _oi(t, e, n);
    }
    function ii(t, e) {
      var n = e.__key,
        o = t.offset,
        r = "element";
      if (Xr(e)) {
        r = "text";
        var _t106 = e.getTextContentSize();
        o > _t106 && (o = _t106);
      } else if (!Ls(e)) {
        var _t107 = e.getNextSibling();
        if (Xr(_t107)) ((n = _t107.__key), (o = 0), (r = "text"));
        else {
          var _t108 = e.getParent();
          _t108 && ((n = _t108.__key), (o = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, o, r);
    }
    function si(t, e) {
      if (Ls(e)) {
        var _n56 = e.getLastDescendant();
        Ls(_n56) || Xr(_n56) ? ii(t, _n56) : ii(t, e);
      } else ii(t, e);
    }
    function li(t, e, n, o) {
      var r = t.getNode(),
        i = r.getChildAtIndex(t.offset),
        s = qr();
      if ((s.setFormat(n), s.setStyle(o), Tl(i))) i.splice(0, 0, [s]);
      else if (null !== i) {
        var _t109 = Wc(r) ? Sl().append(s) : s;
        i.insertBefore(_t109);
      } else if (Wc(r)) {
        var _t110 = r.getLastChild();
        Ls(_t110) && !_t110.isInline() && _t110.isEmpty()
          ? _t110.append(s)
          : r.append(Sl().append(s));
      } else r.append(s);
      (t.is(e) && e.set(s.__key, 0, "text"), t.set(s.__key, 0, "text"));
    }
    function ci(e, n, o, r) {
      var i = e.anchor.getNode();
      Xr(i) || t(398);
      var s = e.anchor.offset,
        l = qr(n);
      (l.setFormat(o), l.setStyle(r));
      var c = i.getParentOrThrow();
      if (0 === s)
        c.isInline() && !i.__prev ? c.insertBefore(l) : i.insertBefore(l, !1);
      else if (s === i.getTextContentSize())
        c.isInline() && !i.__next ? c.insertAfter(l) : i.insertAfter(l, !1);
      else {
        var _i$splitText = i.splitText(s),
          _t111 = _i$splitText[0];
        _t111.insertAfter(l, !1);
      }
      ("" === i.getTextContent() && i.isAttached() && i.remove(),
        l.selectEnd(),
        l.isComposing() &&
          "text" === e.anchor.type &&
          e.anchor.set(
            e.anchor.key,
            e.anchor.offset - n.length,
            e.anchor.type,
          ));
    }
    var _ai = (function () {
      function ai(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto1 = ai.prototype;
      _proto1.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto1.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto1.is = function is(t) {
        if (!hi(t)) return !1;
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
        return new ai(new Set(this._nodes));
      };
      _proto1.extract = function extract() {
        return this.getNodes();
      };
      _proto1.insertRawText = function insertRawText(t) {};
      _proto1.insertText = function insertText() {};
      _proto1.insertNodes = function insertNodes(t) {
        var e = this.getNodes().filter(function (t) {
            return null === _u(t);
          }),
          n = e.length;
        if (0 === n) return;
        var o = e[n - 1];
        var r;
        if (Xr(o)) r = o.select();
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
          var _e83 = ec(_t114);
          null !== _e83 && n.push(_e83);
        }
        return (us() || (this._cachedNodes = n), n);
      };
      _proto1.getTextContent = function getTextContent() {
        var t = this.getNodes();
        var e = "";
        for (var _n57 = 0; _n57 < t.length; _n57++)
          e += t[_n57].getTextContent();
        return e;
      };
      _proto1.deleteNodes = function deleteNodes() {
        var t = this.getNodes().filter(function (t) {
          return null === _u(t);
        });
        if ((Bi() || Ki()) === this && t[0]) {
          var _e84 = Vu(t[0], "next");
          ol(rf(_e84, _e84));
        }
        for (var _e85 of t) _e85.remove();
        ui();
      };
      return ai;
    })();
    function ui() {
      var t = cc();
      if (t.isEmpty()) {
        var _e86 = Sl();
        (t.append(_e86), _e86.select());
      }
    }
    function fi(t) {
      return t instanceof _di;
    }
    var _di = (function () {
      function di(t, e, n, o) {
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
      var _proto10 = di.prototype;
      _proto10.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto10.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto10.is = function is(t) {
        return (
          !!fi(t) &&
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
            i = new Set();
          for (var _n58 of t)
            if (Wu(_n58)) {
              var _t115 = _n58.origin;
              0 === e.length ? r.add(_t115) : (i.add(_t115), e.push(_t115));
            } else {
              var _t116 = _n58.origin;
              (Ls(_t116) && i.has(_t116)) || e.push(_t116);
            }
          if (
            (o && e.push(o.caret.origin),
            $u(t.focus) &&
              Ls(t.focus.origin) &&
              null === t.focus.getNodeAtCaret())
          )
            for (
              var _n59 = qu(t.focus.origin, "previous");
              Wu(_n59) &&
              r.has(_n59.origin) &&
              !_n59.origin.isEmpty() &&
              _n59.origin.is(e[e.length - 1]);
              _n59 = Qu(_n59)
            )
              (r["delete"](_n59.origin), e.pop());
          for (; e.length > 1; ) {
            var _t117 = e[e.length - 1];
            if (!Ls(_t117) || i.has(_t117) || _t117.isEmpty() || r.has(_t117))
              break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n60 = ul(t.anchor),
              _o36 = ul(t.anchor.getFlipped()),
              _r32 = function _r32(t) {
                return zu(t) ? t.origin : t.getNodeAtCaret();
              },
              _i30 =
                _r32(_n60) ||
                _r32(_o36) ||
                (t.anchor.getNodeAtCaret() ? _n60.origin : _o36.origin);
            e.push(_i30);
          }
          return e;
        })(dl(il(this), "next"));
        return (us() || (this._cachedNodes = e), e);
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
          i = o.isBefore(r),
          _mi = mi(this),
          s = _mi[0],
          l = _mi[1];
        var c = "",
          a = !0;
        for (var _u8 = 0; _u8 < t.length; _u8++) {
          var _f7 = t[_u8];
          if (Ls(_f7) && !_f7.isInline()) {
            a || (c += "\n");
            var _t118 = "";
            for (var _e87 of Cu(_f7)) {
              var _n61 = Su(_f7, _e87);
              null !== _n61 && (_t118 += _n61.getTextContent());
            }
            "" !== _t118 ? ((c += _t118), (a = !1)) : (a = !_f7.isEmpty());
          } else if (((a = !1), Xr(_f7))) {
            var _t119 = _f7.getTextContent();
            (_f7 === e
              ? _f7 === n
                ? ("element" === o.type &&
                    "element" === r.type &&
                    r.offset !== o.offset) ||
                  (_t119 = s < l ? _t119.slice(s, l) : _t119.slice(l, s))
                : (_t119 = i ? _t119.slice(s) : _t119.slice(l))
              : _f7 === n &&
                (_t119 = i ? _t119.slice(0, l) : _t119.slice(0, s)),
              (c += _t119));
          } else
            (!zs(_f7) && !Xs(_f7)) ||
              (_f7 === n && this.isCollapsed()) ||
              (c += _f7.getTextContent());
        }
        return c;
      };
      _proto10.applyDOMRange = function applyDOMRange(t) {
        var e = gs(),
          n = e.getEditorState()._selection,
          o = Di(
            t.startContainer,
            t.startOffset,
            t.endContainer,
            t.endOffset,
            e,
            n,
          );
        if (null === o) return;
        var r = o[0],
          i = o[1],
          s = o[2];
        (this.anchor.set(r.key, r.offset, r.type, !0),
          this.focus.set(i.key, i.offset, i.type, !0),
          s && (this.dirty = !0),
          ge(this));
      };
      _proto10.clone = function clone() {
        var t = this.anchor,
          e = this.focus;
        return new di(
          ri(t.key, t.offset, t.type),
          ri(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto10.toggleFormat = function toggleFormat(t) {
        ((this.format = Yl(this.format, t, null)), (this.dirty = !0));
      };
      _proto10.setFormat = function setFormat(t) {
        ((this.format = t), (this.dirty = !0));
      };
      _proto10.setStyle = function setStyle(t) {
        ((this.style = t), (this.dirty = !0));
      };
      _proto10.hasFormat = function hasFormat(t) {
        var e = M[t];
        return 0 !== (this.format & e);
      };
      _proto10.insertRawText = function insertRawText(t) {
        this.insertNodes(Gi(t));
      };
      _proto10.insertText = function insertText(e) {
        var n = this.format,
          o = this.style;
        if (!this.isCollapsed()) {
          var _t120 = (
            this.focus.isBefore(this.anchor) ? this.focus : this.anchor
          ).getNode();
          if (
            (Xr(_t120) && ((n = _t120.getFormat()), (o = _t120.getStyle())),
            this.removeText(),
            (this.format = n),
            (this.style = o),
            "" === e)
          )
            return;
          if (null === tc())
            return (
              "element" === this.anchor.type &&
                li(this.anchor, this.focus, n, o),
              void ci(this, e, n, o)
            );
        }
        "element" === this.anchor.type && li(this.anchor, this.focus, n, o);
        var r = this.anchor.getNode();
        Xr(r) || t(398);
        var i = this.anchor.offset,
          s = r.getParentOrThrow(),
          l = r.getTextContentSize();
        if (
          jl(r) ||
          (0 === i &&
            (!r.canInsertTextBefore() ||
              (!s.canInsertTextBefore() && !r.__prev))) ||
          (i === l &&
            (!r.canInsertTextAfter() || (!s.canInsertTextAfter() && !r.__next)))
        ) {
          if (r.isSegmented() && 0 !== i && i !== l) {
            if (null !== tc()) r.setMode("normal").setFormat(n).setStyle(o);
            else {
              var _t121 = qr(r.getTextContent());
              (_t121.setFormat(n), _t121.setStyle(o));
              var _e88 = Bi() === this;
              (r.replace(_t121),
                this.setTextNodeRange(_t121, i, _t121, i),
                _e88 && Bi() !== this && uc(this));
            }
            return void ("" !== e && this.insertText(e));
          }
          if ("" === e) return;
          if (0 === i) {
            var _t122 = r.getPreviousSibling();
            if (Xr(_t122) && _t122.canInsertTextAfter() && !jl(_t122))
              _t122.select();
            else {
              var _t123 = qr();
              (_t123.setFormat(n),
                _t123.setStyle(o),
                s.canInsertTextBefore()
                  ? r.insertBefore(_t123)
                  : s.insertBefore(_t123),
                _t123.select());
            }
            return void this.insertText(e);
          }
          if (i === l) {
            var _t124 = r.getNextSibling();
            if (Xr(_t124) && _t124.canInsertTextBefore() && !jl(_t124))
              _t124.select(0, 0);
            else {
              var _t125 = qr();
              (_t125.setFormat(n),
                _t125.setStyle(o),
                s.canInsertTextAfter()
                  ? r.insertAfter(_t125)
                  : s.insertAfter(_t125),
                _t125.select(0, 0));
            }
            return void this.insertText(e);
          }
          var _t126 = qr(e);
          return (
            _t126.setFormat(n),
            _t126.setStyle(o),
            r.replace(_t126),
            void _t126.select()
          );
        }
        if ("" === e) return;
        var c = s.isInline() && 0 === i && !r.__prev,
          a = s.isInline() && i === l && !r.__next,
          u = r.getFormat() !== n || r.getStyle() !== o;
        if (c || a || u) {
          if ("" !== r.getTextContent() || c || a)
            return void ci(this, e, n, o);
          (r.setFormat(n), r.setStyle(o));
        }
        (r.spliceText(i, 0, e, !0),
          r.isComposing() &&
            "text" === this.anchor.type &&
            this.anchor.set(
              this.anchor.key,
              this.anchor.offset - e.length,
              this.anchor.type,
            ));
      };
      _proto10.removeText = function removeText() {
        var t = Bi() === this,
          e = this.anchor.key;
        (rl(this, al(il(this))),
          this.isCollapsed() &&
            (function (t, e) {
              var n = t.anchor;
              if (n.key === e) return;
              var o = n.getNode();
              var r = 0,
                i = "";
              (Xr(o)
                ? ((r = o.getFormat()), (i = o.getStyle()))
                : Ls(o) && ((r = o.getTextFormat()), (i = o.getTextStyle())),
                (t.format === r && t.style === i) ||
                  ((t.format = r), (t.style = i), (t.dirty = !0)));
            })(this, e),
          t && Bi() !== this && uc(this));
      };
      _proto10.formatText = function formatText(t, e) {
        if (e === void 0) {
          e = null;
        }
        _i(this, t, e);
      };
      _proto10.insertNodes = function insertNodes(e) {
        var _i31;
        if (0 === e.length) return;
        this.isCollapsed() || this.removeText();
        var n = this.anchor.getNode();
        if (
          "element" === this.anchor.type &&
          Ls(n) &&
          n.isShadowRoot() &&
          null !== _u(n)
        ) {
          var _n$getFirstChild;
          var _o37 =
            (_n$getFirstChild = n.getFirstChild()) != null
              ? _n$getFirstChild
              : n.append(Sl()).getFirstChild();
          if (null !== _o37 && !Ls(_o37)) {
            var _t127 = Sl();
            (_o37.insertBefore(_t127), (_o37 = _t127));
          }
          if (null !== _o37) {
            _o37.selectStart();
            var _n62 = Bi();
            return (fi(_n62) || t(369), _n62.insertNodes(e));
          }
        }
        if ("element" === this.anchor.type && Wc(n)) {
          var _t128 = ts(e),
            _o38 = _t128.getLastDescendant();
          return (
            n.splice(this.anchor.offset, 0, _t128.getChildren()),
            void (null !== _o38 && _o38.selectEnd())
          );
        }
        var o = this.isBackward() ? this.focus : this.anchor;
        var r = o.getNode(),
          i = au(r, xa);
        var s = e[e.length - 1];
        if (Ls(i) && "__language" in i) {
          if ("__language" in e[0]) this.insertText(e[0].getTextContent());
          else {
            var _Xi = Xi(this),
              _t129 = _Xi[1];
            (i.splice(_t129, 0, e), s.selectEnd());
          }
          return;
        }
        if (
          !e.some(function (t) {
            return (Ls(t) || zs(t)) && !t.isInline();
          })
        ) {
          Ls(i) || t(211, r.constructor.name, r.getType());
          var _Xi2 = Xi(this, !0),
            _n63 = _Xi2[0],
            _o39 = _Xi2[1];
          return ((Ls(_n63) ? _n63 : i).splice(_o39, 0, e), void s.selectEnd());
        }
        if (Ls(i) && null !== _u(i)) {
          var _Xi3 = Xi(this),
            _t130 = _Xi3[1],
            _n64 = qi(e);
          i.splice(_t130, 0, _n64);
          var _o40 = _n64[_n64.length - 1];
          return void (void 0 !== _o40
            ? _o40.selectEnd()
            : i.select(_t130, _t130));
        }
        if (null === i) {
          var _t131 = ts(e),
            _n65 = _t131.getLastDescendant();
          var _o41 = el(this.anchor, "next");
          for (var _e89 of _t131.getChildren()) _o41 = ml(_e89, _o41);
          return void (null !== _n65 && _n65.selectEnd());
        }
        if (Ls(i) && !i.isParentRequired() && !Wc(i.getParentOrThrow())) {
          var _Xi4 = Xi(this),
            _t132 = _Xi4[1],
            _n66 = qi(e);
          i.splice(_t132, 0, _n66);
          var _o42 = _n66[_n66.length - 1];
          return void (void 0 !== _o42
            ? _o42.selectEnd()
            : i.select(_t132, _t132));
        }
        var l = ts(e),
          c = l.getLastDescendant(),
          a = l.getChildren(),
          u = (function (t) {
            var e = (function (t) {
              var e = t.getNode();
              if (t.offset > 0)
                return "element" === t.type && Ls(e)
                  ? e.getChildAtIndex(t.offset - 1)
                  : null;
              for (
                var _t133 = e;
                null !== _t133 && !xa(_t133) && !Wc(_t133);
                _t133 = _t133.getParent()
              ) {
                var _e90 = _t133.getPreviousSibling();
                if (null !== _e90) return _e90;
              }
              return null;
            })(t);
            return Xs(e) && Xs(e.getPreviousSibling());
          })(o),
          f = Ls(i) && i.isEmpty() ? null : this.insertParagraph();
        f && !i.isAttached() && ((r = this.anchor.getNode()), (i = au(r, xa)));
        var d = a[a.length - 1];
        var h = a[0];
        var g;
        ((g = h),
          u ||
            !Ls(g) ||
            !xa(g) ||
            g.isEmpty() ||
            !Ls(i) ||
            (i.isEmpty() && !i.canMergeWhenEmpty()) ||
            (Ls(i) || t(211, r.constructor.name, r.getType()),
            (_i31 = i).append.apply(_i31, Array.from(h.getChildren())),
            (h = a[1])),
          h &&
            (null === i && t(212, r.constructor.name, r.getType()),
            (function (e, n) {
              var o = n.getParentOrThrow().getLastChild();
              var r = n;
              var i = [n];
              for (; r !== o; )
                (r.getNextSibling() || t(140),
                  (r = r.getNextSibling()),
                  i.push(r));
              var s = e;
              for (var _t134 of i) s = s.insertAfter(_t134);
            })(i, h)));
        var _ = au(c, xa),
          p = c.selectEnd();
        (f &&
          (Ls(_) && (f.canMergeWhenEmpty() || xa(d))
            ? (_.append.apply(_, Array.from(f.getChildren())), f.remove())
            : f.isEmpty() && f.remove()),
          Ls(i) && i.isEmpty() && i.remove());
        var m = Ls(i) ? i.getLastChild() : null;
        Xs(m) && _ !== i && m.remove();
        var y = ul(el(p.anchor, "next"));
        (nl(p.anchor, y), nl(p.focus, y));
      };
      _proto10.insertParagraph = function insertParagraph() {
        this.isCollapsed() || this.removeText();
        var e = this.anchor.getNode();
        if ("element" === this.anchor.type && Wc(e)) {
          var _t135 = Sl();
          return (
            e.splice(this.anchor.offset, 0, [_t135]),
            _t135.select(),
            _t135
          );
        }
        var _Xi5 = Xi(this),
          n = _Xi5[1],
          o = au(this.anchor.getNode(), xa);
        if (null !== o && null !== _u(o)) return null;
        Ls(o) || t(213);
        var r = o.getChildAtIndex(n),
          i = r ? [r].concat(Array.from(r.getNextSiblings())) : [],
          s = o.insertNewAfter(this, !1);
        return s
          ? (s.append.apply(s, Array.from(i)), s.selectStart(), s)
          : null;
      };
      _proto10.insertLineBreak = function insertLineBreak(t) {
        var e = qs();
        if ((this.insertNodes([e]), t)) {
          var _t136 = e.getParentOrThrow(),
            _n67 = e.getIndexWithinParent();
          _t136.select(_n67, _n67);
        }
      };
      _proto10.extract = function extract() {
        var _n$splitText;
        var t = [].concat(Array.from(this.getNodes())),
          e = t.length;
        var n = t[0],
          o = t[e - 1];
        var _mi2 = mi(this),
          r = _mi2[0],
          i = _mi2[1],
          s = this.isBackward(),
          _ref33 = s ? [this.focus, this.anchor] : [this.anchor, this.focus],
          l = _ref33[0],
          c = _ref33[1],
          _ref34 = s ? [i, r] : [r, i],
          a = _ref34[0],
          u = _ref34[1];
        if (0 === e) return [];
        if (1 === e) {
          if (Xr(n) && !this.isCollapsed()) {
            var _t137 = n.splitText(a, u),
              _e91 = 0 === a ? _t137[0] : _t137[1];
            return _e91
              ? (l.set(_e91.getKey(), 0, "text"),
                c.set(_e91.getKey(), _e91.getTextContentSize(), "text"),
                [_e91])
              : [];
          }
          return [n];
        }
        if (
          (Xr(n) &&
            (a === n.getTextContentSize()
              ? t.shift()
              : 0 !== a &&
                ((_n$splitText = n.splitText(a)),
                (n = _n$splitText[1]),
                (t[0] = n),
                l.set(n.getKey(), 0, "text"))),
          Xr(o))
        ) {
          var _o$splitText;
          var _e92 = o.getTextContent().length;
          0 === u
            ? t.pop()
            : u !== _e92 &&
              ((_o$splitText = o.splitText(u)),
              (o = _o$splitText[0]),
              (t[t.length - 1] = o),
              c.set(o.getKey(), o.getTextContentSize(), "text"));
        }
        return t;
      };
      _proto10.modify = function modify(t, e, n) {
        if (es(this, t, e, n)) return;
        var o = "move" === t,
          r = gs(),
          i = Gc(Bc(r));
        if (!i) return;
        var s = r._blockCursorElement,
          l = r._rootElement,
          c = this.focus.getNode();
        null === l ||
          null === s ||
          !Ls(c) ||
          c.isInline() ||
          c.canBeEmpty() ||
          Yc(s, r, l);
        var a = wc(r, this.focus.key);
        var u = a;
        if (
          ("text" === this.focus.type && (u = Xr(c) ? Na(c, a, r) : null),
          this.dirty)
        ) {
          var _t138 = wc(r, this.anchor.key);
          var _e93 = _t138;
          if ("text" === this.anchor.type) {
            var _n68 = this.anchor.getNode();
            _e93 = Xr(_n68) ? Na(_n68, _t138, r) : null;
          }
          _e93 && u && Hi(i, _e93, this.anchor.offset, u, this.focus.offset);
        }
        if (
          "character" === n &&
          Xr(c) &&
          c.isUnmergeable() &&
          (e
            ? 0 === this.focus.offset
            : this.focus.offset === c.getTextContentSize())
        ) {
          var _t139 = Vu(c, e ? "previous" : "next").getNodeAtCaret();
          if (Xr(_t139)) {
            if (!o) {
              var _n69 = _t139.getTextContentSize();
              return (
                e
                  ? this.focus.set(_t139.__key, _n69 - 1, "text")
                  : this.focus.set(_t139.__key, 1, "text"),
                void (this.dirty = !0)
              );
            }
            {
              var _n70 = r.getElementByKey(_t139.getKey()),
                _o43 = _n70 ? Na(_t139, _n70, r) : null;
              if (_o43) {
                var _t140 = e ? _o43.length : 0;
                Hi(i, _o43, _t140, _o43, _t140);
              }
            }
          }
        }
        if ((Si(i, t, e ? "backward" : "forward", n, l), i.rangeCount > 0)) {
          var _t141 = oa(i, r._rootElement),
            _n71 = _t141 || i.getRangeAt(0),
            _s17 = this.anchor.getNode(),
            _l10 = Ws(_s17) ? _s17 : zc(_s17);
          (this.applyDOMRange(_n71),
            (this.dirty = !0),
            o ||
              (Ti(this, e, _l10),
              (_t141
                ? "backward" !== i.direction
                : i.anchorNode === _n71.startContainer &&
                  i.anchorOffset === _n71.startOffset) || Ci(this)));
        }
        "lineboundary" === n && es(this, t, e, n, "decorators");
      };
      _proto10.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            Ls(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t142 = e.getParent(),
            _n72 =
              e.getNextSibling() ||
              (null === _t142 ? null : _t142.getNextSibling());
          if (Ls(_n72) && _n72.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto10.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e94 = this.anchor;
          var _n73 = _e94.getNode();
          if (this.forwardDeletion(_e94, _n73, t)) {
            var _t143 = Ls(_n73) ? _n73.getNextSibling() : null;
            if (
              !(Ls(_n73) && _n73.isEmpty() && Ls(_t143) && _t143.isShadowRoot())
            )
              return;
          }
          var _o44 = el(_e94, t ? "previous" : "next"),
            _r33 = nf(_o44);
          if (
            _r33.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            if ("element" === _e94.type) {
              var _t144 = _o44.getNodeAtCaret();
              if (Ls(_t144) && Jc(_t144)) {
                var _e95 = _t144.getParent();
                _t144.remove();
                var _n74 = ac(_e95, _t144);
                return void (null !== _n74 && _n74.selectStart());
              }
            }
            var _t145 = { type: "initial" };
            for (var _e96 of _r33.iterNodeCarets("shadowRoot"))
              if (Wu(_e96)) {
                if (_e96.origin.isInline());
                else {
                  if (_e96.origin.isShadowRoot()) {
                    if ("merge-block" === _t145.type) break;
                    if (
                      Ls(_r33.anchor.origin) &&
                      _r33.anchor.origin.isEmpty()
                    ) {
                      var _t146 = ul(_e96);
                      (rl(this, rf(_t146, _t146)), _r33.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t145.type &&
                    "merge-block" !== _t145.type) ||
                    (_t145 = {
                      block: _t145.block,
                      caret: _e96,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t145.type) break;
                if ($u(_e96)) {
                  if (Ls(_e96.origin)) {
                    if (_e96.origin.isInline()) {
                      if (!_e96.origin.isParentOf(_r33.anchor.origin)) break;
                    } else
                      _t145 = { block: _e96.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (zs(_e96.origin)) {
                    if (_e96.origin.isIsolated());
                    else if (
                      "merge-next-block" === _t145.type &&
                      (_e96.origin.isKeyboardSelectable() ||
                        !_e96.origin.isInline()) &&
                      Ls(_r33.anchor.origin) &&
                      _r33.anchor.origin.isEmpty()
                    ) {
                      _r33.anchor.origin.remove();
                      var _t147 = Ri();
                      (_t147.add(_e96.origin.getKey()), uc(_t147));
                    } else {
                      var _t148 = _e96.origin,
                        _n75 = _t148.getParent();
                      _t148.remove();
                      var _o45 = ac(_n75, _t148);
                      null !== _o45 && _o45.selectStart();
                    }
                    return;
                  }
                  if (Xs(_e96.origin)) return void _e96.origin.remove();
                  break;
                }
              }
            if ("merge-block" === _t145.type) {
              var _t149 = _t145,
                _e97 = _t149.caret,
                _n76 = _t149.block;
              if (Cu(_n76).length > 0) return;
              return _e97.origin.isEmpty() &&
                !_n76.isEmpty() &&
                _e97.origin.getParent() === _n76.getParent()
                ? void _e97.origin.remove(!0)
                : (rl(
                    this,
                    rf(
                      !_e97.origin.isEmpty() && _n76.isEmpty()
                        ? sl(Vu(_n76, _e97.direction))
                        : _r33.anchor,
                      _e97,
                    ),
                  ),
                  this.removeText());
            }
            for (var _t150 = _e94.getNode(); null !== _t150; ) {
              if (null !== _u(_t150)) return;
              if (Ls(_t150) && _t150.isShadowRoot()) break;
              _t150 = _t150.getParent();
            }
          }
          var _i32 = this.focus;
          if ((vi(this, t, "character"), this.isCollapsed())) {
            if (t && 0 === _e94.offset && yi(this, _e94.getNode())) return;
          } else {
            var _o46 = "text" === _i32.type ? _i32.getNode() : null;
            if (
              ((_n73 = "text" === _e94.type ? _e94.getNode() : null),
              null !== _o46 && _o46.isSegmented())
            ) {
              var _e98 = _i32.offset,
                _r34 = _o46.getTextContentSize();
              if (_o46.is(_n73) || (t && _e98 !== _r34) || (!t && 0 !== _e98))
                return void ki(_o46, t, _e98);
            } else if (null !== _n73 && _n73.isSegmented()) {
              var _r35 = _e94.offset,
                _i33 = _n73.getTextContentSize();
              if (_n73.is(_o46) || (t && 0 !== _r35) || (!t && _r35 !== _i33))
                return void ki(_n73, t, _r35);
            }
            !(function (t, e) {
              var n = t.anchor,
                o = t.focus,
                r = n.getNode();
              if (r === o.getNode() && "text" === n.type && "text" === o.type) {
                var _t151 = n.offset,
                  _s18 = o.offset,
                  _l11 = _t151 < _s18,
                  _c0 = _l11 ? _t151 : _s18,
                  _a8 = _l11 ? _s18 : _t151,
                  _u9 = _a8 - 1;
                _c0 !== _u9 &&
                  !hc((i = r.getTextContent().slice(_c0, _a8))) &&
                  !bi(i) &&
                  (e ? o.set(o.key, _u9, o.type) : n.set(n.key, _u9, n.type));
              }
              var i;
            })(this, t);
          }
        }
        if (
          (e || xi(this),
          this.removeText(),
          t &&
            !e &&
            this.isCollapsed() &&
            "element" === this.anchor.type &&
            0 === this.anchor.offset)
        ) {
          var _t152 = this.anchor.getNode();
          (_t152.isEmpty() &&
            Ws(_t152.getParent()) &&
            null === _t152.getPreviousSibling() &&
            yi(this, _t152),
            ui());
        }
      };
      _proto10.deleteLine = function deleteLine(t) {
        var e = this.isCollapsed(),
          n = Mi(this.anchor);
        if (null !== n && zs(pu(n)))
          return (
            this.isCollapsed() ||
              this.focus.set(
                this.anchor.key,
                this.anchor.offset,
                this.anchor.type,
              ),
            void this.deleteCharacter(t)
          );
        (this.isCollapsed() && vi(this, t, "lineboundary"),
          this.isCollapsed()
            ? this.deleteCharacter(t)
            : au(this.anchor.getNode(), xa) !== au(this.focus.getNode(), xa)
              ? (this.focus.set(
                  this.anchor.key,
                  this.anchor.offset,
                  this.anchor.type,
                ),
                this.deleteCharacter(t))
              : (e || xi(this), this.removeText()));
      };
      _proto10.deleteWord = function deleteWord(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e99 = this.anchor,
            _n77 = _e99.getNode();
          if (this.forwardDeletion(_e99, _n77, t)) return;
          vi(this, t, "word");
        }
        this.isCollapsed()
          ? this.deleteCharacter(t)
          : (e || xi(this), this.removeText());
      };
      _proto10.isBackward = function isBackward() {
        var t = this._cachedIsBackward;
        if (null !== t) return t;
        var e = this.focus.isBefore(this.anchor);
        return (us() || (this._cachedIsBackward = e), e);
      };
      _proto10.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return di;
    })();
    function hi(t) {
      return t instanceof _ai;
    }
    function gi(t, e) {
      var _u$splitText, _h$splitText;
      if (hi(t)) {
        for (var _n78 of t.getNodes())
          zr(_n78) && _n78.setFormat(e(_n78.getFormat()));
        return;
      }
      if (t.isCollapsed()) return (t.setFormat(e(t.format)), void Zl(null));
      var n = [];
      for (var _o47 of t.getNodes())
        Xr(_o47)
          ? n.push(_o47)
          : Ls(_o47)
            ? _o47.setTextFormat(e(_o47.getTextFormat()))
            : zr(_o47) && _o47.setFormat(e(_o47.getFormat()));
      var o = n.length;
      if (0 === o) return (t.setFormat(e(t.format)), void Zl(null));
      var r = t.anchor,
        i = t.focus,
        s = t.isBackward(),
        l = s ? i : r,
        c = s ? r : i;
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
        var _n79 = e(u.getFormat());
        if (jl(u) || (0 === f && g === u.getTextContentSize()))
          u.setFormat(_n79);
        else {
          var _t153 = u.splitText(f, g),
            _e100 = 0 === f ? _t153[0] : _t153[1];
          (_e100.setFormat(_n79),
            "text" === l.type && l.set(_e100.__key, 0, "text"),
            "text" === c.type && c.set(_e100.__key, g - f, "text"));
        }
        return void (t.format = _n79);
      }
      0 === f ||
        jl(u) ||
        ((_u$splitText = u.splitText(f)), (u = _u$splitText[1]), (f = 0));
      var _ = e(u.getFormat());
      u.setFormat(_);
      var p = e(h.getFormat());
      g > 0 &&
        (g === h.getTextContentSize() ||
          jl(h) ||
          ((_h$splitText = h.splitText(g)),
          (h = _h$splitText[0]),
          _h$splitText),
        h.setFormat(p));
      for (var _t154 = a + 1; _t154 < d; _t154++) {
        var _o48 = n[_t154];
        _o48.setFormat(e(_o48.getFormat()));
      }
      ("text" === l.type && l.set(u.__key, f, "text"),
        "text" === c.type && c.set(h.__key, g, "text"),
        (t.format = _ | p));
    }
    function _i(t, e, n) {
      if (n === void 0) {
        n = null;
      }
      var o = null === n && fi(t) ? Yl(t.format, e, null) : n;
      gi(t, function (t) {
        return Yl(t, e, o);
      });
    }
    function pi(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function mi(t) {
      var e = t.getStartEndPoints();
      if (null === e) return [0, 0];
      var n = e[0],
        o = e[1];
      return "element" === n.type &&
        "element" === o.type &&
        n.key === o.key &&
        n.offset === o.offset
        ? [0, 0]
        : [pi(n), pi(o)];
    }
    function yi(t, e) {
      for (var _n80 = e; _n80; _n80 = _n80.getParent()) {
        if (Ls(_n80)) {
          if (_n80.collapseAtStart(t)) return !0;
          if (Wc(_n80)) break;
        }
        if (_n80.getPreviousSibling()) break;
      }
      return !1;
    }
    function xi(t) {
      var e = cc();
      !e.isEmpty() &&
        yl(e, t) &&
        (t.anchor.set(e.getKey(), 0, "element"),
        t.focus.set(e.getKey(), e.getChildrenSize(), "element"));
    }
    function Ci(t) {
      var e = t.focus,
        n = t.anchor,
        o = n.key,
        r = n.offset,
        i = n.type;
      (n.set(e.key, e.offset, e.type, !0), e.set(o, r, i, !0));
    }
    function Si(t, e, n, o, r) {
      var i = "character" === o ? ia(t, r) : null,
        s = i && i.focusNode,
        l = i ? i.focusOffset : 0;
      if (
        (t.modify(e, n, o),
        null === i ||
          !(function (t, e, n) {
            return (
              null !== t &&
              3 === t.nodeType &&
              ("backward" === n ? e > 0 : "forward" === n && e < t.length)
            );
          })(s, l, n))
      )
        return;
      var c = ia(t, r);
      c.focusNode === s && c.focusOffset === l && t.modify(e, n, o);
    }
    function Ti(t, e, n) {
      var o = t.getNodes(),
        r = o.filter(function (t) {
          return Rc(t, n);
        });
      if (0 === r.length || r.length === o.length) return !1;
      var i = e ? r[0] : r[r.length - 1],
        s = Ls(i) ? i : i.getParentOrThrow();
      return (e ? s.selectStart() : s.selectEnd(), !0);
    }
    function vi(t, e, n) {
      if (es(t, "extend", e, n)) return;
      var o = gs(),
        r = Gc(Bc(o));
      if (!r || "function" != typeof r.modify) return;
      var i = o._blockCursorElement,
        s = o._rootElement,
        l = t.anchor,
        c = t.focus.getNode();
      null === s ||
        null === i ||
        !Ls(c) ||
        c.isInline() ||
        c.canBeEmpty() ||
        Yc(i, o, s);
      var a = function a(t) {
          var e = t.getNode(),
            n = o.getElementByKey(t.key);
          return null !== n && "text" === t.type && Xr(e) ? Na(e, n, o) : n;
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
        (Hi(r, _, p, _, p),
        Si(r, "move", e ? "backward" : "forward", n, s),
        0 === r.rangeCount)
      )
        return;
      var m = oa(r, s) || r.getRangeAt(0),
        y = m.startContainer,
        x = m.startOffset;
      if (
        h &&
        "character" === n &&
        "text" === l.type &&
        Xr(u) &&
        u.isUnmergeable() &&
        d === (e ? 0 : u.getTextContentSize())
      ) {
        var _n81 = Vu(u, e ? "previous" : "next").getNodeAtCaret();
        if (Xr(_n81)) {
          var _o49 = e ? _n81.getTextContentSize() - 1 : 1;
          return (t.focus.set(_n81.__key, _o49, "text"), void (t.dirty = !0));
        }
      }
      if (h && "character" === n && "text" === l.type) {
        var _n82 = e ? 0 : u.getTextContentSize(),
          _o50 = y === f ? x : d !== _n82 ? _n82 : -1;
        if (_o50 >= 0)
          return void (
            _o50 !== d && (t.focus.set(l.key, _o50, "text"), (t.dirty = !0))
          );
      }
      var _ref35 = e ? [y, x, f, d] : [f, d, y, x],
        C = _ref35[0],
        S = _ref35[1],
        T = _ref35[2],
        v = _ref35[3],
        N = Ws(u) ? u : zc(u);
      (t.applyDOMRange({
        collapsed: !1,
        endContainer: T,
        endOffset: v,
        startContainer: C,
        startOffset: S,
      }),
        (t.dirty = !0),
        !Ti(t, e, N) && e && Ci(t),
        "lineboundary" === n && es(t, "extend", e, n, "decorators"));
    }
    function Ni() {
      try {
        var _t155 = new RegExp("\\p{Emoji}", "u"),
          _e101 = _t155.test.bind(_t155);
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
    }
    var bi = Ni();
    function ki(t, e, n) {
      var o = t,
        r = o.getTextContent().split(/(?=\s)/g),
        i = r.length;
      var s = 0,
        l = 0;
      for (var _t156 = 0; _t156 < i; _t156++) {
        var _o51 = _t156 === i - 1;
        if (
          ((l = s), (s += r[_t156].length), (e && s === n) || s > n || _o51)
        ) {
          (r.splice(_t156, 1), _o51 && (l = void 0));
          break;
        }
      }
      var c = r.join("").trim();
      "" === c ? o.remove() : (o.setTextContent(c), o.select(l, l));
    }
    function Oi(e, n, o, r) {
      var i,
        s = n,
        l = !1;
      if (da(e)) {
        var _c1 = !1;
        var _a9 = e.childNodes,
          _u0 = _a9.length,
          _f8 = r._blockCursorElement;
        (s === _u0 && _u0 > 0 && ((_c1 = !0), (s = _u0 - 1)),
          void 0 !== rc(e, r) || Pa(e, r) || (l = !0));
        var _d7 = _a9[s],
          _h7 = !1;
        if (_d7 === _f8) ((_d7 = _a9[s + 1]), (_h7 = !0));
        else if (null !== _f8) {
          var _t157 = _f8.parentNode;
          e === _t157 &&
            n > Array.prototype.indexOf.call(_t157.children, _f8) &&
            s--;
        }
        if (((i = dc(_d7)), Xr(i))) s = Yu(i, _c1 ? "next" : "previous");
        else {
          var _a0 = dc(e);
          if (null === _a0) return null;
          if (Ls(_a0)) {
            var _u1$resolveChildIndex;
            var _l12 = r.getElementByKey(_a0.getKey());
            null === _l12 && t(214);
            var _u1 = Ta(_a0, _l12, r);
            ((_u1$resolveChildIndex = _u1.resolveChildIndex(_a0, _l12, e, n)),
              (_a0 = _u1$resolveChildIndex[0]),
              (s = _u1$resolveChildIndex[1]),
              Ls(_a0) || t(215),
              _c1 &&
                s >= _a0.getChildrenSize() &&
                (s = Math.max(0, _a0.getChildrenSize() - 1)));
            var _f9 = _a0.getChildAtIndex(s);
            if (
              Ls(_f9) &&
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
              var _t158 = _c1
                ? _f9.getLastDescendant()
                : _f9.getFirstDescendant();
              (null === _t158
                ? (_a0 = _f9)
                : ((_f9 = _t158),
                  (_a0 = Ls(_f9) ? _f9 : _f9.getParentOrThrow())),
                (s = 0));
            }
            Xr(_f9)
              ? ((i = _f9),
                (_a0 = null),
                (s = Yu(_f9, _c1 ? "next" : "previous")))
              : _f9 !== _a0 &&
                _c1 &&
                !_h7 &&
                (Ls(_a0) || t(216),
                (s = Math.min(_a0.getChildrenSize(), s + 1)));
          } else {
            var _t159 = pu(_a0),
              _o52 = null !== _t159 ? _t159 : _a0,
              _i34 = _o52.getIndexWithinParent(),
              _l13 = r.getElementByKey(_a0.getKey());
            var _c10 = "after";
            if (null !== _l13 && dc(e) === _a0) {
              var _t160 = Ta(_a0, _l13, r);
              _t160.element !== _l13
                ? (_c10 = _t160.resolveLeafPosition(_l13, e, n))
                : 0 === n && zs(_a0) && (_c10 = "before");
            }
            ((s = "before" === _c10 ? _i34 : _i34 + 1),
              (_a0 = _o52.getParentOrThrow()));
          }
          if (Ls(_a0)) return [ri(_a0.__key, s, "element"), l];
        }
      } else i = dc(e);
      return Xr(i) ? [ri(i.__key, Yu(i, s, "clamp"), "text"), l] : null;
    }
    function Ei(t, e, n) {
      var o = t.offset,
        r = t.getNode();
      if (0 === o) {
        var _o53 = r.getPreviousSibling(),
          _i35 = r.getParent();
        if (e) {
          if ((n || !e) && null === _o53 && Ls(_i35) && _i35.isInline()) {
            var _e102 = _i35.getPreviousSibling();
            Xr(_e102) &&
              t.set(_e102.__key, _e102.getTextContent().length, "text");
          }
        } else
          Ls(_o53) && !n && _o53.isInline()
            ? t.set(_o53.__key, _o53.getChildrenSize(), "element")
            : Xr(_o53) &&
              !r.isUnmergeable() &&
              t.set(_o53.__key, _o53.getTextContent().length, "text");
      } else if (o === r.getTextContent().length) {
        var _o54 = r.getNextSibling(),
          _i36 = r.getParent();
        if (e && Ls(_o54) && _o54.isInline()) t.set(_o54.__key, 0, "element");
        else if (
          (n || e) &&
          null === _o54 &&
          Ls(_i36) &&
          _i36.isInline() &&
          !_i36.canInsertTextAfter() &&
          _i36.getTextContentSize() > 1
        ) {
          var _e103 = _i36.getNextSibling();
          Xr(_e103) && t.set(_e103.__key, 0, "text");
        }
      }
    }
    function Mi(t) {
      var e = ec(t.key);
      return null === e ? null : yu(e);
    }
    function Ai(t, e, n) {
      var o = Mi(t),
        r = Mi(e);
      if (o === r || (null !== o && null !== r && o.is(r))) return !1;
      var i = n(o, r);
      if (null !== o)
        return (
          Ls(o)
            ? e.set(o.getKey(), i ? o.getChildrenSize() : 0, "element")
            : e.set(o.getKey(), i ? o.getTextContentSize() : 0, "text"),
          !0
        );
      var s = pu(r);
      if (null === s) return !1;
      var l = s.getParent();
      if (null === l) return !1;
      var c = s.getIndexWithinParent();
      return (e.set(l.getKey(), i ? c + 1 : c, "element"), !0);
    }
    function wi(t) {
      var e = Ai(t.anchor, t.focus, function (e, n) {
        return (function (t, e, n, o) {
          if (null !== n && null !== o) {
            var _t161 = pu(n),
              _e104 = pu(o);
            if (null !== _t161 && _t161.is(_e104)) {
              for (var _e105 of xu(_t161).values()) {
                if (_e105 === n.getKey()) return !0;
                if (_e105 === o.getKey()) return !1;
              }
              return !0;
            }
            return null === _t161 || null === _e104 || _t161.isBefore(_e104);
          }
          if (null !== n) {
            var _t162 = pu(n),
              _o55 = ec(e.key);
            return (
              null === _t162 ||
              null === _o55 ||
              !(!_t162.is(_o55) && !_t162.isParentOf(_o55)) ||
              _t162.isBefore(_o55)
            );
          }
          var r = pu(o),
            i = ec(t.key);
          return (
            null !== r &&
            null !== i &&
            !r.is(i) &&
            !r.isParentOf(i) &&
            i.isBefore(r)
          );
        })(t.anchor, t.focus, e, n);
      });
      return (e && (t.dirty = !0), e);
    }
    function Di(t, e, n, o, r, i) {
      if (null === t || null === n || !Kl(r, t, n)) return null;
      var s = Oi(t, e, fi(i) ? i.anchor : null, r);
      if (null === s) return null;
      var l = Oi(n, o, fi(i) ? i.focus : null, r);
      if (null === l) return null;
      var c = s[0],
        a = s[1],
        u = l[0],
        f = l[1];
      if ("element" === c.type && "element" === u.type) {
        var _e106 = dc(t),
          _o56 = dc(n);
        if (zs(_e106) && zs(_o56)) return null;
      }
      var d =
        r._slotsUsed &&
        Ai(c, u, function () {
          return (
            0 !==
            (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_FOLLOWING)
          );
        });
      return (
        (function (t, e) {
          if ("text" === t.type && "text" === e.type) {
            var _n83 = t.isBefore(e),
              _o57 = t.is(e);
            (Ei(t, _n83, _o57),
              Ei(e, !_n83, _o57),
              _o57 && e.set(t.key, t.offset, t.type));
          }
        })(c, u),
        [c, u, a || f || d]
      );
    }
    function Fi(t) {
      return Ls(t) && !t.isInline();
    }
    function Ii(t, e, n, o, r, i) {
      var s = hs(),
        l = new _di(ri(t, e, r), ri(n, o, i), 0, "");
      return ((l.dirty = !0), (s._selection = l), l);
    }
    function Pi() {
      var t = ri("root", 0, "element"),
        e = ri("root", 0, "element");
      return new _di(t, e, 0, "");
    }
    function Ri() {
      return new _ai(new Set());
    }
    function Li(t, e, n, o) {
      var r = n._window;
      if (null === r) return null;
      var i = o || r.event,
        s = i ? i.type : void 0,
        l = "selectionchange" === s,
        c =
          !it &&
          (l ||
            "beforeinput" === s ||
            "compositionstart" === s ||
            "compositionend" === s ||
            ("click" === s && i && 3 === i.detail) ||
            "drop" === s ||
            void 0 === s);
      var a, u, f, d;
      if (fi(t) && !c) return t.clone();
      {
        if (null === e) return null;
        var _o58 = ia(e, n._rootElement);
        if (
          ((a = _o58.anchorNode),
          (u = _o58.focusNode),
          (f = _o58.anchorOffset),
          (d = _o58.focusOffset),
          (l || void 0 === s) && fi(t) && !Kl(n, a, u))
        )
          return t.clone();
      }
      var h = Di(a, f, u, d, n, t);
      if (null === h) return null;
      var g = h[0],
        _ = h[1],
        p = h[2];
      var m = 0,
        y = "";
      if (fi(t)) {
        var _e107 = t.anchor;
        if (g.key === _e107.key) ((m = t.format), (y = t.style));
        else {
          var _t163 = g.getNode();
          Xr(_t163)
            ? ((m = _t163.getFormat()), (y = _t163.getStyle()))
            : Ls(_t163) &&
              ((m = _t163.getTextFormat()), (y = _t163.getTextStyle()));
        }
      }
      var x = new _di(g, _, m, y);
      return (p && (x.dirty = !0), x);
    }
    function Bi() {
      return hs()._selection;
    }
    function Ki() {
      return gs()._editorState._selection;
    }
    function zi(t, e) {
      var n = e.__key;
      return t.anchor.key === n || t.focus.key === n;
    }
    function $i(t, e, n, o) {
      if (o === void 0) {
        o = 1;
      }
      if (!zi(t, e)) return;
      var r = t.anchor,
        i = t.focus,
        s = e.__key;
      if (t.isCollapsed()) {
        var _e108 = r.offset;
        if ((n <= _e108 && o > 0) || (n < _e108 && o < 0)) {
          var _n84 = Math.max(0, _e108 + o);
          (r.set(s, _n84, "element"), i.set(s, _n84, "element"), Wi(t));
        }
      } else {
        var _l14 = t.isBackward(),
          _c11 = _l14 ? i : r,
          _a1 = _c11.getNode(),
          _u10 = _l14 ? r : i,
          _f0 = _u10.getNode();
        if (e.is(_a1)) {
          var _t164 = _c11.offset;
          ((n <= _t164 && o > 0) || (n < _t164 && o < 0)) &&
            _c11.set(s, Math.max(0, _t164 + o), "element");
        }
        if (e.is(_f0)) {
          var _t165 = _u10.offset;
          ((n <= _t165 && o > 0) || (n < _t165 && o < 0)) &&
            _u10.set(s, Math.max(0, _t165 + o), "element");
        }
      }
      Wi(t);
    }
    function Wi(t) {
      var e = t.anchor,
        n = e.offset,
        o = t.focus,
        r = o.offset,
        i = e.getNode(),
        s = o.getNode();
      if (t.isCollapsed()) {
        if (!Ls(i)) return;
        var _t166 = i.getChildrenSize(),
          _r36 = n >= _t166,
          _s19 = _r36 ? i.getChildAtIndex(_t166 - 1) : i.getChildAtIndex(n);
        if (Xr(_s19)) {
          var _t167 = 0;
          (_r36 && (_t167 = _s19.getTextContentSize()),
            e.set(_s19.__key, _t167, "text"),
            o.set(_s19.__key, _t167, "text"));
        }
        return;
      }
      if (Ls(i)) {
        var _t168 = i.getChildrenSize(),
          _o59 = n >= _t168,
          _r37 = _o59 ? i.getChildAtIndex(_t168 - 1) : i.getChildAtIndex(n);
        if (Xr(_r37)) {
          var _t169 = 0;
          (_o59 && (_t169 = _r37.getTextContentSize()),
            e.set(_r37.__key, _t169, "text"));
        }
      }
      if (Ls(s)) {
        var _t170 = s.getChildrenSize(),
          _e109 = r >= _t170,
          _n85 = _e109 ? s.getChildAtIndex(_t170 - 1) : s.getChildAtIndex(r);
        if (Xr(_n85)) {
          var _t171 = 0;
          (_e109 && (_t171 = _n85.getTextContentSize()),
            o.set(_n85.__key, _t171, "text"));
        }
      }
    }
    function Ui(t, e, n, o, r) {
      var i = null,
        s = 0,
        l = null;
      (null !== o
        ? ((i = o.__key),
          Xr(o)
            ? ((s = o.getTextContentSize()), (l = "text"))
            : Ls(o) && ((s = o.getChildrenSize()), (l = "element")))
        : null !== r &&
          ((i = r.__key), Xr(r) ? (l = "text") : Ls(r) && (l = "element")),
        null !== i && null !== l
          ? t.set(i, s, l)
          : ((s = e.getIndexWithinParent()),
            -1 === s && (s = n.getChildrenSize()),
            t.set(n.__key, s, "element")));
    }
    function ji(t, e, n, o, r) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : r), "text")
        : t.offset > o.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function Hi(t, e, n, o, r) {
      try {
        t.setBaseAndExtent(e, n, o, r);
      } catch (t) {}
    }
    function Vi(t, e, n) {
      var o = wc(t, e.getKey());
      if (Ls(e)) {
        var _r38 = Ta(e, o, t);
        return [_r38.element, n + _r38.getFirstChildOffset()];
      }
      return [o, n];
    }
    function Ji(t, e, n, o, r, i) {
      var s = i.getRootNode(),
        l = Vl(s) || Xc(s) ? ua(s) : null;
      if ((r.has(_r) && l !== i) || (null !== l && Ll(l, l))) return;
      var c = ia(o, i);
      var u;
      if (!fi(e))
        return void (
          null !== t &&
          Kl(n, c.anchorNode, c.focusNode) &&
          o.removeAllRanges()
        );
      var f = e.anchor,
        d = e.focus,
        h = f.getNode(),
        g = d.getNode(),
        _Vi = Vi(n, h, f.offset),
        _ = _Vi[0],
        p = _Vi[1],
        _Vi2 = Vi(n, g, d.offset),
        m = _Vi2[0],
        y = _Vi2[1],
        x = e.format,
        C = e.style,
        S = e.isCollapsed();
      var T = _,
        v = m,
        N = !1;
      if (
        ("text" === f.type
          ? ((T = Xr(h) ? Na(h, _, n) : null),
            (N = h.getFormat() !== x || h.getStyle() !== C))
          : fi(t) && "text" === t.anchor.type && (N = !0),
        "text" === d.type && (v = Xr(g) ? Na(g, m, n) : null),
        null !== T && null !== v)
      ) {
        if (
          (S &&
            (null === t || N || (fi(t) && (t.format !== x || t.style !== C))) &&
            (function (t, e, n, o, r, i) {
              t._inputState.collapsedSelectionFormat = {
                format: e,
                key: r,
                offset: o,
                style: n,
                timeStamp: i,
              };
            })(n, x, C, p, f.key, performance.now()),
          ("Range" !== o.type || !S) &&
            c.anchorOffset === p &&
            c.focusOffset === y &&
            c.anchorNode === T &&
            c.focusNode === v)
        ) {
          if (null === l || !i.contains(l)) {
            var _t172 = null !== l ? $l(l) : null;
            (null !== _t172 && _t172 !== n) ||
              r.has(yr) ||
              i.focus({ preventScroll: !0 });
          }
          if ("element" !== f.type) return;
        }
        if (
          (Hi(o, T, p, v, y), a && e.isCollapsed() && null !== i && !r.has(yr))
        ) {
          var _t173 = aa(i);
          if (null === _t173 || !i.contains(_t173)) {
            var _t174 = ua(i.ownerDocument),
              _e110 = null !== _t174 ? $l(_t174) : null;
            (null !== _e110 && _e110 !== n) || i.focus({ preventScroll: !0 });
          }
        }
        if (!r.has(pr) && e.isCollapsed() && null !== i && i === aa(i)) {
          var _t175 =
            fi(e) && "element" === e.anchor.type
              ? T.childNodes[p] || null
              : (void 0 === u && (u = ra(o, i)), u);
          if (null !== _t175) {
            var _e111;
            if (Hl(_t175)) {
              var _n86 = _t175.ownerDocument.createRange();
              (_n86.selectNode(_t175), (_e111 = _n86.getBoundingClientRect()));
            } else _e111 = _t175.getBoundingClientRect();
            !(function (t, e, n) {
              var o = Fc(n),
                r = Lc(o);
              if (null === o || null === r) return;
              var i = n.getBoundingClientRect();
              if (e.bottom < i.top) return;
              var s = e.top,
                l = e.bottom,
                c = 0,
                a = 0,
                u = n;
              for (; null !== u; ) {
                var _e112 = u === o.body;
                if (_e112) {
                  var _e113 = r.visualViewport;
                  if (_e113) {
                    var _t176 = _e113.offsetTop;
                    ((c = _t176), (a = _t176 + _e113.height));
                  } else ((c = 0), (a = Bc(t).innerHeight));
                  var _n87 = r.getComputedStyle(o.documentElement),
                    _i37 = parseFloat(_n87.scrollPaddingTop),
                    _s20 = parseFloat(_n87.scrollPaddingBottom);
                  (isFinite(_i37) && (c += _i37),
                    isFinite(_s20) && (a -= _s20));
                } else {
                  var _t177 = u === n ? i : u.getBoundingClientRect();
                  ((c = _t177.top), (a = _t177.bottom));
                }
                var _f1 = 0;
                if (
                  (s < c ? (_f1 = -(c - s)) : l > a && (_f1 = l - a), 0 !== _f1)
                )
                  if (_e112) r.scrollBy(0, _f1);
                  else {
                    var _t178 = u.scrollTop;
                    u.scrollTop += _f1;
                    var _e114 = u.scrollTop - _t178;
                    ((s -= _e114), (l -= _e114));
                  }
                if (_e112) break;
                u = Dc(u);
              }
            })(n, _e111, i);
          }
        }
        !(function (t, e, n, o, r) {
          var i = t._inputState;
          ((i.isSelectionChangeFromDOMUpdate = !0),
            (i.selectionChangeFromDOMUpdatePoints =
              void 0 !== e && void 0 !== n && void 0 !== o && void 0 !== r
                ? {
                    anchorNode: e,
                    anchorOffset: n,
                    focusNode: o,
                    focusOffset: r,
                  }
                : null));
        })(n, T, p, v, y);
      }
    }
    function Yi(t, e) {
      for (var _n88 of t.split(/(\r?\n|\t)/))
        "\n" === _n88 || "\r\n" === _n88
          ? e.linebreak()
          : "\t" === _n88
            ? e.tab()
            : "" !== _n88 && e.text(_n88);
    }
    function Gi(t) {
      var e = [];
      return (
        Yi(t, {
          linebreak: function linebreak() {
            return e.push(qs());
          },
          tab: function tab() {
            return e.push(ei());
          },
          text: function text(t) {
            return e.push(qr(t));
          },
        }),
        e
      );
    }
    function qi(t) {
      var e = [];
      for (var _n89 of t)
        Xs(_n89) ||
          ((!Ls(_n89) && !zs(_n89)) || _n89.isInline()
            ? e.push(_n89)
            : Ls(_n89) && e.push.apply(e, Array.from(qi(_n89.getChildren()))));
      return e;
    }
    function Xi(e, n) {
      if (n === void 0) {
        n = !1;
      }
      var o = e;
      e.isCollapsed() || o.removeText();
      var r = Bi();
      (fi(r) && (o = r), fi(o) || t(161));
      var i = o.anchor;
      var s = i.getNode(),
        l = i.offset;
      for (; !xa(s) && null === _u(s); ) {
        var _Qi;
        var _t179 = s;
        if (((_Qi = Qi(s, l, n)), (s = _Qi[0]), (l = _Qi[1]), _t179.is(s)))
          break;
      }
      return [s, l];
    }
    function Qi(t, e, n) {
      if (n === void 0) {
        n = !1;
      }
      var o = t.getParent();
      if (!o) {
        var _t180 = Sl();
        return (cc().append(_t180), _t180.select(), [cc(), 0]);
      }
      if (Xr(t)) {
        var _n90 = t.splitText(e);
        if (0 === _n90.length) return [o, t.getIndexWithinParent()];
        var _r39 = 0 === e ? 0 : 1;
        return [o, _n90[0].getIndexWithinParent() + _r39];
      }
      if (!Ls(t) || 0 === e) return [o, t.getIndexWithinParent()];
      var r = t.getChildAtIndex(e);
      if (r) {
        var _o60 = new _di(
            ri(t.__key, e, "element"),
            ri(t.__key, e, "element"),
            0,
            "",
          ),
          _i38 = t.insertNewAfter(_o60);
        if (_i38)
          _i38.append.apply(_i38, [r].concat(Array.from(r.getNextSiblings())));
        else if (n) return [t, e];
      }
      return [o, t.getIndexWithinParent() + 1];
    }
    function Zi(t) {
      return Xs(t) || Kc(t) || Xr(t) || t.isParentRequired();
    }
    function ts(t) {
      var e = Sl();
      var n = null;
      for (var _o61 = 0; _o61 < t.length; _o61++) {
        var _r40 = t[_o61];
        if (Zi(_r40)) {
          if (null === n) {
            ((n = _r40.createParentElementNode()), e.append(n));
            var _i39 = t[_o61 + 1];
            if (Xs(_r40) && (void 0 === _i39 || !Zi(_i39))) continue;
          }
          n.append(_r40);
        } else (e.append(_r40), (n = null));
      }
      return e;
    }
    function es(t, e, n, o, r) {
      if (r === void 0) {
        r = "decorators-and-blocks";
      }
      if ("move" === e && "character" === o && !t.isCollapsed()) {
        var _ref36 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e115 = _ref36[0],
          _o62 = _ref36[1];
        return (_o62.set(_e115.key, _e115.offset, _e115.type), !0);
      }
      var i = el(t.focus, n ? "previous" : "next"),
        s = "lineboundary" === o,
        l = "move" === e;
      var c = i,
        a = "decorators-and-blocks" === r,
        u = !1;
      if (!fl(c)) {
        for (var _t181 of c) {
          a = !1;
          var _e116 = _t181.origin;
          if (zs(_e116)) {
            if (_e116.isIsolated()) {
              u = !0;
              break;
            }
            if (((c = _t181), s && _e116.isInline())) continue;
          }
          break;
        }
        if (u) return !0;
        if (a)
          for (var _t182 of nf(i).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (Wu(_t182)) _t182.origin.isInline() || (c = _t182);
            else {
              if (Ls(_t182.origin)) continue;
              zs(_t182.origin) && !_t182.origin.isInline() && (c = _t182);
            }
            break;
          }
      }
      if (c === i) return !1;
      if (l && !s && zs(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t183 = Ri();
        return (_t183.add(c.origin.getKey()), uc(_t183), !0);
      }
      return ((c = ul(c)), l && nl(t.anchor, c), nl(t.focus, c), a || !s);
    }
    var ns = null,
      os = null,
      rs = !1,
      is = !1,
      ss = !1;
    var ls = new Set();
    var cs = 0;
    var as = { characterData: !0, childList: !0, subtree: !0 };
    function us() {
      return rs || (null !== ns && ns._readOnly);
    }
    function fs() {
      rs && t(13);
    }
    function ds() {
      cs > 99 && t(14);
    }
    function hs() {
      return (null === ns && t(195, ps()), ns);
    }
    function gs() {
      return (null === os && t(337, ps()), os);
    }
    function _s() {
      gs()._dirtyType = 2;
    }
    function ps() {
      var t = 0;
      var e = new Set(),
        n = _Ml.version;
      if ("undefined" != typeof window)
        for (var _o63 of ta(document)) {
          var _r41 = Wl(_o63);
          if (zl(_r41)) t++;
          else if (_r41) {
            var _t184 = String(_r41.constructor.version || "<0.17.1");
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
    function ms() {
      return os;
    }
    function ys(t, e, n) {
      var o = e.__type,
        r = Il(t, o);
      var i = n.get(o);
      void 0 === i && ((i = Array.from(r.transforms)), n.set(o, i));
      var s = i.length;
      for (var _t185 = 0; _t185 < s && (i[_t185](e), e.isAttached()); _t185++);
    }
    function xs(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function Cs(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var o = e;
      Array.isArray(e) || (o = [e]);
      for (var _t186 of o) n.add(_t186);
    }
    function Ss(e, n) {
      var o = e.type,
        r = n.get(o);
      void 0 === r && t(17, o);
      var i = r.klass;
      e.type !== i.getType() && t(18, i.name);
      var s = i.importJSON(e),
        l = e.children;
      if (Ls(s) && Array.isArray(l))
        for (var _t187 = 0; _t187 < l.length; _t187++) {
          var _e117 = Ss(l[_t187], n);
          s.append(_e117);
        }
      var c = e.$slots;
      if (c) {
        hu(s) || t(379, i.name);
        for (var _t188 in c) Au(s, _t188, Ss(c[_t188], n));
      }
      return s;
    }
    function Ts(t, e, n) {
      var o = ns,
        r = rs,
        i = os;
      ((ns = e), (rs = !0), (os = t));
      try {
        return n();
      } finally {
        ((ns = o), (rs = r), (os = i));
      }
    }
    function vs(t, e) {
      var n = ss;
      ss = !0;
      try {
        !(function (t, e) {
          var n = t._pendingEditorState,
            o = t._rootElement,
            r = t._headless || null === o;
          if (null === n)
            return void (
              !t._updating &&
              t._deferred.length > 0 &&
              ks(t, t._deferred)
            );
          var i = t._editorState,
            s = i._selection,
            l = n._selection,
            c = 0 !== t._dirtyType,
            a = ns,
            u = rs,
            f = os,
            d = t._updating,
            h = t._observer;
          var g = null;
          if (
            ((t._pendingEditorState = null),
            (t._editorState = n),
            !r && c && null !== h)
          ) {
            ((os = t), (ns = n), (rs = !1), (t._updating = !0));
            try {
              var _e118 = t._dirtyType,
                _o64 = t._dirtyElements,
                _r42 = t._dirtyLeaves;
              (h.disconnect(), (g = hn(i, n, t, _e118, _o64, _r42)));
            } catch (e) {
              if ((e instanceof Error && t._onError(e), is)) throw e;
              return (
                Nl(t, null, o, n),
                gt(t),
                (t._dirtyType = 2),
                (is = !0),
                vs(t, i),
                void (is = !1)
              );
            } finally {
              (h.observe(o, as),
                (t._updating = d),
                (ns = a),
                (rs = u),
                (os = f));
            }
          }
          n._readOnly || (n._readOnly = !0);
          var _ = t._dirtyLeaves,
            p = t._dirtyElements,
            m = t._normalizedNodes,
            y = t._updateTags;
          (c &&
            ((t._dirtyType = 0),
            t._cloneNotNeeded.clear(),
            (t._dirtyLeaves = new Set()),
            (t._dirtyElements = new Map()),
            (t._normalizedNodes = new Set())),
            (t._updateTags = new Set()),
            (function (t, e) {
              var n = t._decorators;
              var o = t._pendingDecorators || n;
              var r = e._nodeMap;
              var i;
              for (i in o) r.has(i) || (o === n && (o = sc(t)), delete o[i]);
            })(t, n));
          var x = r ? null : Gc(Bc(t));
          if (
            t._editable &&
            null !== x &&
            (c || null === l || l.dirty || !l.is(s)) &&
            null !== o &&
            !y.has(mr)
          ) {
            ((os = t), (ns = n));
            try {
              if ((null !== h && h.disconnect(), c || null === l || l.dirty)) {
                var _e119 = t._blockCursorElement;
                (null !== _e119 && Yc(_e119, t, o), Ji(s, l, t, x, y, o));
              }
              !(function (t, e, n) {
                var o = t._blockCursorElement;
                if (
                  fi(n) &&
                  n.isCollapsed() &&
                  "element" === n.anchor.type &&
                  e.contains(aa(e))
                ) {
                  var _r43 = n.anchor,
                    _i40 = _r43.getNode(),
                    _s21 = _r43.offset;
                  var _l15 = !1,
                    _c12 = null;
                  if (_s21 === _i40.getChildrenSize())
                    Jc(_i40.getChildAtIndex(_s21 - 1)) && (_l15 = !0);
                  else {
                    var _e120 = _i40.getChildAtIndex(_s21);
                    null !== _e120 &&
                      Jc(_e120) &&
                      ((_l15 = !0), (_c12 = t.getElementByKey(_e120.__key)));
                  }
                  if (_l15) {
                    var _n91 = Ta(
                      _i40,
                      t.getElementByKey(_i40.__key),
                      t,
                    ).element;
                    return (
                      null === o &&
                        (t._blockCursorElement = o =
                          (function (t) {
                            var e = t.theme,
                              n = na().createElement("div");
                            ((n.contentEditable = "false"),
                              n.setAttribute("data-lexical-cursor", "true"));
                            var o = e.blockCursor;
                            if (void 0 !== o) {
                              var _n$classList;
                              if ("string" == typeof o) {
                                var _t189 = df(o);
                                o = e.blockCursor = _t189;
                              }
                              void 0 !== o &&
                                (_n$classList = n.classList).add.apply(
                                  _n$classList,
                                  Array.from(o),
                                );
                            }
                            return n;
                          })(t._config)),
                      (e.style.caretColor = "transparent"),
                      void (null === _c12
                        ? _n91.appendChild(o)
                        : _n91.insertBefore(o, _c12))
                    );
                  }
                }
                null !== o && Yc(o, t, e);
              })(t, o, l);
            } finally {
              (null !== h && h.observe(o, as), (os = f), (ns = a));
            }
          }
          (null !== g &&
            (function (t, e, n, o, r) {
              var i = Array.from(t._listeners.mutation),
                s = i.length;
              for (var _t190 = 0; _t190 < s; _t190++) {
                var _i$_t = i[_t190],
                  _s22 = _i$_t[0],
                  _l16 = _i$_t[1];
                for (var _t191 of _l16) {
                  var _i41 = e.get(_t191);
                  void 0 !== _i41 &&
                    _s22(_i41, {
                      dirtyLeaves: o,
                      prevEditorState: r,
                      updateTags: n,
                    });
                }
              }
            })(t, g, y, _, i),
            fi(l) ||
              null === l ||
              (null !== s && s.is(l)) ||
              t.dispatchCommand(mn));
          var C = t._pendingDecorators;
          (null !== C &&
            ((t._decorators = C),
            (t._pendingDecorators = null),
            Ns("decorator", t, !0, C)),
            (function (t, e, n) {
              var o = lc(e),
                r = lc(n);
              o !== r && Ns("textcontent", t, !0, r);
            })(t, e || i, n),
            Ns("update", t, !0, {
              dirtyElements: p,
              dirtyLeaves: _,
              editorState: n,
              mutatedNodes: g,
              normalizedNodes: m,
              prevEditorState: e || i,
              tags: y,
            }),
            d || ks(t, t._deferred),
            (function (t) {
              var e = t._updates;
              if (0 === e.length) return void (t._cascadeCount = 0);
              if (
                ((function (t) {
                  ls.has(t) ||
                    (ls.add(t),
                    setTimeout(function () {
                      (ls["delete"](t), (t._cascadeCount = 0));
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
                var _e121 = n[0],
                  _o65 = n[1];
                Es(t, _e121, _o65);
              }
            })(t));
        })(t, e);
      } finally {
        ss = n;
      }
    }
    function Ns(t, e, n) {
      var r = e._updating;
      e._updating = n;
      try {
        var _n92 = e._listeners[t],
          _r44 = Array.from(_n92);
        for (
          var _len4 = arguments.length,
            o = new Array(_len4 > 3 ? _len4 - 3 : 0),
            _key4 = 3;
          _key4 < _len4;
          _key4++
        ) {
          o[_key4 - 3] = arguments[_key4];
        }
        for (var _ref38 of _r44) {
          var _t192 = _ref38[0];
          var _e122 = _ref38[1];
          {
            _e122 && _e122();
            var _r45 = _t192.apply(void 0, Array.from(o)),
              _i42 = "function" == typeof _r45 ? _r45 : void 0;
            _n92.has(_t192) ? _n92.set(_t192, _i42) : _i42 && _i42();
          }
        }
      } finally {
        e._updating = r;
      }
    }
    function bs(t, e, n, o) {
      var r = gc(t);
      var i;
      if (!ss)
        for (var _t193 = 0; _t193 < r.length; _t193++)
          r[_t193]._updating || (r[_t193]._cascadeCount = 0);
      for (var _t194 = 4; _t194 >= 0; _t194--) {
        var _loop2 = function _loop2() {
            var l = r[_s23];
            if (_s23 > 0 && l._updating) {
              i = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e123 = c[_t194];
              if (_e123.size > 0) {
                var _t195 = !1;
                if (
                  (Ms(l, function () {
                    for (var _r46 of _e123)
                      if (_r46(n, o)) return void (_t195 = !0);
                  }),
                  _t195)
                )
                  return { v: _t195 };
              }
            }
          },
          _ret;
        for (var _s23 = 0; _s23 < r.length; _s23++) {
          _ret = _loop2();
          if (_ret === 0) break;
          if (_ret) return _ret.v;
        }
      }
      return (
        i &&
          i.update(function () {
            bs(i, e, n, o);
          }),
        !1
      );
    }
    function ks(t, e) {
      if (((t._deferred = []), 0 !== e.length)) {
        var _n93 = t._updating;
        t._updating = !0;
        try {
          for (var _t196 = 0; _t196 < e.length; _t196++) e[_t196]();
        } finally {
          t._updating = _n93;
        }
      }
    }
    function Os(e, n) {
      var o = e._updates;
      var r = n || !1;
      for (; 0 !== o.length; ) {
        var _n94 = o.shift();
        if (_n94) {
          var _o66 = _n94[0],
            _i43 = _n94[1],
            _s24 = e._pendingEditorState;
          var _l17 = void 0;
          (void 0 !== _i43 &&
            ((_l17 = _i43.onUpdate),
            _i43.skipTransforms && (r = !0),
            _i43.discrete && (null === _s24 && t(191), (_s24._flushSync = !0)),
            _l17 && e._deferred.push(_l17),
            Cs(e, _i43.tag)),
            null == _s24 ? Es(e, _o66, _i43) : _o66());
        }
      }
      return r;
    }
    function Es(e, n, o) {
      var r = e._updateTags;
      var i,
        s = !1,
        l = !1;
      (void 0 !== o &&
        ((i = o.onUpdate),
        Cs(e, o.tag),
        (s = o.skipTransforms || !1),
        (l = o.discrete || !1)),
        i && e._deferred.push(i));
      var c = e._editorState;
      var a = e._pendingEditorState,
        u = !1;
      ((null === a || a._readOnly) &&
        ((a = e._pendingEditorState = Us(a || c)), (u = !0)),
        (a._flushSync = l));
      var f = ns,
        d = rs,
        h = os,
        g = e._updating;
      ((ns = a), (rs = !1), (e._updating = !0), (os = e));
      var _ = e._headless || null === e.getRootElement();
      wl(null);
      try {
        u &&
          (_
            ? null !== c._selection && (a._selection = c._selection.clone())
            : (a._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  o = Gc(Bc(t));
                return fi(n) || null == n ? Li(n, o, t, e) : n.clone();
              })(e, (o && o.event) || null)));
        var _r47 = e._compositionKey;
        (n(),
          (s = Os(e, s)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              o = t._selection;
            if (fi(o)) {
              var _t197 = o.anchor,
                _e124 = o.focus;
              var _r48;
              if (
                ("text" === _t197.type &&
                  ((_r48 = _t197.getNode()), _r48.selectionTransform(n, o)),
                "text" === _e124.type)
              ) {
                var _t198 = _e124.getNode();
                _r48 !== _t198 && _t198.selectionTransform(n, o);
              }
            }
          })(a, e),
          0 !== e._dirtyType &&
            (s
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = t._nodeMap;
                  for (var _t199 of n) {
                    var _e125 = o.get(_t199);
                    Xr(_e125) &&
                      _e125.isAttached() &&
                      _e125.isSimpleText() &&
                      !_e125.isUnmergeable() &&
                      he(_e125);
                  }
                })(a, e)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = e._dirtyElements,
                    r = t._nodeMap,
                    i = tc(),
                    s = new Map();
                  var l = n,
                    c = l.size,
                    a = o,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t200 of l) {
                        var _o67 = r.get(_t200);
                        (Xr(_o67) &&
                          _o67.isAttached() &&
                          _o67.isSimpleText() &&
                          !_o67.isUnmergeable() &&
                          he(_o67),
                          void 0 !== _o67 && xs(_o67, i) && ys(e, _o67, s),
                          n.add(_t200));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        cs++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t201 of a) {
                      var _n95 = _t201[0],
                        _l18 = _t201[1];
                      if ((o.set(_n95, _l18), !_l18)) continue;
                      var _c13 = r.get(_n95);
                      void 0 !== _c13 && xs(_c13, i) && ys(e, _c13, s);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      cs++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = o));
                })(a, e),
            Os(e),
            (function (t, e, n, o) {
              var r = t._nodeMap,
                i = e._nodeMap,
                s = [];
              for (var _ref40 of o) {
                var _t202 = _ref40[0];
                {
                  var _e126 = i.get(_t202);
                  void 0 !== _e126 &&
                    (_e126.isAttached() ||
                      (Ls(_e126) && rt(_e126, _t202, r, i, s, o),
                      r.has(_t202) || o["delete"](_t202),
                      s.push(_t202)));
                }
              }
              for (var _t203 of n) {
                var _e127 = i.get(_t203);
                void 0 === _e127 ||
                  _e127.isAttached() ||
                  (hu(_e127) &&
                    null !== _e127.__slots &&
                    rt(_e127, _t203, r, i, s, n),
                  r.has(_t203) || n["delete"](_t203),
                  s.push(_t203));
              }
              var l = gs(),
                c = l._cloneNotNeeded;
              for (var _t204 of s) (i["delete"](_t204), c["delete"](_t204));
              var a = l._compositionKey;
              null === a || i.has(a) || (l._compositionKey = null);
            })(c, a, e._dirtyLeaves, e._dirtyElements)),
          _r47 !== e._compositionKey && (a._flushSync = !0));
        var _i44 = a._selection;
        if (fi(_i44)) {
          e._slotsUsed && wi(_i44);
          var _n96 = a._nodeMap,
            _o68 = _i44.anchor.key,
            _r49 = _i44.focus.key;
          (void 0 !== _n96.get(_o68) && void 0 !== _n96.get(_r49)) || t(19);
        } else hi(_i44) && 0 === _i44._nodes.size && (a._selection = null);
      } catch (t) {
        return (
          t instanceof Error && e._onError(t),
          (e._pendingEditorState = c),
          (e._dirtyType = 2),
          e._cloneNotNeeded.clear(),
          (e._dirtyLeaves = new Set()),
          e._dirtyElements.clear(),
          void vs(e)
        );
      } finally {
        ((ns = f), (rs = d), (os = h), (e._updating = g), (cs = 0));
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
          ? ((a._flushSync = !1), vs(e))
          : u &&
            Rl(function () {
              vs(e);
            })
        : ((a._flushSync = !1),
          u && (r.clear(), (e._deferred = []), (e._pendingEditorState = null)));
    }
    function Ms(t, e, n) {
      os === t && void 0 === n ? (us() ? Es(t, e, n) : e()) : Es(t, e, n);
    }
    function As() {
      return babelHelpers["extends"]({}, F, { 0: "" });
    }
    function ws() {
      return babelHelpers["extends"]({}, w, { "": 0 });
    }
    var Ds = As(),
      Fs = ws(),
      Is = Ht()({
        direction: Jt(Ut([null, "ltr", "rtl"]), { field: "__dir" }),
        format: Jt(
          Ut(["", "left", "start", "center", "right", "end", "justify"]),
          {
            field: "__format",
            getter: "getFormatType",
            getterTable: Ds,
            setter: "setFormat",
            setterTable: Fs,
          },
        ),
        indent: Jt(Wt(0, { integer: !0, min: 0 }), { field: "__indent" }),
        textFormat: Yt(Wt(), {
          getter: {
            field: "__textFormat",
            method: "getSerializedTextFormat",
            when: "shouldSerializeTextStyles",
          },
          setter: { field: "__textFormat" },
        }),
        textStyle: Yt(zt(), {
          getter: {
            field: "__textStyle",
            method: "getSerializedTextStyle",
            when: "shouldSerializeTextStyles",
          },
          setter: { field: "__textStyle" },
        }),
      });
    function Ps(t) {
      if (Wc(t)) {
        var _e128 = null;
        for (var _n97 of t.getChildren())
          _e128 = _n97.isInline()
            ? (_e128 || _n97.replace(_n97.createParentElementNode())).append(
                _n97,
              )
            : null;
      }
    }
    var _Rs4 = (function (_dr2) {
      function Rs(t) {
        var _this3;
        ((_this3 = _dr2.call(this, t) || this),
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
      babelHelpers.inheritsLoose(Rs, _dr2);
      var _proto11 = Rs.prototype;
      _proto11.$config = function $config() {
        return this.config(Symbol["for"]("ElementNode"), {
          $transform: Ps,
          extends: _dr5,
          generated: Nr,
          json: Is,
        });
      };
      _proto11.afterCloneFrom = function afterCloneFrom(e) {
        (_dr2.prototype.afterCloneFrom.call(this, e),
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
          (this.__style = e.__style),
          (function (t, e) {
            ((t.__dir = e.__dir),
              (t.__format = e.__format),
              (t.__indent = e.__indent),
              (t.__textFormat = e.__textFormat),
              (t.__textStyle = e.__textStyle));
          })(this, e));
      };
      _proto11.getFormat = function getFormat() {
        return this.getLatest().__format;
      };
      _proto11.getFormatType = function getFormatType() {
        var t = this.getFormat();
        return F[t] || "";
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
        return 0 === this.getChildrenSize() && 0 === Cu(this).length;
      };
      _proto11.isDirty = function isDirty() {
        var t = gs()._dirtyElements;
        return null !== t && t.has(this.__key);
      };
      _proto11.isLastChild = function isLastChild() {
        var t = this.getLatest(),
          e = this.getParentOrThrow().getLastChild();
        return null !== e && e.is(t);
      };
      _proto11.getAllTextNodes = function getAllTextNodes() {
        var t = [];
        for (var _e129 of Cu(this)) {
          var _n98 = Su(this, _e129);
          if (Ls(_n98)) for (var _e130 of _n98.getAllTextNodes()) t.push(_e130);
        }
        var e = this.getFirstChild();
        for (; null !== e; ) {
          if ((Xr(e) && t.push(e), Ls(e)))
            for (var _n99 of e.getAllTextNodes()) t.push(_n99);
          e = e.getNextSibling();
        }
        return t;
      };
      _proto11.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; Ls(t); ) {
          var _e131 = t.getFirstChild();
          if (null === _e131) break;
          t = _e131;
        }
        return t;
      };
      _proto11.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; Ls(t); ) {
          var _e132 = t.getLastChild();
          if (null === _e132) break;
          t = _e132;
        }
        return t;
      };
      _proto11.getDescendantByIndex = function getDescendantByIndex(t) {
        var e = this.getChildren(),
          n = e.length;
        if (t >= n) {
          var _t205 = e[n - 1];
          return (Ls(_t205) && _t205.getLastDescendant()) || _t205 || null;
        }
        var o = e[t];
        return (Ls(o) && o.getFirstDescendant()) || o || null;
      };
      _proto11.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : ec(t);
      };
      _proto11.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var e = this.getFirstChild();
        return (null === e && t(45, this.__key), e);
      };
      _proto11.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : ec(t);
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
        var t = Eu(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o69 = 0; _o69 < n; _o69++) {
          var _r50 = e[_o69];
          ((t += _r50.getTextContent()),
            Ls(_r50) && _o69 !== n - 1 && !_r50.isInline() && (t += T));
        }
        return t;
      };
      _proto11.getTextContentSize = function getTextContentSize() {
        var t = (function (t) {
          var e = 0;
          for (var _n100 of Cu(t)) {
            var _o70 = Su(t, _n100);
            null !== _o70 && (e += _o70.getTextContentSize());
          }
          return e;
        })(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o71 = 0; _o71 < n; _o71++) {
          var _r51 = e[_o71];
          ((t += _r51.getTextContentSize()),
            Ls(_r51) && _o71 !== n - 1 && !_r51.isInline() && (t += 2));
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
          var _e133 = w[t];
          return 0 !== (this.getFormat() & _e133);
        }
        return !1;
      };
      _proto11.hasTextFormat = function hasTextFormat(t) {
        var e = M[t];
        return 0 !== (this.getTextFormat() & e);
      };
      _proto11.getFormatFlags = function getFormatFlags(t, e) {
        return Yl(this.getLatest().__textFormat, t, e);
      };
      _proto11.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto11.select = function select(t, e) {
        fs();
        var n = Bi();
        var o = t,
          r = e;
        var i = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t206 = this.getFirstChild();
            if (Xr(_t206) || Ls(_t206)) return _t206.select(0, 0);
          } else if (
            !((void 0 !== t && t !== i) || (void 0 !== e && e !== i))
          ) {
            var _t207 = this.getLastChild();
            if (Xr(_t207) || Ls(_t207)) return _t207.select();
          }
        (void 0 === o && (o = i), void 0 === r && (r = i));
        var s = this.__key;
        return fi(n)
          ? (n.anchor.set(s, o, "element"),
            n.focus.set(s, r, "element"),
            (n.dirty = !0),
            n)
          : Ii(s, o, s, r, "element", "element");
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
        var e = this.getWritable();
        return ((e.__format = ("" !== t && w[t]) || 0), e);
      };
      _proto11.setStyle = function setStyle(t) {
        var e = this.getWritable();
        return ((e.__style = t || ""), e);
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
        var e = this.getWritable();
        return ((e.__indent = t), e);
      };
      _proto11.splice = function splice(e, n, o) {
        ur(this) && t(324, this.__key, this.__type);
        var r = this.getChildrenSize(),
          i = this.getWritable();
        e + n <= r || t(226, String(e), String(n), String(r));
        for (var _t208 of o);
        var s = i.__key,
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
          var _e134 = null === u ? this.getFirstChild() : u.getNextSibling();
          for (var _o72 = 0; _o72 < n; _o72++) {
            null === _e134 && t(100);
            var _n101 = _e134.getNextSibling(),
              _o73 = _e134.__key;
            (ql(_e134.getWritable()), c.push(_o73), (_e134 = _n101));
          }
        }
        var d = u;
        for (var _e135 of o) {
          (null !== d && _e135.is(d) && (u = d = d.getPreviousSibling()),
            null !== a && _e135.is(a) && (a = a.getNextSibling()));
          var _n102 = _e135.getWritable();
          (_n102.__parent === s && f--, ql(_n102));
          var _o74 = _e135.__key;
          if (null === d) ((i.__first = _o74), (_n102.__prev = null));
          else {
            var _t210 = d.getWritable();
            ((_t210.__next = _o74), (_n102.__prev = _t210.__key));
          }
          (_e135.__key === s && t(76),
            (_n102.__parent = s),
            l.push(_o74),
            (d = _e135));
        }
        if (null === a)
          null !== d && ((d.getWritable().__next = null), (i.__last = d.__key));
        else {
          var _t211 = a.getWritable();
          if (null !== d) {
            var _e136 = d.getWritable();
            ((_t211.__prev = d.__key), (_e136.__next = a.__key));
          } else _t211.__prev = null;
        }
        if (((i.__size = f), c.length)) {
          var _t212 = Bi();
          if (fi(_t212)) {
            var _e137 = new Set(c),
              _n103 = new Set(l),
              _o75 = _t212.anchor,
              _r52 = _t212.focus;
            (Bs(_o75, _e137, _n103) && Ui(_o75, _o75.getNode(), this, u, a),
              Bs(_r52, _e137, _n103) && Ui(_r52, _r52.getNode(), this, u, a),
              0 !== f || this.canBeEmpty() || Wc(this) || this.remove());
          }
        }
        return i;
      };
      _proto11.getDOMSlot = function getDOMSlot(t) {
        return new _V(t);
      };
      _proto11.exportDOM = function exportDOM(t) {
        var _dr2$prototype$export = _dr2.prototype.exportDOM.call(this, t),
          e = _dr2$prototype$export.element;
        if (da(e)) {
          var _t213 = this.getIndent();
          _t213 > 0 &&
            ((e.style.paddingInlineStart = 40 * _t213 + "px"),
            e.setAttribute("data-lexical-indent", String(_t213)));
          var _n104 = this.getDirection();
          _n104 && (e.dir = _n104);
        }
        return { element: e };
      };
      _proto11.shouldSerializeTextStyles =
        function shouldSerializeTextStyles() {
          if (Wc(this)) return !1;
          for (
            var _t214 = this.getFirstChild();
            null !== _t214;
            _t214 = _t214.getNextSibling()
          )
            if (Xr(_t214)) return !1;
          return !0;
        };
      _proto11.getSerializedTextFormat = function getSerializedTextFormat() {
        var t = this.getTextFormat();
        return 0 !== t && this.shouldSerializeTextStyles() ? t : void 0;
      };
      _proto11.getSerializedTextStyle = function getSerializedTextStyle() {
        var t = this.getTextStyle();
        return "" !== t && this.shouldSerializeTextStyles() ? t : void 0;
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
        var n = Ta(this, t, e);
        var o = n.getFirstChild();
        for (
          var _t215 = this.getFirstChild();
          _t215;
          _t215 = _t215.getNextSibling()
        ) {
          var _r53 = e.getElementByKey(_t215.getKey());
          null !== _r53 &&
            (null == o
              ? (n.insertChild(_r53), (o = _r53))
              : o !== _r53 && n.replaceChild(_r53, o),
            (o = o.nextSibling));
        }
      };
      return Rs;
    })(_dr5);
    function Ls(t) {
      return t instanceof _Rs4;
    }
    function Bs(t, e, n) {
      var o = t.getNode();
      for (; o; ) {
        var _t216 = o.__key;
        if (e.has(_t216) && !n.has(_t216)) return !0;
        o = o.getParent();
      }
      return !1;
    }
    var _Ks = (function (_dr3) {
      function Ks(t) {
        var _this4;
        ((_this4 = _dr3.call(this, t) || this),
          (_this4.__slotHost = null),
          (_this4.__slots = null));
        return _this4;
      }
      babelHelpers.inheritsLoose(Ks, _dr3);
      var _proto12 = Ks.prototype;
      _proto12.afterCloneFrom = function afterCloneFrom(e) {
        (_dr3.prototype.afterCloneFrom.call(this, e),
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
      return Ks;
    })(_dr5);
    function zs(t) {
      return t instanceof _Ks;
    }
    var _$s = (function (_Rs) {
      function $s() {
        var _this5;
        ((_this5 = _Rs.call(this, "root") || this),
          (_this5.__cachedText = null));
        return _this5;
      }
      babelHelpers.inheritsLoose($s, _Rs);
      var _proto13 = $s.prototype;
      _proto13.$config = function $config() {
        return this.config("root", { extends: _Rs4 });
      };
      _proto13.getTopLevelElementOrThrow =
        function getTopLevelElementOrThrow() {
          t(51);
        };
      _proto13.getTextContent = function getTextContent() {
        var t = this.__cachedText;
        return null === t || (!us() && 0 !== gs()._dirtyType)
          ? _Rs.prototype.getTextContent.call(this)
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
        for (var _e138 of o) Ls(_e138) || zs(_e138) || t(282);
        return _Rs.prototype.splice.call(this, e, n, o);
      };
      $s.importJSON = function importJSON(t) {
        return cc().updateFromJSON(t);
      };
      _proto13.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return $s;
    })(_Rs4);
    function Ws(t) {
      return t instanceof _$s;
    }
    function Us(t) {
      return new _Vs(Q(t._nodeMap), null, t._slotsUsed);
    }
    function js() {
      return new _Vs(new Map([["root", new _$s()]]), null, !1);
    }
    function Hs(e) {
      var n = e.constructor,
        o = ot(e);
      if (Ls(e)) {
        var _t217 = o.children,
          _n105 = e.getChildren();
        for (var _e139 = 0; _e139 < _n105.length; _e139++)
          _t217.push(Hs(_n105[_e139]));
      }
      var r = Cu(e);
      if (r.length > 0) {
        var _i45 = {};
        for (var _o76 of r) {
          var _r54 = Su(e, _o76);
          (null === _r54 && t(366, n.name, _o76), (_i45[_o76] = Hs(_r54)));
        }
        o.$slots = _i45;
      }
      return o;
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
        return Ts((e && e.editor) || null, this, t);
      };
      _proto14.clone = function clone(t) {
        var e = new Vs(
          this._nodeMap,
          void 0 === t ? this._selection : t,
          this._slotsUsed,
        );
        return ((e._readOnly = !0), (e._parsed = this._parsed), e);
      };
      _proto14.toJSON = function toJSON(t) {
        var _this14 = this;
        return et("boolean" == typeof t && t, function () {
          return Ts(null, _this14, function () {
            return { root: Hs(cc()) };
          });
        });
      };
      return Vs;
    })();
    var _Js = (function (_Rs2) {
      function Js() {
        return _Rs2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Js, _Rs2);
      var _proto15 = Js.prototype;
      _proto15.$config = function $config() {
        return this.config("artificial", { extends: _Rs4 });
      };
      _proto15.createDOM = function createDOM(t) {
        return na().createElement("div");
      };
      return Js;
    })(_Rs4);
    var _Ys = (function (_dr4) {
      function Ys() {
        return _dr4.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Ys, _dr4);
      var _proto16 = Ys.prototype;
      _proto16.$config = function $config() {
        return this.config("linebreak", {
          extends: _dr5,
          generated: Er,
          importDOM: {
            br: function br(t) {
              return Qs(t) || Zs(t) ? null : { conversion: Gs, priority: 0 };
            },
          },
        });
      };
      _proto16.getTextContent = function getTextContent() {
        return "\n";
      };
      _proto16.createDOM = function createDOM() {
        return na().createElement("br");
      };
      _proto16.updateDOM = function updateDOM() {
        return !1;
      };
      _proto16.isInline = function isInline() {
        return !0;
      };
      return Ys;
    })(_dr5);
    function Gs(t) {
      return { node: qs() };
    }
    function qs() {
      return jc(new _Ys());
    }
    function Xs(t) {
      return t instanceof _Ys;
    }
    function Qs(t) {
      var e = t.parentElement;
      if (null !== e && ya(e)) {
        var _n106 = e.firstChild;
        if (_n106 === t || (_n106.nextSibling === t && tl(_n106))) {
          var _n107 = e.lastChild;
          if (_n107 === t || (_n107.previousSibling === t && tl(_n107)))
            return !0;
        }
      }
      return !1;
    }
    function Zs(t) {
      var e = t.parentElement;
      if (null !== e && ya(e)) {
        var _n108 = e.firstChild;
        if (_n108 === t || (_n108.nextSibling === t && tl(_n108))) return !1;
        var _o77 = e.lastChild;
        if (_o77 === t || (_o77.previousSibling === t && tl(_o77))) return !0;
      }
      return !1;
    }
    function tl(t) {
      return Hl(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    function el(e, n) {
      var o = e.type,
        r = e.key,
        i = e.offset,
        s = Vc(e.key);
      return "text" === o
        ? (Xr(s) || t(266, s.getType(), r), Ju(s, n, i))
        : (Ls(s) || t(267, s.getType(), r), hl(s, e.offset, n));
    }
    function nl(e, n) {
      var o = n.origin,
        r = n.direction,
        i = "next" === r;
      zu(n)
        ? e.set(o.getKey(), n.offset, "text")
        : $u(n)
          ? Xr(o)
            ? e.set(o.getKey(), Yu(o, r), "text")
            : e.set(
                o.getParentOrThrow().getKey(),
                o.getIndexWithinParent() + (i ? 1 : 0),
                "element",
              )
          : ((Wu(n) && Ls(o)) || t(268),
            e.set(o.getKey(), i ? 0 : o.getChildrenSize(), "element"));
    }
    function ol(t) {
      var e = Bi(),
        n = fi(e) ? e : Pi();
      return (rl(n, t), uc(n), n);
    }
    function rl(t, e) {
      (nl(t.anchor, e.anchor), nl(t.focus, e.focus));
    }
    function il(t) {
      var e = t.anchor,
        n = t.focus,
        o = el(e, "next"),
        r = el(n, "next"),
        i = lf(o, r) <= 0 ? "next" : "previous";
      return rf(ef(o, i), ef(r, i));
    }
    function sl(t) {
      var e = t.direction,
        n = t.origin,
        o = Vu(n, Ru(e)).getNodeAtCaret();
      return o ? Vu(o, e) : qu(n.getParentOrThrow(), e);
    }
    function ll(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _o78 = Wu(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _o78;
        _o78 = _o78.getParentCaret(e)
      )
        n.push(sl(_o78));
      return n;
    }
    function cl(t) {
      return !!t && t.origin.isAttached();
    }
    function al(e, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (e.isCollapsed()) return e;
      var o = "root",
        r = "next";
      var i = n;
      var s = dl(e, r);
      var l = s.anchor.origin;
      for (; null !== l && !Wc(l); ) l = l.getParent();
      var c = Ls(l) ? l.getFirstChild() : null,
        a = ll(s.anchor, o),
        u = ll(s.focus.getFlipped(), o),
        f = new Set(),
        d = [];
      for (var _t218 of s.iterNodeCarets(o))
        if (Wu(_t218)) f.add(_t218.origin.getKey());
        else if ($u(_t218)) {
          var _e140 = _t218.origin;
          (Ls(_e140) && !f.has(_e140.getKey())) || d.push(_e140);
        }
      var h = new Set();
      for (var _t219 of d) {
        var _e141 = _t219.getParent();
        (null === _e141 || f.has(_e141.getKey()) || h.add(_e141), ql(_t219));
      }
      for (var _t220 of h)
        !_t220.canBeEmpty() &&
          !Wc(_t220) &&
          _t220.isEmpty() &&
          _t220.isAttached() &&
          _t220.remove();
      for (var _t221 of s.getTextSlices()) {
        if (!_t221) continue;
        var _e142 = _t221.caret.origin,
          _n109 = _e142.getTextContentSize(),
          _o79 = sl(Vu(_e142, r)),
          _s25 = _e142.getMode();
        if (
          (Math.abs(_t221.distance) === _n109 && "removeEmptySlices" === i) ||
          ("token" === _s25 && 0 !== _t221.distance)
        )
          _o79.remove();
        else if (0 !== _t221.distance) {
          i = "removeEmptySlices";
          var _e143 = _t221.removeTextSlice();
          var _n110 = _t221.caret.origin;
          if ("segmented" === _s25) {
            var _t222 = _e143.origin,
              _n111 = qr(_t222.getTextContent())
                .setStyle(_t222.getStyle())
                .setFormat(_t222.getFormat());
            (_o79.replaceOrInsert(_n111), (_e143 = Ju(_n111, r, _e143.offset)));
          }
          (_n110.is(a[0].origin) && (a[0] = _e143),
            _n110.is(u[0].origin) && (u[0] = _e143.getFlipped()));
        }
      }
      var g, _;
      for (var _t223 of a)
        if (cl(_t223)) {
          g = ul(_t223);
          break;
        }
      for (var _t224 of u)
        if (cl(_t224)) {
          _ = ul(_t224);
          break;
        }
      var p = (function (t, e, n) {
        if (!t || !e) return null;
        var o = t.getParentAtCaret(),
          r = e.getParentAtCaret();
        if (!o || !r) return null;
        var i = o.getParents().reverse();
        i.push(o);
        var s = r.getParents().reverse();
        s.push(r);
        var l = Math.min(i.length, s.length);
        var c;
        for (c = 0; c < l && i[c] === s[c]; c++);
        var a = function a(t, e) {
            var n;
            for (var _o80 = c; _o80 < t.length; _o80++) {
              var _r55 = t[_o80];
              if (Wc(_r55)) return;
              !n && e(_r55) && (n = _r55);
            }
            return n;
          },
          u = a(i, xa),
          f =
            u &&
            a(s, function (t) {
              return n.has(t.getKey()) && xa(t);
            });
        return f && Cu(f).length > 0 ? null : u && f ? [u, f] : null;
      })(g, _, f);
      if (p) {
        var _t225 = p[0],
          _e144 = p[1];
        qu(_t225, "previous").splice(0, _e144.getChildren());
        var _n112 = _e144.getParent();
        for (_e144.remove(!0); _n112 && _n112.isEmpty(); ) {
          var _t226 = _n112;
          ((_n112 = _n112.getParent()), _t226.remove(!0));
        }
      } else if (_) {
        var _t227 = (function (t) {
            if (Wu(t)) {
              var _e146 = t.origin;
              if (xa(_e146)) return _e146;
            } else {
              var _e147 = t.getParentAtCaret();
              if (_e147 && xa(_e147)) return _e147;
            }
            return null;
          })(_),
          _e145 = _t227 && _t227.getParent(),
          _n113 = _t227 && _t227.getParents().findLast($c);
        if (
          _t227 &&
          _e145 &&
          !Ws(_e145) &&
          _t227.isEmpty() &&
          f.has(_t227.getKey()) &&
          0 === Cu(_t227).length &&
          (!_n113 || f.has(_n113.getKey()))
        ) {
          _t227.remove(!0);
          var _n114 = _e145;
          for (; _n114 && !Ws(_n114) && _n114.isEmpty(); ) {
            var _t228 = _n114.getParent();
            if (
              _t228 &&
              Ws(_t228) &&
              _t228.getChildrenSize() <= 1 &&
              _n114.canBeEmpty()
            )
              break;
            var _e148 = _n114;
            ((_n114 = _t228), _e148.remove(!0));
          }
        }
      }
      null === ac(l, c) && ac(cc(), null);
      var m = [g, _].concat(Array.from(a), Array.from(u)).find(cl);
      if (m) return of(ef(ul(m), e.direction));
      t(
        269,
        JSON.stringify(
          a.map(function (t) {
            return t.origin.__key;
          }),
        ),
      );
    }
    function ul(t) {
      var e = (function (t) {
          var e = t;
          for (; Wu(e); ) {
            var _t229 = Qu(e);
            if (!Wu(_t229)) break;
            e = _t229;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (Xr(e.origin)) return zu(e) ? e : Ju(e.origin, n, n);
      var o = e.getAdjacentCaret();
      return $u(o) && Xr(o.origin) ? Ju(o.origin, n, Ru(n)) : e;
    }
    function fl(t) {
      return zu(t) && t.offset !== Yu(t.origin, t.direction);
    }
    function dl(t, e) {
      return t.direction === e ? t : rf(ef(t.focus, e), ef(t.anchor, e));
    }
    function hl(t, e, n) {
      var o = qu(t, "next");
      for (var _t230 = 0; _t230 < e; _t230++) {
        var _t231 = o.getAdjacentCaret();
        if (null === _t231) break;
        o = _t231;
      }
      return ef(o, n);
    }
    function gl(e) {
      var n = e.origin,
        o = e.offset,
        r = e.direction;
      if (o === Yu(n, r)) return e.getSiblingCaret();
      if (o === Yu(n, Ru(r))) return sl(e.getSiblingCaret());
      var _n$splitText2 = n.splitText(o),
        i = _n$splitText2[0];
      return (Xr(i) || t(281), ef(Vu(i, "next"), r));
    }
    function _l(t, e) {
      return !0;
    }
    function pl(t, _temp) {
      var _ref41 = _temp === void 0 ? {} : _temp,
        _ref41$$copyElementNo = _ref41.$copyElementNode,
        e = _ref41$$copyElementNo === void 0 ? Uc : _ref41$$copyElementNo,
        _ref41$$splitTextPoin = _ref41.$splitTextPointCaretNext,
        n = _ref41$$splitTextPoin === void 0 ? gl : _ref41$$splitTextPoin,
        _ref41$rootMode = _ref41.rootMode,
        o = _ref41$rootMode === void 0 ? "shadowRoot" : _ref41$rootMode,
        _ref41$$shouldSplit = _ref41.$shouldSplit,
        r = _ref41$$shouldSplit === void 0 ? _l : _ref41$$shouldSplit,
        _ref41$removeEmptyDes = _ref41.removeEmptyDestination,
        i = _ref41$removeEmptyDes === void 0 ? !1 : _ref41$removeEmptyDes;
      if (zu(t)) return n(t);
      var s = t.getParentCaret(o);
      if (s) {
        var _n115 = s.origin;
        if (Wu(t)) {
          var _t232 = sl(s);
          if (i && _n115.isEmpty()) return (_n115.remove(), _t232);
          if (!_n115.canBeEmpty() || !r(_n115, "first")) return _t232;
        }
        var _o81 = (function (t) {
          var e = [];
          for (
            var _n116 = t.getAdjacentCaret();
            _n116;
            _n116 = _n116.getAdjacentCaret()
          )
            e.push(_n116.origin);
          return e;
        })(t);
        (_o81.length > 0 || (!i && _n115.canBeEmpty() && r(_n115, "last"))) &&
          s.insert(e(_n115).splice(0, 0, _o81));
      }
      return s;
    }
    function ml(e, n, o) {
      var r = ef(n, "next");
      (zu(r) &&
        (0 === r.offset
          ? (r = Vu(r.origin, "previous").getFlipped())
          : r.offset === r.origin.getTextContentSize() &&
            (r = Vu(r.origin, "next"))),
        r.origin.is(e) &&
          ($u(r) || t(342, e.getKey(), e.getType()), (r = sl(r))),
        (e.is(r.getNodeAtCaret()) || e.is(r.getFlipped().getNodeAtCaret())) &&
          e.remove(!0));
      for (var _t233 = r; _t233; _t233 = pl(_t233, o)) r = _t233;
      return (
        zu(r) && t(283),
        r.insert(e.isInline() ? Sl().append(e) : e),
        ef(Vu(e.getLatest(), "next"), n.direction)
      );
    }
    function yl(t, e) {
      var n = dl(fi(e) ? il(e) : e, "next"),
        o = yu(n.anchor.origin),
        r = yu(t.getLatest());
      if (null === o ? null !== r : !o.is(r)) return !1;
      var i = ul(qu(t, "next")),
        s = ef(ul(qu(t, "previous")), "next");
      return lf(n.anchor, i) <= 0 && lf(n.focus, s) >= 0;
    }
    var _xl = (function (_Rs3) {
      function xl() {
        return _Rs3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(xl, _Rs3);
      var _proto17 = xl.prototype;
      _proto17.$config = function $config() {
        return this.config("paragraph", {
          extends: _Rs4,
          generated: Or,
          importDOM: {
            p: function p() {
              return { conversion: Cl, priority: 0 };
            },
          },
        });
      };
      _proto17.createDOM = function createDOM(t) {
        var _e$classList2;
        var e = na().createElement("p"),
          n = bc(t.theme, "paragraph");
        return (
          void 0 !== n &&
            (_e$classList2 = e.classList).add.apply(
              _e$classList2,
              Array.from(n),
            ),
          e
        );
      };
      _proto17.updateDOM = function updateDOM(t, e, n) {
        return !1;
      };
      _proto17.exportDOM = function exportDOM(t) {
        var _Rs3$prototype$export = _Rs3.prototype.exportDOM.call(this, t),
          e = _Rs3$prototype$export.element;
        if (da(e)) {
          this.isEmpty() && e.append(na().createElement("br"));
          var _t234 = this.getFormatType();
          _t234 && (e.style.textAlign = _t234);
        }
        return { element: e };
      };
      _proto17.exportJSON = function exportJSON(t) {
        if (t === void 0) {
          t = !1;
        }
        var e = _Rs3.prototype.exportJSON.call(this, t);
        if (void 0 === e.textFormat || void 0 === e.textStyle) {
          var _n117 = this.getChildren().find(Xr),
            _o82 = _n117 ? _n117.getFormat() : this.getTextFormat(),
            _r56 = _n117 ? _n117.getStyle() : this.getTextStyle();
          ((t && 0 === _o82) || (e.textFormat = _o82),
            (t && "" === _r56) || (e.textStyle = _r56));
        }
        return e;
      };
      _proto17.extractWithChild = function extractWithChild(t, e, n) {
        if (!fi(e)) return !1;
        if (
          "" === this.getFormatType() &&
          0 === this.getIndent() &&
          "" === this.getStyle()
        )
          return !1;
        if (yl(this, e)) {
          var _t235 = this.getTextContent();
          return "" !== _t235 && e.getTextContent() === _t235;
        }
        return !1;
      };
      _proto17.insertNewAfter = function insertNewAfter(t, e) {
        var n = Sl();
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
            return Xr(t) && !/\S/.test(t.getTextContent());
          })
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return xl;
    })(_Rs4);
    function Cl(t) {
      var e = Sl();
      if ((wa(e, t), Ma(t, e), "" === e.getFormatType())) {
        var _n118 = t.getAttribute("align");
        _n118 && _n118 && _n118 in w && e.setFormat(_n118);
      }
      return (Aa(e, t), { node: e });
    }
    function Sl() {
      return jc(new _xl());
    }
    function Tl(t) {
      return t instanceof _xl;
    }
    function vl(t) {
      console.warn(t);
    }
    function Nl(t, e, n, o, r) {
      var i = t._keyToDOMMap;
      (i.clear(),
        (t._editorState = js()),
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
      var s = t._observer;
      (null !== s && (s.disconnect(), (t._observer = null)),
        null !== e &&
          ((e.textContent = ""),
          (function (t, e) {
            delete t["__lexicalKey_" + e._key];
          })(e, t)),
        null !== n &&
          ((n.textContent = ""), i.set("root", n), oc(n, t, "root")));
    }
    function bl(t) {
      var e = new Set(),
        n = new Set();
      for (var _ref43 of lu(t)) {
        var _o83 = _ref43.klass;
        var _r57 = _ref43.ownNodeConfig;
        {
          var _t236 = _o83.transform;
          if (!n.has(_t236)) {
            n.add(_t236);
            var _r58 = _o83.transform();
            _r58 && e.add(_r58);
          }
          if (_r57) {
            var _t237 = _r57.$transform;
            _t237 && e.add(_t237);
          }
        }
      }
      return e;
    }
    var kl = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, o) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = Pl(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, o, r) {
        return Ls(t) && t.extractWithChild(e, n, o);
      },
      $getDOMSlot: function $getDOMSlot(t, e, n) {
        return t.getDOMSlot(e);
      },
      $getSlotTargetElement: function $getSlotTargetElement(t, e, n, o) {
        return null;
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return Ls(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, o) {
        return t.updateDOM(e, n, o._config);
      },
    };
    function Ol(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function El(t, e, n) {
      return (t.set(e, n), Ol.bind(null, t, e));
    }
    var _Ml = (function () {
      function Ml(t, e, n, o, r, i, s, l, c) {
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
          (this._cloneNotNeeded = new Map()),
          (this._dirtyLeaves = new Set()),
          (this._dirtyElements = new Map()),
          (this._normalizedNodes = new Set()),
          (this._updateTags = new Set()),
          (this._observer = null),
          (this._key = _c()),
          (this._onError = r),
          (this._onWarn = i),
          (this._htmlConversions = s),
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
      var _proto18 = Ml.prototype;
      _proto18.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto18.registerUpdateListener = function registerUpdateListener(t) {
        return El(this._listeners.update, t);
      };
      _proto18.registerEditableListener = function registerEditableListener(t) {
        return El(this._listeners.editable, t);
      };
      _proto18.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return El(this._listeners.decorator, t);
      };
      _proto18.registerTextContentListener =
        function registerTextContentListener(t) {
          return El(this._listeners.textcontent, t);
        };
      _proto18.registerRootListener = function registerRootListener(t) {
        var _this15 = this;
        var e = this._listeners.root;
        return hf(El(e, t, t(this._rootElement, null) || void 0), function () {
          return (function (t, e, n) {
            var o = t.get(e);
            (o && o(), t.set(e, e.apply(void 0, Array.from(n)) || void 0));
          })(e, t, [null, _this15._rootElement]);
        });
      };
      _proto18.registerCommand = function registerCommand(e, n, o) {
        void 0 === o && t(35);
        var r = this._commands;
        r.has(e) ||
          r.set(e, [new _q(), new _q(), new _q(), new _q(), new _q()]);
        var i = r.get(e);
        void 0 === i && t(36, String(e));
        var s = (function (t) {
            return 7 & t;
          })(o),
          l = i[s];
        return (
          s !== o ? l.addFront(n) : l.addBack(n),
          function () {
            (l["delete"](n),
              i.every(function (t) {
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
        var i = r.get(e);
        (void 0 === i && ((i = new Set()), r.set(e, i)), i.add(o));
        var s = n && n.skipInitialization;
        return (
          (void 0 !== s && s) || this.initializeMutationListener(e, o),
          function () {
            (i["delete"](o), 0 === i.size && r["delete"](e));
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
          o = Oa(n).get(e.getType());
        if (!o) return;
        var r = new Map();
        for (var _t238 of o.keys()) r.set(_t238, "created");
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
          var _t239 = this.registerNodeTransformToKlass(r, e);
          o.push(_t239);
        }
        return (
          (function (t, e) {
            var n = Oa(t.getEditorState()),
              o = [];
            for (var _t240 of e) {
              var _e149 = n.get(_t240);
              _e149 && o.push(_e149);
            }
            0 !== o.length &&
              t.update(
                function () {
                  for (var _t241 of o)
                    for (var _e150 of _t241.keys()) {
                      var _t242 = ec(_e150);
                      _t242 && _t242.markDirty();
                    }
                },
                null === t._pendingEditorState ? { tag: gr } : void 0,
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
        return Ac.apply(void 0, [this, t].concat(Array.from(e)));
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
      _proto18.setRootElement = function setRootElement(e) {
        var n = this._rootElement;
        if (e !== n) {
          var _n$classList2;
          var _o84 = bc(this._config.theme, "root"),
            _r59 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = e),
            Nl(this, n, e, _r59, { preserveUpdateQueue: !0 }),
            null !== n &&
              (this._config.disableEvents ||
                (function (e) {
                  var n = bo.get(e);
                  if (void 0 === n) return void lr();
                  var o = ko.get(n);
                  if (void 0 === o) return void lr();
                  bo["delete"](e);
                  var r = Wl(e);
                  zl(r)
                    ? ((function (t) {
                        if (null !== t._parentEditor) {
                          var _e151 = gc(t),
                            _n119 = _e151[_e151.length - 1]._key;
                          or.get(_n119) === t && or["delete"](_n119);
                        } else or["delete"](t._key);
                      })(r),
                      o.editors["delete"](r),
                      (o.hasShadowEditor = void 0),
                      (e.__lexicalEditor = null))
                    : r && t(198);
                  var i = nr(e);
                  for (var _t243 = 0; _t243 < i.length; _t243++) i[_t243]();
                  e.__lexicalEventHandles = [];
                })(n),
              null != _o84 &&
                (_n$classList2 = n.classList).remove.apply(
                  _n$classList2,
                  Array.from(_o84),
                )),
            null !== e)
          ) {
            var _e$classList3;
            var _t244 = Lc(e),
              _n120 = e.style;
            ((_n120.userSelect = "text"),
              (_n120.whiteSpace = "pre-wrap"),
              (_n120.wordBreak = "break-word"),
              e.setAttribute("data-lexical-editor", "true"),
              (this._window = _t244),
              (this._dirtyType = 2),
              gt(this),
              this._updateTags.add(gr),
              vs(this),
              this._config.disableEvents ||
                (function (t, e) {
                  var n = t.ownerDocument;
                  bo.set(t, n);
                  var o = ko.get(n);
                  (void 0 === o &&
                    ((o = { editors: new Set(), hasShadowEditor: void 0 }),
                    ko.set(n, o)),
                    o.editors.add(e),
                    (o.hasShadowEditor = void 0),
                    (t.__lexicalEditor = e));
                  var r = nr(t);
                  r.push(Oo.register(n));
                  var i = (function () {
                    if (void 0 !== No) return No;
                    var t = [
                      ["keydown", Go],
                      ["pointerdown", Io],
                      ["compositionstart", Uo],
                      ["compositionend", Yo],
                      ["input", $o],
                      ["click", Fo],
                      ["cut", vo],
                      ["copy", vo],
                      ["dragstart", vo],
                      ["dragover", vo],
                      ["dragend", vo],
                      ["paste", vo],
                      ["focus", vo],
                      ["blur", vo],
                      ["drop", vo],
                    ];
                    return (
                      f &&
                        t.push([
                          "beforeinput",
                          function (t, e) {
                            return (function (t, e) {
                              var n = t.inputType;
                              "deleteCompositionText" === n ||
                                (a && Mc(e)) ||
                                ("insertCompositionText" !== n &&
                                  Ms(
                                    e,
                                    function () {
                                      Ko(t, e) || Ac(e, Cn, t);
                                    },
                                    { event: t },
                                  ));
                            })(t, e);
                          },
                        ]),
                      (No = t),
                      t
                    );
                  })();
                  var _loop3 = function _loop3() {
                    var _i$_n = i[_n121],
                      o = _i$_n[0],
                      s = _i$_n[1],
                      l =
                        "function" == typeof s
                          ? function (t) {
                              sr(t) ||
                                (ir(t),
                                (e.isEditable() || "click" === o) && s(t, e));
                            }
                          : function (t) {
                              if (sr(t)) return;
                              ir(t);
                              var n = e.isEditable();
                              switch (o) {
                                case "cut":
                                  return n && Ac(e, ro, t);
                                case "copy":
                                  return Ac(e, oo, t);
                                case "paste":
                                  return n && Ac(e, En, t);
                                case "dragstart":
                                  return n && Ac(e, to, t);
                                case "dragover":
                                  return n && Ac(e, eo, t);
                                case "dragend":
                                  return n && Ac(e, no, t);
                                case "focus":
                                  return n && Ac(e, uo, t);
                                case "blur":
                                  return n && Ac(e, fo, t);
                                case "drop":
                                  return n && Ac(e, Qn, t);
                              }
                            };
                    r.push(To(t, o, l));
                  };
                  for (var _n121 = 0; _n121 < i.length; _n121++) {
                    _loop3();
                  }
                })(e, this),
              null != _o84 &&
                (_e$classList3 = e.classList).add.apply(
                  _e$classList3,
                  Array.from(_o84),
                ));
          } else ((this._window = null), this._updateTags.add(gr), vs(this));
          Ns("root", this, !1, e, n);
        }
      };
      _proto18.getElementByKey = function getElementByKey(t) {
        return this._keyToDOMMap.get(t) || null;
      };
      _proto18.getEditorState = function getEditorState() {
        return this._editorState;
      };
      _proto18.setEditorState = function setEditorState(e, n) {
        var _this16 = this;
        e.isEmpty() && t(38);
        var o = e;
        (o._readOnly &&
          ((o = Us(e)),
          (o._selection = e._selection ? e._selection.clone() : null)),
          ht(this));
        var r = this._pendingEditorState,
          i = void 0 !== n ? n.tag : null;
        (null === r ||
          r.isEmpty() ||
          (null != i && this._updateTags.add(i), vs(this)),
          (this._pendingEditorState = o),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          (this._slotsUsed = this._slotsUsed || e._slotsUsed),
          Ms(
            this,
            function () {
              if ((i && _this16._updateTags.add(i), e._parsed))
                for (var _ref45 of o._nodeMap.entries()) {
                  var _t245 = _ref45[0];
                  var _e152 = _ref45[1];
                  Ls(_e152)
                    ? _this16._dirtyElements.set(_t245, !0)
                    : _this16._dirtyLeaves.add(_t245);
                }
            },
            { discrete: !this._updating || void 0 },
          ));
      };
      _proto18.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var o = js(),
            r = ns,
            i = rs,
            s = os,
            l = e._dirtyElements,
            c = e._dirtyLeaves,
            a = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Map()),
            (e._dirtyType = 0),
            (ns = o),
            (rs = !1),
            (os = e),
            wl(null));
          try {
            var _r60 = e._nodes;
            (Ss(t.root, _r60), n && n(), (o._readOnly = !0), (o._parsed = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = c),
              (e._cloneNotNeeded = a),
              (e._dirtyType = u),
              (ns = r),
              (rs = i),
              (os = s));
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
        return (
          "force-commit" === e && vs(this),
          ("pending" === e
            ? this._pendingEditorState || this._editorState
            : this.getEditorState()
          ).read(n, { editor: this })
        );
      };
      _proto18.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : Es(t, e, n);
        })(this, t, e);
      };
      _proto18.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          Ms(this, function () {
            var o = Bi(),
              r = cc();
            (null !== o
              ? o.dirty || uc(o.clone())
              : 0 !== r.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? r.selectStart()
                  : r.selectEnd()),
              Ic("focus"),
              Pc(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto18.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = Gc(this._window);
        null !== e && e.removeAllRanges();
      };
      _proto18.isEditable = function isEditable() {
        return this._editable;
      };
      _proto18.setEditable = function setEditable(t) {
        this._editable !== t &&
          ((this._editable = t),
          Ns("editable", this, !0, t),
          this._slotsUsed &&
            this.update(function () {
              return _s();
            }));
      };
      _proto18.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON(nt()) };
      };
      return Ml;
    })();
    _Ml.version = (function () {
      return G;
    })();
    var Al = null;
    function wl(t) {
      Al = t;
    }
    var Dl = Symbol("INTERNAL_SKIP_AFTER_CLONE_FROM");
    var Fl = 1;
    function Il(e, n) {
      var o = Pl(e, n);
      return (void 0 === o && t(30, n), o);
    }
    function Pl(t, e) {
      return t._nodes.get(e);
    }
    var Rl =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function Ll(t, e) {
      var n =
        void 0 !== e
          ? e
          : (function () {
              var e = t.getRootNode();
              return Vl(e) || Xc(e) ? ua(e) : null;
            })();
      if (!da(n)) return !1;
      if (n.hasAttribute("data-lexical-slot")) return !1;
      var o = ic(n),
        r = n.nodeName;
      return (
        hr(o) &&
        ("INPUT" === r ||
          "TEXTAREA" === r ||
          ("true" === n.contentEditable && null == Wl(n)))
      );
    }
    var Bl = Ll;
    function Kl(t, e, n) {
      var o = t.getRootElement();
      if (!o) return !1;
      try {
        if (!e || !o.contains(e) || !o.contains(n)) return !1;
      } catch (t) {
        return !1;
      }
      return (
        $l(e) === t &&
        t.read("latest", function () {
          return !Ll(e);
        })
      );
    }
    function zl(t) {
      return t instanceof _Ml;
    }
    function $l(t) {
      var e = t;
      for (; null != e; ) {
        var _t246 = Wl(e);
        if (zl(_t246)) return _t246;
        e = Dc(e);
      }
      return null;
    }
    function Wl(t) {
      return t ? t.__lexicalEditor : null;
    }
    function Ul(t) {
      return ni(t) || t.isToken();
    }
    function jl(t) {
      return Ul(t) || t.isSegmented();
    }
    function Hl(t) {
      return ha(t) && 3 === t.nodeType;
    }
    function Vl(t) {
      return ha(t) && 9 === t.nodeType;
    }
    function Jl(t) {
      var e = t;
      for (; null != e; ) {
        if (Hl(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function Yl(t, e, n) {
      var o = M[e];
      if (null !== n && (t & o) === (n & o)) return t;
      var r = t ^ o;
      return (
        "subscript" === e
          ? (r &= ~M.superscript)
          : "superscript" === e
            ? (r &= ~M.subscript)
            : "lowercase" === e
              ? ((r &= ~M.uppercase), (r &= ~M.capitalize))
              : "uppercase" === e
                ? ((r &= ~M.lowercase), (r &= ~M.capitalize))
                : "capitalize" === e &&
                  ((r &= ~M.lowercase), (r &= ~M.uppercase)),
        r
      );
    }
    function Gl(t, e) {
      var n = (function () {
        var t = Al;
        return ((Al = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (fs(), ds());
      var o = gs(),
        r = hs(),
        i = "" + Fl++;
      (r._nodeMap.set(i, t),
        Ls(t) ? o._dirtyElements.set(i, !0) : o._dirtyLeaves.add(i),
        o._cloneNotNeeded.set(i, t),
        0 === o._dirtyType && (o._dirtyType = 1),
        (t.__key = i));
    }
    function ql(e) {
      null !== _u(e) && t(380, e.__key, String(_u(e)));
      var n = e.getParent();
      if (null !== n) {
        var _t247 = e.getWritable(),
          _o85 = n.getWritable(),
          _r61 = e.getPreviousSibling(),
          _i46 = e.getNextSibling(),
          _s26 = null !== _i46 ? _i46.__key : null,
          _l19 = null !== _r61 ? _r61.__key : null,
          _c14 = null !== _r61 ? _r61.getWritable() : null,
          _a10 = null !== _i46 ? _i46.getWritable() : null;
        (null === _r61 && (_o85.__first = _s26),
          null === _i46 && (_o85.__last = _l19),
          null !== _c14 && (_c14.__next = _s26),
          null !== _a10 && (_a10.__prev = _l19),
          (_t247.__prev = null),
          (_t247.__next = null),
          (_t247.__parent = null),
          _o85.__size--);
      }
    }
    var Xl = ql;
    function Ql(e) {
      (ds(), ur(e) && t(323, e.__key, e.__type));
      var n = null !== e.__parent ? e.__parent : gu(e) ? e.__slotHost : null,
        o = hs(),
        r = gs(),
        i = o._nodeMap,
        s = r._dirtyElements;
      null !== n &&
        (function (t, e, n) {
          var o = t;
          for (; null !== o; ) {
            if (n.has(o)) return;
            var _t248 = e.get(o);
            if (void 0 === _t248) break;
            (n.set(o, !1),
              (o =
                null !== _t248.__parent
                  ? _t248.__parent
                  : gu(_t248)
                    ? _t248.__slotHost
                    : null));
          }
        })(n, i, s);
      var l = e.__key;
      (0 === r._dirtyType && (r._dirtyType = 1),
        Ls(e) ? s.set(l, !0) : r._dirtyLeaves.add(l));
    }
    function Zl(t) {
      fs();
      var e = gs(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t249 = ec(n);
          null !== _t249 && _t249.getWritable();
        }
        if (null !== t) {
          var _e153 = ec(t);
          null !== _e153 && _e153.getWritable();
        }
      }
    }
    function tc() {
      return us() ? null : gs()._compositionKey;
    }
    function ec(t, e) {
      var n = (e || hs())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function nc(t, e) {
      var n = rc(t, gs());
      return void 0 !== n ? ec(n, e) : null;
    }
    function oc(t, e, n) {
      t["__lexicalKey_" + e._key] = n;
    }
    function rc(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function ic(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t250 = nc(n, e);
        if (null !== _t250) return _t250;
        n = Dc(n);
      }
      return null;
    }
    function sc(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function lc(t) {
      return t.read(function () {
        return cc().getTextContent();
      });
    }
    function cc() {
      return hs()._nodeMap.get("root");
    }
    function ac(t, e) {
      if (
        !(
          Wc(t) &&
          t.isAttached() &&
          t.isEmpty() &&
          (Ws(t) || (null !== e && xa(e)))
        )
      )
        return null;
      var n = Sl();
      return (t.append(n), n);
    }
    function uc(t) {
      fs();
      var e = hs();
      (null !== t &&
        ((t.dirty = !0),
        t.setCachedNodes(null),
        fi(t) && gs()._slotsUsed && wi(t)),
        (e._selection = t));
    }
    function fc() {
      (fs(), ht(gs()));
    }
    function dc(t) {
      var e = (function (t, e) {
        var n = t;
        for (; null != n; ) {
          var _t251 = rc(n, e);
          if (void 0 !== _t251) return _t251;
          n = Dc(n);
        }
        return null;
      })(t, gs());
      return null === e ? null : ec(e);
    }
    function hc(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function gc(t) {
      var e = [];
      for (var _n122 = t; null !== _n122; _n122 = _n122._parentEditor)
        e.push(_n122);
      return e;
    }
    function _c() {
      return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substring(0, 5);
    }
    function pc(t) {
      return Hl(t) ? t.nodeValue : null;
    }
    function mc(t, e, n) {
      var o = Gc(Bc(e));
      if (null === o) return;
      var r = ia(o, e._rootElement),
        i = r.anchorNode;
      var s = r.anchorOffset,
        l = r.focusOffset;
      if (null !== i) {
        var _e154 = pc(i);
        var _o86 = ic(i);
        if (null !== _e154 && Xr(_o86)) {
          if ((_e154 === S || _e154 === v) && n) {
            var _t252 = n.length;
            ((_e154 = n), (s = _t252), (l = _t252));
          }
          null !== _e154 && yc(_o86, _e154, s, l, t);
        }
      }
    }
    function yc(t, e, n, o, r) {
      var i = t;
      if (i.isAttached() && (r || !i.isDirty())) {
        var _s27 = i.isComposing();
        if (i.isToken() && _s27) return;
        var _l20 = e;
        if (
          (_s27 || r) &&
          (e.endsWith(S) && (_l20 = e.slice(0, -S.length)), r)
        ) {
          var _t253 = v;
          var _e155;
          for (; -1 !== (_e155 = _l20.indexOf(_t253)); )
            ((_l20 = _l20.slice(0, _e155) + _l20.slice(_e155 + _t253.length)),
              null !== n &&
                n > _e155 &&
                (n = Math.max(_e155, n - _t253.length)),
              null !== o &&
                o > _e155 &&
                (o = Math.max(_e155, o - _t253.length)));
        }
        var _c15 = i.getTextContent();
        if (r || _l20 !== _c15) {
          var _e156 = Bi();
          if ("" === _l20) {
            if ((Zl(null), _ || h || y)) i.remove();
            else {
              var _t254 = gs();
              (xc(i, "", _e156),
                setTimeout(function () {
                  _t254.update(function () {
                    i.isAttached() && "" === i.getTextContent() && i.remove();
                  });
                }, 20));
            }
            return;
          }
          var _r62 = i.getParent(),
            _c16 = Ki(),
            _a11 = i.getTextContentSize(),
            _u11 = tc(),
            _f10 = i.getKey();
          if (
            (i.isToken() && !_s27) ||
            (null !== _u11 && _f10 === _u11 && !_s27) ||
            (fi(_c16) &&
              ((null !== _r62 &&
                !_r62.canInsertTextBefore() &&
                0 === _c16.anchor.offset) ||
                (_c16.anchor.key === t.__key &&
                  0 === _c16.anchor.offset &&
                  !i.canInsertTextBefore() &&
                  !_s27) ||
                (_c16.focus.key === t.__key &&
                  _c16.focus.offset === _a11 &&
                  !i.canInsertTextAfter() &&
                  !_s27)))
          )
            return void i.markDirty();
          if (!fi(_e156) || null === n || null === o)
            return void xc(i, _l20, _e156);
          if ((_e156.setTextNodeRange(i, n, i, o), i.isSegmented())) {
            var _t255 = qr(i.getTextContent());
            (i.replace(_t255), (i = _t255));
          }
          xc(i, _l20, _e156);
        }
      }
    }
    function xc(t, e, n) {
      if ((t.setTextContent(e), fi(n))) {
        var _e157 = t.getKey();
        var _o87 = !1;
        for (var _r63 of ["anchor", "focus"]) {
          var _i47 = n[_r63];
          "text" === _i47.type &&
            _i47.key === _e157 &&
            ((_i47.offset = Yu(t, _i47.offset, "clamp")), (_o87 = !0));
        }
        _o87 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
      }
    }
    function Cc(t, e, n) {
      var o = e[n] || !1;
      return "any" === o || o === t[n];
    }
    function Sc(t, e) {
      return (
        Cc(t, e, "altKey") &&
        Cc(t, e, "ctrlKey") &&
        Cc(t, e, "shiftKey") &&
        Cc(t, e, "metaKey")
      );
    }
    function Tc(t) {
      var e = t;
      for (; null !== e; ) {
        var _t256 = e.getParent();
        if (null === _t256) return null;
        if (Ws(_t256)) return e;
        e = _t256;
      }
      return null;
    }
    function vc(t, e) {
      var n = t.anchor,
        o = t.focus,
        r = n.key,
        i = n.offset,
        s = n.type,
        l = o.key,
        c = o.offset,
        a = o.type;
      if ((ge(t), !Ws(e))) return t;
      var u = Tc(n.getNode());
      return (
        Ls(u) &&
          u.isShadowRoot() &&
          u.is(Tc(o.getNode())) &&
          (n.set(r, i, s), o.set(l, c, a)),
        t
      );
    }
    function Nc(t, e) {
      "" === t.getAttribute(e) && t.removeAttribute(e);
    }
    function bc(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        o = n[e];
      if (void 0 !== o) return o;
      var r = t[e];
      if ("string" == typeof r) {
        var _t257 = df(r);
        return ((n[e] = _t257), _t257);
      }
      return r;
    }
    function kc(e, n, o, r, i) {
      if (0 === o.size) return;
      var s = r.__type,
        l = r.__key,
        c = n.get(s);
      void 0 === c && t(33, s);
      var a = c.klass;
      var u = e.get(a);
      void 0 === u && ((u = new Map()), e.set(a, u));
      var f = u.get(l),
        d = "destroyed" === f && "created" === i;
      (void 0 === f || d) && u.set(l, d ? "updated" : i);
    }
    function Oc(t, e, n) {
      var o = t.getParent();
      var r = n,
        i = t;
      return (
        null !== o &&
          (e && 0 === n
            ? ((r = i.getIndexWithinParent()), (i = o))
            : e ||
              n !== i.getChildrenSize() ||
              ((r = i.getIndexWithinParent() + 1), (i = o))),
        i.getChildAtIndex(e ? r - 1 : r)
      );
    }
    function Ec(t, e) {
      var n = t.offset;
      if ("element" === t.type) return Oc(t.getNode(), e, n);
      {
        var _o88 = t.getNode();
        if ((e && 0 === n) || (!e && n === _o88.getTextContentSize())) {
          var _t258 = e ? _o88.getPreviousSibling() : _o88.getNextSibling();
          return null === _t258
            ? Oc(
                _o88.getParentOrThrow(),
                e,
                _o88.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t258;
        }
      }
      return null;
    }
    function Mc(t) {
      var e = Bc(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function Ac(t, e) {
      return bs(t, e, arguments.length <= 2 ? undefined : arguments[2], t);
    }
    function wc(e, n) {
      var o = e._keyToDOMMap.get(n);
      return (void 0 === o && t(75, n), o);
    }
    function Dc(t) {
      var e = t.assignedSlot || t.parentElement;
      if (null !== e) return e;
      var n = t.parentNode;
      return Xc(n) ? n.host : null;
    }
    function Fc(t) {
      return Vl(t) ? t : da(t) ? t.ownerDocument : null;
    }
    function Ic(t) {
      (fs(), gs()._updateTags.add(t));
    }
    function Pc(t) {
      (fs(), gs()._deferred.push(t));
    }
    function Rc(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function Lc(t) {
      var e = Fc(t);
      return e ? e.defaultView : null;
    }
    function Bc(e) {
      var n = e._window;
      return (null === n && t(78), n);
    }
    function Kc(t) {
      return (Ls(t) && t.isInline()) || (zs(t) && t.isInline());
    }
    function zc(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== _u(e) && Ls(e)) return e;
        var _t259 = e.getParentOrThrow();
        if (Wc(_t259)) return _t259;
        e = _t259;
      }
      return e;
    }
    function $c(t) {
      return Ls(t) && t.isShadowRoot();
    }
    function Wc(t) {
      return Ws(t) || $c(t);
    }
    function Uc(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t, Dl);
      return (
        Gl(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function jc(e) {
      var n = gs(),
        o = e.getType(),
        r = Pl(n, o);
      void 0 === r && t(200, e.constructor.name, o);
      var i = r.replace,
        s = r.replaceWithKlass;
      if (null !== i) {
        var _n123 = i(e),
          _r64 = _n123.constructor;
        return (
          null !== s
            ? _n123 instanceof s ||
              t(
                201,
                s.name,
                s.getType(),
                _r64.name,
                _r64.getType(),
                e.constructor.name,
                o,
              )
            : (_n123 instanceof e.constructor && _r64 !== e.constructor) ||
              t(202, _r64.name, _r64.getType(), e.constructor.name, o),
          _n123.__key === e.__key &&
            t(203, e.constructor.name, o, _r64.name, _r64.getType()),
          _n123
        );
      }
      return e;
    }
    function Hc(e, n) {
      !Ws(e.getParent()) || Ls(n) || zs(n) || t(99);
    }
    function Vc(e) {
      var n = ec(e);
      return (null === n && t(63, e), n);
    }
    function Jc(t) {
      if (!t || t.isInline()) return !1;
      if (zs(t)) return !0;
      if (Ls(t)) {
        if (t.isShadowRoot()) {
          var _e158 = t.getParent();
          return !(Ls(_e158) && _e158.isShadowRoot());
        }
        return !t.canBeEmpty();
      }
      return !1;
    }
    function Yc(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var o = t.parentElement;
      null !== o && o.removeChild(t);
    }
    function Gc(t) {
      return o ? (t || window).getSelection() : null;
    }
    function qc(t) {
      var e = Lc(t);
      return e ? e.getSelection() : null;
    }
    function Xc(t) {
      return ga(t) && "host" in t;
    }
    var Qc = [];
    function Zc(t) {
      var e = t.getRootNode();
      if (e === t || !Xc(e)) return Qc;
      var n = [e];
      var o = e.host;
      for (;;) {
        var _t260 = o.getRootNode();
        if (_t260 === o || !Xc(_t260)) break;
        (n.push(_t260), (o = _t260.host));
      }
      return n;
    }
    function* ta(t) {
      var e = [t];
      var n;
      for (; (n = e.pop()); ) {
        yield* n.querySelectorAll('[data-lexical-editor="true"]');
        var _t261 = (Vl(n) ? n : n.ownerDocument).createTreeWalker(
          n,
          NodeFilter.SHOW_ELEMENT,
        );
        var _o89 = void 0;
        for (; (_o89 = _t261.nextNode()); )
          _o89.shadowRoot && e.push(_o89.shadowRoot);
      }
    }
    function ea(t) {
      return null !== t ? t.ownerDocument : document;
    }
    function na() {
      var t = ms();
      return ea(null !== t ? t._rootElement : null);
    }
    function oa(t, e) {
      if (null === e || "function" != typeof t.getComposedRanges) return null;
      var n = Zc(e);
      if (0 === n.length) return null;
      var o = t.getComposedRanges;
      try {
        var _e159 = o.call(t, { shadowRoots: n })[0];
        if (void 0 !== _e159) return _e159;
      } catch (t) {}
      try {
        var _e160 = o.apply(t, n)[0];
        if (void 0 !== _e160) return _e160;
      } catch (t) {}
      return null;
    }
    function ra(t, e) {
      var n = oa(t, e);
      if (null !== n) {
        var _t262 = sa(n);
        if (null !== _t262) return _t262;
      }
      return t.rangeCount > 0 ? t.getRangeAt(0) : null;
    }
    function ia(t, e) {
      var n = oa(t, e);
      return null === n ? t : la(n, ca(t));
    }
    function sa(t) {
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
    function la(t, e) {
      var n = t.startContainer,
        o = t.startOffset,
        r = t.endContainer,
        i = t.endOffset;
      return "backward" === e
        ? {
            anchorNode: r,
            anchorOffset: i,
            direction: e,
            focusNode: n,
            focusOffset: o,
          }
        : {
            anchorNode: n,
            anchorOffset: o,
            direction: e,
            focusNode: r,
            focusOffset: i,
          };
    }
    function ca(t) {
      return t.direction;
    }
    function aa(t) {
      var e = t.getRootNode();
      return Vl(e) || Xc(e) ? e.activeElement : null;
    }
    function ua(t) {
      var e = t.activeElement;
      for (; null !== e && null !== e.shadowRoot; ) {
        var _t263 = e.shadowRoot.activeElement;
        if (null === _t263) break;
        e = _t263;
      }
      return e;
    }
    function fa(t) {
      var e = t.target;
      if (
        null !== e &&
        da(e) &&
        null !== e.shadowRoot &&
        "function" == typeof t.composedPath
      ) {
        var _e161 = t.composedPath();
        if (_e161.length > 0) return _e161[0];
      }
      return e;
    }
    function da(t) {
      return ha(t) && 1 === t.nodeType;
    }
    function ha(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function ga(t) {
      return ha(t) && 11 === t.nodeType;
    }
    var _a =
      /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
    function pa(t) {
      return (
        !(!da(t) || !t.style.display.startsWith("inline")) ||
        _a.test(t.nodeName)
      );
    }
    var ma =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function ya(t) {
      return (
        (!da(t) || !t.style.display.startsWith("inline")) && ma.test(t.nodeName)
      );
    }
    function xa(t) {
      if (zs(t) && !t.isInline()) return !0;
      if (!Ls(t) || Wc(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || Xs(e) || Xr(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function Ca() {
      return gs();
    }
    function Sa(t) {
      if (t === void 0) {
        t = Ca();
      }
      return t._config.dom || kl;
    }
    function Ta(e, n, o) {
      if (o === void 0) {
        o = Ca();
      }
      var r = Sa(o).$getDOMSlot(e, n, o);
      return (Ls(e) && (va(r) || t(344, e.getKey(), e.getType())), r);
    }
    function va(t) {
      return t instanceof _V;
    }
    function Na(t, e, n) {
      if (n === void 0) {
        n = Ca();
      }
      return Jl(Ta(t, e, n).element);
    }
    var ba = new WeakMap(),
      ka = new Map();
    function Oa(e) {
      if (!e._readOnly && e.isEmpty()) return ka;
      e._readOnly || t(192);
      var n = ba.get(e);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref48 of t._nodeMap) {
              var _n124 = _ref48[0];
              var _o90 = _ref48[1];
              {
                var _t264 = _o90.__type;
                var _r65 = e.get(_t264);
                (_r65 || ((_r65 = new Map()), e.set(_t264, _r65)),
                  _r65.set(_n124, _o90));
              }
            }
            return e;
          })(e)),
          ba.set(e, n)),
        n
      );
    }
    function Ea(t) {
      var e = t.constructor.clone(t, Dl);
      return (e.afterCloneFrom(t), e);
    }
    function Ma(t, e) {
      var n = t.getAttribute("data-lexical-indent");
      if (null !== n) {
        var _t265 = parseInt(n, 10);
        if (Number.isFinite(_t265) && _t265 >= 0)
          return void e.setIndent(_t265);
      }
      var o = parseInt(t.style.paddingInlineStart, 10) || 0,
        r = Math.round(o / 40);
      e.setIndent(r);
    }
    function Aa(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function wa(t, e) {
      var n = e.style.textAlign;
      return n && n in w ? t.setFormat(n) : t;
    }
    function Da(t, e) {
      ((t.__lexicalUnmanaged = !0),
        e &&
          void 0 !== e.captureSelection &&
          (t.__lexicalCapturedSelection = e.captureSelection));
    }
    function Fa(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function Ia(t, e) {
      if (e === void 0) {
        e = Ca();
      }
      var n = e.isEditable();
      ((t.contentEditable = n ? "true" : "false"),
        n ? (t.__lexicalEditor = e) : delete t.__lexicalEditor);
    }
    function Pa(t, e) {
      var n = t;
      for (; null != n; ) {
        if (!0 === n.__lexicalCapturedSelection) return !0;
        if (da(n) && n.hasAttribute("data-lexical-slot")) return !1;
        if (void 0 !== rc(n, e)) return !1;
        n = Dc(n);
      }
      return !1;
    }
    function Ra(t, e) {
      return Lt(t, e) && t[e] !== _dr5[e];
    }
    var La = new WeakMap();
    function Ba(e) {
      var n = La.get(e);
      return void 0 !== n
        ? n
        : (function (e) {
            var n =
                null != e.prototype && B in e.prototype
                  ? e.prototype[B]()
                  : void 0,
              o = (function (e) {
                if (!(e === _dr5 || e.prototype instanceof _dr5)) {
                  var _n125 = "<unknown>",
                    _o91 = "<unknown>";
                  try {
                    _n125 = e.getType();
                  } catch (t) {}
                  try {
                    _Ml.version && (_o91 = JSON.parse(_Ml.version));
                  } catch (t) {}
                  t(290, e.name, _n125, _o91);
                }
                return e === _Ks || e === _Rs4 || e === _dr5;
              })(e),
              r = !o && Ra(e, "getType") ? e.getType : void 0,
              i = r && !(za in r) ? r.call(e) : void 0;
            var s,
              l = i;
            if (n)
              if (i) s = n[i];
              else {
                for (var _ref50 of Object.entries(n)) {
                  var _t266 = _ref50[0];
                  var _e162 = _ref50[1];
                  ((l = _t266), (s = _e162));
                }
                if (!s)
                  for (var _t267 of Object.getOwnPropertySymbols(n)) {
                    var _e163 = n[_t267];
                    if (_e163) {
                      s = _e163;
                      break;
                    }
                  }
              }
            var c = {
              compiled: void 0,
              composed: void 0,
              config: {
                declaresOwnConfig: Lt(e.prototype, B),
                klass: e,
                ownNodeConfig: s,
                ownNodeType: l,
              },
              ownFieldsValidated: !1,
            };
            La.set(e, c);
            try {
              var _n126 = (function (e) {
                  var n = e.prototype,
                    o = new Map(),
                    _Ja = Ja(e),
                    r = _Ja.fieldsBaseFirst;
                  for (var _ref52 of r) {
                    var _i49 = _ref52[0];
                    var _s28 = _ref52[1];
                    {
                      var _r67 = qa(e, _i49, _s28);
                      if (null === _r67) continue;
                      if (mt(_r67)) {
                        var _n127 = _r67.field;
                        if (
                          ("__proto__" === _n127 && t(430, e.name, _i49),
                          void 0 !== _r67.setterTable)
                        ) {
                          var _n128 = _r67.setterTable,
                            _o92 = _s28.meta;
                          for (var _r68 of "enum" === _o92.kind
                            ? _o92.values
                            : [_s28.defaultValue])
                            Lt(_n128, String(_r68)) ||
                              t(431, e.name, _i49, JSON.stringify(_r68));
                        }
                        o.set(_i49, {
                          field: _n127,
                          key: _i49,
                          kind: "ownField",
                          schema: _s28,
                          setterTable: _r67.setterTable,
                        });
                        continue;
                      }
                      var _l21 = n[_r67];
                      ("function" != typeof _l21 && t(432, e.name, _i49, _r67),
                        o.set(_i49, {
                          key: _i49,
                          kind: "field",
                          schema: _s28,
                          setter: _l21,
                        }));
                    }
                  }
                  return 0 === o.size ? $a : [].concat(Array.from(o.values()));
                })(e),
                _r66 = (function (e) {
                  var n = e.prototype,
                    o = new Map();
                  for (var _ref54 of Ja(e).fieldsDerivedFirst) {
                    var _r69 = _ref54[0];
                    var _i50 = _ref54[1];
                    {
                      var _s29 = Ga(e, _r69, _i50);
                      if (null === _s29) continue;
                      if (mt(_s29)) {
                        var _l22 = _s29.field;
                        "__proto__" === _l22 && t(426, e.name, _r69);
                        var _c17 = _s29.when;
                        var _a13 = void 0;
                        if (void 0 !== _c17) {
                          var _o93 = n[_c17];
                          ("function" != typeof _o93 &&
                            t(427, e.name, _r69, _c17),
                            (_a13 = _o93));
                        }
                        o.set(_r69, {
                          defaultValue: _i50.defaultValue,
                          derived: null === _i50.setter,
                          field: _l22,
                          getterTable: _s29.getterTable,
                          isEqual: _i50.isEqual,
                          key: _r69,
                          kind: "ownField",
                          schema: _i50,
                          when: _a13,
                        });
                        continue;
                      }
                      var _l23 = n[_s29];
                      ("function" != typeof _l23 && t(428, e.name, _r69, _s29),
                        o.set(_r69, {
                          defaultValue: _i50.defaultValue,
                          derived: null === _i50.setter,
                          getter: _l23,
                          isEqual: _i50.isEqual,
                          key: _r69,
                          kind: "method",
                          schema: _i50,
                        }));
                    }
                  }
                  return 0 === o.size ? Ya : [].concat(Array.from(o.values()));
                })(e),
                _i48 = Ja(e),
                _a12 = (function (t, e, n) {
                  var o,
                    r = t;
                  for (var _ref56 of lu(t)) {
                    var _e164 = _ref56.klass;
                    var _n129 = _ref56.ownNodeConfig;
                    _n129 &&
                      void 0 !== _n129.generated &&
                      (void 0 === o
                        ? ((o = _n129.generated), (r = _e164))
                        : _n129.generated === o && (r = _e164));
                  }
                  return void 0 === o
                    ? null
                    : r === t ||
                        (function (t, e) {
                          if (
                            t.getters.length !== e.getters.length ||
                            t.setters.length !== e.setters.length
                          )
                            return !1;
                          for (
                            var _n130 = 0;
                            _n130 < t.getters.length;
                            _n130++
                          ) {
                            var _o94 = t.getters[_n130],
                              _r70 = e.getters[_n130];
                            if (
                              _o94.kind !== _r70.kind ||
                              _o94.key !== _r70.key ||
                              _o94.schema !== _r70.schema ||
                              _o94.derived !== _r70.derived ||
                              _o94.isEqual !== _r70.isEqual ||
                              !Object.is(
                                _o94.defaultValue,
                                _r70.defaultValue,
                              ) ||
                              ("ownField" === _o94.kind &&
                                "ownField" === _r70.kind &&
                                (_o94.field !== _r70.field ||
                                  (void 0 === _o94.getterTable) !=
                                    (void 0 === _r70.getterTable)))
                            )
                              return !1;
                          }
                          for (
                            var _n131 = 0;
                            _n131 < t.setters.length;
                            _n131++
                          ) {
                            var _o95 = t.setters[_n131],
                              _r71 = e.setters[_n131];
                            if (
                              _o95.kind !== _r71.kind ||
                              _o95.key !== _r71.key ||
                              _o95.schema !== _r71.schema ||
                              ("ownField" === _o95.kind &&
                                "ownField" === _r71.kind &&
                                (_o95.field !== _r71.field ||
                                  (void 0 === _o95.setterTable) !=
                                    (void 0 === _r71.setterTable)))
                            )
                              return !1;
                          }
                          return !0;
                        })(n, Ka(Ba(r)))
                      ? o
                      : null;
                })(e, 0, { getters: _r66, setters: _n126 });
              ((c.compiled = {
                flatStates: _i48.flatStates,
                generated: null === _a12 ? null : _a12(_i48.fields),
                getters: _r66,
                isCompactDefault: Za(_r66),
                setters: _n126,
              }),
                (function (t, e, n, o) {
                  if (!e && n) {
                    if (!Ra(t, "getType")) {
                      var _e165 = t,
                        _o96 = function _o96() {
                          return this !== _e165 ? _dr5.getType.call(this) : n;
                        };
                      ((_o96[za] = !0), (t.getType = _o96));
                    }
                    if (
                      (Ra(t, "clone") ||
                        (t.clone = function (e, n) {
                          wl(e);
                          var o = new t();
                          return (n !== Dl && o.afterCloneFrom(e), o);
                        }),
                      Ra(t, "importJSON") ||
                        (t.importJSON =
                          (o && o.$importJSON) ||
                          (function (t) {
                            return function (e) {
                              var n = cu(t);
                              return n.updateFromJSON ===
                                _dr5.prototype.updateFromJSON
                                ? (function (t, e) {
                                    return eu(
                                      t.__state || void 0 !== e[R]
                                        ? ie(t, e)
                                        : t,
                                      e,
                                    );
                                  })(n, e)
                                : n.updateFromJSON(e);
                            };
                          })(t)),
                      !Ra(t, "importDOM") && o)
                    ) {
                      var _e166 = o.importDOM;
                      _e166 &&
                        (t.importDOM = function () {
                          return _e166;
                        });
                    }
                  }
                })(e, o, l, s),
                (function (t) {
                  var _loop4 = function _loop4() {
                      var e = _ref58.klass;
                      var n = _ref58.ownNodeConfig;
                      {
                        var _t268 = e.prototype;
                        if (Lt(_t268, "afterCloneFrom")) return 0;
                        var _o97 = su(e);
                        if (0 === _o97.length) return 0;
                        var _r72 = Object.getPrototypeOf(_t268),
                          _i51 =
                            n && void 0 !== n.generated
                              ? Ka(Ba(e)).generated
                              : null,
                          _s30 =
                            (null !== _i51 && _i51.afterCloneFrom) ||
                            function (t, e) {
                              var n = t,
                                r = e;
                              for (
                                var _t269 = 0;
                                _t269 < _o97.length;
                                _t269++
                              ) {
                                var _e167 = _o97[_t269];
                                n[_e167] = r[_e167];
                              }
                            };
                        ((_t268.afterCloneFrom = function (t) {
                          (_r72.afterCloneFrom.call(this, t), _s30(this, t));
                        }),
                          (_t268.afterCloneFrom[ru] = !0));
                      }
                    },
                    _ret2;
                  for (var _ref58 of lu(t)) {
                    _ret2 = _loop4();
                    if (_ret2 === 0) continue;
                  }
                })(e));
            } catch (t) {
              throw (La["delete"](e), t);
            }
            return c;
          })(e);
    }
    function Ka(e) {
      var n = e.compiled;
      return (void 0 === n && t(422, e.config.klass.name), n);
    }
    var za = Symbol("lexical.synthesizedGetType"),
      $a = [];
    function Wa(t, e, n, o) {
      var r = void 0 === n.method ? o : n.method,
        i = Ja(t).declaredBy.get(e);
      if (void 0 === i) return n;
      var s = t.prototype,
        l = i.prototype;
      return Ua(s, l, r) && Ua(s, l, o) ? n : r;
    }
    function Ua(t, e, n) {
      return t[n] === e[n];
    }
    function ja(t) {
      return "set" + t.charAt(0).toUpperCase() + t.slice(1);
    }
    function Ha(t) {
      return "get" + t.charAt(0).toUpperCase() + t.slice(1);
    }
    var Va = {
      declaredBy: new Map(),
      fields: new Map(),
      fieldsBaseFirst: [],
      fieldsDerivedFirst: [],
      flatStates: [],
    };
    function Ja(t) {
      var e = Ba(t);
      return (
        void 0 === e.composed &&
          (e.composed = (function (t) {
            var e = [],
              n = [],
              o = [];
            for (var _ref60 of lu(t)) {
              var _r73 = _ref60.klass;
              var _i52 = _ref60.ownNodeConfig;
              {
                var _t270 = _i52 && _i52.json;
                (n.push(_r73),
                  e.push(
                    _t270 && "node" === _t270.meta.kind
                      ? Object.entries(_t270.meta.fields)
                      : [],
                  ));
                var _s31 = [];
                if (_i52 && _i52.stateConfigs)
                  for (var _t271 of _i52.stateConfigs)
                    "stateConfig" in _t271 &&
                      _t271.flat &&
                      _s31.push(_t271.stateConfig);
                o.push(_s31);
              }
            }
            var r = new Map();
            for (var _t272 = 0; _t272 < e.length; _t272++)
              for (var _ref62 of e[_t272]) {
                var _n132 = _ref62[0];
                var _o98 = _ref62[1];
                r.has(_n132) || r.set(_n132, _o98);
              }
            var i = new Map(),
              s = new Map(),
              l = new Map();
            for (var _t273 = e.length - 1; _t273 >= 0; _t273--) {
              for (var _ref64 of e[_t273]) {
                var _o99 = _ref64[0];
                var _l24 = _ref64[1];
                {
                  var _e168 = r.get(_o99);
                  (void 0 === _e168 || i.has(_o99) || i.set(_o99, _e168),
                    void 0 === _e168 ||
                      _l24 !== _e168 ||
                      s.has(_o99) ||
                      s.set(_o99, n[_t273]));
                }
              }
              for (var _e169 of o[_t273])
                l.has(_e169.key) || l.set(_e169.key, _e169);
            }
            return 0 === r.size && 0 === l.size
              ? Va
              : {
                  declaredBy: s,
                  fields: i,
                  fieldsBaseFirst: [].concat(Array.from(i)),
                  fieldsDerivedFirst: [].concat(Array.from(r)),
                  flatStates: [].concat(Array.from(l.values())),
                };
          })(t)),
        e.composed
      );
    }
    var Ya = [];
    function Ga(t, e, n) {
      var o = n.getter;
      if (null === o) return null;
      var r = void 0 === o ? Ha(e) : o;
      return mt(r) ? Wa(t, e, r, Ha(e)) : r;
    }
    function qa(t, e, n) {
      var o = n.setter;
      if (null === o) return null;
      var r = void 0 === o ? ja(e) : o;
      return mt(r) ? Wa(t, e, r, ja(e)) : r;
    }
    function Xa(t) {
      return t;
    }
    function Qa(t, e) {
      var n = t.defaultValue,
        o = t.isEqual;
      return void 0 === e || e === n || (void 0 !== o && o(e, n));
    }
    function Za(t) {
      var e;
      return function (n, o) {
        void 0 === e &&
          (e = new Map(
            t.map(function (t) {
              return [t.key, t];
            }),
          ));
        var r = e.get(n);
        return void 0 !== r && Qa(r, o);
      };
    }
    function tu(t) {
      var e = t.setterTable,
        n = t.schema,
        o = n.defaultValue;
      return void 0 === e ? o : e[String(o)];
    }
    function eu(t, e) {
      var n = Ba(t.constructor),
        _Ka = Ka(n),
        o = _Ka.flatStates,
        r = _Ka.generated,
        i = _Ka.setters,
        s = (function (t, e, n) {
          var o = t;
          var _loop5 = function _loop5() {
            var r = n[_t274],
              i = e[r.key];
            if (void 0 !== i) {
              var _t275 = r.parse(i);
              o = te(o, r, function () {
                return _t275;
              });
            }
          };
          for (var _t274 = 0; _t274 < n.length; _t274++) {
            _loop5();
          }
          return o;
        })(t, e, o);
      return null !== r && void 0 !== r.updateFromJSON
        ? r.updateFromJSON(s, e)
        : (function (t, e, n) {
            for (var _o100 = 0; _o100 < n.length; _o100++) {
              var _r74 = n[_o100],
                _i53 = _r74.schema(e[_r74.key]);
              "ownField" === _r74.kind
                ? (Xa(t)[_r74.field] =
                    void 0 === _r74.setterTable
                      ? _i53
                      : Lt(_r74.setterTable, _i53)
                        ? _r74.setterTable[_i53]
                        : tu(_r74))
                : _r74.setter.call(t, _i53);
            }
            return t;
          })(s, e, i);
    }
    function nu(t) {
      return Ba(t).config;
    }
    function ou(t) {
      var e = [];
      for (var _n133 of [t.getter, t.setter])
        mt(_n133) &&
          "__proto__" !== _n133.field &&
          !e.includes(_n133.field) &&
          e.push(_n133.field);
      return e;
    }
    var ru = "__lexicalSynthesizedAfterCloneFrom";
    function iu(t) {
      var _Ja2 = Ja(t),
        e = _Ja2.declaredBy,
        n = _Ja2.fieldsBaseFirst,
        o = [];
      for (var _ref66 of n) {
        var _r75 = _ref66[0];
        var _i54 = _ref66[1];
        if (e.get(_r75) === t)
          for (var _t276 of ou(_i54)) o.includes(_t276) || o.push(_t276);
      }
      return o;
    }
    function su(t) {
      var e = iu(t);
      if (0 === e.length) return e;
      var n = new Set();
      for (var _ref68 of lu(t)) {
        var _e170 = _ref68.klass;
        if (_e170 !== t) for (var _t277 of iu(_e170)) n.add(_t277);
      }
      return 0 === n.size
        ? e
        : e.filter(function (t) {
            return !n.has(t);
          });
    }
    function* lu(t) {
      for (var _e171 = t; _e171 && (_e171 === _dr5 || hr(_e171.prototype)); ) {
        var _t278 = nu(_e171),
          _n134 = _t278.declaresOwnConfig;
        (yield _n134
          ? _t278
          : babelHelpers["extends"]({}, _t278, { ownNodeConfig: void 0 }),
          (_e171 =
            (_n134 && _t278.ownNodeConfig && _t278.ownNodeConfig["extends"]) ||
            fu(_e171)));
      }
    }
    function cu(t) {
      var e = Ca();
      fs();
      var n = e.resolveRegisteredNodeAfterReplacements(e.getRegisteredNode(t)),
        o = new n.klass();
      return null === n.replace ? o : jc(o);
    }
    var au = function au(t, e) {
      var n = t;
      for (; null != n && !Ws(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function uu(e, n) {
      var o = [];
      var r = e.__first;
      for (; null !== r; ) {
        var _e172 = null === n ? ec(r) : n.get(r);
        (null == _e172 && t(174), o.push(r), (r = _e172.__next));
      }
      return o;
    }
    function fu(t) {
      var e = Object.getPrototypeOf(t);
      if ("function" == typeof e && e !== Function.prototype) return e;
      var n = t.prototype && Object.getPrototypeOf(t.prototype);
      return n ? n.constructor : null;
    }
    var du = new Map();
    function hu(t) {
      return Ls(t) || zs(t);
    }
    function gu(t) {
      return Ls(t) || zs(t);
    }
    function _u(t) {
      var e = t.getLatest();
      return gu(e) ? e.__slotHost : null;
    }
    function pu(e) {
      var n = _u(e);
      if (null === n) return null;
      var o = ec(n);
      return (Ls(o) || zs(o) || t(370), o);
    }
    function mu(t) {
      var e = pu(t);
      if (null === e) return null;
      var n = t.getLatest().__key;
      for (var _ref70 of xu(e)) {
        var _t279 = _ref70[0];
        var _o101 = _ref70[1];
        if (_o101 === n) return _t279;
      }
      return null;
    }
    function yu(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== _u(e)) return e;
        e = e.getParent();
      }
      return null;
    }
    function xu(t) {
      var e = t.getLatest();
      return hu(e) && null !== e.__slots ? e.__slots : du;
    }
    function Cu(t) {
      return Array.from(xu(t).keys());
    }
    function Su(t, e) {
      var n = xu(t).get(e);
      return void 0 === n ? null : ec(n);
    }
    var Tu = ["__proto__", "constructor", "prototype"],
      vu = Symbol("slotMapOwner");
    function Nu(t) {
      var e = t.__slots;
      return (
        (null !== e && e[vu] === t) ||
          ((e = new Map(e)), (e[vu] = t), (t.__slots = e)),
        e
      );
    }
    var bu = new WeakMap(),
      ku = [];
    function Ou(t) {
      for (var _ref72 of lu(t)) {
        var _e173 = _ref72.ownNodeConfig;
        {
          var _t280 = _e173 && _e173.slots;
          if (_t280) return _t280;
        }
      }
      return ku;
    }
    function Eu(t) {
      var e = "";
      for (var _n135 of Cu(t)) {
        var _o102 = Su(t, _n135);
        null !== _o102 && (e += _o102.getTextContent());
      }
      return e;
    }
    function Mu(t, e, n) {
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
    function Au(e, n, o) {
      ("__proto__" !== n && "constructor" !== n && "prototype" !== n) ||
        t(373, n);
      var r = e.getLatest();
      if (null !== r.__slots && r.__slots.get(n) === o.getLatest().__key)
        return r;
      ((!Ls(o) && !zs(o)) || o.isInline()) && t(374, o.__key);
      var i = e.getWritable(),
        s = Nu(i),
        l = s.get(n);
      void 0 !== l && wu(l);
      var c = o.getWritable(),
        a = pu(c);
      if (null !== a) {
        var _t281 = mu(c);
        (null !== _t281 && Nu(a.getWritable())["delete"](_t281),
          (c.__slotHost = null));
      }
      return (
        ql(c),
        (c.__slotHost = i.__key),
        s.set(n, c.__key),
        (function (e) {
          var n = e.__slots;
          if (null === n || n.size < 2) return;
          var o = (function (e) {
            var n = bu.get(e);
            if (void 0 === n) {
              var _o103 = Ou(e),
                _r76 = new Map();
              for (var _n136 of _o103)
                (Tu.includes(_n136) && t(371, e.name, _n136),
                  _r76.has(_n136) && t(372, e.name, _n136),
                  _r76.set(_n136, _r76.size));
              ((n = _r76), bu.set(e, n));
            }
            return n;
          })(e.constructor);
          var r = null,
            i = !0;
          for (var _t282 of n.keys()) {
            if (null !== r && Mu(r, _t282, o) > 0) {
              i = !1;
              break;
            }
            r = _t282;
          }
          if (i) return;
          var s = Array.from(n).sort(function (_ref73, _ref74) {
            var t = _ref73[0];
            var e = _ref74[0];
            return Mu(t, e, o);
          });
          n.clear();
          for (var _ref76 of s) {
            var _t283 = _ref76[0];
            var _e174 = _ref76[1];
            n.set(_t283, _e174);
          }
        })(i),
        (gs()._slotsUsed = !0),
        (hs()._slotsUsed = !0),
        i
      );
    }
    function wu(e) {
      var n = ec(e);
      if (null === n) return;
      var o = n.getWritable();
      (gu(o) || t(377, e), (o.__slotHost = null), o.remove());
    }
    var Du = { next: "previous", previous: "next" };
    var _Fu4 = (function () {
      function Fu(t) {
        this.origin = t;
      }
      var _proto19 = Fu.prototype;
      _proto19[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return sf({
            hasNext: $u,
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
        return Vu(this.getNodeAtCaret(), this.direction);
      };
      _proto19.getSiblingCaret = function getSiblingCaret() {
        return Vu(this.origin, this.direction);
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
        var i = this;
        var s = this.getParentAtCaret(),
          l = new Map();
        for (
          var _t284 = i.getAdjacentCaret();
          null !== _t284 && l.size < e;
          _t284 = _t284.getAdjacentCaret()
        ) {
          var _e175 = _t284.origin.getWritable();
          l.set(_e175.getKey(), _e175);
        }
        for (var _e176 of r) {
          if (l.size > 0) {
            var _n137 = i.getNodeAtCaret();
            if (_n137) {
              if (
                (l["delete"](_n137.getKey()),
                l["delete"](_e176.getKey()),
                _n137.is(_e176) || i.origin.is(_e176))
              );
              else {
                var _t285 = _e176.getParent();
                (_t285 && _t285.is(s) && _e176.remove(), _n137.replace(_e176));
              }
            } else null === _n137 && t(263, Array.from(l).join(" "));
          } else i.insert(_e176);
          i = Vu(_e176, this.direction);
        }
        for (var _t286 of l.values()) _t286.remove();
        return this;
      };
      return Fu;
    })();
    var _Iu3 = (function (_Fu) {
      function Iu() {
        var _this6;
        for (
          var _len8 = arguments.length, args = new Array(_len8), _key8 = 0;
          _key8 < _len8;
          _key8++
        ) {
          args[_key8] = arguments[_key8];
        }
        return (
          ((_this6 = _Fu.call.apply(_Fu, [this].concat(args)) || this),
          (_this6.type = "child"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(Iu, _Fu);
      var _proto20 = Iu.prototype;
      _proto20.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : qu(t, this.direction);
      };
      _proto20.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Vu(Lu(this.getParentAtCaret(), t), this.direction);
      };
      _proto20.getFlipped = function getFlipped() {
        var t = Ru(this.direction);
        return Vu(this.getNodeAtCaret(), t) || qu(this.origin, t);
      };
      _proto20.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto20.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto20.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof Iu &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto20.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return Iu;
    })(_Fu4);
    var Pu = { root: Ws, shadowRoot: Wc };
    function Ru(t) {
      return Du[t];
    }
    function Lu(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return null === t || Pu[e](t) ? null : null === _u(t) ? t : null;
    }
    var _Bu3 = (function (_Fu2) {
      function Bu() {
        var _this7;
        for (
          var _len9 = arguments.length, args = new Array(_len9), _key9 = 0;
          _key9 < _len9;
          _key9++
        ) {
          args[_key9] = arguments[_key9];
        }
        return (
          ((_this7 = _Fu2.call.apply(_Fu2, [this].concat(args)) || this),
          (_this7.type = "sibling"),
          babelHelpers.assertThisInitialized(_this7)) ||
          babelHelpers.assertThisInitialized(_this7)
        );
      }
      babelHelpers.inheritsLoose(Bu, _Fu2);
      var _proto21 = Bu.prototype;
      _proto21.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Vu(t, this.direction);
      };
      _proto21.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto21.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto21.getChildCaret = function getChildCaret() {
        return Ls(this.origin) ? qu(this.origin, this.direction) : null;
      };
      _proto21.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Vu(Lu(this.getParentAtCaret(), t), this.direction);
      };
      _proto21.getFlipped = function getFlipped() {
        var t = Ru(this.direction);
        return (
          Vu(this.getNodeAtCaret(), t) || qu(this.origin.getParentOrThrow(), t)
        );
      };
      _proto21.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Bu &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto21.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof Bu || t instanceof _Ku3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return Bu;
    })(_Fu4);
    var _Ku3 = (function (_Fu3) {
      function Ku(t, e) {
        var _this8;
        ((_this8 = _Fu3.call(this, t) || this),
          (_this8.type = "text"),
          (_this8.offset = e));
        return _this8;
      }
      babelHelpers.inheritsLoose(Ku, _Fu3);
      var _proto22 = Ku.prototype;
      _proto22.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Ju(t, this.direction, this.offset);
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
        return Vu(Lu(this.getParentAtCaret(), t), this.direction);
      };
      _proto22.getFlipped = function getFlipped() {
        return Ju(this.origin, Ru(this.direction), this.offset);
      };
      _proto22.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Ku &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto22.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _Bu3 || t instanceof Ku) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto22.getSiblingCaret = function getSiblingCaret() {
        return Vu(this.origin, this.direction);
      };
      return Ku;
    })(_Fu4);
    function zu(t) {
      return t instanceof _Ku3;
    }
    function $u(t) {
      return t instanceof _Bu3;
    }
    function Wu(t) {
      return t instanceof _Iu3;
    }
    var Uu = {
        next: (function (_Ku) {
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
              ((_this9 = _Ku.call.apply(_Ku, [this].concat(args)) || this),
              (_this9.direction = "next"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class, _Ku);
          var _proto23 = _class.prototype;
          _proto23.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto23.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_Ku3),
        previous: (function (_Ku2) {
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
              ((_this0 = _Ku2.call.apply(_Ku2, [this].concat(args)) || this),
              (_this0.direction = "previous"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class3, _Ku2);
          var _proto24 = _class3.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_Ku3),
      },
      ju = {
        next: (function (_Bu) {
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
              ((_this1 = _Bu.call.apply(_Bu, [this].concat(args)) || this),
              (_this1.direction = "next"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class5, _Bu);
          var _proto25 = _class5.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_Bu3),
        previous: (function (_Bu2) {
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
              ((_this10 = _Bu2.call.apply(_Bu2, [this].concat(args)) || this),
              (_this10.direction = "previous"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class7, _Bu2);
          var _proto26 = _class7.prototype;
          _proto26.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto26.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_Bu3),
      },
      Hu = {
        next: (function (_Iu) {
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
              ((_this11 = _Iu.call.apply(_Iu, [this].concat(args)) || this),
              (_this11.direction = "next"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class9, _Iu);
          var _proto27 = _class9.prototype;
          _proto27.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto27.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_Iu3),
        previous: (function (_Iu2) {
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
              ((_this12 = _Iu2.call.apply(_Iu2, [this].concat(args)) || this),
              (_this12.direction = "previous"),
              babelHelpers.assertThisInitialized(_this12)) ||
              babelHelpers.assertThisInitialized(_this12)
            );
          }
          babelHelpers.inheritsLoose(_class1, _Iu2);
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
        })(_Iu3),
      };
    function Vu(t, e) {
      return t ? new ju[e](t) : null;
    }
    function Ju(t, e, n) {
      return t ? new Uu[e](t, Yu(t, n)) : null;
    }
    function Yu(t, n, o) {
      if (o === void 0) {
        o = "error";
      }
      var r = t.getTextContentSize();
      var i = "next" === n ? r : "previous" === n ? 0 : n;
      return (
        (i < 0 || i > r) &&
          ("clamp" !== o && e(284, String(n), String(r), t.getKey()),
          (i = i < 0 ? 0 : r)),
        i
      );
    }
    function Gu(t, e) {
      return new _tf(t, e);
    }
    function qu(t, e) {
      return Ls(t) ? new Hu[e](t) : null;
    }
    function Xu(t) {
      return (t && t.getChildCaret()) || t;
    }
    function Qu(t) {
      return t && Xu(t.getAdjacentCaret());
    }
    var _Zu = (function () {
      function Zu(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto29 = Zu.prototype;
      _proto29.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new Zu(t, e, this.direction);
      };
      _proto29.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto29.getTextSlices = function getTextSlices() {
        var _this17 = this;
        var t = function t(_t287) {
            var e = _this17[_t287].getLatest();
            return zu(e)
              ? (function (t, e) {
                  var n = t.direction,
                    o = t.origin;
                  return Gu(t, Yu(o, "focus" === e ? Ru(n) : n) - t.offset);
                })(e, _t287)
              : null;
          },
          e = t("anchor"),
          n = t("focus");
        if (e && n) {
          var _t288 = e.caret,
            _o104 = n.caret;
          if (_t288.isSameNodeCaret(_o104))
            return [Gu(_t288, _o104.offset - _t288.offset), null];
        }
        return [e, n];
      };
      _proto29.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = zu(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          o = zu(n),
          r = function r(e) {
            return e.isSameNodeCaret(n) ? null : Qu(e) || e.getParentCaret(t);
          };
        return sf({
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
      return Zu;
    })();
    var _tf = (function () {
      function tf(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto30 = tf.prototype;
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
        return Ju(t.setTextContent(r.slice(0, n) + r.slice(o)), e, n);
      };
      return tf;
    })();
    function ef(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function nf(t) {
      return rf(t, ef(qu(cc(), Ru(t.direction)), t.direction));
    }
    function of(t) {
      return rf(t, t);
    }
    function rf(e, n) {
      return (
        e.direction !== n.direction && t(265),
        new _Zu(e, n, e.direction)
      );
    }
    function sf(t) {
      var _ref77;
      var e = t.initial,
        n = t.hasNext,
        o = t.step,
        r = t.map;
      var i = e;
      return (
        (_ref77 = {}),
        (_ref77[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
          function () {
            return this;
          }),
        (_ref77.next = function next() {
          if (!n(i)) return { done: !0, value: void 0 };
          var t = { done: !1, value: r(i) };
          return ((i = o(i)), t);
        }),
        _ref77
      );
    }
    function lf(e, n) {
      var o = ff(e.origin, n.origin);
      switch (
        (null === o && t(275, e.origin.getKey(), n.origin.getKey()), o.type)
      ) {
        case "same": {
          var _t289 = "text" === e.type,
            _o105 = "text" === n.type;
          return _t289 && _o105
            ? (function (t, e) {
                return Math.sign(t - e);
              })(e.offset, n.offset)
            : e.type === n.type
              ? 0
              : _t289
                ? -1
                : _o105
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
          return cf(o);
      }
    }
    function cf(t) {
      var e = t.a,
        n = t.b,
        o = e.__key,
        r = n.__key;
      var i = e,
        s = n;
      for (; i && s; i = i.getNextSibling(), s = s.getNextSibling()) {
        if (i.__key === r) return -1;
        if (s.__key === o) return 1;
      }
      return null === i ? 1 : -1;
    }
    function af(t, e) {
      return e.is(t);
    }
    function uf(t) {
      return Ls(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function ff(e, n) {
      if (e.is(n)) return { commonAncestor: e, type: "same" };
      var o = new Map();
      for (
        var _uf = uf(e), _t290 = _uf[0], _n138 = _uf[1];
        _t290;
        _n138 = _t290, _t290 = _t290.getParent()
      )
        o.set(_t290, _n138);
      for (
        var _uf2 = uf(n), _r77 = _uf2[0], _i55 = _uf2[1];
        _r77;
        _i55 = _r77, _r77 = _r77.getParent()
      ) {
        var _s32 = o.get(_r77);
        if (void 0 !== _s32)
          return null === _s32
            ? (af(e, _r77) || t(276),
              { commonAncestor: _r77, type: "ancestor" })
            : null === _i55
              ? (af(n, _r77) || t(277),
                { commonAncestor: _r77, type: "descendant" })
              : (((Ls(_s32) || af(e, _s32)) &&
                  (Ls(_i55) || af(n, _i55)) &&
                  _r77.is(_s32.getParent()) &&
                  _r77.is(_i55.getParent())) ||
                  t(278),
                { a: _s32, b: _i55, commonAncestor: _r77, type: "branch" });
      }
      return null;
    }
    function df() {
      var e = [];
      for (
        var _len14 = arguments.length, t = new Array(_len14), _key14 = 0;
        _key14 < _len14;
        _key14++
      ) {
        t[_key14] = arguments[_key14];
      }
      for (var _n139 of t)
        if (_n139 && "string" == typeof _n139)
          for (var _ref79 of _n139.matchAll(/\S+/g)) {
            var _t291 = _ref79[0];
            e.push(_t291);
          }
      return e;
    }
    function hf() {
      for (
        var _len15 = arguments.length, t = new Array(_len15), _key15 = 0;
        _key15 < _len15;
        _key15++
      ) {
        t[_key15] = arguments[_key15];
      }
      return function () {
        for (var _e177 = t.length - 1; _e177 >= 0; _e177--) t[_e177]();
        t.length = 0;
      };
    }
    ((exports.$addUpdateTag = Ic),
      (exports.$applyNodeReplacement = jc),
      (exports.$assumeActiveEditor = function (t) {
        (null !== hs() && null === os && (os = t), os !== t && e(378));
      }),
      (exports.$caretFromPoint = el),
      (exports.$caretRangeFromSelection = il),
      (exports.$cloneWithProperties = Ea),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = Ea(t))[ar] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = lf),
      (exports.$copyNode = Uc),
      (exports.$create = cu),
      (exports.$createChildrenArray = uu),
      (exports.$createLineBreakNode = qs),
      (exports.$createNodeSelection = Ri),
      (exports.$createParagraphNode = Sl),
      (exports.$createPoint = ri),
      (exports.$createRangeSelection = Pi),
      (exports.$createRangeSelectionFromDom = function (t, e) {
        return Li(null, t, e, null);
      }),
      (exports.$createTabNode = ei),
      (exports.$createTextNode = qr),
      (exports.$exportNodeJSON = ot),
      (exports.$extendCaretToRange = nf),
      (exports.$findMatchingParent = au),
      (exports.$flushSyncAfterUpdate = function () {
        var t = hs();
        (fs(), (t._flushSync = !0));
      }),
      (exports.$formatText = _i),
      (exports.$fullReconcile = _s),
      (exports.$generateNodesFromRawText = Gi),
      (exports.$getAdjacentChildCaret = Qu),
      (exports.$getAdjacentNode = Ec),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          o = t,
          r = Qu(o);
        for (; null === r; ) {
          if ((n--, (r = o.getParentCaret(e)), !r)) return null;
          ((o = r), (r = Qu(o)));
        }
        return r && [r, n];
      }),
      (exports.$getCaretInDirection = ef),
      (exports.$getCaretRange = rf),
      (exports.$getCaretRangeInDirection = dl),
      (exports.$getCharacterOffsets = mi),
      (exports.$getChildCaret = qu),
      (exports.$getChildCaretAtIndex = hl),
      (exports.$getChildCaretOrSelf = Xu),
      (exports.$getCollapsedCaretRange = of),
      (exports.$getCommonAncestor = ff),
      (exports.$getCommonAncestorResultBranchOrder = cf),
      (exports.$getDOMSlot = Ta),
      (exports.$getDOMTextNode = Na),
      (exports.$getDocument = na),
      (exports.$getEditor = Ca),
      (exports.$getEditorDOMRenderConfig = Sa),
      (exports.$getNearestNodeFromDOMNode = ic),
      (exports.$getNearestRootOrShadowRoot = zc),
      (exports.$getNodeByKey = ec),
      (exports.$getNodeByKeyOrThrow = Vc),
      (exports.$getNodeFromDOMNode = nc),
      (exports.$getPreviousSelection = Ki),
      (exports.$getRoot = cc),
      (exports.$getSelection = Bi),
      (exports.$getSelectionSlotFrame = function (t) {
        var _t$getNodes$;
        if (null === t) return null;
        var e = fi(t)
          ? t.anchor.getNode()
          : (_t$getNodes$ = t.getNodes()[0]) != null
            ? _t$getNodes$
            : null;
        return null === e ? null : yu(e);
      }),
      (exports.$getSiblingCaret = Vu),
      (exports.$getSlot = Su),
      (exports.$getSlotFrame = yu),
      (exports.$getSlotHost = pu),
      (exports.$getSlotNameWithinHost = mu),
      (exports.$getSlotNames = Cu),
      (exports.$getState = Zt),
      (exports.$getStateChange = function (t, e, n) {
        var o = Zt(t, n, qt),
          r = Zt(e, n, qt);
        return n.isEqual(o, r) ? null : [o, r];
      }),
      (exports.$getTextContent = function () {
        var t = Bi();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = Yu),
      (exports.$getTextPointCaret = Ju),
      (exports.$getTextPointCaretSlice = Gu),
      (exports.$getWritableNodeState = re),
      (exports.$hasAncestor = Rc),
      (exports.$hasUpdateTag = function (t) {
        return gs()._updateTags.has(t);
      }),
      (exports.$insertNodeToNearestRootAtCaret = ml),
      (exports.$insertNodes = function (t) {
        var e = Bi() || Ki();
        (null === e && (e = cc().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = Fi),
      (exports.$isBlockFullySelected = yl),
      (exports.$isChildCaret = Wu),
      (exports.$isCompactExport = nt),
      (exports.$isDecoratorNode = zs),
      (exports.$isEditorState = function (t) {
        return t instanceof _Vs;
      }),
      (exports.$isElementDOMSlot = va),
      (exports.$isElementNode = Ls),
      (exports.$isExtendableTextPointCaret = fl),
      (exports.$isInlineElementOrDecoratorNode = Kc),
      (exports.$isInlineFormattable = zr),
      (exports.$isLeafNode = function (t) {
        return Xr(t) || Xs(t) || zs(t);
      }),
      (exports.$isLexicalNode = hr),
      (exports.$isLineBreakNode = Xs),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _Fu4;
      }),
      (exports.$isNodeSelection = hi),
      (exports.$isParagraphNode = Tl),
      (exports.$isRangeSelection = fi),
      (exports.$isRootNode = Ws),
      (exports.$isRootOrShadowRoot = Wc),
      (exports.$isSelectionCapturedInDecoratorInput = Ll),
      (exports.$isShadowRootNode = $c),
      (exports.$isSiblingCaret = $u),
      (exports.$isSlotChild = gu),
      (exports.$isSlotHost = hu),
      (exports.$isTabNode = ni),
      (exports.$isTextNode = Xr),
      (exports.$isTextPointCaret = zu),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _tf;
      }),
      (exports.$isTokenOrSegmented = jl),
      (exports.$isTokenOrTab = Ul),
      (exports.$markSlotEditable = Ia),
      (exports.$needsBlockCursorBeside = Jc),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = hs();
        if (n._readOnly) {
          var _t292 = Oa(n).get(e);
          return _t292 ? Array.from(_t292.values()) : [];
        }
        var o = n._nodeMap,
          r = [];
        for (var _ref81 of o) {
          var _n140 = _ref81[1];
          _n140 instanceof t &&
            _n140.__type === e &&
            _n140.isAttached() &&
            r.push(_n140);
        }
        return r;
      }),
      (exports.$normalizeCaret = ul),
      (exports.$normalizeSelection__EXPERIMENTAL = ge),
      (exports.$onUpdate = Pc),
      (exports.$parseSerializedNode = function (t) {
        return Ss(t, gs()._nodes);
      }),
      (exports.$removeFromParent = ql),
      (exports.$removeSlot = function (t, e) {
        var n = t.getWritable();
        if (null === n.__slots) return n;
        var o = n.__slots.get(e);
        return (void 0 !== o && (wu(o), Nu(n)["delete"](e)), n);
      }),
      (exports.$removeTextFromCaretRange = al),
      (exports.$rewindSiblingCaret = sl),
      (exports.$selectAll = function (t) {
        var e = cc();
        if (fi(t)) {
          var _e178 = t.anchor,
            _n141 = t.focus,
            _o106 = _e178.getNode();
          if (Ws(_o106))
            return (
              _e178.set(_o106.getKey(), 0, "element"),
              _n141.set(_o106.getKey(), _o106.getChildrenSize(), "element"),
              vc(t, _o106),
              t
            );
          var _r78 = _o106.getTopLevelElementOrThrow(),
            _i56 = _r78.getParent();
          return null === _i56
            ? (Ls(_r78) &&
                (_e178.set(_r78.getKey(), 0, "element"),
                _n141.set(_r78.getKey(), _r78.getChildrenSize(), "element"),
                vc(t, _r78)),
              t)
            : (_e178.set(_i56.getKey(), 0, "element"),
              _n141.set(_i56.getKey(), _i56.getChildrenSize(), "element"),
              vc(t, _i56),
              t);
        }
        {
          var _t293 = e.select(0, e.getChildrenSize());
          return (uc(vc(_t293, e)), _t293);
        }
      }),
      (exports.$setCompositionKey = Zl),
      (exports.$setDirectionFromDOM = Aa),
      (exports.$setFormatFromDOM = wa),
      (exports.$setPointFromCaret = nl),
      (exports.$setSelection = uc),
      (exports.$setSelectionFromCaretRange = ol),
      (exports.$setSlot = Au),
      (exports.$setState = te),
      (exports.$setTextFormat = function (t, e) {
        var n = [];
        for (var _ref83 of Object.entries(e)) {
          var _t294 = _ref83[0];
          var _o107 = _ref83[1];
          "boolean" == typeof _o107 && n.push([_t294, _o107]);
        }
        0 !== n.length &&
          gi(t, function (t) {
            for (var _ref85 of n) {
              var _e179 = _ref85[0];
              var _o108 = _ref85[1];
              t = Yl(t, _e179, _o108 ? M[_e179] : 0);
            }
            return t;
          });
      }),
      (exports.$splitAtPointCaretNext = pl),
      (exports.$splitNode = function (e, n) {
        var o = e.getChildAtIndex(n);
        (null == o && (o = e), Wc(e) && t(102));
        var _r81 = function r(e) {
            var n = e.getParentOrThrow(),
              i = Wc(n),
              s = e !== o || i ? Uc(e) : e;
            if (i)
              return ((Ls(e) && Ls(s)) || t(133), e.insertAfter(s), [e, s, s]);
            {
              var _r80 = _r81(n),
                _t295 = _r80[0],
                _o109 = _r80[1],
                _i57 = _r80[2],
                _l25 = e.getNextSiblings();
              return (
                _i57.append.apply(_i57, [s].concat(Array.from(_l25))),
                [_t295, _o109, s]
              );
            }
          },
          _r79 = _r81(o),
          i = _r79[0],
          s = _r79[1];
        return [i, s];
      }),
      (exports.$updateDOMSelection = Ji),
      (exports.$updateRangeSelectionFromCaretRange = rl),
      (exports.$withCompactExport = et),
      (exports.ArtificialNode__DO_NOT_USE = _Js),
      (exports.BEFORE_INPUT_COMMAND = Cn),
      (exports.BLUR_COMMAND = fo),
      (exports.CAN_REDO_COMMAND = co),
      (exports.CAN_UNDO_COMMAND = ao),
      (exports.CAN_USE_BEFORE_INPUT = f),
      (exports.CAN_USE_DOM = o),
      (exports.CLEAR_EDITOR_COMMAND = so),
      (exports.CLEAR_HISTORY_COMMAND = lo),
      (exports.CLICK_COMMAND = xn),
      (exports.COLLABORATION_TAG = _r),
      (exports.COMMAND_PRIORITY_BEFORE_CRITICAL = -4),
      (exports.COMMAND_PRIORITY_BEFORE_EDITOR = -8),
      (exports.COMMAND_PRIORITY_BEFORE_HIGH = -5),
      (exports.COMMAND_PRIORITY_BEFORE_LOW = -7),
      (exports.COMMAND_PRIORITY_BEFORE_NORMAL = -6),
      (exports.COMMAND_PRIORITY_CRITICAL = 4),
      (exports.COMMAND_PRIORITY_EDITOR = 0),
      (exports.COMMAND_PRIORITY_HIGH = 3),
      (exports.COMMAND_PRIORITY_LOW = 1),
      (exports.COMMAND_PRIORITY_NORMAL = 2),
      (exports.COMPOSITION_END_COMMAND = vn),
      (exports.COMPOSITION_END_TAG = Cr),
      (exports.COMPOSITION_START_COMMAND = Tn),
      (exports.COMPOSITION_START_TAG = xr),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = On),
      (exports.CONTROL_OR_ALT = po),
      (exports.CONTROL_OR_META = _o),
      (exports.CONTROL_OR_OTHER_KEY = L),
      (exports.COPY_COMMAND = oo),
      (exports.CUT_COMMAND = ro),
      (exports.CUT_TAG = "cut"),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = kl),
      (exports.DELETE_CHARACTER_COMMAND = Nn),
      (exports.DELETE_LINE_COMMAND = wn),
      (exports.DELETE_WORD_COMMAND = An),
      (exports.DRAGEND_COMMAND = no),
      (exports.DRAGOVER_COMMAND = eo),
      (exports.DRAGSTART_COMMAND = to),
      (exports.DROP_COMMAND = Qn),
      (exports.DecoratorNode = _Ks),
      (exports.ElementNode = _Rs4),
      (exports.FOCUS_COMMAND = uo),
      (exports.FORMAT_ELEMENT_COMMAND = Zn),
      (exports.FORMAT_TEXT_COMMAND = Dn),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = gr),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = qn),
      (exports.INPUT_COMMAND = Sn),
      (exports.INSERT_LINE_BREAK_COMMAND = bn),
      (exports.INSERT_PARAGRAPH_COMMAND = kn),
      (exports.INSERT_TAB_COMMAND = Gn),
      (exports.INTERNAL_$expandSelectionToWholeDocument = xi),
      (exports.INTERNAL_$isBlock = xa),
      (exports.IS_ALL_FORMATTING = C),
      (exports.IS_ANDROID = g),
      (exports.IS_ANDROID_CHROME = m),
      (exports.IS_APPLE = c),
      (exports.IS_APPLE_WEBKIT = y),
      (exports.IS_BOLD = 1),
      (exports.IS_CHROME = p),
      (exports.IS_CODE = 16),
      (exports.IS_FIREFOX = a),
      (exports.IS_HIGHLIGHT = 128),
      (exports.IS_IOS = h),
      (exports.IS_ITALIC = 2),
      (exports.IS_SAFARI = _),
      (exports.IS_STRIKETHROUGH = 4),
      (exports.IS_SUBSCRIPT = 32),
      (exports.IS_SUPERSCRIPT = 64),
      (exports.IS_UNDERLINE = 8),
      (exports.KEY_ARROW_DOWN_COMMAND = Wn),
      (exports.KEY_ARROW_LEFT_COMMAND = Kn),
      (exports.KEY_ARROW_RIGHT_COMMAND = Ln),
      (exports.KEY_ARROW_UP_COMMAND = $n),
      (exports.KEY_BACKSPACE_COMMAND = Hn),
      (exports.KEY_DELETE_COMMAND = Jn),
      (exports.KEY_DOWN_COMMAND = Rn),
      (exports.KEY_ENTER_COMMAND = Un),
      (exports.KEY_ESCAPE_COMMAND = Vn),
      (exports.KEY_MODIFIER_COMMAND = ho),
      (exports.KEY_SPACE_COMMAND = jn),
      (exports.KEY_TAB_COMMAND = Yn),
      (exports.LineBreakNode = _Ys),
      (exports.MOVE_TO_END = Bn),
      (exports.MOVE_TO_START = zn),
      (exports.NODE_STATE_DIRECT = qt),
      (exports.NODE_STATE_KEY = R),
      (exports.NODE_STATE_LATEST = Xt),
      (exports.OUTDENT_CONTENT_COMMAND = Xn),
      (exports.PASTE_COMMAND = En),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _xl),
      (exports.REDO_COMMAND = Pn),
      (exports.REMOVE_TEXT_COMMAND = Mn),
      (exports.RootNode = _$s),
      (exports.SELECTION_CHANGE_COMMAND = mn),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = yn),
      (exports.SELECT_ALL_COMMAND = io),
      (exports.SET_TEXT_FORMAT_COMMAND = Fn),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = mr),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = pr),
      (exports.SKIP_SELECTION_FOCUS_TAG = yr),
      (exports.TEXT_TYPE_TO_FORMAT = M),
      (exports.TabNode = _ti),
      (exports.TextNode = _$r2),
      (exports.UNDO_COMMAND = In),
      (exports.addClassNamesToElement = function (t) {
        var _t$classList;
        for (
          var _len16 = arguments.length,
            e = new Array(_len16 > 1 ? _len16 - 1 : 0),
            _key16 = 1;
          _key16 < _len16;
          _key16++
        ) {
          e[_key16 - 1] = arguments[_key16];
        }
        var n = df.apply(void 0, Array.from(e));
        n.length > 0 &&
          (_t$classList = t.classList).add.apply(_t$classList, Array.from(n));
      }),
      (exports.aliasTableOf = Ct),
      (exports.aliasedValue = Vt),
      (exports.arrayValue = function (t) {
        return Nt(
          function (e) {
            if (!Array.isArray(e)) return [];
            var n = new Array(e.length);
            for (var _o110 = 0; _o110 < e.length; _o110++)
              n[_o110] = t(e[_o110]);
            return n;
          },
          { item: t, kind: "array" },
          void 0,
          function (e, n) {
            if (!Array.isArray(e) || !Array.isArray(n) || e.length !== n.length)
              return !1;
            for (var _o111 = 0; _o111 < e.length; _o111++)
              if (!_t(t, e[_o111], n[_o111])) return !1;
            return !0;
          },
          function (t) {
            return Array.isArray(t);
          },
        );
      }),
      (exports.booleanValue = function (t) {
        if (t === void 0) {
          t = !1;
        }
        return Nt(
          function (e) {
            return "boolean" == typeof e ? e : t;
          },
          { kind: "boolean" },
          void 0,
          void 0,
          function (t) {
            return "boolean" == typeof t;
          },
        );
      }),
      (exports.buildImportMap = function (t) {
        return t;
      }),
      (exports.compileKeyboardShortcuts = Co),
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
      (exports.createCommand = pn),
      (exports.createEditor = function (e) {
        var n = e || {},
          o = ms(),
          r = n.theme || {},
          i = void 0 === e ? o : n.parentEditor || null,
          s = n.disableEvents || !1,
          l = js(),
          c = n.namespace || (null !== i ? i._config.namespace : _c()),
          a = n.editorState,
          u = [_$s, _$r2, _Ys, _ti, _xl, _Js].concat(Array.from(n.nodes || [])),
          f = n.onError,
          d = n.onWarn,
          h = n.html,
          g = void 0 === n.editable || n.editable;
        var _;
        if (void 0 === e && null !== o) _ = o._nodes;
        else {
          _ = new Map();
          for (var _e180 = 0; _e180 < u.length; _e180++) {
            var _o112 = u[_e180],
              _r82 = null,
              _i58 = null;
            if (_o112 && "object" == typeof _o112) {
              var _t296 = _o112;
              ((_o112 = _t296.replace),
                (_r82 = _t296["with"]),
                (_i58 = _t296.withKlass || null));
            }
            if (
              "function" != typeof _o112 ||
              !_o112.prototype ||
              !(_o112 === _dr5 || _o112.prototype instanceof _dr5)
            ) {
              var _r83 = "<unknown>";
              try {
                _r83 = JSON.parse(G);
              } catch (_unused2) {}
              t(
                365,
                String(_e180 - u.length + (n.nodes ? n.nodes.length : 0)),
                "function" == typeof _o112
                  ? "" +
                      _o112.name +
                      ("function" == typeof _o112.getType
                        ? " (type " + String(_o112.getType()) + ")"
                        : "")
                  : String(_o112),
                String(_r83),
              );
            }
            nu(_o112);
            var _s33 = _o112.getType(),
              _l26 = bl(_o112);
            _.set(_s33, {
              exportDOM: h && h["export"] ? h["export"].get(_o112) : void 0,
              klass: _o112,
              replace: _r82,
              replaceWithKlass: _i58,
              sharedNodeState: ee(u[_e180]),
              transforms: _l26,
            });
          }
        }
        var p = new _Ml(
          l,
          i,
          _,
          {
            disableEvents: s,
            dom: babelHelpers["extends"]({}, kl, e && e.dom),
            namespace: c,
            theme: r,
          },
          f || console.error,
          d || vl,
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
            (t.registerCommand(Cn, zo, 0),
              t.registerCommand(Sn, Wo, 0),
              t.registerCommand(Tn, jo, 0),
              t.registerCommand(vn, Ho, 0),
              t.registerCommand(Rn, er, 0));
          })(p),
          p
        );
      }),
      (exports.createRefCountedRegistry = So),
      (exports.createSharedNodeState = ee),
      (exports.createState = function (t, e) {
        return new Qt(t, e);
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
      (exports.declaredAccepts = kt),
      (exports.defineExtension = function (t) {
        return t;
      }),
      (exports.enumValue = Ut),
      (exports.findAllLexicalElementsDeep = ta),
      (exports.flipDirection = Ru),
      (exports.getActiveElement = aa),
      (exports.getActiveElementDeep = ua),
      (exports.getComposedEventTarget = fa),
      (exports.getComposedSchemaFields = function (t) {
        var _Ja3 = Ja(t),
          e = _Ja3.fieldsDerivedFirst,
          n = _Ja3.flatStates,
          o = {};
        for (var _t297 of n) _t297.schema && (o[_t297.key] = _t297.schema);
        for (var _ref87 of e) {
          var _t298 = _ref87[0];
          var _n142 = _ref87[1];
          o[_t298] = _n142;
        }
        return o;
      }),
      (exports.getComposedStaticRange = oa),
      (exports.getDOMOwnerDocument = Fc),
      (exports.getDOMSelection = Gc),
      (exports.getDOMSelectionFromTarget = qc),
      (exports.getDOMSelectionPoints = ia),
      (exports.getDOMSelectionRange = ra),
      (exports.getDOMSelectionRangeAndPoints = function (t, e) {
        var _sa;
        var n = oa(t, e);
        if (null === n)
          return {
            points: t,
            range: t.rangeCount > 0 ? t.getRangeAt(0) : null,
          };
        var o =
          (_sa = sa(n)) != null
            ? _sa
            : t.rangeCount > 0
              ? t.getRangeAt(0)
              : null;
        return { points: la(n, ca(t)), range: o };
      }),
      (exports.getDOMShadowRoots = Zc),
      (exports.getDOMTextNode = Jl),
      (exports.getDeclaredSlots = Ou),
      (exports.getEditorPropertyFromDOMNode = Wl),
      (exports.getNearestEditorFromDOMNode = $l),
      (exports.getParentElement = Dc),
      (exports.getRegisteredNode = Pl),
      (exports.getRegisteredNodeOrThrow = Il),
      (exports.getRegisteredSubtypeMap = function (t) {
        var e = new Map(),
          n = new Map();
        for (var _o113 of t) {
          var _nu2 = nu(_o113),
            _t299 = _nu2.ownNodeType;
          _t299 && (n.set(_t299, _o113), e.set(_t299, new Set()));
        }
        for (var _ref89 of n) {
          var _t300 = _ref89[0];
          var _o114 = _ref89[1];
          for (var _ref91 of lu(_o114)) {
            var _n143 = _ref91.ownNodeType;
            {
              var _o115 = _n143 && e.get(_n143);
              _o115 && _o115.add(_t300);
            }
          }
        }
        return e;
      }),
      (exports.getRootOwnerDocument = ea),
      (exports.getStaticNodeConfig = nu),
      (exports.getStyleObjectFromCSS = Ar),
      (exports.getTextDirection = function (t) {
        return O.test(t) ? "rtl" : E.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = bl),
      (exports.getterTableOf = yt),
      (exports.isBlockDomNode = ya),
      (exports.isCurrentlyReadOnlyMode = us),
      (exports.isDOMCapturingSelection = Pa),
      (exports.isDOMDocumentNode = Vl),
      (exports.isDOMNode = ha),
      (exports.isDOMShadowRoot = Xc),
      (exports.isDOMTextNode = Hl),
      (exports.isDOMUnmanaged = Fa),
      (exports.isDocumentFragment = ga),
      (exports.isExactShortcutMatch = function (t, e, n) {
        if (!Sc(t, n)) return !1;
        if (t.key.toLowerCase() === e.toLowerCase()) return !0;
        if (e.length > 1) return !1;
        if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
        if (t.code.startsWith("Digit") && /^\d$/.test(e))
          return t.code === "Digit" + e;
        var o = "Key" + e.toUpperCase();
        return t.code === o;
      }),
      (exports.isHTMLAnchorElement = function (t) {
        return da(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = da),
      (exports.isHTMLTableCellElement = function (t) {
        return da(t) && ("TD" === t.tagName || "TH" === t.tagName);
      }),
      (exports.isHTMLTableRowElement = function (t) {
        return da(t) && "TR" === t.tagName;
      }),
      (exports.isInlineDomNode = pa),
      (exports.isLastChildInBlockNode = Zs),
      (exports.isLexicalEditor = zl),
      (exports.isModifierMatch = Sc),
      (exports.isOnlyChildInBlockNode = Qs),
      (exports.isSchemaField = mt),
      (exports.isSelectionCapturedInDecoratorInput = Bl),
      (exports.isSelectionWithinEditor = Kl),
      (exports.iterStaticNodeConfigChain = lu),
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
      (exports.makeStepwiseIterator = sf),
      (exports.mergeRegister = hf),
      (exports.mountSlotContainer = function (t, e, n, o) {
        var r = t.read("latest", function () {
          var o = ec(e);
          return null !== o
            ? (function (t, e, n) {
                if (n === void 0) {
                  n = Ca();
                }
                var o = Su(t, e);
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
      (exports.nodeSchema = Ht),
      (exports.normalizeClassNames = df),
      (exports.nullable = function (t, e) {
        if (e === void 0) {
          e = {};
        }
        var _e181 = e,
          n = _e181.defaultAsNull;
        return Nt(
          function (e) {
            if (null == e) return null;
            var o = t(e);
            return n && pt(t, o) ? null : o;
          },
          { defaultAsNull: n, inner: t, kind: "nullable" },
          void 0,
          At(t),
          wt(t, function (t) {
            return null == t;
          }),
        );
      }),
      (exports.numberValue = Wt),
      (exports.objectValue = function (t) {
        return (function (t, e) {
          var n = Object.entries(e);
          return Nt(
            function (t) {
              var e = null !== t && "object" == typeof t ? t : {},
                o = {};
              for (var _t301 = 0; _t301 < n.length; _t301++) {
                var _n$_t = n[_t301],
                  _r84 = _n$_t[0],
                  _i59 = _n$_t[1];
                o[_r84] = _i59(e[_r84]);
              }
              return o;
            },
            { fields: e, kind: "object" },
            void 0,
            function (t, o) {
              return (
                Bt(t) &&
                Bt(o) &&
                !Kt(t, e) &&
                !Kt(o, e) &&
                n.every(function (_ref92) {
                  var e = _ref92[0],
                    n = _ref92[1];
                  return _t(n, t[e], o[e]);
                })
              );
            },
            function (t) {
              return Bt(t) && !Kt(t, e);
            },
          );
        })(0, t);
      }),
      (exports.optional = function (t, e) {
        if (e === void 0) {
          e = {};
        }
        var _e182 = e,
          n = _e182.omitDefault;
        return Nt(
          function (e) {
            if (void 0 === e) return;
            var o = t(e);
            return n && pt(t, o) ? void 0 : o;
          },
          { inner: t, kind: "optional", omitDefault: n },
          void 0,
          At(t),
          wt(t, function (t) {
            return void 0 === t;
          }),
        );
      }),
      (exports.rawValue = function () {
        return Nt(
          function (t) {
            return void 0 === t ? void 0 : t;
          },
          { kind: "raw" },
          void 0,
          void 0,
          function () {
            return !0;
          },
        );
      }),
      (exports.registerEventListener = To),
      (exports.registerEventListeners = function (t, e, n) {
        return hf.apply(
          void 0,
          Array.from(
            Object.entries(e).map(function (_ref93) {
              var e = _ref93[0],
                o = _ref93[1];
              return To(t, e, o, n);
            }),
          ),
        );
      }),
      (exports.removeClassNamesFromElement = function (t) {
        var _t$classList2;
        for (
          var _len19 = arguments.length,
            e = new Array(_len19 > 1 ? _len19 - 1 : 0),
            _key19 = 1;
          _key19 < _len19;
          _key19++
        ) {
          e[_key19 - 1] = arguments[_key19];
        }
        var n = df.apply(void 0, Array.from(e));
        n.length > 0 &&
          (_t$classList2 = t.classList).remove.apply(
            _t$classList2,
            Array.from(n),
          );
      }),
      (exports.removeFromParent = Xl),
      (exports.resetRandomKey = function () {
        Fl = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = Dr),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n144 in e) {
          var _o116 = e[_n144];
          null == _o116 ? t.removeProperty(_n144) : wr(t, _n144, _o116);
        }
      }),
      (exports.setDOMUnmanaged = Da),
      (exports.setNodeIndentFromDOM = Ma),
      (exports.setterDefaultOf = St),
      (exports.setterTableOf = xt),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n145 in e)
          if (t[_n145] !== e[_n145]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.stopLexicalPropagation = ir),
      (exports.stringValue = zt),
      (exports.toggleTextFormatType = Yl),
      (exports.tokenizeRawText = Yi),
      (exports.transformValue = function (t, e, n) {
        if (n === void 0) {
          n = {};
        }
        return Nt(
          function (n) {
            return e(t(n));
          },
          { inner: t, kind: "transform" },
          Et(e(t.defaultValue)),
          n.isEqual,
          function (e) {
            return Dt(t, e);
          },
        );
      }),
      (exports.unionValue = function (t) {
        var n =
          0 !== (arguments.length <= 1 ? 0 : arguments.length - 1)
            ? Et(arguments.length <= 1 ? undefined : arguments[1])
            : t[0].defaultValue;
        return Nt(
          function (e) {
            if (void 0 === e) return n;
            var o = (function (e) {
              var n = (function (t, e) {
                return Rt(t, e).member;
              })(t, e);
              return void 0 === n ? void 0 : { member: n, parsed: n(e) };
            })(e);
            return void 0 === o ? n : o.parsed;
          },
          { kind: "union", members: t },
          n,
          jt,
          function (e) {
            return (
              (void 0 !== e || void 0 === n) &&
              t.some(function (t) {
                return Dt(t, e);
              })
            );
          },
        );
      }),
      (exports.unmountSlotContainer = function (t, e, n) {
        n.style.display = "none";
        var o = t.getElementByKey(e);
        null !== o && n.parentElement !== o && o.insertBefore(n, o.firstChild);
      }),
      (exports.withAccessors = Yt),
      (exports.withField = Jt));
  },
  null,
);
