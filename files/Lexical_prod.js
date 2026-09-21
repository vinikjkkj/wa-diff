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
    function n(t) {
      throw new Error(t);
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
      x = c(/AppleWebKit\/[\d.]+/) && a && !m,
      C = 128;
    function S() {
      return 2047;
    }
    var T = S(),
      v = p || g || x ? "\xa0" : "\u200b",
      N = "\n\n",
      b = u ? "\xa0" : v,
      k = "\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc",
      O =
        "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
    function E(t, e) {
      return new RegExp("^[^" + t + "]*[" + e + "]");
    }
    var M = E(O, k),
      A = E(k, O),
      w = {
        bold: 1,
        capitalize: 1024,
        code: 16,
        highlight: C,
        italic: 2,
        lowercase: 256,
        strikethrough: 4,
        subscript: 32,
        superscript: 64,
        underline: 8,
        uppercase: 512,
      },
      D = { directionless: 1, unmergeable: 2 },
      F = { center: 2, end: 6, justify: 4, left: 1, right: 3, start: 5 };
    function I(t) {
      var e = {};
      for (var _n2 of Object.keys(t)) e[t[_n2]] = _n2;
      return e;
    }
    var P = I(F),
      R = { normal: 0, segmented: 2, token: 1 },
      L = I(R),
      $ = "$",
      z = Symbol["for"]("@lexical/ctrlOrOtherKey"),
      B = "$config";
    function K() {
      return Ea()._blockCursorElement;
    }
    function W(t) {
      return (
        null !== t && 1 === t.nodeType && t.hasAttribute("data-lexical-slot")
      );
    }
    var U = x || g || p;
    function j() {
      var t = ua().createElement("img");
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
    function H(t) {
      return (
        null !== t &&
        1 === t.nodeType &&
        t.hasAttribute("data-lexical-decorator-boundary")
      );
    }
    var _V2 = (function () {
      function V(t, e, n) {
        ((this.element = t),
          (this.before = e || null),
          (this.after = n || null));
      }
      var _proto = V.prototype;
      _proto.withBefore = function withBefore(t) {
        return new V(this.element, t, this.after);
      };
      _proto.withAfter = function withAfter(t) {
        return new V(this.element, this.before, t);
      };
      _proto.withElement = function withElement(t) {
        return this.element === t ? this : new V(t, this.before, this.after);
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
        var o = J(t, this.element);
        if (null === o) return "after";
        var r = Array.prototype.indexOf.call(t.childNodes, o);
        if (r < 0) return "after";
        if (e === t) return n <= r ? "before" : "after";
        var i = J(t, e);
        if (null === i) return "after";
        var s = Array.prototype.indexOf.call(t.childNodes, i);
        return s >= 0 && s <= r ? "before" : "after";
      };
      _proto.getInsertionAnchor = function getInsertionAnchor() {
        return this.before;
      };
      return V;
    })();
    function J(t, e) {
      var n = e;
      for (; null !== n && n.parentNode !== t; ) n = n.parentNode;
      return n;
    }
    var _Y = (function (_V) {
      function Y() {
        return _V.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Y, _V);
      var _proto2 = Y.prototype;
      _proto2.withBefore = function withBefore(t) {
        return new Y(this.element, t, this.after);
      };
      _proto2.withAfter = function withAfter(t) {
        return new Y(this.element, this.before, t);
      };
      _proto2.withElement = function withElement(t) {
        return this.element === t ? this : new Y(t, this.before, this.after);
      };
      _proto2.getInsertionAnchor = function getInsertionAnchor() {
        return (
          _V.prototype.getInsertionAnchor.call(this) ||
          this.getManagedLineBreak() ||
          this.getDecoratorBoundaryAnchor("trailing")
        );
      };
      _proto2.getFirstChildAnchor = function getFirstChildAnchor() {
        var t = _V.prototype.getFirstChildAnchor.call(this),
          e = t ? t.nextSibling : this.element.firstChild;
        for (; W(e); ) ((t = e), (e = e.nextSibling));
        H(e) && ((t = e), (e = e.nextSibling));
        var n = t ? t.nextSibling : this.element.firstChild;
        return null !== n && n === K() ? n : t;
      };
      _proto2.getDecoratorBoundaryAnchor = function getDecoratorBoundaryAnchor(
        t,
      ) {
        var e;
        if ("leading" === t) {
          var _t4 = _V.prototype.getFirstChildAnchor.call(this);
          for (e = _t4 ? _t4.nextSibling : this.element.firstChild; W(e); )
            e = e.nextSibling;
        } else
          ((e = this.before
            ? this.before.previousSibling
            : this.element.lastChild),
            null !== e && e === K() && (e = e.previousSibling));
        return H(e) ? e : null;
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
              j(),
              _t5 ? _t5.nextSibling : this.element.firstChild,
            );
          } else this.element.insertBefore(j(), this.before);
      };
      _proto2.getManagedLineBreak = function getManagedLineBreak() {
        return this.element.__lexicalLineBreak || null;
      };
      _proto2.setManagedLineBreak = function setManagedLineBreak(t) {
        var e = this.element,
          n = null === this.after ? e.firstChild : this.after.nextSibling,
          o = "empty" === t && W(n) ? null : t;
        if (e.__lexicalLastChildKind !== o)
          if (((e.__lexicalLastChildKind = o), null === o))
            this.removeManagedLineBreak();
          else {
            var _t6 = "decorator" === o && U;
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
          r = ua().createElement("br");
        if (
          (r.setAttribute("data-lexical-managed-linebreak", "true"),
          n.insertBefore(r, o),
          t)
        ) {
          var _t7 = ua().createElement("img");
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
        var r = G(e, n);
        r.push(o);
        var i = G(e, this.element);
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
      return Y;
    })(_V2);
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
    function q() {
      var t;
      try {
        t = "0.50.0+prod.cjs";
      } catch (t) {}
      return t != null ? t : '"<unknown>+source"';
    }
    var X = q();
    var _Q = (function () {
      function Q() {
        this._front = new Set();
        this._back = new Set();
      }
      var _proto3 = Q.prototype;
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
      return babelHelpers.createClass(Q, [
        {
          key: "size",
          get: function get() {
            return this._front.size + this._back.size;
          },
        },
      ]);
    })();
    var Z = null;
    function tt(t, e) {
      if (e === void 0) {
        e = 1e3;
      }
      return t instanceof _et
        ? t.clone()
        : t.size < e
          ? new Map(t)
          : new _et().init(new Map(t), void 0, t.size);
    }
    var _et = (function () {
      function et() {
        this._mutable = !1;
        this._old = void 0;
        this._nursery = void 0;
        this._size = 0;
      }
      var _proto4 = et.prototype;
      _proto4.clone = function clone() {
        return (
          (this._mutable = !1),
          new et().init(this._old, this._nursery, this._size)
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
        return e === Z ? void 0 : e;
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
            _n7 !== Z ? _t1.set(_e8, _n7) : _t1["delete"](_e8);
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
          (n !== Z && void 0 !== n) ||
            (this._size++, n === Z && o["delete"](t)),
          o.set(t, e),
          this
        );
      };
      _proto4["delete"] = function _delete(t) {
        var e = this.has(t);
        return (e && (this.getNursery().set(t, Z), this._size--), e);
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
              _o3 !== Z && (void 0 !== _o3 && (_n8[1] = _o3), yield _n8);
            }
          for (var _n9 of t)
            _n9[1] === Z || (e && e.has(_n9[0])) || (yield _n9);
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
      return babelHelpers.createClass(et, [
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
    var nt = !1;
    function ot(t, e) {
      var r = nt;
      var i;
      try {
        ((nt = t), (i = e()));
      } finally {
        nt = r;
      }
      var s;
      return (
        null === (s = i) ||
          ("object" != typeof s && "function" != typeof s) ||
          "function" != typeof s.then ||
          n(
            "$withCompactExport: f returned a thenable. The export form is restored synchronously, so an async callback gives it up at its first await; export inside a synchronous callback instead.",
          ),
        i
      );
    }
    function rt() {
      return nt;
    }
    function it(e) {
      var n = e.exportJSON(nt),
        o = e.constructor;
      return (
        n.type !== o.getType() && t(130, o.name),
        js(e) && !Array.isArray(n.children) && t(59, o.name),
        n
      );
    }
    function st(t, e, n, o, r, i) {
      if (js(t)) {
        var _s3 = t.getFirstChild();
        for (; null !== _s3; ) {
          var _t12 = _s3.__key;
          (_s3.__parent === e &&
            ((js(_s3) || (Su(_s3) && null !== _s3.__slots)) &&
              st(_s3, _t12, n, o, r, i),
            n.has(_t12) || i["delete"](_t12),
            r.push(_t12)),
            (_s3 = _s3.getNextSibling()));
        }
      }
      for (var _s4 of Su(t) && null !== t.__slots ? t.__slots.values() : []) {
        var _t13 = o.get(_s4);
        void 0 !== _t13 &&
          Tu(_t13) &&
          _t13.__slotHost === e &&
          ((js(_t13) || (Su(_t13) && null !== _t13.__slots)) &&
            st(_t13, _s4, n, o, r, i),
          n.has(_s4) || i["delete"](_s4),
          r.push(_s4));
      }
    }
    var lt = !1,
      ct = 0;
    function at(t) {
      ct = t.timeStamp;
    }
    function ut(t, e, n) {
      var o = "BR" === t.nodeName,
        r = e.__lexicalLineBreak;
      return (
        (r && (t === r || (o && t.previousSibling === r))) ||
        (o && void 0 !== dc(t, n))
      );
    }
    function ft(t, e, n) {
      var o = oa(Vc(n)),
        r = o && ha(o, n._rootElement);
      var i = null,
        s = null;
      null !== r &&
        r.anchorNode === t &&
        ((i = r.anchorOffset), (s = r.focusOffset));
      var l = t.nodeValue;
      null !== l && kc(e, l, i, s, !1);
    }
    function dt(t, e, n) {
      if (yi(t)) {
        var _e1 = t.anchor.getNode();
        if (_e1.is(n) && t.format !== _e1.getFormat()) return !1;
      }
      return Zl(e) && n.isAttached();
    }
    function ht(t, e, n) {
      for (var _o4 = t; _o4 && !Ka(_o4); _o4 = Bc(_o4)) {
        var _t14 = dc(_o4, e);
        if (void 0 !== _t14) {
          var _e10 = ac(_t14, n);
          if (_e10) return Js(_e10) || !Ca(_o4) ? void 0 : [_o4, _e10];
        }
      }
    }
    function gt(t, e, n) {
      lt = !0;
      var o = performance.now() - ct > 100;
      try {
        Rs(t, function () {
          var r =
              Hi() ||
              (function (t) {
                return t.read("latest", function () {
                  var t = Hi();
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
              _g = ht(_h, t, s);
            if (!_g) continue;
            var _2 = _g[0],
              _p = _g[1];
            if ("characterData" === _d)
              o && oi(_p) && Zl(_h) && dt(r, _h, _p) && ft(_h, _p, t);
            else if ("childList" === _d) {
              c = !0;
              var _e11 = _f2.addedNodes;
              for (var _n10 = 0; _n10 < _e11.length; _n10++) {
                var _o5 = _e11[_n10],
                  _r3 = uc(_o5),
                  _i3 = _o5.parentNode;
                if (
                  !(
                    null == _i3 ||
                    _o5 === l ||
                    null !== _r3 ||
                    ut(_o5, _i3, t) ||
                    H(_o5) ||
                    (t._slotsUsed &&
                      Ca(_o5) &&
                      _o5.hasAttribute("data-lexical-slot")) ||
                    Ka(_o5)
                  )
                ) {
                  if (u) {
                    var _t15 =
                      (Ca(_o5) ? _o5.innerText : null) || _o5.nodeValue;
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
                  ut(_o7, _h, t) || l === _o7
                    ? (_h.appendChild(_o7), _e12++)
                    : H(_o7) && _e12++;
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
                  ut(_n14, _r5, t) ||
                  _i4.removeChild(_n14);
              }
            }
            n.takeRecords();
          }
          null !== r && (c && yc(r), u && Lc(t) && r.insertRawText(a));
        });
      } finally {
        lt = !1;
      }
    }
    function _t(t) {
      var e = t._observer;
      if (null !== e) {
        gt(t, e.takeRecords(), e);
      }
    }
    function pt(t) {
      (!(function (t) {
        0 === ct && Vc(t).addEventListener("textInput", at, !0);
      })(t),
        (t._observer = new MutationObserver(function (e, n) {
          gt(t, e, n);
        })));
    }
    function mt(t, e, n) {
      var o = t.isEqual;
      return e === n || (void 0 !== o && o(e, n));
    }
    function yt(t, e) {
      return mt(t, e, t.defaultValue);
    }
    function xt(t) {
      return "object" == typeof t && null !== t;
    }
    function Ct(t, e) {
      var o = bt(t, e).getter;
      return (
        (xt(o) && void 0 !== o.getterTable) ||
          n('getterTableOf: "' + e + '" declares no getterTable'),
        Nt(o.getterTable)
      );
    }
    function St(t, e) {
      var o = bt(t, e).setter;
      return (
        (xt(o) && void 0 !== o.setterTable) ||
          n('setterTableOf: "' + e + '" declares no setterTable'),
        Nt(o.setterTable)
      );
    }
    function Tt(t, e, o) {
      var _bt = bt(t, e),
        r = _bt.meta;
      for (var _t16 = 0; ; )
        if ("aliased" === r.kind) {
          if (_t16 === o) return Nt(r.aliases);
          (_t16++, (r = r.inner.meta));
        } else
          "nullable" === r.kind || "optional" === r.kind
            ? (r = r.inner.meta)
            : "array" === r.kind
              ? (r = r.item.meta)
              : n(
                  'aliasTableOf: "' +
                    e +
                    '" declares no alias table ' +
                    String(o),
                );
    }
    function vt(t, e) {
      var o = bt(t, e),
        r = o.setter;
      (xt(r) && void 0 !== r.setterTable) ||
        n('setterDefaultOf: "' + e + '" declares no setterTable');
      var i = String(o.defaultValue);
      return (
        zt(r.setterTable, i) ||
          n(
            'setterDefaultOf: "' +
              e +
              '" has no setterTable entry for its default ' +
              i,
          ),
        r.setterTable[i]
      );
    }
    function Nt(t) {
      return Object.assign(Object.create(null), t);
    }
    function bt(t, e) {
      var o = t.get(e);
      return (
        void 0 === o &&
          n('the composed schema declares no property "' + e + '"'),
        o
      );
    }
    function kt(t, e, n, o, r) {
      void 0 !== r && Ot.add(r);
      var i = void 0 === n,
        s = i ? t(void 0) : n;
      return (
        i && wt(s),
        Object.assign(t, { accepts: r, defaultValue: s, isEqual: o, meta: e })
      );
    }
    var Ot = new WeakSet();
    function Et(t) {
      var e = t.accepts;
      return void 0 === e || Ot.has(e) ? void 0 : e;
    }
    var Mt = new WeakSet();
    function At(t) {
      return (null !== t && "object" == typeof t && Mt.add(t), t);
    }
    function wt(t) {
      if (
        null !== t &&
        "object" == typeof t &&
        !Object.isFrozen(t) &&
        !Mt.has(t)
      ) {
        Object.freeze(t);
        for (var _e16 of Object.values(t)) wt(_e16);
      }
    }
    function Dt(t) {
      var e = t.isEqual;
      return void 0 === e
        ? void 0
        : function (t, n) {
            return null == t || null == n ? t === n : e(t, n);
          };
    }
    function Ft(t, e) {
      return function (n) {
        return e(n) || It(t, n);
      };
    }
    function It(t, e) {
      var n = t.accepts;
      return void 0 !== n
        ? n.call(t, e)
        : void 0 !==
            (function (t, e) {
              var n = t.accepts;
              if (void 0 !== n) return It(t, e) ? { parsed: t(e) } : void 0;
              var o = t(e);
              return yt(t, o) && e !== t.defaultValue ? void 0 : { parsed: o };
            })(t, e);
    }
    var Pt = new WeakMap();
    function Rt(t) {
      var e = Pt.get(t);
      if (void 0 !== e) return e;
      var n = (function (t) {
        var e = t.meta;
        if (null == e) return !1;
        if (void 0 !== Et(t)) return !1;
        switch (e.kind) {
          case "raw":
            return !0;
          case "union":
            return (
              null != e.members &&
              e.members.length > 0 &&
              e.members.every(function (t) {
                return Rt(t);
              })
            );
          case "nullable":
          case "optional":
          case "transform":
          case "aliased":
            return null != e.inner && Rt(e.inner);
          default:
            return !1;
        }
      })(t);
      return (Pt.set(t, n), n);
    }
    function Lt(t, e) {
      var n = t.meta;
      if (null == n) return It(t, e) ? 1 : 4;
      var o = Et(t),
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
                var _r6 = Lt(e.item, n[_o9]);
                _r6 > _t17 && (_t17 = _r6);
              }
            return _t17 >= 3 ? 3 : _t17;
          }
          case "object": {
            var _t18 = e.fields;
            if (!Bt(n)) return 4;
            if (null == _t18) return 1;
            if (!o && Kt(n, _t18)) return 4;
            var _r7 = 1;
            for (var _e17 of Object.keys(n))
              if (zt(_t18, _e17)) {
                var _o0 = Lt(_t18[_e17], n[_e17]);
                _o0 > _r7 && (_r7 = _o0);
              }
            return _r7 >= 3 ? 3 : _r7;
          }
          case "union":
            return null == e.members ? 1 : $t(e.members, n).fit;
          case "aliased":
          case "nullable":
          case "optional":
          case "transform":
            return ("aliased" === e.kind
              ? "string" == typeof n && null != e.aliases && zt(e.aliases, n)
              : "nullable" === e.kind
                ? null == n
                : "optional" === e.kind && void 0 === n) || null == e.inner
              ? 1
              : Lt(e.inner, n);
          default:
            return o || It(t, n) ? 1 : 4;
        }
      })(t, n, e, r);
      return r && 4 === i ? 3 : i;
    }
    function $t(t, e) {
      var n,
        o = 4,
        r = 4;
      for (var _i5 = 0; _i5 < t.length; _i5++) {
        var _s5 = t[_i5],
          _l2 = Lt(_s5, e),
          _c2 = _l2 < 3 && Rt(_s5) ? 3 : _l2;
        if (_c2 < o && ((n = _s5), (o = _c2), (r = _l2), 1 === _c2)) break;
      }
      return { fit: r, member: n };
    }
    function zt(t, e) {
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
      for (var _n15 of Object.keys(t)) if (!zt(e, _n15)) return !0;
      return !1;
    }
    function Wt(t) {
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
    var Ut = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
    function jt(t, e) {
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
          return "string" == typeof t && Ut.test(t) ? Number(t) : t;
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
    function Ht(t) {
      var n = At(
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
    function Vt(t, e) {
      if (t === e) return !0;
      if (Array.isArray(t) || Array.isArray(e)) {
        if (!Array.isArray(t) || !Array.isArray(e) || t.length !== e.length)
          return !1;
        for (var _n16 = 0; _n16 < t.length; _n16++)
          if (!Vt(t[_n16], e[_n16])) return !1;
        return !0;
      }
      if (!Bt(t) || !Bt(e)) return !1;
      var n = Object.keys(t);
      return (
        n.length === Object.keys(e).length &&
        n.every(function (n) {
          return zt(e, n) && Vt(t[n], e[n]);
        })
      );
    }
    function Jt() {
      return function (t) {
        return (function (t) {
          var e = { meta: { fields: t, kind: "node" } };
          return e;
        })(t);
      };
    }
    function Yt(t, e) {
      var n = function n(t) {
        return "string" == typeof t && zt(e, t);
      };
      return kt(
        function (o) {
          return n(o) ? e[o] : t(o);
        },
        { aliases: e, inner: t, kind: "aliased" },
        t.defaultValue,
        t.isEqual,
        function (e) {
          return n(e) || It(t, e);
        },
      );
    }
    function Gt(t, e) {
      return Xt("withField", t, {
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
    function qt(t, e) {
      return Xt("withAccessors", t, e);
    }
    function Xt(t, e, n) {
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
    var Qt = "direct",
      Zt = "latest";
    var te = function te(t, e) {
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
        (this.unparse = (e.unparse || ae).bind(e)),
        (this.isEqual = e.isEqual
          ? e.isEqual.bind(e)
          : void 0 !== n && void 0 !== n.isEqual
            ? function (t, e) {
                return mt(n, t, e);
              }
            : Object.is),
        (this.defaultValue =
          void 0 !== n ? n.defaultValue : this.parse(void 0)),
        (this.resetOnCopyNode = e.resetOnCopyNode || !1));
    };
    function ee(t, e, n) {
      if (n === void 0) {
        n = Zt;
      }
      var o = (n === Zt ? t.getLatest() : t).__state;
      return o ? o.getValue(e) : e.defaultValue;
    }
    function ne(t, e, n) {
      var o;
      if ((ys(), "function" == typeof n)) {
        var _r8 = t.getLatest(),
          _i6 = ee(_r8, e);
        if (((o = n(_i6)), e.isEqual(_i6, o))) return _r8;
      } else o = n;
      var r = t.getWritable();
      return (se(r).updateFromKnown(e, o), r);
    }
    function oe(t) {
      var e = new Map(),
        n = new Set();
      for (var _ref0 of _u("function" == typeof t ? t : t.replace)) {
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
    var re = new Set(["__proto__", "constructor", "prototype"]);
    var _ie = (function () {
      function ie(t, e, n, o, r) {
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
      var _proto5 = ie.prototype;
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
        return (ce(t) && (e[$] = t), e);
      };
      _proto5.getWritable = function getWritable(t) {
        if (this.node === t) return this;
        var e = this.sharedNodeState,
          n = this.unknownState,
          o = new Map(this.knownState);
        return new ie(
          t,
          e,
          (function (t, e, n) {
            var o;
            if (n)
              for (var _ref12 of Object.entries(n)) {
                var _r0 = _ref12[0];
                var _i7 = _ref12[1];
                {
                  if (re.has(_r0)) continue;
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
          (r && (delete r[n], (this.unknownState = ce(r))), this.size++),
          o.set(t, e));
      };
      _proto5.updateFromUnknown = function updateFromUnknown(t, e) {
        if (re.has(t)) return;
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
      return ie;
    })();
    function se(t) {
      var e = t.getWritable(),
        n = e.__state
          ? e.__state.getWritable(e)
          : new _ie(
              e,
              (function (t) {
                return t.__state
                  ? t.__state.sharedNodeState
                  : Wl(Ea(), t.getType()).sharedNodeState;
              })(e),
            );
      return ((e.__state = n), n);
    }
    function le(t, e) {
      var n = t.getWritable(),
        o = e[$];
      return ((n.__state || o) && se(t).updateFromJSON(o), n);
    }
    function ce(t) {
      if (t) for (var _e23 in t) return t;
    }
    function ae(t) {
      return t;
    }
    function ue(t, e, n) {
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
    function fe(t, e, n) {
      var o = e.unknownState,
        r = n ? n.unknownState : void 0;
      if (o)
        for (var _ref18 of Object.entries(o)) {
          var _e25 = _ref18[0];
          var _n21 = _ref18[1];
          if (t.has(_e25)) continue;
          t.add(_e25);
          if (_n21 !== (r ? r[_e25] : void 0)) return !0;
        }
      return !1;
    }
    function de(t, e) {
      var n = t.__state;
      return n && n.node === t ? n.getWritable(e) : n;
    }
    function he(t, e) {
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
              (t && ue(n, t, e)) ||
              (e && ue(n, e, t)) ||
              (t && fe(n, t, e)) ||
              (e && fe(n, e, t))
            );
          })(c, a))
      );
    }
    function ge(t, e) {
      var n = t.mergeWithSibling(e),
        o = Ss()._normalizedNodes;
      return (o.add(t.__key), o.add(e.__key), n);
    }
    function _e(t) {
      var e,
        n,
        o = t;
      if ("" !== o.__text || !o.isSimpleText() || o.isUnmergeable()) {
        for (
          ;
          null !== (e = o.getPreviousSibling()) &&
          oi(e) &&
          e.isSimpleText() &&
          !e.isUnmergeable();
        ) {
          if ("" !== e.__text) {
            if (he(e, o)) {
              o = ge(e, o);
              break;
            }
            break;
          }
          e.remove();
        }
        for (
          ;
          null !== (n = o.getNextSibling()) &&
          oi(n) &&
          n.isSimpleText() &&
          !n.isUnmergeable();
        ) {
          if ("" !== n.__text) {
            if (he(o, n)) {
              o = ge(o, n);
              break;
            }
            break;
          }
          n.remove();
        }
      } else o.remove();
    }
    function pe(t) {
      return (me(t.anchor), me(t.focus), t);
    }
    function me(t) {
      for (; "element" === t.type; ) {
        var _e26 = t.getNode(),
          _n22 = t.offset;
        var _o12 = void 0,
          _r10 = void 0;
        if (
          (_n22 === _e26.getChildrenSize()
            ? ((_o12 = _e26.getChildAtIndex(_n22 - 1)), (_r10 = !0))
            : ((_o12 = _e26.getChildAtIndex(_n22)), (_r10 = !1)),
          oi(_o12))
        ) {
          t.set(_o12.__key, _r10 ? _o12.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!js(_o12)) break;
        t.set(_o12.__key, _r10 ? _o12.getChildrenSize() : 0, "element", !0);
      }
    }
    var ye = Symbol["for"]("@lexical/CachedTextSize");
    function xe(e, n) {
      return Re.read(
        function () {
          var o = 0,
            r = e;
          for (var _e27 = 0; _e27 < n && null !== r; _e27++) {
            var _i8 = Pe.get(r);
            if ((void 0 === _i8 && t(345, r), js(_i8))) {
              var _s6 = Le.get(r);
              if (void 0 !== _s6 && js(_s6) && _s6.__parent !== _i8.__parent)
                o += _i8.getTextContentSize();
              else {
                var _e28 = $e.get(r),
                  _n23 = _e28 && _e28.__lexicalTextContent;
                ("string" != typeof _n23 && t(346, _i8.getType()),
                  (o += _n23.length));
              }
              _e27 < n - 1 && !_i8.isInline() && (o += 2);
            } else {
              var _e29 = _i8[ye];
              (void 0 === _e29 && t(347, _i8.getType(), r), (o += _e29));
            }
            r = _i8.__next;
          }
          return o;
        },
        { editor: ve },
      );
    }
    function Ce(t) {
      js(t) ||
        (void 0 === t[ye] &&
          (t[ye] = oi(t) ? t.__text.length : t.getTextContentSize()));
    }
    var Se = 4;
    var Te,
      ve,
      Ne,
      be = "",
      ke = null,
      Oe = null,
      Ee = null;
    function Me() {
      return { firstTextKey: Ee, format: ke, style: Oe };
    }
    function Ae(t) {
      null !== t.firstTextKey &&
        ((ke = t.format), (Oe = t.style), (Ee = t.firstTextKey));
    }
    function we(e) {
      if (null !== Ee) return;
      var n = e.__lexicalFirstTextKey;
      if ((void 0 === n && t(348), null === n)) return;
      var o = Le.get(n);
      oi(o) && ((ke = o.getFormat()), (Oe = o.getStyle()), (Ee = n));
    }
    var De,
      Fe,
      Ie,
      Pe,
      Re,
      Le,
      $e,
      ze,
      Be,
      Ke,
      We = !1,
      Ue = !1;
    function je(t, e) {
      var n = Pe.get(t),
        o = Le.has(t);
      if (null !== e) {
        var _n24 = mn(t);
        _n24.parentNode === e && e.removeChild(_n24);
      }
      if (!o) {
        if ((ve._keyToDOMMap["delete"](t), js(n))) {
          var _t22 = yu(n, Pe);
          He(_t22, 0, _t22.length - 1, null);
        }
        if (void 0 !== n) {
          for (var _t23 of tn(n).values()) {
            var _e30 = nn(_t23);
            (je(_t23, null), null !== _e30 && _e30.remove());
          }
          Ic(Be, Ne, De, n, "destroyed");
        }
      }
    }
    function He(t, e, n, o) {
      for (var _r11 = e; _r11 <= n; ++_r11) {
        var _e31 = t[_r11];
        void 0 !== _e31 && je(_e31, o);
      }
    }
    function Ve(t, e) {
      t.setProperty("text-align", e);
    }
    var Je = "40px";
    function Ye(t, e) {
      var n = Te.theme.indent;
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
          : "calc(" + e + " * var(--lexical-indent-base-value, " + Je + "))",
      ),
        Dc(t, "class"),
        Dc(t, "style"));
    }
    function Ge(t, e) {
      var n = t.style;
      (0 === e
        ? Ve(n, "")
        : 1 === e
          ? Ve(n, "left")
          : 2 === e
            ? Ve(n, "center")
            : 3 === e
              ? Ve(n, "right")
              : 4 === e
                ? Ve(n, "justify")
                : 5 === e
                  ? Ve(n, "start")
                  : 6 === e && Ve(n, "end"),
        Dc(t, "style"));
    }
    function qe(t, e) {
      var n = (function (t) {
        var e = t.__dir;
        if (null !== e) return e;
        if (Gs(t)) return null;
        var n = t.getParent();
        return null === n || (qc(n) && null === n.__dir) ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function Xe(t) {
      var e = ua().createElement("div");
      return (
        e.setAttribute("data-lexical-slot", t),
        (e.style.display = "none"),
        e
      );
    }
    function Qe(t, e, n) {
      e || "false" === t.contentEditable
        ? Wa(n, ve)
        : n.removeAttribute("contenteditable");
    }
    function Ze(t, e, n) {
      var o = be,
        r = Me();
      be = "";
      var i = "";
      var s = Js(t);
      for (var _ref20 of n) {
        var _o14 = _ref20[0];
        var _r12 = _ref20[1];
        {
          var _n25 = Xe(_o14);
          (Qe(e, s, _n25), e.appendChild(_n25), (be = ""));
          var _l3 = Me();
          (rn(_r12, Aa(t, _n25, ve)), Ae(_l3), en(t, _o14, e, _n25), (i += be));
        }
      }
      return (Ae(r), (be = o), i);
    }
    function tn(t) {
      return Su(t) && null !== t.__slots ? t.__slots : Cu;
    }
    function en(t, e, n, o) {
      var r = Ke.$getSlotTargetElement(t, e, n, ve);
      null !== r &&
        (o.parentElement !== r && r.appendChild(o), (o.style.display = ""));
    }
    function nn(t) {
      var e = $e.get(t);
      return void 0 !== e ? e.parentElement : null;
    }
    function on(t, e, n) {
      var o = tn(t),
        r = tn(e);
      for (var _ref22 of o) {
        var _t24 = _ref22[0];
        var _e32 = _ref22[1];
        if (!r.has(_t24)) {
          var _t25 = nn(_e32);
          (je(_e32, null), null !== _t25 && _t25.remove());
        }
      }
      var i = be,
        s = Me();
      var l = "",
        c = null;
      var a = Js(e);
      for (var _ref24 of r) {
        var _t26 = _ref24[0];
        var _i9 = _ref24[1];
        {
          var _r13 = o.get(_t26);
          var _s7 = void 0 !== _r13 ? nn(_r13) : null;
          be = "";
          var _u2 = Me();
          if (null === _s7) {
            _s7 = Xe(_t26);
            var _o15 = null;
            for (var _t27 of n.children)
              if (!_t27.hasAttribute("data-lexical-slot")) {
                _o15 = _t27;
                break;
              }
            (n.insertBefore(_s7, _o15), rn(_i9, Aa(e, _s7, ve)));
          } else
            _r13 === _i9
              ? dn(_i9, _s7)
              : (void 0 !== _r13 && je(_r13, _s7), rn(_i9, Aa(e, _s7, ve)));
          if (
            (Ae(_u2),
            Qe(n, a, _s7),
            en(e, _t26, n, _s7),
            (l += be),
            _s7.parentElement === n)
          ) {
            var _t28 = null === c ? n.firstChild : c.nextSibling;
            (_t28 !== _s7 && n.insertBefore(_s7, _t28), (c = _s7));
          }
        }
      }
      return (Ae(s), (be = i), l);
    }
    function rn(e, n) {
      var o = Le.get(e);
      if ((void 0 === o && t(60), null !== n)) {
        var _t29 = Pe.get(e);
        if (void 0 !== _t29) {
          var _r14 = $e.get(e);
          if (void 0 !== _r14) {
            var _i0 = Tu(_t29) ? _t29.__slotHost : null,
              _s8 = Tu(o) ? o.__slotHost : null,
              _l4 = _t29.__parent !== o.__parent || _i0 !== _s8,
              _c3 = null !== _s8 && _r14.parentElement !== n.element;
            if (_l4 || _c3) return (n.insertChild(_r14), dn(e, n.element));
          }
        }
      }
      var r = Ke.$createDOM(o, ve);
      if (
        ((function (t, e, n) {
          var o = n._keyToDOMMap;
          (fc(e, n, t), o.set(t, e));
        })(e, r, ve),
        oi(o)
          ? r.setAttribute("data-lexical-text", "true")
          : Js(o) &&
            (r.setAttribute("data-lexical-decorator", "true"),
            Ba(r, { captureSelection: !0 })),
        js(o))
      ) {
        var _t30 = o.__indent,
          _e33 = o.__size;
        (qe(r, o), 0 !== _t30 && Ye(r, _t30));
        var _n26 = tn(o),
          _i1 = _n26.size > 0 ? Ze(o, r, _n26) : "";
        if (0 === _e33)
          ((r.__lexicalTextContent = _i1),
            (r.__lexicalFirstTextKey = null),
            (be += _i1),
            _n26.size > 0 && (r.__lexicalSlotTextLength = _i1.length));
        else {
          var _t31 = be,
            _s9 = _e33 - 1;
          if ((sn(yu(o, Le), o, 0, _s9, Aa(o, r, ve)), "" !== _i1)) {
            var _e34 = r.__lexicalTextContent || "";
            ((r.__lexicalTextContent = _i1 + _e34), (be = _t31 + _i1 + _e34));
          }
          _n26.size > 0 && (r.__lexicalSlotTextLength = _i1.length);
        }
        var _s0 = o.__format;
        (0 !== _s0 && Ge(r, _s0), o.isInline() || (an(null, o, r), cn(o, r)));
      } else {
        var _t32 = o.getTextContent();
        if (Js(o)) {
          var _t33 = o.decorate(ve, Te);
          (null !== _t33 && hn(e, _t33), (r.contentEditable = "false"));
          var _n27 = tn(o);
          _n27.size > 0 && Ze(o, r, _n27);
        }
        be += _t32;
      }
      return (
        null !== n && n.insertChild(r),
        Ke.$decorateDOM(o, null, r, ve),
        Ce(o),
        Ic(Be, Ne, De, o, "created"),
        r
      );
    }
    function sn(e, n, o, r, i) {
      var s = be,
        l = Me();
      ((be = ""), (ke = null), (Oe = null), (Ee = null));
      var c = o;
      for (; c <= r; ++c) {
        var _t34 = Me();
        rn(e[c], i);
        var _n28 = Le.get(e[c]);
        (null !== _n28 && oi(_n28)
          ? null === ke &&
            ((ke = _n28.getFormat()), (Oe = _n28.getStyle()), (Ee = _n28.__key))
          : js(_n28) && c < r && !_n28.isInline() && (be += N),
          Ae(_t34));
      }
      var a = ve._keyToDOMMap.get(n.__key);
      (void 0 === a && t(349, n.__key),
        (a.__lexicalTextContent = be),
        (a.__lexicalFirstTextKey = Ee),
        (be = s + be),
        Ae(l));
    }
    function ln(t, e) {
      if (!t) return !1;
      var n = e.get(t);
      return Js(n) && !n.isInline();
    }
    function cn(t, e) {
      var n = Aa(t, e, ve);
      (n.setDecoratorBoundaryAnchor("leading", ln(t.__first, Le)),
        n.setDecoratorBoundaryAnchor("trailing", ln(t.__last, Le)));
    }
    function an(t, e, n) {
      var o = Aa(e, n, ve),
        r = (function (t, e) {
          if (t) {
            var _n29 = t.__last;
            if (_n29) {
              var _t35 = e.get(_n29);
              if (_t35)
                return rl(_t35)
                  ? "line-break"
                  : Js(_t35) && _t35.isInline()
                    ? "decorator"
                    : null;
            }
            return "empty";
          }
          return null;
        })(e, Le);
      o.setManagedLineBreak(r);
    }
    function un(e, n, o) {
      var r;
      ((ke = null),
        (Oe = null),
        (Ee = null),
        (function (e, n, o) {
          var r = be,
            i = e.__size,
            s = n.__size;
          be = "";
          var l = o.element,
            c = ve._keyToDOMMap.get(n.__key);
          void 0 === c && t(351, n.__key);
          var a = s - i;
          if (
            !We &&
            Math.abs(a) <= 1 &&
            i >= Se &&
            e.__first === n.__first &&
            (0 !== a || !ve._cloneNotNeeded.has(e.__key))
          ) {
            var _i10 = c.__lexicalTextContent,
              _u3 = ze.get(e.__key);
            if (!We && "string" == typeof _i10 && void 0 !== _u3) {
              var _s1 = (function (t, e) {
                var n = e.size;
                if (0 === n || n >= t.__size) return null;
                var o = t.__last,
                  r = null,
                  i = 0;
                for (; null !== o && i < n; ) {
                  if (!e.has(o)) return null;
                  r = o;
                  var _t36 = Le.get(o);
                  if (void 0 === _t36) return null;
                  ((o = _t36.__prev), i++);
                }
                if (i !== n) return null;
                if (null !== o && e.has(o)) return null;
                return r;
              })(n, _u3);
              if (null !== _s1) {
                var _f3 = _u3.size;
                if (0 === a) {
                  var _e35 = xe(_s1, _f3);
                  var _o16 = _s1,
                    _a2 = 0;
                  for (; null !== _o16 && _a2 < _f3; ) {
                    var _t37 = Le.get(_o16);
                    if (void 0 === _t37) break;
                    var _e36 = Me();
                    (dn(_o16, l),
                      oi(_t37) &&
                        null === ke &&
                        ((ke = _t37.getFormat()),
                        (Oe = _t37.getStyle()),
                        (Ee = _t37.__key)),
                      Ae(_e36),
                      (_o16 = _t37.__next),
                      _a2++);
                  }
                  var _d2 = "";
                  for (_o16 = _s1, _a2 = 0; null !== _o16 && _a2 < _f3; ) {
                    var _e37 = Le.get(_o16);
                    if (void 0 === _e37) break;
                    var _n30 = void 0;
                    if (js(_e37)) {
                      var _r15 = ve._keyToDOMMap.get(_o16),
                        _i11 = _r15 && _r15.__lexicalTextContent;
                      ("string" != typeof _i11 && t(352, _e37.getType()),
                        (_n30 = _i11));
                    } else _n30 = _e37.getTextContent();
                    ((_d2 += _n30),
                      _a2 < _f3 - 1 &&
                        js(_e37) &&
                        !_e37.isInline() &&
                        (_d2 += N),
                      (_o16 = _e37.__next),
                      _a2++);
                  }
                  var _h2 = c.__lexicalSlotTextLength || 0,
                    _g2 = _h2 > 0 ? _i10.slice(_h2) : _i10,
                    _3 = _g2.slice(0, _g2.length - _e35) + _d2;
                  return (
                    (c.__lexicalTextContent = _3),
                    (be = r + _3),
                    void fn(n, c, _u3)
                  );
                }
                if (
                  (function (e, n, o, r, i, s, l, c) {
                    if (1 !== c && -1 !== c) return !1;
                    var a = 1 === c ? 2 : 1;
                    if (l !== a) return !1;
                    var u = l - c;
                    var f = e.__last;
                    for (var _t38 = 0; _t38 < u - 1; _t38++) {
                      if (null === f) return !1;
                      var _t39 = Pe.get(f);
                      if (void 0 === _t39) return !1;
                      f = _t39.__prev;
                    }
                    if (null === f) return !1;
                    var d = Le.get(s),
                      h = Pe.get(f);
                    if (void 0 === d || void 0 === h) return !1;
                    if (d.__prev !== h.__prev) return !1;
                    var g = [];
                    var _ = s;
                    for (var _t40 = 0; _t40 < l; _t40++) {
                      if (null === _) return !1;
                      g.push(_);
                      var _t41 = Le.get(_);
                      _ = _t41 ? _t41.__next : null;
                    }
                    var p = [];
                    _ = f;
                    for (var _t42 = 0; _t42 < u; _t42++) {
                      if (null === _) return !1;
                      p.push(_);
                      var _t43 = Pe.get(_);
                      _ = _t43 ? _t43.__next : null;
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
                    var T = xe(f, u);
                    for (var _t44 of x) {
                      var _e38 = Me();
                      if ("reconcile" === _t44.kind) dn(_t44.key, o.element);
                      else if ("destroy" === _t44.kind) je(_t44.key, o.element);
                      else {
                        var _e39 = null;
                        for (var _n31 = _t44.nextIndex + 1; _n31 < l; _n31++) {
                          var _t45 = ve._keyToDOMMap.get(g[_n31]);
                          if (void 0 !== _t45) {
                            _e39 = _t45;
                            break;
                          }
                        }
                        rn(
                          _t44.key,
                          o.withBefore(_e39 != null ? _e39 : o.before),
                        );
                      }
                      if ("destroy" !== _t44.kind) {
                        var _e40 = Le.get(_t44.key);
                        _e40 &&
                          oi(_e40) &&
                          null === ke &&
                          ((ke = _e40.getFormat()),
                          (Oe = _e40.getStyle()),
                          (Ee = _e40.__key));
                      }
                      Ae(_e38);
                    }
                    var v = "";
                    for (var _e41 = 0; _e41 < l; _e41++) {
                      var _n32 = Le.get(g[_e41]);
                      if (void 0 === _n32) return !1;
                      var _o17 = void 0;
                      if (js(_n32)) {
                        var _r16 = ve._keyToDOMMap.get(g[_e41]),
                          _i12 = _r16 && _r16.__lexicalTextContent;
                        ("string" != typeof _i12 && t(350, _n32.getType()),
                          (_o17 = _i12));
                      } else _o17 = _n32.getTextContent();
                      ((v += _o17),
                        _e41 < l - 1 &&
                          js(_n32) &&
                          !_n32.isInline() &&
                          (v += N));
                    }
                    var b = r.__lexicalSlotTextLength || 0,
                      k = b > 0 ? i.slice(b) : i;
                    return (
                      (r.__lexicalTextContent = k.slice(0, k.length - T) + v),
                      !0
                    );
                  })(e, 0, o, c, _i10, _s1, _f3, a)
                ) {
                  var _e42 = c.__lexicalTextContent;
                  return (
                    "string" != typeof _e42 && t(353),
                    (be = r + _e42),
                    void fn(n, c, _u3)
                  );
                }
              }
            }
            if (0 === a) {
              var _n33 = e.__first,
                _o18 = 0;
              for (; null !== _n33; ) {
                var _e43 = Le.get(_n33);
                if (void 0 === _e43) break;
                var _r17 = We || Ie.has(_n33) || Fe.has(_n33),
                  _i13 = Me();
                if (_r17) dn(_n33, l);
                else {
                  var _o19 = void 0,
                    _r18 = void 0;
                  if (js(_e43)) {
                    _r18 = $e.get(_n33);
                    var _i14 = _r18 && _r18.__lexicalTextContent;
                    ("string" != typeof _i14 && t(354, _e43.getType()),
                      (_o19 = _i14));
                  } else _o19 = _e43.getTextContent();
                  ((be += _o19), void 0 !== _r18 && we(_r18));
                }
                (oi(_e43)
                  ? null === ke &&
                    ((ke = _e43.getFormat()),
                    (Oe = _e43.getStyle()),
                    (Ee = _e43.__key))
                  : js(_e43) && _o18 < s - 1 && !_e43.isInline() && (be += N),
                  Ae(_i13),
                  (_n33 = _e43.__next),
                  _o18++);
              }
              return (
                (c.__lexicalTextContent = be),
                (c.__lexicalFirstTextKey = Ee),
                void (be = r + be)
              );
            }
          }
          if (1 === i && 1 === s) {
            var _t46 = e.__first,
              _r19 = n.__first;
            if (_t46 === _r19) dn(_t46, l);
            else {
              var _e44 = mn(_t46),
                _n34 = rn(_r19, null);
              try {
                _e44.parentNode === l
                  ? l.replaceChild(_n34, _e44)
                  : o.insertChild(_n34);
              } catch (o) {
                if ("object" == typeof o && null != o) {
                  var _i15 =
                    o.toString() +
                    " Parent: " +
                    l.tagName +
                    ", new child: {tag: " +
                    _n34.tagName +
                    " key: " +
                    _r19 +
                    "}, old child: {tag: " +
                    _e44.tagName +
                    ", key: " +
                    _t46 +
                    "}.";
                  throw new Error(_i15);
                }
                throw o;
              }
              je(_t46, null);
            }
            var _i16 = Le.get(_r19);
            oi(_i16) &&
              null === ke &&
              ((ke = _i16.getFormat()),
              (Oe = _i16.getStyle()),
              (Ee = _i16.__key));
          } else {
            var _r20 = yu(e, Pe),
              _c4 = yu(n, Le);
            if (
              (_r20.length !== i && t(227), _c4.length !== s && t(228), 0 === i)
            )
              0 !== s && sn(_c4, n, 0, s - 1, o);
            else if (0 === s) {
              if (0 !== i) {
                var _t47 =
                  null == o.after &&
                  null == o.before &&
                  0 === tn(n).size &&
                  null == o.element.__lexicalLineBreak;
                (He(_r20, 0, i - 1, _t47 ? null : l),
                  _t47 && (l.textContent = ""));
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
                  var _t48 = e[f],
                    _o20 = n[d],
                    _r21 = Me();
                  if (_t48 === _o20) ((u = gn(dn(_o20, i.element))), f++, d++);
                  else {
                    if ((void 0 === a && (a = _n(n, d)), void 0 === c))
                      c = _n(e, f);
                    else if (!c.has(_t48)) {
                      (f++, Ae(_r21));
                      continue;
                    }
                    if (!a.has(_t48)) {
                      ((u = gn(mn(_t48))),
                        je(_t48, i.element),
                        f++,
                        c["delete"](_t48),
                        Ae(_r21));
                      continue;
                    }
                    if (c.has(_o20)) {
                      var _t49 = zc(ve, _o20);
                      (_t49 !== u &&
                        i
                          .withBefore(u != null ? u : i.before)
                          .insertChild(_t49),
                        (u = gn(dn(_o20, i.element))),
                        f++,
                        d++);
                    } else
                      (rn(_o20, i.withBefore(u != null ? u : i.before)), d++);
                  }
                  var _s10 = Le.get(_o20);
                  (null !== _s10 && oi(_s10)
                    ? null === ke &&
                      ((ke = _s10.getFormat()),
                      (Oe = _s10.getStyle()),
                      (Ee = _s10.__key))
                    : js(_s10) && d <= l && !_s10.isInline() && (be += N),
                    Ae(_r21));
                }
                var h = f > s,
                  g = d > l;
                if (h && !g) {
                  var _e45 = n[l + 1],
                    _o21 = void 0 === _e45 ? null : ve.getElementByKey(_e45);
                  sn(n, t, d, l, i.withBefore(_o21 != null ? _o21 : i.before));
                } else g && !h && He(e, f, s, i.element);
              })(n, _r20, _c4, i, s, o);
          }
          ((c.__lexicalTextContent = be),
            (c.__lexicalFirstTextKey = Ee),
            (be = r + be));
        })(e, n, Aa(n, o, ve)),
        qc(n) ||
          ((r = n),
          null == ke || ke === r.__textFormat || Ue || r.setTextFormat(ke),
          (function (t) {
            null == Oe || Oe === t.__textStyle || Ue || t.setTextStyle(Oe);
          })(n)));
    }
    function fn(t, e, n) {
      var o = e.__lexicalFirstTextKey;
      if (null != o) {
        var _e46 = t.__key;
        var _r22 = o;
        for (; null !== _r22; ) {
          var _t50 = Le.get(_r22);
          if (void 0 === _t50) {
            _r22 = null;
            break;
          }
          if (_t50.__parent === _e46) break;
          _r22 = _t50.__parent;
        }
        if (null !== _r22 && !n.has(_r22)) {
          var _t51 = Le.get(o);
          if (oi(_t51))
            return ((ke = _t51.getFormat()), void (Oe = _t51.getStyle()));
        }
      }
      e.__lexicalFirstTextKey = Ee;
    }
    function dn(e, n) {
      var o = Pe.get(e);
      var r = Le.get(e);
      (void 0 !== o && void 0 !== r) || t(61);
      var i = We || Ie.has(e) || Fe.has(e),
        s = zc(ve, e);
      if (o === r && !i) {
        var _e47;
        if (js(o)) {
          var _n35 = s.__lexicalTextContent;
          ("string" != typeof _n35 && t(355, o.getType()),
            (_e47 = _n35),
            we(s));
        } else _e47 = o.getTextContent();
        return ((be += _e47), s);
      }
      if (
        (o !== r && i && Ic(Be, Ne, De, r, "updated"),
        Ke.$updateDOM(r, o, s, ve))
      ) {
        var _o22 = rn(e, null);
        return (
          null === n && t(62),
          n.replaceChild(_o22, s),
          je(e, null),
          _o22
        );
      }
      if (js(o)) {
        js(r) || t(334, e);
        var _n36 = r.__indent;
        (We || _n36 !== o.__indent) && Ye(s, _n36);
        var _l5 = r.__format;
        (We || _l5 !== o.__format) && Ge(s, _l5);
        var _c5 = i && (tn(r).size > 0 || tn(o).size > 0) ? on(o, r, s) : "";
        if (i) {
          var _t52 = be;
          if (
            (un(o, r, s),
            r.isInline() || (Gs(r) || an(0, r, s), cn(r, s)),
            "" !== _c5)
          ) {
            var _e48 = s.__lexicalTextContent || "";
            ((s.__lexicalTextContent = _c5 + _e48),
              (be = _t52 + _c5 + _e48),
              (s.__lexicalSlotTextLength = _c5.length));
          } else
            (tn(r).size > 0 || tn(o).size > 0) &&
              (s.__lexicalSlotTextLength = 0);
        } else {
          var _e49 = s.__lexicalTextContent;
          ("string" != typeof _e49 && t(356, o.getType()), (be += _e49), we(s));
        }
        if (
          (We || r.__dir !== o.__dir || r.__parent !== o.__parent) &&
          (qe(s, r), Gs(r) && !We)
        )
          for (var _t53 of r.getChildren())
            if (js(_t53)) {
              qe(zc(ve, _t53.getKey()), _t53);
            }
      } else {
        var _t54 = r.getTextContent();
        if (Js(r)) {
          var _t55 = r.decorate(ve, Te);
          (null !== _t55 && hn(e, _t55),
            i && (tn(r).size > 0 || tn(o).size > 0) && on(o, r, s));
        }
        be += _t54;
      }
      if (!Ue && Gs(r)) {
        var _t56 = r.getLatest();
        if (_t56.__cachedText !== be) {
          var _e50 = _t56.getWritable();
          ((_e50.__cachedText = be), (r = _e50));
        }
      }
      return (Ke.$decorateDOM(r, o, s, ve), Ce(r), s);
    }
    function hn(t, e) {
      var n = ve._pendingDecorators;
      var o = ve._decorators;
      if (null === n) {
        if (o[t] === e) return;
        n = gc(ve);
      }
      n[t] = e;
    }
    function gn(t) {
      var e = t.nextSibling;
      return (
        null !== e && e === ve._blockCursorElement && (e = e.nextSibling),
        e
      );
    }
    function _n(t, e) {
      var n = new Set();
      for (var _o23 = e; _o23 < t.length; _o23++) n.add(t[_o23]);
      return n;
    }
    function pn(t, e, n, o, r, i) {
      ((be = ""),
        (ke = null),
        (Oe = null),
        (Ee = null),
        (We = 2 === o),
        (ve = n),
        (Te = n._config),
        (Ke = n._config.dom || Il),
        (Ne = n._nodes),
        (De = ve._listeners.mutation),
        (Fe = r),
        (Ie = i),
        (Pe = t._nodeMap),
        (Re = t),
        (Le = e._nodeMap),
        (Ue = e._readOnly),
        ($e = tt(n._keyToDOMMap)),
        (ze = (function () {
          var t = new Map(),
            e = function e(_e52) {
              for (var _n37 of _e52) {
                var _e51 = Le.get(_n37);
                if (void 0 === _e51) continue;
                var _o24 = _e51.__parent;
                if (null === _o24) continue;
                var _r23 = t.get(_o24);
                (void 0 === _r23 && ((_r23 = new Set()), t.set(_o24, _r23)),
                  _r23.add(_n37));
              }
            };
          return (e(Fe.keys()), e(Ie), t);
        })()));
      var s = new Map();
      return (
        (Be = s),
        dn("root", null),
        (ve = void 0),
        (Ne = void 0),
        (Fe = void 0),
        (Ie = void 0),
        (Pe = void 0),
        (Re = void 0),
        (Le = void 0),
        (Te = void 0),
        ($e = void 0),
        (ze = void 0),
        (Be = void 0),
        (Ke = Il),
        s
      );
    }
    function mn(e) {
      var n = $e.get(e);
      return (void 0 === n && t(75, e), n);
    }
    function yn(t) {
      return function () {};
    }
    function xn(t) {
      return { type: t };
    }
    var Cn = xn("SELECTION_CHANGE_COMMAND"),
      Sn = xn("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"),
      Tn = xn("CLICK_COMMAND"),
      vn = xn("BEFORE_INPUT_COMMAND"),
      Nn = xn("INPUT_COMMAND"),
      bn = xn("COMPOSITION_START_COMMAND"),
      kn = xn("COMPOSITION_END_COMMAND"),
      On = xn("DELETE_CHARACTER_COMMAND"),
      En = xn("INSERT_LINE_BREAK_COMMAND"),
      Mn = xn("INSERT_PARAGRAPH_COMMAND"),
      An = xn("CONTROLLED_TEXT_INSERTION_COMMAND"),
      wn = xn("PASTE_COMMAND"),
      Dn = xn("REMOVE_TEXT_COMMAND"),
      Fn = xn("DELETE_WORD_COMMAND"),
      In = xn("DELETE_LINE_COMMAND"),
      Pn = xn("FORMAT_TEXT_COMMAND"),
      Rn = xn("SET_TEXT_FORMAT_COMMAND"),
      Ln = xn("UNDO_COMMAND"),
      $n = xn("REDO_COMMAND"),
      zn = xn("KEYDOWN_COMMAND"),
      Bn = xn("KEY_ARROW_RIGHT_COMMAND"),
      Kn = xn("MOVE_TO_END"),
      Wn = xn("KEY_ARROW_LEFT_COMMAND"),
      Un = xn("MOVE_TO_START"),
      jn = xn("KEY_ARROW_UP_COMMAND"),
      Hn = xn("KEY_ARROW_DOWN_COMMAND"),
      Vn = xn("KEY_ENTER_COMMAND"),
      Jn = xn("KEY_SPACE_COMMAND"),
      Yn = xn("KEY_BACKSPACE_COMMAND"),
      Gn = xn("KEY_ESCAPE_COMMAND"),
      qn = xn("KEY_DELETE_COMMAND"),
      Xn = xn("KEY_TAB_COMMAND"),
      Qn = xn("INSERT_TAB_COMMAND"),
      Zn = xn("INDENT_CONTENT_COMMAND"),
      to = xn("OUTDENT_CONTENT_COMMAND"),
      eo = xn("DROP_COMMAND"),
      no = xn("FORMAT_ELEMENT_COMMAND"),
      oo = xn("DRAGSTART_COMMAND"),
      ro = xn("DRAGOVER_COMMAND"),
      io = xn("DRAGEND_COMMAND"),
      so = xn("COPY_COMMAND"),
      lo = xn("CUT_COMMAND"),
      co = xn("SELECT_ALL_COMMAND"),
      ao = xn("CLEAR_EDITOR_COMMAND"),
      uo = xn("CLEAR_HISTORY_COMMAND"),
      fo = xn("CAN_REDO_COMMAND"),
      ho = xn("CAN_UNDO_COMMAND"),
      go = xn("FOCUS_COMMAND"),
      _o = xn("BLUR_COMMAND"),
      po = xn("KEY_MODIFIER_COMMAND");
    function mo(t, e) {
      var _babelHelpers$extends;
      return babelHelpers["extends"](
        {},
        e,
        ((_babelHelpers$extends = {}),
        (_babelHelpers$extends[z] = t),
        _babelHelpers$extends),
      );
    }
    var yo = mo("metaKey", { ctrlKey: !a, metaKey: a }),
      xo = mo("altKey", { altKey: a, ctrlKey: !a }),
      Co = [
        ["altKey", 1],
        ["ctrlKey", 2],
        ["metaKey", 4],
        ["shiftKey", 8],
      ];
    function So(t, e, n) {
      var o = t.get(e);
      o ? o.push(n) : t.set(e, [n]);
    }
    var _To = (function () {
      function To() {
        this.byKey = new Map();
        this.byCode = new Map();
      }
      var _proto6 = To.prototype;
      _proto6.add = function add(e) {
        var n = e.key,
          _e$modifiers = e.modifiers,
          o = _e$modifiers === void 0 ? {} : _e$modifiers;
        n.length > 0 || t(399);
        var r = n.toLowerCase();
        for (var _t57 of (function (t) {
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
          for (var _ref26 of Co) {
            _loop();
          }
          return e;
        })(o))
          (So(this.byKey, _t57 + ":" + r, e),
            1 === n.length &&
              (/[0-9]/.test(n)
                ? So(this.byCode, _t57 + ":Digit" + n, e)
                : /[a-z]/.test(r) &&
                  So(this.byCode, _t57 + ":Key" + r.toUpperCase(), e)));
        return this;
      };
      _proto6.matches = function matches(t) {
        var e = t.key;
        if (!e) return [];
        var n = (function (t) {
            var e = 0;
            for (var _ref28 of Co) {
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
          var _e53 = this.byCode.get(n + ":" + t.code);
          _e53 && r.push.apply(r, Array.from(_e53));
        }
        return r;
      };
      _proto6.match = function match(t) {
        return this.matches(t)[0];
      };
      return To;
    })();
    function vo(t) {
      var e = new _To();
      for (var _n39 of t) e.add(_n39);
      return e;
    }
    function No(t) {
      var e = new Map();
      return {
        dispose: function dispose() {
          for (var _t58 of e.values()) _t58.dispose();
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
    function bo(t, e, n, o) {
      return (
        t.addEventListener(e, n, o),
        t.removeEventListener.bind(t, e, n, o)
      );
    }
    var ko = Object.freeze({});
    var Oo;
    function Eo() {
      if (void 0 !== Oo) return Oo;
      var t = [
        ["keydown", Zo],
        ["pointerdown", $o],
        ["compositionstart", Jo],
        ["compositionend", Qo],
        ["input", Ho],
        ["click", Lo],
        ["cut", ko],
        ["copy", ko],
        ["dragstart", ko],
        ["dragover", ko],
        ["dragend", ko],
        ["paste", ko],
        ["focus", ko],
        ["blur", ko],
        ["drop", ko],
      ];
      return (
        d &&
          t.push([
            "beforeinput",
            function (t, e) {
              return (function (t, e) {
                var n = t.inputType;
                if ("deleteCompositionText" === n || (u && Lc(e))) return;
                if ("insertCompositionText" === n) return;
                Rs(
                  e,
                  function () {
                    Uo(t, e) || $c(e, vn, t);
                  },
                  { event: t },
                );
              })(t, e);
            },
          ]),
        (Oo = t),
        t
      );
    }
    var Mo = new WeakMap(),
      Ao = new WeakMap(),
      wo = No(function (t) {
        return (
          t.addEventListener("selectionchange", cr),
          function () {
            return t.removeEventListener("selectionchange", cr);
          }
        );
      });
    function Do(t, e, n, o, r, i) {
      var s = t.anchor,
        l = t.focus,
        c = s.getNode(),
        a = Ss();
      var u;
      if (void 0 !== i) u = i;
      else {
        var _t59 = oa(Vc(a));
        u = null !== _t59 ? ha(_t59, a._rootElement) : null;
      }
      var f = null !== u ? u.anchorNode : null,
        h = s.key,
        g = a.getElementByKey(h),
        _ = n.length;
      return (
        h !== l.key ||
        !oi(c) ||
        (((!r &&
          (!d || a._inputState.lastBeforeInputInsertTextTimeStamp < o + 50)) ||
          (c.isDirty() && _ < 2) ||
          Sc(n)) &&
          s.offset !== l.offset &&
          !c.isComposing()) ||
        Ql(c) ||
        (c.isDirty() && _ > 1) ||
        ((r || !d) && null !== g && !c.isComposing() && f !== Da(c, g, a)) ||
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
            r = Xl(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!o.canInsertTextBefore() && !e.isComposing()) ||
                r ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (oi(e) || (js(e) && e.isInline())) &&
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
    function Fo(t, e) {
      return (
        Zl(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function Io(e, n, o) {
      var _ha = ha(e, n._rootElement),
        r = _ha.anchorNode,
        i = _ha.anchorOffset,
        s = _ha.focusNode,
        l = _ha.focusOffset,
        c = n._inputState,
        a = c.isSelectionChangeFromDOMUpdate;
      if (a) {
        c.isSelectionChangeFromDOMUpdate = !1;
        var _t60 = c.selectionChangeFromDOMUpdatePoints;
        if (
          ((c.selectionChangeFromDOMUpdatePoints = null),
          Fo(r, i) &&
            Fo(s, l) &&
            !c.postDeleteSelectionToRestore &&
            (null === _t60 ||
              (_t60.anchorNode === r &&
                _t60.anchorOffset === i &&
                _t60.focusNode === s &&
                _t60.focusOffset === l)))
        )
          return;
      }
      Rs(n, function () {
        if (!o) return void yc(null);
        if (!Jl(n, r, s)) return;
        var u = Hi();
        if (c.postDeleteSelectionToRestore && yi(u) && u.isCollapsed()) {
          var _t61 = u.anchor,
            _e54 = c.postDeleteSelectionToRestore.anchor;
          ((_t61.key === _e54.key && _t61.offset === _e54.offset + 1) ||
            (1 === _t61.offset &&
              _e54.getNode().is(_t61.getNode().getPreviousSibling()))) &&
            ((u = c.postDeleteSelectionToRestore.clone()), yc(u));
        }
        if (((c.postDeleteSelectionToRestore = null), yi(u))) {
          var _o26 = u.anchor,
            _a3 = _o26.getNode();
          if (u.isCollapsed()) {
            "Range" === e.type && r === s && (u.dirty = !0);
            var _i18 = Vc(n).event,
              _l6 = _i18 ? _i18.timeStamp : performance.now(),
              _c$collapsedSelection = c.collapsedSelectionFormat,
              _f4 = _c$collapsedSelection.format,
              _d3 = _c$collapsedSelection.style,
              _h3 = _c$collapsedSelection.offset,
              _g3 = _c$collapsedSelection.key,
              _4 = _c$collapsedSelection.timeStamp,
              _p2 = pc(),
              _m = !1 === n.isComposing() && "" === _p2.getTextContent();
            if (_l6 < _4 + 200 && _o26.offset === _h3 && _o26.key === _g3)
              Po(u, _f4, _d3);
            else if ("text" === _o26.type) (oi(_a3) || t(141), Ro(u, _a3));
            else if ("element" === _o26.type && !_m) {
              js(_a3) || t(259);
              var _e55 = _o26.getNode();
              _e55.isEmpty()
                ? (function (t, e) {
                    var n = e.getTextFormat(),
                      o = e.getTextStyle();
                    Po(t, n, o);
                  })(u, _e55)
                : Po(u, u.format, "");
            }
          } else {
            var _t62 = _o26.key,
              _e56 = u.focus.key,
              _n40 = u.getNodes(),
              _r25 = _n40.length,
              _s11 = u.isBackward(),
              _c6 = _s11 ? l : i,
              _a4 = _s11 ? i : l,
              _f5 = _s11 ? _e56 : _t62,
              _d4 = _s11 ? _t62 : _e56;
            var _h4 = T,
              _g4 = !1;
            for (var _t63 = 0; _t63 < _r25; _t63++) {
              var _e57 = _n40[_t63],
                _o27 = _e57.getTextContentSize();
              if (
                oi(_e57) &&
                0 !== _o27 &&
                !(
                  (0 === _t63 && _e57.__key === _f5 && _c6 === _o27) ||
                  (_t63 === _r25 - 1 && _e57.__key === _d4 && 0 === _a4)
                ) &&
                ((_g4 = !0), (_h4 &= _e57.getFormat()), 0 === _h4)
              )
                break;
            }
            u.format = _g4 ? _h4 : 0;
          }
        }
        var f = Vi();
        (a || (null !== u ? u.dirty || !yi(u) || !u.is(f) : null !== f)) &&
          $c(n, Cn);
      });
    }
    function Po(t, e, n) {
      (t.format === e && t.style === n) ||
        ((t.format = e), (t.style = n), (t.dirty = !0));
    }
    function Ro(t, e) {
      Po(t, e.getFormat(), e.getStyle());
    }
    function Lo(t, e) {
      Rs(e, function () {
        var n = Hi(),
          o = oa(Vc(e)),
          r = Vi();
        if (o)
          if (yi(n)) {
            var _t64 = n.anchor,
              _e58 = _t64.getNode();
            "element" === _t64.type &&
              0 === _t64.offset &&
              n.isCollapsed() &&
              !Gs(_e58) &&
              1 === pc().getChildrenSize() &&
              _e58.getTopLevelElementOrThrow().isEmpty() &&
              null !== r &&
              n.is(r) &&
              (o.removeAllRanges(), (n.dirty = !0));
          } else if ("touch" === t.pointerType || "pen" === t.pointerType) {
            var _n41 = ha(o, e._rootElement).anchorNode;
            if (Ca(_n41) || Zl(_n41)) {
              yc(ji(r, o, e, t));
            }
          }
        if (u && null !== o && 0 === o.rangeCount) {
          var _n42 = e._rootElement;
          if (null !== _n42 && t.target === _n42) {
            var _i19 = t.clientY;
            var _s12 = _n42.childNodes.length;
            for (var _t65 = 0; _t65 < _n42.childNodes.length; _t65++) {
              var _e59 = _n42.childNodes[_t65];
              if (Ca(_e59)) {
                var _n43 = _e59.getBoundingClientRect();
                if (_i19 <= (_n43.top + _n43.bottom) / 2) {
                  _s12 = _t65;
                  break;
                }
              }
            }
            o.setBaseAndExtent(_n42, _s12, _n42, _s12);
            var _l7 = ji(r, o, e, t);
            null !== _l7 ? yc(_l7) : o.removeAllRanges();
          }
        }
        $c(e, Tn, t);
      });
    }
    function $o(t, e) {
      var n = xa(t),
        o = t.pointerType;
      Sa(n) &&
        "touch" !== o &&
        "pen" !== o &&
        0 === t.button &&
        Rs(e, function () {
          Ua(n, e) || (e._inputState.isSelectionChangeFromMouseDown = !0);
        });
    }
    function zo(t) {
      if (!t.getTargetRanges) return null;
      var e = t.getTargetRanges();
      return 0 === e.length ? null : e[0];
    }
    function Bo(t) {
      var e = Ss()._inputState.lastKeyCode;
      if (null == t || t.length <= 1 || null == e) return;
      var n =
        1 === e.length ? e : "Enter" === e ? "\n" : "Tab" === e ? "\t" : null;
      if (!n) return;
      var o = Hi();
      if (!yi(o) || !o.isCollapsed()) return;
      var r = o.anchor.getNode();
      if (!oi(r)) return;
      var i = o.anchor.offset;
      if (r.getTextContentSize() === i) {
        var _t66 = r.getNextSibling();
        if ("\n" === n) {
          if (g) return;
          if (rl(_t66)) _t66.selectEnd();
          else if (!_t66) {
            var _t67 = mu(r, Bi),
              _e60 = _t67 && _t67.getNextSibling();
            js(_e60) && _e60.selectStart();
          }
        } else
          "\t" === n
            ? ci(_t66) && _t66.selectEnd()
            : oi(_t66) && _t66.getTextContent()[0] === n && _t66.select(1, 1);
      } else r.getTextContent()[i] === n && r.select(i + 1, i + 1);
    }
    function Ko(t) {
      ((t.isInsertTextAfterHandledSelectionCommand = !1),
        null !== t.handledSelectionCommandTimeoutId &&
          (clearTimeout(t.handledSelectionCommandTimeoutId),
          (t.handledSelectionCommandTimeoutId = null)));
    }
    function Wo(t) {
      (Ko(t),
        (t.isInsertTextAfterHandledSelectionCommand = !0),
        (t.handledSelectionCommandTimeoutId = setTimeout(function () {
          return Ko(t);
        }, 0)));
    }
    function Uo(t, e) {
      var n = xa(t);
      if (Ca(n) && Ua(n, e)) return !0;
      var o = e.getRootElement();
      if (null === o) return !1;
      var r = ya(o.ownerDocument);
      return null !== r && o.contains(r) && Ua(r, e);
    }
    function jo(e) {
      var _ref29;
      var n = e.inputType,
        o = zo(e),
        r = Ss(),
        i = r._inputState,
        s = Hi();
      if (
        "insertText" === n &&
        e.data &&
        i.isInsertTextAfterHandledSelectionCommand
      ) {
        if ((Ko(i), e.preventDefault(), yi(s) && !s.isCollapsed())) {
          var _t68 = s.isBackward() ? s.anchor : s.focus;
          (s.anchor.set(_t68.key, _t68.offset, _t68.type),
            s.focus.set(_t68.key, _t68.offset, _t68.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === s) {
          var _t69 = Vi();
          if (!yi(_t69)) return !0;
          yc(_t69.clone());
        }
        if (yi(s)) {
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
              (lc(null),
              (i.lastKeyDownTimeStamp = 0),
              setTimeout(function () {
                Rs(r, function () {
                  lc(null);
                });
              }, 30),
              yi(s))
            ) {
              var _e61 = s.anchor.getNode();
              (_e61.markDirty(), oi(_e61) || t(142), Ro(s, _e61));
            }
          } else {
            if (
              (lc(null),
              g &&
                null !== o &&
                !o.collapsed &&
                (s.applyDOMRange(o), !s.isCollapsed()))
            )
              return (e.preventDefault(), s.removeText(), !0);
            e.preventDefault();
            var _t70 = s.anchor.getNode(),
              _l8 = _t70.getTextContent(),
              _c7 = _t70.canInsertTextAfter(),
              _a5 = 0 === s.anchor.offset && s.focus.offset === _l8.length;
            var _u4 = y && _n44 && !_a5 && _c7;
            if (
              (_u4 && s.isCollapsed() && (_u4 = !Js(Rc(s.anchor, !0))), !_u4)
            ) {
              $c(r, On, !0);
              var _t71 = Hi();
              y &&
                yi(_t71) &&
                _t71.isCollapsed() &&
                ((i.postDeleteSelectionToRestore = _t71),
                setTimeout(function () {
                  return (i.postDeleteSelectionToRestore = null);
                }));
            }
          }
          return !0;
        }
      }
      if (!yi(s))
        return (
          ("historyUndo" !== n && "historyRedo" !== n) ||
            (e.preventDefault(), $c(r, "historyUndo" === n ? Ln : $n)),
          !0
        );
      var l = e.data;
      (null !== i.unprocessedBeforeInputData &&
        bc(!1, r, i.unprocessedBeforeInputData),
        (s.dirty && null === i.unprocessedBeforeInputData) ||
          !s.isCollapsed() ||
          Gs(s.anchor.getNode()) ||
          null === o ||
          s.applyDOMRange(o),
        (i.unprocessedBeforeInputData = null));
      var c = s.anchor,
        a = s.focus,
        u = c.getNode(),
        f = a.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === l) (e.preventDefault(), $c(r, En, !1));
        else if (l === N) (e.preventDefault(), $c(r, Mn));
        else if (null == l && e.dataTransfer) {
          var _t72 = e.dataTransfer.getData("text/plain");
          (e.preventDefault(), s.insertRawText(_t72));
        } else
          null != l && Do(s, o, l, e.timeStamp, !0)
            ? (e.preventDefault(), $c(r, An, l), Bo(l))
            : (i.unprocessedBeforeInputData = l);
        return ((i.lastBeforeInputInsertTextTimeStamp = e.timeStamp), !0);
      }
      switch ((e.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          $c(r, An, e);
          Bo(
            (_ref29 = e.dataTransfer
              ? e.dataTransfer.getData("text/plain")
              : null) != null
              ? _ref29
              : e.data,
          );
          break;
        case "insertFromComposition": {
          var _t73 = i.hadOrphanedCompositionEvents;
          i.hadOrphanedCompositionEvents = !1;
          var _n45 = r._compositionKey;
          (lc(null), _t73 || $c(r, An, e), qo(_n45));
          break;
        }
        case "insertLineBreak":
          (lc(null), $c(r, En, !1));
          break;
        case "insertParagraph":
          (lc(null),
            i.isInsertLineBreak && !g
              ? ((i.isInsertLineBreak = !1), $c(r, En, !1))
              : $c(r, Mn));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          $c(r, wn, e);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || js(t) || js(e) || !Xl(t) || !Xl(e);
          })(u, f) && $c(r, Dn, e);
          break;
        case "deleteByDrag":
          (Wc(vr), $c(r, Dn, e));
          break;
        case "deleteByCut":
          $c(r, Dn, e);
          break;
        case "deleteContent":
          $c(r, On, !1);
          break;
        case "deleteWordBackward":
          $c(r, Fn, !0);
          break;
        case "deleteWordForward":
          $c(r, Fn, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          $c(r, In, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          $c(r, In, !1);
          break;
        case "formatStrikeThrough":
          $c(r, Pn, "strikethrough");
          break;
        case "formatBold":
          $c(r, Pn, "bold");
          break;
        case "formatItalic":
          $c(r, Pn, "italic");
          break;
        case "formatUnderline":
          $c(r, Pn, "underline");
          break;
        case "historyUndo":
          $c(r, Ln);
          break;
        case "historyRedo":
          $c(r, $n);
      }
      return !0;
    }
    function Ho(t, e) {
      t.stopPropagation();
      var n = e._inputState;
      (Ko(n),
        Rs(
          e,
          function () {
            Uo(t, e) || e.dispatchCommand(Nn, t);
          },
          { event: t },
        ),
        (n.unprocessedBeforeInputData = null));
    }
    function Vo(t) {
      var e = Ss(),
        n = e._inputState,
        o = Hi(),
        r = t.data,
        i = zo(t);
      var s = !1;
      if (null != r && yi(o)) {
        var _l9 = oa(Vc(e)),
          _c8 = null !== _l9 ? ha(_l9, e._rootElement) : null,
          _a6 =
            "insertCompositionText" === t.inputType &&
            "ending-firefox" !== n.compositionPhase &&
            !e.isComposing();
        _a6 && (n.hadOrphanedCompositionEvents = !0);
        var _f6 = o.anchor.getNode(),
          _h5 =
            "insertCompositionText" === t.inputType &&
            "ending-firefox" !== n.compositionPhase &&
            e.isComposing() &&
            oi(_f6) &&
            Ql(_f6);
        if (!_a6 && !_h5 && Do(o, i, r, t.timeStamp, !1, _c8)) {
          if (((s = !0), "ending-firefox" === n.compositionPhase)) {
            var _t74 = Xo(e, r);
            if (((n.compositionPhase = "idle"), _t74))
              return (Wc(br), xc(), !0);
          }
          var _i20 = o.anchor.getNode();
          if (null === _l9 || null === _c8) return !0;
          var _a7 = o.isBackward(),
            _f7 = _a7 ? o.anchor.offset : o.focus.offset,
            _h6 = _a7 ? o.focus.offset : o.anchor.offset;
          (d &&
            !o.isCollapsed() &&
            oi(_i20) &&
            null !== _c8.anchorNode &&
            _i20.getTextContent().slice(0, _f7) +
              r +
              _i20.getTextContent().slice(_f7 + _h6) ===
              Nc(_c8.anchorNode)) ||
            $c(e, An, r);
          var _g5 = r.length;
          (u &&
            _g5 > 1 &&
            "insertCompositionText" === t.inputType &&
            !e.isComposing() &&
            ((o.anchor.offset -= _g5),
            (o._cachedNodes = null),
            (o._cachedIsBackward = null)),
            y && e.isComposing() && ((n.lastKeyDownTimeStamp = 0), lc(null)));
        }
      }
      if (!s) {
        (bc(!1, e, null !== r ? r : void 0),
          "ending-firefox" === n.compositionPhase &&
            (Xo(e, r || void 0), Wc(br), (n.compositionPhase = "idle")));
      }
      return (xc(), !0);
    }
    function Jo(t, e) {
      $c(e, bn, t);
    }
    function Yo(t) {
      var e = Ss(),
        n = e._inputState,
        o = Hi();
      if (yi(o) && !e.isComposing()) {
        ((n.compositionPhase = "composing"),
          (n.hadOrphanedCompositionEvents = !1));
        var _r26 = o.anchor,
          _i21 = o.anchor.getNode();
        if (
          (lc(_r26.key),
          Wc(Nr),
          t.timeStamp < n.lastKeyDownTimeStamp + 30 ||
            "element" === _r26.type ||
            !o.isCollapsed() ||
            (!y &&
              (_i21.getFormat() !== o.format ||
                (oi(_i21) && _i21.getStyle() !== o.style))) ||
            (oi(_i21) &&
              (Ql(_i21) ||
                (0 === _r26.offset && !_i21.canInsertTextBefore()) ||
                (_r26.offset === _i21.getTextContentSize() &&
                  !_i21.canInsertTextAfter()))))
        ) {
          $c(e, An, b);
          var _t75 = Hi();
          yi(_t75) && lc(_t75.anchor.key);
        }
      }
      return !0;
    }
    function Go(t) {
      var e = Ss();
      return (
        (e._inputState.compositionPhase = "idle"),
        Xo(e, t.data),
        Wc(br),
        !0
      );
    }
    function qo(t) {
      if (null === t) return;
      var e = ac(t);
      if (!oi(e) || "text" === e.getType() || Ql(e) || !e.isAttached()) return;
      var n = Hi(),
        o = yi(n) && n.anchor.key === t ? n.anchor.offset : null,
        r = ni(e.getTextContent());
      if (
        (r.setFormat(e.getFormat()),
        r.setStyle(e.getStyle()),
        e.replace(r),
        null !== o)
      ) {
        var _t76 = Math.min(o, r.getTextContentSize());
        r.select(_t76, _t76);
      }
    }
    function Xo(t, e) {
      var n = t._compositionKey;
      if ((lc(null), null !== n && null != e)) {
        if ("" === e) {
          var _e62 = ac(n),
            _o28 = t.getElementByKey(n),
            _r27 = null !== _o28 && oi(_e62) ? Da(_e62, _o28, t) : null;
          if (null !== _r27 && null !== _r27.nodeValue && oi(_e62)) {
            var _n46 = oa(Vc(t)),
              _o29 = _n46 && ha(_n46, t._rootElement);
            var _i22 = null,
              _s13 = null;
            (null !== _o29 &&
              _o29.anchorNode === _r27 &&
              ((_i22 = _o29.anchorOffset), (_s13 = _o29.focusOffset)),
              kc(_e62, _r27.nodeValue, _i22, _s13, !0));
          }
          return (qo(n), !1);
        }
        if ("\n" === e[e.length - 1]) {
          var _e63 = Hi();
          if (yi(_e63) || Ci(_e63)) {
            if (yi(_e63)) {
              var _t77 = _e63.focus;
              _e63.anchor.set(_t77.key, _t77.offset, _t77.type);
            }
            return ($c(t, Vn, null), qo(n), !1);
          }
        }
        var _o30 = ac(n);
        if (null !== _o30 && oi(_o30) && Ql(_o30)) {
          _o30.markDirty();
          var _t78 = Hi(),
            _r28 = _o30.getTextContentSize(),
            _i23 =
              yi(_t78) && _t78.anchor.key === n ? _t78.anchor.offset : _r28;
          return (_o30.select(_i23, _i23).insertText(e), !0);
        }
      }
      return (bc(!0, t, e), qo(n), !1);
    }
    function Qo(t, e) {
      var n = e._inputState;
      u
        ? (n.compositionPhase = "ending-firefox")
        : g || (!p && !x)
          ? $c(e, kn, t)
          : ((n.compositionPhase = "ending-safari"),
            (n.compositionEndData = t.data));
    }
    function Zo(t, e) {
      var n = e._inputState;
      ((n.lastKeyDownTimeStamp = t.timeStamp),
        (n.lastKeyCode = t.key),
        "Backspace" !== t.key && Ko(n),
        e.isComposing() || $c(e, zn, t));
    }
    var tr = { altKey: "any", ctrlKey: "any", metaKey: "any", shiftKey: "any" },
      er = { ctrlKey: !0 },
      nr = { metaKey: !0 },
      or = { shiftKey: "any" },
      rr = { altKey: "any", shiftKey: "any" };
    function ir(t) {
      var e = Ss(),
        n = e._inputState;
      if (null == t.key) return !0;
      if ("ending-safari" === n.compositionPhase) {
        var _o31 = (function (t) {
          return "Backspace" === t.key;
        })(t);
        if (
          (_o31 &&
            Rs(e, function () {
              Xo(e, n.compositionEndData);
            }),
          (n.compositionPhase = "idle"),
          (n.compositionEndData = ""),
          _o31)
        )
          return !0;
      }
      var o = e._keyDownShortcuts;
      null === o &&
        ((o = vo(
          (function () {
            var t = function t(_t79, e, n) {
                return {
                  key: _t79,
                  modifiers: e,
                  onMatch: function onMatch(t, e) {
                    $c(e, n, t);
                  },
                };
              },
              e = function e(t, _e64, n, o) {
                return {
                  key: t,
                  modifiers: _e64,
                  onMatch: function onMatch(t, e) {
                    (t.preventDefault(), $c(e, n, o));
                  },
                };
              },
              n = function n(t, e) {
                return {
                  key: "Enter",
                  modifiers: t,
                  onMatch: function onMatch(t, n) {
                    ((n._inputState.isInsertLineBreak = e), $c(n, Vn, t));
                  },
                };
              },
              o = function o(t, e) {
                return {
                  key: t,
                  modifiers: yo,
                  onMatch: function onMatch(t, n) {
                    var o = n._editorState._selection;
                    null === o || yi(o) || (t.preventDefault(), $c(n, e, t));
                  },
                };
              };
            return [
              t("ArrowRight", or, Bn),
              t("ArrowLeft", or, Wn),
              t("ArrowUp", rr, jn),
              t("ArrowDown", rr, Hn),
              n(babelHelpers["extends"]({}, tr, { shiftKey: !0 }), !0),
              n(babelHelpers["extends"]({}, tr, { shiftKey: !1 }), !1),
              t(" ", tr, Jn),
              {
                key: "Backspace",
                modifiers: or,
                onMatch: function onMatch(t, e) {
                  $c(e, Yn, t) && Wo(e._inputState);
                },
              },
              t("Escape", tr, Gn),
              t("Delete", {}, qn),
              e("Backspace", xo, Fn, !0),
              e("Delete", xo, Fn, !1),
              e("b", yo, Pn, "bold"),
              e("u", yo, Pn, "underline"),
              e("i", yo, Pn, "italic"),
              t("Tab", or, Xn),
              e("z", yo, Ln, void 0),
              e(
                "z",
                babelHelpers["extends"]({}, yo, { shiftKey: !0 }),
                $n,
                void 0,
              ),
            ].concat(
              Array.from(
                a
                  ? [
                      {
                        key: "o",
                        modifiers: er,
                        onMatch: function onMatch(t, e) {
                          (t.preventDefault(),
                            (e._inputState.isInsertLineBreak = !0),
                            $c(e, En, !0));
                        },
                      },
                      t(
                        "ArrowLeft",
                        babelHelpers["extends"]({ metaKey: !0 }, or),
                        Un,
                      ),
                      t(
                        "ArrowRight",
                        babelHelpers["extends"]({ metaKey: !0 }, or),
                        Kn,
                      ),
                      e("h", er, On, !0),
                      e("d", er, On, !1),
                      e("Backspace", nr, In, !0),
                      e("Delete", nr, In, !1),
                      e("k", er, In, !1),
                    ]
                  : [
                      t("Home", or, Un),
                      t("End", or, Kn),
                      e("y", er, $n, void 0),
                    ],
              ),
              [
                {
                  key: "a",
                  modifiers: yo,
                  onMatch: function onMatch(t, e) {
                    (t.preventDefault(), $c(e, co, t) && Wo(e._inputState));
                  },
                },
                o("c", so),
                o("x", lo),
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
        })(t) && e.dispatchCommand(po, t),
        !0
      );
    }
    function sr(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    var lr = new Map();
    function cr(t) {
      var e = ra(t.target);
      if (null === e) return;
      var n = Kc(t.target);
      var o = null,
        r = null;
      var i = null !== n ? Ao.get(n) : void 0;
      if (null !== n) {
        if (void 0 !== i) {
          var _t80 = i.editors;
          var _n47 = i.hasShadowEditor;
          if (void 0 === _n47) {
            _n47 = !1;
            for (var _e65 of _t80)
              if (
                null !== _e65._rootElement &&
                ia(_e65._rootElement.getRootNode())
              ) {
                _n47 = !0;
                break;
              }
            i.hasShadowEditor = _n47;
          }
          if (_n47) {
            var _n48 = null,
              _i24 = null;
            for (var _s14 of _t80) {
              var _t81 = _s14._rootElement;
              if (null === _t81) continue;
              var _l0 = ha(e, _t81).anchorNode;
              if (null !== _l0 && Gl(_l0) === _s14) {
                if (ia(_t81.getRootNode())) {
                  ((o = _s14), (r = _l0));
                  break;
                }
                null === _n48 && ((_n48 = _s14), (_i24 = _l0));
              }
            }
            null === o && null !== _n48 && ((o = _n48), (r = _i24));
          } else {
            var _t82 = e.anchorNode;
            null === _t82 ||
              (Ca(_t82) && null !== _t82.shadowRoot) ||
              ((o = Gl(_t82)), null !== o && (r = _t82));
          }
        }
        if (null === o) {
          var _t83 = ya(n);
          o = null !== _t83 ? Gl(_t83) : null;
        }
      }
      if (null === o) return;
      if (o._inputState.isSelectionChangeFromMouseDown) {
        if (void 0 !== i)
          for (var _t84 of i.editors)
            _t84._inputState.isSelectionChangeFromMouseDown = !1;
        Rs(o, function () {
          var n = Vi(),
            i = r != null ? r : ha(e, o._rootElement).anchorNode;
          if (Ca(i) || Zl(i)) {
            yc(ji(n, e, o, t));
          }
        });
      }
      var s = Tc(o),
        l = s[s.length - 1],
        c = l._key,
        a = lr.get(c),
        u = a || l;
      (u !== o && Io(e, u, !1),
        Io(e, o, !0),
        o !== l ? lr.set(c, o) : a && lr["delete"](c));
    }
    function ar(t) {
      t._lexicalHandled = !0;
    }
    function ur(t) {
      return !0 === t._lexicalHandled;
    }
    var fr = yn();
    function dr(e) {
      var n = Mo.get(e);
      if (void 0 === n) return void fr();
      var o = Ao.get(n);
      if (void 0 === o) return void fr();
      Mo["delete"](e);
      var r = ql(e);
      Yl(r)
        ? (!(function (t) {
            if (null !== t._parentEditor) {
              var _e66 = Tc(t),
                _n49 = _e66[_e66.length - 1]._key;
              lr.get(_n49) === t && lr["delete"](_n49);
            } else lr["delete"](t._key);
          })(r),
          o.editors["delete"](r),
          (o.hasShadowEditor = void 0),
          (e.__lexicalEditor = null))
        : r && t(198);
      var i = sr(e);
      for (var _t85 = 0; _t85 < i.length; _t85++) i[_t85]();
      e.__lexicalEventHandles = [];
    }
    function hr(e, n, o) {
      ys();
      var r = e.__key,
        i = e.getParent();
      if (null === i) return void (null !== vu(e) && t(367, r, String(vu(e))));
      var s = (function (t) {
        var e = Hi();
        if (!yi(e) || !js(t)) return e;
        var n = e.anchor,
          o = e.focus,
          r = n.getNode(),
          i = o.getNode();
        jc(r, t) && n.set(t.__key, 0, "element");
        jc(i, t) && o.set(t.__key, 0, "element");
        return e;
      })(e);
      var l = !1;
      if (yi(s) && n) {
        var _t86 = s.anchor,
          _n50 = s.focus;
        (_t86.key === r &&
          (qi(_t86, e, i, e.getPreviousSibling(), e.getNextSibling()),
          (l = !0)),
          _n50.key === r &&
            (qi(_n50, e, i, e.getPreviousSibling(), e.getNextSibling()),
            (l = !0)));
      } else Ci(s) && n && e.isSelected() && e.selectPrevious();
      if (yi(s) && n && !l && Ji(s, i)) {
        var _t87 = e.getIndexWithinParent();
        (rc(e), Yi(s, i, _t87, -1));
      } else rc(e);
      (o || qc(i) || i.canBeEmpty() || !i.isEmpty() || hr(i, n),
        n && s && Gs(i) && i.isEmpty() && i.selectEnd());
    }
    var gr = Symbol["for"]("ephemeral");
    function _r(t) {
      return t[gr] || !1;
    }
    var pr = { configurable: !0, enumerable: !1, value: void 0, writable: !0 };
    var _mr5 = (function () {
      function mr(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", pr),
          Object.defineProperty(this, ye, pr),
          oc(this, t));
      }
      mr.getType = function getType() {
        var _uu = uu(this),
          e = _uu.ownNodeType;
        return (void 0 === e && t(64, this.name), e);
      };
      mr.clone = function clone(e) {
        t(65, this.name);
      };
      var _proto7 = mr.prototype;
      _proto7.$config = function $config() {
        return {};
      };
      _proto7.config = function config(t, e) {
        var _ref30;
        var n = e["extends"] || xu(this.constructor);
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
          var _e67 = ac(t);
          if (null === _e67) break;
          t = null !== _e67.__parent ? _e67.__parent : vu(_e67);
        }
        return !1;
      };
      _proto7.isSelected = function isSelected(t) {
        var _this13 = this;
        var e = t || Hi();
        if (null == e) return !1;
        var n = e.getNodes().some(function (t) {
          return t.__key === _this13.__key;
        });
        if (oi(this)) return n;
        if (
          yi(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t88 = this.getParent();
          if (Js(this) && this.isInline() && _t88) {
            var _n51 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t88.is(_n51.getNode()) &&
              _n51.offset === _t88.getChildrenSize() &&
              this.is(_t88.getLastChild())
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
        return null === t ? null : ac(t);
      };
      _proto7.getParentOrThrow = function getParentOrThrow() {
        var e = this.getParent();
        return (null === e && t(66, this.__key), e);
      };
      _proto7.getTopLevelElement = function getTopLevelElement() {
        var e = this;
        for (; null !== e; ) {
          var _n52 = e.getParent();
          if (qc(_n52) || null !== vu(e))
            return (js(e) || (e === this && Js(e)) || t(194), e);
          e = _n52;
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
        return null === t ? null : ac(t);
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
        return null === t ? null : ac(t);
      };
      _proto7.getNextSiblings = function getNextSiblings() {
        var t = [];
        var e = this.getNextSibling();
        for (; null !== e; ) (t.push(e), (e = e.getNextSibling()));
        return t;
      };
      _proto7.getCommonAncestor = function getCommonAncestor(t) {
        var e = js(this) ? this : this.getParent(),
          n = js(t) ? t : t.getParent(),
          o = e && n ? Sf(e, n) : null;
        return o ? o.commonAncestor : null;
      };
      _proto7.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto7.isBefore = function isBefore(e) {
        var n = Sf(this, e);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === yf(n)
              : ("same" !== n.type && "ancestor" !== n.type && t(279), !1)))
        );
      };
      _proto7.isParentOf = function isParentOf(t) {
        return jc(t, this);
      };
      _proto7.getNodesBetween = function getNodesBetween(e) {
        var n = this.isBefore(e),
          o = [],
          r = new Set();
        var i = this;
        for (; null !== i; ) {
          var _s15 = i.__key;
          if ((r.has(_s15) || (r.add(_s15), o.push(i)), i === e)) break;
          var _l1 = js(i) ? (n ? i.getFirstChild() : i.getLastChild()) : null;
          if (null !== _l1) {
            i = _l1;
            continue;
          }
          var _c9 = n ? i.getNextSibling() : i.getPreviousSibling();
          if (null !== _c9) {
            i = _c9;
            continue;
          }
          var _a8 = i.getParentOrThrow();
          if ((r.has(_a8.__key) || o.push(_a8), _a8 === e)) break;
          var _u5 = null,
            _f8 = _a8;
          do {
            if (
              (null === _f8 && t(68),
              (_u5 = n ? _f8.getNextSibling() : _f8.getPreviousSibling()),
              (_f8 = _f8.getParent()),
              null === _f8)
            )
              break;
            null !== _u5 || r.has(_f8.__key) || o.push(_f8);
          } while (null === _u5);
          i = _u5;
        }
        return (n || o.reverse(), o);
      };
      _proto7.isDirty = function isDirty() {
        var t = Ss()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto7.getLatest = function getLatest() {
        if (_r(this)) return this;
        var e = ac(this.__key);
        return (null === e && t(113), e);
      };
      _proto7.getWritable = function getWritable() {
        if (_r(this)) return this;
        ys();
        var t = Cs(),
          e = Ss(),
          n = t._nodeMap,
          o = this.__key,
          r = this.getLatest(),
          i = e._cloneNotNeeded,
          s = Hi();
        if ((null !== s && s.setCachedNodes(null), i.has(o))) return (sc(r), r);
        var l = Ra(r);
        return (i.add(o), sc(l), n.set(o, l), l);
      };
      _proto7.getTextContent = function getTextContent() {
        return Ru(this);
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
        return new _V2(t);
      };
      _proto7.exportDOM = function exportDOM(t) {
        return { element: this.createDOM(t._config, t) };
      };
      _proto7.exportJSON = function exportJSON(t) {
        if (t === void 0) {
          t = !1;
        }
        var e = (function (t, e) {
            var n = Ja(Va(t.constructor)),
              o = n.generated,
              r = n.isCompactDefault,
              i = null === o ? void 0 : e ? o.exportCompactJSON : o.exportJSON;
            return void 0 === i
              ? (function (t, e, n) {
                  var o = n ? { type: t.__type } : {};
                  js(t) && (o.children = []);
                  ((function (t, e, n, o) {
                    for (var _r29 = 0; _r29 < e.length; _r29++) {
                      var _i25 = e[_r29];
                      if (o && _i25.derived) continue;
                      var _s16 = void 0;
                      if ("ownField" === _i25.kind) {
                        var _e68 = iu(t)[_i25.field];
                        _s16 =
                          void 0 === _i25.getterTable
                            ? _e68
                            : zt(_i25.getterTable, _e68)
                              ? _i25.getterTable[_e68]
                              : void 0;
                      } else _s16 = _i25.getter.call(t);
                      ("ownField" === _i25.kind &&
                        void 0 !== _i25.when &&
                        ((!su(_i25, _s16) && _i25.when.call(t)) ||
                          (_s16 = void 0)),
                        (o && su(_i25, _s16)) || (n[_i25.key] = _s16));
                    }
                  })(t, e, o, n),
                    n || ((o.type = t.__type), (o.version = 1)));
                  return o;
                })(t, n.getters, e)
              : e
                ? i(t, r)
                : i(t);
          })(this, t),
          n = this.__state ? this.__state.toJSON() : void 0;
        return (void 0 !== n && Object.assign(e, n), e);
      };
      mr.importJSON = function importJSON(e) {
        t(18, this.name);
      };
      _proto7.updateFromJSON = function updateFromJSON(t) {
        return au(le(this, t), t);
      };
      mr.transform = function transform() {
        return null;
      };
      _proto7.remove = function remove(t) {
        hr(this, !0, t);
      };
      _proto7.replace = function replace(e, n) {
        ys();
        var o = Hi();
        (null !== o && (o = o.clone()), Zc(this, e));
        var r = this.getLatest(),
          i = this.__key,
          s = Nu(r);
        null !== s && t(400, i, r.getType(), s.getKey(), s.getType());
        var l = e.__key,
          c = e.getWritable(),
          a = this.getParentOrThrow().getWritable(),
          u = a.__size,
          f = c.getParent(),
          d = null !== f && yi(o) && Ji(o, f),
          h = d ? c.getIndexWithinParent() : -1;
        (rc(c), d && null !== f && yi(o) && Yi(o, f, h, -1));
        var g = r.getPreviousSibling(),
          _ = r.getNextSibling(),
          p = r.__prev,
          m = r.__next,
          y = r.__parent;
        if ((hr(r, !1, !0), null === g)) a.__first = l;
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
            ((js(this) && js(c)) || t(139),
            (x = c.getChildrenSize()),
            c.splice(x, 0, this.getChildren())),
          yi(o))
        ) {
          yc(o);
          var _t89 = o.anchor,
            _e69 = o.focus;
          (_t89.key === i &&
            (n && "element" === _t89.type
              ? _t89.set(c.__key, x + _t89.offset, "element")
              : di(_t89, c)),
            _e69.key === i &&
              (n && "element" === _e69.type
                ? _e69.set(c.__key, x + _e69.offset, "element")
                : di(_e69, c)));
        }
        return (cc() === i && lc(l), c);
      };
      _proto7.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (ys(), Zc(this, t));
        var n = this.getWritable(),
          o = t.getWritable();
        Bu(this.getParentOrThrow());
        var r = o.getParent(),
          i = Hi();
        var s = !1,
          l = !1,
          c = -1;
        if (null !== r && e && yi(i) && Ji(i, r)) {
          var _e70 = r.__key,
            _n53 = i.anchor,
            _o32 = i.focus;
          ((c = t.getIndexWithinParent()),
            (s =
              "element" === _n53.type &&
              _n53.key === _e70 &&
              _n53.offset === c + 1),
            (l =
              "element" === _o32.type &&
              _o32.key === _e70 &&
              _o32.offset === c + 1));
        }
        (rc(o), -1 !== c && null !== r && yi(i) && Yi(i, r, c, -1));
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
          e && yi(i))
        ) {
          var _t90 = u.__key;
          if (s || l || Ji(i, u)) {
            var _e71 = this.getIndexWithinParent();
            (Yi(i, u, _e71 + 1),
              s && i.anchor.set(_t90, _e71 + 2, "element"),
              l && i.focus.set(_t90, _e71 + 2, "element"));
          }
        }
        return t;
      };
      _proto7.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (ys(), Zc(this, t));
        var n = this.getWritable(),
          o = t.getWritable();
        Bu(this.getParentOrThrow());
        var r = o.__key,
          i = Hi(),
          s = o.getParent(),
          l = null !== s && e && yi(i) && Ji(i, s),
          c = l ? o.getIndexWithinParent() : -1;
        (rc(o), l && null !== s && yi(i) && Yi(i, s, c, -1));
        var a = this.getPreviousSibling(),
          u = this.getParentOrThrow().getWritable(),
          f = n.__prev,
          d = e && yi(i) && Ji(i, u),
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
          d && yi(i) && Yi(i, u, h),
          t
        );
      };
      _proto7.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto7.createParentElementNode = function createParentElementNode() {
        return El();
      };
      _proto7.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto7.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto7.selectPrevious = function selectPrevious(t, e) {
        ys();
        var n = Nu(this);
        if (null !== n) return n.selectPrevious(t, e);
        var o = this.getPreviousSibling(),
          r = this.getParentOrThrow();
        if (null === o) return r.select(0, 0);
        if (js(o)) return o.select();
        if (!oi(o)) {
          var _t91 = o.getIndexWithinParent() + 1;
          return r.select(_t91, _t91);
        }
        return o.select(t, e);
      };
      _proto7.selectNext = function selectNext(t, e) {
        ys();
        var n = Nu(this);
        if (null !== n) return n.selectNext(t, e);
        var o = this.getNextSibling(),
          r = this.getParentOrThrow();
        if (null === o) return r.select();
        if (js(o)) return o.select(0, 0);
        if (!oi(o)) {
          var _t92 = o.getIndexWithinParent();
          return r.select(_t92, _t92);
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
      return mr;
    })();
    function yr(t) {
      return t instanceof _mr5;
    }
    var xr = "history-merge",
      Cr = "collaboration",
      Sr = "skip-scroll-into-view",
      Tr = "skip-dom-selection",
      vr = "skip-selection-focus",
      Nr = "composition-start",
      br = "composition-end",
      kr = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
    function Or(t, e) {
      if ("number" == typeof t) return Number.isFinite(t) ? t : e;
      if ("string" != typeof t || !kr.test(t)) return e;
      var n = Number(t);
      return Number.isFinite(n) ? n : e;
    }
    function Er(t, e, n, o, r) {
      var i = Or(t, e);
      return i >= n && i <= o && Number.isInteger(i) ? i : e;
    }
    var Mr = function Mr(t) {
      var e = Ct(t, "format"),
        n = St(t, "format"),
        o = vt(t, "format");
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
            (t.__indent = Er(e.indent, 0, 0, Infinity)),
            (t.__textFormat = Or(e.textFormat, 0)));
          var s = e.textStyle;
          return ((t.__textStyle = "string" == typeof s ? s : ""), t);
        },
      };
    };
    function Ar(t, e) {
      ((t.__detail = e.__detail),
        (t.__format = e.__format),
        (t.__mode = e.__mode),
        (t.__style = e.__style),
        (t.__text = e.__text));
    }
    var wr = function wr(t) {
        var e = Ct(t, "mode"),
          n = Tt(t, "detail", 0),
          o = Tt(t, "format", 0),
          r = St(t, "mode"),
          i = vt(t, "mode");
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
            t.__detail = "string" == typeof s && s in n ? n[s] : Or(s, 0);
            var l = e.format;
            t.__format = "string" == typeof l && l in o ? o[l] : Or(l, 0);
            var c = e.mode;
            t.__mode = "string" == typeof c && c in r ? r[c] : i;
            var a = e.style;
            t.__style = "string" == typeof a ? a : "";
            var u = e.text;
            return ((t.__text = "string" == typeof u ? u : ""), t);
          },
          afterCloneFrom: Ar,
        };
      },
      Dr = function Dr(t) {
        var e = Ct(t, "format"),
          n = St(t, "format"),
          o = vt(t, "format");
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
              (t.__indent = Er(e.indent, 0, 0, Infinity)),
              (t.__textFormat = Or(e.textFormat, 0)));
            var s = e.textStyle;
            return ((t.__textStyle = "string" == typeof s ? s : ""), t);
          },
        };
      },
      Fr = function Fr() {
        return {
          exportJSON: function exportJSON(t) {
            return { type: t.__type, version: 1 };
          },
          exportCompactJSON: function exportCompactJSON(t) {
            return { type: t.__type };
          },
        };
      },
      Ir = function Ir(t) {
        var e = Ct(t, "mode"),
          n = Tt(t, "format", 0);
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
            t.__format = "string" == typeof o && o in n ? n[o] : Or(o, 0);
            var r = e.style;
            return ((t.__style = "string" == typeof r ? r : ""), t);
          },
        };
      },
      Pr = "!important";
    function Rr(t) {
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
        var _a9 = t[_f9];
        if (i) "*" === _a9 && "/" === t[_f9 + 1] && ((i = !1), _f9++);
        else if (s) (-1 === u && (u = _f9), (s = !1));
        else if (null === r) {
          if ("/" !== _a9 || "*" !== t[_f9 + 1]) {
            if ('"' !== _a9 && "'" !== _a9) {
              if ("(" !== _a9) {
                if (")" !== _a9) {
                  if (l || ":" !== _a9 || 0 !== c) {
                    if (";" === _a9 && 0 === c) {
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
            } else (-1 === u && (u = _f9), (r = _a9));
          } else
            (-1 !== u &&
              (l ? (o += t.slice(u, _f9)) : (n += t.slice(u, _f9)), (u = -1)),
              (i = !0),
              _f9++);
        } else
          (-1 === u && (u = _f9),
            "\\" === _a9 ? (s = !0) : _a9 === r && (r = null));
      }
      -1 !== u && (l ? (o += t.slice(u, a)) : (n += t.slice(u, a)));
      var f = n.trim(),
        d = o.trim();
      return ("" !== f && "" !== d && (e[f] = d), e);
    }
    function Lr(t, e, n) {
      var o = n.trimEnd(),
        r = o.length - 10;
      r >= 0 && o.slice(r).toLowerCase() === Pr
        ? t.setProperty(e, o.slice(0, r).trim(), "important")
        : t.setProperty(e, n, "");
    }
    function $r(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var o = Rr(n),
        r = Rr(e);
      for (var _e72 in r) (delete o[_e72], Lr(t, _e72, r[_e72]));
      for (var _e73 in o) t.removeProperty(_e73);
    }
    var zr = Jt()({
      detail: Gt(Yt(jt(), D), { field: "__detail" }),
      format: Gt(Yt(jt(), w), { field: "__format" }),
      mode: Gt(Ht(["normal", "token", "segmented"]), {
        field: "__mode",
        getterTable: L,
        setterTable: R,
      }),
      style: Gt(Wt(), { field: "__style" }),
      text: Gt(Wt(), {
        field: "__text",
        getter: "getTextContent",
        setter: "setTextContent",
      }),
    });
    function Br(t, e) {
      return 16 & e
        ? "code"
        : e & C
          ? "mark"
          : 32 & e
            ? "sub"
            : 64 & e
              ? "sup"
              : null;
    }
    function Kr(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function Wr(t, e, n, o, r) {
      var i = o.classList;
      var s = Fc(r, "base");
      (void 0 !== s && i.add.apply(i, Array.from(s)),
        (s = Fc(r, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== s &&
        (8 & n && 4 & n
          ? ((l = !0), c || i.add.apply(i, Array.from(s)))
          : c && i.remove.apply(i, Array.from(s)));
      for (var _t93 in w) {
        var _o33 = w[_t93];
        if (((s = Fc(r, _t93)), void 0 !== s))
          if (n & _o33) {
            if (l && ("underline" === _t93 || "strikethrough" === _t93)) {
              e & _o33 && i.remove.apply(i, Array.from(s));
              continue;
            }
            (0 === (e & _o33) ||
              (c && "underline" === _t93) ||
              "strikethrough" === _t93) &&
              i.add.apply(i, Array.from(s));
          } else e & _o33 && i.remove.apply(i, Array.from(s));
      }
      Dc(o, "class");
    }
    function Ur(t, e, n) {
      var o = n.isComposing(),
        r = t + (o ? v : ""),
        i = Ea(),
        s = Ma(i).$getDOMSlot(n, e, i),
        l = s.getFirstChild();
      if (null === l || l.nodeType !== Node.TEXT_NODE)
        return void s.insertChild(ua().createTextNode(r));
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
            _t94 = _ref31[0],
            _e74 = _ref31[1],
            _n54 = _ref31[2];
          (0 !== _e74 && c.deleteData(_t94, _e74), c.insertData(_t94, _n54));
        } else c.nodeValue = r;
    }
    function jr(t, e, n, o, r, i) {
      Ur(r, t, e);
      var s = i.theme.text;
      void 0 !== s && Wr(0, 0, o, t, s);
    }
    function Hr(t, e) {
      var n = ua().createElement(e);
      return (n.appendChild(t), n);
    }
    function Vr(t) {
      return null != t && !0 === t.__isInlineFormattable;
    }
    var _Jr2 = (function (_mr) {
      function Jr(t, e) {
        var _this;
        if (t === void 0) {
          t = "";
        }
        ((_this = _mr.call(this, e) || this),
          (_this.__text = t),
          (_this.__format = 0),
          (_this.__style = ""),
          (_this.__mode = 0),
          (_this.__detail = 0));
        return _this;
      }
      babelHelpers.inheritsLoose(Jr, _mr);
      var _proto8 = Jr.prototype;
      _proto8.$config = function $config() {
        return this.config("text", {
          extends: _mr5,
          generated: wr,
          importDOM: {
            "#text": function text() {
              return { conversion: Qr, priority: 0 };
            },
            b: function b() {
              return { conversion: Gr, priority: 0 };
            },
            code: function code() {
              return { conversion: ei, priority: 0 };
            },
            em: function em() {
              return { conversion: ei, priority: 0 };
            },
            i: function i() {
              return { conversion: ei, priority: 0 };
            },
            mark: function mark() {
              return { conversion: ei, priority: 0 };
            },
            s: function s() {
              return { conversion: ei, priority: 0 };
            },
            span: function span() {
              return { conversion: Yr, priority: 0 };
            },
            strong: function strong() {
              return { conversion: ei, priority: 0 };
            },
            sub: function sub() {
              return { conversion: ei, priority: 0 };
            },
            sup: function sup() {
              return { conversion: ei, priority: 0 };
            },
            u: function u() {
              return { conversion: ei, priority: 0 };
            },
          },
          json: zr,
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
        return L[t.__mode];
      };
      _proto8.getStyle = function getStyle() {
        return this.getLatest().__style;
      };
      _proto8.isToken = function isToken() {
        return 1 === this.getLatest().__mode;
      };
      _proto8.isComposing = function isComposing() {
        return this.__key === cc();
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
        var e = w[t];
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
        return nc(this.getLatest().__format, t, e);
      };
      _proto8.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto8.isInline = function isInline() {
        return !0;
      };
      _proto8.createDOM = function createDOM(t, e) {
        var n = this.__format,
          o = Br(0, n),
          r = Kr(0, n),
          i = null === o ? r : o,
          s = ua().createElement(i);
        var l = s;
        (this.hasFormat("code") && s.setAttribute("spellcheck", "false"),
          null !== o && ((l = ua().createElement(r)), s.appendChild(l)));
        jr(l, this, 0, n, this.__text, t);
        var c = this.__style;
        return ("" !== c && $r(s.style, c), s);
      };
      _proto8.updateDOM = function updateDOM(e, n, o) {
        var r = this.__text,
          i = e.__format,
          s = this.__format,
          l = Br(0, i),
          c = Br(0, s),
          a = Kr(0, i),
          u = Kr(0, s);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _e75 = n.firstChild;
          null == _e75 && t(48);
          var _i27 = ua().createElement(u);
          return (jr(_i27, this, 0, s, r, o), n.replaceChild(_i27, _e75), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && t(49)),
          Ur(r, f, this));
        var d = o.theme.text;
        void 0 !== d && i !== s && Wr(0, i, s, f, d);
        var h = e.__style,
          g = this.__style;
        return (h !== g && ($r(n.style, g, h), Dc(n, "style")), !1);
      };
      _proto8.exportDOM = function exportDOM(e) {
        var _mr$prototype$exportD = _mr.prototype.exportDOM.call(this, e),
          n = _mr$prototype$exportD.element;
        return (
          Ca(n) || t(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = Hr(n, "b")),
          this.hasFormat("italic") && (n = Hr(n, "i")),
          this.hasFormat("strikethrough") && (n = Hr(n, "s")),
          this.hasFormat("underline") && (n = Hr(n, "u")),
          { element: n }
        );
      };
      _proto8.selectionTransform = function selectionTransform(t, e) {};
      _proto8.setFormat = function setFormat(t) {
        var e = this.getWritable();
        return ((e.__format = "string" == typeof t ? w[t] : t), e);
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
        var e = nc(this.getFormat(), t, null);
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
        var e = R[t];
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
        ys();
        var n = t,
          o = e;
        var r = Hi(),
          i = this.getTextContent(),
          s = this.__key;
        if ("string" == typeof i) {
          var _t95 = i.length;
          (void 0 === n && (n = _t95), void 0 === o && (o = _t95));
        } else ((n = 0), (o = 0));
        if (!yi(r)) return Ki(s, n, s, o, "text", "text");
        {
          var _t96 = cc();
          ((_t96 !== r.anchor.key && _t96 !== r.focus.key) || lc(s),
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
        var c = Hi();
        if (o && yi(c)) {
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
        ys();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var o = e.__key,
          r = cc(),
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
        var y = Hi();
        if (yi(y)) {
          var _ref32 = y.isBackward()
              ? [y.focus, y.anchor]
              : [y.anchor, y.focus],
            _t97 = _ref32[0],
            _e78 = _ref32[1];
          ("text" === _t97.type && _t97.key === o && (p = _t97),
            "text" === _e78.type && _e78.key === o && (m = _e78));
        }
        e.isSegmented()
          ? ((f = ni(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = de(e, f)),
            (_ = !0))
          : (f = e.setTextContent(a));
        var x = [f];
        for (var _t98 = 1; _t98 < c; _t98++) {
          var _n55 = ni(s[_t98]);
          ((_n55.__format = d),
            (_n55.__style = h),
            (_n55.__detail = g),
            (_n55.__state = de(e, _n55)));
          var _i28 = _n55.__key;
          (r === o && lc(_i28), x.push(_n55));
        }
        var C = p ? p.offset : null,
          S = m ? m.offset : null;
        var T = 0;
        for (var _t99 of x) {
          if (!p && !m) break;
          var _e79 = T + _t99.getTextContentSize();
          if (
            (null !== p &&
              null !== C &&
              C <= _e79 &&
              C >= T &&
              (p.set(_t99.getKey(), C - T, "text"), C < _e79 && (p = null)),
            null !== m && null !== S && S <= _e79 && S >= T)
          ) {
            m.set(_t99.getKey(), S - T, "text");
            break;
          }
          T = _e79;
        }
        if (null !== u) {
          !(function (t) {
            var e = t.getPreviousSibling(),
              n = t.getNextSibling();
            null !== e && sc(e);
            null !== n && sc(n);
          })(this);
          var _t100 = u.getWritable(),
            _e80 = this.getIndexWithinParent();
          (_
            ? (_t100.splice(_e80, 0, x), this.remove())
            : _t100.splice(_e80, 1, x),
            yi(y) && Yi(y, u, _e80, c - 1));
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
        cc() === r && lc(o);
        var l = Hi();
        if (yi(l)) {
          var _t101 = l.anchor,
            _i29 = l.focus;
          (null !== _t101 && _t101.key === r && Xi(_t101, n, o, e, s),
            null !== _i29 && _i29.key === r && Xi(_i29, n, o, e, s));
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
      return babelHelpers.createClass(Jr, [
        {
          key: "__isInlineFormattable",
          get: function get() {
            return !0;
          },
        },
      ]);
    })(_mr5);
    function Yr(t) {
      return { forChild: ri(t.style), node: null };
    }
    function Gr(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: ri(e.style, n ? void 0 : "bold"), node: null };
    }
    var qr = new WeakMap();
    function Xr(t) {
      if (!Ca(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function Qr(e) {
      var n = e;
      null === e.parentElement && t(129);
      var o = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var o = [t];
          for (; null !== n && void 0 === (e = qr.get(n)) && !Xr(n); )
            (o.push(n), (n = n.parentNode));
          var r = void 0 === e ? n : e;
          for (var _t102 = 0; _t102 < o.length; _t102++) qr.set(o[_t102], r);
          return r;
        })(n)
      )
        return { node: ns(o) };
      if (((o = o.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === o))
        return { node: null };
      if (" " === o[0]) {
        var _t103 = n,
          _e81 = !0;
        for (; null !== _t103 && null !== (_t103 = Zr(_t103, !1)); ) {
          var _n56 = _t103.textContent || "";
          if (_n56.length > 0) {
            (/[ \t\n]$/.test(_n56) && (o = o.slice(1)), (_e81 = !1));
            break;
          }
        }
        _e81 && (o = o.slice(1));
      }
      if (" " === o[o.length - 1]) {
        var _t104 = n,
          _e82 = !0;
        for (; null !== _t104 && null !== (_t104 = Zr(_t104, !0)); ) {
          if (
            (_t104.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e82 = !1;
            break;
          }
        }
        _e82 && (o = o.slice(0, o.length - 1));
      }
      return "" === o ? { node: null } : { node: ni(o) };
    }
    function Zr(t, e) {
      var n = t;
      for (;;) {
        var _t105 = void 0;
        for (; null === (_t105 = e ? n.nextSibling : n.previousSibling); ) {
          var _t106 = n.parentElement;
          if (null === _t106) return null;
          n = _t106;
        }
        if (((n = _t105), Ca(n))) {
          var _t107 = n.style.display;
          if (
            ("" === _t107 && !Na(n)) ||
            ("" !== _t107 && !_t107.startsWith("inline"))
          )
            return null;
        }
        var _o35 = n;
        for (; null !== (_o35 = e ? n.firstChild : n.lastChild); ) n = _o35;
        if (Zl(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var ti = {
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
    function ei(t) {
      var e = ti[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: ri(t.style, e), node: null };
    }
    function ni(t) {
      if (t === void 0) {
        t = "";
      }
      return Qc(new _Jr2(t));
    }
    function oi(t) {
      return t instanceof _Jr2;
    }
    function ri(t, e) {
      var n = t.fontWeight,
        o = t.textDecoration.split(" "),
        r = "700" === n || "bold" === n,
        i = o.includes("line-through"),
        s = "italic" === t.fontStyle,
        l = o.includes("underline"),
        c = t.verticalAlign,
        a = t.textTransform;
      return function (t) {
        return oi(t) || Vr(t)
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
    var ii = Jt()({
      detail: qt(jt(2), { getter: { field: "__detail" }, setter: null }),
      mode: qt(Ht(["normal"]), {
        getter: { field: "__mode", getterTable: { 0: "normal" } },
        setter: null,
      }),
      text: qt(Wt("\t"), {
        getter: { field: "__text", method: "getTextContent" },
        setter: null,
      }),
    });
    var _si = (function (_Jr) {
      function si(t) {
        var _this2;
        if (t === void 0) {
          t = void 0;
        }
        ((_this2 = _Jr.call(this, "\t", t) || this), (_this2.__detail = 2));
        return _this2;
      }
      babelHelpers.inheritsLoose(si, _Jr);
      var _proto9 = si.prototype;
      _proto9.$config = function $config() {
        return this.config("tab", { extends: _Jr2, generated: Ir, json: ii });
      };
      _proto9.createDOM = function createDOM(t) {
        var e = _Jr.prototype.createDOM.call(this, t),
          n = Fc(t.theme, "tab");
        if (void 0 !== n) {
          var _e$classList;
          (_e$classList = e.classList).add.apply(_e$classList, Array.from(n));
        }
        return e;
      };
      _proto9.setTextContent = function setTextContent(t) {
        return _Jr.prototype.setTextContent.call(this, "\t");
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
      return si;
    })(_Jr2);
    function li() {
      return Qc(new _si());
    }
    function ci(t) {
      return t instanceof _si;
    }
    var _ai = (function () {
      function ai(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto0 = ai.prototype;
      _proto0.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto0.isBefore = function isBefore(t) {
        if (this.key === t.key) return this.offset < t.offset;
        return mf(ml(cl(this, "next")), ml(cl(t, "next"))) < 0;
      };
      _proto0.getNode = function getNode() {
        var e = ac(this.key);
        return (null === e && t(20), e);
      };
      _proto0.set = function set(t, e, n, o) {
        var r = this._selection,
          i = this.key;
        (o && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          ms() ||
            (cc() === i && lc(t),
            null !== r &&
              (r.setCachedNodes(null),
              yi(r) && (r._cachedIsBackward = null),
              (r.dirty = !0))));
      };
      return ai;
    })();
    function ui(t, e, n) {
      return new _ai(t, e, n);
    }
    function fi(t, e) {
      var n = e.__key,
        o = t.offset,
        r = "element";
      if (oi(e)) {
        r = "text";
        var _t108 = e.getTextContentSize();
        o > _t108 && (o = _t108);
      } else if (!js(e)) {
        var _t109 = e.getNextSibling();
        if (oi(_t109)) ((n = _t109.__key), (o = 0), (r = "text"));
        else {
          var _t110 = e.getParent();
          _t110 && ((n = _t110.__key), (o = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, o, r);
    }
    function di(t, e) {
      if (js(e)) {
        var _n57 = e.getLastDescendant();
        js(_n57) || oi(_n57) ? fi(t, _n57) : fi(t, e);
      } else fi(t, e);
    }
    function hi(t, e, n, o) {
      var r = t.getNode(),
        i = r.getChildAtIndex(t.offset),
        s = ni();
      if ((s.setFormat(n), s.setStyle(o), Ml(i))) i.splice(0, 0, [s]);
      else if (null !== i) {
        var _t111 = qc(r) ? El().append(s) : s;
        i.insertBefore(_t111);
      } else if (qc(r)) {
        var _t112 = r.getLastChild();
        js(_t112) && !_t112.isInline() && _t112.isEmpty()
          ? _t112.append(s)
          : r.append(El().append(s));
      } else r.append(s);
      (t.is(e) && e.set(s.__key, 0, "text"), t.set(s.__key, 0, "text"));
    }
    function gi(e, n, o, r) {
      var i = e.anchor.getNode();
      oi(i) || t(398);
      var s = e.anchor.offset,
        l = ni(n);
      (l.setFormat(o), l.setStyle(r));
      var c = i.getParentOrThrow();
      if (0 === s)
        c.isInline() && !i.__prev ? c.insertBefore(l) : i.insertBefore(l, !1);
      else if (s === i.getTextContentSize())
        c.isInline() && !i.__next ? c.insertAfter(l) : i.insertAfter(l, !1);
      else {
        var _i$splitText = i.splitText(s),
          _t113 = _i$splitText[0];
        _t113.insertAfter(l, !1);
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
    var _i61 = (function () {
      function _i(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto1 = _i.prototype;
      _proto1.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto1.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto1.is = function is(t) {
        if (!Ci(t)) return !1;
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
        return new _i(new Set(this._nodes));
      };
      _proto1.extract = function extract() {
        return this.getNodes();
      };
      _proto1.insertRawText = function insertRawText(t) {};
      _proto1.insertText = function insertText() {};
      _proto1.insertNodes = function insertNodes(t) {
        var e = this.getNodes().filter(function (t) {
            return null === vu(t);
          }),
          n = e.length;
        if (0 === n) return;
        var o = e[n - 1];
        var r;
        if (oi(o)) r = o.select();
        else {
          var _t114 = o.getIndexWithinParent() + 1;
          r = o.getParentOrThrow().select(_t114, _t114);
        }
        r.insertNodes(t);
        for (var _t115 = 0; _t115 < n; _t115++) e[_t115].remove();
      };
      _proto1.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = this._nodes,
          n = [];
        for (var _t116 of e) {
          var _e83 = ac(_t116);
          null !== _e83 && n.push(_e83);
        }
        return (ms() || (this._cachedNodes = n), n);
      };
      _proto1.getTextContent = function getTextContent() {
        var t = this.getNodes();
        var e = "";
        for (var _n58 = 0; _n58 < t.length; _n58++)
          e += t[_n58].getTextContent();
        return e;
      };
      _proto1.deleteNodes = function deleteNodes() {
        var t = this.getNodes().filter(function (t) {
          return null === vu(t);
        });
        if ((Hi() || Vi()) === this && t[0]) {
          var _e84 = nf(t[0], "next");
          ul(_f(_e84, _e84));
        }
        for (var _e85 of t) _e85.remove();
        pi();
      };
      return _i;
    })();
    function pi() {
      var t = pc();
      if (t.isEmpty()) {
        var _e86 = El();
        (t.append(_e86), _e86.select());
      }
    }
    function mi(t) {
      var e = (function (t) {
        var e = t.getNode();
        if (t.offset > 0)
          return "element" === t.type && js(e)
            ? e.getChildAtIndex(t.offset - 1)
            : null;
        for (
          var _t117 = e;
          null !== _t117 && !Oa(_t117) && !qc(_t117);
          _t117 = _t117.getParent()
        ) {
          var _e87 = _t117.getPreviousSibling();
          if (null !== _e87) return _e87;
        }
        return null;
      })(t);
      return rl(e) && rl(e.getPreviousSibling());
    }
    function yi(t) {
      return t instanceof _xi;
    }
    var _xi = (function () {
      function xi(t, e, n, o) {
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
      var _proto10 = xi.prototype;
      _proto10.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto10.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto10.is = function is(t) {
        return (
          !!yi(t) &&
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
          for (var _n59 of t)
            if (Qu(_n59)) {
              var _t118 = _n59.origin;
              0 === e.length ? r.add(_t118) : (i.add(_t118), e.push(_t118));
            } else {
              var _t119 = _n59.origin;
              (js(_t119) && i.has(_t119)) || e.push(_t119);
            }
          o && e.push(o.caret.origin);
          if (
            Xu(t.focus) &&
            js(t.focus.origin) &&
            null === t.focus.getNodeAtCaret()
          )
            for (
              var _n60 = lf(t.focus.origin, "previous");
              Qu(_n60) &&
              r.has(_n60.origin) &&
              !_n60.origin.isEmpty() &&
              _n60.origin.is(e[e.length - 1]);
              _n60 = af(_n60)
            )
              (r["delete"](_n60.origin), e.pop());
          for (; e.length > 1; ) {
            var _t120 = e[e.length - 1];
            if (!js(_t120) || i.has(_t120) || _t120.isEmpty() || r.has(_t120))
              break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n61 = ml(t.anchor),
              _o36 = ml(t.anchor.getFlipped()),
              _r32 = function _r32(t) {
                return qu(t) ? t.origin : t.getNodeAtCaret();
              },
              _i30 =
                _r32(_n61) ||
                _r32(_o36) ||
                (t.anchor.getNodeAtCaret() ? _n61.origin : _o36.origin);
            e.push(_i30);
          }
          return e;
        })(xl(dl(this), "next"));
        return (ms() || (this._cachedNodes = e), e);
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
          _Ni = Ni(this),
          s = _Ni[0],
          l = _Ni[1];
        var c = "",
          a = !0;
        for (var _u6 = 0; _u6 < t.length; _u6++) {
          var _f0 = t[_u6];
          if (js(_f0) && !_f0.isInline()) {
            a || (c += "\n");
            var _t121 = "";
            for (var _e88 of Eu(_f0)) {
              var _n62 = Mu(_f0, _e88);
              null !== _n62 && (_t121 += _n62.getTextContent());
            }
            "" !== _t121 ? ((c += _t121), (a = !1)) : (a = !_f0.isEmpty());
          } else if (((a = !1), oi(_f0))) {
            var _t122 = _f0.getTextContent();
            (_f0 === e
              ? _f0 === n
                ? ("element" === o.type &&
                    "element" === r.type &&
                    r.offset !== o.offset) ||
                  (_t122 = s < l ? _t122.slice(s, l) : _t122.slice(l, s))
                : (_t122 = i ? _t122.slice(s) : _t122.slice(l))
              : _f0 === n &&
                (_t122 = i ? _t122.slice(0, l) : _t122.slice(0, s)),
              (c += _t122));
          } else
            (!Js(_f0) && !rl(_f0)) ||
              (_f0 === n && this.isCollapsed()) ||
              (c += _f0.getTextContent());
        }
        return c;
      };
      _proto10.applyDOMRange = function applyDOMRange(t) {
        var e = Ss(),
          n = e.getEditorState()._selection,
          o = zi(
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
          pe(this));
      };
      _proto10.clone = function clone() {
        var t = this.anchor,
          e = this.focus;
        return new xi(
          ui(t.key, t.offset, t.type),
          ui(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto10.toggleFormat = function toggleFormat(t) {
        ((this.format = nc(this.format, t, null)), (this.dirty = !0));
      };
      _proto10.setFormat = function setFormat(t) {
        ((this.format = t), (this.dirty = !0));
      };
      _proto10.setStyle = function setStyle(t) {
        ((this.style = t), (this.dirty = !0));
      };
      _proto10.hasFormat = function hasFormat(t) {
        var e = w[t];
        return 0 !== (this.format & e);
      };
      _proto10.insertRawText = function insertRawText(t) {
        this.insertNodes(ns(t));
      };
      _proto10.insertText = function insertText(e) {
        var n = this.format,
          o = this.style;
        if (!this.isCollapsed()) {
          var _t123 = (
            this.focus.isBefore(this.anchor) ? this.focus : this.anchor
          ).getNode();
          if (
            (oi(_t123) && ((n = _t123.getFormat()), (o = _t123.getStyle())),
            this.removeText(),
            (this.format = n),
            (this.style = o),
            "" === e)
          )
            return;
          if (null === cc())
            return (
              "element" === this.anchor.type &&
                hi(this.anchor, this.focus, n, o),
              void gi(this, e, n, o)
            );
        }
        "element" === this.anchor.type && hi(this.anchor, this.focus, n, o);
        var r = this.anchor.getNode();
        oi(r) || t(398);
        var i = this.anchor.offset,
          s = r.getParentOrThrow(),
          l = r.getTextContentSize();
        if (
          Ql(r) ||
          (0 === i &&
            (!r.canInsertTextBefore() ||
              (!s.canInsertTextBefore() && !r.__prev))) ||
          (i === l &&
            (!r.canInsertTextAfter() || (!s.canInsertTextAfter() && !r.__next)))
        ) {
          if (r.isSegmented() && 0 !== i && i !== l) {
            if (null !== cc()) r.setMode("normal").setFormat(n).setStyle(o);
            else {
              var _t124 = ni(r.getTextContent());
              (_t124.setFormat(n), _t124.setStyle(o));
              var _e89 = Hi() === this;
              (r.replace(_t124),
                this.setTextNodeRange(_t124, i, _t124, i),
                _e89 && Hi() !== this && yc(this));
            }
            return void ("" !== e && this.insertText(e));
          }
          if ("" === e) return;
          if (0 === i) {
            var _t125 = r.getPreviousSibling();
            if (oi(_t125) && _t125.canInsertTextAfter() && !Ql(_t125))
              _t125.select();
            else {
              var _t126 = ni();
              (_t126.setFormat(n),
                _t126.setStyle(o),
                s.canInsertTextBefore()
                  ? r.insertBefore(_t126)
                  : s.insertBefore(_t126),
                _t126.select());
            }
            return void this.insertText(e);
          }
          if (i === l) {
            var _t127 = r.getNextSibling();
            if (oi(_t127) && _t127.canInsertTextBefore() && !Ql(_t127))
              _t127.select(0, 0);
            else {
              var _t128 = ni();
              (_t128.setFormat(n),
                _t128.setStyle(o),
                s.canInsertTextAfter()
                  ? r.insertAfter(_t128)
                  : s.insertAfter(_t128),
                _t128.select(0, 0));
            }
            return void this.insertText(e);
          }
          var _t129 = ni(e);
          return (
            _t129.setFormat(n),
            _t129.setStyle(o),
            r.replace(_t129),
            void _t129.select()
          );
        }
        if ("" === e) return;
        var c = s.isInline() && 0 === i && !r.__prev,
          a = s.isInline() && i === l && !r.__next,
          u = r.getFormat() !== n || r.getStyle() !== o;
        if (c || a || u) {
          if ("" !== r.getTextContent() || c || a)
            return void gi(this, e, n, o);
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
        var t = Hi() === this,
          e = this.anchor.key;
        (fl(this, pl(dl(this))),
          this.isCollapsed() &&
            (function (t, e) {
              var n = t.anchor;
              if (n.key === e) return;
              var o = n.getNode();
              var r = 0,
                i = "";
              oi(o)
                ? ((r = o.getFormat()), (i = o.getStyle()))
                : js(o) && ((r = o.getTextFormat()), (i = o.getTextStyle()));
              (t.format === r && t.style === i) ||
                ((t.format = r), (t.style = i), (t.dirty = !0));
            })(this, e),
          t && Hi() !== this && yc(this));
      };
      _proto10.formatText = function formatText(t, e) {
        if (e === void 0) {
          e = null;
        }
        Ti(this, t, e);
      };
      _proto10.insertNodes = function insertNodes(e) {
        var _i31;
        if (0 === e.length) return;
        this.isCollapsed() || this.removeText();
        var n = this.anchor.getNode();
        if (
          "element" === this.anchor.type &&
          js(n) &&
          n.isShadowRoot() &&
          null !== vu(n)
        ) {
          var _n$getFirstChild;
          var _o37 =
            (_n$getFirstChild = n.getFirstChild()) != null
              ? _n$getFirstChild
              : n.append(El()).getFirstChild();
          if (null !== _o37 && !js(_o37)) {
            var _t130 = El();
            (_o37.insertBefore(_t130), (_o37 = _t130));
          }
          if (null !== _o37) {
            _o37.selectStart();
            var _n63 = Hi();
            return (yi(_n63) || t(369), _n63.insertNodes(e));
          }
        }
        if ("element" === this.anchor.type && qc(n)) {
          var _t131 = ls(e),
            _o38 = _t131.getLastDescendant();
          return (
            n.splice(this.anchor.offset, 0, _t131.getChildren()),
            void (null !== _o38 && _o38.selectEnd())
          );
        }
        var o = this.isBackward() ? this.focus : this.anchor;
        var r = o.getNode(),
          i = mu(r, Oa);
        var s = e[e.length - 1];
        if (js(i) && "__language" in i) {
          if ("__language" in e[0]) this.insertText(e[0].getTextContent());
          else {
            var _rs = rs(this),
              _t132 = _rs[1];
            (i.splice(_t132, 0, e), s.selectEnd());
          }
          return;
        }
        if (
          !e.some(function (t) {
            return (js(t) || Js(t)) && !t.isInline();
          })
        ) {
          js(i) || t(211, r.constructor.name, r.getType());
          var _rs2 = rs(this, !0),
            _n64 = _rs2[0],
            _o39 = _rs2[1];
          return ((js(_n64) ? _n64 : i).splice(_o39, 0, e), void s.selectEnd());
        }
        if (js(i) && null !== vu(i)) {
          var _rs3 = rs(this),
            _t133 = _rs3[1],
            _n65 = os(e);
          i.splice(_t133, 0, _n65);
          var _o40 = _n65[_n65.length - 1];
          return void (void 0 !== _o40
            ? _o40.selectEnd()
            : i.select(_t133, _t133));
        }
        if (null === i) {
          var _t134 = ls(e),
            _n66 = _t134.getLastDescendant();
          var _o41 = cl(this.anchor, "next");
          for (var _e90 of _t134.getChildren()) _o41 = Nl(_e90, _o41);
          return void (null !== _n66 && _n66.selectEnd());
        }
        if (js(i) && !i.isParentRequired() && !qc(i.getParentOrThrow())) {
          var _rs4 = rs(this),
            _t135 = _rs4[1],
            _n67 = os(e);
          i.splice(_t135, 0, _n67);
          var _o42 = _n67[_n67.length - 1];
          return void (void 0 !== _o42
            ? _o42.selectEnd()
            : i.select(_t135, _t135));
        }
        var l = ls(e),
          c = l.getLastDescendant(),
          a = l.getChildren(),
          u = mi(o),
          f = !js(i) || !i.isEmpty() ? this.insertParagraph() : null;
        f && !i.isAttached() && ((r = this.anchor.getNode()), (i = mu(r, Oa)));
        var d = a[a.length - 1];
        var h = a[0];
        var g;
        ((g = h),
          u ||
            !js(g) ||
            !Oa(g) ||
            g.isEmpty() ||
            !js(i) ||
            (i.isEmpty() && !i.canMergeWhenEmpty()) ||
            (js(i) || t(211, r.constructor.name, r.getType()),
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
              for (var _t136 of i) s = s.insertAfter(_t136);
            })(i, h)));
        var _ = mu(c, Oa),
          p = c.selectEnd();
        (f &&
          (js(_) && (f.canMergeWhenEmpty() || Oa(d))
            ? (_.append.apply(_, Array.from(f.getChildren())), f.remove())
            : f.isEmpty() && f.remove()),
          js(i) && i.isEmpty() && i.remove());
        var m = js(i) ? i.getLastChild() : null;
        rl(m) && _ !== i && m.remove();
        var y = ml(cl(p.anchor, "next"));
        (al(p.anchor, y), al(p.focus, y));
      };
      _proto10.insertParagraph = function insertParagraph() {
        this.isCollapsed() || this.removeText();
        var e = this.anchor.getNode();
        if ("element" === this.anchor.type && qc(e)) {
          var _t137 = El();
          return (
            e.splice(this.anchor.offset, 0, [_t137]),
            _t137.select(),
            _t137
          );
        }
        var _rs5 = rs(this),
          n = _rs5[1],
          o = mu(this.anchor.getNode(), Oa);
        if (null !== o && null !== vu(o)) return null;
        js(o) || t(213);
        var r = o.getChildAtIndex(n),
          i = r ? [r].concat(Array.from(r.getNextSiblings())) : [],
          s = o.insertNewAfter(this, !1);
        return s
          ? (s.append.apply(s, Array.from(i)), s.selectStart(), s)
          : null;
      };
      _proto10.insertLineBreak = function insertLineBreak(t) {
        var e = ol();
        if ((this.insertNodes([e]), t)) {
          var _t138 = e.getParentOrThrow(),
            _n68 = e.getIndexWithinParent();
          _t138.select(_n68, _n68);
        }
      };
      _proto10.extract = function extract() {
        var _n$splitText;
        var t = [].concat(Array.from(this.getNodes())),
          e = t.length;
        var n = t[0],
          o = t[e - 1];
        var _Ni2 = Ni(this),
          r = _Ni2[0],
          i = _Ni2[1],
          s = this.isBackward(),
          _ref33 = s ? [this.focus, this.anchor] : [this.anchor, this.focus],
          l = _ref33[0],
          c = _ref33[1],
          _ref34 = s ? [i, r] : [r, i],
          a = _ref34[0],
          u = _ref34[1];
        if (0 === e) return [];
        if (1 === e) {
          if (oi(n) && !this.isCollapsed()) {
            var _t139 = n.splitText(a, u),
              _e91 = 0 === a ? _t139[0] : _t139[1];
            return _e91
              ? (l.set(_e91.getKey(), 0, "text"),
                c.set(_e91.getKey(), _e91.getTextContentSize(), "text"),
                [_e91])
              : [];
          }
          return [n];
        }
        if (
          (oi(n) &&
            (a === n.getTextContentSize()
              ? t.shift()
              : 0 !== a &&
                ((_n$splitText = n.splitText(a)),
                (n = _n$splitText[1]),
                (t[0] = n),
                l.set(n.getKey(), 0, "text"))),
          oi(o))
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
        if (cs(this, t, e, n)) return;
        var o = "move" === t,
          r = Ss(),
          i = oa(Vc(r));
        if (!i) return;
        var s = r._blockCursorElement,
          l = r._rootElement,
          c = this.focus.getNode();
        null === l ||
          null === s ||
          !js(c) ||
          c.isInline() ||
          c.canBeEmpty() ||
          na(s, r, l);
        var a = zc(r, this.focus.key);
        var u = a;
        if (
          ("text" === this.focus.type && (u = oi(c) ? Da(c, a, r) : null),
          this.dirty)
        ) {
          var _t140 = zc(r, this.anchor.key);
          var _e93 = _t140;
          if ("text" === this.anchor.type) {
            var _n69 = this.anchor.getNode();
            _e93 = oi(_n69) ? Da(_n69, _t140, r) : null;
          }
          _e93 && u && Qi(i, _e93, this.anchor.offset, u, this.focus.offset);
        }
        if ("character" === n && oi(c) && c.isUnmergeable()) {
          if (
            e
              ? 0 === this.focus.offset
              : this.focus.offset === c.getTextContentSize()
          ) {
            var _t141 = nf(c, e ? "previous" : "next").getNodeAtCaret();
            if (oi(_t141)) {
              if (!o) {
                var _n70 = _t141.getTextContentSize();
                return (
                  e
                    ? this.focus.set(_t141.__key, _n70 - 1, "text")
                    : this.focus.set(_t141.__key, 1, "text"),
                  void (this.dirty = !0)
                );
              }
              {
                var _n71 = r.getElementByKey(_t141.getKey()),
                  _o43 = _n71 ? Da(_t141, _n71, r) : null;
                if (_o43) {
                  var _t142 = e ? _o43.length : 0;
                  Qi(i, _o43, _t142, _o43, _t142);
                }
              }
            }
          }
        }
        if ((Ei(i, t, e ? "backward" : "forward", n, l), i.rangeCount > 0)) {
          var _t143 = fa(i, r._rootElement),
            _n72 = _t143 || i.getRangeAt(0),
            _s17 = this.anchor.getNode(),
            _l10 = Gs(_s17) ? _s17 : Yc(_s17);
          if ((this.applyDOMRange(_n72), (this.dirty = !0), !o)) {
            Mi(this, e, _l10);
            (_t143
              ? "backward" !== i.direction
              : i.anchorNode === _n72.startContainer &&
                i.anchorOffset === _n72.startOffset) || Oi(this);
          }
        }
        "lineboundary" === n && cs(this, t, e, n, "decorators");
      };
      _proto10.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            js(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t144 = e.getParent(),
            _n73 =
              e.getNextSibling() ||
              (null === _t144 ? null : _t144.getNextSibling());
          if (js(_n73) && _n73.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto10.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e94 = this.anchor;
          var _n74 = _e94.getNode();
          if (this.forwardDeletion(_e94, _n74, t)) {
            var _t145 = js(_n74) ? _n74.getNextSibling() : null;
            if (
              !(js(_n74) && _n74.isEmpty() && js(_t145) && _t145.isShadowRoot())
            )
              return;
          }
          var _o44 = cl(_e94, t ? "previous" : "next"),
            _r33 = hf(_o44);
          if (
            _r33.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            if ("element" === _e94.type) {
              var _t146 = _o44.getNodeAtCaret();
              if (js(_t146) && ea(_t146)) {
                var _e95 = _t146.getParent();
                _t146.remove();
                var _n75 = mc(_e95, _t146);
                return void (null !== _n75 && _n75.selectStart());
              }
            }
            var _t147 = { type: "initial" };
            for (var _e96 of _r33.iterNodeCarets("shadowRoot"))
              if (Qu(_e96)) {
                if (_e96.origin.isInline());
                else {
                  if (_e96.origin.isShadowRoot()) {
                    if ("merge-block" === _t147.type) break;
                    if (
                      js(_r33.anchor.origin) &&
                      _r33.anchor.origin.isEmpty()
                    ) {
                      var _t148 = ml(_e96);
                      (fl(this, _f(_t148, _t148)), _r33.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t147.type &&
                    "merge-block" !== _t147.type) ||
                    (_t147 = {
                      block: _t147.block,
                      caret: _e96,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t147.type) break;
                if (Xu(_e96)) {
                  if (js(_e96.origin)) {
                    if (_e96.origin.isInline()) {
                      if (!_e96.origin.isParentOf(_r33.anchor.origin)) break;
                    } else
                      _t147 = { block: _e96.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (Js(_e96.origin)) {
                    if (_e96.origin.isIsolated());
                    else if (
                      "merge-next-block" === _t147.type &&
                      (_e96.origin.isKeyboardSelectable() ||
                        !_e96.origin.isInline()) &&
                      js(_r33.anchor.origin) &&
                      _r33.anchor.origin.isEmpty()
                    ) {
                      _r33.anchor.origin.remove();
                      var _t149 = Ui();
                      (_t149.add(_e96.origin.getKey()), yc(_t149));
                    } else {
                      var _t150 = _e96.origin,
                        _n76 = _t150.getParent();
                      _t150.remove();
                      var _o45 = mc(_n76, _t150);
                      null !== _o45 && _o45.selectStart();
                    }
                    return;
                  }
                  if (rl(_e96.origin)) return void _e96.origin.remove();
                  break;
                }
              }
            if ("merge-block" === _t147.type) {
              var _t151 = _t147,
                _e97 = _t151.caret,
                _n77 = _t151.block;
              if (Eu(_n77).length > 0) return;
              return _e97.origin.isEmpty() &&
                !_n77.isEmpty() &&
                _e97.origin.getParent() === _n77.getParent()
                ? void _e97.origin.remove(!0)
                : (fl(
                    this,
                    _f(
                      !_e97.origin.isEmpty() && _n77.isEmpty()
                        ? hl(nf(_n77, _e97.direction))
                        : _r33.anchor,
                      _e97,
                    ),
                  ),
                  this.removeText());
            }
            for (var _t152 = _e94.getNode(); null !== _t152; ) {
              if (null !== vu(_t152)) return;
              if (js(_t152) && _t152.isShadowRoot()) break;
              _t152 = _t152.getParent();
            }
          }
          var _i32 = this.focus;
          if ((Ai(this, t, "character"), this.isCollapsed())) {
            if (t && 0 === _e94.offset && bi(this, _e94.getNode())) return;
          } else {
            var _o46 = "text" === _i32.type ? _i32.getNode() : null;
            if (
              ((_n74 = "text" === _e94.type ? _e94.getNode() : null),
              null !== _o46 && _o46.isSegmented())
            ) {
              var _e98 = _i32.offset,
                _r34 = _o46.getTextContentSize();
              if (_o46.is(_n74) || (t && _e98 !== _r34) || (!t && 0 !== _e98))
                return void Fi(_o46, t, _e98);
            } else if (null !== _n74 && _n74.isSegmented()) {
              var _r35 = _e94.offset,
                _i33 = _n74.getTextContentSize();
              if (_n74.is(_o46) || (t && 0 !== _r35) || (!t && _r35 !== _i33))
                return void Fi(_n74, t, _r35);
            }
            !(function (t, e) {
              var n = t.anchor,
                o = t.focus,
                r = n.getNode(),
                i = o.getNode();
              if (r === i && "text" === n.type && "text" === o.type) {
                var _t153 = n.offset,
                  _i34 = o.offset,
                  _s18 = _t153 < _i34,
                  _l11 = _s18 ? _t153 : _i34,
                  _c0 = _s18 ? _i34 : _t153,
                  _a0 = _c0 - 1;
                if (_l11 !== _a0) {
                  (function (t) {
                    return !(Sc(t) || Di(t));
                  })(r.getTextContent().slice(_l11, _c0)) &&
                    (e ? o.set(o.key, _a0, o.type) : n.set(n.key, _a0, n.type));
                }
              }
            })(this, t);
          }
        }
        if (
          (e || ki(this),
          this.removeText(),
          t &&
            !e &&
            this.isCollapsed() &&
            "element" === this.anchor.type &&
            0 === this.anchor.offset)
        ) {
          var _t154 = this.anchor.getNode();
          (_t154.isEmpty() &&
            Gs(_t154.getParent()) &&
            null === _t154.getPreviousSibling() &&
            bi(this, _t154),
            pi());
        }
      };
      _proto10.deleteLine = function deleteLine(t) {
        var e = this.isCollapsed(),
          n = Ri(this.anchor);
        if (null !== n && Js(Nu(n)))
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
          (this.isCollapsed() && Ai(this, t, "lineboundary"),
          this.isCollapsed())
        )
          this.deleteCharacter(t);
        else {
          mu(this.anchor.getNode(), Oa) !== mu(this.focus.getNode(), Oa)
            ? (this.focus.set(
                this.anchor.key,
                this.anchor.offset,
                this.anchor.type,
              ),
              this.deleteCharacter(t))
            : (e || ki(this), this.removeText());
        }
      };
      _proto10.deleteWord = function deleteWord(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e99 = this.anchor,
            _n78 = _e99.getNode();
          if (this.forwardDeletion(_e99, _n78, t)) return;
          Ai(this, t, "word");
        }
        this.isCollapsed()
          ? this.deleteCharacter(t)
          : (e || ki(this), this.removeText());
      };
      _proto10.isBackward = function isBackward() {
        var t = this._cachedIsBackward;
        if (null !== t) return t;
        var e = this.focus.isBefore(this.anchor);
        return (ms() || (this._cachedIsBackward = e), e);
      };
      _proto10.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return xi;
    })();
    function Ci(t) {
      return t instanceof _i61;
    }
    function Si(t, e) {
      var _u$splitText, _h$splitText;
      if (Ci(t)) {
        for (var _n79 of t.getNodes())
          Vr(_n79) && _n79.setFormat(e(_n79.getFormat()));
        return;
      }
      if (t.isCollapsed()) return (t.setFormat(e(t.format)), void lc(null));
      var n = [];
      for (var _o47 of t.getNodes())
        oi(_o47)
          ? n.push(_o47)
          : js(_o47)
            ? _o47.setTextFormat(e(_o47.getTextFormat()))
            : Vr(_o47) && _o47.setFormat(e(_o47.getFormat()));
      var o = n.length;
      if (0 === o) return (t.setFormat(e(t.format)), void lc(null));
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
        if (Ql(u) || (0 === f && g === u.getTextContentSize()))
          u.setFormat(_n80);
        else {
          var _t155 = u.splitText(f, g),
            _e100 = 0 === f ? _t155[0] : _t155[1];
          (_e100.setFormat(_n80),
            "text" === l.type && l.set(_e100.__key, 0, "text"),
            "text" === c.type && c.set(_e100.__key, g - f, "text"));
        }
        return void (t.format = _n80);
      }
      0 === f ||
        Ql(u) ||
        ((_u$splitText = u.splitText(f)), (u = _u$splitText[1]), (f = 0));
      var _ = e(u.getFormat());
      u.setFormat(_);
      var p = e(h.getFormat());
      g > 0 &&
        (g === h.getTextContentSize() ||
          Ql(h) ||
          ((_h$splitText = h.splitText(g)),
          (h = _h$splitText[0]),
          _h$splitText),
        h.setFormat(p));
      for (var _t156 = a + 1; _t156 < d; _t156++) {
        var _o48 = n[_t156];
        _o48.setFormat(e(_o48.getFormat()));
      }
      ("text" === l.type && l.set(u.__key, f, "text"),
        "text" === c.type && c.set(h.__key, g, "text"),
        (t.format = _ | p));
    }
    function Ti(t, e, n) {
      if (n === void 0) {
        n = null;
      }
      var o = null === n && yi(t) ? nc(t.format, e, null) : n;
      Si(t, function (t) {
        return nc(t, e, o);
      });
    }
    function vi(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function Ni(t) {
      var e = t.getStartEndPoints();
      if (null === e) return [0, 0];
      var n = e[0],
        o = e[1];
      return "element" === n.type &&
        "element" === o.type &&
        n.key === o.key &&
        n.offset === o.offset
        ? [0, 0]
        : [vi(n), vi(o)];
    }
    function bi(t, e) {
      for (var _n81 = e; _n81; _n81 = _n81.getParent()) {
        if (js(_n81)) {
          if (_n81.collapseAtStart(t)) return !0;
          if (qc(_n81)) break;
        }
        if (_n81.getPreviousSibling()) break;
      }
      return !1;
    }
    function ki(t) {
      var e = pc();
      !e.isEmpty() &&
        bl(e, t) &&
        (t.anchor.set(e.getKey(), 0, "element"),
        t.focus.set(e.getKey(), e.getChildrenSize(), "element"));
    }
    function Oi(t) {
      var e = t.focus,
        n = t.anchor,
        o = n.key,
        r = n.offset,
        i = n.type;
      (n.set(e.key, e.offset, e.type, !0), e.set(o, r, i, !0));
    }
    function Ei(t, e, n, o, r) {
      var i = "character" === o ? ha(t, r) : null,
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
      var c = ha(t, r);
      c.focusNode === s && c.focusOffset === l && t.modify(e, n, o);
    }
    function Mi(t, e, n) {
      var o = t.getNodes(),
        r = o.filter(function (t) {
          return jc(t, n);
        });
      if (0 === r.length || r.length === o.length) return !1;
      var i = e ? r[0] : r[r.length - 1],
        s = js(i) ? i : i.getParentOrThrow();
      return (e ? s.selectStart() : s.selectEnd(), !0);
    }
    function Ai(t, e, n) {
      if (cs(t, "extend", e, n)) return;
      var o = Ss(),
        r = oa(Vc(o));
      if (!r || "function" != typeof r.modify) return;
      var i = o._blockCursorElement,
        s = o._rootElement,
        l = t.anchor,
        c = t.focus.getNode();
      null === s ||
        null === i ||
        !js(c) ||
        c.isInline() ||
        c.canBeEmpty() ||
        na(i, o, s);
      var a = function a(t) {
          var e = t.getNode(),
            n = o.getElementByKey(t.key);
          return null !== n && "text" === t.type && oi(e) ? Da(e, n, o) : n;
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
        (Qi(r, _, p, _, p),
        Ei(r, "move", e ? "backward" : "forward", n, s),
        0 === r.rangeCount)
      )
        return;
      var m = fa(r, s) || r.getRangeAt(0),
        y = m.startContainer,
        x = m.startOffset;
      if (
        h &&
        "character" === n &&
        "text" === l.type &&
        oi(u) &&
        u.isUnmergeable()
      ) {
        if (d === (e ? 0 : u.getTextContentSize())) {
          var _n82 = nf(u, e ? "previous" : "next").getNodeAtCaret();
          if (oi(_n82)) {
            var _o49 = e ? _n82.getTextContentSize() - 1 : 1;
            return (t.focus.set(_n82.__key, _o49, "text"), void (t.dirty = !0));
          }
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
        N = Gs(u) ? u : Yc(u);
      (t.applyDOMRange({
        collapsed: !1,
        endContainer: T,
        endOffset: v,
        startContainer: C,
        startOffset: S,
      }),
        (t.dirty = !0),
        !Mi(t, e, N) && e && Oi(t),
        "lineboundary" === n && cs(t, "extend", e, n, "decorators"));
    }
    function wi() {
      try {
        var _t157 = new RegExp("\\p{Emoji}", "u"),
          _e101 = _t157.test.bind(_t157);
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
    var Di = wi();
    function Fi(t, e, n) {
      var o = t,
        r = o.getTextContent().split(/(?=\s)/g),
        i = r.length;
      var s = 0,
        l = 0;
      for (var _t158 = 0; _t158 < i; _t158++) {
        var _o51 = _t158 === i - 1;
        if (
          ((l = s), (s += r[_t158].length), (e && s === n) || s > n || _o51)
        ) {
          (r.splice(_t158, 1), _o51 && (l = void 0));
          break;
        }
      }
      var c = r.join("").trim();
      "" === c ? o.remove() : (o.setTextContent(c), o.select(l, l));
    }
    function Ii(e, n, o, r) {
      var i,
        s = n,
        l = !1;
      if (Ca(e)) {
        var _c1 = !1;
        var _a1 = e.childNodes,
          _u7 = _a1.length,
          _f1 = r._blockCursorElement;
        (s === _u7 && _u7 > 0 && ((_c1 = !0), (s = _u7 - 1)),
          void 0 !== dc(e, r) || Ua(e, r) || (l = !0));
        var _d5 = _a1[s],
          _h7 = !1;
        if (_d5 === _f1) ((_d5 = _a1[s + 1]), (_h7 = !0));
        else if (null !== _f1) {
          var _t159 = _f1.parentNode;
          if (e === _t159) {
            n > Array.prototype.indexOf.call(_t159.children, _f1) && s--;
          }
        }
        if (((i = Cc(_d5)), oi(i))) s = rf(i, _c1 ? "next" : "previous");
        else {
          var _a10 = Cc(e);
          if (null === _a10) return null;
          if (js(_a10)) {
            var _u8$resolveChildIndex;
            var _l12 = r.getElementByKey(_a10.getKey());
            null === _l12 && t(214);
            var _u8 = Aa(_a10, _l12, r);
            ((_u8$resolveChildIndex = _u8.resolveChildIndex(_a10, _l12, e, n)),
              (_a10 = _u8$resolveChildIndex[0]),
              (s = _u8$resolveChildIndex[1]),
              js(_a10) || t(215),
              _c1 &&
                s >= _a10.getChildrenSize() &&
                (s = Math.max(0, _a10.getChildrenSize() - 1)));
            var _f10 = _a10.getChildAtIndex(s);
            if (
              js(_f10) &&
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
              var _t160 = _c1
                ? _f10.getLastDescendant()
                : _f10.getFirstDescendant();
              (null === _t160
                ? (_a10 = _f10)
                : ((_f10 = _t160),
                  (_a10 = js(_f10) ? _f10 : _f10.getParentOrThrow())),
                (s = 0));
            }
            oi(_f10)
              ? ((i = _f10),
                (_a10 = null),
                (s = rf(_f10, _c1 ? "next" : "previous")))
              : _f10 !== _a10 &&
                _c1 &&
                !_h7 &&
                (js(_a10) || t(216),
                (s = Math.min(_a10.getChildrenSize(), s + 1)));
          } else {
            var _t161 = Nu(_a10),
              _o52 = null !== _t161 ? _t161 : _a10,
              _i35 = _o52.getIndexWithinParent(),
              _l13 = r.getElementByKey(_a10.getKey());
            var _c10 = "after";
            if (null !== _l13 && Cc(e) === _a10) {
              var _t162 = Aa(_a10, _l13, r);
              _t162.element !== _l13
                ? (_c10 = _t162.resolveLeafPosition(_l13, e, n))
                : 0 === n && Js(_a10) && (_c10 = "before");
            }
            ((s = "before" === _c10 ? _i35 : _i35 + 1),
              (_a10 = _o52.getParentOrThrow()));
          }
          if (js(_a10)) return [ui(_a10.__key, s, "element"), l];
        }
      } else i = Cc(e);
      return oi(i) ? [ui(i.__key, rf(i, s, "clamp"), "text"), l] : null;
    }
    function Pi(t, e, n) {
      var o = t.offset,
        r = t.getNode();
      if (0 === o) {
        var _o53 = r.getPreviousSibling(),
          _i36 = r.getParent();
        if (e) {
          if ((n || !e) && null === _o53 && js(_i36) && _i36.isInline()) {
            var _e102 = _i36.getPreviousSibling();
            oi(_e102) &&
              t.set(_e102.__key, _e102.getTextContent().length, "text");
          }
        } else
          js(_o53) && !n && _o53.isInline()
            ? t.set(_o53.__key, _o53.getChildrenSize(), "element")
            : oi(_o53) &&
              !r.isUnmergeable() &&
              t.set(_o53.__key, _o53.getTextContent().length, "text");
      } else if (o === r.getTextContent().length) {
        var _o54 = r.getNextSibling(),
          _i37 = r.getParent();
        if (e && js(_o54) && _o54.isInline()) t.set(_o54.__key, 0, "element");
        else if (
          (n || e) &&
          null === _o54 &&
          js(_i37) &&
          _i37.isInline() &&
          !_i37.canInsertTextAfter() &&
          _i37.getTextContentSize() > 1
        ) {
          var _e103 = _i37.getNextSibling();
          oi(_e103) && t.set(_e103.__key, 0, "text");
        }
      }
    }
    function Ri(t) {
      var e = ac(t.key);
      return null === e ? null : ku(e);
    }
    function Li(t, e, n) {
      var o = Ri(t),
        r = Ri(e);
      if (o === r || (null !== o && null !== r && o.is(r))) return !1;
      var i = n(o, r);
      if (null !== o)
        return (
          js(o)
            ? e.set(o.getKey(), i ? o.getChildrenSize() : 0, "element")
            : e.set(o.getKey(), i ? o.getTextContentSize() : 0, "text"),
          !0
        );
      var s = Nu(r);
      if (null === s) return !1;
      var l = s.getParent();
      if (null === l) return !1;
      var c = s.getIndexWithinParent();
      return (e.set(l.getKey(), i ? c + 1 : c, "element"), !0);
    }
    function $i(t) {
      var e = Li(t.anchor, t.focus, function (e, n) {
        return (function (t, e, n, o) {
          if (null !== n && null !== o) {
            var _t163 = Nu(n),
              _e104 = Nu(o);
            if (null !== _t163 && _t163.is(_e104)) {
              for (var _e105 of Ou(_t163).values()) {
                if (_e105 === n.getKey()) return !0;
                if (_e105 === o.getKey()) return !1;
              }
              return !0;
            }
            return null === _t163 || null === _e104 || _t163.isBefore(_e104);
          }
          if (null !== n) {
            var _t164 = Nu(n),
              _o55 = ac(e.key);
            return (
              null === _t164 ||
              null === _o55 ||
              !(!_t164.is(_o55) && !_t164.isParentOf(_o55)) ||
              _t164.isBefore(_o55)
            );
          }
          var r = Nu(o),
            i = ac(t.key);
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
    function zi(t, e, n, o, r, i) {
      if (null === t || null === n || !Jl(r, t, n)) return null;
      var s = Ii(t, e, yi(i) ? i.anchor : null, r);
      if (null === s) return null;
      var l = Ii(n, o, yi(i) ? i.focus : null, r);
      if (null === l) return null;
      var c = s[0],
        a = s[1],
        u = l[0],
        f = l[1];
      if ("element" === c.type && "element" === u.type) {
        var _e106 = Cc(t),
          _o56 = Cc(n);
        if (Js(_e106) && Js(_o56)) return null;
      }
      var d =
        r._slotsUsed &&
        Li(c, u, function () {
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
            (Pi(t, _n84, _o57),
              Pi(e, !_n84, _o57),
              _o57 && e.set(t.key, t.offset, t.type));
          }
        })(c, u),
        [c, u, a || f || d]
      );
    }
    function Bi(t) {
      return js(t) && !t.isInline();
    }
    function Ki(t, e, n, o, r, i) {
      var s = Cs(),
        l = new _xi(ui(t, e, r), ui(n, o, i), 0, "");
      return ((l.dirty = !0), (s._selection = l), l);
    }
    function Wi() {
      var t = ui("root", 0, "element"),
        e = ui("root", 0, "element");
      return new _xi(t, e, 0, "");
    }
    function Ui() {
      return new _i61(new Set());
    }
    function ji(t, e, n, o) {
      var r = n._window;
      if (null === r) return null;
      var i = o || r.event,
        s = i ? i.type : void 0,
        l = "selectionchange" === s,
        c =
          !lt &&
          (l ||
            "beforeinput" === s ||
            "compositionstart" === s ||
            "compositionend" === s ||
            ("click" === s && i && 3 === i.detail) ||
            "drop" === s ||
            void 0 === s);
      var a, u, f, d;
      if (yi(t) && !c) return t.clone();
      {
        if (null === e) return null;
        var _o58 = ha(e, n._rootElement);
        if (
          ((a = _o58.anchorNode),
          (u = _o58.focusNode),
          (f = _o58.anchorOffset),
          (d = _o58.focusOffset),
          (l || void 0 === s) && yi(t) && !Jl(n, a, u))
        )
          return t.clone();
      }
      var h = zi(a, f, u, d, n, t);
      if (null === h) return null;
      var g = h[0],
        _ = h[1],
        p = h[2];
      var m = 0,
        y = "";
      if (yi(t)) {
        var _e107 = t.anchor;
        if (g.key === _e107.key) ((m = t.format), (y = t.style));
        else {
          var _t165 = g.getNode();
          oi(_t165)
            ? ((m = _t165.getFormat()), (y = _t165.getStyle()))
            : js(_t165) &&
              ((m = _t165.getTextFormat()), (y = _t165.getTextStyle()));
        }
      }
      var x = new _xi(g, _, m, y);
      return (p && (x.dirty = !0), x);
    }
    function Hi() {
      return Cs()._selection;
    }
    function Vi() {
      return Ss()._editorState._selection;
    }
    function Ji(t, e) {
      var n = e.__key;
      return t.anchor.key === n || t.focus.key === n;
    }
    function Yi(t, e, n, o) {
      if (o === void 0) {
        o = 1;
      }
      if (!Ji(t, e)) return;
      var r = t.anchor,
        i = t.focus,
        s = e.__key;
      if (t.isCollapsed()) {
        var _e108 = r.offset;
        if ((n <= _e108 && o > 0) || (n < _e108 && o < 0)) {
          var _n85 = Math.max(0, _e108 + o);
          (r.set(s, _n85, "element"), i.set(s, _n85, "element"), Gi(t));
        }
      } else {
        var _l14 = t.isBackward(),
          _c11 = _l14 ? i : r,
          _a11 = _c11.getNode(),
          _u9 = _l14 ? r : i,
          _f11 = _u9.getNode();
        if (e.is(_a11)) {
          var _t166 = _c11.offset;
          ((n <= _t166 && o > 0) || (n < _t166 && o < 0)) &&
            _c11.set(s, Math.max(0, _t166 + o), "element");
        }
        if (e.is(_f11)) {
          var _t167 = _u9.offset;
          ((n <= _t167 && o > 0) || (n < _t167 && o < 0)) &&
            _u9.set(s, Math.max(0, _t167 + o), "element");
        }
      }
      Gi(t);
    }
    function Gi(t) {
      var e = t.anchor,
        n = e.offset,
        o = t.focus,
        r = o.offset,
        i = e.getNode(),
        s = o.getNode();
      if (t.isCollapsed()) {
        if (!js(i)) return;
        var _t168 = i.getChildrenSize(),
          _r36 = n >= _t168,
          _s19 = _r36 ? i.getChildAtIndex(_t168 - 1) : i.getChildAtIndex(n);
        if (oi(_s19)) {
          var _t169 = 0;
          (_r36 && (_t169 = _s19.getTextContentSize()),
            e.set(_s19.__key, _t169, "text"),
            o.set(_s19.__key, _t169, "text"));
        }
        return;
      }
      if (js(i)) {
        var _t170 = i.getChildrenSize(),
          _o59 = n >= _t170,
          _r37 = _o59 ? i.getChildAtIndex(_t170 - 1) : i.getChildAtIndex(n);
        if (oi(_r37)) {
          var _t171 = 0;
          (_o59 && (_t171 = _r37.getTextContentSize()),
            e.set(_r37.__key, _t171, "text"));
        }
      }
      if (js(s)) {
        var _t172 = s.getChildrenSize(),
          _e109 = r >= _t172,
          _n86 = _e109 ? s.getChildAtIndex(_t172 - 1) : s.getChildAtIndex(r);
        if (oi(_n86)) {
          var _t173 = 0;
          (_e109 && (_t173 = _n86.getTextContentSize()),
            o.set(_n86.__key, _t173, "text"));
        }
      }
    }
    function qi(t, e, n, o, r) {
      var i = null,
        s = 0,
        l = null;
      (null !== o
        ? ((i = o.__key),
          oi(o)
            ? ((s = o.getTextContentSize()), (l = "text"))
            : js(o) && ((s = o.getChildrenSize()), (l = "element")))
        : null !== r &&
          ((i = r.__key), oi(r) ? (l = "text") : js(r) && (l = "element")),
        null !== i && null !== l
          ? t.set(i, s, l)
          : ((s = e.getIndexWithinParent()),
            -1 === s && (s = n.getChildrenSize()),
            t.set(n.__key, s, "element")));
    }
    function Xi(t, e, n, o, r) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : r), "text")
        : t.offset > o.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function Qi(t, e, n, o, r) {
      try {
        t.setBaseAndExtent(e, n, o, r);
      } catch (t) {}
    }
    function Zi(t, e, n) {
      var o = zc(t, e.getKey());
      if (js(e)) {
        var _r38 = Aa(e, o, t);
        return [_r38.element, n + _r38.getFirstChildOffset()];
      }
      return [o, n];
    }
    function ts(t, e, n, o, r, i) {
      var s = i.getRootNode(),
        l = tc(s) || ia(s) ? ya(s) : null;
      if ((r.has(Cr) && l !== i) || (null !== l && Hl(l, l))) return;
      var c = ha(o, i);
      var a;
      if (!yi(e))
        return void (
          null !== t &&
          Jl(n, c.anchorNode, c.focusNode) &&
          o.removeAllRanges()
        );
      var f = e.anchor,
        d = e.focus,
        h = f.getNode(),
        g = d.getNode(),
        _Zi = Zi(n, h, f.offset),
        _ = _Zi[0],
        p = _Zi[1],
        _Zi2 = Zi(n, g, d.offset),
        m = _Zi2[0],
        y = _Zi2[1],
        x = e.format,
        C = e.style,
        S = e.isCollapsed();
      var T = _,
        v = m,
        N = !1;
      if (
        ("text" === f.type
          ? ((T = oi(h) ? Da(h, _, n) : null),
            (N = h.getFormat() !== x || h.getStyle() !== C))
          : yi(t) && "text" === t.anchor.type && (N = !0),
        "text" === d.type && (v = oi(g) ? Da(g, m, n) : null),
        null !== T && null !== v)
      ) {
        if (
          (S &&
            (null === t || N || (yi(t) && (t.format !== x || t.style !== C))) &&
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
            var _t174 = null !== l ? Gl(l) : null;
            (null !== _t174 && _t174 !== n) ||
              r.has(vr) ||
              i.focus({ preventScroll: !0 });
          }
          if ("element" !== f.type) return;
        }
        if (
          (Qi(o, T, p, v, y), u && e.isCollapsed() && null !== i && !r.has(vr))
        ) {
          var _t175 = ma(i);
          if (null === _t175 || !i.contains(_t175)) {
            var _t176 = ya(i.ownerDocument),
              _e110 = null !== _t176 ? Gl(_t176) : null;
            (null !== _e110 && _e110 !== n) || i.focus({ preventScroll: !0 });
          }
        }
        if (!r.has(Sr) && e.isCollapsed() && null !== i && i === ma(i)) {
          var _t177 =
            yi(e) && "element" === e.anchor.type
              ? T.childNodes[p] || null
              : (void 0 === a && (a = da(o, i)), a);
          if (null !== _t177) {
            var _e111;
            if (Zl(_t177)) {
              var _n87 = _t177.ownerDocument.createRange();
              (_n87.selectNode(_t177), (_e111 = _n87.getBoundingClientRect()));
            } else _e111 = _t177.getBoundingClientRect();
            !(function (t, e, n) {
              var o = Kc(n),
                r = Hc(o);
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
                    var _t178 = _e113.offsetTop;
                    ((c = _t178), (a = _t178 + _e113.height));
                  } else ((c = 0), (a = Vc(t).innerHeight));
                  var _n88 = r.getComputedStyle(o.documentElement),
                    _i38 = parseFloat(_n88.scrollPaddingTop),
                    _s20 = parseFloat(_n88.scrollPaddingBottom);
                  (isFinite(_i38) && (c += _i38),
                    isFinite(_s20) && (a -= _s20));
                } else {
                  var _t179 = u === n ? i : u.getBoundingClientRect();
                  ((c = _t179.top), (a = _t179.bottom));
                }
                var _f12 = 0;
                if (
                  (s < c ? (_f12 = -(c - s)) : l > a && (_f12 = l - a),
                  0 !== _f12)
                )
                  if (_e112) r.scrollBy(0, _f12);
                  else {
                    var _t180 = u.scrollTop;
                    u.scrollTop += _f12;
                    var _e114 = u.scrollTop - _t180;
                    ((s -= _e114), (l -= _e114));
                  }
                if (_e112) break;
                u = Bc(u);
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
    function es(t, e) {
      for (var _n89 of t.split(/(\r?\n|\t)/))
        "\n" === _n89 || "\r\n" === _n89
          ? e.linebreak()
          : "\t" === _n89
            ? e.tab()
            : "" !== _n89 && e.text(_n89);
    }
    function ns(t) {
      var e = [];
      return (
        es(t, {
          linebreak: function linebreak() {
            return e.push(ol());
          },
          tab: function tab() {
            return e.push(li());
          },
          text: function text(t) {
            return e.push(ni(t));
          },
        }),
        e
      );
    }
    function os(t) {
      var e = [];
      for (var _n90 of t)
        rl(_n90) ||
          ((!js(_n90) && !Js(_n90)) || _n90.isInline()
            ? e.push(_n90)
            : js(_n90) && e.push.apply(e, Array.from(os(_n90.getChildren()))));
      return e;
    }
    function rs(e, n) {
      if (n === void 0) {
        n = !1;
      }
      var o = e;
      e.isCollapsed() || o.removeText();
      var r = Hi();
      (yi(r) && (o = r), yi(o) || t(161));
      var i = o.anchor;
      var s = i.getNode(),
        l = i.offset;
      for (; !Oa(s) && null === vu(s); ) {
        var _is;
        var _t181 = s;
        if (((_is = is(s, l, n)), (s = _is[0]), (l = _is[1]), _t181.is(s)))
          break;
      }
      return [s, l];
    }
    function is(t, e, n) {
      if (n === void 0) {
        n = !1;
      }
      var o = t.getParent();
      if (!o) {
        var _t182 = El();
        return (pc().append(_t182), _t182.select(), [pc(), 0]);
      }
      if (oi(t)) {
        var _n91 = t.splitText(e);
        if (0 === _n91.length) return [o, t.getIndexWithinParent()];
        var _r39 = 0 === e ? 0 : 1;
        return [o, _n91[0].getIndexWithinParent() + _r39];
      }
      if (!js(t) || 0 === e) return [o, t.getIndexWithinParent()];
      var r = t.getChildAtIndex(e);
      if (r) {
        var _o60 = new _xi(
            ui(t.__key, e, "element"),
            ui(t.__key, e, "element"),
            0,
            "",
          ),
          _i39 = t.insertNewAfter(_o60);
        if (_i39)
          _i39.append.apply(_i39, [r].concat(Array.from(r.getNextSiblings())));
        else if (n) return [t, e];
      }
      return [o, t.getIndexWithinParent() + 1];
    }
    function ss(t) {
      return rl(t) || Jc(t) || oi(t) || t.isParentRequired();
    }
    function ls(t) {
      var e = El();
      var n = null;
      for (var _o61 = 0; _o61 < t.length; _o61++) {
        var _r40 = t[_o61];
        if (ss(_r40)) {
          if (null === n) {
            ((n = _r40.createParentElementNode()), e.append(n));
            var _i40 = t[_o61 + 1];
            if (rl(_r40) && (void 0 === _i40 || !ss(_i40))) continue;
          }
          n.append(_r40);
        } else (e.append(_r40), (n = null));
      }
      return e;
    }
    function cs(t, e, n, o, r) {
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
      var i = cl(t.focus, n ? "previous" : "next"),
        s = "lineboundary" === o,
        l = "move" === e;
      var c = i,
        a = "decorators-and-blocks" === r,
        u = !1;
      if (!yl(c)) {
        for (var _t183 of c) {
          a = !1;
          var _e116 = _t183.origin;
          if (Js(_e116)) {
            if (_e116.isIsolated()) {
              u = !0;
              break;
            }
            if (((c = _t183), s && _e116.isInline())) continue;
          }
          break;
        }
        if (u) return !0;
        if (a)
          for (var _t184 of hf(i).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (Qu(_t184)) _t184.origin.isInline() || (c = _t184);
            else {
              if (js(_t184.origin)) continue;
              Js(_t184.origin) && !_t184.origin.isInline() && (c = _t184);
            }
            break;
          }
      }
      if (c === i) return !1;
      if (l && !s && Js(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t185 = Ui();
        return (_t185.add(c.origin.getKey()), yc(_t185), !0);
      }
      return ((c = ml(c)), l && al(t.anchor, c), al(t.focus, c), a || !s);
    }
    var as = null,
      us = null,
      fs = !1,
      ds = !1,
      hs = !1;
    var gs = new Set();
    var _s = 0;
    var ps = { characterData: !0, childList: !0, subtree: !0 };
    function ms() {
      return fs || (null !== as && as._readOnly);
    }
    function ys() {
      fs && t(13);
    }
    function xs() {
      _s > 99 && t(14);
    }
    function Cs() {
      return (null === as && t(195, vs()), as);
    }
    function Ss() {
      return (null === us && t(337, vs()), us);
    }
    function Ts() {
      Ss()._dirtyType = 2;
    }
    function vs() {
      var t = 0;
      var e = new Set(),
        n = _Ll.version;
      if ("undefined" != typeof window)
        for (var _o63 of ca(document)) {
          var _r41 = ql(_o63);
          if (Yl(_r41)) t++;
          else if (_r41) {
            var _t186 = String(_r41.constructor.version || "<0.17.1");
            (_t186 === n &&
              (_t186 +=
                " (separately built, likely a bundler configuration issue)"),
              e.add(_t186));
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
    function Ns() {
      return us;
    }
    function bs(t, e, n) {
      var o = e.__type,
        r = Wl(t, o);
      var i = n.get(o);
      void 0 === i && ((i = Array.from(r.transforms)), n.set(o, i));
      var s = i.length;
      for (var _t187 = 0; _t187 < s && (i[_t187](e), e.isAttached()); _t187++);
    }
    function ks(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function Os(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var o = e;
      Array.isArray(e) || (o = [e]);
      for (var _t188 of o) n.add(_t188);
    }
    function Es(e, n) {
      var o = e.type,
        r = n.get(o);
      void 0 === r && t(17, o);
      var i = r.klass;
      e.type !== i.getType() && t(18, i.name);
      var s = i.importJSON(e),
        l = e.children;
      if (js(s) && Array.isArray(l))
        for (var _t189 = 0; _t189 < l.length; _t189++) {
          var _e117 = Es(l[_t189], n);
          s.append(_e117);
        }
      var c = e.$slots;
      if (c) {
        Su(s) || t(379, i.name);
        for (var _t190 in c) {
          zu(s, _t190, Es(c[_t190], n));
        }
      }
      return s;
    }
    function Ms(t, e, n) {
      var o = as,
        r = fs,
        i = us;
      ((as = e), (fs = !0), (us = t));
      try {
        return n();
      } finally {
        ((as = o), (fs = r), (us = i));
      }
    }
    function As(t, e) {
      var n = hs;
      hs = !0;
      try {
        !(function (t, e) {
          var n = t._pendingEditorState,
            o = t._rootElement,
            r = t._headless || null === o;
          if (null === n)
            return void (
              !t._updating &&
              t._deferred.length > 0 &&
              Fs(t, t._deferred)
            );
          var i = t._editorState,
            s = i._selection,
            l = n._selection,
            c = 0 !== t._dirtyType,
            a = as,
            u = fs,
            f = us,
            d = t._updating,
            h = t._observer;
          var g = null;
          if (
            ((t._pendingEditorState = null),
            (t._editorState = n),
            !r && c && null !== h)
          ) {
            ((us = t), (as = n), (fs = !1), (t._updating = !0));
            try {
              var _e118 = t._dirtyType,
                _o64 = t._dirtyElements,
                _r42 = t._dirtyLeaves;
              (h.disconnect(), (g = pn(i, n, t, _e118, _o64, _r42)));
            } catch (e) {
              if ((e instanceof Error && t._onError(e), ds)) throw e;
              return (
                Dl(t, null, o, n),
                pt(t),
                (t._dirtyType = 2),
                (ds = !0),
                As(t, i),
                void (ds = !1)
              );
            } finally {
              (h.observe(o, ps),
                (t._updating = d),
                (as = a),
                (fs = u),
                (us = f));
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
              var i;
              for (i in o) r.has(i) || (o === n && (o = gc(t)), delete o[i]);
            })(t, n));
          var x = r ? null : oa(Vc(t));
          if (
            t._editable &&
            null !== x &&
            (c || null === l || l.dirty || !l.is(s)) &&
            null !== o &&
            !y.has(Tr)
          ) {
            ((us = t), (as = n));
            try {
              if ((null !== h && h.disconnect(), c || null === l || l.dirty)) {
                var _e119 = t._blockCursorElement;
                (null !== _e119 && na(_e119, t, o), ts(s, l, t, x, y, o));
              }
              !(function (t, e, n) {
                var o = t._blockCursorElement;
                if (
                  yi(n) &&
                  n.isCollapsed() &&
                  "element" === n.anchor.type &&
                  e.contains(ma(e))
                ) {
                  var _r43 = n.anchor,
                    _i41 = _r43.getNode(),
                    _s21 = _r43.offset;
                  var _l15 = !1,
                    _c12 = null;
                  if (_s21 === _i41.getChildrenSize()) {
                    ea(_i41.getChildAtIndex(_s21 - 1)) && (_l15 = !0);
                  } else {
                    var _e120 = _i41.getChildAtIndex(_s21);
                    null !== _e120 &&
                      ea(_e120) &&
                      ((_l15 = !0), (_c12 = t.getElementByKey(_e120.__key)));
                  }
                  if (_l15) {
                    var _n92 = Aa(
                      _i41,
                      t.getElementByKey(_i41.__key),
                      t,
                    ).element;
                    return (
                      null === o &&
                        (t._blockCursorElement = o =
                          (function (t) {
                            var e = t.theme,
                              n = ua().createElement("div");
                            ((n.contentEditable = "false"),
                              n.setAttribute("data-lexical-cursor", "true"));
                            var o = e.blockCursor;
                            if (void 0 !== o) {
                              var _n$classList;
                              if ("string" == typeof o) {
                                var _t191 = Tf(o);
                                o = e.blockCursor = _t191;
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
                        ? _n92.appendChild(o)
                        : _n92.insertBefore(o, _c12))
                    );
                  }
                }
                null !== o && na(o, t, e);
              })(t, o, l);
            } finally {
              (null !== h && h.observe(o, ps), (us = f), (as = a));
            }
          }
          null !== g &&
            (function (t, e, n, o, r) {
              var i = Array.from(t._listeners.mutation),
                s = i.length;
              for (var _t192 = 0; _t192 < s; _t192++) {
                var _i$_t = i[_t192],
                  _s22 = _i$_t[0],
                  _l16 = _i$_t[1];
                for (var _t193 of _l16) {
                  var _i42 = e.get(_t193);
                  void 0 !== _i42 &&
                    _s22(_i42, {
                      dirtyLeaves: o,
                      prevEditorState: r,
                      updateTags: n,
                    });
                }
              }
            })(t, g, y, _, i);
          yi(l) ||
            null === l ||
            (null !== s && s.is(l)) ||
            t.dispatchCommand(Cn);
          var C = t._pendingDecorators;
          null !== C &&
            ((t._decorators = C),
            (t._pendingDecorators = null),
            ws("decorator", t, !0, C));
          if (
            ((function (t, e, n) {
              var o = _c(e),
                r = _c(n);
              o !== r && ws("textcontent", t, !0, r);
            })(t, e || i, n),
            ws("update", t, !0, {
              dirtyElements: p,
              dirtyLeaves: _,
              editorState: n,
              mutatedNodes: g,
              normalizedNodes: m,
              prevEditorState: e || i,
              tags: y,
            }),
            !d)
          ) {
            Fs(t, t._deferred);
          }
          !(function (t) {
            var e = t._updates;
            if (0 === e.length) return void (t._cascadeCount = 0);
            if (
              ((function (t) {
                if (gs.has(t)) return;
                (gs.add(t),
                  setTimeout(function () {
                    (gs["delete"](t), (t._cascadeCount = 0));
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
              Ps(t, _e121, _o65);
            }
          })(t);
        })(t, e);
      } finally {
        hs = n;
      }
    }
    function ws(t, e, n) {
      var r = e._updating;
      e._updating = n;
      try {
        var _n93 = e._listeners[t],
          _r44 = Array.from(_n93);
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
          var _t194 = _ref38[0];
          var _e122 = _ref38[1];
          {
            _e122 && _e122();
            var _r45 = _t194.apply(void 0, Array.from(o)),
              _i43 = "function" == typeof _r45 ? _r45 : void 0;
            _n93.has(_t194) ? _n93.set(_t194, _i43) : _i43 && _i43();
          }
        }
      } finally {
        e._updating = r;
      }
    }
    function Ds(t, e, n, o) {
      var r = Tc(t);
      var i;
      if (!hs)
        for (var _t195 = 0; _t195 < r.length; _t195++)
          r[_t195]._updating || (r[_t195]._cascadeCount = 0);
      for (var _t196 = 4; _t196 >= 0; _t196--) {
        var _loop2 = function _loop2() {
            var l = r[_s23];
            if (_s23 > 0 && l._updating) {
              i = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e123 = c[_t196];
              if (_e123.size > 0) {
                var _t197 = !1;
                if (
                  (Rs(l, function () {
                    for (var _r46 of _e123)
                      if (_r46(n, o)) return void (_t197 = !0);
                  }),
                  _t197)
                )
                  return { v: _t197 };
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
            Ds(i, e, n, o);
          }),
        !1
      );
    }
    function Fs(t, e) {
      if (((t._deferred = []), 0 !== e.length)) {
        var _n94 = t._updating;
        t._updating = !0;
        try {
          for (var _t198 = 0; _t198 < e.length; _t198++) e[_t198]();
        } finally {
          t._updating = _n94;
        }
      }
    }
    function Is(e, n) {
      var o = e._updates;
      var r = n || !1;
      for (; 0 !== o.length; ) {
        var _n95 = o.shift();
        if (_n95) {
          var _o66 = _n95[0],
            _i44 = _n95[1],
            _s24 = e._pendingEditorState;
          var _l17 = void 0;
          (void 0 !== _i44 &&
            ((_l17 = _i44.onUpdate),
            _i44.skipTransforms && (r = !0),
            _i44.discrete && (null === _s24 && t(191), (_s24._flushSync = !0)),
            _l17 && e._deferred.push(_l17),
            Os(e, _i44.tag)),
            null == _s24 ? Ps(e, _o66, _i44) : _o66());
        }
      }
      return r;
    }
    function Ps(e, n, o) {
      var r = e._updateTags;
      var i,
        s = !1,
        l = !1;
      (void 0 !== o &&
        ((i = o.onUpdate),
        Os(e, o.tag),
        (s = o.skipTransforms || !1),
        (l = o.discrete || !1)),
        i && e._deferred.push(i));
      var c = e._editorState;
      var a = e._pendingEditorState,
        u = !1;
      ((null === a || a._readOnly) &&
        ((a = e._pendingEditorState = qs(a || c)), (u = !0)),
        (a._flushSync = l));
      var f = as,
        d = fs,
        h = us,
        g = e._updating;
      ((as = a), (fs = !1), (e._updating = !0), (us = e));
      var _ = e._headless || null === e.getRootElement();
      zl(null);
      try {
        u &&
          (_
            ? null !== c._selection && (a._selection = c._selection.clone())
            : (a._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  o = oa(Vc(t));
                return yi(n) || null == n ? ji(n, o, t, e) : n.clone();
              })(e, (o && o.event) || null)));
        var _r47 = e._compositionKey;
        (n(),
          (s = Is(e, s)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              o = t._selection;
            if (yi(o)) {
              var _t199 = o.anchor,
                _e124 = o.focus;
              var _r48;
              if (
                ("text" === _t199.type &&
                  ((_r48 = _t199.getNode()), _r48.selectionTransform(n, o)),
                "text" === _e124.type)
              ) {
                var _t200 = _e124.getNode();
                _r48 !== _t200 && _t200.selectionTransform(n, o);
              }
            }
          })(a, e),
          0 !== e._dirtyType &&
            (s
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = t._nodeMap;
                  for (var _t201 of n) {
                    var _e125 = o.get(_t201);
                    oi(_e125) &&
                      _e125.isAttached() &&
                      _e125.isSimpleText() &&
                      !_e125.isUnmergeable() &&
                      _e(_e125);
                  }
                })(a, e)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = e._dirtyElements,
                    r = t._nodeMap,
                    i = cc(),
                    s = new Map();
                  var l = n,
                    c = l.size,
                    a = o,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t202 of l) {
                        var _o67 = r.get(_t202);
                        (oi(_o67) &&
                          _o67.isAttached() &&
                          _o67.isSimpleText() &&
                          !_o67.isUnmergeable() &&
                          _e(_o67),
                          void 0 !== _o67 && ks(_o67, i) && bs(e, _o67, s),
                          n.add(_t202));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        _s++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t203 of a) {
                      var _n96 = _t203[0],
                        _l18 = _t203[1];
                      if ((o.set(_n96, _l18), !_l18)) continue;
                      var _c13 = r.get(_n96);
                      void 0 !== _c13 && ks(_c13, i) && bs(e, _c13, s);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      _s++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = o));
                })(a, e),
            Is(e),
            (function (t, e, n, o) {
              var r = t._nodeMap,
                i = e._nodeMap,
                s = [];
              for (var _ref40 of o) {
                var _t204 = _ref40[0];
                {
                  var _e126 = i.get(_t204);
                  void 0 !== _e126 &&
                    (_e126.isAttached() ||
                      (js(_e126) && st(_e126, _t204, r, i, s, o),
                      r.has(_t204) || o["delete"](_t204),
                      s.push(_t204)));
                }
              }
              for (var _t205 of n) {
                var _e127 = i.get(_t205);
                void 0 === _e127 ||
                  _e127.isAttached() ||
                  (Su(_e127) &&
                    null !== _e127.__slots &&
                    st(_e127, _t205, r, i, s, n),
                  r.has(_t205) || n["delete"](_t205),
                  s.push(_t205));
              }
              for (var _t206 of s) i["delete"](_t206);
              var l = Ss(),
                c = l._compositionKey;
              null === c || i.has(c) || (l._compositionKey = null);
            })(c, a, e._dirtyLeaves, e._dirtyElements)));
        _r47 !== e._compositionKey && (a._flushSync = !0);
        var _i45 = a._selection;
        if (yi(_i45)) {
          e._slotsUsed && $i(_i45);
          var _n97 = a._nodeMap,
            _o68 = _i45.anchor.key,
            _r49 = _i45.focus.key;
          (void 0 !== _n97.get(_o68) && void 0 !== _n97.get(_r49)) || t(19);
        } else Ci(_i45) && 0 === _i45._nodes.size && (a._selection = null);
      } catch (t) {
        return (
          t instanceof Error && e._onError(t),
          (e._pendingEditorState = c),
          (e._dirtyType = 2),
          e._cloneNotNeeded.clear(),
          (e._dirtyLeaves = new Set()),
          e._dirtyElements.clear(),
          void As(e)
        );
      } finally {
        ((as = f), (fs = d), (us = h), (e._updating = g), (_s = 0));
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
          ? ((a._flushSync = !1), As(e))
          : u &&
            jl(function () {
              As(e);
            })
        : ((a._flushSync = !1),
          u && (r.clear(), (e._deferred = []), (e._pendingEditorState = null)));
    }
    function Rs(t, e, n) {
      us === t && void 0 === n ? (ms() ? Ps(t, e, n) : e()) : Ps(t, e, n);
    }
    function Ls() {
      return babelHelpers["extends"]({}, P, { 0: "" });
    }
    function $s() {
      return babelHelpers["extends"]({}, F, { "": 0 });
    }
    var zs = Ls(),
      Bs = $s(),
      Ks = Jt()({
        direction: Gt(Ht([null, "ltr", "rtl"]), { field: "__dir" }),
        format: Gt(
          Ht(["", "left", "start", "center", "right", "end", "justify"]),
          {
            field: "__format",
            getter: "getFormatType",
            getterTable: zs,
            setter: "setFormat",
            setterTable: Bs,
          },
        ),
        indent: Gt(jt(0, { integer: !0, min: 0 }), { field: "__indent" }),
        textFormat: qt(jt(), {
          getter: {
            field: "__textFormat",
            method: "getSerializedTextFormat",
            when: "shouldSerializeTextStyles",
          },
          setter: { field: "__textFormat" },
        }),
        textStyle: qt(Wt(), {
          getter: {
            field: "__textStyle",
            method: "getSerializedTextStyle",
            when: "shouldSerializeTextStyles",
          },
          setter: { field: "__textStyle" },
        }),
      });
    function Ws(t) {
      if (qc(t)) {
        var _e128 = null;
        for (var _n98 of t.getChildren())
          _e128 = _n98.isInline()
            ? (_e128 || _n98.replace(_n98.createParentElementNode())).append(
                _n98,
              )
            : null;
      }
    }
    var _Us4 = (function (_mr2) {
      function Us(t) {
        var _this3;
        ((_this3 = _mr2.call(this, t) || this),
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
      babelHelpers.inheritsLoose(Us, _mr2);
      var _proto11 = Us.prototype;
      _proto11.$config = function $config() {
        return this.config(Symbol["for"]("ElementNode"), {
          $transform: Ws,
          extends: _mr5,
          generated: Mr,
          json: Ks,
        });
      };
      _proto11.afterCloneFrom = function afterCloneFrom(e) {
        (_mr2.prototype.afterCloneFrom.call(this, e),
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
        return 0 === this.getChildrenSize() && 0 === Eu(this).length;
      };
      _proto11.isDirty = function isDirty() {
        var t = Ss()._dirtyElements;
        return null !== t && t.has(this.__key);
      };
      _proto11.isLastChild = function isLastChild() {
        var t = this.getLatest(),
          e = this.getParentOrThrow().getLastChild();
        return null !== e && e.is(t);
      };
      _proto11.getAllTextNodes = function getAllTextNodes() {
        var t = [];
        for (var _e129 of Eu(this)) {
          var _n99 = Mu(this, _e129);
          if (js(_n99)) for (var _e130 of _n99.getAllTextNodes()) t.push(_e130);
        }
        var e = this.getFirstChild();
        for (; null !== e; ) {
          if ((oi(e) && t.push(e), js(e)))
            for (var _n100 of e.getAllTextNodes()) t.push(_n100);
          e = e.getNextSibling();
        }
        return t;
      };
      _proto11.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; js(t); ) {
          var _e131 = t.getFirstChild();
          if (null === _e131) break;
          t = _e131;
        }
        return t;
      };
      _proto11.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; js(t); ) {
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
          var _t207 = e[n - 1];
          return (js(_t207) && _t207.getLastDescendant()) || _t207 || null;
        }
        var o = e[t];
        return (js(o) && o.getFirstDescendant()) || o || null;
      };
      _proto11.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : ac(t);
      };
      _proto11.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var e = this.getFirstChild();
        return (null === e && t(45, this.__key), e);
      };
      _proto11.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : ac(t);
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
        var t = Ru(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o69 = 0; _o69 < n; _o69++) {
          var _r50 = e[_o69];
          ((t += _r50.getTextContent()),
            js(_r50) && _o69 !== n - 1 && !_r50.isInline() && (t += N));
        }
        return t;
      };
      _proto11.getTextContentSize = function getTextContentSize() {
        var t = (function (t) {
          var e = 0;
          for (var _n101 of Eu(t)) {
            var _o70 = Mu(t, _n101);
            null !== _o70 && (e += _o70.getTextContentSize());
          }
          return e;
        })(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o71 = 0; _o71 < n; _o71++) {
          var _r51 = e[_o71];
          ((t += _r51.getTextContentSize()),
            js(_r51) && _o71 !== n - 1 && !_r51.isInline() && (t += 2));
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
          var _e133 = F[t];
          return 0 !== (this.getFormat() & _e133);
        }
        return !1;
      };
      _proto11.hasTextFormat = function hasTextFormat(t) {
        var e = w[t];
        return 0 !== (this.getTextFormat() & e);
      };
      _proto11.getFormatFlags = function getFormatFlags(t, e) {
        return nc(this.getLatest().__textFormat, t, e);
      };
      _proto11.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto11.select = function select(t, e) {
        ys();
        var n = Hi();
        var o = t,
          r = e;
        var i = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t208 = this.getFirstChild();
            if (oi(_t208) || js(_t208)) return _t208.select(0, 0);
          } else if (
            !((void 0 !== t && t !== i) || (void 0 !== e && e !== i))
          ) {
            var _t209 = this.getLastChild();
            if (oi(_t209) || js(_t209)) return _t209.select();
          }
        (void 0 === o && (o = i), void 0 === r && (r = i));
        var s = this.__key;
        return yi(n)
          ? (n.anchor.set(s, o, "element"),
            n.focus.set(s, r, "element"),
            (n.dirty = !0),
            n)
          : Ki(s, o, s, r, "element", "element");
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
        return ((e.__format = ("" !== t && F[t]) || 0), e);
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
        _r(this) && t(324, this.__key, this.__type);
        var r = this.getChildrenSize(),
          i = this.getWritable();
        e + n <= r || t(226, String(e), String(n), String(r));
        for (var _t210 of o);
        var s = i.__key,
          l = [],
          c = [];
        var a = this.getChildAtIndex(e + n),
          u = null,
          f = r - n + o.length;
        if (0 !== e)
          if (e === r) u = this.getLastChild();
          else {
            var _t211 = this.getChildAtIndex(e);
            null !== _t211 && (u = _t211.getPreviousSibling());
          }
        if (n > 0) {
          var _e134 = null === u ? this.getFirstChild() : u.getNextSibling();
          for (var _o72 = 0; _o72 < n; _o72++) {
            null === _e134 && t(100);
            var _n102 = _e134.getNextSibling(),
              _o73 = _e134.__key;
            (rc(_e134.getWritable()), c.push(_o73), (_e134 = _n102));
          }
        }
        var d = u;
        for (var _e135 of o) {
          (null !== d && _e135.is(d) && (u = d = d.getPreviousSibling()),
            null !== a && _e135.is(a) && (a = a.getNextSibling()));
          var _n103 = _e135.getWritable();
          (_n103.__parent === s && f--, rc(_n103));
          var _o74 = _e135.__key;
          if (null === d) ((i.__first = _o74), (_n103.__prev = null));
          else {
            var _t212 = d.getWritable();
            ((_t212.__next = _o74), (_n103.__prev = _t212.__key));
          }
          (_e135.__key === s && t(76),
            (_n103.__parent = s),
            l.push(_o74),
            (d = _e135));
        }
        if (null === a) {
          if (null !== d) {
            ((d.getWritable().__next = null), (i.__last = d.__key));
          }
        } else {
          var _t213 = a.getWritable();
          if (null !== d) {
            var _e136 = d.getWritable();
            ((_t213.__prev = d.__key), (_e136.__next = a.__key));
          } else _t213.__prev = null;
        }
        if (((i.__size = f), c.length)) {
          var _t214 = Hi();
          if (yi(_t214)) {
            var _e137 = new Set(c),
              _n104 = new Set(l),
              _o75 = _t214.anchor,
              _r52 = _t214.focus;
            (Hs(_o75, _e137, _n104) && qi(_o75, _o75.getNode(), this, u, a),
              Hs(_r52, _e137, _n104) && qi(_r52, _r52.getNode(), this, u, a),
              0 !== f || this.canBeEmpty() || qc(this) || this.remove());
          }
        }
        return i;
      };
      _proto11.getDOMSlot = function getDOMSlot(t) {
        return new _Y(t);
      };
      _proto11.exportDOM = function exportDOM(t) {
        var _mr2$prototype$export = _mr2.prototype.exportDOM.call(this, t),
          e = _mr2$prototype$export.element;
        if (Ca(e)) {
          var _t215 = this.getIndent();
          _t215 > 0 &&
            ((e.style.paddingInlineStart = 40 * _t215 + "px"),
            e.setAttribute("data-lexical-indent", String(_t215)));
          var _n105 = this.getDirection();
          _n105 && (e.dir = _n105);
        }
        return { element: e };
      };
      _proto11.shouldSerializeTextStyles =
        function shouldSerializeTextStyles() {
          if (qc(this)) return !1;
          for (
            var _t216 = this.getFirstChild();
            null !== _t216;
            _t216 = _t216.getNextSibling()
          )
            if (oi(_t216)) return !1;
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
        var n = Aa(this, t, e);
        var o = n.getFirstChild();
        for (
          var _t217 = this.getFirstChild();
          _t217;
          _t217 = _t217.getNextSibling()
        ) {
          var _r53 = e.getElementByKey(_t217.getKey());
          null !== _r53 &&
            (null == o
              ? (n.insertChild(_r53), (o = _r53))
              : o !== _r53 && n.replaceChild(_r53, o),
            (o = o.nextSibling));
        }
      };
      return Us;
    })(_mr5);
    function js(t) {
      return t instanceof _Us4;
    }
    function Hs(t, e, n) {
      var o = t.getNode();
      for (; o; ) {
        var _t218 = o.__key;
        if (e.has(_t218) && !n.has(_t218)) return !0;
        o = o.getParent();
      }
      return !1;
    }
    var _Vs = (function (_mr3) {
      function Vs(t) {
        var _this4;
        ((_this4 = _mr3.call(this, t) || this),
          (_this4.__slotHost = null),
          (_this4.__slots = null));
        return _this4;
      }
      babelHelpers.inheritsLoose(Vs, _mr3);
      var _proto12 = Vs.prototype;
      _proto12.afterCloneFrom = function afterCloneFrom(e) {
        (_mr3.prototype.afterCloneFrom.call(this, e),
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
      return Vs;
    })(_mr5);
    function Js(t) {
      return t instanceof _Vs;
    }
    var _Ys = (function (_Us) {
      function Ys() {
        var _this5;
        ((_this5 = _Us.call(this, "root") || this),
          (_this5.__cachedText = null));
        return _this5;
      }
      babelHelpers.inheritsLoose(Ys, _Us);
      var _proto13 = Ys.prototype;
      _proto13.$config = function $config() {
        return this.config("root", { extends: _Us4 });
      };
      _proto13.getTopLevelElementOrThrow =
        function getTopLevelElementOrThrow() {
          t(51);
        };
      _proto13.getTextContent = function getTextContent() {
        var t = this.__cachedText;
        return null === t || (!ms() && 0 !== Ss()._dirtyType)
          ? _Us.prototype.getTextContent.call(this)
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
        for (var _e138 of o) js(_e138) || Js(_e138) || t(282);
        return _Us.prototype.splice.call(this, e, n, o);
      };
      Ys.importJSON = function importJSON(t) {
        return pc().updateFromJSON(t);
      };
      _proto13.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return Ys;
    })(_Us4);
    function Gs(t) {
      return t instanceof _Ys;
    }
    function qs(t) {
      return new _Zs(tt(t._nodeMap), null, t._slotsUsed);
    }
    function Xs() {
      return new _Zs(new Map([["root", new _Ys()]]), null, !1);
    }
    function Qs(e) {
      var n = e.constructor,
        o = it(e);
      if (js(e)) {
        var _t219 = o.children,
          _n106 = e.getChildren();
        for (var _e139 = 0; _e139 < _n106.length; _e139++)
          _t219.push(Qs(_n106[_e139]));
      }
      var r = Eu(e);
      if (r.length > 0) {
        var _i46 = {};
        for (var _o76 of r) {
          var _r54 = Mu(e, _o76);
          (null === _r54 && t(366, n.name, _o76), (_i46[_o76] = Qs(_r54)));
        }
        o.$slots = _i46;
      }
      return o;
    }
    var _Zs = (function () {
      function Zs(t, e, n) {
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
      var _proto14 = Zs.prototype;
      _proto14.isEmpty = function isEmpty() {
        return this._nodeMap.size <= 1 && null === this._selection;
      };
      _proto14.read = function read(t, e) {
        return Ms((e && e.editor) || null, this, t);
      };
      _proto14.clone = function clone(t) {
        var e = new Zs(
          this._nodeMap,
          void 0 === t ? this._selection : t,
          this._slotsUsed,
        );
        return ((e._readOnly = !0), (e._parsed = this._parsed), e);
      };
      _proto14.toJSON = function toJSON(t) {
        var _this14 = this;
        return ot("boolean" == typeof t && t, function () {
          return Ms(null, _this14, function () {
            return { root: Qs(pc()) };
          });
        });
      };
      return Zs;
    })();
    var _tl = (function (_Us2) {
      function tl() {
        return _Us2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(tl, _Us2);
      var _proto15 = tl.prototype;
      _proto15.$config = function $config() {
        return this.config("artificial", { extends: _Us4 });
      };
      _proto15.createDOM = function createDOM(t) {
        return ua().createElement("div");
      };
      return tl;
    })(_Us4);
    var _el = (function (_mr4) {
      function el() {
        return _mr4.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(el, _mr4);
      var _proto16 = el.prototype;
      _proto16.$config = function $config() {
        return this.config("linebreak", {
          extends: _mr5,
          generated: Fr,
          importDOM: {
            br: function br(t) {
              return il(t) || sl(t) ? null : { conversion: nl, priority: 0 };
            },
          },
        });
      };
      _proto16.getTextContent = function getTextContent() {
        return "\n";
      };
      _proto16.createDOM = function createDOM() {
        return ua().createElement("br");
      };
      _proto16.updateDOM = function updateDOM() {
        return !1;
      };
      _proto16.isInline = function isInline() {
        return !0;
      };
      return el;
    })(_mr5);
    function nl(t) {
      return { node: ol() };
    }
    function ol() {
      return Qc(new _el());
    }
    function rl(t) {
      return t instanceof _el;
    }
    function il(t) {
      var e = t.parentElement;
      if (null !== e && ka(e)) {
        var _n107 = e.firstChild;
        if (_n107 === t || (_n107.nextSibling === t && ll(_n107))) {
          var _n108 = e.lastChild;
          if (_n108 === t || (_n108.previousSibling === t && ll(_n108)))
            return !0;
        }
      }
      return !1;
    }
    function sl(t) {
      var e = t.parentElement;
      if (null !== e && ka(e)) {
        var _n109 = e.firstChild;
        if (_n109 === t || (_n109.nextSibling === t && ll(_n109))) return !1;
        var _o77 = e.lastChild;
        if (_o77 === t || (_o77.previousSibling === t && ll(_o77))) return !0;
      }
      return !1;
    }
    function ll(t) {
      return Zl(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    function cl(e, n) {
      var o = e.type,
        r = e.key,
        i = e.offset,
        s = ta(e.key);
      return "text" === o
        ? (oi(s) || t(266, s.getType(), r), of(s, n, i))
        : (js(s) || t(267, s.getType(), r), Cl(s, e.offset, n));
    }
    function al(e, n) {
      var o = n.origin,
        r = n.direction,
        i = "next" === r;
      qu(n)
        ? e.set(o.getKey(), n.offset, "text")
        : Xu(n)
          ? oi(o)
            ? e.set(o.getKey(), rf(o, r), "text")
            : e.set(
                o.getParentOrThrow().getKey(),
                o.getIndexWithinParent() + (i ? 1 : 0),
                "element",
              )
          : ((Qu(n) && js(o)) || t(268),
            e.set(o.getKey(), i ? 0 : o.getChildrenSize(), "element"));
    }
    function ul(t) {
      var e = Hi(),
        n = yi(e) ? e : Wi();
      return (fl(n, t), yc(n), n);
    }
    function fl(t, e) {
      (al(t.anchor, e.anchor), al(t.focus, e.focus));
    }
    function dl(t) {
      var e = t.anchor,
        n = t.focus,
        o = cl(e, "next"),
        r = cl(n, "next"),
        i = mf(o, r) <= 0 ? "next" : "previous";
      return _f(df(o, i), df(r, i));
    }
    function hl(t) {
      var e = t.direction,
        n = t.origin,
        o = nf(n, Vu(e)).getNodeAtCaret();
      return o ? nf(o, e) : lf(n.getParentOrThrow(), e);
    }
    function gl(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _o78 = Qu(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _o78;
        _o78 = _o78.getParentCaret(e)
      )
        n.push(hl(_o78));
      return n;
    }
    function _l(t) {
      return !!t && t.origin.isAttached();
    }
    function pl(e, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (e.isCollapsed()) return e;
      var o = "root",
        r = "next";
      var i = n;
      var s = xl(e, r);
      var l = s.anchor.origin;
      for (; null !== l && !qc(l); ) l = l.getParent();
      var c = js(l) ? l.getFirstChild() : null,
        a = gl(s.anchor, o),
        u = gl(s.focus.getFlipped(), o),
        f = new Set(),
        d = [];
      for (var _t220 of s.iterNodeCarets(o))
        if (Qu(_t220)) f.add(_t220.origin.getKey());
        else if (Xu(_t220)) {
          var _e140 = _t220.origin;
          (js(_e140) && !f.has(_e140.getKey())) || d.push(_e140);
        }
      var h = new Set();
      for (var _t221 of d) {
        var _e141 = _t221.getParent();
        (null === _e141 || f.has(_e141.getKey()) || h.add(_e141), rc(_t221));
      }
      for (var _t222 of h)
        !_t222.canBeEmpty() &&
          !qc(_t222) &&
          _t222.isEmpty() &&
          _t222.isAttached() &&
          _t222.remove();
      for (var _t223 of s.getTextSlices()) {
        if (!_t223) continue;
        var _e142 = _t223.caret.origin,
          _n110 = _e142.getTextContentSize(),
          _o79 = hl(nf(_e142, r)),
          _s25 = _e142.getMode();
        if (
          (Math.abs(_t223.distance) === _n110 && "removeEmptySlices" === i) ||
          ("token" === _s25 && 0 !== _t223.distance)
        )
          _o79.remove();
        else if (0 !== _t223.distance) {
          i = "removeEmptySlices";
          var _e143 = _t223.removeTextSlice();
          var _n111 = _t223.caret.origin;
          if ("segmented" === _s25) {
            var _t224 = _e143.origin,
              _n112 = ni(_t224.getTextContent())
                .setStyle(_t224.getStyle())
                .setFormat(_t224.getFormat());
            (_o79.replaceOrInsert(_n112), (_e143 = of(_n112, r, _e143.offset)));
          }
          (_n111.is(a[0].origin) && (a[0] = _e143),
            _n111.is(u[0].origin) && (u[0] = _e143.getFlipped()));
        }
      }
      var g, _;
      for (var _t225 of a)
        if (_l(_t225)) {
          g = ml(_t225);
          break;
        }
      for (var _t226 of u)
        if (_l(_t226)) {
          _ = ml(_t226);
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
              if (qc(_r55)) return;
              !n && e(_r55) && (n = _r55);
            }
            return n;
          },
          u = a(i, Oa),
          f =
            u &&
            a(s, function (t) {
              return n.has(t.getKey()) && Oa(t);
            });
        if (f && Eu(f).length > 0) return null;
        return u && f ? [u, f] : null;
      })(g, _, f);
      if (p) {
        var _t227 = p[0],
          _e144 = p[1];
        lf(_t227, "previous").splice(0, _e144.getChildren());
        var _n113 = _e144.getParent();
        for (_e144.remove(!0); _n113 && _n113.isEmpty(); ) {
          var _t228 = _n113;
          ((_n113 = _n113.getParent()), _t228.remove(!0));
        }
      } else if (_) {
        var _t229 = (function (t) {
            if (Qu(t)) {
              var _e146 = t.origin;
              if (Oa(_e146)) return _e146;
            } else {
              var _e147 = t.getParentAtCaret();
              if (_e147 && Oa(_e147)) return _e147;
            }
            return null;
          })(_),
          _e145 = _t229 && _t229.getParent(),
          _n114 = _t229 && _t229.getParents().findLast(Gc);
        if (
          _t229 &&
          _e145 &&
          !Gs(_e145) &&
          _t229.isEmpty() &&
          f.has(_t229.getKey()) &&
          0 === Eu(_t229).length &&
          (!_n114 || f.has(_n114.getKey()))
        ) {
          _t229.remove(!0);
          var _n115 = _e145;
          for (; _n115 && !Gs(_n115) && _n115.isEmpty(); ) {
            var _t230 = _n115.getParent();
            if (
              _t230 &&
              Gs(_t230) &&
              _t230.getChildrenSize() <= 1 &&
              _n115.canBeEmpty()
            )
              break;
            var _e148 = _n115;
            ((_n115 = _t230), _e148.remove(!0));
          }
        }
      }
      null === mc(l, c) && mc(pc(), null);
      var m = [g, _].concat(Array.from(a), Array.from(u)).find(_l);
      if (m) {
        return gf(df(ml(m), e.direction));
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
    function ml(t) {
      var e = (function (t) {
          var e = t;
          for (; Qu(e); ) {
            var _t231 = af(e);
            if (!Qu(_t231)) break;
            e = _t231;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (oi(e.origin)) return qu(e) ? e : of(e.origin, n, n);
      var o = e.getAdjacentCaret();
      return Xu(o) && oi(o.origin) ? of(o.origin, n, Vu(n)) : e;
    }
    function yl(t) {
      return qu(t) && t.offset !== rf(t.origin, t.direction);
    }
    function xl(t, e) {
      return t.direction === e ? t : _f(df(t.focus, e), df(t.anchor, e));
    }
    function Cl(t, e, n) {
      var o = lf(t, "next");
      for (var _t232 = 0; _t232 < e; _t232++) {
        var _t233 = o.getAdjacentCaret();
        if (null === _t233) break;
        o = _t233;
      }
      return df(o, n);
    }
    function Sl(e) {
      var n = e.origin,
        o = e.offset,
        r = e.direction;
      if (o === rf(n, r)) return e.getSiblingCaret();
      if (o === rf(n, Vu(r))) return hl(e.getSiblingCaret());
      var _n$splitText2 = n.splitText(o),
        i = _n$splitText2[0];
      return (oi(i) || t(281), df(nf(i, "next"), r));
    }
    function Tl(t, e) {
      return !0;
    }
    function vl(t, _temp) {
      var _ref41 = _temp === void 0 ? {} : _temp,
        _ref41$$copyElementNo = _ref41.$copyElementNode,
        e = _ref41$$copyElementNo === void 0 ? Xc : _ref41$$copyElementNo,
        _ref41$$splitTextPoin = _ref41.$splitTextPointCaretNext,
        n = _ref41$$splitTextPoin === void 0 ? Sl : _ref41$$splitTextPoin,
        _ref41$rootMode = _ref41.rootMode,
        o = _ref41$rootMode === void 0 ? "shadowRoot" : _ref41$rootMode,
        _ref41$$shouldSplit = _ref41.$shouldSplit,
        r = _ref41$$shouldSplit === void 0 ? Tl : _ref41$$shouldSplit,
        _ref41$removeEmptyDes = _ref41.removeEmptyDestination,
        i = _ref41$removeEmptyDes === void 0 ? !1 : _ref41$removeEmptyDes;
      if (qu(t)) return n(t);
      var s = t.getParentCaret(o);
      if (s) {
        var _n116 = s.origin;
        if (Qu(t)) {
          var _t234 = hl(s);
          if (i && _n116.isEmpty()) return (_n116.remove(), _t234);
          if (!_n116.canBeEmpty() || !r(_n116, "first")) return _t234;
        }
        var _o81 = (function (t) {
          var e = [];
          for (
            var _n117 = t.getAdjacentCaret();
            _n117;
            _n117 = _n117.getAdjacentCaret()
          )
            e.push(_n117.origin);
          return e;
        })(t);
        (_o81.length > 0 || (!i && _n116.canBeEmpty() && r(_n116, "last"))) &&
          s.insert(e(_n116).splice(0, 0, _o81));
      }
      return s;
    }
    function Nl(e, n, o) {
      var r = df(n, "next");
      (qu(r) &&
        (0 === r.offset
          ? (r = nf(r.origin, "previous").getFlipped())
          : r.offset === r.origin.getTextContentSize() &&
            (r = nf(r.origin, "next"))),
        r.origin.is(e) &&
          (Xu(r) || t(342, e.getKey(), e.getType()), (r = hl(r))),
        (e.is(r.getNodeAtCaret()) || e.is(r.getFlipped().getNodeAtCaret())) &&
          e.remove(!0));
      for (var _t235 = r; _t235; _t235 = vl(_t235, o)) r = _t235;
      return (
        qu(r) && t(283),
        r.insert(e.isInline() ? El().append(e) : e),
        df(nf(e.getLatest(), "next"), n.direction)
      );
    }
    function bl(t, e) {
      var n = xl(yi(e) ? dl(e) : e, "next"),
        o = ku(n.anchor.origin),
        r = ku(t.getLatest());
      if (null === o ? null !== r : !o.is(r)) return !1;
      var i = ml(lf(t, "next")),
        s = df(ml(lf(t, "previous")), "next");
      return mf(n.anchor, i) <= 0 && mf(n.focus, s) >= 0;
    }
    var _kl = (function (_Us3) {
      function kl() {
        return _Us3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(kl, _Us3);
      var _proto17 = kl.prototype;
      _proto17.$config = function $config() {
        return this.config("paragraph", {
          extends: _Us4,
          generated: Dr,
          importDOM: {
            p: function p() {
              return { conversion: Ol, priority: 0 };
            },
          },
        });
      };
      _proto17.createDOM = function createDOM(t) {
        var e = ua().createElement("p"),
          n = Fc(t.theme, "paragraph");
        if (void 0 !== n) {
          var _e$classList2;
          (_e$classList2 = e.classList).add.apply(_e$classList2, Array.from(n));
        }
        return e;
      };
      _proto17.updateDOM = function updateDOM(t, e, n) {
        return !1;
      };
      _proto17.exportDOM = function exportDOM(t) {
        var _Us3$prototype$export = _Us3.prototype.exportDOM.call(this, t),
          e = _Us3$prototype$export.element;
        if (Ca(e)) {
          this.isEmpty() && e.append(ua().createElement("br"));
          var _t236 = this.getFormatType();
          _t236 && (e.style.textAlign = _t236);
        }
        return { element: e };
      };
      _proto17.exportJSON = function exportJSON(t) {
        if (t === void 0) {
          t = !1;
        }
        var e = _Us3.prototype.exportJSON.call(this, t);
        if (void 0 === e.textFormat || void 0 === e.textStyle) {
          var _n118 = this.getChildren().find(oi),
            _o82 = _n118 ? _n118.getFormat() : this.getTextFormat(),
            _r56 = _n118 ? _n118.getStyle() : this.getTextStyle();
          ((t && 0 === _o82) || (e.textFormat = _o82),
            (t && "" === _r56) || (e.textStyle = _r56));
        }
        return e;
      };
      _proto17.extractWithChild = function extractWithChild(t, e, n) {
        if (!yi(e)) return !1;
        if (
          "" === this.getFormatType() &&
          0 === this.getIndent() &&
          "" === this.getStyle()
        )
          return !1;
        if (bl(this, e)) {
          var _t237 = this.getTextContent();
          return "" !== _t237 && e.getTextContent() === _t237;
        }
        return !1;
      };
      _proto17.insertNewAfter = function insertNewAfter(t, e) {
        var n = El();
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
            return oi(t) && !/\S/.test(t.getTextContent());
          })
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return kl;
    })(_Us4);
    function Ol(t) {
      var e = El();
      if ((za(e, t), La(t, e), "" === e.getFormatType())) {
        var _n119 = t.getAttribute("align");
        _n119 && _n119 && _n119 in F && e.setFormat(_n119);
      }
      return ($a(e, t), { node: e });
    }
    function El() {
      return Qc(new _kl());
    }
    function Ml(t) {
      return t instanceof _kl;
    }
    function Al(t) {
      console.warn(t);
    }
    var wl = 0;
    function Dl(t, e, n, o, r) {
      var i = t._keyToDOMMap;
      (i.clear(),
        (t._editorState = Xs()),
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
            var n = "__lexicalKey_" + e._key;
            delete t[n];
          })(e, t)),
        null !== n &&
          ((n.textContent = ""), i.set("root", n), fc(n, t, "root")));
    }
    function Fl(t) {
      var e = new Set(),
        n = new Set();
      for (var _ref43 of _u(t)) {
        var _o83 = _ref43.klass;
        var _r57 = _ref43.ownNodeConfig;
        {
          var _t238 = _o83.transform;
          if (!n.has(_t238)) {
            n.add(_t238);
            var _r58 = _o83.transform();
            _r58 && e.add(_r58);
          }
          if (_r57) {
            var _t239 = _r57.$transform;
            _t239 && e.add(_t239);
          }
        }
      }
      return e;
    }
    var Il = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, o) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = Ul(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, o, r) {
        return js(t) && t.extractWithChild(e, n, o);
      },
      $getDOMSlot: function $getDOMSlot(t, e, n) {
        return t.getDOMSlot(e);
      },
      $getSlotTargetElement: function $getSlotTargetElement(t, e, n, o) {
        return null;
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return js(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, o) {
        return t.updateDOM(e, n, o._config);
      },
    };
    function Pl(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function Rl(t, e, n) {
      return (t.set(e, n), Pl.bind(null, t, e));
    }
    var _Ll = (function () {
      function Ll(t, e, n, o, r, i, s, l, c) {
        ((this._createEditorArgs = c),
          (this._parentEditor = e),
          (this._rootElement = null),
          (this._editorState = t),
          (this._pendingEditorState = null),
          (this._compositionKey = null),
          (this._deferred = []),
          (this._keyToDOMMap = new _et()),
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
          (this._key = vc()),
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
      var _proto18 = Ll.prototype;
      _proto18.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto18.registerUpdateListener = function registerUpdateListener(t) {
        return Rl(this._listeners.update, t);
      };
      _proto18.registerEditableListener = function registerEditableListener(t) {
        return Rl(this._listeners.editable, t);
      };
      _proto18.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return Rl(this._listeners.decorator, t);
      };
      _proto18.registerTextContentListener =
        function registerTextContentListener(t) {
          return Rl(this._listeners.textcontent, t);
        };
      _proto18.registerRootListener = function registerRootListener(t) {
        var _this15 = this;
        var e = this._listeners.root;
        return vf(Rl(e, t, t(this._rootElement, null) || void 0), function () {
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
          r.set(e, [new _Q(), new _Q(), new _Q(), new _Q(), new _Q()]);
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
          o = Pa(n).get(e.getType());
        if (!o) return;
        var r = new Map();
        for (var _t240 of o.keys()) r.set(_t240, "created");
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
          var _t241 = this.registerNodeTransformToKlass(r, e);
          o.push(_t241);
        }
        return (
          (function (t, e) {
            var n = Pa(t.getEditorState()),
              o = [];
            for (var _t242 of e) {
              var _e149 = n.get(_t242);
              _e149 && o.push(_e149);
            }
            if (0 === o.length) return;
            t.update(
              function () {
                for (var _t243 of o)
                  for (var _e150 of _t243.keys()) {
                    var _t244 = ac(_e150);
                    _t244 && _t244.markDirty();
                  }
              },
              null === t._pendingEditorState ? { tag: xr } : void 0,
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
        return $c.apply(void 0, [this, t].concat(Array.from(e)));
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
          var _n120 = Fc(this._config.theme, "root"),
            _o84 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            Dl(this, e, t, _o84, { preserveUpdateQueue: !0 }),
            null !== e &&
              (this._config.disableEvents || dr(e),
              null != _n120 &&
                (_e$classList3 = e.classList).remove.apply(
                  _e$classList3,
                  Array.from(_n120),
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e151 = Hc(t),
              _o85 = t.style;
            ((_o85.userSelect = "text"),
              (_o85.whiteSpace = "pre-wrap"),
              (_o85.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e151),
              (this._dirtyType = 2),
              pt(this),
              this._updateTags.add(xr),
              As(this),
              this._config.disableEvents ||
                (function (t, e) {
                  var n = t.ownerDocument;
                  Mo.set(t, n);
                  var o = Ao.get(n);
                  (void 0 === o &&
                    ((o = { editors: new Set(), hasShadowEditor: void 0 }),
                    Ao.set(n, o)),
                    o.editors.add(e),
                    (o.hasShadowEditor = void 0),
                    (t.__lexicalEditor = e));
                  var r = sr(t);
                  r.push(wo.register(n));
                  var i = Eo();
                  var _loop3 = function _loop3() {
                    var _i$_n = i[_n121],
                      o = _i$_n[0],
                      s = _i$_n[1],
                      l =
                        "function" == typeof s
                          ? function (t) {
                              ur(t) ||
                                (ar(t),
                                (e.isEditable() || "click" === o) && s(t, e));
                            }
                          : function (t) {
                              if (ur(t)) return;
                              ar(t);
                              var n = e.isEditable();
                              switch (o) {
                                case "cut":
                                  return n && $c(e, lo, t);
                                case "copy":
                                  return $c(e, so, t);
                                case "paste":
                                  return n && $c(e, wn, t);
                                case "dragstart":
                                  return n && $c(e, oo, t);
                                case "dragover":
                                  return n && $c(e, ro, t);
                                case "dragend":
                                  return n && $c(e, io, t);
                                case "focus":
                                  return n && $c(e, go, t);
                                case "blur":
                                  return n && $c(e, _o, t);
                                case "drop":
                                  return n && $c(e, eo, t);
                              }
                            };
                    r.push(bo(t, o, l));
                  };
                  for (var _n121 = 0; _n121 < i.length; _n121++) {
                    _loop3();
                  }
                })(t, this),
              null != _n120 &&
                (_t$classList = t.classList).add.apply(
                  _t$classList,
                  Array.from(_n120),
                ));
          } else ((this._window = null), this._updateTags.add(xr), As(this));
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
        var _this16 = this;
        e.isEmpty() && t(38);
        var o = e;
        (o._readOnly &&
          ((o = qs(e)),
          (o._selection = e._selection ? e._selection.clone() : null)),
          _t(this));
        var r = this._pendingEditorState,
          i = void 0 !== n ? n.tag : null;
        (null === r ||
          r.isEmpty() ||
          (null != i && this._updateTags.add(i), As(this)),
          (this._pendingEditorState = o),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          (this._slotsUsed = this._slotsUsed || e._slotsUsed),
          Rs(
            this,
            function () {
              if ((i && _this16._updateTags.add(i), e._parsed))
                for (var _ref45 of o._nodeMap.entries()) {
                  var _t245 = _ref45[0];
                  var _e152 = _ref45[1];
                  js(_e152)
                    ? _this16._dirtyElements.set(_t245, !0)
                    : _this16._dirtyLeaves.add(_t245);
                }
            },
            { discrete: !this._updating || void 0 },
          ));
      };
      _proto18.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var o = Xs(),
            r = as,
            i = fs,
            s = us,
            l = e._dirtyElements,
            c = e._dirtyLeaves,
            a = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Set()),
            (e._dirtyType = 0),
            (as = o),
            (fs = !1),
            (us = e),
            zl(null));
          try {
            var _r59 = e._nodes;
            (Es(t.root, _r59), n && n(), (o._readOnly = !0), (o._parsed = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = c),
              (e._cloneNotNeeded = a),
              (e._dirtyType = u),
              (as = r),
              (fs = i),
              (us = s));
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
        "force-commit" === e && As(this);
        return (
          "pending" === e
            ? this._pendingEditorState || this._editorState
            : this.getEditorState()
        ).read(n, { editor: this });
      };
      _proto18.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : Ps(t, e, n);
        })(this, t, e);
      };
      _proto18.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          Rs(this, function () {
            var o = Hi(),
              r = pc();
            (null !== o
              ? o.dirty || yc(o.clone())
              : 0 !== r.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? r.selectStart()
                  : r.selectEnd()),
              Wc("focus"),
              Uc(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto18.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = oa(this._window);
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
              return Ts();
            }));
      };
      _proto18.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON(rt()) };
      };
      return Ll;
    })();
    _Ll.version = X;
    var $l = null;
    function zl(t) {
      $l = t;
    }
    var Bl = Symbol("INTERNAL_SKIP_AFTER_CLONE_FROM");
    var Kl = 1;
    function Wl(e, n) {
      var o = Ul(e, n);
      return (void 0 === o && t(30, n), o);
    }
    function Ul(t, e) {
      return t._nodes.get(e);
    }
    var jl =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function Hl(t, e) {
      var n =
        void 0 !== e
          ? e
          : (function () {
              var e = t.getRootNode();
              return tc(e) || ia(e) ? ya(e) : null;
            })();
      if (!Ca(n)) return !1;
      if (n.hasAttribute("data-lexical-slot")) return !1;
      var o = hc(n),
        r = n.nodeName;
      return (
        yr(o) &&
        ("INPUT" === r ||
          "TEXTAREA" === r ||
          ("true" === n.contentEditable && null == ql(n)))
      );
    }
    var Vl = Hl;
    function Jl(t, e, n) {
      var o = t.getRootElement();
      if (!o) return !1;
      try {
        if (!e || !o.contains(e) || !o.contains(n)) return !1;
      } catch (t) {
        return !1;
      }
      return (
        Gl(e) === t &&
        t.read("latest", function () {
          return !Hl(e);
        })
      );
    }
    function Yl(t) {
      return t instanceof _Ll;
    }
    function Gl(t) {
      var e = t;
      for (; null != e; ) {
        var _t246 = ql(e);
        if (Yl(_t246)) return _t246;
        e = Bc(e);
      }
      return null;
    }
    function ql(t) {
      return t ? t.__lexicalEditor : null;
    }
    function Xl(t) {
      return ci(t) || t.isToken();
    }
    function Ql(t) {
      return Xl(t) || t.isSegmented();
    }
    function Zl(t) {
      return Sa(t) && 3 === t.nodeType;
    }
    function tc(t) {
      return Sa(t) && 9 === t.nodeType;
    }
    function ec(t) {
      var e = t;
      for (; null != e; ) {
        if (Zl(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function nc(t, e, n) {
      var o = w[e];
      if (null !== n && (t & o) === (n & o)) return t;
      var r = t ^ o;
      return (
        "subscript" === e
          ? (r &= ~w.superscript)
          : "superscript" === e
            ? (r &= ~w.subscript)
            : "lowercase" === e
              ? ((r &= ~w.uppercase), (r &= ~w.capitalize))
              : "uppercase" === e
                ? ((r &= ~w.lowercase), (r &= ~w.capitalize))
                : "capitalize" === e &&
                  ((r &= ~w.lowercase), (r &= ~w.uppercase)),
        r
      );
    }
    function oc(t, e) {
      var n = (function () {
        var t = $l;
        return (($l = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (ys(), xs());
      var o = Ss(),
        r = Cs(),
        i = "" + Kl++;
      (r._nodeMap.set(i, t),
        js(t) ? o._dirtyElements.set(i, !0) : o._dirtyLeaves.add(i),
        o._cloneNotNeeded.add(i),
        0 === o._dirtyType && (o._dirtyType = 1),
        (t.__key = i));
    }
    function rc(e) {
      null !== vu(e) && t(380, e.__key, String(vu(e)));
      var n = e.getParent();
      if (null !== n) {
        var _t247 = e.getWritable(),
          _o86 = n.getWritable(),
          _r60 = e.getPreviousSibling(),
          _i47 = e.getNextSibling(),
          _s26 = null !== _i47 ? _i47.__key : null,
          _l19 = null !== _r60 ? _r60.__key : null,
          _c14 = null !== _r60 ? _r60.getWritable() : null,
          _a12 = null !== _i47 ? _i47.getWritable() : null;
        (null === _r60 && (_o86.__first = _s26),
          null === _i47 && (_o86.__last = _l19),
          null !== _c14 && (_c14.__next = _s26),
          null !== _a12 && (_a12.__prev = _l19),
          (_t247.__prev = null),
          (_t247.__next = null),
          (_t247.__parent = null),
          _o86.__size--);
      }
    }
    var ic = rc;
    function sc(e) {
      (xs(), _r(e) && t(323, e.__key, e.__type));
      var n = e.getLatest(),
        o = null !== n.__parent ? n.__parent : Tu(n) ? n.__slotHost : null,
        r = Cs(),
        i = Ss(),
        s = r._nodeMap,
        l = i._dirtyElements;
      null !== o &&
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
                  : Tu(_t248)
                    ? _t248.__slotHost
                    : null));
          }
        })(o, s, l);
      var c = n.__key;
      (0 === i._dirtyType && (i._dirtyType = 1),
        js(e) ? l.set(c, !0) : i._dirtyLeaves.add(c));
    }
    function lc(t) {
      ys();
      var e = Ss(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t249 = ac(n);
          null !== _t249 && _t249.getWritable();
        }
        if (null !== t) {
          var _e153 = ac(t);
          null !== _e153 && _e153.getWritable();
        }
      }
    }
    function cc() {
      if (ms()) return null;
      return Ss()._compositionKey;
    }
    function ac(t, e) {
      var n = (e || Cs())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function uc(t, e) {
      var n = dc(t, Ss());
      return void 0 !== n ? ac(n, e) : null;
    }
    function fc(t, e, n) {
      t["__lexicalKey_" + e._key] = n;
    }
    function dc(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function hc(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t250 = uc(n, e);
        if (null !== _t250) return _t250;
        n = Bc(n);
      }
      return null;
    }
    function gc(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function _c(t) {
      return t.read(function () {
        return pc().getTextContent();
      });
    }
    function pc() {
      return Cs()._nodeMap.get("root");
    }
    function mc(t, e) {
      if (
        !(
          qc(t) &&
          t.isAttached() &&
          t.isEmpty() &&
          (Gs(t) || (null !== e && Oa(e)))
        )
      )
        return null;
      var n = El();
      return (t.append(n), n);
    }
    function yc(t) {
      ys();
      var e = Cs();
      (null !== t &&
        ((t.dirty = !0),
        t.setCachedNodes(null),
        yi(t) && Ss()._slotsUsed && $i(t)),
        (e._selection = t));
    }
    function xc() {
      ys();
      _t(Ss());
    }
    function Cc(t) {
      var e = (function (t, e) {
        var n = t;
        for (; null != n; ) {
          var _t251 = dc(n, e);
          if (void 0 !== _t251) return _t251;
          n = Bc(n);
        }
        return null;
      })(t, Ss());
      return null === e ? null : ac(e);
    }
    function Sc(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function Tc(t) {
      var e = [];
      for (var _n122 = t; null !== _n122; _n122 = _n122._parentEditor)
        e.push(_n122);
      return e;
    }
    function vc() {
      return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substring(0, 5);
    }
    function Nc(t) {
      return Zl(t) ? t.nodeValue : null;
    }
    function bc(t, e, n) {
      var o = oa(Vc(e));
      if (null === o) return;
      var r = ha(o, e._rootElement),
        i = r.anchorNode;
      var s = r.anchorOffset,
        l = r.focusOffset;
      if (null !== i) {
        var _e154 = Nc(i);
        var _o87 = hc(i);
        if (null !== _e154 && oi(_o87)) {
          if ((_e154 === v || _e154 === b) && n) {
            var _t252 = n.length;
            ((_e154 = n), (s = _t252), (l = _t252));
          }
          null !== _e154 && kc(_o87, _e154, s, l, t);
        }
      }
    }
    function kc(t, e, n, o, r) {
      var i = t;
      if (i.isAttached() && (r || !i.isDirty())) {
        var _s27 = i.isComposing();
        if (i.isToken() && _s27) return;
        var _l20 = e;
        if (
          (_s27 || r) &&
          (e.endsWith(v) && (_l20 = e.slice(0, -v.length)), r)
        ) {
          var _t253 = b;
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
          var _e156 = Hi();
          if ("" === _l20) {
            if ((lc(null), p || g || x)) i.remove();
            else {
              var _t254 = Ss();
              (Oc(i, "", _e156),
                setTimeout(function () {
                  _t254.update(function () {
                    i.isAttached() && "" === i.getTextContent() && i.remove();
                  });
                }, 20));
            }
            return;
          }
          var _r61 = i.getParent(),
            _c16 = Vi(),
            _a13 = i.getTextContentSize(),
            _u0 = cc(),
            _f13 = i.getKey();
          if (
            (i.isToken() && !_s27) ||
            (null !== _u0 && _f13 === _u0 && !_s27) ||
            (yi(_c16) &&
              ((null !== _r61 &&
                !_r61.canInsertTextBefore() &&
                0 === _c16.anchor.offset) ||
                (_c16.anchor.key === t.__key &&
                  0 === _c16.anchor.offset &&
                  !i.canInsertTextBefore() &&
                  !_s27) ||
                (_c16.focus.key === t.__key &&
                  _c16.focus.offset === _a13 &&
                  !i.canInsertTextAfter() &&
                  !_s27)))
          )
            return void i.markDirty();
          if (!yi(_e156) || null === n || null === o)
            return void Oc(i, _l20, _e156);
          if ((_e156.setTextNodeRange(i, n, i, o), i.isSegmented())) {
            var _t255 = ni(i.getTextContent());
            (i.replace(_t255), (i = _t255));
          }
          Oc(i, _l20, _e156);
        }
      }
    }
    function Oc(t, e, n) {
      if ((t.setTextContent(e), yi(n))) {
        var _e157 = t.getKey();
        var _o88 = !1;
        for (var _r62 of ["anchor", "focus"]) {
          var _i48 = n[_r62];
          "text" === _i48.type &&
            _i48.key === _e157 &&
            ((_i48.offset = rf(t, _i48.offset, "clamp")), (_o88 = !0));
        }
        _o88 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
      }
    }
    function Ec(t, e, n) {
      var o = e[n] || !1;
      return "any" === o || o === t[n];
    }
    function Mc(t, e) {
      return (
        Ec(t, e, "altKey") &&
        Ec(t, e, "ctrlKey") &&
        Ec(t, e, "shiftKey") &&
        Ec(t, e, "metaKey")
      );
    }
    function Ac(t) {
      var e = t;
      for (; null !== e; ) {
        var _t256 = e.getParent();
        if (null === _t256) return null;
        if (Gs(_t256)) return e;
        e = _t256;
      }
      return null;
    }
    function wc(t, e) {
      var n = t.anchor,
        o = t.focus,
        r = n.key,
        i = n.offset,
        s = n.type,
        l = o.key,
        c = o.offset,
        a = o.type;
      if ((pe(t), !Gs(e))) return t;
      var u = Ac(n.getNode());
      return (
        js(u) &&
          u.isShadowRoot() &&
          u.is(Ac(o.getNode())) &&
          (n.set(r, i, s), o.set(l, c, a)),
        t
      );
    }
    function Dc(t, e) {
      "" === t.getAttribute(e) && t.removeAttribute(e);
    }
    function Fc(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        o = n[e];
      if (void 0 !== o) return o;
      var r = t[e];
      if ("string" == typeof r) {
        var _t257 = Tf(r);
        return ((n[e] = _t257), _t257);
      }
      return r;
    }
    function Ic(e, n, o, r, i) {
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
    function Pc(t, e, n) {
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
    function Rc(t, e) {
      var n = t.offset;
      if ("element" === t.type) {
        return Pc(t.getNode(), e, n);
      }
      {
        var _o89 = t.getNode();
        if ((e && 0 === n) || (!e && n === _o89.getTextContentSize())) {
          var _t258 = e ? _o89.getPreviousSibling() : _o89.getNextSibling();
          return null === _t258
            ? Pc(
                _o89.getParentOrThrow(),
                e,
                _o89.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t258;
        }
      }
      return null;
    }
    function Lc(t) {
      var e = Vc(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function $c(t, e) {
      return Ds(t, e, arguments.length <= 2 ? undefined : arguments[2], t);
    }
    function zc(e, n) {
      var o = e._keyToDOMMap.get(n);
      return (void 0 === o && t(75, n), o);
    }
    function Bc(t) {
      var e = t.assignedSlot || t.parentElement;
      if (null !== e) return e;
      var n = t.parentNode;
      return ia(n) ? n.host : null;
    }
    function Kc(t) {
      return tc(t) ? t : Ca(t) ? t.ownerDocument : null;
    }
    function Wc(t) {
      ys();
      Ss()._updateTags.add(t);
    }
    function Uc(t) {
      ys();
      Ss()._deferred.push(t);
    }
    function jc(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function Hc(t) {
      var e = Kc(t);
      return e ? e.defaultView : null;
    }
    function Vc(e) {
      var n = e._window;
      return (null === n && t(78), n);
    }
    function Jc(t) {
      return (js(t) && t.isInline()) || (Js(t) && t.isInline());
    }
    function Yc(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== vu(e) && js(e)) return e;
        var _t259 = e.getParentOrThrow();
        if (qc(_t259)) return _t259;
        e = _t259;
      }
      return e;
    }
    function Gc(t) {
      return js(t) && t.isShadowRoot();
    }
    function qc(t) {
      return Gs(t) || Gc(t);
    }
    function Xc(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t, Bl);
      return (
        oc(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function Qc(e) {
      var n = Ss(),
        o = e.getType(),
        r = Ul(n, o);
      void 0 === r && t(200, e.constructor.name, o);
      var i = r.replace,
        s = r.replaceWithKlass;
      if (null !== i) {
        var _n123 = i(e),
          _r63 = _n123.constructor;
        return (
          null !== s
            ? _n123 instanceof s ||
              t(
                201,
                s.name,
                s.getType(),
                _r63.name,
                _r63.getType(),
                e.constructor.name,
                o,
              )
            : (_n123 instanceof e.constructor && _r63 !== e.constructor) ||
              t(202, _r63.name, _r63.getType(), e.constructor.name, o),
          _n123.__key === e.__key &&
            t(203, e.constructor.name, o, _r63.name, _r63.getType()),
          _n123
        );
      }
      return e;
    }
    function Zc(e, n) {
      !Gs(e.getParent()) || js(n) || Js(n) || t(99);
    }
    function ta(e) {
      var n = ac(e);
      return (null === n && t(63, e), n);
    }
    function ea(t) {
      if (!t || t.isInline()) return !1;
      if (Js(t)) return !0;
      if (js(t)) {
        if (t.isShadowRoot()) {
          var _e158 = t.getParent();
          return !(js(_e158) && _e158.isShadowRoot());
        }
        return !t.canBeEmpty();
      }
      return !1;
    }
    function na(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var o = t.parentElement;
      null !== o && o.removeChild(t);
    }
    function oa(t) {
      return r ? (t || window).getSelection() : null;
    }
    function ra(t) {
      var e = Hc(t);
      return e ? e.getSelection() : null;
    }
    function ia(t) {
      return Ta(t) && "host" in t;
    }
    var sa = [];
    function la(t) {
      var e = t.getRootNode();
      if (e === t || !ia(e)) return sa;
      var n = [e];
      var o = e.host;
      for (;;) {
        var _t260 = o.getRootNode();
        if (_t260 === o || !ia(_t260)) break;
        (n.push(_t260), (o = _t260.host));
      }
      return n;
    }
    function* ca(t) {
      var e = [t];
      var n;
      for (; (n = e.pop()); ) {
        yield* n.querySelectorAll('[data-lexical-editor="true"]');
        var _t261 = (tc(n) ? n : n.ownerDocument).createTreeWalker(
          n,
          NodeFilter.SHOW_ELEMENT,
        );
        var _o90 = void 0;
        for (; (_o90 = _t261.nextNode()); )
          _o90.shadowRoot && e.push(_o90.shadowRoot);
      }
    }
    function aa(t) {
      return null !== t ? t.ownerDocument : document;
    }
    function ua() {
      var t = Ns();
      return aa(null !== t ? t._rootElement : null);
    }
    function fa(t, e) {
      if (null === e || "function" != typeof t.getComposedRanges) return null;
      var n = la(e);
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
    function da(t, e) {
      var n = fa(t, e);
      if (null !== n) {
        var _t262 = ga(n);
        if (null !== _t262) return _t262;
      }
      return t.rangeCount > 0 ? t.getRangeAt(0) : null;
    }
    function ha(t, e) {
      var n = fa(t, e);
      return null === n ? t : _a(n, pa(t));
    }
    function ga(t) {
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
    function _a(t, e) {
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
    function pa(t) {
      return t.direction;
    }
    function ma(t) {
      var e = t.getRootNode();
      return tc(e) || ia(e) ? e.activeElement : null;
    }
    function ya(t) {
      var e = t.activeElement;
      for (; null !== e && null !== e.shadowRoot; ) {
        var _t263 = e.shadowRoot.activeElement;
        if (null === _t263) break;
        e = _t263;
      }
      return e;
    }
    function xa(t) {
      var e = t.target;
      if (
        null !== e &&
        Ca(e) &&
        null !== e.shadowRoot &&
        "function" == typeof t.composedPath
      ) {
        var _e161 = t.composedPath();
        if (_e161.length > 0) return _e161[0];
      }
      return e;
    }
    function Ca(t) {
      return Sa(t) && 1 === t.nodeType;
    }
    function Sa(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function Ta(t) {
      return Sa(t) && 11 === t.nodeType;
    }
    var va =
      /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
    function Na(t) {
      return (
        !(!Ca(t) || !t.style.display.startsWith("inline")) ||
        va.test(t.nodeName)
      );
    }
    var ba =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function ka(t) {
      return (
        (!Ca(t) || !t.style.display.startsWith("inline")) && ba.test(t.nodeName)
      );
    }
    function Oa(t) {
      if (Js(t) && !t.isInline()) return !0;
      if (!js(t) || qc(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || rl(e) || oi(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function Ea() {
      return Ss();
    }
    function Ma(t) {
      if (t === void 0) {
        t = Ea();
      }
      return t._config.dom || Il;
    }
    function Aa(e, n, o) {
      if (o === void 0) {
        o = Ea();
      }
      var r = Ma(o).$getDOMSlot(e, n, o);
      return (js(e) && (wa(r) || t(344, e.getKey(), e.getType())), r);
    }
    function wa(t) {
      return t instanceof _Y;
    }
    function Da(t, e, n) {
      if (n === void 0) {
        n = Ea();
      }
      return ec(Aa(t, e, n).element);
    }
    var Fa = new WeakMap(),
      Ia = new Map();
    function Pa(e) {
      if (!e._readOnly && e.isEmpty()) return Ia;
      e._readOnly || t(192);
      var n = Fa.get(e);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref48 of t._nodeMap) {
              var _n124 = _ref48[0];
              var _o91 = _ref48[1];
              {
                var _t264 = _o91.__type;
                var _r64 = e.get(_t264);
                (_r64 || ((_r64 = new Map()), e.set(_t264, _r64)),
                  _r64.set(_n124, _o91));
              }
            }
            return e;
          })(e)),
          Fa.set(e, n)),
        n
      );
    }
    function Ra(t) {
      var e = t.constructor.clone(t, Bl);
      return (e.afterCloneFrom(t), e);
    }
    function La(t, e) {
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
    function $a(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function za(t, e) {
      var n = e.style.textAlign;
      return n && n in F ? t.setFormat(n) : t;
    }
    function Ba(t, e) {
      ((t.__lexicalUnmanaged = !0),
        e &&
          void 0 !== e.captureSelection &&
          (t.__lexicalCapturedSelection = e.captureSelection));
    }
    function Ka(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function Wa(t, e) {
      if (e === void 0) {
        e = Ea();
      }
      var n = e.isEditable();
      ((t.contentEditable = n ? "true" : "false"),
        n ? (t.__lexicalEditor = e) : delete t.__lexicalEditor);
    }
    function Ua(t, e) {
      var n = t;
      for (; null != n; ) {
        if (!0 === n.__lexicalCapturedSelection) return !0;
        if (Ca(n) && n.hasAttribute("data-lexical-slot")) return !1;
        if (void 0 !== dc(n, e)) return !1;
        n = Bc(n);
      }
      return !1;
    }
    function ja(t, e) {
      return zt(t, e) && t[e] !== _mr5[e];
    }
    var Ha = new WeakMap();
    function Va(e) {
      var o = Ha.get(e);
      return void 0 !== o
        ? o
        : (function (e) {
            var o =
                null != e.prototype && B in e.prototype
                  ? e.prototype[B]()
                  : void 0,
              r = (function (e) {
                if (!(e === _mr5 || e.prototype instanceof _mr5)) {
                  var _n125 = "<unknown>",
                    _o92 = "<unknown>";
                  try {
                    _n125 = e.getType();
                  } catch (t) {}
                  try {
                    _Ll.version && (_o92 = JSON.parse(_Ll.version));
                  } catch (t) {}
                  t(290, e.name, _n125, _o92);
                }
                return e === _Vs || e === _Us4 || e === _mr5;
              })(e),
              i = !r && ja(e, "getType") ? e.getType : void 0,
              s = i && !(Ya in i) ? i.call(e) : void 0;
            var l,
              c = s;
            if (o)
              if (s) l = o[s];
              else {
                for (var _ref50 of Object.entries(o)) {
                  var _t266 = _ref50[0];
                  var _e162 = _ref50[1];
                  ((c = _t266), (l = _e162));
                }
                if (!l)
                  for (var _t267 of Object.getOwnPropertySymbols(o)) {
                    var _e163 = o[_t267];
                    if (_e163) {
                      l = _e163;
                      break;
                    }
                  }
              }
            var a = {
              compiled: void 0,
              composed: void 0,
              config: {
                declaresOwnConfig: zt(e.prototype, B),
                klass: e,
                ownNodeConfig: l,
                ownNodeType: c,
              },
              ownFieldsValidated: !1,
            };
            Ha.set(e, a);
            try {
              var _t268 = (function (t) {
                  var e = t.prototype,
                    o = new Map(),
                    _eu = eu(t),
                    r = _eu.fieldsBaseFirst;
                  for (var _ref52 of r) {
                    var _i50 = _ref52[0];
                    var _s29 = _ref52[1];
                    {
                      var _r65 = ru(t, _i50, _s29);
                      if (null === _r65) continue;
                      if (xt(_r65)) {
                        var _e164 = _r65.field;
                        if (
                          ("__proto__" === _e164 &&
                            n(
                              t.name +
                                ': serialization schema field "' +
                                _i50 +
                                '" cannot be applied to __proto__',
                            ),
                          void 0 !== _r65.setterTable)
                        ) {
                          var _e165 = _r65.setterTable,
                            _o94 = _s29.meta;
                          for (var _r66 of "enum" === _o94.kind
                            ? _o94.values
                            : [_s29.defaultValue])
                            zt(_e165, String(_r66)) ||
                              n(
                                t.name +
                                  ': serialization schema field "' +
                                  _i50 +
                                  '" has no setterTable entry for ' +
                                  JSON.stringify(_r66) +
                                  ", which its schema can produce; a parsed value the table does not map is stored as the encoded default, so the table must map every value the schema produces",
                              );
                        }
                        o.set(_i50, {
                          field: _e164,
                          key: _i50,
                          kind: "ownField",
                          schema: _s29,
                          setterTable: _r65.setterTable,
                        });
                        continue;
                      }
                      var _l21 = e[_r65];
                      ("function" != typeof _l21 &&
                        n(
                          t.name +
                            ': serialization schema field "' +
                            _i50 +
                            '" has no setter ' +
                            _r65 +
                            "(); name one with withAccessors or declare {setter: null} if it is derived on import",
                        ),
                        o.set(_i50, {
                          key: _i50,
                          kind: "field",
                          schema: _s29,
                          setter: _l21,
                        }));
                    }
                  }
                  return 0 === o.size ? Ga : [].concat(Array.from(o.values()));
                })(e),
                _o93 = (function (t) {
                  var e = t.prototype,
                    o = new Map();
                  for (var _ref54 of eu(t).fieldsDerivedFirst) {
                    var _r67 = _ref54[0];
                    var _i51 = _ref54[1];
                    {
                      var _s30 = ou(t, _r67, _i51);
                      if (null === _s30) continue;
                      if (xt(_s30)) {
                        var _l22 = _s30.field;
                        "__proto__" === _l22 &&
                          n(
                            t.name +
                              ': serialization schema field "' +
                              _r67 +
                              '" cannot be read from __proto__',
                          );
                        var _c17 = _s30.when;
                        var _a14 = void 0;
                        if (void 0 !== _c17) {
                          var _o95 = e[_c17];
                          ("function" != typeof _o95 &&
                            n(
                              t.name +
                                ': serialization schema field "' +
                                _r67 +
                                '" names a predicate ' +
                                _c17 +
                                "() that the node does not have",
                            ),
                            (_a14 = _o95));
                        }
                        o.set(_r67, {
                          defaultValue: _i51.defaultValue,
                          derived: null === _i51.setter,
                          field: _l22,
                          getterTable: _s30.getterTable,
                          isEqual: _i51.isEqual,
                          key: _r67,
                          kind: "ownField",
                          schema: _i51,
                          when: _a14,
                        });
                        continue;
                      }
                      var _l23 = e[_s30];
                      ("function" != typeof _l23 &&
                        n(
                          t.name +
                            ': serialization schema field "' +
                            _r67 +
                            '" has no getter ' +
                            _s30 +
                            "(); name one with withAccessors({getter}) or declare {getter: null} if it is deliberately not exported",
                        ),
                        o.set(_r67, {
                          defaultValue: _i51.defaultValue,
                          derived: null === _i51.setter,
                          getter: _l23,
                          isEqual: _i51.isEqual,
                          key: _r67,
                          kind: "method",
                          schema: _i51,
                        }));
                    }
                  }
                  return 0 === o.size ? nu : [].concat(Array.from(o.values()));
                })(e),
                _i49 = eu(e),
                _s28 = (function (t, e, n) {
                  var o,
                    r = t;
                  for (var _ref56 of _u(t)) {
                    var _e166 = _ref56.klass;
                    var _n126 = _ref56.ownNodeConfig;
                    _n126 &&
                      void 0 !== _n126.generated &&
                      (void 0 === o
                        ? ((o = _n126.generated), (r = _e166))
                        : _n126.generated === o && (r = _e166));
                  }
                  if (void 0 === o) return null;
                  if (r === t) return o;
                  return (function (t, e) {
                    if (
                      t.getters.length !== e.getters.length ||
                      t.setters.length !== e.setters.length
                    )
                      return !1;
                    for (var _n127 = 0; _n127 < t.getters.length; _n127++) {
                      var _o96 = t.getters[_n127],
                        _r68 = e.getters[_n127];
                      if (
                        _o96.kind !== _r68.kind ||
                        _o96.key !== _r68.key ||
                        _o96.schema !== _r68.schema ||
                        _o96.derived !== _r68.derived ||
                        _o96.isEqual !== _r68.isEqual ||
                        !Object.is(_o96.defaultValue, _r68.defaultValue) ||
                        ("ownField" === _o96.kind &&
                          "ownField" === _r68.kind &&
                          (_o96.field !== _r68.field ||
                            (void 0 === _o96.getterTable) !=
                              (void 0 === _r68.getterTable)))
                      )
                        return !1;
                    }
                    for (var _n128 = 0; _n128 < t.setters.length; _n128++) {
                      var _o97 = t.setters[_n128],
                        _r69 = e.setters[_n128];
                      if (
                        _o97.kind !== _r69.kind ||
                        _o97.key !== _r69.key ||
                        _o97.schema !== _r69.schema ||
                        ("ownField" === _o97.kind &&
                          "ownField" === _r69.kind &&
                          (_o97.field !== _r69.field ||
                            (void 0 === _o97.setterTable) !=
                              (void 0 === _r69.setterTable)))
                      )
                        return !1;
                    }
                    return !0;
                  })(n, Ja(Va(r)))
                    ? o
                    : null;
                })(e, 0, { getters: _o93, setters: _t268 });
              ((a.compiled = {
                flatStates: _i49.flatStates,
                generated: null === _s28 ? null : _s28(_i49.fields),
                getters: _o93,
                isCompactDefault: lu(_o93),
                setters: _t268,
              }),
                (function (t, e, n, o) {
                  if (!e && n) {
                    if (!ja(t, "getType")) {
                      var _e167 = t,
                        _o98 = function _o98() {
                          return this !== _e167 ? _mr5.getType.call(this) : n;
                        };
                      ((_o98[Ya] = !0), (t.getType = _o98));
                    }
                    if (
                      (ja(t, "clone") ||
                        (t.clone = function (e, n) {
                          zl(e);
                          var o = new t();
                          return (n !== Bl && o.afterCloneFrom(e), o);
                        }),
                      ja(t, "importJSON") ||
                        (t.importJSON =
                          (o && o.$importJSON) ||
                          (function (t) {
                            return function (e) {
                              var n = pu(t);
                              return n.updateFromJSON ===
                                _mr5.prototype.updateFromJSON
                                ? (function (t, e) {
                                    var n =
                                      t.__state || void 0 !== e[$]
                                        ? le(t, e)
                                        : t;
                                    return au(n, e);
                                  })(n, e)
                                : n.updateFromJSON(e);
                            };
                          })(t)),
                      !ja(t, "importDOM") && o)
                    ) {
                      var _e168 = o.importDOM;
                      _e168 &&
                        (t.importDOM = function () {
                          return _e168;
                        });
                    }
                  }
                })(e, r, c, l),
                (function (t) {
                  var _loop4 = function _loop4() {
                      var e = _ref58.klass;
                      var n = _ref58.ownNodeConfig;
                      {
                        var _t269 = e.prototype;
                        if (zt(_t269, "afterCloneFrom")) return 0;
                        var _o99 = gu(e);
                        if (0 === _o99.length) return 0;
                        var _r70 = Object.getPrototypeOf(_t269),
                          _i52 =
                            n && void 0 !== n.generated
                              ? Ja(Va(e)).generated
                              : null,
                          _s31 =
                            (null !== _i52 && _i52.afterCloneFrom) ||
                            function (t, e) {
                              var n = t,
                                r = e;
                              for (
                                var _t270 = 0;
                                _t270 < _o99.length;
                                _t270++
                              ) {
                                var _e169 = _o99[_t270];
                                n[_e169] = r[_e169];
                              }
                            };
                        ((_t269.afterCloneFrom = function (t) {
                          (_r70.afterCloneFrom.call(this, t), _s31(this, t));
                        }),
                          (_t269.afterCloneFrom[du] = !0));
                      }
                    },
                    _ret2;
                  for (var _ref58 of _u(t)) {
                    _ret2 = _loop4();
                    if (_ret2 === 0) continue;
                  }
                })(e));
            } catch (t) {
              throw (Ha["delete"](e), t);
            }
            return a;
          })(e);
    }
    function Ja(t) {
      var e = t.compiled;
      return (
        void 0 === e &&
          n(
            t.config.klass.name +
              " is still being registered: a $config() must not serialize a node of its own class",
          ),
        e
      );
    }
    var Ya = Symbol("lexical.synthesizedGetType"),
      Ga = [];
    function qa(t, e, n, o) {
      var r = void 0 === n.method ? o : n.method,
        i = eu(t).declaredBy.get(e);
      if (void 0 === i) return n;
      var s = t.prototype,
        l = i.prototype;
      return Xa(s, l, r) && Xa(s, l, o) ? n : r;
    }
    function Xa(t, e, n) {
      return t[n] === e[n];
    }
    function Qa(t) {
      return "set" + t.charAt(0).toUpperCase() + t.slice(1);
    }
    function Za(t) {
      return "get" + t.charAt(0).toUpperCase() + t.slice(1);
    }
    var tu = {
      declaredBy: new Map(),
      fields: new Map(),
      fieldsBaseFirst: [],
      fieldsDerivedFirst: [],
      flatStates: [],
    };
    function eu(t) {
      var e = Va(t);
      return (
        void 0 === e.composed &&
          (e.composed = (function (t) {
            var e = [],
              n = [],
              o = [];
            for (var _ref60 of _u(t)) {
              var _r71 = _ref60.klass;
              var _i53 = _ref60.ownNodeConfig;
              {
                var _t271 = _i53 && _i53.json;
                (n.push(_r71),
                  e.push(
                    _t271 && "node" === _t271.meta.kind
                      ? Object.entries(_t271.meta.fields)
                      : [],
                  ));
                var _s32 = [];
                if (_i53 && _i53.stateConfigs)
                  for (var _t272 of _i53.stateConfigs)
                    "stateConfig" in _t272 &&
                      _t272.flat &&
                      _s32.push(_t272.stateConfig);
                o.push(_s32);
              }
            }
            var r = new Map();
            for (var _t273 = 0; _t273 < e.length; _t273++)
              for (var _ref62 of e[_t273]) {
                var _n129 = _ref62[0];
                var _o100 = _ref62[1];
                r.has(_n129) || r.set(_n129, _o100);
              }
            var i = new Map(),
              s = new Map(),
              l = new Map();
            for (var _t274 = e.length - 1; _t274 >= 0; _t274--) {
              for (var _ref64 of e[_t274]) {
                var _o101 = _ref64[0];
                var _l24 = _ref64[1];
                {
                  var _e170 = r.get(_o101);
                  (void 0 === _e170 || i.has(_o101) || i.set(_o101, _e170),
                    void 0 === _e170 ||
                      _l24 !== _e170 ||
                      s.has(_o101) ||
                      s.set(_o101, n[_t274]));
                }
              }
              for (var _e171 of o[_t274])
                l.has(_e171.key) || l.set(_e171.key, _e171);
            }
            return 0 === r.size && 0 === l.size
              ? tu
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
    var nu = [];
    function ou(t, e, n) {
      var o = n.getter;
      if (null === o) return null;
      var r = void 0 === o ? Za(e) : o;
      return xt(r) ? qa(t, e, r, Za(e)) : r;
    }
    function ru(t, e, n) {
      var o = n.setter;
      if (null === o) return null;
      var r = void 0 === o ? Qa(e) : o;
      return xt(r) ? qa(t, e, r, Qa(e)) : r;
    }
    function iu(t) {
      return t;
    }
    function su(t, e) {
      var n = t.defaultValue,
        o = t.isEqual;
      return void 0 === e || e === n || (void 0 !== o && o(e, n));
    }
    function lu(t) {
      var e;
      return function (n, o) {
        void 0 === e &&
          (e = new Map(
            t.map(function (t) {
              return [t.key, t];
            }),
          ));
        var r = e.get(n);
        return void 0 !== r && su(r, o);
      };
    }
    function cu(t) {
      var e = t.setterTable,
        n = t.schema,
        o = n.defaultValue;
      return void 0 === e ? o : e[String(o)];
    }
    function au(t, e) {
      var n = Va(t.constructor),
        _Ja = Ja(n),
        o = _Ja.flatStates,
        r = _Ja.generated,
        i = _Ja.setters,
        s = (function (t, e, n) {
          var o = t;
          var _loop5 = function _loop5() {
            var r = n[_t275],
              i = e[r.key];
            if (void 0 !== i) {
              var _t276 = r.parse(i);
              o = ne(o, r, function () {
                return _t276;
              });
            }
          };
          for (var _t275 = 0; _t275 < n.length; _t275++) {
            _loop5();
          }
          return o;
        })(t, e, o);
      return null !== r && void 0 !== r.updateFromJSON
        ? r.updateFromJSON(s, e)
        : (function (t, e, n) {
            for (var _o102 = 0; _o102 < n.length; _o102++) {
              var _r72 = n[_o102],
                _i54 = _r72.schema(e[_r72.key]);
              "ownField" === _r72.kind
                ? (iu(t)[_r72.field] =
                    void 0 === _r72.setterTable
                      ? _i54
                      : zt(_r72.setterTable, _i54)
                        ? _r72.setterTable[_i54]
                        : cu(_r72))
                : _r72.setter.call(t, _i54);
            }
            return t;
          })(s, e, i);
    }
    function uu(t) {
      return Va(t).config;
    }
    function fu(t) {
      var e = [];
      for (var _n130 of [t.getter, t.setter])
        xt(_n130) &&
          "__proto__" !== _n130.field &&
          !e.includes(_n130.field) &&
          e.push(_n130.field);
      return e;
    }
    var du = "__lexicalSynthesizedAfterCloneFrom";
    function hu(t) {
      var _eu2 = eu(t),
        e = _eu2.declaredBy,
        n = _eu2.fieldsBaseFirst,
        o = [];
      for (var _ref66 of n) {
        var _r73 = _ref66[0];
        var _i55 = _ref66[1];
        if (e.get(_r73) === t)
          for (var _t277 of fu(_i55)) o.includes(_t277) || o.push(_t277);
      }
      return o;
    }
    function gu(t) {
      var e = hu(t);
      if (0 === e.length) return e;
      var n = new Set();
      for (var _ref68 of _u(t)) {
        var _e172 = _ref68.klass;
        if (_e172 !== t) for (var _t278 of hu(_e172)) n.add(_t278);
      }
      return 0 === n.size
        ? e
        : e.filter(function (t) {
            return !n.has(t);
          });
    }
    function* _u(t) {
      for (var _e173 = t; _e173 && (_e173 === _mr5 || yr(_e173.prototype)); ) {
        var _t279 = uu(_e173),
          _n131 = _t279.declaresOwnConfig;
        (yield _n131
          ? _t279
          : babelHelpers["extends"]({}, _t279, { ownNodeConfig: void 0 }),
          (_e173 =
            (_n131 && _t279.ownNodeConfig && _t279.ownNodeConfig["extends"]) ||
            xu(_e173)));
      }
    }
    function pu(t) {
      var e = Ea();
      ys();
      var n = e.resolveRegisteredNodeAfterReplacements(e.getRegisteredNode(t)),
        o = new n.klass();
      return null === n.replace ? o : Qc(o);
    }
    var mu = function mu(t, e) {
      var n = t;
      for (; null != n && !Gs(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function yu(e, n) {
      var o = [];
      var r = e.__first;
      for (; null !== r; ) {
        var _e174 = null === n ? ac(r) : n.get(r);
        (null == _e174 && t(174), o.push(r), (r = _e174.__next));
      }
      return o;
    }
    function xu(t) {
      var e = Object.getPrototypeOf(t);
      if ("function" == typeof e && e !== Function.prototype) return e;
      var n = t.prototype && Object.getPrototypeOf(t.prototype);
      return n ? n.constructor : null;
    }
    var Cu = new Map();
    function Su(t) {
      return js(t) || Js(t);
    }
    function Tu(t) {
      return js(t) || Js(t);
    }
    function vu(t) {
      var e = t.getLatest();
      return Tu(e) ? e.__slotHost : null;
    }
    function Nu(e) {
      var n = vu(e);
      if (null === n) return null;
      var o = ac(n);
      return (js(o) || Js(o) || t(370), o);
    }
    function bu(t) {
      var e = Nu(t);
      if (null === e) return null;
      var n = t.getLatest().__key;
      for (var _ref70 of Ou(e)) {
        var _t280 = _ref70[0];
        var _o103 = _ref70[1];
        if (_o103 === n) return _t280;
      }
      return null;
    }
    function ku(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== vu(e)) return e;
        e = e.getParent();
      }
      return null;
    }
    function Ou(t) {
      var e = t.getLatest();
      return Su(e) && null !== e.__slots ? e.__slots : Cu;
    }
    function Eu(t) {
      return Array.from(Ou(t).keys());
    }
    function Mu(t, e) {
      var n = Ou(t).get(e);
      return void 0 === n ? null : ac(n);
    }
    var Au = ["__proto__", "constructor", "prototype"],
      wu = Symbol("slotMapOwner");
    function Du(t) {
      var e = t.__slots;
      return (
        (null !== e && e[wu] === t) ||
          ((e = new Map(e)), (e[wu] = t), (t.__slots = e)),
        e
      );
    }
    var Fu = new WeakMap(),
      Iu = [];
    function Pu(t) {
      for (var _ref72 of _u(t)) {
        var _e175 = _ref72.ownNodeConfig;
        {
          var _t281 = _e175 && _e175.slots;
          if (_t281) return _t281;
        }
      }
      return Iu;
    }
    function Ru(t) {
      var e = "";
      for (var _n132 of Eu(t)) {
        var _o104 = Mu(t, _n132);
        null !== _o104 && (e += _o104.getTextContent());
      }
      return e;
    }
    function Lu(t, e, n) {
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
    function $u(e) {
      var n = e.__slots;
      if (null === n || n.size < 2) return;
      var o = (function (e) {
        var n = Fu.get(e);
        if (void 0 === n) {
          var _o105 = Pu(e),
            _r74 = new Map();
          for (var _n133 of _o105)
            (Au.includes(_n133) && t(371, e.name, _n133),
              _r74.has(_n133) && t(372, e.name, _n133),
              _r74.set(_n133, _r74.size));
          ((n = _r74), Fu.set(e, n));
        }
        return n;
      })(e.constructor);
      var r = null,
        i = !0;
      for (var _t282 of n.keys()) {
        if (null !== r && Lu(r, _t282, o) > 0) {
          i = !1;
          break;
        }
        r = _t282;
      }
      if (i) return;
      var s = Array.from(n).sort(function (_ref73, _ref74) {
        var t = _ref73[0];
        var e = _ref74[0];
        return Lu(t, e, o);
      });
      n.clear();
      for (var _ref76 of s) {
        var _t283 = _ref76[0];
        var _e176 = _ref76[1];
        n.set(_t283, _e176);
      }
    }
    function zu(e, n, o) {
      ("__proto__" !== n && "constructor" !== n && "prototype" !== n) ||
        t(373, n);
      var r = e.getLatest();
      if (null !== r.__slots && r.__slots.get(n) === o.getLatest().__key)
        return r;
      ((!js(o) && !Js(o)) || o.isInline()) && t(374, o.__key);
      var i = e.getWritable(),
        s = Du(i),
        l = s.get(n);
      void 0 !== l && Ku(l);
      var c = o.getWritable(),
        a = Nu(c);
      if (null !== a) {
        var _t284 = bu(c);
        (null !== _t284 && Du(a.getWritable())["delete"](_t284),
          (c.__slotHost = null));
      }
      return (
        rc(c),
        (c.__slotHost = i.__key),
        s.set(n, c.__key),
        $u(i),
        (Ss()._slotsUsed = !0),
        (Cs()._slotsUsed = !0),
        i
      );
    }
    function Bu(t, e) {}
    function Ku(e) {
      var n = ac(e);
      if (null === n) return;
      var o = n.getWritable();
      (Tu(o) || t(377, e), (o.__slotHost = null), o.remove());
    }
    var Wu = { next: "previous", previous: "next" };
    var _Uu4 = (function () {
      function Uu(t) {
        this.origin = t;
      }
      var _proto19 = Uu.prototype;
      _proto19[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return pf({
            hasNext: Xu,
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
        return nf(this.getNodeAtCaret(), this.direction);
      };
      _proto19.getSiblingCaret = function getSiblingCaret() {
        return nf(this.origin, this.direction);
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
          var _t285 = i.getAdjacentCaret();
          null !== _t285 && l.size < e;
          _t285 = _t285.getAdjacentCaret()
        ) {
          var _e177 = _t285.origin.getWritable();
          l.set(_e177.getKey(), _e177);
        }
        for (var _e178 of r) {
          if (l.size > 0) {
            var _n134 = i.getNodeAtCaret();
            if (_n134) {
              if (
                (l["delete"](_n134.getKey()),
                l["delete"](_e178.getKey()),
                _n134.is(_e178) || i.origin.is(_e178))
              );
              else {
                var _t286 = _e178.getParent();
                (_t286 && _t286.is(s) && _e178.remove(), _n134.replace(_e178));
              }
            } else null === _n134 && t(263, Array.from(l).join(" "));
          } else i.insert(_e178);
          i = nf(_e178, this.direction);
        }
        for (var _t287 of l.values()) _t287.remove();
        return this;
      };
      return Uu;
    })();
    var _ju3 = (function (_Uu) {
      function ju() {
        var _this6;
        for (
          var _len8 = arguments.length, args = new Array(_len8), _key8 = 0;
          _key8 < _len8;
          _key8++
        ) {
          args[_key8] = arguments[_key8];
        }
        return (
          ((_this6 = _Uu.call.apply(_Uu, [this].concat(args)) || this),
          (_this6.type = "child"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(ju, _Uu);
      var _proto20 = ju.prototype;
      _proto20.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : lf(t, this.direction);
      };
      _proto20.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return nf(Ju(this.getParentAtCaret(), t), this.direction);
      };
      _proto20.getFlipped = function getFlipped() {
        var t = Vu(this.direction);
        return nf(this.getNodeAtCaret(), t) || lf(this.origin, t);
      };
      _proto20.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto20.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto20.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof ju &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto20.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return ju;
    })(_Uu4);
    var Hu = { root: Gs, shadowRoot: qc };
    function Vu(t) {
      return Wu[t];
    }
    function Ju(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return null === t || Hu[e](t) ? null : null === vu(t) ? t : null;
    }
    var _Yu3 = (function (_Uu2) {
      function Yu() {
        var _this7;
        for (
          var _len9 = arguments.length, args = new Array(_len9), _key9 = 0;
          _key9 < _len9;
          _key9++
        ) {
          args[_key9] = arguments[_key9];
        }
        return (
          ((_this7 = _Uu2.call.apply(_Uu2, [this].concat(args)) || this),
          (_this7.type = "sibling"),
          babelHelpers.assertThisInitialized(_this7)) ||
          babelHelpers.assertThisInitialized(_this7)
        );
      }
      babelHelpers.inheritsLoose(Yu, _Uu2);
      var _proto21 = Yu.prototype;
      _proto21.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : nf(t, this.direction);
      };
      _proto21.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto21.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto21.getChildCaret = function getChildCaret() {
        return js(this.origin) ? lf(this.origin, this.direction) : null;
      };
      _proto21.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return nf(Ju(this.getParentAtCaret(), t), this.direction);
      };
      _proto21.getFlipped = function getFlipped() {
        var t = Vu(this.direction);
        return (
          nf(this.getNodeAtCaret(), t) || lf(this.origin.getParentOrThrow(), t)
        );
      };
      _proto21.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Yu &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto21.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof Yu || t instanceof _Gu3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return Yu;
    })(_Uu4);
    var _Gu3 = (function (_Uu3) {
      function Gu(t, e) {
        var _this8;
        ((_this8 = _Uu3.call(this, t) || this),
          (_this8.type = "text"),
          (_this8.offset = e));
        return _this8;
      }
      babelHelpers.inheritsLoose(Gu, _Uu3);
      var _proto22 = Gu.prototype;
      _proto22.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : of(t, this.direction, this.offset);
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
        return nf(Ju(this.getParentAtCaret(), t), this.direction);
      };
      _proto22.getFlipped = function getFlipped() {
        return of(this.origin, Vu(this.direction), this.offset);
      };
      _proto22.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Gu &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto22.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _Yu3 || t instanceof Gu) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto22.getSiblingCaret = function getSiblingCaret() {
        return nf(this.origin, this.direction);
      };
      return Gu;
    })(_Uu4);
    function qu(t) {
      return t instanceof _Gu3;
    }
    function Xu(t) {
      return t instanceof _Yu3;
    }
    function Qu(t) {
      return t instanceof _ju3;
    }
    var Zu = {
        next: (function (_Gu) {
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
              ((_this9 = _Gu.call.apply(_Gu, [this].concat(args)) || this),
              (_this9.direction = "next"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class, _Gu);
          var _proto23 = _class.prototype;
          _proto23.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto23.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_Gu3),
        previous: (function (_Gu2) {
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
              ((_this0 = _Gu2.call.apply(_Gu2, [this].concat(args)) || this),
              (_this0.direction = "previous"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class3, _Gu2);
          var _proto24 = _class3.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_Gu3),
      },
      tf = {
        next: (function (_Yu) {
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
              ((_this1 = _Yu.call.apply(_Yu, [this].concat(args)) || this),
              (_this1.direction = "next"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class5, _Yu);
          var _proto25 = _class5.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_Yu3),
        previous: (function (_Yu2) {
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
              ((_this10 = _Yu2.call.apply(_Yu2, [this].concat(args)) || this),
              (_this10.direction = "previous"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class7, _Yu2);
          var _proto26 = _class7.prototype;
          _proto26.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto26.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_Yu3),
      },
      ef = {
        next: (function (_ju) {
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
              ((_this11 = _ju.call.apply(_ju, [this].concat(args)) || this),
              (_this11.direction = "next"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class9, _ju);
          var _proto27 = _class9.prototype;
          _proto27.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto27.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_ju3),
        previous: (function (_ju2) {
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
              ((_this12 = _ju2.call.apply(_ju2, [this].concat(args)) || this),
              (_this12.direction = "previous"),
              babelHelpers.assertThisInitialized(_this12)) ||
              babelHelpers.assertThisInitialized(_this12)
            );
          }
          babelHelpers.inheritsLoose(_class1, _ju2);
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
        })(_ju3),
      };
    function nf(t, e) {
      return t ? new tf[e](t) : null;
    }
    function of(t, e, n) {
      return t ? new Zu[e](t, rf(t, n)) : null;
    }
    function rf(t, n, o) {
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
    function sf(t, e) {
      return new _ff(t, e);
    }
    function lf(t, e) {
      return js(t) ? new ef[e](t) : null;
    }
    function cf(t) {
      return (t && t.getChildCaret()) || t;
    }
    function af(t) {
      return t && cf(t.getAdjacentCaret());
    }
    var _uf = (function () {
      function uf(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto29 = uf.prototype;
      _proto29.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new uf(t, e, this.direction);
      };
      _proto29.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto29.getTextSlices = function getTextSlices() {
        var _this17 = this;
        var t = function t(_t288) {
            var e = _this17[_t288].getLatest();
            return qu(e)
              ? (function (t, e) {
                  var n = t.direction,
                    o = t.origin,
                    r = rf(o, "focus" === e ? Vu(n) : n);
                  return sf(t, r - t.offset);
                })(e, _t288)
              : null;
          },
          e = t("anchor"),
          n = t("focus");
        if (e && n) {
          var _t289 = e.caret,
            _o106 = n.caret;
          if (_t289.isSameNodeCaret(_o106))
            return [sf(_t289, _o106.offset - _t289.offset), null];
        }
        return [e, n];
      };
      _proto29.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = qu(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          o = qu(n),
          r = function r(e) {
            return e.isSameNodeCaret(n) ? null : af(e) || e.getParentCaret(t);
          };
        return pf({
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
      return uf;
    })();
    var _ff = (function () {
      function ff(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto30 = ff.prototype;
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
        return of(t.setTextContent(r.slice(0, n) + r.slice(o)), e, n);
      };
      return ff;
    })();
    function df(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function hf(t) {
      return _f(t, df(lf(pc(), Vu(t.direction)), t.direction));
    }
    function gf(t) {
      return _f(t, t);
    }
    function _f(e, n) {
      return (
        e.direction !== n.direction && t(265),
        new _uf(e, n, e.direction)
      );
    }
    function pf(t) {
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
    function mf(e, n) {
      var o = Sf(e.origin, n.origin);
      switch (
        (null === o && t(275, e.origin.getKey(), n.origin.getKey()), o.type)
      ) {
        case "same": {
          var _t290 = "text" === e.type,
            _o107 = "text" === n.type;
          return _t290 && _o107
            ? (function (t, e) {
                return Math.sign(t - e);
              })(e.offset, n.offset)
            : e.type === n.type
              ? 0
              : _t290
                ? -1
                : _o107
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
          return yf(o);
      }
    }
    function yf(t) {
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
    function xf(t, e) {
      return e.is(t);
    }
    function Cf(t) {
      return js(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function Sf(e, n) {
      if (e.is(n)) return { commonAncestor: e, type: "same" };
      var o = new Map();
      for (
        var _Cf = Cf(e), _t291 = _Cf[0], _n135 = _Cf[1];
        _t291;
        _n135 = _t291, _t291 = _t291.getParent()
      )
        o.set(_t291, _n135);
      for (
        var _Cf2 = Cf(n), _r75 = _Cf2[0], _i56 = _Cf2[1];
        _r75;
        _i56 = _r75, _r75 = _r75.getParent()
      ) {
        var _s33 = o.get(_r75);
        if (void 0 !== _s33)
          return null === _s33
            ? (xf(e, _r75) || t(276),
              { commonAncestor: _r75, type: "ancestor" })
            : null === _i56
              ? (xf(n, _r75) || t(277),
                { commonAncestor: _r75, type: "descendant" })
              : (((js(_s33) || xf(e, _s33)) &&
                  (js(_i56) || xf(n, _i56)) &&
                  _r75.is(_s33.getParent()) &&
                  _r75.is(_i56.getParent())) ||
                  t(278),
                { a: _s33, b: _i56, commonAncestor: _r75, type: "branch" });
      }
      return null;
    }
    function Tf() {
      var e = [];
      for (
        var _len14 = arguments.length, t = new Array(_len14), _key14 = 0;
        _key14 < _len14;
        _key14++
      ) {
        t[_key14] = arguments[_key14];
      }
      for (var _n136 of t)
        if (_n136 && "string" == typeof _n136)
          for (var _ref79 of _n136.matchAll(/\S+/g)) {
            var _t292 = _ref79[0];
            e.push(_t292);
          }
      return e;
    }
    function vf() {
      for (
        var _len15 = arguments.length, t = new Array(_len15), _key15 = 0;
        _key15 < _len15;
        _key15++
      ) {
        t[_key15] = arguments[_key15];
      }
      return function () {
        for (var _e179 = t.length - 1; _e179 >= 0; _e179--) t[_e179]();
        t.length = 0;
      };
    }
    ((exports.$addUpdateTag = Wc),
      (exports.$applyNodeReplacement = Qc),
      (exports.$assumeActiveEditor = function (t) {
        (null !== Cs() && null === us && (us = t), us !== t && e(378));
      }),
      (exports.$caretFromPoint = cl),
      (exports.$caretRangeFromSelection = dl),
      (exports.$cloneWithProperties = Ra),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = Ra(t))[gr] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = mf),
      (exports.$copyNode = Xc),
      (exports.$create = pu),
      (exports.$createChildrenArray = yu),
      (exports.$createLineBreakNode = ol),
      (exports.$createNodeSelection = Ui),
      (exports.$createParagraphNode = El),
      (exports.$createPoint = ui),
      (exports.$createRangeSelection = Wi),
      (exports.$createRangeSelectionFromDom = function (t, e) {
        return ji(null, t, e, null);
      }),
      (exports.$createTabNode = li),
      (exports.$createTextNode = ni),
      (exports.$exportNodeJSON = it),
      (exports.$extendCaretToRange = hf),
      (exports.$findMatchingParent = mu),
      (exports.$flushSyncAfterUpdate = function () {
        var t = Cs();
        (ys(), (t._flushSync = !0));
      }),
      (exports.$formatText = Ti),
      (exports.$fullReconcile = Ts),
      (exports.$generateNodesFromRawText = ns),
      (exports.$getAdjacentChildCaret = af),
      (exports.$getAdjacentNode = Rc),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          o = t,
          r = af(o);
        for (; null === r; ) {
          if ((n--, (r = o.getParentCaret(e)), !r)) return null;
          ((o = r), (r = af(o)));
        }
        return r && [r, n];
      }),
      (exports.$getCaretInDirection = df),
      (exports.$getCaretRange = _f),
      (exports.$getCaretRangeInDirection = xl),
      (exports.$getCharacterOffsets = Ni),
      (exports.$getChildCaret = lf),
      (exports.$getChildCaretAtIndex = Cl),
      (exports.$getChildCaretOrSelf = cf),
      (exports.$getCollapsedCaretRange = gf),
      (exports.$getCommonAncestor = Sf),
      (exports.$getCommonAncestorResultBranchOrder = yf),
      (exports.$getDOMSlot = Aa),
      (exports.$getDOMTextNode = Da),
      (exports.$getDocument = ua),
      (exports.$getEditor = Ea),
      (exports.$getEditorDOMRenderConfig = Ma),
      (exports.$getNearestNodeFromDOMNode = hc),
      (exports.$getNearestRootOrShadowRoot = Yc),
      (exports.$getNodeByKey = ac),
      (exports.$getNodeByKeyOrThrow = ta),
      (exports.$getNodeFromDOMNode = uc),
      (exports.$getPreviousSelection = Vi),
      (exports.$getRoot = pc),
      (exports.$getSelection = Hi),
      (exports.$getSelectionSlotFrame = function (t) {
        var _t$getNodes$;
        if (null === t) return null;
        var e = yi(t)
          ? t.anchor.getNode()
          : (_t$getNodes$ = t.getNodes()[0]) != null
            ? _t$getNodes$
            : null;
        return null === e ? null : ku(e);
      }),
      (exports.$getSiblingCaret = nf),
      (exports.$getSlot = Mu),
      (exports.$getSlotFrame = ku),
      (exports.$getSlotHost = Nu),
      (exports.$getSlotNameWithinHost = bu),
      (exports.$getSlotNames = Eu),
      (exports.$getState = ee),
      (exports.$getStateChange = function (t, e, n) {
        var o = ee(t, n, Qt),
          r = ee(e, n, Qt);
        return n.isEqual(o, r) ? null : [o, r];
      }),
      (exports.$getTextContent = function () {
        var t = Hi();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = rf),
      (exports.$getTextPointCaret = of),
      (exports.$getTextPointCaretSlice = sf),
      (exports.$getWritableNodeState = se),
      (exports.$hasAncestor = jc),
      (exports.$hasUpdateTag = function (t) {
        return Ss()._updateTags.has(t);
      }),
      (exports.$insertNodeToNearestRootAtCaret = Nl),
      (exports.$insertNodes = function (t) {
        var e = Hi() || Vi();
        (null === e && (e = pc().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = Bi),
      (exports.$isBlockFullySelected = bl),
      (exports.$isChildCaret = Qu),
      (exports.$isCompactExport = rt),
      (exports.$isDecoratorNode = Js),
      (exports.$isEditorState = function (t) {
        return t instanceof _Zs;
      }),
      (exports.$isElementDOMSlot = wa),
      (exports.$isElementNode = js),
      (exports.$isExtendableTextPointCaret = yl),
      (exports.$isInlineElementOrDecoratorNode = Jc),
      (exports.$isInlineFormattable = Vr),
      (exports.$isLeafNode = function (t) {
        return oi(t) || rl(t) || Js(t);
      }),
      (exports.$isLexicalNode = yr),
      (exports.$isLineBreakNode = rl),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _Uu4;
      }),
      (exports.$isNodeSelection = Ci),
      (exports.$isParagraphNode = Ml),
      (exports.$isRangeSelection = yi),
      (exports.$isRootNode = Gs),
      (exports.$isRootOrShadowRoot = qc),
      (exports.$isSelectionCapturedInDecoratorInput = Hl),
      (exports.$isShadowRootNode = Gc),
      (exports.$isSiblingCaret = Xu),
      (exports.$isSlotChild = Tu),
      (exports.$isSlotHost = Su),
      (exports.$isTabNode = ci),
      (exports.$isTextNode = oi),
      (exports.$isTextPointCaret = qu),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _ff;
      }),
      (exports.$isTokenOrSegmented = Ql),
      (exports.$isTokenOrTab = Xl),
      (exports.$markSlotEditable = Wa),
      (exports.$needsBlockCursorBeside = ea),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = Cs();
        if (n._readOnly) {
          var _t293 = Pa(n).get(e);
          return _t293 ? Array.from(_t293.values()) : [];
        }
        var o = n._nodeMap,
          r = [];
        for (var _ref81 of o) {
          var _n137 = _ref81[1];
          _n137 instanceof t &&
            _n137.__type === e &&
            _n137.isAttached() &&
            r.push(_n137);
        }
        return r;
      }),
      (exports.$normalizeCaret = ml),
      (exports.$normalizeSelection__EXPERIMENTAL = pe),
      (exports.$onUpdate = Uc),
      (exports.$parseSerializedNode = function (t) {
        return Es(t, Ss()._nodes);
      }),
      (exports.$removeFromParent = rc),
      (exports.$removeSlot = function (t, e) {
        var n = t.getWritable();
        if (null === n.__slots) return n;
        var o = n.__slots.get(e);
        return (void 0 !== o && (Ku(o), Du(n)["delete"](e)), n);
      }),
      (exports.$removeTextFromCaretRange = pl),
      (exports.$rewindSiblingCaret = hl),
      (exports.$selectAll = function (t) {
        var e = pc();
        if (yi(t)) {
          var _e180 = t.anchor,
            _n138 = t.focus,
            _o108 = _e180.getNode();
          if (Gs(_o108))
            return (
              _e180.set(_o108.getKey(), 0, "element"),
              _n138.set(_o108.getKey(), _o108.getChildrenSize(), "element"),
              wc(t, _o108),
              t
            );
          var _r76 = _o108.getTopLevelElementOrThrow(),
            _i57 = _r76.getParent();
          return null === _i57
            ? (js(_r76) &&
                (_e180.set(_r76.getKey(), 0, "element"),
                _n138.set(_r76.getKey(), _r76.getChildrenSize(), "element"),
                wc(t, _r76)),
              t)
            : (_e180.set(_i57.getKey(), 0, "element"),
              _n138.set(_i57.getKey(), _i57.getChildrenSize(), "element"),
              wc(t, _i57),
              t);
        }
        {
          var _t294 = e.select(0, e.getChildrenSize());
          return (yc(wc(_t294, e)), _t294);
        }
      }),
      (exports.$setCompositionKey = lc),
      (exports.$setDirectionFromDOM = $a),
      (exports.$setFormatFromDOM = za),
      (exports.$setPointFromCaret = al),
      (exports.$setSelection = yc),
      (exports.$setSelectionFromCaretRange = ul),
      (exports.$setSlot = zu),
      (exports.$setState = ne),
      (exports.$setTextFormat = function (t, e) {
        var n = [];
        for (var _ref83 of Object.entries(e)) {
          var _t295 = _ref83[0];
          var _o109 = _ref83[1];
          "boolean" == typeof _o109 && n.push([_t295, _o109]);
        }
        0 !== n.length &&
          Si(t, function (t) {
            for (var _ref85 of n) {
              var _e181 = _ref85[0];
              var _o110 = _ref85[1];
              t = nc(t, _e181, _o110 ? w[_e181] : 0);
            }
            return t;
          });
      }),
      (exports.$splitAtPointCaretNext = vl),
      (exports.$splitNode = function (e, n) {
        var o = e.getChildAtIndex(n);
        (null == o && (o = e), qc(e) && t(102));
        var _r79 = function r(e) {
            var n = e.getParentOrThrow(),
              i = qc(n),
              s = e !== o || i ? Xc(e) : e;
            if (i)
              return ((js(e) && js(s)) || t(133), e.insertAfter(s), [e, s, s]);
            {
              var _r78 = _r79(n),
                _t296 = _r78[0],
                _o111 = _r78[1],
                _i58 = _r78[2],
                _l25 = e.getNextSiblings();
              return (
                _i58.append.apply(_i58, [s].concat(Array.from(_l25))),
                [_t296, _o111, s]
              );
            }
          },
          _r77 = _r79(o),
          i = _r77[0],
          s = _r77[1];
        return [i, s];
      }),
      (exports.$updateDOMSelection = ts),
      (exports.$updateRangeSelectionFromCaretRange = fl),
      (exports.$withCompactExport = ot),
      (exports.ArtificialNode__DO_NOT_USE = _tl),
      (exports.BEFORE_INPUT_COMMAND = vn),
      (exports.BLUR_COMMAND = _o),
      (exports.CAN_REDO_COMMAND = fo),
      (exports.CAN_UNDO_COMMAND = ho),
      (exports.CAN_USE_BEFORE_INPUT = d),
      (exports.CAN_USE_DOM = r),
      (exports.CLEAR_EDITOR_COMMAND = ao),
      (exports.CLEAR_HISTORY_COMMAND = uo),
      (exports.CLICK_COMMAND = Tn),
      (exports.COLLABORATION_TAG = Cr),
      (exports.COMMAND_PRIORITY_BEFORE_CRITICAL = -4),
      (exports.COMMAND_PRIORITY_BEFORE_EDITOR = -8),
      (exports.COMMAND_PRIORITY_BEFORE_HIGH = -5),
      (exports.COMMAND_PRIORITY_BEFORE_LOW = -7),
      (exports.COMMAND_PRIORITY_BEFORE_NORMAL = -6),
      (exports.COMMAND_PRIORITY_CRITICAL = 4),
      (exports.COMMAND_PRIORITY_EDITOR = wl),
      (exports.COMMAND_PRIORITY_HIGH = 3),
      (exports.COMMAND_PRIORITY_LOW = 1),
      (exports.COMMAND_PRIORITY_NORMAL = 2),
      (exports.COMPOSITION_END_COMMAND = kn),
      (exports.COMPOSITION_END_TAG = br),
      (exports.COMPOSITION_START_COMMAND = bn),
      (exports.COMPOSITION_START_TAG = Nr),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = An),
      (exports.CONTROL_OR_ALT = xo),
      (exports.CONTROL_OR_META = yo),
      (exports.CONTROL_OR_OTHER_KEY = z),
      (exports.COPY_COMMAND = so),
      (exports.CUT_COMMAND = lo),
      (exports.CUT_TAG = "cut"),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = Il),
      (exports.DELETE_CHARACTER_COMMAND = On),
      (exports.DELETE_LINE_COMMAND = In),
      (exports.DELETE_WORD_COMMAND = Fn),
      (exports.DRAGEND_COMMAND = io),
      (exports.DRAGOVER_COMMAND = ro),
      (exports.DRAGSTART_COMMAND = oo),
      (exports.DROP_COMMAND = eo),
      (exports.DecoratorNode = _Vs),
      (exports.ElementNode = _Us4),
      (exports.FOCUS_COMMAND = go),
      (exports.FORMAT_ELEMENT_COMMAND = no),
      (exports.FORMAT_TEXT_COMMAND = Pn),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = xr),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = Zn),
      (exports.INPUT_COMMAND = Nn),
      (exports.INSERT_LINE_BREAK_COMMAND = En),
      (exports.INSERT_PARAGRAPH_COMMAND = Mn),
      (exports.INSERT_TAB_COMMAND = Qn),
      (exports.INTERNAL_$expandSelectionToWholeDocument = ki),
      (exports.INTERNAL_$isBlock = Oa),
      (exports.IS_ALL_FORMATTING = T),
      (exports.IS_ANDROID = _),
      (exports.IS_ANDROID_CHROME = y),
      (exports.IS_APPLE = a),
      (exports.IS_APPLE_WEBKIT = x),
      (exports.IS_BOLD = 1),
      (exports.IS_CHROME = m),
      (exports.IS_CODE = 16),
      (exports.IS_FIREFOX = u),
      (exports.IS_HIGHLIGHT = C),
      (exports.IS_IOS = g),
      (exports.IS_ITALIC = 2),
      (exports.IS_SAFARI = p),
      (exports.IS_STRIKETHROUGH = 4),
      (exports.IS_SUBSCRIPT = 32),
      (exports.IS_SUPERSCRIPT = 64),
      (exports.IS_UNDERLINE = 8),
      (exports.KEY_ARROW_DOWN_COMMAND = Hn),
      (exports.KEY_ARROW_LEFT_COMMAND = Wn),
      (exports.KEY_ARROW_RIGHT_COMMAND = Bn),
      (exports.KEY_ARROW_UP_COMMAND = jn),
      (exports.KEY_BACKSPACE_COMMAND = Yn),
      (exports.KEY_DELETE_COMMAND = qn),
      (exports.KEY_DOWN_COMMAND = zn),
      (exports.KEY_ENTER_COMMAND = Vn),
      (exports.KEY_ESCAPE_COMMAND = Gn),
      (exports.KEY_MODIFIER_COMMAND = po),
      (exports.KEY_SPACE_COMMAND = Jn),
      (exports.KEY_TAB_COMMAND = Xn),
      (exports.LineBreakNode = _el),
      (exports.MOVE_TO_END = Kn),
      (exports.MOVE_TO_START = Un),
      (exports.NODE_STATE_DIRECT = Qt),
      (exports.NODE_STATE_KEY = $),
      (exports.NODE_STATE_LATEST = Zt),
      (exports.OUTDENT_CONTENT_COMMAND = to),
      (exports.PASTE_COMMAND = wn),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _kl),
      (exports.REDO_COMMAND = $n),
      (exports.REMOVE_TEXT_COMMAND = Dn),
      (exports.RootNode = _Ys),
      (exports.SELECTION_CHANGE_COMMAND = Cn),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = Sn),
      (exports.SELECT_ALL_COMMAND = co),
      (exports.SET_TEXT_FORMAT_COMMAND = Rn),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = Tr),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = Sr),
      (exports.SKIP_SELECTION_FOCUS_TAG = vr),
      (exports.TEXT_TYPE_TO_FORMAT = w),
      (exports.TabNode = _si),
      (exports.TextNode = _Jr2),
      (exports.UNDO_COMMAND = Ln),
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
        var n = Tf.apply(void 0, Array.from(e));
        n.length > 0 &&
          (_t$classList2 = t.classList).add.apply(_t$classList2, Array.from(n));
      }),
      (exports.aliasTableOf = Tt),
      (exports.aliasedValue = Yt),
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
              if (!mt(t, e[_o113], n[_o113])) return !1;
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
      (exports.compileKeyboardShortcuts = vo),
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
      (exports.createCommand = xn),
      (exports.createEditor = function (e) {
        var n = e || {},
          o = Ns(),
          r = n.theme || {},
          i = void 0 === e ? o : n.parentEditor || null,
          s = n.disableEvents || !1,
          l = Xs(),
          c = n.namespace || (null !== i ? i._config.namespace : vc()),
          a = n.editorState,
          u = [_Ys, _Jr2, _el, _si, _kl, _tl].concat(Array.from(n.nodes || [])),
          f = n.onError,
          d = n.onWarn,
          h = n.html,
          g = void 0 === n.editable || n.editable;
        var _;
        if (void 0 === e && null !== o) _ = o._nodes;
        else {
          _ = new Map();
          for (var _e182 = 0; _e182 < u.length; _e182++) {
            var _o114 = u[_e182],
              _r80 = null,
              _i59 = null;
            if (_o114 && "object" == typeof _o114) {
              var _t297 = _o114;
              ((_o114 = _t297.replace),
                (_r80 = _t297["with"]),
                (_i59 = _t297.withKlass || null));
            }
            if (
              "function" != typeof _o114 ||
              !_o114.prototype ||
              !(_o114 === _mr5 || _o114.prototype instanceof _mr5)
            ) {
              var _r81 = "<unknown>";
              try {
                _r81 = JSON.parse(X);
              } catch (t) {}
              t(
                365,
                String(_e182 - u.length + (n.nodes ? n.nodes.length : 0)),
                "function" == typeof _o114
                  ? "" +
                      _o114.name +
                      ("function" == typeof _o114.getType
                        ? " (type " + String(_o114.getType()) + ")"
                        : "")
                  : String(_o114),
                String(_r81),
              );
            }
            uu(_o114);
            var _s34 = _o114.getType(),
              _l26 = Fl(_o114);
            _.set(_s34, {
              exportDOM: h && h["export"] ? h["export"].get(_o114) : void 0,
              klass: _o114,
              replace: _r80,
              replaceWithKlass: _i59,
              sharedNodeState: oe(u[_e182]),
              transforms: _l26,
            });
          }
        }
        var p = new _Ll(
          l,
          i,
          _,
          {
            disableEvents: s,
            dom: babelHelpers["extends"]({}, Il, e && e.dom),
            namespace: c,
            theme: r,
          },
          f || console.error,
          d || Al,
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
            (t.registerCommand(vn, jo, wl),
              t.registerCommand(Nn, Vo, wl),
              t.registerCommand(bn, Yo, wl),
              t.registerCommand(kn, Go, wl),
              t.registerCommand(zn, ir, wl));
          })(p),
          p
        );
      }),
      (exports.createRefCountedRegistry = No),
      (exports.createSharedNodeState = oe),
      (exports.createState = function (t, e) {
        return new te(t, e);
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
      (exports.declaredAccepts = Et),
      (exports.defineExtension = function (t) {
        return t;
      }),
      (exports.enumValue = Ht),
      (exports.findAllLexicalElementsDeep = ca),
      (exports.flipDirection = Vu),
      (exports.getActiveElement = ma),
      (exports.getActiveElementDeep = ya),
      (exports.getComposedEventTarget = xa),
      (exports.getComposedSchemaFields = function (t) {
        var _eu3 = eu(t),
          e = _eu3.fieldsDerivedFirst,
          n = _eu3.flatStates,
          o = {};
        for (var _t298 of n) _t298.schema && (o[_t298.key] = _t298.schema);
        for (var _ref87 of e) {
          var _t299 = _ref87[0];
          var _n139 = _ref87[1];
          o[_t299] = _n139;
        }
        return o;
      }),
      (exports.getComposedStaticRange = fa),
      (exports.getDOMOwnerDocument = Kc),
      (exports.getDOMSelection = oa),
      (exports.getDOMSelectionFromTarget = ra),
      (exports.getDOMSelectionPoints = ha),
      (exports.getDOMSelectionRange = da),
      (exports.getDOMSelectionRangeAndPoints = function (t, e) {
        var _ga;
        var n = fa(t, e);
        if (null === n)
          return {
            points: t,
            range: t.rangeCount > 0 ? t.getRangeAt(0) : null,
          };
        var o =
          (_ga = ga(n)) != null
            ? _ga
            : t.rangeCount > 0
              ? t.getRangeAt(0)
              : null;
        return { points: _a(n, pa(t)), range: o };
      }),
      (exports.getDOMShadowRoots = la),
      (exports.getDOMTextNode = ec),
      (exports.getDeclaredSlots = Pu),
      (exports.getEditorPropertyFromDOMNode = ql),
      (exports.getNearestEditorFromDOMNode = Gl),
      (exports.getParentElement = Bc),
      (exports.getRegisteredNode = Ul),
      (exports.getRegisteredNodeOrThrow = Wl),
      (exports.getRegisteredSubtypeMap = function (t) {
        var e = new Map(),
          n = new Map();
        for (var _o115 of t) {
          var _uu2 = uu(_o115),
            _t300 = _uu2.ownNodeType;
          _t300 && (n.set(_t300, _o115), e.set(_t300, new Set()));
        }
        for (var _ref89 of n) {
          var _t301 = _ref89[0];
          var _o116 = _ref89[1];
          for (var _ref91 of _u(_o116)) {
            var _n140 = _ref91.ownNodeType;
            {
              var _o117 = _n140 && e.get(_n140);
              _o117 && _o117.add(_t301);
            }
          }
        }
        return e;
      }),
      (exports.getRootOwnerDocument = aa),
      (exports.getStaticNodeConfig = uu),
      (exports.getStyleObjectFromCSS = Rr),
      (exports.getTextDirection = function (t) {
        return M.test(t) ? "rtl" : A.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = Fl),
      (exports.getterTableOf = Ct),
      (exports.isBlockDomNode = ka),
      (exports.isCurrentlyReadOnlyMode = ms),
      (exports.isDOMCapturingSelection = Ua),
      (exports.isDOMDocumentNode = tc),
      (exports.isDOMNode = Sa),
      (exports.isDOMShadowRoot = ia),
      (exports.isDOMTextNode = Zl),
      (exports.isDOMUnmanaged = Ka),
      (exports.isDocumentFragment = Ta),
      (exports.isExactShortcutMatch = function (t, e, n) {
        if (!Mc(t, n)) return !1;
        if (t.key.toLowerCase() === e.toLowerCase()) return !0;
        if (e.length > 1) return !1;
        if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
        if (t.code.startsWith("Digit") && /^\d$/.test(e))
          return t.code === "Digit" + e;
        var o = "Key" + e.toUpperCase();
        return t.code === o;
      }),
      (exports.isHTMLAnchorElement = function (t) {
        return Ca(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = Ca),
      (exports.isHTMLTableCellElement = function (t) {
        return Ca(t) && ("TD" === t.tagName || "TH" === t.tagName);
      }),
      (exports.isHTMLTableRowElement = function (t) {
        return Ca(t) && "TR" === t.tagName;
      }),
      (exports.isInlineDomNode = Na),
      (exports.isLastChildInBlockNode = sl),
      (exports.isLexicalEditor = Yl),
      (exports.isModifierMatch = Mc),
      (exports.isOnlyChildInBlockNode = il),
      (exports.isSchemaField = xt),
      (exports.isSelectionCapturedInDecoratorInput = Vl),
      (exports.isSelectionWithinEditor = Jl),
      (exports.iterStaticNodeConfigChain = _u),
      (exports.keyboardEventMaskForPlatform = function (t, e) {
        var _babelHelpers$extends2;
        var n = t[z];
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
      (exports.makeStepwiseIterator = pf),
      (exports.mergeRegister = vf),
      (exports.mountSlotContainer = function (t, e, n, o) {
        var r = t.read("latest", function () {
          var o = ac(e);
          return null !== o
            ? (function (t, e, n) {
                if (n === void 0) {
                  n = Ea();
                }
                var o = Mu(t, e);
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
      (exports.nodeSchema = Jt),
      (exports.normalizeClassNames = Tf),
      (exports.nullable = function (t, e) {
        if (e === void 0) {
          e = {};
        }
        var _e183 = e,
          n = _e183.defaultAsNull;
        return kt(
          function (e) {
            if (null == e) return null;
            var o = t(e);
            return n && yt(t, o) ? null : o;
          },
          { defaultAsNull: n, inner: t, kind: "nullable" },
          void 0,
          Dt(t),
          Ft(t, function (t) {
            return null == t;
          }),
        );
      }),
      (exports.numberValue = jt),
      (exports.objectValue = function (t) {
        return (function (t, e) {
          var n = Object.entries(e);
          return kt(
            function (t) {
              var e = null !== t && "object" == typeof t ? t : {},
                o = {};
              for (var _t302 = 0; _t302 < n.length; _t302++) {
                var _n$_t = n[_t302],
                  _r82 = _n$_t[0],
                  _i60 = _n$_t[1];
                o[_r82] = _i60(e[_r82]);
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
                  return mt(n, t[e], o[e]);
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
        var _e184 = e,
          n = _e184.omitDefault;
        return kt(
          function (e) {
            if (void 0 === e) return;
            var o = t(e);
            return n && yt(t, o) ? void 0 : o;
          },
          { inner: t, kind: "optional", omitDefault: n },
          void 0,
          Dt(t),
          Ft(t, function (t) {
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
      (exports.registerEventListener = bo),
      (exports.registerEventListeners = function (t, e, n) {
        return vf.apply(
          void 0,
          Array.from(
            Object.entries(e).map(function (_ref93) {
              var e = _ref93[0],
                o = _ref93[1];
              return bo(t, e, o, n);
            }),
          ),
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
        var n = Tf.apply(void 0, Array.from(e));
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(
            _t$classList3,
            Array.from(n),
          );
      }),
      (exports.removeFromParent = ic),
      (exports.resetRandomKey = function () {
        Kl = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = $r),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n141 in e) {
          var _o118 = e[_n141];
          null == _o118 ? t.removeProperty(_n141) : Lr(t, _n141, _o118);
        }
      }),
      (exports.setDOMUnmanaged = Ba),
      (exports.setNodeIndentFromDOM = La),
      (exports.setterDefaultOf = vt),
      (exports.setterTableOf = St),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n142 in e)
          if (t[_n142] !== e[_n142]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.stopLexicalPropagation = ar),
      (exports.stringValue = Wt),
      (exports.toggleTextFormatType = nc),
      (exports.tokenizeRawText = es),
      (exports.transformValue = function (t, e, n) {
        if (n === void 0) {
          n = {};
        }
        return kt(
          function (n) {
            return e(t(n));
          },
          { inner: t, kind: "transform" },
          At(e(t.defaultValue)),
          n.isEqual,
          function (e) {
            return It(t, e);
          },
        );
      }),
      (exports.unionValue = function (t) {
        var n =
            0 !== (arguments.length <= 1 ? 0 : arguments.length - 1)
              ? At(arguments.length <= 1 ? undefined : arguments[1])
              : t[0].defaultValue,
          o = function o(e) {
            var n = (function (t, e) {
              return $t(t, e).member;
            })(t, e);
            return void 0 === n ? void 0 : { member: n, parsed: n(e) };
          };
        return kt(
          function (t) {
            if (void 0 === t) return n;
            var e = o(t);
            return void 0 === e ? n : e.parsed;
          },
          { kind: "union", members: t },
          n,
          Vt,
          function (e) {
            return (
              (void 0 !== e || void 0 === n) &&
              t.some(function (t) {
                return It(t, e);
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
      (exports.withAccessors = qt),
      (exports.withField = Gt));
  },
  null,
);
