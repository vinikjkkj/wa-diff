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
      return (
        (n.search = o.toString()),
        new Error(
          "Minified Lexical error #" +
            t +
            "; visit " +
            n.toString() +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
        )
      );
    }
    function e(e) {
      for (
        var _len2 = arguments.length,
          n = new Array(_len2 > 1 ? _len2 - 1 : 0),
          _key2 = 1;
        _key2 < _len2;
        _key2++
      ) {
        n[_key2 - 1] = arguments[_key2];
      }
      throw t.apply(void 0, [e].concat(Array.from(n)));
    }
    function n(t) {
      var n = new URL("https://lexical.dev/docs/error"),
        o = new URLSearchParams();
      o.append("code", t);
      for (
        var _len3 = arguments.length,
          e = new Array(_len3 > 1 ? _len3 - 1 : 0),
          _key3 = 1;
        _key3 < _len3;
        _key3++
      ) {
        e[_key3 - 1] = arguments[_key3];
      }
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
    function o() {
      return (
        "undefined" != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement
      );
    }
    var r = o();
    function i() {
      return r && "documentMode" in document ? document.documentMode : null;
    }
    var s = i();
    function l(t) {
      return r && t.test(navigator.platform);
    }
    function c(t) {
      return r && t.test(navigator.userAgent);
    }
    var a = l(/Mac|iPod|iPhone|iPad/),
      u = c(/^(?!.*Seamonkey)(?=.*Firefox).*/i);
    function f() {
      return (
        !(!r || !("InputEvent" in window) || s) &&
        "getTargetRanges" in new window.InputEvent("input")
      );
    }
    var d = f();
    function h() {
      return (
        r &&
        !window.MSStream &&
        (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
          (/Macintosh/.test(navigator.userAgent) &&
            navigator.maxTouchPoints > 1))
      );
    }
    var g = h(),
      _ = c(/Android/),
      p = c(/Version\/[\d.]+.*Safari/) && !_,
      m = c(/^(?=.*Chrome).*/i),
      y = r && _ && m,
      x = c(/AppleWebKit\/[\d.]+/) && a && !m;
    function C() {
      return 2047;
    }
    var S = C(),
      T = p || g || x ? "\xa0" : "\u200b",
      v = "\n\n",
      N = u ? "\xa0" : T,
      k = "\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc",
      b =
        "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
    function O(t, e) {
      return new RegExp("^[^" + t + "]*[" + e + "]");
    }
    var E = O(b, k),
      M = O(k, b),
      A = {
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
      w = { directionless: 1, unmergeable: 2 },
      D = { center: 2, end: 6, justify: 4, left: 1, right: 3, start: 5 };
    function F(t) {
      var e = {};
      for (var _n2 of Object.keys(t)) e[t[_n2]] = _n2;
      return e;
    }
    var I = F(D),
      P = { normal: 0, segmented: 2, token: 1 },
      R = F(P),
      L = "$",
      K = Symbol["for"]("@lexical/ctrlOrOtherKey"),
      B = "$config";
    function z() {
      return Na()._blockCursorElement;
    }
    function $(t) {
      return (
        null !== t && 1 === t.nodeType && t.hasAttribute("data-lexical-slot")
      );
    }
    var W = x || g || p;
    function U() {
      var t = sa().createElement("img");
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
    function j(t) {
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
      _proto.insertChild = function insertChild(t) {
        var n = this.getInsertionAnchor();
        return (
          null !== n && n.parentElement !== this.element && e(357),
          this.element.insertBefore(t, n),
          this
        );
      };
      _proto.removeChild = function removeChild(t) {
        return (
          t.parentElement !== this.element && e(358),
          this.element.removeChild(t),
          this
        );
      };
      _proto.replaceChild = function replaceChild(t, n) {
        return (
          n.parentElement !== this.element && e(359),
          this.element.replaceChild(t, n),
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
        var o = V(t, this.element);
        if (null === o) return "after";
        var r = Array.prototype.indexOf.call(t.childNodes, o);
        if (r < 0) return "after";
        if (e === t) return n <= r ? "before" : "after";
        var i = V(t, e);
        if (null === i) return "after";
        var s = Array.prototype.indexOf.call(t.childNodes, i);
        return s >= 0 && s <= r ? "before" : "after";
      };
      _proto.getInsertionAnchor = function getInsertionAnchor() {
        return this.before;
      };
      return H;
    })();
    function V(t, e) {
      var n = e;
      for (; null !== n && n.parentNode !== t; ) n = n.parentNode;
      return n;
    }
    var _J = (function (_H) {
      function J() {
        return _H.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(J, _H);
      var _proto2 = J.prototype;
      _proto2.withBefore = function withBefore(t) {
        return new J(this.element, t, this.after);
      };
      _proto2.withAfter = function withAfter(t) {
        return new J(this.element, this.before, t);
      };
      _proto2.withElement = function withElement(t) {
        return this.element === t ? this : new J(t, this.before, this.after);
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
        j(e) && ((t = e), (e = e.nextSibling));
        var n = t ? t.nextSibling : this.element.firstChild;
        return null !== n && n === z() ? n : t;
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
            null !== e && e === z() && (e = e.previousSibling));
        return j(e) ? e : null;
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
              U(),
              _t5 ? _t5.nextSibling : this.element.firstChild,
            );
          } else this.element.insertBefore(U(), this.before);
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
            var _t6 = "decorator" === o && W;
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
          r = sa().createElement("br");
        if (
          (r.setAttribute("data-lexical-managed-linebreak", "true"),
          n.insertBefore(r, o),
          t)
        ) {
          var _t7 = sa().createElement("img");
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
            _n5 = z(),
            _r2 = this.element.childNodes,
            _i2 = Math.min(o, _r2.length);
          var _s2 = 0;
          for (var _t8 = _e4; _t8 < _i2; _t8++) _r2[_t8] !== _n5 && _s2++;
          return [t, Math.min(_s2, t.getChildrenSize())];
        }
        var r = Y(e, n);
        r.push(o);
        var i = Y(e, this.element);
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
      return J;
    })(_H2);
    function Y(t, n) {
      var o = [];
      var r = n;
      for (; r !== t && null !== r; r = r.parentNode) {
        var _t0 = 0;
        for (
          var _e6 = r.previousSibling;
          null !== _e6;
          _e6 = _e6.previousSibling
        )
          _t0++;
        o.push(_t0);
      }
      return (r !== t && e(225), o.reverse());
    }
    function G() {
      var t;
      try {
        t = "0.52.0+prod.cjs";
      } catch (_unused) {}
      return t != null ? t : '"<unknown>+source"';
    }
    var q = G();
    var _X = (function () {
      function X() {
        this._front = (function () {
          return new Set();
        })();
        this._back = (function () {
          return new Set();
        })();
      }
      var _proto3 = X.prototype;
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
      return babelHelpers.createClass(X, [
        {
          key: "size",
          get: function get() {
            return this._front.size + this._back.size;
          },
        },
      ]);
    })();
    var Q = null;
    function Z(t, e) {
      if (e === void 0) {
        e = 1e3;
      }
      return t instanceof _tt
        ? t.clone()
        : t.size < e
          ? new Map(t)
          : new _tt().init(new Map(t), void 0, t.size);
    }
    var _tt = (function () {
      function tt() {
        this._mutable = !1;
        this._old = void 0;
        this._nursery = void 0;
        this._size = 0;
      }
      var _proto4 = tt.prototype;
      _proto4.clone = function clone() {
        return (
          (this._mutable = !1),
          new tt().init(this._old, this._nursery, this._size)
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
        return e === Q ? void 0 : e;
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
            _n7 !== Q ? _t1.set(_e8, _n7) : _t1["delete"](_e8);
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
          (n !== Q && void 0 !== n) ||
            (this._size++, n === Q && o["delete"](t)),
          o.set(t, e),
          this
        );
      };
      _proto4["delete"] = function _delete(t) {
        var e = this.has(t);
        return (e && (this.getNursery().set(t, Q), this._size--), e);
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
              _o3 !== Q && (void 0 !== _o3 && (_n8[1] = _o3), yield _n8);
            }
          for (var _n9 of t)
            _n9[1] === Q || (e && e.has(_n9[0])) || (yield _n9);
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
      return babelHelpers.createClass(tt, [
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
    var et = !1;
    function nt(t, n) {
      var r = et;
      var i;
      try {
        ((et = t), (i = n()));
      } finally {
        et = r;
      }
      var s;
      return (
        null === (s = i) ||
          ("object" != typeof s && "function" != typeof s) ||
          "function" != typeof s.then ||
          e(421),
        i
      );
    }
    function ot() {
      return et;
    }
    function rt(t) {
      var n = t.exportJSON(et),
        o = t.constructor;
      return (
        n.type !== o.getType() && e(130, o.name),
        Bs(t) && !Array.isArray(n.children) && e(59, o.name),
        n
      );
    }
    function it(t, e, n, o, r, i) {
      if (Bs(t)) {
        var _s3 = t.getFirstChild();
        for (; null !== _s3; ) {
          var _t12 = _s3.__key;
          (_s3.__parent === e &&
            ((Bs(_s3) || (mu(_s3) && null !== _s3.__slots)) &&
              it(_s3, _t12, n, o, r, i),
            n.has(_t12) || i["delete"](_t12),
            r.push(_t12)),
            (_s3 = _s3.getNextSibling()));
        }
      }
      for (var _s4 of mu(t) && null !== t.__slots ? t.__slots.values() : []) {
        var _t13 = o.get(_s4);
        void 0 !== _t13 &&
          yu(_t13) &&
          _t13.__slotHost === e &&
          ((Bs(_t13) || (mu(_t13) && null !== _t13.__slots)) &&
            it(_t13, _s4, n, o, r, i),
          n.has(_s4) || i["delete"](_s4),
          r.push(_s4));
      }
    }
    var st = !1,
      lt = 0;
    function ct(t) {
      lt = t.timeStamp;
    }
    function at(t, e, n) {
      var o = "BR" === t.nodeName,
        r = e.__lexicalLineBreak;
      return (
        (r && (t === r || (o && t.previousSibling === r))) ||
        (o && void 0 !== sc(t, n))
      );
    }
    function ut(t, e, n) {
      var o = Zc(Wc(n)),
        r = o && aa(o, n._rootElement);
      var i = null,
        s = null;
      null !== r &&
        r.anchorNode === t &&
        ((i = r.anchorOffset), (s = r.focusOffset));
      var l = t.nodeValue;
      null !== l && Cc(e, l, i, s, !1);
    }
    function ft(t, e, n) {
      if (di(t)) {
        var _e1 = t.anchor.getNode();
        if (_e1.is(n) && t.format !== _e1.getFormat()) return !1;
      }
      return Jl(e) && n.isAttached();
    }
    function dt(t, e, n) {
      for (var _o4 = t; _o4 && !La(_o4); _o4 = Ic(_o4)) {
        var _t14 = sc(_o4, e);
        if (void 0 !== _t14) {
          var _e10 = oc(_t14, n);
          if (_e10) return Ws(_e10) || !pa(_o4) ? void 0 : [_o4, _e10];
        }
      }
    }
    function ht(t, e, n) {
      st = !0;
      var o = performance.now() - lt > 100;
      try {
        ws(t, function () {
          var r =
              Ki() ||
              (function (t) {
                return t.read("latest", function () {
                  var t = Ki();
                  return null !== t ? t.clone() : null;
                });
              })(t),
            i = new Map(),
            s = t._editorState,
            l = t._blockCursorElement;
          var c = !1,
            a = "";
          for (var _n1 = 0; _n1 < e.length; _n1++) {
            var _f2 = e[_n1],
              _d = _f2.type,
              _h = _f2.target,
              _g = dt(_h, t, s);
            if (!_g) continue;
            var _2 = _g[0],
              _p = _g[1];
            if ("characterData" === _d)
              o && Qr(_p) && Jl(_h) && ft(r, _h, _p) && ut(_h, _p, t);
            else if ("childList" === _d) {
              c = !0;
              var _e11 = _f2.addedNodes;
              for (var _n10 = 0; _n10 < _e11.length; _n10++) {
                var _o5 = _e11[_n10],
                  _r3 = rc(_o5),
                  _i3 = _o5.parentNode;
                if (
                  !(
                    null == _i3 ||
                    _o5 === l ||
                    null !== _r3 ||
                    at(_o5, _i3, t) ||
                    j(_o5) ||
                    (t._slotsUsed &&
                      pa(_o5) &&
                      _o5.hasAttribute("data-lexical-slot")) ||
                    La(_o5)
                  )
                ) {
                  if (u) {
                    var _t15 =
                      (pa(_o5) ? _o5.innerText : null) || _o5.nodeValue;
                    _t15 && (a += _t15);
                  }
                  _i3.removeChild(_o5);
                }
              }
              var _n11 = _f2.removedNodes,
                _o6 = _n11.length;
              if (_o6 > 0) {
                var _e12 = 0;
                for (var _r4 = 0; _r4 < _o6; _r4++) {
                  var _o7 = _n11[_r4];
                  at(_o7, _h, t) || l === _o7
                    ? (_h.appendChild(_o7), _e12++)
                    : j(_o7) && _e12++;
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
                  at(_n14, _r5, t) ||
                  _i4.removeChild(_n14);
              }
            }
            n.takeRecords();
          }
          null !== r && (c && dc(r), u && wc(t) && r.insertRawText(a));
        });
      } finally {
        st = !1;
      }
    }
    function gt(t) {
      var e = t._observer;
      null !== e && ht(t, e.takeRecords(), e);
    }
    function _t(t) {
      (!(function (t) {
        0 === lt && Wc(t).addEventListener("textInput", ct, !0);
      })(t),
        (t._observer = new MutationObserver(function (e, n) {
          ht(t, e, n);
        })));
    }
    function pt(t, e, n) {
      var o = t.isEqual;
      return e === n || (void 0 !== o && o(e, n));
    }
    function mt(t, e) {
      return pt(t, e, t.defaultValue);
    }
    function yt(t) {
      return "object" == typeof t && null !== t;
    }
    function xt(t, n) {
      var o = Nt(t, n).getter;
      return (
        (yt(o) && void 0 !== o.getterTable) || e(405, n),
        vt(o.getterTable)
      );
    }
    function Ct(t, n) {
      var o = Nt(t, n).setter;
      return (
        (yt(o) && void 0 !== o.setterTable) || e(406, n),
        vt(o.setterTable)
      );
    }
    function St(t, n, o) {
      var _Nt = Nt(t, n),
        r = _Nt.meta;
      for (var _t16 = 0; ; )
        if ("aliased" === r.kind) {
          if (_t16 === o) return vt(r.aliases);
          (_t16++, (r = r.inner.meta));
        } else
          "nullable" === r.kind || "optional" === r.kind
            ? (r = r.inner.meta)
            : "array" === r.kind
              ? (r = r.item.meta)
              : e(407, n, String(o));
    }
    function Tt(t, n) {
      var o = Nt(t, n),
        r = o.setter;
      (yt(r) && void 0 !== r.setterTable) || e(408, n);
      var i = String(o.defaultValue);
      return (Kt(r.setterTable, i) || e(409, n, i), r.setterTable[i]);
    }
    function vt(t) {
      return Object.assign(Object.create(null), t);
    }
    function Nt(t, n) {
      var o = t.get(n);
      return (void 0 === o && e(410, n), o);
    }
    function kt(t, e, n, o, r) {
      void 0 !== r && bt.add(r);
      var i = void 0 === n,
        s = i ? t(void 0) : n;
      return (
        i && At(s),
        Object.assign(t, { accepts: r, defaultValue: s, isEqual: o, meta: e })
      );
    }
    var bt = new WeakSet();
    function Ot(t) {
      var e = t.accepts;
      return void 0 === e || bt.has(e) ? void 0 : e;
    }
    var Et = new WeakSet();
    function Mt(t) {
      return (null !== t && "object" == typeof t && Et.add(t), t);
    }
    function At(t) {
      if (
        null !== t &&
        "object" == typeof t &&
        !Object.isFrozen(t) &&
        !Et.has(t)
      ) {
        Object.freeze(t);
        for (var _e16 of Object.values(t)) At(_e16);
      }
    }
    function wt(t) {
      var e = t.isEqual;
      return void 0 === e
        ? void 0
        : function (t, n) {
            return null == t || null == n ? t === n : e(t, n);
          };
    }
    function Dt(t, e) {
      return function (n) {
        return e(n) || Ft(t, n);
      };
    }
    function Ft(t, e) {
      var n = t.accepts;
      return void 0 !== n
        ? n.call(t, e)
        : void 0 !==
            (function (t, e) {
              var n = t.accepts;
              if (void 0 !== n) return Ft(t, e) ? { parsed: t(e) } : void 0;
              var o = t(e);
              return mt(t, o) && e !== t.defaultValue ? void 0 : { parsed: o };
            })(t, e);
    }
    var It = new WeakMap();
    function Pt(t) {
      var e = It.get(t);
      if (void 0 !== e) return e;
      var n = (function (t) {
        var e = t.meta;
        if (null == e) return !1;
        if (void 0 !== Ot(t)) return !1;
        switch (e.kind) {
          case "raw":
            return !0;
          case "union":
            return (
              null != e.members &&
              e.members.length > 0 &&
              e.members.every(function (t) {
                return Pt(t);
              })
            );
          case "nullable":
          case "optional":
          case "transform":
          case "aliased":
            return null != e.inner && Pt(e.inner);
          default:
            return !1;
        }
      })(t);
      return (It.set(t, n), n);
    }
    function Rt(t, e) {
      var n = t.meta;
      if (null == n) return Ft(t, e) ? 1 : 4;
      var o = Ot(t),
        r = void 0 !== o;
      if (r && !o.call(t, e)) return 4;
      var i = (function (t, e, n, o) {
        switch (e.kind) {
          case "raw":
            return o ? 1 : 2;
          case "array": {
            if (!Array.isArray(n)) return 4;
            if (null == e.item) return 1;
            var _t17 = 1;
            for (var _o9 = 0; _o9 < n.length; _o9++)
              if (void 0 !== n[_o9]) {
                var _r6 = Rt(e.item, n[_o9]);
                _r6 > _t17 && (_t17 = _r6);
              }
            return _t17 >= 3 ? 3 : _t17;
          }
          case "object": {
            var _t18 = e.fields;
            if (!Bt(n)) return 4;
            if (null == _t18) return 1;
            if (!o && zt(n, _t18)) return 4;
            var _r7 = 1;
            for (var _e17 of Object.keys(n))
              if (Kt(_t18, _e17)) {
                var _o0 = Rt(_t18[_e17], n[_e17]);
                _o0 > _r7 && (_r7 = _o0);
              }
            return _r7 >= 3 ? 3 : _r7;
          }
          case "union":
            return null == e.members ? 1 : Lt(e.members, n).fit;
          case "aliased":
          case "nullable":
          case "optional":
          case "transform":
            return ("aliased" === e.kind
              ? "string" == typeof n && null != e.aliases && Kt(e.aliases, n)
              : "nullable" === e.kind
                ? null == n
                : "optional" === e.kind && void 0 === n) || null == e.inner
              ? 1
              : Rt(e.inner, n);
          default:
            return o || Ft(t, n) ? 1 : 4;
        }
      })(t, n, e, r);
      return r && 4 === i ? 3 : i;
    }
    function Lt(t, e) {
      var n,
        o = 4,
        r = 4;
      for (var _i5 = 0; _i5 < t.length; _i5++) {
        var _s5 = t[_i5],
          _l2 = Rt(_s5, e),
          _c2 = _l2 < 3 && Pt(_s5) ? 3 : _l2;
        if (_c2 < o && ((n = _s5), (o = _c2), (r = _l2), 1 === _c2)) break;
      }
      return { fit: r, member: n };
    }
    function Kt(t, e) {
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
    function zt(t, e) {
      for (var _n15 of Object.keys(t)) if (!Kt(e, _n15)) return !0;
      return !1;
    }
    function $t(t) {
      if (t === void 0) {
        t = "";
      }
      return kt(
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
    var Wt = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
    function Ut(t, e) {
      if (t === void 0) {
        t = 0;
      }
      if (e === void 0) {
        e = {};
      }
      var _e18 = e,
        n = _e18.integer,
        o = _e18.clamp,
        r = n && void 0 !== e.min ? Math.ceil(e.min) : e.min,
        i = n && void 0 !== e.max ? Math.floor(e.max) : e.max,
        s = function s(t) {
          return "string" == typeof t && Wt.test(t) ? Number(t) : t;
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
      return kt(
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
    function jt(t) {
      var n = Mt(
          0 !== (arguments.length <= 1 ? 0 : arguments.length - 1)
            ? arguments.length <= 1
              ? undefined
              : arguments[1]
            : t[0],
        ),
        o = new Set(t);
      return kt(
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
    function Ht(t, e) {
      if (t === e) return !0;
      if (Array.isArray(t) || Array.isArray(e)) {
        if (!Array.isArray(t) || !Array.isArray(e) || t.length !== e.length)
          return !1;
        for (var _n16 = 0; _n16 < t.length; _n16++)
          if (!Ht(t[_n16], e[_n16])) return !1;
        return !0;
      }
      if (!Bt(t) || !Bt(e)) return !1;
      var n = Object.keys(t);
      return (
        n.length === Object.keys(e).length &&
        n.every(function (n) {
          return Kt(e, n) && Ht(t[n], e[n]);
        })
      );
    }
    function Vt() {
      return function (t) {
        return (function (t) {
          return { meta: { fields: t, kind: "node" } };
        })(t);
      };
    }
    function Jt(t, e) {
      var n = function n(t) {
        return "string" == typeof t && Kt(e, t);
      };
      return kt(
        function (o) {
          return n(o) ? e[o] : t(o);
        },
        { aliases: e, inner: t, kind: "aliased" },
        t.defaultValue,
        t.isEqual,
        function (e) {
          return n(e) || Ft(t, e);
        },
      );
    }
    function Yt(t, e) {
      return qt(0, t, {
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
    function Gt(t, e) {
      return qt(0, t, e);
    }
    function qt(t, e, n) {
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
    var Xt = "direct",
      Qt = "latest";
    var Zt = function Zt(t, e) {
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
        (this.unparse = (e.unparse || ce).bind(e)),
        (this.isEqual = e.isEqual
          ? e.isEqual.bind(e)
          : void 0 !== n && void 0 !== n.isEqual
            ? function (t, e) {
                return pt(n, t, e);
              }
            : Object.is),
        (this.defaultValue =
          void 0 !== n ? n.defaultValue : this.parse(void 0)),
        (this.resetOnCopyNode = e.resetOnCopyNode || !1));
    };
    function te(t, e, n) {
      if (n === void 0) {
        n = Qt;
      }
      var o = (n === Qt ? t.getLatest() : t).__state;
      return o ? o.getValue(e) : e.defaultValue;
    }
    function ee(t, e, n) {
      var o;
      if ((ds(), "function" == typeof n)) {
        var _r8 = t.getLatest(),
          _i6 = te(_r8, e);
        if (((o = n(_i6)), e.isEqual(_i6, o))) return _r8;
      } else o = n;
      var r = t.getWritable();
      return (ie(r).updateFromKnown(e, o), r);
    }
    function ne(t) {
      var e = new Map(),
        n = new Set();
      for (var _ref0 of fu("function" == typeof t ? t : t.replace)) {
        var _o1 = _ref0.ownNodeConfig;
        if (_o1 && _o1.stateConfigs)
          for (var _t19 of _o1.stateConfigs) {
            var _o10 = void 0;
            ("stateConfig" in _t19
              ? ((_o10 = _t19.stateConfig), _t19.flat && n.add(_o10.key))
              : (_o10 = _t19),
              e.set(_o10.key, _o10));
          }
      }
      return { flatKeys: n, sharedConfigMap: e };
    }
    var oe = new Set(["__proto__", "constructor", "prototype"]);
    var _re = (function () {
      function re(t, e, n, o, r) {
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
                      var _e19 = t.get(_r9);
                      (_e19 && n.has(_e19)) || o++;
                    }
                  return o;
                })(i, n, o);
        this.size = s;
      }
      var _proto5 = re.prototype;
      _proto5.getValue = function getValue(t) {
        var e = this.knownState.get(t);
        if (void 0 !== e) return e;
        this.sharedNodeState.sharedConfigMap.set(t.key, t);
        var n = t.defaultValue;
        if (this.unknownState && t.key in this.unknownState) {
          var _e20 = this.unknownState[t.key];
          (void 0 !== _e20 && (n = t.parse(_e20)), this.updateFromKnown(t, n));
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
          var _e21 = _ref10[0];
          var _n17 = _ref10[1];
          _e21.isEqual(_n17, _e21.defaultValue)
            ? delete t[_e21.key]
            : (t[_e21.key] = _e21.unparse(_n17));
        }
        for (var _n18 of this.sharedNodeState.flatKeys)
          _n18 in t && ((e[_n18] = t[_n18]), delete t[_n18]);
        return (le(t) && (e[L] = t), e);
      };
      _proto5.getWritable = function getWritable(t) {
        if (this.node === t) return this;
        var e = this.sharedNodeState,
          n = this.unknownState,
          o = new Map(this.knownState);
        return new re(
          t,
          e,
          (function (t, e, n) {
            var o;
            if (n)
              for (var _ref12 of Object.entries(n)) {
                var _r0 = _ref12[0];
                var _i7 = _ref12[1];
                {
                  if (oe.has(_r0)) continue;
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
        for (var _t20 of this.knownState.keys())
          _t20.resetOnCopyNode && this.knownState.set(_t20, _t20.defaultValue);
        return this;
      };
      _proto5.updateFromKnown = function updateFromKnown(t, e) {
        var n = t.key;
        this.sharedNodeState.sharedConfigMap.set(n, t);
        var o = this.knownState,
          r = this.unknownState;
        (o.has(t) ||
          (r && n in r) ||
          (r && (delete r[n], (this.unknownState = le(r))), this.size++),
          o.set(t, e));
      };
      _proto5.updateFromUnknown = function updateFromUnknown(t, e) {
        if (oe.has(t)) return;
        var n = this.sharedNodeState.sharedConfigMap.get(t);
        n
          ? this.updateFromKnown(n, n.parse(e))
          : ((this.unknownState = this.unknownState || {}),
            t in this.unknownState || this.size++,
            (this.unknownState[t] = e));
      };
      _proto5.updateFromJSON = function updateFromJSON(t) {
        var e = this.knownState;
        for (var _t21 of e.keys()) e.set(_t21, _t21.defaultValue);
        if (((this.size = e.size), (this.unknownState = void 0), t))
          for (var _ref14 of Object.entries(t)) {
            var _e22 = _ref14[0];
            var _n20 = _ref14[1];
            this.updateFromUnknown(_e22, _n20);
          }
      };
      return re;
    })();
    function ie(t) {
      var e = t.getWritable(),
        n = e.__state
          ? e.__state.getWritable(e)
          : new _re(
              e,
              (function (t) {
                return t.__state
                  ? t.__state.sharedNodeState
                  : Rl(Na(), t.getType()).sharedNodeState;
              })(e),
            );
      return ((e.__state = n), n);
    }
    function se(t, e) {
      var n = t.getWritable(),
        o = e[L];
      return ((n.__state || o) && ie(t).updateFromJSON(o), n);
    }
    function le(t) {
      if (t) for (var _e23 in t) return t;
    }
    function ce(t) {
      return t;
    }
    function ae(t, e, n) {
      for (var _ref16 of e.knownState) {
        var _o11 = _ref16[0];
        var _r1 = _ref16[1];
        {
          if (t.has(_o11.key)) continue;
          t.add(_o11.key);
          var _e24 = n ? n.getValue(_o11) : _o11.defaultValue;
          if (_e24 !== _r1 && !_o11.isEqual(_e24, _r1)) return !0;
        }
      }
      return !1;
    }
    function ue(t, e, n) {
      var o = e.unknownState,
        r = n ? n.unknownState : void 0;
      if (o)
        for (var _ref18 of Object.entries(o)) {
          var _e25 = _ref18[0];
          var _n21 = _ref18[1];
          if (!t.has(_e25) && (t.add(_e25), _n21 !== (r ? r[_e25] : void 0)))
            return !0;
        }
      return !1;
    }
    function fe(t, e) {
      var n = t.__state;
      return n && n.node === t ? n.getWritable(e) : n;
    }
    function de(t, e) {
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
              (t && ae(n, t, e)) ||
              (e && ae(n, e, t)) ||
              (t && ue(n, t, e)) ||
              (e && ue(n, e, t))
            );
          })(c, a))
      );
    }
    function he(t, e) {
      var n = t.mergeWithSibling(e),
        o = _s()._normalizedNodes;
      return (o.add(t.__key), o.add(e.__key), n);
    }
    function ge(t) {
      var e,
        n,
        o = t;
      if ("" !== o.__text || !o.isSimpleText() || o.isUnmergeable()) {
        for (
          ;
          null !== (e = o.getPreviousSibling()) &&
          Qr(e) &&
          e.isSimpleText() &&
          !e.isUnmergeable();
        ) {
          if ("" !== e.__text) {
            if (de(e, o)) {
              o = he(e, o);
              break;
            }
            break;
          }
          e.remove();
        }
        for (
          ;
          null !== (n = o.getNextSibling()) &&
          Qr(n) &&
          n.isSimpleText() &&
          !n.isUnmergeable();
        ) {
          if ("" !== n.__text) {
            if (de(o, n)) {
              o = he(o, n);
              break;
            }
            break;
          }
          n.remove();
        }
      } else o.remove();
    }
    function _e(t) {
      return (pe(t.anchor), pe(t.focus), t);
    }
    function pe(t) {
      for (; "element" === t.type; ) {
        var _e26 = t.getNode(),
          _n22 = t.offset;
        var _o12 = void 0,
          _r10 = void 0;
        if (
          (_n22 === _e26.getChildrenSize()
            ? ((_o12 = _e26.getChildAtIndex(_n22 - 1)), (_r10 = !0))
            : ((_o12 = _e26.getChildAtIndex(_n22)), (_r10 = !1)),
          Qr(_o12))
        ) {
          t.set(_o12.__key, _r10 ? _o12.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!Bs(_o12)) break;
        t.set(_o12.__key, _r10 ? _o12.getChildrenSize() : 0, "element", !0);
      }
    }
    var me = Symbol["for"]("@lexical/CachedTextSize");
    function ye(t, n) {
      return Pe.read(
        function () {
          var o = 0,
            r = t;
          for (var _t22 = 0; _t22 < n && null !== r; _t22++) {
            var _i8 = Ie.get(r);
            if ((void 0 === _i8 && e(345, r), Bs(_i8))) {
              var _s6 = Re.get(r);
              if (void 0 !== _s6 && Bs(_s6) && _s6.__parent !== _i8.__parent)
                o += _i8.getTextContentSize();
              else {
                var _t23 = Le.get(r),
                  _n23 = _t23 && _t23.__lexicalTextContent;
                ("string" != typeof _n23 && e(346, _i8.getType()),
                  (o += _n23.length));
              }
              _t22 < n - 1 && !_i8.isInline() && (o += 2);
            } else {
              var _t24 = _i8[me];
              (void 0 === _t24 && e(347, _i8.getType(), r), (o += _t24));
            }
            r = _i8.__next;
          }
          return o;
        },
        { editor: Te },
      );
    }
    function xe(t) {
      Bs(t) ||
        (void 0 === t[me] &&
          (t[me] = Qr(t) ? t.__text.length : t.getTextContentSize()));
    }
    var Ce = 4;
    var Se,
      Te,
      ve,
      Ne = "",
      ke = null,
      be = null,
      Oe = null;
    function Ee() {
      return { firstTextKey: Oe, format: ke, style: be };
    }
    function Me(t) {
      null !== t.firstTextKey &&
        ((ke = t.format), (be = t.style), (Oe = t.firstTextKey));
    }
    function Ae(t) {
      if (null !== Oe) return;
      var n = t.__lexicalFirstTextKey;
      if ((void 0 === n && e(348), null === n)) return;
      var o = Re.get(n);
      Qr(o) && ((ke = o.getFormat()), (be = o.getStyle()), (Oe = n));
    }
    var we,
      De,
      Fe,
      Ie,
      Pe,
      Re,
      Le,
      Ke,
      Be,
      ze,
      $e = !1,
      We = !1;
    function Ue(t, e) {
      var n = Ie.get(t),
        o = Re.has(t);
      if (null !== e) {
        var _n24 = _n(t);
        _n24.parentNode === e && e.removeChild(_n24);
      }
      if (!o) {
        if ((Te._keyToDOMMap["delete"](t), Bs(n))) {
          var _t25 = gu(n, Ie);
          je(_t25, 0, _t25.length - 1, null);
        }
        if (void 0 !== n) {
          for (var _t26 of Ze(n).values()) {
            var _e27 = en(_t26);
            (Ue(_t26, null), null !== _e27 && _e27.remove());
          }
          Ec(Be, ve, we, n, "destroyed");
        }
      }
    }
    function je(t, e, n, o) {
      for (var _r11 = e; _r11 <= n; ++_r11) {
        var _e28 = t[_r11];
        void 0 !== _e28 && Ue(_e28, o);
      }
    }
    function He(t, e) {
      t.setProperty("text-align", e);
    }
    var Ve = "40px";
    function Je(t, e) {
      var n = Se.theme.indent;
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
          : "calc(" + e + " * var(--lexical-indent-base-value, " + Ve + "))",
      ),
        bc(t, "class"),
        bc(t, "style"));
    }
    function Ye(t, e) {
      var n = t.style;
      (0 === e
        ? He(n, "")
        : 1 === e
          ? He(n, "left")
          : 2 === e
            ? He(n, "center")
            : 3 === e
              ? He(n, "right")
              : 4 === e
                ? He(n, "justify")
                : 5 === e
                  ? He(n, "start")
                  : 6 === e && He(n, "end"),
        bc(t, "style"));
    }
    function Ge(t, e) {
      var n = (function (t) {
        var e = t.__dir;
        if (null !== e) return e;
        if (js(t)) return null;
        var n = t.getParent();
        return null === n || (Vc(n) && null === n.__dir) ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function qe(t) {
      var e = sa().createElement("div");
      return (
        e.setAttribute("data-lexical-slot", t),
        (e.style.display = "none"),
        e
      );
    }
    function Xe(t, e, n) {
      e || "false" === t.contentEditable
        ? Ka(n, Te)
        : n.removeAttribute("contenteditable");
    }
    function Qe(t, e, n) {
      var o = Ne,
        r = Ee();
      Ne = "";
      var i = "";
      var s = Ws(t);
      for (var _ref20 of n) {
        var _o14 = _ref20[0];
        var _r12 = _ref20[1];
        {
          var _n25 = qe(_o14);
          (Xe(e, s, _n25), e.appendChild(_n25), (Ne = ""));
          var _l3 = Ee();
          (on(_r12, ba(t, _n25, Te)), Me(_l3), tn(t, _o14, e, _n25), (i += Ne));
        }
      }
      return (Me(r), (Ne = o), i);
    }
    function Ze(t) {
      return mu(t) && null !== t.__slots ? t.__slots : pu;
    }
    function tn(t, e, n, o) {
      var r = ze.$getSlotTargetElement(t, e, n, Te);
      null !== r &&
        (o.parentElement !== r && r.appendChild(o), (o.style.display = ""));
    }
    function en(t) {
      var e = Le.get(t);
      return void 0 !== e ? e.parentElement : null;
    }
    function nn(t, e, n) {
      var o = Ze(t),
        r = Ze(e);
      for (var _ref22 of o) {
        var _t27 = _ref22[0];
        var _e29 = _ref22[1];
        if (!r.has(_t27)) {
          var _t28 = en(_e29);
          (Ue(_e29, null), null !== _t28 && _t28.remove());
        }
      }
      var i = Ne,
        s = Ee();
      var l = "",
        c = null;
      var a = Ws(e);
      for (var _ref24 of r) {
        var _t29 = _ref24[0];
        var _i9 = _ref24[1];
        {
          var _r13 = o.get(_t29);
          var _s7 = void 0 !== _r13 ? en(_r13) : null;
          Ne = "";
          var _u2 = Ee();
          if (null === _s7) {
            _s7 = qe(_t29);
            var _o15 = null;
            for (var _t30 of n.children)
              if (!_t30.hasAttribute("data-lexical-slot")) {
                _o15 = _t30;
                break;
              }
            (n.insertBefore(_s7, _o15), on(_i9, ba(e, _s7, Te)));
          } else
            _r13 === _i9
              ? un(_i9, _s7)
              : (void 0 !== _r13 && Ue(_r13, _s7), on(_i9, ba(e, _s7, Te)));
          if (
            (Me(_u2),
            Xe(n, a, _s7),
            tn(e, _t29, n, _s7),
            (l += Ne),
            _s7.parentElement === n)
          ) {
            var _t31 = null === c ? n.firstChild : c.nextSibling;
            (_t31 !== _s7 && n.insertBefore(_s7, _t31), (c = _s7));
          }
        }
      }
      return (Me(s), (Ne = i), l);
    }
    function on(t, n) {
      var o = Re.get(t);
      if ((void 0 === o && e(60), null !== n)) {
        var _e30 = Ie.get(t);
        if (void 0 !== _e30) {
          var _r14 = Le.get(t);
          if (void 0 !== _r14) {
            var _i0 = yu(_e30) ? _e30.__slotHost : null,
              _s8 = yu(o) ? o.__slotHost : null,
              _l4 = _e30.__parent !== o.__parent || _i0 !== _s8,
              _c3 = null !== _s8 && _r14.parentElement !== n.element;
            if (_l4 || _c3) return (n.insertChild(_r14), un(t, n.element));
          }
        }
      }
      var r = ze.$createDOM(o, Te);
      if (
        ((function (t, e, n) {
          var o = n._keyToDOMMap;
          (ic(e, n, t), o.set(t, e));
        })(t, r, Te),
        Qr(o)
          ? r.setAttribute("data-lexical-text", "true")
          : Ws(o) &&
            (r.setAttribute("data-lexical-decorator", "true"),
            Ra(r, { captureSelection: !0 })),
        Bs(o))
      ) {
        var _t32 = o.__indent,
          _e31 = o.__size;
        (Ge(r, o), 0 !== _t32 && Je(r, _t32));
        var _n26 = Ze(o),
          _i1 = _n26.size > 0 ? Qe(o, r, _n26) : "";
        if (0 === _e31)
          ((r.__lexicalTextContent = _i1),
            (r.__lexicalFirstTextKey = null),
            (Ne += _i1),
            _n26.size > 0 && (r.__lexicalSlotTextLength = _i1.length));
        else {
          var _t33 = Ne,
            _s9 = _e31 - 1;
          if ((rn(gu(o, Re), o, 0, _s9, ba(o, r, Te)), "" !== _i1)) {
            var _e32 = r.__lexicalTextContent || "";
            ((r.__lexicalTextContent = _i1 + _e32), (Ne = _t33 + _i1 + _e32));
          }
          _n26.size > 0 && (r.__lexicalSlotTextLength = _i1.length);
        }
        var _s0 = o.__format;
        (0 !== _s0 && Ye(r, _s0), o.isInline() || (cn(0, o, r), ln(o, r)));
      } else {
        var _e33 = o.getTextContent();
        if (Ws(o)) {
          var _e34 = o.decorate(Te, Se);
          (null !== _e34 && fn(t, _e34), (r.contentEditable = "false"));
          var _n27 = Ze(o);
          _n27.size > 0 && Qe(o, r, _n27);
        }
        Ne += _e33;
      }
      return (
        null !== n && n.insertChild(r),
        ze.$decorateDOM(o, null, r, Te),
        xe(o),
        Ec(Be, ve, we, o, "created"),
        r
      );
    }
    function rn(t, n, o, r, i) {
      var s = Ne,
        l = Ee();
      ((Ne = ""), (ke = null), (be = null), (Oe = null));
      var c = o;
      for (; c <= r; ++c) {
        var _e35 = Ee();
        on(t[c], i);
        var _n28 = Re.get(t[c]);
        (null !== _n28 && Qr(_n28)
          ? null === ke &&
            ((ke = _n28.getFormat()), (be = _n28.getStyle()), (Oe = _n28.__key))
          : Bs(_n28) && c < r && !_n28.isInline() && (Ne += v),
          Me(_e35));
      }
      var a = Te._keyToDOMMap.get(n.__key);
      (void 0 === a && e(349, n.__key),
        (a.__lexicalTextContent = Ne),
        (a.__lexicalFirstTextKey = Oe),
        (Ne = s + Ne),
        Me(l));
    }
    function sn(t, e) {
      if (!t) return !1;
      var n = e.get(t);
      return Ws(n) && !n.isInline();
    }
    function ln(t, e) {
      var n = ba(t, e, Te);
      (n.setDecoratorBoundaryAnchor("leading", sn(t.__first, Re)),
        n.setDecoratorBoundaryAnchor("trailing", sn(t.__last, Re)));
    }
    function cn(t, e, n) {
      var o = ba(e, n, Te),
        r = (function (t, e) {
          if (t) {
            var _n29 = t.__last;
            if (_n29) {
              var _t34 = e.get(_n29);
              if (_t34)
                return Zs(_t34)
                  ? "line-break"
                  : Ws(_t34) && _t34.isInline()
                    ? "decorator"
                    : null;
            }
            return "empty";
          }
          return null;
        })(e, Re);
      o.setManagedLineBreak(r);
    }
    function an(t, e, n) {
      var o = e.__lexicalFirstTextKey;
      if (null != o) {
        var _e36 = t.__key;
        var _r15 = o;
        for (; null !== _r15; ) {
          var _t35 = Re.get(_r15);
          if (void 0 === _t35) {
            _r15 = null;
            break;
          }
          if (_t35.__parent === _e36) break;
          _r15 = _t35.__parent;
        }
        if (null !== _r15 && !n.has(_r15)) {
          var _t36 = Re.get(o);
          if (Qr(_t36))
            return ((ke = _t36.getFormat()), void (be = _t36.getStyle()));
        }
      }
      e.__lexicalFirstTextKey = Oe;
    }
    function un(t, n) {
      var o = Ie.get(t);
      var r = Re.get(t);
      (void 0 !== o && void 0 !== r) || e(61);
      var i = $e || Fe.has(t) || De.has(t),
        s = Fc(Te, t);
      if (o === r && !i) {
        var _t37;
        if (Bs(o)) {
          var _n30 = s.__lexicalTextContent;
          ("string" != typeof _n30 && e(355, o.getType()),
            (_t37 = _n30),
            Ae(s));
        } else _t37 = o.getTextContent();
        return ((Ne += _t37), s);
      }
      if (
        (o !== r && i && Ec(Be, ve, we, r, "updated"),
        ze.$updateDOM(r, o, s, Te))
      ) {
        var _o16 = on(t, null);
        return (
          null === n && e(62),
          n.replaceChild(_o16, s),
          Ue(t, null),
          _o16
        );
      }
      if (Bs(o)) {
        Bs(r) || e(334, t);
        var _n31 = r.__indent;
        ($e || _n31 !== o.__indent) && Je(s, _n31);
        var _l5 = r.__format;
        ($e || _l5 !== o.__format) && Ye(s, _l5);
        var _c4 = i && (Ze(r).size > 0 || Ze(o).size > 0) ? nn(o, r, s) : "";
        if (i) {
          var _t38 = Ne;
          if (
            ((function (t, n, o) {
              var r;
              ((ke = null),
                (be = null),
                (Oe = null),
                (function (t, n, o) {
                  var r = Ne,
                    i = t.__size,
                    s = n.__size;
                  Ne = "";
                  var l = o.element,
                    c = Te._keyToDOMMap.get(n.__key);
                  void 0 === c && e(351, n.__key);
                  var a = s - i;
                  if (
                    !$e &&
                    Math.abs(a) <= 1 &&
                    i >= Ce &&
                    t.__first === n.__first &&
                    (0 !== a || !Te._cloneNotNeeded.has(t.__key))
                  ) {
                    var _i10 = c.__lexicalTextContent,
                      _u3 = Ke.get(t.__key);
                    if (!$e && "string" == typeof _i10 && void 0 !== _u3) {
                      var _s1 = (function (t, e) {
                        var n = e.size;
                        if (0 === n || n >= t.__size) return null;
                        var o = t.__last,
                          r = null,
                          i = 0;
                        for (; null !== o && i < n; ) {
                          if (!e.has(o)) return null;
                          r = o;
                          var _t39 = Re.get(o);
                          if (void 0 === _t39) return null;
                          ((o = _t39.__prev), i++);
                        }
                        return i !== n || (null !== o && e.has(o)) ? null : r;
                      })(n, _u3);
                      if (null !== _s1) {
                        var _f3 = _u3.size;
                        if (0 === a) {
                          var _t40 = ye(_s1, _f3);
                          var _o17 = _s1,
                            _a2 = 0;
                          for (; null !== _o17 && _a2 < _f3; ) {
                            var _t41 = Re.get(_o17);
                            if (void 0 === _t41) break;
                            var _e37 = Ee();
                            (un(_o17, l),
                              Qr(_t41) &&
                                null === ke &&
                                ((ke = _t41.getFormat()),
                                (be = _t41.getStyle()),
                                (Oe = _t41.__key)),
                              Me(_e37),
                              (_o17 = _t41.__next),
                              _a2++);
                          }
                          var _d2 = "";
                          for (
                            _o17 = _s1, _a2 = 0;
                            null !== _o17 && _a2 < _f3;
                          ) {
                            var _t42 = Re.get(_o17);
                            if (void 0 === _t42) break;
                            var _n32 = void 0;
                            if (Bs(_t42)) {
                              var _r16 = Te._keyToDOMMap.get(_o17),
                                _i11 = _r16 && _r16.__lexicalTextContent;
                              ("string" != typeof _i11 &&
                                e(352, _t42.getType()),
                                (_n32 = _i11));
                            } else _n32 = _t42.getTextContent();
                            ((_d2 += _n32),
                              _a2 < _f3 - 1 &&
                                Bs(_t42) &&
                                !_t42.isInline() &&
                                (_d2 += v),
                              (_o17 = _t42.__next),
                              _a2++);
                          }
                          var _h2 = c.__lexicalSlotTextLength || 0,
                            _g2 = _h2 > 0 ? _i10.slice(_h2) : _i10,
                            _3 = _g2.slice(0, _g2.length - _t40) + _d2;
                          return (
                            (c.__lexicalTextContent = _3),
                            (Ne = r + _3),
                            void an(n, c, _u3)
                          );
                        }
                        if (
                          (function (t, n, o, r, i, s, l, c) {
                            if (1 !== c && -1 !== c) return !1;
                            if (l !== (1 === c ? 2 : 1)) return !1;
                            var a = l - c;
                            var u = t.__last;
                            for (var _t43 = 0; _t43 < a - 1; _t43++) {
                              if (null === u) return !1;
                              var _t44 = Ie.get(u);
                              if (void 0 === _t44) return !1;
                              u = _t44.__prev;
                            }
                            if (null === u) return !1;
                            var f = Re.get(s),
                              d = Ie.get(u);
                            if (void 0 === f || void 0 === d) return !1;
                            if (f.__prev !== d.__prev) return !1;
                            var h = [];
                            var g = s;
                            for (var _t45 = 0; _t45 < l; _t45++) {
                              if (null === g) return !1;
                              h.push(g);
                              var _t46 = Re.get(g);
                              g = _t46 ? _t46.__next : null;
                            }
                            var _ = [];
                            g = u;
                            for (var _t47 = 0; _t47 < a; _t47++) {
                              if (null === g) return !1;
                              _.push(g);
                              var _t48 = Ie.get(g);
                              g = _t48 ? _t48.__next : null;
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
                            var S = ye(u, a);
                            for (var _t49 of y) {
                              var _e38 = Ee();
                              if ("reconcile" === _t49.kind)
                                un(_t49.key, o.element);
                              else if ("destroy" === _t49.kind)
                                Ue(_t49.key, o.element);
                              else {
                                var _e39 = null;
                                for (
                                  var _n33 = _t49.nextIndex + 1;
                                  _n33 < l;
                                  _n33++
                                ) {
                                  var _t50 = Te._keyToDOMMap.get(h[_n33]);
                                  if (void 0 !== _t50) {
                                    _e39 = _t50;
                                    break;
                                  }
                                }
                                on(
                                  _t49.key,
                                  o.withBefore(_e39 != null ? _e39 : o.before),
                                );
                              }
                              if ("destroy" !== _t49.kind) {
                                var _e40 = Re.get(_t49.key);
                                _e40 &&
                                  Qr(_e40) &&
                                  null === ke &&
                                  ((ke = _e40.getFormat()),
                                  (be = _e40.getStyle()),
                                  (Oe = _e40.__key));
                              }
                              Me(_e38);
                            }
                            var T = "";
                            for (var _t51 = 0; _t51 < l; _t51++) {
                              var _n34 = Re.get(h[_t51]);
                              if (void 0 === _n34) return !1;
                              var _o18 = void 0;
                              if (Bs(_n34)) {
                                var _r17 = Te._keyToDOMMap.get(h[_t51]),
                                  _i12 = _r17 && _r17.__lexicalTextContent;
                                ("string" != typeof _i12 &&
                                  e(350, _n34.getType()),
                                  (_o18 = _i12));
                              } else _o18 = _n34.getTextContent();
                              ((T += _o18),
                                _t51 < l - 1 &&
                                  Bs(_n34) &&
                                  !_n34.isInline() &&
                                  (T += v));
                            }
                            var N = r.__lexicalSlotTextLength || 0,
                              k = N > 0 ? i.slice(N) : i;
                            return (
                              (r.__lexicalTextContent =
                                k.slice(0, k.length - S) + T),
                              !0
                            );
                          })(t, 0, o, c, _i10, _s1, _f3, a)
                        ) {
                          var _t52 = c.__lexicalTextContent;
                          return (
                            "string" != typeof _t52 && e(353),
                            (Ne = r + _t52),
                            void an(n, c, _u3)
                          );
                        }
                      }
                    }
                    if (0 === a) {
                      var _n35 = t.__first,
                        _o19 = 0;
                      for (; null !== _n35; ) {
                        var _t53 = Re.get(_n35);
                        if (void 0 === _t53) break;
                        var _r18 = $e || Fe.has(_n35) || De.has(_n35),
                          _i13 = Ee();
                        if (_r18) un(_n35, l);
                        else {
                          var _o20 = void 0,
                            _r19 = void 0;
                          if (Bs(_t53)) {
                            _r19 = Le.get(_n35);
                            var _i14 = _r19 && _r19.__lexicalTextContent;
                            ("string" != typeof _i14 && e(354, _t53.getType()),
                              (_o20 = _i14));
                          } else _o20 = _t53.getTextContent();
                          ((Ne += _o20), void 0 !== _r19 && Ae(_r19));
                        }
                        (Qr(_t53)
                          ? null === ke &&
                            ((ke = _t53.getFormat()),
                            (be = _t53.getStyle()),
                            (Oe = _t53.__key))
                          : Bs(_t53) &&
                            _o19 < s - 1 &&
                            !_t53.isInline() &&
                            (Ne += v),
                          Me(_i13),
                          (_n35 = _t53.__next),
                          _o19++);
                      }
                      return (
                        (c.__lexicalTextContent = Ne),
                        (c.__lexicalFirstTextKey = Oe),
                        void (Ne = r + Ne)
                      );
                    }
                  }
                  if (1 === i && 1 === s) {
                    var _e41 = t.__first,
                      _r20 = n.__first;
                    if (_e41 === _r20) un(_e41, l);
                    else {
                      var _t54 = _n(_e41),
                        _n36 = on(_r20, null);
                      try {
                        _t54.parentNode === l
                          ? l.replaceChild(_n36, _t54)
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
                            _t54.tagName +
                            ", key: " +
                            _e41 +
                            "}.";
                          throw new Error(_i15);
                        }
                        throw o;
                      }
                      Ue(_e41, null);
                    }
                    var _i16 = Re.get(_r20);
                    Qr(_i16) &&
                      null === ke &&
                      ((ke = _i16.getFormat()),
                      (be = _i16.getStyle()),
                      (Oe = _i16.__key));
                  } else {
                    var _r21 = gu(t, Ie),
                      _c5 = gu(n, Re);
                    if (
                      (_r21.length !== i && e(227),
                      _c5.length !== s && e(228),
                      0 === i)
                    )
                      0 !== s && rn(_c5, n, 0, s - 1, o);
                    else if (0 === s) {
                      if (0 !== i) {
                        var _t55 =
                          null == o.after &&
                          null == o.before &&
                          0 === Ze(n).size &&
                          null == o.element.__lexicalLineBreak;
                        (je(_r21, 0, i - 1, _t55 ? null : l),
                          _t55 && (l.textContent = ""));
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
                          var _t56 = e[f],
                            _o21 = n[d],
                            _r22 = Ee();
                          if (_t56 === _o21)
                            ((u = dn(un(_o21, i.element))), f++, d++);
                          else {
                            if ((void 0 === a && (a = hn(n, d)), void 0 === c))
                              c = hn(e, f);
                            else if (!c.has(_t56)) {
                              (f++, Me(_r22));
                              continue;
                            }
                            if (!a.has(_t56)) {
                              ((u = dn(_n(_t56))),
                                Ue(_t56, i.element),
                                f++,
                                c["delete"](_t56),
                                Me(_r22));
                              continue;
                            }
                            if (c.has(_o21)) {
                              var _t57 = Fc(Te, _o21);
                              (_t57 !== u &&
                                i
                                  .withBefore(u != null ? u : i.before)
                                  .insertChild(_t57),
                                (u = dn(un(_o21, i.element))),
                                f++,
                                d++);
                            } else
                              (on(_o21, i.withBefore(u != null ? u : i.before)),
                                d++);
                          }
                          var _s10 = Re.get(_o21);
                          (null !== _s10 && Qr(_s10)
                            ? null === ke &&
                              ((ke = _s10.getFormat()),
                              (be = _s10.getStyle()),
                              (Oe = _s10.__key))
                            : Bs(_s10) &&
                              d <= l &&
                              !_s10.isInline() &&
                              (Ne += v),
                            Me(_r22));
                        }
                        var h = f > s,
                          g = d > l;
                        if (h && !g) {
                          var _e42 = n[l + 1],
                            _o22 =
                              void 0 === _e42 ? null : Te.getElementByKey(_e42);
                          rn(
                            n,
                            t,
                            d,
                            l,
                            i.withBefore(_o22 != null ? _o22 : i.before),
                          );
                        } else g && !h && je(e, f, s, i.element);
                      })(n, _r21, _c5, i, s, o);
                  }
                  ((c.__lexicalTextContent = Ne),
                    (c.__lexicalFirstTextKey = Oe),
                    (Ne = r + Ne));
                })(t, n, ba(n, o, Te)),
                Vc(n) ||
                  ((r = n),
                  null == ke ||
                    ke === r.__textFormat ||
                    We ||
                    r.setTextFormat(ke),
                  (function (t) {
                    null == be ||
                      be === t.__textStyle ||
                      We ||
                      t.setTextStyle(be);
                  })(n)));
            })(o, r, s),
            r.isInline() || (js(r) || cn(0, r, s), ln(r, s)),
            "" !== _c4)
          ) {
            var _e43 = s.__lexicalTextContent || "";
            ((s.__lexicalTextContent = _c4 + _e43),
              (Ne = _t38 + _c4 + _e43),
              (s.__lexicalSlotTextLength = _c4.length));
          } else
            (Ze(r).size > 0 || Ze(o).size > 0) &&
              (s.__lexicalSlotTextLength = 0);
        } else {
          var _t58 = s.__lexicalTextContent;
          ("string" != typeof _t58 && e(356, o.getType()), (Ne += _t58), Ae(s));
        }
        if (
          ($e || r.__dir !== o.__dir || r.__parent !== o.__parent) &&
          (Ge(s, r), js(r) && !$e)
        )
          for (var _t59 of r.getChildren())
            Bs(_t59) && Ge(Fc(Te, _t59.getKey()), _t59);
      } else {
        var _e44 = r.getTextContent();
        if (Ws(r)) {
          var _e45 = r.decorate(Te, Se);
          (null !== _e45 && fn(t, _e45),
            i && (Ze(r).size > 0 || Ze(o).size > 0) && nn(o, r, s));
        }
        Ne += _e44;
      }
      if (!We && js(r)) {
        var _t60 = r.getLatest();
        if (_t60.__cachedText !== Ne) {
          var _e46 = _t60.getWritable();
          ((_e46.__cachedText = Ne), (r = _e46));
        }
      }
      return (ze.$decorateDOM(r, o, s, Te), xe(r), s);
    }
    function fn(t, e) {
      var n = Te._pendingDecorators;
      var o = Te._decorators;
      if (null === n) {
        if (o[t] === e) return;
        n = cc(Te);
      }
      n[t] = e;
    }
    function dn(t) {
      var e = t.nextSibling;
      return (
        null !== e && e === Te._blockCursorElement && (e = e.nextSibling),
        e
      );
    }
    function hn(t, e) {
      var n = new Set();
      for (var _o23 = e; _o23 < t.length; _o23++) n.add(t[_o23]);
      return n;
    }
    function gn(t, e, n, o, r, i) {
      ((Ne = ""),
        (ke = null),
        (be = null),
        (Oe = null),
        ($e = 2 === o),
        (Te = n),
        (Se = n._config),
        (ze = n._config.dom || El),
        (ve = n._nodes),
        (we = Te._listeners.mutation),
        (De = r),
        (Fe = i),
        (Ie = t._nodeMap),
        (Pe = t),
        (Re = e._nodeMap),
        (We = e._readOnly),
        (Le = Z(n._keyToDOMMap)),
        (Ke = (function () {
          var t = new Map(),
            e = function e(_e48) {
              for (var _n37 of _e48) {
                var _e47 = Re.get(_n37);
                if (void 0 === _e47) continue;
                var _o24 = _e47.__parent;
                if (null === _o24) continue;
                var _r23 = t.get(_o24);
                (void 0 === _r23 && ((_r23 = new Set()), t.set(_o24, _r23)),
                  _r23.add(_n37));
              }
            };
          return (e(De.keys()), e(Fe), t);
        })()));
      var s = new Map();
      return (
        (Be = s),
        un("root", null),
        (Te = void 0),
        (ve = void 0),
        (De = void 0),
        (Fe = void 0),
        (Ie = void 0),
        (Pe = void 0),
        (Re = void 0),
        (Se = void 0),
        (Le = void 0),
        (Ke = void 0),
        (Be = void 0),
        (ze = El),
        s
      );
    }
    function _n(t) {
      var n = Le.get(t);
      return (void 0 === n && e(75, t), n);
    }
    function pn(t) {
      return function () {};
    }
    function mn(t) {
      return { type: t };
    }
    var yn = mn("SELECTION_CHANGE_COMMAND"),
      xn = mn("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"),
      Cn = mn("CLICK_COMMAND"),
      Sn = mn("BEFORE_INPUT_COMMAND"),
      Tn = mn("INPUT_COMMAND"),
      vn = mn("COMPOSITION_START_COMMAND"),
      Nn = mn("COMPOSITION_END_COMMAND"),
      kn = mn("DELETE_CHARACTER_COMMAND"),
      bn = mn("INSERT_LINE_BREAK_COMMAND"),
      On = mn("INSERT_PARAGRAPH_COMMAND"),
      En = mn("CONTROLLED_TEXT_INSERTION_COMMAND"),
      Mn = mn("PASTE_COMMAND"),
      An = mn("REMOVE_TEXT_COMMAND"),
      wn = mn("DELETE_WORD_COMMAND"),
      Dn = mn("DELETE_LINE_COMMAND"),
      Fn = mn("FORMAT_TEXT_COMMAND"),
      In = mn("SET_TEXT_FORMAT_COMMAND"),
      Pn = mn("UNDO_COMMAND"),
      Rn = mn("REDO_COMMAND"),
      Ln = mn("KEYDOWN_COMMAND"),
      Kn = mn("KEY_ARROW_RIGHT_COMMAND"),
      Bn = mn("MOVE_TO_END"),
      zn = mn("KEY_ARROW_LEFT_COMMAND"),
      $n = mn("MOVE_TO_START"),
      Wn = mn("KEY_ARROW_UP_COMMAND"),
      Un = mn("KEY_ARROW_DOWN_COMMAND"),
      jn = mn("KEY_ENTER_COMMAND"),
      Hn = mn("KEY_SPACE_COMMAND"),
      Vn = mn("KEY_BACKSPACE_COMMAND"),
      Jn = mn("KEY_ESCAPE_COMMAND"),
      Yn = mn("KEY_DELETE_COMMAND"),
      Gn = mn("KEY_TAB_COMMAND"),
      qn = mn("INSERT_TAB_COMMAND"),
      Xn = mn("INDENT_CONTENT_COMMAND"),
      Qn = mn("OUTDENT_CONTENT_COMMAND"),
      Zn = mn("DROP_COMMAND"),
      to = mn("FORMAT_ELEMENT_COMMAND"),
      eo = mn("DRAGSTART_COMMAND"),
      no = mn("DRAGOVER_COMMAND"),
      oo = mn("DRAGEND_COMMAND"),
      ro = mn("COPY_COMMAND"),
      io = mn("CUT_COMMAND"),
      so = mn("SELECT_ALL_COMMAND"),
      lo = mn("CLEAR_EDITOR_COMMAND"),
      co = mn("CLEAR_HISTORY_COMMAND"),
      ao = mn("CAN_REDO_COMMAND"),
      uo = mn("CAN_UNDO_COMMAND"),
      fo = mn("FOCUS_COMMAND"),
      ho = mn("BLUR_COMMAND"),
      go = mn("KEY_MODIFIER_COMMAND");
    function _o(t, e) {
      var _babelHelpers$extends;
      return babelHelpers["extends"](
        {},
        e,
        ((_babelHelpers$extends = {}),
        (_babelHelpers$extends[K] = t),
        _babelHelpers$extends),
      );
    }
    var po = _o("metaKey", { ctrlKey: !a, metaKey: a }),
      mo = _o("altKey", { altKey: a, ctrlKey: !a }),
      yo = [
        ["altKey", 1],
        ["ctrlKey", 2],
        ["metaKey", 4],
        ["shiftKey", 8],
      ];
    function xo(t, e, n) {
      var o = t.get(e);
      o ? o.push(n) : t.set(e, [n]);
    }
    var _Co = (function () {
      function Co() {
        this.byKey = (function () {
          return new Map();
        })();
        this.byCode = (function () {
          return new Map();
        })();
      }
      var _proto6 = Co.prototype;
      _proto6.add = function add(t) {
        var n = t.key,
          _t$modifiers = t.modifiers,
          o = _t$modifiers === void 0 ? {} : _t$modifiers;
        n.length > 0 || e(399);
        var r = n.toLowerCase();
        for (var _e49 of (function (t) {
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
          for (var _ref26 of yo) {
            _loop();
          }
          return e;
        })(o))
          (xo(this.byKey, _e49 + ":" + r, t),
            1 === n.length &&
              (/[0-9]/.test(n)
                ? xo(this.byCode, _e49 + ":Digit" + n, t)
                : /[a-z]/.test(r) &&
                  xo(this.byCode, _e49 + ":Key" + r.toUpperCase(), t)));
        return this;
      };
      _proto6.matches = function matches(t) {
        var e = t.key;
        if (!e) return [];
        var n = (function (t) {
            var e = 0;
            for (var _ref28 of yo) {
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
          var _e50 = this.byCode.get(n + ":" + t.code);
          _e50 && r.push.apply(r, Array.from(_e50));
        }
        return r;
      };
      _proto6.match = function match(t) {
        return this.matches(t)[0];
      };
      return Co;
    })();
    function So(t) {
      var e = new _Co();
      for (var _n39 of t) e.add(_n39);
      return e;
    }
    function To(t) {
      var e = new Map();
      return {
        dispose: function dispose() {
          for (var _t61 of e.values()) _t61.dispose();
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
    function vo(t, e, n, o) {
      return (
        t.addEventListener(e, n, o),
        t.removeEventListener.bind(t, e, n, o)
      );
    }
    var No = Object.freeze({});
    var ko;
    var bo = new WeakMap(),
      Oo = new WeakMap(),
      Eo = To(function (t) {
        return (
          t.addEventListener("selectionchange", ir),
          function () {
            return t.removeEventListener("selectionchange", ir);
          }
        );
      });
    function Mo(t, e, n, o, r, i) {
      var s = t.anchor,
        l = t.focus,
        c = s.getNode(),
        a = _s();
      var u;
      if (void 0 !== i) u = i;
      else {
        var _t62 = Zc(Wc(a));
        u = null !== _t62 ? aa(_t62, a._rootElement) : null;
      }
      var f = null !== u ? u.anchorNode : null,
        h = s.key,
        g = a.getElementByKey(h),
        _ = n.length;
      return (
        h !== l.key ||
        !Qr(c) ||
        (((!r &&
          (!d || a._inputState.lastBeforeInputInsertTextTimeStamp < o + 50)) ||
          (c.isDirty() && _ < 2) ||
          _c(n)) &&
          s.offset !== l.offset &&
          !c.isComposing()) ||
        Vl(c) ||
        (c.isDirty() && _ > 1) ||
        ((r || !d) && null !== g && !c.isComposing() && f !== Ea(c, g, a)) ||
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
            r = Hl(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!o.canInsertTextBefore() && !e.isComposing()) ||
                r ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (Qr(e) || (Bs(e) && e.isInline())) &&
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
    function Ao(t, e) {
      return (
        Jl(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function wo(t, n, o) {
      var _aa = aa(t, n._rootElement),
        r = _aa.anchorNode,
        i = _aa.anchorOffset,
        s = _aa.focusNode,
        l = _aa.focusOffset,
        c = n._inputState;
      if (c.isSelectionChangeFromDOMUpdate) {
        c.isSelectionChangeFromDOMUpdate = !1;
        var _t63 = c.selectionChangeFromDOMUpdatePoints;
        if (
          ((c.selectionChangeFromDOMUpdatePoints = null),
          Ao(r, i) &&
            Ao(s, l) &&
            !c.postDeleteSelectionToRestore &&
            (null === _t63 ||
              (_t63.anchorNode === r &&
                _t63.anchorOffset === i &&
                _t63.focusNode === s &&
                _t63.focusOffset === l)))
        )
          return;
      }
      ws(n, function () {
        if (!o) return void dc(null);
        if (!$l(n, r, s)) return;
        var a = Ki();
        if (c.postDeleteSelectionToRestore && di(a) && a.isCollapsed()) {
          var _t64 = a.anchor,
            _e51 = c.postDeleteSelectionToRestore.anchor;
          ((_t64.key === _e51.key && _t64.offset === _e51.offset + 1) ||
            (1 === _t64.offset &&
              _e51.getNode().is(_t64.getNode().getPreviousSibling()))) &&
            ((a = c.postDeleteSelectionToRestore.clone()), dc(a));
        }
        if (((c.postDeleteSelectionToRestore = null), di(a))) {
          var _o26 = a.anchor,
            _u4 = _o26.getNode();
          if (a.isCollapsed()) {
            "Range" === t.type && r === s && (a.dirty = !0);
            var _i18 = Wc(n).event,
              _l6 = _i18 ? _i18.timeStamp : performance.now(),
              _c$collapsedSelection = c.collapsedSelectionFormat,
              _f4 = _c$collapsedSelection.format,
              _d3 = _c$collapsedSelection.style,
              _h3 = _c$collapsedSelection.offset,
              _g3 = _c$collapsedSelection.key,
              _4 = _c$collapsedSelection.timeStamp,
              _p2 = uc(),
              _m = !1 === n.isComposing() && "" === _p2.getTextContent();
            if (_l6 < _4 + 200 && _o26.offset === _h3 && _o26.key === _g3)
              Do(a, _f4, _d3);
            else if ("text" === _o26.type) (Qr(_u4) || e(141), Fo(a, _u4));
            else if ("element" === _o26.type && !_m) {
              Bs(_u4) || e(259);
              var _t65 = _o26.getNode();
              _t65.isEmpty()
                ? (function (t, e) {
                    Do(t, e.getTextFormat(), e.getTextStyle());
                  })(a, _t65)
                : Do(a, a.format, "");
            }
          } else {
            var _t66 = _o26.key,
              _e52 = a.focus.key,
              _n40 = a.getNodes(),
              _r25 = _n40.length,
              _s11 = a.isBackward(),
              _c6 = _s11 ? l : i,
              _u5 = _s11 ? i : l,
              _f5 = _s11 ? _e52 : _t66,
              _d4 = _s11 ? _t66 : _e52;
            var _h4 = S,
              _g4 = !1;
            for (var _t67 = 0; _t67 < _r25; _t67++) {
              var _e53 = _n40[_t67],
                _o27 = _e53.getTextContentSize();
              if (
                Qr(_e53) &&
                0 !== _o27 &&
                !(
                  (0 === _t67 && _e53.__key === _f5 && _c6 === _o27) ||
                  (_t67 === _r25 - 1 && _e53.__key === _d4 && 0 === _u5)
                ) &&
                ((_g4 = !0), (_h4 &= _e53.getFormat()), 0 === _h4)
              )
                break;
            }
            a.format = _g4 ? _h4 : 0;
          }
        }
        !(function (t, e, n) {
          if (n === void 0) {
            n = !1;
          }
          (n || bs(t, e)) && t.dispatchCommand(yn);
        })(n, a, null !== a && (a.dirty || !di(a)));
      });
    }
    function Do(t, e, n) {
      (t.format === e && t.style === n) ||
        ((t.format = e), (t.style = n), (t.dirty = !0));
    }
    function Fo(t, e) {
      Do(t, e.getFormat(), e.getStyle());
    }
    function Io(t, e) {
      ws(e, function () {
        var n = Ki(),
          o = Zc(Wc(e)),
          r = Bi();
        if (o)
          if (di(n)) {
            var _t68 = n.anchor,
              _e54 = _t68.getNode();
            "element" === _t68.type &&
              0 === _t68.offset &&
              n.isCollapsed() &&
              !js(_e54) &&
              1 === uc().getChildrenSize() &&
              _e54.getTopLevelElementOrThrow().isEmpty() &&
              null !== r &&
              n.is(r) &&
              (o.removeAllRanges(), (n.dirty = !0));
          } else if ("touch" === t.pointerType || "pen" === t.pointerType) {
            var _n41 = aa(o, e._rootElement).anchorNode;
            (pa(_n41) || Jl(_n41)) && dc(Li(r, o, e, t));
          }
        if (u && null !== o && 0 === o.rangeCount) {
          var _n42 = e._rootElement;
          if (null !== _n42 && t.target === _n42) {
            var _i19 = t.clientY;
            var _s12 = _n42.childNodes.length;
            for (var _t69 = 0; _t69 < _n42.childNodes.length; _t69++) {
              var _e55 = _n42.childNodes[_t69];
              if (pa(_e55)) {
                var _n43 = _e55.getBoundingClientRect();
                if (_i19 <= (_n43.top + _n43.bottom) / 2) {
                  _s12 = _t69;
                  break;
                }
              }
            }
            o.setBaseAndExtent(_n42, _s12, _n42, _s12);
            var _l7 = Li(r, o, e, t);
            null !== _l7 ? dc(_l7) : o.removeAllRanges();
          }
        }
        Dc(e, Cn, t);
      });
    }
    function Po(t, e) {
      var n = _a(t),
        o = t.pointerType;
      ma(n) &&
        "touch" !== o &&
        "pen" !== o &&
        0 === t.button &&
        ws(e, function () {
          Ba(n, e) || (e._inputState.isSelectionChangeFromMouseDown = !0);
        });
    }
    function Ro(t) {
      if (!t.getTargetRanges) return null;
      var e = t.getTargetRanges();
      return 0 === e.length ? null : e[0];
    }
    function Lo(t) {
      var e = _s()._inputState.lastKeyCode;
      if (null == t || t.length <= 1 || null == e) return;
      var n =
        1 === e.length ? e : "Enter" === e ? "\n" : "Tab" === e ? "\t" : null;
      if (!n) return;
      var o = Ki();
      if (!di(o) || !o.isCollapsed()) return;
      var r = o.anchor.getNode();
      if (!Qr(r)) return;
      var i = o.anchor.offset;
      if (r.getTextContentSize() === i) {
        var _t70 = r.getNextSibling();
        if ("\n" === n) {
          if (g) return;
          if (Zs(_t70)) _t70.selectEnd();
          else if (!_t70) {
            var _t71 = hu(r, Fi),
              _e56 = _t71 && _t71.getNextSibling();
            Bs(_e56) && _e56.selectStart();
          }
        } else
          "\t" === n
            ? oi(_t70) && _t70.selectEnd()
            : Qr(_t70) && _t70.getTextContent()[0] === n && _t70.select(1, 1);
      } else r.getTextContent()[i] === n && r.select(i + 1, i + 1);
    }
    function Ko(t) {
      ((t.isInsertTextAfterHandledSelectionCommand = !1),
        null !== t.handledSelectionCommandTimeoutId &&
          (clearTimeout(t.handledSelectionCommandTimeoutId),
          (t.handledSelectionCommandTimeoutId = null)));
    }
    function Bo(t) {
      a &&
        !g &&
        m &&
        (Ko(t),
        (t.isInsertTextAfterHandledSelectionCommand = !0),
        (t.handledSelectionCommandTimeoutId = setTimeout(function () {
          return Ko(t);
        }, 0)));
    }
    function zo(t, e) {
      var n = _a(t);
      if (pa(n) && Ba(n, e)) return !0;
      var o = e.getRootElement();
      if (null === o) return !1;
      var r = ga(o.ownerDocument);
      return null !== r && o.contains(r) && Ba(r, e);
    }
    function $o(t) {
      var _ref29;
      var n = t.inputType,
        o = Ro(t),
        r = _s(),
        i = r._inputState,
        s = Ki();
      if (
        "insertText" === n &&
        t.data &&
        i.isInsertTextAfterHandledSelectionCommand
      ) {
        if ((Ko(i), t.preventDefault(), di(s) && !s.isCollapsed())) {
          var _t72 = s.isBackward() ? s.anchor : s.focus;
          (s.anchor.set(_t72.key, _t72.offset, _t72.type),
            s.focus.set(_t72.key, _t72.offset, _t72.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === s) {
          var _t73 = Bi();
          if (!di(_t73)) return !0;
          dc(_t73.clone());
        }
        if (di(s)) {
          var _n44 = s.anchor.key === s.focus.key;
          if (
            (function (t, e) {
              return (
                "MediaLast" === t.lastKeyCode && e < t.lastKeyDownTimeStamp + 30
              );
            })(i, t.timeStamp) &&
            r.isComposing() &&
            _n44
          ) {
            if (
              (ec(null),
              (i.lastKeyDownTimeStamp = 0),
              setTimeout(function () {
                ws(r, function () {
                  ec(null);
                });
              }, 30),
              di(s))
            ) {
              var _t74 = s.anchor.getNode();
              (_t74.markDirty(), Qr(_t74) || e(142), Fo(s, _t74));
            }
          } else {
            if (
              (ec(null),
              g &&
                null !== o &&
                !o.collapsed &&
                (s.applyDOMRange(o), !s.isCollapsed()))
            )
              return (t.preventDefault(), s.removeText(), !0);
            t.preventDefault();
            var _e57 = s.anchor.getNode(),
              _l8 = _e57.getTextContent(),
              _c7 = _e57.canInsertTextAfter(),
              _a3 = 0 === s.anchor.offset && s.focus.offset === _l8.length;
            var _u6 = y && _n44 && !_a3 && _c7;
            if (
              (_u6 && s.isCollapsed() && (_u6 = !Ws(Ac(s.anchor, !0))), !_u6)
            ) {
              Dc(r, kn, !0);
              var _t75 = Ki();
              y &&
                di(_t75) &&
                _t75.isCollapsed() &&
                ((i.postDeleteSelectionToRestore = _t75),
                setTimeout(function () {
                  return (i.postDeleteSelectionToRestore = null);
                }));
            }
          }
          return !0;
        }
      }
      if (!di(s))
        return (
          ("historyUndo" !== n && "historyRedo" !== n) ||
            (t.preventDefault(), Dc(r, "historyUndo" === n ? Pn : Rn)),
          !0
        );
      var l = t.data;
      (null !== i.unprocessedBeforeInputData &&
        xc(!1, r, i.unprocessedBeforeInputData),
        (s.dirty && null === i.unprocessedBeforeInputData) ||
          !s.isCollapsed() ||
          js(s.anchor.getNode()) ||
          null === o ||
          s.applyDOMRange(o),
        (i.unprocessedBeforeInputData = null));
      var c = s.anchor,
        a = s.focus,
        u = c.getNode(),
        f = a.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === l) (t.preventDefault(), Dc(r, bn, !1));
        else if (l === v) (t.preventDefault(), Dc(r, On));
        else if (null == l && t.dataTransfer) {
          var _e58 = t.dataTransfer.getData("text/plain");
          (t.preventDefault(), s.insertRawText(_e58));
        } else
          null != l && Mo(s, o, l, t.timeStamp, !0)
            ? (t.preventDefault(), Dc(r, En, l), Lo(l))
            : (i.unprocessedBeforeInputData = l);
        return ((i.lastBeforeInputInsertTextTimeStamp = t.timeStamp), !0);
      }
      switch ((t.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          (Dc(r, En, t),
            Lo(
              (_ref29 = t.dataTransfer
                ? t.dataTransfer.getData("text/plain")
                : null) != null
                ? _ref29
                : t.data,
            ));
          break;
        case "insertFromComposition": {
          var _e59 = i.hadOrphanedCompositionEvents;
          i.hadOrphanedCompositionEvents = !1;
          var _n45 = r._compositionKey;
          (ec(null), _e59 || Dc(r, En, t), Jo(_n45));
          break;
        }
        case "insertLineBreak":
          (ec(null), (i.isInsertLineBreak = !1), Dc(r, bn, !1));
          break;
        case "insertParagraph":
          (ec(null),
            i.isInsertLineBreak
              ? ((i.isInsertLineBreak = !1), Dc(r, bn, !1))
              : Dc(r, On));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          Dc(r, Mn, t);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || Bs(t) || Bs(e) || !Hl(t) || !Hl(e);
          })(u, f) && Dc(r, An, t);
          break;
        case "deleteByDrag":
          (Kc(xr), Dc(r, An, t));
          break;
        case "deleteByCut":
          Dc(r, An, t);
          break;
        case "deleteContent":
          Dc(r, kn, !1);
          break;
        case "deleteWordBackward":
          Dc(r, wn, !0);
          break;
        case "deleteWordForward":
          Dc(r, wn, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          Dc(r, Dn, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          Dc(r, Dn, !1);
          break;
        case "formatStrikeThrough":
          Dc(r, Fn, "strikethrough");
          break;
        case "formatBold":
          Dc(r, Fn, "bold");
          break;
        case "formatItalic":
          Dc(r, Fn, "italic");
          break;
        case "formatUnderline":
          Dc(r, Fn, "underline");
          break;
        case "historyUndo":
          Dc(r, Pn);
          break;
        case "historyRedo":
          Dc(r, Rn);
      }
      return !0;
    }
    function Wo(t, e) {
      t.stopPropagation();
      var n = e._inputState;
      (Ko(n),
        ws(
          e,
          function () {
            zo(t, e) || e.dispatchCommand(Tn, t);
          },
          { event: t },
        ),
        (n.unprocessedBeforeInputData = null));
    }
    function Uo(t) {
      var e = _s(),
        n = e._inputState,
        o = Ki(),
        r = t.data,
        i = Ro(t);
      var s = !1;
      if (null != r && di(o)) {
        var _l9 = Zc(Wc(e)),
          _c8 = null !== _l9 ? aa(_l9, e._rootElement) : null,
          _a4 =
            "insertCompositionText" === t.inputType &&
            "ending-firefox" !== n.compositionPhase &&
            !e.isComposing();
        _a4 && (n.hadOrphanedCompositionEvents = !0);
        var _f6 = o.anchor.getNode(),
          _h5 =
            "insertCompositionText" === t.inputType &&
            "ending-firefox" !== n.compositionPhase &&
            e.isComposing() &&
            Qr(_f6) &&
            Vl(_f6);
        if (!_a4 && !_h5 && Mo(o, i, r, t.timeStamp, !1, _c8)) {
          if (((s = !0), "ending-firefox" === n.compositionPhase)) {
            var _t76 = Yo(e, r);
            if (((n.compositionPhase = "idle"), _t76))
              return (Kc(Sr), hc(), !0);
          }
          var _i20 = o.anchor.getNode();
          if (null === _l9 || null === _c8) return !0;
          var _a5 = o.isBackward(),
            _f7 = _a5 ? o.anchor.offset : o.focus.offset,
            _h6 = _a5 ? o.focus.offset : o.anchor.offset;
          (d &&
            !o.isCollapsed() &&
            Qr(_i20) &&
            null !== _c8.anchorNode &&
            _i20.getTextContent().slice(0, _f7) +
              r +
              _i20.getTextContent().slice(_f7 + _h6) ===
              yc(_c8.anchorNode)) ||
            Dc(e, En, r);
          var _g5 = r.length;
          (u &&
            _g5 > 1 &&
            "insertCompositionText" === t.inputType &&
            !e.isComposing() &&
            ((o.anchor.offset -= _g5),
            (o._cachedNodes = null),
            (o._cachedIsBackward = null)),
            y && e.isComposing() && ((n.lastKeyDownTimeStamp = 0), ec(null)));
        }
      }
      return (
        s ||
          (xc(!1, e, null !== r ? r : void 0),
          "ending-firefox" === n.compositionPhase &&
            (Yo(e, r || void 0), Kc(Sr), (n.compositionPhase = "idle"))),
        hc(),
        !0
      );
    }
    function jo(t, e) {
      Dc(e, vn, t);
    }
    function Ho(t) {
      var e = _s(),
        n = e._inputState,
        o = Ki();
      if (di(o) && !e.isComposing()) {
        ((n.compositionPhase = "composing"),
          (n.hadOrphanedCompositionEvents = !1));
        var _r26 = o.anchor,
          _i21 = o.anchor.getNode();
        if (
          (ec(_r26.key),
          Kc(Cr),
          t.timeStamp < n.lastKeyDownTimeStamp + 30 ||
            "element" === _r26.type ||
            !o.isCollapsed() ||
            (!y &&
              (_i21.getFormat() !== o.format ||
                (Qr(_i21) && _i21.getStyle() !== o.style))) ||
            (Qr(_i21) &&
              (Vl(_i21) ||
                (0 === _r26.offset && !_i21.canInsertTextBefore()) ||
                (_r26.offset === _i21.getTextContentSize() &&
                  !_i21.canInsertTextAfter()))))
        ) {
          Dc(e, En, N);
          var _t77 = Ki();
          di(_t77) && ec(_t77.anchor.key);
        }
      }
      return !0;
    }
    function Vo(t) {
      var e = _s();
      return (
        (e._inputState.compositionPhase = "idle"),
        Yo(e, t.data),
        Kc(Sr),
        !0
      );
    }
    function Jo(t) {
      if (null === t) return;
      var e = oc(t);
      if (!Qr(e) || "text" === e.getType() || Vl(e) || !e.isAttached()) return;
      var n = Ki(),
        o = di(n) && n.anchor.key === t ? n.anchor.offset : null,
        r = Xr(e.getTextContent());
      if (
        (r.setFormat(e.getFormat()),
        r.setStyle(e.getStyle()),
        e.replace(r),
        null !== o)
      ) {
        var _t78 = Math.min(o, r.getTextContentSize());
        r.select(_t78, _t78);
      }
    }
    function Yo(t, e) {
      var n = t._compositionKey;
      if ((ec(null), null !== n && null != e)) {
        if ("" === e) {
          var _e60 = oc(n),
            _o28 = t.getElementByKey(n),
            _r27 = null !== _o28 && Qr(_e60) ? Ea(_e60, _o28, t) : null;
          if (null !== _r27 && null !== _r27.nodeValue && Qr(_e60)) {
            var _n46 = Zc(Wc(t)),
              _o29 = _n46 && aa(_n46, t._rootElement);
            var _i22 = null,
              _s13 = null;
            (null !== _o29 &&
              _o29.anchorNode === _r27 &&
              ((_i22 = _o29.anchorOffset), (_s13 = _o29.focusOffset)),
              Cc(_e60, _r27.nodeValue, _i22, _s13, !0));
          }
          return (Jo(n), !1);
        }
        if ("\n" === e[e.length - 1]) {
          var _e61 = Ki();
          if (di(_e61) || gi(_e61)) {
            if (di(_e61)) {
              var _t79 = _e61.focus;
              _e61.anchor.set(_t79.key, _t79.offset, _t79.type);
            }
            return (Dc(t, jn, null), Jo(n), !1);
          }
        }
        var _o30 = oc(n);
        if (null !== _o30 && Qr(_o30) && Vl(_o30)) {
          _o30.markDirty();
          var _t80 = Ki(),
            _r28 = _o30.getTextContentSize(),
            _i23 =
              di(_t80) && _t80.anchor.key === n ? _t80.anchor.offset : _r28;
          return (_o30.select(_i23, _i23).insertText(e), !0);
        }
      }
      return (xc(!0, t, e), Jo(n), !1);
    }
    function Go(t, e) {
      var n = e._inputState;
      u
        ? (n.compositionPhase = "ending-firefox")
        : g || (!p && !x)
          ? Dc(e, Nn, t)
          : ((n.compositionPhase = "ending-safari"),
            (n.compositionEndData = t.data));
    }
    function qo(t, e) {
      var n = e._inputState;
      (g &&
        (n.isShiftKeyDown =
          "Shift" === t.key ||
          (n.isShiftKeyDown && t.shiftKey && "CapsLock" !== t.key)),
        (n.lastKeyDownTimeStamp = t.timeStamp),
        (n.lastKeyCode = t.key),
        "Backspace" !== t.key && Ko(n),
        e.isComposing() || Dc(e, Ln, t));
    }
    var Xo = { altKey: "any", ctrlKey: "any", metaKey: "any", shiftKey: "any" },
      Qo = { ctrlKey: !0 },
      Zo = { metaKey: !0 },
      tr = { shiftKey: "any" },
      er = { altKey: "any", shiftKey: "any" };
    function nr(t) {
      var e = _s(),
        n = e._inputState;
      if (null == t.key) return !0;
      if ("ending-safari" === n.compositionPhase) {
        var _o31 = (function (t) {
          return "Backspace" === t.key;
        })(t);
        if (
          (_o31 &&
            ws(e, function () {
              Yo(e, n.compositionEndData);
            }),
          (n.compositionPhase = "idle"),
          (n.compositionEndData = ""),
          _o31)
        )
          return !0;
      }
      var o = e._keyDownShortcuts;
      null === o &&
        ((o = So(
          (function () {
            var t = function t(_t81, e, n) {
                return {
                  key: _t81,
                  modifiers: e,
                  onMatch: function onMatch(t, e) {
                    Dc(e, n, t);
                  },
                };
              },
              e = function e(t, _e62, n, o) {
                return {
                  key: t,
                  modifiers: _e62,
                  onMatch: function onMatch(t, e) {
                    (t.preventDefault(), Dc(e, n, o));
                  },
                };
              },
              n = function n(t, e) {
                return {
                  key: "Enter",
                  modifiers: t,
                  onMatch: function onMatch(t, n) {
                    var o = n._inputState;
                    ((o.isInsertLineBreak = e && (!g || o.isShiftKeyDown)),
                      Dc(n, jn, t),
                      t.defaultPrevented && (o.isInsertLineBreak = !1));
                  },
                };
              },
              o = function o(t, e) {
                return {
                  key: t,
                  modifiers: po,
                  onMatch: function onMatch(t, n) {
                    var o = n._editorState._selection;
                    null === o || di(o) || (t.preventDefault(), Dc(n, e, t));
                  },
                };
              };
            return [
              t("ArrowRight", tr, Kn),
              t("ArrowLeft", tr, zn),
              t("ArrowUp", er, Wn),
              t("ArrowDown", er, Un),
              n(babelHelpers["extends"]({}, Xo, { shiftKey: !0 }), !0),
              n(babelHelpers["extends"]({}, Xo, { shiftKey: !1 }), !1),
              t(" ", Xo, Hn),
              {
                key: "Backspace",
                modifiers: tr,
                onMatch: function onMatch(t, e) {
                  Dc(e, Vn, t) && Bo(e._inputState);
                },
              },
              t("Escape", Xo, Jn),
              t("Delete", {}, Yn),
              e("Backspace", mo, wn, !0),
              e("Delete", mo, wn, !1),
              e("b", po, Fn, "bold"),
              e("u", po, Fn, "underline"),
              e("i", po, Fn, "italic"),
              t("Tab", tr, Gn),
              e("z", po, Pn, void 0),
              e(
                "z",
                babelHelpers["extends"]({}, po, { shiftKey: !0 }),
                Rn,
                void 0,
              ),
            ].concat(
              Array.from(
                a
                  ? [
                      {
                        key: "o",
                        modifiers: Qo,
                        onMatch: function onMatch(t, e) {
                          (t.preventDefault(), Dc(e, bn, !0));
                        },
                      },
                      t(
                        "ArrowLeft",
                        babelHelpers["extends"]({ metaKey: !0 }, tr),
                        $n,
                      ),
                      t(
                        "ArrowRight",
                        babelHelpers["extends"]({ metaKey: !0 }, tr),
                        Bn,
                      ),
                      e("h", Qo, kn, !0),
                      e("d", Qo, kn, !1),
                      e("Backspace", Zo, Dn, !0),
                      e("Delete", Zo, Dn, !1),
                      e("k", Qo, Dn, !1),
                    ]
                  : [
                      t("Home", tr, $n),
                      t("End", tr, Bn),
                      e("y", Qo, Rn, void 0),
                    ],
              ),
              [
                {
                  key: "a",
                  modifiers: po,
                  onMatch: function onMatch(t, e) {
                    (t.preventDefault(), Dc(e, so, t) && Bo(e._inputState));
                  },
                },
                o("c", ro),
                o("x", io),
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
        })(t) && e.dispatchCommand(go, t),
        !0
      );
    }
    function or(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    var rr = new Map();
    function ir(t) {
      var e = ta(t.target);
      if (null === e) return;
      var n = Pc(t.target);
      var o = null,
        r = null;
      var i = null !== n ? Oo.get(n) : void 0;
      if (null !== n) {
        if (void 0 !== i) {
          var _t82 = i.editors;
          var _n47 = i.hasShadowEditor;
          if (void 0 === _n47) {
            _n47 = !1;
            for (var _e63 of _t82)
              if (
                null !== _e63._rootElement &&
                ea(_e63._rootElement.getRootNode())
              ) {
                _n47 = !0;
                break;
              }
            i.hasShadowEditor = _n47;
          }
          if (_n47) {
            var _n48 = null,
              _i24 = null;
            for (var _s14 of _t82) {
              var _t83 = _s14._rootElement;
              if (null === _t83) continue;
              var _l0 = aa(e, _t83).anchorNode;
              if (null !== _l0 && Ul(_l0) === _s14) {
                if (ea(_t83.getRootNode())) {
                  ((o = _s14), (r = _l0));
                  break;
                }
                null === _n48 && ((_n48 = _s14), (_i24 = _l0));
              }
            }
            null === o && null !== _n48 && ((o = _n48), (r = _i24));
          } else {
            var _t84 = e.anchorNode;
            null === _t84 ||
              (pa(_t84) && null !== _t84.shadowRoot) ||
              ((o = Ul(_t84)), null !== o && (r = _t84));
          }
        }
        if (null === o) {
          var _t85 = ga(n);
          o = null !== _t85 ? Ul(_t85) : null;
        }
      }
      if (null === o) return;
      if (o._inputState.isSelectionChangeFromMouseDown) {
        if (void 0 !== i)
          for (var _t86 of i.editors)
            _t86._inputState.isSelectionChangeFromMouseDown = !1;
        ws(o, function () {
          var n = Bi(),
            i = r != null ? r : aa(e, o._rootElement).anchorNode;
          (pa(i) || Jl(i)) && dc(Li(n, e, o, t));
        });
      }
      var s = pc(o),
        l = s[s.length - 1],
        c = l._key,
        a = rr.get(c),
        u = a || l;
      (u !== o && wo(e, u, !1),
        wo(e, o, !0),
        o !== l ? rr.set(c, o) : a && rr["delete"](c));
    }
    function sr(t) {
      t._lexicalHandled = !0;
    }
    function lr(t) {
      return !0 === t._lexicalHandled;
    }
    var cr = pn();
    function ar(t, n, o) {
      ds();
      var r = t.__key,
        i = t.getParent();
      if (null === i) return void (null !== xu(t) && e(367, r, String(xu(t))));
      var s = (function (t) {
        var e = Ki();
        if (!di(e) || !Bs(t)) return e;
        var n = e.anchor,
          o = e.focus,
          r = n.getNode(),
          i = o.getNode();
        return (
          zc(r, t) && n.set(t.__key, 0, "element"),
          zc(i, t) && o.set(t.__key, 0, "element"),
          e
        );
      })(t);
      var l = !1;
      if (di(s) && n) {
        var _e64 = s.anchor,
          _n49 = s.focus;
        (_e64.key === r &&
          (Ui(_e64, t, i, t.getPreviousSibling(), t.getNextSibling()),
          (l = !0)),
          _n49.key === r &&
            (Ui(_n49, t, i, t.getPreviousSibling(), t.getNextSibling()),
            (l = !0)));
      } else gi(s) && n && t.isSelected() && t.selectPrevious();
      if (di(s) && n && !l && zi(s, i)) {
        var _e65 = t.getIndexWithinParent();
        (Ql(t), $i(s, i, _e65, -1));
      } else Ql(t);
      (o || Vc(i) || i.canBeEmpty() || !i.isEmpty() || ar(i, n),
        n && s && js(i) && i.isEmpty() && i.selectEnd());
    }
    var ur = Symbol["for"]("ephemeral");
    function fr(t) {
      return t[ur] || !1;
    }
    var dr = { configurable: !0, enumerable: !1, value: void 0, writable: !0 };
    var _hr5 = (function () {
      function hr(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", dr),
          Object.defineProperty(this, me, dr),
          Xl(this, t));
      }
      hr.getType = function getType() {
        var _su = su(this),
          t = _su.ownNodeType;
        return (void 0 === t && e(64, this.name), t);
      };
      hr.clone = function clone(t) {
        e(65, this.name);
      };
      var _proto7 = hr.prototype;
      _proto7.$config = function $config() {
        return {};
      };
      _proto7.config = function config(t, e) {
        var _ref30;
        var n = e["extends"] || _u(this.constructor);
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
        e(137, this.constructor.name);
      };
      _proto7.isAttached = function isAttached() {
        var t = this.__key;
        for (; null !== t; ) {
          if ("root" === t) return !0;
          var _e66 = oc(t);
          if (null === _e66) break;
          t = null !== _e66.__parent ? _e66.__parent : xu(_e66);
        }
        return !1;
      };
      _proto7.isSelected = function isSelected(t) {
        var _this13 = this;
        var e = t || Ki();
        if (null == e) return !1;
        var n = e.getNodes().some(function (t) {
          return t.__key === _this13.__key;
        });
        if (Qr(this)) return n;
        if (
          di(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t87 = this.getParent();
          if (Ws(this) && this.isInline() && _t87) {
            var _n50 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t87.is(_n50.getNode()) &&
              _n50.offset === _t87.getChildrenSize() &&
              this.is(_t87.getLastChild())
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
        return null === t ? null : oc(t);
      };
      _proto7.getParentOrThrow = function getParentOrThrow() {
        var t = this.getParent();
        return (null === t && e(66, this.__key), t);
      };
      _proto7.getTopLevelElement = function getTopLevelElement() {
        var t = this;
        for (; null !== t; ) {
          var _n51 = t.getParent();
          if (Vc(_n51) || null !== xu(t))
            return (Bs(t) || (t === this && Ws(t)) || e(194), t);
          t = _n51;
        }
        return null;
      };
      _proto7.getTopLevelElementOrThrow = function getTopLevelElementOrThrow() {
        var t = this.getTopLevelElement();
        return (null === t && e(67, this.__key), t);
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
        return null === t ? null : oc(t);
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
        return null === t ? null : oc(t);
      };
      _proto7.getNextSiblings = function getNextSiblings() {
        var t = [];
        var e = this.getNextSibling();
        for (; null !== e; ) (t.push(e), (e = e.getNextSibling()));
        return t;
      };
      _proto7.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto7.isBefore = function isBefore(t) {
        var n = pf(this, t);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === hf(n)
              : ("same" !== n.type && "ancestor" !== n.type && e(279), !1)))
        );
      };
      _proto7.isParentOf = function isParentOf(t) {
        return zc(t, this);
      };
      _proto7.getNodesBetween = function getNodesBetween(t) {
        var n = this.isBefore(t),
          o = [],
          r = new Set();
        var i = this;
        for (; null !== i; ) {
          var _s15 = i.__key;
          if ((r.has(_s15) || (r.add(_s15), o.push(i)), i === t)) break;
          var _l1 = Bs(i) ? (n ? i.getFirstChild() : i.getLastChild()) : null;
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
          if ((r.has(_a6.__key) || o.push(_a6), _a6 === t)) break;
          var _u7 = null,
            _f8 = _a6;
          do {
            if (
              (null === _f8 && e(68),
              (_u7 = n ? _f8.getNextSibling() : _f8.getPreviousSibling()),
              (_f8 = _f8.getParent()),
              null === _f8)
            )
              break;
            null !== _u7 || r.has(_f8.__key) || o.push(_f8);
          } while (null === _u7);
          i = _u7;
        }
        return (n || o.reverse(), o);
      };
      _proto7.isDirty = function isDirty() {
        var t = _s()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto7.getLatest = function getLatest() {
        if (fr(this)) return this;
        var t = oc(this.__key);
        return (null === t && e(113), t);
      };
      _proto7.getWritable = function getWritable() {
        if (fr(this)) return this;
        ds();
        var t = gs(),
          n = _s(),
          o = this.__key,
          r = n._cloneNotNeeded,
          i = r.get(o),
          s = t._selection;
        if ((null !== s && s.setCachedNodes(null), void 0 !== i))
          return (tc(i), i);
        var l = t._nodeMap,
          c = l.get(o);
        void 0 === c && e(113);
        var a = Da(c);
        return (r.set(o, a), l.set(o, a), tc(a), a);
      };
      _proto7.getTextContent = function getTextContent() {
        return Fu(this);
      };
      _proto7.getTextContentSize = function getTextContentSize() {
        return this.getTextContent().length;
      };
      _proto7.createDOM = function createDOM(t, n) {
        e(70);
      };
      _proto7.updateDOM = function updateDOM(t, n, o) {
        e(71);
      };
      _proto7.getDOMSlot = function getDOMSlot(t) {
        return new _H2(t);
      };
      _proto7.exportDOM = function exportDOM(t) {
        return { element: ka(t).$createDOM(this, t) };
      };
      _proto7.exportJSON = function exportJSON(t) {
        if (t === void 0) {
          t = !1;
        }
        var e = (function (t, e) {
            var n = Ua(Wa(t.constructor)),
              o = n.generated,
              r = n.isCompactDefault,
              i = null === o ? void 0 : e ? o.exportCompactJSON : o.exportJSON;
            return void 0 === i
              ? (function (t, e, n) {
                  var o = n ? { type: t.__type } : {};
                  return (
                    Bs(t) && (o.children = []),
                    (function (t, e, n, o) {
                      for (var _r29 = 0; _r29 < e.length; _r29++) {
                        var _i25 = e[_r29];
                        if (o && _i25.derived) continue;
                        var _s16 = void 0;
                        if ("ownField" === _i25.kind) {
                          var _e67 = eu(t)[_i25.field];
                          _s16 =
                            void 0 === _i25.getterTable
                              ? _e67
                              : Kt(_i25.getterTable, _e67)
                                ? _i25.getterTable[_e67]
                                : void 0;
                        } else _s16 = _i25.getter.call(t);
                        ("ownField" === _i25.kind &&
                          void 0 !== _i25.when &&
                          ((!nu(_i25, _s16) && _i25.when.call(t)) ||
                            (_s16 = void 0)),
                          (o && nu(_i25, _s16)) || (n[_i25.key] = _s16));
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
      hr.importJSON = function importJSON(t) {
        e(18, this.name);
      };
      _proto7.updateFromJSON = function updateFromJSON(t) {
        return iu(se(this, t), t);
      };
      hr.transform = function transform() {
        return null;
      };
      _proto7.remove = function remove(t) {
        ar(this, !0, t);
      };
      _proto7.replace = function replace(t, n) {
        ds();
        var o = Ki();
        (null !== o && (o = o.clone()), Gc(this, t));
        var r = this.getLatest(),
          i = this.__key,
          s = Cu(r);
        null !== s && e(400, i, r.getType(), s.getKey(), s.getType());
        var l = t.__key,
          c = t.getWritable(),
          a = this.getParentOrThrow().getWritable(),
          u = a.__size,
          f = c.getParent(),
          d = null !== f && di(o) && zi(o, f),
          h = d ? c.getIndexWithinParent() : -1;
        (Ql(c), d && null !== f && di(o) && $i(o, f, h, -1));
        var g = r.getPreviousSibling(),
          _ = r.getNextSibling(),
          p = r.__prev,
          m = r.__next,
          y = r.__parent;
        (ar(r, !1, !0),
          null === g ? (a.__first = l) : (g.getWritable().__next = l),
          (c.__prev = p),
          null === _ ? (a.__last = l) : (_.getWritable().__prev = l),
          (c.__next = m),
          (c.__parent = y),
          (a.__size = null !== f && f.is(a) ? u - 1 : u));
        var x = 0;
        if (
          (n &&
            ((Bs(this) && Bs(c)) || e(139),
            (x = c.getChildrenSize()),
            c.splice(x, 0, this.getChildren())),
          di(o))
        ) {
          dc(o);
          var _t88 = o.anchor,
            _e68 = o.focus;
          (_t88.key === i &&
            (n && "element" === _t88.type
              ? _t88.set(c.__key, x + _t88.offset, "element")
              : li(_t88, c)),
            _e68.key === i &&
              (n && "element" === _e68.type
                ? _e68.set(c.__key, x + _e68.offset, "element")
                : li(_e68, c)));
        }
        return (nc() === i && ec(l), c);
      };
      _proto7.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (ds(), Gc(this, t));
        var n = this.getWritable(),
          o = t.getWritable();
        this.getParentOrThrow();
        var r = o.getParent(),
          i = Ki();
        var s = !1,
          l = !1,
          c = -1;
        if (null !== r && e && di(i) && zi(i, r)) {
          var _e69 = r.__key,
            _n52 = i.anchor,
            _o32 = i.focus;
          ((c = t.getIndexWithinParent()),
            (s =
              "element" === _n52.type &&
              _n52.key === _e69 &&
              _n52.offset === c + 1),
            (l =
              "element" === _o32.type &&
              _o32.key === _e69 &&
              _o32.offset === c + 1));
        }
        (Ql(o), -1 !== c && null !== r && di(i) && $i(i, r, c, -1));
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
          e && di(i))
        ) {
          var _t89 = u.__key;
          if (s || l || zi(i, u)) {
            var _e70 = this.getIndexWithinParent();
            ($i(i, u, _e70 + 1),
              s && i.anchor.set(_t89, _e70 + 2, "element"),
              l && i.focus.set(_t89, _e70 + 2, "element"));
          }
        }
        return t;
      };
      _proto7.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (ds(), Gc(this, t));
        var n = this.getWritable(),
          o = t.getWritable();
        this.getParentOrThrow();
        var r = o.__key,
          i = Ki(),
          s = o.getParent(),
          l = null !== s && e && di(i) && zi(i, s),
          c = l ? o.getIndexWithinParent() : -1;
        (Ql(o), l && null !== s && di(i) && $i(i, s, c, -1));
        var a = this.getPreviousSibling(),
          u = this.getParentOrThrow().getWritable(),
          f = n.__prev,
          d = e && di(i) && zi(i, u),
          h = d ? this.getIndexWithinParent() : -1;
        return (
          null === a ? (u.__first = r) : (a.getWritable().__next = r),
          u.__size++,
          (n.__prev = r),
          (o.__prev = f),
          (o.__next = n.__key),
          (o.__parent = n.__parent),
          d && di(i) && $i(i, u, h),
          t
        );
      };
      _proto7.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto7.createParentElementNode = function createParentElementNode() {
        return vl();
      };
      _proto7.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto7.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto7.selectPrevious = function selectPrevious(t, e) {
        ds();
        var n = Cu(this);
        if (null !== n) return n.selectPrevious(t, e);
        var o = this.getPreviousSibling(),
          r = this.getParentOrThrow();
        if (null === o) return r.select(0, 0);
        if (Bs(o)) return o.select();
        if (!Qr(o)) {
          var _t90 = o.getIndexWithinParent() + 1;
          return r.select(_t90, _t90);
        }
        return o.select(t, e);
      };
      _proto7.selectNext = function selectNext(t, e) {
        ds();
        var n = Cu(this);
        if (null !== n) return n.selectNext(t, e);
        var o = this.getNextSibling(),
          r = this.getParentOrThrow();
        if (null === o) return r.select();
        if (Bs(o)) return o.select(0, 0);
        if (!Qr(o)) {
          var _t91 = o.getIndexWithinParent();
          return r.select(_t91, _t91);
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
      return hr;
    })();
    function gr(t) {
      return t instanceof _hr5;
    }
    var _r = "history-merge",
      pr = "collaboration",
      mr = "skip-scroll-into-view",
      yr = "skip-dom-selection",
      xr = "skip-selection-focus",
      Cr = "composition-start",
      Sr = "composition-end",
      Tr = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
    function vr(t, e) {
      if ("number" == typeof t) return Number.isFinite(t) ? t : e;
      if ("string" != typeof t || !Tr.test(t)) return e;
      var n = Number(t);
      return Number.isFinite(n) ? n : e;
    }
    function Nr(t, e, n, o, r) {
      var i = vr(t, e);
      return i >= n && i <= o && Number.isInteger(i) ? i : e;
    }
    var kr = function kr(t) {
      var e = xt(t, "format"),
        n = Ct(t, "format"),
        o = Tt(t, "format");
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
            (t.__indent = Nr(e.indent, 0, 0, Infinity)),
            (t.__textFormat = vr(e.textFormat, 0)));
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
    var Or = function Or(t) {
        var e = xt(t, "mode"),
          n = St(t, "detail", 0),
          o = St(t, "format", 0),
          r = Ct(t, "mode"),
          i = Tt(t, "mode");
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
            t.__detail = "string" == typeof s && s in n ? n[s] : vr(s, 0);
            var l = e.format;
            t.__format = "string" == typeof l && l in o ? o[l] : vr(l, 0);
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
      Er = function Er(t) {
        var e = xt(t, "format"),
          n = Ct(t, "format"),
          o = Tt(t, "format");
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
              (t.__indent = Nr(e.indent, 0, 0, Infinity)),
              (t.__textFormat = vr(e.textFormat, 0)));
            var s = e.textStyle;
            return ((t.__textStyle = "string" == typeof s ? s : ""), t);
          },
        };
      },
      Mr = function Mr() {
        return {
          exportJSON: function exportJSON(t) {
            return { type: t.__type, version: 1 };
          },
          exportCompactJSON: function exportCompactJSON(t) {
            return { type: t.__type };
          },
        };
      },
      Ar = function Ar(t) {
        var e = xt(t, "mode"),
          n = St(t, "format", 0);
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
            t.__format = "string" == typeof o && o in n ? n[o] : vr(o, 0);
            var r = e.style;
            return ((t.__style = "string" == typeof r ? r : ""), t);
          },
        };
      };
    function wr(t) {
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
      for (var _f9 = 0; _f9 < a; _f9++) {
        var _a7 = t[_f9];
        if (i) "*" === _a7 && "/" === t[_f9 + 1] && ((i = !1), _f9++);
        else if (s) (-1 === u && (u = _f9), (s = !1));
        else if (null === r) {
          if ("/" !== _a7 || "*" !== t[_f9 + 1]) {
            if ('"' !== _a7 && "'" !== _a7) {
              if ("(" !== _a7) {
                if (")" !== _a7) {
                  if (l || ":" !== _a7 || 0 !== c) {
                    if (";" === _a7 && 0 === c) {
                      -1 !== u &&
                        (l ? (o += t.slice(u, _f9)) : (n += t.slice(u, _f9)),
                        (u = -1));
                      var _r30 = n.trim(),
                        _i26 = o.trim();
                      ("" !== _r30 && "" !== _i26 && (e[_r30] = _i26),
                        (n = ""),
                        (o = ""),
                        (l = !1));
                      continue;
                    }
                    -1 === u && (u = _f9);
                  } else
                    (-1 !== u && ((n += t.slice(u, _f9)), (u = -1)), (l = !0));
                } else (-1 === u && (u = _f9), (c = Math.max(0, c - 1)));
              } else (-1 === u && (u = _f9), c++);
            } else (-1 === u && (u = _f9), (r = _a7));
          } else
            (-1 !== u &&
              (l ? (o += t.slice(u, _f9)) : (n += t.slice(u, _f9)), (u = -1)),
              (i = !0),
              _f9++);
        } else
          (-1 === u && (u = _f9),
            "\\" === _a7 ? (s = !0) : _a7 === r && (r = null));
      }
      -1 !== u && (l ? (o += t.slice(u, a)) : (n += t.slice(u, a)));
      var f = n.trim(),
        d = o.trim();
      return ("" !== f && "" !== d && (e[f] = d), e);
    }
    function Dr(t, e, n) {
      var o = n.trimEnd(),
        r = o.length - 10;
      r >= 0 && "!important" === o.slice(r).toLowerCase()
        ? t.setProperty(e, o.slice(0, r).trim(), "important")
        : t.setProperty(e, n, "");
    }
    function Fr(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var o = wr(n),
        r = wr(e);
      for (var _e71 in r) (delete o[_e71], Dr(t, _e71, r[_e71]));
      for (var _e72 in o) t.removeProperty(_e72);
    }
    var Ir = Vt()({
      detail: Yt(Jt(Ut(), w), { field: "__detail" }),
      format: Yt(Jt(Ut(), A), { field: "__format" }),
      mode: Yt(jt(["normal", "token", "segmented"]), {
        field: "__mode",
        getterTable: R,
        setterTable: P,
      }),
      style: Yt($t(), { field: "__style" }),
      text: Yt($t(), {
        field: "__text",
        getter: "getTextContent",
        setter: "setTextContent",
      }),
    });
    function Pr(t, e) {
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
    function Rr(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function Lr(t, e, n, o, r) {
      var i = o.classList;
      var s = Oc(r, "base");
      (void 0 !== s && i.add.apply(i, Array.from(s)),
        (s = Oc(r, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== s &&
        (8 & n && 4 & n
          ? ((l = !0), c || i.add.apply(i, Array.from(s)))
          : c && i.remove.apply(i, Array.from(s)));
      for (var _t92 in A) {
        var _o33 = A[_t92];
        if (((s = Oc(r, _t92)), void 0 !== s))
          if (n & _o33) {
            if (l && ("underline" === _t92 || "strikethrough" === _t92)) {
              e & _o33 && i.remove.apply(i, Array.from(s));
              continue;
            }
            (0 === (e & _o33) ||
              (c && "underline" === _t92) ||
              "strikethrough" === _t92) &&
              i.add.apply(i, Array.from(s));
          } else e & _o33 && i.remove.apply(i, Array.from(s));
      }
      bc(o, "class");
    }
    function Kr(t, e, n) {
      var o = n.isComposing(),
        r = t + (o ? T : ""),
        i = Na(),
        s = ka(i).$getDOMSlot(n, e, i),
        l = s.getFirstChild();
      if (null === l || l.nodeType !== Node.TEXT_NODE)
        return void s.insertChild(sa().createTextNode(r));
      var c = l,
        a = c.nodeValue;
      if (a !== r)
        if (o || u) {
          var _ref31 = (function (t, e) {
              var n = t.length,
                o = e.length;
              var r = 0,
                i = 0;
              for (; r < n && r < o && t[r] === e[r]; ) r++;
              for (; i + r < n && i + r < o && t[n - i - 1] === e[o - i - 1]; )
                i++;
              return [r, n - r - i, e.slice(r, o - i)];
            })(a, r),
            _t93 = _ref31[0],
            _e73 = _ref31[1],
            _n53 = _ref31[2];
          (0 !== _e73 && c.deleteData(_t93, _e73), c.insertData(_t93, _n53));
        } else c.nodeValue = r;
    }
    function Br(t, e, n, o, r, i) {
      Kr(r, t, e);
      var s = i.theme.text;
      void 0 !== s && Lr(0, 0, o, t, s);
    }
    function zr(t, e) {
      var n = sa().createElement(e);
      return (n.appendChild(t), n);
    }
    function $r(t) {
      return null != t && !0 === t.__isInlineFormattable;
    }
    var _Wr2 = (function (_hr) {
      function Wr(t, e) {
        var _this;
        if (t === void 0) {
          t = "";
        }
        ((_this = _hr.call(this, e) || this),
          (_this.__text = t),
          (_this.__format = 0),
          (_this.__style = ""),
          (_this.__mode = 0),
          (_this.__detail = 0));
        return _this;
      }
      babelHelpers.inheritsLoose(Wr, _hr);
      var _proto8 = Wr.prototype;
      _proto8.$config = function $config() {
        return this.config("text", {
          extends: _hr5,
          generated: Or,
          importDOM: {
            "#text": function text() {
              return { conversion: Jr, priority: 0 };
            },
            b: function b() {
              return { conversion: jr, priority: 0 };
            },
            code: function code() {
              return { conversion: qr, priority: 0 };
            },
            em: function em() {
              return { conversion: qr, priority: 0 };
            },
            i: function i() {
              return { conversion: qr, priority: 0 };
            },
            mark: function mark() {
              return { conversion: qr, priority: 0 };
            },
            s: function s() {
              return { conversion: qr, priority: 0 };
            },
            span: function span() {
              return { conversion: Ur, priority: 0 };
            },
            strong: function strong() {
              return { conversion: qr, priority: 0 };
            },
            sub: function sub() {
              return { conversion: qr, priority: 0 };
            },
            sup: function sup() {
              return { conversion: qr, priority: 0 };
            },
            u: function u() {
              return { conversion: qr, priority: 0 };
            },
          },
          json: Ir,
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
        return R[t.__mode];
      };
      _proto8.getStyle = function getStyle() {
        return this.getLatest().__style;
      };
      _proto8.isToken = function isToken() {
        return 1 === this.getLatest().__mode;
      };
      _proto8.isComposing = function isComposing() {
        return this.__key === nc();
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
        var t = this.getLatest();
        return "text" === t.__type && 0 === t.__mode;
      };
      _proto8.getTextContent = function getTextContent() {
        return this.getLatest().__text;
      };
      _proto8.getFormatFlags = function getFormatFlags(t, e) {
        return ql(this.getLatest().__format, t, e);
      };
      _proto8.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto8.isInline = function isInline() {
        return !0;
      };
      _proto8.createDOM = function createDOM(t, e) {
        var n = this.__format,
          o = Pr(0, n),
          r = Rr(0, n),
          i = null === o ? r : o,
          s = sa().createElement(i);
        var l = s;
        (this.hasFormat("code") && s.setAttribute("spellcheck", "false"),
          null !== o && ((l = sa().createElement(r)), s.appendChild(l)),
          Br(l, this, 0, n, this.__text, t));
        var c = this.__style;
        return ("" !== c && Fr(s.style, c), s);
      };
      _proto8.updateDOM = function updateDOM(t, n, o) {
        var r = this.__text,
          i = t.__format,
          s = this.__format,
          l = Pr(0, i),
          c = Pr(0, s),
          a = Rr(0, i),
          u = Rr(0, s);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _t94 = n.firstChild;
          null == _t94 && e(48);
          var _i27 = sa().createElement(u);
          return (Br(_i27, this, 0, s, r, o), n.replaceChild(_i27, _t94), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && e(49)),
          Kr(r, f, this));
        var d = o.theme.text;
        void 0 !== d && i !== s && Lr(0, i, s, f, d);
        var h = t.__style,
          g = this.__style;
        return (h !== g && (Fr(n.style, g, h), bc(n, "style")), !1);
      };
      _proto8.exportDOM = function exportDOM(t) {
        var _hr$prototype$exportD = _hr.prototype.exportDOM.call(this, t),
          n = _hr$prototype$exportD.element;
        return (
          pa(n) || e(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = zr(n, "b")),
          this.hasFormat("italic") && (n = zr(n, "i")),
          this.hasFormat("strikethrough") && (n = zr(n, "s")),
          this.hasFormat("underline") && (n = zr(n, "u")),
          { element: n }
        );
      };
      _proto8.selectionTransform = function selectionTransform(t, e) {};
      _proto8.setFormat = function setFormat(t) {
        var e = this.getWritable();
        return ((e.__format = "string" == typeof t ? A[t] : t), e);
      };
      _proto8.setDetail = function setDetail(t) {
        var e = this.getWritable();
        return ((e.__detail = "string" == typeof t ? w[t] : t), e);
      };
      _proto8.setStyle = function setStyle(t) {
        var e = this.getWritable();
        return ((e.__style = t), e);
      };
      _proto8.toggleFormat = function toggleFormat(t) {
        var e = ql(this.getFormat(), t, null);
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
        var e = P[t];
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
        ds();
        var n = t,
          o = e;
        var r = Ki(),
          i = this.getTextContent(),
          s = this.__key;
        if ("string" == typeof i) {
          var _t95 = i.length;
          (void 0 === n && (n = _t95), void 0 === o && (o = _t95));
        } else ((n = 0), (o = 0));
        if (!di(r)) return Ii(s, n, s, o, "text", "text");
        {
          var _t96 = nc();
          ((_t96 !== r.anchor.key && _t96 !== r.focus.key) || ec(s),
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
        var c = Ki();
        if (o && di(c)) {
          var _e74 = t + s;
          c.setTextNodeRange(r, _e74, r, _e74);
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
        ds();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var o = e.__key,
          r = nc(),
          i = n.length;
        for (
          var _len4 = arguments.length, t = new Array(_len4), _key4 = 0;
          _key4 < _len4;
          _key4++
        ) {
          t[_key4] = arguments[_key4];
        }
        (t.sort(function (t, e) {
          return t - e;
        }),
          t.push(i));
        var s = [],
          l = t.length;
        for (var _e75 = 0, _o34 = 0; _e75 < i && _o34 <= l; _o34++) {
          var _r31 = t[_o34];
          _r31 > _e75 && (s.push(n.slice(_e75, _r31)), (_e75 = _r31));
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
        var y = Ki();
        if (di(y)) {
          var _ref32 = y.isBackward()
              ? [y.focus, y.anchor]
              : [y.anchor, y.focus],
            _t97 = _ref32[0],
            _e76 = _ref32[1];
          ("text" === _t97.type && _t97.key === o && (p = _t97),
            "text" === _e76.type && _e76.key === o && (m = _e76));
        }
        e.isSegmented()
          ? ((f = Xr(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = fe(e, f)),
            (_ = !0))
          : (f = e.setTextContent(a));
        var x = [f];
        for (var _t98 = 1; _t98 < c; _t98++) {
          var _n54 = Xr(s[_t98]);
          ((_n54.__format = d),
            (_n54.__style = h),
            (_n54.__detail = g),
            (_n54.__state = fe(e, _n54)));
          var _i28 = _n54.__key;
          (r === o && ec(_i28), x.push(_n54));
        }
        var C = p ? p.offset : null,
          S = m ? m.offset : null;
        var T = 0;
        for (var _t99 of x) {
          if (!p && !m) break;
          var _e77 = T + _t99.getTextContentSize();
          if (
            (null !== p &&
              null !== C &&
              C <= _e77 &&
              C >= T &&
              (p.set(_t99.getKey(), C - T, "text"), C < _e77 && (p = null)),
            null !== m && null !== S && S <= _e77 && S >= T)
          ) {
            m.set(_t99.getKey(), S - T, "text");
            break;
          }
          T = _e77;
        }
        if (null !== u) {
          !(function (t) {
            var e = t.getPreviousSibling(),
              n = t.getNextSibling();
            (null !== e && tc(e), null !== n && tc(n));
          })(this);
          var _t100 = u.getWritable(),
            _e78 = this.getIndexWithinParent();
          (_
            ? (_t100.splice(_e78, 0, x), this.remove())
            : _t100.splice(_e78, 1, x),
            di(y) && $i(y, u, _e78, c - 1));
        }
        return x;
      };
      _proto8.mergeWithSibling = function mergeWithSibling(t) {
        var n = t === this.getPreviousSibling();
        n || t === this.getNextSibling() || e(50);
        var o = this.__key,
          r = t.__key,
          i = this.__text,
          s = i.length;
        nc() === r && ec(o);
        var l = Ki();
        if (di(l)) {
          var _e79 = l.anchor,
            _i29 = l.focus;
          (null !== _e79 && _e79.key === r && ji(_e79, n, o, t, s),
            null !== _i29 && _i29.key === r && ji(_i29, n, o, t, s));
        }
        var c = t.__text,
          a = n ? c + i : i + c;
        this.setTextContent(a);
        var u = this.getWritable();
        return (t.remove(), u);
      };
      _proto8.isTextEntity = function isTextEntity() {
        return !1;
      };
      return babelHelpers.createClass(Wr, [
        {
          key: "__isInlineFormattable",
          get: function get() {
            return !0;
          },
        },
      ]);
    })(_hr5);
    function Ur(t) {
      return { forChild: Zr(t.style), node: null };
    }
    function jr(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: Zr(e.style, n ? void 0 : "bold"), node: null };
    }
    var Hr = new WeakMap();
    function Vr(t) {
      if (!pa(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function Jr(t) {
      var n = t;
      null === t.parentElement && e(129);
      var o = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var o = [t];
          for (; null !== n && void 0 === (e = Hr.get(n)) && !Vr(n); )
            (o.push(n), (n = n.parentNode));
          var r = void 0 === e ? n : e;
          for (var _t101 = 0; _t101 < o.length; _t101++) Hr.set(o[_t101], r);
          return r;
        })(n)
      )
        return { node: Gi(o) };
      if (((o = o.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === o))
        return { node: null };
      if (" " === o[0]) {
        var _t102 = n,
          _e80 = !0;
        for (; null !== _t102 && null !== (_t102 = Yr(_t102, !1)); ) {
          var _n55 = _t102.textContent || "";
          if (_n55.length > 0) {
            (/[ \t\n]$/.test(_n55) && (o = o.slice(1)), (_e80 = !1));
            break;
          }
        }
        _e80 && (o = o.slice(1));
      }
      if (" " === o[o.length - 1]) {
        var _t103 = n,
          _e81 = !0;
        for (; null !== _t103 && null !== (_t103 = Yr(_t103, !0)); )
          if (
            (_t103.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e81 = !1;
            break;
          }
        _e81 && (o = o.slice(0, o.length - 1));
      }
      return "" === o ? { node: null } : { node: Xr(o) };
    }
    function Yr(t, e) {
      var n = t;
      for (;;) {
        var _t104 = void 0;
        for (; null === (_t104 = e ? n.nextSibling : n.previousSibling); ) {
          var _t105 = n.parentElement;
          if (null === _t105) return null;
          n = _t105;
        }
        if (((n = _t104), pa(n))) {
          var _t106 = n.style.display;
          if (
            ("" === _t106 && !Ca(n)) ||
            ("" !== _t106 && !_t106.startsWith("inline"))
          )
            return null;
        }
        var _o35 = n;
        for (; null !== (_o35 = e ? n.firstChild : n.lastChild); ) n = _o35;
        if (Jl(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var Gr = {
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
    function qr(t) {
      var e = Gr[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: Zr(t.style, e), node: null };
    }
    function Xr(t) {
      if (t === void 0) {
        t = "";
      }
      return Yc(new _Wr2(t));
    }
    function Qr(t) {
      return t instanceof _Wr2;
    }
    function Zr(t, e) {
      var n = t.fontWeight,
        o = t.textDecoration.split(" "),
        r = "700" === n || "bold" === n,
        i = o.includes("line-through"),
        s = "italic" === t.fontStyle,
        l = o.includes("underline"),
        c = t.verticalAlign,
        a = t.textTransform;
      return function (t) {
        return Qr(t) || $r(t)
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
    var ti = Vt()({
      detail: Gt(Ut(2), { getter: { field: "__detail" }, setter: null }),
      mode: Gt(jt(["normal"]), {
        getter: { field: "__mode", getterTable: { 0: "normal" } },
        setter: null,
      }),
      text: Gt($t("\t"), {
        getter: { field: "__text", method: "getTextContent" },
        setter: null,
      }),
    });
    var _ei = (function (_Wr) {
      function ei(t) {
        var _this2;
        if (t === void 0) {
          t = void 0;
        }
        ((_this2 = _Wr.call(this, "\t", t) || this), (_this2.__detail = 2));
        return _this2;
      }
      babelHelpers.inheritsLoose(ei, _Wr);
      var _proto9 = ei.prototype;
      _proto9.$config = function $config() {
        return this.config("tab", { extends: _Wr2, generated: Ar, json: ti });
      };
      _proto9.createDOM = function createDOM(t) {
        var _e$classList;
        var e = _Wr.prototype.createDOM.call(this, t),
          n = Oc(t.theme, "tab");
        return (
          void 0 !== n &&
            (_e$classList = e.classList).add.apply(_e$classList, Array.from(n)),
          e
        );
      };
      _proto9.setTextContent = function setTextContent(t) {
        return _Wr.prototype.setTextContent.call(this, "\t");
      };
      _proto9.spliceText = function spliceText(t, n, o, r) {
        return (
          ("" === o && 0 === n) || ("\t" === o && 1 === n) || e(286),
          this
        );
      };
      _proto9.setDetail = function setDetail(t) {
        return (2 !== t && e(127), this);
      };
      _proto9.setMode = function setMode(t) {
        return ("normal" !== t && e(128), this);
      };
      _proto9.canInsertTextBefore = function canInsertTextBefore() {
        return !1;
      };
      _proto9.canInsertTextAfter = function canInsertTextAfter() {
        return !1;
      };
      return ei;
    })(_Wr2);
    function ni() {
      return Yc(new _ei());
    }
    function oi(t) {
      return t instanceof _ei;
    }
    var _ri = (function () {
      function ri(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto0 = ri.prototype;
      _proto0.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto0.isBefore = function isBefore(t) {
        return this.key === t.key
          ? this.offset < t.offset
          : df(dl(ol(this, "next")), dl(ol(t, "next"))) < 0;
      };
      _proto0.getNode = function getNode() {
        var t = oc(this.key);
        return (null === t && e(20), t);
      };
      _proto0.set = function set(t, e, n, o) {
        var r = this._selection,
          i = this.key;
        (o && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          fs() ||
            (nc() === i && ec(t),
            null !== r &&
              (r.setCachedNodes(null),
              di(r) && (r._cachedIsBackward = null),
              (r.dirty = !0))));
      };
      return ri;
    })();
    function ii(t, e, n) {
      return new _ri(t, e, n);
    }
    function si(t, e) {
      var n = e.__key,
        o = t.offset,
        r = "element";
      if (Qr(e)) {
        r = "text";
        var _t107 = e.getTextContentSize();
        o > _t107 && (o = _t107);
      } else if (!Bs(e)) {
        var _t108 = e.getNextSibling();
        if (Qr(_t108)) ((n = _t108.__key), (o = 0), (r = "text"));
        else {
          var _t109 = e.getParent();
          _t109 && ((n = _t109.__key), (o = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, o, r);
    }
    function li(t, e) {
      if (Bs(e)) {
        var _n56 = e.getLastDescendant();
        Bs(_n56) || Qr(_n56) ? si(t, _n56) : si(t, e);
      } else si(t, e);
    }
    function ci(t, e, n, o) {
      var r = t.getNode(),
        i = r.getChildAtIndex(t.offset),
        s = Xr();
      if ((s.setFormat(n), s.setStyle(o), Nl(i))) i.splice(0, 0, [s]);
      else if (null !== i) {
        var _t110 = Vc(r) ? vl().append(s) : s;
        i.insertBefore(_t110);
      } else if (Vc(r)) {
        var _t111 = r.getLastChild();
        Bs(_t111) && !_t111.isInline() && _t111.isEmpty()
          ? _t111.append(s)
          : r.append(vl().append(s));
      } else r.append(s);
      (t.is(e) && e.set(s.__key, 0, "text"), t.set(s.__key, 0, "text"));
    }
    function ai(t, n, o, r) {
      var i = t.anchor.getNode();
      Qr(i) || e(398);
      var s = t.anchor.offset,
        l = Xr(n);
      (l.setFormat(o), l.setStyle(r));
      var c = i.getParentOrThrow();
      if (0 === s)
        c.isInline() && !i.__prev ? c.insertBefore(l) : i.insertBefore(l, !1);
      else if (s === i.getTextContentSize())
        c.isInline() && !i.__next ? c.insertAfter(l) : i.insertAfter(l, !1);
      else {
        var _i$splitText = i.splitText(s),
          _t112 = _i$splitText[0];
        _t112.insertAfter(l, !1);
      }
      ("" === i.getTextContent() && i.isAttached() && i.remove(),
        l.selectEnd(),
        l.isComposing() &&
          "text" === t.anchor.type &&
          t.anchor.set(
            t.anchor.key,
            t.anchor.offset - n.length,
            t.anchor.type,
          ));
    }
    var _ui = (function () {
      function ui(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto1 = ui.prototype;
      _proto1.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto1.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto1.is = function is(t) {
        if (!gi(t)) return !1;
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
        return new ui(new Set(this._nodes));
      };
      _proto1.extract = function extract() {
        return this.getNodes();
      };
      _proto1.insertRawText = function insertRawText(t) {};
      _proto1.insertText = function insertText() {};
      _proto1.insertNodes = function insertNodes(t) {
        var e = this.getNodes().filter(function (t) {
            return null === xu(t);
          }),
          n = e.length;
        if (0 === n) return;
        var o = e[n - 1];
        var r;
        if (Qr(o)) r = o.select();
        else {
          var _t113 = o.getIndexWithinParent() + 1;
          r = o.getParentOrThrow().select(_t113, _t113);
        }
        r.insertNodes(t);
        for (var _t114 = 0; _t114 < n; _t114++) e[_t114].remove();
      };
      _proto1.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = this._nodes,
          n = [];
        for (var _t115 of e) {
          var _e82 = oc(_t115);
          null !== _e82 && n.push(_e82);
        }
        return (fs() || (this._cachedNodes = n), n);
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
          return null === xu(t);
        });
        if ((Ki() || Bi()) === this && t[0]) {
          var _e83 = Xu(t[0], "next");
          il(uf(_e83, _e83));
        }
        for (var _e84 of t) _e84.remove();
        fi();
      };
      return ui;
    })();
    function fi() {
      var t = uc();
      if (0 === t.getChildrenSize() && null === vu(Ki())) {
        var _e85 = vl();
        (t.append(_e85), _e85.select());
      }
    }
    function di(t) {
      return t instanceof _hi;
    }
    var _hi = (function () {
      function hi(t, e, n, o) {
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
      var _proto10 = hi.prototype;
      _proto10.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto10.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto10.is = function is(t) {
        return (
          !!di(t) &&
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
            if (Ju(_n58)) {
              var _t116 = _n58.origin;
              0 === e.length ? r.add(_t116) : (i.add(_t116), e.push(_t116));
            } else {
              var _t117 = _n58.origin;
              (Bs(_t117) && i.has(_t117)) || e.push(_t117);
            }
          if (
            (o && e.push(o.caret.origin),
            Vu(t.focus) &&
              Bs(t.focus.origin) &&
              null === t.focus.getNodeAtCaret())
          )
            for (
              var _n59 = ef(t.focus.origin, "previous");
              Ju(_n59) &&
              r.has(_n59.origin) &&
              !_n59.origin.isEmpty() &&
              _n59.origin.is(e[e.length - 1]);
              _n59 = of(_n59)
            )
              (r["delete"](_n59.origin), e.pop());
          for (; e.length > 1; ) {
            var _t118 = e[e.length - 1];
            if (!Bs(_t118) || i.has(_t118) || _t118.isEmpty() || r.has(_t118))
              break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n60 = dl(t.anchor),
              _o36 = dl(t.anchor.getFlipped()),
              _r32 = function _r32(t) {
                return Hu(t) ? t.origin : t.getNodeAtCaret();
              },
              _i30 =
                _r32(_n60) ||
                _r32(_o36) ||
                (t.anchor.getNodeAtCaret() ? _n60.origin : _o36.origin);
            e.push(_i30);
          }
          return e;
        })(gl(ll(this), "next"));
        return (fs() || (this._cachedNodes = e), e);
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
          _yi = yi(this),
          s = _yi[0],
          l = _yi[1];
        var c = "",
          a = !0;
        for (var _u8 = 0; _u8 < t.length; _u8++) {
          var _f0 = t[_u8];
          if (Bs(_f0) && !_f0.isInline()) {
            a || (c += "\n");
            var _t119 = "";
            for (var _e86 of ku(_f0)) {
              var _n61 = bu(_f0, _e86);
              null !== _n61 && (_t119 += _n61.getTextContent());
            }
            "" !== _t119 ? ((c += _t119), (a = !1)) : (a = !_f0.isEmpty());
          } else if (((a = !1), Qr(_f0))) {
            var _t120 = _f0.getTextContent();
            (_f0 === e
              ? _f0 === n
                ? ("element" === o.type &&
                    "element" === r.type &&
                    r.offset !== o.offset) ||
                  (_t120 = s < l ? _t120.slice(s, l) : _t120.slice(l, s))
                : (_t120 = i ? _t120.slice(s) : _t120.slice(l))
              : _f0 === n &&
                (_t120 = i ? _t120.slice(0, l) : _t120.slice(0, s)),
              (c += _t120));
          } else
            (!Ws(_f0) && !Zs(_f0)) ||
              (_f0 === n && this.isCollapsed()) ||
              (c += _f0.getTextContent());
        }
        return c;
      };
      _proto10.applyDOMRange = function applyDOMRange(t) {
        var e = _s(),
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
          _e(this));
      };
      _proto10.clone = function clone() {
        var t = this.anchor,
          e = this.focus;
        return new hi(
          ii(t.key, t.offset, t.type),
          ii(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto10.toggleFormat = function toggleFormat(t) {
        ((this.format = ql(this.format, t, null)), (this.dirty = !0));
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
        this.insertNodes(Gi(t));
      };
      _proto10.insertText = function insertText(t) {
        var n = this.format,
          o = this.style;
        if (!this.isCollapsed()) {
          var _e87 = (
            this.focus.isBefore(this.anchor) ? this.focus : this.anchor
          ).getNode();
          if (
            (Qr(_e87) && ((n = _e87.getFormat()), (o = _e87.getStyle())),
            this.removeText(),
            (this.format = n),
            (this.style = o),
            "" === t)
          )
            return;
          if (null === nc())
            return (
              "element" === this.anchor.type &&
                ci(this.anchor, this.focus, n, o),
              void ai(this, t, n, o)
            );
        }
        "element" === this.anchor.type && ci(this.anchor, this.focus, n, o);
        var r = this.anchor.getNode();
        Qr(r) || e(398);
        var i = this.anchor.offset,
          s = r.getParentOrThrow(),
          l = r.getTextContentSize();
        if (
          Vl(r) ||
          (0 === i &&
            (!r.canInsertTextBefore() ||
              (!s.canInsertTextBefore() && !r.__prev))) ||
          (i === l &&
            (!r.canInsertTextAfter() || (!s.canInsertTextAfter() && !r.__next)))
        ) {
          if (r.isSegmented() && 0 !== i && i !== l) {
            if (null !== nc()) r.setMode("normal").setFormat(n).setStyle(o);
            else {
              var _t121 = Xr(r.getTextContent());
              (_t121.setFormat(n), _t121.setStyle(o));
              var _e88 = Ki() === this;
              (r.replace(_t121),
                this.setTextNodeRange(_t121, i, _t121, i),
                _e88 && Ki() !== this && dc(this));
            }
            return void ("" !== t && this.insertText(t));
          }
          if ("" === t) return;
          if (0 === i) {
            var _e89 = r.getPreviousSibling();
            if (Qr(_e89) && _e89.canInsertTextAfter() && !Vl(_e89))
              _e89.select();
            else {
              var _t122 = Xr();
              (_t122.setFormat(n),
                _t122.setStyle(o),
                s.canInsertTextBefore()
                  ? r.insertBefore(_t122)
                  : s.insertBefore(_t122),
                _t122.select());
            }
            return void this.insertText(t);
          }
          if (i === l) {
            var _e90 = r.getNextSibling();
            if (Qr(_e90) && _e90.canInsertTextBefore() && !Vl(_e90))
              _e90.select(0, 0);
            else {
              var _t123 = Xr();
              (_t123.setFormat(n),
                _t123.setStyle(o),
                s.canInsertTextAfter()
                  ? r.insertAfter(_t123)
                  : s.insertAfter(_t123),
                _t123.select(0, 0));
            }
            return void this.insertText(t);
          }
          var _e91 = Xr(t);
          return (
            _e91.setFormat(n),
            _e91.setStyle(o),
            r.replace(_e91),
            void _e91.select()
          );
        }
        if ("" === t) return;
        var c = s.isInline() && 0 === i && !r.__prev,
          a = s.isInline() && i === l && !r.__next,
          u = r.getFormat() !== n || r.getStyle() !== o;
        if (c || a || u) {
          if ("" !== r.getTextContent() || c || a)
            return void ai(this, t, n, o);
          (r.setFormat(n), r.setStyle(o));
        }
        (r.spliceText(i, 0, t, !0),
          r.isComposing() &&
            "text" === this.anchor.type &&
            this.anchor.set(
              this.anchor.key,
              this.anchor.offset - t.length,
              this.anchor.type,
            ));
      };
      _proto10.removeText = function removeText() {
        var t = Ki() === this,
          e = this.anchor.key;
        (sl(this, fl(ll(this))),
          this.isCollapsed() &&
            (function (t, e) {
              var n = t.anchor;
              if (n.key === e) return;
              var o = n.getNode();
              var r = 0,
                i = "";
              (Qr(o)
                ? ((r = o.getFormat()), (i = o.getStyle()))
                : Bs(o) && ((r = o.getTextFormat()), (i = o.getTextStyle())),
                (t.format === r && t.style === i) ||
                  ((t.format = r), (t.style = i), (t.dirty = !0)));
            })(this, e),
          t && Ki() !== this && dc(this));
      };
      _proto10.formatText = function formatText(t, e) {
        if (e === void 0) {
          e = null;
        }
        pi(this, t, e);
      };
      _proto10.insertNodes = function insertNodes(t) {
        var _i31;
        if (0 === t.length) return;
        this.isCollapsed() || this.removeText();
        var n = this.anchor.getNode();
        if (
          "element" === this.anchor.type &&
          Bs(n) &&
          n.isShadowRoot() &&
          null !== xu(n)
        ) {
          var _n$getFirstChild;
          var _o37 =
            (_n$getFirstChild = n.getFirstChild()) != null
              ? _n$getFirstChild
              : n.append(vl()).getFirstChild();
          if (null !== _o37 && !Bs(_o37)) {
            var _t124 = vl();
            (_o37.insertBefore(_t124), (_o37 = _t124));
          }
          if (null !== _o37) {
            _o37.selectStart();
            var _n62 = Ki();
            return (di(_n62) || e(369), _n62.insertNodes(t));
          }
        }
        if ("element" === this.anchor.type && Vc(n)) {
          var _e92 = ts(t),
            _o38 = _e92.getLastDescendant();
          return (
            n.splice(this.anchor.offset, 0, _e92.getChildren()),
            void (null !== _o38 && _o38.selectEnd())
          );
        }
        var o = this.isBackward() ? this.focus : this.anchor;
        var r = o.getNode(),
          i = hu(r, va);
        var s = t[t.length - 1];
        if (Bs(i) && "__language" in i) {
          if ("__language" in t[0]) this.insertText(t[0].getTextContent());
          else {
            var _Xi = Xi(this),
              _e93 = _Xi[1];
            (i.splice(_e93, 0, t), s.selectEnd());
          }
          return;
        }
        if (
          !t.some(function (t) {
            return (Bs(t) || Ws(t)) && !t.isInline();
          })
        ) {
          Bs(i) || e(211, r.constructor.name, r.getType());
          var _Xi2 = Xi(this, !0),
            _n63 = _Xi2[0],
            _o39 = _Xi2[1];
          return ((Bs(_n63) ? _n63 : i).splice(_o39, 0, t), void s.selectEnd());
        }
        if (Bs(i) && null !== xu(i)) {
          var _Xi3 = Xi(this),
            _e94 = _Xi3[1],
            _n64 = qi(t);
          i.splice(_e94, 0, _n64);
          var _o40 = _n64[_n64.length - 1];
          return void (void 0 !== _o40
            ? _o40.selectEnd()
            : i.select(_e94, _e94));
        }
        if (null === i) {
          var _e95 = ts(t),
            _n65 = _e95.getLastDescendant();
          var _o41 = ol(this.anchor, "next");
          for (var _t125 of _e95.getChildren()) _o41 = xl(_t125, _o41);
          return void (null !== _n65 && _n65.selectEnd());
        }
        if (Bs(i) && !i.isParentRequired() && !Vc(i.getParentOrThrow())) {
          var _Xi4 = Xi(this),
            _e96 = _Xi4[1],
            _n66 = qi(t);
          i.splice(_e96, 0, _n66);
          var _o42 = _n66[_n66.length - 1];
          return void (void 0 !== _o42
            ? _o42.selectEnd()
            : i.select(_e96, _e96));
        }
        var l = ts(t),
          c = l.getLastDescendant(),
          a = l.getChildren(),
          u = (function (t) {
            var e = (function (t) {
              var e = t.getNode();
              if (t.offset > 0)
                return "element" === t.type && Bs(e)
                  ? e.getChildAtIndex(t.offset - 1)
                  : null;
              for (
                var _t126 = e;
                null !== _t126 && !va(_t126) && !Vc(_t126);
                _t126 = _t126.getParent()
              ) {
                var _e97 = _t126.getPreviousSibling();
                if (null !== _e97) return _e97;
              }
              return null;
            })(t);
            return Zs(e) && Zs(e.getPreviousSibling());
          })(o),
          f = Bs(i) && i.isEmpty() ? null : this.insertParagraph();
        f && !i.isAttached() && ((r = this.anchor.getNode()), (i = hu(r, va)));
        var d = a[a.length - 1];
        var h = a[0];
        var g;
        ((g = h),
          u ||
            !Bs(g) ||
            !va(g) ||
            g.isEmpty() ||
            !Bs(i) ||
            (i.isEmpty() && !i.canMergeWhenEmpty()) ||
            (Bs(i) || e(211, r.constructor.name, r.getType()),
            (_i31 = i).append.apply(_i31, Array.from(h.getChildren())),
            (h = a[1])),
          h &&
            (null === i && e(212, r.constructor.name, r.getType()),
            (function (t, n) {
              var o = n.getParentOrThrow().getLastChild();
              var r = n;
              var i = [n];
              for (; r !== o; )
                (r.getNextSibling() || e(140),
                  (r = r.getNextSibling()),
                  i.push(r));
              var s = t;
              for (var _t127 of i) s = s.insertAfter(_t127);
            })(i, h)));
        var _ = hu(c, va),
          p = c.selectEnd();
        (f &&
          (Bs(_) && (f.canMergeWhenEmpty() || va(d))
            ? (_.append.apply(_, Array.from(f.getChildren())), f.remove())
            : f.isEmpty() && f.remove()),
          Bs(i) && i.isEmpty() && i.remove());
        var m = Bs(i) ? i.getLastChild() : null;
        Zs(m) && _ !== i && m.remove();
        var y = dl(ol(p.anchor, "next"));
        (rl(p.anchor, y), rl(p.focus, y));
      };
      _proto10.insertParagraph = function insertParagraph() {
        this.isCollapsed() || this.removeText();
        var t = this.anchor.getNode();
        if ("element" === this.anchor.type && Vc(t)) {
          var _e98 = vl();
          return (t.splice(this.anchor.offset, 0, [_e98]), _e98.select(), _e98);
        }
        var _Xi5 = Xi(this),
          n = _Xi5[1],
          o = hu(this.anchor.getNode(), va);
        if (null !== o && null !== xu(o)) return null;
        Bs(o) || e(213);
        var r = o.getChildAtIndex(n),
          i = r ? [r].concat(Array.from(r.getNextSiblings())) : [],
          s = o.insertNewAfter(this, !1);
        return s
          ? (s.append.apply(s, Array.from(i)), s.selectStart(), s)
          : null;
      };
      _proto10.insertLineBreak = function insertLineBreak(t) {
        var e = Qs();
        if ((this.insertNodes([e]), t)) {
          var _t128 = e.getParentOrThrow(),
            _n67 = e.getIndexWithinParent();
          _t128.select(_n67, _n67);
        }
      };
      _proto10.extract = function extract() {
        var _n$splitText;
        var t = [].concat(Array.from(this.getNodes())),
          e = t.length;
        var n = t[0],
          o = t[e - 1];
        var _yi2 = yi(this),
          r = _yi2[0],
          i = _yi2[1],
          s = this.isBackward(),
          _ref33 = s ? [this.focus, this.anchor] : [this.anchor, this.focus],
          l = _ref33[0],
          c = _ref33[1],
          _ref34 = s ? [i, r] : [r, i],
          a = _ref34[0],
          u = _ref34[1];
        if (0 === e) return [];
        if (1 === e) {
          if (Qr(n) && !this.isCollapsed()) {
            var _t129 = n.splitText(a, u),
              _e99 = 0 === a ? _t129[0] : _t129[1];
            return _e99
              ? (l.set(_e99.getKey(), 0, "text"),
                c.set(_e99.getKey(), _e99.getTextContentSize(), "text"),
                [_e99])
              : [];
          }
          return [n];
        }
        if (
          (Qr(n) &&
            (a === n.getTextContentSize()
              ? t.shift()
              : 0 !== a &&
                ((_n$splitText = n.splitText(a)),
                (n = _n$splitText[1]),
                (t[0] = n),
                l.set(n.getKey(), 0, "text"))),
          Qr(o))
        ) {
          var _o$splitText;
          var _e100 = o.getTextContent().length;
          0 === u
            ? t.pop()
            : u !== _e100 &&
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
          r = _s(),
          i = Zc(Wc(r));
        if (!i) return;
        var s = r._blockCursorElement,
          l = r._rootElement,
          c = this.focus.getNode();
        null === l ||
          null === s ||
          !Bs(c) ||
          c.isInline() ||
          c.canBeEmpty() ||
          Qc(s, r, l);
        var a = Fc(r, this.focus.key);
        var u = a;
        if (
          ("text" === this.focus.type && (u = Qr(c) ? Ea(c, a, r) : null),
          this.dirty)
        ) {
          var _t130 = Fc(r, this.anchor.key);
          var _e101 = _t130;
          if ("text" === this.anchor.type) {
            var _n68 = this.anchor.getNode();
            _e101 = Qr(_n68) ? Ea(_n68, _t130, r) : null;
          }
          _e101 && u && Hi(i, _e101, this.anchor.offset, u, this.focus.offset);
        }
        if (
          "character" === n &&
          Qr(c) &&
          c.isUnmergeable() &&
          (e
            ? 0 === this.focus.offset
            : this.focus.offset === c.getTextContentSize())
        ) {
          var _t131 = Xu(c, e ? "previous" : "next").getNodeAtCaret();
          if (Qr(_t131)) {
            if (!o) {
              var _n69 = _t131.getTextContentSize();
              return (
                e
                  ? this.focus.set(_t131.__key, _n69 - 1, "text")
                  : this.focus.set(_t131.__key, 1, "text"),
                void (this.dirty = !0)
              );
            }
            {
              var _n70 = r.getElementByKey(_t131.getKey()),
                _o43 = _n70 ? Ea(_t131, _n70, r) : null;
              if (_o43) {
                var _t132 = e ? _o43.length : 0;
                Hi(i, _o43, _t132, _o43, _t132);
              }
            }
          }
        }
        if ((Si(i, t, e ? "backward" : "forward", n, l), i.rangeCount > 0)) {
          var _t133 = la(i, r._rootElement),
            _n71 = _t133 || i.getRangeAt(0),
            _s17 = this.anchor.getNode(),
            _l10 = js(_s17) ? _s17 : jc(_s17);
          (this.applyDOMRange(_n71),
            (this.dirty = !0),
            o ||
              (Ti(this, e, _l10),
              (_t133
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
            Bs(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t134 = e.getParent(),
            _n72 =
              e.getNextSibling() ||
              (null === _t134 ? null : _t134.getNextSibling());
          if (Bs(_n72) && _n72.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto10.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e102 = this.anchor;
          var _n73 = _e102.getNode();
          if (this.forwardDeletion(_e102, _n73, t)) {
            var _t135 = Bs(_n73) ? _n73.getNextSibling() : null;
            if (
              !(Bs(_n73) && _n73.isEmpty() && Bs(_t135) && _t135.isShadowRoot())
            )
              return;
          }
          var _o44 = ol(_e102, t ? "previous" : "next"),
            _r33 = cf(_o44);
          if (
            _r33.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            if ("element" === _e102.type) {
              var _t136 = _o44.getNodeAtCaret();
              if (Bs(_t136) && Xc(_t136)) {
                var _e103 = _t136.getParent();
                _t136.remove();
                var _n74 = fc(_e103, _t136);
                return void (null !== _n74 && _n74.selectStart());
              }
            }
            var _t137 = { type: "initial" };
            for (var _e104 of _r33.iterNodeCarets("shadowRoot"))
              if (Ju(_e104)) {
                if (_e104.origin.isInline());
                else {
                  if (_e104.origin.isShadowRoot()) {
                    if ("merge-block" === _t137.type) break;
                    if (
                      Bs(_r33.anchor.origin) &&
                      _r33.anchor.origin.isEmpty()
                    ) {
                      var _t138 = dl(_e104);
                      (sl(this, uf(_t138, _t138)), _r33.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t137.type &&
                    "merge-block" !== _t137.type) ||
                    (_t137 = {
                      block: _t137.block,
                      caret: _e104,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t137.type) break;
                if (Vu(_e104)) {
                  if (Bs(_e104.origin)) {
                    if (_e104.origin.isInline()) {
                      if (!_e104.origin.isParentOf(_r33.anchor.origin)) break;
                    } else
                      _t137 = { block: _e104.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (Ws(_e104.origin)) {
                    if (_e104.origin.isIsolated());
                    else if (
                      "merge-next-block" === _t137.type &&
                      (_e104.origin.isKeyboardSelectable() ||
                        !_e104.origin.isInline()) &&
                      Bs(_r33.anchor.origin) &&
                      _r33.anchor.origin.isEmpty()
                    ) {
                      _r33.anchor.origin.remove();
                      var _t139 = Ri();
                      (_t139.add(_e104.origin.getKey()), dc(_t139));
                    } else {
                      var _t140 = _e104.origin,
                        _n75 = _t140.getParent();
                      _t140.remove();
                      var _o45 = fc(_n75, _t140);
                      null !== _o45 && _o45.selectStart();
                    }
                    return;
                  }
                  if (Zs(_e104.origin)) return void _e104.origin.remove();
                  break;
                }
              }
            if ("merge-block" === _t137.type) {
              var _t141 = _t137,
                _e105 = _t141.caret,
                _n76 = _t141.block;
              if (ku(_n76).length > 0) return;
              return _e105.origin.isEmpty() &&
                !_n76.isEmpty() &&
                _e105.origin.getParent() === _n76.getParent()
                ? void _e105.origin.remove(!0)
                : (sl(
                    this,
                    uf(
                      !_e105.origin.isEmpty() && _n76.isEmpty()
                        ? cl(Xu(_n76, _e105.direction))
                        : _r33.anchor,
                      _e105,
                    ),
                  ),
                  this.removeText());
            }
            for (var _t142 = _e102.getNode(); null !== _t142; ) {
              if (null !== xu(_t142)) return;
              if (Bs(_t142) && _t142.isShadowRoot()) break;
              _t142 = _t142.getParent();
            }
          }
          var _i32 = this.focus;
          if ((vi(this, t, "character"), this.isCollapsed())) {
            if (
              t &&
              0 === _e102.offset &&
              (function (t, e) {
                for (var _n77 = e; _n77; _n77 = _n77.getParent()) {
                  if (Bs(_n77)) {
                    if (_n77.collapseAtStart(t)) return !0;
                    if (Vc(_n77)) break;
                  }
                  if (_n77.getPreviousSibling()) break;
                }
                return !1;
              })(this, _e102.getNode())
            )
              return;
          } else {
            var _o46 = "text" === _i32.type ? _i32.getNode() : null;
            if (
              ((_n73 = "text" === _e102.type ? _e102.getNode() : null),
              null !== _o46 && _o46.isSegmented())
            ) {
              var _e106 = _i32.offset,
                _r34 = _o46.getTextContentSize();
              if (_o46.is(_n73) || (t && _e106 !== _r34) || (!t && 0 !== _e106))
                return void bi(_o46, t, _e106);
            } else if (null !== _n73 && _n73.isSegmented()) {
              var _r35 = _e102.offset,
                _i33 = _n73.getTextContentSize();
              if (_n73.is(_o46) || (t && 0 !== _r35) || (!t && _r35 !== _i33))
                return void bi(_n73, t, _r35);
            }
            !(function (t, e) {
              var n = t.anchor,
                o = t.focus,
                r = n.getNode();
              if (r === o.getNode() && "text" === n.type && "text" === o.type) {
                var _t143 = n.offset,
                  _s18 = o.offset,
                  _l11 = _t143 < _s18,
                  _c0 = _l11 ? _t143 : _s18,
                  _a8 = _l11 ? _s18 : _t143,
                  _u9 = _a8 - 1;
                _c0 !== _u9 &&
                  !_c((i = r.getTextContent().slice(_c0, _a8))) &&
                  !ki(i) &&
                  (e ? o.set(o.key, _u9, o.type) : n.set(n.key, _u9, n.type));
              }
              var i;
            })(this, t);
          }
        }
        (e || xi(this),
          this.removeText(),
          t &&
            !e &&
            this.isCollapsed() &&
            "element" === this.anchor.type &&
            0 === this.anchor.offset &&
            fi());
      };
      _proto10.deleteLine = function deleteLine(t) {
        var e = this.isCollapsed(),
          n = Mi(this.anchor);
        if (null !== n && Ws(Cu(n)))
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
            : hu(this.anchor.getNode(), va) !== hu(this.focus.getNode(), va)
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
          var _e107 = this.anchor,
            _n78 = _e107.getNode();
          if (this.forwardDeletion(_e107, _n78, t)) return;
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
        return (fs() || (this._cachedIsBackward = e), e);
      };
      _proto10.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return hi;
    })();
    function gi(t) {
      return t instanceof _ui;
    }
    function _i(t, e) {
      var _u$splitText, _h$splitText;
      if (gi(t)) {
        for (var _n79 of t.getNodes())
          $r(_n79) && _n79.setFormat(e(_n79.getFormat()));
        return;
      }
      if (t.isCollapsed()) return (t.setFormat(e(t.format)), void ec(null));
      var n = [];
      for (var _o47 of t.getNodes())
        Qr(_o47)
          ? n.push(_o47)
          : Bs(_o47)
            ? _o47.setTextFormat(e(_o47.getTextFormat()))
            : $r(_o47) && _o47.setFormat(e(_o47.getFormat()));
      var o = n.length;
      if (0 === o) return (t.setFormat(e(t.format)), void ec(null));
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
        var _n80 = e(u.getFormat());
        if (Vl(u) || (0 === f && g === u.getTextContentSize()))
          u.setFormat(_n80);
        else {
          var _t144 = u.splitText(f, g),
            _e108 = 0 === f ? _t144[0] : _t144[1];
          (_e108.setFormat(_n80),
            "text" === l.type && l.set(_e108.__key, 0, "text"),
            "text" === c.type && c.set(_e108.__key, g - f, "text"));
        }
        return void (t.format = _n80);
      }
      0 === f ||
        Vl(u) ||
        ((_u$splitText = u.splitText(f)), (u = _u$splitText[1]), (f = 0));
      var _ = e(u.getFormat());
      u.setFormat(_);
      var p = e(h.getFormat());
      g > 0 &&
        (g === h.getTextContentSize() ||
          Vl(h) ||
          ((_h$splitText = h.splitText(g)),
          (h = _h$splitText[0]),
          _h$splitText),
        h.setFormat(p));
      for (var _t145 = a + 1; _t145 < d; _t145++) {
        var _o48 = n[_t145];
        _o48.setFormat(e(_o48.getFormat()));
      }
      ("text" === l.type && l.set(u.__key, f, "text"),
        "text" === c.type && c.set(h.__key, g, "text"),
        (t.format = _ | p));
    }
    function pi(t, e, n) {
      if (n === void 0) {
        n = null;
      }
      var o = null === n && di(t) ? ql(t.format, e, null) : n;
      _i(t, function (t) {
        return ql(t, e, o);
      });
    }
    function mi(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function yi(t) {
      var e = t.getStartEndPoints();
      if (null === e) return [0, 0];
      var n = e[0],
        o = e[1];
      return "element" === n.type &&
        "element" === o.type &&
        n.key === o.key &&
        n.offset === o.offset
        ? [0, 0]
        : [mi(n), mi(o)];
    }
    function xi(t) {
      var e = uc();
      !e.isEmpty() &&
        Cl(e, t) &&
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
      var i = "character" === o ? aa(t, r) : null,
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
      var c = aa(t, r);
      c.focusNode === s && c.focusOffset === l && t.modify(e, n, o);
    }
    function Ti(t, e, n) {
      var o = t.getNodes(),
        r = o.filter(function (t) {
          return zc(t, n);
        });
      if (0 === r.length || r.length === o.length) return !1;
      var i = e ? r[0] : r[r.length - 1],
        s = Bs(i) ? i : i.getParentOrThrow();
      return (e ? s.selectStart() : s.selectEnd(), !0);
    }
    function vi(t, e, n) {
      if (es(t, "extend", e, n)) return;
      var o = _s(),
        r = Zc(Wc(o));
      if (!r || "function" != typeof r.modify) return;
      var i = o._blockCursorElement,
        s = o._rootElement,
        l = t.anchor,
        c = t.focus.getNode();
      null === s ||
        null === i ||
        !Bs(c) ||
        c.isInline() ||
        c.canBeEmpty() ||
        Qc(i, o, s);
      var a = function a(t) {
          var e = t.getNode(),
            n = o.getElementByKey(t.key);
          return null !== n && "text" === t.type && Qr(e) ? Ea(e, n, o) : n;
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
      var m = la(r, s) || r.getRangeAt(0);
      var y = m.startContainer,
        x = m.startOffset;
      if ("lineboundary" === n && Jl(y) && Ul(y) === o) {
        var _t146 = gc(y);
        if (Ws(_t146) && _t146.isInline() && !_t146.isIsolated()) {
          var _n81 = o.getElementByKey(_t146.getKey());
          null !== _n81 &&
            _n81.contains(y) &&
            ((y = _n81), (x = e ? 0 : _n81.childNodes.length));
        }
      }
      if (
        h &&
        "character" === n &&
        "text" === l.type &&
        Qr(u) &&
        u.isUnmergeable() &&
        d === (e ? 0 : u.getTextContentSize())
      ) {
        var _n82 = Xu(u, e ? "previous" : "next").getNodeAtCaret();
        if (Qr(_n82)) {
          var _o49 = e ? _n82.getTextContentSize() - 1 : 1;
          return (t.focus.set(_n82.__key, _o49, "text"), void (t.dirty = !0));
        }
      }
      if (h && "character" === n && "text" === l.type) {
        var _n83 = e ? 0 : u.getTextContentSize(),
          _o50 = y === f ? x : d !== _n83 ? _n83 : -1;
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
        N = js(u) ? u : jc(u);
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
        var _t147 = new RegExp("\\p{Emoji}", "u"),
          _e109 = _t147.test.bind(_t147);
        if (
          _e109("\u2764\ufe0f") &&
          _e109("#\ufe0f\u20e3") &&
          _e109("\u{1f44d}")
        )
          return _e109;
      } catch (t) {}
      return function () {
        return !1;
      };
    }
    var ki = Ni();
    function bi(t, e, n) {
      var o = t,
        r = o.getTextContent().split(/(?=\s)/g),
        i = r.length;
      var s = 0,
        l = 0;
      for (var _t148 = 0; _t148 < i; _t148++) {
        var _o51 = _t148 === i - 1;
        if (
          ((l = s), (s += r[_t148].length), (e && s === n) || s > n || _o51)
        ) {
          (r.splice(_t148, 1), _o51 && (l = void 0));
          break;
        }
      }
      var c = r.join("").trim();
      "" === c ? o.remove() : (o.setTextContent(c), o.select(l, l));
    }
    function Oi(t, n, o, r) {
      var i,
        s = n,
        l = !1;
      if (pa(t)) {
        var _c1 = !1;
        var _a9 = t.childNodes,
          _u0 = _a9.length,
          _f1 = r._blockCursorElement;
        (s === _u0 && _u0 > 0 && ((_c1 = !0), (s = _u0 - 1)),
          void 0 !== sc(t, r) || Ba(t, r) || (l = !0));
        var _d5 = _a9[s],
          _h7 = !1;
        if (_d5 === _f1) ((_d5 = _a9[s + 1]), (_h7 = !0));
        else if (null !== _f1) {
          var _e110 = _f1.parentNode;
          t === _e110 &&
            n > Array.prototype.indexOf.call(_e110.children, _f1) &&
            s--;
        }
        if (((i = gc(_d5)), Qr(i))) s = Zu(i, _c1 ? "next" : "previous");
        else {
          var _a0 = gc(t);
          if (null === _a0) return null;
          if (Bs(_a0)) {
            var _u1$resolveChildIndex;
            var _l12 = r.getElementByKey(_a0.getKey());
            null === _l12 && e(214);
            var _u1 = ba(_a0, _l12, r);
            ((_u1$resolveChildIndex = _u1.resolveChildIndex(_a0, _l12, t, n)),
              (_a0 = _u1$resolveChildIndex[0]),
              (s = _u1$resolveChildIndex[1]),
              Bs(_a0) || e(215),
              _c1 &&
                s >= _a0.getChildrenSize() &&
                (s = Math.max(0, _a0.getChildrenSize() - 1)));
            var _f10 = _a0.getChildAtIndex(s);
            if (
              Bs(_f10) &&
              (function (t, e, n) {
                var o = t.getParent();
                return (
                  null === n ||
                  null === o ||
                  !o.canBeEmpty() ||
                  o !== n.getNode()
                );
              })(_f10, 0, o)
            ) {
              var _t149 = _c1
                ? _f10.getLastDescendant()
                : _f10.getFirstDescendant();
              (null === _t149
                ? (_a0 = _f10)
                : ((_f10 = _t149),
                  (_a0 = Bs(_f10) ? _f10 : _f10.getParentOrThrow())),
                (s = 0));
            }
            Qr(_f10)
              ? ((i = _f10),
                (_a0 = null),
                (s = Zu(_f10, _c1 ? "next" : "previous")))
              : _f10 !== _a0 &&
                _c1 &&
                !_h7 &&
                (Bs(_a0) || e(216),
                (s = Math.min(_a0.getChildrenSize(), s + 1)));
          } else {
            var _e111 = Cu(_a0),
              _o52 = null !== _e111 ? _e111 : _a0,
              _i34 = _o52.getIndexWithinParent(),
              _l13 = r.getElementByKey(_a0.getKey());
            var _c10 = "after";
            if (null !== _l13 && gc(t) === _a0) {
              var _e112 = ba(_a0, _l13, r);
              _e112.element !== _l13
                ? (_c10 = _e112.resolveLeafPosition(_l13, t, n))
                : 0 === n && Ws(_a0) && (_c10 = "before");
            }
            ((s = "before" === _c10 ? _i34 : _i34 + 1),
              (_a0 = _o52.getParentOrThrow()));
          }
          if (Bs(_a0)) return [ii(_a0.__key, s, "element"), l];
        }
      } else i = gc(t);
      return Qr(i) ? [ii(i.__key, Zu(i, s, "clamp"), "text"), l] : null;
    }
    function Ei(t, e, n) {
      var o = t.offset,
        r = t.getNode();
      if (0 === o) {
        var _o53 = r.getPreviousSibling(),
          _i35 = r.getParent();
        if (e) {
          if ((n || !e) && null === _o53 && Bs(_i35) && _i35.isInline()) {
            var _e113 = _i35.getPreviousSibling();
            Qr(_e113) &&
              t.set(_e113.__key, _e113.getTextContent().length, "text");
          }
        } else
          Bs(_o53) && !n && _o53.isInline()
            ? t.set(_o53.__key, _o53.getChildrenSize(), "element")
            : Qr(_o53) &&
              !r.isUnmergeable() &&
              t.set(_o53.__key, _o53.getTextContent().length, "text");
      } else if (o === r.getTextContent().length) {
        var _o54 = r.getNextSibling(),
          _i36 = r.getParent();
        if (e && Bs(_o54) && _o54.isInline()) t.set(_o54.__key, 0, "element");
        else if (
          (n || e) &&
          null === _o54 &&
          Bs(_i36) &&
          _i36.isInline() &&
          !_i36.canInsertTextAfter() &&
          _i36.getTextContentSize() > 1
        ) {
          var _e114 = _i36.getNextSibling();
          Qr(_e114) && t.set(_e114.__key, 0, "text");
        }
      }
    }
    function Mi(t) {
      var e = oc(t.key);
      return null === e ? null : Tu(e);
    }
    function Ai(t, e, n) {
      var o = Mi(t),
        r = Mi(e);
      if (o === r || (null !== o && null !== r && o.is(r))) return !1;
      var i = n(o, r);
      if (null !== o)
        return (
          Bs(o)
            ? e.set(o.getKey(), i ? o.getChildrenSize() : 0, "element")
            : e.set(o.getKey(), i ? o.getTextContentSize() : 0, "text"),
          !0
        );
      var s = Cu(r);
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
            var _t150 = Cu(n),
              _e115 = Cu(o);
            if (null !== _t150 && _t150.is(_e115)) {
              for (var _e116 of Nu(_t150).values()) {
                if (_e116 === n.getKey()) return !0;
                if (_e116 === o.getKey()) return !1;
              }
              return !0;
            }
            return null === _t150 || null === _e115 || _t150.isBefore(_e115);
          }
          if (null !== n) {
            var _t151 = Cu(n),
              _o55 = oc(e.key);
            return (
              null === _t151 ||
              null === _o55 ||
              !(!_t151.is(_o55) && !_t151.isParentOf(_o55)) ||
              _t151.isBefore(_o55)
            );
          }
          var r = Cu(o),
            i = oc(t.key);
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
      if (null === t || null === n || !$l(r, t, n)) return null;
      var s = Oi(t, e, di(i) ? i.anchor : null, r);
      if (null === s) return null;
      var l = Oi(n, o, di(i) ? i.focus : null, r);
      if (null === l) return null;
      var c = s[0],
        a = s[1],
        u = l[0],
        f = l[1];
      if ("element" === c.type && "element" === u.type) {
        var _e117 = gc(t),
          _o56 = gc(n);
        if (Ws(_e117) && Ws(_o56)) return null;
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
            var _n84 = t.isBefore(e),
              _o57 = t.is(e);
            (Ei(t, _n84, _o57),
              Ei(e, !_n84, _o57),
              _o57 && e.set(t.key, t.offset, t.type));
          }
        })(c, u),
        [c, u, a || f || d]
      );
    }
    function Fi(t) {
      return Bs(t) && !t.isInline();
    }
    function Ii(t, e, n, o, r, i) {
      var s = gs(),
        l = new _hi(ii(t, e, r), ii(n, o, i), 0, "");
      return ((l.dirty = !0), (s._selection = l), l);
    }
    function Pi() {
      var t = ii("root", 0, "element"),
        e = ii("root", 0, "element");
      return new _hi(t, e, 0, "");
    }
    function Ri() {
      return new _ui(new Set());
    }
    function Li(t, e, n, o) {
      var r = n._window;
      if (null === r) return null;
      var i = o || r.event,
        s = i ? i.type : void 0,
        l = "selectionchange" === s,
        c =
          !st &&
          (l ||
            "beforeinput" === s ||
            "compositionstart" === s ||
            "compositionend" === s ||
            ("click" === s && i && 3 === i.detail) ||
            "drop" === s ||
            void 0 === s);
      var a, u, f, d;
      if (di(t) && !c) return t.clone();
      {
        if (null === e) return null;
        var _o58 = aa(e, n._rootElement);
        if (
          ((a = _o58.anchorNode),
          (u = _o58.focusNode),
          (f = _o58.anchorOffset),
          (d = _o58.focusOffset),
          (l || void 0 === s) && di(t) && !$l(n, a, u))
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
      if (di(t)) {
        var _e118 = t.anchor;
        if (g.key === _e118.key) ((m = t.format), (y = t.style));
        else {
          var _t152 = g.getNode();
          Qr(_t152)
            ? ((m = _t152.getFormat()), (y = _t152.getStyle()))
            : Bs(_t152) &&
              ((m = _t152.getTextFormat()), (y = _t152.getTextStyle()));
        }
      }
      var x = new _hi(g, _, m, y);
      return (p && (x.dirty = !0), x);
    }
    function Ki() {
      return gs()._selection;
    }
    function Bi() {
      return _s()._editorState._selection;
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
        var _e119 = r.offset;
        if ((n <= _e119 && o > 0) || (n < _e119 && o < 0)) {
          var _n85 = Math.max(0, _e119 + o);
          (r.set(s, _n85, "element"), i.set(s, _n85, "element"), Wi(t));
        }
      } else {
        var _l14 = t.isBackward(),
          _c11 = _l14 ? i : r,
          _a1 = _c11.getNode(),
          _u10 = _l14 ? r : i,
          _f11 = _u10.getNode();
        if (e.is(_a1)) {
          var _t153 = _c11.offset;
          ((n <= _t153 && o > 0) || (n < _t153 && o < 0)) &&
            _c11.set(s, Math.max(0, _t153 + o), "element");
        }
        if (e.is(_f11)) {
          var _t154 = _u10.offset;
          ((n <= _t154 && o > 0) || (n < _t154 && o < 0)) &&
            _u10.set(s, Math.max(0, _t154 + o), "element");
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
        if (!Bs(i)) return;
        var _t155 = i.getChildrenSize(),
          _r36 = n >= _t155,
          _s19 = _r36 ? i.getChildAtIndex(_t155 - 1) : i.getChildAtIndex(n);
        if (Qr(_s19)) {
          var _t156 = 0;
          (_r36 && (_t156 = _s19.getTextContentSize()),
            e.set(_s19.__key, _t156, "text"),
            o.set(_s19.__key, _t156, "text"));
        }
        return;
      }
      if (Bs(i)) {
        var _t157 = i.getChildrenSize(),
          _o59 = n >= _t157,
          _r37 = _o59 ? i.getChildAtIndex(_t157 - 1) : i.getChildAtIndex(n);
        if (Qr(_r37)) {
          var _t158 = 0;
          (_o59 && (_t158 = _r37.getTextContentSize()),
            e.set(_r37.__key, _t158, "text"));
        }
      }
      if (Bs(s)) {
        var _t159 = s.getChildrenSize(),
          _e120 = r >= _t159,
          _n86 = _e120 ? s.getChildAtIndex(_t159 - 1) : s.getChildAtIndex(r);
        if (Qr(_n86)) {
          var _t160 = 0;
          (_e120 && (_t160 = _n86.getTextContentSize()),
            o.set(_n86.__key, _t160, "text"));
        }
      }
    }
    function Ui(t, e, n, o, r) {
      var i = null,
        s = 0,
        l = null;
      (null !== o
        ? ((i = o.__key),
          Qr(o)
            ? ((s = o.getTextContentSize()), (l = "text"))
            : Bs(o) && ((s = o.getChildrenSize()), (l = "element")))
        : null !== r &&
          ((i = r.__key), Qr(r) ? (l = "text") : Bs(r) && (l = "element")),
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
      var o = Fc(t, e.getKey());
      if (Bs(e)) {
        var _r38 = ba(e, o, t);
        return [_r38.element, n + _r38.getFirstChildOffset()];
      }
      return [o, n];
    }
    function Ji(t, e, n, o, r, i) {
      var s = i.getRootNode(),
        l = Yl(s) || ea(s) ? ga(s) : null;
      if ((r.has(pr) && l !== i) || (null !== l && Bl(l, l))) return;
      var c = aa(o, i);
      var a;
      if (!di(e))
        return void (
          null !== t &&
          $l(n, c.anchorNode, c.focusNode) &&
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
          ? ((T = Qr(h) ? Ea(h, _, n) : null),
            (N = h.getFormat() !== x || h.getStyle() !== C))
          : di(t) && "text" === t.anchor.type && (N = !0),
        "text" === d.type && (v = Qr(g) ? Ea(g, m, n) : null),
        null !== T && null !== v)
      ) {
        if (
          (S &&
            (null === t || N || (di(t) && (t.format !== x || t.style !== C))) &&
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
            var _t161 = null !== l ? Ul(l) : null;
            (null !== _t161 && _t161 !== n) ||
              r.has(xr) ||
              i.focus({ preventScroll: !0 });
          }
          if ("element" !== f.type) return;
        }
        if (
          (Hi(o, T, p, v, y), u && e.isCollapsed() && null !== i && !r.has(xr))
        ) {
          var _t162 = ha(i);
          if (null === _t162 || !i.contains(_t162)) {
            var _t163 = ga(i.ownerDocument),
              _e121 = null !== _t163 ? Ul(_t163) : null;
            (null !== _e121 && _e121 !== n) || i.focus({ preventScroll: !0 });
          }
        }
        if (!r.has(mr) && e.isCollapsed() && null !== i && i === ha(i)) {
          var _t164 =
            di(e) && "element" === e.anchor.type
              ? (function (t, e, n) {
                  var o = e.childNodes[n];
                  if (!pa(o)) return o || null;
                  var r = sc(o, t),
                    i = void 0 !== r ? oc(r) : null;
                  return null === i || Bs(i) ? o : ba(i, o, t).element;
                })(n, T, p)
              : (void 0 === a && (a = ca(o, i)), a);
          if (null !== _t164) {
            var _e122;
            if (Jl(_t164)) {
              var _n87 = _t164.ownerDocument.createRange();
              (_n87.selectNode(_t164), (_e122 = _n87.getBoundingClientRect()));
            } else
              _e122 = pa(_t164)
                ? _t164.getBoundingClientRect()
                : (function (t) {
                    var e = t.getBoundingClientRect(),
                      n = t.startContainer,
                      o = t.startOffset;
                    if (
                      !t.collapsed ||
                      0 !== e.width ||
                      0 !== e.height ||
                      !Jl(n) ||
                      0 === n.length
                    )
                      return e;
                    var r = t.cloneRange();
                    return (
                      o > 0 ? r.setStart(n, o - 1) : r.setEnd(n, 1),
                      r.getBoundingClientRect()
                    );
                  })(_t164);
            !(function (t, e, n, o) {
              if (o === void 0) {
                o = null;
              }
              var r = Pc(n),
                i = $c(r);
              if (null === r || null === i) return;
              var s = n.getBoundingClientRect();
              if (e.bottom < s.top) return;
              if (null !== o && e.height > 0) {
                var _t165 = e.left,
                  _r39 = e.right,
                  _s20 = pa(o) ? o : Ic(o);
                for (; null !== _s20 && n.contains(_s20); ) {
                  var _e123 = Lc(i, _s20, _t165, _r39);
                  ((_t165 -= _e123),
                    (_r39 -= _e123),
                    (_s20 = _s20 === n ? null : Ic(_s20)));
                }
              }
              var l = e.top,
                c = e.bottom,
                a = 0,
                u = 0,
                f = n;
              for (; null !== f; ) {
                var _e124 = f === r.body;
                if (_e124) {
                  var _e125 = i.visualViewport;
                  if (_e125) {
                    var _t166 = _e125.offsetTop;
                    ((a = _t166), (u = _t166 + _e125.height));
                  } else ((a = 0), (u = Wc(t).innerHeight));
                  var _n88 = i.getComputedStyle(r.documentElement),
                    _o60 = parseFloat(_n88.scrollPaddingTop),
                    _s21 = parseFloat(_n88.scrollPaddingBottom);
                  (isFinite(_o60) && (a += _o60),
                    isFinite(_s21) && (u -= _s21));
                } else {
                  var _t167 = f === n ? s : f.getBoundingClientRect();
                  ((a = _t167.top), (u = _t167.bottom));
                }
                var _o61 = 0;
                if (
                  (l < a ? (_o61 = -(a - l)) : c > u && (_o61 = c - u),
                  0 !== _o61)
                )
                  if (_e124) i.scrollBy(0, _o61);
                  else {
                    var _t168 = f.scrollTop;
                    f.scrollTop += _o61;
                    var _e126 = f.scrollTop - _t168;
                    ((l -= _e126), (c -= _e126));
                  }
                if (_e124) break;
                f = Ic(f);
              }
            })(n, _e122, i, T);
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
      for (var _n89 of t.split(/(\r?\n|\t)/))
        "\n" === _n89 || "\r\n" === _n89
          ? e.linebreak()
          : "\t" === _n89
            ? e.tab()
            : "" !== _n89 && e.text(_n89);
    }
    function Gi(t) {
      var e = [];
      return (
        Yi(t, {
          linebreak: function linebreak() {
            return e.push(Qs());
          },
          tab: function tab() {
            return e.push(ni());
          },
          text: function text(t) {
            return e.push(Xr(t));
          },
        }),
        e
      );
    }
    function qi(t) {
      var e = [];
      for (var _n90 of t)
        Zs(_n90) ||
          ((!Bs(_n90) && !Ws(_n90)) || _n90.isInline()
            ? e.push(_n90)
            : Bs(_n90) && e.push.apply(e, Array.from(qi(_n90.getChildren()))));
      return e;
    }
    function Xi(t, n) {
      if (n === void 0) {
        n = !1;
      }
      var o = t;
      t.isCollapsed() || o.removeText();
      var r = Ki();
      (di(r) && (o = r), di(o) || e(161));
      var i = o.anchor;
      var s = i.getNode(),
        l = i.offset;
      for (; !va(s) && null === xu(s); ) {
        var _Qi;
        var _t169 = s;
        if (((_Qi = Qi(s, l, n)), (s = _Qi[0]), (l = _Qi[1]), _t169.is(s)))
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
        var _t170 = vl();
        return (uc().append(_t170), _t170.select(), [uc(), 0]);
      }
      if (Qr(t)) {
        var _n91 = t.splitText(e);
        if (0 === _n91.length) return [o, t.getIndexWithinParent()];
        var _r40 = 0 === e ? 0 : 1;
        return [o, _n91[0].getIndexWithinParent() + _r40];
      }
      if (!Bs(t) || 0 === e) return [o, t.getIndexWithinParent()];
      var r = t.getChildAtIndex(e);
      if (r) {
        var _o62 = new _hi(
            ii(t.__key, e, "element"),
            ii(t.__key, e, "element"),
            0,
            "",
          ),
          _i37 = t.insertNewAfter(_o62);
        if (_i37)
          _i37.append.apply(_i37, [r].concat(Array.from(r.getNextSiblings())));
        else if (n) return [t, e];
      }
      return [o, t.getIndexWithinParent() + 1];
    }
    function Zi(t) {
      return Zs(t) || Uc(t) || Qr(t) || t.isParentRequired();
    }
    function ts(t) {
      var e = vl();
      var n = null;
      for (var _o63 = 0; _o63 < t.length; _o63++) {
        var _r41 = t[_o63];
        if (Zi(_r41)) {
          if (null === n) {
            ((n = _r41.createParentElementNode()), e.append(n));
            var _i38 = t[_o63 + 1];
            if (Zs(_r41) && (void 0 === _i38 || !Zi(_i38))) continue;
          }
          n.append(_r41);
        } else (e.append(_r41), (n = null));
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
          _e127 = _ref36[0],
          _o64 = _ref36[1];
        return (_o64.set(_e127.key, _e127.offset, _e127.type), !0);
      }
      var i = ol(t.focus, n ? "previous" : "next"),
        s = "lineboundary" === o,
        l = "move" === e;
      var c = i,
        a = "decorators-and-blocks" === r,
        u = !1;
      if (!hl(c)) {
        for (var _t171 of c) {
          a = !1;
          var _e128 = _t171.origin;
          if (Ws(_e128)) {
            if (_e128.isIsolated()) {
              u = !0;
              break;
            }
            if (((c = _t171), s && _e128.isInline())) continue;
          }
          break;
        }
        if (u) return !0;
        if (a)
          for (var _t172 of cf(i).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (Ju(_t172)) _t172.origin.isInline() || (c = _t172);
            else {
              if (Bs(_t172.origin)) continue;
              Ws(_t172.origin) && !_t172.origin.isInline() && (c = _t172);
            }
            break;
          }
      }
      if (c === i) return !1;
      if (l && !s && Ws(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t173 = Ri();
        return (_t173.add(c.origin.getKey()), dc(_t173), !0);
      }
      return ((c = dl(c)), l && rl(t.anchor, c), rl(t.focus, c), a || !s);
    }
    var ns = null,
      os = null,
      rs = !1,
      is = !1,
      ss = !1;
    var ls = new Set(),
      cs = new Set();
    var as = 0;
    var us = { characterData: !0, childList: !0, subtree: !0 };
    function fs() {
      return rs || (null !== ns && ns._readOnly);
    }
    function ds() {
      rs && e(13);
    }
    function hs() {
      as > 99 && e(14);
    }
    function gs() {
      return (null === ns && e(195, ms()), ns);
    }
    function _s() {
      return (null === os && e(337, ms()), os);
    }
    function ps() {
      _s()._dirtyType = 2;
    }
    function ms() {
      var t = 0;
      var e = new Set(),
        n = _wl.version;
      if ("undefined" != typeof window)
        for (var _o65 of ra(document)) {
          var _r42 = jl(_o65);
          if (Wl(_r42)) t++;
          else if (_r42) {
            var _t174 = String(_r42.constructor.version || "<0.17.1");
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
    function ys() {
      return os;
    }
    function xs(t, e, n) {
      var o = e.__type,
        r = Rl(t, o);
      var i = n.get(o);
      void 0 === i && ((i = Array.from(r.transforms)), n.set(o, i));
      var s = i.length;
      for (var _t175 = 0; _t175 < s && (i[_t175](e), e.isAttached()); _t175++);
    }
    function Cs(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function Ss(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var o = e;
      Array.isArray(e) || (o = [e]);
      for (var _t176 of o) n.add(_t176);
    }
    function Ts(t, n) {
      var o = t.type,
        r = n.get(o);
      void 0 === r && e(17, o);
      var i = r.klass;
      t.type !== i.getType() && e(18, i.name);
      var s = i.importJSON(t),
        l = t.children;
      if (Bs(s) && Array.isArray(l))
        for (var _t177 = 0; _t177 < l.length; _t177++) {
          var _e129 = Ts(l[_t177], n);
          s.append(_e129);
        }
      var c = t.$slots;
      if (c) {
        mu(s) || e(379, i.name);
        for (var _t178 in c) Pu(s, _t178, Ts(c[_t178], n));
      }
      return s;
    }
    function vs(t, e, n) {
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
    function Ns(e, n) {
      var o = ss;
      ss = !0;
      try {
        var _o66 = (function (t) {
          if (cs.has(t)) return !1;
          cs.add(t);
          try {
            for (var _e130 = 0; null !== t._pendingEditorState; _e130++) {
              var _n92 = t._pendingEditorState._selection,
                _o67 = t._rootElement;
              if (!bs(t, _n92)) return !1;
              var _r43 =
                (null === _n92 || di(_n92)) &&
                (t._headless || null === _o67 || !_o67.isConnected);
              if (_r43 || 100 === _e130)
                return (
                  (t._lastNotifiedSelection =
                    null === _n92 ? null : _n92.clone()),
                  !_r43
                );
              As(
                t,
                function () {
                  return t.dispatchCommand(yn);
                },
                void 0,
                !0,
              );
            }
            return !1;
          } finally {
            cs["delete"](t);
          }
        })(e);
        (!(function (e, n) {
          var o = e._pendingEditorState,
            r = e._rootElement,
            i = e._headless || null === r;
          if (null === o)
            return void (
              !e._updating &&
              e._deferred.length > 0 &&
              Es(e, e._deferred)
            );
          var s = e._editorState,
            l = s._selection,
            c = o._selection,
            a = 0 !== e._dirtyType,
            u = ns,
            f = rs,
            d = os,
            h = e._updating,
            g = e._observer;
          var _ = null;
          if (
            ((e._pendingEditorState = null),
            (e._editorState = o),
            !i && a && null !== g)
          ) {
            ((os = e), (ns = o), (rs = !1), (e._updating = !0));
            try {
              var _t179 = e._dirtyType,
                _n93 = e._dirtyElements,
                _r44 = e._dirtyLeaves;
              (g.disconnect(), (_ = gn(s, o, e, _t179, _n93, _r44)));
            } catch (t) {
              if ((t instanceof Error && e._onError(t), is)) throw t;
              return (
                bl(e, null, r, o),
                _t(e),
                (e._dirtyType = 2),
                (is = !0),
                Ns(e, s),
                void (is = !1)
              );
            } finally {
              (g.observe(r, us),
                (e._updating = h),
                (ns = u),
                (rs = f),
                (os = d));
            }
          }
          o._readOnly || (o._readOnly = !0);
          var p = e._dirtyLeaves,
            m = e._dirtyElements,
            y = e._normalizedNodes,
            x = e._updateTags;
          (a &&
            ((e._dirtyType = 0),
            e._cloneNotNeeded.clear(),
            (e._dirtyLeaves = new Set()),
            (e._dirtyElements = new Map()),
            (e._normalizedNodes = new Set())),
            (e._updateTags = new Set()));
          var C = e._deferred;
          (h || (e._deferred = []),
            (function (t, e) {
              var n = t._decorators;
              var o = t._pendingDecorators || n;
              var r = e._nodeMap;
              var i;
              for (i in o) r.has(i) || (o === n && (o = cc(t)), delete o[i]);
            })(e, o));
          var S = i ? null : Zc(Wc(e));
          if (
            e._editable &&
            null !== S &&
            (a || null === c || c.dirty || !c.is(l)) &&
            null !== r &&
            !x.has(yr)
          ) {
            ((os = e), (ns = o));
            try {
              if ((null !== g && g.disconnect(), a || null === c || c.dirty)) {
                var _t180 = e._blockCursorElement;
                (null !== _t180 && Qc(_t180, e, r), Ji(l, c, e, S, x, r));
              }
              !(function (t, e, n) {
                var o = t._blockCursorElement;
                if (
                  di(n) &&
                  n.isCollapsed() &&
                  "element" === n.anchor.type &&
                  e.contains(ha(e))
                ) {
                  var _r45 = n.anchor,
                    _i39 = _r45.getNode(),
                    _s22 = _r45.offset;
                  var _l15 = !1,
                    _c12 = null;
                  if (_s22 === _i39.getChildrenSize())
                    Xc(_i39.getChildAtIndex(_s22 - 1)) && (_l15 = !0);
                  else {
                    var _e131 = _i39.getChildAtIndex(_s22);
                    null !== _e131 &&
                      Xc(_e131) &&
                      ((_l15 = !0), (_c12 = t.getElementByKey(_e131.__key)));
                  }
                  if (_l15) {
                    var _n94 = ba(
                      _i39,
                      t.getElementByKey(_i39.__key),
                      t,
                    ).element;
                    return (
                      null === o &&
                        (t._blockCursorElement = o =
                          (function (t) {
                            var e = t.theme,
                              n = sa().createElement("div");
                            ((n.contentEditable = "false"),
                              n.setAttribute("data-lexical-cursor", "true"));
                            var o = e.blockCursor;
                            if (void 0 !== o) {
                              var _n$classList;
                              if ("string" == typeof o) {
                                var _t181 = mf(o);
                                o = e.blockCursor = _t181;
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
                        ? _n94.appendChild(o)
                        : _n94.insertBefore(o, _c12))
                    );
                  }
                }
                null !== o && Qc(o, t, e);
              })(e, r, c);
            } finally {
              (null !== g && g.observe(r, us), (os = d), (ns = u));
            }
          }
          null !== _ &&
            (function (t, e, n, o, r) {
              var i = Array.from(t._listeners.mutation),
                s = i.length;
              for (var _t182 = 0; _t182 < s; _t182++) {
                var _i$_t = i[_t182],
                  _s23 = _i$_t[0],
                  _l16 = _i$_t[1];
                for (var _t183 of _l16) {
                  var _i40 = e.get(_t183);
                  void 0 !== _i40 &&
                    _s23(_i40, {
                      dirtyLeaves: o,
                      prevEditorState: r,
                      updateTags: n,
                    });
                }
              }
            })(e, _, x, p, s);
          var T = e._pendingDecorators;
          (null !== T &&
            ((e._decorators = T),
            (e._pendingDecorators = null),
            ks("decorator", e, !0, T)),
            (function (t, e, n) {
              var o = ac(e),
                r = ac(n);
              o !== r && ks("textcontent", t, !0, r);
            })(e, n || s, o),
            ks("update", e, !0, {
              dirtyElements: m,
              dirtyLeaves: p,
              editorState: o,
              mutatedNodes: _,
              normalizedNodes: y,
              prevEditorState: n || s,
              tags: x,
            }),
            h || Es(e, C),
            (function (e) {
              var n = e._updates;
              if (0 === n.length) return void (e._cascadeCount = 0);
              if (
                ((function (t) {
                  ls.has(t) ||
                    (ls.add(t),
                    setTimeout(function () {
                      (ls["delete"](t), (t._cascadeCount = 0));
                    }, 0));
                })(e),
                e._cascadeCount++ > 99)
              )
                return (
                  (e._updates = []),
                  (e._cascadeCount = 0),
                  void e._onWarn(t(437, e._config.namespace))
                );
              var o = n.shift();
              if (o) {
                var _t184 = o[0],
                  _n95 = o[1];
                As(e, _t184, _n95);
              }
            })(e));
        })(e, n),
          _o66 && e._onWarn(t(436)));
      } finally {
        ss = o;
      }
    }
    function ks(t, e, n) {
      var r = e._updating;
      e._updating = n;
      try {
        var _n96 = e._listeners[t],
          _r46 = Array.from(_n96);
        for (
          var _len5 = arguments.length,
            o = new Array(_len5 > 3 ? _len5 - 3 : 0),
            _key5 = 3;
          _key5 < _len5;
          _key5++
        ) {
          o[_key5 - 3] = arguments[_key5];
        }
        for (var _ref38 of _r46) {
          var _t185 = _ref38[0];
          var _e132 = _ref38[1];
          {
            _e132 && _e132();
            var _r47 = _t185.apply(void 0, Array.from(o)),
              _i41 = "function" == typeof _r47 ? _r47 : void 0;
            _n96.has(_t185) ? _n96.set(_t185, _i41) : _i41 && _i41();
          }
        }
      } finally {
        e._updating = r;
      }
    }
    function bs(t, e) {
      var n = t._lastNotifiedSelection;
      return null === e ? null !== n : !e.is(n);
    }
    function Os(t, e, n, o) {
      var r = pc(t);
      var i;
      if (!ss)
        for (var _t186 = 0; _t186 < r.length; _t186++)
          r[_t186]._updating || (r[_t186]._cascadeCount = 0);
      if (e === yn) {
        if (os !== t || rs) {
          var _r48 = !1;
          return (
            ws(t, function () {
              _r48 = Os(t, e, n, o);
            }),
            _r48
          );
        }
        var _r49 = gs()._selection;
        t._lastNotifiedSelection = null === _r49 ? null : _r49.clone();
      }
      for (var _t187 = 4; _t187 >= 0; _t187--) {
        var _loop2 = function _loop2() {
            var l = r[_s24];
            if (_s24 > 0 && l._updating) {
              i = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e133 = c[_t187];
              if (_e133.size > 0) {
                var _t188 = !1;
                if (
                  (ws(l, function () {
                    for (var _r50 of _e133)
                      if (_r50(n, o)) return void (_t188 = !0);
                  }),
                  _t188)
                )
                  return { v: _t188 };
              }
            }
          },
          _ret;
        for (var _s24 = 0; _s24 < r.length; _s24++) {
          _ret = _loop2();
          if (_ret === 0) break;
          if (_ret) return _ret.v;
        }
      }
      return (
        i &&
          i.update(function () {
            Os(i, e, n, o);
          }),
        !1
      );
    }
    function Es(t, e) {
      if ((t._deferred === e && (t._deferred = []), 0 !== e.length)) {
        var _n97 = t._updating;
        t._updating = !0;
        try {
          for (var _t189 = 0; _t189 < e.length; _t189++) e[_t189]();
        } finally {
          t._updating = _n97;
        }
      }
    }
    function Ms(t, n) {
      var o = t._updates;
      var r = n || !1;
      for (; 0 !== o.length; ) {
        var _n98 = o.shift();
        if (_n98) {
          var _o68 = _n98[0],
            _i42 = _n98[1],
            _s25 = t._pendingEditorState;
          var _l17 = void 0;
          (void 0 !== _i42 &&
            ((_l17 = _i42.onUpdate),
            _i42.skipTransforms && (r = !0),
            _i42.discrete && (null === _s25 && e(191), (_s25._flushSync = !0)),
            _l17 && t._deferred.push(_l17),
            Ss(t, _i42.tag)),
            null == _s25 ? As(t, _o68, _i42) : _o68());
        }
      }
      return r;
    }
    function As(t, n, o, r) {
      if (r === void 0) {
        r = !1;
      }
      var i = t._updateTags;
      var s,
        l = !1,
        c = !1;
      (void 0 !== o &&
        ((s = o.onUpdate),
        Ss(t, o.tag),
        (l = o.skipTransforms || !1),
        (c = o.discrete || !1)),
        s && t._deferred.push(s));
      var a = t._editorState;
      var u = t._pendingEditorState,
        f = !1;
      ((null === u || u._readOnly) &&
        ((u = t._pendingEditorState = Hs(u || a)), (f = !0)),
        (u._flushSync = c));
      var d = ns,
        h = rs,
        g = os,
        _ = t._updating;
      ((ns = u), (rs = !1), (t._updating = !0), (os = t));
      var p = t._headless || null === t.getRootElement();
      Fl(null);
      try {
        f &&
          (p
            ? null !== a._selection && (u._selection = a._selection.clone())
            : (u._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  o = Zc(Wc(t));
                return di(n) || null == n ? Li(n, o, t, e) : n.clone();
              })(t, (o && o.event) || null)));
        var _r51 = t._compositionKey;
        (n(),
          (l = Ms(t, l)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              o = t._selection;
            if (di(o)) {
              var _t190 = o.anchor,
                _e134 = o.focus;
              var _r52;
              if (
                ("text" === _t190.type &&
                  ((_r52 = _t190.getNode()), _r52.selectionTransform(n, o)),
                "text" === _e134.type)
              ) {
                var _t191 = _e134.getNode();
                _r52 !== _t191 && _t191.selectionTransform(n, o);
              }
            }
          })(u, t),
          0 !== t._dirtyType &&
            (l
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = t._nodeMap;
                  for (var _t192 of n) {
                    var _e135 = o.get(_t192);
                    Qr(_e135) &&
                      _e135.isAttached() &&
                      _e135.isSimpleText() &&
                      !_e135.isUnmergeable() &&
                      ge(_e135);
                  }
                })(u, t)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = e._dirtyElements,
                    r = t._nodeMap,
                    i = nc(),
                    s = new Map();
                  var l = n,
                    c = l.size,
                    a = o,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t193 of l) {
                        var _o69 = r.get(_t193);
                        (Qr(_o69) &&
                          _o69.isAttached() &&
                          _o69.isSimpleText() &&
                          !_o69.isUnmergeable() &&
                          ge(_o69),
                          void 0 !== _o69 && Cs(_o69, i) && xs(e, _o69, s),
                          n.add(_t193));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        as++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t194 of a) {
                      var _n99 = _t194[0],
                        _l18 = _t194[1];
                      if ((o.set(_n99, _l18), !_l18)) continue;
                      var _c13 = r.get(_n99);
                      void 0 !== _c13 && Cs(_c13, i) && xs(e, _c13, s);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      as++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = o));
                })(u, t),
            Ms(t),
            (function (t, e, n, o) {
              var r = t._nodeMap,
                i = e._nodeMap,
                s = [];
              for (var _ref40 of o) {
                var _t195 = _ref40[0];
                {
                  var _e136 = i.get(_t195);
                  void 0 !== _e136 &&
                    (_e136.isAttached() ||
                      (Bs(_e136) && it(_e136, _t195, r, i, s, o),
                      r.has(_t195) || o["delete"](_t195),
                      s.push(_t195)));
                }
              }
              for (var _t196 of n) {
                var _e137 = i.get(_t196);
                void 0 === _e137 ||
                  _e137.isAttached() ||
                  (mu(_e137) &&
                    null !== _e137.__slots &&
                    it(_e137, _t196, r, i, s, n),
                  r.has(_t196) || n["delete"](_t196),
                  s.push(_t196));
              }
              var l = _s(),
                c = l._cloneNotNeeded;
              for (var _t197 of s) (i["delete"](_t197), c["delete"](_t197));
              var a = l._compositionKey;
              null === a || i.has(a) || (l._compositionKey = null);
            })(a, u, t._dirtyLeaves, t._dirtyElements)),
          _r51 !== t._compositionKey && (u._flushSync = !0));
        var _i43 = u._selection;
        if (di(_i43)) {
          t._slotsUsed && wi(_i43);
          var _n100 = u._nodeMap,
            _o70 = _i43.anchor.key,
            _r53 = _i43.focus.key;
          (void 0 !== _n100.get(_o70) && void 0 !== _n100.get(_r53)) || e(19);
        } else gi(_i43) && 0 === _i43._nodes.size && (u._selection = null);
      } catch (e) {
        (e instanceof Error && t._onError(e), (t._pendingEditorState = a));
        var _n101 = a._selection;
        return (
          (t._lastNotifiedSelection = null === _n101 ? null : _n101.clone()),
          (t._dirtyType = 2),
          t._cloneNotNeeded.clear(),
          (t._dirtyLeaves = new Set()),
          t._dirtyElements.clear(),
          void Ns(t)
        );
      } finally {
        ((ns = d), (rs = h), (os = g), (t._updating = _), (as = 0));
      }
      if (r) return;
      var m =
        0 !== t._dirtyType ||
        t._deferred.length > 0 ||
        (function (t, e) {
          var n = e.getEditorState()._selection,
            o = t._selection;
          if (null !== o) {
            if (o.dirty || !o.is(n)) return !0;
          } else if (null !== n) return !0;
          return !1;
        })(u, t);
      m
        ? u._flushSync
          ? ((u._flushSync = !1), Ns(t))
          : f &&
            Kl(function () {
              Ns(t);
            })
        : ((u._flushSync = !1),
          f && (i.clear(), (t._deferred = []), (t._pendingEditorState = null)));
    }
    function ws(t, e, n) {
      os === t && void 0 === n ? (fs() ? As(t, e, n) : e()) : As(t, e, n);
    }
    function Ds() {
      return babelHelpers["extends"]({}, I, { 0: "" });
    }
    function Fs() {
      return babelHelpers["extends"]({}, D, { "": 0 });
    }
    var Is = Ds(),
      Ps = Fs(),
      Rs = Vt()({
        direction: Yt(jt([null, "ltr", "rtl"]), { field: "__dir" }),
        format: Yt(
          jt(["", "left", "start", "center", "right", "end", "justify"]),
          {
            field: "__format",
            getter: "getFormatType",
            getterTable: Is,
            setter: "setFormat",
            setterTable: Ps,
          },
        ),
        indent: Yt(Ut(0, { integer: !0, min: 0 }), { field: "__indent" }),
        textFormat: Gt(Ut(), {
          getter: {
            field: "__textFormat",
            method: "getSerializedTextFormat",
            when: "shouldSerializeTextStyles",
          },
          setter: { field: "__textFormat" },
        }),
        textStyle: Gt($t(), {
          getter: {
            field: "__textStyle",
            method: "getSerializedTextStyle",
            when: "shouldSerializeTextStyles",
          },
          setter: { field: "__textStyle" },
        }),
      });
    function Ls(t) {
      if (Vc(t)) {
        var _e138 = null;
        for (var _n102 of t.getChildren())
          _e138 = _n102.isInline()
            ? (_e138 || _n102.replace(_n102.createParentElementNode())).append(
                _n102,
              )
            : null;
      }
    }
    var _Ks4 = (function (_hr2) {
      function Ks(t) {
        var _this3;
        ((_this3 = _hr2.call(this, t) || this),
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
      babelHelpers.inheritsLoose(Ks, _hr2);
      var _proto11 = Ks.prototype;
      _proto11.$config = function $config() {
        return this.config(Symbol["for"]("ElementNode"), {
          $transform: Ls,
          extends: _hr5,
          generated: kr,
          json: Rs,
        });
      };
      _proto11.afterCloneFrom = function afterCloneFrom(t) {
        (_hr2.prototype.afterCloneFrom.call(this, t),
          this.__key === t.__key &&
            ((this.__first = t.__first),
            (this.__last = t.__last),
            (this.__size = t.__size),
            (this.__slotHost = t.__slotHost),
            null !== this.__slotHost &&
              null !== this.__parent &&
              e(
                384,
                this.__key,
                String(this.__slotHost),
                String(this.__parent),
              ),
            (this.__slots = t.__slots)),
          (this.__style = t.__style),
          (function (t, e) {
            ((t.__dir = e.__dir),
              (t.__format = e.__format),
              (t.__indent = e.__indent),
              (t.__textFormat = e.__textFormat),
              (t.__textStyle = e.__textStyle));
          })(this, t));
      };
      _proto11.getFormat = function getFormat() {
        return this.getLatest().__format;
      };
      _proto11.getFormatType = function getFormatType() {
        var t = this.getFormat();
        return I[t] || "";
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
        return 0 === this.getChildrenSize() && 0 === ku(this).length;
      };
      _proto11.isDirty = function isDirty() {
        var t = _s()._dirtyElements;
        return null !== t && t.has(this.__key);
      };
      _proto11.isLastChild = function isLastChild() {
        var t = this.getLatest(),
          e = this.getParentOrThrow().getLastChild();
        return null !== e && e.is(t);
      };
      _proto11.getAllTextNodes = function getAllTextNodes() {
        var t = [];
        for (var _e139 of ku(this)) {
          var _n103 = bu(this, _e139);
          if (Bs(_n103))
            for (var _e140 of _n103.getAllTextNodes()) t.push(_e140);
        }
        var e = this.getFirstChild();
        for (; null !== e; ) {
          if ((Qr(e) && t.push(e), Bs(e)))
            for (var _n104 of e.getAllTextNodes()) t.push(_n104);
          e = e.getNextSibling();
        }
        return t;
      };
      _proto11.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; Bs(t); ) {
          var _e141 = t.getFirstChild();
          if (null === _e141) break;
          t = _e141;
        }
        return t;
      };
      _proto11.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; Bs(t); ) {
          var _e142 = t.getLastChild();
          if (null === _e142) break;
          t = _e142;
        }
        return t;
      };
      _proto11.getDescendantByIndex = function getDescendantByIndex(t) {
        var e = this.getChildren(),
          n = e.length;
        if (t >= n) {
          var _t198 = e[n - 1];
          return (Bs(_t198) && _t198.getLastDescendant()) || _t198 || null;
        }
        var o = e[t];
        return (Bs(o) && o.getFirstDescendant()) || o || null;
      };
      _proto11.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : oc(t);
      };
      _proto11.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var t = this.getFirstChild();
        return (null === t && e(45, this.__key), t);
      };
      _proto11.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : oc(t);
      };
      _proto11.getLastChildOrThrow = function getLastChildOrThrow() {
        var t = this.getLastChild();
        return (null === t && e(96, this.__key), t);
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
        var t = Fu(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o71 = 0; _o71 < n; _o71++) {
          var _r54 = e[_o71];
          ((t += _r54.getTextContent()),
            Bs(_r54) && _o71 !== n - 1 && !_r54.isInline() && (t += v));
        }
        return t;
      };
      _proto11.getTextContentSize = function getTextContentSize() {
        var t = (function (t) {
          var e = 0;
          for (var _n105 of ku(t)) {
            var _o72 = bu(t, _n105);
            null !== _o72 && (e += _o72.getTextContentSize());
          }
          return e;
        })(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o73 = 0; _o73 < n; _o73++) {
          var _r55 = e[_o73];
          ((t += _r55.getTextContentSize()),
            Bs(_r55) && _o73 !== n - 1 && !_r55.isInline() && (t += 2));
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
          var _e143 = D[t];
          return 0 !== (this.getFormat() & _e143);
        }
        return !1;
      };
      _proto11.hasTextFormat = function hasTextFormat(t) {
        var e = A[t];
        return 0 !== (this.getTextFormat() & e);
      };
      _proto11.getFormatFlags = function getFormatFlags(t, e) {
        return ql(this.getLatest().__textFormat, t, e);
      };
      _proto11.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto11.select = function select(t, e) {
        ds();
        var n = Ki();
        var o = t,
          r = e;
        var i = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t199 = this.getFirstChild();
            if (Qr(_t199) || Bs(_t199)) return _t199.select(0, 0);
          } else if (
            !((void 0 !== t && t !== i) || (void 0 !== e && e !== i))
          ) {
            var _t200 = this.getLastChild();
            if (Qr(_t200) || Bs(_t200)) return _t200.select();
          }
        (void 0 === o && (o = i), void 0 === r && (r = i));
        var s = this.__key;
        return di(n)
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
          var _len6 = arguments.length, t = new Array(_len6), _key6 = 0;
          _key6 < _len6;
          _key6++
        ) {
          t[_key6] = arguments[_key6];
        }
        return this.splice(this.getChildrenSize(), 0, t);
      };
      _proto11.setDirection = function setDirection(t) {
        var e = this.getWritable();
        return ((e.__dir = t), e);
      };
      _proto11.setFormat = function setFormat(t) {
        var e = this.getWritable();
        return ((e.__format = ("" !== t && D[t]) || 0), e);
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
      _proto11.splice = function splice(t, n, o) {
        fr(this) && e(324, this.__key, this.__type);
        var r = this.getChildrenSize(),
          i = this.getWritable();
        t + n <= r || e(226, String(t), String(n), String(r));
        for (var _t201 of o);
        var s = i.__key,
          l = [],
          c = [];
        var a = this.getChildAtIndex(t + n),
          u = null,
          f = r - n + o.length;
        if (0 !== t)
          if (t === r) u = this.getLastChild();
          else {
            var _e144 = this.getChildAtIndex(t);
            null !== _e144 && (u = _e144.getPreviousSibling());
          }
        if (n > 0) {
          var _t202 = null === u ? this.getFirstChild() : u.getNextSibling();
          for (var _o74 = 0; _o74 < n; _o74++) {
            null === _t202 && e(100);
            var _n106 = _t202.getNextSibling(),
              _o75 = _t202.__key;
            (Ql(_t202.getWritable()), c.push(_o75), (_t202 = _n106));
          }
        }
        var d = u;
        for (var _t203 of o) {
          (null !== d && _t203.is(d) && (u = d = d.getPreviousSibling()),
            null !== a && _t203.is(a) && (a = a.getNextSibling()));
          var _n107 = _t203.getWritable();
          (_n107.__parent === s && f--, Ql(_n107));
          var _o76 = _t203.__key;
          if (null === d) ((i.__first = _o76), (_n107.__prev = null));
          else {
            var _t204 = d.getWritable();
            ((_t204.__next = _o76), (_n107.__prev = _t204.__key));
          }
          (_t203.__key === s && e(76),
            (_n107.__parent = s),
            l.push(_o76),
            (d = _t203));
        }
        if (null === a)
          null !== d && ((d.getWritable().__next = null), (i.__last = d.__key));
        else {
          var _t205 = a.getWritable();
          if (null !== d) {
            var _e145 = d.getWritable();
            ((_t205.__prev = d.__key), (_e145.__next = a.__key));
          } else _t205.__prev = null;
        }
        if (((i.__size = f), c.length)) {
          var _t206 = Ki();
          if (di(_t206)) {
            var _e146 = new Set(c),
              _n108 = new Set(l),
              _o77 = _t206.anchor,
              _r56 = _t206.focus;
            (zs(_o77, _e146, _n108) && Ui(_o77, _o77.getNode(), this, u, a),
              zs(_r56, _e146, _n108) && Ui(_r56, _r56.getNode(), this, u, a),
              0 !== f || this.canBeEmpty() || Vc(this) || this.remove());
          }
        }
        return i;
      };
      _proto11.getDOMSlot = function getDOMSlot(t) {
        return new _J(t);
      };
      _proto11.exportDOM = function exportDOM(t) {
        var _hr2$prototype$export = _hr2.prototype.exportDOM.call(this, t),
          e = _hr2$prototype$export.element;
        if (pa(e)) {
          var _t207 = this.getIndent();
          _t207 > 0 &&
            ((e.style.paddingInlineStart = 40 * _t207 + "px"),
            e.setAttribute("data-lexical-indent", String(_t207)));
          var _n109 = this.getDirection();
          _n109 && (e.dir = _n109);
        }
        return { element: e };
      };
      _proto11.shouldSerializeTextStyles =
        function shouldSerializeTextStyles() {
          if (Vc(this)) return !1;
          for (
            var _t208 = this.getFirstChild();
            null !== _t208;
            _t208 = _t208.getNextSibling()
          )
            if (Qr(_t208)) return !1;
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
        var n = ba(this, t, e);
        var o = n.getFirstChild();
        for (
          var _t209 = this.getFirstChild();
          _t209;
          _t209 = _t209.getNextSibling()
        ) {
          var _r57 = e.getElementByKey(_t209.getKey());
          null !== _r57 &&
            (null == o
              ? (n.insertChild(_r57), (o = _r57))
              : o !== _r57 && n.replaceChild(_r57, o),
            (o = o.nextSibling));
        }
      };
      return Ks;
    })(_hr5);
    function Bs(t) {
      return t instanceof _Ks4;
    }
    function zs(t, e, n) {
      var o = t.getNode();
      for (; o; ) {
        var _t210 = o.__key;
        if (e.has(_t210) && !n.has(_t210)) return !0;
        o = o.getParent();
      }
      return !1;
    }
    var _$s = (function (_hr3) {
      function $s(t) {
        var _this4;
        ((_this4 = _hr3.call(this, t) || this),
          (_this4.__slotHost = null),
          (_this4.__slots = null));
        return _this4;
      }
      babelHelpers.inheritsLoose($s, _hr3);
      var _proto12 = $s.prototype;
      _proto12.afterCloneFrom = function afterCloneFrom(t) {
        (_hr3.prototype.afterCloneFrom.call(this, t),
          this.__key === t.__key &&
            ((this.__slotHost = t.__slotHost),
            null !== this.__slotHost &&
              null !== this.__parent &&
              e(
                383,
                this.__key,
                String(this.__slotHost),
                String(this.__parent),
              ),
            (this.__slots = t.__slots)));
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
      return $s;
    })(_hr5);
    function Ws(t) {
      return t instanceof _$s;
    }
    var _Us = (function (_Ks) {
      function Us() {
        var _this5;
        ((_this5 = _Ks.call(this, "root") || this),
          (_this5.__cachedText = null));
        return _this5;
      }
      babelHelpers.inheritsLoose(Us, _Ks);
      var _proto13 = Us.prototype;
      _proto13.$config = function $config() {
        return this.config("root", { extends: _Ks4 });
      };
      _proto13.getTopLevelElementOrThrow =
        function getTopLevelElementOrThrow() {
          e(51);
        };
      _proto13.getTextContent = function getTextContent() {
        var t = this.__cachedText;
        return null === t || (!fs() && 0 !== _s()._dirtyType)
          ? _Ks.prototype.getTextContent.call(this)
          : t;
      };
      _proto13.remove = function remove() {
        e(52);
      };
      _proto13.replace = function replace(t) {
        e(53);
      };
      _proto13.insertBefore = function insertBefore(t) {
        e(54);
      };
      _proto13.insertAfter = function insertAfter(t) {
        e(55);
      };
      _proto13.updateDOM = function updateDOM(t, e) {
        return !1;
      };
      _proto13.splice = function splice(t, n, o) {
        for (var _t211 of o) Bs(_t211) || Ws(_t211) || e(282);
        return _Ks.prototype.splice.call(this, t, n, o);
      };
      Us.importJSON = function importJSON(t) {
        return uc().updateFromJSON(t);
      };
      _proto13.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return Us;
    })(_Ks4);
    function js(t) {
      return t instanceof _Us;
    }
    function Hs(t) {
      return new _Ys(Z(t._nodeMap), null, t._slotsUsed);
    }
    function Vs() {
      return new _Ys(new Map([["root", new _Us()]]), null, !1);
    }
    function Js(t) {
      var n = t.constructor,
        o = rt(t);
      if (Bs(t)) {
        var _e147 = o.children,
          _n110 = t.getChildren();
        for (var _t212 = 0; _t212 < _n110.length; _t212++)
          _e147.push(Js(_n110[_t212]));
      }
      var r = ku(t);
      if (r.length > 0) {
        var _i44 = {};
        for (var _o78 of r) {
          var _r58 = bu(t, _o78);
          (null === _r58 && e(366, n.name, _o78), (_i44[_o78] = Js(_r58)));
        }
        o.$slots = _i44;
      }
      return o;
    }
    var _Ys = (function () {
      function Ys(t, e, n) {
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
      var _proto14 = Ys.prototype;
      _proto14.isEmpty = function isEmpty() {
        return this._nodeMap.size <= 1 && null === this._selection;
      };
      _proto14.read = function read(t, e) {
        return vs((e && e.editor) || null, this, t);
      };
      _proto14.clone = function clone(t) {
        var e = new Ys(
          this._nodeMap,
          void 0 === t ? this._selection : t,
          this._slotsUsed,
        );
        return ((e._readOnly = !0), (e._parsed = this._parsed), e);
      };
      _proto14.toJSON = function toJSON(t) {
        var _this14 = this;
        return nt("boolean" == typeof t && t, function () {
          return vs(null, _this14, function () {
            return { root: Js(uc()) };
          });
        });
      };
      return Ys;
    })();
    var _Gs = (function (_Ks2) {
      function Gs() {
        return _Ks2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Gs, _Ks2);
      var _proto15 = Gs.prototype;
      _proto15.$config = function $config() {
        return this.config("artificial", { extends: _Ks4 });
      };
      _proto15.createDOM = function createDOM(t) {
        return sa().createElement("div");
      };
      return Gs;
    })(_Ks4);
    var _qs = (function (_hr4) {
      function qs() {
        return _hr4.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(qs, _hr4);
      var _proto16 = qs.prototype;
      _proto16.$config = function $config() {
        return this.config("linebreak", {
          extends: _hr5,
          generated: Mr,
          importDOM: {
            br: function br(t) {
              return tl(t) || el(t) ? null : { conversion: Xs, priority: 0 };
            },
          },
        });
      };
      _proto16.getTextContent = function getTextContent() {
        return "\n";
      };
      _proto16.createDOM = function createDOM() {
        return sa().createElement("br");
      };
      _proto16.updateDOM = function updateDOM() {
        return !1;
      };
      _proto16.isInline = function isInline() {
        return !0;
      };
      return qs;
    })(_hr5);
    function Xs(t) {
      return { node: Qs() };
    }
    function Qs() {
      return Yc(new _qs());
    }
    function Zs(t) {
      return t instanceof _qs;
    }
    function tl(t) {
      var e = t.parentElement;
      if (null !== e && Ta(e)) {
        var _n111 = e.firstChild;
        if (_n111 === t || (_n111.nextSibling === t && nl(_n111))) {
          var _n112 = e.lastChild;
          if (_n112 === t || (_n112.previousSibling === t && nl(_n112)))
            return !0;
        }
      }
      return !1;
    }
    function el(t) {
      var e = t.parentElement;
      if (null !== e && Ta(e)) {
        var _n113 = e.firstChild;
        if (_n113 === t || (_n113.nextSibling === t && nl(_n113))) return !1;
        var _o79 = e.lastChild;
        if (_o79 === t || (_o79.previousSibling === t && nl(_o79))) return !0;
      }
      return !1;
    }
    function nl(t) {
      return Jl(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    function ol(t, n) {
      var o = t.type,
        r = t.key,
        i = t.offset,
        s = qc(t.key);
      return "text" === o
        ? (Qr(s) || e(266, s.getType(), r), Qu(s, n, i))
        : (Bs(s) || e(267, s.getType(), r), _l(s, t.offset, n));
    }
    function rl(t, n) {
      var o = n.origin,
        r = n.direction,
        i = "next" === r;
      Hu(n)
        ? t.set(o.getKey(), n.offset, "text")
        : Vu(n)
          ? Qr(o)
            ? t.set(o.getKey(), Zu(o, r), "text")
            : t.set(
                o.getParentOrThrow().getKey(),
                o.getIndexWithinParent() + (i ? 1 : 0),
                "element",
              )
          : ((Ju(n) && Bs(o)) || e(268),
            t.set(o.getKey(), i ? 0 : o.getChildrenSize(), "element"));
    }
    function il(t) {
      var e = Ki(),
        n = di(e) ? e : Pi();
      return (sl(n, t), dc(n), n);
    }
    function sl(t, e) {
      (rl(t.anchor, e.anchor), rl(t.focus, e.focus));
    }
    function ll(t) {
      var e = t.anchor,
        n = t.focus,
        o = ol(e, "next"),
        r = ol(n, "next"),
        i = df(o, r) <= 0 ? "next" : "previous";
      return uf(lf(o, i), lf(r, i));
    }
    function cl(t) {
      var e = t.direction,
        n = t.origin,
        o = Xu(n, $u(e)).getNodeAtCaret();
      return o ? Xu(o, e) : ef(n.getParentOrThrow(), e);
    }
    function al(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _o80 = Ju(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _o80;
        _o80 = _o80.getParentCaret(e)
      )
        n.push(cl(_o80));
      return n;
    }
    function ul(t) {
      return !!t && t.origin.isAttached();
    }
    function fl(t, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (t.isCollapsed()) return t;
      var o = "root",
        r = "next";
      var i = n;
      var s = gl(t, r);
      var l = s.anchor.origin;
      for (; null !== l && !Vc(l); ) l = l.getParent();
      var c = Bs(l) ? l.getFirstChild() : null,
        a = al(s.anchor, o),
        u = al(s.focus.getFlipped(), o),
        f = new Set(),
        d = [];
      for (var _t213 of s.iterNodeCarets(o))
        if (Ju(_t213)) f.add(_t213.origin.getKey());
        else if (Vu(_t213)) {
          var _e148 = _t213.origin;
          (Bs(_e148) && !f.has(_e148.getKey())) || d.push(_e148);
        }
      var h = new Set();
      for (var _t214 of d) {
        var _e149 = _t214.getParent();
        (null === _e149 || f.has(_e149.getKey()) || h.add(_e149), Ql(_t214));
      }
      for (var _t215 of h)
        !_t215.canBeEmpty() &&
          !Vc(_t215) &&
          _t215.isEmpty() &&
          _t215.isAttached() &&
          _t215.remove();
      for (var _t216 of s.getTextSlices()) {
        if (!_t216) continue;
        var _e150 = _t216.caret.origin,
          _n114 = _e150.getTextContentSize(),
          _o81 = cl(Xu(_e150, r)),
          _s26 = _e150.getMode();
        if (
          (Math.abs(_t216.distance) === _n114 && "removeEmptySlices" === i) ||
          ("token" === _s26 && 0 !== _t216.distance)
        )
          _o81.remove();
        else if (0 !== _t216.distance) {
          i = "removeEmptySlices";
          var _e151 = _t216.removeTextSlice();
          var _n115 = _t216.caret.origin;
          if ("segmented" === _s26) {
            var _t217 = _e151.origin,
              _n116 = Xr(_t217.getTextContent())
                .setStyle(_t217.getStyle())
                .setFormat(_t217.getFormat());
            (_o81.replaceOrInsert(_n116), (_e151 = Qu(_n116, r, _e151.offset)));
          }
          (_n115.is(a[0].origin) && (a[0] = _e151),
            _n115.is(u[0].origin) && (u[0] = _e151.getFlipped()));
        }
      }
      var g, _;
      for (var _t218 of a)
        if (ul(_t218)) {
          g = dl(_t218);
          break;
        }
      for (var _t219 of u)
        if (ul(_t219)) {
          _ = dl(_t219);
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
            for (var _o82 = c; _o82 < t.length; _o82++) {
              var _r59 = t[_o82];
              if (Vc(_r59)) return;
              !n && e(_r59) && (n = _r59);
            }
            return n;
          },
          u = a(i, va),
          f =
            u &&
            a(s, function (t) {
              return n.has(t.getKey()) && va(t);
            });
        return f && ku(f).length > 0 ? null : u && f ? [u, f] : null;
      })(g, _, f);
      if (p) {
        var _t220 = p[0],
          _e152 = p[1];
        ef(_t220, "previous").splice(0, _e152.getChildren());
        var _n117 = _e152.getParent();
        for (_e152.remove(!0); _n117 && _n117.isEmpty(); ) {
          var _t221 = _n117;
          ((_n117 = _n117.getParent()), _t221.remove(!0));
        }
      } else if (_) {
        var _t222 = (function (t) {
            if (Ju(t)) {
              var _e154 = t.origin;
              if (va(_e154)) return _e154;
            } else {
              var _e155 = t.getParentAtCaret();
              if (_e155 && va(_e155)) return _e155;
            }
            return null;
          })(_),
          _e153 = _t222 && _t222.getParent(),
          _n118 = _t222 && _t222.getParents().findLast(Hc);
        if (
          _t222 &&
          _e153 &&
          !js(_e153) &&
          _t222.isEmpty() &&
          f.has(_t222.getKey()) &&
          0 === ku(_t222).length &&
          (!_n118 || f.has(_n118.getKey()))
        ) {
          _t222.remove(!0);
          var _n119 = _e153;
          for (; _n119 && !js(_n119) && _n119.isEmpty(); ) {
            var _t223 = _n119.getParent();
            if (
              _t223 &&
              js(_t223) &&
              _t223.getChildrenSize() <= 1 &&
              _n119.canBeEmpty()
            )
              break;
            var _e156 = _n119;
            ((_n119 = _t223), _e156.remove(!0));
          }
        }
      }
      null !== fc(l, c) || null === l || l.isAttached() || fc(uc(), null);
      var m = [g, _].concat(Array.from(a), Array.from(u)).find(ul);
      if (m) return af(lf(dl(m), t.direction));
      e(
        269,
        JSON.stringify(
          a.map(function (t) {
            return t.origin.__key;
          }),
        ),
      );
    }
    function dl(t) {
      var e = (function (t) {
          var e = t;
          for (; Ju(e); ) {
            var _t224 = of(e);
            if (!Ju(_t224)) break;
            e = _t224;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (Qr(e.origin)) return Hu(e) ? e : Qu(e.origin, n, n);
      var o = e.getAdjacentCaret();
      return Vu(o) && Qr(o.origin) ? Qu(o.origin, n, $u(n)) : e;
    }
    function hl(t) {
      return Hu(t) && t.offset !== Zu(t.origin, t.direction);
    }
    function gl(t, e) {
      return t.direction === e ? t : uf(lf(t.focus, e), lf(t.anchor, e));
    }
    function _l(t, e, n) {
      var o = ef(t, "next");
      for (var _t225 = 0; _t225 < e; _t225++) {
        var _t226 = o.getAdjacentCaret();
        if (null === _t226) break;
        o = _t226;
      }
      return lf(o, n);
    }
    function pl(t) {
      var n = t.origin,
        o = t.offset,
        r = t.direction;
      if (o === Zu(n, r)) return t.getSiblingCaret();
      if (o === Zu(n, $u(r))) return cl(t.getSiblingCaret());
      var _n$splitText2 = n.splitText(o),
        i = _n$splitText2[0];
      return (Qr(i) || e(281), lf(Xu(i, "next"), r));
    }
    function ml(t, e) {
      return !0;
    }
    function yl(t, _temp) {
      var _ref41 = _temp === void 0 ? {} : _temp,
        _ref41$$copyElementNo = _ref41.$copyElementNode,
        e = _ref41$$copyElementNo === void 0 ? Jc : _ref41$$copyElementNo,
        _ref41$$splitTextPoin = _ref41.$splitTextPointCaretNext,
        n = _ref41$$splitTextPoin === void 0 ? pl : _ref41$$splitTextPoin,
        _ref41$rootMode = _ref41.rootMode,
        o = _ref41$rootMode === void 0 ? "shadowRoot" : _ref41$rootMode,
        _ref41$$shouldSplit = _ref41.$shouldSplit,
        r = _ref41$$shouldSplit === void 0 ? ml : _ref41$$shouldSplit,
        _ref41$removeEmptyDes = _ref41.removeEmptyDestination,
        i = _ref41$removeEmptyDes === void 0 ? !1 : _ref41$removeEmptyDes;
      if (Hu(t)) return n(t);
      var s = t.getParentCaret(o);
      if (s) {
        var _n120 = s.origin;
        if (Ju(t)) {
          var _t227 = cl(s);
          if (i && _n120.isEmpty()) return (_n120.remove(), _t227);
          if (!_n120.canBeEmpty() || !r(_n120, "first")) return _t227;
        }
        var _o83 = (function (t) {
          var e = [];
          for (
            var _n121 = t.getAdjacentCaret();
            _n121;
            _n121 = _n121.getAdjacentCaret()
          )
            e.push(_n121.origin);
          return e;
        })(t);
        (_o83.length > 0 || (!i && _n120.canBeEmpty() && r(_n120, "last"))) &&
          s.insert(e(_n120).splice(0, 0, _o83));
      }
      return s;
    }
    function xl(t, n, o) {
      var r = lf(n, "next");
      (Hu(r) &&
        (0 === r.offset
          ? (r = Xu(r.origin, "previous").getFlipped())
          : r.offset === r.origin.getTextContentSize() &&
            (r = Xu(r.origin, "next"))),
        r.origin.is(t) &&
          (Vu(r) || e(342, t.getKey(), t.getType()), (r = cl(r))),
        (t.is(r.getNodeAtCaret()) || t.is(r.getFlipped().getNodeAtCaret())) &&
          t.remove(!0));
      for (var _t228 = r; _t228; _t228 = yl(_t228, o)) r = _t228;
      return (
        Hu(r) && e(283),
        r.insert(t.isInline() ? vl().append(t) : t),
        lf(Xu(t.getLatest(), "next"), n.direction)
      );
    }
    function Cl(t, e) {
      var n = gl(di(e) ? ll(e) : e, "next"),
        o = Tu(n.anchor.origin),
        r = Tu(t.getLatest());
      if (null === o ? null !== r : !o.is(r)) return !1;
      var i = dl(ef(t, "next")),
        s = lf(dl(ef(t, "previous")), "next");
      return df(n.anchor, i) <= 0 && df(n.focus, s) >= 0;
    }
    var _Sl = (function (_Ks3) {
      function Sl() {
        return _Ks3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Sl, _Ks3);
      var _proto17 = Sl.prototype;
      _proto17.$config = function $config() {
        return this.config("paragraph", {
          extends: _Ks4,
          generated: Er,
          importDOM: {
            p: function p() {
              return { conversion: Tl, priority: 0 };
            },
          },
        });
      };
      _proto17.createDOM = function createDOM(t) {
        var _e$classList2;
        var e = sa().createElement("p"),
          n = Oc(t.theme, "paragraph");
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
        var _Ks3$prototype$export = _Ks3.prototype.exportDOM.call(this, t),
          e = _Ks3$prototype$export.element;
        if (pa(e)) {
          this.isEmpty() && e.append(sa().createElement("br"));
          var _t229 = this.getFormatType();
          _t229 && (e.style.textAlign = _t229);
        }
        return { element: e };
      };
      _proto17.exportJSON = function exportJSON(t) {
        if (t === void 0) {
          t = !1;
        }
        var e = _Ks3.prototype.exportJSON.call(this, t);
        if (void 0 === e.textFormat || void 0 === e.textStyle) {
          var _n122 = this.getChildren().find(Qr),
            _o84 = _n122 ? _n122.getFormat() : this.getTextFormat(),
            _r60 = _n122 ? _n122.getStyle() : this.getTextStyle();
          ((t && 0 === _o84) || (e.textFormat = _o84),
            (t && "" === _r60) || (e.textStyle = _r60));
        }
        return e;
      };
      _proto17.extractWithChild = function extractWithChild(t, e, n) {
        if (!di(e)) return !1;
        if (
          "" === this.getFormatType() &&
          0 === this.getIndent() &&
          "" === this.getStyle()
        )
          return !1;
        if (Cl(this, e)) {
          var _t230 = this.getTextContent();
          return "" !== _t230 && e.getTextContent() === _t230;
        }
        return !1;
      };
      _proto17.insertNewAfter = function insertNewAfter(t, e) {
        var n = vl();
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
            return Qr(t) && !/\S/.test(t.getTextContent());
          })
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return Sl;
    })(_Ks4);
    function Tl(t) {
      var e = vl();
      if ((Pa(e, t), Fa(t, e), "" === e.getFormatType())) {
        var _n123 = t.getAttribute("align");
        _n123 && _n123 && _n123 in D && e.setFormat(_n123);
      }
      return (Ia(e, t), { node: e });
    }
    function vl() {
      return Yc(new _Sl());
    }
    function Nl(t) {
      return t instanceof _Sl;
    }
    function kl(t) {
      console.warn(t);
    }
    function bl(t, e, n, o, r) {
      var i = t._keyToDOMMap;
      (i.clear(),
        (t._editorState = Vs()),
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
          isShiftKeyDown: !1,
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
          ((n.textContent = ""), i.set("root", n), ic(n, t, "root")));
    }
    function Ol(t) {
      var e = new Set(),
        n = new Set();
      for (var _ref43 of fu(t)) {
        var _o85 = _ref43.klass;
        var _r61 = _ref43.ownNodeConfig;
        {
          var _t231 = _o85.transform;
          if (!n.has(_t231)) {
            n.add(_t231);
            var _r62 = _o85.transform();
            _r62 && e.add(_r62);
          }
          if (_r61) {
            var _t232 = _r61.$transform;
            _t232 && e.add(_t232);
          }
        }
      }
      return e;
    }
    var El = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, o) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = Ll(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, o, r) {
        return Bs(t) && t.extractWithChild(e, n, o);
      },
      $getDOMSlot: function $getDOMSlot(t, e, n) {
        return t.getDOMSlot(e);
      },
      $getSlotTargetElement: function $getSlotTargetElement(t, e, n, o) {
        return null;
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return Bs(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, o) {
        return t.updateDOM(e, n, o._config);
      },
    };
    function Ml(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function Al(t, e, n) {
      return (t.set(e, n), Ml.bind(null, t, e));
    }
    var _wl = (function () {
      function wl(t, e, n, o, r, i, s, l, c) {
        ((this._createEditorArgs = c),
          (this._parentEditor = e),
          (this._rootElement = null),
          (this._editorState = t),
          (this._pendingEditorState = null),
          (this._compositionKey = null),
          (this._deferred = []),
          (this._keyToDOMMap = new _tt()),
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
          (this._key = mc()),
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
            isShiftKeyDown: !1,
            lastBeforeInputInsertTextTimeStamp: 0,
            lastKeyCode: null,
            lastKeyDownTimeStamp: 0,
            postDeleteSelectionToRestore: null,
            selectionChangeFromDOMUpdatePoints: null,
            unprocessedBeforeInputData: null,
          }),
          (this._lastNotifiedSelection = null));
      }
      var _proto18 = wl.prototype;
      _proto18.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto18.registerUpdateListener = function registerUpdateListener(t) {
        return Al(this._listeners.update, t);
      };
      _proto18.registerEditableListener = function registerEditableListener(t) {
        return Al(this._listeners.editable, t);
      };
      _proto18.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return Al(this._listeners.decorator, t);
      };
      _proto18.registerTextContentListener =
        function registerTextContentListener(t) {
          return Al(this._listeners.textcontent, t);
        };
      _proto18.registerRootListener = function registerRootListener(t) {
        var _this15 = this;
        var e = this._listeners.root;
        return yf(Al(e, t, t(this._rootElement, null) || void 0), function () {
          return (function (t, e, n) {
            var o = t.get(e);
            (o && o(), t.set(e, e.apply(void 0, Array.from(n)) || void 0));
          })(e, t, [null, _this15._rootElement]);
        });
      };
      _proto18.registerCommand = function registerCommand(t, n, o) {
        void 0 === o && e(35);
        var r = this._commands;
        r.has(t) ||
          r.set(t, [new _X(), new _X(), new _X(), new _X(), new _X()]);
        var i = r.get(t);
        void 0 === i && e(36, String(t));
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
              }) && r["delete"](t));
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
      _proto18.getRegisteredNode = function getRegisteredNode(t) {
        var n = this._nodes.get(t.getType());
        return (void 0 === n && e(37, t.name), n);
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
          o = wa(n).get(e.getType());
        if (!o) return;
        var r = new Map();
        for (var _t233 of o.keys()) r.set(_t233, "created");
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
          var _t234 = this.registerNodeTransformToKlass(r, e);
          o.push(_t234);
        }
        return (
          (function (t, e) {
            var n = wa(t.getEditorState()),
              o = [];
            for (var _t235 of e) {
              var _e157 = n.get(_t235);
              _e157 && o.push(_e157);
            }
            0 !== o.length &&
              t.update(
                function () {
                  for (var _t236 of o)
                    for (var _e158 of _t236.keys()) {
                      var _t237 = oc(_e158);
                      _t237 && _t237.markDirty();
                    }
                },
                null === t._pendingEditorState ? { tag: _r } : void 0,
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
          var _len7 = arguments.length,
            e = new Array(_len7 > 1 ? _len7 - 1 : 0),
            _key7 = 1;
          _key7 < _len7;
          _key7++
        ) {
          e[_key7 - 1] = arguments[_key7];
        }
        return Dc.apply(void 0, [this, t].concat(Array.from(e)));
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
        var n = this._rootElement;
        if (t !== n) {
          var _n$classList2;
          var _o86 = Oc(this._config.theme, "root"),
            _r63 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            bl(this, n, t, _r63, { preserveUpdateQueue: !0 }),
            null !== n &&
              (this._config.disableEvents ||
                (function (t) {
                  var n = bo.get(t);
                  if (void 0 === n) return void cr();
                  var o = Oo.get(n);
                  if (void 0 === o) return void cr();
                  bo["delete"](t);
                  var r = jl(t);
                  Wl(r)
                    ? ((function (t) {
                        if (null !== t._parentEditor) {
                          var _e159 = pc(t),
                            _n124 = _e159[_e159.length - 1]._key;
                          rr.get(_n124) === t && rr["delete"](_n124);
                        } else rr["delete"](t._key);
                      })(r),
                      o.editors["delete"](r),
                      (o.hasShadowEditor = void 0),
                      (t.__lexicalEditor = null))
                    : r && e(198);
                  var i = or(t);
                  for (var _t238 = 0; _t238 < i.length; _t238++) i[_t238]();
                  t.__lexicalEventHandles = [];
                })(n),
              null != _o86 &&
                (_n$classList2 = n.classList).remove.apply(
                  _n$classList2,
                  Array.from(_o86),
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e160 = $c(t),
              _n125 = t.style;
            ((_n125.userSelect = "text"),
              (_n125.whiteSpace = "pre-wrap"),
              (_n125.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e160),
              (this._dirtyType = 2),
              _t(this),
              this._updateTags.add(_r),
              Ns(this),
              this._config.disableEvents ||
                (function (t, e) {
                  var n = t.ownerDocument;
                  bo.set(t, n);
                  var o = Oo.get(n);
                  (void 0 === o &&
                    ((o = { editors: new Set(), hasShadowEditor: void 0 }),
                    Oo.set(n, o)),
                    o.editors.add(e),
                    (o.hasShadowEditor = void 0),
                    (t.__lexicalEditor = e));
                  var r = or(t);
                  r.push(Eo.register(n));
                  var i = (function () {
                    if (void 0 !== ko) return ko;
                    var t = [
                      ["keydown", qo],
                      ["pointerdown", Po],
                      ["compositionstart", jo],
                      ["compositionend", Go],
                      ["input", Wo],
                      ["click", Io],
                      ["cut", No],
                      ["copy", No],
                      ["dragstart", No],
                      ["dragover", No],
                      ["dragend", No],
                      ["paste", No],
                      ["focus", No],
                      ["blur", No],
                      ["drop", No],
                    ];
                    return (
                      d &&
                        t.push([
                          "beforeinput",
                          function (t, e) {
                            return (function (t, e) {
                              var n = t.inputType;
                              "deleteCompositionText" === n ||
                                (u && wc(e)) ||
                                ("insertCompositionText" !== n &&
                                  ws(
                                    e,
                                    function () {
                                      zo(t, e) || Dc(e, Sn, t);
                                    },
                                    { event: t },
                                  ));
                            })(t, e);
                          },
                        ]),
                      g &&
                        t.push([
                          "keyup",
                          function (t, e) {
                            return (function (t, e) {
                              (t.shiftKey && "CapsLock" !== t.key) ||
                                (e._inputState.isShiftKeyDown = !1);
                            })(t, e);
                          },
                        ]),
                      (ko = t),
                      t
                    );
                  })();
                  var _loop3 = function _loop3() {
                    var _i$_n = i[_n126],
                      o = _i$_n[0],
                      s = _i$_n[1],
                      l =
                        "function" == typeof s
                          ? function (t) {
                              lr(t) ||
                                (sr(t),
                                (e.isEditable() || "click" === o) && s(t, e));
                            }
                          : function (t) {
                              if (lr(t)) return;
                              sr(t);
                              var n = e.isEditable();
                              switch (o) {
                                case "cut":
                                  return n && Dc(e, io, t);
                                case "copy":
                                  return Dc(e, ro, t);
                                case "paste":
                                  return n && Dc(e, Mn, t);
                                case "dragstart":
                                  return n && Dc(e, eo, t);
                                case "dragover":
                                  return n && Dc(e, no, t);
                                case "dragend":
                                  return n && Dc(e, oo, t);
                                case "focus":
                                  return n && Dc(e, fo, t);
                                case "blur":
                                  return (
                                    (e._inputState.isShiftKeyDown = !1),
                                    (e._inputState.isInsertLineBreak = !1),
                                    n && Dc(e, ho, t)
                                  );
                                case "drop":
                                  return n && Dc(e, Zn, t);
                              }
                            };
                    r.push(vo(t, o, l));
                  };
                  for (var _n126 = 0; _n126 < i.length; _n126++) {
                    _loop3();
                  }
                })(t, this),
              null != _o86 &&
                (_t$classList = t.classList).add.apply(
                  _t$classList,
                  Array.from(_o86),
                ));
          } else ((this._window = null), this._updateTags.add(_r), Ns(this));
          ks("root", this, !1, t, n);
        }
      };
      _proto18.getElementByKey = function getElementByKey(t) {
        return this._keyToDOMMap.get(t) || null;
      };
      _proto18.getEditorState = function getEditorState() {
        return this._editorState;
      };
      _proto18.setEditorState = function setEditorState(t, e) {
        var _this16 = this;
        var o = t.isEmpty();
        var r = t;
        (r._readOnly &&
          ((r = Hs(t)),
          (r._selection = t._selection ? t._selection.clone() : null)),
          gt(this));
        var i = this._pendingEditorState,
          s = void 0 !== e ? e.tag : null;
        (null === i ||
          i.isEmpty() ||
          (null != s && this._updateTags.add(s), Ns(this)),
          (this._pendingEditorState = r),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          (this._slotsUsed = this._slotsUsed || t._slotsUsed),
          ws(
            this,
            function () {
              if (
                (s && _this16._updateTags.add(s),
                o && (n(38), uc().append(vl())),
                t._parsed)
              )
                for (var _ref45 of r._nodeMap.entries()) {
                  var _t239 = _ref45[0];
                  var _e161 = _ref45[1];
                  Bs(_e161)
                    ? _this16._dirtyElements.set(_t239, !0)
                    : _this16._dirtyLeaves.add(_t239);
                }
            },
            { discrete: !this._updating || void 0 },
          ));
      };
      _proto18.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var o = Vs(),
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
            Fl(null));
          try {
            var _r64 = e._nodes;
            (Ts(t.root, _r64), n && n(), (o._readOnly = !0), (o._parsed = !0));
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
          var _len8 = arguments.length, t = new Array(_len8), _key8 = 0;
          _key8 < _len8;
          _key8++
        ) {
          t[_key8] = arguments[_key8];
        }
        var _ref46 = 1 === t.length ? ["force-commit", t[0]] : t,
          e = _ref46[0],
          n = _ref46[1];
        return (
          "force-commit" === e && Ns(this),
          ("pending" === e
            ? this._pendingEditorState || this._editorState
            : this.getEditorState()
          ).read(n, { editor: this })
        );
      };
      _proto18.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : As(t, e, n);
        })(this, t, e);
      };
      _proto18.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          ws(this, function () {
            var o = Ki(),
              r = uc();
            (null !== o
              ? o.dirty || dc(o.clone())
              : 0 !== r.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? r.selectStart()
                  : r.selectEnd()),
              Kc("focus"),
              Bc(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto18.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = Zc(this._window);
        null !== e && e.removeAllRanges();
      };
      _proto18.isEditable = function isEditable() {
        return this._editable;
      };
      _proto18.setEditable = function setEditable(t) {
        this._editable !== t &&
          ((this._editable = t),
          ks("editable", this, !0, t),
          this._slotsUsed &&
            this.update(function () {
              return ps();
            }));
      };
      _proto18.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON(ot()) };
      };
      return wl;
    })();
    _wl.version = (function () {
      return q;
    })();
    var Dl = null;
    function Fl(t) {
      Dl = t;
    }
    var Il = Symbol("INTERNAL_SKIP_AFTER_CLONE_FROM");
    var Pl = 1;
    function Rl(t, n) {
      var o = Ll(t, n);
      return (void 0 === o && e(30, n), o);
    }
    function Ll(t, e) {
      return t._nodes.get(e);
    }
    var Kl =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function Bl(t, e) {
      var n =
        void 0 !== e
          ? e
          : (function () {
              var e = t.getRootNode();
              return Yl(e) || ea(e) ? ga(e) : null;
            })();
      if (!pa(n)) return !1;
      if (n.hasAttribute("data-lexical-slot")) return !1;
      var o = lc(n),
        r = n.nodeName;
      return (
        gr(o) &&
        ("INPUT" === r ||
          "TEXTAREA" === r ||
          ("true" === n.contentEditable && null == jl(n)))
      );
    }
    var zl = Bl;
    function $l(t, e, n) {
      var o = t.getRootElement();
      if (!o) return !1;
      try {
        if (!e || !o.contains(e) || !o.contains(n)) return !1;
      } catch (t) {
        return !1;
      }
      return (
        Ul(e) === t &&
        t.read("latest", function () {
          return !Bl(e);
        })
      );
    }
    function Wl(t) {
      return t instanceof _wl;
    }
    function Ul(t) {
      var e = t;
      for (; null != e; ) {
        var _t240 = jl(e);
        if (Wl(_t240)) return _t240;
        e = Ic(e);
      }
      return null;
    }
    function jl(t) {
      return t ? t.__lexicalEditor : null;
    }
    function Hl(t) {
      return oi(t) || t.isToken();
    }
    function Vl(t) {
      return Hl(t) || t.isSegmented();
    }
    function Jl(t) {
      return ma(t) && 3 === t.nodeType;
    }
    function Yl(t) {
      return ma(t) && 9 === t.nodeType;
    }
    function Gl(t) {
      var e = t;
      for (; null != e; ) {
        if (Jl(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function ql(t, e, n) {
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
    function Xl(t, e) {
      var n = (function () {
        var t = Dl;
        return ((Dl = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (ds(), hs());
      var o = _s(),
        r = gs(),
        i = "" + Pl++;
      (r._nodeMap.set(i, t),
        Bs(t) ? o._dirtyElements.set(i, !0) : o._dirtyLeaves.add(i),
        o._cloneNotNeeded.set(i, t),
        0 === o._dirtyType && (o._dirtyType = 1),
        (t.__key = i));
    }
    function Ql(t) {
      null !== xu(t) && e(380, t.__key, String(xu(t)));
      var n = t.getParent();
      if (null !== n) {
        var _e162 = t.getWritable(),
          _o87 = n.getWritable(),
          _r65 = t.getPreviousSibling(),
          _i45 = t.getNextSibling(),
          _s27 = null !== _i45 ? _i45.__key : null,
          _l19 = null !== _r65 ? _r65.__key : null,
          _c14 = null !== _r65 ? _r65.getWritable() : null,
          _a10 = null !== _i45 ? _i45.getWritable() : null;
        (null === _r65 && (_o87.__first = _s27),
          null === _i45 && (_o87.__last = _l19),
          null !== _c14 && (_c14.__next = _s27),
          null !== _a10 && (_a10.__prev = _l19),
          (_e162.__prev = null),
          (_e162.__next = null),
          (_e162.__parent = null),
          _o87.__size--);
      }
    }
    var Zl = Ql;
    function tc(t) {
      (hs(), fr(t) && e(323, t.__key, t.__type));
      var n = null !== t.__parent ? t.__parent : yu(t) ? t.__slotHost : null,
        o = gs(),
        r = _s(),
        i = o._nodeMap,
        s = r._dirtyElements;
      null !== n &&
        (function (t, e, n) {
          var o = t;
          for (; null !== o; ) {
            if (n.has(o)) return;
            var _t241 = e.get(o);
            if (void 0 === _t241) break;
            (n.set(o, !1),
              (o =
                null !== _t241.__parent
                  ? _t241.__parent
                  : yu(_t241)
                    ? _t241.__slotHost
                    : null));
          }
        })(n, i, s);
      var l = t.__key;
      (0 === r._dirtyType && (r._dirtyType = 1),
        Bs(t) ? s.set(l, !0) : r._dirtyLeaves.add(l));
    }
    function ec(t) {
      ds();
      var e = _s(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t242 = oc(n);
          null !== _t242 && _t242.getWritable();
        }
        if (null !== t) {
          var _e163 = oc(t);
          null !== _e163 && _e163.getWritable();
        }
      }
    }
    function nc() {
      return fs() ? null : _s()._compositionKey;
    }
    function oc(t, e) {
      var n = (e || gs())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function rc(t, e) {
      var n = sc(t, _s());
      return void 0 !== n ? oc(n, e) : null;
    }
    function ic(t, e, n) {
      t["__lexicalKey_" + e._key] = n;
    }
    function sc(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function lc(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t243 = rc(n, e);
        if (null !== _t243) return _t243;
        n = Ic(n);
      }
      return null;
    }
    function cc(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function ac(t) {
      return t.read(function () {
        return uc().getTextContent();
      });
    }
    function uc() {
      return gs()._nodeMap.get("root");
    }
    function fc(t, e) {
      if (
        !(
          Vc(t) &&
          t.isAttached() &&
          (js(t) ? 0 === t.getChildrenSize() : t.isEmpty()) &&
          (js(t) || (null !== e && va(e)))
        )
      )
        return null;
      var n = vl();
      return (t.append(n), n);
    }
    function dc(t) {
      ds();
      var e = gs();
      (null !== t &&
        ((t.dirty = !0),
        t.setCachedNodes(null),
        di(t) && _s()._slotsUsed && wi(t)),
        (e._selection = t));
    }
    function hc() {
      (ds(), gt(_s()));
    }
    function gc(t) {
      var e = (function (t, e) {
        var n = t;
        for (; null != n; ) {
          var _t244 = sc(n, e);
          if (void 0 !== _t244) return _t244;
          n = Ic(n);
        }
        return null;
      })(t, _s());
      return null === e ? null : oc(e);
    }
    function _c(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function pc(t) {
      var e = [];
      for (var _n127 = t; null !== _n127; _n127 = _n127._parentEditor)
        e.push(_n127);
      return e;
    }
    function mc() {
      return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substring(0, 5);
    }
    function yc(t) {
      return Jl(t) ? t.nodeValue : null;
    }
    function xc(t, e, n) {
      var o = Zc(Wc(e));
      if (null === o) return;
      var r = aa(o, e._rootElement),
        i = r.anchorNode;
      var s = r.anchorOffset,
        l = r.focusOffset;
      if (null !== i) {
        var _e164 = yc(i);
        var _o88 = lc(i);
        if (null !== _e164 && Qr(_o88)) {
          if ((_e164 === T || _e164 === N) && n) {
            var _t245 = n.length;
            ((_e164 = n), (s = _t245), (l = _t245));
          }
          null !== _e164 && Cc(_o88, _e164, s, l, t);
        }
      }
    }
    function Cc(t, e, n, o, r) {
      var i = t;
      if (i.isAttached() && (r || !i.isDirty())) {
        var _s28 = i.isComposing();
        if (i.isToken() && _s28) return;
        var _l20 = e;
        if (
          (_s28 || r) &&
          (e.endsWith(T) && (_l20 = e.slice(0, -T.length)), r)
        ) {
          var _t246 = N;
          var _e165;
          for (; -1 !== (_e165 = _l20.indexOf(_t246)); )
            ((_l20 = _l20.slice(0, _e165) + _l20.slice(_e165 + _t246.length)),
              null !== n &&
                n > _e165 &&
                (n = Math.max(_e165, n - _t246.length)),
              null !== o &&
                o > _e165 &&
                (o = Math.max(_e165, o - _t246.length)));
        }
        var _c15 = i.getTextContent();
        if (r || _l20 !== _c15) {
          var _e166 = Ki();
          if ("" === _l20) {
            if ((ec(null), p || g || x)) i.remove();
            else {
              var _t247 = _s();
              (Sc(i, "", _e166),
                setTimeout(function () {
                  _t247.update(function () {
                    i.isAttached() && "" === i.getTextContent() && i.remove();
                  });
                }, 20));
            }
            return;
          }
          var _r66 = i.getParent(),
            _c16 = Bi(),
            _a11 = i.getTextContentSize(),
            _u11 = nc(),
            _f12 = i.getKey();
          if (
            (i.isToken() && !_s28) ||
            (null !== _u11 && _f12 === _u11 && !_s28) ||
            (di(_c16) &&
              ((null !== _r66 &&
                !_r66.canInsertTextBefore() &&
                0 === _c16.anchor.offset) ||
                (_c16.anchor.key === t.__key &&
                  0 === _c16.anchor.offset &&
                  !i.canInsertTextBefore() &&
                  !_s28) ||
                (_c16.focus.key === t.__key &&
                  _c16.focus.offset === _a11 &&
                  !i.canInsertTextAfter() &&
                  !_s28)))
          )
            return void i.markDirty();
          if (!di(_e166) || null === n || null === o)
            return void Sc(i, _l20, _e166);
          if ((_e166.setTextNodeRange(i, n, i, o), i.isSegmented())) {
            var _t248 = Xr(i.getTextContent());
            (i.replace(_t248), (i = _t248));
          }
          Sc(i, _l20, _e166);
        }
      }
    }
    function Sc(t, e, n) {
      if ((t.setTextContent(e), di(n))) {
        var _e167 = t.getKey();
        var _o89 = !1;
        for (var _r67 of ["anchor", "focus"]) {
          var _i46 = n[_r67];
          "text" === _i46.type &&
            _i46.key === _e167 &&
            ((_i46.offset = Zu(t, _i46.offset, "clamp")), (_o89 = !0));
        }
        _o89 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
      }
    }
    function Tc(t, e, n) {
      var o = e[n] || !1;
      return "any" === o || o === t[n];
    }
    function vc(t, e) {
      return (
        Tc(t, e, "altKey") &&
        Tc(t, e, "ctrlKey") &&
        Tc(t, e, "shiftKey") &&
        Tc(t, e, "metaKey")
      );
    }
    function Nc(t) {
      var e = t;
      for (; null !== e; ) {
        var _t249 = e.getParent();
        if (null === _t249) return null;
        if (js(_t249)) return e;
        e = _t249;
      }
      return null;
    }
    function kc(t, e) {
      var n = t.anchor,
        o = t.focus,
        r = n.key,
        i = n.offset,
        s = n.type,
        l = o.key,
        c = o.offset,
        a = o.type;
      if ((_e(t), !js(e))) return t;
      var u = Nc(n.getNode());
      return (
        Bs(u) &&
          u.isShadowRoot() &&
          u.is(Nc(o.getNode())) &&
          (n.set(r, i, s), o.set(l, c, a)),
        t
      );
    }
    function bc(t, e) {
      "" === t.getAttribute(e) && t.removeAttribute(e);
    }
    function Oc(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        o = n[e];
      if (void 0 !== o) return o;
      var r = t[e];
      if ("string" == typeof r) {
        var _t250 = mf(r);
        return ((n[e] = _t250), _t250);
      }
      return r;
    }
    function Ec(t, n, o, r, i) {
      if (0 === o.size) return;
      var s = r.__type,
        l = r.__key,
        c = n.get(s);
      void 0 === c && e(33, s);
      var a = c.klass;
      var u = t.get(a);
      void 0 === u && ((u = new Map()), t.set(a, u));
      var f = u.get(l),
        d = "destroyed" === f && "created" === i;
      (void 0 === f || d) && u.set(l, d ? "updated" : i);
    }
    function Mc(t, e, n) {
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
    function Ac(t, e) {
      var n = t.offset;
      if ("element" === t.type) return Mc(t.getNode(), e, n);
      {
        var _o90 = t.getNode();
        if ((e && 0 === n) || (!e && n === _o90.getTextContentSize())) {
          var _t251 = e ? _o90.getPreviousSibling() : _o90.getNextSibling();
          return null === _t251
            ? Mc(
                _o90.getParentOrThrow(),
                e,
                _o90.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t251;
        }
      }
      return null;
    }
    function wc(t) {
      var e = Wc(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function Dc(t, e) {
      return Os(t, e, arguments.length <= 2 ? undefined : arguments[2], t);
    }
    function Fc(t, n) {
      var o = t._keyToDOMMap.get(n);
      return (void 0 === o && e(75, n), o);
    }
    function Ic(t) {
      var e = t.assignedSlot || t.parentElement;
      if (null !== e) return e;
      var n = t.parentNode;
      return ea(n) ? n.host : null;
    }
    function Pc(t) {
      return Yl(t) ? t : pa(t) ? t.ownerDocument : null;
    }
    function Rc(t, e) {
      var n = parseFloat(t);
      return isFinite(n) ? (t.endsWith("%") ? (n * e) / 100 : n) : 0;
    }
    function Lc(t, e, n, o) {
      var r = e.clientWidth,
        i = e.scrollWidth - r;
      if (i <= 0) return 0;
      var s = t.getComputedStyle(e);
      if ("auto" !== s.overflowX && "scroll" !== s.overflowX) return 0;
      var l = e.getBoundingClientRect(),
        c = e.offsetWidth,
        a = c > 0 && Math.abs(l.width - c) > 1 ? l.width / c : 1,
        u = "rtl" === s.direction,
        f = l.left + e.clientLeft * a,
        d = f + Rc(s.scrollPaddingLeft, r) * a,
        h = f + (r - Rc(s.scrollPaddingRight, r)) * a;
      var g = n,
        _ = Math.max(o, n + 1);
      _ - g > h - d && (u ? (g = _ - 1) : (_ = g + 1));
      var p = 0;
      if ((g < d ? (p = g - d) : _ > h && (p = _ - h), 0 === p)) return 0;
      var m = e.scrollLeft,
        y = m + p / a,
        x = p > 0 ? Math.ceil(y) : Math.floor(y);
      var C = u ? Math.min(0, Math.max(-i, x)) : Math.max(0, Math.min(i, x));
      var S = m * a;
      return (
        Math.abs(C) < Math.abs(m) && g + S >= d && _ + S <= h && (C = 0),
        C === m ? 0 : ((e.scrollLeft = C), (e.scrollLeft - m) * a)
      );
    }
    function Kc(t) {
      (ds(), _s()._updateTags.add(t));
    }
    function Bc(t) {
      (ds(), _s()._deferred.push(t));
    }
    function zc(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function $c(t) {
      var e = Pc(t);
      return e ? e.defaultView : null;
    }
    function Wc(t) {
      var n = t._window;
      return (null === n && e(78), n);
    }
    function Uc(t) {
      return (Bs(t) && t.isInline()) || (Ws(t) && t.isInline());
    }
    function jc(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== xu(e) && Bs(e)) return e;
        var _t252 = e.getParentOrThrow();
        if (Vc(_t252)) return _t252;
        e = _t252;
      }
      return e;
    }
    function Hc(t) {
      return Bs(t) && t.isShadowRoot();
    }
    function Vc(t) {
      return js(t) || Hc(t);
    }
    function Jc(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t, Il);
      return (
        Xl(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function Yc(t) {
      var n = _s(),
        o = t.getType(),
        r = Ll(n, o);
      void 0 === r && e(200, t.constructor.name, o);
      var i = r.replace,
        s = r.replaceWithKlass;
      if (null !== i) {
        var _n128 = i(t),
          _r68 = _n128.constructor;
        return (
          null !== s
            ? _n128 instanceof s ||
              e(
                201,
                s.name,
                s.getType(),
                _r68.name,
                _r68.getType(),
                t.constructor.name,
                o,
              )
            : (_n128 instanceof t.constructor && _r68 !== t.constructor) ||
              e(202, _r68.name, _r68.getType(), t.constructor.name, o),
          _n128.__key === t.__key &&
            e(203, t.constructor.name, o, _r68.name, _r68.getType()),
          _n128
        );
      }
      return t;
    }
    function Gc(t, n) {
      !js(t.getParent()) || Bs(n) || Ws(n) || e(99);
    }
    function qc(t) {
      var n = oc(t);
      return (null === n && e(63, t), n);
    }
    function Xc(t) {
      if (!t || t.isInline()) return !1;
      if (Ws(t)) return !0;
      if (Bs(t)) {
        if (t.isShadowRoot()) {
          var _e168 = t.getParent();
          return !(Bs(_e168) && _e168.isShadowRoot());
        }
        return !t.canBeEmpty();
      }
      return !1;
    }
    function Qc(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var o = t.parentElement;
      null !== o && o.removeChild(t);
    }
    function Zc(t) {
      return r ? (t || window).getSelection() : null;
    }
    function ta(t) {
      var e = $c(t);
      return e ? e.getSelection() : null;
    }
    function ea(t) {
      return ya(t) && "host" in t;
    }
    var na = [];
    function oa(t) {
      var e = t.getRootNode();
      if (e === t || !ea(e)) return na;
      var n = [e];
      var o = e.host;
      for (;;) {
        var _t253 = o.getRootNode();
        if (_t253 === o || !ea(_t253)) break;
        (n.push(_t253), (o = _t253.host));
      }
      return n;
    }
    function* ra(t) {
      var e = [t];
      var n;
      for (; (n = e.pop()); ) {
        yield* n.querySelectorAll('[data-lexical-editor="true"]');
        var _t254 = (Yl(n) ? n : n.ownerDocument).createTreeWalker(
          n,
          NodeFilter.SHOW_ELEMENT,
        );
        var _o91 = void 0;
        for (; (_o91 = _t254.nextNode()); )
          _o91.shadowRoot && e.push(_o91.shadowRoot);
      }
    }
    function ia(t) {
      return null !== t ? t.ownerDocument : document;
    }
    function sa() {
      var t = ys();
      return ia(null !== t ? t._rootElement : null);
    }
    function la(t, e) {
      if (null === e || "function" != typeof t.getComposedRanges) return null;
      var n = oa(e);
      if (0 === n.length) return null;
      var o = t.getComposedRanges;
      try {
        var _e169 = o.call(t, { shadowRoots: n })[0];
        if (void 0 !== _e169) return _e169;
      } catch (t) {}
      try {
        var _e170 = o.apply(t, n)[0];
        if (void 0 !== _e170) return _e170;
      } catch (t) {}
      return null;
    }
    function ca(t, e) {
      var n = la(t, e);
      if (null !== n) {
        var _t255 = ua(n);
        if (null !== _t255) return _t255;
      }
      return t.rangeCount > 0 ? t.getRangeAt(0) : null;
    }
    function aa(t, e) {
      var n = la(t, e);
      return null === n ? t : fa(n, da(t));
    }
    function ua(t) {
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
    function fa(t, e) {
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
    function da(t) {
      return t.direction;
    }
    function ha(t) {
      var e = t.getRootNode();
      return Yl(e) || ea(e) ? e.activeElement : null;
    }
    function ga(t) {
      var e = t.activeElement;
      for (; null !== e && null !== e.shadowRoot; ) {
        var _t256 = e.shadowRoot.activeElement;
        if (null === _t256) break;
        e = _t256;
      }
      return e;
    }
    function _a(t) {
      var e = t.target;
      if (
        null !== e &&
        pa(e) &&
        null !== e.shadowRoot &&
        "function" == typeof t.composedPath
      ) {
        var _e171 = t.composedPath();
        if (_e171.length > 0) return _e171[0];
      }
      return e;
    }
    function pa(t) {
      return ma(t) && 1 === t.nodeType;
    }
    function ma(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function ya(t) {
      return ma(t) && 11 === t.nodeType;
    }
    var xa =
      /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
    function Ca(t) {
      return (
        !(!pa(t) || !t.style.display.startsWith("inline")) ||
        xa.test(t.nodeName)
      );
    }
    var Sa =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function Ta(t) {
      return (
        (!pa(t) || !t.style.display.startsWith("inline")) && Sa.test(t.nodeName)
      );
    }
    function va(t) {
      if (Ws(t) && !t.isInline()) return !0;
      if (!Bs(t) || Vc(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || Zs(e) || Qr(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function Na() {
      return _s();
    }
    function ka(t) {
      if (t === void 0) {
        t = Na();
      }
      return t._config.dom || El;
    }
    function ba(t, n, o) {
      if (o === void 0) {
        o = Na();
      }
      var r = ka(o).$getDOMSlot(t, n, o);
      return (Bs(t) && (Oa(r) || e(344, t.getKey(), t.getType())), r);
    }
    function Oa(t) {
      return t instanceof _J;
    }
    function Ea(t, e, n) {
      if (n === void 0) {
        n = Na();
      }
      return Gl(ba(t, e, n).element);
    }
    var Ma = new WeakMap(),
      Aa = new Map();
    function wa(t) {
      if (!t._readOnly && t.isEmpty()) return Aa;
      t._readOnly || e(192);
      var n = Ma.get(t);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref48 of t._nodeMap) {
              var _n129 = _ref48[0];
              var _o92 = _ref48[1];
              {
                var _t257 = _o92.__type;
                var _r69 = e.get(_t257);
                (_r69 || ((_r69 = new Map()), e.set(_t257, _r69)),
                  _r69.set(_n129, _o92));
              }
            }
            return e;
          })(t)),
          Ma.set(t, n)),
        n
      );
    }
    function Da(t) {
      var e = t.constructor.clone(t, Il);
      return (e.afterCloneFrom(t), e);
    }
    function Fa(t, e) {
      var n = t.getAttribute("data-lexical-indent");
      if (null !== n) {
        var _t258 = parseInt(n, 10);
        if (Number.isFinite(_t258) && _t258 >= 0)
          return void e.setIndent(_t258);
      }
      var o = parseInt(t.style.paddingInlineStart, 10) || 0,
        r = Math.round(o / 40);
      e.setIndent(r);
    }
    function Ia(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function Pa(t, e) {
      var n = e.style.textAlign;
      return n && n in D ? t.setFormat(n) : t;
    }
    function Ra(t, e) {
      ((t.__lexicalUnmanaged = !0),
        e &&
          void 0 !== e.captureSelection &&
          (t.__lexicalCapturedSelection = e.captureSelection));
    }
    function La(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function Ka(t, e) {
      if (e === void 0) {
        e = Na();
      }
      var n = e.isEditable();
      ((t.contentEditable = n ? "true" : "false"),
        n ? (t.__lexicalEditor = e) : delete t.__lexicalEditor);
    }
    function Ba(t, e) {
      var n = t;
      for (; null != n; ) {
        if (!0 === n.__lexicalCapturedSelection) return !0;
        if (pa(n) && n.hasAttribute("data-lexical-slot")) return !1;
        if (void 0 !== sc(n, e)) return !1;
        n = Ic(n);
      }
      return !1;
    }
    function za(t, e) {
      return Kt(t, e) && t[e] !== _hr5[e];
    }
    var $a = new WeakMap();
    function Wa(t) {
      var n = $a.get(t);
      return void 0 !== n
        ? n
        : (function (t) {
            var n =
                null != t.prototype && B in t.prototype
                  ? t.prototype[B]()
                  : void 0,
              o = (function (t) {
                if (!(t === _hr5 || t.prototype instanceof _hr5)) {
                  var _n130 = "<unknown>",
                    _o93 = "<unknown>";
                  try {
                    _n130 = t.getType();
                  } catch (t) {}
                  try {
                    _wl.version && (_o93 = JSON.parse(_wl.version));
                  } catch (t) {}
                  e(290, t.name, _n130, _o93);
                }
                return t === _$s || t === _Ks4 || t === _hr5;
              })(t),
              r = !o && za(t, "getType") ? t.getType : void 0,
              i = r && !(ja in r) ? r.call(t) : void 0;
            var s,
              l = i;
            if (n)
              if (i) s = n[i];
              else {
                for (var _ref50 of Object.entries(n)) {
                  var _t259 = _ref50[0];
                  var _e172 = _ref50[1];
                  ((l = _t259), (s = _e172));
                }
                if (!s)
                  for (var _t260 of Object.getOwnPropertySymbols(n)) {
                    var _e173 = n[_t260];
                    if (_e173) {
                      s = _e173;
                      break;
                    }
                  }
              }
            var c = {
              compiled: void 0,
              composed: void 0,
              config: {
                declaresOwnConfig: Kt(t.prototype, B),
                klass: t,
                ownNodeConfig: s,
                ownNodeType: l,
              },
              ownFieldsValidated: !1,
            };
            $a.set(t, c);
            try {
              var _n131 = (function (t) {
                  var n = t.prototype,
                    o = new Map(),
                    _Xa = Xa(t),
                    r = _Xa.fieldsBaseFirst;
                  for (var _ref52 of r) {
                    var _i48 = _ref52[0];
                    var _s29 = _ref52[1];
                    {
                      var _r71 = tu(t, _i48, _s29);
                      if (null === _r71) continue;
                      if (yt(_r71)) {
                        var _n132 = _r71.field;
                        if (
                          ("__proto__" === _n132 && e(430, t.name, _i48),
                          void 0 !== _r71.setterTable)
                        ) {
                          var _n133 = _r71.setterTable,
                            _o94 = _s29.meta;
                          for (var _r72 of "enum" === _o94.kind
                            ? _o94.values
                            : [_s29.defaultValue])
                            Kt(_n133, String(_r72)) ||
                              e(431, t.name, _i48, JSON.stringify(_r72));
                        }
                        o.set(_i48, {
                          field: _n132,
                          key: _i48,
                          kind: "ownField",
                          schema: _s29,
                          setterTable: _r71.setterTable,
                        });
                        continue;
                      }
                      var _l21 = n[_r71];
                      ("function" != typeof _l21 && e(432, t.name, _i48, _r71),
                        o.set(_i48, {
                          key: _i48,
                          kind: "field",
                          schema: _s29,
                          setter: _l21,
                        }));
                    }
                  }
                  return 0 === o.size ? Ha : [].concat(Array.from(o.values()));
                })(t),
                _r70 = (function (t) {
                  var n = t.prototype,
                    o = new Map();
                  for (var _ref54 of Xa(t).fieldsDerivedFirst) {
                    var _r73 = _ref54[0];
                    var _i49 = _ref54[1];
                    {
                      var _s30 = Za(t, _r73, _i49);
                      if (null === _s30) continue;
                      if (yt(_s30)) {
                        var _l22 = _s30.field;
                        "__proto__" === _l22 && e(426, t.name, _r73);
                        var _c17 = _s30.when;
                        var _a13 = void 0;
                        if (void 0 !== _c17) {
                          var _o95 = n[_c17];
                          ("function" != typeof _o95 &&
                            e(427, t.name, _r73, _c17),
                            (_a13 = _o95));
                        }
                        o.set(_r73, {
                          defaultValue: _i49.defaultValue,
                          derived: null === _i49.setter,
                          field: _l22,
                          getterTable: _s30.getterTable,
                          isEqual: _i49.isEqual,
                          key: _r73,
                          kind: "ownField",
                          schema: _i49,
                          when: _a13,
                        });
                        continue;
                      }
                      var _l23 = n[_s30];
                      ("function" != typeof _l23 && e(428, t.name, _r73, _s30),
                        o.set(_r73, {
                          defaultValue: _i49.defaultValue,
                          derived: null === _i49.setter,
                          getter: _l23,
                          isEqual: _i49.isEqual,
                          key: _r73,
                          kind: "method",
                          schema: _i49,
                        }));
                    }
                  }
                  return 0 === o.size ? Qa : [].concat(Array.from(o.values()));
                })(t),
                _i47 = Xa(t),
                _a12 = (function (t, e, n) {
                  var o,
                    r = t;
                  for (var _ref56 of fu(t)) {
                    var _e174 = _ref56.klass;
                    var _n134 = _ref56.ownNodeConfig;
                    _n134 &&
                      void 0 !== _n134.generated &&
                      (void 0 === o
                        ? ((o = _n134.generated), (r = _e174))
                        : _n134.generated === o && (r = _e174));
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
                            var _n135 = 0;
                            _n135 < t.getters.length;
                            _n135++
                          ) {
                            var _o96 = t.getters[_n135],
                              _r74 = e.getters[_n135];
                            if (
                              _o96.kind !== _r74.kind ||
                              _o96.key !== _r74.key ||
                              _o96.schema !== _r74.schema ||
                              _o96.derived !== _r74.derived ||
                              _o96.isEqual !== _r74.isEqual ||
                              !Object.is(
                                _o96.defaultValue,
                                _r74.defaultValue,
                              ) ||
                              ("ownField" === _o96.kind &&
                                "ownField" === _r74.kind &&
                                (_o96.field !== _r74.field ||
                                  (void 0 === _o96.getterTable) !=
                                    (void 0 === _r74.getterTable)))
                            )
                              return !1;
                          }
                          for (
                            var _n136 = 0;
                            _n136 < t.setters.length;
                            _n136++
                          ) {
                            var _o97 = t.setters[_n136],
                              _r75 = e.setters[_n136];
                            if (
                              _o97.kind !== _r75.kind ||
                              _o97.key !== _r75.key ||
                              _o97.schema !== _r75.schema ||
                              ("ownField" === _o97.kind &&
                                "ownField" === _r75.kind &&
                                (_o97.field !== _r75.field ||
                                  (void 0 === _o97.setterTable) !=
                                    (void 0 === _r75.setterTable)))
                            )
                              return !1;
                          }
                          return !0;
                        })(n, Ua(Wa(r)))
                      ? o
                      : null;
                })(t, 0, { getters: _r70, setters: _n131 });
              ((c.compiled = {
                flatStates: _i47.flatStates,
                generated: null === _a12 ? null : _a12(_i47.fields),
                getters: _r70,
                isCompactDefault: ou(_r70),
                setters: _n131,
              }),
                (function (t, e, n, o) {
                  if (!e && n) {
                    if (!za(t, "getType")) {
                      var _e175 = t,
                        _o98 = function _o98() {
                          return this !== _e175 ? _hr5.getType.call(this) : n;
                        };
                      ((_o98[ja] = !0), (t.getType = _o98));
                    }
                    if (
                      (za(t, "clone") ||
                        (t.clone = function (e, n) {
                          Fl(e);
                          var o = new t();
                          return (n !== Il && o.afterCloneFrom(e), o);
                        }),
                      za(t, "importJSON") ||
                        (t.importJSON =
                          (o && o.$importJSON) ||
                          (function (t) {
                            return function (e) {
                              var n = du(t);
                              return n.updateFromJSON ===
                                _hr5.prototype.updateFromJSON
                                ? (function (t, e) {
                                    return iu(
                                      t.__state || void 0 !== e[L]
                                        ? se(t, e)
                                        : t,
                                      e,
                                    );
                                  })(n, e)
                                : n.updateFromJSON(e);
                            };
                          })(t)),
                      !za(t, "importDOM") && o)
                    ) {
                      var _e176 = o.importDOM;
                      _e176 &&
                        (t.importDOM = function () {
                          return _e176;
                        });
                    }
                  }
                })(t, o, l, s),
                (function (t) {
                  var _loop4 = function _loop4() {
                      var e = _ref58.klass;
                      var n = _ref58.ownNodeConfig;
                      {
                        var _t261 = e.prototype;
                        if (Kt(_t261, "afterCloneFrom")) return 0;
                        var _o99 = uu(e);
                        if (0 === _o99.length) return 0;
                        var _r76 = Object.getPrototypeOf(_t261),
                          _i50 =
                            n && void 0 !== n.generated
                              ? Ua(Wa(e)).generated
                              : null,
                          _s31 =
                            (null !== _i50 && _i50.afterCloneFrom) ||
                            function (t, e) {
                              var n = t,
                                r = e;
                              for (
                                var _t262 = 0;
                                _t262 < _o99.length;
                                _t262++
                              ) {
                                var _e177 = _o99[_t262];
                                n[_e177] = r[_e177];
                              }
                            };
                        ((_t261.afterCloneFrom = function (t) {
                          (_r76.afterCloneFrom.call(this, t), _s31(this, t));
                        }),
                          (_t261.afterCloneFrom[cu] = !0));
                      }
                    },
                    _ret2;
                  for (var _ref58 of fu(t)) {
                    _ret2 = _loop4();
                    if (_ret2 === 0) continue;
                  }
                })(t));
            } catch (e) {
              throw ($a["delete"](t), e);
            }
            return c;
          })(t);
    }
    function Ua(t) {
      var n = t.compiled;
      return (void 0 === n && e(422, t.config.klass.name), n);
    }
    var ja = Symbol("lexical.synthesizedGetType"),
      Ha = [];
    function Va(t, e, n, o) {
      var r = void 0 === n.method ? o : n.method,
        i = Xa(t).declaredBy.get(e);
      if (void 0 === i) return n;
      var s = t.prototype,
        l = i.prototype;
      return Ja(s, l, r) && Ja(s, l, o) ? n : r;
    }
    function Ja(t, e, n) {
      return t[n] === e[n];
    }
    function Ya(t) {
      return "set" + t.charAt(0).toUpperCase() + t.slice(1);
    }
    function Ga(t) {
      return "get" + t.charAt(0).toUpperCase() + t.slice(1);
    }
    var qa = {
      declaredBy: new Map(),
      fields: new Map(),
      fieldsBaseFirst: [],
      fieldsDerivedFirst: [],
      flatStates: [],
    };
    function Xa(t) {
      var e = Wa(t);
      return (
        void 0 === e.composed &&
          (e.composed = (function (t) {
            var e = [],
              n = [],
              o = [];
            for (var _ref60 of fu(t)) {
              var _r77 = _ref60.klass;
              var _i51 = _ref60.ownNodeConfig;
              {
                var _t263 = _i51 && _i51.json;
                (n.push(_r77),
                  e.push(
                    _t263 && "node" === _t263.meta.kind
                      ? Object.entries(_t263.meta.fields)
                      : [],
                  ));
                var _s32 = [];
                if (_i51 && _i51.stateConfigs)
                  for (var _t264 of _i51.stateConfigs)
                    "stateConfig" in _t264 &&
                      _t264.flat &&
                      _s32.push(_t264.stateConfig);
                o.push(_s32);
              }
            }
            var r = new Map();
            for (var _t265 = 0; _t265 < e.length; _t265++)
              for (var _ref62 of e[_t265]) {
                var _n137 = _ref62[0];
                var _o100 = _ref62[1];
                r.has(_n137) || r.set(_n137, _o100);
              }
            var i = new Map(),
              s = new Map(),
              l = new Map();
            for (var _t266 = e.length - 1; _t266 >= 0; _t266--) {
              for (var _ref64 of e[_t266]) {
                var _o101 = _ref64[0];
                var _l24 = _ref64[1];
                {
                  var _e178 = r.get(_o101);
                  (void 0 === _e178 || i.has(_o101) || i.set(_o101, _e178),
                    void 0 === _e178 ||
                      _l24 !== _e178 ||
                      s.has(_o101) ||
                      s.set(_o101, n[_t266]));
                }
              }
              for (var _e179 of o[_t266])
                l.has(_e179.key) || l.set(_e179.key, _e179);
            }
            return 0 === r.size && 0 === l.size
              ? qa
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
    var Qa = [];
    function Za(t, e, n) {
      var o = n.getter;
      if (null === o) return null;
      var r = void 0 === o ? Ga(e) : o;
      return yt(r) ? Va(t, e, r, Ga(e)) : r;
    }
    function tu(t, e, n) {
      var o = n.setter;
      if (null === o) return null;
      var r = void 0 === o ? Ya(e) : o;
      return yt(r) ? Va(t, e, r, Ya(e)) : r;
    }
    function eu(t) {
      return t;
    }
    function nu(t, e) {
      var n = t.defaultValue,
        o = t.isEqual;
      return void 0 === e || e === n || (void 0 !== o && o(e, n));
    }
    function ou(t) {
      var e;
      return function (n, o) {
        void 0 === e &&
          (e = new Map(
            t.map(function (t) {
              return [t.key, t];
            }),
          ));
        var r = e.get(n);
        return void 0 !== r && nu(r, o);
      };
    }
    function ru(t) {
      var e = t.setterTable,
        n = t.schema,
        o = n.defaultValue;
      return void 0 === e ? o : e[String(o)];
    }
    function iu(t, e) {
      var n = Wa(t.constructor),
        _Ua = Ua(n),
        o = _Ua.flatStates,
        r = _Ua.generated,
        i = _Ua.setters,
        s = (function (t, e, n) {
          var o = t;
          var _loop5 = function _loop5() {
            var r = n[_t267],
              i = e[r.key];
            if (void 0 !== i) {
              var _t268 = r.parse(i);
              o = ee(o, r, function () {
                return _t268;
              });
            }
          };
          for (var _t267 = 0; _t267 < n.length; _t267++) {
            _loop5();
          }
          return o;
        })(t, e, o);
      return null !== r && void 0 !== r.updateFromJSON
        ? r.updateFromJSON(s, e)
        : (function (t, e, n) {
            for (var _o102 = 0; _o102 < n.length; _o102++) {
              var _r78 = n[_o102],
                _i52 = _r78.schema(e[_r78.key]);
              "ownField" === _r78.kind
                ? (eu(t)[_r78.field] =
                    void 0 === _r78.setterTable
                      ? _i52
                      : Kt(_r78.setterTable, _i52)
                        ? _r78.setterTable[_i52]
                        : ru(_r78))
                : _r78.setter.call(t, _i52);
            }
            return t;
          })(s, e, i);
    }
    function su(t) {
      return Wa(t).config;
    }
    function lu(t) {
      var e = [];
      for (var _n138 of [t.getter, t.setter])
        yt(_n138) &&
          "__proto__" !== _n138.field &&
          !e.includes(_n138.field) &&
          e.push(_n138.field);
      return e;
    }
    var cu = "__lexicalSynthesizedAfterCloneFrom";
    function au(t) {
      var _Xa2 = Xa(t),
        e = _Xa2.declaredBy,
        n = _Xa2.fieldsBaseFirst,
        o = [];
      for (var _ref66 of n) {
        var _r79 = _ref66[0];
        var _i53 = _ref66[1];
        if (e.get(_r79) === t)
          for (var _t269 of lu(_i53)) o.includes(_t269) || o.push(_t269);
      }
      return o;
    }
    function uu(t) {
      var e = au(t);
      if (0 === e.length) return e;
      var n = new Set();
      for (var _ref68 of fu(t)) {
        var _e180 = _ref68.klass;
        if (_e180 !== t) for (var _t270 of au(_e180)) n.add(_t270);
      }
      return 0 === n.size
        ? e
        : e.filter(function (t) {
            return !n.has(t);
          });
    }
    function* fu(t) {
      for (var _e181 = t; _e181 && (_e181 === _hr5 || gr(_e181.prototype)); ) {
        var _t271 = su(_e181),
          _n139 = _t271.declaresOwnConfig;
        (yield _n139
          ? _t271
          : babelHelpers["extends"]({}, _t271, { ownNodeConfig: void 0 }),
          (_e181 =
            (_n139 && _t271.ownNodeConfig && _t271.ownNodeConfig["extends"]) ||
            _u(_e181)));
      }
    }
    function du(t) {
      var e = Na();
      ds();
      var n = e.resolveRegisteredNodeAfterReplacements(e.getRegisteredNode(t)),
        o = new n.klass();
      return null === n.replace ? o : Yc(o);
    }
    var hu = function hu(t, e) {
      var n = t;
      for (; null != n && !js(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function gu(t, n) {
      var o = [];
      var r = t.__first;
      for (; null !== r; ) {
        var _t272 = null === n ? oc(r) : n.get(r);
        (null == _t272 && e(174), o.push(r), (r = _t272.__next));
      }
      return o;
    }
    function _u(t) {
      var e = Object.getPrototypeOf(t);
      if ("function" == typeof e && e !== Function.prototype) return e;
      var n = t.prototype && Object.getPrototypeOf(t.prototype);
      return n ? n.constructor : null;
    }
    var pu = new Map();
    function mu(t) {
      return Bs(t) || Ws(t);
    }
    function yu(t) {
      return Bs(t) || Ws(t);
    }
    function xu(t) {
      var e = t.getLatest();
      return yu(e) ? e.__slotHost : null;
    }
    function Cu(t) {
      var n = xu(t);
      if (null === n) return null;
      var o = oc(n);
      return (Bs(o) || Ws(o) || e(370), o);
    }
    function Su(t) {
      var e = Cu(t);
      if (null === e) return null;
      var n = t.getLatest().__key;
      for (var _ref70 of Nu(e)) {
        var _t273 = _ref70[0];
        var _o103 = _ref70[1];
        if (_o103 === n) return _t273;
      }
      return null;
    }
    function Tu(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== xu(e)) return e;
        e = e.getParent();
      }
      return null;
    }
    function vu(t) {
      var _t$getNodes$;
      if (null === t) return null;
      var e = di(t)
        ? t.anchor.getNode()
        : (_t$getNodes$ = t.getNodes()[0]) != null
          ? _t$getNodes$
          : null;
      return null === e ? null : Tu(e);
    }
    function Nu(t) {
      var e = t.getLatest();
      return mu(e) && null !== e.__slots ? e.__slots : pu;
    }
    function ku(t) {
      return Array.from(Nu(t).keys());
    }
    function bu(t, e) {
      var n = Nu(t).get(e);
      return void 0 === n ? null : oc(n);
    }
    var Ou = ["__proto__", "constructor", "prototype"],
      Eu = Symbol("slotMapOwner");
    function Mu(t) {
      var e = t.__slots;
      return (
        (null !== e && e[Eu] === t) ||
          ((e = new Map(e)), (e[Eu] = t), (t.__slots = e)),
        e
      );
    }
    var Au = new WeakMap(),
      wu = [];
    function Du(t) {
      for (var _ref72 of fu(t)) {
        var _e182 = _ref72.ownNodeConfig;
        {
          var _t274 = _e182 && _e182.slots;
          if (_t274) return _t274;
        }
      }
      return wu;
    }
    function Fu(t) {
      var e = "";
      for (var _n140 of ku(t)) {
        var _o104 = bu(t, _n140);
        null !== _o104 && (e += _o104.getTextContent());
      }
      return e;
    }
    function Iu(t, e, n) {
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
    function Pu(t, n, o) {
      ("__proto__" !== n && "constructor" !== n && "prototype" !== n) ||
        e(373, n);
      var r = t.getLatest();
      if (null !== r.__slots && r.__slots.get(n) === o.getLatest().__key)
        return r;
      ((!Bs(o) && !Ws(o)) || o.isInline()) && e(374, o.__key);
      var i = t.getWritable(),
        s = Mu(i),
        l = s.get(n);
      void 0 !== l && Ru(l);
      var c = o.getWritable(),
        a = Cu(c);
      if (null !== a) {
        var _t275 = Su(c);
        (null !== _t275 && Mu(a.getWritable())["delete"](_t275),
          (c.__slotHost = null));
      }
      return (
        Ql(c),
        (c.__slotHost = i.__key),
        s.set(n, c.__key),
        (function (t) {
          var n = t.__slots;
          if (null === n || n.size < 2) return;
          var o = (function (t) {
            var n = Au.get(t);
            if (void 0 === n) {
              var _o105 = Du(t),
                _r80 = new Map();
              for (var _n141 of _o105)
                (Ou.includes(_n141) && e(371, t.name, _n141),
                  _r80.has(_n141) && e(372, t.name, _n141),
                  _r80.set(_n141, _r80.size));
              ((n = _r80), Au.set(t, n));
            }
            return n;
          })(t.constructor);
          var r = null,
            i = !0;
          for (var _t276 of n.keys()) {
            if (null !== r && Iu(r, _t276, o) > 0) {
              i = !1;
              break;
            }
            r = _t276;
          }
          if (i) return;
          var s = Array.from(n).sort(function (_ref73, _ref74) {
            var t = _ref73[0];
            var e = _ref74[0];
            return Iu(t, e, o);
          });
          n.clear();
          for (var _ref76 of s) {
            var _t277 = _ref76[0];
            var _e183 = _ref76[1];
            n.set(_t277, _e183);
          }
        })(i),
        (_s()._slotsUsed = !0),
        (gs()._slotsUsed = !0),
        i
      );
    }
    function Ru(t) {
      var n = oc(t);
      if (null === n) return;
      var o = n.getWritable();
      (yu(o) || e(377, t), (o.__slotHost = null), o.remove());
    }
    var Lu = { next: "previous", previous: "next" };
    var _Ku4 = (function () {
      function Ku(t) {
        this.origin = t;
      }
      var _proto19 = Ku.prototype;
      _proto19[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return ff({
            hasNext: Vu,
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
        return Xu(this.getNodeAtCaret(), this.direction);
      };
      _proto19.getSiblingCaret = function getSiblingCaret() {
        return Xu(this.origin, this.direction);
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
      _proto19.splice = function splice(t, n, o) {
        if (o === void 0) {
          o = "next";
        }
        var r = o === this.direction ? n : Array.from(n).reverse();
        var i = this;
        var s = this.getParentAtCaret(),
          l = new Map();
        for (
          var _e184 = i.getAdjacentCaret();
          null !== _e184 && l.size < t;
          _e184 = _e184.getAdjacentCaret()
        ) {
          var _t278 = _e184.origin.getWritable();
          l.set(_t278.getKey(), _t278);
        }
        for (var _t279 of r) {
          if (l.size > 0) {
            var _n142 = i.getNodeAtCaret();
            if (_n142) {
              if (
                (l["delete"](_n142.getKey()),
                l["delete"](_t279.getKey()),
                _n142.is(_t279) || i.origin.is(_t279))
              );
              else {
                var _e185 = _t279.getParent();
                (_e185 && _e185.is(s) && _t279.remove(), _n142.replace(_t279));
              }
            } else null === _n142 && e(263, Array.from(l).join(" "));
          } else i.insert(_t279);
          i = Xu(_t279, this.direction);
        }
        for (var _t280 of l.values()) _t280.remove();
        return this;
      };
      return Ku;
    })();
    var _Bu3 = (function (_Ku) {
      function Bu() {
        var _this6;
        for (
          var _len9 = arguments.length, args = new Array(_len9), _key9 = 0;
          _key9 < _len9;
          _key9++
        ) {
          args[_key9] = arguments[_key9];
        }
        return (
          ((_this6 = _Ku.call.apply(_Ku, [this].concat(args)) || this),
          (_this6.type = "child"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(Bu, _Ku);
      var _proto20 = Bu.prototype;
      _proto20.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : ef(t, this.direction);
      };
      _proto20.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Xu(Wu(this.getParentAtCaret(), t), this.direction);
      };
      _proto20.getFlipped = function getFlipped() {
        var t = $u(this.direction);
        return Xu(this.getNodeAtCaret(), t) || ef(this.origin, t);
      };
      _proto20.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto20.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto20.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof Bu &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto20.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return Bu;
    })(_Ku4);
    var zu = { root: js, shadowRoot: Vc };
    function $u(t) {
      return Lu[t];
    }
    function Wu(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return null === t || zu[e](t) ? null : null === xu(t) ? t : null;
    }
    var _Uu3 = (function (_Ku2) {
      function Uu() {
        var _this7;
        for (
          var _len0 = arguments.length, args = new Array(_len0), _key0 = 0;
          _key0 < _len0;
          _key0++
        ) {
          args[_key0] = arguments[_key0];
        }
        return (
          ((_this7 = _Ku2.call.apply(_Ku2, [this].concat(args)) || this),
          (_this7.type = "sibling"),
          babelHelpers.assertThisInitialized(_this7)) ||
          babelHelpers.assertThisInitialized(_this7)
        );
      }
      babelHelpers.inheritsLoose(Uu, _Ku2);
      var _proto21 = Uu.prototype;
      _proto21.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Xu(t, this.direction);
      };
      _proto21.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto21.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto21.getChildCaret = function getChildCaret() {
        return Bs(this.origin) ? ef(this.origin, this.direction) : null;
      };
      _proto21.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Xu(Wu(this.getParentAtCaret(), t), this.direction);
      };
      _proto21.getFlipped = function getFlipped() {
        var t = $u(this.direction);
        return (
          Xu(this.getNodeAtCaret(), t) || ef(this.origin.getParentOrThrow(), t)
        );
      };
      _proto21.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Uu &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto21.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof Uu || t instanceof _ju3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return Uu;
    })(_Ku4);
    var _ju3 = (function (_Ku3) {
      function ju(t, e) {
        var _this8;
        ((_this8 = _Ku3.call(this, t) || this),
          (_this8.type = "text"),
          (_this8.offset = e));
        return _this8;
      }
      babelHelpers.inheritsLoose(ju, _Ku3);
      var _proto22 = ju.prototype;
      _proto22.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Qu(t, this.direction, this.offset);
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
        return Xu(Wu(this.getParentAtCaret(), t), this.direction);
      };
      _proto22.getFlipped = function getFlipped() {
        return Qu(this.origin, $u(this.direction), this.offset);
      };
      _proto22.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof ju &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto22.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _Uu3 || t instanceof ju) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto22.getSiblingCaret = function getSiblingCaret() {
        return Xu(this.origin, this.direction);
      };
      return ju;
    })(_Ku4);
    function Hu(t) {
      return t instanceof _ju3;
    }
    function Vu(t) {
      return t instanceof _Uu3;
    }
    function Ju(t) {
      return t instanceof _Bu3;
    }
    var Yu = {
        next: (function (_ju) {
          function _class() {
            var _this9;
            for (
              var _len1 = arguments.length, args = new Array(_len1), _key1 = 0;
              _key1 < _len1;
              _key1++
            ) {
              args[_key1] = arguments[_key1];
            }
            return (
              ((_this9 = _ju.call.apply(_ju, [this].concat(args)) || this),
              (_this9.direction = "next"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class, _ju);
          var _proto23 = _class.prototype;
          _proto23.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto23.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_ju3),
        previous: (function (_ju2) {
          function _class3() {
            var _this0;
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
              ((_this0 = _ju2.call.apply(_ju2, [this].concat(args)) || this),
              (_this0.direction = "previous"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class3, _ju2);
          var _proto24 = _class3.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_ju3),
      },
      Gu = {
        next: (function (_Uu) {
          function _class5() {
            var _this1;
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
              ((_this1 = _Uu.call.apply(_Uu, [this].concat(args)) || this),
              (_this1.direction = "next"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class5, _Uu);
          var _proto25 = _class5.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_Uu3),
        previous: (function (_Uu2) {
          function _class7() {
            var _this10;
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
              ((_this10 = _Uu2.call.apply(_Uu2, [this].concat(args)) || this),
              (_this10.direction = "previous"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class7, _Uu2);
          var _proto26 = _class7.prototype;
          _proto26.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto26.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_Uu3),
      },
      qu = {
        next: (function (_Bu) {
          function _class9() {
            var _this11;
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
              ((_this11 = _Bu.call.apply(_Bu, [this].concat(args)) || this),
              (_this11.direction = "next"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class9, _Bu);
          var _proto27 = _class9.prototype;
          _proto27.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto27.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_Bu3),
        previous: (function (_Bu2) {
          function _class1() {
            var _this12;
            for (
              var _len14 = arguments.length,
                args = new Array(_len14),
                _key14 = 0;
              _key14 < _len14;
              _key14++
            ) {
              args[_key14] = arguments[_key14];
            }
            return (
              ((_this12 = _Bu2.call.apply(_Bu2, [this].concat(args)) || this),
              (_this12.direction = "previous"),
              babelHelpers.assertThisInitialized(_this12)) ||
              babelHelpers.assertThisInitialized(_this12)
            );
          }
          babelHelpers.inheritsLoose(_class1, _Bu2);
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
        })(_Bu3),
      };
    function Xu(t, e) {
      return t ? new Gu[e](t) : null;
    }
    function Qu(t, e, n) {
      return t ? new Yu[e](t, Zu(t, n)) : null;
    }
    function Zu(t, e, o) {
      if (o === void 0) {
        o = "error";
      }
      var r = t.getTextContentSize();
      var i = "next" === e ? r : "previous" === e ? 0 : e;
      return (
        (i < 0 || i > r) &&
          ("clamp" !== o && n(284, String(e), String(r), t.getKey()),
          (i = i < 0 ? 0 : r)),
        i
      );
    }
    function tf(t, e) {
      return new _sf(t, e);
    }
    function ef(t, e) {
      return Bs(t) ? new qu[e](t) : null;
    }
    function nf(t) {
      return (t && t.getChildCaret()) || t;
    }
    function of(t) {
      return t && nf(t.getAdjacentCaret());
    }
    var _rf = (function () {
      function rf(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto29 = rf.prototype;
      _proto29.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new rf(t, e, this.direction);
      };
      _proto29.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto29.getTextSlices = function getTextSlices() {
        var _this17 = this;
        var t = function t(_t281) {
            var e = _this17[_t281].getLatest();
            return Hu(e)
              ? (function (t, e) {
                  var n = t.direction,
                    o = t.origin;
                  return tf(t, Zu(o, "focus" === e ? $u(n) : n) - t.offset);
                })(e, _t281)
              : null;
          },
          e = t("anchor"),
          n = t("focus");
        if (e && n) {
          var _t282 = e.caret,
            _o106 = n.caret;
          if (_t282.isSameNodeCaret(_o106))
            return [tf(_t282, _o106.offset - _t282.offset), null];
        }
        return [e, n];
      };
      _proto29.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = Hu(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          o = Hu(n),
          r = function r(e) {
            return e.isSameNodeCaret(n) ? null : of(e) || e.getParentCaret(t);
          };
        return ff({
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
      return rf;
    })();
    var _sf = (function () {
      function sf(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto30 = sf.prototype;
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
        return Qu(t.setTextContent(r.slice(0, n) + r.slice(o)), e, n);
      };
      return sf;
    })();
    function lf(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function cf(t) {
      return uf(t, lf(ef(uc(), $u(t.direction)), t.direction));
    }
    function af(t) {
      return uf(t, t);
    }
    function uf(t, n) {
      return (
        t.direction !== n.direction && e(265),
        new _rf(t, n, t.direction)
      );
    }
    function ff(t) {
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
    function df(t, n) {
      var o = pf(t.origin, n.origin);
      switch (
        (null === o && e(275, t.origin.getKey(), n.origin.getKey()), o.type)
      ) {
        case "same": {
          var _e186 = "text" === t.type,
            _o107 = "text" === n.type;
          return _e186 && _o107
            ? (function (t, e) {
                return Math.sign(t - e);
              })(t.offset, n.offset)
            : t.type === n.type
              ? 0
              : _e186
                ? -1
                : _o107
                  ? 1
                  : "child" === t.type
                    ? -1
                    : 1;
        }
        case "ancestor":
          return "child" === t.type ? -1 : 1;
        case "descendant":
          return "child" === n.type ? 1 : -1;
        case "branch":
          return hf(o);
      }
    }
    function hf(t) {
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
    function gf(t, e) {
      return e.is(t);
    }
    function _f(t) {
      return Bs(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function pf(t, n) {
      if (t.is(n)) return { commonAncestor: t, type: "same" };
      var o = new Map();
      for (
        var _f13 = _f(t), _e187 = _f13[0], _n143 = _f13[1];
        _e187;
        _n143 = _e187, _e187 = _e187.getParent()
      )
        o.set(_e187, _n143);
      for (
        var _f14 = _f(n), _r81 = _f14[0], _i54 = _f14[1];
        _r81;
        _i54 = _r81, _r81 = _r81.getParent()
      ) {
        var _s33 = o.get(_r81);
        if (void 0 !== _s33)
          return null === _s33
            ? (gf(t, _r81) || e(276),
              { commonAncestor: _r81, type: "ancestor" })
            : null === _i54
              ? (gf(n, _r81) || e(277),
                { commonAncestor: _r81, type: "descendant" })
              : (((Bs(_s33) || gf(t, _s33)) &&
                  (Bs(_i54) || gf(n, _i54)) &&
                  _r81.is(_s33.getParent()) &&
                  _r81.is(_i54.getParent())) ||
                  e(278),
                { a: _s33, b: _i54, commonAncestor: _r81, type: "branch" });
      }
      return null;
    }
    function mf() {
      var e = [];
      for (
        var _len15 = arguments.length, t = new Array(_len15), _key15 = 0;
        _key15 < _len15;
        _key15++
      ) {
        t[_key15] = arguments[_key15];
      }
      for (var _n144 of t)
        if (_n144 && "string" == typeof _n144)
          for (var _ref79 of _n144.matchAll(/\S+/g)) {
            var _t283 = _ref79[0];
            e.push(_t283);
          }
      return e;
    }
    function yf() {
      for (
        var _len16 = arguments.length, t = new Array(_len16), _key16 = 0;
        _key16 < _len16;
        _key16++
      ) {
        t[_key16] = arguments[_key16];
      }
      return function () {
        for (var _e188 = t.length - 1; _e188 >= 0; _e188--) t[_e188]();
        t.length = 0;
      };
    }
    ((exports.$addUpdateTag = Kc),
      (exports.$applyNodeReplacement = Yc),
      (exports.$assumeActiveEditor = function (t) {
        (null !== gs() && null === os && (os = t), os !== t && n(378));
      }),
      (exports.$caretFromPoint = ol),
      (exports.$caretRangeFromSelection = ll),
      (exports.$cloneWithProperties = Da),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = Da(t))[ur] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = df),
      (exports.$copyNode = Jc),
      (exports.$create = du),
      (exports.$createChildrenArray = gu),
      (exports.$createLineBreakNode = Qs),
      (exports.$createNodeSelection = Ri),
      (exports.$createParagraphNode = vl),
      (exports.$createPoint = ii),
      (exports.$createRangeSelection = Pi),
      (exports.$createRangeSelectionFromDom = function (t, e) {
        return Li(null, t, e, null);
      }),
      (exports.$createTabNode = ni),
      (exports.$createTextNode = Xr),
      (exports.$exportNodeJSON = rt),
      (exports.$extendCaretToRange = cf),
      (exports.$findMatchingParent = hu),
      (exports.$flushSyncAfterUpdate = function () {
        var t = gs();
        (ds(), (t._flushSync = !0));
      }),
      (exports.$formatText = pi),
      (exports.$fullReconcile = ps),
      (exports.$generateNodesFromRawText = Gi),
      (exports.$getAdjacentChildCaret = of),
      (exports.$getAdjacentNode = Ac),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          o = t,
          r = of(o);
        for (; null === r; ) {
          if ((n--, (r = o.getParentCaret(e)), !r)) return null;
          ((o = r), (r = of(o)));
        }
        return r && [r, n];
      }),
      (exports.$getCaretInDirection = lf),
      (exports.$getCaretRange = uf),
      (exports.$getCaretRangeInDirection = gl),
      (exports.$getCharacterOffsets = yi),
      (exports.$getChildCaret = ef),
      (exports.$getChildCaretAtIndex = _l),
      (exports.$getChildCaretOrSelf = nf),
      (exports.$getCollapsedCaretRange = af),
      (exports.$getCommonAncestor = pf),
      (exports.$getCommonAncestorResultBranchOrder = hf),
      (exports.$getDOMSlot = ba),
      (exports.$getDOMTextNode = Ea),
      (exports.$getDocument = sa),
      (exports.$getEditor = Na),
      (exports.$getEditorDOMRenderConfig = ka),
      (exports.$getNearestNodeFromDOMNode = lc),
      (exports.$getNearestRootOrShadowRoot = jc),
      (exports.$getNodeByKey = oc),
      (exports.$getNodeByKeyOrThrow = qc),
      (exports.$getNodeFromDOMNode = rc),
      (exports.$getPreviousSelection = Bi),
      (exports.$getRoot = uc),
      (exports.$getSelection = Ki),
      (exports.$getSelectionSlotFrame = vu),
      (exports.$getSiblingCaret = Xu),
      (exports.$getSlot = bu),
      (exports.$getSlotFrame = Tu),
      (exports.$getSlotHost = Cu),
      (exports.$getSlotNameWithinHost = Su),
      (exports.$getSlotNames = ku),
      (exports.$getState = te),
      (exports.$getStateChange = function (t, e, n) {
        var o = te(t, n, Xt),
          r = te(e, n, Xt);
        return n.isEqual(o, r) ? null : [o, r];
      }),
      (exports.$getTextContent = function () {
        var t = Ki();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = Zu),
      (exports.$getTextPointCaret = Qu),
      (exports.$getTextPointCaretSlice = tf),
      (exports.$getWritableNodeState = ie),
      (exports.$hasAncestor = zc),
      (exports.$hasUpdateTag = function (t) {
        return _s()._updateTags.has(t);
      }),
      (exports.$insertNodeToNearestRootAtCaret = xl),
      (exports.$insertNodes = function (t) {
        var e = Ki() || Bi();
        (null === e && (e = uc().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = Fi),
      (exports.$isBlockFullySelected = Cl),
      (exports.$isChildCaret = Ju),
      (exports.$isCompactExport = ot),
      (exports.$isDecoratorNode = Ws),
      (exports.$isEditorState = function (t) {
        return t instanceof _Ys;
      }),
      (exports.$isElementDOMSlot = Oa),
      (exports.$isElementNode = Bs),
      (exports.$isExtendableTextPointCaret = hl),
      (exports.$isInlineElementOrDecoratorNode = Uc),
      (exports.$isInlineFormattable = $r),
      (exports.$isLeafNode = function (t) {
        return Qr(t) || Zs(t) || Ws(t);
      }),
      (exports.$isLexicalNode = gr),
      (exports.$isLineBreakNode = Zs),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _Ku4;
      }),
      (exports.$isNodeSelection = gi),
      (exports.$isParagraphNode = Nl),
      (exports.$isRangeSelection = di),
      (exports.$isRootNode = js),
      (exports.$isRootOrShadowRoot = Vc),
      (exports.$isSelectionCapturedInDecoratorInput = Bl),
      (exports.$isShadowRootNode = Hc),
      (exports.$isSiblingCaret = Vu),
      (exports.$isSlotChild = yu),
      (exports.$isSlotHost = mu),
      (exports.$isTabNode = oi),
      (exports.$isTextNode = Qr),
      (exports.$isTextPointCaret = Hu),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _sf;
      }),
      (exports.$isTokenOrSegmented = Vl),
      (exports.$isTokenOrTab = Hl),
      (exports.$markSlotEditable = Ka),
      (exports.$needsBlockCursorBeside = Xc),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = gs();
        if (n._readOnly) {
          var _t284 = wa(n).get(e);
          return _t284 ? Array.from(_t284.values()) : [];
        }
        var o = n._nodeMap,
          r = [];
        for (var _ref81 of o) {
          var _n145 = _ref81[1];
          _n145 instanceof t &&
            _n145.__type === e &&
            _n145.isAttached() &&
            r.push(_n145);
        }
        return r;
      }),
      (exports.$normalizeCaret = dl),
      (exports.$normalizeSelection__EXPERIMENTAL = _e),
      (exports.$onUpdate = Bc),
      (exports.$parseSerializedNode = function (t) {
        return Ts(t, _s()._nodes);
      }),
      (exports.$removeFromParent = Ql),
      (exports.$removeSlot = function (t, e) {
        var n = t.getWritable();
        if (null === n.__slots) return n;
        var o = n.__slots.get(e);
        return (void 0 !== o && (Ru(o), Mu(n)["delete"](e)), n);
      }),
      (exports.$removeTextFromCaretRange = fl),
      (exports.$rewindSiblingCaret = cl),
      (exports.$selectAll = function (t) {
        var e = uc();
        if (di(t)) {
          var _e189 = t.anchor,
            _n146 = t.focus,
            _o108 = _e189.getNode();
          if (js(_o108))
            return (
              _e189.set(_o108.getKey(), 0, "element"),
              _n146.set(_o108.getKey(), _o108.getChildrenSize(), "element"),
              kc(t, _o108),
              t
            );
          var _r82 = _o108.getTopLevelElementOrThrow(),
            _i55 = _r82.getParent();
          return null === _i55
            ? (Bs(_r82) &&
                (_e189.set(_r82.getKey(), 0, "element"),
                _n146.set(_r82.getKey(), _r82.getChildrenSize(), "element"),
                kc(t, _r82)),
              t)
            : (_e189.set(_i55.getKey(), 0, "element"),
              _n146.set(_i55.getKey(), _i55.getChildrenSize(), "element"),
              kc(t, _i55),
              t);
        }
        {
          var _t285 = e.select(0, e.getChildrenSize());
          return (dc(kc(_t285, e)), _t285);
        }
      }),
      (exports.$setCompositionKey = ec),
      (exports.$setDirectionFromDOM = Ia),
      (exports.$setFormatFromDOM = Pa),
      (exports.$setPointFromCaret = rl),
      (exports.$setSelection = dc),
      (exports.$setSelectionFromCaretRange = il),
      (exports.$setSlot = Pu),
      (exports.$setState = ee),
      (exports.$setTextFormat = function (t, e) {
        var n = [];
        for (var _ref83 of Object.entries(e)) {
          var _t286 = _ref83[0];
          var _o109 = _ref83[1];
          "boolean" == typeof _o109 && n.push([_t286, _o109]);
        }
        0 !== n.length &&
          _i(t, function (t) {
            for (var _ref85 of n) {
              var _e190 = _ref85[0];
              var _o110 = _ref85[1];
              t = ql(t, _e190, _o110 ? A[_e190] : 0);
            }
            return t;
          });
      }),
      (exports.$splitAtPointCaretNext = yl),
      (exports.$splitNode = function (t, n) {
        var o = t.getChildAtIndex(n);
        (null == o && (o = t), Vc(t) && e(102));
        var _r85 = function r(t) {
            var n = t.getParentOrThrow(),
              i = Vc(n),
              s = t !== o || i ? Jc(t) : t;
            if (i)
              return ((Bs(t) && Bs(s)) || e(133), t.insertAfter(s), [t, s, s]);
            {
              var _r84 = _r85(n),
                _e191 = _r84[0],
                _o111 = _r84[1],
                _i56 = _r84[2],
                _l25 = t.getNextSiblings();
              return (
                _i56.append.apply(_i56, [s].concat(Array.from(_l25))),
                [_e191, _o111, s]
              );
            }
          },
          _r83 = _r85(o),
          i = _r83[0],
          s = _r83[1];
        return [i, s];
      }),
      (exports.$updateDOMSelection = Ji),
      (exports.$updateRangeSelectionFromCaretRange = sl),
      (exports.$withCompactExport = nt),
      (exports.ArtificialNode__DO_NOT_USE = _Gs),
      (exports.BEFORE_INPUT_COMMAND = Sn),
      (exports.BLUR_COMMAND = ho),
      (exports.CAN_REDO_COMMAND = ao),
      (exports.CAN_UNDO_COMMAND = uo),
      (exports.CAN_USE_BEFORE_INPUT = d),
      (exports.CAN_USE_DOM = r),
      (exports.CLEAR_EDITOR_COMMAND = lo),
      (exports.CLEAR_HISTORY_COMMAND = co),
      (exports.CLICK_COMMAND = Cn),
      (exports.COLLABORATION_TAG = pr),
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
      (exports.COMPOSITION_END_COMMAND = Nn),
      (exports.COMPOSITION_END_TAG = Sr),
      (exports.COMPOSITION_START_COMMAND = vn),
      (exports.COMPOSITION_START_TAG = Cr),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = En),
      (exports.CONTROL_OR_ALT = mo),
      (exports.CONTROL_OR_META = po),
      (exports.CONTROL_OR_OTHER_KEY = K),
      (exports.COPY_COMMAND = ro),
      (exports.CUT_COMMAND = io),
      (exports.CUT_TAG = "cut"),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = El),
      (exports.DELETE_CHARACTER_COMMAND = kn),
      (exports.DELETE_LINE_COMMAND = Dn),
      (exports.DELETE_WORD_COMMAND = wn),
      (exports.DRAGEND_COMMAND = oo),
      (exports.DRAGOVER_COMMAND = no),
      (exports.DRAGSTART_COMMAND = eo),
      (exports.DROP_COMMAND = Zn),
      (exports.DecoratorNode = _$s),
      (exports.ElementNode = _Ks4),
      (exports.FOCUS_COMMAND = fo),
      (exports.FORMAT_ELEMENT_COMMAND = to),
      (exports.FORMAT_TEXT_COMMAND = Fn),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = _r),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = Xn),
      (exports.INPUT_COMMAND = Tn),
      (exports.INSERT_LINE_BREAK_COMMAND = bn),
      (exports.INSERT_PARAGRAPH_COMMAND = On),
      (exports.INSERT_TAB_COMMAND = qn),
      (exports.INTERNAL_$expandSelectionToWholeDocument = xi),
      (exports.INTERNAL_$isBlock = va),
      (exports.IS_ALL_FORMATTING = S),
      (exports.IS_ANDROID = _),
      (exports.IS_ANDROID_CHROME = y),
      (exports.IS_APPLE = a),
      (exports.IS_APPLE_WEBKIT = x),
      (exports.IS_BOLD = 1),
      (exports.IS_CHROME = m),
      (exports.IS_CODE = 16),
      (exports.IS_FIREFOX = u),
      (exports.IS_HIGHLIGHT = 128),
      (exports.IS_IOS = g),
      (exports.IS_ITALIC = 2),
      (exports.IS_SAFARI = p),
      (exports.IS_STRIKETHROUGH = 4),
      (exports.IS_SUBSCRIPT = 32),
      (exports.IS_SUPERSCRIPT = 64),
      (exports.IS_UNDERLINE = 8),
      (exports.KEY_ARROW_DOWN_COMMAND = Un),
      (exports.KEY_ARROW_LEFT_COMMAND = zn),
      (exports.KEY_ARROW_RIGHT_COMMAND = Kn),
      (exports.KEY_ARROW_UP_COMMAND = Wn),
      (exports.KEY_BACKSPACE_COMMAND = Vn),
      (exports.KEY_DELETE_COMMAND = Yn),
      (exports.KEY_DOWN_COMMAND = Ln),
      (exports.KEY_ENTER_COMMAND = jn),
      (exports.KEY_ESCAPE_COMMAND = Jn),
      (exports.KEY_MODIFIER_COMMAND = go),
      (exports.KEY_SPACE_COMMAND = Hn),
      (exports.KEY_TAB_COMMAND = Gn),
      (exports.LineBreakNode = _qs),
      (exports.MOVE_TO_END = Bn),
      (exports.MOVE_TO_START = $n),
      (exports.NODE_STATE_DIRECT = Xt),
      (exports.NODE_STATE_KEY = L),
      (exports.NODE_STATE_LATEST = Qt),
      (exports.OUTDENT_CONTENT_COMMAND = Qn),
      (exports.PASTE_COMMAND = Mn),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _Sl),
      (exports.REDO_COMMAND = Rn),
      (exports.REMOVE_TEXT_COMMAND = An),
      (exports.RootNode = _Us),
      (exports.SELECTION_CHANGE_COMMAND = yn),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = xn),
      (exports.SELECT_ALL_COMMAND = so),
      (exports.SET_TEXT_FORMAT_COMMAND = In),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = yr),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = mr),
      (exports.SKIP_SELECTION_FOCUS_TAG = xr),
      (exports.TEXT_TYPE_TO_FORMAT = A),
      (exports.TabNode = _ei),
      (exports.TextNode = _Wr2),
      (exports.UNDO_COMMAND = Pn),
      (exports.addClassNamesToElement = function (t) {
        var _t$classList2;
        for (
          var _len17 = arguments.length,
            e = new Array(_len17 > 1 ? _len17 - 1 : 0),
            _key17 = 1;
          _key17 < _len17;
          _key17++
        ) {
          e[_key17 - 1] = arguments[_key17];
        }
        var n = mf.apply(void 0, Array.from(e));
        n.length > 0 &&
          (_t$classList2 = t.classList).add.apply(_t$classList2, Array.from(n));
      }),
      (exports.aliasTableOf = St),
      (exports.aliasedValue = Jt),
      (exports.arrayValue = function (t) {
        return kt(
          function (e) {
            if (!Array.isArray(e)) return [];
            var n = new Array(e.length);
            for (var _o112 = 0; _o112 < e.length; _o112++)
              n[_o112] = t(e[_o112]);
            return n;
          },
          { item: t, kind: "array" },
          void 0,
          function (e, n) {
            if (!Array.isArray(e) || !Array.isArray(n) || e.length !== n.length)
              return !1;
            for (var _o113 = 0; _o113 < e.length; _o113++)
              if (!pt(t, e[_o113], n[_o113])) return !1;
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
        return kt(
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
      (exports.compileKeyboardShortcuts = So),
      (exports.configExtension = function () {
        for (
          var _len18 = arguments.length, t = new Array(_len18), _key18 = 0;
          _key18 < _len18;
          _key18++
        ) {
          t[_key18] = arguments[_key18];
        }
        return t;
      }),
      (exports.createCommand = mn),
      (exports.createEditor = function (t) {
        var n = t || {},
          o = ys(),
          r = n.theme || {},
          i = void 0 === t ? o : n.parentEditor || null,
          s = n.disableEvents || !1,
          l = Vs(),
          c = n.namespace || (null !== i ? i._config.namespace : mc()),
          a = n.editorState,
          u = [_Us, _Wr2, _qs, _ei, _Sl, _Gs].concat(Array.from(n.nodes || [])),
          f = n.onError,
          d = n.onWarn,
          h = n.html,
          g = void 0 === n.editable || n.editable;
        var _;
        if (void 0 === t && null !== o) _ = o._nodes;
        else {
          _ = new Map();
          for (var _t287 = 0; _t287 < u.length; _t287++) {
            var _o114 = u[_t287],
              _r86 = null,
              _i57 = null;
            if (_o114 && "object" == typeof _o114) {
              var _t288 = _o114;
              ((_o114 = _t288.replace),
                (_r86 = _t288["with"]),
                (_i57 = _t288.withKlass || null));
            }
            if (
              "function" != typeof _o114 ||
              !_o114.prototype ||
              !(_o114 === _hr5 || _o114.prototype instanceof _hr5)
            ) {
              var _r87 = "<unknown>";
              try {
                _r87 = JSON.parse(q);
              } catch (_unused2) {}
              e(
                365,
                String(_t287 - u.length + (n.nodes ? n.nodes.length : 0)),
                "function" == typeof _o114
                  ? "" +
                      _o114.name +
                      ("function" == typeof _o114.getType
                        ? " (type " + String(_o114.getType()) + ")"
                        : "")
                  : String(_o114),
                String(_r87),
              );
            }
            su(_o114);
            var _s34 = _o114.getType(),
              _l26 = Ol(_o114);
            _.set(_s34, {
              exportDOM: h && h["export"] ? h["export"].get(_o114) : void 0,
              klass: _o114,
              replace: _r86,
              replaceWithKlass: _i57,
              sharedNodeState: ne(u[_t287]),
              transforms: _l26,
            });
          }
        }
        var p = new _wl(
          l,
          i,
          _,
          {
            disableEvents: s,
            dom: babelHelpers["extends"]({}, El, t && t.dom),
            namespace: c,
            theme: r,
          },
          f || console.error,
          d || kl,
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
            (t.registerCommand(Sn, $o, 0),
              t.registerCommand(Tn, Uo, 0),
              t.registerCommand(vn, Ho, 0),
              t.registerCommand(Nn, Vo, 0),
              t.registerCommand(Ln, nr, 0));
          })(p),
          p
        );
      }),
      (exports.createRefCountedRegistry = To),
      (exports.createSharedNodeState = ne),
      (exports.createState = function (t, e) {
        return new Zt(t, e);
      }),
      (exports.declarePeerDependency = function () {
        for (
          var _len19 = arguments.length, t = new Array(_len19), _key19 = 0;
          _key19 < _len19;
          _key19++
        ) {
          t[_key19] = arguments[_key19];
        }
        return t;
      }),
      (exports.declaredAccepts = Ot),
      (exports.defineExtension = function (t) {
        return t;
      }),
      (exports.enumValue = jt),
      (exports.findAllLexicalElementsDeep = ra),
      (exports.flipDirection = $u),
      (exports.getActiveElement = ha),
      (exports.getActiveElementDeep = ga),
      (exports.getComposedEventTarget = _a),
      (exports.getComposedSchemaFields = function (t) {
        var _Xa3 = Xa(t),
          e = _Xa3.fieldsDerivedFirst,
          n = _Xa3.flatStates,
          o = {};
        for (var _t289 of n) _t289.schema && (o[_t289.key] = _t289.schema);
        for (var _ref87 of e) {
          var _t290 = _ref87[0];
          var _n147 = _ref87[1];
          o[_t290] = _n147;
        }
        return o;
      }),
      (exports.getComposedStaticRange = la),
      (exports.getDOMOwnerDocument = Pc),
      (exports.getDOMSelection = Zc),
      (exports.getDOMSelectionFromTarget = ta),
      (exports.getDOMSelectionPoints = aa),
      (exports.getDOMSelectionRange = ca),
      (exports.getDOMSelectionRangeAndPoints = function (t, e) {
        var _ua;
        var n = la(t, e);
        if (null === n)
          return {
            points: t,
            range: t.rangeCount > 0 ? t.getRangeAt(0) : null,
          };
        var o =
          (_ua = ua(n)) != null
            ? _ua
            : t.rangeCount > 0
              ? t.getRangeAt(0)
              : null;
        return { points: fa(n, da(t)), range: o };
      }),
      (exports.getDOMShadowRoots = oa),
      (exports.getDOMTextNode = Gl),
      (exports.getDeclaredSlots = Du),
      (exports.getEditorPropertyFromDOMNode = jl),
      (exports.getNearestEditorFromDOMNode = Ul),
      (exports.getParentElement = Ic),
      (exports.getRegisteredNode = Ll),
      (exports.getRegisteredNodeOrThrow = Rl),
      (exports.getRegisteredSubtypeMap = function (t) {
        var e = new Map(),
          n = new Map();
        for (var _o115 of t) {
          var _su2 = su(_o115),
            _t291 = _su2.ownNodeType;
          _t291 && (n.set(_t291, _o115), e.set(_t291, new Set()));
        }
        for (var _ref89 of n) {
          var _t292 = _ref89[0];
          var _o116 = _ref89[1];
          for (var _ref91 of fu(_o116)) {
            var _n148 = _ref91.ownNodeType;
            {
              var _o117 = _n148 && e.get(_n148);
              _o117 && _o117.add(_t292);
            }
          }
        }
        return e;
      }),
      (exports.getRootOwnerDocument = ia),
      (exports.getStaticNodeConfig = su),
      (exports.getStyleObjectFromCSS = wr),
      (exports.getTextDirection = function (t) {
        return E.test(t) ? "rtl" : M.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = Ol),
      (exports.getterTableOf = xt),
      (exports.isBlockDomNode = Ta),
      (exports.isCurrentlyReadOnlyMode = fs),
      (exports.isDOMCapturingSelection = Ba),
      (exports.isDOMDocumentNode = Yl),
      (exports.isDOMNode = ma),
      (exports.isDOMShadowRoot = ea),
      (exports.isDOMTextNode = Jl),
      (exports.isDOMUnmanaged = La),
      (exports.isDocumentFragment = ya),
      (exports.isExactShortcutMatch = function (t, e, n) {
        if (!vc(t, n)) return !1;
        if (t.key.toLowerCase() === e.toLowerCase()) return !0;
        if (e.length > 1) return !1;
        if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
        if (t.code.startsWith("Digit") && /^\d$/.test(e))
          return t.code === "Digit" + e;
        var o = "Key" + e.toUpperCase();
        return t.code === o;
      }),
      (exports.isHTMLAnchorElement = function (t) {
        return pa(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = pa),
      (exports.isHTMLTableCellElement = function (t) {
        return pa(t) && ("TD" === t.tagName || "TH" === t.tagName);
      }),
      (exports.isHTMLTableRowElement = function (t) {
        return pa(t) && "TR" === t.tagName;
      }),
      (exports.isInlineDomNode = Ca),
      (exports.isLastChildInBlockNode = el),
      (exports.isLexicalEditor = Wl),
      (exports.isModifierMatch = vc),
      (exports.isOnlyChildInBlockNode = tl),
      (exports.isSchemaField = yt),
      (exports.isSelectionCapturedInDecoratorInput = zl),
      (exports.isSelectionWithinEditor = $l),
      (exports.iterStaticNodeConfigChain = fu),
      (exports.keyboardEventMaskForPlatform = function (t, e) {
        var _babelHelpers$extends2;
        var n = t[K];
        return n && e !== a
          ? babelHelpers["extends"](
              {},
              t,
              ((_babelHelpers$extends2 = { ctrlKey: t[n] }),
              (_babelHelpers$extends2[n] = t.ctrlKey),
              _babelHelpers$extends2),
            )
          : t;
      }),
      (exports.makeStepwiseIterator = ff),
      (exports.mergeRegister = yf),
      (exports.mountSlotContainer = function (t, e, n, o) {
        var r = t.read("latest", function () {
          var o = oc(e);
          return null !== o
            ? (function (t, e, n) {
                if (n === void 0) {
                  n = Na();
                }
                var o = bu(t, e);
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
      (exports.nodeSchema = Vt),
      (exports.normalizeClassNames = mf),
      (exports.nullable = function (t, e) {
        if (e === void 0) {
          e = {};
        }
        var _e192 = e,
          n = _e192.defaultAsNull;
        return kt(
          function (e) {
            if (null == e) return null;
            var o = t(e);
            return n && mt(t, o) ? null : o;
          },
          { defaultAsNull: n, inner: t, kind: "nullable" },
          void 0,
          wt(t),
          Dt(t, function (t) {
            return null == t;
          }),
        );
      }),
      (exports.numberValue = Ut),
      (exports.objectValue = function (t) {
        return (function (t, e) {
          var n = Object.entries(e);
          return kt(
            function (t) {
              var e = null !== t && "object" == typeof t ? t : {},
                o = {};
              for (var _t293 = 0; _t293 < n.length; _t293++) {
                var _n$_t = n[_t293],
                  _r88 = _n$_t[0],
                  _i58 = _n$_t[1];
                o[_r88] = _i58(e[_r88]);
              }
              return o;
            },
            { fields: e, kind: "object" },
            void 0,
            function (t, o) {
              return (
                Bt(t) &&
                Bt(o) &&
                !zt(t, e) &&
                !zt(o, e) &&
                n.every(function (_ref92) {
                  var e = _ref92[0],
                    n = _ref92[1];
                  return pt(n, t[e], o[e]);
                })
              );
            },
            function (t) {
              return Bt(t) && !zt(t, e);
            },
          );
        })(0, t);
      }),
      (exports.optional = function (t, e) {
        if (e === void 0) {
          e = {};
        }
        var _e193 = e,
          n = _e193.omitDefault;
        return kt(
          function (e) {
            if (void 0 === e) return;
            var o = t(e);
            return n && mt(t, o) ? void 0 : o;
          },
          { inner: t, kind: "optional", omitDefault: n },
          void 0,
          wt(t),
          Dt(t, function (t) {
            return void 0 === t;
          }),
        );
      }),
      (exports.rawValue = function () {
        return kt(
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
      (exports.registerEventListener = vo),
      (exports.registerEventListeners = function (t, e, n) {
        return yf.apply(
          void 0,
          Array.from(
            Object.entries(e).map(function (_ref93) {
              var e = _ref93[0],
                o = _ref93[1];
              return vo(t, e, o, n);
            }),
          ),
        );
      }),
      (exports.removeClassNamesFromElement = function (t) {
        var _t$classList3;
        for (
          var _len20 = arguments.length,
            e = new Array(_len20 > 1 ? _len20 - 1 : 0),
            _key20 = 1;
          _key20 < _len20;
          _key20++
        ) {
          e[_key20 - 1] = arguments[_key20];
        }
        var n = mf.apply(void 0, Array.from(e));
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(
            _t$classList3,
            Array.from(n),
          );
      }),
      (exports.removeFromParent = Zl),
      (exports.resetRandomKey = function () {
        Pl = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = Fr),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n149 in e) {
          var _o118 = e[_n149];
          null == _o118 ? t.removeProperty(_n149) : Dr(t, _n149, _o118);
        }
      }),
      (exports.setDOMUnmanaged = Ra),
      (exports.setNodeIndentFromDOM = Fa),
      (exports.setterDefaultOf = Tt),
      (exports.setterTableOf = Ct),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n150 in e)
          if (t[_n150] !== e[_n150]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.stopLexicalPropagation = sr),
      (exports.stringValue = $t),
      (exports.toggleTextFormatType = ql),
      (exports.tokenizeRawText = Yi),
      (exports.transformValue = function (t, e, n) {
        if (n === void 0) {
          n = {};
        }
        return kt(
          function (n) {
            return e(t(n));
          },
          { inner: t, kind: "transform" },
          Mt(e(t.defaultValue)),
          n.isEqual,
          function (e) {
            return Ft(t, e);
          },
        );
      }),
      (exports.unionValue = function (t) {
        var n =
          0 !== (arguments.length <= 1 ? 0 : arguments.length - 1)
            ? Mt(arguments.length <= 1 ? undefined : arguments[1])
            : t[0].defaultValue;
        return kt(
          function (e) {
            if (void 0 === e) return n;
            var o = (function (e) {
              var n = (function (t, e) {
                return Lt(t, e).member;
              })(t, e);
              return void 0 === n ? void 0 : { member: n, parsed: n(e) };
            })(e);
            return void 0 === o ? n : o.parsed;
          },
          { kind: "union", members: t },
          n,
          Ht,
          function (e) {
            return (
              (void 0 !== e || void 0 === n) &&
              t.some(function (t) {
                return Ft(t, e);
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
      (exports.withAccessors = Gt),
      (exports.withField = Yt));
  },
  null,
);
