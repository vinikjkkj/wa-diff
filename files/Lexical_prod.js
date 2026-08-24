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
    var _I, _F, _On, _bn;
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
      l =
        n &&
        !window.MSStream &&
        (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
          (/Macintosh/.test(navigator.userAgent) &&
            navigator.maxTouchPoints > 1)),
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
      R = Symbol["for"]("@lexical/ctrlOrOtherKey"),
      L = "$config";
    function K() {
      return Ul()._blockCursorElement;
    }
    function B(t) {
      return (
        null !== t && 1 === t.nodeType && t.hasAttribute("data-lexical-slot")
      );
    }
    var $ = d || l || a;
    function z() {
      var t = kl().createElement("img");
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
        var _n2 = _ref2[1];
        t.style.setProperty(_e2, _n2, "important");
      }
      return t;
    }
    function W(t) {
      return (
        null !== t &&
        1 === t.nodeType &&
        t.hasAttribute("data-lexical-decorator-boundary")
      );
    }
    var _U2 = (function () {
      function U(t, e, n) {
        ((this.element = t),
          (this.before = e || null),
          (this.after = n || null));
      }
      var _proto = U.prototype;
      _proto.withBefore = function withBefore(t) {
        return new U(this.element, t, this.after);
      };
      _proto.withAfter = function withAfter(t) {
        return new U(this.element, this.before, t);
      };
      _proto.withElement = function withElement(t) {
        return this.element === t ? this : new U(t, this.before, this.after);
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
        var s = H(t, e);
        if (null === s) return "after";
        var i = Array.prototype.indexOf.call(t.childNodes, s);
        return i >= 0 && i <= r ? "before" : "after";
      };
      _proto.getInsertionAnchor = function getInsertionAnchor() {
        return this.before;
      };
      return U;
    })();
    function H(t, e) {
      var n = e;
      for (; null !== n && n.parentNode !== t; ) n = n.parentNode;
      return n;
    }
    var _Y = (function (_U) {
      function Y() {
        return _U.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Y, _U);
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
          _U.prototype.getInsertionAnchor.call(this) ||
          this.getManagedLineBreak() ||
          this.getDecoratorBoundaryAnchor("trailing")
        );
      };
      _proto2.getFirstChildAnchor = function getFirstChildAnchor() {
        var t = _U.prototype.getFirstChildAnchor.call(this),
          e = t ? t.nextSibling : this.element.firstChild;
        for (; B(e); ) ((t = e), (e = e.nextSibling));
        W(e) && ((t = e), (e = e.nextSibling));
        var n = t ? t.nextSibling : this.element.firstChild;
        return null !== n && n === K() ? n : t;
      };
      _proto2.getDecoratorBoundaryAnchor = function getDecoratorBoundaryAnchor(
        t,
      ) {
        var e;
        if ("leading" === t) {
          var _t4 = _U.prototype.getFirstChildAnchor.call(this);
          for (e = _t4 ? _t4.nextSibling : this.element.firstChild; B(e); )
            e = e.nextSibling;
        } else
          ((e = this.before
            ? this.before.previousSibling
            : this.element.lastChild),
            null !== e && e === K() && (e = e.previousSibling));
        return W(e) ? e : null;
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
              z(),
              _t5 ? _t5.nextSibling : this.element.firstChild,
            );
          } else this.element.insertBefore(z(), this.before);
      };
      _proto2.getManagedLineBreak = function getManagedLineBreak() {
        return this.element.__lexicalLineBreak || null;
      };
      _proto2.setManagedLineBreak = function setManagedLineBreak(t) {
        var e = this.element,
          n = null === this.after ? e.firstChild : this.after.nextSibling,
          o = "empty" === t && B(n) ? null : t;
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
            _n3 = "IMG" === t.nodeName ? t.nextSibling : null;
          (_n3 && _e3.removeChild(_n3),
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
          r = kl().createElement("br");
        if (
          (r.setAttribute("data-lexical-managed-linebreak", "true"),
          n.insertBefore(r, o),
          t)
        ) {
          var _t7 = kl().createElement("img");
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
            _n4 = K(),
            _r2 = this.element.childNodes,
            _s2 = Math.min(o, _r2.length);
          var _i2 = 0;
          for (var _t8 = _e4; _t8 < _s2; _t8++) _r2[_t8] !== _n4 && _i2++;
          return [t, Math.min(_i2, t.getChildrenSize())];
        }
        var r = j(e, n);
        r.push(o);
        var s = j(e, this.element);
        var i = t.getIndexWithinParent();
        for (var _t9 = 0; _t9 < s.length; _t9++) {
          var _e5 = r[_t9],
            _n5 = s[_t9];
          if (void 0 === _e5 || _e5 < _n5) break;
          if (_e5 > _n5) {
            i += 1;
            break;
          }
        }
        return [t.getParentOrThrow(), i];
      };
      return Y;
    })(_U2);
    function j(e, n) {
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
    var G;
    try {
      G = "0.49.0+prod.cjs";
    } catch (t) {}
    var J = G != null ? G : '"<unknown>+source"';
    var _V = (function () {
      function V() {
        this._front = new Set();
        this._back = new Set();
      }
      var _proto3 = V.prototype;
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
      return babelHelpers.createClass(V, [
        {
          key: "size",
          get: function get() {
            return this._front.size + this._back.size;
          },
        },
      ]);
    })();
    var q = null;
    function X(t, e) {
      if (e === void 0) {
        e = 1e3;
      }
      return t instanceof _Q
        ? t.clone()
        : t.size < e
          ? new Map(t)
          : new _Q().init(new Map(t), void 0, t.size);
    }
    var _Q = (function () {
      function Q() {
        this._mutable = !1;
        this._old = void 0;
        this._nursery = void 0;
        this._size = 0;
      }
      var _proto4 = Q.prototype;
      _proto4.clone = function clone() {
        return (
          (this._mutable = !1),
          new Q().init(this._old, this._nursery, this._size)
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
        return e === q ? void 0 : e;
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
            var _n6 = _ref4[1];
            _n6 !== q ? _t1.set(_e8, _n6) : _t1["delete"](_e8);
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
          (n !== q && void 0 !== n) ||
            (this._size++, n === q && o["delete"](t)),
          o.set(t, e),
          this
        );
      };
      _proto4["delete"] = function _delete(t) {
        var e = this.has(t);
        return (e && (this.getNursery().set(t, q), this._size--), e);
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
        if (e)
          for (var _n7 of e) {
            var _e9 = _n7[0],
              _o3 = t ? t.get(_e9) : void 0;
            _o3 !== q && (void 0 !== _o3 && (_n7[1] = _o3), yield _n7);
          }
        if (t)
          for (var _n8 of t)
            _n8[1] === q || (e && e.has(_n8[0])) || (yield _n8);
      };
      _proto4.forEach = function forEach(t, e) {
        void 0 !== e && (t = t.bind(e));
        for (var _ref6 of this.entries()) {
          var _e0 = _ref6[0];
          var _n9 = _ref6[1];
          t(_n9, _e0, this);
        }
      };
      _proto4[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this.entries();
        };
      return babelHelpers.createClass(Q, [
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
    function Z(t, e, n, o, r, s) {
      if (Os(t)) {
        var _i3 = t.getFirstChild();
        for (; null !== _i3; ) {
          var _t12 = _i3.__key;
          (_i3.__parent === e &&
            ((Os(_i3) || (_c(_i3) && null !== _i3.__slots)) &&
              Z(_i3, _t12, n, o, r, s),
            n.has(_t12) || s["delete"](_t12),
            r.push(_t12)),
            (_i3 = _i3.getNextSibling()));
        }
      }
      for (var _i4 of _c(t) && null !== t.__slots ? t.__slots.values() : []) {
        var _t13 = o.get(_i4);
        void 0 !== _t13 &&
          pc(_t13) &&
          _t13.__slotHost === e &&
          ((Os(_t13) || (_c(_t13) && null !== _t13.__slots)) &&
            Z(_t13, _i4, n, o, r, s),
          n.has(_i4) || s["delete"](_i4),
          r.push(_i4));
      }
    }
    var tt = !1,
      et = 0;
    function nt(t) {
      et = t.timeStamp;
    }
    function ot(t, e, n) {
      var o = "BR" === t.nodeName,
        r = e.__lexicalLineBreak;
      return (
        (r && (t === r || (o && t.previousSibling === r))) ||
        (o && void 0 !== Di(t, n))
      );
    }
    function rt(t, e, n) {
      var o = yl(ll(n)),
        r = o && bl(o, n._rootElement);
      var s = null,
        i = null;
      null !== r &&
        r.anchorNode === t &&
        ((s = r.anchorOffset), (i = r.focusOffset));
      var l = t.nodeValue;
      null !== l && Hi(e, l, s, i, !1);
    }
    function st(t, e, n) {
      if (ar(t)) {
        var _e1 = t.anchor.getNode();
        if (_e1.is(n) && t.format !== _e1.getFormat()) return !1;
      }
      return yi(e) && n.isAttached();
    }
    function it(t, e, n) {
      for (var _o4 = t; _o4 && !nc(_o4); _o4 = el(_o4)) {
        var _t14 = Di(_o4, e);
        if (void 0 !== _t14) {
          var _e10 = bi(_t14, n);
          if (_e10) return As(_e10) || !Fl(_o4) ? void 0 : [_o4, _e10];
        }
      }
    }
    function lt(t, e, n) {
      tt = !0;
      var o = performance.now() - et > 100;
      try {
        vs(t, function () {
          var r =
              Pr() ||
              (function (t) {
                return t.read("latest", function () {
                  var t = Pr();
                  return null !== t ? t.clone() : null;
                });
              })(t),
            i = new Map(),
            l = t._editorState,
            c = t._blockCursorElement;
          var a = !1,
            u = "";
          for (var _n0 = 0; _n0 < e.length; _n0++) {
            var _f = e[_n0],
              _d = _f.type,
              _h = _f.target,
              _g = it(_h, t, l);
            if (!_g) continue;
            var _2 = _g[0],
              _p = _g[1];
            if ("characterData" === _d)
              o && qo(_p) && yi(_h) && st(r, _h, _p) && rt(_h, _p, t);
            else if ("childList" === _d) {
              a = !0;
              var _e11 = _f.addedNodes;
              for (var _n1 = 0; _n1 < _e11.length; _n1++) {
                var _o5 = _e11[_n1],
                  _r3 = Mi(_o5),
                  _i5 = _o5.parentNode;
                if (
                  !(
                    null == _i5 ||
                    _o5 === c ||
                    null !== _r3 ||
                    ot(_o5, _i5, t) ||
                    W(_o5) ||
                    (t._slotsUsed &&
                      Fl(_o5) &&
                      _o5.hasAttribute("data-lexical-slot")) ||
                    nc(_o5)
                  )
                ) {
                  if (s) {
                    var _t15 =
                      (Fl(_o5) ? _o5.innerText : null) || _o5.nodeValue;
                    _t15 && (u += _t15);
                  }
                  _i5.removeChild(_o5);
                }
              }
              var _n10 = _f.removedNodes,
                _o6 = _n10.length;
              if (_o6 > 0) {
                var _e12 = 0;
                for (var _r4 = 0; _r4 < _o6; _r4++) {
                  var _o7 = _n10[_r4];
                  ot(_o7, _h, t) || c === _o7
                    ? (_h.appendChild(_o7), _e12++)
                    : W(_o7) && _e12++;
                }
                _o6 !== _e12 && i.set(_2, _p);
              }
            }
          }
          if (i.size > 0)
            for (var _ref8 of i) {
              var _e13 = _ref8[0];
              var _n11 = _ref8[1];
              _n11.reconcileObservedMutation(_e13, t);
            }
          var f = n.takeRecords();
          if (f.length > 0) {
            for (var _e14 = 0; _e14 < f.length; _e14++) {
              var _n12 = f[_e14],
                _o8 = _n12.addedNodes,
                _r5 = _n12.target;
              for (var _e15 = 0; _e15 < _o8.length; _e15++) {
                var _n13 = _o8[_e15],
                  _s3 = _n13.parentNode;
                null == _s3 ||
                  "BR" !== _n13.nodeName ||
                  ot(_n13, _r5, t) ||
                  _s3.removeChild(_n13);
              }
            }
            n.takeRecords();
          }
          null !== r && (a && Ri(r), s && Qi(t) && r.insertRawText(u));
        });
      } finally {
        tt = !1;
      }
    }
    function ct(t) {
      var e = t._observer;
      if (null !== e) {
        lt(t, e.takeRecords(), e);
      }
    }
    function at(t) {
      (!(function (t) {
        0 === et && ll(t).addEventListener("textInput", nt, !0);
      })(t),
        (t._observer = new MutationObserver(function (e, n) {
          lt(t, e, n);
        })));
    }
    var ut = "direct",
      ft = "latest";
    var dt = function dt(t, e) {
      ((this.key = t),
        (this.parse = e.parse.bind(e)),
        (this.unparse = (e.unparse || Ct).bind(e)),
        (this.isEqual = (e.isEqual || Object.is).bind(e)),
        (this.defaultValue = this.parse(void 0)),
        (this.resetOnCopyNode = e.resetOnCopyNode || !1));
    };
    function ht(t, e, n) {
      if (n === void 0) {
        n = ft;
      }
      var o = (n === ft ? t.getLatest() : t).__state;
      return o ? o.getValue(e) : e.defaultValue;
    }
    function gt(t) {
      var e = new Map(),
        n = new Set();
      for (var _ref0 of ac("function" == typeof t ? t : t.replace)) {
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
    var _t = new Set(["__proto__", "constructor", "prototype"]);
    var _pt = (function () {
      function pt(t, e, n, o, r) {
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
      var _proto5 = pt.prototype;
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
          var _n14 = _ref10[1];
          _e18.isEqual(_n14, _e18.defaultValue)
            ? delete t[_e18.key]
            : (t[_e18.key] = _e18.unparse(_n14));
        }
        for (var _n15 of this.sharedNodeState.flatKeys)
          _n15 in t && ((e[_n15] = t[_n15]), delete t[_n15]);
        return (xt(t) && (e.$ = t), e);
      };
      _proto5.getWritable = function getWritable(t) {
        if (this.node === t) return this;
        var e = this.sharedNodeState,
          n = this.unknownState,
          o = new Map(this.knownState);
        return new pt(
          t,
          e,
          (function (t, e, n) {
            var o;
            if (n)
              for (var _ref12 of Object.entries(n)) {
                var _r7 = _ref12[0];
                var _s4 = _ref12[1];
                {
                  if (_t.has(_r7)) continue;
                  var _n16 = t.get(_r7);
                  _n16
                    ? e.has(_n16) || e.set(_n16, _n16.parse(_s4))
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
          (r && (delete r[n], (this.unknownState = xt(r))), this.size++),
          o.set(t, e));
      };
      _proto5.updateFromUnknown = function updateFromUnknown(t, e) {
        if (_t.has(t)) return;
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
            var _n17 = _ref14[1];
            this.updateFromUnknown(_e19, _n17);
          }
      };
      return pt;
    })();
    function mt(t) {
      var e = t.getWritable(),
        n = e.__state ? e.__state.getWritable(e) : new _pt(e, yt(e));
      return ((e.__state = n), n);
    }
    function yt(t) {
      return t.__state
        ? t.__state.sharedNodeState
        : li(Ul(), t.getType()).sharedNodeState;
    }
    function xt(t) {
      if (t) for (var _e20 in t) return t;
    }
    function Ct(t) {
      return t;
    }
    function St(t, e, n) {
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
    function Tt(t, e, n) {
      var o = e.unknownState,
        r = n ? n.unknownState : void 0;
      if (o)
        for (var _ref18 of Object.entries(o)) {
          var _e22 = _ref18[0];
          var _n18 = _ref18[1];
          if (t.has(_e22)) continue;
          t.add(_e22);
          if (_n18 !== (r ? r[_e22] : void 0)) return !0;
        }
      return !1;
    }
    function Nt(t, e) {
      var n = t.__state;
      return n && n.node === t ? n.getWritable(e) : n;
    }
    function vt(t, e) {
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
              (t && St(n, t, e)) ||
              (e && St(n, e, t)) ||
              (t && Tt(n, t, e)) ||
              (e && Tt(n, e, t))
            );
          })(c, a))
      );
    }
    function kt(t, e) {
      var n = t.mergeWithSibling(e),
        o = as()._normalizedNodes;
      return (o.add(t.__key), o.add(e.__key), n);
    }
    function Et(t) {
      var e,
        n,
        o = t;
      if ("" !== o.__text || !o.isSimpleText() || o.isUnmergeable()) {
        for (
          ;
          null !== (e = o.getPreviousSibling()) &&
          qo(e) &&
          e.isSimpleText() &&
          !e.isUnmergeable();
        ) {
          if ("" !== e.__text) {
            if (vt(e, o)) {
              o = kt(e, o);
              break;
            }
            break;
          }
          e.remove();
        }
        for (
          ;
          null !== (n = o.getNextSibling()) &&
          qo(n) &&
          n.isSimpleText() &&
          !n.isUnmergeable();
        ) {
          if ("" !== n.__text) {
            if (vt(o, n)) {
              o = kt(o, n);
              break;
            }
            break;
          }
          n.remove();
        }
      } else o.remove();
    }
    function Ot(t) {
      return (bt(t.anchor), bt(t.focus), t);
    }
    function bt(t) {
      for (; "element" === t.type; ) {
        var _e23 = t.getNode(),
          _n19 = t.offset;
        var _o10 = void 0,
          _r9 = void 0;
        if (
          (_n19 === _e23.getChildrenSize()
            ? ((_o10 = _e23.getChildAtIndex(_n19 - 1)), (_r9 = !0))
            : ((_o10 = _e23.getChildAtIndex(_n19)), (_r9 = !1)),
          qo(_o10))
        ) {
          t.set(_o10.__key, _r9 ? _o10.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!Os(_o10)) break;
        t.set(_o10.__key, _r9 ? _o10.getChildrenSize() : 0, "element", !0);
      }
    }
    var Mt = Symbol["for"]("@lexical/CachedTextSize");
    function At(e, n) {
      return Gt.read(
        function () {
          var o = 0,
            r = e;
          for (var _e24 = 0; _e24 < n && null !== r; _e24++) {
            var _s5 = jt.get(r);
            if ((void 0 === _s5 && t(345, r), Os(_s5))) {
              var _i6 = Jt.get(r);
              if (void 0 !== _i6 && Os(_i6) && _i6.__parent !== _s5.__parent)
                o += _s5.getTextContentSize();
              else {
                var _e25 = Vt.get(r),
                  _n20 = _e25 && _e25.__lexicalTextContent;
                ("string" != typeof _n20 && t(346, _s5.getType()),
                  (o += _n20.length));
              }
              _e24 < n - 1 && !_s5.isInline() && (o += 2);
            } else {
              var _e26 = _s5[Mt];
              (void 0 === _e26 && t(347, _s5.getType(), r), (o += _e26));
            }
            r = _s5.__next;
          }
          return o;
        },
        { editor: Pt },
      );
    }
    function Dt(t) {
      Os(t) ||
        (void 0 === t[Mt] &&
          (t[Mt] = qo(t) ? t.__text.length : t.getTextContentSize()));
    }
    var wt = 4;
    var It,
      Pt,
      Ft,
      Rt = "",
      Lt = null,
      Kt = null,
      Bt = null;
    function $t() {
      return { firstTextKey: Bt, format: Lt, style: Kt };
    }
    function zt(t) {
      null !== t.firstTextKey &&
        ((Lt = t.format), (Kt = t.style), (Bt = t.firstTextKey));
    }
    function Wt(e) {
      if (null !== Bt) return;
      var n = e.__lexicalFirstTextKey;
      if ((void 0 === n && t(348), null === n)) return;
      var o = Jt.get(n);
      qo(o) && ((Lt = o.getFormat()), (Kt = o.getStyle()), (Bt = n));
    }
    var Ut,
      Ht,
      Yt,
      jt,
      Gt,
      Jt,
      Vt,
      qt,
      Xt,
      Qt,
      Zt = !1,
      te = !1;
    function ee(t, e) {
      var n = jt.get(t),
        o = Jt.has(t);
      if (null !== e) {
        var _n21 = Oe(t);
        _n21.parentNode === e && e.removeChild(_n21);
      }
      if (!o) {
        if ((Pt._keyToDOMMap["delete"](t), Os(n))) {
          var _t19 = dc(n, jt);
          ne(_t19, 0, _t19.length - 1, null);
        }
        if (void 0 !== n) {
          for (var _t20 of fe(n).values()) {
            var _e27 = he(_t20);
            (ee(_t20, null), null !== _e27 && _e27.remove());
          }
          Vi(Xt, Ft, Ut, n, "destroyed");
        }
      }
    }
    function ne(t, e, n, o) {
      for (var _r0 = e; _r0 <= n; ++_r0) {
        var _e28 = t[_r0];
        void 0 !== _e28 && ee(_e28, o);
      }
    }
    function oe(t, e) {
      t.setProperty("text-align", e);
    }
    var re = "40px";
    function se(t, e) {
      var n = It.theme.indent;
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
          : "calc(" + e + " * var(--lexical-indent-base-value, " + re + "))",
      );
    }
    function ie(t, e) {
      var n = t.style;
      0 === e
        ? oe(n, "")
        : 1 === e
          ? oe(n, "left")
          : 2 === e
            ? oe(n, "center")
            : 3 === e
              ? oe(n, "right")
              : 4 === e
                ? oe(n, "justify")
                : 5 === e
                  ? oe(n, "start")
                  : 6 === e && oe(n, "end");
    }
    function le(t, e) {
      var n = (function (t) {
        var e = t.__dir;
        if (null !== e) return e;
        if (ws(t)) return null;
        var n = t.getParent();
        return null === n || (fl(n) && null === n.__dir) ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function ce(t) {
      var e = kl().createElement("div");
      return (
        e.setAttribute("data-lexical-slot", t),
        (e.style.display = "none"),
        e
      );
    }
    function ae(t, e, n) {
      e || "false" === t.contentEditable
        ? oc(n, Pt)
        : n.removeAttribute("contenteditable");
    }
    function ue(t, e, n) {
      var o = Rt,
        r = $t();
      Rt = "";
      var s = "";
      var i = As(t);
      for (var _ref20 of n) {
        var _o12 = _ref20[0];
        var _r1 = _ref20[1];
        {
          var _n22 = ce(_o12);
          (ae(e, i, _n22), e.appendChild(_n22), (Rt = ""));
          var _l2 = $t();
          (_e(_r1, Yl(t, _n22, Pt)), zt(_l2), de(t, _o12, e, _n22), (s += Rt));
        }
      }
      return (zt(r), (Rt = o), s);
    }
    function fe(t) {
      return _c(t) && null !== t.__slots ? t.__slots : gc;
    }
    function de(t, e, n, o) {
      var r = Qt.$getSlotTargetElement(t, e, n, Pt);
      null !== r &&
        (o.parentElement !== r && r.appendChild(o), (o.style.display = ""));
    }
    function he(t) {
      var e = Vt.get(t);
      return void 0 !== e ? e.parentElement : null;
    }
    function ge(t, e, n) {
      var o = fe(t),
        r = fe(e);
      for (var _ref22 of o) {
        var _t21 = _ref22[0];
        var _e29 = _ref22[1];
        if (!r.has(_t21)) {
          var _t22 = he(_e29);
          (ee(_e29, null), null !== _t22 && _t22.remove());
        }
      }
      var s = Rt,
        i = $t();
      var l = "",
        c = null;
      var a = As(e);
      for (var _ref24 of r) {
        var _t23 = _ref24[0];
        var _s6 = _ref24[1];
        {
          var _r10 = o.get(_t23);
          var _i7 = void 0 !== _r10 ? he(_r10) : null;
          Rt = "";
          var _u = $t();
          if (null === _i7) {
            _i7 = ce(_t23);
            var _o13 = null;
            for (var _t24 of n.children)
              if (!_t24.hasAttribute("data-lexical-slot")) {
                _o13 = _t24;
                break;
              }
            (n.insertBefore(_i7, _o13), _e(_s6, Yl(e, _i7, Pt)));
          } else
            _r10 === _s6
              ? Te(_s6, _i7)
              : (void 0 !== _r10 && ee(_r10, _i7), _e(_s6, Yl(e, _i7, Pt)));
          if (
            (zt(_u),
            ae(n, a, _i7),
            de(e, _t23, n, _i7),
            (l += Rt),
            _i7.parentElement === n)
          ) {
            var _t25 = null === c ? n.firstChild : c.nextSibling;
            (_t25 !== _i7 && n.insertBefore(_i7, _t25), (c = _i7));
          }
        }
      }
      return (zt(i), (Rt = s), l);
    }
    function _e(e, n) {
      var o = Jt.get(e);
      if ((void 0 === o && t(60), null !== n)) {
        var _t26 = jt.get(e);
        if (void 0 !== _t26) {
          var _r11 = Vt.get(e);
          if (void 0 !== _r11) {
            var _s7 = pc(_t26) ? _t26.__slotHost : null,
              _i8 = pc(o) ? o.__slotHost : null,
              _l3 = _t26.__parent !== o.__parent || _s7 !== _i8,
              _c2 = null !== _i8 && _r11.parentElement !== n.element;
            if (_l3 || _c2) return (n.insertChild(_r11), Te(e, n.element));
          }
        }
      }
      var r = Qt.$createDOM(o, Pt);
      if (
        ((function (t, e, n) {
          var o = n._keyToDOMMap;
          (Ai(e, n, t), o.set(t, e));
        })(e, r, Pt),
        qo(o)
          ? r.setAttribute("data-lexical-text", "true")
          : As(o) &&
            (r.setAttribute("data-lexical-decorator", "true"),
            ec(r, { captureSelection: !0 })),
        Os(o))
      ) {
        var _t27 = o.__indent,
          _e30 = o.__size;
        (le(r, o), 0 !== _t27 && se(r, _t27));
        var _n23 = fe(o),
          _s8 = _n23.size > 0 ? ue(o, r, _n23) : "";
        if (0 === _e30)
          ((r.__lexicalTextContent = _s8),
            (r.__lexicalFirstTextKey = null),
            (Rt += _s8),
            _n23.size > 0 && (r.__lexicalSlotTextLength = _s8.length));
        else {
          var _t28 = Rt,
            _i9 = _e30 - 1;
          if ((pe(dc(o, Jt), o, 0, _i9, Yl(o, r, Pt)), "" !== _s8)) {
            var _e31 = r.__lexicalTextContent || "";
            ((r.__lexicalTextContent = _s8 + _e31), (Rt = _t28 + _s8 + _e31));
          }
          _n23.size > 0 && (r.__lexicalSlotTextLength = _s8.length);
        }
        var _i0 = o.__format;
        (0 !== _i0 && ie(r, _i0), o.isInline() || (xe(null, o, r), ye(o, r)));
      } else {
        var _t29 = o.getTextContent();
        if (As(o)) {
          var _t30 = o.decorate(Pt, It);
          (null !== _t30 && Ne(e, _t30), (r.contentEditable = "false"));
          var _n24 = fe(o);
          _n24.size > 0 && ue(o, r, _n24);
        }
        Rt += _t29;
      }
      return (
        null !== n && n.insertChild(r),
        Qt.$decorateDOM(o, null, r, Pt),
        Dt(o),
        Vi(Xt, Ft, Ut, o, "created"),
        r
      );
    }
    function pe(e, n, o, r, s) {
      var i = Rt,
        l = $t();
      ((Rt = ""), (Lt = null), (Kt = null), (Bt = null));
      var c = o;
      for (; c <= r; ++c) {
        var _t31 = $t();
        _e(e[c], s);
        var _n25 = Jt.get(e[c]);
        (null !== _n25 && qo(_n25)
          ? null === Lt &&
            ((Lt = _n25.getFormat()), (Kt = _n25.getStyle()), (Bt = _n25.__key))
          : Os(_n25) && c < r && !_n25.isInline() && (Rt += v),
          zt(_t31));
      }
      var a = Pt._keyToDOMMap.get(n.__key);
      (void 0 === a && t(349, n.__key),
        (a.__lexicalTextContent = Rt),
        (a.__lexicalFirstTextKey = Bt),
        (Rt = i + Rt),
        zt(l));
    }
    function me(t, e) {
      if (!t) return !1;
      var n = e.get(t);
      return As(n) && !n.isInline();
    }
    function ye(t, e) {
      var n = Yl(t, e, Pt);
      (n.setDecoratorBoundaryAnchor("leading", me(t.__first, Jt)),
        n.setDecoratorBoundaryAnchor("trailing", me(t.__last, Jt)));
    }
    function xe(t, e, n) {
      var o = Yl(e, n, Pt),
        r = (function (t, e) {
          if (t) {
            var _n26 = t.__last;
            if (_n26) {
              var _t32 = e.get(_n26);
              if (_t32)
                return zs(_t32)
                  ? "line-break"
                  : As(_t32) && _t32.isInline()
                    ? "decorator"
                    : null;
            }
            return "empty";
          }
          return null;
        })(e, Jt);
      o.setManagedLineBreak(r);
    }
    function Ce(e, n, o) {
      var r;
      ((Lt = null),
        (Kt = null),
        (Bt = null),
        (function (e, n, o) {
          var r = Rt,
            s = e.__size,
            i = n.__size;
          Rt = "";
          var l = o.element,
            c = Pt._keyToDOMMap.get(n.__key);
          void 0 === c && t(351, n.__key);
          var a = i - s;
          if (
            !Zt &&
            Math.abs(a) <= 1 &&
            s >= wt &&
            e.__first === n.__first &&
            (0 !== a || !Pt._cloneNotNeeded.has(e.__key))
          ) {
            var _s9 = c.__lexicalTextContent,
              _u2 = qt.get(e.__key);
            if (!Zt && "string" == typeof _s9 && void 0 !== _u2) {
              var _i1 = (function (t, e) {
                var n = e.size;
                if (0 === n || n >= t.__size) return null;
                var o = t.__last,
                  r = null,
                  s = 0;
                for (; null !== o && s < n; ) {
                  if (!e.has(o)) return null;
                  r = o;
                  var _t33 = Jt.get(o);
                  if (void 0 === _t33) return null;
                  ((o = _t33.__prev), s++);
                }
                if (s !== n) return null;
                if (null !== o && e.has(o)) return null;
                return r;
              })(n, _u2);
              if (null !== _i1) {
                var _f2 = _u2.size;
                if (0 === a) {
                  var _e32 = At(_i1, _f2);
                  var _o14 = _i1,
                    _a2 = 0;
                  for (; null !== _o14 && _a2 < _f2; ) {
                    var _t34 = Jt.get(_o14);
                    if (void 0 === _t34) break;
                    var _e33 = $t();
                    (Te(_o14, l),
                      qo(_t34) &&
                        null === Lt &&
                        ((Lt = _t34.getFormat()),
                        (Kt = _t34.getStyle()),
                        (Bt = _t34.__key)),
                      zt(_e33),
                      (_o14 = _t34.__next),
                      _a2++);
                  }
                  var _d2 = "";
                  for (_o14 = _i1, _a2 = 0; null !== _o14 && _a2 < _f2; ) {
                    var _e34 = Jt.get(_o14);
                    if (void 0 === _e34) break;
                    var _n27 = void 0;
                    if (Os(_e34)) {
                      var _r12 = Pt._keyToDOMMap.get(_o14),
                        _s0 = _r12 && _r12.__lexicalTextContent;
                      ("string" != typeof _s0 && t(352, _e34.getType()),
                        (_n27 = _s0));
                    } else _n27 = _e34.getTextContent();
                    ((_d2 += _n27),
                      _a2 < _f2 - 1 &&
                        Os(_e34) &&
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
                    (Rt = r + _3),
                    void Se(n, c, _u2)
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
                      var _t36 = jt.get(f);
                      if (void 0 === _t36) return !1;
                      f = _t36.__prev;
                    }
                    if (null === f) return !1;
                    var d = Jt.get(i),
                      h = jt.get(f);
                    if (void 0 === d || void 0 === h) return !1;
                    if (d.__prev !== h.__prev) return !1;
                    var g = [];
                    var _ = i;
                    for (var _t37 = 0; _t37 < l; _t37++) {
                      if (null === _) return !1;
                      g.push(_);
                      var _t38 = Jt.get(_);
                      _ = _t38 ? _t38.__next : null;
                    }
                    var p = [];
                    _ = f;
                    for (var _t39 = 0; _t39 < u; _t39++) {
                      if (null === _) return !1;
                      p.push(_);
                      var _t40 = jt.get(_);
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
                    var T = At(f, u);
                    for (var _t41 of x) {
                      var _e35 = $t();
                      if ("reconcile" === _t41.kind) Te(_t41.key, o.element);
                      else if ("destroy" === _t41.kind) ee(_t41.key, o.element);
                      else {
                        var _e36 = null;
                        for (var _n28 = _t41.nextIndex + 1; _n28 < l; _n28++) {
                          var _t42 = Pt._keyToDOMMap.get(g[_n28]);
                          if (void 0 !== _t42) {
                            _e36 = _t42;
                            break;
                          }
                        }
                        _e(
                          _t41.key,
                          o.withBefore(_e36 != null ? _e36 : o.before),
                        );
                      }
                      if ("destroy" !== _t41.kind) {
                        var _e37 = Jt.get(_t41.key);
                        _e37 &&
                          qo(_e37) &&
                          null === Lt &&
                          ((Lt = _e37.getFormat()),
                          (Kt = _e37.getStyle()),
                          (Bt = _e37.__key));
                      }
                      zt(_e35);
                    }
                    var N = "";
                    for (var _e38 = 0; _e38 < l; _e38++) {
                      var _n29 = Jt.get(g[_e38]);
                      if (void 0 === _n29) return !1;
                      var _o15 = void 0;
                      if (Os(_n29)) {
                        var _r13 = Pt._keyToDOMMap.get(g[_e38]),
                          _s1 = _r13 && _r13.__lexicalTextContent;
                        ("string" != typeof _s1 && t(350, _n29.getType()),
                          (_o15 = _s1));
                      } else _o15 = _n29.getTextContent();
                      ((N += _o15),
                        _e38 < l - 1 &&
                          Os(_n29) &&
                          !_n29.isInline() &&
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
                    (Rt = r + _e39),
                    void Se(n, c, _u2)
                  );
                }
              }
            }
            if (0 === a) {
              var _n30 = e.__first,
                _o16 = 0;
              for (; null !== _n30; ) {
                var _e40 = Jt.get(_n30);
                if (void 0 === _e40) break;
                var _r14 = Zt || Yt.has(_n30) || Ht.has(_n30),
                  _s10 = $t();
                if (_r14) Te(_n30, l);
                else {
                  var _o17 = void 0,
                    _r15 = void 0;
                  if (Os(_e40)) {
                    _r15 = Vt.get(_n30);
                    var _s11 = _r15 && _r15.__lexicalTextContent;
                    ("string" != typeof _s11 && t(354, _e40.getType()),
                      (_o17 = _s11));
                  } else _o17 = _e40.getTextContent();
                  ((Rt += _o17), void 0 !== _r15 && Wt(_r15));
                }
                (qo(_e40)
                  ? null === Lt &&
                    ((Lt = _e40.getFormat()),
                    (Kt = _e40.getStyle()),
                    (Bt = _e40.__key))
                  : Os(_e40) && _o16 < i - 1 && !_e40.isInline() && (Rt += v),
                  zt(_s10),
                  (_n30 = _e40.__next),
                  _o16++);
              }
              return (
                (c.__lexicalTextContent = Rt),
                (c.__lexicalFirstTextKey = Bt),
                void (Rt = r + Rt)
              );
            }
          }
          if (1 === s && 1 === i) {
            var _t43 = e.__first,
              _r16 = n.__first;
            if (_t43 === _r16) Te(_t43, l);
            else {
              var _e41 = Oe(_t43),
                _n31 = _e(_r16, null);
              try {
                _e41.parentNode === l
                  ? l.replaceChild(_n31, _e41)
                  : o.insertChild(_n31);
              } catch (o) {
                if ("object" == typeof o && null != o) {
                  var _s12 =
                    o.toString() +
                    " Parent: " +
                    l.tagName +
                    ", new child: {tag: " +
                    _n31.tagName +
                    " key: " +
                    _r16 +
                    "}, old child: {tag: " +
                    _e41.tagName +
                    ", key: " +
                    _t43 +
                    "}.";
                  throw new Error(_s12);
                }
                throw o;
              }
              ee(_t43, null);
            }
            var _s13 = Jt.get(_r16);
            qo(_s13) &&
              null === Lt &&
              ((Lt = _s13.getFormat()),
              (Kt = _s13.getStyle()),
              (Bt = _s13.__key));
          } else {
            var _r17 = dc(e, jt),
              _c3 = dc(n, Jt);
            if (
              (_r17.length !== s && t(227), _c3.length !== i && t(228), 0 === s)
            )
              0 !== i && pe(_c3, n, 0, i - 1, o);
            else if (0 === i) {
              if (0 !== s) {
                var _t44 =
                  null == o.after &&
                  null == o.before &&
                  0 === fe(n).size &&
                  null == o.element.__lexicalLineBreak;
                (ne(_r17, 0, s - 1, _t44 ? null : l),
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
                    _r18 = $t();
                  if (_t45 === _o18) ((u = ve(Te(_o18, s.element))), f++, d++);
                  else {
                    if ((void 0 === a && (a = ke(n, d)), void 0 === c))
                      c = ke(e, f);
                    else if (!c.has(_t45)) {
                      (f++, zt(_r18));
                      continue;
                    }
                    if (!a.has(_t45)) {
                      ((u = ve(Oe(_t45))),
                        ee(_t45, s.element),
                        f++,
                        c["delete"](_t45),
                        zt(_r18));
                      continue;
                    }
                    if (c.has(_o18)) {
                      var _t46 = tl(Pt, _o18);
                      (_t46 !== u &&
                        s
                          .withBefore(u != null ? u : s.before)
                          .insertChild(_t46),
                        (u = ve(Te(_o18, s.element))),
                        f++,
                        d++);
                    } else
                      (_e(_o18, s.withBefore(u != null ? u : s.before)), d++);
                  }
                  var _i10 = Jt.get(_o18);
                  (null !== _i10 && qo(_i10)
                    ? null === Lt &&
                      ((Lt = _i10.getFormat()),
                      (Kt = _i10.getStyle()),
                      (Bt = _i10.__key))
                    : Os(_i10) && d <= l && !_i10.isInline() && (Rt += v),
                    zt(_r18));
                }
                var h = f > i,
                  g = d > l;
                if (h && !g) {
                  var _e42 = n[l + 1],
                    _o19 = void 0 === _e42 ? null : Pt.getElementByKey(_e42);
                  pe(n, t, d, l, s.withBefore(_o19 != null ? _o19 : s.before));
                } else g && !h && ne(e, f, i, s.element);
              })(n, _r17, _c3, s, i, o);
          }
          ((c.__lexicalTextContent = Rt),
            (c.__lexicalFirstTextKey = Bt),
            (Rt = r + Rt));
        })(e, n, Yl(n, o, Pt)),
        fl(n) ||
          ((r = n),
          null == Lt || Lt === r.__textFormat || te || r.setTextFormat(Lt),
          (function (t) {
            null == Kt || Kt === t.__textStyle || te || t.setTextStyle(Kt);
          })(n)));
    }
    function Se(t, e, n) {
      var o = e.__lexicalFirstTextKey;
      if (null != o) {
        var _e43 = t.__key;
        var _r19 = o;
        for (; null !== _r19; ) {
          var _t47 = Jt.get(_r19);
          if (void 0 === _t47) {
            _r19 = null;
            break;
          }
          if (_t47.__parent === _e43) break;
          _r19 = _t47.__parent;
        }
        if (null !== _r19 && !n.has(_r19)) {
          var _t48 = Jt.get(o);
          if (qo(_t48))
            return ((Lt = _t48.getFormat()), void (Kt = _t48.getStyle()));
        }
      }
      e.__lexicalFirstTextKey = Bt;
    }
    function Te(e, n) {
      var o = jt.get(e);
      var r = Jt.get(e);
      (void 0 !== o && void 0 !== r) || t(61);
      var s = Zt || Yt.has(e) || Ht.has(e),
        i = tl(Pt, e);
      if (o === r && !s) {
        var _e44;
        if (Os(o)) {
          var _n32 = i.__lexicalTextContent;
          ("string" != typeof _n32 && t(355, o.getType()),
            (_e44 = _n32),
            Wt(i));
        } else _e44 = o.getTextContent();
        return ((Rt += _e44), i);
      }
      if (
        (o !== r && s && Vi(Xt, Ft, Ut, r, "updated"),
        Qt.$updateDOM(r, o, i, Pt))
      ) {
        var _o20 = _e(e, null);
        return (
          null === n && t(62),
          n.replaceChild(_o20, i),
          ee(e, null),
          _o20
        );
      }
      if (Os(o)) {
        Os(r) || t(334, e);
        var _n33 = r.__indent;
        (Zt || _n33 !== o.__indent) && se(i, _n33);
        var _l4 = r.__format;
        (Zt || _l4 !== o.__format) && ie(i, _l4);
        var _c4 = s && (fe(r).size > 0 || fe(o).size > 0) ? ge(o, r, i) : "";
        if (s) {
          var _t49 = Rt;
          if (
            (Ce(o, r, i),
            r.isInline() || (ws(r) || xe(0, r, i), ye(r, i)),
            "" !== _c4)
          ) {
            var _e45 = i.__lexicalTextContent || "";
            ((i.__lexicalTextContent = _c4 + _e45),
              (Rt = _t49 + _c4 + _e45),
              (i.__lexicalSlotTextLength = _c4.length));
          } else
            (fe(r).size > 0 || fe(o).size > 0) &&
              (i.__lexicalSlotTextLength = 0);
        } else {
          var _e46 = i.__lexicalTextContent;
          ("string" != typeof _e46 && t(356, o.getType()), (Rt += _e46), Wt(i));
        }
        if (
          (Zt || r.__dir !== o.__dir || r.__parent !== o.__parent) &&
          (le(i, r), ws(r) && !Zt)
        )
          for (var _t50 of r.getChildren())
            if (Os(_t50)) {
              le(tl(Pt, _t50.getKey()), _t50);
            }
      } else {
        var _t51 = r.getTextContent();
        if (As(r)) {
          var _t52 = r.decorate(Pt, It);
          (null !== _t52 && Ne(e, _t52),
            s && (fe(r).size > 0 || fe(o).size > 0) && ge(o, r, i));
        }
        Rt += _t51;
      }
      if (!te && ws(r)) {
        var _t53 = r.getLatest();
        if (_t53.__cachedText !== Rt) {
          var _e47 = _t53.getWritable();
          ((_e47.__cachedText = Rt), (r = _e47));
        }
      }
      return (Qt.$decorateDOM(r, o, i, Pt), Dt(r), i);
    }
    function Ne(t, e) {
      var n = Pt._pendingDecorators;
      var o = Pt._decorators;
      if (null === n) {
        if (o[t] === e) return;
        n = Ii(Pt);
      }
      n[t] = e;
    }
    function ve(t) {
      var e = t.nextSibling;
      return (
        null !== e && e === Pt._blockCursorElement && (e = e.nextSibling),
        e
      );
    }
    function ke(t, e) {
      var n = new Set();
      for (var _o21 = e; _o21 < t.length; _o21++) n.add(t[_o21]);
      return n;
    }
    function Ee(t, e, n, o, r, s) {
      ((Rt = ""),
        (Lt = null),
        (Kt = null),
        (Bt = null),
        (Zt = 2 === o),
        (Pt = n),
        (It = n._config),
        (Qt = n._config.dom || Zs),
        (Ft = n._nodes),
        (Ut = Pt._listeners.mutation),
        (Ht = r),
        (Yt = s),
        (jt = t._nodeMap),
        (Gt = t),
        (Jt = e._nodeMap),
        (te = e._readOnly),
        (Vt = X(n._keyToDOMMap)),
        (qt = (function () {
          var t = new Map(),
            e = function e(_e49) {
              for (var _n34 of _e49) {
                var _e48 = Jt.get(_n34);
                if (void 0 === _e48) continue;
                var _o22 = _e48.__parent;
                if (null === _o22) continue;
                var _r20 = t.get(_o22);
                (void 0 === _r20 && ((_r20 = new Set()), t.set(_o22, _r20)),
                  _r20.add(_n34));
              }
            };
          return (e(Ht.keys()), e(Yt), t);
        })()));
      var i = new Map();
      return (
        (Xt = i),
        Te("root", null),
        (Pt = void 0),
        (Ft = void 0),
        (Ht = void 0),
        (Yt = void 0),
        (jt = void 0),
        (Gt = void 0),
        (Jt = void 0),
        (It = void 0),
        (Vt = void 0),
        (qt = void 0),
        (Xt = void 0),
        (Qt = Zs),
        i
      );
    }
    function Oe(e) {
      var n = Vt.get(e);
      return (void 0 === n && t(75, e), n);
    }
    function be(t) {
      return { type: t };
    }
    var Me = be("SELECTION_CHANGE_COMMAND"),
      Ae = be("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"),
      De = be("CLICK_COMMAND"),
      we = be("BEFORE_INPUT_COMMAND"),
      Ie = be("INPUT_COMMAND"),
      Pe = be("COMPOSITION_START_COMMAND"),
      Fe = be("COMPOSITION_END_COMMAND"),
      Re = be("DELETE_CHARACTER_COMMAND"),
      Le = be("INSERT_LINE_BREAK_COMMAND"),
      Ke = be("INSERT_PARAGRAPH_COMMAND"),
      Be = be("CONTROLLED_TEXT_INSERTION_COMMAND"),
      $e = be("PASTE_COMMAND"),
      ze = be("REMOVE_TEXT_COMMAND"),
      We = be("DELETE_WORD_COMMAND"),
      Ue = be("DELETE_LINE_COMMAND"),
      He = be("FORMAT_TEXT_COMMAND"),
      Ye = be("SET_TEXT_FORMAT_COMMAND"),
      je = be("UNDO_COMMAND"),
      Ge = be("REDO_COMMAND"),
      Je = be("KEYDOWN_COMMAND"),
      Ve = be("KEY_ARROW_RIGHT_COMMAND"),
      qe = be("MOVE_TO_END"),
      Xe = be("KEY_ARROW_LEFT_COMMAND"),
      Qe = be("MOVE_TO_START"),
      Ze = be("KEY_ARROW_UP_COMMAND"),
      tn = be("KEY_ARROW_DOWN_COMMAND"),
      en = be("KEY_ENTER_COMMAND"),
      nn = be("KEY_SPACE_COMMAND"),
      on = be("KEY_BACKSPACE_COMMAND"),
      rn = be("KEY_ESCAPE_COMMAND"),
      sn = be("KEY_DELETE_COMMAND"),
      ln = be("KEY_TAB_COMMAND"),
      cn = be("INSERT_TAB_COMMAND"),
      an = be("INDENT_CONTENT_COMMAND"),
      un = be("OUTDENT_CONTENT_COMMAND"),
      fn = be("DROP_COMMAND"),
      dn = be("FORMAT_ELEMENT_COMMAND"),
      hn = be("DRAGSTART_COMMAND"),
      gn = be("DRAGOVER_COMMAND"),
      _n = be("DRAGEND_COMMAND"),
      pn = be("COPY_COMMAND"),
      mn = be("CUT_COMMAND"),
      yn = be("SELECT_ALL_COMMAND"),
      xn = be("CLEAR_EDITOR_COMMAND"),
      Cn = be("CLEAR_HISTORY_COMMAND"),
      Sn = be("CAN_REDO_COMMAND"),
      Tn = be("CAN_UNDO_COMMAND"),
      Nn = be("FOCUS_COMMAND"),
      vn = be("BLUR_COMMAND"),
      kn = be("KEY_MODIFIER_COMMAND");
    function En(t) {
      throw new Error(t);
    }
    var On =
        ((_On = {}),
        (_On[R] = "metaKey"),
        (_On.ctrlKey = !r),
        (_On.metaKey = r),
        _On),
      bn =
        ((_bn = {}),
        (_bn[R] = "altKey"),
        (_bn.altKey = r),
        (_bn.ctrlKey = !r),
        _bn),
      Mn = [
        ["altKey", 1],
        ["ctrlKey", 2],
        ["metaKey", 4],
        ["shiftKey", 8],
      ];
    function An(t, e, n) {
      var o = t.get(e);
      o ? o.push(n) : t.set(e, [n]);
    }
    var _Dn = (function () {
      function Dn() {
        this.byKey = new Map();
        this.byCode = new Map();
      }
      var _proto6 = Dn.prototype;
      _proto6.add = function add(t) {
        var e = t.key,
          _t$modifiers = t.modifiers,
          n = _t$modifiers === void 0 ? {} : _t$modifiers;
        e.length > 0 || En("KeyboardShortcutMatch: key must be non-empty");
        var o = e.toLowerCase();
        for (var _r21 of (function (t) {
          var e = [0];
          var _loop = function _loop() {
            var n = _ref26[0];
            var o = _ref26[1];
            {
              var _r22 = t[n] || !1;
              "any" === _r22
                ? (e = e.concat(
                    e.map(function (t) {
                      return t | o;
                    }),
                  ))
                : _r22 &&
                  (e = e.map(function (t) {
                    return t | o;
                  }));
            }
          };
          for (var _ref26 of Mn) {
            _loop();
          }
          return e;
        })(n))
          (An(this.byKey, _r21 + ":" + o, t),
            1 === e.length &&
              (/[0-9]/.test(e)
                ? An(this.byCode, _r21 + ":Digit" + e, t)
                : /[a-z]/.test(o) &&
                  An(this.byCode, _r21 + ":Key" + o.toUpperCase(), t)));
        return this;
      };
      _proto6.matches = function matches(t) {
        var e = t.key;
        if (!e) return [];
        var n = (function (t) {
            var e = 0;
            for (var _ref28 of Mn) {
              var _n35 = _ref28[0];
              var _o23 = _ref28[1];
              t[_n35] && (e |= _o23);
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
      return Dn;
    })();
    function wn(t) {
      var e = new _Dn();
      for (var _n36 of t) e.add(_n36);
      return e;
    }
    function In(t) {
      var e = new Map();
      return {
        dispose: function dispose() {
          for (var _t54 of e.values()) _t54.dispose();
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
    function Pn(t, e, n, o) {
      return (
        t.addEventListener(e, n, o),
        t.removeEventListener.bind(t, e, n, o)
      );
    }
    var Fn = Object.freeze({}),
      Rn = [
        [
          "keydown",
          function (t, e) {
            var n = e._inputState;
            ((n.lastKeyDownTimeStamp = t.timeStamp),
              (n.lastKeyCode = t.key),
              "Backspace" !== t.key && Gn(n));
            if (e.isComposing()) return;
            Zi(e, Je, t);
          },
        ],
        [
          "pointerdown",
          function (t, e) {
            var n = Pl(t),
              o = t.pointerType;
            Rl(n) &&
              "touch" !== o &&
              "pen" !== o &&
              0 === t.button &&
              vs(e, function () {
                rc(n, e) || (e._inputState.isSelectionChangeFromMouseDown = !0);
              });
          },
        ],
        [
          "compositionstart",
          function (t, e) {
            Zi(e, Pe, t);
          },
        ],
        [
          "compositionend",
          function (t, e) {
            var n = e._inputState;
            s
              ? (n.compositionPhase = "ending-firefox")
              : l || (!a && !d)
                ? Zi(e, Fe, t)
                : ((n.compositionPhase = "ending-safari"),
                  (n.compositionEndData = t.data));
          },
        ],
        [
          "input",
          function (t, e) {
            t.stopPropagation();
            var n = e._inputState;
            (Gn(n),
              vs(
                e,
                function () {
                  Vn(t, e) || e.dispatchCommand(Ie, t);
                },
                { event: t },
              ),
              (n.unprocessedBeforeInputData = null));
          },
        ],
        [
          "click",
          function (t, e) {
            vs(e, function () {
              var n = Pr(),
                o = yl(ll(e)),
                r = Fr();
              if (o)
                if (ar(n)) {
                  var _t55 = n.anchor,
                    _e51 = _t55.getNode();
                  "element" === _t55.type &&
                    0 === _t55.offset &&
                    n.isCollapsed() &&
                    !ws(_e51) &&
                    1 === Fi().getChildrenSize() &&
                    _e51.getTopLevelElementOrThrow().isEmpty() &&
                    null !== r &&
                    n.is(r) &&
                    (o.removeAllRanges(), (n.dirty = !0));
                } else if (
                  "touch" === t.pointerType ||
                  "pen" === t.pointerType
                ) {
                  var _n37 = bl(o, e._rootElement).anchorNode;
                  if (Fl(_n37) || yi(_n37)) {
                    Ri(Ir(r, o, e, t));
                  }
                }
              if (s && null !== o && 0 === o.rangeCount) {
                var _n38 = e._rootElement;
                if (null !== _n38 && t.target === _n38) {
                  var _s15 = t.clientY;
                  var _i11 = _n38.childNodes.length;
                  for (var _t56 = 0; _t56 < _n38.childNodes.length; _t56++) {
                    var _e52 = _n38.childNodes[_t56];
                    if (Fl(_e52)) {
                      var _n39 = _e52.getBoundingClientRect();
                      if (_s15 <= (_n39.top + _n39.bottom) / 2) {
                        _i11 = _t56;
                        break;
                      }
                    }
                  }
                  o.setBaseAndExtent(_n38, _i11, _n38, _i11);
                  var _l5 = Ir(r, o, e, t);
                  null !== _l5 ? Ri(_l5) : o.removeAllRanges();
                }
              }
              Zi(e, De, t);
            });
          },
        ],
        ["cut", Fn],
        ["copy", Fn],
        ["dragstart", Fn],
        ["dragover", Fn],
        ["dragend", Fn],
        ["paste", Fn],
        ["focus", Fn],
        ["blur", Fn],
        ["drop", Fn],
      ];
    i &&
      Rn.push([
        "beforeinput",
        function (t, e) {
          return (function (t, e) {
            var n = t.inputType;
            if ("deleteCompositionText" === n || (s && Qi(e))) return;
            if ("insertCompositionText" === n) return;
            vs(
              e,
              function () {
                Vn(t, e) || Zi(e, we, t);
              },
              { event: t },
            );
          })(t, e);
        },
      ]);
    var Ln = new WeakMap(),
      Kn = new WeakMap(),
      Bn = In(function (t) {
        return (
          t.addEventListener("selectionchange", uo),
          function () {
            return t.removeEventListener("selectionchange", uo);
          }
        );
      });
    function $n(t, e, n, o, r, s) {
      var l = t.anchor,
        c = t.focus,
        a = l.getNode(),
        u = as();
      var f;
      if (void 0 !== s) f = s;
      else {
        var _t57 = yl(ll(u));
        f = null !== _t57 ? bl(_t57, u._rootElement) : null;
      }
      var d = null !== f ? f.anchorNode : null,
        h = l.key,
        g = u.getElementByKey(h),
        _ = n.length;
      return (
        h !== c.key ||
        !qo(a) ||
        (((!r &&
          (!i || u._inputState.lastBeforeInputInsertTextTimeStamp < o + 50)) ||
          (a.isDirty() && _ < 2) ||
          Bi(n)) &&
          l.offset !== c.offset &&
          !a.isComposing()) ||
        mi(a) ||
        (a.isDirty() && _ > 1) ||
        ((r || !i) && null !== g && !a.isComposing() && d !== Gl(a, g, u)) ||
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
            r = pi(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!o.canInsertTextBefore() && !e.isComposing()) ||
                r ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (qo(e) || (Os(e) && e.isInline())) &&
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
    function zn(t, e) {
      return (
        yi(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function Wn(e, n, o) {
      var _bl = bl(e, n._rootElement),
        r = _bl.anchorNode,
        s = _bl.anchorOffset,
        i = _bl.focusNode,
        l = _bl.focusOffset,
        c = n._inputState;
      if (c.isSelectionChangeFromDOMUpdate) {
        c.isSelectionChangeFromDOMUpdate = !1;
        var _t58 = c.selectionChangeFromDOMUpdatePoints;
        if (
          ((c.selectionChangeFromDOMUpdatePoints = null),
          zn(r, s) &&
            zn(i, l) &&
            !c.postDeleteSelectionToRestore &&
            (null === _t58 ||
              (_t58.anchorNode === r &&
                _t58.anchorOffset === s &&
                _t58.focusNode === i &&
                _t58.focusOffset === l)))
        )
          return;
      }
      vs(n, function () {
        if (!o) return void Ri(null);
        if (!di(n, r, i)) return;
        var a = Pr();
        if (c.postDeleteSelectionToRestore && ar(a) && a.isCollapsed()) {
          var _t59 = a.anchor,
            _e53 = c.postDeleteSelectionToRestore.anchor;
          ((_t59.key === _e53.key && _t59.offset === _e53.offset + 1) ||
            (1 === _t59.offset &&
              _e53.getNode().is(_t59.getNode().getPreviousSibling()))) &&
            ((a = c.postDeleteSelectionToRestore.clone()), Ri(a));
        }
        if (((c.postDeleteSelectionToRestore = null), ar(a))) {
          var _o24 = a.anchor,
            _u3 = _o24.getNode();
          if (a.isCollapsed()) {
            "Range" === e.type && r === i && (a.dirty = !0);
            var _s16 = ll(n).event,
              _l6 = _s16 ? _s16.timeStamp : performance.now(),
              _c$collapsedSelection = c.collapsedSelectionFormat,
              _f3 = _c$collapsedSelection.format,
              _d3 = _c$collapsedSelection.style,
              _h3 = _c$collapsedSelection.offset,
              _g3 = _c$collapsedSelection.key,
              _4 = _c$collapsedSelection.timeStamp,
              _p2 = Fi(),
              _m = !1 === n.isComposing() && "" === _p2.getTextContent();
            if (_l6 < _4 + 200 && _o24.offset === _h3 && _o24.key === _g3)
              Un(a, _f3, _d3);
            else if ("text" === _o24.type) (qo(_u3) || t(141), Hn(a, _u3));
            else if ("element" === _o24.type && !_m) {
              Os(_u3) || t(259);
              var _e54 = _o24.getNode();
              _e54.isEmpty()
                ? (function (t, e) {
                    var n = e.getTextFormat(),
                      o = e.getTextStyle();
                    Un(t, n, o);
                  })(a, _e54)
                : Un(a, a.format, "");
            }
          } else {
            var _t60 = _o24.key,
              _e55 = a.focus.key,
              _n40 = a.getNodes(),
              _r23 = _n40.length,
              _i12 = a.isBackward(),
              _c5 = _i12 ? l : s,
              _u4 = _i12 ? s : l,
              _f4 = _i12 ? _e55 : _t60,
              _d4 = _i12 ? _t60 : _e55;
            var _h4 = 2047,
              _g4 = !1;
            for (var _t61 = 0; _t61 < _r23; _t61++) {
              var _e56 = _n40[_t61],
                _o25 = _e56.getTextContentSize();
              if (
                qo(_e56) &&
                0 !== _o25 &&
                !(
                  (0 === _t61 && _e56.__key === _f4 && _c5 === _o25) ||
                  (_t61 === _r23 - 1 && _e56.__key === _d4 && 0 === _u4)
                ) &&
                ((_g4 = !0), (_h4 &= _e56.getFormat()), 0 === _h4)
              )
                break;
            }
            a.format = _g4 ? _h4 : 0;
          }
        }
        Zi(n, Me);
      });
    }
    function Un(t, e, n) {
      (t.format === e && t.style === n) ||
        ((t.format = e), (t.style = n), (t.dirty = !0));
    }
    function Hn(t, e) {
      Un(t, e.getFormat(), e.getStyle());
    }
    function Yn(t) {
      if (!t.getTargetRanges) return null;
      var e = t.getTargetRanges();
      return 0 === e.length ? null : e[0];
    }
    function jn(t) {
      var e = as()._inputState.lastKeyCode;
      if (null == t || t.length <= 1 || null == e) return;
      var n =
        1 === e.length ? e : "Enter" === e ? "\n" : "Tab" === e ? "\t" : null;
      if (!n) return;
      var o = Pr();
      if (!ar(o) || !o.isCollapsed()) return;
      var r = o.anchor.getNode();
      if (!qo(r)) return;
      var s = o.anchor.offset;
      if (r.getTextContentSize() === s) {
        var _t62 = r.getNextSibling();
        if ("\n" === n) {
          if (l) return;
          if (zs(_t62)) _t62.selectEnd();
          else if (!_t62) {
            var _t63 = fc(r, Mr),
              _e57 = _t63 && _t63.getNextSibling();
            Os(_e57) && _e57.selectStart();
          }
        } else
          "\t" === n
            ? tr(_t62) && _t62.selectEnd()
            : qo(_t62) && _t62.getTextContent()[0] === n && _t62.select(1, 1);
      } else r.getTextContent()[s] === n && r.select(s + 1, s + 1);
    }
    function Gn(t) {
      ((t.isInsertTextAfterHandledSelectionCommand = !1),
        null !== t.handledSelectionCommandTimeoutId &&
          (clearTimeout(t.handledSelectionCommandTimeoutId),
          (t.handledSelectionCommandTimeoutId = null)));
    }
    function Jn(t) {
      (Gn(t),
        (t.isInsertTextAfterHandledSelectionCommand = !0),
        (t.handledSelectionCommandTimeoutId = setTimeout(function () {
          return Gn(t);
        }, 0)));
    }
    function Vn(t, e) {
      var n = Pl(t);
      if (Fl(n) && rc(n, e)) return !0;
      var o = e.getRootElement();
      if (null === o) return !1;
      var r = Il(o.ownerDocument);
      return null !== r && o.contains(r) && rc(r, e);
    }
    function qn(e) {
      var _ref29;
      var n = e.inputType,
        o = Yn(e),
        r = as(),
        s = r._inputState,
        i = Pr();
      if (
        "insertText" === n &&
        e.data &&
        s.isInsertTextAfterHandledSelectionCommand
      ) {
        if ((Gn(s), e.preventDefault(), ar(i) && !i.isCollapsed())) {
          var _t64 = i.isBackward() ? i.anchor : i.focus;
          (i.anchor.set(_t64.key, _t64.offset, _t64.type),
            i.focus.set(_t64.key, _t64.offset, _t64.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === i) {
          var _t65 = Fr();
          if (!ar(_t65)) return !0;
          Ri(_t65.clone());
        }
        if (ar(i)) {
          var _n41 = i.anchor.key === i.focus.key;
          if (
            (function (t, e) {
              return (
                "MediaLast" === t.lastKeyCode && e < t.lastKeyDownTimeStamp + 30
              );
            })(s, e.timeStamp) &&
            r.isComposing() &&
            _n41
          ) {
            if (
              (Ei(null),
              (s.lastKeyDownTimeStamp = 0),
              setTimeout(function () {
                vs(r, function () {
                  Ei(null);
                });
              }, 30),
              ar(i))
            ) {
              var _e58 = i.anchor.getNode();
              (_e58.markDirty(), qo(_e58) || t(142), Hn(i, _e58));
            }
          } else {
            if (
              (Ei(null),
              l &&
                null !== o &&
                !o.collapsed &&
                (i.applyDOMRange(o), !i.isCollapsed()))
            )
              return (e.preventDefault(), i.removeText(), !0);
            e.preventDefault();
            var _t66 = i.anchor.getNode(),
              _c6 = _t66.getTextContent(),
              _a3 = _t66.canInsertTextAfter(),
              _u5 = 0 === i.anchor.offset && i.focus.offset === _c6.length;
            var _d5 = f && _n41 && !_u5 && _a3;
            if (
              (_d5 && i.isCollapsed() && (_d5 = !As(Xi(i.anchor, !0))), !_d5)
            ) {
              Zi(r, Re, !0);
              var _t67 = Pr();
              f &&
                ar(_t67) &&
                _t67.isCollapsed() &&
                ((s.postDeleteSelectionToRestore = _t67),
                setTimeout(function () {
                  return (s.postDeleteSelectionToRestore = null);
                }));
            }
          }
          return !0;
        }
      }
      if (!ar(i)) return !0;
      var c = e.data;
      (null !== s.unprocessedBeforeInputData &&
        Ui(!1, r, s.unprocessedBeforeInputData),
        (i.dirty && null === s.unprocessedBeforeInputData) ||
          !i.isCollapsed() ||
          ws(i.anchor.getNode()) ||
          null === o ||
          i.applyDOMRange(o),
        (s.unprocessedBeforeInputData = null));
      var a = i.anchor,
        u = i.focus,
        d = a.getNode(),
        h = u.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === c) (e.preventDefault(), Zi(r, Le, !1));
        else if (c === v) (e.preventDefault(), Zi(r, Ke));
        else if (null == c && e.dataTransfer) {
          var _t68 = e.dataTransfer.getData("text/plain");
          (e.preventDefault(), i.insertRawText(_t68));
        } else
          null != c && $n(i, o, c, e.timeStamp, !0)
            ? (e.preventDefault(), Zi(r, Be, c), jn(c))
            : (s.unprocessedBeforeInputData = c);
        return ((s.lastBeforeInputInsertTextTimeStamp = e.timeStamp), !0);
      }
      switch ((e.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          Zi(r, Be, e);
          jn(
            (_ref29 = e.dataTransfer
              ? e.dataTransfer.getData("text/plain")
              : null) != null
              ? _ref29
              : e.data,
          );
          break;
        case "insertFromComposition": {
          var _t69 = s.hadOrphanedCompositionEvents;
          s.hadOrphanedCompositionEvents = !1;
          var _n42 = r._compositionKey;
          (Ei(null), _t69 || Zi(r, Be, e), to(_n42));
          break;
        }
        case "insertLineBreak":
          (Ei(null), Zi(r, Le, !1));
          break;
        case "insertParagraph":
          (Ei(null),
            s.isInsertLineBreak && !l
              ? ((s.isInsertLineBreak = !1), Zi(r, Le, !1))
              : Zi(r, Ke));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          Zi(r, $e, e);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || Os(t) || Os(e) || !pi(t) || !pi(e);
          })(d, h) && Zi(r, ze, e);
          break;
        case "deleteByDrag":
          (ol(Eo), Zi(r, ze, e));
          break;
        case "deleteByCut":
          Zi(r, ze, e);
          break;
        case "deleteContent":
          Zi(r, Re, !1);
          break;
        case "deleteWordBackward":
          Zi(r, We, !0);
          break;
        case "deleteWordForward":
          Zi(r, We, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          Zi(r, Ue, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          Zi(r, Ue, !1);
          break;
        case "formatStrikeThrough":
          Zi(r, He, "strikethrough");
          break;
        case "formatBold":
          Zi(r, He, "bold");
          break;
        case "formatItalic":
          Zi(r, He, "italic");
          break;
        case "formatUnderline":
          Zi(r, He, "underline");
          break;
        case "historyUndo":
          Zi(r, je);
          break;
        case "historyRedo":
          Zi(r, Ge);
      }
      return !0;
    }
    function Xn(t) {
      var e = as(),
        n = e._inputState,
        o = Pr(),
        r = t.data,
        l = Yn(t);
      var c = !1;
      if (null != r && ar(o)) {
        var _a4 = yl(ll(e)),
          _u6 = null !== _a4 ? bl(_a4, e._rootElement) : null,
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
            qo(_h5) &&
            mi(_h5);
        if (!_d6 && !_g5 && $n(o, l, r, t.timeStamp, !1, _u6)) {
          if (((c = !0), "ending-firefox" === n.compositionPhase)) {
            var _t70 = eo(e, r);
            if (((n.compositionPhase = "idle"), _t70))
              return (ol(bo), Li(), !0);
          }
          var _l7 = o.anchor.getNode();
          if (null === _a4 || null === _u6) return !0;
          var _d7 = o.isBackward(),
            _h6 = _d7 ? o.anchor.offset : o.focus.offset,
            _g6 = _d7 ? o.focus.offset : o.anchor.offset;
          (i &&
            !o.isCollapsed() &&
            qo(_l7) &&
            null !== _u6.anchorNode &&
            _l7.getTextContent().slice(0, _h6) +
              r +
              _l7.getTextContent().slice(_h6 + _g6) ===
              Wi(_u6.anchorNode)) ||
            Zi(e, Be, r);
          var _5 = r.length;
          (s &&
            _5 > 1 &&
            "insertCompositionText" === t.inputType &&
            !e.isComposing() &&
            ((o.anchor.offset -= _5),
            (o._cachedNodes = null),
            (o._cachedIsBackward = null)),
            f && e.isComposing() && ((n.lastKeyDownTimeStamp = 0), Ei(null)));
        }
      }
      if (!c) {
        (Ui(!1, e, null !== r ? r : void 0),
          "ending-firefox" === n.compositionPhase &&
            (eo(e, r || void 0), ol(bo), (n.compositionPhase = "idle")));
      }
      return (Li(), !0);
    }
    function Qn(t) {
      var e = as(),
        n = e._inputState,
        o = Pr();
      if (ar(o) && !e.isComposing()) {
        ((n.compositionPhase = "composing"),
          (n.hadOrphanedCompositionEvents = !1));
        var _r24 = o.anchor,
          _s17 = o.anchor.getNode();
        if (
          (Ei(_r24.key),
          ol(Oo),
          t.timeStamp < n.lastKeyDownTimeStamp + 30 ||
            "element" === _r24.type ||
            !o.isCollapsed() ||
            (!f &&
              (_s17.getFormat() !== o.format ||
                (qo(_s17) && _s17.getStyle() !== o.style))) ||
            (qo(_s17) &&
              (mi(_s17) ||
                (0 === _r24.offset && !_s17.canInsertTextBefore()) ||
                (_r24.offset === _s17.getTextContentSize() &&
                  !_s17.canInsertTextAfter()))))
        ) {
          Zi(e, Be, k);
          var _t71 = Pr();
          ar(_t71) && Ei(_t71.anchor.key);
        }
      }
      return !0;
    }
    function Zn(t) {
      var e = as();
      return (
        (e._inputState.compositionPhase = "idle"),
        eo(e, t.data),
        ol(bo),
        !0
      );
    }
    function to(t) {
      if (null === t) return;
      var e = bi(t);
      if (!qo(e) || "text" === e.getType() || mi(e) || !e.isAttached()) return;
      var n = Pr(),
        o = ar(n) && n.anchor.key === t ? n.anchor.offset : null,
        r = Vo(e.getTextContent());
      if (
        (r.setFormat(e.getFormat()),
        r.setStyle(e.getStyle()),
        e.replace(r),
        null !== o)
      ) {
        var _t72 = Math.min(o, r.getTextContentSize());
        r.select(_t72, _t72);
      }
    }
    function eo(t, e) {
      var n = t._compositionKey;
      if ((Ei(null), null !== n && null != e)) {
        if ("" === e) {
          var _e59 = bi(n),
            _o26 = t.getElementByKey(n),
            _r25 = null !== _o26 && qo(_e59) ? Gl(_e59, _o26, t) : null;
          if (null !== _r25 && null !== _r25.nodeValue && qo(_e59)) {
            var _n43 = yl(ll(t)),
              _o27 = _n43 && bl(_n43, t._rootElement);
            var _s18 = null,
              _i13 = null;
            (null !== _o27 &&
              _o27.anchorNode === _r25 &&
              ((_s18 = _o27.anchorOffset), (_i13 = _o27.focusOffset)),
              Hi(_e59, _r25.nodeValue, _s18, _i13, !0));
          }
          return (to(n), !1);
        }
        if ("\n" === e[e.length - 1]) {
          var _e60 = Pr();
          if (ar(_e60) || fr(_e60)) {
            if (ar(_e60)) {
              var _t73 = _e60.focus;
              _e60.anchor.set(_t73.key, _t73.offset, _t73.type);
            }
            return (Zi(t, en, null), to(n), !1);
          }
        }
        var _o28 = bi(n);
        if (null !== _o28 && qo(_o28) && mi(_o28)) {
          _o28.markDirty();
          var _t74 = Pr(),
            _r26 = _o28.getTextContentSize(),
            _s19 =
              ar(_t74) && _t74.anchor.key === n ? _t74.anchor.offset : _r26;
          return (_o28.select(_s19, _s19).insertText(e), !0);
        }
      }
      return (Ui(!0, t, e), to(n), !1);
    }
    var no = { altKey: "any", ctrlKey: "any", metaKey: "any", shiftKey: "any" },
      oo = { ctrlKey: !0 },
      ro = { metaKey: !0 },
      so = { shiftKey: "any" },
      io = babelHelpers["extends"]({}, so, { altKey: "any" });
    function lo(t) {
      var e = as(),
        n = e._inputState;
      if (null == t.key) return !0;
      if ("ending-safari" === n.compositionPhase) {
        var _o29 = (function (t) {
          return "Backspace" === t.key;
        })(t);
        if (
          (_o29 &&
            vs(e, function () {
              eo(e, n.compositionEndData);
            }),
          (n.compositionPhase = "idle"),
          (n.compositionEndData = ""),
          _o29)
        )
          return !0;
      }
      var o = e._keyDownShortcuts;
      null === o &&
        ((o = wn(
          (function () {
            var t = function t(_t75, e, n) {
                return {
                  key: _t75,
                  modifiers: e,
                  onMatch: function onMatch(t, e) {
                    Zi(e, n, t);
                  },
                };
              },
              e = function e(t, _e61, n, o) {
                return {
                  key: t,
                  modifiers: _e61,
                  onMatch: function onMatch(t, e) {
                    (t.preventDefault(), Zi(e, n, o));
                  },
                };
              },
              n = function n(t, e) {
                return {
                  key: "Enter",
                  modifiers: t,
                  onMatch: function onMatch(t, n) {
                    ((n._inputState.isInsertLineBreak = e), Zi(n, en, t));
                  },
                };
              },
              o = function o(t, e) {
                return {
                  key: t,
                  modifiers: On,
                  onMatch: function onMatch(t, n) {
                    var o = n._editorState._selection;
                    null === o || ar(o) || (t.preventDefault(), Zi(n, e, t));
                  },
                };
              };
            return [
              t("ArrowRight", so, Ve),
              t("ArrowLeft", so, Xe),
              t("ArrowUp", io, Ze),
              t("ArrowDown", io, tn),
              n(babelHelpers["extends"]({}, no, { shiftKey: !0 }), !0),
              n(babelHelpers["extends"]({}, no, { shiftKey: !1 }), !1),
              t(" ", no, nn),
              {
                key: "Backspace",
                modifiers: so,
                onMatch: function onMatch(t, e) {
                  Zi(e, on, t) && Jn(e._inputState);
                },
              },
              t("Escape", no, rn),
              t("Delete", {}, sn),
              e("Backspace", bn, We, !0),
              e("Delete", bn, We, !1),
              e("b", On, He, "bold"),
              e("u", On, He, "underline"),
              e("i", On, He, "italic"),
              t("Tab", so, ln),
              e("z", On, je, void 0),
              e(
                "z",
                babelHelpers["extends"]({}, On, { shiftKey: !0 }),
                Ge,
                void 0,
              ),
            ].concat(
              r
                ? [
                    {
                      key: "o",
                      modifiers: oo,
                      onMatch: function onMatch(t, e) {
                        (t.preventDefault(),
                          (e._inputState.isInsertLineBreak = !0),
                          Zi(e, Le, !0));
                      },
                    },
                    t(
                      "ArrowLeft",
                      babelHelpers["extends"]({ metaKey: !0 }, so),
                      Qe,
                    ),
                    t(
                      "ArrowRight",
                      babelHelpers["extends"]({ metaKey: !0 }, so),
                      qe,
                    ),
                    e("h", oo, Re, !0),
                    e("d", oo, Re, !1),
                    e("Backspace", ro, Ue, !0),
                    e("Delete", ro, Ue, !1),
                    e("k", oo, Ue, !1),
                  ]
                : [t("Home", so, Qe), t("End", so, qe), e("y", oo, Ge, void 0)],
              [
                {
                  key: "a",
                  modifiers: On,
                  onMatch: function onMatch(t, e) {
                    (t.preventDefault(), Zi(e, yn, t) && Jn(e._inputState));
                  },
                },
                o("c", pn),
                o("x", mn),
              ],
            );
          })(),
        )),
        (e._keyDownShortcuts = o));
      var s = o.match(t);
      return (
        s && s.onMatch(t, e),
        (function (t) {
          return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey;
        })(t) && e.dispatchCommand(kn, t),
        !0
      );
    }
    function co(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    var ao = new Map();
    function uo(t) {
      var e = xl(t.target);
      if (null === e) return;
      var n = nl(t.target);
      var o = null,
        r = null;
      var s = null !== n ? Kn.get(n) : void 0;
      if (null !== n) {
        if (void 0 !== s) {
          var _t76 = s.editors;
          var _n44 = s.hasShadowEditor;
          if (void 0 === _n44) {
            _n44 = !1;
            for (var _e62 of _t76)
              if (
                null !== _e62._rootElement &&
                Cl(_e62._rootElement.getRootNode())
              ) {
                _n44 = !0;
                break;
              }
            s.hasShadowEditor = _n44;
          }
          if (_n44) {
            var _n45 = null,
              _s20 = null;
            for (var _i14 of _t76) {
              var _t77 = _i14._rootElement;
              if (null === _t77) continue;
              var _l8 = bl(e, _t77).anchorNode;
              if (null !== _l8 && gi(_l8) === _i14) {
                if (Cl(_t77.getRootNode())) {
                  ((o = _i14), (r = _l8));
                  break;
                }
                null === _n45 && ((_n45 = _i14), (_s20 = _l8));
              }
            }
            null === o && null !== _n45 && ((o = _n45), (r = _s20));
          } else {
            var _t78 = e.anchorNode;
            null === _t78 ||
              (Fl(_t78) && null !== _t78.shadowRoot) ||
              ((o = gi(_t78)), null !== o && (r = _t78));
          }
        }
        if (null === o) {
          var _t79 = Il(n);
          o = null !== _t79 ? gi(_t79) : null;
        }
      }
      if (null === o) return;
      if (o._inputState.isSelectionChangeFromMouseDown) {
        if (void 0 !== s)
          for (var _t80 of s.editors)
            _t80._inputState.isSelectionChangeFromMouseDown = !1;
        vs(o, function () {
          var n = Fr(),
            s = r != null ? r : bl(e, o._rootElement).anchorNode;
          if (Fl(s) || yi(s)) {
            Ri(Ir(n, e, o, t));
          }
        });
      }
      var i = $i(o),
        l = i[i.length - 1],
        c = l._key,
        a = ao.get(c),
        u = a || l;
      (u !== o && Wn(e, u, !1),
        Wn(e, o, !0),
        o !== l ? ao.set(c, o) : a && ao["delete"](c));
    }
    function fo(t) {
      t._lexicalHandled = !0;
    }
    function ho(t) {
      return !0 === t._lexicalHandled;
    }
    var go = function go() {};
    function _o(e) {
      var n = Ln.get(e);
      if (void 0 === n) return void go();
      var o = Kn.get(n);
      if (void 0 === o) return void go();
      Ln["delete"](e);
      var r = _i(e);
      hi(r)
        ? (!(function (t) {
            if (null !== t._parentEditor) {
              var _e63 = $i(t),
                _n46 = _e63[_e63.length - 1]._key;
              ao.get(_n46) === t && ao["delete"](_n46);
            } else ao["delete"](t._key);
          })(r),
          o.editors["delete"](r),
          (o.hasShadowEditor = void 0),
          (e.__lexicalEditor = null))
        : r && t(198);
      var s = co(e);
      for (var _t81 = 0; _t81 < s.length; _t81++) s[_t81]();
      e.__lexicalEventHandles = [];
    }
    function po(e, n, o) {
      is();
      var r = e.__key,
        s = e.getParent();
      if (null === s) return void (null !== mc(e) && t(367, r, String(mc(e))));
      var i = (function (t) {
        var e = Pr();
        if (!ar(e) || !Os(t)) return e;
        var n = e.anchor,
          o = e.focus,
          r = n.getNode(),
          s = o.getNode();
        sl(r, t) && n.set(t.__key, 0, "element");
        sl(s, t) && o.set(t.__key, 0, "element");
        return e;
      })(e);
      var l = !1;
      if (ar(i) && n) {
        var _t82 = i.anchor,
          _n47 = i.focus;
        (_t82.key === r &&
          (Kr(_t82, e, s, e.getPreviousSibling(), e.getNextSibling()),
          (l = !0)),
          _n47.key === r &&
            (Kr(_n47, e, s, e.getPreviousSibling(), e.getNextSibling()),
            (l = !0)));
      } else fr(i) && n && e.isSelected() && e.selectPrevious();
      if (ar(i) && n && !l) {
        var _t83 = e.getIndexWithinParent();
        (Ni(e), Rr(i, s, _t83, -1));
      } else Ni(e);
      (o || fl(s) || s.canBeEmpty() || !s.isEmpty() || po(s, n),
        n && i && ws(s) && s.isEmpty() && s.selectEnd());
    }
    var mo = Symbol["for"]("ephemeral");
    function yo(t) {
      return t[mo] || !1;
    }
    var xo = { configurable: !0, enumerable: !1, value: void 0, writable: !0 };
    var _Co5 = (function () {
      function Co(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", xo),
          Object.defineProperty(this, Mt, xo),
          Ti(this, t));
      }
      Co.getType = function getType() {
        var _cc = cc(this),
          e = _cc.ownNodeType;
        return (void 0 === e && t(64, this.name), e);
      };
      Co.clone = function clone(e) {
        t(65, this.name);
      };
      var _proto7 = Co.prototype;
      _proto7.$config = function $config() {
        return {};
      };
      _proto7.config = function config(t, e) {
        var _ref30;
        var n = e["extends"] || hc(this.constructor);
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
          var _e64 = bi(t);
          if (null === _e64) break;
          t = null !== _e64.__parent ? _e64.__parent : mc(_e64);
        }
        return !1;
      };
      _proto7.isSelected = function isSelected(t) {
        var _this13 = this;
        var e = t || Pr();
        if (null == e) return !1;
        var n = e.getNodes().some(function (t) {
          return t.__key === _this13.__key;
        });
        if (qo(this)) return n;
        if (
          ar(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t84 = this.getParent();
          if (As(this) && this.isInline() && _t84) {
            var _n48 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t84.is(_n48.getNode()) &&
              _n48.offset === _t84.getChildrenSize() &&
              this.is(_t84.getLastChild())
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
        return null === t ? null : bi(t);
      };
      _proto7.getParentOrThrow = function getParentOrThrow() {
        var e = this.getParent();
        return (null === e && t(66, this.__key), e);
      };
      _proto7.getTopLevelElement = function getTopLevelElement() {
        var e = this;
        for (; null !== e; ) {
          var _n49 = e.getParent();
          if (fl(_n49) || null !== mc(e))
            return (Os(e) || (e === this && As(e)) || t(194), e);
          e = _n49;
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
        return null === t ? null : bi(t);
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
        return null === t ? null : bi(t);
      };
      _proto7.getNextSiblings = function getNextSiblings() {
        var t = [];
        var e = this.getNextSibling();
        for (; null !== e; ) (t.push(e), (e = e.getNextSibling()));
        return t;
      };
      _proto7.getCommonAncestor = function getCommonAncestor(t) {
        var e = Os(this) ? this : this.getParent(),
          n = Os(t) ? t : t.getParent(),
          o = e && n ? ga(e, n) : null;
        return o ? o.commonAncestor : null;
      };
      _proto7.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto7.isBefore = function isBefore(e) {
        var n = ga(this, e);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === fa(n)
              : ("same" !== n.type && "ancestor" !== n.type && t(279), !1)))
        );
      };
      _proto7.isParentOf = function isParentOf(t) {
        return sl(t, this);
      };
      _proto7.getNodesBetween = function getNodesBetween(e) {
        var n = this.isBefore(e),
          o = [],
          r = new Set();
        var s = this;
        for (; null !== s; ) {
          var _i15 = s.__key;
          if ((r.has(_i15) || (r.add(_i15), o.push(s)), s === e)) break;
          var _l9 = Os(s) ? (n ? s.getFirstChild() : s.getLastChild()) : null;
          if (null !== _l9) {
            s = _l9;
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
      _proto7.isDirty = function isDirty() {
        var t = as()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto7.getLatest = function getLatest() {
        if (yo(this)) return this;
        var e = bi(this.__key);
        return (null === e && t(113), e);
      };
      _proto7.getWritable = function getWritable() {
        if (yo(this)) return this;
        is();
        var t = cs(),
          e = as(),
          n = t._nodeMap,
          o = this.__key,
          r = this.getLatest(),
          s = e._cloneNotNeeded,
          i = Pr();
        if ((null !== i && i.setCachedNodes(null), s.has(o))) return (ki(r), r);
        var l = Xl(r);
        return (s.add(o), ki(l), n.set(o, l), l);
      };
      _proto7.getTextContent = function getTextContent() {
        return Ac(this);
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
        return new _U2(t);
      };
      _proto7.exportDOM = function exportDOM(t) {
        return { element: this.createDOM(t._config, t) };
      };
      _proto7.exportJSON = function exportJSON() {
        var t = this.__state ? this.__state.toJSON() : void 0;
        return babelHelpers["extends"]({ type: this.__type, version: 1 }, t);
      };
      Co.importJSON = function importJSON(e) {
        t(18, this.name);
      };
      _proto7.updateFromJSON = function updateFromJSON(t) {
        return (function (t, e) {
          var n = t.getWritable(),
            o = e.$;
          var r = o;
          for (var _t85 of yt(n).flatKeys)
            _t85 in e &&
              ((void 0 !== r && r !== o) ||
                (r = babelHelpers["extends"]({}, o)),
              (r[_t85] = e[_t85]));
          return ((n.__state || r) && mt(t).updateFromJSON(r), n);
        })(this, t);
      };
      Co.transform = function transform() {
        return null;
      };
      _proto7.remove = function remove(t) {
        po(this, !0, t);
      };
      _proto7.replace = function replace(e, n) {
        is();
        var o = Pr();
        (null !== o && (o = o.clone()), gl(this, e));
        var r = this.getLatest(),
          s = this.__key,
          i = yc(r);
        null !== i &&
          En(
            "replace: node " +
              s +
              " (type " +
              r.getType() +
              ") is slotted into host " +
              i.getKey() +
              " (type " +
              i.getType() +
              "); a slot value cannot be replaced through the tree API. Use $setSlot on its host to assign a replacement.",
          );
        var l = e.__key,
          c = e.getWritable(),
          a = this.getParentOrThrow().getWritable(),
          u = a.__size,
          f = c.getParent(),
          d = null !== f ? c.getIndexWithinParent() : -1;
        (Ni(c), null !== f && ar(o) && Rr(o, f, d, -1));
        var h = r.getPreviousSibling(),
          g = r.getNextSibling(),
          _ = r.__prev,
          p = r.__next,
          m = r.__parent;
        if ((po(r, !1, !0), null === h)) a.__first = l;
        else {
          h.getWritable().__next = l;
        }
        if (((c.__prev = _), null === g)) a.__last = l;
        else {
          g.getWritable().__prev = l;
        }
        ((c.__next = p),
          (c.__parent = m),
          (a.__size = null !== f && f.is(a) ? u - 1 : u));
        var y = 0;
        if (
          (n &&
            ((Os(this) && Os(c)) || t(139),
            (y = c.getChildrenSize()),
            c.splice(y, 0, this.getChildren())),
          ar(o))
        ) {
          Ri(o);
          var _t86 = o.anchor,
            _e65 = o.focus;
          (_t86.key === s &&
            (n && "element" === _t86.type
              ? _t86.set(c.__key, y + _t86.offset, "element")
              : rr(_t86, c)),
            _e65.key === s &&
              (n && "element" === _e65.type
                ? _e65.set(c.__key, y + _e65.offset, "element")
                : rr(_e65, c)));
        }
        return (Oi() === s && Ei(l), c);
      };
      _proto7.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (is(), gl(this, t));
        var n = this.getWritable(),
          o = t.getWritable();
        Pc(this.getParentOrThrow());
        var r = o.getParent(),
          s = Pr();
        var i = !1,
          l = !1;
        if (null !== r) {
          var _n50 = t.getIndexWithinParent();
          if (ar(s)) {
            var _t87 = r.__key,
              _e66 = s.anchor,
              _o30 = s.focus;
            ((i =
              "element" === _e66.type &&
              _e66.key === _t87 &&
              _e66.offset === _n50 + 1),
              (l =
                "element" === _o30.type &&
                _o30.key === _t87 &&
                _o30.offset === _n50 + 1));
          }
          (Ni(o), e && ar(s) && Rr(s, r, _n50, -1));
        } else Ni(o);
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
          e && ar(s))
        ) {
          var _t88 = this.getIndexWithinParent();
          Rr(s, a, _t88 + 1);
          var _e67 = a.__key;
          (i && s.anchor.set(_e67, _t88 + 2, "element"),
            l && s.focus.set(_e67, _t88 + 2, "element"));
        }
        return t;
      };
      _proto7.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (is(), gl(this, t));
        var n = this.getWritable(),
          o = t.getWritable();
        Pc(this.getParentOrThrow());
        var r = o.__key,
          s = Pr(),
          i = o.getParent(),
          l = null !== i ? o.getIndexWithinParent() : -1;
        (Ni(o), null !== i && e && ar(s) && Rr(s, i, l, -1));
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
          e && ar(s))
        ) {
          Rr(s, this.getParentOrThrow(), f);
        }
        return t;
      };
      _proto7.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto7.createParentElementNode = function createParentElementNode() {
        return Gs();
      };
      _proto7.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto7.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto7.selectPrevious = function selectPrevious(t, e) {
        is();
        var n = yc(this);
        if (null !== n) return n.selectPrevious(t, e);
        var o = this.getPreviousSibling(),
          r = this.getParentOrThrow();
        if (null === o) return r.select(0, 0);
        if (Os(o)) return o.select();
        if (!qo(o)) {
          var _t89 = o.getIndexWithinParent() + 1;
          return r.select(_t89, _t89);
        }
        return o.select(t, e);
      };
      _proto7.selectNext = function selectNext(t, e) {
        is();
        var n = yc(this);
        if (null !== n) return n.selectNext(t, e);
        var o = this.getNextSibling(),
          r = this.getParentOrThrow();
        if (null === o) return r.select();
        if (Os(o)) return o.select(0, 0);
        if (!qo(o)) {
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
      return Co;
    })();
    function So(t) {
      return t instanceof _Co5;
    }
    var To = "history-merge",
      No = "collaboration",
      vo = "skip-scroll-into-view",
      ko = "skip-dom-selection",
      Eo = "skip-selection-focus",
      Oo = "composition-start",
      bo = "composition-end",
      Mo = "!important";
    function Ao(t) {
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
                      var _r27 = n.trim(),
                        _s21 = o.trim();
                      ("" !== _r27 && "" !== _s21 && (e[_r27] = _s21),
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
    function Do(t, e, n) {
      var o = n.trimEnd(),
        r = o.length - 10;
      r >= 0 && o.slice(r).toLowerCase() === Mo
        ? t.setProperty(e, o.slice(0, r).trim(), "important")
        : t.setProperty(e, n, "");
    }
    function wo(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var o = Ao(n),
        r = Ao(e);
      for (var _e68 in r) (delete o[_e68], Do(t, _e68, r[_e68]));
      for (var _e69 in o) t.removeProperty(_e69);
    }
    function Io(t, e) {
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
    function Po(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function Fo(t, e, n, o, r) {
      var s = o.classList;
      var i = Ji(r, "base");
      (void 0 !== i && s.add.apply(s, i),
        (i = Ji(r, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== i &&
        (8 & n && 4 & n
          ? ((l = !0), c || s.add.apply(s, i))
          : c && s.remove.apply(s, i));
      for (var _t91 in A) {
        var _o31 = A[_t91];
        if (((i = Ji(r, _t91)), void 0 !== i))
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
    }
    function Ro(t, e, n) {
      var o = n.isComposing(),
        r = t + (o ? N : ""),
        i = Ul(),
        l = Hl(i).$getDOMSlot(n, e, i),
        c = l.getFirstChild();
      if (null === c || c.nodeType !== Node.TEXT_NODE)
        return void l.insertChild(kl().createTextNode(r));
      var a = c,
        u = a.nodeValue;
      if (u !== r)
        if (o || s) {
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
            _n51 = _ref31[2];
          (0 !== _e70 && a.deleteData(_t92, _e70), a.insertData(_t92, _n51));
        } else a.nodeValue = r;
    }
    function Lo(t, e, n, o, r, s) {
      Ro(r, t, e);
      var i = s.theme.text;
      void 0 !== i && Fo(0, 0, o, t, i);
    }
    function Ko(t, e) {
      var n = kl().createElement(e);
      return (n.appendChild(t), n);
    }
    function Bo(t) {
      return null != t && !0 === t.__isInlineFormattable;
    }
    var _$o2 = (function (_Co) {
      function $o(t, e) {
        var _this;
        if (t === void 0) {
          t = "";
        }
        ((_this = _Co.call(this, e) || this),
          (_this.__text = t),
          (_this.__format = 0),
          (_this.__style = ""),
          (_this.__mode = 0),
          (_this.__detail = 0));
        return _this;
      }
      babelHelpers.inheritsLoose($o, _Co);
      var _proto8 = $o.prototype;
      _proto8.$config = function $config() {
        return this.config("text", {
          importDOM: {
            "#text": function text() {
              return { conversion: Yo, priority: 0 };
            },
            b: function b() {
              return { conversion: Wo, priority: 0 };
            },
            code: function code() {
              return { conversion: Jo, priority: 0 };
            },
            em: function em() {
              return { conversion: Jo, priority: 0 };
            },
            i: function i() {
              return { conversion: Jo, priority: 0 };
            },
            mark: function mark() {
              return { conversion: Jo, priority: 0 };
            },
            s: function s() {
              return { conversion: Jo, priority: 0 };
            },
            span: function span() {
              return { conversion: zo, priority: 0 };
            },
            strong: function strong() {
              return { conversion: Jo, priority: 0 };
            },
            sub: function sub() {
              return { conversion: Jo, priority: 0 };
            },
            sup: function sup() {
              return { conversion: Jo, priority: 0 };
            },
            u: function u() {
              return { conversion: Jo, priority: 0 };
            },
          },
        });
      };
      _proto8.afterCloneFrom = function afterCloneFrom(t) {
        (_Co.prototype.afterCloneFrom.call(this, t),
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
        return F[t.__mode];
      };
      _proto8.getStyle = function getStyle() {
        return this.getLatest().__style;
      };
      _proto8.isToken = function isToken() {
        return 1 === this.getLatest().__mode;
      };
      _proto8.isComposing = function isComposing() {
        return this.__key === Oi();
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
        return Si(this.getLatest().__format, t, e);
      };
      _proto8.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto8.isInline = function isInline() {
        return !0;
      };
      _proto8.createDOM = function createDOM(t, e) {
        var n = this.__format,
          o = Io(0, n),
          r = Po(0, n),
          s = null === o ? r : o,
          i = kl().createElement(s);
        var l = i;
        (this.hasFormat("code") && i.setAttribute("spellcheck", "false"),
          null !== o && ((l = kl().createElement(r)), i.appendChild(l)));
        Lo(l, this, 0, n, this.__text, t);
        var c = this.__style;
        return ("" !== c && wo(i.style, c), i);
      };
      _proto8.updateDOM = function updateDOM(e, n, o) {
        var r = this.__text,
          s = e.__format,
          i = this.__format,
          l = Io(0, s),
          c = Io(0, i),
          a = Po(0, s),
          u = Po(0, i);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _e71 = n.firstChild;
          null == _e71 && t(48);
          var _s22 = kl().createElement(u);
          return (Lo(_s22, this, 0, i, r, o), n.replaceChild(_s22, _e71), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && t(49)),
          Ro(r, f, this));
        var d = o.theme.text;
        void 0 !== d && s !== i && Fo(0, s, i, f, d);
        var h = e.__style,
          g = this.__style;
        return (h !== g && wo(n.style, g, h), !1);
      };
      _proto8.updateFromJSON = function updateFromJSON(t) {
        return _Co.prototype.updateFromJSON
          .call(this, t)
          .setTextContent(t.text)
          .setFormat(t.format)
          .setDetail(t.detail)
          .setMode(t.mode)
          .setStyle(t.style);
      };
      _proto8.exportDOM = function exportDOM(e) {
        var _Co$prototype$exportD = _Co.prototype.exportDOM.call(this, e),
          n = _Co$prototype$exportD.element;
        return (
          Fl(n) || t(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = Ko(n, "b")),
          this.hasFormat("italic") && (n = Ko(n, "i")),
          this.hasFormat("strikethrough") && (n = Ko(n, "s")),
          this.hasFormat("underline") && (n = Ko(n, "u")),
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
          _Co.prototype.exportJSON.call(this),
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
        var e = Si(this.getFormat(), t, null);
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
        is();
        var n = t,
          o = e;
        var r = Pr(),
          s = this.getTextContent(),
          i = this.__key;
        if ("string" == typeof s) {
          var _t93 = s.length;
          (void 0 === n && (n = _t93), void 0 === o && (o = _t93));
        } else ((n = 0), (o = 0));
        if (!ar(r)) return Ar(i, n, i, o, "text", "text");
        {
          var _t94 = Oi();
          ((_t94 !== r.anchor.key && _t94 !== r.focus.key) || Ei(i),
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
        var c = Pr();
        if (o && ar(c)) {
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
        is();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var o = e.__key,
          r = Oi(),
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
          var _r28 = t[_o32];
          _r28 > _e73 && (i.push(n.slice(_e73, _r28)), (_e73 = _r28));
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
        var y = Pr();
        if (ar(y)) {
          var _ref32 = y.isBackward()
              ? [y.focus, y.anchor]
              : [y.anchor, y.focus],
            _t95 = _ref32[0],
            _e74 = _ref32[1];
          ("text" === _t95.type && _t95.key === o && (p = _t95),
            "text" === _e74.type && _e74.key === o && (m = _e74));
        }
        e.isSegmented()
          ? ((f = Vo(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = Nt(e, f)),
            (_ = !0))
          : (f = e.setTextContent(a));
        var x = [f];
        for (var _t96 = 1; _t96 < c; _t96++) {
          var _n52 = Vo(i[_t96]);
          ((_n52.__format = d),
            (_n52.__style = h),
            (_n52.__detail = g),
            (_n52.__state = Nt(e, _n52)));
          var _s23 = _n52.__key;
          (r === o && Ei(_s23), x.push(_n52));
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
            null !== e && ki(e);
            null !== n && ki(n);
          })(this);
          var _t98 = u.getWritable(),
            _e76 = this.getIndexWithinParent();
          (_
            ? (_t98.splice(_e76, 0, x), this.remove())
            : _t98.splice(_e76, 1, x),
            ar(y) && Rr(y, u, _e76, c - 1));
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
        Oi() === r && Ei(o);
        var l = Pr();
        if (ar(l)) {
          var _t99 = l.anchor,
            _s24 = l.focus;
          (null !== _t99 && _t99.key === r && Br(_t99, n, o, e, i),
            null !== _s24 && _s24.key === r && Br(_s24, n, o, e, i));
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
      return babelHelpers.createClass($o, [
        {
          key: "__isInlineFormattable",
          get: function get() {
            return !0;
          },
        },
      ]);
    })(_Co5);
    function zo(t) {
      return { forChild: Xo(t.style), node: null };
    }
    function Wo(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: Xo(e.style, n ? void 0 : "bold"), node: null };
    }
    var Uo = new WeakMap();
    function Ho(t) {
      if (!Fl(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function Yo(e) {
      var n = e;
      null === e.parentElement && t(129);
      var o = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var o = [t];
          for (; null !== n && void 0 === (e = Uo.get(n)) && !Ho(n); )
            (o.push(n), (n = n.parentNode));
          var r = void 0 === e ? n : e;
          for (var _t100 = 0; _t100 < o.length; _t100++) Uo.set(o[_t100], r);
          return r;
        })(n)
      )
        return { node: Hr(o) };
      if (((o = o.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === o))
        return { node: null };
      if (" " === o[0]) {
        var _t101 = n,
          _e77 = !0;
        for (; null !== _t101 && null !== (_t101 = jo(_t101, !1)); ) {
          var _n53 = _t101.textContent || "";
          if (_n53.length > 0) {
            (/[ \t\n]$/.test(_n53) && (o = o.slice(1)), (_e77 = !1));
            break;
          }
        }
        _e77 && (o = o.slice(1));
      }
      if (" " === o[o.length - 1]) {
        var _t102 = n,
          _e78 = !0;
        for (; null !== _t102 && null !== (_t102 = jo(_t102, !0)); ) {
          if (
            (_t102.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e78 = !1;
            break;
          }
        }
        _e78 && (o = o.slice(0, o.length - 1));
      }
      return "" === o ? { node: null } : { node: Vo(o) };
    }
    function jo(t, e) {
      var n = t;
      for (;;) {
        var _t103 = void 0;
        for (; null === (_t103 = e ? n.nextSibling : n.previousSibling); ) {
          var _t104 = n.parentElement;
          if (null === _t104) return null;
          n = _t104;
        }
        if (((n = _t103), Fl(n))) {
          var _t105 = n.style.display;
          if (
            ("" === _t105 && !Bl(n)) ||
            ("" !== _t105 && !_t105.startsWith("inline"))
          )
            return null;
        }
        var _o33 = n;
        for (; null !== (_o33 = e ? n.firstChild : n.lastChild); ) n = _o33;
        if (yi(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var Go = {
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
    function Jo(t) {
      var e = Go[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: Xo(t.style, e), node: null };
    }
    function Vo(t) {
      if (t === void 0) {
        t = "";
      }
      return hl(new _$o2(t));
    }
    function qo(t) {
      return t instanceof _$o2;
    }
    function Xo(t, e) {
      var n = t.fontWeight,
        o = t.textDecoration.split(" "),
        r = "700" === n || "bold" === n,
        s = o.includes("line-through"),
        i = "italic" === t.fontStyle,
        l = o.includes("underline"),
        c = t.verticalAlign;
      return function (t) {
        return qo(t) || Bo(t)
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
    var _Qo = (function (_$o) {
      function Qo(t) {
        var _this2;
        if (t === void 0) {
          t = void 0;
        }
        ((_this2 = _$o.call(this, "\t", t) || this), (_this2.__detail = 2));
        return _this2;
      }
      babelHelpers.inheritsLoose(Qo, _$o);
      var _proto9 = Qo.prototype;
      _proto9.$config = function $config() {
        return this.config("tab", { extends: _$o2 });
      };
      _proto9.createDOM = function createDOM(t) {
        var e = _$o.prototype.createDOM.call(this, t),
          n = Ji(t.theme, "tab");
        if (void 0 !== n) {
          var _e$classList;
          (_e$classList = e.classList).add.apply(_e$classList, n);
        }
        return e;
      };
      _proto9.setTextContent = function setTextContent(t) {
        return _$o.prototype.setTextContent.call(this, "\t");
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
      return Qo;
    })(_$o2);
    function Zo() {
      return hl(new _Qo());
    }
    function tr(t) {
      return t instanceof _Qo;
    }
    var _er = (function () {
      function er(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto0 = er.prototype;
      _proto0.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto0.isBefore = function isBefore(t) {
        if (this.key === t.key) return this.offset < t.offset;
        return ua(va(_a(this, "next")), va(_a(t, "next"))) < 0;
      };
      _proto0.getNode = function getNode() {
        var e = bi(this.key);
        return (null === e && t(20), e);
      };
      _proto0.set = function set(t, e, n, o) {
        var r = this._selection,
          s = this.key;
        (o && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          ss() ||
            (Oi() === s && Ei(t),
            null !== r &&
              (r.setCachedNodes(null),
              ar(r) && (r._cachedIsBackward = null),
              (r.dirty = !0))));
      };
      return er;
    })();
    function nr(t, e, n) {
      return new _er(t, e, n);
    }
    function or(t, e) {
      var n = e.__key,
        o = t.offset,
        r = "element";
      if (qo(e)) {
        r = "text";
        var _t106 = e.getTextContentSize();
        o > _t106 && (o = _t106);
      } else if (!Os(e)) {
        var _t107 = e.getNextSibling();
        if (qo(_t107)) ((n = _t107.__key), (o = 0), (r = "text"));
        else {
          var _t108 = e.getParent();
          _t108 && ((n = _t108.__key), (o = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, o, r);
    }
    function rr(t, e) {
      if (Os(e)) {
        var _n54 = e.getLastDescendant();
        Os(_n54) || qo(_n54) ? or(t, _n54) : or(t, e);
      } else or(t, e);
    }
    function sr(t, e, n, o) {
      var r = t.getNode(),
        s = r.getChildAtIndex(t.offset),
        i = Vo();
      if ((i.setFormat(n), i.setStyle(o), Js(s))) s.splice(0, 0, [i]);
      else if (null !== s) {
        var _t109 = fl(r) ? Gs().append(i) : i;
        s.insertBefore(_t109);
      } else if (fl(r)) {
        var _t110 = r.getLastChild();
        Os(_t110) && !_t110.isInline() && _t110.isEmpty()
          ? _t110.append(i)
          : r.append(Gs().append(i));
      } else r.append(i);
      (t.is(e) && e.set(i.__key, 0, "text"), t.set(i.__key, 0, "text"));
    }
    function ir(e, n, o, r) {
      var s = e.anchor.getNode();
      qo(s) || t(398);
      var i = e.anchor.offset,
        l = Vo(n);
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
    var _lr = (function () {
      function lr(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto1 = lr.prototype;
      _proto1.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto1.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto1.is = function is(t) {
        if (!fr(t)) return !1;
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
        return new lr(new Set(this._nodes));
      };
      _proto1.extract = function extract() {
        return this.getNodes();
      };
      _proto1.insertRawText = function insertRawText(t) {};
      _proto1.insertText = function insertText() {};
      _proto1.insertNodes = function insertNodes(t) {
        var e = this.getNodes().filter(function (t) {
            return null === mc(t);
          }),
          n = e.length;
        if (0 === n) return;
        var o = e[n - 1];
        var r;
        if (qo(o)) r = o.select();
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
          var _e79 = bi(_t114);
          null !== _e79 && n.push(_e79);
        }
        return (ss() || (this._cachedNodes = n), n);
      };
      _proto1.getTextContent = function getTextContent() {
        var t = this.getNodes();
        var e = "";
        for (var _n55 = 0; _n55 < t.length; _n55++)
          e += t[_n55].getTextContent();
        return e;
      };
      _proto1.deleteNodes = function deleteNodes() {
        var t = this.getNodes().filter(function (t) {
          return null === mc(t);
        });
        if ((Pr() || Fr()) === this && t[0]) {
          var _e80 = qc(t[0], "next");
          ma(ca(_e80, _e80));
        }
        for (var _e81 of t) _e81.remove();
        cr();
      };
      return lr;
    })();
    function cr() {
      var t = Fi();
      if (t.isEmpty()) {
        var _e82 = Gs();
        (t.append(_e82), _e82.select());
      }
    }
    function ar(t) {
      return t instanceof _ur;
    }
    var _ur = (function () {
      function ur(t, e, n, o) {
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
      var _proto10 = ur.prototype;
      _proto10.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto10.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto10.is = function is(t) {
        return (
          !!ar(t) &&
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
          for (var _n56 of t)
            if (jc(_n56)) {
              var _t115 = _n56.origin;
              0 === e.length ? r.add(_t115) : (s.add(_t115), e.push(_t115));
            } else {
              var _t116 = _n56.origin;
              (Os(_t116) && s.has(_t116)) || e.push(_t116);
            }
          o && e.push(o.caret.origin);
          if (
            Yc(t.focus) &&
            Os(t.focus.origin) &&
            null === t.focus.getNodeAtCaret()
          )
            for (
              var _n57 = ta(t.focus.origin, "previous");
              jc(_n57) &&
              r.has(_n57.origin) &&
              !_n57.origin.isEmpty() &&
              _n57.origin.is(e[e.length - 1]);
              _n57 = na(_n57)
            )
              (r["delete"](_n57.origin), e.pop());
          for (; e.length > 1; ) {
            var _t117 = e[e.length - 1];
            if (!Os(_t117) || s.has(_t117) || _t117.isEmpty() || r.has(_t117))
              break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n58 = va(t.anchor),
              _o34 = va(t.anchor.getFlipped()),
              _r29 = function _r29(t) {
                return Hc(t) ? t.origin : t.getNodeAtCaret();
              },
              _s25 =
                _r29(_n58) ||
                _r29(_o34) ||
                (t.anchor.getNodeAtCaret() ? _n58.origin : _o34.origin);
            e.push(_s25);
          }
          return e;
        })(Ea(xa(this), "next"));
        return (ss() || (this._cachedNodes = e), e);
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
          _r30 = _r(this),
          i = _r30[0],
          l = _r30[1];
        var c = "",
          a = !0;
        for (var _u8 = 0; _u8 < t.length; _u8++) {
          var _f7 = t[_u8];
          if (Os(_f7) && !_f7.isInline()) {
            a || (c += "\n");
            var _t118 = "";
            for (var _e83 of Tc(_f7)) {
              var _n59 = Nc(_f7, _e83);
              null !== _n59 && (_t118 += _n59.getTextContent());
            }
            "" !== _t118 ? ((c += _t118), (a = !1)) : (a = !_f7.isEmpty());
          } else if (((a = !1), qo(_f7))) {
            var _t119 = _f7.getTextContent();
            (_f7 === e
              ? _f7 === n
                ? ("element" === o.type &&
                    "element" === r.type &&
                    r.offset !== o.offset) ||
                  (_t119 = i < l ? _t119.slice(i, l) : _t119.slice(l, i))
                : (_t119 = s ? _t119.slice(i) : _t119.slice(l))
              : _f7 === n &&
                (_t119 = s ? _t119.slice(0, l) : _t119.slice(0, i)),
              (c += _t119));
          } else
            (!As(_f7) && !zs(_f7)) ||
              (_f7 === n && this.isCollapsed()) ||
              (c += _f7.getTextContent());
        }
        return c;
      };
      _proto10.applyDOMRange = function applyDOMRange(t) {
        var e = as(),
          n = e.getEditorState()._selection,
          o = br(
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
          Ot(this));
      };
      _proto10.clone = function clone() {
        var t = this.anchor,
          e = this.focus;
        return new ur(
          nr(t.key, t.offset, t.type),
          nr(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto10.toggleFormat = function toggleFormat(t) {
        ((this.format = Si(this.format, t, null)), (this.dirty = !0));
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
        this.insertNodes(Hr(t));
      };
      _proto10.insertText = function insertText(e) {
        var n = this.format,
          o = this.style;
        if (!this.isCollapsed()) {
          var _t120 = (
            this.focus.isBefore(this.anchor) ? this.focus : this.anchor
          ).getNode();
          if (
            (qo(_t120) && ((n = _t120.getFormat()), (o = _t120.getStyle())),
            this.removeText(),
            (this.format = n),
            (this.style = o),
            "" === e)
          )
            return;
          if (null === Oi())
            return (
              "element" === this.anchor.type &&
                sr(this.anchor, this.focus, n, o),
              void ir(this, e, n, o)
            );
        }
        "element" === this.anchor.type && sr(this.anchor, this.focus, n, o);
        var r = this.anchor.getNode();
        qo(r) || t(398);
        var s = this.anchor.offset,
          i = r.getParentOrThrow(),
          l = r.getTextContentSize();
        if (
          mi(r) ||
          (0 === s &&
            (!r.canInsertTextBefore() ||
              (!i.canInsertTextBefore() && !r.__prev))) ||
          (s === l &&
            (!r.canInsertTextAfter() || (!i.canInsertTextAfter() && !r.__next)))
        ) {
          if (r.isSegmented() && 0 !== s && s !== l) {
            if (null !== Oi()) r.setMode("normal").setFormat(n).setStyle(o);
            else {
              var _t121 = Vo(r.getTextContent());
              (_t121.setFormat(n),
                _t121.setStyle(o),
                r.replace(_t121),
                _t121.select(s, s));
            }
            return void ("" !== e && this.insertText(e));
          }
          if ("" === e) return;
          if (0 === s) {
            var _t122 = r.getPreviousSibling();
            if (qo(_t122) && _t122.canInsertTextAfter() && !mi(_t122))
              _t122.select();
            else {
              var _t123 = Vo();
              (_t123.setFormat(n),
                _t123.setStyle(o),
                i.canInsertTextBefore()
                  ? r.insertBefore(_t123)
                  : i.insertBefore(_t123),
                _t123.select());
            }
            return void this.insertText(e);
          }
          if (s === l) {
            var _t124 = r.getNextSibling();
            if (qo(_t124) && _t124.canInsertTextBefore() && !mi(_t124))
              _t124.select(0, 0);
            else {
              var _t125 = Vo();
              (_t125.setFormat(n),
                _t125.setStyle(o),
                i.canInsertTextAfter()
                  ? r.insertAfter(_t125)
                  : i.insertAfter(_t125),
                _t125.select(0, 0));
            }
            return void this.insertText(e);
          }
          var _t126 = Vo(e);
          return (
            _t126.setFormat(n),
            _t126.setStyle(o),
            r.replace(_t126),
            void _t126.select()
          );
        }
        if ("" === e) return;
        var c = i.isInline() && 0 === s && !r.__prev,
          a = i.isInline() && s === l && !r.__next,
          u = r.getFormat() !== n || r.getStyle() !== o;
        if (c || a || u) {
          if ("" !== r.getTextContent() || c || a)
            return void ir(this, e, n, o);
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
        var t = Pr() === this;
        (ya(this, Na(xa(this))), t && Pr() !== this && Ri(this));
      };
      _proto10.formatText = function formatText(t, e) {
        if (e === void 0) {
          e = null;
        }
        hr(this, t, e);
      };
      _proto10.insertNodes = function insertNodes(e) {
        var _r31;
        if (0 === e.length) return;
        this.isCollapsed() || this.removeText();
        var n = this.anchor.getNode();
        if (
          "element" === this.anchor.type &&
          Os(n) &&
          n.isShadowRoot() &&
          null !== mc(n)
        ) {
          var _n$getFirstChild;
          var _o35 =
            (_n$getFirstChild = n.getFirstChild()) != null
              ? _n$getFirstChild
              : n.append(Gs()).getFirstChild();
          if (null !== _o35 && !Os(_o35)) {
            var _t127 = Gs();
            (_o35.insertBefore(_t127), (_o35 = _t127));
          }
          if (null !== _o35) {
            _o35.selectStart();
            var _n60 = Pr();
            return (ar(_n60) || t(369), _n60.insertNodes(e));
          }
        }
        if ("element" === this.anchor.type && fl(n)) {
          var _t128 = Vr(e),
            _o36 = _t128.getLastDescendant();
          return (
            n.splice(this.anchor.offset, 0, _t128.getChildren()),
            void (null !== _o36 && _o36.selectEnd())
          );
        }
        var o = (this.isBackward() ? this.focus : this.anchor).getNode(),
          r = fc(o, Wl);
        var s = e[e.length - 1];
        if (Os(r) && "__language" in r) {
          if ("__language" in e[0]) this.insertText(e[0].getTextContent());
          else {
            var _t129 = jr(this);
            (r.splice(_t129, 0, e), s.selectEnd());
          }
          return;
        }
        if (
          !e.some(function (t) {
            return (Os(t) || As(t)) && !t.isInline();
          })
        ) {
          Os(r) || t(211, o.constructor.name, o.getType());
          var _n61 = jr(this);
          return (r.splice(_n61, 0, e), void s.selectEnd());
        }
        if (Os(r) && null !== mc(r)) {
          var _t130 = jr(this),
            _n62 = Yr(e);
          r.splice(_t130, 0, _n62);
          var _o37 = _n62[_n62.length - 1];
          return void (void 0 !== _o37
            ? _o37.selectEnd()
            : r.select(_t130, _t130));
        }
        if (null === r) {
          var _t131 = Vr(e),
            _n63 = _t131.getLastDescendant();
          var _o38 = _a(this.anchor, "next");
          for (var _e84 of _t131.getChildren()) _o38 = Da(_e84, _o38);
          return void (null !== _n63 && _n63.selectEnd());
        }
        if (Os(r) && !r.isParentRequired() && !fl(r.getParentOrThrow())) {
          var _t132 = jr(this),
            _n64 = Yr(e);
          r.splice(_t132, 0, _n64);
          var _o39 = _n64[_n64.length - 1];
          return void (void 0 !== _o39
            ? _o39.selectEnd()
            : r.select(_t132, _t132));
        }
        var i = Vr(e),
          l = i.getLastDescendant(),
          c = i.getChildren(),
          a = !Os(r) || !r.isEmpty() ? this.insertParagraph() : null;
        a && !r.isAttached() && ((o = this.anchor.getNode()), (r = fc(o, Wl)));
        var u = c[c.length - 1];
        var f = c[0];
        var d;
        (Os((d = f)) &&
          Wl(d) &&
          !d.isEmpty() &&
          Os(r) &&
          (!r.isEmpty() || r.canMergeWhenEmpty()) &&
          (Os(r) || t(211, o.constructor.name, o.getType()),
          (_r31 = r).append.apply(_r31, f.getChildren()),
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
        var h = fc(l, Wl);
        (a &&
          Os(h) &&
          (a.canMergeWhenEmpty() || Wl(u)) &&
          (h.append.apply(h, a.getChildren()), a.remove()),
          Os(r) && r.isEmpty() && r.remove(),
          l.selectEnd());
        var g = Os(r) ? r.getLastChild() : null;
        zs(g) && h !== r && g.remove();
      };
      _proto10.insertParagraph = function insertParagraph() {
        var e = this.anchor.getNode();
        if ("element" === this.anchor.type && fl(e)) {
          var _t134 = Gs();
          return (
            e.splice(this.anchor.offset, 0, [_t134]),
            _t134.select(),
            _t134
          );
        }
        var n = jr(this),
          o = fc(this.anchor.getNode(), Wl);
        if (null !== o && null !== mc(o)) return null;
        Os(o) || t(213);
        var r = o.getChildAtIndex(n),
          s = r ? [r].concat(r.getNextSiblings()) : [],
          i = o.insertNewAfter(this, !1);
        return i ? (i.append.apply(i, s), i.selectStart(), i) : null;
      };
      _proto10.insertLineBreak = function insertLineBreak(t) {
        var e = $s();
        if ((this.insertNodes([e]), t)) {
          var _t135 = e.getParentOrThrow(),
            _n65 = e.getIndexWithinParent();
          _t135.select(_n65, _n65);
        }
      };
      _proto10.extract = function extract() {
        var _n$splitText;
        var t = [].concat(this.getNodes()),
          e = t.length;
        var n = t[0],
          o = t[e - 1];
        var _r32 = _r(this),
          r = _r32[0],
          s = _r32[1],
          i = this.isBackward(),
          _ref33 = i ? [this.focus, this.anchor] : [this.anchor, this.focus],
          l = _ref33[0],
          c = _ref33[1],
          _ref34 = i ? [s, r] : [r, s],
          a = _ref34[0],
          u = _ref34[1];
        if (0 === e) return [];
        if (1 === e) {
          if (qo(n) && !this.isCollapsed()) {
            var _t136 = n.splitText(a, u),
              _e85 = 0 === a ? _t136[0] : _t136[1];
            return _e85
              ? (l.set(_e85.getKey(), 0, "text"),
                c.set(_e85.getKey(), _e85.getTextContentSize(), "text"),
                [_e85])
              : [];
          }
          return [n];
        }
        if (
          (qo(n) &&
            (a === n.getTextContentSize()
              ? t.shift()
              : 0 !== a &&
                ((_n$splitText = n.splitText(a)),
                (n = _n$splitText[1]),
                (t[0] = n),
                l.set(n.getKey(), 0, "text"))),
          qo(o))
        ) {
          var _o$splitText;
          var _e86 = o.getTextContent().length;
          0 === u
            ? t.pop()
            : u !== _e86 &&
              ((_o$splitText = o.splitText(u)),
              (o = _o$splitText[0]),
              (t[t.length - 1] = o),
              c.set(o.getKey(), o.getTextContentSize(), "text"));
        }
        return t;
      };
      _proto10.modify = function modify(t, e, n) {
        if (qr(this, t, e, n)) return;
        var o = "move" === t,
          r = as(),
          s = yl(ll(r));
        if (!s) return;
        var i = r._blockCursorElement,
          l = r._rootElement,
          c = this.focus.getNode();
        null === l ||
          null === i ||
          !Os(c) ||
          c.isInline() ||
          c.canBeEmpty() ||
          ml(i, r, l);
        var a = tl(r, this.focus.key);
        var u = a;
        if (
          ("text" === this.focus.type && (u = qo(c) ? Gl(c, a, r) : null),
          this.dirty)
        ) {
          var _t137 = tl(r, this.anchor.key);
          var _e87 = _t137;
          if ("text" === this.anchor.type) {
            var _n66 = this.anchor.getNode();
            _e87 = qo(_n66) ? Gl(_n66, _t137, r) : null;
          }
          _e87 && u && $r(s, _e87, this.anchor.offset, u, this.focus.offset);
        }
        if ("character" === n && qo(c) && c.isUnmergeable()) {
          if (
            e
              ? 0 === this.focus.offset
              : this.focus.offset === c.getTextContentSize()
          ) {
            var _t138 = qc(c, e ? "previous" : "next").getNodeAtCaret();
            if (qo(_t138)) {
              if (!o) {
                var _n67 = _t138.getTextContentSize();
                return (
                  e
                    ? this.focus.set(_t138.__key, _n67 - 1, "text")
                    : this.focus.set(_t138.__key, 1, "text"),
                  void (this.dirty = !0)
                );
              }
              {
                var _n68 = r.getElementByKey(_t138.getKey()),
                  _o40 = _n68 ? Gl(_t138, _n68, r) : null;
                if (_o40) {
                  var _t139 = e ? _o40.length : 0;
                  $r(s, _o40, _t139, _o40, _t139);
                }
              }
            }
          }
        }
        if ((yr(s, t, e ? "backward" : "forward", n), s.rangeCount > 0)) {
          var _t140 = El(s, r._rootElement),
            _n69 = _t140 || s.getRangeAt(0),
            _i16 = this.anchor.getNode(),
            _l0 = ws(_i16) ? _i16 : al(_i16);
          if ((this.applyDOMRange(_n69), (this.dirty = !0), !o)) {
            xr(this, e, _l0);
            (_t140
              ? "backward" !== s.direction
              : s.anchorNode === _n69.startContainer &&
                s.anchorOffset === _n69.startOffset) || mr(this);
          }
        }
        "lineboundary" === n && qr(this, t, e, n, "decorators");
      };
      _proto10.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            Os(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t141 = e.getParent(),
            _n70 =
              e.getNextSibling() ||
              (null === _t141 ? null : _t141.getNextSibling());
          if (Os(_n70) && _n70.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto10.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e88 = this.anchor;
          var _n71 = _e88.getNode();
          if (this.forwardDeletion(_e88, _n71, t)) return;
          var _o41 = ia(_a(_e88, t ? "previous" : "next"));
          if (
            _o41.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            var _t142 = { type: "initial" };
            for (var _e89 of _o41.iterNodeCarets("shadowRoot"))
              if (jc(_e89)) {
                if (_e89.origin.isInline());
                else {
                  if (_e89.origin.isShadowRoot()) {
                    if ("merge-block" === _t142.type) break;
                    if (
                      Os(_o41.anchor.origin) &&
                      _o41.anchor.origin.isEmpty()
                    ) {
                      var _t143 = va(_e89);
                      (ya(this, ca(_t143, _t143)), _o41.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t142.type &&
                    "merge-block" !== _t142.type) ||
                    (_t142 = {
                      block: _t142.block,
                      caret: _e89,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t142.type) break;
                if (Yc(_e89)) {
                  if (Os(_e89.origin)) {
                    if (_e89.origin.isInline()) {
                      if (!_e89.origin.isParentOf(_o41.anchor.origin)) break;
                    } else
                      _t142 = { block: _e89.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (As(_e89.origin)) {
                    if (_e89.origin.isIsolated());
                    else if (
                      "merge-next-block" === _t142.type &&
                      (_e89.origin.isKeyboardSelectable() ||
                        !_e89.origin.isInline()) &&
                      Os(_o41.anchor.origin) &&
                      _o41.anchor.origin.isEmpty()
                    ) {
                      _o41.anchor.origin.remove();
                      var _t144 = wr();
                      (_t144.add(_e89.origin.getKey()), Ri(_t144));
                    } else _e89.origin.remove();
                    return;
                  }
                  if (zs(_e89.origin)) return void _e89.origin.remove();
                  break;
                }
              }
            if ("merge-block" === _t142.type) {
              var _t145 = _t142,
                _e90 = _t145.caret,
                _n72 = _t145.block;
              if (Tc(_n72).length > 0) return;
              return _e90.origin.isEmpty() &&
                !_n72.isEmpty() &&
                _e90.origin.getParent() === _n72.getParent()
                ? void _e90.origin.remove(!0)
                : (ya(
                    this,
                    ca(
                      !_e90.origin.isEmpty() && _n72.isEmpty()
                        ? Ca(qc(_n72, _e90.direction))
                        : _o41.anchor,
                      _e90,
                    ),
                  ),
                  this.removeText());
            }
            for (var _t146 = _e88.getNode(); null !== _t146; ) {
              if (null !== mc(_t146)) return;
              if (Os(_t146) && _t146.isShadowRoot()) break;
              _t146 = _t146.getParent();
            }
          }
          var _r33 = this.focus;
          if ((Cr(this, t, "character"), this.isCollapsed())) {
            if (t && 0 === _e88.offset && pr(this, _e88.getNode())) return;
          } else {
            var _o42 = "text" === _r33.type ? _r33.getNode() : null;
            if (
              ((_n71 = "text" === _e88.type ? _e88.getNode() : null),
              null !== _o42 && _o42.isSegmented())
            ) {
              var _e91 = _r33.offset,
                _s26 = _o42.getTextContentSize();
              if (_o42.is(_n71) || (t && _e91 !== _s26) || (!t && 0 !== _e91))
                return void Tr(_o42, t, _e91);
            } else if (null !== _n71 && _n71.isSegmented()) {
              var _r34 = _e88.offset,
                _s27 = _n71.getTextContentSize();
              if (_n71.is(_o42) || (t && 0 !== _r34) || (!t && _r34 !== _s27))
                return void Tr(_n71, t, _r34);
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
                  _l1 = _i17 ? _t147 : _s28,
                  _c8 = _i17 ? _s28 : _t147,
                  _a7 = _c8 - 1;
                if (_l1 !== _a7) {
                  (function (t) {
                    return !(Bi(t) || Sr(t));
                  })(r.getTextContent().slice(_l1, _c8)) &&
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
          var _t148 = this.anchor.getNode();
          (_t148.isEmpty() &&
            ws(_t148.getParent()) &&
            null === _t148.getPreviousSibling() &&
            pr(this, _t148),
            cr());
        }
      };
      _proto10.deleteLine = function deleteLine(t) {
        var e = kr(this.anchor);
        if (null !== e && As(yc(e)))
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
          (this.isCollapsed() && Cr(this, t, "lineboundary"),
          this.isCollapsed())
        )
          this.deleteCharacter(t);
        else {
          fc(this.anchor.getNode(), Wl) !== fc(this.focus.getNode(), Wl)
            ? (this.focus.set(
                this.anchor.key,
                this.anchor.offset,
                this.anchor.type,
              ),
              this.deleteCharacter(t))
            : this.removeText();
        }
      };
      _proto10.deleteWord = function deleteWord(t) {
        if (this.isCollapsed()) {
          var _e92 = this.anchor,
            _n73 = _e92.getNode();
          if (this.forwardDeletion(_e92, _n73, t)) return;
          Cr(this, t, "word");
        }
        this.isCollapsed() ? this.deleteCharacter(t) : this.removeText();
      };
      _proto10.isBackward = function isBackward() {
        var t = this._cachedIsBackward;
        if (null !== t) return t;
        var e = this.focus.isBefore(this.anchor);
        return (ss() || (this._cachedIsBackward = e), e);
      };
      _proto10.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return ur;
    })();
    function fr(t) {
      return t instanceof _lr;
    }
    function dr(t, e) {
      var _u$splitText, _h$splitText;
      if (fr(t)) {
        for (var _n74 of t.getNodes())
          Bo(_n74) && _n74.setFormat(e(_n74.getFormat()));
        return;
      }
      if (t.isCollapsed()) return (t.setFormat(e(t.format)), void Ei(null));
      var n = [];
      for (var _o43 of t.getNodes())
        qo(_o43)
          ? n.push(_o43)
          : Os(_o43)
            ? _o43.setTextFormat(e(_o43.getTextFormat()))
            : Bo(_o43) && _o43.setFormat(e(_o43.getFormat()));
      var o = n.length;
      if (0 === o) return (t.setFormat(e(t.format)), void Ei(null));
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
        var _n75 = e(u.getFormat());
        if (mi(u) || (0 === f && g === u.getTextContentSize()))
          u.setFormat(_n75);
        else {
          var _t149 = u.splitText(f, g),
            _e93 = 0 === f ? _t149[0] : _t149[1];
          (_e93.setFormat(_n75),
            "text" === l.type && l.set(_e93.__key, 0, "text"),
            "text" === c.type && c.set(_e93.__key, g - f, "text"));
        }
        return void (t.format = _n75);
      }
      0 === f ||
        mi(u) ||
        ((_u$splitText = u.splitText(f)), (u = _u$splitText[1]), (f = 0));
      var _ = e(u.getFormat());
      u.setFormat(_);
      var p = e(h.getFormat());
      g > 0 &&
        (g === h.getTextContentSize() ||
          mi(h) ||
          ((_h$splitText = h.splitText(g)),
          (h = _h$splitText[0]),
          _h$splitText),
        h.setFormat(p));
      for (var _t150 = a + 1; _t150 < d; _t150++) {
        var _o44 = n[_t150];
        _o44.setFormat(e(_o44.getFormat()));
      }
      ("text" === l.type && l.set(u.__key, f, "text"),
        "text" === c.type && c.set(h.__key, g, "text"),
        (t.format = _ | p));
    }
    function hr(t, e, n) {
      if (n === void 0) {
        n = null;
      }
      var o = null === n && ar(t) ? Si(t.format, e, null) : n;
      dr(t, function (t) {
        return Si(t, e, o);
      });
    }
    function gr(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function _r(t) {
      var e = t.getStartEndPoints();
      if (null === e) return [0, 0];
      var n = e[0],
        o = e[1];
      return "element" === n.type &&
        "element" === o.type &&
        n.key === o.key &&
        n.offset === o.offset
        ? [0, 0]
        : [gr(n), gr(o)];
    }
    function pr(t, e) {
      for (var _n76 = e; _n76; _n76 = _n76.getParent()) {
        if (Os(_n76)) {
          if (_n76.collapseAtStart(t)) return !0;
          if (fl(_n76)) break;
        }
        if (_n76.getPreviousSibling()) break;
      }
      return !1;
    }
    function mr(t) {
      var e = t.focus,
        n = t.anchor,
        o = n.key,
        r = n.offset,
        s = n.type;
      (n.set(e.key, e.offset, e.type, !0), e.set(o, r, s, !0));
    }
    function yr(t, e, n, o) {
      t.modify(e, n, o);
    }
    function xr(t, e, n) {
      var o = t.getNodes(),
        r = o.filter(function (t) {
          return sl(t, n);
        });
      if (0 === r.length || r.length === o.length) return !1;
      var s = e ? r[0] : r[r.length - 1],
        i = Os(s) ? s : s.getParentOrThrow();
      return (e ? i.selectStart() : i.selectEnd(), !0);
    }
    function Cr(t, e, n) {
      if (qr(t, "extend", e, n)) return;
      var o = as(),
        r = yl(ll(o));
      if (!r || "function" != typeof r.modify) return;
      var s = o._blockCursorElement,
        i = o._rootElement,
        l = t.anchor,
        c = t.focus.getNode();
      null === i ||
        null === s ||
        !Os(c) ||
        c.isInline() ||
        c.canBeEmpty() ||
        ml(s, o, i);
      var a = function a(t) {
          var e = t.getNode(),
            n = o.getElementByKey(t.key);
          return null !== n && "text" === t.type && qo(e) ? Gl(e, n, o) : n;
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
        ($r(r, _, p, _, p),
        yr(r, "move", e ? "backward" : "forward", n),
        0 === r.rangeCount)
      )
        return;
      var m = El(r, i) || r.getRangeAt(0),
        y = m.startContainer,
        x = m.startOffset;
      if (
        h &&
        "character" === n &&
        "text" === l.type &&
        qo(u) &&
        u.isUnmergeable()
      ) {
        if (d === (e ? 0 : u.getTextContentSize())) {
          var _n77 = qc(u, e ? "previous" : "next").getNodeAtCaret();
          if (qo(_n77)) {
            var _o45 = e ? _n77.getTextContentSize() - 1 : 1;
            return (t.focus.set(_n77.__key, _o45, "text"), void (t.dirty = !0));
          }
        }
      }
      if (h && "character" === n && "text" === l.type) {
        var _n78 = e ? 0 : u.getTextContentSize(),
          _o46 = y === f ? x : d !== _n78 ? _n78 : -1;
        if (_o46 >= 0)
          return void (
            _o46 !== d && (t.focus.set(l.key, _o46, "text"), (t.dirty = !0))
          );
      }
      var _ref35 = e ? [y, x, f, d] : [f, d, y, x],
        C = _ref35[0],
        S = _ref35[1],
        T = _ref35[2],
        N = _ref35[3],
        v = ws(u) ? u : al(u);
      (t.applyDOMRange({
        collapsed: !1,
        endContainer: T,
        endOffset: N,
        startContainer: C,
        startOffset: S,
      }),
        (t.dirty = !0),
        !xr(t, e, v) && e && mr(t),
        "lineboundary" === n && qr(t, "extend", e, n, "decorators"));
    }
    var Sr = (function () {
      try {
        var _t151 = new RegExp("\\p{Emoji}", "u"),
          _e94 = _t151.test.bind(_t151);
        if (_e94("\u2764\ufe0f") && _e94("#\ufe0f\u20e3") && _e94("\u{1f44d}"))
          return _e94;
      } catch (t) {}
      return function () {
        return !1;
      };
    })();
    function Tr(t, e, n) {
      var o = t,
        r = o.getTextContent().split(/(?=\s)/g),
        s = r.length;
      var i = 0,
        l = 0;
      for (var _t152 = 0; _t152 < s; _t152++) {
        var _o47 = _t152 === s - 1;
        if (
          ((l = i), (i += r[_t152].length), (e && i === n) || i > n || _o47)
        ) {
          (r.splice(_t152, 1), _o47 && (l = void 0));
          break;
        }
      }
      var c = r.join("").trim();
      "" === c ? o.remove() : (o.setTextContent(c), o.select(l, l));
    }
    function Nr(e, n, o, r) {
      var s,
        i = n,
        l = !1;
      if (Fl(e)) {
        var _c9 = !1;
        var _a8 = e.childNodes,
          _u9 = _a8.length,
          _f8 = r._blockCursorElement;
        (i === _u9 && _u9 > 0 && ((_c9 = !0), (i = _u9 - 1)),
          void 0 !== Di(e, r) || rc(e, r) || (l = !0));
        var _d8 = _a8[i],
          _h7 = !1;
        if (_d8 === _f8) ((_d8 = _a8[i + 1]), (_h7 = !0));
        else if (null !== _f8) {
          var _t153 = _f8.parentNode;
          if (e === _t153) {
            n > Array.prototype.indexOf.call(_t153.children, _f8) && i--;
          }
        }
        if (((s = Ki(_d8)), qo(s))) i = Qc(s, _c9 ? "next" : "previous");
        else {
          var _a9 = Ki(e);
          if (null === _a9) return null;
          if (Os(_a9)) {
            var _u0$resolveChildIndex;
            var _l10 = r.getElementByKey(_a9.getKey());
            null === _l10 && t(214);
            var _u0 = Yl(_a9, _l10, r);
            ((_u0$resolveChildIndex = _u0.resolveChildIndex(_a9, _l10, e, n)),
              (_a9 = _u0$resolveChildIndex[0]),
              (i = _u0$resolveChildIndex[1]),
              Os(_a9) || t(215),
              _c9 &&
                i >= _a9.getChildrenSize() &&
                (i = Math.max(0, _a9.getChildrenSize() - 1)));
            var _f9 = _a9.getChildAtIndex(i);
            if (
              Os(_f9) &&
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
              var _t154 = _c9
                ? _f9.getLastDescendant()
                : _f9.getFirstDescendant();
              (null === _t154
                ? (_a9 = _f9)
                : ((_f9 = _t154),
                  (_a9 = Os(_f9) ? _f9 : _f9.getParentOrThrow())),
                (i = 0));
            }
            qo(_f9)
              ? ((s = _f9),
                (_a9 = null),
                (i = Qc(_f9, _c9 ? "next" : "previous")))
              : _f9 !== _a9 &&
                _c9 &&
                !_h7 &&
                (Os(_a9) || t(216),
                (i = Math.min(_a9.getChildrenSize(), i + 1)));
          } else {
            var _t155 = yc(_a9),
              _o48 = null !== _t155 ? _t155 : _a9,
              _s29 = _o48.getIndexWithinParent(),
              _l11 = r.getElementByKey(_a9.getKey());
            var _c0 = "after";
            if (null !== _l11 && Ki(e) === _a9) {
              var _t156 = Yl(_a9, _l11, r);
              _t156.element !== _l11
                ? (_c0 = _t156.resolveLeafPosition(_l11, e, n))
                : 0 === n && As(_a9) && (_c0 = "before");
            }
            ((i = "before" === _c0 ? _s29 : _s29 + 1),
              (_a9 = _o48.getParentOrThrow()));
          }
          if (Os(_a9)) return [nr(_a9.__key, i, "element"), l];
        }
      } else s = Ki(e);
      return qo(s) ? [nr(s.__key, Qc(s, i, "clamp"), "text"), l] : null;
    }
    function vr(t, e, n) {
      var o = t.offset,
        r = t.getNode();
      if (0 === o) {
        var _o49 = r.getPreviousSibling(),
          _s30 = r.getParent();
        if (e) {
          if ((n || !e) && null === _o49 && Os(_s30) && _s30.isInline()) {
            var _e95 = _s30.getPreviousSibling();
            qo(_e95) && t.set(_e95.__key, _e95.getTextContent().length, "text");
          }
        } else
          Os(_o49) && !n && _o49.isInline()
            ? t.set(_o49.__key, _o49.getChildrenSize(), "element")
            : qo(_o49) &&
              !r.isUnmergeable() &&
              t.set(_o49.__key, _o49.getTextContent().length, "text");
      } else if (o === r.getTextContent().length) {
        var _o50 = r.getNextSibling(),
          _s31 = r.getParent();
        if (e && Os(_o50) && _o50.isInline()) t.set(_o50.__key, 0, "element");
        else if (
          (n || e) &&
          null === _o50 &&
          Os(_s31) &&
          _s31.isInline() &&
          !_s31.canInsertTextAfter() &&
          _s31.getTextContentSize() > 1
        ) {
          var _e96 = _s31.getNextSibling();
          qo(_e96) && t.set(_e96.__key, 0, "text");
        }
      }
    }
    function kr(t) {
      var e = bi(t.key);
      return null === e ? null : Cc(e);
    }
    function Er(t, e, n) {
      var o = kr(t),
        r = kr(e);
      if (o === r || (null !== o && null !== r && o.is(r))) return !1;
      var s = n(o, r);
      if (null !== o)
        return (
          Os(o)
            ? e.set(o.getKey(), s ? o.getChildrenSize() : 0, "element")
            : e.set(o.getKey(), s ? o.getTextContentSize() : 0, "text"),
          !0
        );
      var i = yc(r);
      if (null === i) return !1;
      var l = i.getParent();
      if (null === l) return !1;
      var c = i.getIndexWithinParent();
      return (e.set(l.getKey(), s ? c + 1 : c, "element"), !0);
    }
    function Or(t) {
      var e = Er(t.anchor, t.focus, function (e, n) {
        return (function (t, e, n, o) {
          if (null !== n && null !== o) {
            var _t157 = yc(n),
              _e97 = yc(o);
            if (null !== _t157 && _t157.is(_e97)) {
              for (var _e98 of Sc(_t157).values()) {
                if (_e98 === n.getKey()) return !0;
                if (_e98 === o.getKey()) return !1;
              }
              return !0;
            }
            return null === _t157 || null === _e97 || _t157.isBefore(_e97);
          }
          if (null !== n) {
            var _t158 = yc(n),
              _o51 = bi(e.key);
            return (
              null === _t158 ||
              null === _o51 ||
              !(!_t158.is(_o51) && !_t158.isParentOf(_o51)) ||
              _t158.isBefore(_o51)
            );
          }
          var r = yc(o),
            s = bi(t.key);
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
    function br(t, e, n, o, r, s) {
      if (null === t || null === n || !di(r, t, n)) return null;
      var i = Nr(t, e, ar(s) ? s.anchor : null, r);
      if (null === i) return null;
      var l = Nr(n, o, ar(s) ? s.focus : null, r);
      if (null === l) return null;
      var c = i[0],
        a = i[1],
        u = l[0],
        f = l[1];
      if ("element" === c.type && "element" === u.type) {
        var _e99 = Ki(t),
          _o52 = Ki(n);
        if (As(_e99) && As(_o52)) return null;
      }
      var d =
        r._slotsUsed &&
        Er(c, u, function () {
          return (
            0 !==
            (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_FOLLOWING)
          );
        });
      return (
        (function (t, e) {
          if ("text" === t.type && "text" === e.type) {
            var _n79 = t.isBefore(e),
              _o53 = t.is(e);
            (vr(t, _n79, _o53),
              vr(e, !_n79, _o53),
              _o53 && e.set(t.key, t.offset, t.type));
          }
        })(c, u),
        [c, u, a || f || d]
      );
    }
    function Mr(t) {
      return Os(t) && !t.isInline();
    }
    function Ar(t, e, n, o, r, s) {
      var i = cs(),
        l = new _ur(nr(t, e, r), nr(n, o, s), 0, "");
      return ((l.dirty = !0), (i._selection = l), l);
    }
    function Dr() {
      var t = nr("root", 0, "element"),
        e = nr("root", 0, "element");
      return new _ur(t, e, 0, "");
    }
    function wr() {
      return new _lr(new Set());
    }
    function Ir(t, e, n, o) {
      var r = n._window;
      if (null === r) return null;
      var s = o || r.event,
        i = s ? s.type : void 0,
        l = "selectionchange" === i,
        c =
          !tt &&
          (l ||
            "beforeinput" === i ||
            "compositionstart" === i ||
            "compositionend" === i ||
            ("click" === i && s && 3 === s.detail) ||
            "drop" === i ||
            void 0 === i);
      var a, u, f, d;
      if (ar(t) && !c) return t.clone();
      {
        if (null === e) return null;
        var _o54 = bl(e, n._rootElement);
        if (
          ((a = _o54.anchorNode),
          (u = _o54.focusNode),
          (f = _o54.anchorOffset),
          (d = _o54.focusOffset),
          (l || void 0 === i) && ar(t) && !di(n, a, u))
        )
          return t.clone();
      }
      var h = br(a, f, u, d, n, t);
      if (null === h) return null;
      var g = h[0],
        _ = h[1],
        p = h[2];
      var m = 0,
        y = "";
      if (ar(t)) {
        var _e100 = t.anchor;
        if (g.key === _e100.key) ((m = t.format), (y = t.style));
        else {
          var _t159 = g.getNode();
          qo(_t159)
            ? ((m = _t159.getFormat()), (y = _t159.getStyle()))
            : Os(_t159) &&
              ((m = _t159.getTextFormat()), (y = _t159.getTextStyle()));
        }
      }
      var x = new _ur(g, _, m, y);
      return (p && (x.dirty = !0), x);
    }
    function Pr() {
      return cs()._selection;
    }
    function Fr() {
      return as()._editorState._selection;
    }
    function Rr(t, e, n, o) {
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
        var _e101 = r.offset;
        if ((n <= _e101 && o > 0) || (n < _e101 && o < 0)) {
          var _n80 = Math.max(0, _e101 + o);
          (r.set(c, _n80, "element"), s.set(c, _n80, "element"), Lr(t));
        }
      } else {
        var _i18 = t.isBackward(),
          _l12 = _i18 ? s : r,
          _a0 = _l12.getNode(),
          _u1 = _i18 ? r : s,
          _f0 = _u1.getNode();
        if (e.is(_a0)) {
          var _t160 = _l12.offset;
          ((n <= _t160 && o > 0) || (n < _t160 && o < 0)) &&
            _l12.set(c, Math.max(0, _t160 + o), "element");
        }
        if (e.is(_f0)) {
          var _t161 = _u1.offset;
          ((n <= _t161 && o > 0) || (n < _t161 && o < 0)) &&
            _u1.set(c, Math.max(0, _t161 + o), "element");
        }
      }
      Lr(t);
    }
    function Lr(t) {
      var e = t.anchor,
        n = e.offset,
        o = t.focus,
        r = o.offset,
        s = e.getNode(),
        i = o.getNode();
      if (t.isCollapsed()) {
        if (!Os(s)) return;
        var _t162 = s.getChildrenSize(),
          _r35 = n >= _t162,
          _i19 = _r35 ? s.getChildAtIndex(_t162 - 1) : s.getChildAtIndex(n);
        if (qo(_i19)) {
          var _t163 = 0;
          (_r35 && (_t163 = _i19.getTextContentSize()),
            e.set(_i19.__key, _t163, "text"),
            o.set(_i19.__key, _t163, "text"));
        }
        return;
      }
      if (Os(s)) {
        var _t164 = s.getChildrenSize(),
          _o55 = n >= _t164,
          _r36 = _o55 ? s.getChildAtIndex(_t164 - 1) : s.getChildAtIndex(n);
        if (qo(_r36)) {
          var _t165 = 0;
          (_o55 && (_t165 = _r36.getTextContentSize()),
            e.set(_r36.__key, _t165, "text"));
        }
      }
      if (Os(i)) {
        var _t166 = i.getChildrenSize(),
          _e102 = r >= _t166,
          _n81 = _e102 ? i.getChildAtIndex(_t166 - 1) : i.getChildAtIndex(r);
        if (qo(_n81)) {
          var _t167 = 0;
          (_e102 && (_t167 = _n81.getTextContentSize()),
            o.set(_n81.__key, _t167, "text"));
        }
      }
    }
    function Kr(t, e, n, o, r) {
      var s = null,
        i = 0,
        l = null;
      (null !== o
        ? ((s = o.__key),
          qo(o)
            ? ((i = o.getTextContentSize()), (l = "text"))
            : Os(o) && ((i = o.getChildrenSize()), (l = "element")))
        : null !== r &&
          ((s = r.__key), qo(r) ? (l = "text") : Os(r) && (l = "element")),
        null !== s && null !== l
          ? t.set(s, i, l)
          : ((i = e.getIndexWithinParent()),
            -1 === i && (i = n.getChildrenSize()),
            t.set(n.__key, i, "element")));
    }
    function Br(t, e, n, o, r) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : r), "text")
        : t.offset > o.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function $r(t, e, n, o, r) {
      try {
        t.setBaseAndExtent(e, n, o, r);
      } catch (t) {}
    }
    function zr(t, e, n) {
      var o = tl(t, e.getKey());
      if (Os(e)) {
        var _r37 = Yl(e, o, t);
        return [_r37.element, n + _r37.getFirstChildOffset()];
      }
      return [o, n];
    }
    function Wr(t, e, n, o, r, i) {
      var l = i.getRootNode(),
        c = xi(l) || Cl(l) ? Il(l) : null;
      if ((r.has(No) && c !== i) || (null !== c && ui(c, c))) return;
      var a = bl(o, i);
      var u;
      if (!ar(e))
        return void (
          null !== t &&
          di(n, a.anchorNode, a.focusNode) &&
          o.removeAllRanges()
        );
      var f = e.anchor,
        d = e.focus,
        h = f.getNode(),
        g = d.getNode(),
        _zr = zr(n, h, f.offset),
        _ = _zr[0],
        p = _zr[1],
        _zr2 = zr(n, g, d.offset),
        m = _zr2[0],
        y = _zr2[1],
        x = e.format,
        C = e.style,
        S = e.isCollapsed();
      var T = _,
        N = m,
        v = !1;
      if (
        ("text" === f.type
          ? ((T = qo(h) ? Gl(h, _, n) : null),
            (v = h.getFormat() !== x || h.getStyle() !== C))
          : ar(t) && "text" === t.anchor.type && (v = !0),
        "text" === d.type && (N = qo(g) ? Gl(g, m, n) : null),
        null !== T && null !== N)
      ) {
        if (
          (S &&
            (null === t || v || (ar(t) && (t.format !== x || t.style !== C))) &&
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
            var _t168 = null !== c ? gi(c) : null;
            (null !== _t168 && _t168 !== n) ||
              r.has(Eo) ||
              i.focus({ preventScroll: !0 });
          }
          if ("element" !== f.type) return;
        }
        if (
          ($r(o, T, p, N, y), s && e.isCollapsed() && null !== i && !r.has(Eo))
        ) {
          var _t169 = wl(i);
          if (null === _t169 || !i.contains(_t169)) {
            var _t170 = Il(i.ownerDocument),
              _e103 = null !== _t170 ? gi(_t170) : null;
            (null !== _e103 && _e103 !== n) || i.focus({ preventScroll: !0 });
          }
        }
        if (!r.has(vo) && e.isCollapsed() && null !== i && i === wl(i)) {
          var _t171 =
            ar(e) && "element" === e.anchor.type
              ? T.childNodes[p] || null
              : (void 0 === u && (u = Ol(o, i)), u);
          if (null !== _t171) {
            var _e104;
            if (yi(_t171)) {
              var _n82 = _t171.ownerDocument.createRange();
              (_n82.selectNode(_t171), (_e104 = _n82.getBoundingClientRect()));
            } else _e104 = _t171.getBoundingClientRect();
            !(function (t, e, n) {
              var o = nl(n),
                r = il(o);
              if (null === o || null === r) return;
              var s = n.getBoundingClientRect();
              if (e.bottom < s.top) return;
              var i = e.top,
                l = e.bottom,
                c = 0,
                a = 0,
                u = n;
              for (; null !== u; ) {
                var _e105 = u === o.body;
                if (_e105) {
                  var _e106 = r.visualViewport;
                  if (_e106) {
                    var _t172 = _e106.offsetTop;
                    ((c = _t172), (a = _t172 + _e106.height));
                  } else ((c = 0), (a = ll(t).innerHeight));
                  var _n83 = r.getComputedStyle(o.documentElement),
                    _s32 = parseFloat(_n83.scrollPaddingTop),
                    _i20 = parseFloat(_n83.scrollPaddingBottom);
                  (isFinite(_s32) && (c += _s32),
                    isFinite(_i20) && (a -= _i20));
                } else {
                  var _t173 = u === n ? s : u.getBoundingClientRect();
                  ((c = _t173.top), (a = _t173.bottom));
                }
                var _f1 = 0;
                if (
                  (i < c ? (_f1 = -(c - i)) : l > a && (_f1 = l - a), 0 !== _f1)
                )
                  if (_e105) r.scrollBy(0, _f1);
                  else {
                    var _t174 = u.scrollTop;
                    u.scrollTop += _f1;
                    var _e107 = u.scrollTop - _t174;
                    ((i -= _e107), (l -= _e107));
                  }
                if (_e105) break;
                u = el(u);
              }
            })(n, _e104, i);
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
    function Ur(t, e) {
      for (var _n84 of t.split(/(\r?\n|\t)/))
        "\n" === _n84 || "\r\n" === _n84
          ? e.linebreak()
          : "\t" === _n84
            ? e.tab()
            : "" !== _n84 && e.text(_n84);
    }
    function Hr(t) {
      var e = [];
      return (
        Ur(t, {
          linebreak: function linebreak() {
            return e.push($s());
          },
          tab: function tab() {
            return e.push(Zo());
          },
          text: function text(t) {
            return e.push(Vo(t));
          },
        }),
        e
      );
    }
    function Yr(t) {
      var e = [];
      for (var _n85 of t)
        zs(_n85) ||
          ((!Os(_n85) && !As(_n85)) || _n85.isInline()
            ? e.push(_n85)
            : Os(_n85) && e.push.apply(e, Yr(_n85.getChildren())));
      return e;
    }
    function jr(e) {
      var n = e;
      e.isCollapsed() || n.removeText();
      var o = Pr();
      (ar(o) && (n = o), ar(n) || t(161));
      var r = n.anchor;
      var s = r.getNode(),
        i = r.offset;
      for (; !Wl(s) && null === mc(s); ) {
        var _Gr;
        var _t175 = s;
        if (((_Gr = Gr(s, i)), (s = _Gr[0]), (i = _Gr[1]), _t175.is(s))) break;
      }
      return i;
    }
    function Gr(t, e) {
      var n = t.getParent();
      if (!n) {
        var _t176 = Gs();
        return (Fi().append(_t176), _t176.select(), [Fi(), 0]);
      }
      if (qo(t)) {
        var _o56 = t.splitText(e);
        if (0 === _o56.length) return [n, t.getIndexWithinParent()];
        var _r38 = 0 === e ? 0 : 1;
        return [n, _o56[0].getIndexWithinParent() + _r38];
      }
      if (!Os(t) || 0 === e) return [n, t.getIndexWithinParent()];
      var o = t.getChildAtIndex(e);
      if (o) {
        var _n86 = new _ur(
            nr(t.__key, e, "element"),
            nr(t.__key, e, "element"),
            0,
            "",
          ),
          _r39 = t.insertNewAfter(_n86);
        _r39 && _r39.append.apply(_r39, [o].concat(o.getNextSiblings()));
      }
      return [n, t.getIndexWithinParent() + 1];
    }
    function Jr(t) {
      return zs(t) || cl(t) || qo(t) || t.isParentRequired();
    }
    function Vr(t) {
      var e = Gs();
      var n = null;
      for (var _o57 = 0; _o57 < t.length; _o57++) {
        var _r40 = t[_o57];
        if (Jr(_r40)) {
          if (null === n) {
            ((n = _r40.createParentElementNode()), e.append(n));
            var _s33 = t[_o57 + 1];
            if (zs(_r40) && (void 0 === _s33 || !Jr(_s33))) continue;
          }
          n.append(_r40);
        } else (e.append(_r40), (n = null));
      }
      return e;
    }
    function qr(t, e, n, o, r) {
      if (r === void 0) {
        r = "decorators-and-blocks";
      }
      if ("move" === e && "character" === o && !t.isCollapsed()) {
        var _ref36 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e108 = _ref36[0],
          _o58 = _ref36[1];
        return (_o58.set(_e108.key, _e108.offset, _e108.type), !0);
      }
      var s = _a(t.focus, n ? "previous" : "next"),
        i = "lineboundary" === o,
        l = "move" === e;
      var c = s,
        a = "decorators-and-blocks" === r;
      if (!ka(c)) {
        for (var _t177 of c) {
          a = !1;
          var _e109 = _t177.origin;
          if (
            !As(_e109) ||
            _e109.isIsolated() ||
            ((c = _t177), !i || !_e109.isInline())
          )
            break;
        }
        if (a)
          for (var _t178 of ia(s).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (jc(_t178)) _t178.origin.isInline() || (c = _t178);
            else {
              if (Os(_t178.origin)) continue;
              As(_t178.origin) && !_t178.origin.isInline() && (c = _t178);
            }
            break;
          }
      }
      if (c === s) return !1;
      if (l && !i && As(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t179 = wr();
        return (_t179.add(c.origin.getKey()), Ri(_t179), !0);
      }
      return ((c = va(c)), l && pa(t.anchor, c), pa(t.focus, c), a || !i);
    }
    var Xr = null,
      Qr = null,
      Zr = !1,
      ts = !1,
      es = !1;
    var ns = new Set();
    var os = 0;
    var rs = { characterData: !0, childList: !0, subtree: !0 };
    function ss() {
      return Zr || (null !== Xr && Xr._readOnly);
    }
    function is() {
      Zr && t(13);
    }
    function ls() {
      os > 99 && t(14);
    }
    function cs() {
      return (null === Xr && t(195, fs()), Xr);
    }
    function as() {
      return (null === Qr && t(337, fs()), Qr);
    }
    function us() {
      as()._dirtyType = 2;
    }
    function fs() {
      var t = 0;
      var e = new Set(),
        n = _ni.version;
      if ("undefined" != typeof window)
        for (var _o59 of Nl(document)) {
          var _r41 = _i(_o59);
          if (hi(_r41)) t++;
          else if (_r41) {
            var _t180 = String(_r41.constructor.version || "<0.17.1");
            (_t180 === n &&
              (_t180 +=
                " (separately built, likely a bundler configuration issue)"),
              e.add(_t180));
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
    function ds() {
      return Qr;
    }
    function hs(t, e, n) {
      var o = e.__type,
        r = li(t, o);
      var s = n.get(o);
      void 0 === s && ((s = Array.from(r.transforms)), n.set(o, s));
      var i = s.length;
      for (var _t181 = 0; _t181 < i && (s[_t181](e), e.isAttached()); _t181++);
    }
    function gs(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function _s(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var o = e;
      Array.isArray(e) || (o = [e]);
      for (var _t182 of o) n.add(_t182);
    }
    function ps(e, n) {
      var o = e.type,
        r = n.get(o);
      void 0 === r && t(17, o);
      var s = r.klass;
      e.type !== s.getType() && t(18, s.name);
      var i = s.importJSON(e),
        l = e.children;
      if (Os(i) && Array.isArray(l))
        for (var _t183 = 0; _t183 < l.length; _t183++) {
          var _e110 = ps(l[_t183], n);
          i.append(_e110);
        }
      var c = e.$slots;
      if (c) {
        _c(i) || t(379, s.name);
        for (var _t184 in c) {
          Ic(i, _t184, ps(c[_t184], n));
        }
      }
      return i;
    }
    function ms(t, e, n) {
      var o = Xr,
        r = Zr,
        s = Qr;
      ((Xr = e), (Zr = !0), (Qr = t));
      try {
        return n();
      } finally {
        ((Xr = o), (Zr = r), (Qr = s));
      }
    }
    function ys(t, e) {
      var n = es;
      es = !0;
      try {
        !(function (t, e) {
          var n = t._pendingEditorState,
            o = t._rootElement,
            r = t._headless || null === o;
          if (null === n)
            return void (
              !t._updating &&
              t._deferred.length > 0 &&
              Ss(t, t._deferred)
            );
          var s = t._editorState,
            i = s._selection,
            l = n._selection,
            c = 0 !== t._dirtyType,
            a = Xr,
            u = Zr,
            f = Qr,
            d = t._updating,
            h = t._observer;
          var g = null;
          if (
            ((t._pendingEditorState = null),
            (t._editorState = n),
            !r && c && null !== h)
          ) {
            ((Qr = t), (Xr = n), (Zr = !1), (t._updating = !0));
            try {
              var _e111 = t._dirtyType,
                _o60 = t._dirtyElements,
                _r42 = t._dirtyLeaves;
              (h.disconnect(), (g = Ee(s, n, t, _e111, _o60, _r42)));
            } catch (e) {
              if ((e instanceof Error && t._onError(e), ts)) throw e;
              return (
                Xs(t, null, o, n),
                at(t),
                (t._dirtyType = 2),
                (ts = !0),
                ys(t, s),
                void (ts = !1)
              );
            } finally {
              (h.observe(o, rs),
                (t._updating = d),
                (Xr = a),
                (Zr = u),
                (Qr = f));
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
              for (s in o) r.has(s) || (o === n && (o = Ii(t)), delete o[s]);
            })(t, n));
          var x = r ? null : yl(ll(t));
          if (
            t._editable &&
            null !== x &&
            (c || null === l || l.dirty || !l.is(i)) &&
            null !== o &&
            !y.has(ko)
          ) {
            ((Qr = t), (Xr = n));
            try {
              if ((null !== h && h.disconnect(), c || null === l || l.dirty)) {
                var _e112 = t._blockCursorElement;
                (null !== _e112 && ml(_e112, t, o), Wr(i, l, t, x, y, o));
              }
              !(function (t, e, n) {
                var o = t._blockCursorElement;
                if (
                  ar(n) &&
                  n.isCollapsed() &&
                  "element" === n.anchor.type &&
                  e.contains(wl(e))
                ) {
                  var _r43 = n.anchor,
                    _s34 = _r43.getNode(),
                    _i21 = _r43.offset;
                  var _l13 = !1,
                    _c1 = null;
                  if (_i21 === _s34.getChildrenSize()) {
                    pl(_s34.getChildAtIndex(_i21 - 1)) && (_l13 = !0);
                  } else {
                    var _e113 = _s34.getChildAtIndex(_i21);
                    null !== _e113 &&
                      pl(_e113) &&
                      ((_l13 = !0), (_c1 = t.getElementByKey(_e113.__key)));
                  }
                  if (_l13) {
                    var _n87 = Yl(
                      _s34,
                      t.getElementByKey(_s34.__key),
                      t,
                    ).element;
                    return (
                      null === o &&
                        (t._blockCursorElement = o =
                          (function (t) {
                            var e = t.theme,
                              n = kl().createElement("div");
                            ((n.contentEditable = "false"),
                              n.setAttribute("data-lexical-cursor", "true"));
                            var o = e.blockCursor;
                            if (void 0 !== o) {
                              var _n$classList;
                              if ("string" == typeof o) {
                                var _t185 = wa(o);
                                o = e.blockCursor = _t185;
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
                null !== o && ml(o, t, e);
              })(t, o, l);
            } finally {
              (null !== h && h.observe(o, rs), (Qr = f), (Xr = a));
            }
          }
          null !== g &&
            (function (t, e, n, o, r) {
              var s = Array.from(t._listeners.mutation),
                i = s.length;
              for (var _t186 = 0; _t186 < i; _t186++) {
                var _s$_t = s[_t186],
                  _i22 = _s$_t[0],
                  _l14 = _s$_t[1];
                for (var _t187 of _l14) {
                  var _s35 = e.get(_t187);
                  void 0 !== _s35 &&
                    _i22(_s35, {
                      dirtyLeaves: o,
                      prevEditorState: r,
                      updateTags: n,
                    });
                }
              }
            })(t, g, y, _, s);
          ar(l) ||
            null === l ||
            (null !== i && i.is(l)) ||
            t.dispatchCommand(Me);
          var C = t._pendingDecorators;
          null !== C &&
            ((t._decorators = C),
            (t._pendingDecorators = null),
            xs("decorator", t, !0, C));
          if (
            ((function (t, e, n) {
              var o = Pi(e),
                r = Pi(n);
              o !== r && xs("textcontent", t, !0, r);
            })(t, e || s, n),
            xs("update", t, !0, {
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
            Ss(t, t._deferred);
          }
          !(function (t) {
            var e = t._updates;
            if (0 === e.length) return void (t._cascadeCount = 0);
            if (
              ((function (t) {
                if (ns.has(t)) return;
                (ns.add(t),
                  setTimeout(function () {
                    (ns["delete"](t), (t._cascadeCount = 0));
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
              var _e114 = n[0],
                _o61 = n[1];
              Ns(t, _e114, _o61);
            }
          })(t);
        })(t, e);
      } finally {
        es = n;
      }
    }
    function xs(t, e, n) {
      var r = e._updating;
      e._updating = n;
      try {
        var _n88 = e._listeners[t],
          _r44 = Array.from(_n88);
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
          var _t188 = _ref38[0];
          var _e115 = _ref38[1];
          {
            _e115 && _e115();
            var _r45 = _t188.apply(void 0, o),
              _s36 = "function" == typeof _r45 ? _r45 : void 0;
            _n88.has(_t188) ? _n88.set(_t188, _s36) : _s36 && _s36();
          }
        }
      } finally {
        e._updating = r;
      }
    }
    function Cs(t, e, n, o) {
      var r = $i(t);
      var s;
      if (!es)
        for (var _t189 = 0; _t189 < r.length; _t189++)
          r[_t189]._updating || (r[_t189]._cascadeCount = 0);
      for (var _t190 = 4; _t190 >= 0; _t190--) {
        var _loop2 = function _loop2() {
            var l = r[_i23];
            if (_i23 > 0 && l._updating) {
              s = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e116 = c[_t190];
              if (_e116.size > 0) {
                var _t191 = !1;
                if (
                  (vs(l, function () {
                    for (var _r46 of _e116)
                      if (_r46(n, o)) return void (_t191 = !0);
                  }),
                  _t191)
                )
                  return { v: _t191 };
              }
            }
          },
          _ret;
        for (var _i23 = 0; _i23 < r.length; _i23++) {
          _ret = _loop2();
          if (_ret === 0) break;
          if (_ret) return _ret.v;
        }
      }
      return (
        s &&
          s.update(function () {
            Cs(s, e, n, o);
          }),
        !1
      );
    }
    function Ss(t, e) {
      if (((t._deferred = []), 0 !== e.length)) {
        var _n89 = t._updating;
        t._updating = !0;
        try {
          for (var _t192 = 0; _t192 < e.length; _t192++) e[_t192]();
        } finally {
          t._updating = _n89;
        }
      }
    }
    function Ts(e, n) {
      var o = e._updates;
      var r = n || !1;
      for (; 0 !== o.length; ) {
        var _n90 = o.shift();
        if (_n90) {
          var _o62 = _n90[0],
            _s37 = _n90[1],
            _i24 = e._pendingEditorState;
          var _l15 = void 0;
          (void 0 !== _s37 &&
            ((_l15 = _s37.onUpdate),
            _s37.skipTransforms && (r = !0),
            _s37.discrete && (null === _i24 && t(191), (_i24._flushSync = !0)),
            _l15 && e._deferred.push(_l15),
            _s(e, _s37.tag)),
            null == _i24 ? Ns(e, _o62, _s37) : _o62());
        }
      }
      return r;
    }
    function Ns(e, n, o) {
      var r = e._updateTags;
      var s,
        i = !1,
        l = !1;
      (void 0 !== o &&
        ((s = o.onUpdate),
        _s(e, o.tag),
        (i = o.skipTransforms || !1),
        (l = o.discrete || !1)),
        s && e._deferred.push(s));
      var c = e._editorState;
      var a = e._pendingEditorState,
        u = !1;
      ((null === a || a._readOnly) &&
        ((a = e._pendingEditorState = Is(a || c)), (u = !0)),
        (a._flushSync = l));
      var f = Xr,
        d = Zr,
        h = Qr,
        g = e._updating;
      ((Xr = a), (Zr = !1), (e._updating = !0), (Qr = e));
      var _ = e._headless || null === e.getRootElement();
      ri(null);
      try {
        u &&
          (_
            ? null !== c._selection && (a._selection = c._selection.clone())
            : (a._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  o = yl(ll(t));
                return ar(n) || null == n ? Ir(n, o, t, e) : n.clone();
              })(e, (o && o.event) || null)));
        var _r47 = e._compositionKey;
        (n(),
          (i = Ts(e, i)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              o = t._selection;
            if (ar(o)) {
              var _t193 = o.anchor,
                _e117 = o.focus;
              var _r48;
              if (
                ("text" === _t193.type &&
                  ((_r48 = _t193.getNode()), _r48.selectionTransform(n, o)),
                "text" === _e117.type)
              ) {
                var _t194 = _e117.getNode();
                _r48 !== _t194 && _t194.selectionTransform(n, o);
              }
            }
          })(a, e),
          0 !== e._dirtyType &&
            (i
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = t._nodeMap;
                  for (var _t195 of n) {
                    var _e118 = o.get(_t195);
                    qo(_e118) &&
                      _e118.isAttached() &&
                      _e118.isSimpleText() &&
                      !_e118.isUnmergeable() &&
                      Et(_e118);
                  }
                })(a, e)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = e._dirtyElements,
                    r = t._nodeMap,
                    s = Oi(),
                    i = new Map();
                  var l = n,
                    c = l.size,
                    a = o,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t196 of l) {
                        var _o63 = r.get(_t196);
                        (qo(_o63) &&
                          _o63.isAttached() &&
                          _o63.isSimpleText() &&
                          !_o63.isUnmergeable() &&
                          Et(_o63),
                          void 0 !== _o63 && gs(_o63, s) && hs(e, _o63, i),
                          n.add(_t196));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        os++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t197 of a) {
                      var _n91 = _t197[0],
                        _l16 = _t197[1];
                      if ((o.set(_n91, _l16), !_l16)) continue;
                      var _c10 = r.get(_n91);
                      void 0 !== _c10 && gs(_c10, s) && hs(e, _c10, i);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      os++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = o));
                })(a, e),
            Ts(e),
            (function (t, e, n, o) {
              var r = t._nodeMap,
                s = e._nodeMap,
                i = [];
              for (var _ref40 of o) {
                var _t198 = _ref40[0];
                {
                  var _e119 = s.get(_t198);
                  void 0 !== _e119 &&
                    (_e119.isAttached() ||
                      (Os(_e119) && Z(_e119, _t198, r, s, i, o),
                      r.has(_t198) || o["delete"](_t198),
                      i.push(_t198)));
                }
              }
              for (var _t199 of n) {
                var _e120 = s.get(_t199);
                void 0 === _e120 ||
                  _e120.isAttached() ||
                  (_c(_e120) &&
                    null !== _e120.__slots &&
                    Z(_e120, _t199, r, s, i, n),
                  r.has(_t199) || n["delete"](_t199),
                  i.push(_t199));
              }
              for (var _t200 of i) s["delete"](_t200);
              var l = as(),
                c = l._compositionKey;
              null === c || s.has(c) || (l._compositionKey = null);
            })(c, a, e._dirtyLeaves, e._dirtyElements)));
        _r47 !== e._compositionKey && (a._flushSync = !0);
        var _s38 = a._selection;
        if (ar(_s38)) {
          e._slotsUsed && Or(_s38);
          var _n92 = a._nodeMap,
            _o64 = _s38.anchor.key,
            _r49 = _s38.focus.key;
          (void 0 !== _n92.get(_o64) && void 0 !== _n92.get(_r49)) || t(19);
        } else fr(_s38) && 0 === _s38._nodes.size && (a._selection = null);
      } catch (t) {
        return (
          t instanceof Error && e._onError(t),
          (e._pendingEditorState = c),
          (e._dirtyType = 2),
          e._cloneNotNeeded.clear(),
          (e._dirtyLeaves = new Set()),
          e._dirtyElements.clear(),
          void ys(e)
        );
      } finally {
        ((Xr = f), (Zr = d), (Qr = h), (e._updating = g), (os = 0));
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
          ? ((a._flushSync = !1), ys(e))
          : u &&
            ai(function () {
              ys(e);
            })
        : ((a._flushSync = !1),
          u && (r.clear(), (e._deferred = []), (e._pendingEditorState = null)));
    }
    function vs(t, e, n) {
      Qr === t && void 0 === n ? (ss() ? Ns(t, e, n) : e()) : Ns(t, e, n);
    }
    function ks(t) {
      if (fl(t)) {
        var _e121 = null;
        for (var _n93 of t.getChildren())
          _e121 = _n93.isInline()
            ? (_e121 || _n93.replace(_n93.createParentElementNode())).append(
                _n93,
              )
            : null;
      }
    }
    var _Es4 = (function (_Co2) {
      function Es(t) {
        var _this3;
        ((_this3 = _Co2.call(this, t) || this),
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
      babelHelpers.inheritsLoose(Es, _Co2);
      var _proto11 = Es.prototype;
      _proto11.$config = function $config() {
        return this.config(Symbol["for"]("ElementNode"), {
          $transform: ks,
          extends: _Co5,
        });
      };
      _proto11.afterCloneFrom = function afterCloneFrom(e) {
        (_Co2.prototype.afterCloneFrom.call(this, e),
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
        return 0 === this.getChildrenSize() && 0 === Tc(this).length;
      };
      _proto11.isDirty = function isDirty() {
        var t = as()._dirtyElements;
        return null !== t && t.has(this.__key);
      };
      _proto11.isLastChild = function isLastChild() {
        var t = this.getLatest(),
          e = this.getParentOrThrow().getLastChild();
        return null !== e && e.is(t);
      };
      _proto11.getAllTextNodes = function getAllTextNodes() {
        var t = [];
        for (var _e122 of Tc(this)) {
          var _n94 = Nc(this, _e122);
          Os(_n94) && t.push.apply(t, _n94.getAllTextNodes());
        }
        var e = this.getFirstChild();
        for (; null !== e; ) {
          if ((qo(e) && t.push(e), Os(e))) {
            var _n95 = e.getAllTextNodes();
            t.push.apply(t, _n95);
          }
          e = e.getNextSibling();
        }
        return t;
      };
      _proto11.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; Os(t); ) {
          var _e123 = t.getFirstChild();
          if (null === _e123) break;
          t = _e123;
        }
        return t;
      };
      _proto11.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; Os(t); ) {
          var _e124 = t.getLastChild();
          if (null === _e124) break;
          t = _e124;
        }
        return t;
      };
      _proto11.getDescendantByIndex = function getDescendantByIndex(t) {
        var e = this.getChildren(),
          n = e.length;
        if (t >= n) {
          var _t201 = e[n - 1];
          return (Os(_t201) && _t201.getLastDescendant()) || _t201 || null;
        }
        var o = e[t];
        return (Os(o) && o.getFirstDescendant()) || o || null;
      };
      _proto11.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : bi(t);
      };
      _proto11.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var e = this.getFirstChild();
        return (null === e && t(45, this.__key), e);
      };
      _proto11.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : bi(t);
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
        var t = Ac(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o65 = 0; _o65 < n; _o65++) {
          var _r50 = e[_o65];
          ((t += _r50.getTextContent()),
            Os(_r50) && _o65 !== n - 1 && !_r50.isInline() && (t += v));
        }
        return t;
      };
      _proto11.getTextContentSize = function getTextContentSize() {
        var t = (function (t) {
          var e = 0;
          for (var _n96 of Tc(t)) {
            var _o66 = Nc(t, _n96);
            null !== _o66 && (e += _o66.getTextContentSize());
          }
          return e;
        })(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o67 = 0; _o67 < n; _o67++) {
          var _r51 = e[_o67];
          ((t += _r51.getTextContentSize()),
            Os(_r51) && _o67 !== n - 1 && !_r51.isInline() && (t += 2));
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
          var _e125 = w[t];
          return 0 !== (this.getFormat() & _e125);
        }
        return !1;
      };
      _proto11.hasTextFormat = function hasTextFormat(t) {
        var e = A[t];
        return 0 !== (this.getTextFormat() & e);
      };
      _proto11.getFormatFlags = function getFormatFlags(t, e) {
        return Si(this.getLatest().__textFormat, t, e);
      };
      _proto11.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto11.select = function select(t, e) {
        is();
        var n = Pr();
        var o = t,
          r = e;
        var s = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t202 = this.getFirstChild();
            if (qo(_t202) || Os(_t202)) return _t202.select(0, 0);
          } else if (
            !((void 0 !== t && t !== s) || (void 0 !== e && e !== s))
          ) {
            var _t203 = this.getLastChild();
            if (qo(_t203) || Os(_t203)) return _t203.select();
          }
        (void 0 === o && (o = s), void 0 === r && (r = s));
        var i = this.__key;
        return ar(n)
          ? (n.anchor.set(i, o, "element"),
            n.focus.set(i, r, "element"),
            (n.dirty = !0),
            n)
          : Ar(i, o, i, r, "element", "element");
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
        yo(this) && t(324, this.__key, this.__type);
        var r = this.getChildrenSize(),
          s = this.getWritable();
        e + n <= r || t(226, String(e), String(n), String(r));
        for (var _t204 of o);
        var i = s.__key,
          l = [],
          c = [];
        var a = this.getChildAtIndex(e + n),
          u = null,
          f = r - n + o.length;
        if (0 !== e)
          if (e === r) u = this.getLastChild();
          else {
            var _t205 = this.getChildAtIndex(e);
            null !== _t205 && (u = _t205.getPreviousSibling());
          }
        if (n > 0) {
          var _e126 = null === u ? this.getFirstChild() : u.getNextSibling();
          for (var _o68 = 0; _o68 < n; _o68++) {
            null === _e126 && t(100);
            var _n97 = _e126.getNextSibling(),
              _o69 = _e126.__key;
            (Ni(_e126.getWritable()), c.push(_o69), (_e126 = _n97));
          }
        }
        var d = u;
        for (var _e127 of o) {
          (null !== d && _e127.is(d) && (u = d = d.getPreviousSibling()),
            null !== a && _e127.is(a) && (a = a.getNextSibling()));
          var _n98 = _e127.getWritable();
          (_n98.__parent === i && f--, Ni(_n98));
          var _o70 = _e127.__key;
          if (null === d) ((s.__first = _o70), (_n98.__prev = null));
          else {
            var _t206 = d.getWritable();
            ((_t206.__next = _o70), (_n98.__prev = _t206.__key));
          }
          (_e127.__key === i && t(76),
            (_n98.__parent = i),
            l.push(_o70),
            (d = _e127));
        }
        if (null === a) {
          if (null !== d) {
            ((d.getWritable().__next = null), (s.__last = d.__key));
          }
        } else {
          var _t207 = a.getWritable();
          if (null !== d) {
            var _e128 = d.getWritable();
            ((_t207.__prev = d.__key), (_e128.__next = a.__key));
          } else _t207.__prev = null;
        }
        if (((s.__size = f), c.length)) {
          var _t208 = Pr();
          if (ar(_t208)) {
            var _e129 = new Set(c),
              _n99 = new Set(l),
              _o71 = _t208.anchor,
              _r52 = _t208.focus;
            (bs(_o71, _e129, _n99) && Kr(_o71, _o71.getNode(), this, u, a),
              bs(_r52, _e129, _n99) && Kr(_r52, _r52.getNode(), this, u, a),
              0 !== f || this.canBeEmpty() || fl(this) || this.remove());
          }
        }
        return s;
      };
      _proto11.getDOMSlot = function getDOMSlot(t) {
        return new _Y(t);
      };
      _proto11.exportDOM = function exportDOM(t) {
        var _Co2$prototype$export = _Co2.prototype.exportDOM.call(this, t),
          e = _Co2$prototype$export.element;
        if (Fl(e)) {
          var _t209 = this.getIndent();
          _t209 > 0 &&
            ((e.style.paddingInlineStart = 40 * _t209 + "px"),
            e.setAttribute("data-lexical-indent", String(_t209)));
          var _n100 = this.getDirection();
          _n100 && (e.dir = _n100);
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
            _Co2.prototype.exportJSON.call(this),
          ),
          e = this.getTextFormat(),
          n = this.getTextStyle();
        return (
          (0 === e && "" === n) ||
            fl(this) ||
            this.getChildren().some(qo) ||
            (0 !== e && (t.textFormat = e), "" !== n && (t.textStyle = n)),
          t
        );
      };
      _proto11.updateFromJSON = function updateFromJSON(t) {
        return _Co2.prototype.updateFromJSON
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
        var n = Yl(this, t, e);
        var o = n.getFirstChild();
        for (
          var _t210 = this.getFirstChild();
          _t210;
          _t210 = _t210.getNextSibling()
        ) {
          var _r53 = e.getElementByKey(_t210.getKey());
          null !== _r53 &&
            (null == o
              ? (n.insertChild(_r53), (o = _r53))
              : o !== _r53 && n.replaceChild(_r53, o),
            (o = o.nextSibling));
        }
      };
      return Es;
    })(_Co5);
    function Os(t) {
      return t instanceof _Es4;
    }
    function bs(t, e, n) {
      var o = t.getNode();
      for (; o; ) {
        var _t211 = o.__key;
        if (e.has(_t211) && !n.has(_t211)) return !0;
        o = o.getParent();
      }
      return !1;
    }
    var _Ms = (function (_Co3) {
      function Ms(t) {
        var _this4;
        ((_this4 = _Co3.call(this, t) || this),
          (_this4.__slotHost = null),
          (_this4.__slots = null));
        return _this4;
      }
      babelHelpers.inheritsLoose(Ms, _Co3);
      var _proto12 = Ms.prototype;
      _proto12.afterCloneFrom = function afterCloneFrom(e) {
        (_Co3.prototype.afterCloneFrom.call(this, e),
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
      return Ms;
    })(_Co5);
    function As(t) {
      return t instanceof _Ms;
    }
    var _Ds = (function (_Es) {
      function Ds() {
        var _this5;
        ((_this5 = _Es.call(this, "root") || this),
          (_this5.__cachedText = null));
        return _this5;
      }
      babelHelpers.inheritsLoose(Ds, _Es);
      var _proto13 = Ds.prototype;
      _proto13.$config = function $config() {
        return this.config("root", { extends: _Es4 });
      };
      _proto13.getTopLevelElementOrThrow =
        function getTopLevelElementOrThrow() {
          t(51);
        };
      _proto13.getTextContent = function getTextContent() {
        var t = this.__cachedText;
        return null === t || (!ss() && 0 !== as()._dirtyType)
          ? _Es.prototype.getTextContent.call(this)
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
        for (var _e130 of o) Os(_e130) || As(_e130) || t(282);
        return _Es.prototype.splice.call(this, e, n, o);
      };
      Ds.importJSON = function importJSON(t) {
        return Fi().updateFromJSON(t);
      };
      _proto13.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return Ds;
    })(_Es4);
    function ws(t) {
      return t instanceof _Ds;
    }
    function Is(t) {
      return new _Rs(X(t._nodeMap), null, t._slotsUsed);
    }
    function Ps() {
      return new _Rs(new Map([["root", new _Ds()]]), null, !1);
    }
    function Fs(e) {
      var n = e.exportJSON(),
        o = e.constructor;
      if ((n.type !== o.getType() && t(130, o.name), Os(e))) {
        var _r54 = n.children;
        Array.isArray(_r54) || t(59, o.name);
        var _s39 = e.getChildren();
        for (var _t212 = 0; _t212 < _s39.length; _t212++) {
          var _e131 = Fs(_s39[_t212]);
          _r54.push(_e131);
        }
      }
      var r = Tc(e);
      if (r.length > 0) {
        var _s40 = {};
        for (var _n101 of r) {
          var _r55 = Nc(e, _n101);
          (null === _r55 && t(366, o.name, _n101), (_s40[_n101] = Fs(_r55)));
        }
        n.$slots = _s40;
      }
      return n;
    }
    var _Rs = (function () {
      function Rs(t, e, n) {
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
      var _proto14 = Rs.prototype;
      _proto14.isEmpty = function isEmpty() {
        return 1 === this._nodeMap.size && null === this._selection;
      };
      _proto14.read = function read(t, e) {
        return ms((e && e.editor) || null, this, t);
      };
      _proto14.clone = function clone(t) {
        var e = new Rs(
          this._nodeMap,
          void 0 === t ? this._selection : t,
          this._slotsUsed,
        );
        return ((e._readOnly = !0), (e._parsed = this._parsed), e);
      };
      _proto14.toJSON = function toJSON() {
        return ms(null, this, function () {
          return { root: Fs(Fi()) };
        });
      };
      return Rs;
    })();
    var _Ls = (function (_Es2) {
      function Ls() {
        return _Es2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Ls, _Es2);
      var _proto15 = Ls.prototype;
      _proto15.$config = function $config() {
        return this.config("artificial", { extends: _Es4 });
      };
      _proto15.createDOM = function createDOM(t) {
        return kl().createElement("div");
      };
      return Ls;
    })(_Es4);
    var _Ks = (function (_Co4) {
      function Ks() {
        return _Co4.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Ks, _Co4);
      var _proto16 = Ks.prototype;
      _proto16.$config = function $config() {
        return this.config("linebreak", {
          importDOM: {
            br: function br(t) {
              return Ws(t) || Us(t) ? null : { conversion: Bs, priority: 0 };
            },
          },
        });
      };
      _proto16.getTextContent = function getTextContent() {
        return "\n";
      };
      _proto16.createDOM = function createDOM() {
        return kl().createElement("br");
      };
      _proto16.updateDOM = function updateDOM() {
        return !1;
      };
      _proto16.isInline = function isInline() {
        return !0;
      };
      return Ks;
    })(_Co5);
    function Bs(t) {
      return { node: $s() };
    }
    function $s() {
      return hl(new _Ks());
    }
    function zs(t) {
      return t instanceof _Ks;
    }
    function Ws(t) {
      var e = t.parentElement;
      if (null !== e && zl(e)) {
        var _n102 = e.firstChild;
        if (_n102 === t || (_n102.nextSibling === t && Hs(_n102))) {
          var _n103 = e.lastChild;
          if (_n103 === t || (_n103.previousSibling === t && Hs(_n103)))
            return !0;
        }
      }
      return !1;
    }
    function Us(t) {
      var e = t.parentElement;
      if (null !== e && zl(e)) {
        var _n104 = e.firstChild;
        if (_n104 === t || (_n104.nextSibling === t && Hs(_n104))) return !1;
        var _o72 = e.lastChild;
        if (_o72 === t || (_o72.previousSibling === t && Hs(_o72))) return !0;
      }
      return !1;
    }
    function Hs(t) {
      return yi(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    var _Ys = (function (_Es3) {
      function Ys() {
        return _Es3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Ys, _Es3);
      var _proto17 = Ys.prototype;
      _proto17.$config = function $config() {
        return this.config("paragraph", {
          extends: _Es4,
          importDOM: {
            p: function p() {
              return { conversion: js, priority: 0 };
            },
          },
        });
      };
      _proto17.createDOM = function createDOM(t) {
        var e = kl().createElement("p"),
          n = Ji(t.theme, "paragraph");
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
        var _Es3$prototype$export = _Es3.prototype.exportDOM.call(this, t),
          e = _Es3$prototype$export.element;
        if (Fl(e)) {
          this.isEmpty() && e.append(kl().createElement("br"));
          var _t213 = this.getFormatType();
          _t213 && (e.style.textAlign = _t213);
        }
        return { element: e };
      };
      _proto17.exportJSON = function exportJSON() {
        var t = _Es3.prototype.exportJSON.call(this);
        if (void 0 === t.textFormat || void 0 === t.textStyle) {
          var _e132 = this.getChildren().find(qo);
          _e132
            ? ((t.textFormat = _e132.getFormat()),
              (t.textStyle = _e132.getStyle()))
            : ((t.textFormat = this.getTextFormat()),
              (t.textStyle = this.getTextStyle()));
        }
        return t;
      };
      _proto17.insertNewAfter = function insertNewAfter(t, e) {
        var n = Gs();
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
        var t = this.getChildren();
        if (
          0 === t.length ||
          (qo(t[0]) && "" === t[0].getTextContent().trim())
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return Ys;
    })(_Es4);
    function js(t) {
      var e = Gs();
      if ((tc(e, t), Ql(t, e), "" === e.getFormatType())) {
        var _n105 = t.getAttribute("align");
        _n105 && _n105 && _n105 in w && e.setFormat(_n105);
      }
      return (Zl(e, t), { node: e });
    }
    function Gs() {
      return hl(new _Ys());
    }
    function Js(t) {
      return t instanceof _Ys;
    }
    function Vs(t) {
      console.warn(t);
    }
    var qs = 0;
    function Xs(t, e, n, o, r) {
      var s = t._keyToDOMMap;
      (s.clear(),
        (t._editorState = Ps()),
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
          ((n.textContent = ""), s.set("root", n), Ai(n, t, "root")));
    }
    function Qs(t) {
      var e = new Set(),
        n = new Set();
      for (var _ref42 of ac(t)) {
        var _o73 = _ref42.klass;
        var _r56 = _ref42.ownNodeConfig;
        {
          var _t214 = _o73.transform;
          if (!n.has(_t214)) {
            n.add(_t214);
            var _r57 = _o73.transform();
            _r57 && e.add(_r57);
          }
          if (_r56) {
            var _t215 = _r56.$transform;
            _t215 && e.add(_t215);
          }
        }
      }
      return e;
    }
    var Zs = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, o) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = ci(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, o, r) {
        return Os(t) && t.extractWithChild(e, n, o);
      },
      $getDOMSlot: function $getDOMSlot(t, e, n) {
        return t.getDOMSlot(e);
      },
      $getSlotTargetElement: function $getSlotTargetElement(t, e, n, o) {
        return null;
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return Os(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, o) {
        return t.updateDOM(e, n, o._config);
      },
    };
    function ti(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function ei(t, e, n) {
      return (t.set(e, n), ti.bind(null, t, e));
    }
    var _ni = (function () {
      function ni(t, e, n, o, r, s, i, l, c) {
        ((this._createEditorArgs = c),
          (this._parentEditor = e),
          (this._rootElement = null),
          (this._editorState = t),
          (this._pendingEditorState = null),
          (this._compositionKey = null),
          (this._deferred = []),
          (this._keyToDOMMap = new _Q()),
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
          (this._key = zi()),
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
      var _proto18 = ni.prototype;
      _proto18.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto18.registerUpdateListener = function registerUpdateListener(t) {
        return ei(this._listeners.update, t);
      };
      _proto18.registerEditableListener = function registerEditableListener(t) {
        return ei(this._listeners.editable, t);
      };
      _proto18.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return ei(this._listeners.decorator, t);
      };
      _proto18.registerTextContentListener =
        function registerTextContentListener(t) {
          return ei(this._listeners.textcontent, t);
        };
      _proto18.registerRootListener = function registerRootListener(t) {
        var _this14 = this;
        var e = this._listeners.root;
        return Ia(ei(e, t, t(this._rootElement, null) || void 0), function () {
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
          r.set(e, [new _V(), new _V(), new _V(), new _V(), new _V()]);
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
          o = ql(n).get(e.getType());
        if (!o) return;
        var r = new Map();
        for (var _t216 of o.keys()) r.set(_t216, "created");
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
          var _t217 = this.registerNodeTransformToKlass(r, e);
          o.push(_t217);
        }
        return (
          (function (t, e) {
            var n = ql(t.getEditorState()),
              o = [];
            for (var _t218 of e) {
              var _e133 = n.get(_t218);
              _e133 && o.push(_e133);
            }
            if (0 === o.length) return;
            t.update(
              function () {
                for (var _t219 of o)
                  for (var _e134 of _t219.keys()) {
                    var _t220 = bi(_e134);
                    _t220 && _t220.markDirty();
                  }
              },
              null === t._pendingEditorState ? { tag: To } : void 0,
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
        return Zi.apply(void 0, [this, t].concat(e));
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
          var _n106 = Ji(this._config.theme, "root"),
            _o74 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            Xs(this, e, t, _o74, { preserveUpdateQueue: !0 }),
            null !== e &&
              (this._config.disableEvents || _o(e),
              null != _n106 &&
                (_e$classList3 = e.classList).remove.apply(
                  _e$classList3,
                  _n106,
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e135 = il(t),
              _o75 = t.style;
            ((_o75.userSelect = "text"),
              (_o75.whiteSpace = "pre-wrap"),
              (_o75.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e135),
              (this._dirtyType = 2),
              at(this),
              this._updateTags.add(To),
              ys(this),
              this._config.disableEvents ||
                (function (t, e) {
                  var n = t.ownerDocument;
                  Ln.set(t, n);
                  var o = Kn.get(n);
                  (void 0 === o &&
                    ((o = { editors: new Set(), hasShadowEditor: void 0 }),
                    Kn.set(n, o)),
                    o.editors.add(e),
                    (o.hasShadowEditor = void 0),
                    (t.__lexicalEditor = e));
                  var r = co(t);
                  r.push(Bn.register(n));
                  var _loop3 = function _loop3() {
                    var _Rn$_n = Rn[_n107],
                      o = _Rn$_n[0],
                      s = _Rn$_n[1],
                      i =
                        "function" == typeof s
                          ? function (t) {
                              ho(t) ||
                                (fo(t),
                                (e.isEditable() || "click" === o) && s(t, e));
                            }
                          : function (t) {
                              if (ho(t)) return;
                              fo(t);
                              var n = e.isEditable();
                              switch (o) {
                                case "cut":
                                  return n && Zi(e, mn, t);
                                case "copy":
                                  return Zi(e, pn, t);
                                case "paste":
                                  return n && Zi(e, $e, t);
                                case "dragstart":
                                  return n && Zi(e, hn, t);
                                case "dragover":
                                  return n && Zi(e, gn, t);
                                case "dragend":
                                  return n && Zi(e, _n, t);
                                case "focus":
                                  return n && Zi(e, Nn, t);
                                case "blur":
                                  return n && Zi(e, vn, t);
                                case "drop":
                                  return n && Zi(e, fn, t);
                              }
                            };
                    r.push(Pn(t, o, i));
                  };
                  for (var _n107 = 0; _n107 < Rn.length; _n107++) {
                    _loop3();
                  }
                })(t, this),
              null != _n106 &&
                (_t$classList = t.classList).add.apply(_t$classList, _n106));
          } else ((this._window = null), this._updateTags.add(To), ys(this));
          xs("root", this, !1, t, e);
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
          ((o = Is(e)),
          (o._selection = e._selection ? e._selection.clone() : null)),
          ct(this));
        var r = this._pendingEditorState,
          s = void 0 !== n ? n.tag : null;
        (null === r ||
          r.isEmpty() ||
          (null != s && this._updateTags.add(s), ys(this)),
          (this._pendingEditorState = o),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          (this._slotsUsed = this._slotsUsed || e._slotsUsed),
          vs(
            this,
            function () {
              if ((s && _this15._updateTags.add(s), e._parsed))
                for (var _ref44 of o._nodeMap.entries()) {
                  var _t221 = _ref44[0];
                  var _e136 = _ref44[1];
                  Os(_e136)
                    ? _this15._dirtyElements.set(_t221, !0)
                    : _this15._dirtyLeaves.add(_t221);
                }
            },
            { discrete: !this._updating || void 0 },
          ));
      };
      _proto18.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var o = Ps(),
            r = Xr,
            s = Zr,
            i = Qr,
            l = e._dirtyElements,
            c = e._dirtyLeaves,
            a = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Set()),
            (e._dirtyType = 0),
            (Xr = o),
            (Zr = !1),
            (Qr = e),
            ri(null));
          try {
            var _r58 = e._nodes;
            (ps(t.root, _r58), n && n(), (o._readOnly = !0), (o._parsed = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = c),
              (e._cloneNotNeeded = a),
              (e._dirtyType = u),
              (Xr = r),
              (Zr = s),
              (Qr = i));
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
        var _ref45 = 1 === t.length ? ["force-commit", t[0]] : t,
          e = _ref45[0],
          n = _ref45[1];
        "force-commit" === e && ys(this);
        return (
          "pending" === e
            ? this._pendingEditorState || this._editorState
            : this.getEditorState()
        ).read(n, { editor: this });
      };
      _proto18.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : Ns(t, e, n);
        })(this, t, e);
      };
      _proto18.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          vs(this, function () {
            var o = Pr(),
              r = Fi();
            (null !== o
              ? o.dirty || Ri(o.clone())
              : 0 !== r.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? r.selectStart()
                  : r.selectEnd()),
              ol("focus"),
              rl(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto18.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = yl(this._window);
        null !== e && e.removeAllRanges();
      };
      _proto18.isEditable = function isEditable() {
        return this._editable;
      };
      _proto18.setEditable = function setEditable(t) {
        this._editable !== t &&
          ((this._editable = t),
          xs("editable", this, !0, t),
          this._slotsUsed &&
            this.update(function () {
              return us();
            }));
      };
      _proto18.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON() };
      };
      return ni;
    })();
    _ni.version = J;
    var oi = null;
    function ri(t) {
      oi = t;
    }
    var si = Symbol("INTERNAL_SKIP_AFTER_CLONE_FROM");
    var ii = 1;
    function li(e, n) {
      var o = ci(e, n);
      return (void 0 === o && t(30, n), o);
    }
    function ci(t, e) {
      return t._nodes.get(e);
    }
    var ai =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function ui(t, e) {
      var n =
        void 0 !== e
          ? e
          : (function () {
              var e = t.getRootNode();
              return xi(e) || Cl(e) ? Il(e) : null;
            })();
      if (!Fl(n)) return !1;
      if (n.hasAttribute("data-lexical-slot")) return !1;
      var o = wi(n),
        r = n.nodeName;
      return (
        So(o) &&
        ("INPUT" === r ||
          "TEXTAREA" === r ||
          ("true" === n.contentEditable && null == _i(n)))
      );
    }
    var fi = ui;
    function di(t, e, n) {
      var o = t.getRootElement();
      if (!o) return !1;
      try {
        if (!e || !o.contains(e) || !o.contains(n)) return !1;
      } catch (t) {
        return !1;
      }
      return (
        gi(e) === t &&
        t.read("latest", function () {
          return !ui(e);
        })
      );
    }
    function hi(t) {
      return t instanceof _ni;
    }
    function gi(t) {
      var e = t;
      for (; null != e; ) {
        var _t222 = _i(e);
        if (hi(_t222)) return _t222;
        e = el(e);
      }
      return null;
    }
    function _i(t) {
      return t ? t.__lexicalEditor : null;
    }
    function pi(t) {
      return tr(t) || t.isToken();
    }
    function mi(t) {
      return pi(t) || t.isSegmented();
    }
    function yi(t) {
      return Rl(t) && 3 === t.nodeType;
    }
    function xi(t) {
      return Rl(t) && 9 === t.nodeType;
    }
    function Ci(t) {
      var e = t;
      for (; null != e; ) {
        if (yi(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function Si(t, e, n) {
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
    function Ti(t, e) {
      var n = (function () {
        var t = oi;
        return ((oi = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (is(), ls());
      var o = as(),
        r = cs(),
        s = "" + ii++;
      (r._nodeMap.set(s, t),
        Os(t) ? o._dirtyElements.set(s, !0) : o._dirtyLeaves.add(s),
        o._cloneNotNeeded.add(s),
        0 === o._dirtyType && (o._dirtyType = 1),
        (t.__key = s));
    }
    function Ni(e) {
      null !== mc(e) && t(380, e.__key, String(mc(e)));
      var n = e.getParent();
      if (null !== n) {
        var _t223 = e.getWritable(),
          _o76 = n.getWritable(),
          _r59 = e.getPreviousSibling(),
          _s41 = e.getNextSibling(),
          _i25 = null !== _s41 ? _s41.__key : null,
          _l17 = null !== _r59 ? _r59.__key : null,
          _c11 = null !== _r59 ? _r59.getWritable() : null,
          _a1 = null !== _s41 ? _s41.getWritable() : null;
        (null === _r59 && (_o76.__first = _i25),
          null === _s41 && (_o76.__last = _l17),
          null !== _c11 && (_c11.__next = _i25),
          null !== _a1 && (_a1.__prev = _l17),
          (_t223.__prev = null),
          (_t223.__next = null),
          (_t223.__parent = null),
          _o76.__size--);
      }
    }
    var vi = Ni;
    function ki(e) {
      (ls(), yo(e) && t(323, e.__key, e.__type));
      var n = e.getLatest(),
        o = null !== n.__parent ? n.__parent : pc(n) ? n.__slotHost : null,
        r = cs(),
        s = as(),
        i = r._nodeMap,
        l = s._dirtyElements;
      null !== o &&
        (function (t, e, n) {
          var o = t;
          for (; null !== o; ) {
            if (n.has(o)) return;
            var _t224 = e.get(o);
            if (void 0 === _t224) break;
            (n.set(o, !1),
              (o =
                null !== _t224.__parent
                  ? _t224.__parent
                  : pc(_t224)
                    ? _t224.__slotHost
                    : null));
          }
        })(o, i, l);
      var c = n.__key;
      (0 === s._dirtyType && (s._dirtyType = 1),
        Os(e) ? l.set(c, !0) : s._dirtyLeaves.add(c));
    }
    function Ei(t) {
      is();
      var e = as(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t225 = bi(n);
          null !== _t225 && _t225.getWritable();
        }
        if (null !== t) {
          var _e137 = bi(t);
          null !== _e137 && _e137.getWritable();
        }
      }
    }
    function Oi() {
      if (ss()) return null;
      return as()._compositionKey;
    }
    function bi(t, e) {
      var n = (e || cs())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function Mi(t, e) {
      var n = Di(t, as());
      return void 0 !== n ? bi(n, e) : null;
    }
    function Ai(t, e, n) {
      t["__lexicalKey_" + e._key] = n;
    }
    function Di(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function wi(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t226 = Mi(n, e);
        if (null !== _t226) return _t226;
        n = el(n);
      }
      return null;
    }
    function Ii(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function Pi(t) {
      return t.read(function () {
        return Fi().getTextContent();
      });
    }
    function Fi() {
      return cs()._nodeMap.get("root");
    }
    function Ri(t) {
      is();
      var e = cs();
      (null !== t &&
        ((t.dirty = !0),
        t.setCachedNodes(null),
        ar(t) && as()._slotsUsed && Or(t)),
        (e._selection = t));
    }
    function Li() {
      is();
      ct(as());
    }
    function Ki(t) {
      var e = (function (t, e) {
        var n = t;
        for (; null != n; ) {
          var _t227 = Di(n, e);
          if (void 0 !== _t227) return _t227;
          n = el(n);
        }
        return null;
      })(t, as());
      return null === e ? null : bi(e);
    }
    function Bi(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function $i(t) {
      var e = [];
      for (var _n108 = t; null !== _n108; _n108 = _n108._parentEditor)
        e.push(_n108);
      return e;
    }
    function zi() {
      return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substring(0, 5);
    }
    function Wi(t) {
      return yi(t) ? t.nodeValue : null;
    }
    function Ui(t, e, n) {
      var o = yl(ll(e));
      if (null === o) return;
      var r = bl(o, e._rootElement),
        s = r.anchorNode;
      var i = r.anchorOffset,
        l = r.focusOffset;
      if (null !== s) {
        var _e138 = Wi(s);
        var _o77 = wi(s);
        if (null !== _e138 && qo(_o77)) {
          if ((_e138 === N || _e138 === k) && n) {
            var _t228 = n.length;
            ((_e138 = n), (i = _t228), (l = _t228));
          }
          null !== _e138 && Hi(_o77, _e138, i, l, t);
        }
      }
    }
    function Hi(t, e, n, o, r) {
      var s = t;
      if (s.isAttached() && (r || !s.isDirty())) {
        var _i26 = s.isComposing();
        if (s.isToken() && _i26) return;
        var _c12 = e;
        if (
          (_i26 || r) &&
          (e.endsWith(N) && (_c12 = e.slice(0, -N.length)), r)
        ) {
          var _t229 = k;
          var _e139;
          for (; -1 !== (_e139 = _c12.indexOf(_t229)); )
            ((_c12 = _c12.slice(0, _e139) + _c12.slice(_e139 + _t229.length)),
              null !== n &&
                n > _e139 &&
                (n = Math.max(_e139, n - _t229.length)),
              null !== o &&
                o > _e139 &&
                (o = Math.max(_e139, o - _t229.length)));
        }
        var _u10 = s.getTextContent();
        if (r || _c12 !== _u10) {
          var _e140 = Pr();
          if ("" === _c12) {
            if ((Ei(null), a || l || d)) s.remove();
            else {
              var _t230 = as();
              (Yi(s, "", _e140),
                setTimeout(function () {
                  _t230.update(function () {
                    s.isAttached() && "" === s.getTextContent() && s.remove();
                  });
                }, 20));
            }
            return;
          }
          var _r60 = s.getParent(),
            _u11 = Fr(),
            _f10 = s.getTextContentSize(),
            _h8 = Oi(),
            _g7 = s.getKey();
          if (
            (s.isToken() && !_i26) ||
            (null !== _h8 && _g7 === _h8 && !_i26) ||
            (ar(_u11) &&
              ((null !== _r60 &&
                !_r60.canInsertTextBefore() &&
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
          if (!ar(_e140) || null === n || null === o)
            return void Yi(s, _c12, _e140);
          if ((_e140.setTextNodeRange(s, n, s, o), s.isSegmented())) {
            var _t231 = Vo(s.getTextContent());
            (s.replace(_t231), (s = _t231));
          }
          Yi(s, _c12, _e140);
        }
      }
    }
    function Yi(t, e, n) {
      if ((t.setTextContent(e), ar(n))) {
        var _e141 = t.getKey();
        var _o78 = !1;
        for (var _r61 of ["anchor", "focus"]) {
          var _s42 = n[_r61];
          "text" === _s42.type &&
            _s42.key === _e141 &&
            ((_s42.offset = Qc(t, _s42.offset, "clamp")), (_o78 = !0));
        }
        _o78 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
      }
    }
    function ji(t, e, n) {
      var o = e[n] || !1;
      return "any" === o || o === t[n];
    }
    function Gi(t, e) {
      return (
        ji(t, e, "altKey") &&
        ji(t, e, "ctrlKey") &&
        ji(t, e, "shiftKey") &&
        ji(t, e, "metaKey")
      );
    }
    function Ji(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        o = n[e];
      if (void 0 !== o) return o;
      var r = t[e];
      if ("string" == typeof r) {
        var _t232 = wa(r);
        return ((n[e] = _t232), _t232);
      }
      return r;
    }
    function Vi(e, n, o, r, s) {
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
    function qi(t, e, n) {
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
    function Xi(t, e) {
      var n = t.offset;
      if ("element" === t.type) {
        return qi(t.getNode(), e, n);
      }
      {
        var _o79 = t.getNode();
        if ((e && 0 === n) || (!e && n === _o79.getTextContentSize())) {
          var _t233 = e ? _o79.getPreviousSibling() : _o79.getNextSibling();
          return null === _t233
            ? qi(
                _o79.getParentOrThrow(),
                e,
                _o79.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t233;
        }
      }
      return null;
    }
    function Qi(t) {
      var e = ll(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function Zi(t, e) {
      return Cs(t, e, arguments.length <= 2 ? undefined : arguments[2], t);
    }
    function tl(e, n) {
      var o = e._keyToDOMMap.get(n);
      return (void 0 === o && t(75, n), o);
    }
    function el(t) {
      var e = t.assignedSlot || t.parentElement;
      if (null !== e) return e;
      var n = t.parentNode;
      return Cl(n) ? n.host : null;
    }
    function nl(t) {
      return xi(t) ? t : Fl(t) ? t.ownerDocument : null;
    }
    function ol(t) {
      is();
      as()._updateTags.add(t);
    }
    function rl(t) {
      is();
      as()._deferred.push(t);
    }
    function sl(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function il(t) {
      var e = nl(t);
      return e ? e.defaultView : null;
    }
    function ll(e) {
      var n = e._window;
      return (null === n && t(78), n);
    }
    function cl(t) {
      return (Os(t) && t.isInline()) || (As(t) && t.isInline());
    }
    function al(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== mc(e) && Os(e)) return e;
        var _t234 = e.getParentOrThrow();
        if (fl(_t234)) return _t234;
        e = _t234;
      }
      return e;
    }
    function ul(t) {
      return Os(t) && t.isShadowRoot();
    }
    function fl(t) {
      return ws(t) || ul(t);
    }
    function dl(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t, si);
      return (
        Ti(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function hl(e) {
      var n = as(),
        o = e.getType(),
        r = ci(n, o);
      void 0 === r && t(200, e.constructor.name, o);
      var s = r.replace,
        i = r.replaceWithKlass;
      if (null !== s) {
        var _n109 = s(e),
          _r62 = _n109.constructor;
        return (
          null !== i
            ? _n109 instanceof i ||
              t(
                201,
                i.name,
                i.getType(),
                _r62.name,
                _r62.getType(),
                e.constructor.name,
                o,
              )
            : (_n109 instanceof e.constructor && _r62 !== e.constructor) ||
              t(202, _r62.name, _r62.getType(), e.constructor.name, o),
          _n109.__key === e.__key &&
            t(203, e.constructor.name, o, _r62.name, _r62.getType()),
          _n109
        );
      }
      return e;
    }
    function gl(e, n) {
      !ws(e.getParent()) || Os(n) || As(n) || t(99);
    }
    function _l(e) {
      var n = bi(e);
      return (null === n && t(63, e), n);
    }
    function pl(t) {
      if (!t || t.isInline()) return !1;
      if (As(t)) return !0;
      if (Os(t)) {
        if (t.isShadowRoot()) {
          var _e142 = t.getParent();
          return !(Os(_e142) && _e142.isShadowRoot());
        }
        return !t.canBeEmpty();
      }
      return !1;
    }
    function ml(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var o = t.parentElement;
      null !== o && o.removeChild(t);
    }
    function yl(t) {
      return n ? (t || window).getSelection() : null;
    }
    function xl(t) {
      var e = il(t);
      return e ? e.getSelection() : null;
    }
    function Cl(t) {
      return Ll(t) && "host" in t;
    }
    var Sl = [];
    function Tl(t) {
      var e = t.getRootNode();
      if (e === t || !Cl(e)) return Sl;
      var n = [e];
      var o = e.host;
      for (;;) {
        var _t235 = o.getRootNode();
        if (_t235 === o || !Cl(_t235)) break;
        (n.push(_t235), (o = _t235.host));
      }
      return n;
    }
    function* Nl(t) {
      var e = [t];
      var n;
      for (; (n = e.pop()); ) {
        yield* n.querySelectorAll('[data-lexical-editor="true"]');
        var _t236 = (xi(n) ? n : n.ownerDocument).createTreeWalker(
          n,
          NodeFilter.SHOW_ELEMENT,
        );
        var _o80 = void 0;
        for (; (_o80 = _t236.nextNode()); )
          _o80.shadowRoot && e.push(_o80.shadowRoot);
      }
    }
    function vl(t) {
      return null !== t ? t.ownerDocument : document;
    }
    function kl() {
      var t = ds();
      return vl(null !== t ? t._rootElement : null);
    }
    function El(t, e) {
      if (null === e || "function" != typeof t.getComposedRanges) return null;
      var n = Tl(e);
      if (0 === n.length) return null;
      var o = t.getComposedRanges;
      try {
        var _e143 = o.call(t, { shadowRoots: n })[0];
        if (void 0 !== _e143) return _e143;
      } catch (t) {}
      try {
        var _e144 = o.apply(t, n)[0];
        if (void 0 !== _e144) return _e144;
      } catch (t) {}
      return null;
    }
    function Ol(t, e) {
      var n = El(t, e);
      if (null !== n) {
        var _t237 = Ml(n);
        if (null !== _t237) return _t237;
      }
      return t.rangeCount > 0 ? t.getRangeAt(0) : null;
    }
    function bl(t, e) {
      var n = El(t, e);
      return null === n ? t : Al(n, Dl(t));
    }
    function Ml(t) {
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
    function Al(t, e) {
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
    function Dl(t) {
      return t.direction;
    }
    function wl(t) {
      var e = t.getRootNode();
      return xi(e) || Cl(e) ? e.activeElement : null;
    }
    function Il(t) {
      var e = t.activeElement;
      for (; null !== e && null !== e.shadowRoot; ) {
        var _t238 = e.shadowRoot.activeElement;
        if (null === _t238) break;
        e = _t238;
      }
      return e;
    }
    function Pl(t) {
      var e = t.target;
      if (
        null !== e &&
        Fl(e) &&
        null !== e.shadowRoot &&
        "function" == typeof t.composedPath
      ) {
        var _e145 = t.composedPath();
        if (_e145.length > 0) return _e145[0];
      }
      return e;
    }
    function Fl(t) {
      return Rl(t) && 1 === t.nodeType;
    }
    function Rl(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function Ll(t) {
      return Rl(t) && 11 === t.nodeType;
    }
    var Kl =
      /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
    function Bl(t) {
      return (
        !(!Fl(t) || !t.style.display.startsWith("inline")) ||
        Kl.test(t.nodeName)
      );
    }
    var $l =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function zl(t) {
      return (
        (!Fl(t) || !t.style.display.startsWith("inline")) && $l.test(t.nodeName)
      );
    }
    function Wl(t) {
      if (As(t) && !t.isInline()) return !0;
      if (!Os(t) || fl(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || zs(e) || qo(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function Ul() {
      return as();
    }
    function Hl(t) {
      if (t === void 0) {
        t = Ul();
      }
      return t._config.dom || Zs;
    }
    function Yl(e, n, o) {
      if (o === void 0) {
        o = Ul();
      }
      var r = Hl(o).$getDOMSlot(e, n, o);
      return (Os(e) && (jl(r) || t(344, e.getKey(), e.getType())), r);
    }
    function jl(t) {
      return t instanceof _Y;
    }
    function Gl(t, e, n) {
      if (n === void 0) {
        n = Ul();
      }
      return Ci(Yl(t, e, n).element);
    }
    var Jl = new WeakMap(),
      Vl = new Map();
    function ql(e) {
      if (!e._readOnly && e.isEmpty()) return Vl;
      e._readOnly || t(192);
      var n = Jl.get(e);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref47 of t._nodeMap) {
              var _n110 = _ref47[0];
              var _o81 = _ref47[1];
              {
                var _t239 = _o81.__type;
                var _r63 = e.get(_t239);
                (_r63 || ((_r63 = new Map()), e.set(_t239, _r63)),
                  _r63.set(_n110, _o81));
              }
            }
            return e;
          })(e)),
          Jl.set(e, n)),
        n
      );
    }
    function Xl(t) {
      var e = t.constructor.clone(t, si);
      return (e.afterCloneFrom(t), e);
    }
    function Ql(t, e) {
      var n = t.getAttribute("data-lexical-indent");
      if (null !== n) {
        var _t240 = parseInt(n, 10);
        if (Number.isFinite(_t240) && _t240 >= 0)
          return void e.setIndent(_t240);
      }
      var o = parseInt(t.style.paddingInlineStart, 10) || 0,
        r = Math.round(o / 40);
      e.setIndent(r);
    }
    function Zl(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function tc(t, e) {
      var n = e.style.textAlign;
      return n && n in w ? t.setFormat(n) : t;
    }
    function ec(t, e) {
      ((t.__lexicalUnmanaged = !0),
        e &&
          void 0 !== e.captureSelection &&
          (t.__lexicalCapturedSelection = e.captureSelection));
    }
    function nc(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function oc(t, e) {
      if (e === void 0) {
        e = Ul();
      }
      var n = e.isEditable();
      ((t.contentEditable = n ? "true" : "false"),
        n ? (t.__lexicalEditor = e) : delete t.__lexicalEditor);
    }
    function rc(t, e) {
      var n = t;
      for (; null != n; ) {
        if (!0 === n.__lexicalCapturedSelection) return !0;
        if (Fl(n) && n.hasAttribute("data-lexical-slot")) return !1;
        if (void 0 !== Di(n, e)) return !1;
        n = el(n);
      }
      return !1;
    }
    function sc(t, e) {
      return (
        (function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        })(t, e) && t[e] !== _Co5[e]
      );
    }
    var ic = new WeakMap(),
      lc = Symbol("lexical.synthesizedGetType");
    function cc(e) {
      var n = ic.get(e);
      if (n) return n;
      var o =
          null != e.prototype && L in e.prototype ? e.prototype[L]() : void 0,
        r = (function (e) {
          if (!(e === _Co5 || e.prototype instanceof _Co5)) {
            var _n111 = "<unknown>",
              _o82 = "<unknown>";
            try {
              _n111 = e.getType();
            } catch (t) {}
            try {
              _ni.version && (_o82 = JSON.parse(_ni.version));
            } catch (t) {}
            t(290, e.name, _n111, _o82);
          }
          return e === _Ms || e === _Es4 || e === _Co5;
        })(e),
        s = !r && sc(e, "getType") ? e.getType : void 0,
        i = s && !(lc in s) ? s.call(e) : void 0;
      var l,
        c = i;
      if (o)
        if (i) l = o[i];
        else {
          for (var _ref49 of Object.entries(o)) {
            var _t241 = _ref49[0];
            var _e146 = _ref49[1];
            ((c = _t241), (l = _e146));
          }
          if (!l)
            for (var _t242 of Object.getOwnPropertySymbols(o)) {
              var _e147 = o[_t242];
              if (_e147) {
                l = _e147;
                break;
              }
            }
        }
      if (!r && c) {
        if (!sc(e, "getType")) {
          var _t243 = e,
            _n112 = function _n112() {
              return this !== _t243 ? _Co5.getType.call(this) : c;
            };
          ((_n112[lc] = !0), (e.getType = _n112));
        }
        if (
          (sc(e, "clone") ||
            (e.clone = function (t, n) {
              ri(t);
              var o = new e();
              return (n !== si && o.afterCloneFrom(t), o);
            }),
          sc(e, "importJSON") ||
            (e.importJSON =
              (l && l.$importJSON) ||
              function (t) {
                return uc(e).updateFromJSON(t);
              }),
          !sc(e, "importDOM") && l)
        ) {
          var _l18 = l,
            _t244 = _l18.importDOM;
          _t244 &&
            (e.importDOM = function () {
              return _t244;
            });
        }
      }
      var a = { klass: e, ownNodeConfig: l, ownNodeType: c };
      return (ic.set(e, a), a);
    }
    function* ac(t) {
      for (var _e148 = t; _e148 && (_e148 === _Co5 || So(_e148.prototype)); ) {
        var _t245 = cc(_e148);
        (yield _t245,
          (_e148 =
            (_t245.ownNodeConfig && _t245.ownNodeConfig["extends"]) ||
            hc(_e148)));
      }
    }
    function uc(t) {
      var e = Ul();
      is();
      var n = e.resolveRegisteredNodeAfterReplacements(e.getRegisteredNode(t)),
        o = new n.klass();
      return null === n.replace ? o : hl(o);
    }
    var fc = function fc(t, e) {
      var n = t;
      for (; null != n && !ws(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function dc(e, n) {
      var o = [];
      var r = e.__first;
      for (; null !== r; ) {
        var _e149 = null === n ? bi(r) : n.get(r);
        (null == _e149 && t(174), o.push(r), (r = _e149.__next));
      }
      return o;
    }
    function hc(t) {
      var e = Object.getPrototypeOf(t);
      if ("function" == typeof e && e !== Function.prototype) return e;
      var n = t.prototype && Object.getPrototypeOf(t.prototype);
      return n ? n.constructor : null;
    }
    var gc = new Map();
    function _c(t) {
      return Os(t) || As(t);
    }
    function pc(t) {
      return Os(t) || As(t);
    }
    function mc(t) {
      var e = t.getLatest();
      return pc(e) ? e.__slotHost : null;
    }
    function yc(e) {
      var n = mc(e);
      if (null === n) return null;
      var o = bi(n);
      return (Os(o) || As(o) || t(370), o);
    }
    function xc(t) {
      var e = yc(t);
      if (null === e) return null;
      var n = t.getLatest().__key;
      for (var _ref51 of Sc(e)) {
        var _t246 = _ref51[0];
        var _o83 = _ref51[1];
        if (_o83 === n) return _t246;
      }
      return null;
    }
    function Cc(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== mc(e)) return e;
        e = e.getParent();
      }
      return null;
    }
    function Sc(t) {
      var e = t.getLatest();
      return _c(e) && null !== e.__slots ? e.__slots : gc;
    }
    function Tc(t) {
      return Array.from(Sc(t).keys());
    }
    function Nc(t, e) {
      var n = Sc(t).get(e);
      return void 0 === n ? null : bi(n);
    }
    var vc = ["__proto__", "constructor", "prototype"],
      kc = Symbol("slotMapOwner");
    function Ec(t) {
      var e = t.__slots;
      return (
        (null !== e && e[kc] === t) ||
          ((e = new Map(e)), (e[kc] = t), (t.__slots = e)),
        e
      );
    }
    var Oc = new WeakMap(),
      bc = [];
    function Mc(t) {
      for (var _ref53 of ac(t)) {
        var _e150 = _ref53.ownNodeConfig;
        {
          var _t247 = _e150 && _e150.slots;
          if (_t247) return _t247;
        }
      }
      return bc;
    }
    function Ac(t) {
      var e = "";
      for (var _n113 of Tc(t)) {
        var _o84 = Nc(t, _n113);
        null !== _o84 && (e += _o84.getTextContent());
      }
      return e;
    }
    function Dc(t, e, n) {
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
    function wc(e) {
      var n = e.__slots;
      if (null === n || n.size < 2) return;
      var o = (function (e) {
        var n = Oc.get(e);
        if (void 0 === n) {
          var _o85 = Mc(e),
            _r64 = new Map();
          for (var _n114 of _o85)
            (vc.includes(_n114) && t(371, e.name, _n114),
              _r64.has(_n114) && t(372, e.name, _n114),
              _r64.set(_n114, _r64.size));
          ((n = _r64), Oc.set(e, n));
        }
        return n;
      })(e.constructor);
      var r = null,
        s = !0;
      for (var _t248 of n.keys()) {
        if (null !== r && Dc(r, _t248, o) > 0) {
          s = !1;
          break;
        }
        r = _t248;
      }
      if (s) return;
      var i = Array.from(n).sort(function (_ref54, _ref55) {
        var t = _ref54[0];
        var e = _ref55[0];
        return Dc(t, e, o);
      });
      n.clear();
      for (var _ref57 of i) {
        var _t249 = _ref57[0];
        var _e151 = _ref57[1];
        n.set(_t249, _e151);
      }
    }
    function Ic(e, n, o) {
      ("__proto__" !== n && "constructor" !== n && "prototype" !== n) ||
        t(373, n);
      var r = e.getLatest();
      if (null !== r.__slots && r.__slots.get(n) === o.getLatest().__key)
        return r;
      ((!Os(o) && !As(o)) || o.isInline()) && t(374, o.__key);
      var s = e.getWritable(),
        i = Ec(s),
        l = i.get(n);
      void 0 !== l && Fc(l);
      var c = o.getWritable(),
        a = yc(c);
      if (null !== a) {
        var _t250 = xc(c);
        (null !== _t250 && Ec(a.getWritable())["delete"](_t250),
          (c.__slotHost = null));
      }
      return (
        Ni(c),
        (c.__slotHost = s.__key),
        i.set(n, c.__key),
        wc(s),
        (function () {
          var t = Ul();
          ((t._slotsUsed = !0),
            t._pendingEditorState && (t._pendingEditorState._slotsUsed = !0));
        })(),
        s
      );
    }
    function Pc(t, e) {}
    function Fc(e) {
      var n = bi(e);
      if (null === n) return;
      var o = n.getWritable();
      (pc(o) || t(377, e), (o.__slotHost = null), o.remove());
    }
    var Rc = { next: "previous", previous: "next" };
    var _Lc4 = (function () {
      function Lc(t) {
        this.origin = t;
      }
      var _proto19 = Lc.prototype;
      _proto19[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return aa({
            hasNext: Yc,
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
        return qc(this.getNodeAtCaret(), this.direction);
      };
      _proto19.getSiblingCaret = function getSiblingCaret() {
        return qc(this.origin, this.direction);
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
          var _t251 = s.getAdjacentCaret();
          null !== _t251 && l.size < e;
          _t251 = _t251.getAdjacentCaret()
        ) {
          var _e152 = _t251.origin.getWritable();
          l.set(_e152.getKey(), _e152);
        }
        for (var _e153 of r) {
          if (l.size > 0) {
            var _n115 = s.getNodeAtCaret();
            if (_n115) {
              if (
                (l["delete"](_n115.getKey()),
                l["delete"](_e153.getKey()),
                _n115.is(_e153) || s.origin.is(_e153))
              );
              else {
                var _t252 = _e153.getParent();
                (_t252 && _t252.is(i) && _e153.remove(), _n115.replace(_e153));
              }
            } else null === _n115 && t(263, Array.from(l).join(" "));
          } else s.insert(_e153);
          s = qc(_e153, this.direction);
        }
        for (var _t253 of l.values()) _t253.remove();
        return this;
      };
      return Lc;
    })();
    var _Kc3 = (function (_Lc) {
      function Kc() {
        var _this6;
        for (
          var _len8 = arguments.length, args = new Array(_len8), _key8 = 0;
          _key8 < _len8;
          _key8++
        ) {
          args[_key8] = arguments[_key8];
        }
        return (
          ((_this6 = _Lc.call.apply(_Lc, [this].concat(args)) || this),
          (_this6.type = "child"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(Kc, _Lc);
      var _proto20 = Kc.prototype;
      _proto20.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : ta(t, this.direction);
      };
      _proto20.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return qc(zc(this.getParentAtCaret(), t), this.direction);
      };
      _proto20.getFlipped = function getFlipped() {
        var t = $c(this.direction);
        return qc(this.getNodeAtCaret(), t) || ta(this.origin, t);
      };
      _proto20.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto20.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto20.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof Kc &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto20.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return Kc;
    })(_Lc4);
    var Bc = { root: ws, shadowRoot: fl };
    function $c(t) {
      return Rc[t];
    }
    function zc(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return null === t || Bc[e](t) ? null : null === mc(t) ? t : null;
    }
    var _Wc3 = (function (_Lc2) {
      function Wc() {
        var _this7;
        for (
          var _len9 = arguments.length, args = new Array(_len9), _key9 = 0;
          _key9 < _len9;
          _key9++
        ) {
          args[_key9] = arguments[_key9];
        }
        return (
          ((_this7 = _Lc2.call.apply(_Lc2, [this].concat(args)) || this),
          (_this7.type = "sibling"),
          babelHelpers.assertThisInitialized(_this7)) ||
          babelHelpers.assertThisInitialized(_this7)
        );
      }
      babelHelpers.inheritsLoose(Wc, _Lc2);
      var _proto21 = Wc.prototype;
      _proto21.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : qc(t, this.direction);
      };
      _proto21.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto21.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto21.getChildCaret = function getChildCaret() {
        return Os(this.origin) ? ta(this.origin, this.direction) : null;
      };
      _proto21.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return qc(zc(this.getParentAtCaret(), t), this.direction);
      };
      _proto21.getFlipped = function getFlipped() {
        var t = $c(this.direction);
        return (
          qc(this.getNodeAtCaret(), t) || ta(this.origin.getParentOrThrow(), t)
        );
      };
      _proto21.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Wc &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto21.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof Wc || t instanceof _Uc3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return Wc;
    })(_Lc4);
    var _Uc3 = (function (_Lc3) {
      function Uc(t, e) {
        var _this8;
        ((_this8 = _Lc3.call(this, t) || this),
          (_this8.type = "text"),
          (_this8.offset = e));
        return _this8;
      }
      babelHelpers.inheritsLoose(Uc, _Lc3);
      var _proto22 = Uc.prototype;
      _proto22.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Xc(t, this.direction, this.offset);
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
        return qc(zc(this.getParentAtCaret(), t), this.direction);
      };
      _proto22.getFlipped = function getFlipped() {
        return Xc(this.origin, $c(this.direction), this.offset);
      };
      _proto22.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Uc &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto22.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _Wc3 || t instanceof Uc) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto22.getSiblingCaret = function getSiblingCaret() {
        return qc(this.origin, this.direction);
      };
      return Uc;
    })(_Lc4);
    function Hc(t) {
      return t instanceof _Uc3;
    }
    function Yc(t) {
      return t instanceof _Wc3;
    }
    function jc(t) {
      return t instanceof _Kc3;
    }
    var Gc = {
        next: (function (_Uc) {
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
              ((_this9 = _Uc.call.apply(_Uc, [this].concat(args)) || this),
              (_this9.direction = "next"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class, _Uc);
          var _proto23 = _class.prototype;
          _proto23.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto23.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_Uc3),
        previous: (function (_Uc2) {
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
              ((_this0 = _Uc2.call.apply(_Uc2, [this].concat(args)) || this),
              (_this0.direction = "previous"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class3, _Uc2);
          var _proto24 = _class3.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_Uc3),
      },
      Jc = {
        next: (function (_Wc) {
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
              ((_this1 = _Wc.call.apply(_Wc, [this].concat(args)) || this),
              (_this1.direction = "next"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class5, _Wc);
          var _proto25 = _class5.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_Wc3),
        previous: (function (_Wc2) {
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
              ((_this10 = _Wc2.call.apply(_Wc2, [this].concat(args)) || this),
              (_this10.direction = "previous"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class7, _Wc2);
          var _proto26 = _class7.prototype;
          _proto26.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto26.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_Wc3),
      },
      Vc = {
        next: (function (_Kc) {
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
              ((_this11 = _Kc.call.apply(_Kc, [this].concat(args)) || this),
              (_this11.direction = "next"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class9, _Kc);
          var _proto27 = _class9.prototype;
          _proto27.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto27.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_Kc3),
        previous: (function (_Kc2) {
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
              ((_this12 = _Kc2.call.apply(_Kc2, [this].concat(args)) || this),
              (_this12.direction = "previous"),
              babelHelpers.assertThisInitialized(_this12)) ||
              babelHelpers.assertThisInitialized(_this12)
            );
          }
          babelHelpers.inheritsLoose(_class1, _Kc2);
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
        })(_Kc3),
      };
    function qc(t, e) {
      return t ? new Jc[e](t) : null;
    }
    function Xc(t, e, n) {
      return t ? new Gc[e](t, Qc(t, n)) : null;
    }
    function Qc(t, n, o) {
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
    function Zc(t, e) {
      return new _ra(t, e);
    }
    function ta(t, e) {
      return Os(t) ? new Vc[e](t) : null;
    }
    function ea(t) {
      return (t && t.getChildCaret()) || t;
    }
    function na(t) {
      return t && ea(t.getAdjacentCaret());
    }
    var _oa = (function () {
      function oa(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto29 = oa.prototype;
      _proto29.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new oa(t, e, this.direction);
      };
      _proto29.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto29.getTextSlices = function getTextSlices() {
        var _this16 = this;
        var t = function t(_t254) {
            var e = _this16[_t254].getLatest();
            return Hc(e)
              ? (function (t, e) {
                  var n = t.direction,
                    o = t.origin,
                    r = Qc(o, "focus" === e ? $c(n) : n);
                  return Zc(t, r - t.offset);
                })(e, _t254)
              : null;
          },
          e = t("anchor"),
          n = t("focus");
        if (e && n) {
          var _t255 = e.caret,
            _o86 = n.caret;
          if (_t255.isSameNodeCaret(_o86))
            return [Zc(_t255, _o86.offset - _t255.offset), null];
        }
        return [e, n];
      };
      _proto29.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = Hc(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          o = Hc(n),
          r = function r(e) {
            return e.isSameNodeCaret(n) ? null : na(e) || e.getParentCaret(t);
          };
        return aa({
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
      return oa;
    })();
    var _ra = (function () {
      function ra(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto30 = ra.prototype;
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
        return Xc(t.setTextContent(r.slice(0, n) + r.slice(o)), e, n);
      };
      return ra;
    })();
    function sa(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function ia(t) {
      return ca(t, sa(ta(Fi(), $c(t.direction)), t.direction));
    }
    function la(t) {
      return ca(t, t);
    }
    function ca(e, n) {
      return (
        e.direction !== n.direction && t(265),
        new _oa(e, n, e.direction)
      );
    }
    function aa(t) {
      var _ref58;
      var e = t.initial,
        n = t.hasNext,
        o = t.step,
        r = t.map;
      var s = e;
      return (
        (_ref58 = {}),
        (_ref58[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
          function () {
            return this;
          }),
        (_ref58.next = function next() {
          if (!n(s)) return { done: !0, value: void 0 };
          var t = { done: !1, value: r(s) };
          return ((s = o(s)), t);
        }),
        _ref58
      );
    }
    function ua(e, n) {
      var o = ga(e.origin, n.origin);
      switch (
        (null === o && t(275, e.origin.getKey(), n.origin.getKey()), o.type)
      ) {
        case "same": {
          var _t256 = "text" === e.type,
            _o87 = "text" === n.type;
          return _t256 && _o87
            ? (function (t, e) {
                return Math.sign(t - e);
              })(e.offset, n.offset)
            : e.type === n.type
              ? 0
              : _t256
                ? -1
                : _o87
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
          return fa(o);
      }
    }
    function fa(t) {
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
    function da(t, e) {
      return e.is(t);
    }
    function ha(t) {
      return Os(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function ga(e, n) {
      if (e.is(n)) return { commonAncestor: e, type: "same" };
      var o = new Map();
      for (
        var _ha = ha(e), _t257 = _ha[0], _n116 = _ha[1];
        _t257;
        _n116 = _t257, _t257 = _t257.getParent()
      )
        o.set(_t257, _n116);
      for (
        var _ha2 = ha(n), _r65 = _ha2[0], _s43 = _ha2[1];
        _r65;
        _s43 = _r65, _r65 = _r65.getParent()
      ) {
        var _i27 = o.get(_r65);
        if (void 0 !== _i27)
          return null === _i27
            ? (da(e, _r65) || t(276),
              { commonAncestor: _r65, type: "ancestor" })
            : null === _s43
              ? (da(n, _r65) || t(277),
                { commonAncestor: _r65, type: "descendant" })
              : (((Os(_i27) || da(e, _i27)) &&
                  (Os(_s43) || da(n, _s43)) &&
                  _r65.is(_i27.getParent()) &&
                  _r65.is(_s43.getParent())) ||
                  t(278),
                { a: _i27, b: _s43, commonAncestor: _r65, type: "branch" });
      }
      return null;
    }
    function _a(e, n) {
      var o = e.type,
        r = e.key,
        s = e.offset,
        i = _l(e.key);
      return "text" === o
        ? (qo(i) || t(266, i.getType(), r), Xc(i, n, s))
        : (Os(i) || t(267, i.getType(), r), Oa(i, e.offset, n));
    }
    function pa(e, n) {
      var o = n.origin,
        r = n.direction,
        s = "next" === r;
      Hc(n)
        ? e.set(o.getKey(), n.offset, "text")
        : Yc(n)
          ? qo(o)
            ? e.set(o.getKey(), Qc(o, r), "text")
            : e.set(
                o.getParentOrThrow().getKey(),
                o.getIndexWithinParent() + (s ? 1 : 0),
                "element",
              )
          : ((jc(n) && Os(o)) || t(268),
            e.set(o.getKey(), s ? 0 : o.getChildrenSize(), "element"));
    }
    function ma(t) {
      var e = Pr(),
        n = ar(e) ? e : Dr();
      return (ya(n, t), Ri(n), n);
    }
    function ya(t, e) {
      (pa(t.anchor, e.anchor), pa(t.focus, e.focus));
    }
    function xa(t) {
      var e = t.anchor,
        n = t.focus,
        o = _a(e, "next"),
        r = _a(n, "next"),
        s = ua(o, r) <= 0 ? "next" : "previous";
      return ca(sa(o, s), sa(r, s));
    }
    function Ca(t) {
      var e = t.direction,
        n = t.origin,
        o = qc(n, $c(e)).getNodeAtCaret();
      return o ? qc(o, e) : ta(n.getParentOrThrow(), e);
    }
    function Sa(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _o88 = jc(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _o88;
        _o88 = _o88.getParentCaret(e)
      )
        n.push(Ca(_o88));
      return n;
    }
    function Ta(t) {
      return !!t && t.origin.isAttached();
    }
    function Na(e, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (e.isCollapsed()) return e;
      var o = "root",
        r = "next";
      var s = n;
      var i = Ea(e, r),
        l = Sa(i.anchor, o),
        c = Sa(i.focus.getFlipped(), o),
        a = new Set(),
        u = [];
      for (var _t258 of i.iterNodeCarets(o))
        if (jc(_t258)) a.add(_t258.origin.getKey());
        else if (Yc(_t258)) {
          var _e154 = _t258.origin;
          (Os(_e154) && !a.has(_e154.getKey())) || u.push(_e154);
        }
      var f = new Set();
      for (var _t259 of u) {
        var _e155 = _t259.getParent();
        (null === _e155 || a.has(_e155.getKey()) || f.add(_e155), Ni(_t259));
      }
      for (var _t260 of f)
        !_t260.canBeEmpty() &&
          !fl(_t260) &&
          _t260.isEmpty() &&
          _t260.isAttached() &&
          _t260.remove();
      for (var _t261 of i.getTextSlices()) {
        if (!_t261) continue;
        var _e156 = _t261.caret.origin,
          _n117 = _e156.getTextContentSize(),
          _o89 = Ca(qc(_e156, r)),
          _i28 = _e156.getMode();
        if (
          (Math.abs(_t261.distance) === _n117 && "removeEmptySlices" === s) ||
          ("token" === _i28 && 0 !== _t261.distance)
        )
          _o89.remove();
        else if (0 !== _t261.distance) {
          s = "removeEmptySlices";
          var _e157 = _t261.removeTextSlice();
          var _n118 = _t261.caret.origin;
          if ("segmented" === _i28) {
            var _t262 = _e157.origin,
              _n119 = Vo(_t262.getTextContent())
                .setStyle(_t262.getStyle())
                .setFormat(_t262.getFormat());
            (_o89.replaceOrInsert(_n119), (_e157 = Xc(_n119, r, _e157.offset)));
          }
          (_n118.is(l[0].origin) && (l[0] = _e157),
            _n118.is(c[0].origin) && (c[0] = _e157.getFlipped()));
        }
      }
      var d, h;
      for (var _t263 of l)
        if (Ta(_t263)) {
          d = va(_t263);
          break;
        }
      for (var _t264 of c)
        if (Ta(_t264)) {
          h = va(_t264);
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
            for (var _o90 = c; _o90 < t.length; _o90++) {
              var _r66 = t[_o90];
              if (fl(_r66)) return;
              !n && e(_r66) && (n = _r66);
            }
            return n;
          },
          u = a(s, Wl),
          f =
            u &&
            a(i, function (t) {
              return n.has(t.getKey()) && Wl(t);
            });
        if (f && Tc(f).length > 0) return null;
        return u && f ? [u, f] : null;
      })(d, h, a);
      if (g) {
        var _t265 = g[0],
          _e158 = g[1];
        ta(_t265, "previous").splice(0, _e158.getChildren());
        var _n120 = _e158.getParent();
        for (_e158.remove(!0); _n120 && _n120.isEmpty(); ) {
          var _t266 = _n120;
          ((_n120 = _n120.getParent()), _t266.remove(!0));
        }
      } else if (h) {
        var _t267 = (function (t) {
            if (jc(t)) {
              var _e160 = t.origin;
              if (Wl(_e160)) return _e160;
            } else {
              var _e161 = t.getParentAtCaret();
              if (_e161 && Wl(_e161)) return _e161;
            }
            return null;
          })(h),
          _e159 = _t267 && _t267.getParent(),
          _n121 = _t267 && _t267.getParents().findLast(ul);
        if (
          _t267 &&
          _e159 &&
          !ws(_e159) &&
          _t267.isEmpty() &&
          a.has(_t267.getKey()) &&
          0 === Tc(_t267).length &&
          (!_n121 || a.has(_n121.getKey()))
        ) {
          _t267.remove(!0);
          var _n122 = _e159;
          for (; _n122 && !ws(_n122) && _n122.isEmpty(); ) {
            var _t268 = _n122.getParent();
            if (_t268 && ws(_t268) && _t268.getChildrenSize() <= 1) break;
            var _e162 = _n122;
            ((_n122 = _t268), _e162.remove(!0));
          }
        }
      }
      var _ = [d, h].concat(l, c).find(Ta);
      if (_) {
        return la(sa(va(_), e.direction));
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
    function va(t) {
      var e = (function (t) {
          var e = t;
          for (; jc(e); ) {
            var _t269 = na(e);
            if (!jc(_t269)) break;
            e = _t269;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (qo(e.origin)) return Hc(e) ? e : Xc(e.origin, n, n);
      var o = e.getAdjacentCaret();
      return Yc(o) && qo(o.origin) ? Xc(o.origin, n, $c(n)) : e;
    }
    function ka(t) {
      return Hc(t) && t.offset !== Qc(t.origin, t.direction);
    }
    function Ea(t, e) {
      return t.direction === e ? t : ca(sa(t.focus, e), sa(t.anchor, e));
    }
    function Oa(t, e, n) {
      var o = ta(t, "next");
      for (var _t270 = 0; _t270 < e; _t270++) {
        var _t271 = o.getAdjacentCaret();
        if (null === _t271) break;
        o = _t271;
      }
      return sa(o, n);
    }
    function ba(e) {
      var n = e.origin,
        o = e.offset,
        r = e.direction;
      if (o === Qc(n, r)) return e.getSiblingCaret();
      if (o === Qc(n, $c(r))) return Ca(e.getSiblingCaret());
      var _n$splitText2 = n.splitText(o),
        s = _n$splitText2[0];
      return (qo(s) || t(281), sa(qc(s, "next"), r));
    }
    function Ma(t, e) {
      return !0;
    }
    function Aa(t, _temp) {
      var _ref59 = _temp === void 0 ? {} : _temp,
        _ref59$$copyElementNo = _ref59.$copyElementNode,
        e = _ref59$$copyElementNo === void 0 ? dl : _ref59$$copyElementNo,
        _ref59$$splitTextPoin = _ref59.$splitTextPointCaretNext,
        n = _ref59$$splitTextPoin === void 0 ? ba : _ref59$$splitTextPoin,
        _ref59$rootMode = _ref59.rootMode,
        o = _ref59$rootMode === void 0 ? "shadowRoot" : _ref59$rootMode,
        _ref59$$shouldSplit = _ref59.$shouldSplit,
        r = _ref59$$shouldSplit === void 0 ? Ma : _ref59$$shouldSplit,
        _ref59$removeEmptyDes = _ref59.removeEmptyDestination,
        s = _ref59$removeEmptyDes === void 0 ? !1 : _ref59$removeEmptyDes;
      if (Hc(t)) return n(t);
      var i = t.getParentCaret(o);
      if (i) {
        var _n123 = i.origin;
        if (jc(t)) {
          var _t272 = Ca(i);
          if (s && _n123.isEmpty()) return (_n123.remove(), _t272);
          if (!_n123.canBeEmpty() || !r(_n123, "first")) return _t272;
        }
        var _o91 = (function (t) {
          var e = [];
          for (
            var _n124 = t.getAdjacentCaret();
            _n124;
            _n124 = _n124.getAdjacentCaret()
          )
            e.push(_n124.origin);
          return e;
        })(t);
        (_o91.length > 0 || (!s && _n123.canBeEmpty() && r(_n123, "last"))) &&
          i.insert(e(_n123).splice(0, 0, _o91));
      }
      return i;
    }
    function Da(e, n, o) {
      var r = sa(n, "next");
      (Hc(r) &&
        (0 === r.offset
          ? (r = qc(r.origin, "previous").getFlipped())
          : r.offset === r.origin.getTextContentSize() &&
            (r = qc(r.origin, "next"))),
        r.origin.is(e) &&
          (Yc(r) || t(342, e.getKey(), e.getType()), (r = Ca(r))),
        (e.is(r.getNodeAtCaret()) || e.is(r.getFlipped().getNodeAtCaret())) &&
          e.remove(!0));
      for (var _t273 = r; _t273; _t273 = Aa(_t273, o)) r = _t273;
      return (
        Hc(r) && t(283),
        r.insert(e.isInline() ? Gs().append(e) : e),
        sa(qc(e.getLatest(), "next"), n.direction)
      );
    }
    function wa() {
      var e = [];
      for (
        var _len14 = arguments.length, t = new Array(_len14), _key14 = 0;
        _key14 < _len14;
        _key14++
      ) {
        t[_key14] = arguments[_key14];
      }
      for (var _n125 of t)
        if (_n125 && "string" == typeof _n125)
          for (var _ref61 of _n125.matchAll(/\S+/g)) {
            var _t274 = _ref61[0];
            e.push(_t274);
          }
      return e;
    }
    function Ia() {
      for (
        var _len15 = arguments.length, t = new Array(_len15), _key15 = 0;
        _key15 < _len15;
        _key15++
      ) {
        t[_key15] = arguments[_key15];
      }
      return function () {
        for (var _e163 = t.length - 1; _e163 >= 0; _e163--) t[_e163]();
        t.length = 0;
      };
    }
    ((exports.$addUpdateTag = ol),
      (exports.$applyNodeReplacement = hl),
      (exports.$assumeActiveEditor = function (t) {
        (null !== cs() && null === Qr && (Qr = t), Qr !== t && e(378));
      }),
      (exports.$caretFromPoint = _a),
      (exports.$caretRangeFromSelection = xa),
      (exports.$cloneWithProperties = Xl),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = Xl(t))[mo] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = ua),
      (exports.$copyNode = dl),
      (exports.$create = uc),
      (exports.$createChildrenArray = dc),
      (exports.$createLineBreakNode = $s),
      (exports.$createNodeSelection = wr),
      (exports.$createParagraphNode = Gs),
      (exports.$createPoint = nr),
      (exports.$createRangeSelection = Dr),
      (exports.$createRangeSelectionFromDom = function (t, e) {
        return Ir(null, t, e, null);
      }),
      (exports.$createTabNode = Zo),
      (exports.$createTextNode = Vo),
      (exports.$extendCaretToRange = ia),
      (exports.$findMatchingParent = fc),
      (exports.$flushSyncAfterUpdate = function () {
        var t = cs();
        (is(), (t._flushSync = !0));
      }),
      (exports.$formatText = hr),
      (exports.$fullReconcile = us),
      (exports.$generateNodesFromRawText = Hr),
      (exports.$getAdjacentChildCaret = na),
      (exports.$getAdjacentNode = Xi),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          o = t,
          r = na(o);
        for (; null === r; ) {
          if ((n--, (r = o.getParentCaret(e)), !r)) return null;
          ((o = r), (r = na(o)));
        }
        return r && [r, n];
      }),
      (exports.$getCaretInDirection = sa),
      (exports.$getCaretRange = ca),
      (exports.$getCaretRangeInDirection = Ea),
      (exports.$getCharacterOffsets = _r),
      (exports.$getChildCaret = ta),
      (exports.$getChildCaretAtIndex = Oa),
      (exports.$getChildCaretOrSelf = ea),
      (exports.$getCollapsedCaretRange = la),
      (exports.$getCommonAncestor = ga),
      (exports.$getCommonAncestorResultBranchOrder = fa),
      (exports.$getDOMSlot = Yl),
      (exports.$getDOMTextNode = Gl),
      (exports.$getDocument = kl),
      (exports.$getEditor = Ul),
      (exports.$getEditorDOMRenderConfig = Hl),
      (exports.$getNearestNodeFromDOMNode = wi),
      (exports.$getNearestRootOrShadowRoot = al),
      (exports.$getNodeByKey = bi),
      (exports.$getNodeByKeyOrThrow = _l),
      (exports.$getNodeFromDOMNode = Mi),
      (exports.$getPreviousSelection = Fr),
      (exports.$getRoot = Fi),
      (exports.$getSelection = Pr),
      (exports.$getSiblingCaret = qc),
      (exports.$getSlot = Nc),
      (exports.$getSlotFrame = Cc),
      (exports.$getSlotHost = yc),
      (exports.$getSlotNameWithinHost = xc),
      (exports.$getSlotNames = Tc),
      (exports.$getState = ht),
      (exports.$getStateChange = function (t, e, n) {
        var o = ht(t, n, ut),
          r = ht(e, n, ut);
        return n.isEqual(o, r) ? null : [o, r];
      }),
      (exports.$getTextContent = function () {
        var t = Pr();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = Qc),
      (exports.$getTextPointCaret = Xc),
      (exports.$getTextPointCaretSlice = Zc),
      (exports.$getWritableNodeState = mt),
      (exports.$hasAncestor = sl),
      (exports.$hasUpdateTag = function (t) {
        return as()._updateTags.has(t);
      }),
      (exports.$insertNodeToNearestRootAtCaret = Da),
      (exports.$insertNodes = function (t) {
        var e = Pr() || Fr();
        (null === e && (e = Fi().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = Mr),
      (exports.$isChildCaret = jc),
      (exports.$isDecoratorNode = As),
      (exports.$isEditorState = function (t) {
        return t instanceof _Rs;
      }),
      (exports.$isElementDOMSlot = jl),
      (exports.$isElementNode = Os),
      (exports.$isExtendableTextPointCaret = ka),
      (exports.$isInlineElementOrDecoratorNode = cl),
      (exports.$isInlineFormattable = Bo),
      (exports.$isLeafNode = function (t) {
        return qo(t) || zs(t) || As(t);
      }),
      (exports.$isLexicalNode = So),
      (exports.$isLineBreakNode = zs),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _Lc4;
      }),
      (exports.$isNodeSelection = fr),
      (exports.$isParagraphNode = Js),
      (exports.$isRangeSelection = ar),
      (exports.$isRootNode = ws),
      (exports.$isRootOrShadowRoot = fl),
      (exports.$isSelectionCapturedInDecoratorInput = ui),
      (exports.$isShadowRootNode = ul),
      (exports.$isSiblingCaret = Yc),
      (exports.$isSlotChild = pc),
      (exports.$isSlotHost = _c),
      (exports.$isTabNode = tr),
      (exports.$isTextNode = qo),
      (exports.$isTextPointCaret = Hc),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _ra;
      }),
      (exports.$isTokenOrSegmented = mi),
      (exports.$isTokenOrTab = pi),
      (exports.$markSlotEditable = oc),
      (exports.$needsBlockCursorBeside = pl),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = cs();
        if (n._readOnly) {
          var _t275 = ql(n).get(e);
          return _t275 ? Array.from(_t275.values()) : [];
        }
        var o = n._nodeMap,
          r = [];
        for (var _ref63 of o) {
          var _n126 = _ref63[1];
          _n126 instanceof t &&
            _n126.__type === e &&
            _n126.isAttached() &&
            r.push(_n126);
        }
        return r;
      }),
      (exports.$normalizeCaret = va),
      (exports.$normalizeSelection__EXPERIMENTAL = Ot),
      (exports.$onUpdate = rl),
      (exports.$parseSerializedNode = function (t) {
        return ps(t, as()._nodes);
      }),
      (exports.$removeFromParent = Ni),
      (exports.$removeSlot = function (t, e) {
        var n = t.getWritable();
        if (null === n.__slots) return n;
        var o = n.__slots.get(e);
        return (void 0 !== o && (Fc(o), Ec(n)["delete"](e)), n);
      }),
      (exports.$removeTextFromCaretRange = Na),
      (exports.$rewindSiblingCaret = Ca),
      (exports.$selectAll = function (t) {
        var e = Fi();
        if (ar(t)) {
          var _e164 = t.anchor,
            _n127 = t.focus,
            _o92 = _e164.getNode();
          if (ws(_o92))
            return (
              _e164.set(_o92.getKey(), 0, "element"),
              _n127.set(_o92.getKey(), _o92.getChildrenSize(), "element"),
              Ot(t),
              t
            );
          var _r67 = _o92.getTopLevelElementOrThrow(),
            _s44 = _r67.getParent();
          if (null === _s44)
            return (
              Os(_r67) &&
                (_e164.set(_r67.getKey(), 0, "element"),
                _n127.set(_r67.getKey(), _r67.getChildrenSize(), "element"),
                Ot(t)),
              t
            );
          var _i29 = _s44;
          return (
            _e164.set(_i29.getKey(), 0, "element"),
            _n127.set(_i29.getKey(), _i29.getChildrenSize(), "element"),
            Ot(t),
            t
          );
        }
        {
          var _t276 = e.select(0, e.getChildrenSize());
          return (Ri(Ot(_t276)), _t276);
        }
      }),
      (exports.$setCompositionKey = Ei),
      (exports.$setDirectionFromDOM = Zl),
      (exports.$setFormatFromDOM = tc),
      (exports.$setPointFromCaret = pa),
      (exports.$setSelection = Ri),
      (exports.$setSelectionFromCaretRange = ma),
      (exports.$setSlot = Ic),
      (exports.$setState = function (t, e, n) {
        var o;
        if ((is(), "function" == typeof n)) {
          var _r68 = t.getLatest(),
            _s45 = ht(_r68, e);
          if (((o = n(_s45)), e.isEqual(_s45, o))) return _r68;
        } else o = n;
        var r = t.getWritable();
        return (mt(r).updateFromKnown(e, o), r);
      }),
      (exports.$setTextFormat = function (t, e) {
        var n = [];
        for (var _ref65 of Object.entries(e)) {
          var _t277 = _ref65[0];
          var _o93 = _ref65[1];
          "boolean" == typeof _o93 && n.push([_t277, _o93]);
        }
        0 !== n.length &&
          dr(t, function (t) {
            for (var _ref67 of n) {
              var _e165 = _ref67[0];
              var _o94 = _ref67[1];
              t = Si(t, _e165, _o94 ? A[_e165] : 0);
            }
            return t;
          });
      }),
      (exports.$splitAtPointCaretNext = Aa),
      (exports.$splitNode = function (e, n) {
        var o = e.getChildAtIndex(n);
        (null == o && (o = e), fl(e) && t(102));
        var _r71 = function r(e) {
            var n = e.getParentOrThrow(),
              s = fl(n),
              i = e !== o || s ? dl(e) : e;
            if (s)
              return ((Os(e) && Os(i)) || t(133), e.insertAfter(i), [e, i, i]);
            {
              var _r70 = _r71(n),
                _t278 = _r70[0],
                _o95 = _r70[1],
                _s46 = _r70[2],
                _l19 = e.getNextSiblings();
              return (
                _s46.append.apply(_s46, [i].concat(_l19)),
                [_t278, _o95, i]
              );
            }
          },
          _r69 = _r71(o),
          s = _r69[0],
          i = _r69[1];
        return [s, i];
      }),
      (exports.$updateDOMSelection = Wr),
      (exports.$updateRangeSelectionFromCaretRange = ya),
      (exports.ArtificialNode__DO_NOT_USE = _Ls),
      (exports.BEFORE_INPUT_COMMAND = we),
      (exports.BLUR_COMMAND = vn),
      (exports.CAN_REDO_COMMAND = Sn),
      (exports.CAN_UNDO_COMMAND = Tn),
      (exports.CAN_USE_BEFORE_INPUT = i),
      (exports.CAN_USE_DOM = n),
      (exports.CLEAR_EDITOR_COMMAND = xn),
      (exports.CLEAR_HISTORY_COMMAND = Cn),
      (exports.CLICK_COMMAND = De),
      (exports.COLLABORATION_TAG = No),
      (exports.COMMAND_PRIORITY_BEFORE_CRITICAL = -4),
      (exports.COMMAND_PRIORITY_BEFORE_EDITOR = -8),
      (exports.COMMAND_PRIORITY_BEFORE_HIGH = -5),
      (exports.COMMAND_PRIORITY_BEFORE_LOW = -7),
      (exports.COMMAND_PRIORITY_BEFORE_NORMAL = -6),
      (exports.COMMAND_PRIORITY_CRITICAL = 4),
      (exports.COMMAND_PRIORITY_EDITOR = qs),
      (exports.COMMAND_PRIORITY_HIGH = 3),
      (exports.COMMAND_PRIORITY_LOW = 1),
      (exports.COMMAND_PRIORITY_NORMAL = 2),
      (exports.COMPOSITION_END_COMMAND = Fe),
      (exports.COMPOSITION_END_TAG = bo),
      (exports.COMPOSITION_START_COMMAND = Pe),
      (exports.COMPOSITION_START_TAG = Oo),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = Be),
      (exports.CONTROL_OR_ALT = bn),
      (exports.CONTROL_OR_META = On),
      (exports.CONTROL_OR_OTHER_KEY = R),
      (exports.COPY_COMMAND = pn),
      (exports.CUT_COMMAND = mn),
      (exports.CUT_TAG = "cut"),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = Zs),
      (exports.DELETE_CHARACTER_COMMAND = Re),
      (exports.DELETE_LINE_COMMAND = Ue),
      (exports.DELETE_WORD_COMMAND = We),
      (exports.DRAGEND_COMMAND = _n),
      (exports.DRAGOVER_COMMAND = gn),
      (exports.DRAGSTART_COMMAND = hn),
      (exports.DROP_COMMAND = fn),
      (exports.DecoratorNode = _Ms),
      (exports.ElementNode = _Es4),
      (exports.FOCUS_COMMAND = Nn),
      (exports.FORMAT_ELEMENT_COMMAND = dn),
      (exports.FORMAT_TEXT_COMMAND = He),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = To),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = an),
      (exports.INPUT_COMMAND = Ie),
      (exports.INSERT_LINE_BREAK_COMMAND = Le),
      (exports.INSERT_PARAGRAPH_COMMAND = Ke),
      (exports.INSERT_TAB_COMMAND = cn),
      (exports.INTERNAL_$isBlock = Wl),
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
      (exports.KEY_ARROW_DOWN_COMMAND = tn),
      (exports.KEY_ARROW_LEFT_COMMAND = Xe),
      (exports.KEY_ARROW_RIGHT_COMMAND = Ve),
      (exports.KEY_ARROW_UP_COMMAND = Ze),
      (exports.KEY_BACKSPACE_COMMAND = on),
      (exports.KEY_DELETE_COMMAND = sn),
      (exports.KEY_DOWN_COMMAND = Je),
      (exports.KEY_ENTER_COMMAND = en),
      (exports.KEY_ESCAPE_COMMAND = rn),
      (exports.KEY_MODIFIER_COMMAND = kn),
      (exports.KEY_SPACE_COMMAND = nn),
      (exports.KEY_TAB_COMMAND = ln),
      (exports.LineBreakNode = _Ks),
      (exports.MOVE_TO_END = qe),
      (exports.MOVE_TO_START = Qe),
      (exports.NODE_STATE_DIRECT = ut),
      (exports.NODE_STATE_KEY = "$"),
      (exports.NODE_STATE_LATEST = ft),
      (exports.OUTDENT_CONTENT_COMMAND = un),
      (exports.PASTE_COMMAND = $e),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _Ys),
      (exports.REDO_COMMAND = Ge),
      (exports.REMOVE_TEXT_COMMAND = ze),
      (exports.RootNode = _Ds),
      (exports.SELECTION_CHANGE_COMMAND = Me),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = Ae),
      (exports.SELECT_ALL_COMMAND = yn),
      (exports.SET_TEXT_FORMAT_COMMAND = Ye),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = ko),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = vo),
      (exports.SKIP_SELECTION_FOCUS_TAG = Eo),
      (exports.TEXT_TYPE_TO_FORMAT = A),
      (exports.TabNode = _Qo),
      (exports.TextNode = _$o2),
      (exports.UNDO_COMMAND = je),
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
        var n = wa.apply(void 0, e);
        n.length > 0 &&
          (_t$classList2 = t.classList).add.apply(_t$classList2, n);
      }),
      (exports.buildImportMap = function (t) {
        return t;
      }),
      (exports.compileKeyboardShortcuts = wn),
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
      (exports.createCommand = be),
      (exports.createEditor = function (e) {
        var n = e || {},
          o = ds(),
          r = n.theme || {},
          s = void 0 === e ? o : n.parentEditor || null,
          i = n.disableEvents || !1,
          l = Ps(),
          c = n.namespace || (null !== s ? s._config.namespace : zi()),
          a = n.editorState,
          u = [_Ds, _$o2, _Ks, _Qo, _Ys, _Ls].concat(n.nodes || []),
          f = n.onError,
          d = n.onWarn,
          h = n.html,
          g = void 0 === n.editable || n.editable;
        var _;
        if (void 0 === e && null !== o) _ = o._nodes;
        else {
          _ = new Map();
          for (var _e166 = 0; _e166 < u.length; _e166++) {
            var _o96 = u[_e166],
              _r72 = null,
              _s47 = null;
            if (_o96 && "object" == typeof _o96) {
              var _t279 = _o96;
              ((_o96 = _t279.replace),
                (_r72 = _t279["with"]),
                (_s47 = _t279.withKlass || null));
            }
            if (
              "function" != typeof _o96 ||
              !_o96.prototype ||
              !(_o96 === _Co5 || _o96.prototype instanceof _Co5)
            ) {
              var _r73 = "<unknown>";
              try {
                _r73 = JSON.parse(J);
              } catch (t) {}
              t(
                365,
                String(_e166 - u.length + (n.nodes ? n.nodes.length : 0)),
                "function" == typeof _o96
                  ? "" +
                      _o96.name +
                      ("function" == typeof _o96.getType
                        ? " (type " + String(_o96.getType()) + ")"
                        : "")
                  : String(_o96),
                String(_r73),
              );
            }
            cc(_o96);
            var _i30 = _o96.getType(),
              _l20 = Qs(_o96);
            _.set(_i30, {
              exportDOM: h && h["export"] ? h["export"].get(_o96) : void 0,
              klass: _o96,
              replace: _r72,
              replaceWithKlass: _s47,
              sharedNodeState: gt(u[_e166]),
              transforms: _l20,
            });
          }
        }
        var p = new _ni(
          l,
          s,
          _,
          {
            disableEvents: i,
            dom: babelHelpers["extends"]({}, Zs, e && e.dom),
            namespace: c,
            theme: r,
          },
          f || console.error,
          d || Vs,
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
            (t.registerCommand(we, qn, qs),
              t.registerCommand(Ie, Xn, qs),
              t.registerCommand(Pe, Qn, qs),
              t.registerCommand(Fe, Zn, qs),
              t.registerCommand(Je, lo, qs));
          })(p),
          p
        );
      }),
      (exports.createRefCountedRegistry = In),
      (exports.createSharedNodeState = gt),
      (exports.createState = function (t, e) {
        return new dt(t, e);
      }),
      (exports.declarePeerDependency = function (t, e) {
        return [t, e];
      }),
      (exports.defineExtension = function (t) {
        return t;
      }),
      (exports.findAllLexicalElementsDeep = Nl),
      (exports.flipDirection = $c),
      (exports.getActiveElement = wl),
      (exports.getActiveElementDeep = Il),
      (exports.getComposedEventTarget = Pl),
      (exports.getComposedStaticRange = El),
      (exports.getDOMOwnerDocument = nl),
      (exports.getDOMSelection = yl),
      (exports.getDOMSelectionFromTarget = xl),
      (exports.getDOMSelectionPoints = bl),
      (exports.getDOMSelectionRange = Ol),
      (exports.getDOMSelectionRangeAndPoints = function (t, e) {
        var _Ml;
        var n = El(t, e);
        if (null === n)
          return {
            points: t,
            range: t.rangeCount > 0 ? t.getRangeAt(0) : null,
          };
        var o =
          (_Ml = Ml(n)) != null
            ? _Ml
            : t.rangeCount > 0
              ? t.getRangeAt(0)
              : null;
        return { points: Al(n, Dl(t)), range: o };
      }),
      (exports.getDOMShadowRoots = Tl),
      (exports.getDOMTextNode = Ci),
      (exports.getDeclaredSlots = Mc),
      (exports.getEditorPropertyFromDOMNode = _i),
      (exports.getNearestEditorFromDOMNode = gi),
      (exports.getParentElement = el),
      (exports.getRegisteredNode = ci),
      (exports.getRegisteredNodeOrThrow = li),
      (exports.getRegisteredSubtypeMap = function (t) {
        var e = new Map(),
          n = new Map();
        for (var _o97 of t) {
          var _cc2 = cc(_o97),
            _t280 = _cc2.ownNodeType;
          _t280 && (n.set(_t280, _o97), e.set(_t280, new Set()));
        }
        for (var _ref69 of n) {
          var _t281 = _ref69[0];
          var _o98 = _ref69[1];
          for (var _ref71 of ac(_o98)) {
            var _n128 = _ref71.ownNodeType;
            {
              var _o99 = _n128 && e.get(_n128);
              _o99 && _o99.add(_t281);
            }
          }
        }
        return e;
      }),
      (exports.getRootOwnerDocument = vl),
      (exports.getStaticNodeConfig = cc),
      (exports.getStyleObjectFromCSS = Ao),
      (exports.getTextDirection = function (t) {
        return b.test(t) ? "rtl" : M.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = Qs),
      (exports.isBlockDomNode = zl),
      (exports.isCurrentlyReadOnlyMode = ss),
      (exports.isDOMCapturingSelection = rc),
      (exports.isDOMDocumentNode = xi),
      (exports.isDOMNode = Rl),
      (exports.isDOMShadowRoot = Cl),
      (exports.isDOMTextNode = yi),
      (exports.isDOMUnmanaged = nc),
      (exports.isDocumentFragment = Ll),
      (exports.isExactShortcutMatch = function (t, e, n) {
        if (!Gi(t, n)) return !1;
        if (t.key.toLowerCase() === e.toLowerCase()) return !0;
        if (e.length > 1) return !1;
        if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
        if (t.code.startsWith("Digit") && /^\d$/.test(e))
          return t.code === "Digit" + e;
        var o = "Key" + e.toUpperCase();
        return t.code === o;
      }),
      (exports.isHTMLAnchorElement = function (t) {
        return Fl(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = Fl),
      (exports.isHTMLTableCellElement = function (t) {
        return Fl(t) && ("TD" === t.tagName || "TH" === t.tagName);
      }),
      (exports.isHTMLTableRowElement = function (t) {
        return Fl(t) && "TR" === t.tagName;
      }),
      (exports.isInlineDomNode = Bl),
      (exports.isLastChildInBlockNode = Us),
      (exports.isLexicalEditor = hi),
      (exports.isModifierMatch = Gi),
      (exports.isOnlyChildInBlockNode = Ws),
      (exports.isSelectionCapturedInDecoratorInput = fi),
      (exports.isSelectionWithinEditor = di),
      (exports.iterStaticNodeConfigChain = ac),
      (exports.keyboardEventMaskForPlatform = function (t, e) {
        var _babelHelpers$extends;
        var n = t[R];
        return n && e !== r
          ? babelHelpers["extends"](
              {},
              t,
              ((_babelHelpers$extends = { ctrlKey: t[n] }),
              (_babelHelpers$extends[n] = t.ctrlKey),
              _babelHelpers$extends),
            )
          : t;
      }),
      (exports.makeStepwiseIterator = aa),
      (exports.mergeRegister = Ia),
      (exports.mountSlotContainer = function (t, e, n, o) {
        var r = t.read("latest", function () {
          var o = bi(e);
          return null !== o
            ? (function (t, e, n) {
                if (n === void 0) {
                  n = Ul();
                }
                var o = Nc(t, e);
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
      (exports.normalizeClassNames = wa),
      (exports.registerEventListener = Pn),
      (exports.registerEventListeners = function (t, e, n) {
        return Ia.apply(
          void 0,
          Object.entries(e).map(function (_ref72) {
            var e = _ref72[0],
              o = _ref72[1];
            return Pn(t, e, o, n);
          }),
        );
      }),
      (exports.removeClassNamesFromElement = function (t) {
        var _t$classList3;
        for (
          var _len18 = arguments.length,
            e = new Array(_len18 > 1 ? _len18 - 1 : 0),
            _key18 = 1;
          _key18 < _len18;
          _key18++
        ) {
          e[_key18 - 1] = arguments[_key18];
        }
        var n = wa.apply(void 0, e);
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(_t$classList3, n);
      }),
      (exports.removeFromParent = vi),
      (exports.resetRandomKey = function () {
        ii = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = wo),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n129 in e) {
          var _o100 = e[_n129];
          null == _o100 ? t.removeProperty(_n129) : Do(t, _n129, _o100);
        }
      }),
      (exports.setDOMUnmanaged = ec),
      (exports.setNodeIndentFromDOM = Ql),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n130 in e)
          if (t[_n130] !== e[_n130]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.stopLexicalPropagation = fo),
      (exports.toggleTextFormatType = Si),
      (exports.tokenizeRawText = Ur),
      (exports.unmountSlotContainer = function (t, e, n) {
        n.style.display = "none";
        var o = t.getElementByKey(e);
        null !== o && n.parentElement !== o && o.insertBefore(n, o.firstChild);
      }));
  },
  null,
);
