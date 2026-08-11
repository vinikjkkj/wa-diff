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
      return Pl()._blockCursorElement;
    }
    function K(t) {
      return (
        null !== t && 1 === t.nodeType && t.hasAttribute("data-lexical-slot")
      );
    }
    var B = d || l || a;
    function $() {
      var t = pl().createElement("img");
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
    function z(t) {
      return (
        null !== t &&
        1 === t.nodeType &&
        t.hasAttribute("data-lexical-decorator-boundary")
      );
    }
    var _W2 = (function () {
      function W(t, e, n) {
        ((this.element = t),
          (this.before = e || null),
          (this.after = n || null));
      }
      var _proto = W.prototype;
      _proto.withBefore = function withBefore(t) {
        return new W(this.element, t, this.after);
      };
      _proto.withAfter = function withAfter(t) {
        return new W(this.element, this.before, t);
      };
      _proto.withElement = function withElement(t) {
        return this.element === t ? this : new W(t, this.before, this.after);
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
        var o = U(t, this.element);
        if (null === o) return "after";
        var r = Array.prototype.indexOf.call(t.childNodes, o);
        if (r < 0) return "after";
        if (e === t) return n <= r ? "before" : "after";
        var s = U(t, e);
        if (null === s) return "after";
        var i = Array.prototype.indexOf.call(t.childNodes, s);
        return i >= 0 && i <= r ? "before" : "after";
      };
      _proto.getInsertionAnchor = function getInsertionAnchor() {
        return this.before;
      };
      return W;
    })();
    function U(t, e) {
      var n = e;
      for (; null !== n && n.parentNode !== t; ) n = n.parentNode;
      return n;
    }
    var _H = (function (_W) {
      function H() {
        return _W.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(H, _W);
      var _proto2 = H.prototype;
      _proto2.withBefore = function withBefore(t) {
        return new H(this.element, t, this.after);
      };
      _proto2.withAfter = function withAfter(t) {
        return new H(this.element, this.before, t);
      };
      _proto2.withElement = function withElement(t) {
        return this.element === t ? this : new H(t, this.before, this.after);
      };
      _proto2.getInsertionAnchor = function getInsertionAnchor() {
        return (
          _W.prototype.getInsertionAnchor.call(this) ||
          this.getManagedLineBreak() ||
          this.getDecoratorBoundaryAnchor("trailing")
        );
      };
      _proto2.getFirstChildAnchor = function getFirstChildAnchor() {
        var t = _W.prototype.getFirstChildAnchor.call(this),
          e = t ? t.nextSibling : this.element.firstChild;
        for (; K(e); ) ((t = e), (e = e.nextSibling));
        z(e) && ((t = e), (e = e.nextSibling));
        var n = t ? t.nextSibling : this.element.firstChild;
        return null !== n && n === L() ? n : t;
      };
      _proto2.getDecoratorBoundaryAnchor = function getDecoratorBoundaryAnchor(
        t,
      ) {
        var e;
        if ("leading" === t) {
          var _t4 = _W.prototype.getFirstChildAnchor.call(this);
          for (e = _t4 ? _t4.nextSibling : this.element.firstChild; K(e); )
            e = e.nextSibling;
        } else
          ((e = this.before
            ? this.before.previousSibling
            : this.element.lastChild),
            null !== e && e === L() && (e = e.previousSibling));
        return z(e) ? e : null;
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
              $(),
              _t5 ? _t5.nextSibling : this.element.firstChild,
            );
          } else this.element.insertBefore($(), this.before);
      };
      _proto2.getManagedLineBreak = function getManagedLineBreak() {
        return this.element.__lexicalLineBreak || null;
      };
      _proto2.setManagedLineBreak = function setManagedLineBreak(t) {
        if (((this.element.__lexicalLastChildKind = t), null === t))
          this.removeManagedLineBreak();
        else {
          var _e3 = "decorator" === t && B;
          this.insertManagedLineBreak(_e3);
        }
      };
      _proto2.removeManagedLineBreak = function removeManagedLineBreak() {
        var t = this.getManagedLineBreak();
        if (t) {
          var _e4 = this.element,
            _n3 = "IMG" === t.nodeName ? t.nextSibling : null;
          (_n3 && _e4.removeChild(_n3),
            _e4.removeChild(t),
            (_e4.__lexicalLineBreak = void 0));
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
          r = pl().createElement("br");
        if (
          (r.setAttribute("data-lexical-managed-linebreak", "true"),
          n.insertBefore(r, o),
          t)
        ) {
          var _t6 = pl().createElement("img");
          (_t6.setAttribute("data-lexical-managed-linebreak", "true"),
            _t6.style.setProperty("display", "inline", "important"),
            _t6.style.setProperty("border", "0px", "important"),
            _t6.style.setProperty("margin", "0px", "important"),
            (_t6.alt = ""),
            n.insertBefore(_t6, r),
            (n.__lexicalLineBreak = _t6));
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
          var _e5 = this.getFirstChildOffset(),
            _n4 = L(),
            _r2 = this.element.childNodes,
            _s2 = Math.min(o, _r2.length);
          var _i2 = 0;
          for (var _t7 = _e5; _t7 < _s2; _t7++) _r2[_t7] !== _n4 && _i2++;
          return [t, Math.min(_i2, t.getChildrenSize())];
        }
        var r = j(e, n);
        r.push(o);
        var s = j(e, this.element);
        var i = t.getIndexWithinParent();
        for (var _t8 = 0; _t8 < s.length; _t8++) {
          var _e6 = r[_t8],
            _n5 = s[_t8];
          if (void 0 === _e6 || _e6 < _n5) break;
          if (_e6 > _n5) {
            i += 1;
            break;
          }
        }
        return [t.getParentOrThrow(), i];
      };
      return H;
    })(_W2);
    function j(e, n) {
      var o = [];
      var r = n;
      for (; r !== e && null !== r; r = r.parentNode) {
        var _t9 = 0;
        for (
          var _e7 = r.previousSibling;
          null !== _e7;
          _e7 = _e7.previousSibling
        )
          _t9++;
        o.push(_t9);
      }
      return (r !== e && t(225), o.reverse());
    }
    var Y;
    try {
      Y = "0.49.0+prod.cjs";
    } catch (t) {}
    var G = Y != null ? Y : '"<unknown>+source"';
    var _J = (function () {
      function J() {
        this._front = new Set();
        this._back = new Set();
      }
      var _proto3 = J.prototype;
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
        for (var _e8 of this._back) t.push(_e8);
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
      return babelHelpers.createClass(J, [
        {
          key: "size",
          get: function get() {
            return this._front.size + this._back.size;
          },
        },
      ]);
    })();
    var V = null;
    function q(t, e) {
      if (e === void 0) {
        e = 1e3;
      }
      return t instanceof _X
        ? t.clone()
        : t.size < e
          ? new Map(t)
          : new _X().init(new Map(t), void 0, t.size);
    }
    var _X = (function () {
      function X() {
        this._mutable = !1;
        this._old = void 0;
        this._nursery = void 0;
        this._size = 0;
      }
      var _proto4 = X.prototype;
      _proto4.clone = function clone() {
        return (
          (this._mutable = !1),
          new X().init(this._old, this._nursery, this._size)
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
        return e === V ? void 0 : e;
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
          var _t0 = new Map(this._old);
          for (var _ref4 of this._nursery) {
            var _e9 = _ref4[0];
            var _n6 = _ref4[1];
            _n6 !== V ? _t0.set(_e9, _n6) : _t0["delete"](_e9);
          }
          ((this._old = _t0), (this._nursery = void 0));
        }
        return ((this._mutable = !1), this);
      };
      _proto4.set = function set(t, e) {
        var n = this.getWithTombstone(t);
        if (n === e) return this;
        var o = this.getNursery();
        return (
          (n !== V && void 0 !== n) ||
            (this._size++, n === V && o["delete"](t)),
          o.set(t, e),
          this
        );
      };
      _proto4["delete"] = function _delete(t) {
        var e = this.has(t);
        return (e && (this.getNursery().set(t, V), this._size--), e);
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
        for (var _t1 of this.entries()) yield _t1[0];
      };
      _proto4.values = function* values() {
        for (var _t10 of this.entries()) yield _t10[1];
      };
      _proto4.entries = function* entries() {
        var t = this._nursery,
          e = this._old;
        if (e)
          for (var _n7 of e) {
            var _e0 = _n7[0],
              _o3 = t ? t.get(_e0) : void 0;
            _o3 !== V && (void 0 !== _o3 && (_n7[1] = _o3), yield _n7);
          }
        if (t)
          for (var _n8 of t)
            _n8[1] === V || (e && e.has(_n8[0])) || (yield _n8);
      };
      _proto4.forEach = function forEach(t, e) {
        void 0 !== e && (t = t.bind(e));
        for (var _ref6 of this.entries()) {
          var _e1 = _ref6[0];
          var _n9 = _ref6[1];
          t(_n9, _e1, this);
        }
      };
      _proto4[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this.entries();
        };
      return babelHelpers.createClass(X, [
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
    function Q(t, e, n, o, r, s) {
      if (gs(t)) {
        var _i3 = t.getFirstChild();
        for (; null !== _i3; ) {
          var _t11 = _i3.__key;
          (_i3.__parent === e &&
            ((gs(_i3) || (sc(_i3) && null !== _i3.__slots)) &&
              Q(_i3, _t11, n, o, r, s),
            n.has(_t11) || s["delete"](_t11),
            r.push(_t11)),
            (_i3 = _i3.getNextSibling()));
        }
      }
      for (var _i4 of sc(t) && null !== t.__slots ? t.__slots.values() : []) {
        var _t12 = o.get(_i4);
        void 0 !== _t12 &&
          ic(_t12) &&
          _t12.__slotHost === e &&
          ((gs(_t12) || (sc(_t12) && null !== _t12.__slots)) &&
            Q(_t12, _i4, n, o, r, s),
          n.has(_i4) || s["delete"](_i4),
          r.push(_i4));
      }
    }
    var Z = !1,
      tt = 0;
    function et(t) {
      tt = t.timeStamp;
    }
    function nt(t, e, n) {
      var o = "BR" === t.nodeName,
        r = e.__lexicalLineBreak;
      return (
        (r && (t === r || (o && t.previousSibling === r))) ||
        (o && void 0 !== yi(t, n))
      );
    }
    function ot(t, e, n) {
      var o = al(Qi(n)),
        r = o && xl(o, n._rootElement);
      var s = null,
        i = null;
      null !== r &&
        r.anchorNode === t &&
        ((s = r.anchorOffset), (i = r.focusOffset));
      var l = t.nodeValue;
      null !== l && Di(e, l, s, i, !1);
    }
    function rt(t, e, n) {
      if (qo(t)) {
        var _e10 = t.anchor.getNode();
        if (_e10.is(n) && t.format !== _e10.getFormat()) return !1;
      }
      return si(e) && n.isAttached();
    }
    function st(t, e, n) {
      for (var _o4 = t; _o4 && !Gl(_o4); _o4 = Yi(_o4)) {
        var _t13 = yi(_o4, e);
        if (void 0 !== _t13) {
          var _e11 = _i(_t13, n);
          if (_e11) return ms(_e11) || !kl(_o4) ? void 0 : [_o4, _e11];
        }
      }
    }
    function it(t, e, n) {
      Z = !0;
      var o = performance.now() - tt > 100;
      try {
        fs(t, function () {
          var r =
              Sr() ||
              (function (t) {
                return t.read("latest", function () {
                  var t = Sr();
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
              _g = st(_h, t, l);
            if (!_g) continue;
            var _2 = _g[0],
              _p = _g[1];
            if ("characterData" === _d)
              o && Lo(_p) && si(_h) && rt(r, _h, _p) && ot(_h, _p, t);
            else if ("childList" === _d) {
              a = !0;
              var _e12 = _f.addedNodes;
              for (var _n1 = 0; _n1 < _e12.length; _n1++) {
                var _o5 = _e12[_n1],
                  _r3 = pi(_o5),
                  _i5 = _o5.parentNode;
                if (
                  !(
                    null == _i5 ||
                    _o5 === c ||
                    null !== _r3 ||
                    nt(_o5, _i5, t) ||
                    z(_o5) ||
                    (t._slotsUsed &&
                      kl(_o5) &&
                      _o5.hasAttribute("data-lexical-slot")) ||
                    Gl(_o5)
                  )
                ) {
                  if (s) {
                    var _t14 =
                      (kl(_o5) ? _o5.innerText : null) || _o5.nodeValue;
                    _t14 && (u += _t14);
                  }
                  _i5.removeChild(_o5);
                }
              }
              var _n10 = _f.removedNodes,
                _o6 = _n10.length;
              if (_o6 > 0) {
                var _e13 = 0;
                for (var _r4 = 0; _r4 < _o6; _r4++) {
                  var _o7 = _n10[_r4];
                  nt(_o7, _h, t) || c === _o7
                    ? (_h.appendChild(_o7), _e13++)
                    : z(_o7) && _e13++;
                }
                _o6 !== _e13 && i.set(_2, _p);
              }
            }
          }
          if (i.size > 0)
            for (var _ref8 of i) {
              var _e14 = _ref8[0];
              var _n11 = _ref8[1];
              _n11.reconcileObservedMutation(_e14, t);
            }
          var f = n.takeRecords();
          if (f.length > 0) {
            for (var _e15 = 0; _e15 < f.length; _e15++) {
              var _n12 = f[_e15],
                _o8 = _n12.addedNodes,
                _r5 = _n12.target;
              for (var _e16 = 0; _e16 < _o8.length; _e16++) {
                var _n13 = _o8[_e16],
                  _s3 = _n13.parentNode;
                null == _s3 ||
                  "BR" !== _n13.nodeName ||
                  nt(_n13, _r5, t) ||
                  _s3.removeChild(_n13);
              }
            }
            n.takeRecords();
          }
          null !== r && (a && Ni(r), s && Ui(t) && r.insertRawText(u));
        });
      } finally {
        Z = !1;
      }
    }
    function lt(t) {
      var e = t._observer;
      if (null !== e) {
        it(t, e.takeRecords(), e);
      }
    }
    function ct(t) {
      (!(function (t) {
        0 === tt && Qi(t).addEventListener("textInput", et, !0);
      })(t),
        (t._observer = new MutationObserver(function (e, n) {
          it(t, e, n);
        })));
    }
    var at = "direct",
      ut = "latest";
    var ft = function ft(t, e) {
      ((this.key = t),
        (this.parse = e.parse.bind(e)),
        (this.unparse = (e.unparse || xt).bind(e)),
        (this.isEqual = (e.isEqual || Object.is).bind(e)),
        (this.defaultValue = this.parse(void 0)),
        (this.resetOnCopyNode = e.resetOnCopyNode || !1));
    };
    function dt(t, e, n) {
      if (n === void 0) {
        n = ut;
      }
      var o = (n === ut ? t.getLatest() : t).__state;
      return o ? o.getValue(e) : e.defaultValue;
    }
    function ht(t) {
      var e = new Map(),
        n = new Set();
      for (var _ref0 of tc("function" == typeof t ? t : t.replace)) {
        var _o9 = _ref0.ownNodeConfig;
        if (_o9 && _o9.stateConfigs)
          for (var _t15 of _o9.stateConfigs) {
            var _o0 = void 0;
            ("stateConfig" in _t15
              ? ((_o0 = _t15.stateConfig), _t15.flat && n.add(_o0.key))
              : (_o0 = _t15),
              e.set(_o0.key, _o0));
          }
      }
      return { flatKeys: n, sharedConfigMap: e };
    }
    var gt = new Set(["__proto__", "constructor", "prototype"]);
    var _t280 = (function () {
      function _t(t, e, n, o, r) {
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
                      var _e17 = t.get(_r6);
                      (_e17 && n.has(_e17)) || o++;
                    }
                  return o;
                })(s, n, o);
        this.size = i;
      }
      var _proto5 = _t.prototype;
      _proto5.getValue = function getValue(t) {
        var e = this.knownState.get(t);
        if (void 0 !== e) return e;
        this.sharedNodeState.sharedConfigMap.set(t.key, t);
        var n = t.defaultValue;
        if (this.unknownState && t.key in this.unknownState) {
          var _e18 = this.unknownState[t.key];
          (void 0 !== _e18 && (n = t.parse(_e18)), this.updateFromKnown(t, n));
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
          var _e19 = _ref10[0];
          var _n14 = _ref10[1];
          _e19.isEqual(_n14, _e19.defaultValue)
            ? delete t[_e19.key]
            : (t[_e19.key] = _e19.unparse(_n14));
        }
        for (var _n15 of this.sharedNodeState.flatKeys)
          _n15 in t && ((e[_n15] = t[_n15]), delete t[_n15]);
        return (yt(t) && (e.$ = t), e);
      };
      _proto5.getWritable = function getWritable(t) {
        if (this.node === t) return this;
        var e = this.sharedNodeState,
          n = this.unknownState,
          o = new Map(this.knownState);
        return new _t(
          t,
          e,
          (function (t, e, n) {
            var o;
            if (n)
              for (var _ref12 of Object.entries(n)) {
                var _r7 = _ref12[0];
                var _s4 = _ref12[1];
                {
                  if (gt.has(_r7)) continue;
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
        for (var _t16 of this.knownState.keys())
          _t16.resetOnCopyNode && this.knownState.set(_t16, _t16.defaultValue);
        return this;
      };
      _proto5.updateFromKnown = function updateFromKnown(t, e) {
        var n = t.key;
        this.sharedNodeState.sharedConfigMap.set(n, t);
        var o = this.knownState,
          r = this.unknownState;
        (o.has(t) ||
          (r && n in r) ||
          (r && (delete r[n], (this.unknownState = yt(r))), this.size++),
          o.set(t, e));
      };
      _proto5.updateFromUnknown = function updateFromUnknown(t, e) {
        if (gt.has(t)) return;
        var n = this.sharedNodeState.sharedConfigMap.get(t);
        n
          ? this.updateFromKnown(n, n.parse(e))
          : ((this.unknownState = this.unknownState || {}),
            t in this.unknownState || this.size++,
            (this.unknownState[t] = e));
      };
      _proto5.updateFromJSON = function updateFromJSON(t) {
        var e = this.knownState;
        for (var _t17 of e.keys()) e.set(_t17, _t17.defaultValue);
        if (((this.size = e.size), (this.unknownState = void 0), t))
          for (var _ref14 of Object.entries(t)) {
            var _e20 = _ref14[0];
            var _n17 = _ref14[1];
            this.updateFromUnknown(_e20, _n17);
          }
      };
      return _t;
    })();
    function pt(t) {
      var e = t.getWritable(),
        n = e.__state ? e.__state.getWritable(e) : new _t280(e, mt(e));
      return ((e.__state = n), n);
    }
    function mt(t) {
      return t.__state
        ? t.__state.sharedNodeState
        : Js(Pl(), t.getType()).sharedNodeState;
    }
    function yt(t) {
      if (t) for (var _e21 in t) return t;
    }
    function xt(t) {
      return t;
    }
    function Ct(t, e, n) {
      for (var _ref16 of e.knownState) {
        var _o1 = _ref16[0];
        var _r8 = _ref16[1];
        {
          if (t.has(_o1.key)) continue;
          t.add(_o1.key);
          var _e22 = n ? n.getValue(_o1) : _o1.defaultValue;
          if (_e22 !== _r8 && !_o1.isEqual(_e22, _r8)) return !0;
        }
      }
      return !1;
    }
    function St(t, e, n) {
      var o = e.unknownState,
        r = n ? n.unknownState : void 0;
      if (o)
        for (var _ref18 of Object.entries(o)) {
          var _e23 = _ref18[0];
          var _n18 = _ref18[1];
          if (t.has(_e23)) continue;
          t.add(_e23);
          if (_n18 !== (r ? r[_e23] : void 0)) return !0;
        }
      return !1;
    }
    function Tt(t, e) {
      var n = t.__state;
      return n && n.node === t ? n.getWritable(e) : n;
    }
    function Nt(t, e) {
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
              (t && Ct(n, t, e)) ||
              (e && Ct(n, e, t)) ||
              (t && St(n, t, e)) ||
              (e && St(n, e, t))
            );
          })(c, a))
      );
    }
    function vt(t, e) {
      var n = t.mergeWithSibling(e),
        o = qr()._normalizedNodes;
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
          Lo(e) &&
          e.isSimpleText() &&
          !e.isUnmergeable();
        ) {
          if ("" !== e.__text) {
            if (Nt(e, o)) {
              o = vt(e, o);
              break;
            }
            break;
          }
          e.remove();
        }
        for (
          ;
          null !== (n = o.getNextSibling()) &&
          Lo(n) &&
          n.isSimpleText() &&
          !n.isUnmergeable();
        ) {
          if ("" !== n.__text) {
            if (Nt(o, n)) {
              o = vt(o, n);
              break;
            }
            break;
          }
          n.remove();
        }
      } else o.remove();
    }
    function kt(t) {
      return (Ot(t.anchor), Ot(t.focus), t);
    }
    function Ot(t) {
      for (; "element" === t.type; ) {
        var _e24 = t.getNode(),
          _n19 = t.offset;
        var _o10 = void 0,
          _r9 = void 0;
        if (
          (_n19 === _e24.getChildrenSize()
            ? ((_o10 = _e24.getChildAtIndex(_n19 - 1)), (_r9 = !0))
            : ((_o10 = _e24.getChildAtIndex(_n19)), (_r9 = !1)),
          Lo(_o10))
        ) {
          t.set(_o10.__key, _r9 ? _o10.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!gs(_o10)) break;
        t.set(_o10.__key, _r9 ? _o10.getChildrenSize() : 0, "element", !0);
      }
    }
    var bt = Symbol["for"]("@lexical/CachedTextSize");
    function Mt(e, n) {
      return Yt.read(
        function () {
          var o = 0,
            r = e;
          for (var _e25 = 0; _e25 < n && null !== r; _e25++) {
            var _s5 = jt.get(r);
            if ((void 0 === _s5 && t(345, r), gs(_s5))) {
              var _i6 = Gt.get(r);
              if (void 0 !== _i6 && gs(_i6) && _i6.__parent !== _s5.__parent)
                o += _s5.getTextContentSize();
              else {
                var _e26 = Jt.get(r),
                  _n20 = _e26 && _e26.__lexicalTextContent;
                ("string" != typeof _n20 && t(346, _s5.getType()),
                  (o += _n20.length));
              }
              _e25 < n - 1 && !_s5.isInline() && (o += 2);
            } else {
              var _e27 = _s5[bt];
              (void 0 === _e27 && t(347, _s5.getType(), r), (o += _e27));
            }
            r = _s5.__next;
          }
          return o;
        },
        { editor: It },
      );
    }
    function At(t) {
      gs(t) ||
        (void 0 === t[bt] &&
          (t[bt] = Lo(t) ? t.__text.length : t.getTextContentSize()));
    }
    var Dt = 4;
    var wt,
      It,
      Pt,
      Ft = "",
      Rt = null,
      Lt = null,
      Kt = null;
    function Bt() {
      return { firstTextKey: Kt, format: Rt, style: Lt };
    }
    function $t(t) {
      null !== t.firstTextKey &&
        ((Rt = t.format), (Lt = t.style), (Kt = t.firstTextKey));
    }
    function zt(e) {
      if (null !== Kt) return;
      var n = e.__lexicalFirstTextKey;
      if ((void 0 === n && t(348), null === n)) return;
      var o = Gt.get(n);
      Lo(o) && ((Rt = o.getFormat()), (Lt = o.getStyle()), (Kt = n));
    }
    var Wt,
      Ut,
      Ht,
      jt,
      Yt,
      Gt,
      Jt,
      Vt,
      qt,
      Xt,
      Qt = !1,
      Zt = !1;
    function te(t, e) {
      var n = jt.get(t),
        o = Gt.has(t);
      if (null !== e) {
        var _n21 = ke(t);
        _n21.parentNode === e && e.removeChild(_n21);
      }
      if (!o) {
        if ((It._keyToDOMMap["delete"](t), gs(n))) {
          var _t18 = nc(n, jt);
          ee(_t18, 0, _t18.length - 1, null);
        }
        if (void 0 !== n) {
          for (var _t19 of ue(n).values()) {
            var _e28 = de(_t19);
            (te(_t19, null), null !== _e28 && _e28.remove());
          }
          $i(qt, Pt, Wt, n, "destroyed");
        }
      }
    }
    function ee(t, e, n, o) {
      for (var _r0 = e; _r0 <= n; ++_r0) {
        var _e29 = t[_r0];
        void 0 !== _e29 && te(_e29, o);
      }
    }
    function ne(t, e) {
      t.setProperty("text-align", e);
    }
    var oe = "40px";
    function re(t, e) {
      var n = wt.theme.indent;
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
          : "calc(" + e + " * var(--lexical-indent-base-value, " + oe + "))",
      );
    }
    function se(t, e) {
      var n = t.style;
      0 === e
        ? ne(n, "")
        : 1 === e
          ? ne(n, "left")
          : 2 === e
            ? ne(n, "center")
            : 3 === e
              ? ne(n, "right")
              : 4 === e
                ? ne(n, "justify")
                : 5 === e
                  ? ne(n, "start")
                  : 6 === e && ne(n, "end");
    }
    function ie(t, e) {
      var n = (function (t) {
        var e = t.__dir;
        if (null !== e) return e;
        if (xs(t)) return null;
        var n = t.getParent();
        return null === n || (nl(n) && null === n.__dir) ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function le(t) {
      var e = pl().createElement("div");
      return (
        e.setAttribute("data-lexical-slot", t),
        (e.style.display = "none"),
        e
      );
    }
    function ce(t, e, n) {
      e || "false" === t.contentEditable
        ? Jl(n, It)
        : n.removeAttribute("contenteditable");
    }
    function ae(t, e, n) {
      var o = Ft,
        r = Bt();
      Ft = "";
      var s = "";
      var i = ms(t);
      for (var _ref20 of n) {
        var _o12 = _ref20[0];
        var _r1 = _ref20[1];
        {
          var _n22 = le(_o12);
          (ce(e, i, _n22), e.appendChild(_n22), (Ft = ""));
          var _l2 = Bt();
          (ge(_r1, Rl(t, _n22, It)), $t(_l2), fe(t, _o12, e, _n22), (s += Ft));
        }
      }
      return ($t(r), (Ft = o), s);
    }
    function ue(t) {
      return sc(t) && null !== t.__slots ? t.__slots : rc;
    }
    function fe(t, e, n, o) {
      var r = Xt.$getSlotTargetElement(t, e, n, It);
      null !== r &&
        (o.parentElement !== r && r.appendChild(o), (o.style.display = ""));
    }
    function de(t) {
      var e = Jt.get(t);
      return void 0 !== e ? e.parentElement : null;
    }
    function he(t, e, n) {
      var o = ue(t),
        r = ue(e);
      for (var _ref22 of o) {
        var _t20 = _ref22[0];
        var _e30 = _ref22[1];
        if (!r.has(_t20)) {
          var _t21 = de(_e30);
          (te(_e30, null), null !== _t21 && _t21.remove());
        }
      }
      var s = Ft,
        i = Bt();
      var l = "",
        c = null;
      var a = ms(e);
      for (var _ref24 of r) {
        var _t22 = _ref24[0];
        var _s6 = _ref24[1];
        {
          var _r10 = o.get(_t22);
          var _i7 = void 0 !== _r10 ? de(_r10) : null;
          Ft = "";
          var _u = Bt();
          if (null === _i7) {
            _i7 = le(_t22);
            var _o13 = null;
            for (var _t23 of n.children)
              if (!_t23.hasAttribute("data-lexical-slot")) {
                _o13 = _t23;
                break;
              }
            (n.insertBefore(_i7, _o13), ge(_s6, Rl(e, _i7, It)));
          } else
            _r10 === _s6
              ? Se(_s6, _i7)
              : (void 0 !== _r10 && te(_r10, _i7), ge(_s6, Rl(e, _i7, It)));
          if (
            ($t(_u),
            ce(n, a, _i7),
            fe(e, _t22, n, _i7),
            (l += Ft),
            _i7.parentElement === n)
          ) {
            var _t24 = null === c ? n.firstChild : c.nextSibling;
            (_t24 !== _i7 && n.insertBefore(_i7, _t24), (c = _i7));
          }
        }
      }
      return ($t(i), (Ft = s), l);
    }
    function ge(e, n) {
      var o = Gt.get(e);
      if ((void 0 === o && t(60), null !== n)) {
        var _t25 = jt.get(e);
        if (void 0 !== _t25) {
          var _r11 = Jt.get(e);
          if (void 0 !== _r11) {
            var _s7 = ic(_t25) ? _t25.__slotHost : null,
              _i8 = ic(o) ? o.__slotHost : null,
              _l3 = _t25.__parent !== o.__parent || _s7 !== _i8,
              _c2 = null !== _i8 && _r11.parentElement !== n.element;
            if (_l3 || _c2) return (n.insertChild(_r11), Se(e, n.element));
          }
        }
      }
      var r = Xt.$createDOM(o, It);
      if (
        ((function (t, e, n) {
          var o = n._keyToDOMMap;
          (mi(e, n, t), o.set(t, e));
        })(e, r, It),
        Lo(o)
          ? r.setAttribute("data-lexical-text", "true")
          : ms(o) &&
            (r.setAttribute("data-lexical-decorator", "true"),
            Yl(r, { captureSelection: !0 })),
        gs(o))
      ) {
        var _t26 = o.__indent,
          _e31 = o.__size;
        (ie(r, o), 0 !== _t26 && re(r, _t26));
        var _n23 = ue(o),
          _s8 = _n23.size > 0 ? ae(o, r, _n23) : "";
        if (0 === _e31)
          ((r.__lexicalTextContent = _s8),
            (r.__lexicalFirstTextKey = null),
            (Ft += _s8),
            _n23.size > 0 && (r.__lexicalSlotTextLength = _s8.length));
        else {
          var _t27 = Ft,
            _i9 = _e31 - 1;
          if ((_e(nc(o, Gt), o, 0, _i9, Rl(o, r, It)), "" !== _s8)) {
            var _e32 = r.__lexicalTextContent || "";
            ((r.__lexicalTextContent = _s8 + _e32), (Ft = _t27 + _s8 + _e32));
          }
          _n23.size > 0 && (r.__lexicalSlotTextLength = _s8.length);
        }
        var _i0 = o.__format;
        (0 !== _i0 && se(r, _i0), o.isInline() || (ye(null, o, r), me(o, r)));
      } else {
        var _t28 = o.getTextContent();
        if (ms(o)) {
          var _t29 = o.decorate(It, wt);
          (null !== _t29 && Te(e, _t29), (r.contentEditable = "false"));
          var _n24 = ue(o);
          _n24.size > 0 && ae(o, r, _n24);
        }
        Ft += _t28;
      }
      return (
        null !== n && n.insertChild(r),
        Xt.$decorateDOM(o, null, r, It),
        At(o),
        $i(qt, Pt, Wt, o, "created"),
        r
      );
    }
    function _e(e, n, o, r, s) {
      var i = Ft,
        l = Bt();
      ((Ft = ""), (Rt = null), (Lt = null), (Kt = null));
      var c = o;
      for (; c <= r; ++c) {
        var _t30 = Bt();
        ge(e[c], s);
        var _n25 = Gt.get(e[c]);
        (null !== _n25 && Lo(_n25)
          ? null === Rt &&
            ((Rt = _n25.getFormat()), (Lt = _n25.getStyle()), (Kt = _n25.__key))
          : gs(_n25) && c < r && !_n25.isInline() && (Ft += v),
          $t(_t30));
      }
      var a = It._keyToDOMMap.get(n.__key);
      (void 0 === a && t(349, n.__key),
        (a.__lexicalTextContent = Ft),
        (a.__lexicalFirstTextKey = Kt),
        (Ft = i + Ft),
        $t(l));
    }
    function pe(t, e) {
      if (!t) return !1;
      var n = e.get(t);
      return ms(n) && !n.isInline();
    }
    function me(t, e) {
      var n = Rl(t, e, It);
      (n.setDecoratorBoundaryAnchor("leading", pe(t.__first, Gt)),
        n.setDecoratorBoundaryAnchor("trailing", pe(t.__last, Gt)));
    }
    function ye(t, e, n) {
      var _o$element$__lexicalL;
      var o = Rl(e, n, It),
        r =
          (_o$element$__lexicalL = o.element.__lexicalLastChildKind) != null
            ? _o$element$__lexicalL
            : null,
        s = (function (t, e) {
          if (t) {
            var _n26 = t.__last;
            if (_n26) {
              var _t31 = e.get(_n26);
              if (_t31)
                return bs(_t31)
                  ? "line-break"
                  : ms(_t31) && _t31.isInline()
                    ? "decorator"
                    : null;
            }
            return ue(t).size > 0 ? null : "empty";
          }
          return null;
        })(e, Gt);
      r !== s && o.setManagedLineBreak(s);
    }
    function xe(e, n, o) {
      var r;
      ((Rt = null),
        (Lt = null),
        (Kt = null),
        (function (e, n, o) {
          var r = Ft,
            s = e.__size,
            i = n.__size;
          Ft = "";
          var l = o.element,
            c = It._keyToDOMMap.get(n.__key);
          void 0 === c && t(351, n.__key);
          var a = i - s;
          if (
            !Qt &&
            Math.abs(a) <= 1 &&
            s >= Dt &&
            e.__first === n.__first &&
            (0 !== a || !It._cloneNotNeeded.has(e.__key))
          ) {
            var _s9 = c.__lexicalTextContent,
              _u2 = Vt.get(e.__key);
            if (!Qt && "string" == typeof _s9 && void 0 !== _u2) {
              var _i1 = (function (t, e) {
                var n = e.size;
                if (0 === n || n >= t.__size) return null;
                var o = t.__last,
                  r = null,
                  s = 0;
                for (; null !== o && s < n; ) {
                  if (!e.has(o)) return null;
                  r = o;
                  var _t32 = Gt.get(o);
                  if (void 0 === _t32) return null;
                  ((o = _t32.__prev), s++);
                }
                if (s !== n) return null;
                if (null !== o && e.has(o)) return null;
                return r;
              })(n, _u2);
              if (null !== _i1) {
                var _f2 = _u2.size;
                if (0 === a) {
                  var _e33 = Mt(_i1, _f2);
                  var _o14 = _i1,
                    _a2 = 0;
                  for (; null !== _o14 && _a2 < _f2; ) {
                    var _t33 = Gt.get(_o14);
                    if (void 0 === _t33) break;
                    var _e34 = Bt();
                    (Se(_o14, l),
                      Lo(_t33) &&
                        null === Rt &&
                        ((Rt = _t33.getFormat()),
                        (Lt = _t33.getStyle()),
                        (Kt = _t33.__key)),
                      $t(_e34),
                      (_o14 = _t33.__next),
                      _a2++);
                  }
                  var _d2 = "";
                  for (_o14 = _i1, _a2 = 0; null !== _o14 && _a2 < _f2; ) {
                    var _e35 = Gt.get(_o14);
                    if (void 0 === _e35) break;
                    var _n27 = void 0;
                    if (gs(_e35)) {
                      var _r12 = It._keyToDOMMap.get(_o14),
                        _s0 = _r12 && _r12.__lexicalTextContent;
                      ("string" != typeof _s0 && t(352, _e35.getType()),
                        (_n27 = _s0));
                    } else _n27 = _e35.getTextContent();
                    ((_d2 += _n27),
                      _a2 < _f2 - 1 &&
                        gs(_e35) &&
                        !_e35.isInline() &&
                        (_d2 += v),
                      (_o14 = _e35.__next),
                      _a2++);
                  }
                  var _h2 = c.__lexicalSlotTextLength || 0,
                    _g2 = _h2 > 0 ? _s9.slice(_h2) : _s9,
                    _3 = _g2.slice(0, _g2.length - _e33) + _d2;
                  return (
                    (c.__lexicalTextContent = _3),
                    (Ft = r + _3),
                    void Ce(n, c, _u2)
                  );
                }
                if (
                  (function (e, n, o, r, s, i, l, c) {
                    if (1 !== c && -1 !== c) return !1;
                    var a = 1 === c ? 2 : 1;
                    if (l !== a) return !1;
                    var u = l - c;
                    var f = e.__last;
                    for (var _t34 = 0; _t34 < u - 1; _t34++) {
                      if (null === f) return !1;
                      var _t35 = jt.get(f);
                      if (void 0 === _t35) return !1;
                      f = _t35.__prev;
                    }
                    if (null === f) return !1;
                    var d = Gt.get(i),
                      h = jt.get(f);
                    if (void 0 === d || void 0 === h) return !1;
                    if (d.__prev !== h.__prev) return !1;
                    var g = [];
                    var _ = i;
                    for (var _t36 = 0; _t36 < l; _t36++) {
                      if (null === _) return !1;
                      g.push(_);
                      var _t37 = Gt.get(_);
                      _ = _t37 ? _t37.__next : null;
                    }
                    var p = [];
                    _ = f;
                    for (var _t38 = 0; _t38 < u; _t38++) {
                      if (null === _) return !1;
                      p.push(_);
                      var _t39 = jt.get(_);
                      _ = _t39 ? _t39.__next : null;
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
                    var T = Mt(f, u);
                    for (var _t40 of x) {
                      var _e36 = Bt();
                      if ("reconcile" === _t40.kind) Se(_t40.key, o.element);
                      else if ("destroy" === _t40.kind) te(_t40.key, o.element);
                      else {
                        var _e37 = null;
                        for (var _n28 = _t40.nextIndex + 1; _n28 < l; _n28++) {
                          var _t41 = It._keyToDOMMap.get(g[_n28]);
                          if (void 0 !== _t41) {
                            _e37 = _t41;
                            break;
                          }
                        }
                        ge(
                          _t40.key,
                          o.withBefore(_e37 != null ? _e37 : o.before),
                        );
                      }
                      if ("destroy" !== _t40.kind) {
                        var _e38 = Gt.get(_t40.key);
                        _e38 &&
                          Lo(_e38) &&
                          null === Rt &&
                          ((Rt = _e38.getFormat()),
                          (Lt = _e38.getStyle()),
                          (Kt = _e38.__key));
                      }
                      $t(_e36);
                    }
                    var N = "";
                    for (var _e39 = 0; _e39 < l; _e39++) {
                      var _n29 = Gt.get(g[_e39]);
                      if (void 0 === _n29) return !1;
                      var _o15 = void 0;
                      if (gs(_n29)) {
                        var _r13 = It._keyToDOMMap.get(g[_e39]),
                          _s1 = _r13 && _r13.__lexicalTextContent;
                        ("string" != typeof _s1 && t(350, _n29.getType()),
                          (_o15 = _s1));
                      } else _o15 = _n29.getTextContent();
                      ((N += _o15),
                        _e39 < l - 1 &&
                          gs(_n29) &&
                          !_n29.isInline() &&
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
                  var _e40 = c.__lexicalTextContent;
                  return (
                    "string" != typeof _e40 && t(353),
                    (Ft = r + _e40),
                    void Ce(n, c, _u2)
                  );
                }
              }
            }
            if (0 === a) {
              var _n30 = e.__first,
                _o16 = 0;
              for (; null !== _n30; ) {
                var _e41 = Gt.get(_n30);
                if (void 0 === _e41) break;
                var _r14 = Qt || Ht.has(_n30) || Ut.has(_n30),
                  _s10 = Bt();
                if (_r14) Se(_n30, l);
                else {
                  var _o17 = void 0,
                    _r15 = void 0;
                  if (gs(_e41)) {
                    _r15 = Jt.get(_n30);
                    var _s11 = _r15 && _r15.__lexicalTextContent;
                    ("string" != typeof _s11 && t(354, _e41.getType()),
                      (_o17 = _s11));
                  } else _o17 = _e41.getTextContent();
                  ((Ft += _o17), void 0 !== _r15 && zt(_r15));
                }
                (Lo(_e41)
                  ? null === Rt &&
                    ((Rt = _e41.getFormat()),
                    (Lt = _e41.getStyle()),
                    (Kt = _e41.__key))
                  : gs(_e41) && _o16 < i - 1 && !_e41.isInline() && (Ft += v),
                  $t(_s10),
                  (_n30 = _e41.__next),
                  _o16++);
              }
              return (
                (c.__lexicalTextContent = Ft),
                (c.__lexicalFirstTextKey = Kt),
                void (Ft = r + Ft)
              );
            }
          }
          if (1 === s && 1 === i) {
            var _t42 = e.__first,
              _r16 = n.__first;
            if (_t42 === _r16) Se(_t42, l);
            else {
              var _e42 = ke(_t42),
                _n31 = ge(_r16, null);
              try {
                _e42.parentNode === l
                  ? l.replaceChild(_n31, _e42)
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
                    _e42.tagName +
                    ", key: " +
                    _t42 +
                    "}.";
                  throw new Error(_s12);
                }
                throw o;
              }
              te(_t42, null);
            }
            var _s13 = Gt.get(_r16);
            Lo(_s13) &&
              null === Rt &&
              ((Rt = _s13.getFormat()),
              (Lt = _s13.getStyle()),
              (Kt = _s13.__key));
          } else {
            var _r17 = nc(e, jt),
              _c3 = nc(n, Gt);
            if (
              (_r17.length !== s && t(227), _c3.length !== i && t(228), 0 === s)
            )
              0 !== i && _e(_c3, n, 0, i - 1, o);
            else if (0 === i) {
              if (0 !== s) {
                var _t43 =
                  null == o.after &&
                  null == o.before &&
                  0 === ue(n).size &&
                  null == o.element.__lexicalLineBreak;
                (ee(_r17, 0, s - 1, _t43 ? null : l),
                  _t43 && (l.textContent = ""));
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
                  var _t44 = e[f],
                    _o18 = n[d],
                    _r18 = Bt();
                  if (_t44 === _o18) ((u = Ne(Se(_o18, s.element))), f++, d++);
                  else {
                    if ((void 0 === a && (a = ve(n, d)), void 0 === c))
                      c = ve(e, f);
                    else if (!c.has(_t44)) {
                      (f++, $t(_r18));
                      continue;
                    }
                    if (!a.has(_t44)) {
                      ((u = Ne(ke(_t44))),
                        te(_t44, s.element),
                        f++,
                        c["delete"](_t44),
                        $t(_r18));
                      continue;
                    }
                    if (c.has(_o18)) {
                      var _t45 = ji(It, _o18);
                      (_t45 !== u &&
                        s
                          .withBefore(u != null ? u : s.before)
                          .insertChild(_t45),
                        (u = Ne(Se(_o18, s.element))),
                        f++,
                        d++);
                    } else
                      (ge(_o18, s.withBefore(u != null ? u : s.before)), d++);
                  }
                  var _i10 = Gt.get(_o18);
                  (null !== _i10 && Lo(_i10)
                    ? null === Rt &&
                      ((Rt = _i10.getFormat()),
                      (Lt = _i10.getStyle()),
                      (Kt = _i10.__key))
                    : gs(_i10) && d <= l && !_i10.isInline() && (Ft += v),
                    $t(_r18));
                }
                var h = f > i,
                  g = d > l;
                if (h && !g) {
                  var _e43 = n[l + 1],
                    _o19 = void 0 === _e43 ? null : It.getElementByKey(_e43);
                  _e(n, t, d, l, s.withBefore(_o19 != null ? _o19 : s.before));
                } else g && !h && ee(e, f, i, s.element);
              })(n, _r17, _c3, s, i, o);
          }
          ((c.__lexicalTextContent = Ft),
            (c.__lexicalFirstTextKey = Kt),
            (Ft = r + Ft));
        })(e, n, Rl(n, o, It)),
        nl(n) ||
          ((r = n),
          null == Rt || Rt === r.__textFormat || Zt || r.setTextFormat(Rt),
          (function (t) {
            null == Lt || Lt === t.__textStyle || Zt || t.setTextStyle(Lt);
          })(n)));
    }
    function Ce(t, e, n) {
      var o = e.__lexicalFirstTextKey;
      if (null != o) {
        var _e44 = t.__key;
        var _r19 = o;
        for (; null !== _r19; ) {
          var _t46 = Gt.get(_r19);
          if (void 0 === _t46) {
            _r19 = null;
            break;
          }
          if (_t46.__parent === _e44) break;
          _r19 = _t46.__parent;
        }
        if (null !== _r19 && !n.has(_r19)) {
          var _t47 = Gt.get(o);
          if (Lo(_t47))
            return ((Rt = _t47.getFormat()), void (Lt = _t47.getStyle()));
        }
      }
      e.__lexicalFirstTextKey = Kt;
    }
    function Se(e, n) {
      var o = jt.get(e);
      var r = Gt.get(e);
      (void 0 !== o && void 0 !== r) || t(61);
      var s = Qt || Ht.has(e) || Ut.has(e),
        i = ji(It, e);
      if (o === r && !s) {
        var _e45;
        if (gs(o)) {
          var _n32 = i.__lexicalTextContent;
          ("string" != typeof _n32 && t(355, o.getType()),
            (_e45 = _n32),
            zt(i));
        } else _e45 = o.getTextContent();
        return ((Ft += _e45), i);
      }
      if (
        (o !== r && s && $i(qt, Pt, Wt, r, "updated"),
        Xt.$updateDOM(r, o, i, It))
      ) {
        var _o20 = ge(e, null);
        return (
          null === n && t(62),
          n.replaceChild(_o20, i),
          te(e, null),
          _o20
        );
      }
      if (gs(o)) {
        gs(r) || t(334, e);
        var _n33 = r.__indent;
        (Qt || _n33 !== o.__indent) && re(i, _n33);
        var _l4 = r.__format;
        (Qt || _l4 !== o.__format) && se(i, _l4);
        var _c4 = s && (ue(r).size > 0 || ue(o).size > 0) ? he(o, r, i) : "";
        if (s) {
          var _t48 = Ft;
          if (
            (xe(o, r, i),
            r.isInline() || (xs(r) || ye(0, r, i), me(r, i)),
            "" !== _c4)
          ) {
            var _e46 = i.__lexicalTextContent || "";
            ((i.__lexicalTextContent = _c4 + _e46),
              (Ft = _t48 + _c4 + _e46),
              (i.__lexicalSlotTextLength = _c4.length));
          } else
            (ue(r).size > 0 || ue(o).size > 0) &&
              (i.__lexicalSlotTextLength = 0);
        } else {
          var _e47 = i.__lexicalTextContent;
          ("string" != typeof _e47 && t(356, o.getType()), (Ft += _e47), zt(i));
        }
        if (
          (Qt || r.__dir !== o.__dir || r.__parent !== o.__parent) &&
          (ie(i, r), xs(r) && !Qt)
        )
          for (var _t49 of r.getChildren())
            if (gs(_t49)) {
              ie(ji(It, _t49.getKey()), _t49);
            }
      } else {
        var _t50 = r.getTextContent();
        if (ms(r)) {
          var _t51 = r.decorate(It, wt);
          (null !== _t51 && Te(e, _t51),
            s && (ue(r).size > 0 || ue(o).size > 0) && he(o, r, i));
        }
        Ft += _t50;
      }
      if (!Zt && xs(r)) {
        var _t52 = r.getLatest();
        if (_t52.__cachedText !== Ft) {
          var _e48 = _t52.getWritable();
          ((_e48.__cachedText = Ft), (r = _e48));
        }
      }
      return (Xt.$decorateDOM(r, o, i, It), At(r), i);
    }
    function Te(t, e) {
      var n = It._pendingDecorators;
      var o = It._decorators;
      if (null === n) {
        if (o[t] === e) return;
        n = Ci(It);
      }
      n[t] = e;
    }
    function Ne(t) {
      var e = t.nextSibling;
      return (
        null !== e && e === It._blockCursorElement && (e = e.nextSibling),
        e
      );
    }
    function ve(t, e) {
      var n = new Set();
      for (var _o21 = e; _o21 < t.length; _o21++) n.add(t[_o21]);
      return n;
    }
    function Ee(t, e, n, o, r, s) {
      ((Ft = ""),
        (Rt = null),
        (Lt = null),
        (Kt = null),
        (Qt = 2 === o),
        (It = n),
        (wt = n._config),
        (Xt = n._config.dom || $s),
        (Pt = n._nodes),
        (Wt = It._listeners.mutation),
        (Ut = r),
        (Ht = s),
        (jt = t._nodeMap),
        (Yt = t),
        (Gt = e._nodeMap),
        (Zt = e._readOnly),
        (Jt = q(n._keyToDOMMap)),
        (Vt = (function () {
          var t = new Map(),
            e = function e(_e50) {
              for (var _n34 of _e50) {
                var _e49 = Gt.get(_n34);
                if (void 0 === _e49) continue;
                var _o22 = _e49.__parent;
                if (null === _o22) continue;
                var _r20 = t.get(_o22);
                (void 0 === _r20 && ((_r20 = new Set()), t.set(_o22, _r20)),
                  _r20.add(_n34));
              }
            };
          return (e(Ut.keys()), e(Ht), t);
        })()));
      var i = new Map();
      return (
        (qt = i),
        Se("root", null),
        (It = void 0),
        (Pt = void 0),
        (Ut = void 0),
        (Ht = void 0),
        (jt = void 0),
        (Yt = void 0),
        (Gt = void 0),
        (wt = void 0),
        (Jt = void 0),
        (Vt = void 0),
        (qt = void 0),
        (Xt = $s),
        i
      );
    }
    function ke(e) {
      var n = Jt.get(e);
      return (void 0 === n && t(75, e), n);
    }
    function Oe(t) {
      return { type: t };
    }
    var be = Oe("SELECTION_CHANGE_COMMAND"),
      Me = Oe("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"),
      Ae = Oe("CLICK_COMMAND"),
      De = Oe("BEFORE_INPUT_COMMAND"),
      we = Oe("INPUT_COMMAND"),
      Ie = Oe("COMPOSITION_START_COMMAND"),
      Pe = Oe("COMPOSITION_END_COMMAND"),
      Fe = Oe("DELETE_CHARACTER_COMMAND"),
      Re = Oe("INSERT_LINE_BREAK_COMMAND"),
      Le = Oe("INSERT_PARAGRAPH_COMMAND"),
      Ke = Oe("CONTROLLED_TEXT_INSERTION_COMMAND"),
      Be = Oe("PASTE_COMMAND"),
      $e = Oe("REMOVE_TEXT_COMMAND"),
      ze = Oe("DELETE_WORD_COMMAND"),
      We = Oe("DELETE_LINE_COMMAND"),
      Ue = Oe("FORMAT_TEXT_COMMAND"),
      He = Oe("SET_TEXT_FORMAT_COMMAND"),
      je = Oe("UNDO_COMMAND"),
      Ye = Oe("REDO_COMMAND"),
      Ge = Oe("KEYDOWN_COMMAND"),
      Je = Oe("KEY_ARROW_RIGHT_COMMAND"),
      Ve = Oe("MOVE_TO_END"),
      qe = Oe("KEY_ARROW_LEFT_COMMAND"),
      Xe = Oe("MOVE_TO_START"),
      Qe = Oe("KEY_ARROW_UP_COMMAND"),
      Ze = Oe("KEY_ARROW_DOWN_COMMAND"),
      tn = Oe("KEY_ENTER_COMMAND"),
      en = Oe("KEY_SPACE_COMMAND"),
      nn = Oe("KEY_BACKSPACE_COMMAND"),
      on = Oe("KEY_ESCAPE_COMMAND"),
      rn = Oe("KEY_DELETE_COMMAND"),
      sn = Oe("KEY_TAB_COMMAND"),
      ln = Oe("INSERT_TAB_COMMAND"),
      cn = Oe("INDENT_CONTENT_COMMAND"),
      an = Oe("OUTDENT_CONTENT_COMMAND"),
      un = Oe("DROP_COMMAND"),
      fn = Oe("FORMAT_ELEMENT_COMMAND"),
      dn = Oe("DRAGSTART_COMMAND"),
      hn = Oe("DRAGOVER_COMMAND"),
      gn = Oe("DRAGEND_COMMAND"),
      _n = Oe("COPY_COMMAND"),
      pn = Oe("CUT_COMMAND"),
      mn = Oe("SELECT_ALL_COMMAND"),
      yn = Oe("CLEAR_EDITOR_COMMAND"),
      xn = Oe("CLEAR_HISTORY_COMMAND"),
      Cn = Oe("CAN_REDO_COMMAND"),
      Sn = Oe("CAN_UNDO_COMMAND"),
      Tn = Oe("FOCUS_COMMAND"),
      Nn = Oe("BLUR_COMMAND"),
      vn = Oe("KEY_MODIFIER_COMMAND");
    function En(t) {
      var e = new Map();
      return {
        dispose: function dispose() {
          for (var _t53 of e.values()) _t53.dispose();
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
    function kn(t, e, n, o) {
      return (
        t.addEventListener(e, n, o),
        t.removeEventListener.bind(t, e, n, o)
      );
    }
    var On = Object.freeze({}),
      bn = [
        [
          "keydown",
          function (t, e) {
            var n = e._inputState;
            ((n.lastKeyDownTimeStamp = t.timeStamp),
              (n.lastKeyCode = t.key),
              "Backspace" !== t.key && Bn(n));
            if (e.isComposing()) return;
            Hi(e, Ge, t);
          },
        ],
        [
          "pointerdown",
          function (t, e) {
            var n = El(t),
              o = t.pointerType;
            Ol(n) &&
              "touch" !== o &&
              "pen" !== o &&
              0 === t.button &&
              fs(e, function () {
                Vl(n, e) || (e._inputState.isSelectionChangeFromMouseDown = !0);
              });
          },
        ],
        [
          "compositionstart",
          function (t, e) {
            Hi(e, Ie, t);
          },
        ],
        [
          "compositionend",
          function (t, e) {
            var n = e._inputState;
            s
              ? (n.compositionPhase = "ending-firefox")
              : l || (!a && !d)
                ? Hi(e, Pe, t)
                : ((n.compositionPhase = "ending-safari"),
                  (n.compositionEndData = t.data));
          },
        ],
        [
          "input",
          function (t, e) {
            t.stopPropagation();
            var n = e._inputState;
            (Bn(n),
              fs(
                e,
                function () {
                  zn(t, e) || e.dispatchCommand(we, t);
                },
                { event: t },
              ),
              (n.unprocessedBeforeInputData = null));
          },
        ],
        [
          "click",
          function (t, e) {
            fs(e, function () {
              var n = Sr(),
                o = al(Qi(e)),
                r = Tr();
              if (o)
                if (qo(n)) {
                  var _t54 = n.anchor,
                    _e51 = _t54.getNode();
                  "element" === _t54.type &&
                    0 === _t54.offset &&
                    n.isCollapsed() &&
                    !xs(_e51) &&
                    1 === Ti().getChildrenSize() &&
                    _e51.getTopLevelElementOrThrow().isEmpty() &&
                    null !== r &&
                    n.is(r) &&
                    (o.removeAllRanges(), (n.dirty = !0));
                } else if (
                  "touch" === t.pointerType ||
                  "pen" === t.pointerType
                ) {
                  var _n35 = xl(o, e._rootElement).anchorNode;
                  if (kl(_n35) || si(_n35)) {
                    Ni(Cr(r, o, e, t));
                  }
                }
              if (s && null !== o && 0 === o.rangeCount) {
                var _n36 = e._rootElement;
                if (null !== _n36 && t.target === _n36) {
                  var _s15 = t.clientY;
                  var _i11 = _n36.childNodes.length;
                  for (var _t55 = 0; _t55 < _n36.childNodes.length; _t55++) {
                    var _e52 = _n36.childNodes[_t55];
                    if (kl(_e52)) {
                      var _n37 = _e52.getBoundingClientRect();
                      if (_s15 <= (_n37.top + _n37.bottom) / 2) {
                        _i11 = _t55;
                        break;
                      }
                    }
                  }
                  o.setBaseAndExtent(_n36, _i11, _n36, _i11);
                  var _l5 = Cr(r, o, e, t);
                  null !== _l5 ? Ni(_l5) : o.removeAllRanges();
                }
              }
              Hi(e, Ae, t);
            });
          },
        ],
        ["cut", On],
        ["copy", On],
        ["dragstart", On],
        ["dragover", On],
        ["dragend", On],
        ["paste", On],
        ["focus", On],
        ["blur", On],
        ["drop", On],
      ];
    i &&
      bn.push([
        "beforeinput",
        function (t, e) {
          return (function (t, e) {
            var n = t.inputType;
            if ("deleteCompositionText" === n || (s && Ui(e))) return;
            if ("insertCompositionText" === n) return;
            fs(
              e,
              function () {
                zn(t, e) || Hi(e, De, t);
              },
              { event: t },
            );
          })(t, e);
        },
      ]);
    var Mn = new WeakMap(),
      An = new WeakMap(),
      Dn = En(function (t) {
        return (
          t.addEventListener("selectionchange", Xn),
          function () {
            return t.removeEventListener("selectionchange", Xn);
          }
        );
      });
    function wn(t, e, n, o, r, s) {
      var l = t.anchor,
        c = t.focus,
        a = l.getNode(),
        u = qr();
      var f;
      if (void 0 !== s) f = s;
      else {
        var _t56 = al(Qi(u));
        f = null !== _t56 ? xl(_t56, u._rootElement) : null;
      }
      var d = null !== f ? f.anchorNode : null,
        h = l.key,
        g = u.getElementByKey(h),
        _ = n.length;
      return (
        h !== c.key ||
        !Lo(a) ||
        (((!r &&
          (!i || u._inputState.lastBeforeInputInsertTextTimeStamp < o + 50)) ||
          (a.isDirty() && _ < 2) ||
          ki(n)) &&
          l.offset !== c.offset &&
          !a.isComposing()) ||
        ri(a) ||
        (a.isDirty() && _ > 1) ||
        ((r || !i) && null !== g && !a.isComposing() && d !== Kl(a, g, u)) ||
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
            r = oi(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!o.canInsertTextBefore() && !e.isComposing()) ||
                r ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (Lo(e) || (gs(e) && e.isInline())) &&
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
    function In(t, e) {
      return (
        si(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function Pn(e, n, o) {
      var _xl = xl(e, n._rootElement),
        r = _xl.anchorNode,
        s = _xl.anchorOffset,
        i = _xl.focusNode,
        l = _xl.focusOffset,
        c = n._inputState;
      if (c.isSelectionChangeFromDOMUpdate) {
        c.isSelectionChangeFromDOMUpdate = !1;
        var _t57 = c.selectionChangeFromDOMUpdatePoints;
        if (
          ((c.selectionChangeFromDOMUpdatePoints = null),
          In(r, s) &&
            In(i, l) &&
            !c.postDeleteSelectionToRestore &&
            (null === _t57 ||
              (_t57.anchorNode === r &&
                _t57.anchorOffset === s &&
                _t57.focusNode === i &&
                _t57.focusOffset === l)))
        )
          return;
      }
      fs(n, function () {
        if (!o) return void Ni(null);
        if (!Zs(n, r, i)) return;
        var a = Sr();
        if (c.postDeleteSelectionToRestore && qo(a) && a.isCollapsed()) {
          var _t58 = a.anchor,
            _e53 = c.postDeleteSelectionToRestore.anchor;
          ((_t58.key === _e53.key && _t58.offset === _e53.offset + 1) ||
            (1 === _t58.offset &&
              _e53.getNode().is(_t58.getNode().getPreviousSibling()))) &&
            ((a = c.postDeleteSelectionToRestore.clone()), Ni(a));
        }
        if (((c.postDeleteSelectionToRestore = null), qo(a))) {
          var _o23 = a.anchor,
            _u3 = _o23.getNode();
          if (a.isCollapsed()) {
            "Range" === e.type && r === i && (a.dirty = !0);
            var _s16 = Qi(n).event,
              _l6 = _s16 ? _s16.timeStamp : performance.now(),
              _c$collapsedSelection = c.collapsedSelectionFormat,
              _f3 = _c$collapsedSelection.format,
              _d3 = _c$collapsedSelection.style,
              _h3 = _c$collapsedSelection.offset,
              _g3 = _c$collapsedSelection.key,
              _4 = _c$collapsedSelection.timeStamp,
              _p2 = Ti(),
              _m = !1 === n.isComposing() && "" === _p2.getTextContent();
            if (_l6 < _4 + 200 && _o23.offset === _h3 && _o23.key === _g3)
              Fn(a, _f3, _d3);
            else if ("text" === _o23.type) (Lo(_u3) || t(141), Rn(a, _u3));
            else if ("element" === _o23.type && !_m) {
              gs(_u3) || t(259);
              var _e54 = _o23.getNode();
              _e54.isEmpty()
                ? (function (t, e) {
                    var n = e.getTextFormat(),
                      o = e.getTextStyle();
                    Fn(t, n, o);
                  })(a, _e54)
                : Fn(a, a.format, "");
            }
          } else {
            var _t59 = _o23.key,
              _e55 = a.focus.key,
              _n38 = a.getNodes(),
              _r21 = _n38.length,
              _i12 = a.isBackward(),
              _c5 = _i12 ? l : s,
              _u4 = _i12 ? s : l,
              _f4 = _i12 ? _e55 : _t59,
              _d4 = _i12 ? _t59 : _e55;
            var _h4 = 2047,
              _g4 = !1;
            for (var _t60 = 0; _t60 < _r21; _t60++) {
              var _e56 = _n38[_t60],
                _o24 = _e56.getTextContentSize();
              if (
                Lo(_e56) &&
                0 !== _o24 &&
                !(
                  (0 === _t60 && _e56.__key === _f4 && _c5 === _o24) ||
                  (_t60 === _r21 - 1 && _e56.__key === _d4 && 0 === _u4)
                ) &&
                ((_g4 = !0), (_h4 &= _e56.getFormat()), 0 === _h4)
              )
                break;
            }
            a.format = _g4 ? _h4 : 0;
          }
        }
        Hi(n, be);
      });
    }
    function Fn(t, e, n) {
      (t.format === e && t.style === n) ||
        ((t.format = e), (t.style = n), (t.dirty = !0));
    }
    function Rn(t, e) {
      Fn(t, e.getFormat(), e.getStyle());
    }
    function Ln(t) {
      if (!t.getTargetRanges) return null;
      var e = t.getTargetRanges();
      return 0 === e.length ? null : e[0];
    }
    function Kn(t) {
      var e = qr()._inputState.lastKeyCode;
      if (null == t || t.length <= 1 || null == e) return;
      var n =
        1 === e.length ? e : "Enter" === e ? "\n" : "Tab" === e ? "\t" : null;
      if (!n) return;
      var o = Sr();
      if (!qo(o) || !o.isCollapsed()) return;
      var r = o.anchor.getNode();
      if (!Lo(r)) return;
      var s = o.anchor.offset;
      if (r.getTextContentSize() === s) {
        var _t61 = r.getNextSibling();
        if ("\n" === n) {
          if (l) return;
          if (bs(_t61)) _t61.selectEnd();
          else if (!_t61) {
            var _t62 = ec(r, pr),
              _e57 = _t62 && _t62.getNextSibling();
            gs(_e57) && _e57.selectStart();
          }
        } else
          "\t" === n
            ? zo(_t61) && _t61.selectEnd()
            : Lo(_t61) && _t61.getTextContent()[0] === n && _t61.select(1, 1);
      } else r.getTextContent()[s] === n && r.select(s + 1, s + 1);
    }
    function Bn(t) {
      ((t.isInsertTextAfterHandledSelectionCommand = !1),
        null !== t.handledSelectionCommandTimeoutId &&
          (clearTimeout(t.handledSelectionCommandTimeoutId),
          (t.handledSelectionCommandTimeoutId = null)));
    }
    function $n(t) {
      (Bn(t),
        (t.isInsertTextAfterHandledSelectionCommand = !0),
        (t.handledSelectionCommandTimeoutId = setTimeout(function () {
          return Bn(t);
        }, 0)));
    }
    function zn(t, e) {
      var n = El(t);
      if (kl(n) && Vl(n, e)) return !0;
      var o = e.getRootElement();
      if (null === o) return !1;
      var r = vl(o.ownerDocument);
      return null !== r && o.contains(r) && Vl(r, e);
    }
    function Wn(e) {
      var _ref25;
      var n = e.inputType,
        o = Ln(e),
        r = qr(),
        s = r._inputState,
        i = Sr();
      if (
        "insertText" === n &&
        e.data &&
        s.isInsertTextAfterHandledSelectionCommand
      ) {
        if ((Bn(s), e.preventDefault(), qo(i) && !i.isCollapsed())) {
          var _t63 = i.isBackward() ? i.anchor : i.focus;
          (i.anchor.set(_t63.key, _t63.offset, _t63.type),
            i.focus.set(_t63.key, _t63.offset, _t63.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === i) {
          var _t64 = Tr();
          if (!qo(_t64)) return !0;
          Ni(_t64.clone());
        }
        if (qo(i)) {
          var _n39 = i.anchor.key === i.focus.key;
          if (
            (function (t, e) {
              return (
                "MediaLast" === t.lastKeyCode && e < t.lastKeyDownTimeStamp + 30
              );
            })(s, e.timeStamp) &&
            r.isComposing() &&
            _n39
          ) {
            if (
              (hi(null),
              (s.lastKeyDownTimeStamp = 0),
              setTimeout(function () {
                fs(r, function () {
                  hi(null);
                });
              }, 30),
              qo(i))
            ) {
              var _e58 = i.anchor.getNode();
              (_e58.markDirty(), Lo(_e58) || t(142), Rn(i, _e58));
            }
          } else {
            if (
              (hi(null),
              l &&
                null !== o &&
                !o.collapsed &&
                (i.applyDOMRange(o), !i.isCollapsed()))
            )
              return (e.preventDefault(), i.removeText(), !0);
            e.preventDefault();
            var _t65 = i.anchor.getNode(),
              _c6 = _t65.getTextContent(),
              _a3 = _t65.canInsertTextAfter(),
              _u5 = 0 === i.anchor.offset && i.focus.offset === _c6.length;
            var _d5 = f && _n39 && !_u5 && _a3;
            if (
              (_d5 && i.isCollapsed() && (_d5 = !ms(Wi(i.anchor, !0))), !_d5)
            ) {
              Hi(r, Fe, !0);
              var _t66 = Sr();
              f &&
                qo(_t66) &&
                _t66.isCollapsed() &&
                ((s.postDeleteSelectionToRestore = _t66),
                setTimeout(function () {
                  return (s.postDeleteSelectionToRestore = null);
                }));
            }
          }
          return !0;
        }
      }
      if (!qo(i)) return !0;
      var c = e.data;
      (null !== s.unprocessedBeforeInputData &&
        Ai(!1, r, s.unprocessedBeforeInputData),
        (i.dirty && null === s.unprocessedBeforeInputData) ||
          !i.isCollapsed() ||
          xs(i.anchor.getNode()) ||
          null === o ||
          i.applyDOMRange(o),
        (s.unprocessedBeforeInputData = null));
      var a = i.anchor,
        u = i.focus,
        d = a.getNode(),
        h = u.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === c) (e.preventDefault(), Hi(r, Re, !1));
        else if (c === v) (e.preventDefault(), Hi(r, Le));
        else if (null == c && e.dataTransfer) {
          var _t67 = e.dataTransfer.getData("text/plain");
          (e.preventDefault(), i.insertRawText(_t67));
        } else
          null != c && wn(i, o, c, e.timeStamp, !0)
            ? (e.preventDefault(), Hi(r, Ke, c), Kn(c))
            : (s.unprocessedBeforeInputData = c);
        return ((s.lastBeforeInputInsertTextTimeStamp = e.timeStamp), !0);
      }
      switch ((e.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          Hi(r, Ke, e);
          Kn(
            (_ref25 = e.dataTransfer
              ? e.dataTransfer.getData("text/plain")
              : null) != null
              ? _ref25
              : e.data,
          );
          break;
        case "insertFromComposition": {
          var _t68 = s.hadOrphanedCompositionEvents;
          s.hadOrphanedCompositionEvents = !1;
          var _n40 = r._compositionKey;
          (hi(null), _t68 || Hi(r, Ke, e), Yn(_n40));
          break;
        }
        case "insertLineBreak":
          (hi(null), Hi(r, Re, !1));
          break;
        case "insertParagraph":
          (hi(null),
            s.isInsertLineBreak && !l
              ? ((s.isInsertLineBreak = !1), Hi(r, Re, !1))
              : Hi(r, Le));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          Hi(r, Be, e);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || gs(t) || gs(e) || !oi(t) || !oi(e);
          })(d, h) && Hi(r, $e, e);
          break;
        case "deleteByDrag":
          (Ji(ho), Hi(r, $e, e));
          break;
        case "deleteByCut":
          Hi(r, $e, e);
          break;
        case "deleteContent":
          Hi(r, Fe, !1);
          break;
        case "deleteWordBackward":
          Hi(r, ze, !0);
          break;
        case "deleteWordForward":
          Hi(r, ze, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          Hi(r, We, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          Hi(r, We, !1);
          break;
        case "formatStrikeThrough":
          Hi(r, Ue, "strikethrough");
          break;
        case "formatBold":
          Hi(r, Ue, "bold");
          break;
        case "formatItalic":
          Hi(r, Ue, "italic");
          break;
        case "formatUnderline":
          Hi(r, Ue, "underline");
          break;
        case "historyUndo":
          Hi(r, je);
          break;
        case "historyRedo":
          Hi(r, Ye);
      }
      return !0;
    }
    function Un(t) {
      var e = qr(),
        n = e._inputState,
        o = Sr(),
        r = t.data,
        l = Ln(t);
      var c = !1;
      if (null != r && qo(o)) {
        var _a4 = al(Qi(e)),
          _u6 = null !== _a4 ? xl(_a4, e._rootElement) : null,
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
            Lo(_h5) &&
            ri(_h5);
        if (!_d6 && !_g5 && wn(o, l, r, t.timeStamp, !1, _u6)) {
          if (((c = !0), "ending-firefox" === n.compositionPhase)) {
            var _t69 = Gn(e, r);
            if (((n.compositionPhase = "idle"), _t69))
              return (Ji(_o), vi(), !0);
          }
          var _l7 = o.anchor.getNode();
          if (null === _a4 || null === _u6) return !0;
          var _d7 = o.isBackward(),
            _h6 = _d7 ? o.anchor.offset : o.focus.offset,
            _g6 = _d7 ? o.focus.offset : o.anchor.offset;
          (i &&
            !o.isCollapsed() &&
            Lo(_l7) &&
            null !== _u6.anchorNode &&
            _l7.getTextContent().slice(0, _h6) +
              r +
              _l7.getTextContent().slice(_h6 + _g6) ===
              Mi(_u6.anchorNode)) ||
            Hi(e, Ke, r);
          var _5 = r.length;
          (s &&
            _5 > 1 &&
            "insertCompositionText" === t.inputType &&
            !e.isComposing() &&
            ((o.anchor.offset -= _5),
            (o._cachedNodes = null),
            (o._cachedIsBackward = null)),
            f && e.isComposing() && ((n.lastKeyDownTimeStamp = 0), hi(null)));
        }
      }
      if (!c) {
        (Ai(!1, e, null !== r ? r : void 0),
          "ending-firefox" === n.compositionPhase &&
            (Gn(e, r || void 0), Ji(_o), (n.compositionPhase = "idle")));
      }
      return (vi(), !0);
    }
    function Hn(t) {
      var e = qr(),
        n = e._inputState,
        o = Sr();
      if (qo(o) && !e.isComposing()) {
        ((n.compositionPhase = "composing"),
          (n.hadOrphanedCompositionEvents = !1));
        var _r22 = o.anchor,
          _s17 = o.anchor.getNode();
        if (
          (hi(_r22.key),
          Ji(go),
          t.timeStamp < n.lastKeyDownTimeStamp + 30 ||
            "element" === _r22.type ||
            !o.isCollapsed() ||
            (!f &&
              (_s17.getFormat() !== o.format ||
                (Lo(_s17) && _s17.getStyle() !== o.style))) ||
            (Lo(_s17) &&
              (ri(_s17) ||
                (0 === _r22.offset && !_s17.canInsertTextBefore()) ||
                (_r22.offset === _s17.getTextContentSize() &&
                  !_s17.canInsertTextAfter()))))
        ) {
          Hi(e, Ke, E);
          var _t70 = Sr();
          qo(_t70) && hi(_t70.anchor.key);
        }
      }
      return !0;
    }
    function jn(t) {
      var e = qr();
      return (
        (e._inputState.compositionPhase = "idle"),
        Gn(e, t.data),
        Ji(_o),
        !0
      );
    }
    function Yn(t) {
      if (null === t) return;
      var e = _i(t);
      if (!Lo(e) || "text" === e.getType() || ri(e) || !e.isAttached()) return;
      var n = Sr(),
        o = qo(n) && n.anchor.key === t ? n.anchor.offset : null,
        r = Ro(e.getTextContent());
      if (
        (r.setFormat(e.getFormat()),
        r.setStyle(e.getStyle()),
        e.replace(r),
        null !== o)
      ) {
        var _t71 = Math.min(o, r.getTextContentSize());
        r.select(_t71, _t71);
      }
    }
    function Gn(t, e) {
      var n = t._compositionKey;
      if ((hi(null), null !== n && null != e)) {
        if ("" === e) {
          var _e59 = _i(n),
            _o25 = t.getElementByKey(n),
            _r23 = null !== _o25 && Lo(_e59) ? Kl(_e59, _o25, t) : null;
          if (null !== _r23 && null !== _r23.nodeValue && Lo(_e59)) {
            var _n41 = al(Qi(t)),
              _o26 = _n41 && xl(_n41, t._rootElement);
            var _s18 = null,
              _i13 = null;
            (null !== _o26 &&
              _o26.anchorNode === _r23 &&
              ((_s18 = _o26.anchorOffset), (_i13 = _o26.focusOffset)),
              Di(_e59, _r23.nodeValue, _s18, _i13, !0));
          }
          return (Yn(n), !1);
        }
        if ("\n" === e[e.length - 1]) {
          var _e60 = Sr();
          if (qo(_e60) || Qo(_e60)) {
            if (qo(_e60)) {
              var _t72 = _e60.focus;
              _e60.anchor.set(_t72.key, _t72.offset, _t72.type);
            }
            return (Hi(t, tn, null), Yn(n), !1);
          }
        }
        var _o27 = _i(n);
        if (null !== _o27 && Lo(_o27) && ri(_o27)) {
          _o27.markDirty();
          var _t73 = Sr(),
            _r24 = _o27.getTextContentSize(),
            _s19 =
              qo(_t73) && _t73.anchor.key === n ? _t73.anchor.offset : _r24;
          return (_o27.select(_s19, _s19).insertText(e), !0);
        }
      }
      return (Ai(!0, t, e), Yn(n), !1);
    }
    function Jn(t) {
      var e = qr(),
        n = e._inputState;
      if (null == t.key) return !0;
      if ("ending-safari" === n.compositionPhase) {
        var _o28 = Ki(t);
        if (
          (_o28 &&
            fs(e, function () {
              Gn(e, n.compositionEndData);
            }),
          (n.compositionPhase = "idle"),
          (n.compositionEndData = ""),
          _o28)
        )
          return !0;
      }
      if (
        (function (t) {
          return Fi(t, "ArrowRight", { shiftKey: "any" });
        })(t)
      )
        Hi(e, Je, t);
      else if (
        (function (t) {
          return Fi(
            t,
            "ArrowRight",
            babelHelpers["extends"]({}, Ri, { shiftKey: "any" }),
          );
        })(t)
      )
        Hi(e, Ve, t);
      else if (
        (function (t) {
          return Fi(t, "ArrowLeft", { shiftKey: "any" });
        })(t)
      )
        Hi(e, qe, t);
      else if (
        (function (t) {
          return Fi(
            t,
            "ArrowLeft",
            babelHelpers["extends"]({}, Ri, { shiftKey: "any" }),
          );
        })(t)
      )
        Hi(e, Xe, t);
      else if (
        (function (t) {
          return Fi(t, "ArrowUp", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        Hi(e, Qe, t);
      else if (
        (function (t) {
          return Fi(t, "ArrowDown", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        Hi(e, Ze, t);
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
        ((n.isInsertLineBreak = !0), Hi(e, tn, t));
      else if (
        (function (t) {
          return " " === t.key;
        })(t)
      )
        Hi(e, en, t);
      else if (
        (function (t) {
          return r && Fi(t, "o", { ctrlKey: !0 });
        })(t)
      )
        (t.preventDefault(), (n.isInsertLineBreak = !0), Hi(e, Re, !0));
      else if (
        (function (t) {
          return Fi(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
          });
        })(t)
      )
        ((n.isInsertLineBreak = !1), Hi(e, tn, t));
      else if (
        (function (t) {
          return (
            Fi(t, "Backspace", { shiftKey: "any" }) ||
            (r && Fi(t, "h", { ctrlKey: !0 }))
          );
        })(t)
      )
        Ki(t) ? Hi(e, nn, t) && $n(n) : (t.preventDefault(), Hi(e, Fe, !0));
      else if (
        (function (t) {
          return "Escape" === t.key;
        })(t)
      )
        Hi(e, on, t);
      else if (
        (function (t) {
          return Fi(t, "Delete", {}) || (r && Fi(t, "d", { ctrlKey: !0 }));
        })(t)
      )
        !(function (t) {
          return "Delete" === t.key;
        })(t)
          ? (t.preventDefault(), Hi(e, Fe, !1))
          : Hi(e, rn, t);
      else if (
        (function (t) {
          return Fi(t, "Backspace", Li);
        })(t)
      )
        (t.preventDefault(), Hi(e, ze, !0));
      else if (
        (function (t) {
          return Fi(t, "Delete", Li);
        })(t)
      )
        (t.preventDefault(), Hi(e, ze, !1));
      else if (
        (function (t) {
          return r && Fi(t, "Backspace", { metaKey: !0 });
        })(t)
      )
        (t.preventDefault(), Hi(e, We, !0));
      else if (
        (function (t) {
          return (
            r &&
            (Fi(t, "Delete", { metaKey: !0 }) || Fi(t, "k", { ctrlKey: !0 }))
          );
        })(t)
      )
        (t.preventDefault(), Hi(e, We, !1));
      else if (
        (function (t) {
          return Fi(t, "b", Ri);
        })(t)
      )
        (t.preventDefault(), Hi(e, Ue, "bold"));
      else if (
        (function (t) {
          return Fi(t, "u", Ri);
        })(t)
      )
        (t.preventDefault(), Hi(e, Ue, "underline"));
      else if (
        (function (t) {
          return Fi(t, "i", Ri);
        })(t)
      )
        (t.preventDefault(), Hi(e, Ue, "italic"));
      else if (
        (function (t) {
          return Fi(t, "Tab", { shiftKey: "any" });
        })(t)
      )
        Hi(e, sn, t);
      else if (
        (function (t) {
          return Fi(t, "z", Ri);
        })(t)
      )
        (t.preventDefault(), Hi(e, je));
      else if (
        (function (t) {
          if (r) return Fi(t, "z", { metaKey: !0, shiftKey: !0 });
          return (
            Fi(t, "y", { ctrlKey: !0 }) ||
            Fi(t, "z", { ctrlKey: !0, shiftKey: !0 })
          );
        })(t)
      )
        (t.preventDefault(), Hi(e, Ye));
      else {
        var _o29 = e._editorState._selection;
        !(function (t) {
          return Fi(t, "a", Ri);
        })(t)
          ? null === _o29 ||
            qo(_o29) ||
            (!(function (t) {
              return Fi(t, "c", Ri);
            })(t)
              ? (function (t) {
                  return Fi(t, "x", Ri);
                })(t) && (t.preventDefault(), Hi(e, pn, t))
              : (t.preventDefault(), Hi(e, _n, t)))
          : (t.preventDefault(), Hi(e, mn, t) && $n(n));
      }
      return (
        (function (t) {
          return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey;
        })(t) && e.dispatchCommand(vn, t),
        !0
      );
    }
    function Vn(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    var qn = new Map();
    function Xn(t) {
      var e = ul(t.target);
      if (null === e) return;
      var n = Gi(t.target);
      var o = null,
        r = null;
      var s = null !== n ? An.get(n) : void 0;
      if (null !== n) {
        if (void 0 !== s) {
          var _t74 = s.editors;
          var _n42 = s.hasShadowEditor;
          if (void 0 === _n42) {
            _n42 = !1;
            for (var _e61 of _t74)
              if (
                null !== _e61._rootElement &&
                fl(_e61._rootElement.getRootNode())
              ) {
                _n42 = !0;
                break;
              }
            s.hasShadowEditor = _n42;
          }
          if (_n42) {
            var _n43 = null,
              _s20 = null;
            for (var _i14 of _t74) {
              var _t75 = _i14._rootElement;
              if (null === _t75) continue;
              var _l8 = xl(e, _t75).anchorNode;
              if (null !== _l8 && ei(_l8) === _i14) {
                if (fl(_t75.getRootNode())) {
                  ((o = _i14), (r = _l8));
                  break;
                }
                null === _n43 && ((_n43 = _i14), (_s20 = _l8));
              }
            }
            null === o && null !== _n43 && ((o = _n43), (r = _s20));
          } else {
            var _t76 = e.anchorNode;
            null === _t76 ||
              (kl(_t76) && null !== _t76.shadowRoot) ||
              ((o = ei(_t76)), null !== o && (r = _t76));
          }
        }
        if (null === o) {
          var _t77 = vl(n);
          o = null !== _t77 ? ei(_t77) : null;
        }
      }
      if (null === o) return;
      if (o._inputState.isSelectionChangeFromMouseDown) {
        if (void 0 !== s)
          for (var _t78 of s.editors)
            _t78._inputState.isSelectionChangeFromMouseDown = !1;
        fs(o, function () {
          var n = Tr(),
            s = r != null ? r : xl(e, o._rootElement).anchorNode;
          if (kl(s) || si(s)) {
            Ni(Cr(n, e, o, t));
          }
        });
      }
      var i = Oi(o),
        l = i[i.length - 1],
        c = l._key,
        a = qn.get(c),
        u = a || l;
      (u !== o && Pn(e, u, !1),
        Pn(e, o, !0),
        o !== l ? qn.set(c, o) : a && qn["delete"](c));
    }
    function Qn(t) {
      t._lexicalHandled = !0;
    }
    function Zn(t) {
      return !0 === t._lexicalHandled;
    }
    var to = function to() {};
    function eo(e) {
      var n = Mn.get(e);
      if (void 0 === n) return void to();
      var o = An.get(n);
      if (void 0 === o) return void to();
      Mn["delete"](e);
      var r = ni(e);
      ti(r)
        ? (!(function (t) {
            if (null !== t._parentEditor) {
              var _e62 = Oi(t),
                _n44 = _e62[_e62.length - 1]._key;
              qn.get(_n44) === t && qn["delete"](_n44);
            } else qn["delete"](t._key);
          })(r),
          o.editors["delete"](r),
          (o.hasShadowEditor = void 0),
          (e.__lexicalEditor = null))
        : r && t(198);
      var s = Vn(e);
      for (var _t79 = 0; _t79 < s.length; _t79++) s[_t79]();
      e.__lexicalEventHandles = [];
    }
    function no(e, n, o) {
      Gr();
      var r = e.__key,
        s = e.getParent();
      if (null === s) return void (null !== lc(e) && t(367, r, String(lc(e))));
      var i = (function (t) {
        var e = Sr();
        if (!qo(e) || !gs(t)) return e;
        var n = e.anchor,
          o = e.focus,
          r = n.getNode(),
          s = o.getNode();
        qi(r, t) && n.set(t.__key, 0, "element");
        qi(s, t) && o.set(t.__key, 0, "element");
        return e;
      })(e);
      var l = !1;
      if (qo(i) && n) {
        var _t80 = i.anchor,
          _n45 = i.focus;
        (_t80.key === r &&
          (Er(_t80, e, s, e.getPreviousSibling(), e.getNextSibling()),
          (l = !0)),
          _n45.key === r &&
            (Er(_n45, e, s, e.getPreviousSibling(), e.getNextSibling()),
            (l = !0)));
      } else Qo(i) && n && e.isSelected() && e.selectPrevious();
      if (qo(i) && n && !l) {
        var _t81 = e.getIndexWithinParent();
        (ui(e), Nr(i, s, _t81, -1));
      } else ui(e);
      (o || nl(s) || s.canBeEmpty() || !s.isEmpty() || no(s, n),
        n && i && xs(s) && s.isEmpty() && s.selectEnd());
    }
    var oo = Symbol["for"]("ephemeral");
    function ro(t) {
      return t[oo] || !1;
    }
    var so = { configurable: !0, enumerable: !1, value: void 0, writable: !0 };
    var _io5 = (function () {
      function io(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", so),
          Object.defineProperty(this, bt, so),
          ai(this, t));
      }
      io.getType = function getType() {
        var _Zl = Zl(this),
          e = _Zl.ownNodeType;
        return (void 0 === e && t(64, this.name), e);
      };
      io.clone = function clone(e) {
        t(65, this.name);
      };
      var _proto6 = io.prototype;
      _proto6.$config = function $config() {
        return {};
      };
      _proto6.config = function config(t, e) {
        var _ref26;
        var n = e["extends"] || oc(this.constructor);
        return (
          Object.assign(e, { extends: n }),
          "string" == typeof t && Object.assign(e, { type: t }),
          (_ref26 = {}),
          (_ref26[t] = e),
          _ref26
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
          var _e63 = _i(t);
          if (null === _e63) break;
          t = null !== _e63.__parent ? _e63.__parent : lc(_e63);
        }
        return !1;
      };
      _proto6.isSelected = function isSelected(t) {
        var _this13 = this;
        var e = t || Sr();
        if (null == e) return !1;
        var n = e.getNodes().some(function (t) {
          return t.__key === _this13.__key;
        });
        if (Lo(this)) return n;
        if (
          qo(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t82 = this.getParent();
          if (ms(this) && this.isInline() && _t82) {
            var _n46 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t82.is(_n46.getNode()) &&
              _n46.offset === _t82.getChildrenSize() &&
              this.is(_t82.getLastChild())
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
        return null === t ? null : _i(t);
      };
      _proto6.getParentOrThrow = function getParentOrThrow() {
        var e = this.getParent();
        return (null === e && t(66, this.__key), e);
      };
      _proto6.getTopLevelElement = function getTopLevelElement() {
        var e = this;
        for (; null !== e; ) {
          var _n47 = e.getParent();
          if (nl(_n47) || null !== lc(e))
            return (gs(e) || (e === this && ms(e)) || t(194), e);
          e = _n47;
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
        return null === t ? null : _i(t);
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
        return null === t ? null : _i(t);
      };
      _proto6.getNextSiblings = function getNextSiblings() {
        var t = [];
        var e = this.getNextSibling();
        for (; null !== e; ) (t.push(e), (e = e.getNextSibling()));
        return t;
      };
      _proto6.getCommonAncestor = function getCommonAncestor(t) {
        var e = gs(this) ? this : this.getParent(),
          n = gs(t) ? t : t.getParent(),
          o = e && n ? ra(e, n) : null;
        return o ? o.commonAncestor : null;
      };
      _proto6.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto6.isBefore = function isBefore(e) {
        var n = ra(this, e);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === ea(n)
              : ("same" !== n.type && "ancestor" !== n.type && t(279), !1)))
        );
      };
      _proto6.isParentOf = function isParentOf(t) {
        return qi(t, this);
      };
      _proto6.getNodesBetween = function getNodesBetween(e) {
        var n = this.isBefore(e),
          o = [],
          r = new Set();
        var s = this;
        for (; null !== s; ) {
          var _i15 = s.__key;
          if ((r.has(_i15) || (r.add(_i15), o.push(s)), s === e)) break;
          var _l9 = gs(s) ? (n ? s.getFirstChild() : s.getLastChild()) : null;
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
      _proto6.isDirty = function isDirty() {
        var t = qr()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto6.getLatest = function getLatest() {
        if (ro(this)) return this;
        var e = _i(this.__key);
        return (null === e && t(113), e);
      };
      _proto6.getWritable = function getWritable() {
        if (ro(this)) return this;
        Gr();
        var t = Vr(),
          e = qr(),
          n = t._nodeMap,
          o = this.__key,
          r = this.getLatest(),
          s = e._cloneNotNeeded,
          i = Sr();
        if ((null !== i && i.setCachedNodes(null), s.has(o))) return (di(r), r);
        var l = Wl(r);
        return (s.add(o), di(l), n.set(o, l), l);
      };
      _proto6.getTextContent = function getTextContent() {
        return Cc(this);
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
        return new _W2(t);
      };
      _proto6.exportDOM = function exportDOM(t) {
        return { element: this.createDOM(t._config, t) };
      };
      _proto6.exportJSON = function exportJSON() {
        var t = this.__state ? this.__state.toJSON() : void 0;
        return babelHelpers["extends"]({ type: this.__type, version: 1 }, t);
      };
      io.importJSON = function importJSON(e) {
        t(18, this.name);
      };
      _proto6.updateFromJSON = function updateFromJSON(t) {
        return (function (t, e) {
          var n = t.getWritable(),
            o = e.$;
          var r = o;
          for (var _t83 of mt(n).flatKeys)
            _t83 in e &&
              ((void 0 !== r && r !== o) ||
                (r = babelHelpers["extends"]({}, o)),
              (r[_t83] = e[_t83]));
          return ((n.__state || r) && pt(t).updateFromJSON(r), n);
        })(this, t);
      };
      io.transform = function transform() {
        return null;
      };
      _proto6.remove = function remove(t) {
        no(this, !0, t);
      };
      _proto6.replace = function replace(e, n) {
        Gr();
        var o = Sr();
        (null !== o && (o = o.clone()), sl(this, e));
        var r = this.getLatest(),
          s = this.__key,
          i = cc(r);
        null !== i &&
          (function (t) {
            throw new Error(t);
          })(
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
        (ui(c), null !== f && qo(o) && Nr(o, f, d, -1));
        var h = r.getPreviousSibling(),
          g = r.getNextSibling(),
          _ = r.__prev,
          p = r.__next,
          m = r.__parent;
        if ((no(r, !1, !0), null === h)) a.__first = l;
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
            ((gs(this) && gs(c)) || t(139),
            (y = c.getChildrenSize()),
            c.splice(y, 0, this.getChildren())),
          qo(o))
        ) {
          Ni(o);
          var _t84 = o.anchor,
            _e64 = o.focus;
          (_t84.key === s &&
            (n && "element" === _t84.type
              ? _t84.set(c.__key, y + _t84.offset, "element")
              : jo(_t84, c)),
            _e64.key === s &&
              (n && "element" === _e64.type
                ? _e64.set(c.__key, y + _e64.offset, "element")
                : jo(_e64, c)));
        }
        return (gi() === s && hi(l), c);
      };
      _proto6.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (Gr(), sl(this, t));
        var n = this.getWritable(),
          o = t.getWritable();
        vc(this.getParentOrThrow());
        var r = o.getParent(),
          s = Sr();
        var i = !1,
          l = !1;
        if (null !== r) {
          var _n48 = t.getIndexWithinParent();
          if (qo(s)) {
            var _t85 = r.__key,
              _e65 = s.anchor,
              _o30 = s.focus;
            ((i =
              "element" === _e65.type &&
              _e65.key === _t85 &&
              _e65.offset === _n48 + 1),
              (l =
                "element" === _o30.type &&
                _o30.key === _t85 &&
                _o30.offset === _n48 + 1));
          }
          (ui(o), e && qo(s) && Nr(s, r, _n48, -1));
        } else ui(o);
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
          e && qo(s))
        ) {
          var _t86 = this.getIndexWithinParent();
          Nr(s, a, _t86 + 1);
          var _e66 = a.__key;
          (i && s.anchor.set(_e66, _t86 + 2, "element"),
            l && s.focus.set(_e66, _t86 + 2, "element"));
        }
        return t;
      };
      _proto6.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (Gr(), sl(this, t));
        var n = this.getWritable(),
          o = t.getWritable();
        vc(this.getParentOrThrow());
        var r = o.__key,
          s = Sr(),
          i = o.getParent(),
          l = null !== i ? o.getIndexWithinParent() : -1;
        (ui(o), null !== i && e && qo(s) && Nr(s, i, l, -1));
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
          e && qo(s))
        ) {
          Nr(s, this.getParentOrThrow(), f);
        }
        return t;
      };
      _proto6.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto6.createParentElementNode = function createParentElementNode() {
        return Ps();
      };
      _proto6.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto6.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto6.selectPrevious = function selectPrevious(t, e) {
        Gr();
        var n = cc(this);
        if (null !== n) return n.selectPrevious(t, e);
        var o = this.getPreviousSibling(),
          r = this.getParentOrThrow();
        if (null === o) return r.select(0, 0);
        if (gs(o)) return o.select();
        if (!Lo(o)) {
          var _t87 = o.getIndexWithinParent() + 1;
          return r.select(_t87, _t87);
        }
        return o.select(t, e);
      };
      _proto6.selectNext = function selectNext(t, e) {
        Gr();
        var n = cc(this);
        if (null !== n) return n.selectNext(t, e);
        var o = this.getNextSibling(),
          r = this.getParentOrThrow();
        if (null === o) return r.select();
        if (gs(o)) return o.select(0, 0);
        if (!Lo(o)) {
          var _t88 = o.getIndexWithinParent();
          return r.select(_t88, _t88);
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
      return io;
    })();
    function lo(t) {
      return t instanceof _io5;
    }
    var co = "history-merge",
      ao = "collaboration",
      uo = "skip-scroll-into-view",
      fo = "skip-dom-selection",
      ho = "skip-selection-focus",
      go = "composition-start",
      _o = "composition-end",
      po = "!important";
    function mo(t) {
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
    function yo(t, e, n) {
      var o = n.trimEnd(),
        r = o.length - 10;
      r >= 0 && o.slice(r).toLowerCase() === po
        ? t.setProperty(e, o.slice(0, r).trim(), "important")
        : t.setProperty(e, n, "");
    }
    function xo(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var o = mo(n),
        r = mo(e);
      for (var _e67 in r) (delete o[_e67], yo(t, _e67, r[_e67]));
      for (var _e68 in o) t.removeProperty(_e68);
    }
    function Co(t, e) {
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
    function So(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function To(t, e, n, o, r) {
      var s = o.classList;
      var i = Bi(r, "base");
      (void 0 !== i && s.add.apply(s, i),
        (i = Bi(r, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== i &&
        (8 & n && 4 & n
          ? ((l = !0), c || s.add.apply(s, i))
          : c && s.remove.apply(s, i));
      for (var _t89 in A) {
        var _o31 = A[_t89];
        if (((i = Bi(r, _t89)), void 0 !== i))
          if (n & _o31) {
            if (l && ("underline" === _t89 || "strikethrough" === _t89)) {
              e & _o31 && s.remove.apply(s, i);
              continue;
            }
            (0 === (e & _o31) ||
              (c && "underline" === _t89) ||
              "strikethrough" === _t89) &&
              s.add.apply(s, i);
          } else e & _o31 && s.remove.apply(s, i);
      }
    }
    function No(t, e, n) {
      var o = n.isComposing(),
        r = t + (o ? N : ""),
        i = Pl(),
        l = Fl(i).$getDOMSlot(n, e, i),
        c = l.getFirstChild();
      if (null === c || c.nodeType !== Node.TEXT_NODE)
        return void l.insertChild(pl().createTextNode(r));
      var a = c,
        u = a.nodeValue;
      if (u !== r)
        if (o || s) {
          var _ref27 = (function (t, e) {
              var n = t.length,
                o = e.length;
              var r = 0,
                s = 0;
              for (; r < n && r < o && t[r] === e[r]; ) r++;
              for (; s + r < n && s + r < o && t[n - s - 1] === e[o - s - 1]; )
                s++;
              return [r, n - r - s, e.slice(r, o - s)];
            })(u, r),
            _t90 = _ref27[0],
            _e69 = _ref27[1],
            _n49 = _ref27[2];
          (0 !== _e69 && a.deleteData(_t90, _e69), a.insertData(_t90, _n49));
        } else a.nodeValue = r;
    }
    function vo(t, e, n, o, r, s) {
      No(r, t, e);
      var i = s.theme.text;
      void 0 !== i && To(0, 0, o, t, i);
    }
    function Eo(t, e) {
      var n = pl().createElement(e);
      return (n.appendChild(t), n);
    }
    function ko(t) {
      return null != t && !0 === t.__isInlineFormattable;
    }
    var _Oo2 = (function (_io) {
      function Oo(t, e) {
        var _this;
        if (t === void 0) {
          t = "";
        }
        ((_this = _io.call(this, e) || this),
          (_this.__text = t),
          (_this.__format = 0),
          (_this.__style = ""),
          (_this.__mode = 0),
          (_this.__detail = 0));
        return _this;
      }
      babelHelpers.inheritsLoose(Oo, _io);
      var _proto7 = Oo.prototype;
      _proto7.$config = function $config() {
        return this.config("text", {
          importDOM: {
            "#text": function text() {
              return { conversion: wo, priority: 0 };
            },
            b: function b() {
              return { conversion: Mo, priority: 0 };
            },
            code: function code() {
              return { conversion: Fo, priority: 0 };
            },
            em: function em() {
              return { conversion: Fo, priority: 0 };
            },
            i: function i() {
              return { conversion: Fo, priority: 0 };
            },
            mark: function mark() {
              return { conversion: Fo, priority: 0 };
            },
            s: function s() {
              return { conversion: Fo, priority: 0 };
            },
            span: function span() {
              return { conversion: bo, priority: 0 };
            },
            strong: function strong() {
              return { conversion: Fo, priority: 0 };
            },
            sub: function sub() {
              return { conversion: Fo, priority: 0 };
            },
            sup: function sup() {
              return { conversion: Fo, priority: 0 };
            },
            u: function u() {
              return { conversion: Fo, priority: 0 };
            },
          },
        });
      };
      _proto7.afterCloneFrom = function afterCloneFrom(t) {
        (_io.prototype.afterCloneFrom.call(this, t),
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
        return this.__key === gi();
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
        return ci(this.getLatest().__format, t, e);
      };
      _proto7.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto7.isInline = function isInline() {
        return !0;
      };
      _proto7.createDOM = function createDOM(t, e) {
        var n = this.__format,
          o = Co(0, n),
          r = So(0, n),
          s = null === o ? r : o,
          i = pl().createElement(s);
        var l = i;
        (this.hasFormat("code") && i.setAttribute("spellcheck", "false"),
          null !== o && ((l = pl().createElement(r)), i.appendChild(l)));
        vo(l, this, 0, n, this.__text, t);
        var c = this.__style;
        return ("" !== c && xo(i.style, c), i);
      };
      _proto7.updateDOM = function updateDOM(e, n, o) {
        var r = this.__text,
          s = e.__format,
          i = this.__format,
          l = Co(0, s),
          c = Co(0, i),
          a = So(0, s),
          u = So(0, i);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _e70 = n.firstChild;
          null == _e70 && t(48);
          var _s22 = pl().createElement(u);
          return (vo(_s22, this, 0, i, r, o), n.replaceChild(_s22, _e70), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && t(49)),
          No(r, f, this));
        var d = o.theme.text;
        void 0 !== d && s !== i && To(0, s, i, f, d);
        var h = e.__style,
          g = this.__style;
        return (h !== g && xo(n.style, g, h), !1);
      };
      _proto7.updateFromJSON = function updateFromJSON(t) {
        return _io.prototype.updateFromJSON
          .call(this, t)
          .setTextContent(t.text)
          .setFormat(t.format)
          .setDetail(t.detail)
          .setMode(t.mode)
          .setStyle(t.style);
      };
      _proto7.exportDOM = function exportDOM(e) {
        var _io$prototype$exportD = _io.prototype.exportDOM.call(this, e),
          n = _io$prototype$exportD.element;
        return (
          kl(n) || t(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = Eo(n, "b")),
          this.hasFormat("italic") && (n = Eo(n, "i")),
          this.hasFormat("strikethrough") && (n = Eo(n, "s")),
          this.hasFormat("underline") && (n = Eo(n, "u")),
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
          _io.prototype.exportJSON.call(this),
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
        var e = ci(this.getFormat(), t, null);
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
        Gr();
        var n = t,
          o = e;
        var r = Sr(),
          s = this.getTextContent(),
          i = this.__key;
        if ("string" == typeof s) {
          var _t91 = s.length;
          (void 0 === n && (n = _t91), void 0 === o && (o = _t91));
        } else ((n = 0), (o = 0));
        if (!qo(r)) return mr(i, n, i, o, "text", "text");
        {
          var _t92 = gi();
          ((_t92 !== r.anchor.key && _t92 !== r.focus.key) || hi(i),
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
        var c = Sr();
        if (o && qo(c)) {
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
        Gr();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var o = e.__key,
          r = gi(),
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
        var y = Sr();
        if (qo(y)) {
          var _ref28 = y.isBackward()
              ? [y.focus, y.anchor]
              : [y.anchor, y.focus],
            _t93 = _ref28[0],
            _e73 = _ref28[1];
          ("text" === _t93.type && _t93.key === o && (p = _t93),
            "text" === _e73.type && _e73.key === o && (m = _e73));
        }
        e.isSegmented()
          ? ((f = Ro(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = Tt(e, f)),
            (_ = !0))
          : (f = e.setTextContent(a));
        var x = [f];
        for (var _t94 = 1; _t94 < c; _t94++) {
          var _n50 = Ro(i[_t94]);
          ((_n50.__format = d),
            (_n50.__style = h),
            (_n50.__detail = g),
            (_n50.__state = Tt(e, _n50)));
          var _s23 = _n50.__key;
          (r === o && hi(_s23), x.push(_n50));
        }
        var C = p ? p.offset : null,
          S = m ? m.offset : null;
        var T = 0;
        for (var _t95 of x) {
          if (!p && !m) break;
          var _e74 = T + _t95.getTextContentSize();
          if (
            (null !== p &&
              null !== C &&
              C <= _e74 &&
              C >= T &&
              (p.set(_t95.getKey(), C - T, "text"), C < _e74 && (p = null)),
            null !== m && null !== S && S <= _e74 && S >= T)
          ) {
            m.set(_t95.getKey(), S - T, "text");
            break;
          }
          T = _e74;
        }
        if (null !== u) {
          !(function (t) {
            var e = t.getPreviousSibling(),
              n = t.getNextSibling();
            null !== e && di(e);
            null !== n && di(n);
          })(this);
          var _t96 = u.getWritable(),
            _e75 = this.getIndexWithinParent();
          (_
            ? (_t96.splice(_e75, 0, x), this.remove())
            : _t96.splice(_e75, 1, x),
            qo(y) && Nr(y, u, _e75, c - 1));
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
        gi() === r && hi(o);
        var l = Sr();
        if (qo(l)) {
          var _t97 = l.anchor,
            _s24 = l.focus;
          (null !== _t97 && _t97.key === r && kr(_t97, n, o, e, i),
            null !== _s24 && _s24.key === r && kr(_s24, n, o, e, i));
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
      return babelHelpers.createClass(Oo, [
        {
          key: "__isInlineFormattable",
          get: function get() {
            return !0;
          },
        },
      ]);
    })(_io5);
    function bo(t) {
      return { forChild: Ko(t.style), node: null };
    }
    function Mo(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: Ko(e.style, n ? void 0 : "bold"), node: null };
    }
    var Ao = new WeakMap();
    function Do(t) {
      if (!kl(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function wo(e) {
      var n = e;
      null === e.parentElement && t(129);
      var o = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var o = [t];
          for (; null !== n && void 0 === (e = Ao.get(n)) && !Do(n); )
            (o.push(n), (n = n.parentNode));
          var r = void 0 === e ? n : e;
          for (var _t98 = 0; _t98 < o.length; _t98++) Ao.set(o[_t98], r);
          return r;
        })(n)
      )
        return { node: Dr(o) };
      if (((o = o.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === o))
        return { node: null };
      if (" " === o[0]) {
        var _t99 = n,
          _e76 = !0;
        for (; null !== _t99 && null !== (_t99 = Io(_t99, !1)); ) {
          var _n51 = _t99.textContent || "";
          if (_n51.length > 0) {
            (/[ \t\n]$/.test(_n51) && (o = o.slice(1)), (_e76 = !1));
            break;
          }
        }
        _e76 && (o = o.slice(1));
      }
      if (" " === o[o.length - 1]) {
        var _t100 = n,
          _e77 = !0;
        for (; null !== _t100 && null !== (_t100 = Io(_t100, !0)); ) {
          if (
            (_t100.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e77 = !1;
            break;
          }
        }
        _e77 && (o = o.slice(0, o.length - 1));
      }
      return "" === o ? { node: null } : { node: Ro(o) };
    }
    function Io(t, e) {
      var n = t;
      for (;;) {
        var _t101 = void 0;
        for (; null === (_t101 = e ? n.nextSibling : n.previousSibling); ) {
          var _t102 = n.parentElement;
          if (null === _t102) return null;
          n = _t102;
        }
        if (((n = _t101), kl(n))) {
          var _t103 = n.style.display;
          if (
            ("" === _t103 && !Al(n)) ||
            ("" !== _t103 && !_t103.startsWith("inline"))
          )
            return null;
        }
        var _o33 = n;
        for (; null !== (_o33 = e ? n.firstChild : n.lastChild); ) n = _o33;
        if (si(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var Po = {
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
    function Fo(t) {
      var e = Po[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: Ko(t.style, e), node: null };
    }
    function Ro(t) {
      if (t === void 0) {
        t = "";
      }
      return rl(new _Oo2(t));
    }
    function Lo(t) {
      return t instanceof _Oo2;
    }
    function Ko(t, e) {
      var n = t.fontWeight,
        o = t.textDecoration.split(" "),
        r = "700" === n || "bold" === n,
        s = o.includes("line-through"),
        i = "italic" === t.fontStyle,
        l = o.includes("underline"),
        c = t.verticalAlign;
      return function (t) {
        return Lo(t) || ko(t)
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
    var _Bo = (function (_Oo) {
      function Bo(t) {
        var _this2;
        if (t === void 0) {
          t = void 0;
        }
        ((_this2 = _Oo.call(this, "\t", t) || this), (_this2.__detail = 2));
        return _this2;
      }
      babelHelpers.inheritsLoose(Bo, _Oo);
      var _proto8 = Bo.prototype;
      _proto8.$config = function $config() {
        return this.config("tab", { extends: _Oo2 });
      };
      _proto8.createDOM = function createDOM(t) {
        var e = _Oo.prototype.createDOM.call(this, t),
          n = Bi(t.theme, "tab");
        if (void 0 !== n) {
          var _e$classList;
          (_e$classList = e.classList).add.apply(_e$classList, n);
        }
        return e;
      };
      _proto8.setTextContent = function setTextContent(t) {
        return _Oo.prototype.setTextContent.call(this, "\t");
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
      return Bo;
    })(_Oo2);
    function $o() {
      return rl(new _Bo());
    }
    function zo(t) {
      return t instanceof _Bo;
    }
    var _Wo = (function () {
      function Wo(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto9 = Wo.prototype;
      _proto9.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto9.isBefore = function isBefore(t) {
        if (this.key === t.key) return this.offset < t.offset;
        return ta(ga(sa(this, "next")), ga(sa(t, "next"))) < 0;
      };
      _proto9.getNode = function getNode() {
        var e = _i(this.key);
        return (null === e && t(20), e);
      };
      _proto9.set = function set(t, e, n, o) {
        var r = this._selection,
          s = this.key;
        (o && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          Yr() ||
            (gi() === s && hi(t),
            null !== r &&
              (r.setCachedNodes(null),
              qo(r) && (r._cachedIsBackward = null),
              (r.dirty = !0))));
      };
      return Wo;
    })();
    function Uo(t, e, n) {
      return new _Wo(t, e, n);
    }
    function Ho(t, e) {
      var n = e.__key,
        o = t.offset,
        r = "element";
      if (Lo(e)) {
        r = "text";
        var _t104 = e.getTextContentSize();
        o > _t104 && (o = _t104);
      } else if (!gs(e)) {
        var _t105 = e.getNextSibling();
        if (Lo(_t105)) ((n = _t105.__key), (o = 0), (r = "text"));
        else {
          var _t106 = e.getParent();
          _t106 && ((n = _t106.__key), (o = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, o, r);
    }
    function jo(t, e) {
      if (gs(e)) {
        var _n52 = e.getLastDescendant();
        gs(_n52) || Lo(_n52) ? Ho(t, _n52) : Ho(t, e);
      } else Ho(t, e);
    }
    function Yo(t, e, n, o) {
      var r = t.getNode(),
        s = r.getChildAtIndex(t.offset),
        i = Ro();
      if ((i.setFormat(n), i.setStyle(o), Fs(s))) s.splice(0, 0, [i]);
      else if (null !== s) {
        var _t107 = nl(r) ? Ps().append(i) : i;
        s.insertBefore(_t107);
      } else if (nl(r)) {
        var _t108 = r.getLastChild();
        gs(_t108) && !_t108.isInline() && _t108.isEmpty()
          ? _t108.append(i)
          : r.append(Ps().append(i));
      } else r.append(i);
      (t.is(e) && e.set(i.__key, 0, "text"), t.set(i.__key, 0, "text"));
    }
    function Go(e, n, o, r) {
      var s = e.anchor.getNode();
      Lo(s) || t(398);
      var i = e.anchor.offset,
        l = Ro(n);
      (l.setFormat(o), l.setStyle(r));
      var c = s.getParentOrThrow();
      if (0 === i)
        c.isInline() && !s.__prev ? c.insertBefore(l) : s.insertBefore(l, !1);
      else if (i === s.getTextContentSize())
        c.isInline() && !s.__next ? c.insertAfter(l) : s.insertAfter(l, !1);
      else {
        var _s$splitText = s.splitText(i),
          _t109 = _s$splitText[0];
        _t109.insertAfter(l, !1);
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
    var _Jo = (function () {
      function Jo(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto0 = Jo.prototype;
      _proto0.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto0.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto0.is = function is(t) {
        if (!Qo(t)) return !1;
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
        return new Jo(new Set(this._nodes));
      };
      _proto0.extract = function extract() {
        return this.getNodes();
      };
      _proto0.insertRawText = function insertRawText(t) {};
      _proto0.insertText = function insertText() {};
      _proto0.insertNodes = function insertNodes(t) {
        var e = this.getNodes().filter(function (t) {
            return null === lc(t);
          }),
          n = e.length;
        if (0 === n) return;
        var o = e[n - 1];
        var r;
        if (Lo(o)) r = o.select();
        else {
          var _t110 = o.getIndexWithinParent() + 1;
          r = o.getParentOrThrow().select(_t110, _t110);
        }
        r.insertNodes(t);
        for (var _t111 = 0; _t111 < n; _t111++) e[_t111].remove();
      };
      _proto0.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = this._nodes,
          n = [];
        for (var _t112 of e) {
          var _e78 = _i(_t112);
          null !== _e78 && n.push(_e78);
        }
        return (Yr() || (this._cachedNodes = n), n);
      };
      _proto0.getTextContent = function getTextContent() {
        var t = this.getNodes();
        var e = "";
        for (var _n53 = 0; _n53 < t.length; _n53++)
          e += t[_n53].getTextContent();
        return e;
      };
      _proto0.deleteNodes = function deleteNodes() {
        var t = this.getNodes().filter(function (t) {
          return null === lc(t);
        });
        if ((Sr() || Tr()) === this && t[0]) {
          var _e79 = $c(t[0], "next");
          la(Qc(_e79, _e79));
        }
        for (var _e80 of t) _e80.remove();
        Vo();
      };
      return Jo;
    })();
    function Vo() {
      var t = Ti();
      if (t.isEmpty()) {
        var _e81 = Ps();
        (t.append(_e81), _e81.select());
      }
    }
    function qo(t) {
      return t instanceof _Xo;
    }
    var _Xo = (function () {
      function Xo(t, e, n, o) {
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
      var _proto1 = Xo.prototype;
      _proto1.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto1.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto1.is = function is(t) {
        return (
          !!qo(t) &&
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
          for (var _n54 of t)
            if (Rc(_n54)) {
              var _t113 = _n54.origin;
              0 === e.length ? r.add(_t113) : (s.add(_t113), e.push(_t113));
            } else {
              var _t114 = _n54.origin;
              (gs(_t114) && s.has(_t114)) || e.push(_t114);
            }
          o && e.push(o.caret.origin);
          if (
            Fc(t.focus) &&
            gs(t.focus.origin) &&
            null === t.focus.getNodeAtCaret()
          )
            for (
              var _n55 = Hc(t.focus.origin, "previous");
              Rc(_n55) &&
              r.has(_n55.origin) &&
              !_n55.origin.isEmpty() &&
              _n55.origin.is(e[e.length - 1]);
              _n55 = Yc(_n55)
            )
              (r["delete"](_n55.origin), e.pop());
          for (; e.length > 1; ) {
            var _t115 = e[e.length - 1];
            if (!gs(_t115) || s.has(_t115) || _t115.isEmpty() || r.has(_t115))
              break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n56 = ga(t.anchor),
              _o34 = ga(t.anchor.getFlipped()),
              _r27 = function _r27(t) {
                return Pc(t) ? t.origin : t.getNodeAtCaret();
              },
              _s25 =
                _r27(_n56) ||
                _r27(_o34) ||
                (t.anchor.getNodeAtCaret() ? _n56.origin : _o34.origin);
            e.push(_s25);
          }
          return e;
        })(pa(aa(this), "next"));
        return (Yr() || (this._cachedNodes = e), e);
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
          _nr = nr(this),
          i = _nr[0],
          l = _nr[1];
        var c = "",
          a = !0;
        for (var _u8 = 0; _u8 < t.length; _u8++) {
          var _f7 = t[_u8];
          if (gs(_f7) && !_f7.isInline()) {
            a || (c += "\n");
            var _t116 = "";
            for (var _e82 of dc(_f7)) {
              var _n57 = hc(_f7, _e82);
              null !== _n57 && (_t116 += _n57.getTextContent());
            }
            "" !== _t116 ? ((c += _t116), (a = !1)) : (a = !_f7.isEmpty());
          } else if (((a = !1), Lo(_f7))) {
            var _t117 = _f7.getTextContent();
            (_f7 === e
              ? _f7 === n
                ? ("element" === o.type &&
                    "element" === r.type &&
                    r.offset !== o.offset) ||
                  (_t117 = i < l ? _t117.slice(i, l) : _t117.slice(l, i))
                : (_t117 = s ? _t117.slice(i) : _t117.slice(l))
              : _f7 === n &&
                (_t117 = s ? _t117.slice(0, l) : _t117.slice(0, i)),
              (c += _t117));
          } else
            (!ms(_f7) && !bs(_f7)) ||
              (_f7 === n && this.isCollapsed()) ||
              (c += _f7.getTextContent());
        }
        return c;
      };
      _proto1.applyDOMRange = function applyDOMRange(t) {
        var e = qr(),
          n = e.getEditorState()._selection,
          o = _r(
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
          kt(this));
      };
      _proto1.clone = function clone() {
        var t = this.anchor,
          e = this.focus;
        return new Xo(
          Uo(t.key, t.offset, t.type),
          Uo(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto1.toggleFormat = function toggleFormat(t) {
        ((this.format = ci(this.format, t, null)), (this.dirty = !0));
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
        this.insertNodes(Dr(t));
      };
      _proto1.insertText = function insertText(e) {
        var n = this.format,
          o = this.style;
        if (!this.isCollapsed()) {
          var _t118 = (
            this.focus.isBefore(this.anchor) ? this.focus : this.anchor
          ).getNode();
          if (
            (Lo(_t118) && ((n = _t118.getFormat()), (o = _t118.getStyle())),
            this.removeText(),
            (this.format = n),
            (this.style = o),
            "" === e)
          )
            return;
          if (null === gi())
            return (
              "element" === this.anchor.type &&
                Yo(this.anchor, this.focus, n, o),
              void Go(this, e, n, o)
            );
        }
        "element" === this.anchor.type && Yo(this.anchor, this.focus, n, o);
        var r = this.anchor.getNode();
        Lo(r) || t(398);
        var s = this.anchor.offset,
          i = r.getParentOrThrow(),
          l = r.getTextContentSize();
        if (
          ri(r) ||
          (0 === s &&
            (!r.canInsertTextBefore() ||
              (!i.canInsertTextBefore() && !r.__prev))) ||
          (s === l &&
            (!r.canInsertTextAfter() || (!i.canInsertTextAfter() && !r.__next)))
        ) {
          if (r.isSegmented() && 0 !== s && s !== l) {
            if (null !== gi()) r.setMode("normal").setFormat(n).setStyle(o);
            else {
              var _t119 = Ro(r.getTextContent());
              (_t119.setFormat(n),
                _t119.setStyle(o),
                r.replace(_t119),
                _t119.select(s, s));
            }
            return void ("" !== e && this.insertText(e));
          }
          if ("" === e) return;
          if (0 === s) {
            var _t120 = r.getPreviousSibling();
            if (Lo(_t120) && _t120.canInsertTextAfter() && !ri(_t120))
              _t120.select();
            else {
              var _t121 = Ro();
              (_t121.setFormat(n),
                _t121.setStyle(o),
                i.canInsertTextBefore()
                  ? r.insertBefore(_t121)
                  : i.insertBefore(_t121),
                _t121.select());
            }
            return void this.insertText(e);
          }
          if (s === l) {
            var _t122 = r.getNextSibling();
            if (Lo(_t122) && _t122.canInsertTextBefore() && !ri(_t122))
              _t122.select(0, 0);
            else {
              var _t123 = Ro();
              (_t123.setFormat(n),
                _t123.setStyle(o),
                i.canInsertTextAfter()
                  ? r.insertAfter(_t123)
                  : i.insertAfter(_t123),
                _t123.select(0, 0));
            }
            return void this.insertText(e);
          }
          var _t124 = Ro(e);
          return (
            _t124.setFormat(n),
            _t124.setStyle(o),
            r.replace(_t124),
            void _t124.select()
          );
        }
        if ("" === e) return;
        var c = i.isInline() && 0 === s && !r.__prev,
          a = i.isInline() && s === l && !r.__next,
          u = r.getFormat() !== n || r.getStyle() !== o;
        if (c || a || u) {
          if ("" !== r.getTextContent() || c || a)
            return void Go(this, e, n, o);
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
      _proto1.removeText = function removeText() {
        var t = Sr() === this;
        (ca(this, ha(aa(this))), t && Sr() !== this && Ni(this));
      };
      _proto1.formatText = function formatText(t, e) {
        if (e === void 0) {
          e = null;
        }
        tr(this, t, e);
      };
      _proto1.insertNodes = function insertNodes(e) {
        var _r28;
        if (0 === e.length) return;
        this.isCollapsed() || this.removeText();
        var n = this.anchor.getNode();
        if (
          "element" === this.anchor.type &&
          gs(n) &&
          n.isShadowRoot() &&
          null !== lc(n)
        ) {
          var _n$getFirstChild;
          var _o35 =
            (_n$getFirstChild = n.getFirstChild()) != null
              ? _n$getFirstChild
              : n.append(Ps()).getFirstChild();
          if (null !== _o35 && !gs(_o35)) {
            var _t125 = Ps();
            (_o35.insertBefore(_t125), (_o35 = _t125));
          }
          if (null !== _o35) {
            _o35.selectStart();
            var _n58 = Sr();
            return (qo(_n58) || t(369), _n58.insertNodes(e));
          }
        }
        if ("element" === this.anchor.type && nl(n)) {
          var _t126 = Rr(e),
            _o36 = _t126.getLastDescendant();
          return (
            n.splice(this.anchor.offset, 0, _t126.getChildren()),
            void (null !== _o36 && _o36.selectEnd())
          );
        }
        var o = (this.isBackward() ? this.focus : this.anchor).getNode(),
          r = ec(o, Il);
        var s = e[e.length - 1];
        if (gs(r) && "__language" in r) {
          if ("__language" in e[0]) this.insertText(e[0].getTextContent());
          else {
            var _t127 = Ir(this);
            (r.splice(_t127, 0, e), s.selectEnd());
          }
          return;
        }
        if (
          !e.some(function (t) {
            return (gs(t) || ms(t)) && !t.isInline();
          })
        ) {
          gs(r) || t(211, o.constructor.name, o.getType());
          var _n59 = Ir(this);
          return (r.splice(_n59, 0, e), void s.selectEnd());
        }
        if (gs(r) && null !== lc(r)) {
          var _t128 = Ir(this),
            _n60 = wr(e);
          r.splice(_t128, 0, _n60);
          var _o37 = _n60[_n60.length - 1];
          return void (void 0 !== _o37
            ? _o37.selectEnd()
            : r.select(_t128, _t128));
        }
        if (null === r) {
          var _t129 = Rr(e),
            _n61 = _t129.getLastDescendant();
          var _o38 = sa(this.anchor, "next");
          for (var _e83 of _t129.getChildren()) _o38 = Sa(_e83, _o38);
          return void (null !== _n61 && _n61.selectEnd());
        }
        if (gs(r) && !r.isParentRequired() && !nl(r.getParentOrThrow())) {
          var _t130 = Ir(this),
            _n62 = wr(e);
          r.splice(_t130, 0, _n62);
          var _o39 = _n62[_n62.length - 1];
          return void (void 0 !== _o39
            ? _o39.selectEnd()
            : r.select(_t130, _t130));
        }
        var i = Rr(e),
          l = i.getLastDescendant(),
          c = i.getChildren(),
          a = !gs(r) || !r.isEmpty() ? this.insertParagraph() : null;
        a && !r.isAttached() && ((o = this.anchor.getNode()), (r = ec(o, Il)));
        var u = c[c.length - 1];
        var f = c[0];
        var d;
        (gs((d = f)) &&
          Il(d) &&
          !d.isEmpty() &&
          gs(r) &&
          (!r.isEmpty() || r.canMergeWhenEmpty()) &&
          (gs(r) || t(211, o.constructor.name, o.getType()),
          (_r28 = r).append.apply(_r28, f.getChildren()),
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
              for (var _t131 of s) i = i.insertAfter(_t131);
            })(r, f)));
        var h = ec(l, Il);
        (a &&
          gs(h) &&
          (a.canMergeWhenEmpty() || Il(u)) &&
          (h.append.apply(h, a.getChildren()), a.remove()),
          gs(r) && r.isEmpty() && r.remove(),
          l.selectEnd());
        var g = gs(r) ? r.getLastChild() : null;
        bs(g) && h !== r && g.remove();
      };
      _proto1.insertParagraph = function insertParagraph() {
        var e = this.anchor.getNode();
        if ("element" === this.anchor.type && nl(e)) {
          var _t132 = Ps();
          return (
            e.splice(this.anchor.offset, 0, [_t132]),
            _t132.select(),
            _t132
          );
        }
        var n = Ir(this),
          o = ec(this.anchor.getNode(), Il);
        if (null !== o && null !== lc(o)) return null;
        gs(o) || t(213);
        var r = o.getChildAtIndex(n),
          s = r ? [r].concat(r.getNextSiblings()) : [],
          i = o.insertNewAfter(this, !1);
        return i ? (i.append.apply(i, s), i.selectStart(), i) : null;
      };
      _proto1.insertLineBreak = function insertLineBreak(t) {
        var e = Os();
        if ((this.insertNodes([e]), t)) {
          var _t133 = e.getParentOrThrow(),
            _n63 = e.getIndexWithinParent();
          _t133.select(_n63, _n63);
        }
      };
      _proto1.extract = function extract() {
        var _n$splitText;
        var t = [].concat(this.getNodes()),
          e = t.length;
        var n = t[0],
          o = t[e - 1];
        var _nr2 = nr(this),
          r = _nr2[0],
          s = _nr2[1],
          i = this.isBackward(),
          _ref29 = i ? [this.focus, this.anchor] : [this.anchor, this.focus],
          l = _ref29[0],
          c = _ref29[1],
          _ref30 = i ? [s, r] : [r, s],
          a = _ref30[0],
          u = _ref30[1];
        if (0 === e) return [];
        if (1 === e) {
          if (Lo(n) && !this.isCollapsed()) {
            var _t134 = n.splitText(a, u),
              _e84 = 0 === a ? _t134[0] : _t134[1];
            return _e84
              ? (l.set(_e84.getKey(), 0, "text"),
                c.set(_e84.getKey(), _e84.getTextContentSize(), "text"),
                [_e84])
              : [];
          }
          return [n];
        }
        if (
          (Lo(n) &&
            (a === n.getTextContentSize()
              ? t.shift()
              : 0 !== a &&
                ((_n$splitText = n.splitText(a)),
                (n = _n$splitText[1]),
                (t[0] = n),
                l.set(n.getKey(), 0, "text"))),
          Lo(o))
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
        if (Lr(this, t, e, n)) return;
        var o = "move" === t,
          r = qr(),
          s = al(Qi(r));
        if (!s) return;
        var i = r._blockCursorElement,
          l = r._rootElement,
          c = this.focus.getNode();
        null === l ||
          null === i ||
          !gs(c) ||
          c.isInline() ||
          c.canBeEmpty() ||
          cl(i, r, l);
        var a = ji(r, this.focus.key);
        var u = a;
        if (
          ("text" === this.focus.type && (u = Lo(c) ? Kl(c, a, r) : null),
          this.dirty)
        ) {
          var _t135 = ji(r, this.anchor.key);
          var _e86 = _t135;
          if ("text" === this.anchor.type) {
            var _n64 = this.anchor.getNode();
            _e86 = Lo(_n64) ? Kl(_n64, _t135, r) : null;
          }
          _e86 && u && Or(s, _e86, this.anchor.offset, u, this.focus.offset);
        }
        if ("character" === n && Lo(c) && c.isUnmergeable()) {
          if (
            e
              ? 0 === this.focus.offset
              : this.focus.offset === c.getTextContentSize()
          ) {
            var _t136 = $c(c, e ? "previous" : "next").getNodeAtCaret();
            if (Lo(_t136)) {
              if (!o) {
                var _n65 = _t136.getTextContentSize();
                return (
                  e
                    ? this.focus.set(_t136.__key, _n65 - 1, "text")
                    : this.focus.set(_t136.__key, 1, "text"),
                  void (this.dirty = !0)
                );
              }
              {
                var _n66 = r.getElementByKey(_t136.getKey()),
                  _o40 = _n66 ? Kl(_t136, _n66, r) : null;
                if (_o40) {
                  var _t137 = e ? _o40.length : 0;
                  Or(s, _o40, _t137, _o40, _t137);
                }
              }
            }
          }
        }
        if ((sr(s, t, e ? "backward" : "forward", n), s.rangeCount > 0)) {
          var _t138 = ml(s, r._rootElement),
            _n67 = _t138 || s.getRangeAt(0),
            _i16 = this.anchor.getNode(),
            _l0 = xs(_i16) ? _i16 : tl(_i16);
          if ((this.applyDOMRange(_n67), (this.dirty = !0), !o)) {
            ir(this, e, _l0);
            (_t138
              ? "backward" !== s.direction
              : s.anchorNode === _n67.startContainer &&
                s.anchorOffset === _n67.startOffset) || rr(this);
          }
        }
        "lineboundary" === n && Lr(this, t, e, n, "decorators");
      };
      _proto1.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            gs(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t139 = e.getParent(),
            _n68 =
              e.getNextSibling() ||
              (null === _t139 ? null : _t139.getNextSibling());
          if (gs(_n68) && _n68.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto1.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e87 = this.anchor;
          var _n69 = _e87.getNode();
          if (this.forwardDeletion(_e87, _n69, t)) return;
          var _o41 = qc(sa(_e87, t ? "previous" : "next"));
          if (
            _o41.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            var _t140 = { type: "initial" };
            for (var _e88 of _o41.iterNodeCarets("shadowRoot"))
              if (Rc(_e88)) {
                if (_e88.origin.isInline());
                else {
                  if (_e88.origin.isShadowRoot()) {
                    if ("merge-block" === _t140.type) break;
                    if (
                      gs(_o41.anchor.origin) &&
                      _o41.anchor.origin.isEmpty()
                    ) {
                      var _t141 = ga(_e88);
                      (ca(this, Qc(_t141, _t141)), _o41.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t140.type &&
                    "merge-block" !== _t140.type) ||
                    (_t140 = {
                      block: _t140.block,
                      caret: _e88,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t140.type) break;
                if (Fc(_e88)) {
                  if (gs(_e88.origin)) {
                    if (_e88.origin.isInline()) {
                      if (!_e88.origin.isParentOf(_o41.anchor.origin)) break;
                    } else
                      _t140 = { block: _e88.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (ms(_e88.origin)) {
                    if (_e88.origin.isIsolated());
                    else if (
                      "merge-next-block" === _t140.type &&
                      (_e88.origin.isKeyboardSelectable() ||
                        !_e88.origin.isInline()) &&
                      gs(_o41.anchor.origin) &&
                      _o41.anchor.origin.isEmpty()
                    ) {
                      _o41.anchor.origin.remove();
                      var _t142 = xr();
                      (_t142.add(_e88.origin.getKey()), Ni(_t142));
                    } else _e88.origin.remove();
                    return;
                  }
                  if (bs(_e88.origin)) return void _e88.origin.remove();
                  break;
                }
              }
            if ("merge-block" === _t140.type) {
              var _t143 = _t140,
                _e89 = _t143.caret,
                _n70 = _t143.block;
              if (dc(_n70).length > 0) return;
              return _e89.origin.isEmpty() &&
                !_n70.isEmpty() &&
                _e89.origin.getParent() === _n70.getParent()
                ? void _e89.origin.remove(!0)
                : (ca(
                    this,
                    Qc(
                      !_e89.origin.isEmpty() && _n70.isEmpty()
                        ? ua($c(_n70, _e89.direction))
                        : _o41.anchor,
                      _e89,
                    ),
                  ),
                  this.removeText());
            }
            for (var _t144 = _e87.getNode(); null !== _t144; ) {
              if (null !== lc(_t144)) return;
              if (gs(_t144) && _t144.isShadowRoot()) break;
              _t144 = _t144.getParent();
            }
          }
          var _r29 = this.focus;
          if ((lr(this, t, "character"), this.isCollapsed())) {
            if (t && 0 === _e87.offset && or(this, _e87.getNode())) return;
          } else {
            var _o42 = "text" === _r29.type ? _r29.getNode() : null;
            if (
              ((_n69 = "text" === _e87.type ? _e87.getNode() : null),
              null !== _o42 && _o42.isSegmented())
            ) {
              var _e90 = _r29.offset,
                _s26 = _o42.getTextContentSize();
              if (_o42.is(_n69) || (t && _e90 !== _s26) || (!t && 0 !== _e90))
                return void ar(_o42, t, _e90);
            } else if (null !== _n69 && _n69.isSegmented()) {
              var _r30 = _e87.offset,
                _s27 = _n69.getTextContentSize();
              if (_n69.is(_o42) || (t && 0 !== _r30) || (!t && _r30 !== _s27))
                return void ar(_n69, t, _r30);
            }
            !(function (t, e) {
              var n = t.anchor,
                o = t.focus,
                r = n.getNode(),
                s = o.getNode();
              if (r === s && "text" === n.type && "text" === o.type) {
                var _t145 = n.offset,
                  _s28 = o.offset,
                  _i17 = _t145 < _s28,
                  _l1 = _i17 ? _t145 : _s28,
                  _c8 = _i17 ? _s28 : _t145,
                  _a7 = _c8 - 1;
                if (_l1 !== _a7) {
                  (function (t) {
                    return !(ki(t) || cr(t));
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
          var _t146 = this.anchor.getNode();
          (_t146.isEmpty() &&
            xs(_t146.getParent()) &&
            null === _t146.getPreviousSibling() &&
            or(this, _t146),
            Vo());
        }
      };
      _proto1.deleteLine = function deleteLine(t) {
        var e = dr(this.anchor);
        if (null !== e && ms(cc(e)))
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
          (this.isCollapsed() && lr(this, t, "lineboundary"),
          this.isCollapsed())
        )
          this.deleteCharacter(t);
        else {
          ec(this.anchor.getNode(), Il) !== ec(this.focus.getNode(), Il)
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
            _n71 = _e91.getNode();
          if (this.forwardDeletion(_e91, _n71, t)) return;
          lr(this, t, "word");
        }
        this.isCollapsed() ? this.deleteCharacter(t) : this.removeText();
      };
      _proto1.isBackward = function isBackward() {
        var t = this._cachedIsBackward;
        if (null !== t) return t;
        var e = this.focus.isBefore(this.anchor);
        return (Yr() || (this._cachedIsBackward = e), e);
      };
      _proto1.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return Xo;
    })();
    function Qo(t) {
      return t instanceof _Jo;
    }
    function Zo(t, e) {
      var _u$splitText, _h$splitText;
      if (Qo(t)) {
        for (var _n72 of t.getNodes())
          ko(_n72) && _n72.setFormat(e(_n72.getFormat()));
        return;
      }
      if (t.isCollapsed()) return (t.setFormat(e(t.format)), void hi(null));
      var n = [];
      for (var _o43 of t.getNodes())
        Lo(_o43)
          ? n.push(_o43)
          : gs(_o43)
            ? _o43.setTextFormat(e(_o43.getTextFormat()))
            : ko(_o43) && _o43.setFormat(e(_o43.getFormat()));
      var o = n.length;
      if (0 === o) return (t.setFormat(e(t.format)), void hi(null));
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
        var _n73 = e(u.getFormat());
        if (ri(u) || (0 === f && g === u.getTextContentSize()))
          u.setFormat(_n73);
        else {
          var _t147 = u.splitText(f, g),
            _e92 = 0 === f ? _t147[0] : _t147[1];
          (_e92.setFormat(_n73),
            "text" === l.type && l.set(_e92.__key, 0, "text"),
            "text" === c.type && c.set(_e92.__key, g - f, "text"));
        }
        return void (t.format = _n73);
      }
      0 === f ||
        ri(u) ||
        ((_u$splitText = u.splitText(f)), (u = _u$splitText[1]), (f = 0));
      var _ = e(u.getFormat());
      u.setFormat(_);
      var p = e(h.getFormat());
      g > 0 &&
        (g === h.getTextContentSize() ||
          ri(h) ||
          ((_h$splitText = h.splitText(g)),
          (h = _h$splitText[0]),
          _h$splitText),
        h.setFormat(p));
      for (var _t148 = a + 1; _t148 < d; _t148++) {
        var _o44 = n[_t148];
        _o44.setFormat(e(_o44.getFormat()));
      }
      ("text" === l.type && l.set(u.__key, f, "text"),
        "text" === c.type && c.set(h.__key, g, "text"),
        (t.format = _ | p));
    }
    function tr(t, e, n) {
      if (n === void 0) {
        n = null;
      }
      var o = null === n && qo(t) ? ci(t.format, e, null) : n;
      Zo(t, function (t) {
        return ci(t, e, o);
      });
    }
    function er(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function nr(t) {
      var e = t.getStartEndPoints();
      if (null === e) return [0, 0];
      var n = e[0],
        o = e[1];
      return "element" === n.type &&
        "element" === o.type &&
        n.key === o.key &&
        n.offset === o.offset
        ? [0, 0]
        : [er(n), er(o)];
    }
    function or(t, e) {
      for (var _n74 = e; _n74; _n74 = _n74.getParent()) {
        if (gs(_n74)) {
          if (_n74.collapseAtStart(t)) return !0;
          if (nl(_n74)) break;
        }
        if (_n74.getPreviousSibling()) break;
      }
      return !1;
    }
    function rr(t) {
      var e = t.focus,
        n = t.anchor,
        o = n.key,
        r = n.offset,
        s = n.type;
      (n.set(e.key, e.offset, e.type, !0), e.set(o, r, s, !0));
    }
    function sr(t, e, n, o) {
      t.modify(e, n, o);
    }
    function ir(t, e, n) {
      var o = t.getNodes(),
        r = o.filter(function (t) {
          return qi(t, n);
        });
      if (0 === r.length || r.length === o.length) return !1;
      var s = e ? r[0] : r[r.length - 1],
        i = gs(s) ? s : s.getParentOrThrow();
      return (e ? i.selectStart() : i.selectEnd(), !0);
    }
    function lr(t, e, n) {
      if (Lr(t, "extend", e, n)) return;
      var o = qr(),
        r = al(Qi(o));
      if (!r || "function" != typeof r.modify) return;
      var s = o._blockCursorElement,
        i = o._rootElement,
        l = t.anchor,
        c = t.focus.getNode();
      null === i ||
        null === s ||
        !gs(c) ||
        c.isInline() ||
        c.canBeEmpty() ||
        cl(s, o, i);
      var a = function a(t) {
          var e = t.getNode(),
            n = o.getElementByKey(t.key);
          return null !== n && "text" === t.type && Lo(e) ? Kl(e, n, o) : n;
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
        (Or(r, _, p, _, p),
        sr(r, "move", e ? "backward" : "forward", n),
        0 === r.rangeCount)
      )
        return;
      var m = ml(r, i) || r.getRangeAt(0),
        y = m.startContainer,
        x = m.startOffset;
      if (
        h &&
        "character" === n &&
        "text" === l.type &&
        Lo(u) &&
        u.isUnmergeable()
      ) {
        if (d === (e ? 0 : u.getTextContentSize())) {
          var _n75 = $c(u, e ? "previous" : "next").getNodeAtCaret();
          if (Lo(_n75)) {
            var _o45 = e ? _n75.getTextContentSize() - 1 : 1;
            return (t.focus.set(_n75.__key, _o45, "text"), void (t.dirty = !0));
          }
        }
      }
      if (h && "character" === n && "text" === l.type) {
        var _n76 = e ? 0 : u.getTextContentSize(),
          _o46 = y === f ? x : d !== _n76 ? _n76 : -1;
        if (_o46 >= 0)
          return void (
            _o46 !== d && (t.focus.set(l.key, _o46, "text"), (t.dirty = !0))
          );
      }
      var _ref31 = e ? [y, x, f, d] : [f, d, y, x],
        C = _ref31[0],
        S = _ref31[1],
        T = _ref31[2],
        N = _ref31[3],
        v = xs(u) ? u : tl(u);
      (t.applyDOMRange({
        collapsed: !1,
        endContainer: T,
        endOffset: N,
        startContainer: C,
        startOffset: S,
      }),
        (t.dirty = !0),
        !ir(t, e, v) && e && rr(t),
        "lineboundary" === n && Lr(t, "extend", e, n, "decorators"));
    }
    var cr = (function () {
      try {
        var _t149 = new RegExp("\\p{Emoji}", "u"),
          _e93 = _t149.test.bind(_t149);
        if (_e93("\u2764\ufe0f") && _e93("#\ufe0f\u20e3") && _e93("\u{1f44d}"))
          return _e93;
      } catch (t) {}
      return function () {
        return !1;
      };
    })();
    function ar(t, e, n) {
      var o = t,
        r = o.getTextContent().split(/(?=\s)/g),
        s = r.length;
      var i = 0,
        l = 0;
      for (var _t150 = 0; _t150 < s; _t150++) {
        var _o47 = _t150 === s - 1;
        if (
          ((l = i), (i += r[_t150].length), (e && i === n) || i > n || _o47)
        ) {
          (r.splice(_t150, 1), _o47 && (l = void 0));
          break;
        }
      }
      var c = r.join("").trim();
      "" === c ? o.remove() : (o.setTextContent(c), o.select(l, l));
    }
    function ur(e, n, o, r) {
      var s,
        i = n,
        l = !1;
      if (kl(e)) {
        var _c9 = !1;
        var _a8 = e.childNodes,
          _u9 = _a8.length,
          _f8 = r._blockCursorElement;
        (i === _u9 && _u9 > 0 && ((_c9 = !0), (i = _u9 - 1)),
          void 0 !== yi(e, r) || Vl(e, r) || (l = !0));
        var _d8 = _a8[i],
          _h7 = !1;
        if (_d8 === _f8) ((_d8 = _a8[i + 1]), (_h7 = !0));
        else if (null !== _f8) {
          var _t151 = _f8.parentNode;
          if (e === _t151) {
            n > Array.prototype.indexOf.call(_t151.children, _f8) && i--;
          }
        }
        if (((s = Ei(_d8)), Lo(s))) i = Wc(s, _c9 ? "next" : "previous");
        else {
          var _a9 = Ei(e);
          if (null === _a9) return null;
          if (gs(_a9)) {
            var _u0$resolveChildIndex;
            var _l10 = r.getElementByKey(_a9.getKey());
            null === _l10 && t(214);
            var _u0 = Rl(_a9, _l10, r);
            ((_u0$resolveChildIndex = _u0.resolveChildIndex(_a9, _l10, e, n)),
              (_a9 = _u0$resolveChildIndex[0]),
              (i = _u0$resolveChildIndex[1]),
              gs(_a9) || t(215),
              _c9 &&
                i >= _a9.getChildrenSize() &&
                (i = Math.max(0, _a9.getChildrenSize() - 1)));
            var _f9 = _a9.getChildAtIndex(i);
            if (
              gs(_f9) &&
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
              var _t152 = _c9
                ? _f9.getLastDescendant()
                : _f9.getFirstDescendant();
              (null === _t152
                ? (_a9 = _f9)
                : ((_f9 = _t152),
                  (_a9 = gs(_f9) ? _f9 : _f9.getParentOrThrow())),
                (i = 0));
            }
            Lo(_f9)
              ? ((s = _f9),
                (_a9 = null),
                (i = Wc(_f9, _c9 ? "next" : "previous")))
              : _f9 !== _a9 &&
                _c9 &&
                !_h7 &&
                (gs(_a9) || t(216),
                (i = Math.min(_a9.getChildrenSize(), i + 1)));
          } else {
            var _t153 = cc(_a9),
              _o48 = null !== _t153 ? _t153 : _a9,
              _s29 = _o48.getIndexWithinParent(),
              _l11 = r.getElementByKey(_a9.getKey());
            var _c0 = "after";
            if (null !== _l11 && Ei(e) === _a9) {
              var _t154 = Rl(_a9, _l11, r);
              _t154.element !== _l11
                ? (_c0 = _t154.resolveLeafPosition(_l11, e, n))
                : 0 === n && ms(_a9) && (_c0 = "before");
            }
            ((i = "before" === _c0 ? _s29 : _s29 + 1),
              (_a9 = _o48.getParentOrThrow()));
          }
          if (gs(_a9)) return [Uo(_a9.__key, i, "element"), l];
        }
      } else s = Ei(e);
      return Lo(s) ? [Uo(s.__key, Wc(s, i, "clamp"), "text"), l] : null;
    }
    function fr(t, e, n) {
      var o = t.offset,
        r = t.getNode();
      if (0 === o) {
        var _o49 = r.getPreviousSibling(),
          _s30 = r.getParent();
        if (e) {
          if ((n || !e) && null === _o49 && gs(_s30) && _s30.isInline()) {
            var _e94 = _s30.getPreviousSibling();
            Lo(_e94) && t.set(_e94.__key, _e94.getTextContent().length, "text");
          }
        } else
          gs(_o49) && !n && _o49.isInline()
            ? t.set(_o49.__key, _o49.getChildrenSize(), "element")
            : Lo(_o49) &&
              !r.isUnmergeable() &&
              t.set(_o49.__key, _o49.getTextContent().length, "text");
      } else if (o === r.getTextContent().length) {
        var _o50 = r.getNextSibling(),
          _s31 = r.getParent();
        if (e && gs(_o50) && _o50.isInline()) t.set(_o50.__key, 0, "element");
        else if (
          (n || e) &&
          null === _o50 &&
          gs(_s31) &&
          _s31.isInline() &&
          !_s31.canInsertTextAfter() &&
          _s31.getTextContentSize() > 1
        ) {
          var _e95 = _s31.getNextSibling();
          Lo(_e95) && t.set(_e95.__key, 0, "text");
        }
      }
    }
    function dr(t) {
      var e = _i(t.key);
      return null === e ? null : uc(e);
    }
    function hr(t, e, n) {
      var o = dr(t),
        r = dr(e);
      if (o === r || (null !== o && null !== r && o.is(r))) return !1;
      var s = n(o, r);
      if (null !== o)
        return (
          gs(o)
            ? e.set(o.getKey(), s ? o.getChildrenSize() : 0, "element")
            : e.set(o.getKey(), s ? o.getTextContentSize() : 0, "text"),
          !0
        );
      var i = cc(r);
      if (null === i) return !1;
      var l = i.getParent();
      if (null === l) return !1;
      var c = i.getIndexWithinParent();
      return (e.set(l.getKey(), s ? c + 1 : c, "element"), !0);
    }
    function gr(t) {
      var e = hr(t.anchor, t.focus, function (e, n) {
        return (function (t, e, n, o) {
          if (null !== n && null !== o) {
            var _t155 = cc(n),
              _e96 = cc(o);
            if (null !== _t155 && _t155.is(_e96)) {
              for (var _e97 of fc(_t155).values()) {
                if (_e97 === n.getKey()) return !0;
                if (_e97 === o.getKey()) return !1;
              }
              return !0;
            }
            return null === _t155 || null === _e96 || _t155.isBefore(_e96);
          }
          if (null !== n) {
            var _t156 = cc(n),
              _o51 = _i(e.key);
            return (
              null === _t156 ||
              null === _o51 ||
              !(!_t156.is(_o51) && !_t156.isParentOf(_o51)) ||
              _t156.isBefore(_o51)
            );
          }
          var r = cc(o),
            s = _i(t.key);
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
    function _r(t, e, n, o, r, s) {
      if (null === t || null === n || !Zs(r, t, n)) return null;
      var i = ur(t, e, qo(s) ? s.anchor : null, r);
      if (null === i) return null;
      var l = ur(n, o, qo(s) ? s.focus : null, r);
      if (null === l) return null;
      var c = i[0],
        a = i[1],
        u = l[0],
        f = l[1];
      if ("element" === c.type && "element" === u.type) {
        var _e98 = Ei(t),
          _o52 = Ei(n);
        if (ms(_e98) && ms(_o52)) return null;
      }
      var d =
        r._slotsUsed &&
        hr(c, u, function () {
          return (
            0 !==
            (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_FOLLOWING)
          );
        });
      return (
        (function (t, e) {
          if ("text" === t.type && "text" === e.type) {
            var _n77 = t.isBefore(e),
              _o53 = t.is(e);
            (fr(t, _n77, _o53),
              fr(e, !_n77, _o53),
              _o53 && e.set(t.key, t.offset, t.type));
          }
        })(c, u),
        [c, u, a || f || d]
      );
    }
    function pr(t) {
      return gs(t) && !t.isInline();
    }
    function mr(t, e, n, o, r, s) {
      var i = Vr(),
        l = new _Xo(Uo(t, e, r), Uo(n, o, s), 0, "");
      return ((l.dirty = !0), (i._selection = l), l);
    }
    function yr() {
      var t = Uo("root", 0, "element"),
        e = Uo("root", 0, "element");
      return new _Xo(t, e, 0, "");
    }
    function xr() {
      return new _Jo(new Set());
    }
    function Cr(t, e, n, o) {
      var r = n._window;
      if (null === r) return null;
      var s = o || r.event,
        i = s ? s.type : void 0,
        l = "selectionchange" === i,
        c =
          !Z &&
          (l ||
            "beforeinput" === i ||
            "compositionstart" === i ||
            "compositionend" === i ||
            ("click" === i && s && 3 === s.detail) ||
            "drop" === i ||
            void 0 === i);
      var a, u, f, d;
      if (qo(t) && !c) return t.clone();
      {
        if (null === e) return null;
        var _o54 = xl(e, n._rootElement);
        if (
          ((a = _o54.anchorNode),
          (u = _o54.focusNode),
          (f = _o54.anchorOffset),
          (d = _o54.focusOffset),
          (l || void 0 === i) && qo(t) && !Zs(n, a, u))
        )
          return t.clone();
      }
      var h = _r(a, f, u, d, n, t);
      if (null === h) return null;
      var g = h[0],
        _ = h[1],
        p = h[2];
      var m = 0,
        y = "";
      if (qo(t)) {
        var _e99 = t.anchor;
        if (g.key === _e99.key) ((m = t.format), (y = t.style));
        else {
          var _t157 = g.getNode();
          Lo(_t157)
            ? ((m = _t157.getFormat()), (y = _t157.getStyle()))
            : gs(_t157) &&
              ((m = _t157.getTextFormat()), (y = _t157.getTextStyle()));
        }
      }
      var x = new _Xo(g, _, m, y);
      return (p && (x.dirty = !0), x);
    }
    function Sr() {
      return Vr()._selection;
    }
    function Tr() {
      return qr()._editorState._selection;
    }
    function Nr(t, e, n, o) {
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
          var _n78 = Math.max(0, _e100 + o);
          (r.set(c, _n78, "element"), s.set(c, _n78, "element"), vr(t));
        }
      } else {
        var _i18 = t.isBackward(),
          _l12 = _i18 ? s : r,
          _a0 = _l12.getNode(),
          _u1 = _i18 ? r : s,
          _f0 = _u1.getNode();
        if (e.is(_a0)) {
          var _t158 = _l12.offset;
          ((n <= _t158 && o > 0) || (n < _t158 && o < 0)) &&
            _l12.set(c, Math.max(0, _t158 + o), "element");
        }
        if (e.is(_f0)) {
          var _t159 = _u1.offset;
          ((n <= _t159 && o > 0) || (n < _t159 && o < 0)) &&
            _u1.set(c, Math.max(0, _t159 + o), "element");
        }
      }
      vr(t);
    }
    function vr(t) {
      var e = t.anchor,
        n = e.offset,
        o = t.focus,
        r = o.offset,
        s = e.getNode(),
        i = o.getNode();
      if (t.isCollapsed()) {
        if (!gs(s)) return;
        var _t160 = s.getChildrenSize(),
          _r31 = n >= _t160,
          _i19 = _r31 ? s.getChildAtIndex(_t160 - 1) : s.getChildAtIndex(n);
        if (Lo(_i19)) {
          var _t161 = 0;
          (_r31 && (_t161 = _i19.getTextContentSize()),
            e.set(_i19.__key, _t161, "text"),
            o.set(_i19.__key, _t161, "text"));
        }
        return;
      }
      if (gs(s)) {
        var _t162 = s.getChildrenSize(),
          _o55 = n >= _t162,
          _r32 = _o55 ? s.getChildAtIndex(_t162 - 1) : s.getChildAtIndex(n);
        if (Lo(_r32)) {
          var _t163 = 0;
          (_o55 && (_t163 = _r32.getTextContentSize()),
            e.set(_r32.__key, _t163, "text"));
        }
      }
      if (gs(i)) {
        var _t164 = i.getChildrenSize(),
          _e101 = r >= _t164,
          _n79 = _e101 ? i.getChildAtIndex(_t164 - 1) : i.getChildAtIndex(r);
        if (Lo(_n79)) {
          var _t165 = 0;
          (_e101 && (_t165 = _n79.getTextContentSize()),
            o.set(_n79.__key, _t165, "text"));
        }
      }
    }
    function Er(t, e, n, o, r) {
      var s = null,
        i = 0,
        l = null;
      (null !== o
        ? ((s = o.__key),
          Lo(o)
            ? ((i = o.getTextContentSize()), (l = "text"))
            : gs(o) && ((i = o.getChildrenSize()), (l = "element")))
        : null !== r &&
          ((s = r.__key), Lo(r) ? (l = "text") : gs(r) && (l = "element")),
        null !== s && null !== l
          ? t.set(s, i, l)
          : ((i = e.getIndexWithinParent()),
            -1 === i && (i = n.getChildrenSize()),
            t.set(n.__key, i, "element")));
    }
    function kr(t, e, n, o, r) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : r), "text")
        : t.offset > o.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function Or(t, e, n, o, r) {
      try {
        t.setBaseAndExtent(e, n, o, r);
      } catch (t) {}
    }
    function br(t, e, n) {
      var o = ji(t, e.getKey());
      if (gs(e)) {
        var _r33 = Rl(e, o, t);
        return [_r33.element, n + _r33.getFirstChildOffset()];
      }
      return [o, n];
    }
    function Mr(t, e, n, o, r, i) {
      var l = i.getRootNode(),
        c = ii(l) || fl(l) ? vl(l) : null;
      if ((r.has(ao) && c !== i) || (null !== c && Xs(c, c))) return;
      var a = xl(o, i);
      var u;
      if (!qo(e))
        return void (
          null !== t &&
          Zs(n, a.anchorNode, a.focusNode) &&
          o.removeAllRanges()
        );
      var f = e.anchor,
        d = e.focus,
        h = f.getNode(),
        g = d.getNode(),
        _br = br(n, h, f.offset),
        _ = _br[0],
        p = _br[1],
        _br2 = br(n, g, d.offset),
        m = _br2[0],
        y = _br2[1],
        x = e.format,
        C = e.style,
        S = e.isCollapsed();
      var T = _,
        N = m,
        v = !1;
      if (
        ("text" === f.type
          ? ((T = Lo(h) ? Kl(h, _, n) : null),
            (v = h.getFormat() !== x || h.getStyle() !== C))
          : qo(t) && "text" === t.anchor.type && (v = !0),
        "text" === d.type && (N = Lo(g) ? Kl(g, m, n) : null),
        null !== T && null !== N)
      ) {
        if (
          (S &&
            (null === t || v || (qo(t) && (t.format !== x || t.style !== C))) &&
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
            var _t166 = null !== c ? ei(c) : null;
            (null !== _t166 && _t166 !== n) ||
              r.has(ho) ||
              i.focus({ preventScroll: !0 });
          }
          if ("element" !== f.type) return;
        }
        if (
          (Or(o, T, p, N, y), s && e.isCollapsed() && null !== i && !r.has(ho))
        ) {
          var _t167 = Nl(i);
          if (null === _t167 || !i.contains(_t167)) {
            var _t168 = vl(i.ownerDocument),
              _e102 = null !== _t168 ? ei(_t168) : null;
            (null !== _e102 && _e102 !== n) || i.focus({ preventScroll: !0 });
          }
        }
        if (!r.has(uo) && e.isCollapsed() && null !== i && i === Nl(i)) {
          var _t169 =
            qo(e) && "element" === e.anchor.type
              ? T.childNodes[p] || null
              : (void 0 === u && (u = yl(o, i)), u);
          if (null !== _t169) {
            var _e103;
            if (si(_t169)) {
              var _n80 = _t169.ownerDocument.createRange();
              (_n80.selectNode(_t169), (_e103 = _n80.getBoundingClientRect()));
            } else _e103 = _t169.getBoundingClientRect();
            !(function (t, e, n) {
              var o = Gi(n),
                r = Xi(o);
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
                    var _t170 = _e105.offsetTop;
                    ((c = _t170), (a = _t170 + _e105.height));
                  } else ((c = 0), (a = Qi(t).innerHeight));
                  var _n81 = r.getComputedStyle(o.documentElement),
                    _s32 = parseFloat(_n81.scrollPaddingTop),
                    _i20 = parseFloat(_n81.scrollPaddingBottom);
                  (isFinite(_s32) && (c += _s32),
                    isFinite(_i20) && (a -= _i20));
                } else {
                  var _t171 = u === n ? s : u.getBoundingClientRect();
                  ((c = _t171.top), (a = _t171.bottom));
                }
                var _f1 = 0;
                if (
                  (i < c ? (_f1 = -(c - i)) : l > a && (_f1 = l - a), 0 !== _f1)
                )
                  if (_e104) r.scrollBy(0, _f1);
                  else {
                    var _t172 = u.scrollTop;
                    u.scrollTop += _f1;
                    var _e106 = u.scrollTop - _t172;
                    ((i -= _e106), (l -= _e106));
                  }
                if (_e104) break;
                u = Yi(u);
              }
            })(n, _e103, i);
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
    function Ar(t, e) {
      for (var _n82 of t.split(/(\r?\n|\t)/))
        "\n" === _n82 || "\r\n" === _n82
          ? e.linebreak()
          : "\t" === _n82
            ? e.tab()
            : "" !== _n82 && e.text(_n82);
    }
    function Dr(t) {
      var e = [];
      return (
        Ar(t, {
          linebreak: function linebreak() {
            return e.push(Os());
          },
          tab: function tab() {
            return e.push($o());
          },
          text: function text(t) {
            return e.push(Ro(t));
          },
        }),
        e
      );
    }
    function wr(t) {
      var e = [];
      for (var _n83 of t)
        bs(_n83) ||
          ((!gs(_n83) && !ms(_n83)) || _n83.isInline()
            ? e.push(_n83)
            : gs(_n83) && e.push.apply(e, wr(_n83.getChildren())));
      return e;
    }
    function Ir(e) {
      var n = e;
      e.isCollapsed() || n.removeText();
      var o = Sr();
      (qo(o) && (n = o), qo(n) || t(161));
      var r = n.anchor;
      var s = r.getNode(),
        i = r.offset;
      for (; !Il(s) && null === lc(s); ) {
        var _Pr;
        var _t173 = s;
        if (((_Pr = Pr(s, i)), (s = _Pr[0]), (i = _Pr[1]), _t173.is(s))) break;
      }
      return i;
    }
    function Pr(t, e) {
      var n = t.getParent();
      if (!n) {
        var _t174 = Ps();
        return (Ti().append(_t174), _t174.select(), [Ti(), 0]);
      }
      if (Lo(t)) {
        var _o56 = t.splitText(e);
        if (0 === _o56.length) return [n, t.getIndexWithinParent()];
        var _r34 = 0 === e ? 0 : 1;
        return [n, _o56[0].getIndexWithinParent() + _r34];
      }
      if (!gs(t) || 0 === e) return [n, t.getIndexWithinParent()];
      var o = t.getChildAtIndex(e);
      if (o) {
        var _n84 = new _Xo(
            Uo(t.__key, e, "element"),
            Uo(t.__key, e, "element"),
            0,
            "",
          ),
          _r35 = t.insertNewAfter(_n84);
        _r35 && _r35.append.apply(_r35, [o].concat(o.getNextSiblings()));
      }
      return [n, t.getIndexWithinParent() + 1];
    }
    function Fr(t) {
      return bs(t) || Zi(t) || Lo(t) || t.isParentRequired();
    }
    function Rr(t) {
      var e = Ps();
      var n = null;
      for (var _o57 = 0; _o57 < t.length; _o57++) {
        var _r36 = t[_o57];
        if (Fr(_r36)) {
          if (null === n) {
            ((n = _r36.createParentElementNode()), e.append(n));
            var _s33 = t[_o57 + 1];
            if (bs(_r36) && (void 0 === _s33 || !Fr(_s33))) continue;
          }
          n.append(_r36);
        } else (e.append(_r36), (n = null));
      }
      return e;
    }
    function Lr(t, e, n, o, r) {
      if (r === void 0) {
        r = "decorators-and-blocks";
      }
      if ("move" === e && "character" === o && !t.isCollapsed()) {
        var _ref32 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e107 = _ref32[0],
          _o58 = _ref32[1];
        return (_o58.set(_e107.key, _e107.offset, _e107.type), !0);
      }
      var s = sa(t.focus, n ? "previous" : "next"),
        i = "lineboundary" === o,
        l = "move" === e;
      var c = s,
        a = "decorators-and-blocks" === r;
      if (!_a(c)) {
        for (var _t175 of c) {
          a = !1;
          var _e108 = _t175.origin;
          if (
            !ms(_e108) ||
            _e108.isIsolated() ||
            ((c = _t175), !i || !_e108.isInline())
          )
            break;
        }
        if (a)
          for (var _t176 of qc(s).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (Rc(_t176)) _t176.origin.isInline() || (c = _t176);
            else {
              if (gs(_t176.origin)) continue;
              ms(_t176.origin) && !_t176.origin.isInline() && (c = _t176);
            }
            break;
          }
      }
      if (c === s) return !1;
      if (l && !i && ms(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t177 = xr();
        return (_t177.add(c.origin.getKey()), Ni(_t177), !0);
      }
      return ((c = ga(c)), l && ia(t.anchor, c), ia(t.focus, c), a || !i);
    }
    var Kr = null,
      Br = null,
      $r = !1,
      zr = !1,
      Wr = !1;
    var Ur = new Set();
    var Hr = 0;
    var jr = { characterData: !0, childList: !0, subtree: !0 };
    function Yr() {
      return $r || (null !== Kr && Kr._readOnly);
    }
    function Gr() {
      $r && t(13);
    }
    function Jr() {
      Hr > 99 && t(14);
    }
    function Vr() {
      return (null === Kr && t(195, Qr()), Kr);
    }
    function qr() {
      return (null === Br && t(337, Qr()), Br);
    }
    function Xr() {
      qr()._dirtyType = 2;
    }
    function Qr() {
      var t = 0;
      var e = new Set(),
        n = _Us.version;
      if ("undefined" != typeof window)
        for (var _o59 of gl(document)) {
          var _r37 = ni(_o59);
          if (ti(_r37)) t++;
          else if (_r37) {
            var _t178 = String(_r37.constructor.version || "<0.17.1");
            (_t178 === n &&
              (_t178 +=
                " (separately built, likely a bundler configuration issue)"),
              e.add(_t178));
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
    function Zr() {
      return Br;
    }
    function ts(t, e, n) {
      var o = e.__type,
        r = Js(t, o);
      var s = n.get(o);
      void 0 === s && ((s = Array.from(r.transforms)), n.set(o, s));
      var i = s.length;
      for (var _t179 = 0; _t179 < i && (s[_t179](e), e.isAttached()); _t179++);
    }
    function es(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function ns(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var o = e;
      Array.isArray(e) || (o = [e]);
      for (var _t180 of o) n.add(_t180);
    }
    function os(e, n) {
      var o = e.type,
        r = n.get(o);
      void 0 === r && t(17, o);
      var s = r.klass;
      e.type !== s.getType() && t(18, s.name);
      var i = s.importJSON(e),
        l = e.children;
      if (gs(i) && Array.isArray(l))
        for (var _t181 = 0; _t181 < l.length; _t181++) {
          var _e109 = os(l[_t181], n);
          i.append(_e109);
        }
      var c = e.$slots;
      if (c) {
        sc(i) || t(379, s.name);
        for (var _t182 in c) {
          Nc(i, _t182, os(c[_t182], n));
        }
      }
      return i;
    }
    function rs(t, e, n) {
      var o = Kr,
        r = $r,
        s = Br;
      ((Kr = e), ($r = !0), (Br = t));
      try {
        return n();
      } finally {
        ((Kr = o), ($r = r), (Br = s));
      }
    }
    function ss(t, e) {
      var n = Wr;
      Wr = !0;
      try {
        !(function (t, e) {
          var n = t._pendingEditorState,
            o = t._rootElement,
            r = t._headless || null === o;
          if (null === n)
            return void (
              !t._updating &&
              t._deferred.length > 0 &&
              cs(t, t._deferred)
            );
          var s = t._editorState,
            i = s._selection,
            l = n._selection,
            c = 0 !== t._dirtyType,
            a = Kr,
            u = $r,
            f = Br,
            d = t._updating,
            h = t._observer;
          var g = null;
          if (
            ((t._pendingEditorState = null),
            (t._editorState = n),
            !r && c && null !== h)
          ) {
            ((Br = t), (Kr = n), ($r = !1), (t._updating = !0));
            try {
              var _e110 = t._dirtyType,
                _o60 = t._dirtyElements,
                _r38 = t._dirtyLeaves;
              (h.disconnect(), (g = Ee(s, n, t, _e110, _o60, _r38)));
            } catch (e) {
              if ((e instanceof Error && t._onError(e), zr)) throw e;
              return (
                Ks(t, null, o, n),
                ct(t),
                (t._dirtyType = 2),
                (zr = !0),
                ss(t, s),
                void (zr = !1)
              );
            } finally {
              (h.observe(o, jr),
                (t._updating = d),
                (Kr = a),
                ($r = u),
                (Br = f));
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
              for (s in o) r.has(s) || (o === n && (o = Ci(t)), delete o[s]);
            })(t, n));
          var x = r ? null : al(Qi(t));
          if (
            t._editable &&
            null !== x &&
            (c || null === l || l.dirty || !l.is(i)) &&
            null !== o &&
            !y.has(fo)
          ) {
            ((Br = t), (Kr = n));
            try {
              if ((null !== h && h.disconnect(), c || null === l || l.dirty)) {
                var _e111 = t._blockCursorElement;
                (null !== _e111 && cl(_e111, t, o), Mr(i, l, t, x, y, o));
              }
              !(function (t, e, n) {
                var o = t._blockCursorElement;
                if (
                  qo(n) &&
                  n.isCollapsed() &&
                  "element" === n.anchor.type &&
                  e.contains(Nl(e))
                ) {
                  var _r39 = n.anchor,
                    _s34 = _r39.getNode(),
                    _i21 = _r39.offset;
                  var _l13 = !1,
                    _c1 = null;
                  if (_i21 === _s34.getChildrenSize()) {
                    ll(_s34.getChildAtIndex(_i21 - 1)) && (_l13 = !0);
                  } else {
                    var _e112 = _s34.getChildAtIndex(_i21);
                    null !== _e112 &&
                      ll(_e112) &&
                      ((_l13 = !0), (_c1 = t.getElementByKey(_e112.__key)));
                  }
                  if (_l13) {
                    var _n85 = Rl(
                      _s34,
                      t.getElementByKey(_s34.__key),
                      t,
                    ).element;
                    return (
                      null === o &&
                        (t._blockCursorElement = o =
                          (function (t) {
                            var e = t.theme,
                              n = pl().createElement("div");
                            ((n.contentEditable = "false"),
                              n.setAttribute("data-lexical-cursor", "true"));
                            var o = e.blockCursor;
                            if (void 0 !== o) {
                              var _n$classList;
                              if ("string" == typeof o) {
                                var _t183 = Ta(o);
                                o = e.blockCursor = _t183;
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
                null !== o && cl(o, t, e);
              })(t, o, l);
            } finally {
              (null !== h && h.observe(o, jr), (Br = f), (Kr = a));
            }
          }
          null !== g &&
            (function (t, e, n, o, r) {
              var s = Array.from(t._listeners.mutation),
                i = s.length;
              for (var _t184 = 0; _t184 < i; _t184++) {
                var _s$_t = s[_t184],
                  _i22 = _s$_t[0],
                  _l14 = _s$_t[1];
                for (var _t185 of _l14) {
                  var _s35 = e.get(_t185);
                  void 0 !== _s35 &&
                    _i22(_s35, {
                      dirtyLeaves: o,
                      prevEditorState: r,
                      updateTags: n,
                    });
                }
              }
            })(t, g, y, _, s);
          qo(l) ||
            null === l ||
            (null !== i && i.is(l)) ||
            t.dispatchCommand(be);
          var C = t._pendingDecorators;
          null !== C &&
            ((t._decorators = C),
            (t._pendingDecorators = null),
            is("decorator", t, !0, C));
          if (
            ((function (t, e, n) {
              var o = Si(e),
                r = Si(n);
              o !== r && is("textcontent", t, !0, r);
            })(t, e || s, n),
            is("update", t, !0, {
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
            cs(t, t._deferred);
          }
          !(function (t) {
            var e = t._updates;
            if (0 === e.length) return void (t._cascadeCount = 0);
            if (
              ((function (t) {
                if (Ur.has(t)) return;
                (Ur.add(t),
                  setTimeout(function () {
                    (Ur["delete"](t), (t._cascadeCount = 0));
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
                _o61 = n[1];
              us(t, _e113, _o61);
            }
          })(t);
        })(t, e);
      } finally {
        Wr = n;
      }
    }
    function is(t, e, n) {
      var r = e._updating;
      e._updating = n;
      try {
        var _n86 = e._listeners[t],
          _r40 = Array.from(_n86);
        for (
          var _len4 = arguments.length,
            o = new Array(_len4 > 3 ? _len4 - 3 : 0),
            _key4 = 3;
          _key4 < _len4;
          _key4++
        ) {
          o[_key4 - 3] = arguments[_key4];
        }
        for (var _ref34 of _r40) {
          var _t186 = _ref34[0];
          var _e114 = _ref34[1];
          {
            _e114 && _e114();
            var _r41 = _t186.apply(void 0, o),
              _s36 = "function" == typeof _r41 ? _r41 : void 0;
            _n86.has(_t186) ? _n86.set(_t186, _s36) : _s36 && _s36();
          }
        }
      } finally {
        e._updating = r;
      }
    }
    function ls(t, e, n, o) {
      var r = Oi(t);
      var s;
      if (!Wr)
        for (var _t187 = 0; _t187 < r.length; _t187++)
          r[_t187]._updating || (r[_t187]._cascadeCount = 0);
      for (var _t188 = 4; _t188 >= 0; _t188--) {
        var _loop = function _loop() {
            var l = r[_i23];
            if (_i23 > 0 && l._updating) {
              s = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e115 = c[_t188];
              if (_e115.size > 0) {
                var _t189 = !1;
                if (
                  (fs(l, function () {
                    for (var _r42 of _e115)
                      if (_r42(n, o)) return void (_t189 = !0);
                  }),
                  _t189)
                )
                  return { v: _t189 };
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
            ls(s, e, n, o);
          }),
        !1
      );
    }
    function cs(t, e) {
      if (((t._deferred = []), 0 !== e.length)) {
        var _n87 = t._updating;
        t._updating = !0;
        try {
          for (var _t190 = 0; _t190 < e.length; _t190++) e[_t190]();
        } finally {
          t._updating = _n87;
        }
      }
    }
    function as(e, n) {
      var o = e._updates;
      var r = n || !1;
      for (; 0 !== o.length; ) {
        var _n88 = o.shift();
        if (_n88) {
          var _o62 = _n88[0],
            _s37 = _n88[1],
            _i24 = e._pendingEditorState;
          var _l15 = void 0;
          (void 0 !== _s37 &&
            ((_l15 = _s37.onUpdate),
            _s37.skipTransforms && (r = !0),
            _s37.discrete && (null === _i24 && t(191), (_i24._flushSync = !0)),
            _l15 && e._deferred.push(_l15),
            ns(e, _s37.tag)),
            null == _i24 ? us(e, _o62, _s37) : _o62());
        }
      }
      return r;
    }
    function us(e, n, o) {
      var r = e._updateTags;
      var s,
        i = !1,
        l = !1;
      (void 0 !== o &&
        ((s = o.onUpdate),
        ns(e, o.tag),
        (i = o.skipTransforms || !1),
        (l = o.discrete || !1)),
        s && e._deferred.push(s));
      var c = e._editorState;
      var a = e._pendingEditorState,
        u = !1;
      ((null === a || a._readOnly) &&
        ((a = e._pendingEditorState = Cs(a || c)), (u = !0)),
        (a._flushSync = l));
      var f = Kr,
        d = $r,
        h = Br,
        g = e._updating;
      ((Kr = a), ($r = !1), (e._updating = !0), (Br = e));
      var _ = e._headless || null === e.getRootElement();
      js(null);
      try {
        u &&
          (_
            ? null !== c._selection && (a._selection = c._selection.clone())
            : (a._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  o = al(Qi(t));
                return qo(n) || null == n ? Cr(n, o, t, e) : n.clone();
              })(e, (o && o.event) || null)));
        var _r43 = e._compositionKey;
        (n(),
          (i = as(e, i)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              o = t._selection;
            if (qo(o)) {
              var _t191 = o.anchor,
                _e116 = o.focus;
              var _r44;
              if (
                ("text" === _t191.type &&
                  ((_r44 = _t191.getNode()), _r44.selectionTransform(n, o)),
                "text" === _e116.type)
              ) {
                var _t192 = _e116.getNode();
                _r44 !== _t192 && _t192.selectionTransform(n, o);
              }
            }
          })(a, e),
          0 !== e._dirtyType &&
            (i
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = t._nodeMap;
                  for (var _t193 of n) {
                    var _e117 = o.get(_t193);
                    Lo(_e117) &&
                      _e117.isAttached() &&
                      _e117.isSimpleText() &&
                      !_e117.isUnmergeable() &&
                      Et(_e117);
                  }
                })(a, e)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    o = e._dirtyElements,
                    r = t._nodeMap,
                    s = gi(),
                    i = new Map();
                  var l = n,
                    c = l.size,
                    a = o,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t194 of l) {
                        var _o63 = r.get(_t194);
                        (Lo(_o63) &&
                          _o63.isAttached() &&
                          _o63.isSimpleText() &&
                          !_o63.isUnmergeable() &&
                          Et(_o63),
                          void 0 !== _o63 && es(_o63, s) && ts(e, _o63, i),
                          n.add(_t194));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        Hr++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t195 of a) {
                      var _n89 = _t195[0],
                        _l16 = _t195[1];
                      if ((o.set(_n89, _l16), !_l16)) continue;
                      var _c10 = r.get(_n89);
                      void 0 !== _c10 && es(_c10, s) && ts(e, _c10, i);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      Hr++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = o));
                })(a, e),
            as(e),
            (function (t, e, n, o) {
              var r = t._nodeMap,
                s = e._nodeMap,
                i = [];
              for (var _ref36 of o) {
                var _t196 = _ref36[0];
                {
                  var _e118 = s.get(_t196);
                  void 0 !== _e118 &&
                    (_e118.isAttached() ||
                      (gs(_e118) && Q(_e118, _t196, r, s, i, o),
                      r.has(_t196) || o["delete"](_t196),
                      i.push(_t196)));
                }
              }
              for (var _t197 of n) {
                var _e119 = s.get(_t197);
                void 0 === _e119 ||
                  _e119.isAttached() ||
                  (sc(_e119) &&
                    null !== _e119.__slots &&
                    Q(_e119, _t197, r, s, i, n),
                  r.has(_t197) || n["delete"](_t197),
                  i.push(_t197));
              }
              for (var _t198 of i) s["delete"](_t198);
              var l = qr(),
                c = l._compositionKey;
              null === c || s.has(c) || (l._compositionKey = null);
            })(c, a, e._dirtyLeaves, e._dirtyElements)));
        _r43 !== e._compositionKey && (a._flushSync = !0);
        var _s38 = a._selection;
        if (qo(_s38)) {
          e._slotsUsed && gr(_s38);
          var _n90 = a._nodeMap,
            _o64 = _s38.anchor.key,
            _r45 = _s38.focus.key;
          (void 0 !== _n90.get(_o64) && void 0 !== _n90.get(_r45)) || t(19);
        } else Qo(_s38) && 0 === _s38._nodes.size && (a._selection = null);
      } catch (t) {
        return (
          t instanceof Error && e._onError(t),
          (e._pendingEditorState = c),
          (e._dirtyType = 2),
          e._cloneNotNeeded.clear(),
          (e._dirtyLeaves = new Set()),
          e._dirtyElements.clear(),
          void ss(e)
        );
      } finally {
        ((Kr = f), ($r = d), (Br = h), (e._updating = g), (Hr = 0));
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
          ? ((a._flushSync = !1), ss(e))
          : u &&
            qs(function () {
              ss(e);
            })
        : ((a._flushSync = !1),
          u && (r.clear(), (e._deferred = []), (e._pendingEditorState = null)));
    }
    function fs(t, e, n) {
      Br === t && void 0 === n ? (Yr() ? us(t, e, n) : e()) : us(t, e, n);
    }
    function ds(t) {
      if (nl(t)) {
        var _e120 = null;
        for (var _n91 of t.getChildren())
          _e120 = _n91.isInline()
            ? (_e120 || _n91.replace(_n91.createParentElementNode())).append(
                _n91,
              )
            : null;
      }
    }
    var _hs4 = (function (_io2) {
      function hs(t) {
        var _this3;
        ((_this3 = _io2.call(this, t) || this),
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
      babelHelpers.inheritsLoose(hs, _io2);
      var _proto10 = hs.prototype;
      _proto10.$config = function $config() {
        return this.config(Symbol["for"]("ElementNode"), {
          $transform: ds,
          extends: _io5,
        });
      };
      _proto10.afterCloneFrom = function afterCloneFrom(e) {
        (_io2.prototype.afterCloneFrom.call(this, e),
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
        return 0 === this.getChildrenSize() && 0 === dc(this).length;
      };
      _proto10.isDirty = function isDirty() {
        var t = qr()._dirtyElements;
        return null !== t && t.has(this.__key);
      };
      _proto10.isLastChild = function isLastChild() {
        var t = this.getLatest(),
          e = this.getParentOrThrow().getLastChild();
        return null !== e && e.is(t);
      };
      _proto10.getAllTextNodes = function getAllTextNodes() {
        var t = [];
        for (var _e121 of dc(this)) {
          var _n92 = hc(this, _e121);
          gs(_n92) && t.push.apply(t, _n92.getAllTextNodes());
        }
        var e = this.getFirstChild();
        for (; null !== e; ) {
          if ((Lo(e) && t.push(e), gs(e))) {
            var _n93 = e.getAllTextNodes();
            t.push.apply(t, _n93);
          }
          e = e.getNextSibling();
        }
        return t;
      };
      _proto10.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; gs(t); ) {
          var _e122 = t.getFirstChild();
          if (null === _e122) break;
          t = _e122;
        }
        return t;
      };
      _proto10.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; gs(t); ) {
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
          var _t199 = e[n - 1];
          return (gs(_t199) && _t199.getLastDescendant()) || _t199 || null;
        }
        var o = e[t];
        return (gs(o) && o.getFirstDescendant()) || o || null;
      };
      _proto10.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : _i(t);
      };
      _proto10.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var e = this.getFirstChild();
        return (null === e && t(45, this.__key), e);
      };
      _proto10.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : _i(t);
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
        var t = Cc(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o65 = 0; _o65 < n; _o65++) {
          var _r46 = e[_o65];
          ((t += _r46.getTextContent()),
            gs(_r46) && _o65 !== n - 1 && !_r46.isInline() && (t += v));
        }
        return t;
      };
      _proto10.getTextContentSize = function getTextContentSize() {
        var t = (function (t) {
          var e = 0;
          for (var _n94 of dc(t)) {
            var _o66 = hc(t, _n94);
            null !== _o66 && (e += _o66.getTextContentSize());
          }
          return e;
        })(this);
        var e = this.getChildren(),
          n = e.length;
        for (var _o67 = 0; _o67 < n; _o67++) {
          var _r47 = e[_o67];
          ((t += _r47.getTextContentSize()),
            gs(_r47) && _o67 !== n - 1 && !_r47.isInline() && (t += 2));
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
        return ci(this.getLatest().__textFormat, t, e);
      };
      _proto10.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto10.select = function select(t, e) {
        Gr();
        var n = Sr();
        var o = t,
          r = e;
        var s = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t200 = this.getFirstChild();
            if (Lo(_t200) || gs(_t200)) return _t200.select(0, 0);
          } else if (
            !((void 0 !== t && t !== s) || (void 0 !== e && e !== s))
          ) {
            var _t201 = this.getLastChild();
            if (Lo(_t201) || gs(_t201)) return _t201.select();
          }
        (void 0 === o && (o = s), void 0 === r && (r = s));
        var i = this.__key;
        return qo(n)
          ? (n.anchor.set(i, o, "element"),
            n.focus.set(i, r, "element"),
            (n.dirty = !0),
            n)
          : mr(i, o, i, r, "element", "element");
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
        ro(this) && t(324, this.__key, this.__type);
        var r = this.getChildrenSize(),
          s = this.getWritable();
        e + n <= r || t(226, String(e), String(n), String(r));
        for (var _t202 of o);
        var i = s.__key,
          l = [],
          c = [];
        var a = this.getChildAtIndex(e + n),
          u = null,
          f = r - n + o.length;
        if (0 !== e)
          if (e === r) u = this.getLastChild();
          else {
            var _t203 = this.getChildAtIndex(e);
            null !== _t203 && (u = _t203.getPreviousSibling());
          }
        if (n > 0) {
          var _e125 = null === u ? this.getFirstChild() : u.getNextSibling();
          for (var _o68 = 0; _o68 < n; _o68++) {
            null === _e125 && t(100);
            var _n95 = _e125.getNextSibling(),
              _o69 = _e125.__key;
            (ui(_e125.getWritable()), c.push(_o69), (_e125 = _n95));
          }
        }
        var d = u;
        for (var _e126 of o) {
          (null !== d && _e126.is(d) && (u = d = d.getPreviousSibling()),
            null !== a && _e126.is(a) && (a = a.getNextSibling()));
          var _n96 = _e126.getWritable();
          (_n96.__parent === i && f--, ui(_n96));
          var _o70 = _e126.__key;
          if (null === d) ((s.__first = _o70), (_n96.__prev = null));
          else {
            var _t204 = d.getWritable();
            ((_t204.__next = _o70), (_n96.__prev = _t204.__key));
          }
          (_e126.__key === i && t(76),
            (_n96.__parent = i),
            l.push(_o70),
            (d = _e126));
        }
        if (null === a) {
          if (null !== d) {
            ((d.getWritable().__next = null), (s.__last = d.__key));
          }
        } else {
          var _t205 = a.getWritable();
          if (null !== d) {
            var _e127 = d.getWritable();
            ((_t205.__prev = d.__key), (_e127.__next = a.__key));
          } else _t205.__prev = null;
        }
        if (((s.__size = f), c.length)) {
          var _t206 = Sr();
          if (qo(_t206)) {
            var _e128 = new Set(c),
              _n97 = new Set(l),
              _o71 = _t206.anchor,
              _r48 = _t206.focus;
            (_s(_o71, _e128, _n97) && Er(_o71, _o71.getNode(), this, u, a),
              _s(_r48, _e128, _n97) && Er(_r48, _r48.getNode(), this, u, a),
              0 !== f || this.canBeEmpty() || nl(this) || this.remove());
          }
        }
        return s;
      };
      _proto10.getDOMSlot = function getDOMSlot(t) {
        return new _H(t);
      };
      _proto10.exportDOM = function exportDOM(t) {
        var _io2$prototype$export = _io2.prototype.exportDOM.call(this, t),
          e = _io2$prototype$export.element;
        if (kl(e)) {
          var _t207 = this.getIndent();
          _t207 > 0 &&
            ((e.style.paddingInlineStart = 40 * _t207 + "px"),
            e.setAttribute("data-lexical-indent", String(_t207)));
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
            _io2.prototype.exportJSON.call(this),
          ),
          e = this.getTextFormat(),
          n = this.getTextStyle();
        return (
          (0 === e && "" === n) ||
            nl(this) ||
            this.getChildren().some(Lo) ||
            (0 !== e && (t.textFormat = e), "" !== n && (t.textStyle = n)),
          t
        );
      };
      _proto10.updateFromJSON = function updateFromJSON(t) {
        return _io2.prototype.updateFromJSON
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
        var n = Rl(this, t, e);
        var o = n.getFirstChild();
        for (
          var _t208 = this.getFirstChild();
          _t208;
          _t208 = _t208.getNextSibling()
        ) {
          var _r49 = e.getElementByKey(_t208.getKey());
          null !== _r49 &&
            (null == o
              ? (n.insertChild(_r49), (o = _r49))
              : o !== _r49 && n.replaceChild(_r49, o),
            (o = o.nextSibling));
        }
      };
      return hs;
    })(_io5);
    function gs(t) {
      return t instanceof _hs4;
    }
    function _s(t, e, n) {
      var o = t.getNode();
      for (; o; ) {
        var _t209 = o.__key;
        if (e.has(_t209) && !n.has(_t209)) return !0;
        o = o.getParent();
      }
      return !1;
    }
    var _ps = (function (_io3) {
      function ps(t) {
        var _this4;
        ((_this4 = _io3.call(this, t) || this),
          (_this4.__slotHost = null),
          (_this4.__slots = null));
        return _this4;
      }
      babelHelpers.inheritsLoose(ps, _io3);
      var _proto11 = ps.prototype;
      _proto11.afterCloneFrom = function afterCloneFrom(e) {
        (_io3.prototype.afterCloneFrom.call(this, e),
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
      return ps;
    })(_io5);
    function ms(t) {
      return t instanceof _ps;
    }
    var _ys = (function (_hs) {
      function ys() {
        var _this5;
        ((_this5 = _hs.call(this, "root") || this),
          (_this5.__cachedText = null));
        return _this5;
      }
      babelHelpers.inheritsLoose(ys, _hs);
      var _proto12 = ys.prototype;
      _proto12.$config = function $config() {
        return this.config("root", { extends: _hs4 });
      };
      _proto12.getTopLevelElementOrThrow =
        function getTopLevelElementOrThrow() {
          t(51);
        };
      _proto12.getTextContent = function getTextContent() {
        var t = this.__cachedText;
        return null === t || (!Yr() && 0 !== qr()._dirtyType)
          ? _hs.prototype.getTextContent.call(this)
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
        for (var _e129 of o) gs(_e129) || ms(_e129) || t(282);
        return _hs.prototype.splice.call(this, e, n, o);
      };
      ys.importJSON = function importJSON(t) {
        return Ti().updateFromJSON(t);
      };
      _proto12.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return ys;
    })(_hs4);
    function xs(t) {
      return t instanceof _ys;
    }
    function Cs(t) {
      return new _Ns(q(t._nodeMap), null, t._slotsUsed);
    }
    function Ss() {
      return new _Ns(new Map([["root", new _ys()]]), null, !1);
    }
    function Ts(e) {
      var n = e.exportJSON(),
        o = e.constructor;
      if ((n.type !== o.getType() && t(130, o.name), gs(e))) {
        var _r50 = n.children;
        Array.isArray(_r50) || t(59, o.name);
        var _s39 = e.getChildren();
        for (var _t210 = 0; _t210 < _s39.length; _t210++) {
          var _e130 = Ts(_s39[_t210]);
          _r50.push(_e130);
        }
      }
      var r = dc(e);
      if (r.length > 0) {
        var _s40 = {};
        for (var _n99 of r) {
          var _r51 = hc(e, _n99);
          (null === _r51 && t(366, o.name, _n99), (_s40[_n99] = Ts(_r51)));
        }
        n.$slots = _s40;
      }
      return n;
    }
    var _Ns = (function () {
      function Ns(t, e, n) {
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
      var _proto13 = Ns.prototype;
      _proto13.isEmpty = function isEmpty() {
        return 1 === this._nodeMap.size && null === this._selection;
      };
      _proto13.read = function read(t, e) {
        return rs((e && e.editor) || null, this, t);
      };
      _proto13.clone = function clone(t) {
        var e = new Ns(
          this._nodeMap,
          void 0 === t ? this._selection : t,
          this._slotsUsed,
        );
        return ((e._readOnly = !0), (e._parsed = this._parsed), e);
      };
      _proto13.toJSON = function toJSON() {
        return rs(null, this, function () {
          return { root: Ts(Ti()) };
        });
      };
      return Ns;
    })();
    var _vs = (function (_hs2) {
      function vs() {
        return _hs2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(vs, _hs2);
      var _proto14 = vs.prototype;
      _proto14.$config = function $config() {
        return this.config("artificial", { extends: _hs4 });
      };
      _proto14.createDOM = function createDOM(t) {
        return pl().createElement("div");
      };
      return vs;
    })(_hs4);
    var _Es = (function (_io4) {
      function Es() {
        return _io4.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Es, _io4);
      var _proto15 = Es.prototype;
      _proto15.$config = function $config() {
        return this.config("linebreak", {
          importDOM: {
            br: function br(t) {
              return Ms(t) || As(t) ? null : { conversion: ks, priority: 0 };
            },
          },
        });
      };
      _proto15.getTextContent = function getTextContent() {
        return "\n";
      };
      _proto15.createDOM = function createDOM() {
        return pl().createElement("br");
      };
      _proto15.updateDOM = function updateDOM() {
        return !1;
      };
      _proto15.isInline = function isInline() {
        return !0;
      };
      return Es;
    })(_io5);
    function ks(t) {
      return { node: Os() };
    }
    function Os() {
      return rl(new _Es());
    }
    function bs(t) {
      return t instanceof _Es;
    }
    function Ms(t) {
      var e = t.parentElement;
      if (null !== e && wl(e)) {
        var _n100 = e.firstChild;
        if (_n100 === t || (_n100.nextSibling === t && Ds(_n100))) {
          var _n101 = e.lastChild;
          if (_n101 === t || (_n101.previousSibling === t && Ds(_n101)))
            return !0;
        }
      }
      return !1;
    }
    function As(t) {
      var e = t.parentElement;
      if (null !== e && wl(e)) {
        var _n102 = e.firstChild;
        if (_n102 === t || (_n102.nextSibling === t && Ds(_n102))) return !1;
        var _o72 = e.lastChild;
        if (_o72 === t || (_o72.previousSibling === t && Ds(_o72))) return !0;
      }
      return !1;
    }
    function Ds(t) {
      return si(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    var _ws = (function (_hs3) {
      function ws() {
        return _hs3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(ws, _hs3);
      var _proto16 = ws.prototype;
      _proto16.$config = function $config() {
        return this.config("paragraph", {
          extends: _hs4,
          importDOM: {
            p: function p() {
              return { conversion: Is, priority: 0 };
            },
          },
        });
      };
      _proto16.createDOM = function createDOM(t) {
        var e = pl().createElement("p"),
          n = Bi(t.theme, "paragraph");
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
        var _hs3$prototype$export = _hs3.prototype.exportDOM.call(this, t),
          e = _hs3$prototype$export.element;
        if (kl(e)) {
          this.isEmpty() && e.append(pl().createElement("br"));
          var _t211 = this.getFormatType();
          _t211 && (e.style.textAlign = _t211);
        }
        return { element: e };
      };
      _proto16.exportJSON = function exportJSON() {
        var t = _hs3.prototype.exportJSON.call(this);
        if (void 0 === t.textFormat || void 0 === t.textStyle) {
          var _e131 = this.getChildren().find(Lo);
          _e131
            ? ((t.textFormat = _e131.getFormat()),
              (t.textStyle = _e131.getStyle()))
            : ((t.textFormat = this.getTextFormat()),
              (t.textStyle = this.getTextStyle()));
        }
        return t;
      };
      _proto16.insertNewAfter = function insertNewAfter(t, e) {
        var n = Ps();
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
          (Lo(t[0]) && "" === t[0].getTextContent().trim())
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return ws;
    })(_hs4);
    function Is(t) {
      var e = Ps();
      if ((jl(e, t), Ul(t, e), "" === e.getFormatType())) {
        var _n103 = t.getAttribute("align");
        _n103 && _n103 && _n103 in w && e.setFormat(_n103);
      }
      return (Hl(e, t), { node: e });
    }
    function Ps() {
      return rl(new _ws());
    }
    function Fs(t) {
      return t instanceof _ws;
    }
    function Rs(t) {
      console.warn(t);
    }
    var Ls = 0;
    function Ks(t, e, n, o, r) {
      var s = t._keyToDOMMap;
      (s.clear(),
        (t._editorState = Ss()),
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
          ((n.textContent = ""), s.set("root", n), mi(n, t, "root")));
    }
    function Bs(t) {
      var e = new Set(),
        n = new Set();
      for (var _ref38 of tc(t)) {
        var _o73 = _ref38.klass;
        var _r52 = _ref38.ownNodeConfig;
        {
          var _t212 = _o73.transform;
          if (!n.has(_t212)) {
            n.add(_t212);
            var _r53 = _o73.transform();
            _r53 && e.add(_r53);
          }
          if (_r52) {
            var _t213 = _r52.$transform;
            _t213 && e.add(_t213);
          }
        }
      }
      return e;
    }
    var $s = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, o) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = Vs(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, o, r) {
        return gs(t) && t.extractWithChild(e, n, o);
      },
      $getDOMSlot: function $getDOMSlot(t, e, n) {
        return t.getDOMSlot(e);
      },
      $getSlotTargetElement: function $getSlotTargetElement(t, e, n, o) {
        return null;
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return gs(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, o) {
        return t.updateDOM(e, n, o._config);
      },
    };
    function zs(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function Ws(t, e, n) {
      return (t.set(e, n), zs.bind(null, t, e));
    }
    var _Us = (function () {
      function Us(t, e, n, o, r, s, i, l, c) {
        ((this._createEditorArgs = c),
          (this._parentEditor = e),
          (this._rootElement = null),
          (this._editorState = t),
          (this._pendingEditorState = null),
          (this._compositionKey = null),
          (this._deferred = []),
          (this._keyToDOMMap = new _X()),
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
          (this._key = bi()),
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
            selectionChangeFromDOMUpdatePoints: null,
            unprocessedBeforeInputData: null,
          }));
      }
      var _proto17 = Us.prototype;
      _proto17.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto17.registerUpdateListener = function registerUpdateListener(t) {
        return Ws(this._listeners.update, t);
      };
      _proto17.registerEditableListener = function registerEditableListener(t) {
        return Ws(this._listeners.editable, t);
      };
      _proto17.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return Ws(this._listeners.decorator, t);
      };
      _proto17.registerTextContentListener =
        function registerTextContentListener(t) {
          return Ws(this._listeners.textcontent, t);
        };
      _proto17.registerRootListener = function registerRootListener(t) {
        var _this14 = this;
        var e = this._listeners.root;
        return Na(Ws(e, t, t(this._rootElement, null) || void 0), function () {
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
          r.set(e, [new _J(), new _J(), new _J(), new _J(), new _J()]);
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
          o = zl(n).get(e.getType());
        if (!o) return;
        var r = new Map();
        for (var _t214 of o.keys()) r.set(_t214, "created");
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
          var _t215 = this.registerNodeTransformToKlass(r, e);
          o.push(_t215);
        }
        return (
          (function (t, e) {
            var n = zl(t.getEditorState()),
              o = [];
            for (var _t216 of e) {
              var _e132 = n.get(_t216);
              _e132 && o.push(_e132);
            }
            if (0 === o.length) return;
            t.update(
              function () {
                for (var _t217 of o)
                  for (var _e133 of _t217.keys()) {
                    var _t218 = _i(_e133);
                    _t218 && _t218.markDirty();
                  }
              },
              null === t._pendingEditorState ? { tag: co } : void 0,
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
      _proto17.dispatchCommand = function dispatchCommand(t) {
        for (
          var _len6 = arguments.length,
            e = new Array(_len6 > 1 ? _len6 - 1 : 0),
            _key6 = 1;
          _key6 < _len6;
          _key6++
        ) {
          e[_key6 - 1] = arguments[_key6];
        }
        return Hi.apply(void 0, [this, t].concat(e));
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
          var _n104 = Bi(this._config.theme, "root"),
            _o74 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            Ks(this, e, t, _o74, { preserveUpdateQueue: !0 }),
            null !== e &&
              (this._config.disableEvents || eo(e),
              null != _n104 &&
                (_e$classList3 = e.classList).remove.apply(
                  _e$classList3,
                  _n104,
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e134 = Xi(t),
              _o75 = t.style;
            ((_o75.userSelect = "text"),
              (_o75.whiteSpace = "pre-wrap"),
              (_o75.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e134),
              (this._dirtyType = 2),
              ct(this),
              this._updateTags.add(co),
              ss(this),
              this._config.disableEvents ||
                (function (t, e) {
                  var n = t.ownerDocument;
                  Mn.set(t, n);
                  var o = An.get(n);
                  (void 0 === o &&
                    ((o = { editors: new Set(), hasShadowEditor: void 0 }),
                    An.set(n, o)),
                    o.editors.add(e),
                    (o.hasShadowEditor = void 0),
                    (t.__lexicalEditor = e));
                  var r = Vn(t);
                  r.push(Dn.register(n));
                  var _loop2 = function _loop2() {
                    var _bn$_n = bn[_n105],
                      o = _bn$_n[0],
                      s = _bn$_n[1],
                      i =
                        "function" == typeof s
                          ? function (t) {
                              Zn(t) ||
                                (Qn(t),
                                (e.isEditable() || "click" === o) && s(t, e));
                            }
                          : function (t) {
                              if (Zn(t)) return;
                              Qn(t);
                              var n = e.isEditable();
                              switch (o) {
                                case "cut":
                                  return n && Hi(e, pn, t);
                                case "copy":
                                  return Hi(e, _n, t);
                                case "paste":
                                  return n && Hi(e, Be, t);
                                case "dragstart":
                                  return n && Hi(e, dn, t);
                                case "dragover":
                                  return n && Hi(e, hn, t);
                                case "dragend":
                                  return n && Hi(e, gn, t);
                                case "focus":
                                  return n && Hi(e, Tn, t);
                                case "blur":
                                  return n && Hi(e, Nn, t);
                                case "drop":
                                  return n && Hi(e, un, t);
                              }
                            };
                    r.push(kn(t, o, i));
                  };
                  for (var _n105 = 0; _n105 < bn.length; _n105++) {
                    _loop2();
                  }
                })(t, this),
              null != _n104 &&
                (_t$classList = t.classList).add.apply(_t$classList, _n104));
          } else ((this._window = null), this._updateTags.add(co), ss(this));
          is("root", this, !1, t, e);
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
          ((o = Cs(e)),
          (o._selection = e._selection ? e._selection.clone() : null)),
          lt(this));
        var r = this._pendingEditorState,
          s = void 0 !== n ? n.tag : null;
        (null === r ||
          r.isEmpty() ||
          (null != s && this._updateTags.add(s), ss(this)),
          (this._pendingEditorState = o),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          (this._slotsUsed = this._slotsUsed || e._slotsUsed),
          fs(
            this,
            function () {
              if ((s && _this15._updateTags.add(s), e._parsed))
                for (var _ref40 of o._nodeMap.entries()) {
                  var _t219 = _ref40[0];
                  var _e135 = _ref40[1];
                  gs(_e135)
                    ? _this15._dirtyElements.set(_t219, !0)
                    : _this15._dirtyLeaves.add(_t219);
                }
            },
            { discrete: !this._updating || void 0 },
          ));
      };
      _proto17.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var o = Ss(),
            r = Kr,
            s = $r,
            i = Br,
            l = e._dirtyElements,
            c = e._dirtyLeaves,
            a = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Set()),
            (e._dirtyType = 0),
            (Kr = o),
            ($r = !1),
            (Br = e),
            js(null));
          try {
            var _r54 = e._nodes;
            (os(t.root, _r54), n && n(), (o._readOnly = !0), (o._parsed = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = c),
              (e._cloneNotNeeded = a),
              (e._dirtyType = u),
              (Kr = r),
              ($r = s),
              (Br = i));
          }
          return o;
        })("string" == typeof t ? JSON.parse(t) : t, this, e);
      };
      _proto17.read = function read() {
        for (
          var _len7 = arguments.length, t = new Array(_len7), _key7 = 0;
          _key7 < _len7;
          _key7++
        ) {
          t[_key7] = arguments[_key7];
        }
        var _ref41 = 1 === t.length ? ["force-commit", t[0]] : t,
          e = _ref41[0],
          n = _ref41[1];
        "force-commit" === e && ss(this);
        return (
          "pending" === e
            ? this._pendingEditorState || this._editorState
            : this.getEditorState()
        ).read(n, { editor: this });
      };
      _proto17.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : us(t, e, n);
        })(this, t, e);
      };
      _proto17.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          fs(this, function () {
            var o = Sr(),
              r = Ti();
            (null !== o
              ? o.dirty || Ni(o.clone())
              : 0 !== r.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? r.selectStart()
                  : r.selectEnd()),
              Ji("focus"),
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
          is("editable", this, !0, t),
          this._slotsUsed &&
            this.update(function () {
              return Xr();
            }));
      };
      _proto17.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON() };
      };
      return Us;
    })();
    _Us.version = G;
    var Hs = null;
    function js(t) {
      Hs = t;
    }
    var Ys = Symbol("INTERNAL_SKIP_AFTER_CLONE_FROM");
    var Gs = 1;
    function Js(e, n) {
      var o = Vs(e, n);
      return (void 0 === o && t(30, n), o);
    }
    function Vs(t, e) {
      return t._nodes.get(e);
    }
    var qs =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function Xs(t, e) {
      var n =
        void 0 !== e
          ? e
          : (function () {
              var e = t.getRootNode();
              return ii(e) || fl(e) ? vl(e) : null;
            })();
      if (!kl(n)) return !1;
      if (n.hasAttribute("data-lexical-slot")) return !1;
      var o = xi(n),
        r = n.nodeName;
      return (
        lo(o) &&
        ("INPUT" === r ||
          "TEXTAREA" === r ||
          ("true" === n.contentEditable && null == ni(n)))
      );
    }
    var Qs = Xs;
    function Zs(t, e, n) {
      var o = t.getRootElement();
      if (!o) return !1;
      try {
        if (!e || !o.contains(e) || !o.contains(n)) return !1;
      } catch (t) {
        return !1;
      }
      return (
        ei(e) === t &&
        t.read("latest", function () {
          return !Xs(e);
        })
      );
    }
    function ti(t) {
      return t instanceof _Us;
    }
    function ei(t) {
      var e = t;
      for (; null != e; ) {
        var _t220 = ni(e);
        if (ti(_t220)) return _t220;
        e = Yi(e);
      }
      return null;
    }
    function ni(t) {
      return t ? t.__lexicalEditor : null;
    }
    function oi(t) {
      return zo(t) || t.isToken();
    }
    function ri(t) {
      return oi(t) || t.isSegmented();
    }
    function si(t) {
      return Ol(t) && 3 === t.nodeType;
    }
    function ii(t) {
      return Ol(t) && 9 === t.nodeType;
    }
    function li(t) {
      var e = t;
      for (; null != e; ) {
        if (si(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function ci(t, e, n) {
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
    function ai(t, e) {
      var n = (function () {
        var t = Hs;
        return ((Hs = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (Gr(), Jr());
      var o = qr(),
        r = Vr(),
        s = "" + Gs++;
      (r._nodeMap.set(s, t),
        gs(t) ? o._dirtyElements.set(s, !0) : o._dirtyLeaves.add(s),
        o._cloneNotNeeded.add(s),
        0 === o._dirtyType && (o._dirtyType = 1),
        (t.__key = s));
    }
    function ui(e) {
      null !== lc(e) && t(380, e.__key, String(lc(e)));
      var n = e.getParent();
      if (null !== n) {
        var _t221 = e.getWritable(),
          _o76 = n.getWritable(),
          _r55 = e.getPreviousSibling(),
          _s41 = e.getNextSibling(),
          _i25 = null !== _s41 ? _s41.__key : null,
          _l17 = null !== _r55 ? _r55.__key : null,
          _c11 = null !== _r55 ? _r55.getWritable() : null,
          _a1 = null !== _s41 ? _s41.getWritable() : null;
        (null === _r55 && (_o76.__first = _i25),
          null === _s41 && (_o76.__last = _l17),
          null !== _c11 && (_c11.__next = _i25),
          null !== _a1 && (_a1.__prev = _l17),
          (_t221.__prev = null),
          (_t221.__next = null),
          (_t221.__parent = null),
          _o76.__size--);
      }
    }
    var fi = ui;
    function di(e) {
      (Jr(), ro(e) && t(323, e.__key, e.__type));
      var n = e.getLatest(),
        o = null !== n.__parent ? n.__parent : ic(n) ? n.__slotHost : null,
        r = Vr(),
        s = qr(),
        i = r._nodeMap,
        l = s._dirtyElements;
      null !== o &&
        (function (t, e, n) {
          var o = t;
          for (; null !== o; ) {
            if (n.has(o)) return;
            var _t222 = e.get(o);
            if (void 0 === _t222) break;
            (n.set(o, !1),
              (o =
                null !== _t222.__parent
                  ? _t222.__parent
                  : ic(_t222)
                    ? _t222.__slotHost
                    : null));
          }
        })(o, i, l);
      var c = n.__key;
      (0 === s._dirtyType && (s._dirtyType = 1),
        gs(e) ? l.set(c, !0) : s._dirtyLeaves.add(c));
    }
    function hi(t) {
      Gr();
      var e = qr(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t223 = _i(n);
          null !== _t223 && _t223.getWritable();
        }
        if (null !== t) {
          var _e136 = _i(t);
          null !== _e136 && _e136.getWritable();
        }
      }
    }
    function gi() {
      if (Yr()) return null;
      return qr()._compositionKey;
    }
    function _i(t, e) {
      var n = (e || Vr())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function pi(t, e) {
      var n = yi(t, qr());
      return void 0 !== n ? _i(n, e) : null;
    }
    function mi(t, e, n) {
      t["__lexicalKey_" + e._key] = n;
    }
    function yi(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function xi(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t224 = pi(n, e);
        if (null !== _t224) return _t224;
        n = Yi(n);
      }
      return null;
    }
    function Ci(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function Si(t) {
      return t.read(function () {
        return Ti().getTextContent();
      });
    }
    function Ti() {
      return Vr()._nodeMap.get("root");
    }
    function Ni(t) {
      Gr();
      var e = Vr();
      (null !== t &&
        ((t.dirty = !0),
        t.setCachedNodes(null),
        qo(t) && qr()._slotsUsed && gr(t)),
        (e._selection = t));
    }
    function vi() {
      Gr();
      lt(qr());
    }
    function Ei(t) {
      var e = (function (t, e) {
        var n = t;
        for (; null != n; ) {
          var _t225 = yi(n, e);
          if (void 0 !== _t225) return _t225;
          n = Yi(n);
        }
        return null;
      })(t, qr());
      return null === e ? null : _i(e);
    }
    function ki(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function Oi(t) {
      var e = [];
      for (var _n106 = t; null !== _n106; _n106 = _n106._parentEditor)
        e.push(_n106);
      return e;
    }
    function bi() {
      return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substring(0, 5);
    }
    function Mi(t) {
      return si(t) ? t.nodeValue : null;
    }
    function Ai(t, e, n) {
      var o = al(Qi(e));
      if (null === o) return;
      var r = xl(o, e._rootElement),
        s = r.anchorNode;
      var i = r.anchorOffset,
        l = r.focusOffset;
      if (null !== s) {
        var _e137 = Mi(s);
        var _o77 = xi(s);
        if (null !== _e137 && Lo(_o77)) {
          if ((_e137 === N || _e137 === E) && n) {
            var _t226 = n.length;
            ((_e137 = n), (i = _t226), (l = _t226));
          }
          null !== _e137 && Di(_o77, _e137, i, l, t);
        }
      }
    }
    function Di(t, e, n, o, r) {
      var s = t;
      if (s.isAttached() && (r || !s.isDirty())) {
        var _i26 = s.isComposing();
        if (s.isToken() && _i26) return;
        var _c12 = e;
        if (
          (_i26 || r) &&
          (e.endsWith(N) && (_c12 = e.slice(0, -N.length)), r)
        ) {
          var _t227 = E;
          var _e138;
          for (; -1 !== (_e138 = _c12.indexOf(_t227)); )
            ((_c12 = _c12.slice(0, _e138) + _c12.slice(_e138 + _t227.length)),
              null !== n &&
                n > _e138 &&
                (n = Math.max(_e138, n - _t227.length)),
              null !== o &&
                o > _e138 &&
                (o = Math.max(_e138, o - _t227.length)));
        }
        var _u10 = s.getTextContent();
        if (r || _c12 !== _u10) {
          var _e139 = Sr();
          if ("" === _c12) {
            if ((hi(null), a || l || d)) s.remove();
            else {
              var _t228 = qr();
              (wi(s, "", _e139),
                setTimeout(function () {
                  _t228.update(function () {
                    s.isAttached() && "" === s.getTextContent() && s.remove();
                  });
                }, 20));
            }
            return;
          }
          var _r56 = s.getParent(),
            _u11 = Tr(),
            _f10 = s.getTextContentSize(),
            _h8 = gi(),
            _g7 = s.getKey();
          if (
            (s.isToken() && !_i26) ||
            (null !== _h8 && _g7 === _h8 && !_i26) ||
            (qo(_u11) &&
              ((null !== _r56 &&
                !_r56.canInsertTextBefore() &&
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
          if (!qo(_e139) || null === n || null === o)
            return void wi(s, _c12, _e139);
          if ((_e139.setTextNodeRange(s, n, s, o), s.isSegmented())) {
            var _t229 = Ro(s.getTextContent());
            (s.replace(_t229), (s = _t229));
          }
          wi(s, _c12, _e139);
        }
      }
    }
    function wi(t, e, n) {
      if ((t.setTextContent(e), qo(n))) {
        var _e140 = t.getKey();
        var _o78 = !1;
        for (var _r57 of ["anchor", "focus"]) {
          var _s42 = n[_r57];
          "text" === _s42.type &&
            _s42.key === _e140 &&
            ((_s42.offset = Wc(t, _s42.offset, "clamp")), (_o78 = !0));
        }
        _o78 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
      }
    }
    function Ii(t, e, n) {
      var o = e[n] || !1;
      return "any" === o || o === t[n];
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
      var o = "Key" + e.toUpperCase();
      return t.code === o;
    }
    var Ri = { ctrlKey: !r, metaKey: r },
      Li = { altKey: r, ctrlKey: !r };
    function Ki(t) {
      return "Backspace" === t.key;
    }
    function Bi(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        o = n[e];
      if (void 0 !== o) return o;
      var r = t[e];
      if ("string" == typeof r) {
        var _t230 = Ta(r);
        return ((n[e] = _t230), _t230);
      }
      return r;
    }
    function $i(e, n, o, r, s) {
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
    function zi(t, e, n) {
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
    function Wi(t, e) {
      var n = t.offset;
      if ("element" === t.type) {
        return zi(t.getNode(), e, n);
      }
      {
        var _o79 = t.getNode();
        if ((e && 0 === n) || (!e && n === _o79.getTextContentSize())) {
          var _t231 = e ? _o79.getPreviousSibling() : _o79.getNextSibling();
          return null === _t231
            ? zi(
                _o79.getParentOrThrow(),
                e,
                _o79.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t231;
        }
      }
      return null;
    }
    function Ui(t) {
      var e = Qi(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function Hi(t, e) {
      return ls(t, e, arguments.length <= 2 ? undefined : arguments[2], t);
    }
    function ji(e, n) {
      var o = e._keyToDOMMap.get(n);
      return (void 0 === o && t(75, n), o);
    }
    function Yi(t) {
      var e = t.assignedSlot || t.parentElement;
      if (null !== e) return e;
      var n = t.parentNode;
      return fl(n) ? n.host : null;
    }
    function Gi(t) {
      return ii(t) ? t : kl(t) ? t.ownerDocument : null;
    }
    function Ji(t) {
      Gr();
      qr()._updateTags.add(t);
    }
    function Vi(t) {
      Gr();
      qr()._deferred.push(t);
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
      var e = Gi(t);
      return e ? e.defaultView : null;
    }
    function Qi(e) {
      var n = e._window;
      return (null === n && t(78), n);
    }
    function Zi(t) {
      return (gs(t) && t.isInline()) || (ms(t) && t.isInline());
    }
    function tl(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== lc(e) && gs(e)) return e;
        var _t232 = e.getParentOrThrow();
        if (nl(_t232)) return _t232;
        e = _t232;
      }
      return e;
    }
    function el(t) {
      return gs(t) && t.isShadowRoot();
    }
    function nl(t) {
      return xs(t) || el(t);
    }
    function ol(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t, Ys);
      return (
        ai(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function rl(e) {
      var n = qr(),
        o = e.getType(),
        r = Vs(n, o);
      void 0 === r && t(200, e.constructor.name, o);
      var s = r.replace,
        i = r.replaceWithKlass;
      if (null !== s) {
        var _n107 = s(e),
          _r58 = _n107.constructor;
        return (
          null !== i
            ? _n107 instanceof i ||
              t(
                201,
                i.name,
                i.getType(),
                _r58.name,
                _r58.getType(),
                e.constructor.name,
                o,
              )
            : (_n107 instanceof e.constructor && _r58 !== e.constructor) ||
              t(202, _r58.name, _r58.getType(), e.constructor.name, o),
          _n107.__key === e.__key &&
            t(203, e.constructor.name, o, _r58.name, _r58.getType()),
          _n107
        );
      }
      return e;
    }
    function sl(e, n) {
      !xs(e.getParent()) || gs(n) || ms(n) || t(99);
    }
    function il(e) {
      var n = _i(e);
      return (null === n && t(63, e), n);
    }
    function ll(t) {
      if (!t || t.isInline()) return !1;
      if (ms(t)) return !0;
      if (gs(t)) {
        if (t.isShadowRoot()) {
          var _e141 = t.getParent();
          return !(gs(_e141) && _e141.isShadowRoot());
        }
        return !t.canBeEmpty();
      }
      return !1;
    }
    function cl(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var o = t.parentElement;
      null !== o && o.removeChild(t);
    }
    function al(t) {
      return n ? (t || window).getSelection() : null;
    }
    function ul(t) {
      var e = Xi(t);
      return e ? e.getSelection() : null;
    }
    function fl(t) {
      return bl(t) && "host" in t;
    }
    var dl = [];
    function hl(t) {
      var e = t.getRootNode();
      if (e === t || !fl(e)) return dl;
      var n = [e];
      var o = e.host;
      for (;;) {
        var _t233 = o.getRootNode();
        if (_t233 === o || !fl(_t233)) break;
        (n.push(_t233), (o = _t233.host));
      }
      return n;
    }
    function* gl(t) {
      var e = [t];
      var n;
      for (; (n = e.pop()); ) {
        yield* n.querySelectorAll('[data-lexical-editor="true"]');
        var _t234 = (ii(n) ? n : n.ownerDocument).createTreeWalker(
          n,
          NodeFilter.SHOW_ELEMENT,
        );
        var _o80 = void 0;
        for (; (_o80 = _t234.nextNode()); )
          _o80.shadowRoot && e.push(_o80.shadowRoot);
      }
    }
    function _l(t) {
      return null !== t ? t.ownerDocument : document;
    }
    function pl() {
      var t = Zr();
      return _l(null !== t ? t._rootElement : null);
    }
    function ml(t, e) {
      if (null === e || "function" != typeof t.getComposedRanges) return null;
      var n = hl(e);
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
    function yl(t, e) {
      var n = ml(t, e);
      if (null !== n) {
        var _t235 = Cl(n);
        if (null !== _t235) return _t235;
      }
      return t.rangeCount > 0 ? t.getRangeAt(0) : null;
    }
    function xl(t, e) {
      var n = ml(t, e);
      return null === n ? t : Sl(n, Tl(t));
    }
    function Cl(t) {
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
    function Sl(t, e) {
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
    function Tl(t) {
      return t.direction;
    }
    function Nl(t) {
      var e = t.getRootNode();
      return ii(e) || fl(e) ? e.activeElement : null;
    }
    function vl(t) {
      var e = t.activeElement;
      for (; null !== e && null !== e.shadowRoot; ) {
        var _t236 = e.shadowRoot.activeElement;
        if (null === _t236) break;
        e = _t236;
      }
      return e;
    }
    function El(t) {
      var e = t.target;
      if (
        null !== e &&
        kl(e) &&
        null !== e.shadowRoot &&
        "function" == typeof t.composedPath
      ) {
        var _e144 = t.composedPath();
        if (_e144.length > 0) return _e144[0];
      }
      return e;
    }
    function kl(t) {
      return Ol(t) && 1 === t.nodeType;
    }
    function Ol(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function bl(t) {
      return Ol(t) && 11 === t.nodeType;
    }
    var Ml =
      /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
    function Al(t) {
      return (
        !(!kl(t) || !t.style.display.startsWith("inline")) ||
        Ml.test(t.nodeName)
      );
    }
    var Dl =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function wl(t) {
      return (
        (!kl(t) || !t.style.display.startsWith("inline")) && Dl.test(t.nodeName)
      );
    }
    function Il(t) {
      if (ms(t) && !t.isInline()) return !0;
      if (!gs(t) || nl(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || bs(e) || Lo(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function Pl() {
      return qr();
    }
    function Fl(t) {
      if (t === void 0) {
        t = Pl();
      }
      return t._config.dom || $s;
    }
    function Rl(e, n, o) {
      if (o === void 0) {
        o = Pl();
      }
      var r = Fl(o).$getDOMSlot(e, n, o);
      return (gs(e) && (Ll(r) || t(344, e.getKey(), e.getType())), r);
    }
    function Ll(t) {
      return t instanceof _H;
    }
    function Kl(t, e, n) {
      if (n === void 0) {
        n = Pl();
      }
      return li(Rl(t, e, n).element);
    }
    var Bl = new WeakMap(),
      $l = new Map();
    function zl(e) {
      if (!e._readOnly && e.isEmpty()) return $l;
      e._readOnly || t(192);
      var n = Bl.get(e);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref43 of t._nodeMap) {
              var _n108 = _ref43[0];
              var _o81 = _ref43[1];
              {
                var _t237 = _o81.__type;
                var _r59 = e.get(_t237);
                (_r59 || ((_r59 = new Map()), e.set(_t237, _r59)),
                  _r59.set(_n108, _o81));
              }
            }
            return e;
          })(e)),
          Bl.set(e, n)),
        n
      );
    }
    function Wl(t) {
      var e = t.constructor.clone(t, Ys);
      return (e.afterCloneFrom(t), e);
    }
    function Ul(t, e) {
      var n = t.getAttribute("data-lexical-indent");
      if (null !== n) {
        var _t238 = parseInt(n, 10);
        if (Number.isFinite(_t238) && _t238 >= 0)
          return void e.setIndent(_t238);
      }
      var o = parseInt(t.style.paddingInlineStart, 10) || 0,
        r = Math.round(o / 40);
      e.setIndent(r);
    }
    function Hl(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function jl(t, e) {
      var n = e.style.textAlign;
      return n && n in w ? t.setFormat(n) : t;
    }
    function Yl(t, e) {
      ((t.__lexicalUnmanaged = !0),
        e &&
          void 0 !== e.captureSelection &&
          (t.__lexicalCapturedSelection = e.captureSelection));
    }
    function Gl(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function Jl(t, e) {
      if (e === void 0) {
        e = Pl();
      }
      var n = e.isEditable();
      ((t.contentEditable = n ? "true" : "false"),
        n ? (t.__lexicalEditor = e) : delete t.__lexicalEditor);
    }
    function Vl(t, e) {
      var n = t;
      for (; null != n; ) {
        if (!0 === n.__lexicalCapturedSelection) return !0;
        if (kl(n) && n.hasAttribute("data-lexical-slot")) return !1;
        if (void 0 !== yi(n, e)) return !1;
        n = Yi(n);
      }
      return !1;
    }
    function ql(t, e) {
      return (
        (function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        })(t, e) && t[e] !== _io5[e]
      );
    }
    var Xl = new WeakMap(),
      Ql = Symbol("lexical.synthesizedGetType");
    function Zl(e) {
      var n = Xl.get(e);
      if (n) return n;
      var o =
          null != e.prototype && R in e.prototype ? e.prototype[R]() : void 0,
        r = (function (e) {
          if (!(e === _io5 || e.prototype instanceof _io5)) {
            var _n109 = "<unknown>",
              _o82 = "<unknown>";
            try {
              _n109 = e.getType();
            } catch (t) {}
            try {
              _Us.version && (_o82 = JSON.parse(_Us.version));
            } catch (t) {}
            t(290, e.name, _n109, _o82);
          }
          return e === _ps || e === _hs4 || e === _io5;
        })(e),
        s = !r && ql(e, "getType") ? e.getType : void 0,
        i = s && !(Ql in s) ? s.call(e) : void 0;
      var l,
        c = i;
      if (o)
        if (i) l = o[i];
        else {
          for (var _ref45 of Object.entries(o)) {
            var _t239 = _ref45[0];
            var _e145 = _ref45[1];
            ((c = _t239), (l = _e145));
          }
          if (!l)
            for (var _t240 of Object.getOwnPropertySymbols(o)) {
              var _e146 = o[_t240];
              if (_e146) {
                l = _e146;
                break;
              }
            }
        }
      if (!r && c) {
        if (!ql(e, "getType")) {
          var _t241 = e,
            _n110 = function _n110() {
              return this !== _t241 ? _io5.getType.call(this) : c;
            };
          ((_n110[Ql] = !0), (e.getType = _n110));
        }
        if (
          (ql(e, "clone") ||
            (e.clone = function (t, n) {
              js(t);
              var o = new e();
              return (n !== Ys && o.afterCloneFrom(t), o);
            }),
          ql(e, "importJSON") ||
            (e.importJSON =
              (l && l.$importJSON) ||
              function (t) {
                return rl(new e()).updateFromJSON(t);
              }),
          !ql(e, "importDOM") && l)
        ) {
          var _l18 = l,
            _t242 = _l18.importDOM;
          _t242 &&
            (e.importDOM = function () {
              return _t242;
            });
        }
      }
      var a = { klass: e, ownNodeConfig: l, ownNodeType: c };
      return (Xl.set(e, a), a);
    }
    function* tc(t) {
      for (var _e147 = t; _e147 && (_e147 === _io5 || lo(_e147.prototype)); ) {
        var _t243 = Zl(_e147);
        (yield _t243,
          (_e147 =
            (_t243.ownNodeConfig && _t243.ownNodeConfig["extends"]) ||
            oc(_e147)));
      }
    }
    var ec = function ec(t, e) {
      var n = t;
      for (; null != n && !xs(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function nc(e, n) {
      var o = [];
      var r = e.__first;
      for (; null !== r; ) {
        var _e148 = null === n ? _i(r) : n.get(r);
        (null == _e148 && t(174), o.push(r), (r = _e148.__next));
      }
      return o;
    }
    function oc(t) {
      var e = Object.getPrototypeOf(t);
      if ("function" == typeof e && e !== Function.prototype) return e;
      var n = t.prototype && Object.getPrototypeOf(t.prototype);
      return n ? n.constructor : null;
    }
    var rc = new Map();
    function sc(t) {
      return gs(t) || ms(t);
    }
    function ic(t) {
      return gs(t) || ms(t);
    }
    function lc(t) {
      var e = t.getLatest();
      return ic(e) ? e.__slotHost : null;
    }
    function cc(e) {
      var n = lc(e);
      if (null === n) return null;
      var o = _i(n);
      return (gs(o) || ms(o) || t(370), o);
    }
    function ac(t) {
      var e = cc(t);
      if (null === e) return null;
      var n = t.getLatest().__key;
      for (var _ref47 of fc(e)) {
        var _t244 = _ref47[0];
        var _o83 = _ref47[1];
        if (_o83 === n) return _t244;
      }
      return null;
    }
    function uc(t) {
      var e = t.getLatest();
      for (; null !== e; ) {
        if (null !== lc(e)) return e;
        e = e.getParent();
      }
      return null;
    }
    function fc(t) {
      var e = t.getLatest();
      return sc(e) && null !== e.__slots ? e.__slots : rc;
    }
    function dc(t) {
      return Array.from(fc(t).keys());
    }
    function hc(t, e) {
      var n = fc(t).get(e);
      return void 0 === n ? null : _i(n);
    }
    var gc = ["__proto__", "constructor", "prototype"],
      _c = Symbol("slotMapOwner");
    function pc(t) {
      var e = t.__slots;
      return (
        (null !== e && e[_c] === t) ||
          ((e = new Map(e)), (e[_c] = t), (t.__slots = e)),
        e
      );
    }
    var mc = new WeakMap(),
      yc = [];
    function xc(t) {
      for (var _ref49 of tc(t)) {
        var _e149 = _ref49.ownNodeConfig;
        {
          var _t245 = _e149 && _e149.slots;
          if (_t245) return _t245;
        }
      }
      return yc;
    }
    function Cc(t) {
      var e = "";
      for (var _n111 of dc(t)) {
        var _o84 = hc(t, _n111);
        null !== _o84 && (e += _o84.getTextContent());
      }
      return e;
    }
    function Sc(t, e, n) {
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
    function Tc(e) {
      var n = e.__slots;
      if (null === n || n.size < 2) return;
      var o = (function (e) {
        var n = mc.get(e);
        if (void 0 === n) {
          var _o85 = xc(e),
            _r60 = new Map();
          for (var _n112 of _o85)
            (gc.includes(_n112) && t(371, e.name, _n112),
              _r60.has(_n112) && t(372, e.name, _n112),
              _r60.set(_n112, _r60.size));
          ((n = _r60), mc.set(e, n));
        }
        return n;
      })(e.constructor);
      var r = null,
        s = !0;
      for (var _t246 of n.keys()) {
        if (null !== r && Sc(r, _t246, o) > 0) {
          s = !1;
          break;
        }
        r = _t246;
      }
      if (s) return;
      var i = Array.from(n).sort(function (_ref50, _ref51) {
        var t = _ref50[0];
        var e = _ref51[0];
        return Sc(t, e, o);
      });
      n.clear();
      for (var _ref53 of i) {
        var _t247 = _ref53[0];
        var _e150 = _ref53[1];
        n.set(_t247, _e150);
      }
    }
    function Nc(e, n, o) {
      ("__proto__" !== n && "constructor" !== n && "prototype" !== n) ||
        t(373, n);
      var r = e.getLatest();
      if (null !== r.__slots && r.__slots.get(n) === o.getLatest().__key)
        return r;
      ((!gs(o) && !ms(o)) || o.isInline()) && t(374, o.__key);
      var s = e.getWritable(),
        i = pc(s),
        l = i.get(n);
      void 0 !== l && Ec(l);
      var c = o.getWritable(),
        a = cc(c);
      if (null !== a) {
        var _t248 = ac(c);
        (null !== _t248 && pc(a.getWritable())["delete"](_t248),
          (c.__slotHost = null));
      }
      return (
        ui(c),
        (c.__slotHost = s.__key),
        i.set(n, c.__key),
        Tc(s),
        (function () {
          var t = Pl();
          ((t._slotsUsed = !0),
            t._pendingEditorState && (t._pendingEditorState._slotsUsed = !0));
        })(),
        s
      );
    }
    function vc(t, e) {}
    function Ec(e) {
      var n = _i(e);
      if (null === n) return;
      var o = n.getWritable();
      (ic(o) || t(377, e), (o.__slotHost = null), o.remove());
    }
    var kc = { next: "previous", previous: "next" };
    var _Oc4 = (function () {
      function Oc(t) {
        this.origin = t;
      }
      var _proto18 = Oc.prototype;
      _proto18[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return Zc({
            hasNext: Fc,
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
        return $c(this.getNodeAtCaret(), this.direction);
      };
      _proto18.getSiblingCaret = function getSiblingCaret() {
        return $c(this.origin, this.direction);
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
          var _t249 = s.getAdjacentCaret();
          null !== _t249 && l.size < e;
          _t249 = _t249.getAdjacentCaret()
        ) {
          var _e151 = _t249.origin.getWritable();
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
                var _t250 = _e152.getParent();
                (_t250 && _t250.is(i) && _e152.remove(), _n113.replace(_e152));
              }
            } else null === _n113 && t(263, Array.from(l).join(" "));
          } else s.insert(_e152);
          s = $c(_e152, this.direction);
        }
        for (var _t251 of l.values()) _t251.remove();
        return this;
      };
      return Oc;
    })();
    var _bc3 = (function (_Oc) {
      function bc() {
        var _this6;
        for (
          var _len8 = arguments.length, args = new Array(_len8), _key8 = 0;
          _key8 < _len8;
          _key8++
        ) {
          args[_key8] = arguments[_key8];
        }
        return (
          ((_this6 = _Oc.call.apply(_Oc, [this].concat(args)) || this),
          (_this6.type = "child"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(bc, _Oc);
      var _proto19 = bc.prototype;
      _proto19.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Hc(t, this.direction);
      };
      _proto19.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return $c(Dc(this.getParentAtCaret(), t), this.direction);
      };
      _proto19.getFlipped = function getFlipped() {
        var t = Ac(this.direction);
        return $c(this.getNodeAtCaret(), t) || Hc(this.origin, t);
      };
      _proto19.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto19.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto19.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof bc &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto19.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return bc;
    })(_Oc4);
    var Mc = { root: xs, shadowRoot: nl };
    function Ac(t) {
      return kc[t];
    }
    function Dc(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return null === t || Mc[e](t) ? null : null === lc(t) ? t : null;
    }
    var _wc3 = (function (_Oc2) {
      function wc() {
        var _this7;
        for (
          var _len9 = arguments.length, args = new Array(_len9), _key9 = 0;
          _key9 < _len9;
          _key9++
        ) {
          args[_key9] = arguments[_key9];
        }
        return (
          ((_this7 = _Oc2.call.apply(_Oc2, [this].concat(args)) || this),
          (_this7.type = "sibling"),
          babelHelpers.assertThisInitialized(_this7)) ||
          babelHelpers.assertThisInitialized(_this7)
        );
      }
      babelHelpers.inheritsLoose(wc, _Oc2);
      var _proto20 = wc.prototype;
      _proto20.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : $c(t, this.direction);
      };
      _proto20.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto20.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto20.getChildCaret = function getChildCaret() {
        return gs(this.origin) ? Hc(this.origin, this.direction) : null;
      };
      _proto20.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return $c(Dc(this.getParentAtCaret(), t), this.direction);
      };
      _proto20.getFlipped = function getFlipped() {
        var t = Ac(this.direction);
        return (
          $c(this.getNodeAtCaret(), t) || Hc(this.origin.getParentOrThrow(), t)
        );
      };
      _proto20.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof wc &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto20.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof wc || t instanceof _Ic3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return wc;
    })(_Oc4);
    var _Ic3 = (function (_Oc3) {
      function Ic(t, e) {
        var _this8;
        ((_this8 = _Oc3.call(this, t) || this),
          (_this8.type = "text"),
          (_this8.offset = e));
        return _this8;
      }
      babelHelpers.inheritsLoose(Ic, _Oc3);
      var _proto21 = Ic.prototype;
      _proto21.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : zc(t, this.direction, this.offset);
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
        return $c(Dc(this.getParentAtCaret(), t), this.direction);
      };
      _proto21.getFlipped = function getFlipped() {
        return zc(this.origin, Ac(this.direction), this.offset);
      };
      _proto21.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof Ic &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto21.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _wc3 || t instanceof Ic) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto21.getSiblingCaret = function getSiblingCaret() {
        return $c(this.origin, this.direction);
      };
      return Ic;
    })(_Oc4);
    function Pc(t) {
      return t instanceof _Ic3;
    }
    function Fc(t) {
      return t instanceof _wc3;
    }
    function Rc(t) {
      return t instanceof _bc3;
    }
    var Lc = {
        next: (function (_Ic) {
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
              ((_this9 = _Ic.call.apply(_Ic, [this].concat(args)) || this),
              (_this9.direction = "next"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class, _Ic);
          var _proto22 = _class.prototype;
          _proto22.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto22.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_Ic3),
        previous: (function (_Ic2) {
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
              ((_this0 = _Ic2.call.apply(_Ic2, [this].concat(args)) || this),
              (_this0.direction = "previous"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class3, _Ic2);
          var _proto23 = _class3.prototype;
          _proto23.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto23.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_Ic3),
      },
      Kc = {
        next: (function (_wc) {
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
              ((_this1 = _wc.call.apply(_wc, [this].concat(args)) || this),
              (_this1.direction = "next"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class5, _wc);
          var _proto24 = _class5.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_wc3),
        previous: (function (_wc2) {
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
              ((_this10 = _wc2.call.apply(_wc2, [this].concat(args)) || this),
              (_this10.direction = "previous"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class7, _wc2);
          var _proto25 = _class7.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_wc3),
      },
      Bc = {
        next: (function (_bc) {
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
              ((_this11 = _bc.call.apply(_bc, [this].concat(args)) || this),
              (_this11.direction = "next"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class9, _bc);
          var _proto26 = _class9.prototype;
          _proto26.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto26.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_bc3),
        previous: (function (_bc2) {
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
              ((_this12 = _bc2.call.apply(_bc2, [this].concat(args)) || this),
              (_this12.direction = "previous"),
              babelHelpers.assertThisInitialized(_this12)) ||
              babelHelpers.assertThisInitialized(_this12)
            );
          }
          babelHelpers.inheritsLoose(_class1, _bc2);
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
        })(_bc3),
      };
    function $c(t, e) {
      return t ? new Kc[e](t) : null;
    }
    function zc(t, e, n) {
      return t ? new Lc[e](t, Wc(t, n)) : null;
    }
    function Wc(t, n, o) {
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
    function Uc(t, e) {
      return new _Jc(t, e);
    }
    function Hc(t, e) {
      return gs(t) ? new Bc[e](t) : null;
    }
    function jc(t) {
      return (t && t.getChildCaret()) || t;
    }
    function Yc(t) {
      return t && jc(t.getAdjacentCaret());
    }
    var _Gc = (function () {
      function Gc(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto28 = Gc.prototype;
      _proto28.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new Gc(t, e, this.direction);
      };
      _proto28.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto28.getTextSlices = function getTextSlices() {
        var _this16 = this;
        var t = function t(_t252) {
            var e = _this16[_t252].getLatest();
            return Pc(e)
              ? (function (t, e) {
                  var n = t.direction,
                    o = t.origin,
                    r = Wc(o, "focus" === e ? Ac(n) : n);
                  return Uc(t, r - t.offset);
                })(e, _t252)
              : null;
          },
          e = t("anchor"),
          n = t("focus");
        if (e && n) {
          var _t253 = e.caret,
            _o86 = n.caret;
          if (_t253.isSameNodeCaret(_o86))
            return [Uc(_t253, _o86.offset - _t253.offset), null];
        }
        return [e, n];
      };
      _proto28.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = Pc(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          o = Pc(n),
          r = function r(e) {
            return e.isSameNodeCaret(n) ? null : Yc(e) || e.getParentCaret(t);
          };
        return Zc({
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
      return Gc;
    })();
    var _Jc = (function () {
      function Jc(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto29 = Jc.prototype;
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
        return zc(t.setTextContent(r.slice(0, n) + r.slice(o)), e, n);
      };
      return Jc;
    })();
    function Vc(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function qc(t) {
      return Qc(t, Vc(Hc(Ti(), Ac(t.direction)), t.direction));
    }
    function Xc(t) {
      return Qc(t, t);
    }
    function Qc(e, n) {
      return (
        e.direction !== n.direction && t(265),
        new _Gc(e, n, e.direction)
      );
    }
    function Zc(t) {
      var _ref54;
      var e = t.initial,
        n = t.hasNext,
        o = t.step,
        r = t.map;
      var s = e;
      return (
        (_ref54 = {}),
        (_ref54[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
          function () {
            return this;
          }),
        (_ref54.next = function next() {
          if (!n(s)) return { done: !0, value: void 0 };
          var t = { done: !1, value: r(s) };
          return ((s = o(s)), t);
        }),
        _ref54
      );
    }
    function ta(e, n) {
      var o = ra(e.origin, n.origin);
      switch (
        (null === o && t(275, e.origin.getKey(), n.origin.getKey()), o.type)
      ) {
        case "same": {
          var _t254 = "text" === e.type,
            _o87 = "text" === n.type;
          return _t254 && _o87
            ? (function (t, e) {
                return Math.sign(t - e);
              })(e.offset, n.offset)
            : e.type === n.type
              ? 0
              : _t254
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
          return ea(o);
      }
    }
    function ea(t) {
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
    function na(t, e) {
      return e.is(t);
    }
    function oa(t) {
      return gs(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function ra(e, n) {
      if (e.is(n)) return { commonAncestor: e, type: "same" };
      var o = new Map();
      for (
        var _oa = oa(e), _t255 = _oa[0], _n114 = _oa[1];
        _t255;
        _n114 = _t255, _t255 = _t255.getParent()
      )
        o.set(_t255, _n114);
      for (
        var _oa2 = oa(n), _r61 = _oa2[0], _s43 = _oa2[1];
        _r61;
        _s43 = _r61, _r61 = _r61.getParent()
      ) {
        var _i27 = o.get(_r61);
        if (void 0 !== _i27)
          return null === _i27
            ? (na(e, _r61) || t(276),
              { commonAncestor: _r61, type: "ancestor" })
            : null === _s43
              ? (na(n, _r61) || t(277),
                { commonAncestor: _r61, type: "descendant" })
              : (((gs(_i27) || na(e, _i27)) &&
                  (gs(_s43) || na(n, _s43)) &&
                  _r61.is(_i27.getParent()) &&
                  _r61.is(_s43.getParent())) ||
                  t(278),
                { a: _i27, b: _s43, commonAncestor: _r61, type: "branch" });
      }
      return null;
    }
    function sa(e, n) {
      var o = e.type,
        r = e.key,
        s = e.offset,
        i = il(e.key);
      return "text" === o
        ? (Lo(i) || t(266, i.getType(), r), zc(i, n, s))
        : (gs(i) || t(267, i.getType(), r), ma(i, e.offset, n));
    }
    function ia(e, n) {
      var o = n.origin,
        r = n.direction,
        s = "next" === r;
      Pc(n)
        ? e.set(o.getKey(), n.offset, "text")
        : Fc(n)
          ? Lo(o)
            ? e.set(o.getKey(), Wc(o, r), "text")
            : e.set(
                o.getParentOrThrow().getKey(),
                o.getIndexWithinParent() + (s ? 1 : 0),
                "element",
              )
          : ((Rc(n) && gs(o)) || t(268),
            e.set(o.getKey(), s ? 0 : o.getChildrenSize(), "element"));
    }
    function la(t) {
      var e = Sr(),
        n = qo(e) ? e : yr();
      return (ca(n, t), Ni(n), n);
    }
    function ca(t, e) {
      (ia(t.anchor, e.anchor), ia(t.focus, e.focus));
    }
    function aa(t) {
      var e = t.anchor,
        n = t.focus,
        o = sa(e, "next"),
        r = sa(n, "next"),
        s = ta(o, r) <= 0 ? "next" : "previous";
      return Qc(Vc(o, s), Vc(r, s));
    }
    function ua(t) {
      var e = t.direction,
        n = t.origin,
        o = $c(n, Ac(e)).getNodeAtCaret();
      return o ? $c(o, e) : Hc(n.getParentOrThrow(), e);
    }
    function fa(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _o88 = Rc(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _o88;
        _o88 = _o88.getParentCaret(e)
      )
        n.push(ua(_o88));
      return n;
    }
    function da(t) {
      return !!t && t.origin.isAttached();
    }
    function ha(e, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (e.isCollapsed()) return e;
      var o = "root",
        r = "next";
      var s = n;
      var i = pa(e, r),
        l = fa(i.anchor, o),
        c = fa(i.focus.getFlipped(), o),
        a = new Set(),
        u = [];
      for (var _t256 of i.iterNodeCarets(o))
        if (Rc(_t256)) a.add(_t256.origin.getKey());
        else if (Fc(_t256)) {
          var _e153 = _t256.origin;
          (gs(_e153) && !a.has(_e153.getKey())) || u.push(_e153);
        }
      var f = new Set();
      for (var _t257 of u) {
        var _e154 = _t257.getParent();
        (null === _e154 || a.has(_e154.getKey()) || f.add(_e154), ui(_t257));
      }
      for (var _t258 of f)
        !_t258.canBeEmpty() &&
          !nl(_t258) &&
          _t258.isEmpty() &&
          _t258.isAttached() &&
          _t258.remove();
      for (var _t259 of i.getTextSlices()) {
        if (!_t259) continue;
        var _e155 = _t259.caret.origin,
          _n115 = _e155.getTextContentSize(),
          _o89 = ua($c(_e155, r)),
          _i28 = _e155.getMode();
        if (
          (Math.abs(_t259.distance) === _n115 && "removeEmptySlices" === s) ||
          ("token" === _i28 && 0 !== _t259.distance)
        )
          _o89.remove();
        else if (0 !== _t259.distance) {
          s = "removeEmptySlices";
          var _e156 = _t259.removeTextSlice();
          var _n116 = _t259.caret.origin;
          if ("segmented" === _i28) {
            var _t260 = _e156.origin,
              _n117 = Ro(_t260.getTextContent())
                .setStyle(_t260.getStyle())
                .setFormat(_t260.getFormat());
            (_o89.replaceOrInsert(_n117), (_e156 = zc(_n117, r, _e156.offset)));
          }
          (_n116.is(l[0].origin) && (l[0] = _e156),
            _n116.is(c[0].origin) && (c[0] = _e156.getFlipped()));
        }
      }
      var d, h;
      for (var _t261 of l)
        if (da(_t261)) {
          d = ga(_t261);
          break;
        }
      for (var _t262 of c)
        if (da(_t262)) {
          h = ga(_t262);
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
              var _r62 = t[_o90];
              if (nl(_r62)) return;
              !n && e(_r62) && (n = _r62);
            }
            return n;
          },
          u = a(s, Il),
          f =
            u &&
            a(i, function (t) {
              return n.has(t.getKey()) && Il(t);
            });
        if (f && dc(f).length > 0) return null;
        return u && f ? [u, f] : null;
      })(d, h, a);
      if (g) {
        var _t263 = g[0],
          _e157 = g[1];
        Hc(_t263, "previous").splice(0, _e157.getChildren());
        var _n118 = _e157.getParent();
        for (_e157.remove(!0); _n118 && _n118.isEmpty(); ) {
          var _t264 = _n118;
          ((_n118 = _n118.getParent()), _t264.remove(!0));
        }
      } else if (h) {
        var _t265 = (function (t) {
            if (Rc(t)) {
              var _e159 = t.origin;
              if (Il(_e159)) return _e159;
            } else {
              var _e160 = t.getParentAtCaret();
              if (_e160 && Il(_e160)) return _e160;
            }
            return null;
          })(h),
          _e158 = _t265 && _t265.getParent(),
          _n119 = _t265 && _t265.getParents().findLast(el);
        if (
          _t265 &&
          _e158 &&
          !xs(_e158) &&
          _t265.isEmpty() &&
          a.has(_t265.getKey()) &&
          0 === dc(_t265).length &&
          (!_n119 || a.has(_n119.getKey()))
        ) {
          _t265.remove(!0);
          var _n120 = _e158;
          for (; _n120 && !xs(_n120) && _n120.isEmpty(); ) {
            var _t266 = _n120.getParent();
            if (_t266 && xs(_t266) && _t266.getChildrenSize() <= 1) break;
            var _e161 = _n120;
            ((_n120 = _t266), _e161.remove(!0));
          }
        }
      }
      var _ = [d, h].concat(l, c).find(da);
      if (_) {
        return Xc(Vc(ga(_), e.direction));
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
    function ga(t) {
      var e = (function (t) {
          var e = t;
          for (; Rc(e); ) {
            var _t267 = Yc(e);
            if (!Rc(_t267)) break;
            e = _t267;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (Lo(e.origin)) return Pc(e) ? e : zc(e.origin, n, n);
      var o = e.getAdjacentCaret();
      return Fc(o) && Lo(o.origin) ? zc(o.origin, n, Ac(n)) : e;
    }
    function _a(t) {
      return Pc(t) && t.offset !== Wc(t.origin, t.direction);
    }
    function pa(t, e) {
      return t.direction === e ? t : Qc(Vc(t.focus, e), Vc(t.anchor, e));
    }
    function ma(t, e, n) {
      var o = Hc(t, "next");
      for (var _t268 = 0; _t268 < e; _t268++) {
        var _t269 = o.getAdjacentCaret();
        if (null === _t269) break;
        o = _t269;
      }
      return Vc(o, n);
    }
    function ya(e) {
      var n = e.origin,
        o = e.offset,
        r = e.direction;
      if (o === Wc(n, r)) return e.getSiblingCaret();
      if (o === Wc(n, Ac(r))) return ua(e.getSiblingCaret());
      var _n$splitText2 = n.splitText(o),
        s = _n$splitText2[0];
      return (Lo(s) || t(281), Vc($c(s, "next"), r));
    }
    function xa(t, e) {
      return !0;
    }
    function Ca(t, _temp) {
      var _ref55 = _temp === void 0 ? {} : _temp,
        _ref55$$copyElementNo = _ref55.$copyElementNode,
        e = _ref55$$copyElementNo === void 0 ? ol : _ref55$$copyElementNo,
        _ref55$$splitTextPoin = _ref55.$splitTextPointCaretNext,
        n = _ref55$$splitTextPoin === void 0 ? ya : _ref55$$splitTextPoin,
        _ref55$rootMode = _ref55.rootMode,
        o = _ref55$rootMode === void 0 ? "shadowRoot" : _ref55$rootMode,
        _ref55$$shouldSplit = _ref55.$shouldSplit,
        r = _ref55$$shouldSplit === void 0 ? xa : _ref55$$shouldSplit,
        _ref55$removeEmptyDes = _ref55.removeEmptyDestination,
        s = _ref55$removeEmptyDes === void 0 ? !1 : _ref55$removeEmptyDes;
      if (Pc(t)) return n(t);
      var i = t.getParentCaret(o);
      if (i) {
        var _n121 = i.origin;
        if (Rc(t)) {
          var _t270 = ua(i);
          if (s && _n121.isEmpty()) return (_n121.remove(), _t270);
          if (!_n121.canBeEmpty() || !r(_n121, "first")) return _t270;
        }
        var _o91 = (function (t) {
          var e = [];
          for (
            var _n122 = t.getAdjacentCaret();
            _n122;
            _n122 = _n122.getAdjacentCaret()
          )
            e.push(_n122.origin);
          return e;
        })(t);
        (_o91.length > 0 || (!s && _n121.canBeEmpty() && r(_n121, "last"))) &&
          i.insert(e(_n121).splice(0, 0, _o91));
      }
      return i;
    }
    function Sa(e, n, o) {
      var r = Vc(n, "next");
      (Pc(r) &&
        (0 === r.offset
          ? (r = $c(r.origin, "previous").getFlipped())
          : r.offset === r.origin.getTextContentSize() &&
            (r = $c(r.origin, "next"))),
        r.origin.is(e) &&
          (Fc(r) || t(342, e.getKey(), e.getType()), (r = ua(r))),
        (e.is(r.getNodeAtCaret()) || e.is(r.getFlipped().getNodeAtCaret())) &&
          e.remove(!0));
      for (var _t271 = r; _t271; _t271 = Ca(_t271, o)) r = _t271;
      return (
        Pc(r) && t(283),
        r.insert(e.isInline() ? Ps().append(e) : e),
        Vc($c(e.getLatest(), "next"), n.direction)
      );
    }
    function Ta() {
      var e = [];
      for (
        var _len14 = arguments.length, t = new Array(_len14), _key14 = 0;
        _key14 < _len14;
        _key14++
      ) {
        t[_key14] = arguments[_key14];
      }
      for (var _n123 of t)
        if (_n123 && "string" == typeof _n123)
          for (var _ref57 of _n123.matchAll(/\S+/g)) {
            var _t272 = _ref57[0];
            e.push(_t272);
          }
      return e;
    }
    function Na() {
      for (
        var _len15 = arguments.length, t = new Array(_len15), _key15 = 0;
        _key15 < _len15;
        _key15++
      ) {
        t[_key15] = arguments[_key15];
      }
      return function () {
        for (var _e162 = t.length - 1; _e162 >= 0; _e162--) t[_e162]();
        t.length = 0;
      };
    }
    ((exports.$addUpdateTag = Ji),
      (exports.$applyNodeReplacement = rl),
      (exports.$assumeActiveEditor = function (t) {
        (null !== Vr() && null === Br && (Br = t), Br !== t && e(378));
      }),
      (exports.$caretFromPoint = sa),
      (exports.$caretRangeFromSelection = aa),
      (exports.$cloneWithProperties = Wl),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = Wl(t))[oo] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = ta),
      (exports.$copyNode = ol),
      (exports.$create = function (t) {
        var e = Pl();
        return (
          Gr(),
          new (e.resolveRegisteredNodeAfterReplacements(
            e.getRegisteredNode(t),
          ).klass)()
        );
      }),
      (exports.$createChildrenArray = nc),
      (exports.$createLineBreakNode = Os),
      (exports.$createNodeSelection = xr),
      (exports.$createParagraphNode = Ps),
      (exports.$createPoint = Uo),
      (exports.$createRangeSelection = yr),
      (exports.$createRangeSelectionFromDom = function (t, e) {
        return Cr(null, t, e, null);
      }),
      (exports.$createTabNode = $o),
      (exports.$createTextNode = Ro),
      (exports.$extendCaretToRange = qc),
      (exports.$findMatchingParent = ec),
      (exports.$formatText = tr),
      (exports.$fullReconcile = Xr),
      (exports.$generateNodesFromRawText = Dr),
      (exports.$getAdjacentChildCaret = Yc),
      (exports.$getAdjacentNode = Wi),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          o = t,
          r = Yc(o);
        for (; null === r; ) {
          if ((n--, (r = o.getParentCaret(e)), !r)) return null;
          ((o = r), (r = Yc(o)));
        }
        return r && [r, n];
      }),
      (exports.$getCaretInDirection = Vc),
      (exports.$getCaretRange = Qc),
      (exports.$getCaretRangeInDirection = pa),
      (exports.$getCharacterOffsets = nr),
      (exports.$getChildCaret = Hc),
      (exports.$getChildCaretAtIndex = ma),
      (exports.$getChildCaretOrSelf = jc),
      (exports.$getCollapsedCaretRange = Xc),
      (exports.$getCommonAncestor = ra),
      (exports.$getCommonAncestorResultBranchOrder = ea),
      (exports.$getDOMSlot = Rl),
      (exports.$getDOMTextNode = Kl),
      (exports.$getDocument = pl),
      (exports.$getEditor = Pl),
      (exports.$getEditorDOMRenderConfig = Fl),
      (exports.$getNearestNodeFromDOMNode = xi),
      (exports.$getNearestRootOrShadowRoot = tl),
      (exports.$getNodeByKey = _i),
      (exports.$getNodeByKeyOrThrow = il),
      (exports.$getNodeFromDOMNode = pi),
      (exports.$getPreviousSelection = Tr),
      (exports.$getRoot = Ti),
      (exports.$getSelection = Sr),
      (exports.$getSiblingCaret = $c),
      (exports.$getSlot = hc),
      (exports.$getSlotFrame = uc),
      (exports.$getSlotHost = cc),
      (exports.$getSlotNameWithinHost = ac),
      (exports.$getSlotNames = dc),
      (exports.$getState = dt),
      (exports.$getStateChange = function (t, e, n) {
        var o = dt(t, n, at),
          r = dt(e, n, at);
        return n.isEqual(o, r) ? null : [o, r];
      }),
      (exports.$getTextContent = function () {
        var t = Sr();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = Wc),
      (exports.$getTextPointCaret = zc),
      (exports.$getTextPointCaretSlice = Uc),
      (exports.$getWritableNodeState = pt),
      (exports.$hasAncestor = qi),
      (exports.$hasUpdateTag = function (t) {
        return qr()._updateTags.has(t);
      }),
      (exports.$insertNodeToNearestRootAtCaret = Sa),
      (exports.$insertNodes = function (t) {
        var e = Sr() || Tr();
        (null === e && (e = Ti().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = pr),
      (exports.$isChildCaret = Rc),
      (exports.$isDecoratorNode = ms),
      (exports.$isEditorState = function (t) {
        return t instanceof _Ns;
      }),
      (exports.$isElementDOMSlot = Ll),
      (exports.$isElementNode = gs),
      (exports.$isExtendableTextPointCaret = _a),
      (exports.$isInlineElementOrDecoratorNode = Zi),
      (exports.$isInlineFormattable = ko),
      (exports.$isLeafNode = function (t) {
        return Lo(t) || bs(t) || ms(t);
      }),
      (exports.$isLexicalNode = lo),
      (exports.$isLineBreakNode = bs),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _Oc4;
      }),
      (exports.$isNodeSelection = Qo),
      (exports.$isParagraphNode = Fs),
      (exports.$isRangeSelection = qo),
      (exports.$isRootNode = xs),
      (exports.$isRootOrShadowRoot = nl),
      (exports.$isSelectionCapturedInDecoratorInput = Xs),
      (exports.$isShadowRootNode = el),
      (exports.$isSiblingCaret = Fc),
      (exports.$isSlotChild = ic),
      (exports.$isSlotHost = sc),
      (exports.$isTabNode = zo),
      (exports.$isTextNode = Lo),
      (exports.$isTextPointCaret = Pc),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _Jc;
      }),
      (exports.$isTokenOrSegmented = ri),
      (exports.$isTokenOrTab = oi),
      (exports.$markSlotEditable = Jl),
      (exports.$needsBlockCursorBeside = ll),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = Vr();
        if (n._readOnly) {
          var _t273 = zl(n).get(e);
          return _t273 ? Array.from(_t273.values()) : [];
        }
        var o = n._nodeMap,
          r = [];
        for (var _ref59 of o) {
          var _n124 = _ref59[1];
          _n124 instanceof t &&
            _n124.__type === e &&
            _n124.isAttached() &&
            r.push(_n124);
        }
        return r;
      }),
      (exports.$normalizeCaret = ga),
      (exports.$normalizeSelection__EXPERIMENTAL = kt),
      (exports.$onUpdate = Vi),
      (exports.$parseSerializedNode = function (t) {
        return os(t, qr()._nodes);
      }),
      (exports.$removeFromParent = ui),
      (exports.$removeSlot = function (t, e) {
        var n = t.getWritable();
        if (null === n.__slots) return n;
        var o = n.__slots.get(e);
        return (void 0 !== o && (Ec(o), pc(n)["delete"](e)), n);
      }),
      (exports.$removeTextFromCaretRange = ha),
      (exports.$rewindSiblingCaret = ua),
      (exports.$selectAll = function (t) {
        var e = Ti();
        if (qo(t)) {
          var _e163 = t.anchor,
            _n125 = t.focus,
            _o92 = _e163.getNode();
          if (xs(_o92))
            return (
              _e163.set(_o92.getKey(), 0, "element"),
              _n125.set(_o92.getKey(), _o92.getChildrenSize(), "element"),
              kt(t),
              t
            );
          var _r63 = _o92.getTopLevelElementOrThrow(),
            _s44 = _r63.getParent();
          if (null === _s44)
            return (
              gs(_r63) &&
                (_e163.set(_r63.getKey(), 0, "element"),
                _n125.set(_r63.getKey(), _r63.getChildrenSize(), "element"),
                kt(t)),
              t
            );
          var _i29 = _s44;
          return (
            _e163.set(_i29.getKey(), 0, "element"),
            _n125.set(_i29.getKey(), _i29.getChildrenSize(), "element"),
            kt(t),
            t
          );
        }
        {
          var _t274 = e.select(0, e.getChildrenSize());
          return (Ni(kt(_t274)), _t274);
        }
      }),
      (exports.$setCompositionKey = hi),
      (exports.$setDirectionFromDOM = Hl),
      (exports.$setFormatFromDOM = jl),
      (exports.$setPointFromCaret = ia),
      (exports.$setSelection = Ni),
      (exports.$setSelectionFromCaretRange = la),
      (exports.$setSlot = Nc),
      (exports.$setState = function (t, e, n) {
        var o;
        if ((Gr(), "function" == typeof n)) {
          var _r64 = t.getLatest(),
            _s45 = dt(_r64, e);
          if (((o = n(_s45)), e.isEqual(_s45, o))) return _r64;
        } else o = n;
        var r = t.getWritable();
        return (pt(r).updateFromKnown(e, o), r);
      }),
      (exports.$setTextFormat = function (t, e) {
        var n = [];
        for (var _ref61 of Object.entries(e)) {
          var _t275 = _ref61[0];
          var _o93 = _ref61[1];
          "boolean" == typeof _o93 && n.push([_t275, _o93]);
        }
        0 !== n.length &&
          Zo(t, function (t) {
            for (var _ref63 of n) {
              var _e164 = _ref63[0];
              var _o94 = _ref63[1];
              t = ci(t, _e164, _o94 ? A[_e164] : 0);
            }
            return t;
          });
      }),
      (exports.$splitAtPointCaretNext = Ca),
      (exports.$splitNode = function (e, n) {
        var o = e.getChildAtIndex(n);
        (null == o && (o = e), nl(e) && t(102));
        var _r67 = function r(e) {
            var n = e.getParentOrThrow(),
              s = nl(n),
              i = e !== o || s ? ol(e) : e;
            if (s)
              return ((gs(e) && gs(i)) || t(133), e.insertAfter(i), [e, i, i]);
            {
              var _r66 = _r67(n),
                _t276 = _r66[0],
                _o95 = _r66[1],
                _s46 = _r66[2],
                _l19 = e.getNextSiblings();
              return (
                _s46.append.apply(_s46, [i].concat(_l19)),
                [_t276, _o95, i]
              );
            }
          },
          _r65 = _r67(o),
          s = _r65[0],
          i = _r65[1];
        return [s, i];
      }),
      (exports.$updateDOMSelection = Mr),
      (exports.$updateRangeSelectionFromCaretRange = ca),
      (exports.ArtificialNode__DO_NOT_USE = _vs),
      (exports.BEFORE_INPUT_COMMAND = De),
      (exports.BLUR_COMMAND = Nn),
      (exports.CAN_REDO_COMMAND = Cn),
      (exports.CAN_UNDO_COMMAND = Sn),
      (exports.CAN_USE_BEFORE_INPUT = i),
      (exports.CAN_USE_DOM = n),
      (exports.CLEAR_EDITOR_COMMAND = yn),
      (exports.CLEAR_HISTORY_COMMAND = xn),
      (exports.CLICK_COMMAND = Ae),
      (exports.COLLABORATION_TAG = ao),
      (exports.COMMAND_PRIORITY_BEFORE_CRITICAL = -4),
      (exports.COMMAND_PRIORITY_BEFORE_EDITOR = -8),
      (exports.COMMAND_PRIORITY_BEFORE_HIGH = -5),
      (exports.COMMAND_PRIORITY_BEFORE_LOW = -7),
      (exports.COMMAND_PRIORITY_BEFORE_NORMAL = -6),
      (exports.COMMAND_PRIORITY_CRITICAL = 4),
      (exports.COMMAND_PRIORITY_EDITOR = Ls),
      (exports.COMMAND_PRIORITY_HIGH = 3),
      (exports.COMMAND_PRIORITY_LOW = 1),
      (exports.COMMAND_PRIORITY_NORMAL = 2),
      (exports.COMPOSITION_END_COMMAND = Pe),
      (exports.COMPOSITION_END_TAG = _o),
      (exports.COMPOSITION_START_COMMAND = Ie),
      (exports.COMPOSITION_START_TAG = go),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = Ke),
      (exports.COPY_COMMAND = _n),
      (exports.CUT_COMMAND = pn),
      (exports.CUT_TAG = "cut"),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = $s),
      (exports.DELETE_CHARACTER_COMMAND = Fe),
      (exports.DELETE_LINE_COMMAND = We),
      (exports.DELETE_WORD_COMMAND = ze),
      (exports.DRAGEND_COMMAND = gn),
      (exports.DRAGOVER_COMMAND = hn),
      (exports.DRAGSTART_COMMAND = dn),
      (exports.DROP_COMMAND = un),
      (exports.DecoratorNode = _ps),
      (exports.ElementNode = _hs4),
      (exports.FOCUS_COMMAND = Tn),
      (exports.FORMAT_ELEMENT_COMMAND = fn),
      (exports.FORMAT_TEXT_COMMAND = Ue),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = co),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = cn),
      (exports.INPUT_COMMAND = we),
      (exports.INSERT_LINE_BREAK_COMMAND = Re),
      (exports.INSERT_PARAGRAPH_COMMAND = Le),
      (exports.INSERT_TAB_COMMAND = ln),
      (exports.INTERNAL_$isBlock = Il),
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
      (exports.KEY_ARROW_DOWN_COMMAND = Ze),
      (exports.KEY_ARROW_LEFT_COMMAND = qe),
      (exports.KEY_ARROW_RIGHT_COMMAND = Je),
      (exports.KEY_ARROW_UP_COMMAND = Qe),
      (exports.KEY_BACKSPACE_COMMAND = nn),
      (exports.KEY_DELETE_COMMAND = rn),
      (exports.KEY_DOWN_COMMAND = Ge),
      (exports.KEY_ENTER_COMMAND = tn),
      (exports.KEY_ESCAPE_COMMAND = on),
      (exports.KEY_MODIFIER_COMMAND = vn),
      (exports.KEY_SPACE_COMMAND = en),
      (exports.KEY_TAB_COMMAND = sn),
      (exports.LineBreakNode = _Es),
      (exports.MOVE_TO_END = Ve),
      (exports.MOVE_TO_START = Xe),
      (exports.NODE_STATE_DIRECT = at),
      (exports.NODE_STATE_KEY = "$"),
      (exports.NODE_STATE_LATEST = ut),
      (exports.OUTDENT_CONTENT_COMMAND = an),
      (exports.PASTE_COMMAND = Be),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _ws),
      (exports.REDO_COMMAND = Ye),
      (exports.REMOVE_TEXT_COMMAND = $e),
      (exports.RootNode = _ys),
      (exports.SELECTION_CHANGE_COMMAND = be),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = Me),
      (exports.SELECT_ALL_COMMAND = mn),
      (exports.SET_TEXT_FORMAT_COMMAND = He),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = fo),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = uo),
      (exports.SKIP_SELECTION_FOCUS_TAG = ho),
      (exports.TEXT_TYPE_TO_FORMAT = A),
      (exports.TabNode = _Bo),
      (exports.TextNode = _Oo2),
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
        var n = Ta.apply(void 0, e);
        n.length > 0 &&
          (_t$classList2 = t.classList).add.apply(_t$classList2, n);
      }),
      (exports.buildImportMap = function (t) {
        return t;
      }),
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
      (exports.createCommand = Oe),
      (exports.createEditor = function (e) {
        var n = e || {},
          o = Zr(),
          r = n.theme || {},
          s = void 0 === e ? o : n.parentEditor || null,
          i = n.disableEvents || !1,
          l = Ss(),
          c = n.namespace || (null !== s ? s._config.namespace : bi()),
          a = n.editorState,
          u = [_ys, _Oo2, _Es, _Bo, _ws, _vs].concat(n.nodes || []),
          f = n.onError,
          d = n.onWarn,
          h = n.html,
          g = void 0 === n.editable || n.editable;
        var _;
        if (void 0 === e && null !== o) _ = o._nodes;
        else {
          _ = new Map();
          for (var _e165 = 0; _e165 < u.length; _e165++) {
            var _o96 = u[_e165],
              _r68 = null,
              _s47 = null;
            if (_o96 && "object" == typeof _o96) {
              var _t277 = _o96;
              ((_o96 = _t277.replace),
                (_r68 = _t277["with"]),
                (_s47 = _t277.withKlass || null));
            }
            if (
              "function" != typeof _o96 ||
              !_o96.prototype ||
              !(_o96 === _io5 || _o96.prototype instanceof _io5)
            ) {
              var _r69 = "<unknown>";
              try {
                _r69 = JSON.parse(G);
              } catch (t) {}
              t(
                365,
                String(_e165 - u.length + (n.nodes ? n.nodes.length : 0)),
                "function" == typeof _o96
                  ? "" +
                      _o96.name +
                      ("function" == typeof _o96.getType
                        ? " (type " + String(_o96.getType()) + ")"
                        : "")
                  : String(_o96),
                String(_r69),
              );
            }
            Zl(_o96);
            var _i30 = _o96.getType(),
              _l20 = Bs(_o96);
            _.set(_i30, {
              exportDOM: h && h["export"] ? h["export"].get(_o96) : void 0,
              klass: _o96,
              replace: _r68,
              replaceWithKlass: _s47,
              sharedNodeState: ht(u[_e165]),
              transforms: _l20,
            });
          }
        }
        var p = new _Us(
          l,
          s,
          _,
          {
            disableEvents: i,
            dom: babelHelpers["extends"]({}, $s, e && e.dom),
            namespace: c,
            theme: r,
          },
          f || console.error,
          d || Rs,
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
            (t.registerCommand(De, Wn, Ls),
              t.registerCommand(we, Un, Ls),
              t.registerCommand(Ie, Hn, Ls),
              t.registerCommand(Pe, jn, Ls),
              t.registerCommand(Ge, Jn, Ls));
          })(p),
          p
        );
      }),
      (exports.createRefCountedRegistry = En),
      (exports.createSharedNodeState = ht),
      (exports.createState = function (t, e) {
        return new ft(t, e);
      }),
      (exports.declarePeerDependency = function (t, e) {
        return [t, e];
      }),
      (exports.defineExtension = function (t) {
        return t;
      }),
      (exports.findAllLexicalElementsDeep = gl),
      (exports.flipDirection = Ac),
      (exports.getActiveElement = Nl),
      (exports.getActiveElementDeep = vl),
      (exports.getComposedEventTarget = El),
      (exports.getComposedStaticRange = ml),
      (exports.getDOMOwnerDocument = Gi),
      (exports.getDOMSelection = al),
      (exports.getDOMSelectionFromTarget = ul),
      (exports.getDOMSelectionPoints = xl),
      (exports.getDOMSelectionRange = yl),
      (exports.getDOMSelectionRangeAndPoints = function (t, e) {
        var _Cl;
        var n = ml(t, e);
        if (null === n)
          return {
            points: t,
            range: t.rangeCount > 0 ? t.getRangeAt(0) : null,
          };
        var o =
          (_Cl = Cl(n)) != null
            ? _Cl
            : t.rangeCount > 0
              ? t.getRangeAt(0)
              : null;
        return { points: Sl(n, Tl(t)), range: o };
      }),
      (exports.getDOMShadowRoots = hl),
      (exports.getDOMTextNode = li),
      (exports.getDeclaredSlots = xc),
      (exports.getEditorPropertyFromDOMNode = ni),
      (exports.getNearestEditorFromDOMNode = ei),
      (exports.getParentElement = Yi),
      (exports.getRegisteredNode = Vs),
      (exports.getRegisteredNodeOrThrow = Js),
      (exports.getRegisteredSubtypeMap = function (t) {
        var e = new Map(),
          n = new Map();
        for (var _o97 of t) {
          var _Zl2 = Zl(_o97),
            _t278 = _Zl2.ownNodeType;
          _t278 && (n.set(_t278, _o97), e.set(_t278, new Set()));
        }
        for (var _ref65 of n) {
          var _t279 = _ref65[0];
          var _o98 = _ref65[1];
          for (var _ref67 of tc(_o98)) {
            var _n126 = _ref67.ownNodeType;
            {
              var _o99 = _n126 && e.get(_n126);
              _o99 && _o99.add(_t279);
            }
          }
        }
        return e;
      }),
      (exports.getRootOwnerDocument = _l),
      (exports.getStaticNodeConfig = Zl),
      (exports.getStyleObjectFromCSS = mo),
      (exports.getTextDirection = function (t) {
        return b.test(t) ? "rtl" : M.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = Bs),
      (exports.isBlockDomNode = wl),
      (exports.isCurrentlyReadOnlyMode = Yr),
      (exports.isDOMCapturingSelection = Vl),
      (exports.isDOMDocumentNode = ii),
      (exports.isDOMNode = Ol),
      (exports.isDOMShadowRoot = fl),
      (exports.isDOMTextNode = si),
      (exports.isDOMUnmanaged = Gl),
      (exports.isDocumentFragment = bl),
      (exports.isExactShortcutMatch = Fi),
      (exports.isHTMLAnchorElement = function (t) {
        return kl(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = kl),
      (exports.isHTMLTableCellElement = function (t) {
        return kl(t) && ("TD" === t.tagName || "TH" === t.tagName);
      }),
      (exports.isHTMLTableRowElement = function (t) {
        return kl(t) && "TR" === t.tagName;
      }),
      (exports.isInlineDomNode = Al),
      (exports.isLastChildInBlockNode = As),
      (exports.isLexicalEditor = ti),
      (exports.isModifierMatch = Pi),
      (exports.isOnlyChildInBlockNode = Ms),
      (exports.isSelectionCapturedInDecoratorInput = Qs),
      (exports.isSelectionWithinEditor = Zs),
      (exports.iterStaticNodeConfigChain = tc),
      (exports.makeStepwiseIterator = Zc),
      (exports.mergeRegister = Na),
      (exports.mountSlotContainer = function (t, e, n, o) {
        var r = t.read("latest", function () {
          var o = _i(e);
          return null !== o
            ? (function (t, e, n) {
                if (n === void 0) {
                  n = Pl();
                }
                var o = hc(t, e);
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
      (exports.normalizeClassNames = Ta),
      (exports.registerEventListener = kn),
      (exports.registerEventListeners = function (t, e, n) {
        return Na.apply(
          void 0,
          Object.entries(e).map(function (_ref68) {
            var e = _ref68[0],
              o = _ref68[1];
            return kn(t, e, o, n);
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
        var n = Ta.apply(void 0, e);
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(_t$classList3, n);
      }),
      (exports.removeFromParent = fi),
      (exports.resetRandomKey = function () {
        Gs = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = xo),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n127 in e) {
          var _o100 = e[_n127];
          null == _o100 ? t.removeProperty(_n127) : yo(t, _n127, _o100);
        }
      }),
      (exports.setDOMUnmanaged = Yl),
      (exports.setNodeIndentFromDOM = Ul),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n128 in e)
          if (t[_n128] !== e[_n128]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.stopLexicalPropagation = Qn),
      (exports.toggleTextFormatType = ci),
      (exports.tokenizeRawText = Ar),
      (exports.unmountSlotContainer = function (t, e, n) {
        n.style.display = "none";
        var o = t.getElementByKey(e);
        null !== o && n.parentElement !== o && o.insertBefore(n, o.firstChild);
      }));
  },
  null,
);
