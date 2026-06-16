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
    var _D, _P;
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
    var e =
        "undefined" != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement,
      n = e && "documentMode" in document ? document.documentMode : null,
      r = e && /Mac|iPod|iPhone|iPad/.test(navigator.platform),
      o = e && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
      i =
        !(!e || !("InputEvent" in window) || n) &&
        "getTargetRanges" in new window.InputEvent("input"),
      s = e && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
      l = e && /Android/.test(navigator.userAgent),
      c = e && /Version\/[\d.]+.*Safari/.test(navigator.userAgent) && !l,
      a = e && /^(?=.*Chrome).*/i.test(navigator.userAgent),
      u = e && l && a,
      f = e && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && r && !a,
      d = 0,
      h = 1,
      g = 2,
      _ = 128,
      p = 1,
      y = 2,
      m = 3,
      x = 4,
      C = 5,
      S = 6,
      T = c || s || f ? "\xa0" : "\u200b",
      N = "\n\n",
      v = o ? "\xa0" : T,
      k = "\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc",
      O =
        "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff",
      E = new RegExp("^[^" + O + "]*[" + k + "]"),
      b = new RegExp("^[^" + k + "]*[" + O + "]"),
      M = {
        bold: 1,
        capitalize: 1024,
        code: 16,
        highlight: _,
        italic: 2,
        lowercase: 256,
        strikethrough: 4,
        subscript: 32,
        superscript: 64,
        underline: 8,
        uppercase: 512,
      },
      A = { directionless: 1, unmergeable: 2 },
      w = { center: 2, end: 6, justify: 4, left: 1, right: 3, start: 5 },
      D =
        ((_D = {}),
        (_D[y] = "center"),
        (_D[S] = "end"),
        (_D[x] = "justify"),
        (_D[p] = "left"),
        (_D[m] = "right"),
        (_D[C] = "start"),
        _D),
      I = { normal: 0, segmented: 2, token: 1 },
      P =
        ((_P = {}),
        (_P[d] = "normal"),
        (_P[g] = "segmented"),
        (_P[h] = "token"),
        _P),
      F = "$config";
    function R() {
      return Us()._blockCursorElement;
    }
    var _L2 = (function () {
      function L(t, e, n) {
        ((this.element = t),
          (this.before = e || null),
          (this.after = n || null));
      }
      var _proto = L.prototype;
      _proto.withBefore = function withBefore(t) {
        return new L(this.element, t, this.after);
      };
      _proto.withAfter = function withAfter(t) {
        return new L(this.element, this.before, t);
      };
      _proto.withElement = function withElement(t) {
        return this.element === t ? this : new L(t, this.before, this.after);
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
        var r = K(t, this.element);
        if (null === r) return "after";
        var o = Array.prototype.indexOf.call(t.childNodes, r);
        if (o < 0) return "after";
        if (e === t) return n <= o ? "before" : "after";
        var i = K(t, e);
        if (null === i) return "after";
        var s = Array.prototype.indexOf.call(t.childNodes, i);
        return s >= 0 && s <= o ? "before" : "after";
      };
      _proto.getInsertionAnchor = function getInsertionAnchor() {
        return this.before;
      };
      return L;
    })();
    function K(t, e) {
      var n = e;
      for (; null !== n && n.parentNode !== t; ) n = n.parentNode;
      return n;
    }
    var _B = (function (_L) {
      function B() {
        return _L.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(B, _L);
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
          _L.prototype.getInsertionAnchor.call(this) ||
          this.getManagedLineBreak()
        );
      };
      _proto2.getFirstChildAnchor = function getFirstChildAnchor() {
        var t = _L.prototype.getFirstChildAnchor.call(this),
          e = t ? t.nextSibling : this.element.firstChild;
        return null !== e && e === R() ? e : t;
      };
      _proto2.getManagedLineBreak = function getManagedLineBreak() {
        return this.element.__lexicalLineBreak || null;
      };
      _proto2.setManagedLineBreak = function setManagedLineBreak(t) {
        if (((this.element.__lexicalLastChildKind = t), null === t))
          this.removeManagedLineBreak();
        else {
          var _e2 = "decorator" === t && (f || s || c);
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
          var _t3 = document.createElement("img");
          (_t3.setAttribute("data-lexical-managed-linebreak", "true"),
            _t3.style.setProperty("display", "inline", "important"),
            _t3.style.setProperty("border", "0px", "important"),
            _t3.style.setProperty("margin", "0px", "important"),
            (_t3.alt = ""),
            n.insertBefore(_t3, o),
            (n.__lexicalLineBreak = _t3));
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
            _n3 = R(),
            _o2 = this.element.childNodes,
            _i2 = Math.min(r, _o2.length);
          var _s2 = 0;
          for (var _t4 = _e4; _t4 < _i2; _t4++) _o2[_t4] !== _n3 && _s2++;
          return [t, Math.min(_s2, t.getChildrenSize())];
        }
        var o = z(e, n);
        o.push(r);
        var i = z(e, this.element);
        var s = t.getIndexWithinParent();
        for (var _t5 = 0; _t5 < i.length; _t5++) {
          var _e5 = o[_t5],
            _n4 = i[_t5];
          if (void 0 === _e5 || _e5 < _n4) break;
          if (_e5 > _n4) {
            s += 1;
            break;
          }
        }
        return [t.getParentOrThrow(), s];
      };
      return B;
    })(_L2);
    function z(e, n) {
      var r = [];
      var o = n;
      for (; o !== e && null !== o; o = o.parentNode) {
        var _t6 = 0;
        for (
          var _e6 = o.previousSibling;
          null !== _e6;
          _e6 = _e6.previousSibling
        )
          _t6++;
        r.push(_t6);
      }
      return (o !== e && t(225), r.reverse());
    }
    var $;
    try {
      $ = "0.45.0+prod.cjs";
    } catch (t) {}
    var W = $ != null ? $ : "0.45.0+source";
    var _U = (function () {
      function U() {
        this._front = new Set();
        this._back = new Set();
      }
      var _proto3 = U.prototype;
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
      return babelHelpers.createClass(U, [
        {
          key: "size",
          get: function get() {
            return this._front.size + this._back.size;
          },
        },
      ]);
    })();
    var Y = null;
    function j(t, e) {
      if (e === void 0) {
        e = 1e3;
      }
      return t instanceof _H
        ? t.clone()
        : t.size < e
          ? new Map(t)
          : new _H().init(new Map(t), void 0, t.size);
    }
    var _H = (function () {
      function H() {
        this._mutable = !1;
        this._old = void 0;
        this._nursery = void 0;
        this._size = 0;
      }
      var _proto4 = H.prototype;
      _proto4.clone = function clone() {
        return (
          (this._mutable = !1),
          new H().init(this._old, this._nursery, this._size)
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
          var _t7 = new Map(this._old);
          for (var _ref2 of this._nursery) {
            var _e8 = _ref2[0];
            var _n5 = _ref2[1];
            _n5 !== Y ? _t7.set(_e8, _n5) : _t7["delete"](_e8);
          }
          ((this._old = _t7), (this._nursery = void 0));
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
        for (var _t8 of this.entries()) yield _t8[0];
      };
      _proto4.values = function* values() {
        for (var _t9 of this.entries()) yield _t9[1];
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
      return babelHelpers.createClass(H, [
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
    function J(t, e, n, r, o, i) {
      var s = t.getFirstChild();
      for (; null !== s; ) {
        var _t0 = s.__key;
        (s.__parent === e &&
          (Uo(s) && J(s, _t0, n, r, o, i),
          n.has(_t0) || i["delete"](_t0),
          o.push(_t0)),
          (s = s.getNextSibling()));
      }
    }
    var G = !1,
      V = 0;
    function q(t) {
      V = t.timeStamp;
    }
    function X(t, e, n) {
      var r = "BR" === t.nodeName,
        o = e.__lexicalLineBreak;
      return (
        (o && (t === o || (r && t.previousSibling === o))) ||
        (r && void 0 !== Yi(t, n))
      );
    }
    function Q(t, e, n) {
      var r = Is(Ns(n));
      var o = null,
        i = null;
      null !== r &&
        r.anchorNode === t &&
        ((o = r.anchorOffset), (i = r.focusOffset));
      var s = t.nodeValue;
      null !== s && ns(e, s, o, i, !1);
    }
    function Z(t, e, n) {
      if (Rr(t)) {
        var _e1 = t.anchor.getNode();
        if (_e1.is(n) && t.format !== _e1.getFormat()) return !1;
      }
      return Di(e) && n.isAttached();
    }
    function tt(t, e, n) {
      for (var _r4 = t; _r4 && !nl(_r4); _r4 = ys(_r4)) {
        var _t1 = Yi(_r4, e);
        if (void 0 !== _t1) {
          var _e10 = $i(_t1, n);
          if (_e10) return Ho(_e10) || !Fs(_r4) ? void 0 : [_r4, _e10];
        }
      }
    }
    function et(t, e, n) {
      G = !0;
      var r = performance.now() - V > 100;
      try {
        $o(t, function () {
          var i =
              Zr() ||
              (function (t) {
                return t.getEditorState().read(function () {
                  var t = Zr();
                  return null !== t ? t.clone() : null;
                });
              })(t),
            s = new Map(),
            l = t._editorState,
            c = t._blockCursorElement;
          var a = !1,
            u = "";
          for (var _n9 = 0; _n9 < e.length; _n9++) {
            var _f = e[_n9],
              _d = _f.type,
              _h = _f.target,
              _g = tt(_h, t, l);
            if (!_g) continue;
            var _2 = _g[0],
              _p = _g[1];
            if ("characterData" === _d)
              r && Or(_p) && Di(_h) && Z(i, _h, _p) && Q(_h, _p, t);
            else if ("childList" === _d) {
              a = !0;
              var _e11 = _f.addedNodes;
              for (var _n0 = 0; _n0 < _e11.length; _n0++) {
                var _r5 = _e11[_n0],
                  _i3 = Wi(_r5),
                  _s3 = _r5.parentNode;
                if (
                  null != _s3 &&
                  _r5 !== c &&
                  null === _i3 &&
                  !X(_r5, _s3, t) &&
                  !nl(_r5)
                ) {
                  if (o) {
                    var _t10 =
                      (Fs(_r5) ? _r5.innerText : null) || _r5.nodeValue;
                    _t10 && (u += _t10);
                  }
                  _s3.removeChild(_r5);
                }
              }
              var _n1 = _f.removedNodes,
                _r6 = _n1.length;
              if (_r6 > 0) {
                var _e12 = 0;
                for (var _o3 = 0; _o3 < _r6; _o3++) {
                  var _r7 = _n1[_o3];
                  (X(_r7, _h, t) || c === _r7) && (_h.appendChild(_r7), _e12++);
                }
                _r6 !== _e12 && s.set(_2, _p);
              }
            }
          }
          if (s.size > 0)
            for (var _ref6 of s) {
              var _e13 = _ref6[0];
              var _n10 = _ref6[1];
              _n10.reconcileObservedMutation(_e13, t);
            }
          var f = n.takeRecords();
          if (f.length > 0) {
            for (var _e14 = 0; _e14 < f.length; _e14++) {
              var _n11 = f[_e14],
                _r8 = _n11.addedNodes,
                _o4 = _n11.target;
              for (var _e15 = 0; _e15 < _r8.length; _e15++) {
                var _n12 = _r8[_e15],
                  _i4 = _n12.parentNode;
                null == _i4 ||
                  "BR" !== _n12.nodeName ||
                  X(_n12, _o4, t) ||
                  _i4.removeChild(_n12);
              }
            }
            n.takeRecords();
          }
          null !== i && (a && Vi(i), o && gs(t) && i.insertRawText(u));
        });
      } finally {
        G = !1;
      }
    }
    function nt(t) {
      var e = t._observer;
      if (null !== e) {
        et(t, e.takeRecords(), e);
      }
    }
    function rt(t) {
      (!(function (t) {
        0 === V && Ns(t).addEventListener("textInput", q, !0);
      })(t),
        (t._observer = new MutationObserver(function (e, n) {
          et(t, e, n);
        })));
    }
    var ot = function ot(t, e) {
      ((this.key = t),
        (this.parse = e.parse.bind(e)),
        (this.unparse = (e.unparse || dt).bind(e)),
        (this.isEqual = (e.isEqual || Object.is).bind(e)),
        (this.defaultValue = this.parse(void 0)),
        (this.resetOnCopyNode = e.resetOnCopyNode || !1));
    };
    function it(t, e, n) {
      if (n === void 0) {
        n = "latest";
      }
      var r = ("latest" === n ? t.getLatest() : t).__state;
      return r ? r.getValue(e) : e.defaultValue;
    }
    function st(t) {
      var e = new Map(),
        n = new Set();
      for (
        var _r9 = "function" == typeof t ? t : t.replace;
        _r9.prototype && void 0 !== _r9.prototype.getType;
        _r9 = Object.getPrototypeOf(_r9)
      ) {
        var _il = il(_r9),
          _t11 = _il.ownNodeConfig;
        if (_t11 && _t11.stateConfigs)
          for (var _r0 of _t11.stateConfigs) {
            var _t12 = void 0;
            ("stateConfig" in _r0
              ? ((_t12 = _r0.stateConfig), _r0.flat && n.add(_t12.key))
              : (_t12 = _r0),
              e.set(_t12.key, _t12));
          }
      }
      return { flatKeys: n, sharedConfigMap: e };
    }
    var lt = new Set(["__proto__", "constructor", "prototype"]);
    var _ct = (function () {
      function ct(t, e, n, r, o) {
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
        var i = this.sharedNodeState.sharedConfigMap,
          s =
            void 0 !== o
              ? o
              : (function (t, e, n) {
                  var r = n.size;
                  if (e)
                    for (var _o5 in e) {
                      var _e16 = t.get(_o5);
                      (_e16 && n.has(_e16)) || r++;
                    }
                  return r;
                })(i, n, r);
        this.size = s;
      }
      var _proto5 = ct.prototype;
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
        for (var _ref8 of this.knownState) {
          var _e18 = _ref8[0];
          var _n13 = _ref8[1];
          _e18.isEqual(_n13, _e18.defaultValue)
            ? delete t[_e18.key]
            : (t[_e18.key] = _e18.unparse(_n13));
        }
        for (var _n14 of this.sharedNodeState.flatKeys)
          _n14 in t && ((e[_n14] = t[_n14]), delete t[_n14]);
        return (ft(t) && (e.$ = t), e);
      };
      _proto5.getWritable = function getWritable(t) {
        if (this.node === t) return this;
        var e = this.sharedNodeState,
          n = this.unknownState,
          r = new Map(this.knownState);
        return new ct(
          t,
          e,
          (function (t, e, n) {
            var r;
            if (n)
              for (var _ref0 of Object.entries(n)) {
                var _o6 = _ref0[0];
                var _i5 = _ref0[1];
                {
                  if (lt.has(_o6)) continue;
                  var _n15 = t.get(_o6);
                  _n15
                    ? e.has(_n15) || e.set(_n15, _n15.parse(_i5))
                    : ((r = r || {}), (r[_o6] = _i5));
                }
              }
            return r;
          })(e.sharedConfigMap, r, n),
          r,
          this.size,
        );
      };
      _proto5.resetOnCopyNode = function resetOnCopyNode() {
        for (var _t13 of this.knownState.keys())
          _t13.resetOnCopyNode && this.knownState.set(_t13, _t13.defaultValue);
        return this;
      };
      _proto5.updateFromKnown = function updateFromKnown(t, e) {
        var n = t.key;
        this.sharedNodeState.sharedConfigMap.set(n, t);
        var r = this.knownState,
          o = this.unknownState;
        (r.has(t) ||
          (o && n in o) ||
          (o && (delete o[n], (this.unknownState = ft(o))), this.size++),
          r.set(t, e));
      };
      _proto5.updateFromUnknown = function updateFromUnknown(t, e) {
        if (lt.has(t)) return;
        var n = this.sharedNodeState.sharedConfigMap.get(t);
        n
          ? this.updateFromKnown(n, n.parse(e))
          : ((this.unknownState = this.unknownState || {}),
            t in this.unknownState || this.size++,
            (this.unknownState[t] = e));
      };
      _proto5.updateFromJSON = function updateFromJSON(t) {
        var e = this.knownState;
        for (var _t14 of e.keys()) e.set(_t14, _t14.defaultValue);
        if (((this.size = e.size), (this.unknownState = void 0), t))
          for (var _ref10 of Object.entries(t)) {
            var _e19 = _ref10[0];
            var _n16 = _ref10[1];
            this.updateFromUnknown(_e19, _n16);
          }
      };
      return ct;
    })();
    function at(t) {
      var e = t.getWritable(),
        n = e.__state ? e.__state.getWritable(e) : new _ct(e, ut(e));
      return ((e.__state = n), n);
    }
    function ut(t) {
      return t.__state
        ? t.__state.sharedNodeState
        : Ti(Us(), t.getType()).sharedNodeState;
    }
    function ft(t) {
      if (t) for (var _e20 in t) return t;
    }
    function dt(t) {
      return t;
    }
    function ht(t, e, n) {
      for (var _ref12 of e.knownState) {
        var _r1 = _ref12[0];
        var _o7 = _ref12[1];
        {
          if (t.has(_r1.key)) continue;
          t.add(_r1.key);
          var _e21 = n ? n.getValue(_r1) : _r1.defaultValue;
          if (_e21 !== _o7 && !_r1.isEqual(_e21, _o7)) return !0;
        }
      }
      return !1;
    }
    function gt(t, e, n) {
      var r = e.unknownState,
        o = n ? n.unknownState : void 0;
      if (r)
        for (var _ref14 of Object.entries(r)) {
          var _e22 = _ref14[0];
          var _n17 = _ref14[1];
          if (t.has(_e22)) continue;
          t.add(_e22);
          if (_n17 !== (o ? o[_e22] : void 0)) return !0;
        }
      return !1;
    }
    function _t(t, e) {
      var n = t.__state;
      return n && n.node === t ? n.getWritable(e) : n;
    }
    function pt(t, e) {
      var n = t.__mode,
        r = t.__format,
        o = t.__style,
        i = e.__mode,
        s = e.__format,
        l = e.__style,
        c = t.__state,
        a = e.__state;
      return (
        (null === n || n === i) &&
        (null === r || r === s) &&
        (null === o || o === l) &&
        (null === t.__state ||
          c === a ||
          (function (t, e) {
            if (t === e) return !0;
            var n = new Set();
            return !(
              (t && ht(n, t, e)) ||
              (e && ht(n, e, t)) ||
              (t && gt(n, t, e)) ||
              (e && gt(n, e, t))
            );
          })(c, a))
      );
    }
    function yt(t, e) {
      var n = t.mergeWithSibling(e),
        r = Eo()._normalizedNodes;
      return (r.add(t.__key), r.add(e.__key), n);
    }
    function mt(t) {
      var e,
        n,
        r = t;
      if ("" !== r.__text || !r.isSimpleText() || r.isUnmergeable()) {
        for (
          ;
          null !== (e = r.getPreviousSibling()) &&
          Or(e) &&
          e.isSimpleText() &&
          !e.isUnmergeable();
        ) {
          if ("" !== e.__text) {
            if (pt(e, r)) {
              r = yt(e, r);
              break;
            }
            break;
          }
          e.remove();
        }
        for (
          ;
          null !== (n = r.getNextSibling()) &&
          Or(n) &&
          n.isSimpleText() &&
          !n.isUnmergeable();
        ) {
          if ("" !== n.__text) {
            if (pt(r, n)) {
              r = yt(r, n);
              break;
            }
            break;
          }
          n.remove();
        }
      } else r.remove();
    }
    function xt(t) {
      return (Ct(t.anchor), Ct(t.focus), t);
    }
    function Ct(t) {
      for (; "element" === t.type; ) {
        var _e23 = t.getNode(),
          _n18 = t.offset;
        var _r10 = void 0,
          _o8 = void 0;
        if (
          (_n18 === _e23.getChildrenSize()
            ? ((_r10 = _e23.getChildAtIndex(_n18 - 1)), (_o8 = !0))
            : ((_r10 = _e23.getChildAtIndex(_n18)), (_o8 = !1)),
          Or(_r10))
        ) {
          t.set(_r10.__key, _o8 ? _r10.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!Uo(_r10)) break;
        t.set(_r10.__key, _o8 ? _r10.getChildrenSize() : 0, "element", !0);
      }
    }
    var St = Symbol["for"]("@lexical/CachedTextSize");
    function Tt(e, n) {
      return Bt.read(
        function () {
          var r = 0,
            o = e;
          for (var _e24 = 0; _e24 < n && null !== o; _e24++) {
            var _i6 = Kt.get(o);
            if ((void 0 === _i6 && t(345, o), Uo(_i6))) {
              var _s4 = zt.get(o);
              if (void 0 !== _s4 && Uo(_s4) && _s4.__parent !== _i6.__parent)
                r += _i6.getTextContentSize();
              else {
                var _e25 = $t.get(o),
                  _n19 = _e25 && _e25.__lexicalTextContent;
                ("string" != typeof _n19 && t(346, _i6.getType()),
                  (r += _n19.length));
              }
              _e24 < n - 1 && !_i6.isInline() && (r += 2);
            } else {
              var _e26 = _i6[St];
              (void 0 === _e26 && t(347, _i6.getType(), o), (r += _e26));
            }
            o = _i6.__next;
          }
          return r;
        },
        { editor: Ot },
      );
    }
    function Nt(t) {
      Uo(t) ||
        (void 0 === t[St] &&
          (t[St] = Or(t) ? t.__text.length : t.getTextContentSize()));
    }
    var vt = 4;
    var kt,
      Ot,
      Et,
      bt = "",
      Mt = null,
      At = null,
      wt = null;
    function Dt() {
      return { firstTextKey: wt, format: Mt, style: At };
    }
    function It(t) {
      null !== t.firstTextKey &&
        ((Mt = t.format), (At = t.style), (wt = t.firstTextKey));
    }
    function Pt(e) {
      if (null !== wt) return;
      var n = e.__lexicalFirstTextKey;
      if ((void 0 === n && t(348), null === n)) return;
      var r = zt.get(n);
      Or(r) && ((Mt = r.getFormat()), (At = r.getStyle()), (wt = n));
    }
    var Ft,
      Rt,
      Lt,
      Kt,
      Bt,
      zt,
      $t,
      Wt,
      Ut,
      Yt,
      jt = !1,
      Ht = !1;
    function Jt(t, e) {
      var n = Kt.get(t),
        r = zt.has(t);
      if (null !== e) {
        var _n20 = ue(t);
        _n20.parentNode === e && e.removeChild(_n20);
      }
      if (!r) {
        if ((Ot._keyToDOMMap["delete"](t), Uo(n))) {
          var _t15 = ll(n, Kt);
          Gt(_t15, 0, _t15.length - 1, null);
        }
        void 0 !== n && fs(Ut, Et, Ft, n, "destroyed");
      }
    }
    function Gt(t, e, n, r) {
      for (var _o9 = e; _o9 <= n; ++_o9) {
        var _e27 = t[_o9];
        void 0 !== _e27 && Jt(_e27, r);
      }
    }
    function Vt(t, e) {
      t.setProperty("text-align", e);
    }
    var qt = "40px";
    function Xt(t, e) {
      var n = kt.theme.indent;
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
          : "calc(" + e + " * var(--lexical-indent-base-value, " + qt + "))",
      );
    }
    function Qt(t, e) {
      var n = t.style;
      0 === e
        ? Vt(n, "")
        : 1 === e
          ? Vt(n, "left")
          : 2 === e
            ? Vt(n, "center")
            : 3 === e
              ? Vt(n, "right")
              : 4 === e
                ? Vt(n, "justify")
                : 5 === e
                  ? Vt(n, "start")
                  : 6 === e && Vt(n, "end");
    }
    function Zt(t, e) {
      var n = (function (t) {
        var e = t.__dir;
        if (null !== e) return e;
        if (Go(t)) return null;
        var n = t.getParentOrThrow();
        return Os(n) && null === n.__dir ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function te(e, n) {
      var r = zt.get(e);
      if ((void 0 === r && t(60), null !== n)) {
        var _t16 = Kt.get(e);
        if (void 0 !== _t16 && _t16.__parent !== r.__parent) {
          var _t17 = $t.get(e);
          if (void 0 !== _t17) return (n.insertChild(_t17), ie(e, n.element));
        }
      }
      var o = Yt.$createDOM(r, Ot);
      if (
        ((function (t, e, n) {
          var r = n._keyToDOMMap;
          (Ui(e, n, t), r.set(t, e));
        })(e, o, Ot),
        Or(r)
          ? o.setAttribute("data-lexical-text", "true")
          : Ho(r) &&
            (o.setAttribute("data-lexical-decorator", "true"),
            el(o, { captureSelection: !0 })),
        Uo(r))
      ) {
        var _t18 = r.__indent,
          _e28 = r.__size;
        if ((Zt(o, r), 0 !== _t18 && Xt(o, _t18), 0 === _e28))
          ((o.__lexicalTextContent = ""), (o.__lexicalFirstTextKey = null));
        else {
          var _t19 = _e28 - 1;
          ee(ll(r, zt), r, 0, _t19, js(r, o, Ot));
        }
        var _n21 = r.__format;
        (0 !== _n21 && Qt(o, _n21), r.isInline() || ne(null, r, o));
      } else {
        var _t20 = r.getTextContent();
        if (Ho(r)) {
          var _t21 = r.decorate(Ot, kt);
          (null !== _t21 && se(e, _t21), (o.contentEditable = "false"));
        }
        bt += _t20;
      }
      return (
        null !== n && n.insertChild(o),
        Yt.$decorateDOM(r, null, o, Ot),
        Nt(r),
        fs(Ut, Et, Ft, r, "created"),
        o
      );
    }
    function ee(e, n, r, o, i) {
      var s = bt,
        l = Dt();
      ((bt = ""), (Mt = null), (At = null), (wt = null));
      var c = r;
      for (; c <= o; ++c) {
        var _t22 = Dt();
        te(e[c], i);
        var _n22 = zt.get(e[c]);
        (null !== _n22 && Or(_n22)
          ? null === Mt &&
            ((Mt = _n22.getFormat()), (At = _n22.getStyle()), (wt = _n22.__key))
          : Uo(_n22) && c < o && !_n22.isInline() && (bt += N),
          It(_t22));
      }
      var a = Ot._keyToDOMMap.get(n.__key);
      (void 0 === a && t(349, n.__key),
        (a.__lexicalTextContent = bt),
        (a.__lexicalFirstTextKey = wt),
        (bt = s + bt),
        It(l));
    }
    function ne(t, e, n) {
      var _r$element$__lexicalL;
      var r = js(e, n, Ot),
        o =
          (_r$element$__lexicalL = r.element.__lexicalLastChildKind) != null
            ? _r$element$__lexicalL
            : null,
        i = (function (t, e) {
          if (t) {
            var _n23 = t.__last;
            if (_n23) {
              var _t23 = e.get(_n23);
              if (_t23)
                return ri(_t23)
                  ? "line-break"
                  : Ho(_t23) && _t23.isInline()
                    ? "decorator"
                    : null;
            }
            return "empty";
          }
          return null;
        })(e, zt);
      o !== i && r.setManagedLineBreak(i);
    }
    function re(e, n, r) {
      var o;
      ((Mt = null),
        (At = null),
        (wt = null),
        (function (e, n, r) {
          var o = bt,
            i = e.__size,
            s = n.__size;
          bt = "";
          var l = r.element,
            c = Ot._keyToDOMMap.get(n.__key);
          void 0 === c && t(351, n.__key);
          var a = s - i;
          if (
            !jt &&
            Math.abs(a) <= 1 &&
            i >= vt &&
            e.__first === n.__first &&
            (0 !== a || !Ot._cloneNotNeeded.has(e.__key))
          ) {
            var _i7 = c.__lexicalTextContent,
              _u = Wt.get(e.__key);
            if (!jt && "string" == typeof _i7 && void 0 !== _u) {
              var _s5 = (function (t, e) {
                var n = e.size;
                if (0 === n || n >= t.__size) return null;
                var r = t.__last,
                  o = null,
                  i = 0;
                for (; null !== r && i < n; ) {
                  if (!e.has(r)) return null;
                  o = r;
                  var _t24 = zt.get(r);
                  if (void 0 === _t24) return null;
                  ((r = _t24.__prev), i++);
                }
                if (i !== n) return null;
                if (null !== r && e.has(r)) return null;
                return o;
              })(n, _u);
              if (null !== _s5) {
                var _f2 = _u.size;
                if (0 === a) {
                  var _e29 = Tt(_s5, _f2);
                  var _r12 = _s5,
                    _a = 0;
                  for (; null !== _r12 && _a < _f2; ) {
                    var _t25 = zt.get(_r12);
                    if (void 0 === _t25) break;
                    var _e30 = Dt();
                    (ie(_r12, l),
                      Or(_t25) &&
                        null === Mt &&
                        ((Mt = _t25.getFormat()),
                        (At = _t25.getStyle()),
                        (wt = _t25.__key)),
                      It(_e30),
                      (_r12 = _t25.__next),
                      _a++);
                  }
                  var _d2 = "";
                  for (_r12 = _s5, _a = 0; null !== _r12 && _a < _f2; ) {
                    var _e31 = zt.get(_r12);
                    if (void 0 === _e31) break;
                    var _n24 = void 0;
                    if (Uo(_e31)) {
                      var _o0 = Ot._keyToDOMMap.get(_r12),
                        _i8 = _o0 && _o0.__lexicalTextContent;
                      ("string" != typeof _i8 && t(352, _e31.getType()),
                        (_n24 = _i8));
                    } else _n24 = _e31.getTextContent();
                    ((_d2 += _n24),
                      _a < _f2 - 1 &&
                        Uo(_e31) &&
                        !_e31.isInline() &&
                        (_d2 += N),
                      (_r12 = _e31.__next),
                      _a++);
                  }
                  var _h2 = _i7.slice(0, _i7.length - _e29) + _d2;
                  return (
                    (c.__lexicalTextContent = _h2),
                    (bt = o + _h2),
                    void oe(n, c, _u)
                  );
                }
                if (
                  (function (e, n, r, o, i, s, l, c) {
                    if (1 !== c && -1 !== c) return !1;
                    var a = 1 === c ? 2 : 1;
                    if (l !== a) return !1;
                    var u = l - c;
                    var f = e.__last;
                    for (var _t26 = 0; _t26 < u - 1; _t26++) {
                      if (null === f) return !1;
                      var _t27 = Kt.get(f);
                      if (void 0 === _t27) return !1;
                      f = _t27.__prev;
                    }
                    if (null === f) return !1;
                    var d = zt.get(s),
                      h = Kt.get(f);
                    if (void 0 === d || void 0 === h) return !1;
                    if (d.__prev !== h.__prev) return !1;
                    var g = [];
                    var _ = s;
                    for (var _t28 = 0; _t28 < l; _t28++) {
                      if (null === _) return !1;
                      g.push(_);
                      var _t29 = zt.get(_);
                      _ = _t29 ? _t29.__next : null;
                    }
                    var p = [];
                    _ = f;
                    for (var _t30 = 0; _t30 < u; _t30++) {
                      if (null === _) return !1;
                      p.push(_);
                      var _t31 = Kt.get(_);
                      _ = _t31 ? _t31.__next : null;
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
                    var T = Tt(f, u);
                    for (var _t32 of x) {
                      var _e32 = Dt();
                      if ("reconcile" === _t32.kind) ie(_t32.key, r.element);
                      else if ("destroy" === _t32.kind) Jt(_t32.key, r.element);
                      else {
                        var _e33 = null;
                        for (var _n25 = _t32.nextIndex + 1; _n25 < l; _n25++) {
                          var _t33 = Ot._keyToDOMMap.get(g[_n25]);
                          if (void 0 !== _t33) {
                            _e33 = _t33;
                            break;
                          }
                        }
                        te(
                          _t32.key,
                          r.withBefore(_e33 != null ? _e33 : r.before),
                        );
                      }
                      if ("destroy" !== _t32.kind) {
                        var _e34 = zt.get(_t32.key);
                        _e34 &&
                          Or(_e34) &&
                          null === Mt &&
                          ((Mt = _e34.getFormat()),
                          (At = _e34.getStyle()),
                          (wt = _e34.__key));
                      }
                      It(_e32);
                    }
                    var v = "";
                    for (var _e35 = 0; _e35 < l; _e35++) {
                      var _n26 = zt.get(g[_e35]);
                      if (void 0 === _n26) return !1;
                      var _r13 = void 0;
                      if (Uo(_n26)) {
                        var _o1 = Ot._keyToDOMMap.get(g[_e35]),
                          _i9 = _o1 && _o1.__lexicalTextContent;
                        ("string" != typeof _i9 && t(350, _n26.getType()),
                          (_r13 = _i9));
                      } else _r13 = _n26.getTextContent();
                      ((v += _r13),
                        _e35 < l - 1 &&
                          Uo(_n26) &&
                          !_n26.isInline() &&
                          (v += N));
                    }
                    var k = i.slice(0, i.length - T) + v;
                    return ((o.__lexicalTextContent = k), !0);
                  })(e, 0, r, c, _i7, _s5, _f2, a)
                ) {
                  var _e36 = c.__lexicalTextContent;
                  return (
                    "string" != typeof _e36 && t(353),
                    (bt = o + _e36),
                    void oe(n, c, _u)
                  );
                }
              }
            }
            if (0 === a) {
              var _n27 = e.__first,
                _r14 = 0;
              for (; null !== _n27; ) {
                var _e37 = zt.get(_n27);
                if (void 0 === _e37) break;
                var _o10 = jt || Lt.has(_n27) || Rt.has(_n27),
                  _i0 = Dt();
                if (_o10) ie(_n27, l);
                else {
                  var _r15 = void 0,
                    _o11 = void 0;
                  if (Uo(_e37)) {
                    _o11 = $t.get(_n27);
                    var _i1 = _o11 && _o11.__lexicalTextContent;
                    ("string" != typeof _i1 && t(354, _e37.getType()),
                      (_r15 = _i1));
                  } else _r15 = _e37.getTextContent();
                  ((bt += _r15), void 0 !== _o11 && Pt(_o11));
                }
                (Or(_e37)
                  ? null === Mt &&
                    ((Mt = _e37.getFormat()),
                    (At = _e37.getStyle()),
                    (wt = _e37.__key))
                  : Uo(_e37) && _r14 < s - 1 && !_e37.isInline() && (bt += N),
                  It(_i0),
                  (_n27 = _e37.__next),
                  _r14++);
              }
              return (
                (c.__lexicalTextContent = bt),
                (c.__lexicalFirstTextKey = wt),
                void (bt = o + bt)
              );
            }
          }
          if (1 === i && 1 === s) {
            var _t34 = e.__first,
              _o12 = n.__first;
            if (_t34 === _o12) ie(_t34, l);
            else {
              var _e38 = ue(_t34),
                _n28 = te(_o12, null);
              try {
                _e38.parentNode === l
                  ? l.replaceChild(_n28, _e38)
                  : r.insertChild(_n28);
              } catch (r) {
                if ("object" == typeof r && null != r) {
                  var _i10 =
                    r.toString() +
                    " Parent: " +
                    l.tagName +
                    ", new child: {tag: " +
                    _n28.tagName +
                    " key: " +
                    _o12 +
                    "}, old child: {tag: " +
                    _e38.tagName +
                    ", key: " +
                    _t34 +
                    "}.";
                  throw new Error(_i10);
                }
                throw r;
              }
              Jt(_t34, null);
            }
            var _i11 = zt.get(_o12);
            Or(_i11) &&
              null === Mt &&
              ((Mt = _i11.getFormat()),
              (At = _i11.getStyle()),
              (wt = _i11.__key));
          } else {
            var _o13 = ll(e, Kt),
              _c = ll(n, zt);
            if (
              (_o13.length !== i && t(227), _c.length !== s && t(228), 0 === i)
            )
              0 !== s && ee(_c, n, 0, s - 1, r);
            else if (0 === s) {
              if (0 !== i) {
                var _t35 =
                  null == r.after &&
                  null == r.before &&
                  null == r.element.__lexicalLineBreak;
                (Gt(_o13, 0, i - 1, _t35 ? null : l),
                  _t35 && (l.textContent = ""));
              }
            } else
              !(function (t, e, n, r, o, i) {
                var s = r - 1,
                  l = o - 1;
                var c,
                  a,
                  u = i.getFirstChild(),
                  f = 0,
                  d = 0;
                for (; f <= s && d <= l; ) {
                  var _t36 = e[f],
                    _r16 = n[d],
                    _o14 = Dt();
                  if (_t36 === _r16) ((u = le(ie(_r16, i.element))), f++, d++);
                  else {
                    if ((void 0 === a && (a = ce(n, d)), void 0 === c))
                      c = ce(e, f);
                    else if (!c.has(_t36)) {
                      (f++, It(_o14));
                      continue;
                    }
                    if (!a.has(_t36)) {
                      ((u = le(ue(_t36))),
                        Jt(_t36, i.element),
                        f++,
                        c["delete"](_t36),
                        It(_o14));
                      continue;
                    }
                    if (c.has(_r16)) {
                      var _t37 = ps(Ot, _r16);
                      (_t37 !== u &&
                        i
                          .withBefore(u != null ? u : i.before)
                          .insertChild(_t37),
                        (u = le(ie(_r16, i.element))),
                        f++,
                        d++);
                    } else
                      (te(_r16, i.withBefore(u != null ? u : i.before)), d++);
                  }
                  var _s6 = zt.get(_r16);
                  (null !== _s6 && Or(_s6)
                    ? null === Mt &&
                      ((Mt = _s6.getFormat()),
                      (At = _s6.getStyle()),
                      (wt = _s6.__key))
                    : Uo(_s6) && d <= l && !_s6.isInline() && (bt += N),
                    It(_o14));
                }
                var h = f > s,
                  g = d > l;
                if (h && !g) {
                  var _e39 = n[l + 1],
                    _r17 = void 0 === _e39 ? null : Ot.getElementByKey(_e39);
                  ee(n, t, d, l, i.withBefore(_r17 != null ? _r17 : i.before));
                } else g && !h && Gt(e, f, s, i.element);
              })(n, _o13, _c, i, s, r);
          }
          ((c.__lexicalTextContent = bt),
            (c.__lexicalFirstTextKey = wt),
            (bt = o + bt));
        })(e, n, js(n, r, Ot)),
        Os(n) ||
          ((o = n),
          null == Mt || Mt === o.__textFormat || Ht || o.setTextFormat(Mt),
          (function (t) {
            null == At || At === t.__textStyle || Ht || t.setTextStyle(At);
          })(n)));
    }
    function oe(t, e, n) {
      var r = e.__lexicalFirstTextKey;
      if (null != r) {
        var _e40 = t.__key;
        var _o15 = r;
        for (; null !== _o15; ) {
          var _t38 = zt.get(_o15);
          if (void 0 === _t38) {
            _o15 = null;
            break;
          }
          if (_t38.__parent === _e40) break;
          _o15 = _t38.__parent;
        }
        if (null !== _o15 && !n.has(_o15)) {
          var _t39 = zt.get(r);
          if (Or(_t39))
            return ((Mt = _t39.getFormat()), void (At = _t39.getStyle()));
        }
      }
      e.__lexicalFirstTextKey = wt;
    }
    function ie(e, n) {
      var r = Kt.get(e);
      var o = zt.get(e);
      (void 0 !== r && void 0 !== o) || t(61);
      var i = jt || Lt.has(e) || Rt.has(e),
        s = ps(Ot, e);
      if (r === o && !i) {
        var _e41;
        if (Uo(r)) {
          var _n29 = s.__lexicalTextContent;
          ("string" != typeof _n29 && t(355, r.getType()),
            (_e41 = _n29),
            Pt(s));
        } else _e41 = r.getTextContent();
        return ((bt += _e41), s);
      }
      if (
        (r !== o && i && fs(Ut, Et, Ft, o, "updated"),
        Yt.$updateDOM(o, r, s, Ot))
      ) {
        var _r18 = te(e, null);
        return (
          null === n && t(62),
          n.replaceChild(_r18, s),
          Jt(e, null),
          _r18
        );
      }
      if (Uo(r)) {
        Uo(o) || t(334, e);
        var _n30 = o.__indent;
        (jt || _n30 !== r.__indent) && Xt(s, _n30);
        var _l4 = o.__format;
        if (((jt || _l4 !== r.__format) && Qt(s, _l4), i))
          (re(r, o, s), Go(o) || o.isInline() || ne(0, o, s));
        else {
          var _e42 = s.__lexicalTextContent;
          ("string" != typeof _e42 && t(356, r.getType()), (bt += _e42), Pt(s));
        }
        if (
          (jt || o.__dir !== r.__dir || o.__parent !== r.__parent) &&
          (Zt(s, o), Go(o) && !jt)
        )
          for (var _t40 of o.getChildren())
            if (Uo(_t40)) {
              Zt(ps(Ot, _t40.getKey()), _t40);
            }
      } else {
        var _t41 = o.getTextContent();
        if (Ho(o)) {
          var _t42 = o.decorate(Ot, kt);
          null !== _t42 && se(e, _t42);
        }
        bt += _t41;
      }
      if (!Ht && Go(o)) {
        var _t43 = o.getLatest();
        if (_t43.__cachedText !== bt) {
          var _e43 = _t43.getWritable();
          ((_e43.__cachedText = bt), (o = _e43));
        }
      }
      return (Yt.$decorateDOM(o, r, s, Ot), Nt(o), s);
    }
    function se(t, e) {
      var n = Ot._pendingDecorators;
      var r = Ot._decorators;
      if (null === n) {
        if (r[t] === e) return;
        n = Hi(Ot);
      }
      n[t] = e;
    }
    function le(t) {
      var e = t.nextSibling;
      return (
        null !== e && e === Ot._blockCursorElement && (e = e.nextSibling),
        e
      );
    }
    function ce(t, e) {
      var n = new Set();
      for (var _r19 = e; _r19 < t.length; _r19++) n.add(t[_r19]);
      return n;
    }
    function ae(t, e, n, r, o, i) {
      ((bt = ""),
        (Mt = null),
        (At = null),
        (wt = null),
        (jt = 2 === r),
        (Ot = n),
        (kt = n._config),
        (Yt = n._config.dom || _i),
        (Et = n._nodes),
        (Ft = Ot._listeners.mutation),
        (Rt = o),
        (Lt = i),
        (Kt = t._nodeMap),
        (Bt = t),
        (zt = e._nodeMap),
        (Ht = e._readOnly),
        ($t = j(n._keyToDOMMap)),
        (Wt = (function () {
          var t = new Map(),
            e = function e(_e45) {
              for (var _n31 of _e45) {
                var _e44 = zt.get(_n31);
                if (void 0 === _e44) continue;
                var _r20 = _e44.__parent;
                if (null === _r20) continue;
                var _o16 = t.get(_r20);
                (void 0 === _o16 && ((_o16 = new Set()), t.set(_r20, _o16)),
                  _o16.add(_n31));
              }
            };
          return (e(Rt.keys()), e(Lt), t);
        })()));
      var s = new Map();
      return (
        (Ut = s),
        ie("root", null),
        (Ot = void 0),
        (Et = void 0),
        (Rt = void 0),
        (Lt = void 0),
        (Kt = void 0),
        (Bt = void 0),
        (zt = void 0),
        (kt = void 0),
        ($t = void 0),
        (Wt = void 0),
        (Ut = void 0),
        (Yt = _i),
        s
      );
    }
    function ue(e) {
      var n = $t.get(e);
      return (void 0 === n && t(75, e), n);
    }
    function fe(t) {
      return { type: t };
    }
    var de = fe("SELECTION_CHANGE_COMMAND"),
      he = fe("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"),
      ge = fe("CLICK_COMMAND"),
      _e = fe("BEFORE_INPUT_COMMAND"),
      pe = fe("INPUT_COMMAND"),
      ye = fe("COMPOSITION_START_COMMAND"),
      me = fe("COMPOSITION_END_COMMAND"),
      xe = fe("DELETE_CHARACTER_COMMAND"),
      Ce = fe("INSERT_LINE_BREAK_COMMAND"),
      Se = fe("INSERT_PARAGRAPH_COMMAND"),
      Te = fe("CONTROLLED_TEXT_INSERTION_COMMAND"),
      Ne = fe("PASTE_COMMAND"),
      ve = fe("REMOVE_TEXT_COMMAND"),
      ke = fe("DELETE_WORD_COMMAND"),
      Oe = fe("DELETE_LINE_COMMAND"),
      Ee = fe("FORMAT_TEXT_COMMAND"),
      be = fe("UNDO_COMMAND"),
      Me = fe("REDO_COMMAND"),
      Ae = fe("KEYDOWN_COMMAND"),
      we = fe("KEY_ARROW_RIGHT_COMMAND"),
      De = fe("MOVE_TO_END"),
      Ie = fe("KEY_ARROW_LEFT_COMMAND"),
      Pe = fe("MOVE_TO_START"),
      Fe = fe("KEY_ARROW_UP_COMMAND"),
      Re = fe("KEY_ARROW_DOWN_COMMAND"),
      Le = fe("KEY_ENTER_COMMAND"),
      Ke = fe("KEY_SPACE_COMMAND"),
      Be = fe("KEY_BACKSPACE_COMMAND"),
      ze = fe("KEY_ESCAPE_COMMAND"),
      $e = fe("KEY_DELETE_COMMAND"),
      We = fe("KEY_TAB_COMMAND"),
      Ue = fe("INSERT_TAB_COMMAND"),
      Ye = fe("INDENT_CONTENT_COMMAND"),
      je = fe("OUTDENT_CONTENT_COMMAND"),
      He = fe("DROP_COMMAND"),
      Je = fe("FORMAT_ELEMENT_COMMAND"),
      Ge = fe("DRAGSTART_COMMAND"),
      Ve = fe("DRAGOVER_COMMAND"),
      qe = fe("DRAGEND_COMMAND"),
      Xe = fe("COPY_COMMAND"),
      Qe = fe("CUT_COMMAND"),
      Ze = fe("SELECT_ALL_COMMAND"),
      tn = fe("CLEAR_EDITOR_COMMAND"),
      en = fe("CLEAR_HISTORY_COMMAND"),
      nn = fe("CAN_REDO_COMMAND"),
      rn = fe("CAN_UNDO_COMMAND"),
      on = fe("FOCUS_COMMAND"),
      sn = fe("BLUR_COMMAND"),
      ln = fe("KEY_MODIFIER_COMMAND"),
      cn = Object.freeze({}),
      an = [
        [
          "keydown",
          function (t, e) {
            ((un = t.timeStamp), (fn = t.key), "Backspace" !== t.key && In());
            if (e.isComposing()) return;
            _s(e, Ae, t);
          },
        ],
        [
          "pointerdown",
          function (t, e) {
            var n = t.target,
              r = t.pointerType;
            Rs(n) &&
              "touch" !== r &&
              "pen" !== r &&
              0 === t.button &&
              $o(e, function () {
                rl(n, e) || (xn = !0);
              });
          },
        ],
        [
          "compositionstart",
          function (t, e) {
            _s(e, ye, t);
          },
        ],
        [
          "compositionend",
          function (t, e) {
            o
              ? (Sn = !0)
              : s || (!c && !f)
                ? _s(e, me, t)
                : ((Tn = !0), (Nn = t.data));
          },
        ],
        [
          "input",
          function (t, e) {
            (t.stopPropagation(),
              In(),
              $o(
                e,
                function () {
                  e.dispatchCommand(pe, t);
                },
                { event: t },
              ),
              (hn = null));
          },
        ],
        [
          "click",
          function (t, e) {
            $o(e, function () {
              var n = Zr(),
                r = Is(Ns(e)),
                o = to();
              if (r)
                if (Rr(n)) {
                  var _t44 = n.anchor,
                    _e46 = _t44.getNode();
                  "element" === _t44.type &&
                    0 === _t44.offset &&
                    n.isCollapsed() &&
                    !Go(_e46) &&
                    1 === Gi().getChildrenSize() &&
                    _e46.getTopLevelElementOrThrow().isEmpty() &&
                    null !== o &&
                    n.is(o) &&
                    (r.removeAllRanges(), (n.dirty = !0));
                } else if (
                  "touch" === t.pointerType ||
                  "pen" === t.pointerType
                ) {
                  var _n32 = r.anchorNode;
                  if (Fs(_n32) || Di(_n32)) {
                    Vi(Qr(o, r, e, t));
                  }
                }
              _s(e, ge, t);
            });
          },
        ],
        ["cut", cn],
        ["copy", cn],
        ["dragstart", cn],
        ["dragover", cn],
        ["dragend", cn],
        ["paste", cn],
        ["focus", cn],
        ["blur", cn],
        ["drop", cn],
      ];
    i &&
      an.push([
        "beforeinput",
        function (t, e) {
          return (function (t, e) {
            var n = t.inputType;
            if ("deleteCompositionText" === n || (o && gs(e))) return;
            if ("insertCompositionText" === n) return;
            _s(e, _e, t);
          })(t, e);
        },
      ]);
    var un = 0,
      fn = null,
      dn = 0,
      hn = null,
      gn = !1,
      _n = null;
    var pn = new WeakMap(),
      yn = new WeakMap();
    var mn = !1,
      xn = !1,
      Cn = !1,
      Sn = !1,
      Tn = !1,
      Nn = "",
      vn = null,
      kn = [0, "", 0, "root", 0];
    function On(t, e, n, r, o) {
      var s = t.anchor,
        l = t.focus,
        c = s.getNode(),
        a = Eo(),
        u = Is(Ns(a)),
        f = null !== u ? u.anchorNode : null,
        d = s.key,
        h = a.getElementByKey(d),
        g = n.length;
      return (
        d !== l.key ||
        !Or(c) ||
        (((!o && (!i || dn < r + 50)) || (c.isDirty() && g < 2) || Xi(n)) &&
          s.offset !== l.offset &&
          !c.isComposing()) ||
        wi(c) ||
        (c.isDirty() && g > 1) ||
        ((o || !i) && null !== h && !c.isComposing() && f !== Js(c, h, a)) ||
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
            r = e.getParentOrThrow(),
            o = Ai(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!r.canInsertTextBefore() && !e.isComposing()) ||
                o ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (Or(e) || (Uo(e) && e.isInline())) &&
                    !e.canInsertTextAfter()
                  );
                })(e)
            : n === e.getTextContentSize() &&
                (!e.canInsertTextAfter() ||
                  (!r.canInsertTextAfter() && !e.isComposing()) ||
                  o);
        })(t, c)
      );
    }
    function En(t, e) {
      return (
        Di(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function bn(e, n, r) {
      var o = e.anchorNode,
        i = e.anchorOffset,
        s = e.focusNode,
        l = e.focusOffset;
      (mn && ((mn = !1), En(o, i) && En(s, l) && !vn)) ||
        $o(n, function () {
          if (!r) return void Vi(null);
          if (!Oi(n, o, s)) return;
          var c = Zr();
          if (vn && Rr(c) && c.isCollapsed()) {
            var _t45 = c.anchor,
              _e47 = vn.anchor;
            ((_t45.key === _e47.key && _t45.offset === _e47.offset + 1) ||
              (1 === _t45.offset &&
                _e47.getNode().is(_t45.getNode().getPreviousSibling()))) &&
              ((c = vn.clone()), Vi(c));
          }
          if (((vn = null), Rr(c))) {
            var _r21 = c.anchor,
              _o17 = _r21.getNode();
            if (c.isCollapsed()) {
              "Range" === e.type &&
                e.anchorNode === e.focusNode &&
                (c.dirty = !0);
              var _i12 = Ns(n).event,
                _s7 = _i12 ? _i12.timeStamp : performance.now(),
                _kn = kn,
                _l5 = _kn[0],
                _a2 = _kn[1],
                _u2 = _kn[2],
                _f3 = _kn[3],
                _d3 = _kn[4],
                _h3 = Gi(),
                _g2 = !1 === n.isComposing() && "" === _h3.getTextContent();
              if (_s7 < _d3 + 200 && _r21.offset === _u2 && _r21.key === _f3)
                Mn(c, _l5, _a2);
              else if ("text" === _r21.type) (Or(_o17) || t(141), An(c, _o17));
              else if ("element" === _r21.type && !_g2) {
                Uo(_o17) || t(259);
                var _e48 = _r21.getNode();
                _e48.isEmpty()
                  ? (function (t, e) {
                      var n = e.getTextFormat(),
                        r = e.getTextStyle();
                      Mn(t, n, r);
                    })(c, _e48)
                  : Mn(c, c.format, "");
              }
            } else {
              var _t46 = _r21.key,
                _e49 = c.focus.key,
                _n33 = c.getNodes(),
                _o18 = _n33.length,
                _s8 = c.isBackward(),
                _a3 = _s8 ? l : i,
                _u3 = _s8 ? i : l,
                _f4 = _s8 ? _e49 : _t46,
                _d4 = _s8 ? _t46 : _e49;
              var _h4 = 2047,
                _g3 = !1;
              for (var _t47 = 0; _t47 < _o18; _t47++) {
                var _e50 = _n33[_t47],
                  _r22 = _e50.getTextContentSize();
                if (
                  Or(_e50) &&
                  0 !== _r22 &&
                  !(
                    (0 === _t47 && _e50.__key === _f4 && _a3 === _r22) ||
                    (_t47 === _o18 - 1 && _e50.__key === _d4 && 0 === _u3)
                  ) &&
                  ((_g3 = !0), (_h4 &= _e50.getFormat()), 0 === _h4)
                )
                  break;
              }
              c.format = _g3 ? _h4 : 0;
            }
          }
          _s(n, de, void 0);
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
      if (null == t || t.length <= 1 || null == fn) return;
      var e =
        1 === fn.length
          ? fn
          : "Enter" === fn
            ? "\n"
            : "Tab" === fn
              ? "\t"
              : null;
      if (!e) return;
      var n = Zr();
      if (!Rr(n) || !n.isCollapsed()) return;
      var r = n.anchor.getNode();
      if (!Or(r)) return;
      var o = n.anchor.offset;
      if (r.getTextContentSize() === o) {
        var _t48 = r.getNextSibling();
        if ("\n" === e) {
          if (ri(_t48)) _t48.selectEnd();
          else if (!_t48) {
            var _t49 = sl(r, Gr),
              _e51 = _t49 && _t49.getNextSibling();
            Uo(_e51) && _e51.selectStart();
          }
        } else
          "\t" === e
            ? Ar(_t48) && _t48.selectEnd()
            : Or(_t48) && _t48.getTextContent()[0] === e && _t48.select(1, 1);
      } else r.getTextContent()[o] === e && r.select(o + 1, o + 1);
    }
    function In() {
      ((gn = !1), null !== _n && (clearTimeout(_n), (_n = null)));
    }
    function Pn() {
      (In(), (gn = !0), (_n = setTimeout(In, 0)));
    }
    function Fn(e) {
      var _ref15;
      var n = e.inputType,
        r = wn(e),
        o = Eo(),
        i = Zr();
      if ("insertText" === n && e.data && gn) {
        if ((In(), e.preventDefault(), Rr(i) && !i.isCollapsed())) {
          var _t50 = i.isBackward() ? i.anchor : i.focus;
          (i.anchor.set(_t50.key, _t50.offset, _t50.type),
            i.focus.set(_t50.key, _t50.offset, _t50.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === i) {
          var _t51 = to();
          if (!Rr(_t51)) return !0;
          Vi(_t51.clone());
        }
        if (Rr(i)) {
          var _n34 = i.anchor.key === i.focus.key;
          if (
            ((l = e.timeStamp),
            "MediaLast" === fn && l < un + 30 && o.isComposing() && _n34)
          ) {
            if (
              (Bi(null),
              (un = 0),
              setTimeout(function () {
                $o(o, function () {
                  Bi(null);
                });
              }, 30),
              Rr(i))
            ) {
              var _e52 = i.anchor.getNode();
              (_e52.markDirty(), Or(_e52) || t(142), An(i, _e52));
            }
          } else {
            if (
              (Bi(null),
              s &&
                null !== r &&
                !r.collapsed &&
                (i.applyDOMRange(r), !i.isCollapsed()))
            )
              return (e.preventDefault(), i.removeText(), !0);
            e.preventDefault();
            var _t52 = i.anchor.getNode(),
              _l6 = _t52.getTextContent(),
              _c2 = _t52.canInsertTextAfter(),
              _a4 = 0 === i.anchor.offset && i.focus.offset === _l6.length;
            var _f5 = u && _n34 && !_a4 && _c2;
            if (
              (_f5 && i.isCollapsed() && (_f5 = !Ho(hs(i.anchor, !0))), !_f5)
            ) {
              _s(o, xe, !0);
              var _t53 = Zr();
              u &&
                Rr(_t53) &&
                _t53.isCollapsed() &&
                ((vn = _t53),
                setTimeout(function () {
                  return (vn = null);
                }));
            }
          }
          return !0;
        }
      }
      var l;
      if (!Rr(i)) return !0;
      var c = e.data;
      (null !== hn && es(!1, o, hn),
        (i.dirty && null === hn) ||
          !i.isCollapsed() ||
          Go(i.anchor.getNode()) ||
          null === r ||
          i.applyDOMRange(r),
        (hn = null));
      var a = i.anchor,
        f = i.focus,
        d = a.getNode(),
        h = f.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === c) (e.preventDefault(), _s(o, Ce, !1));
        else if (c === N) (e.preventDefault(), _s(o, Se, void 0));
        else if (null == c && e.dataTransfer) {
          var _t54 = e.dataTransfer.getData("text/plain");
          (e.preventDefault(), i.insertRawText(_t54));
        } else
          null != c && On(i, r, c, e.timeStamp, !0)
            ? (e.preventDefault(), _s(o, Te, c), Dn(c))
            : (hn = c);
        return ((dn = e.timeStamp), !0);
      }
      switch ((e.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          _s(o, Te, e);
          Dn(
            (_ref15 = e.dataTransfer
              ? e.dataTransfer.getData("text/plain")
              : null) != null
              ? _ref15
              : e.data,
          );
          break;
        case "insertFromComposition":
          (Bi(null), _s(o, Te, e));
          break;
        case "insertLineBreak":
          (Bi(null), _s(o, Ce, !1));
          break;
        case "insertParagraph":
          (Bi(null), Cn && !s ? ((Cn = !1), _s(o, Ce, !1)) : _s(o, Se, void 0));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          _s(o, Ne, e);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || Uo(t) || Uo(e) || !Ai(t) || !Ai(e);
          })(d, h) && _s(o, ve, e);
          break;
        case "deleteByDrag":
          (xs(rr), _s(o, ve, e));
          break;
        case "deleteByCut":
          _s(o, ve, e);
          break;
        case "deleteContent":
          _s(o, xe, !1);
          break;
        case "deleteWordBackward":
          _s(o, ke, !0);
          break;
        case "deleteWordForward":
          _s(o, ke, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          _s(o, Oe, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          _s(o, Oe, !1);
          break;
        case "formatStrikeThrough":
          _s(o, Ee, "strikethrough");
          break;
        case "formatBold":
          _s(o, Ee, "bold");
          break;
        case "formatItalic":
          _s(o, Ee, "italic");
          break;
        case "formatUnderline":
          _s(o, Ee, "underline");
          break;
        case "historyUndo":
          _s(o, be, void 0);
          break;
        case "historyRedo":
          _s(o, Me, void 0);
      }
      return !0;
    }
    function Rn(t) {
      var e = Eo();
      if (Fs(t.target) && rl(t.target, e)) return !0;
      var n = Zr(),
        r = t.data,
        s = wn(t);
      if (null != r && Rr(n) && On(n, s, r, t.timeStamp, !1)) {
        Sn && (Bn(e, r), (Sn = !1));
        var _s9 = n.anchor.getNode(),
          _l7 = Is(Ns(e));
        if (null === _l7) return !0;
        var _c3 = n.isBackward(),
          _a5 = _c3 ? n.anchor.offset : n.focus.offset,
          _f6 = _c3 ? n.focus.offset : n.anchor.offset;
        (i &&
          !n.isCollapsed() &&
          Or(_s9) &&
          null !== _l7.anchorNode &&
          _s9.getTextContent().slice(0, _a5) +
            r +
            _s9.getTextContent().slice(_a5 + _f6) ===
            ts(_l7.anchorNode)) ||
          _s(e, Te, r);
        var _d5 = r.length;
        (o &&
          _d5 > 1 &&
          "insertCompositionText" === t.inputType &&
          !e.isComposing() &&
          ((n.anchor.offset -= _d5),
          (n._cachedNodes = null),
          (n._cachedIsBackward = null)),
          u && e.isComposing() && ((un = 0), Bi(null)));
      } else {
        (es(!1, e, null !== r ? r : void 0),
          Sn && (Bn(e, r || void 0), xs(ir), (Sn = !1)));
      }
      return (
        (function () {
          vo();
          var t = Eo();
          nt(t);
        })(),
        !0
      );
    }
    function Ln(t) {
      var e = Eo(),
        n = Zr();
      if (Rr(n) && !e.isComposing()) {
        var _r23 = n.anchor,
          _o19 = n.anchor.getNode();
        (Bi(_r23.key),
          xs(or),
          (t.timeStamp < un + 30 ||
            "element" === _r23.type ||
            !n.isCollapsed() ||
            _o19.getFormat() !== n.format ||
            (Or(_o19) && _o19.getStyle() !== n.style)) &&
            _s(e, Te, v));
      }
      return !0;
    }
    function Kn(t) {
      return (Bn(Eo(), t.data), xs(ir), !0);
    }
    function Bn(t, e) {
      var n = t._compositionKey;
      if ((Bi(null), null !== n && null != e)) {
        if ("" === e) {
          var _e53 = $i(n),
            _r24 = t.getElementByKey(n),
            _o20 = null !== _r24 && Or(_e53) ? Js(_e53, _r24, t) : null;
          if (null !== _o20 && null !== _o20.nodeValue && Or(_e53)) {
            var _n35 = Is(Ns(t));
            var _r25 = null,
              _i13 = null;
            (null !== _n35 &&
              _n35.anchorNode === _o20 &&
              ((_r25 = _n35.anchorOffset), (_i13 = _n35.focusOffset)),
              ns(_e53, _o20.nodeValue, _r25, _i13, !0));
          }
          return;
        }
        if ("\n" === e[e.length - 1]) {
          var _e54 = Zr();
          if (Rr(_e54) || Kr(_e54)) {
            if (Rr(_e54)) {
              var _t55 = _e54.focus;
              _e54.anchor.set(_t55.key, _t55.offset, _t55.type);
            }
            return void _s(t, Le, null);
          }
        }
      }
      es(!0, t, e);
    }
    function zn(t) {
      var e = Eo();
      if (null == t.key) return !0;
      if (Tn) {
        if (as(t))
          return (
            $o(e, function () {
              Bn(e, Nn);
            }),
            (Tn = !1),
            (Nn = ""),
            !0
          );
        ((Tn = !1), (Nn = ""));
      }
      if (
        (function (t) {
          return ss(t, "ArrowRight", { shiftKey: "any" });
        })(t)
      )
        _s(e, we, t);
      else if (
        (function (t) {
          return ss(
            t,
            "ArrowRight",
            babelHelpers["extends"]({}, ls, { shiftKey: "any" }),
          );
        })(t)
      )
        _s(e, De, t);
      else if (
        (function (t) {
          return ss(t, "ArrowLeft", { shiftKey: "any" });
        })(t)
      )
        _s(e, Ie, t);
      else if (
        (function (t) {
          return ss(
            t,
            "ArrowLeft",
            babelHelpers["extends"]({}, ls, { shiftKey: "any" }),
          );
        })(t)
      )
        _s(e, Pe, t);
      else if (
        (function (t) {
          return ss(t, "ArrowUp", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        _s(e, Fe, t);
      else if (
        (function (t) {
          return ss(t, "ArrowDown", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        _s(e, Re, t);
      else if (
        (function (t) {
          return ss(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
            shiftKey: !0,
          });
        })(t)
      )
        ((Cn = !0), _s(e, Le, t));
      else if (
        (function (t) {
          return " " === t.key;
        })(t)
      )
        _s(e, Ke, t);
      else if (
        (function (t) {
          return r && ss(t, "o", { ctrlKey: !0 });
        })(t)
      )
        (t.preventDefault(), (Cn = !0), _s(e, Ce, !0));
      else if (
        (function (t) {
          return ss(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
          });
        })(t)
      )
        ((Cn = !1), _s(e, Le, t));
      else if (
        (function (t) {
          return (
            ss(t, "Backspace", { shiftKey: "any" }) ||
            (r && ss(t, "h", { ctrlKey: !0 }))
          );
        })(t)
      )
        as(t) ? _s(e, Be, t) && Pn() : (t.preventDefault(), _s(e, xe, !0));
      else if (
        (function (t) {
          return "Escape" === t.key;
        })(t)
      )
        _s(e, ze, t);
      else if (
        (function (t) {
          return ss(t, "Delete", {}) || (r && ss(t, "d", { ctrlKey: !0 }));
        })(t)
      )
        !(function (t) {
          return "Delete" === t.key;
        })(t)
          ? (t.preventDefault(), _s(e, xe, !1))
          : _s(e, $e, t);
      else if (
        (function (t) {
          return ss(t, "Backspace", cs);
        })(t)
      )
        (t.preventDefault(), _s(e, ke, !0));
      else if (
        (function (t) {
          return ss(t, "Delete", cs);
        })(t)
      )
        (t.preventDefault(), _s(e, ke, !1));
      else if (
        (function (t) {
          return r && ss(t, "Backspace", { metaKey: !0 });
        })(t)
      )
        (t.preventDefault(), _s(e, Oe, !0));
      else if (
        (function (t) {
          return (
            r &&
            (ss(t, "Delete", { metaKey: !0 }) || ss(t, "k", { ctrlKey: !0 }))
          );
        })(t)
      )
        (t.preventDefault(), _s(e, Oe, !1));
      else if (
        (function (t) {
          return ss(t, "b", ls);
        })(t)
      )
        (t.preventDefault(), _s(e, Ee, "bold"));
      else if (
        (function (t) {
          return ss(t, "u", ls);
        })(t)
      )
        (t.preventDefault(), _s(e, Ee, "underline"));
      else if (
        (function (t) {
          return ss(t, "i", ls);
        })(t)
      )
        (t.preventDefault(), _s(e, Ee, "italic"));
      else if (
        (function (t) {
          return ss(t, "Tab", { shiftKey: "any" });
        })(t)
      )
        _s(e, We, t);
      else if (
        (function (t) {
          return ss(t, "z", ls);
        })(t)
      )
        (t.preventDefault(), _s(e, be, void 0));
      else if (
        (function (t) {
          if (r) return ss(t, "z", { metaKey: !0, shiftKey: !0 });
          return (
            ss(t, "y", { ctrlKey: !0 }) ||
            ss(t, "z", { ctrlKey: !0, shiftKey: !0 })
          );
        })(t)
      )
        (t.preventDefault(), _s(e, Me, void 0));
      else {
        var _n36 = e._editorState._selection;
        !(function (t) {
          return ss(t, "a", ls);
        })(t)
          ? null === _n36 ||
            Rr(_n36) ||
            (!(function (t) {
              return ss(t, "c", ls);
            })(t)
              ? (function (t) {
                  return ss(t, "x", ls);
                })(t) && (t.preventDefault(), _s(e, Qe, t))
              : (t.preventDefault(), _s(e, Xe, t)))
          : (t.preventDefault(), _s(e, Ze, t) && Pn());
      }
      return (
        (function (t) {
          return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey;
        })(t) && e.dispatchCommand(ln, t),
        !0
      );
    }
    function $n(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    var Wn = new Map();
    function Un(t) {
      var e = Ps(t.target);
      if (null === e) return;
      var n = bi(e.anchorNode);
      if (null === n) return;
      xn &&
        ((xn = !1),
        $o(n, function () {
          var r = to(),
            o = e.anchorNode;
          if (Fs(o) || Di(o)) {
            Vi(Qr(r, e, n, t));
          }
        }));
      var r = Qi(n),
        o = r[r.length - 1],
        i = o._key,
        s = Wn.get(i),
        l = s || o;
      (l !== n && bn(e, l, !1),
        bn(e, n, !0),
        n !== o ? Wn.set(i, n) : s && Wn["delete"](i));
    }
    function Yn(t) {
      t._lexicalHandled = !0;
    }
    function jn(t) {
      return !0 === t._lexicalHandled;
    }
    var Hn = function Hn() {};
    function Jn(e) {
      var n = pn.get(e);
      if (void 0 === n) return void Hn();
      var r = yn.get(n);
      if (void 0 === r) return void Hn();
      var o = r - 1;
      (o >= 0 || t(164),
        pn["delete"](e),
        yn.set(n, o),
        0 === o && n.removeEventListener("selectionchange", Un));
      var i = Mi(e);
      Ei(i)
        ? (!(function (t) {
            if (null !== t._parentEditor) {
              var _e55 = Qi(t),
                _n37 = _e55[_e55.length - 1]._key;
              Wn.get(_n37) === t && Wn["delete"](_n37);
            } else Wn["delete"](t._key);
          })(i),
          (e.__lexicalEditor = null))
        : i && t(198);
      var s = $n(e);
      for (var _t56 = 0; _t56 < s.length; _t56++) s[_t56]();
      e.__lexicalEventHandles = [];
    }
    function Gn(t, e, n) {
      vo();
      var r = t.__key,
        o = t.getParent();
      if (null === o) return;
      var i = (function (t) {
        var e = Zr();
        if (!Rr(e) || !Uo(t)) return e;
        var n = e.anchor,
          r = e.focus,
          o = n.getNode(),
          i = r.getNode();
        Ss(o, t) && n.set(t.__key, 0, "element");
        Ss(i, t) && r.set(t.__key, 0, "element");
        return e;
      })(t);
      var s = !1;
      if (Rr(i) && e) {
        var _e56 = i.anchor,
          _n38 = i.focus;
        (_e56.key === r &&
          (ro(_e56, t, o, t.getPreviousSibling(), t.getNextSibling()),
          (s = !0)),
          _n38.key === r &&
            (ro(_n38, t, o, t.getPreviousSibling(), t.getNextSibling()),
            (s = !0)));
      } else Kr(i) && e && t.isSelected() && t.selectPrevious();
      if (Rr(i) && e && !s) {
        var _e57 = t.getIndexWithinParent();
        (Li(t), eo(i, o, _e57, -1));
      } else Li(t);
      (n || Os(o) || o.canBeEmpty() || !o.isEmpty() || Gn(o, e),
        e && i && Go(o) && o.isEmpty() && o.selectEnd());
    }
    var Vn = Symbol["for"]("ephemeral");
    function qn(t) {
      return t[Vn] || !1;
    }
    var Xn = { configurable: !0, enumerable: !1, value: void 0, writable: !0 };
    var _Qn5 = (function () {
      function Qn(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", Xn),
          Object.defineProperty(this, St, Xn),
          Ri(this, t));
      }
      Qn.getType = function getType() {
        var _il2 = il(this),
          e = _il2.ownNodeType;
        return (void 0 === e && t(64, this.name), e);
      };
      Qn.clone = function clone(e) {
        t(65, this.name);
      };
      var _proto6 = Qn.prototype;
      _proto6.$config = function $config() {
        return {};
      };
      _proto6.config = function config(t, e) {
        var _ref16;
        var n = e["extends"] || Object.getPrototypeOf(this.constructor);
        return (
          Object.assign(e, { extends: n }),
          "string" == typeof t && Object.assign(e, { type: t }),
          (_ref16 = {}),
          (_ref16[t] = e),
          _ref16
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
          var _e58 = $i(t);
          if (null === _e58) break;
          t = _e58.__parent;
        }
        return !1;
      };
      _proto6.isSelected = function isSelected(t) {
        var _this12 = this;
        var e = t || Zr();
        if (null == e) return !1;
        var n = e.getNodes().some(function (t) {
          return t.__key === _this12.__key;
        });
        if (Or(this)) return n;
        if (
          Rr(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t57 = this.getParent();
          if (Ho(this) && this.isInline() && _t57) {
            var _n39 = e.isBackward() ? e.focus : e.anchor;
            if (
              _t57.is(_n39.getNode()) &&
              _n39.offset === _t57.getChildrenSize() &&
              this.is(_t57.getLastChild())
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
        return null === t ? null : $i(t);
      };
      _proto6.getParentOrThrow = function getParentOrThrow() {
        var e = this.getParent();
        return (null === e && t(66, this.__key), e);
      };
      _proto6.getTopLevelElement = function getTopLevelElement() {
        var e = this;
        for (; null !== e; ) {
          var _n40 = e.getParent();
          if (Os(_n40)) return (Uo(e) || (e === this && Ho(e)) || t(194), e);
          e = _n40;
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
        return null === t ? null : $i(t);
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
        return null === t ? null : $i(t);
      };
      _proto6.getNextSiblings = function getNextSiblings() {
        var t = [];
        var e = this.getNextSibling();
        for (; null !== e; ) (t.push(e), (e = e.getNextSibling()));
        return t;
      };
      _proto6.getCommonAncestor = function getCommonAncestor(t) {
        var e = Uo(this) ? this : this.getParent(),
          n = Uo(t) ? t : t.getParent(),
          r = e && n ? Bl(e, n) : null;
        return r ? r.commonAncestor : null;
      };
      _proto6.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto6.isBefore = function isBefore(e) {
        var n = Bl(this, e);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === Rl(n)
              : ("same" !== n.type && "ancestor" !== n.type && t(279), !1)))
        );
      };
      _proto6.isParentOf = function isParentOf(t) {
        var e = Bl(this, t);
        return null !== e && "ancestor" === e.type;
      };
      _proto6.getNodesBetween = function getNodesBetween(e) {
        var n = this.isBefore(e),
          r = [],
          o = new Set();
        var i = this;
        for (; null !== i; ) {
          var _s0 = i.__key;
          if ((o.has(_s0) || (o.add(_s0), r.push(i)), i === e)) break;
          var _l8 = Uo(i) ? (n ? i.getFirstChild() : i.getLastChild()) : null;
          if (null !== _l8) {
            i = _l8;
            continue;
          }
          var _c4 = n ? i.getNextSibling() : i.getPreviousSibling();
          if (null !== _c4) {
            i = _c4;
            continue;
          }
          var _a6 = i.getParentOrThrow();
          if ((o.has(_a6.__key) || r.push(_a6), _a6 === e)) break;
          var _u4 = null,
            _f7 = _a6;
          do {
            if (
              (null === _f7 && t(68),
              (_u4 = n ? _f7.getNextSibling() : _f7.getPreviousSibling()),
              (_f7 = _f7.getParent()),
              null === _f7)
            )
              break;
            null !== _u4 || o.has(_f7.__key) || r.push(_f7);
          } while (null === _u4);
          i = _u4;
        }
        return (n || r.reverse(), r);
      };
      _proto6.isDirty = function isDirty() {
        var t = Eo()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto6.getLatest = function getLatest() {
        if (qn(this)) return this;
        var e = $i(this.__key);
        return (null === e && t(113), e);
      };
      _proto6.getWritable = function getWritable() {
        if (qn(this)) return this;
        vo();
        var t = Oo(),
          e = Eo(),
          n = t._nodeMap,
          r = this.__key,
          o = this.getLatest(),
          i = e._cloneNotNeeded,
          s = Zr();
        if ((null !== s && s.setCachedNodes(null), i.has(r))) return (Ki(o), o);
        var l = Xs(o);
        return (i.add(r), Ki(l), n.set(r, l), l);
      };
      _proto6.getTextContent = function getTextContent() {
        return "";
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
        return new _L2(t);
      };
      _proto6.exportDOM = function exportDOM(t) {
        return { element: this.createDOM(t._config, t) };
      };
      _proto6.exportJSON = function exportJSON() {
        var t = this.__state ? this.__state.toJSON() : void 0;
        return babelHelpers["extends"]({ type: this.__type, version: 1 }, t);
      };
      Qn.importJSON = function importJSON(e) {
        t(18, this.name);
      };
      _proto6.updateFromJSON = function updateFromJSON(t) {
        return (function (t, e) {
          var n = t.getWritable(),
            r = e.$;
          var o = r;
          for (var _t58 of ut(n).flatKeys)
            _t58 in e &&
              ((void 0 !== o && o !== r) ||
                (o = babelHelpers["extends"]({}, r)),
              (o[_t58] = e[_t58]));
          return ((n.__state || o) && at(t).updateFromJSON(o), n);
        })(this, t);
      };
      Qn.transform = function transform() {
        return null;
      };
      _proto6.remove = function remove(t) {
        Gn(this, !0, t);
      };
      _proto6.replace = function replace(e, n) {
        vo();
        var r = Zr();
        (null !== r && (r = r.clone()), Ms(this, e));
        var o = this.getLatest(),
          i = this.__key,
          s = e.__key,
          l = e.getWritable(),
          c = this.getParentOrThrow().getWritable(),
          a = c.__size,
          u = l.getParent(),
          f = null !== u ? l.getIndexWithinParent() : -1;
        (Li(l), null !== u && Rr(r) && eo(r, u, f, -1));
        var d = o.getPreviousSibling(),
          h = o.getNextSibling(),
          g = o.__prev,
          _ = o.__next,
          p = o.__parent;
        if ((Gn(o, !1, !0), null === d)) c.__first = s;
        else {
          d.getWritable().__next = s;
        }
        if (((l.__prev = g), null === h)) c.__last = s;
        else {
          h.getWritable().__prev = s;
        }
        ((l.__next = _), (l.__parent = p), (c.__size = a));
        var y = 0;
        if (
          (n &&
            ((Uo(this) && Uo(l)) || t(139),
            (y = l.getChildrenSize()),
            l.splice(y, 0, this.getChildren())),
          Rr(r))
        ) {
          Vi(r);
          var _t59 = r.anchor,
            _e59 = r.focus;
          (_t59.key === i &&
            (n && "element" === _t59.type
              ? _t59.set(l.__key, y + _t59.offset, "element")
              : Pr(_t59, l)),
            _e59.key === i &&
              (n && "element" === _e59.type
                ? _e59.set(l.__key, y + _e59.offset, "element")
                : Pr(_e59, l)));
        }
        return (zi() === i && Bi(s), l);
      };
      _proto6.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (vo(), Ms(this, t));
        var n = this.getWritable(),
          r = t.getWritable(),
          o = r.getParent(),
          i = Zr();
        var s = !1,
          l = !1;
        if (null !== o) {
          var _n41 = t.getIndexWithinParent();
          if (Rr(i)) {
            var _t60 = o.__key,
              _e60 = i.anchor,
              _r26 = i.focus;
            ((s =
              "element" === _e60.type &&
              _e60.key === _t60 &&
              _e60.offset === _n41 + 1),
              (l =
                "element" === _r26.type &&
                _r26.key === _t60 &&
                _r26.offset === _n41 + 1));
          }
          (Li(r), e && Rr(i) && eo(i, o, _n41, -1));
        }
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
          e && Rr(i))
        ) {
          var _t61 = this.getIndexWithinParent();
          eo(i, a, _t61 + 1);
          var _e61 = a.__key;
          (s && i.anchor.set(_e61, _t61 + 2, "element"),
            l && i.focus.set(_e61, _t61 + 2, "element"));
        }
        return t;
      };
      _proto6.insertBefore = function insertBefore(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (vo(), Ms(this, t));
        var n = this.getWritable(),
          r = t.getWritable(),
          o = r.__key,
          i = Zr(),
          s = r.getParent(),
          l = null !== s ? r.getIndexWithinParent() : -1;
        (Li(r), null !== s && e && Rr(i) && eo(i, s, l, -1));
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
          e && Rr(i))
        ) {
          eo(i, this.getParentOrThrow(), f);
        }
        return t;
      };
      _proto6.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto6.createParentElementNode = function createParentElementNode() {
        return ai();
      };
      _proto6.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto6.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto6.selectPrevious = function selectPrevious(t, e) {
        vo();
        var n = this.getPreviousSibling(),
          r = this.getParentOrThrow();
        if (null === n) return r.select(0, 0);
        if (Uo(n)) return n.select();
        if (!Or(n)) {
          var _t62 = n.getIndexWithinParent() + 1;
          return r.select(_t62, _t62);
        }
        return n.select(t, e);
      };
      _proto6.selectNext = function selectNext(t, e) {
        vo();
        var n = this.getNextSibling(),
          r = this.getParentOrThrow();
        if (null === n) return r.select();
        if (Uo(n)) return n.select(0, 0);
        if (!Or(n)) {
          var _t63 = n.getIndexWithinParent();
          return r.select(_t63, _t63);
        }
        return n.select(t, e);
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
      return Qn;
    })();
    var Zn = "history-merge",
      tr = "collaboration",
      er = "skip-scroll-into-view",
      nr = "skip-dom-selection",
      rr = "skip-selection-focus",
      or = "composition-start",
      ir = "composition-end",
      sr = "!important";
    function lr(t) {
      var e = {};
      if (!t) return e;
      var n = "",
        r = "",
        o = null,
        i = !1,
        s = !1,
        l = !1,
        c = 0;
      var a = t.length;
      var u = -1;
      for (var _f8 = 0; _f8 < a; _f8++) {
        var _a7 = t[_f8];
        if (i) "*" === _a7 && "/" === t[_f8 + 1] && ((i = !1), _f8++);
        else if (s) (-1 === u && (u = _f8), (s = !1));
        else if (null === o) {
          if ("/" !== _a7 || "*" !== t[_f8 + 1]) {
            if ('"' !== _a7 && "'" !== _a7) {
              if ("(" !== _a7) {
                if (")" !== _a7) {
                  if (l || ":" !== _a7 || 0 !== c) {
                    if (";" === _a7 && 0 === c) {
                      -1 !== u &&
                        (l ? (r += t.slice(u, _f8)) : (n += t.slice(u, _f8)),
                        (u = -1));
                      var _o21 = n.trim(),
                        _i14 = r.trim();
                      ("" !== _o21 && "" !== _i14 && (e[_o21] = _i14),
                        (n = ""),
                        (r = ""),
                        (l = !1));
                      continue;
                    }
                    -1 === u && (u = _f8);
                  } else
                    (-1 !== u && ((n += t.slice(u, _f8)), (u = -1)), (l = !0));
                } else (-1 === u && (u = _f8), (c = Math.max(0, c - 1)));
              } else (-1 === u && (u = _f8), c++);
            } else (-1 === u && (u = _f8), (o = _a7));
          } else
            (-1 !== u &&
              (l ? (r += t.slice(u, _f8)) : (n += t.slice(u, _f8)), (u = -1)),
              (i = !0),
              _f8++);
        } else
          (-1 === u && (u = _f8),
            "\\" === _a7 ? (s = !0) : _a7 === o && (o = null));
      }
      -1 !== u && (l ? (r += t.slice(u, a)) : (n += t.slice(u, a)));
      var f = n.trim(),
        d = r.trim();
      return ("" !== f && "" !== d && (e[f] = d), e);
    }
    function cr(t, e, n) {
      var r = n.trimEnd(),
        o = r.length - 10;
      o >= 0 && r.slice(o).toLowerCase() === sr
        ? t.setProperty(e, r.slice(0, o).trim(), "important")
        : t.setProperty(e, n, "");
    }
    function ar(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var r = lr(n),
        o = lr(e);
      for (var _e62 in o) (delete r[_e62], cr(t, _e62, o[_e62]));
      for (var _e63 in r) t.removeProperty(_e63);
    }
    function ur(t, e) {
      return 16 & e
        ? "code"
        : e & _
          ? "mark"
          : 32 & e
            ? "sub"
            : 64 & e
              ? "sup"
              : null;
    }
    function fr(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function dr(t, e, n, r, o) {
      var i = r.classList;
      var s = us(o, "base");
      (void 0 !== s && i.add.apply(i, s),
        (s = us(o, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== s &&
        (8 & n && 4 & n
          ? ((l = !0), c || i.add.apply(i, s))
          : c && i.remove.apply(i, s));
      for (var _t64 in M) {
        var _r27 = M[_t64];
        if (((s = us(o, _t64)), void 0 !== s))
          if (n & _r27) {
            if (l && ("underline" === _t64 || "strikethrough" === _t64)) {
              e & _r27 && i.remove.apply(i, s);
              continue;
            }
            (0 === (e & _r27) ||
              (c && "underline" === _t64) ||
              "strikethrough" === _t64) &&
              i.add.apply(i, s);
          } else e & _r27 && i.remove.apply(i, s);
      }
    }
    function hr(t, e, n) {
      var r = n.isComposing(),
        i = t + (r ? T : ""),
        s = Us(),
        l = Ys(s).$getDOMSlot(n, e, s),
        c = l.getFirstChild();
      if (null === c || c.nodeType !== Node.TEXT_NODE)
        return void l.insertChild(document.createTextNode(i));
      var a = c,
        u = a.nodeValue;
      if (u !== i)
        if (r || o) {
          var _ref17 = (function (t, e) {
              var n = t.length,
                r = e.length;
              var o = 0,
                i = 0;
              for (; o < n && o < r && t[o] === e[o]; ) o++;
              for (; i + o < n && i + o < r && t[n - i - 1] === e[r - i - 1]; )
                i++;
              return [o, n - o - i, e.slice(o, r - i)];
            })(u, i),
            _t65 = _ref17[0],
            _e64 = _ref17[1],
            _n42 = _ref17[2];
          (0 !== _e64 && a.deleteData(_t65, _e64), a.insertData(_t65, _n42));
        } else a.nodeValue = i;
    }
    function gr(t, e, n, r, o, i) {
      hr(o, t, e);
      var s = i.theme.text;
      void 0 !== s && dr(0, 0, r, t, s);
    }
    function _r(t, e) {
      var n = document.createElement(e);
      return (n.appendChild(t), n);
    }
    var _pr2 = (function (_Qn) {
      function pr(t, e) {
        var _this;
        if (t === void 0) {
          t = "";
        }
        ((_this = _Qn.call(this, e) || this),
          (_this.__text = t),
          (_this.__format = 0),
          (_this.__style = ""),
          (_this.__mode = 0),
          (_this.__detail = 0));
        return _this;
      }
      babelHelpers.inheritsLoose(pr, _Qn);
      pr.getType = function getType() {
        return "text";
      };
      pr.clone = function clone(t) {
        return new pr(t.__text, t.__key);
      };
      var _proto7 = pr.prototype;
      _proto7.afterCloneFrom = function afterCloneFrom(t) {
        (_Qn.prototype.afterCloneFrom.call(this, t),
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
        return P[t.__mode];
      };
      _proto7.getStyle = function getStyle() {
        return this.getLatest().__style;
      };
      _proto7.isToken = function isToken() {
        return 1 === this.getLatest().__mode;
      };
      _proto7.isComposing = function isComposing() {
        return this.__key === zi();
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
        var e = M[t];
        return 0 !== (this.getFormat() & e);
      };
      _proto7.isSimpleText = function isSimpleText() {
        return "text" === this.__type && 0 === this.__mode;
      };
      _proto7.getTextContent = function getTextContent() {
        return this.getLatest().__text;
      };
      _proto7.getFormatFlags = function getFormatFlags(t, e) {
        return Fi(this.getLatest().__format, t, e);
      };
      _proto7.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto7.isInline = function isInline() {
        return !0;
      };
      _proto7.createDOM = function createDOM(t, e) {
        var n = this.__format,
          r = ur(0, n),
          o = fr(0, n),
          i = null === r ? o : r,
          s = document.createElement(i);
        var l = s;
        (this.hasFormat("code") && s.setAttribute("spellcheck", "false"),
          null !== r && ((l = document.createElement(o)), s.appendChild(l)));
        gr(l, this, 0, n, this.__text, t);
        var c = this.__style;
        return ("" !== c && ar(s.style, c), s);
      };
      _proto7.updateDOM = function updateDOM(e, n, r) {
        var o = this.__text,
          i = e.__format,
          s = this.__format,
          l = ur(0, i),
          c = ur(0, s),
          a = fr(0, i),
          u = fr(0, s);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _e65 = n.firstChild;
          null == _e65 && t(48);
          var _i15 = document.createElement(u);
          return (gr(_i15, this, 0, s, o, r), n.replaceChild(_i15, _e65), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && t(49)),
          hr(o, f, this));
        var d = r.theme.text;
        void 0 !== d && i !== s && dr(0, i, s, f, d);
        var h = e.__style,
          g = this.__style;
        return (h !== g && ar(n.style, g, h), !1);
      };
      pr.importDOM = function importDOM() {
        return {
          "#text": function text() {
            return { conversion: Sr, priority: 0 };
          },
          b: function b() {
            return { conversion: mr, priority: 0 };
          },
          code: function code() {
            return { conversion: vr, priority: 0 };
          },
          em: function em() {
            return { conversion: vr, priority: 0 };
          },
          i: function i() {
            return { conversion: vr, priority: 0 };
          },
          mark: function mark() {
            return { conversion: vr, priority: 0 };
          },
          s: function s() {
            return { conversion: vr, priority: 0 };
          },
          span: function span() {
            return { conversion: yr, priority: 0 };
          },
          strong: function strong() {
            return { conversion: vr, priority: 0 };
          },
          sub: function sub() {
            return { conversion: vr, priority: 0 };
          },
          sup: function sup() {
            return { conversion: vr, priority: 0 };
          },
          u: function u() {
            return { conversion: vr, priority: 0 };
          },
        };
      };
      pr.importJSON = function importJSON(t) {
        return kr().updateFromJSON(t);
      };
      _proto7.updateFromJSON = function updateFromJSON(t) {
        return _Qn.prototype.updateFromJSON
          .call(this, t)
          .setTextContent(t.text)
          .setFormat(t.format)
          .setDetail(t.detail)
          .setMode(t.mode)
          .setStyle(t.style);
      };
      _proto7.exportDOM = function exportDOM(e) {
        var _Qn$prototype$exportD = _Qn.prototype.exportDOM.call(this, e),
          n = _Qn$prototype$exportD.element;
        return (
          Fs(n) || t(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = _r(n, "b")),
          this.hasFormat("italic") && (n = _r(n, "i")),
          this.hasFormat("strikethrough") && (n = _r(n, "s")),
          this.hasFormat("underline") && (n = _r(n, "u")),
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
          _Qn.prototype.exportJSON.call(this),
        );
      };
      _proto7.selectionTransform = function selectionTransform(t, e) {};
      _proto7.setFormat = function setFormat(t) {
        var e = this.getWritable();
        return ((e.__format = "string" == typeof t ? M[t] : t), e);
      };
      _proto7.setDetail = function setDetail(t) {
        var e = this.getWritable();
        return ((e.__detail = "string" == typeof t ? A[t] : t), e);
      };
      _proto7.setStyle = function setStyle(t) {
        var e = this.getWritable();
        return ((e.__style = t), e);
      };
      _proto7.toggleFormat = function toggleFormat(t) {
        var e = Fi(this.getFormat(), t, null);
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
        var e = I[t];
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
        vo();
        var n = t,
          r = e;
        var o = Zr(),
          i = this.getTextContent(),
          s = this.__key;
        if ("string" == typeof i) {
          var _t66 = i.length;
          (void 0 === n && (n = _t66), void 0 === r && (r = _t66));
        } else ((n = 0), (r = 0));
        if (!Rr(o)) return Vr(s, n, s, r, "text", "text");
        {
          var _t67 = zi();
          ((_t67 !== o.anchor.key && _t67 !== o.focus.key) || Bi(s),
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
          i = o.__text,
          s = n.length;
        var l = t;
        l < 0 && ((l = s + l), l < 0 && (l = 0));
        var c = Zr();
        if (r && Rr(c)) {
          var _e66 = t + s;
          c.setTextNodeRange(o, _e66, o, _e66);
        }
        var a = i.slice(0, l) + n + i.slice(l + e);
        return ((o.__text = a), o);
      };
      _proto7.canInsertTextBefore = function canInsertTextBefore() {
        return !0;
      };
      _proto7.canInsertTextAfter = function canInsertTextAfter() {
        return !0;
      };
      _proto7.splitText = function splitText() {
        vo();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var r = e.__key,
          o = zi(),
          i = n.length;
        for (
          var _len2 = arguments.length, t = new Array(_len2), _key2 = 0;
          _key2 < _len2;
          _key2++
        ) {
          t[_key2] = arguments[_key2];
        }
        (t.sort(function (t, e) {
          return t - e;
        }),
          t.push(i));
        var s = [],
          l = t.length;
        for (var _e67 = 0, _r28 = 0; _e67 < i && _r28 <= l; _r28++) {
          var _o22 = t[_r28];
          _o22 > _e67 && (s.push(n.slice(_e67, _o22)), (_e67 = _o22));
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
          y = null;
        var m = Zr();
        if (Rr(m)) {
          var _ref18 = m.isBackward()
              ? [m.focus, m.anchor]
              : [m.anchor, m.focus],
            _t68 = _ref18[0],
            _e68 = _ref18[1];
          ("text" === _t68.type && _t68.key === r && (p = _t68),
            "text" === _e68.type && _e68.key === r && (y = _e68));
        }
        e.isSegmented()
          ? ((f = kr(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = _t(e, f)),
            (_ = !0))
          : (f = e.setTextContent(a));
        var x = [f];
        for (var _t69 = 1; _t69 < c; _t69++) {
          var _n43 = kr(s[_t69]);
          ((_n43.__format = d),
            (_n43.__style = h),
            (_n43.__detail = g),
            (_n43.__state = _t(e, _n43)));
          var _i16 = _n43.__key;
          (o === r && Bi(_i16), x.push(_n43));
        }
        var C = p ? p.offset : null,
          S = y ? y.offset : null;
        var T = 0;
        for (var _t70 of x) {
          if (!p && !y) break;
          var _e69 = T + _t70.getTextContentSize();
          if (
            (null !== p &&
              null !== C &&
              C <= _e69 &&
              C >= T &&
              (p.set(_t70.getKey(), C - T, "text"), C < _e69 && (p = null)),
            null !== y && null !== S && S <= _e69 && S >= T)
          ) {
            y.set(_t70.getKey(), S - T, "text");
            break;
          }
          T = _e69;
        }
        if (null !== u) {
          !(function (t) {
            var e = t.getPreviousSibling(),
              n = t.getNextSibling();
            null !== e && Ki(e);
            null !== n && Ki(n);
          })(this);
          var _t71 = u.getWritable(),
            _e70 = this.getIndexWithinParent();
          (_
            ? (_t71.splice(_e70, 0, x), this.remove())
            : _t71.splice(_e70, 1, x),
            Rr(m) && eo(m, u, _e70, c - 1));
        }
        return x;
      };
      _proto7.mergeWithSibling = function mergeWithSibling(e) {
        var n = e === this.getPreviousSibling();
        n || e === this.getNextSibling() || t(50);
        var r = this.__key,
          o = e.__key,
          i = this.__text,
          s = i.length;
        zi() === o && Bi(r);
        var l = Zr();
        if (Rr(l)) {
          var _t72 = l.anchor,
            _i17 = l.focus;
          (null !== _t72 && _t72.key === o && oo(_t72, n, r, e, s),
            null !== _i17 && _i17.key === o && oo(_i17, n, r, e, s));
        }
        var c = e.__text,
          a = n ? c + i : i + c;
        this.setTextContent(a);
        var u = this.getWritable();
        return (e.remove(), u);
      };
      _proto7.isTextEntity = function isTextEntity() {
        return !1;
      };
      return pr;
    })(_Qn5);
    function yr(t) {
      return { forChild: Er(t.style), node: null };
    }
    function mr(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: Er(e.style, n ? void 0 : "bold"), node: null };
    }
    var xr = new WeakMap();
    function Cr(t) {
      if (!Fs(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function Sr(e) {
      var n = e;
      null === e.parentElement && t(129);
      var r = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var r = [t];
          for (; null !== n && void 0 === (e = xr.get(n)) && !Cr(n); )
            (r.push(n), (n = n.parentNode));
          var o = void 0 === e ? n : e;
          for (var _t73 = 0; _t73 < r.length; _t73++) xr.set(r[_t73], o);
          return o;
        })(n)
      )
        return { node: ao(r) };
      if (((r = r.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === r))
        return { node: null };
      if (" " === r[0]) {
        var _t74 = n,
          _e71 = !0;
        for (; null !== _t74 && null !== (_t74 = Tr(_t74, !1)); ) {
          var _n44 = _t74.textContent || "";
          if (_n44.length > 0) {
            (/[ \t\n]$/.test(_n44) && (r = r.slice(1)), (_e71 = !1));
            break;
          }
        }
        _e71 && (r = r.slice(1));
      }
      if (" " === r[r.length - 1]) {
        var _t75 = n,
          _e72 = !0;
        for (; null !== _t75 && null !== (_t75 = Tr(_t75, !0)); ) {
          if (
            (_t75.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e72 = !1;
            break;
          }
        }
        _e72 && (r = r.slice(0, r.length - 1));
      }
      return "" === r ? { node: null } : { node: kr(r) };
    }
    function Tr(t, e) {
      var n = t;
      for (;;) {
        var _t76 = void 0;
        for (; null === (_t76 = e ? n.nextSibling : n.previousSibling); ) {
          var _t77 = n.parentElement;
          if (null === _t77) return null;
          n = _t77;
        }
        if (((n = _t76), Fs(n))) {
          var _t78 = n.style.display;
          if (
            ("" === _t78 && !Bs(n)) ||
            ("" !== _t78 && !_t78.startsWith("inline"))
          )
            return null;
        }
        var _r29 = n;
        for (; null !== (_r29 = e ? n.firstChild : n.lastChild); ) n = _r29;
        if (Di(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var Nr = {
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
    function vr(t) {
      var e = Nr[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: Er(t.style, e), node: null };
    }
    function kr(t) {
      if (t === void 0) {
        t = "";
      }
      return bs(new _pr2(t));
    }
    function Or(t) {
      return t instanceof _pr2;
    }
    function Er(t, e) {
      var n = t.fontWeight,
        r = t.textDecoration.split(" "),
        o = "700" === n || "bold" === n,
        i = r.includes("line-through"),
        s = "italic" === t.fontStyle,
        l = r.includes("underline"),
        c = t.verticalAlign;
      return function (t) {
        return Or(t)
          ? (o && !t.hasFormat("bold") && t.toggleFormat("bold"),
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
            e && !t.hasFormat(e) && t.toggleFormat(e),
            t)
          : t;
      };
    }
    var _br = (function (_pr) {
      function br(t) {
        var _this2;
        ((_this2 = _pr.call(this, "\t", t) || this), (_this2.__detail = 2));
        return _this2;
      }
      babelHelpers.inheritsLoose(br, _pr);
      br.getType = function getType() {
        return "tab";
      };
      br.clone = function clone(t) {
        return new br(t.__key);
      };
      br.importDOM = function importDOM() {
        return null;
      };
      var _proto8 = br.prototype;
      _proto8.createDOM = function createDOM(t) {
        var e = _pr.prototype.createDOM.call(this, t),
          n = us(t.theme, "tab");
        if (void 0 !== n) {
          var _e$classList;
          (_e$classList = e.classList).add.apply(_e$classList, n);
        }
        return e;
      };
      br.importJSON = function importJSON(t) {
        return Mr().updateFromJSON(t);
      };
      _proto8.setTextContent = function setTextContent(t) {
        return _pr.prototype.setTextContent.call(this, "\t");
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
      return br;
    })(_pr2);
    function Mr() {
      return bs(new _br());
    }
    function Ar(t) {
      return t instanceof _br;
    }
    var _wr = (function () {
      function wr(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto9 = wr.prototype;
      _proto9.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto9.isBefore = function isBefore(t) {
        if (this.key === t.key) return this.offset < t.offset;
        return Fl(Vl(zl(this, "next")), Vl(zl(t, "next"))) < 0;
      };
      _proto9.getNode = function getNode() {
        var e = $i(this.key);
        return (null === e && t(20), e);
      };
      _proto9.set = function set(t, e, n, r) {
        var o = this._selection,
          i = this.key;
        (r && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          No() ||
            (zi() === i && Bi(t),
            null !== o &&
              (o.setCachedNodes(null),
              Rr(o) && (o._cachedIsBackward = null),
              (o.dirty = !0))));
      };
      return wr;
    })();
    function Dr(t, e, n) {
      return new _wr(t, e, n);
    }
    function Ir(t, e) {
      var n = e.__key,
        r = t.offset,
        o = "element";
      if (Or(e)) {
        o = "text";
        var _t79 = e.getTextContentSize();
        r > _t79 && (r = _t79);
      } else if (!Uo(e)) {
        var _t80 = e.getNextSibling();
        if (Or(_t80)) ((n = _t80.__key), (r = 0), (o = "text"));
        else {
          var _t81 = e.getParent();
          _t81 && ((n = _t81.__key), (r = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, r, o);
    }
    function Pr(t, e) {
      if (Uo(e)) {
        var _n45 = e.getLastDescendant();
        Uo(_n45) || Or(_n45) ? Ir(t, _n45) : Ir(t, e);
      } else Ir(t, e);
    }
    var _Fr = (function () {
      function Fr(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto0 = Fr.prototype;
      _proto0.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto0.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto0.is = function is(t) {
        if (!Kr(t)) return !1;
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
        return new Fr(new Set(this._nodes));
      };
      _proto0.extract = function extract() {
        return this.getNodes();
      };
      _proto0.insertRawText = function insertRawText(t) {};
      _proto0.insertText = function insertText() {};
      _proto0.insertNodes = function insertNodes(t) {
        var e = this.getNodes(),
          n = e.length,
          r = e[n - 1];
        var o;
        if (Or(r)) o = r.select();
        else {
          var _t82 = r.getIndexWithinParent() + 1;
          o = r.getParentOrThrow().select(_t82, _t82);
        }
        o.insertNodes(t);
        for (var _t83 = 0; _t83 < n; _t83++) e[_t83].remove();
      };
      _proto0.getNodes = function getNodes() {
        var t = this._cachedNodes;
        if (null !== t) return t;
        var e = this._nodes,
          n = [];
        for (var _t84 of e) {
          var _e73 = $i(_t84);
          null !== _e73 && n.push(_e73);
        }
        return (No() || (this._cachedNodes = n), n);
      };
      _proto0.getTextContent = function getTextContent() {
        var t = this.getNodes();
        var e = "";
        for (var _n46 = 0; _n46 < t.length; _n46++)
          e += t[_n46].getTextContent();
        return e;
      };
      _proto0.deleteNodes = function deleteNodes() {
        var t = this.getNodes();
        if ((Zr() || to()) === this && t[0]) {
          var _e74 = Tl(t[0], "next");
          Wl(Il(_e74, _e74));
        }
        for (var _e75 of t) _e75.remove();
      };
      return Fr;
    })();
    function Rr(t) {
      return t instanceof _Lr;
    }
    var _Lr = (function () {
      function Lr(t, e, n, r) {
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
      var _proto1 = Lr.prototype;
      _proto1.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto1.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto1.is = function is(t) {
        return (
          !!Rr(t) &&
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
            i = new Set();
          for (var _n47 of t)
            if (ml(_n47)) {
              var _t85 = _n47.origin;
              0 === e.length ? o.add(_t85) : (i.add(_t85), e.push(_t85));
            } else {
              var _t86 = _n47.origin;
              (Uo(_t86) && i.has(_t86)) || e.push(_t86);
            }
          r && e.push(r.caret.origin);
          if (
            yl(t.focus) &&
            Uo(t.focus.origin) &&
            null === t.focus.getNodeAtCaret()
          )
            for (
              var _n48 = Ol(t.focus.origin, "previous");
              ml(_n48) &&
              o.has(_n48.origin) &&
              !_n48.origin.isEmpty() &&
              _n48.origin.is(e[e.length - 1]);
              _n48 = bl(_n48)
            )
              (o["delete"](_n48.origin), e.pop());
          for (; e.length > 1; ) {
            var _t87 = e[e.length - 1];
            if (!Uo(_t87) || i.has(_t87) || _t87.isEmpty() || o.has(_t87))
              break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n49 = Vl(t.anchor),
              _r30 = Vl(t.anchor.getFlipped()),
              _o23 = function _o23(t) {
                return pl(t) ? t.origin : t.getNodeAtCaret();
              },
              _i18 =
                _o23(_n49) ||
                _o23(_r30) ||
                (t.anchor.getNodeAtCaret() ? _n49.origin : _r30.origin);
            e.push(_i18);
          }
          return e;
        })(Ql(Yl(this), "next"));
        return (No() || (this._cachedNodes = e), e);
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
          i = r.isBefore(o),
          _zr = zr(this),
          s = _zr[0],
          l = _zr[1];
        var c = "",
          a = !0;
        for (var _u5 = 0; _u5 < t.length; _u5++) {
          var _f9 = t[_u5];
          if (Uo(_f9) && !_f9.isInline())
            (a || (c += "\n"), (a = !_f9.isEmpty()));
          else if (((a = !1), Or(_f9))) {
            var _t88 = _f9.getTextContent();
            (_f9 === e
              ? _f9 === n
                ? ("element" === r.type &&
                    "element" === o.type &&
                    o.offset !== r.offset) ||
                  (_t88 = s < l ? _t88.slice(s, l) : _t88.slice(l, s))
                : (_t88 = i ? _t88.slice(s) : _t88.slice(l))
              : _f9 === n && (_t88 = i ? _t88.slice(0, l) : _t88.slice(0, s)),
              (c += _t88));
          } else
            (!Ho(_f9) && !ri(_f9)) ||
              (_f9 === n && this.isCollapsed()) ||
              (c += _f9.getTextContent());
        }
        return c;
      };
      _proto1.applyDOMRange = function applyDOMRange(t) {
        var e = Eo(),
          n = e.getEditorState()._selection,
          r = Jr(
            t.startContainer,
            t.startOffset,
            t.endContainer,
            t.endOffset,
            e,
            n,
          );
        if (null === r) return;
        var o = r[0],
          i = r[1],
          s = r[2];
        (this.anchor.set(o.key, o.offset, o.type, !0),
          this.focus.set(i.key, i.offset, i.type, !0),
          s && (this.dirty = !0),
          xt(this));
      };
      _proto1.clone = function clone() {
        var t = this.anchor,
          e = this.focus;
        return new Lr(
          Dr(t.key, t.offset, t.type),
          Dr(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto1.toggleFormat = function toggleFormat(t) {
        ((this.format = Fi(this.format, t, null)), (this.dirty = !0));
      };
      _proto1.setFormat = function setFormat(t) {
        ((this.format = t), (this.dirty = !0));
      };
      _proto1.setStyle = function setStyle(t) {
        ((this.style = t), (this.dirty = !0));
      };
      _proto1.hasFormat = function hasFormat(t) {
        var e = M[t];
        return 0 !== (this.format & e);
      };
      _proto1.insertRawText = function insertRawText(t) {
        this.insertNodes(ao(t));
      };
      _proto1.insertText = function insertText(e) {
        var n = this.anchor,
          r = this.focus,
          o = this.format,
          i = this.style;
        var s = n,
          l = r;
        (!this.isCollapsed() && r.isBefore(n) && ((s = r), (l = n)),
          "element" === s.type &&
            (function (t, e, n, r) {
              var o = t.getNode(),
                i = o.getChildAtIndex(t.offset),
                s = kr();
              if ((s.setFormat(n), s.setStyle(r), ui(i))) i.splice(0, 0, [s]);
              else if (null !== i) {
                var _t89 = Go(o) ? ai().append(s) : s;
                i.insertBefore(_t89);
              } else if (Os(o)) {
                var _t90 = o.getLastChild();
                Uo(_t90) && !_t90.isInline() && _t90.isEmpty()
                  ? _t90.append(s)
                  : o.append(ai().append(s));
              } else o.append(s);
              (t.is(e) && e.set(s.__key, 0, "text"), t.set(s.__key, 0, "text"));
            })(s, l, o, i),
          "element" === l.type && $l(l, Vl(zl(l, "next"))));
        var c = s.offset;
        var a = l.offset;
        var u = this.getNodes(),
          f = u.length;
        var d = u[0];
        Or(d) || t(26);
        var h = d.getTextContent().length,
          g = d.getParentOrThrow();
        var _ = u[f - 1];
        if (
          (1 === f &&
            "element" === l.type &&
            ((a = h), l.set(s.key, a, "text")),
          this.isCollapsed() &&
            c === h &&
            (wi(d) ||
              !d.canInsertTextAfter() ||
              (!g.canInsertTextAfter() && null === d.getNextSibling())))
        ) {
          var _t91 = d.getNextSibling();
          var _n50;
          if (
            (Or(_t91) && _t91.canInsertTextBefore() && !wi(_t91)
              ? (_n50 = _t91)
              : ((_n50 = kr()),
                _n50.setFormat(o),
                _n50.setStyle(i),
                g.canInsertTextAfter()
                  ? d.insertAfter(_n50)
                  : g.insertAfter(_n50)),
            _n50.select(0, 0),
            (d = _n50),
            "" !== e)
          )
            return void this.insertText(e);
        } else if (
          this.isCollapsed() &&
          0 === c &&
          (wi(d) ||
            !d.canInsertTextBefore() ||
            (!g.canInsertTextBefore() && null === d.getPreviousSibling()))
        ) {
          var _t92 = d.getPreviousSibling();
          var _n51;
          if (
            (!Or(_t92) || wi(_t92)
              ? ((_n51 = kr()),
                _n51.setFormat(o),
                g.canInsertTextBefore()
                  ? d.insertBefore(_n51)
                  : g.insertBefore(_n51))
              : (_n51 = _t92),
            _n51.select(),
            (d = _n51),
            "" !== e)
          )
            return void this.insertText(e);
        } else if (d.isSegmented() && c !== h) {
          var _t93 = kr(d.getTextContent());
          (_t93.setFormat(o), d.replace(_t93), (d = _t93));
        } else if (!this.isCollapsed() && "" !== e) {
          var _t94 = _.getParent();
          if (
            !g.canInsertTextBefore() ||
            !g.canInsertTextAfter() ||
            (Uo(_t94) &&
              (!_t94.canInsertTextBefore() || !_t94.canInsertTextAfter()))
          )
            return (
              this.insertText(""),
              Hr(this.anchor, this.focus),
              void this.insertText(e)
            );
        }
        if (1 === f) {
          if (Ai(d)) {
            var _t95 = kr(e);
            return (_t95.select(), void d.replace(_t95));
          }
          var _t96 = d.getFormat(),
            _n52 = d.getStyle();
          if (c !== a || (_t96 === o && _n52 === i)) {
            if (Ar(d)) {
              var _t97 = kr(e);
              return (
                _t97.setFormat(o),
                _t97.setStyle(i),
                _t97.select(),
                void d.replace(_t97)
              );
            }
          } else {
            if ("" !== d.getTextContent()) {
              var _t98 = kr(e);
              if ((_t98.setFormat(o), _t98.setStyle(i), _t98.select(), 0 === c))
                d.insertBefore(_t98, !1);
              else {
                var _d$splitText = d.splitText(c),
                  _e76 = _d$splitText[0];
                _e76.insertAfter(_t98, !1);
              }
              return void (
                _t98.isComposing() &&
                "text" === this.anchor.type &&
                ((this.anchor.offset -= e.length),
                (this._cachedNodes = null),
                (this._cachedIsBackward = null))
              );
            }
            (d.setFormat(o), d.setStyle(i));
          }
          var _r31 = a - c;
          ((d = d.spliceText(c, _r31, e, !0)),
            "" === d.getTextContent()
              ? d.remove()
              : "text" === this.anchor.type &&
                ((this.format = _t96),
                (this.style = _n52),
                d.isComposing() &&
                  ((this.anchor.offset -= e.length),
                  (this._cachedNodes = null),
                  (this._cachedIsBackward = null))));
        } else {
          var _t99 = new Set([].concat(d.getParentKeys(), _.getParentKeys())),
            _n53 = Uo(d) ? d : d.getParentOrThrow();
          var _r32 = Uo(_) ? _ : _.getParentOrThrow(),
            _o24 = _;
          if (!_n53.is(_r32) && _r32.isInline())
            do {
              ((_o24 = _r32), (_r32 = _r32.getParentOrThrow()));
            } while (_r32.isInline());
          if (
            ("text" === l.type && (0 !== a || "" === _.getTextContent())) ||
            ("element" === l.type && _.getIndexWithinParent() < a)
          ) {
            if (Or(_) && !Ai(_) && a !== _.getTextContentSize()) {
              if (_.isSegmented()) {
                var _t100 = kr(_.getTextContent());
                (_.replace(_t100), (_ = _t100));
              }
              (Go(l.getNode()) ||
                "text" !== l.type ||
                (_ = _.spliceText(0, a, "")),
                _t99.add(_.__key));
            } else {
              var _t101 = _.getParentOrThrow();
              _t101.canBeEmpty() || 1 !== _t101.getChildrenSize()
                ? _.remove()
                : _t101.remove();
            }
          } else _t99.add(_.__key);
          var _i19 = _r32.getChildren(),
            _s1 = new Set(u),
            _g4 = _n53.is(_r32),
            _p2 = _n53.isInline() && null === d.getNextSibling() ? _n53 : d;
          for (var _t102 = _i19.length - 1; _t102 >= 0; _t102--) {
            var _e77 = _i19[_t102];
            if (_e77.is(d) || (Uo(_e77) && _e77.isParentOf(d))) break;
            _e77.isAttached() &&
              (!_s1.has(_e77) || _e77.is(_o24)
                ? _g4 || _p2.insertAfter(_e77, !1)
                : _e77.remove());
          }
          if (!_g4) {
            var _e78 = _r32,
              _n54 = null;
            for (; null !== _e78; ) {
              var _r33 = _e78.getChildren(),
                _o25 = _r33.length;
              ((0 === _o25 || _r33[_o25 - 1].is(_n54)) &&
                (_t99["delete"](_e78.__key), (_n54 = _e78)),
                (_e78 = _e78.getParent()));
            }
          }
          if (Ai(d)) {
            if (c === h) d.select();
            else {
              var _t103 = kr(e);
              (_t103.select(), d.replace(_t103));
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
          for (var _e79 = 1; _e79 < f; _e79++) {
            var _n55 = u[_e79],
              _r34 = _n55.__key;
            _t99.has(_r34) || _n55.remove();
          }
        }
      };
      _proto1.removeText = function removeText() {
        var t = Zr() === this;
        (Ul(this, Gl(Yl(this))), t && Zr() !== this && Vi(this));
      };
      _proto1.formatText = function formatText(t, e) {
        var _d$splitText2, _p$splitText;
        if (e === void 0) {
          e = null;
        }
        if (this.isCollapsed()) return (this.toggleFormat(t), void Bi(null));
        var n = this.getNodes(),
          r = [];
        for (var _t104 of n) Or(_t104) && r.push(_t104);
        var o = function o(e) {
            n.forEach(function (n) {
              if (Uo(n)) {
                var _r35 = n.getFormatFlags(t, e);
                n.setTextFormat(_r35);
              }
            });
          },
          i = r.length;
        if (0 === i) return (this.toggleFormat(t), Bi(null), void o(e));
        var s = this.anchor,
          l = this.focus,
          c = this.isBackward(),
          a = c ? l : s,
          u = c ? s : l;
        var f = 0,
          d = r[0],
          h = "element" === a.type ? 0 : a.offset;
        if (
          ("text" === a.type &&
            h === d.getTextContentSize() &&
            ((f = 1), (d = r[1]), (h = 0)),
          null == d)
        )
          return;
        var g = d.getFormatFlags(t, e);
        o(g);
        var _ = i - 1;
        var p = r[_];
        var y = "text" === u.type ? u.offset : p.getTextContentSize();
        if (d.is(p)) {
          if (h === y) return;
          if (wi(d) || (0 === h && y === d.getTextContentSize()))
            d.setFormat(g);
          else {
            var _t105 = d.splitText(h, y),
              _e80 = 0 === h ? _t105[0] : _t105[1];
            (_e80.setFormat(g),
              "text" === a.type && a.set(_e80.__key, 0, "text"),
              "text" === u.type && u.set(_e80.__key, y - h, "text"));
          }
          return void (this.format = g);
        }
        (0 === h ||
          wi(d) ||
          ((_d$splitText2 = d.splitText(h)), (d = _d$splitText2[1]), (h = 0)),
          d.setFormat(g));
        var m = p.getFormatFlags(t, g);
        y > 0 &&
          (y === p.getTextContentSize() ||
            wi(p) ||
            ((_p$splitText = p.splitText(y)),
            (p = _p$splitText[0]),
            _p$splitText),
          p.setFormat(m));
        for (var _e81 = f + 1; _e81 < _; _e81++) {
          var _n56 = r[_e81],
            _o26 = _n56.getFormatFlags(t, m);
          _n56.setFormat(_o26);
        }
        ("text" === a.type && a.set(d.__key, h, "text"),
          "text" === u.type && u.set(p.__key, y, "text"),
          (this.format = g | m));
      };
      _proto1.insertNodes = function insertNodes(e) {
        if (0 === e.length) return;
        if (
          (this.isCollapsed() || this.removeText(), "root" === this.anchor.key)
        ) {
          this.insertParagraph();
          var _n57 = Zr();
          return (Rr(_n57) || t(134), _n57.insertNodes(e));
        }
        var n = (this.isBackward() ? this.focus : this.anchor).getNode(),
          r = sl(n, Ws),
          o = e[e.length - 1];
        if (Uo(r) && "__language" in r) {
          if ("__language" in e[0]) this.insertText(e[0].getTextContent());
          else {
            var _t106 = uo(this);
            (r.splice(_t106, 0, e), o.selectEnd());
          }
          return;
        }
        if (
          !e.some(function (t) {
            return (Uo(t) || Ho(t)) && !t.isInline();
          })
        ) {
          Uo(r) || t(211, n.constructor.name, n.getType());
          var _i20 = uo(this);
          return (r.splice(_i20, 0, e), void o.selectEnd());
        }
        var i = (function (t) {
            var e = ai();
            var n = null;
            for (var _r36 = 0; _r36 < t.length; _r36++) {
              var _o27 = t[_r36];
              if (ho(_o27)) {
                if (null === n) {
                  ((n = _o27.createParentElementNode()), e.append(n));
                  var _i21 = t[_r36 + 1];
                  if (ri(_o27) && (void 0 === _i21 || !ho(_i21))) continue;
                }
                n.append(_o27);
              } else (e.append(_o27), (n = null));
            }
            return e;
          })(e),
          s = i.getLastDescendant(),
          l = i.getChildren(),
          c = !Uo(r) || !r.isEmpty() ? this.insertParagraph() : null,
          a = l[l.length - 1];
        var u = l[0];
        var f;
        (Uo((f = u)) &&
          Ws(f) &&
          !f.isEmpty() &&
          Uo(r) &&
          (!r.isEmpty() || r.canMergeWhenEmpty()) &&
          (Uo(r) || t(211, n.constructor.name, n.getType()),
          r.append.apply(r, u.getChildren()),
          (u = l[1])),
          u &&
            (null === r && t(212, n.constructor.name, n.getType()),
            (function (e, n) {
              var r = n.getParentOrThrow().getLastChild();
              var o = n;
              var i = [n];
              for (; o !== r; )
                (o.getNextSibling() || t(140),
                  (o = o.getNextSibling()),
                  i.push(o));
              var s = e;
              for (var _t107 of i) s = s.insertAfter(_t107);
            })(r, u)));
        var d = sl(s, Ws);
        (c &&
          Uo(d) &&
          (c.canMergeWhenEmpty() || Ws(a)) &&
          (d.append.apply(d, c.getChildren()), c.remove()),
          Uo(r) && r.isEmpty() && r.remove(),
          s.selectEnd());
        var h = Uo(r) ? r.getLastChild() : null;
        ri(h) && d !== r && h.remove();
      };
      _proto1.insertParagraph = function insertParagraph() {
        if ("root" === this.anchor.key) {
          var _t108 = ai();
          return (
            Gi().splice(this.anchor.offset, 0, [_t108]),
            _t108.select(),
            _t108
          );
        }
        var e = uo(this),
          n = sl(this.anchor.getNode(), Ws);
        Uo(n) || t(213);
        var r = n.getChildAtIndex(e),
          o = r ? [r].concat(r.getNextSiblings()) : [],
          i = n.insertNewAfter(this, !1);
        return i ? (i.append.apply(i, o), i.selectStart(), i) : null;
      };
      _proto1.insertLineBreak = function insertLineBreak(t) {
        var e = ni();
        if ((this.insertNodes([e]), t)) {
          var _t109 = e.getParentOrThrow(),
            _n58 = e.getIndexWithinParent();
          _t109.select(_n58, _n58);
        }
      };
      _proto1.extract = function extract() {
        var _n$splitText;
        var t = [].concat(this.getNodes()),
          e = t.length;
        var n = t[0],
          r = t[e - 1];
        var _zr2 = zr(this),
          o = _zr2[0],
          i = _zr2[1],
          s = this.isBackward(),
          _ref19 = s ? [this.focus, this.anchor] : [this.anchor, this.focus],
          l = _ref19[0],
          c = _ref19[1],
          _ref20 = s ? [i, o] : [o, i],
          a = _ref20[0],
          u = _ref20[1];
        if (0 === e) return [];
        if (1 === e) {
          if (Or(n) && !this.isCollapsed()) {
            var _t110 = n.splitText(a, u),
              _e82 = 0 === a ? _t110[0] : _t110[1];
            return _e82
              ? (l.set(_e82.getKey(), 0, "text"),
                c.set(_e82.getKey(), _e82.getTextContentSize(), "text"),
                [_e82])
              : [];
          }
          return [n];
        }
        if (
          (Or(n) &&
            (a === n.getTextContentSize()
              ? t.shift()
              : 0 !== a &&
                ((_n$splitText = n.splitText(a)),
                (n = _n$splitText[1]),
                (t[0] = n),
                l.set(n.getKey(), 0, "text"))),
          Or(r))
        ) {
          var _r$splitText;
          var _e83 = r.getTextContent().length;
          0 === u
            ? t.pop()
            : u !== _e83 &&
              ((_r$splitText = r.splitText(u)),
              (r = _r$splitText[0]),
              (t[t.length - 1] = r),
              c.set(r.getKey(), r.getTextContentSize(), "text"));
        }
        return t;
      };
      _proto1.modify = function modify(t, e, n) {
        if (go(this, t, e, n)) return;
        var r = "move" === t,
          o = Eo(),
          i = Is(Ns(o));
        if (!i) return;
        var s = o._blockCursorElement,
          l = o._rootElement,
          c = this.focus.getNode();
        if (
          (null === l ||
            null === s ||
            !Uo(c) ||
            c.isInline() ||
            c.canBeEmpty() ||
            Ds(s, o, l),
          this.dirty)
        ) {
          var _t111 = ps(o, this.anchor.key),
            _e84 = ps(o, this.focus.key);
          var _n59 = _t111,
            _r37 = _e84;
          if ("text" === this.anchor.type) {
            var _e85 = this.anchor.getNode();
            _n59 = Or(_e85) ? Js(_e85, _t111, o) : null;
          }
          if ("text" === this.focus.type) {
            var _t112 = this.focus.getNode();
            _r37 = Or(_t112) ? Js(_t112, _e84, o) : null;
          }
          _n59 &&
            _r37 &&
            io(i, _n59, this.anchor.offset, _r37, this.focus.offset);
        }
        if (
          ((function (t, e, n, r) {
            t.modify(e, n, r);
          })(i, t, e ? "backward" : "forward", n),
          i.rangeCount > 0)
        ) {
          var _t113 = i.getRangeAt(0),
            _n60 = this.anchor.getNode(),
            _o28 = Go(_n60) ? _n60 : ks(_n60);
          if ((this.applyDOMRange(_t113), (this.dirty = !0), !r)) {
            var _n61 = this.getNodes(),
              _r38 = [];
            var _s10 = !1;
            for (var _t114 = 0; _t114 < _n61.length; _t114++) {
              var _e86 = _n61[_t114];
              Ss(_e86, _o28) ? _r38.push(_e86) : (_s10 = !0);
            }
            if (_s10 && _r38.length > 0)
              if (e) {
                var _t115 = _r38[0];
                Uo(_t115)
                  ? _t115.selectStart()
                  : _t115.getParentOrThrow().selectStart();
              } else {
                var _t116 = _r38[_r38.length - 1];
                Uo(_t116)
                  ? _t116.selectEnd()
                  : _t116.getParentOrThrow().selectEnd();
              }
            (i.anchorNode === _t113.startContainer &&
              i.anchorOffset === _t113.startOffset) ||
              (function (t) {
                var e = t.focus,
                  n = t.anchor,
                  r = n.key,
                  o = n.offset,
                  i = n.type;
                (n.set(e.key, e.offset, e.type, !0), e.set(r, o, i, !0));
              })(this);
          }
        }
        "lineboundary" === n && go(this, t, e, n, "decorators");
      };
      _proto1.forwardDeletion = function forwardDeletion(t, e, n) {
        if (
          !n &&
          (("element" === t.type &&
            Uo(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t117 = e.getParent(),
            _n62 =
              e.getNextSibling() ||
              (null === _t117 ? null : _t117.getNextSibling());
          if (Uo(_n62) && _n62.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto1.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e87 = this.anchor;
          var _n63 = _e87.getNode();
          if (this.forwardDeletion(_e87, _n63, t)) return;
          var _r39 = wl(zl(_e87, t ? "previous" : "next"));
          if (
            _r39.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            var _t118 = { type: "initial" };
            for (var _e88 of _r39.iterNodeCarets("shadowRoot"))
              if (ml(_e88)) {
                if (_e88.origin.isInline());
                else {
                  if (_e88.origin.isShadowRoot()) {
                    if ("merge-block" === _t118.type) break;
                    if (
                      Uo(_r39.anchor.origin) &&
                      _r39.anchor.origin.isEmpty()
                    ) {
                      var _t119 = Vl(_e88);
                      (Ul(this, Il(_t119, _t119)), _r39.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t118.type &&
                    "merge-block" !== _t118.type) ||
                    (_t118 = {
                      block: _t118.block,
                      caret: _e88,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t118.type) break;
                if (yl(_e88)) {
                  if (Uo(_e88.origin)) {
                    if (_e88.origin.isInline()) {
                      if (!_e88.origin.isParentOf(_r39.anchor.origin)) break;
                    } else
                      _t118 = { block: _e88.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (Ho(_e88.origin)) {
                    if (_e88.origin.isIsolated());
                    else if (
                      "merge-next-block" === _t118.type &&
                      (_e88.origin.isKeyboardSelectable() ||
                        !_e88.origin.isInline()) &&
                      Uo(_r39.anchor.origin) &&
                      _r39.anchor.origin.isEmpty()
                    ) {
                      _r39.anchor.origin.remove();
                      var _t120 = Xr();
                      (_t120.add(_e88.origin.getKey()), Vi(_t120));
                    } else _e88.origin.remove();
                    return;
                  }
                  break;
                }
              }
            if ("merge-block" === _t118.type) {
              var _t121 = _t118,
                _e89 = _t121.caret,
                _n64 = _t121.block;
              return _e89.origin.isEmpty() &&
                !_n64.isEmpty() &&
                _e89.origin.getParent() === _n64.getParent()
                ? void _e89.origin.remove(!0)
                : (Ul(
                    this,
                    Il(
                      !_e89.origin.isEmpty() && _n64.isEmpty()
                        ? jl(Tl(_n64, _e89.direction))
                        : _r39.anchor,
                      _e89,
                    ),
                  ),
                  this.removeText());
            }
          }
          var _o29 = this.focus;
          if ((this.modify("extend", t, "character"), this.isCollapsed())) {
            if (t && 0 === _e87.offset && $r(this, _e87.getNode())) return;
          } else {
            var _r40 = "text" === _o29.type ? _o29.getNode() : null;
            if (
              ((_n63 = "text" === _e87.type ? _e87.getNode() : null),
              null !== _r40 && _r40.isSegmented())
            ) {
              var _e90 = _o29.offset,
                _i22 = _r40.getTextContentSize();
              if (_r40.is(_n63) || (t && _e90 !== _i22) || (!t && 0 !== _e90))
                return void Ur(_r40, t, _e90);
            } else if (null !== _n63 && _n63.isSegmented()) {
              var _o30 = _e87.offset,
                _i23 = _n63.getTextContentSize();
              if (_n63.is(_r40) || (t && 0 !== _o30) || (!t && _o30 !== _i23))
                return void Ur(_n63, t, _o30);
            }
            !(function (t, e) {
              var n = t.anchor,
                r = t.focus,
                o = n.getNode(),
                i = r.getNode();
              if (o === i && "text" === n.type && "text" === r.type) {
                var _t122 = n.offset,
                  _i24 = r.offset,
                  _s11 = _t122 < _i24,
                  _l9 = _s11 ? _t122 : _i24,
                  _c5 = _s11 ? _i24 : _t122,
                  _a8 = _c5 - 1;
                if (_l9 !== _a8) {
                  (function (t) {
                    return !(Xi(t) || Wr(t));
                  })(o.getTextContent().slice(_l9, _c5)) &&
                    (e ? r.set(r.key, _a8, r.type) : n.set(n.key, _a8, n.type));
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
          var _t123 = this.anchor.getNode();
          _t123.isEmpty() &&
            Go(_t123.getParent()) &&
            null === _t123.getPreviousSibling() &&
            $r(this, _t123);
        }
      };
      _proto1.deleteLine = function deleteLine(t) {
        (this.isCollapsed() && this.modify("extend", t, "lineboundary"),
          this.isCollapsed() ? this.deleteCharacter(t) : this.removeText());
      };
      _proto1.deleteWord = function deleteWord(t) {
        if (this.isCollapsed()) {
          var _e91 = this.anchor,
            _n65 = _e91.getNode();
          if (this.forwardDeletion(_e91, _n65, t)) return;
          this.modify("extend", t, "word");
        }
        this.isCollapsed() ? this.deleteCharacter(t) : this.removeText();
      };
      _proto1.isBackward = function isBackward() {
        var t = this._cachedIsBackward;
        if (null !== t) return t;
        var e = this.focus.isBefore(this.anchor);
        return (No() || (this._cachedIsBackward = e), e);
      };
      _proto1.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return Lr;
    })();
    function Kr(t) {
      return t instanceof _Fr;
    }
    function Br(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function zr(t) {
      var e = t.getStartEndPoints();
      if (null === e) return [0, 0];
      var n = e[0],
        r = e[1];
      return "element" === n.type &&
        "element" === r.type &&
        n.key === r.key &&
        n.offset === r.offset
        ? [0, 0]
        : [Br(n), Br(r)];
    }
    function $r(t, e) {
      for (var _n66 = e; _n66; _n66 = _n66.getParent()) {
        if (Uo(_n66)) {
          if (_n66.collapseAtStart(t)) return !0;
          if (Os(_n66)) break;
        }
        if (_n66.getPreviousSibling()) break;
      }
      return !1;
    }
    var Wr = (function () {
      try {
        var _t124 = new RegExp("\\p{Emoji}", "u"),
          _e92 = _t124.test.bind(_t124);
        if (_e92("\u2764\ufe0f") && _e92("#\ufe0f\u20e3") && _e92("\u{1f44d}"))
          return _e92;
      } catch (t) {}
      return function () {
        return !1;
      };
    })();
    function Ur(t, e, n) {
      var r = t,
        o = r.getTextContent().split(/(?=\s)/g),
        i = o.length;
      var s = 0,
        l = 0;
      for (var _t125 = 0; _t125 < i; _t125++) {
        var _r41 = _t125 === i - 1;
        if (
          ((l = s), (s += o[_t125].length), (e && s === n) || s > n || _r41)
        ) {
          (o.splice(_t125, 1), _r41 && (l = void 0));
          break;
        }
      }
      var c = o.join("").trim();
      "" === c ? r.remove() : (r.setTextContent(c), r.select(l, l));
    }
    function Yr(e, n, r, o) {
      var i,
        s = n,
        l = !1;
      if (Fs(e)) {
        var _c6 = !1;
        var _a9 = e.childNodes,
          _u6 = _a9.length,
          _f0 = o._blockCursorElement;
        (s === _u6 && _u6 > 0 && ((_c6 = !0), (s = _u6 - 1)),
          void 0 !== Yi(e, o) || rl(e, o) || (l = !0));
        var _d6 = _a9[s],
          _h5 = !1;
        if (_d6 === _f0) ((_d6 = _a9[s + 1]), (_h5 = !0));
        else if (null !== _f0) {
          var _t126 = _f0.parentNode;
          if (e === _t126) {
            n > Array.prototype.indexOf.call(_t126.children, _f0) && s--;
          }
        }
        if (((i = qi(_d6)), Or(i))) s = vl(i, _c6 ? "next" : "previous");
        else {
          var _a0 = qi(e);
          if (null === _a0) return null;
          if (Uo(_a0)) {
            var _u7$resolveChildIndex;
            var _l0 = o.getElementByKey(_a0.getKey());
            null === _l0 && t(214);
            var _u7 = js(_a0, _l0, o);
            ((_u7$resolveChildIndex = _u7.resolveChildIndex(_a0, _l0, e, n)),
              (_a0 = _u7$resolveChildIndex[0]),
              (s = _u7$resolveChildIndex[1]),
              Uo(_a0) || t(215),
              _c6 &&
                s >= _a0.getChildrenSize() &&
                (s = Math.max(0, _a0.getChildrenSize() - 1)));
            var _f1 = _a0.getChildAtIndex(s);
            if (
              Uo(_f1) &&
              (function (t, e, n) {
                var r = t.getParent();
                return (
                  null === n ||
                  null === r ||
                  !r.canBeEmpty() ||
                  r !== n.getNode()
                );
              })(_f1, 0, r)
            ) {
              var _t127 = _c6
                ? _f1.getLastDescendant()
                : _f1.getFirstDescendant();
              (null === _t127
                ? (_a0 = _f1)
                : ((_f1 = _t127),
                  (_a0 = Uo(_f1) ? _f1 : _f1.getParentOrThrow())),
                (s = 0));
            }
            Or(_f1)
              ? ((i = _f1),
                (_a0 = null),
                (s = vl(_f1, _c6 ? "next" : "previous")))
              : _f1 !== _a0 &&
                _c6 &&
                !_h5 &&
                (Uo(_a0) || t(216),
                (s = Math.min(_a0.getChildrenSize(), s + 1)));
          } else {
            var _t128 = _a0.getIndexWithinParent(),
              _r42 = o.getElementByKey(_a0.getKey());
            var _i25 = "after";
            if (null !== _r42 && qi(e) === _a0) {
              var _t129 = js(_a0, _r42, o);
              _t129.element !== _r42
                ? (_i25 = _t129.resolveLeafPosition(_r42, e, n))
                : 0 === n && Ho(_a0) && (_i25 = "before");
            }
            ((s = "before" === _i25 ? _t128 : _t128 + 1),
              (_a0 = _a0.getParentOrThrow()));
          }
          if (Uo(_a0)) return [Dr(_a0.__key, s, "element"), l];
        }
      } else i = qi(e);
      return Or(i) ? [Dr(i.__key, vl(i, s, "clamp"), "text"), l] : null;
    }
    function jr(t, e, n) {
      var r = t.offset,
        o = t.getNode();
      if (0 === r) {
        var _r43 = o.getPreviousSibling(),
          _i26 = o.getParent();
        if (e) {
          if ((n || !e) && null === _r43 && Uo(_i26) && _i26.isInline()) {
            var _e93 = _i26.getPreviousSibling();
            Or(_e93) && t.set(_e93.__key, _e93.getTextContent().length, "text");
          }
        } else
          Uo(_r43) && !n && _r43.isInline()
            ? t.set(_r43.__key, _r43.getChildrenSize(), "element")
            : Or(_r43) &&
              t.set(_r43.__key, _r43.getTextContent().length, "text");
      } else if (r === o.getTextContent().length) {
        var _r44 = o.getNextSibling(),
          _i27 = o.getParent();
        if (e && Uo(_r44) && _r44.isInline()) t.set(_r44.__key, 0, "element");
        else if (
          (n || e) &&
          null === _r44 &&
          Uo(_i27) &&
          _i27.isInline() &&
          !_i27.canInsertTextAfter()
        ) {
          var _e94 = _i27.getNextSibling();
          Or(_e94) && t.set(_e94.__key, 0, "text");
        }
      }
    }
    function Hr(t, e, n) {
      if ("text" === t.type && "text" === e.type) {
        var _n67 = t.isBefore(e),
          _r45 = t.is(e);
        (jr(t, _n67, _r45),
          jr(e, !_n67, _r45),
          _r45 && e.set(t.key, t.offset, t.type));
      }
    }
    function Jr(t, e, n, r, o, i) {
      if (null === t || null === n || !Oi(o, t, n)) return null;
      var s = Yr(t, e, Rr(i) ? i.anchor : null, o);
      if (null === s) return null;
      var l = Yr(n, r, Rr(i) ? i.focus : null, o);
      if (null === l) return null;
      var c = s[0],
        a = s[1],
        u = l[0],
        f = l[1];
      if ("element" === c.type && "element" === u.type) {
        var _e95 = qi(t),
          _r46 = qi(n);
        if (Ho(_e95) && Ho(_r46)) return null;
      }
      return (Hr(c, u), [c, u, a || f]);
    }
    function Gr(t) {
      return Uo(t) && !t.isInline();
    }
    function Vr(t, e, n, r, o, i) {
      var s = Oo(),
        l = new _Lr(Dr(t, e, o), Dr(n, r, i), 0, "");
      return ((l.dirty = !0), (s._selection = l), l);
    }
    function qr() {
      var t = Dr("root", 0, "element"),
        e = Dr("root", 0, "element");
      return new _Lr(t, e, 0, "");
    }
    function Xr() {
      return new _Fr(new Set());
    }
    function Qr(t, e, n, r) {
      var o = n._window;
      if (null === o) return null;
      var i = r || o.event,
        s = i ? i.type : void 0,
        l = "selectionchange" === s,
        c =
          !G &&
          (l ||
            "beforeinput" === s ||
            "compositionstart" === s ||
            "compositionend" === s ||
            ("click" === s && i && 3 === i.detail) ||
            "drop" === s ||
            void 0 === s);
      var a, u, f, d;
      if (Rr(t) && !c) return t.clone();
      if (null === e) return null;
      if (
        ((a = e.anchorNode),
        (u = e.focusNode),
        (f = e.anchorOffset),
        (d = e.focusOffset),
        (l || void 0 === s) && Rr(t) && !Oi(n, a, u))
      )
        return t.clone();
      var h = Jr(a, f, u, d, n, t);
      if (null === h) return null;
      var g = h[0],
        _ = h[1],
        p = h[2];
      var y = 0,
        m = "";
      if (Rr(t)) {
        var _e96 = t.anchor;
        if (g.key === _e96.key) ((y = t.format), (m = t.style));
        else {
          var _t130 = g.getNode();
          Or(_t130)
            ? ((y = _t130.getFormat()), (m = _t130.getStyle()))
            : Uo(_t130) &&
              ((y = _t130.getTextFormat()), (m = _t130.getTextStyle()));
        }
      }
      var x = new _Lr(g, _, y, m);
      return (p && (x.dirty = !0), x);
    }
    function Zr() {
      return Oo()._selection;
    }
    function to() {
      return Eo()._editorState._selection;
    }
    function eo(t, e, n, r) {
      if (r === void 0) {
        r = 1;
      }
      var o = t.anchor,
        i = t.focus,
        s = o.getNode(),
        l = i.getNode();
      if (!e.is(s) && !e.is(l)) return;
      var c = e.__key;
      if (t.isCollapsed()) {
        var _e97 = o.offset;
        if ((n <= _e97 && r > 0) || (n < _e97 && r < 0)) {
          var _n68 = Math.max(0, _e97 + r);
          (o.set(c, _n68, "element"), i.set(c, _n68, "element"), no(t));
        }
      } else {
        var _s12 = t.isBackward(),
          _l1 = _s12 ? i : o,
          _a1 = _l1.getNode(),
          _u8 = _s12 ? o : i,
          _f10 = _u8.getNode();
        if (e.is(_a1)) {
          var _t131 = _l1.offset;
          ((n <= _t131 && r > 0) || (n < _t131 && r < 0)) &&
            _l1.set(c, Math.max(0, _t131 + r), "element");
        }
        if (e.is(_f10)) {
          var _t132 = _u8.offset;
          ((n <= _t132 && r > 0) || (n < _t132 && r < 0)) &&
            _u8.set(c, Math.max(0, _t132 + r), "element");
        }
      }
      no(t);
    }
    function no(t) {
      var e = t.anchor,
        n = e.offset,
        r = t.focus,
        o = r.offset,
        i = e.getNode(),
        s = r.getNode();
      if (t.isCollapsed()) {
        if (!Uo(i)) return;
        var _t133 = i.getChildrenSize(),
          _o31 = n >= _t133,
          _s13 = _o31 ? i.getChildAtIndex(_t133 - 1) : i.getChildAtIndex(n);
        if (Or(_s13)) {
          var _t134 = 0;
          (_o31 && (_t134 = _s13.getTextContentSize()),
            e.set(_s13.__key, _t134, "text"),
            r.set(_s13.__key, _t134, "text"));
        }
        return;
      }
      if (Uo(i)) {
        var _t135 = i.getChildrenSize(),
          _r47 = n >= _t135,
          _o32 = _r47 ? i.getChildAtIndex(_t135 - 1) : i.getChildAtIndex(n);
        if (Or(_o32)) {
          var _t136 = 0;
          (_r47 && (_t136 = _o32.getTextContentSize()),
            e.set(_o32.__key, _t136, "text"));
        }
      }
      if (Uo(s)) {
        var _t137 = s.getChildrenSize(),
          _e98 = o >= _t137,
          _n69 = _e98 ? s.getChildAtIndex(_t137 - 1) : s.getChildAtIndex(o);
        if (Or(_n69)) {
          var _t138 = 0;
          (_e98 && (_t138 = _n69.getTextContentSize()),
            r.set(_n69.__key, _t138, "text"));
        }
      }
    }
    function ro(t, e, n, r, o) {
      var i = null,
        s = 0,
        l = null;
      (null !== r
        ? ((i = r.__key),
          Or(r)
            ? ((s = r.getTextContentSize()), (l = "text"))
            : Uo(r) && ((s = r.getChildrenSize()), (l = "element")))
        : null !== o &&
          ((i = o.__key), Or(o) ? (l = "text") : Uo(o) && (l = "element")),
        null !== i && null !== l
          ? t.set(i, s, l)
          : ((s = e.getIndexWithinParent()),
            -1 === s && (s = n.getChildrenSize()),
            t.set(n.__key, s, "element")));
    }
    function oo(t, e, n, r, o) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : o), "text")
        : t.offset > r.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function io(t, e, n, r, o) {
      try {
        t.setBaseAndExtent(e, n, r, o);
      } catch (t) {}
    }
    function so(t, e, n) {
      var r = ps(t, e.getKey());
      if (Uo(e)) {
        var _o33 = js(e, r, t);
        return [_o33.element, n + _o33.getFirstChildOffset()];
      }
      return [r, n];
    }
    function lo(t, e, n, r, i, s) {
      var l = document.activeElement;
      if ((i.has(tr) && l !== s) || (null !== l && ki(l))) return;
      if (!Rr(e))
        return void (
          null !== t &&
          Oi(n, r.anchorNode, r.focusNode) &&
          r.removeAllRanges()
        );
      var c = e.anchor,
        a = e.focus,
        u = c.getNode(),
        f = a.getNode(),
        _so = so(n, u, c.offset),
        d = _so[0],
        h = _so[1],
        _so2 = so(n, f, a.offset),
        g = _so2[0],
        _ = _so2[1],
        p = e.format,
        y = e.style,
        m = e.isCollapsed();
      var x = d,
        C = g,
        S = !1;
      var T, N, v, k, O;
      if (
        ("text" === c.type
          ? ((x = Or(u) ? Js(u, d, n) : null),
            (S = u.getFormat() !== p || u.getStyle() !== y))
          : Rr(t) && "text" === t.anchor.type && (S = !0),
        "text" === a.type && (C = Or(f) ? Js(f, g, n) : null),
        null !== x && null !== C) &&
        (m &&
          (null === t || S || (Rr(t) && (t.format !== p || t.style !== y))) &&
          ((T = p),
          (N = y),
          (v = h),
          (k = c.key),
          (O = performance.now()),
          (kn = [T, N, v, k, O])),
        ("Range" === r.type && m) ||
          r.anchorOffset !== h ||
          r.focusOffset !== _ ||
          r.anchorNode !== x ||
          r.focusNode !== C ||
          ((null !== l && s.contains(l)) ||
            i.has(rr) ||
            s.focus({ preventScroll: !0 }),
          "element" === c.type))
      ) {
        if (
          (io(r, x, h, C, _),
          !o ||
            !e.isCollapsed() ||
            null === s ||
            i.has(rr) ||
            (null !== document.activeElement &&
              s.contains(document.activeElement)) ||
            s.focus({ preventScroll: !0 }),
          !i.has(er) &&
            e.isCollapsed() &&
            null !== s &&
            s === document.activeElement)
        ) {
          var _t139 =
            Rr(e) && "element" === e.anchor.type
              ? x.childNodes[h] || null
              : r.rangeCount > 0
                ? r.getRangeAt(0)
                : null;
          if (null !== _t139) {
            var _e99;
            if (_t139 instanceof Text) {
              var _n70 = document.createRange();
              (_n70.selectNode(_t139), (_e99 = _n70.getBoundingClientRect()));
            } else _e99 = _t139.getBoundingClientRect();
            !(function (t, e, n) {
              var r = ms(n),
                o = Ts(r);
              if (null === r || null === o) return;
              var i = e.top,
                s = e.bottom,
                l = 0,
                c = 0,
                a = n;
              for (; null !== a; ) {
                var _e100 = a === r.body;
                if (_e100) {
                  var _e101 = o.visualViewport;
                  if (_e101) {
                    var _t140 = _e101.offsetTop;
                    ((l = _t140), (c = _t140 + _e101.height));
                  } else ((l = 0), (c = Ns(t).innerHeight));
                  var _n71 = o.getComputedStyle(r.documentElement),
                    _i28 = parseFloat(_n71.scrollPaddingTop),
                    _s14 = parseFloat(_n71.scrollPaddingBottom);
                  (isFinite(_i28) && (l += _i28),
                    isFinite(_s14) && (c -= _s14));
                } else {
                  var _t141 = a.getBoundingClientRect();
                  ((l = _t141.top), (c = _t141.bottom));
                }
                var _n72 = 0;
                if (
                  (i < l ? (_n72 = -(l - i)) : s > c && (_n72 = s - c),
                  0 !== _n72)
                )
                  if (_e100) o.scrollBy(0, _n72);
                  else {
                    var _t142 = a.scrollTop;
                    a.scrollTop += _n72;
                    var _e102 = a.scrollTop - _t142;
                    ((i -= _e102), (s -= _e102));
                  }
                if (_e100) break;
                a = ys(a);
              }
            })(n, _e99, s);
          }
        }
        mn = !0;
      }
    }
    function co(t, e) {
      for (var _n73 of t.split(/(\r?\n|\t)/))
        "\n" === _n73 || "\r\n" === _n73
          ? e.linebreak()
          : "\t" === _n73
            ? e.tab()
            : "" !== _n73 && e.text(_n73);
    }
    function ao(t) {
      var e = [];
      return (
        co(t, {
          linebreak: function linebreak() {
            return e.push(ni());
          },
          tab: function tab() {
            return e.push(Mr());
          },
          text: function text(t) {
            return e.push(kr(t));
          },
        }),
        e
      );
    }
    function uo(e) {
      var n = e;
      e.isCollapsed() || n.removeText();
      var r = Zr();
      (Rr(r) && (n = r), Rr(n) || t(161));
      var o = n.anchor;
      var i = o.getNode(),
        s = o.offset;
      for (; !Ws(i); ) {
        var _fo;
        var _t143 = i;
        if (((_fo = fo(i, s)), (i = _fo[0]), (s = _fo[1]), _t143.is(i))) break;
      }
      return s;
    }
    function fo(t, e) {
      var n = t.getParent();
      if (!n) {
        var _t144 = ai();
        return (Gi().append(_t144), _t144.select(), [Gi(), 0]);
      }
      if (Or(t)) {
        var _r48 = t.splitText(e);
        if (0 === _r48.length) return [n, t.getIndexWithinParent()];
        var _o34 = 0 === e ? 0 : 1;
        return [n, _r48[0].getIndexWithinParent() + _o34];
      }
      if (!Uo(t) || 0 === e) return [n, t.getIndexWithinParent()];
      var r = t.getChildAtIndex(e);
      if (r) {
        var _n74 = new _Lr(
            Dr(t.__key, e, "element"),
            Dr(t.__key, e, "element"),
            0,
            "",
          ),
          _o35 = t.insertNewAfter(_n74);
        _o35 && _o35.append.apply(_o35, [r].concat(r.getNextSiblings()));
      }
      return [n, t.getIndexWithinParent() + 1];
    }
    function ho(t) {
      return ri(t) || vs(t) || Or(t) || t.isParentRequired();
    }
    function go(t, e, n, r, o) {
      if (o === void 0) {
        o = "decorators-and-blocks";
      }
      if ("move" === e && "character" === r && !t.isCollapsed()) {
        var _ref21 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e103 = _ref21[0],
          _r49 = _ref21[1];
        return (_r49.set(_e103.key, _e103.offset, _e103.type), !0);
      }
      var i = zl(t.focus, n ? "previous" : "next"),
        s = "lineboundary" === r,
        l = "move" === e;
      var c = i,
        a = "decorators-and-blocks" === o;
      if (!ql(c)) {
        for (var _t145 of c) {
          a = !1;
          var _e104 = _t145.origin;
          if (
            !Ho(_e104) ||
            _e104.isIsolated() ||
            ((c = _t145), !s || !_e104.isInline())
          )
            break;
        }
        if (a)
          for (var _t146 of wl(i).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (ml(_t146)) _t146.origin.isInline() || (c = _t146);
            else {
              if (Uo(_t146.origin)) continue;
              Ho(_t146.origin) && !_t146.origin.isInline() && (c = _t146);
            }
            break;
          }
      }
      if (c === i) return !1;
      if (l && !s && Ho(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t147 = Xr();
        return (_t147.add(c.origin.getKey()), Vi(_t147), !0);
      }
      return ((c = Vl(c)), l && $l(t.anchor, c), $l(t.focus, c), a || !s);
    }
    var _o = null,
      po = null,
      yo = !1,
      mo = !1,
      xo = !1;
    var Co = new Set();
    var So = 0;
    var To = { characterData: !0, childList: !0, subtree: !0 };
    function No() {
      return yo || (null !== _o && _o._readOnly);
    }
    function vo() {
      yo && t(13);
    }
    function ko() {
      So > 99 && t(14);
    }
    function Oo() {
      return (null === _o && t(195, bo()), _o);
    }
    function Eo() {
      return (null === po && t(337, bo()), po);
    }
    function bo() {
      var t = 0;
      var e = new Set(),
        n = _mi.version;
      if ("undefined" != typeof window)
        for (var _r50 of document.querySelectorAll("[contenteditable]")) {
          var _o36 = Mi(_r50);
          if (Ei(_o36)) t++;
          else if (_o36) {
            var _t148 = String(_o36.constructor.version || "<0.17.1");
            (_t148 === n &&
              (_t148 +=
                " (separately built, likely a bundler configuration issue)"),
              e.add(_t148));
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
    function Mo() {
      return po;
    }
    function Ao(t, e, n) {
      var r = e.__type,
        o = Ti(t, r);
      var i = n.get(r);
      void 0 === i && ((i = Array.from(o.transforms)), n.set(r, i));
      var s = i.length;
      for (var _t149 = 0; _t149 < s && (i[_t149](e), e.isAttached()); _t149++);
    }
    function wo(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function Do(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var r = e;
      Array.isArray(e) || (r = [e]);
      for (var _t150 of r) n.add(_t150);
    }
    function Io(e, n) {
      var r = e.type,
        o = n.get(r);
      void 0 === o && t(17, r);
      var i = o.klass;
      e.type !== i.getType() && t(18, i.name);
      var s = i.importJSON(e),
        l = e.children;
      if (Uo(s) && Array.isArray(l))
        for (var _t151 = 0; _t151 < l.length; _t151++) {
          var _e105 = Io(l[_t151], n);
          s.append(_e105);
        }
      return s;
    }
    function Po(t, e, n) {
      var r = _o,
        o = yo,
        i = po;
      ((_o = e), (yo = !0), (po = t));
      try {
        return n();
      } finally {
        ((_o = r), (yo = o), (po = i));
      }
    }
    function Fo(t, e) {
      var n = xo;
      xo = !0;
      try {
        !(function (t, e) {
          var n = t._pendingEditorState,
            r = t._rootElement,
            o = t._headless || null === r;
          if (null === n)
            return void (t._deferred.length > 0 && Ko(t, t._deferred));
          var i = t._editorState,
            s = i._selection,
            l = n._selection,
            c = 0 !== t._dirtyType,
            a = _o,
            u = yo,
            f = po,
            d = t._updating,
            h = t._observer;
          var g = null;
          if (
            ((t._pendingEditorState = null),
            (t._editorState = n),
            !o && c && null !== h)
          ) {
            ((po = t), (_o = n), (yo = !1), (t._updating = !0));
            try {
              var _e106 = t._dirtyType,
                _r51 = t._dirtyElements,
                _o37 = t._dirtyLeaves;
              (h.disconnect(), (g = ae(i, n, t, _e106, _r51, _o37)));
            } catch (e) {
              if ((e instanceof Error && t._onError(e), mo)) throw e;
              return (
                hi(t, null, r, n),
                rt(t),
                (t._dirtyType = 2),
                (mo = !0),
                Fo(t, i),
                void (mo = !1)
              );
            } finally {
              (h.observe(r, To),
                (t._updating = d),
                (_o = a),
                (yo = u),
                (po = f));
            }
          }
          n._readOnly || (n._readOnly = !0);
          var _ = t._dirtyLeaves,
            p = t._dirtyElements,
            y = t._normalizedNodes,
            m = t._updateTags,
            x = t._deferred;
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
              var i;
              for (i in r) o.has(i) || (r === n && (r = Hi(t)), delete r[i]);
            })(t, n));
          var C = o ? null : Is(Ns(t));
          if (
            t._editable &&
            null !== C &&
            (c || null === l || l.dirty || !l.is(s)) &&
            null !== r &&
            !m.has(nr)
          ) {
            ((po = t), (_o = n));
            try {
              if ((null !== h && h.disconnect(), c || null === l || l.dirty)) {
                var _e107 = t._blockCursorElement;
                (null !== _e107 && Ds(_e107, t, r), lo(s, l, t, C, m, r));
              }
              !(function (t, e, n) {
                var r = t._blockCursorElement;
                if (
                  Rr(n) &&
                  n.isCollapsed() &&
                  "element" === n.anchor.type &&
                  e.contains(document.activeElement)
                ) {
                  var _o38 = n.anchor,
                    _i29 = _o38.getNode(),
                    _s15 = _o38.offset;
                  var _l10 = !1,
                    _c7 = null;
                  if (_s15 === _i29.getChildrenSize()) {
                    ws(_i29.getChildAtIndex(_s15 - 1)) && (_l10 = !0);
                  } else {
                    var _e108 = _i29.getChildAtIndex(_s15);
                    if (null !== _e108 && ws(_e108)) {
                      var _n75 = _e108.getPreviousSibling();
                      (null === _n75 || ws(_n75)) &&
                        ((_l10 = !0), (_c7 = t.getElementByKey(_e108.__key)));
                    }
                  }
                  if (_l10) {
                    var _n76 = js(
                      _i29,
                      t.getElementByKey(_i29.__key),
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
                                var _t152 = nc(r);
                                r = e.blockCursor = _t152;
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
                      void (null === _c7
                        ? _n76.appendChild(r)
                        : _n76.insertBefore(r, _c7))
                    );
                  }
                }
                null !== r && Ds(r, t, e);
              })(t, r, l);
            } finally {
              (null !== h && h.observe(r, To), (po = f), (_o = a));
            }
          }
          null !== g &&
            (function (t, e, n, r, o) {
              var i = Array.from(t._listeners.mutation),
                s = i.length;
              for (var _t153 = 0; _t153 < s; _t153++) {
                var _i$_t = i[_t153],
                  _s16 = _i$_t[0],
                  _l11 = _i$_t[1];
                for (var _t154 of _l11) {
                  var _i30 = e.get(_t154);
                  void 0 !== _i30 &&
                    _s16(_i30, {
                      dirtyLeaves: r,
                      prevEditorState: o,
                      updateTags: n,
                    });
                }
              }
            })(t, g, m, _, i);
          Rr(l) ||
            null === l ||
            (null !== s && s.is(l)) ||
            t.dispatchCommand(de, void 0);
          var S = t._pendingDecorators;
          null !== S &&
            ((t._decorators = S),
            (t._pendingDecorators = null),
            Ro("decorator", t, !0, S));
          ((function (t, e, n) {
            var r = Ji(e),
              o = Ji(n);
            r !== o && Ro("textcontent", t, !0, o);
          })(t, e || i, n),
            Ro("update", t, !0, {
              dirtyElements: p,
              dirtyLeaves: _,
              editorState: n,
              mutatedNodes: g,
              normalizedNodes: y,
              prevEditorState: e || i,
              tags: m,
            }),
            Ko(t, x),
            (function (t) {
              var e = t._updates;
              if (0 === e.length) return void (t._cascadeCount = 0);
              if (
                ((function (t) {
                  if (Co.has(t)) return;
                  (Co.add(t),
                    setTimeout(function () {
                      (Co["delete"](t), (t._cascadeCount = 0));
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
                var _e109 = n[0],
                  _r52 = n[1];
                zo(t, _e109, _r52);
              }
            })(t));
        })(t, e);
      } finally {
        xo = n;
      }
    }
    function Ro(t, e, n) {
      var o = e._updating;
      e._updating = n;
      try {
        var _n77 = e._listeners[t],
          _o39 = Array.from(_n77);
        for (
          var _len3 = arguments.length,
            r = new Array(_len3 > 3 ? _len3 - 3 : 0),
            _key3 = 3;
          _key3 < _len3;
          _key3++
        ) {
          r[_key3 - 3] = arguments[_key3];
        }
        for (var _ref23 of _o39) {
          var _t155 = _ref23[0];
          var _e110 = _ref23[1];
          {
            _e110 && _e110();
            var _o40 = _t155.apply(void 0, r);
            _n77.has(_t155) ? _n77.set(_t155, _o40) : _o40 && _o40();
          }
        }
      } finally {
        e._updating = o;
      }
    }
    function Lo(t, e, n, r) {
      var o = Qi(t);
      var i;
      if (!xo)
        for (var _t156 = 0; _t156 < o.length; _t156++)
          o[_t156]._updating || (o[_t156]._cascadeCount = 0);
      for (var _t157 = 4; _t157 >= 0; _t157--) {
        var _loop = function _loop() {
            var l = o[_s17];
            if (_s17 > 0 && l._updating) {
              i = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e111 = c[_t157];
              if (_e111.size > 0) {
                var _t158 = !1;
                if (
                  ($o(l, function () {
                    for (var _o41 of _e111)
                      if (_o41(n, r)) return void (_t158 = !0);
                  }),
                  _t158)
                )
                  return { v: _t158 };
              }
            }
          },
          _ret;
        for (var _s17 = 0; _s17 < o.length; _s17++) {
          _ret = _loop();
          if (_ret === 0) break;
          if (_ret) return _ret.v;
        }
      }
      return (
        i &&
          i.update(function () {
            Lo(i, e, n, r);
          }),
        !1
      );
    }
    function Ko(t, e) {
      if (((t._deferred = []), 0 !== e.length)) {
        var _n78 = t._updating;
        t._updating = !0;
        try {
          for (var _t159 = 0; _t159 < e.length; _t159++) e[_t159]();
        } finally {
          t._updating = _n78;
        }
      }
    }
    function Bo(e, n) {
      var r = e._updates;
      var o = n || !1;
      for (; 0 !== r.length; ) {
        var _n79 = r.shift();
        if (_n79) {
          var _r53 = _n79[0],
            _i31 = _n79[1],
            _s18 = e._pendingEditorState;
          var _l12 = void 0;
          (void 0 !== _i31 &&
            ((_l12 = _i31.onUpdate),
            _i31.skipTransforms && (o = !0),
            _i31.discrete && (null === _s18 && t(191), (_s18._flushSync = !0)),
            _l12 && e._deferred.push(_l12),
            Do(e, _i31.tag)),
            null == _s18 ? zo(e, _r53, _i31) : _r53());
        }
      }
      return o;
    }
    function zo(e, n, r) {
      var o = e._updateTags;
      var i,
        s = !1,
        l = !1;
      (void 0 !== r &&
        ((i = r.onUpdate),
        Do(e, r.tag),
        (s = r.skipTransforms || !1),
        (l = r.discrete || !1)),
        i && e._deferred.push(i));
      var c = e._editorState;
      var a = e._pendingEditorState,
        u = !1;
      ((null === a || a._readOnly) &&
        ((a = e._pendingEditorState = Vo(a || c)), (u = !0)),
        (a._flushSync = l));
      var f = _o,
        d = yo,
        h = po,
        g = e._updating;
      ((_o = a), (yo = !1), (e._updating = !0), (po = e));
      var _ = e._headless || null === e.getRootElement();
      Ci(null);
      try {
        u &&
          (_
            ? null !== c._selection && (a._selection = c._selection.clone())
            : (a._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  r = Is(Ns(t));
                return Rr(n) || null == n ? Qr(n, r, t, e) : n.clone();
              })(e, (r && r.event) || null)));
        var _o42 = e._compositionKey;
        (n(),
          (s = Bo(e, s)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              r = t._selection;
            if (Rr(r)) {
              var _t160 = r.anchor,
                _e112 = r.focus;
              var _o43;
              if (
                ("text" === _t160.type &&
                  ((_o43 = _t160.getNode()), _o43.selectionTransform(n, r)),
                "text" === _e112.type)
              ) {
                var _t161 = _e112.getNode();
                _o43 !== _t161 && _t161.selectionTransform(n, r);
              }
            }
          })(a, e),
          0 !== e._dirtyType &&
            (s
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    r = t._nodeMap;
                  for (var _t162 of n) {
                    var _e113 = r.get(_t162);
                    Or(_e113) &&
                      _e113.isAttached() &&
                      _e113.isSimpleText() &&
                      !_e113.isUnmergeable() &&
                      mt(_e113);
                  }
                })(a, e)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    r = e._dirtyElements,
                    o = t._nodeMap,
                    i = zi(),
                    s = new Map();
                  var l = n,
                    c = l.size,
                    a = r,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t163 of l) {
                        var _r54 = o.get(_t163);
                        (Or(_r54) &&
                          _r54.isAttached() &&
                          _r54.isSimpleText() &&
                          !_r54.isUnmergeable() &&
                          mt(_r54),
                          void 0 !== _r54 && wo(_r54, i) && Ao(e, _r54, s),
                          n.add(_t163));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        So++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t164 of a) {
                      var _n80 = _t164[0],
                        _l13 = _t164[1];
                      if ((r.set(_n80, _l13), !_l13)) continue;
                      var _c8 = o.get(_n80);
                      void 0 !== _c8 && wo(_c8, i) && Ao(e, _c8, s);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      So++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = r));
                })(a, e),
            Bo(e),
            (function (t, e, n, r) {
              var o = t._nodeMap,
                i = e._nodeMap,
                s = [];
              for (var _ref25 of r) {
                var _t165 = _ref25[0];
                {
                  var _e114 = i.get(_t165);
                  void 0 !== _e114 &&
                    (_e114.isAttached() ||
                      (Uo(_e114) && J(_e114, _t165, o, i, s, r),
                      o.has(_t165) || r["delete"](_t165),
                      s.push(_t165)));
                }
              }
              for (var _t166 of s) i["delete"](_t166);
              for (var _t167 of n) {
                var _e115 = i.get(_t167);
                void 0 === _e115 ||
                  _e115.isAttached() ||
                  (o.has(_t167) || n["delete"](_t167), i["delete"](_t167));
              }
            })(c, a, e._dirtyLeaves, e._dirtyElements)));
        _o42 !== e._compositionKey && (a._flushSync = !0);
        var _i32 = a._selection;
        if (Rr(_i32)) {
          var _e116 = a._nodeMap,
            _n81 = _i32.anchor.key,
            _r55 = _i32.focus.key;
          (void 0 !== _e116.get(_n81) && void 0 !== _e116.get(_r55)) || t(19);
        } else Kr(_i32) && 0 === _i32._nodes.size && (a._selection = null);
      } catch (t) {
        return (
          t instanceof Error && e._onError(t),
          (e._pendingEditorState = c),
          (e._dirtyType = 2),
          e._cloneNotNeeded.clear(),
          (e._dirtyLeaves = new Set()),
          e._dirtyElements.clear(),
          void Fo(e)
        );
      } finally {
        ((_o = f), (yo = d), (po = h), (e._updating = g), (So = 0));
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
          ? ((a._flushSync = !1), Fo(e))
          : u &&
            vi(function () {
              Fo(e);
            })
        : ((a._flushSync = !1),
          u && (o.clear(), (e._deferred = []), (e._pendingEditorState = null)));
    }
    function $o(t, e, n) {
      po === t && void 0 === n ? e() : zo(t, e, n);
    }
    var _Wo4 = (function (_Qn2) {
      function Wo(t) {
        var _this3;
        ((_this3 = _Qn2.call(this, t) || this),
          (_this3.__first = null),
          (_this3.__last = null),
          (_this3.__size = 0),
          (_this3.__format = 0),
          (_this3.__style = ""),
          (_this3.__indent = 0),
          (_this3.__dir = null),
          (_this3.__textFormat = 0),
          (_this3.__textStyle = ""));
        return _this3;
      }
      babelHelpers.inheritsLoose(Wo, _Qn2);
      var _proto10 = Wo.prototype;
      _proto10.afterCloneFrom = function afterCloneFrom(t) {
        (_Qn2.prototype.afterCloneFrom.call(this, t),
          this.__key === t.__key &&
            ((this.__first = t.__first),
            (this.__last = t.__last),
            (this.__size = t.__size)),
          (this.__indent = t.__indent),
          (this.__format = t.__format),
          (this.__style = t.__style),
          (this.__dir = t.__dir),
          (this.__textFormat = t.__textFormat),
          (this.__textStyle = t.__textStyle));
      };
      _proto10.getFormat = function getFormat() {
        return this.getLatest().__format;
      };
      _proto10.getFormatType = function getFormatType() {
        var t = this.getFormat();
        return D[t] || "";
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
        return 0 === this.getChildrenSize();
      };
      _proto10.isDirty = function isDirty() {
        var t = Eo()._dirtyElements;
        return null !== t && t.has(this.__key);
      };
      _proto10.isLastChild = function isLastChild() {
        var t = this.getLatest(),
          e = this.getParentOrThrow().getLastChild();
        return null !== e && e.is(t);
      };
      _proto10.getAllTextNodes = function getAllTextNodes() {
        var t = [];
        var e = this.getFirstChild();
        for (; null !== e; ) {
          if ((Or(e) && t.push(e), Uo(e))) {
            var _n82 = e.getAllTextNodes();
            t.push.apply(t, _n82);
          }
          e = e.getNextSibling();
        }
        return t;
      };
      _proto10.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; Uo(t); ) {
          var _e117 = t.getFirstChild();
          if (null === _e117) break;
          t = _e117;
        }
        return t;
      };
      _proto10.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; Uo(t); ) {
          var _e118 = t.getLastChild();
          if (null === _e118) break;
          t = _e118;
        }
        return t;
      };
      _proto10.getDescendantByIndex = function getDescendantByIndex(t) {
        var e = this.getChildren(),
          n = e.length;
        if (t >= n) {
          var _t168 = e[n - 1];
          return (Uo(_t168) && _t168.getLastDescendant()) || _t168 || null;
        }
        var r = e[t];
        return (Uo(r) && r.getFirstDescendant()) || r || null;
      };
      _proto10.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : $i(t);
      };
      _proto10.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var e = this.getFirstChild();
        return (null === e && t(45, this.__key), e);
      };
      _proto10.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : $i(t);
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
        var t = "";
        var e = this.getChildren(),
          n = e.length;
        for (var _r56 = 0; _r56 < n; _r56++) {
          var _o44 = e[_r56];
          ((t += _o44.getTextContent()),
            Uo(_o44) && _r56 !== n - 1 && !_o44.isInline() && (t += N));
        }
        return t;
      };
      _proto10.getTextContentSize = function getTextContentSize() {
        var t = 0;
        var e = this.getChildren(),
          n = e.length;
        for (var _r57 = 0; _r57 < n; _r57++) {
          var _o45 = e[_r57];
          ((t += _o45.getTextContentSize()),
            Uo(_o45) && _r57 !== n - 1 && !_o45.isInline() && (t += 2));
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
          var _e119 = w[t];
          return 0 !== (this.getFormat() & _e119);
        }
        return !1;
      };
      _proto10.hasTextFormat = function hasTextFormat(t) {
        var e = M[t];
        return 0 !== (this.getTextFormat() & e);
      };
      _proto10.getFormatFlags = function getFormatFlags(t, e) {
        return Fi(this.getLatest().__textFormat, t, e);
      };
      _proto10.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto10.select = function select(t, e) {
        vo();
        var n = Zr();
        var r = t,
          o = e;
        var i = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t169 = this.getFirstChild();
            if (Or(_t169) || Uo(_t169)) return _t169.select(0, 0);
          } else if (
            !((void 0 !== t && t !== i) || (void 0 !== e && e !== i))
          ) {
            var _t170 = this.getLastChild();
            if (Or(_t170) || Uo(_t170)) return _t170.select();
          }
        (void 0 === r && (r = i), void 0 === o && (o = i));
        var s = this.__key;
        return Rr(n)
          ? (n.anchor.set(s, r, "element"),
            n.focus.set(s, o, "element"),
            (n.dirty = !0),
            n)
          : Vr(s, r, s, o, "element", "element");
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
          var _len4 = arguments.length, t = new Array(_len4), _key4 = 0;
          _key4 < _len4;
          _key4++
        ) {
          t[_key4] = arguments[_key4];
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
      _proto10.splice = function splice(e, n, r) {
        qn(this) && t(324, this.__key, this.__type);
        var o = this.getChildrenSize(),
          i = this.getWritable();
        e + n <= o || t(226, String(e), String(n), String(o));
        var s = i.__key,
          l = [],
          c = [],
          a = this.getChildAtIndex(e + n);
        var u = null,
          f = o - n + r.length;
        if (0 !== e)
          if (e === o) u = this.getLastChild();
          else {
            var _t171 = this.getChildAtIndex(e);
            null !== _t171 && (u = _t171.getPreviousSibling());
          }
        if (n > 0) {
          var _e120 = null === u ? this.getFirstChild() : u.getNextSibling();
          for (var _r58 = 0; _r58 < n; _r58++) {
            null === _e120 && t(100);
            var _n83 = _e120.getNextSibling(),
              _r59 = _e120.__key;
            (Li(_e120.getWritable()), c.push(_r59), (_e120 = _n83));
          }
        }
        var d = u;
        for (var _e121 of r) {
          null !== d && _e121.is(d) && (u = d = d.getPreviousSibling());
          var _n84 = _e121.getWritable();
          (_n84.__parent === s && f--, Li(_n84));
          var _r60 = _e121.__key;
          if (null === d) ((i.__first = _r60), (_n84.__prev = null));
          else {
            var _t172 = d.getWritable();
            ((_t172.__next = _r60), (_n84.__prev = _t172.__key));
          }
          (_e121.__key === s && t(76),
            (_n84.__parent = s),
            l.push(_r60),
            (d = _e121));
        }
        if (e + n === o) {
          if (null !== d) {
            ((d.getWritable().__next = null), (i.__last = d.__key));
          }
        } else if (null !== a) {
          var _t173 = a.getWritable();
          if (null !== d) {
            var _e122 = d.getWritable();
            ((_t173.__prev = d.__key), (_e122.__next = a.__key));
          } else _t173.__prev = null;
        }
        if (((i.__size = f), c.length)) {
          var _t174 = Zr();
          if (Rr(_t174)) {
            var _e123 = new Set(c),
              _n85 = new Set(l),
              _r61 = _t174.anchor,
              _o46 = _t174.focus;
            (Yo(_r61, _e123, _n85) && ro(_r61, _r61.getNode(), this, u, a),
              Yo(_o46, _e123, _n85) && ro(_o46, _o46.getNode(), this, u, a),
              0 !== f || this.canBeEmpty() || Os(this) || this.remove());
          }
        }
        return i;
      };
      _proto10.getDOMSlot = function getDOMSlot(t) {
        return new _B(t);
      };
      _proto10.exportDOM = function exportDOM(t) {
        var _Qn2$prototype$export = _Qn2.prototype.exportDOM.call(this, t),
          e = _Qn2$prototype$export.element;
        if (Fs(e)) {
          var _t175 = this.getIndent();
          _t175 > 0 &&
            ((e.style.paddingInlineStart = 40 * _t175 + "px"),
            e.setAttribute("data-lexical-indent", String(_t175)));
          var _n86 = this.getDirection();
          _n86 && (e.dir = _n86);
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
            _Qn2.prototype.exportJSON.call(this),
          ),
          e = this.getTextFormat(),
          n = this.getTextStyle();
        return (
          (0 === e && "" === n) ||
            Os(this) ||
            this.getChildren().some(Or) ||
            (0 !== e && (t.textFormat = e), "" !== n && (t.textStyle = n)),
          t
        );
      };
      _proto10.updateFromJSON = function updateFromJSON(t) {
        return _Qn2.prototype.updateFromJSON
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
        var n = js(this, t, e);
        var r = n.getFirstChild();
        for (
          var _t176 = this.getFirstChild();
          _t176;
          _t176 = _t176.getNextSibling()
        ) {
          var _o47 = e.getElementByKey(_t176.getKey());
          null !== _o47 &&
            (null == r
              ? (n.insertChild(_o47), (r = _o47))
              : r !== _o47 && n.replaceChild(_o47, r),
            (r = r.nextSibling));
        }
      };
      return Wo;
    })(_Qn5);
    function Uo(t) {
      return t instanceof _Wo4;
    }
    function Yo(t, e, n) {
      var r = t.getNode();
      for (; r; ) {
        var _t177 = r.__key;
        if (e.has(_t177) && !n.has(_t177)) return !0;
        r = r.getParent();
      }
      return !1;
    }
    var _jo = (function (_Qn3) {
      function jo() {
        return _Qn3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(jo, _Qn3);
      var _proto11 = jo.prototype;
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
      return jo;
    })(_Qn5);
    function Ho(t) {
      return t instanceof _jo;
    }
    var _Jo = (function (_Wo) {
      function Jo() {
        var _this4;
        ((_this4 = _Wo.call(this, "root") || this),
          (_this4.__cachedText = null));
        return _this4;
      }
      babelHelpers.inheritsLoose(Jo, _Wo);
      Jo.getType = function getType() {
        return "root";
      };
      Jo.clone = function clone() {
        return new Jo();
      };
      var _proto12 = Jo.prototype;
      _proto12.getTopLevelElementOrThrow =
        function getTopLevelElementOrThrow() {
          t(51);
        };
      _proto12.getTextContent = function getTextContent() {
        var t = this.__cachedText;
        return null === t || (!No() && 0 !== Eo()._dirtyType)
          ? _Wo.prototype.getTextContent.call(this)
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
        for (var _e124 of r) Uo(_e124) || Ho(_e124) || t(282);
        return _Wo.prototype.splice.call(this, e, n, r);
      };
      Jo.importJSON = function importJSON(t) {
        return Gi().updateFromJSON(t);
      };
      _proto12.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return Jo;
    })(_Wo4);
    function Go(t) {
      return t instanceof _Jo;
    }
    function Vo(t) {
      return new _Qo(j(t._nodeMap));
    }
    function qo() {
      return new _Qo(new Map([["root", new _Jo()]]));
    }
    function Xo(e) {
      var n = e.exportJSON(),
        r = e.constructor;
      if ((n.type !== r.getType() && t(130, r.name), Uo(e))) {
        var _o48 = n.children;
        Array.isArray(_o48) || t(59, r.name);
        var _i33 = e.getChildren();
        for (var _t178 = 0; _t178 < _i33.length; _t178++) {
          var _e125 = Xo(_i33[_t178]);
          _o48.push(_e125);
        }
      }
      return n;
    }
    var _Qo = (function () {
      function Qo(t, e) {
        ((this._nodeMap = t),
          (this._selection = e || null),
          (this._flushSync = !1),
          (this._readOnly = !1));
      }
      var _proto13 = Qo.prototype;
      _proto13.isEmpty = function isEmpty() {
        return 1 === this._nodeMap.size && null === this._selection;
      };
      _proto13.read = function read(t, e) {
        return Po((e && e.editor) || null, this, t);
      };
      _proto13.clone = function clone(t) {
        var e = new Qo(this._nodeMap, void 0 === t ? this._selection : t);
        return ((e._readOnly = !0), e);
      };
      _proto13.toJSON = function toJSON() {
        return Po(null, this, function () {
          return { root: Xo(Gi()) };
        });
      };
      return Qo;
    })();
    var _Zo = (function (_Wo2) {
      function Zo() {
        return _Wo2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Zo, _Wo2);
      Zo.getType = function getType() {
        return "artificial";
      };
      var _proto14 = Zo.prototype;
      _proto14.createDOM = function createDOM(t) {
        return document.createElement("div");
      };
      return Zo;
    })(_Wo4);
    var _ti = (function (_Qn4) {
      function ti(t) {
        return _Qn4.call(this, t) || this;
      }
      babelHelpers.inheritsLoose(ti, _Qn4);
      ti.getType = function getType() {
        return "linebreak";
      };
      ti.clone = function clone(t) {
        return new ti(t.__key);
      };
      var _proto15 = ti.prototype;
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
      ti.importDOM = function importDOM() {
        return {
          br: function br(t) {
            return oi(t) || ii(t) ? null : { conversion: ei, priority: 0 };
          },
        };
      };
      ti.importJSON = function importJSON(t) {
        return ni().updateFromJSON(t);
      };
      return ti;
    })(_Qn5);
    function ei(t) {
      return { node: ni() };
    }
    function ni() {
      return bs(new _ti());
    }
    function ri(t) {
      return t instanceof _ti;
    }
    function oi(t) {
      var e = t.parentElement;
      if (null !== e && $s(e)) {
        var _n87 = e.firstChild;
        if (_n87 === t || (_n87.nextSibling === t && si(_n87))) {
          var _n88 = e.lastChild;
          if (_n88 === t || (_n88.previousSibling === t && si(_n88))) return !0;
        }
      }
      return !1;
    }
    function ii(t) {
      var e = t.parentElement;
      if (null !== e && $s(e)) {
        var _n89 = e.firstChild;
        if (_n89 === t || (_n89.nextSibling === t && si(_n89))) return !1;
        var _r62 = e.lastChild;
        if (_r62 === t || (_r62.previousSibling === t && si(_r62))) return !0;
      }
      return !1;
    }
    function si(t) {
      return Di(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    var _li = (function (_Wo3) {
      function li() {
        return _Wo3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(li, _Wo3);
      li.getType = function getType() {
        return "paragraph";
      };
      li.clone = function clone(t) {
        return new li(t.__key);
      };
      var _proto16 = li.prototype;
      _proto16.createDOM = function createDOM(t) {
        var e = document.createElement("p"),
          n = us(t.theme, "paragraph");
        if (void 0 !== n) {
          var _e$classList2;
          (_e$classList2 = e.classList).add.apply(_e$classList2, n);
        }
        return e;
      };
      _proto16.updateDOM = function updateDOM(t, e, n) {
        return !1;
      };
      li.importDOM = function importDOM() {
        return {
          p: function p(t) {
            return { conversion: ci, priority: 0 };
          },
        };
      };
      _proto16.exportDOM = function exportDOM(t) {
        var _Wo3$prototype$export = _Wo3.prototype.exportDOM.call(this, t),
          e = _Wo3$prototype$export.element;
        if (Fs(e)) {
          this.isEmpty() && e.append(document.createElement("br"));
          var _t179 = this.getFormatType();
          _t179 && (e.style.textAlign = _t179);
        }
        return { element: e };
      };
      li.importJSON = function importJSON(t) {
        return ai().updateFromJSON(t);
      };
      _proto16.exportJSON = function exportJSON() {
        var t = _Wo3.prototype.exportJSON.call(this);
        if (void 0 === t.textFormat || void 0 === t.textStyle) {
          var _e126 = this.getChildren().find(Or);
          _e126
            ? ((t.textFormat = _e126.getFormat()),
              (t.textStyle = _e126.getStyle()))
            : ((t.textFormat = this.getTextFormat()),
              (t.textStyle = this.getTextStyle()));
        }
        return t;
      };
      _proto16.insertNewAfter = function insertNewAfter(t, e) {
        var n = ai();
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
          (Or(t[0]) && "" === t[0].getTextContent().trim())
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return li;
    })(_Wo4);
    function ci(t) {
      var e = ai();
      if ((tl(e, t), Qs(t, e), "" === e.getFormatType())) {
        var _n90 = t.getAttribute("align");
        _n90 && _n90 && _n90 in w && e.setFormat(_n90);
      }
      return (Zs(e, t), { node: e });
    }
    function ai() {
      return bs(new _li());
    }
    function ui(t) {
      return t instanceof _li;
    }
    function fi(t) {
      console.warn(t);
    }
    var di = 0;
    function hi(t, e, n, r, o) {
      var i = t._keyToDOMMap;
      (i.clear(),
        (t._editorState = qo()),
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
      var s = t._observer;
      (null !== s && (s.disconnect(), (t._observer = null)),
        null !== e &&
          ((e.textContent = ""),
          (function (t, e) {
            var n = "__lexicalKey_" + e._key;
            delete t[n];
          })(e, t)),
        null !== n &&
          ((n.textContent = ""), i.set("root", n), Ui(n, t, "root")));
    }
    function gi(t) {
      var e = new Set(),
        n = new Set();
      var r = t;
      for (; r; ) {
        var _il3 = il(r),
          _t180 = _il3.ownNodeConfig,
          _o49 = r.transform;
        if (!n.has(_o49)) {
          n.add(_o49);
          var _t181 = r.transform();
          _t181 && e.add(_t181);
        }
        if (_t180) {
          var _n91 = _t180.$transform;
          (_n91 && e.add(_n91), (r = _t180["extends"]));
        } else {
          var _t182 = Object.getPrototypeOf(r);
          r =
            _t182.prototype instanceof _Qn5 && _t182 !== _Qn5 ? _t182 : void 0;
        }
      }
      return e;
    }
    var _i = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, r) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = Ni(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, r, o) {
        return Uo(t) && t.extractWithChild(e, n, r);
      },
      $getDOMSlot: function $getDOMSlot(t, e, n) {
        return t.getDOMSlot(e);
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return Uo(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, r) {
        return t.updateDOM(e, n, r._config);
      },
    };
    function pi(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function yi(t, e, n) {
      return (t.set(e, n), pi.bind(null, t, e));
    }
    var _mi = (function () {
      function mi(t, e, n, r, o, i, s, l, c) {
        ((this._createEditorArgs = c),
          (this._parentEditor = e),
          (this._rootElement = null),
          (this._editorState = t),
          (this._pendingEditorState = null),
          (this._compositionKey = null),
          (this._deferred = []),
          (this._keyToDOMMap = new _H()),
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
          (this._key = Zi()),
          (this._onError = o),
          (this._onWarn = i),
          (this._htmlConversions = s),
          (this._editable = l),
          (this._headless = null !== e && e._headless),
          (this._window = null),
          (this._blockCursorElement = null));
      }
      var _proto17 = mi.prototype;
      _proto17.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto17.registerUpdateListener = function registerUpdateListener(t) {
        return yi(this._listeners.update, t);
      };
      _proto17.registerEditableListener = function registerEditableListener(t) {
        return yi(this._listeners.editable, t);
      };
      _proto17.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return yi(this._listeners.decorator, t);
      };
      _proto17.registerTextContentListener =
        function registerTextContentListener(t) {
          return yi(this._listeners.textcontent, t);
        };
      _proto17.registerRootListener = function registerRootListener(t) {
        var _this13 = this;
        var e = this._listeners.root;
        return rc(yi(e, t, t(this._rootElement, null) || void 0), function () {
          return (function (t, e, n) {
            var r = t.get(e);
            (r && r(), t.set(e, e.apply(void 0, n) || void 0));
          })(e, t, [null, _this13._rootElement]);
        });
      };
      _proto17.registerCommand = function registerCommand(e, n, r) {
        void 0 === r && t(35);
        var o = this._commands;
        o.has(e) ||
          o.set(e, [new _U(), new _U(), new _U(), new _U(), new _U()]);
        var i = o.get(e);
        void 0 === i && t(36, String(e));
        var s = (function (t) {
            return 7 & t;
          })(r),
          l = i[s];
        return (
          s !== r ? l.addFront(n) : l.addBack(n),
          function () {
            (l["delete"](n),
              i.every(function (t) {
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
        var i = o.get(e);
        (void 0 === i && ((i = new Set()), o.set(e, i)), i.add(r));
        var s = n && n.skipInitialization;
        return (
          (void 0 !== s && s) || this.initializeMutationListener(e, r),
          function () {
            (i["delete"](r), 0 === i.size && o["delete"](e));
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
          r = qs(n).get(e.getType());
        if (!r) return;
        var o = new Map();
        for (var _t183 of r.keys()) o.set(_t183, "created");
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
          var _t184 = this.registerNodeTransformToKlass(o, e);
          r.push(_t184);
        }
        return (
          (function (t, e) {
            var n = qs(t.getEditorState()),
              r = [];
            for (var _t185 of e) {
              var _e127 = n.get(_t185);
              _e127 && r.push(_e127);
            }
            if (0 === r.length) return;
            t.update(
              function () {
                for (var _t186 of r)
                  for (var _e128 of _t186.keys()) {
                    var _t187 = $i(_e128);
                    _t187 && _t187.markDirty();
                  }
              },
              null === t._pendingEditorState ? { tag: Zn } : void 0,
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
        return _s(this, t, e);
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
          var _n92 = us(this._config.theme, "root"),
            _r63 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            hi(this, e, t, _r63, { preserveUpdateQueue: !0 }),
            null !== e &&
              (this._config.disableEvents || Jn(e),
              null != _n92 &&
                (_e$classList3 = e.classList).remove.apply(
                  _e$classList3,
                  _n92,
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e129 = Ts(t),
              _r64 = t.style;
            ((_r64.userSelect = "text"),
              (_r64.whiteSpace = "pre-wrap"),
              (_r64.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e129),
              (this._dirtyType = 2),
              rt(this),
              this._updateTags.add(Zn),
              Fo(this),
              this._config.disableEvents ||
                (function (t, e, _yn$get) {
                  var n = t.ownerDocument;
                  pn.set(t, n);
                  var r = (_yn$get = yn.get(n)) != null ? _yn$get : 0;
                  (r < 1 && n.addEventListener("selectionchange", Un),
                    yn.set(n, r + 1),
                    (t.__lexicalEditor = e));
                  var o = $n(t);
                  var _loop2 = function _loop2() {
                    var _an$_n = an[_n93],
                      r = _an$_n[0],
                      i = _an$_n[1],
                      s =
                        "function" == typeof i
                          ? function (t) {
                              jn(t) ||
                                (Yn(t),
                                (e.isEditable() || "click" === r) && i(t, e));
                            }
                          : function (t) {
                              if (jn(t)) return;
                              Yn(t);
                              var n = e.isEditable();
                              switch (r) {
                                case "cut":
                                  return n && _s(e, Qe, t);
                                case "copy":
                                  return _s(e, Xe, t);
                                case "paste":
                                  return n && _s(e, Ne, t);
                                case "dragstart":
                                  return n && _s(e, Ge, t);
                                case "dragover":
                                  return n && _s(e, Ve, t);
                                case "dragend":
                                  return n && _s(e, qe, t);
                                case "focus":
                                  return n && _s(e, on, t);
                                case "blur":
                                  return n && _s(e, sn, t);
                                case "drop":
                                  return n && _s(e, He, t);
                              }
                            };
                    (t.addEventListener(r, s),
                      o.push(function () {
                        t.removeEventListener(r, s);
                      }));
                  };
                  for (var _n93 = 0; _n93 < an.length; _n93++) {
                    _loop2();
                  }
                })(t, this),
              null != _n92 &&
                (_t$classList = t.classList).add.apply(_t$classList, _n92));
          } else ((this._window = null), this._updateTags.add(Zn), Fo(this));
          Ro("root", this, !1, t, e);
        }
      };
      _proto17.getElementByKey = function getElementByKey(t) {
        return this._keyToDOMMap.get(t) || null;
      };
      _proto17.getEditorState = function getEditorState() {
        return this._editorState;
      };
      _proto17.setEditorState = function setEditorState(e, n) {
        e.isEmpty() && t(38);
        var r = e;
        (r._readOnly &&
          ((r = Vo(e)),
          (r._selection = e._selection ? e._selection.clone() : null)),
          nt(this));
        var o = this._pendingEditorState,
          i = void 0 !== n ? n.tag : null;
        (null === o ||
          o.isEmpty() ||
          (null != i && this._updateTags.add(i), Fo(this)),
          (this._pendingEditorState = r),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          null != i && this._updateTags.add(i),
          this._updating || Fo(this));
      };
      _proto17.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var r = qo(),
            o = _o,
            i = yo,
            s = po,
            l = e._dirtyElements,
            c = e._dirtyLeaves,
            a = e._cloneNotNeeded,
            u = e._dirtyType;
          ((e._dirtyElements = new Map()),
            (e._dirtyLeaves = new Set()),
            (e._cloneNotNeeded = new Set()),
            (e._dirtyType = 0),
            (_o = r),
            (yo = !1),
            (po = e),
            Ci(null));
          try {
            var _o50 = e._nodes;
            (Io(t.root, _o50), n && n(), (r._readOnly = !0));
          } catch (t) {
            t instanceof Error && e._onError(t);
          } finally {
            ((e._dirtyElements = l),
              (e._dirtyLeaves = c),
              (e._cloneNotNeeded = a),
              (e._dirtyType = u),
              (_o = o),
              (yo = i),
              (po = s));
          }
          return r;
        })("string" == typeof t ? JSON.parse(t) : t, this, e);
      };
      _proto17.read = function read(t) {
        return (Fo(this), this.getEditorState().read(t, { editor: this }));
      };
      _proto17.readPending = function readPending(t) {
        return (this._pendingEditorState || this._editorState).read(t, {
          editor: this,
        });
      };
      _proto17.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : zo(t, e, n);
        })(this, t, e);
      };
      _proto17.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          $o(this, function () {
            var r = Zr(),
              o = Gi();
            (null !== r
              ? r.dirty || Vi(r.clone())
              : 0 !== o.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? o.selectStart()
                  : o.selectEnd()),
              xs("focus"),
              Cs(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto17.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = Is(this._window);
        null !== e && e.removeAllRanges();
      };
      _proto17.isEditable = function isEditable() {
        return this._editable;
      };
      _proto17.setEditable = function setEditable(t) {
        this._editable !== t &&
          ((this._editable = t), Ro("editable", this, !0, t));
      };
      _proto17.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON() };
      };
      return mi;
    })();
    _mi.version = W;
    var xi = null;
    function Ci(t) {
      xi = t;
    }
    var Si = 1;
    function Ti(e, n) {
      var r = Ni(e, n);
      return (void 0 === r && t(30, n), r);
    }
    function Ni(t, e) {
      return t._nodes.get(e);
    }
    var vi =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function ki(t) {
      var e = document.activeElement;
      if (!Fs(e)) return !1;
      var n = e.nodeName;
      return (
        Ho(ji(t)) &&
        ("INPUT" === n ||
          "TEXTAREA" === n ||
          ("true" === e.contentEditable && null == Mi(e)))
      );
    }
    function Oi(t, e, n) {
      var r = t.getRootElement();
      try {
        return (
          null !== r &&
          r.contains(e) &&
          r.contains(n) &&
          null !== e &&
          !ki(e) &&
          bi(e) === t
        );
      } catch (t) {
        return !1;
      }
    }
    function Ei(t) {
      return t instanceof _mi;
    }
    function bi(t) {
      var e = t;
      for (; null != e; ) {
        var _t188 = Mi(e);
        if (Ei(_t188)) return _t188;
        e = ys(e);
      }
      return null;
    }
    function Mi(t) {
      return t ? t.__lexicalEditor : null;
    }
    function Ai(t) {
      return Ar(t) || t.isToken();
    }
    function wi(t) {
      return Ai(t) || t.isSegmented();
    }
    function Di(t) {
      return Rs(t) && 3 === t.nodeType;
    }
    function Ii(t) {
      return Rs(t) && 9 === t.nodeType;
    }
    function Pi(t) {
      var e = t;
      for (; null != e; ) {
        if (Di(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function Fi(t, e, n) {
      var r = M[e];
      if (null !== n && (t & r) === (n & r)) return t;
      var o = t ^ r;
      return (
        "subscript" === e
          ? (o &= ~M.superscript)
          : "superscript" === e
            ? (o &= ~M.subscript)
            : "lowercase" === e
              ? ((o &= ~M.uppercase), (o &= ~M.capitalize))
              : "uppercase" === e
                ? ((o &= ~M.lowercase), (o &= ~M.capitalize))
                : "capitalize" === e &&
                  ((o &= ~M.lowercase), (o &= ~M.uppercase)),
        o
      );
    }
    function Ri(t, e) {
      var n = (function () {
        var t = xi;
        return ((xi = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (vo(), ko());
      var r = Eo(),
        o = Oo(),
        i = "" + Si++;
      (o._nodeMap.set(i, t),
        Uo(t) ? r._dirtyElements.set(i, !0) : r._dirtyLeaves.add(i),
        r._cloneNotNeeded.add(i),
        0 === r._dirtyType && (r._dirtyType = 1),
        (t.__key = i));
    }
    function Li(t) {
      var e = t.getParent();
      if (null !== e) {
        var _n94 = t.getWritable(),
          _r65 = e.getWritable(),
          _o51 = t.getPreviousSibling(),
          _i34 = t.getNextSibling(),
          _s19 = null !== _i34 ? _i34.__key : null,
          _l14 = null !== _o51 ? _o51.__key : null,
          _c9 = null !== _o51 ? _o51.getWritable() : null,
          _a10 = null !== _i34 ? _i34.getWritable() : null;
        (null === _o51 && (_r65.__first = _s19),
          null === _i34 && (_r65.__last = _l14),
          null !== _c9 && (_c9.__next = _s19),
          null !== _a10 && (_a10.__prev = _l14),
          (_n94.__prev = null),
          (_n94.__next = null),
          (_n94.__parent = null),
          _r65.__size--);
      }
    }
    function Ki(e) {
      (ko(), qn(e) && t(323, e.__key, e.__type));
      var n = e.getLatest(),
        r = n.__parent,
        o = Oo(),
        i = Eo(),
        s = o._nodeMap,
        l = i._dirtyElements;
      null !== r &&
        (function (t, e, n) {
          var r = t;
          for (; null !== r; ) {
            if (n.has(r)) return;
            var _t189 = e.get(r);
            if (void 0 === _t189) break;
            (n.set(r, !1), (r = _t189.__parent));
          }
        })(r, s, l);
      var c = n.__key;
      (0 === i._dirtyType && (i._dirtyType = 1),
        Uo(e) ? l.set(c, !0) : i._dirtyLeaves.add(c));
    }
    function Bi(t) {
      vo();
      var e = Eo(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t190 = $i(n);
          null !== _t190 && _t190.getWritable();
        }
        if (null !== t) {
          var _e130 = $i(t);
          null !== _e130 && _e130.getWritable();
        }
      }
    }
    function zi() {
      if (No()) return null;
      return Eo()._compositionKey;
    }
    function $i(t, e) {
      var n = (e || Oo())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function Wi(t, e) {
      var n = Yi(t, Eo());
      return void 0 !== n ? $i(n, e) : null;
    }
    function Ui(t, e, n) {
      t["__lexicalKey_" + e._key] = n;
    }
    function Yi(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function ji(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t191 = Wi(n, e);
        if (null !== _t191) return _t191;
        n = ys(n);
      }
      return null;
    }
    function Hi(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function Ji(t) {
      return t.read(function () {
        return Gi().getTextContent();
      });
    }
    function Gi() {
      return Oo()._nodeMap.get("root");
    }
    function Vi(t) {
      vo();
      var e = Oo();
      (null !== t && ((t.dirty = !0), t.setCachedNodes(null)),
        (e._selection = t));
    }
    function qi(t) {
      var e = (function (t, e) {
        var n = t;
        for (; null != n; ) {
          var _t192 = Yi(n, e);
          if (void 0 !== _t192) return _t192;
          n = ys(n);
        }
        return null;
      })(t, Eo());
      return null === e ? null : $i(e);
    }
    function Xi(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function Qi(t) {
      var e = [];
      for (var _n95 = t; null !== _n95; _n95 = _n95._parentEditor) e.push(_n95);
      return e;
    }
    function Zi() {
      return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substring(0, 5);
    }
    function ts(t) {
      return Di(t) ? t.nodeValue : null;
    }
    function es(t, e, n) {
      var r = Is(Ns(e));
      if (null === r) return;
      var o = r.anchorNode;
      var i = r.anchorOffset,
        s = r.focusOffset;
      if (null !== o) {
        var _e131 = ts(o);
        var _r66 = ji(o);
        if (null !== _e131 && Or(_r66)) {
          if ((_e131 === T || _e131 === v) && n) {
            var _t193 = n.length;
            ((_e131 = n), (i = _t193), (s = _t193));
          }
          null !== _e131 && ns(_r66, _e131, i, s, t);
        }
      }
    }
    function ns(t, e, n, r, o) {
      var i = t;
      if (i.isAttached() && (o || !i.isDirty())) {
        var _l15 = i.isComposing();
        var _a11 = e;
        if (
          (_l15 || o) &&
          (e.endsWith(T) && (_a11 = e.slice(0, -T.length)), o)
        ) {
          var _t194 = v;
          var _e132;
          for (; -1 !== (_e132 = _a11.indexOf(_t194)); )
            ((_a11 = _a11.slice(0, _e132) + _a11.slice(_e132 + _t194.length)),
              null !== n &&
                n > _e132 &&
                (n = Math.max(_e132, n - _t194.length)),
              null !== r &&
                r > _e132 &&
                (r = Math.max(_e132, r - _t194.length)));
        }
        var _u9 = i.getTextContent();
        if (o || _a11 !== _u9) {
          if ("" === _a11) {
            if ((Bi(null), c || s || f)) i.remove();
            else {
              var _t195 = Eo();
              setTimeout(function () {
                _t195.update(function () {
                  i.isAttached() && i.remove();
                });
              }, 20);
            }
            return;
          }
          var _e133 = i.getParent(),
            _o52 = to(),
            _u0 = i.getTextContentSize(),
            _d7 = zi(),
            _h6 = i.getKey();
          if (
            i.isToken() ||
            (null !== _d7 && _h6 === _d7 && !_l15) ||
            (Rr(_o52) &&
              ((null !== _e133 &&
                !_e133.canInsertTextBefore() &&
                0 === _o52.anchor.offset) ||
                (_o52.anchor.key === t.__key &&
                  0 === _o52.anchor.offset &&
                  !i.canInsertTextBefore() &&
                  !_l15) ||
                (_o52.focus.key === t.__key &&
                  _o52.focus.offset === _u0 &&
                  !i.canInsertTextAfter() &&
                  !_l15)))
          )
            return void i.markDirty();
          var _g5 = Zr();
          if (!Rr(_g5) || null === n || null === r)
            return void rs(i, _a11, _g5);
          if ((_g5.setTextNodeRange(i, n, i, r), i.isSegmented())) {
            var _t196 = kr(i.getTextContent());
            (i.replace(_t196), (i = _t196));
          }
          rs(i, _a11, _g5);
        }
      }
    }
    function rs(t, e, n) {
      if ((t.setTextContent(e), Rr(n))) {
        var _e134 = t.getKey();
        var _r67 = !1;
        for (var _o53 of ["anchor", "focus"]) {
          var _i35 = n[_o53];
          "text" === _i35.type &&
            _i35.key === _e134 &&
            ((_i35.offset = vl(t, _i35.offset, "clamp")), (_r67 = !0));
        }
        _r67 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
      }
    }
    function os(t, e, n) {
      var r = e[n] || !1;
      return "any" === r || r === t[n];
    }
    function is(t, e) {
      return (
        os(t, e, "altKey") &&
        os(t, e, "ctrlKey") &&
        os(t, e, "shiftKey") &&
        os(t, e, "metaKey")
      );
    }
    function ss(t, e, n) {
      if (!is(t, n)) return !1;
      if (t.key.toLowerCase() === e.toLowerCase()) return !0;
      if (e.length > 1) return !1;
      if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
      if (t.code.startsWith("Digit") && /^\d$/.test(e))
        return t.code === "Digit" + e;
      var r = "Key" + e.toUpperCase();
      return t.code === r;
    }
    var ls = { ctrlKey: !r, metaKey: r },
      cs = { altKey: r, ctrlKey: !r };
    function as(t) {
      return "Backspace" === t.key;
    }
    function us(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        r = n[e];
      if (void 0 !== r) return r;
      var o = t[e];
      if ("string" == typeof o) {
        var _t197 = nc(o);
        return ((n[e] = _t197), _t197);
      }
      return o;
    }
    function fs(e, n, r, o, i) {
      if (0 === r.size) return;
      var s = o.__type,
        l = o.__key,
        c = n.get(s);
      void 0 === c && t(33, s);
      var a = c.klass;
      var u = e.get(a);
      void 0 === u && ((u = new Map()), e.set(a, u));
      var f = u.get(l),
        d = "destroyed" === f && "created" === i;
      (void 0 === f || d) && u.set(l, d ? "updated" : i);
    }
    function ds(t, e, n) {
      var r = t.getParent();
      var o = n,
        i = t;
      return (
        null !== r &&
          (e && 0 === n
            ? ((o = i.getIndexWithinParent()), (i = r))
            : e ||
              n !== i.getChildrenSize() ||
              ((o = i.getIndexWithinParent() + 1), (i = r))),
        i.getChildAtIndex(e ? o - 1 : o)
      );
    }
    function hs(t, e) {
      var n = t.offset;
      if ("element" === t.type) {
        return ds(t.getNode(), e, n);
      }
      {
        var _r68 = t.getNode();
        if ((e && 0 === n) || (!e && n === _r68.getTextContentSize())) {
          var _t198 = e ? _r68.getPreviousSibling() : _r68.getNextSibling();
          return null === _t198
            ? ds(
                _r68.getParentOrThrow(),
                e,
                _r68.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t198;
        }
      }
      return null;
    }
    function gs(t) {
      var e = Ns(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function _s(t, e, n) {
      return Lo(t, e, n, t);
    }
    function ps(e, n) {
      var r = e._keyToDOMMap.get(n);
      return (void 0 === r && t(75, n), r);
    }
    function ys(t) {
      var e = t.assignedSlot || t.parentElement;
      return Ls(e) ? e.host : e;
    }
    function ms(t) {
      return Ii(t) ? t : Fs(t) ? t.ownerDocument : null;
    }
    function xs(t) {
      vo();
      Eo()._updateTags.add(t);
    }
    function Cs(t) {
      vo();
      Eo()._deferred.push(t);
    }
    function Ss(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function Ts(t) {
      var e = ms(t);
      return e ? e.defaultView : null;
    }
    function Ns(e) {
      var n = e._window;
      return (null === n && t(78), n);
    }
    function vs(t) {
      return (Uo(t) && t.isInline()) || (Ho(t) && t.isInline());
    }
    function ks(t) {
      var e = t.getParentOrThrow();
      for (; null !== e; ) {
        if (Os(e)) return e;
        e = e.getParentOrThrow();
      }
      return e;
    }
    function Os(t) {
      return Go(t) || (Uo(t) && t.isShadowRoot());
    }
    function Es(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t);
      return (
        Ri(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function bs(e) {
      var n = Eo(),
        r = e.getType(),
        o = Ni(n, r);
      void 0 === o && t(200, e.constructor.name, r);
      var i = o.replace,
        s = o.replaceWithKlass;
      if (null !== i) {
        var _n96 = i(e),
          _o54 = _n96.constructor;
        return (
          null !== s
            ? _n96 instanceof s ||
              t(
                201,
                s.name,
                s.getType(),
                _o54.name,
                _o54.getType(),
                e.constructor.name,
                r,
              )
            : (_n96 instanceof e.constructor && _o54 !== e.constructor) ||
              t(202, _o54.name, _o54.getType(), e.constructor.name, r),
          _n96.__key === e.__key &&
            t(203, e.constructor.name, r, _o54.name, _o54.getType()),
          _n96
        );
      }
      return e;
    }
    function Ms(e, n) {
      !Go(e.getParent()) || Uo(n) || Ho(n) || t(99);
    }
    function As(e) {
      var n = $i(e);
      return (null === n && t(63, e), n);
    }
    function ws(t) {
      return (Ho(t) || (Uo(t) && !t.canBeEmpty())) && !t.isInline();
    }
    function Ds(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var r = t.parentElement;
      null !== r && r.removeChild(t);
    }
    function Is(t) {
      return e ? (t || window).getSelection() : null;
    }
    function Ps(t) {
      var e = Ts(t);
      return e ? e.getSelection() : null;
    }
    function Fs(t) {
      return Rs(t) && 1 === t.nodeType;
    }
    function Rs(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function Ls(t) {
      return Rs(t) && 11 === t.nodeType;
    }
    var Ks =
      /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
    function Bs(t) {
      return (
        !(!Fs(t) || !t.style.display.startsWith("inline")) ||
        Ks.test(t.nodeName)
      );
    }
    var zs =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function $s(t) {
      return (
        (!Fs(t) || !t.style.display.startsWith("inline")) && zs.test(t.nodeName)
      );
    }
    function Ws(t) {
      if (Ho(t) && !t.isInline()) return !0;
      if (!Uo(t) || Os(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || ri(e) || Or(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function Us() {
      return Eo();
    }
    function Ys(t) {
      if (t === void 0) {
        t = Us();
      }
      return t._config.dom || _i;
    }
    function js(e, n, r) {
      if (r === void 0) {
        r = Us();
      }
      var o = Ys(r).$getDOMSlot(e, n, r);
      return (Uo(e) && (Hs(o) || t(344, e.getKey(), e.getType())), o);
    }
    function Hs(t) {
      return t instanceof _B;
    }
    function Js(t, e, n) {
      if (n === void 0) {
        n = Us();
      }
      return Pi(js(t, e, n).element);
    }
    var Gs = new WeakMap(),
      Vs = new Map();
    function qs(e) {
      if (!e._readOnly && e.isEmpty()) return Vs;
      e._readOnly || t(192);
      var n = Gs.get(e);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref27 of t._nodeMap) {
              var _n97 = _ref27[0];
              var _r69 = _ref27[1];
              {
                var _t199 = _r69.__type;
                var _o55 = e.get(_t199);
                (_o55 || ((_o55 = new Map()), e.set(_t199, _o55)),
                  _o55.set(_n97, _r69));
              }
            }
            return e;
          })(e)),
          Gs.set(e, n)),
        n
      );
    }
    function Xs(t) {
      var e = t.constructor.clone(t);
      return (e.afterCloneFrom(t), e);
    }
    function Qs(t, e) {
      var n = t.getAttribute("data-lexical-indent");
      if (null !== n) {
        var _t200 = parseInt(n, 10);
        if (Number.isFinite(_t200) && _t200 >= 0)
          return void e.setIndent(_t200);
      }
      var r = parseInt(t.style.paddingInlineStart, 10) || 0,
        o = Math.round(r / 40);
      e.setIndent(o);
    }
    function Zs(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function tl(t, e) {
      var n = e.style.textAlign;
      return n && n in w ? t.setFormat(n) : t;
    }
    function el(t, e) {
      ((t.__lexicalUnmanaged = !0),
        e &&
          void 0 !== e.captureSelection &&
          (t.__lexicalCapturedSelection = e.captureSelection));
    }
    function nl(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function rl(t, e) {
      var n = t;
      for (; null != n; ) {
        if (!0 === n.__lexicalCapturedSelection) return !0;
        if (void 0 !== Yi(n, e)) return !1;
        n = ys(n);
      }
      return !1;
    }
    function ol(t, e) {
      return (
        (function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        })(t, e) && t[e] !== _Qn5[e]
      );
    }
    function il(e) {
      var n = F in e.prototype ? e.prototype[F]() : void 0,
        r = (function (e) {
          if (!(e === _Qn5 || e.prototype instanceof _Qn5)) {
            var _n98 = "<unknown>",
              _r70 = "<unknown>";
            try {
              _n98 = e.getType();
            } catch (t) {}
            try {
              _mi.version && (_r70 = JSON.parse(_mi.version));
            } catch (t) {}
            t(290, e.name, _n98, _r70);
          }
          return e === _jo || e === _Wo4 || e === _Qn5;
        })(e),
        o = !r && ol(e, "getType") ? e.getType() : void 0;
      var i,
        s = o;
      if (n)
        if (o) i = n[o];
        else {
          for (var _ref29 of Object.entries(n)) {
            var _t201 = _ref29[0];
            var _e135 = _ref29[1];
            ((s = _t201), (i = _e135));
          }
          if (!i)
            for (var _t202 of Object.getOwnPropertySymbols(n)) {
              var _e136 = n[_t202];
              if (_e136) {
                i = _e136;
                break;
              }
            }
        }
      if (
        !r &&
        s &&
        (ol(e, "getType") ||
          (e.getType = function () {
            return s;
          }),
        ol(e, "clone") ||
          (e.clone = function (t) {
            return (Ci(t), new e());
          }),
        ol(e, "importJSON") ||
          (e.importJSON =
            (i && i.$importJSON) ||
            function (t) {
              return new e().updateFromJSON(t);
            }),
        !ol(e, "importDOM") && i)
      ) {
        var _i36 = i,
          _t203 = _i36.importDOM;
        _t203 &&
          (e.importDOM = function () {
            return _t203;
          });
      }
      return { ownNodeConfig: i, ownNodeType: s };
    }
    var sl = function sl(t, e) {
      var n = t;
      for (; null != n && !Go(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function ll(e, n) {
      var r = [];
      var o = e.__first;
      for (; null !== o; ) {
        var _e137 = null === n ? $i(o) : n.get(o);
        (null == _e137 && t(174), r.push(o), (o = _e137.__next));
      }
      return r;
    }
    var cl = { next: "previous", previous: "next" };
    var _al4 = (function () {
      function al(t) {
        this.origin = t;
      }
      var _proto18 = al.prototype;
      _proto18[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return Pl({
            hasNext: yl,
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
        return Tl(this.getNodeAtCaret(), this.direction);
      };
      _proto18.getSiblingCaret = function getSiblingCaret() {
        return Tl(this.origin, this.direction);
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
        var i = this;
        var s = this.getParentAtCaret(),
          l = new Map();
        for (
          var _t204 = i.getAdjacentCaret();
          null !== _t204 && l.size < e;
          _t204 = _t204.getAdjacentCaret()
        ) {
          var _e138 = _t204.origin.getWritable();
          l.set(_e138.getKey(), _e138);
        }
        for (var _e139 of o) {
          if (l.size > 0) {
            var _n99 = i.getNodeAtCaret();
            if (_n99) {
              if (
                (l["delete"](_n99.getKey()),
                l["delete"](_e139.getKey()),
                _n99.is(_e139) || i.origin.is(_e139))
              );
              else {
                var _t205 = _e139.getParent();
                (_t205 && _t205.is(s) && _e139.remove(), _n99.replace(_e139));
              }
            } else null === _n99 && t(263, Array.from(l).join(" "));
          } else i.insert(_e139);
          i = Tl(_e139, this.direction);
        }
        for (var _t206 of l.values()) _t206.remove();
        return this;
      };
      return al;
    })();
    var _ul3 = (function (_al) {
      function ul() {
        var _this5;
        for (
          var _len5 = arguments.length, args = new Array(_len5), _key5 = 0;
          _key5 < _len5;
          _key5++
        ) {
          args[_key5] = arguments[_key5];
        }
        return (
          ((_this5 = _al.call.apply(_al, [this].concat(args)) || this),
          (_this5.type = "child"),
          babelHelpers.assertThisInitialized(_this5)) ||
          babelHelpers.assertThisInitialized(_this5)
        );
      }
      babelHelpers.inheritsLoose(ul, _al);
      var _proto19 = ul.prototype;
      _proto19.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Ol(t, this.direction);
      };
      _proto19.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Tl(hl(this.getParentAtCaret(), t), this.direction);
      };
      _proto19.getFlipped = function getFlipped() {
        var t = dl(this.direction);
        return Tl(this.getNodeAtCaret(), t) || Ol(this.origin, t);
      };
      _proto19.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto19.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto19.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof ul &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto19.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return ul;
    })(_al4);
    var fl = { root: Go, shadowRoot: Os };
    function dl(t) {
      return cl[t];
    }
    function hl(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return fl[e](t) ? null : t;
    }
    var _gl3 = (function (_al2) {
      function gl() {
        var _this6;
        for (
          var _len6 = arguments.length, args = new Array(_len6), _key6 = 0;
          _key6 < _len6;
          _key6++
        ) {
          args[_key6] = arguments[_key6];
        }
        return (
          ((_this6 = _al2.call.apply(_al2, [this].concat(args)) || this),
          (_this6.type = "sibling"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(gl, _al2);
      var _proto20 = gl.prototype;
      _proto20.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Tl(t, this.direction);
      };
      _proto20.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto20.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto20.getChildCaret = function getChildCaret() {
        return Uo(this.origin) ? Ol(this.origin, this.direction) : null;
      };
      _proto20.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return Tl(hl(this.getParentAtCaret(), t), this.direction);
      };
      _proto20.getFlipped = function getFlipped() {
        var t = dl(this.direction);
        return (
          Tl(this.getNodeAtCaret(), t) || Ol(this.origin.getParentOrThrow(), t)
        );
      };
      _proto20.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof gl &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto20.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof gl || t instanceof _l17) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return gl;
    })(_al4);
    var _l17 = (function (_al3) {
      function _l(t, e) {
        var _this7;
        ((_this7 = _al3.call(this, t) || this),
          (_this7.type = "text"),
          (_this7.offset = e));
        return _this7;
      }
      babelHelpers.inheritsLoose(_l, _al3);
      var _proto21 = _l.prototype;
      _proto21.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Nl(t, this.direction, this.offset);
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
        return Tl(hl(this.getParentAtCaret(), t), this.direction);
      };
      _proto21.getFlipped = function getFlipped() {
        return Nl(this.origin, dl(this.direction), this.offset);
      };
      _proto21.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof _l &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto21.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _gl3 || t instanceof _l) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto21.getSiblingCaret = function getSiblingCaret() {
        return Tl(this.origin, this.direction);
      };
      return _l;
    })(_al4);
    function pl(t) {
      return t instanceof _l17;
    }
    function yl(t) {
      return t instanceof _gl3;
    }
    function ml(t) {
      return t instanceof _ul3;
    }
    var xl = {
        next: (function (_l2) {
          function _class() {
            var _this8;
            for (
              var _len7 = arguments.length, args = new Array(_len7), _key7 = 0;
              _key7 < _len7;
              _key7++
            ) {
              args[_key7] = arguments[_key7];
            }
            return (
              ((_this8 = _l2.call.apply(_l2, [this].concat(args)) || this),
              (_this8.direction = "next"),
              babelHelpers.assertThisInitialized(_this8)) ||
              babelHelpers.assertThisInitialized(_this8)
            );
          }
          babelHelpers.inheritsLoose(_class, _l2);
          var _proto22 = _class.prototype;
          _proto22.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto22.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_l17),
        previous: (function (_l3) {
          function _class3() {
            var _this9;
            for (
              var _len8 = arguments.length, args = new Array(_len8), _key8 = 0;
              _key8 < _len8;
              _key8++
            ) {
              args[_key8] = arguments[_key8];
            }
            return (
              ((_this9 = _l3.call.apply(_l3, [this].concat(args)) || this),
              (_this9.direction = "previous"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class3, _l3);
          var _proto23 = _class3.prototype;
          _proto23.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto23.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_l17),
      },
      Cl = {
        next: (function (_gl) {
          function _class5() {
            var _this0;
            for (
              var _len9 = arguments.length, args = new Array(_len9), _key9 = 0;
              _key9 < _len9;
              _key9++
            ) {
              args[_key9] = arguments[_key9];
            }
            return (
              ((_this0 = _gl.call.apply(_gl, [this].concat(args)) || this),
              (_this0.direction = "next"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class5, _gl);
          var _proto24 = _class5.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_gl3),
        previous: (function (_gl2) {
          function _class7() {
            var _this1;
            for (
              var _len0 = arguments.length, args = new Array(_len0), _key0 = 0;
              _key0 < _len0;
              _key0++
            ) {
              args[_key0] = arguments[_key0];
            }
            return (
              ((_this1 = _gl2.call.apply(_gl2, [this].concat(args)) || this),
              (_this1.direction = "previous"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class7, _gl2);
          var _proto25 = _class7.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_gl3),
      },
      Sl = {
        next: (function (_ul) {
          function _class9() {
            var _this10;
            for (
              var _len1 = arguments.length, args = new Array(_len1), _key1 = 0;
              _key1 < _len1;
              _key1++
            ) {
              args[_key1] = arguments[_key1];
            }
            return (
              ((_this10 = _ul.call.apply(_ul, [this].concat(args)) || this),
              (_this10.direction = "next"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class9, _ul);
          var _proto26 = _class9.prototype;
          _proto26.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto26.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_ul3),
        previous: (function (_ul2) {
          function _class1() {
            var _this11;
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
              ((_this11 = _ul2.call.apply(_ul2, [this].concat(args)) || this),
              (_this11.direction = "previous"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class1, _ul2);
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
        })(_ul3),
      };
    function Tl(t, e) {
      return t ? new Cl[e](t) : null;
    }
    function Nl(t, e, n) {
      return t ? new xl[e](t, vl(t, n)) : null;
    }
    function vl(t, e, n) {
      if (n === void 0) {
        n = "error";
      }
      var r = t.getTextContentSize();
      var o = "next" === e ? r : "previous" === e ? 0 : e;
      return (
        (o < 0 || o > r) &&
          ("clamp" !== n &&
            (function (t) {
              var n = new URL("https://lexical.dev/docs/error"),
                r = new URLSearchParams();
              r.append("code", t);
              for (
                var _len11 = arguments.length,
                  e = new Array(_len11 > 1 ? _len11 - 1 : 0),
                  _key11 = 1;
                _key11 < _len11;
                _key11++
              ) {
                e[_key11 - 1] = arguments[_key11];
              }
              for (var _t207 of e) r.append("v", _t207);
              ((n.search = r.toString()),
                console.warn(
                  "Minified Lexical warning #" +
                    t +
                    "; visit " +
                    n.toString() +
                    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
                ));
            })(284, String(e), String(r), t.getKey()),
          (o = o < 0 ? 0 : r)),
        o
      );
    }
    function kl(t, e) {
      return new _Al(t, e);
    }
    function Ol(t, e) {
      return Uo(t) ? new Sl[e](t) : null;
    }
    function El(t) {
      return (t && t.getChildCaret()) || t;
    }
    function bl(t) {
      return t && El(t.getAdjacentCaret());
    }
    var _Ml = (function () {
      function Ml(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto28 = Ml.prototype;
      _proto28.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new Ml(t, e, this.direction);
      };
      _proto28.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto28.getTextSlices = function getTextSlices() {
        var _this14 = this;
        var t = function t(_t208) {
            var e = _this14[_t208].getLatest();
            return pl(e)
              ? (function (t, e) {
                  var n = t.direction,
                    r = t.origin,
                    o = vl(r, "focus" === e ? dl(n) : n);
                  return kl(t, o - t.offset);
                })(e, _t208)
              : null;
          },
          e = t("anchor"),
          n = t("focus");
        if (e && n) {
          var _t209 = e.caret,
            _r71 = n.caret;
          if (_t209.isSameNodeCaret(_r71))
            return [kl(_t209, _r71.offset - _t209.offset), null];
        }
        return [e, n];
      };
      _proto28.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = pl(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          r = pl(n),
          o = function o(e) {
            return e.isSameNodeCaret(n) ? null : bl(e) || e.getParentCaret(t);
          };
        return Pl({
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
      return Ml;
    })();
    var _Al = (function () {
      function Al(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto29 = Al.prototype;
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
        return Nl(t.setTextContent(o.slice(0, n) + o.slice(r)), e, n);
      };
      return Al;
    })();
    function wl(t) {
      return Il(t, Tl(Gi(), t.direction));
    }
    function Dl(t) {
      return Il(t, t);
    }
    function Il(e, n) {
      return (
        e.direction !== n.direction && t(265),
        new _Ml(e, n, e.direction)
      );
    }
    function Pl(t) {
      var _ref30;
      var e = t.initial,
        n = t.hasNext,
        r = t.step,
        o = t.map;
      var i = e;
      return (
        (_ref30 = {}),
        (_ref30[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
          function () {
            return this;
          }),
        (_ref30.next = function next() {
          if (!n(i)) return { done: !0, value: void 0 };
          var t = { done: !1, value: o(i) };
          return ((i = r(i)), t);
        }),
        _ref30
      );
    }
    function Fl(e, n) {
      var r = Bl(e.origin, n.origin);
      switch (
        (null === r && t(275, e.origin.getKey(), n.origin.getKey()), r.type)
      ) {
        case "same": {
          var _t210 = "text" === e.type,
            _r72 = "text" === n.type;
          return _t210 && _r72
            ? (function (t, e) {
                return Math.sign(t - e);
              })(e.offset, n.offset)
            : e.type === n.type
              ? 0
              : _t210
                ? -1
                : _r72
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
          return Rl(r);
      }
    }
    function Rl(t) {
      var e = t.a,
        n = t.b,
        r = e.__key,
        o = n.__key;
      var i = e,
        s = n;
      for (; i && s; i = i.getNextSibling(), s = s.getNextSibling()) {
        if (i.__key === o) return -1;
        if (s.__key === r) return 1;
      }
      return null === i ? 1 : -1;
    }
    function Ll(t, e) {
      return e.is(t);
    }
    function Kl(t) {
      return Uo(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function Bl(e, n) {
      if (e.is(n)) return { commonAncestor: e, type: "same" };
      var r = new Map();
      for (
        var _Kl = Kl(e), _t211 = _Kl[0], _n100 = _Kl[1];
        _t211;
        _n100 = _t211, _t211 = _t211.getParent()
      )
        r.set(_t211, _n100);
      for (
        var _Kl2 = Kl(n), _o56 = _Kl2[0], _i37 = _Kl2[1];
        _o56;
        _i37 = _o56, _o56 = _o56.getParent()
      ) {
        var _s20 = r.get(_o56);
        if (void 0 !== _s20)
          return null === _s20
            ? (Ll(e, _o56) || t(276),
              { commonAncestor: _o56, type: "ancestor" })
            : null === _i37
              ? (Ll(n, _o56) || t(277),
                { commonAncestor: _o56, type: "descendant" })
              : (((Uo(_s20) || Ll(e, _s20)) &&
                  (Uo(_i37) || Ll(n, _i37)) &&
                  _o56.is(_s20.getParent()) &&
                  _o56.is(_i37.getParent())) ||
                  t(278),
                { a: _s20, b: _i37, commonAncestor: _o56, type: "branch" });
      }
      return null;
    }
    function zl(e, n) {
      var r = e.type,
        o = e.key,
        i = e.offset,
        s = As(e.key);
      return "text" === r
        ? (Or(s) || t(266, s.getType(), o), Nl(s, n, i))
        : (Uo(s) || t(267, s.getType(), o), Zl(s, e.offset, n));
    }
    function $l(e, n) {
      var r = n.origin,
        o = n.direction,
        i = "next" === o;
      pl(n)
        ? e.set(r.getKey(), n.offset, "text")
        : yl(n)
          ? Or(r)
            ? e.set(r.getKey(), vl(r, o), "text")
            : e.set(
                r.getParentOrThrow().getKey(),
                r.getIndexWithinParent() + (i ? 1 : 0),
                "element",
              )
          : ((ml(n) && Uo(r)) || t(268),
            e.set(r.getKey(), i ? 0 : r.getChildrenSize(), "element"));
    }
    function Wl(t) {
      var e = Zr(),
        n = Rr(e) ? e : qr();
      return (Ul(n, t), Vi(n), n);
    }
    function Ul(t, e) {
      ($l(t.anchor, e.anchor), $l(t.focus, e.focus));
    }
    function Yl(t) {
      var e = t.anchor,
        n = t.focus,
        r = zl(e, "next"),
        o = zl(n, "next"),
        i = Fl(r, o) <= 0 ? "next" : "previous";
      return Il(Xl(r, i), Xl(o, i));
    }
    function jl(t) {
      var e = t.direction,
        n = t.origin,
        r = Tl(n, dl(e)).getNodeAtCaret();
      return r ? Tl(r, e) : Ol(n.getParentOrThrow(), e);
    }
    function Hl(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _r73 = ml(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _r73;
        _r73 = _r73.getParentCaret(e)
      )
        n.push(jl(_r73));
      return n;
    }
    function Jl(t) {
      return !!t && t.origin.isAttached();
    }
    function Gl(e, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (e.isCollapsed()) return e;
      var r = "root",
        o = "next";
      var i = n;
      var s = Ql(e, o),
        l = Hl(s.anchor, r),
        c = Hl(s.focus.getFlipped(), r),
        a = new Set(),
        u = [];
      for (var _t212 of s.iterNodeCarets(r))
        if (ml(_t212)) a.add(_t212.origin.getKey());
        else if (yl(_t212)) {
          var _e140 = _t212.origin;
          (Uo(_e140) && !a.has(_e140.getKey())) || u.push(_e140);
        }
      for (var _t213 of u) _t213.remove();
      for (var _t214 of s.getTextSlices()) {
        if (!_t214) continue;
        var _e141 = _t214.caret.origin,
          _n101 = _e141.getTextContentSize(),
          _r74 = jl(Tl(_e141, o)),
          _s21 = _e141.getMode();
        if (
          (Math.abs(_t214.distance) === _n101 && "removeEmptySlices" === i) ||
          ("token" === _s21 && 0 !== _t214.distance)
        )
          _r74.remove();
        else if (0 !== _t214.distance) {
          i = "removeEmptySlices";
          var _e142 = _t214.removeTextSlice();
          var _n102 = _t214.caret.origin;
          if ("segmented" === _s21) {
            var _t215 = _e142.origin,
              _n103 = kr(_t215.getTextContent())
                .setStyle(_t215.getStyle())
                .setFormat(_t215.getFormat());
            (_r74.replaceOrInsert(_n103), (_e142 = Nl(_n103, o, _e142.offset)));
          }
          (_n102.is(l[0].origin) && (l[0] = _e142),
            _n102.is(c[0].origin) && (c[0] = _e142.getFlipped()));
        }
      }
      var f, d;
      for (var _t216 of l)
        if (Jl(_t216)) {
          f = Vl(_t216);
          break;
        }
      for (var _t217 of c)
        if (Jl(_t217)) {
          d = Vl(_t217);
          break;
        }
      var h = (function (t, e, n) {
        if (!t || !e) return null;
        var r = t.getParentAtCaret(),
          o = e.getParentAtCaret();
        if (!r || !o) return null;
        var i = r.getParents().reverse();
        i.push(r);
        var s = o.getParents().reverse();
        s.push(o);
        var l = Math.min(i.length, s.length);
        var c;
        for (c = 0; c < l && i[c] === s[c]; c++);
        var a = function a(t, e) {
            var n;
            for (var _r75 = c; _r75 < t.length; _r75++) {
              var _o57 = t[_r75];
              if (Os(_o57)) return;
              !n && e(_o57) && (n = _o57);
            }
            return n;
          },
          u = a(i, Ws),
          f =
            u &&
            a(s, function (t) {
              return n.has(t.getKey()) && Ws(t);
            });
        return u && f ? [u, f] : null;
      })(f, d, a);
      if (h) {
        var _t218 = h[0],
          _e143 = h[1];
        Ol(_t218, "previous").splice(0, _e143.getChildren());
        var _n104 = _e143.getParent();
        for (_e143.remove(!0); _n104 && _n104.isEmpty(); ) {
          var _t219 = _n104;
          ((_n104 = _n104.getParent()), _t219.remove(!0));
        }
      }
      var g = [f, d].concat(l, c).find(Jl);
      if (g) {
        return Dl(Xl(Vl(g), e.direction));
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
    function Vl(t) {
      var e = (function (t) {
          var e = t;
          for (; ml(e); ) {
            var _t220 = bl(e);
            if (!ml(_t220)) break;
            e = _t220;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (Or(e.origin)) return pl(e) ? e : Nl(e.origin, n, n);
      var r = e.getAdjacentCaret();
      return yl(r) && Or(r.origin) ? Nl(r.origin, n, dl(n)) : e;
    }
    function ql(t) {
      return pl(t) && t.offset !== vl(t.origin, t.direction);
    }
    function Xl(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function Ql(t, e) {
      return t.direction === e ? t : Il(Xl(t.focus, e), Xl(t.anchor, e));
    }
    function Zl(t, e, n) {
      var r = Ol(t, "next");
      for (var _t221 = 0; _t221 < e; _t221++) {
        var _t222 = r.getAdjacentCaret();
        if (null === _t222) break;
        r = _t222;
      }
      return Xl(r, n);
    }
    function tc(e) {
      var n = e.origin,
        r = e.offset,
        o = e.direction;
      if (r === vl(n, o)) return e.getSiblingCaret();
      if (r === vl(n, dl(o))) return jl(e.getSiblingCaret());
      var _n$splitText2 = n.splitText(r),
        i = _n$splitText2[0];
      return (Or(i) || t(281), Xl(Tl(i, "next"), o));
    }
    function ec(t, e) {
      return !0;
    }
    function nc() {
      var e = [];
      for (
        var _len12 = arguments.length, t = new Array(_len12), _key12 = 0;
        _key12 < _len12;
        _key12++
      ) {
        t[_key12] = arguments[_key12];
      }
      for (var _n105 of t)
        if (_n105 && "string" == typeof _n105)
          for (var _ref32 of _n105.matchAll(/\S+/g)) {
            var _t223 = _ref32[0];
            e.push(_t223);
          }
      return e;
    }
    function rc() {
      for (
        var _len13 = arguments.length, t = new Array(_len13), _key13 = 0;
        _key13 < _len13;
        _key13++
      ) {
        t[_key13] = arguments[_key13];
      }
      return function () {
        for (var _e144 = t.length - 1; _e144 >= 0; _e144--) t[_e144]();
        t.length = 0;
      };
    }
    ((exports.$addUpdateTag = xs),
      (exports.$applyNodeReplacement = bs),
      (exports.$assumeActiveEditor = function (t) {
        var e;
        (null !== Oo() && null === po && (po = t),
          po !== t &&
            ((e =
              "The given editor argument does not match $getEditor() in this context. Use editor.getEditorState().read(..., {editor}) if this cross-editor call is intentional."),
            console.warn(e)));
      }),
      (exports.$caretFromPoint = zl),
      (exports.$caretRangeFromSelection = Yl),
      (exports.$cloneWithProperties = Xs),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = Xs(t))[Vn] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = Fl),
      (exports.$copyNode = Es),
      (exports.$create = function (t) {
        var e = Us();
        return (
          vo(),
          new (e.resolveRegisteredNodeAfterReplacements(
            e.getRegisteredNode(t),
          ).klass)()
        );
      }),
      (exports.$createChildrenArray = ll),
      (exports.$createLineBreakNode = ni),
      (exports.$createNodeSelection = Xr),
      (exports.$createParagraphNode = ai),
      (exports.$createPoint = Dr),
      (exports.$createRangeSelection = qr),
      (exports.$createRangeSelectionFromDom = function (t, e) {
        return Qr(null, t, e, null);
      }),
      (exports.$createTabNode = Mr),
      (exports.$createTextNode = kr),
      (exports.$extendCaretToRange = wl),
      (exports.$findMatchingParent = sl),
      (exports.$fullReconcile = function () {
        Eo()._dirtyType = 2;
      }),
      (exports.$generateNodesFromRawText = ao),
      (exports.$getAdjacentChildCaret = bl),
      (exports.$getAdjacentNode = hs),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          r = t,
          o = bl(r);
        for (; null === o; ) {
          if ((n--, (o = r.getParentCaret(e)), !o)) return null;
          ((r = o), (o = bl(r)));
        }
        return o && [o, n];
      }),
      (exports.$getCaretInDirection = Xl),
      (exports.$getCaretRange = Il),
      (exports.$getCaretRangeInDirection = Ql),
      (exports.$getCharacterOffsets = zr),
      (exports.$getChildCaret = Ol),
      (exports.$getChildCaretAtIndex = Zl),
      (exports.$getChildCaretOrSelf = El),
      (exports.$getCollapsedCaretRange = Dl),
      (exports.$getCommonAncestor = Bl),
      (exports.$getCommonAncestorResultBranchOrder = Rl),
      (exports.$getDOMSlot = js),
      (exports.$getDOMTextNode = Js),
      (exports.$getEditor = Us),
      (exports.$getEditorDOMRenderConfig = Ys),
      (exports.$getNearestNodeFromDOMNode = ji),
      (exports.$getNearestRootOrShadowRoot = ks),
      (exports.$getNodeByKey = $i),
      (exports.$getNodeByKeyOrThrow = As),
      (exports.$getNodeFromDOMNode = Wi),
      (exports.$getPreviousSelection = to),
      (exports.$getRoot = Gi),
      (exports.$getSelection = Zr),
      (exports.$getSiblingCaret = Tl),
      (exports.$getState = it),
      (exports.$getStateChange = function (t, e, n) {
        var r = it(t, n, "direct"),
          o = it(e, n, "direct");
        return n.isEqual(r, o) ? null : [r, o];
      }),
      (exports.$getTextContent = function () {
        var t = Zr();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = vl),
      (exports.$getTextPointCaret = Nl),
      (exports.$getTextPointCaretSlice = kl),
      (exports.$getWritableNodeState = at),
      (exports.$hasAncestor = Ss),
      (exports.$hasUpdateTag = function (t) {
        return Eo()._updateTags.has(t);
      }),
      (exports.$insertNodes = function (t) {
        var e = Zr() || to();
        (null === e && (e = Gi().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = Gr),
      (exports.$isChildCaret = ml),
      (exports.$isDecoratorNode = Ho),
      (exports.$isEditorState = function (t) {
        return t instanceof _Qo;
      }),
      (exports.$isElementDOMSlot = Hs),
      (exports.$isElementNode = Uo),
      (exports.$isExtendableTextPointCaret = ql),
      (exports.$isInlineElementOrDecoratorNode = vs),
      (exports.$isLeafNode = function (t) {
        return Or(t) || ri(t) || Ho(t);
      }),
      (exports.$isLexicalNode = function (t) {
        return t instanceof _Qn5;
      }),
      (exports.$isLineBreakNode = ri),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _al4;
      }),
      (exports.$isNodeSelection = Kr),
      (exports.$isParagraphNode = ui),
      (exports.$isRangeSelection = Rr),
      (exports.$isRootNode = Go),
      (exports.$isRootOrShadowRoot = Os),
      (exports.$isSiblingCaret = yl),
      (exports.$isTabNode = Ar),
      (exports.$isTextNode = Or),
      (exports.$isTextPointCaret = pl),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _Al;
      }),
      (exports.$isTokenOrSegmented = wi),
      (exports.$isTokenOrTab = Ai),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = Oo();
        if (n._readOnly) {
          var _t224 = qs(n).get(e);
          return _t224 ? Array.from(_t224.values()) : [];
        }
        var r = n._nodeMap,
          o = [];
        for (var _ref34 of r) {
          var _n106 = _ref34[1];
          _n106 instanceof t &&
            _n106.__type === e &&
            _n106.isAttached() &&
            o.push(_n106);
        }
        return o;
      }),
      (exports.$normalizeCaret = Vl),
      (exports.$normalizeSelection__EXPERIMENTAL = xt),
      (exports.$onUpdate = Cs),
      (exports.$parseSerializedNode = function (t) {
        return Io(t, Eo()._nodes);
      }),
      (exports.$removeTextFromCaretRange = Gl),
      (exports.$rewindSiblingCaret = jl),
      (exports.$selectAll = function (t) {
        var e = Gi();
        if (Rr(t)) {
          var _e145 = t.anchor,
            _n107 = t.focus,
            _r76 = _e145
              .getNode()
              .getTopLevelElementOrThrow()
              .getParentOrThrow();
          return (
            _e145.set(_r76.getKey(), 0, "element"),
            _n107.set(_r76.getKey(), _r76.getChildrenSize(), "element"),
            xt(t),
            t
          );
        }
        {
          var _t225 = e.select(0, e.getChildrenSize());
          return (Vi(xt(_t225)), _t225);
        }
      }),
      (exports.$setCompositionKey = Bi),
      (exports.$setDirectionFromDOM = Zs),
      (exports.$setFormatFromDOM = tl),
      (exports.$setPointFromCaret = $l),
      (exports.$setSelection = Vi),
      (exports.$setSelectionFromCaretRange = Wl),
      (exports.$setState = function (t, e, n) {
        var r;
        if ((vo(), "function" == typeof n)) {
          var _o58 = t.getLatest(),
            _i38 = it(_o58, e);
          if (((r = n(_i38)), e.isEqual(_i38, r))) return _o58;
        } else r = n;
        var o = t.getWritable();
        return (at(o).updateFromKnown(e, r), o);
      }),
      (exports.$splitAtPointCaretNext = function (t, _temp) {
        var _ref35 = _temp === void 0 ? {} : _temp,
          _ref35$$copyElementNo = _ref35.$copyElementNode,
          e = _ref35$$copyElementNo === void 0 ? Es : _ref35$$copyElementNo,
          _ref35$$splitTextPoin = _ref35.$splitTextPointCaretNext,
          n = _ref35$$splitTextPoin === void 0 ? tc : _ref35$$splitTextPoin,
          _ref35$rootMode = _ref35.rootMode,
          r = _ref35$rootMode === void 0 ? "shadowRoot" : _ref35$rootMode,
          _ref35$$shouldSplit = _ref35.$shouldSplit,
          o = _ref35$$shouldSplit === void 0 ? ec : _ref35$$shouldSplit,
          _ref35$removeEmptyDes = _ref35.removeEmptyDestination,
          i = _ref35$removeEmptyDes === void 0 ? !1 : _ref35$removeEmptyDes;
        if (pl(t)) return n(t);
        var s = t.getParentCaret(r);
        if (s) {
          var _n108 = s.origin;
          if (ml(t)) {
            var _t226 = jl(s);
            if (i && _n108.isEmpty()) return (_n108.remove(), _t226);
            if (!_n108.canBeEmpty() || !o(_n108, "first")) return _t226;
          }
          var _r77 = (function (t) {
            var e = [];
            for (
              var _n109 = t.getAdjacentCaret();
              _n109;
              _n109 = _n109.getAdjacentCaret()
            )
              e.push(_n109.origin);
            return e;
          })(t);
          (_r77.length > 0 || (!i && _n108.canBeEmpty() && o(_n108, "last"))) &&
            s.insert(e(_n108).splice(0, 0, _r77));
        }
        return s;
      }),
      (exports.$splitNode = function (e, n) {
        var r = e.getChildAtIndex(n);
        (null == r && (r = e), Os(e) && t(102));
        var _o61 = function o(e) {
            var n = e.getParentOrThrow(),
              i = Os(n),
              s = e !== r || i ? Es(e) : e;
            if (i)
              return ((Uo(e) && Uo(s)) || t(133), e.insertAfter(s), [e, s, s]);
            {
              var _o60 = _o61(n),
                _t227 = _o60[0],
                _r78 = _o60[1],
                _i39 = _o60[2],
                _l16 = e.getNextSiblings();
              return (
                _i39.append.apply(_i39, [s].concat(_l16)),
                [_t227, _r78, s]
              );
            }
          },
          _o59 = _o61(r),
          i = _o59[0],
          s = _o59[1];
        return [i, s];
      }),
      (exports.$updateDOMSelection = lo),
      (exports.$updateRangeSelectionFromCaretRange = Ul),
      (exports.ArtificialNode__DO_NOT_USE = _Zo),
      (exports.BEFORE_INPUT_COMMAND = _e),
      (exports.BLUR_COMMAND = sn),
      (exports.CAN_REDO_COMMAND = nn),
      (exports.CAN_UNDO_COMMAND = rn),
      (exports.CAN_USE_BEFORE_INPUT = i),
      (exports.CAN_USE_DOM = e),
      (exports.CLEAR_EDITOR_COMMAND = tn),
      (exports.CLEAR_HISTORY_COMMAND = en),
      (exports.CLICK_COMMAND = ge),
      (exports.COLLABORATION_TAG = tr),
      (exports.COMMAND_PRIORITY_BEFORE_CRITICAL = -4),
      (exports.COMMAND_PRIORITY_BEFORE_EDITOR = -8),
      (exports.COMMAND_PRIORITY_BEFORE_HIGH = -5),
      (exports.COMMAND_PRIORITY_BEFORE_LOW = -7),
      (exports.COMMAND_PRIORITY_BEFORE_NORMAL = -6),
      (exports.COMMAND_PRIORITY_CRITICAL = 4),
      (exports.COMMAND_PRIORITY_EDITOR = di),
      (exports.COMMAND_PRIORITY_HIGH = 3),
      (exports.COMMAND_PRIORITY_LOW = 1),
      (exports.COMMAND_PRIORITY_NORMAL = 2),
      (exports.COMPOSITION_END_COMMAND = me),
      (exports.COMPOSITION_END_TAG = ir),
      (exports.COMPOSITION_START_COMMAND = ye),
      (exports.COMPOSITION_START_TAG = or),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = Te),
      (exports.COPY_COMMAND = Xe),
      (exports.CUT_COMMAND = Qe),
      (exports.CUT_TAG = "cut"),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = _i),
      (exports.DELETE_CHARACTER_COMMAND = xe),
      (exports.DELETE_LINE_COMMAND = Oe),
      (exports.DELETE_WORD_COMMAND = ke),
      (exports.DRAGEND_COMMAND = qe),
      (exports.DRAGOVER_COMMAND = Ve),
      (exports.DRAGSTART_COMMAND = Ge),
      (exports.DROP_COMMAND = He),
      (exports.DecoratorNode = _jo),
      (exports.ElementNode = _Wo4),
      (exports.FOCUS_COMMAND = on),
      (exports.FORMAT_ELEMENT_COMMAND = Je),
      (exports.FORMAT_TEXT_COMMAND = Ee),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = Zn),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = Ye),
      (exports.INPUT_COMMAND = pe),
      (exports.INSERT_LINE_BREAK_COMMAND = Ce),
      (exports.INSERT_PARAGRAPH_COMMAND = Se),
      (exports.INSERT_TAB_COMMAND = Ue),
      (exports.INTERNAL_$isBlock = Ws),
      (exports.IS_ALL_FORMATTING = 2047),
      (exports.IS_ANDROID = l),
      (exports.IS_ANDROID_CHROME = u),
      (exports.IS_APPLE = r),
      (exports.IS_APPLE_WEBKIT = f),
      (exports.IS_BOLD = 1),
      (exports.IS_CHROME = a),
      (exports.IS_CODE = 16),
      (exports.IS_FIREFOX = o),
      (exports.IS_HIGHLIGHT = _),
      (exports.IS_IOS = s),
      (exports.IS_ITALIC = 2),
      (exports.IS_SAFARI = c),
      (exports.IS_STRIKETHROUGH = 4),
      (exports.IS_SUBSCRIPT = 32),
      (exports.IS_SUPERSCRIPT = 64),
      (exports.IS_UNDERLINE = 8),
      (exports.KEY_ARROW_DOWN_COMMAND = Re),
      (exports.KEY_ARROW_LEFT_COMMAND = Ie),
      (exports.KEY_ARROW_RIGHT_COMMAND = we),
      (exports.KEY_ARROW_UP_COMMAND = Fe),
      (exports.KEY_BACKSPACE_COMMAND = Be),
      (exports.KEY_DELETE_COMMAND = $e),
      (exports.KEY_DOWN_COMMAND = Ae),
      (exports.KEY_ENTER_COMMAND = Le),
      (exports.KEY_ESCAPE_COMMAND = ze),
      (exports.KEY_MODIFIER_COMMAND = ln),
      (exports.KEY_SPACE_COMMAND = Ke),
      (exports.KEY_TAB_COMMAND = We),
      (exports.LineBreakNode = _ti),
      (exports.MOVE_TO_END = De),
      (exports.MOVE_TO_START = Pe),
      (exports.NODE_STATE_KEY = "$"),
      (exports.OUTDENT_CONTENT_COMMAND = je),
      (exports.PASTE_COMMAND = Ne),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _li),
      (exports.REDO_COMMAND = Me),
      (exports.REMOVE_TEXT_COMMAND = ve),
      (exports.RootNode = _Jo),
      (exports.SELECTION_CHANGE_COMMAND = de),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = he),
      (exports.SELECT_ALL_COMMAND = Ze),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = nr),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = er),
      (exports.SKIP_SELECTION_FOCUS_TAG = rr),
      (exports.TEXT_TYPE_TO_FORMAT = M),
      (exports.TabNode = _br),
      (exports.TextNode = _pr2),
      (exports.UNDO_COMMAND = be),
      (exports.addClassNamesToElement = function (t) {
        var _t$classList2;
        for (
          var _len14 = arguments.length,
            e = new Array(_len14 > 1 ? _len14 - 1 : 0),
            _key14 = 1;
          _key14 < _len14;
          _key14++
        ) {
          e[_key14 - 1] = arguments[_key14];
        }
        var n = nc.apply(void 0, e);
        n.length > 0 &&
          (_t$classList2 = t.classList).add.apply(_t$classList2, n);
      }),
      (exports.buildImportMap = function (t) {
        return t;
      }),
      (exports.configExtension = function () {
        for (
          var _len15 = arguments.length, t = new Array(_len15), _key15 = 0;
          _key15 < _len15;
          _key15++
        ) {
          t[_key15] = arguments[_key15];
        }
        return t;
      }),
      (exports.createCommand = fe),
      (exports.createEditor = function (t) {
        var e = t || {},
          n = Mo(),
          r = e.theme || {},
          o = void 0 === t ? n : e.parentEditor || null,
          i = e.disableEvents || !1,
          s = qo(),
          l = e.namespace || (null !== o ? o._config.namespace : Zi()),
          c = e.editorState,
          a = [_Jo, _pr2, _ti, _br, _li, _Zo].concat(e.nodes || []),
          u = e.onError,
          f = e.onWarn,
          d = e.html,
          h = void 0 === e.editable || e.editable;
        var g;
        if (void 0 === t && null !== n) g = n._nodes;
        else {
          g = new Map();
          for (var _t228 = 0; _t228 < a.length; _t228++) {
            var _e146 = a[_t228],
              _n110 = null,
              _r79 = null;
            if ("function" != typeof _e146) {
              var _t229 = _e146;
              ((_e146 = _t229.replace),
                (_n110 = _t229["with"]),
                (_r79 = _t229.withKlass || null));
            }
            il(_e146);
            var _o62 = _e146.getType(),
              _i40 = gi(_e146);
            g.set(_o62, {
              exportDOM: d && d["export"] ? d["export"].get(_e146) : void 0,
              klass: _e146,
              replace: _n110,
              replaceWithKlass: _r79,
              sharedNodeState: st(a[_t228]),
              transforms: _i40,
            });
          }
        }
        var _ = new _mi(
          s,
          o,
          g,
          {
            disableEvents: i,
            dom: babelHelpers["extends"]({}, _i, t && t.dom),
            namespace: l,
            theme: r,
          },
          u || console.error,
          f || fi,
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
          })(g, d ? d["import"] : void 0),
          h,
          t,
        );
        return (
          void 0 !== c && ((_._pendingEditorState = c), (_._dirtyType = 2)),
          (function (t) {
            (t.registerCommand(_e, Fn, di),
              t.registerCommand(pe, Rn, di),
              t.registerCommand(ye, Ln, di),
              t.registerCommand(me, Kn, di),
              t.registerCommand(Ae, zn, di));
          })(_),
          _
        );
      }),
      (exports.createSharedNodeState = st),
      (exports.createState = function (t, e) {
        return new ot(t, e);
      }),
      (exports.declarePeerDependency = function (t, e) {
        return [t, e];
      }),
      (exports.defineExtension = function (t) {
        return t;
      }),
      (exports.flipDirection = dl),
      (exports.getDOMOwnerDocument = ms),
      (exports.getDOMSelection = Is),
      (exports.getDOMSelectionFromTarget = Ps),
      (exports.getDOMTextNode = Pi),
      (exports.getEditorPropertyFromDOMNode = Mi),
      (exports.getNearestEditorFromDOMNode = bi),
      (exports.getRegisteredNode = Ni),
      (exports.getRegisteredNodeOrThrow = Ti),
      (exports.getStaticNodeConfig = il),
      (exports.getStyleObjectFromCSS = lr),
      (exports.getTextDirection = function (t) {
        return E.test(t) ? "rtl" : b.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = gi),
      (exports.isBlockDomNode = $s),
      (exports.isCurrentlyReadOnlyMode = No),
      (exports.isDOMCapturingSelection = rl),
      (exports.isDOMDocumentNode = Ii),
      (exports.isDOMNode = Rs),
      (exports.isDOMTextNode = Di),
      (exports.isDOMUnmanaged = nl),
      (exports.isDocumentFragment = Ls),
      (exports.isExactShortcutMatch = ss),
      (exports.isHTMLAnchorElement = function (t) {
        return Fs(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = Fs),
      (exports.isHTMLTableCellElement = function (t) {
        return Fs(t) && ("TD" === t.tagName || "TH" === t.tagName);
      }),
      (exports.isHTMLTableRowElement = function (t) {
        return Fs(t) && "TR" === t.tagName;
      }),
      (exports.isInlineDomNode = Bs),
      (exports.isLastChildInBlockNode = ii),
      (exports.isLexicalEditor = Ei),
      (exports.isModifierMatch = is),
      (exports.isOnlyChildInBlockNode = oi),
      (exports.isSelectionCapturedInDecoratorInput = ki),
      (exports.isSelectionWithinEditor = Oi),
      (exports.makeStepwiseIterator = Pl),
      (exports.mergeRegister = rc),
      (exports.normalizeClassNames = nc),
      (exports.removeClassNamesFromElement = function (t) {
        var _t$classList3;
        for (
          var _len16 = arguments.length,
            e = new Array(_len16 > 1 ? _len16 - 1 : 0),
            _key16 = 1;
          _key16 < _len16;
          _key16++
        ) {
          e[_key16 - 1] = arguments[_key16];
        }
        var n = nc.apply(void 0, e);
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(_t$classList3, n);
      }),
      (exports.removeFromParent = Li),
      (exports.resetRandomKey = function () {
        Si = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = ar),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n111 in e) {
          var _r80 = e[_n111];
          null == _r80 ? t.removeProperty(_n111) : cr(t, _n111, _r80);
        }
      }),
      (exports.setDOMUnmanaged = el),
      (exports.setNodeIndentFromDOM = Qs),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n112 in e)
          if (t[_n112] !== e[_n112]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.stopLexicalPropagation = Yn),
      (exports.toggleTextFormatType = Fi),
      (exports.tokenizeRawText = co));
  },
  null,
);
