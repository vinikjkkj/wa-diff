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
      return zs()._blockCursorElement;
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
        if ((n.insertBefore(o, r), t)) {
          var _t3 = document.createElement("img");
          (_t3.setAttribute("data-lexical-linebreak", "true"),
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
    function J(t) {
      throw new Error(t);
    }
    function G(t, e, n, r, o, i) {
      var s = t.getFirstChild();
      for (; null !== s; ) {
        var _t0 = s.__key;
        (s.__parent === e &&
          ($o(s) && G(s, _t0, n, r, o, i),
          n.has(_t0) || i["delete"](_t0),
          o.push(_t0)),
          (s = s.getNextSibling()));
      }
    }
    var V = !1,
      q = 0;
    function X(t) {
      q = t.timeStamp;
    }
    function Q(t, e, n) {
      var r = "BR" === t.nodeName,
        o = e.__lexicalLineBreak;
      return (
        (o && (t === o || (r && t.previousSibling === o))) ||
        (r && void 0 !== $i(t, n))
      );
    }
    function Z(t, e, n) {
      var r = As(Ss(n));
      var o = null,
        i = null;
      null !== r &&
        r.anchorNode === t &&
        ((o = r.anchorOffset), (i = r.focusOffset));
      var s = t.nodeValue;
      null !== s && ts(e, s, o, i, !1);
    }
    function tt(t, e, n) {
      if (Lr(t)) {
        var _e1 = t.anchor.getNode();
        if (_e1.is(n) && t.format !== _e1.getFormat()) return !1;
      }
      return Mi(e) && n.isAttached();
    }
    function et(t, e, n, r) {
      for (var _o3 = t; _o3 && !Zs(_o3); _o3 = _s(_o3)) {
        var _t1 = $i(_o3, e);
        if (void 0 !== _t1) {
          var _e10 = Ki(_t1, n);
          if (_e10) return Yo(_e10) || !Ds(_o3) ? void 0 : [_o3, _e10];
        } else if (_o3 === r) return [r, Hi(n)];
      }
    }
    function nt(t, e, n) {
      V = !0;
      var r = performance.now() - q > 100;
      try {
        Bo(t, function () {
          var i =
              to() ||
              (function (t) {
                return t.getEditorState().read(function () {
                  var t = to();
                  return null !== t ? t.clone() : null;
                });
              })(t),
            s = new Map(),
            l = t.getRootElement(),
            c = t._editorState,
            a = t._blockCursorElement;
          var u = !1,
            f = "";
          for (var _n9 = 0; _n9 < e.length; _n9++) {
            var _d = e[_n9],
              _h = _d.type,
              _g = _d.target,
              _2 = et(_g, t, c, l);
            if (!_2) continue;
            var _p = _2[0],
              _y = _2[1];
            if ("characterData" === _h)
              r && Er(_y) && Mi(_g) && tt(i, _g, _y) && Z(_g, _y, t);
            else if ("childList" === _h) {
              u = !0;
              var _e11 = _d.addedNodes;
              for (var _n0 = 0; _n0 < _e11.length; _n0++) {
                var _r4 = _e11[_n0],
                  _i3 = Bi(_r4),
                  _s3 = _r4.parentNode;
                if (
                  null != _s3 &&
                  _r4 !== a &&
                  null === _i3 &&
                  !Q(_r4, _s3, t) &&
                  !Zs(_r4)
                ) {
                  if (o) {
                    var _t10 =
                      (Ds(_r4) ? _r4.innerText : null) || _r4.nodeValue;
                    _t10 && (f += _t10);
                  }
                  _s3.removeChild(_r4);
                }
              }
              var _n1 = _d.removedNodes,
                _r5 = _n1.length;
              if (_r5 > 0) {
                var _e12 = 0;
                for (var _o4 = 0; _o4 < _r5; _o4++) {
                  var _r6 = _n1[_o4];
                  (Q(_r6, _g, t) || a === _r6) && (_g.appendChild(_r6), _e12++);
                }
                _r5 !== _e12 && s.set(_p, _y);
              }
            }
          }
          if (s.size > 0)
            for (var _ref6 of s) {
              var _e13 = _ref6[0];
              var _n10 = _ref6[1];
              _n10.reconcileObservedMutation(_e13, t);
            }
          var d = n.takeRecords();
          if (d.length > 0) {
            for (var _e14 = 0; _e14 < d.length; _e14++) {
              var _n11 = d[_e14],
                _r7 = _n11.addedNodes,
                _o5 = _n11.target;
              for (var _e15 = 0; _e15 < _r7.length; _e15++) {
                var _n12 = _r7[_e15],
                  _i4 = _n12.parentNode;
                null == _i4 ||
                  "BR" !== _n12.nodeName ||
                  Q(_n12, _o5, t) ||
                  _i4.removeChild(_n12);
              }
            }
            n.takeRecords();
          }
          null !== i && (u && Ji(i), o && ds(t) && i.insertRawText(f));
        });
      } finally {
        V = !1;
      }
    }
    function rt(t) {
      var e = t._observer;
      if (null !== e) {
        nt(t, e.takeRecords(), e);
      }
    }
    function ot(t) {
      (!(function (t) {
        0 === q && Ss(t).addEventListener("textInput", X, !0);
      })(t),
        (t._observer = new MutationObserver(function (e, n) {
          nt(t, e, n);
        })));
    }
    var it = function it(t, e) {
      ((this.key = t),
        (this.parse = e.parse.bind(e)),
        (this.unparse = (e.unparse || ht).bind(e)),
        (this.isEqual = (e.isEqual || Object.is).bind(e)),
        (this.defaultValue = this.parse(void 0)),
        (this.resetOnCopyNode = e.resetOnCopyNode || !1));
    };
    function st(t, e, n) {
      if (n === void 0) {
        n = "latest";
      }
      var r = ("latest" === n ? t.getLatest() : t).__state;
      return r ? r.getValue(e) : e.defaultValue;
    }
    function lt(t) {
      var e = new Map(),
        n = new Set();
      for (
        var _r8 = "function" == typeof t ? t : t.replace;
        _r8.prototype && void 0 !== _r8.prototype.getType;
        _r8 = Object.getPrototypeOf(_r8)
      ) {
        var _nl = nl(_r8),
          _t11 = _nl.ownNodeConfig;
        if (_t11 && _t11.stateConfigs)
          for (var _r9 of _t11.stateConfigs) {
            var _t12 = void 0;
            ("stateConfig" in _r9
              ? ((_t12 = _r9.stateConfig), _r9.flat && n.add(_t12.key))
              : (_t12 = _r9),
              e.set(_t12.key, _t12));
          }
      }
      return { flatKeys: n, sharedConfigMap: e };
    }
    var ct = new Set(["__proto__", "constructor", "prototype"]);
    var _at = (function () {
      function at(t, e, n, r, o) {
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
                    for (var _o6 in e) {
                      var _e16 = t.get(_o6);
                      (_e16 && n.has(_e16)) || r++;
                    }
                  return r;
                })(i, n, r);
        this.size = s;
      }
      var _proto5 = at.prototype;
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
        return (dt(t) && (e.$ = t), e);
      };
      _proto5.getWritable = function getWritable(t) {
        if (this.node === t) return this;
        var e = this.sharedNodeState,
          n = this.unknownState,
          r = new Map(this.knownState);
        return new at(
          t,
          e,
          (function (t, e, n) {
            var r;
            if (n)
              for (var _ref0 of Object.entries(n)) {
                var _o7 = _ref0[0];
                var _i5 = _ref0[1];
                {
                  if (ct.has(_o7)) continue;
                  var _n15 = t.get(_o7);
                  _n15
                    ? e.has(_n15) || e.set(_n15, _n15.parse(_i5))
                    : ((r = r || {}), (r[_o7] = _i5));
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
          (o && (delete o[n], (this.unknownState = dt(o))), this.size++),
          r.set(t, e));
      };
      _proto5.updateFromUnknown = function updateFromUnknown(t, e) {
        if (ct.has(t)) return;
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
      return at;
    })();
    function ut(t) {
      var e = t.getWritable(),
        n = e.__state ? e.__state.getWritable(e) : new _at(e, ft(e));
      return ((e.__state = n), n);
    }
    function ft(t) {
      return t.__state
        ? t.__state.sharedNodeState
        : xi(zs(), t.getType()).sharedNodeState;
    }
    function dt(t) {
      if (t) for (var _e20 in t) return t;
    }
    function ht(t) {
      return t;
    }
    function gt(t, e, n) {
      for (var _ref12 of e.knownState) {
        var _r0 = _ref12[0];
        var _o8 = _ref12[1];
        {
          if (t.has(_r0.key)) continue;
          t.add(_r0.key);
          var _e21 = n ? n.getValue(_r0) : _r0.defaultValue;
          if (_e21 !== _o8 && !_r0.isEqual(_e21, _o8)) return !0;
        }
      }
      return !1;
    }
    function _t(t, e, n) {
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
    function pt(t, e) {
      var n = t.__state;
      return n && n.node === t ? n.getWritable(e) : n;
    }
    function yt(t, e) {
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
              (t && gt(n, t, e)) ||
              (e && gt(n, e, t)) ||
              (t && _t(n, t, e)) ||
              (e && _t(n, e, t))
            );
          })(c, a))
      );
    }
    function mt(t, e) {
      var n = t.mergeWithSibling(e),
        r = ko()._normalizedNodes;
      return (r.add(t.__key), r.add(e.__key), n);
    }
    function xt(t) {
      var e,
        n,
        r = t;
      if ("" !== r.__text || !r.isSimpleText() || r.isUnmergeable()) {
        for (
          ;
          null !== (e = r.getPreviousSibling()) &&
          Er(e) &&
          e.isSimpleText() &&
          !e.isUnmergeable();
        ) {
          if ("" !== e.__text) {
            if (yt(e, r)) {
              r = mt(e, r);
              break;
            }
            break;
          }
          e.remove();
        }
        for (
          ;
          null !== (n = r.getNextSibling()) &&
          Er(n) &&
          n.isSimpleText() &&
          !n.isUnmergeable();
        ) {
          if ("" !== n.__text) {
            if (yt(r, n)) {
              r = mt(r, n);
              break;
            }
            break;
          }
          n.remove();
        }
      } else r.remove();
    }
    function Ct(t) {
      return (St(t.anchor), St(t.focus), t);
    }
    function St(t) {
      for (; "element" === t.type; ) {
        var _e23 = t.getNode(),
          _n18 = t.offset;
        var _r1 = void 0,
          _o9 = void 0;
        if (
          (_n18 === _e23.getChildrenSize()
            ? ((_r1 = _e23.getChildAtIndex(_n18 - 1)), (_o9 = !0))
            : ((_r1 = _e23.getChildAtIndex(_n18)), (_o9 = !1)),
          Er(_r1))
        ) {
          t.set(_r1.__key, _o9 ? _r1.getTextContentSize() : 0, "text", !0);
          break;
        }
        if (!$o(_r1)) break;
        t.set(_r1.__key, _o9 ? _r1.getChildrenSize() : 0, "element", !0);
      }
    }
    var Tt = Symbol["for"]("@lexical/CachedTextSize");
    function Nt(e, n) {
      return zt.read(
        function () {
          var r = 0,
            o = e;
          for (var _e24 = 0; _e24 < n && null !== o; _e24++) {
            var _i6 = Bt.get(o);
            if ((void 0 === _i6 && t(345, o), $o(_i6))) {
              var _s4 = $t.get(o);
              if (void 0 !== _s4 && $o(_s4) && _s4.__parent !== _i6.__parent)
                r += _i6.getTextContentSize();
              else {
                var _e25 = Wt.get(o),
                  _n19 = _e25 && _e25.__lexicalTextContent;
                ("string" != typeof _n19 && t(346, _i6.getType()),
                  (r += _n19.length));
              }
              _e24 < n - 1 && !_i6.isInline() && (r += 2);
            } else {
              var _e26 = _i6[Tt];
              (void 0 === _e26 && t(347, _i6.getType(), o), (r += _e26));
            }
            o = _i6.__next;
          }
          return r;
        },
        { editor: Et },
      );
    }
    function vt(t) {
      $o(t) ||
        (void 0 === t[Tt] &&
          (t[Tt] = Er(t) ? t.__text.length : t.getTextContentSize()));
    }
    var kt = 4;
    var Ot,
      Et,
      bt,
      Mt = "",
      At = null,
      wt = null,
      Dt = null;
    function It() {
      return { firstTextKey: Dt, format: At, style: wt };
    }
    function Pt(t) {
      null !== t.firstTextKey &&
        ((At = t.format), (wt = t.style), (Dt = t.firstTextKey));
    }
    function Ft(e) {
      if (null !== Dt) return;
      var n = e.__lexicalFirstTextKey;
      if ((void 0 === n && t(348), null === n)) return;
      var r = $t.get(n);
      Er(r) && ((At = r.getFormat()), (wt = r.getStyle()), (Dt = n));
    }
    var Rt,
      Lt,
      Kt,
      Bt,
      zt,
      $t,
      Wt,
      Ut,
      Yt,
      jt,
      Ht = !1,
      Jt = !1;
    function Gt(t, e) {
      var n = Bt.get(t),
        r = $t.has(t);
      if (null !== e) {
        var _n20 = fe(t);
        _n20.parentNode === e && e.removeChild(_n20);
      }
      if (!r) {
        if ((Et._keyToDOMMap["delete"](t), $o(n))) {
          var _t15 = ol(n, Bt);
          Vt(_t15, 0, _t15.length - 1, null);
        }
        void 0 !== n && as(Yt, bt, Rt, n, "destroyed");
      }
    }
    function Vt(t, e, n, r) {
      for (var _o0 = e; _o0 <= n; ++_o0) {
        var _e27 = t[_o0];
        void 0 !== _e27 && Gt(_e27, r);
      }
    }
    function qt(t, e) {
      t.setProperty("text-align", e);
    }
    var Xt = "40px";
    function Qt(t, e) {
      var n = Ot.theme.indent;
      if ("string" == typeof n) {
        var _r10 = t.classList.contains(n);
        e > 0 && !_r10
          ? t.classList.add(n)
          : e < 1 && _r10 && t.classList.remove(n);
      }
      t.style.setProperty(
        "padding-inline-start",
        0 === e
          ? ""
          : "calc(" + e + " * var(--lexical-indent-base-value, " + Xt + "))",
      );
    }
    function Zt(t, e) {
      var n = t.style;
      0 === e
        ? qt(n, "")
        : 1 === e
          ? qt(n, "left")
          : 2 === e
            ? qt(n, "center")
            : 3 === e
              ? qt(n, "right")
              : 4 === e
                ? qt(n, "justify")
                : 5 === e
                  ? qt(n, "start")
                  : 6 === e && qt(n, "end");
    }
    function te(t, e) {
      var n = (function (t) {
        var e = t.__dir;
        if (null !== e) return e;
        if (Ho(t)) return null;
        var n = t.getParentOrThrow();
        return Ns(n) && null === n.__dir ? "auto" : null;
      })(e);
      null !== n ? (t.dir = n) : t.removeAttribute("dir");
    }
    function ee(e, n) {
      var r = $t.get(e);
      if ((void 0 === r && t(60), null !== n)) {
        var _t16 = Bt.get(e);
        if (void 0 !== _t16 && _t16.__parent !== r.__parent) {
          var _t17 = Wt.get(e);
          if (void 0 !== _t17) return (n.insertChild(_t17), se(e, n.element));
        }
      }
      var o = jt.$createDOM(r, Et);
      if (
        ((function (t, e, n) {
          var r = n._keyToDOMMap;
          (zi(e, n, t), r.set(t, e));
        })(e, o, Et),
        Er(r)
          ? o.setAttribute("data-lexical-text", "true")
          : Yo(r) &&
            (o.setAttribute("data-lexical-decorator", "true"),
            Qs(o, { captureSelection: !0 })),
        $o(r))
      ) {
        var _t18 = r.__indent,
          _e28 = r.__size;
        if ((te(o, r), 0 !== _t18 && Qt(o, _t18), 0 === _e28))
          ((o.__lexicalTextContent = ""), (o.__lexicalFirstTextKey = null));
        else {
          var _t19 = _e28 - 1;
          ne(ol(r, $t), r, 0, _t19, Ws(r, o, Et));
        }
        var _n21 = r.__format;
        (0 !== _n21 && Zt(o, _n21), r.isInline() || re(null, r, o));
      } else {
        var _t20 = r.getTextContent();
        if (Yo(r)) {
          var _t21 = r.decorate(Et, Ot);
          (null !== _t21 && le(e, _t21), (o.contentEditable = "false"));
        }
        Mt += _t20;
      }
      return (
        null !== n && n.insertChild(o),
        jt.$decorateDOM(r, null, o, Et),
        vt(r),
        as(Yt, bt, Rt, r, "created"),
        o
      );
    }
    function ne(e, n, r, o, i) {
      var s = Mt,
        l = It();
      ((Mt = ""), (At = null), (wt = null), (Dt = null));
      var c = r;
      for (; c <= o; ++c) {
        var _t22 = It();
        ee(e[c], i);
        var _n22 = $t.get(e[c]);
        (null !== _n22 && Er(_n22)
          ? null === At &&
            ((At = _n22.getFormat()), (wt = _n22.getStyle()), (Dt = _n22.__key))
          : $o(_n22) && c < o && !_n22.isInline() && (Mt += N),
          Pt(_t22));
      }
      var a = Et._keyToDOMMap.get(n.__key);
      (void 0 === a && t(349, n.__key),
        (a.__lexicalTextContent = Mt),
        (a.__lexicalFirstTextKey = Dt),
        (Mt = s + Mt),
        Pt(l));
    }
    function re(t, e, n) {
      var _r$element$__lexicalL;
      var r = Ws(e, n, Et),
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
                return ei(_t23)
                  ? "line-break"
                  : Yo(_t23) && _t23.isInline()
                    ? "decorator"
                    : null;
            }
            return "empty";
          }
          return null;
        })(e, $t);
      o !== i && r.setManagedLineBreak(i);
    }
    function oe(e, n, r) {
      var o;
      ((At = null),
        (wt = null),
        (Dt = null),
        (function (e, n, r) {
          var o = Mt,
            i = e.__size,
            s = n.__size;
          Mt = "";
          var l = r.element,
            c = Et._keyToDOMMap.get(n.__key);
          void 0 === c && t(351, n.__key);
          var a = s - i;
          if (
            !Ht &&
            Math.abs(a) <= 1 &&
            i >= kt &&
            e.__first === n.__first &&
            (0 !== a || !Et._cloneNotNeeded.has(e.__key))
          ) {
            var _i7 = c.__lexicalTextContent,
              _u = Ut.get(e.__key);
            if (!Ht && "string" == typeof _i7 && void 0 !== _u) {
              var _s5 = (function (t, e) {
                var n = e.size;
                if (0 === n || n >= t.__size) return null;
                var r = t.__last,
                  o = null,
                  i = 0;
                for (; null !== r && i < n; ) {
                  if (!e.has(r)) return null;
                  o = r;
                  var _t24 = $t.get(r);
                  if (void 0 === _t24) return null;
                  ((r = _t24.__prev), i++);
                }
                if (i !== n) return null;
                if (null !== r && e.has(r)) return null;
                return o;
              })(n, _u);
              if (null !== _s5) {
                var _f = _u.size;
                if (0 === a) {
                  var _e29 = Nt(_s5, _f);
                  var _r11 = _s5,
                    _a = 0;
                  for (; null !== _r11 && _a < _f; ) {
                    var _t25 = $t.get(_r11);
                    if (void 0 === _t25) break;
                    var _e30 = It();
                    (se(_r11, l),
                      Er(_t25) &&
                        null === At &&
                        ((At = _t25.getFormat()),
                        (wt = _t25.getStyle()),
                        (Dt = _t25.__key)),
                      Pt(_e30),
                      (_r11 = _t25.__next),
                      _a++);
                  }
                  var _d2 = "";
                  for (_r11 = _s5, _a = 0; null !== _r11 && _a < _f; ) {
                    var _e31 = $t.get(_r11);
                    if (void 0 === _e31) break;
                    var _n24 = void 0;
                    if ($o(_e31)) {
                      var _o1 = Et._keyToDOMMap.get(_r11),
                        _i8 = _o1 && _o1.__lexicalTextContent;
                      ("string" != typeof _i8 && t(352, _e31.getType()),
                        (_n24 = _i8));
                    } else _n24 = _e31.getTextContent();
                    ((_d2 += _n24),
                      _a < _f - 1 && $o(_e31) && !_e31.isInline() && (_d2 += N),
                      (_r11 = _e31.__next),
                      _a++);
                  }
                  var _h2 = _i7.slice(0, _i7.length - _e29) + _d2;
                  return (
                    (c.__lexicalTextContent = _h2),
                    (Mt = o + _h2),
                    void ie(n, c, _u)
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
                      var _t27 = Bt.get(f);
                      if (void 0 === _t27) return !1;
                      f = _t27.__prev;
                    }
                    if (null === f) return !1;
                    var d = $t.get(s),
                      h = Bt.get(f);
                    if (void 0 === d || void 0 === h) return !1;
                    if (d.__prev !== h.__prev) return !1;
                    var g = [];
                    var _ = s;
                    for (var _t28 = 0; _t28 < l; _t28++) {
                      if (null === _) return !1;
                      g.push(_);
                      var _t29 = $t.get(_);
                      _ = _t29 ? _t29.__next : null;
                    }
                    var p = [];
                    _ = f;
                    for (var _t30 = 0; _t30 < u; _t30++) {
                      if (null === _) return !1;
                      p.push(_);
                      var _t31 = Bt.get(_);
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
                    var T = Nt(f, u);
                    for (var _t32 of x) {
                      var _e32 = It();
                      if ("reconcile" === _t32.kind) se(_t32.key, r.element);
                      else if ("destroy" === _t32.kind) Gt(_t32.key, r.element);
                      else {
                        var _e33 = null;
                        for (var _n25 = _t32.nextIndex + 1; _n25 < l; _n25++) {
                          var _t33 = Et._keyToDOMMap.get(g[_n25]);
                          if (void 0 !== _t33) {
                            _e33 = _t33;
                            break;
                          }
                        }
                        ee(
                          _t32.key,
                          r.withBefore(_e33 != null ? _e33 : r.before),
                        );
                      }
                      if ("destroy" !== _t32.kind) {
                        var _e34 = $t.get(_t32.key);
                        _e34 &&
                          Er(_e34) &&
                          null === At &&
                          ((At = _e34.getFormat()),
                          (wt = _e34.getStyle()),
                          (Dt = _e34.__key));
                      }
                      Pt(_e32);
                    }
                    var v = "";
                    for (var _e35 = 0; _e35 < l; _e35++) {
                      var _n26 = $t.get(g[_e35]);
                      if (void 0 === _n26) return !1;
                      var _r12 = void 0;
                      if ($o(_n26)) {
                        var _o10 = Et._keyToDOMMap.get(g[_e35]),
                          _i9 = _o10 && _o10.__lexicalTextContent;
                        ("string" != typeof _i9 && t(350, _n26.getType()),
                          (_r12 = _i9));
                      } else _r12 = _n26.getTextContent();
                      ((v += _r12),
                        _e35 < l - 1 &&
                          $o(_n26) &&
                          !_n26.isInline() &&
                          (v += N));
                    }
                    var k = i.slice(0, i.length - T) + v;
                    return ((o.__lexicalTextContent = k), !0);
                  })(e, 0, r, c, _i7, _s5, _f, a)
                ) {
                  var _e36 = c.__lexicalTextContent;
                  return (
                    "string" != typeof _e36 && t(353),
                    (Mt = o + _e36),
                    void ie(n, c, _u)
                  );
                }
              }
            }
            if (0 === a) {
              var _n27 = e.__first,
                _r13 = 0;
              for (; null !== _n27; ) {
                var _e37 = $t.get(_n27);
                if (void 0 === _e37) break;
                var _o11 = Ht || Kt.has(_n27) || Lt.has(_n27),
                  _i0 = It();
                if (_o11) se(_n27, l);
                else {
                  var _r14 = void 0,
                    _o12 = void 0;
                  if ($o(_e37)) {
                    _o12 = Wt.get(_n27);
                    var _i1 = _o12 && _o12.__lexicalTextContent;
                    ("string" != typeof _i1 && t(354, _e37.getType()),
                      (_r14 = _i1));
                  } else _r14 = _e37.getTextContent();
                  ((Mt += _r14), void 0 !== _o12 && Ft(_o12));
                }
                (Er(_e37)
                  ? null === At &&
                    ((At = _e37.getFormat()),
                    (wt = _e37.getStyle()),
                    (Dt = _e37.__key))
                  : $o(_e37) && _r13 < s - 1 && !_e37.isInline() && (Mt += N),
                  Pt(_i0),
                  (_n27 = _e37.__next),
                  _r13++);
              }
              return (
                (c.__lexicalTextContent = Mt),
                (c.__lexicalFirstTextKey = Dt),
                void (Mt = o + Mt)
              );
            }
          }
          if (1 === i && 1 === s) {
            var _t34 = e.__first,
              _o13 = n.__first;
            if (_t34 === _o13) se(_t34, l);
            else {
              var _e38 = fe(_t34),
                _n28 = ee(_o13, null);
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
                    _o13 +
                    "}, old child: {tag: " +
                    _e38.tagName +
                    ", key: " +
                    _t34 +
                    "}.";
                  throw new Error(_i10);
                }
                throw r;
              }
              Gt(_t34, null);
            }
            var _i11 = $t.get(_o13);
            Er(_i11) &&
              null === At &&
              ((At = _i11.getFormat()),
              (wt = _i11.getStyle()),
              (Dt = _i11.__key));
          } else {
            var _o14 = ol(e, Bt),
              _c = ol(n, $t);
            if (
              (_o14.length !== i && t(227), _c.length !== s && t(228), 0 === i)
            )
              0 !== s && ne(_c, n, 0, s - 1, r);
            else if (0 === s) {
              if (0 !== i) {
                var _t35 =
                  null == r.after &&
                  null == r.before &&
                  null == r.element.__lexicalLineBreak;
                (Vt(_o14, 0, i - 1, _t35 ? null : l),
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
                    _r15 = n[d],
                    _o15 = It();
                  if (_t36 === _r15) ((u = ce(se(_r15, i.element))), f++, d++);
                  else {
                    if ((void 0 === a && (a = ae(n, d)), void 0 === c))
                      c = ae(e, f);
                    else if (!c.has(_t36)) {
                      (f++, Pt(_o15));
                      continue;
                    }
                    if (!a.has(_t36)) {
                      ((u = ce(fe(_t36))),
                        Gt(_t36, i.element),
                        f++,
                        c["delete"](_t36),
                        Pt(_o15));
                      continue;
                    }
                    if (c.has(_r15)) {
                      var _t37 = gs(Et, _r15);
                      (_t37 !== u &&
                        i
                          .withBefore(u != null ? u : i.before)
                          .insertChild(_t37),
                        (u = ce(se(_r15, i.element))),
                        f++,
                        d++);
                    } else
                      (ee(_r15, i.withBefore(u != null ? u : i.before)), d++);
                  }
                  var _s6 = $t.get(_r15);
                  (null !== _s6 && Er(_s6)
                    ? null === At &&
                      ((At = _s6.getFormat()),
                      (wt = _s6.getStyle()),
                      (Dt = _s6.__key))
                    : $o(_s6) && d <= l && !_s6.isInline() && (Mt += N),
                    Pt(_o15));
                }
                var h = f > s,
                  g = d > l;
                if (h && !g) {
                  var _e39 = n[l + 1],
                    _r16 = void 0 === _e39 ? null : Et.getElementByKey(_e39);
                  ne(n, t, d, l, i.withBefore(_r16 != null ? _r16 : i.before));
                } else g && !h && Vt(e, f, s, i.element);
              })(n, _o14, _c, i, s, r);
          }
          ((c.__lexicalTextContent = Mt),
            (c.__lexicalFirstTextKey = Dt),
            (Mt = o + Mt));
        })(e, n, Ws(n, r, Et)),
        Ns(n) ||
          ((o = n),
          null == At || At === o.__textFormat || Jt || o.setTextFormat(At),
          (function (t) {
            null == wt || wt === t.__textStyle || Jt || t.setTextStyle(wt);
          })(n)));
    }
    function ie(t, e, n) {
      var r = e.__lexicalFirstTextKey;
      if (null != r) {
        var _e40 = t.__key;
        var _o16 = r;
        for (; null !== _o16; ) {
          var _t38 = $t.get(_o16);
          if (void 0 === _t38) {
            _o16 = null;
            break;
          }
          if (_t38.__parent === _e40) break;
          _o16 = _t38.__parent;
        }
        if (null !== _o16 && !n.has(_o16)) {
          var _t39 = $t.get(r);
          if (Er(_t39))
            return ((At = _t39.getFormat()), void (wt = _t39.getStyle()));
        }
      }
      e.__lexicalFirstTextKey = Dt;
    }
    function se(e, n) {
      var r = Bt.get(e);
      var o = $t.get(e);
      (void 0 !== r && void 0 !== o) || t(61);
      var i = Ht || Kt.has(e) || Lt.has(e),
        s = gs(Et, e);
      if (r === o && !i) {
        var _e41;
        if ($o(r)) {
          var _n29 = s.__lexicalTextContent;
          ("string" != typeof _n29 && t(355, r.getType()),
            (_e41 = _n29),
            Ft(s));
        } else _e41 = r.getTextContent();
        return ((Mt += _e41), s);
      }
      if (
        (r !== o && i && as(Yt, bt, Rt, o, "updated"),
        jt.$updateDOM(o, r, s, Et))
      ) {
        var _r17 = ee(e, null);
        return (
          null === n && t(62),
          n.replaceChild(_r17, s),
          Gt(e, null),
          _r17
        );
      }
      if ($o(r)) {
        $o(o) || t(334, e);
        var _n30 = o.__indent;
        (Ht || _n30 !== r.__indent) && Qt(s, _n30);
        var _l2 = o.__format;
        if (((Ht || _l2 !== r.__format) && Zt(s, _l2), i))
          (oe(r, o, s), Ho(o) || o.isInline() || re(0, o, s));
        else {
          var _e42 = s.__lexicalTextContent;
          ("string" != typeof _e42 && t(356, r.getType()), (Mt += _e42), Ft(s));
        }
        if (
          (Ht || o.__dir !== r.__dir || o.__parent !== r.__parent) &&
          (te(s, o), Ho(o) && !Ht)
        )
          for (var _t40 of o.getChildren())
            if ($o(_t40)) {
              te(gs(Et, _t40.getKey()), _t40);
            }
      } else {
        var _t41 = o.getTextContent();
        if (Yo(o)) {
          var _t42 = o.decorate(Et, Ot);
          null !== _t42 && le(e, _t42);
        }
        Mt += _t41;
      }
      if (!Jt && Ho(o)) {
        var _t43 = o.getLatest();
        if (_t43.__cachedText !== Mt) {
          var _e43 = _t43.getWritable();
          ((_e43.__cachedText = Mt), (o = _e43));
        }
      }
      return (jt.$decorateDOM(o, r, s, Et), vt(o), s);
    }
    function le(t, e) {
      var n = Et._pendingDecorators;
      var r = Et._decorators;
      if (null === n) {
        if (r[t] === e) return;
        n = Ui(Et);
      }
      n[t] = e;
    }
    function ce(t) {
      var e = t.nextSibling;
      return (
        null !== e && e === Et._blockCursorElement && (e = e.nextSibling),
        e
      );
    }
    function ae(t, e) {
      var n = new Set();
      for (var _r18 = e; _r18 < t.length; _r18++) n.add(t[_r18]);
      return n;
    }
    function ue(t, e, n, r, o, i) {
      ((Mt = ""),
        (At = null),
        (wt = null),
        (Dt = null),
        (Ht = 2 === r),
        (Et = n),
        (Ot = n._config),
        (jt = n._config.dom || di),
        (bt = n._nodes),
        (Rt = Et._listeners.mutation),
        (Lt = o),
        (Kt = i),
        (Bt = t._nodeMap),
        (zt = t),
        ($t = e._nodeMap),
        (Jt = e._readOnly),
        (Wt = j(n._keyToDOMMap)),
        (Ut = (function () {
          var t = new Map(),
            e = function e(_e45) {
              for (var _n31 of _e45) {
                var _e44 = $t.get(_n31);
                if (void 0 === _e44) continue;
                var _r19 = _e44.__parent;
                if (null === _r19) continue;
                var _o17 = t.get(_r19);
                (void 0 === _o17 && ((_o17 = new Set()), t.set(_r19, _o17)),
                  _o17.add(_n31));
              }
            };
          return (e(Lt.keys()), e(Kt), t);
        })()));
      var s = new Map();
      return (
        (Yt = s),
        se("root", null),
        (Et = void 0),
        (bt = void 0),
        (Lt = void 0),
        (Kt = void 0),
        (Bt = void 0),
        (zt = void 0),
        ($t = void 0),
        (Ot = void 0),
        (Wt = void 0),
        (Ut = void 0),
        (Yt = void 0),
        (jt = di),
        s
      );
    }
    function fe(e) {
      var n = Wt.get(e);
      return (void 0 === n && t(75, e), n);
    }
    function de(t) {
      return { type: t };
    }
    var he = de("SELECTION_CHANGE_COMMAND"),
      ge = de("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"),
      _e = de("CLICK_COMMAND"),
      pe = de("BEFORE_INPUT_COMMAND"),
      ye = de("INPUT_COMMAND"),
      me = de("COMPOSITION_START_COMMAND"),
      xe = de("COMPOSITION_END_COMMAND"),
      Ce = de("DELETE_CHARACTER_COMMAND"),
      Se = de("INSERT_LINE_BREAK_COMMAND"),
      Te = de("INSERT_PARAGRAPH_COMMAND"),
      Ne = de("CONTROLLED_TEXT_INSERTION_COMMAND"),
      ve = de("PASTE_COMMAND"),
      ke = de("REMOVE_TEXT_COMMAND"),
      Oe = de("DELETE_WORD_COMMAND"),
      Ee = de("DELETE_LINE_COMMAND"),
      be = de("FORMAT_TEXT_COMMAND"),
      Me = de("UNDO_COMMAND"),
      Ae = de("REDO_COMMAND"),
      we = de("KEYDOWN_COMMAND"),
      De = de("KEY_ARROW_RIGHT_COMMAND"),
      Ie = de("MOVE_TO_END"),
      Pe = de("KEY_ARROW_LEFT_COMMAND"),
      Fe = de("MOVE_TO_START"),
      Re = de("KEY_ARROW_UP_COMMAND"),
      Le = de("KEY_ARROW_DOWN_COMMAND"),
      Ke = de("KEY_ENTER_COMMAND"),
      Be = de("KEY_SPACE_COMMAND"),
      ze = de("KEY_BACKSPACE_COMMAND"),
      $e = de("KEY_ESCAPE_COMMAND"),
      We = de("KEY_DELETE_COMMAND"),
      Ue = de("KEY_TAB_COMMAND"),
      Ye = de("INSERT_TAB_COMMAND"),
      je = de("INDENT_CONTENT_COMMAND"),
      He = de("OUTDENT_CONTENT_COMMAND"),
      Je = de("DROP_COMMAND"),
      Ge = de("FORMAT_ELEMENT_COMMAND"),
      Ve = de("DRAGSTART_COMMAND"),
      qe = de("DRAGOVER_COMMAND"),
      Xe = de("DRAGEND_COMMAND"),
      Qe = de("COPY_COMMAND"),
      Ze = de("CUT_COMMAND"),
      tn = de("SELECT_ALL_COMMAND"),
      en = de("CLEAR_EDITOR_COMMAND"),
      nn = de("CLEAR_HISTORY_COMMAND"),
      rn = de("CAN_REDO_COMMAND"),
      on = de("CAN_UNDO_COMMAND"),
      sn = de("FOCUS_COMMAND"),
      ln = de("BLUR_COMMAND"),
      cn = de("KEY_MODIFIER_COMMAND"),
      an = Object.freeze({}),
      un = [
        [
          "keydown",
          function (t, e) {
            ((fn = t.timeStamp), (dn = t.key), "Backspace" !== t.key && Pn());
            if (e.isComposing()) return;
            hs(e, we, t);
          },
        ],
        [
          "pointerdown",
          function (t, e) {
            var n = t.target,
              r = t.pointerType;
            Is(n) &&
              "touch" !== r &&
              "pen" !== r &&
              0 === t.button &&
              Bo(e, function () {
                tl(n, e) || (Cn = !0);
              });
          },
        ],
        [
          "compositionstart",
          function (t, e) {
            hs(e, me, t);
          },
        ],
        [
          "compositionend",
          function (t, e) {
            o
              ? (Tn = !0)
              : s || (!c && !f)
                ? hs(e, xe, t)
                : ((Nn = !0), (vn = t.data));
          },
        ],
        [
          "input",
          function (t, e) {
            (t.stopPropagation(),
              Pn(),
              Bo(
                e,
                function () {
                  e.dispatchCommand(ye, t);
                },
                { event: t },
              ),
              (gn = null));
          },
        ],
        [
          "click",
          function (t, e) {
            Bo(e, function () {
              var n = to(),
                r = As(Ss(e)),
                o = eo();
              if (r)
                if (Lr(n)) {
                  var _t44 = n.anchor,
                    _e46 = _t44.getNode();
                  "element" === _t44.type &&
                    0 === _t44.offset &&
                    n.isCollapsed() &&
                    !Ho(_e46) &&
                    1 === ji().getChildrenSize() &&
                    _e46.getTopLevelElementOrThrow().isEmpty() &&
                    null !== o &&
                    n.is(o) &&
                    (r.removeAllRanges(), (n.dirty = !0));
                } else if (
                  "touch" === t.pointerType ||
                  "pen" === t.pointerType
                ) {
                  var _n32 = r.anchorNode;
                  if (Ds(_n32) || Mi(_n32)) {
                    Ji(Zr(o, r, e, t));
                  }
                }
              hs(e, _e, t);
            });
          },
        ],
        ["cut", an],
        ["copy", an],
        ["dragstart", an],
        ["dragover", an],
        ["dragend", an],
        ["paste", an],
        ["focus", an],
        ["blur", an],
        ["drop", an],
      ];
    i &&
      un.push([
        "beforeinput",
        function (t, e) {
          return (function (t, e) {
            var n = t.inputType;
            if ("deleteCompositionText" === n || (o && ds(e))) return;
            if ("insertCompositionText" === n) return;
            hs(e, pe, t);
          })(t, e);
        },
      ]);
    var fn = 0,
      dn = null,
      hn = 0,
      gn = null,
      _n = !1,
      pn = null;
    var yn = new WeakMap(),
      mn = new WeakMap();
    var xn = !1,
      Cn = !1,
      Sn = !1,
      Tn = !1,
      Nn = !1,
      vn = "",
      kn = null,
      On = [0, "", 0, "root", 0];
    function En(t, e, n, r, o) {
      var s = t.anchor,
        l = t.focus,
        c = s.getNode(),
        a = ko(),
        u = As(Ss(a)),
        f = null !== u ? u.anchorNode : null,
        d = s.key,
        h = a.getElementByKey(d),
        g = n.length;
      return (
        d !== l.key ||
        !Er(c) ||
        (((!o && (!i || hn < r + 50)) || (c.isDirty() && g < 2) || Vi(n)) &&
          s.offset !== l.offset &&
          !c.isComposing()) ||
        bi(c) ||
        (c.isDirty() && g > 1) ||
        ((o || !i) && null !== h && !c.isComposing() && f !== Ys(c, h, a)) ||
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
            o = Ei(e);
          return 0 === n
            ? !e.canInsertTextBefore() ||
                (!r.canInsertTextBefore() && !e.isComposing()) ||
                o ||
                (function (t) {
                  var e = t.getPreviousSibling();
                  return (
                    (Er(e) || ($o(e) && e.isInline())) &&
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
    function bn(t, e) {
      return (
        Mi(t) && null !== t.nodeValue && 0 !== e && e !== t.nodeValue.length
      );
    }
    function Mn(e, n, r) {
      var o = e.anchorNode,
        i = e.anchorOffset,
        s = e.focusNode,
        l = e.focusOffset;
      (xn && ((xn = !1), bn(o, i) && bn(s, l) && !kn)) ||
        Bo(n, function () {
          if (!r) return void Ji(null);
          if (!Ni(n, o, s)) return;
          var c = to();
          if (kn && Lr(c) && c.isCollapsed()) {
            var _t45 = c.anchor,
              _e47 = kn.anchor;
            ((_t45.key === _e47.key && _t45.offset === _e47.offset + 1) ||
              (1 === _t45.offset &&
                _e47.getNode().is(_t45.getNode().getPreviousSibling()))) &&
              ((c = kn.clone()), Ji(c));
          }
          if (((kn = null), Lr(c))) {
            var _r20 = c.anchor,
              _o18 = _r20.getNode();
            if (c.isCollapsed()) {
              "Range" === e.type &&
                e.anchorNode === e.focusNode &&
                (c.dirty = !0);
              var _i12 = Ss(n).event,
                _s7 = _i12 ? _i12.timeStamp : performance.now(),
                _On = On,
                _l3 = _On[0],
                _a2 = _On[1],
                _u2 = _On[2],
                _f2 = _On[3],
                _d3 = _On[4],
                _h3 = ji(),
                _g2 = !1 === n.isComposing() && "" === _h3.getTextContent();
              if (_s7 < _d3 + 200 && _r20.offset === _u2 && _r20.key === _f2)
                An(c, _l3, _a2);
              else if ("text" === _r20.type) (Er(_o18) || t(141), wn(c, _o18));
              else if ("element" === _r20.type && !_g2) {
                $o(_o18) || t(259);
                var _e48 = _r20.getNode();
                _e48.isEmpty()
                  ? (function (t, e) {
                      var n = e.getTextFormat(),
                        r = e.getTextStyle();
                      An(t, n, r);
                    })(c, _e48)
                  : An(c, c.format, "");
              }
            } else {
              var _t46 = _r20.key,
                _e49 = c.focus.key,
                _n33 = c.getNodes(),
                _o19 = _n33.length,
                _s8 = c.isBackward(),
                _a3 = _s8 ? l : i,
                _u3 = _s8 ? i : l,
                _f3 = _s8 ? _e49 : _t46,
                _d4 = _s8 ? _t46 : _e49;
              var _h4 = 2047,
                _g3 = !1;
              for (var _t47 = 0; _t47 < _o19; _t47++) {
                var _e50 = _n33[_t47],
                  _r21 = _e50.getTextContentSize();
                if (
                  Er(_e50) &&
                  0 !== _r21 &&
                  !(
                    (0 === _t47 && _e50.__key === _f3 && _a3 === _r21) ||
                    (_t47 === _o19 - 1 && _e50.__key === _d4 && 0 === _u3)
                  ) &&
                  ((_g3 = !0), (_h4 &= _e50.getFormat()), 0 === _h4)
                )
                  break;
              }
              c.format = _g3 ? _h4 : 0;
            }
          }
          hs(n, he, void 0);
        });
    }
    function An(t, e, n) {
      (t.format === e && t.style === n) ||
        ((t.format = e), (t.style = n), (t.dirty = !0));
    }
    function wn(t, e) {
      An(t, e.getFormat(), e.getStyle());
    }
    function Dn(t) {
      if (!t.getTargetRanges) return null;
      var e = t.getTargetRanges();
      return 0 === e.length ? null : e[0];
    }
    function In(t) {
      if (null == t || t.length <= 1 || null == dn) return;
      var e =
        1 === dn.length
          ? dn
          : "Enter" === dn
            ? "\n"
            : "Tab" === dn
              ? "\t"
              : null;
      if (!e) return;
      var n = to();
      if (!Lr(n) || !n.isCollapsed()) return;
      var r = n.anchor.getNode();
      if (!Er(r)) return;
      var o = n.anchor.offset;
      if (r.getTextContentSize() === o) {
        var _t48 = r.getNextSibling();
        if ("\n" === e) {
          if (ei(_t48)) _t48.selectEnd();
          else if (!_t48) {
            var _t49 = rl(r, Vr),
              _e51 = _t49 && _t49.getNextSibling();
            $o(_e51) && _e51.selectStart();
          }
        } else
          "\t" === e
            ? wr(_t48) && _t48.selectEnd()
            : Er(_t48) && _t48.getTextContent()[0] === e && _t48.select(1, 1);
      } else r.getTextContent()[o] === e && r.select(o + 1, o + 1);
    }
    function Pn() {
      ((_n = !1), null !== pn && (clearTimeout(pn), (pn = null)));
    }
    function Fn() {
      (Pn(), (_n = !0), (pn = setTimeout(Pn, 0)));
    }
    function Rn(e) {
      var _ref15;
      var n = e.inputType,
        r = Dn(e),
        o = ko(),
        i = to();
      if ("insertText" === n && e.data && _n) {
        if ((Pn(), e.preventDefault(), Lr(i) && !i.isCollapsed())) {
          var _t50 = i.isBackward() ? i.anchor : i.focus;
          (i.anchor.set(_t50.key, _t50.offset, _t50.type),
            i.focus.set(_t50.key, _t50.offset, _t50.type));
        }
        return !0;
      }
      if ("deleteContentBackward" === n) {
        if (null === i) {
          var _t51 = eo();
          if (!Lr(_t51)) return !0;
          Ji(_t51.clone());
        }
        if (Lr(i)) {
          var _n34 = i.anchor.key === i.focus.key;
          if (
            ((l = e.timeStamp),
            "MediaLast" === dn && l < fn + 30 && o.isComposing() && _n34)
          ) {
            if (
              (Ri(null),
              (fn = 0),
              setTimeout(function () {
                Bo(o, function () {
                  Ri(null);
                });
              }, 30),
              Lr(i))
            ) {
              var _e52 = i.anchor.getNode();
              (_e52.markDirty(), Er(_e52) || t(142), wn(i, _e52));
            }
          } else {
            if (
              (Ri(null),
              s &&
                null !== r &&
                !r.collapsed &&
                (i.applyDOMRange(r), !i.isCollapsed()))
            )
              return (e.preventDefault(), i.removeText(), !0);
            e.preventDefault();
            var _t52 = i.anchor.getNode(),
              _l4 = _t52.getTextContent(),
              _c2 = _t52.canInsertTextAfter(),
              _a4 = 0 === i.anchor.offset && i.focus.offset === _l4.length;
            var _f4 = u && _n34 && !_a4 && _c2;
            if (
              (_f4 && i.isCollapsed() && (_f4 = !Yo(fs(i.anchor, !0))), !_f4)
            ) {
              hs(o, Ce, !0);
              var _t53 = to();
              u &&
                Lr(_t53) &&
                _t53.isCollapsed() &&
                ((kn = _t53),
                setTimeout(function () {
                  return (kn = null);
                }));
            }
          }
          return !0;
        }
      }
      var l;
      if (!Lr(i)) return !0;
      var c = e.data;
      (null !== gn && Zi(!1, o, gn),
        (i.dirty && null === gn) ||
          !i.isCollapsed() ||
          Ho(i.anchor.getNode()) ||
          null === r ||
          i.applyDOMRange(r),
        (gn = null));
      var a = i.anchor,
        f = i.focus,
        d = a.getNode(),
        h = f.getNode();
      if ("insertText" === n || "insertTranspose" === n) {
        if ("\n" === c) (e.preventDefault(), hs(o, Se, !1));
        else if (c === N) (e.preventDefault(), hs(o, Te, void 0));
        else if (null == c && e.dataTransfer) {
          var _t54 = e.dataTransfer.getData("text/plain");
          (e.preventDefault(), i.insertRawText(_t54));
        } else
          null != c && En(i, r, c, e.timeStamp, !0)
            ? (e.preventDefault(), hs(o, Ne, c), In(c))
            : (gn = c);
        return ((hn = e.timeStamp), !0);
      }
      switch ((e.preventDefault(), n)) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          hs(o, Ne, e);
          In(
            (_ref15 = e.dataTransfer
              ? e.dataTransfer.getData("text/plain")
              : null) != null
              ? _ref15
              : e.data,
          );
          break;
        case "insertFromComposition":
          (Ri(null), hs(o, Ne, e));
          break;
        case "insertLineBreak":
          (Ri(null), hs(o, Se, !1));
          break;
        case "insertParagraph":
          (Ri(null), Sn && !s ? ((Sn = !1), hs(o, Se, !1)) : hs(o, Te, void 0));
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          hs(o, ve, e);
          break;
        case "deleteByComposition":
          (function (t, e) {
            return t !== e || $o(t) || $o(e) || !Ei(t) || !Ei(e);
          })(d, h) && hs(o, ke, e);
          break;
        case "deleteByDrag":
          (ys(or), hs(o, ke, e));
          break;
        case "deleteByCut":
          hs(o, ke, e);
          break;
        case "deleteContent":
          hs(o, Ce, !1);
          break;
        case "deleteWordBackward":
          hs(o, Oe, !0);
          break;
        case "deleteWordForward":
          hs(o, Oe, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          hs(o, Ee, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          hs(o, Ee, !1);
          break;
        case "formatStrikeThrough":
          hs(o, be, "strikethrough");
          break;
        case "formatBold":
          hs(o, be, "bold");
          break;
        case "formatItalic":
          hs(o, be, "italic");
          break;
        case "formatUnderline":
          hs(o, be, "underline");
          break;
        case "historyUndo":
          hs(o, Me, void 0);
          break;
        case "historyRedo":
          hs(o, Ae, void 0);
      }
      return !0;
    }
    function Ln(t) {
      var e = ko();
      if (Ds(t.target) && tl(t.target, e)) return !0;
      var n = to(),
        r = t.data,
        s = Dn(t);
      if (null != r && Lr(n) && En(n, s, r, t.timeStamp, !1)) {
        Tn && (zn(e, r), (Tn = !1));
        var _s9 = n.anchor.getNode(),
          _l5 = As(Ss(e));
        if (null === _l5) return !0;
        var _c3 = n.isBackward(),
          _a5 = _c3 ? n.anchor.offset : n.focus.offset,
          _f5 = _c3 ? n.focus.offset : n.anchor.offset;
        (i &&
          !n.isCollapsed() &&
          Er(_s9) &&
          null !== _l5.anchorNode &&
          _s9.getTextContent().slice(0, _a5) +
            r +
            _s9.getTextContent().slice(_a5 + _f5) ===
            Qi(_l5.anchorNode)) ||
          hs(e, Ne, r);
        var _d5 = r.length;
        (o &&
          _d5 > 1 &&
          "insertCompositionText" === t.inputType &&
          !e.isComposing() &&
          ((n.anchor.offset -= _d5),
          (n._cachedNodes = null),
          (n._cachedIsBackward = null)),
          u && e.isComposing() && ((fn = 0), Ri(null)));
      } else {
        (Zi(!1, e, null !== r ? r : void 0),
          Tn && (zn(e, r || void 0), (Tn = !1)));
      }
      return (
        (function () {
          To();
          var t = ko();
          rt(t);
        })(),
        !0
      );
    }
    function Kn(t) {
      var e = ko(),
        n = to();
      if (Lr(n) && !e.isComposing()) {
        var _r22 = n.anchor,
          _o20 = n.anchor.getNode();
        (Ri(_r22.key),
          ys(ir),
          (t.timeStamp < fn + 30 ||
            "element" === _r22.type ||
            !n.isCollapsed() ||
            _o20.getFormat() !== n.format ||
            (Er(_o20) && _o20.getStyle() !== n.style)) &&
            hs(e, Ne, v));
      }
      return !0;
    }
    function Bn(t) {
      return (zn(ko(), t.data), ys(sr), !0);
    }
    function zn(t, e) {
      var n = t._compositionKey;
      if ((Ri(null), null !== n && null != e)) {
        if ("" === e) {
          var _e53 = Ki(n),
            _r23 = t.getElementByKey(n),
            _o21 = null !== _r23 && Er(_e53) ? Ys(_e53, _r23, t) : null;
          if (null !== _o21 && null !== _o21.nodeValue && Er(_e53)) {
            var _n35 = As(Ss(t));
            var _r24 = null,
              _i13 = null;
            (null !== _n35 &&
              _n35.anchorNode === _o21 &&
              ((_r24 = _n35.anchorOffset), (_i13 = _n35.focusOffset)),
              ts(_e53, _o21.nodeValue, _r24, _i13, !0));
          }
          return;
        }
        if ("\n" === e[e.length - 1]) {
          var _e54 = to();
          if (Lr(_e54) || Br(_e54)) {
            if (Lr(_e54)) {
              var _t55 = _e54.focus;
              _e54.anchor.set(_t55.key, _t55.offset, _t55.type);
            }
            return void hs(t, Ke, null);
          }
        }
      }
      Zi(!0, t, e);
    }
    function $n(t) {
      var e = ko();
      if (null == t.key) return !0;
      if (Nn) {
        if (ls(t))
          return (
            Bo(e, function () {
              zn(e, vn);
            }),
            (Nn = !1),
            (vn = ""),
            !0
          );
        ((Nn = !1), (vn = ""));
      }
      if (
        (function (t) {
          return os(t, "ArrowRight", { shiftKey: "any" });
        })(t)
      )
        hs(e, De, t);
      else if (
        (function (t) {
          return os(
            t,
            "ArrowRight",
            babelHelpers["extends"]({}, is, { shiftKey: "any" }),
          );
        })(t)
      )
        hs(e, Ie, t);
      else if (
        (function (t) {
          return os(t, "ArrowLeft", { shiftKey: "any" });
        })(t)
      )
        hs(e, Pe, t);
      else if (
        (function (t) {
          return os(
            t,
            "ArrowLeft",
            babelHelpers["extends"]({}, is, { shiftKey: "any" }),
          );
        })(t)
      )
        hs(e, Fe, t);
      else if (
        (function (t) {
          return os(t, "ArrowUp", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        hs(e, Re, t);
      else if (
        (function (t) {
          return os(t, "ArrowDown", { altKey: "any", shiftKey: "any" });
        })(t)
      )
        hs(e, Le, t);
      else if (
        (function (t) {
          return os(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
            shiftKey: !0,
          });
        })(t)
      )
        ((Sn = !0), hs(e, Ke, t));
      else if (
        (function (t) {
          return " " === t.key;
        })(t)
      )
        hs(e, Be, t);
      else if (
        (function (t) {
          return r && os(t, "o", { ctrlKey: !0 });
        })(t)
      )
        (t.preventDefault(), (Sn = !0), hs(e, Se, !0));
      else if (
        (function (t) {
          return os(t, "Enter", {
            altKey: "any",
            ctrlKey: "any",
            metaKey: "any",
          });
        })(t)
      )
        ((Sn = !1), hs(e, Ke, t));
      else if (
        (function (t) {
          return (
            os(t, "Backspace", { shiftKey: "any" }) ||
            (r && os(t, "h", { ctrlKey: !0 }))
          );
        })(t)
      )
        ls(t) ? hs(e, ze, t) && Fn() : (t.preventDefault(), hs(e, Ce, !0));
      else if (
        (function (t) {
          return "Escape" === t.key;
        })(t)
      )
        hs(e, $e, t);
      else if (
        (function (t) {
          return os(t, "Delete", {}) || (r && os(t, "d", { ctrlKey: !0 }));
        })(t)
      )
        !(function (t) {
          return "Delete" === t.key;
        })(t)
          ? (t.preventDefault(), hs(e, Ce, !1))
          : hs(e, We, t);
      else if (
        (function (t) {
          return os(t, "Backspace", ss);
        })(t)
      )
        (t.preventDefault(), hs(e, Oe, !0));
      else if (
        (function (t) {
          return os(t, "Delete", ss);
        })(t)
      )
        (t.preventDefault(), hs(e, Oe, !1));
      else if (
        (function (t) {
          return r && os(t, "Backspace", { metaKey: !0 });
        })(t)
      )
        (t.preventDefault(), hs(e, Ee, !0));
      else if (
        (function (t) {
          return (
            r &&
            (os(t, "Delete", { metaKey: !0 }) || os(t, "k", { ctrlKey: !0 }))
          );
        })(t)
      )
        (t.preventDefault(), hs(e, Ee, !1));
      else if (
        (function (t) {
          return os(t, "b", is);
        })(t)
      )
        (t.preventDefault(), hs(e, be, "bold"));
      else if (
        (function (t) {
          return os(t, "u", is);
        })(t)
      )
        (t.preventDefault(), hs(e, be, "underline"));
      else if (
        (function (t) {
          return os(t, "i", is);
        })(t)
      )
        (t.preventDefault(), hs(e, be, "italic"));
      else if (
        (function (t) {
          return os(t, "Tab", { shiftKey: "any" });
        })(t)
      )
        hs(e, Ue, t);
      else if (
        (function (t) {
          return os(t, "z", is);
        })(t)
      )
        (t.preventDefault(), hs(e, Me, void 0));
      else if (
        (function (t) {
          if (r) return os(t, "z", { metaKey: !0, shiftKey: !0 });
          return (
            os(t, "y", { ctrlKey: !0 }) ||
            os(t, "z", { ctrlKey: !0, shiftKey: !0 })
          );
        })(t)
      )
        (t.preventDefault(), hs(e, Ae, void 0));
      else {
        var _n36 = e._editorState._selection;
        !(function (t) {
          return os(t, "a", is);
        })(t)
          ? null === _n36 ||
            Lr(_n36) ||
            (!(function (t) {
              return os(t, "c", is);
            })(t)
              ? (function (t) {
                  return os(t, "x", is);
                })(t) && (t.preventDefault(), hs(e, Ze, t))
              : (t.preventDefault(), hs(e, Qe, t)))
          : (t.preventDefault(), hs(e, tn, t) && Fn());
      }
      return (
        (function (t) {
          return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey;
        })(t) && e.dispatchCommand(cn, t),
        !0
      );
    }
    function Wn(t) {
      var e = t.__lexicalEventHandles;
      return (void 0 === e && ((e = []), (t.__lexicalEventHandles = e)), e);
    }
    var Un = new Map();
    function Yn(t) {
      var e = ws(t.target);
      if (null === e) return;
      var n = ki(e.anchorNode);
      if (null === n) return;
      Cn &&
        ((Cn = !1),
        Bo(n, function () {
          var r = eo(),
            o = e.anchorNode;
          if (Ds(o) || Mi(o)) {
            Ji(Zr(r, e, n, t));
          }
        }));
      var r = qi(n),
        o = r[r.length - 1],
        i = o._key,
        s = Un.get(i),
        l = s || o;
      (l !== n && Mn(e, l, !1),
        Mn(e, n, !0),
        n !== o ? Un.set(i, n) : s && Un["delete"](i));
    }
    function jn(t) {
      t._lexicalHandled = !0;
    }
    function Hn(t) {
      return !0 === t._lexicalHandled;
    }
    var Jn = function Jn() {};
    function Gn(e) {
      var n = yn.get(e);
      if (void 0 === n) return void Jn();
      var r = mn.get(n);
      if (void 0 === r) return void Jn();
      var o = r - 1;
      (o >= 0 || t(164),
        yn["delete"](e),
        mn.set(n, o),
        0 === o && n.removeEventListener("selectionchange", Yn));
      var i = Oi(e);
      vi(i)
        ? (!(function (t) {
            if (null !== t._parentEditor) {
              var _e55 = qi(t),
                _n37 = _e55[_e55.length - 1]._key;
              Un.get(_n37) === t && Un["delete"](_n37);
            } else Un["delete"](t._key);
          })(i),
          (e.__lexicalEditor = null))
        : i && t(198);
      var s = Wn(e);
      for (var _t56 = 0; _t56 < s.length; _t56++) s[_t56]();
      e.__lexicalEventHandles = [];
    }
    function Vn(t, e, n) {
      To();
      var r = t.__key,
        o = t.getParent();
      if (null === o) return;
      var i = (function (t) {
        var e = to();
        if (!Lr(e) || !$o(t)) return e;
        var n = e.anchor,
          r = e.focus,
          o = n.getNode(),
          i = r.getNode();
        xs(o, t) && n.set(t.__key, 0, "element");
        xs(i, t) && r.set(t.__key, 0, "element");
        return e;
      })(t);
      var s = !1;
      if (Lr(i) && e) {
        var _e56 = i.anchor,
          _n38 = i.focus;
        (_e56.key === r &&
          (oo(_e56, t, o, t.getPreviousSibling(), t.getNextSibling()),
          (s = !0)),
          _n38.key === r &&
            (oo(_n38, t, o, t.getPreviousSibling(), t.getNextSibling()),
            (s = !0)));
      } else Br(i) && e && t.isSelected() && t.selectPrevious();
      if (Lr(i) && e && !s) {
        var _e57 = t.getIndexWithinParent();
        (Pi(t), no(i, o, _e57, -1));
      } else Pi(t);
      (n || Ns(o) || o.canBeEmpty() || !o.isEmpty() || Vn(o, e),
        e && i && Ho(o) && o.isEmpty() && o.selectEnd());
    }
    var qn = Symbol["for"]("ephemeral");
    function Xn(t) {
      return t[qn] || !1;
    }
    var Qn = { configurable: !0, enumerable: !1, value: void 0, writable: !0 };
    var _Zn5 = (function () {
      function Zn(t) {
        ((this.__type = this.constructor.getType()),
          (this.__parent = null),
          (this.__prev = null),
          (this.__next = null),
          Object.defineProperty(this, "__state", Qn),
          Object.defineProperty(this, Tt, Qn),
          Ii(this, t));
      }
      Zn.getType = function getType() {
        var _nl2 = nl(this),
          e = _nl2.ownNodeType;
        return (void 0 === e && t(64, this.name), e);
      };
      Zn.clone = function clone(e) {
        t(65, this.name);
      };
      var _proto6 = Zn.prototype;
      _proto6.$config = function $config() {
        return {};
      };
      _proto6.config = function config(t, e) {
        var _ref16;
        var n = e["extends"] || Object.getPrototypeOf(this.constructor);
        return (
          Object.assign(e, { extends: n, type: t }),
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
          var _e58 = Ki(t);
          if (null === _e58) break;
          t = _e58.__parent;
        }
        return !1;
      };
      _proto6.isSelected = function isSelected(t) {
        var _this12 = this;
        var e = t || to();
        if (null == e) return !1;
        var n = e.getNodes().some(function (t) {
          return t.__key === _this12.__key;
        });
        if (Er(this)) return n;
        if (
          Lr(e) &&
          "element" === e.anchor.type &&
          "element" === e.focus.type
        ) {
          if (e.isCollapsed()) return !1;
          var _t57 = this.getParent();
          if (Yo(this) && this.isInline() && _t57) {
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
        return null === t ? null : Ki(t);
      };
      _proto6.getParentOrThrow = function getParentOrThrow() {
        var e = this.getParent();
        return (null === e && t(66, this.__key), e);
      };
      _proto6.getTopLevelElement = function getTopLevelElement() {
        var e = this;
        for (; null !== e; ) {
          var _n40 = e.getParent();
          if (Ns(_n40)) return ($o(e) || (e === this && Yo(e)) || t(194), e);
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
        return null === t ? null : Ki(t);
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
        return null === t ? null : Ki(t);
      };
      _proto6.getNextSiblings = function getNextSiblings() {
        var t = [];
        var e = this.getNextSibling();
        for (; null !== e; ) (t.push(e), (e = e.getNextSibling()));
        return t;
      };
      _proto6.getCommonAncestor = function getCommonAncestor(t) {
        var e = $o(this) ? this : this.getParent(),
          n = $o(t) ? t : t.getParent(),
          r = e && n ? Rl(e, n) : null;
        return r ? r.commonAncestor : null;
      };
      _proto6.is = function is(t) {
        return null != t && this.__key === t.__key;
      };
      _proto6.isBefore = function isBefore(e) {
        var n = Rl(this, e);
        return (
          null !== n &&
          ("descendant" === n.type ||
            ("branch" === n.type
              ? -1 === Il(n)
              : ("same" !== n.type && "ancestor" !== n.type && t(279), !1)))
        );
      };
      _proto6.isParentOf = function isParentOf(t) {
        var e = Rl(this, t);
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
          var _l6 = $o(i) ? (n ? i.getFirstChild() : i.getLastChild()) : null;
          if (null !== _l6) {
            i = _l6;
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
            _f6 = _a6;
          do {
            if (
              (null === _f6 && t(68),
              (_u4 = n ? _f6.getNextSibling() : _f6.getPreviousSibling()),
              (_f6 = _f6.getParent()),
              null === _f6)
            )
              break;
            null !== _u4 || o.has(_f6.__key) || r.push(_f6);
          } while (null === _u4);
          i = _u4;
        }
        return (n || r.reverse(), r);
      };
      _proto6.isDirty = function isDirty() {
        var t = ko()._dirtyLeaves;
        return null !== t && t.has(this.__key);
      };
      _proto6.getLatest = function getLatest() {
        if (Xn(this)) return this;
        var e = Ki(this.__key);
        return (null === e && t(113), e);
      };
      _proto6.getWritable = function getWritable() {
        if (Xn(this)) return this;
        To();
        var t = vo(),
          e = ko(),
          n = t._nodeMap,
          r = this.__key,
          o = this.getLatest(),
          i = e._cloneNotNeeded,
          s = to();
        if ((null !== s && s.setCachedNodes(null), i.has(r))) return (Fi(o), o);
        var l = Gs(o);
        return (i.add(r), Fi(l), n.set(r, l), l);
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
      Zn.importJSON = function importJSON(e) {
        t(18, this.name);
      };
      _proto6.updateFromJSON = function updateFromJSON(t) {
        return (function (t, e) {
          var n = t.getWritable(),
            r = e.$;
          var o = r;
          for (var _t58 of ft(n).flatKeys)
            _t58 in e &&
              ((void 0 !== o && o !== r) ||
                (o = babelHelpers["extends"]({}, r)),
              (o[_t58] = e[_t58]));
          return ((n.__state || o) && ut(t).updateFromJSON(o), n);
        })(this, t);
      };
      Zn.transform = function transform() {
        return null;
      };
      _proto6.remove = function remove(t) {
        Vn(this, !0, t);
      };
      _proto6.replace = function replace(e, n) {
        To();
        var r = to();
        (null !== r && (r = r.clone()), Os(this, e));
        var o = this.getLatest(),
          i = this.__key,
          s = e.__key,
          l = e.getWritable(),
          c = this.getParentOrThrow().getWritable(),
          a = c.__size,
          u = l.getParent(),
          f = null !== u ? l.getIndexWithinParent() : -1;
        (Pi(l), null !== u && Lr(r) && no(r, u, f, -1));
        var d = o.getPreviousSibling(),
          h = o.getNextSibling(),
          g = o.__prev,
          _ = o.__next,
          p = o.__parent;
        if ((Vn(o, !1, !0), null === d)) c.__first = s;
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
            (($o(this) && $o(l)) || t(139),
            (y = l.getChildrenSize()),
            l.splice(y, 0, this.getChildren())),
          Lr(r))
        ) {
          Ji(r);
          var _t59 = r.anchor,
            _e59 = r.focus;
          (_t59.key === i &&
            (n && "element" === _t59.type
              ? _t59.set(l.__key, y + _t59.offset, "element")
              : Fr(_t59, l)),
            _e59.key === i &&
              (n && "element" === _e59.type
                ? _e59.set(l.__key, y + _e59.offset, "element")
                : Fr(_e59, l)));
        }
        return (Li() === i && Ri(s), l);
      };
      _proto6.insertAfter = function insertAfter(t, e) {
        if (e === void 0) {
          e = !0;
        }
        (To(), Os(this, t));
        var n = this.getWritable(),
          r = t.getWritable(),
          o = r.getParent(),
          i = to();
        var s = !1,
          l = !1;
        if (null !== o) {
          var _n41 = t.getIndexWithinParent();
          if (Lr(i)) {
            var _t60 = o.__key,
              _e60 = i.anchor,
              _r25 = i.focus;
            ((s =
              "element" === _e60.type &&
              _e60.key === _t60 &&
              _e60.offset === _n41 + 1),
              (l =
                "element" === _r25.type &&
                _r25.key === _t60 &&
                _r25.offset === _n41 + 1));
          }
          (Pi(r), e && Lr(i) && no(i, o, _n41, -1));
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
          e && Lr(i))
        ) {
          var _t61 = this.getIndexWithinParent();
          no(i, a, _t61 + 1);
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
        (To(), Os(this, t));
        var n = this.getWritable(),
          r = t.getWritable(),
          o = r.__key,
          i = to(),
          s = r.getParent(),
          l = null !== s ? r.getIndexWithinParent() : -1;
        (Pi(r), null !== s && e && Lr(i) && no(i, s, l, -1));
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
          e && Lr(i))
        ) {
          no(i, this.getParentOrThrow(), f);
        }
        return t;
      };
      _proto6.isParentRequired = function isParentRequired() {
        return !1;
      };
      _proto6.createParentElementNode = function createParentElementNode() {
        return li();
      };
      _proto6.selectStart = function selectStart() {
        return this.selectPrevious();
      };
      _proto6.selectEnd = function selectEnd() {
        return this.selectNext(0, 0);
      };
      _proto6.selectPrevious = function selectPrevious(t, e) {
        To();
        var n = this.getPreviousSibling(),
          r = this.getParentOrThrow();
        if (null === n) return r.select(0, 0);
        if ($o(n)) return n.select();
        if (!Er(n)) {
          var _t62 = n.getIndexWithinParent() + 1;
          return r.select(_t62, _t62);
        }
        return n.select(t, e);
      };
      _proto6.selectNext = function selectNext(t, e) {
        To();
        var n = this.getNextSibling(),
          r = this.getParentOrThrow();
        if (null === n) return r.select();
        if ($o(n)) return n.select(0, 0);
        if (!Er(n)) {
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
      return Zn;
    })();
    var tr = "history-merge",
      er = "collaboration",
      nr = "skip-scroll-into-view",
      rr = "skip-dom-selection",
      or = "skip-selection-focus",
      ir = "composition-start",
      sr = "composition-end",
      lr = "!important";
    function cr(t) {
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
      for (var _f7 = 0; _f7 < a; _f7++) {
        var _a7 = t[_f7];
        if (i) "*" === _a7 && "/" === t[_f7 + 1] && ((i = !1), _f7++);
        else if (s) (-1 === u && (u = _f7), (s = !1));
        else if (null === o) {
          if ("/" !== _a7 || "*" !== t[_f7 + 1]) {
            if ('"' !== _a7 && "'" !== _a7) {
              if ("(" !== _a7) {
                if (")" !== _a7) {
                  if (l || ":" !== _a7 || 0 !== c) {
                    if (";" === _a7 && 0 === c) {
                      -1 !== u &&
                        (l ? (r += t.slice(u, _f7)) : (n += t.slice(u, _f7)),
                        (u = -1));
                      var _o22 = n.trim(),
                        _i14 = r.trim();
                      ("" !== _o22 && "" !== _i14 && (e[_o22] = _i14),
                        (n = ""),
                        (r = ""),
                        (l = !1));
                      continue;
                    }
                    -1 === u && (u = _f7);
                  } else
                    (-1 !== u && ((n += t.slice(u, _f7)), (u = -1)), (l = !0));
                } else (-1 === u && (u = _f7), (c = Math.max(0, c - 1)));
              } else (-1 === u && (u = _f7), c++);
            } else (-1 === u && (u = _f7), (o = _a7));
          } else
            (-1 !== u &&
              (l ? (r += t.slice(u, _f7)) : (n += t.slice(u, _f7)), (u = -1)),
              (i = !0),
              _f7++);
        } else
          (-1 === u && (u = _f7),
            "\\" === _a7 ? (s = !0) : _a7 === o && (o = null));
      }
      -1 !== u && (l ? (r += t.slice(u, a)) : (n += t.slice(u, a)));
      var f = n.trim(),
        d = r.trim();
      return ("" !== f && "" !== d && (e[f] = d), e);
    }
    function ar(t, e, n) {
      var r = n.trimEnd(),
        o = r.length - 10;
      o >= 0 && r.slice(o).toLowerCase() === lr
        ? t.setProperty(e, r.slice(0, o).trim(), "important")
        : t.setProperty(e, n, "");
    }
    function ur(t, e, n) {
      if (n === void 0) {
        n = "";
      }
      if (e === n) return;
      var r = cr(n),
        o = cr(e);
      for (var _e62 in o) (delete r[_e62], ar(t, _e62, o[_e62]));
      for (var _e63 in r) t.removeProperty(_e63);
    }
    function fr(t, e) {
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
    function dr(t, e) {
      return 1 & e ? "strong" : 2 & e ? "em" : "span";
    }
    function hr(t, e, n, r, o) {
      var i = r.classList;
      var s = cs(o, "base");
      (void 0 !== s && i.add.apply(i, s),
        (s = cs(o, "underlineStrikethrough")));
      var l = !1;
      var c = 8 & e && 4 & e;
      void 0 !== s &&
        (8 & n && 4 & n
          ? ((l = !0), c || i.add.apply(i, s))
          : c && i.remove.apply(i, s));
      for (var _t64 in M) {
        var _r26 = M[_t64];
        if (((s = cs(o, _t64)), void 0 !== s))
          if (n & _r26) {
            if (l && ("underline" === _t64 || "strikethrough" === _t64)) {
              e & _r26 && i.remove.apply(i, s);
              continue;
            }
            (0 === (e & _r26) ||
              (c && "underline" === _t64) ||
              "strikethrough" === _t64) &&
              i.add.apply(i, s);
          } else e & _r26 && i.remove.apply(i, s);
      }
    }
    function gr(t, e, n) {
      var r = n.isComposing(),
        i = t + (r ? T : ""),
        s = zs(),
        l = $s(s).$getDOMSlot(n, e, s),
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
    function _r(t, e, n, r, o, i) {
      gr(o, t, e);
      var s = i.theme.text;
      void 0 !== s && hr(0, 0, r, t, s);
    }
    function pr(t, e) {
      var n = document.createElement(e);
      return (n.appendChild(t), n);
    }
    var _yr2 = (function (_Zn) {
      function yr(t, e) {
        var _this;
        if (t === void 0) {
          t = "";
        }
        ((_this = _Zn.call(this, e) || this),
          (_this.__text = t),
          (_this.__format = 0),
          (_this.__style = ""),
          (_this.__mode = 0),
          (_this.__detail = 0));
        return _this;
      }
      babelHelpers.inheritsLoose(yr, _Zn);
      yr.getType = function getType() {
        return "text";
      };
      yr.clone = function clone(t) {
        return new yr(t.__text, t.__key);
      };
      var _proto7 = yr.prototype;
      _proto7.afterCloneFrom = function afterCloneFrom(t) {
        (_Zn.prototype.afterCloneFrom.call(this, t),
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
        return this.__key === Li();
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
        return Di(this.getLatest().__format, t, e);
      };
      _proto7.canHaveFormat = function canHaveFormat() {
        return !0;
      };
      _proto7.isInline = function isInline() {
        return !0;
      };
      _proto7.createDOM = function createDOM(t, e) {
        var n = this.__format,
          r = fr(0, n),
          o = dr(0, n),
          i = null === r ? o : r,
          s = document.createElement(i);
        var l = s;
        (this.hasFormat("code") && s.setAttribute("spellcheck", "false"),
          null !== r && ((l = document.createElement(o)), s.appendChild(l)));
        _r(l, this, 0, n, this.__text, t);
        var c = this.__style;
        return ("" !== c && ur(s.style, c), s);
      };
      _proto7.updateDOM = function updateDOM(e, n, r) {
        var o = this.__text,
          i = e.__format,
          s = this.__format,
          l = fr(0, i),
          c = fr(0, s),
          a = dr(0, i),
          u = dr(0, s);
        if ((null === l ? a : l) !== (null === c ? u : c)) return !0;
        if (l === c && a !== u) {
          var _e65 = n.firstChild;
          null == _e65 && t(48);
          var _i15 = document.createElement(u);
          return (_r(_i15, this, 0, s, o, r), n.replaceChild(_i15, _e65), !1);
        }
        var f = n;
        (null !== c && null !== l && ((f = n.firstChild), null == f && t(49)),
          gr(o, f, this));
        var d = r.theme.text;
        void 0 !== d && i !== s && hr(0, i, s, f, d);
        var h = e.__style,
          g = this.__style;
        return (h !== g && ur(n.style, g, h), !1);
      };
      yr.importDOM = function importDOM() {
        return {
          "#text": function text() {
            return { conversion: Tr, priority: 0 };
          },
          b: function b() {
            return { conversion: xr, priority: 0 };
          },
          code: function code() {
            return { conversion: kr, priority: 0 };
          },
          em: function em() {
            return { conversion: kr, priority: 0 };
          },
          i: function i() {
            return { conversion: kr, priority: 0 };
          },
          mark: function mark() {
            return { conversion: kr, priority: 0 };
          },
          s: function s() {
            return { conversion: kr, priority: 0 };
          },
          span: function span() {
            return { conversion: mr, priority: 0 };
          },
          strong: function strong() {
            return { conversion: kr, priority: 0 };
          },
          sub: function sub() {
            return { conversion: kr, priority: 0 };
          },
          sup: function sup() {
            return { conversion: kr, priority: 0 };
          },
          u: function u() {
            return { conversion: kr, priority: 0 };
          },
        };
      };
      yr.importJSON = function importJSON(t) {
        return Or().updateFromJSON(t);
      };
      _proto7.updateFromJSON = function updateFromJSON(t) {
        return _Zn.prototype.updateFromJSON
          .call(this, t)
          .setTextContent(t.text)
          .setFormat(t.format)
          .setDetail(t.detail)
          .setMode(t.mode)
          .setStyle(t.style);
      };
      _proto7.exportDOM = function exportDOM(e) {
        var _Zn$prototype$exportD = _Zn.prototype.exportDOM.call(this, e),
          n = _Zn$prototype$exportD.element;
        return (
          Ds(n) || t(132),
          (n.style.whiteSpace = "pre-wrap"),
          this.hasFormat("lowercase")
            ? (n.style.textTransform = "lowercase")
            : this.hasFormat("uppercase")
              ? (n.style.textTransform = "uppercase")
              : this.hasFormat("capitalize") &&
                (n.style.textTransform = "capitalize"),
          this.hasFormat("bold") && (n = pr(n, "b")),
          this.hasFormat("italic") && (n = pr(n, "i")),
          this.hasFormat("strikethrough") && (n = pr(n, "s")),
          this.hasFormat("underline") && (n = pr(n, "u")),
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
          _Zn.prototype.exportJSON.call(this),
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
        var e = Di(this.getFormat(), t, null);
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
        To();
        var n = t,
          r = e;
        var o = to(),
          i = this.getTextContent(),
          s = this.__key;
        if ("string" == typeof i) {
          var _t66 = i.length;
          (void 0 === n && (n = _t66), void 0 === r && (r = _t66));
        } else ((n = 0), (r = 0));
        if (!Lr(o)) return qr(s, n, s, r, "text", "text");
        {
          var _t67 = Li();
          ((_t67 !== o.anchor.key && _t67 !== o.focus.key) || Ri(s),
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
        var c = to();
        if (r && Lr(c)) {
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
        To();
        var e = this.getLatest(),
          n = e.getTextContent();
        if ("" === n) return [];
        var r = e.__key,
          o = Li(),
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
        for (var _e67 = 0, _r27 = 0; _e67 < i && _r27 <= l; _r27++) {
          var _o23 = t[_r27];
          _o23 > _e67 && (s.push(n.slice(_e67, _o23)), (_e67 = _o23));
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
        var m = to();
        if (Lr(m)) {
          var _ref18 = m.isBackward()
              ? [m.focus, m.anchor]
              : [m.anchor, m.focus],
            _t68 = _ref18[0],
            _e68 = _ref18[1];
          ("text" === _t68.type && _t68.key === r && (p = _t68),
            "text" === _e68.type && _e68.key === r && (y = _e68));
        }
        e.isSegmented()
          ? ((f = Or(a)),
            (f.__format = d),
            (f.__style = h),
            (f.__detail = g),
            (f.__state = pt(e, f)),
            (_ = !0))
          : (f = e.setTextContent(a));
        var x = [f];
        for (var _t69 = 1; _t69 < c; _t69++) {
          var _n43 = Or(s[_t69]);
          ((_n43.__format = d),
            (_n43.__style = h),
            (_n43.__detail = g),
            (_n43.__state = pt(e, _n43)));
          var _i16 = _n43.__key;
          (o === r && Ri(_i16), x.push(_n43));
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
            null !== e && Fi(e);
            null !== n && Fi(n);
          })(this);
          var _t71 = u.getWritable(),
            _e70 = this.getIndexWithinParent();
          (_
            ? (_t71.splice(_e70, 0, x), this.remove())
            : _t71.splice(_e70, 1, x),
            Lr(m) && no(m, u, _e70, c - 1));
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
        Li() === o && Ri(r);
        var l = to();
        if (Lr(l)) {
          var _t72 = l.anchor,
            _i17 = l.focus;
          (null !== _t72 && _t72.key === o && io(_t72, n, r, e, s),
            null !== _i17 && _i17.key === o && io(_i17, n, r, e, s));
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
      return yr;
    })(_Zn5);
    function mr(t) {
      return { forChild: br(t.style), node: null };
    }
    function xr(t) {
      var e = t,
        n = "normal" === e.style.fontWeight;
      return { forChild: br(e.style, n ? void 0 : "bold"), node: null };
    }
    var Cr = new WeakMap();
    function Sr(t) {
      if (!Ds(t)) return !1;
      if ("PRE" === t.nodeName) return !0;
      var e = t.style.whiteSpace;
      return "string" == typeof e && e.startsWith("pre");
    }
    function Tr(e) {
      var n = e;
      null === e.parentElement && t(129);
      var r = n.textContent || "";
      if (
        null !==
        (function (t) {
          var e,
            n = t.parentNode;
          var r = [t];
          for (; null !== n && void 0 === (e = Cr.get(n)) && !Sr(n); )
            (r.push(n), (n = n.parentNode));
          var o = void 0 === e ? n : e;
          for (var _t73 = 0; _t73 < r.length; _t73++) Cr.set(r[_t73], o);
          return o;
        })(n)
      )
        return { node: uo(r) };
      if (((r = r.replace(/\r/g, "").replace(/[ \t\n]+/g, " ")), "" === r))
        return { node: null };
      if (" " === r[0]) {
        var _t74 = n,
          _e71 = !0;
        for (; null !== _t74 && null !== (_t74 = Nr(_t74, !1)); ) {
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
        for (; null !== _t75 && null !== (_t75 = Nr(_t75, !0)); ) {
          if (
            (_t75.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0
          ) {
            _e72 = !1;
            break;
          }
        }
        _e72 && (r = r.slice(0, r.length - 1));
      }
      return "" === r ? { node: null } : { node: Or(r) };
    }
    function Nr(t, e) {
      var n = t;
      for (;;) {
        var _t76 = void 0;
        for (; null === (_t76 = e ? n.nextSibling : n.previousSibling); ) {
          var _t77 = n.parentElement;
          if (null === _t77) return null;
          n = _t77;
        }
        if (((n = _t76), Ds(n))) {
          var _t78 = n.style.display;
          if (
            ("" === _t78 && !Rs(n)) ||
            ("" !== _t78 && !_t78.startsWith("inline"))
          )
            return null;
        }
        var _r28 = n;
        for (; null !== (_r28 = e ? n.firstChild : n.lastChild); ) n = _r28;
        if (Mi(n)) return n;
        if ("BR" === n.nodeName) return null;
      }
    }
    var vr = {
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
    function kr(t) {
      var e = vr[t.nodeName.toLowerCase()];
      return void 0 === e
        ? { node: null }
        : { forChild: br(t.style, e), node: null };
    }
    function Or(t) {
      if (t === void 0) {
        t = "";
      }
      return ks(new _yr2(t));
    }
    function Er(t) {
      return t instanceof _yr2;
    }
    function br(t, e) {
      var n = t.fontWeight,
        r = t.textDecoration.split(" "),
        o = "700" === n || "bold" === n,
        i = r.includes("line-through"),
        s = "italic" === t.fontStyle,
        l = r.includes("underline"),
        c = t.verticalAlign;
      return function (t) {
        return Er(t)
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
    var _Mr = (function (_yr) {
      function Mr(t) {
        var _this2;
        ((_this2 = _yr.call(this, "\t", t) || this), (_this2.__detail = 2));
        return _this2;
      }
      babelHelpers.inheritsLoose(Mr, _yr);
      Mr.getType = function getType() {
        return "tab";
      };
      Mr.clone = function clone(t) {
        return new Mr(t.__key);
      };
      Mr.importDOM = function importDOM() {
        return null;
      };
      var _proto8 = Mr.prototype;
      _proto8.createDOM = function createDOM(t) {
        var e = _yr.prototype.createDOM.call(this, t),
          n = cs(t.theme, "tab");
        if (void 0 !== n) {
          var _e$classList;
          (_e$classList = e.classList).add.apply(_e$classList, n);
        }
        return e;
      };
      Mr.importJSON = function importJSON(t) {
        return Ar().updateFromJSON(t);
      };
      _proto8.setTextContent = function setTextContent(t) {
        return _yr.prototype.setTextContent.call(this, "\t");
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
      return Mr;
    })(_yr2);
    function Ar() {
      return ks(new _Mr());
    }
    function wr(t) {
      return t instanceof _Mr;
    }
    var _Dr = (function () {
      function Dr(t, e, n) {
        ((this._selection = null),
          (this.key = t),
          (this.offset = e),
          (this.type = n));
      }
      var _proto9 = Dr.prototype;
      _proto9.is = function is(t) {
        return (
          this.key === t.key && this.offset === t.offset && this.type === t.type
        );
      };
      _proto9.isBefore = function isBefore(t) {
        if (this.key === t.key) return this.offset < t.offset;
        return Dl(Hl(Ll(this, "next")), Hl(Ll(t, "next"))) < 0;
      };
      _proto9.getNode = function getNode() {
        var e = Ki(this.key);
        return (null === e && t(20), e);
      };
      _proto9.set = function set(t, e, n, r) {
        var o = this._selection,
          i = this.key;
        (r && this.key === t && this.offset === e && this.type === n) ||
          ((this.key = t),
          (this.offset = e),
          (this.type = n),
          So() ||
            (Li() === i && Ri(t),
            null !== o &&
              (o.setCachedNodes(null),
              Lr(o) && (o._cachedIsBackward = null),
              (o.dirty = !0))));
      };
      return Dr;
    })();
    function Ir(t, e, n) {
      return new _Dr(t, e, n);
    }
    function Pr(t, e) {
      var n = e.__key,
        r = t.offset,
        o = "element";
      if (Er(e)) {
        o = "text";
        var _t79 = e.getTextContentSize();
        r > _t79 && (r = _t79);
      } else if (!$o(e)) {
        var _t80 = e.getNextSibling();
        if (Er(_t80)) ((n = _t80.__key), (r = 0), (o = "text"));
        else {
          var _t81 = e.getParent();
          _t81 && ((n = _t81.__key), (r = e.getIndexWithinParent() + 1));
        }
      }
      t.set(n, r, o);
    }
    function Fr(t, e) {
      if ($o(e)) {
        var _n45 = e.getLastDescendant();
        $o(_n45) || Er(_n45) ? Pr(t, _n45) : Pr(t, e);
      } else Pr(t, e);
    }
    var _Rr = (function () {
      function Rr(t) {
        ((this._cachedNodes = null), (this._nodes = t), (this.dirty = !1));
      }
      var _proto0 = Rr.prototype;
      _proto0.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto0.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto0.is = function is(t) {
        if (!Br(t)) return !1;
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
        return new Rr(new Set(this._nodes));
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
        if (Er(r)) o = r.select();
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
          var _e73 = Ki(_t84);
          null !== _e73 && n.push(_e73);
        }
        return (So() || (this._cachedNodes = n), n);
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
        if ((to() || eo()) === this && t[0]) {
          var _e74 = xl(t[0], "next");
          Bl(Al(_e74, _e74));
        }
        for (var _e75 of t) _e75.remove();
      };
      return Rr;
    })();
    function Lr(t) {
      return t instanceof _Kr;
    }
    var _Kr = (function () {
      function Kr(t, e, n, r) {
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
      var _proto1 = Kr.prototype;
      _proto1.getCachedNodes = function getCachedNodes() {
        return this._cachedNodes;
      };
      _proto1.setCachedNodes = function setCachedNodes(t) {
        this._cachedNodes = t;
      };
      _proto1.is = function is(t) {
        return (
          !!Lr(t) &&
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
            if (_l(_n47)) {
              var _t85 = _n47.origin;
              0 === e.length ? o.add(_t85) : (i.add(_t85), e.push(_t85));
            } else {
              var _t86 = _n47.origin;
              ($o(_t86) && i.has(_t86)) || e.push(_t86);
            }
          r && e.push(r.caret.origin);
          if (
            gl(t.focus) &&
            $o(t.focus.origin) &&
            null === t.focus.getNodeAtCaret()
          )
            for (
              var _n48 = Nl(t.focus.origin, "previous");
              _l(_n48) &&
              o.has(_n48.origin) &&
              !_n48.origin.isEmpty() &&
              _n48.origin.is(e[e.length - 1]);
              _n48 = kl(_n48)
            )
              (o["delete"](_n48.origin), e.pop());
          for (; e.length > 1; ) {
            var _t87 = e[e.length - 1];
            if (!$o(_t87) || i.has(_t87) || _t87.isEmpty() || o.has(_t87))
              break;
            e.pop();
          }
          if (0 === e.length && t.isCollapsed()) {
            var _n49 = Hl(t.anchor),
              _r29 = Hl(t.anchor.getFlipped()),
              _o24 = function _o24(t) {
                return hl(t) ? t.origin : t.getNodeAtCaret();
              },
              _i18 =
                _o24(_n49) ||
                _o24(_r29) ||
                (t.anchor.getNodeAtCaret() ? _n49.origin : _r29.origin);
            e.push(_i18);
          }
          return e;
        })(Vl($l(this), "next"));
        return (So() || (this._cachedNodes = e), e);
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
          _$r = $r(this),
          s = _$r[0],
          l = _$r[1];
        var c = "",
          a = !0;
        for (var _u5 = 0; _u5 < t.length; _u5++) {
          var _f8 = t[_u5];
          if ($o(_f8) && !_f8.isInline())
            (a || (c += "\n"), (a = !_f8.isEmpty()));
          else if (((a = !1), Er(_f8))) {
            var _t88 = _f8.getTextContent();
            (_f8 === e
              ? _f8 === n
                ? ("element" === r.type &&
                    "element" === o.type &&
                    o.offset !== r.offset) ||
                  (_t88 = s < l ? _t88.slice(s, l) : _t88.slice(l, s))
                : (_t88 = i ? _t88.slice(s) : _t88.slice(l))
              : _f8 === n && (_t88 = i ? _t88.slice(0, l) : _t88.slice(0, s)),
              (c += _t88));
          } else
            (!Yo(_f8) && !ei(_f8)) ||
              (_f8 === n && this.isCollapsed()) ||
              (c += _f8.getTextContent());
        }
        return c;
      };
      _proto1.applyDOMRange = function applyDOMRange(t) {
        var e = ko(),
          n = e.getEditorState()._selection,
          r = Gr(
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
          Ct(this));
      };
      _proto1.clone = function clone() {
        var t = this.anchor,
          e = this.focus;
        return new Kr(
          Ir(t.key, t.offset, t.type),
          Ir(e.key, e.offset, e.type),
          this.format,
          this.style,
        );
      };
      _proto1.toggleFormat = function toggleFormat(t) {
        ((this.format = Di(this.format, t, null)), (this.dirty = !0));
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
        this.insertNodes(uo(t));
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
                s = Or();
              if ((s.setFormat(n), s.setStyle(r), ci(i))) i.splice(0, 0, [s]);
              else {
                var _t89 = Ho(o) ? li().append(s) : s;
                null === i ? o.append(_t89) : i.insertBefore(_t89);
              }
              (t.is(e) && e.set(s.__key, 0, "text"), t.set(s.__key, 0, "text"));
            })(s, l, o, i),
          "element" === l.type && Kl(l, Hl(Ll(l, "next"))));
        var c = s.offset;
        var a = l.offset;
        var u = this.getNodes(),
          f = u.length;
        var d = u[0];
        Er(d) || t(26);
        var h = d.getTextContent().length,
          g = d.getParentOrThrow();
        var _ = u[f - 1];
        if (
          (1 === f &&
            "element" === l.type &&
            ((a = h), l.set(s.key, a, "text")),
          this.isCollapsed() &&
            c === h &&
            (bi(d) ||
              !d.canInsertTextAfter() ||
              (!g.canInsertTextAfter() && null === d.getNextSibling())))
        ) {
          var _t90 = d.getNextSibling();
          if (
            ((Er(_t90) && _t90.canInsertTextBefore() && !bi(_t90)) ||
              ((_t90 = Or()),
              _t90.setFormat(o),
              _t90.setStyle(i),
              g.canInsertTextAfter()
                ? d.insertAfter(_t90)
                : g.insertAfter(_t90)),
            _t90.select(0, 0),
            (d = _t90),
            "" !== e)
          )
            return void this.insertText(e);
        } else if (
          this.isCollapsed() &&
          0 === c &&
          (bi(d) ||
            !d.canInsertTextBefore() ||
            (!g.canInsertTextBefore() && null === d.getPreviousSibling()))
        ) {
          var _t91 = d.getPreviousSibling();
          if (
            ((Er(_t91) && !bi(_t91)) ||
              ((_t91 = Or()),
              _t91.setFormat(o),
              g.canInsertTextBefore()
                ? d.insertBefore(_t91)
                : g.insertBefore(_t91)),
            _t91.select(),
            (d = _t91),
            "" !== e)
          )
            return void this.insertText(e);
        } else if (d.isSegmented() && c !== h) {
          var _t92 = Or(d.getTextContent());
          (_t92.setFormat(o), d.replace(_t92), (d = _t92));
        } else if (!this.isCollapsed() && "" !== e) {
          var _t93 = _.getParent();
          if (
            !g.canInsertTextBefore() ||
            !g.canInsertTextAfter() ||
            ($o(_t93) &&
              (!_t93.canInsertTextBefore() || !_t93.canInsertTextAfter()))
          )
            return (
              this.insertText(""),
              Jr(this.anchor, this.focus),
              void this.insertText(e)
            );
        }
        if (1 === f) {
          if (Ei(d)) {
            var _t94 = Or(e);
            return (_t94.select(), void d.replace(_t94));
          }
          var _t95 = d.getFormat(),
            _n50 = d.getStyle();
          if (c !== a || (_t95 === o && _n50 === i)) {
            if (wr(d)) {
              var _t96 = Or(e);
              return (
                _t96.setFormat(o),
                _t96.setStyle(i),
                _t96.select(),
                void d.replace(_t96)
              );
            }
          } else {
            if ("" !== d.getTextContent()) {
              var _t97 = Or(e);
              if ((_t97.setFormat(o), _t97.setStyle(i), _t97.select(), 0 === c))
                d.insertBefore(_t97, !1);
              else {
                var _d$splitText = d.splitText(c),
                  _e76 = _d$splitText[0];
                _e76.insertAfter(_t97, !1);
              }
              return void (
                _t97.isComposing() &&
                "text" === this.anchor.type &&
                ((this.anchor.offset -= e.length),
                (this._cachedNodes = null),
                (this._cachedIsBackward = null))
              );
            }
            (d.setFormat(o), d.setStyle(i));
          }
          var _r30 = a - c;
          ((d = d.spliceText(c, _r30, e, !0)),
            "" === d.getTextContent()
              ? d.remove()
              : "text" === this.anchor.type &&
                ((this.format = _t95),
                (this.style = _n50),
                d.isComposing() &&
                  ((this.anchor.offset -= e.length),
                  (this._cachedNodes = null),
                  (this._cachedIsBackward = null))));
        } else {
          var _t98 = new Set([].concat(d.getParentKeys(), _.getParentKeys())),
            _n51 = $o(d) ? d : d.getParentOrThrow();
          var _r31 = $o(_) ? _ : _.getParentOrThrow(),
            _o25 = _;
          if (!_n51.is(_r31) && _r31.isInline())
            do {
              ((_o25 = _r31), (_r31 = _r31.getParentOrThrow()));
            } while (_r31.isInline());
          if (
            ("text" === l.type && (0 !== a || "" === _.getTextContent())) ||
            ("element" === l.type && _.getIndexWithinParent() < a)
          ) {
            if (Er(_) && !Ei(_) && a !== _.getTextContentSize()) {
              if (_.isSegmented()) {
                var _t99 = Or(_.getTextContent());
                (_.replace(_t99), (_ = _t99));
              }
              (Ho(l.getNode()) ||
                "text" !== l.type ||
                (_ = _.spliceText(0, a, "")),
                _t98.add(_.__key));
            } else {
              var _t100 = _.getParentOrThrow();
              _t100.canBeEmpty() || 1 !== _t100.getChildrenSize()
                ? _.remove()
                : _t100.remove();
            }
          } else _t98.add(_.__key);
          var _i19 = _r31.getChildren(),
            _s1 = new Set(u),
            _g4 = _n51.is(_r31),
            _p2 = _n51.isInline() && null === d.getNextSibling() ? _n51 : d;
          for (var _t101 = _i19.length - 1; _t101 >= 0; _t101--) {
            var _e77 = _i19[_t101];
            if (_e77.is(d) || ($o(_e77) && _e77.isParentOf(d))) break;
            _e77.isAttached() &&
              (!_s1.has(_e77) || _e77.is(_o25)
                ? _g4 || _p2.insertAfter(_e77, !1)
                : _e77.remove());
          }
          if (!_g4) {
            var _e78 = _r31,
              _n52 = null;
            for (; null !== _e78; ) {
              var _r32 = _e78.getChildren(),
                _o26 = _r32.length;
              ((0 === _o26 || _r32[_o26 - 1].is(_n52)) &&
                (_t98["delete"](_e78.__key), (_n52 = _e78)),
                (_e78 = _e78.getParent()));
            }
          }
          if (Ei(d)) {
            if (c === h) d.select();
            else {
              var _t102 = Or(e);
              (_t102.select(), d.replace(_t102));
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
            var _n53 = u[_e79],
              _r33 = _n53.__key;
            _t98.has(_r33) || _n53.remove();
          }
        }
      };
      _proto1.removeText = function removeText() {
        var t = to() === this;
        (zl(this, jl($l(this))), t && to() !== this && Ji(this));
      };
      _proto1.formatText = function formatText(t, e) {
        var _d$splitText2, _p$splitText;
        if (e === void 0) {
          e = null;
        }
        if (this.isCollapsed()) return (this.toggleFormat(t), void Ri(null));
        var n = this.getNodes(),
          r = [];
        for (var _t103 of n) Er(_t103) && r.push(_t103);
        var o = function o(e) {
            n.forEach(function (n) {
              if ($o(n)) {
                var _r34 = n.getFormatFlags(t, e);
                n.setTextFormat(_r34);
              }
            });
          },
          i = r.length;
        if (0 === i) return (this.toggleFormat(t), Ri(null), void o(e));
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
          if (bi(d) || (0 === h && y === d.getTextContentSize()))
            d.setFormat(g);
          else {
            var _t104 = d.splitText(h, y),
              _e80 = 0 === h ? _t104[0] : _t104[1];
            (_e80.setFormat(g),
              "text" === a.type && a.set(_e80.__key, 0, "text"),
              "text" === u.type && u.set(_e80.__key, y - h, "text"));
          }
          return void (this.format = g);
        }
        (0 === h ||
          bi(d) ||
          ((_d$splitText2 = d.splitText(h)), (d = _d$splitText2[1]), (h = 0)),
          d.setFormat(g));
        var m = p.getFormatFlags(t, g);
        y > 0 &&
          (y === p.getTextContentSize() ||
            bi(p) ||
            ((_p$splitText = p.splitText(y)),
            (p = _p$splitText[0]),
            _p$splitText),
          p.setFormat(m));
        for (var _e81 = f + 1; _e81 < _; _e81++) {
          var _n54 = r[_e81],
            _o27 = _n54.getFormatFlags(t, m);
          _n54.setFormat(_o27);
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
          var _n55 = to();
          return (Lr(_n55) || t(134), _n55.insertNodes(e));
        }
        var n = (this.isBackward() ? this.focus : this.anchor).getNode(),
          r = rl(n, Bs),
          o = e[e.length - 1];
        if ($o(r) && "__language" in r) {
          if ("__language" in e[0]) this.insertText(e[0].getTextContent());
          else {
            var _t105 = fo(this);
            (r.splice(_t105, 0, e), o.selectEnd());
          }
          return;
        }
        if (
          !e.some(function (t) {
            return ($o(t) || Yo(t)) && !t.isInline();
          })
        ) {
          $o(r) || t(211, n.constructor.name, n.getType());
          var _i20 = fo(this);
          return (r.splice(_i20, 0, e), void o.selectEnd());
        }
        var i = (function (t) {
            var e = li();
            var n = null;
            for (var _r35 = 0; _r35 < t.length; _r35++) {
              var _o28 = t[_r35],
                _i21 = ei(_o28);
              if (
                _i21 ||
                (Yo(_o28) && _o28.isInline()) ||
                ($o(_o28) && _o28.isInline()) ||
                Er(_o28) ||
                _o28.isParentRequired()
              ) {
                if (
                  null === n &&
                  ((n = _o28.createParentElementNode()), e.append(n), _i21)
                )
                  continue;
                null !== n && n.append(_o28);
              } else (e.append(_o28), (n = null));
            }
            return e;
          })(e),
          s = i.getLastDescendant(),
          l = i.getChildren(),
          c = !$o(r) || !r.isEmpty() ? this.insertParagraph() : null,
          a = l[l.length - 1];
        var u = l[0];
        var f;
        ($o((f = u)) &&
          Bs(f) &&
          !f.isEmpty() &&
          $o(r) &&
          (!r.isEmpty() || r.canMergeWhenEmpty()) &&
          ($o(r) || t(211, n.constructor.name, n.getType()),
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
              for (var _t106 of i) s = s.insertAfter(_t106);
            })(r, u)));
        var d = rl(s, Bs);
        (c &&
          $o(d) &&
          (c.canMergeWhenEmpty() || Bs(a)) &&
          (d.append.apply(d, c.getChildren()), c.remove()),
          $o(r) && r.isEmpty() && r.remove(),
          s.selectEnd());
        var h = $o(r) ? r.getLastChild() : null;
        ei(h) && d !== r && h.remove();
      };
      _proto1.insertParagraph = function insertParagraph() {
        if ("root" === this.anchor.key) {
          var _t107 = li();
          return (
            ji().splice(this.anchor.offset, 0, [_t107]),
            _t107.select(),
            _t107
          );
        }
        var e = fo(this),
          n = rl(this.anchor.getNode(), Bs);
        $o(n) || t(213);
        var r = n.getChildAtIndex(e),
          o = r ? [r].concat(r.getNextSiblings()) : [],
          i = n.insertNewAfter(this, !1);
        return i ? (i.append.apply(i, o), i.selectStart(), i) : null;
      };
      _proto1.insertLineBreak = function insertLineBreak(t) {
        var e = ti();
        if ((this.insertNodes([e]), t)) {
          var _t108 = e.getParentOrThrow(),
            _n56 = e.getIndexWithinParent();
          _t108.select(_n56, _n56);
        }
      };
      _proto1.extract = function extract() {
        var _n$splitText;
        var t = [].concat(this.getNodes()),
          e = t.length;
        var n = t[0],
          r = t[e - 1];
        var _$r2 = $r(this),
          o = _$r2[0],
          i = _$r2[1],
          s = this.isBackward(),
          _ref19 = s ? [this.focus, this.anchor] : [this.anchor, this.focus],
          l = _ref19[0],
          c = _ref19[1],
          _ref20 = s ? [i, o] : [o, i],
          a = _ref20[0],
          u = _ref20[1];
        if (0 === e) return [];
        if (1 === e) {
          if (Er(n) && !this.isCollapsed()) {
            var _t109 = n.splitText(a, u),
              _e82 = 0 === a ? _t109[0] : _t109[1];
            return _e82
              ? (l.set(_e82.getKey(), 0, "text"),
                c.set(_e82.getKey(), _e82.getTextContentSize(), "text"),
                [_e82])
              : [];
          }
          return [n];
        }
        if (
          (Er(n) &&
            (a === n.getTextContentSize()
              ? t.shift()
              : 0 !== a &&
                ((_n$splitText = n.splitText(a)),
                (n = _n$splitText[1]),
                (t[0] = n),
                l.set(n.getKey(), 0, "text"))),
          Er(r))
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
          o = ko(),
          i = As(Ss(o));
        if (!i) return;
        var s = o._blockCursorElement,
          l = o._rootElement,
          c = this.focus.getNode();
        if (
          (null === l ||
            null === s ||
            !$o(c) ||
            c.isInline() ||
            c.canBeEmpty() ||
            Ms(s, o, l),
          this.dirty)
        ) {
          var _t110 = gs(o, this.anchor.key),
            _e84 = gs(o, this.focus.key);
          var _n57 = _t110,
            _r36 = _e84;
          if ("text" === this.anchor.type) {
            var _e85 = this.anchor.getNode();
            _n57 = Er(_e85) ? Ys(_e85, _t110, o) : null;
          }
          if ("text" === this.focus.type) {
            var _t111 = this.focus.getNode();
            _r36 = Er(_t111) ? Ys(_t111, _e84, o) : null;
          }
          _n57 &&
            _r36 &&
            so(i, _n57, this.anchor.offset, _r36, this.focus.offset);
        }
        if (
          ((function (t, e, n, r) {
            t.modify(e, n, r);
          })(i, t, e ? "backward" : "forward", n),
          i.rangeCount > 0)
        ) {
          var _t112 = i.getRangeAt(0),
            _n58 = this.anchor.getNode(),
            _o29 = Ho(_n58) ? _n58 : Ts(_n58);
          if ((this.applyDOMRange(_t112), (this.dirty = !0), !r)) {
            var _n59 = this.getNodes(),
              _r37 = [];
            var _s10 = !1;
            for (var _t113 = 0; _t113 < _n59.length; _t113++) {
              var _e86 = _n59[_t113];
              xs(_e86, _o29) ? _r37.push(_e86) : (_s10 = !0);
            }
            if (_s10 && _r37.length > 0)
              if (e) {
                var _t114 = _r37[0];
                $o(_t114)
                  ? _t114.selectStart()
                  : _t114.getParentOrThrow().selectStart();
              } else {
                var _t115 = _r37[_r37.length - 1];
                $o(_t115)
                  ? _t115.selectEnd()
                  : _t115.getParentOrThrow().selectEnd();
              }
            (i.anchorNode === _t112.startContainer &&
              i.anchorOffset === _t112.startOffset) ||
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
            $o(e) &&
            t.offset === e.getChildrenSize()) ||
            ("text" === t.type && t.offset === e.getTextContentSize()))
        ) {
          var _t116 = e.getParent(),
            _n60 =
              e.getNextSibling() ||
              (null === _t116 ? null : _t116.getNextSibling());
          if ($o(_n60) && _n60.isShadowRoot()) return !0;
        }
        return !1;
      };
      _proto1.deleteCharacter = function deleteCharacter(t) {
        var e = this.isCollapsed();
        if (this.isCollapsed()) {
          var _e87 = this.anchor;
          var _n61 = _e87.getNode();
          if (this.forwardDeletion(_e87, _n61, t)) return;
          var _r38 = bl(Ll(_e87, t ? "previous" : "next"));
          if (
            _r38.getTextSlices().every(function (t) {
              return null === t || 0 === t.distance;
            })
          ) {
            var _t117 = { type: "initial" };
            for (var _e88 of _r38.iterNodeCarets("shadowRoot"))
              if (_l(_e88)) {
                if (_e88.origin.isInline());
                else {
                  if (_e88.origin.isShadowRoot()) {
                    if ("merge-block" === _t117.type) break;
                    if (
                      $o(_r38.anchor.origin) &&
                      _r38.anchor.origin.isEmpty()
                    ) {
                      var _t118 = Hl(_e88);
                      (zl(this, Al(_t118, _t118)), _r38.anchor.origin.remove());
                    }
                    return;
                  }
                  ("merge-next-block" !== _t117.type &&
                    "merge-block" !== _t117.type) ||
                    (_t117 = {
                      block: _t117.block,
                      caret: _e88,
                      type: "merge-block",
                    });
                }
              } else {
                if ("merge-block" === _t117.type) break;
                if (gl(_e88)) {
                  if ($o(_e88.origin)) {
                    if (_e88.origin.isInline()) {
                      if (!_e88.origin.isParentOf(_r38.anchor.origin)) break;
                    } else
                      _t117 = { block: _e88.origin, type: "merge-next-block" };
                    continue;
                  }
                  if (Yo(_e88.origin)) {
                    if (_e88.origin.isIsolated());
                    else if (
                      "merge-next-block" === _t117.type &&
                      (_e88.origin.isKeyboardSelectable() ||
                        !_e88.origin.isInline()) &&
                      $o(_r38.anchor.origin) &&
                      _r38.anchor.origin.isEmpty()
                    ) {
                      _r38.anchor.origin.remove();
                      var _t119 = Qr();
                      (_t119.add(_e88.origin.getKey()), Ji(_t119));
                    } else _e88.origin.remove();
                    return;
                  }
                  break;
                }
              }
            if ("merge-block" === _t117.type) {
              var _t120 = _t117,
                _e89 = _t120.caret,
                _n62 = _t120.block;
              return _e89.origin.isEmpty() &&
                !_n62.isEmpty() &&
                _e89.origin.getParent() === _n62.getParent()
                ? void _e89.origin.remove(!0)
                : (zl(
                    this,
                    Al(
                      !_e89.origin.isEmpty() && _n62.isEmpty()
                        ? Wl(xl(_n62, _e89.direction))
                        : _r38.anchor,
                      _e89,
                    ),
                  ),
                  this.removeText());
            }
          }
          var _o30 = this.focus;
          if ((this.modify("extend", t, "character"), this.isCollapsed())) {
            if (t && 0 === _e87.offset && Wr(this, _e87.getNode())) return;
          } else {
            var _r39 = "text" === _o30.type ? _o30.getNode() : null;
            if (
              ((_n61 = "text" === _e87.type ? _e87.getNode() : null),
              null !== _r39 && _r39.isSegmented())
            ) {
              var _e90 = _o30.offset,
                _i22 = _r39.getTextContentSize();
              if (_r39.is(_n61) || (t && _e90 !== _i22) || (!t && 0 !== _e90))
                return void Yr(_r39, t, _e90);
            } else if (null !== _n61 && _n61.isSegmented()) {
              var _o31 = _e87.offset,
                _i23 = _n61.getTextContentSize();
              if (_n61.is(_r39) || (t && 0 !== _o31) || (!t && _o31 !== _i23))
                return void Yr(_n61, t, _o31);
            }
            !(function (t, e) {
              var n = t.anchor,
                r = t.focus,
                o = n.getNode(),
                i = r.getNode();
              if (o === i && "text" === n.type && "text" === r.type) {
                var _t121 = n.offset,
                  _i24 = r.offset,
                  _s11 = _t121 < _i24,
                  _l7 = _s11 ? _t121 : _i24,
                  _c5 = _s11 ? _i24 : _t121,
                  _a8 = _c5 - 1;
                if (_l7 !== _a8) {
                  (function (t) {
                    return !(Vi(t) || Ur(t));
                  })(o.getTextContent().slice(_l7, _c5)) &&
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
          var _t122 = this.anchor.getNode();
          _t122.isEmpty() &&
            Ho(_t122.getParent()) &&
            null === _t122.getPreviousSibling() &&
            Wr(this, _t122);
        }
      };
      _proto1.deleteLine = function deleteLine(t) {
        (this.isCollapsed() && this.modify("extend", t, "lineboundary"),
          this.isCollapsed() ? this.deleteCharacter(t) : this.removeText());
      };
      _proto1.deleteWord = function deleteWord(t) {
        if (this.isCollapsed()) {
          var _e91 = this.anchor,
            _n63 = _e91.getNode();
          if (this.forwardDeletion(_e91, _n63, t)) return;
          this.modify("extend", t, "word");
        }
        this.isCollapsed() ? this.deleteCharacter(t) : this.removeText();
      };
      _proto1.isBackward = function isBackward() {
        var t = this._cachedIsBackward;
        if (null !== t) return t;
        var e = this.focus.isBefore(this.anchor);
        return (So() || (this._cachedIsBackward = e), e);
      };
      _proto1.getStartEndPoints = function getStartEndPoints() {
        return [this.anchor, this.focus];
      };
      return Kr;
    })();
    function Br(t) {
      return t instanceof _Rr;
    }
    function zr(t) {
      var e = t.offset;
      if ("text" === t.type) return e;
      var n = t.getNode();
      return e === n.getChildrenSize() ? n.getTextContent().length : 0;
    }
    function $r(t) {
      var e = t.getStartEndPoints();
      if (null === e) return [0, 0];
      var n = e[0],
        r = e[1];
      return "element" === n.type &&
        "element" === r.type &&
        n.key === r.key &&
        n.offset === r.offset
        ? [0, 0]
        : [zr(n), zr(r)];
    }
    function Wr(t, e) {
      for (var _n64 = e; _n64; _n64 = _n64.getParent()) {
        if ($o(_n64)) {
          if (_n64.collapseAtStart(t)) return !0;
          if (Ns(_n64)) break;
        }
        if (_n64.getPreviousSibling()) break;
      }
      return !1;
    }
    var Ur = (function () {
      try {
        var _t123 = new RegExp("\\p{Emoji}", "u"),
          _e92 = _t123.test.bind(_t123);
        if (_e92("\u2764\ufe0f") && _e92("#\ufe0f\u20e3") && _e92("\u{1f44d}"))
          return _e92;
      } catch (t) {}
      return function () {
        return !1;
      };
    })();
    function Yr(t, e, n) {
      var r = t,
        o = r.getTextContent().split(/(?=\s)/g),
        i = o.length;
      var s = 0,
        l = 0;
      for (var _t124 = 0; _t124 < i; _t124++) {
        var _r40 = _t124 === i - 1;
        if (
          ((l = s), (s += o[_t124].length), (e && s === n) || s > n || _r40)
        ) {
          (o.splice(_t124, 1), _r40 && (l = void 0));
          break;
        }
      }
      var c = o.join("").trim();
      "" === c ? r.remove() : (r.setTextContent(c), r.select(l, l));
    }
    function jr(e, n, r, o) {
      var i,
        s = n,
        l = !1;
      if (Ds(e)) {
        var _c6 = !1;
        var _a9 = e.childNodes,
          _u6 = _a9.length,
          _f9 = o._blockCursorElement;
        (s === _u6 && _u6 > 0 && ((_c6 = !0), (s = _u6 - 1)),
          void 0 !== $i(e, o) || tl(e, o) || (l = !0));
        var _d6 = _a9[s],
          _h5 = !1;
        if (_d6 === _f9) ((_d6 = _a9[s + 1]), (_h5 = !0));
        else if (null !== _f9) {
          var _t125 = _f9.parentNode;
          if (e === _t125) {
            n > Array.prototype.indexOf.call(_t125.children, _f9) && s--;
          }
        }
        if (((i = Gi(_d6)), Er(i))) s = Sl(i, _c6 ? "next" : "previous");
        else {
          var _a0 = Gi(e);
          if (null === _a0) return null;
          if ($o(_a0)) {
            var _u7$resolveChildIndex;
            var _l8 = o.getElementByKey(_a0.getKey());
            null === _l8 && t(214);
            var _u7 = Ws(_a0, _l8, o);
            ((_u7$resolveChildIndex = _u7.resolveChildIndex(_a0, _l8, e, n)),
              (_a0 = _u7$resolveChildIndex[0]),
              (s = _u7$resolveChildIndex[1]),
              $o(_a0) || t(215),
              _c6 &&
                s >= _a0.getChildrenSize() &&
                (s = Math.max(0, _a0.getChildrenSize() - 1)));
            var _f0 = _a0.getChildAtIndex(s);
            if (
              $o(_f0) &&
              (function (t, e, n) {
                var r = t.getParent();
                return (
                  null === n ||
                  null === r ||
                  !r.canBeEmpty() ||
                  r !== n.getNode()
                );
              })(_f0, 0, r)
            ) {
              var _t126 = _c6
                ? _f0.getLastDescendant()
                : _f0.getFirstDescendant();
              (null === _t126
                ? (_a0 = _f0)
                : ((_f0 = _t126),
                  (_a0 = $o(_f0) ? _f0 : _f0.getParentOrThrow())),
                (s = 0));
            }
            Er(_f0)
              ? ((i = _f0),
                (_a0 = null),
                (s = Sl(_f0, _c6 ? "next" : "previous")))
              : _f0 !== _a0 &&
                _c6 &&
                !_h5 &&
                ($o(_a0) || t(216),
                (s = Math.min(_a0.getChildrenSize(), s + 1)));
          } else {
            var _t127 = _a0.getIndexWithinParent(),
              _r41 = o.getElementByKey(_a0.getKey());
            var _i25 = "after";
            if (null !== _r41 && Gi(e) === _a0) {
              var _t128 = Ws(_a0, _r41, o);
              _t128.element !== _r41
                ? (_i25 = _t128.resolveLeafPosition(_r41, e, n))
                : 0 === n && Yo(_a0) && (_i25 = "before");
            }
            ((s = "before" === _i25 ? _t127 : _t127 + 1),
              (_a0 = _a0.getParentOrThrow()));
          }
          if ($o(_a0)) return [Ir(_a0.__key, s, "element"), l];
        }
      } else i = Gi(e);
      return Er(i) ? [Ir(i.__key, Sl(i, s, "clamp"), "text"), l] : null;
    }
    function Hr(t, e, n) {
      var r = t.offset,
        o = t.getNode();
      if (0 === r) {
        var _r42 = o.getPreviousSibling(),
          _i26 = o.getParent();
        if (e) {
          if ((n || !e) && null === _r42 && $o(_i26) && _i26.isInline()) {
            var _e93 = _i26.getPreviousSibling();
            Er(_e93) && t.set(_e93.__key, _e93.getTextContent().length, "text");
          }
        } else
          $o(_r42) && !n && _r42.isInline()
            ? t.set(_r42.__key, _r42.getChildrenSize(), "element")
            : Er(_r42) &&
              t.set(_r42.__key, _r42.getTextContent().length, "text");
      } else if (r === o.getTextContent().length) {
        var _r43 = o.getNextSibling(),
          _i27 = o.getParent();
        if (e && $o(_r43) && _r43.isInline()) t.set(_r43.__key, 0, "element");
        else if (
          (n || e) &&
          null === _r43 &&
          $o(_i27) &&
          _i27.isInline() &&
          !_i27.canInsertTextAfter()
        ) {
          var _e94 = _i27.getNextSibling();
          Er(_e94) && t.set(_e94.__key, 0, "text");
        }
      }
    }
    function Jr(t, e, n) {
      if ("text" === t.type && "text" === e.type) {
        var _n65 = t.isBefore(e),
          _r44 = t.is(e);
        (Hr(t, _n65, _r44),
          Hr(e, !_n65, _r44),
          _r44 && e.set(t.key, t.offset, t.type));
      }
    }
    function Gr(t, e, n, r, o, i) {
      if (null === t || null === n || !Ni(o, t, n)) return null;
      var s = jr(t, e, Lr(i) ? i.anchor : null, o);
      if (null === s) return null;
      var l = jr(n, r, Lr(i) ? i.focus : null, o);
      if (null === l) return null;
      var c = s[0],
        a = s[1],
        u = l[0],
        f = l[1];
      if ("element" === c.type && "element" === u.type) {
        var _e95 = Gi(t),
          _r45 = Gi(n);
        if (Yo(_e95) && Yo(_r45)) return null;
      }
      return (Jr(c, u), [c, u, a || f]);
    }
    function Vr(t) {
      return $o(t) && !t.isInline();
    }
    function qr(t, e, n, r, o, i) {
      var s = vo(),
        l = new _Kr(Ir(t, e, o), Ir(n, r, i), 0, "");
      return ((l.dirty = !0), (s._selection = l), l);
    }
    function Xr() {
      var t = Ir("root", 0, "element"),
        e = Ir("root", 0, "element");
      return new _Kr(t, e, 0, "");
    }
    function Qr() {
      return new _Rr(new Set());
    }
    function Zr(t, e, n, r) {
      var o = n._window;
      if (null === o) return null;
      var i = r || o.event,
        s = i ? i.type : void 0,
        l = "selectionchange" === s,
        c =
          !V &&
          (l ||
            "beforeinput" === s ||
            "compositionstart" === s ||
            "compositionend" === s ||
            ("click" === s && i && 3 === i.detail) ||
            "drop" === s ||
            void 0 === s);
      var a, u, f, d;
      if (Lr(t) && !c) return t.clone();
      if (null === e) return null;
      if (
        ((a = e.anchorNode),
        (u = e.focusNode),
        (f = e.anchorOffset),
        (d = e.focusOffset),
        (l || void 0 === s) && Lr(t) && !Ni(n, a, u))
      )
        return t.clone();
      var h = Gr(a, f, u, d, n, t);
      if (null === h) return null;
      var g = h[0],
        _ = h[1],
        p = h[2];
      var y = 0,
        m = "";
      if (Lr(t)) {
        var _e96 = t.anchor;
        if (g.key === _e96.key) ((y = t.format), (m = t.style));
        else {
          var _t129 = g.getNode();
          Er(_t129)
            ? ((y = _t129.getFormat()), (m = _t129.getStyle()))
            : $o(_t129) &&
              ((y = _t129.getTextFormat()), (m = _t129.getTextStyle()));
        }
      }
      var x = new _Kr(g, _, y, m);
      return (p && (x.dirty = !0), x);
    }
    function to() {
      return vo()._selection;
    }
    function eo() {
      return ko()._editorState._selection;
    }
    function no(t, e, n, r) {
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
          var _n66 = Math.max(0, _e97 + r);
          (o.set(c, _n66, "element"), i.set(c, _n66, "element"), ro(t));
        }
      } else {
        var _s12 = t.isBackward(),
          _l9 = _s12 ? i : o,
          _a1 = _l9.getNode(),
          _u8 = _s12 ? o : i,
          _f1 = _u8.getNode();
        if (e.is(_a1)) {
          var _t130 = _l9.offset;
          ((n <= _t130 && r > 0) || (n < _t130 && r < 0)) &&
            _l9.set(c, Math.max(0, _t130 + r), "element");
        }
        if (e.is(_f1)) {
          var _t131 = _u8.offset;
          ((n <= _t131 && r > 0) || (n < _t131 && r < 0)) &&
            _u8.set(c, Math.max(0, _t131 + r), "element");
        }
      }
      ro(t);
    }
    function ro(t) {
      var e = t.anchor,
        n = e.offset,
        r = t.focus,
        o = r.offset,
        i = e.getNode(),
        s = r.getNode();
      if (t.isCollapsed()) {
        if (!$o(i)) return;
        var _t132 = i.getChildrenSize(),
          _o32 = n >= _t132,
          _s13 = _o32 ? i.getChildAtIndex(_t132 - 1) : i.getChildAtIndex(n);
        if (Er(_s13)) {
          var _t133 = 0;
          (_o32 && (_t133 = _s13.getTextContentSize()),
            e.set(_s13.__key, _t133, "text"),
            r.set(_s13.__key, _t133, "text"));
        }
        return;
      }
      if ($o(i)) {
        var _t134 = i.getChildrenSize(),
          _r46 = n >= _t134,
          _o33 = _r46 ? i.getChildAtIndex(_t134 - 1) : i.getChildAtIndex(n);
        if (Er(_o33)) {
          var _t135 = 0;
          (_r46 && (_t135 = _o33.getTextContentSize()),
            e.set(_o33.__key, _t135, "text"));
        }
      }
      if ($o(s)) {
        var _t136 = s.getChildrenSize(),
          _e98 = o >= _t136,
          _n67 = _e98 ? s.getChildAtIndex(_t136 - 1) : s.getChildAtIndex(o);
        if (Er(_n67)) {
          var _t137 = 0;
          (_e98 && (_t137 = _n67.getTextContentSize()),
            r.set(_n67.__key, _t137, "text"));
        }
      }
    }
    function oo(t, e, n, r, o) {
      var i = null,
        s = 0,
        l = null;
      (null !== r
        ? ((i = r.__key),
          Er(r)
            ? ((s = r.getTextContentSize()), (l = "text"))
            : $o(r) && ((s = r.getChildrenSize()), (l = "element")))
        : null !== o &&
          ((i = o.__key), Er(o) ? (l = "text") : $o(o) && (l = "element")),
        null !== i && null !== l
          ? t.set(i, s, l)
          : ((s = e.getIndexWithinParent()),
            -1 === s && (s = n.getChildrenSize()),
            t.set(n.__key, s, "element")));
    }
    function io(t, e, n, r, o) {
      "text" === t.type
        ? t.set(n, t.offset + (e ? 0 : o), "text")
        : t.offset > r.getIndexWithinParent() &&
          t.set(t.key, t.offset - 1, "element");
    }
    function so(t, e, n, r, o) {
      try {
        t.setBaseAndExtent(e, n, r, o);
      } catch (t) {}
    }
    function lo(t, e, n) {
      var r = gs(t, e.getKey());
      if ($o(e)) {
        var _o34 = Ws(e, r, t);
        return [_o34.element, n + _o34.getFirstChildOffset()];
      }
      return [r, n];
    }
    function co(t, e, n, r, i, s) {
      var l = document.activeElement;
      if ((i.has(er) && l !== s) || (null !== l && Ti(l))) return;
      if (!Lr(e))
        return void (
          null !== t &&
          Ni(n, r.anchorNode, r.focusNode) &&
          r.removeAllRanges()
        );
      var c = e.anchor,
        a = e.focus,
        u = c.getNode(),
        f = a.getNode(),
        _lo = lo(n, u, c.offset),
        d = _lo[0],
        h = _lo[1],
        _lo2 = lo(n, f, a.offset),
        g = _lo2[0],
        _ = _lo2[1],
        p = e.format,
        y = e.style,
        m = e.isCollapsed();
      var x = d,
        C = g,
        S = !1;
      var T, N, v, k, O;
      if (
        ("text" === c.type
          ? ((x = Er(u) ? Ys(u, d, n) : null),
            (S = u.getFormat() !== p || u.getStyle() !== y))
          : Lr(t) && "text" === t.anchor.type && (S = !0),
        "text" === a.type && (C = Er(f) ? Ys(f, g, n) : null),
        null !== x && null !== C) &&
        (m &&
          (null === t || S || (Lr(t) && (t.format !== p || t.style !== y))) &&
          ((T = p),
          (N = y),
          (v = h),
          (k = c.key),
          (O = performance.now()),
          (On = [T, N, v, k, O])),
        ("Range" === r.type && m) ||
          r.anchorOffset !== h ||
          r.focusOffset !== _ ||
          r.anchorNode !== x ||
          r.focusNode !== C ||
          ((null !== l && s.contains(l)) ||
            i.has(or) ||
            s.focus({ preventScroll: !0 }),
          "element" === c.type))
      ) {
        if (
          (so(r, x, h, C, _),
          !o ||
            !e.isCollapsed() ||
            null === s ||
            i.has(or) ||
            (null !== document.activeElement &&
              s.contains(document.activeElement)) ||
            s.focus({ preventScroll: !0 }),
          !i.has(nr) &&
            e.isCollapsed() &&
            null !== s &&
            s === document.activeElement)
        ) {
          var _t138 =
            Lr(e) && "element" === e.anchor.type
              ? x.childNodes[h] || null
              : r.rangeCount > 0
                ? r.getRangeAt(0)
                : null;
          if (null !== _t138) {
            var _e99;
            if (_t138 instanceof Text) {
              var _n68 = document.createRange();
              (_n68.selectNode(_t138), (_e99 = _n68.getBoundingClientRect()));
            } else _e99 = _t138.getBoundingClientRect();
            !(function (t, e, n) {
              var r = ps(n),
                o = Cs(r);
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
                    var _t139 = _e101.offsetTop;
                    ((l = _t139), (c = _t139 + _e101.height));
                  } else ((l = 0), (c = Ss(t).innerHeight));
                  var _n69 = o.getComputedStyle(r.documentElement),
                    _i28 = parseFloat(_n69.scrollPaddingTop),
                    _s14 = parseFloat(_n69.scrollPaddingBottom);
                  (isFinite(_i28) && (l += _i28),
                    isFinite(_s14) && (c -= _s14));
                } else {
                  var _t140 = a.getBoundingClientRect();
                  ((l = _t140.top), (c = _t140.bottom));
                }
                var _n70 = 0;
                if (
                  (i < l ? (_n70 = -(l - i)) : s > c && (_n70 = s - c),
                  0 !== _n70)
                )
                  if (_e100) o.scrollBy(0, _n70);
                  else {
                    var _t141 = a.scrollTop;
                    a.scrollTop += _n70;
                    var _e102 = a.scrollTop - _t141;
                    ((i -= _e102), (s -= _e102));
                  }
                if (_e100) break;
                a = _s(a);
              }
            })(n, _e99, s);
          }
        }
        xn = !0;
      }
    }
    function ao(t, e) {
      for (var _n71 of t.split(/(\r?\n|\t)/))
        "\n" === _n71 || "\r\n" === _n71
          ? e.linebreak()
          : "\t" === _n71
            ? e.tab()
            : "" !== _n71 && e.text(_n71);
    }
    function uo(t) {
      var e = [];
      return (
        ao(t, {
          linebreak: function linebreak() {
            return e.push(ti());
          },
          tab: function tab() {
            return e.push(Ar());
          },
          text: function text(t) {
            return e.push(Or(t));
          },
        }),
        e
      );
    }
    function fo(e) {
      var n = e;
      e.isCollapsed() || n.removeText();
      var r = to();
      (Lr(r) && (n = r), Lr(n) || t(161));
      var o = n.anchor;
      var i = o.getNode(),
        s = o.offset;
      for (; !Bs(i); ) {
        var _ho;
        var _t142 = i;
        if (((_ho = ho(i, s)), (i = _ho[0]), (s = _ho[1]), _t142.is(i))) break;
      }
      return s;
    }
    function ho(t, e) {
      var n = t.getParent();
      if (!n) {
        var _t143 = li();
        return (ji().append(_t143), _t143.select(), [ji(), 0]);
      }
      if (Er(t)) {
        var _r47 = t.splitText(e);
        if (0 === _r47.length) return [n, t.getIndexWithinParent()];
        var _o35 = 0 === e ? 0 : 1;
        return [n, _r47[0].getIndexWithinParent() + _o35];
      }
      if (!$o(t) || 0 === e) return [n, t.getIndexWithinParent()];
      var r = t.getChildAtIndex(e);
      if (r) {
        var _n72 = new _Kr(
            Ir(t.__key, e, "element"),
            Ir(t.__key, e, "element"),
            0,
            "",
          ),
          _o36 = t.insertNewAfter(_n72);
        _o36 && _o36.append.apply(_o36, [r].concat(r.getNextSiblings()));
      }
      return [n, t.getIndexWithinParent() + 1];
    }
    function go(t, e, n, r, o) {
      if (o === void 0) {
        o = "decorators-and-blocks";
      }
      if ("move" === e && "character" === r && !t.isCollapsed()) {
        var _ref21 =
            n === t.isBackward() ? [t.focus, t.anchor] : [t.anchor, t.focus],
          _e103 = _ref21[0],
          _r48 = _ref21[1];
        return (_r48.set(_e103.key, _e103.offset, _e103.type), !0);
      }
      var i = Ll(t.focus, n ? "previous" : "next"),
        s = "lineboundary" === r,
        l = "move" === e;
      var c = i,
        a = "decorators-and-blocks" === o;
      if (!Jl(c)) {
        for (var _t144 of c) {
          a = !1;
          var _e104 = _t144.origin;
          if (
            !Yo(_e104) ||
            _e104.isIsolated() ||
            ((c = _t144), !s || !_e104.isInline())
          )
            break;
        }
        if (a)
          for (var _t145 of bl(i).iterNodeCarets(
            "extend" === e ? "shadowRoot" : "root",
          )) {
            if (_l(_t145)) _t145.origin.isInline() || (c = _t145);
            else {
              if ($o(_t145.origin)) continue;
              Yo(_t145.origin) && !_t145.origin.isInline() && (c = _t145);
            }
            break;
          }
      }
      if (c === i) return !1;
      if (l && !s && Yo(c.origin) && c.origin.isKeyboardSelectable()) {
        var _t146 = Qr();
        return (_t146.add(c.origin.getKey()), Ji(_t146), !0);
      }
      return ((c = Hl(c)), l && Kl(t.anchor, c), Kl(t.focus, c), a || !s);
    }
    var _o = null,
      po = null,
      yo = !1,
      mo = !1,
      xo = 0;
    var Co = { characterData: !0, childList: !0, subtree: !0 };
    function So() {
      return yo || (null !== _o && _o._readOnly);
    }
    function To() {
      yo && t(13);
    }
    function No() {
      xo > 99 && t(14);
    }
    function vo() {
      return (null === _o && t(195, Oo()), _o);
    }
    function ko() {
      return (null === po && t(337, Oo()), po);
    }
    function Oo() {
      var t = 0;
      var e = new Set(),
        n = _i41.version;
      if ("undefined" != typeof window)
        for (var _r49 of document.querySelectorAll("[contenteditable]")) {
          var _o37 = Oi(_r49);
          if (vi(_o37)) t++;
          else if (_o37) {
            var _t147 = String(_o37.constructor.version || "<0.17.1");
            (_t147 === n &&
              (_t147 +=
                " (separately built, likely a bundler configuration issue)"),
              e.add(_t147));
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
    function Eo() {
      return po;
    }
    function bo(t, e, n) {
      var r = e.__type,
        o = xi(t, r);
      var i = n.get(r);
      void 0 === i && ((i = Array.from(o.transforms)), n.set(r, i));
      var s = i.length;
      for (var _t148 = 0; _t148 < s && (i[_t148](e), e.isAttached()); _t148++);
    }
    function Mo(t, e) {
      return void 0 !== t && t.__key !== e && t.isAttached();
    }
    function Ao(t, e) {
      if (!e) return;
      var n = t._updateTags;
      var r = e;
      Array.isArray(e) || (r = [e]);
      for (var _t149 of r) n.add(_t149);
    }
    function wo(e, n) {
      var r = e.type,
        o = n.get(r);
      void 0 === o && t(17, r);
      var i = o.klass;
      e.type !== i.getType() && t(18, i.name);
      var s = i.importJSON(e),
        l = e.children;
      if ($o(s) && Array.isArray(l))
        for (var _t150 = 0; _t150 < l.length; _t150++) {
          var _e105 = wo(l[_t150], n);
          s.append(_e105);
        }
      return s;
    }
    function Do(t, e, n) {
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
    function Io(t, e) {
      var n = t._pendingEditorState,
        r = t._rootElement,
        o = t._headless || null === r;
      if (null === n)
        return void (t._deferred.length > 0 && Ro(t, t._deferred));
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
            _r50 = t._dirtyElements,
            _o38 = t._dirtyLeaves;
          (h.disconnect(), (g = ue(i, n, t, _e106, _r50, _o38)));
        } catch (e) {
          if ((e instanceof Error && t._onError(e), mo)) throw e;
          return (
            ui(t, null, r, n),
            ot(t),
            (t._dirtyType = 2),
            (mo = !0),
            Io(t, i),
            void (mo = !1)
          );
        } finally {
          (h.observe(r, Co), (t._updating = d), (_o = a), (yo = u), (po = f));
        }
      }
      n._readOnly || (n._readOnly = !0);
      var _ = t._dirtyLeaves,
        p = t._dirtyElements,
        y = t._normalizedNodes,
        m = t._updateTags,
        x = t._deferred;
      (c &&
        ((t._dirtyType = 0),
        t._cloneNotNeeded.clear(),
        (t._dirtyLeaves = new Set()),
        (t._dirtyElements = new Map()),
        (t._normalizedNodes = new Set()),
        (t._updateTags = new Set())),
        (function (t, e) {
          var n = t._decorators;
          var r = t._pendingDecorators || n;
          var o = e._nodeMap;
          var i;
          for (i in r) o.has(i) || (r === n && (r = Ui(t)), delete r[i]);
        })(t, n));
      var C = o ? null : As(Ss(t));
      if (
        t._editable &&
        null !== C &&
        (c || null === l || l.dirty || !l.is(s)) &&
        null !== r &&
        !m.has(rr)
      ) {
        ((po = t), (_o = n));
        try {
          if ((null !== h && h.disconnect(), c || null === l || l.dirty)) {
            var _e107 = t._blockCursorElement;
            (null !== _e107 && Ms(_e107, t, r), co(s, l, t, C, m, r));
          }
          !(function (t, e, n) {
            var r = t._blockCursorElement;
            if (
              Lr(n) &&
              n.isCollapsed() &&
              "element" === n.anchor.type &&
              e.contains(document.activeElement)
            ) {
              var _o39 = n.anchor,
                _i29 = _o39.getNode(),
                _s15 = _o39.offset;
              var _l0 = !1,
                _c7 = null;
              if (_s15 === _i29.getChildrenSize()) {
                bs(_i29.getChildAtIndex(_s15 - 1)) && (_l0 = !0);
              } else {
                var _e108 = _i29.getChildAtIndex(_s15);
                if (null !== _e108 && bs(_e108)) {
                  var _n73 = _e108.getPreviousSibling();
                  (null === _n73 || bs(_n73)) &&
                    ((_l0 = !0), (_c7 = t.getElementByKey(_e108.__key)));
                }
              }
              if (_l0) {
                var _n74 = Ws(_i29, t.getElementByKey(_i29.__key), t).element;
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
                            var _t151 = Zl(r);
                            r = e.blockCursor = _t151;
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
                    ? _n74.appendChild(r)
                    : _n74.insertBefore(r, _c7))
                );
              }
            }
            null !== r && Ms(r, t, e);
          })(t, r, l);
        } finally {
          (null !== h && h.observe(r, Co), (po = f), (_o = a));
        }
      }
      (null !== g &&
        (function (t, e, n, r, o) {
          var i = Array.from(t._listeners.mutation),
            s = i.length;
          for (var _t152 = 0; _t152 < s; _t152++) {
            var _i$_t = i[_t152],
              _s16 = _i$_t[0],
              _l1 = _i$_t[1];
            for (var _t153 of _l1) {
              var _i30 = e.get(_t153);
              void 0 !== _i30 &&
                _s16(_i30, {
                  dirtyLeaves: r,
                  prevEditorState: o,
                  updateTags: n,
                });
            }
          }
        })(t, g, m, _, i),
        Lr(l) ||
          null === l ||
          (null !== s && s.is(l)) ||
          t.dispatchCommand(he, void 0));
      var S = t._pendingDecorators;
      (null !== S &&
        ((t._decorators = S),
        (t._pendingDecorators = null),
        Po("decorator", t, !0, S)),
        (function (t, e, n) {
          var r = Yi(e),
            o = Yi(n);
          r !== o && Po("textcontent", t, !0, o);
        })(t, e || i, n),
        Po("update", t, !0, {
          dirtyElements: p,
          dirtyLeaves: _,
          editorState: n,
          mutatedNodes: g,
          normalizedNodes: y,
          prevEditorState: e || i,
          tags: m,
        }),
        Ro(t, x),
        (function (t) {
          var e = t._updates;
          if (0 === e.length) return void (t._cascadeCount = 0);
          if (t._cascadeCount++ > 99) {
            ((t._updates = []), (t._cascadeCount = 0));
            try {
              J(
                "One or more update listeners are endlessly enqueueing more updates. May have encountered infinite recursion caused by update listeners that trigger additional updates without a stop condition. Editor namespace: " +
                  t._config.namespace,
              );
            } catch (e) {
              e instanceof Error && t._onError(e);
            }
            return;
          }
          var n = e.shift();
          if (n) {
            var _e109 = n[0],
              _r51 = n[1];
            Ko(t, _e109, _r51);
          }
        })(t));
    }
    function Po(t, e, n) {
      var o = e._updating;
      e._updating = n;
      try {
        var _n75 = e._listeners[t],
          _o40 = Array.from(_n75);
        for (
          var _len3 = arguments.length,
            r = new Array(_len3 > 3 ? _len3 - 3 : 0),
            _key3 = 3;
          _key3 < _len3;
          _key3++
        ) {
          r[_key3 - 3] = arguments[_key3];
        }
        for (var _ref23 of _o40) {
          var _t154 = _ref23[0];
          var _e110 = _ref23[1];
          {
            _e110 && _e110();
            var _o41 = _t154.apply(void 0, r);
            _n75.has(_t154) ? _n75.set(_t154, _o41) : _o41 && _o41();
          }
        }
      } finally {
        e._updating = o;
      }
    }
    function Fo(t, e, n, r) {
      var o = qi(t);
      var i;
      for (var _t155 = 4; _t155 >= 0; _t155--) {
        var _loop = function _loop() {
            var l = o[_s17];
            if (_s17 > 0 && l._updating) {
              i = l;
              return 0;
            }
            var c = l._commands.get(e);
            if (void 0 !== c) {
              var _e111 = c[_t155];
              if (_e111.size > 0) {
                var _t156 = !1;
                if (
                  (Bo(l, function () {
                    for (var _o42 of _e111)
                      if (_o42(n, r)) return void (_t156 = !0);
                  }),
                  _t156)
                )
                  return { v: _t156 };
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
            Fo(i, e, n, r);
          }),
        !1
      );
    }
    function Ro(t, e) {
      if (((t._deferred = []), 0 !== e.length)) {
        var _n76 = t._updating;
        t._updating = !0;
        try {
          for (var _t157 = 0; _t157 < e.length; _t157++) e[_t157]();
        } finally {
          t._updating = _n76;
        }
      }
    }
    function Lo(e, n) {
      var r = e._updates;
      var o = n || !1;
      for (; 0 !== r.length; ) {
        var _n77 = r.shift();
        if (_n77) {
          var _r52 = _n77[0],
            _i31 = _n77[1],
            _s18 = e._pendingEditorState;
          var _l10 = void 0;
          (void 0 !== _i31 &&
            ((_l10 = _i31.onUpdate),
            _i31.skipTransforms && (o = !0),
            _i31.discrete && (null === _s18 && t(191), (_s18._flushSync = !0)),
            _l10 && e._deferred.push(_l10),
            Ao(e, _i31.tag)),
            null == _s18 ? Ko(e, _r52, _i31) : _r52());
        }
      }
      return o;
    }
    function Ko(e, n, r) {
      var o = e._updateTags;
      var i,
        s = !1,
        l = !1;
      (void 0 !== r &&
        ((i = r.onUpdate),
        Ao(e, r.tag),
        (s = r.skipTransforms || !1),
        (l = r.discrete || !1)),
        i && e._deferred.push(i));
      var c = e._editorState;
      var a = e._pendingEditorState,
        u = !1;
      ((null === a || a._readOnly) &&
        ((a = e._pendingEditorState = Jo(a || c)), (u = !0)),
        (a._flushSync = l));
      var f = _o,
        d = yo,
        h = po,
        g = e._updating;
      ((_o = a), (yo = !1), (e._updating = !0), (po = e));
      var _ = e._headless || null === e.getRootElement();
      yi(null);
      try {
        u &&
          (_
            ? null !== c._selection && (a._selection = c._selection.clone())
            : (a._selection = (function (t, e) {
                var n = t.getEditorState()._selection,
                  r = As(Ss(t));
                return Lr(n) || null == n ? Zr(n, r, t, e) : n.clone();
              })(e, (r && r.event) || null)));
        var _o43 = e._compositionKey;
        (n(),
          (s = Lo(e, s)),
          (function (t, e) {
            var n = e.getEditorState()._selection,
              r = t._selection;
            if (Lr(r)) {
              var _t158 = r.anchor,
                _e112 = r.focus;
              var _o44;
              if (
                ("text" === _t158.type &&
                  ((_o44 = _t158.getNode()), _o44.selectionTransform(n, r)),
                "text" === _e112.type)
              ) {
                var _t159 = _e112.getNode();
                _o44 !== _t159 && _t159.selectionTransform(n, r);
              }
            }
          })(a, e),
          0 !== e._dirtyType &&
            (s
              ? (function (t, e) {
                  var n = e._dirtyLeaves,
                    r = t._nodeMap;
                  for (var _t160 of n) {
                    var _e113 = r.get(_t160);
                    Er(_e113) &&
                      _e113.isAttached() &&
                      _e113.isSimpleText() &&
                      !_e113.isUnmergeable() &&
                      xt(_e113);
                  }
                })(a, e)
              : (function (t, e) {
                  var n = e._dirtyLeaves,
                    r = e._dirtyElements,
                    o = t._nodeMap,
                    i = Li(),
                    s = new Map();
                  var l = n,
                    c = l.size,
                    a = r,
                    u = a.size;
                  for (; c > 0 || u > 0; ) {
                    if (c > 0) {
                      e._dirtyLeaves = new Set();
                      for (var _t161 of l) {
                        var _r53 = o.get(_t161);
                        (Er(_r53) &&
                          _r53.isAttached() &&
                          _r53.isSimpleText() &&
                          !_r53.isUnmergeable() &&
                          xt(_r53),
                          void 0 !== _r53 && Mo(_r53, i) && bo(e, _r53, s),
                          n.add(_t161));
                      }
                      if (((l = e._dirtyLeaves), (c = l.size), c > 0)) {
                        xo++;
                        continue;
                      }
                    }
                    ((e._dirtyLeaves = new Set()),
                      (e._dirtyElements = new Map()),
                      a["delete"]("root") && a.set("root", !0));
                    for (var _t162 of a) {
                      var _n78 = _t162[0],
                        _l11 = _t162[1];
                      if ((r.set(_n78, _l11), !_l11)) continue;
                      var _c8 = o.get(_n78);
                      void 0 !== _c8 && Mo(_c8, i) && bo(e, _c8, s);
                    }
                    ((l = e._dirtyLeaves),
                      (c = l.size),
                      (a = e._dirtyElements),
                      (u = a.size),
                      xo++);
                  }
                  ((e._dirtyLeaves = n), (e._dirtyElements = r));
                })(a, e),
            Lo(e),
            (function (t, e, n, r) {
              var o = t._nodeMap,
                i = e._nodeMap,
                s = [];
              for (var _ref25 of r) {
                var _t163 = _ref25[0];
                {
                  var _e114 = i.get(_t163);
                  void 0 !== _e114 &&
                    (_e114.isAttached() ||
                      ($o(_e114) && G(_e114, _t163, o, i, s, r),
                      o.has(_t163) || r["delete"](_t163),
                      s.push(_t163)));
                }
              }
              for (var _t164 of s) i["delete"](_t164);
              for (var _t165 of n) {
                var _e115 = i.get(_t165);
                void 0 === _e115 ||
                  _e115.isAttached() ||
                  (o.has(_t165) || n["delete"](_t165), i["delete"](_t165));
              }
            })(c, a, e._dirtyLeaves, e._dirtyElements)));
        _o43 !== e._compositionKey && (a._flushSync = !0);
        var _i32 = a._selection;
        if (Lr(_i32)) {
          var _e116 = a._nodeMap,
            _n79 = _i32.anchor.key,
            _r54 = _i32.focus.key;
          (void 0 !== _e116.get(_n79) && void 0 !== _e116.get(_r54)) || t(19);
        } else Br(_i32) && 0 === _i32._nodes.size && (a._selection = null);
      } catch (t) {
        return (
          t instanceof Error && e._onError(t),
          (e._pendingEditorState = c),
          (e._dirtyType = 2),
          e._cloneNotNeeded.clear(),
          (e._dirtyLeaves = new Set()),
          e._dirtyElements.clear(),
          void Io(e)
        );
      } finally {
        ((_o = f), (yo = d), (po = h), (e._updating = g), (xo = 0));
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
          ? ((a._flushSync = !1), Io(e))
          : u &&
            Si(function () {
              Io(e);
            })
        : ((a._flushSync = !1),
          u && (o.clear(), (e._deferred = []), (e._pendingEditorState = null)));
    }
    function Bo(t, e, n) {
      po === t && void 0 === n ? e() : Ko(t, e, n);
    }
    var _zo4 = (function (_Zn2) {
      function zo(t) {
        var _this3;
        ((_this3 = _Zn2.call(this, t) || this),
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
      babelHelpers.inheritsLoose(zo, _Zn2);
      var _proto10 = zo.prototype;
      _proto10.afterCloneFrom = function afterCloneFrom(t) {
        (_Zn2.prototype.afterCloneFrom.call(this, t),
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
        var t = ko()._dirtyElements;
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
          if ((Er(e) && t.push(e), $o(e))) {
            var _n80 = e.getAllTextNodes();
            t.push.apply(t, _n80);
          }
          e = e.getNextSibling();
        }
        return t;
      };
      _proto10.getFirstDescendant = function getFirstDescendant() {
        var t = this.getFirstChild();
        for (; $o(t); ) {
          var _e117 = t.getFirstChild();
          if (null === _e117) break;
          t = _e117;
        }
        return t;
      };
      _proto10.getLastDescendant = function getLastDescendant() {
        var t = this.getLastChild();
        for (; $o(t); ) {
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
          var _t166 = e[n - 1];
          return ($o(_t166) && _t166.getLastDescendant()) || _t166 || null;
        }
        var r = e[t];
        return ($o(r) && r.getFirstDescendant()) || r || null;
      };
      _proto10.getFirstChild = function getFirstChild() {
        var t = this.getLatest().__first;
        return null === t ? null : Ki(t);
      };
      _proto10.getFirstChildOrThrow = function getFirstChildOrThrow() {
        var e = this.getFirstChild();
        return (null === e && t(45, this.__key), e);
      };
      _proto10.getLastChild = function getLastChild() {
        var t = this.getLatest().__last;
        return null === t ? null : Ki(t);
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
        for (var _r55 = 0; _r55 < n; _r55++) {
          var _o45 = e[_r55];
          ((t += _o45.getTextContent()),
            $o(_o45) && _r55 !== n - 1 && !_o45.isInline() && (t += N));
        }
        return t;
      };
      _proto10.getTextContentSize = function getTextContentSize() {
        var t = 0;
        var e = this.getChildren(),
          n = e.length;
        for (var _r56 = 0; _r56 < n; _r56++) {
          var _o46 = e[_r56];
          ((t += _o46.getTextContentSize()),
            $o(_o46) && _r56 !== n - 1 && !_o46.isInline() && (t += 2));
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
        return Di(this.getLatest().__textFormat, t, e);
      };
      _proto10.getTextStyle = function getTextStyle() {
        return this.getLatest().__textStyle;
      };
      _proto10.select = function select(t, e) {
        To();
        var n = to();
        var r = t,
          o = e;
        var i = this.getChildrenSize();
        if (!this.canBeEmpty())
          if (0 === t && 0 === e) {
            var _t167 = this.getFirstChild();
            if (Er(_t167) || $o(_t167)) return _t167.select(0, 0);
          } else if (
            !((void 0 !== t && t !== i) || (void 0 !== e && e !== i))
          ) {
            var _t168 = this.getLastChild();
            if (Er(_t168) || $o(_t168)) return _t168.select();
          }
        (void 0 === r && (r = i), void 0 === o && (o = i));
        var s = this.__key;
        return Lr(n)
          ? (n.anchor.set(s, r, "element"),
            n.focus.set(s, o, "element"),
            (n.dirty = !0),
            n)
          : qr(s, r, s, o, "element", "element");
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
        Xn(this) && t(324, this.__key, this.__type);
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
            var _t169 = this.getChildAtIndex(e);
            null !== _t169 && (u = _t169.getPreviousSibling());
          }
        if (n > 0) {
          var _e120 = null === u ? this.getFirstChild() : u.getNextSibling();
          for (var _r57 = 0; _r57 < n; _r57++) {
            null === _e120 && t(100);
            var _n81 = _e120.getNextSibling(),
              _r58 = _e120.__key;
            (Pi(_e120.getWritable()), c.push(_r58), (_e120 = _n81));
          }
        }
        var d = u;
        for (var _e121 of r) {
          null !== d && _e121.is(d) && (u = d = d.getPreviousSibling());
          var _n82 = _e121.getWritable();
          (_n82.__parent === s && f--, Pi(_n82));
          var _r59 = _e121.__key;
          if (null === d) ((i.__first = _r59), (_n82.__prev = null));
          else {
            var _t170 = d.getWritable();
            ((_t170.__next = _r59), (_n82.__prev = _t170.__key));
          }
          (_e121.__key === s && t(76),
            (_n82.__parent = s),
            l.push(_r59),
            (d = _e121));
        }
        if (e + n === o) {
          if (null !== d) {
            ((d.getWritable().__next = null), (i.__last = d.__key));
          }
        } else if (null !== a) {
          var _t171 = a.getWritable();
          if (null !== d) {
            var _e122 = d.getWritable();
            ((_t171.__prev = d.__key), (_e122.__next = a.__key));
          } else _t171.__prev = null;
        }
        if (((i.__size = f), c.length)) {
          var _t172 = to();
          if (Lr(_t172)) {
            var _e123 = new Set(c),
              _n83 = new Set(l),
              _r60 = _t172.anchor,
              _o47 = _t172.focus;
            (Wo(_r60, _e123, _n83) && oo(_r60, _r60.getNode(), this, u, a),
              Wo(_o47, _e123, _n83) && oo(_o47, _o47.getNode(), this, u, a),
              0 !== f || this.canBeEmpty() || Ns(this) || this.remove());
          }
        }
        return i;
      };
      _proto10.getDOMSlot = function getDOMSlot(t) {
        return new _B(t);
      };
      _proto10.exportDOM = function exportDOM(t) {
        var _Zn2$prototype$export = _Zn2.prototype.exportDOM.call(this, t),
          e = _Zn2$prototype$export.element;
        if (Ds(e)) {
          var _t173 = this.getIndent();
          _t173 > 0 &&
            ((e.style.paddingInlineStart = 40 * _t173 + "px"),
            e.setAttribute("data-lexical-indent", String(_t173)));
          var _n84 = this.getDirection();
          _n84 && (e.dir = _n84);
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
            _Zn2.prototype.exportJSON.call(this),
          ),
          e = this.getTextFormat(),
          n = this.getTextStyle();
        return (
          (0 === e && "" === n) ||
            Ns(this) ||
            this.getChildren().some(Er) ||
            (0 !== e && (t.textFormat = e), "" !== n && (t.textStyle = n)),
          t
        );
      };
      _proto10.updateFromJSON = function updateFromJSON(t) {
        return _Zn2.prototype.updateFromJSON
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
        var n = Ws(this, t, e);
        var r = n.getFirstChild();
        for (
          var _t174 = this.getFirstChild();
          _t174;
          _t174 = _t174.getNextSibling()
        ) {
          var _o48 = e.getElementByKey(_t174.getKey());
          null !== _o48 &&
            (null == r
              ? (n.insertChild(_o48), (r = _o48))
              : r !== _o48 && n.replaceChild(_o48, r),
            (r = r.nextSibling));
        }
      };
      return zo;
    })(_Zn5);
    function $o(t) {
      return t instanceof _zo4;
    }
    function Wo(t, e, n) {
      var r = t.getNode();
      for (; r; ) {
        var _t175 = r.__key;
        if (e.has(_t175) && !n.has(_t175)) return !0;
        r = r.getParent();
      }
      return !1;
    }
    var _Uo = (function (_Zn3) {
      function Uo() {
        return _Zn3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Uo, _Zn3);
      var _proto11 = Uo.prototype;
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
      return Uo;
    })(_Zn5);
    function Yo(t) {
      return t instanceof _Uo;
    }
    var _jo = (function (_zo) {
      function jo() {
        var _this4;
        ((_this4 = _zo.call(this, "root") || this),
          (_this4.__cachedText = null));
        return _this4;
      }
      babelHelpers.inheritsLoose(jo, _zo);
      jo.getType = function getType() {
        return "root";
      };
      jo.clone = function clone() {
        return new jo();
      };
      var _proto12 = jo.prototype;
      _proto12.getTopLevelElementOrThrow =
        function getTopLevelElementOrThrow() {
          t(51);
        };
      _proto12.getTextContent = function getTextContent() {
        var t = this.__cachedText;
        return null === t || (!So() && 0 !== ko()._dirtyType)
          ? _zo.prototype.getTextContent.call(this)
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
        for (var _e124 of r) $o(_e124) || Yo(_e124) || t(282);
        return _zo.prototype.splice.call(this, e, n, r);
      };
      jo.importJSON = function importJSON(t) {
        return ji().updateFromJSON(t);
      };
      _proto12.collapseAtStart = function collapseAtStart() {
        return !0;
      };
      return jo;
    })(_zo4);
    function Ho(t) {
      return t instanceof _jo;
    }
    function Jo(t) {
      return new _qo(j(t._nodeMap));
    }
    function Go() {
      return new _qo(new Map([["root", new _jo()]]));
    }
    function Vo(e) {
      var n = e.exportJSON(),
        r = e.constructor;
      if ((n.type !== r.getType() && t(130, r.name), $o(e))) {
        var _o49 = n.children;
        Array.isArray(_o49) || t(59, r.name);
        var _i33 = e.getChildren();
        for (var _t176 = 0; _t176 < _i33.length; _t176++) {
          var _e125 = Vo(_i33[_t176]);
          _o49.push(_e125);
        }
      }
      return n;
    }
    var _qo = (function () {
      function qo(t, e) {
        ((this._nodeMap = t),
          (this._selection = e || null),
          (this._flushSync = !1),
          (this._readOnly = !1));
      }
      var _proto13 = qo.prototype;
      _proto13.isEmpty = function isEmpty() {
        return 1 === this._nodeMap.size && null === this._selection;
      };
      _proto13.read = function read(t, e) {
        return Do((e && e.editor) || null, this, t);
      };
      _proto13.clone = function clone(t) {
        var e = new qo(this._nodeMap, void 0 === t ? this._selection : t);
        return ((e._readOnly = !0), e);
      };
      _proto13.toJSON = function toJSON() {
        return Do(null, this, function () {
          return { root: Vo(ji()) };
        });
      };
      return qo;
    })();
    var _Xo = (function (_zo2) {
      function Xo() {
        return _zo2.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(Xo, _zo2);
      Xo.getType = function getType() {
        return "artificial";
      };
      var _proto14 = Xo.prototype;
      _proto14.createDOM = function createDOM(t) {
        return document.createElement("div");
      };
      return Xo;
    })(_zo4);
    var _Qo = (function (_Zn4) {
      function Qo(t) {
        return _Zn4.call(this, t) || this;
      }
      babelHelpers.inheritsLoose(Qo, _Zn4);
      Qo.getType = function getType() {
        return "linebreak";
      };
      Qo.clone = function clone(t) {
        return new Qo(t.__key);
      };
      var _proto15 = Qo.prototype;
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
      Qo.importDOM = function importDOM() {
        return {
          br: function br(t) {
            return ni(t) || ri(t) ? null : { conversion: Zo, priority: 0 };
          },
        };
      };
      Qo.importJSON = function importJSON(t) {
        return ti().updateFromJSON(t);
      };
      return Qo;
    })(_Zn5);
    function Zo(t) {
      return { node: ti() };
    }
    function ti() {
      return ks(new _Qo());
    }
    function ei(t) {
      return t instanceof _Qo;
    }
    function ni(t) {
      var e = t.parentElement;
      if (null !== e && Ks(e)) {
        var _n85 = e.firstChild;
        if (_n85 === t || (_n85.nextSibling === t && oi(_n85))) {
          var _n86 = e.lastChild;
          if (_n86 === t || (_n86.previousSibling === t && oi(_n86))) return !0;
        }
      }
      return !1;
    }
    function ri(t) {
      var e = t.parentElement;
      if (null !== e && Ks(e)) {
        var _n87 = e.firstChild;
        if (_n87 === t || (_n87.nextSibling === t && oi(_n87))) return !1;
        var _r61 = e.lastChild;
        if (_r61 === t || (_r61.previousSibling === t && oi(_r61))) return !0;
      }
      return !1;
    }
    function oi(t) {
      return Mi(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    var _ii = (function (_zo3) {
      function ii() {
        return _zo3.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(ii, _zo3);
      ii.getType = function getType() {
        return "paragraph";
      };
      ii.clone = function clone(t) {
        return new ii(t.__key);
      };
      var _proto16 = ii.prototype;
      _proto16.createDOM = function createDOM(t) {
        var e = document.createElement("p"),
          n = cs(t.theme, "paragraph");
        if (void 0 !== n) {
          var _e$classList2;
          (_e$classList2 = e.classList).add.apply(_e$classList2, n);
        }
        return e;
      };
      _proto16.updateDOM = function updateDOM(t, e, n) {
        return !1;
      };
      ii.importDOM = function importDOM() {
        return {
          p: function p(t) {
            return { conversion: si, priority: 0 };
          },
        };
      };
      _proto16.exportDOM = function exportDOM(t) {
        var _zo3$prototype$export = _zo3.prototype.exportDOM.call(this, t),
          e = _zo3$prototype$export.element;
        if (Ds(e)) {
          this.isEmpty() && e.append(document.createElement("br"));
          var _t177 = this.getFormatType();
          _t177 && (e.style.textAlign = _t177);
        }
        return { element: e };
      };
      ii.importJSON = function importJSON(t) {
        return li().updateFromJSON(t);
      };
      _proto16.exportJSON = function exportJSON() {
        var t = _zo3.prototype.exportJSON.call(this);
        if (void 0 === t.textFormat || void 0 === t.textStyle) {
          var _e126 = this.getChildren().find(Er);
          _e126
            ? ((t.textFormat = _e126.getFormat()),
              (t.textStyle = _e126.getStyle()))
            : ((t.textFormat = this.getTextFormat()),
              (t.textStyle = this.getTextStyle()));
        }
        return t;
      };
      _proto16.insertNewAfter = function insertNewAfter(t, e) {
        var n = li();
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
          (Er(t[0]) && "" === t[0].getTextContent().trim())
        ) {
          if (null !== this.getNextSibling())
            return (this.selectNext(), this.remove(), !0);
          if (null !== this.getPreviousSibling())
            return (this.selectPrevious(), this.remove(), !0);
        }
        return !1;
      };
      return ii;
    })(_zo4);
    function si(t) {
      var e = li();
      if ((Xs(e, t), Vs(t, e), "" === e.getFormatType())) {
        var _n88 = t.getAttribute("align");
        _n88 && _n88 && _n88 in w && e.setFormat(_n88);
      }
      return (qs(e, t), { node: e });
    }
    function li() {
      return ks(new _ii());
    }
    function ci(t) {
      return t instanceof _ii;
    }
    var ai = 0;
    function ui(t, e, n, r, o) {
      var i = t._keyToDOMMap;
      (i.clear(),
        (t._editorState = Go()),
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
          ((n.textContent = ""), i.set("root", n), zi(n, t, "root")));
    }
    function fi(t) {
      var e = new Set(),
        n = new Set();
      var r = t;
      for (; r; ) {
        var _nl3 = nl(r),
          _t178 = _nl3.ownNodeConfig,
          _o50 = r.transform;
        if (!n.has(_o50)) {
          n.add(_o50);
          var _t179 = r.transform();
          _t179 && e.add(_t179);
        }
        if (_t178) {
          var _n89 = _t178.$transform;
          (_n89 && e.add(_n89), (r = _t178["extends"]));
        } else {
          var _t180 = Object.getPrototypeOf(r);
          r =
            _t180.prototype instanceof _Zn5 && _t180 !== _Zn5 ? _t180 : void 0;
        }
      }
      return e;
    }
    var di = {
      $createDOM: function $createDOM(t, e) {
        return t.createDOM(e._config, e);
      },
      $decorateDOM: function $decorateDOM(t, e, n, r) {},
      $exportDOM: function $exportDOM(t, e) {
        var n = Ci(e, t.getType());
        return n && void 0 !== n.exportDOM ? n.exportDOM(e, t) : t.exportDOM(e);
      },
      $extractWithChild: function $extractWithChild(t, e, n, r, o) {
        return $o(t) && t.extractWithChild(e, n, r);
      },
      $getDOMSlot: function $getDOMSlot(t, e, n) {
        return t.getDOMSlot(e);
      },
      $shouldExclude: function $shouldExclude(t, e, n) {
        return $o(t) && t.excludeFromCopy("html");
      },
      $shouldInclude: function $shouldInclude(t, e, n) {
        return !e || t.isSelected(e);
      },
      $updateDOM: function $updateDOM(t, e, n, r) {
        return t.updateDOM(e, n, r._config);
      },
    };
    function hi(t, e) {
      var n = t.get(e);
      (t["delete"](e), n && n());
    }
    function gi(t, e, n) {
      return (t.set(e, n), hi.bind(null, t, e));
    }
    var _i41 = (function () {
      function _i(t, e, n, r, o, i, s, l) {
        ((this._createEditorArgs = l),
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
          (this._key = Xi()),
          (this._onError = o),
          (this._htmlConversions = i),
          (this._editable = s),
          (this._headless = null !== e && e._headless),
          (this._window = null),
          (this._blockCursorElement = null));
      }
      var _proto17 = _i.prototype;
      _proto17.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto17.registerUpdateListener = function registerUpdateListener(t) {
        return gi(this._listeners.update, t);
      };
      _proto17.registerEditableListener = function registerEditableListener(t) {
        return gi(this._listeners.editable, t);
      };
      _proto17.registerDecoratorListener = function registerDecoratorListener(
        t,
      ) {
        return gi(this._listeners.decorator, t);
      };
      _proto17.registerTextContentListener =
        function registerTextContentListener(t) {
          return gi(this._listeners.textcontent, t);
        };
      _proto17.registerRootListener = function registerRootListener(t) {
        var _this13 = this;
        var e = this._listeners.root;
        return tc(gi(e, t, t(this._rootElement, null) || void 0), function () {
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
          r = Js(n).get(e.getType());
        if (!r) return;
        var o = new Map();
        for (var _t181 of r.keys()) o.set(_t181, "created");
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
          var _t182 = this.registerNodeTransformToKlass(o, e);
          r.push(_t182);
        }
        return (
          (function (t, e) {
            var n = Js(t.getEditorState()),
              r = [];
            for (var _t183 of e) {
              var _e127 = n.get(_t183);
              _e127 && r.push(_e127);
            }
            if (0 === r.length) return;
            t.update(
              function () {
                for (var _t184 of r)
                  for (var _e128 of _t184.keys()) {
                    var _t185 = Ki(_e128);
                    _t185 && _t185.markDirty();
                  }
              },
              null === t._pendingEditorState ? { tag: tr } : void 0,
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
        return hs(this, t, e);
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
          var _n90 = cs(this._config.theme, "root"),
            _r62 = this._pendingEditorState || this._editorState;
          if (
            ((this._rootElement = t),
            ui(this, e, t, _r62, { preserveUpdateQueue: !0 }),
            null !== e &&
              (this._config.disableEvents || Gn(e),
              null != _n90 &&
                (_e$classList3 = e.classList).remove.apply(
                  _e$classList3,
                  _n90,
                )),
            null !== t)
          ) {
            var _t$classList;
            var _e129 = Cs(t),
              _r63 = t.style;
            ((_r63.userSelect = "text"),
              (_r63.whiteSpace = "pre-wrap"),
              (_r63.wordBreak = "break-word"),
              t.setAttribute("data-lexical-editor", "true"),
              (this._window = _e129),
              (this._dirtyType = 2),
              ot(this),
              this._updateTags.add(tr),
              Io(this),
              this._config.disableEvents ||
                (function (t, e, _mn$get) {
                  var n = t.ownerDocument;
                  yn.set(t, n);
                  var r = (_mn$get = mn.get(n)) != null ? _mn$get : 0;
                  (r < 1 && n.addEventListener("selectionchange", Yn),
                    mn.set(n, r + 1),
                    (t.__lexicalEditor = e));
                  var o = Wn(t);
                  var _loop2 = function _loop2() {
                    var _un$_n = un[_n91],
                      r = _un$_n[0],
                      i = _un$_n[1],
                      s =
                        "function" == typeof i
                          ? function (t) {
                              Hn(t) ||
                                (jn(t),
                                (e.isEditable() || "click" === r) && i(t, e));
                            }
                          : function (t) {
                              if (Hn(t)) return;
                              jn(t);
                              var n = e.isEditable();
                              switch (r) {
                                case "cut":
                                  return n && hs(e, Ze, t);
                                case "copy":
                                  return hs(e, Qe, t);
                                case "paste":
                                  return n && hs(e, ve, t);
                                case "dragstart":
                                  return n && hs(e, Ve, t);
                                case "dragover":
                                  return n && hs(e, qe, t);
                                case "dragend":
                                  return n && hs(e, Xe, t);
                                case "focus":
                                  return n && hs(e, sn, t);
                                case "blur":
                                  return n && hs(e, ln, t);
                                case "drop":
                                  return n && hs(e, Je, t);
                              }
                            };
                    (t.addEventListener(r, s),
                      o.push(function () {
                        t.removeEventListener(r, s);
                      }));
                  };
                  for (var _n91 = 0; _n91 < un.length; _n91++) {
                    _loop2();
                  }
                })(t, this),
              null != _n90 &&
                (_t$classList = t.classList).add.apply(_t$classList, _n90));
          } else ((this._window = null), this._updateTags.add(tr), Io(this));
          Po("root", this, !1, t, e);
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
          ((r = Jo(e)),
          (r._selection = e._selection ? e._selection.clone() : null)),
          rt(this));
        var o = this._pendingEditorState,
          i = this._updateTags,
          s = void 0 !== n ? n.tag : null;
        (null === o || o.isEmpty() || (null != s && i.add(s), Io(this)),
          (this._pendingEditorState = r),
          (this._dirtyType = 2),
          this._dirtyElements.set("root", !1),
          (this._compositionKey = null),
          null != s && i.add(s),
          this._updating || Io(this));
      };
      _proto17.parseEditorState = function parseEditorState(t, e) {
        return (function (t, e, n) {
          var r = Go(),
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
            yi(null));
          try {
            var _o51 = e._nodes;
            (wo(t.root, _o51), n && n(), (r._readOnly = !0));
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
        return (Io(this), this.getEditorState().read(t, { editor: this }));
      };
      _proto17.update = function update(t, e) {
        !(function (t, e, n) {
          t._updating ? t._updates.push([e, n]) : Ko(t, e, n);
        })(this, t, e);
      };
      _proto17.focus = function focus(t, e) {
        if (e === void 0) {
          e = {};
        }
        var n = this._rootElement;
        null !== n &&
          (n.setAttribute("autocapitalize", "off"),
          Bo(this, function () {
            var r = to(),
              o = ji();
            (null !== r
              ? r.dirty || Ji(r.clone())
              : 0 !== o.getChildrenSize() &&
                ("rootStart" === e.defaultSelection
                  ? o.selectStart()
                  : o.selectEnd()),
              ys("focus"),
              ms(function () {
                (n.removeAttribute("autocapitalize"), t && t());
              }));
          }),
          null === this._pendingEditorState &&
            n.removeAttribute("autocapitalize"));
      };
      _proto17.blur = function blur() {
        var t = this._rootElement;
        null !== t && t.blur();
        var e = As(this._window);
        null !== e && e.removeAllRanges();
      };
      _proto17.isEditable = function isEditable() {
        return this._editable;
      };
      _proto17.setEditable = function setEditable(t) {
        this._editable !== t &&
          ((this._editable = t), Po("editable", this, !0, t));
      };
      _proto17.toJSON = function toJSON() {
        return { editorState: this._editorState.toJSON() };
      };
      return _i;
    })();
    _i41.version = W;
    var pi = null;
    function yi(t) {
      pi = t;
    }
    var mi = 1;
    function xi(e, n) {
      var r = Ci(e, n);
      return (void 0 === r && t(30, n), r);
    }
    function Ci(t, e) {
      return t._nodes.get(e);
    }
    var Si =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : function (t) {
            Promise.resolve().then(t);
          };
    function Ti(t) {
      var e = document.activeElement;
      if (!Ds(e)) return !1;
      var n = e.nodeName;
      return (
        Yo(Wi(t)) &&
        ("INPUT" === n ||
          "TEXTAREA" === n ||
          ("true" === e.contentEditable && null == Oi(e)))
      );
    }
    function Ni(t, e, n) {
      var r = t.getRootElement();
      try {
        return (
          null !== r &&
          r.contains(e) &&
          r.contains(n) &&
          null !== e &&
          !Ti(e) &&
          ki(e) === t
        );
      } catch (t) {
        return !1;
      }
    }
    function vi(t) {
      return t instanceof _i41;
    }
    function ki(t) {
      var e = t;
      for (; null != e; ) {
        var _t186 = Oi(e);
        if (vi(_t186)) return _t186;
        e = _s(e);
      }
      return null;
    }
    function Oi(t) {
      return t ? t.__lexicalEditor : null;
    }
    function Ei(t) {
      return wr(t) || t.isToken();
    }
    function bi(t) {
      return Ei(t) || t.isSegmented();
    }
    function Mi(t) {
      return Is(t) && 3 === t.nodeType;
    }
    function Ai(t) {
      return Is(t) && 9 === t.nodeType;
    }
    function wi(t) {
      var e = t;
      for (; null != e; ) {
        if (Mi(e)) return e;
        e = e.firstChild;
      }
      return null;
    }
    function Di(t, e, n) {
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
    function Ii(t, e) {
      var n = (function () {
        var t = pi;
        return ((pi = null), t);
      })();
      if (null != (e = e || (n && n.__key))) return void (t.__key = e);
      (To(), No());
      var r = ko(),
        o = vo(),
        i = "" + mi++;
      (o._nodeMap.set(i, t),
        $o(t) ? r._dirtyElements.set(i, !0) : r._dirtyLeaves.add(i),
        r._cloneNotNeeded.add(i),
        0 === r._dirtyType && (r._dirtyType = 1),
        (t.__key = i));
    }
    function Pi(t) {
      var e = t.getParent();
      if (null !== e) {
        var _n92 = t.getWritable(),
          _r64 = e.getWritable(),
          _o52 = t.getPreviousSibling(),
          _i34 = t.getNextSibling(),
          _s19 = null !== _i34 ? _i34.__key : null,
          _l12 = null !== _o52 ? _o52.__key : null,
          _c9 = null !== _o52 ? _o52.getWritable() : null,
          _a10 = null !== _i34 ? _i34.getWritable() : null;
        (null === _o52 && (_r64.__first = _s19),
          null === _i34 && (_r64.__last = _l12),
          null !== _c9 && (_c9.__next = _s19),
          null !== _a10 && (_a10.__prev = _l12),
          (_n92.__prev = null),
          (_n92.__next = null),
          (_n92.__parent = null),
          _r64.__size--);
      }
    }
    function Fi(e) {
      (No(), Xn(e) && t(323, e.__key, e.__type));
      var n = e.getLatest(),
        r = n.__parent,
        o = vo(),
        i = ko(),
        s = o._nodeMap,
        l = i._dirtyElements;
      null !== r &&
        (function (t, e, n) {
          var r = t;
          for (; null !== r; ) {
            if (n.has(r)) return;
            var _t187 = e.get(r);
            if (void 0 === _t187) break;
            (n.set(r, !1), (r = _t187.__parent));
          }
        })(r, s, l);
      var c = n.__key;
      (0 === i._dirtyType && (i._dirtyType = 1),
        $o(e) ? l.set(c, !0) : i._dirtyLeaves.add(c));
    }
    function Ri(t) {
      To();
      var e = ko(),
        n = e._compositionKey;
      if (t !== n) {
        if (((e._compositionKey = t), null !== n)) {
          var _t188 = Ki(n);
          null !== _t188 && _t188.getWritable();
        }
        if (null !== t) {
          var _e130 = Ki(t);
          null !== _e130 && _e130.getWritable();
        }
      }
    }
    function Li() {
      if (So()) return null;
      return ko()._compositionKey;
    }
    function Ki(t, e) {
      var n = (e || vo())._nodeMap.get(t);
      return void 0 === n ? null : n;
    }
    function Bi(t, e) {
      var n = $i(t, ko());
      return void 0 !== n ? Ki(n, e) : null;
    }
    function zi(t, e, n) {
      t["__lexicalKey_" + e._key] = n;
    }
    function $i(t, e) {
      return t["__lexicalKey_" + e._key];
    }
    function Wi(t, e) {
      var n = t;
      for (; null != n; ) {
        var _t189 = Bi(n, e);
        if (null !== _t189) return _t189;
        n = _s(n);
      }
      return null;
    }
    function Ui(t) {
      var e = t._decorators,
        n = Object.assign({}, e);
      return ((t._pendingDecorators = n), n);
    }
    function Yi(t) {
      return t.read(function () {
        return ji().getTextContent();
      });
    }
    function ji() {
      return Hi(vo());
    }
    function Hi(t) {
      return t._nodeMap.get("root");
    }
    function Ji(t) {
      To();
      var e = vo();
      (null !== t && ((t.dirty = !0), t.setCachedNodes(null)),
        (e._selection = t));
    }
    function Gi(t) {
      var e = ko(),
        n = (function (t, e) {
          var n = t;
          for (; null != n; ) {
            var _t190 = $i(n, e);
            if (void 0 !== _t190) return _t190;
            n = _s(n);
          }
          return null;
        })(t, e);
      return null === n
        ? t === e.getRootElement()
          ? Ki("root")
          : null
        : Ki(n);
    }
    function Vi(t) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function qi(t) {
      var e = [];
      for (var _n93 = t; null !== _n93; _n93 = _n93._parentEditor) e.push(_n93);
      return e;
    }
    function Xi() {
      return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substring(0, 5);
    }
    function Qi(t) {
      return Mi(t) ? t.nodeValue : null;
    }
    function Zi(t, e, n) {
      var r = As(Ss(e));
      if (null === r) return;
      var o = r.anchorNode;
      var i = r.anchorOffset,
        s = r.focusOffset;
      if (null !== o) {
        var _e131 = Qi(o);
        var _r65 = Wi(o);
        if (null !== _e131 && Er(_r65)) {
          if ((_e131 === T || _e131 === v) && n) {
            var _t191 = n.length;
            ((_e131 = n), (i = _t191), (s = _t191));
          }
          null !== _e131 && ts(_r65, _e131, i, s, t);
        }
      }
    }
    function ts(t, e, n, r, o) {
      var i = t;
      if (i.isAttached() && (o || !i.isDirty())) {
        var _l13 = i.isComposing();
        var _a11 = e;
        if (
          (_l13 || o) &&
          (e.endsWith(T) && (_a11 = e.slice(0, -T.length)), o)
        ) {
          var _t192 = v;
          var _e132;
          for (; -1 !== (_e132 = _a11.indexOf(_t192)); )
            ((_a11 = _a11.slice(0, _e132) + _a11.slice(_e132 + _t192.length)),
              null !== n &&
                n > _e132 &&
                (n = Math.max(_e132, n - _t192.length)),
              null !== r &&
                r > _e132 &&
                (r = Math.max(_e132, r - _t192.length)));
        }
        var _u9 = i.getTextContent();
        if (o || _a11 !== _u9) {
          if ("" === _a11) {
            if ((Ri(null), c || s || f)) i.remove();
            else {
              var _t193 = ko();
              setTimeout(function () {
                _t193.update(function () {
                  i.isAttached() && i.remove();
                });
              }, 20);
            }
            return;
          }
          var _e133 = i.getParent(),
            _o53 = eo(),
            _u0 = i.getTextContentSize(),
            _d7 = Li(),
            _h6 = i.getKey();
          if (
            i.isToken() ||
            (null !== _d7 && _h6 === _d7 && !_l13) ||
            (Lr(_o53) &&
              ((null !== _e133 &&
                !_e133.canInsertTextBefore() &&
                0 === _o53.anchor.offset) ||
                (_o53.anchor.key === t.__key &&
                  0 === _o53.anchor.offset &&
                  !i.canInsertTextBefore() &&
                  !_l13) ||
                (_o53.focus.key === t.__key &&
                  _o53.focus.offset === _u0 &&
                  !i.canInsertTextAfter() &&
                  !_l13)))
          )
            return void i.markDirty();
          var _g5 = to();
          if (!Lr(_g5) || null === n || null === r)
            return void es(i, _a11, _g5);
          if ((_g5.setTextNodeRange(i, n, i, r), i.isSegmented())) {
            var _t194 = Or(i.getTextContent());
            (i.replace(_t194), (i = _t194));
          }
          es(i, _a11, _g5);
        }
      }
    }
    function es(t, e, n) {
      if ((t.setTextContent(e), Lr(n))) {
        var _e134 = t.getKey();
        var _r66 = !1;
        for (var _o54 of ["anchor", "focus"]) {
          var _i35 = n[_o54];
          "text" === _i35.type &&
            _i35.key === _e134 &&
            ((_i35.offset = Sl(t, _i35.offset, "clamp")), (_r66 = !0));
        }
        _r66 && ((n._cachedNodes = null), (n._cachedIsBackward = null));
      }
    }
    function ns(t, e, n) {
      var r = e[n] || !1;
      return "any" === r || r === t[n];
    }
    function rs(t, e) {
      return (
        ns(t, e, "altKey") &&
        ns(t, e, "ctrlKey") &&
        ns(t, e, "shiftKey") &&
        ns(t, e, "metaKey")
      );
    }
    function os(t, e, n) {
      if (!rs(t, n)) return !1;
      if (t.key.toLowerCase() === e.toLowerCase()) return !0;
      if (e.length > 1) return !1;
      if (1 === t.key.length && t.key.charCodeAt(0) <= 127) return !1;
      if (t.code.startsWith("Digit") && /^\d$/.test(e))
        return t.code === "Digit" + e;
      var r = "Key" + e.toUpperCase();
      return t.code === r;
    }
    var is = { ctrlKey: !r, metaKey: r },
      ss = { altKey: r, ctrlKey: !r };
    function ls(t) {
      return "Backspace" === t.key;
    }
    function cs(t, e) {
      void 0 === t.__lexicalClassNameCache && (t.__lexicalClassNameCache = {});
      var n = t.__lexicalClassNameCache,
        r = n[e];
      if (void 0 !== r) return r;
      var o = t[e];
      if ("string" == typeof o) {
        var _t195 = Zl(o);
        return ((n[e] = _t195), _t195);
      }
      return o;
    }
    function as(e, n, r, o, i) {
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
    function us(t, e, n) {
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
    function fs(t, e) {
      var n = t.offset;
      if ("element" === t.type) {
        return us(t.getNode(), e, n);
      }
      {
        var _r67 = t.getNode();
        if ((e && 0 === n) || (!e && n === _r67.getTextContentSize())) {
          var _t196 = e ? _r67.getPreviousSibling() : _r67.getNextSibling();
          return null === _t196
            ? us(
                _r67.getParentOrThrow(),
                e,
                _r67.getIndexWithinParent() + (e ? 0 : 1),
              )
            : _t196;
        }
      }
      return null;
    }
    function ds(t) {
      var e = Ss(t).event,
        n = e && e.inputType;
      return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
    }
    function hs(t, e, n) {
      return Fo(t, e, n, t);
    }
    function gs(e, n) {
      var r = e._keyToDOMMap.get(n);
      return (void 0 === r && t(75, n), r);
    }
    function _s(t) {
      var e = t.assignedSlot || t.parentElement;
      return Ps(e) ? e.host : e;
    }
    function ps(t) {
      return Ai(t) ? t : Ds(t) ? t.ownerDocument : null;
    }
    function ys(t) {
      To();
      ko()._updateTags.add(t);
    }
    function ms(t) {
      To();
      ko()._deferred.push(t);
    }
    function xs(t, e) {
      var n = t.getParent();
      for (; null !== n; ) {
        if (n.is(e)) return !0;
        n = n.getParent();
      }
      return !1;
    }
    function Cs(t) {
      var e = ps(t);
      return e ? e.defaultView : null;
    }
    function Ss(e) {
      var n = e._window;
      return (null === n && t(78), n);
    }
    function Ts(t) {
      var e = t.getParentOrThrow();
      for (; null !== e; ) {
        if (Ns(e)) return e;
        e = e.getParentOrThrow();
      }
      return e;
    }
    function Ns(t) {
      return Ho(t) || ($o(t) && t.isShadowRoot());
    }
    function vs(t, e) {
      if (e === void 0) {
        e = !1;
      }
      var n = t.constructor.clone(t);
      return (
        Ii(n, null),
        n.afterCloneFrom(t),
        e || n.resetOnCopyNodeFrom(t),
        n
      );
    }
    function ks(e) {
      var n = ko(),
        r = e.getType(),
        o = Ci(n, r);
      void 0 === o && t(200, e.constructor.name, r);
      var i = o.replace,
        s = o.replaceWithKlass;
      if (null !== i) {
        var _n94 = i(e),
          _o55 = _n94.constructor;
        return (
          null !== s
            ? _n94 instanceof s ||
              t(
                201,
                s.name,
                s.getType(),
                _o55.name,
                _o55.getType(),
                e.constructor.name,
                r,
              )
            : (_n94 instanceof e.constructor && _o55 !== e.constructor) ||
              t(202, _o55.name, _o55.getType(), e.constructor.name, r),
          _n94.__key === e.__key &&
            t(203, e.constructor.name, r, _o55.name, _o55.getType()),
          _n94
        );
      }
      return e;
    }
    function Os(e, n) {
      !Ho(e.getParent()) || $o(n) || Yo(n) || t(99);
    }
    function Es(e) {
      var n = Ki(e);
      return (null === n && t(63, e), n);
    }
    function bs(t) {
      return (Yo(t) || ($o(t) && !t.canBeEmpty())) && !t.isInline();
    }
    function Ms(t, e, n) {
      (n.style.removeProperty("caret-color"), (e._blockCursorElement = null));
      var r = t.parentElement;
      null !== r && r.removeChild(t);
    }
    function As(t) {
      return e ? (t || window).getSelection() : null;
    }
    function ws(t) {
      var e = Cs(t);
      return e ? e.getSelection() : null;
    }
    function Ds(t) {
      return Is(t) && 1 === t.nodeType;
    }
    function Is(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "nodeType" in t &&
        "number" == typeof t.nodeType
      );
    }
    function Ps(t) {
      return Is(t) && 11 === t.nodeType;
    }
    var Fs =
      /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
    function Rs(t) {
      return (
        !(!Ds(t) || !t.style.display.startsWith("inline")) ||
        Fs.test(t.nodeName)
      );
    }
    var Ls =
      /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function Ks(t) {
      return (
        (!Ds(t) || !t.style.display.startsWith("inline")) && Ls.test(t.nodeName)
      );
    }
    function Bs(t) {
      if (Yo(t) && !t.isInline()) return !0;
      if (!$o(t) || Ns(t)) return !1;
      var e = t.getFirstChild(),
        n = null === e || ei(e) || Er(e) || e.isInline();
      return !t.isInline() && !1 !== t.canBeEmpty() && n;
    }
    function zs() {
      return ko();
    }
    function $s(t) {
      if (t === void 0) {
        t = zs();
      }
      return t._config.dom || di;
    }
    function Ws(e, n, r) {
      if (r === void 0) {
        r = zs();
      }
      var o = $s(r).$getDOMSlot(e, n, r);
      return ($o(e) && (Us(o) || t(344, e.getKey(), e.getType())), o);
    }
    function Us(t) {
      return t instanceof _B;
    }
    function Ys(t, e, n) {
      if (n === void 0) {
        n = zs();
      }
      return wi(Ws(t, e, n).element);
    }
    var js = new WeakMap(),
      Hs = new Map();
    function Js(e) {
      if (!e._readOnly && e.isEmpty()) return Hs;
      e._readOnly || t(192);
      var n = js.get(e);
      return (
        n ||
          ((n = (function (t) {
            var e = new Map();
            for (var _ref27 of t._nodeMap) {
              var _n95 = _ref27[0];
              var _r68 = _ref27[1];
              {
                var _t197 = _r68.__type;
                var _o56 = e.get(_t197);
                (_o56 || ((_o56 = new Map()), e.set(_t197, _o56)),
                  _o56.set(_n95, _r68));
              }
            }
            return e;
          })(e)),
          js.set(e, n)),
        n
      );
    }
    function Gs(t) {
      var e = t.constructor.clone(t);
      return (e.afterCloneFrom(t), e);
    }
    function Vs(t, e) {
      var n = t.getAttribute("data-lexical-indent");
      if (null !== n) {
        var _t198 = parseInt(n, 10);
        if (Number.isFinite(_t198) && _t198 >= 0)
          return void e.setIndent(_t198);
      }
      var r = parseInt(t.style.paddingInlineStart, 10) || 0,
        o = Math.round(r / 40);
      e.setIndent(o);
    }
    function qs(t, e) {
      var n = e.getAttribute("dir");
      return "ltr" === n || "rtl" === n ? t.setDirection(n) : t;
    }
    function Xs(t, e) {
      var n = e.style.textAlign;
      return n && n in w ? t.setFormat(n) : t;
    }
    function Qs(t, e) {
      ((t.__lexicalUnmanaged = !0),
        e &&
          void 0 !== e.captureSelection &&
          (t.__lexicalCapturedSelection = e.captureSelection));
    }
    function Zs(t) {
      return !0 === t.__lexicalUnmanaged;
    }
    function tl(t, e) {
      var n = t;
      for (; null != n; ) {
        if (!0 === n.__lexicalCapturedSelection) return !0;
        if (void 0 !== $i(n, e)) return !1;
        n = _s(n);
      }
      return !1;
    }
    function el(t, e) {
      return (
        (function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        })(t, e) && t[e] !== _Zn5[e]
      );
    }
    function nl(e) {
      var n = F in e.prototype ? e.prototype[F]() : void 0,
        r = (function (e) {
          if (!(e === _Zn5 || e.prototype instanceof _Zn5)) {
            var _n96 = "<unknown>",
              _r69 = "<unknown>";
            try {
              _n96 = e.getType();
            } catch (t) {}
            try {
              _i41.version && (_r69 = JSON.parse(_i41.version));
            } catch (t) {}
            t(290, e.name, _n96, _r69);
          }
          return e === _Uo || e === _zo4 || e === _Zn5;
        })(e),
        o = !r && el(e, "getType") ? e.getType() : void 0;
      var i,
        s = o;
      if (n)
        if (o) i = n[o];
        else
          for (var _ref29 of Object.entries(n)) {
            var _t199 = _ref29[0];
            var _e135 = _ref29[1];
            ((s = _t199), (i = _e135));
          }
      if (
        !r &&
        s &&
        (el(e, "getType") ||
          (e.getType = function () {
            return s;
          }),
        el(e, "clone") ||
          (e.clone = function (t) {
            return (yi(t), new e());
          }),
        el(e, "importJSON") ||
          (e.importJSON =
            (i && i.$importJSON) ||
            function (t) {
              return new e().updateFromJSON(t);
            }),
        !el(e, "importDOM") && i)
      ) {
        var _i36 = i,
          _t200 = _i36.importDOM;
        _t200 &&
          (e.importDOM = function () {
            return _t200;
          });
      }
      return { ownNodeConfig: i, ownNodeType: s };
    }
    var rl = function rl(t, e) {
      var n = t;
      for (; null != n && !Ho(n); ) {
        if (e(n)) return n;
        n = n.getParent();
      }
      return null;
    };
    function ol(e, n) {
      var r = [];
      var o = e.__first;
      for (; null !== o; ) {
        var _e136 = null === n ? Ki(o) : n.get(o);
        (null == _e136 && t(174), r.push(o), (o = _e136.__next));
      }
      return r;
    }
    var il = { next: "previous", previous: "next" };
    var _sl4 = (function () {
      function sl(t) {
        this.origin = t;
      }
      var _proto18 = sl.prototype;
      _proto18[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return wl({
            hasNext: gl,
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
        return xl(this.getNodeAtCaret(), this.direction);
      };
      _proto18.getSiblingCaret = function getSiblingCaret() {
        return xl(this.origin, this.direction);
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
          var _t201 = i.getAdjacentCaret();
          null !== _t201 && l.size < e;
          _t201 = _t201.getAdjacentCaret()
        ) {
          var _e137 = _t201.origin.getWritable();
          l.set(_e137.getKey(), _e137);
        }
        for (var _e138 of o) {
          if (l.size > 0) {
            var _n97 = i.getNodeAtCaret();
            if (_n97) {
              if (
                (l["delete"](_n97.getKey()),
                l["delete"](_e138.getKey()),
                _n97.is(_e138) || i.origin.is(_e138))
              );
              else {
                var _t202 = _e138.getParent();
                (_t202 && _t202.is(s) && _e138.remove(), _n97.replace(_e138));
              }
            } else null === _n97 && t(263, Array.from(l).join(" "));
          } else i.insert(_e138);
          i = xl(_e138, this.direction);
        }
        for (var _t203 of l.values()) _t203.remove();
        return this;
      };
      return sl;
    })();
    var _ll3 = (function (_sl) {
      function ll() {
        var _this5;
        for (
          var _len5 = arguments.length, args = new Array(_len5), _key5 = 0;
          _key5 < _len5;
          _key5++
        ) {
          args[_key5] = arguments[_key5];
        }
        return (
          ((_this5 = _sl.call.apply(_sl, [this].concat(args)) || this),
          (_this5.type = "child"),
          babelHelpers.assertThisInitialized(_this5)) ||
          babelHelpers.assertThisInitialized(_this5)
        );
      }
      babelHelpers.inheritsLoose(ll, _sl);
      var _proto19 = ll.prototype;
      _proto19.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Nl(t, this.direction);
      };
      _proto19.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return xl(ul(this.getParentAtCaret(), t), this.direction);
      };
      _proto19.getFlipped = function getFlipped() {
        var t = al(this.direction);
        return xl(this.getNodeAtCaret(), t) || Nl(this.origin, t);
      };
      _proto19.getParentAtCaret = function getParentAtCaret() {
        return this.origin;
      };
      _proto19.getChildCaret = function getChildCaret() {
        return this;
      };
      _proto19.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          t instanceof ll &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto19.isSamePointCaret = function isSamePointCaret(t) {
        return this.isSameNodeCaret(t);
      };
      return ll;
    })(_sl4);
    var cl = { root: Ho, shadowRoot: Ns };
    function al(t) {
      return il[t];
    }
    function ul(t, e) {
      if (e === void 0) {
        e = "root";
      }
      return cl[e](t) ? null : t;
    }
    var _fl3 = (function (_sl2) {
      function fl() {
        var _this6;
        for (
          var _len6 = arguments.length, args = new Array(_len6), _key6 = 0;
          _key6 < _len6;
          _key6++
        ) {
          args[_key6] = arguments[_key6];
        }
        return (
          ((_this6 = _sl2.call.apply(_sl2, [this].concat(args)) || this),
          (_this6.type = "sibling"),
          babelHelpers.assertThisInitialized(_this6)) ||
          babelHelpers.assertThisInitialized(_this6)
        );
      }
      babelHelpers.inheritsLoose(fl, _sl2);
      var _proto20 = fl.prototype;
      _proto20.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : xl(t, this.direction);
      };
      _proto20.getSiblingCaret = function getSiblingCaret() {
        return this;
      };
      _proto20.getParentAtCaret = function getParentAtCaret() {
        return this.origin.getParent();
      };
      _proto20.getChildCaret = function getChildCaret() {
        return $o(this.origin) ? Nl(this.origin, this.direction) : null;
      };
      _proto20.getParentCaret = function getParentCaret(t) {
        if (t === void 0) {
          t = "root";
        }
        return xl(ul(this.getParentAtCaret(), t), this.direction);
      };
      _proto20.getFlipped = function getFlipped() {
        var t = al(this.direction);
        return (
          xl(this.getNodeAtCaret(), t) || Nl(this.origin.getParentOrThrow(), t)
        );
      };
      _proto20.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof fl &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto20.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof fl || t instanceof _dl3) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      return fl;
    })(_sl4);
    var _dl3 = (function (_sl3) {
      function dl(t, e) {
        var _this7;
        ((_this7 = _sl3.call(this, t) || this),
          (_this7.type = "text"),
          (_this7.offset = e));
        return _this7;
      }
      babelHelpers.inheritsLoose(dl, _sl3);
      var _proto21 = dl.prototype;
      _proto21.getLatest = function getLatest() {
        var t = this.origin.getLatest();
        return t === this.origin ? this : Cl(t, this.direction, this.offset);
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
        return xl(ul(this.getParentAtCaret(), t), this.direction);
      };
      _proto21.getFlipped = function getFlipped() {
        return Cl(this.origin, al(this.direction), this.offset);
      };
      _proto21.isSamePointCaret = function isSamePointCaret(t) {
        return (
          t instanceof dl &&
          this.direction === t.direction &&
          this.origin.is(t.origin) &&
          this.offset === t.offset
        );
      };
      _proto21.isSameNodeCaret = function isSameNodeCaret(t) {
        return (
          (t instanceof _fl3 || t instanceof dl) &&
          this.direction === t.direction &&
          this.origin.is(t.origin)
        );
      };
      _proto21.getSiblingCaret = function getSiblingCaret() {
        return xl(this.origin, this.direction);
      };
      return dl;
    })(_sl4);
    function hl(t) {
      return t instanceof _dl3;
    }
    function gl(t) {
      return t instanceof _fl3;
    }
    function _l(t) {
      return t instanceof _ll3;
    }
    var pl = {
        next: (function (_dl) {
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
              ((_this8 = _dl.call.apply(_dl, [this].concat(args)) || this),
              (_this8.direction = "next"),
              babelHelpers.assertThisInitialized(_this8)) ||
              babelHelpers.assertThisInitialized(_this8)
            );
          }
          babelHelpers.inheritsLoose(_class, _dl);
          var _proto22 = _class.prototype;
          _proto22.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto22.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class;
        })(_dl3),
        previous: (function (_dl2) {
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
              ((_this9 = _dl2.call.apply(_dl2, [this].concat(args)) || this),
              (_this9.direction = "previous"),
              babelHelpers.assertThisInitialized(_this9)) ||
              babelHelpers.assertThisInitialized(_this9)
            );
          }
          babelHelpers.inheritsLoose(_class3, _dl2);
          var _proto23 = _class3.prototype;
          _proto23.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto23.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class3;
        })(_dl3),
      },
      yl = {
        next: (function (_fl) {
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
              ((_this0 = _fl.call.apply(_fl, [this].concat(args)) || this),
              (_this0.direction = "next"),
              babelHelpers.assertThisInitialized(_this0)) ||
              babelHelpers.assertThisInitialized(_this0)
            );
          }
          babelHelpers.inheritsLoose(_class5, _fl);
          var _proto24 = _class5.prototype;
          _proto24.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getNextSibling();
          };
          _proto24.insert = function insert(t) {
            return (this.origin.insertAfter(t), this);
          };
          return _class5;
        })(_fl3),
        previous: (function (_fl2) {
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
              ((_this1 = _fl2.call.apply(_fl2, [this].concat(args)) || this),
              (_this1.direction = "previous"),
              babelHelpers.assertThisInitialized(_this1)) ||
              babelHelpers.assertThisInitialized(_this1)
            );
          }
          babelHelpers.inheritsLoose(_class7, _fl2);
          var _proto25 = _class7.prototype;
          _proto25.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getPreviousSibling();
          };
          _proto25.insert = function insert(t) {
            return (this.origin.insertBefore(t), this);
          };
          return _class7;
        })(_fl3),
      },
      ml = {
        next: (function (_ll) {
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
              ((_this10 = _ll.call.apply(_ll, [this].concat(args)) || this),
              (_this10.direction = "next"),
              babelHelpers.assertThisInitialized(_this10)) ||
              babelHelpers.assertThisInitialized(_this10)
            );
          }
          babelHelpers.inheritsLoose(_class9, _ll);
          var _proto26 = _class9.prototype;
          _proto26.getNodeAtCaret = function getNodeAtCaret() {
            return this.origin.getFirstChild();
          };
          _proto26.insert = function insert(t) {
            return (this.origin.splice(0, 0, [t]), this);
          };
          return _class9;
        })(_ll3),
        previous: (function (_ll2) {
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
              ((_this11 = _ll2.call.apply(_ll2, [this].concat(args)) || this),
              (_this11.direction = "previous"),
              babelHelpers.assertThisInitialized(_this11)) ||
              babelHelpers.assertThisInitialized(_this11)
            );
          }
          babelHelpers.inheritsLoose(_class1, _ll2);
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
        })(_ll3),
      };
    function xl(t, e) {
      return t ? new yl[e](t) : null;
    }
    function Cl(t, e, n) {
      return t ? new pl[e](t, Sl(t, n)) : null;
    }
    function Sl(t, e, n) {
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
              for (var _t204 of e) r.append("v", _t204);
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
    function Tl(t, e) {
      return new _El(t, e);
    }
    function Nl(t, e) {
      return $o(t) ? new ml[e](t) : null;
    }
    function vl(t) {
      return (t && t.getChildCaret()) || t;
    }
    function kl(t) {
      return t && vl(t.getAdjacentCaret());
    }
    var _Ol = (function () {
      function Ol(t, e, n) {
        this.type = "node-caret-range";
        ((this.anchor = t), (this.focus = e), (this.direction = n));
      }
      var _proto28 = Ol.prototype;
      _proto28.getLatest = function getLatest() {
        var t = this.anchor.getLatest(),
          e = this.focus.getLatest();
        return t === this.anchor && e === this.focus
          ? this
          : new Ol(t, e, this.direction);
      };
      _proto28.isCollapsed = function isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
      };
      _proto28.getTextSlices = function getTextSlices() {
        var _this14 = this;
        var t = function t(_t205) {
            var e = _this14[_t205].getLatest();
            return hl(e)
              ? (function (t, e) {
                  var n = t.direction,
                    r = t.origin,
                    o = Sl(r, "focus" === e ? al(n) : n);
                  return Tl(t, o - t.offset);
                })(e, _t205)
              : null;
          },
          e = t("anchor"),
          n = t("focus");
        if (e && n) {
          var _t206 = e.caret,
            _r70 = n.caret;
          if (_t206.isSameNodeCaret(_r70))
            return [Tl(_t206, _r70.offset - _t206.offset), null];
        }
        return [e, n];
      };
      _proto28.iterNodeCarets = function iterNodeCarets(t) {
        if (t === void 0) {
          t = "root";
        }
        var e = hl(this.anchor)
            ? this.anchor.getSiblingCaret()
            : this.anchor.getLatest(),
          n = this.focus.getLatest(),
          r = hl(n),
          o = function o(e) {
            return e.isSameNodeCaret(n) ? null : kl(e) || e.getParentCaret(t);
          };
        return wl({
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
      return Ol;
    })();
    var _El = (function () {
      function El(t, e) {
        this.type = "slice";
        ((this.caret = t), (this.distance = e));
      }
      var _proto29 = El.prototype;
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
        return Cl(t.setTextContent(o.slice(0, n) + o.slice(r)), e, n);
      };
      return El;
    })();
    function bl(t) {
      return Al(t, xl(ji(), t.direction));
    }
    function Ml(t) {
      return Al(t, t);
    }
    function Al(e, n) {
      return (
        e.direction !== n.direction && t(265),
        new _Ol(e, n, e.direction)
      );
    }
    function wl(t) {
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
    function Dl(e, n) {
      var r = Rl(e.origin, n.origin);
      switch (
        (null === r && t(275, e.origin.getKey(), n.origin.getKey()), r.type)
      ) {
        case "same": {
          var _t207 = "text" === e.type,
            _r71 = "text" === n.type;
          return _t207 && _r71
            ? (function (t, e) {
                return Math.sign(t - e);
              })(e.offset, n.offset)
            : e.type === n.type
              ? 0
              : _t207
                ? -1
                : _r71
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
          return Il(r);
      }
    }
    function Il(t) {
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
    function Pl(t, e) {
      return e.is(t);
    }
    function Fl(t) {
      return $o(t) ? [t.getLatest(), null] : [t.getParent(), t.getLatest()];
    }
    function Rl(e, n) {
      if (e.is(n)) return { commonAncestor: e, type: "same" };
      var r = new Map();
      for (
        var _Fl = Fl(e), _t208 = _Fl[0], _n98 = _Fl[1];
        _t208;
        _n98 = _t208, _t208 = _t208.getParent()
      )
        r.set(_t208, _n98);
      for (
        var _Fl2 = Fl(n), _o57 = _Fl2[0], _i37 = _Fl2[1];
        _o57;
        _i37 = _o57, _o57 = _o57.getParent()
      ) {
        var _s20 = r.get(_o57);
        if (void 0 !== _s20)
          return null === _s20
            ? (Pl(e, _o57) || t(276),
              { commonAncestor: _o57, type: "ancestor" })
            : null === _i37
              ? (Pl(n, _o57) || t(277),
                { commonAncestor: _o57, type: "descendant" })
              : ((($o(_s20) || Pl(e, _s20)) &&
                  ($o(_i37) || Pl(n, _i37)) &&
                  _o57.is(_s20.getParent()) &&
                  _o57.is(_i37.getParent())) ||
                  t(278),
                { a: _s20, b: _i37, commonAncestor: _o57, type: "branch" });
      }
      return null;
    }
    function Ll(e, n) {
      var r = e.type,
        o = e.key,
        i = e.offset,
        s = Es(e.key);
      return "text" === r
        ? (Er(s) || t(266, s.getType(), o), Cl(s, n, i))
        : ($o(s) || t(267, s.getType(), o), ql(s, e.offset, n));
    }
    function Kl(e, n) {
      var r = n.origin,
        o = n.direction,
        i = "next" === o;
      hl(n)
        ? e.set(r.getKey(), n.offset, "text")
        : gl(n)
          ? Er(r)
            ? e.set(r.getKey(), Sl(r, o), "text")
            : e.set(
                r.getParentOrThrow().getKey(),
                r.getIndexWithinParent() + (i ? 1 : 0),
                "element",
              )
          : ((_l(n) && $o(r)) || t(268),
            e.set(r.getKey(), i ? 0 : r.getChildrenSize(), "element"));
    }
    function Bl(t) {
      var e = to(),
        n = Lr(e) ? e : Xr();
      return (zl(n, t), Ji(n), n);
    }
    function zl(t, e) {
      (Kl(t.anchor, e.anchor), Kl(t.focus, e.focus));
    }
    function $l(t) {
      var e = t.anchor,
        n = t.focus,
        r = Ll(e, "next"),
        o = Ll(n, "next"),
        i = Dl(r, o) <= 0 ? "next" : "previous";
      return Al(Gl(r, i), Gl(o, i));
    }
    function Wl(t) {
      var e = t.direction,
        n = t.origin,
        r = xl(n, al(e)).getNodeAtCaret();
      return r ? xl(r, e) : Nl(n.getParentOrThrow(), e);
    }
    function Ul(t, e) {
      if (e === void 0) {
        e = "root";
      }
      var n = [t];
      for (
        var _r72 = _l(t) ? t.getParentCaret(e) : t.getSiblingCaret();
        null !== _r72;
        _r72 = _r72.getParentCaret(e)
      )
        n.push(Wl(_r72));
      return n;
    }
    function Yl(t) {
      return !!t && t.origin.isAttached();
    }
    function jl(e, n) {
      if (n === void 0) {
        n = "removeEmptySlices";
      }
      if (e.isCollapsed()) return e;
      var r = "root",
        o = "next";
      var i = n;
      var s = Vl(e, o),
        l = Ul(s.anchor, r),
        c = Ul(s.focus.getFlipped(), r),
        a = new Set(),
        u = [];
      for (var _t209 of s.iterNodeCarets(r))
        if (_l(_t209)) a.add(_t209.origin.getKey());
        else if (gl(_t209)) {
          var _e139 = _t209.origin;
          ($o(_e139) && !a.has(_e139.getKey())) || u.push(_e139);
        }
      for (var _t210 of u) _t210.remove();
      for (var _t211 of s.getTextSlices()) {
        if (!_t211) continue;
        var _e140 = _t211.caret.origin,
          _n99 = _e140.getTextContentSize(),
          _r73 = Wl(xl(_e140, o)),
          _s21 = _e140.getMode();
        if (
          (Math.abs(_t211.distance) === _n99 && "removeEmptySlices" === i) ||
          ("token" === _s21 && 0 !== _t211.distance)
        )
          _r73.remove();
        else if (0 !== _t211.distance) {
          i = "removeEmptySlices";
          var _e141 = _t211.removeTextSlice();
          var _n100 = _t211.caret.origin;
          if ("segmented" === _s21) {
            var _t212 = _e141.origin,
              _n101 = Or(_t212.getTextContent())
                .setStyle(_t212.getStyle())
                .setFormat(_t212.getFormat());
            (_r73.replaceOrInsert(_n101), (_e141 = Cl(_n101, o, _e141.offset)));
          }
          (_n100.is(l[0].origin) && (l[0] = _e141),
            _n100.is(c[0].origin) && (c[0] = _e141.getFlipped()));
        }
      }
      var f, d;
      for (var _t213 of l)
        if (Yl(_t213)) {
          f = Hl(_t213);
          break;
        }
      for (var _t214 of c)
        if (Yl(_t214)) {
          d = Hl(_t214);
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
            for (var _r74 = c; _r74 < t.length; _r74++) {
              var _o58 = t[_r74];
              if (Ns(_o58)) return;
              !n && e(_o58) && (n = _o58);
            }
            return n;
          },
          u = a(i, Bs),
          f =
            u &&
            a(s, function (t) {
              return n.has(t.getKey()) && Bs(t);
            });
        return u && f ? [u, f] : null;
      })(f, d, a);
      if (h) {
        var _t215 = h[0],
          _e142 = h[1];
        Nl(_t215, "previous").splice(0, _e142.getChildren());
        var _n102 = _e142.getParent();
        for (_e142.remove(!0); _n102 && _n102.isEmpty(); ) {
          var _t216 = _n102;
          ((_n102 = _n102.getParent()), _t216.remove(!0));
        }
      }
      var g = [f, d].concat(l, c).find(Yl);
      if (g) {
        return Ml(Gl(Hl(g), e.direction));
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
    function Hl(t) {
      var e = (function (t) {
          var e = t;
          for (; _l(e); ) {
            var _t217 = kl(e);
            if (!_l(_t217)) break;
            e = _t217;
          }
          return e;
        })(t.getLatest()),
        n = e.direction;
      if (Er(e.origin)) return hl(e) ? e : Cl(e.origin, n, n);
      var r = e.getAdjacentCaret();
      return gl(r) && Er(r.origin) ? Cl(r.origin, n, al(n)) : e;
    }
    function Jl(t) {
      return hl(t) && t.offset !== Sl(t.origin, t.direction);
    }
    function Gl(t, e) {
      return t.direction === e ? t : t.getFlipped();
    }
    function Vl(t, e) {
      return t.direction === e ? t : Al(Gl(t.focus, e), Gl(t.anchor, e));
    }
    function ql(t, e, n) {
      var r = Nl(t, "next");
      for (var _t218 = 0; _t218 < e; _t218++) {
        var _t219 = r.getAdjacentCaret();
        if (null === _t219) break;
        r = _t219;
      }
      return Gl(r, n);
    }
    function Xl(e) {
      var n = e.origin,
        r = e.offset,
        o = e.direction;
      if (r === Sl(n, o)) return e.getSiblingCaret();
      if (r === Sl(n, al(o))) return Wl(e.getSiblingCaret());
      var _n$splitText2 = n.splitText(r),
        i = _n$splitText2[0];
      return (Er(i) || t(281), Gl(xl(i, "next"), o));
    }
    function Ql(t, e) {
      return !0;
    }
    function Zl() {
      var e = [];
      for (
        var _len12 = arguments.length, t = new Array(_len12), _key12 = 0;
        _key12 < _len12;
        _key12++
      ) {
        t[_key12] = arguments[_key12];
      }
      for (var _n103 of t)
        if (_n103 && "string" == typeof _n103)
          for (var _ref32 of _n103.matchAll(/\S+/g)) {
            var _t220 = _ref32[0];
            e.push(_t220);
          }
      return e;
    }
    function tc() {
      for (
        var _len13 = arguments.length, t = new Array(_len13), _key13 = 0;
        _key13 < _len13;
        _key13++
      ) {
        t[_key13] = arguments[_key13];
      }
      return function () {
        for (var _e143 = t.length - 1; _e143 >= 0; _e143--) t[_e143]();
        t.length = 0;
      };
    }
    ((exports.$addUpdateTag = ys),
      (exports.$applyNodeReplacement = ks),
      (exports.$assumeActiveEditor = function (t) {
        (null !== vo() && null === po && (po = t),
          po !== t &&
            J(
              "The given editor argument does not match $getEditor() in this context. Use editor.getEditorState().read(..., {editor}) if this cross-editor call is intentional.",
            ));
      }),
      (exports.$caretFromPoint = Ll),
      (exports.$caretRangeFromSelection = $l),
      (exports.$cloneWithProperties = Gs),
      (exports.$cloneWithPropertiesEphemeral = function (t) {
        return (((e = Gs(t))[qn] = !0), e);
        var e;
      }),
      (exports.$comparePointCaretNext = Dl),
      (exports.$copyNode = vs),
      (exports.$create = function (t) {
        var e = zs();
        return (
          To(),
          new (e.resolveRegisteredNodeAfterReplacements(
            e.getRegisteredNode(t),
          ).klass)()
        );
      }),
      (exports.$createChildrenArray = ol),
      (exports.$createLineBreakNode = ti),
      (exports.$createNodeSelection = Qr),
      (exports.$createParagraphNode = li),
      (exports.$createPoint = Ir),
      (exports.$createRangeSelection = Xr),
      (exports.$createRangeSelectionFromDom = function (t, e) {
        return Zr(null, t, e, null);
      }),
      (exports.$createTabNode = Ar),
      (exports.$createTextNode = Or),
      (exports.$extendCaretToRange = bl),
      (exports.$findMatchingParent = rl),
      (exports.$fullReconcile = function () {
        ko()._dirtyType = 2;
      }),
      (exports.$generateNodesFromRawText = uo),
      (exports.$getAdjacentChildCaret = kl),
      (exports.$getAdjacentNode = fs),
      (exports.$getAdjacentSiblingOrParentSiblingCaret = function (t, e) {
        if (e === void 0) {
          e = "root";
        }
        var n = 0,
          r = t,
          o = kl(r);
        for (; null === o; ) {
          if ((n--, (o = r.getParentCaret(e)), !o)) return null;
          ((r = o), (o = kl(r)));
        }
        return o && [o, n];
      }),
      (exports.$getCaretInDirection = Gl),
      (exports.$getCaretRange = Al),
      (exports.$getCaretRangeInDirection = Vl),
      (exports.$getCharacterOffsets = $r),
      (exports.$getChildCaret = Nl),
      (exports.$getChildCaretAtIndex = ql),
      (exports.$getChildCaretOrSelf = vl),
      (exports.$getCollapsedCaretRange = Ml),
      (exports.$getCommonAncestor = Rl),
      (exports.$getCommonAncestorResultBranchOrder = Il),
      (exports.$getDOMSlot = Ws),
      (exports.$getDOMTextNode = Ys),
      (exports.$getEditor = zs),
      (exports.$getEditorDOMRenderConfig = $s),
      (exports.$getNearestNodeFromDOMNode = Wi),
      (exports.$getNearestRootOrShadowRoot = Ts),
      (exports.$getNodeByKey = Ki),
      (exports.$getNodeByKeyOrThrow = Es),
      (exports.$getNodeFromDOMNode = Bi),
      (exports.$getPreviousSelection = eo),
      (exports.$getRoot = ji),
      (exports.$getSelection = to),
      (exports.$getSiblingCaret = xl),
      (exports.$getState = st),
      (exports.$getStateChange = function (t, e, n) {
        var r = st(t, n, "direct"),
          o = st(e, n, "direct");
        return n.isEqual(r, o) ? null : [r, o];
      }),
      (exports.$getTextContent = function () {
        var t = to();
        return null === t ? "" : t.getTextContent();
      }),
      (exports.$getTextNodeOffset = Sl),
      (exports.$getTextPointCaret = Cl),
      (exports.$getTextPointCaretSlice = Tl),
      (exports.$getWritableNodeState = ut),
      (exports.$hasAncestor = xs),
      (exports.$hasUpdateTag = function (t) {
        return ko()._updateTags.has(t);
      }),
      (exports.$insertNodes = function (t) {
        var e = to() || eo();
        (null === e && (e = ji().selectEnd()), e.insertNodes(t));
      }),
      (exports.$isBlockElementNode = Vr),
      (exports.$isChildCaret = _l),
      (exports.$isDecoratorNode = Yo),
      (exports.$isEditorState = function (t) {
        return t instanceof _qo;
      }),
      (exports.$isElementDOMSlot = Us),
      (exports.$isElementNode = $o),
      (exports.$isExtendableTextPointCaret = Jl),
      (exports.$isInlineElementOrDecoratorNode = function (t) {
        return ($o(t) && t.isInline()) || (Yo(t) && t.isInline());
      }),
      (exports.$isLeafNode = function (t) {
        return Er(t) || ei(t) || Yo(t);
      }),
      (exports.$isLexicalNode = function (t) {
        return t instanceof _Zn5;
      }),
      (exports.$isLineBreakNode = ei),
      (exports.$isNodeCaret = function (t) {
        return t instanceof _sl4;
      }),
      (exports.$isNodeSelection = Br),
      (exports.$isParagraphNode = ci),
      (exports.$isRangeSelection = Lr),
      (exports.$isRootNode = Ho),
      (exports.$isRootOrShadowRoot = Ns),
      (exports.$isSiblingCaret = gl),
      (exports.$isTabNode = wr),
      (exports.$isTextNode = Er),
      (exports.$isTextPointCaret = hl),
      (exports.$isTextPointCaretSlice = function (t) {
        return t instanceof _El;
      }),
      (exports.$isTokenOrSegmented = bi),
      (exports.$isTokenOrTab = Ei),
      (exports.$nodesOfType = function (t) {
        var e = t.getType(),
          n = vo();
        if (n._readOnly) {
          var _t221 = Js(n).get(e);
          return _t221 ? Array.from(_t221.values()) : [];
        }
        var r = n._nodeMap,
          o = [];
        for (var _ref34 of r) {
          var _n104 = _ref34[1];
          _n104 instanceof t &&
            _n104.__type === e &&
            _n104.isAttached() &&
            o.push(_n104);
        }
        return o;
      }),
      (exports.$normalizeCaret = Hl),
      (exports.$normalizeSelection__EXPERIMENTAL = Ct),
      (exports.$onUpdate = ms),
      (exports.$parseSerializedNode = function (t) {
        return wo(t, ko()._nodes);
      }),
      (exports.$removeTextFromCaretRange = jl),
      (exports.$rewindSiblingCaret = Wl),
      (exports.$selectAll = function (t) {
        var e = ji();
        if (Lr(t)) {
          var _e144 = t.anchor,
            _n105 = t.focus,
            _r75 = _e144
              .getNode()
              .getTopLevelElementOrThrow()
              .getParentOrThrow();
          return (
            _e144.set(_r75.getKey(), 0, "element"),
            _n105.set(_r75.getKey(), _r75.getChildrenSize(), "element"),
            Ct(t),
            t
          );
        }
        {
          var _t222 = e.select(0, e.getChildrenSize());
          return (Ji(Ct(_t222)), _t222);
        }
      }),
      (exports.$setCompositionKey = Ri),
      (exports.$setDirectionFromDOM = qs),
      (exports.$setFormatFromDOM = Xs),
      (exports.$setPointFromCaret = Kl),
      (exports.$setSelection = Ji),
      (exports.$setSelectionFromCaretRange = Bl),
      (exports.$setState = function (t, e, n) {
        var r;
        if ((To(), "function" == typeof n)) {
          var _o59 = t.getLatest(),
            _i38 = st(_o59, e);
          if (((r = n(_i38)), e.isEqual(_i38, r))) return _o59;
        } else r = n;
        var o = t.getWritable();
        return (ut(o).updateFromKnown(e, r), o);
      }),
      (exports.$splitAtPointCaretNext = function (t, _temp) {
        var _ref35 = _temp === void 0 ? {} : _temp,
          _ref35$$copyElementNo = _ref35.$copyElementNode,
          e = _ref35$$copyElementNo === void 0 ? vs : _ref35$$copyElementNo,
          _ref35$$splitTextPoin = _ref35.$splitTextPointCaretNext,
          n = _ref35$$splitTextPoin === void 0 ? Xl : _ref35$$splitTextPoin,
          _ref35$rootMode = _ref35.rootMode,
          r = _ref35$rootMode === void 0 ? "shadowRoot" : _ref35$rootMode,
          _ref35$$shouldSplit = _ref35.$shouldSplit,
          o = _ref35$$shouldSplit === void 0 ? Ql : _ref35$$shouldSplit,
          _ref35$removeEmptyDes = _ref35.removeEmptyDestination,
          i = _ref35$removeEmptyDes === void 0 ? !1 : _ref35$removeEmptyDes;
        if (hl(t)) return n(t);
        var s = t.getParentCaret(r);
        if (s) {
          var _n106 = s.origin;
          if (_l(t)) {
            var _t223 = Wl(s);
            if (i && _n106.isEmpty()) return (_n106.remove(), _t223);
            if (!_n106.canBeEmpty() || !o(_n106, "first")) return _t223;
          }
          var _r76 = (function (t) {
            var e = [];
            for (
              var _n107 = t.getAdjacentCaret();
              _n107;
              _n107 = _n107.getAdjacentCaret()
            )
              e.push(_n107.origin);
            return e;
          })(t);
          (_r76.length > 0 || (!i && _n106.canBeEmpty() && o(_n106, "last"))) &&
            s.insert(e(_n106).splice(0, 0, _r76));
        }
        return s;
      }),
      (exports.$splitNode = function (e, n) {
        var r = e.getChildAtIndex(n);
        (null == r && (r = e), Ns(e) && t(102));
        var _o62 = function o(e) {
            var n = e.getParentOrThrow(),
              i = Ns(n),
              s = e !== r || i ? vs(e) : e;
            if (i)
              return (($o(e) && $o(s)) || t(133), e.insertAfter(s), [e, s, s]);
            {
              var _o61 = _o62(n),
                _t224 = _o61[0],
                _r77 = _o61[1],
                _i39 = _o61[2],
                _l14 = e.getNextSiblings();
              return (
                _i39.append.apply(_i39, [s].concat(_l14)),
                [_t224, _r77, s]
              );
            }
          },
          _o60 = _o62(r),
          i = _o60[0],
          s = _o60[1];
        return [i, s];
      }),
      (exports.$updateDOMSelection = co),
      (exports.$updateRangeSelectionFromCaretRange = zl),
      (exports.ArtificialNode__DO_NOT_USE = _Xo),
      (exports.BEFORE_INPUT_COMMAND = pe),
      (exports.BLUR_COMMAND = ln),
      (exports.CAN_REDO_COMMAND = rn),
      (exports.CAN_UNDO_COMMAND = on),
      (exports.CAN_USE_BEFORE_INPUT = i),
      (exports.CAN_USE_DOM = e),
      (exports.CLEAR_EDITOR_COMMAND = en),
      (exports.CLEAR_HISTORY_COMMAND = nn),
      (exports.CLICK_COMMAND = _e),
      (exports.COLLABORATION_TAG = er),
      (exports.COMMAND_PRIORITY_BEFORE_CRITICAL = -4),
      (exports.COMMAND_PRIORITY_BEFORE_EDITOR = -8),
      (exports.COMMAND_PRIORITY_BEFORE_HIGH = -5),
      (exports.COMMAND_PRIORITY_BEFORE_LOW = -7),
      (exports.COMMAND_PRIORITY_BEFORE_NORMAL = -6),
      (exports.COMMAND_PRIORITY_CRITICAL = 4),
      (exports.COMMAND_PRIORITY_EDITOR = ai),
      (exports.COMMAND_PRIORITY_HIGH = 3),
      (exports.COMMAND_PRIORITY_LOW = 1),
      (exports.COMMAND_PRIORITY_NORMAL = 2),
      (exports.COMPOSITION_END_COMMAND = xe),
      (exports.COMPOSITION_END_TAG = sr),
      (exports.COMPOSITION_START_COMMAND = me),
      (exports.COMPOSITION_START_TAG = ir),
      (exports.CONTROLLED_TEXT_INSERTION_COMMAND = Ne),
      (exports.COPY_COMMAND = Qe),
      (exports.CUT_COMMAND = Ze),
      (exports.DEFAULT_EDITOR_DOM_CONFIG = di),
      (exports.DELETE_CHARACTER_COMMAND = Ce),
      (exports.DELETE_LINE_COMMAND = Ee),
      (exports.DELETE_WORD_COMMAND = Oe),
      (exports.DRAGEND_COMMAND = Xe),
      (exports.DRAGOVER_COMMAND = qe),
      (exports.DRAGSTART_COMMAND = Ve),
      (exports.DROP_COMMAND = Je),
      (exports.DecoratorNode = _Uo),
      (exports.ElementNode = _zo4),
      (exports.FOCUS_COMMAND = sn),
      (exports.FORMAT_ELEMENT_COMMAND = Ge),
      (exports.FORMAT_TEXT_COMMAND = be),
      (exports.HISTORIC_TAG = "historic"),
      (exports.HISTORY_MERGE_TAG = tr),
      (exports.HISTORY_PUSH_TAG = "history-push"),
      (exports.INDENT_CONTENT_COMMAND = je),
      (exports.INPUT_COMMAND = ye),
      (exports.INSERT_LINE_BREAK_COMMAND = Se),
      (exports.INSERT_PARAGRAPH_COMMAND = Te),
      (exports.INSERT_TAB_COMMAND = Ye),
      (exports.INTERNAL_$isBlock = Bs),
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
      (exports.KEY_ARROW_DOWN_COMMAND = Le),
      (exports.KEY_ARROW_LEFT_COMMAND = Pe),
      (exports.KEY_ARROW_RIGHT_COMMAND = De),
      (exports.KEY_ARROW_UP_COMMAND = Re),
      (exports.KEY_BACKSPACE_COMMAND = ze),
      (exports.KEY_DELETE_COMMAND = We),
      (exports.KEY_DOWN_COMMAND = we),
      (exports.KEY_ENTER_COMMAND = Ke),
      (exports.KEY_ESCAPE_COMMAND = $e),
      (exports.KEY_MODIFIER_COMMAND = cn),
      (exports.KEY_SPACE_COMMAND = Be),
      (exports.KEY_TAB_COMMAND = Ue),
      (exports.LineBreakNode = _Qo),
      (exports.MOVE_TO_END = Ie),
      (exports.MOVE_TO_START = Fe),
      (exports.NODE_STATE_KEY = "$"),
      (exports.OUTDENT_CONTENT_COMMAND = He),
      (exports.PASTE_COMMAND = ve),
      (exports.PASTE_TAG = "paste"),
      (exports.ParagraphNode = _ii),
      (exports.REDO_COMMAND = Ae),
      (exports.REMOVE_TEXT_COMMAND = ke),
      (exports.RootNode = _jo),
      (exports.SELECTION_CHANGE_COMMAND = he),
      (exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = ge),
      (exports.SELECT_ALL_COMMAND = tn),
      (exports.SKIP_COLLAB_TAG = "skip-collab"),
      (exports.SKIP_DOM_SELECTION_TAG = rr),
      (exports.SKIP_SCROLL_INTO_VIEW_TAG = nr),
      (exports.SKIP_SELECTION_FOCUS_TAG = or),
      (exports.TEXT_TYPE_TO_FORMAT = M),
      (exports.TabNode = _Mr),
      (exports.TextNode = _yr2),
      (exports.UNDO_COMMAND = Me),
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
        var n = Zl.apply(void 0, e);
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
      (exports.createCommand = de),
      (exports.createEditor = function (t) {
        var e = t || {},
          n = Eo(),
          r = e.theme || {},
          o = void 0 === t ? n : e.parentEditor || null,
          i = e.disableEvents || !1,
          s = Go(),
          l = e.namespace || (null !== o ? o._config.namespace : Xi()),
          c = e.editorState,
          a = [_jo, _yr2, _Qo, _Mr, _ii, _Xo].concat(e.nodes || []),
          u = e.onError,
          f = e.html,
          d = void 0 === e.editable || e.editable;
        var h;
        if (void 0 === t && null !== n) h = n._nodes;
        else {
          h = new Map();
          for (var _t225 = 0; _t225 < a.length; _t225++) {
            var _e145 = a[_t225],
              _n108 = null,
              _r78 = null;
            if ("function" != typeof _e145) {
              var _t226 = _e145;
              ((_e145 = _t226.replace),
                (_n108 = _t226["with"]),
                (_r78 = _t226.withKlass || null));
            }
            nl(_e145);
            var _o63 = _e145.getType(),
              _i40 = fi(_e145);
            h.set(_o63, {
              exportDOM: f && f["export"] ? f["export"].get(_e145) : void 0,
              klass: _e145,
              replace: _n108,
              replaceWithKlass: _r78,
              sharedNodeState: lt(a[_t225]),
              transforms: _i40,
            });
          }
        }
        var g = new _i41(
          s,
          o,
          h,
          {
            disableEvents: i,
            dom: babelHelpers["extends"]({}, di, t && t.dom),
            namespace: l,
            theme: r,
          },
          u || console.error,
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
          })(h, f ? f["import"] : void 0),
          d,
          t,
        );
        return (
          void 0 !== c && ((g._pendingEditorState = c), (g._dirtyType = 2)),
          (function (t) {
            (t.registerCommand(pe, Rn, ai),
              t.registerCommand(ye, Ln, ai),
              t.registerCommand(me, Kn, ai),
              t.registerCommand(xe, Bn, ai),
              t.registerCommand(we, $n, ai));
          })(g),
          g
        );
      }),
      (exports.createSharedNodeState = lt),
      (exports.createState = function (t, e) {
        return new it(t, e);
      }),
      (exports.declarePeerDependency = function (t, e) {
        return [t, e];
      }),
      (exports.defineExtension = function (t) {
        return t;
      }),
      (exports.flipDirection = al),
      (exports.getDOMOwnerDocument = ps),
      (exports.getDOMSelection = As),
      (exports.getDOMSelectionFromTarget = ws),
      (exports.getDOMTextNode = wi),
      (exports.getEditorPropertyFromDOMNode = Oi),
      (exports.getNearestEditorFromDOMNode = ki),
      (exports.getRegisteredNode = Ci),
      (exports.getRegisteredNodeOrThrow = xi),
      (exports.getStaticNodeConfig = nl),
      (exports.getStyleObjectFromCSS = cr),
      (exports.getTextDirection = function (t) {
        return E.test(t) ? "rtl" : b.test(t) ? "ltr" : null;
      }),
      (exports.getTransformSetFromKlass = fi),
      (exports.isBlockDomNode = Ks),
      (exports.isCurrentlyReadOnlyMode = So),
      (exports.isDOMCapturingSelection = tl),
      (exports.isDOMDocumentNode = Ai),
      (exports.isDOMNode = Is),
      (exports.isDOMTextNode = Mi),
      (exports.isDOMUnmanaged = Zs),
      (exports.isDocumentFragment = Ps),
      (exports.isExactShortcutMatch = os),
      (exports.isHTMLAnchorElement = function (t) {
        return Ds(t) && "A" === t.tagName;
      }),
      (exports.isHTMLElement = Ds),
      (exports.isHTMLTableCellElement = function (t) {
        return Ds(t) && ("TD" === t.tagName || "TH" === t.tagName);
      }),
      (exports.isHTMLTableRowElement = function (t) {
        return Ds(t) && "TR" === t.tagName;
      }),
      (exports.isInlineDomNode = Rs),
      (exports.isLastChildInBlockNode = ri),
      (exports.isLexicalEditor = vi),
      (exports.isModifierMatch = rs),
      (exports.isOnlyChildInBlockNode = ni),
      (exports.isSelectionCapturedInDecoratorInput = Ti),
      (exports.isSelectionWithinEditor = Ni),
      (exports.makeStepwiseIterator = wl),
      (exports.mergeRegister = tc),
      (exports.normalizeClassNames = Zl),
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
        var n = Zl.apply(void 0, e);
        n.length > 0 &&
          (_t$classList3 = t.classList).remove.apply(_t$classList3, n);
      }),
      (exports.removeFromParent = Pi),
      (exports.resetRandomKey = function () {
        mi = 1;
      }),
      (exports.safeCast = function (t) {
        return t;
      }),
      (exports.setDOMStyleFromCSS = ur),
      (exports.setDOMStyleObject = function (t, e) {
        for (var _n109 in e) {
          var _r79 = e[_n109];
          null == _r79 ? t.removeProperty(_n109) : ar(t, _n109, _r79);
        }
      }),
      (exports.setDOMUnmanaged = Qs),
      (exports.setNodeIndentFromDOM = Vs),
      (exports.shallowMergeConfig = function (t, e) {
        if (!e || t === e) return t;
        for (var _n110 in e)
          if (t[_n110] !== e[_n110]) return babelHelpers["extends"]({}, t, e);
        return t;
      }),
      (exports.stopLexicalPropagation = jn),
      (exports.toggleTextFormatType = Di),
      (exports.tokenizeRawText = ao));
  },
  null,
);
